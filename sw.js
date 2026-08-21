const C='zshs0-v02-iphone1';
const SHELL=['./','./index.html','./manifest.webmanifest'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(SHELL)))});
self.addEventListener('activate',e=>e.waitUntil(Promise.all([self.clients.claim(),caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==C).map(k=>caches.delete(k))))])));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  if(e.request.mode==='navigate'){
    e.respondWith(caches.match('./index.html').then(cached=>{
      const fresh=fetch(e.request).then(r=>{if(r.ok)caches.open(C).then(c=>c.put('./index.html',r.clone()));return r}).catch(()=>cached);
      return cached||fresh;
    }));
    return;
  }
  e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request)));
});
