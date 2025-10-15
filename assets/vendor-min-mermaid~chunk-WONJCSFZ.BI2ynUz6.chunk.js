import { a as q, t as m } from "./vendor-min-mermaid~chunk-GTKDMUJJ.DL2Iapv7.chunk.js";
import { tt as zt } from "./vendor-min-mermaid~chunk-KXVH62NG.DXOHBXLD.chunk.js";
import { t as f } from "./vendor-min-mermaid~chunk-THXVA4DE.LE6PFG6l.chunk.js";
var i = /* @__PURE__ */ q(/* @__PURE__ */ f(), 1);
var x = /* @__PURE__ */ m((n, t) => {
	let e = /* @__PURE__ */ n.append("rect");
	if (e.attr("x", t.x), e.attr("y", t.y), e.attr("fill", t.fill), e.attr("stroke", t.stroke), e.attr("width", t.width), e.attr("height", t.height), t.name && e.attr("name", t.name), t.rx && e.attr("rx", t.rx), t.ry && e.attr("ry", t.ry), t.attrs !== void 0) for (let r in t.attrs) e.attr(r, t.attrs[r]);
	return t.class && e.attr("class", t.class), e;
}, "drawRect"), g = /* @__PURE__ */ m((n, t) => {
	x(n, {
		x: t.startx,
		y: t.starty,
		width: t.stopx - t.startx,
		height: t.stopy - t.starty,
		fill: t.fill,
		stroke: t.stroke,
		class: "rect"
	}).lower();
}, "drawBackgroundRect"), y = /* @__PURE__ */ m((n, t) => {
	let e = /* @__PURE__ */ t.text.replace(zt, " "), r = /* @__PURE__ */ n.append("text");
	r.attr("x", t.x), r.attr("y", t.y), r.attr("class", "legend"), r.style("text-anchor", t.anchor), t.class && r.attr("class", t.class);
	let s = /* @__PURE__ */ r.append("tspan");
	return s.attr("x", t.x + t.textMargin * 2), s.text(e), r;
}, "drawText"), d = /* @__PURE__ */ m((n, t, e, r) => {
	let s = /* @__PURE__ */ n.append("image");
	s.attr("x", t), s.attr("y", e);
	let a = /* @__PURE__ */ (0, i.sanitizeUrl)(r);
	s.attr("xlink:href", a);
}, "drawImage"), E = /* @__PURE__ */ m((n, t, e, r) => {
	let s = /* @__PURE__ */ n.append("use");
	s.attr("x", t), s.attr("y", e);
	let a = /* @__PURE__ */ (0, i.sanitizeUrl)(r);
	s.attr("xlink:href", `#${a}`);
}, "drawEmbeddedImage"), h = /* @__PURE__ */ m(() => ({
	x: 0,
	y: 0,
	width: 100,
	height: 100,
	fill: "#EDF2AE",
	stroke: "#666",
	anchor: "start",
	rx: 0,
	ry: 0
}), "getNoteRect"), f$1 = /* @__PURE__ */ m(() => ({
	x: 0,
	y: 0,
	width: 100,
	height: 100,
	"text-anchor": "start",
	style: "#666",
	textMargin: 0,
	rx: 0,
	ry: 0,
	tspan: !0
}), "getTextObj");
export { h as a, g as i, d as n, x as o, f$1 as r, y as s, E as t };
