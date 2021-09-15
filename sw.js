const VERSION = 'v1'
self.addEventListener('install', event =>{
  event.waitUntil(precache()) 
})

self.addEventListener('fetch', event => {
  const request = event.request;

  if (request.method != "GET"){
    return;
  }

  event.respondWith(cachedResponse(request))

  event.waitUntil(updateCache(request))
})



async function precache(){ //retorna una promesa por ese pone async
    const cache = await caches.open(VERSION)
    return cache.addAll([
        '/9_Service_Wokers_Trabajo_Offline/',
        '/9_Service_Wokers_Trabajo_Offline/index.html',
        '/9_Service_Wokers_Trabajo_Offline/assets/index.js',
        '/9_Service_Wokers_Trabajo_Offline/assets/MediaPlayer.js',
        '/9_Service_Wokers_Trabajo_Offline/plugins/AutoPlay.js',
        '/9_Service_Wokers_Trabajo_Offline/plugins/AutoPause.js',
        '/9_Service_Wokers_Trabajo_Offline/assets/index.css',
        '/9_Service_Wokers_Trabajo_Offline/assets/BigBuckBunny.mp4',
    ])
}

async function cachedResponse(request) {
  const cache = await caches.open(VERSION)
  const response = await cache.match(request)
  return response || fetch(request)
}

async function updateCache(request) {
  const cache = await caches.open(VERSION)
  const response = await fetch(request)
  return cache.put(request, response)
}