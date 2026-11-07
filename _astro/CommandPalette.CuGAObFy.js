import{j as r}from"./jsx-runtime.DhNDwAgn.js";import{r as a}from"./index.CBFZI7UH.js";import{j,p as S,g as N,d as C,F as M,s as T,h as A}from"./cvModel.GgmbwPmA.js";const I={aurora:{"--cp-bg":"rgba(14,15,24,0.92)","--cp-fg":"#e8e6e0","--cp-muted":"rgba(232,230,224,0.5)","--cp-border":"rgba(255,255,255,0.12)","--cp-accent":"oklch(70% 0.16 280)","--cp-active":"rgba(140,120,255,0.16)","--cp-font":"'Instrument Sans', system-ui, sans-serif","--cp-radius":"16px","--cp-overlay":"rgba(3,4,8,0.6)"},editorial:{"--cp-bg":"#fbf8f2","--cp-fg":"#1a1612","--cp-muted":"rgba(26,22,18,0.5)","--cp-border":"rgba(26,22,18,0.18)","--cp-accent":"oklch(55% 0.14 35)","--cp-active":"rgba(180,90,50,0.1)","--cp-font":"'Instrument Serif', Georgia, serif","--cp-radius":"2px","--cp-overlay":"rgba(26,22,18,0.35)"},terminal:{"--cp-bg":"#0d0e10","--cp-fg":"#d6d3c8","--cp-muted":"rgba(214,211,200,0.45)","--cp-border":"rgba(214,211,200,0.2)","--cp-accent":"oklch(82% 0.18 130)","--cp-active":"rgba(170,230,80,0.1)","--cp-font":"'JetBrains Mono', monospace","--cp-radius":"4px","--cp-overlay":"rgba(0,0,0,0.6)"}},z=i=>i instanceof HTMLElement&&(i.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(i.tagName));function K({data:i,concept:s}){const[l,n]=a.useState(!1),[p,g]=a.useState(""),[c,d]=a.useState(0),[m,x]=a.useState(""),[v,y]=a.useState(!0),h=a.useRef(null),w=a.useRef(null),b=a.useMemo(()=>{const e=j(i).map(t=>({...t,run:()=>{const f=t.kind==="Skill"?document.getElementById("aurora-graph"):null;f?f.scrollIntoView({behavior:S()?"auto":"smooth",block:"start"}):N(s,t.section),t.kind==="Skill"&&(window.__cvFocusSkill=t.title,window.dispatchEvent(new CustomEvent(C,{detail:t.title}))),t.kind==="Project"&&(window.__cvFocusProject=t.title,window.dispatchEvent(new CustomEvent(M,{detail:t.title})))}}));return[...[...["aurora","editorial","terminal"].filter(t=>t!==s).map(t=>({id:"act:theme:"+t,title:`Switch design → ${t[0].toUpperCase()+t.slice(1)}`,subtitle:"Change the look of this CV",kind:"Action",keywords:"theme design concept look "+t,run:()=>T(t,s)})),{id:"act:copy",title:"Copy e-mail address",subtitle:i.email,kind:"Action",keywords:"mail contact clipboard",run:()=>{navigator.clipboard?.writeText(i.email).then(()=>x("E-mail copied ✓"),()=>x(i.email))}},{id:"act:mail",title:"Write an e-mail",subtitle:`mailto:${i.email}`,kind:"Action",keywords:"mail contact hire",run:()=>window.location.href=`mailto:${i.email}`},{id:"act:top",title:"Back to top",subtitle:"Scroll to the beginning",kind:"Action",keywords:"top start home",run:()=>window.scrollTo({top:0,behavior:"smooth"})}],...e]},[i,s]),u=a.useMemo(()=>{if(!p.trim()){const e=["Section","Action"];return b.filter(o=>e.includes(o.kind)).sort((o,t)=>e.indexOf(o.kind)-e.indexOf(t.kind))}return b.map(e=>({i:e,s:A(p,e)})).filter(e=>e.s>0).sort((e,o)=>o.s-e.s).slice(0,12).map(e=>e.i)},[p,b]);a.useEffect(()=>{const e=t=>{(t.metaKey||t.ctrlKey)&&t.key.toLowerCase()==="k"?(t.preventDefault(),n(f=>!f)):t.key==="/"&&!l&&!z(t.target)&&(t.preventDefault(),n(!0))},o=()=>n(!0);return window.addEventListener("keydown",e),window.addEventListener("cv:open-palette",o),()=>{window.removeEventListener("keydown",e),window.removeEventListener("cv:open-palette",o)}},[l]),a.useEffect(()=>{l&&(g(""),d(0),requestAnimationFrame(()=>h.current?.focus()))},[l]),a.useEffect(()=>d(0),[p]),a.useEffect(()=>y(/Mac|iPhone|iPad/.test(navigator.platform)),[]),a.useEffect(()=>{w.current?.querySelector(`[data-idx="${c}"]`)?.scrollIntoView({block:"nearest"})},[c]),a.useEffect(()=>{if(!m)return;const e=setTimeout(()=>x(""),1800);return()=>clearTimeout(e)},[m]);const k=e=>{e&&(n(!1),setTimeout(e.run,10))},E=e=>{e.key==="ArrowDown"?(e.preventDefault(),d(o=>Math.min(o+1,u.length-1))):e.key==="ArrowUp"?(e.preventDefault(),d(o=>Math.max(o-1,0))):e.key==="Enter"?(e.preventDefault(),k(u[c])):e.key==="Escape"&&n(!1)};return r.jsxs("div",{className:`cp cp-${s}`,style:I[s],children:[r.jsxs("button",{className:"cp-trigger",onClick:()=>n(!0),"aria-label":"Open command palette",children:[r.jsx("span",{children:"Search"}),r.jsxs("kbd",{children:[v?"⌘":"Ctrl"," K"]})]}),l&&r.jsx("div",{className:"cp-overlay",onMouseDown:()=>n(!1),children:r.jsxs("div",{className:"cp-dialog",role:"dialog","aria-modal":"true","aria-label":"Command palette",onMouseDown:e=>e.stopPropagation(),children:[r.jsxs("div",{className:"cp-input-row",children:[r.jsx("span",{className:"cp-prompt",children:s==="terminal"?"$":"⌕"}),r.jsx("input",{ref:h,value:p,onChange:e=>g(e.target.value),onKeyDown:E,placeholder:"Search roles, projects, skills… or type an action","aria-controls":"cp-list","aria-activedescendant":u[c]?"cp-"+c:void 0,role:"combobox","aria-expanded":"true"}),r.jsx("kbd",{className:"cp-esc",children:"esc"})]}),r.jsxs("ul",{className:"cp-list",id:"cp-list",role:"listbox",ref:w,children:[u.length===0&&r.jsxs("li",{className:"cp-empty",children:["No results for “",p,"”"]}),u.map((e,o)=>r.jsxs("li",{id:"cp-"+o,"data-idx":o,role:"option","aria-selected":o===c,className:o===c?"is-active":"",onMouseMove:()=>d(o),onClick:()=>k(e),children:[r.jsx("span",{className:"cp-kind",children:e.kind}),r.jsxs("span",{className:"cp-text",children:[r.jsx("span",{className:"cp-title",children:e.title}),r.jsx("span",{className:"cp-sub",children:e.subtitle})]}),r.jsx("span",{className:"cp-enter",children:"↵"})]},e.id))]}),r.jsxs("div",{className:"cp-footer",children:[r.jsx("span",{children:"↑↓ navigate"}),r.jsx("span",{children:"↵ open"}),r.jsxs("span",{children:["/ or ",v?"⌘":"Ctrl","K toggle"]})]})]})}),m&&r.jsx("div",{className:"cp-toast",role:"status",children:m}),r.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .cp { font-family: var(--cp-font); }
        .cp-trigger {
          position: fixed; left: 20px; bottom: 20px; z-index: 90;
          display: inline-flex; align-items: center; gap: 10px;
          padding: 8px 10px 8px 14px; border-radius: var(--cp-radius);
          background: var(--cp-bg); color: var(--cp-muted); border: 1px solid var(--cp-border);
          font: 13px var(--cp-font); cursor: pointer;
          backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.18);
          transition: color 200ms, border-color 200ms, transform 200ms;
        }
        .cp-trigger:hover { color: var(--cp-fg); border-color: var(--cp-accent); transform: translateY(-1px); }
        .cp-trigger kbd, .cp-esc {
          font: 11px 'JetBrains Mono', monospace; padding: 2px 6px; border-radius: 4px;
          border: 1px solid var(--cp-border); color: var(--cp-muted);
        }
        @media (max-width: 768px) { .cp-trigger { display: none; } }

        .cp-overlay {
          position: fixed; inset: 0; z-index: 1000; background: var(--cp-overlay);
          backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);
          display: flex; align-items: flex-start; justify-content: center; padding: 12vh 16px 16px;
          animation: cp-fade 160ms ease-out;
        }
        .cp-dialog {
          width: min(640px, 100%); max-height: 70vh; display: flex; flex-direction: column;
          background: var(--cp-bg); color: var(--cp-fg); border: 1px solid var(--cp-border);
          border-radius: var(--cp-radius); overflow: hidden;
          box-shadow: 0 30px 80px rgba(0,0,0,0.45);
          backdrop-filter: blur(24px) saturate(140%); -webkit-backdrop-filter: blur(24px) saturate(140%);
          animation: cp-pop 200ms cubic-bezier(.2,.9,.3,1.2);
        }
        .cp-input-row { display: flex; align-items: center; gap: 12px; padding: 16px 18px; border-bottom: 1px solid var(--cp-border); }
        .cp-prompt { color: var(--cp-accent); font-size: 18px; }
        .cp-input-row input {
          flex: 1; min-width: 0; background: transparent; border: 0; outline: 0;
          color: var(--cp-fg); font: 17px var(--cp-font);
        }
        .cp-input-row input::placeholder { color: var(--cp-muted); }
        .cp-list { list-style: none; margin: 0; padding: 6px; overflow-y: auto; }
        .cp-list li {
          display: flex; align-items: center; gap: 14px; padding: 10px 12px; cursor: pointer;
          border-radius: calc(var(--cp-radius) - 4px);
        }
        .cp-list li.is-active { background: var(--cp-active); }
        .cp-list li.is-active .cp-enter { opacity: 1; }
        .cp-kind {
          flex: 0 0 76px; font: 10px 'JetBrains Mono', monospace; letter-spacing: .12em;
          text-transform: uppercase; color: var(--cp-accent);
        }
        .cp-text { display: flex; flex-direction: column; min-width: 0; flex: 1; }
        .cp-title { font-size: 15px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .cp-sub { font-size: 12px; color: var(--cp-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .cp-enter { opacity: 0; color: var(--cp-muted); }
        .cp-empty { color: var(--cp-muted); padding: 18px 12px !important; cursor: default !important; }
        .cp-footer {
          display: flex; gap: 18px; padding: 10px 18px; border-top: 1px solid var(--cp-border);
          font: 11px 'JetBrains Mono', monospace; color: var(--cp-muted);
        }
        .cp-toast {
          position: fixed; left: 50%; bottom: 32px; translate: -50% 0; z-index: 1001;
          background: var(--cp-bg); color: var(--cp-fg); border: 1px solid var(--cp-accent);
          border-radius: var(--cp-radius); padding: 10px 16px; font-size: 13px;
          animation: cp-pop 200ms ease-out;
        }
        @keyframes cp-fade { from { opacity: 0 } }
        @keyframes cp-pop { from { opacity: 0; transform: translateY(-8px) scale(.98) } }
        @media (prefers-reduced-motion: reduce) {
          .cp-overlay, .cp-dialog, .cp-toast { animation: none; }
        }
      `}})]})}export{K as default};
