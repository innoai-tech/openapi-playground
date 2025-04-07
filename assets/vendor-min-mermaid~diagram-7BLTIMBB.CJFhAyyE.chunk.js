import { c } from './vendor-min-mermaid~chunk-4KE642ED.DT_kwRCI.chunk.js';
import { p } from './vendor-min-mermaid~chunk-TYETAW3D.DJav1qZK.chunk.js';
import './vendor-min-mermaid~chunk-ZWYQHTDX.DFJaJ1Bq.chunk.js';
import './vendor-min-mermaid~chunk-DDW4HWGY.DqOJrDrP.chunk.js';
import './vendor-min-mermaid~chunk-NA3436M7.CDBfYXei.chunk.js';
import './vendor-min-mermaid~chunk-RRF4A5XS.Dd8IPC1I.chunk.js';
import { d as d$1 } from './vendor-min-mermaid~chunk-MEBTFSOL.78hp4T_X.chunk.js';
import { L as Le } from './vendor-min-mermaid~chunk-YM3XIQPS.DKaCvsLP.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.GEYjlfbR.chunk.js';
import { B as Bf, F as Ff, L as Lf, M as Mf, w as wf, v as vf, T as Tf, S as Sf, E as Er, p as pl, t as tt } from './vendor-min-mermaid~chunk-ZKYS2E5M.CRzVS5tA.chunk.js';
import './vendor-min-mermaid~chunk-SWO474TD.COHIkMiZ.chunk.js';
import './vendor-min-mermaid~chunk-237OD7E6.CyYhG9YR.chunk.js';
import './vendor-min-mermaid~chunk-JVB3IFOF.BCk7jw1q.chunk.js';
import './vendor-min-mermaid~chunk-5ZJXQJOJ.CA0YTDyr.chunk.js';
import './vendor-min-mermaid~chunk-YPUTD6PB.CrSOLbEk.chunk.js';
import './vendor-min-mermaid~chunk-6BY5RJGC.Bez5tDRE.chunk.js';
import './lib-nodepkg-typedef.CzjpWxrC.chunk.js';
import './vendor-min-mermaid~chunk-TI4EEUUG.B8ATTVmr.chunk.js';

var T={packet:[]},D=structuredClone(T),q=pl.packet,V=m$1(()=>{let t=Le({...q,...Er().packet});return t.showBits&&(t.paddingY+=10),t},"getConfig"),L=m$1(()=>D.packet,"getPacket"),N=m$1(t=>{t.length>0&&D.packet.push(t);},"pushWord"),I=m$1(()=>{Sf(),D=structuredClone(T);},"clear"),d={pushWord:N,getPacket:L,getConfig:V,clear:I,setAccTitle:vf,getAccTitle:wf,setDiagramTitle:Mf,getDiagramTitle:Lf,getAccDescription:Ff,setAccDescription:Bf};var M=1e4,Y=m$1(t=>{c(t,d);let e=-1,i=[],s=1,{bitsPerRow:c$1}=d.getConfig();for(let{start:r,end:o,label:m}of t.blocks){if(o&&o<r)throw new Error(`Packet block ${r} - ${o} is invalid. End must be greater than start.`);if(r!==e+1)throw new Error(`Packet block ${r} - ${o??r} is not contiguous. It should start from ${e+1}.`);for(e=o??r,tt.debug(`Packet block ${r} - ${e} with label ${m}`);i.length<=c$1+1&&d.getPacket().length<M;){let[y,l]=U({start:r,end:o,label:m},s,c$1);if(i.push(y),y.end+1===s*c$1&&(d.pushWord(i),i=[],s++),!l)break;({start:r,end:o,label:m}=l);}}d.pushWord(i);},"populate"),U=m$1((t,e,i)=>{if(t.end===void 0&&(t.end=t.start),t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);return t.end+1<=e*i?[t,void 0]:[{start:t.start,end:e*i-1,label:t.label},{start:e*i,end:t.end,label:t.label}]},"getNextFittingBlock"),A={parse:m$1(async t=>{let e=await p("packet",t);tt.debug(e),Y(e);},"parse")};var H=m$1((t,e,i,s)=>{let c=s.db,r=c.getConfig(),{rowHeight:o,paddingY:m,bitWidth:y,bitsPerRow:l}=r,P=c.getPacket(),n=c.getDiagramTitle(),f=o+m,p=f*(P.length+1)-(n?0:o),k=y*l+2,g=d$1(e);g.attr("viewbox",`0 0 ${k} ${p}`),Tf(g,p,k,r.useMaxWidth);for(let[O,_]of P.entries())K(g,_,O,r);g.append("text").text(n).attr("x",k/2).attr("y",p-f/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle");},"draw"),K=m$1((t,e,i,{rowHeight:s,paddingX:c,paddingY:r,bitWidth:o,bitsPerRow:m,showBits:y})=>{let l=t.append("g"),P=i*(s+r)+r;for(let n of e){let f=n.start%m*o+1,p=(n.end-n.start+1)*o-c;if(l.append("rect").attr("x",f).attr("y",P).attr("width",p).attr("height",s).attr("class","packetBlock"),l.append("text").attr("x",f+p/2).attr("y",P+s/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(n.label),!y)continue;let k=n.end===n.start,g=P-2;l.append("text").attr("x",f+(k?p/2:0)).attr("y",g).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",k?"middle":"start").text(n.start),k||l.append("text").attr("x",f+p).attr("y",g).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(n.end);}},"drawWord"),E={draw:H};var X={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},R=m$1(({packet:t}={})=>{let e=Le(X,t);return `
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`},"styles");var Dt={parser:A,db:d,renderer:E,styles:R};

export { Dt as diagram };
