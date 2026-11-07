import{j as a}from"./jsx-runtime.DhNDwAgn.js";import{r as x}from"./index.CBFZI7UH.js";import{p as P,F as I,e as _,C as R}from"./cvModel.GgmbwPmA.js";import{E as $}from"./EdSection.DUVT3Uv4.js";const g="oklch(55% 0.14 35)",E=["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII"],M=900,C=o=>{const n=o.match(/^(.+?[.!?])\s+([\s\S]*)$/);return n?[n[1],n[2]]:[o,""]};function F({p:o,i:n,n:p}){const[i,u]=C(o.blurb),[c,d]=_(o.kind),v=o.kind.split(" · ")[0];return a.jsxs("div",{className:"fp-paper",children:[a.jsxs("header",{className:"fp-mast",children:[a.jsxs("div",{className:"fp-mast-top",children:[a.jsxs("span",{children:["No. ",String(n+1).padStart(2,"0")," / ",String(p).padStart(2,"0")]}),a.jsxs("span",{className:"fp-mast-mid",children:[v," desk"]}),a.jsxs("span",{children:[c," — ",d===R?"today":d]})]}),a.jsx("div",{className:"fp-mast-name",children:"The Portfolio Review"}),a.jsx("div",{className:"fp-mast-rule"})]}),a.jsxs("div",{className:"fp-grid",children:[a.jsx("div",{className:"fp-plate","aria-hidden":"true",children:a.jsx("span",{children:E[n]??n+1})}),a.jsxs("div",{className:"fp-copy",children:[a.jsx("p",{className:"fp-kicker",children:o.kind}),a.jsx("h3",{className:"fp-head",children:o.title}),a.jsx("p",{className:"fp-lead",children:i}),u&&a.jsx("p",{className:"fp-body",children:u})]})]}),a.jsxs("footer",{className:"fp-tags",children:[a.jsx("span",{className:"fp-tags-k",children:"In this issue"}),o.tags.map(b=>a.jsx("span",{className:"fp-tag",children:b},b))]})]})}function X({data:o}){const n=o.projects,p=n.length,[i,u]=x.useState(0),[c,d]=x.useState(null),[v,b]=x.useState(!1),y=x.useRef(0),j=x.useRef(null),h=x.useRef(null),w=e=>{const t=Math.max(0,Math.min(p-1,e));y.current=t,u(t)},m=e=>w(y.current+e);x.useEffect(()=>{b(P());const e=l=>{const r=n.findIndex(f=>f.title===l);r>=0&&w(r)},t=l=>{const r=window,f=l.detail||r.__cvFocusProject;r.__cvFocusProject=void 0,f&&e(f)};window.addEventListener(I,t);const s=window;return s.__cvFocusProject&&(e(s.__cvFocusProject),s.__cvFocusProject=void 0),()=>window.removeEventListener(I,t)},[n]);const k=()=>j.current?.clientWidth||600,S=e=>{e.button===0&&(h.current={x:e.clientX,y:e.clientY,axis:null,t:performance.now(),dx:0})},z=e=>{const t=h.current;if(!t)return;const s=e.clientX-t.x,l=e.clientY-t.y;if(!t.axis){if(Math.hypot(s,l)<8)return;t.axis=Math.abs(s)>Math.abs(l)?"x":"y",t.axis==="x"&&e.currentTarget.setPointerCapture(e.pointerId)}if(t.axis!=="x")return;t.dx=s;const r=y.current,f=Math.min(1,Math.abs(s)/(k()*.8));s<0&&r<p-1?d({page:r,angle:-180*f}):s>0&&r>0?d({page:r-1,angle:-180+180*f}):d(null)},N=()=>{const e=h.current;if(h.current=null,!e||e.axis!=="x")return d(null);const t=Math.abs(e.dx)/Math.max(1,performance.now()-e.t)>.5,s=Math.abs(e.dx)>k()*.25;(t||s)&&m(e.dx<0?1:-1),d(null)};return a.jsxs($,{id:"projects",num:"04",kicker:"Portfolio",title:"Selected works.",children:[a.jsxs("div",{className:"fp-wrap",children:[a.jsx("div",{ref:j,className:"fp-stage",role:"region","aria-roledescription":"carousel","aria-label":"Selected projects, one front page per project",tabIndex:0,onKeyDown:e=>{e.key==="ArrowRight"&&(e.preventDefault(),m(1)),e.key==="ArrowLeft"&&(e.preventDefault(),m(-1))},onPointerDown:S,onPointerMove:z,onPointerUp:N,onPointerCancel:N,"data-dragging":c?"":void 0,children:n.map((e,t)=>{let s=t<i?-180:0;c?.page===t&&(s=c.angle);const l=Math.abs(t-i)<=1||c?.page===t,r=Math.sin(Math.abs(s)/180*Math.PI);return a.jsxs("article",{className:"fp-page"+(t===i?" is-active":""),"aria-hidden":t!==i,"aria-roledescription":"slide","aria-label":`${t+1} of ${p}: ${e.title}`,style:{zIndex:c?.page===t?2*p+1:p-t,transform:`rotateY(${s}deg)`,transition:c?.page===t||v?"none":`transform ${M}ms cubic-bezier(0.45, 0.05, 0.2, 1), visibility 0s linear ${l?0:M}ms`,visibility:l?"visible":"hidden","--lift":r.toFixed(3)},children:[a.jsx(F,{p:e,i:t,n:p}),a.jsx("div",{className:"fp-shade"})]},e.title)})}),a.jsx("div",{className:"fp-edges","aria-hidden":"true","data-empty":i>=p-1?"":void 0})]}),a.jsxs("nav",{className:"fp-controls","aria-label":"Issues",children:[a.jsxs("button",{type:"button",className:"fp-arrow",onClick:()=>m(-1),disabled:i===0,"aria-label":"Previous issue",children:["← ",a.jsx("span",{children:"Prev"})]}),a.jsx("div",{className:"fp-issues",children:n.map((e,t)=>a.jsx("button",{type:"button",className:t===i?"is-on":"",onClick:()=>w(t),"aria-label":`Issue ${t+1}: ${e.title}`,"aria-current":t===i,children:String(t+1).padStart(2,"0")},e.title))}),a.jsxs("button",{type:"button",className:"fp-arrow",onClick:()=>m(1),disabled:i===p-1,"aria-label":"Next issue",children:[a.jsx("span",{children:"Next"})," →"]})]}),a.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .fp-wrap { position: relative; max-width: 980px; margin: 0 auto; padding: 0 14px 14px 0; overflow-x: clip; }
        .fp-stage {
          position: relative; z-index: 1; display: grid; perspective: 2400px; outline: none;
          touch-action: pan-y; user-select: none; -webkit-user-select: none; cursor: grab;
        }
        .fp-stage[data-dragging] { cursor: grabbing; }
        .fp-stage:focus-visible { box-shadow: 0 0 0 2px ${g}; }
        .fp-page {
          grid-area: 1 / 1; position: relative; transform-origin: left center;
          backface-visibility: hidden; -webkit-backface-visibility: hidden; will-change: transform;
        }
        .fp-shade {
          position: absolute; inset: 0; pointer-events: none;
          background: linear-gradient(90deg, rgba(26,22,18,0.3), rgba(26,22,18,0.06) 45%, rgba(255,255,255,0.12));
          opacity: calc(var(--lift, 0) * 0.9);
        }
        .fp-paper {
          height: 100%; box-sizing: border-box; padding: 28px 36px 24px;
          background-color: #fbf8f2; color: #1a1612;
          background-image: radial-gradient(rgba(26,22,18,0.035) 1px, transparent 1px);
          background-size: 3px 3px;
          border: 1px solid rgba(26,22,18,0.16);
          box-shadow: 0 24px 50px -30px rgba(26,22,18,0.45);
        }
        .fp-edges {
          position: absolute; right: 0; bottom: 0; left: 14px; top: 14px;
          border: 1px solid rgba(26,22,18,0.14); background: #f1ece2;
          box-shadow: 7px 7px 0 -1px #f1ece2, 7px 7px 0 0 rgba(26,22,18,0.12);
          transition: opacity 400ms;
        }
        .fp-edges[data-empty] { opacity: 0; }

        .fp-mast { text-align: center; }
        .fp-mast-top {
          display: flex; justify-content: space-between; gap: 12px; padding-bottom: 8px;
          border-bottom: 1px solid #1a1612;
          font: 10px 'JetBrains Mono', monospace; letter-spacing: .12em; text-transform: uppercase; color: rgba(26,22,18,0.65);
        }
        .fp-mast-mid { color: ${g}; }
        .fp-mast-name {
          font-family: 'Instrument Serif', serif; font-size: clamp(34px, 6vw, 68px); line-height: 1.05;
          letter-spacing: -0.02em; padding: 10px 0 8px; white-space: nowrap;
        }
        .fp-mast-rule { height: 3px; border-top: 3px solid #1a1612; border-bottom: 1px solid #1a1612; }

        .fp-grid { display: grid; grid-template-columns: 170px 1fr; gap: 28px; margin-top: 24px; }
        .fp-plate {
          position: relative; align-self: start; aspect-ratio: 3 / 4; display: grid; place-items: center; overflow: hidden;
          background: radial-gradient(circle, #1a1612 0 30%, transparent 33%) 0 0 / 7px 7px, #e9e2d4;
        }
        .fp-plate::after {
          content: ""; position: absolute; inset: 0;
          background: linear-gradient(155deg, transparent 25%, rgba(233,226,212,0.85));
        }
        .fp-plate span {
          position: relative; z-index: 1; font-family: 'Instrument Serif', serif; font-style: italic; font-size: 64px; line-height: 1;
          color: #fbf8f2; background: ${g}; padding: 4px 16px 10px;
        }
        .fp-kicker { margin: 0 0 10px; font: 11px 'JetBrains Mono', monospace; letter-spacing: .12em; text-transform: uppercase; color: ${g}; }
        .fp-head {
          margin: 0; font-family: 'Instrument Serif', serif; font-weight: 400;
          font-size: clamp(30px, 4.4vw, 52px); line-height: 0.98; letter-spacing: -0.025em;
        }
        .fp-lead {
          margin: 16px 0 0; padding-bottom: 14px; border-bottom: 1px solid rgba(26,22,18,0.15);
          font-family: 'Instrument Serif', serif; font-style: italic; font-size: 21px; line-height: 1.35; color: rgba(26,22,18,0.85);
        }
        .fp-body {
          margin: 14px 0 0; font-size: 14px; line-height: 1.65; color: rgba(26,22,18,0.75);
          columns: 2; column-gap: 24px; column-rule: 1px solid rgba(26,22,18,0.1); text-align: justify; hyphens: auto;
        }
        .fp-tags {
          display: flex; flex-wrap: wrap; align-items: baseline; gap: 6px 14px; margin-top: 22px; padding-top: 10px;
          border-top: 3px double rgba(26,22,18,0.6);
          font: 11px 'JetBrains Mono', monospace; color: rgba(26,22,18,0.7);
        }
        .fp-tags-k { font-weight: 600; letter-spacing: .12em; text-transform: uppercase; color: #1a1612; }
        .fp-tag + .fp-tag::before { content: "·"; margin-right: 14px; color: ${g}; }

        .fp-controls { display: flex; justify-content: center; align-items: center; gap: 24px; margin-top: 32px; }
        .fp-arrow {
          display: inline-flex; gap: 8px; align-items: center; min-height: 44px; padding: 0 16px;
          background: transparent; border: 1px solid rgba(26,22,18,0.25); color: #1a1612; cursor: pointer;
          font: 11px 'JetBrains Mono', monospace; letter-spacing: .12em; text-transform: uppercase;
          transition: background 200ms, color 200ms, border-color 200ms;
        }
        .fp-arrow:hover:not(:disabled) { background: #1a1612; color: #f5f1ea; border-color: #1a1612; }
        .fp-arrow:disabled { opacity: 0.3; cursor: default; }
        .fp-issues { display: flex; gap: 4px; }
        .fp-issues button {
          min-width: 40px; min-height: 44px; padding: 0 6px; background: transparent; border: 0; cursor: pointer;
          font-family: 'Instrument Serif', serif; font-size: 20px; color: rgba(26,22,18,0.4);
          border-bottom: 2px solid transparent; transition: color 200ms, border-color 200ms;
        }
        .fp-issues button:hover { color: #1a1612; }
        .fp-issues button.is-on { color: #1a1612; border-bottom-color: ${g}; font-style: italic; }

        @media (max-width: 768px) {
          .fp-wrap { padding: 0 8px 8px 0; }
          .fp-edges { left: 8px; top: 8px; box-shadow: 4px 4px 0 -1px #f1ece2, 4px 4px 0 0 rgba(26,22,18,0.12); }
          .fp-paper { padding: 18px 16px 16px; }
          .fp-mast-top { font-size: 9px; letter-spacing: .08em; }
          .fp-mast-top span:last-child { display: none; }
          .fp-mast-name { font-size: 30px; padding: 6px 0; }
          .fp-grid { grid-template-columns: 1fr; gap: 0; margin-top: 16px; }
          .fp-plate { display: none; }
          .fp-head { font-size: 30px; }
          .fp-lead { font-size: 18px; }
          .fp-body { columns: 1; font-size: 13.5px; text-align: left; }
          .fp-controls { gap: 8px; margin-top: 24px; }
          .fp-arrow span { display: none; }
          .fp-arrow { padding: 0 14px; }
          .fp-issues button { min-width: 34px; font-size: 18px; }
        }
      `}})]})}export{X as EdProjects};
