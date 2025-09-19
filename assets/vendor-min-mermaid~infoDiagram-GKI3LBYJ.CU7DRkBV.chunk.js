import { p } from './vendor-min-mermaid~chunk-353K7GK5.CQl9dugQ.chunk.js';
import { r } from './vendor-min-mermaid~chunk-4HFYJGYH.BcLJPhdf.chunk.js';
import { d } from './vendor-min-mermaid~chunk-ASAHGCDZ.PWqm5q10.chunk.js';
import { W as Wo } from './vendor-min-mermaid~chunk-KXVH62NG.CUpUCMGK.chunk.js';
import { p as pt } from './vendor-min-mermaid~chunk-63GW7ZVL.CUmzAGpZ.chunk.js';
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
    Wo(i, 100, 400, true), i.append("g").append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${d$1}`);
}, "draw"), g = {
    draw: D
};
var L = {
    parser: m,
    db: f,
    renderer: g
};
export { L as diagram };
