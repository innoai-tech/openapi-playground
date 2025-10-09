import { $ as Vo, A as $o, F as Go, G as No, I as Ho, L as Ii, Mn as c, Q as Uo, W as Ni, hn as pt, jn as p, k as d, m as Lt, pt as jo, q as Ot } from "./vendor-min-mermaid~architectureDiagram-4X3Z3J56.DWYt-xtR.chunk.js";
import { Q as m } from "./vendor-min-mermaid~architecture-U656AL7Q-3ZQKGQJL.C9KaGX8x.chunk.js";
var f = {
	showLegend: !0,
	ticks: 5,
	max: null,
	min: 0,
	graticule: "circle"
}, P = {
	axes: [],
	curves: [],
	options: f
}, g = /* @__PURE__ */ structuredClone(P), q = Ni.radar, z = /* @__PURE__ */ m(() => Lt({
	...q,
	...Ot().radar
}), "getConfig"), k = /* @__PURE__ */ m(() => g.axes, "getAxes"), W = /* @__PURE__ */ m(() => g.curves, "getCurves"), H = /* @__PURE__ */ m(() => g.options, "getOptions"), N = /* @__PURE__ */ m((e) => {
	g.axes = /* @__PURE__ */ e.map((t) => ({
		name: t.name,
		label: t.label ?? t.name
	}));
}, "setAxes"), U = /* @__PURE__ */ m((e) => {
	g.curves = /* @__PURE__ */ e.map((t) => ({
		name: t.name,
		label: t.label ?? t.name,
		entries: /* @__PURE__ */ X(t.entries)
	}));
}, "setCurves"), X = /* @__PURE__ */ m((e) => {
	if (e[0].axis == null) return e.map((r) => r.value);
	let t = /* @__PURE__ */ k();
	if (t.length === 0) throw new Error("Axes must be populated before curves for reference entries");
	return t.map((r) => {
		let a = /* @__PURE__ */ e.find((o) => o.axis?.$refText === r.name);
		if (a === void 0) throw new Error("Missing entry for axis " + r.label);
		return a.value;
	});
}, "computeCurveEntries"), x = {
	getAxes: k,
	getCurves: W,
	getOptions: H,
	setAxes: N,
	setCurves: U,
	setOptions: /* @__PURE__ */ m((e) => {
		let t = /* @__PURE__ */ e.reduce((r, a) => (r[a.name] = a, r), {});
		g.options = {
			showLegend: t.showLegend?.value ?? f.showLegend,
			ticks: t.ticks?.value ?? f.ticks,
			max: t.max?.value ?? f.max,
			min: t.min?.value ?? f.min,
			graticule: t.graticule?.value ?? f.graticule
		};
	}, "setOptions"),
	getConfig: z,
	clear: /* @__PURE__ */ m(() => {
		No(), g = /* @__PURE__ */ structuredClone(P);
	}, "clear"),
	setAccTitle: Ho,
	getAccTitle: Uo,
	setDiagramTitle: jo,
	getDiagramTitle: Vo,
	getAccDescription: $o,
	setAccDescription: Go
};
var J = /* @__PURE__ */ m((e) => {
	c(e, x);
	let { axes: t, curves: r, options: a } = e;
	x.setAxes(t), x.setCurves(r), x.setOptions(a);
}, "populate"), E = { parse: /* @__PURE__ */ m(async (e) => {
	let t = await p("radar", e);
	pt.debug(t), J(t);
}, "parse") };
var K = /* @__PURE__ */ m((e, t, r, a) => {
	let o = a.db, s = /* @__PURE__ */ o.getAxes(), m$1 = /* @__PURE__ */ o.getCurves(), n = /* @__PURE__ */ o.getOptions(), l = /* @__PURE__ */ o.getConfig(), c$1 = /* @__PURE__ */ o.getDiagramTitle(), d$1 = /* @__PURE__ */ Q(/* @__PURE__ */ d(t), l), u = n.max ?? Math.max(.../* @__PURE__ */ m$1.map((b) => Math.max(...b.entries))), h = n.min, y = Math.min(l.width, l.height) / 2;
	tt(d$1, s, y, n.ticks, n.graticule), rt(d$1, s, y, l), et(d$1, s, m$1, h, u, n.graticule, l), nt(d$1, m$1, n.showLegend, l), d$1.append("text").attr("class", "radarTitle").text(c$1).attr("x", 0).attr("y", -l.height / 2 - l.marginTop);
}, "draw"), Q = /* @__PURE__ */ m((e, t) => {
	let r = t.width + t.marginLeft + t.marginRight, a = t.height + t.marginTop + t.marginBottom, o = {
		x: t.marginLeft + t.width / 2,
		y: t.marginTop + t.height / 2
	};
	return e.attr("viewbox", `0 0 ${r} ${a}`).attr("width", r).attr("height", a), e.append("g").attr("transform", `translate(${o.x}, ${o.y})`);
}, "drawFrame"), tt = /* @__PURE__ */ m((e, t, r, a, o) => {
	if (o === "circle") for (let s = 0; s < a; s++) {
		let m$1 = r * (s + 1) / a;
		e.append("circle").attr("r", m$1).attr("class", "radarGraticule");
	}
	else if (o === "polygon") {
		let s = t.length;
		for (let m$1 = 0; m$1 < a; m$1++) {
			let n = r * (m$1 + 1) / a, l = /* @__PURE__ */ t.map((c$1, p$1) => {
				let d$1 = 2 * p$1 * Math.PI / s - Math.PI / 2;
				return `${n * Math.cos(d$1)},${n * Math.sin(d$1)}`;
			}).join(" ");
			e.append("polygon").attr("points", l).attr("class", "radarGraticule");
		}
	}
}, "drawGraticule"), rt = /* @__PURE__ */ m((e, t, r, a) => {
	let o = t.length;
	for (let s = 0; s < o; s++) {
		let m$1 = t[s].label, n = 2 * s * Math.PI / o - Math.PI / 2;
		e.append("line").attr("x1", 0).attr("y1", 0).attr("x2", r * a.axisScaleFactor * Math.cos(n)).attr("y2", r * a.axisScaleFactor * Math.sin(n)).attr("class", "radarAxisLine"), e.append("text").text(m$1).attr("x", r * a.axisLabelFactor * Math.cos(n)).attr("y", r * a.axisLabelFactor * Math.sin(n)).attr("class", "radarAxisLabel");
	}
}, "drawAxes");
function et(e, t, r, a, o, s, m$1) {
	let n = t.length, l = Math.min(m$1.width, m$1.height) / 2;
	r.forEach((c$1, p$1) => {
		if (c$1.entries.length !== n) return;
		let d$1 = /* @__PURE__ */ c$1.entries.map((u, h) => {
			let y = 2 * Math.PI * h / n - Math.PI / 2, b = /* @__PURE__ */ at(u, a, o, l);
			return {
				x: b * Math.cos(y),
				y: b * Math.sin(y)
			};
		});
		s === "circle" ? e.append("path").attr("d", /* @__PURE__ */ ot(d$1, m$1.curveTension)).attr("class", `radarCurve-${p$1}`) : s === "polygon" && e.append("polygon").attr("points", /* @__PURE__ */ d$1.map((u) => `${u.x},${u.y}`).join(" ")).attr("class", `radarCurve-${p$1}`);
	});
}
m(et, "drawCurves");
function at(e, t, r, a) {
	return a * (Math.min(/* @__PURE__ */ Math.max(e, t), r) - t) / (r - t);
}
m(at, "relativeRadius");
function ot(e, t) {
	let r = e.length, a = `M${e[0].x},${e[0].y}`;
	for (let o = 0; o < r; o++) {
		let s = e[(o - 1 + r) % r], m$1 = e[o], n = e[(o + 1) % r], l = e[(o + 2) % r], c$1 = {
			x: m$1.x + (n.x - s.x) * t,
			y: m$1.y + (n.y - s.y) * t
		}, p$1 = {
			x: n.x - (l.x - m$1.x) * t,
			y: n.y - (l.y - m$1.y) * t
		};
		a += ` C${c$1.x},${c$1.y} ${p$1.x},${p$1.y} ${n.x},${n.y}`;
	}
	return `${a} Z`;
}
m(ot, "closedRoundCurve");
function nt(e, t, r, a) {
	if (!r) return;
	let o = (a.width / 2 + a.marginRight) * 3 / 4, s = -(a.height / 2 + a.marginTop) * 3 / 4, m$1 = 20;
	t.forEach((n, l) => {
		let c$1 = /* @__PURE__ */ e.append("g").attr("transform", `translate(${o}, ${s + l * m$1})`);
		c$1.append("rect").attr("width", 12).attr("height", 12).attr("class", `radarLegendBox-${l}`), c$1.append("text").attr("x", 16).attr("y", 0).attr("class", "radarLegendText").text(n.label);
	});
}
m(nt, "drawLegend");
var I = { draw: K };
var it = /* @__PURE__ */ m((e, t) => {
	let r = "";
	for (let a = 0; a < e.THEME_COLOR_LIMIT; a++) {
		let o = e[`cScale${a}`];
		r += `
		.radarCurve-${a} {
			color: ${o};
			fill: ${o};
			fill-opacity: ${t.curveOpacity};
			stroke: ${o};
			stroke-width: ${t.curveStrokeWidth};
		}
		.radarLegendBox-${a} {
			fill: ${o};
			fill-opacity: ${t.curveOpacity};
			stroke: ${o};
		}
		`;
	}
	return r;
}, "genIndexStyles"), st = /* @__PURE__ */ m((e) => {
	let a = /* @__PURE__ */ Lt(/* @__PURE__ */ Ii(), Ot().themeVariables);
	return {
		themeVariables: a,
		radarOptions: /* @__PURE__ */ Lt(a.radar, e)
	};
}, "buildRadarStyleOptions");
var Tt = {
	parser: E,
	db: x,
	renderer: I,
	styles: /* @__PURE__ */ m(({ radar: e } = {}) => {
		let { themeVariables: t, radarOptions: r } = st(e);
		return `
	.radarTitle {
		font-size: ${t.fontSize};
		color: ${t.titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${r.axisColor};
		stroke-width: ${r.axisStrokeWidth};
	}
	.radarAxisLabel {
		dominant-baseline: middle;
		text-anchor: middle;
		font-size: ${r.axisLabelFontSize}px;
		color: ${r.axisColor};
	}
	.radarGraticule {
		fill: ${r.graticuleColor};
		fill-opacity: ${r.graticuleOpacity};
		stroke: ${r.graticuleColor};
		stroke-width: ${r.graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${r.legendFontSize}px;
		dominant-baseline: hanging;
	}
	${it(t, r)}
	`;
	}, "styles")
};
export { Tt as t };
