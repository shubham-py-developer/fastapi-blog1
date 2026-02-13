FastAPI Blog application
🌳 C:\Users\soura\Documents\mine\fastapi\blog
├── 📁 alembic
|  └── 📁 versions
|  ├── 📄 env.py
├── 📄 alembic.ini
├── 📁 apis
|  ├── 📄 base.py
|  └── 📁 v1
|     └── 📄 route_blog.py
|     └── 📄 route_login.py
|     └── 📄 route_user.py
├── 📁 apps   #new
|  ├── 📄 base.py
|  └── 📁 v1
|     └── 📄 route_blog.py
|     └── 📄 route_login.py
├── 📁 core
|  ├── 📄 config.py
|  └── 📄 security.py
|  └── 📄 hashing.py
|  └── 📄 static_pages.py
├── 📁 db
|  ├── 📁 repository
|  |  ├── 📄 blog.py
|  |  └── 📄 user.py
|  |  └── 📄 login.py 
|  ├── 📄 base_class.py
|  ├── 📄 base.py
|  ├── 📄 session.py
|  └── 📁 models
|     ├── 📄 blog.py
|     ├── 📄 user.py
|     └── 📄 __init__.py
├── 📄 docker-compose.yaml
├── 📄 Dockerfile
├── 📄 main.py
├── 📄 requirements.txt
├── 📁 schemas
|  ├── 📄 blog.py
|  ├── 📄 user.py
|  └── 📁 __pycache__
|     └── 📄 user.cpython-311.pyc
├── 📁 static   
|  ├── 📄 favicon.ico
|  └── 📁 images
|     └── 📄 fast.png
|     └── 📄 xyz.png
├── 📁 templates  #new
|   ├── 📁 auth
|   |   └── 📄 register.html
|   ├──📁 blogs
|   |   └── 📄 detail.html
|   |   └── 📄 home.html
|   |   └── 📄 edit_blog.html
|   |   └── 📄 user_blog.html
|   |   └── 📄 search.html
|   ├── 📁 components
|   |   └── 📄 navbar.html
|   └── 📄 base.html
├── 📄 .env
├── 📄 .gitignore
├── 📄 alembic.ini
├── 📄 README.md
venv