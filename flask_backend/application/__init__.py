from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_marshmallow import Marshmallow
from .config import Config

DB = SQLAlchemy()
MIGRATE = Migrate()
MA = Marshmallow()


def create_app():
    app = Flask(__name__, instance_relative_config=False)
    app.config.from_object(Config)

    DB.init_app(app)
    MIGRATE.init_app(app, DB)
    MA.init_app(app)

    with app.app_context():
        from . import routes, models
        DB.create_all()

    return app

