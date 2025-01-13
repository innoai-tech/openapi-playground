const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-min-mermaid~dagre-RF25WEIW.smJwah7j.chunk.js","assets/vendor-min-mermaid~chunk-ZUCAP7FR.6sCyN4jm.chunk.js","assets/vendor-min-mermaid~chunk-E7A2AWYO.9sfNWd-b.chunk.js","assets/vendor-min-mermaid~chunk-LM6QDVU5.BV2Ps5xm.chunk.js","assets/vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js","assets/vendor-min-mermaid~chunk-D4BOYBYT.DSjM26Cl.chunk.js","assets/vendor-min-mermaid~chunk-OR2G2HG5.BWDWUMki.chunk.js","assets/lib-nodepkg-typedef.wThrm2fx.chunk.js","assets/vendor-min-mermaid~chunk-AFC6EC46.CY61scRQ.chunk.js","assets/vendor-min-mermaid~chunk-UENA7NWE.a12nwn0g.chunk.js","assets/vendor-min-mermaid~chunk-TI4EEUUG._cpilAVR.chunk.js","assets/vendor-min-mermaid~chunk-6BY5RJGC.C-4BwBYe.chunk.js","assets/vendor-min-mermaid~chunk-S67DUUA5.BuO375mV.chunk.js","assets/vendor-min-mermaid~chunk-FASC7IG4.Nvc1iF04.chunk.js","assets/vendor-min-mermaid~chunk-ZN7TASNU.CDN7G8CE.chunk.js","assets/vendor-min-mermaid~chunk-5ZJXQJOJ.DyIdZ9M4.chunk.js","assets/vendor-min-mermaid~chunk-YPUTD6PB.CV_wMLRV.chunk.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./lib-nodepkg-typedef.wThrm2fx.chunk.js";
import { v as vt, $ as $t, H as Ht, T as Tt } from "./vendor-min-mermaid~chunk-ZUCAP7FR.6sCyN4jm.chunk.js";
import { r as ro, b as bf, T } from "./vendor-min-mermaid~chunk-E7A2AWYO.9sfNWd-b.chunk.js";
import { d as de } from "./vendor-min-mermaid~chunk-UENA7NWE.a12nwn0g.chunk.js";
import { t as tt, m as mC, E as Er } from "./vendor-min-mermaid~chunk-OR2G2HG5.BWDWUMki.chunk.js";
import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js";
var L = {
  common: mC,
  getConfig: Er,
  insertCluster: ro,
  insertEdge: vt,
  insertEdgeLabel: $t,
  insertMarkers: Ht,
  insertNode: bf,
  interpolateToCurve: de,
  labelHelper: T,
  log: tt,
  positionEdgeLabel: Tt
};
var t = {}, h = /* @__PURE__ */ m$1((r) => {
  for (let e of r) t[e.name] = e;
}, "registerLayoutLoaders"), c = /* @__PURE__ */ m$1(() => {
  h([
    {
      name: "dagre",
      loader: /* @__PURE__ */ m$1(async () => await __vitePreload(() => import("./vendor-min-mermaid~dagre-RF25WEIW.smJwah7j.chunk.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]) : void 0), "loader")
    }
  ]);
}, "registerDefaultLayoutLoaders");
c();
var S = /* @__PURE__ */ m$1(async (r, e) => {
  if (!(r.layoutAlgorithm in t)) throw new Error(`Unknown layout algorithm: ${r.layoutAlgorithm}`);
  let n = t[r.layoutAlgorithm];
  return (await n.loader()).render(r, e, L, {
    algorithm: n.algorithm
  });
}, "render"), V = /* @__PURE__ */ m$1(function() {
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
