from fastapi import APIRouter, Request, Depends, HTTPException
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse
from sqlalchemy.orm import Session
from db.repository.blog import list_blogs,retreive_blog,global_search
from db.session import get_db
from typing import Optional
from apis.v1.route_login import get_current_user_optional


router = APIRouter()
templates = Jinja2Templates(directory="templates")


@router.get("/", response_class=HTMLResponse)
async def home(request: Request,alert: Optional[str]=None, db:Session = Depends(get_db)):
    blogs = list_blogs(db=db)
    context= {"request": request,"blogs": blogs,"alert":alert}
    print(dir(request))
    return templates.TemplateResponse(
        "blogs/home.html",
        context= context
    )

@router.get("/app/blog/{blog_id}", response_class=HTMLResponse)
async def blog_detail(request: Request, blog_id: int, db: Session = Depends(get_db)):
    blog = retreive_blog(blog_id=blog_id, db=db)

    if not blog:
        raise HTTPException(status_code=404, detail="Blog not found")

    context = {
        "request": request,
        "blog": blog   
    }

    return templates.TemplateResponse(
        "blogs/detail.html",
        context=context
    )

@router.get("/search", response_class=HTMLResponse)
async def search(
    request: Request,
    q: str = "",
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user_optional)
):
    results = []

    if q:
        results = global_search(keyword=q, db=db, user=current_user)

    context = {
        "request": request,
        "results": results,
        "query": q,
        "user": current_user
    }

    return templates.TemplateResponse("blogs/search.html", context)
