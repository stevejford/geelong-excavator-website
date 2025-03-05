// This is a fallback service worker that does nothing
// It's used when the main service worker is not found
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});

console.log('Fallback service worker loaded');
