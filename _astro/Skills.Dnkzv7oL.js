import{j as t}from"./jsx-runtime.DhNDwAgn.js";import{r as x}from"./index.CBFZI7UH.js";import{G as g}from"./cvModel.GgmbwPmA.js";import{u as h}from"./useReveal.CqETIhiy.js";const m=o=>{const[s,r]=x.useState(!1);return x.useEffect(()=>{const e=window.matchMedia(o);r(e.matches);const a=p=>r(p.matches);return e.addEventListener("change",a),()=>e.removeEventListener("change",a)},[o]),s};function u({id:o,eyebrow:s,title:r,children:e}){const[a,p]=h(),c=m("(max-width: 768px)"),d=m("(max-width: 1024px)");return t.jsxs("section",{id:"aurora-"+o,ref:a,style:{padding:c?"60px 20px":d?"80px 32px":"120px 48px",maxWidth:1400,margin:"0 auto",position:"relative",zIndex:2,opacity:p?1:0,transform:p?"translateY(0)":"translateY(40px)",transition:"opacity 800ms, transform 800ms"},children:[t.jsx("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:c?10:12,letterSpacing:"0.2em",color:"oklch(75% 0.14 280)",marginBottom:16},children:s}),t.jsx("h2",{style:{fontFamily:"'Instrument Serif', serif",fontSize:"clamp(32px, 6vw, 64px)",lineHeight:1,letterSpacing:"-0.02em",margin:"0 0 48px",fontWeight:400},children:r}),e]})}const k=o=>g[o]??250;function b(o,s){const r=o.map(a=>s>1&&a>6?2:1);let e=0;for(let a=0;a<r.length;a++)e+r[a]>s&&(r[a-1]+=s-e,e=0),e+=r[a],e===s&&(e=0);return e&&(r[r.length-1]+=s-e),r}function v({cat:o,skills:s,span:r,cardRef:e}){const[a,p]=h(),c=m("(max-width: 768px)"),d=k(o),i=Math.round(s.reduce((n,l)=>n+l.v,0)/s.length);return t.jsxs("div",{ref:n=>{a.current=n,e(n)},className:"sk-card",style:{gridColumn:`span ${r}`,padding:c?20:28,borderRadius:c?14:20,"--h":d},children:[t.jsxs("div",{className:"sk-head",children:[t.jsx("span",{className:"sk-cat",children:o}),t.jsxs("span",{className:"sk-meta",children:[s.length," · ⌀ ",i]})]}),t.jsx("div",{className:"sk-list",style:{gridTemplateColumns:r>1&&!c?"repeat(2, 1fr)":"1fr"},children:s.map((n,l)=>t.jsxs("div",{className:"sk-row",children:[t.jsxs("div",{className:"sk-row-top",children:[t.jsx("span",{children:n.n}),t.jsx("span",{className:"sk-val",children:n.v})]}),t.jsx("div",{className:"sk-track",children:t.jsx("div",{className:"sk-bar",style:{width:p?`${n.v}%`:"0%",transition:`width 1200ms cubic-bezier(0.2, 0.8, 0.2, 1) ${l*80+200}ms`}})})]},n.n))})]})}function M({data:o}){const s=m("(max-width: 768px)"),r=m("(max-width: 1024px)"),e=s?1:r?2:3,a=Object.entries(o.skills),p=b(a.map(([,i])=>i.length),e),c=x.useRef([]),d=i=>{if(i.pointerType==="mouse")for(const n of c.current){if(!n)continue;const l=n.getBoundingClientRect();n.style.setProperty("--mx",`${i.clientX-l.left}px`),n.style.setProperty("--my",`${i.clientY-l.top}px`)}};return t.jsxs(u,{id:"skills",eyebrow:"◇ 03 / SKILLS",title:"Tools of the trade.",children:[t.jsx("div",{className:"sk-grid",onPointerMove:d,style:{gridTemplateColumns:`repeat(${e}, 1fr)`,gap:s?12:20},children:a.map(([i,n],l)=>t.jsx(v,{cat:i,skills:n,span:p[l],cardRef:f=>c.current[l]=f},i))}),t.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .sk-grid { display: grid; }
        .sk-card {
          --mx: -999px; --my: -999px;
          position: relative; isolation: isolate;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          backdrop-filter: blur(10px);
        }
        .sk-card::before, .sk-card::after {
          content: ""; position: absolute; inset: -1px; border-radius: inherit; pointer-events: none;
          opacity: 0; transition: opacity 400ms;
        }
        /* Soft fill that follows the cursor */
        .sk-card::before {
          z-index: -1;
          background: radial-gradient(420px circle at var(--mx) var(--my), oklch(70% 0.15 var(--h) / 0.13), transparent 45%);
        }
        /* Border glow that bleeds across neighbouring cards */
        .sk-card::after {
          padding: 1px;
          background: radial-gradient(260px circle at var(--mx) var(--my), oklch(80% 0.16 var(--h) / 0.9), transparent 45%);
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }
        .sk-grid:hover .sk-card::before, .sk-grid:hover .sk-card::after { opacity: 1; }
        .sk-head { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; margin-bottom: 24px; }
        .sk-cat { font: 11px 'JetBrains Mono', monospace; letter-spacing: .1em; text-transform: uppercase; color: oklch(78% 0.14 var(--h)); }
        .sk-meta { font: 10px 'JetBrains Mono', monospace; color: rgba(232,230,224,0.4); white-space: nowrap; }
        .sk-list { display: grid; column-gap: 32px; }
        .sk-row { margin-bottom: 18px; }
        .sk-row-top { display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 14px; }
        .sk-val { font: 11px 'JetBrains Mono', monospace; color: rgba(232,230,224,0.5); }
        .sk-track { height: 4px; border-radius: 2px; background: rgba(255,255,255,0.06); overflow: hidden; }
        .sk-bar { height: 100%; background: linear-gradient(90deg, oklch(75% 0.14 var(--h)), oklch(72% 0.15 calc(var(--h) - 60))); }
        @media (max-width: 768px) {
          .sk-head { margin-bottom: 16px; }
          .sk-cat { font-size: 10px; }
          .sk-row { margin-bottom: 14px; }
          .sk-row-top { font-size: 13px; }
          .sk-val { font-size: 10px; }
        }
      `}})]})}export{M as AuroraSkills};
