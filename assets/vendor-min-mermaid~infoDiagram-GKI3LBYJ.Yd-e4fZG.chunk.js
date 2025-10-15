import { t as m } from "./vendor-min-mermaid~chunk-GTKDMUJJ.DL2Iapv7.chunk.js";
import { t as p } from "./vendor-min-mermaid~chunk-353K7GK5.DfZrGrs6.chunk.js";
import { q as pt } from "./vendor-min-mermaid~chunk-63GW7ZVL.JXMkVvO5.chunk.js";
import { D as Wo } from "./vendor-min-mermaid~chunk-KXVH62NG.DXOHBXLD.chunk.js";
import { t as d } from "./vendor-min-mermaid~chunk-ASAHGCDZ.CiiPqzVN.chunk.js";
import { t as r } from "./vendor-min-mermaid~chunk-4HFYJGYH.HqzFUhrb.chunk.js";
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
