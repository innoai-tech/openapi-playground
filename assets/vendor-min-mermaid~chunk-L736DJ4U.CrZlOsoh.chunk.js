const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-min-mermaid~dagre-J4RCDQSV.Du7Pxo7J.chunk.js","assets/vendor-min-mermaid~chunk-FASC7IG4.uhAIIXQ4.chunk.js","assets/vendor-min-mermaid~chunk-ZN7TASNU.KBLMrQvh.chunk.js","assets/vendor-min-mermaid~chunk-5ZJXQJOJ.DZaYt2YO.chunk.js","assets/vendor-min-mermaid~chunk-YPUTD6PB.DtdPbVSC.chunk.js","assets/vendor-min-mermaid~chunk-6BY5RJGC.BwVspKnk.chunk.js","assets/vendor-min-mermaid~chunk-GTKDMUJJ.Cm_2-rE8.chunk.js","assets/vendor-min-mermaid~chunk-QTJCGBHB.B_EP1PNg.chunk.js","assets/vendor-min-mermaid~chunk-USR3SDWQ.C0XgfhoF.chunk.js","assets/vendor-min-mermaid~chunk-2VPXETT4.xhKexg6X.chunk.js","assets/vendor-min-mermaid~chunk-ZKYS2E5M.DYmB7G2x.chunk.js","assets/lib-nodepkg-typedef.D-PCYzjh.chunk.js","assets/vendor-min-mermaid~chunk-LM6QDVU5.CCcUlC7q.chunk.js","assets/vendor-min-mermaid~chunk-HESFG3RP.X24hc0uC.chunk.js","assets/vendor-min-mermaid~chunk-YM3XIQPS.DzKxOkHI.chunk.js","assets/vendor-min-mermaid~chunk-TI4EEUUG.CAA-1BPs.chunk.js","assets/vendor-min-mermaid~chunk-S67DUUA5.By2qN2hC.chunk.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./lib-nodepkg-typedef.D-PCYzjh.chunk.js";
import { F as Ft, t as tr, V as Vt, J as Jt } from "./vendor-min-mermaid~chunk-QTJCGBHB.B_EP1PNg.chunk.js";
import { C, s as sg, y as yo } from "./vendor-min-mermaid~chunk-USR3SDWQ.C0XgfhoF.chunk.js";
import { d as de } from "./vendor-min-mermaid~chunk-YM3XIQPS.DzKxOkHI.chunk.js";
import { t as tt, E as Er, g as gC } from "./vendor-min-mermaid~chunk-ZKYS2E5M.DYmB7G2x.chunk.js";
import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Cm_2-rE8.chunk.js";
var L = {
  common: gC,
  getConfig: Er,
  insertCluster: yo,
  insertEdge: Jt,
  insertEdgeLabel: Vt,
  insertMarkers: tr,
  insertNode: sg,
  interpolateToCurve: de,
  labelHelper: C,
  log: tt,
  positionEdgeLabel: Ft
};
var t = {}, h = m$1((r) => {
  for (let e of r) t[e.name] = e;
}, "registerLayoutLoaders"), c = m$1(() => {
  h([
    {
      name: "dagre",
      loader: m$1(async () => await __vitePreload(() => import("./vendor-min-mermaid~dagre-J4RCDQSV.Du7Pxo7J.chunk.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]) : void 0), "loader")
    }
  ]);
}, "registerDefaultLayoutLoaders");
c();
var S = m$1(async (r, e) => {
  if (!(r.layoutAlgorithm in t)) throw new Error(`Unknown layout algorithm: ${r.layoutAlgorithm}`);
  let n = t[r.layoutAlgorithm];
  return (await n.loader()).render(r, e, L, {
    algorithm: n.algorithm
  });
}, "render"), V = m$1(function() {
  let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", { fallback: e = "dagre" } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (r in t) return r;
  if (e in t) return tt.warn(`Layout algorithm ${r} is not registered. Using ${e} as fallback.`), e;
  throw new Error(`Both layout algorithms ${r} and ${e} are not registered.`);
}, "getRegisteredLayoutAlgorithm");
export {
  S,
  V,
  h
};
