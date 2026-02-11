const CACHE_NAME = 'infectologia-tankonyv-v2';
const urlsToCache = [
  '/',
  'index.html',
  'print.html',
  'scores.js',
  'metadata.js',
  // HU
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
  // EN
  'Thorax_en.js',
  'abdomen_en.js',
  'BoneandSST_en.js',
  'CNS_en.js',
  'STD_en.js',
  'parazita_en.js',
  'zoonozis_en.js',
  'systemic_en.js',
  'tropical_en.js',
  'emerging_en.js',
  'childhood_en.js',
  // DE
  'thorax_de.js',
  'abdomen_de.js',
  'BoneandSST_de.js',
  'CNS_de.js',
  'STD_de.js',
  'parazita_de.js',
  'zoonozis_de.js',
  'systemic_de.js',
  'tropical_de.js',
  'emerging_de.js',
  'childhood_de.js',
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