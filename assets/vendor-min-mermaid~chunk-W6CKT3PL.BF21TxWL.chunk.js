const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-mermaid.DbF8ILOE.chunk.js","assets/vendor-min-mermaid~chunk-5V7UUW6L.DAO7dsPA.chunk.js","assets/vendor-min-mermaid~chunk-GTKDMUJJ.DL2Iapv7.chunk.js","assets/vendor-min-mermaid~chunk-KXVH62NG.DXOHBXLD.chunk.js","assets/index.DdIYnUiz.entry.js","assets/vendor-innoai-tech-vueuikit.pf1Bh6eQ.chunk.js","assets/vendor-innoai-tech-vuekit.DFxPSnTM.chunk.js","assets/vendor-rxjs.Bnzpw5oq.chunk.js","assets/lib-nodepkg-typedef.C31p5CR7.chunk.js","assets/rolldown-runtime.BUi7Tn5u.chunk.js","assets/vendor-mermaid.BLxVj147.chunk.js","assets/vendor-innoai-tech-fetcher.CcPeqamQ.chunk.js","assets/vendor-innoai-tech-jsoneditor.DW5yVjHU.chunk.js","assets/lib-nodepkg-vuemarkdown.R8axF3Ac.chunk.js","assets/lib-nodepkg-vuematerial.M8enR1gt.chunk.js","assets/lib-nodepkg-vueformdata.BFynmKwt.chunk.js","assets/webapp-openapi-playground-mod-openapi.BCfilhuX.chunk.js","assets/vendor-min-mermaid~chunk-63GW7ZVL.JXMkVvO5.chunk.js","assets/vendor-min-mermaid~chunk-A4ITRWGT.Q-yxLqnU.chunk.js","assets/vendor-min-mermaid~chunk-CCU7O4O5.yiCBVM4x.chunk.js","assets/vendor-min-mermaid~chunk-EYG76IYJ.ByrwpuYG.chunk.js","assets/vendor-min-mermaid~chunk-IQQE2MEC.Ch8P21i0.chunk.js","assets/vendor-min-mermaid~chunk-OMTJKCYW.DapDh1DZ.chunk.js","assets/vendor-min-mermaid~chunk-EFRVIJHI.Df9d5nYk.chunk.js","assets/vendor-min-mermaid~chunk-THXVA4DE.LE6PFG6l.chunk.js","assets/vendor-min-mermaid~chunk-EQI6KKA3.DKxGc_Rn.chunk.js","assets/vendor-min-mermaid~chunk-GOL2OBWC.B4BOjWXT.chunk.js","assets/vendor-min-mermaid~chunk-LM6QDVU5.Cv6-ZsBo.chunk.js","assets/vendor-min-mermaid~chunk-RV6DXAHM.B4WAb6xn.chunk.js","assets/vendor-min-mermaid~chunk-TVVDRG3C.tqzZ9l_C.chunk.js","assets/vendor-min-mermaid~dagre-X5LCLMGV.cA6J5dO_.chunk.js","assets/vendor-mermaid.D4rqg9wn.chunk.js","assets/vendor-min-mermaid~chunk-7SRKK4IT.JRp13HHg.chunk.js","assets/vendor-min-mermaid~cose-bilkent-AZ5BDB2T.DibSxqSc.chunk.js"])))=>i.map(i=>d[i]);
import { t as __vitePreload } from "./index.DdIYnUiz.entry.js";
import { t as m } from "./vendor-min-mermaid~chunk-GTKDMUJJ.DL2Iapv7.chunk.js";
import { q as pt } from "./vendor-min-mermaid~chunk-63GW7ZVL.JXMkVvO5.chunk.js";
import { R as hn, y as Ot } from "./vendor-min-mermaid~chunk-KXVH62NG.DXOHBXLD.chunk.js";
import { h as dt } from "./vendor-min-mermaid~chunk-EFRVIJHI.Df9d5nYk.chunk.js";
import { c as Td, d as xa, t as C } from "./vendor-min-mermaid~chunk-EQI6KKA3.DKxGc_Rn.chunk.js";
import { a as pr, i as kr, n as dr, r as fr } from "./vendor-min-mermaid~chunk-TVVDRG3C.tqzZ9l_C.chunk.js";
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
var t = {}, c = /* @__PURE__ */ m((r) => {
	for (let e of r) t[e.name] = e;
}, "registerLayoutLoaders");
m(() => {
	c([{
		name: "dagre",
		loader: /* @__PURE__ */ m(async () => await __vitePreload(() => import("./vendor-mermaid.DbF8ILOE.chunk.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30])), "loader")
	}, {
		name: "cose-bilkent",
		loader: /* @__PURE__ */ m(async () => await __vitePreload(() => import("./vendor-mermaid.D4rqg9wn.chunk.js"), __vite__mapDeps([31,17,2,32,33])), "loader")
	}]);
}, "registerDefaultLayoutLoaders")();
var S = /* @__PURE__ */ m(async (r, e) => {
	if (!(r.layoutAlgorithm in t)) throw new Error(`Unknown layout algorithm: ${r.layoutAlgorithm}`);
	let n = t[r.layoutAlgorithm];
	return (await n.loader()).render(r, e, L, { algorithm: n.algorithm });
}, "render"), V = /* @__PURE__ */ m((r = "", { fallback: e = "dagre" } = {}) => {
	if (r in t) return r;
	if (e in t) return pt.warn(`Layout algorithm ${r} is not registered. Using ${e} as fallback.`), e;
	throw new Error(`Both layout algorithms ${r} and ${e} are not registered.`);
}, "getRegisteredLayoutAlgorithm");
export { V as n, c as r, S as t };
