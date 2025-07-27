const CACHE_NAME = 'autometa-v1.0.0';
const urlsToCache = [
  '/',
  '/manifest.json',
  '/lovable-uploads/app-icon-192.png',
  '/lovable-uploads/app-icon-512.png',
  // Add other important assets here
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Background sync for offline message saving
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(syncMessages());
  }
});

async function syncMessages() {
  // Handle offline message syncing here
  console.log('Syncing messages...');
}

// Push notifications
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'नया कॉल संदेश प्राप्त हुआ!',
    icon: '/lovable-uploads/app-icon-192.png',
    badge: '/lovable-uploads/app-icon-192.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore', 
        title: 'संदेश देखें',
        icon: '/lovable-uploads/app-icon-192.png'
      },
      {
        action: 'close', 
        title: 'बंद करें'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Autometa - कॉल असिस्टेंट', options)
  );
});

// Notification click
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/?view=messages')
    );
  } else {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});