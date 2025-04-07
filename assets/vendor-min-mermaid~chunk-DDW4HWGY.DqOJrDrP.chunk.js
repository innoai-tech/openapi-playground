import { U, N as Nc, z as za, A as Ac, E as Ec, X as Xg, Y as Yg, a as zS, V as VS } from './vendor-min-mermaid~chunk-JVB3IFOF.BCk7jw1q.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.GEYjlfbR.chunk.js';

var A=class extends Yg{static{m$1(this,"ArchitectureTokenBuilder");}static{U(this,"ArchitectureTokenBuilder");}constructor(){super(["architecture"]);}},C=class extends Xg{static{m$1(this,"ArchitectureValueConverter");}static{U(this,"ArchitectureValueConverter");}runCustomConverter(t,e,a){if(t.name==="ARCH_ICON")return e.replace(/[()]/g,"").trim();if(t.name==="ARCH_TEXT_ICON")return e.replace(/["()]/g,"");if(t.name==="ARCH_TITLE")return e.replace(/[[\]]/g,"").trim()}},v={parser:{TokenBuilder:U(()=>new A,"TokenBuilder"),ValueConverter:U(()=>new C,"ValueConverter")}};function T(t=Nc){let e=za(Ac(t),VS),a=za(Ec({shared:e}),zS,v);return e.ServiceRegistry.register(a),{shared:e,Architecture:a}}m$1(T,"createArchitectureServices");U(T,"createArchitectureServices");

export { T, v };
