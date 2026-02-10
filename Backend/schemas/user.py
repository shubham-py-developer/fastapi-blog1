from pydantic import BaseModel, EmailStr, Field, ConfigDict


class UserCreate(BaseModel):
    email: EmailStr = Field(..., description="The email address of the user")
    password: str = Field(..., min_length=8, description="The password for the user account")
class UserRead(BaseModel):
    id: int
    email: EmailStr
    #username: str|None = None
    is_active: bool

    model_config = ConfigDict(from_attributes=True)