import{c as B}from"./vendor-min-mermaid~chunk-4KE642ED.Dz7Wtsqu.chunk.js";import{p as P}from"./vendor-min-mermaid~chunk-TYETAW3D.BtyKDZPW.chunk.js";import"./vendor-min-mermaid~chunk-ZWYQHTDX.7E3iJSn_.chunk.js";import"./vendor-min-mermaid~chunk-DDW4HWGY.PKwd2xVO.chunk.js";import"./vendor-min-mermaid~chunk-NA3436M7.mcdXcxqo.chunk.js";import"./vendor-min-mermaid~chunk-RRF4A5XS.DQTbkzpK.chunk.js";import{d as S}from"./vendor-min-mermaid~chunk-MEBTFSOL.Bp-bSfXW.chunk.js";import{L as u}from"./vendor-min-mermaid~chunk-YM3XIQPS.CFJjr7pQ.chunk.js";import{m as i}from"./vendor-min-mermaid~chunk-GTKDMUJJ.Cm7bUosf.chunk.js";import{B as v,F,L as T,M as W,w as z,v as D,T as E,S as L,E as A,p as M,t as x}from"./vendor-min-mermaid~chunk-ZKYS2E5M.BYa6fn-6.chunk.js";import"./vendor-min-mermaid~chunk-SWO474TD.CHSSo8vP.chunk.js";import"./vendor-min-mermaid~chunk-237OD7E6.Bcsr_LnJ.chunk.js";import"./vendor-min-mermaid~chunk-JVB3IFOF.Cjc24ELG.chunk.js";import"./vendor-min-mermaid~chunk-5ZJXQJOJ.D-42vzxj.chunk.js";import"./vendor-min-mermaid~chunk-YPUTD6PB.C9Kx97Z_.chunk.js";import"./vendor-min-mermaid~chunk-6BY5RJGC.YZlq-A5J.chunk.js";import"./lib-nodepkg-typedef.aImTnp3-.chunk.js";import"./vendor-min-mermaid~chunk-TI4EEUUG.-07CF8yA.chunk.js";var w={packet:[]},$=structuredClone(w),R=M.packet,Y=i(()=>{let t=u({...R,...A().packet});return t.showBits&&(t.paddingY+=10),t},"getConfig"),H=i(()=>$.packet,"getPacket"),I=i(t=>{t.length>0&&$.packet.push(t)},"pushWord"),N=i(()=>{L(),$=structuredClone(w)},"clear"),h={pushWord:I,getPacket:H,getConfig:Y,clear:N,setAccTitle:D,getAccTitle:z,setDiagramTitle:W,getDiagramTitle:T,getAccDescription:F,setAccDescription:v},X=1e4,q=i(t=>{B(t,h);let e=-1,o=[],s=1,{bitsPerRow:n}=h.getConfig();for(let{start:a,end:r,label:p}of t.blocks){if(r&&r<a)throw new Error(`Packet block ${a} - ${r} is invalid. End must be greater than start.`);if(a!==e+1)throw new Error(`Packet block ${a} - ${r??a} is not contiguous. It should start from ${e+1}.`);for(e=r??a,x.debug(`Packet block ${a} - ${e} with label ${p}`);o.length<=n+1&&h.getPacket().length<X;){let[m,d]=K({start:a,end:r,label:p},s,n);if(o.push(m),m.end+1===s*n&&(h.pushWord(o),o=[],s++),!d)break;({start:a,end:r,label:p}=d)}}h.pushWord(o)},"populate"),K=i((t,e,o)=>{if(t.end===void 0&&(t.end=t.start),t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);return t.end+1<=e*o?[t,void 0]:[{start:t.start,end:e*o-1,label:t.label},{start:e*o,end:t.end,label:t.label}]},"getNextFittingBlock"),O={parse:i(async t=>{let e=await P("packet",t);x.debug(e),q(e)},"parse")},U=i((t,e,o,s)=>{let n=s.db,a=n.getConfig(),{rowHeight:r,paddingY:p,bitWidth:m,bitsPerRow:d}=a,g=n.getPacket(),l=n.getDiagramTitle(),k=r+p,c=k*(g.length+1)-(l?0:r),b=m*d+2,f=S(e);f.attr("viewbox",`0 0 ${b} ${c}`),E(f,c,b,a.useMaxWidth);for(let[y,C]of g.entries())V(f,C,y,a);f.append("text").text(l).attr("x",b/2).attr("y",c-k/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),V=i((t,e,o,{rowHeight:s,paddingX:n,paddingY:a,bitWidth:r,bitsPerRow:p,showBits:m})=>{let d=t.append("g"),g=o*(s+a)+a;for(let l of e){let k=l.start%p*r+1,c=(l.end-l.start+1)*r-n;if(d.append("rect").attr("x",k).attr("y",g).attr("width",c).attr("height",s).attr("class","packetBlock"),d.append("text").attr("x",k+c/2).attr("y",g+s/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(l.label),!m)continue;let b=l.end===l.start,f=g-2;d.append("text").attr("x",k+(b?c/2:0)).attr("y",f).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",b?"middle":"start").text(l.start),b||d.append("text").attr("x",k+c).attr("y",f).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(l.end)}},"drawWord"),_={draw:U},j={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},G=i(({packet:t}={})=>{let e=u(j,t);return`
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
	`},"styles"),mt={parser:O,db:h,renderer:_,styles:G};export{mt as diagram};
