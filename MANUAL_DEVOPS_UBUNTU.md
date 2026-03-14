# Manual Profissional de Instalação e Deploy de Servidor

Este manual detalha o processo de instalação, configuração e implantação de uma aplicação em um servidor Linux Ubuntu (última versão LTS). Ele segue boas práticas de DevOps, segurança e automação de deploy, utilizando Docker, Docker Compose e integração com o GitHub.

---

## 1. Preparação inicial do servidor

O primeiro passo é preparar o sistema operacional básico, instalar ferramentas úteis e aplicar configurações iniciais de segurança.

### Atualização do sistema
Mantenha os pacotes do servidor atualizados para garantir segurança e estabilidade. Execute:
```bash
sudo apt update && sudo apt upgrade -y
```

### Instalação de ferramentas essenciais
Instale utilitários básicos que ajudarão no gerenciamento e nos próximos passos:
```bash
sudo apt install git curl wget build-essential unzip htop ufw -y
```

### Configuração básica de segurança

**1. Criação de usuário para deploy:**
Evite usar o usuário root para operações diárias.
```bash
sudo adduser deploy
sudo usermod -aG sudo deploy
```
Mude para o novo usuário:
```bash
su - deploy
```

**2. Configuração de SSH e desativação de login root:**
Abra o arquivo de configuração do SSH:
```bash
sudo nano /etc/ssh/sshd_config
```
Altere as seguintes linhas (ou adicione-as se não existirem):
```text
PermitRootLogin no
PasswordAuthentication no
```
Reinicie o serviço SSH para aplicar:
```bash
sudo systemctl restart ssh
```

**3. Configuração do firewall (UFW):**
Habilite as portas essenciais (SSH, HTTP, HTTPS) antes de ativar o firewall.
```bash
sudo ufw allow OpenSSH
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
```

---

## 2. Configuração do GitHub no servidor

Para clonar repositórios privados e permitir a automação sem necessidade de senhas, usaremos chaves SSH.

### Gerar chave SSH
Logado como o usuário `deploy`, gere a chave:
```bash
ssh-keygen -t ed25519 -C "deploy@server"
```
Pressione `Enter` para aceitar o caminho padrão e não adicione uma senha (passphrase) para não travar automações.

### Adicionar chave ao GitHub
Exiba a chave pública gerada:
```bash
cat ~/.ssh/id_ed25519.pub
```
Copie a saída e cole nas configurações de SSH Keys do seu GitHub (Settings > SSH and GPG keys > New SSH key).

### Testar conexão
```bash
ssh -T git@github.com
```
A resposta deve ser: *Hi username! You've successfully authenticated...*

### Clonar o repositório do projeto
```bash
git clone git@github.com:SEU_USUARIO/SEU_REPOSITORIO.git
```

---

## 3. Atualização automática do servidor via GitHub

Para que o servidor sempre reflita o código mais atual, temos duas opções principais de automação.

### Opção 1 — Script de deploy automático
Crie um script shell que puxa as alterações e recria os containers.
```bash
nano /var/www/scripts/deploy.sh
```
**Conteúdo (`deploy.sh`):**
```bash
#!/bin/bash
cd /var/www/projeto-production
echo "Iniciando deploy..."
git pull origin main
docker compose down
docker compose up -d --build
echo "Deploy finalizado com sucesso!"
```
Dê permissão de execução ao script:
```bash
chmod +x /var/www/scripts/deploy.sh
```

### Opção 2 — Webhook do GitHub
Para uma automação real baseada em eventos, você pode configurar um Webhook.
1. No repositório do GitHub, vá em **Settings > Webhooks > Add webhook**.
2. **Payload URL**: `http://SEU_IP_OU_DOMINIO/webhook` (requer um serviço ouvindo esta rota).
3. **Fluxo esperado**: GitHub recebe um `push` na branch principal → Envia POST via Webhook → O servidor intercepta → Executa o script de deploy → Atualiza containers.

---

## 4. Instalação e configuração do Docker

Docker e Docker Compose padronizarão o ambiente da aplicação.

### Instalar Docker
```bash
sudo apt install docker.io -y
```

### Habilitar serviço do Docker
Garanta que o Docker inicie automaticamente com o servidor:
```bash
sudo systemctl enable docker
sudo systemctl start docker
```

### Instalar Docker Compose
O Docker atual já fornece o compose como plugin:
```bash
sudo apt install docker-compose-plugin -y
```

### Adicionar usuário ao grupo Docker
Para não precisar usar `sudo` em comandos do Docker:
```bash
sudo usermod -aG docker deploy
```

### Testar Docker
```bash
docker --version
docker compose version
```

---

## 5. Estrutura de pastas do servidor

Manter um padrão de diretórios ajuda na manutenção e separação de ambientes.
```bash
sudo mkdir -p /var/www/projeto-production
sudo mkdir -p /var/www/projeto-staging
sudo mkdir -p /var/www/scripts
sudo chown -R deploy:deploy /var/www
```

---

## 6. Ambiente de testes (Staging)

O ambiente `staging` é uma réplica da produção para validação.
- Permite testes de código de novas funcionalidades.
- Validação técnica e simulação de deploy.
- Roda containers independentes, com seu próprio banco de dados temporário, em portas diferentes, sem afetar o público real.

---

## 7. Ambiente de produção (Production)

O ambiente oficial da aplicação.
- A versão estável do software, voltada para o cliente.
- Possui acesso público (ex: porta 80 e 443 com domínio roteado).
- Deploy automatizado que não afeta a estabilidade dos containers isolados.

---

## 8. Configuração de Docker Compose

Na pasta do seu projeto (`/var/www/projeto-production`), crie o arquivo base de infraestrutura:
```bash
nano docker-compose.yml
```
**Exemplo estrutural (`docker-compose.yml`):**
```yaml
version: "3.9"

services:
  app:
    build: .
    container_name: app_server
    restart: always
    ports:
      - "3000:3000"

  database:
    image: mysql:8
    container_name: mysql_server
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: app
    volumes:
      - db_data:/var/lib/mysql

volumes:
  db_data:
```

---

## 9. Deploy da aplicação

Para executar os containers pela primeira vez:
```bash
cd /var/www/projeto-production
docker compose up -d
```

Para atualizar o sistema após uma aprovação/commit no GitHub:
```bash
/var/www/scripts/deploy.sh
```

---

## 10. Manutenção do servidor

Comandos de rotina para administrar a aplicação:

- **Atualizar código manualmente:**
  ```bash
  git pull
  ```
- **Reiniciar containers:**
  ```bash
  docker compose restart
  ```
- **Ver logs (monitoramento contínuo):**
  ```bash
  docker logs -f app_server
  ```
- **Parar containers:**
  ```bash
  docker compose down
  ```

---

### Conclusão e Resultado Esperado
Finalizando este processo, seu servidor Ubuntu terá a infraestrutura baseada nas melhores práticas de DevOps. O ecossistema está agora preparado com uma conexão segura com o repositório, processos de containers e separação inteligente entre ambiente real (produção) e testes (staging), pronto para escalabilidade!