import{j as r}from"./jsx-runtime.DhNDwAgn.js";import{r as l}from"./index.CBFZI7UH.js";import{F as E}from"./cvModel.GgmbwPmA.js";import{u as T}from"./useReveal.CqETIhiy.js";const P=p=>{const[c,o]=l.useState(!1);return l.useEffect(()=>{const a=window.matchMedia(p);o(a.matches);const g=n=>o(n.matches);return a.addEventListener("change",g),()=>a.removeEventListener("change",g)},[p]),c};function A({id:p,eyebrow:c,title:o,children:a}){const[g,n]=T(),s=P("(max-width: 768px)"),u=P("(max-width: 1024px)");return r.jsxs("section",{id:"aurora-"+p,ref:g,style:{padding:s?"60px 20px":u?"80px 32px":"120px 48px",maxWidth:1400,margin:"0 auto",position:"relative",zIndex:2,opacity:n?1:0,transform:n?"translateY(0)":"translateY(40px)",transition:"opacity 800ms, transform 800ms"},children:[r.jsx("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:s?10:12,letterSpacing:"0.2em",color:"oklch(75% 0.14 280)",marginBottom:16},children:c}),r.jsx("h2",{style:{fontFamily:"'Instrument Serif', serif",fontSize:"clamp(32px, 6vw, 64px)",lineHeight:1,letterSpacing:"-0.02em",margin:"0 0 48px",fontWeight:400},children:o}),a]})}const N=(p,c,o)=>{let a=((p-c)%o+o)%o;return a>o/2&&(a-=o),a};function I({p,i:c,n:o,active:a,onTilt:g}){const n=l.useRef(null),s=x=>{if(!a||!g||x.pointerType!=="mouse"||!n.current)return;const f=n.current.getBoundingClientRect(),v=(x.clientX-f.left)/f.width,b=(x.clientY-f.top)/f.height;n.current.style.setProperty("--rx",`${(.5-b)*10}deg`),n.current.style.setProperty("--ry",`${(v-.5)*14}deg`),n.current.style.setProperty("--gx",`${v*100}%`),n.current.style.setProperty("--gy",`${b*100}%`),n.current.dataset.tilt="on"},u=()=>{n.current&&(n.current.style.setProperty("--rx","0deg"),n.current.style.setProperty("--ry","0deg"),n.current.dataset.tilt="")};return r.jsxs("div",{ref:n,className:"pc-card",onPointerMove:s,onPointerLeave:u,children:[r.jsx("div",{className:"pc-glare"}),r.jsxs("div",{className:"pc-index",children:[String(c+1).padStart(2,"0")," / ",String(o).padStart(2,"0")]}),r.jsx("div",{className:"pc-kind",children:p.kind}),r.jsx("h3",{className:"pc-title",children:p.title}),r.jsx("p",{className:"pc-blurb",children:p.blurb}),r.jsx("div",{className:"pc-tags",children:p.tags.map(x=>r.jsx("span",{children:x},x))})]})}function D({data:p}){const c=P("(max-width: 768px)"),o=p.projects,a=o.length,[g,n]=l.useState(0),s=l.useRef(0),u=l.useRef(0),x=l.useRef(0),f=l.useRef(null),v=l.useRef(null),b=l.useRef(!1),[S,R]=l.useState(520);l.useEffect(()=>{const t=v.current;if(!t)return;const e=new ResizeObserver(()=>R(Math.min(560,t.clientWidth*(c?.84:.5))));return e.observe(t),()=>e.disconnect()},[c]);const w=()=>{cancelAnimationFrame(x.current);const t=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let e=0;const d=()=>{const i=u.current-s.current;e=t?i:(e+i*.08)*.72,s.current+=e,Math.abs(i)<5e-4&&Math.abs(e)<5e-4&&(s.current=u.current),n(s.current),s.current!==u.current&&(x.current=requestAnimationFrame(d))};x.current=requestAnimationFrame(d)},j=t=>{u.current=s.current+N(t,s.current,a),w()},y=t=>{u.current=Math.round(u.current)+t,w()},k=(Math.round(g)%a+a)%a;l.useEffect(()=>{const t=i=>{const h=o.findIndex(m=>m.title===i);h>=0&&j(h)},e=i=>t(i.detail);window.addEventListener(E,e);const d=window;return d.__cvFocusProject&&(t(d.__cvFocusProject),d.__cvFocusProject=void 0),()=>{window.removeEventListener(E,e),cancelAnimationFrame(x.current)}},[o]);const z=S*(c?.9:.62),C=t=>{t.button===0&&(cancelAnimationFrame(x.current),f.current={x:t.clientX,y:t.clientY,start:s.current,moved:!1,axis:null,t:performance.now(),v:0})},F=t=>{const e=f.current;if(!e)return;const d=t.clientX-e.x,i=t.clientY-e.y;if(!e.axis){if(Math.hypot(d,i)<6)return;e.axis=Math.abs(d)>Math.abs(i)?"x":"y",e.axis==="x"&&t.currentTarget.setPointerCapture(t.pointerId)}if(e.axis!=="x")return;e.moved=!0;const h=performance.now(),m=e.start-d/z;e.v=(m-s.current)/Math.max(1,h-e.t),e.t=h,s.current=m,u.current=m,n(m)},M=()=>{const t=f.current;if(f.current=null,!t||!t.moved)return;b.current=!0,setTimeout(()=>b.current=!1,0);const e=Math.max(-1,Math.min(1,t.v*180));u.current=Math.round(s.current+e),w()};return r.jsxs(A,{id:"projects",eyebrow:"◇ 04 / SELECTED WORK",title:"Things I've shipped.",children:[r.jsx("div",{ref:v,className:"pc-stage",role:"region","aria-roledescription":"carousel","aria-label":"Selected projects",tabIndex:0,onKeyDown:t=>{t.key==="ArrowRight"&&y(1),t.key==="ArrowLeft"&&y(-1)},onPointerDown:C,onPointerMove:F,onPointerUp:M,onPointerCancel:M,onLostPointerCapture:M,children:r.jsx("div",{className:"pc-track",children:o.map((t,e)=>{const d=N(e,g,a),i=Math.abs(d),h=Math.max(-2.2,Math.min(2.2,d)),m=e===k;return r.jsx("div",{className:"pc-slot"+(m?" is-active":""),"aria-hidden":!m,onClick:()=>!m&&!b.current&&j(e),style:{width:S,transform:`translateX(${h*z}px) translateZ(${-i*(c?120:220)}px) rotateY(${-h*(c?18:32)}deg)`,zIndex:100-Math.round(i*10),opacity:Math.max(0,1-Math.max(0,i-1.2)*1.2),filter:`brightness(${1-Math.min(i,1.5)*.35})`,pointerEvents:i>1.6?"none":"auto"},children:r.jsx(I,{p:t,i:e,n:a,active:m,onTilt:!c})},t.title)})})}),r.jsxs("div",{className:"pc-controls",children:[r.jsx("button",{type:"button",onClick:()=>y(-1),"aria-label":"Previous project",children:"←"}),r.jsx("div",{className:"pc-dots",children:o.map((t,e)=>r.jsx("button",{type:"button",className:e===k?"is-on":"",onClick:()=>j(e),"aria-label":`Show ${t.title}`,"aria-current":e===k},t.title))}),r.jsx("button",{type:"button",onClick:()=>y(1),"aria-label":"Next project",children:"→"})]}),r.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .pc-stage {
          position: relative; overflow-x: clip; padding: 24px 0 8px;
          touch-action: pan-y; user-select: none; cursor: grab; outline: none;
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent);
          mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent);
        }
        .pc-stage:active { cursor: grabbing; }
        .pc-stage:focus-visible { box-shadow: inset 0 0 0 1px oklch(75% 0.14 280 / 0.6); border-radius: 20px; }
        /* No preserve-3d: slots are painted by z-index, so rotated side cards never intersect the front card. */
        .pc-track { display: grid; justify-items: center; perspective: 1600px; }
        .pc-slot { grid-area: 1 / 1; will-change: transform; }
        .pc-slot:not(.is-active) { cursor: pointer; }
        .pc-card {
          --rx: 0deg; --ry: 0deg; --gx: 50%; --gy: 0%;
          position: relative; height: 100%; box-sizing: border-box; padding: 32px; border-radius: 22px; overflow: hidden;
          background: linear-gradient(160deg, rgb(30,32,48), rgb(12,13,20));
          border: 1px solid rgba(255,255,255,0.09);
          box-shadow: 0 30px 60px -20px rgba(0,0,0,0.6);
          transform: perspective(1200px) rotateX(var(--rx)) rotateY(var(--ry));
          transition: transform 500ms cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .pc-card[data-tilt="on"] { transition: transform 80ms linear; }
        .pc-glare {
          position: absolute; inset: 0; pointer-events: none; opacity: 0; transition: opacity 300ms;
          background: radial-gradient(circle at var(--gx) var(--gy), rgba(255,255,255,0.14), transparent 55%),
                      radial-gradient(circle at 80% 0%, oklch(55% 0.18 280 / 0.3), transparent 60%);
        }
        .is-active .pc-glare { opacity: 1; }
        .pc-index { position: absolute; top: 28px; right: 28px; font: 11px 'JetBrains Mono', monospace; color: rgba(232,230,224,0.35); }
        .pc-kind { position: relative; font: 11px 'JetBrains Mono', monospace; letter-spacing: .1em; text-transform: uppercase; color: oklch(75% 0.14 280); margin: 0 60px 16px 0; }
        .pc-title { position: relative; font: 400 clamp(26px, 3vw, 34px)/1.1 'Instrument Serif', serif; letter-spacing: -0.02em; margin: 0 0 14px; }
        .pc-blurb { position: relative; font-size: 14px; line-height: 1.6; color: rgba(232,230,224,0.72); margin: 0 0 20px; }
        .pc-tags { position: relative; display: flex; flex-wrap: wrap; gap: 6px; }
        .pc-tags span { padding: 4px 10px; border-radius: 999px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); font-size: 12px; color: rgba(232,230,224,0.75); }
        .pc-controls { display: flex; justify-content: center; align-items: center; gap: 20px; margin-top: 28px; }
        .pc-controls > button {
          width: 44px; height: 44px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.04); color: #e8e6e0; font-size: 16px; cursor: pointer; transition: background 200ms, transform 200ms;
        }
        .pc-controls > button:hover { background: rgba(255,255,255,0.1); transform: scale(1.06); }
        .pc-dots { display: flex; gap: 8px; }
        .pc-dots button { width: 8px; height: 8px; padding: 0; border-radius: 999px; border: 0; background: rgba(255,255,255,0.2); cursor: pointer; transition: width 300ms, background 300ms; }
        .pc-dots button.is-on { width: 28px; background: oklch(75% 0.14 280); }
        @media (max-width: 768px) {
          .pc-stage { -webkit-mask-image: none; mask-image: none; }
          .pc-card { padding: 22px; border-radius: 16px; }
          .pc-index { top: 20px; right: 20px; font-size: 10px; }
          .pc-kind { font-size: 10px; margin-bottom: 12px; }
          .pc-title { font-size: 24px; }
          .pc-blurb { font-size: 13px; }
          .pc-tags span { font-size: 11px; padding: 3px 8px; }
        }
      `}})]})}export{D as AuroraProjects};
