# Manual Técnico de Implantação - Terminal 404 (Site Estático)

Este manual documenta a infraestrutura, instalação, configuração e manutenção do novo Front-end Institucional da **Terminal 404**. O projeto foi refatorado para ser **100% estático**, não possuindo mais dependências de um Back-end ou APIs em Python. Toda a captura de contato é feita nativamente por redirecionamento direto para o WhatsApp oficial da empresa.

---

## Índice

1. [Visão Geral da Arquitetura](#1-visão-geral-da-arquitetura)
2. [Hospedagem em Plataformas Modernas (Recomendado)](#2-hospedagem-em-plataformas-modernas-recomendado)
3. [Hospedagem Tradicional em VPS (Ubuntu / Nginx)](#3-hospedagem-tradicional-em-vps-ubuntu--nginx)
4. [Atualizando o Conteúdo (Manutenção)](#4-atualizando-o-conteúdo-manutenção)
5. [Customização do Número de WhatsApp](#5-customização-do-número-de-whatsapp)

---

## 1. Visão Geral da Arquitetura

O site foi desenvolvido em **React** utilizando o ecossistema do **Vite** para o seu *build* otimizado. Suas principais características são:
- **Zero-Backend:** Sem risco de vulnerabilidades, injeções SQL, sobrecarga de RAM via containers ou *downtimes* de banco de dados.
- **Performance Nativa:** Redirecionamento instantâneo via URLs do WhatsApp (`wa.me`).
- **Arquitetura Estática:** O build gera um diretório `dist` contendo apenas arquivos HTML, CSS e JS enxutos.

---

## 2. Hospedagem em Plataformas Modernas (Recomendado)

Como o projeto é estático, o uso de um servidor VPS (como EC2 ou Droplet) só para ele gera custo desnecessário e requer manutenção de S.O.
Sugerimos o uso de **Vercel, Netlify, Cloudflare Pages ou GitHub Pages** (serviços frequentemente gratuitos para sites estáticos).

### Implantação na Vercel (Exemplo):
1. Crie uma conta em [vercel.com](https://vercel.com).
2. Clique em **"Add New Project"** e conecte o repositório do seu código no GitHub/GitLab.
3. Nas configurações do projeto (Build and Output Settings), o Vercel deve detectar automaticamente:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Clique em **Deploy**. A cada novo commit na branch principal (`main` ou `master`), o Vercel recompilará o site automaticamente e aplicará ao vivo.

---

## 3. Hospedagem Tradicional em VPS (Ubuntu / Nginx)

Caso a infraestrutura da sua empresa exija a hospedagem *on-premise* ou em um VPS dedicado com Ubuntu, siga os passos a seguir:

### 3.1. Preparação do Servidor
Acesse o servidor via SSH:
```bash
sudo apt update && sudo apt upgrade -y
# Instale o Nginx (Servidor Web) e o Node.js (Para gerar o build)
sudo apt install -y nginx curl git
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

### 3.2. Clonando o Repositório
```bash
# Crie a pasta do projeto
sudo mkdir -p /var/www/terminal404
sudo chown -R $USER:$USER /var/www/terminal404

# Navegue até a pasta web e clone o projeto
cd /var/www/
git clone https://github.com/seu-usuario/seu-repositorio.git terminal404
```

### 3.3. Gerando os Arquivos Estáticos (Build)
```bash
cd /var/www/terminal404
# Instale as dependências Node (Pode usar npm, yarn ou pnpm)
npm install
# Construa o diretório otimizado (dist)
npm run build
```

### 3.4. Configuração do Nginx
Crie o arquivo de configuração de proxy/bloco de servidor:
```bash
sudo nano /etc/nginx/sites-available/terminal404
```

Cole a configuração básica abaixo:
```nginx
server {
    listen 80;
    server_name www.terminal404.com.br terminal404.com.br;

    # O root aponta OBRIGATORIAMENTE para o diretório de build gerado
    root /var/www/terminal404/dist;
    index index.html;

    # Habilita SPA Routing (Essencial para React Router funcionar se aplicável)
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Desativa log de acesso para arquivos estáticos visando melhor performance
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires max;
        log_not_found off;
    }
}
```
*Salve e saia (CTRL+O, ENTER, CTRL+X).*

Habilite e reinicie o Nginx:
```bash
sudo ln -s /etc/nginx/sites-available/terminal404 /etc/nginx/sites-enabled/
# Verifique a sintaxe
sudo nginx -t
sudo systemctl restart nginx
```

*(Opcional e Recomendado: Utilize o Certbot para gerenciar certificados SSL e rodar em HTTPS).*

---

## 4. Atualizando o Conteúdo (Manutenção)

Caso seja modificado algum texto ou o código seja atualizado no futuro, a rotina de manutenção no VPS será apenas baixar o código e re-gerar o build (sem necessidade de reiniciar o nginx, apenas substituir os arquivos):

```bash
cd /var/www/terminal404
# Puxar código novo
git pull origin main
# Reinstalar caso haja novos pacotes
npm install
# Reconstruir o projeto estático
npm run build
```

## 5. Customização do Número de WhatsApp

As rotinas e formulários que antes acionavam APIs agora são botões de navegação. 
Se for necessário alterar o número do WhatsApp da empresa no futuro, procure pelo link no código fonte, que geralmente se encontra em `src/app/components/Contact.tsx` e `src/app/pages/RequestPage.tsx` e `src/app/components/Footer.tsx`:

**Exemplo de Padrão Embutido:**
```html
<a href="https://wa.me/5532991547944">
  Falar com a Equipe
</a>
```
Sempre que alterar o número do telefone no componente, lembre-se de rodar o `npm run build` ou comitar o código (no caso da Vercel) para publicar as alterações.
