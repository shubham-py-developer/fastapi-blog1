from typing import Optional
from pydantic import BaseModel, model_validator, ConfigDict
from datetime import datetime


class CreateBlog(BaseModel):
    title: str
    slug: str
    content: Optional[str] = None
    author_id: int

    @model_validator(mode="before")
    def validate_slug(cls, values):
        if 'title' in values:
            values['slug'] = values.get('title').lower().replace(" ", "-")

        return values
    


class UpdateBlog(CreateBlog):#inherit from CreateBlog to reuse the fields and validation
    pass


class ShowBlog(BaseModel):
    title: str
    slug: str       
    content: Optional[str]
    author_id: int
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)