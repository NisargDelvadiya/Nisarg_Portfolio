/**
 * Nisarg's Macfolio - High-Performance PWA Service Worker
 * Features Cache-First for static assets, Network-First for HTML navigation,
 * and offline application resilience.
 */

const CACHE_NAME = 'macfolio-cache-v1.2'

// Critical App Shell resources to precache immediately on install
const PRECACHE_RESOURCES = [
  '/',
  '/images/wallpaper.png',
  '/macbook.png',
  '/apple-touch-icon.png',
  '/images/finder.png',
  '/images/safari.png',
  '/images/photos.png',
  '/images/contact.png',
  '/images/terminal.png',
  '/images/apple-notes.svg',
  '/images/translate.svg',
  '/icons/github.svg',
  '/icons/linkedin.svg',
]

// Install Event - Precache critical app shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(PRECACHE_RESOURCES)
      })
      .then(() => self.skipWaiting())
      .catch((err) => {
        console.warn('[ServiceWorker] Precache failed during install:', err)
      })
  )
})

// Activate Event - Clean up stale cache versions
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName)
            }
          })
        )
      })
      .then(() => self.clients.claim())
  )
})

// Fetch Event - Smart Caching Strategy
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET requests and external chrome-extension / google translate live scripts
  if (request.method !== 'GET') return
  if (url.origin !== self.location.origin && !url.hostname.includes('fonts.gstatic.com')) {
    return
  }

  // 1. Navigation requests (HTML pages) -> Network First with Cache Fallback
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone()
            caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone))
          }
          return networkResponse
        })
        .catch(async () => {
          const cachedResponse = await caches.match(request)
          if (cachedResponse) return cachedResponse
          return caches.match('/')
        })
    )
    return
  }

  // 2. Static Assets (Images, Icons, Fonts, CSS, JS chunks) -> Cache First with Network Fallback & Cache Update
  if (
    request.destination === 'image' ||
    request.destination === 'font' ||
    request.destination === 'style' ||
    request.destination === 'script' ||
    url.pathname.startsWith('/images/') ||
    url.pathname.startsWith('/icons/') ||
    url.pathname.startsWith('/_next/static/')
  ) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          // Return cached version immediately, fetch & update in background
          fetch(request)
            .then((networkResponse) => {
              if (networkResponse && networkResponse.status === 200) {
                caches.open(CACHE_NAME).then((cache) => cache.put(request, networkResponse))
              }
            })
            .catch(() => {})
          return cachedResponse
        }

        // Not in cache, fetch from network and cache
        return fetch(request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone()
            caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone))
          }
          return networkResponse
        })
      })
    )
    return
  }

  // 3. Default -> Network fetch with cache fallback
  event.respondWith(
    fetch(request).catch(() => caches.match(request))
  )
})
