const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-min-mermaid~dagre-YMDVWIMT.BtKE6A-1.chunk.js","assets/vendor-min-mermaid~chunk-FASC7IG4.B-JQv8sN.chunk.js","assets/vendor-min-mermaid~chunk-ZN7TASNU.CdKFbHTs.chunk.js","assets/vendor-min-mermaid~chunk-5ZJXQJOJ.Be7I3AGN.chunk.js","assets/vendor-min-mermaid~chunk-YPUTD6PB.DixZkCPt.chunk.js","assets/vendor-min-mermaid~chunk-6BY5RJGC.CZ3m8b_4.chunk.js","assets/vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js","assets/vendor-min-mermaid~chunk-CF2LXAHU.P5w0t2CS.chunk.js","assets/vendor-min-mermaid~chunk-2BQHA3SY.DoMtHC3O.chunk.js","assets/vendor-min-mermaid~chunk-LM6QDVU5.Cd9M_jtg.chunk.js","assets/vendor-min-mermaid~chunk-ABV7UDA7.pPZHVmyz.chunk.js","assets/vendor-min-mermaid~chunk-IIWVAQKY.CwtpAX-Q.chunk.js","assets/vendor-min-mermaid~chunk-TI4EEUUG.BFlBPHyk.chunk.js","assets/vendor-min-mermaid~chunk-RAMAZW42.vc82q0BN.chunk.js","assets/lib-nodepkg-typedef.DznktY08.chunk.js","assets/vendor-min-mermaid~chunk-S67DUUA5.D3-Ci5Su.chunk.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './lib-nodepkg-typedef.DznktY08.chunk.js';
import { J as Jt, r as rr, F as Ft, D as Dt } from './vendor-min-mermaid~chunk-CF2LXAHU.P5w0t2CS.chunk.js';
import { C, a as ag, S as So } from './vendor-min-mermaid~chunk-2BQHA3SY.DoMtHC3O.chunk.js';
import { d as de } from './vendor-min-mermaid~chunk-IIWVAQKY.CwtpAX-Q.chunk.js';
import { t as tt, E as Er, g as gC } from './vendor-min-mermaid~chunk-RAMAZW42.vc82q0BN.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var L = {
    common: gC,
    getConfig: Er,
    insertCluster: So,
    insertEdge: Dt,
    insertEdgeLabel: Ft,
    insertMarkers: rr,
    insertNode: ag,
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
            loader: /*#__PURE__*/ m$1(async ()=>await __vitePreload(()=>import('./vendor-min-mermaid~dagre-YMDVWIMT.BtKE6A-1.chunk.js'), true               ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]) : void 0), "loader")
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
}, "render"), V = /*#__PURE__*/ m$1(function() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", { fallback: e = "dagre" } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (r in t) return r;
    if (e in t) return tt.warn(`Layout algorithm ${r} is not registered. Using ${e} as fallback.`), e;
    throw new Error(`Both layout algorithms ${r} and ${e} are not registered.`);
}, "getRegisteredLayoutAlgorithm");
export { S, V, h };
