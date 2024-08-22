from fastapi import APIRouter
from Model.ModelBook import Book
from Controler.ControlerService import Service


controler = APIRouter()

@controler.get('/')
def read_books():
    return Service.read()

@controler.post('/create')
def create_book(book: Book):
    return Service.create(book)

@controler.put('/update/{book_id}')
def update_book(book_id, book: Book):
    return Service.update(book_id, book)

@controler.delete('/delete/{book_id}')
def delete_book(book_id):
    return Service.delete(book_id)