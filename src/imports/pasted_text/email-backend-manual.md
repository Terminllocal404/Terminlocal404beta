PROMPT PARA IA (ANÁLISE DE PROJETO + BACKEND PYTHON + MANUAL DE SERVIDOR)

Quero que você analise completamente o meu projeto e desenvolva o back-end em Python responsável pelo envio de e-mails.

O projeto já possui um formulário no front-end responsável pelo envio de mensagens. Seu trabalho será identificar esse formulário dentro do projeto e implementar o sistema de envio de e-mail utilizando SMTP do Gmail.

1 — Análise do projeto

Primeiro, faça uma análise completa da estrutura do projeto, incluindo:

Estrutura de pastas

Tecnologias utilizadas

Identificação do formulário de contato

Como o formulário envia os dados atualmente

Qual endpoint será necessário criar para o envio de e-mail

Após a análise, implemente a solução adequada.

2 — Desenvolvimento do Back-end em Python

Implemente um back-end em Python responsável por receber os dados do formulário e enviar o e-mail utilizando SMTP do Gmail.

O sistema deve:

Receber dados do formulário (nome, e-mail, mensagem, etc.)

Validar os dados recebidos

Enviar o e-mail utilizando SMTP do Gmail

Retornar respostas de sucesso ou erro em formato JSON

Ter tratamento de exceções

Seguir boas práticas de segurança

Você pode utilizar frameworks como:

FastAPI (preferencial) ou

Flask

3 — Requisitos técnicos

O back-end deve possuir:

Estrutura organizada de pastas

Arquivo .env para variáveis de ambiente

Validação de dados

Sanitização de entrada

Tratamento de erros

Logs de execução

Código limpo e bem documentado

4 — Configuração do SMTP Gmail

Utilizar SMTP do Gmail com as seguintes configurações:

Servidor SMTP

smtp.gmail.com

Porta

587

Credenciais provisórias para testes:

Email

terminallocal404@gmail.com

Senha provisória

uhyf nnch vyrc rfht

⚠️ Essas credenciais devem ficar somente no arquivo .env e não devem ser hardcoded no código.

5 — Integração com o front-end

Depois de criar o back-end:

Conecte o formulário existente ao novo endpoint Python

Ajuste o front-end apenas se for estritamente necessário

Explique quais alterações foram feitas

6 — Estrutura do projeto Python

Crie uma estrutura organizada, por exemplo:

backend ├── app │ ├── main.py │ ├── routes │ ├── services │ ├── models │ └── utils ├── requirements.txt ├── .env └── README.md 7 — Manual completo de instalação no servidor

Além do código, gere também um manual completo de instalação e configuração do projeto em um servidor Linux.

O servidor onde o projeto será instalado é:

Servidor: Digitation Sistema operacional: Ubuntu (última versão disponível)

O manual deve explicar passo a passo:

Instalação do ambiente

Instalar:

Python

pip

venv

dependências do projeto

Configuração do projeto

Clonar o projeto

Criar ambiente virtual

Instalar requirements

Configurar .env

Executar o servidor

Execução em produção

Explique como configurar:

Uvicorn / Gunicorn

Nginx como reverse proxy

systemd para manter o serviço rodando

Firewall básico

8 — Testes

Explique como testar o sistema:

Teste via Postman

Teste via curl

Teste diretamente pelo formulário do site

9 — Resultado final esperado

No final, entregue:

Código completo do back-end em Python

Integração com o formulário do projeto

Estrutura completa de arquivos

Manual completo de instalação

Configuração para rodar no servidor Ubuntu

Explicação de todos os arquivos criados ou modificados