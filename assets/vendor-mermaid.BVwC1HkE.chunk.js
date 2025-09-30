import { J as e, qt as n } from "./vendor-min-mermaid~chunk-5V7UUW6L.B--ayk72.chunk.js";
import { Z as t } from "./vendor-min-mermaid~chunk-2XYWPRAO.Da8Ms7Co.chunk.js";
var o = t((t) => {
	let { securityLevel: o } = e(), m = n("body");
	if ("sandbox" === o) {
		let e = n(`#i${t}`).node()?.contentDocument ?? document;
		m = n(e.body);
	}
	return m.select(`#${t}`);
}, "selectSvgElement");
export { o as t };
