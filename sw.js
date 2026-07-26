/* Kanapniki — offline.
   Treść (index.html, przepisy.js) ładuje się najpierw z sieci, więc zmiany
   widać od razu po odświeżeniu. Z pamięci schodzi tylko wtedy, gdy nie ma internetu.
   Ikony i manifest lecą z pamięci, bo się nie zmieniają. */
const CACHE = "kanapniki-v5";
const PLIKI = ["./","./index.html","./przepisy.js","./manifest.webmanifest",
               "./icon-192.png","./icon-512.png","./icon-maskable.png"];
const SWIEZE = /\/$|index\.html$|przepisy\.js$/;

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(PLIKI)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(k => Promise.all(k.filter(x => x !== CACHE).map(x => caches.delete(x))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  const swieze = e.request.mode === "navigate" || SWIEZE.test(url.pathname);

  if (swieze) {
    e.respondWith(
      fetch(e.request).then(res => {
        const kopia = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, kopia));
        return res;
      }).catch(() => caches.match(e.request).then(hit => hit || caches.match("./index.html")))
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
      const kopia = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, kopia));
      return res;
    }))
  );
});
