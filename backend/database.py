from langchain_text_splitters import CharacterTextSplitter
from langchain_chroma import Chroma
from langchain_core.documents import Document
from langchain_huggingface import HuggingFaceEmbeddings
from pathlib import Path
from config import settings
import pandas as pd
import numpy as np


class BookDatabase:
    def __init__(self):
        # Get the project root directory
        project_root = Path(__file__).parent.parent

        # Load and process data
        data_path = project_root / "data" / "tagged_description.txt"
        with open(data_path, "r", encoding="utf-8") as f:
            text = f.read()

        raw_documents = [Document(page_content=text)]

        books_path = project_root / "data" / "books_with_emotions.csv"
        self.books = pd.read_csv(books_path)
        self.books["large_thumbnail"] = self.books["thumbnail"] + "&fife=w800"
        self.books["large_thumbnail"] = np.where(
            self.books["large_thumbnail"].isna(),
            "cover-not-found.jpg",
            self.books["large_thumbnail"],
        )

        # Text splitting and embeddings
        text_splitter = CharacterTextSplitter(separator="\n", chunk_size=0, chunk_overlap=0)
        documents = text_splitter.split_documents(raw_documents)
        self.embedding = HuggingFaceEmbeddings(model_name=settings.embedding_model)
        self.db_books = Chroma.from_documents(documents, embedding=self.embedding)

    def get_categories(self):
        return ["All"] + sorted(self.books["simple_categories"].unique().tolist())

    @staticmethod
    def get_tones():
        return ["All", "Happy", "Surprising", "Angry", "Suspenseful", "Sad"]


book_db = BookDatabase()