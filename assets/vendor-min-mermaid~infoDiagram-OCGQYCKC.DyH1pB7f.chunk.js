import { p } from './vendor-min-mermaid~chunk-VXOIP5OY.BXgSrDug.chunk.js';
import { r } from './vendor-min-mermaid~chunk-4SMFJXQ7.Dyu_Mp1h.chunk.js';
import { d } from './vendor-min-mermaid~chunk-ZKOTWRZ5.C1eh_0yz.chunk.js';
import { t as tt, Y as Yf } from './vendor-min-mermaid~chunk-63ZE7VZ5.CfadwiGU.chunk.js';
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
    Yf(i, 100, 400, true), i.append("g").append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${d$1}`);
}, "draw"), g = {
    draw: D
};
var L = {
    parser: m,
    db: f,
    renderer: g
};
export { L as diagram };
