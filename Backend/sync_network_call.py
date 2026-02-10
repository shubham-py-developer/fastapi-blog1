import time
import requests

def main():
    request_count = 15
    url =  "https://httpbin.org/get"
    session = requests.Session()
    for i in range(request_count):
        print(f"Making request {i} to {url}")
        resp = session.get(url)
        if resp.status_code == 200:
            pass
start = time.time()
main()
end = time.time()
print("Time elapsed for sync requests:", end - start)