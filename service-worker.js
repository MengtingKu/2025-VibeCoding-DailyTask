self.addEventListener('install', () => {
  console.log('SW installed');
  self.skipWaiting();
});

self.addEventListener('activate', () => {
  console.log('SW activated');
  clients.claim();
});

// 基本快取策略：可離線瀏覽（Cache First）
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open('dog-age-cache').then(async cache => {
      const cached = await cache.match(event.request);
      if (cached) return cached;

      try {
        const fetched = await fetch(event.request);
        cache.put(event.request, fetched.clone());

        return fetched;
      } catch (err) {
        console.error('Fetch failed:', err);

        return cached || Response.error();
      }
    })
  );
});
