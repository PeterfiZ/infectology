const CACHE_NAME = 'infectologia-tankonyv-v1';
const urlsToCache = [
  '/',
  'index.html',
  'print.html',
  'Thorax.js',
  'abdomen.js',
  'BoneandSST.js',
  'CNS.js',
  'STD.js',
  'parazita.js',
  'zoonozis.js',
  'systemic.js',
  'tropical.js',
  'emerging.js',
  'childhood.js',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/maskable_icon_x512.png'
  // A CDN-ről betöltött erőforrások (pl. betűtípusok) a böngésző által kerülnek gyorsítótárazásra.
  // A teljes offline élményhez ezeket helyben kellene tárolni.
];

// Service worker telepítése
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache megnyitva');
        return cache.addAll(urlsToCache);
      })
  );
});

// Kérések kezelése: cache-ből vagy hálózatról
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

// Régi cache-ek törlése aktiváláskor
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => Promise.all(
      cacheNames.map(cacheName => (cacheWhitelist.indexOf(cacheName) === -1) ? caches.delete(cacheName) : null)
    ))
  );
});