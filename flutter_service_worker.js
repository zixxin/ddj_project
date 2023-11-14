'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "60b6c03a8ff6f3cf41882057070040d9",
"favicon.ico": "b8498b02cc0857bf522aa517e8bf1a62",
"index.html": "ca5060ead844304bfc51cbdd16e21d95",
"/": "ca5060ead844304bfc51cbdd16e21d95",
"main.dart.js": "01219f41837496220485c093e5251b79",
"flutter.js": "7a1d76a8729d1add7a6ce2a4b4db043f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1e133a2bc38bb7872aa0bc568dabaa7f",
"assets/images/brands.png": "0e80f8ca8ffb4a2d9582a23691d7b1a3",
"assets/images/%25EA%25B3%25A0%25EB%258F%2584%25EB%25A6%25AC%25EB%2582%25B4%25EB%25B6%2580.JPG": "a2685080746a31583f455b43d302aa72",
"assets/images/%25EA%25B3%25A0%25EB%258F%2584%25EB%25A6%25AC.png": "3996bd31c70c2a5463ad1cd3d32118a5",
"assets/images/%25ED%2599%25A9%25EB%2582%25A8%25EC%2583%258C%25EB%2593%259C%25EC%25A0%2584%25EA%25B2%25BD.JPG": "eb1b8bd8cea828d2b6c62f6edfdbcceb",
"assets/images/ci.png": "c125a96ae5e4f99a9fa7fdfaf52b764e",
"assets/images/%25ED%2599%25A9%25EB%2582%25A8%25EC%259A%25B0%25EC%2597%2589%25EA%25B9%2580%25EB%25B0%25A5%25EB%2582%25B4%25EB%25B6%2580.JPG": "028ed2592a79b053ecf487ba7c78ae15",
"assets/images/%25EC%2595%25BD%25EA%25B3%25BC%25EB%25B0%25A9%25EB%2582%25B4%25EB%25B6%2580.JPG": "ee882333813d87fe889a4bf44b39de49",
"assets/images/%25ED%2596%25A5%25ED%2599%2594%25EC%25A0%2595.png": "4c7a4d7e13fb9006c4d70475d642c250",
"assets/images/%25EC%2595%25BD%25EA%25B3%25BC%25EB%25B0%25A9.png": "27990fb480af5fc404e1333cac23317e",
"assets/images/%25ED%2599%25A9%25EB%2582%25A8%25EC%2583%258C%25EB%2593%259C.png": "7a3bf1974d20a35f2e6577c7f30733e8",
"assets/images/%25EC%2597%25AC%25EB%258F%2584%25EA%25B0%2580%25EC%25A3%25BC.png": "dd619b747655ee3320ba95b7a5ef5d60",
"assets/images/background.png": "aabaf9f5de13960717dfab2089a1fa28",
"assets/images/%25EC%2598%25AC%25EB%25A6%25AC%25EB%25B8%258C.png": "a5cba27f227ee4947fe3f76d1523ab2d",
"assets/images/%25ED%2599%25A9%25EB%2582%25A8%25EC%259A%25B0%25EC%2597%2589%25EA%25B9%2580%25EB%25B0%25A5%25EC%25B9%25B4%25EC%259A%25B4%25ED%2584%25B0.JPG": "50fbcdd4d8abcccd9e1f06e053cb2d48",
"assets/images/logo.png": "a290cec8fb5604e5a69d39632fca1864",
"assets/images/%25EB%2591%2590%25EB%258D%2594%25EC%25A7%2580%25EA%25B0%2595%25EC%25A0%2595.png": "619cd8de79bbe38bc210d95d17f0e511",
"assets/images/%25EC%2598%25AC%25EB%25A6%25AC%25EB%25B8%258C%25EB%25B9%25B5.JPG": "a172eb8cc75b3e84212b64da4c04c894",
"assets/images/%25EC%2598%25AC%25EB%25A6%25AC%25EB%25B8%258C%25EB%2582%25B4%25EB%25B6%2580.JPG": "ac1aa60e390574907c5d329e9dd3aee6",
"assets/images/%25EC%2598%25AC%25EB%25A6%25AC%25EB%25B8%258C%25EC%25A0%2584%25EA%25B2%25BD.JPG": "89f1cbbd6e927941a5e31d39b40beecd",
"assets/images/%25ED%2599%25A9%25EB%2582%25A8%25EC%259A%25B0%25EC%2597%2589%25EA%25B9%2580%25EB%25B0%25A5.png": "e5ca066782af31a602f82c6997949292",
"assets/AssetManifest.json": "dfd47616523810964efe5e91693050a2",
"assets/NOTICES": "68fc78eb634a8674380a0ee999a16224",
"assets/FontManifest.json": "df52316757dfbbad782254e4965cf719",
"assets/AssetManifest.bin.json": "d07be87a7fb56df36d6d44cf5368b24b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "5fe904d3037024a61c7cec7ac4879fb6",
"assets/fonts/NanumMyeongjoExtraBold.ttf": "4c39e835843ac2e9705191a744ef14d9",
"assets/fonts/Judson-Bold.ttf": "77189d71bcde36d26ed87ead695dc527",
"assets/fonts/Judson-Regular.ttf": "70762dd14b4537fa798d95f3f06badaf",
"assets/fonts/NanumMyeongjo.ttf": "1aa12547eb8033768957dd3e2de65889",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/fonts/NanumMyeongjoBold.ttf": "9b7e14d37bbe330c35000430450b8f1c",
"assets/fonts/Judson-Italic.ttf": "00afd8f7f3610fcd5a4b98086a807d5b",
"canvaskit/skwasm.js": "411f776c9a5204d1e466141767f5a8fa",
"canvaskit/skwasm.js.symbols": "9f92a7410d7e7817623df1b44f7dd034",
"canvaskit/canvaskit.js.symbols": "15066d786d0fefb6bf6b07e90a54b72f",
"canvaskit/skwasm.wasm": "54112cfd3a0dd75501454de6387e601d",
"canvaskit/chromium/canvaskit.js.symbols": "aa827903660a477d251e8dba03b59a8a",
"canvaskit/chromium/canvaskit.js": "bc979fce6b4b3cc75d54b0d162cafaa7",
"canvaskit/chromium/canvaskit.wasm": "9f249d9e9f2586da273d99ff33356f6c",
"canvaskit/canvaskit.js": "321aa0c874f6112cabafc27a74a784b4",
"canvaskit/canvaskit.wasm": "209e2935b87cb67108a2383327092c8b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
