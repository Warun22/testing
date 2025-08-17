const CACHE_NAME = 'v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/css.css',
  '/Favicon/android-icon-192x192.png',
  '/Favicon/android-icon-72x72.png',
  '/Favicon/android-icon-76x76.png',
  '/Favicon/android-icon-114x114.png',
  '/Favicon/android-icon-120x120.png',
  '/Favicon/android-icon-144x144.png',
  '/Favicon/android-icon-152x152.png',
  '/Favicon/android-icon-180x180.png',
  '/Favicon/favicon-32x32.png',
  '/Favicon/favicon-96x96.png',
  '/Favicon/favicon-16x16.png',
  '/Favicon/manifest.json',
  '/Favicon/ms-icon-144x144.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
