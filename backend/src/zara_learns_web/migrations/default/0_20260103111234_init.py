from tortoise import BaseDBAsyncClient

RUN_IN_TRANSACTION = True


async def upgrade(db: BaseDBAsyncClient) -> str:
    return """
        CREATE TABLE IF NOT EXISTS "product" (
    "id" SERIAL NOT NULL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "image_url" VARCHAR(255) NOT NULL
);
CREATE TABLE IF NOT EXISTS "aerich" (
    "id" SERIAL NOT NULL PRIMARY KEY,
    "version" VARCHAR(255) NOT NULL,
    "app" VARCHAR(100) NOT NULL,
    "content" JSONB NOT NULL
);"""


async def downgrade(db: BaseDBAsyncClient) -> str:
    return """
        """


MODELS_STATE = (
    "eJztlW1r2zAQx79K8KsOutJm6Vr2Lg17pEtGF0ahFKPYF1tEllxJ3hLafPfpZLtS7MS0sL"
    "GF7VWcu/9Jdz/udPdBDHNSMH30RYq4iHTwpncfcJKB+Wj5DnsByXPPgxZNZsyqc081U1oS"
    "e9qcMAWHGKEiSXNNBTdWXjCGRhEZIeWJMxWc3hUQapGATkEax82tMVMewxJU/TdfhHMKLN"
    "5Il8Z4t7WHepVb20eu31kh3jYLI8GKjDtxvtKp4I9qym36CXCQRAMer2WB6WN2VaF1RWWm"
    "TlKm6MXUkFy5T2QQCY78TDbKFpjgLS/7J4Ozwfmr14NzI7GZPFrO1mV5rvYy0BIYT4O19R"
    "NNSoXF6LjZ3xa5UUrkdnS1vgHPpNyEV6PqolcbHD7XMr+IX0aWIQOe6BShnZ520Po2vBp9"
    "GF4dGNULrEaYNi7be1y5+qUPkfqT4jJrkZzCckcTNsL2BWgHv+nb6ykmnSl1x3xsB5+H15"
    "Zotqo8l5Px+1ruYR5dTi4adGlGEggLyZ7TpRtB+0L2N7UqPpnzhTf8aJiRaPGDyDhseURf"
    "7NK2XVk/a1oIN+jjqsi1w3M0BEmjdOuOqVzdK4Y40f8Ns0cb5jtItfVp3D2+Xsg/Prz+S4"
    "iz8QyIlXw/AZ4cHz8BoFHtBGh9mwDNjRrKGdyE+OnrZLwdohfSABnTSPceeoyq1lD/HUA7"
    "+GG93Yu6uZOxfqF0Iu0p9oCLP71b1j8BWnoP9A=="
)
