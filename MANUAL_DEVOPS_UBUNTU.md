# Manual Completo e Definitivo - Terminal 404: Infraestrutura, Deploy e Manutenção

Este manual é o guia único e consolidado para instalação, configuração, segurança e implantação do site institucional da **Terminal 404**. Ele cobre desde a preparação de um servidor Linux Ubuntu (última versão LTS) até o deploy automatizado, passando por hospedagem moderna (Vercel/Netlify), hospedagem tradicional (VPS + Nginx), Docker, SSL e CI/CD com Webhooks.

> **Contexto do Projeto:** O front-end institucional da Terminal 404 foi refatorado para ser **100% estático** (React + Vite). Não há back-end, APIs ou banco de dados. Toda a captura de contato é feita por redirecionamento direto ao WhatsApp oficial da empresa. O build gera um diretório `dist` contendo apenas arquivos HTML, CSS e JS otimizados.

---

## Índice

1. [Visão Geral da Arquitetura](#1-visão-geral-da-arquitetura)
2. [Hospedagem em Plataformas Modernas (Recomendado)](#2-hospedagem-em-plataformas-modernas-recomendado)
3. [Preparação Inicial do Servidor (VPS)](#3-preparação-inicial-do-servidor-vps)
4. [Configuração de Segurança e Acesso](#4-configuração-de-segurança-e-acesso)
5. [Instalação Oficial do Docker e Docker Compose](#5-instalação-oficial-do-docker-e-docker-compose)
6. [Estrutura de Pastas e Ambientes](#6-estrutura-de-pastas-e-ambientes)
7. [Configuração do GitHub no Servidor](#7-configuração-do-github-no-servidor)
8. [Variáveis de Ambiente (.env)](#8-variáveis-de-ambiente-env)
9. [Configuração do Docker Compose](#9-configuração-do-docker-compose)
10. [Deploy do Site Estático (Nginx sem Docker)](#10-deploy-do-site-estático-nginx-sem-docker)
11. [Nginx como Proxy Reverso (para apps com Docker)](#11-nginx-como-proxy-reverso-para-apps-com-docker)
12. [Certificado SSL / HTTPS Grátis](#12-certificado-ssl--https-grátis)
13. [Automação de Deploy (CI/CD com Webhook)](#13-automação-de-deploy-cicd-com-webhook)
14. [Manutenção e Comandos Úteis](#14-manutenção-e-comandos-úteis)
15. [Customização do Número de WhatsApp](#15-customização-do-número-de-whatsapp)

---

## 1. Visão Geral da Arquitetura

O site foi desenvolvido em **React** utilizando o ecossistema do **Vite** para build otimizado. Suas principais características são:

- **Zero-Backend:** Sem risco de vulnerabilidades, injeções SQL, sobrecarga de RAM via containers ou downtimes de banco de dados.
- **Performance Nativa:** Redirecionamento instantâneo via URLs do WhatsApp (`wa.me`).
- **Arquitetura Estática:** O build gera um diretório `dist` contendo apenas arquivos HTML, CSS e JS enxutos.

---

## 2. Hospedagem em Plataformas Modernas (Recomendado)

Como o projeto é estático, o uso de um servidor VPS apenas para ele pode gerar custo desnecessário e exigir manutenção de S.O. Sugerimos o uso de **Vercel, Netlify, Cloudflare Pages ou GitHub Pages** (serviços frequentemente gratuitos para sites estáticos).

### Implantação na Vercel (Exemplo):
1. Crie uma conta em [vercel.com](https://vercel.com).
2. Clique em **"Add New Project"** e conecte o repositório do seu código no GitHub/GitLab.
3. Nas configurações do projeto (Build and Output Settings), o Vercel deve detectar automaticamente:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Clique em **Deploy**. A cada novo commit na branch principal (`main` ou `master`), o Vercel recompilará o site automaticamente e aplicará ao vivo.

> **Nota:** Se optar por hospedagem moderna, as seções 3 a 13 deste manual são opcionais e servem como referência para cenários onde um VPS dedicado seja necessário (ex: projetos futuros com back-end).

---

## 3. Preparação Inicial do Servidor (VPS)

Caso a infraestrutura exija hospedagem on-premise ou em um VPS dedicado com Ubuntu, comece por aqui.

### 3.1 Atualização do sistema
Mantenha todos os pacotes atualizados para garantir segurança e estabilidade:
```bash
sudo apt update && sudo apt upgrade -y
```

### 3.2 Criação de Memória Swap (Prevenção de Erros "Out of Memory")
Muitas vezes, o servidor trava ao rodar `docker build` ou `npm install` por falta de memória RAM. Criar um arquivo Swap (memória virtual no disco) resolve isso:
```bash
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

### 3.3 Instalação de ferramentas essenciais
Instale utilitários básicos que ajudarão no gerenciamento:
```bash
sudo apt install git curl wget build-essential unzip htop ufw software-properties-common apt-transport-https ca-certificates -y
```

### 3.4 Instalação do Node.js (para build do site estático)
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

---

## 4. Configuração de Segurança e Acesso

### 4.1 Criação de usuário para deploy
Evite usar o usuário `root` para operações diárias. Crie um usuário específico:
```bash
sudo adduser deploy
sudo usermod -aG sudo deploy
```
*A partir de agora, mude para o novo usuário:*
```bash
su - deploy
```

### 4.2 Configuração de SSH (Bloqueio do Root)
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

### 4.3 Configuração do firewall (UFW)
Habilite as portas essenciais antes de ativar o firewall para não perder o acesso ao servidor:
```bash
sudo ufw allow OpenSSH
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
```

---

## 5. Instalação Oficial do Docker e Docker Compose

**Importante:** Evite usar o pacote `docker.io` padrão do Ubuntu, pois ele costuma ser desatualizado e causar bugs no `docker compose`. Instale direto do repositório oficial.

### 5.1 Adicionar repositório oficial da Docker
```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

### 5.2 Instalar o Docker
```bash
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io docker-compose-plugin -y
```

### 5.3 Permissões do Docker (Evitar "Permission Denied")
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

## 6. Estrutura de Pastas e Ambientes

Manter um padrão de diretórios ajuda na manutenção e separa o que é teste do que é ambiente real. Crie os diretórios **antes** de clonar o projeto:

```bash
sudo mkdir -p /var/www/terminal404-production
sudo mkdir -p /var/www/terminal404-staging
sudo mkdir -p /var/www/scripts
sudo chown -R deploy:deploy /var/www
```

* **Staging (`terminal404-staging`)**: Ambiente de testes, réplica da produção. Serve para validação técnica de novas funcionalidades antes do público ver.
* **Production (`terminal404-production`)**: Ambiente oficial da aplicação, versão estável, com acesso público.

---

## 7. Configuração do GitHub no Servidor

Para clonar repositórios privados e permitir automação sem necessidade de senhas, usaremos chaves SSH.

### 7.1 Gerar chave SSH
Logado como o usuário `deploy`, gere a chave:
```bash
ssh-keygen -t ed25519 -C "deploy@server"
```
*Pressione `Enter` para todas as perguntas. Não adicione senha (passphrase) para não travar o deploy automático.*

### 7.2 Adicionar chave ao GitHub
Exiba a chave pública:
```bash
cat ~/.ssh/id_ed25519.pub
```
Copie a saída e cole nas configurações do seu GitHub em **Settings > SSH and GPG keys > New SSH key** (ou como Deploy Key no próprio repositório).

### 7.3 Clonar o repositório do projeto
Teste a conexão e clone para a pasta de produção:
```bash
ssh -T git@github.com
cd /var/www/terminal404-production
git clone git@github.com:SEU_USUARIO/SEU_REPOSITORIO.git .
```

---

## 8. Variáveis de Ambiente (.env)

Nunca comite o arquivo `.env` no GitHub por segurança. Crie-o diretamente no servidor:
```bash
nano /var/www/terminal404-production/.env
```
Adicione as variáveis do projeto (exemplo):
```env
NODE_ENV=production
PORT=3000
```

> **Nota:** Como o site da Terminal 404 é 100% estático, variáveis de ambiente são opcionais neste momento. Elas serão úteis caso o projeto evolua para incluir um back-end futuramente.

---

## 9. Configuração do Docker Compose

Na pasta do projeto (`/var/www/terminal404-production`), crie ou valide o arquivo de infraestrutura:
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

> **Nota:** Para o site estático da Terminal 404, o Docker não é necessário. A seção 10 a seguir cobre o deploy direto via Nginx, que é mais simples e eficiente para sites estáticos. Esta seção serve de referência para projetos futuros que exijam containers.

---

## 10. Deploy do Site Estático (Nginx sem Docker)

Esta é a abordagem recomendada para o site institucional da Terminal 404 quando hospedado em VPS.

### 10.1 Instalar Nginx e Node.js
```bash
sudo apt install -y nginx
```
*(O Node.js já foi instalado na seção 3.4)*

### 10.2 Clonar e Gerar o Build
```bash
cd /var/www/terminal404-production
# Instale as dependências Node
npm install
# Construa o diretório otimizado (dist)
npm run build
```

### 10.3 Configurar o Nginx para Servir Arquivos Estáticos
Crie o arquivo de configuração:
```bash
sudo nano /etc/nginx/sites-available/terminal404
```

Cole a configuração abaixo:
```nginx
server {
    listen 80;
    server_name www.terminal404.com.br terminal404.com.br _;

    # O root aponta OBRIGATORIAMENTE para o diretório de build gerado
    root /var/www/terminal404-production/dist;
    index index.html;

    # Habilita SPA Routing (Essencial para React Router funcionar)
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache agressivo para arquivos estáticos (melhor performance)
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires max;
        log_not_found off;
    }
}
```
*Salve e saia (CTRL+O, ENTER, CTRL+X).*

Habilite as configurações, remova a página padrão do Nginx e reinicie:
```bash
# Habilita o novo site
sudo ln -s /etc/nginx/sites-available/terminal404 /etc/nginx/sites-enabled/

# Remove o site padrão de boas-vindas do Nginx
sudo rm -f /etc/nginx/sites-enabled/default

# Verifique a sintaxe
sudo nginx -t

# Reinicie o Nginx para aplicar as alterações
sudo systemctl restart nginx
```

---

## 11. Nginx como Proxy Reverso (para apps com Docker)

Se no futuro for necessário rodar uma aplicação via Docker (ex: um back-end na porta 3000), configure o Nginx como proxy reverso:

```bash
sudo nano /etc/nginx/sites-available/terminal404-api
```
```nginx
server {
    listen 80;
    server_name api.terminal404.com.br;

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
Ative e reinicie:
```bash
sudo ln -s /etc/nginx/sites-available/terminal404-api /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

---

## 12. Certificado SSL / HTTPS Grátis

### 12.1 Instalar Certbot
```bash
sudo apt install certbot python3-certbot-nginx -y
```

### 12.2 Gerar Certificado SSL
```bash
sudo certbot --nginx -d terminal404.com.br -d www.terminal404.com.br
```
O Certbot configurará automaticamente o redirecionamento HTTP para HTTPS no Nginx.

> **Renovação automática:** O Certbot já instala um timer no systemd para renovação automática. Verifique com: `sudo certbot renew --dry-run`

---

## 13. Automação de Deploy (CI/CD com Webhook)

Para que o servidor sempre reflita o código mais atual do GitHub automaticamente.

### 13.1 Script de Deploy (`deploy.sh`)
Crie o script que executa a atualização:
```bash
nano /var/www/scripts/deploy.sh
```

**Conteúdo para o site estático (sem Docker):**
```bash
#!/bin/bash
cd /var/www/terminal404-production
echo "Iniciando deploy em $(date)" >> /var/log/deploy.log

# Força atualização do código
git reset --hard
git pull origin main

# Reinstala dependências e reconstrói o site
npm install
npm run build

echo "Deploy finalizado em $(date)" >> /var/log/deploy.log
```

**Conteúdo alternativo para apps com Docker:**
```bash
#!/bin/bash
cd /var/www/terminal404-production
echo "Iniciando deploy em $(date)" >> /var/log/deploy.log

# Força atualização do código
git reset --hard
git pull origin main

# Reconstrói os containers com o novo código
docker compose down
docker compose up -d --build

echo "Deploy finalizado em $(date)" >> /var/log/deploy.log
```

Dê permissão de execução:
```bash
chmod +x /var/www/scripts/deploy.sh
```

### 13.2 Ouvinte de Webhook do GitHub
Instale o pacote para escutar os eventos do GitHub:
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
    "id": "deploy-terminal404",
    "execute-command": "/var/www/scripts/deploy.sh",
    "command-working-directory": "/var/www/terminal404-production"
  }
]
```
Inicie o serviço (ele rodará na porta 9000):
```bash
webhook -hooks /etc/webhook.conf -verbose &
```
No GitHub, vá em **Settings > Webhooks > Add webhook**:
- **Payload URL:** `http://IP_DO_SERVIDOR:9000/hooks/deploy-terminal404`
- **Content type:** `application/json`

> **Importante:** Para o webhook funcionar, libere a porta 9000 no firewall: `sudo ufw allow 9000/tcp`

---

## 14. Manutenção e Comandos Úteis

### Para o site estático (sem Docker):
```bash
# Atualizar código e rebuild
cd /var/www/terminal404-production && git pull origin main && npm install && npm run build

# Ver logs de erro do Nginx
sudo tail -f /var/log/nginx/error.log

# Verificar status do Nginx
sudo systemctl status nginx

# Reiniciar Nginx
sudo systemctl restart nginx
```

### Para apps com Docker:
```bash
# Reiniciar containers
docker compose restart

# Ver logs da aplicação (em tempo real)
docker logs -f app_server

# Acessar o terminal do container
docker exec -it app_server /bin/sh

# Parar containers
docker compose down

# Limpar lixo do Docker (liberar espaço em disco)
docker system prune -a -f

# Verificar uso de recursos (RAM/CPU)
htop
docker stats
```

### Comandos gerais do servidor:
```bash
# Verificar uso de memória e swap
free -h

# Verificar espaço em disco
df -h

# Atualizar sistema operacional
sudo apt update && sudo apt upgrade -y
```

---

## 15. Customização do Número de WhatsApp

As rotinas e formulários que antes acionavam APIs agora são botões de navegação com redirecionamento direto para o WhatsApp.

Se for necessário alterar o número do WhatsApp da empresa no futuro, procure pelo link no código-fonte nos seguintes arquivos:
- `src/app/components/Contact.tsx`
- `src/app/pages/RequestPage.tsx`
- `src/app/components/Footer.tsx`
- `src/app/components/FloatingWhatsApp.tsx`

**Exemplo de padrão embutido:**
```html
<a href="https://wa.me/553291547944">
  Falar com a Equipe
</a>
```

Sempre que alterar o número do telefone, lembre-se de:
- **Vercel/Netlify:** Comitar o código para publicar automaticamente.
- **VPS:** Rodar `npm run build` ou executar o script `deploy.sh`.

---

*Fim do Manual. Este é o documento único e definitivo. Seu servidor agora é uma infraestrutura robusta, segura, automatizada e pronta para escalar na produção!*
