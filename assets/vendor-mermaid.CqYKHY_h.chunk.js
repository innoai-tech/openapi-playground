import { $t as r, M as e } from "./vendor-min-mermaid~chunk-5V7UUW6L.B--ayk72.chunk.js";
import { Z as a } from "./vendor-min-mermaid~chunk-2XYWPRAO.Da8Ms7Co.chunk.js";
import { t } from "./vendor-mermaid.CNStX6fI.chunk.js";
import { t as n } from "./vendor-mermaid.BVwC1HkE.chunk.js";
import { t as i } from "./vendor-mermaid.D2DrBU7P.chunk.js";
var o = { parse: a(async (e) => {
	let a = await t("info", e);
	r.debug(a);
}, "parse") }, s = { version: i.version + "" }, m = {
	parser: o,
	db: { getVersion: a(() => s.version, "getVersion") },
	renderer: { draw: a((a, t, i) => {
		r.debug(`rendering info diagram
` + a);
		let o = n(t);
		e(o, 100, 400, !0), o.append("g").append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${i}`);
	}, "draw") }
};
export { m as diagram };
