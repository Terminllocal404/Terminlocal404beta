import os
import requests
from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(
    title="Terminal 404 - Integration Service",
    description="API para envio de mensagens do formulário do site para o WhatsApp da empresa.",
    version="2.0.0"
)

# CORS Configuration
origins = [
    "*", # Em produção, altere para o domínio do seu frontend como "https://terminal404.com.br"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["POST"],
    allow_headers=["*"],
)

# Environment Variables - WhatsApp Cloud API
WHATSAPP_API_TOKEN = os.getenv("WHATSAPP_API_TOKEN")
WHATSAPP_PHONE_ID = os.getenv("WHATSAPP_PHONE_ID")
DESTINATION_WHATSAPP_NUMBER = os.getenv("DESTINATION_WHATSAPP_NUMBER") # Número do WhatsApp da empresa com código do país (ex: 5511999999999)

class ContactFormPayload(BaseModel):
    name: str
    email: EmailStr
    message: str
    service: str | None = None
    budget: str | None = None

@app.get("/health")
def health_check():
    return {"status": "ok", "message": "Integration service is running."}

@app.post("/api/send-message")
def send_message_to_whatsapp(payload: ContactFormPayload):
    if not WHATSAPP_API_TOKEN or not WHATSAPP_PHONE_ID or not DESTINATION_WHATSAPP_NUMBER:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Configurações da API do WhatsApp estão ausentes no servidor."
        )

    # Formatar o texto da mensagem a ser enviada
    text_message = (
        "🟢 *NOVA MENSAGEM DO PORTAL CORPORATIVO TERMINAL 404*\n"
        "====================================\n\n"
        f"👤 *Nome:* {payload.name}\n"
        f"📧 *E-mail:* {payload.email}\n"
    )

    if payload.service:
        text_message += f"🛠 *Serviço:* {payload.service}\n"
    if payload.budget:
        text_message += f"💰 *Orçamento:* {payload.budget}\n"

    text_message += f"\n📝 *Mensagem:*\n{payload.message}\n"

    # Preparar a requisição para a API do WhatsApp (Meta)
    url = f"https://graph.facebook.com/v19.0/{WHATSAPP_PHONE_ID}/messages"
    
    headers = {
        "Authorization": f"Bearer {WHATSAPP_API_TOKEN}",
        "Content-Type": "application/json"
    }
    
    data = {
        "messaging_product": "whatsapp",
        "to": DESTINATION_WHATSAPP_NUMBER,
        "type": "text",
        "text": {
            "body": text_message
        }
    }

    try:
        response = requests.post(url, headers=headers, json=data)
        response.raise_for_status() # Lançará uma exceção para códigos de erro HTTP
        
        return {"status": "success", "message": "Mensagem encaminhada com sucesso para o WhatsApp."}
        
    except requests.exceptions.HTTPError as errh:
        print(f"Erro na API do WhatsApp: {errh.response.text}")
        raise HTTPException(
            status_code=status.HTTP_502_BAD_GATEWAY,
            detail="Falha ao comunicar com a API do WhatsApp."
        )
    except Exception as e:
        print(f"Erro inesperado: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Erro interno ao processar e enviar a mensagem."
        )