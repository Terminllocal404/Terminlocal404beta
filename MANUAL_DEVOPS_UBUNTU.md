# Manual Profissional de Instalação e Deploy de Servidor (Versão Aprimorada)

Este manual detalha o processo de instalação, configuração e implantação de uma aplicação em um servidor Linux Ubuntu (última versão LTS). Ele foi aprimorado para corrigir erros comuns de permissão, falta de memória (OOM), instalação de versões defasadas do Docker e inclui configuração de proxy reverso (Nginx) e SSL (HTTPS).

---

## 1. Preparação inicial do servidor

### 1.1 Atualização do sistema
Mantenha os pacotes do servidor atualizados para garantir segurança e estabilidade. Execute:
```bash
sudo apt update && sudo apt upgrade -y
```

### 1.2 Criação de Memória Swap (Prevenção de Erros de Build)
Muitas vezes, o servidor trava ao rodar o `docker build` ou `npm install` por falta de memória RAM. Criar um arquivo Swap resolve isso:
```bash
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

### 1.3 Instalação de ferramentas essenciais
```bash
sudo apt install git curl wget build-essential unzip htop ufw software-properties-common apt-transport-https ca-certificates -y
```

---

## 2. Configuração básica de segurança

### 2.1 Criação de usuário para deploy
Evite usar o usuário `root` para operações diárias.
```bash
sudo adduser deploy
sudo usermod -aG sudo deploy
```
*A partir de agora, mude para o novo usuário:*
```bash
su - deploy
```

### 2.2 Configuração de SSH
Desative o login via senha e o login direto do root.
```bash
sudo nano /etc/ssh/sshd_config
```
Altere ou adicione:
```text
PermitRootLogin no
PasswordAuthentication no
```
Reinicie o serviço SSH:
```bash
sudo systemctl restart ssh
```

### 2.3 Configuração do firewall (UFW)
Habilite as portas essenciais antes de ativar o firewall para não perder o acesso.
```bash
sudo ufw allow OpenSSH
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
```

---

## 3. Instalação Oficial do Docker e Docker Compose

**Importante:** Evite usar o `docker.io` do repositório padrão do Ubuntu, pois costuma ser desatualizado e causar bugs no `docker compose`.

### 3.1 Adicionar repositório oficial do Docker
```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

### 3.2 Instalar Docker
```bash
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io docker-compose-plugin -y
```

### 3.3 Permissões do Docker (Evitar "Permission Denied")
Adicione o usuário `deploy` ao grupo do Docker:
```bash
sudo usermod -aG docker deploy
```
**Atenção:** Para aplicar a permissão sem precisar sair do servidor, rode:
```bash
newgrp docker
```
Teste com: `docker ps` (não deve pedir sudo nem dar erro).

---

## 4. Estrutura de Pastas e Permissões

Crie os diretórios e passe a propriedade para o usuário `deploy` **antes** de clonar o projeto:
```bash
sudo mkdir -p /var/www/projeto-production
sudo mkdir -p /var/www/projeto-staging
sudo mkdir -p /var/www/scripts
sudo chown -R deploy:deploy /var/www
```

---

## 5. Configuração do GitHub no servidor

### 5.1 Gerar chave SSH para o servidor
Logado como `deploy`:
```bash
ssh-keygen -t ed25519 -C "deploy@server"
```
Não adicione senha (passphrase) para permitir deploy automático.

### 5.2 Adicionar chave ao GitHub
```bash
cat ~/.ssh/id_ed25519.pub
```
Copie a saída e cole no seu GitHub em **Settings > SSH and GPG keys > New SSH key** (ou como Deploy Key diretamente no repositório).

### 5.3 Clonar o repositório
Teste a conexão e clone (faça isso dentro da pasta correta):
```bash
ssh -T git@github.com
cd /var/www/projeto-production
git clone git@github.com:SEU_USUARIO/SEU_REPOSITORIO.git .
```

---

## 6. Variáveis de Ambiente (.env)

Nunca comite o arquivo `.env` no GitHub. Crie-o diretamente no servidor:
```bash
nano /var/www/projeto-production/.env
```
Adicione as variáveis do projeto (exemplo):
```env
NODE_ENV=production
PORT=3000
DATABASE_URL=mysql://root:root@database:3306/app
```

---

## 7. Configuração de Docker Compose

Exemplo estrutural robusto (`docker-compose.yml`):
```yaml
version: "3.9"

services:
  app:
    build: .
    container_name: app_server
    restart: unless-stopped
    env_file:
      - .env
    ports:
      - "127.0.0.1:3000:3000" # Exposto apenas para o localhost (Nginx fará o proxy)
    depends_on:
      - database

  database:
    image: mysql:8
    container_name: mysql_server
    restart: unless-stopped
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: app
    volumes:
      - db_data:/var/lib/mysql

volumes:
  db_data:
```

---

## 8. Nginx e Domínio Seguro (HTTPS / SSL)

Para acessar sua aplicação via domínio (ex: `api.seusite.com`) sem precisar digitar a porta `:3000`.

### 8.1 Instalar Nginx e Certbot
```bash
sudo apt install nginx certbot python3-certbot-nginx -y
```

### 8.2 Configurar Nginx como Proxy Reverso
```bash
sudo nano /etc/nginx/sites-available/projeto
```
Adicione:
```nginx
server {
    listen 80;
    server_name seudominio.com www.seudominio.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```
Ative o site e reinicie o Nginx:
```bash
sudo ln -s /etc/nginx/sites-available/projeto /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 8.3 Gerar Certificado SSL (HTTPS Grátis)
```bash
sudo certbot --nginx -d seudominio.com -d www.seudominio.com
```

---

## 9. Atualização automática (CI/CD Básico)

### 9.1 Script de Deploy (`deploy.sh`)
```bash
nano /var/www/scripts/deploy.sh
```
```bash
#!/bin/bash
cd /var/www/projeto-production
echo "Iniciando deploy em $(date)" >> /var/log/deploy.log

# Atualiza código
git reset --hard
git pull origin main

# Reconstrói os containers
docker compose up -d --build

echo "Deploy finalizado" >> /var/log/deploy.log
```
```bash
chmod +x /var/www/scripts/deploy.sh
```

### 9.2 Webhook do GitHub (Real)
Para não precisar rodar o script na mão, instale o ouvinte de webhook:
```bash
sudo apt install webhook -y
```
Crie o arquivo de configuração:
```bash
nano /etc/webhook.conf
```
```json
[
  {
    "id": "deploy-projeto",
    "execute-command": "/var/www/scripts/deploy.sh",
    "command-working-directory": "/var/www/projeto-production"
  }
]
```
Inicie o serviço (porta padrão 9000):
```bash
webhook -hooks /etc/webhook.conf -verbose &
```
No GitHub, vá em **Settings > Webhooks**:
- **Payload URL:** `http://IP_DO_SERVIDOR:9000/hooks/deploy-projeto`
- **Content type:** `application/json`

---

## 10. Comandos Úteis de Manutenção

- **Verificar uso de recursos:** `htop` ou `docker stats`
- **Ver logs da aplicação:** `docker logs -f app_server`
- **Acessar o terminal do container:** `docker exec -it app_server /bin/sh`
- **Limpar Docker (remover imagens não usadas):** `docker system prune -a -f`
- **Ver logs do Nginx (erros de proxy):** `sudo tail -f /var/log/nginx/error.log`