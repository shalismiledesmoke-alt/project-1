self.addEventListener("install",e=>{e.waitUntil(caches.open("v1").then(c=>c.addAll(["/project-1/","/project-1/index.html","/project-1/icon.png"])))});
self.addEventListener("fetch",e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
