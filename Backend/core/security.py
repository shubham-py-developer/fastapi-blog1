from datetime import datetime, timedelta, timezone
from typing import Optional
from jose import jwt
from core.Config import settings

def create_access_token(data:dict, expires_delta: Optional[timedelta]=None):
    to_encode = data.copy()
    expire = datetime.now(timezone.utc) + timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp":expire})
    encode_jwt =  jwt.encode(to_encode, settings.SECTRET_KEY, algorithm=settings.ALGORITHM)
    return encode_jwt
