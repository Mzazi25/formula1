import os

class Config:
    """
    General configuration parent class
    """
    SQLALCHEMY_DATABASE_URI = 'postgresql+psycopg2://faithremo:1503@localhost/formula1'


class ProdConfig(Config):
    pass

   
class DevConfig(Config):
    pass

config_options = {
'development':DevConfig,
'production':ProdConfig
}

