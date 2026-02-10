from sqlalchemy.orm import Session
from schemas.blog import CreateBlog, UpdateBlog
from db.models.blog import Blog
from sqlalchemy import or_, and_


def create_new_blog(blog: CreateBlog, db: Session,author_id:int=1):
    blog = Blog(
        title=blog.title,
        slug=blog.slug,
        content=blog.content,
        author_id=author_id
    )
    db.add(blog)
    db.commit()
    db.refresh(blog)
    return blog

def retreive_blog(blog_id: int, db: Session):
    blog = db.query(Blog).filter(Blog.id == blog_id).first()
    return blog


def list_blogs(db: Session):
    blogs = db.query(Blog).filter(Blog.is_published == True).all()
    return blogs

def update_blog_by_id(blog_id: int, blog: UpdateBlog, db: Session, author_id: int=1):
    existing_blog = db.query(Blog).filter(Blog.id == blog_id, Blog.author_id == author_id).first()
    if not existing_blog:
        return {"error":f'Blog with id {blog_id} does not exist'}
    if not existing_blog.author_id == author_id:
        return {"error":f"only the Author can modify the blog !"}

    
    existing_blog.title = blog.title
    existing_blog.slug = blog.slug
    existing_blog.content = blog.content
    db.add(existing_blog)
    db.commit()
    db.refresh(existing_blog)
    return existing_blog


def delete_blog_by_id(blog_id: int, db: Session, author_id: int):
    blog_in_db = db.query(Blog).filter(Blog.id == blog_id, Blog.author_id== author_id).first()
    if not blog_in_db:
        return {"error_message": f"Blog not found with the given id {blog_id} and author id {author_id}"}
    # if not blog_in_db.author_id==author_id:
    #     return {"error_message": "Only the author can delete a blog"}
    db.delete(blog_in_db)
    db.commit()
    return {"success_message": f"Blog with the id {blog_id} deleted successfully"}
#search on website navbar
def global_search(keyword: str, db, user=None):

    query = db.query(Blog)

    # 🔐 NOT logged in → only published blogs
    if user is None:
        query = query.filter(Blog.is_published == True)

    # 🔐 Logged in → published + own blogs
    else:
        query = query.filter(
            or_(
                Blog.is_published == True,
                Blog.author_id == user.id
            )
        )

    # 🔎 search in title + content
    query = query.filter(
        or_(
            Blog.title.ilike(f"%{keyword}%"),
            Blog.content.ilike(f"%{keyword}%")
        )
    )

    # latest first
    return query.order_by(Blog.id.desc()).all()