import { A as e, B as n, C as r, D as t, E as o, F as i, H as a, I as d, K as u, L as s, N as c, O as f, P as h, T as g, U as l, V as v, W as p, X as w, Z as m, _ as b, b as y, j as k, k as x, q as E, v as O, w as L, x as C, y as N, z as R } from "./vendor-min-mermaid~chunk-2XYWPRAO.Da8Ms7Co.chunk.js";
import { t as P } from "./vendor-mermaid.CSvrNZuY.chunk.js";
function _(e, r, t, o) {
	var i;
	do
		i = n(o);
	while (e.hasNode(i));
	return t.dummy = r, e.setNode(i, t), i;
}
function j(e) {
	var n = new P().setGraph(e.graph());
	return k(e.nodes(), function(r) {
		n.setNode(r, e.node(r));
	}), k(e.edges(), function(r) {
		var t = n.edge(r.v, r.w) || {
			weight: 0,
			minlen: 1
		}, o = e.edge(r);
		n.setEdge(r.v, r.w, {
			weight: t.weight + o.weight,
			minlen: Math.max(t.minlen, o.minlen)
		});
	}), n;
}
function M(e) {
	var n = new P({ multigraph: e.isMultigraph() }).setGraph(e.graph());
	return k(e.nodes(), function(r) {
		e.children(r).length || n.setNode(r, e.node(r));
	}), k(e.edges(), function(r) {
		n.setEdge(r, e.edge(r));
	}), n;
}
function S(e, n) {
	var r, t, o = e.x, i = e.y, a = n.x - o, d = n.y - i, u = e.width / 2, s = e.height / 2;
	if (!a && !d) throw Error("Not possible to find intersection inside of the rectangle");
	return Math.abs(d) * u > Math.abs(a) * s ? (d < 0 && (s = -s), r = s * a / d, t = s) : (a < 0 && (u = -u), r = u, t = u * d / a), {
		x: o + r,
		y: i + t
	};
}
function B(e) {
	var n = y(N(A(e) + 1), function() {
		return [];
	});
	return k(e.nodes(), function(r) {
		var t = e.node(r), o = t.rank;
		a(o) || (n[o][t.order] = r);
	}), n;
}
function G(e) {
	var n = p(y(e.nodes(), function(n) {
		return e.node(n).rank;
	}));
	k(e.nodes(), function(r) {
		var t = e.node(r);
		i(t, "rank") && (t.rank -= n);
	});
}
function T(e) {
	var n = p(y(e.nodes(), function(n) {
		return e.node(n).rank;
	})), r = [];
	k(e.nodes(), function(t) {
		var o = e.node(t).rank - n;
		r[o] || (r[o] = []), r[o].push(t);
	});
	var t = 0, o = e.graph().nodeRankFactor;
	k(r, function(n, r) {
		a(n) && r % o != 0 ? --t : t && k(n, function(n) {
			e.node(n).rank += t;
		});
	});
}
function z(e, n, r, t) {
	var o = {
		width: 0,
		height: 0
	};
	return arguments.length >= 4 && (o.rank = r, o.order = t), _(e, "border", o, n);
}
function A(e) {
	return c(y(e.nodes(), function(n) {
		var r = e.node(n).rank;
		if (!a(r)) return r;
	}));
}
function F(e, n) {
	var r = {
		lhs: [],
		rhs: []
	};
	return k(e, function(e) {
		n(e) ? r.lhs.push(e) : r.rhs.push(e);
	}), r;
}
function q(e, n) {
	var r = t();
	try {
		return n();
	} finally {
		console.log(e + " time: " + (t() - r) + "ms");
	}
}
function D(e, n) {
	return n();
}
function I(e) {
	function n(r) {
		var t = e.children(r), o = e.node(r);
		if (t.length && k(t, n), Object.prototype.hasOwnProperty.call(o, "minRank")) {
			o.borderLeft = [], o.borderRight = [];
			for (var i = o.minRank, a = o.maxRank + 1; i < a; ++i) V(e, "borderLeft", "_bl", r, o, i), V(e, "borderRight", "_br", r, o, i);
		}
	}
	m(n, "dfs"), k(e.children(), n);
}
function V(e, n, r, t, o, i) {
	var a = o[n][i - 1], d = _(e, "border", {
		width: 0,
		height: 0,
		rank: i,
		borderType: n
	}, r);
	o[n][i] = d, e.setParent(d, t), a && e.setEdge(a, d, { weight: 1 });
}
function W(e) {
	var n = e.graph().rankdir.toLowerCase();
	("lr" === n || "rl" === n) && X(e);
}
function Y(e) {
	var n = e.graph().rankdir.toLowerCase();
	("bt" === n || "rl" === n) && U(e), ("lr" === n || "rl" === n) && (K(e), X(e));
}
function X(e) {
	k(e.nodes(), function(n) {
		H(e.node(n));
	}), k(e.edges(), function(n) {
		H(e.edge(n));
	});
}
function H(e) {
	var n = e.width;
	e.width = e.height, e.height = n;
}
function U(e) {
	k(e.nodes(), function(n) {
		J(e.node(n));
	}), k(e.edges(), function(n) {
		var r = e.edge(n);
		k(r.points, J), Object.prototype.hasOwnProperty.call(r, "y") && J(r);
	});
}
function J(e) {
	e.y = -e.y;
}
function K(e) {
	k(e.nodes(), function(n) {
		Z(e.node(n));
	}), k(e.edges(), function(n) {
		var r = e.edge(n);
		k(r.points, Z), Object.prototype.hasOwnProperty.call(r, "x") && Z(r);
	});
}
function Z(e) {
	var n = e.x;
	e.x = e.y, e.y = n;
}
m(_, "addDummyNode"), m(j, "simplify"), m(M, "asNonCompoundGraph"), m(S, "intersectRect"), m(B, "buildLayerMatrix"), m(G, "normalizeRanks"), m(T, "removeEmptyRanks"), m(z, "addBorderNode"), m(A, "maxRank"), m(F, "partition"), m(q, "time"), m(D, "notime"), m(I, "addBorderSegments"), m(V, "addBorderNode"), m(W, "adjust"), m(Y, "undo"), m(X, "swapWidthHeight"), m(H, "swapWidthHeightOne"), m(U, "reverseY"), m(J, "reverseYOne"), m(K, "swapXY"), m(Z, "swapXYOne");
var $ = class {
	static {
		m(this, "List");
	}
	constructor() {
		var e = {};
		e._next = e._prev = e, this._sentinel = e;
	}
	dequeue() {
		var e = this._sentinel, n = e._prev;
		if (n !== e) return Q(n), n;
	}
	enqueue(e) {
		var n = this._sentinel;
		e._prev && e._next && Q(e), e._next = n._next, n._next._prev = e, n._next = e, e._prev = n;
	}
	toString() {
		for (var e = [], n = this._sentinel, r = n._prev; r !== n;) e.push(JSON.stringify(r, ee)), r = r._prev;
		return "[" + e.join(", ") + "]";
	}
};
function Q(e) {
	e._prev._next = e._next, e._next._prev = e._prev, delete e._next, delete e._prev;
}
function ee(e, n) {
	if ("_next" !== e && "_prev" !== e) return n;
}
m(Q, "unlink"), m(ee, "filterOutLinks");
var en = u(1);
function er(e, n) {
	if (1 >= e.nodeCount()) return [];
	var r = ei(e, n || en);
	return g(y(et(r.graph, r.buckets, r.zeroIdx), function(n) {
		return e.outEdges(n.v, n.w);
	}));
}
function et(e, n, r) {
	for (var t, o = [], i = n[n.length - 1], a = n[0]; e.nodeCount();) {
		for (; t = a.dequeue();) eo(e, n, r, t);
		for (; t = i.dequeue();) eo(e, n, r, t);
		if (e.nodeCount()) {
			for (var d = n.length - 2; d > 0; --d) if (t = n[d].dequeue()) {
				o = o.concat(eo(e, n, r, t, !0));
				break;
			}
		}
	}
	return o;
}
function eo(e, n, r, t, o) {
	var i = o ? [] : void 0;
	return k(e.inEdges(t.v), function(t) {
		var a = e.edge(t), d = e.node(t.v);
		o && i.push({
			v: t.v,
			w: t.w
		}), d.out -= a, ea(n, r, d);
	}), k(e.outEdges(t.v), function(t) {
		var o = e.edge(t), i = t.w, a = e.node(i);
		a.in -= o, ea(n, r, a);
	}), e.removeNode(t.v), i;
}
function ei(e, n) {
	var r = new P(), t = 0, o = 0;
	k(e.nodes(), function(e) {
		r.setNode(e, {
			v: e,
			in: 0,
			out: 0
		});
	}), k(e.edges(), function(e) {
		var i = r.edge(e.v, e.w) || 0, a = n(e);
		r.setEdge(e.v, e.w, i + a), o = Math.max(o, r.node(e.v).out += a), t = Math.max(t, r.node(e.w).in += a);
	});
	var i = N(o + t + 3).map(function() {
		return new $();
	}), a = t + 1;
	return k(r.nodes(), function(e) {
		ea(i, a, r.node(e));
	}), {
		graph: r,
		buckets: i,
		zeroIdx: a
	};
}
function ea(e, n, r) {
	r.out ? r.in ? e[r.out - r.in + n].enqueue(r) : e[e.length - 1].enqueue(r) : e[0].enqueue(r);
}
function ed(e) {
	function r(e) {
		return function(n) {
			return e.edge(n).weight;
		};
	}
	k("greedy" === e.graph().acyclicer ? er(e, r(e)) : eu(e), function(r) {
		var t = e.edge(r);
		e.removeEdge(r), t.forwardName = r.name, t.reversed = !0, e.setEdge(r.w, r.v, t, n("rev"));
	}), m(r, "weightFn");
}
function eu(e) {
	var n = [], r = {}, t = {};
	function o(i) {
		Object.prototype.hasOwnProperty.call(t, i) || (t[i] = !0, r[i] = !0, k(e.outEdges(i), function(e) {
			Object.prototype.hasOwnProperty.call(r, e.w) ? n.push(e) : o(e.w);
		}), delete r[i]);
	}
	return m(o, "dfs"), k(e.nodes(), o), n;
}
function es(e) {
	k(e.edges(), function(n) {
		var r = e.edge(n);
		if (r.reversed) {
			e.removeEdge(n);
			var t = r.forwardName;
			delete r.reversed, delete r.forwardName, e.setEdge(n.w, n.v, r, t);
		}
	});
}
function ec(e) {
	e.graph().dummyChains = [], k(e.edges(), function(n) {
		ef(e, n);
	});
}
function ef(e, n) {
	var r = n.v, t = e.node(r).rank, o = n.w, i = e.node(o).rank, a = n.name, d = e.edge(n), u = d.labelRank;
	if (i !== t + 1) {
		e.removeEdge(n);
		var s, c, f = void 0;
		for (c = 0, ++t; t < i; ++c, ++t) d.points = [], s = _(e, "edge", f = {
			width: 0,
			height: 0,
			edgeLabel: d,
			edgeObj: n,
			rank: t
		}, "_d"), t === u && (f.width = d.width, f.height = d.height, f.dummy = "edge-label", f.labelpos = d.labelpos), e.setEdge(r, s, { weight: d.weight }, a), 0 === c && e.graph().dummyChains.push(s), r = s;
		e.setEdge(r, o, { weight: d.weight }, a);
	}
}
function eh(e) {
	k(e.graph().dummyChains, function(n) {
		var r, t = e.node(n), o = t.edgeLabel;
		for (e.setEdge(t.edgeObj, o); t.dummy;) r = e.successors(n)[0], e.removeNode(n), o.points.push({
			x: t.x,
			y: t.y
		}), "edge-label" === t.dummy && (o.x = t.x, o.y = t.y, o.width = t.width, o.height = t.height), n = r, t = e.node(n);
	});
}
function eg(e) {
	var n = {};
	function r(t) {
		var o = e.node(t);
		if (Object.prototype.hasOwnProperty.call(n, t)) return o.rank;
		n[t] = !0;
		var i = p(y(e.outEdges(t), function(n) {
			return r(n.w) - e.edge(n).minlen;
		}));
		return (i === Infinity || null == i) && (i = 0), o.rank = i;
	}
	m(r, "dfs"), k(e.sources(), r);
}
function el(e, n) {
	return e.node(n.w).rank - e.node(n.v).rank - e.edge(n).minlen;
}
function ev(e) {
	var n, r, t = new P({ directed: !1 }), o = e.nodes()[0], i = e.nodeCount();
	for (t.setNode(o, {}); ep(t, e) < i;) n = ew(t, e), r = t.hasNode(n.v) ? el(e, n) : -el(e, n), em(t, e, r);
	return t;
}
function ep(e, n) {
	function r(t) {
		k(n.nodeEdges(t), function(o) {
			var i = o.v, a = t === i ? o.w : i;
			e.hasNode(a) || el(n, o) || (e.setNode(a, {}), e.setEdge(t, a, {}), r(a));
		});
	}
	return m(r, "dfs"), k(e.nodes(), r), e.nodeCount();
}
function ew(e, n) {
	return L(n.edges(), function(r) {
		if (e.hasNode(r.v) !== e.hasNode(r.w)) return el(n, r);
	});
}
function em(e, n, r) {
	k(e.nodes(), function(e) {
		n.node(e).rank += r;
	});
}
function eb(e) {
	var n = {}, r = {}, t = [];
	function o(i) {
		if (Object.prototype.hasOwnProperty.call(r, i)) throw new ey();
		Object.prototype.hasOwnProperty.call(n, i) || (r[i] = !0, n[i] = !0, k(e.predecessors(i), o), delete r[i], t.push(i));
	}
	if (m(o, "visit"), k(e.sinks(), o), l(n) !== e.nodeCount()) throw new ey();
	return t;
}
function ey() {}
function ek(e, n, r) {
	E(n) || (n = [n]);
	var t = (e.isDirected() ? e.successors : e.neighbors).bind(e), o = [], i = {};
	return k(n, function(n) {
		if (!e.hasNode(n)) throw Error("Graph does not have node: " + n);
		ex(e, n, "post" === r, i, t, o);
	}), o;
}
function ex(e, n, r, t, o, i) {
	Object.prototype.hasOwnProperty.call(t, n) || (t[n] = !0, r || i.push(n), k(o(n), function(n) {
		ex(e, n, r, t, o, i);
	}), r && i.push(n));
}
function eE(e, n) {
	return ek(e, n, "post");
}
function eO(e, n) {
	return ek(e, n, "pre");
}
function eL(e) {
	eg(e = j(e));
	var n, r, t = ev(e);
	for (eP(t), eC(t, e); n = ej(t);) r = eM(t, e, n), eS(t, e, n, r);
}
function eC(e, n) {
	var r = eE(e, e.nodes());
	k(r = r.slice(0, r.length - 1), function(r) {
		eN(e, n, r);
	});
}
function eN(e, n, r) {
	var t = e.node(r).parent;
	e.edge(r, t).cutvalue = eR(e, n, r);
}
function eR(e, n, r) {
	var t = e.node(r).parent, o = !0, i = n.edge(r, t), a = 0;
	return i || (o = !1, i = n.edge(t, r)), a = i.weight, k(n.nodeEdges(r), function(i) {
		var d = i.v === r, u = d ? i.w : i.v;
		if (u !== t) {
			var s = d === o, c = n.edge(i).weight;
			if (a += s ? c : -c, eG(e, r, u)) {
				var f = e.edge(r, u).cutvalue;
				a += s ? -f : f;
			}
		}
	}), a;
}
function eP(e, n) {
	arguments.length < 2 && (n = e.nodes()[0]), e_(e, {}, 1, n);
}
function e_(e, n, r, t, o) {
	var i = r, a = e.node(t);
	return n[t] = !0, k(e.neighbors(t), function(o) {
		Object.prototype.hasOwnProperty.call(n, o) || (r = e_(e, n, r, o, t));
	}), a.low = i, a.lim = r++, o ? a.parent = o : delete a.parent, r;
}
function ej(e) {
	return C(e.edges(), function(n) {
		return e.edge(n).cutvalue < 0;
	});
}
function eM(e, n, r) {
	var t = r.v, o = r.w;
	n.hasEdge(t, o) || (t = r.w, o = r.v);
	var i = e.node(t), a = e.node(o), u = i, s = !1;
	return i.lim > a.lim && (u = a, s = !0), L(d(n.edges(), function(n) {
		return s === eT(e, e.node(n.v), u) && s !== eT(e, e.node(n.w), u);
	}), function(e) {
		return el(n, e);
	});
}
function eS(e, n, r, t) {
	var o = r.v, i = r.w;
	e.removeEdge(o, i), e.setEdge(t.v, t.w, {}), eP(e), eC(e, n), eB(e, n);
}
function eB(e, n) {
	var r = C(e.nodes(), function(e) {
		return !n.node(e).parent;
	}), t = eO(e, r);
	k(t = t.slice(1), function(r) {
		var t = e.node(r).parent, o = n.edge(r, t), i = !1;
		o || (o = n.edge(t, r), i = !0), n.node(r).rank = n.node(t).rank + (i ? o.minlen : -o.minlen);
	});
}
function eG(e, n, r) {
	return e.hasEdge(n, r);
}
function eT(e, n, r) {
	return r.low <= n.lim && n.lim <= r.lim;
}
function ez(e) {
	switch (e.graph().ranker) {
		case "network-simplex":
		default:
			eq(e);
			break;
		case "tight-tree":
			eF(e);
			break;
		case "longest-path": eA(e);
	}
}
m(er, "greedyFAS"), m(et, "doGreedyFAS"), m(eo, "removeNode"), m(ei, "buildState"), m(ea, "assignBucket"), m(ed, "run"), m(eu, "dfsFAS"), m(es, "undo"), m(ec, "run"), m(ef, "normalizeEdge"), m(eh, "undo"), m(eg, "longestPath"), m(el, "slack"), m(ev, "feasibleTree"), m(ep, "tightTree"), m(ew, "findMinSlackEdge"), m(em, "shiftRanks"), u(1), u(1), eb.CycleException = ey, m(eb, "topsort"), m(ey, "CycleException"), ey.prototype = Error(), m(ek, "dfs"), m(ex, "doDfs"), m(eE, "postorder"), m(eO, "preorder"), eL.initLowLimValues = eP, eL.initCutValues = eC, eL.calcCutValue = eR, eL.leaveEdge = ej, eL.enterEdge = eM, eL.exchangeEdges = eS, m(eL, "networkSimplex"), m(eC, "initCutValues"), m(eN, "assignCutValue"), m(eR, "calcCutValue"), m(eP, "initLowLimValues"), m(e_, "dfsAssignLowLim"), m(ej, "leaveEdge"), m(eM, "enterEdge"), m(eS, "exchangeEdges"), m(eB, "updateRanks"), m(eG, "isTreeEdge"), m(eT, "isDescendant"), m(ez, "rank");
var eA = eg;
function eF(e) {
	eg(e), ev(e);
}
function eq(e) {
	eL(e);
}
function eD(e) {
	var n = _(e, "root", {}, "_root"), r = eV(e), t = c(x(r)) - 1, o = 2 * t + 1;
	e.graph().nestingRoot = n, k(e.edges(), function(n) {
		e.edge(n).minlen *= o;
	});
	var i = eW(e) + 1;
	k(e.children(), function(a) {
		eI(e, n, o, i, t, r, a);
	}), e.graph().nodeRankFactor = o;
}
function eI(e, n, r, t, o, i, a) {
	var d = e.children(a);
	if (!d.length) {
		a !== n && e.setEdge(n, a, {
			weight: 0,
			minlen: r
		});
		return;
	}
	var u = z(e, "_bt"), s = z(e, "_bb"), c = e.node(a);
	e.setParent(u, a), c.borderTop = u, e.setParent(s, a), c.borderBottom = s, k(d, function(d) {
		eI(e, n, r, t, o, i, d);
		var c = e.node(d), f = c.borderTop ? c.borderTop : d, h = c.borderBottom ? c.borderBottom : d, g = c.borderTop ? t : 2 * t, l = f !== h ? 1 : o - i[a] + 1;
		e.setEdge(u, f, {
			weight: g,
			minlen: l,
			nestingEdge: !0
		}), e.setEdge(h, s, {
			weight: g,
			minlen: l,
			nestingEdge: !0
		});
	}), e.parent(a) || e.setEdge(n, u, {
		weight: 0,
		minlen: o + i[a]
	});
}
function eV(e) {
	var n = {};
	function r(t, o) {
		var i = e.children(t);
		i && i.length && k(i, function(e) {
			r(e, o + 1);
		}), n[t] = o;
	}
	return m(r, "dfs"), k(e.children(), function(e) {
		r(e, 1);
	}), n;
}
function eW(e) {
	return o(e.edges(), function(n, r) {
		return n + e.edge(r).weight;
	}, 0);
}
function eY(e) {
	var n = e.graph();
	e.removeNode(n.nestingRoot), delete n.nestingRoot, k(e.edges(), function(n) {
		e.edge(n).nestingEdge && e.removeEdge(n);
	});
}
function eX(e, n, r) {
	var t, o = {};
	k(r, function(r) {
		for (var i, a, d = e.parent(r); d;) {
			if ((i = e.parent(d)) ? (a = o[i], o[i] = d) : (a = t, t = d), a && a !== d) return void n.setEdge(a, d);
			d = i;
		}
	});
}
function eH(e, n, r) {
	var t = eU(e), o = new P({ compound: !0 }).setGraph({ root: t }).setDefaultNodeLabel(function(n) {
		return e.node(n);
	});
	return k(e.nodes(), function(i) {
		var d = e.node(i), u = e.parent(i);
		(d.rank === n || d.minRank <= n && n <= d.maxRank) && (o.setNode(i), o.setParent(i, u || t), k(e[r](i), function(n) {
			var r = n.v === i ? n.w : n.v, t = o.edge(r, i), d = a(t) ? 0 : t.weight;
			o.setEdge(r, i, { weight: e.edge(n).weight + d });
		}), Object.prototype.hasOwnProperty.call(d, "minRank") && o.setNode(i, {
			borderLeft: d.borderLeft[n],
			borderRight: d.borderRight[n]
		}));
	}), o;
}
function eU(e) {
	for (var r; e.hasNode(r = n("_root")););
	return r;
}
function eJ(e, n) {
	for (var r = 0, t = 1; t < n.length; ++t) r += eK(e, n[t - 1], n[t]);
	return r;
}
function eK(e, n, r) {
	for (var t = s(r, y(r, function(e, n) {
		return n;
	})), o = g(y(n, function(n) {
		return v(y(e.outEdges(n), function(n) {
			return {
				pos: t[n.w],
				weight: e.edge(n).weight
			};
		}), "pos");
	})), i = 1; i < r.length;) i <<= 1;
	var a = 2 * i - 1;
	i -= 1;
	var d = y(Array(a), function() {
		return 0;
	}), u = 0;
	return k(o.forEach(function(e) {
		var n = e.pos + i;
		d[n] += e.weight;
		for (var r = 0; n > 0;) n % 2 && (r += d[n + 1]), n = n - 1 >> 1, d[n] += e.weight;
		u += e.weight * r;
	})), u;
}
function eZ(e) {
	var n = {}, r = d(e.nodes(), function(n) {
		return !e.children(n).length;
	}), t = c(y(r, function(n) {
		return e.node(n).rank;
	})), o = y(N(t + 1), function() {
		return [];
	});
	function a(r) {
		i(n, r) || (n[r] = !0, o[e.node(r).rank].push(r), k(e.successors(r), a));
	}
	return m(a, "dfs"), k(v(r, function(n) {
		return e.node(n).rank;
	}), a), o;
}
function e$(e, n) {
	return y(n, function(n) {
		var r = e.inEdges(n);
		if (!r.length) return { v: n };
		var t = o(r, function(n, r) {
			var t = e.edge(r), o = e.node(r.v);
			return {
				sum: n.sum + t.weight * o.order,
				weight: n.weight + t.weight
			};
		}, {
			sum: 0,
			weight: 0
		});
		return {
			v: n,
			barycenter: t.sum / t.weight,
			weight: t.weight
		};
	});
}
function eQ(e, n) {
	var r = {};
	return k(e, function(e, n) {
		var t = r[e.v] = {
			indegree: 0,
			in: [],
			out: [],
			vs: [e.v],
			i: n
		};
		a(e.barycenter) || (t.barycenter = e.barycenter, t.weight = e.weight);
	}), k(n.edges(), function(e) {
		var n = r[e.v], t = r[e.w];
		a(n) || a(t) || (t.indegree++, n.out.push(r[e.w]));
	}), e0(d(r, function(e) {
		return !e.indegree;
	}));
}
function e0(e) {
	var n = [];
	function r(e) {
		return function(n) {
			n.merged || (a(n.barycenter) || a(e.barycenter) || n.barycenter >= e.barycenter) && e1(e, n);
		};
	}
	function t(n) {
		return function(r) {
			r.in.push(n), 0 == --r.indegree && e.push(r);
		};
	}
	for (m(r, "handleIn"), m(t, "handleOut"); e.length;) {
		var o = e.pop();
		n.push(o), k(o.in.reverse(), r(o)), k(o.out, t(o));
	}
	return y(d(n, function(e) {
		return !e.merged;
	}), function(e) {
		return f(e, [
			"vs",
			"i",
			"barycenter",
			"weight"
		]);
	});
}
function e1(e, n) {
	var r = 0, t = 0;
	e.weight && (r += e.barycenter * e.weight, t += e.weight), n.weight && (r += n.barycenter * n.weight, t += n.weight), e.vs = n.vs.concat(e.vs), e.barycenter = r / t, e.weight = t, e.i = Math.min(n.i, e.i), n.merged = !0;
}
function e2(e, n) {
	var r = F(e, function(e) {
		return Object.prototype.hasOwnProperty.call(e, "barycenter");
	}), t = r.lhs, o = v(r.rhs, function(e) {
		return -e.i;
	}), i = [], a = 0, d = 0, u = 0;
	t.sort(e3(!!n)), u = e5(i, o, u), k(t, function(e) {
		u += e.vs.length, i.push(e.vs), a += e.barycenter * e.weight, d += e.weight, u = e5(i, o, u);
	});
	var s = { vs: g(i) };
	return d && (s.barycenter = a / d, s.weight = d), s;
}
function e5(e, n, r) {
	for (var t; n.length && (t = b(n)).i <= r;) n.pop(), e.push(t.vs), r++;
	return r;
}
function e3(e) {
	return function(n, r) {
		return n.barycenter < r.barycenter ? -1 : n.barycenter > r.barycenter ? 1 : e ? r.i - n.i : n.i - r.i;
	};
}
function e4(e, n, r, t) {
	var o = e.children(n), i = e.node(n), a = i ? i.borderLeft : void 0, u = i ? i.borderRight : void 0, s = {};
	a && (o = d(o, function(e) {
		return e !== a && e !== u;
	}));
	var c = e$(e, o);
	k(c, function(n) {
		if (e.children(n.v).length) {
			var o = e4(e, n.v, r, t);
			s[n.v] = o, Object.prototype.hasOwnProperty.call(o, "barycenter") && e7(n, o);
		}
	});
	var f = eQ(c, r);
	e6(f, s);
	var h = e2(f, t);
	if (a && (h.vs = g([
		a,
		h.vs,
		u
	]), e.predecessors(a).length)) {
		var l = e.node(e.predecessors(a)[0]), v = e.node(e.predecessors(u)[0]);
		Object.prototype.hasOwnProperty.call(h, "barycenter") || (h.barycenter = 0, h.weight = 0), h.barycenter = (h.barycenter * h.weight + l.order + v.order) / (h.weight + 2), h.weight += 2;
	}
	return h;
}
function e6(e, n) {
	k(e, function(e) {
		e.vs = g(e.vs.map(function(e) {
			return n[e] ? n[e].vs : e;
		}));
	});
}
function e7(e, n) {
	a(e.barycenter) ? (e.barycenter = n.barycenter, e.weight = n.weight) : (e.barycenter = (e.barycenter * e.weight + n.barycenter * n.weight) / (e.weight + n.weight), e.weight += n.weight);
}
function e8(e) {
	var n = A(e), r = e9(e, N(1, n + 1), "inEdges"), t = e9(e, N(n - 1, -1, -1), "outEdges"), o = eZ(e);
	nn(e, o);
	for (var i, a = Infinity, d = 0, u = 0; u < 4; ++d, ++u) {
		ne(d % 2 ? r : t, d % 4 >= 2), o = B(e);
		var s = eJ(e, o);
		s < a && (u = 0, i = R(o), a = s);
	}
	nn(e, i);
}
function e9(e, n, r) {
	return y(n, function(n) {
		return eH(e, n, r);
	});
}
function ne(e, n) {
	var r = new P();
	k(e, function(e) {
		var t = e.graph().root, o = e4(e, t, r, n);
		k(o.vs, function(n, r) {
			e.node(n).order = r;
		}), eX(e, r, o.vs);
	});
}
function nn(e, n) {
	k(n, function(n) {
		k(n, function(n, r) {
			e.node(n).order = r;
		});
	});
}
function nr(e) {
	var n = no(e);
	k(e.graph().dummyChains, function(r) {
		for (var t = e.node(r), o = t.edgeObj, i = nt(e, n, o.v, o.w), a = i.path, d = i.lca, u = 0, s = a[u], c = !0; r !== o.w;) {
			if (t = e.node(r), c) {
				for (; (s = a[u]) !== d && e.node(s).maxRank < t.rank;) u++;
				s === d && (c = !1);
			}
			if (!c) {
				for (; u < a.length - 1 && e.node(s = a[u + 1]).minRank <= t.rank;) u++;
				s = a[u];
			}
			e.setParent(r, s), r = e.successors(r)[0];
		}
	});
}
function nt(e, n, r, t) {
	var o, i = [], a = [], d = Math.min(n[r].low, n[t].low), u = Math.max(n[r].lim, n[t].lim), s = r;
	do
		i.push(s = e.parent(s));
	while (s && (n[s].low > d || u > n[s].lim));
	for (o = s, s = t; (s = e.parent(s)) !== o;) a.push(s);
	return {
		path: i.concat(a.reverse()),
		lca: o
	};
}
function no(e) {
	var n = {}, r = 0;
	function t(o) {
		var i = r;
		k(e.children(o), t), n[o] = {
			low: i,
			lim: r++
		};
	}
	return m(t, "dfs"), k(e.children(), t), n;
}
function ni(e, n) {
	var r = {};
	function t(n, t) {
		var o = 0, i = 0, a = n.length, d = b(t);
		return k(t, function(n, u) {
			var s = nd(e, n), c = s ? e.node(s).order : a;
			(s || n === d) && (k(t.slice(i, u + 1), function(n) {
				k(e.predecessors(n), function(t) {
					var i = e.node(t), a = i.order;
					(a < o || c < a) && !(i.dummy && e.node(n).dummy) && nu(r, t, n);
				});
			}), i = u + 1, o = c);
		}), t;
	}
	return m(t, "visitLayer"), o(n, t), r;
}
function na(e, n) {
	var r = {};
	function t(n, t, o, i, a) {
		var d;
		k(N(t, o), function(t) {
			d = n[t], e.node(d).dummy && k(e.predecessors(d), function(n) {
				var t = e.node(n);
				t.dummy && (t.order < i || t.order > a) && nu(r, n, d);
			});
		});
	}
	function i(n, r) {
		var o, i = -1, a = 0;
		return k(r, function(d, u) {
			if ("border" === e.node(d).dummy) {
				var s = e.predecessors(d);
				s.length && (o = e.node(s[0]).order, t(r, a, u, i, o), a = u, i = o);
			}
			t(r, a, r.length, o, n.length);
		}), r;
	}
	return m(t, "scan"), m(i, "visitLayer"), o(n, i), r;
}
function nd(e, n) {
	if (e.node(n).dummy) return C(e.predecessors(n), function(n) {
		return e.node(n).dummy;
	});
}
function nu(e, n, r) {
	if (n > r) {
		var t = n;
		n = r, r = t;
	}
	var o = e[n];
	o || (e[n] = o = {}), o[r] = !0;
}
function ns(e, n, r) {
	if (n > r) {
		var t = n;
		n = r, r = t;
	}
	return !!e[n] && Object.prototype.hasOwnProperty.call(e[n], r);
}
function nc(e, n, r, t) {
	var o = {}, i = {}, a = {};
	return k(n, function(e) {
		k(e, function(e, n) {
			o[e] = e, i[e] = e, a[e] = n;
		});
	}), k(n, function(e) {
		var n = -1;
		k(e, function(e) {
			var d = t(e);
			if (d.length) {
				d = v(d, function(e) {
					return a[e];
				});
				for (var u = (d.length - 1) / 2, s = Math.floor(u), c = Math.ceil(u); s <= c; ++s) {
					var f = d[s];
					i[e] === e && n < a[f] && !ns(r, e, f) && (i[f] = e, i[e] = o[e] = o[f], n = a[f]);
				}
			}
		});
	}), {
		root: o,
		align: i
	};
}
function nf(e, n, r, t, o) {
	var i = {}, a = nh(e, n, r, o), d = o ? "borderLeft" : "borderRight";
	function u(e, n) {
		for (var r = a.nodes(), t = r.pop(), o = {}; t;) o[t] ? e(t) : (o[t] = !0, r.push(t), r = r.concat(n(t))), t = r.pop();
	}
	function s(e) {
		i[e] = a.inEdges(e).reduce(function(e, n) {
			return Math.max(e, i[n.v] + a.edge(n));
		}, 0);
	}
	function c(n) {
		var r = a.outEdges(n).reduce(function(e, n) {
			return Math.min(e, i[n.w] - a.edge(n));
		}, Infinity), t = e.node(n);
		r !== Infinity && t.borderType !== d && (i[n] = Math.max(i[n], r));
	}
	return m(u, "iterate"), m(s, "pass1"), m(c, "pass2"), u(s, a.predecessors.bind(a)), u(c, a.successors.bind(a)), k(t, function(e) {
		i[e] = i[r[e]];
	}), i;
}
function nh(e, n, r, t) {
	var o = new P(), i = e.graph(), a = nw(i.nodesep, i.edgesep, t);
	return k(n, function(n) {
		var t;
		k(n, function(n) {
			var i = r[n];
			if (o.setNode(i), t) {
				var d = r[t], u = o.edge(d, i);
				o.setEdge(d, i, Math.max(a(e, n, t), u || 0));
			}
			t = n;
		});
	}), o;
}
function ng(n, r) {
	return L(x(r), function(r) {
		var t = -Infinity, o = Infinity;
		return e(r, function(e, r) {
			var i = nm(n, r) / 2;
			t = Math.max(e + i, t), o = Math.min(e - i, o);
		}), t - o;
	});
}
function nl(e, n) {
	var r = x(n), t = p(r), o = c(r);
	k(["u", "d"], function(r) {
		k(["l", "r"], function(i) {
			var a, d = r + i, u = e[d];
			if (u !== n) {
				var s = x(u);
				(a = "l" === i ? t - p(s) : o - c(s)) && (e[d] = h(u, function(e) {
					return e + a;
				}));
			}
		});
	});
}
function nv(e, n) {
	return h(e.ul, function(r, t) {
		if (n) return e[n.toLowerCase()][t];
		var o = v(y(e, t));
		return (o[1] + o[2]) / 2;
	});
}
function np(e) {
	var n, r = B(e), t = w(ni(e, r), na(e, r)), o = {};
	k(["u", "d"], function(i) {
		n = "u" === i ? r : x(r).reverse(), k(["l", "r"], function(r) {
			"r" === r && (n = y(n, function(e) {
				return x(e).reverse();
			}));
			var a = ("u" === i ? e.predecessors : e.successors).bind(e), d = nc(e, n, t, a), u = nf(e, n, d.root, d.align, "r" === r);
			"r" === r && (u = h(u, function(e) {
				return -e;
			})), o[i + r] = u;
		});
	});
	var i = ng(e, o);
	return nl(o, i), nv(o, e.graph().align);
}
function nw(e, n, r) {
	return function(t, o, i) {
		var a, d, u = t.node(o), s = t.node(i);
		if (d = 0 + u.width / 2, Object.prototype.hasOwnProperty.call(u, "labelpos")) switch (u.labelpos.toLowerCase()) {
			case "l":
				a = -u.width / 2;
				break;
			case "r": a = u.width / 2;
		}
		if (a && (d += r ? a : -a), a = 0, d += (u.dummy ? n : e) / 2, d += (s.dummy ? n : e) / 2, d += s.width / 2, Object.prototype.hasOwnProperty.call(s, "labelpos")) switch (s.labelpos.toLowerCase()) {
			case "l":
				a = s.width / 2;
				break;
			case "r": a = -s.width / 2;
		}
		return a && (d += r ? a : -a), a = 0, d;
	};
}
function nm(e, n) {
	return e.node(n).width;
}
function nb(e) {
	ny(e = M(e)), O(np(e), function(n, r) {
		e.node(r).x = n;
	});
}
function ny(e) {
	var n = B(e), r = e.graph().ranksep, t = 0;
	k(n, function(n) {
		var o = c(y(n, function(n) {
			return e.node(n).height;
		}));
		k(n, function(n) {
			e.node(n).y = t + o / 2;
		}), t += o + r;
	});
}
function nk(e, n) {
	var r = n && n.debugTiming ? q : D;
	r("layout", () => {
		var n = r("  buildLayoutGraph", () => nM(e));
		r("  runLayout", () => nx(n, r)), r("  updateInputGraph", () => nE(e, n));
	});
}
function nx(e, n) {
	n("    makeSpaceForEdgeLabels", () => nS(e)), n("    removeSelfEdges", () => nI(e)), n("    acyclic", () => ed(e)), n("    nestingGraph.run", () => eD(e)), n("    rank", () => ez(M(e))), n("    injectEdgeLabelProxies", () => nB(e)), n("    removeEmptyRanks", () => T(e)), n("    nestingGraph.cleanup", () => eY(e)), n("    normalizeRanks", () => G(e)), n("    assignRankMinMax", () => nG(e)), n("    removeEdgeLabelProxies", () => nT(e)), n("    normalize.run", () => ec(e)), n("    parentDummyChains", () => nr(e)), n("    addBorderSegments", () => I(e)), n("    order", () => e8(e)), n("    insertSelfEdges", () => nV(e)), n("    adjustCoordinateSystem", () => W(e)), n("    position", () => nb(e)), n("    positionSelfEdges", () => nW(e)), n("    removeBorderNodes", () => nD(e)), n("    normalize.undo", () => eh(e)), n("    fixupEdgeLabelCoords", () => nF(e)), n("    undoCoordinateSystem", () => Y(e)), n("    translateGraph", () => nz(e)), n("    assignNodeIntersects", () => nA(e)), n("    reversePoints", () => nq(e)), n("    acyclic.undo", () => es(e));
}
function nE(e, n) {
	k(e.nodes(), function(r) {
		var t = e.node(r), o = n.node(r);
		t && (t.x = o.x, t.y = o.y, n.children(r).length && (t.width = o.width, t.height = o.height));
	}), k(e.edges(), function(r) {
		var t = e.edge(r), o = n.edge(r);
		t.points = o.points, Object.prototype.hasOwnProperty.call(o, "x") && (t.x = o.x, t.y = o.y);
	}), e.graph().width = n.graph().width, e.graph().height = n.graph().height;
}
m(eF, "tightTreeRanker"), m(eq, "networkSimplexRanker"), m(eD, "run"), m(eI, "dfs"), m(eV, "treeDepths"), m(eW, "sumWeights"), m(eY, "cleanup"), m(eX, "addSubgraphConstraints"), m(eH, "buildLayerGraph"), m(eU, "createRootNode"), m(eJ, "crossCount"), m(eK, "twoLayerCrossCount"), m(eZ, "initOrder"), m(e$, "barycenter"), m(eQ, "resolveConflicts"), m(e0, "doResolveConflicts"), m(e1, "mergeEntries"), m(e2, "sort"), m(e5, "consumeUnsortable"), m(e3, "compareWithBias"), m(e4, "sortSubgraph"), m(e6, "expandSubgraphs"), m(e7, "mergeBarycenters"), m(e8, "order"), m(e9, "buildLayerGraphs"), m(ne, "sweepLayerGraphs"), m(nn, "assignOrder"), m(nr, "parentDummyChains"), m(nt, "findPath"), m(no, "postorder"), m(ni, "findType1Conflicts"), m(na, "findType2Conflicts"), m(nd, "findOtherInnerSegmentNode"), m(nu, "addConflict"), m(ns, "hasConflict"), m(nc, "verticalAlignment"), m(nf, "horizontalCompaction"), m(nh, "buildBlockGraph"), m(ng, "findSmallestWidthAlignment"), m(nl, "alignCoordinates"), m(nv, "balance"), m(np, "positionX"), m(nw, "sep"), m(nm, "width"), m(nb, "position"), m(ny, "positionY"), m(nk, "layout"), m(nx, "runLayout"), m(nE, "updateInputGraph");
var nO = [
	"nodesep",
	"edgesep",
	"ranksep",
	"marginx",
	"marginy"
], nL = {
	ranksep: 50,
	edgesep: 20,
	nodesep: 50,
	rankdir: "tb"
}, nC = [
	"acyclicer",
	"ranker",
	"rankdir",
	"align"
], nN = ["width", "height"], nR = {
	width: 0,
	height: 0
}, nP = [
	"minlen",
	"weight",
	"width",
	"height",
	"labeloffset"
], n_ = {
	minlen: 1,
	weight: 1,
	width: 0,
	height: 0,
	labeloffset: 10,
	labelpos: "r"
}, nj = ["labelpos"];
function nM(e) {
	var n = new P({
		multigraph: !0,
		compound: !0
	}), t = nX(e.graph());
	return n.setGraph(w({}, nL, nY(t, nO), f(t, nC))), k(e.nodes(), function(t) {
		var o = nX(e.node(t));
		n.setNode(t, r(nY(o, nN), nR)), n.setParent(t, e.parent(t));
	}), k(e.edges(), function(r) {
		var t = nX(e.edge(r));
		n.setEdge(r, w({}, n_, nY(t, nP), f(t, nj)));
	}), n;
}
function nS(e) {
	var n = e.graph();
	n.ranksep /= 2, k(e.edges(), function(r) {
		var t = e.edge(r);
		t.minlen *= 2, "c" !== t.labelpos.toLowerCase() && ("TB" === n.rankdir || "BT" === n.rankdir ? t.width += t.labeloffset : t.height += t.labeloffset);
	});
}
function nB(e) {
	k(e.edges(), function(n) {
		var r = e.edge(n);
		if (r.width && r.height) {
			var t = e.node(n.v), o = {
				rank: (e.node(n.w).rank - t.rank) / 2 + t.rank,
				e: n
			};
			_(e, "edge-proxy", o, "_ep");
		}
	});
}
function nG(e) {
	var n = 0;
	k(e.nodes(), function(r) {
		var t = e.node(r);
		t.borderTop && (t.minRank = e.node(t.borderTop).rank, t.maxRank = e.node(t.borderBottom).rank, n = c(n, t.maxRank));
	}), e.graph().maxRank = n;
}
function nT(e) {
	k(e.nodes(), function(n) {
		var r = e.node(n);
		"edge-proxy" === r.dummy && (e.edge(r.e).labelRank = r.rank, e.removeNode(n));
	});
}
function nz(e) {
	var n = Infinity, r = 0, t = Infinity, o = 0, i = e.graph(), a = i.marginx || 0, d = i.marginy || 0;
	function u(e) {
		var i = e.x, a = e.y, d = e.width, u = e.height;
		n = Math.min(n, i - d / 2), r = Math.max(r, i + d / 2), t = Math.min(t, a - u / 2), o = Math.max(o, a + u / 2);
	}
	m(u, "getExtremes"), k(e.nodes(), function(n) {
		u(e.node(n));
	}), k(e.edges(), function(n) {
		var r = e.edge(n);
		Object.prototype.hasOwnProperty.call(r, "x") && u(r);
	}), n -= a, t -= d, k(e.nodes(), function(r) {
		var o = e.node(r);
		o.x -= n, o.y -= t;
	}), k(e.edges(), function(r) {
		var o = e.edge(r);
		k(o.points, function(e) {
			e.x -= n, e.y -= t;
		}), Object.prototype.hasOwnProperty.call(o, "x") && (o.x -= n), Object.prototype.hasOwnProperty.call(o, "y") && (o.y -= t);
	}), i.width = r - n + a, i.height = o - t + d;
}
function nA(e) {
	k(e.edges(), function(n) {
		var r, t, o = e.edge(n), i = e.node(n.v), a = e.node(n.w);
		o.points ? (r = o.points[0], t = o.points[o.points.length - 1]) : (o.points = [], r = a, t = i), o.points.unshift(S(i, r)), o.points.push(S(a, t));
	});
}
function nF(e) {
	k(e.edges(), function(n) {
		var r = e.edge(n);
		if (Object.prototype.hasOwnProperty.call(r, "x")) switch (("l" === r.labelpos || "r" === r.labelpos) && (r.width -= r.labeloffset), r.labelpos) {
			case "l":
				r.x -= r.width / 2 + r.labeloffset;
				break;
			case "r": r.x += r.width / 2 + r.labeloffset;
		}
	});
}
function nq(e) {
	k(e.edges(), function(n) {
		var r = e.edge(n);
		r.reversed && r.points.reverse();
	});
}
function nD(e) {
	k(e.nodes(), function(n) {
		if (e.children(n).length) {
			var r = e.node(n), t = e.node(r.borderTop), o = e.node(r.borderBottom), i = e.node(b(r.borderLeft)), a = e.node(b(r.borderRight));
			r.width = Math.abs(a.x - i.x), r.height = Math.abs(o.y - t.y), r.x = i.x + r.width / 2, r.y = t.y + r.height / 2;
		}
	}), k(e.nodes(), function(n) {
		"border" === e.node(n).dummy && e.removeNode(n);
	});
}
function nI(e) {
	k(e.edges(), function(n) {
		if (n.v === n.w) {
			var r = e.node(n.v);
			r.selfEdges || (r.selfEdges = []), r.selfEdges.push({
				e: n,
				label: e.edge(n)
			}), e.removeEdge(n);
		}
	});
}
function nV(e) {
	k(B(e), function(n) {
		var r = 0;
		k(n, function(n, t) {
			var o = e.node(n);
			o.order = t + r, k(o.selfEdges, function(n) {
				_(e, "selfedge", {
					width: n.label.width,
					height: n.label.height,
					rank: o.rank,
					order: t + ++r,
					e: n.e,
					label: n.label
				}, "_se");
			}), delete o.selfEdges;
		});
	});
}
function nW(e) {
	k(e.nodes(), function(n) {
		var r = e.node(n);
		if ("selfedge" === r.dummy) {
			var t = e.node(r.e.v), o = t.x + t.width / 2, i = t.y, a = r.x - o, d = t.height / 2;
			e.setEdge(r.e, r.label), e.removeNode(n), r.label.points = [
				{
					x: o + 2 * a / 3,
					y: i - d
				},
				{
					x: o + 5 * a / 6,
					y: i - d
				},
				{
					x: o + a,
					y: i
				},
				{
					x: o + 5 * a / 6,
					y: i + d
				},
				{
					x: o + 2 * a / 3,
					y: i + d
				}
			], r.label.x = r.x, r.label.y = r.y;
		}
	});
}
function nY(e, n) {
	return h(f(e, n), Number);
}
function nX(e) {
	var n = {};
	return k(e, function(e, r) {
		n[r.toLowerCase()] = e;
	}), n;
}
m(nM, "buildLayoutGraph"), m(nS, "makeSpaceForEdgeLabels"), m(nB, "injectEdgeLabelProxies"), m(nG, "assignRankMinMax"), m(nT, "removeEdgeLabelProxies"), m(nz, "translateGraph"), m(nA, "assignNodeIntersects"), m(nF, "fixupEdgeLabelCoords"), m(nq, "reversePointsForReversedEdges"), m(nD, "removeBorderNodes"), m(nI, "removeSelfEdges"), m(nV, "insertSelfEdges"), m(nW, "positionSelfEdges"), m(nY, "selectNumberAttrs"), m(nX, "canonicalize");
export { nk as t };
