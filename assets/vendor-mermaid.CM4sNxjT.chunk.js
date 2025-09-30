import { $t as e, A as t, G as a, J as i, M as r, S as l, Xt as s, d as o, f as n, j as d, mt as p, o as c, x as m, yt as u } from "./vendor-min-mermaid~chunk-5V7UUW6L.B--ayk72.chunk.js";
import { Z as h } from "./vendor-min-mermaid~chunk-2XYWPRAO.Da8Ms7Co.chunk.js";
import { t as g } from "./vendor-mermaid.Vvvvrg2S.chunk.js";
import { t as f } from "./vendor-mermaid.CNStX6fI.chunk.js";
import { t as x } from "./vendor-mermaid.BVwC1HkE.chunk.js";
import { a as v, t as S } from "./vendor-min-mermaid~chunk-EFRVIJHI.B3AEJspH.chunk.js";
var w = m.pie, $ = {
	sections: /* @__PURE__ */ new Map(),
	showData: !1,
	config: w
}, y = $.sections, k = $.showData, b = structuredClone(w), T = {
	getConfig: h(() => structuredClone(b), "getConfig"),
	clear: h(() => {
		y = /* @__PURE__ */ new Map(), k = $.showData, l();
	}, "clear"),
	setDiagramTitle: a,
	getDiagramTitle: d,
	setAccTitle: n,
	getAccTitle: t,
	setAccDescription: o,
	getAccDescription: c,
	addSection: h(({ label: t, value: a }) => {
		if (a < 0) throw Error(`"${t}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);
		y.has(t) || (y.set(t, a), e.debug(`added new section: ${t}, with value: ${a}`));
	}, "addSection"),
	getSections: h(() => y, "getSections"),
	setShowData: h((e) => {
		k = e;
	}, "setShowData"),
	getShowData: h(() => k, "getShowData")
}, D = h((e, t) => {
	g(e, t), t.setShowData(e.showData), e.sections.map(t.addSection);
}, "populateDb"), C = { parse: h(async (t) => {
	let a = await f("pie", t);
	e.debug(a), D(a, T);
}, "parse") }, A = h((e) => `
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
`, "getStyles"), j = h((e) => {
	let t = [...e.values()].reduce((e, t) => e + t, 0), a = [...e.entries()].map(([e, t]) => ({
		label: e,
		value: t
	})).filter((e) => e.value / t * 100 >= 1).sort((e, t) => t.value - e.value);
	return p().value((e) => e.value)(a);
}, "createPieArcs"), O = {
	parser: C,
	db: T,
	renderer: { draw: h((t, a, l, o) => {
		e.debug(`rendering pie chart
` + t);
		let n = o.db, d = i(), p = v(n.getConfig(), d.pie), c = x(a), m = c.append("g");
		m.attr("transform", "translate(225,225)");
		let { themeVariables: h } = d, [g] = S(h.pieOuterStrokeWidth);
		g ??= 2;
		let f = p.textPosition, w = s().innerRadius(0).outerRadius(185), $ = s().innerRadius(185 * f).outerRadius(185 * f);
		m.append("circle").attr("cx", 0).attr("cy", 0).attr("r", 185 + g / 2).attr("class", "pieOuterCircle");
		let y = n.getSections(), k = j(y), b = [
			h.pie1,
			h.pie2,
			h.pie3,
			h.pie4,
			h.pie5,
			h.pie6,
			h.pie7,
			h.pie8,
			h.pie9,
			h.pie10,
			h.pie11,
			h.pie12
		], T = 0;
		y.forEach((e) => {
			T += e;
		});
		let D = k.filter((e) => "0" !== (e.data.value / T * 100).toFixed(0)), C = u(b);
		m.selectAll("mySlices").data(D).enter().append("path").attr("d", w).attr("fill", (e) => C(e.data.label)).attr("class", "pieCircle"), m.selectAll("mySlices").data(D).enter().append("text").text((e) => (e.data.value / T * 100).toFixed(0) + "%").attr("transform", (e) => "translate(" + $.centroid(e) + ")").style("text-anchor", "middle").attr("class", "slice"), m.append("text").text(n.getDiagramTitle()).attr("x", 0).attr("y", -200).attr("class", "pieTitleText");
		let A = [...y.entries()].map(([e, t]) => ({
			label: e,
			value: t
		})), O = m.selectAll(".legend").data(A).enter().append("g").attr("class", "legend").attr("transform", (e, t) => "translate(216," + (22 * t - 22 * A.length / 2) + ")");
		O.append("rect").attr("width", 18).attr("height", 18).style("fill", (e) => C(e.label)).style("stroke", (e) => C(e.label)), O.append("text").attr("x", 22).attr("y", 14).text((e) => n.getShowData() ? `${e.label} [${e.value}]` : e.label);
		let R = 512 + Math.max(...O.selectAll("text").nodes().map((e) => e?.getBoundingClientRect().width ?? 0));
		c.attr("viewBox", `0 0 ${R} 450`), r(c, 450, R, p.useMaxWidth);
	}, "draw") },
	styles: A
};
export { O as diagram };
