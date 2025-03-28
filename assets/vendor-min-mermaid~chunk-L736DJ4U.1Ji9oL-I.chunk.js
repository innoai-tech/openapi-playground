const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-min-mermaid~dagre-J4RCDQSV.DHm91Tca.chunk.js","assets/vendor-min-mermaid~chunk-FASC7IG4.fFRQHcNx.chunk.js","assets/vendor-min-mermaid~chunk-ZN7TASNU.5HFZXrDk.chunk.js","assets/vendor-min-mermaid~chunk-5ZJXQJOJ.XQW5ctaF.chunk.js","assets/vendor-min-mermaid~chunk-YPUTD6PB.Df5Nckn-.chunk.js","assets/vendor-min-mermaid~chunk-6BY5RJGC.DKNoSLq2.chunk.js","assets/vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js","assets/vendor-min-mermaid~chunk-QTJCGBHB.CZU9GeFj.chunk.js","assets/vendor-min-mermaid~chunk-USR3SDWQ.C9IwR0W0.chunk.js","assets/vendor-min-mermaid~chunk-2VPXETT4.DDZSdOP0.chunk.js","assets/vendor-min-mermaid~chunk-ZKYS2E5M.BYv2PEOY.chunk.js","assets/lib-nodepkg-typedef.fSjiL-FI.chunk.js","assets/vendor-min-mermaid~chunk-LM6QDVU5.BV2Ps5xm.chunk.js","assets/vendor-min-mermaid~chunk-HESFG3RP.CGkgvpPa.chunk.js","assets/vendor-min-mermaid~chunk-YM3XIQPS.BhHSAhRp.chunk.js","assets/vendor-min-mermaid~chunk-TI4EEUUG._cpilAVR.chunk.js","assets/vendor-min-mermaid~chunk-S67DUUA5.BuO375mV.chunk.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./lib-nodepkg-typedef.fSjiL-FI.chunk.js";
import { F as Ft, t as tr, V as Vt, J as Jt } from "./vendor-min-mermaid~chunk-QTJCGBHB.CZU9GeFj.chunk.js";
import { C, s as sg, y as yo } from "./vendor-min-mermaid~chunk-USR3SDWQ.C9IwR0W0.chunk.js";
import { d as de } from "./vendor-min-mermaid~chunk-YM3XIQPS.BhHSAhRp.chunk.js";
import { t as tt, E as Er, g as gC } from "./vendor-min-mermaid~chunk-ZKYS2E5M.BYv2PEOY.chunk.js";
import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js";
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
var t = {}, h = /* @__PURE__ */ m$1((r) => {
  for (let e of r) t[e.name] = e;
}, "registerLayoutLoaders"), c = /* @__PURE__ */ m$1(() => {
  h([
    {
      name: "dagre",
      loader: /* @__PURE__ */ m$1(async () => await __vitePreload(() => import("./vendor-min-mermaid~dagre-J4RCDQSV.DHm91Tca.chunk.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]) : void 0), "loader")
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
