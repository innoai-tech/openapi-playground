import { p } from './vendor-min-mermaid~chunk-TYETAW3D.B6jYVrrq.chunk.js';
import './vendor-min-mermaid~chunk-ZWYQHTDX.BfNyOulB.chunk.js';
import './vendor-min-mermaid~chunk-DDW4HWGY.B_oUyk4S.chunk.js';
import './vendor-min-mermaid~chunk-NA3436M7.DAl4H7Q0.chunk.js';
import './vendor-min-mermaid~chunk-RRF4A5XS.D2gvTaY0.chunk.js';
import { r } from './vendor-min-mermaid~chunk-HQLFZTFY.rv6MGoR1.chunk.js';
import { d } from './vendor-min-mermaid~chunk-MEBTFSOL.cBCPBz3V.chunk.js';
import { t as tt, T as Tf } from './vendor-min-mermaid~chunk-ZKYS2E5M.BBMfbsl4.chunk.js';
import './vendor-min-mermaid~chunk-SWO474TD.BOU47BIX.chunk.js';
import './vendor-min-mermaid~chunk-237OD7E6.BKg_Ewl_.chunk.js';
import './vendor-min-mermaid~chunk-JVB3IFOF.DXQY8UJ9.chunk.js';
import './vendor-min-mermaid~chunk-5ZJXQJOJ.DbrINuy3.chunk.js';
import './vendor-min-mermaid~chunk-YPUTD6PB.B-36bjU_.chunk.js';
import './vendor-min-mermaid~chunk-6BY5RJGC.DU6P-5on.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.ByXaayWf.chunk.js';
import './lib-nodepkg-typedef.BfNI1ZyL.chunk.js';
var m = {
    parse: m$1(async (t)=>{
        let e = await p("info", t);
        tt.debug(e);
    }, "parse")
};
var c = {
    version: r.version
}, D = m$1(()=>c.version, "getVersion"), f = {
    getVersion: D
};
var y = m$1((t, e, d$1)=>{
    tt.debug(`rendering info diagram
` + t);
    let i = d(e);
    Tf(i, 100, 400, true), i.append("g").append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${d$1}`);
}, "draw"), g = {
    draw: y
};
var T = {
    parser: m,
    db: f,
    renderer: g
};
export { T as diagram };
