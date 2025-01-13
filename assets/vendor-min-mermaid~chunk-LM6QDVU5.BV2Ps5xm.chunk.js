import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js";
var n = /* @__PURE__ */ m$1((param) => {
  var _a, _b;
  let { flowchart: r } = param;
  let t = ((_a = r == null ? void 0 : r.subGraphTitleMargin) == null ? void 0 : _a.top) ?? 0, a = ((_b = r == null ? void 0 : r.subGraphTitleMargin) == null ? void 0 : _b.bottom) ?? 0, o = t + a;
  return {
    subGraphTitleTopMargin: t,
    subGraphTitleBottomMargin: a,
    subGraphTitleTotalMargin: o
  };
}, "getSubGraphTitleMargins");
export {
  n
};
