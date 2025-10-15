import { N as Ao, Nt as As, _ as Ut, dt as hn, et as Wo, gt as mr, hn as pt, jt as $s, ln as ia } from "./vendor-min-mermaid~architectureDiagram-4X3Z3J56.BkPEXsWQ.chunk.js";
import { Q as m$1 } from "./vendor-min-mermaid~architecture-U656AL7Q-3ZQKGQJL.BA2pzSbr.chunk.js";
import { s as m } from "./vendor-min-mermaid~blockDiagram-BWRZOBD3.DzXBMLmV.chunk.js";
import { n as _e, r as gs, t as Be } from "./vendor-min-mermaid~chunk-AI4T2ZLM.Mn7h7yt9.chunk.js";
import { t as fn } from "./vendor-min-mermaid~chunk-CCU7O4O5.BRdiI-z6.chunk.js";
var j = /* @__PURE__ */ m$1((e) => e.append("circle").attr("class", "start-state").attr("r", mr().state.sizeUnit).attr("cx", mr().state.padding + mr().state.sizeUnit).attr("cy", mr().state.padding + mr().state.sizeUnit), "drawStartState"), q = /* @__PURE__ */ m$1((e) => e.append("line").style("stroke", "grey").style("stroke-dasharray", "3").attr("x1", mr().state.textHeight).attr("class", "divider").attr("x2", mr().state.textHeight * 2).attr("y1", 0).attr("y2", 0), "drawDivider"), Z = /* @__PURE__ */ m$1((e, n) => {
	let s = /* @__PURE__ */ e.append("text").attr("x", 2 * mr().state.padding).attr("y", mr().state.textHeight + 2 * mr().state.padding).attr("font-size", mr().state.fontSize).attr("class", "state-title").text(n.id), c = /* @__PURE__ */ s.node().getBBox();
	return e.insert("rect", ":first-child").attr("x", mr().state.padding).attr("y", mr().state.padding).attr("width", c.width + 2 * mr().state.padding).attr("height", c.height + 2 * mr().state.padding).attr("rx", mr().state.radius), s;
}, "drawSimpleState"), K = /* @__PURE__ */ m$1((e, n) => {
	let s = /* @__PURE__ */ m$1(function(p, y, w) {
		w || (/* @__PURE__ */ p.append("tspan").attr("x", 2 * mr().state.padding).text(y)).attr("dy", mr().state.textHeight);
	}, "addTspan"), r = /* @__PURE__ */ e.append("text").attr("x", 2 * mr().state.padding).attr("y", mr().state.textHeight + 1.3 * mr().state.padding).attr("font-size", mr().state.fontSize).attr("class", "state-title").text(n.descriptions[0]).node().getBBox(), g = r.height, x = /* @__PURE__ */ e.append("text").attr("x", mr().state.padding).attr("y", g + mr().state.padding * .4 + mr().state.dividerMargin + mr().state.textHeight).attr("class", "state-description"), i = !0, o = !0;
	n.descriptions.forEach(function(p) {
		i || (s(x, p, o), o = !1), i = !1;
	});
	let m$2 = /* @__PURE__ */ e.append("line").attr("x1", mr().state.padding).attr("y1", mr().state.padding + g + mr().state.dividerMargin / 2).attr("y2", mr().state.padding + g + mr().state.dividerMargin / 2).attr("class", "descr-divider"), h = /* @__PURE__ */ x.node().getBBox(), d = /* @__PURE__ */ Math.max(h.width, r.width);
	return m$2.attr("x2", d + 3 * mr().state.padding), e.insert("rect", ":first-child").attr("x", mr().state.padding).attr("y", mr().state.padding).attr("width", d + 2 * mr().state.padding).attr("height", h.height + g + 2 * mr().state.padding).attr("rx", mr().state.radius), e;
}, "drawDescrState"), v = /* @__PURE__ */ m$1((e, n, s) => {
	let c = mr().state.padding, r = 2 * mr().state.padding, g = /* @__PURE__ */ e.node().getBBox(), x = g.width, i = g.x, o = /* @__PURE__ */ e.append("text").attr("x", 0).attr("y", mr().state.titleShift).attr("font-size", mr().state.fontSize).attr("class", "state-title").text(n.id), h = o.node().getBBox().width + r, d = /* @__PURE__ */ Math.max(h, x);
	d === x && (d = d + r);
	let p, y = /* @__PURE__ */ e.node().getBBox();
	n.doc, p = i - c, h > x && (p = (x - d) / 2 + c), Math.abs(i - y.x) < c && h > x && (p = i - (h - x) / 2);
	let w = 1 - mr().state.textHeight;
	return e.insert("rect", ":first-child").attr("x", p).attr("y", w).attr("class", s ? "alt-composit" : "composit").attr("width", d).attr("height", y.height + mr().state.textHeight + mr().state.titleShift + 1).attr("rx", "0"), o.attr("x", p + c), h <= x && o.attr("x", i + (d - r) / 2 - h / 2 + c), e.insert("rect", ":first-child").attr("x", p).attr("y", mr().state.titleShift - mr().state.textHeight - mr().state.padding).attr("width", d).attr("height", mr().state.textHeight * 3).attr("rx", mr().state.radius), e.insert("rect", ":first-child").attr("x", p).attr("y", mr().state.titleShift - mr().state.textHeight - mr().state.padding).attr("width", d).attr("height", y.height + 3 + 2 * mr().state.textHeight).attr("rx", mr().state.radius), e;
}, "addTitleAndBox"), Q = /* @__PURE__ */ m$1((e) => (e.append("circle").attr("class", "end-state-outer").attr("r", mr().state.sizeUnit + mr().state.miniPadding).attr("cx", mr().state.padding + mr().state.sizeUnit + mr().state.miniPadding).attr("cy", mr().state.padding + mr().state.sizeUnit + mr().state.miniPadding), e.append("circle").attr("class", "end-state-inner").attr("r", mr().state.sizeUnit).attr("cx", mr().state.padding + mr().state.sizeUnit + 2).attr("cy", mr().state.padding + mr().state.sizeUnit + 2)), "drawEndState"), V = /* @__PURE__ */ m$1((e, n) => {
	let s = mr().state.forkWidth, c = mr().state.forkHeight;
	if (n.parentId) {
		let r = s;
		s = c, c = r;
	}
	return e.append("rect").style("stroke", "black").style("fill", "black").attr("width", s).attr("height", c).attr("x", mr().state.padding).attr("y", mr().state.padding);
}, "drawForkJoinState");
var D = /* @__PURE__ */ m$1((e, n, s, c) => {
	let r = 0, g = /* @__PURE__ */ c.append("text");
	g.style("text-anchor", "start"), g.attr("class", "noteText");
	let x = /* @__PURE__ */ e.replace(/\r\n/g, "<br/>");
	x = /* @__PURE__ */ x.replace(/\n/g, "<br/>");
	let i = /* @__PURE__ */ x.split(hn.lineBreakRegex), o = 1.25 * mr().state.noteMargin;
	for (let m$2 of i) {
		let h = /* @__PURE__ */ m$2.trim();
		if (h.length > 0) {
			let d = /* @__PURE__ */ g.append("tspan");
			if (d.text(h), o === 0) o += (/* @__PURE__ */ d.node().getBBox()).height;
			r += o, d.attr("x", n + mr().state.noteMargin), d.attr("y", s + r + 1.25 * mr().state.noteMargin);
		}
	}
	return {
		textWidth: g.node().getBBox().width,
		textHeight: r
	};
}, "_drawLongText"), tt = /* @__PURE__ */ m$1((e, n) => {
	n.attr("class", "state-note");
	let s = /* @__PURE__ */ n.append("rect").attr("x", 0).attr("y", mr().state.padding), { textWidth: r, textHeight: g } = D(e, 0, 0, /* @__PURE__ */ n.append("g"));
	return s.attr("height", g + 2 * mr().state.noteMargin), s.attr("width", r + mr().state.noteMargin * 2), s;
}, "drawNote"), A = /* @__PURE__ */ m$1(function(e, n) {
	let s = n.id, c = {
		id: s,
		label: n.id,
		width: 0,
		height: 0
	}, r = /* @__PURE__ */ e.append("g").attr("id", s).attr("class", "stateGroup");
	n.type === "start" && j(r), n.type === "end" && Q(r), (n.type === "fork" || n.type === "join") && V(r, n), n.type === "note" && tt(n.note.text, r), n.type === "divider" && q(r), n.type === "default" && n.descriptions.length === 0 && Z(r, n), n.type === "default" && n.descriptions.length > 0 && K(r, n);
	let g = /* @__PURE__ */ r.node().getBBox();
	return c.width = g.width + 2 * mr().state.padding, c.height = g.height + 2 * mr().state.padding, c;
}, "drawState"), Y = 0, I = /* @__PURE__ */ m$1(function(e, n, s) {
	let c = /* @__PURE__ */ m$1(function(o) {
		switch (o) {
			case _e.relationType.AGGREGATION: return "aggregation";
			case _e.relationType.EXTENSION: return "extension";
			case _e.relationType.COMPOSITION: return "composition";
			case _e.relationType.DEPENDENCY: return "dependency";
		}
	}, "getRelationType");
	n.points = /* @__PURE__ */ n.points.filter((o) => !Number.isNaN(o.y));
	let r = n.points, g = /* @__PURE__ */ As().x(function(o) {
		return o.x;
	}).y(function(o) {
		return o.y;
	}).curve($s), x = /* @__PURE__ */ e.append("path").attr("d", /* @__PURE__ */ g(r)).attr("id", "edge" + Y).attr("class", "transition"), i = "";
	if (mr().state.arrowMarkerAbsolute && (i = /* @__PURE__ */ Ao(!0)), x.attr("marker-end", "url(" + i + "#" + c(_e.relationType.DEPENDENCY) + "End)"), s.title !== void 0) {
		let o = /* @__PURE__ */ e.append("g").attr("class", "stateLabel"), { x: m$2, y: h } = Ut.calcLabelPosition(n.points), d = /* @__PURE__ */ hn.getRows(s.title), p = 0, y = [], w = 0, k = 0;
		for (let a = 0; a <= d.length; a++) {
			let u = /* @__PURE__ */ o.append("text").attr("text-anchor", "middle").text(d[a]).attr("x", m$2).attr("y", h + p), l = /* @__PURE__ */ u.node().getBBox();
			w = /* @__PURE__ */ Math.max(w, l.width), k = /* @__PURE__ */ Math.min(k, l.x), pt.info(l.x, m$2, h + p), p === 0 && (p = u.node().getBBox().height, pt.info("Title height", p, h)), y.push(u);
		}
		let M = p * d.length;
		if (d.length > 1) {
			let a = (d.length - 1) * p * .5;
			y.forEach((u, l) => u.attr("y", h + l * p - a)), M = p * d.length;
		}
		let H = /* @__PURE__ */ o.node().getBBox();
		o.insert("rect", ":first-child").attr("class", "box").attr("x", m$2 - w / 2 - mr().state.padding / 2).attr("y", h - M / 2 - mr().state.padding / 2 - 3.5).attr("width", w + mr().state.padding).attr("height", M + mr().state.padding), pt.info(H);
	}
	Y++;
}, "drawEdge");
var S, G = {}, et = /* @__PURE__ */ m$1(function() {}, "setConf"), it = /* @__PURE__ */ m$1(function(e) {
	e.append("defs").append("marker").attr("id", "dependencyEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
}, "insertMarkers"), nt = /* @__PURE__ */ m$1(function(e, n, s, c) {
	S = mr().state;
	let r = mr().securityLevel, g;
	r === "sandbox" && (g = /* @__PURE__ */ ia("#i" + n));
	let x = r === "sandbox" ? ia(g.nodes()[0].contentDocument.body) : ia("body"), i = r === "sandbox" ? g.nodes()[0].contentDocument : document;
	pt.debug("Rendering diagram " + e);
	let o = /* @__PURE__ */ x.select(`[id='${n}']`);
	it(o);
	$(/* @__PURE__ */ c.db.getRootDoc(), o, void 0, !1, x, i, c);
	let h = S.padding, d = /* @__PURE__ */ o.node().getBBox(), p = d.width + h * 2, y = d.height + h * 2;
	Wo(o, y, p * 1.75, S.useMaxWidth), o.attr("viewBox", `${d.x - S.padding}  ${d.y - S.padding} ` + p + " " + y);
}, "draw"), at = /* @__PURE__ */ m$1((e) => e ? e.length * S.fontSizeFactor : 1, "getLabelWidth"), $ = m$1((e, n, s, c, r, g, x) => {
	let i = new m({
		compound: !0,
		multigraph: !0
	}), o, m$2 = !0;
	for (o = 0; o < e.length; o++) if (e[o].stmt === "relation") {
		m$2 = !1;
		break;
	}
	s ? i.setGraph({
		rankdir: "LR",
		multigraph: !0,
		compound: !0,
		ranker: "tight-tree",
		ranksep: m$2 ? 1 : S.edgeLengthFactor,
		nodeSep: m$2 ? 1 : 50,
		isMultiGraph: !0
	}) : i.setGraph({
		rankdir: "TB",
		multigraph: !0,
		compound: !0,
		ranksep: m$2 ? 1 : S.edgeLengthFactor,
		nodeSep: m$2 ? 1 : 50,
		ranker: "tight-tree",
		isMultiGraph: !0
	}), i.setDefaultEdgeLabel(function() {
		return {};
	});
	let h = /* @__PURE__ */ x.db.getStates(), d = /* @__PURE__ */ x.db.getRelations(), p = /* @__PURE__ */ Object.keys(h), y = !0;
	for (let a of p) {
		let u = h[a];
		s && (u.parentId = s);
		let l;
		if (u.doc) {
			let B = /* @__PURE__ */ n.append("g").attr("id", u.id).attr("class", "stateGroup");
			if (l = /* @__PURE__ */ $(u.doc, B, u.id, !c, r, g, x), y) {
				B = /* @__PURE__ */ v(B, u, c);
				let E = /* @__PURE__ */ B.node().getBBox();
				l.width = E.width, l.height = E.height + S.padding / 2, G[u.id] = { y: S.compositTitleSize };
			}
		} else l = /* @__PURE__ */ A(n, u, i);
		if (u.note) {
			let E = /* @__PURE__ */ A(n, {
				descriptions: [],
				id: u.id + "-note",
				note: u.note,
				type: "note"
			}, i);
			u.note.position === "left of" ? (i.setNode(l.id + "-note", E), i.setNode(l.id, l)) : (i.setNode(l.id, l), i.setNode(l.id + "-note", E)), i.setParent(l.id, l.id + "-group"), i.setParent(l.id + "-note", l.id + "-group");
		} else i.setNode(l.id, l);
	}
	pt.debug("Count=", /* @__PURE__ */ i.nodeCount(), i);
	let w = 0;
	d.forEach(function(a) {
		w++, pt.debug("Setting edge", a), i.setEdge(a.id1, a.id2, {
			relation: a,
			width: /* @__PURE__ */ at(a.title),
			height: S.labelHeight * hn.getRows(a.title).length,
			labelpos: "c"
		}, "id" + w);
	}), fn(i), pt.debug("Graph after layout", /* @__PURE__ */ i.nodes());
	let k = /* @__PURE__ */ n.node();
	i.nodes().forEach(function(a) {
		a !== void 0 && i.node(a) !== void 0 ? (pt.warn("Node " + a + ": " + JSON.stringify(/* @__PURE__ */ i.node(a))), r.select("#" + k.id + " #" + a).attr("transform", "translate(" + (i.node(a).x - i.node(a).width / 2) + "," + (i.node(a).y + (G[a] ? G[a].y : 0) - i.node(a).height / 2) + " )"), r.select("#" + k.id + " #" + a).attr("data-x-shift", i.node(a).x - i.node(a).width / 2), g.querySelectorAll("#" + k.id + " #" + a + " .divider").forEach((l) => {
			let B = l.parentElement, E = 0, T = 0;
			B && (B.parentElement && (E = B.parentElement.getBBox().width), T = /* @__PURE__ */ parseInt(/* @__PURE__ */ B.getAttribute("data-x-shift"), 10), Number.isNaN(T) && (T = 0)), l.setAttribute("x1", 0 - T + 8), l.setAttribute("x2", E - T - 8);
		})) : pt.debug("No Node " + a + ": " + JSON.stringify(/* @__PURE__ */ i.node(a)));
	});
	let M = /* @__PURE__ */ k.getBBox();
	i.edges().forEach(function(a) {
		a !== void 0 && i.edge(a) !== void 0 && (pt.debug("Edge " + a.v + " -> " + a.w + ": " + JSON.stringify(/* @__PURE__ */ i.edge(a))), I(n, /* @__PURE__ */ i.edge(a), i.edge(a).relation));
	}), M = /* @__PURE__ */ k.getBBox();
	let H = {
		id: s || "root",
		label: s || "root",
		width: 0,
		height: 0
	};
	return H.width = M.width + 2 * S.padding, H.height = M.height + 2 * S.padding, pt.debug("Doc rendered", H, i), H;
}, "renderDoc");
var Ht = {
	parser: Be,
	get db() {
		return new _e(1);
	},
	renderer: {
		setConf: et,
		draw: nt
	},
	styles: gs,
	init: /* @__PURE__ */ m$1((e) => {
		e.state || (e.state = {}), e.state.arrowMarkerAbsolute = e.arrowMarkerAbsolute;
	}, "init")
};
export { Ht as t };
