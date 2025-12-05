import{$ as e,A as t,F as n,G as r,I as i,It as a,Mn as o,Q as s,Rt as c,W as l,et as u,fn as d,gt as f,hn as p,jn as m,k as h,m as g,pt as _,u as v}from"./vendor-min-mermaid~architectureDiagram-4X3Z3J56.BpJofp52.chunk.js";import{Q as y}from"./vendor-min-mermaid~architecture-U656AL7Q-3ZQKGQJL.j2WEiM7o.chunk.js";var b=l.pie,x={sections:new Map,showData:!1,config:b},S=x.sections,C=x.showData,w=structuredClone(b),T={getConfig:y(()=>structuredClone(w),`getConfig`),clear:y(()=>{S=new Map,C=x.showData,r()},`clear`),setDiagramTitle:_,getDiagramTitle:e,setAccTitle:i,getAccTitle:s,setAccDescription:n,getAccDescription:t,addSection:y(({label:e,value:t})=>{if(t<0)throw Error(`"${e}" has invalid value: ${t}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);S.has(e)||(S.set(e,t),p.debug(`added new section: ${e}, with value: ${t}`))},`addSection`),getSections:y(()=>S,`getSections`),setShowData:y(e=>{C=e},`setShowData`),getShowData:y(()=>C,`getShowData`)},E=y((e,t)=>{o(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},`populateDb`),D={parse:y(async e=>{let t=await m(`pie`,e);p.debug(t),E(t,T)},`parse`)},O=y(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,`getStyles`),k=y(e=>{let t=[...e.values()].reduce((e,t)=>e+t,0),n=[...e.entries()].map(([e,t])=>({label:e,value:t})).filter(e=>e.value/t*100>=1).sort((e,t)=>t.value-e.value);return a().value(e=>e.value)(n)},`createPieArcs`),A={parser:D,db:T,renderer:{draw:y((e,t,n,r)=>{p.debug(`rendering pie chart
`+e);let i=r.db,a=f(),o=g(i.getConfig(),a.pie),s=h(t),l=s.append(`g`);l.attr(`transform`,`translate(225,225)`);let{themeVariables:m}=a,[_]=v(m.pieOuterStrokeWidth);_??=2;let y=o.textPosition,b=d().innerRadius(0).outerRadius(185),x=d().innerRadius(185*y).outerRadius(185*y);l.append(`circle`).attr(`cx`,0).attr(`cy`,0).attr(`r`,185+_/2).attr(`class`,`pieOuterCircle`);let S=i.getSections(),C=k(S),w=[m.pie1,m.pie2,m.pie3,m.pie4,m.pie5,m.pie6,m.pie7,m.pie8,m.pie9,m.pie10,m.pie11,m.pie12],T=0;S.forEach(e=>{T+=e});let E=C.filter(e=>(e.data.value/T*100).toFixed(0)!==`0`),D=c(w);l.selectAll(`mySlices`).data(E).enter().append(`path`).attr(`d`,b).attr(`fill`,e=>D(e.data.label)).attr(`class`,`pieCircle`),l.selectAll(`mySlices`).data(E).enter().append(`text`).text(e=>(e.data.value/T*100).toFixed(0)+`%`).attr(`transform`,e=>`translate(`+x.centroid(e)+`)`).style(`text-anchor`,`middle`).attr(`class`,`slice`),l.append(`text`).text(i.getDiagramTitle()).attr(`x`,0).attr(`y`,-400/2).attr(`class`,`pieTitleText`);let O=[...S.entries()].map(([e,t])=>({label:e,value:t})),A=l.selectAll(`.legend`).data(O).enter().append(`g`).attr(`class`,`legend`).attr(`transform`,(e,t)=>{let n=22*O.length/2;return`translate(216,`+(t*22-n)+`)`});A.append(`rect`).attr(`width`,18).attr(`height`,18).style(`fill`,e=>D(e.label)).style(`stroke`,e=>D(e.label)),A.append(`text`).attr(`x`,22).attr(`y`,14).text(e=>i.getShowData()?`${e.label} [${e.value}]`:e.label);let j=512+Math.max(...A.selectAll(`text`).nodes().map(e=>e?.getBoundingClientRect().width??0));s.attr(`viewBox`,`0 0 ${j} 450`),u(s,450,j,o.useMaxWidth)},`draw`)},styles:O};export{A as t};