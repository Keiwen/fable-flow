if(!self.define){let e,s={};const l=(l,i)=>(l=new URL(l+".js",i).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(i,o)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const u=e=>l(e,n),t={module:{uri:n},exports:r,require:u};s[n]=Promise.all(i.map((e=>t[e]||u(e)))).then((e=>(o(...e),r)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"fable-flow"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/about.494528aa.css",revision:null},{url:"css/app.e4aaed1e.css",revision:null},{url:"img/book-yellow.134fc891.svg",revision:null},{url:"img/caret_down.58046fe5.svg",revision:null},{url:"img/cogs-yellow.ff85b945.svg",revision:null},{url:"img/logo.6444ad9b.png",revision:null},{url:"index.html",revision:"a9e227c350de17fda7140cf36f510e7a"},{url:"js/about.7ca85e8f.js",revision:null},{url:"js/app.937688fa.js",revision:null},{url:"js/chunk-vendors.aa5522b1.js",revision:null},{url:"manifest.json",revision:"7ed0bf1e30c8e90b84732f6860578823"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
