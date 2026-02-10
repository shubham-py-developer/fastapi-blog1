import time
import asyncio
import aiohttp

async def make_request(session, req_n):
    url  = "https://httpbin.org/get"
    print(f"Making request {req_n} to {url}")
    async with  session.get(url) as resp:
        if resp.status == 200:
            await resp.text()

async def main():
    request_count = 15
    async with aiohttp.ClientSession() as session:
        await asyncio.gather(
            *[make_request(session, i) for i in range(request_count)]
        )

loop = asyncio.get_event_loop()
start = time.time()
loop.run_until_complete(main())
end = time.time()
print("Time elapsed for async requests:", end - start)
