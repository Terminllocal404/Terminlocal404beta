# Manual de Instalação e Configuração do Servidor - Terminal 404

Este manual fornece o passo a passo completo para configurar, instalar e colocar em produção o sistema web da **Terminal 404**, incluindo o Front-end (React/Vite) e o Back-end (Python/FastAPI).

---

## 1. Preparação do Servidor Ubuntu (Última Versão)

Acesse seu servidor via SSH. Recomendamos rodar os comandos iniciais para atualizar os pacotes e instalar dependências essenciais:

```bash
# Atualizar a lista de pacotes e o sistema
sudo apt update && sudo apt upgrade -y

# Instalar pacotes essenciais
sudo apt install -y curl git build-essential nginx ufw
```

**Configurar o Firewall (UFW):**
Liberte as portas essenciais para acesso SSH, HTTP e HTTPS:
```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

---

## 2. Instalação das Dependências Necessárias

### Node.js e Gerenciadores de Pacote (Front-end)
O Front-end utiliza Node.js e o gerenciador de pacotes `pnpm` ou `npm`.

```bash
# Instalar o Node.js (via NodeSource - versão 20 LTS recomendada)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Instalar o PM2 para gerenciamento de processos (opcional para o back, essencial se for rodar Node no servidor)
sudo npm install -g pm2

# Instalar o pnpm (gerenciador de pacotes utilizado pelo projeto)
sudo npm install -g pnpm
```

### Python 3 e Virtualenv (Back-end)
```bash
# Instalar Python 3 e pacote venv
sudo apt install -y python3 python3-pip python3-venv
```

---

## 3. Configuração do Ambiente do Projeto

Crie um diretório para a aplicação e clone seu repositório (substitua pelo URL do seu repositório):

```bash
# Criar pasta em /var/www
sudo mkdir -p /var/www/terminal404
sudo chown -R $USER:$USER /var/www/terminal404
cd /var/www/terminal404

# Clonar o repositório (exemplo)
git clone https://github.com/seu-usuario/seu-repositorio.git .
```

A estrutura do projeto deve conter a raiz (front-end) e a pasta `/backend`.

---

## 4. Configuração do Banco de Dados (PostgreSQL)

*(A aplicação atual foca no envio de e-mails via SMTP, mas caso utilize ou expanda para um banco de dados para a área de Comunidade ou métricas, siga os passos abaixo).*

```bash
# Instalar PostgreSQL
sudo apt install -y postgresql postgresql-contrib

# Iniciar o serviço
sudo systemctl start postgresql
sudo systemctl enable postgresql

# Criar banco e usuário
sudo -i -u postgres psql -c "CREATE DATABASE terminal404;"
sudo -i -u postgres psql -c "CREATE USER terminal_user WITH PASSWORD 'senha_super_segura';"
sudo -i -u postgres psql -c "ALTER ROLE terminal_user SET client_encoding TO 'utf8';"
sudo -i -u postgres psql -c "ALTER ROLE terminal_user SET default_transaction_isolation TO 'read committed';"
sudo -i -u postgres psql -c "ALTER ROLE terminal_user SET timezone TO 'UTC';"
sudo -i -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE terminal404 TO terminal_user;"
```

---

## 5. Configuração das Variáveis de Ambiente

Na raiz do projeto, configure as variáveis de ambiente necessárias para o Front e para o Back.

### Variáveis do Back-end
```bash
cd /var/www/terminal404/backend
cp .env.example .env
nano .env
```
No arquivo `/backend/.env`, adicione os dados de SMTP configurados:
```env
# Configurações de E-mail (SMTP)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_HOST_USER=terminallocal404@gmail.com
EMAIL_HOST_PASSWORD=uhyf nnch vyrc rfht

# Banco de Dados (se for usar o PostgreSQL configurado acima)
DATABASE_URL=postgresql://terminal_user:senha_super_segura@localhost/terminal404
```

### Variáveis do Front-end
```bash
cd /var/www/terminal404
nano .env.production
```
Defina o endpoint base onde o back-end será servido:
```env
VITE_API_BASE_URL=https://seusite.com/api
```

---

## 6. Configuração do Back-end (FastAPI)

Vamos isolar o Python e instalar os pacotes, usando o Uvicorn como servidor.

```bash
cd /var/www/terminal404/backend

# Criar e ativar o ambiente virtual
python3 -m venv venv
source venv/bin/activate

# Instalar dependências
pip install -r requirements.txt
pip install uvicorn gunicorn
```

**Criar serviço do Systemd para o Back-end (Gunicorn/Uvicorn):**

```bash
sudo nano /etc/systemd/system/terminal404-backend.service
```

Cole o conteúdo abaixo:
```ini
[Unit]
Description=Gunicorn instance to serve Terminal 404 Backend
After=network.target

[Service]
User=root
Group=www-data
WorkingDirectory=/var/www/terminal404/backend
Environment="PATH=/var/www/terminal404/backend/venv/bin"
# O Gunicorn vai rodar o FastAPI na porta local 8000 usando Uvicorn workers
ExecStart=/var/www/terminal404/backend/venv/bin/gunicorn app.main:app -w 4 -k uvicorn.workers.UvicornWorker -b 127.0.0.1:8000

[Install]
WantedBy=multi-user.target
```

Inicie o serviço:
```bash
sudo systemctl start terminal404-backend
sudo systemctl enable terminal404-backend
```

---

## 7. Configuração do Front-end (React/Vite)

Compile a versão otimizada do front-end que será servida estaticamente pelo Nginx.

```bash
cd /var/www/terminal404

# Instalar dependências do front-end
pnpm install

# Construir (Build) do site
pnpm run build
```
O build finalizado ficará dentro da pasta `/var/www/terminal404/dist`.

---

## 8. Como Deixar o Projeto Rodando em Produção (Nginx e SSL)

O Nginx vai servir os arquivos estáticos gerados na pasta `/dist` do React e fazer o *Reverse Proxy* (redirecionamento) da rota `/api` para a porta local `8000` do FastAPI.

**Criar o Bloco de Servidor no Nginx:**
```bash
sudo nano /etc/nginx/sites-available/terminal404
```

Cole a configuração:
```nginx
server {
    listen 80;
    server_name seu-dominio.com www.seu-dominio.com;

    # Servir os arquivos estáticos do React Front-end
    root /var/www/terminal404/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Redirecionar as chamadas /api para o Backend FastAPI
    location /api/ {
        proxy_pass http://127.0.0.1:8000/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_addres_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Ative o site e reinicie o Nginx:
```bash
sudo ln -s /etc/nginx/sites-available/terminal404 /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### Configurar Certificado SSL (HTTPS via Certbot)
```bash
# Instalar o Certbot
sudo apt install -y certbot python3-certbot-nginx

# Gerar e aplicar o certificado SSL automaticamente
sudo certbot --nginx -d seu-dominio.com -d www.seu-dominio.com
```

---

## 9. Como Iniciar a Aplicação e Comandos Úteis

Neste formato, a aplicação já está rodando em produção perfeitamente! 

- O **Front-end** é carregado automaticamente pelo Nginx ao acessar seu domínio.
- O **Back-end** está rodando em segundo plano pelo `systemd`.

**Comandos Úteis de Manutenção:**

- **Ver logs do Back-end (FastAPI):**
  ```bash
  sudo journalctl -u terminal404-backend -f
  ```
- **Reiniciar o Back-end (após alterar código Python):**
  ```bash
  sudo systemctl restart terminal404-backend
  ```
- **Fazer deploy de novas atualizações do Front-end:**
  ```bash
  cd /var/www/terminal404
  git pull
  pnpm install
  pnpm run build
  ```
- **Reiniciar o servidor Nginx:**
  ```bash
  sudo systemctl restart nginx
  ```