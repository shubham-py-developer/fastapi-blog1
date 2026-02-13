from fastapi import APIRouter, Request, Depends, HTTPException, Form
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse, RedirectResponse
from sqlalchemy.orm import Session
from db.session import get_db
from db.models.blog import Blog
from db.models.user import User
from core.security import get_current_user
import bleach
from slugify import slugify
import html

router = APIRouter()
templates = Jinja2Templates(directory="templates")

AUTHORIZED_USER_EMAIL = "user1@example.com"

def check_authorized(user: User):
    if user.email != AUTHORIZED_USER_EMAIL:
        raise HTTPException(status_code=403, detail="Not authorized")

# -----------------------
# Allowed tags for CKEditor content
# -----------------------
ALLOWED_TAGS = [
    'p', 'br', 'strong', 'b', 'em', 'i', 'u', 'a',
    'h1','h2','h3','h4','h5','h6',
    'ul','ol','li',
    'blockquote','pre','code',
    'img','table','thead','tbody','tr','th','td'
]
ALLOWED_ATTRS = {
    'a': ['href', 'title', 'target', 'rel'],
    'img': ['src', 'alt', 'width', 'height'],
    'th': ['colspan','rowspan'],
    'td': ['colspan','rowspan']
}

def sanitize_html(content: str) -> str:
    return html.unescape(
        bleach.clean(content, tags=ALLOWED_TAGS, attributes=ALLOWED_ATTRS, strip=True, strip_comments=True)
    )

# ---------------- DASHBOARD ----------------
@router.get("/", response_class=HTMLResponse)
async def user_blogs(request: Request, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    check_authorized(current_user)
    blogs = db.query(Blog).filter(Blog.author_id == current_user.id).all()
    return templates.TemplateResponse("blogs/user_blogs.html",
        {"request": request, "blogs": blogs, "user": current_user}
    )

# ---------------- CREATE ----------------
@router.get("/create", response_class=HTMLResponse)
async def create_blog_form(request: Request, current_user: User = Depends(get_current_user)):
    check_authorized(current_user)
    return templates.TemplateResponse("blogs/edit_blog.html", {"request": request, "blog": None})

@router.post("/create")
async def create_blog(
    request: Request,
    title: str = Form(...),
    content: str = Form(...),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    check_authorized(current_user)

    clean_content = sanitize_html(content)
    slug = slugify(title)

    # Ensure unique slug
    existing = db.query(Blog).filter(Blog.slug == slug).first()
    if existing:
        slug += "-1"

    new_blog = Blog(
        title=title,
        slug=slug,
        content=clean_content,
        author_id=current_user.id,
        is_published=True
    )
    db.add(new_blog)
    db.commit()
    db.refresh(new_blog)

    return RedirectResponse("/user/blogs", status_code=303)

# ---------------- EDIT ----------------
@router.get("/{blog_id}/edit", response_class=HTMLResponse)
async def edit_blog_form(blog_id: int, request: Request, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    check_authorized(current_user)

    blog = db.query(Blog).filter(Blog.id == blog_id, Blog.author_id == current_user.id).first()
    if not blog:
        raise HTTPException(status_code=404, detail="Blog not found")
    return templates.TemplateResponse("blogs/edit_blog.html", {"request": request, "blog": blog})

@router.post("/{blog_id}/edit")
async def edit_blog(blog_id: int, title: str = Form(...), content: str = Form(...),
                    db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    check_authorized(current_user)

    blog = db.query(Blog).filter(Blog.id == blog_id, Blog.author_id == current_user.id).first()
    if not blog:
        raise HTTPException(status_code=404, detail="Blog not found")

    blog.title = title
    blog.slug = slugify(title)
    blog.content = sanitize_html(content)
    db.commit()
    db.refresh(blog)

    return RedirectResponse("/user/blogs", status_code=303)

# ---------------- DELETE ----------------
@router.post("/{blog_id}/delete")
async def delete_blog(blog_id: int, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    check_authorized(current_user)

    blog = db.query(Blog).filter(Blog.id == blog_id, Blog.author_id == current_user.id).first()
    if not blog:
        raise HTTPException(status_code=404, detail="Blog not found")

    db.delete(blog)
    db.commit()
    return RedirectResponse("/user/blogs", status_code=303)
