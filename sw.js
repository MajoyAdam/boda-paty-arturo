/* Sube este número cada vez que cambies algo importante.
   Al detectarlo, la app se actualiza sola en el celular de todos. */
const CACHE = "boda-pa-v1";
const BASE = [
  "./","./index.html","./manifest.json",
  "./img/portada.jpg",
  "./img/rose-a.png","./img/rose-b.png","./img/rose-c.png",
  "./img/flor-2.png","./img/flor-6.png",
  "./img/perro-1.png","./img/perro-2.png","./img/perro-3.png"
];
self.addEventListener("install", e => { self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(BASE)).catch(()=>{})); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim())); });
/* Red primero: siempre se ve la última versión; la caché sólo entra sin señal. */
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(fetch(e.request)
    .then(r => { const copia = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copia)); return r; })
    .catch(() => caches.match(e.request).then(r => r || caches.match("./index.html"))));
});
