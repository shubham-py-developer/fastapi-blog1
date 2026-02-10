from fastapi import Depends, APIRouter,status, HTTPException,Cookie
from fastapi.security import OAuth2PasswordRequestForm, OAuth2PasswordBearer
from sqlalchemy.orm import Session
from jose import jwt, JWTError

from db.session import get_db
from core.Config import settings
from core.hashing import Hasher
from db.repository.login import get_user_by_email
from core.security import create_access_token
from db.models.user import User


router= APIRouter()

def authenticate_user( email: str, password: str, db: Session):
    user = get_user_by_email(email=email,db=db)
    print(user)
    if not user:
        return False
    if not Hasher.verify_password(password,user.password):
        return False
    return user

@router.post("/token")
def login_for_access_token(form_data:OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = authenticate_user(form_data.username, form_data.password, db)
    if not user:
        raise HTTPException(
            detail="Incorrect Credential'email or password'",
            status_code= status.HTTP_401_UNAUTHORIZED
        )
    access_token = create_access_token(data= {"sub":user.email})
    return {"access_token":access_token,"token_type":"bearer"}

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/token")


def get_current_user(token: str= Depends(oauth2_scheme),db: Session=  Depends(get_db)):
    credential_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="could not validate credentials, Please try again!"
    )
    try:
        payload =  jwt.decode(token,settings.SECTRET_KEY,algorithms=[settings.ALGORITHM])
        email: str =payload.get("sub")
        if email is None:
            raise credential_exception
    except JWTError:
        raise credential_exception
    user = get_user_by_email(email=email,db=db)
    if user is None:
        raise credential_exception
    return user


def get_current_user_optional(
    access_token: str = Cookie(default=None),
    db: Session = Depends(get_db)
):
    if not access_token:
        return None
    try:
        payload = jwt.decode(access_token, settings.SECRET_KEY, algorithms=["HS256"])
        email = payload.get("sub")
        if email is None:
            return None
        user = db.query(User).filter(User.email == email).first()
        return user
    except JWTError:
        return None