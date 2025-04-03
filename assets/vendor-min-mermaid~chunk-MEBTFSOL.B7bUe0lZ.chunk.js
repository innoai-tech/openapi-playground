import { H as Hl, i as ih } from "./vendor-min-mermaid~chunk-ZKYS2E5M.CwhZsQ7z.chunk.js";
import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Cm_2-rE8.chunk.js";
var d = m$1((t) => {
  var _a;
  let { securityLevel: m } = Hl(), o = ih("body");
  if (m === "sandbox") {
    let c = ((_a = ih(`#i${t}`).node()) == null ? void 0 : _a.contentDocument) ?? document;
    o = ih(c.body);
  }
  return o.select(`#${t}`);
}, "selectSvgElement");
export {
  d
};
