const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-min-mermaid~dagre-6U6BRBRP.D0oKljrs.chunk.js","assets/vendor-min-mermaid~chunk-FASC7IG4.BKJdIGSc.chunk.js","assets/vendor-min-mermaid~chunk-ZN7TASNU.BT0_qJtu.chunk.js","assets/vendor-min-mermaid~chunk-5ZJXQJOJ.Be7I3AGN.chunk.js","assets/vendor-min-mermaid~chunk-YPUTD6PB.DixZkCPt.chunk.js","assets/vendor-min-mermaid~chunk-6BY5RJGC.CZ3m8b_4.chunk.js","assets/vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js","assets/vendor-min-mermaid~chunk-3XUXSURB.DiXW_q8i.chunk.js","assets/vendor-min-mermaid~chunk-S67DUUA5.D3-Ci5Su.chunk.js","assets/vendor-min-mermaid~chunk-5DLFQ4IS.FNW_avIl.chunk.js","assets/vendor-min-mermaid~chunk-LM6QDVU5.BAO1h6r1.chunk.js","assets/vendor-min-mermaid~chunk-BW63ANAF.CGrRDopa.chunk.js","assets/vendor-min-mermaid~chunk-U6SPV2NK.BkMACcv9.chunk.js","assets/lib-nodepkg-typedef.BBnvnZfU.chunk.js","assets/vendor-min-mermaid~chunk-3GKE4KUU.C-fENmn_.chunk.js","assets/vendor-min-mermaid~chunk-YR5264OA.BCCprDC8.chunk.js","assets/vendor-min-mermaid~chunk-TI4EEUUG.BFlBPHyk.chunk.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './lib-nodepkg-typedef.BBnvnZfU.chunk.js';
import { J as Jt, r as rr, F as Ft, D as Dt } from './vendor-min-mermaid~chunk-3XUXSURB.DiXW_q8i.chunk.js';
import { C, t as tg, g as ga } from './vendor-min-mermaid~chunk-5DLFQ4IS.FNW_avIl.chunk.js';
import { d as de } from './vendor-min-mermaid~chunk-YR5264OA.BCCprDC8.chunk.js';
import { t as tt, O as Or, e as XC } from './vendor-min-mermaid~chunk-U6SPV2NK.BkMACcv9.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var L = {
    common: XC,
    getConfig: Or,
    insertCluster: ga,
    insertEdge: Dt,
    insertEdgeLabel: Ft,
    insertMarkers: rr,
    insertNode: tg,
    interpolateToCurve: de,
    labelHelper: C,
    log: tt,
    positionEdgeLabel: Jt
};
var t = {}, h = /*#__PURE__*/ m$1((r)=>{
    for (let e of r)t[e.name] = e;
}, "registerLayoutLoaders"), c = /*#__PURE__*/ m$1(()=>{
    h([
        {
            name: "dagre",
            loader: /*#__PURE__*/ m$1(async ()=>await __vitePreload(()=>import('./vendor-min-mermaid~dagre-6U6BRBRP.D0oKljrs.chunk.js'), true               ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]) : void 0), "loader")
        }
    ]);
}, "registerDefaultLayoutLoaders");
c();
var S = /*#__PURE__*/ m$1(async (r, e)=>{
    if (!(r.layoutAlgorithm in t)) throw new Error(`Unknown layout algorithm: ${r.layoutAlgorithm}`);
    let n = t[r.layoutAlgorithm];
    return (await n.loader()).render(r, e, L, {
        algorithm: n.algorithm
    });
}, "render"), V = /*#__PURE__*/ m$1((r = "", { fallback: e = "dagre" } = {})=>{
    if (r in t) return r;
    if (e in t) return tt.warn(`Layout algorithm ${r} is not registered. Using ${e} as fallback.`), e;
    throw new Error(`Both layout algorithms ${r} and ${e} are not registered.`);
}, "getRegisteredLayoutAlgorithm");
export { S, V, h };
