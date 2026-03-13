# Manual Técnico do Back-end de Integração com WhatsApp - Terminal 404

Este manual documenta a infraestrutura, instalação, configuração e manutenção do novo Back-end em Python da **Terminal 404**, projetado para receber mensagens do site e encaminhá-las diretamente via WhatsApp através da API Cloud Oficial da Meta.

---

## Índice

1. [Preparação do Servidor](#1-preparação-do-servidor)
2. [Configuração do Projeto](#2-configuração-do-projeto)
3. [Configuração da Integração com WhatsApp](#3-configuração-da-integração-com-whatsapp)
4. [Execução da Aplicação (Systemd/Gunicorn)](#4-execução-da-aplicação)
5. [Guia de Reinstalação e Manutenção](#5-guia-de-reinstalação-e-manutenção)

---

## 1. Preparação do Servidor

Presume-se que o servidor está rodando **Ubuntu 22.04 LTS ou superior**.

### Atualização e Instalação de Dependências Base
Acesse o servidor (preferencialmente usando um usuário como `terminal` ou `ubuntu` com privilégios de sudo) e execute:

```bash
# Atualize as listas de pacotes e o sistema
sudo apt update && sudo apt upgrade -y

# Instale o Python 3, o gerenciador PIP e ferramentas de ambientes virtuais
sudo apt install -y python3 python3-pip python3-venv git curl
```

---

## 2. Configuração do Projeto

Vamos preparar o diretório que vai abrigar a aplicação Python e instalar suas dependências usando um ambiente isolado.

```bash
# Crie e acesse o diretório principal da aplicação
sudo mkdir -p /var/www/terminal404
sudo chown -R $USER:$USER /var/www/terminal404
cd /var/www/terminal404

# Clone o repositório contendo o novo back-end (substitua pelo URL real)
git clone https://github.com/seu-usuario/seu-repositorio.git .

# Navegue até o diretório do Back-end
cd backend

# Crie e ative o ambiente virtual (venv)
python3 -m venv venv
source venv/bin/activate

# Atualize o pip dentro do ambiente
pip install --upgrade pip

# Instale todas as dependências do projeto contidas no requirements.txt
pip install -r requirements.txt
```

---

## 3. Configuração da Integração com WhatsApp

O sistema utiliza a **API Oficial do WhatsApp Cloud (Meta)**. Para funcionar, você precisa definir as variáveis de ambiente que o servidor lerá.

### Como gerar as credenciais:
1. Acesse o [Painel de Desenvolvedores da Meta](https://developers.facebook.com/).
2. Crie um app do tipo "Empresa" e adicione o produto **WhatsApp**.
3. Na seção do WhatsApp -> "Configuração da API", você encontrará o seu **ID do número de telefone** (`WHATSAPP_PHONE_ID`).
4. Gere um Token de Acesso Permanente e defina o número de destino para receber as mensagens (ex: +55 11 99999-9999 sem espaços ou sinais = `5511999999999`).

### Configurando as credenciais no Servidor:

```bash
# Ainda dentro da pasta /var/www/terminal404/backend, crie o arquivo .env
cp .env.example .env
nano .env
```

Preencha com as suas credenciais:

```env
WHATSAPP_API_TOKEN=seu_token_de_acesso_aqui
WHATSAPP_PHONE_ID=seu_id_de_telefone_aqui
DESTINATION_WHATSAPP_NUMBER=5511999999999
```
*Salve com CTRL+O -> Enter -> CTRL+X.*

---

## 4. Execução da Aplicação

Para manter a API funcionando continuamente e reiniciando com o servidor, configuraremos o `systemd` para usar o Gunicorn como gerenciador de processos.

### Criação do Serviço no Systemd
```bash
sudo nano /etc/systemd/system/terminal404-backend.service
```

Cole a configuração a seguir:
```ini
[Unit]
Description=Gunicorn instance to serve Terminal 404 Backend (WhatsApp API)
After=network.target

[Service]
User=root
# Ajuste o User acima para o usuário não-root que detém a pasta, por exemplo: terminal
WorkingDirectory=/var/www/terminal404/backend
Environment="PATH=/var/www/terminal404/backend/venv/bin"

# Roda o FastAPI via Gunicorn e Uvicorn na porta 8000 local
ExecStart=/var/www/terminal404/backend/venv/bin/gunicorn app.main:app -w 4 -k uvicorn.workers.UvicornWorker -b 127.0.0.1:8000

[Install]
WantedBy=multi-user.target
```
*Salve o arquivo e saia.*

### Iniciar e Habilitar o Serviço:
```bash
sudo systemctl daemon-reload
sudo systemctl start terminal404-backend
sudo systemctl enable terminal404-backend
```

Para confirmar que o Back-end está rodando limpo e sem erros:
```bash
sudo systemctl status terminal404-backend
```

### Expondo a API (Configuração Nginx de Proxy)
O tráfego de internet precisa bater no Back-end através do Nginx. Verifique seu arquivo de configuração do Nginx (em `/etc/nginx/sites-available/terminal404`):
```nginx
    # Redirecionar as chamadas /api para o Backend FastAPI
    location /api/ {
        proxy_pass http://127.0.0.1:8000/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
```

---

## 5. Guia de Reinstalação e Manutenção

Esta seção apresenta as rotinas comuns caso o código ou o ambiente sejam atualizados.

### Atualizando o Código e Reiniciando a Aplicação
Se novos commits de código Python foram enviados para o repositório, faça o download e reinicie:

```bash
cd /var/www/terminal404
git pull
sudo systemctl restart terminal404-backend
```

### Reinstalando ou Atualizando Dependências
Se novas bibliotecas Python foram adicionadas ao `requirements.txt`:

```bash
cd /var/www/terminal404/backend
source venv/bin/activate
pip install -r requirements.txt
deactivate

sudo systemctl restart terminal404-backend
```

### Reinstalando Totalmente (Hard Reset)
Caso o ambiente virtual quebre ou uma reinstalação do zero seja necessária:

```bash
cd /var/www/terminal404/backend

# Pare a aplicação atual
sudo systemctl stop terminal404-backend

# Apague o ambiente virtual antigo e crie um novo
rm -rf venv
python3 -m venv venv
source venv/bin/activate

# Instale tudo de novo
pip install --upgrade pip
pip install -r requirements.txt
deactivate

# Volte a rodar o sistema
sudo systemctl start terminal404-backend
```

### Consultando os Logs de Erro
Caso o envio não funcione (Erro 500 no front-end), confira os logs do back-end para diagnosticar (erros de API Key, token vencido, etc):

```bash
sudo journalctl -u terminal404-backend -n 50 -f
```