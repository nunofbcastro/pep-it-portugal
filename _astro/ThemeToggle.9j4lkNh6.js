import{j as d}from"./jsx-runtime.D_zvdyIk.js";import{r as c}from"./index.CRC3r6US.js";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),f=(...t)=>t.filter((r,e,a)=>!!r&&r.trim()!==""&&a.indexOf(r)===e).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var v={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=c.forwardRef(({color:t="currentColor",size:r=24,strokeWidth:e=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:i,...g},k)=>c.createElement("svg",{ref:k,...v,width:r,height:r,stroke:t,strokeWidth:a?Number(e)*24/Number(r):e,className:f("lucide",n),...g},[...i.map(([y,w])=>c.createElement(y,w)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=(t,r)=>{const e=c.forwardRef(({className:a,...n},o)=>c.createElement(x,{ref:o,iconNode:r,className:f(`lucide-${b(t)}`,a),...n}));return e.displayName=`${t}`,e};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=p("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=p("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);let l=[],s=0;const u=4,j=t=>{let r=[],e={get(){return e.lc||e.listen(()=>{})(),e.value},lc:0,listen(a){return e.lc=r.push(a),()=>{for(let o=s+u;o<l.length;)l[o]===a?l.splice(o,u):o+=u;let n=r.indexOf(a);~n&&(r.splice(n,1),--e.lc||e.off())}},notify(a,n){let o=!l.length;for(let i of r)l.push(i,e.value,a,n);if(o){for(s=0;s<l.length;s+=u)l[s](l[s+1],l[s+2],l[s+3]);l.length=0}},off(){},set(a){let n=e.value;n!==a&&(e.value=a,e.notify(n))},subscribe(a){let n=e.listen(a);return a(e.value),n},value:t};return e};function I(t,r,e){let a=new Set(r).add(void 0);return t.listen((n,o,i)=>{a.has(i)&&e(n,o,i)})}let h=(t,r)=>e=>{t.current!==e&&(t.current=e,r())};function M(t,{keys:r,deps:e=[t,r]}={}){let a=c.useRef();a.current=t.get();let n=c.useCallback(i=>(h(a,i)(t.value),r?.length>0?I(t,r,h(a,i)):t.listen(h(a,i))),e),o=()=>a.current;return c.useSyncExternalStore(n,o,o)}const T=()=>typeof localStorage<"u"&&localStorage.getItem("theme")?localStorage.getItem("theme"):(typeof window<"u"&&window.matchMedia("(prefers-color-scheme: dark)").matches,"dark"),m=j(T());function $(){const r=m.get()==="dark"?"light":"dark";if(m.set(r),typeof localStorage<"u"&&localStorage.setItem("theme",r),typeof document<"u"){const e=document.documentElement;r==="dark"?e.classList.add("dark"):e.classList.remove("dark")}}const C=()=>{const t=M(m);return d.jsxs("button",{onClick:$,className:`relative inline-flex items-center justify-center w-10 h-10 rounded-lg 
                     bg-slate-200 dark:bg-slate-800 
                     text-slate-800 dark:text-slate-200
                     hover:bg-slate-300 dark:hover:bg-slate-700
                     transition-all duration-300 ease-in-out
                     group overflow-hidden shadow-lg hover:shadow-xl`,"aria-label":`Switch to ${t==="dark"?"light":"dark"} mode`,title:`Switch to ${t==="dark"?"light":"dark"} mode`,children:[d.jsxs("div",{className:"relative w-5 h-5",children:[d.jsx(E,{className:`absolute inset-0 w-5 h-5 transition-all duration-500 
                              ${t==="dark"?"rotate-90 scale-0 opacity-0":"rotate-0 scale-100 opacity-100"}`,strokeWidth:2,"aria-hidden":"true"}),d.jsx(S,{className:`absolute inset-0 w-5 h-5 transition-all duration-500
                              ${t==="dark"?"rotate-0 scale-100 opacity-100":"-rotate-90 scale-0 opacity-0"}`,strokeWidth:2,"aria-hidden":"true"})]}),d.jsx("span",{className:`absolute inset-0 rounded-lg bg-gradient-to-r from-amber-400 to-orange-400 
                           dark:from-blue-400 dark:to-purple-400 opacity-0 group-hover:opacity-20 
                           transition-opacity duration-300`})]})};export{C as ThemeToggle};
