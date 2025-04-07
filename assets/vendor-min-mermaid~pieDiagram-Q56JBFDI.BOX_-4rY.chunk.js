import{c as G}from"./vendor-min-mermaid~chunk-4KE642ED.Dz7Wtsqu.chunk.js";import{p as I}from"./vendor-min-mermaid~chunk-TYETAW3D.BtyKDZPW.chunk.js";import"./vendor-min-mermaid~chunk-ZWYQHTDX.7E3iJSn_.chunk.js";import"./vendor-min-mermaid~chunk-DDW4HWGY.PKwd2xVO.chunk.js";import"./vendor-min-mermaid~chunk-NA3436M7.mcdXcxqo.chunk.js";import"./vendor-min-mermaid~chunk-RRF4A5XS.DQTbkzpK.chunk.js";import{d as J}from"./vendor-min-mermaid~chunk-MEBTFSOL.Bp-bSfXW.chunk.js";import{L as K,S as N}from"./vendor-min-mermaid~chunk-YM3XIQPS.CFJjr7pQ.chunk.js";import{m as r}from"./vendor-min-mermaid~chunk-GTKDMUJJ.Cm7bUosf.chunk.js";import{F as Q,B as X,w as Y,v as j,L as q,M as U,t as y,H as Z,al as L,aI as _,T as ee,S as te,aJ as ae,p as ie}from"./vendor-min-mermaid~chunk-ZKYS2E5M.BYa6fn-6.chunk.js";import"./vendor-min-mermaid~chunk-SWO474TD.CHSSo8vP.chunk.js";import"./vendor-min-mermaid~chunk-237OD7E6.Bcsr_LnJ.chunk.js";import"./vendor-min-mermaid~chunk-JVB3IFOF.Cjc24ELG.chunk.js";import"./vendor-min-mermaid~chunk-5ZJXQJOJ.D-42vzxj.chunk.js";import"./vendor-min-mermaid~chunk-YPUTD6PB.C9Kx97Z_.chunk.js";import"./vendor-min-mermaid~chunk-6BY5RJGC.YZlq-A5J.chunk.js";import"./lib-nodepkg-typedef.aImTnp3-.chunk.js";import"./vendor-min-mermaid~chunk-TI4EEUUG.-07CF8yA.chunk.js";var re=ie.pie,T={sections:new Map,showData:!1},u=T.sections,D=T.showData,le=structuredClone(re),oe=r(()=>structuredClone(le),"getConfig"),se=r(()=>{u=new Map,D=T.showData,te()},"clear"),pe=r(({label:e,value:a})=>{u.has(e)||(u.set(e,a),y.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),ne=r(()=>u,"getSections"),de=r(e=>{D=e},"setShowData"),ce=r(()=>D,"getShowData"),O={getConfig:oe,clear:se,setDiagramTitle:U,getDiagramTitle:q,setAccTitle:j,getAccTitle:Y,setAccDescription:X,getAccDescription:Q,addSection:pe,getSections:ne,setShowData:de,getShowData:ce},me=r((e,a)=>{G(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),fe={parse:r(async e=>{let a=await I("pie",e);y.debug(a),me(a,O)},"parse")},ge=r(e=>`
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
`,"getStyles"),ue=ge,he=r(e=>{let a=[...e.entries()].map(l=>({label:l[0],value:l[1]})).sort((l,h)=>h.value-l.value);return ae().value(l=>l.value)(a)},"createPieArcs"),Se=r((e,a,l,h)=>{y.debug(`rendering pie chart
`+e);let d=h.db,v=Z(),C=K(d.getConfig(),v.pie),b=40,o=18,c=4,p=450,S=p,x=J(a),s=x.append("g");s.attr("transform","translate("+S/2+","+p/2+")");let{themeVariables:i}=v,[k]=N(i.pieOuterStrokeWidth);k??(k=2);let A=C.textPosition,m=Math.min(S,p)/2-b,R=L().innerRadius(0).outerRadius(m),B=L().innerRadius(m*A).outerRadius(m*A);s.append("circle").attr("cx",0).attr("cy",0).attr("r",m+k/2).attr("class","pieOuterCircle");let M=d.getSections(),w=he(M),W=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12],n=_(W);s.selectAll("mySlices").data(w).enter().append("path").attr("d",R).attr("fill",t=>n(t.data.label)).attr("class","pieCircle");let z=0;M.forEach(t=>{z+=t}),s.selectAll("mySlices").data(w).enter().append("text").text(t=>(t.data.value/z*100).toFixed(0)+"%").attr("transform",t=>"translate("+B.centroid(t)+")").style("text-anchor","middle").attr("class","slice"),s.append("text").text(d.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");let $=s.selectAll(".legend").data(n.domain()).enter().append("g").attr("class","legend").attr("transform",(t,f)=>{let g=o+c,E=g*n.domain().length/2,H=12*o,V=f*g-E;return"translate("+H+","+V+")"});$.append("rect").attr("width",o).attr("height",o).style("fill",n).style("stroke",n),$.data(w).append("text").attr("x",o+c).attr("y",o-c).text(t=>{let{label:f,value:g}=t.data;return d.getShowData()?`${f} [${g}]`:f});let P=Math.max(...$.selectAll("text").nodes().map(t=>(t==null?void 0:t.getBoundingClientRect().width)??0)),F=S+b+o+c+P;x.attr("viewBox",`0 0 ${F} ${p}`),ee(x,p,F,C.useMaxWidth)},"draw"),xe={draw:Se},Pe={parser:fe,db:O,renderer:xe,styles:ue};export{Pe as diagram};
