from abc import abstractmethod, ABC
from fastapi import UploadFile
import os
from typing import List
from pathlib import Path

class ImageStorage(ABC):
    @abstractmethod
    def store(self, image: UploadFile) -> str:
        pass

    @abstractmethod
    def batch_store(self, images: List[UploadFile]) -> List[str]:
        pass

    @abstractmethod
    def delete(self, image_url):
        pass

class LocalImageStorage(ImageStorage):
    def __init__(self, image_dir_path: Path):
        os.makedirs(image_dir_path, exist_ok=True)
        self.image_dir_path = image_dir_path
        super().__init__()

    def store(self, image: UploadFile) -> str:
        image_path = self.image_dir_path / image.filename
        open(image_path, "wb").write(
            image.file.read()
        )
        image_url = f"file://{image_path}"
        return image_url

    def batch_store(self, images: List[UploadFile]) -> List[str]:
        image_urls = []
        for image in images:
            image_url = self.store(image)
            image_urls.append(image_url)
        return image_urls

    def delete(self, image_name):
        os.remove(self.image_dir_path / image_name)
