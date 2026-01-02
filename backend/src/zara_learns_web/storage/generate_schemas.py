from tortoise import run_async, Tortoise
from zara_learns_web.config import Config

async def generate_schemas():
    postgres_url = Config.from_env().storage.get_postgres_url()
    print(f"postgres url: {postgres_url}")
    await Tortoise.init(
        db_url=postgres_url,
        modules={"models": ["zara_learns_web.storage.models"]},
    )
    await Tortoise.generate_schemas()
    await Tortoise.close_connections()

if __name__ == "__main__":
    run_async(generate_schemas())
