#TypeHints Practices
"""
def Total_price(price1:float, price2:float) ->str:
    print(f' Price: {price1} + Price2 : {price2} : sum is {price1 + price2}')
    return f'total price Is : "{price1+price2}"'
sum = Total_price(100.5,"200.5") # This will raise a type error due to type mismatch


practice.py:6: error: Argument 2 to "Total_price" has incompatible type "str"; expected "float"  [arg-type]
Found 1 error in 1 file (checked 1 source file)

from typing import Union

def inr_to_usd(value:float) ->Union[float, None]:
    try:
        conv_Fact = 34
        value = value/conv_Fact
        return value
    except TypeError as e:
        return None
usd_value = inr_to_usd("Rajesh") # This will not raise an error but return None due to exception handling
usd_value = inr_to_usd(1000.34)    
print(f'USD Value is : {usd_value}')

from typing import List

Image  = List[List[int]]  # Defining a type alias for a 2D list representing an image

def Flatern_image(image: Image) -> List:
    flat_list = []
    for sublist in image:
        for item in sublist:
            flat_list.append(item)
    return flat_list
image = [[1,2,3],[4,5,6],[7,8,9]]
flat_image = Flatern_image(image)
print(f'Flat Image is : {flat_image}')   

from typing import Callable

def smart_div(func:  Callable[[int,int], float]):
    def inner(a,b):
        if b == 0:
            print("Division by zero is not allowed!")
            return None
        return func(a,b)
    return inner    
@smart_div
def divide(a:int, b: int) ->float:
    return a/b
print(divide(10,0))
print(divide(10,2))

#Iterator Practices

Price = [100,200,300,400,500,700,8000,900]
price_iter = Price.__iter__()
print(price_iter.__next__())#100
print(price_iter.__next__())#200
print(price_iter.__next__())#300

while True:
    try:
        print(price_iter.__next__())
    except StopIteration:
        break   


class InifiniteNaturalNumbers:
    def __init__(self) ->None:
        self.num = 1 
    def __iter__(self):
        return self
    def __next__(self):
        num = self.num
        self.num +=1
        return num
i1 =iter(InifiniteNaturalNumbers())
print(next(i1))#1
print(next(i1))#2   
print(next(i1))#3

#Generator Practices
def return_values():
    yield 1
    yield 2
    yield "three"
    yield 4.0
Value = return_values()

print(Value.__next__())#1
print(Value.__next__())#2
print(Value.__next__())#"three"
print(Value.__next__())#4.0

class Python:
    def __init__(self) ->None:
        self.is_cool = True

class FastAPI(Python):
    pass

f = FastAPI()
print(f.is_cool)
print(FastAPI.__mro__)

#multiple Inheritance, MRO Practices

class Pydantic:
    def is_valid(self,text:str) ->bool:
        if "admin" in text:
            return True
        return False

class FastApI:
    def is_valid(self, text: str) -> bool:
        return True
class CustomAPI(Pydantic, FastApI):
    pass

c =CustomAPI()
print(c.is_valid("Hello admin user please login"), CustomAPI.__mro__)
"""

"""
#Introduction to Pydantic
from pydantic import BaseModel, Field
from typing  import Optional, List
from enum import Enum
from datetime import datetime
class Language(str, Enum):
    EN = "English"
    FR = "French"
    SP = "Spanish"
    PY = "Python"
    CPP = "C++"
    JS = "JavaScript"
    JAVA = "Java"
    GO = "Go"

class Comment(BaseModel):
    text:Optional[str]= None
    

class Blog(BaseModel):
    title:str= Field(max_length =100, min_length=5, title="Blog Title", description="Title of the blog post")
    content:str= Field(min_length=10, max_length=500, title="Blog Content", description="Content of the blog post")
    published:bool =True
    published_at: datetime = Field(default_factory= datetime.now)
    rating:Optional[float]|None = Field(default=None, ge=0, le=5, description="Rating of the blog post between 0 and 5")
    is_active:bool = True   
    language:Language = Language.PY
    comments: Optional[List[Comment]]= None
Blog1 = Blog(title="My First Blog", content="This is the content of my first blog.", rating=4.3, comments=[Comment(text="Great blog!"), Comment(text="Very informative."), Comment(text="What a  nice blog")])
print(Blog1.model_dump_json())
print(Blog1.model_json_schema())

import time
time.sleep(5)

Blog2 = Blog(title="My Second Blog", content="This is the content of my second blog.", published=False, language=Language.JS, comments=[Comment(text="Nice read!")])
print(Blog2.model_dump())
print(Blog.model_validate(Blog2.model_dump()))
"""
"""
#Validation Practices with Pydantic
from pydantic import BaseModel, Field, field_validator, ValidationError, model_validator, EmailStr

class Create_User(BaseModel):
    email: EmailStr = Field(..., title="User Email", description="Email address of the user")
    password:str = Field(..., min_length=8, max_length=15, title="User Password", description="Password for the user account") 
    confirm_pass:str = Field(..., min_length=8, max_length=15, title="Confirm Password", description="Password confirmation field")

    @field_validator('email')
    def validate_email(cls, value):
        if "admin" in value:
            raise ValueError("Email can't contain 'admin'!!!")
        return value
    
    @model_validator(mode='after')  
    def validate_password(self): #values is a dict of all fields Here like email,password,confirm_pass
        pw= self.password
        cpw =self.confirm_pass
        if pw!=cpw:
            raise ValueError("Password and Confirm Password Must be same!!!")
        return self

try:
    U1=Create_User(email="admi@gmail.com", password="strongpass", confirm_pass="strongpass")
    print(U1)
except ValidationError as e:
    print(e)        


"""
"""
#dependency Injection Practices with FastAPI(function Based+Parameterized)

from fastapi import FastAPI, Depends, HTTPException, status

blogs ={
    "1": {"title": "First Blog", "content": "Content of the first blog"},
    "2": {"title": "Second Blog", "content": "Content of the second blog"},     
    "3": {"title": "Third Blog", "content": "Content of the third blog"},
    "4": {"title": "Fourth Blog", "content": "Content of the fourth blog"},
    "5": {"title": "Fifth Blog", "content": "Content of the fifth blog"}
}

users={
    "1": {"name": "Alice", "age": 30},
    "2": {"name": "Bob", "age": 25},
    "3": {"name": "Charlie", "age": 35},
    "4": {"name": "David", "age": 28},
    "5": {"name": "Eve", "age": 22}
}

app = FastAPI(title="Dependency Injection Example")

def get_blog_or_404(blog_id: str):
    blog = blogs.get(blog_id)
    if not blog:
        raise HTTPException(detail= f"Blog with id {blog_id} not found", 
                            status_code=status.HTTP_404_NOT_FOUND)
    return blog
class GetObjectOr404:
    def __init__(self, model) ->None:
        self.model = model

    def __call__(self, blog_id:str):
        obj= self.model.get(blog_id)
        if not obj:
            raise HTTPException(detail= f"Object with id {blog_id} not found", 
                                status_code=status.HTTP_404_NOT_FOUND)
        return obj
    

blog_dep = GetObjectOr404(blogs)
@app.get("/blog/{blog_id}")
def get_blog(blog_name:str = Depends(blog_dep)):
    return blog_name


user_dep = GetObjectOr404(users)
@app.get("/user/{user_id}")
def get_user(user_name:str = Depends(user_dep)):
    return user_name

"""
#Dependency Injection for Unit Testing with FastAPI

from fastapi import FastAPI, Depends, HTTPException, status



deveopment_db = ["DB for Development"]


def get_db_session():
    return deveopment_db
app = FastAPI()
@app.post("/items")
def add_item(item:str, db= Depends(get_db_session)):
    db.append(item)
    print(f"Current DB State: {db}")
    return {"message": f"Item '{item}' added to the database."}