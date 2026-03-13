# Terminal 404 - WhatsApp Integration Microservice (Python)

Este é o microsserviço back-end em Python (FastAPI) responsável por capturar as mensagens enviadas através dos formulários do site "Terminal 404" e encaminhá-las automaticamente para o WhatsApp corporativo da empresa, utilizando a Cloud API oficial da Meta.

> **Atenção:** O serviço de SMTP (e-mail) foi descontinuado. Agora utilizamos a integração via WhatsApp.

---

## 🚀 Estrutura e Rotas

A aplicação roda nativamente na porta `8000` e disponibiliza as seguintes rotas:

- **`GET /health`**
  - Checa a integridade do serviço. Retorna Status HTTP 200.
- **`POST /api/send-message`**
  - Rota que recebe o payload JSON do formulário e engatilha o disparo na API da Meta.

---

## ⚙️ Variáveis de Ambiente

Para o ambiente funcionar, é necessário clonar o arquivo `.env.example` para `.env` e preencher as seguintes variáveis fornecidas pela Meta / WhatsApp Business API:

```env
WHATSAPP_API_TOKEN=seu_token_permanente_da_meta_aqui
WHATSAPP_PHONE_ID=id_do_numero_de_telefone_de_origem
DESTINATION_WHATSAPP_NUMBER=5511999999999 # Número de destino que vai receber a notificação
```

---

## 🛠️ Como Testar Localmente a API

1. Crie o ambiente e instale as dependências:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```
2. Rode o servidor de desenvolvimento:
   ```bash
   fastapi dev app/main.py
   ```
   *Ou via uvicorn:*
   ```bash
   uvicorn app.main:app --reload
   ```

3. Teste a integridade (Health Check):
   ```bash
   curl http://127.0.0.1:8000/health
   ```
   *Retorno esperado: `{"status": "ok", "message": "Integration service is running."}`*

4. Teste o Envio de Mensagem (cURL):
   ```bash
   curl -X POST http://127.0.0.1:8000/api/send-message \
     -H "Content-Type: application/json" \
     -d '{
       "name": "Cliente Teste",
       "email": "cliente@teste.com",
       "message": "Teste de payload para a API da Terminal 404 - WhatsApp"
     }'
   ```
   *Retorno esperado: `{"status": "success", "message": "Mensagem encaminhada com sucesso para o WhatsApp."}`*

---

## 📖 Manual de Instalação no Servidor (Deploy)

Para acessar o **Manual Completo (Passo a Passo)** de como instalar isso em um servidor Ubuntu (DigitalOcean, AWS, etc) do zero e como mantê-lo rodando de forma profissional com Nginx e Gunicorn, consulte o arquivo **`SERVER_SETUP_MANUAL.md`** localizado na raiz do projeto.