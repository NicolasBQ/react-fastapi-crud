from sqlmodel import Session, select
from Model.ModelBook import Book
from Model.ModelEngine import Engine
from View.ViewResponse import Success, Error
from Model.ModelSessionManager import SessionManager
from Model.ModelMessages import Message

class Service():
    @staticmethod
    def read():
        with SessionManager(Engine.engine) as session:
            try:
                statement = select(Book)
                result = session.exec(statement)
                books = result.all()
                response = Success(books, Message.READ_SUCCESS)
                return response
            except Exception as e:
                response = Error(Message.READ_ERR)
                return response

    @staticmethod
    def create(book: Book):
        new_book = Book(title=book.title, author=book.author, genre=book.genre, read=book.read)

        with SessionManager(Engine.engine) as session:
            try: 
                session.add(new_book)
                session.commit()
                books = session.exec(select(Book)).all()
                response = Success(books, Message.CREATE_SUCCESS)
                return response
            except Exception as e:
                print(f"----ERROR----- {e}")
                response = Error(Message.CREATE_ERR)
                return response
       
    
    @staticmethod
    def update(book_id, book: Book):
        with SessionManager(Engine.engine) as session:
            try:
                statement = select(Book).where(Book.id == book_id)
                results = session.exec(statement)
                current_book = results.one()

                current_book.title = book.title
                current_book.author = book.author
                current_book.genre = book.genre
                current_book.read = book.read

                session.add(current_book)
                session.commit()
                session.refresh(current_book)
                
                books = session.exec(select(Book)).all()
                response = Success(books, Message.UPDATE_SUCCESS)
                return response
            except Exception as e:
                response = Error(Message.UPDATE_ERR)
                return response


    @staticmethod
    def delete(book_id):
        with SessionManager(Engine.engine) as session:
            try: 
                statement = select(Book).where(Book.id == book_id)
                result = session.exec(statement)
                book = result.one()
                session.delete(book)
                session.commit()

                books = session.exec(select(Book)).all()
                response = Success(books, Message.DELETE_SUCCESS)
                return response
            except Exception as e:
                response = Error(Message.DELETE_ERR)
                return response