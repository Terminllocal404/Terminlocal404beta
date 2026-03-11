from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(
    title="Terminal 404 - Email Microservice",
    description="API para envio de e-mails corporativos a partir dos formulários do site.",
    version="1.0.0"
)

# CORS Configuration
origins = [
    "*", # In production, restrict to your domain like "https://terminal404.com.br"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["POST"],
    allow_headers=["*"],
)

# Environment Variables
SMTP_SERVER = os.getenv("SMTP_SERVER", "smtp.gmail.com")
SMTP_PORT = int(os.getenv("SMTP_PORT", 587))
SMTP_USERNAME = os.getenv("SMTP_USERNAME")
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD")
DESTINATION_EMAIL = os.getenv("DESTINATION_EMAIL", "terminallocal404@gmail.com")

class ContactFormPayload(BaseModel):
    name: str
    email: EmailStr
    message: str
    service: str | None = None
    budget: str | None = None

@app.get("/health")
def health_check():
    return {"status": "ok", "message": "Email service is running."}

@app.post("/api/send-email")
def send_email(payload: ContactFormPayload):
    if not SMTP_USERNAME or not SMTP_PASSWORD:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Configurações de SMTP ausentes no servidor."
        )

    try:
        msg = MIMEMultipart()
        msg['From'] = SMTP_USERNAME
        msg['To'] = DESTINATION_EMAIL
        msg['Subject'] = f"[Terminal 404] Nova Requisição de: {payload.name}"

        body = f"""
        NOVA MENSAGEM DO PORTAL CORPORATIVO TERMINAL 404
        ================================================

        IDENTIFICAÇÃO:
        Nome: {payload.name}
        E-mail: {payload.email}
        """

        if payload.service:
            body += f"\nSERVIÇO: {payload.service}"
        if payload.budget:
            body += f"\nORÇAMENTO: {payload.budget}"

        body += f"\n\nMENSAGEM / PAYLOAD:\n{payload.message}\n"
        
        msg.attach(MIMEText(body, 'plain', 'utf-8'))

        # SMTP Connection and send
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(SMTP_USERNAME, SMTP_PASSWORD)
        server.send_message(msg)
        server.quit()

        return {"status": "success", "message": "Payload transmitido com sucesso."}
        
    except smtplib.SMTPAuthenticationError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Falha de autenticação com o servidor SMTP."
        )
    except Exception as e:
        # Logging real error in backend, returning generic error to client
        print(f"SMTP Error: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Erro ao processar e enviar a mensagem."
        )