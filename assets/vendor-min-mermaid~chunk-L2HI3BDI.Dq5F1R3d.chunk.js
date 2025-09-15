const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-min-mermaid~dagre-EEGAQTFE.BOkqOdAP.chunk.js","assets/vendor-min-mermaid~chunk-FASC7IG4.BKJdIGSc.chunk.js","assets/vendor-min-mermaid~chunk-ZN7TASNU.BT0_qJtu.chunk.js","assets/vendor-min-mermaid~chunk-5ZJXQJOJ.Be7I3AGN.chunk.js","assets/vendor-min-mermaid~chunk-YPUTD6PB.DixZkCPt.chunk.js","assets/vendor-min-mermaid~chunk-6BY5RJGC.CZ3m8b_4.chunk.js","assets/vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js","assets/vendor-min-mermaid~chunk-W2SG4BMC.CgjqxNXF.chunk.js","assets/vendor-min-mermaid~chunk-SXDZHNYO.D3-Ci5Su.chunk.js","assets/vendor-min-mermaid~chunk-B4LOWB5X.T-uFuOvQ.chunk.js","assets/vendor-min-mermaid~chunk-LM6QDVU5.BAO1h6r1.chunk.js","assets/vendor-min-mermaid~chunk-543QDF6V.CSpQVPcT.chunk.js","assets/vendor-min-mermaid~chunk-NIZHWIZP.41FV3HsL.chunk.js","assets/lib-nodepkg-typedef.JfBGL8NS.chunk.js","assets/vendor-min-mermaid~chunk-BF7QJ6L7.DK9jwCiC.chunk.js","assets/vendor-min-mermaid~chunk-HXN2J7W2.xQdsu3kt.chunk.js","assets/vendor-min-mermaid~chunk-RGZHNYJS.BZGdGDWl.chunk.js","assets/vendor-min-mermaid~chunk-TI4EEUUG.BFlBPHyk.chunk.js","assets/vendor-min-mermaid~cose-bilkent-VFPYIND5.D8a4daHz.chunk.js","assets/vendor-min-mermaid~chunk-MBJCTAW2.CeeVBk3I.chunk.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './lib-nodepkg-typedef.JfBGL8NS.chunk.js';
import { K as Kt, e as er, D as Dt, P as Pt } from './vendor-min-mermaid~chunk-W2SG4BMC.CgjqxNXF.chunk.js';
import { C, T as Td, x as xa } from './vendor-min-mermaid~chunk-B4LOWB5X.T-uFuOvQ.chunk.js';
import { d as dt } from './vendor-min-mermaid~chunk-RGZHNYJS.BZGdGDWl.chunk.js';
import { M as Mt, n as nn } from './vendor-min-mermaid~chunk-NIZHWIZP.41FV3HsL.chunk.js';
import { p as pt } from './vendor-min-mermaid~chunk-BF7QJ6L7.DK9jwCiC.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var L = {
    common: nn,
    getConfig: Mt,
    insertCluster: xa,
    insertEdge: Pt,
    insertEdgeLabel: Dt,
    insertMarkers: er,
    insertNode: Td,
    interpolateToCurve: dt,
    labelHelper: C,
    log: pt,
    positionEdgeLabel: Kt
};
var t = {}, c = /*#__PURE__*/ m$1((r)=>{
    for (let e of r)t[e.name] = e;
}, "registerLayoutLoaders"), h = /*#__PURE__*/ m$1(()=>{
    c([
        {
            name: "dagre",
            loader: /*#__PURE__*/ m$1(async ()=>await __vitePreload(()=>import('./vendor-min-mermaid~dagre-EEGAQTFE.BOkqOdAP.chunk.js'), true               ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]) : void 0), "loader")
        },
        {
            name: "cose-bilkent",
            loader: /*#__PURE__*/ m$1(async ()=>await __vitePreload(()=>import('./vendor-min-mermaid~cose-bilkent-VFPYIND5.D8a4daHz.chunk.js'), true               ? __vite__mapDeps([18,19,6,14]) : void 0), "loader")
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
