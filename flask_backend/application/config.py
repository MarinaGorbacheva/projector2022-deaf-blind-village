from os import path, getcwd, sep

DBS_DIR = "databases"
DB_DIR = f"{DBS_DIR}/database.db"

DB_PATH = path.normpath(path.join(sep.join(getcwd().split(sep)[:-1]), DB_DIR)).replace("\\", "/")


class Config:
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + DB_PATH
    SQLALCHEMY_TRACK_MODIFICATIONS = False
