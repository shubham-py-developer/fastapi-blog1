Script started on 2025-09-13 14:48:51+05:30 [TERM="xterm-256color" TTY="/dev/pts/3" COLUMNS="101" LINES="26"]
[?2004h]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ deactivate
[?2004ldeactivate: command not found
[?2004h]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ deactivate[K[K[K[K[K[K[K[K
deallocvt               debian-distro-info      declare                 desktop-file-edit
debconf                 deb-systemd-helper      deja-dup                desktop-file-install
debconf-apt-progress    deb-systemd-invoke      delgroup                desktop-file-validate
debconf-communicate     debugfs                 delpart                 devdump
debconf-copydb          debugpy                 deluser                 devlink
debconf-escape          debugpy.bat             delv                    
debconf-set-selections  debugpy.fish            depmod                  
debconf-show            debugpy.ps1             dequote                 
]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ de[K[Kde[K[Ks[Ksource venv [K/[K[K[K[K[K[K[K[K[K[K[K[Kcd ..
[?2004l[?2004h]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog[00m$ source venv/bin/activate
[?2004l[?2004h(venv) ]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog[00m$ uvicorn main:app --reload
[?2004l
[32mINFO[0m:     Will watch for changes in these directories: ['/home/mypc/Desktop/Pratice/FastApi_blog']
[31mERROR[0m:    [Errno 98] Address already in use
[?2004h(venv) ]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog[00m$ 
[?2004l[?2004h(venv) ]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog[00m$ uvicorn main:app --reload
[?2004l[32mINFO[0m:     Will watch for changes in these directories: ['/home/mypc/Desktop/Pratice/FastApi_blog']
[31mERROR[0m:    [Errno 98] Address already in use
[?2004h(venv) ]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog[00m$ uvicorn main:app --reload
[?2004l[32mINFO[0m:     Will watch for changes in these directories: ['/home/mypc/Desktop/Pratice/FastApi_blog']
[31mERROR[0m:    [Errno 98] Address already in use
[?2004h(venv) ]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog[00m$ l s[K[Ksof -i :8000
[?2004lCOMMAND   PID USER   FD   TYPE DEVICE SIZE/OFF NODE NAME
uvicorn 18102 mypc    3u  IPv4 103609      0t0  TCP localhost:8000 (LISTEN)
python3 20450 mypc    3u  IPv4 103609      0t0  TCP localhost:8000 (LISTEN)
[?2004h(venv) ]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog[00m$ lsof -i :8000uvicorn main:app --reload
[?2004l[32mINFO[0m:     Will watch for changes in these directories: ['/home/mypc/Desktop/Pratice/FastApi_blog']
[31mERROR[0m:    [Errno 98] Address already in use
[?2004h(venv) ]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog[00m$ kill -9 20450
[?2004l[?2004h(venv) ]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog[00m$ kill -9 20450uvicorn main:app --reload[12Plsof -i :8000uvicorn main:app --reload
[?2004l
[32mINFO[0m:     Will watch for changes in these directories: ['/home/mypc/Desktop/Pratice/FastApi_blog']
[31mERROR[0m:    [Errno 98] Address already in use
[?2004h(venv) ]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog[00m$ 
[?2004l[?2004h(venv) ]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog[00m$ uvicorn main:app --reload[12Pkill -9 20450uvicorn main:app --reload[12Plsof -i :8000
[?2004lCOMMAND   PID USER   FD   TYPE DEVICE SIZE/OFF NODE NAME
uvicorn 18102 mypc    3u  IPv4 103609      0t0  TCP localhost:8000 (LISTEN)
[?2004h(venv) ]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog[00m$ lsof -i :8000uvicorn main:app --reload[12Pkill -9 20450
[?2004l[?2004h(venv) ]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog[00m$ 
[?2004l[?2004h(venv) ]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog[00m$ kill -9 20450lsof -i :8000
[?2004l
COMMAND   PID USER   FD   TYPE DEVICE SIZE/OFF NODE NAME
uvicorn 18102 mypc    3u  IPv4 103609      0t0  TCP localhost:8000 (LISTEN)
[?2004h(venv) ]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog[00m$ 
[?2004l[?2004h(venv) ]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog[00m$ kill -9 18102
[?2004l[?2004h(venv) ]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog[00m$ kill -9 18102lsof -i :8000kill -9 20450lsof -i :8000uvicorn main:app --reload
[?2004l[32mINFO[0m:     Will watch for changes in these directories: ['/home/mypc/Desktop/Pratice/FastApi_blog']
[32mINFO[0m:     Uvicorn running on [1mhttp://127.0.0.1:8000[0m (Press CTRL+C to quit)
[32mINFO[0m:     Started reloader process [[36m[1m21587[0m] using [36m[1mStatReload[0m
[31mERROR[0m:    Error loading ASGI app. Could not import module "main".
^C[32mINFO[0m:     Stopping reloader process [[36m[1m21587[0m]
[?2004h(venv) ]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog[00m$ uvicorn main:app --reload
[?2004l[32mINFO[0m:     Will watch for changes in these directories: ['/home/mypc/Desktop/Pratice/FastApi_blog']
[32mINFO[0m:     Uvicorn running on [1mhttp://127.0.0.1:8000[0m (Press CTRL+C to quit)
[32mINFO[0m:     Started reloader process [[36m[1m21663[0m] using [36m[1mStatReload[0m
[31mERROR[0m:    Error loading ASGI app. Could not import module "main".
^C[32mINFO[0m:     Stopping reloader process [[36m[1m21663[0m]
[?2004h(venv) ]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog[00m$ B[Kcd Backend/
[?2004l[?2004h(venv) ]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ cd Backend/uvicorn main:app --reload
[?2004l[32mINFO[0m:     Will watch for changes in these directories: ['/home/mypc/Desktop/Pratice/FastApi_blog/Backend']
[32mINFO[0m:     Uvicorn running on [1mhttp://127.0.0.1:8000[0m (Press CTRL+C to quit)
[32mINFO[0m:     Started reloader process [[36m[1m21927[0m] using [36m[1mStatReload[0m
[32mINFO[0m:     Started server process [[36m21929[0m]
[32mINFO[0m:     Waiting for application startup.
[32mINFO[0m:     Application startup complete.
[32mINFO[0m:     127.0.0.1:53576 - "[1mGET / HTTP/1.1[0m" [32m200 OK[0m
[32mINFO[0m:     127.0.0.1:53582 - "[1mGET / HTTP/1.1[0m" [32m200 OK[0m
[32mINFO[0m:     127.0.0.1:53588 - "[1mGET /docs HTTP/1.1[0m" [32m200 OK[0m
[32mINFO[0m:     127.0.0.1:53588 - "[1mGET /openapi.json HTTP/1.1[0m" [32m200 OK[0m
[32mINFO[0m:     127.0.0.1:48350 - "[1mGET / HTTP/1.1[0m" [32m200 OK[0m
[33mWARNING[0m:  StatReload detected changes in 'main.py'. Reloading...
[32mINFO[0m:     Shutting down
[32mINFO[0m:     Waiting for application shutdown.
[32mINFO[0m:     Application shutdown complete.
[32mINFO[0m:     Finished server process [[36m21929[0m]
[32mINFO[0m:     Started server process [[36m22191[0m]
[32mINFO[0m:     Waiting for application startup.
[32mINFO[0m:     Application startup complete.
[32mINFO[0m:     127.0.0.1:39172 - "[1mGET /docs HTTP/1.1[0m" [32m200 OK[0m
[32mINFO[0m:     127.0.0.1:39172 - "[1mGET /openapi.json HTTP/1.1[0m" [32m200 OK[0m
[32mINFO[0m:     127.0.0.1:39172 - "[1mGET / HTTP/1.1[0m" [32m200 OK[0m
[33mWARNING[0m:  StatReload detected changes in 'main.py'. Reloading...
[32mINFO[0m:     Shutting down
[32mINFO[0m:     Waiting for application shutdown.
[32mINFO[0m:     Application shutdown complete.
[32mINFO[0m:     Finished server process [[36m22191[0m]
[32mINFO[0m:     Started server process [[36m22386[0m]
[32mINFO[0m:     Waiting for application startup.
[32mINFO[0m:     Application startup complete.
[32mINFO[0m:     127.0.0.1:57792 - "[1mGET / HTTP/1.1[0m" [32m200 OK[0m
[32mINFO[0m:     127.0.0.1:57800 - "[1mGET /say HTTP/1.1[0m" [32m200 OK[0m
[32mINFO[0m:     127.0.0.1:57808 - "[1mGET / HTTP/1.1[0m" [32m200 OK[0m
[33mWARNING[0m:  StatReload detected changes in 'main.py'. Reloading...
[32mINFO[0m:     Shutting down
[32mINFO[0m:     Waiting for application shutdown.
[32mINFO[0m:     Application shutdown complete.
[32mINFO[0m:     Finished server process [[36m22386[0m]
[32mINFO[0m:     Started server process [[36m22557[0m]
[32mINFO[0m:     Waiting for application startup.
[32mINFO[0m:     Application startup complete.
^C[32mINFO[0m:     Shutting down
[32mINFO[0m:     Waiting for application shutdown.
[32mINFO[0m:     Application shutdown complete.
[32mINFO[0m:     Finished server process [[36m22557[0m]
[32mINFO[0m:     Stopping reloader process [[36m[1m21927[0m]
[?2004h(venv) ]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ deactivate 
[?2004l[?2004h]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ deactivate uvicorn main:app --reload
[?2004l
Command 'uvicorn' not found, but can be installed with:
sudo apt install uvicorn
[?2004h]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ 
[?2004l[?2004h]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ uvicorn main:app --reload[14Pdeactivate uvicorn main:app --reload[14Pcd Backend/uvicorn main:app --reload[12Pkill -9 18102lsof -i :8000kill -9 20450lsof -i :8000uvicorn main:app --reload[12Pkill -9 20450uvicorn main:app --reload[12Plsof -i :8000uvicorn main:app --reload
[?2004l
Command 'uvicorn' not found, but can be installed with:
sudo apt install uvicorn
[?2004h]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ 
[?2004l[?2004h]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ cd ..
[?2004l[?2004h]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog[00m$ cd ..uvicorn main:app --reload
[?2004lCommand 'uvicorn' not found, but can be installed with:
sudo apt install uvicorn
[?2004h]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog[00m$ uvicorn main:app --reloadcd ..[Kuvicorn main:app --reload[14Pdeactivate uvicorn main:app --reload[14Pcd Backend/uvicorn main:app --reload[12Pkill -9 18102[K[K[K[K[K[K[K[K[K[K[K[K[Kso
soelim                   software-properties-gtk  sort                     source
soffice                  sol                      sotruss                  
]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog[00m$ source venv/bin/activate
[?2004l[?2004h(venv) ]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog[00m$ cd Backend/
[?2004l[?2004h(venv) ]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ cd Backend/[K[K[K[K[K[K[K[K[K[K[Kuvicorn main:app --reload
[?2004l[32mINFO[0m:     Will watch for changes in these directories: ['/home/mypc/Desktop/Pratice/FastApi_blog/Backend']
[32mINFO[0m:     Uvicorn running on [1mhttp://127.0.0.1:8000[0m (Press CTRL+C to quit)
[32mINFO[0m:     Started reloader process [[36m[1m23391[0m] using [36m[1mStatReload[0m
[32mINFO[0m:     Started server process [[36m23393[0m]
[32mINFO[0m:     Waiting for application startup.
[32mINFO[0m:     Application startup complete.
[32mINFO[0m:     127.0.0.1:43468 - "[1mGET / HTTP/1.1[0m" [32m200 OK[0m
deactivate   	       ^C[32mINFO[0m:     Shutting down
[32mINFO[0m:     Waiting for application shutdown.
[32mINFO[0m:     Application shutdown complete.
[32mINFO[0m:     Finished server process [[36m23393[0m]
[32mINFO[0m:     Stopping reloader process [[36m[1m23391[0m]
[?2004h(venv) ]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ de
deactivate              debconf-show            debugpy.ps1             dequote
deallocvt               debian-distro-info      declare                 desktop-file-edit
debconf                 deb-systemd-helper      deja-dup                desktop-file-install
debconf-apt-progress    deb-systemd-invoke      delgroup                desktop-file-validate
debconf-communicate     debugfs                 delpart                 devdump
debconf-copydb          debugpy                 deluser                 devlink
debconf-escape          debugpy.bat             delv                    
debconf-set-selections  debugpy.fish            depmod                  
(venv) ]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ dedea[K[K[K[Keacyt[K[Ktivate 
[?2004l[?2004h]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ soo[Kurce venv/bin/[K[K[K[K[K[K[K[K[K[K.[K ./venv/bin/acyi[K[K[Kctivate
[?2004lbash: ./venv/bin/activate: No such file or directory
[?2004h]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ cd ..
[?2004l[?2004h]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog[00m$ cd [K Backend/
[?2004l[?2004h]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ cd Backend/..[Ksource ./venv/bin/activate[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K venv [K/bin/active
[?2004lbash: venv/bin/active: No such file or directory
[?2004h]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ cd \[K[K[K[Kso[K[Ksource /Prac[K[K[K[K[K[K /[7m/Desktop/Pratice/FastApi_blog[27m/Desktop/Pratice/FastApi_blog/gvgegngvg/gbgigng[C[K[K[K[K[K[K[K[K[K[Kg/venv/bin/acti vate
[?2004lbash: //Desktop/Pratice/FastApi_blog/venv/bin/activate: No such file or directory
[?2004h]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ source //Desktop/Pratice/FastApi_blog/venv/bin/activate[A[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[CDesktop/Pratice/FastApi_blog/venv/bin/activa[1Pte[A]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ [C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C
[C[C[C
[?2004lbash: /Desktop/Pratice/FastApi_blog/venv/bin/activate: No such file or directory
[?2004h]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ source /Desktop/Pratice/FastApi_blog/venv/bin/activate[K[K[K[A[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[K
[K[A[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[Ksource //Desktop/Pratice/FastApi_blog/venv/bin/activate[A]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ [C[C[C[C[C[C[C[29Pvenv/bin/active
[K[A[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C
[?2004lbash: venv/bin/active: No such file or directory
[?2004h]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ cd ..
[?2004l[?2004h]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog[00m$ cd ..source venv/bin/active
[?2004lbash: venv/bin/active: No such file or directory
[?2004h]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog[00m$ source venv/bin/active[Kate
[?2004l[?2004h(venv) ]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog[00m$ cd Backend/
[?2004l[?2004h(venv) ]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ cd Backend/source venv/bin/activate[2Pecd ..[Ksource venv/bin/active[Ksource[K[K[K[K[K[Kuvicorn main:app --reload
[?2004l[32mINFO[0m:     Will watch for changes in these directories: ['/home/mypc/Desktop/Pratice/FastApi_blog/Backend']
[32mINFO[0m:     Uvicorn running on [1mhttp://127.0.0.1:8000[0m (Press CTRL+C to quit)
[32mINFO[0m:     Started reloader process [[36m[1m28120[0m] using [36m[1mStatReload[0m
[32mINFO[0m:     Started server process [[36m28122[0m]
[32mINFO[0m:     Waiting for application startup.
[32mINFO[0m:     Application startup complete.
[32mINFO[0m:     127.0.0.1:53178 - "[1mGET / HTTP/1.1[0m" [32m200 OK[0m
[32mINFO[0m:     127.0.0.1:53182 - "[1mGET / HTTP/1.1[0m" [32m200 OK[0m
[32mINFO[0m:     127.0.0.1:53198 - "[1mGET /docs HTTP/1.1[0m" [32m200 OK[0m
[32mINFO[0m:     127.0.0.1:53198 - "[1mGET /openapi.json HTTP/1.1[0m" [32m200 OK[0m
[32mINFO[0m:     127.0.0.1:48430 - "[1mGET / HTTP/1.1[0m" [32m200 OK[0m
[32mINFO[0m:     127.0.0.1:44470 - "[1mGET / HTTP/1.1[0m" [32m200 OK[0m
^C[32mINFO[0m:     Shutting down
[32mINFO[0m:     Waiting for application shutdown.
[32mINFO[0m:     Application shutdown complete.
[32mINFO[0m:     Finished server process [[36m28122[0m]
[32mINFO[0m:     Stopping reloader process [[36m[1m28120[0m]
[?2004h(venv) ]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ dea
deactivate  deallocvt   
(venv) ]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ deadea[K[K[K[Kactivate 
[?2004l[?2004h]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ git status
[?2004lOn branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	[31m./[m
	[31m../venv/[m

nothing added to commit but untracked files present (use "git add" to track)
[?2004h]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ 
[?2004l[?2004h]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ git add .[K[K
[?2004lNothing specified, nothing added.
[33mhint: Maybe you wanted to say 'git add .'?[m
[33mhint: Turn this message off by running[m
[33mhint: "git config advice.addEmptyPathspec false"[m
[?2004h]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ git add .
[?2004l[?2004h]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ d[Kgit stau[Ktyu[K[Kus
[?2004lOn branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
	[32mnew file:   README.md[m
	[32mnew file:   __pycache__/main.cpython-310.pyc[m
	[32mnew file:   core/Config.py[m
	[32mnew file:   core/__pycache__/Config.cpython-310.pyc[m
	[32mnew file:   main.py[m
	[32mnew file:   requirements.txt[m
	[32mnew file:   typescript[m

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	[31m../venv/[m

[?2004h]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ git stau[Ktus
[?2004lOn branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
	[32mnew file:   README.md[m
	[32mnew file:   __pycache__/main.cpython-310.pyc[m
	[32mnew file:   core/Config.py[m
	[32mnew file:   core/__pycache__/Config.cpython-310.pyc[m
	[32mnew file:   main.py[m
	[32mnew file:   requirements.txt[m
	[32mnew file:   typescript[m

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	[31m../venv/[m

[?2004h]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ 
[?2004l[?2004h]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ git status
[?2004lOn branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
	[32mnew file:   README.md[m
	[32mnew file:   __pycache__/main.cpython-310.pyc[m
	[32mnew file:   core/Config.py[m
	[32mnew file:   core/__pycache__/Config.cpython-310.pyc[m
	[32mnew file:   main.py[m
	[32mnew file:   requirements.txt[m
	[32mnew file:   typescript[m

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	[31m../venv/[m

[?2004h]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ [18~[K[K[K[Kgit add.[K  .
[?2004l[?2004h]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ git status
[?2004lOn branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
	[32mnew file:   README.md[m
	[32mnew file:   __pycache__/main.cpython-310.pyc[m
	[32mnew file:   core/Config.py[m
	[32mnew file:   core/__pycache__/Config.cpython-310.pyc[m
	[32mnew file:   main.py[m
	[32mnew file:   requirements.txt[m
	[32mnew file:   typescript[m

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	[31m../venv/[m

[?2004h]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ git commit -m "Initial commit"
[?2004l[master (root-commit) bb3bd03] Initial commit
 7 files changed, 274 insertions(+)
 create mode 100644 Backend/README.md
 create mode 100644 Backend/__pycache__/main.cpython-310.pyc
 create mode 100644 Backend/core/Config.py
 create mode 100644 Backend/core/__pycache__/Config.cpython-310.pyc
 create mode 100644 Backend/main.py
 create mode 100644 Backend/requirements.txt
 create mode 100644 Backend/typescript
[?2004h]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ gi[K[Kgit status
[?2004lOn branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	[31mmodified:   requirements.txt[m

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	[31m../venv/[m

no changes added to commit (use "git add" and/or "git commit -a")
[?2004h]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ 
[?2004l[?2004h]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ git push -m[K[K-u origin main
[?2004lerror: src refspec main does not match any
[31merror: failed to push some refs to 'origin'
[m[?2004h]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ 
[?2004l[?2004h]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ git branch -M maui[K[Kin[K[K[K[K[K[K[K[K
[?2004l[?1h=* [32mmaster[m[m
[K[?1l>[?2004h]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ git branch -push -u origin main[K[K[K[Kmaster
[?2004lfatal: 'origin' does not appear to be a git repository
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
[?2004h]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ [7mgit remote add origin https://github.com/shubham-py[27m[7m-[27m[7mdeveloper/fastapi-blog1.git[27m[A]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ git remote add origin https://github.com/shubham-py-developer/fastapi-blog1.git
[?2004l[?2004h]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ git remote add origin https://github.com/shubham-py-developer/fastapi-blog1.git[A]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ [C[C[C[C[26Ppush -u origin master
[K[A[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C
[?2004l
Enumerating objects: 13, done.
Counting objects:   7% (1/13)Counting objects:  15% (2/13)Counting objects:  23% (3/13)Counting objects:  30% (4/13)Counting objects:  38% (5/13)Counting objects:  46% (6/13)Counting objects:  53% (7/13)Counting objects:  61% (8/13)Counting objects:  69% (9/13)Counting objects:  76% (10/13)Counting objects:  84% (11/13)Counting objects:  92% (12/13)Counting objects: 100% (13/13)Counting objects: 100% (13/13), done.
Delta compression using up to 4 threads
Compressing objects:  11% (1/9)Compressing objects:  22% (2/9)Compressing objects:  33% (3/9)Compressing objects:  44% (4/9)Compressing objects:  55% (5/9)Compressing objects:  66% (6/9)Compressing objects:  77% (7/9)Compressing objects:  88% (8/9)Compressing objects: 100% (9/9)Compressing objects: 100% (9/9), done.
Writing objects:   7% (1/13)Writing objects:  15% (2/13)Writing objects:  23% (3/13)Writing objects:  30% (4/13)Writing objects:  38% (5/13)Writing objects:  46% (6/13)Writing objects:  53% (7/13)Writing objects:  61% (8/13)Writing objects:  69% (9/13)Writing objects:  76% (10/13)Writing objects:  84% (11/13)Writing objects:  92% (12/13)Writing objects: 100% (13/13)Writing objects: 100% (13/13), 3.99 KiB | 583.00 KiB/s, done.
Total 13 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/shubham-py-developer/fastapi-blog1.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.
[?2004h]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ 
[?2004l[?2004h]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ git stau[Ktus
[?2004lOn branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	[31mmodified:   requirements.txt[m
	[31mmodified:   typescript[m

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	[31m../venv/[m

no changes added to commit (use "git add" and/or "git commit -a")
[?2004h]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ git add .
[?2004l[?2004h]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ 
[?2004l[?2004h]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ git commit -m mai[K[K[K"Update"
[?2004l[master 2a638e6] Update
 2 files changed, 70 insertions(+), 1 deletion(-)
[?2004h]0;mypc@dell: ~/Desktop/Pratice/FastApi_blog/Backend[01;32mmypc@dell[00m:[01;34m~/Desktop/Pratice/FastApi_blog/Backend[00m$ git push -u commit -m "Update"add .[Kcommit -m "Update"[10Ppush -u origin master
[?2004l
Enumerating objects: 9, done.
Counting objects:  11% (1/9)Counting objects:  22% (2/9)Counting objects:  33% (3/9)Counting objects:  44% (4/9)Counting objects:  55% (5/9)Counting objects:  66% (6/9)Counting objects:  77% (7/9)Counting objects:  88% 