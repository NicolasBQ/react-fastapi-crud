from sqlmodel import Session

class SessionManager():
    def __init__(self, engine):
        self.engine = engine

    def __enter__(self):
        self.session = Session(self.engine)
        return self.session
    
    def __exit__(self, exc_type, exc_value, traceback):
        self.session.close()
        return False