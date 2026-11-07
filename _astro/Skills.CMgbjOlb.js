import{j as e}from"./jsx-runtime.DhNDwAgn.js";import{r as d}from"./index.CBFZI7UH.js";import{a as x,d as h,p as u}from"./cvModel.GgmbwPmA.js";import{E as g}from"./EdSection.DUVT3Uv4.js";const c="oklch(55% 0.14 35)",b=["I","II","III","IV","V","VI","VII","VIII","IX","X"];function w({cat:m,idx:s,rows:r,flash:p}){const t=d.useRef(null),[i,l]=d.useState(!1);d.useEffect(()=>{const o=t.current;if(!o)return;const a=new IntersectionObserver(([f])=>{f.isIntersecting&&(l(!0),a.disconnect())},{threshold:.2});return a.observe(o),()=>a.disconnect()},[]);const n=Math.round(r.reduce((o,a)=>o+a.v,0)/r.length);return e.jsxs("section",{ref:t,className:"toc-ch","data-on":i?"":void 0,"aria-labelledby":`toc-ch-${s}`,children:[e.jsxs("h3",{id:`toc-ch-${s}`,className:"toc-ch-h",children:[e.jsxs("span",{className:"toc-ch-num",children:[b[s]??s+1,"."]}),e.jsx("span",{className:"toc-ch-name",children:m}),e.jsxs("span",{className:"toc-ch-avg",title:"Average level",children:["⌀ ",n]})]}),e.jsx("ol",{className:"toc-list",children:r.map((o,a)=>e.jsxs("li",{className:"toc-row"+(p===o.n?" is-flash":""),tabIndex:0,"data-skill":o.n,style:{"--d":`${a*70+120}ms`},"aria-label":`${o.n}, level ${o.v} of 100, since ${o.since}`,children:[e.jsx("span",{className:"toc-name",children:o.n}),e.jsxs("span",{className:"toc-since",children:["since ",o.since]}),e.jsx("span",{className:"toc-lead","aria-hidden":"true"}),e.jsx("span",{className:"toc-page",children:o.v})]},o.n))})]})}function y({data:m}){const s=new Map(x(m).map(t=>[t.name,t.since])),[r,p]=d.useState(null);return d.useEffect(()=>{let t=0;const i=l=>{const n=l.detail;p(n),clearTimeout(t),t=window.setTimeout(()=>p(null),2400),document.querySelector(`.toc-row[data-skill="${CSS.escape(n)}"]`)?.scrollIntoView({behavior:u()?"auto":"smooth",block:"center"})};return window.addEventListener(h,i),()=>{clearTimeout(t),window.removeEventListener(h,i)}},[]),e.jsxs(g,{id:"skills",num:"03",kicker:"Repertoire",title:"The toolkit.",children:[e.jsxs("div",{className:"toc-head","aria-hidden":"true",children:[e.jsx("span",{children:"Contents"}),e.jsx("span",{children:"Level"})]}),e.jsx("div",{className:"toc",children:Object.entries(m.skills).map(([t,i],l)=>e.jsx(w,{cat:t,idx:l,flash:r,rows:[...i].sort((n,o)=>o.v-n.v).map(n=>({n:n.n,v:n.v,since:s.get(n.n)??2017}))},t))}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .toc-head {
          display: flex; justify-content: space-between; padding-bottom: 10px; margin-bottom: 8px;
          border-bottom: 3px solid #1a1612;
          font: 600 10px 'JetBrains Mono', monospace; letter-spacing: .18em; text-transform: uppercase;
        }
        .toc { columns: 2; column-gap: 72px; column-rule: 1px solid rgba(26,22,18,0.12); }
        .toc-ch { break-inside: avoid; padding: 28px 0 8px; }
        .toc-ch-h {
          display: flex; align-items: baseline; gap: 12px; margin: 0 0 10px; padding-bottom: 8px;
          border-bottom: 1px solid rgba(26,22,18,0.25); font-weight: 400;
        }
        .toc-ch-num { font: 12px 'JetBrains Mono', monospace; color: ${c}; min-width: 34px; }
        .toc-ch-name { font-family: 'Instrument Serif', serif; font-style: italic; font-size: 30px; line-height: 1; flex: 1; }
        .toc-ch-avg { font: 10px 'JetBrains Mono', monospace; letter-spacing: .08em; color: rgba(26,22,18,0.45); }
        .toc-list { list-style: none; margin: 0; padding: 0 0 0 46px; }
        .toc-row {
          position: relative; display: flex; align-items: baseline; gap: 8px; padding: 7px 0; outline: none; cursor: default;
        }
        .toc-name {
          font-family: 'Instrument Serif', serif; font-size: 19px; line-height: 1.2;
          background: linear-gradient(${c}, ${c}) 0 100% / 0% 1.5px no-repeat;
          transition: background-size 450ms cubic-bezier(0.2, 0.8, 0.2, 1), color 250ms;
        }
        .toc-since {
          order: 1; font: 10px 'JetBrains Mono', monospace; letter-spacing: .06em; color: ${c};
          max-width: 0; overflow: hidden; white-space: nowrap; opacity: 0;
          transition: max-width 400ms ease, opacity 300ms;
        }
        .toc-lead {
          order: 2; flex: 1; min-width: 24px; height: 1em; position: relative; top: -0.15em;
          background-image: radial-gradient(circle, rgba(26,22,18,0.45) 1px, transparent 1.4px);
          background-size: 7px 3px; background-repeat: repeat-x; background-position: 0 100%;
          transform-origin: left; transform: scaleX(0);
          transition: transform 900ms cubic-bezier(0.2, 0.8, 0.2, 1) var(--d, 0ms);
        }
        .toc-ch[data-on] .toc-lead { transform: scaleX(1); }
        .toc-page {
          order: 4; min-width: 2.2ch; text-align: right;
          font-family: 'Instrument Serif', serif; font-size: 19px; font-variant-numeric: lining-nums tabular-nums;
          transition: color 250ms, transform 250ms;
        }
        .toc-row:hover .toc-name, .toc-row:focus-visible .toc-name, .toc-row.is-flash .toc-name { background-size: 100% 1.5px; }
        .toc-row:hover .toc-since, .toc-row:focus-visible .toc-since, .toc-row.is-flash .toc-since { max-width: 12ch; opacity: 1; }
        .toc-row:hover .toc-lead, .toc-row:focus-visible .toc-lead, .toc-row.is-flash .toc-lead {
          background-image: radial-gradient(circle, ${c} 1px, transparent 1.4px);
          animation: toc-march 600ms linear infinite;
        }
        .toc-row:hover .toc-page, .toc-row:focus-visible .toc-page, .toc-row.is-flash .toc-page { color: ${c}; transform: scale(1.18); }
        .toc-row.is-flash { background: linear-gradient(90deg, oklch(55% 0.14 35 / 0.1), transparent); }
        @keyframes toc-march { to { background-position: 7px 100%; } }

        @media (prefers-reduced-motion: reduce) {
          .toc-lead { transform: none; transition: none; }
          .toc-row:hover .toc-lead, .toc-row:focus-visible .toc-lead, .toc-row.is-flash .toc-lead { animation: none; }
        }
        @media (max-width: 1024px) {
          .toc { column-gap: 40px; }
          .toc-list { padding-left: 0; }
        }
        @media (max-width: 768px) {
          .toc { columns: 1; }
          .toc-ch { padding-top: 22px; }
          .toc-ch-name { font-size: 25px; }
          .toc-ch-num { min-width: 26px; }
          .toc-name, .toc-page { font-size: 17px; }
          .toc-row { padding: 8px 0; }
        }
      `}})]})}export{y as EdSkills};
