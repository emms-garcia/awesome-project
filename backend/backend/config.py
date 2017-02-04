import os
import datetime


class BaseConfig(object):
    DEBUG = False
    JWT_EXPIRATION_DELTA = datetime.timedelta(days=365)
    SECRET_KEY = os.environ['SECRET_KEY']
    SQLALCHEMY_DATABASE_URI = os.environ['SQLALCHEMY_DATABASE_URI']
    SQLALCHEMY_TRACK_MODIFICATIONS = True


class DevelopmentConfig(BaseConfig):
    DEBUG = True


class ProductionConfig(BaseConfig):
    pass


Config = dict(
    DEVELOPMENT=DevelopmentConfig,
    PRODUCTION=ProductionConfig,
).get(os.environ.get('ENVIRONMENT'), DevelopmentConfig)
