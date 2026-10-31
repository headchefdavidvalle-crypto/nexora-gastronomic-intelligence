/* NEXORA · service worker
   - HTML y manifest: primero la red (las actualizaciones llegan solas).
   - Íconos y tipografías: primero la caché (carga instantánea y sin conexión).
   Al publicar cambios grandes, sube el número de VERSION. */
const VERSION = 'nexora-v13c';
const SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './nexora-mark.png',
  './nexora-icon-192.png',
  './nexora-icon-512.png',
  './nexora-icon-maskable-192.png',
  './nexora-icon-maskable-512.png',
  './apple-touch-icon.png',
  './favicon-32.png',
  './favicon-48.png',
  './fonts/bricolage.woff2',
  './fonts/big-shoulders.woff2',
  './fonts/plex-mono.woff2'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(VERSION)
      .then((cache) => Promise.all(SHELL.map((url) =>
        cache.add(new Request(url, { cache: 'reload' })).catch(() => null)
      )))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (req.headers.has('range') || url.pathname.endsWith('.mp4')) return;

  const isPage = req.mode === 'navigate' || url.pathname.endsWith('.html') || url.pathname.endsWith('/');
  const isManifest = url.pathname.endsWith('.webmanifest');

  if (isPage || isManifest) {
    event.respondWith(
      fetch(req, { cache: 'no-store' })
        .then((res) => {
          if (res && res.ok) {
            const copy = res.clone();
            caches.open(VERSION).then((c) => c.put(isPage ? './index.html' : req, copy));
          }
          return res;
        })
        .catch(() => caches.match(isPage ? './index.html' : req).then((r) => r || caches.match('./')))
    );
    return;
  }

  event.respondWith(
    caches.match(req).then((cached) => cached || fetch(req).then((res) => {
      if (res && res.ok) {
        const copy = res.clone();
        caches.open(VERSION).then((c) => c.put(req, copy));
      }
      return res;
    }))
  );
});
