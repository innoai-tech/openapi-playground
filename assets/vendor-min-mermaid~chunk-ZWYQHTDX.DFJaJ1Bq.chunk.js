import { U, N as Nc, z as za, A as Ac, E as Ec, X as Xg, Y as Yg, H as HS, V as VS } from './vendor-min-mermaid~chunk-JVB3IFOF.BCk7jw1q.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.GEYjlfbR.chunk.js';

var C=class extends Yg{static{m$1(this,"PieTokenBuilder");}static{U(this,"PieTokenBuilder");}constructor(){super(["pie","showData"]);}},P=class extends Xg{static{m$1(this,"PieValueConverter");}static{U(this,"PieValueConverter");}runCustomConverter(i,r,a){if(i.name==="PIE_SECTION_LABEL")return r.replace(/"/g,"").trim()}},p={parser:{TokenBuilder:U(()=>new C,"TokenBuilder"),ValueConverter:U(()=>new P,"ValueConverter")}};function M(i=Nc){let r=za(Ac(i),VS),a=za(Ec({shared:r}),HS,p);return r.ServiceRegistry.register(a),{shared:r,Pie:a}}m$1(M,"createPieServices");U(M,"createPieServices");

export { M, p };
