from fastapi import FastAPI, Form, UploadFile, File, HTTPException
from tortoise.contrib.fastapi import register_tortoise
from typing import Annotated
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path
import os
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
    image: UploadFile = Annotated[UploadFile, File()]
):
    print("create item request")
    print("name: ", name, "description: ", description, "price: ", price)

    image_url = image_storage.store(image)

    try:
        await models.Product.create(
            name=name,
            description=description,
            price=price,
            image_url=image_url
        )
    except Exception as e:
        return HTTPException(status_code=500, detail=str(e))

    return None
