import { i as ih, T as Tf, t as tt } from "./vendor-min-mermaid~chunk-ZKYS2E5M.DYmB7G2x.chunk.js";
import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Cm_2-rE8.chunk.js";
var w = m$1((t, o) => {
  let e;
  return o === "sandbox" && (e = ih("#i" + t)), (o === "sandbox" ? ih(e.nodes()[0].contentDocument.body) : ih("body")).select(`[id="${t}"]`);
}, "getDiagramElement");
var $ = m$1((t, o, e, i) => {
  t.attr("class", e);
  let { width: n, height: m, x: h, y: x } = a(t, o);
  Tf(t, m, n, i);
  let c = d(h, x, n, m, o);
  t.attr("viewBox", c), tt.debug(`viewBox configured: ${c} with padding: ${o}`);
}, "setupViewPortForSVG"), a = m$1((t, o) => {
  var _a;
  let e = ((_a = t.node()) == null ? void 0 : _a.getBBox()) || {
    width: 0,
    height: 0,
    x: 0,
    y: 0
  };
  return {
    width: e.width + o * 2,
    height: e.height + o * 2,
    x: e.x,
    y: e.y
  };
}, "calculateDimensionsWithPadding"), d = m$1((t, o, e, i, n) => `${t - n} ${o - n} ${e} ${i}`, "createViewBox");
export {
  $,
  w
};
