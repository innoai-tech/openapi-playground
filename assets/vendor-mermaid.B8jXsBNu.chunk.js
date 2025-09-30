import { $t as t, J as e, M as a, U as i, dt as r, l as d, lt as n, qt as s } from "./vendor-min-mermaid~chunk-5V7UUW6L.B--ayk72.chunk.js";
import { Z as o } from "./vendor-min-mermaid~chunk-2XYWPRAO.Da8Ms7Co.chunk.js";
import { c as g } from "./vendor-min-mermaid~chunk-EFRVIJHI.B3AEJspH.chunk.js";
import { t as h } from "./vendor-mermaid.CSvrNZuY.chunk.js";
import { t as p } from "./vendor-mermaid.D7AYFHeZ.chunk.js";
import { n as l, r as c, t as x } from "./vendor-mermaid.CjrCBb2b.chunk.js";
var u, f = o((t) => t.append("circle").attr("class", "start-state").attr("r", e().state.sizeUnit).attr("cx", e().state.padding + e().state.sizeUnit).attr("cy", e().state.padding + e().state.sizeUnit), "drawStartState"), y = o((t) => t.append("line").style("stroke", "grey").style("stroke-dasharray", "3").attr("x1", e().state.textHeight).attr("class", "divider").attr("x2", 2 * e().state.textHeight).attr("y1", 0).attr("y2", 0), "drawDivider"), m = o((t, a) => {
	let i = t.append("text").attr("x", 2 * e().state.padding).attr("y", e().state.textHeight + 2 * e().state.padding).attr("font-size", e().state.fontSize).attr("class", "state-title").text(a.id), r = i.node().getBBox();
	return t.insert("rect", ":first-child").attr("x", e().state.padding).attr("y", e().state.padding).attr("width", r.width + 2 * e().state.padding).attr("height", r.height + 2 * e().state.padding).attr("rx", e().state.radius), i;
}, "drawSimpleState"), w = o((t, a) => {
	let i = o(function(t, a, i) {
		let r = t.append("tspan").attr("x", 2 * e().state.padding).text(a);
		i || r.attr("dy", e().state.textHeight);
	}, "addTspan"), r = t.append("text").attr("x", 2 * e().state.padding).attr("y", e().state.textHeight + 1.3 * e().state.padding).attr("font-size", e().state.fontSize).attr("class", "state-title").text(a.descriptions[0]).node().getBBox(), d = r.height, n = t.append("text").attr("x", e().state.padding).attr("y", d + .4 * e().state.padding + e().state.dividerMargin + e().state.textHeight).attr("class", "state-description"), s = !0, g = !0;
	a.descriptions.forEach(function(t) {
		s || (i(n, t, g), g = !1), s = !1;
	});
	let h = t.append("line").attr("x1", e().state.padding).attr("y1", e().state.padding + d + e().state.dividerMargin / 2).attr("y2", e().state.padding + d + e().state.dividerMargin / 2).attr("class", "descr-divider"), p = n.node().getBBox(), l = Math.max(p.width, r.width);
	return h.attr("x2", l + 3 * e().state.padding), t.insert("rect", ":first-child").attr("x", e().state.padding).attr("y", e().state.padding).attr("width", l + 2 * e().state.padding).attr("height", p.height + d + 2 * e().state.padding).attr("rx", e().state.radius), t;
}, "drawDescrState"), b = o((t, a, i) => {
	let r = e().state.padding, d = 2 * e().state.padding, n = t.node().getBBox(), s = n.width, o = n.x, g = t.append("text").attr("x", 0).attr("y", e().state.titleShift).attr("font-size", e().state.fontSize).attr("class", "state-title").text(a.id), h = g.node().getBBox().width + d, p = Math.max(h, s);
	p === s && (p += d);
	let l, c = t.node().getBBox();
	a.doc, l = o - r, h > s && (l = (s - p) / 2 + r), Math.abs(o - c.x) < r && h > s && (l = o - (h - s) / 2);
	let x = 1 - e().state.textHeight;
	return t.insert("rect", ":first-child").attr("x", l).attr("y", x).attr("class", i ? "alt-composit" : "composit").attr("width", p).attr("height", c.height + e().state.textHeight + e().state.titleShift + 1).attr("rx", "0"), g.attr("x", l + r), h <= s && g.attr("x", o + (p - d) / 2 - h / 2 + r), t.insert("rect", ":first-child").attr("x", l).attr("y", e().state.titleShift - e().state.textHeight - e().state.padding).attr("width", p).attr("height", 3 * e().state.textHeight).attr("rx", e().state.radius), t.insert("rect", ":first-child").attr("x", l).attr("y", e().state.titleShift - e().state.textHeight - e().state.padding).attr("width", p).attr("height", c.height + 3 + 2 * e().state.textHeight).attr("rx", e().state.radius), t;
}, "addTitleAndBox"), B = o((t) => (t.append("circle").attr("class", "end-state-outer").attr("r", e().state.sizeUnit + e().state.miniPadding).attr("cx", e().state.padding + e().state.sizeUnit + e().state.miniPadding).attr("cy", e().state.padding + e().state.sizeUnit + e().state.miniPadding), t.append("circle").attr("class", "end-state-inner").attr("r", e().state.sizeUnit).attr("cx", e().state.padding + e().state.sizeUnit + 2).attr("cy", e().state.padding + e().state.sizeUnit + 2)), "drawEndState"), k = o((t, a) => {
	let i = e().state.forkWidth, r = e().state.forkHeight;
	if (a.parentId) {
		let t = i;
		i = r, r = t;
	}
	return t.append("rect").style("stroke", "black").style("fill", "black").attr("width", i).attr("height", r).attr("x", e().state.padding).attr("y", e().state.padding);
}, "drawForkJoinState"), S = o((t, a, r, d) => {
	let n = 0, s = d.append("text");
	s.style("text-anchor", "start"), s.attr("class", "noteText");
	let o = t.replace(/\r\n/g, "<br/>"), g = (o = o.replace(/\n/g, "<br/>")).split(i.lineBreakRegex), h = 1.25 * e().state.noteMargin;
	for (let t of g) {
		let i = t.trim();
		if (i.length > 0) {
			let t = s.append("tspan");
			t.text(i), 0 === h && (h += t.node().getBBox().height), n += h, t.attr("x", a + e().state.noteMargin), t.attr("y", r + n + 1.25 * e().state.noteMargin);
		}
	}
	return {
		textWidth: s.node().getBBox().width,
		textHeight: n
	};
}, "_drawLongText"), E = o((t, a) => {
	a.attr("class", "state-note");
	let i = a.append("rect").attr("x", 0).attr("y", e().state.padding), { textWidth: r, textHeight: d } = S(t, 0, 0, a.append("g"));
	return i.attr("height", d + 2 * e().state.noteMargin), i.attr("width", r + 2 * e().state.noteMargin), i;
}, "drawNote"), N = o(function(t, a) {
	let i = a.id, r = {
		id: i,
		label: a.id,
		width: 0,
		height: 0
	}, d = t.append("g").attr("id", i).attr("class", "stateGroup");
	"start" === a.type && f(d), "end" === a.type && B(d), ("fork" === a.type || "join" === a.type) && k(d, a), "note" === a.type && E(a.note.text, d), "divider" === a.type && y(d), "default" === a.type && 0 === a.descriptions.length && m(d, a), "default" === a.type && a.descriptions.length > 0 && w(d, a);
	let n = d.node().getBBox();
	return r.width = n.width + 2 * e().state.padding, r.height = n.height + 2 * e().state.padding, r;
}, "drawState"), v = 0, M = o(function(a, s, h) {
	let p = o(function(t) {
		switch (t) {
			case l.relationType.AGGREGATION: return "aggregation";
			case l.relationType.EXTENSION: return "extension";
			case l.relationType.COMPOSITION: return "composition";
			case l.relationType.DEPENDENCY: return "dependency";
		}
	}, "getRelationType");
	s.points = s.points.filter((t) => !Number.isNaN(t.y));
	let c = s.points, x = r().x(function(t) {
		return t.x;
	}).y(function(t) {
		return t.y;
	}).curve(n), u = a.append("path").attr("d", x(c)).attr("id", "edge" + v).attr("class", "transition"), f = "";
	if (e().state.arrowMarkerAbsolute && (f = d(!0)), u.attr("marker-end", "url(" + f + "#" + p(l.relationType.DEPENDENCY) + "End)"), void 0 !== h.title) {
		let r = a.append("g").attr("class", "stateLabel"), { x: d, y: n } = g.calcLabelPosition(s.points), o = i.getRows(h.title), p = 0, l = [], c = 0, x = 0;
		for (let e = 0; e <= o.length; e++) {
			let a = r.append("text").attr("text-anchor", "middle").text(o[e]).attr("x", d).attr("y", n + p), i = a.node().getBBox();
			c = Math.max(c, i.width), x = Math.min(x, i.x), t.info(i.x, d, n + p), 0 === p && (p = a.node().getBBox().height, t.info("Title height", p, n)), l.push(a);
		}
		let u = p * o.length;
		if (o.length > 1) {
			let t = (o.length - 1) * p * .5;
			l.forEach((e, a) => e.attr("y", n + a * p - t)), u = p * o.length;
		}
		let f = r.node().getBBox();
		r.insert("rect", ":first-child").attr("class", "box").attr("x", d - c / 2 - e().state.padding / 2).attr("y", n - u / 2 - e().state.padding / 2 - 3.5).attr("width", c + e().state.padding).attr("height", u + e().state.padding), t.info(f);
	}
	v++;
}, "drawEdge"), H = {}, z = o(function() {}, "setConf"), T = o(function(t) {
	t.append("defs").append("marker").attr("id", "dependencyEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
}, "insertMarkers"), L = o(function(i, r, d, n) {
	u = e().state;
	let o = e().securityLevel, g;
	"sandbox" === o && (g = s("#i" + r));
	let h = "sandbox" === o ? s(g.nodes()[0].contentDocument.body) : s("body"), p = "sandbox" === o ? g.nodes()[0].contentDocument : document;
	t.debug("Rendering diagram " + i);
	let l = h.select(`[id='${r}']`);
	T(l), U(n.db.getRootDoc(), l, void 0, !1, h, p, n);
	let c = u.padding, x = l.node().getBBox(), f = x.width + 2 * c, y = x.height + 2 * c;
	a(l, y, 1.75 * f, u.useMaxWidth), l.attr("viewBox", `${x.x - u.padding}  ${x.y - u.padding} ` + f + " " + y);
}, "draw"), D = o((t) => t ? t.length * u.fontSizeFactor : 1, "getLabelWidth"), U = o((e, a, r, d, n, s, o) => {
	let g = new h({
		compound: !0,
		multigraph: !0
	}), l, c = !0;
	for (l = 0; l < e.length; l++) if ("relation" === e[l].stmt) {
		c = !1;
		break;
	}
	r ? g.setGraph({
		rankdir: "LR",
		multigraph: !0,
		compound: !0,
		ranker: "tight-tree",
		ranksep: c ? 1 : u.edgeLengthFactor,
		nodeSep: c ? 1 : 50,
		isMultiGraph: !0
	}) : g.setGraph({
		rankdir: "TB",
		multigraph: !0,
		compound: !0,
		ranksep: c ? 1 : u.edgeLengthFactor,
		nodeSep: c ? 1 : 50,
		ranker: "tight-tree",
		isMultiGraph: !0
	}), g.setDefaultEdgeLabel(function() {
		return {};
	});
	let x = o.db.getStates(), f = o.db.getRelations();
	for (let t of Object.keys(x)) {
		let e, i = x[t];
		if (r && (i.parentId = r), i.doc) {
			let t = a.append("g").attr("id", i.id).attr("class", "stateGroup");
			e = U(i.doc, t, i.id, !d, n, s, o);
			{
				let a = (t = b(t, i, d)).node().getBBox();
				e.width = a.width, e.height = a.height + u.padding / 2, H[i.id] = { y: u.compositTitleSize };
			}
		} else e = N(a, i, g);
		if (i.note) {
			let t = N(a, {
				descriptions: [],
				id: i.id + "-note",
				note: i.note,
				type: "note"
			}, g);
			"left of" === i.note.position ? (g.setNode(e.id + "-note", t), g.setNode(e.id, e)) : (g.setNode(e.id, e), g.setNode(e.id + "-note", t)), g.setParent(e.id, e.id + "-group"), g.setParent(e.id + "-note", e.id + "-group");
		} else g.setNode(e.id, e);
	}
	t.debug("Count=", g.nodeCount(), g);
	let y = 0;
	f.forEach(function(e) {
		y++, t.debug("Setting edge", e), g.setEdge(e.id1, e.id2, {
			relation: e,
			width: D(e.title),
			height: u.labelHeight * i.getRows(e.title).length,
			labelpos: "c"
		}, "id" + y);
	}), p(g), t.debug("Graph after layout", g.nodes());
	let m = a.node();
	g.nodes().forEach(function(e) {
		void 0 !== e && void 0 !== g.node(e) ? (t.warn("Node " + e + ": " + JSON.stringify(g.node(e))), n.select("#" + m.id + " #" + e).attr("transform", "translate(" + (g.node(e).x - g.node(e).width / 2) + "," + (g.node(e).y + (H[e] ? H[e].y : 0) - g.node(e).height / 2) + " )"), n.select("#" + m.id + " #" + e).attr("data-x-shift", g.node(e).x - g.node(e).width / 2), s.querySelectorAll("#" + m.id + " #" + e + " .divider").forEach((t) => {
			let e = t.parentElement, a = 0, i = 0;
			e && (e.parentElement && (a = e.parentElement.getBBox().width), Number.isNaN(i = parseInt(e.getAttribute("data-x-shift"), 10)) && (i = 0)), t.setAttribute("x1", 0 - i + 8), t.setAttribute("x2", a - i - 8);
		})) : t.debug("No Node " + e + ": " + JSON.stringify(g.node(e)));
	});
	let w = m.getBBox();
	g.edges().forEach(function(e) {
		void 0 !== e && void 0 !== g.edge(e) && (t.debug("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(g.edge(e))), M(a, g.edge(e), g.edge(e).relation));
	});
	let B = {
		id: r || "root",
		label: r || "root",
		width: 0,
		height: 0
	};
	return B.width = (w = m.getBBox()).width + 2 * u.padding, B.height = w.height + 2 * u.padding, t.debug("Doc rendered", B, g), B;
}, "renderDoc"), A = {
	parser: x,
	get db() {
		return new l(1);
	},
	renderer: {
		setConf: z,
		draw: L
	},
	styles: c,
	init: o((t) => {
		t.state || (t.state = {}), t.state.arrowMarkerAbsolute = t.arrowMarkerAbsolute;
	}, "init")
};
export { A as diagram };
