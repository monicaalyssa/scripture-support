if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const t=e=>n(e,o),d={module:{uri:o},exports:c,require:t};i[o]=Promise.all(s.map((e=>d[e]||t(e)))).then((e=>(r(...e),c)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BWR5Sb0e.js",revision:null},{url:"assets/index-O-07wM-p.css",revision:null},{url:"index.html",revision:"e9e371336a896779ad9e89ca7e973767"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"favicon.png",revision:"914147b9628e4d5d03eb8a12b9e24e15"},{url:"favicon180.png",revision:"d7741b51c205bee98ddc578c36609dea"},{url:"favicon192.png",revision:"b45aeab9a0ecbe243ddeb52a2c2dc7cf"},{url:"favicon512.png",revision:"f3fe2b375ec6add8ce4de6e4acce1215"},{url:"manifest.webmanifest",revision:"441aa00e967e73360c87e3f8dd1a2b1b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));