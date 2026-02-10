
from fastapi import APIRouter, Request, Depends, Form, status, responses
from fastapi.templating import Jinja2Templates
from sqlalchemy.orm import Session
import json
from pydantic import ValidationError
from sqlalchemy.exc import IntegrityError

from db.session import get_db
from schemas.user import UserCreate
from db.repository.user import create_new_user
from apis.v1.route_login import authenticate_user
from core.security import create_access_token

templates = Jinja2Templates(directory="templates")

# ✅ Use prefix so /auth/register works
router = APIRouter()

# GET: show register form
@router.get("/register")
def register_get(request: Request):
    return templates.TemplateResponse("auth/register.html", {"request": request, "errors": [], "email": "", "password": ""})

# POST: submit register form
@router.post("/register")
def register_post(
    request: Request,
    email: str = Form(...),
    password: str = Form(...),
    db: Session = Depends(get_db)
):
    errors = []
    try:
        user = UserCreate(email=email, password=password)

        # try to create user
        create_new_user(user=user, db=db)

        # success redirect
        return responses.RedirectResponse(
            "/?alert=Successfully%20Registered",
            status_code=status.HTTP_302_FOUND
        )

    except IntegrityError:
        #  duplicate email error catch
        db.rollback()
        errors.append("Email already registered. Try another email.")

        return templates.TemplateResponse(
            "auth/register.html",
            {
                "request": request,
                "errors": errors,
                "email": email,
                "password": ""# Always clear password
            }
        )

    except ValidationError as e:
        errors_list = json.loads(e.json())# Extract Pydantic validation errors
        for item in errors_list:
            errors.append(item.get("loc")[0] + ": " + item.get("msg"))

        return templates.TemplateResponse(
            "auth/register.html",
            {
                "request": request,
                "errors": errors,
                "email": email,
                "password": ""# Always clear password
            }
        )
#get: show login form
@router.get("/login")
def login(request:Request):
    return templates.TemplateResponse("auth/login.html",{"request": request, "errors": [], "email": ""})
# POST: Handle login
@router.post("/login")
def login(request:Request,
          email: str = Form(...),
          password:str = Form(...),
          db: Session = Depends(get_db)
          ):
    errors= []
    user = authenticate_user(email=email,password=password, db=db)
    if not user:
        errors.append("Incorrect email or Password!!!")
        return templates.TemplateResponse("auth/login.html",{"request": request, "errors": errors, "email": email})
    access_token = create_access_token(data={"sub":email})
# Redirect after successful login
    response = responses.RedirectResponse(
            "/?alert=Successfully%20Logged%20In",
            status_code=status.HTTP_302_FOUND
        )
    #  set cookie correctly
    response.set_cookie(
        key="access_token",
        value=access_token,   # ⚠ NO Bearer
        httponly=True,
        samesite="lax"
    )

    return response