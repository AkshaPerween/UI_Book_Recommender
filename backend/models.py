from pydantic import BaseModel
from typing import List, Optional, Tuple

class BookRecommendation(BaseModel):
    thumbnail: str
    caption: str

class RecommendationRequest(BaseModel):
    query: str
    category: Optional[str] = "All"
    tone: Optional[str] = "All"