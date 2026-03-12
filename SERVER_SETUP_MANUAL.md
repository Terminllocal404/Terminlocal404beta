# Manual Definitivo de Instalação e Configuração do Servidor - Terminal 404

Este manual fornece o passo a passo completo, **saindo do absoluto zero** (desde a contratação da máquina), para configurar, instalar, proteger e colocar em produção o sistema web da **Terminal 404** (Front-end em React/Vite e Back-end em Python/FastAPI).

---

## FASE 0: Contratação e Acesso Inicial (O Zero Absoluto)

### 1. Contratando a Máquina (VPS)
1. Escolha um provedor de nuvem (DigitalOcean, AWS, Linode, Hetzner, Hostinger, Google Cloud, etc.).
2. Crie uma nova instância (Droplet, EC2, VPS).
3. **Sistema Operacional recomendado:** Ubuntu 24.04 LTS (ou 22.04 LTS).
4. **Configuração recomendada:** Pelo menos 1GB de RAM e 1 vCPU (necessário para rodar o build do React e o servidor Python simultaneamente).

### 2. Primeiro Acesso
Abra o terminal do seu computador e acesse o servidor usando o IP público fornecido pela hospedagem e o usuário `root` (o provedor enviará a senha por e-mail ou solicitará a configuração de uma chave SSH):

```bash
ssh root@IP_DO_SERVIDOR
```
*(Se estiver usando AWS, geralmente o usuário padrão é `ubuntu` e o acesso é feito via chave: `ssh -i chave.pem ubuntu@IP_DO_SERVIDOR`)*

---

## FASE 1: Configuração Básica e Segurança do Servidor

Nunca rode aplicações em produção utilizando o usuário `root`. Vamos preparar o servidor com boas práticas.

### 1. Criando um Usuário de Deploy
Crie um usuário comum chamado `terminal` (ou outro de sua preferência):
```bash
adduser terminal
# O sistema pedirá para você criar e confirmar uma senha. Preencha os demais campos com Enter.
```

Adicione este usuário ao grupo de administradores (para poder executar comandos como `sudo`):
```bash
usermod -aG sudo terminal
```

### 2. Configurando Acesso Seguro (SSH)
Copie a chave de acesso do root para o novo usuário:
```bash
rsync --archive --chown=terminal:terminal ~/.ssh /home/terminal
```

**Teste o acesso!** Abra uma nova aba no terminal do seu computador e tente acessar com o novo usuário:
```bash
ssh terminal@IP_DO_SERVIDOR
```

Se conseguiu acessar com sucesso, feche a conexão do `root` e continue **apenas** com o usuário `terminal`.

Para aumentar a segurança, desabilite o login via senha e o login direto via root:
```bash
sudo nano /etc/ssh/sshd_config
```
Procure e altere as seguintes linhas:
- `PermitRootLogin no`
- `PasswordAuthentication no`
Salve (CTRL+O, Enter, CTRL+X) e reinicie o serviço:
```bash
sudo systemctl restart ssh
```

### 3. Configurando Memória Swap (Prevenção de Quedas)
Se o servidor tem 1GB de RAM, o build do React pode travar por falta de memória. Crie 1GB de memória Swap (memória virtual no HD):
```bash
sudo fallocate -l 1G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

### 4. Fuso Horário e Atualização de Pacotes
Ajuste o fuso horário (exemplo: São Paulo):
```bash
sudo timedatectl set-timezone America/Sao_Paulo
```

Atualize o sistema:
```bash
sudo apt update && sudo apt upgrade -y
```

### 5. Configuração do Firewall (UFW)
Instale pacotes essenciais e feche o servidor, deixando apenas portas de navegação e acesso abertas:
```bash
sudo apt install -y curl git build-essential nginx ufw
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

---

## FASE 2: Instalação das Dependências do Sistema

### 1. Node.js e Gerenciadores de Pacote (Front-end)
```bash
# Instalar o Node.js 20 LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Instalar pnpm
sudo npm install -g pnpm
```

### 2. Python 3 e Virtualenv (Back-end)
```bash
sudo apt install -y python3 python3-pip python3-venv
```

---

## FASE 3: Clonando e Estruturando o Projeto

Vamos preparar a pasta `/var/www` para hospedar o projeto.

```bash
# Criar a pasta raiz do projeto
sudo mkdir -p /var/www/terminal404

# Passar a propriedade da pasta para o usuário 'terminal'
sudo chown -R terminal:terminal /var/www/terminal404

# Acessar a pasta
cd /var/www/terminal404

# Clonar o repositório do projeto (substitua pelo link real do seu repositório)
git clone https://github.com/seu-usuario/seu-repositorio.git .
```

---

## FASE 4: Configuração das Variáveis de Ambiente

### 1. Variáveis do Back-end (E-mail SMTP)
```bash
cd /var/www/terminal404/backend
cp .env.example .env
nano .env
```
Preencha o arquivo com os dados de envio de e-mail (conforme fornecido anteriormente):
```env
# Configurações de E-mail (SMTP)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_HOST_USER=terminallocal404@gmail.com
EMAIL_HOST_PASSWORD=uhyf nnch vyrc rfht
```

### 2. Variáveis do Front-end
```bash
cd /var/www/terminal404
nano .env.production
```
Defina o endpoint base onde o back-end está sendo servido:
```env
VITE_API_BASE_URL=https://seu-dominio.com/api
```

---

## FASE 5: Configuração e Inicialização do Back-end (Python/FastAPI)

```bash
cd /var/www/terminal404/backend

# Criar e ativar o ambiente virtual
python3 -m venv venv
source venv/bin/activate

# Atualizar o pip para a versão mais recente
pip install --upgrade pip

# Instalar dependências da API
pip install -r requirements.txt
pip install uvicorn gunicorn

# Sair do ambiente virtual
deactivate
```

> **Aviso de Compatibilidade:** Se você receber um erro durante a instalação informando problemas com `pydantic-core`, `maturin` ou `cargo` (como *TypeError: ForwardRef._evaluate() missing 1 required keyword-only argument*), isso acontece porque a versão do Ubuntu vem com o Python 3.13, e as dependências antigas do projeto precisam ser atualizadas. Nós já atualizamos o arquivo `requirements.txt` no repositório com versões mais recentes do FastAPI e do Pydantic (>=2.9.0) para corrigir nativamente essa incompatibilidade. Certifique-se de usar a versão mais recente do repositório!

**Criar serviço do Systemd para o Back-end rodar em segundo plano:**
```bash
sudo nano /etc/systemd/system/terminal404-backend.service
```
Cole o conteúdo:
```ini
[Unit]
Description=Gunicorn instance to serve Terminal 404 Backend
After=network.target

[Service]
User=terminal
Group=www-data
WorkingDirectory=/var/www/terminal404/backend
Environment="PATH=/var/www/terminal404/backend/venv/bin"
# Executa o FastAPI na porta 8000
ExecStart=/var/www/terminal404/backend/venv/bin/gunicorn app.main:app -w 4 -k uvicorn.workers.UvicornWorker -b 127.0.0.1:8000

[Install]
WantedBy=multi-user.target
```

Ative e inicie o serviço do Back-end:
```bash
sudo systemctl start terminal404-backend
sudo systemctl enable terminal404-backend
```

---

## FASE 6: Compilação (Build) do Front-end (React)

```bash
cd /var/www/terminal404

# Instalar pacotes do front-end
pnpm install

# Gerar a versão de produção (Build)
pnpm run build
```
*(Os arquivos finais serão gerados na pasta `/var/www/terminal404/dist`)*

---

## FASE 7: Expondo o Site para a Web (Nginx e SSL)

Vamos configurar o Nginx para servir o Front-end e redirecionar a rota `/api` para o Back-end.

```bash
sudo nano /etc/nginx/sites-available/terminal404
```
Cole a configuração abaixo:
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

Ative o site no Nginx e reinicie o serviço:
```bash
sudo ln -s /etc/nginx/sites-available/terminal404 /etc/nginx/sites-enabled/
# Remove a página default do Nginx (opcional)
sudo rm /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl restart nginx
```

### Configurar Certificado de Segurança SSL (HTTPS)
```bash
# Instalar o Certbot
sudo apt install -y certbot python3-certbot-nginx

# Gerar e aplicar o certificado SSL automaticamente
sudo certbot --nginx -d seu-dominio.com -d www.seu-dominio.com
```

---

## FASE 8: Manutenção e Comandos Úteis

Seu projeto agora está rodando de forma profissional e segura em produção!

- **Ver logs de erros do Back-end (FastAPI):**
  ```bash
  sudo journalctl -u terminal404-backend -f
  ```
- **Reiniciar o Back-end após alterar o código Python:**
  ```bash
  sudo systemctl restart terminal404-backend
  ```
- **Como atualizar o site com novo código:**
  ```bash
  cd /var/www/terminal404
  git pull
  pnpm install
  pnpm run build
  ```
- **Reiniciar o Nginx (se alterar configurações de proxy):**
  ```bash
  sudo systemctl restart nginx
  ```
