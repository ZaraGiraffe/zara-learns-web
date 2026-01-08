from tortoise import Model, fields

class Product(Model):
    id = fields.IntField(pk=True)
    name = fields.CharField(max_length=255)
    description = fields.TextField()
    price = fields.CharField(max_length=255)
    image_url = fields.CharField(max_length=255)
