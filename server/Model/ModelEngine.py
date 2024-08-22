from sqlmodel import create_engine

class Engine():
    sqlite_file_name = "database.db"
    sqlite_url = f"sqlite:///Model/{sqlite_file_name}"
    engine = create_engine(sqlite_url, echo=True)
