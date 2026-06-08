const CACHE_NAME = 'inspeccio-v2';

self.addEventListener('install', e => {
    self.skipWaiting();
});

self.addEventListener('activate', e => {
    e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', e => {
    // Al ser una aplicació d'una sola pàgina sense complexitat de servidors,
    // fem que qualsevol crida que falli per manca de xarxa busqui l'arxiu a la memòria.
    e.respondWith(
        fetch(e.request).catch(() => {
            return caches.match(e.request);
        })
    );
});
