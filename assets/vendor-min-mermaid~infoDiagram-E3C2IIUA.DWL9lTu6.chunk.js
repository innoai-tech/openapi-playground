import { p } from "./vendor-min-mermaid~chunk-TYETAW3D.DPkD-c0C.chunk.js";
import "./vendor-min-mermaid~chunk-ZWYQHTDX.BfhYjC6o.chunk.js";
import "./vendor-min-mermaid~chunk-DDW4HWGY.ZoJLOt6K.chunk.js";
import "./vendor-min-mermaid~chunk-NA3436M7.DG84OIGm.chunk.js";
import "./vendor-min-mermaid~chunk-RRF4A5XS.CCpQ3CSD.chunk.js";
import { r } from "./vendor-min-mermaid~chunk-HQLFZTFY.B_Iiq6uF.chunk.js";
import { d } from "./vendor-min-mermaid~chunk-MEBTFSOL.B7bUe0lZ.chunk.js";
import { t as tt, T as Tf } from "./vendor-min-mermaid~chunk-ZKYS2E5M.CwhZsQ7z.chunk.js";
import "./vendor-min-mermaid~chunk-SWO474TD.DyTty_i1.chunk.js";
import "./vendor-min-mermaid~chunk-237OD7E6.DYMr3-lc.chunk.js";
import "./vendor-min-mermaid~chunk-JVB3IFOF.CyFWjgvM.chunk.js";
import "./vendor-min-mermaid~chunk-5ZJXQJOJ.DZaYt2YO.chunk.js";
import "./vendor-min-mermaid~chunk-YPUTD6PB.DtdPbVSC.chunk.js";
import "./vendor-min-mermaid~chunk-6BY5RJGC.BwVspKnk.chunk.js";
import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Cm_2-rE8.chunk.js";
import "./lib-nodepkg-typedef.zwRRER3a.chunk.js";
var m = {
  parse: m$1(async (t) => {
    let e = await p("info", t);
    tt.debug(e);
  }, "parse")
};
var c = {
  version: r.version
}, D = m$1(() => c.version, "getVersion"), f = {
  getVersion: D
};
var y = m$1((t, e, d$1) => {
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
export {
  T as diagram
};
