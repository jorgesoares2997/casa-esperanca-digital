const VIDEO_CACHE = "instituto-casa-video-v1";
const VIDEO_URLS = [
  "https://port-bu.s3.eu-north-1.amazonaws.com/gerandoamor.mov",
  "https://port-bu.s3.eu-north-1.amazonaws.com/gerandoamormobile.mov",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(VIDEO_CACHE);
      await Promise.all(
        VIDEO_URLS.map(async (url) => {
          try {
            const response = await fetch(url, { mode: "no-cors" });
            await cache.put(url, response);
          } catch (_error) {
            // Ignore offline/install race; fetch handler will try again.
          }
        }),
      );
      await self.skipWaiting();
    })(),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((k) => k !== VIDEO_CACHE).map((k) => caches.delete(k)));
      await self.clients.claim();
    })(),
  );
});

self.addEventListener("fetch", (event) => {
  const requestUrl = event.request.url;
  if (!VIDEO_URLS.includes(requestUrl)) return;

  event.respondWith(
    (async () => {
      const cache = await caches.open(VIDEO_CACHE);
      const cached = await cache.match(requestUrl);
      if (cached) return cached;

      try {
        const network = await fetch(event.request, { mode: "no-cors" });
        await cache.put(requestUrl, network.clone());
        return network;
      } catch (_error) {
        return new Response("", { status: 504, statusText: "Video unavailable" });
      }
    })(),
  );
});
