const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-min-mermaid~dagre-X5LCLMGV.DKp8XwdG.chunk.js","assets/vendor-min-mermaid~chunk-CCU7O4O5.rLJtzEeZ.chunk.js","assets/vendor-min-mermaid~chunk-EYG76IYJ.B68ANacC.chunk.js","assets/vendor-min-mermaid~chunk-OMTJKCYW.Drk1AmJ7.chunk.js","assets/vendor-min-mermaid~chunk-IQQE2MEC.BROSDtqI.chunk.js","assets/vendor-min-mermaid~chunk-A4ITRWGT.D09mJiMA.chunk.js","assets/vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js","assets/vendor-min-mermaid~chunk-TVVDRG3C.CRw_45GB.chunk.js","assets/vendor-min-mermaid~chunk-RV6DXAHM.CNLECf8J.chunk.js","assets/vendor-min-mermaid~chunk-EQI6KKA3.DOKLknab.chunk.js","assets/vendor-min-mermaid~chunk-LM6QDVU5.BAO1h6r1.chunk.js","assets/vendor-min-mermaid~chunk-5V7UUW6L.YtR0wuw9.chunk.js","assets/vendor-min-mermaid~chunk-KXVH62NG.CUpUCMGK.chunk.js","assets/lib-nodepkg-typedef.JfBGL8NS.chunk.js","assets/vendor-min-mermaid~chunk-63GW7ZVL.CUmzAGpZ.chunk.js","assets/vendor-min-mermaid~chunk-GOL2OBWC.BUAjn2kC.chunk.js","assets/vendor-min-mermaid~chunk-EFRVIJHI.wT3iKf0B.chunk.js","assets/vendor-min-mermaid~chunk-THXVA4DE.BFlBPHyk.chunk.js","assets/vendor-min-mermaid~cose-bilkent-AZ5BDB2T.D0JI-lnN.chunk.js","assets/vendor-min-mermaid~chunk-7SRKK4IT.j9jN9I8-.chunk.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './lib-nodepkg-typedef.JfBGL8NS.chunk.js';
import { d as dr, k as kr, p as pr, f as fr } from './vendor-min-mermaid~chunk-TVVDRG3C.CRw_45GB.chunk.js';
import { C, T as Td, x as xa } from './vendor-min-mermaid~chunk-EQI6KKA3.DOKLknab.chunk.js';
import { d as dt } from './vendor-min-mermaid~chunk-EFRVIJHI.wT3iKf0B.chunk.js';
import { O as Ot, h as hn } from './vendor-min-mermaid~chunk-KXVH62NG.CUpUCMGK.chunk.js';
import { p as pt } from './vendor-min-mermaid~chunk-63GW7ZVL.CUmzAGpZ.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var L = {
    common: hn,
    getConfig: Ot,
    insertCluster: xa,
    insertEdge: fr,
    insertEdgeLabel: pr,
    insertMarkers: kr,
    insertNode: Td,
    interpolateToCurve: dt,
    labelHelper: C,
    log: pt,
    positionEdgeLabel: dr
};
var t = {}, c = /*#__PURE__*/ m$1((r)=>{
    for (let e of r)t[e.name] = e;
}, "registerLayoutLoaders"), h = /*#__PURE__*/ m$1(()=>{
    c([
        {
            name: "dagre",
            loader: /*#__PURE__*/ m$1(async ()=>await __vitePreload(()=>import('./vendor-min-mermaid~dagre-X5LCLMGV.DKp8XwdG.chunk.js'), true               ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]) : void 0), "loader")
        },
        {
            name: "cose-bilkent",
            loader: /*#__PURE__*/ m$1(async ()=>await __vitePreload(()=>import('./vendor-min-mermaid~cose-bilkent-AZ5BDB2T.D0JI-lnN.chunk.js'), true               ? __vite__mapDeps([18,19,6,14]) : void 0), "loader")
        }
    ]);
}, "registerDefaultLayoutLoaders");
h();
var S = /*#__PURE__*/ m$1(async (r, e)=>{
    if (!(r.layoutAlgorithm in t)) throw new Error(`Unknown layout algorithm: ${r.layoutAlgorithm}`);
    let n = t[r.layoutAlgorithm];
    return (await n.loader()).render(r, e, L, {
        algorithm: n.algorithm
    });
}, "render"), V = /*#__PURE__*/ m$1((r = "", { fallback: e = "dagre" } = {})=>{
    if (r in t) return r;
    if (e in t) return pt.warn(`Layout algorithm ${r} is not registered. Using ${e} as fallback.`), e;
    throw new Error(`Both layout algorithms ${r} and ${e} are not registered.`);
}, "getRegisteredLayoutAlgorithm");
export { S, V, c };
