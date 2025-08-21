const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-min-mermaid~dagre-4KEWV3BN.CehV0q3T.chunk.js","assets/vendor-min-mermaid~chunk-FASC7IG4.DVo0gS50.chunk.js","assets/vendor-min-mermaid~chunk-ZN7TASNU.EbZeXLg2.chunk.js","assets/vendor-min-mermaid~chunk-5ZJXQJOJ.DEJYVNbD.chunk.js","assets/vendor-min-mermaid~chunk-YPUTD6PB.CAK91Qz7.chunk.js","assets/vendor-min-mermaid~chunk-6BY5RJGC.Dd6vUk5z.chunk.js","assets/vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js","assets/vendor-min-mermaid~chunk-JOFIKEML.DGFg8CVB.chunk.js","assets/vendor-min-mermaid~chunk-S67DUUA5.D3-Ci5Su.chunk.js","assets/vendor-min-mermaid~chunk-DPMNACAB.CIbaf8QU.chunk.js","assets/vendor-min-mermaid~chunk-LM6QDVU5.BAO1h6r1.chunk.js","assets/vendor-min-mermaid~chunk-Z2NOIGJN.DWxZ2T3l.chunk.js","assets/vendor-min-mermaid~chunk-F632ZYSZ.C3jO8jR6.chunk.js","assets/lib-nodepkg-typedef.BT8mc31d.chunk.js","assets/vendor-min-mermaid~chunk-IXVBHSNP.BDZ5TJ6K.chunk.js","assets/vendor-min-mermaid~chunk-3R3PQ5PD.DqcBTR0a.chunk.js","assets/vendor-min-mermaid~chunk-TI4EEUUG.BFlBPHyk.chunk.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './lib-nodepkg-typedef.BT8mc31d.chunk.js';
import { K as Kt, e as er, D as Dt, P as Pt } from './vendor-min-mermaid~chunk-JOFIKEML.DGFg8CVB.chunk.js';
import { T, t as tg, g as ga } from './vendor-min-mermaid~chunk-DPMNACAB.CIbaf8QU.chunk.js';
import { d as dt } from './vendor-min-mermaid~chunk-3R3PQ5PD.DqcBTR0a.chunk.js';
import { t as tt, O as Or, e as jC } from './vendor-min-mermaid~chunk-F632ZYSZ.C3jO8jR6.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var L = {
    common: jC,
    getConfig: Or,
    insertCluster: ga,
    insertEdge: Pt,
    insertEdgeLabel: Dt,
    insertMarkers: er,
    insertNode: tg,
    interpolateToCurve: dt,
    labelHelper: T,
    log: tt,
    positionEdgeLabel: Kt
};
var t = {}, h = /*#__PURE__*/ m$1((r)=>{
    for (let e of r)t[e.name] = e;
}, "registerLayoutLoaders"), c = /*#__PURE__*/ m$1(()=>{
    h([
        {
            name: "dagre",
            loader: /*#__PURE__*/ m$1(async ()=>await __vitePreload(()=>import('./vendor-min-mermaid~dagre-4KEWV3BN.CehV0q3T.chunk.js'), true               ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]) : void 0), "loader")
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
