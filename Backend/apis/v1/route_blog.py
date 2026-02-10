from typing import List
from fastapi import APIRouter, Depends, status, HTTPException
from sqlalchemy.orm import Session
from db.session import get_db
from db.models.user import User
from apis.v1.route_login import get_current_user
from schemas.blog import CreateBlog, ShowBlog, UpdateBlog
from db.repository.blog import create_new_blog, retreive_blog, list_blogs, update_blog_by_id, delete_blog_by_id

router = APIRouter()


@router.post("/", response_model=ShowBlog, status_code=status.HTTP_201_CREATED)
def create_blog(blog: CreateBlog, db: Session = Depends(get_db)):
    blog = create_new_blog(blog=blog, db=db)
    return ShowBlog.model_validate(blog)

@router.get("/{blog_id}", response_model=ShowBlog, status_code=status.HTTP_200_OK)
def get_blog(blog_id: int, db: Session = Depends(get_db)):
    blog = retreive_blog(blog_id=blog_id, db=db)
    if not blog:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Blog not found with the given id {blog_id}")
    return ShowBlog.model_validate(blog)

@router.get("", response_model=List[ShowBlog], status_code=status.HTTP_200_OK)
def get_all_blogs(db:Session = Depends(get_db)):
    blogs = list_blogs(db=db)
    return [ShowBlog.model_validate(blog) for blog in blogs]

@router.put("/{blog_id}", response_model=ShowBlog, status_code=status.HTTP_200_OK)
def update_a_blog(blog_id: int, blog: UpdateBlog, db: Session = Depends(get_db), current_user:User = Depends(get_current_user)):
    existing_blog = update_blog_by_id(blog_id=blog_id, blog=blog, db=db, author_id=current_user.id)
    if isinstance(existing_blog, dict):
        raise HTTPException(
            detail= existing_blog.get("error"),
            status_code=status.HTTP_400_BAD_REQUEST
        )
    # if not existing_blog:
    #     raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Blog not found with the given id {blog_id}")
    
    existing_blog.title = blog.title
    existing_blog.slug = blog.slug
    existing_blog.content = blog.content
    db.commit()
    db.refresh(existing_blog)
    return ShowBlog.model_validate(existing_blog)

@router.delete("/{blog_id}", status_code=status.HTTP_200_OK)
def delete_a_blog(blog_id: int, db: Session = Depends(get_db),current_user:User = Depends(get_current_user)):
    result = delete_blog_by_id(blog_id=blog_id, db=db, author_id= current_user.id )
    if result.get("error_message"):
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=result["error_message"])
    return {"success_message": result["success_message"]}