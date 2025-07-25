import { m as h, e as fn, Z as Zr, s as sn, H as Kn, X as Xr, R as Rn } from './vendor-min-mermaid~chunk-5ZJXQJOJ.Be7I3AGN.chunk.js';
import { C as Cr } from './vendor-min-mermaid~chunk-YPUTD6PB.DixZkCPt.chunk.js';
import { u as Mt, T } from './vendor-min-mermaid~chunk-6BY5RJGC.CZ3m8b_4.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var P = "\0", l = "\0", v = "", m = class {
    static{
        m$1(this, "Graph");
    }
    constructor(e = {}){
        this._isDirected = Object.prototype.hasOwnProperty.call(e, "directed") ? e.directed : true, this._isMultigraph = Object.prototype.hasOwnProperty.call(e, "multigraph") ? e.multigraph : false, this._isCompound = Object.prototype.hasOwnProperty.call(e, "compound") ? e.compound : false, this._label = void 0, this._defaultNodeLabelFn = /*#__PURE__*/ Mt(void 0), this._defaultEdgeLabelFn = /*#__PURE__*/ Mt(void 0), this._nodes = {}, this._isCompound && (this._parent = {}, this._children = {}, this._children[l] = {}), this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {};
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
        return T(e) || (e = /*#__PURE__*/ Mt(e)), this._defaultNodeLabelFn = e, this;
    }
    nodeCount() {
        return this._nodeCount;
    }
    nodes() {
        return h(this._nodes);
    }
    sources() {
        var e = this;
        return fn(/*#__PURE__*/ this.nodes(), function(t) {
            return Cr(e._in[t]);
        });
    }
    sinks() {
        var e = this;
        return fn(/*#__PURE__*/ this.nodes(), function(t) {
            return Cr(e._out[t]);
        });
    }
    setNodes(e, t) {
        var s = arguments, i = this;
        return Zr(e, function(r) {
            s.length > 1 ? i.setNode(r, t) : i.setNode(r);
        }), this;
    }
    setNode(e, t) {
        return Object.prototype.hasOwnProperty.call(this._nodes, e) ? (arguments.length > 1 && (this._nodes[e] = t), this) : (this._nodes[e] = arguments.length > 1 ? t : this._defaultNodeLabelFn(e), this._isCompound && (this._parent[e] = l, this._children[e] = {}, this._children[l][e] = true), this._in[e] = {}, this._preds[e] = {}, this._out[e] = {}, this._sucs[e] = {}, ++this._nodeCount, this);
    }
    node(e) {
        return this._nodes[e];
    }
    hasNode(e) {
        return Object.prototype.hasOwnProperty.call(this._nodes, e);
    }
    removeNode(e) {
        if (Object.prototype.hasOwnProperty.call(this._nodes, e)) {
            var t = /*#__PURE__*/ m$1((s)=>this.removeEdge(this._edgeObjs[s]), "removeEdge");
            delete this._nodes[e], this._isCompound && (this._removeFromParentsChildList(e), delete this._parent[e], Zr(/*#__PURE__*/ this.children(e), (s)=>{
                this.setParent(s);
            }), delete this._children[e]), Zr(/*#__PURE__*/ h(this._in[e]), t), delete this._in[e], delete this._preds[e], Zr(/*#__PURE__*/ h(this._out[e]), t), delete this._out[e], delete this._sucs[e], --this._nodeCount;
        }
        return this;
    }
    setParent(e, t) {
        if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
        if (sn(t)) t = l;
        else {
            t += "";
            for(var s = t; !sn(s); s = /*#__PURE__*/ this.parent(s))if (s === e) throw new Error("Setting " + t + " as parent of " + e + " would create a cycle");
            this.setNode(t);
        }
        return this.setNode(e), this._removeFromParentsChildList(e), this._parent[e] = t, this._children[t][e] = true, this;
    }
    _removeFromParentsChildList(e) {
        delete this._children[this._parent[e]][e];
    }
    parent(e) {
        if (this._isCompound) {
            var t = this._parent[e];
            if (t !== l) return t;
        }
    }
    children(e) {
        if (sn(e) && (e = l), this._isCompound) {
            var t = this._children[e];
            if (t) return h(t);
        } else {
            if (e === l) return this.nodes();
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
        var t = /*#__PURE__*/ this.predecessors(e);
        if (t) return Kn(t, /*#__PURE__*/ this.successors(e));
    }
    isLeaf(e) {
        var t;
        return this.isDirected() ? t = /*#__PURE__*/ this.successors(e) : t = /*#__PURE__*/ this.neighbors(e), t.length === 0;
    }
    filterNodes(e) {
        var t = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
        });
        t.setGraph(/*#__PURE__*/ this.graph());
        var s = this;
        Zr(this._nodes, function(n, h) {
            e(h) && t.setNode(h, n);
        }), Zr(this._edgeObjs, function(n) {
            t.hasNode(n.v) && t.hasNode(n.w) && t.setEdge(n, /*#__PURE__*/ s.edge(n));
        });
        var i = {};
        function r(n) {
            var h = /*#__PURE__*/ s.parent(n);
            return h === void 0 || t.hasNode(h) ? (i[n] = h, h) : h in i ? i[h] : r(h);
        }
        return m$1(r, "findParent"), this._isCompound && Zr(/*#__PURE__*/ t.nodes(), function(n) {
            t.setParent(n, /*#__PURE__*/ r(n));
        }), t;
    }
    setDefaultEdgeLabel(e) {
        return T(e) || (e = /*#__PURE__*/ Mt(e)), this._defaultEdgeLabelFn = e, this;
    }
    edgeCount() {
        return this._edgeCount;
    }
    edges() {
        return Xr(this._edgeObjs);
    }
    setPath(e, t) {
        var s = this, i = arguments;
        return Rn(e, function(r, n) {
            return i.length > 1 ? s.setEdge(r, n, t) : s.setEdge(r, n), n;
        }), this;
    }
    setEdge() {
        var e, t, s, i, r = false, n = arguments[0];
        typeof n == "object" && n !== null && "v" in n ? (e = n.v, t = n.w, s = n.name, arguments.length === 2 && (i = arguments[1], r = true)) : (e = n, t = arguments[1], s = arguments[3], arguments.length > 2 && (i = arguments[2], r = true)), e = "" + e, t = "" + t, sn(s) || (s = "" + s);
        var h = /*#__PURE__*/ p(this._isDirected, e, t, s);
        if (Object.prototype.hasOwnProperty.call(this._edgeLabels, h)) return r && (this._edgeLabels[h] = i), this;
        if (!sn(s) && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
        this.setNode(e), this.setNode(t), this._edgeLabels[h] = r ? i : this._defaultEdgeLabelFn(e, t, s);
        var c = /*#__PURE__*/ D(this._isDirected, e, t, s);
        return e = c.v, t = c.w, Object.freeze(c), this._edgeObjs[h] = c, L(this._preds[t], e), L(this._sucs[e], t), this._in[t][h] = c, this._out[e][h] = c, this._edgeCount++, this;
    }
    edge(e, t, s) {
        var i = arguments.length === 1 ? O(this._isDirected, arguments[0]) : p(this._isDirected, e, t, s);
        return this._edgeLabels[i];
    }
    hasEdge(e, t, s) {
        var i = arguments.length === 1 ? O(this._isDirected, arguments[0]) : p(this._isDirected, e, t, s);
        return Object.prototype.hasOwnProperty.call(this._edgeLabels, i);
    }
    removeEdge(e, t, s) {
        var i = arguments.length === 1 ? O(this._isDirected, arguments[0]) : p(this._isDirected, e, t, s), r = this._edgeObjs[i];
        return r && (e = r.v, t = r.w, delete this._edgeLabels[i], delete this._edgeObjs[i], j(this._preds[t], e), j(this._sucs[e], t), delete this._in[t][i], delete this._out[e][i], this._edgeCount--), this;
    }
    inEdges(e, t) {
        var s = this._in[e];
        if (s) {
            var i = /*#__PURE__*/ Xr(s);
            return t ? fn(i, function(r) {
                return r.v === t;
            }) : i;
        }
    }
    outEdges(e, t) {
        var s = this._out[e];
        if (s) {
            var i = /*#__PURE__*/ Xr(s);
            return t ? fn(i, function(r) {
                return r.w === t;
            }) : i;
        }
    }
    nodeEdges(e, t) {
        var s = /*#__PURE__*/ this.inEdges(e, t);
        if (s) return s.concat(/*#__PURE__*/ this.outEdges(e, t));
    }
};
m.prototype._nodeCount = 0;
m.prototype._edgeCount = 0;
function L(d, e) {
    d[e] ? d[e]++ : d[e] = 1;
}
m$1(L, "incrementOrInitEntry");
function j(d, e) {
    --d[e] || delete d[e];
}
m$1(j, "decrementOrRemoveEntry");
function p(d, e, t, s) {
    var i = "" + e, r = "" + t;
    if (!d && i > r) {
        var n = i;
        i = r, r = n;
    }
    return i + v + r + v + (sn(s) ? P : s);
}
m$1(p, "edgeArgsToId");
function D(d, e, t, s) {
    var i = "" + e, r = "" + t;
    if (!d && i > r) {
        var n = i;
        i = r, r = n;
    }
    var h = {
        v: i,
        w: r
    };
    return s && (h.name = s), h;
}
m$1(D, "edgeArgsToObj");
function O(d, e) {
    return p(d, e.v, e.w, e.name);
}
m$1(O, "edgeObjToId");
export { m };
