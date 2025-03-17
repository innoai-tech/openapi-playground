const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-min-mermaid~dagre-QGVLLXKL.DNysf1Dg.chunk.js","assets/vendor-min-mermaid~chunk-FASC7IG4.CzfLmak3.chunk.js","assets/vendor-min-mermaid~chunk-ZN7TASNU.BSKyyN_G.chunk.js","assets/vendor-min-mermaid~chunk-5ZJXQJOJ.C1fDHJEj.chunk.js","assets/vendor-min-mermaid~chunk-YPUTD6PB.Df5Nckn-.chunk.js","assets/vendor-min-mermaid~chunk-6BY5RJGC.DKNoSLq2.chunk.js","assets/vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js","assets/vendor-min-mermaid~chunk-NRZZIP3R.D4KqXfi-.chunk.js","assets/vendor-min-mermaid~chunk-KTJJRPYF.Ba3UtYz5.chunk.js","assets/vendor-min-mermaid~chunk-LM6QDVU5.BV2Ps5xm.chunk.js","assets/vendor-min-mermaid~chunk-UCQ5T4NL.D8XI4L1F.chunk.js","assets/vendor-min-mermaid~chunk-QJLC67TO.Dw34GYds.chunk.js","assets/lib-nodepkg-typedef.BgZlbiby.chunk.js","assets/vendor-min-mermaid~chunk-I5SP4YIW.DqV4C2Qh.chunk.js","assets/vendor-min-mermaid~chunk-QS5O44OF.L_MBO-WO.chunk.js","assets/vendor-min-mermaid~chunk-TI4EEUUG._cpilAVR.chunk.js","assets/vendor-min-mermaid~chunk-S67DUUA5.BuO375mV.chunk.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./lib-nodepkg-typedef.BgZlbiby.chunk.js";
import { U as Ut, N as Nt, q as qt, A as At } from "./vendor-min-mermaid~chunk-NRZZIP3R.D4KqXfi-.chunk.js";
import { C, s as sg, y as yo } from "./vendor-min-mermaid~chunk-KTJJRPYF.Ba3UtYz5.chunk.js";
import { d as de } from "./vendor-min-mermaid~chunk-QS5O44OF.L_MBO-WO.chunk.js";
import { t as tt, E as Er, g as gC } from "./vendor-min-mermaid~chunk-QJLC67TO.Dw34GYds.chunk.js";
import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js";
var L = {
  common: gC,
  getConfig: Er,
  insertCluster: yo,
  insertEdge: At,
  insertEdgeLabel: qt,
  insertMarkers: Nt,
  insertNode: sg,
  interpolateToCurve: de,
  labelHelper: C,
  log: tt,
  positionEdgeLabel: Ut
};
var t = {}, h = /* @__PURE__ */ m$1((r) => {
  for (let e of r) t[e.name] = e;
}, "registerLayoutLoaders"), c = /* @__PURE__ */ m$1(() => {
  h([
    {
      name: "dagre",
      loader: /* @__PURE__ */ m$1(async () => await __vitePreload(() => import("./vendor-min-mermaid~dagre-QGVLLXKL.DNysf1Dg.chunk.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]) : void 0), "loader")
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
