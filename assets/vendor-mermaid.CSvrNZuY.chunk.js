import { E as e, G as t, H as s, I as i, J as r, K as n, R as h, S as o, Z as d, j as a, k as u } from "./vendor-min-mermaid~chunk-2XYWPRAO.Da8Ms7Co.chunk.js";
var _ = class {
	static {
		d(this, "Graph");
	}
	constructor(e = {}) {
		this._isDirected = !Object.prototype.hasOwnProperty.call(e, "directed") || e.directed, this._isMultigraph = !!Object.prototype.hasOwnProperty.call(e, "multigraph") && e.multigraph, this._isCompound = !!Object.prototype.hasOwnProperty.call(e, "compound") && e.compound, this._label = void 0, this._defaultNodeLabelFn = n(void 0), this._defaultEdgeLabelFn = n(void 0), this._nodes = {}, this._isCompound && (this._parent = {}, this._children = {}, this._children["\0"] = {}), this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {};
	}
	isDirected() {
		return this._isDirected;
	}
	isMultigraph() {
		return this._isMultigraph;
	}
	isCompound() {
		return this._isCompound;
	}
	setGraph(e) {
		return this._label = e, this;
	}
	graph() {
		return this._label;
	}
	setDefaultNodeLabel(e) {
		return r(e) || (e = n(e)), this._defaultNodeLabelFn = e, this;
	}
	nodeCount() {
		return this._nodeCount;
	}
	nodes() {
		return h(this._nodes);
	}
	sources() {
		var e = this;
		return i(this.nodes(), function(s) {
			return t(e._in[s]);
		});
	}
	sinks() {
		var e = this;
		return i(this.nodes(), function(s) {
			return t(e._out[s]);
		});
	}
	setNodes(e, t) {
		var s = arguments, i = this;
		return a(e, function(e) {
			s.length > 1 ? i.setNode(e, t) : i.setNode(e);
		}), this;
	}
	setNode(e, t) {
		return Object.prototype.hasOwnProperty.call(this._nodes, e) ? arguments.length > 1 && (this._nodes[e] = t) : (this._nodes[e] = arguments.length > 1 ? t : this._defaultNodeLabelFn(e), this._isCompound && (this._parent[e] = "\0", this._children[e] = {}, this._children["\0"][e] = !0), this._in[e] = {}, this._preds[e] = {}, this._out[e] = {}, this._sucs[e] = {}, ++this._nodeCount), this;
	}
	node(e) {
		return this._nodes[e];
	}
	hasNode(e) {
		return Object.prototype.hasOwnProperty.call(this._nodes, e);
	}
	removeNode(e) {
		if (Object.prototype.hasOwnProperty.call(this._nodes, e)) {
			var t = d((e) => this.removeEdge(this._edgeObjs[e]), "removeEdge");
			delete this._nodes[e], this._isCompound && (this._removeFromParentsChildList(e), delete this._parent[e], a(this.children(e), (e) => {
				this.setParent(e);
			}), delete this._children[e]), a(h(this._in[e]), t), delete this._in[e], delete this._preds[e], a(h(this._out[e]), t), delete this._out[e], delete this._sucs[e], --this._nodeCount;
		}
		return this;
	}
	setParent(e, t) {
		if (!this._isCompound) throw Error("Cannot set parent in a non-compound graph");
		if (s(t)) t = "\0";
		else {
			t += "";
			for (var i = t; !s(i); i = this.parent(i)) if (i === e) throw Error("Setting " + t + " as parent of " + e + " would create a cycle");
			this.setNode(t);
		}
		return this.setNode(e), this._removeFromParentsChildList(e), this._parent[e] = t, this._children[t][e] = !0, this;
	}
	_removeFromParentsChildList(e) {
		delete this._children[this._parent[e]][e];
	}
	parent(e) {
		if (this._isCompound) {
			var t = this._parent[e];
			if ("\0" !== t) return t;
		}
	}
	children(e) {
		if (s(e) && (e = "\0"), this._isCompound) {
			var t = this._children[e];
			if (t) return h(t);
		} else {
			if ("\0" === e) return this.nodes();
			if (this.hasNode(e)) return [];
		}
	}
	predecessors(e) {
		var t = this._preds[e];
		if (t) return h(t);
	}
	successors(e) {
		var t = this._sucs[e];
		if (t) return h(t);
	}
	neighbors(e) {
		var t = this.predecessors(e);
		if (t) return o(t, this.successors(e));
	}
	isLeaf(e) {
		return 0 === (this.isDirected() ? this.successors(e) : this.neighbors(e)).length;
	}
	filterNodes(e) {
		var t = new this.constructor({
			directed: this._isDirected,
			multigraph: this._isMultigraph,
			compound: this._isCompound
		});
		t.setGraph(this.graph());
		var s = this;
		a(this._nodes, function(s, i) {
			e(i) && t.setNode(i, s);
		}), a(this._edgeObjs, function(e) {
			t.hasNode(e.v) && t.hasNode(e.w) && t.setEdge(e, s.edge(e));
		});
		var i = {};
		function r(e) {
			var n = s.parent(e);
			return void 0 === n || t.hasNode(n) ? (i[e] = n, n) : n in i ? i[n] : r(n);
		}
		return d(r, "findParent"), this._isCompound && a(t.nodes(), function(e) {
			t.setParent(e, r(e));
		}), t;
	}
	setDefaultEdgeLabel(e) {
		return r(e) || (e = n(e)), this._defaultEdgeLabelFn = e, this;
	}
	edgeCount() {
		return this._edgeCount;
	}
	edges() {
		return u(this._edgeObjs);
	}
	setPath(t, s) {
		var i = this, r = arguments;
		return e(t, function(e, t) {
			return r.length > 1 ? i.setEdge(e, t, s) : i.setEdge(e, t), t;
		}), this;
	}
	setEdge() {
		var e, t, i, r, n = !1, h = arguments[0];
		"object" == typeof h && null !== h && "v" in h ? (e = h.v, t = h.w, i = h.name, 2 == arguments.length && (r = arguments[1], n = !0)) : (e = h, t = arguments[1], i = arguments[3], arguments.length > 2 && (r = arguments[2], n = !0)), e = "" + e, t = "" + t, s(i) || (i = "" + i);
		var o = p(this._isDirected, e, t, i);
		if (Object.prototype.hasOwnProperty.call(this._edgeLabels, o)) return n && (this._edgeLabels[o] = r), this;
		if (!s(i) && !this._isMultigraph) throw Error("Cannot set a named edge when isMultigraph = false");
		this.setNode(e), this.setNode(t), this._edgeLabels[o] = n ? r : this._defaultEdgeLabelFn(e, t, i);
		var d = g(this._isDirected, e, t, i);
		return e = d.v, t = d.w, Object.freeze(d), this._edgeObjs[o] = d, l(this._preds[t], e), l(this._sucs[e], t), this._in[t][o] = d, this._out[e][o] = d, this._edgeCount++, this;
	}
	edge(e, t, s) {
		var i = 1 == arguments.length ? v(this._isDirected, arguments[0]) : p(this._isDirected, e, t, s);
		return this._edgeLabels[i];
	}
	hasEdge(e, t, s) {
		var i = 1 == arguments.length ? v(this._isDirected, arguments[0]) : p(this._isDirected, e, t, s);
		return Object.prototype.hasOwnProperty.call(this._edgeLabels, i);
	}
	removeEdge(e, t, s) {
		var i = 1 == arguments.length ? v(this._isDirected, arguments[0]) : p(this._isDirected, e, t, s), r = this._edgeObjs[i];
		return r && (e = r.v, t = r.w, delete this._edgeLabels[i], delete this._edgeObjs[i], c(this._preds[t], e), c(this._sucs[e], t), delete this._in[t][i], delete this._out[e][i], this._edgeCount--), this;
	}
	inEdges(e, t) {
		var s = this._in[e];
		if (s) {
			var r = u(s);
			return t ? i(r, function(e) {
				return e.v === t;
			}) : r;
		}
	}
	outEdges(e, t) {
		var s = this._out[e];
		if (s) {
			var r = u(s);
			return t ? i(r, function(e) {
				return e.w === t;
			}) : r;
		}
	}
	nodeEdges(e, t) {
		var s = this.inEdges(e, t);
		if (s) return s.concat(this.outEdges(e, t));
	}
};
function l(e, t) {
	e[t] ? e[t]++ : e[t] = 1;
}
function c(e, t) {
	--e[t] || delete e[t];
}
function p(e, t, i, r) {
	var n = "" + t, h = "" + i;
	if (!e && n > h) {
		var o = n;
		n = h, h = o;
	}
	return n + "" + h + "" + (s(r) ? "\0" : r);
}
function g(e, t, s, i) {
	var r = "" + t, n = "" + s;
	if (!e && r > n) {
		var h = r;
		r = n, n = h;
	}
	var o = {
		v: r,
		w: n
	};
	return i && (o.name = i), o;
}
function v(e, t) {
	return p(e, t.v, t.w, t.name);
}
_.prototype._nodeCount = 0, _.prototype._edgeCount = 0, d(l, "incrementOrInitEntry"), d(c, "decrementOrRemoveEntry"), d(p, "edgeArgsToId"), d(g, "edgeArgsToObj"), d(v, "edgeObjToId");
export { _ as t };
