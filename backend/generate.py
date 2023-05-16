from tortoise import Tortoise


async def init():
    await Tortoise.generate_schemas()
