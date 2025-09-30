import { $t as t, M as e } from "./vendor-min-mermaid~chunk-5V7UUW6L.B--ayk72.chunk.js";
import { Z as i } from "./vendor-min-mermaid~chunk-2XYWPRAO.Da8Ms7Co.chunk.js";
var h = i((i, h, a, d) => {
	i.attr("class", a);
	let { width: n, height: m, x: s, y: c } = r(i, h);
	e(i, m, n, d);
	let g = o(s, c, n, m, h);
	i.attr("viewBox", g), t.debug(`viewBox configured: ${g} with padding: ${h}`);
}, "setupViewPortForSVG"), r = i((t, e) => {
	let i = t.node()?.getBBox() || {
		width: 0,
		height: 0,
		x: 0,
		y: 0
	};
	return {
		width: i.width + 2 * e,
		height: i.height + 2 * e,
		x: i.x,
		y: i.y
	};
}, "calculateDimensionsWithPadding"), o = i((t, e, i, h, r) => `${t - r} ${e - r} ${i} ${h}`, "createViewBox");
export { h as t };
