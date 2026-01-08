from fastapi import FastAPI, Form, UploadFile, File
from tortoise.contrib.fastapi import register_tortoise
from typing import Annotated
import uvicorn
from pathlib import Path
import os
from zara_learns_web.storage.image import LocalImageStorage, ImageStorage
from zara_learns_web.storage import TORTOISE_ORM, models

app = FastAPI()

image_dir_path = Path.cwd() / "images"
os.makedirs(image_dir_path, exist_ok=True)
image_storage: ImageStorage = LocalImageStorage(image_dir_path)

register_tortoise(app, config=TORTOISE_ORM)

@app.post("/api/create-item")
async def create_item(
    name: Annotated[str, Form()],
    description: Annotated[str, Form()],
    price: Annotated[str, Form()],
    image: UploadFile = Annotated[UploadFile, File()]
):
    print("create item request")
    print("name: ", name, "description: ", description, "price: ", price)

    image_url = image_storage.store(image)

    product = models.Product(
        name=name,
        description=description,
        price=price,
        image_url=image_url
    )

    await product.save()

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
