from fastapi import APIRouter, HTTPException, status
from ..models.contact import ContactForm
from ..services.email_service import send_contact_email
import logging

router = APIRouter()
logger = logging.getLogger(__name__)

@router.post("/contact", status_code=status.HTTP_200_OK)
async def submit_contact(contact_data: ContactForm):
    try:
        success = await send_contact_email(contact_data)
        if success:
            return {"message": "Solicitação enviada com sucesso!"}
        else:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Erro interno ao processar sua solicitação."
            )
    except Exception as e:
        logger.error(f"Erro na rota /contact: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Não foi possível enviar sua mensagem. Tente novamente mais tarde."
        )
