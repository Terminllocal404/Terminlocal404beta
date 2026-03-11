# Terminal 404 - Backend API

Este é o back-end em Python desenvolvido para gerenciar as solicitações do formulário de contato do site Terminal 404.

## Tecnologias Utilizadas

- **FastAPI**: Framework web moderno e de alta performance.
- **Pydantic**: Validação de dados e configurações baseada em tipos Python.
- **aiosmtplib**: Envio de e-mails assíncrono.
- **Jinja2**: Templates HTML para e-mails profissionais.
- **Uvicorn**: Servidor ASGI para execução do FastAPI.

---

## 🚀 Guia de Instalação no Servidor (Ubuntu / Digitation)

Este guia assume um servidor Ubuntu limpo com acesso via SSH.

### 1. Instalação das Dependências do Sistema

Atualize o sistema e instale o Python e o Nginx:

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install python3-pip python3-venv nginx git -y
```

### 2. Configuração do Projeto

Clone o repositório e acesse a pasta do back-end:

```bash
git clone <URL_DO_REPOSITORIO>
cd <PASTA_DO_PROJETO>/backend
```

Crie e ative um ambiente virtual:

```bash
python3 -m venv venv
source venv/bin/activate
```

Instale as dependências:

```bash
pip install -r requirements.txt
```

### 3. Configuração das Variáveis de Ambiente

Crie o arquivo `.env` na pasta `backend/`:

```bash
nano .env
```

Adicione o seguinte conteúdo (ajustando se necessário):

```env
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=terminallocal404@gmail.com
SMTP_PASSWORD="uhyf nnch vyrc rfht"
CONTACT_RECEIVER=terminallocal404@gmail.com
ALLOWED_ORIGINS="https://seu-dominio.com,http://localhost:5173"
```

### 4. Configuração do Systemd (Manter o serviço rodando)

Crie um arquivo de serviço para o backend:

```bash
sudo nano /etc/systemd/system/terminal404-backend.service
```

Cole o conteúdo abaixo (ajuste os caminhos `/home/usuario/...` conforme sua realidade):

```ini
[Unit]
Description=Gunicorn instance to serve Terminal 404 Backend
After=network.target

[Service]
User=www-data
Group=www-data
WorkingDirectory=/var/www/terminal404/backend
Environment="PATH=/var/www/terminal404/backend/venv/bin"
ExecStart=/var/www/terminal404/backend/venv/bin/uvicorn app.main:app --host 0.0.0.0 --port 8000

[Install]
WantedBy=multi-user.target
```

Inicie e habilite o serviço:

```bash
sudo systemctl start terminal404-backend
sudo systemctl enable terminal404-backend
```

### 5. Configuração do Nginx como Proxy Reverso

Crie a configuração do site no Nginx:

```bash
sudo nano /etc/nginx/sites-available/terminal404
```

Configuração básica:

```nginx
server {
    listen 80;
    server_name seu-dominio.com;

    # Front-end (Arquivos estáticos do Vite build)
    location / {
        root /var/www/terminal404/dist;
        try_files $uri $uri/ /index.html;
    }

    # Back-end API Proxy
    location /api {
        proxy_pass http://localhost:8000;
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
sudo ln -s /etc/nginx/sites-available/terminal404 /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

---

## 🛠️ Como Testar

### Teste via cURL
```bash
curl -X POST http://localhost:8000/api/contact \
     -H "Content-Type: application/json" \
     -d '{"name": "Teste", "email": "teste@exemplo.com", "message": "Olá, esta é uma mensagem de teste com mais de dez caracteres."}'
```

### Teste via Postman
- **URL**: `http://<IP_OU_DOMINIO>/api/contact`
- **Method**: `POST`
- **Body** (raw JSON):
```json
{
  "name": "Nome de Teste",
  "email": "seu-email@gmail.com",
  "message": "Mensagem de teste para o backend da Terminal 404."
}
```

---

## 🔒 Segurança e Boas Práticas

1. **Firewall**: Recomenda-se habilitar o UFW e permitir apenas SSH, HTTP e HTTPS.
   ```bash
   sudo ufw allow OpenSSH
   sudo ufw allow 'Nginx Full'
   sudo ufw enable
   ```
2. **SMTP**: As credenciais do Gmail fornecidas utilizam "Senhas de App". Nunca utilize sua senha principal diretamente.
3. **CORS**: A variável `ALLOWED_ORIGINS` no `.env` restringe quais domínios podem fazer requisições à API.
