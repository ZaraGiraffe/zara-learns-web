from zara_learns_web.config import Config

TORTOISE_ORM = {
    "connections": {"default": Config.from_env().storage.get_postgres_url()},
    "apps": {"default": {"models": ["zara_learns_web.storage.models", "aerich.models"]}},
}
