from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes import contact
from .config import settings
import logging

# Configuração de Logs
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
    handlers=[
        logging.StreamHandler(),
        logging.FileHandler("app.log")
    ]
)

app = FastAPI(
    title="Terminal 404 Backend API",
    description="API para o formulário de contato e serviços internos da Terminal 404.",
    version="1.0.0"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Rotas
app.include_router(contact.router, prefix="/api", tags=["Contact"])

@app.get("/")
async def root():
    return {"message": "Terminal 404 Backend API is running."}

@app.get("/health")
async def health():
    return {"status": "healthy"}
