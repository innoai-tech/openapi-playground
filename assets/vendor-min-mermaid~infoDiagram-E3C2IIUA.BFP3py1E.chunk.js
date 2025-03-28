import { p } from "./vendor-min-mermaid~chunk-TYETAW3D.CeRWRUyj.chunk.js";
import { r } from "./vendor-min-mermaid~chunk-HQLFZTFY.B_Iiq6uF.chunk.js";
import { d } from "./vendor-min-mermaid~chunk-MEBTFSOL.COFhfWId.chunk.js";
import { t as tt, T as Tf } from "./vendor-min-mermaid~chunk-ZKYS2E5M.BYv2PEOY.chunk.js";
import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js";
var m = {
  parse: /* @__PURE__ */ m$1(async (t) => {
    let e = await p("info", t);
    tt.debug(e);
  }, "parse")
};
var c = {
  version: r.version
}, D = /* @__PURE__ */ m$1(() => c.version, "getVersion"), f = {
  getVersion: D
};
var y = /* @__PURE__ */ m$1((t, e, d$1) => {
  tt.debug(`rendering info diagram
` + t);
  let i = /* @__PURE__ */ d(e);
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
