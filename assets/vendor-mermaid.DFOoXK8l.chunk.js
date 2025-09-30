import { $t as e, A as t, G as a, M as l, S as s, Tt as r, ct as i, d as n, f as o, j as c, jt as d, n as p, o as h, qt as m, r as y, w as f, x as u, yt as S } from "./vendor-min-mermaid~chunk-5V7UUW6L.B--ayk72.chunk.js";
import { Z as g } from "./vendor-min-mermaid~chunk-2XYWPRAO.Da8Ms7Co.chunk.js";
import { t as x } from "./vendor-mermaid.Vvvvrg2S.chunk.js";
import { t as v } from "./vendor-mermaid.CNStX6fI.chunk.js";
import { t as b } from "./vendor-mermaid.BVwC1HkE.chunk.js";
import { a as C } from "./vendor-min-mermaid~chunk-EFRVIJHI.B3AEJspH.chunk.js";
import { t as $ } from "./vendor-mermaid.CERiOASV.chunk.js";
var w = class {
	constructor() {
		this.nodes = [], this.levels = /* @__PURE__ */ new Map(), this.outerNodes = [], this.classes = /* @__PURE__ */ new Map(), this.setAccTitle = o, this.getAccTitle = t, this.setDiagramTitle = a, this.getDiagramTitle = c, this.getAccDescription = h, this.setAccDescription = n;
	}
	static {
		g(this, "TreeMapDB");
	}
	getNodes() {
		return this.nodes;
	}
	getConfig() {
		let e = f();
		return C({
			...u.treemap,
			...e.treemap ?? {}
		});
	}
	addNode(e, t) {
		this.nodes.push(e), this.levels.set(e, t), 0 === t && (this.outerNodes.push(e), this.root ??= e);
	}
	getRoot() {
		return {
			name: "",
			children: this.outerNodes
		};
	}
	addClass(e, t) {
		let a = this.classes.get(e) ?? {
			id: e,
			styles: [],
			textStyles: []
		}, l = t.replace(/\\,/g, "§§§").replace(/,/g, ";").replace(/§§§/g, ",").split(";");
		l && l.forEach((e) => {
			p(e) && (a?.textStyles ? a.textStyles.push(e) : a.textStyles = [e]), a?.styles ? a.styles.push(e) : a.styles = [e];
		}), this.classes.set(e, a);
	}
	getClasses() {
		return this.classes;
	}
	getStylesForClass(e) {
		return this.classes.get(e)?.styles ?? [];
	}
	clear() {
		s(), this.nodes = [], this.levels = /* @__PURE__ */ new Map(), this.outerNodes = [], this.classes = /* @__PURE__ */ new Map(), this.root = void 0;
	}
};
function k(e) {
	if (!e.length) return [];
	let t = [], a = [];
	return e.forEach((e) => {
		let l = {
			name: e.name,
			children: "Leaf" === e.type ? void 0 : []
		};
		for (l.classSelector = e?.classSelector, e?.cssCompiledStyles && (l.cssCompiledStyles = [e.cssCompiledStyles]), "Leaf" === e.type && void 0 !== e.value && (l.value = e.value); a.length > 0 && a[a.length - 1].level >= e.level;) a.pop();
		if (0 === a.length) t.push(l);
		else {
			let e = a[a.length - 1].node;
			e.children ? e.children.push(l) : e.children = [l];
		}
		"Leaf" !== e.type && a.push({
			node: l,
			level: e.level
		});
	}), t;
}
g(k, "buildHierarchy");
var L = g((e, t) => {
	x(e, t);
	let a = [];
	for (let a of e.TreemapRows ?? []) "ClassDefStatement" === a.$type && t.addClass(a.className ?? "", a.styleText ?? "");
	for (let l of e.TreemapRows ?? []) {
		let e = l.item;
		if (!e) continue;
		let s = l.indent ? parseInt(l.indent) : 0, r = T(e), i = e.classSelector ? t.getStylesForClass(e.classSelector) : [], n = i.length > 0 ? i.join(";") : void 0, o = {
			level: s,
			name: r,
			type: e.$type,
			value: e.value,
			classSelector: e.classSelector,
			cssCompiledStyles: n
		};
		a.push(o);
	}
	let l = k(a), s = g((e, a) => {
		for (let l of e) t.addNode(l, a), l.children && l.children.length > 0 && s(l.children, a + 1);
	}, "addNodesRecursively");
	s(l, 0);
}, "populate"), T = g((e) => e.name ? String(e.name) : "", "getItemName"), M = {
	parser: { yy: void 0 },
	parse: g(async (t) => {
		try {
			let a = await v("treemap", t);
			e.debug("Treemap AST:", a);
			let l = M.parser?.yy;
			if (!(l instanceof w)) throw Error("parser.parser?.yy was not a TreemapDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");
			L(a, l);
		} catch (t) {
			throw e.error("Error parsing treemap:", t), t;
		}
	}, "parse")
}, z = g((t, a, s, n) => {
	let o, c = n.db, p = c.getConfig(), h = p.padding ?? 10, u = c.getDiagramTitle(), x = c.getRoot(), { themeVariables: v } = f();
	if (!x) return;
	let C = 30 * !!u, w = b(a), k = p.nodeWidth ? 10 * p.nodeWidth : 960, L = p.nodeHeight ? 10 * p.nodeHeight : 500, T = L + C;
	w.attr("viewBox", `0 0 ${k} ${T}`), l(w, T, k, p.useMaxWidth);
	try {
		let e = p.valueFormat || ",";
		if ("$0,0" === e) o = g((e) => "$" + i(",")(e), "valueFormat");
		else if (e.startsWith("$") && e.includes(",")) {
			let t = /\.\d+/.exec(e), a = t ? t[0] : "";
			o = g((e) => "$" + i("," + a)(e), "valueFormat");
		} else if (e.startsWith("$")) {
			let t = e.substring(1);
			o = g((e) => "$" + i(t || "")(e), "valueFormat");
		} else o = i(e);
	} catch (t) {
		e.error("Error creating format function:", t), o = i(",");
	}
	let M = S().range([
		"transparent",
		v.cScale0,
		v.cScale1,
		v.cScale2,
		v.cScale3,
		v.cScale4,
		v.cScale5,
		v.cScale6,
		v.cScale7,
		v.cScale8,
		v.cScale9,
		v.cScale10,
		v.cScale11
	]), z = S().range([
		"transparent",
		v.cScalePeer0,
		v.cScalePeer1,
		v.cScalePeer2,
		v.cScalePeer3,
		v.cScalePeer4,
		v.cScalePeer5,
		v.cScalePeer6,
		v.cScalePeer7,
		v.cScalePeer8,
		v.cScalePeer9,
		v.cScalePeer10,
		v.cScalePeer11
	]), F = S().range([
		v.cScaleLabel0,
		v.cScaleLabel1,
		v.cScaleLabel2,
		v.cScaleLabel3,
		v.cScaleLabel4,
		v.cScaleLabel5,
		v.cScaleLabel6,
		v.cScaleLabel7,
		v.cScaleLabel8,
		v.cScaleLabel9,
		v.cScaleLabel10,
		v.cScaleLabel11
	]);
	u && w.append("text").attr("x", k / 2).attr("y", C / 2).attr("class", "treemapTitle").attr("text-anchor", "middle").attr("dominant-baseline", "middle").text(u);
	let P = w.append("g").attr("transform", `translate(0, ${C})`).attr("class", "treemapContainer"), N = r(x).sum((e) => e.value ?? 0).sort((e, t) => (t.value ?? 0) - (e.value ?? 0)), j = d().size([k, L]).paddingTop((e) => e.children && e.children.length > 0 ? 35 : 0).paddingInner(h).paddingLeft((e) => e.children && e.children.length > 0 ? 10 : 0).paddingRight((e) => e.children && e.children.length > 0 ? 10 : 0).paddingBottom((e) => e.children && e.children.length > 0 ? 10 : 0).round(!0)(N), W = j.descendants().filter((e) => e.children && e.children.length > 0), A = P.selectAll(".treemapSection").data(W).enter().append("g").attr("class", "treemapSection").attr("transform", (e) => `translate(${e.x0},${e.y0})`);
	A.append("rect").attr("width", (e) => e.x1 - e.x0).attr("height", 25).attr("class", "treemapSectionHeader").attr("fill", "none").attr("fill-opacity", .6).attr("stroke-width", .6).attr("style", (e) => 0 === e.depth ? "display: none;" : ""), A.append("clipPath").attr("id", (e, t) => `clip-section-${a}-${t}`).append("rect").attr("width", (e) => Math.max(0, e.x1 - e.x0 - 12)).attr("height", 25), A.append("rect").attr("width", (e) => e.x1 - e.x0).attr("height", (e) => e.y1 - e.y0).attr("class", (e, t) => `treemapSection section${t}`).attr("fill", (e) => M(e.data.name)).attr("fill-opacity", .6).attr("stroke", (e) => z(e.data.name)).attr("stroke-width", 2).attr("stroke-opacity", .4).attr("style", (e) => {
		if (0 === e.depth) return "display: none;";
		let t = y({ cssCompiledStyles: e.data.cssCompiledStyles });
		return t.nodeStyles + ";" + t.borderStyles.join(";");
	}), A.append("text").attr("class", "treemapSectionLabel").attr("x", 6).attr("y", 12.5).attr("dominant-baseline", "middle").text((e) => 0 === e.depth ? "" : e.data.name).attr("font-weight", "bold").attr("style", (e) => 0 === e.depth ? "display: none;" : "dominant-baseline: middle; font-size: 12px; fill:" + F(e.data.name) + "; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" + y({ cssCompiledStyles: e.data.cssCompiledStyles }).labelStyles.replace("color:", "fill:")).each(function(e) {
		if (0 === e.depth) return;
		let t = m(this), a = e.data.name;
		t.text(a);
		let l = e.x1 - e.x0, s = Math.max(15, !1 !== p.showValues && e.value ? l - 10 - 30 - 10 - 6 : l - 6 - 6), r = t.node();
		if (r.getComputedTextLength() > s) {
			let e = a;
			for (; e.length > 0;) {
				if (0 === (e = a.substring(0, e.length - 1)).length) {
					t.text("..."), r.getComputedTextLength() > s && t.text("");
					break;
				}
				if (t.text(e + "..."), r.getComputedTextLength() <= s) break;
			}
		}
	}), !1 !== p.showValues && A.append("text").attr("class", "treemapSectionValue").attr("x", (e) => e.x1 - e.x0 - 10).attr("y", 12.5).attr("text-anchor", "end").attr("dominant-baseline", "middle").text((e) => e.value ? o(e.value) : "").attr("font-style", "italic").attr("style", (e) => 0 === e.depth ? "display: none;" : "text-anchor: end; dominant-baseline: middle; font-size: 10px; fill:" + F(e.data.name) + "; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" + y({ cssCompiledStyles: e.data.cssCompiledStyles }).labelStyles.replace("color:", "fill:"));
	let V = j.leaves(), D = P.selectAll(".treemapLeafGroup").data(V).enter().append("g").attr("class", (e, t) => `treemapNode treemapLeafGroup leaf${t}${e.data.classSelector ? ` ${e.data.classSelector}` : ""}x`).attr("transform", (e) => `translate(${e.x0},${e.y0})`);
	D.append("rect").attr("width", (e) => e.x1 - e.x0).attr("height", (e) => e.y1 - e.y0).attr("class", "treemapLeaf").attr("fill", (e) => e.parent ? M(e.parent.data.name) : M(e.data.name)).attr("style", (e) => y({ cssCompiledStyles: e.data.cssCompiledStyles }).nodeStyles).attr("fill-opacity", .3).attr("stroke", (e) => e.parent ? M(e.parent.data.name) : M(e.data.name)).attr("stroke-width", 3), D.append("clipPath").attr("id", (e, t) => `clip-${a}-${t}`).append("rect").attr("width", (e) => Math.max(0, e.x1 - e.x0 - 4)).attr("height", (e) => Math.max(0, e.y1 - e.y0 - 4)), D.append("text").attr("class", "treemapLabel").attr("x", (e) => (e.x1 - e.x0) / 2).attr("y", (e) => (e.y1 - e.y0) / 2).attr("style", (e) => "text-anchor: middle; dominant-baseline: middle; font-size: 38px;fill:" + F(e.data.name) + ";" + y({ cssCompiledStyles: e.data.cssCompiledStyles }).labelStyles.replace("color:", "fill:")).attr("clip-path", (e, t) => `url(#clip-${a}-${t})`).text((e) => e.data.name).each(function(e) {
		let t = m(this), a = e.x1 - e.x0, l = e.y1 - e.y0, s = t.node(), r = a - 8, i = l - 8;
		if (r < 10 || i < 10) return void t.style("display", "none");
		let n = parseInt(t.style("font-size"), 10);
		for (; s.getComputedTextLength() > r && n > 8;) n--, t.style("font-size", `${n}px`);
		let o = Math.max(6, Math.min(28, Math.round(.6 * n))), c = n + 2 + o;
		for (; c > i && n > 8 && !((o = Math.max(6, Math.min(28, Math.round(.6 * --n)))) < 6 && 8 === n);) t.style("font-size", `${n}px`), c = n + 2 + o;
		t.style("font-size", `${n}px`), (s.getComputedTextLength() > r || n < 8 || i < n) && t.style("display", "none");
	}), !1 !== p.showValues && D.append("text").attr("class", "treemapValue").attr("x", (e) => (e.x1 - e.x0) / 2).attr("y", function(e) {
		return (e.y1 - e.y0) / 2;
	}).attr("style", (e) => "text-anchor: middle; dominant-baseline: hanging; font-size: 28px;fill:" + F(e.data.name) + ";" + y({ cssCompiledStyles: e.data.cssCompiledStyles }).labelStyles.replace("color:", "fill:")).attr("clip-path", (e, t) => `url(#clip-${a}-${t})`).text((e) => e.value ? o(e.value) : "").each(function(e) {
		let t = m(this), a = this.parentNode;
		if (!a) return void t.style("display", "none");
		let l = m(a).select(".treemapLabel");
		if (l.empty() || "none" === l.style("display")) return void t.style("display", "none");
		let s = parseFloat(l.style("font-size")), r = Math.max(6, Math.min(28, Math.round(.6 * s)));
		t.style("font-size", `${r}px`);
		let i = (e.y1 - e.y0) / 2 + s / 2 + 2;
		t.attr("y", i);
		let n = e.x1 - e.x0, o = e.y1 - e.y0 - 4;
		t.node().getComputedTextLength() > n - 8 || i + r > o || r < 6 ? t.style("display", "none") : t.style("display", null);
	}), $(w, p.diagramPadding ?? 8, "flowchart", p?.useMaxWidth || !1);
}, "draw"), F = g(function(e, t) {
	return t.db.getClasses();
}, "getClasses"), P = {
	sectionStrokeColor: "black",
	sectionStrokeWidth: "1",
	sectionFillColor: "#efefef",
	leafStrokeColor: "black",
	leafStrokeWidth: "1",
	leafFillColor: "#efefef",
	labelColor: "black",
	labelFontSize: "12px",
	valueFontSize: "10px",
	valueColor: "black",
	titleColor: "black",
	titleFontSize: "14px"
}, N = {
	parser: M,
	get db() {
		return new w();
	},
	renderer: {
		draw: z,
		getClasses: F
	},
	styles: g(({ treemap: e } = {}) => {
		let t = C(P, e);
		return `
  .treemapNode.section {
    stroke: ${t.sectionStrokeColor};
    stroke-width: ${t.sectionStrokeWidth};
    fill: ${t.sectionFillColor};
  }
  .treemapNode.leaf {
    stroke: ${t.leafStrokeColor};
    stroke-width: ${t.leafStrokeWidth};
    fill: ${t.leafFillColor};
  }
  .treemapLabel {
    fill: ${t.labelColor};
    font-size: ${t.labelFontSize};
  }
  .treemapValue {
    fill: ${t.valueColor};
    font-size: ${t.valueFontSize};
  }
  .treemapTitle {
    fill: ${t.titleColor};
    font-size: ${t.titleFontSize};
  }
  `;
	}, "getStyles")
};
export { N as diagram };
