// Note:
// We intentionally do NOT cache/serve videos from the Service Worker.
// Videos rely heavily on Range requests (206 Partial Content). A naive cache-first
// strategy can break playback in some browsers.
self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      await self.clients.claim();
    })(),
  );
});
