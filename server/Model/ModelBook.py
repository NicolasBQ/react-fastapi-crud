from sqlmodel import Field, SQLModel
from pydantic import BaseModel

class Book(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    title: str
    author: str
    genre: str
    read: bool


