import { $t as t, A as e, G as a, S as r, d as i, f as n, j as s, o as l, p as o, w as d, x as c } from "./vendor-min-mermaid~chunk-5V7UUW6L.B--ayk72.chunk.js";
import { Z as m } from "./vendor-min-mermaid~chunk-2XYWPRAO.Da8Ms7Co.chunk.js";
import { t as h } from "./vendor-mermaid.Vvvvrg2S.chunk.js";
import { t as u } from "./vendor-mermaid.CNStX6fI.chunk.js";
import { t as g } from "./vendor-mermaid.BVwC1HkE.chunk.js";
import { a as p } from "./vendor-min-mermaid~chunk-EFRVIJHI.B3AEJspH.chunk.js";
var x = {
	showLegend: !0,
	ticks: 5,
	max: null,
	min: 0,
	graticule: "circle"
}, f = {
	axes: [],
	curves: [],
	options: x
}, $ = structuredClone(f), v = c.radar, y = m(() => p({
	...v,
	...d().radar
}), "getConfig"), w = m(() => $.axes, "getAxes"), b = m(() => $.curves, "getCurves"), k = m(() => $.options, "getOptions"), C = m((t) => {
	$.axes = t.map((t) => ({
		name: t.name,
		label: t.label ?? t.name
	}));
}, "setAxes"), M = m((t) => {
	$.curves = t.map((t) => ({
		name: t.name,
		label: t.label ?? t.name,
		entries: L(t.entries)
	}));
}, "setCurves"), L = m((t) => {
	if (null == t[0].axis) return t.map((t) => t.value);
	let e = w();
	if (0 === e.length) throw Error("Axes must be populated before curves for reference entries");
	return e.map((e) => {
		let a = t.find((t) => t.axis?.$refText === e.name);
		if (void 0 === a) throw Error("Missing entry for axis " + e.label);
		return a.value;
	});
}, "computeCurveEntries"), A = {
	getAxes: w,
	getCurves: b,
	getOptions: k,
	setAxes: C,
	setCurves: M,
	setOptions: m((t) => {
		let e = t.reduce((t, e) => (t[e.name] = e, t), {});
		$.options = {
			showLegend: e.showLegend?.value ?? x.showLegend,
			ticks: e.ticks?.value ?? x.ticks,
			max: e.max?.value ?? x.max,
			min: e.min?.value ?? x.min,
			graticule: e.graticule?.value ?? x.graticule
		};
	}, "setOptions"),
	getConfig: y,
	clear: m(() => {
		r(), $ = structuredClone(f);
	}, "clear"),
	setAccTitle: n,
	getAccTitle: e,
	setDiagramTitle: a,
	getDiagramTitle: s,
	getAccDescription: l,
	setAccDescription: i
}, T = m((t) => {
	h(t, A);
	let { axes: e, curves: a, options: r } = t;
	A.setAxes(e), A.setCurves(a), A.setOptions(r);
}, "populate"), O = { parse: m(async (e) => {
	let a = await u("radar", e);
	t.debug(a), T(a);
}, "parse") }, S = m((t, e, a, r) => {
	let i = r.db, n = i.getAxes(), s = i.getCurves(), l = i.getOptions(), o = i.getConfig(), d = i.getDiagramTitle(), c = I(g(e), o), m = l.max ?? Math.max(...s.map((t) => Math.max(...t.entries))), h = l.min, u = Math.min(o.width, o.height) / 2;
	j(c, n, u, l.ticks, l.graticule), E(c, n, u, o), F(c, n, s, h, m, l.graticule, o), z(c, s, l.showLegend, o), c.append("text").attr("class", "radarTitle").text(d).attr("x", 0).attr("y", -o.height / 2 - o.marginTop);
}, "draw"), I = m((t, e) => {
	let a = e.width + e.marginLeft + e.marginRight, r = e.height + e.marginTop + e.marginBottom, i = {
		x: e.marginLeft + e.width / 2,
		y: e.marginTop + e.height / 2
	};
	return t.attr("viewbox", `0 0 ${a} ${r}`).attr("width", a).attr("height", r), t.append("g").attr("transform", `translate(${i.x}, ${i.y})`);
}, "drawFrame"), j = m((t, e, a, r, i) => {
	if ("circle" === i) for (let e = 0; e < r; e++) {
		let i = a * (e + 1) / r;
		t.append("circle").attr("r", i).attr("class", "radarGraticule");
	}
	else if ("polygon" === i) {
		let i = e.length;
		for (let n = 0; n < r; n++) {
			let s = a * (n + 1) / r, l = e.map((t, e) => {
				let a = 2 * e * Math.PI / i - Math.PI / 2, r = s * Math.cos(a), n = s * Math.sin(a);
				return `${r},${n}`;
			}).join(" ");
			t.append("polygon").attr("points", l).attr("class", "radarGraticule");
		}
	}
}, "drawGraticule"), E = m((t, e, a, r) => {
	let i = e.length;
	for (let n = 0; n < i; n++) {
		let s = e[n].label, l = 2 * n * Math.PI / i - Math.PI / 2;
		t.append("line").attr("x1", 0).attr("y1", 0).attr("x2", a * r.axisScaleFactor * Math.cos(l)).attr("y2", a * r.axisScaleFactor * Math.sin(l)).attr("class", "radarAxisLine"), t.append("text").text(s).attr("x", a * r.axisLabelFactor * Math.cos(l)).attr("y", a * r.axisLabelFactor * Math.sin(l)).attr("class", "radarAxisLabel");
	}
}, "drawAxes");
function F(t, e, a, r, i, n, s) {
	let l = e.length, o = Math.min(s.width, s.height) / 2;
	a.forEach((e, a) => {
		if (e.entries.length !== l) return;
		let d = e.entries.map((t, e) => {
			let a = 2 * Math.PI * e / l - Math.PI / 2, n = R(t, r, i, o);
			return {
				x: n * Math.cos(a),
				y: n * Math.sin(a)
			};
		});
		"circle" === n ? t.append("path").attr("d", P(d, s.curveTension)).attr("class", `radarCurve-${a}`) : "polygon" === n && t.append("polygon").attr("points", d.map((t) => `${t.x},${t.y}`).join(" ")).attr("class", `radarCurve-${a}`);
	});
}
function R(t, e, a, r) {
	return r * (Math.min(Math.max(t, e), a) - e) / (a - e);
}
function P(t, e) {
	let a = t.length, r = `M${t[0].x},${t[0].y}`;
	for (let i = 0; i < a; i++) {
		let n = t[(i - 1 + a) % a], s = t[i], l = t[(i + 1) % a], o = t[(i + 2) % a], d = {
			x: s.x + (l.x - n.x) * e,
			y: s.y + (l.y - n.y) * e
		}, c = {
			x: l.x - (o.x - s.x) * e,
			y: l.y - (o.y - s.y) * e
		};
		r += ` C${d.x},${d.y} ${c.x},${c.y} ${l.x},${l.y}`;
	}
	return `${r} Z`;
}
function z(t, e, a, r) {
	if (!a) return;
	let i = (r.width / 2 + r.marginRight) * 3 / 4, n = -(3 * (r.height / 2 + r.marginTop)) / 4;
	e.forEach((e, a) => {
		let r = t.append("g").attr("transform", `translate(${i}, ${n + 20 * a})`);
		r.append("rect").attr("width", 12).attr("height", 12).attr("class", `radarLegendBox-${a}`), r.append("text").attr("x", 16).attr("y", 0).attr("class", "radarLegendText").text(e.label);
	});
}
m(F, "drawCurves"), m(R, "relativeRadius"), m(P, "closedRoundCurve"), m(z, "drawLegend");
var D = m((t, e) => {
	let a = "";
	for (let r = 0; r < t.THEME_COLOR_LIMIT; r++) {
		let i = t[`cScale${r}`];
		a += `
		.radarCurve-${r} {
			color: ${i};
			fill: ${i};
			fill-opacity: ${e.curveOpacity};
			stroke: ${i};
			stroke-width: ${e.curveStrokeWidth};
		}
		.radarLegendBox-${r} {
			fill: ${i};
			fill-opacity: ${e.curveOpacity};
			stroke: ${i};
		}
		`;
	}
	return a;
}, "genIndexStyles"), G = m((t) => {
	let e = p(o(), d().themeVariables), a = p(e.radar, t);
	return {
		themeVariables: e,
		radarOptions: a
	};
}, "buildRadarStyleOptions"), V = {
	parser: O,
	db: A,
	renderer: { draw: S },
	styles: m(({ radar: t } = {}) => {
		let { themeVariables: e, radarOptions: a } = G(t);
		return `
	.radarTitle {
		font-size: ${e.fontSize};
		color: ${e.titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${a.axisColor};
		stroke-width: ${a.axisStrokeWidth};
	}
	.radarAxisLabel {
		dominant-baseline: middle;
		text-anchor: middle;
		font-size: ${a.axisLabelFontSize}px;
		color: ${a.axisColor};
	}
	.radarGraticule {
		fill: ${a.graticuleColor};
		fill-opacity: ${a.graticuleOpacity};
		stroke: ${a.graticuleColor};
		stroke-width: ${a.graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${a.legendFontSize}px;
		dominant-baseline: hanging;
	}
	${D(e, a)}
	`;
	}, "styles")
};
export { V as diagram };
