import { p } from './vendor-min-mermaid~chunk-NPRLVKJ3.0d4ampid.chunk.js';
import { r } from './vendor-min-mermaid~chunk-DOAV5WWK.CJyzGX7Y.chunk.js';
import { d } from './vendor-min-mermaid~chunk-L2GBLFDY.bt0T5m3z.chunk.js';
import { R as Ro } from './vendor-min-mermaid~chunk-NIZHWIZP.41FV3HsL.chunk.js';
import { p as pt } from './vendor-min-mermaid~chunk-BF7QJ6L7.DK9jwCiC.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var m = {
    parse: /*#__PURE__*/ m$1(async (t)=>{
        let e = await p("info", t);
        pt.debug(e);
    }, "parse")
};
var c = {
    version: r.version + ""
}, y = /*#__PURE__*/ m$1(()=>c.version, "getVersion"), f = {
    getVersion: y
};
var D = /*#__PURE__*/ m$1((t, e, d$1)=>{
    pt.debug(`rendering info diagram
` + t);
    let i = /*#__PURE__*/ d(e);
    Ro(i, 100, 400, true), i.append("g").append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${d$1}`);
}, "draw"), g = {
    draw: D
};
var L = {
    parser: m,
    db: f,
    renderer: g
};
export { L as diagram };
