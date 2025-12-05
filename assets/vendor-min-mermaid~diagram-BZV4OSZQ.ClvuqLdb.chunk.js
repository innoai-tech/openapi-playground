import{$ as e,A as t,F as n,G as r,I as i,Mn as a,Q as o,W as s,et as c,hn as l,jn as u,k as d,m as f,pt as p,q as m}from"./vendor-min-mermaid~architectureDiagram-4X3Z3J56.BpJofp52.chunk.js";import{Q as h}from"./vendor-min-mermaid~architecture-U656AL7Q-3ZQKGQJL.j2WEiM7o.chunk.js";var g=s.packet,_=class{constructor(){this.packet=[],this.setAccTitle=i,this.getAccTitle=o,this.setDiagramTitle=p,this.getDiagramTitle=e,this.getAccDescription=t,this.setAccDescription=n}static{h(this,`PacketDB`)}getConfig(){let e=f({...g,...m().packet});return e.showBits&&(e.paddingY+=10),e}getPacket(){return this.packet}pushWord(e){e.length>0&&this.packet.push(e)}clear(){r(),this.packet=[]}},v=1e4,y=h((e,t)=>{a(e,t);let n=-1,r=[],i=1,{bitsPerRow:o}=t.getConfig();for(let{start:a,end:s,bits:c,label:u}of e.blocks){if(a!==void 0&&s!==void 0&&s<a)throw Error(`Packet block ${a} - ${s} is invalid. End must be greater than start.`);if(a??=n+1,a!==n+1)throw Error(`Packet block ${a} - ${s??a} is not contiguous. It should start from ${n+1}.`);if(c===0)throw Error(`Packet block ${a} is invalid. Cannot have a zero bit field.`);for(s??=a+(c??1)-1,c??=s-a+1,n=s,l.debug(`Packet block ${a} - ${n} with label ${u}`);r.length<=o+1&&t.getPacket().length<v;){let[e,n]=b({start:a,end:s,bits:c,label:u},i,o);if(r.push(e),e.end+1===i*o&&(t.pushWord(r),r=[],i++),!n)break;({start:a,end:s,bits:c,label:u}=n)}}t.pushWord(r)},`populate`),b=h((e,t,n)=>{if(e.start===void 0)throw Error(`start should have been set during first phase`);if(e.end===void 0)throw Error(`end should have been set during first phase`);if(e.start>e.end)throw Error(`Block start ${e.start} is greater than block end ${e.end}.`);if(e.end+1<=t*n)return[e,void 0];let r=t*n-1,i=t*n;return[{start:e.start,end:r,label:e.label,bits:r-e.start},{start:i,end:e.end,label:e.label,bits:e.end-i}]},`getNextFittingBlock`),x={parser:{yy:void 0},parse:h(async e=>{let t=await u(`packet`,e),n=x.parser?.yy;if(!(n instanceof _))throw Error(`parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.`);l.debug(t),y(t,n)},`parse`)},S=h((e,t,n,r)=>{let i=r.db,a=i.getConfig(),{rowHeight:o,paddingY:s,bitWidth:l,bitsPerRow:u}=a,f=i.getPacket(),p=i.getDiagramTitle(),m=o+s,h=m*(f.length+1)-(p?0:o),g=l*u+2,_=d(t);_.attr(`viewbox`,`0 0 ${g} ${h}`),c(_,h,g,a.useMaxWidth);for(let[e,t]of f.entries())C(_,t,e,a);_.append(`text`).text(p).attr(`x`,g/2).attr(`y`,h-m/2).attr(`dominant-baseline`,`middle`).attr(`text-anchor`,`middle`).attr(`class`,`packetTitle`)},`draw`),C=h((e,t,n,{rowHeight:r,paddingX:i,paddingY:a,bitWidth:o,bitsPerRow:s,showBits:c})=>{let l=e.append(`g`),u=n*(r+a)+a;for(let e of t){let t=e.start%s*o+1,n=(e.end-e.start+1)*o-i;if(l.append(`rect`).attr(`x`,t).attr(`y`,u).attr(`width`,n).attr(`height`,r).attr(`class`,`packetBlock`),l.append(`text`).attr(`x`,t+n/2).attr(`y`,u+r/2).attr(`class`,`packetLabel`).attr(`dominant-baseline`,`middle`).attr(`text-anchor`,`middle`).text(e.label),!c)continue;let a=e.end===e.start,d=u-2;l.append(`text`).attr(`x`,t+(a?n/2:0)).attr(`y`,d).attr(`class`,`packetByte start`).attr(`dominant-baseline`,`auto`).attr(`text-anchor`,a?`middle`:`start`).text(e.start),a||l.append(`text`).attr(`x`,t+n).attr(`y`,d).attr(`class`,`packetByte end`).attr(`dominant-baseline`,`auto`).attr(`text-anchor`,`end`).text(e.end)}},`drawWord`),w={draw:S},T={byteFontSize:`10px`,startByteColor:`black`,endByteColor:`black`,labelColor:`black`,labelFontSize:`12px`,titleColor:`black`,titleFontSize:`14px`,blockStrokeColor:`black`,blockStrokeWidth:`1`,blockFillColor:`#efefef`},E={parser:x,get db(){return new _},renderer:w,styles:h(({packet:e}={})=>{let t=f(T,e);return`
	.packetByte {
		font-size: ${t.byteFontSize};
	}
	.packetByte.start {
		fill: ${t.startByteColor};
	}
	.packetByte.end {
		fill: ${t.endByteColor};
	}
	.packetLabel {
		fill: ${t.labelColor};
		font-size: ${t.labelFontSize};
	}
	.packetTitle {
		fill: ${t.titleColor};
		font-size: ${t.titleFontSize};
	}
	.packetBlock {
		stroke: ${t.blockStrokeColor};
		stroke-width: ${t.blockStrokeWidth};
		fill: ${t.blockFillColor};
	}
	`},`styles`)};export{E as t};