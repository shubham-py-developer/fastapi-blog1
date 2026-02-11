from fastapi import APIRouter, Request, Depends, HTTPException
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse
from sqlalchemy.orm import Session
from db.repository.blog import list_blogs,retreive_blog, html_to_text
from db.session import get_db
from typing import Optional
from sqlalchemy import or_
from db.models.blog import Blog
from db.models.user import User
import re
import bleach
from core.static_pages import static_pages
#from bs4 import BeautifulSoup


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
async def search(request: Request, q: Optional[str] = None, db: Session = Depends(get_db)):
    query = q or ""
    results = []

    if query:
        # Regex pattern for highlighting
        pattern = re.compile(re.escape(query), re.IGNORECASE)

        # Fetch all blogs (authorization: only published blogs)
        blogs = db.query(Blog).join(User, Blog.author_id == User.id)\
            .filter(Blog.is_published == True)\
            .all()

        for blog in blogs:
            # Parse HTML content
            #soup = BeautifulSoup(blog.content, "html.parser")
            text_content = html_to_text(blog.content)

            # Check if query exists in title, slug, or text_content
            if (pattern.search(blog.title) or 
                pattern.search(blog.slug) or 
                pattern.search(text_content)):

                # Highlight keywords safely
                highlighted_title = pattern.sub(lambda m: f"<mark>{m.group(0)}</mark>", blog.title)
                highlighted_slug = pattern.sub(lambda m: f"<mark>{m.group(0)}</mark>", blog.slug)

                # Highlight content snippet (first 300 chars)
                snippet_text = text_content[:300] + ("..." if len(text_content) > 300 else "")
                highlighted_snippet = pattern.sub(lambda m: f"<mark>{m.group(0)}</mark>", snippet_text)

                # Sanitize snippet HTML (allow <mark>)
                safe_content = bleach.clean(
                    highlighted_snippet,
                    tags=['mark'],
                    strip=True
                )

                results.append({
                    "id": blog.id,
                    "title": bleach.clean(highlighted_title, tags=['mark'], strip=True),
                    "slug": bleach.clean(highlighted_slug, tags=['mark'], strip=True),
                    "content": safe_content,
                    "author_email": blog.author.email
                })

    return templates.TemplateResponse(
        "blogs/search.html",
        {
            "request": request,
            "query": query,
            "blogs": results
        }
    )