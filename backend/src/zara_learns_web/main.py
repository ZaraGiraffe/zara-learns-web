from fastapi import FastAPI, Form, UploadFile, File, HTTPException
from tortoise.contrib.fastapi import register_tortoise
from typing import Annotated
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path
import os
from typing import List
from zara_learns_web.storage.image import LocalImageStorage, ImageStorage
from zara_learns_web.storage import TORTOISE_ORM, models

app = FastAPI()

image_dir_path = Path.cwd() / "images"
os.makedirs(image_dir_path, exist_ok=True)
image_storage: ImageStorage = LocalImageStorage(image_dir_path)

register_tortoise(app, config=TORTOISE_ORM)

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/api/create-item")
async def create_item(
    name: Annotated[str, Form()],
    description: Annotated[str, Form()],
    price: Annotated[str, Form()],
    images: Annotated[List[UploadFile], File()]
):
    print("create item request")
    print("name: ", name, "description: ", description, "price: ", price)

    image_urls = []
    for image in images:
        image_url = image_storage.store(image)
        image_urls.append(image_url)

    try:
        await models.Product.create(
            name=name,
            description=description,
            price=price,
            image_urls=image_urls
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

    return None

@app.get("/api/get-items")
async def get_items(limit: int = 100, offset: int = 0) -> list[models.ProductBase]:
    try:
        products = await models.Product.all().limit(limit).offset(offset)
        products_base = [product.to_base() for product in products]
        return products_base
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
