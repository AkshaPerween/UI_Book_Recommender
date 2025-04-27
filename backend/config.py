from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    embedding_model: str = "sentence-transformers/all-MiniLM-L6-v2"
    initial_top_k: int = 50
    final_top_k: int = 16

    class Config:
        env_file = ".env"

settings = Settings()