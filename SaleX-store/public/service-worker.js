if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,a)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const o=e=>i(e,t),r={module:{uri:t},exports:c,require:o};s[t]=Promise.all(n.map((e=>r[e]||o(e)))).then((e=>(a(...e),c)))}}define(["./workbox-c06b064f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/151-7bd7e05d543ae36f.js",revision:"oidfQiF2EOlxMWYG9Qbu-"},{url:"/_next/static/chunks/359-65a4b6d688906e29.js",revision:"oidfQiF2EOlxMWYG9Qbu-"},{url:"/_next/static/chunks/519-d11e7f7b8989675a.js",revision:"oidfQiF2EOlxMWYG9Qbu-"},{url:"/_next/static/chunks/552-152dd79cae1b99fb.js",revision:"oidfQiF2EOlxMWYG9Qbu-"},{url:"/_next/static/chunks/823-b74b670b07142d06.js",revision:"oidfQiF2EOlxMWYG9Qbu-"},{url:"/_next/static/chunks/app/(routes)/cart/page-23b907cd657bfbbf.js",revision:"oidfQiF2EOlxMWYG9Qbu-"},{url:"/_next/static/chunks/app/(routes)/categories/%5BcategoriesId%5D/page-6ba5dd12c5dbfa2d.js",revision:"oidfQiF2EOlxMWYG9Qbu-"},{url:"/_next/static/chunks/app/(routes)/page-07a0f37c3e614138.js",revision:"oidfQiF2EOlxMWYG9Qbu-"},{url:"/_next/static/chunks/app/(routes)/product/%5BproductId%5D/page-8cc4c94318ef4f52.js",revision:"oidfQiF2EOlxMWYG9Qbu-"},{url:"/_next/static/chunks/app/_not-found-a32b24220239205f.js",revision:"oidfQiF2EOlxMWYG9Qbu-"},{url:"/_next/static/chunks/app/layout-5b769e8c63ec9ab3.js",revision:"oidfQiF2EOlxMWYG9Qbu-"},{url:"/_next/static/chunks/fd9d1056-07e799c34b1d5af9.js",revision:"oidfQiF2EOlxMWYG9Qbu-"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"oidfQiF2EOlxMWYG9Qbu-"},{url:"/_next/static/chunks/main-a80b3bcaff652df7.js",revision:"oidfQiF2EOlxMWYG9Qbu-"},{url:"/_next/static/chunks/main-app-83dfff68944fe861.js",revision:"oidfQiF2EOlxMWYG9Qbu-"},{url:"/_next/static/chunks/pages/_app-75f6107b0260711c.js",revision:"oidfQiF2EOlxMWYG9Qbu-"},{url:"/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js",revision:"oidfQiF2EOlxMWYG9Qbu-"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-170c79308870e301.js",revision:"oidfQiF2EOlxMWYG9Qbu-"},{url:"/_next/static/css/03de1adddaec5c83.css",revision:"03de1adddaec5c83"},{url:"/_next/static/media/01af0fc7b4278e65-s.p.woff2",revision:"6fa778aa9ee280df9ff563f3a08b0350"},{url:"/_next/static/media/8cdee4d3ed444abc-s.woff2",revision:"420e1e96628860fae605e46bd196926d"},{url:"/_next/static/oidfQiF2EOlxMWYG9Qbu-/_buildManifest.js",revision:"e0a21c7d7f93d89dce16df0231dc76f2"},{url:"/_next/static/oidfQiF2EOlxMWYG9Qbu-/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/icons/icon-192.png",revision:"5c8249145a734efdbf476538bf457b76"},{url:"/icons/icon-384.png",revision:"a85d67337b61cdf050052a9b546df7b3"},{url:"/icons/icon-512.png",revision:"649935dedc9f8b0774de38d03b5b4c18"},{url:"/manifest.json",revision:"5404bcf2106c88651b06200c8de6ae4d"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/sw.js",revision:"ba3fdd2bdbc7652c6fd09a87d56ba1ae"},{url:"/sw.js.map",revision:"e59358ae5003ea2c597696b987695a75"},{url:"/swe-worker-4da67dda9bc18c53.js",revision:"5a47d90db13bb1309b25bdf7b363570e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:i})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&i&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:i})=>"1"===e.headers.get("RSC")&&i&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
