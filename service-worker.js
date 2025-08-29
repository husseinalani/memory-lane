const CACHE_NAME = 'memory-lane-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.webmanifest'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(ASSETS)).then(self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k)=>k!==CACHE_NAME).map((k)=>caches.delete(k)))).then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  e.respondWith(
    caches.match(req).then((res) => res || fetch(req).then((net) => {
      const copy = net.clone();
      caches.open(CACHE_NAME).then((c)=>c.put(req, copy)).catch(()=>{});
      return net;
    }).catch(()=>res))
  );
});

