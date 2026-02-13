from apps.v1 import route_blog, route_login, route_blog_ui
from fastapi import APIRouter

app_router = APIRouter()

# public blog homepage
app_router.include_router(route_blog.router, prefix="", include_in_schema=False)

# auth
app_router.include_router(route_login.router, prefix="/auth", tags=["auth"], include_in_schema=False)

#  ONLY THIS FOR BLOG CRUD DASHBOARD
app_router.include_router(route_blog_ui.router, prefix="/user/blogs", tags=["dashboard"], include_in_schema=False)
