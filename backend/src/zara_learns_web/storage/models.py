from tortoise import Model, fields
from pydantic import BaseModel
from typing import List

class Product(Model):
    id = fields.IntField(pk=True)
    name = fields.CharField(max_length=255)
    description = fields.TextField()
    price = fields.CharField(max_length=255)
    image_urls = fields.JSONField()

    def to_base(self) -> ProductBase:
        return ProductBase(
            id=self.id,
            name=self.name,
            description=self.description,
            price=self.price,
            image_urls=self.image_urls
        )

class ProductBase(BaseModel):
    id: int
    name: str
    description: str
    price: str
    image_urls: List[str]
