import { et as Wo, hn as pt, jn as p, k as d } from "./vendor-min-mermaid~architectureDiagram-4X3Z3J56.DWYnMD9N.chunk.js";
import { Q as m } from "./vendor-min-mermaid~architecture-U656AL7Q-3ZQKGQJL.BHePMx5P.chunk.js";
import { t as r } from "./vendor-min-mermaid~chunk-2K7MXLZZ.qYuMXQX8.chunk.js";
var m$1 = { parse: /* @__PURE__ */ m(async (t) => {
	let e = await p("info", t);
	pt.debug(e);
}, "parse") };
var c = { version: r.version + "" };
var L = {
	parser: m$1,
	db: { getVersion: /* @__PURE__ */ m(() => c.version, "getVersion") },
	renderer: { draw: /* @__PURE__ */ m((t, e, d$1) => {
		pt.debug(`rendering info diagram
` + t);
		let i = /* @__PURE__ */ d(e);
		Wo(i, 100, 400, !0), i.append("g").append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${d$1}`);
	}, "draw") }
};
export { L as t };
