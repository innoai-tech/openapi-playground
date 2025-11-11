import { $ as Vo, A as $o, At as $n, F as Go, G as No, I as Ho, Mn as c, Q as Uo, Rt as He, W as Ni, Wt as Pn, Yt as Ua, et as Wo, hn as pt, jn as p, k as d, ln as ia, m as Lt, pt as jo, q as Ot } from "./vendor-min-mermaid~architectureDiagram-4X3Z3J56.3cmRlxJg.chunk.js";
import { Q as m$1 } from "./vendor-min-mermaid~architecture-U656AL7Q-3ZQKGQJL.BHePMx5P.chunk.js";
import { a as y } from "./vendor-min-mermaid~chunk-BHQAJ5QI.DzC7aGML.chunk.js";
import { n as g, r as m } from "./vendor-min-mermaid~chunk-5V7UUW6L.CVKcaz_P.chunk.js";
var $ = class {
	constructor() {
		this.nodes = [];
		this.levels = /* @__PURE__ */ new Map();
		this.outerNodes = [];
		this.classes = /* @__PURE__ */ new Map();
		this.setAccTitle = Ho;
		this.getAccTitle = Uo;
		this.setDiagramTitle = jo;
		this.getDiagramTitle = Vo;
		this.getAccDescription = $o;
		this.setAccDescription = Go;
	}
	static {
		m$1(this, "TreeMapDB");
	}
	getNodes() {
		return this.nodes;
	}
	getConfig() {
		let a = Ni, n = /* @__PURE__ */ Ot();
		return Lt({
			...a.treemap,
			...n.treemap ?? {}
		});
	}
	addNode(a, n) {
		this.nodes.push(a), this.levels.set(a, n), n === 0 && (this.outerNodes.push(a), this.root ??= a);
	}
	getRoot() {
		return {
			name: "",
			children: this.outerNodes
		};
	}
	addClass(a, n) {
		let o = this.classes.get(a) ?? {
			id: a,
			styles: [],
			textStyles: []
		}, c$1 = /* @__PURE__ */ n.replace(/\\,/g, "§§§").replace(/,/g, ";").replace(/§§§/g, ",").split(";");
		c$1 && c$1.forEach((l) => {
			g(l) && (o?.textStyles ? o.textStyles.push(l) : o.textStyles = [l]), o?.styles ? o.styles.push(l) : o.styles = [l];
		}), this.classes.set(a, o);
	}
	getClasses() {
		return this.classes;
	}
	getStylesForClass(a) {
		return this.classes.get(a)?.styles ?? [];
	}
	clear() {
		No(), this.nodes = [], this.levels = /* @__PURE__ */ new Map(), this.outerNodes = [], this.classes = /* @__PURE__ */ new Map(), this.root = void 0;
	}
};
function fe(m$2) {
	if (!m$2.length) return [];
	let a = [], n = [];
	return m$2.forEach((o) => {
		let c$1 = {
			name: o.name,
			children: o.type === "Leaf" ? void 0 : []
		};
		for (c$1.classSelector = o?.classSelector, o?.cssCompiledStyles && (c$1.cssCompiledStyles = [o.cssCompiledStyles]), o.type === "Leaf" && o.value !== void 0 && (c$1.value = o.value); n.length > 0 && n[n.length - 1].level >= o.level;) n.pop();
		if (n.length === 0) a.push(c$1);
		else {
			let l = n[n.length - 1].node;
			l.children ? l.children.push(c$1) : l.children = [c$1];
		}
		o.type !== "Leaf" && n.push({
			node: c$1,
			level: o.level
		});
	}), a;
}
m$1(fe, "buildHierarchy");
var De = /* @__PURE__ */ m$1((m$2, a) => {
	c(m$2, a);
	let n = [];
	for (let l of m$2.TreemapRows ?? []) l.$type === "ClassDefStatement" && a.addClass(l.className ?? "", l.styleText ?? "");
	for (let l of m$2.TreemapRows ?? []) {
		let d$1 = l.item;
		if (!d$1) continue;
		let g$1 = l.indent ? parseInt(l.indent) : 0, W = /* @__PURE__ */ ve(d$1), r = d$1.classSelector ? a.getStylesForClass(d$1.classSelector) : [], P = r.length > 0 ? r.join(";") : void 0, T = {
			level: g$1,
			name: W,
			type: d$1.$type,
			value: d$1.value,
			classSelector: d$1.classSelector,
			cssCompiledStyles: P
		};
		n.push(T);
	}
	let o = /* @__PURE__ */ fe(n), c$1 = m$1((l, d$1) => {
		for (let g$1 of l) a.addNode(g$1, d$1), g$1.children && g$1.children.length > 0 && c$1(g$1.children, d$1 + 1);
	}, "addNodesRecursively");
	c$1(o, 0);
}, "populate"), ve = /* @__PURE__ */ m$1((m$2) => m$2.name ? String(m$2.name) : "", "getItemName"), O = {
	parser: { yy: void 0 },
	parse: /* @__PURE__ */ m$1(async (m$2) => {
		try {
			let n = await p("treemap", m$2);
			pt.debug("Treemap AST:", n);
			let o = O.parser?.yy;
			if (!(o instanceof $)) throw new Error("parser.parser?.yy was not a TreemapDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");
			De(n, o);
		} catch (a) {
			throw pt.error("Error parsing treemap:", a), a;
		}
	}, "parse")
};
var we = 10, F = 10, E = 25, ge = {
	draw: /* @__PURE__ */ m$1((m$2, a, n, o) => {
		let c$1 = o.db, l = /* @__PURE__ */ c$1.getConfig(), d$1 = l.padding ?? we, g$1 = /* @__PURE__ */ c$1.getDiagramTitle(), W = /* @__PURE__ */ c$1.getRoot(), { themeVariables: r } = Ot();
		if (!W) return;
		let P = g$1 ? 30 : 0, T = /* @__PURE__ */ d(a), X = l.nodeWidth ? l.nodeWidth * F : 960, Y = l.nodeHeight ? l.nodeHeight * F : 500, G = X, q = Y + P;
		T.attr("viewBox", `0 0 ${G} ${q}`), Wo(T, q, G, l.useMaxWidth);
		let C;
		try {
			let e = l.valueFormat || ",";
			if (e === "$0,0") C = /* @__PURE__ */ m$1((t) => "$" + $n(",")(t), "valueFormat");
			else if (e.startsWith("$") && e.includes(",")) {
				let t = /* @__PURE__ */ /\.\d+/.exec(e), s = t ? t[0] : "";
				C = /* @__PURE__ */ m$1((f) => "$" + $n("," + s)(f), "valueFormat");
			} else if (e.startsWith("$")) {
				let t = /* @__PURE__ */ e.substring(1);
				C = /* @__PURE__ */ m$1((s) => "$" + $n(t || "")(s), "valueFormat");
			} else C = /* @__PURE__ */ $n(e);
		} catch (e) {
			pt.error("Error creating format function:", e), C = /* @__PURE__ */ $n(",");
		}
		let A = /* @__PURE__ */ He().range([
			"transparent",
			r.cScale0,
			r.cScale1,
			r.cScale2,
			r.cScale3,
			r.cScale4,
			r.cScale5,
			r.cScale6,
			r.cScale7,
			r.cScale8,
			r.cScale9,
			r.cScale10,
			r.cScale11
		]), he = /* @__PURE__ */ He().range([
			"transparent",
			r.cScalePeer0,
			r.cScalePeer1,
			r.cScalePeer2,
			r.cScalePeer3,
			r.cScalePeer4,
			r.cScalePeer5,
			r.cScalePeer6,
			r.cScalePeer7,
			r.cScalePeer8,
			r.cScalePeer9,
			r.cScalePeer10,
			r.cScalePeer11
		]), B = /* @__PURE__ */ He().range([
			r.cScaleLabel0,
			r.cScaleLabel1,
			r.cScaleLabel2,
			r.cScaleLabel3,
			r.cScaleLabel4,
			r.cScaleLabel5,
			r.cScaleLabel6,
			r.cScaleLabel7,
			r.cScaleLabel8,
			r.cScaleLabel9,
			r.cScaleLabel10,
			r.cScaleLabel11
		]);
		g$1 && T.append("text").attr("x", G / 2).attr("y", P / 2).attr("class", "treemapTitle").attr("text-anchor", "middle").attr("dominant-baseline", "middle").text(g$1);
		let U = /* @__PURE__ */ T.append("g").attr("transform", `translate(0, ${P})`).attr("class", "treemapContainer"), ye = /* @__PURE__ */ Pn(W).sum((e) => e.value ?? 0).sort((e, t) => (t.value ?? 0) - (e.value ?? 0)), J = /* @__PURE__ */ Ua().size([X, Y]).paddingTop((e) => e.children && e.children.length > 0 ? E + F : 0).paddingInner(d$1).paddingLeft((e) => e.children && e.children.length > 0 ? F : 0).paddingRight((e) => e.children && e.children.length > 0 ? F : 0).paddingBottom((e) => e.children && e.children.length > 0 ? F : 0).round(!0)(ye), Se = /* @__PURE__ */ J.descendants().filter((e) => e.children && e.children.length > 0), k = /* @__PURE__ */ U.selectAll(".treemapSection").data(Se).enter().append("g").attr("class", "treemapSection").attr("transform", (e) => `translate(${e.x0},${e.y0})`);
		k.append("rect").attr("width", (e) => e.x1 - e.x0).attr("height", E).attr("class", "treemapSectionHeader").attr("fill", "none").attr("fill-opacity", .6).attr("stroke-width", .6).attr("style", (e) => e.depth === 0 ? "display: none;" : ""), k.append("clipPath").attr("id", (e, t) => `clip-section-${a}-${t}`).append("rect").attr("width", (e) => Math.max(0, e.x1 - e.x0 - 12)).attr("height", E), k.append("rect").attr("width", (e) => e.x1 - e.x0).attr("height", (e) => e.y1 - e.y0).attr("class", (e, t) => `treemapSection section${t}`).attr("fill", (e) => A(e.data.name)).attr("fill-opacity", .6).attr("stroke", (e) => he(e.data.name)).attr("stroke-width", 2).attr("stroke-opacity", .4).attr("style", (e) => {
			if (e.depth === 0) return "display: none;";
			let t = /* @__PURE__ */ m({ cssCompiledStyles: e.data.cssCompiledStyles });
			return t.nodeStyles + ";" + t.borderStyles.join(";");
		}), k.append("text").attr("class", "treemapSectionLabel").attr("x", 6).attr("y", E / 2).attr("dominant-baseline", "middle").text((e) => e.depth === 0 ? "" : e.data.name).attr("font-weight", "bold").attr("style", (e) => {
			if (e.depth === 0) return "display: none;";
			return "dominant-baseline: middle; font-size: 12px; fill:" + B(e.data.name) + "; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" + m({ cssCompiledStyles: e.data.cssCompiledStyles }).labelStyles.replace("color:", "fill:");
		}).each(function(e) {
			if (e.depth === 0) return;
			let t = /* @__PURE__ */ ia(this), s = e.data.name;
			t.text(s);
			let f = e.x1 - e.x0, y$1 = 6, S;
			l.showValues !== !1 && e.value ? S = f - 10 - 30 - 10 - y$1 : S = f - y$1 - 6;
			let u = /* @__PURE__ */ Math.max(15, S), i = /* @__PURE__ */ t.node();
			if (i.getComputedTextLength() > u) {
				let h = s;
				for (; h.length > 0;) {
					if (h = /* @__PURE__ */ s.substring(0, h.length - 1), h.length === 0) {
						t.text("..."), i.getComputedTextLength() > u && t.text("");
						break;
					}
					if (t.text(h + "..."), i.getComputedTextLength() <= u) break;
				}
			}
		}), l.showValues !== !1 && k.append("text").attr("class", "treemapSectionValue").attr("x", (e) => e.x1 - e.x0 - 10).attr("y", E / 2).attr("text-anchor", "end").attr("dominant-baseline", "middle").text((e) => e.value ? C(e.value) : "").attr("font-style", "italic").attr("style", (e) => {
			if (e.depth === 0) return "display: none;";
			return "text-anchor: end; dominant-baseline: middle; font-size: 10px; fill:" + B(e.data.name) + "; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" + m({ cssCompiledStyles: e.data.cssCompiledStyles }).labelStyles.replace("color:", "fill:");
		});
		let be = /* @__PURE__ */ J.leaves(), R = /* @__PURE__ */ U.selectAll(".treemapLeafGroup").data(be).enter().append("g").attr("class", (e, t) => `treemapNode treemapLeafGroup leaf${t}${e.data.classSelector ? ` ${e.data.classSelector}` : ""}x`).attr("transform", (e) => `translate(${e.x0},${e.y0})`);
		R.append("rect").attr("width", (e) => e.x1 - e.x0).attr("height", (e) => e.y1 - e.y0).attr("class", "treemapLeaf").attr("fill", (e) => e.parent ? A(e.parent.data.name) : A(e.data.name)).attr("style", (e) => m({ cssCompiledStyles: e.data.cssCompiledStyles }).nodeStyles).attr("fill-opacity", .3).attr("stroke", (e) => e.parent ? A(e.parent.data.name) : A(e.data.name)).attr("stroke-width", 3), R.append("clipPath").attr("id", (e, t) => `clip-${a}-${t}`).append("rect").attr("width", (e) => Math.max(0, e.x1 - e.x0 - 4)).attr("height", (e) => Math.max(0, e.y1 - e.y0 - 4)), R.append("text").attr("class", "treemapLabel").attr("x", (e) => (e.x1 - e.x0) / 2).attr("y", (e) => (e.y1 - e.y0) / 2).attr("style", (e) => {
			return "text-anchor: middle; dominant-baseline: middle; font-size: 38px;fill:" + B(e.data.name) + ";" + m({ cssCompiledStyles: e.data.cssCompiledStyles }).labelStyles.replace("color:", "fill:");
		}).attr("clip-path", (e, t) => `url(#clip-${a}-${t})`).text((e) => e.data.name).each(function(e) {
			let t = /* @__PURE__ */ ia(this), s = e.x1 - e.x0, f = e.y1 - e.y0, y$1 = /* @__PURE__ */ t.node(), S = 4, w = s - 2 * S, u = f - 2 * S;
			if (w < 10 || u < 10) {
				t.style("display", "none");
				return;
			}
			let i = /* @__PURE__ */ parseInt(/* @__PURE__ */ t.style("font-size"), 10), D = 8, b = 28, h = .6, x = 6, z = 2;
			for (; y$1.getComputedTextLength() > w && i > D;) i--, t.style("font-size", `${i}px`);
			let N = /* @__PURE__ */ Math.max(x, /* @__PURE__ */ Math.min(b, /* @__PURE__ */ Math.round(i * h))), j = i + z + N;
			for (; j > u && i > D && (i--, N = /* @__PURE__ */ Math.max(x, /* @__PURE__ */ Math.min(b, /* @__PURE__ */ Math.round(i * h))), !(N < x && i === D));) t.style("font-size", `${i}px`), j = i + z + N;
			t.style("font-size", `${i}px`), (y$1.getComputedTextLength() > w || i < D || u < i) && t.style("display", "none");
		}), l.showValues !== !1 && R.append("text").attr("class", "treemapValue").attr("x", (t) => (t.x1 - t.x0) / 2).attr("y", function(t) {
			return (t.y1 - t.y0) / 2;
		}).attr("style", (t) => {
			return "text-anchor: middle; dominant-baseline: hanging; font-size: 28px;fill:" + B(t.data.name) + ";" + m({ cssCompiledStyles: t.data.cssCompiledStyles }).labelStyles.replace("color:", "fill:");
		}).attr("clip-path", (t, s) => `url(#clip-${a}-${s})`).text((t) => t.value ? C(t.value) : "").each(function(t) {
			let s = /* @__PURE__ */ ia(this), f = this.parentNode;
			if (!f) {
				s.style("display", "none");
				return;
			}
			let y$1 = /* @__PURE__ */ ia(f).select(".treemapLabel");
			if (y$1.empty() || y$1.style("display") === "none") {
				s.style("display", "none");
				return;
			}
			let S = /* @__PURE__ */ parseFloat(/* @__PURE__ */ y$1.style("font-size")), w = 28, u = .6, i = 6, D = 2, b = /* @__PURE__ */ Math.max(i, /* @__PURE__ */ Math.min(w, /* @__PURE__ */ Math.round(S * u)));
			s.style("font-size", `${b}px`);
			let x = (t.y1 - t.y0) / 2 + S / 2 + D;
			s.attr("y", x);
			let z = t.x1 - t.x0, Te = t.y1 - t.y0 - 4, Ce = z - 8;
			s.node().getComputedTextLength() > Ce || x + b > Te || b < i ? s.style("display", "none") : s.style("display", null);
		});
		y(T, l.diagramPadding ?? 8, "flowchart", l?.useMaxWidth || !1);
	}, "draw"),
	getClasses: /* @__PURE__ */ m$1(function(m$2, a) {
		return a.db.getClasses();
	}, "getClasses")
};
var $e = {
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
};
var pt$1 = {
	parser: O,
	get db() {
		return new $();
	},
	renderer: ge,
	styles: /* @__PURE__ */ m$1(({ treemap: m$2 } = {}) => {
		let a = /* @__PURE__ */ Lt($e, m$2);
		return `
  .treemapNode.section {
    stroke: ${a.sectionStrokeColor};
    stroke-width: ${a.sectionStrokeWidth};
    fill: ${a.sectionFillColor};
  }
  .treemapNode.leaf {
    stroke: ${a.leafStrokeColor};
    stroke-width: ${a.leafStrokeWidth};
    fill: ${a.leafFillColor};
  }
  .treemapLabel {
    fill: ${a.labelColor};
    font-size: ${a.labelFontSize};
  }
  .treemapValue {
    fill: ${a.valueColor};
    font-size: ${a.valueFontSize};
  }
  .treemapTitle {
    fill: ${a.titleColor};
    font-size: ${a.titleFontSize};
  }
  `;
	}, "getStyles")
};
export { pt$1 as t };
