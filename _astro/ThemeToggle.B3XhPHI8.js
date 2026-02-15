import{j as d}from"./jsx-runtime.D_zvdyIk.js";import{r as c}from"./index.CRC3r6US.js";/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=(...t)=>t.filter((r,e,o)=>!!r&&r.trim()!==""&&o.indexOf(r)===e).join(" ").trim();/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,e,o)=>o?o.toUpperCase():e.toLowerCase());/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=t=>{const r=x(t);return r.charAt(0).toUpperCase()+r.slice(1)};/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var S={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=t=>{for(const r in t)if(r.startsWith("aria-")||r==="role"||r==="title")return!0;return!1};/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=c.forwardRef(({color:t="currentColor",size:r=24,strokeWidth:e=2,absoluteStrokeWidth:o,className:n="",children:a,iconNode:s,...f},y)=>c.createElement("svg",{ref:y,...S,width:r,height:r,stroke:t,strokeWidth:o?Number(e)*24/Number(r):e,className:g("lucide",n),...!a&&!C(f)&&{"aria-hidden":"true"},...f},[...s.map(([w,b])=>c.createElement(w,b)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=(t,r)=>{const e=c.forwardRef(({className:o,...n},a)=>c.createElement(E,{ref:a,iconNode:r,className:g(`lucide-${v(p(t))}`,`lucide-${t}`,o),...n}));return e.displayName=p(t),e};/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],$=k("moon",j);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],L=k("sun",I);let l=[],i=0;const u=4,N=t=>{let r=[],e={get(){return e.lc||e.listen(()=>{})(),e.value},lc:0,listen(o){return e.lc=r.push(o),()=>{for(let a=i+u;a<l.length;)l[a]===o?l.splice(a,u):a+=u;let n=r.indexOf(o);~n&&(r.splice(n,1),--e.lc||e.off())}},notify(o,n){let a=!l.length;for(let s of r)l.push(s,e.value,o,n);if(a){for(i=0;i<l.length;i+=u)l[i](l[i+1],l[i+2],l[i+3]);l.length=0}},off(){},set(o){let n=e.value;n!==o&&(e.value=o,e.notify(n))},subscribe(o){let n=e.listen(o);return o(e.value),n},value:t};return e};function T(t,r,e){let o=new Set(r).add(void 0);return t.listen((n,a,s)=>{o.has(s)&&e(n,a,s)})}let h=(t,r)=>e=>{t.current!==e&&(t.current=e,r())};function M(t,{keys:r,deps:e=[t,r]}={}){let o=c.useRef();o.current=t.get();let n=c.useCallback(s=>(h(o,s)(t.value),r?.length>0?T(t,r,h(o,s)):t.listen(h(o,s))),e),a=()=>o.current;return c.useSyncExternalStore(n,a,a)}const _=()=>typeof localStorage<"u"&&localStorage.getItem("theme")?localStorage.getItem("theme"):typeof window<"u"&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",m=N(_());function A(){const r=m.get()==="dark"?"light":"dark";if(m.set(r),typeof localStorage<"u"&&localStorage.setItem("theme",r),typeof document<"u"){const e=document.documentElement;r==="dark"?(e.classList.add("dark"),e.style.colorScheme="dark"):(e.classList.remove("dark"),e.style.colorScheme="light")}}const W=()=>{const t=M(m);return d.jsxs("button",{onClick:A,className:`relative inline-flex items-center justify-center w-10 h-10 rounded-lg 
                     bg-slate-200 dark:bg-slate-800 
                     text-slate-800 dark:text-slate-200
                     hover:bg-slate-300 dark:hover:bg-slate-700
                     transition-all duration-300 ease-in-out
                     group overflow-hidden shadow-lg hover:shadow-xl`,"aria-label":`Switch to ${t==="dark"?"light":"dark"} mode`,title:`Switch to ${t==="dark"?"light":"dark"} mode`,children:[d.jsxs("div",{className:"relative w-5 h-5",children:[d.jsx(L,{className:`absolute inset-0 w-5 h-5 transition-all duration-500 
                              ${t==="dark"?"rotate-90 scale-0 opacity-0":"rotate-0 scale-100 opacity-100"}`,strokeWidth:2,"aria-hidden":"true"}),d.jsx($,{className:`absolute inset-0 w-5 h-5 transition-all duration-500
                              ${t==="dark"?"rotate-0 scale-100 opacity-100":"-rotate-90 scale-0 opacity-0"}`,strokeWidth:2,"aria-hidden":"true"})]}),d.jsx("span",{className:`absolute inset-0 rounded-lg bg-gradient-to-r from-amber-400 to-orange-400 
                           dark:from-blue-400 dark:to-purple-400 opacity-0 group-hover:opacity-20 
                           transition-opacity duration-300`})]})};export{W as ThemeToggle};
