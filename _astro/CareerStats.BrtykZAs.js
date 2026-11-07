import{j as e}from"./jsx-runtime.DhNDwAgn.js";import{r as k}from"./index.CBFZI7UH.js";import{u as J}from"./useReveal.CqETIhiy.js";import{a as E,C as v,p as T,G as Y}from"./cvModel.GgmbwPmA.js";const R=o=>Y[o]??250,O=o=>1-Math.pow(1-o,3);function C(o,g=1600,c=0){const[u,h]=k.useState(0);return k.useEffect(()=>{if(!o)return;if(T())return h(1);let s=0;const l=performance.now()+c,p=a=>{const n=Math.min(1,Math.max(0,(a-l)/g));h(O(n)),n<1&&(s=requestAnimationFrame(p))};return s=requestAnimationFrame(p),()=>cancelAnimationFrame(s)},[o,g,c]),u}function D({value:o,suffix:g="",label:c,note:u,run:h,delay:s}){const l=C(h,1800,s);return e.jsxs("div",{className:"cs-card cs-kpi",children:[e.jsxs("div",{className:"cs-kpi-num",children:[Math.round(o*l),e.jsx("span",{children:g})]}),e.jsx("div",{className:"cs-kpi-label",children:c}),e.jsx("div",{className:"cs-kpi-note",children:u})]})}function F({data:o,run:g}){const c=k.useMemo(()=>E(o),[o]),u=Math.min(...c.map(t=>t.since)),s=Array.from({length:v-u+1},(t,r)=>u+r).map(t=>({y:t,total:c.filter(r=>r.since<=t).length,added:c.filter(r=>r.since===t).map(r=>r.name)})),l=Math.max(...s.map(t=>t.total)),p=600,a=240,n={l:8,r:8,t:20,b:28},x=t=>n.l+t/(s.length-1)*(p-n.l-n.r),m=t=>a-n.b-t/l*(a-n.t-n.b),d=s.map((t,r)=>[x(r),m(t.total)]),i=d.reduce((t,[r,w],B)=>{if(!B)return`M${r},${w}`;const[A,I]=d[B-1],L=(A+r)/2;return`${t} C${L},${I} ${L},${w} ${r},${w}`},""),j=`${i} L${x(s.length-1)},${a-n.b} L${x(0)},${a-n.b} Z`,b=C(g,2200,200),N=k.useRef(null),[y,M]=k.useState(2e3);k.useEffect(()=>M(N.current?.getTotalLength()??2e3),[i]);const[P,S]=k.useState(null),$=P??s.length-1,f=s[$],z=t=>{const r=t.currentTarget.getBoundingClientRect(),w=(t.clientX-r.left)/r.width*p;S(Math.max(0,Math.min(s.length-1,Math.round((w-n.l)/(p-n.l-n.r)*(s.length-1)))))};return e.jsxs("div",{className:"cs-card cs-growth",children:[e.jsxs("div",{className:"cs-head",children:[e.jsxs("div",{children:[e.jsx("div",{className:"cs-kicker",children:"Stack growth"}),e.jsxs("div",{className:"cs-title",children:[f.total," technologies ",e.jsxs("span",{children:["by ",f.y]})]})]}),e.jsx("div",{className:"cs-added",children:f.added.length?`+${f.added.length} · ${f.added.slice(0,3).join(", ")}${f.added.length>3?"…":""}`:"—"},f.y)]}),e.jsxs("svg",{viewBox:`0 0 ${p} ${a}`,className:"cs-svg",onPointerMove:z,onPointerLeave:()=>S(null),role:"img","aria-label":`Number of technologies grew from ${s[0].total} in ${u} to ${l} in ${v}`,children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"cs-area",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"oklch(75% 0.14 280)",stopOpacity:"0.45"}),e.jsx("stop",{offset:"100%",stopColor:"oklch(75% 0.14 280)",stopOpacity:"0"})]}),e.jsxs("linearGradient",{id:"cs-line",x1:"0",y1:"0",x2:"1",y2:"0",children:[e.jsx("stop",{offset:"0%",stopColor:"oklch(70% 0.16 200)"}),e.jsx("stop",{offset:"100%",stopColor:"oklch(78% 0.15 300)"})]}),e.jsx("clipPath",{id:"cs-reveal",children:e.jsx("rect",{x:"0",y:"0",width:p*b,height:a})})]}),[.25,.5,.75,1].map(t=>e.jsx("line",{x1:n.l,x2:p-n.r,y1:m(l*t),y2:m(l*t),className:"cs-gridline"},t)),e.jsx("path",{d:j,fill:"url(#cs-area)",clipPath:"url(#cs-reveal)"}),e.jsx("path",{ref:N,d:i,fill:"none",stroke:"url(#cs-line)",strokeWidth:"2.5",strokeLinecap:"round",strokeDasharray:y,strokeDashoffset:y*(1-b)}),s.map((t,r)=>e.jsx("text",{x:x(r),y:a-8,textAnchor:"middle",className:"cs-axis"+(r===$?" is-on":""),children:s.length>10&&r%2&&r!==$?"":`'${String(t.y).slice(2)}`},t.y)),b>.98&&e.jsxs("g",{transform:`translate(${x($)},${m(f.total)})`,className:"cs-dot",children:[e.jsx("line",{y1:0,y2:a-n.b-m(f.total),className:"cs-guide"}),e.jsx("circle",{r:"9",className:"cs-dot-halo"}),e.jsx("circle",{r:"4.5",className:"cs-dot-core"})]})]})]})}function G({data:o,run:g}){const c=Object.entries(o.skills).map(([d,i])=>({name:d,count:i.length,avg:Math.round(i.reduce((j,b)=>j+b.v,0)/i.length)})),u=c.reduce((d,i)=>d+i.count,0),h=C(g,1800,300),[s,l]=k.useState(null),p=70,a=2*Math.PI*p,n=4;let x=0;const m=s!=null?c[s]:null;return e.jsxs("div",{className:"cs-card cs-donut",children:[e.jsx("div",{className:"cs-kicker",children:"Focus areas"}),e.jsxs("div",{className:"cs-donut-wrap",children:[e.jsx("svg",{viewBox:"0 0 200 200",className:"cs-donut-svg",role:"img","aria-label":"Share of skills per category",children:e.jsx("g",{transform:"rotate(-90 100 100)",children:c.map((d,i)=>{const j=d.count/u,b=Math.max(0,j*a-n)*h,N=-x*a*h;x+=j;const y=s===i;return e.jsx("circle",{cx:"100",cy:"100",r:p,fill:"none",stroke:`oklch(72% 0.15 ${R(d.name)})`,strokeWidth:y?22:16,strokeDasharray:`${b} ${a}`,strokeDashoffset:N,strokeLinecap:"butt",opacity:s==null||y?1:.3,style:{transition:"stroke-width 250ms, opacity 250ms",cursor:"pointer"},onPointerEnter:()=>l(i),onPointerLeave:()=>l(null),onClick:()=>l(M=>M===i?null:i)},d.name)})})}),e.jsxs("div",{className:"cs-donut-center",children:[e.jsx("div",{className:"cs-donut-num",children:m?`${m.avg}%`:Math.round(u*h)}),e.jsx("div",{className:"cs-donut-label",children:m?m.name:"rated skills"})]})]}),e.jsx("ul",{className:"cs-legend",children:c.map((d,i)=>e.jsxs("li",{className:s===i?"is-on":"",onPointerEnter:()=>l(i),onPointerLeave:()=>l(null),children:[e.jsx("i",{style:{background:`oklch(72% 0.15 ${R(d.name)})`}}),d.name,e.jsx("span",{children:d.count})]},d.name))})]})}function W({data:o}){const[g,c]=J(.2),u=k.useMemo(()=>E(o),[o]),h=a=>{const n=o.experience.flatMap(x=>x.roles.map(m=>({c:x,r:m}))).find(({c:x,r:m})=>a.test(x.company+m.title));return Number(n?.r.period.match(/\d{4}/)?.[0]??v)},s=Math.min(...o.experience.flatMap(a=>a.roles.map(n=>Number(n.period.match(/\d{4}/)?.[0]??v)))),l=Number(o.stats.find(a=>/language/i.test(a.l))?.n??0),p=[{value:v-s,suffix:"",label:"Years in tech",note:`since ${s}`},{value:u.length,suffix:"",label:"Technologies",note:"across the stack"},{value:v-h(/Bosch/),suffix:"",label:"Years at Bosch",note:"Connected Industry"},{value:l,suffix:"",label:"Languages",note:"spoken fluently"}];return e.jsxs("section",{id:"aurora-stats",ref:g,className:"cs-section"+(c?" is-shown":""),children:[e.jsx("div",{className:"cs-eyebrow",children:"◇ BY THE NUMBERS"}),e.jsx("h2",{className:"cs-h2",children:"Career at a glance."}),e.jsxs("div",{className:"cs-grid",children:[p.map((a,n)=>e.jsx(D,{...a,run:c,delay:n*120},a.label)),e.jsx(F,{data:o,run:c}),e.jsx(G,{data:o,run:c})]}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .cs-section {
          padding: 120px 48px; max-width: 1400px; margin: 0 auto; position: relative; z-index: 2;
          opacity: 0; transform: translateY(40px); transition: opacity 800ms, transform 800ms;
        }
        .cs-section.is-shown { opacity: 1; transform: none; }
        .cs-eyebrow { font: 12px 'JetBrains Mono', monospace; letter-spacing: .2em; color: oklch(75% 0.14 280); margin-bottom: 16px; }
        .cs-h2 { font: 400 clamp(32px, 6vw, 64px)/1 'Instrument Serif', serif; letter-spacing: -0.02em; margin: 0 0 48px; }
        .cs-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .cs-card {
          position: relative; padding: 28px; border-radius: 20px; overflow: hidden;
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); backdrop-filter: blur(10px);
        }
        .cs-kpi-num {
          font: 400 clamp(48px, 6vw, 72px)/1 'Instrument Serif', serif; font-variant-numeric: tabular-nums;
          background: linear-gradient(135deg, #fff, oklch(75% 0.14 280));
          -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
        }
        .cs-kpi-label { font: 11px 'JetBrains Mono', monospace; letter-spacing: .12em; text-transform: uppercase; color: rgba(232,230,224,0.75); margin-top: 12px; }
        .cs-kpi-note { font-size: 13px; color: rgba(232,230,224,0.45); margin-top: 4px; }
        .cs-kpi::after {
          content: ""; position: absolute; right: -30px; bottom: -30px; width: 120px; height: 120px; border-radius: 50%;
          background: radial-gradient(circle, oklch(55% 0.18 280 / 0.25), transparent 70%);
        }
        .cs-growth { grid-column: span 3; }
        .cs-donut { grid-column: span 1; }
        .cs-head { display: flex; justify-content: space-between; gap: 16px; align-items: flex-start; flex-wrap: wrap; }
        .cs-kicker { font: 11px 'JetBrains Mono', monospace; letter-spacing: .14em; text-transform: uppercase; color: oklch(75% 0.14 280); }
        .cs-title { font: 400 30px/1.1 'Instrument Serif', serif; margin-top: 8px; font-variant-numeric: tabular-nums; }
        .cs-title span { color: rgba(232,230,224,0.45); }
        .cs-added { font: 11px 'JetBrains Mono', monospace; color: rgba(232,230,224,0.6); max-width: 50%; text-align: right; animation: cs-fade 300ms ease; }
        @keyframes cs-fade { from { opacity: 0; transform: translateY(4px); } }
        .cs-svg { width: 100%; height: auto; display: block; margin-top: 16px; cursor: crosshair; touch-action: pan-y; }
        .cs-gridline { stroke: rgba(255,255,255,0.06); stroke-dasharray: 2 4; }
        .cs-axis { font: 10px 'JetBrains Mono', monospace; fill: rgba(232,230,224,0.35); transition: fill 200ms; }
        .cs-axis.is-on { fill: #e8e6e0; }
        .cs-guide { stroke: rgba(255,255,255,0.18); stroke-dasharray: 2 3; }
        .cs-dot-halo { fill: oklch(75% 0.14 280 / 0.25); animation: cs-pulse 1.8s ease-in-out infinite; }
        .cs-dot-core { fill: #fff; stroke: oklch(75% 0.14 280); stroke-width: 2; }
        @keyframes cs-pulse { 50% { r: 14px; opacity: 0.4; } }
        .cs-donut-wrap { position: relative; width: min(220px, 100%); margin: 16px auto 8px; }
        .cs-donut-svg { width: 100%; height: auto; display: block; overflow: visible; }
        .cs-donut-center { position: absolute; inset: 0; display: grid; place-content: center; text-align: center; pointer-events: none; padding: 0 48px; }
        .cs-donut-num { font: 400 40px/1 'Instrument Serif', serif; }
        .cs-donut-label { font: 9px 'JetBrains Mono', monospace; letter-spacing: .1em; text-transform: uppercase; color: rgba(232,230,224,0.55); margin-top: 6px; }
        .cs-legend { list-style: none; padding: 0; margin: 12px 0 0; display: grid; gap: 4px; }
        .cs-legend li { display: flex; align-items: center; gap: 8px; font-size: 12px; color: rgba(232,230,224,0.65); padding: 3px 6px; border-radius: 6px; transition: background 200ms, color 200ms; cursor: default; }
        .cs-legend li.is-on { background: rgba(255,255,255,0.06); color: #e8e6e0; }
        .cs-legend i { width: 8px; height: 8px; border-radius: 50%; flex: none; }
        .cs-legend span { margin-left: auto; font: 11px 'JetBrains Mono', monospace; color: rgba(232,230,224,0.4); }
        @media (max-width: 1024px) {
          .cs-section { padding: 80px 32px; }
          .cs-grid { grid-template-columns: repeat(2, 1fr); }
          .cs-growth { grid-column: span 2; }
          .cs-donut { grid-column: span 2; display: grid; grid-template-columns: auto 1fr; column-gap: 24px; align-items: center; }
          .cs-donut .cs-kicker { grid-column: span 2; }
          .cs-donut-wrap { width: 200px; }
        }
        @media (max-width: 768px) {
          .cs-section { padding: 60px 20px; }
          .cs-eyebrow { font-size: 10px; }
          .cs-h2 { margin-bottom: 32px; }
          .cs-grid { gap: 12px; }
          .cs-card { padding: 20px; border-radius: 14px; }
          .cs-kpi-num { font-size: 44px; }
          .cs-kpi-label { font-size: 9px; }
          .cs-kpi-note { font-size: 11px; }
          .cs-title { font-size: 24px; }
          .cs-added { max-width: 100%; text-align: left; }
          .cs-donut { display: block; }
          .cs-donut-wrap { width: 200px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .cs-section { transition: none; }
          .cs-dot-halo { animation: none; }
        }
      `}})]})}export{W as AuroraCareerStats};
