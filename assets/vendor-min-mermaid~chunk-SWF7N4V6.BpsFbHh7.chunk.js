import { H as Hl, i as ih } from "./vendor-min-mermaid~chunk-QJLC67TO.Dw34GYds.chunk.js";
import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js";
var d = /* @__PURE__ */ m$1((t) => {
  var _a;
  let { securityLevel: m } = Hl(), o = /* @__PURE__ */ ih("body");
  if (m === "sandbox") {
    let c = ((_a = ih(`#i${t}`).node()) == null ? void 0 : _a.contentDocument) ?? document;
    o = /* @__PURE__ */ ih(c.body);
  }
  return o.select(`#${t}`);
}, "selectSvgElement");
export {
  d
};
