from tortoise import BaseDBAsyncClient

RUN_IN_TRANSACTION = True


async def upgrade(db: BaseDBAsyncClient) -> str:
    return """
        ALTER TABLE "product" ADD "image_urls" JSONB NOT NULL;
        ALTER TABLE "product" DROP COLUMN "image_url";"""


async def downgrade(db: BaseDBAsyncClient) -> str:
    return """
        ALTER TABLE "product" ADD "image_url" VARCHAR(255) NOT NULL;
        ALTER TABLE "product" DROP COLUMN "image_urls";"""


MODELS_STATE = (
    "eJztlW1r2zAQx79K8KsOutJm6Vr2Lg17pEtGF0ZhFKPYF1tEllxJ3hK6fPfpZDty7NikME"
    "YDeZXk7n/S3S+nuycvhDnJmD77JkWYBdp713vyOEnAfGn4TnseSdOKBy2azJhVpxXVTGlJ"
    "7GlzwhScYoQKJE01FdxYecYYGkVghJRHzpRx+piBr0UEOgZpHD8fjJnyEJagyp/pwp9TYO"
    "FWujTEu63d16vU2j5z/cEK8baZHwiWJdyJ05WOBd+oKbfpR8BBEg14vJYZpo/ZFYWWFeWZ"
    "OkmeYiWmhOTK3ZNBIDjyM9koW2CEt7zuXwyuBtdv3g6ujcRmsrFcrfPyXO15oCUwnnpr6y"
    "ea5AqL0XGznw1yo5jI3ehKfQ2eSbkOr0TVRa80OHyuZf4Rv4QsfQY80jFCu7zsoPVjeDf6"
    "NLw7MapXWI0wbZy397hw9XMfIq2+FJdZg+QUli1NWAs7FKAd/Kbv76eYdKLUI6tiO/k6vL"
    "dEk1XhuZ2MP5byCubR7eSmRjeVNHhWh24CDoXof2hRmpAI/Ewy1ST55ftk3DImt6JqOEMa"
    "6N6fHqOqMTZfBtYOilhyd6PWexLrF0pH0p5iD8BGxXU0X1QGKxpmJFj8JjL0Gx7RF23api"
    "vpJ3UL4eYPCYuK147V2RBM08c793fh6l7fxImO2/uAtvcvkGrn2mkfj5WQ44DcgMS38QyI"
    "hfwwAV6cn+8B0KhaAVrfNkBzo4b8De67Xiohx93ywnbL+i+QXH4n"
)
