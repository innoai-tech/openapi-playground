import{c as S}from"./vendor-min-mermaid~chunk-4KE642ED.Dz7Wtsqu.chunk.js";import{p as E}from"./vendor-min-mermaid~chunk-TYETAW3D.BtyKDZPW.chunk.js";import"./vendor-min-mermaid~chunk-ZWYQHTDX.7E3iJSn_.chunk.js";import"./vendor-min-mermaid~chunk-DDW4HWGY.PKwd2xVO.chunk.js";import"./vendor-min-mermaid~chunk-NA3436M7.mcdXcxqo.chunk.js";import"./vendor-min-mermaid~chunk-RRF4A5XS.DQTbkzpK.chunk.js";import{d as F}from"./vendor-min-mermaid~chunk-MEBTFSOL.Bp-bSfXW.chunk.js";import{L as y}from"./vendor-min-mermaid~chunk-YM3XIQPS.CFJjr7pQ.chunk.js";import{m as o}from"./vendor-min-mermaid~chunk-GTKDMUJJ.Cm7bUosf.chunk.js";import{B as I,F as z,L as P,M as B,w as R,v as D,S as W,E as w,p as G,t as V,W as _}from"./vendor-min-mermaid~chunk-ZKYS2E5M.BYa6fn-6.chunk.js";import"./vendor-min-mermaid~chunk-SWO474TD.CHSSo8vP.chunk.js";import"./vendor-min-mermaid~chunk-237OD7E6.Bcsr_LnJ.chunk.js";import"./vendor-min-mermaid~chunk-JVB3IFOF.Cjc24ELG.chunk.js";import"./vendor-min-mermaid~chunk-5ZJXQJOJ.D-42vzxj.chunk.js";import"./vendor-min-mermaid~chunk-YPUTD6PB.C9Kx97Z_.chunk.js";import"./vendor-min-mermaid~chunk-6BY5RJGC.YZlq-A5J.chunk.js";import"./lib-nodepkg-typedef.aImTnp3-.chunk.js";import"./vendor-min-mermaid~chunk-TI4EEUUG.-07CF8yA.chunk.js";var u={showLegend:!0,ticks:5,max:null,min:0,graticule:"circle"},b={axes:[],curves:[],options:u},h=structuredClone(b),j=G.radar,H=o(()=>y({...j,...w().radar}),"getConfig"),M=o(()=>h.axes,"getAxes"),Z=o(()=>h.curves,"getCurves"),q=o(()=>h.options,"getOptions"),J=o(a=>{h.axes=a.map(t=>({name:t.name,label:t.label??t.name}))},"setAxes"),K=o(a=>{h.curves=a.map(t=>({name:t.name,label:t.label??t.name,entries:N(t.entries)}))},"setCurves"),N=o(a=>{if(a[0].axis==null)return a.map(e=>e.value);let t=M();if(t.length===0)throw new Error("Axes must be populated before curves for reference entries");return t.map(e=>{let r=a.find(i=>{var n;return((n=i.axis)==null?void 0:n.$refText)===e.name});if(r===void 0)throw new Error("Missing entry for axis "+e.label);return r.value})},"computeCurveEntries"),Q=o(a=>{var e,r,i,n,l;let t=a.reduce((s,c)=>(s[c.name]=c,s),{});h.options={showLegend:((e=t.showLegend)==null?void 0:e.value)??u.showLegend,ticks:((r=t.ticks)==null?void 0:r.value)??u.ticks,max:((i=t.max)==null?void 0:i.value)??u.max,min:((n=t.min)==null?void 0:n.value)??u.min,graticule:((l=t.graticule)==null?void 0:l.value)??u.graticule}},"setOptions"),U=o(()=>{W(),h=structuredClone(b)},"clear"),$={getAxes:M,getCurves:Z,getOptions:q,setAxes:J,setCurves:K,setOptions:Q,getConfig:H,clear:U,setAccTitle:D,getAccTitle:R,setDiagramTitle:B,getDiagramTitle:P,getAccDescription:z,setAccDescription:I},X=o(a=>{S(a,$);let{axes:t,curves:e,options:r}=a;$.setAxes(t),$.setCurves(e),$.setOptions(r)},"populate"),Y={parse:o(async a=>{let t=await E("radar",a);V.debug(t),X(t)},"parse")},tt=o((a,t,e,r)=>{let i=r.db,n=i.getAxes(),l=i.getCurves(),s=i.getOptions(),c=i.getConfig(),d=i.getDiagramTitle(),m=F(t),p=et(m,c),g=s.max??Math.max(...l.map(v=>Math.max(...v.entries))),x=s.min,f=Math.min(c.width,c.height)/2;at(p,n,f,s.ticks,s.graticule),rt(p,n,f,c),L(p,n,l,x,g,s.graticule,c),k(p,l,s.showLegend,c),p.append("text").attr("class","radarTitle").text(d).attr("x",0).attr("y",-c.height/2-c.marginTop)},"draw"),et=o((a,t)=>{let e=t.width+t.marginLeft+t.marginRight,r=t.height+t.marginTop+t.marginBottom,i={x:t.marginLeft+t.width/2,y:t.marginTop+t.height/2};return a.attr("viewbox",`0 0 ${e} ${r}`).attr("width",e).attr("height",r),a.append("g").attr("transform",`translate(${i.x}, ${i.y})`)},"drawFrame"),at=o((a,t,e,r,i)=>{if(i==="circle")for(let n=0;n<r;n++){let l=e*(n+1)/r;a.append("circle").attr("r",l).attr("class","radarGraticule")}else if(i==="polygon"){let n=t.length;for(let l=0;l<r;l++){let s=e*(l+1)/r,c=t.map((d,m)=>{let p=2*m*Math.PI/n-Math.PI/2,g=s*Math.cos(p),x=s*Math.sin(p);return`${g},${x}`}).join(" ");a.append("polygon").attr("points",c).attr("class","radarGraticule")}}},"drawGraticule"),rt=o((a,t,e,r)=>{let i=t.length;for(let n=0;n<i;n++){let l=t[n].label,s=2*n*Math.PI/i-Math.PI/2;a.append("line").attr("x1",0).attr("y1",0).attr("x2",e*r.axisScaleFactor*Math.cos(s)).attr("y2",e*r.axisScaleFactor*Math.sin(s)).attr("class","radarAxisLine"),a.append("text").text(l).attr("x",e*r.axisLabelFactor*Math.cos(s)).attr("y",e*r.axisLabelFactor*Math.sin(s)).attr("class","radarAxisLabel")}},"drawAxes");function L(a,t,e,r,i,n,l){let s=t.length,c=Math.min(l.width,l.height)/2;e.forEach((d,m)=>{if(d.entries.length!==s)return;let p=d.entries.map((g,x)=>{let f=2*Math.PI*x/s-Math.PI/2,v=C(g,r,i,c),A=v*Math.cos(f),O=v*Math.sin(f);return{x:A,y:O}});n==="circle"?a.append("path").attr("d",T(p,l.curveTension)).attr("class",`radarCurve-${m}`):n==="polygon"&&a.append("polygon").attr("points",p.map(g=>`${g.x},${g.y}`).join(" ")).attr("class",`radarCurve-${m}`)})}o(L,"drawCurves");function C(a,t,e,r){let i=Math.min(Math.max(a,t),e);return r*(i-t)/(e-t)}o(C,"relativeRadius");function T(a,t){let e=a.length,r=`M${a[0].x},${a[0].y}`;for(let i=0;i<e;i++){let n=a[(i-1+e)%e],l=a[i],s=a[(i+1)%e],c=a[(i+2)%e],d={x:l.x+(s.x-n.x)*t,y:l.y+(s.y-n.y)*t},m={x:s.x-(c.x-l.x)*t,y:s.y-(c.y-l.y)*t};r+=` C${d.x},${d.y} ${m.x},${m.y} ${s.x},${s.y}`}return`${r} Z`}o(T,"closedRoundCurve");function k(a,t,e,r){if(!e)return;let i=(r.width/2+r.marginRight)*3/4,n=-(r.height/2+r.marginTop)*3/4,l=20;t.forEach((s,c)=>{let d=a.append("g").attr("transform",`translate(${i}, ${n+c*l})`);d.append("rect").attr("width",12).attr("height",12).attr("class",`radarLegendBox-${c}`),d.append("text").attr("x",16).attr("y",0).attr("class","radarLegendText").text(s.label)})}o(k,"drawLegend");var it={draw:tt},st=o((a,t)=>{let e="";for(let r=0;r<a.THEME_COLOR_LIMIT;r++){let i=a[`cScale${r}`];e+=`
		.radarCurve-${r} {
			color: ${i};
			fill: ${i};
			fill-opacity: ${t.curveOpacity};
			stroke: ${i};
			stroke-width: ${t.curveStrokeWidth};
		}
		.radarLegendBox-${r} {
			fill: ${i};
			fill-opacity: ${t.curveOpacity};
			stroke: ${i};
		}
		`}return e},"genIndexStyles"),nt=o(a=>{let t=_(),e=w(),r=y(t,e.themeVariables),i=y(r.radar,a);return{themeVariables:r,radarOptions:i}},"buildRadarStyleOptions"),lt=o(({radar:a}={})=>{let{themeVariables:t,radarOptions:e}=nt(a);return`
	.radarTitle {
		font-size: ${t.fontSize};
		color: ${t.titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${e.axisColor};
		stroke-width: ${e.axisStrokeWidth};
	}
	.radarAxisLabel {
		dominant-baseline: middle;
		text-anchor: middle;
		font-size: ${e.axisLabelFontSize}px;
		color: ${e.axisColor};
	}
	.radarGraticule {
		fill: ${e.graticuleColor};
		fill-opacity: ${e.graticuleOpacity};
		stroke: ${e.graticuleColor};
		stroke-width: ${e.graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${e.legendFontSize}px;
		dominant-baseline: hanging;
	}
	${st(t,e)}
	`},"styles"),Tt={parser:Y,db:$,renderer:it,styles:lt};export{Tt as diagram};
