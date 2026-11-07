import{j as e}from"./jsx-runtime.DhNDwAgn.js";import{r as m}from"./index.CBFZI7UH.js";import{a as _,C as X,c as A,p as H}from"./cvModel.GgmbwPmA.js";import{E as Y}from"./EdSection.DUVT3Uv4.js";const x="oklch(55% 0.14 35)",q=s=>1-Math.pow(1-s,3);function B(s=.3){const t=m.useRef(null),[i,l]=m.useState(!1);return m.useEffect(()=>{const r=t.current;if(!r)return;const a=new IntersectionObserver(([d])=>{d.isIntersecting&&(l(!0),a.disconnect())},{threshold:s,rootMargin:"0px 0px -5% 0px"});return a.observe(r),()=>a.disconnect()},[s]),[t,i]}function D(s,t=1400,i=0){const[l,r]=m.useState(0);return m.useEffect(()=>{if(!s)return;if(H())return r(1);let a=0;const d=performance.now()+i,f=u=>{const v=Math.min(1,Math.max(0,(u-d)/t));r(q(v)),v<1&&(a=requestAnimationFrame(f))};return a=requestAnimationFrame(f),()=>cancelAnimationFrame(a)},[s,t,i]),l}function G(s){const t=m.useRef(null),[i,l]=m.useState(s);return m.useEffect(()=>{const r=t.current;if(!r)return;const a=new ResizeObserver(()=>r.clientWidth>0&&l(r.clientWidth));return a.observe(r),()=>a.disconnect()},[]),[t,i]}function V({figures:s}){const[t,i]=B(.4),l=D(i,1600);return e.jsx("div",{ref:t,className:"es-figs",children:s.map((r,a)=>e.jsxs("div",{className:"es-fig",style:{transitionDelay:`${a*90}ms`},"data-on":i?"":void 0,children:[e.jsx("div",{className:"es-fig-n","aria-label":String(r.n),children:Math.round(r.n*Math.min(1,l*(1+a*.08)))}),e.jsx("div",{className:"es-fig-l",children:r.label}),e.jsx("div",{className:"es-fig-note",children:r.note})]},r.label))})}function U({years:s,totals:t,added:i,peak:l,peakNote:r,n:a}){const[d,f]=G(640),[u,v]=B(.35),k=D(v,1800,150),[b,w]=m.useState(null),S=f<520,j=S?230:290,p={l:30,r:8,t:46,b:26},n=Math.max(10,f-p.l-p.r),c=j-p.t-p.b,z=Math.max(...t),N=Math.ceil(z/10)*10,$=n/s.length,E=Math.max(3,$*.62),I=o=>p.l+o*$+($-E)/2,h=o=>p.t+c-o/N*c,L=[0,N/2,N],C=b??s.length-1,T=S?4:2,W=o=>{const g=d.current?.getBoundingClientRect();if(!g)return;const M=Math.floor((o-g.left-p.l)/$);w(M>=0&&M<s.length?M:null)},R=s.indexOf(l),y=I(R)+E/2,F=h(t[R]*k),J=y>f*.6;return e.jsxs("figure",{ref:u,className:"es-chart",children:[e.jsxs("figcaption",{children:[e.jsx("span",{className:"es-fig-kicker",children:"Fig. 1"}),e.jsx("span",{className:"es-chart-title",children:"The stack, year by year"}),e.jsx("span",{className:"es-chart-deck",children:"Cumulative number of skills in use, by the year each was first applied."})]}),e.jsxs("div",{className:"es-readout","aria-live":"polite",children:[e.jsx("b",{children:s[C]})," · ",t[C]," skills",i[C]>0&&e.jsxs("span",{className:"es-readout-add",children:[" (+",i[C],")"]})]}),e.jsx("div",{ref:d,className:"es-plot",onPointerMove:o=>W(o.clientX),onPointerDown:o=>W(o.clientX),onPointerLeave:()=>w(null),children:e.jsxs("svg",{width:f,height:j,role:"img","aria-label":`Skills grew from ${t[0]} in ${s[0]} to ${t[t.length-1]} in ${s[s.length-1]}.`,children:[L.map(o=>e.jsxs("g",{children:[e.jsx("line",{x1:p.l,x2:f-p.r,y1:h(o),y2:h(o),stroke:"rgba(26,22,18,0.14)",strokeDasharray:o===0?void 0:"2 3"}),e.jsx("text",{x:p.l-6,y:h(o)+3.5,textAnchor:"end",className:"es-axis",children:o})]},o)),s.map((o,g)=>{const M=Math.max(0,Math.min(1,k*1.6-g/s.length*.6)),O=t[g]*M,P=o===l||g===b;return e.jsxs("g",{children:[e.jsx("rect",{x:I(g),y:h(O),width:E,height:Math.max(0,h(0)-h(O)),fill:P?x:"#1a1612",opacity:b!==null&&g!==b?.35:1}),(g%T===0&&s.length-1-g>=Math.ceil(T/2)||g===s.length-1)&&e.jsxs("text",{x:I(g)+E/2,y:j-8,textAnchor:"middle",className:"es-axis",children:["’",String(o).slice(2)]})]},o)}),e.jsx("line",{x1:p.l,x2:f-p.r,y1:h(0),y2:h(0),stroke:"#1a1612",strokeWidth:1.5}),R>=0&&k>.55&&e.jsxs("g",{className:"es-annot",style:{opacity:Math.min(1,(k-.55)*4)},children:[e.jsx("line",{x1:y,x2:y,y1:F-6,y2:p.t-18,stroke:x,strokeWidth:1}),e.jsx("circle",{cx:y,cy:F-6,r:2.5,fill:x}),e.jsxs("text",{x:J?y-6:y+6,y:p.t-22,textAnchor:J?"end":"start",className:"es-annot-t",children:[l,": +",i[R]," ",r]})]})]})}),e.jsxs("p",{className:"es-source",children:["Source: CV skill catalogue (n = ",a,"); first year of use per skill. Graphic: The Editorial."]})]})}function K({rows:s,n:t}){const[i,l]=B(.35),r=Math.max(...s.map(a=>a.count));return e.jsxs("figure",{ref:i,className:"es-chart","data-on":l?"":void 0,children:[e.jsxs("figcaption",{children:[e.jsx("span",{className:"es-fig-kicker",children:"Fig. 2"}),e.jsx("span",{className:"es-chart-title",children:"Where the depth is"}),e.jsx("span",{className:"es-chart-deck",children:"Rated skills per category; average self-assessed level in brackets."})]}),e.jsx("ol",{className:"es-bars",children:s.map((a,d)=>e.jsxs("li",{className:a.count===r?"is-max":"",children:[e.jsx("span",{className:"es-bar-l",children:a.cat}),e.jsx("span",{className:"es-bar-track",children:e.jsx("i",{style:{width:`${a.count/r*100}%`,transitionDelay:`${150+d*110}ms`}})}),e.jsxs("span",{className:"es-bar-v",children:[a.count," ",e.jsxs("small",{children:["(",a.avg,")"]})]})]},a.cat))}),e.jsxs("p",{className:"es-source",children:["Source: self-assessment on a 0–100 scale across ",t," rated skills."]})]})}function te({data:s}){const t=m.useMemo(()=>{const i=_(s),l=[];for(let n=A;n<=X;n++)l.push(n);const r=l.map(n=>i.filter(c=>c.since<=n).length),a=r.map((n,c)=>n-(c>0?r[c-1]:0));let d=1;for(let n=1;n<a.length;n++)a[n]>a[d]&&(d=n);const f=l[d],u=new Map;for(const n of i)n.since===f&&n.category&&u.set(n.category,(u.get(n.category)??0)+1);const k=([...u.entries()].sort((n,c)=>c[1]-n[1])[0]?.[0]??"").split(/\s*&\s*/).pop()??"",b=Object.values(s.skills).flat(),w=Object.entries(s.skills).map(([n,c])=>({cat:n,count:c.length,avg:Math.round(c.reduce((z,N)=>z+N.v,0)/c.length)})).sort((n,c)=>c.count-n.count||c.avg-n.avg),S=s.experience.reduce((n,c)=>n+c.roles.length,0),j=Number(s.stats.find(n=>/language/i.test(n.l))?.n.match(/\d+/)?.[0]??0),p=[{n:X-A,label:"Years in software",note:`since ${A}`},{n:i.length,label:"Skills on record",note:`${b.length} self-rated`},{n:S,label:"Roles held",note:`${s.experience.length} mastheads`},{n:s.projects.length,label:"Selected works",note:"see § 04"}];return j&&p.push({n:j,label:"Languages",note:"spoken fluently"}),{catalog:i,years:l,totals:r,added:a,peak:f,peakNote:k,rows:w,rated:b,figures:p}},[s]);return e.jsxs(Y,{id:"stats",num:"01a",kicker:"By the numbers",title:"The figures.",children:[e.jsx(V,{figures:t.figures}),e.jsxs("div",{className:"es-charts",children:[e.jsx(U,{years:t.years,totals:t.totals,added:t.added,peak:t.peak,peakNote:t.peakNote,n:t.catalog.length}),e.jsx(K,{rows:t.rows,n:t.rated.length})]}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .es-figs {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          border-top: 3px solid #1a1612; border-bottom: 1px solid #1a1612;
        }
        .es-fig { padding: 20px 20px 22px; border-left: 1px solid rgba(26,22,18,0.15); }
        .es-fig:first-child { border-left: 0; padding-left: 0; }
        .es-fig-n {
          font-family: 'Instrument Serif', serif; font-size: 72px; line-height: 0.95; letter-spacing: -0.03em;
          font-variant-numeric: lining-nums tabular-nums;
        }
        .es-fig:first-child .es-fig-n { color: ${x}; }
        .es-fig-l { margin-top: 8px; font-family: 'Instrument Serif', serif; font-style: italic; font-size: 19px; }
        .es-fig-note { margin-top: 2px; font: 10px 'JetBrains Mono', monospace; letter-spacing: .12em; text-transform: uppercase; color: rgba(26,22,18,0.5); }

        .es-charts { display: grid; grid-template-columns: 1.35fr 1fr; gap: 56px; margin-top: 56px; }
        .es-chart { margin: 0; min-width: 0; border-top: 3px solid #1a1612; padding-top: 14px; }
        .es-chart figcaption { display: flex; flex-direction: column; gap: 4px; margin-bottom: 14px; }
        .es-fig-kicker { font: 600 10px 'JetBrains Mono', monospace; letter-spacing: .16em; text-transform: uppercase; color: ${x}; }
        .es-chart-title { font-family: 'Instrument Serif', serif; font-size: 30px; line-height: 1.05; letter-spacing: -0.01em; }
        .es-chart-deck { font-size: 13px; line-height: 1.5; color: rgba(26,22,18,0.62); }
        .es-readout { font: 11px 'JetBrains Mono', monospace; letter-spacing: .06em; color: rgba(26,22,18,0.6); min-height: 16px; }
        .es-readout b { color: #1a1612; font-weight: 600; }
        .es-readout-add { color: ${x}; }
        .es-plot { position: relative; width: 100%; overflow: hidden; touch-action: pan-y; cursor: crosshair; }
        .es-plot svg { display: block; }
        .es-plot rect { transition: opacity 200ms, fill 200ms; }
        .es-axis { font: 10px 'JetBrains Mono', monospace; fill: rgba(26,22,18,0.5); }
        .es-annot-t { font: italic 15px 'Instrument Serif', serif; fill: ${x}; }
        .es-source {
          margin: 12px 0 0; padding-top: 8px; border-top: 1px solid rgba(26,22,18,0.15);
          font: 10px/1.5 'JetBrains Mono', monospace; letter-spacing: .04em; color: rgba(26,22,18,0.5);
        }

        .es-bars { list-style: none; margin: 8px 0 0; padding: 0; display: flex; flex-direction: column; gap: 14px; }
        .es-bars li { display: grid; grid-template-columns: minmax(0, 1fr) auto; grid-template-areas: "l v" "b b"; gap: 6px 12px; align-items: baseline; }
        .es-bar-l { grid-area: l; font-family: 'Instrument Serif', serif; font-size: 18px; line-height: 1.1; }
        .es-bar-v { grid-area: v; font: 600 12px 'JetBrains Mono', monospace; font-variant-numeric: tabular-nums; }
        .es-bar-v small { font-weight: 400; color: rgba(26,22,18,0.5); font-size: 10px; }
        .es-bar-track { grid-area: b; height: 10px; background: repeating-linear-gradient(90deg, rgba(26,22,18,0.08) 0 1px, transparent 1px 10%); }
        .es-bar-track i { display: block; height: 100%; background: #1a1612; transform-origin: left; transform: scaleX(0); transition: transform 1100ms cubic-bezier(0.2, 0.8, 0.2, 1); }
        .es-chart[data-on] .es-bar-track i { transform: scaleX(1); }
        .es-bars li.is-max .es-bar-track i { background: ${x}; }
        .es-bars li.is-max .es-bar-v { color: ${x}; }

        @media (prefers-reduced-motion: reduce) {
          .es-bar-track i { transition: none; transform: scaleX(1); }
        }
        @media (max-width: 1024px) {
          .es-charts { grid-template-columns: 1fr; gap: 48px; }
        }
        @media (max-width: 768px) {
          .es-figs { grid-template-columns: repeat(2, 1fr); }
          .es-fig { padding: 16px 0 18px 16px; border-top: 1px solid rgba(26,22,18,0.15); }
          .es-fig:nth-child(odd) { border-left: 0; padding-left: 0; }
          .es-fig:nth-child(-n+2) { border-top: 0; }
          .es-fig:last-child:nth-child(odd) { grid-column: 1 / -1; }
          .es-fig-n { font-size: 52px; }
          .es-fig-l { font-size: 16px; }
          .es-charts { margin-top: 40px; }
          .es-chart-title { font-size: 25px; }
        }
      `}})]})}export{te as EdStats};
