import { h as hh, k as kh } from './vendor-min-mermaid~chunk-F632ZYSZ.C3jO8jR6.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var d = /*#__PURE__*/ m$1((t)=>{
    let { securityLevel: m } = hh(), o = /*#__PURE__*/ kh("body");
    if (m === "sandbox") {
        let c = kh(`#i${t}`).node()?.contentDocument ?? document;
        o = /*#__PURE__*/ kh(c.body);
    }
    return o.select(`#${t}`);
}, "selectSvgElement");
export { d };
