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
# ------------------------------
# Global Search
# ------------------------------
@router.get("/search", response_class=HTMLResponse)
async def search(request: Request, q: Optional[str] = None, db: Session = Depends(get_db)):
    """
    Global search across blogs and static pages.
    Highlights matched keywords and sanitizes HTML content.
    """
    query = (q or "").strip()
    results = []

    if query:
        # ------------------------------
        # 1️⃣ Split query into multiple keywords
        # ------------------------------
        keywords = [kw.strip() for kw in query.split() if kw.strip()]
        if not keywords:
            keywords = [query]

        # Regex pattern for highlighting (case-insensitive)
        pattern = re.compile("(" + "|".join(re.escape(kw) for kw in keywords) + ")", re.IGNORECASE)

        # ------------------------------
        # 2️⃣ Search Blogs from DB
        # ------------------------------
        blog_filters = [Blog.title.ilike(f"%{kw}%") | Blog.slug.ilike(f"%{kw}%") | Blog.content.ilike(f"%{kw}%") for kw in keywords]
        blogs = db.query(Blog).join(User, Blog.author_id == User.id).filter(or_(*blog_filters)).all()

        # Allowed HTML tags for bleach
        ALLOWED_TAGS = list(bleach.sanitizer.ALLOWED_TAGS) + ['p','h1','h2','h3','h4','ul','li','strong','em']

        for blog in blogs:
            # Sanitize and highlight content
            clean_content = bleach.clean(blog.content, tags=ALLOWED_TAGS, strip=True)
            highlighted_title = pattern.sub(lambda m: f"<mark>{m.group(0)}</mark>", bleach.clean(blog.title))
            highlighted_slug = pattern.sub(lambda m: f"<mark>{m.group(0)}</mark>", bleach.clean(blog.slug))
            highlighted_content = pattern.sub(lambda m: f"<mark>{m.group(0)}</mark>", clean_content)

            results.append({
                "id": blog.id,
                "title": highlighted_title,
                "slug": highlighted_slug,
                "content": highlighted_content,
                "author_email": blog.author.email
            })

        # ------------------------------
        # 3️⃣ Search Static Pages
        # ------------------------------
        for page in static_pages:
            page_text = " ".join([page.get("title", ""), page.get("slug", ""), page.get("content", "")])
            if any(re.search(re.escape(kw), page_text, re.IGNORECASE) for kw in keywords):
                clean_content = bleach.clean(page.get("content", ""), tags=ALLOWED_TAGS, strip=True)
                highlighted_title = pattern.sub(lambda m: f"<mark>{m.group(0)}</mark>", bleach.clean(page.get("title", "")))
                highlighted_slug = pattern.sub(lambda m: f"<mark>{m.group(0)}</mark>", bleach.clean(page.get("slug", "")))
                highlighted_content = pattern.sub(lambda m: f"<mark>{m.group(0)}</mark>", clean_content)

                results.append({
                    "id": None,
                    "title": highlighted_title,
                    "slug": highlighted_slug,
                    "content": highlighted_content,
                    "author_email": page.get("author_email", "admin@example.com")
                })

    # ------------------------------
    # Render search results template
    # ------------------------------
    return templates.TemplateResponse(
        "blogs/search.html",
        {
            "request": request,
            "query": query,
            "blogs": results
        }
    )