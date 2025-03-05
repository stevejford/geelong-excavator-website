// This is an intentionally minimal service worker file to prevent 404 errors
// while not adding any actual service worker functionality

// Self reference
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Return empty for fetch requests to avoid interfering with normal operation
self.addEventListener('fetch', (event) => {
  // Let the browser handle all requests normally
  return;
});
