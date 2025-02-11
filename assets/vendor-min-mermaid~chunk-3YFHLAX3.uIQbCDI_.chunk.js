import { W as Wl, r as rh } from "./vendor-min-mermaid~chunk-OR2G2HG5.D15VT8Rm.chunk.js";
import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js";
var d = /* @__PURE__ */ m$1((t) => {
  var _a;
  let { securityLevel: m } = Wl(), o = /* @__PURE__ */ rh("body");
  if (m === "sandbox") {
    let c = ((_a = rh(`#i${t}`).node()) == null ? void 0 : _a.contentDocument) ?? document;
    o = /* @__PURE__ */ rh(c.body);
  }
  return o.select(`#${t}`);
}, "selectSvgElement");
export {
  d
};
