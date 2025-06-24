import { p } from './vendor-min-mermaid~chunk-7ON4XGU6.CvQ3UDwh.chunk.js';
import { r } from './vendor-min-mermaid~chunk-BNXZNRGU.4x7lyILI.chunk.js';
import { d } from './vendor-min-mermaid~chunk-I2YQ4O7X.eSgKSoUq.chunk.js';
import { t as tt, T as Tf } from './vendor-min-mermaid~chunk-RAMAZW42.vc82q0BN.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var m = {
    parse: /*#__PURE__*/ m$1(async (t)=>{
        let e = await p("info", t);
        tt.debug(e);
    }, "parse")
};
var c = {
    version: r.version + ""
}, y = /*#__PURE__*/ m$1(()=>c.version, "getVersion"), f = {
    getVersion: y
};
var D = /*#__PURE__*/ m$1((t, e, d$1)=>{
    tt.debug(`rendering info diagram
` + t);
    let i = /*#__PURE__*/ d(e);
    Tf(i, 100, 400, true), i.append("g").append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${d$1}`);
}, "draw"), g = {
    draw: D
};
var L = {
    parser: m,
    db: f,
    renderer: g
};
export { L as diagram };
