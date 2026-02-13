
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
def login(request: Request,
          email: str = Form(...),
          password: str = Form(...),
          db: Session = Depends(get_db)):

    errors = []

    user = authenticate_user(email=email, password=password, db=db)

    if not user:
        errors.append("Incorrect email or Password!!!")
        return templates.TemplateResponse(
            "auth/login.html",
            {"request": request, "errors": errors, "email": email}
        )

    #  CREATE TOKEN (for API use)
    access_token = create_access_token(data={"sub": email})

    #  CREATE RESPONSE
    response = responses.RedirectResponse(
        "/?alert=Successfully%20Logged%20In",
        status_code=status.HTTP_302_FOUND
    )

    #  SET COOKIE (JWT)
    response.set_cookie(
        key="access_token",
        value=access_token,
        httponly=True,
        samesite="lax"
    )

    #  VERY IMPORTANT: SAVE SESSION FOR FRONTEND
    request.session["user"] = email
    request.session["is_admin"] = user.is_superuser  # or is_admin field
    request.session["user_id"] = user.id

    return response


# ---------------- LOGOUT ----------------
@router.get("/logout")
def logout(request: Request):
    response = responses.RedirectResponse(
        url="/?alert=Logged%20Out",
        status_code=status.HTTP_302_FOUND
    )

    #  remove JWT cookie
    response.delete_cookie("access_token")

    #  clear session completely
    request.session.clear()

    return response

