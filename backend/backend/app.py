# -*- coding: utf-8 -*-
from flask import Flask

from backend.auth import jwt
from backend.config import Config
from backend.models import db
from backend.resources import api

app = Flask(__name__)
app.config.from_object(Config)

# Flask extensions
api.init_app(app)
db.init_app(app)
jwt.init_app(app)

if __name__ == '__main__':
    app.run(host='0.0.0.0')
