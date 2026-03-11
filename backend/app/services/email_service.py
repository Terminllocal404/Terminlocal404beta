import aiosmtplib
from email.message import EmailMessage
from email.utils import formataddr
from jinja2 import Template
from ..config import settings
from ..models.contact import ContactForm
import logging

logger = logging.getLogger(__name__)

HTML_TEMPLATE = """
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #02040A; color: #E6EDF3; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background-color: #0B0F1A; border: 1px solid #00E5FF; border-radius: 12px; padding: 30px; }
        .header { border-bottom: 2px solid #00E5FF; padding-bottom: 20px; margin-bottom: 20px; }
        .header h2 { color: #00E5FF; margin: 0; }
        .field { margin-bottom: 15px; }
        .label { color: #8B949E; font-size: 0.9em; font-family: monospace; }
        .value { color: #FFFFFF; font-size: 1.1em; margin-top: 5px; }
        .footer { margin-top: 30px; font-size: 0.8em; color: #6E7681; border-top: 1px solid #30363D; padding-top: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>Terminal 404 - Nova Solicitação</h2>
        </div>
        <div class="field">
            <div class="label">&gt; IDENTIFICAÇÃO</div>
            <div class="value">{{ name }}</div>
        </div>
        <div class="field">
            <div class="label">&gt; ENDEREÇO ELETRÔNICO</div>
            <div class="value">{{ email }}</div>
        </div>
        <div class="field">
            <div class="label">&gt; PAYLOAD (MENSAGEM)</div>
            <div class="value">{{ message }}</div>
        </div>
        <div class="footer">
            Esta mensagem foi enviada via formulário de contato do site Terminal 404.
        </div>
    </div>
</body>
</html>
"""

async def send_contact_email(contact_data: ContactForm):
    template = Template(HTML_TEMPLATE)
    html_content = template.render(
        name=contact_data.name,
        email=contact_data.email,
        message=contact_data.message
    )

    message = EmailMessage()
    message["From"] = formataddr(("Terminal 404 Bot", settings.SMTP_USER))
    message["To"] = settings.CONTACT_RECEIVER
    message["Subject"] = f"Novo Contato: {contact_data.name}"
    message["Reply-To"] = contact_data.email

    message.set_content(f"Nome: {contact_data.name}\nEmail: {contact_data.email}\nMensagem: {contact_data.message}")
    message.add_alternative(html_content, subtype="html")

    try:
        await aiosmtplib.send(
            message,
            hostname=settings.SMTP_SERVER,
            port=settings.SMTP_PORT,
            username=settings.SMTP_USER,
            password=settings.SMTP_PASSWORD,
            start_tls=True,
        )
        logger.info(f"E-mail enviado com sucesso de {contact_data.email}")
        return True
    except Exception as e:
        logger.error(f"Erro ao enviar e-mail: {str(e)}")
        raise e
