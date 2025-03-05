// This is the service worker for the Geelong Excavator Hire website
// It caches assets for offline use and faster loading

const CACHE_NAME = 'geelong-excavator-cache-v1';
const RUNTIME_CACHE = 'runtime-cache';

// Resources to pre-cache
const PRECACHE_URLS = [
  '/',
  '/equipment',
  '/about',
  '/contact',
  '/book-now',
  '/service-areas',
  '/images/logo1.webp',
  '/images/logo2.webp',
];

// Install event - pre-cache important resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  const currentCaches = [CACHE_NAME, RUNTIME_CACHE];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return cacheNames.filter((cacheName) => !currentCaches.includes(cacheName));
    }).then((cachesToDelete) => {
      return Promise.all(cachesToDelete.map((cacheToDelete) => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache if available, otherwise fetch from network and cache
self.addEventListener('fetch', (event) => {
  // Skip cross-origin requests
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return caches.open(RUNTIME_CACHE).then((cache) => {
          return fetch(event.request).then((response) => {
            // Cache valid responses
            if (response.status === 200) {
              // Clone the response as it can only be consumed once
              const responseToCache = response.clone();
              
              // Don't cache non-GET requests
              if (event.request.method === 'GET') {
                cache.put(event.request, responseToCache);
              }
            }
            return response;
          });
        });
      })
    );
  }
});

// Handle push notifications (if needed in the future)
self.addEventListener('push', (event) => {
  const title = 'Geelong Excavator Hire';
  const options = {
    body: event.data.text(),
    icon: '/images/logo1.webp',
    badge: '/images/logo2.webp'
  };

  event.waitUntil(self.registration.showNotification(title, options));
});
