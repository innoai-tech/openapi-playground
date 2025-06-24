import { H as Hl, i as ih } from './vendor-min-mermaid~chunk-RAMAZW42.vc82q0BN.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var d = /*#__PURE__*/ m$1((t)=>{
    let { securityLevel: m } = Hl(), o = /*#__PURE__*/ ih("body");
    if (m === "sandbox") {
        let c = ih(`#i${t}`).node()?.contentDocument ?? document;
        o = /*#__PURE__*/ ih(c.body);
    }
    return o.select(`#${t}`);
}, "selectSvgElement");
export { d };
