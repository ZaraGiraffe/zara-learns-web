from pydantic import BaseModel
import tomllib
import os

class StorageConfig(BaseModel):
    user: str
    password: str
    host: str
    port: int
    database: str

    def get_postgres_url(self):
        return f"postgres://{self.user}:{self.password}@{self.host}:{self.port}/{self.database}"

class Config(BaseModel):
    storage: StorageConfig

    @classmethod
    def from_file(cls, file_path: str):
        with open(file_path, "rb") as f:
            config = tomllib.load(f)
        return cls(**config)

    @classmethod
    def from_env(cls):
        file_path = os.getenv("CONFIG")
        if not file_path:
            raise ValueError("CONFIG environment variable is not set")
        return cls.from_file(file_path)
