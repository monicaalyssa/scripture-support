if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let o={};const t=e=>n(e,c),d={module:{uri:c},exports:o,require:t};i[c]=Promise.all(s.map((e=>d[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-ahO8c9JL.js",revision:null},{url:"assets/index-O-07wM-p.css",revision:null},{url:"index.html",revision:"97c71039504379ad3e4363e75f713ece"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"favicon.png",revision:"914147b9628e4d5d03eb8a12b9e24e15"},{url:"favicon180.png",revision:"d7741b51c205bee98ddc578c36609dea"},{url:"favicon192.png",revision:"b45aeab9a0ecbe243ddeb52a2c2dc7cf"},{url:"favicon512.png",revision:"0179ca53f25cc1ddbd715f326befa4cc"},{url:"manifest.webmanifest",revision:"8a4f08bf6e26a39f2c9cc073e5e18284"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
