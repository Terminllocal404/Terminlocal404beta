Solicitação de Manual Profissional de Instalação e Deploy de Servidor

Crie um manual técnico completo de instalação, configuração e implantação de aplicação em servidor Linux Ubuntu (última versão LTS).

O manual deve ser extremamente detalhado e seguir boas práticas de DevOps, segurança e automação de deploy.

O objetivo é preparar um servidor que possua:

ambiente de execução da aplicação

integração automática com GitHub

deploy automatizado

containers Docker

separação entre ambiente de testes e produção

O manual deve explicar cada etapa de forma clara e técnica, incluindo comandos de terminal e estrutura de arquivos.

1. Preparação inicial do servidor

Explicar passo a passo:

Atualização do sistema:

sudo apt update && sudo apt upgrade -y


Instalação de ferramentas essenciais:

git

curl

wget

build-essential

unzip

htop

ufw (firewall)

Configuração básica de segurança:

criação de usuário para deploy

configuração de SSH

desativação de login root

configuração do firewall

2. Configuração do GitHub no servidor

O manual deve explicar como conectar o servidor ao GitHub usando SSH Key.

Passos obrigatórios:

Gerar chave SSH:

ssh-keygen -t ed25519 -C "deploy@server"


Adicionar chave ao GitHub.

Testar conexão:

ssh -T git@github.com


Clonar o repositório do projeto:

git clone git@github.com:SEU_USUARIO/SEU_REPOSITORIO.git

3. Atualização automática do servidor via GitHub

O manual deve configurar um mecanismo para que alterações no GitHub atualizem automaticamente o servidor.

Explicar duas opções:

Opção 1 — Script de deploy automático

Criar script:

deploy.sh


Exemplo:

#!/bin/bash
cd /var/www/projeto
git pull origin main
docker compose down
docker compose up -d --build


Dar permissão:

chmod +x deploy.sh

Opção 2 — Webhook do GitHub

Configurar webhook no repositório.

Fluxo esperado:

GitHub → Webhook → Servidor → Atualização automática


O webhook deve:

receber evento push

executar script de deploy

atualizar containers

4. Instalação e configuração do Docker

Instalar Docker:

sudo apt install docker.io -y


Habilitar serviço:

sudo systemctl enable docker
sudo systemctl start docker


Instalar Docker Compose:

sudo apt install docker-compose-plugin -y


Testar Docker:

docker --version
docker compose version

5. Estrutura de pastas do servidor

Criar estrutura organizada:

/var/www
 ├── projeto-production
 ├── projeto-staging
 └── scripts

6. Ambiente de testes (staging)

Criar ambiente separado para testes.

Esse ambiente deve permitir:

testes de código

validação de funcionalidades

simulação de deploy

Rodar containers independentes.

7. Ambiente de produção (production)

Ambiente oficial da aplicação.

Características:

versão estável

acesso público

deploy automatizado

containers isolados

8. Configuração de Docker Compose

Criar arquivo:

docker-compose.yml


Exemplo estrutural:

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

9. Deploy da aplicação

Executar containers:

docker compose up -d


Atualizar sistema após alterações no GitHub:

./deploy.sh

10. Manutenção do servidor

Explicar como:

Atualizar código:

git pull


Reiniciar containers:

docker compose restart


Ver logs:

docker logs container


Parar containers:

docker compose down

Resultado final esperado

Após seguir o manual, o servidor deverá possuir:

ambiente Ubuntu configurado

integração segura com GitHub

deploy automatizado

containers Docker funcionais

ambiente de testes

ambiente de produção

estrutura organizada para manutenção futura

O servidor deve funcionar como uma infraestrutura DevOps simples, automatizada e escalável para hospedagem da aplicação.