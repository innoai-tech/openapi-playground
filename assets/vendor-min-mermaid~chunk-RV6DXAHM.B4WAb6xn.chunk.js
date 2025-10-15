import { t as m } from "./vendor-min-mermaid~chunk-GTKDMUJJ.DL2Iapv7.chunk.js";
var s = {
	aggregation: 17.25,
	extension: 17.25,
	composition: 17.25,
	dependency: 6,
	lollipop: 13.5,
	arrow_point: 4
}, d = {
	arrow_point: 9,
	arrow_cross: 12.5,
	arrow_circle: 12.5
};
function b(n, o) {
	if (n === void 0 || o === void 0) return {
		angle: 0,
		deltaX: 0,
		deltaY: 0
	};
	n = /* @__PURE__ */ t(n), o = /* @__PURE__ */ t(o);
	let [c, e] = [n.x, n.y], [a, f] = [o.x, o.y], l = a - c, m$1 = f - e;
	return {
		angle: /* @__PURE__ */ Math.atan(m$1 / l),
		deltaX: l,
		deltaY: m$1
	};
}
m(b, "calculateDeltaAndAngle");
var t = /* @__PURE__ */ m((n) => Array.isArray(n) ? {
	x: n[0],
	y: n[1]
} : n, "pointTransformer"), w = /* @__PURE__ */ m((n) => ({
	x: /* @__PURE__ */ m(function(o, c, e) {
		let a = 0, f = t(e[0]).x < t(e[e.length - 1]).x ? "left" : "right";
		if (c === 0 && Object.hasOwn(s, n.arrowTypeStart)) {
			let { angle: r, deltaX: h } = b(e[0], e[1]);
			a = s[n.arrowTypeStart] * Math.cos(r) * (h >= 0 ? 1 : -1);
		} else if (c === e.length - 1 && Object.hasOwn(s, n.arrowTypeEnd)) {
			let { angle: r, deltaX: h } = b(e[e.length - 1], e[e.length - 2]);
			a = s[n.arrowTypeEnd] * Math.cos(r) * (h >= 0 ? 1 : -1);
		}
		let l = /* @__PURE__ */ Math.abs(t(o).x - t(e[e.length - 1]).x), m$1 = /* @__PURE__ */ Math.abs(t(o).y - t(e[e.length - 1]).y), i = /* @__PURE__ */ Math.abs(t(o).x - t(e[0]).x), x = /* @__PURE__ */ Math.abs(t(o).y - t(e[0]).y), u = s[n.arrowTypeStart], y = s[n.arrowTypeEnd], g = 1;
		if (l < y && l > 0 && m$1 < y) {
			let r = y + g - l;
			r *= f === "right" ? -1 : 1, a -= r;
		}
		if (i < u && i > 0 && x < u) {
			let r = u + g - i;
			r *= f === "right" ? -1 : 1, a += r;
		}
		return t(o).x + a;
	}, "x"),
	y: /* @__PURE__ */ m(function(o, c, e) {
		let a = 0, f = t(e[0]).y < t(e[e.length - 1]).y ? "down" : "up";
		if (c === 0 && Object.hasOwn(s, n.arrowTypeStart)) {
			let { angle: r, deltaY: h } = b(e[0], e[1]);
			a = s[n.arrowTypeStart] * Math.abs(/* @__PURE__ */ Math.sin(r)) * (h >= 0 ? 1 : -1);
		} else if (c === e.length - 1 && Object.hasOwn(s, n.arrowTypeEnd)) {
			let { angle: r, deltaY: h } = b(e[e.length - 1], e[e.length - 2]);
			a = s[n.arrowTypeEnd] * Math.abs(/* @__PURE__ */ Math.sin(r)) * (h >= 0 ? 1 : -1);
		}
		let l = /* @__PURE__ */ Math.abs(t(o).y - t(e[e.length - 1]).y), m$1 = /* @__PURE__ */ Math.abs(t(o).x - t(e[e.length - 1]).x), i = /* @__PURE__ */ Math.abs(t(o).y - t(e[0]).y), x = /* @__PURE__ */ Math.abs(t(o).x - t(e[0]).x), u = s[n.arrowTypeStart], y = s[n.arrowTypeEnd], g = 1;
		if (l < y && l > 0 && m$1 < y) {
			let r = y + g - l;
			r *= f === "up" ? -1 : 1, a -= r;
		}
		if (i < u && i > 0 && x < u) {
			let r = u + g - i;
			r *= f === "up" ? -1 : 1, a += r;
		}
		return t(o).y + a;
	}, "y")
}), "getLineFunctionsWithOffset");
export { s as n, w as r, d as t };
