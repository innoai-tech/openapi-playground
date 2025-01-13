import { r as rh, C as Cf, t as tt } from "./vendor-min-mermaid~chunk-OR2G2HG5.BWDWUMki.chunk.js";
import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js";
var w = /* @__PURE__ */ m$1((t, o) => {
  let e;
  return o === "sandbox" && (e = /* @__PURE__ */ rh("#i" + t)), (o === "sandbox" ? rh(e.nodes()[0].contentDocument.body) : rh("body")).select(`[id="${t}"]`);
}, "getDiagramElement");
var $ = /* @__PURE__ */ m$1((t, o, e, i) => {
  t.attr("class", e);
  let { width: n, height: m, x: h, y: x } = a(t, o);
  Cf(t, m, n, i);
  let c = /* @__PURE__ */ d(h, x, n, m, o);
  t.attr("viewBox", c), tt.debug(`viewBox configured: ${c} with padding: ${o}`);
}, "setupViewPortForSVG"), a = /* @__PURE__ */ m$1((t, o) => {
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
}, "calculateDimensionsWithPadding"), d = /* @__PURE__ */ m$1((t, o, e, i, n) => `${t - n} ${o - n} ${e} ${i}`, "createViewBox");
export {
  $,
  w
};
