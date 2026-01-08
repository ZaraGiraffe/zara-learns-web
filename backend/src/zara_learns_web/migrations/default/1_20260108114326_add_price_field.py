from tortoise import BaseDBAsyncClient

RUN_IN_TRANSACTION = True


async def upgrade(db: BaseDBAsyncClient) -> str:
    return """
        ALTER TABLE "product" ADD "price" VARCHAR(255) NOT NULL;"""


async def downgrade(db: BaseDBAsyncClient) -> str:
    return """
        ALTER TABLE "product" DROP COLUMN "price";"""


MODELS_STATE = (
    "eJztlm1r2zAQx79KyKsWutJm6Vr2Lg17pEtGF0ZhFKPYF1tEllxJ3hK6fPfpZDtS7MQ0ML"
    "aF7lWcu/9Jdz/ufH7sRjAjOdOnn6WI8lB3X3ceu5ykYB4avpNOl2SZ50GLJlNm1Zmnmiot"
    "iT1tRpiCE4xQoaSZpoIbK88ZQ6MIjZDy2JlyTh9yCLSIQScgjePbvTFTHsECVPU3mwczCi"
    "zaSJdGeLe1B3qZWdsHrt9aId42DULB8pQ7cbbUieBrNeU2/Rg4SKIBj9cyx/Qxu7LQqqIi"
    "UycpUvRiKkiu3CcyCAVHfiYbZQuM8ZYXvfP+Zf/q5av+lZHYTNaWy1VRnqu9CLQERpPuyv"
    "qJJoXCYnTc7G+D3DAhcju6Sl+DZ1Kuw6tQtdGrDA6fa5nfxC8li4ABj3WC0C4uWmh9HdwO"
    "3w9uj4zqGKsRpo2L9h6Vrl7hQ6T+pLjMGiQnsNjRhLWwQwHawm/y5m6CSadKPTAf29GnwZ"
    "0lmi5Lz8149K6Se5iHN+PrGt1M0nCvDl0HHArRP9CiNCUxBLlk+4DcCHrmMHHvzObeGxQN"
    "UxLOfxAZBQ2P6Ild2qYr7aV1C+EGfVQWuXJ4TgdgujvZuqhLV/ueJk70f00f0Jr+DlJt3S"
    "+7x9cLeebD678JcTb2gFjKDxPg+dnZEwAa1U6A1rcJ0NyooZjBTYgfv4xH2yF6ITWQEQ11"
    "52eHUdUY6n8DaAs/rLf9a6f+YYP1C6VjaU+xB1z/7d2y+gWNWnbY"
)
