import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Cm_2-rE8.chunk.js";
var n = m$1((param) => {
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
