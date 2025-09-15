import { u as ur } from './vendor-min-mermaid~chunk-NIZHWIZP.41FV3HsL.chunk.js';
import { i as ia } from './vendor-min-mermaid~chunk-BF7QJ6L7.DK9jwCiC.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var d = /*#__PURE__*/ m$1((t)=>{
    let { securityLevel: m } = ur(), o = /*#__PURE__*/ ia("body");
    if (m === "sandbox") {
        let c = ia(`#i${t}`).node()?.contentDocument ?? document;
        o = /*#__PURE__*/ ia(c.body);
    }
    return o.select(`#${t}`);
}, "selectSvgElement");
export { d };
