# Terminal 404 - Email Microservice (Python)

Este é o microsserviço backend em Python (FastAPI) responsável pelo envio de e-mails da aplicação frontend "Terminal 404". Ele captura as requisições enviadas pelos formulários (Contato e Request) e os envia para o e-mail corporativo utilizando o SMTP do Gmail.

---

## 🚀 Manual de Instalação e Deploy (Ubuntu - Digitation)

### 1. Preparando o Ambiente no Servidor Ubuntu

1. Conecte-se ao seu servidor via SSH:
   ```bash
   ssh root@seu_ip_digitation
   ```

2. Atualize os pacotes do servidor:
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

3. Instale o Python 3, o `pip` e a biblioteca para ambiente virtual:
   ```bash
   sudo apt install python3 python3-pip python3-venv ufw nginx -y
   ```

### 2. Clonando e Configurando o Projeto

1. Acesse o diretório onde o backend ficará armazenado (ex: `/var/www/`):
   ```bash
   cd /var/www/
   # Caso você tenha subido os arquivos deste repositório, faça o clone/download
   # Para fins de exemplo, chamaremos a pasta do projeto de "t404-backend"
   ```

2. Acesse a pasta do backend:
   ```bash
   cd /var/www/t404-backend
   ```

3. Crie e ative o ambiente virtual:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

4. Instale as dependências:
   ```bash
   pip install -r requirements.txt
   ```

5. Configure as variáveis de ambiente:
   ```bash
   cp .env.example .env
   nano .env
   ```
   *(Preencha com o seu e-mail do Gmail e a senha provisória `uhyf nnch vyrc rfht` - certifique-se de que é uma 'Senha de App' gerada no Google, caso haja 2FA ativado).*

### 3. Rodando em Produção com Systemd + Gunicorn / Uvicorn

Para garantir que o serviço reinicie automaticamente caso caia ou o servidor reinicie, vamos criar um serviço no Systemd.

1. Crie o arquivo do serviço:
   ```bash
   sudo nano /etc/systemd/system/t404-backend.service
   ```

2. Insira as configurações abaixo (ajuste os caminhos conforme o diretório real):
   ```ini
   [Unit]
   Description=Gunicorn instance to serve Terminal 404 Backend FastAPI
   After=network.target

   [Service]
   User=www-data
   Group=www-data
   WorkingDirectory=/var/www/t404-backend
   Environment="PATH=/var/www/t404-backend/venv/bin"
   ExecStart=/var/www/t404-backend/venv/bin/gunicorn app.main:app -w 4 -k uvicorn.workers.UvicornWorker -b 127.0.0.1:8000

   [Install]
   WantedBy=multi-user.target
   ```

3. Ative e inicie o serviço:
   ```bash
   sudo systemctl start t404-backend
   sudo systemctl enable t404-backend
   ```

### 4. Configuração do Reverse Proxy (NGINX)

1. Crie o bloco de servidor do Nginx:
   ```bash
   sudo nano /etc/nginx/sites-available/t404-backend
   ```

2. Insira o código a seguir (substitua `api.terminal404.com.br` pelo seu domínio ou IP):
   ```nginx
   server {
       listen 80;
       server_name api.terminal404.com.br; # Coloque seu domínio ou IP

       location / {
           proxy_pass http://127.0.0.1:8000;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
       }
   }
   ```

3. Ative a configuração e reinicie o Nginx:
   ```bash
   sudo ln -s /etc/nginx/sites-available/t404-backend /etc/nginx/sites-enabled
   sudo nginx -t
   sudo systemctl restart nginx
   ```

### 5. Configuração Básica de Segurança e Firewall (UFW)

Para fechar portas desnecessárias:

```bash
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
sudo ufw enable
```

### 6. Como Testar a API (via Terminal local)

1. Teste a integridade (Health Check):
   ```bash
   curl http://SEU_IP/health
   ```
   *Retorno esperado: `{"status": "ok", "message": "Email service is running."}`*

2. Teste o Envio de Email via POST (cURL):
   ```bash
   curl -X POST http://SEU_IP/api/send-email \
     -H "Content-Type: application/json" \
     -d '{
       "name": "Cliente Teste",
       "email": "cliente@teste.com",
       "message": "Teste de payload para a API da Terminal 404"
     }'
   ```
   *Retorno esperado: `{"status": "success", "message": "Payload transmitido com sucesso."}`*

No Frontend (em React), já foi implementada a chamada `fetch` dentro de `Contact.tsx` e `RequestPage.tsx` disparando para a variável de ambiente `VITE_API_URL` apontando para esse servidor!