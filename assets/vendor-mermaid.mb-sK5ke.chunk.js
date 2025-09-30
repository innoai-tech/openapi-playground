import { ot as t } from "./vendor-min-mermaid~chunk-5V7UUW6L.B--ayk72.chunk.js";
import { Z as r, et as a } from "./vendor-min-mermaid~chunk-2XYWPRAO.Da8Ms7Co.chunk.js";
import { v as e } from "./vendor-min-mermaid~chunk-EFRVIJHI.B3AEJspH.chunk.js";
var s = a(e(), 1), n = r((t, r) => {
	let a = t.append("rect");
	if (a.attr("x", r.x), a.attr("y", r.y), a.attr("fill", r.fill), a.attr("stroke", r.stroke), a.attr("width", r.width), a.attr("height", r.height), r.name && a.attr("name", r.name), r.rx && a.attr("rx", r.rx), r.ry && a.attr("ry", r.ry), void 0 !== r.attrs) for (let t in r.attrs) a.attr(t, r.attrs[t]);
	return r.class && a.attr("class", r.class), a;
}, "drawRect"), i = r((t, r) => {
	n(t, {
		x: r.startx,
		y: r.starty,
		width: r.stopx - r.startx,
		height: r.stopy - r.starty,
		fill: r.fill,
		stroke: r.stroke,
		class: "rect"
	}).lower();
}, "drawBackgroundRect"), l = r((r, a) => {
	let e = a.text.replace(t, " "), s = r.append("text");
	s.attr("x", a.x), s.attr("y", a.y), s.attr("class", "legend"), s.style("text-anchor", a.anchor), a.class && s.attr("class", a.class);
	let n = s.append("tspan");
	return n.attr("x", a.x + 2 * a.textMargin), n.text(e), s;
}, "drawText"), x = r((t, r, a, e) => {
	let n = t.append("image");
	n.attr("x", r), n.attr("y", a);
	let i = (0, s.sanitizeUrl)(e);
	n.attr("xlink:href", i);
}, "drawImage"), d = r((t, r, a, e) => {
	let n = t.append("use");
	n.attr("x", r), n.attr("y", a);
	let i = (0, s.sanitizeUrl)(e);
	n.attr("xlink:href", `#${i}`);
}, "drawEmbeddedImage"), h = r(() => ({
	x: 0,
	y: 0,
	width: 100,
	height: 100,
	fill: "#EDF2AE",
	stroke: "#666",
	anchor: "start",
	rx: 0,
	ry: 0
}), "getNoteRect"), o = r(() => ({
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
export { h as a, i, x as n, n as o, o as r, l as s, d as t };
