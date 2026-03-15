# Manual Completo e Definitivo de Instalação e Deploy de Servidor (DevOps & CI/CD)

Este manual é o guia definitivo e consolidado para instalação, configuração, segurança e implantação automatizada de aplicações em um servidor Linux Ubuntu (última versão LTS). Ele une boas práticas de infraestrutura, prevenção de erros (como falta de memória RAM), uso de Docker oficial, proxy reverso com Nginx, SSL grátis e automação real com Webhooks.

---

## 1. Preparação Inicial do Servidor

O primeiro passo é preparar o sistema operacional, atualizá-lo e prevenir travamentos comuns durante o processo de *build* da aplicação.

### 1.1 Atualização do sistema
Mantenha todos os pacotes atualizados para garantir segurança e estabilidade:
```bash
sudo apt update && sudo apt upgrade -y
```

### 1.2 Criação de Memória Swap (Prevenção de Erros "Out of Memory")
Muitas vezes, o servidor trava ao rodar o `docker build` ou `npm install` por falta de memória RAM. Criar um arquivo Swap (memória virtual no disco) resolve isso:
```bash
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

### 1.3 Instalação de ferramentas essenciais
Instale utilitários básicos que ajudarão no gerenciamento:
```bash
sudo apt install git curl wget build-essential unzip htop ufw software-properties-common apt-transport-https ca-certificates -y
```

---

## 2. Configuração de Segurança e Acesso

### 2.1 Criação de usuário para deploy
Evite usar o usuário `root` para operações diárias. Vamos criar um usuário específico:
```bash
sudo adduser deploy
sudo usermod -aG sudo deploy
```
*A partir de agora, mude para o novo usuário para executar os próximos passos:*
```bash
su - deploy
```

### 2.2 Configuração de SSH (Bloqueio do Root)
Aumente a segurança desativando o login via senha e o login direto do root:
```bash
sudo nano /etc/ssh/sshd_config
```
Altere ou adicione as seguintes linhas:
```text
PermitRootLogin no
PasswordAuthentication no
```
Reinicie o serviço SSH para aplicar:
```bash
sudo systemctl restart ssh
```

### 2.3 Configuração do firewall (UFW)
Habilite as portas essenciais antes de ativar o firewall para não perder o acesso ao servidor:
```bash
sudo ufw allow OpenSSH
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
```

---

## 3. Instalação Oficial do Docker e Docker Compose

**Importante:** Evite usar o pacote `docker.io` padrão do Ubuntu, pois ele costuma ser desatualizado e causar bugs no `docker compose`. Instalaremos direto do repositório oficial.

### 3.1 Adicionar repositório oficial da Docker
```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

### 3.2 Instalar o Docker
```bash
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io docker-compose-plugin -y
```

### 3.3 Permissões do Docker (Evitar "Permission Denied")
Garanta que o Docker inicie com o servidor e permita que o usuário `deploy` o execute sem `sudo`:
```bash
sudo systemctl enable docker
sudo systemctl start docker
sudo usermod -aG docker deploy
```
**Atenção:** Para aplicar a permissão imediatamente sem precisar sair do servidor, rode:
```bash
newgrp docker
```
Teste com: `docker --version` e `docker compose version`.

---

## 4. Estrutura de Pastas e Ambientes

Manter um padrão de diretórios ajuda na manutenção e separa o que é teste do que é ambiente real. Crie os diretórios **antes** de clonar o projeto:

```bash
sudo mkdir -p /var/www/projeto-production
sudo mkdir -p /var/www/projeto-staging
sudo mkdir -p /var/www/scripts
sudo chown -R deploy:deploy /var/www
```

* **Staging (`projeto-staging`)**: Ambiente de testes, réplica da produção. Serve para validação técnica de novas funcionalidades antes do público ver.
* **Production (`projeto-production`)**: Ambiente oficial da aplicação, versão estável, com acesso público.

---

## 5. Configuração do GitHub no Servidor

Para clonar repositórios privados e permitir a automação sem necessidade de senhas, usaremos chaves SSH.

### 5.1 Gerar chave SSH
Logado como o usuário `deploy`, gere a chave:
```bash
ssh-keygen -t ed25519 -C "deploy@server"
```
*Pressione `Enter` para todas as perguntas. Não adicione senha (passphrase) para não travar o deploy automático.*

### 5.2 Adicionar chave ao GitHub
Exiba a chave pública:
```bash
cat ~/.ssh/id_ed25519.pub
```
Copie a saída e cole nas configurações do seu GitHub em **Settings > SSH and GPG keys > New SSH key** (ou como Deploy Key no próprio repositório).

### 5.3 Clonar o repositório do projeto
Teste a conexão e clone para a pasta de produção:
```bash
ssh -T git@github.com
cd /var/www/projeto-production
git clone git@github.com:SEU_USUARIO/SEU_REPOSITORIO.git .
```

---

## 6. Variáveis de Ambiente (.env)

Nunca comite o arquivo `.env` no GitHub por segurança. Crie-o diretamente no servidor:
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

## 7. Configuração do Docker Compose

Na pasta do projeto (`/var/www/projeto-production`), crie ou valide o arquivo de infraestrutura:
```bash
nano docker-compose.yml
```

**Exemplo estrutural robusto (`docker-compose.yml`):**
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
      - "127.0.0.1:3000:3000" # Exposto apenas para o localhost por segurança
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

*Inicie os containers pela primeira vez:*
```bash
docker compose up -d
```

---

## 8. Nginx e Domínio Seguro (HTTPS / SSL)

Para acessar sua aplicação via domínio (ex: `seudominio.com`) de forma segura, sem precisar digitar a porta `:3000`, usaremos o Nginx como Proxy Reverso.

### 8.1 Instalar Nginx e Certbot
```bash
sudo apt install nginx certbot python3-certbot-nginx -y
```

### 8.2 Configurar o Nginx
```bash
sudo nano /etc/nginx/sites-available/projeto
```
Adicione a configuração de proxy:
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

## 9. Automação de Deploy (CI/CD Básico)

Para que o servidor sempre reflita o código mais atual do GitHub automaticamente.

### 9.1 Script de Deploy (`deploy.sh`)
Crie o script que executa a atualização:
```bash
nano /var/www/scripts/deploy.sh
```
**Conteúdo:**
```bash
#!/bin/bash
cd /var/www/projeto-production
echo "Iniciando deploy em $(date)" >> /var/log/deploy.log

# Força atualização do código
git reset --hard
git pull origin main

# Reconstrói os containers com o novo código
docker compose down
docker compose up -d --build

echo "Deploy finalizado" >> /var/log/deploy.log
```
Dê permissão de execução:
```bash
chmod +x /var/www/scripts/deploy.sh
```

### 9.2 Ouvinte de Webhook do GitHub
Instale o pacote para escutar os eventos do GitHub de verdade:
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
Inicie o serviço (ele rodará na porta 9000):
```bash
webhook -hooks /etc/webhook.conf -verbose &
```
No GitHub, vá em **Settings > Webhooks > Add webhook**:
- **Payload URL:** `http://IP_DO_SERVIDOR:9000/hooks/deploy-projeto`
- **Content type:** `application/json`

---

## 10. Manutenção e Comandos Úteis

Comandos de rotina para administrar seu servidor no dia a dia:

- **Atualizar código manualmente:** `cd /var/www/projeto-production && git pull`
- **Reiniciar containers:** `docker compose restart`
- **Ver logs da aplicação (em tempo real):** `docker logs -f app_server`
- **Acessar o terminal do container:** `docker exec -it app_server /bin/sh`
- **Parar containers:** `docker compose down`
- **Limpar lixo do Docker (liberar espaço em disco):** `docker system prune -a -f`
- **Verificar uso de recursos (RAM/CPU):** `htop` ou `docker stats`
- **Ver logs de erro do Nginx:** `sudo tail -f /var/log/nginx/error.log`

---
*Fim do Manual. Seu servidor agora é uma infraestrutura robusta, segura, automatizada e pronta para escalar na produção!*