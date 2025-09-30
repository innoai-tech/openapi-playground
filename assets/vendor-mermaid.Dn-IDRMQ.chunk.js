const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-mermaid.DDNViVRV.chunk.js","assets/vendor-min-mermaid~chunk-5V7UUW6L.B--ayk72.chunk.js","assets/vendor-min-mermaid~chunk-2XYWPRAO.Da8Ms7Co.chunk.js","assets/vendor-mermaid.D7AYFHeZ.chunk.js","assets/vendor-mermaid.CSvrNZuY.chunk.js","assets/vendor-min-mermaid~chunk-EFRVIJHI.B3AEJspH.chunk.js","assets/vendor-min-mermaid~chunk-EQI6KKA3.BtxAWkG-.chunk.js","assets/vendor-min-mermaid~chunk-RV6DXAHM.CHvzwstl.chunk.js","assets/vendor-min-mermaid~chunk-TVVDRG3C.EXVGZHXK.chunk.js","assets/vendor-mermaid.CqiRISME.chunk.js","assets/vendor-mermaid.9XzSy1EA.chunk.js"])))=>i.map(i=>d[i]);
import { $t as r, U as a, sn as e, w as o } from "./vendor-min-mermaid~chunk-5V7UUW6L.B--ayk72.chunk.js";
import { Z as t } from "./vendor-min-mermaid~chunk-2XYWPRAO.Da8Ms7Co.chunk.js";
import { h as n } from "./vendor-min-mermaid~chunk-EFRVIJHI.B3AEJspH.chunk.js";
import { c as i, d as s, t as m } from "./vendor-min-mermaid~chunk-EQI6KKA3.BtxAWkG-.chunk.js";
import { a as d, i as l, n as u, r as h } from "./vendor-min-mermaid~chunk-TVVDRG3C.EXVGZHXK.chunk.js";
var g = {
	common: a,
	getConfig: o,
	insertCluster: s,
	insertEdge: h,
	insertEdgeLabel: d,
	insertMarkers: l,
	insertNode: i,
	interpolateToCurve: n,
	labelHelper: m,
	log: r,
	positionEdgeLabel: u
}, _ = {}, c = t((r) => {
	for (let a of r) _[a.name] = a;
}, "registerLayoutLoaders");
t(() => {
	c([{
		name: "dagre",
		loader: t(async () => await e(() => import("./vendor-mermaid.DDNViVRV.chunk.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8])), "loader")
	}, {
		name: "cose-bilkent",
		loader: t(async () => await e(() => import("./vendor-mermaid.CqiRISME.chunk.js"), __vite__mapDeps([9,1,2,10])), "loader")
	}]);
}, "registerDefaultLayoutLoaders")();
var k = t(async (r, a) => {
	if (!(r.layoutAlgorithm in _)) throw Error(`Unknown layout algorithm: ${r.layoutAlgorithm}`);
	let e = _[r.layoutAlgorithm];
	return (await e.loader()).render(r, a, g, { algorithm: e.algorithm });
}, "render"), E = t((a = "", { fallback: e = "dagre" } = {}) => {
	if (a in _) return a;
	if (e in _) return r.warn(`Layout algorithm ${a} is not registered. Using ${e} as fallback.`), e;
	throw Error(`Both layout algorithms ${a} and ${e} are not registered.`);
}, "getRegisteredLayoutAlgorithm");
export { E as n, c as r, k as t };
