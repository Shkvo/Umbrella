"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/Umbrella/index.html","54ce06666dd6ec9904c72af077e5e967"],["/Umbrella/static/css/main.1e030a67.css","4a4245b929397c03830b89cf03ba244e"],["/Umbrella/static/js/main.f9bde802.js","120b072f3aa30dc109f3f2695c7ce4f9"],["/Umbrella/static/media/Umbrella.bb3a5e73.svg","bb3a5e733b17bc3004b2a4bf0b223498"],["/Umbrella/static/media/cloud-sun.1302207e.svg","1302207eb78f999c87d89aad3b39106b"],["/Umbrella/static/media/clouds.5939769b.svg","5939769b273238eeb082bb6f341c5e15"],["/Umbrella/static/media/f.b0ce1bdd.svg","b0ce1bddfbcc4fc4fdcbbc61e01598f9"],["/Umbrella/static/media/fog.bac58a53.svg","bac58a53d1feee771d35464535962a97"],["/Umbrella/static/media/g+.94f41a56.svg","94f41a56cc59e43465586194c9c0e1b5"],["/Umbrella/static/media/in.8560498e.svg","8560498e7688ccce3b2eb316c997bff2"],["/Umbrella/static/media/rain.df82e796.svg","df82e79664e85e4cfaa332a0fd1e347f"],["/Umbrella/static/media/sun.5c678039.svg","5c678039c9e4cffff72190fa450269c8"],["/Umbrella/static/media/vk.c2fd9be8.svg","c2fd9be837b7bca85160731af98265e6"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/Umbrella/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});