import{j as e}from"./jsx-runtime.DhNDwAgn.js";import{r as o}from"./index.CBFZI7UH.js";import{e as N,f,F as w,p as v}from"./cvModel.GgmbwPmA.js";import{T as E}from"./TermSection.yviSeP5d.js";const S=c=>{let s=7;for(const a of c)s=s*31+a.charCodeAt(0)>>>0;return 1e3+s%8999};function P({data:c}){const s=o.useMemo(()=>c.projects.map(t=>{const n=/current|present/i.test(t.kind),[p]=N(t.kind);return{p:t,pid:S(t.title),running:n,start:p,cmd:f(t.title)}}),[c]),[a,h]=o.useState(0),[x,l]=o.useState(!0),g=o.useRef(null),i=s[a],[j,b]=o.useState(!1),d=()=>b(!v()),r=(t,n=x)=>{d(),h((t+s.length)%s.length),l(n)};o.useEffect(()=>{const t=m=>{const u=s.findIndex(k=>k.p.title===m);u<0||(d(),h(u),l(!0),g.current?.focus({preventScroll:!0}))},n=m=>t(m.detail);window.addEventListener(w,n);const p=window;return p.__cvFocusProject&&(t(p.__cvFocusProject),p.__cvFocusProject=void 0),()=>window.removeEventListener(w,n)},[s]);const y=t=>{if(t.key==="ArrowDown"||t.key==="j")r(a+1);else if(t.key==="ArrowUp"||t.key==="k")r(a-1);else if(t.key==="Home")r(0);else if(t.key==="End")r(s.length-1);else if(t.key==="Enter")r(a,!0);else if(t.key===" ")d(),l(n=>!n);else if(t.key==="Escape"||t.key==="q")l(!1);else return;t.preventDefault()};return e.jsxs(E,{id:"projects",prompt:"ps aux --sort=-start | grep michele",title:"projects",children:[e.jsxs("div",{className:"pt",children:[e.jsxs("div",{className:"pt-summary",children:[e.jsxs("span",{children:["Tasks: ",e.jsx("b",{children:s.length})," total, ",e.jsxs("span",{className:"pt-hi",children:[s.filter(t=>t.running).length," running"]}),","," ",s.filter(t=>!t.running).length," sleeping"]}),e.jsx("span",{className:"pt-dim pt-hint",children:"↑↓ select · ⏎ open · esc close"})]}),e.jsxs("div",{className:"pt-head","aria-hidden":"true",children:[e.jsx("span",{className:"pt-c-pid",children:"PID"}),e.jsx("span",{className:"pt-c-stat",children:"S"}),e.jsx("span",{className:"pt-c-start",children:"START"}),e.jsx("span",{className:"pt-c-cmd",children:"COMMAND"}),e.jsx("span",{className:"pt-c-tags",children:"TAGS"})]}),e.jsx("div",{ref:g,className:"pt-list",role:"listbox",tabIndex:0,"aria-label":"Projects — use arrow keys to select, Enter to open","aria-activedescendant":`pt-row-${a}`,onKeyDown:y,children:s.map((t,n)=>e.jsxs("div",{id:`pt-row-${n}`,role:"option","aria-selected":n===a,className:"pt-row"+(n===a?" is-sel":""),onClick:()=>{if(n!==a)return r(n,!0);d(),l(p=>!p)},children:[e.jsx("span",{className:"pt-c-pid",children:t.pid}),e.jsx("span",{className:"pt-c-stat "+(t.running?"is-run":"is-sleep"),title:t.running?"running":"sleeping",children:t.running?"R":"S"}),e.jsx("span",{className:"pt-c-start",children:t.start}),e.jsxs("span",{className:"pt-c-cmd",children:[e.jsx("span",{className:"pt-path",children:"~/projects/"}),t.cmd,e.jsx("span",{className:"pt-kind",children:t.p.kind})]}),e.jsx("span",{className:"pt-c-tags",children:t.p.tags.map(p=>"--"+f(p)).join(" ")})]},t.p.title))}),x&&i&&e.jsxs("div",{className:"pt-panel","data-animate":j?"":void 0,"aria-live":"polite",children:[e.jsxs("div",{className:"pt-line",style:{"--i":0},children:[e.jsx("span",{className:"pt-hi",children:"$"})," cat ~/projects/",i.cmd,".md"]}),e.jsxs("div",{className:"pt-line pt-title",style:{"--i":1},children:["# ",i.p.title]}),e.jsxs("div",{className:"pt-line pt-dim",style:{"--i":2},children:["pid ",i.pid," · ",i.running?"running":"sleeping"," · ",i.p.kind]}),e.jsx("p",{className:"pt-line pt-blurb",style:{"--i":3},children:i.p.blurb}),e.jsxs("div",{className:"pt-line pt-deps",style:{"--i":4},children:[e.jsx("span",{className:"pt-dim",children:"deps:"}),i.p.tags.map(t=>e.jsx("span",{className:"pt-tag",children:t},t))]})]},a)]}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .pt { border: 1px solid rgba(214,211,200,0.15); background: rgba(214,211,200,0.02); border-radius: 4px; font-size: 13px; color: #d6d3c8; overflow: hidden; }
        .pt b { color: #f5f3ec; }
        .pt-hi { color: oklch(82% 0.18 130); }
        .pt-dim { color: rgba(214,211,200,0.5); }
        .pt-summary { display: flex; justify-content: space-between; gap: 12px; flex-wrap: wrap; padding: 12px 16px; border-bottom: 1px dashed rgba(214,211,200,0.12); }
        .pt-head, .pt-row { display: grid; grid-template-columns: 6ch 3ch 7ch minmax(0, 1.4fr) minmax(0, 1fr); gap: 12px; padding: 8px 16px; align-items: baseline; }
        .pt-head { background: oklch(82% 0.18 130 / 0.14); color: oklch(82% 0.18 130); font-weight: 600; font-size: 11px; letter-spacing: 0.08em; }
        .pt-list { outline: none; }
        .pt-list:focus-visible { box-shadow: inset 0 0 0 1px oklch(82% 0.18 130 / 0.6); }
        .pt-row { cursor: pointer; border-bottom: 1px dashed rgba(214,211,200,0.07); transition: background 120ms; }
        .pt-row:hover { background: rgba(214,211,200,0.05); }
        .pt-row.is-sel { background: oklch(82% 0.18 130); color: #0d0e10; }
        .pt-row.is-sel .pt-path, .pt-row.is-sel .pt-kind, .pt-row.is-sel .pt-c-tags, .pt-row.is-sel .pt-c-pid, .pt-row.is-sel .pt-c-start, .pt-row.is-sel .pt-c-stat { color: #0d0e10; }
        .pt-c-pid { color: oklch(75% 0.12 230); text-align: right; }
        .pt-c-stat { font-weight: 700; text-align: center; }
        .pt-c-stat.is-run { color: oklch(82% 0.18 130); }
        .pt-c-stat.is-sleep { color: rgba(214,211,200,0.45); }
        .pt-c-start { color: rgba(214,211,200,0.6); }
        .pt-c-cmd { min-width: 0; font-weight: 600; overflow-wrap: anywhere; }
        .pt-path { font-weight: 400; color: rgba(214,211,200,0.45); }
        .pt-kind { display: block; font-weight: 400; font-size: 11px; color: rgba(214,211,200,0.5); }
        .pt-c-tags { min-width: 0; font-size: 11px; color: rgba(214,211,200,0.55); overflow-wrap: anywhere; }
        .pt-panel { padding: 16px; border-top: 1px solid rgba(214,211,200,0.12); background: #0b0c0e; }
        .pt-line { margin: 0; }
        .pt-panel[data-animate] .pt-line { opacity: 0; animation: pt-type 1ms steps(1) calc(var(--i) * 70ms) forwards; }
        .pt-title { color: #f5f3ec; font-weight: 600; font-size: 16px; margin-top: 10px; }
        .pt-blurb { margin-top: 10px; line-height: 1.7; color: rgba(214,211,200,0.85); max-width: 80ch; }
        .pt-deps { display: flex; flex-wrap: wrap; gap: 6px; align-items: center; margin-top: 12px; }
        .pt-tag { padding: 1px 8px; border: 1px solid rgba(214,211,200,0.2); border-radius: 2px; font-size: 11px; color: rgba(214,211,200,0.75); }
        @keyframes pt-type { to { opacity: 1; } }
        @media (max-width: 1024px) {
          .pt-head, .pt-row { grid-template-columns: 6ch 3ch 7ch minmax(0, 1fr); }
          .pt-c-tags { display: none; }
        }
        @media (max-width: 768px) {
          .pt { font-size: 12px; }
          .pt-hint { display: none; }
          .pt-head, .pt-row { grid-template-columns: 5ch 2ch minmax(0, 1fr); gap: 8px; padding: 10px 12px; }
          .pt-c-start, .pt-path { display: none; }
          .pt-summary, .pt-panel { padding: 12px; }
          .pt-title { font-size: 14px; }
        }
      `}})]})}export{P as TermProjects};
