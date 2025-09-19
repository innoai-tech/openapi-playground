import { m } from './vendor-min-mermaid~chunk-EYG76IYJ.B68ANacC.chunk.js';
import { Z as Zr$1, q as Tn$1, N as Nf, r as bn$1, D as Df, t as dn$1, u as lp, J as Jr$1, v as Jm, s as sn$1, y as ym, b as fm, w as Ti, Q as Qr$1, O as Om, x as tp, K as Ki, d as fn$1, X as Xr$1, R as Rn, B as gp, C as np, E as hi, F as Zi, G as Ji } from './vendor-min-mermaid~chunk-OMTJKCYW.Drk1AmJ7.chunk.js';
import { q as qs, M as Mt, N } from './vendor-min-mermaid~chunk-A4ITRWGT.D09mJiMA.chunk.js';
import { m as m$1 } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
function g(r, e, n, t) {
    var o;
    do o = /*#__PURE__*/ lp(t);
    while (r.hasNode(o));
    return n.dummy = e, r.setNode(o, n), o;
}
m$1(g, "addDummyNode");
function xr(r) {
    var e = /*#__PURE__*/ new m().setGraph(/*#__PURE__*/ r.graph());
    return Zr$1(/*#__PURE__*/ r.nodes(), function(n) {
        e.setNode(n, /*#__PURE__*/ r.node(n));
    }), Zr$1(/*#__PURE__*/ r.edges(), function(n) {
        var t = e.edge(n.v, n.w) || {
            weight: 0,
            minlen: 1
        }, o = /*#__PURE__*/ r.edge(n);
        e.setEdge(n.v, n.w, {
            weight: t.weight + o.weight,
            minlen: /*#__PURE__*/ Math.max(t.minlen, o.minlen)
        });
    }), e;
}
m$1(xr, "simplify");
function X(r) {
    var e = /*#__PURE__*/ new m({
        multigraph: /*#__PURE__*/ r.isMultigraph()
    }).setGraph(/*#__PURE__*/ r.graph());
    return Zr$1(/*#__PURE__*/ r.nodes(), function(n) {
        r.children(n).length || e.setNode(n, /*#__PURE__*/ r.node(n));
    }), Zr$1(/*#__PURE__*/ r.edges(), function(n) {
        e.setEdge(n, /*#__PURE__*/ r.edge(n));
    }), e;
}
m$1(X, "asNonCompoundGraph");
function $(r, e) {
    var n = r.x, t = r.y, o = e.x - n, a = e.y - t, i = r.width / 2, f = r.height / 2;
    if (!o && !a) throw new Error("Not possible to find intersection inside of the rectangle");
    var d, c;
    return Math.abs(a) * i > Math.abs(o) * f ? (a < 0 && (f = -f), d = f * o / a, c = f) : (o < 0 && (i = -i), d = i, c = i * a / o), {
        x: n + d,
        y: t + c
    };
}
m$1($, "intersectRect");
function C(r) {
    var e = /*#__PURE__*/ Jr$1(/*#__PURE__*/ Jm(er(r) + 1), function() {
        return [];
    });
    return Zr$1(/*#__PURE__*/ r.nodes(), function(n) {
        var t = /*#__PURE__*/ r.node(n), o = t.rank;
        sn$1(o) || (e[o][t.order] = n);
    }), e;
}
m$1(C, "buildLayerMatrix");
function kr(r) {
    var e = /*#__PURE__*/ ym(/*#__PURE__*/ Jr$1(/*#__PURE__*/ r.nodes(), function(n) {
        return r.node(n).rank;
    }));
    Zr$1(/*#__PURE__*/ r.nodes(), function(n) {
        var t = /*#__PURE__*/ r.node(n);
        fm(t, "rank") && (t.rank -= e);
    });
}
m$1(kr, "normalizeRanks");
function gr(r) {
    var e = /*#__PURE__*/ ym(/*#__PURE__*/ Jr$1(/*#__PURE__*/ r.nodes(), function(a) {
        return r.node(a).rank;
    })), n = [];
    Zr$1(/*#__PURE__*/ r.nodes(), function(a) {
        var i = r.node(a).rank - e;
        n[i] || (n[i] = []), n[i].push(a);
    });
    var t = 0, o = r.graph().nodeRankFactor;
    Zr$1(n, function(a, i) {
        sn$1(a) && i % o !== 0 ? --t : t && Zr$1(a, function(f) {
            r.node(f).rank += t;
        });
    });
}
m$1(gr, "removeEmptyRanks");
function rr(r, e, n, t) {
    var o = {
        width: 0,
        height: 0
    };
    return arguments.length >= 4 && (o.rank = n, o.order = t), g(r, "border", o, e);
}
m$1(rr, "addBorderNode");
function er(r) {
    return bn$1(/*#__PURE__*/ Jr$1(/*#__PURE__*/ r.nodes(), function(e) {
        var n = r.node(e).rank;
        if (!sn$1(n)) return n;
    }));
}
m$1(er, "maxRank");
function Nr(r, e) {
    var n = {
        lhs: [],
        rhs: []
    };
    return Zr$1(r, function(t) {
        e(t) ? n.lhs.push(t) : n.rhs.push(t);
    }), n;
}
m$1(Nr, "partition");
function Ir(r, e) {
    var n = /*#__PURE__*/ Ti();
    try {
        return e();
    } finally{
        console.log(r + " time: " + (Ti() - n) + "ms");
    }
}
m$1(Ir, "time");
function Or(r, e) {
    return e();
}
m$1(Or, "notime");
function Pr(r) {
    function e(n) {
        var t = /*#__PURE__*/ r.children(n), o = /*#__PURE__*/ r.node(n);
        if (t.length && Zr$1(t, e), Object.prototype.hasOwnProperty.call(o, "minRank")) {
            o.borderLeft = [], o.borderRight = [];
            for(var a = o.minRank, i = o.maxRank + 1; a < i; ++a)Lr(r, "borderLeft", "_bl", n, o, a), Lr(r, "borderRight", "_br", n, o, a);
        }
    }
    m$1(e, "dfs"), Zr$1(/*#__PURE__*/ r.children(), e);
}
m$1(Pr, "addBorderSegments");
function Lr(r, e, n, t, o, a) {
    var i = {
        width: 0,
        height: 0,
        rank: a,
        borderType: e
    }, f = o[e][a - 1], d = /*#__PURE__*/ g(r, "border", i, n);
    o[e][a] = d, r.setParent(d, t), f && r.setEdge(f, d, {
        weight: 1
    });
}
m$1(Lr, "addBorderNode");
function Tr(r) {
    var e = /*#__PURE__*/ r.graph().rankdir.toLowerCase();
    (e === "lr" || e === "rl") && Rr(r);
}
m$1(Tr, "adjust");
function jr(r) {
    var e = /*#__PURE__*/ r.graph().rankdir.toLowerCase();
    (e === "bt" || e === "rl") && pe(r), (e === "lr" || e === "rl") && (me(r), Rr(r));
}
m$1(jr, "undo");
function Rr(r) {
    Zr$1(/*#__PURE__*/ r.nodes(), function(e) {
        Cr(/*#__PURE__*/ r.node(e));
    }), Zr$1(/*#__PURE__*/ r.edges(), function(e) {
        Cr(/*#__PURE__*/ r.edge(e));
    });
}
m$1(Rr, "swapWidthHeight");
function Cr(r) {
    var e = r.width;
    r.width = r.height, r.height = e;
}
m$1(Cr, "swapWidthHeightOne");
function pe(r) {
    Zr$1(/*#__PURE__*/ r.nodes(), function(e) {
        nr(/*#__PURE__*/ r.node(e));
    }), Zr$1(/*#__PURE__*/ r.edges(), function(e) {
        var n = /*#__PURE__*/ r.edge(e);
        Zr$1(n.points, nr), Object.prototype.hasOwnProperty.call(n, "y") && nr(n);
    });
}
m$1(pe, "reverseY");
function nr(r) {
    r.y = -r.y;
}
m$1(nr, "reverseYOne");
function me(r) {
    Zr$1(/*#__PURE__*/ r.nodes(), function(e) {
        tr(/*#__PURE__*/ r.node(e));
    }), Zr$1(/*#__PURE__*/ r.edges(), function(e) {
        var n = /*#__PURE__*/ r.edge(e);
        Zr$1(n.points, tr), Object.prototype.hasOwnProperty.call(n, "x") && tr(n);
    });
}
m$1(me, "swapXY");
function tr(r) {
    var e = r.x;
    r.x = r.y, r.y = e;
}
m$1(tr, "swapXYOne");
var H = class {
    static{
        m$1(this, "List");
    }
    constructor(){
        var e = {};
        e._next = e._prev = e, this._sentinel = e;
    }
    dequeue() {
        var e = this._sentinel, n = e._prev;
        if (n !== e) return Sr(n), n;
    }
    enqueue(e) {
        var n = this._sentinel;
        e._prev && e._next && Sr(e), e._next = n._next, n._next._prev = e, n._next = e, e._prev = n;
    }
    toString() {
        for(var e = [], n = this._sentinel, t = n._prev; t !== n;)e.push(/*#__PURE__*/ JSON.stringify(t, _e)), t = t._prev;
        return "[" + e.join(", ") + "]";
    }
};
function Sr(r) {
    r._prev._next = r._next, r._next._prev = r._prev, delete r._next, delete r._prev;
}
m$1(Sr, "unlink");
function _e(r, e) {
    if (r !== "_next" && r !== "_prev") return e;
}
m$1(_e, "filterOutLinks");
var we = /*#__PURE__*/ Mt(1);
function Mr(r, e) {
    if (r.nodeCount() <= 1) return [];
    var n = /*#__PURE__*/ Ee(r, e || we), t = /*#__PURE__*/ be(n.graph, n.buckets, n.zeroIdx);
    return Qr$1(/*#__PURE__*/ Jr$1(t, function(o) {
        return r.outEdges(o.v, o.w);
    }));
}
m$1(Mr, "greedyFAS");
function be(r, e, n) {
    for(var t = [], o = e[e.length - 1], a = e[0], i; r.nodeCount();){
        for(; i = /*#__PURE__*/ a.dequeue();)or(r, e, n, i);
        for(; i = /*#__PURE__*/ o.dequeue();)or(r, e, n, i);
        if (r.nodeCount()) {
            for(var f = e.length - 2; f > 0; --f)if (i = /*#__PURE__*/ e[f].dequeue(), i) {
                t = /*#__PURE__*/ t.concat(/*#__PURE__*/ or(r, e, n, i, true));
                break;
            }
        }
    }
    return t;
}
m$1(be, "doGreedyFAS");
function or(r, e, n, t, o) {
    var a = o ? [] : void 0;
    return Zr$1(/*#__PURE__*/ r.inEdges(t.v), function(i) {
        var f = /*#__PURE__*/ r.edge(i), d = /*#__PURE__*/ r.node(i.v);
        o && a.push({
            v: i.v,
            w: i.w
        }), d.out -= f, ar(e, n, d);
    }), Zr$1(/*#__PURE__*/ r.outEdges(t.v), function(i) {
        var f = /*#__PURE__*/ r.edge(i), d = i.w, c = /*#__PURE__*/ r.node(d);
        c.in -= f, ar(e, n, c);
    }), r.removeNode(t.v), a;
}
m$1(or, "removeNode");
function Ee(r, e) {
    var n = new m, t = 0, o = 0;
    Zr$1(/*#__PURE__*/ r.nodes(), function(f) {
        n.setNode(f, {
            v: f,
            in: 0,
            out: 0
        });
    }), Zr$1(/*#__PURE__*/ r.edges(), function(f) {
        var d = n.edge(f.v, f.w) || 0, c = /*#__PURE__*/ e(f), h = d + c;
        n.setEdge(f.v, f.w, h), o = /*#__PURE__*/ Math.max(o, n.node(f.v).out += c), t = /*#__PURE__*/ Math.max(t, n.node(f.w).in += c);
    });
    var a = /*#__PURE__*/ Jm(o + t + 3).map(function() {
        return new H;
    }), i = t + 1;
    return Zr$1(/*#__PURE__*/ n.nodes(), function(f) {
        ar(a, i, /*#__PURE__*/ n.node(f));
    }), {
        graph: n,
        buckets: a,
        zeroIdx: i
    };
}
m$1(Ee, "buildState");
function ar(r, e, n) {
    n.out ? n.in ? r[n.out - n.in + e].enqueue(n) : r[r.length - 1].enqueue(n) : r[0].enqueue(n);
}
m$1(ar, "assignBucket");
function Fr(r) {
    var e = r.graph().acyclicer === "greedy" ? Mr(r, /*#__PURE__*/ n(r)) : ye(r);
    Zr$1(e, function(t) {
        var o = /*#__PURE__*/ r.edge(t);
        r.removeEdge(t), o.forwardName = t.name, o.reversed = true, r.setEdge(t.w, t.v, o, /*#__PURE__*/ lp("rev"));
    });
    function n(t) {
        return function(o) {
            return t.edge(o).weight;
        };
    }
    m$1(n, "weightFn");
}
m$1(Fr, "run");
function ye(r) {
    var e = [], n = {}, t = {};
    function o(a) {
        Object.prototype.hasOwnProperty.call(t, a) || (t[a] = true, n[a] = true, Zr$1(/*#__PURE__*/ r.outEdges(a), function(i) {
            Object.prototype.hasOwnProperty.call(n, i.w) ? e.push(i) : o(i.w);
        }), delete n[a]);
    }
    return m$1(o, "dfs"), Zr$1(/*#__PURE__*/ r.nodes(), o), e;
}
m$1(ye, "dfsFAS");
function Gr(r) {
    Zr$1(/*#__PURE__*/ r.edges(), function(e) {
        var n = /*#__PURE__*/ r.edge(e);
        if (n.reversed) {
            r.removeEdge(e);
            var t = n.forwardName;
            delete n.reversed, delete n.forwardName, r.setEdge(e.w, e.v, n, t);
        }
    });
}
m$1(Gr, "undo");
function Br(r) {
    r.graph().dummyChains = [], Zr$1(/*#__PURE__*/ r.edges(), function(e) {
        xe(r, e);
    });
}
m$1(Br, "run");
function xe(r, e) {
    var n = e.v, t = r.node(n).rank, o = e.w, a = r.node(o).rank, i = e.name, f = /*#__PURE__*/ r.edge(e), d = f.labelRank;
    if (a !== t + 1) {
        r.removeEdge(e);
        var c = void 0, h, l;
        for(l = 0, ++t; t < a; ++l, ++t)f.points = [], c = {
            width: 0,
            height: 0,
            edgeLabel: f,
            edgeObj: e,
            rank: t
        }, h = /*#__PURE__*/ g(r, "edge", c, "_d"), t === d && (c.width = f.width, c.height = f.height, c.dummy = "edge-label", c.labelpos = f.labelpos), r.setEdge(n, h, {
            weight: f.weight
        }, i), l === 0 && r.graph().dummyChains.push(h), n = h;
        r.setEdge(n, o, {
            weight: f.weight
        }, i);
    }
}
m$1(xe, "normalizeEdge");
function Ar(r) {
    Zr$1(r.graph().dummyChains, function(e) {
        var n = /*#__PURE__*/ r.node(e), t = n.edgeLabel, o;
        for(r.setEdge(n.edgeObj, t); n.dummy;)o = r.successors(e)[0], r.removeNode(e), t.points.push({
            x: n.x,
            y: n.y
        }), n.dummy === "edge-label" && (t.x = n.x, t.y = n.y, t.width = n.width, t.height = n.height), e = o, n = /*#__PURE__*/ r.node(e);
    });
}
m$1(Ar, "undo");
function U(r) {
    var e = {};
    function n(t) {
        var o = /*#__PURE__*/ r.node(t);
        if (Object.prototype.hasOwnProperty.call(e, t)) return o.rank;
        e[t] = true;
        var a = /*#__PURE__*/ ym(/*#__PURE__*/ Jr$1(/*#__PURE__*/ r.outEdges(t), function(i) {
            return n(i.w) - r.edge(i).minlen;
        }));
        return (a === Number.POSITIVE_INFINITY || a === void 0 || a === null) && (a = 0), o.rank = a;
    }
    m$1(n, "dfs"), Zr$1(/*#__PURE__*/ r.sources(), n);
}
m$1(U, "longestPath");
function M(r, e) {
    return r.node(e.w).rank - r.node(e.v).rank - r.edge(e).minlen;
}
m$1(M, "slack");
function J(r) {
    var e = new m({
        directed: false
    }), n = r.nodes()[0], t = /*#__PURE__*/ r.nodeCount();
    e.setNode(n, {});
    for(var o, a; ke(e, r) < t;)o = /*#__PURE__*/ ge(e, r), a = e.hasNode(o.v) ? M(r, o) : -M(r, o), Ne(e, r, a);
    return e;
}
m$1(J, "feasibleTree");
function ke(r, e) {
    function n(t) {
        Zr$1(/*#__PURE__*/ e.nodeEdges(t), function(o) {
            var a = o.v, i = t === a ? o.w : a;
            !r.hasNode(i) && !M(e, o) && (r.setNode(i, {}), r.setEdge(t, i, {}), n(i));
        });
    }
    return m$1(n, "dfs"), Zr$1(/*#__PURE__*/ r.nodes(), n), r.nodeCount();
}
m$1(ke, "tightTree");
function ge(r, e) {
    return Om(/*#__PURE__*/ e.edges(), function(n) {
        if (r.hasNode(n.v) !== r.hasNode(n.w)) return M(e, n);
    });
}
m$1(ge, "findMinSlackEdge");
function Ne(r, e, n) {
    Zr$1(/*#__PURE__*/ r.nodes(), function(t) {
        e.node(t).rank += n;
    });
}
m$1(Ne, "shiftRanks");
ir.CycleException = W;
function ir(r) {
    var e = {}, n = {}, t = [];
    function o(a) {
        if (Object.prototype.hasOwnProperty.call(n, a)) throw new W;
        Object.prototype.hasOwnProperty.call(e, a) || (n[a] = true, e[a] = true, Zr$1(/*#__PURE__*/ r.predecessors(a), o), delete n[a], t.push(a));
    }
    if (m$1(o, "visit"), Zr$1(/*#__PURE__*/ r.sinks(), o), tp(e) !== r.nodeCount()) throw new W;
    return t;
}
m$1(ir, "topsort");
function W() {}
m$1(W, "CycleException");
W.prototype = new Error;
function K(r, e, n) {
    N(e) || (e = [
        e
    ]);
    var t = /*#__PURE__*/ (r.isDirected() ? r.successors : r.neighbors).bind(r), o = [], a = {};
    return Zr$1(e, function(i) {
        if (!r.hasNode(i)) throw new Error("Graph does not have node: " + i);
        Yr(r, i, n === "post", a, t, o);
    }), o;
}
m$1(K, "dfs");
function Yr(r, e, n, t, o, a) {
    Object.prototype.hasOwnProperty.call(t, e) || (t[e] = true, n || a.push(e), Zr$1(/*#__PURE__*/ o(e), function(i) {
        Yr(r, i, n, t, o, a);
    }), n && a.push(e));
}
m$1(Yr, "doDfs");
function sr(r, e) {
    return K(r, e, "post");
}
m$1(sr, "postorder");
function fr(r, e) {
    return K(r, e, "pre");
}
m$1(fr, "preorder");
j.initLowLimValues = dr;
j.initCutValues = ur;
j.calcCutValue = Ur;
j.leaveEdge = qr;
j.enterEdge = Xr;
j.exchangeEdges = Hr;
function j(r) {
    r = /*#__PURE__*/ xr(r), U(r);
    var e = /*#__PURE__*/ J(r);
    dr(e), ur(e, r);
    for(var n, t; n = /*#__PURE__*/ qr(e);)t = /*#__PURE__*/ Xr(e, r, n), Hr(e, r, n, t);
}
m$1(j, "networkSimplex");
function ur(r, e) {
    var n = /*#__PURE__*/ sr(r, /*#__PURE__*/ r.nodes());
    n = /*#__PURE__*/ n.slice(0, n.length - 1), Zr$1(n, function(t) {
        Ce(r, e, t);
    });
}
m$1(ur, "initCutValues");
function Ce(r, e, n) {
    var t = /*#__PURE__*/ r.node(n), o = t.parent;
    r.edge(n, o).cutvalue = /*#__PURE__*/ Ur(r, e, n);
}
m$1(Ce, "assignCutValue");
function Ur(r, e, n) {
    var t = /*#__PURE__*/ r.node(n), o = t.parent, a = true, i = /*#__PURE__*/ e.edge(n, o), f = 0;
    return i || (a = false, i = /*#__PURE__*/ e.edge(o, n)), f = i.weight, Zr$1(/*#__PURE__*/ e.nodeEdges(n), function(d) {
        var c = d.v === n, h = c ? d.w : d.v;
        if (h !== o) {
            var l = c === a, p = e.edge(d).weight;
            if (f += l ? p : -p, je(r, n, h)) {
                var m = r.edge(n, h).cutvalue;
                f += l ? -m : m;
            }
        }
    }), f;
}
m$1(Ur, "calcCutValue");
function dr(r, e) {
    arguments.length < 2 && (e = r.nodes()[0]), Wr(r, {}, 1, e);
}
m$1(dr, "initLowLimValues");
function Wr(r, e, n, t, o) {
    var a = n, i = /*#__PURE__*/ r.node(t);
    return e[t] = true, Zr$1(/*#__PURE__*/ r.neighbors(t), function(f) {
        Object.prototype.hasOwnProperty.call(e, f) || (n = /*#__PURE__*/ Wr(r, e, n, f, t));
    }), i.low = a, i.lim = n++, o ? i.parent = o : delete i.parent, n;
}
m$1(Wr, "dfsAssignLowLim");
function qr(r) {
    return Ki(/*#__PURE__*/ r.edges(), function(e) {
        return r.edge(e).cutvalue < 0;
    });
}
m$1(qr, "leaveEdge");
function Xr(r, e, n) {
    var t = n.v, o = n.w;
    e.hasEdge(t, o) || (t = n.w, o = n.v);
    var a = /*#__PURE__*/ r.node(t), i = /*#__PURE__*/ r.node(o), f = a, d = false;
    a.lim > i.lim && (f = i, d = true);
    var c = /*#__PURE__*/ fn$1(/*#__PURE__*/ e.edges(), function(h) {
        return d === zr(r, /*#__PURE__*/ r.node(h.v), f) && d !== zr(r, /*#__PURE__*/ r.node(h.w), f);
    });
    return Om(c, function(h) {
        return M(e, h);
    });
}
m$1(Xr, "enterEdge");
function Hr(r, e, n, t) {
    var o = n.v, a = n.w;
    r.removeEdge(o, a), r.setEdge(t.v, t.w, {}), dr(r), ur(r, e), Te(r, e);
}
m$1(Hr, "exchangeEdges");
function Te(r, e) {
    var n = /*#__PURE__*/ Ki(/*#__PURE__*/ r.nodes(), function(o) {
        return !e.node(o).parent;
    }), t = /*#__PURE__*/ fr(r, n);
    t = /*#__PURE__*/ t.slice(1), Zr$1(t, function(o) {
        var a = r.node(o).parent, i = /*#__PURE__*/ e.edge(o, a), f = false;
        i || (i = /*#__PURE__*/ e.edge(a, o), f = true), e.node(o).rank = e.node(a).rank + (f ? i.minlen : -i.minlen);
    });
}
m$1(Te, "updateRanks");
function je(r, e, n) {
    return r.hasEdge(e, n);
}
m$1(je, "isTreeEdge");
function zr(r, e, n) {
    return n.low <= e.lim && e.lim <= n.lim;
}
m$1(zr, "isDescendant");
function cr(r) {
    switch(r.graph().ranker){
        case "network-simplex":
            Jr(r);
            break;
        case "tight-tree":
            Se(r);
            break;
        case "longest-path":
            Re(r);
            break;
        default:
            Jr(r);
    }
}
m$1(cr, "rank");
var Re = U;
function Se(r) {
    U(r), J(r);
}
m$1(Se, "tightTreeRanker");
function Jr(r) {
    j(r);
}
m$1(Jr, "networkSimplexRanker");
function Kr(r) {
    var e = /*#__PURE__*/ g(r, "root", {}, "_root"), n = /*#__PURE__*/ Me(r), t = bn$1(/*#__PURE__*/ Xr$1(n)) - 1, o = 2 * t + 1;
    r.graph().nestingRoot = e, Zr$1(/*#__PURE__*/ r.edges(), function(i) {
        r.edge(i).minlen *= o;
    });
    var a = Fe(r) + 1;
    Zr$1(/*#__PURE__*/ r.children(), function(i) {
        Qr(r, e, o, a, t, n, i);
    }), r.graph().nodeRankFactor = o;
}
m$1(Kr, "run");
function Qr(r, e, n, t, o, a, i) {
    var f = /*#__PURE__*/ r.children(i);
    if (!f.length) {
        i !== e && r.setEdge(e, i, {
            weight: 0,
            minlen: n
        });
        return;
    }
    var d = /*#__PURE__*/ rr(r, "_bt"), c = /*#__PURE__*/ rr(r, "_bb"), h = /*#__PURE__*/ r.node(i);
    r.setParent(d, i), h.borderTop = d, r.setParent(c, i), h.borderBottom = c, Zr$1(f, function(l) {
        Qr(r, e, n, t, o, a, l);
        var p = /*#__PURE__*/ r.node(l), m = p.borderTop ? p.borderTop : l, v = p.borderBottom ? p.borderBottom : l, b = p.borderTop ? t : 2 * t, D = m !== v ? 1 : o - a[i] + 1;
        r.setEdge(d, m, {
            weight: b,
            minlen: D,
            nestingEdge: true
        }), r.setEdge(v, c, {
            weight: b,
            minlen: D,
            nestingEdge: true
        });
    }), r.parent(i) || r.setEdge(e, d, {
        weight: 0,
        minlen: o + a[i]
    });
}
m$1(Qr, "dfs");
function Me(r) {
    var e = {};
    function n(t, o) {
        var a = /*#__PURE__*/ r.children(t);
        a && a.length && Zr$1(a, function(i) {
            n(i, o + 1);
        }), e[t] = o;
    }
    return m$1(n, "dfs"), Zr$1(/*#__PURE__*/ r.children(), function(t) {
        n(t, 1);
    }), e;
}
m$1(Me, "treeDepths");
function Fe(r) {
    return Rn(/*#__PURE__*/ r.edges(), function(e, n) {
        return e + r.edge(n).weight;
    }, 0);
}
m$1(Fe, "sumWeights");
function Zr(r) {
    var e = /*#__PURE__*/ r.graph();
    r.removeNode(e.nestingRoot), delete e.nestingRoot, Zr$1(/*#__PURE__*/ r.edges(), function(n) {
        var t = /*#__PURE__*/ r.edge(n);
        t.nestingEdge && r.removeEdge(n);
    });
}
m$1(Zr, "cleanup");
function $r(r, e, n) {
    var t = {}, o;
    Zr$1(n, function(a) {
        for(var i = /*#__PURE__*/ r.parent(a), f, d; i;){
            if (f = /*#__PURE__*/ r.parent(i), f ? (d = t[f], t[f] = i) : (d = o, o = i), d && d !== i) {
                e.setEdge(d, i);
                return;
            }
            i = f;
        }
    });
}
m$1($r, "addSubgraphConstraints");
function re(r, e, n) {
    var t = /*#__PURE__*/ Ve(r), o = /*#__PURE__*/ new m({
        compound: true
    }).setGraph({
        root: t
    }).setDefaultNodeLabel(function(a) {
        return r.node(a);
    });
    return Zr$1(/*#__PURE__*/ r.nodes(), function(a) {
        var i = /*#__PURE__*/ r.node(a), f = /*#__PURE__*/ r.parent(a);
        (i.rank === e || i.minRank <= e && e <= i.maxRank) && (o.setNode(a), o.setParent(a, f || t), Zr$1(/*#__PURE__*/ r[n](a), function(d) {
            var c = d.v === a ? d.w : d.v, h = /*#__PURE__*/ o.edge(c, a), l = sn$1(h) ? 0 : h.weight;
            o.setEdge(c, a, {
                weight: r.edge(d).weight + l
            });
        }), Object.prototype.hasOwnProperty.call(i, "minRank") && o.setNode(a, {
            borderLeft: i.borderLeft[e],
            borderRight: i.borderRight[e]
        }));
    }), o;
}
m$1(re, "buildLayerGraph");
function Ve(r) {
    for(var e; r.hasNode(e = /*#__PURE__*/ lp("_root")););
    return e;
}
m$1(Ve, "createRootNode");
function ee(r, e) {
    for(var n = 0, t = 1; t < e.length; ++t)n += /*#__PURE__*/ Be(r, e[t - 1], e[t]);
    return n;
}
m$1(ee, "crossCount");
function Be(r, e, n) {
    for(var t = /*#__PURE__*/ gp(n, /*#__PURE__*/ Jr$1(n, function(c, h) {
        return h;
    })), o = /*#__PURE__*/ Qr$1(/*#__PURE__*/ Jr$1(e, function(c) {
        return np(/*#__PURE__*/ Jr$1(/*#__PURE__*/ r.outEdges(c), function(h) {
            return {
                pos: t[h.w],
                weight: r.edge(h).weight
            };
        }), "pos");
    })), a = 1; a < n.length;)a <<= 1;
    var i = 2 * a - 1;
    a -= 1;
    var f = /*#__PURE__*/ Jr$1(new Array(i), function() {
        return 0;
    }), d = 0;
    return Zr$1(/*#__PURE__*/ o.forEach(function(c) {
        var h = c.pos + a;
        f[h] += c.weight;
        for(var l = 0; h > 0;)h % 2 && (l += f[h + 1]), h = h - 1 >> 1, f[h] += c.weight;
        d += c.weight * l;
    })), d;
}
m$1(Be, "twoLayerCrossCount");
function ne(r) {
    var e = {}, n = /*#__PURE__*/ fn$1(/*#__PURE__*/ r.nodes(), function(f) {
        return !r.children(f).length;
    }), t = /*#__PURE__*/ bn$1(/*#__PURE__*/ Jr$1(n, function(f) {
        return r.node(f).rank;
    })), o = /*#__PURE__*/ Jr$1(/*#__PURE__*/ Jm(t + 1), function() {
        return [];
    });
    function a(f) {
        if (!fm(e, f)) {
            e[f] = true;
            var d = /*#__PURE__*/ r.node(f);
            o[d.rank].push(f), Zr$1(/*#__PURE__*/ r.successors(f), a);
        }
    }
    m$1(a, "dfs");
    var i = /*#__PURE__*/ np(n, function(f) {
        return r.node(f).rank;
    });
    return Zr$1(i, a), o;
}
m$1(ne, "initOrder");
function te(r, e) {
    return Jr$1(e, function(n) {
        var t = /*#__PURE__*/ r.inEdges(n);
        if (t.length) {
            var o = /*#__PURE__*/ Rn(t, function(a, i) {
                var f = /*#__PURE__*/ r.edge(i), d = /*#__PURE__*/ r.node(i.v);
                return {
                    sum: a.sum + f.weight * d.order,
                    weight: a.weight + f.weight
                };
            }, {
                sum: 0,
                weight: 0
            });
            return {
                v: n,
                barycenter: o.sum / o.weight,
                weight: o.weight
            };
        } else return {
            v: n
        };
    });
}
m$1(te, "barycenter");
function oe(r, e) {
    var n = {};
    Zr$1(r, function(o, a) {
        var i = n[o.v] = {
            indegree: 0,
            in: [],
            out: [],
            vs: [
                o.v
            ],
            i: a
        };
        sn$1(o.barycenter) || (i.barycenter = o.barycenter, i.weight = o.weight);
    }), Zr$1(/*#__PURE__*/ e.edges(), function(o) {
        var a = n[o.v], i = n[o.w];
        !sn$1(a) && !sn$1(i) && (i.indegree++, a.out.push(n[o.w]));
    });
    var t = /*#__PURE__*/ fn$1(n, function(o) {
        return !o.indegree;
    });
    return Ae(t);
}
m$1(oe, "resolveConflicts");
function Ae(r) {
    var e = [];
    function n(a) {
        return function(i) {
            i.merged || (sn$1(i.barycenter) || sn$1(a.barycenter) || i.barycenter >= a.barycenter) && De(a, i);
        };
    }
    m$1(n, "handleIn");
    function t(a) {
        return function(i) {
            i.in.push(a), --i.indegree === 0 && r.push(i);
        };
    }
    for(m$1(t, "handleOut"); r.length;){
        var o = /*#__PURE__*/ r.pop();
        e.push(o), Zr$1(/*#__PURE__*/ o.in.reverse(), /*#__PURE__*/ n(o)), Zr$1(o.out, /*#__PURE__*/ t(o));
    }
    return Jr$1(/*#__PURE__*/ fn$1(e, function(a) {
        return !a.merged;
    }), function(a) {
        return Tn$1(a, [
            "vs",
            "i",
            "barycenter",
            "weight"
        ]);
    });
}
m$1(Ae, "doResolveConflicts");
function De(r, e) {
    var n = 0, t = 0;
    r.weight && (n += r.barycenter * r.weight, t += r.weight), e.weight && (n += e.barycenter * e.weight, t += e.weight), r.vs = /*#__PURE__*/ e.vs.concat(r.vs), r.barycenter = n / t, r.weight = t, r.i = /*#__PURE__*/ Math.min(e.i, r.i), e.merged = true;
}
m$1(De, "mergeEntries");
function ie(r, e) {
    var n = /*#__PURE__*/ Nr(r, function(h) {
        return Object.prototype.hasOwnProperty.call(h, "barycenter");
    }), t = n.lhs, o = /*#__PURE__*/ np(n.rhs, function(h) {
        return -h.i;
    }), a = [], i = 0, f = 0, d = 0;
    t.sort(/*#__PURE__*/ Ye(!!e)), d = /*#__PURE__*/ ae(a, o, d), Zr$1(t, function(h) {
        d += h.vs.length, a.push(h.vs), i += h.barycenter * h.weight, f += h.weight, d = /*#__PURE__*/ ae(a, o, d);
    });
    var c = {
        vs: /*#__PURE__*/ Qr$1(a)
    };
    return f && (c.barycenter = i / f, c.weight = f), c;
}
m$1(ie, "sort");
function ae(r, e, n) {
    for(var t; e.length && (t = /*#__PURE__*/ Df(e)).i <= n;)e.pop(), r.push(t.vs), n++;
    return n;
}
m$1(ae, "consumeUnsortable");
function Ye(r) {
    return function(e, n) {
        return e.barycenter < n.barycenter ? -1 : e.barycenter > n.barycenter ? 1 : r ? n.i - e.i : e.i - n.i;
    };
}
m$1(Ye, "compareWithBias");
function hr(r, e, n, t) {
    var o = /*#__PURE__*/ r.children(e), a = /*#__PURE__*/ r.node(e), i = a ? a.borderLeft : void 0, f = a ? a.borderRight : void 0, d = {};
    i && (o = /*#__PURE__*/ fn$1(o, function(v) {
        return v !== i && v !== f;
    }));
    var c = /*#__PURE__*/ te(r, o);
    Zr$1(c, function(v) {
        if (r.children(v.v).length) {
            var b = /*#__PURE__*/ hr(r, v.v, n, t);
            d[v.v] = b, Object.prototype.hasOwnProperty.call(b, "barycenter") && Ue(v, b);
        }
    });
    var h = /*#__PURE__*/ oe(c, n);
    ze(h, d);
    var l = /*#__PURE__*/ ie(h, t);
    if (i && (l.vs = /*#__PURE__*/ Qr$1([
        i,
        l.vs,
        f
    ]), r.predecessors(i).length)) {
        var p = /*#__PURE__*/ r.node(r.predecessors(i)[0]), m = /*#__PURE__*/ r.node(r.predecessors(f)[0]);
        Object.prototype.hasOwnProperty.call(l, "barycenter") || (l.barycenter = 0, l.weight = 0), l.barycenter = (l.barycenter * l.weight + p.order + m.order) / (l.weight + 2), l.weight += 2;
    }
    return l;
}
m$1(hr, "sortSubgraph");
function ze(r, e) {
    Zr$1(r, function(n) {
        n.vs = /*#__PURE__*/ Qr$1(/*#__PURE__*/ n.vs.map(function(t) {
            return e[t] ? e[t].vs : t;
        }));
    });
}
m$1(ze, "expandSubgraphs");
function Ue(r, e) {
    sn$1(r.barycenter) ? (r.barycenter = e.barycenter, r.weight = e.weight) : (r.barycenter = (r.barycenter * r.weight + e.barycenter * e.weight) / (r.weight + e.weight), r.weight += e.weight);
}
m$1(Ue, "mergeBarycenters");
function ue(r) {
    var e = /*#__PURE__*/ er(r), n = /*#__PURE__*/ se(r, /*#__PURE__*/ Jm(1, e + 1), "inEdges"), t = /*#__PURE__*/ se(r, /*#__PURE__*/ Jm(e - 1, -1, -1), "outEdges"), o = /*#__PURE__*/ ne(r);
    fe(r, o);
    for(var a = Number.POSITIVE_INFINITY, i, f = 0, d = 0; d < 4; ++f, ++d){
        We(f % 2 ? n : t, f % 4 >= 2), o = /*#__PURE__*/ C(r);
        var c = /*#__PURE__*/ ee(r, o);
        c < a && (d = 0, i = /*#__PURE__*/ hi(o), a = c);
    }
    fe(r, i);
}
m$1(ue, "order");
function se(r, e, n) {
    return Jr$1(e, function(t) {
        return re(r, t, n);
    });
}
m$1(se, "buildLayerGraphs");
function We(r, e) {
    var n = new m;
    Zr$1(r, function(t) {
        var o = t.graph().root, a = /*#__PURE__*/ hr(t, o, n, e);
        Zr$1(a.vs, function(i, f) {
            t.node(i).order = f;
        }), $r(t, n, a.vs);
    });
}
m$1(We, "sweepLayerGraphs");
function fe(r, e) {
    Zr$1(e, function(n) {
        Zr$1(n, function(t, o) {
            r.node(t).order = o;
        });
    });
}
m$1(fe, "assignOrder");
function de(r) {
    var e = /*#__PURE__*/ Xe(r);
    Zr$1(r.graph().dummyChains, function(n) {
        for(var t = /*#__PURE__*/ r.node(n), o = t.edgeObj, a = /*#__PURE__*/ qe(r, e, o.v, o.w), i = a.path, f = a.lca, d = 0, c = i[d], h = true; n !== o.w;){
            if (t = /*#__PURE__*/ r.node(n), h) {
                for(; (c = i[d]) !== f && r.node(c).maxRank < t.rank;)d++;
                c === f && (h = false);
            }
            if (!h) {
                for(; d < i.length - 1 && r.node(c = i[d + 1]).minRank <= t.rank;)d++;
                c = i[d];
            }
            r.setParent(n, c), n = r.successors(n)[0];
        }
    });
}
m$1(de, "parentDummyChains");
function qe(r, e, n, t) {
    var o = [], a = [], i = /*#__PURE__*/ Math.min(e[n].low, e[t].low), f = /*#__PURE__*/ Math.max(e[n].lim, e[t].lim), d, c;
    d = n;
    do d = /*#__PURE__*/ r.parent(d), o.push(d);
    while (d && (e[d].low > i || f > e[d].lim));
    for(c = d, d = t; (d = /*#__PURE__*/ r.parent(d)) !== c;)a.push(d);
    return {
        path: /*#__PURE__*/ o.concat(/*#__PURE__*/ a.reverse()),
        lca: c
    };
}
m$1(qe, "findPath");
function Xe(r) {
    var e = {}, n = 0;
    function t(o) {
        var a = n;
        Zr$1(/*#__PURE__*/ r.children(o), t), e[o] = {
            low: a,
            lim: n++
        };
    }
    return m$1(t, "dfs"), Zr$1(/*#__PURE__*/ r.children(), t), e;
}
m$1(Xe, "postorder");
function He(r, e) {
    var n = {};
    function t(o, a) {
        var i = 0, f = 0, d = o.length, c = /*#__PURE__*/ Df(a);
        return Zr$1(a, function(h, l) {
            var p = /*#__PURE__*/ Ke(r, h), m = p ? r.node(p).order : d;
            (p || h === c) && (Zr$1(/*#__PURE__*/ a.slice(f, l + 1), function(v) {
                Zr$1(/*#__PURE__*/ r.predecessors(v), function(b) {
                    var D = /*#__PURE__*/ r.node(b), mr = D.order;
                    (mr < i || m < mr) && !(D.dummy && r.node(v).dummy) && ce(n, b, v);
                });
            }), f = l + 1, i = m);
        }), a;
    }
    return m$1(t, "visitLayer"), Rn(e, t), n;
}
m$1(He, "findType1Conflicts");
function Je(r, e) {
    var n = {};
    function t(a, i, f, d, c) {
        var h;
        Zr$1(/*#__PURE__*/ Jm(i, f), function(l) {
            h = a[l], r.node(h).dummy && Zr$1(/*#__PURE__*/ r.predecessors(h), function(p) {
                var m = /*#__PURE__*/ r.node(p);
                m.dummy && (m.order < d || m.order > c) && ce(n, p, h);
            });
        });
    }
    m$1(t, "scan");
    function o(a, i) {
        var f = -1, d, c = 0;
        return Zr$1(i, function(h, l) {
            if (r.node(h).dummy === "border") {
                var p = /*#__PURE__*/ r.predecessors(h);
                p.length && (d = r.node(p[0]).order, t(i, c, l, f, d), c = l, f = d);
            }
            t(i, c, i.length, d, a.length);
        }), i;
    }
    return m$1(o, "visitLayer"), Rn(e, o), n;
}
m$1(Je, "findType2Conflicts");
function Ke(r, e) {
    if (r.node(e).dummy) return Ki(/*#__PURE__*/ r.predecessors(e), function(n) {
        return r.node(n).dummy;
    });
}
m$1(Ke, "findOtherInnerSegmentNode");
function ce(r, e, n) {
    if (e > n) {
        var t = e;
        e = n, n = t;
    }
    var o = r[e];
    o || (r[e] = o = {}), o[n] = true;
}
m$1(ce, "addConflict");
function Qe(r, e, n) {
    if (e > n) {
        var t = e;
        e = n, n = t;
    }
    return !!r[e] && Object.prototype.hasOwnProperty.call(r[e], n);
}
m$1(Qe, "hasConflict");
function Ze(r, e, n, t) {
    var o = {}, a = {}, i = {};
    return Zr$1(e, function(f) {
        Zr$1(f, function(d, c) {
            o[d] = d, a[d] = d, i[d] = c;
        });
    }), Zr$1(e, function(f) {
        var d = -1;
        Zr$1(f, function(c) {
            var h = /*#__PURE__*/ t(c);
            if (h.length) {
                h = /*#__PURE__*/ np(h, function(b) {
                    return i[b];
                });
                for(var l = (h.length - 1) / 2, p = /*#__PURE__*/ Math.floor(l), m = /*#__PURE__*/ Math.ceil(l); p <= m; ++p){
                    var v = h[p];
                    a[c] === c && d < i[v] && !Qe(n, c, v) && (a[v] = c, a[c] = o[c] = o[v], d = i[v]);
                }
            }
        });
    }), {
        root: o,
        align: a
    };
}
m$1(Ze, "verticalAlignment");
function $e(r, e, n, t, o) {
    var a = {}, i = /*#__PURE__*/ rn(r, e, n, o), f = o ? "borderLeft" : "borderRight";
    function d(l, p) {
        for(var m = /*#__PURE__*/ i.nodes(), v = /*#__PURE__*/ m.pop(), b = {}; v;)b[v] ? l(v) : (b[v] = true, m.push(v), m = /*#__PURE__*/ m.concat(/*#__PURE__*/ p(v))), v = /*#__PURE__*/ m.pop();
    }
    m$1(d, "iterate");
    function c(l) {
        a[l] = /*#__PURE__*/ i.inEdges(l).reduce(function(p, m) {
            return Math.max(p, a[m.v] + i.edge(m));
        }, 0);
    }
    m$1(c, "pass1");
    function h(l) {
        var p = /*#__PURE__*/ i.outEdges(l).reduce(function(v, b) {
            return Math.min(v, a[b.w] - i.edge(b));
        }, Number.POSITIVE_INFINITY), m = /*#__PURE__*/ r.node(l);
        p !== Number.POSITIVE_INFINITY && m.borderType !== f && (a[l] = /*#__PURE__*/ Math.max(a[l], p));
    }
    return m$1(h, "pass2"), d(c, /*#__PURE__*/ i.predecessors.bind(i)), d(h, /*#__PURE__*/ i.successors.bind(i)), Zr$1(t, function(l) {
        a[l] = a[n[l]];
    }), a;
}
m$1($e, "horizontalCompaction");
function rn(r, e, n, t) {
    var o = new m, a = /*#__PURE__*/ r.graph(), i = /*#__PURE__*/ on(a.nodesep, a.edgesep, t);
    return Zr$1(e, function(f) {
        var d;
        Zr$1(f, function(c) {
            var h = n[c];
            if (o.setNode(h), d) {
                var l = n[d], p = /*#__PURE__*/ o.edge(l, h);
                o.setEdge(l, h, /*#__PURE__*/ Math.max(/*#__PURE__*/ i(r, c, d), p || 0));
            }
            d = c;
        });
    }), o;
}
m$1(rn, "buildBlockGraph");
function en(r, e) {
    return Om(/*#__PURE__*/ Xr$1(e), function(n) {
        var t = Number.NEGATIVE_INFINITY, o = Number.POSITIVE_INFINITY;
        return Zi(n, function(a, i) {
            var f = an(r, i) / 2;
            t = /*#__PURE__*/ Math.max(a + f, t), o = /*#__PURE__*/ Math.min(a - f, o);
        }), t - o;
    });
}
m$1(en, "findSmallestWidthAlignment");
function nn(r, e) {
    var n = /*#__PURE__*/ Xr$1(e), t = /*#__PURE__*/ ym(n), o = /*#__PURE__*/ bn$1(n);
    Zr$1([
        "u",
        "d"
    ], function(a) {
        Zr$1([
            "l",
            "r"
        ], function(i) {
            var f = a + i, d = r[f], c;
            if (d !== e) {
                var h = /*#__PURE__*/ Xr$1(d);
                c = i === "l" ? t - ym(h) : o - bn$1(h), c && (r[f] = /*#__PURE__*/ dn$1(d, function(l) {
                    return l + c;
                }));
            }
        });
    });
}
m$1(nn, "alignCoordinates");
function tn(r, e) {
    return dn$1(r.ul, function(n, t) {
        if (e) return r[e.toLowerCase()][t];
        var o = /*#__PURE__*/ np(/*#__PURE__*/ Jr$1(r, t));
        return (o[1] + o[2]) / 2;
    });
}
m$1(tn, "balance");
function he(r) {
    var e = /*#__PURE__*/ C(r), n = /*#__PURE__*/ qs(/*#__PURE__*/ He(r, e), /*#__PURE__*/ Je(r, e)), t = {}, o;
    Zr$1([
        "u",
        "d"
    ], function(i) {
        o = i === "u" ? e : Xr$1(e).reverse(), Zr$1([
            "l",
            "r"
        ], function(f) {
            f === "r" && (o = /*#__PURE__*/ Jr$1(o, function(l) {
                return Xr$1(l).reverse();
            }));
            var d = /*#__PURE__*/ (i === "u" ? r.predecessors : r.successors).bind(r), c = /*#__PURE__*/ Ze(r, o, n, d), h = /*#__PURE__*/ $e(r, o, c.root, c.align, f === "r");
            f === "r" && (h = /*#__PURE__*/ dn$1(h, function(l) {
                return -l;
            })), t[i + f] = h;
        });
    });
    var a = /*#__PURE__*/ en(r, t);
    return nn(t, a), tn(t, r.graph().align);
}
m$1(he, "positionX");
function on(r, e, n) {
    return function(t, o, a) {
        var i = /*#__PURE__*/ t.node(o), f = /*#__PURE__*/ t.node(a), d = 0, c;
        if (d += i.width / 2, Object.prototype.hasOwnProperty.call(i, "labelpos")) switch(i.labelpos.toLowerCase()){
            case "l":
                c = -i.width / 2;
                break;
            case "r":
                c = i.width / 2;
                break;
        }
        if (c && (d += n ? c : -c), c = 0, d += (i.dummy ? e : r) / 2, d += (f.dummy ? e : r) / 2, d += f.width / 2, Object.prototype.hasOwnProperty.call(f, "labelpos")) switch(f.labelpos.toLowerCase()){
            case "l":
                c = f.width / 2;
                break;
            case "r":
                c = -f.width / 2;
                break;
        }
        return c && (d += n ? c : -c), c = 0, d;
    };
}
m$1(on, "sep");
function an(r, e) {
    return r.node(e).width;
}
m$1(an, "width");
function le(r) {
    r = /*#__PURE__*/ X(r), sn(r), Ji(/*#__PURE__*/ he(r), function(e, n) {
        r.node(n).x = e;
    });
}
m$1(le, "position");
function sn(r) {
    var e = /*#__PURE__*/ C(r), n = r.graph().ranksep, t = 0;
    Zr$1(e, function(o) {
        var a = /*#__PURE__*/ bn$1(/*#__PURE__*/ Jr$1(o, function(i) {
            return r.node(i).height;
        }));
        Zr$1(o, function(i) {
            r.node(i).y = t + a / 2;
        }), t += a + n;
    });
}
m$1(sn, "positionY");
function fn(r, e) {
    var n = e && e.debugTiming ? Ir : Or;
    n("layout", ()=>{
        var t = /*#__PURE__*/ n("  buildLayoutGraph", ()=>bn(r));
        n("  runLayout", ()=>un(t, n)), n("  updateInputGraph", ()=>dn(r, t));
    });
}
m$1(fn, "layout");
function un(r, e) {
    e("    makeSpaceForEdgeLabels", ()=>En(r)), e("    removeSelfEdges", ()=>Pn(r)), e("    acyclic", ()=>Fr(r)), e("    nestingGraph.run", ()=>Kr(r)), e("    rank", ()=>cr(/*#__PURE__*/ X(r))), e("    injectEdgeLabelProxies", ()=>yn(r)), e("    removeEmptyRanks", ()=>gr(r)), e("    nestingGraph.cleanup", ()=>Zr(r)), e("    normalizeRanks", ()=>kr(r)), e("    assignRankMinMax", ()=>xn(r)), e("    removeEdgeLabelProxies", ()=>kn(r)), e("    normalize.run", ()=>Br(r)), e("    parentDummyChains", ()=>de(r)), e("    addBorderSegments", ()=>Pr(r)), e("    order", ()=>ue(r)), e("    insertSelfEdges", ()=>Cn(r)), e("    adjustCoordinateSystem", ()=>Tr(r)), e("    position", ()=>le(r)), e("    positionSelfEdges", ()=>Tn(r)), e("    removeBorderNodes", ()=>Ln(r)), e("    normalize.undo", ()=>Ar(r)), e("    fixupEdgeLabelCoords", ()=>In(r)), e("    undoCoordinateSystem", ()=>jr(r)), e("    translateGraph", ()=>gn(r)), e("    assignNodeIntersects", ()=>Nn(r)), e("    reversePoints", ()=>On(r)), e("    acyclic.undo", ()=>Gr(r));
}
m$1(un, "runLayout");
function dn(r, e) {
    Zr$1(/*#__PURE__*/ r.nodes(), function(n) {
        var t = /*#__PURE__*/ r.node(n), o = /*#__PURE__*/ e.node(n);
        t && (t.x = o.x, t.y = o.y, e.children(n).length && (t.width = o.width, t.height = o.height));
    }), Zr$1(/*#__PURE__*/ r.edges(), function(n) {
        var t = /*#__PURE__*/ r.edge(n), o = /*#__PURE__*/ e.edge(n);
        t.points = o.points, Object.prototype.hasOwnProperty.call(o, "x") && (t.x = o.x, t.y = o.y);
    }), r.graph().width = e.graph().width, r.graph().height = e.graph().height;
}
m$1(dn, "updateInputGraph");
var cn = [
    "nodesep",
    "edgesep",
    "ranksep",
    "marginx",
    "marginy"
], hn = {
    ranksep: 50,
    edgesep: 20,
    nodesep: 50,
    rankdir: "tb"
}, ln = [
    "acyclicer",
    "ranker",
    "rankdir",
    "align"
], pn = [
    "width",
    "height"
], mn = {
    width: 0,
    height: 0
}, vn = [
    "minlen",
    "weight",
    "width",
    "height",
    "labeloffset"
], _n = {
    minlen: 1,
    weight: 1,
    width: 0,
    height: 0,
    labeloffset: 10,
    labelpos: "r"
}, wn = [
    "labelpos"
];
function bn(r) {
    var e = new m({
        multigraph: true,
        compound: true
    }), n = /*#__PURE__*/ pr(/*#__PURE__*/ r.graph());
    return e.setGraph(/*#__PURE__*/ qs({}, hn, /*#__PURE__*/ lr(n, cn), /*#__PURE__*/ Tn$1(n, ln))), Zr$1(/*#__PURE__*/ r.nodes(), function(t) {
        var o = /*#__PURE__*/ pr(/*#__PURE__*/ r.node(t));
        e.setNode(t, /*#__PURE__*/ Nf(/*#__PURE__*/ lr(o, pn), mn)), e.setParent(t, /*#__PURE__*/ r.parent(t));
    }), Zr$1(/*#__PURE__*/ r.edges(), function(t) {
        var o = /*#__PURE__*/ pr(/*#__PURE__*/ r.edge(t));
        e.setEdge(t, /*#__PURE__*/ qs({}, _n, /*#__PURE__*/ lr(o, vn), /*#__PURE__*/ Tn$1(o, wn)));
    }), e;
}
m$1(bn, "buildLayoutGraph");
function En(r) {
    var e = /*#__PURE__*/ r.graph();
    e.ranksep /= 2, Zr$1(/*#__PURE__*/ r.edges(), function(n) {
        var t = /*#__PURE__*/ r.edge(n);
        t.minlen *= 2, t.labelpos.toLowerCase() !== "c" && (e.rankdir === "TB" || e.rankdir === "BT" ? t.width += t.labeloffset : t.height += t.labeloffset);
    });
}
m$1(En, "makeSpaceForEdgeLabels");
function yn(r) {
    Zr$1(/*#__PURE__*/ r.edges(), function(e) {
        var n = /*#__PURE__*/ r.edge(e);
        if (n.width && n.height) {
            var t = /*#__PURE__*/ r.node(e.v), o = /*#__PURE__*/ r.node(e.w), a = {
                rank: (o.rank - t.rank) / 2 + t.rank,
                e
            };
            g(r, "edge-proxy", a, "_ep");
        }
    });
}
m$1(yn, "injectEdgeLabelProxies");
function xn(r) {
    var e = 0;
    Zr$1(/*#__PURE__*/ r.nodes(), function(n) {
        var t = /*#__PURE__*/ r.node(n);
        t.borderTop && (t.minRank = r.node(t.borderTop).rank, t.maxRank = r.node(t.borderBottom).rank, e = /*#__PURE__*/ bn$1(e, t.maxRank));
    }), r.graph().maxRank = e;
}
m$1(xn, "assignRankMinMax");
function kn(r) {
    Zr$1(/*#__PURE__*/ r.nodes(), function(e) {
        var n = /*#__PURE__*/ r.node(e);
        n.dummy === "edge-proxy" && (r.edge(n.e).labelRank = n.rank, r.removeNode(e));
    });
}
m$1(kn, "removeEdgeLabelProxies");
function gn(r) {
    var e = Number.POSITIVE_INFINITY, n = 0, t = Number.POSITIVE_INFINITY, o = 0, a = /*#__PURE__*/ r.graph(), i = a.marginx || 0, f = a.marginy || 0;
    function d(c) {
        var h = c.x, l = c.y, p = c.width, m = c.height;
        e = /*#__PURE__*/ Math.min(e, h - p / 2), n = /*#__PURE__*/ Math.max(n, h + p / 2), t = /*#__PURE__*/ Math.min(t, l - m / 2), o = /*#__PURE__*/ Math.max(o, l + m / 2);
    }
    m$1(d, "getExtremes"), Zr$1(/*#__PURE__*/ r.nodes(), function(c) {
        d(/*#__PURE__*/ r.node(c));
    }), Zr$1(/*#__PURE__*/ r.edges(), function(c) {
        var h = /*#__PURE__*/ r.edge(c);
        Object.prototype.hasOwnProperty.call(h, "x") && d(h);
    }), e -= i, t -= f, Zr$1(/*#__PURE__*/ r.nodes(), function(c) {
        var h = /*#__PURE__*/ r.node(c);
        h.x -= e, h.y -= t;
    }), Zr$1(/*#__PURE__*/ r.edges(), function(c) {
        var h = /*#__PURE__*/ r.edge(c);
        Zr$1(h.points, function(l) {
            l.x -= e, l.y -= t;
        }), Object.prototype.hasOwnProperty.call(h, "x") && (h.x -= e), Object.prototype.hasOwnProperty.call(h, "y") && (h.y -= t);
    }), a.width = n - e + i, a.height = o - t + f;
}
m$1(gn, "translateGraph");
function Nn(r) {
    Zr$1(/*#__PURE__*/ r.edges(), function(e) {
        var n = /*#__PURE__*/ r.edge(e), t = /*#__PURE__*/ r.node(e.v), o = /*#__PURE__*/ r.node(e.w), a, i;
        n.points ? (a = n.points[0], i = n.points[n.points.length - 1]) : (n.points = [], a = o, i = t), n.points.unshift(/*#__PURE__*/ $(t, a)), n.points.push(/*#__PURE__*/ $(o, i));
    });
}
m$1(Nn, "assignNodeIntersects");
function In(r) {
    Zr$1(/*#__PURE__*/ r.edges(), function(e) {
        var n = /*#__PURE__*/ r.edge(e);
        if (Object.prototype.hasOwnProperty.call(n, "x")) switch((n.labelpos === "l" || n.labelpos === "r") && (n.width -= n.labeloffset), n.labelpos){
            case "l":
                n.x -= n.width / 2 + n.labeloffset;
                break;
            case "r":
                n.x += n.width / 2 + n.labeloffset;
                break;
        }
    });
}
m$1(In, "fixupEdgeLabelCoords");
function On(r) {
    Zr$1(/*#__PURE__*/ r.edges(), function(e) {
        var n = /*#__PURE__*/ r.edge(e);
        n.reversed && n.points.reverse();
    });
}
m$1(On, "reversePointsForReversedEdges");
function Ln(r) {
    Zr$1(/*#__PURE__*/ r.nodes(), function(e) {
        if (r.children(e).length) {
            var n = /*#__PURE__*/ r.node(e), t = /*#__PURE__*/ r.node(n.borderTop), o = /*#__PURE__*/ r.node(n.borderBottom), a = /*#__PURE__*/ r.node(/*#__PURE__*/ Df(n.borderLeft)), i = /*#__PURE__*/ r.node(/*#__PURE__*/ Df(n.borderRight));
            n.width = /*#__PURE__*/ Math.abs(i.x - a.x), n.height = /*#__PURE__*/ Math.abs(o.y - t.y), n.x = a.x + n.width / 2, n.y = t.y + n.height / 2;
        }
    }), Zr$1(/*#__PURE__*/ r.nodes(), function(e) {
        r.node(e).dummy === "border" && r.removeNode(e);
    });
}
m$1(Ln, "removeBorderNodes");
function Pn(r) {
    Zr$1(/*#__PURE__*/ r.edges(), function(e) {
        if (e.v === e.w) {
            var n = /*#__PURE__*/ r.node(e.v);
            n.selfEdges || (n.selfEdges = []), n.selfEdges.push({
                e,
                label: /*#__PURE__*/ r.edge(e)
            }), r.removeEdge(e);
        }
    });
}
m$1(Pn, "removeSelfEdges");
function Cn(r) {
    var e = /*#__PURE__*/ C(r);
    Zr$1(e, function(n) {
        var t = 0;
        Zr$1(n, function(o, a) {
            var i = /*#__PURE__*/ r.node(o);
            i.order = a + t, Zr$1(i.selfEdges, function(f) {
                g(r, "selfedge", {
                    width: f.label.width,
                    height: f.label.height,
                    rank: i.rank,
                    order: a + ++t,
                    e: f.e,
                    label: f.label
                }, "_se");
            }), delete i.selfEdges;
        });
    });
}
m$1(Cn, "insertSelfEdges");
function Tn(r) {
    Zr$1(/*#__PURE__*/ r.nodes(), function(e) {
        var n = /*#__PURE__*/ r.node(e);
        if (n.dummy === "selfedge") {
            var t = /*#__PURE__*/ r.node(n.e.v), o = t.x + t.width / 2, a = t.y, i = n.x - o, f = t.height / 2;
            r.setEdge(n.e, n.label), r.removeNode(e), n.label.points = [
                {
                    x: o + 2 * i / 3,
                    y: a - f
                },
                {
                    x: o + 5 * i / 6,
                    y: a - f
                },
                {
                    x: o + i,
                    y: a
                },
                {
                    x: o + 5 * i / 6,
                    y: a + f
                },
                {
                    x: o + 2 * i / 3,
                    y: a + f
                }
            ], n.label.x = n.x, n.label.y = n.y;
        }
    });
}
m$1(Tn, "positionSelfEdges");
function lr(r, e) {
    return dn$1(/*#__PURE__*/ Tn$1(r, e), Number);
}
m$1(lr, "selectNumberAttrs");
function pr(r) {
    var e = {};
    return Zr$1(r, function(n, t) {
        e[t.toLowerCase()] = n;
    }), e;
}
m$1(pr, "canonicalize");
export { fn as f };
