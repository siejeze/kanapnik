/* Kanapniki — offline. Po zmianie przepisów podbij numer wersji. */
const CACHE = "kanapniki-v1";
const PLIKI = ["./","./index.html","./przepisy.js","./manifest.webmanifest",
               "./icon-192.png","./icon-512.png","./icon-maskable.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(PLIKI)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(k =>
    Promise.all(k.filter(x => x !== CACHE).map(x => caches.delete(x)))
  ).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
      const kopia = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, kopia));
      return res;
    }).catch(() => caches.match("./index.html")))
  );
});
