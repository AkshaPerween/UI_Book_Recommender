from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware import Middleware
from models import RecommendationRequest
from recommender import recommend_books
from database import book_db
import uvicorn

app = FastAPI(
    title="Book Recommendation API",
    middleware=[  # Configure middleware at app creation
        Middleware(
            CORSMiddleware,
            allow_origins=["*"],
            allow_credentials=True,
            allow_methods=["*"],
            allow_headers=["*"],
        )
    ]
)
@app.get("/")
async def root():
    return {
        "message": "Welcome to the Book Recommendation API",
        "endpoints": {
            "docs": "/docs",
            "redoc": "/redoc",
            "categories": "/categories",
            "tones": "/tones",
            "recommend": "/recommend (POST)"
        }
    }

@app.get("/categories")
async def get_categories():
    return {"categories": book_db.get_categories()}

@app.get("/tones")
async def get_tones():
    return {"tones": book_db.get_tones()}

@app.post("/recommend")
async def get_recommendations(request: RecommendationRequest):
    try:
        recommendations = recommend_books(
            query=request.query,
            category=request.category,
            tone=request.tone
        )
        return {"recommendations": recommendations}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8001)  # Try different port