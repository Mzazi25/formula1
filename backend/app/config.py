import os

class Config:
    """
    General configuration parent class
    """
    pass


class ProdConfig(Config):
    pass

   
class DevConfig(Config):
    pass

config_options = {
'development':DevConfig,
'production':ProdConfig
}

