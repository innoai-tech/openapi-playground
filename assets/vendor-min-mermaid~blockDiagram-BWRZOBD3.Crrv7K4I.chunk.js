import { G as No, H as Mo, J as Pr, N as Ao, Nt as As, S as bt, _ as Ut, bt as ot, c as tn, dt as hn, et as Wo, gt as mr, hn as pt, jt as $s, ln as ia, q as Ot, rt as Z, s as Rr, x as Yt } from "./vendor-min-mermaid~architectureDiagram-4X3Z3J56.CRZbjc31.chunk.js";
import { A as Xr, C as Kn, D as Rn, K as Cr$1, L as fn, M as Zr, N as _f, Q as m$1, U as sn, Y as T, q as Mt, z as h } from "./vendor-min-mermaid~architecture-U656AL7Q-3ZQKGQJL.BA2pzSbr.chunk.js";
var P = "\0", l = "\0", v$1 = "", m = class {
	static {
		m$1(this, "Graph");
	}
	constructor(e = {}) {
		this._isDirected = Object.prototype.hasOwnProperty.call(e, "directed") ? e.directed : !0, this._isMultigraph = Object.prototype.hasOwnProperty.call(e, "multigraph") ? e.multigraph : !1, this._isCompound = Object.prototype.hasOwnProperty.call(e, "compound") ? e.compound : !1, this._label = void 0, this._defaultNodeLabelFn = /* @__PURE__ */ Mt(void 0), this._defaultEdgeLabelFn = /* @__PURE__ */ Mt(void 0), this._nodes = {}, this._isCompound && (this._parent = {}, this._children = {}, this._children[l] = {}), this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {};
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
		return T(e) || (e = /* @__PURE__ */ Mt(e)), this._defaultNodeLabelFn = e, this;
	}
	nodeCount() {
		return this._nodeCount;
	}
	nodes() {
		return h(this._nodes);
	}
	sources() {
		var e = this;
		return fn(/* @__PURE__ */ this.nodes(), function(t$1) {
			return Cr$1(e._in[t$1]);
		});
	}
	sinks() {
		var e = this;
		return fn(/* @__PURE__ */ this.nodes(), function(t$1) {
			return Cr$1(e._out[t$1]);
		});
	}
	setNodes(e, t$1) {
		var s$1 = arguments, i = this;
		return Zr(e, function(r) {
			s$1.length > 1 ? i.setNode(r, t$1) : i.setNode(r);
		}), this;
	}
	setNode(e, t$1) {
		return Object.prototype.hasOwnProperty.call(this._nodes, e) ? (arguments.length > 1 && (this._nodes[e] = t$1), this) : (this._nodes[e] = arguments.length > 1 ? t$1 : this._defaultNodeLabelFn(e), this._isCompound && (this._parent[e] = l, this._children[e] = {}, this._children[l][e] = !0), this._in[e] = {}, this._preds[e] = {}, this._out[e] = {}, this._sucs[e] = {}, ++this._nodeCount, this);
	}
	node(e) {
		return this._nodes[e];
	}
	hasNode(e) {
		return Object.prototype.hasOwnProperty.call(this._nodes, e);
	}
	removeNode(e) {
		if (Object.prototype.hasOwnProperty.call(this._nodes, e)) {
			var t$1 = /* @__PURE__ */ m$1((s$1) => this.removeEdge(this._edgeObjs[s$1]), "removeEdge");
			delete this._nodes[e], this._isCompound && (this._removeFromParentsChildList(e), delete this._parent[e], Zr(/* @__PURE__ */ this.children(e), (s$1) => {
				this.setParent(s$1);
			}), delete this._children[e]), Zr(/* @__PURE__ */ h(this._in[e]), t$1), delete this._in[e], delete this._preds[e], Zr(/* @__PURE__ */ h(this._out[e]), t$1), delete this._out[e], delete this._sucs[e], --this._nodeCount;
		}
		return this;
	}
	setParent(e, t$1) {
		if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
		if (sn(t$1)) t$1 = l;
		else {
			t$1 += "";
			for (var s$1 = t$1; !sn(s$1); s$1 = /* @__PURE__ */ this.parent(s$1)) if (s$1 === e) throw new Error("Setting " + t$1 + " as parent of " + e + " would create a cycle");
			this.setNode(t$1);
		}
		return this.setNode(e), this._removeFromParentsChildList(e), this._parent[e] = t$1, this._children[t$1][e] = !0, this;
	}
	_removeFromParentsChildList(e) {
		delete this._children[this._parent[e]][e];
	}
	parent(e) {
		if (this._isCompound) {
			var t$1 = this._parent[e];
			if (t$1 !== l) return t$1;
		}
	}
	children(e) {
		if (sn(e) && (e = l), this._isCompound) {
			var t$1 = this._children[e];
			if (t$1) return h(t$1);
		} else {
			if (e === l) return this.nodes();
			if (this.hasNode(e)) return [];
		}
	}
	predecessors(e) {
		var t$1 = this._preds[e];
		if (t$1) return h(t$1);
	}
	successors(e) {
		var t$1 = this._sucs[e];
		if (t$1) return h(t$1);
	}
	neighbors(e) {
		var t$1 = /* @__PURE__ */ this.predecessors(e);
		if (t$1) return Kn(t$1, /* @__PURE__ */ this.successors(e));
	}
	isLeaf(e) {
		var t$1;
		return this.isDirected() ? t$1 = /* @__PURE__ */ this.successors(e) : t$1 = /* @__PURE__ */ this.neighbors(e), t$1.length === 0;
	}
	filterNodes(e) {
		var t$1 = new this.constructor({
			directed: this._isDirected,
			multigraph: this._isMultigraph,
			compound: this._isCompound
		});
		t$1.setGraph(/* @__PURE__ */ this.graph());
		var s$1 = this;
		Zr(this._nodes, function(n$1, h$1) {
			e(h$1) && t$1.setNode(h$1, n$1);
		}), Zr(this._edgeObjs, function(n$1) {
			t$1.hasNode(n$1.v) && t$1.hasNode(n$1.w) && t$1.setEdge(n$1, /* @__PURE__ */ s$1.edge(n$1));
		});
		var i = {};
		function r(n$1) {
			var h$1 = /* @__PURE__ */ s$1.parent(n$1);
			return h$1 === void 0 || t$1.hasNode(h$1) ? (i[n$1] = h$1, h$1) : h$1 in i ? i[h$1] : r(h$1);
		}
		return m$1(r, "findParent"), this._isCompound && Zr(/* @__PURE__ */ t$1.nodes(), function(n$1) {
			t$1.setParent(n$1, /* @__PURE__ */ r(n$1));
		}), t$1;
	}
	setDefaultEdgeLabel(e) {
		return T(e) || (e = /* @__PURE__ */ Mt(e)), this._defaultEdgeLabelFn = e, this;
	}
	edgeCount() {
		return this._edgeCount;
	}
	edges() {
		return Xr(this._edgeObjs);
	}
	setPath(e, t$1) {
		var s$1 = this, i = arguments;
		return Rn(e, function(r, n$1) {
			return i.length > 1 ? s$1.setEdge(r, n$1, t$1) : s$1.setEdge(r, n$1), n$1;
		}), this;
	}
	setEdge() {
		var e, t$1, s$1, i, r = !1, n$1 = arguments[0];
		typeof n$1 == "object" && n$1 !== null && "v" in n$1 ? (e = n$1.v, t$1 = n$1.w, s$1 = n$1.name, arguments.length === 2 && (i = arguments[1], r = !0)) : (e = n$1, t$1 = arguments[1], s$1 = arguments[3], arguments.length > 2 && (i = arguments[2], r = !0)), e = "" + e, t$1 = "" + t$1, sn(s$1) || (s$1 = "" + s$1);
		var h$1 = /* @__PURE__ */ p(this._isDirected, e, t$1, s$1);
		if (Object.prototype.hasOwnProperty.call(this._edgeLabels, h$1)) return r && (this._edgeLabels[h$1] = i), this;
		if (!sn(s$1) && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
		this.setNode(e), this.setNode(t$1), this._edgeLabels[h$1] = r ? i : this._defaultEdgeLabelFn(e, t$1, s$1);
		var c = /* @__PURE__ */ D(this._isDirected, e, t$1, s$1);
		return e = c.v, t$1 = c.w, Object.freeze(c), this._edgeObjs[h$1] = c, L(this._preds[t$1], e), L(this._sucs[e], t$1), this._in[t$1][h$1] = c, this._out[e][h$1] = c, this._edgeCount++, this;
	}
	edge(e, t$1, s$1) {
		var i = arguments.length === 1 ? O$1(this._isDirected, arguments[0]) : p(this._isDirected, e, t$1, s$1);
		return this._edgeLabels[i];
	}
	hasEdge(e, t$1, s$1) {
		var i = arguments.length === 1 ? O$1(this._isDirected, arguments[0]) : p(this._isDirected, e, t$1, s$1);
		return Object.prototype.hasOwnProperty.call(this._edgeLabels, i);
	}
	removeEdge(e, t$1, s$1) {
		var i = arguments.length === 1 ? O$1(this._isDirected, arguments[0]) : p(this._isDirected, e, t$1, s$1), r = this._edgeObjs[i];
		return r && (e = r.v, t$1 = r.w, delete this._edgeLabels[i], delete this._edgeObjs[i], j$1(this._preds[t$1], e), j$1(this._sucs[e], t$1), delete this._in[t$1][i], delete this._out[e][i], this._edgeCount--), this;
	}
	inEdges(e, t$1) {
		var s$1 = this._in[e];
		if (s$1) {
			var i = /* @__PURE__ */ Xr(s$1);
			return t$1 ? fn(i, function(r) {
				return r.v === t$1;
			}) : i;
		}
	}
	outEdges(e, t$1) {
		var s$1 = this._out[e];
		if (s$1) {
			var i = /* @__PURE__ */ Xr(s$1);
			return t$1 ? fn(i, function(r) {
				return r.w === t$1;
			}) : i;
		}
	}
	nodeEdges(e, t$1) {
		var s$1 = /* @__PURE__ */ this.inEdges(e, t$1);
		if (s$1) return s$1.concat(/* @__PURE__ */ this.outEdges(e, t$1));
	}
};
m.prototype._nodeCount = 0;
m.prototype._edgeCount = 0;
function L(d$1, e) {
	d$1[e] ? d$1[e]++ : d$1[e] = 1;
}
m$1(L, "incrementOrInitEntry");
function j$1(d$1, e) {
	--d$1[e] || delete d$1[e];
}
m$1(j$1, "decrementOrRemoveEntry");
function p(d$1, e, t$1, s$1) {
	var i = "" + e, r = "" + t$1;
	if (!d$1 && i > r) {
		var n$1 = i;
		i = r, r = n$1;
	}
	return i + v$1 + r + v$1 + (sn(s$1) ? P : s$1);
}
m$1(p, "edgeArgsToId");
function D(d$1, e, t$1, s$1) {
	var i = "" + e, r = "" + t$1;
	if (!d$1 && i > r) {
		var n$1 = i;
		i = r, r = n$1;
	}
	var h$1 = {
		v: i,
		w: r
	};
	return s$1 && (h$1.name = s$1), h$1;
}
m$1(D, "edgeArgsToObj");
function O$1(d$1, e) {
	return p(d$1, e.v, e.w, e.name);
}
m$1(O$1, "edgeObjToId");
var o = /* @__PURE__ */ m$1(() => `
  /* Font Awesome icon styling - consolidated */
  .label-icon {
    display: inline-block;
    height: 1em;
    overflow: visible;
    vertical-align: -0.125em;
  }
  
  .node .label-icon path {
    fill: currentColor;
    stroke: revert;
    stroke-width: revert;
  }
`, "getIconStyles");
var s = {
	aggregation: 17.25,
	extension: 17.25,
	composition: 17.25,
	dependency: 6,
	lollipop: 13.5,
	arrow_point: 4
}, d = {
	arrow_point: 9,
	arrow_cross: 12.5,
	arrow_circle: 12.5
};
function b(n$1, o$1) {
	if (n$1 === void 0 || o$1 === void 0) return {
		angle: 0,
		deltaX: 0,
		deltaY: 0
	};
	n$1 = /* @__PURE__ */ t(n$1), o$1 = /* @__PURE__ */ t(o$1);
	let [c, e] = [n$1.x, n$1.y], [a, f] = [o$1.x, o$1.y], l$1 = a - c, m$2 = f - e;
	return {
		angle: /* @__PURE__ */ Math.atan(m$2 / l$1),
		deltaX: l$1,
		deltaY: m$2
	};
}
m$1(b, "calculateDeltaAndAngle");
var t = /* @__PURE__ */ m$1((n$1) => Array.isArray(n$1) ? {
	x: n$1[0],
	y: n$1[1]
} : n$1, "pointTransformer"), w = /* @__PURE__ */ m$1((n$1) => ({
	x: /* @__PURE__ */ m$1(function(o$1, c, e) {
		let a = 0, f = t(e[0]).x < t(e[e.length - 1]).x ? "left" : "right";
		if (c === 0 && Object.hasOwn(s, n$1.arrowTypeStart)) {
			let { angle: r, deltaX: h$1 } = b(e[0], e[1]);
			a = s[n$1.arrowTypeStart] * Math.cos(r) * (h$1 >= 0 ? 1 : -1);
		} else if (c === e.length - 1 && Object.hasOwn(s, n$1.arrowTypeEnd)) {
			let { angle: r, deltaX: h$1 } = b(e[e.length - 1], e[e.length - 2]);
			a = s[n$1.arrowTypeEnd] * Math.cos(r) * (h$1 >= 0 ? 1 : -1);
		}
		let l$1 = /* @__PURE__ */ Math.abs(t(o$1).x - t(e[e.length - 1]).x), m$2 = /* @__PURE__ */ Math.abs(t(o$1).y - t(e[e.length - 1]).y), i = /* @__PURE__ */ Math.abs(t(o$1).x - t(e[0]).x), x = /* @__PURE__ */ Math.abs(t(o$1).y - t(e[0]).y), u = s[n$1.arrowTypeStart], y = s[n$1.arrowTypeEnd], g = 1;
		if (l$1 < y && l$1 > 0 && m$2 < y) {
			let r = y + g - l$1;
			r *= f === "right" ? -1 : 1, a -= r;
		}
		if (i < u && i > 0 && x < u) {
			let r = u + g - i;
			r *= f === "right" ? -1 : 1, a += r;
		}
		return t(o$1).x + a;
	}, "x"),
	y: /* @__PURE__ */ m$1(function(o$1, c, e) {
		let a = 0, f = t(e[0]).y < t(e[e.length - 1]).y ? "down" : "up";
		if (c === 0 && Object.hasOwn(s, n$1.arrowTypeStart)) {
			let { angle: r, deltaY: h$1 } = b(e[0], e[1]);
			a = s[n$1.arrowTypeStart] * Math.abs(/* @__PURE__ */ Math.sin(r)) * (h$1 >= 0 ? 1 : -1);
		} else if (c === e.length - 1 && Object.hasOwn(s, n$1.arrowTypeEnd)) {
			let { angle: r, deltaY: h$1 } = b(e[e.length - 1], e[e.length - 2]);
			a = s[n$1.arrowTypeEnd] * Math.abs(/* @__PURE__ */ Math.sin(r)) * (h$1 >= 0 ? 1 : -1);
		}
		let l$1 = /* @__PURE__ */ Math.abs(t(o$1).y - t(e[e.length - 1]).y), m$2 = /* @__PURE__ */ Math.abs(t(o$1).x - t(e[e.length - 1]).x), i = /* @__PURE__ */ Math.abs(t(o$1).y - t(e[0]).y), x = /* @__PURE__ */ Math.abs(t(o$1).x - t(e[0]).x), u = s[n$1.arrowTypeStart], y = s[n$1.arrowTypeEnd], g = 1;
		if (l$1 < y && l$1 > 0 && m$2 < y) {
			let r = y + g - l$1;
			r *= f === "up" ? -1 : 1, a -= r;
		}
		if (i < u && i > 0 && x < u) {
			let r = u + g - i;
			r *= f === "up" ? -1 : 1, a += r;
		}
		return t(o$1).y + a;
	}, "y")
}), "getLineFunctionsWithOffset");
var n = /* @__PURE__ */ m$1(({ flowchart: r }) => {
	let t$1 = r?.subGraphTitleMargin?.top ?? 0, a = r?.subGraphTitleMargin?.bottom ?? 0;
	return {
		subGraphTitleTopMargin: t$1,
		subGraphTitleBottomMargin: a,
		subGraphTitleTotalMargin: t$1 + a
	};
}, "getSubGraphTitleMargins");
var yt = /* @__PURE__ */ function() {
	var e = /* @__PURE__ */ m$1(function(T$1, y, d$1, f) {
		for (d$1 = d$1 || {}, f = T$1.length; f--; d$1[T$1[f]] = y);
		return d$1;
	}, "o"), t$1 = [1, 15], a = [1, 7], i = [1, 13], l$1 = [1, 14], s$1 = [1, 19], r = [1, 16], n$1 = [1, 17], o$1 = [1, 18], u = [8, 30], h$1 = [
		8,
		10,
		21,
		28,
		29,
		30,
		31,
		39,
		43,
		46
	], x = [1, 23], m$2 = [1, 24], b$1 = [
		8,
		10,
		15,
		16,
		21,
		28,
		29,
		30,
		31,
		39,
		43,
		46
	], L$1 = [
		8,
		10,
		15,
		16,
		21,
		27,
		28,
		29,
		30,
		31,
		39,
		43,
		46
	], _ = [1, 49], S = {
		trace: /* @__PURE__ */ m$1(function() {}, "trace"),
		yy: {},
		symbols_: {
			error: 2,
			spaceLines: 3,
			SPACELINE: 4,
			NL: 5,
			separator: 6,
			SPACE: 7,
			EOF: 8,
			start: 9,
			BLOCK_DIAGRAM_KEY: 10,
			document: 11,
			stop: 12,
			statement: 13,
			link: 14,
			LINK: 15,
			START_LINK: 16,
			LINK_LABEL: 17,
			STR: 18,
			nodeStatement: 19,
			columnsStatement: 20,
			SPACE_BLOCK: 21,
			blockStatement: 22,
			classDefStatement: 23,
			cssClassStatement: 24,
			styleStatement: 25,
			node: 26,
			SIZE: 27,
			COLUMNS: 28,
			"id-block": 29,
			end: 30,
			NODE_ID: 31,
			nodeShapeNLabel: 32,
			dirList: 33,
			DIR: 34,
			NODE_DSTART: 35,
			NODE_DEND: 36,
			BLOCK_ARROW_START: 37,
			BLOCK_ARROW_END: 38,
			classDef: 39,
			CLASSDEF_ID: 40,
			CLASSDEF_STYLEOPTS: 41,
			DEFAULT: 42,
			class: 43,
			CLASSENTITY_IDS: 44,
			STYLECLASS: 45,
			style: 46,
			STYLE_ENTITY_IDS: 47,
			STYLE_DEFINITION_DATA: 48,
			$accept: 0,
			$end: 1
		},
		terminals_: {
			2: "error",
			4: "SPACELINE",
			5: "NL",
			7: "SPACE",
			8: "EOF",
			10: "BLOCK_DIAGRAM_KEY",
			15: "LINK",
			16: "START_LINK",
			17: "LINK_LABEL",
			18: "STR",
			21: "SPACE_BLOCK",
			27: "SIZE",
			28: "COLUMNS",
			29: "id-block",
			30: "end",
			31: "NODE_ID",
			34: "DIR",
			35: "NODE_DSTART",
			36: "NODE_DEND",
			37: "BLOCK_ARROW_START",
			38: "BLOCK_ARROW_END",
			39: "classDef",
			40: "CLASSDEF_ID",
			41: "CLASSDEF_STYLEOPTS",
			42: "DEFAULT",
			43: "class",
			44: "CLASSENTITY_IDS",
			45: "STYLECLASS",
			46: "style",
			47: "STYLE_ENTITY_IDS",
			48: "STYLE_DEFINITION_DATA"
		},
		productions_: [
			0,
			[3, 1],
			[3, 2],
			[3, 2],
			[6, 1],
			[6, 1],
			[6, 1],
			[9, 3],
			[12, 1],
			[12, 1],
			[12, 2],
			[12, 2],
			[11, 1],
			[11, 2],
			[14, 1],
			[14, 4],
			[13, 1],
			[13, 1],
			[13, 1],
			[13, 1],
			[13, 1],
			[13, 1],
			[13, 1],
			[19, 3],
			[19, 2],
			[19, 1],
			[20, 1],
			[22, 4],
			[22, 3],
			[26, 1],
			[26, 2],
			[33, 1],
			[33, 2],
			[32, 3],
			[32, 4],
			[23, 3],
			[23, 3],
			[24, 3],
			[25, 3]
		],
		performAction: /* @__PURE__ */ m$1(function(y, d$1, f, k, E, g, Y) {
			var p$1 = g.length - 1;
			switch (E) {
				case 4:
					k.getLogger().debug("Rule: separator (NL) ");
					break;
				case 5:
					k.getLogger().debug("Rule: separator (Space) ");
					break;
				case 6:
					k.getLogger().debug("Rule: separator (EOF) ");
					break;
				case 7:
					k.getLogger().debug("Rule: hierarchy: ", g[p$1 - 1]), k.setHierarchy(g[p$1 - 1]);
					break;
				case 8:
					k.getLogger().debug("Stop NL ");
					break;
				case 9:
					k.getLogger().debug("Stop EOF ");
					break;
				case 10:
					k.getLogger().debug("Stop NL2 ");
					break;
				case 11:
					k.getLogger().debug("Stop EOF2 ");
					break;
				case 12:
					k.getLogger().debug("Rule: statement: ", g[p$1]), typeof g[p$1].length == "number" ? this.$ = g[p$1] : this.$ = [g[p$1]];
					break;
				case 13:
					k.getLogger().debug("Rule: statement #2: ", g[p$1 - 1]), this.$ = /* @__PURE__ */ [g[p$1 - 1]].concat(g[p$1]);
					break;
				case 14:
					k.getLogger().debug("Rule: link: ", g[p$1], y), this.$ = {
						edgeTypeStr: g[p$1],
						label: ""
					};
					break;
				case 15:
					k.getLogger().debug("Rule: LABEL link: ", g[p$1 - 3], g[p$1 - 1], g[p$1]), this.$ = {
						edgeTypeStr: g[p$1],
						label: g[p$1 - 1]
					};
					break;
				case 18:
					let R = /* @__PURE__ */ parseInt(g[p$1]);
					this.$ = {
						id: /* @__PURE__ */ k.generateId(),
						type: "space",
						label: "",
						width: R,
						children: []
					};
					break;
				case 23:
					k.getLogger().debug("Rule: (nodeStatement link node) ", g[p$1 - 2], g[p$1 - 1], g[p$1], " typestr: ", g[p$1 - 1].edgeTypeStr);
					let V = /* @__PURE__ */ k.edgeStrToEdgeData(g[p$1 - 1].edgeTypeStr);
					this.$ = [
						{
							id: g[p$1 - 2].id,
							label: g[p$1 - 2].label,
							type: g[p$1 - 2].type,
							directions: g[p$1 - 2].directions
						},
						{
							id: g[p$1 - 2].id + "-" + g[p$1].id,
							start: g[p$1 - 2].id,
							end: g[p$1].id,
							label: g[p$1 - 1].label,
							type: "edge",
							directions: g[p$1].directions,
							arrowTypeEnd: V,
							arrowTypeStart: "arrow_open"
						},
						{
							id: g[p$1].id,
							label: g[p$1].label,
							type: /* @__PURE__ */ k.typeStr2Type(g[p$1].typeStr),
							directions: g[p$1].directions
						}
					];
					break;
				case 24:
					k.getLogger().debug("Rule: nodeStatement (abc88 node size) ", g[p$1 - 1], g[p$1]), this.$ = {
						id: g[p$1 - 1].id,
						label: g[p$1 - 1].label,
						type: /* @__PURE__ */ k.typeStr2Type(g[p$1 - 1].typeStr),
						directions: g[p$1 - 1].directions,
						widthInColumns: /* @__PURE__ */ parseInt(g[p$1], 10)
					};
					break;
				case 25:
					k.getLogger().debug("Rule: nodeStatement (node) ", g[p$1]), this.$ = {
						id: g[p$1].id,
						label: g[p$1].label,
						type: /* @__PURE__ */ k.typeStr2Type(g[p$1].typeStr),
						directions: g[p$1].directions,
						widthInColumns: 1
					};
					break;
				case 26:
					k.getLogger().debug("APA123", this ? this : "na"), k.getLogger().debug("COLUMNS: ", g[p$1]), this.$ = {
						type: "column-setting",
						columns: g[p$1] === "auto" ? -1 : parseInt(g[p$1])
					};
					break;
				case 27:
					k.getLogger().debug("Rule: id-block statement : ", g[p$1 - 2], g[p$1 - 1]);
					k.generateId();
					this.$ = {
						...g[p$1 - 2],
						type: "composite",
						children: g[p$1 - 1]
					};
					break;
				case 28:
					k.getLogger().debug("Rule: blockStatement : ", g[p$1 - 2], g[p$1 - 1], g[p$1]);
					this.$ = {
						id: /* @__PURE__ */ k.generateId(),
						type: "composite",
						label: "",
						children: g[p$1 - 1]
					};
					break;
				case 29:
					k.getLogger().debug("Rule: node (NODE_ID separator): ", g[p$1]), this.$ = { id: g[p$1] };
					break;
				case 30:
					k.getLogger().debug("Rule: node (NODE_ID nodeShapeNLabel separator): ", g[p$1 - 1], g[p$1]), this.$ = {
						id: g[p$1 - 1],
						label: g[p$1].label,
						typeStr: g[p$1].typeStr,
						directions: g[p$1].directions
					};
					break;
				case 31:
					k.getLogger().debug("Rule: dirList: ", g[p$1]), this.$ = [g[p$1]];
					break;
				case 32:
					k.getLogger().debug("Rule: dirList: ", g[p$1 - 1], g[p$1]), this.$ = /* @__PURE__ */ [g[p$1 - 1]].concat(g[p$1]);
					break;
				case 33:
					k.getLogger().debug("Rule: nodeShapeNLabel: ", g[p$1 - 2], g[p$1 - 1], g[p$1]), this.$ = {
						typeStr: g[p$1 - 2] + g[p$1],
						label: g[p$1 - 1]
					};
					break;
				case 34:
					k.getLogger().debug("Rule: BLOCK_ARROW nodeShapeNLabel: ", g[p$1 - 3], g[p$1 - 2], " #3:", g[p$1 - 1], g[p$1]), this.$ = {
						typeStr: g[p$1 - 3] + g[p$1],
						label: g[p$1 - 2],
						directions: g[p$1 - 1]
					};
					break;
				case 35:
				case 36:
					this.$ = {
						type: "classDef",
						id: /* @__PURE__ */ g[p$1 - 1].trim(),
						css: /* @__PURE__ */ g[p$1].trim()
					};
					break;
				case 37:
					this.$ = {
						type: "applyClass",
						id: /* @__PURE__ */ g[p$1 - 1].trim(),
						styleClass: /* @__PURE__ */ g[p$1].trim()
					};
					break;
				case 38:
					this.$ = {
						type: "applyStyles",
						id: /* @__PURE__ */ g[p$1 - 1].trim(),
						stylesStr: /* @__PURE__ */ g[p$1].trim()
					};
					break;
			}
		}, "anonymous"),
		table: [
			{
				9: 1,
				10: [1, 2]
			},
			{ 1: [3] },
			{
				10: t$1,
				11: 3,
				13: 4,
				19: 5,
				20: 6,
				21: a,
				22: 8,
				23: 9,
				24: 10,
				25: 11,
				26: 12,
				28: i,
				29: l$1,
				31: s$1,
				39: r,
				43: n$1,
				46: o$1
			},
			{ 8: [1, 20] },
			/* @__PURE__ */ e(u, [2, 12], {
				13: 4,
				19: 5,
				20: 6,
				22: 8,
				23: 9,
				24: 10,
				25: 11,
				26: 12,
				11: 21,
				10: t$1,
				21: a,
				28: i,
				29: l$1,
				31: s$1,
				39: r,
				43: n$1,
				46: o$1
			}),
			/* @__PURE__ */ e(h$1, [2, 16], {
				14: 22,
				15: x,
				16: m$2
			}),
			/* @__PURE__ */ e(h$1, [2, 17]),
			/* @__PURE__ */ e(h$1, [2, 18]),
			/* @__PURE__ */ e(h$1, [2, 19]),
			/* @__PURE__ */ e(h$1, [2, 20]),
			/* @__PURE__ */ e(h$1, [2, 21]),
			/* @__PURE__ */ e(h$1, [2, 22]),
			/* @__PURE__ */ e(b$1, [2, 25], { 27: [1, 25] }),
			/* @__PURE__ */ e(h$1, [2, 26]),
			{
				19: 26,
				26: 12,
				31: s$1
			},
			{
				10: t$1,
				11: 27,
				13: 4,
				19: 5,
				20: 6,
				21: a,
				22: 8,
				23: 9,
				24: 10,
				25: 11,
				26: 12,
				28: i,
				29: l$1,
				31: s$1,
				39: r,
				43: n$1,
				46: o$1
			},
			{
				40: [1, 28],
				42: [1, 29]
			},
			{ 44: [1, 30] },
			{ 47: [1, 31] },
			/* @__PURE__ */ e(L$1, [2, 29], {
				32: 32,
				35: [1, 33],
				37: [1, 34]
			}),
			{ 1: [2, 7] },
			/* @__PURE__ */ e(u, [2, 13]),
			{
				26: 35,
				31: s$1
			},
			{ 31: [2, 14] },
			{ 17: [1, 36] },
			/* @__PURE__ */ e(b$1, [2, 24]),
			{
				10: t$1,
				11: 37,
				13: 4,
				14: 22,
				15: x,
				16: m$2,
				19: 5,
				20: 6,
				21: a,
				22: 8,
				23: 9,
				24: 10,
				25: 11,
				26: 12,
				28: i,
				29: l$1,
				31: s$1,
				39: r,
				43: n$1,
				46: o$1
			},
			{ 30: [1, 38] },
			{ 41: [1, 39] },
			{ 41: [1, 40] },
			{ 45: [1, 41] },
			{ 48: [1, 42] },
			/* @__PURE__ */ e(L$1, [2, 30]),
			{ 18: [1, 43] },
			{ 18: [1, 44] },
			/* @__PURE__ */ e(b$1, [2, 23]),
			{ 18: [1, 45] },
			{ 30: [1, 46] },
			/* @__PURE__ */ e(h$1, [2, 28]),
			/* @__PURE__ */ e(h$1, [2, 35]),
			/* @__PURE__ */ e(h$1, [2, 36]),
			/* @__PURE__ */ e(h$1, [2, 37]),
			/* @__PURE__ */ e(h$1, [2, 38]),
			{ 36: [1, 47] },
			{
				33: 48,
				34: _
			},
			{ 15: [1, 50] },
			/* @__PURE__ */ e(h$1, [2, 27]),
			/* @__PURE__ */ e(L$1, [2, 33]),
			{ 38: [1, 51] },
			{
				33: 52,
				34: _,
				38: [2, 31]
			},
			{ 31: [2, 15] },
			/* @__PURE__ */ e(L$1, [2, 34]),
			{ 38: [2, 32] }
		],
		defaultActions: {
			20: [2, 7],
			23: [2, 14],
			50: [2, 15],
			52: [2, 32]
		},
		parseError: /* @__PURE__ */ m$1(function(y, d$1) {
			if (d$1.recoverable) this.trace(y);
			else {
				var f = new Error(y);
				throw f.hash = d$1, f;
			}
		}, "parseError"),
		parse: /* @__PURE__ */ m$1(function(y) {
			var d$1 = this, f = [0], k = [], E = [null], g = [], Y = this.table, p$1 = "", R = 0, Z$1 = 0, V = 0, Bt = 2, st = 1, Be = /* @__PURE__ */ g.slice.call(arguments, 1), A = /* @__PURE__ */ Object.create(this.lexer), J = { yy: {} };
			for (var ut in this.yy) Object.prototype.hasOwnProperty.call(this.yy, ut) && (J.yy[ut] = this.yy[ut]);
			A.setInput(y, J.yy), J.yy.lexer = A, J.yy.parser = this, typeof A.yylloc > "u" && (A.yylloc = {});
			var pt$1 = A.yylloc;
			g.push(pt$1);
			var ve = A.options && A.options.ranges;
			typeof J.yy.parseError == "function" ? this.parseError = J.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
			function qr(H) {
				f.length = f.length - 2 * H, E.length = E.length - H, g.length = g.length - H;
			}
			m$1(qr, "popStack");
			function Te() {
				var H;
				return H = k.pop() || A.lex() || st, typeof H != "number" && (H instanceof Array && (k = H, H = /* @__PURE__ */ k.pop()), H = d$1.symbols_[H] || H), H;
			}
			m$1(Te, "lex");
			for (var F, ft, Q, K, xt, $ = {}, it, G, vt, nt;;) {
				if (Q = f[f.length - 1], this.defaultActions[Q] ? K = this.defaultActions[Q] : ((F === null || typeof F > "u") && (F = /* @__PURE__ */ Te()), K = Y[Q] && Y[Q][F]), typeof K > "u" || !K.length || !K[0]) {
					var bt$1 = "";
					nt = [];
					for (it in Y[Q]) this.terminals_[it] && it > Bt && nt.push("'" + this.terminals_[it] + "'");
					A.showPosition ? bt$1 = "Parse error on line " + (R + 1) + `:
` + A.showPosition() + `
Expecting ` + nt.join(", ") + ", got '" + (this.terminals_[F] || F) + "'" : bt$1 = "Parse error on line " + (R + 1) + ": Unexpected " + (F == st ? "end of input" : "'" + (this.terminals_[F] || F) + "'"), this.parseError(bt$1, {
						text: A.match,
						token: this.terminals_[F] || F,
						line: A.yylineno,
						loc: pt$1,
						expected: nt
					});
				}
				if (K[0] instanceof Array && K.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + Q + ", token: " + F);
				switch (K[0]) {
					case 1:
						f.push(F), E.push(A.yytext), g.push(A.yylloc), f.push(K[1]), F = null, ft ? (F = ft, ft = null) : (Z$1 = A.yyleng, p$1 = A.yytext, R = A.yylineno, pt$1 = A.yylloc, V > 0 && V--);
						break;
					case 2:
						if (G = this.productions_[K[1]][1], $.$ = E[E.length - G], $._$ = {
							first_line: g[g.length - (G || 1)].first_line,
							last_line: g[g.length - 1].last_line,
							first_column: g[g.length - (G || 1)].first_column,
							last_column: g[g.length - 1].last_column
						}, ve && ($._$.range = [g[g.length - (G || 1)].range[0], g[g.length - 1].range[1]]), xt = /* @__PURE__ */ this.performAction.apply($, /* @__PURE__ */ [
							p$1,
							Z$1,
							R,
							J.yy,
							K[1],
							E,
							g
						].concat(Be)), typeof xt < "u") return xt;
						G && (f = /* @__PURE__ */ f.slice(0, -1 * G * 2), E = /* @__PURE__ */ E.slice(0, -1 * G), g = /* @__PURE__ */ g.slice(0, -1 * G)), f.push(this.productions_[K[1]][0]), E.push($.$), g.push($._$), vt = Y[f[f.length - 2]][f[f.length - 1]], f.push(vt);
						break;
					case 3: return !0;
				}
			}
			return !0;
		}, "parse")
	};
	S.lexer = /* @__PURE__ */ function() {
		return {
			EOF: 1,
			parseError: /* @__PURE__ */ m$1(function(d$1, f) {
				if (this.yy.parser) this.yy.parser.parseError(d$1, f);
				else throw new Error(d$1);
			}, "parseError"),
			setInput: /* @__PURE__ */ m$1(function(y, d$1) {
				return this.yy = d$1 || this.yy || {}, this._input = y, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
					first_line: 1,
					first_column: 0,
					last_line: 1,
					last_column: 0
				}, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
			}, "setInput"),
			input: /* @__PURE__ */ m$1(function() {
				var y = this._input[0];
				this.yytext += y, this.yyleng++, this.offset++, this.match += y, this.matched += y;
				return y.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = /* @__PURE__ */ this._input.slice(1), y;
			}, "input"),
			unput: /* @__PURE__ */ m$1(function(y) {
				var d$1 = y.length, f = /* @__PURE__ */ y.split(/(?:\r\n?|\n)/g);
				this._input = y + this._input, this.yytext = /* @__PURE__ */ this.yytext.substr(0, this.yytext.length - d$1), this.offset -= d$1;
				var k = /* @__PURE__ */ this.match.split(/(?:\r\n?|\n)/g);
				this.match = /* @__PURE__ */ this.match.substr(0, this.match.length - 1), this.matched = /* @__PURE__ */ this.matched.substr(0, this.matched.length - 1), f.length - 1 && (this.yylineno -= f.length - 1);
				var E = this.yylloc.range;
				return this.yylloc = {
					first_line: this.yylloc.first_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.first_column,
					last_column: f ? (f.length === k.length ? this.yylloc.first_column : 0) + k[k.length - f.length].length - f[0].length : this.yylloc.first_column - d$1
				}, this.options.ranges && (this.yylloc.range = [E[0], E[0] + this.yyleng - d$1]), this.yyleng = this.yytext.length, this;
			}, "unput"),
			more: /* @__PURE__ */ m$1(function() {
				return this._more = !0, this;
			}, "more"),
			reject: /* @__PURE__ */ m$1(function() {
				if (this.options.backtrack_lexer) this._backtrack = !0;
				else return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
					text: "",
					token: null,
					line: this.yylineno
				});
				return this;
			}, "reject"),
			less: /* @__PURE__ */ m$1(function(y) {
				this.unput(/* @__PURE__ */ this.match.slice(y));
			}, "less"),
			pastInput: /* @__PURE__ */ m$1(function() {
				var y = /* @__PURE__ */ this.matched.substr(0, this.matched.length - this.match.length);
				return (y.length > 20 ? "..." : "") + y.substr(-20).replace(/\n/g, "");
			}, "pastInput"),
			upcomingInput: /* @__PURE__ */ m$1(function() {
				var y = this.match;
				return y.length < 20 && (y += /* @__PURE__ */ this._input.substr(0, 20 - y.length)), (y.substr(0, 20) + (y.length > 20 ? "..." : "")).replace(/\n/g, "");
			}, "upcomingInput"),
			showPosition: /* @__PURE__ */ m$1(function() {
				var y = /* @__PURE__ */ this.pastInput(), d$1 = /* @__PURE__ */ new Array(y.length + 1).join("-");
				return y + this.upcomingInput() + `
` + d$1 + "^";
			}, "showPosition"),
			test_match: /* @__PURE__ */ m$1(function(y, d$1) {
				var f, k, E;
				if (this.options.backtrack_lexer && (E = {
					yylineno: this.yylineno,
					yylloc: {
						first_line: this.yylloc.first_line,
						last_line: this.last_line,
						first_column: this.yylloc.first_column,
						last_column: this.yylloc.last_column
					},
					yytext: this.yytext,
					match: this.match,
					matches: this.matches,
					matched: this.matched,
					yyleng: this.yyleng,
					offset: this.offset,
					_more: this._more,
					_input: this._input,
					yy: this.yy,
					conditionStack: /* @__PURE__ */ this.conditionStack.slice(0),
					done: this.done
				}, this.options.ranges && (E.yylloc.range = /* @__PURE__ */ this.yylloc.range.slice(0))), k = /* @__PURE__ */ y[0].match(/(?:\r\n?|\n).*/g), k && (this.yylineno += k.length), this.yylloc = {
					first_line: this.yylloc.last_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.last_column,
					last_column: k ? k[k.length - 1].length - k[k.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + y[0].length
				}, this.yytext += y[0], this.match += y[0], this.matches = y, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = /* @__PURE__ */ this._input.slice(y[0].length), this.matched += y[0], f = /* @__PURE__ */ this.performAction.call(this, this.yy, this, d$1, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), f) return f;
				if (this._backtrack) {
					for (var g in E) this[g] = E[g];
					return !1;
				}
				return !1;
			}, "test_match"),
			next: /* @__PURE__ */ m$1(function() {
				if (this.done) return this.EOF;
				this._input || (this.done = !0);
				var y, d$1, f, k;
				this._more || (this.yytext = "", this.match = "");
				for (var E = /* @__PURE__ */ this._currentRules(), g = 0; g < E.length; g++) if (f = /* @__PURE__ */ this._input.match(this.rules[E[g]]), f && (!d$1 || f[0].length > d$1[0].length)) {
					if (d$1 = f, k = g, this.options.backtrack_lexer) {
						if (y = /* @__PURE__ */ this.test_match(f, E[g]), y !== !1) return y;
						if (this._backtrack) {
							d$1 = !1;
							continue;
						} else return !1;
					} else if (!this.options.flex) break;
				}
				return d$1 ? (y = /* @__PURE__ */ this.test_match(d$1, E[k]), y !== !1 ? y : !1) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
					text: "",
					token: null,
					line: this.yylineno
				});
			}, "next"),
			lex: /* @__PURE__ */ m$1(function() {
				return this.next() || this.lex();
			}, "lex"),
			begin: /* @__PURE__ */ m$1(function(d$1) {
				this.conditionStack.push(d$1);
			}, "begin"),
			popState: /* @__PURE__ */ m$1(function() {
				return this.conditionStack.length - 1 > 0 ? this.conditionStack.pop() : this.conditionStack[0];
			}, "popState"),
			_currentRules: /* @__PURE__ */ m$1(function() {
				return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
			}, "_currentRules"),
			topState: /* @__PURE__ */ m$1(function(d$1) {
				return d$1 = this.conditionStack.length - 1 - Math.abs(d$1 || 0), d$1 >= 0 ? this.conditionStack[d$1] : "INITIAL";
			}, "topState"),
			pushState: /* @__PURE__ */ m$1(function(d$1) {
				this.begin(d$1);
			}, "pushState"),
			stateStackSize: /* @__PURE__ */ m$1(function() {
				return this.conditionStack.length;
			}, "stateStackSize"),
			options: {},
			performAction: /* @__PURE__ */ m$1(function(d$1, f, k, E) {
				switch (k) {
					case 0: return d$1.getLogger().debug("Found block-beta"), 10;
					case 1: return d$1.getLogger().debug("Found id-block"), 29;
					case 2: return d$1.getLogger().debug("Found block"), 10;
					case 3:
						d$1.getLogger().debug(".", f.yytext);
						break;
					case 4:
						d$1.getLogger().debug("_", f.yytext);
						break;
					case 5: return 5;
					case 6: return f.yytext = -1, 28;
					case 7: return f.yytext = /* @__PURE__ */ f.yytext.replace(/columns\s+/, ""), d$1.getLogger().debug("COLUMNS (LEX)", f.yytext), 28;
					case 8:
						this.pushState("md_string");
						break;
					case 9: return "MD_STR";
					case 10:
						this.popState();
						break;
					case 11:
						this.pushState("string");
						break;
					case 12:
						d$1.getLogger().debug("LEX: POPPING STR:", f.yytext), this.popState();
						break;
					case 13: return d$1.getLogger().debug("LEX: STR end:", f.yytext), "STR";
					case 14: return f.yytext = /* @__PURE__ */ f.yytext.replace(/space\:/, ""), d$1.getLogger().debug("SPACE NUM (LEX)", f.yytext), 21;
					case 15: return f.yytext = "1", d$1.getLogger().debug("COLUMNS (LEX)", f.yytext), 21;
					case 16: return 42;
					case 17: return "LINKSTYLE";
					case 18: return "INTERPOLATE";
					case 19: return this.pushState("CLASSDEF"), 39;
					case 20: return this.popState(), this.pushState("CLASSDEFID"), "DEFAULT_CLASSDEF_ID";
					case 21: return this.popState(), this.pushState("CLASSDEFID"), 40;
					case 22: return this.popState(), 41;
					case 23: return this.pushState("CLASS"), 43;
					case 24: return this.popState(), this.pushState("CLASS_STYLE"), 44;
					case 25: return this.popState(), 45;
					case 26: return this.pushState("STYLE_STMNT"), 46;
					case 27: return this.popState(), this.pushState("STYLE_DEFINITION"), 47;
					case 28: return this.popState(), 48;
					case 29: return this.pushState("acc_title"), "acc_title";
					case 30: return this.popState(), "acc_title_value";
					case 31: return this.pushState("acc_descr"), "acc_descr";
					case 32: return this.popState(), "acc_descr_value";
					case 33:
						this.pushState("acc_descr_multiline");
						break;
					case 34:
						this.popState();
						break;
					case 35: return "acc_descr_multiline_value";
					case 36: return 30;
					case 37: return this.popState(), d$1.getLogger().debug("Lex: (("), "NODE_DEND";
					case 38: return this.popState(), d$1.getLogger().debug("Lex: (("), "NODE_DEND";
					case 39: return this.popState(), d$1.getLogger().debug("Lex: ))"), "NODE_DEND";
					case 40: return this.popState(), d$1.getLogger().debug("Lex: (("), "NODE_DEND";
					case 41: return this.popState(), d$1.getLogger().debug("Lex: (("), "NODE_DEND";
					case 42: return this.popState(), d$1.getLogger().debug("Lex: (-"), "NODE_DEND";
					case 43: return this.popState(), d$1.getLogger().debug("Lex: -)"), "NODE_DEND";
					case 44: return this.popState(), d$1.getLogger().debug("Lex: (("), "NODE_DEND";
					case 45: return this.popState(), d$1.getLogger().debug("Lex: ]]"), "NODE_DEND";
					case 46: return this.popState(), d$1.getLogger().debug("Lex: ("), "NODE_DEND";
					case 47: return this.popState(), d$1.getLogger().debug("Lex: ])"), "NODE_DEND";
					case 48: return this.popState(), d$1.getLogger().debug("Lex: /]"), "NODE_DEND";
					case 49: return this.popState(), d$1.getLogger().debug("Lex: /]"), "NODE_DEND";
					case 50: return this.popState(), d$1.getLogger().debug("Lex: )]"), "NODE_DEND";
					case 51: return this.popState(), d$1.getLogger().debug("Lex: )"), "NODE_DEND";
					case 52: return this.popState(), d$1.getLogger().debug("Lex: ]>"), "NODE_DEND";
					case 53: return this.popState(), d$1.getLogger().debug("Lex: ]"), "NODE_DEND";
					case 54: return d$1.getLogger().debug("Lexa: -)"), this.pushState("NODE"), 35;
					case 55: return d$1.getLogger().debug("Lexa: (-"), this.pushState("NODE"), 35;
					case 56: return d$1.getLogger().debug("Lexa: ))"), this.pushState("NODE"), 35;
					case 57: return d$1.getLogger().debug("Lexa: )"), this.pushState("NODE"), 35;
					case 58: return d$1.getLogger().debug("Lex: ((("), this.pushState("NODE"), 35;
					case 59: return d$1.getLogger().debug("Lexa: )"), this.pushState("NODE"), 35;
					case 60: return d$1.getLogger().debug("Lexa: )"), this.pushState("NODE"), 35;
					case 61: return d$1.getLogger().debug("Lexa: )"), this.pushState("NODE"), 35;
					case 62: return d$1.getLogger().debug("Lexc: >"), this.pushState("NODE"), 35;
					case 63: return d$1.getLogger().debug("Lexa: (["), this.pushState("NODE"), 35;
					case 64: return d$1.getLogger().debug("Lexa: )"), this.pushState("NODE"), 35;
					case 65: return this.pushState("NODE"), 35;
					case 66: return this.pushState("NODE"), 35;
					case 67: return this.pushState("NODE"), 35;
					case 68: return this.pushState("NODE"), 35;
					case 69: return this.pushState("NODE"), 35;
					case 70: return this.pushState("NODE"), 35;
					case 71: return this.pushState("NODE"), 35;
					case 72: return d$1.getLogger().debug("Lexa: ["), this.pushState("NODE"), 35;
					case 73: return this.pushState("BLOCK_ARROW"), d$1.getLogger().debug("LEX ARR START"), 37;
					case 74: return d$1.getLogger().debug("Lex: NODE_ID", f.yytext), 31;
					case 75: return d$1.getLogger().debug("Lex: EOF", f.yytext), 8;
					case 76:
						this.pushState("md_string");
						break;
					case 77:
						this.pushState("md_string");
						break;
					case 78: return "NODE_DESCR";
					case 79:
						this.popState();
						break;
					case 80:
						d$1.getLogger().debug("Lex: Starting string"), this.pushState("string");
						break;
					case 81:
						d$1.getLogger().debug("LEX ARR: Starting string"), this.pushState("string");
						break;
					case 82: return d$1.getLogger().debug("LEX: NODE_DESCR:", f.yytext), "NODE_DESCR";
					case 83:
						d$1.getLogger().debug("LEX POPPING"), this.popState();
						break;
					case 84:
						d$1.getLogger().debug("Lex: =>BAE"), this.pushState("ARROW_DIR");
						break;
					case 85: return f.yytext = /* @__PURE__ */ f.yytext.replace(/^,\s*/, ""), d$1.getLogger().debug("Lex (right): dir:", f.yytext), "DIR";
					case 86: return f.yytext = /* @__PURE__ */ f.yytext.replace(/^,\s*/, ""), d$1.getLogger().debug("Lex (left):", f.yytext), "DIR";
					case 87: return f.yytext = /* @__PURE__ */ f.yytext.replace(/^,\s*/, ""), d$1.getLogger().debug("Lex (x):", f.yytext), "DIR";
					case 88: return f.yytext = /* @__PURE__ */ f.yytext.replace(/^,\s*/, ""), d$1.getLogger().debug("Lex (y):", f.yytext), "DIR";
					case 89: return f.yytext = /* @__PURE__ */ f.yytext.replace(/^,\s*/, ""), d$1.getLogger().debug("Lex (up):", f.yytext), "DIR";
					case 90: return f.yytext = /* @__PURE__ */ f.yytext.replace(/^,\s*/, ""), d$1.getLogger().debug("Lex (down):", f.yytext), "DIR";
					case 91: return f.yytext = "]>", d$1.getLogger().debug("Lex (ARROW_DIR end):", f.yytext), this.popState(), this.popState(), "BLOCK_ARROW_END";
					case 92: return d$1.getLogger().debug("Lex: LINK", "#" + f.yytext + "#"), 15;
					case 93: return d$1.getLogger().debug("Lex: LINK", f.yytext), 15;
					case 94: return d$1.getLogger().debug("Lex: LINK", f.yytext), 15;
					case 95: return d$1.getLogger().debug("Lex: LINK", f.yytext), 15;
					case 96: return d$1.getLogger().debug("Lex: START_LINK", f.yytext), this.pushState("LLABEL"), 16;
					case 97: return d$1.getLogger().debug("Lex: START_LINK", f.yytext), this.pushState("LLABEL"), 16;
					case 98: return d$1.getLogger().debug("Lex: START_LINK", f.yytext), this.pushState("LLABEL"), 16;
					case 99:
						this.pushState("md_string");
						break;
					case 100: return d$1.getLogger().debug("Lex: Starting string"), this.pushState("string"), "LINK_LABEL";
					case 101: return this.popState(), d$1.getLogger().debug("Lex: LINK", "#" + f.yytext + "#"), 15;
					case 102: return this.popState(), d$1.getLogger().debug("Lex: LINK", f.yytext), 15;
					case 103: return this.popState(), d$1.getLogger().debug("Lex: LINK", f.yytext), 15;
					case 104: return d$1.getLogger().debug("Lex: COLON", f.yytext), f.yytext = /* @__PURE__ */ f.yytext.slice(1), 27;
				}
			}, "anonymous"),
			rules: [
				/^(?:block-beta\b)/,
				/^(?:block:)/,
				/^(?:block\b)/,
				/^(?:[\s]+)/,
				/^(?:[\n]+)/,
				/^(?:((\u000D\u000A)|(\u000A)))/,
				/^(?:columns\s+auto\b)/,
				/^(?:columns\s+[\d]+)/,
				/^(?:["][`])/,
				/^(?:[^`"]+)/,
				/^(?:[`]["])/,
				/^(?:["])/,
				/^(?:["])/,
				/^(?:[^"]*)/,
				/^(?:space[:]\d+)/,
				/^(?:space\b)/,
				/^(?:default\b)/,
				/^(?:linkStyle\b)/,
				/^(?:interpolate\b)/,
				/^(?:classDef\s+)/,
				/^(?:DEFAULT\s+)/,
				/^(?:\w+\s+)/,
				/^(?:[^\n]*)/,
				/^(?:class\s+)/,
				/^(?:(\w+)+((,\s*\w+)*))/,
				/^(?:[^\n]*)/,
				/^(?:style\s+)/,
				/^(?:(\w+)+((,\s*\w+)*))/,
				/^(?:[^\n]*)/,
				/^(?:accTitle\s*:\s*)/,
				/^(?:(?!\n||)*[^\n]*)/,
				/^(?:accDescr\s*:\s*)/,
				/^(?:(?!\n||)*[^\n]*)/,
				/^(?:accDescr\s*\{\s*)/,
				/^(?:[\}])/,
				/^(?:[^\}]*)/,
				/^(?:end\b\s*)/,
				/^(?:\(\(\()/,
				/^(?:\)\)\))/,
				/^(?:[\)]\))/,
				/^(?:\}\})/,
				/^(?:\})/,
				/^(?:\(-)/,
				/^(?:-\))/,
				/^(?:\(\()/,
				/^(?:\]\])/,
				/^(?:\()/,
				/^(?:\]\))/,
				/^(?:\\\])/,
				/^(?:\/\])/,
				/^(?:\)\])/,
				/^(?:[\)])/,
				/^(?:\]>)/,
				/^(?:[\]])/,
				/^(?:-\))/,
				/^(?:\(-)/,
				/^(?:\)\))/,
				/^(?:\))/,
				/^(?:\(\(\()/,
				/^(?:\(\()/,
				/^(?:\{\{)/,
				/^(?:\{)/,
				/^(?:>)/,
				/^(?:\(\[)/,
				/^(?:\()/,
				/^(?:\[\[)/,
				/^(?:\[\|)/,
				/^(?:\[\()/,
				/^(?:\)\)\))/,
				/^(?:\[\\)/,
				/^(?:\[\/)/,
				/^(?:\[\\)/,
				/^(?:\[)/,
				/^(?:<\[)/,
				/^(?:[^\(\[\n\-\)\{\}\s\<\>:]+)/,
				/^(?:$)/,
				/^(?:["][`])/,
				/^(?:["][`])/,
				/^(?:[^`"]+)/,
				/^(?:[`]["])/,
				/^(?:["])/,
				/^(?:["])/,
				/^(?:[^"]+)/,
				/^(?:["])/,
				/^(?:\]>\s*\()/,
				/^(?:,?\s*right\s*)/,
				/^(?:,?\s*left\s*)/,
				/^(?:,?\s*x\s*)/,
				/^(?:,?\s*y\s*)/,
				/^(?:,?\s*up\s*)/,
				/^(?:,?\s*down\s*)/,
				/^(?:\)\s*)/,
				/^(?:\s*[xo<]?--+[-xo>]\s*)/,
				/^(?:\s*[xo<]?==+[=xo>]\s*)/,
				/^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/,
				/^(?:\s*~~[\~]+\s*)/,
				/^(?:\s*[xo<]?--\s*)/,
				/^(?:\s*[xo<]?==\s*)/,
				/^(?:\s*[xo<]?-\.\s*)/,
				/^(?:["][`])/,
				/^(?:["])/,
				/^(?:\s*[xo<]?--+[-xo>]\s*)/,
				/^(?:\s*[xo<]?==+[=xo>]\s*)/,
				/^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/,
				/^(?::\d+)/
			],
			conditions: {
				STYLE_DEFINITION: {
					rules: [28],
					inclusive: !1
				},
				STYLE_STMNT: {
					rules: [27],
					inclusive: !1
				},
				CLASSDEFID: {
					rules: [22],
					inclusive: !1
				},
				CLASSDEF: {
					rules: [20, 21],
					inclusive: !1
				},
				CLASS_STYLE: {
					rules: [25],
					inclusive: !1
				},
				CLASS: {
					rules: [24],
					inclusive: !1
				},
				LLABEL: {
					rules: [
						99,
						100,
						101,
						102,
						103
					],
					inclusive: !1
				},
				ARROW_DIR: {
					rules: [
						85,
						86,
						87,
						88,
						89,
						90,
						91
					],
					inclusive: !1
				},
				BLOCK_ARROW: {
					rules: [
						76,
						81,
						84
					],
					inclusive: !1
				},
				NODE: {
					rules: [
						37,
						38,
						39,
						40,
						41,
						42,
						43,
						44,
						45,
						46,
						47,
						48,
						49,
						50,
						51,
						52,
						53,
						77,
						80
					],
					inclusive: !1
				},
				md_string: {
					rules: [
						9,
						10,
						78,
						79
					],
					inclusive: !1
				},
				space: {
					rules: [],
					inclusive: !1
				},
				string: {
					rules: [
						12,
						13,
						82,
						83
					],
					inclusive: !1
				},
				acc_descr_multiline: {
					rules: [34, 35],
					inclusive: !1
				},
				acc_descr: {
					rules: [32],
					inclusive: !1
				},
				acc_title: {
					rules: [30],
					inclusive: !1
				},
				INITIAL: {
					rules: [
						0,
						1,
						2,
						3,
						4,
						5,
						6,
						7,
						8,
						11,
						14,
						15,
						16,
						17,
						18,
						19,
						23,
						26,
						29,
						31,
						33,
						36,
						54,
						55,
						56,
						57,
						58,
						59,
						60,
						61,
						62,
						63,
						64,
						65,
						66,
						67,
						68,
						69,
						70,
						71,
						72,
						73,
						74,
						75,
						92,
						93,
						94,
						95,
						96,
						97,
						98,
						104
					],
					inclusive: !0
				}
			}
		};
	}();
	function D$1() {
		this.yy = {};
	}
	return m$1(D$1, "Parser"), D$1.prototype = S, S.Parser = D$1, new D$1();
}();
yt.parser = yt;
var Kt = yt;
var X = /* @__PURE__ */ new Map(), wt = [], mt = /* @__PURE__ */ new Map(), Xt = "color", Ut$1 = "fill", Ne = "bgFill", Gt = ",", Ie = /* @__PURE__ */ mr(), ot$1 = /* @__PURE__ */ new Map(), Oe = /* @__PURE__ */ m$1((e) => hn.sanitizeText(e, Ie), "sanitizeText"), Re = /* @__PURE__ */ m$1(function(e, t$1 = "") {
	let a = /* @__PURE__ */ ot$1.get(e);
	a || (a = {
		id: e,
		styles: [],
		textStyles: []
	}, ot$1.set(e, a)), t$1?.split(Gt).forEach((i) => {
		let l$1 = /* @__PURE__ */ i.replace(/([^;]*);/, "$1").trim();
		if (RegExp(Xt).exec(i)) {
			let r = /* @__PURE__ */ l$1.replace(Ut$1, Ne).replace(Xt, Ut$1);
			a.textStyles.push(r);
		}
		a.styles.push(l$1);
	});
}, "addStyleClass"), ze = /* @__PURE__ */ m$1(function(e, t$1 = "") {
	let a = /* @__PURE__ */ X.get(e);
	t$1 != null && (a.styles = /* @__PURE__ */ t$1.split(Gt));
}, "addStyle2Node"), Ae = /* @__PURE__ */ m$1(function(e, t$1) {
	e.split(",").forEach(function(a) {
		let i = /* @__PURE__ */ X.get(a);
		if (i === void 0) {
			let l$1 = /* @__PURE__ */ a.trim();
			i = {
				id: l$1,
				type: "na",
				children: []
			}, X.set(l$1, i);
		}
		i.classes || (i.classes = []), i.classes.push(t$1);
	});
}, "setCssClass"), Zt = m$1((e, t$1) => {
	let a = /* @__PURE__ */ e.flat(), i = [], s$1 = a.find((r) => r?.type === "column-setting")?.columns ?? -1;
	for (let r of a) {
		if (typeof s$1 == "number" && s$1 > 0 && r.type !== "column-setting" && typeof r.widthInColumns == "number" && r.widthInColumns > s$1 && pt.warn(`Block ${r.id} width ${r.widthInColumns} exceeds configured column width ${s$1}`), r.label && (r.label = /* @__PURE__ */ Oe(r.label)), r.type === "classDef") {
			Re(r.id, r.css);
			continue;
		}
		if (r.type === "applyClass") {
			Ae(r.id, r?.styleClass ?? "");
			continue;
		}
		if (r.type === "applyStyles") {
			r?.stylesStr && ze(r.id, r?.stylesStr);
			continue;
		}
		if (r.type === "column-setting") t$1.columns = r.columns ?? -1;
		else if (r.type === "edge") {
			let n$1 = (mt.get(r.id) ?? 0) + 1;
			mt.set(r.id, n$1), r.id = n$1 + "-" + r.id, wt.push(r);
		} else {
			r.label || (r.type === "composite" ? r.label = "" : r.label = r.id);
			let n$1 = /* @__PURE__ */ X.get(r.id);
			if (n$1 === void 0 ? X.set(r.id, r) : (r.type !== "na" && (n$1.type = r.type), r.label !== r.id && (n$1.label = r.label)), r.children && Zt(r.children, r), r.type === "space") {
				let o$1 = r.width ?? 1;
				for (let u = 0; u < o$1; u++) {
					let h$1 = /* @__PURE__ */ _f(r);
					h$1.id = h$1.id + "-" + u, X.set(h$1.id, h$1), i.push(h$1);
				}
			} else n$1 === void 0 && i.push(r);
		}
	}
	t$1.children = i;
}, "populateBlockDatabase"), kt = [], at = {
	id: "root",
	type: "composite",
	children: [],
	columns: -1
}, Me = /* @__PURE__ */ m$1(() => {
	pt.debug("Clear called"), No(), at = {
		id: "root",
		type: "composite",
		children: [],
		columns: -1
	}, X = new Map([["root", at]]), kt = [], ot$1 = /* @__PURE__ */ new Map(), wt = [], mt = /* @__PURE__ */ new Map();
}, "clear");
function Fe(e) {
	switch (pt.debug("typeStr2Type", e), e) {
		case "[]": return "square";
		case "()": return pt.debug("we have a round"), "round";
		case "(())": return "circle";
		case ">]": return "rect_left_inv_arrow";
		case "{}": return "diamond";
		case "{{}}": return "hexagon";
		case "([])": return "stadium";
		case "[[]]": return "subroutine";
		case "[()]": return "cylinder";
		case "((()))": return "doublecircle";
		case "[//]": return "lean_right";
		case "[\\\\]": return "lean_left";
		case "[/\\]": return "trapezoid";
		case "[\\/]": return "inv_trapezoid";
		case "<[]>": return "block_arrow";
		default: return "na";
	}
}
m$1(Fe, "typeStr2Type");
function We(e) {
	switch (pt.debug("typeStr2Type", e), e) {
		case "==": return "thick";
		default: return "normal";
	}
}
m$1(We, "edgeTypeStr2Type");
function Pe(e) {
	switch (e.replace(/^[\s-]+|[\s-]+$/g, "")) {
		case "x": return "arrow_cross";
		case "o": return "arrow_circle";
		case ">": return "arrow_point";
		default: return "";
	}
}
m$1(Pe, "edgeStrToEdgeData");
var Vt = 0, qt = {
	getConfig: /* @__PURE__ */ m$1(() => Ot().block, "getConfig"),
	typeStr2Type: Fe,
	edgeTypeStr2Type: We,
	edgeStrToEdgeData: Pe,
	getLogger: /* @__PURE__ */ m$1(() => pt, "getLogger"),
	getBlocksFlat: /* @__PURE__ */ m$1(() => [.../* @__PURE__ */ X.values()], "getBlocksFlat"),
	getBlocks: /* @__PURE__ */ m$1(() => kt || [], "getBlocks"),
	getEdges: /* @__PURE__ */ m$1(() => wt, "getEdges"),
	setHierarchy: /* @__PURE__ */ m$1((e) => {
		at.children = e, Zt(e, at), kt = at.children;
	}, "setHierarchy"),
	getBlock: /* @__PURE__ */ m$1((e) => X.get(e), "getBlock"),
	setBlock: /* @__PURE__ */ m$1((e) => {
		X.set(e.id, e);
	}, "setBlock"),
	getColumns: /* @__PURE__ */ m$1((e) => {
		let t$1 = /* @__PURE__ */ X.get(e);
		return t$1 ? t$1.columns ? t$1.columns : t$1.children ? t$1.children.length : -1 : -1;
	}, "getColumns"),
	getClasses: /* @__PURE__ */ m$1(function() {
		return ot$1;
	}, "getClasses"),
	clear: Me,
	generateId: /* @__PURE__ */ m$1(() => (Vt++, "id-" + Math.random().toString(36).substr(2, 12) + "-" + Vt), "generateId")
};
var ct = /* @__PURE__ */ m$1((e, t$1) => {
	let a = Pr;
	return Z(/* @__PURE__ */ a(e, "r"), /* @__PURE__ */ a(e, "g"), /* @__PURE__ */ a(e, "b"), t$1);
}, "fade"), Jt = /* @__PURE__ */ m$1((e) => `.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor || e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span,p {
    color: ${e.titleColor};
  }



  .label text,span,p {
    fill: ${e.nodeTextColor || e.textColor};
    color: ${e.nodeTextColor || e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${ct(e.edgeLabelBackground, .5)};
    // background-color:
  }

  .node .cluster {
    // fill: ${ct(e.mainBkg, .5)};
    fill: ${ct(e.clusterBkg, .5)};
    stroke: ${ct(e.clusterBorder, .2)};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span,p {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
  ${o()}
`, "getStyles");
var $e = /* @__PURE__ */ m$1((e, t$1, a, i) => {
	t$1.forEach((l$1) => {
		cr[l$1](e, a, i);
	});
}, "insertMarkers"), cr = {
	extension: /* @__PURE__ */ m$1((e, t$1, a) => {
		pt.trace("Making markers for ", a), e.append("defs").append("marker").attr("id", a + "_" + t$1 + "-extensionStart").attr("class", "marker extension " + t$1).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 1,7 L18,13 V 1 Z"), e.append("defs").append("marker").attr("id", a + "_" + t$1 + "-extensionEnd").attr("class", "marker extension " + t$1).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 1,1 V 13 L18,7 Z");
	}, "extension"),
	composition: /* @__PURE__ */ m$1((e, t$1, a) => {
		e.append("defs").append("marker").attr("id", a + "_" + t$1 + "-compositionStart").attr("class", "marker composition " + t$1).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", a + "_" + t$1 + "-compositionEnd").attr("class", "marker composition " + t$1).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
	}, "composition"),
	aggregation: /* @__PURE__ */ m$1((e, t$1, a) => {
		e.append("defs").append("marker").attr("id", a + "_" + t$1 + "-aggregationStart").attr("class", "marker aggregation " + t$1).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", a + "_" + t$1 + "-aggregationEnd").attr("class", "marker aggregation " + t$1).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
	}, "aggregation"),
	dependency: /* @__PURE__ */ m$1((e, t$1, a) => {
		e.append("defs").append("marker").attr("id", a + "_" + t$1 + "-dependencyStart").attr("class", "marker dependency " + t$1).attr("refX", 6).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", a + "_" + t$1 + "-dependencyEnd").attr("class", "marker dependency " + t$1).attr("refX", 13).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
	}, "dependency"),
	lollipop: /* @__PURE__ */ m$1((e, t$1, a) => {
		e.append("defs").append("marker").attr("id", a + "_" + t$1 + "-lollipopStart").attr("class", "marker lollipop " + t$1).attr("refX", 13).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6), e.append("defs").append("marker").attr("id", a + "_" + t$1 + "-lollipopEnd").attr("class", "marker lollipop " + t$1).attr("refX", 1).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6);
	}, "lollipop"),
	point: /* @__PURE__ */ m$1((e, t$1, a) => {
		e.append("marker").attr("id", a + "_" + t$1 + "-pointEnd").attr("class", "marker " + t$1).attr("viewBox", "0 0 10 10").attr("refX", 6).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", a + "_" + t$1 + "-pointStart").attr("class", "marker " + t$1).attr("viewBox", "0 0 10 10").attr("refX", 4.5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 0 5 L 10 10 L 10 0 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
	}, "point"),
	circle: /* @__PURE__ */ m$1((e, t$1, a) => {
		e.append("marker").attr("id", a + "_" + t$1 + "-circleEnd").attr("class", "marker " + t$1).attr("viewBox", "0 0 10 10").attr("refX", 11).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", a + "_" + t$1 + "-circleStart").attr("class", "marker " + t$1).attr("viewBox", "0 0 10 10").attr("refX", -1).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
	}, "circle"),
	cross: /* @__PURE__ */ m$1((e, t$1, a) => {
		e.append("marker").attr("id", a + "_" + t$1 + "-crossEnd").attr("class", "marker cross " + t$1).attr("viewBox", "0 0 11 11").attr("refX", 12).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", a + "_" + t$1 + "-crossStart").attr("class", "marker cross " + t$1).attr("viewBox", "0 0 11 11").attr("refX", -1).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0");
	}, "cross"),
	barb: /* @__PURE__ */ m$1((e, t$1, a) => {
		e.append("defs").append("marker").attr("id", a + "_" + t$1 + "-barbEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "strokeWidth").attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
	}, "barb")
}, Qt = $e;
var O = mr()?.block?.padding ?? 8;
function hr(e, t$1) {
	if (e === 0 || !Number.isInteger(e)) throw new Error("Columns must be an integer !== 0.");
	if (t$1 < 0 || !Number.isInteger(t$1)) throw new Error("Position must be a non-negative integer." + t$1);
	if (e < 0) return {
		px: t$1,
		py: 0
	};
	if (e === 1) return {
		px: 0,
		py: t$1
	};
	return {
		px: t$1 % e,
		py: /* @__PURE__ */ Math.floor(t$1 / e)
	};
}
m$1(hr, "calculateBlockPosition");
var gr = /* @__PURE__ */ m$1((e) => {
	let t$1 = 0, a = 0;
	for (let i of e.children) {
		let { width: l$1, height: s$1, x: r, y: n$1 } = i.size ?? {
			width: 0,
			height: 0,
			x: 0,
			y: 0
		};
		pt.debug("getMaxChildSize abc95 child:", i.id, "width:", l$1, "height:", s$1, "x:", r, "y:", n$1, i.type), i.type !== "space" && (l$1 > t$1 && (t$1 = l$1 / (e.widthInColumns ?? 1)), s$1 > a && (a = s$1));
	}
	return {
		width: t$1,
		height: a
	};
}, "getMaxChildSize");
function Lt(e, t$1, a = 0, i = 0) {
	pt.debug("setBlockSizes abc95 (start)", e.id, e?.size?.x, "block width =", e?.size, "siblingWidth", a), e?.size?.width || (e.size = {
		width: a,
		height: i,
		x: 0,
		y: 0
	});
	let l$1 = 0, s$1 = 0;
	if (e.children?.length > 0) {
		for (let b$1 of e.children) Lt(b$1, t$1);
		let r = /* @__PURE__ */ gr(e);
		l$1 = r.width, s$1 = r.height, pt.debug("setBlockSizes abc95 maxWidth of", e.id, ":s children is ", l$1, s$1);
		for (let b$1 of e.children) b$1.size && (pt.debug(`abc95 Setting size of children of ${e.id} id=${b$1.id} ${l$1} ${s$1} ${JSON.stringify(b$1.size)}`), b$1.size.width = l$1 * (b$1.widthInColumns ?? 1) + O * ((b$1.widthInColumns ?? 1) - 1), b$1.size.height = s$1, b$1.size.x = 0, b$1.size.y = 0, pt.debug(`abc95 updating size of ${e.id} children child:${b$1.id} maxWidth:${l$1} maxHeight:${s$1}`));
		for (let b$1 of e.children) Lt(b$1, t$1, l$1, s$1);
		let n$1 = e.columns ?? -1, o$1 = 0;
		for (let b$1 of e.children) o$1 += b$1.widthInColumns ?? 1;
		let u = e.children.length;
		n$1 > 0 && n$1 < o$1 && (u = n$1);
		let h$1 = /* @__PURE__ */ Math.ceil(o$1 / u), x = u * (l$1 + O) + O, m$2 = h$1 * (s$1 + O) + O;
		if (x < a) {
			pt.debug(`Detected to small sibling: abc95 ${e.id} siblingWidth ${a} siblingHeight ${i} width ${x}`), x = a, m$2 = i;
			let b$1 = (a - u * O - O) / u, L$1 = (i - h$1 * O - O) / h$1;
			pt.debug("Size indata abc88", e.id, "childWidth", b$1, "maxWidth", l$1), pt.debug("Size indata abc88", e.id, "childHeight", L$1, "maxHeight", s$1), pt.debug("Size indata abc88 xSize", u, "padding", O);
			for (let _ of e.children) _.size && (_.size.width = b$1, _.size.height = L$1, _.size.x = 0, _.size.y = 0);
		}
		if (pt.debug(`abc95 (finale calc) ${e.id} xSize ${u} ySize ${h$1} columns ${n$1}${e.children.length} width=${Math.max(x, e.size?.width || 0)}`), x < (e?.size?.width || 0)) {
			x = e?.size?.width || 0;
			let b$1 = n$1 > 0 ? Math.min(e.children.length, n$1) : e.children.length;
			if (b$1 > 0) {
				let L$1 = (x - b$1 * O - O) / b$1;
				pt.debug("abc95 (growing to fit) width", e.id, x, e.size?.width, L$1);
				for (let _ of e.children) _.size && (_.size.width = L$1);
			}
		}
		e.size = {
			width: x,
			height: m$2,
			x: 0,
			y: 0
		};
	}
	pt.debug("setBlockSizes abc94 (done)", e.id, e?.size?.x, e?.size?.width, e?.size?.y, e?.size?.height);
}
m$1(Lt, "setBlockSizes");
function $t(e, t$1) {
	pt.debug(`abc85 layout blocks (=>layoutBlocks) ${e.id} x: ${e?.size?.x} y: ${e?.size?.y} width: ${e?.size?.width}`);
	let a = e.columns ?? -1;
	if (pt.debug("layoutBlocks columns abc95", e.id, "=>", a, e), e.children && e.children.length > 0) {
		let i = e?.children[0]?.size?.width ?? 0, l$1 = e.children.length * i + (e.children.length - 1) * O;
		pt.debug("widthOfChildren 88", l$1, "posX");
		let s$1 = 0;
		pt.debug("abc91 block?.size?.x", e.id, e?.size?.x);
		let r = e?.size?.x ? e?.size?.x + (-e?.size?.width / 2 || 0) : -O, n$1 = 0;
		for (let o$1 of e.children) {
			let u = e;
			if (!o$1.size) continue;
			let { width: h$1, height: x } = o$1.size, { px: m$2, py: b$1 } = hr(a, s$1);
			if (b$1 != n$1 && (n$1 = b$1, r = e?.size?.x ? e?.size?.x + (-e?.size?.width / 2 || 0) : -O, pt.debug("New row in layout for block", e.id, " and child ", o$1.id, n$1)), pt.debug(`abc89 layout blocks (child) id: ${o$1.id} Pos: ${s$1} (px, py) ${m$2},${b$1} (${u?.size?.x},${u?.size?.y}) parent: ${u.id} width: ${h$1}${O}`), u.size) {
				let _ = h$1 / 2;
				o$1.size.x = r + O + _, pt.debug(`abc91 layout blocks (calc) px, pyid:${o$1.id} startingPos=X${r} new startingPosX${o$1.size.x} ${_} padding=${O} width=${h$1} halfWidth=${_} => x:${o$1.size.x} y:${o$1.size.y} ${o$1.widthInColumns} (width * (child?.w || 1)) / 2 ${h$1 * (o$1?.widthInColumns ?? 1) / 2}`), r = o$1.size.x + _, o$1.size.y = u.size.y - u.size.height / 2 + b$1 * (x + O) + x / 2 + O, pt.debug(`abc88 layout blocks (calc) px, pyid:${o$1.id}startingPosX${r}${O}${_}=>x:${o$1.size.x}y:${o$1.size.y}${o$1.widthInColumns}(width * (child?.w || 1)) / 2${h$1 * (o$1?.widthInColumns ?? 1) / 2}`);
			}
			o$1.children && $t(o$1, t$1);
			let L$1 = o$1?.widthInColumns ?? 1;
			a > 0 && (L$1 = /* @__PURE__ */ Math.min(L$1, a - s$1 % a)), s$1 += L$1, pt.debug("abc88 columnsPos", o$1, s$1);
		}
	}
	pt.debug(`layout blocks (<==layoutBlocks) ${e.id} x: ${e?.size?.x} y: ${e?.size?.y} width: ${e?.size?.width}`);
}
m$1($t, "layoutBlocks");
function te(e, { minX: t$1, minY: a, maxX: i, maxY: l$1 } = {
	minX: 0,
	minY: 0,
	maxX: 0,
	maxY: 0
}) {
	if (e.size && e.id !== "root") {
		let { x: s$1, y: r, width: n$1, height: o$1 } = e.size;
		s$1 - n$1 / 2 < t$1 && (t$1 = s$1 - n$1 / 2), r - o$1 / 2 < a && (a = r - o$1 / 2), s$1 + n$1 / 2 > i && (i = s$1 + n$1 / 2), r + o$1 / 2 > l$1 && (l$1 = r + o$1 / 2);
	}
	if (e.children) for (let s$1 of e.children) ({minX: t$1, minY: a, maxX: i, maxY: l$1} = /* @__PURE__ */ te(s$1, {
		minX: t$1,
		minY: a,
		maxX: i,
		maxY: l$1
	}));
	return {
		minX: t$1,
		minY: a,
		maxX: i,
		maxY: l$1
	};
}
m$1(te, "findBounds");
function ee(e) {
	let t$1 = /* @__PURE__ */ e.getBlock("root");
	if (!t$1) return;
	Lt(t$1, e, 0, 0), $t(t$1, e), pt.debug("getBlocks", /* @__PURE__ */ JSON.stringify(t$1, null, 2));
	let { minX: a, minY: i, maxX: l$1, maxY: s$1 } = te(t$1), r = s$1 - i;
	return {
		x: a,
		y: i,
		width: l$1 - a,
		height: r
	};
}
m$1(ee, "layout");
function re(e, t$1) {
	t$1 && e.attr("style", t$1);
}
m$1(re, "applyStyle");
function dr(e, t$1) {
	let a = /* @__PURE__ */ ia(/* @__PURE__ */ document.createElementNS("http://www.w3.org/2000/svg", "foreignObject")), i = /* @__PURE__ */ a.append("xhtml:div"), l$1 = e.label, s$1 = e.isNode ? "nodeLabel" : "edgeLabel", r = /* @__PURE__ */ i.append("span");
	return r.html(/* @__PURE__ */ ot(l$1, t$1)), re(r, e.labelStyle), r.attr("class", s$1), re(i, e.labelStyle), i.style("display", "inline-block"), i.style("white-space", "nowrap"), i.attr("xmlns", "http://www.w3.org/1999/xhtml"), a.node();
}
m$1(dr, "addHtmlLabel");
var W = /* @__PURE__ */ m$1(async (e, t$1, a, i) => {
	let l$1 = e || "";
	typeof l$1 == "object" && (l$1 = l$1[0]);
	let s$1 = /* @__PURE__ */ mr();
	if (Mo(s$1.flowchart.htmlLabels)) {
		l$1 = /* @__PURE__ */ l$1.replace(/\\n|\n/g, "<br />"), pt.debug("vertexText" + l$1);
		return dr({
			isNode: i,
			label: await tn(/* @__PURE__ */ Yt(l$1)),
			labelStyle: /* @__PURE__ */ t$1.replace("fill:", "color:")
		}, s$1);
	} else {
		let r = /* @__PURE__ */ document.createElementNS("http://www.w3.org/2000/svg", "text");
		r.setAttribute("style", /* @__PURE__ */ t$1.replace("color:", "fill:"));
		let n$1 = [];
		typeof l$1 == "string" ? n$1 = /* @__PURE__ */ l$1.split(/\\n|\n|<br\s*\/?>/gi) : Array.isArray(l$1) ? n$1 = l$1 : n$1 = [];
		for (let o$1 of n$1) {
			let u = /* @__PURE__ */ document.createElementNS("http://www.w3.org/2000/svg", "tspan");
			u.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), u.setAttribute("dy", "1em"), u.setAttribute("x", "0"), a ? u.setAttribute("class", "title-row") : u.setAttribute("class", "row"), u.textContent = /* @__PURE__ */ o$1.trim(), r.appendChild(u);
		}
		return r;
	}
}, "createLabel");
var se = /* @__PURE__ */ m$1((e, t$1, a, i, l$1) => {
	t$1.arrowTypeStart && ae(e, "start", t$1.arrowTypeStart, a, i, l$1), t$1.arrowTypeEnd && ae(e, "end", t$1.arrowTypeEnd, a, i, l$1);
}, "addEdgeMarkers"), pr = {
	arrow_cross: "cross",
	arrow_point: "point",
	arrow_barb: "barb",
	arrow_circle: "circle",
	aggregation: "aggregation",
	extension: "extension",
	composition: "composition",
	dependency: "dependency",
	lollipop: "lollipop"
}, ae = /* @__PURE__ */ m$1((e, t$1, a, i, l$1, s$1) => {
	let r = pr[a];
	if (!r) {
		pt.warn(`Unknown arrow type: ${a}`);
		return;
	}
	let n$1 = t$1 === "start" ? "Start" : "End";
	e.attr(`marker-${t$1}`, `url(${i}#${l$1}_${s$1}-${r}${n$1})`);
}, "addEdgeMarker");
var St = {}, M = {};
var ne = /* @__PURE__ */ m$1(async (e, t$1) => {
	let a = /* @__PURE__ */ mr(), i = /* @__PURE__ */ Mo(a.flowchart.htmlLabels), l$1 = t$1.labelType === "markdown" ? Rr(e, t$1.label, {
		style: t$1.labelStyle,
		useHtmlLabels: i,
		addSvgBackground: !0
	}, a) : await W(t$1.label, t$1.labelStyle), s$1 = /* @__PURE__ */ e.insert("g").attr("class", "edgeLabel"), r = /* @__PURE__ */ s$1.insert("g").attr("class", "label");
	r.node().appendChild(l$1);
	let n$1 = /* @__PURE__ */ l$1.getBBox();
	if (i) {
		let u = l$1.children[0], h$1 = /* @__PURE__ */ ia(l$1);
		n$1 = /* @__PURE__ */ u.getBoundingClientRect(), h$1.attr("width", n$1.width), h$1.attr("height", n$1.height);
	}
	r.attr("transform", "translate(" + -n$1.width / 2 + ", " + -n$1.height / 2 + ")"), St[t$1.id] = s$1, t$1.width = n$1.width, t$1.height = n$1.height;
	let o$1;
	if (t$1.startLabelLeft) {
		let u = await W(t$1.startLabelLeft, t$1.labelStyle), h$1 = /* @__PURE__ */ e.insert("g").attr("class", "edgeTerminals"), x = /* @__PURE__ */ h$1.insert("g").attr("class", "inner");
		o$1 = /* @__PURE__ */ x.node().appendChild(u);
		let m$2 = /* @__PURE__ */ u.getBBox();
		x.attr("transform", "translate(" + -m$2.width / 2 + ", " + -m$2.height / 2 + ")"), M[t$1.id] || (M[t$1.id] = {}), M[t$1.id].startLeft = h$1, ht(o$1, t$1.startLabelLeft);
	}
	if (t$1.startLabelRight) {
		let u = await W(t$1.startLabelRight, t$1.labelStyle), h$1 = /* @__PURE__ */ e.insert("g").attr("class", "edgeTerminals"), x = /* @__PURE__ */ h$1.insert("g").attr("class", "inner");
		o$1 = /* @__PURE__ */ h$1.node().appendChild(u), x.node().appendChild(u);
		let m$2 = /* @__PURE__ */ u.getBBox();
		x.attr("transform", "translate(" + -m$2.width / 2 + ", " + -m$2.height / 2 + ")"), M[t$1.id] || (M[t$1.id] = {}), M[t$1.id].startRight = h$1, ht(o$1, t$1.startLabelRight);
	}
	if (t$1.endLabelLeft) {
		let u = await W(t$1.endLabelLeft, t$1.labelStyle), h$1 = /* @__PURE__ */ e.insert("g").attr("class", "edgeTerminals"), x = /* @__PURE__ */ h$1.insert("g").attr("class", "inner");
		o$1 = /* @__PURE__ */ x.node().appendChild(u);
		let m$2 = /* @__PURE__ */ u.getBBox();
		x.attr("transform", "translate(" + -m$2.width / 2 + ", " + -m$2.height / 2 + ")"), h$1.node().appendChild(u), M[t$1.id] || (M[t$1.id] = {}), M[t$1.id].endLeft = h$1, ht(o$1, t$1.endLabelLeft);
	}
	if (t$1.endLabelRight) {
		let u = await W(t$1.endLabelRight, t$1.labelStyle), h$1 = /* @__PURE__ */ e.insert("g").attr("class", "edgeTerminals"), x = /* @__PURE__ */ h$1.insert("g").attr("class", "inner");
		o$1 = /* @__PURE__ */ x.node().appendChild(u);
		let m$2 = /* @__PURE__ */ u.getBBox();
		x.attr("transform", "translate(" + -m$2.width / 2 + ", " + -m$2.height / 2 + ")"), h$1.node().appendChild(u), M[t$1.id] || (M[t$1.id] = {}), M[t$1.id].endRight = h$1, ht(o$1, t$1.endLabelRight);
	}
	return l$1;
}, "insertEdgeLabel");
function ht(e, t$1) {
	mr().flowchart.htmlLabels && e && (e.style.width = t$1.length * 9 + "px", e.style.height = "12px");
}
m$1(ht, "setTerminalWidth");
var le = /* @__PURE__ */ m$1((e, t$1) => {
	pt.debug("Moving label abc88 ", e.id, e.label, St[e.id], t$1);
	let a = t$1.updatedPath ? t$1.updatedPath : t$1.originalPath, { subGraphTitleTotalMargin: l$1 } = n(/* @__PURE__ */ mr());
	if (e.label) {
		let s$1 = St[e.id], r = e.x, n$1 = e.y;
		if (a) {
			let o$1 = /* @__PURE__ */ Ut.calcLabelPosition(a);
			pt.debug("Moving label " + e.label + " from (", r, ",", n$1, ") to (", o$1.x, ",", o$1.y, ") abc88"), t$1.updatedPath && (r = o$1.x, n$1 = o$1.y);
		}
		s$1.attr("transform", `translate(${r}, ${n$1 + l$1 / 2})`);
	}
	if (e.startLabelLeft) {
		let s$1 = M[e.id].startLeft, r = e.x, n$1 = e.y;
		if (a) {
			let o$1 = /* @__PURE__ */ Ut.calcTerminalLabelPosition(e.arrowTypeStart ? 10 : 0, "start_left", a);
			r = o$1.x, n$1 = o$1.y;
		}
		s$1.attr("transform", `translate(${r}, ${n$1})`);
	}
	if (e.startLabelRight) {
		let s$1 = M[e.id].startRight, r = e.x, n$1 = e.y;
		if (a) {
			let o$1 = /* @__PURE__ */ Ut.calcTerminalLabelPosition(e.arrowTypeStart ? 10 : 0, "start_right", a);
			r = o$1.x, n$1 = o$1.y;
		}
		s$1.attr("transform", `translate(${r}, ${n$1})`);
	}
	if (e.endLabelLeft) {
		let s$1 = M[e.id].endLeft, r = e.x, n$1 = e.y;
		if (a) {
			let o$1 = /* @__PURE__ */ Ut.calcTerminalLabelPosition(e.arrowTypeEnd ? 10 : 0, "end_left", a);
			r = o$1.x, n$1 = o$1.y;
		}
		s$1.attr("transform", `translate(${r}, ${n$1})`);
	}
	if (e.endLabelRight) {
		let s$1 = M[e.id].endRight, r = e.x, n$1 = e.y;
		if (a) {
			let o$1 = /* @__PURE__ */ Ut.calcTerminalLabelPosition(e.arrowTypeEnd ? 10 : 0, "end_right", a);
			r = o$1.x, n$1 = o$1.y;
		}
		s$1.attr("transform", `translate(${r}, ${n$1})`);
	}
}, "positionEdgeLabel"), fr = /* @__PURE__ */ m$1((e, t$1) => {
	let a = e.x, i = e.y, l$1 = /* @__PURE__ */ Math.abs(t$1.x - a), s$1 = /* @__PURE__ */ Math.abs(t$1.y - i), r = e.width / 2, n$1 = e.height / 2;
	return l$1 >= r || s$1 >= n$1;
}, "outsideNode"), xr = /* @__PURE__ */ m$1((e, t$1, a) => {
	pt.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(t$1)}
  insidePoint : ${JSON.stringify(a)}
  node        : x:${e.x} y:${e.y} w:${e.width} h:${e.height}`);
	let i = e.x, l$1 = e.y, s$1 = /* @__PURE__ */ Math.abs(i - a.x), r = e.width / 2, n$1 = a.x < t$1.x ? r - s$1 : r + s$1, o$1 = e.height / 2, u = /* @__PURE__ */ Math.abs(t$1.y - a.y), h$1 = /* @__PURE__ */ Math.abs(t$1.x - a.x);
	if (Math.abs(l$1 - t$1.y) * r > Math.abs(i - t$1.x) * o$1) {
		let x = a.y < t$1.y ? t$1.y - o$1 - l$1 : l$1 - o$1 - t$1.y;
		n$1 = h$1 * x / u;
		let m$2 = {
			x: a.x < t$1.x ? a.x + n$1 : a.x - h$1 + n$1,
			y: a.y < t$1.y ? a.y + u - x : a.y - u + x
		};
		return n$1 === 0 && (m$2.x = t$1.x, m$2.y = t$1.y), h$1 === 0 && (m$2.x = t$1.x), u === 0 && (m$2.y = t$1.y), pt.debug(`abc89 topp/bott calc, Q ${u}, q ${x}, R ${h$1}, r ${n$1}`, m$2), m$2;
	} else {
		a.x < t$1.x ? n$1 = t$1.x - r - i : n$1 = i - r - t$1.x;
		let x = u * n$1 / h$1, m$2 = a.x < t$1.x ? a.x + h$1 - n$1 : a.x - h$1 + n$1, b$1 = a.y < t$1.y ? a.y + x : a.y - x;
		return pt.debug(`sides calc abc89, Q ${u}, q ${x}, R ${h$1}, r ${n$1}`, {
			_x: m$2,
			_y: b$1
		}), n$1 === 0 && (m$2 = t$1.x, b$1 = t$1.y), h$1 === 0 && (m$2 = t$1.x), u === 0 && (b$1 = t$1.y), {
			x: m$2,
			y: b$1
		};
	}
}, "intersection"), ie = /* @__PURE__ */ m$1((e, t$1) => {
	pt.debug("abc88 cutPathAtIntersect", e, t$1);
	let a = [], i = e[0], l$1 = !1;
	return e.forEach((s$1) => {
		if (!fr(t$1, s$1) && !l$1) {
			let r = /* @__PURE__ */ xr(t$1, i, s$1), n$1 = !1;
			a.forEach((o$1) => {
				n$1 = n$1 || o$1.x === r.x && o$1.y === r.y;
			}), a.some((o$1) => o$1.x === r.x && o$1.y === r.y) || a.push(r), l$1 = !0;
		} else i = s$1, l$1 || a.push(s$1);
	}), a;
}, "cutPathAtIntersect"), oe = /* @__PURE__ */ m$1(function(e, t$1, a, i, l$1, s$1, r) {
	let n$1 = a.points;
	pt.debug("abc88 InsertEdge: edge=", a, "e=", t$1);
	let o$1 = !1, u = /* @__PURE__ */ s$1.node(t$1.v);
	var h$1 = /* @__PURE__ */ s$1.node(t$1.w);
	h$1?.intersect && u?.intersect && (n$1 = /* @__PURE__ */ n$1.slice(1, a.points.length - 1), n$1.unshift(/* @__PURE__ */ u.intersect(n$1[0])), n$1.push(/* @__PURE__ */ h$1.intersect(n$1[n$1.length - 1]))), a.toCluster && (pt.debug("to cluster abc88", i[a.toCluster]), n$1 = /* @__PURE__ */ ie(a.points, i[a.toCluster].node), o$1 = !0), a.fromCluster && (pt.debug("from cluster abc88", i[a.fromCluster]), n$1 = /* @__PURE__ */ ie(/* @__PURE__ */ n$1.reverse(), i[a.fromCluster].node).reverse(), o$1 = !0);
	let x = /* @__PURE__ */ n$1.filter((y) => !Number.isNaN(y.y)), m$2 = $s;
	a.curve && (l$1 === "graph" || l$1 === "flowchart") && (m$2 = a.curve);
	let { x: b$1, y: L$1 } = w(a), _ = /* @__PURE__ */ As().x(b$1).y(L$1).curve(m$2), S;
	switch (a.thickness) {
		case "normal":
			S = "edge-thickness-normal";
			break;
		case "thick":
			S = "edge-thickness-thick";
			break;
		case "invisible":
			S = "edge-thickness-thick";
			break;
		default: S = "";
	}
	switch (a.pattern) {
		case "solid":
			S += " edge-pattern-solid";
			break;
		case "dotted":
			S += " edge-pattern-dotted";
			break;
		case "dashed":
			S += " edge-pattern-dashed";
			break;
	}
	let I = /* @__PURE__ */ e.append("path").attr("d", /* @__PURE__ */ _(x)).attr("id", a.id).attr("class", " " + S + (a.classes ? " " + a.classes : "")).attr("style", a.style), D$1 = "";
	(mr().flowchart.arrowMarkerAbsolute || mr().state.arrowMarkerAbsolute) && (D$1 = /* @__PURE__ */ Ao(!0)), se(I, a, D$1, r, l$1);
	let T$1 = {};
	return o$1 && (T$1.updatedPath = n$1), T$1.originalPath = a.points, T$1;
}, "insertEdge");
var br = /* @__PURE__ */ m$1((e) => {
	let t$1 = /* @__PURE__ */ new Set();
	for (let a of e) switch (a) {
		case "x":
			t$1.add("right"), t$1.add("left");
			break;
		case "y":
			t$1.add("up"), t$1.add("down");
			break;
		default:
			t$1.add(a);
			break;
	}
	return t$1;
}, "expandAndDeduplicateDirections"), ce = /* @__PURE__ */ m$1((e, t$1, a) => {
	let i = /* @__PURE__ */ br(e), l$1 = 2, s$1 = t$1.height + 2 * a.padding, r = s$1 / l$1, n$1 = t$1.width + 2 * r + a.padding, o$1 = a.padding / 2;
	return i.has("right") && i.has("left") && i.has("up") && i.has("down") ? [
		{
			x: 0,
			y: 0
		},
		{
			x: r,
			y: 0
		},
		{
			x: n$1 / 2,
			y: 2 * o$1
		},
		{
			x: n$1 - r,
			y: 0
		},
		{
			x: n$1,
			y: 0
		},
		{
			x: n$1,
			y: -s$1 / 3
		},
		{
			x: n$1 + 2 * o$1,
			y: -s$1 / 2
		},
		{
			x: n$1,
			y: -2 * s$1 / 3
		},
		{
			x: n$1,
			y: -s$1
		},
		{
			x: n$1 - r,
			y: -s$1
		},
		{
			x: n$1 / 2,
			y: -s$1 - 2 * o$1
		},
		{
			x: r,
			y: -s$1
		},
		{
			x: 0,
			y: -s$1
		},
		{
			x: 0,
			y: -2 * s$1 / 3
		},
		{
			x: -2 * o$1,
			y: -s$1 / 2
		},
		{
			x: 0,
			y: -s$1 / 3
		}
	] : i.has("right") && i.has("left") && i.has("up") ? [
		{
			x: r,
			y: 0
		},
		{
			x: n$1 - r,
			y: 0
		},
		{
			x: n$1,
			y: -s$1 / 2
		},
		{
			x: n$1 - r,
			y: -s$1
		},
		{
			x: r,
			y: -s$1
		},
		{
			x: 0,
			y: -s$1 / 2
		}
	] : i.has("right") && i.has("left") && i.has("down") ? [
		{
			x: 0,
			y: 0
		},
		{
			x: r,
			y: -s$1
		},
		{
			x: n$1 - r,
			y: -s$1
		},
		{
			x: n$1,
			y: 0
		}
	] : i.has("right") && i.has("up") && i.has("down") ? [
		{
			x: 0,
			y: 0
		},
		{
			x: n$1,
			y: -r
		},
		{
			x: n$1,
			y: -s$1 + r
		},
		{
			x: 0,
			y: -s$1
		}
	] : i.has("left") && i.has("up") && i.has("down") ? [
		{
			x: n$1,
			y: 0
		},
		{
			x: 0,
			y: -r
		},
		{
			x: 0,
			y: -s$1 + r
		},
		{
			x: n$1,
			y: -s$1
		}
	] : i.has("right") && i.has("left") ? [
		{
			x: r,
			y: 0
		},
		{
			x: r,
			y: -o$1
		},
		{
			x: n$1 - r,
			y: -o$1
		},
		{
			x: n$1 - r,
			y: 0
		},
		{
			x: n$1,
			y: -s$1 / 2
		},
		{
			x: n$1 - r,
			y: -s$1
		},
		{
			x: n$1 - r,
			y: -s$1 + o$1
		},
		{
			x: r,
			y: -s$1 + o$1
		},
		{
			x: r,
			y: -s$1
		},
		{
			x: 0,
			y: -s$1 / 2
		}
	] : i.has("up") && i.has("down") ? [
		{
			x: n$1 / 2,
			y: 0
		},
		{
			x: 0,
			y: -o$1
		},
		{
			x: r,
			y: -o$1
		},
		{
			x: r,
			y: -s$1 + o$1
		},
		{
			x: 0,
			y: -s$1 + o$1
		},
		{
			x: n$1 / 2,
			y: -s$1
		},
		{
			x: n$1,
			y: -s$1 + o$1
		},
		{
			x: n$1 - r,
			y: -s$1 + o$1
		},
		{
			x: n$1 - r,
			y: -o$1
		},
		{
			x: n$1,
			y: -o$1
		}
	] : i.has("right") && i.has("up") ? [
		{
			x: 0,
			y: 0
		},
		{
			x: n$1,
			y: -r
		},
		{
			x: 0,
			y: -s$1
		}
	] : i.has("right") && i.has("down") ? [
		{
			x: 0,
			y: 0
		},
		{
			x: n$1,
			y: 0
		},
		{
			x: 0,
			y: -s$1
		}
	] : i.has("left") && i.has("up") ? [
		{
			x: n$1,
			y: 0
		},
		{
			x: 0,
			y: -r
		},
		{
			x: n$1,
			y: -s$1
		}
	] : i.has("left") && i.has("down") ? [
		{
			x: n$1,
			y: 0
		},
		{
			x: 0,
			y: 0
		},
		{
			x: n$1,
			y: -s$1
		}
	] : i.has("right") ? [
		{
			x: r,
			y: -o$1
		},
		{
			x: r,
			y: -o$1
		},
		{
			x: n$1 - r,
			y: -o$1
		},
		{
			x: n$1 - r,
			y: 0
		},
		{
			x: n$1,
			y: -s$1 / 2
		},
		{
			x: n$1 - r,
			y: -s$1
		},
		{
			x: n$1 - r,
			y: -s$1 + o$1
		},
		{
			x: r,
			y: -s$1 + o$1
		},
		{
			x: r,
			y: -s$1 + o$1
		}
	] : i.has("left") ? [
		{
			x: r,
			y: 0
		},
		{
			x: r,
			y: -o$1
		},
		{
			x: n$1 - r,
			y: -o$1
		},
		{
			x: n$1 - r,
			y: -s$1 + o$1
		},
		{
			x: r,
			y: -s$1 + o$1
		},
		{
			x: r,
			y: -s$1
		},
		{
			x: 0,
			y: -s$1 / 2
		}
	] : i.has("up") ? [
		{
			x: r,
			y: -o$1
		},
		{
			x: r,
			y: -s$1 + o$1
		},
		{
			x: 0,
			y: -s$1 + o$1
		},
		{
			x: n$1 / 2,
			y: -s$1
		},
		{
			x: n$1,
			y: -s$1 + o$1
		},
		{
			x: n$1 - r,
			y: -s$1 + o$1
		},
		{
			x: n$1 - r,
			y: -o$1
		}
	] : i.has("down") ? [
		{
			x: n$1 / 2,
			y: 0
		},
		{
			x: 0,
			y: -o$1
		},
		{
			x: r,
			y: -o$1
		},
		{
			x: r,
			y: -s$1 + o$1
		},
		{
			x: n$1 - r,
			y: -s$1 + o$1
		},
		{
			x: n$1 - r,
			y: -o$1
		},
		{
			x: n$1,
			y: -o$1
		}
	] : [{
		x: 0,
		y: 0
	}];
}, "getArrowPoints");
function yr(e, t$1) {
	return e.intersect(t$1);
}
m$1(yr, "intersectNode");
var he = yr;
function mr$1(e, t$1, a, i) {
	var l$1 = e.x, s$1 = e.y, r = l$1 - i.x, n$1 = s$1 - i.y, o$1 = /* @__PURE__ */ Math.sqrt(t$1 * t$1 * n$1 * n$1 + a * a * r * r), u = /* @__PURE__ */ Math.abs(t$1 * a * r / o$1);
	i.x < l$1 && (u = -u);
	var h$1 = /* @__PURE__ */ Math.abs(t$1 * a * n$1 / o$1);
	return i.y < s$1 && (h$1 = -h$1), {
		x: l$1 + u,
		y: s$1 + h$1
	};
}
m$1(mr$1, "intersectEllipse");
var gt = mr$1;
function wr(e, t$1, a) {
	return gt(e, t$1, t$1, a);
}
m$1(wr, "intersectCircle");
var ge = wr;
function kr(e, t$1, a, i) {
	var l$1, s$1, r, n$1, o$1, u, h$1, x, m$2, b$1, L$1, _, S, I, D$1;
	if (l$1 = t$1.y - e.y, r = e.x - t$1.x, o$1 = t$1.x * e.y - e.x * t$1.y, m$2 = l$1 * a.x + r * a.y + o$1, b$1 = l$1 * i.x + r * i.y + o$1, !(m$2 !== 0 && b$1 !== 0 && de(m$2, b$1)) && (s$1 = i.y - a.y, n$1 = a.x - i.x, u = i.x * a.y - a.x * i.y, h$1 = s$1 * e.x + n$1 * e.y + u, x = s$1 * t$1.x + n$1 * t$1.y + u, !(h$1 !== 0 && x !== 0 && de(h$1, x)) && (L$1 = l$1 * n$1 - s$1 * r, L$1 !== 0))) return _ = /* @__PURE__ */ Math.abs(L$1 / 2), S = r * u - n$1 * o$1, I = S < 0 ? (S - _) / L$1 : (S + _) / L$1, S = s$1 * o$1 - l$1 * u, D$1 = S < 0 ? (S - _) / L$1 : (S + _) / L$1, {
		x: I,
		y: D$1
	};
}
m$1(kr, "intersectLine");
function de(e, t$1) {
	return e * t$1 > 0;
}
m$1(de, "sameSign");
var ue = kr;
var pe = Lr;
function Lr(e, t$1, a) {
	var i = e.x, l$1 = e.y, s$1 = [], r = Number.POSITIVE_INFINITY, n$1 = Number.POSITIVE_INFINITY;
	typeof t$1.forEach == "function" ? t$1.forEach(function(L$1) {
		r = /* @__PURE__ */ Math.min(r, L$1.x), n$1 = /* @__PURE__ */ Math.min(n$1, L$1.y);
	}) : (r = /* @__PURE__ */ Math.min(r, t$1.x), n$1 = /* @__PURE__ */ Math.min(n$1, t$1.y));
	for (var o$1 = i - e.width / 2 - r, u = l$1 - e.height / 2 - n$1, h$1 = 0; h$1 < t$1.length; h$1++) {
		var x = t$1[h$1], m$2 = t$1[h$1 < t$1.length - 1 ? h$1 + 1 : 0], b$1 = /* @__PURE__ */ ue(e, a, {
			x: o$1 + x.x,
			y: u + x.y
		}, {
			x: o$1 + m$2.x,
			y: u + m$2.y
		});
		b$1 && s$1.push(b$1);
	}
	return s$1.length ? (s$1.length > 1 && s$1.sort(function(L$1, _) {
		var S = L$1.x - a.x, I = L$1.y - a.y, D$1 = /* @__PURE__ */ Math.sqrt(S * S + I * I), T$1 = _.x - a.x, y = _.y - a.y, d$1 = /* @__PURE__ */ Math.sqrt(T$1 * T$1 + y * y);
		return D$1 < d$1 ? -1 : D$1 === d$1 ? 0 : 1;
	}), s$1[0]) : e;
}
m$1(Lr, "intersectPolygon");
var v = {
	node: he,
	circle: ge,
	ellipse: gt,
	polygon: pe,
	rect: /* @__PURE__ */ m$1((e, t$1) => {
		var a = e.x, i = e.y, l$1 = t$1.x - a, s$1 = t$1.y - i, r = e.width / 2, n$1 = e.height / 2, o$1, u;
		return Math.abs(s$1) * r > Math.abs(l$1) * n$1 ? (s$1 < 0 && (n$1 = -n$1), o$1 = s$1 === 0 ? 0 : n$1 * l$1 / s$1, u = n$1) : (l$1 < 0 && (r = -r), o$1 = r, u = l$1 === 0 ? 0 : r * s$1 / l$1), {
			x: a + o$1,
			y: i + u
		};
	}, "intersectRect")
};
var z = /* @__PURE__ */ m$1(async (e, t$1, a, i) => {
	let l$1 = /* @__PURE__ */ mr(), s$1, r = t$1.useHtmlLabels || Mo(l$1.flowchart.htmlLabels);
	a ? s$1 = a : s$1 = "node default";
	let n$1 = /* @__PURE__ */ e.insert("g").attr("class", s$1).attr("id", t$1.domId || t$1.id), o$1 = /* @__PURE__ */ n$1.insert("g").attr("class", "label").attr("style", t$1.labelStyle), u;
	t$1.labelText === void 0 ? u = "" : u = typeof t$1.labelText == "string" ? t$1.labelText : t$1.labelText[0];
	let h$1 = /* @__PURE__ */ o$1.node(), x;
	t$1.labelType === "markdown" ? x = /* @__PURE__ */ Rr(o$1, /* @__PURE__ */ ot(/* @__PURE__ */ Yt(u), l$1), {
		useHtmlLabels: r,
		width: t$1.width || l$1.flowchart.wrappingWidth,
		classes: "markdown-node-label"
	}, l$1) : x = /* @__PURE__ */ h$1.appendChild(await W(/* @__PURE__ */ ot(/* @__PURE__ */ Yt(u), l$1), t$1.labelStyle, !1, i));
	let m$2 = /* @__PURE__ */ x.getBBox(), b$1 = t$1.padding / 2;
	if (Mo(l$1.flowchart.htmlLabels)) {
		let L$1 = x.children[0], _ = /* @__PURE__ */ ia(x), S = /* @__PURE__ */ L$1.getElementsByTagName("img");
		if (S) {
			let I = u.replace(/<img[^>]*>/g, "").trim() === "";
			await Promise.all(/* @__PURE__ */ [...S].map((D$1) => new Promise((T$1) => {
				function y() {
					if (D$1.style.display = "flex", D$1.style.flexDirection = "column", I) {
						let d$1 = l$1.fontSize ? l$1.fontSize : window.getComputedStyle(document.body).fontSize, k = parseInt(d$1, 10) * 5 + "px";
						D$1.style.minWidth = k, D$1.style.maxWidth = k;
					} else D$1.style.width = "100%";
					T$1(D$1);
				}
				m$1(y, "setupImage"), setTimeout(() => {
					D$1.complete && y();
				}), D$1.addEventListener("error", y), D$1.addEventListener("load", y);
			})));
		}
		m$2 = /* @__PURE__ */ L$1.getBoundingClientRect(), _.attr("width", m$2.width), _.attr("height", m$2.height);
	}
	return r ? o$1.attr("transform", "translate(" + -m$2.width / 2 + ", " + -m$2.height / 2 + ")") : o$1.attr("transform", "translate(0, " + -m$2.height / 2 + ")"), t$1.centerLabel && o$1.attr("transform", "translate(" + -m$2.width / 2 + ", " + -m$2.height / 2 + ")"), o$1.insert("rect", ":first-child"), {
		shapeSvg: n$1,
		bbox: m$2,
		halfPadding: b$1,
		label: o$1
	};
}, "labelHelper"), N = /* @__PURE__ */ m$1((e, t$1) => {
	let a = /* @__PURE__ */ t$1.node().getBBox();
	e.width = a.width, e.height = a.height;
}, "updateNodeBounds");
function U(e, t$1, a, i) {
	return e.insert("polygon", ":first-child").attr("points", /* @__PURE__ */ i.map(function(l$1) {
		return l$1.x + "," + l$1.y;
	}).join(" ")).attr("class", "label-container").attr("transform", "translate(" + -t$1 / 2 + "," + a / 2 + ")");
}
m$1(U, "insertPolygonShape");
var xe = /* @__PURE__ */ m$1(async (e, t$1) => {
	t$1.useHtmlLabels || mr().flowchart.htmlLabels || (t$1.centerLabel = !0);
	let { shapeSvg: i, bbox: l$1, halfPadding: s$1 } = await z(e, t$1, "node " + t$1.classes, !0);
	pt.info("Classes = ", t$1.classes);
	let r = /* @__PURE__ */ i.insert("rect", ":first-child");
	return r.attr("rx", t$1.rx).attr("ry", t$1.ry).attr("x", -l$1.width / 2 - s$1).attr("y", -l$1.height / 2 - s$1).attr("width", l$1.width + t$1.padding).attr("height", l$1.height + t$1.padding), N(t$1, r), t$1.intersect = function(n$1) {
		return v.rect(t$1, n$1);
	}, i;
}, "note");
var be = /* @__PURE__ */ m$1((e) => e ? " " + e : "", "formatClass"), j = /* @__PURE__ */ m$1((e, t$1) => `${t$1 || "node default"}${be(e.classes)} ${be(e.class)}`, "getClassesFromNode"), ye = /* @__PURE__ */ m$1(async (e, t$1) => {
	let { shapeSvg: a, bbox: i } = await z(e, t$1, /* @__PURE__ */ j(t$1, void 0), !0), r = i.width + t$1.padding + (i.height + t$1.padding), n$1 = [
		{
			x: r / 2,
			y: 0
		},
		{
			x: r,
			y: -r / 2
		},
		{
			x: r / 2,
			y: -r
		},
		{
			x: 0,
			y: -r / 2
		}
	];
	pt.info("Question main (Circle)");
	let o$1 = /* @__PURE__ */ U(a, r, r, n$1);
	return o$1.attr("style", t$1.style), N(t$1, o$1), t$1.intersect = function(u) {
		return pt.warn("Intersect called"), v.polygon(t$1, n$1, u);
	}, a;
}, "question"), _r = /* @__PURE__ */ m$1((e, t$1) => {
	let a = /* @__PURE__ */ e.insert("g").attr("class", "node default").attr("id", t$1.domId || t$1.id), i = 28, l$1 = [
		{
			x: 0,
			y: i / 2
		},
		{
			x: i / 2,
			y: 0
		},
		{
			x: 0,
			y: -i / 2
		},
		{
			x: -i / 2,
			y: 0
		}
	];
	return a.insert("polygon", ":first-child").attr("points", /* @__PURE__ */ l$1.map(function(r) {
		return r.x + "," + r.y;
	}).join(" ")).attr("class", "state-start").attr("r", 7).attr("width", 28).attr("height", 28), t$1.width = 28, t$1.height = 28, t$1.intersect = function(r) {
		return v.circle(t$1, 14, r);
	}, a;
}, "choice"), Dr = /* @__PURE__ */ m$1(async (e, t$1) => {
	let { shapeSvg: a, bbox: i } = await z(e, t$1, /* @__PURE__ */ j(t$1, void 0), !0), l$1 = 4, s$1 = i.height + t$1.padding, r = s$1 / l$1, n$1 = i.width + 2 * r + t$1.padding, o$1 = [
		{
			x: r,
			y: 0
		},
		{
			x: n$1 - r,
			y: 0
		},
		{
			x: n$1,
			y: -s$1 / 2
		},
		{
			x: n$1 - r,
			y: -s$1
		},
		{
			x: r,
			y: -s$1
		},
		{
			x: 0,
			y: -s$1 / 2
		}
	], u = /* @__PURE__ */ U(a, n$1, s$1, o$1);
	return u.attr("style", t$1.style), N(t$1, u), t$1.intersect = function(h$1) {
		return v.polygon(t$1, o$1, h$1);
	}, a;
}, "hexagon"), Br = /* @__PURE__ */ m$1(async (e, t$1) => {
	let { shapeSvg: a, bbox: i } = await z(e, t$1, void 0, !0), l$1 = 2, s$1 = i.height + 2 * t$1.padding, r = s$1 / l$1, n$1 = i.width + 2 * r + t$1.padding, o$1 = /* @__PURE__ */ ce(t$1.directions, i, t$1), u = /* @__PURE__ */ U(a, n$1, s$1, o$1);
	return u.attr("style", t$1.style), N(t$1, u), t$1.intersect = function(h$1) {
		return v.polygon(t$1, o$1, h$1);
	}, a;
}, "block_arrow"), vr = /* @__PURE__ */ m$1(async (e, t$1) => {
	let { shapeSvg: a, bbox: i } = await z(e, t$1, /* @__PURE__ */ j(t$1, void 0), !0), l$1 = i.width + t$1.padding, s$1 = i.height + t$1.padding, r = [
		{
			x: -s$1 / 2,
			y: 0
		},
		{
			x: l$1,
			y: 0
		},
		{
			x: l$1,
			y: -s$1
		},
		{
			x: -s$1 / 2,
			y: -s$1
		},
		{
			x: 0,
			y: -s$1 / 2
		}
	];
	return U(a, l$1, s$1, r).attr("style", t$1.style), t$1.width = l$1 + s$1, t$1.height = s$1, t$1.intersect = function(o$1) {
		return v.polygon(t$1, r, o$1);
	}, a;
}, "rect_left_inv_arrow"), Tr = /* @__PURE__ */ m$1(async (e, t$1) => {
	let { shapeSvg: a, bbox: i } = await z(e, t$1, /* @__PURE__ */ j(t$1), !0), l$1 = i.width + t$1.padding, s$1 = i.height + t$1.padding, r = [
		{
			x: -2 * s$1 / 6,
			y: 0
		},
		{
			x: l$1 - s$1 / 6,
			y: 0
		},
		{
			x: l$1 + 2 * s$1 / 6,
			y: -s$1
		},
		{
			x: s$1 / 6,
			y: -s$1
		}
	], n$1 = /* @__PURE__ */ U(a, l$1, s$1, r);
	return n$1.attr("style", t$1.style), N(t$1, n$1), t$1.intersect = function(o$1) {
		return v.polygon(t$1, r, o$1);
	}, a;
}, "lean_right"), Cr = /* @__PURE__ */ m$1(async (e, t$1) => {
	let { shapeSvg: a, bbox: i } = await z(e, t$1, /* @__PURE__ */ j(t$1, void 0), !0), l$1 = i.width + t$1.padding, s$1 = i.height + t$1.padding, r = [
		{
			x: 2 * s$1 / 6,
			y: 0
		},
		{
			x: l$1 + s$1 / 6,
			y: 0
		},
		{
			x: l$1 - 2 * s$1 / 6,
			y: -s$1
		},
		{
			x: -s$1 / 6,
			y: -s$1
		}
	], n$1 = /* @__PURE__ */ U(a, l$1, s$1, r);
	return n$1.attr("style", t$1.style), N(t$1, n$1), t$1.intersect = function(o$1) {
		return v.polygon(t$1, r, o$1);
	}, a;
}, "lean_left"), Nr = /* @__PURE__ */ m$1(async (e, t$1) => {
	let { shapeSvg: a, bbox: i } = await z(e, t$1, /* @__PURE__ */ j(t$1, void 0), !0), l$1 = i.width + t$1.padding, s$1 = i.height + t$1.padding, r = [
		{
			x: -2 * s$1 / 6,
			y: 0
		},
		{
			x: l$1 + 2 * s$1 / 6,
			y: 0
		},
		{
			x: l$1 - s$1 / 6,
			y: -s$1
		},
		{
			x: s$1 / 6,
			y: -s$1
		}
	], n$1 = /* @__PURE__ */ U(a, l$1, s$1, r);
	return n$1.attr("style", t$1.style), N(t$1, n$1), t$1.intersect = function(o$1) {
		return v.polygon(t$1, r, o$1);
	}, a;
}, "trapezoid"), Ir = /* @__PURE__ */ m$1(async (e, t$1) => {
	let { shapeSvg: a, bbox: i } = await z(e, t$1, /* @__PURE__ */ j(t$1, void 0), !0), l$1 = i.width + t$1.padding, s$1 = i.height + t$1.padding, r = [
		{
			x: s$1 / 6,
			y: 0
		},
		{
			x: l$1 - s$1 / 6,
			y: 0
		},
		{
			x: l$1 + 2 * s$1 / 6,
			y: -s$1
		},
		{
			x: -2 * s$1 / 6,
			y: -s$1
		}
	], n$1 = /* @__PURE__ */ U(a, l$1, s$1, r);
	return n$1.attr("style", t$1.style), N(t$1, n$1), t$1.intersect = function(o$1) {
		return v.polygon(t$1, r, o$1);
	}, a;
}, "inv_trapezoid"), Or = /* @__PURE__ */ m$1(async (e, t$1) => {
	let { shapeSvg: a, bbox: i } = await z(e, t$1, /* @__PURE__ */ j(t$1, void 0), !0), l$1 = i.width + t$1.padding, s$1 = i.height + t$1.padding, r = [
		{
			x: 0,
			y: 0
		},
		{
			x: l$1 + s$1 / 2,
			y: 0
		},
		{
			x: l$1,
			y: -s$1 / 2
		},
		{
			x: l$1 + s$1 / 2,
			y: -s$1
		},
		{
			x: 0,
			y: -s$1
		}
	], n$1 = /* @__PURE__ */ U(a, l$1, s$1, r);
	return n$1.attr("style", t$1.style), N(t$1, n$1), t$1.intersect = function(o$1) {
		return v.polygon(t$1, r, o$1);
	}, a;
}, "rect_right_inv_arrow"), Rr$1 = /* @__PURE__ */ m$1(async (e, t$1) => {
	let { shapeSvg: a, bbox: i } = await z(e, t$1, /* @__PURE__ */ j(t$1, void 0), !0), l$1 = i.width + t$1.padding, s$1 = l$1 / 2, r = s$1 / (2.5 + l$1 / 50), n$1 = i.height + r + t$1.padding, o$1 = "M 0," + r + " a " + s$1 + "," + r + " 0,0,0 " + l$1 + " 0 a " + s$1 + "," + r + " 0,0,0 " + -l$1 + " 0 l 0," + n$1 + " a " + s$1 + "," + r + " 0,0,0 " + l$1 + " 0 l 0," + -n$1;
	return N(t$1, /* @__PURE__ */ a.attr("label-offset-y", r).insert("path", ":first-child").attr("style", t$1.style).attr("d", o$1).attr("transform", "translate(" + -l$1 / 2 + "," + -(n$1 / 2 + r) + ")")), t$1.intersect = function(h$1) {
		let x = /* @__PURE__ */ v.rect(t$1, h$1), m$2 = x.x - t$1.x;
		if (s$1 != 0 && (Math.abs(m$2) < t$1.width / 2 || Math.abs(m$2) == t$1.width / 2 && Math.abs(x.y - t$1.y) > t$1.height / 2 - r)) {
			let b$1 = r * r * (1 - m$2 * m$2 / (s$1 * s$1));
			b$1 != 0 && (b$1 = /* @__PURE__ */ Math.sqrt(b$1)), b$1 = r - b$1, h$1.y - t$1.y > 0 && (b$1 = -b$1), x.y += b$1;
		}
		return x;
	}, a;
}, "cylinder"), zr = /* @__PURE__ */ m$1(async (e, t$1) => {
	let { shapeSvg: a, bbox: i, halfPadding: l$1 } = await z(e, t$1, "node " + t$1.classes + " " + t$1.class, !0), s$1 = /* @__PURE__ */ a.insert("rect", ":first-child"), r = t$1.positioned ? t$1.width : i.width + t$1.padding, n$1 = t$1.positioned ? t$1.height : i.height + t$1.padding, o$1 = t$1.positioned ? -r / 2 : -i.width / 2 - l$1, u = t$1.positioned ? -n$1 / 2 : -i.height / 2 - l$1;
	if (s$1.attr("class", "basic label-container").attr("style", t$1.style).attr("rx", t$1.rx).attr("ry", t$1.ry).attr("x", o$1).attr("y", u).attr("width", r).attr("height", n$1), t$1.props) {
		let h$1 = new Set(Object.keys(t$1.props));
		t$1.props.borders && (Et(s$1, t$1.props.borders, r, n$1), h$1.delete("borders")), h$1.forEach((x) => {
			pt.warn(`Unknown node property ${x}`);
		});
	}
	return N(t$1, s$1), t$1.intersect = function(h$1) {
		return v.rect(t$1, h$1);
	}, a;
}, "rect"), Ar = /* @__PURE__ */ m$1(async (e, t$1) => {
	let { shapeSvg: a, bbox: i, halfPadding: l$1 } = await z(e, t$1, "node " + t$1.classes, !0), s$1 = /* @__PURE__ */ a.insert("rect", ":first-child"), r = t$1.positioned ? t$1.width : i.width + t$1.padding, n$1 = t$1.positioned ? t$1.height : i.height + t$1.padding, o$1 = t$1.positioned ? -r / 2 : -i.width / 2 - l$1, u = t$1.positioned ? -n$1 / 2 : -i.height / 2 - l$1;
	if (s$1.attr("class", "basic cluster composite label-container").attr("style", t$1.style).attr("rx", t$1.rx).attr("ry", t$1.ry).attr("x", o$1).attr("y", u).attr("width", r).attr("height", n$1), t$1.props) {
		let h$1 = new Set(Object.keys(t$1.props));
		t$1.props.borders && (Et(s$1, t$1.props.borders, r, n$1), h$1.delete("borders")), h$1.forEach((x) => {
			pt.warn(`Unknown node property ${x}`);
		});
	}
	return N(t$1, s$1), t$1.intersect = function(h$1) {
		return v.rect(t$1, h$1);
	}, a;
}, "composite"), Mr = /* @__PURE__ */ m$1(async (e, t$1) => {
	let { shapeSvg: a } = await z(e, t$1, "label", !0);
	pt.trace("Classes = ", t$1.class);
	let i = /* @__PURE__ */ a.insert("rect", ":first-child"), l$1 = 0, s$1 = 0;
	if (i.attr("width", l$1).attr("height", s$1), a.attr("class", "label edgeLabel"), t$1.props) {
		let r = new Set(Object.keys(t$1.props));
		t$1.props.borders && (Et(i, t$1.props.borders, l$1, s$1), r.delete("borders")), r.forEach((n$1) => {
			pt.warn(`Unknown node property ${n$1}`);
		});
	}
	return N(t$1, i), t$1.intersect = function(r) {
		return v.rect(t$1, r);
	}, a;
}, "labelRect");
function Et(e, t$1, a, i) {
	let l$1 = [], s$1 = /* @__PURE__ */ m$1((n$1) => {
		l$1.push(n$1, 0);
	}, "addBorder"), r = /* @__PURE__ */ m$1((n$1) => {
		l$1.push(0, n$1);
	}, "skipBorder");
	t$1.includes("t") ? (pt.debug("add top border"), s$1(a)) : r(a), t$1.includes("r") ? (pt.debug("add right border"), s$1(i)) : r(i), t$1.includes("b") ? (pt.debug("add bottom border"), s$1(a)) : r(a), t$1.includes("l") ? (pt.debug("add left border"), s$1(i)) : r(i), e.attr("stroke-dasharray", /* @__PURE__ */ l$1.join(" "));
}
m$1(Et, "applyNodePropertyBorders");
var Fr = /* @__PURE__ */ m$1(async (e, t$1) => {
	let a;
	t$1.classes ? a = "node " + t$1.classes : a = "node default";
	let i = /* @__PURE__ */ e.insert("g").attr("class", a).attr("id", t$1.domId || t$1.id), l$1 = /* @__PURE__ */ i.insert("rect", ":first-child"), s$1 = /* @__PURE__ */ i.insert("line"), r = /* @__PURE__ */ i.insert("g").attr("class", "label"), n$1 = t$1.labelText.flat ? t$1.labelText.flat() : t$1.labelText, o$1 = "";
	typeof n$1 == "object" ? o$1 = n$1[0] : o$1 = n$1, pt.info("Label text abc79", o$1, n$1, typeof n$1 == "object");
	let u = /* @__PURE__ */ r.node().appendChild(await W(o$1, t$1.labelStyle, !0, !0)), h$1 = {
		width: 0,
		height: 0
	};
	if (Mo(mr().flowchart.htmlLabels)) {
		let _ = u.children[0], S = /* @__PURE__ */ ia(u);
		h$1 = /* @__PURE__ */ _.getBoundingClientRect(), S.attr("width", h$1.width), S.attr("height", h$1.height);
	}
	pt.info("Text 2", n$1);
	let x = /* @__PURE__ */ n$1.slice(1, n$1.length), m$2 = /* @__PURE__ */ u.getBBox(), b$1 = /* @__PURE__ */ r.node().appendChild(await W(x.join ? x.join("<br/>") : x, t$1.labelStyle, !0, !0));
	if (Mo(mr().flowchart.htmlLabels)) {
		let _ = b$1.children[0], S = /* @__PURE__ */ ia(b$1);
		h$1 = /* @__PURE__ */ _.getBoundingClientRect(), S.attr("width", h$1.width), S.attr("height", h$1.height);
	}
	let L$1 = t$1.padding / 2;
	return ia(b$1).attr("transform", "translate( " + (h$1.width > m$2.width ? 0 : (m$2.width - h$1.width) / 2) + ", " + (m$2.height + L$1 + 5) + ")"), ia(u).attr("transform", "translate( " + (h$1.width < m$2.width ? 0 : -(m$2.width - h$1.width) / 2) + ", 0)"), h$1 = /* @__PURE__ */ r.node().getBBox(), r.attr("transform", "translate(" + -h$1.width / 2 + ", " + (-h$1.height / 2 - L$1 + 3) + ")"), l$1.attr("class", "outer title-state").attr("x", -h$1.width / 2 - L$1).attr("y", -h$1.height / 2 - L$1).attr("width", h$1.width + t$1.padding).attr("height", h$1.height + t$1.padding), s$1.attr("class", "divider").attr("x1", -h$1.width / 2 - L$1).attr("x2", h$1.width / 2 + L$1).attr("y1", -h$1.height / 2 - L$1 + m$2.height + L$1).attr("y2", -h$1.height / 2 - L$1 + m$2.height + L$1), N(t$1, l$1), t$1.intersect = function(_) {
		return v.rect(t$1, _);
	}, i;
}, "rectWithTitle"), Wr = /* @__PURE__ */ m$1(async (e, t$1) => {
	let { shapeSvg: a, bbox: i } = await z(e, t$1, /* @__PURE__ */ j(t$1, void 0), !0), l$1 = i.height + t$1.padding, s$1 = i.width + l$1 / 4 + t$1.padding;
	return N(t$1, /* @__PURE__ */ a.insert("rect", ":first-child").attr("style", t$1.style).attr("rx", l$1 / 2).attr("ry", l$1 / 2).attr("x", -s$1 / 2).attr("y", -l$1 / 2).attr("width", s$1).attr("height", l$1)), t$1.intersect = function(n$1) {
		return v.rect(t$1, n$1);
	}, a;
}, "stadium"), Pr$1 = /* @__PURE__ */ m$1(async (e, t$1) => {
	let { shapeSvg: a, bbox: i, halfPadding: l$1 } = await z(e, t$1, /* @__PURE__ */ j(t$1, void 0), !0), s$1 = /* @__PURE__ */ a.insert("circle", ":first-child");
	return s$1.attr("style", t$1.style).attr("rx", t$1.rx).attr("ry", t$1.ry).attr("r", i.width / 2 + l$1).attr("width", i.width + t$1.padding).attr("height", i.height + t$1.padding), pt.info("Circle main"), N(t$1, s$1), t$1.intersect = function(r) {
		return pt.info("Circle intersect", t$1, i.width / 2 + l$1, r), v.circle(t$1, i.width / 2 + l$1, r);
	}, a;
}, "circle"), Yr = /* @__PURE__ */ m$1(async (e, t$1) => {
	let { shapeSvg: a, bbox: i, halfPadding: l$1 } = await z(e, t$1, /* @__PURE__ */ j(t$1, void 0), !0), s$1 = 5, r = /* @__PURE__ */ a.insert("g", ":first-child"), n$1 = /* @__PURE__ */ r.insert("circle"), o$1 = /* @__PURE__ */ r.insert("circle");
	return r.attr("class", t$1.class), n$1.attr("style", t$1.style).attr("rx", t$1.rx).attr("ry", t$1.ry).attr("r", i.width / 2 + l$1 + s$1).attr("width", i.width + t$1.padding + s$1 * 2).attr("height", i.height + t$1.padding + s$1 * 2), o$1.attr("style", t$1.style).attr("rx", t$1.rx).attr("ry", t$1.ry).attr("r", i.width / 2 + l$1).attr("width", i.width + t$1.padding).attr("height", i.height + t$1.padding), pt.info("DoubleCircle main"), N(t$1, n$1), t$1.intersect = function(u) {
		return pt.info("DoubleCircle intersect", t$1, i.width / 2 + l$1 + s$1, u), v.circle(t$1, i.width / 2 + l$1 + s$1, u);
	}, a;
}, "doublecircle"), Hr = /* @__PURE__ */ m$1(async (e, t$1) => {
	let { shapeSvg: a, bbox: i } = await z(e, t$1, /* @__PURE__ */ j(t$1, void 0), !0), l$1 = i.width + t$1.padding, s$1 = i.height + t$1.padding, r = [
		{
			x: 0,
			y: 0
		},
		{
			x: l$1,
			y: 0
		},
		{
			x: l$1,
			y: -s$1
		},
		{
			x: 0,
			y: -s$1
		},
		{
			x: 0,
			y: 0
		},
		{
			x: -8,
			y: 0
		},
		{
			x: l$1 + 8,
			y: 0
		},
		{
			x: l$1 + 8,
			y: -s$1
		},
		{
			x: -8,
			y: -s$1
		},
		{
			x: -8,
			y: 0
		}
	], n$1 = /* @__PURE__ */ U(a, l$1, s$1, r);
	return n$1.attr("style", t$1.style), N(t$1, n$1), t$1.intersect = function(o$1) {
		return v.polygon(t$1, r, o$1);
	}, a;
}, "subroutine"), jr = /* @__PURE__ */ m$1((e, t$1) => {
	let a = /* @__PURE__ */ e.insert("g").attr("class", "node default").attr("id", t$1.domId || t$1.id), i = /* @__PURE__ */ a.insert("circle", ":first-child");
	return i.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14), N(t$1, i), t$1.intersect = function(l$1) {
		return v.circle(t$1, 7, l$1);
	}, a;
}, "start"), me = /* @__PURE__ */ m$1((e, t$1, a) => {
	let i = /* @__PURE__ */ e.insert("g").attr("class", "node default").attr("id", t$1.domId || t$1.id), l$1 = 70, s$1 = 10;
	a === "LR" && (l$1 = 10, s$1 = 70);
	return N(t$1, /* @__PURE__ */ i.append("rect").attr("x", -1 * l$1 / 2).attr("y", -1 * s$1 / 2).attr("width", l$1).attr("height", s$1).attr("class", "fork-join")), t$1.height = t$1.height + t$1.padding / 2, t$1.width = t$1.width + t$1.padding / 2, t$1.intersect = function(n$1) {
		return v.rect(t$1, n$1);
	}, i;
}, "forkJoin"), we = {
	rhombus: ye,
	composite: Ar,
	question: ye,
	rect: zr,
	labelRect: Mr,
	rectWithTitle: Fr,
	choice: _r,
	circle: Pr$1,
	doublecircle: Yr,
	stadium: Wr,
	hexagon: Dr,
	block_arrow: Br,
	rect_left_inv_arrow: vr,
	lean_right: Tr,
	lean_left: Cr,
	trapezoid: Nr,
	inv_trapezoid: Ir,
	rect_right_inv_arrow: Or,
	cylinder: Rr$1,
	start: jr,
	end: /* @__PURE__ */ m$1((e, t$1) => {
		let a = /* @__PURE__ */ e.insert("g").attr("class", "node default").attr("id", t$1.domId || t$1.id), i = /* @__PURE__ */ a.insert("circle", ":first-child"), l$1 = /* @__PURE__ */ a.insert("circle", ":first-child");
		return l$1.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14), i.attr("class", "state-end").attr("r", 5).attr("width", 10).attr("height", 10), N(t$1, l$1), t$1.intersect = function(s$1) {
			return v.circle(t$1, 7, s$1);
		}, a;
	}, "end"),
	note: xe,
	subroutine: Hr,
	fork: me,
	join: me,
	class_box: /* @__PURE__ */ m$1(async (e, t$1) => {
		let a = t$1.padding / 2, i = 4, l$1 = 8, s$1;
		t$1.classes ? s$1 = "node " + t$1.classes : s$1 = "node default";
		let r = /* @__PURE__ */ e.insert("g").attr("class", s$1).attr("id", t$1.domId || t$1.id), n$1 = /* @__PURE__ */ r.insert("rect", ":first-child"), o$1 = /* @__PURE__ */ r.insert("line"), u = /* @__PURE__ */ r.insert("line"), h$1 = 0, x = i, m$2 = /* @__PURE__ */ r.insert("g").attr("class", "label"), b$1 = 0, L$1 = t$1.classData.annotations?.[0], _ = t$1.classData.annotations[0] ? "«" + t$1.classData.annotations[0] + "»" : "", S = /* @__PURE__ */ m$2.node().appendChild(await W(_, t$1.labelStyle, !0, !0)), I = /* @__PURE__ */ S.getBBox();
		if (Mo(mr().flowchart.htmlLabels)) {
			let E = S.children[0], g = /* @__PURE__ */ ia(S);
			I = /* @__PURE__ */ E.getBoundingClientRect(), g.attr("width", I.width), g.attr("height", I.height);
		}
		t$1.classData.annotations[0] && (x += I.height + i, h$1 += I.width);
		let D$1 = t$1.classData.label;
		t$1.classData.type !== void 0 && t$1.classData.type !== "" && (mr().flowchart.htmlLabels ? D$1 += "&lt;" + t$1.classData.type + "&gt;" : D$1 += "<" + t$1.classData.type + ">");
		let T$1 = /* @__PURE__ */ m$2.node().appendChild(await W(D$1, t$1.labelStyle, !0, !0));
		ia(T$1).attr("class", "classTitle");
		let y = /* @__PURE__ */ T$1.getBBox();
		if (Mo(mr().flowchart.htmlLabels)) {
			let E = T$1.children[0], g = /* @__PURE__ */ ia(T$1);
			y = /* @__PURE__ */ E.getBoundingClientRect(), g.attr("width", y.width), g.attr("height", y.height);
		}
		x += y.height + i, y.width > h$1 && (h$1 = y.width);
		let d$1 = [];
		t$1.classData.members.forEach(async (E) => {
			let g = /* @__PURE__ */ E.getDisplayDetails(), Y = g.displayText;
			mr().flowchart.htmlLabels && (Y = /* @__PURE__ */ Y.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
			let p$1 = /* @__PURE__ */ m$2.node().appendChild(await W(Y, g.cssStyle ? g.cssStyle : t$1.labelStyle, !0, !0)), R = /* @__PURE__ */ p$1.getBBox();
			if (Mo(mr().flowchart.htmlLabels)) {
				let Z$1 = p$1.children[0], V = /* @__PURE__ */ ia(p$1);
				R = /* @__PURE__ */ Z$1.getBoundingClientRect(), V.attr("width", R.width), V.attr("height", R.height);
			}
			R.width > h$1 && (h$1 = R.width), x += R.height + i, d$1.push(p$1);
		}), x += l$1;
		let f = [];
		if (t$1.classData.methods.forEach(async (E) => {
			let g = /* @__PURE__ */ E.getDisplayDetails(), Y = g.displayText;
			mr().flowchart.htmlLabels && (Y = /* @__PURE__ */ Y.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
			let p$1 = /* @__PURE__ */ m$2.node().appendChild(await W(Y, g.cssStyle ? g.cssStyle : t$1.labelStyle, !0, !0)), R = /* @__PURE__ */ p$1.getBBox();
			if (Mo(mr().flowchart.htmlLabels)) {
				let Z$1 = p$1.children[0], V = /* @__PURE__ */ ia(p$1);
				R = /* @__PURE__ */ Z$1.getBoundingClientRect(), V.attr("width", R.width), V.attr("height", R.height);
			}
			R.width > h$1 && (h$1 = R.width), x += R.height + i, f.push(p$1);
		}), x += l$1, L$1) {
			let E = (h$1 - I.width) / 2;
			ia(S).attr("transform", "translate( " + (-1 * h$1 / 2 + E) + ", " + -1 * x / 2 + ")"), b$1 = I.height + i;
		}
		let k = (h$1 - y.width) / 2;
		return ia(T$1).attr("transform", "translate( " + (-1 * h$1 / 2 + k) + ", " + (-1 * x / 2 + b$1) + ")"), b$1 += y.height + i, o$1.attr("class", "divider").attr("x1", -h$1 / 2 - a).attr("x2", h$1 / 2 + a).attr("y1", -x / 2 - a + l$1 + b$1).attr("y2", -x / 2 - a + l$1 + b$1), b$1 += l$1, d$1.forEach((E) => {
			ia(E).attr("transform", "translate( " + -h$1 / 2 + ", " + (-1 * x / 2 + b$1 + l$1 / 2) + ")");
			let g = E?.getBBox();
			b$1 += (g?.height ?? 0) + i;
		}), b$1 += l$1, u.attr("class", "divider").attr("x1", -h$1 / 2 - a).attr("x2", h$1 / 2 + a).attr("y1", -x / 2 - a + l$1 + b$1).attr("y2", -x / 2 - a + l$1 + b$1), b$1 += l$1, f.forEach((E) => {
			ia(E).attr("transform", "translate( " + -h$1 / 2 + ", " + (-1 * x / 2 + b$1) + ")");
			let g = E?.getBBox();
			b$1 += (g?.height ?? 0) + i;
		}), n$1.attr("style", t$1.style).attr("class", "outer title-state").attr("x", -h$1 / 2 - a).attr("y", -(x / 2) - a).attr("width", h$1 + t$1.padding).attr("height", x + t$1.padding), N(t$1, n$1), t$1.intersect = function(E) {
			return v.rect(t$1, E);
		}, r;
	}, "class_box")
}, dt = {}, _t = /* @__PURE__ */ m$1(async (e, t$1, a) => {
	let i, l$1;
	if (t$1.link) {
		let s$1;
		mr().securityLevel === "sandbox" ? s$1 = "_top" : t$1.linkTarget && (s$1 = t$1.linkTarget || "_blank"), i = /* @__PURE__ */ e.insert("svg:a").attr("xlink:href", t$1.link).attr("target", s$1), l$1 = await we[t$1.shape](i, t$1, a);
	} else l$1 = await we[t$1.shape](e, t$1, a), i = l$1;
	return t$1.tooltip && l$1.attr("title", t$1.tooltip), t$1.class && l$1.attr("class", "node default " + t$1.class), dt[t$1.id] = i, t$1.haveCallback && dt[t$1.id].attr("class", dt[t$1.id].attr("class") + " clickable"), i;
}, "insertNode");
var ke = /* @__PURE__ */ m$1((e) => {
	let t$1 = dt[e.id];
	pt.trace("Transforming node", e.diff, e, "translate(" + (e.x - e.width / 2 - 5) + ", " + e.width / 2 + ")");
	let a = 8, i = e.diff || 0;
	return e.clusterNode ? t$1.attr("transform", "translate(" + (e.x + i - e.width / 2) + ", " + (e.y - e.height / 2 - a) + ")") : t$1.attr("transform", "translate(" + e.x + ", " + e.y + ")"), i;
}, "positionNode");
function Le(e, t$1, a = !1) {
	let i = e, l$1 = "default";
	(i?.classes?.length || 0) > 0 && (l$1 = /* @__PURE__ */ (i?.classes ?? []).join(" ")), l$1 = l$1 + " flowchart-label";
	let s$1 = 0, r = "", n$1;
	switch (i.type) {
		case "round":
			s$1 = 5, r = "rect";
			break;
		case "composite":
			s$1 = 0, r = "composite", n$1 = 0;
			break;
		case "square":
			r = "rect";
			break;
		case "diamond":
			r = "question";
			break;
		case "hexagon":
			r = "hexagon";
			break;
		case "block_arrow":
			r = "block_arrow";
			break;
		case "odd":
			r = "rect_left_inv_arrow";
			break;
		case "lean_right":
			r = "lean_right";
			break;
		case "lean_left":
			r = "lean_left";
			break;
		case "trapezoid":
			r = "trapezoid";
			break;
		case "inv_trapezoid":
			r = "inv_trapezoid";
			break;
		case "rect_left_inv_arrow":
			r = "rect_left_inv_arrow";
			break;
		case "circle":
			r = "circle";
			break;
		case "ellipse":
			r = "ellipse";
			break;
		case "stadium":
			r = "stadium";
			break;
		case "subroutine":
			r = "subroutine";
			break;
		case "cylinder":
			r = "cylinder";
			break;
		case "group":
			r = "rect";
			break;
		case "doublecircle":
			r = "doublecircle";
			break;
		default: r = "rect";
	}
	let o$1 = /* @__PURE__ */ bt(i?.styles ?? []), u = i.label, h$1 = i.size ?? {
		width: 0,
		height: 0,
		x: 0,
		y: 0
	};
	return {
		labelStyle: o$1.labelStyle,
		shape: r,
		labelText: u,
		rx: s$1,
		ry: s$1,
		class: l$1,
		style: o$1.style,
		id: i.id,
		directions: i.directions,
		width: h$1.width,
		height: h$1.height,
		x: h$1.x,
		y: h$1.y,
		positioned: a,
		intersect: void 0,
		type: i.type,
		padding: n$1 ?? Ot()?.block?.padding ?? 0
	};
}
m$1(Le, "getNodeFromBlock");
async function Ur(e, t$1, a) {
	let i = /* @__PURE__ */ Le(t$1, a, !1);
	if (i.type === "group") return;
	let s$1 = await _t(e, i, { config: /* @__PURE__ */ Ot() }), r = /* @__PURE__ */ s$1.node().getBBox(), n$1 = /* @__PURE__ */ a.getBlock(i.id);
	n$1.size = {
		width: r.width,
		height: r.height,
		x: 0,
		y: 0,
		node: s$1
	}, a.setBlock(n$1), s$1.remove();
}
m$1(Ur, "calculateBlockSize");
async function Vr(e, t$1, a) {
	let i = /* @__PURE__ */ Le(t$1, a, !0);
	if (a.getBlock(i.id).type !== "space") await _t(e, i, { config: /* @__PURE__ */ Ot() }), t$1.intersect = i?.intersect, ke(i);
}
m$1(Vr, "insertBlockPositioned");
async function Dt(e, t$1, a, i) {
	for (let l$1 of t$1) await i(e, l$1, a), l$1.children && await Dt(e, l$1.children, a, i);
}
m$1(Dt, "performOperations");
async function Se(e, t$1, a) {
	await Dt(e, t$1, a, Ur);
}
m$1(Se, "calculateBlockSizes");
async function Ee(e, t$1, a) {
	await Dt(e, t$1, a, Vr);
}
m$1(Ee, "insertBlocks");
async function _e(e, t$1, a, i, l$1) {
	let s$1 = new m({
		multigraph: !0,
		compound: !0
	});
	s$1.setGraph({
		rankdir: "TB",
		nodesep: 10,
		ranksep: 10,
		marginx: 8,
		marginy: 8
	});
	for (let r of a) r.size && s$1.setNode(r.id, {
		width: r.size.width,
		height: r.size.height,
		intersect: r.intersect
	});
	for (let r of t$1) if (r.start && r.end) {
		let n$1 = /* @__PURE__ */ i.getBlock(r.start), o$1 = /* @__PURE__ */ i.getBlock(r.end);
		if (n$1?.size && o$1?.size) {
			let u = n$1.size, h$1 = o$1.size, x = [
				{
					x: u.x,
					y: u.y
				},
				{
					x: u.x + (h$1.x - u.x) / 2,
					y: u.y + (h$1.y - u.y) / 2
				},
				{
					x: h$1.x,
					y: h$1.y
				}
			];
			oe(e, {
				v: r.start,
				w: r.end,
				name: r.id
			}, {
				...r,
				arrowTypeEnd: r.arrowTypeEnd,
				arrowTypeStart: r.arrowTypeStart,
				points: x,
				classes: "edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1"
			}, void 0, "block", s$1, l$1), r.label && (await ne(e, {
				...r,
				label: r.label,
				labelStyle: "stroke: #333; stroke-width: 1.5px;fill:none;",
				arrowTypeEnd: r.arrowTypeEnd,
				arrowTypeStart: r.arrowTypeStart,
				points: x,
				classes: "edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1"
			}), le({
				...r,
				x: x[1].x,
				y: x[1].y
			}, { originalPath: x }));
		}
	}
}
m$1(_e, "insertEdges");
var $s$1 = {
	parser: Kt,
	db: qt,
	renderer: {
		draw: /* @__PURE__ */ m$1(async function(e, t$1, a, i) {
			let { securityLevel: l$1, block: s$1 } = Ot(), r = i.db, n$1;
			l$1 === "sandbox" && (n$1 = /* @__PURE__ */ ia("#i" + t$1));
			let o$1 = l$1 === "sandbox" ? ia(n$1.nodes()[0].contentDocument.body) : ia("body"), u = l$1 === "sandbox" ? o$1.select(`[id="${t$1}"]`) : ia(`[id="${t$1}"]`);
			Qt(u, [
				"point",
				"circle",
				"cross"
			], i.type, t$1);
			let x = /* @__PURE__ */ r.getBlocks(), m$2 = /* @__PURE__ */ r.getBlocksFlat(), b$1 = /* @__PURE__ */ r.getEdges(), L$1 = /* @__PURE__ */ u.insert("g").attr("class", "block");
			await Se(L$1, x, r);
			let _ = /* @__PURE__ */ ee(r);
			if (await Ee(L$1, x, r), await _e(L$1, b$1, m$2, r, t$1), _) {
				let S = _, I = /* @__PURE__ */ Math.max(1, /* @__PURE__ */ Math.round(.125 * (S.width / S.height))), D$1 = S.height + I + 10, T$1 = S.width + 10, { useMaxWidth: y } = s$1;
				Wo(u, D$1, T$1, !!y), pt.debug("Here Bounds", _, S), u.attr("viewBox", `${S.x - 5} ${S.y - 5} ${S.width + 10} ${S.height + 10}`);
			}
		}, "draw"),
		getClasses: /* @__PURE__ */ m$1(function(e, t$1) {
			return t$1.db.getClasses();
		}, "getClasses")
	},
	styles: Jt
};
export { w as a, s as i, n, o, d as r, m as s, $s$1 as t };
