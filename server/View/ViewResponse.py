from Model.ModelBook import Book

class Success():
    def __init__(self, response, message) -> None:
        self.success = True
        self.message = message
        self.response: Book | list[Book] = response

class Error():
    def __init__(self, message) -> None:
        self.success = False
        self.message = message