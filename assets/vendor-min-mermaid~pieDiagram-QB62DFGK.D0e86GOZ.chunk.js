import { $ as Vo, A as $o, F as Go, G as No, I as Ho, It as Ds, Mn as c, Q as Uo, Rt as He, W as Ni, et as Wo, fn as ks, gt as mr, hn as pt, jn as p, k as d, m as Lt, pt as jo, u as $ } from "./vendor-min-mermaid~architectureDiagram-4X3Z3J56.DWYnMD9N.chunk.js";
import { Q as m } from "./vendor-min-mermaid~architecture-U656AL7Q-3ZQKGQJL.BHePMx5P.chunk.js";
var X = Ni.pie, w = {
	sections: /* @__PURE__ */ new Map(),
	showData: !1,
	config: X
}, f = w.sections, A = w.showData, pe = /* @__PURE__ */ structuredClone(X), g = {
	getConfig: /* @__PURE__ */ m(() => structuredClone(pe), "getConfig"),
	clear: /* @__PURE__ */ m(() => {
		f = /* @__PURE__ */ new Map(), A = w.showData, No();
	}, "clear"),
	setDiagramTitle: jo,
	getDiagramTitle: Vo,
	setAccTitle: Ho,
	getAccTitle: Uo,
	setAccDescription: Go,
	getAccDescription: $o,
	addSection: /* @__PURE__ */ m(({ label: e, value: i }) => {
		if (i < 0) throw new Error(`"${e}" has invalid value: ${i}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);
		f.has(e) || (f.set(e, i), pt.debug(`added new section: ${e}, with value: ${i}`));
	}, "addSection"),
	getSections: /* @__PURE__ */ m(() => f, "getSections"),
	setShowData: /* @__PURE__ */ m((e) => {
		A = e;
	}, "setShowData"),
	getShowData: /* @__PURE__ */ m(() => A, "getShowData")
};
var Se = /* @__PURE__ */ m((e, i) => {
	c(e, i), i.setShowData(e.showData), e.sections.map(i.addSection);
}, "populateDb"), Y = { parse: /* @__PURE__ */ m(async (e) => {
	let i = await p("pie", e);
	pt.debug(i), Se(i, g);
}, "parse") };
var ee = /* @__PURE__ */ m((e) => `
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`, "getStyles");
var he = /* @__PURE__ */ m((e) => {
	let i = /* @__PURE__ */ [.../* @__PURE__ */ e.values()].reduce((o, n) => o + n, 0), T = /* @__PURE__ */ [.../* @__PURE__ */ e.entries()].map(([o, n]) => ({
		label: o,
		value: n
	})).filter((o) => o.value / i * 100 >= 1).sort((o, n) => n.value - o.value);
	return Ds().value((o) => o.value)(T);
}, "createPieArcs");
var Ue = {
	parser: Y,
	db: g,
	renderer: { draw: /* @__PURE__ */ m((e, i, T, v) => {
		pt.debug(`rendering pie chart
` + e);
		let o = v.db, n = /* @__PURE__ */ mr(), $$1 = /* @__PURE__ */ Lt(/* @__PURE__ */ o.getConfig(), n.pie), b = 40, s = 18, m$1 = 4, c$1 = 450, D = c$1, u = /* @__PURE__ */ d(i), l = /* @__PURE__ */ u.append("g");
		l.attr("transform", "translate(" + D / 2 + "," + c$1 / 2 + ")");
		let { themeVariables: a } = n, [E] = $(a.pieOuterStrokeWidth);
		E ??= 2;
		let G = $$1.textPosition, d$1 = Math.min(D, c$1) / 2 - b, ie = /* @__PURE__ */ ks().innerRadius(0).outerRadius(d$1), re = /* @__PURE__ */ ks().innerRadius(d$1 * G).outerRadius(d$1 * G);
		l.append("circle").attr("cx", 0).attr("cy", 0).attr("r", d$1 + E / 2).attr("class", "pieOuterCircle");
		let S = /* @__PURE__ */ o.getSections(), oe = /* @__PURE__ */ he(S), ae = [
			a.pie1,
			a.pie2,
			a.pie3,
			a.pie4,
			a.pie5,
			a.pie6,
			a.pie7,
			a.pie8,
			a.pie9,
			a.pie10,
			a.pie11,
			a.pie12
		], y = 0;
		S.forEach((t) => {
			y += t;
		});
		let k = /* @__PURE__ */ oe.filter((t) => (t.data.value / y * 100).toFixed(0) !== "0"), h = /* @__PURE__ */ He(ae);
		l.selectAll("mySlices").data(k).enter().append("path").attr("d", ie).attr("fill", (t) => h(t.data.label)).attr("class", "pieCircle"), l.selectAll("mySlices").data(k).enter().append("text").text((t) => (t.data.value / y * 100).toFixed(0) + "%").attr("transform", (t) => "translate(" + re.centroid(t) + ")").style("text-anchor", "middle").attr("class", "slice"), l.append("text").text(/* @__PURE__ */ o.getDiagramTitle()).attr("x", 0).attr("y", -(c$1 - 50) / 2).attr("class", "pieTitleText");
		let F = /* @__PURE__ */ [.../* @__PURE__ */ S.entries()].map(([t, x]) => ({
			label: t,
			value: x
		})), P = /* @__PURE__ */ l.selectAll(".legend").data(F).enter().append("g").attr("class", "legend").attr("transform", (t, x) => {
			let O = s + m$1, se = O * F.length / 2, ce = 12 * s, le = x * O - se;
			return "translate(" + ce + "," + le + ")";
		});
		P.append("rect").attr("width", s).attr("height", s).style("fill", (t) => h(t.label)).style("stroke", (t) => h(t.label)), P.append("text").attr("x", s + m$1).attr("y", s - m$1).text((t) => o.getShowData() ? `${t.label} [${t.value}]` : t.label);
		let ne = /* @__PURE__ */ Math.max(.../* @__PURE__ */ P.selectAll("text").nodes().map((t) => t?.getBoundingClientRect().width ?? 0)), R = D + b + s + m$1 + ne;
		u.attr("viewBox", `0 0 ${R} ${c$1}`), Wo(u, c$1, R, $$1.useMaxWidth);
	}, "draw") },
	styles: ee
};
export { Ue as t };
