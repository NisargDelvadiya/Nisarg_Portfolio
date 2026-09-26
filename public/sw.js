const CACHE_NAME = "nisarg-portfolio-pwa-v1";

const CORE_ASSETS = [
  "/",
  "/manifest.json",
  "/favicon/site.webmanifest",
  "/favicon/favicon.ico",
  "/favicon/favicon.svg",
  "/favicon/favicon-96x96.png",
  "/favicon/apple-touch-icon.png",
  "/favicon/web-app-manifest-192x192.png",
  "/favicon/web-app-manifest-512x512.png",
  "/Assets/Iron_Man.png?v=clean-v1",
  "/Assets/Iron_Man_Mask.png",
  "/Assets/1.jpg",
  "/Assets/2.jpg",
  "/Assets/Duo_Brothers.png",
  "/Assets/Manipal_University_Jaipur.jpg"
];

// Install Event - Pre-cache core shell assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CORE_ASSETS).catch((err) => {
        console.warn("PWA ServiceWorker: Non-critical pre-cache warning:", err);
      });
    })
  );
  self.skipWaiting();
});

// Activate Event - Clean up stale caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch Event - Network First with Cache Fallback for HTML, Stale-While-Revalidate for Assets
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  // Ignore cross-origin requests like Google Translate or Vercel Analytics
  if (!event.request.url.startsWith(self.location.origin)) return;

  // Avoid caching Next.js development hot-reloading chunks
  if (event.request.url.includes("/_next/webpack-hmr") || event.request.url.includes(".hot-update.")) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          if (
            networkResponse &&
            networkResponse.status === 200 &&
            networkResponse.type === "basic"
          ) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          return cachedResponse;
        });

      return cachedResponse || fetchPromise;
    })
  );
});
