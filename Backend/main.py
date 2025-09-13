from fastapi import FastAPI

from core.Config import Settings


app=FastAPI(title=Settings.PROJECT_TITLE,version= Settings.PROJECT_VERSION)

@app.get("/")
def hello():
    return {"message":"Hello FastApi"}