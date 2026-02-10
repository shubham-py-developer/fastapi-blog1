from fastapi import FastAPI
from core.Config import Settings
from db.session import engine
from apis.base import api_router 
from apps.base import app_router
from fastapi.staticfiles import StaticFiles 
from fastapi.responses import FileResponse

# from db.base_class import Base
# from  db.base import Base
def include_router(app):#util function to include all the routers in the app
    app.include_router(api_router) 
    app.include_router(app_router) 

#BASE_DIR = os.path.dirname(os.path.abspath(__file__))

def configure_staticfiles(app):
    app.mount("/static", StaticFiles(directory="static"), name="static")



# def create_tables():
#     #Create the database tables
#     Base.metadata.create_all(bind=engine)


def start_application():
    app = FastAPI(title=Settings.PROJECT_TITLE,version = Settings.PROJECT_VERSION)
    include_router(app)
    configure_staticfiles(app)
    #create_tables()
    return app      


app=start_application()

#Created just for testing purpose
# @app.get("/")
# def hello():
#     return {"message":"Hello FastApi🔥"}




@app.get("/favicon.ico", include_in_schema=False)
async def favicon():
    return FileResponse("static/favicon.ico")


