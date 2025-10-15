import { t as m } from "./vendor-min-mermaid~chunk-GTKDMUJJ.DL2Iapv7.chunk.js";
import { q as pt } from "./vendor-min-mermaid~chunk-63GW7ZVL.JXMkVvO5.chunk.js";
import { D as Wo } from "./vendor-min-mermaid~chunk-KXVH62NG.DXOHBXLD.chunk.js";
var y = /* @__PURE__ */ m((t, e, o, n) => {
	t.attr("class", o);
	let { width: r, height: m$1, x: s, y: b } = w(t, e);
	Wo(t, m$1, r, n);
	let u = /* @__PURE__ */ x(s, b, r, m$1, e);
	t.attr("viewBox", u), pt.debug(`viewBox configured: ${u} with padding: ${e}`);
}, "setupViewPortForSVG"), w = /* @__PURE__ */ m((t, e) => {
	let o = t.node()?.getBBox() || {
		width: 0,
		height: 0,
		x: 0,
		y: 0
	};
	return {
		width: o.width + e * 2,
		height: o.height + e * 2,
		x: o.x,
		y: o.y
	};
}, "calculateDimensionsWithPadding"), x = /* @__PURE__ */ m((t, e, o, n, r) => `${t - r} ${e - r} ${o} ${n}`, "createViewBox");
export { y as t };
