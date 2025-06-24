import { G as Gr$1 } from './vendor-min-mermaid~chunk-MBJCTAW2.CeeVBk3I.chunk.js';
import { s } from './vendor-min-mermaid~chunk-VSLJSFIP.SXF1Vz2p.chunk.js';
import { c } from './vendor-min-mermaid~chunk-4KE642ED.-04Badot.chunk.js';
import { p } from './vendor-min-mermaid~chunk-7ON4XGU6.CvQ3UDwh.chunk.js';
import { d } from './vendor-min-mermaid~chunk-I2YQ4O7X.eSgKSoUq.chunk.js';
import { J as Jr, V as Ve, y as yr$1, _ as _t$1 } from './vendor-min-mermaid~chunk-ABV7UDA7.pPZHVmyz.chunk.js';
import { L as Le } from './vendor-min-mermaid~chunk-IIWVAQKY.CwtpAX-Q.chunk.js';
import { m as m$1, q, n } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
import { F as Ff, B as Bf, w as wf, v as vf, M as Mf, L as Lf, P as Pl, E as Er$1, p as pl, S as Sf, t as tt, H as Hl, i as ih } from './vendor-min-mermaid~chunk-RAMAZW42.vc82q0BN.chunk.js';
var Re = /*#__PURE__*/ n((le, Oe)=>{
    m$1(function(w, N) {
        typeof le == "object" && typeof Oe == "object" ? Oe.exports = /*#__PURE__*/ N() : typeof define == "function" && define.amd ? define([], N) : typeof le == "object" ? le.layoutBase = /*#__PURE__*/ N() : w.layoutBase = /*#__PURE__*/ N();
    }, "webpackUniversalModuleDefinition")(le, function() {
        return function(E) {
            var w = {};
            function N(g) {
                if (w[g]) return w[g].exports;
                var s = w[g] = {
                    i: g,
                    l: false,
                    exports: {}
                };
                return E[g].call(s.exports, s, s.exports, N), s.l = true, s.exports;
            }
            return m$1(N, "__webpack_require__"), N.m = E, N.c = w, N.i = function(g) {
                return g;
            }, N.d = function(g, s, n) {
                N.o(g, s) || Object.defineProperty(g, s, {
                    configurable: false,
                    enumerable: true,
                    get: n
                });
            }, N.n = function(g) {
                var s = g && g.__esModule ? m$1(function() {
                    return g.default;
                }, "getDefault") : m$1(function() {
                    return g;
                }, "getModuleExports");
                return N.d(s, "a", s), s;
            }, N.o = function(g, s) {
                return Object.prototype.hasOwnProperty.call(g, s);
            }, N.p = "", N(N.s = 28);
        }([
            function(E, w, N) {
                function g() {}
                m$1(g, "LayoutConstants"), g.QUALITY = 1, g.DEFAULT_CREATE_BENDS_AS_NEEDED = false, g.DEFAULT_INCREMENTAL = false, g.DEFAULT_ANIMATION_ON_LAYOUT = true, g.DEFAULT_ANIMATION_DURING_LAYOUT = false, g.DEFAULT_ANIMATION_PERIOD = 50, g.DEFAULT_UNIFORM_LEAF_NODE_SIZES = false, g.DEFAULT_GRAPH_MARGIN = 15, g.NODE_DIMENSIONS_INCLUDE_LABELS = false, g.SIMPLE_NODE_SIZE = 40, g.SIMPLE_NODE_HALF_SIZE = g.SIMPLE_NODE_SIZE / 2, g.EMPTY_COMPOUND_NODE_SIZE = 40, g.MIN_EDGE_LENGTH = 1, g.WORLD_BOUNDARY = 1e6, g.INITIAL_WORLD_BOUNDARY = g.WORLD_BOUNDARY / 1e3, g.WORLD_CENTER_X = 1200, g.WORLD_CENTER_Y = 900, E.exports = g;
            },
            function(E, w, N) {
                var g = /*#__PURE__*/ N(2), s = /*#__PURE__*/ N(8), n = /*#__PURE__*/ N(9);
                function i(c, t, u) {
                    g.call(this, u), this.isOverlapingSourceAndTarget = false, this.vGraphObject = u, this.bendpoints = [], this.source = c, this.target = t;
                }
                m$1(i, "LEdge"), i.prototype = /*#__PURE__*/ Object.create(g.prototype);
                for(var a in g)i[a] = g[a];
                i.prototype.getSource = function() {
                    return this.source;
                }, i.prototype.getTarget = function() {
                    return this.target;
                }, i.prototype.isInterGraph = function() {
                    return this.isInterGraph;
                }, i.prototype.getLength = function() {
                    return this.length;
                }, i.prototype.isOverlapingSourceAndTarget = function() {
                    return this.isOverlapingSourceAndTarget;
                }, i.prototype.getBendpoints = function() {
                    return this.bendpoints;
                }, i.prototype.getLca = function() {
                    return this.lca;
                }, i.prototype.getSourceInLca = function() {
                    return this.sourceInLca;
                }, i.prototype.getTargetInLca = function() {
                    return this.targetInLca;
                }, i.prototype.getOtherEnd = function(c) {
                    if (this.source === c) return this.target;
                    if (this.target === c) return this.source;
                    throw "Node is not incident with this edge";
                }, i.prototype.getOtherEndInGraph = function(c, t) {
                    for(var u = /*#__PURE__*/ this.getOtherEnd(c), r = /*#__PURE__*/ t.getGraphManager().getRoot();;){
                        if (u.getOwner() == t) return u;
                        if (u.getOwner() == r) break;
                        u = /*#__PURE__*/ u.getOwner().getParent();
                    }
                    return null;
                }, i.prototype.updateLength = function() {
                    var c = new Array(4);
                    this.isOverlapingSourceAndTarget = /*#__PURE__*/ s.getIntersection(/*#__PURE__*/ this.target.getRect(), /*#__PURE__*/ this.source.getRect(), c), this.isOverlapingSourceAndTarget || (this.lengthX = c[0] - c[2], this.lengthY = c[1] - c[3], Math.abs(this.lengthX) < 1 && (this.lengthX = /*#__PURE__*/ n.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = /*#__PURE__*/ n.sign(this.lengthY)), this.length = /*#__PURE__*/ Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY));
                }, i.prototype.updateLengthSimple = function() {
                    this.lengthX = this.target.getCenterX() - this.source.getCenterX(), this.lengthY = this.target.getCenterY() - this.source.getCenterY(), Math.abs(this.lengthX) < 1 && (this.lengthX = /*#__PURE__*/ n.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = /*#__PURE__*/ n.sign(this.lengthY)), this.length = /*#__PURE__*/ Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
                }, E.exports = i;
            },
            function(E, w, N) {
                function g(s) {
                    this.vGraphObject = s;
                }
                m$1(g, "LGraphObject"), E.exports = g;
            },
            function(E, w, N) {
                var g = /*#__PURE__*/ N(2), s = /*#__PURE__*/ N(10), n = /*#__PURE__*/ N(13), i = /*#__PURE__*/ N(0), a = /*#__PURE__*/ N(16), c = /*#__PURE__*/ N(5);
                function t(r, e, o, f) {
                    o == null && f == null && (f = e), g.call(this, f), r.graphManager != null && (r = r.graphManager), this.estimatedSize = s.MIN_VALUE, this.inclusionTreeDepth = s.MAX_VALUE, this.vGraphObject = f, this.edges = [], this.graphManager = r, o != null && e != null ? this.rect = new n(e.x, e.y, o.width, o.height) : this.rect = new n;
                }
                m$1(t, "LNode"), t.prototype = /*#__PURE__*/ Object.create(g.prototype);
                for(var u in g)t[u] = g[u];
                t.prototype.getEdges = function() {
                    return this.edges;
                }, t.prototype.getChild = function() {
                    return this.child;
                }, t.prototype.getOwner = function() {
                    return this.owner;
                }, t.prototype.getWidth = function() {
                    return this.rect.width;
                }, t.prototype.setWidth = function(r) {
                    this.rect.width = r;
                }, t.prototype.getHeight = function() {
                    return this.rect.height;
                }, t.prototype.setHeight = function(r) {
                    this.rect.height = r;
                }, t.prototype.getCenterX = function() {
                    return this.rect.x + this.rect.width / 2;
                }, t.prototype.getCenterY = function() {
                    return this.rect.y + this.rect.height / 2;
                }, t.prototype.getCenter = function() {
                    return new c(this.rect.x + this.rect.width / 2, this.rect.y + this.rect.height / 2);
                }, t.prototype.getLocation = function() {
                    return new c(this.rect.x, this.rect.y);
                }, t.prototype.getRect = function() {
                    return this.rect;
                }, t.prototype.getDiagonal = function() {
                    return Math.sqrt(this.rect.width * this.rect.width + this.rect.height * this.rect.height);
                }, t.prototype.getHalfTheDiagonal = function() {
                    return Math.sqrt(this.rect.height * this.rect.height + this.rect.width * this.rect.width) / 2;
                }, t.prototype.setRect = function(r, e) {
                    this.rect.x = r.x, this.rect.y = r.y, this.rect.width = e.width, this.rect.height = e.height;
                }, t.prototype.setCenter = function(r, e) {
                    this.rect.x = r - this.rect.width / 2, this.rect.y = e - this.rect.height / 2;
                }, t.prototype.setLocation = function(r, e) {
                    this.rect.x = r, this.rect.y = e;
                }, t.prototype.moveBy = function(r, e) {
                    this.rect.x += r, this.rect.y += e;
                }, t.prototype.getEdgeListToNode = function(r) {
                    var e = [], f = this;
                    return f.edges.forEach(function(l) {
                        if (l.target == r) {
                            if (l.source != f) throw "Incorrect edge source!";
                            e.push(l);
                        }
                    }), e;
                }, t.prototype.getEdgesBetween = function(r) {
                    var e = [], f = this;
                    return f.edges.forEach(function(l) {
                        if (!(l.source == f || l.target == f)) throw "Incorrect edge source and/or target";
                        (l.target == r || l.source == r) && e.push(l);
                    }), e;
                }, t.prototype.getNeighborsList = function() {
                    var r = new Set, e = this;
                    return e.edges.forEach(function(o) {
                        if (o.source == e) r.add(o.target);
                        else {
                            if (o.target != e) throw "Incorrect incidency!";
                            r.add(o.source);
                        }
                    }), r;
                }, t.prototype.withChildren = function() {
                    var r = new Set, e, o;
                    if (r.add(this), this.child != null) for(var f = /*#__PURE__*/ this.child.getNodes(), l = 0; l < f.length; l++)e = f[l], o = /*#__PURE__*/ e.withChildren(), o.forEach(function(A) {
                        r.add(A);
                    });
                    return r;
                }, t.prototype.getNoOfChildren = function() {
                    var r = 0, e;
                    if (this.child == null) r = 1;
                    else for(var o = /*#__PURE__*/ this.child.getNodes(), f = 0; f < o.length; f++)e = o[f], r += /*#__PURE__*/ e.getNoOfChildren();
                    return r == 0 && (r = 1), r;
                }, t.prototype.getEstimatedSize = function() {
                    if (this.estimatedSize == s.MIN_VALUE) throw "assert failed";
                    return this.estimatedSize;
                }, t.prototype.calcEstimatedSize = function() {
                    return this.child == null ? this.estimatedSize = (this.rect.width + this.rect.height) / 2 : (this.estimatedSize = /*#__PURE__*/ this.child.calcEstimatedSize(), this.rect.width = this.estimatedSize, this.rect.height = this.estimatedSize, this.estimatedSize);
                }, t.prototype.scatter = function() {
                    var r, e, o = -i.INITIAL_WORLD_BOUNDARY, f = i.INITIAL_WORLD_BOUNDARY;
                    r = i.WORLD_CENTER_X + a.nextDouble() * (f - o) + o;
                    var l = -i.INITIAL_WORLD_BOUNDARY, A = i.INITIAL_WORLD_BOUNDARY;
                    e = i.WORLD_CENTER_Y + a.nextDouble() * (A - l) + l, this.rect.x = r, this.rect.y = e;
                }, t.prototype.updateBounds = function() {
                    if (this.getChild() == null) throw "assert failed";
                    if (this.getChild().getNodes().length != 0) {
                        var r = /*#__PURE__*/ this.getChild();
                        if (r.updateBounds(true), this.rect.x = /*#__PURE__*/ r.getLeft(), this.rect.y = /*#__PURE__*/ r.getTop(), this.setWidth(r.getRight() - r.getLeft()), this.setHeight(r.getBottom() - r.getTop()), i.NODE_DIMENSIONS_INCLUDE_LABELS) {
                            var e = r.getRight() - r.getLeft(), o = r.getBottom() - r.getTop();
                            this.labelWidth && (this.labelPosHorizontal == "left" ? (this.rect.x -= this.labelWidth, this.setWidth(e + this.labelWidth)) : this.labelPosHorizontal == "center" && this.labelWidth > e ? (this.rect.x -= (this.labelWidth - e) / 2, this.setWidth(this.labelWidth)) : this.labelPosHorizontal == "right" && this.setWidth(e + this.labelWidth)), this.labelHeight && (this.labelPosVertical == "top" ? (this.rect.y -= this.labelHeight, this.setHeight(o + this.labelHeight)) : this.labelPosVertical == "center" && this.labelHeight > o ? (this.rect.y -= (this.labelHeight - o) / 2, this.setHeight(this.labelHeight)) : this.labelPosVertical == "bottom" && this.setHeight(o + this.labelHeight));
                        }
                    }
                }, t.prototype.getInclusionTreeDepth = function() {
                    if (this.inclusionTreeDepth == s.MAX_VALUE) throw "assert failed";
                    return this.inclusionTreeDepth;
                }, t.prototype.transform = function(r) {
                    var e = this.rect.x;
                    e > i.WORLD_BOUNDARY ? e = i.WORLD_BOUNDARY : e < -i.WORLD_BOUNDARY && (e = -i.WORLD_BOUNDARY);
                    var o = this.rect.y;
                    o > i.WORLD_BOUNDARY ? o = i.WORLD_BOUNDARY : o < -i.WORLD_BOUNDARY && (o = -i.WORLD_BOUNDARY);
                    var f = new c(e, o), l = /*#__PURE__*/ r.inverseTransformPoint(f);
                    this.setLocation(l.x, l.y);
                }, t.prototype.getLeft = function() {
                    return this.rect.x;
                }, t.prototype.getRight = function() {
                    return this.rect.x + this.rect.width;
                }, t.prototype.getTop = function() {
                    return this.rect.y;
                }, t.prototype.getBottom = function() {
                    return this.rect.y + this.rect.height;
                }, t.prototype.getParent = function() {
                    return this.owner == null ? null : this.owner.getParent();
                }, E.exports = t;
            },
            function(E, w, N) {
                var g = /*#__PURE__*/ N(0);
                function s() {}
                m$1(s, "FDLayoutConstants");
                for(var n in g)s[n] = g[n];
                s.MAX_ITERATIONS = 2500, s.DEFAULT_EDGE_LENGTH = 50, s.DEFAULT_SPRING_STRENGTH = .45, s.DEFAULT_REPULSION_STRENGTH = 4500, s.DEFAULT_GRAVITY_STRENGTH = .4, s.DEFAULT_COMPOUND_GRAVITY_STRENGTH = 1, s.DEFAULT_GRAVITY_RANGE_FACTOR = 3.8, s.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = 1.5, s.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION = true, s.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION = true, s.DEFAULT_COOLING_FACTOR_INCREMENTAL = .3, s.COOLING_ADAPTATION_FACTOR = .33, s.ADAPTATION_LOWER_NODE_LIMIT = 1e3, s.ADAPTATION_UPPER_NODE_LIMIT = 5e3, s.MAX_NODE_DISPLACEMENT_INCREMENTAL = 100, s.MAX_NODE_DISPLACEMENT = s.MAX_NODE_DISPLACEMENT_INCREMENTAL * 3, s.MIN_REPULSION_DIST = s.DEFAULT_EDGE_LENGTH / 10, s.CONVERGENCE_CHECK_PERIOD = 100, s.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = .1, s.MIN_EDGE_LENGTH = 1, s.GRID_CALCULATION_CHECK_PERIOD = 10, E.exports = s;
            },
            function(E, w, N) {
                function g(s, n) {
                    s == null && n == null ? (this.x = 0, this.y = 0) : (this.x = s, this.y = n);
                }
                m$1(g, "PointD"), g.prototype.getX = function() {
                    return this.x;
                }, g.prototype.getY = function() {
                    return this.y;
                }, g.prototype.setX = function(s) {
                    this.x = s;
                }, g.prototype.setY = function(s) {
                    this.y = s;
                }, g.prototype.getDifference = function(s) {
                    return new DimensionD(this.x - s.x, this.y - s.y);
                }, g.prototype.getCopy = function() {
                    return new g(this.x, this.y);
                }, g.prototype.translate = function(s) {
                    return this.x += s.width, this.y += s.height, this;
                }, E.exports = g;
            },
            function(E, w, N) {
                var g = /*#__PURE__*/ N(2), s = /*#__PURE__*/ N(10), n = /*#__PURE__*/ N(0), i = /*#__PURE__*/ N(7), a = /*#__PURE__*/ N(3), c = /*#__PURE__*/ N(1), t = /*#__PURE__*/ N(13), u = /*#__PURE__*/ N(12), r = /*#__PURE__*/ N(11);
                function e(f, l, A) {
                    g.call(this, A), this.estimatedSize = s.MIN_VALUE, this.margin = n.DEFAULT_GRAPH_MARGIN, this.edges = [], this.nodes = [], this.isConnected = false, this.parent = f, l != null && l instanceof i ? this.graphManager = l : l != null && l instanceof Layout && (this.graphManager = l.graphManager);
                }
                m$1(e, "LGraph"), e.prototype = /*#__PURE__*/ Object.create(g.prototype);
                for(var o in g)e[o] = g[o];
                e.prototype.getNodes = function() {
                    return this.nodes;
                }, e.prototype.getEdges = function() {
                    return this.edges;
                }, e.prototype.getGraphManager = function() {
                    return this.graphManager;
                }, e.prototype.getParent = function() {
                    return this.parent;
                }, e.prototype.getLeft = function() {
                    return this.left;
                }, e.prototype.getRight = function() {
                    return this.right;
                }, e.prototype.getTop = function() {
                    return this.top;
                }, e.prototype.getBottom = function() {
                    return this.bottom;
                }, e.prototype.isConnected = function() {
                    return this.isConnected;
                }, e.prototype.add = function(f, l, A) {
                    if (l == null && A == null) {
                        var v = f;
                        if (this.graphManager == null) throw "Graph has no graph mgr!";
                        if (this.getNodes().indexOf(v) > -1) throw "Node already in graph!";
                        return v.owner = this, this.getNodes().push(v), v;
                    } else {
                        var y = f;
                        if (!(this.getNodes().indexOf(l) > -1 && this.getNodes().indexOf(A) > -1)) throw "Source or target not in graph!";
                        if (!(l.owner == A.owner && l.owner == this)) throw "Both owners must be this graph!";
                        return l.owner != A.owner ? null : (y.source = l, y.target = A, y.isInterGraph = false, this.getEdges().push(y), l.edges.push(y), A != l && A.edges.push(y), y);
                    }
                }, e.prototype.remove = function(f) {
                    var l = f;
                    if (f instanceof a) {
                        if (l == null) throw "Node is null!";
                        if (!(l.owner != null && l.owner == this)) throw "Owner graph is invalid!";
                        if (this.graphManager == null) throw "Owner graph manager is invalid!";
                        for(var A = /*#__PURE__*/ l.edges.slice(), v, y = A.length, D = 0; D < y; D++)v = A[D], v.isInterGraph ? this.graphManager.remove(v) : v.source.owner.remove(v);
                        var S = /*#__PURE__*/ this.nodes.indexOf(l);
                        if (S == -1) throw "Node not in owner node list!";
                        this.nodes.splice(S, 1);
                    } else if (f instanceof c) {
                        var v = f;
                        if (v == null) throw "Edge is null!";
                        if (!(v.source != null && v.target != null)) throw "Source and/or target is null!";
                        if (!(v.source.owner != null && v.target.owner != null && v.source.owner == this && v.target.owner == this)) throw "Source and/or target owner is invalid!";
                        var C = /*#__PURE__*/ v.source.edges.indexOf(v), b = /*#__PURE__*/ v.target.edges.indexOf(v);
                        if (!(C > -1 && b > -1)) throw "Source and/or target doesn't know this edge!";
                        v.source.edges.splice(C, 1), v.target != v.source && v.target.edges.splice(b, 1);
                        var S = /*#__PURE__*/ v.source.owner.getEdges().indexOf(v);
                        if (S == -1) throw "Not in owner's edge list!";
                        v.source.owner.getEdges().splice(S, 1);
                    }
                }, e.prototype.updateLeftTop = function() {
                    for(var f = s.MAX_VALUE, l = s.MAX_VALUE, A, v, y, D = /*#__PURE__*/ this.getNodes(), S = D.length, C = 0; C < S; C++){
                        var b = D[C];
                        A = /*#__PURE__*/ b.getTop(), v = /*#__PURE__*/ b.getLeft(), f > A && (f = A), l > v && (l = v);
                    }
                    return f == s.MAX_VALUE ? null : (D[0].getParent().paddingLeft != null ? y = D[0].getParent().paddingLeft : y = this.margin, this.left = l - y, this.top = f - y, new u(this.left, this.top));
                }, e.prototype.updateBounds = function(f) {
                    for(var l = s.MAX_VALUE, A = -s.MAX_VALUE, v = s.MAX_VALUE, y = -s.MAX_VALUE, D, S, C, b, z, X = this.nodes, K = X.length, R = 0; R < K; R++){
                        var J = X[R];
                        f && J.child != null && J.updateBounds(), D = /*#__PURE__*/ J.getLeft(), S = /*#__PURE__*/ J.getRight(), C = /*#__PURE__*/ J.getTop(), b = /*#__PURE__*/ J.getBottom(), l > D && (l = D), A < S && (A = S), v > C && (v = C), y < b && (y = b);
                    }
                    var h = new t(l, v, A - l, y - v);
                    l == s.MAX_VALUE && (this.left = /*#__PURE__*/ this.parent.getLeft(), this.right = /*#__PURE__*/ this.parent.getRight(), this.top = /*#__PURE__*/ this.parent.getTop(), this.bottom = /*#__PURE__*/ this.parent.getBottom()), X[0].getParent().paddingLeft != null ? z = X[0].getParent().paddingLeft : z = this.margin, this.left = h.x - z, this.right = h.x + h.width + z, this.top = h.y - z, this.bottom = h.y + h.height + z;
                }, e.calculateBounds = function(f) {
                    for(var l = s.MAX_VALUE, A = -s.MAX_VALUE, v = s.MAX_VALUE, y = -s.MAX_VALUE, D, S, C, b, z = f.length, X = 0; X < z; X++){
                        var K = f[X];
                        D = /*#__PURE__*/ K.getLeft(), S = /*#__PURE__*/ K.getRight(), C = /*#__PURE__*/ K.getTop(), b = /*#__PURE__*/ K.getBottom(), l > D && (l = D), A < S && (A = S), v > C && (v = C), y < b && (y = b);
                    }
                    var R = new t(l, v, A - l, y - v);
                    return R;
                }, e.prototype.getInclusionTreeDepth = function() {
                    return this == this.graphManager.getRoot() ? 1 : this.parent.getInclusionTreeDepth();
                }, e.prototype.getEstimatedSize = function() {
                    if (this.estimatedSize == s.MIN_VALUE) throw "assert failed";
                    return this.estimatedSize;
                }, e.prototype.calcEstimatedSize = function() {
                    for(var f = 0, l = this.nodes, A = l.length, v = 0; v < A; v++){
                        var y = l[v];
                        f += /*#__PURE__*/ y.calcEstimatedSize();
                    }
                    return f == 0 ? this.estimatedSize = n.EMPTY_COMPOUND_NODE_SIZE : this.estimatedSize = f / Math.sqrt(this.nodes.length), this.estimatedSize;
                }, e.prototype.updateConnected = function() {
                    var f = this;
                    if (this.nodes.length == 0) {
                        this.isConnected = true;
                        return;
                    }
                    var l = new r, A = new Set, v = this.nodes[0], y, D, S = /*#__PURE__*/ v.withChildren();
                    for(S.forEach(function(R) {
                        l.push(R), A.add(R);
                    }); l.length !== 0;){
                        v = /*#__PURE__*/ l.shift(), y = /*#__PURE__*/ v.getEdges();
                        for(var C = y.length, b = 0; b < C; b++){
                            var z = y[b];
                            if (D = /*#__PURE__*/ z.getOtherEndInGraph(v, this), D != null && !A.has(D)) {
                                var X = /*#__PURE__*/ D.withChildren();
                                X.forEach(function(R) {
                                    l.push(R), A.add(R);
                                });
                            }
                        }
                    }
                    if (this.isConnected = false, A.size >= this.nodes.length) {
                        var K = 0;
                        A.forEach(function(R) {
                            R.owner == f && K++;
                        }), K == this.nodes.length && (this.isConnected = true);
                    }
                }, E.exports = e;
            },
            function(E, w, N) {
                var g, s = /*#__PURE__*/ N(1);
                function n(i) {
                    g = /*#__PURE__*/ N(6), this.layout = i, this.graphs = [], this.edges = [];
                }
                m$1(n, "LGraphManager"), n.prototype.addRoot = function() {
                    var i = /*#__PURE__*/ this.layout.newGraph(), a = /*#__PURE__*/ this.layout.newNode(null), c = /*#__PURE__*/ this.add(i, a);
                    return this.setRootGraph(c), this.rootGraph;
                }, n.prototype.add = function(i, a, c, t, u) {
                    if (c == null && t == null && u == null) {
                        if (i == null) throw "Graph is null!";
                        if (a == null) throw "Parent node is null!";
                        if (this.graphs.indexOf(i) > -1) throw "Graph already in this graph mgr!";
                        if (this.graphs.push(i), i.parent != null) throw "Already has a parent!";
                        if (a.child != null) throw "Already has a child!";
                        return i.parent = a, a.child = i, i;
                    } else {
                        u = c, t = a, c = i;
                        var r = /*#__PURE__*/ t.getOwner(), e = /*#__PURE__*/ u.getOwner();
                        if (!(r != null && r.getGraphManager() == this)) throw "Source not in this graph mgr!";
                        if (!(e != null && e.getGraphManager() == this)) throw "Target not in this graph mgr!";
                        if (r == e) return c.isInterGraph = false, r.add(c, t, u);
                        if (c.isInterGraph = true, c.source = t, c.target = u, this.edges.indexOf(c) > -1) throw "Edge already in inter-graph edge list!";
                        if (this.edges.push(c), !(c.source != null && c.target != null)) throw "Edge source and/or target is null!";
                        if (!(c.source.edges.indexOf(c) == -1 && c.target.edges.indexOf(c) == -1)) throw "Edge already in source and/or target incidency list!";
                        return c.source.edges.push(c), c.target.edges.push(c), c;
                    }
                }, n.prototype.remove = function(i) {
                    if (i instanceof g) {
                        var a = i;
                        if (a.getGraphManager() != this) throw "Graph not in this graph mgr";
                        if (!(a == this.rootGraph || a.parent != null && a.parent.graphManager == this)) throw "Invalid parent node!";
                        var c = [];
                        c = /*#__PURE__*/ c.concat(/*#__PURE__*/ a.getEdges());
                        for(var t, u = c.length, r = 0; r < u; r++)t = c[r], a.remove(t);
                        var e = [];
                        e = /*#__PURE__*/ e.concat(/*#__PURE__*/ a.getNodes());
                        var o;
                        u = e.length;
                        for(var r = 0; r < u; r++)o = e[r], a.remove(o);
                        a == this.rootGraph && this.setRootGraph(null);
                        var f = /*#__PURE__*/ this.graphs.indexOf(a);
                        this.graphs.splice(f, 1), a.parent = null;
                    } else if (i instanceof s) {
                        if (t = i, t == null) throw "Edge is null!";
                        if (!t.isInterGraph) throw "Not an inter-graph edge!";
                        if (!(t.source != null && t.target != null)) throw "Source and/or target is null!";
                        if (!(t.source.edges.indexOf(t) != -1 && t.target.edges.indexOf(t) != -1)) throw "Source and/or target doesn't know this edge!";
                        var f = /*#__PURE__*/ t.source.edges.indexOf(t);
                        if (t.source.edges.splice(f, 1), f = /*#__PURE__*/ t.target.edges.indexOf(t), t.target.edges.splice(f, 1), !(t.source.owner != null && t.source.owner.getGraphManager() != null)) throw "Edge owner graph or owner graph manager is null!";
                        if (t.source.owner.getGraphManager().edges.indexOf(t) == -1) throw "Not in owner graph manager's edge list!";
                        var f = /*#__PURE__*/ t.source.owner.getGraphManager().edges.indexOf(t);
                        t.source.owner.getGraphManager().edges.splice(f, 1);
                    }
                }, n.prototype.updateBounds = function() {
                    this.rootGraph.updateBounds(true);
                }, n.prototype.getGraphs = function() {
                    return this.graphs;
                }, n.prototype.getAllNodes = function() {
                    if (this.allNodes == null) {
                        for(var i = [], a = /*#__PURE__*/ this.getGraphs(), c = a.length, t = 0; t < c; t++)i = /*#__PURE__*/ i.concat(/*#__PURE__*/ a[t].getNodes());
                        this.allNodes = i;
                    }
                    return this.allNodes;
                }, n.prototype.resetAllNodes = function() {
                    this.allNodes = null;
                }, n.prototype.resetAllEdges = function() {
                    this.allEdges = null;
                }, n.prototype.resetAllNodesToApplyGravitation = function() {
                    this.allNodesToApplyGravitation = null;
                }, n.prototype.getAllEdges = function() {
                    if (this.allEdges == null) {
                        for(var i = [], a = /*#__PURE__*/ this.getGraphs(), c = a.length, t = 0; t < a.length; t++)i = /*#__PURE__*/ i.concat(/*#__PURE__*/ a[t].getEdges());
                        i = /*#__PURE__*/ i.concat(this.edges), this.allEdges = i;
                    }
                    return this.allEdges;
                }, n.prototype.getAllNodesToApplyGravitation = function() {
                    return this.allNodesToApplyGravitation;
                }, n.prototype.setAllNodesToApplyGravitation = function(i) {
                    if (this.allNodesToApplyGravitation != null) throw "assert failed";
                    this.allNodesToApplyGravitation = i;
                }, n.prototype.getRoot = function() {
                    return this.rootGraph;
                }, n.prototype.setRootGraph = function(i) {
                    if (i.getGraphManager() != this) throw "Root not in this graph mgr!";
                    this.rootGraph = i, i.parent == null && (i.parent = /*#__PURE__*/ this.layout.newNode("Root node"));
                }, n.prototype.getLayout = function() {
                    return this.layout;
                }, n.prototype.isOneAncestorOfOther = function(i, a) {
                    if (!(i != null && a != null)) throw "assert failed";
                    if (i == a) return true;
                    var c = /*#__PURE__*/ i.getOwner(), t;
                    do {
                        if (t = /*#__PURE__*/ c.getParent(), t == null) break;
                        if (t == a) return true;
                        if (c = /*#__PURE__*/ t.getOwner(), c == null) break;
                    }while (true);
                    c = /*#__PURE__*/ a.getOwner();
                    do {
                        if (t = /*#__PURE__*/ c.getParent(), t == null) break;
                        if (t == i) return true;
                        if (c = /*#__PURE__*/ t.getOwner(), c == null) break;
                    }while (true);
                    return false;
                }, n.prototype.calcLowestCommonAncestors = function() {
                    for(var i, a, c, t, u, r = /*#__PURE__*/ this.getAllEdges(), e = r.length, o = 0; o < e; o++){
                        if (i = r[o], a = i.source, c = i.target, i.lca = null, i.sourceInLca = a, i.targetInLca = c, a == c) {
                            i.lca = /*#__PURE__*/ a.getOwner();
                            continue;
                        }
                        for(t = /*#__PURE__*/ a.getOwner(); i.lca == null;){
                            for(i.targetInLca = c, u = /*#__PURE__*/ c.getOwner(); i.lca == null;){
                                if (u == t) {
                                    i.lca = u;
                                    break;
                                }
                                if (u == this.rootGraph) break;
                                if (i.lca != null) throw "assert failed";
                                i.targetInLca = /*#__PURE__*/ u.getParent(), u = /*#__PURE__*/ i.targetInLca.getOwner();
                            }
                            if (t == this.rootGraph) break;
                            i.lca == null && (i.sourceInLca = /*#__PURE__*/ t.getParent(), t = /*#__PURE__*/ i.sourceInLca.getOwner());
                        }
                        if (i.lca == null) throw "assert failed";
                    }
                }, n.prototype.calcLowestCommonAncestor = function(i, a) {
                    if (i == a) return i.getOwner();
                    var c = /*#__PURE__*/ i.getOwner();
                    do {
                        if (c == null) break;
                        var t = /*#__PURE__*/ a.getOwner();
                        do {
                            if (t == null) break;
                            if (t == c) return t;
                            t = /*#__PURE__*/ t.getParent().getOwner();
                        }while (true);
                        c = /*#__PURE__*/ c.getParent().getOwner();
                    }while (true);
                    return c;
                }, n.prototype.calcInclusionTreeDepths = function(i, a) {
                    i == null && a == null && (i = this.rootGraph, a = 1);
                    for(var c, t = /*#__PURE__*/ i.getNodes(), u = t.length, r = 0; r < u; r++)c = t[r], c.inclusionTreeDepth = a, c.child != null && this.calcInclusionTreeDepths(c.child, a + 1);
                }, n.prototype.includesInvalidEdge = function() {
                    for(var i, a = [], c = this.edges.length, t = 0; t < c; t++)i = this.edges[t], this.isOneAncestorOfOther(i.source, i.target) && a.push(i);
                    for(var t = 0; t < a.length; t++)this.remove(a[t]);
                    return false;
                }, E.exports = n;
            },
            function(E, w, N) {
                var g = /*#__PURE__*/ N(12);
                function s() {}
                m$1(s, "IGeometry"), s.calcSeparationAmount = function(n, i, a, c) {
                    if (!n.intersects(i)) throw "assert failed";
                    var t = new Array(2);
                    this.decideDirectionsForOverlappingNodes(n, i, t), a[0] = Math.min(/*#__PURE__*/ n.getRight(), /*#__PURE__*/ i.getRight()) - Math.max(n.x, i.x), a[1] = Math.min(/*#__PURE__*/ n.getBottom(), /*#__PURE__*/ i.getBottom()) - Math.max(n.y, i.y), n.getX() <= i.getX() && n.getRight() >= i.getRight() ? a[0] += /*#__PURE__*/ Math.min(i.getX() - n.getX(), n.getRight() - i.getRight()) : i.getX() <= n.getX() && i.getRight() >= n.getRight() && (a[0] += /*#__PURE__*/ Math.min(n.getX() - i.getX(), i.getRight() - n.getRight())), n.getY() <= i.getY() && n.getBottom() >= i.getBottom() ? a[1] += /*#__PURE__*/ Math.min(i.getY() - n.getY(), n.getBottom() - i.getBottom()) : i.getY() <= n.getY() && i.getBottom() >= n.getBottom() && (a[1] += /*#__PURE__*/ Math.min(n.getY() - i.getY(), i.getBottom() - n.getBottom()));
                    var u = /*#__PURE__*/ Math.abs((i.getCenterY() - n.getCenterY()) / (i.getCenterX() - n.getCenterX()));
                    i.getCenterY() === n.getCenterY() && i.getCenterX() === n.getCenterX() && (u = 1);
                    var r = u * a[0], e = a[1] / u;
                    a[0] < e ? e = a[0] : r = a[1], a[0] = -1 * t[0] * (e / 2 + c), a[1] = -1 * t[1] * (r / 2 + c);
                }, s.decideDirectionsForOverlappingNodes = function(n, i, a) {
                    n.getCenterX() < i.getCenterX() ? a[0] = -1 : a[0] = 1, n.getCenterY() < i.getCenterY() ? a[1] = -1 : a[1] = 1;
                }, s.getIntersection2 = function(n, i, a) {
                    var c = /*#__PURE__*/ n.getCenterX(), t = /*#__PURE__*/ n.getCenterY(), u = /*#__PURE__*/ i.getCenterX(), r = /*#__PURE__*/ i.getCenterY();
                    if (n.intersects(i)) return a[0] = c, a[1] = t, a[2] = u, a[3] = r, true;
                    var e = /*#__PURE__*/ n.getX(), o = /*#__PURE__*/ n.getY(), f = /*#__PURE__*/ n.getRight(), l = /*#__PURE__*/ n.getX(), A = /*#__PURE__*/ n.getBottom(), v = /*#__PURE__*/ n.getRight(), y = /*#__PURE__*/ n.getWidthHalf(), D = /*#__PURE__*/ n.getHeightHalf(), S = /*#__PURE__*/ i.getX(), C = /*#__PURE__*/ i.getY(), b = /*#__PURE__*/ i.getRight(), z = /*#__PURE__*/ i.getX(), X = /*#__PURE__*/ i.getBottom(), K = /*#__PURE__*/ i.getRight(), R = /*#__PURE__*/ i.getWidthHalf(), J = /*#__PURE__*/ i.getHeightHalf(), h = false, m = false;
                    if (c === u) {
                        if (t > r) return a[0] = c, a[1] = o, a[2] = u, a[3] = X, false;
                        if (t < r) return a[0] = c, a[1] = A, a[2] = u, a[3] = C, false;
                    } else if (t === r) {
                        if (c > u) return a[0] = e, a[1] = t, a[2] = b, a[3] = r, false;
                        if (c < u) return a[0] = f, a[1] = t, a[2] = S, a[3] = r, false;
                    } else {
                        var d = n.height / n.width, T = i.height / i.width, p = (r - t) / (u - c), O = void 0, x = void 0, G = void 0, F = void 0, I = void 0, Z = void 0;
                        if (-d === p ? c > u ? (a[0] = l, a[1] = A, h = true) : (a[0] = f, a[1] = o, h = true) : d === p && (c > u ? (a[0] = e, a[1] = o, h = true) : (a[0] = v, a[1] = A, h = true)), -T === p ? u > c ? (a[2] = z, a[3] = X, m = true) : (a[2] = b, a[3] = C, m = true) : T === p && (u > c ? (a[2] = S, a[3] = C, m = true) : (a[2] = K, a[3] = X, m = true)), h && m) return false;
                        if (c > u ? t > r ? (O = /*#__PURE__*/ this.getCardinalDirection(d, p, 4), x = /*#__PURE__*/ this.getCardinalDirection(T, p, 2)) : (O = /*#__PURE__*/ this.getCardinalDirection(-d, p, 3), x = /*#__PURE__*/ this.getCardinalDirection(-T, p, 1)) : t > r ? (O = /*#__PURE__*/ this.getCardinalDirection(-d, p, 1), x = /*#__PURE__*/ this.getCardinalDirection(-T, p, 3)) : (O = /*#__PURE__*/ this.getCardinalDirection(d, p, 2), x = /*#__PURE__*/ this.getCardinalDirection(T, p, 4)), !h) switch(O){
                            case 1:
                                F = o, G = c + -D / p, a[0] = G, a[1] = F;
                                break;
                            case 2:
                                G = v, F = t + y * p, a[0] = G, a[1] = F;
                                break;
                            case 3:
                                F = A, G = c + D / p, a[0] = G, a[1] = F;
                                break;
                            case 4:
                                G = l, F = t + -y * p, a[0] = G, a[1] = F;
                                break;
                        }
                        if (!m) switch(x){
                            case 1:
                                Z = C, I = u + -J / p, a[2] = I, a[3] = Z;
                                break;
                            case 2:
                                I = K, Z = r + R * p, a[2] = I, a[3] = Z;
                                break;
                            case 3:
                                Z = X, I = u + J / p, a[2] = I, a[3] = Z;
                                break;
                            case 4:
                                I = z, Z = r + -R * p, a[2] = I, a[3] = Z;
                                break;
                        }
                    }
                    return false;
                }, s.getCardinalDirection = function(n, i, a) {
                    return n > i ? a : 1 + a % 4;
                }, s.getIntersection = function(n, i, a, c) {
                    if (c == null) return this.getIntersection2(n, i, a);
                    var t = n.x, u = n.y, r = i.x, e = i.y, o = a.x, f = a.y, l = c.x, A = c.y, v = void 0, y = void 0, D = void 0, S = void 0, C = void 0, b = void 0, z = void 0, X = void 0, K = void 0;
                    return D = e - u, C = t - r, z = r * u - t * e, S = A - f, b = o - l, X = l * f - o * A, K = D * b - S * C, K === 0 ? null : (v = (C * X - b * z) / K, y = (S * z - D * X) / K, new g(v, y));
                }, s.angleOfVector = function(n, i, a, c) {
                    var t = void 0;
                    return n !== a ? (t = /*#__PURE__*/ Math.atan((c - i) / (a - n)), a < n ? t += Math.PI : c < i && (t += this.TWO_PI)) : c < i ? t = this.ONE_AND_HALF_PI : t = this.HALF_PI, t;
                }, s.doIntersect = function(n, i, a, c) {
                    var t = n.x, u = n.y, r = i.x, e = i.y, o = a.x, f = a.y, l = c.x, A = c.y, v = (r - t) * (A - f) - (l - o) * (e - u);
                    if (v === 0) return false;
                    var y = ((A - f) * (l - t) + (o - l) * (A - u)) / v, D = ((u - e) * (l - t) + (r - t) * (A - u)) / v;
                    return 0 < y && y < 1 && 0 < D && D < 1;
                }, s.findCircleLineIntersections = function(n, i, a, c, t, u, r) {
                    var e = (a - n) * (a - n) + (c - i) * (c - i), o = 2 * ((n - t) * (a - n) + (i - u) * (c - i)), f = (n - t) * (n - t) + (i - u) * (i - u) - r * r, l = o * o - 4 * e * f;
                    if (l >= 0) {
                        var A = (-o + Math.sqrt(o * o - 4 * e * f)) / (2 * e), v = (-o - Math.sqrt(o * o - 4 * e * f)) / (2 * e), y = null;
                        return A >= 0 && A <= 1 ? [
                            A
                        ] : v >= 0 && v <= 1 ? [
                            v
                        ] : y;
                    } else return null;
                }, s.HALF_PI = .5 * Math.PI, s.ONE_AND_HALF_PI = 1.5 * Math.PI, s.TWO_PI = 2 * Math.PI, s.THREE_PI = 3 * Math.PI, E.exports = s;
            },
            function(E, w, N) {
                function g() {}
                m$1(g, "IMath"), g.sign = function(s) {
                    return s > 0 ? 1 : s < 0 ? -1 : 0;
                }, g.floor = function(s) {
                    return s < 0 ? Math.ceil(s) : Math.floor(s);
                }, g.ceil = function(s) {
                    return s < 0 ? Math.floor(s) : Math.ceil(s);
                }, E.exports = g;
            },
            function(E, w, N) {
                function g() {}
                m$1(g, "Integer"), g.MAX_VALUE = 2147483647, g.MIN_VALUE = -2147483648, E.exports = g;
            },
            function(E, w, N) {
                var g = /*#__PURE__*/ function() {
                    function t(u, r) {
                        for(var e = 0; e < r.length; e++){
                            var o = r[e];
                            o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(u, o.key, o);
                        }
                    }
                    return m$1(t, "defineProperties"), function(u, r, e) {
                        return r && t(u.prototype, r), e && t(u, e), u;
                    };
                }();
                function s(t, u) {
                    if (!(t instanceof u)) throw new TypeError("Cannot call a class as a function");
                }
                m$1(s, "_classCallCheck");
                var n = /*#__PURE__*/ m$1(function(u) {
                    return {
                        value: u,
                        next: null,
                        prev: null
                    };
                }, "nodeFrom"), i = /*#__PURE__*/ m$1(function(u, r, e, o) {
                    return u !== null ? u.next = r : o.head = r, e !== null ? e.prev = r : o.tail = r, r.prev = u, r.next = e, o.length++, r;
                }, "add"), a = /*#__PURE__*/ m$1(function(u, r) {
                    var e = u.prev, o = u.next;
                    return e !== null ? e.next = o : r.head = o, o !== null ? o.prev = e : r.tail = e, u.prev = u.next = null, r.length--, u;
                }, "_remove"), c = /*#__PURE__*/ function() {
                    function t(u) {
                        var r = this;
                        s(this, t), this.length = 0, this.head = null, this.tail = null, u?.forEach(function(e) {
                            return r.push(e);
                        });
                    }
                    return m$1(t, "LinkedList"), g(t, [
                        {
                            key: "size",
                            value: /*#__PURE__*/ m$1(function() {
                                return this.length;
                            }, "size")
                        },
                        {
                            key: "insertBefore",
                            value: /*#__PURE__*/ m$1(function(r, e) {
                                return i(e.prev, /*#__PURE__*/ n(r), e, this);
                            }, "insertBefore")
                        },
                        {
                            key: "insertAfter",
                            value: /*#__PURE__*/ m$1(function(r, e) {
                                return i(e, /*#__PURE__*/ n(r), e.next, this);
                            }, "insertAfter")
                        },
                        {
                            key: "insertNodeBefore",
                            value: /*#__PURE__*/ m$1(function(r, e) {
                                return i(e.prev, r, e, this);
                            }, "insertNodeBefore")
                        },
                        {
                            key: "insertNodeAfter",
                            value: /*#__PURE__*/ m$1(function(r, e) {
                                return i(e, r, e.next, this);
                            }, "insertNodeAfter")
                        },
                        {
                            key: "push",
                            value: /*#__PURE__*/ m$1(function(r) {
                                return i(this.tail, /*#__PURE__*/ n(r), null, this);
                            }, "push")
                        },
                        {
                            key: "unshift",
                            value: /*#__PURE__*/ m$1(function(r) {
                                return i(null, /*#__PURE__*/ n(r), this.head, this);
                            }, "unshift")
                        },
                        {
                            key: "remove",
                            value: /*#__PURE__*/ m$1(function(r) {
                                return a(r, this);
                            }, "remove")
                        },
                        {
                            key: "pop",
                            value: /*#__PURE__*/ m$1(function() {
                                return a(this.tail, this).value;
                            }, "pop")
                        },
                        {
                            key: "popNode",
                            value: /*#__PURE__*/ m$1(function() {
                                return a(this.tail, this);
                            }, "popNode")
                        },
                        {
                            key: "shift",
                            value: /*#__PURE__*/ m$1(function() {
                                return a(this.head, this).value;
                            }, "shift")
                        },
                        {
                            key: "shiftNode",
                            value: /*#__PURE__*/ m$1(function() {
                                return a(this.head, this);
                            }, "shiftNode")
                        },
                        {
                            key: "get_object_at",
                            value: /*#__PURE__*/ m$1(function(r) {
                                if (r <= this.length()) {
                                    for(var e = 1, o = this.head; e < r;)o = o.next, e++;
                                    return o.value;
                                }
                            }, "get_object_at")
                        },
                        {
                            key: "set_object_at",
                            value: /*#__PURE__*/ m$1(function(r, e) {
                                if (r <= this.length()) {
                                    for(var o = 1, f = this.head; o < r;)f = f.next, o++;
                                    f.value = e;
                                }
                            }, "set_object_at")
                        }
                    ]), t;
                }();
                E.exports = c;
            },
            function(E, w, N) {
                function g(s, n, i) {
                    this.x = null, this.y = null, s == null && n == null && i == null ? (this.x = 0, this.y = 0) : typeof s == "number" && typeof n == "number" && i == null ? (this.x = s, this.y = n) : s.constructor.name == "Point" && n == null && i == null && (i = s, this.x = i.x, this.y = i.y);
                }
                m$1(g, "Point"), g.prototype.getX = function() {
                    return this.x;
                }, g.prototype.getY = function() {
                    return this.y;
                }, g.prototype.getLocation = function() {
                    return new g(this.x, this.y);
                }, g.prototype.setLocation = function(s, n, i) {
                    s.constructor.name == "Point" && n == null && i == null ? (i = s, this.setLocation(i.x, i.y)) : typeof s == "number" && typeof n == "number" && i == null && (parseInt(s) == s && parseInt(n) == n ? this.move(s, n) : (this.x = /*#__PURE__*/ Math.floor(s + .5), this.y = /*#__PURE__*/ Math.floor(n + .5)));
                }, g.prototype.move = function(s, n) {
                    this.x = s, this.y = n;
                }, g.prototype.translate = function(s, n) {
                    this.x += s, this.y += n;
                }, g.prototype.equals = function(s) {
                    if (s.constructor.name == "Point") {
                        var n = s;
                        return this.x == n.x && this.y == n.y;
                    }
                    return this == s;
                }, g.prototype.toString = function() {
                    return new g().constructor.name + "[x=" + this.x + ",y=" + this.y + "]";
                }, E.exports = g;
            },
            function(E, w, N) {
                function g(s, n, i, a) {
                    this.x = 0, this.y = 0, this.width = 0, this.height = 0, s != null && n != null && i != null && a != null && (this.x = s, this.y = n, this.width = i, this.height = a);
                }
                m$1(g, "RectangleD"), g.prototype.getX = function() {
                    return this.x;
                }, g.prototype.setX = function(s) {
                    this.x = s;
                }, g.prototype.getY = function() {
                    return this.y;
                }, g.prototype.setY = function(s) {
                    this.y = s;
                }, g.prototype.getWidth = function() {
                    return this.width;
                }, g.prototype.setWidth = function(s) {
                    this.width = s;
                }, g.prototype.getHeight = function() {
                    return this.height;
                }, g.prototype.setHeight = function(s) {
                    this.height = s;
                }, g.prototype.getRight = function() {
                    return this.x + this.width;
                }, g.prototype.getBottom = function() {
                    return this.y + this.height;
                }, g.prototype.intersects = function(s) {
                    return !(this.getRight() < s.x || this.getBottom() < s.y || s.getRight() < this.x || s.getBottom() < this.y);
                }, g.prototype.getCenterX = function() {
                    return this.x + this.width / 2;
                }, g.prototype.getMinX = function() {
                    return this.getX();
                }, g.prototype.getMaxX = function() {
                    return this.getX() + this.width;
                }, g.prototype.getCenterY = function() {
                    return this.y + this.height / 2;
                }, g.prototype.getMinY = function() {
                    return this.getY();
                }, g.prototype.getMaxY = function() {
                    return this.getY() + this.height;
                }, g.prototype.getWidthHalf = function() {
                    return this.width / 2;
                }, g.prototype.getHeightHalf = function() {
                    return this.height / 2;
                }, E.exports = g;
            },
            function(E, w, N) {
                var g = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
                    return typeof n;
                } : function(n) {
                    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
                };
                function s() {}
                m$1(s, "UniqueIDGeneretor"), s.lastID = 0, s.createID = function(n) {
                    return s.isPrimitive(n) ? n : (n.uniqueID != null || (n.uniqueID = /*#__PURE__*/ s.getString(), s.lastID++), n.uniqueID);
                }, s.getString = function(n) {
                    return n == null && (n = s.lastID), "Object#" + n;
                }, s.isPrimitive = function(n) {
                    var i = typeof n > "u" ? "undefined" : g(n);
                    return n == null || i != "object" && i != "function";
                }, E.exports = s;
            },
            function(E, w, N) {
                function g(o) {
                    if (Array.isArray(o)) {
                        for(var f = 0, l = /*#__PURE__*/ Array(o.length); f < o.length; f++)l[f] = o[f];
                        return l;
                    } else return Array.from(o);
                }
                m$1(g, "_toConsumableArray");
                var s = /*#__PURE__*/ N(0), n = /*#__PURE__*/ N(7), i = /*#__PURE__*/ N(3), a = /*#__PURE__*/ N(1), c = /*#__PURE__*/ N(6), t = /*#__PURE__*/ N(5), u = /*#__PURE__*/ N(17), r = /*#__PURE__*/ N(29);
                function e(o) {
                    r.call(this), this.layoutQuality = s.QUALITY, this.createBendsAsNeeded = s.DEFAULT_CREATE_BENDS_AS_NEEDED, this.incremental = s.DEFAULT_INCREMENTAL, this.animationOnLayout = s.DEFAULT_ANIMATION_ON_LAYOUT, this.animationDuringLayout = s.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = s.DEFAULT_ANIMATION_PERIOD, this.uniformLeafNodeSizes = s.DEFAULT_UNIFORM_LEAF_NODE_SIZES, this.edgeToDummyNodes = new Map, this.graphManager = new n(this), this.isLayoutFinished = false, this.isSubLayout = false, this.isRemoteUse = false, o != null && (this.isRemoteUse = o);
                }
                m$1(e, "Layout"), e.RANDOM_SEED = 1, e.prototype = /*#__PURE__*/ Object.create(r.prototype), e.prototype.getGraphManager = function() {
                    return this.graphManager;
                }, e.prototype.getAllNodes = function() {
                    return this.graphManager.getAllNodes();
                }, e.prototype.getAllEdges = function() {
                    return this.graphManager.getAllEdges();
                }, e.prototype.getAllNodesToApplyGravitation = function() {
                    return this.graphManager.getAllNodesToApplyGravitation();
                }, e.prototype.newGraphManager = function() {
                    var o = new n(this);
                    return this.graphManager = o, o;
                }, e.prototype.newGraph = function(o) {
                    return new c(null, this.graphManager, o);
                }, e.prototype.newNode = function(o) {
                    return new i(this.graphManager, o);
                }, e.prototype.newEdge = function(o) {
                    return new a(null, null, o);
                }, e.prototype.checkLayoutSuccess = function() {
                    return this.graphManager.getRoot() == null || this.graphManager.getRoot().getNodes().length == 0 || this.graphManager.includesInvalidEdge();
                }, e.prototype.runLayout = function() {
                    this.isLayoutFinished = false, this.tilingPreLayout && this.tilingPreLayout(), this.initParameters();
                    var o;
                    return this.checkLayoutSuccess() ? o = false : o = /*#__PURE__*/ this.layout(), s.ANIMATE === "during" ? false : (o && (this.isSubLayout || this.doPostLayout()), this.tilingPostLayout && this.tilingPostLayout(), this.isLayoutFinished = true, o);
                }, e.prototype.doPostLayout = function() {
                    this.incremental || this.transform(), this.update();
                }, e.prototype.update2 = function() {
                    if (this.createBendsAsNeeded && (this.createBendpointsFromDummyNodes(), this.graphManager.resetAllEdges()), !this.isRemoteUse) {
                        for(var o, f = /*#__PURE__*/ this.graphManager.getAllEdges(), l = 0; l < f.length; l++)o = f[l];
                        for(var A, v = /*#__PURE__*/ this.graphManager.getRoot().getNodes(), l = 0; l < v.length; l++)A = v[l];
                        this.update(/*#__PURE__*/ this.graphManager.getRoot());
                    }
                }, e.prototype.update = function(o) {
                    if (o == null) this.update2();
                    else if (o instanceof i) {
                        var f = o;
                        if (f.getChild() != null) for(var l = /*#__PURE__*/ f.getChild().getNodes(), A = 0; A < l.length; A++)update(l[A]);
                        if (f.vGraphObject != null) {
                            var v = f.vGraphObject;
                            v.update(f);
                        }
                    } else if (o instanceof a) {
                        var y = o;
                        if (y.vGraphObject != null) {
                            var D = y.vGraphObject;
                            D.update(y);
                        }
                    } else if (o instanceof c) {
                        var S = o;
                        if (S.vGraphObject != null) {
                            var C = S.vGraphObject;
                            C.update(S);
                        }
                    }
                }, e.prototype.initParameters = function() {
                    this.isSubLayout || (this.layoutQuality = s.QUALITY, this.animationDuringLayout = s.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = s.DEFAULT_ANIMATION_PERIOD, this.animationOnLayout = s.DEFAULT_ANIMATION_ON_LAYOUT, this.incremental = s.DEFAULT_INCREMENTAL, this.createBendsAsNeeded = s.DEFAULT_CREATE_BENDS_AS_NEEDED, this.uniformLeafNodeSizes = s.DEFAULT_UNIFORM_LEAF_NODE_SIZES), this.animationDuringLayout && (this.animationOnLayout = false);
                }, e.prototype.transform = function(o) {
                    if (o == null) this.transform(new t(0, 0));
                    else {
                        var f = new u, l = /*#__PURE__*/ this.graphManager.getRoot().updateLeftTop();
                        if (l != null) {
                            f.setWorldOrgX(o.x), f.setWorldOrgY(o.y), f.setDeviceOrgX(l.x), f.setDeviceOrgY(l.y);
                            for(var A = /*#__PURE__*/ this.getAllNodes(), v, y = 0; y < A.length; y++)v = A[y], v.transform(f);
                        }
                    }
                }, e.prototype.positionNodesRandomly = function(o) {
                    if (o == null) this.positionNodesRandomly(/*#__PURE__*/ this.getGraphManager().getRoot()), this.getGraphManager().getRoot().updateBounds(true);
                    else for(var f, l, A = /*#__PURE__*/ o.getNodes(), v = 0; v < A.length; v++)f = A[v], l = /*#__PURE__*/ f.getChild(), l == null || l.getNodes().length == 0 ? f.scatter() : (this.positionNodesRandomly(l), f.updateBounds());
                }, e.prototype.getFlatForest = function() {
                    for(var o = [], f = true, l = /*#__PURE__*/ this.graphManager.getRoot().getNodes(), A = true, v = 0; v < l.length; v++)l[v].getChild() != null && (A = false);
                    if (!A) return o;
                    var y = new Set, D = [], S = new Map, C = [];
                    for(C = /*#__PURE__*/ C.concat(l); C.length > 0 && f;){
                        for(D.push(C[0]); D.length > 0 && f;){
                            var b = D[0];
                            D.splice(0, 1), y.add(b);
                            for(var z = /*#__PURE__*/ b.getEdges(), v = 0; v < z.length; v++){
                                var X = /*#__PURE__*/ z[v].getOtherEnd(b);
                                if (S.get(b) != X) if (!y.has(X)) D.push(X), S.set(X, b);
                                else {
                                    f = false;
                                    break;
                                }
                            }
                        }
                        if (!f) o = [];
                        else {
                            var K = /*#__PURE__*/ [].concat(/*#__PURE__*/ g(y));
                            o.push(K);
                            for(var v = 0; v < K.length; v++){
                                var R = K[v], J = /*#__PURE__*/ C.indexOf(R);
                                J > -1 && C.splice(J, 1);
                            }
                            y = new Set, S = new Map;
                        }
                    }
                    return o;
                }, e.prototype.createDummyNodesForBendpoints = function(o) {
                    for(var f = [], l = o.source, A = /*#__PURE__*/ this.graphManager.calcLowestCommonAncestor(o.source, o.target), v = 0; v < o.bendpoints.length; v++){
                        var y = /*#__PURE__*/ this.newNode(null);
                        y.setRect(new Point(0, 0), new Dimension(1, 1)), A.add(y);
                        var D = /*#__PURE__*/ this.newEdge(null);
                        this.graphManager.add(D, l, y), f.add(y), l = y;
                    }
                    var D = /*#__PURE__*/ this.newEdge(null);
                    return this.graphManager.add(D, l, o.target), this.edgeToDummyNodes.set(o, f), o.isInterGraph() ? this.graphManager.remove(o) : A.remove(o), f;
                }, e.prototype.createBendpointsFromDummyNodes = function() {
                    var o = [];
                    o = /*#__PURE__*/ o.concat(/*#__PURE__*/ this.graphManager.getAllEdges()), o = /*#__PURE__*/ [].concat(/*#__PURE__*/ g(/*#__PURE__*/ this.edgeToDummyNodes.keys())).concat(o);
                    for(var f = 0; f < o.length; f++){
                        var l = o[f];
                        if (l.bendpoints.length > 0) {
                            for(var A = /*#__PURE__*/ this.edgeToDummyNodes.get(l), v = 0; v < A.length; v++){
                                var y = A[v], D = new t(y.getCenterX(), y.getCenterY()), S = /*#__PURE__*/ l.bendpoints.get(v);
                                S.x = D.x, S.y = D.y, y.getOwner().remove(y);
                            }
                            this.graphManager.add(l, l.source, l.target);
                        }
                    }
                }, e.transform = function(o, f, l, A) {
                    if (l != null && A != null) {
                        var v = f;
                        if (o <= 50) {
                            var y = f / l;
                            v -= (f - y) / 50 * (50 - o);
                        } else {
                            var D = f * A;
                            v += (D - f) / 50 * (o - 50);
                        }
                        return v;
                    } else {
                        var S, C;
                        return o <= 50 ? (S = 9 * f / 500, C = f / 10) : (S = 9 * f / 50, C = -8 * f), S * o + C;
                    }
                }, e.findCenterOfTree = function(o) {
                    var f = [];
                    f = /*#__PURE__*/ f.concat(o);
                    var l = [], A = new Map, v = false, y = null;
                    (f.length == 1 || f.length == 2) && (v = true, y = f[0]);
                    for(var D = 0; D < f.length; D++){
                        var S = f[D], C = S.getNeighborsList().size;
                        A.set(S, S.getNeighborsList().size), C == 1 && l.push(S);
                    }
                    var b = [];
                    for(b = /*#__PURE__*/ b.concat(l); !v;){
                        var z = [];
                        z = /*#__PURE__*/ z.concat(b), b = [];
                        for(var D = 0; D < f.length; D++){
                            var S = f[D], X = /*#__PURE__*/ f.indexOf(S);
                            X >= 0 && f.splice(X, 1);
                            var K = /*#__PURE__*/ S.getNeighborsList();
                            K.forEach(function(h) {
                                if (l.indexOf(h) < 0) {
                                    var m = /*#__PURE__*/ A.get(h), d = m - 1;
                                    d == 1 && b.push(h), A.set(h, d);
                                }
                            });
                        }
                        l = /*#__PURE__*/ l.concat(b), (f.length == 1 || f.length == 2) && (v = true, y = f[0]);
                    }
                    return y;
                }, e.prototype.setGraphManager = function(o) {
                    this.graphManager = o;
                }, E.exports = e;
            },
            function(E, w, N) {
                function g() {}
                m$1(g, "RandomSeed"), g.seed = 1, g.x = 0, g.nextDouble = function() {
                    return g.x = Math.sin(g.seed++) * 1e4, g.x - Math.floor(g.x);
                }, E.exports = g;
            },
            function(E, w, N) {
                var g = /*#__PURE__*/ N(5);
                function s(n, i) {
                    this.lworldOrgX = 0, this.lworldOrgY = 0, this.ldeviceOrgX = 0, this.ldeviceOrgY = 0, this.lworldExtX = 1, this.lworldExtY = 1, this.ldeviceExtX = 1, this.ldeviceExtY = 1;
                }
                m$1(s, "Transform"), s.prototype.getWorldOrgX = function() {
                    return this.lworldOrgX;
                }, s.prototype.setWorldOrgX = function(n) {
                    this.lworldOrgX = n;
                }, s.prototype.getWorldOrgY = function() {
                    return this.lworldOrgY;
                }, s.prototype.setWorldOrgY = function(n) {
                    this.lworldOrgY = n;
                }, s.prototype.getWorldExtX = function() {
                    return this.lworldExtX;
                }, s.prototype.setWorldExtX = function(n) {
                    this.lworldExtX = n;
                }, s.prototype.getWorldExtY = function() {
                    return this.lworldExtY;
                }, s.prototype.setWorldExtY = function(n) {
                    this.lworldExtY = n;
                }, s.prototype.getDeviceOrgX = function() {
                    return this.ldeviceOrgX;
                }, s.prototype.setDeviceOrgX = function(n) {
                    this.ldeviceOrgX = n;
                }, s.prototype.getDeviceOrgY = function() {
                    return this.ldeviceOrgY;
                }, s.prototype.setDeviceOrgY = function(n) {
                    this.ldeviceOrgY = n;
                }, s.prototype.getDeviceExtX = function() {
                    return this.ldeviceExtX;
                }, s.prototype.setDeviceExtX = function(n) {
                    this.ldeviceExtX = n;
                }, s.prototype.getDeviceExtY = function() {
                    return this.ldeviceExtY;
                }, s.prototype.setDeviceExtY = function(n) {
                    this.ldeviceExtY = n;
                }, s.prototype.transformX = function(n) {
                    var i = 0, a = this.lworldExtX;
                    return a != 0 && (i = this.ldeviceOrgX + (n - this.lworldOrgX) * this.ldeviceExtX / a), i;
                }, s.prototype.transformY = function(n) {
                    var i = 0, a = this.lworldExtY;
                    return a != 0 && (i = this.ldeviceOrgY + (n - this.lworldOrgY) * this.ldeviceExtY / a), i;
                }, s.prototype.inverseTransformX = function(n) {
                    var i = 0, a = this.ldeviceExtX;
                    return a != 0 && (i = this.lworldOrgX + (n - this.ldeviceOrgX) * this.lworldExtX / a), i;
                }, s.prototype.inverseTransformY = function(n) {
                    var i = 0, a = this.ldeviceExtY;
                    return a != 0 && (i = this.lworldOrgY + (n - this.ldeviceOrgY) * this.lworldExtY / a), i;
                }, s.prototype.inverseTransformPoint = function(n) {
                    var i = new g(this.inverseTransformX(n.x), this.inverseTransformY(n.y));
                    return i;
                }, E.exports = s;
            },
            function(E, w, N) {
                function g(r) {
                    if (Array.isArray(r)) {
                        for(var e = 0, o = /*#__PURE__*/ Array(r.length); e < r.length; e++)o[e] = r[e];
                        return o;
                    } else return Array.from(r);
                }
                m$1(g, "_toConsumableArray");
                var s = /*#__PURE__*/ N(15), n = /*#__PURE__*/ N(4), i = /*#__PURE__*/ N(0), a = /*#__PURE__*/ N(8), c = /*#__PURE__*/ N(9);
                function t() {
                    s.call(this), this.useSmartIdealEdgeLengthCalculation = n.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.gravityConstant = n.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = n.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = n.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = n.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.displacementThresholdPerNode = 3 * n.DEFAULT_EDGE_LENGTH / 100, this.coolingFactor = n.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.initialCoolingFactor = n.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.totalDisplacement = 0, this.oldTotalDisplacement = 0, this.maxIterations = n.MAX_ITERATIONS;
                }
                m$1(t, "FDLayout"), t.prototype = /*#__PURE__*/ Object.create(s.prototype);
                for(var u in s)t[u] = s[u];
                t.prototype.initParameters = function() {
                    s.prototype.initParameters.call(this, arguments), this.totalIterations = 0, this.notAnimatedIterations = 0, this.useFRGridVariant = n.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION, this.grid = [];
                }, t.prototype.calcIdealEdgeLengths = function() {
                    for(var r, e, o, f, l, A, v, y = /*#__PURE__*/ this.getGraphManager().getAllEdges(), D = 0; D < y.length; D++)r = y[D], e = r.idealLength, r.isInterGraph && (f = /*#__PURE__*/ r.getSource(), l = /*#__PURE__*/ r.getTarget(), A = /*#__PURE__*/ r.getSourceInLca().getEstimatedSize(), v = /*#__PURE__*/ r.getTargetInLca().getEstimatedSize(), this.useSmartIdealEdgeLengthCalculation && (r.idealLength += A + v - 2 * i.SIMPLE_NODE_SIZE), o = /*#__PURE__*/ r.getLca().getInclusionTreeDepth(), r.idealLength += e * n.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR * (f.getInclusionTreeDepth() + l.getInclusionTreeDepth() - 2 * o));
                }, t.prototype.initSpringEmbedder = function() {
                    var r = this.getAllNodes().length;
                    this.incremental ? (r > n.ADAPTATION_LOWER_NODE_LIMIT && (this.coolingFactor = /*#__PURE__*/ Math.max(this.coolingFactor * n.COOLING_ADAPTATION_FACTOR, this.coolingFactor - (r - n.ADAPTATION_LOWER_NODE_LIMIT) / (n.ADAPTATION_UPPER_NODE_LIMIT - n.ADAPTATION_LOWER_NODE_LIMIT) * this.coolingFactor * (1 - n.COOLING_ADAPTATION_FACTOR))), this.maxNodeDisplacement = n.MAX_NODE_DISPLACEMENT_INCREMENTAL) : (r > n.ADAPTATION_LOWER_NODE_LIMIT ? this.coolingFactor = /*#__PURE__*/ Math.max(n.COOLING_ADAPTATION_FACTOR, 1 - (r - n.ADAPTATION_LOWER_NODE_LIMIT) / (n.ADAPTATION_UPPER_NODE_LIMIT - n.ADAPTATION_LOWER_NODE_LIMIT) * (1 - n.COOLING_ADAPTATION_FACTOR)) : this.coolingFactor = 1, this.initialCoolingFactor = this.coolingFactor, this.maxNodeDisplacement = n.MAX_NODE_DISPLACEMENT), this.maxIterations = /*#__PURE__*/ Math.max(this.getAllNodes().length * 5, this.maxIterations), this.displacementThresholdPerNode = 3 * n.DEFAULT_EDGE_LENGTH / 100, this.totalDisplacementThreshold = this.displacementThresholdPerNode * this.getAllNodes().length, this.repulsionRange = /*#__PURE__*/ this.calcRepulsionRange();
                }, t.prototype.calcSpringForces = function() {
                    for(var r = /*#__PURE__*/ this.getAllEdges(), e, o = 0; o < r.length; o++)e = r[o], this.calcSpringForce(e, e.idealLength);
                }, t.prototype.calcRepulsionForces = function() {
                    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, o, f, l, A, v = /*#__PURE__*/ this.getAllNodes(), y;
                    if (this.useFRGridVariant) for(this.totalIterations % n.GRID_CALCULATION_CHECK_PERIOD == 1 && r && this.updateGrid(), y = new Set, o = 0; o < v.length; o++)l = v[o], this.calculateRepulsionForceOfANode(l, y, r, e), y.add(l);
                    else for(o = 0; o < v.length; o++)for(l = v[o], f = o + 1; f < v.length; f++)A = v[f], l.getOwner() == A.getOwner() && this.calcRepulsionForce(l, A);
                }, t.prototype.calcGravitationalForces = function() {
                    for(var r, e = /*#__PURE__*/ this.getAllNodesToApplyGravitation(), o = 0; o < e.length; o++)r = e[o], this.calcGravitationalForce(r);
                }, t.prototype.moveNodes = function() {
                    for(var r = /*#__PURE__*/ this.getAllNodes(), e, o = 0; o < r.length; o++)e = r[o], e.move();
                }, t.prototype.calcSpringForce = function(r, e) {
                    var o = /*#__PURE__*/ r.getSource(), f = /*#__PURE__*/ r.getTarget(), l, A, v, y;
                    if (this.uniformLeafNodeSizes && o.getChild() == null && f.getChild() == null) r.updateLengthSimple();
                    else if (r.updateLength(), r.isOverlapingSourceAndTarget) return;
                    l = /*#__PURE__*/ r.getLength(), l != 0 && (A = r.edgeElasticity * (l - e), v = A * (r.lengthX / l), y = A * (r.lengthY / l), o.springForceX += v, o.springForceY += y, f.springForceX -= v, f.springForceY -= y);
                }, t.prototype.calcRepulsionForce = function(r, e) {
                    var o = /*#__PURE__*/ r.getRect(), f = /*#__PURE__*/ e.getRect(), l = new Array(2), A = new Array(4), v, y, D, S, C, b, z;
                    if (o.intersects(f)) {
                        a.calcSeparationAmount(o, f, l, n.DEFAULT_EDGE_LENGTH / 2), b = 2 * l[0], z = 2 * l[1];
                        var X = r.noOfChildren * e.noOfChildren / (r.noOfChildren + e.noOfChildren);
                        r.repulsionForceX -= X * b, r.repulsionForceY -= X * z, e.repulsionForceX += X * b, e.repulsionForceY += X * z;
                    } else this.uniformLeafNodeSizes && r.getChild() == null && e.getChild() == null ? (v = f.getCenterX() - o.getCenterX(), y = f.getCenterY() - o.getCenterY()) : (a.getIntersection(o, f, A), v = A[2] - A[0], y = A[3] - A[1]), Math.abs(v) < n.MIN_REPULSION_DIST && (v = c.sign(v) * n.MIN_REPULSION_DIST), Math.abs(y) < n.MIN_REPULSION_DIST && (y = c.sign(y) * n.MIN_REPULSION_DIST), D = v * v + y * y, S = /*#__PURE__*/ Math.sqrt(D), C = (r.nodeRepulsion / 2 + e.nodeRepulsion / 2) * r.noOfChildren * e.noOfChildren / D, b = C * v / S, z = C * y / S, r.repulsionForceX -= b, r.repulsionForceY -= z, e.repulsionForceX += b, e.repulsionForceY += z;
                }, t.prototype.calcGravitationalForce = function(r) {
                    var e, o, f, l, A, v, y, D;
                    e = /*#__PURE__*/ r.getOwner(), o = (e.getRight() + e.getLeft()) / 2, f = (e.getTop() + e.getBottom()) / 2, l = r.getCenterX() - o, A = r.getCenterY() - f, v = Math.abs(l) + r.getWidth() / 2, y = Math.abs(A) + r.getHeight() / 2, r.getOwner() == this.graphManager.getRoot() ? (D = e.getEstimatedSize() * this.gravityRangeFactor, (v > D || y > D) && (r.gravitationForceX = -this.gravityConstant * l, r.gravitationForceY = -this.gravityConstant * A)) : (D = e.getEstimatedSize() * this.compoundGravityRangeFactor, (v > D || y > D) && (r.gravitationForceX = -this.gravityConstant * l * this.compoundGravityConstant, r.gravitationForceY = -this.gravityConstant * A * this.compoundGravityConstant));
                }, t.prototype.isConverged = function() {
                    var r, e = false;
                    return this.totalIterations > this.maxIterations / 3 && (e = Math.abs(this.totalDisplacement - this.oldTotalDisplacement) < 2), r = this.totalDisplacement < this.totalDisplacementThreshold, this.oldTotalDisplacement = this.totalDisplacement, r || e;
                }, t.prototype.animate = function() {
                    this.animationDuringLayout && !this.isSubLayout && (this.notAnimatedIterations == this.animationPeriod ? (this.update(), this.notAnimatedIterations = 0) : this.notAnimatedIterations++);
                }, t.prototype.calcNoOfChildrenForAllNodes = function() {
                    for(var r, e = /*#__PURE__*/ this.graphManager.getAllNodes(), o = 0; o < e.length; o++)r = e[o], r.noOfChildren = /*#__PURE__*/ r.getNoOfChildren();
                }, t.prototype.calcGrid = function(r) {
                    var e = 0, o = 0;
                    e = /*#__PURE__*/ parseInt(/*#__PURE__*/ Math.ceil((r.getRight() - r.getLeft()) / this.repulsionRange)), o = /*#__PURE__*/ parseInt(/*#__PURE__*/ Math.ceil((r.getBottom() - r.getTop()) / this.repulsionRange));
                    for(var f = new Array(e), l = 0; l < e; l++)f[l] = new Array(o);
                    for(var l = 0; l < e; l++)for(var A = 0; A < o; A++)f[l][A] = new Array;
                    return f;
                }, t.prototype.addNodeToGrid = function(r, e, o) {
                    var f = 0, l = 0, A = 0, v = 0;
                    f = /*#__PURE__*/ parseInt(/*#__PURE__*/ Math.floor((r.getRect().x - e) / this.repulsionRange)), l = /*#__PURE__*/ parseInt(/*#__PURE__*/ Math.floor((r.getRect().width + r.getRect().x - e) / this.repulsionRange)), A = /*#__PURE__*/ parseInt(/*#__PURE__*/ Math.floor((r.getRect().y - o) / this.repulsionRange)), v = /*#__PURE__*/ parseInt(/*#__PURE__*/ Math.floor((r.getRect().height + r.getRect().y - o) / this.repulsionRange));
                    for(var y = f; y <= l; y++)for(var D = A; D <= v; D++)this.grid[y][D].push(r), r.setGridCoordinates(f, l, A, v);
                }, t.prototype.updateGrid = function() {
                    var r, e, o = /*#__PURE__*/ this.getAllNodes();
                    for(this.grid = /*#__PURE__*/ this.calcGrid(/*#__PURE__*/ this.graphManager.getRoot()), r = 0; r < o.length; r++)e = o[r], this.addNodeToGrid(e, /*#__PURE__*/ this.graphManager.getRoot().getLeft(), /*#__PURE__*/ this.graphManager.getRoot().getTop());
                }, t.prototype.calculateRepulsionForceOfANode = function(r, e, o, f) {
                    if (this.totalIterations % n.GRID_CALCULATION_CHECK_PERIOD == 1 && o || f) {
                        var l = new Set;
                        r.surrounding = new Array;
                        for(var A, v = this.grid, y = r.startX - 1; y < r.finishX + 2; y++)for(var D = r.startY - 1; D < r.finishY + 2; D++)if (!(y < 0 || D < 0 || y >= v.length || D >= v[0].length)) {
                            for(var S = 0; S < v[y][D].length; S++)if (A = v[y][D][S], !(r.getOwner() != A.getOwner() || r == A) && !e.has(A) && !l.has(A)) {
                                var C = Math.abs(r.getCenterX() - A.getCenterX()) - (r.getWidth() / 2 + A.getWidth() / 2), b = Math.abs(r.getCenterY() - A.getCenterY()) - (r.getHeight() / 2 + A.getHeight() / 2);
                                C <= this.repulsionRange && b <= this.repulsionRange && l.add(A);
                            }
                        }
                        r.surrounding = /*#__PURE__*/ [].concat(/*#__PURE__*/ g(l));
                    }
                    for(y = 0; y < r.surrounding.length; y++)this.calcRepulsionForce(r, r.surrounding[y]);
                }, t.prototype.calcRepulsionRange = function() {
                    return 0;
                }, E.exports = t;
            },
            function(E, w, N) {
                var g = /*#__PURE__*/ N(1), s = /*#__PURE__*/ N(4);
                function n(a, c, t) {
                    g.call(this, a, c, t), this.idealLength = s.DEFAULT_EDGE_LENGTH, this.edgeElasticity = s.DEFAULT_SPRING_STRENGTH;
                }
                m$1(n, "FDLayoutEdge"), n.prototype = /*#__PURE__*/ Object.create(g.prototype);
                for(var i in g)n[i] = g[i];
                E.exports = n;
            },
            function(E, w, N) {
                var g = /*#__PURE__*/ N(3), s = /*#__PURE__*/ N(4);
                function n(a, c, t, u) {
                    g.call(this, a, c, t, u), this.nodeRepulsion = s.DEFAULT_REPULSION_STRENGTH, this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0, this.startX = 0, this.finishX = 0, this.startY = 0, this.finishY = 0, this.surrounding = [];
                }
                m$1(n, "FDLayoutNode"), n.prototype = /*#__PURE__*/ Object.create(g.prototype);
                for(var i in g)n[i] = g[i];
                n.prototype.setGridCoordinates = function(a, c, t, u) {
                    this.startX = a, this.finishX = c, this.startY = t, this.finishY = u;
                }, E.exports = n;
            },
            function(E, w, N) {
                function g(s, n) {
                    this.width = 0, this.height = 0, s !== null && n !== null && (this.height = n, this.width = s);
                }
                m$1(g, "DimensionD"), g.prototype.getWidth = function() {
                    return this.width;
                }, g.prototype.setWidth = function(s) {
                    this.width = s;
                }, g.prototype.getHeight = function() {
                    return this.height;
                }, g.prototype.setHeight = function(s) {
                    this.height = s;
                }, E.exports = g;
            },
            function(E, w, N) {
                var g = /*#__PURE__*/ N(14);
                function s() {
                    this.map = {}, this.keys = [];
                }
                m$1(s, "HashMap"), s.prototype.put = function(n, i) {
                    var a = /*#__PURE__*/ g.createID(n);
                    this.contains(a) || (this.map[a] = i, this.keys.push(n));
                }, s.prototype.contains = function(n) {
                    g.createID(n);
                    return this.map[n] != null;
                }, s.prototype.get = function(n) {
                    var i = /*#__PURE__*/ g.createID(n);
                    return this.map[i];
                }, s.prototype.keySet = function() {
                    return this.keys;
                }, E.exports = s;
            },
            function(E, w, N) {
                var g = /*#__PURE__*/ N(14);
                function s() {
                    this.set = {};
                }
                m$1(s, "HashSet"), s.prototype.add = function(n) {
                    var i = /*#__PURE__*/ g.createID(n);
                    this.contains(i) || (this.set[i] = n);
                }, s.prototype.remove = function(n) {
                    delete this.set[g.createID(n)];
                }, s.prototype.clear = function() {
                    this.set = {};
                }, s.prototype.contains = function(n) {
                    return this.set[g.createID(n)] == n;
                }, s.prototype.isEmpty = function() {
                    return this.size() === 0;
                }, s.prototype.size = function() {
                    return Object.keys(this.set).length;
                }, s.prototype.addAllTo = function(n) {
                    for(var i = /*#__PURE__*/ Object.keys(this.set), a = i.length, c = 0; c < a; c++)n.push(this.set[i[c]]);
                }, s.prototype.size = function() {
                    return Object.keys(this.set).length;
                }, s.prototype.addAll = function(n) {
                    for(var i = n.length, a = 0; a < i; a++){
                        var c = n[a];
                        this.add(c);
                    }
                }, E.exports = s;
            },
            function(E, w, N) {
                function g() {}
                m$1(g, "Matrix"), g.multMat = function(s, n) {
                    for(var i = [], a = 0; a < s.length; a++){
                        i[a] = [];
                        for(var c = 0; c < n[0].length; c++){
                            i[a][c] = 0;
                            for(var t = 0; t < s[0].length; t++)i[a][c] += s[a][t] * n[t][c];
                        }
                    }
                    return i;
                }, g.transpose = function(s) {
                    for(var n = [], i = 0; i < s[0].length; i++){
                        n[i] = [];
                        for(var a = 0; a < s.length; a++)n[i][a] = s[a][i];
                    }
                    return n;
                }, g.multCons = function(s, n) {
                    for(var i = [], a = 0; a < s.length; a++)i[a] = s[a] * n;
                    return i;
                }, g.minusOp = function(s, n) {
                    for(var i = [], a = 0; a < s.length; a++)i[a] = s[a] - n[a];
                    return i;
                }, g.dotProduct = function(s, n) {
                    for(var i = 0, a = 0; a < s.length; a++)i += s[a] * n[a];
                    return i;
                }, g.mag = function(s) {
                    return Math.sqrt(/*#__PURE__*/ this.dotProduct(s, s));
                }, g.normalize = function(s) {
                    for(var n = [], i = /*#__PURE__*/ this.mag(s), a = 0; a < s.length; a++)n[a] = s[a] / i;
                    return n;
                }, g.multGamma = function(s) {
                    for(var n = [], i = 0, a = 0; a < s.length; a++)i += s[a];
                    i *= -1 / s.length;
                    for(var c = 0; c < s.length; c++)n[c] = i + s[c];
                    return n;
                }, g.multL = function(s, n, i) {
                    for(var a = [], c = [], t = [], u = 0; u < n[0].length; u++){
                        for(var r = 0, e = 0; e < n.length; e++)r += -0.5 * n[e][u] * s[e];
                        c[u] = r;
                    }
                    for(var o = 0; o < i.length; o++){
                        for(var f = 0, l = 0; l < i.length; l++)f += i[o][l] * c[l];
                        t[o] = f;
                    }
                    for(var A = 0; A < n.length; A++){
                        for(var v = 0, y = 0; y < n[0].length; y++)v += n[A][y] * t[y];
                        a[A] = v;
                    }
                    return a;
                }, E.exports = g;
            },
            function(E, w, N) {
                var g = /*#__PURE__*/ function() {
                    function a(c, t) {
                        for(var u = 0; u < t.length; u++){
                            var r = t[u];
                            r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(c, r.key, r);
                        }
                    }
                    return m$1(a, "defineProperties"), function(c, t, u) {
                        return t && a(c.prototype, t), u && a(c, u), c;
                    };
                }();
                function s(a, c) {
                    if (!(a instanceof c)) throw new TypeError("Cannot call a class as a function");
                }
                m$1(s, "_classCallCheck");
                var n = /*#__PURE__*/ N(11), i = /*#__PURE__*/ function() {
                    function a(c, t) {
                        s(this, a), (t !== null || t !== void 0) && (this.compareFunction = this._defaultCompareFunction);
                        var u = void 0;
                        c instanceof n ? u = /*#__PURE__*/ c.size() : u = c.length, this._quicksort(c, 0, u - 1);
                    }
                    return m$1(a, "Quicksort"), g(a, [
                        {
                            key: "_quicksort",
                            value: /*#__PURE__*/ m$1(function(t, u, r) {
                                if (u < r) {
                                    var e = /*#__PURE__*/ this._partition(t, u, r);
                                    this._quicksort(t, u, e), this._quicksort(t, e + 1, r);
                                }
                            }, "_quicksort")
                        },
                        {
                            key: "_partition",
                            value: /*#__PURE__*/ m$1(function(t, u, r) {
                                for(var e = /*#__PURE__*/ this._get(t, u), o = u, f = r;;){
                                    for(; this.compareFunction(e, /*#__PURE__*/ this._get(t, f));)f--;
                                    for(; this.compareFunction(/*#__PURE__*/ this._get(t, o), e);)o++;
                                    if (o < f) this._swap(t, o, f), o++, f--;
                                    else return f;
                                }
                            }, "_partition")
                        },
                        {
                            key: "_get",
                            value: /*#__PURE__*/ m$1(function(t, u) {
                                return t instanceof n ? t.get_object_at(u) : t[u];
                            }, "_get")
                        },
                        {
                            key: "_set",
                            value: /*#__PURE__*/ m$1(function(t, u, r) {
                                t instanceof n ? t.set_object_at(u, r) : t[u] = r;
                            }, "_set")
                        },
                        {
                            key: "_swap",
                            value: /*#__PURE__*/ m$1(function(t, u, r) {
                                var e = /*#__PURE__*/ this._get(t, u);
                                this._set(t, u, /*#__PURE__*/ this._get(t, r)), this._set(t, r, e);
                            }, "_swap")
                        },
                        {
                            key: "_defaultCompareFunction",
                            value: /*#__PURE__*/ m$1(function(t, u) {
                                return u > t;
                            }, "_defaultCompareFunction")
                        }
                    ]), a;
                }();
                E.exports = i;
            },
            function(E, w, N) {
                function g() {}
                m$1(g, "SVD"), g.svd = function(s) {
                    this.U = null, this.V = null, this.s = null, this.m = 0, this.n = 0, this.m = s.length, this.n = s[0].length;
                    var n = /*#__PURE__*/ Math.min(this.m, this.n);
                    this.s = /*#__PURE__*/ function(Ot) {
                        for(var Nt = []; Ot-- > 0;)Nt.push(0);
                        return Nt;
                    }(/*#__PURE__*/ Math.min(this.m + 1, this.n)), this.U = /*#__PURE__*/ function(Ot) {
                        var Nt = /*#__PURE__*/ m$1(function Zt(St) {
                            if (St.length == 0) return 0;
                            for(var Wt = [], $t = 0; $t < St[0]; $t++)Wt.push(/*#__PURE__*/ Zt(/*#__PURE__*/ St.slice(1)));
                            return Wt;
                        }, "allocate");
                        return Nt(Ot);
                    }([
                        this.m,
                        n
                    ]), this.V = /*#__PURE__*/ function(Ot) {
                        var Nt = /*#__PURE__*/ m$1(function Zt(St) {
                            if (St.length == 0) return 0;
                            for(var Wt = [], $t = 0; $t < St[0]; $t++)Wt.push(/*#__PURE__*/ Zt(/*#__PURE__*/ St.slice(1)));
                            return Wt;
                        }, "allocate");
                        return Nt(Ot);
                    }([
                        this.n,
                        this.n
                    ]);
                    for(var i = /*#__PURE__*/ function(Ot) {
                        for(var Nt = []; Ot-- > 0;)Nt.push(0);
                        return Nt;
                    }(this.n), a = /*#__PURE__*/ function(Ot) {
                        for(var Nt = []; Ot-- > 0;)Nt.push(0);
                        return Nt;
                    }(this.m), c = true, t = true, u = /*#__PURE__*/ Math.min(this.m - 1, this.n), r = /*#__PURE__*/ Math.max(0, /*#__PURE__*/ Math.min(this.n - 2, this.m)), e = 0; e < Math.max(u, r); e++){
                        if (e < u) {
                            this.s[e] = 0;
                            for(var o = e; o < this.m; o++)this.s[e] = /*#__PURE__*/ g.hypot(this.s[e], s[o][e]);
                            if (this.s[e] !== 0) {
                                s[e][e] < 0 && (this.s[e] = -this.s[e]);
                                for(var f = e; f < this.m; f++)s[f][e] /= this.s[e];
                                s[e][e] += 1;
                            }
                            this.s[e] = -this.s[e];
                        }
                        for(var l = e + 1; l < this.n; l++){
                            if (function(Ot, Nt) {
                                return Ot && Nt;
                            }(e < u, this.s[e] !== 0)) {
                                for(var A = 0, v = e; v < this.m; v++)A += s[v][e] * s[v][l];
                                A = -A / s[e][e];
                                for(var y = e; y < this.m; y++)s[y][l] += A * s[y][e];
                            }
                            i[l] = s[e][l];
                        }
                        if (function(Ot, Nt) {
                            return Ot && Nt;
                        }(c, e < u)) for(var D = e; D < this.m; D++)this.U[D][e] = s[D][e];
                        if (e < r) {
                            i[e] = 0;
                            for(var S = e + 1; S < this.n; S++)i[e] = /*#__PURE__*/ g.hypot(i[e], i[S]);
                            if (i[e] !== 0) {
                                i[e + 1] < 0 && (i[e] = -i[e]);
                                for(var C = e + 1; C < this.n; C++)i[C] /= i[e];
                                i[e + 1] += 1;
                            }
                            if (i[e] = -i[e], function(Ot, Nt) {
                                return Ot && Nt;
                            }(e + 1 < this.m, i[e] !== 0)) {
                                for(var b = e + 1; b < this.m; b++)a[b] = 0;
                                for(var z = e + 1; z < this.n; z++)for(var X = e + 1; X < this.m; X++)a[X] += i[z] * s[X][z];
                                for(var K = e + 1; K < this.n; K++)for(var R = -i[K] / i[e + 1], J = e + 1; J < this.m; J++)s[J][K] += R * a[J];
                            }
                            if (t) for(var h = e + 1; h < this.n; h++)this.V[h][e] = i[h];
                        }
                    }
                    var m = /*#__PURE__*/ Math.min(this.n, this.m + 1);
                    if (u < this.n && (this.s[u] = s[u][u]), this.m < m && (this.s[m - 1] = 0), r + 1 < m && (i[r] = s[r][m - 1]), i[m - 1] = 0, c) {
                        for(var d = u; d < n; d++){
                            for(var T = 0; T < this.m; T++)this.U[T][d] = 0;
                            this.U[d][d] = 1;
                        }
                        for(var p = u - 1; p >= 0; p--)if (this.s[p] !== 0) {
                            for(var O = p + 1; O < n; O++){
                                for(var x = 0, G = p; G < this.m; G++)x += this.U[G][p] * this.U[G][O];
                                x = -x / this.U[p][p];
                                for(var F = p; F < this.m; F++)this.U[F][O] += x * this.U[F][p];
                            }
                            for(var I = p; I < this.m; I++)this.U[I][p] = -this.U[I][p];
                            this.U[p][p] = 1 + this.U[p][p];
                            for(var Z = 0; Z < p - 1; Z++)this.U[Z][p] = 0;
                        } else {
                            for(var et = 0; et < this.m; et++)this.U[et][p] = 0;
                            this.U[p][p] = 1;
                        }
                    }
                    if (t) for(var P = this.n - 1; P >= 0; P--){
                        if (function(Ot, Nt) {
                            return Ot && Nt;
                        }(P < r, i[P] !== 0)) for(var tt = P + 1; tt < n; tt++){
                            for(var B = 0, M = P + 1; M < this.n; M++)B += this.V[M][P] * this.V[M][tt];
                            B = -B / this.V[P + 1][P];
                            for(var U = P + 1; U < this.n; U++)this.V[U][tt] += B * this.V[U][P];
                        }
                        for(var H = 0; H < this.n; H++)this.V[H][P] = 0;
                        this.V[P][P] = 1;
                    }
                    for(var j = m - 1, ht = 0, Lt = /*#__PURE__*/ Math.pow(2, -52), bt = /*#__PURE__*/ Math.pow(2, -966); m > 0;){
                        var Q = void 0, Xt = void 0;
                        for(Q = m - 2; Q >= -1 && Q !== -1; Q--)if (Math.abs(i[Q]) <= bt + Lt * (Math.abs(this.s[Q]) + Math.abs(this.s[Q + 1]))) {
                            i[Q] = 0;
                            break;
                        }
                        if (Q === m - 2) Xt = 4;
                        else {
                            var wt = void 0;
                            for(wt = m - 1; wt >= Q && wt !== Q; wt--){
                                var ot = (wt !== m ? Math.abs(i[wt]) : 0) + (wt !== Q + 1 ? Math.abs(i[wt - 1]) : 0);
                                if (Math.abs(this.s[wt]) <= bt + Lt * ot) {
                                    this.s[wt] = 0;
                                    break;
                                }
                            }
                            wt === Q ? Xt = 3 : wt === m - 1 ? Xt = 1 : (Xt = 2, Q = wt);
                        }
                        switch(Q++, Xt){
                            case 1:
                                {
                                    var rt = i[m - 2];
                                    i[m - 2] = 0;
                                    for(var yt = m - 2; yt >= Q; yt--){
                                        var Et = /*#__PURE__*/ g.hypot(this.s[yt], rt), Dt = this.s[yt] / Et, Tt = rt / Et;
                                        if (this.s[yt] = Et, yt !== Q && (rt = -Tt * i[yt - 1], i[yt - 1] = Dt * i[yt - 1]), t) for(var At = 0; At < this.n; At++)Et = Dt * this.V[At][yt] + Tt * this.V[At][m - 1], this.V[At][m - 1] = -Tt * this.V[At][yt] + Dt * this.V[At][m - 1], this.V[At][yt] = Et;
                                    }
                                }
                                break;
                            case 2:
                                {
                                    var xt = i[Q - 1];
                                    i[Q - 1] = 0;
                                    for(var It = Q; It < m; It++){
                                        var zt = /*#__PURE__*/ g.hypot(this.s[It], xt), Yt = this.s[It] / zt, Ht = xt / zt;
                                        if (this.s[It] = zt, xt = -Ht * i[It], i[It] = Yt * i[It], c) for(var Pt = 0; Pt < this.m; Pt++)zt = Yt * this.U[Pt][It] + Ht * this.U[Pt][Q - 1], this.U[Pt][Q - 1] = -Ht * this.U[Pt][It] + Yt * this.U[Pt][Q - 1], this.U[Pt][It] = zt;
                                    }
                                }
                                break;
                            case 3:
                                {
                                    var Y = /*#__PURE__*/ Math.max(/*#__PURE__*/ Math.max(/*#__PURE__*/ Math.max(/*#__PURE__*/ Math.max(/*#__PURE__*/ Math.abs(this.s[m - 1]), /*#__PURE__*/ Math.abs(this.s[m - 2])), /*#__PURE__*/ Math.abs(i[m - 2])), /*#__PURE__*/ Math.abs(this.s[Q])), /*#__PURE__*/ Math.abs(i[Q])), W = this.s[m - 1] / Y, V = this.s[m - 2] / Y, $ = i[m - 2] / Y, k = this.s[Q] / Y, _ = i[Q] / Y, gt = ((V + W) * (V - W) + $ * $) / 2, ft = W * $ * (W * $), q = 0;
                                    (function(Ot, Nt) {
                                        return Ot || Nt;
                                    })(gt !== 0, ft !== 0) && (q = /*#__PURE__*/ Math.sqrt(gt * gt + ft), gt < 0 && (q = -q), q = ft / (gt + q));
                                    for(var lt = (k + W) * (k - W) + q, ut = k * _, it = Q; it < m - 1; it++){
                                        var pt = /*#__PURE__*/ g.hypot(lt, ut), Ct = lt / pt, st = ut / pt;
                                        if (it !== Q && (i[it - 1] = pt), lt = Ct * this.s[it] + st * i[it], i[it] = Ct * i[it] - st * this.s[it], ut = st * this.s[it + 1], this.s[it + 1] = Ct * this.s[it + 1], t) for(var nt = 0; nt < this.n; nt++)pt = Ct * this.V[nt][it] + st * this.V[nt][it + 1], this.V[nt][it + 1] = -st * this.V[nt][it] + Ct * this.V[nt][it + 1], this.V[nt][it] = pt;
                                        if (pt = /*#__PURE__*/ g.hypot(lt, ut), Ct = lt / pt, st = ut / pt, this.s[it] = pt, lt = Ct * i[it] + st * this.s[it + 1], this.s[it + 1] = -st * i[it] + Ct * this.s[it + 1], ut = st * i[it + 1], i[it + 1] = Ct * i[it + 1], c && it < this.m - 1) for(var dt = 0; dt < this.m; dt++)pt = Ct * this.U[dt][it] + st * this.U[dt][it + 1], this.U[dt][it + 1] = -st * this.U[dt][it] + Ct * this.U[dt][it + 1], this.U[dt][it] = pt;
                                    }
                                    i[m - 2] = lt, ht = ht + 1;
                                }
                                break;
                            case 4:
                                {
                                    if (this.s[Q] <= 0 && (this.s[Q] = this.s[Q] < 0 ? -this.s[Q] : 0, t)) for(var at = 0; at <= j; at++)this.V[at][Q] = -this.V[at][Q];
                                    for(; Q < j && !(this.s[Q] >= this.s[Q + 1]);){
                                        var ct = this.s[Q];
                                        if (this.s[Q] = this.s[Q + 1], this.s[Q + 1] = ct, t && Q < this.n - 1) for(var Ft = 0; Ft < this.n; Ft++)ct = this.V[Ft][Q + 1], this.V[Ft][Q + 1] = this.V[Ft][Q], this.V[Ft][Q] = ct;
                                        if (c && Q < this.m - 1) for(var Rt = 0; Rt < this.m; Rt++)ct = this.U[Rt][Q + 1], this.U[Rt][Q + 1] = this.U[Rt][Q], this.U[Rt][Q] = ct;
                                        Q++;
                                    }
                                    ht = 0, m--;
                                }
                                break;
                        }
                    }
                    var Bt = {
                        U: this.U,
                        V: this.V,
                        S: this.s
                    };
                    return Bt;
                }, g.hypot = function(s, n) {
                    var i = void 0;
                    return Math.abs(s) > Math.abs(n) ? (i = n / s, i = Math.abs(s) * Math.sqrt(1 + i * i)) : n != 0 ? (i = s / n, i = Math.abs(n) * Math.sqrt(1 + i * i)) : i = 0, i;
                }, E.exports = g;
            },
            function(E, w, N) {
                var g = /*#__PURE__*/ function() {
                    function i(a, c) {
                        for(var t = 0; t < c.length; t++){
                            var u = c[t];
                            u.enumerable = u.enumerable || false, u.configurable = true, "value" in u && (u.writable = true), Object.defineProperty(a, u.key, u);
                        }
                    }
                    return m$1(i, "defineProperties"), function(a, c, t) {
                        return c && i(a.prototype, c), t && i(a, t), a;
                    };
                }();
                function s(i, a) {
                    if (!(i instanceof a)) throw new TypeError("Cannot call a class as a function");
                }
                m$1(s, "_classCallCheck");
                var n = /*#__PURE__*/ function() {
                    function i(a, c) {
                        var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : -1, r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : -1;
                        s(this, i), this.sequence1 = a, this.sequence2 = c, this.match_score = t, this.mismatch_penalty = u, this.gap_penalty = r, this.iMax = a.length + 1, this.jMax = c.length + 1, this.grid = new Array(this.iMax);
                        for(var e = 0; e < this.iMax; e++){
                            this.grid[e] = new Array(this.jMax);
                            for(var o = 0; o < this.jMax; o++)this.grid[e][o] = 0;
                        }
                        this.tracebackGrid = new Array(this.iMax);
                        for(var f = 0; f < this.iMax; f++){
                            this.tracebackGrid[f] = new Array(this.jMax);
                            for(var l = 0; l < this.jMax; l++)this.tracebackGrid[f][l] = [
                                null,
                                null,
                                null
                            ];
                        }
                        this.alignments = [], this.score = -1, this.computeGrids();
                    }
                    return m$1(i, "NeedlemanWunsch"), g(i, [
                        {
                            key: "getScore",
                            value: /*#__PURE__*/ m$1(function() {
                                return this.score;
                            }, "getScore")
                        },
                        {
                            key: "getAlignments",
                            value: /*#__PURE__*/ m$1(function() {
                                return this.alignments;
                            }, "getAlignments")
                        },
                        {
                            key: "computeGrids",
                            value: /*#__PURE__*/ m$1(function() {
                                for(var c = 1; c < this.jMax; c++)this.grid[0][c] = this.grid[0][c - 1] + this.gap_penalty, this.tracebackGrid[0][c] = [
                                    false,
                                    false,
                                    true
                                ];
                                for(var t = 1; t < this.iMax; t++)this.grid[t][0] = this.grid[t - 1][0] + this.gap_penalty, this.tracebackGrid[t][0] = [
                                    false,
                                    true,
                                    false
                                ];
                                for(var u = 1; u < this.iMax; u++)for(var r = 1; r < this.jMax; r++){
                                    var e = void 0;
                                    this.sequence1[u - 1] === this.sequence2[r - 1] ? e = this.grid[u - 1][r - 1] + this.match_score : e = this.grid[u - 1][r - 1] + this.mismatch_penalty;
                                    var o = this.grid[u - 1][r] + this.gap_penalty, f = this.grid[u][r - 1] + this.gap_penalty, l = [
                                        e,
                                        o,
                                        f
                                    ], A = /*#__PURE__*/ this.arrayAllMaxIndexes(l);
                                    this.grid[u][r] = l[A[0]], this.tracebackGrid[u][r] = [
                                        /*#__PURE__*/ A.includes(0),
                                        /*#__PURE__*/ A.includes(1),
                                        /*#__PURE__*/ A.includes(2)
                                    ];
                                }
                                this.score = this.grid[this.iMax - 1][this.jMax - 1];
                            }, "computeGrids")
                        },
                        {
                            key: "alignmentTraceback",
                            value: /*#__PURE__*/ m$1(function() {
                                var c = [];
                                for(c.push({
                                    pos: [
                                        this.sequence1.length,
                                        this.sequence2.length
                                    ],
                                    seq1: "",
                                    seq2: ""
                                }); c[0];){
                                    var t = c[0], u = this.tracebackGrid[t.pos[0]][t.pos[1]];
                                    u[0] && c.push({
                                        pos: [
                                            t.pos[0] - 1,
                                            t.pos[1] - 1
                                        ],
                                        seq1: this.sequence1[t.pos[0] - 1] + t.seq1,
                                        seq2: this.sequence2[t.pos[1] - 1] + t.seq2
                                    }), u[1] && c.push({
                                        pos: [
                                            t.pos[0] - 1,
                                            t.pos[1]
                                        ],
                                        seq1: this.sequence1[t.pos[0] - 1] + t.seq1,
                                        seq2: "-" + t.seq2
                                    }), u[2] && c.push({
                                        pos: [
                                            t.pos[0],
                                            t.pos[1] - 1
                                        ],
                                        seq1: "-" + t.seq1,
                                        seq2: this.sequence2[t.pos[1] - 1] + t.seq2
                                    }), t.pos[0] === 0 && t.pos[1] === 0 && this.alignments.push({
                                        sequence1: t.seq1,
                                        sequence2: t.seq2
                                    }), c.shift();
                                }
                                return this.alignments;
                            }, "alignmentTraceback")
                        },
                        {
                            key: "getAllIndexes",
                            value: /*#__PURE__*/ m$1(function(c, t) {
                                for(var u = [], r = -1; (r = /*#__PURE__*/ c.indexOf(t, r + 1)) !== -1;)u.push(r);
                                return u;
                            }, "getAllIndexes")
                        },
                        {
                            key: "arrayAllMaxIndexes",
                            value: /*#__PURE__*/ m$1(function(c) {
                                return this.getAllIndexes(c, /*#__PURE__*/ Math.max.apply(null, c));
                            }, "arrayAllMaxIndexes")
                        }
                    ]), i;
                }();
                E.exports = n;
            },
            function(E, w, N) {
                var g = /*#__PURE__*/ m$1(function() {}, "layoutBase");
                g.FDLayout = /*#__PURE__*/ N(18), g.FDLayoutConstants = /*#__PURE__*/ N(4), g.FDLayoutEdge = /*#__PURE__*/ N(19), g.FDLayoutNode = /*#__PURE__*/ N(20), g.DimensionD = /*#__PURE__*/ N(21), g.HashMap = /*#__PURE__*/ N(22), g.HashSet = /*#__PURE__*/ N(23), g.IGeometry = /*#__PURE__*/ N(8), g.IMath = /*#__PURE__*/ N(9), g.Integer = /*#__PURE__*/ N(10), g.Point = /*#__PURE__*/ N(12), g.PointD = /*#__PURE__*/ N(5), g.RandomSeed = /*#__PURE__*/ N(16), g.RectangleD = /*#__PURE__*/ N(13), g.Transform = /*#__PURE__*/ N(17), g.UniqueIDGeneretor = /*#__PURE__*/ N(14), g.Quicksort = /*#__PURE__*/ N(25), g.LinkedList = /*#__PURE__*/ N(11), g.LGraphObject = /*#__PURE__*/ N(2), g.LGraph = /*#__PURE__*/ N(6), g.LEdge = /*#__PURE__*/ N(1), g.LGraphManager = /*#__PURE__*/ N(7), g.LNode = /*#__PURE__*/ N(3), g.Layout = /*#__PURE__*/ N(15), g.LayoutConstants = /*#__PURE__*/ N(0), g.NeedlemanWunsch = /*#__PURE__*/ N(27), g.Matrix = /*#__PURE__*/ N(24), g.SVD = /*#__PURE__*/ N(26), E.exports = g;
            },
            function(E, w, N) {
                function g() {
                    this.listeners = [];
                }
                m$1(g, "Emitter");
                var s = g.prototype;
                s.addListener = function(n, i) {
                    this.listeners.push({
                        event: n,
                        callback: i
                    });
                }, s.removeListener = function(n, i) {
                    for(var a = this.listeners.length; a >= 0; a--){
                        var c = this.listeners[a];
                        c.event === n && c.callback === i && this.listeners.splice(a, 1);
                    }
                }, s.emit = function(n, i) {
                    for(var a = 0; a < this.listeners.length; a++){
                        var c = this.listeners[a];
                        n === c.event && c.callback(i);
                    }
                }, E.exports = g;
            }
        ]);
    });
});
var Se = /*#__PURE__*/ n((ce, Ie)=>{
    m$1(function(w, N) {
        typeof ce == "object" && typeof Ie == "object" ? Ie.exports = /*#__PURE__*/ N(/*#__PURE__*/ Re()) : typeof define == "function" && define.amd ? define([
            "layout-base"
        ], N) : typeof ce == "object" ? ce.coseBase = /*#__PURE__*/ N(/*#__PURE__*/ Re()) : w.coseBase = /*#__PURE__*/ N(w.layoutBase);
    }, "webpackUniversalModuleDefinition")(ce, function(E) {
        return (()=>{
            var w = {
                45: (n, i, a)=>{
                    var c = {};
                    c.layoutBase = /*#__PURE__*/ a(551), c.CoSEConstants = /*#__PURE__*/ a(806), c.CoSEEdge = /*#__PURE__*/ a(767), c.CoSEGraph = /*#__PURE__*/ a(880), c.CoSEGraphManager = /*#__PURE__*/ a(578), c.CoSELayout = /*#__PURE__*/ a(765), c.CoSENode = /*#__PURE__*/ a(991), c.ConstraintHandler = /*#__PURE__*/ a(902), n.exports = c;
                },
                806: (n, i, a)=>{
                    var c = a(551).FDLayoutConstants;
                    function t() {}
                    m$1(t, "CoSEConstants");
                    for(var u in c)t[u] = c[u];
                    t.DEFAULT_USE_MULTI_LEVEL_SCALING = false, t.DEFAULT_RADIAL_SEPARATION = c.DEFAULT_EDGE_LENGTH, t.DEFAULT_COMPONENT_SEPERATION = 60, t.TILE = true, t.TILING_PADDING_VERTICAL = 10, t.TILING_PADDING_HORIZONTAL = 10, t.TRANSFORM_ON_CONSTRAINT_HANDLING = true, t.ENFORCE_CONSTRAINTS = true, t.APPLY_LAYOUT = true, t.RELAX_MOVEMENT_ON_CONSTRAINTS = true, t.TREE_REDUCTION_ON_INCREMENTAL = true, t.PURE_INCREMENTAL = t.DEFAULT_INCREMENTAL, n.exports = t;
                },
                767: (n, i, a)=>{
                    var c = a(551).FDLayoutEdge;
                    function t(r, e, o) {
                        c.call(this, r, e, o);
                    }
                    m$1(t, "CoSEEdge"), t.prototype = /*#__PURE__*/ Object.create(c.prototype);
                    for(var u in c)t[u] = c[u];
                    n.exports = t;
                },
                880: (n, i, a)=>{
                    var c = a(551).LGraph;
                    function t(r, e, o) {
                        c.call(this, r, e, o);
                    }
                    m$1(t, "CoSEGraph"), t.prototype = /*#__PURE__*/ Object.create(c.prototype);
                    for(var u in c)t[u] = c[u];
                    n.exports = t;
                },
                578: (n, i, a)=>{
                    var c = a(551).LGraphManager;
                    function t(r) {
                        c.call(this, r);
                    }
                    m$1(t, "CoSEGraphManager"), t.prototype = /*#__PURE__*/ Object.create(c.prototype);
                    for(var u in c)t[u] = c[u];
                    n.exports = t;
                },
                765: (n, i, a)=>{
                    var c = a(551).FDLayout, t = /*#__PURE__*/ a(578), u = /*#__PURE__*/ a(880), r = /*#__PURE__*/ a(991), e = /*#__PURE__*/ a(767), o = /*#__PURE__*/ a(806), f = /*#__PURE__*/ a(902), l = a(551).FDLayoutConstants, A = a(551).LayoutConstants, v = a(551).Point, y = a(551).PointD, D = a(551).DimensionD, S = a(551).Layout, C = a(551).Integer, b = a(551).IGeometry, z = a(551).LGraph, X = a(551).Transform, K = a(551).LinkedList;
                    function R() {
                        c.call(this), this.toBeTiled = {}, this.constraints = {};
                    }
                    m$1(R, "CoSELayout"), R.prototype = /*#__PURE__*/ Object.create(c.prototype);
                    for(var J in c)R[J] = c[J];
                    R.prototype.newGraphManager = function() {
                        var h = new t(this);
                        return this.graphManager = h, h;
                    }, R.prototype.newGraph = function(h) {
                        return new u(null, this.graphManager, h);
                    }, R.prototype.newNode = function(h) {
                        return new r(this.graphManager, h);
                    }, R.prototype.newEdge = function(h) {
                        return new e(null, null, h);
                    }, R.prototype.initParameters = function() {
                        c.prototype.initParameters.call(this, arguments), this.isSubLayout || (o.DEFAULT_EDGE_LENGTH < 10 ? this.idealEdgeLength = 10 : this.idealEdgeLength = o.DEFAULT_EDGE_LENGTH, this.useSmartIdealEdgeLengthCalculation = o.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.gravityConstant = l.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = l.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = l.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = l.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.prunedNodesAll = [], this.growTreeIterations = 0, this.afterGrowthIterations = 0, this.isTreeGrowing = false, this.isGrowthFinished = false);
                    }, R.prototype.initSpringEmbedder = function() {
                        c.prototype.initSpringEmbedder.call(this), this.coolingCycle = 0, this.maxCoolingCycle = this.maxIterations / l.CONVERGENCE_CHECK_PERIOD, this.finalTemperature = .04, this.coolingAdjuster = 1;
                    }, R.prototype.layout = function() {
                        var h = A.DEFAULT_CREATE_BENDS_AS_NEEDED;
                        return h && (this.createBendpoints(), this.graphManager.resetAllEdges()), this.level = 0, this.classicLayout();
                    }, R.prototype.classicLayout = function() {
                        if (this.nodesWithGravity = /*#__PURE__*/ this.calculateNodesToApplyGravitationTo(), this.graphManager.setAllNodesToApplyGravitation(this.nodesWithGravity), this.calcNoOfChildrenForAllNodes(), this.graphManager.calcLowestCommonAncestors(), this.graphManager.calcInclusionTreeDepths(), this.graphManager.getRoot().calcEstimatedSize(), this.calcIdealEdgeLengths(), this.incremental) {
                            if (o.TREE_REDUCTION_ON_INCREMENTAL) {
                                this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
                                var m = new Set(this.getAllNodes()), d = /*#__PURE__*/ this.nodesWithGravity.filter(function(O) {
                                    return m.has(O);
                                });
                                this.graphManager.setAllNodesToApplyGravitation(d);
                            }
                        } else {
                            var h = /*#__PURE__*/ this.getFlatForest();
                            if (h.length > 0) this.positionNodesRadially(h);
                            else {
                                this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
                                var m = new Set(this.getAllNodes()), d = /*#__PURE__*/ this.nodesWithGravity.filter(function(T) {
                                    return m.has(T);
                                });
                                this.graphManager.setAllNodesToApplyGravitation(d), this.positionNodesRandomly();
                            }
                        }
                        return Object.keys(this.constraints).length > 0 && (f.handleConstraints(this), this.initConstraintVariables()), this.initSpringEmbedder(), o.APPLY_LAYOUT && this.runSpringEmbedder(), true;
                    }, R.prototype.tick = function() {
                        if (this.totalIterations++, this.totalIterations === this.maxIterations && !this.isTreeGrowing && !this.isGrowthFinished) if (this.prunedNodesAll.length > 0) this.isTreeGrowing = true;
                        else return true;
                        if (this.totalIterations % l.CONVERGENCE_CHECK_PERIOD == 0 && !this.isTreeGrowing && !this.isGrowthFinished) {
                            if (this.isConverged()) if (this.prunedNodesAll.length > 0) this.isTreeGrowing = true;
                            else return true;
                            this.coolingCycle++, this.layoutQuality == 0 ? this.coolingAdjuster = this.coolingCycle : this.layoutQuality == 1 && (this.coolingAdjuster = this.coolingCycle / 3), this.coolingFactor = /*#__PURE__*/ Math.max(this.initialCoolingFactor - Math.pow(this.coolingCycle, Math.log(100 * (this.initialCoolingFactor - this.finalTemperature)) / Math.log(this.maxCoolingCycle)) / 100 * this.coolingAdjuster, this.finalTemperature), this.animationPeriod = /*#__PURE__*/ Math.ceil(this.initialAnimationPeriod * Math.sqrt(this.coolingFactor));
                        }
                        if (this.isTreeGrowing) {
                            if (this.growTreeIterations % 10 == 0) if (this.prunedNodesAll.length > 0) {
                                this.graphManager.updateBounds(), this.updateGrid(), this.growTree(this.prunedNodesAll), this.graphManager.resetAllNodesToApplyGravitation();
                                var h = new Set(this.getAllNodes()), m = /*#__PURE__*/ this.nodesWithGravity.filter(function(p) {
                                    return h.has(p);
                                });
                                this.graphManager.setAllNodesToApplyGravitation(m), this.graphManager.updateBounds(), this.updateGrid(), o.PURE_INCREMENTAL ? this.coolingFactor = l.DEFAULT_COOLING_FACTOR_INCREMENTAL / 2 : this.coolingFactor = l.DEFAULT_COOLING_FACTOR_INCREMENTAL;
                            } else this.isTreeGrowing = false, this.isGrowthFinished = true;
                            this.growTreeIterations++;
                        }
                        if (this.isGrowthFinished) {
                            if (this.isConverged()) return true;
                            this.afterGrowthIterations % 10 == 0 && (this.graphManager.updateBounds(), this.updateGrid()), o.PURE_INCREMENTAL ? this.coolingFactor = l.DEFAULT_COOLING_FACTOR_INCREMENTAL / 2 * ((100 - this.afterGrowthIterations) / 100) : this.coolingFactor = l.DEFAULT_COOLING_FACTOR_INCREMENTAL * ((100 - this.afterGrowthIterations) / 100), this.afterGrowthIterations++;
                        }
                        var d = !this.isTreeGrowing && !this.isGrowthFinished, T = this.growTreeIterations % 10 == 1 && this.isTreeGrowing || this.afterGrowthIterations % 10 == 1 && this.isGrowthFinished;
                        return this.totalDisplacement = 0, this.graphManager.updateBounds(), this.calcSpringForces(), this.calcRepulsionForces(d, T), this.calcGravitationalForces(), this.moveNodes(), this.animate(), false;
                    }, R.prototype.getPositionsData = function() {
                        for(var h = /*#__PURE__*/ this.graphManager.getAllNodes(), m = {}, d = 0; d < h.length; d++){
                            var T = h[d].rect, p = h[d].id;
                            m[p] = {
                                id: p,
                                x: /*#__PURE__*/ T.getCenterX(),
                                y: /*#__PURE__*/ T.getCenterY(),
                                w: T.width,
                                h: T.height
                            };
                        }
                        return m;
                    }, R.prototype.runSpringEmbedder = function() {
                        this.initialAnimationPeriod = 25, this.animationPeriod = this.initialAnimationPeriod;
                        var h = false;
                        if (l.ANIMATE === "during") this.emit("layoutstarted");
                        else {
                            for(; !h;)h = /*#__PURE__*/ this.tick();
                            this.graphManager.updateBounds();
                        }
                    }, R.prototype.moveNodes = function() {
                        for(var h = /*#__PURE__*/ this.getAllNodes(), m, d = 0; d < h.length; d++)m = h[d], m.calculateDisplacement();
                        Object.keys(this.constraints).length > 0 && this.updateDisplacements();
                        for(var d = 0; d < h.length; d++)m = h[d], m.move();
                    }, R.prototype.initConstraintVariables = function() {
                        var h = this;
                        this.idToNodeMap = new Map, this.fixedNodeSet = new Set;
                        for(var m = /*#__PURE__*/ this.graphManager.getAllNodes(), d = 0; d < m.length; d++){
                            var T = m[d];
                            this.idToNodeMap.set(T.id, T);
                        }
                        var p = /*#__PURE__*/ m$1(function M(U) {
                            for(var H = /*#__PURE__*/ U.getChild().getNodes(), j, ht = 0, Lt = 0; Lt < H.length; Lt++)j = H[Lt], j.getChild() == null ? h.fixedNodeSet.has(j.id) && (ht += 100) : ht += /*#__PURE__*/ M(j);
                            return ht;
                        }, "calculateCompoundWeight");
                        if (this.constraints.fixedNodeConstraint) {
                            this.constraints.fixedNodeConstraint.forEach(function(H) {
                                h.fixedNodeSet.add(H.nodeId);
                            });
                            for(var m = /*#__PURE__*/ this.graphManager.getAllNodes(), T, d = 0; d < m.length; d++)if (T = m[d], T.getChild() != null) {
                                var O = /*#__PURE__*/ p(T);
                                O > 0 && (T.fixedNodeWeight = O);
                            }
                        }
                        if (this.constraints.relativePlacementConstraint) {
                            var x = new Map, G = new Map;
                            if (this.dummyToNodeForVerticalAlignment = new Map, this.dummyToNodeForHorizontalAlignment = new Map, this.fixedNodesOnHorizontal = new Set, this.fixedNodesOnVertical = new Set, this.fixedNodeSet.forEach(function(M) {
                                h.fixedNodesOnHorizontal.add(M), h.fixedNodesOnVertical.add(M);
                            }), this.constraints.alignmentConstraint) {
                                if (this.constraints.alignmentConstraint.vertical) for(var F = this.constraints.alignmentConstraint.vertical, d = 0; d < F.length; d++)this.dummyToNodeForVerticalAlignment.set("dummy" + d, []), F[d].forEach(function(U) {
                                    x.set(U, "dummy" + d), h.dummyToNodeForVerticalAlignment.get("dummy" + d).push(U), h.fixedNodeSet.has(U) && h.fixedNodesOnHorizontal.add("dummy" + d);
                                });
                                if (this.constraints.alignmentConstraint.horizontal) for(var I = this.constraints.alignmentConstraint.horizontal, d = 0; d < I.length; d++)this.dummyToNodeForHorizontalAlignment.set("dummy" + d, []), I[d].forEach(function(U) {
                                    G.set(U, "dummy" + d), h.dummyToNodeForHorizontalAlignment.get("dummy" + d).push(U), h.fixedNodeSet.has(U) && h.fixedNodesOnVertical.add("dummy" + d);
                                });
                            }
                            if (o.RELAX_MOVEMENT_ON_CONSTRAINTS) this.shuffle = function(M) {
                                var U, H, j;
                                for(j = M.length - 1; j >= 2 * M.length / 3; j--)U = /*#__PURE__*/ Math.floor(Math.random() * (j + 1)), H = M[j], M[j] = M[U], M[U] = H;
                                return M;
                            }, this.nodesInRelativeHorizontal = [], this.nodesInRelativeVertical = [], this.nodeToRelativeConstraintMapHorizontal = new Map, this.nodeToRelativeConstraintMapVertical = new Map, this.nodeToTempPositionMapHorizontal = new Map, this.nodeToTempPositionMapVertical = new Map, this.constraints.relativePlacementConstraint.forEach(function(M) {
                                if (M.left) {
                                    var U = x.has(M.left) ? x.get(M.left) : M.left, H = x.has(M.right) ? x.get(M.right) : M.right;
                                    h.nodesInRelativeHorizontal.includes(U) || (h.nodesInRelativeHorizontal.push(U), h.nodeToRelativeConstraintMapHorizontal.set(U, []), h.dummyToNodeForVerticalAlignment.has(U) ? h.nodeToTempPositionMapHorizontal.set(U, /*#__PURE__*/ h.idToNodeMap.get(h.dummyToNodeForVerticalAlignment.get(U)[0]).getCenterX()) : h.nodeToTempPositionMapHorizontal.set(U, /*#__PURE__*/ h.idToNodeMap.get(U).getCenterX())), h.nodesInRelativeHorizontal.includes(H) || (h.nodesInRelativeHorizontal.push(H), h.nodeToRelativeConstraintMapHorizontal.set(H, []), h.dummyToNodeForVerticalAlignment.has(H) ? h.nodeToTempPositionMapHorizontal.set(H, /*#__PURE__*/ h.idToNodeMap.get(h.dummyToNodeForVerticalAlignment.get(H)[0]).getCenterX()) : h.nodeToTempPositionMapHorizontal.set(H, /*#__PURE__*/ h.idToNodeMap.get(H).getCenterX())), h.nodeToRelativeConstraintMapHorizontal.get(U).push({
                                        right: H,
                                        gap: M.gap
                                    }), h.nodeToRelativeConstraintMapHorizontal.get(H).push({
                                        left: U,
                                        gap: M.gap
                                    });
                                } else {
                                    var j = G.has(M.top) ? G.get(M.top) : M.top, ht = G.has(M.bottom) ? G.get(M.bottom) : M.bottom;
                                    h.nodesInRelativeVertical.includes(j) || (h.nodesInRelativeVertical.push(j), h.nodeToRelativeConstraintMapVertical.set(j, []), h.dummyToNodeForHorizontalAlignment.has(j) ? h.nodeToTempPositionMapVertical.set(j, /*#__PURE__*/ h.idToNodeMap.get(h.dummyToNodeForHorizontalAlignment.get(j)[0]).getCenterY()) : h.nodeToTempPositionMapVertical.set(j, /*#__PURE__*/ h.idToNodeMap.get(j).getCenterY())), h.nodesInRelativeVertical.includes(ht) || (h.nodesInRelativeVertical.push(ht), h.nodeToRelativeConstraintMapVertical.set(ht, []), h.dummyToNodeForHorizontalAlignment.has(ht) ? h.nodeToTempPositionMapVertical.set(ht, /*#__PURE__*/ h.idToNodeMap.get(h.dummyToNodeForHorizontalAlignment.get(ht)[0]).getCenterY()) : h.nodeToTempPositionMapVertical.set(ht, /*#__PURE__*/ h.idToNodeMap.get(ht).getCenterY())), h.nodeToRelativeConstraintMapVertical.get(j).push({
                                        bottom: ht,
                                        gap: M.gap
                                    }), h.nodeToRelativeConstraintMapVertical.get(ht).push({
                                        top: j,
                                        gap: M.gap
                                    });
                                }
                            });
                            else {
                                var Z = new Map, et = new Map;
                                this.constraints.relativePlacementConstraint.forEach(function(M) {
                                    if (M.left) {
                                        var U = x.has(M.left) ? x.get(M.left) : M.left, H = x.has(M.right) ? x.get(M.right) : M.right;
                                        Z.has(U) ? Z.get(U).push(H) : Z.set(U, [
                                            H
                                        ]), Z.has(H) ? Z.get(H).push(U) : Z.set(H, [
                                            U
                                        ]);
                                    } else {
                                        var j = G.has(M.top) ? G.get(M.top) : M.top, ht = G.has(M.bottom) ? G.get(M.bottom) : M.bottom;
                                        et.has(j) ? et.get(j).push(ht) : et.set(j, [
                                            ht
                                        ]), et.has(ht) ? et.get(ht).push(j) : et.set(ht, [
                                            j
                                        ]);
                                    }
                                });
                                var P = /*#__PURE__*/ m$1(function(U, H) {
                                    var j = [], ht = [], Lt = new K, bt = new Set, Q = 0;
                                    return U.forEach(function(Xt, wt) {
                                        if (!bt.has(wt)) {
                                            j[Q] = [], ht[Q] = false;
                                            var ot = wt;
                                            for(Lt.push(ot), bt.add(ot), j[Q].push(ot); Lt.length != 0;){
                                                ot = /*#__PURE__*/ Lt.shift(), H.has(ot) && (ht[Q] = true);
                                                var rt = /*#__PURE__*/ U.get(ot);
                                                rt.forEach(function(yt) {
                                                    bt.has(yt) || (Lt.push(yt), bt.add(yt), j[Q].push(yt));
                                                });
                                            }
                                            Q++;
                                        }
                                    }), {
                                        components: j,
                                        isFixed: ht
                                    };
                                }, "constructComponents"), tt = /*#__PURE__*/ P(Z, h.fixedNodesOnHorizontal);
                                this.componentsOnHorizontal = tt.components, this.fixedComponentsOnHorizontal = tt.isFixed;
                                var B = /*#__PURE__*/ P(et, h.fixedNodesOnVertical);
                                this.componentsOnVertical = B.components, this.fixedComponentsOnVertical = B.isFixed;
                            }
                        }
                    }, R.prototype.updateDisplacements = function() {
                        var h = this;
                        if (this.constraints.fixedNodeConstraint && this.constraints.fixedNodeConstraint.forEach(function(B) {
                            var M = /*#__PURE__*/ h.idToNodeMap.get(B.nodeId);
                            M.displacementX = 0, M.displacementY = 0;
                        }), this.constraints.alignmentConstraint) {
                            if (this.constraints.alignmentConstraint.vertical) for(var m = this.constraints.alignmentConstraint.vertical, d = 0; d < m.length; d++){
                                for(var T = 0, p = 0; p < m[d].length; p++){
                                    if (this.fixedNodeSet.has(m[d][p])) {
                                        T = 0;
                                        break;
                                    }
                                    T += this.idToNodeMap.get(m[d][p]).displacementX;
                                }
                                for(var O = T / m[d].length, p = 0; p < m[d].length; p++)this.idToNodeMap.get(m[d][p]).displacementX = O;
                            }
                            if (this.constraints.alignmentConstraint.horizontal) for(var x = this.constraints.alignmentConstraint.horizontal, d = 0; d < x.length; d++){
                                for(var G = 0, p = 0; p < x[d].length; p++){
                                    if (this.fixedNodeSet.has(x[d][p])) {
                                        G = 0;
                                        break;
                                    }
                                    G += this.idToNodeMap.get(x[d][p]).displacementY;
                                }
                                for(var F = G / x[d].length, p = 0; p < x[d].length; p++)this.idToNodeMap.get(x[d][p]).displacementY = F;
                            }
                        }
                        if (this.constraints.relativePlacementConstraint) if (o.RELAX_MOVEMENT_ON_CONSTRAINTS) this.totalIterations % 10 == 0 && (this.shuffle(this.nodesInRelativeHorizontal), this.shuffle(this.nodesInRelativeVertical)), this.nodesInRelativeHorizontal.forEach(function(B) {
                            if (!h.fixedNodesOnHorizontal.has(B)) {
                                var M = 0;
                                h.dummyToNodeForVerticalAlignment.has(B) ? M = h.idToNodeMap.get(h.dummyToNodeForVerticalAlignment.get(B)[0]).displacementX : M = h.idToNodeMap.get(B).displacementX, h.nodeToRelativeConstraintMapHorizontal.get(B).forEach(function(U) {
                                    if (U.right) {
                                        var H = h.nodeToTempPositionMapHorizontal.get(U.right) - h.nodeToTempPositionMapHorizontal.get(B) - M;
                                        H < U.gap && (M -= U.gap - H);
                                    } else {
                                        var H = h.nodeToTempPositionMapHorizontal.get(B) - h.nodeToTempPositionMapHorizontal.get(U.left) + M;
                                        H < U.gap && (M += U.gap - H);
                                    }
                                }), h.nodeToTempPositionMapHorizontal.set(B, h.nodeToTempPositionMapHorizontal.get(B) + M), h.dummyToNodeForVerticalAlignment.has(B) ? h.dummyToNodeForVerticalAlignment.get(B).forEach(function(U) {
                                    h.idToNodeMap.get(U).displacementX = M;
                                }) : h.idToNodeMap.get(B).displacementX = M;
                            }
                        }), this.nodesInRelativeVertical.forEach(function(B) {
                            if (!h.fixedNodesOnHorizontal.has(B)) {
                                var M = 0;
                                h.dummyToNodeForHorizontalAlignment.has(B) ? M = h.idToNodeMap.get(h.dummyToNodeForHorizontalAlignment.get(B)[0]).displacementY : M = h.idToNodeMap.get(B).displacementY, h.nodeToRelativeConstraintMapVertical.get(B).forEach(function(U) {
                                    if (U.bottom) {
                                        var H = h.nodeToTempPositionMapVertical.get(U.bottom) - h.nodeToTempPositionMapVertical.get(B) - M;
                                        H < U.gap && (M -= U.gap - H);
                                    } else {
                                        var H = h.nodeToTempPositionMapVertical.get(B) - h.nodeToTempPositionMapVertical.get(U.top) + M;
                                        H < U.gap && (M += U.gap - H);
                                    }
                                }), h.nodeToTempPositionMapVertical.set(B, h.nodeToTempPositionMapVertical.get(B) + M), h.dummyToNodeForHorizontalAlignment.has(B) ? h.dummyToNodeForHorizontalAlignment.get(B).forEach(function(U) {
                                    h.idToNodeMap.get(U).displacementY = M;
                                }) : h.idToNodeMap.get(B).displacementY = M;
                            }
                        });
                        else {
                            for(var d = 0; d < this.componentsOnHorizontal.length; d++){
                                var I = this.componentsOnHorizontal[d];
                                if (this.fixedComponentsOnHorizontal[d]) for(var p = 0; p < I.length; p++)this.dummyToNodeForVerticalAlignment.has(I[p]) ? this.dummyToNodeForVerticalAlignment.get(I[p]).forEach(function(U) {
                                    h.idToNodeMap.get(U).displacementX = 0;
                                }) : this.idToNodeMap.get(I[p]).displacementX = 0;
                                else {
                                    for(var Z = 0, et = 0, p = 0; p < I.length; p++)if (this.dummyToNodeForVerticalAlignment.has(I[p])) {
                                        var P = /*#__PURE__*/ this.dummyToNodeForVerticalAlignment.get(I[p]);
                                        Z += P.length * this.idToNodeMap.get(P[0]).displacementX, et += P.length;
                                    } else Z += this.idToNodeMap.get(I[p]).displacementX, et++;
                                    for(var tt = Z / et, p = 0; p < I.length; p++)this.dummyToNodeForVerticalAlignment.has(I[p]) ? this.dummyToNodeForVerticalAlignment.get(I[p]).forEach(function(U) {
                                        h.idToNodeMap.get(U).displacementX = tt;
                                    }) : this.idToNodeMap.get(I[p]).displacementX = tt;
                                }
                            }
                            for(var d = 0; d < this.componentsOnVertical.length; d++){
                                var I = this.componentsOnVertical[d];
                                if (this.fixedComponentsOnVertical[d]) for(var p = 0; p < I.length; p++)this.dummyToNodeForHorizontalAlignment.has(I[p]) ? this.dummyToNodeForHorizontalAlignment.get(I[p]).forEach(function(H) {
                                    h.idToNodeMap.get(H).displacementY = 0;
                                }) : this.idToNodeMap.get(I[p]).displacementY = 0;
                                else {
                                    for(var Z = 0, et = 0, p = 0; p < I.length; p++)if (this.dummyToNodeForHorizontalAlignment.has(I[p])) {
                                        var P = /*#__PURE__*/ this.dummyToNodeForHorizontalAlignment.get(I[p]);
                                        Z += P.length * this.idToNodeMap.get(P[0]).displacementY, et += P.length;
                                    } else Z += this.idToNodeMap.get(I[p]).displacementY, et++;
                                    for(var tt = Z / et, p = 0; p < I.length; p++)this.dummyToNodeForHorizontalAlignment.has(I[p]) ? this.dummyToNodeForHorizontalAlignment.get(I[p]).forEach(function(Lt) {
                                        h.idToNodeMap.get(Lt).displacementY = tt;
                                    }) : this.idToNodeMap.get(I[p]).displacementY = tt;
                                }
                            }
                        }
                    }, R.prototype.calculateNodesToApplyGravitationTo = function() {
                        var h = [], m, d = /*#__PURE__*/ this.graphManager.getGraphs(), T = d.length, p;
                        for(p = 0; p < T; p++)m = d[p], m.updateConnected(), m.isConnected || (h = /*#__PURE__*/ h.concat(/*#__PURE__*/ m.getNodes()));
                        return h;
                    }, R.prototype.createBendpoints = function() {
                        var h = [];
                        h = /*#__PURE__*/ h.concat(/*#__PURE__*/ this.graphManager.getAllEdges());
                        var m = new Set, d;
                        for(d = 0; d < h.length; d++){
                            var T = h[d];
                            if (!m.has(T)) {
                                var p = /*#__PURE__*/ T.getSource(), O = /*#__PURE__*/ T.getTarget();
                                if (p == O) T.getBendpoints().push(new y), T.getBendpoints().push(new y), this.createDummyNodesForBendpoints(T), m.add(T);
                                else {
                                    var x = [];
                                    if (x = /*#__PURE__*/ x.concat(/*#__PURE__*/ p.getEdgeListToNode(O)), x = /*#__PURE__*/ x.concat(/*#__PURE__*/ O.getEdgeListToNode(p)), !m.has(x[0])) {
                                        if (x.length > 1) {
                                            var G;
                                            for(G = 0; G < x.length; G++){
                                                var F = x[G];
                                                F.getBendpoints().push(new y), this.createDummyNodesForBendpoints(F);
                                            }
                                        }
                                        x.forEach(function(I) {
                                            m.add(I);
                                        });
                                    }
                                }
                            }
                            if (m.size == h.length) break;
                        }
                    }, R.prototype.positionNodesRadially = function(h) {
                        for(var m = new v(0, 0), d = /*#__PURE__*/ Math.ceil(/*#__PURE__*/ Math.sqrt(h.length)), T = 0, p = 0, O = 0, x = new y(0, 0), G = 0; G < h.length; G++){
                            G % d == 0 && (O = 0, p = T, G != 0 && (p += o.DEFAULT_COMPONENT_SEPERATION), T = 0);
                            var F = h[G], I = /*#__PURE__*/ S.findCenterOfTree(F);
                            m.x = O, m.y = p, x = /*#__PURE__*/ R.radialLayout(F, I, m), x.y > T && (T = /*#__PURE__*/ Math.floor(x.y)), O = /*#__PURE__*/ Math.floor(x.x + o.DEFAULT_COMPONENT_SEPERATION);
                        }
                        this.transform(new y(A.WORLD_CENTER_X - x.x / 2, A.WORLD_CENTER_Y - x.y / 2));
                    }, R.radialLayout = function(h, m, d) {
                        var T = /*#__PURE__*/ Math.max(/*#__PURE__*/ this.maxDiagonalInTree(h), o.DEFAULT_RADIAL_SEPARATION);
                        R.branchRadialLayout(m, null, 0, 359, 0, T);
                        var p = /*#__PURE__*/ z.calculateBounds(h), O = new X;
                        O.setDeviceOrgX(/*#__PURE__*/ p.getMinX()), O.setDeviceOrgY(/*#__PURE__*/ p.getMinY()), O.setWorldOrgX(d.x), O.setWorldOrgY(d.y);
                        for(var x = 0; x < h.length; x++){
                            var G = h[x];
                            G.transform(O);
                        }
                        var F = new y(p.getMaxX(), p.getMaxY());
                        return O.inverseTransformPoint(F);
                    }, R.branchRadialLayout = function(h, m, d, T, p, O) {
                        var x = (T - d + 1) / 2;
                        x < 0 && (x += 180);
                        var G = (x + d) % 360, F = G * b.TWO_PI / 360, Z = p * Math.cos(F), et = p * Math.sin(F);
                        h.setCenter(Z, et);
                        var P = [];
                        P = /*#__PURE__*/ P.concat(/*#__PURE__*/ h.getEdges());
                        var tt = P.length;
                        m != null && tt--;
                        for(var B = 0, M = P.length, U, H = /*#__PURE__*/ h.getEdgesBetween(m); H.length > 1;){
                            var j = H[0];
                            H.splice(0, 1);
                            var ht = /*#__PURE__*/ P.indexOf(j);
                            ht >= 0 && P.splice(ht, 1), M--, tt--;
                        }
                        m != null ? U = (P.indexOf(H[0]) + 1) % M : U = 0;
                        for(var Lt = Math.abs(T - d) / tt, bt = U; B != tt; bt = ++bt % M){
                            var Q = /*#__PURE__*/ P[bt].getOtherEnd(h);
                            if (Q != m) {
                                var Xt = (d + B * Lt) % 360, wt = (Xt + Lt) % 360;
                                R.branchRadialLayout(Q, h, Xt, wt, p + O, O), B++;
                            }
                        }
                    }, R.maxDiagonalInTree = function(h) {
                        for(var m = C.MIN_VALUE, d = 0; d < h.length; d++){
                            var T = h[d], p = /*#__PURE__*/ T.getDiagonal();
                            p > m && (m = p);
                        }
                        return m;
                    }, R.prototype.calcRepulsionRange = function() {
                        return 2 * (this.level + 1) * this.idealEdgeLength;
                    }, R.prototype.groupZeroDegreeMembers = function() {
                        var h = this, m = {};
                        this.memberGroups = {}, this.idToDummyNode = {};
                        for(var d = [], T = /*#__PURE__*/ this.graphManager.getAllNodes(), p = 0; p < T.length; p++){
                            var O = T[p], x = /*#__PURE__*/ O.getParent();
                            this.getNodeDegreeWithChildren(O) === 0 && (x.id == null || !this.getToBeTiled(x)) && d.push(O);
                        }
                        for(var p = 0; p < d.length; p++){
                            var O = d[p], G = O.getParent().id;
                            typeof m[G] > "u" && (m[G] = []), m[G] = /*#__PURE__*/ m[G].concat(O);
                        }
                        Object.keys(m).forEach(function(F) {
                            if (m[F].length > 1) {
                                var I = "DummyCompound_" + F;
                                h.memberGroups[I] = m[F];
                                var Z = /*#__PURE__*/ m[F][0].getParent(), et = new r(h.graphManager);
                                et.id = I, et.paddingLeft = Z.paddingLeft || 0, et.paddingRight = Z.paddingRight || 0, et.paddingBottom = Z.paddingBottom || 0, et.paddingTop = Z.paddingTop || 0, h.idToDummyNode[I] = et;
                                var P = /*#__PURE__*/ h.getGraphManager().add(/*#__PURE__*/ h.newGraph(), et), tt = /*#__PURE__*/ Z.getChild();
                                tt.add(et);
                                for(var B = 0; B < m[F].length; B++){
                                    var M = m[F][B];
                                    tt.remove(M), P.add(M);
                                }
                            }
                        });
                    }, R.prototype.clearCompounds = function() {
                        var h = {}, m = {};
                        this.performDFSOnCompounds();
                        for(var d = 0; d < this.compoundOrder.length; d++)m[this.compoundOrder[d].id] = this.compoundOrder[d], h[this.compoundOrder[d].id] = /*#__PURE__*/ [].concat(/*#__PURE__*/ this.compoundOrder[d].getChild().getNodes()), this.graphManager.remove(/*#__PURE__*/ this.compoundOrder[d].getChild()), this.compoundOrder[d].child = null;
                        this.graphManager.resetAllNodes(), this.tileCompoundMembers(h, m);
                    }, R.prototype.clearZeroDegreeMembers = function() {
                        var h = this, m = this.tiledZeroDegreePack = [];
                        Object.keys(this.memberGroups).forEach(function(d) {
                            var T = h.idToDummyNode[d];
                            if (m[d] = /*#__PURE__*/ h.tileNodes(h.memberGroups[d], T.paddingLeft + T.paddingRight), T.rect.width = m[d].width, T.rect.height = m[d].height, T.setCenter(m[d].centerX, m[d].centerY), T.labelMarginLeft = 0, T.labelMarginTop = 0, o.NODE_DIMENSIONS_INCLUDE_LABELS) {
                                var p = T.rect.width, O = T.rect.height;
                                T.labelWidth && (T.labelPosHorizontal == "left" ? (T.rect.x -= T.labelWidth, T.setWidth(p + T.labelWidth), T.labelMarginLeft = T.labelWidth) : T.labelPosHorizontal == "center" && T.labelWidth > p ? (T.rect.x -= (T.labelWidth - p) / 2, T.setWidth(T.labelWidth), T.labelMarginLeft = (T.labelWidth - p) / 2) : T.labelPosHorizontal == "right" && T.setWidth(p + T.labelWidth)), T.labelHeight && (T.labelPosVertical == "top" ? (T.rect.y -= T.labelHeight, T.setHeight(O + T.labelHeight), T.labelMarginTop = T.labelHeight) : T.labelPosVertical == "center" && T.labelHeight > O ? (T.rect.y -= (T.labelHeight - O) / 2, T.setHeight(T.labelHeight), T.labelMarginTop = (T.labelHeight - O) / 2) : T.labelPosVertical == "bottom" && T.setHeight(O + T.labelHeight));
                            }
                        });
                    }, R.prototype.repopulateCompounds = function() {
                        for(var h = this.compoundOrder.length - 1; h >= 0; h--){
                            var m = this.compoundOrder[h], d = m.id, T = m.paddingLeft, p = m.paddingTop, O = m.labelMarginLeft, x = m.labelMarginTop;
                            this.adjustLocations(this.tiledMemberPack[d], m.rect.x, m.rect.y, T, p, O, x);
                        }
                    }, R.prototype.repopulateZeroDegreeMembers = function() {
                        var h = this, m = this.tiledZeroDegreePack;
                        Object.keys(m).forEach(function(d) {
                            var T = h.idToDummyNode[d], p = T.paddingLeft, O = T.paddingTop, x = T.labelMarginLeft, G = T.labelMarginTop;
                            h.adjustLocations(m[d], T.rect.x, T.rect.y, p, O, x, G);
                        });
                    }, R.prototype.getToBeTiled = function(h) {
                        var m = h.id;
                        if (this.toBeTiled[m] != null) return this.toBeTiled[m];
                        var d = /*#__PURE__*/ h.getChild();
                        if (d == null) return this.toBeTiled[m] = false, false;
                        for(var T = /*#__PURE__*/ d.getNodes(), p = 0; p < T.length; p++){
                            var O = T[p];
                            if (this.getNodeDegree(O) > 0) return this.toBeTiled[m] = false, false;
                            if (O.getChild() == null) {
                                this.toBeTiled[O.id] = false;
                                continue;
                            }
                            if (!this.getToBeTiled(O)) return this.toBeTiled[m] = false, false;
                        }
                        return this.toBeTiled[m] = true, true;
                    }, R.prototype.getNodeDegree = function(h) {
                        for(var m = h.id, d = /*#__PURE__*/ h.getEdges(), T = 0, p = 0; p < d.length; p++){
                            var O = d[p];
                            O.getSource().id !== O.getTarget().id && (T = T + 1);
                        }
                        return T;
                    }, R.prototype.getNodeDegreeWithChildren = function(h) {
                        var m = /*#__PURE__*/ this.getNodeDegree(h);
                        if (h.getChild() == null) return m;
                        for(var d = /*#__PURE__*/ h.getChild().getNodes(), T = 0; T < d.length; T++){
                            var p = d[T];
                            m += /*#__PURE__*/ this.getNodeDegreeWithChildren(p);
                        }
                        return m;
                    }, R.prototype.performDFSOnCompounds = function() {
                        this.compoundOrder = [], this.fillCompexOrderByDFS(/*#__PURE__*/ this.graphManager.getRoot().getNodes());
                    }, R.prototype.fillCompexOrderByDFS = function(h) {
                        for(var m = 0; m < h.length; m++){
                            var d = h[m];
                            d.getChild() != null && this.fillCompexOrderByDFS(/*#__PURE__*/ d.getChild().getNodes()), this.getToBeTiled(d) && this.compoundOrder.push(d);
                        }
                    }, R.prototype.adjustLocations = function(h, m, d, T, p, O, x) {
                        m += T + O, d += p + x;
                        for(var G = m, F = 0; F < h.rows.length; F++){
                            var I = h.rows[F];
                            m = G;
                            for(var Z = 0, et = 0; et < I.length; et++){
                                var P = I[et];
                                P.rect.x = m, P.rect.y = d, m += P.rect.width + h.horizontalPadding, P.rect.height > Z && (Z = P.rect.height);
                            }
                            d += Z + h.verticalPadding;
                        }
                    }, R.prototype.tileCompoundMembers = function(h, m) {
                        var d = this;
                        this.tiledMemberPack = [], Object.keys(h).forEach(function(T) {
                            var p = m[T];
                            if (d.tiledMemberPack[T] = /*#__PURE__*/ d.tileNodes(h[T], p.paddingLeft + p.paddingRight), p.rect.width = d.tiledMemberPack[T].width, p.rect.height = d.tiledMemberPack[T].height, p.setCenter(d.tiledMemberPack[T].centerX, d.tiledMemberPack[T].centerY), p.labelMarginLeft = 0, p.labelMarginTop = 0, o.NODE_DIMENSIONS_INCLUDE_LABELS) {
                                var O = p.rect.width, x = p.rect.height;
                                p.labelWidth && (p.labelPosHorizontal == "left" ? (p.rect.x -= p.labelWidth, p.setWidth(O + p.labelWidth), p.labelMarginLeft = p.labelWidth) : p.labelPosHorizontal == "center" && p.labelWidth > O ? (p.rect.x -= (p.labelWidth - O) / 2, p.setWidth(p.labelWidth), p.labelMarginLeft = (p.labelWidth - O) / 2) : p.labelPosHorizontal == "right" && p.setWidth(O + p.labelWidth)), p.labelHeight && (p.labelPosVertical == "top" ? (p.rect.y -= p.labelHeight, p.setHeight(x + p.labelHeight), p.labelMarginTop = p.labelHeight) : p.labelPosVertical == "center" && p.labelHeight > x ? (p.rect.y -= (p.labelHeight - x) / 2, p.setHeight(p.labelHeight), p.labelMarginTop = (p.labelHeight - x) / 2) : p.labelPosVertical == "bottom" && p.setHeight(x + p.labelHeight));
                            }
                        });
                    }, R.prototype.tileNodes = function(h, m) {
                        var d = /*#__PURE__*/ this.tileNodesByFavoringDim(h, m, true), T = /*#__PURE__*/ this.tileNodesByFavoringDim(h, m, false), p = /*#__PURE__*/ this.getOrgRatio(d), O = /*#__PURE__*/ this.getOrgRatio(T), x;
                        return O < p ? x = T : x = d, x;
                    }, R.prototype.getOrgRatio = function(h) {
                        var m = h.width, d = h.height, T = m / d;
                        return T < 1 && (T = 1 / T), T;
                    }, R.prototype.calcIdealRowWidth = function(h, m) {
                        var d = o.TILING_PADDING_VERTICAL, T = o.TILING_PADDING_HORIZONTAL, p = h.length, O = 0, x = 0, G = 0;
                        h.forEach(function(B) {
                            O += /*#__PURE__*/ B.getWidth(), x += /*#__PURE__*/ B.getHeight(), B.getWidth() > G && (G = /*#__PURE__*/ B.getWidth());
                        });
                        var F = O / p, I = x / p, Z = Math.pow(d - T, 2) + 4 * (F + T) * (I + d) * p, et = (T - d + Math.sqrt(Z)) / (2 * (F + T)), P;
                        m ? (P = /*#__PURE__*/ Math.ceil(et), P == et && P++) : P = /*#__PURE__*/ Math.floor(et);
                        var tt = P * (F + T) - T;
                        return G > tt && (tt = G), tt += T * 2, tt;
                    }, R.prototype.tileNodesByFavoringDim = function(h, m, d) {
                        var T = o.TILING_PADDING_VERTICAL, p = o.TILING_PADDING_HORIZONTAL, O = o.TILING_COMPARE_BY, x = {
                            rows: [],
                            rowWidth: [],
                            rowHeight: [],
                            width: 0,
                            height: m,
                            verticalPadding: T,
                            horizontalPadding: p,
                            centerX: 0,
                            centerY: 0
                        };
                        O && (x.idealRowWidth = /*#__PURE__*/ this.calcIdealRowWidth(h, d));
                        var G = /*#__PURE__*/ m$1(function(M) {
                            return M.rect.width * M.rect.height;
                        }, "getNodeArea"), F = /*#__PURE__*/ m$1(function(M, U) {
                            return G(U) - G(M);
                        }, "areaCompareFcn");
                        h.sort(function(B, M) {
                            var U = F;
                            return x.idealRowWidth ? (U = O, U(B.id, M.id)) : U(B, M);
                        });
                        for(var I = 0, Z = 0, et = 0; et < h.length; et++){
                            var P = h[et];
                            I += /*#__PURE__*/ P.getCenterX(), Z += /*#__PURE__*/ P.getCenterY();
                        }
                        x.centerX = I / h.length, x.centerY = Z / h.length;
                        for(var et = 0; et < h.length; et++){
                            var P = h[et];
                            if (x.rows.length == 0) this.insertNodeToRow(x, P, 0, m);
                            else if (this.canAddHorizontal(x, P.rect.width, P.rect.height)) {
                                var tt = x.rows.length - 1;
                                x.idealRowWidth || (tt = /*#__PURE__*/ this.getShortestRowIndex(x)), this.insertNodeToRow(x, P, tt, m);
                            } else this.insertNodeToRow(x, P, x.rows.length, m);
                            this.shiftToLastRow(x);
                        }
                        return x;
                    }, R.prototype.insertNodeToRow = function(h, m, d, T) {
                        var p = T;
                        if (d == h.rows.length) {
                            var O = [];
                            h.rows.push(O), h.rowWidth.push(p), h.rowHeight.push(0);
                        }
                        var x = h.rowWidth[d] + m.rect.width;
                        h.rows[d].length > 0 && (x += h.horizontalPadding), h.rowWidth[d] = x, h.width < x && (h.width = x);
                        var G = m.rect.height;
                        d > 0 && (G += h.verticalPadding);
                        var F = 0;
                        G > h.rowHeight[d] && (F = h.rowHeight[d], h.rowHeight[d] = G, F = h.rowHeight[d] - F), h.height += F, h.rows[d].push(m);
                    }, R.prototype.getShortestRowIndex = function(h) {
                        for(var m = -1, d = Number.MAX_VALUE, T = 0; T < h.rows.length; T++)h.rowWidth[T] < d && (m = T, d = h.rowWidth[T]);
                        return m;
                    }, R.prototype.getLongestRowIndex = function(h) {
                        for(var m = -1, d = Number.MIN_VALUE, T = 0; T < h.rows.length; T++)h.rowWidth[T] > d && (m = T, d = h.rowWidth[T]);
                        return m;
                    }, R.prototype.canAddHorizontal = function(h, m, d) {
                        if (h.idealRowWidth) {
                            var T = h.rows.length - 1, p = h.rowWidth[T];
                            return p + m + h.horizontalPadding <= h.idealRowWidth;
                        }
                        var O = /*#__PURE__*/ this.getShortestRowIndex(h);
                        if (O < 0) return true;
                        var x = h.rowWidth[O];
                        if (x + h.horizontalPadding + m <= h.width) return true;
                        var G = 0;
                        h.rowHeight[O] < d && O > 0 && (G = d + h.verticalPadding - h.rowHeight[O]);
                        var F;
                        h.width - x >= m + h.horizontalPadding ? F = (h.height + G) / (x + m + h.horizontalPadding) : F = (h.height + G) / h.width, G = d + h.verticalPadding;
                        var I;
                        return h.width < m ? I = (h.height + G) / m : I = (h.height + G) / h.width, I < 1 && (I = 1 / I), F < 1 && (F = 1 / F), F < I;
                    }, R.prototype.shiftToLastRow = function(h) {
                        var m = /*#__PURE__*/ this.getLongestRowIndex(h), d = h.rowWidth.length - 1, T = h.rows[m], p = T[T.length - 1], O = p.width + h.horizontalPadding;
                        if (h.width - h.rowWidth[d] > O && m != d) {
                            T.splice(-1, 1), h.rows[d].push(p), h.rowWidth[m] = h.rowWidth[m] - O, h.rowWidth[d] = h.rowWidth[d] + O, h.width = h.rowWidth[instance.getLongestRowIndex(h)];
                            for(var x = Number.MIN_VALUE, G = 0; G < T.length; G++)T[G].height > x && (x = T[G].height);
                            m > 0 && (x += h.verticalPadding);
                            var F = h.rowHeight[m] + h.rowHeight[d];
                            h.rowHeight[m] = x, h.rowHeight[d] < p.height + h.verticalPadding && (h.rowHeight[d] = p.height + h.verticalPadding);
                            var I = h.rowHeight[m] + h.rowHeight[d];
                            h.height += I - F, this.shiftToLastRow(h);
                        }
                    }, R.prototype.tilingPreLayout = function() {
                        o.TILE && (this.groupZeroDegreeMembers(), this.clearCompounds(), this.clearZeroDegreeMembers());
                    }, R.prototype.tilingPostLayout = function() {
                        o.TILE && (this.repopulateZeroDegreeMembers(), this.repopulateCompounds());
                    }, R.prototype.reduceTrees = function() {
                        for(var h = [], m = true, d; m;){
                            var T = /*#__PURE__*/ this.graphManager.getAllNodes(), p = [];
                            m = false;
                            for(var O = 0; O < T.length; O++)if (d = T[O], d.getEdges().length == 1 && !d.getEdges()[0].isInterGraph && d.getChild() == null) {
                                if (o.PURE_INCREMENTAL) {
                                    var x = /*#__PURE__*/ d.getEdges()[0].getOtherEnd(d), G = new D(d.getCenterX() - x.getCenterX(), d.getCenterY() - x.getCenterY());
                                    p.push([
                                        d,
                                        d.getEdges()[0],
                                        /*#__PURE__*/ d.getOwner(),
                                        G
                                    ]);
                                } else p.push([
                                    d,
                                    d.getEdges()[0],
                                    /*#__PURE__*/ d.getOwner()
                                ]);
                                m = true;
                            }
                            if (m == true) {
                                for(var F = [], I = 0; I < p.length; I++)p[I][0].getEdges().length == 1 && (F.push(p[I]), p[I][0].getOwner().remove(p[I][0]));
                                h.push(F), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
                            }
                        }
                        this.prunedNodesAll = h;
                    }, R.prototype.growTree = function(h) {
                        for(var m = h.length, d = h[m - 1], T, p = 0; p < d.length; p++)T = d[p], this.findPlaceforPrunedNode(T), T[2].add(T[0]), T[2].add(T[1], T[1].source, T[1].target);
                        h.splice(h.length - 1, 1), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
                    }, R.prototype.findPlaceforPrunedNode = function(h) {
                        var m, d, T = h[0];
                        if (T == h[1].source ? d = h[1].target : d = h[1].source, o.PURE_INCREMENTAL) T.setCenter(d.getCenterX() + h[3].getWidth(), d.getCenterY() + h[3].getHeight());
                        else {
                            var p = d.startX, O = d.finishX, x = d.startY, G = d.finishY, F = 0, I = 0, Z = 0, et = 0, P = [
                                F,
                                Z,
                                I,
                                et
                            ];
                            if (x > 0) for(var tt = p; tt <= O; tt++)P[0] += this.grid[tt][x - 1].length + this.grid[tt][x].length - 1;
                            if (O < this.grid.length - 1) for(var tt = x; tt <= G; tt++)P[1] += this.grid[O + 1][tt].length + this.grid[O][tt].length - 1;
                            if (G < this.grid[0].length - 1) for(var tt = p; tt <= O; tt++)P[2] += this.grid[tt][G + 1].length + this.grid[tt][G].length - 1;
                            if (p > 0) for(var tt = x; tt <= G; tt++)P[3] += this.grid[p - 1][tt].length + this.grid[p][tt].length - 1;
                            for(var B = C.MAX_VALUE, M, U, H = 0; H < P.length; H++)P[H] < B ? (B = P[H], M = 1, U = H) : P[H] == B && M++;
                            if (M == 3 && B == 0) P[0] == 0 && P[1] == 0 && P[2] == 0 ? m = 1 : P[0] == 0 && P[1] == 0 && P[3] == 0 ? m = 0 : P[0] == 0 && P[2] == 0 && P[3] == 0 ? m = 3 : P[1] == 0 && P[2] == 0 && P[3] == 0 && (m = 2);
                            else if (M == 2 && B == 0) {
                                var j = /*#__PURE__*/ Math.floor(Math.random() * 2);
                                P[0] == 0 && P[1] == 0 ? j == 0 ? m = 0 : m = 1 : P[0] == 0 && P[2] == 0 ? j == 0 ? m = 0 : m = 2 : P[0] == 0 && P[3] == 0 ? j == 0 ? m = 0 : m = 3 : P[1] == 0 && P[2] == 0 ? j == 0 ? m = 1 : m = 2 : P[1] == 0 && P[3] == 0 ? j == 0 ? m = 1 : m = 3 : j == 0 ? m = 2 : m = 3;
                            } else if (M == 4 && B == 0) {
                                var j = /*#__PURE__*/ Math.floor(Math.random() * 4);
                                m = j;
                            } else m = U;
                            m == 0 ? T.setCenter(/*#__PURE__*/ d.getCenterX(), d.getCenterY() - d.getHeight() / 2 - l.DEFAULT_EDGE_LENGTH - T.getHeight() / 2) : m == 1 ? T.setCenter(d.getCenterX() + d.getWidth() / 2 + l.DEFAULT_EDGE_LENGTH + T.getWidth() / 2, /*#__PURE__*/ d.getCenterY()) : m == 2 ? T.setCenter(/*#__PURE__*/ d.getCenterX(), d.getCenterY() + d.getHeight() / 2 + l.DEFAULT_EDGE_LENGTH + T.getHeight() / 2) : T.setCenter(d.getCenterX() - d.getWidth() / 2 - l.DEFAULT_EDGE_LENGTH - T.getWidth() / 2, /*#__PURE__*/ d.getCenterY());
                        }
                    }, n.exports = R;
                },
                991: (n, i, a)=>{
                    var c = a(551).FDLayoutNode, t = a(551).IMath;
                    function u(e, o, f, l) {
                        c.call(this, e, o, f, l);
                    }
                    m$1(u, "CoSENode"), u.prototype = /*#__PURE__*/ Object.create(c.prototype);
                    for(var r in c)u[r] = c[r];
                    u.prototype.calculateDisplacement = function() {
                        var e = /*#__PURE__*/ this.graphManager.getLayout();
                        this.getChild() != null && this.fixedNodeWeight ? (this.displacementX += e.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.fixedNodeWeight, this.displacementY += e.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.fixedNodeWeight) : (this.displacementX += e.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.noOfChildren, this.displacementY += e.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.noOfChildren), Math.abs(this.displacementX) > e.coolingFactor * e.maxNodeDisplacement && (this.displacementX = e.coolingFactor * e.maxNodeDisplacement * t.sign(this.displacementX)), Math.abs(this.displacementY) > e.coolingFactor * e.maxNodeDisplacement && (this.displacementY = e.coolingFactor * e.maxNodeDisplacement * t.sign(this.displacementY)), this.child && this.child.getNodes().length > 0 && this.propogateDisplacementToChildren(this.displacementX, this.displacementY);
                    }, u.prototype.propogateDisplacementToChildren = function(e, o) {
                        for(var f = /*#__PURE__*/ this.getChild().getNodes(), l, A = 0; A < f.length; A++)l = f[A], l.getChild() == null ? (l.displacementX += e, l.displacementY += o) : l.propogateDisplacementToChildren(e, o);
                    }, u.prototype.move = function() {
                        var e = /*#__PURE__*/ this.graphManager.getLayout();
                        (this.child == null || this.child.getNodes().length == 0) && (this.moveBy(this.displacementX, this.displacementY), e.totalDisplacement += Math.abs(this.displacementX) + Math.abs(this.displacementY)), this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0;
                    }, u.prototype.setPred1 = function(e) {
                        this.pred1 = e;
                    }, u.prototype.getPred1 = function() {
                        return pred1;
                    }, u.prototype.getPred2 = function() {
                        return pred2;
                    }, u.prototype.setNext = function(e) {
                        this.next = e;
                    }, u.prototype.getNext = function() {
                        return next;
                    }, u.prototype.setProcessed = function(e) {
                        this.processed = e;
                    }, u.prototype.isProcessed = function() {
                        return processed;
                    }, n.exports = u;
                },
                902: (n, i, a)=>{
                    function c(f) {
                        if (Array.isArray(f)) {
                            for(var l = 0, A = /*#__PURE__*/ Array(f.length); l < f.length; l++)A[l] = f[l];
                            return A;
                        } else return Array.from(f);
                    }
                    m$1(c, "_toConsumableArray");
                    var t = /*#__PURE__*/ a(806), u = a(551).LinkedList, r = a(551).Matrix, e = a(551).SVD;
                    function o() {}
                    m$1(o, "ConstraintHandler"), o.handleConstraints = function(f) {
                        var l = {};
                        l.fixedNodeConstraint = f.constraints.fixedNodeConstraint, l.alignmentConstraint = f.constraints.alignmentConstraint, l.relativePlacementConstraint = f.constraints.relativePlacementConstraint;
                        for(var A = new Map, v = new Map, y = [], D = [], S = /*#__PURE__*/ f.getAllNodes(), C = 0, b = 0; b < S.length; b++){
                            var z = S[b];
                            z.getChild() == null && (v.set(z.id, C++), y.push(/*#__PURE__*/ z.getCenterX()), D.push(/*#__PURE__*/ z.getCenterY()), A.set(z.id, z));
                        }
                        l.relativePlacementConstraint && l.relativePlacementConstraint.forEach(function(Y) {
                            !Y.gap && Y.gap != 0 && (Y.left ? Y.gap = t.DEFAULT_EDGE_LENGTH + A.get(Y.left).getWidth() / 2 + A.get(Y.right).getWidth() / 2 : Y.gap = t.DEFAULT_EDGE_LENGTH + A.get(Y.top).getHeight() / 2 + A.get(Y.bottom).getHeight() / 2);
                        });
                        var X = /*#__PURE__*/ m$1(function(W, V) {
                            return {
                                x: W.x - V.x,
                                y: W.y - V.y
                            };
                        }, "calculatePositionDiff"), K = /*#__PURE__*/ m$1(function(W) {
                            var V = 0, $ = 0;
                            return W.forEach(function(k) {
                                V += y[v.get(k)], $ += D[v.get(k)];
                            }), {
                                x: V / W.size,
                                y: $ / W.size
                            };
                        }, "calculateAvgPosition"), R = /*#__PURE__*/ m$1(function(W, V, $, k, _) {
                            function gt(st, nt) {
                                var dt = new Set(st), at = true, ct = false, Ft = void 0;
                                try {
                                    for(var Rt = /*#__PURE__*/ nt[Symbol.iterator](), Bt; !(at = (Bt = /*#__PURE__*/ Rt.next()).done); at = !0){
                                        var Ot = Bt.value;
                                        dt.add(Ot);
                                    }
                                } catch (Nt) {
                                    ct = true, Ft = Nt;
                                } finally{
                                    try {
                                        !at && Rt.return && Rt.return();
                                    } finally{
                                        if (ct) throw Ft;
                                    }
                                }
                                return dt;
                            }
                            m$1(gt, "setUnion");
                            var ft = new Map;
                            W.forEach(function(st, nt) {
                                ft.set(nt, 0);
                            }), W.forEach(function(st, nt) {
                                st.forEach(function(dt) {
                                    ft.set(dt.id, ft.get(dt.id) + 1);
                                });
                            });
                            var q = new Map, lt = new Map, ut = new u;
                            ft.forEach(function(st, nt) {
                                st == 0 ? (ut.push(nt), $ || (V == "horizontal" ? q.set(nt, v.has(nt) ? y[v.get(nt)] : k.get(nt)) : q.set(nt, v.has(nt) ? D[v.get(nt)] : k.get(nt)))) : q.set(nt, Number.NEGATIVE_INFINITY), $ && lt.set(nt, new Set([
                                    nt
                                ]));
                            }), $ && _.forEach(function(st) {
                                var nt = [];
                                if (st.forEach(function(ct) {
                                    $.has(ct) && nt.push(ct);
                                }), nt.length > 0) {
                                    var dt = 0;
                                    nt.forEach(function(ct) {
                                        V == "horizontal" ? (q.set(ct, v.has(ct) ? y[v.get(ct)] : k.get(ct)), dt += /*#__PURE__*/ q.get(ct)) : (q.set(ct, v.has(ct) ? D[v.get(ct)] : k.get(ct)), dt += /*#__PURE__*/ q.get(ct));
                                    }), dt = dt / nt.length, st.forEach(function(ct) {
                                        $.has(ct) || q.set(ct, dt);
                                    });
                                } else {
                                    var at = 0;
                                    st.forEach(function(ct) {
                                        V == "horizontal" ? at += v.has(ct) ? y[v.get(ct)] : k.get(ct) : at += v.has(ct) ? D[v.get(ct)] : k.get(ct);
                                    }), at = at / st.length, st.forEach(function(ct) {
                                        q.set(ct, at);
                                    });
                                }
                            });
                            for(var it = /*#__PURE__*/ m$1(function() {
                                var nt = /*#__PURE__*/ ut.shift(), dt = /*#__PURE__*/ W.get(nt);
                                dt.forEach(function(at) {
                                    if (q.get(at.id) < q.get(nt) + at.gap) if ($ && $.has(at.id)) {
                                        var ct = void 0;
                                        if (V == "horizontal" ? ct = v.has(at.id) ? y[v.get(at.id)] : k.get(at.id) : ct = v.has(at.id) ? D[v.get(at.id)] : k.get(at.id), q.set(at.id, ct), ct < q.get(nt) + at.gap) {
                                            var Ft = q.get(nt) + at.gap - ct;
                                            lt.get(nt).forEach(function(Rt) {
                                                q.set(Rt, q.get(Rt) - Ft);
                                            });
                                        }
                                    } else q.set(at.id, q.get(nt) + at.gap);
                                    ft.set(at.id, ft.get(at.id) - 1), ft.get(at.id) == 0 && ut.push(at.id), $ && lt.set(at.id, /*#__PURE__*/ gt(/*#__PURE__*/ lt.get(nt), /*#__PURE__*/ lt.get(at.id)));
                                });
                            }, "_loop"); ut.length != 0;)it();
                            if ($) {
                                var pt = new Set;
                                W.forEach(function(st, nt) {
                                    st.length == 0 && pt.add(nt);
                                });
                                var Ct = [];
                                lt.forEach(function(st, nt) {
                                    if (pt.has(nt)) {
                                        var dt = false, at = true, ct = false, Ft = void 0;
                                        try {
                                            for(var Rt = /*#__PURE__*/ st[Symbol.iterator](), Bt; !(at = (Bt = /*#__PURE__*/ Rt.next()).done); at = !0){
                                                var Ot = Bt.value;
                                                $.has(Ot) && (dt = !0);
                                            }
                                        } catch (St) {
                                            ct = true, Ft = St;
                                        } finally{
                                            try {
                                                !at && Rt.return && Rt.return();
                                            } finally{
                                                if (ct) throw Ft;
                                            }
                                        }
                                        if (!dt) {
                                            var Nt = false, Zt = void 0;
                                            Ct.forEach(function(St, Wt) {
                                                St.has([].concat(/*#__PURE__*/ c(st))[0]) && (Nt = true, Zt = Wt);
                                            }), Nt ? st.forEach(function(St) {
                                                Ct[Zt].add(St);
                                            }) : Ct.push(new Set(st));
                                        }
                                    }
                                }), Ct.forEach(function(st, nt) {
                                    var dt = Number.POSITIVE_INFINITY, at = Number.POSITIVE_INFINITY, ct = Number.NEGATIVE_INFINITY, Ft = Number.NEGATIVE_INFINITY, Rt = true, Bt = false, Ot = void 0;
                                    try {
                                        for(var Nt = /*#__PURE__*/ st[Symbol.iterator](), Zt; !(Rt = (Zt = /*#__PURE__*/ Nt.next()).done); Rt = !0){
                                            var St = Zt.value, Wt = void 0;
                                            V == "horizontal" ? Wt = v.has(St) ? y[v.get(St)] : k.get(St) : Wt = v.has(St) ? D[v.get(St)] : k.get(St);
                                            var $t = /*#__PURE__*/ q.get(St);
                                            Wt < dt && (dt = Wt), Wt > ct && (ct = Wt), $t < at && (at = $t), $t > Ft && (Ft = $t);
                                        }
                                    } catch (ne) {
                                        Bt = true, Ot = ne;
                                    } finally{
                                        try {
                                            !Rt && Nt.return && Nt.return();
                                        } finally{
                                            if (Bt) throw Ot;
                                        }
                                    }
                                    var me = (dt + ct) / 2 - (at + Ft) / 2, Kt = true, ee = false, re = void 0;
                                    try {
                                        for(var jt = /*#__PURE__*/ st[Symbol.iterator](), ue; !(Kt = (ue = /*#__PURE__*/ jt.next()).done); Kt = !0){
                                            var ie = ue.value;
                                            q.set(ie, q.get(ie) + me);
                                        }
                                    } catch (ne) {
                                        ee = true, re = ne;
                                    } finally{
                                        try {
                                            !Kt && jt.return && jt.return();
                                        } finally{
                                            if (ee) throw re;
                                        }
                                    }
                                });
                            }
                            return q;
                        }, "findAppropriatePositionForRelativePlacement"), J = /*#__PURE__*/ m$1(function(W) {
                            var V = 0, $ = 0, k = 0, _ = 0;
                            if (W.forEach(function(lt) {
                                lt.left ? y[v.get(lt.left)] - y[v.get(lt.right)] >= 0 ? V++ : $++ : D[v.get(lt.top)] - D[v.get(lt.bottom)] >= 0 ? k++ : _++;
                            }), V > $ && k > _) for(var gt = 0; gt < v.size; gt++)y[gt] = -1 * y[gt], D[gt] = -1 * D[gt];
                            else if (V > $) for(var ft = 0; ft < v.size; ft++)y[ft] = -1 * y[ft];
                            else if (k > _) for(var q = 0; q < v.size; q++)D[q] = -1 * D[q];
                        }, "applyReflectionForRelativePlacement"), h = /*#__PURE__*/ m$1(function(W) {
                            var V = [], $ = new u, k = new Set, _ = 0;
                            return W.forEach(function(gt, ft) {
                                if (!k.has(ft)) {
                                    V[_] = [];
                                    var q = ft;
                                    for($.push(q), k.add(q), V[_].push(q); $.length != 0;){
                                        q = /*#__PURE__*/ $.shift();
                                        var lt = /*#__PURE__*/ W.get(q);
                                        lt.forEach(function(ut) {
                                            k.has(ut.id) || ($.push(ut.id), k.add(ut.id), V[_].push(ut.id));
                                        });
                                    }
                                    _++;
                                }
                            }), V;
                        }, "findComponents"), m = /*#__PURE__*/ m$1(function(W) {
                            var V = new Map;
                            return W.forEach(function($, k) {
                                V.set(k, []);
                            }), W.forEach(function($, k) {
                                $.forEach(function(_) {
                                    V.get(k).push(_), V.get(_.id).push({
                                        id: k,
                                        gap: _.gap,
                                        direction: _.direction
                                    });
                                });
                            }), V;
                        }, "dagToUndirected"), d = /*#__PURE__*/ m$1(function(W) {
                            var V = new Map;
                            return W.forEach(function($, k) {
                                V.set(k, []);
                            }), W.forEach(function($, k) {
                                $.forEach(function(_) {
                                    V.get(_.id).push({
                                        id: k,
                                        gap: _.gap,
                                        direction: _.direction
                                    });
                                });
                            }), V;
                        }, "dagToReversed"), T = [], p = [], O = false, x = false, G = new Set, F = new Map, I = new Map, Z = [];
                        if (l.fixedNodeConstraint && l.fixedNodeConstraint.forEach(function(Y) {
                            G.add(Y.nodeId);
                        }), l.relativePlacementConstraint && (l.relativePlacementConstraint.forEach(function(Y) {
                            Y.left ? (F.has(Y.left) ? F.get(Y.left).push({
                                id: Y.right,
                                gap: Y.gap,
                                direction: "horizontal"
                            }) : F.set(Y.left, [
                                {
                                    id: Y.right,
                                    gap: Y.gap,
                                    direction: "horizontal"
                                }
                            ]), F.has(Y.right) || F.set(Y.right, [])) : (F.has(Y.top) ? F.get(Y.top).push({
                                id: Y.bottom,
                                gap: Y.gap,
                                direction: "vertical"
                            }) : F.set(Y.top, [
                                {
                                    id: Y.bottom,
                                    gap: Y.gap,
                                    direction: "vertical"
                                }
                            ]), F.has(Y.bottom) || F.set(Y.bottom, []));
                        }), I = /*#__PURE__*/ m(F), Z = /*#__PURE__*/ h(I)), t.TRANSFORM_ON_CONSTRAINT_HANDLING) {
                            if (l.fixedNodeConstraint && l.fixedNodeConstraint.length > 1) l.fixedNodeConstraint.forEach(function(Y, W) {
                                T[W] = [
                                    Y.position.x,
                                    Y.position.y
                                ], p[W] = [
                                    y[v.get(Y.nodeId)],
                                    D[v.get(Y.nodeId)]
                                ];
                            }), O = true;
                            else if (l.alignmentConstraint) (function() {
                                var Y = 0;
                                if (l.alignmentConstraint.vertical) {
                                    for(var W = l.alignmentConstraint.vertical, V = /*#__PURE__*/ m$1(function(q) {
                                        var lt = new Set;
                                        W[q].forEach(function(pt) {
                                            lt.add(pt);
                                        });
                                        var ut = new Set([].concat(/*#__PURE__*/ c(lt)).filter(function(pt) {
                                            return G.has(pt);
                                        })), it = void 0;
                                        ut.size > 0 ? it = y[v.get(ut.values().next().value)] : it = K(lt).x, W[q].forEach(function(pt) {
                                            T[Y] = [
                                                it,
                                                D[v.get(pt)]
                                            ], p[Y] = [
                                                y[v.get(pt)],
                                                D[v.get(pt)]
                                            ], Y++;
                                        });
                                    }, "_loop2"), $ = 0; $ < W.length; $++)V($);
                                    O = true;
                                }
                                if (l.alignmentConstraint.horizontal) {
                                    for(var k = l.alignmentConstraint.horizontal, _ = /*#__PURE__*/ m$1(function(q) {
                                        var lt = new Set;
                                        k[q].forEach(function(pt) {
                                            lt.add(pt);
                                        });
                                        var ut = new Set([].concat(/*#__PURE__*/ c(lt)).filter(function(pt) {
                                            return G.has(pt);
                                        })), it = void 0;
                                        ut.size > 0 ? it = y[v.get(ut.values().next().value)] : it = K(lt).y, k[q].forEach(function(pt) {
                                            T[Y] = [
                                                y[v.get(pt)],
                                                it
                                            ], p[Y] = [
                                                y[v.get(pt)],
                                                D[v.get(pt)]
                                            ], Y++;
                                        });
                                    }, "_loop3"), gt = 0; gt < k.length; gt++)_(gt);
                                    O = true;
                                }
                                l.relativePlacementConstraint && (x = true);
                            })();
                            else if (l.relativePlacementConstraint) {
                                for(var et = 0, P = 0, tt = 0; tt < Z.length; tt++)Z[tt].length > et && (et = Z[tt].length, P = tt);
                                if (et < I.size / 2) J(l.relativePlacementConstraint), O = false, x = false;
                                else {
                                    var B = new Map, M = new Map, U = [];
                                    Z[P].forEach(function(Y) {
                                        F.get(Y).forEach(function(W) {
                                            W.direction == "horizontal" ? (B.has(Y) ? B.get(Y).push(W) : B.set(Y, [
                                                W
                                            ]), B.has(W.id) || B.set(W.id, []), U.push({
                                                left: Y,
                                                right: W.id
                                            })) : (M.has(Y) ? M.get(Y).push(W) : M.set(Y, [
                                                W
                                            ]), M.has(W.id) || M.set(W.id, []), U.push({
                                                top: Y,
                                                bottom: W.id
                                            }));
                                        });
                                    }), J(U), x = false;
                                    var H = /*#__PURE__*/ R(B, "horizontal"), j = /*#__PURE__*/ R(M, "vertical");
                                    Z[P].forEach(function(Y, W) {
                                        p[W] = [
                                            y[v.get(Y)],
                                            D[v.get(Y)]
                                        ], T[W] = [], H.has(Y) ? T[W][0] = /*#__PURE__*/ H.get(Y) : T[W][0] = y[v.get(Y)], j.has(Y) ? T[W][1] = /*#__PURE__*/ j.get(Y) : T[W][1] = D[v.get(Y)];
                                    }), O = true;
                                }
                            }
                            if (O) {
                                for(var ht = void 0, Lt = /*#__PURE__*/ r.transpose(T), bt = /*#__PURE__*/ r.transpose(p), Q = 0; Q < Lt.length; Q++)Lt[Q] = /*#__PURE__*/ r.multGamma(Lt[Q]), bt[Q] = /*#__PURE__*/ r.multGamma(bt[Q]);
                                var Xt = /*#__PURE__*/ r.multMat(Lt, /*#__PURE__*/ r.transpose(bt)), wt = /*#__PURE__*/ e.svd(Xt);
                                ht = /*#__PURE__*/ r.multMat(wt.V, /*#__PURE__*/ r.transpose(wt.U));
                                for(var ot = 0; ot < v.size; ot++){
                                    var rt = [
                                        y[ot],
                                        D[ot]
                                    ], yt = [
                                        ht[0][0],
                                        ht[1][0]
                                    ], Et = [
                                        ht[0][1],
                                        ht[1][1]
                                    ];
                                    y[ot] = /*#__PURE__*/ r.dotProduct(rt, yt), D[ot] = /*#__PURE__*/ r.dotProduct(rt, Et);
                                }
                                x && J(l.relativePlacementConstraint);
                            }
                        }
                        if (t.ENFORCE_CONSTRAINTS) {
                            if (l.fixedNodeConstraint && l.fixedNodeConstraint.length > 0) {
                                var Dt = {
                                    x: 0,
                                    y: 0
                                };
                                l.fixedNodeConstraint.forEach(function(Y, W) {
                                    var V = {
                                        x: y[v.get(Y.nodeId)],
                                        y: D[v.get(Y.nodeId)]
                                    }, $ = Y.position, k = /*#__PURE__*/ X($, V);
                                    Dt.x += k.x, Dt.y += k.y;
                                }), Dt.x /= l.fixedNodeConstraint.length, Dt.y /= l.fixedNodeConstraint.length, y.forEach(function(Y, W) {
                                    y[W] += Dt.x;
                                }), D.forEach(function(Y, W) {
                                    D[W] += Dt.y;
                                }), l.fixedNodeConstraint.forEach(function(Y) {
                                    y[v.get(Y.nodeId)] = Y.position.x, D[v.get(Y.nodeId)] = Y.position.y;
                                });
                            }
                            if (l.alignmentConstraint) {
                                if (l.alignmentConstraint.vertical) for(var Tt = l.alignmentConstraint.vertical, At = /*#__PURE__*/ m$1(function(W) {
                                    var V = new Set;
                                    Tt[W].forEach(function(_) {
                                        V.add(_);
                                    });
                                    var $ = new Set([].concat(/*#__PURE__*/ c(V)).filter(function(_) {
                                        return G.has(_);
                                    })), k = void 0;
                                    $.size > 0 ? k = y[v.get($.values().next().value)] : k = K(V).x, V.forEach(function(_) {
                                        G.has(_) || (y[v.get(_)] = k);
                                    });
                                }, "_loop4"), xt = 0; xt < Tt.length; xt++)At(xt);
                                if (l.alignmentConstraint.horizontal) for(var It = l.alignmentConstraint.horizontal, zt = /*#__PURE__*/ m$1(function(W) {
                                    var V = new Set;
                                    It[W].forEach(function(_) {
                                        V.add(_);
                                    });
                                    var $ = new Set([].concat(/*#__PURE__*/ c(V)).filter(function(_) {
                                        return G.has(_);
                                    })), k = void 0;
                                    $.size > 0 ? k = D[v.get($.values().next().value)] : k = K(V).y, V.forEach(function(_) {
                                        G.has(_) || (D[v.get(_)] = k);
                                    });
                                }, "_loop5"), Yt = 0; Yt < It.length; Yt++)zt(Yt);
                            }
                            l.relativePlacementConstraint && function() {
                                var Y = new Map, W = new Map, V = new Map, $ = new Map, k = new Map, _ = new Map, gt = new Set, ft = new Set;
                                if (G.forEach(function(Ut) {
                                    gt.add(Ut), ft.add(Ut);
                                }), l.alignmentConstraint) {
                                    if (l.alignmentConstraint.vertical) for(var q = l.alignmentConstraint.vertical, lt = /*#__PURE__*/ m$1(function(mt) {
                                        V.set("dummy" + mt, []), q[mt].forEach(function(Mt) {
                                            Y.set(Mt, "dummy" + mt), V.get("dummy" + mt).push(Mt), G.has(Mt) && gt.add("dummy" + mt);
                                        }), k.set("dummy" + mt, y[v.get(q[mt][0])]);
                                    }, "_loop6"), ut = 0; ut < q.length; ut++)lt(ut);
                                    if (l.alignmentConstraint.horizontal) for(var it = l.alignmentConstraint.horizontal, pt = /*#__PURE__*/ m$1(function(mt) {
                                        $.set("dummy" + mt, []), it[mt].forEach(function(Mt) {
                                            W.set(Mt, "dummy" + mt), $.get("dummy" + mt).push(Mt), G.has(Mt) && ft.add("dummy" + mt);
                                        }), _.set("dummy" + mt, D[v.get(it[mt][0])]);
                                    }, "_loop7"), Ct = 0; Ct < it.length; Ct++)pt(Ct);
                                }
                                var st = new Map, nt = new Map, dt = /*#__PURE__*/ m$1(function(mt) {
                                    F.get(mt).forEach(function(Mt) {
                                        var qt = void 0, kt = void 0;
                                        Mt.direction == "horizontal" ? (qt = Y.get(mt) ? Y.get(mt) : mt, Y.get(Mt.id) ? kt = {
                                            id: /*#__PURE__*/ Y.get(Mt.id),
                                            gap: Mt.gap,
                                            direction: Mt.direction
                                        } : kt = Mt, st.has(qt) ? st.get(qt).push(kt) : st.set(qt, [
                                            kt
                                        ]), st.has(kt.id) || st.set(kt.id, [])) : (qt = W.get(mt) ? W.get(mt) : mt, W.get(Mt.id) ? kt = {
                                            id: /*#__PURE__*/ W.get(Mt.id),
                                            gap: Mt.gap,
                                            direction: Mt.direction
                                        } : kt = Mt, nt.has(qt) ? nt.get(qt).push(kt) : nt.set(qt, [
                                            kt
                                        ]), nt.has(kt.id) || nt.set(kt.id, []));
                                    });
                                }, "_loop8"), at = true, ct = false, Ft = void 0;
                                try {
                                    for(var Rt = /*#__PURE__*/ F.keys()[Symbol.iterator](), Bt; !(at = (Bt = /*#__PURE__*/ Rt.next()).done); at = !0){
                                        var Ot = Bt.value;
                                        dt(Ot);
                                    }
                                } catch (Ut) {
                                    ct = true, Ft = Ut;
                                } finally{
                                    try {
                                        !at && Rt.return && Rt.return();
                                    } finally{
                                        if (ct) throw Ft;
                                    }
                                }
                                var Nt = /*#__PURE__*/ m(st), Zt = /*#__PURE__*/ m(nt), St = /*#__PURE__*/ h(Nt), Wt = /*#__PURE__*/ h(Zt), $t = /*#__PURE__*/ d(st), me = /*#__PURE__*/ d(nt), Kt = [], ee = [];
                                St.forEach(function(Ut, mt) {
                                    Kt[mt] = [], Ut.forEach(function(Mt) {
                                        $t.get(Mt).length == 0 && Kt[mt].push(Mt);
                                    });
                                }), Wt.forEach(function(Ut, mt) {
                                    ee[mt] = [], Ut.forEach(function(Mt) {
                                        me.get(Mt).length == 0 && ee[mt].push(Mt);
                                    });
                                });
                                var re = /*#__PURE__*/ R(st, "horizontal", gt, k, Kt), jt = /*#__PURE__*/ R(nt, "vertical", ft, _, ee), ue = /*#__PURE__*/ m$1(function(mt) {
                                    V.get(mt) ? V.get(mt).forEach(function(Mt) {
                                        y[v.get(Mt)] = /*#__PURE__*/ re.get(mt);
                                    }) : y[v.get(mt)] = /*#__PURE__*/ re.get(mt);
                                }, "_loop9"), ie = true, ne = false, Fe = void 0;
                                try {
                                    for(var Ee = /*#__PURE__*/ re.keys()[Symbol.iterator](), Pe; !(ie = (Pe = /*#__PURE__*/ Ee.next()).done); ie = !0){
                                        var Te = Pe.value;
                                        ue(Te);
                                    }
                                } catch (Ut) {
                                    ne = true, Fe = Ut;
                                } finally{
                                    try {
                                        !ie && Ee.return && Ee.return();
                                    } finally{
                                        if (ne) throw Fe;
                                    }
                                }
                                var Ar = /*#__PURE__*/ m$1(function(mt) {
                                    $.get(mt) ? $.get(mt).forEach(function(Mt) {
                                        D[v.get(Mt)] = /*#__PURE__*/ jt.get(mt);
                                    }) : D[v.get(mt)] = /*#__PURE__*/ jt.get(mt);
                                }, "_loop10"), Ae = true, Ge = false, Ye = void 0;
                                try {
                                    for(var Ne = /*#__PURE__*/ jt.keys()[Symbol.iterator](), Ue; !(Ae = (Ue = /*#__PURE__*/ Ne.next()).done); Ae = !0){
                                        var Te = Ue.value;
                                        Ar(Te);
                                    }
                                } catch (Ut) {
                                    Ge = true, Ye = Ut;
                                } finally{
                                    try {
                                        !Ae && Ne.return && Ne.return();
                                    } finally{
                                        if (Ge) throw Ye;
                                    }
                                }
                            }();
                        }
                        for(var Ht = 0; Ht < S.length; Ht++){
                            var Pt = S[Ht];
                            Pt.getChild() == null && Pt.setCenter(y[v.get(Pt.id)], D[v.get(Pt.id)]);
                        }
                    }, n.exports = o;
                },
                551: (n)=>{
                    n.exports = E;
                }
            }, N = {};
            function g(n) {
                var i = N[n];
                if (i !== void 0) return i.exports;
                var a = N[n] = {
                    exports: {}
                };
                return w[n](a, a.exports, g), a.exports;
            }
            m$1(g, "__webpack_require__");
            var s = /*#__PURE__*/ g(45);
            return s;
        })();
    });
});
var dr = /*#__PURE__*/ n((fe, be)=>{
    m$1(function(w, N) {
        typeof fe == "object" && typeof be == "object" ? be.exports = /*#__PURE__*/ N(/*#__PURE__*/ Se()) : typeof define == "function" && define.amd ? define([
            "cose-base"
        ], N) : typeof fe == "object" ? fe.cytoscapeFcose = /*#__PURE__*/ N(/*#__PURE__*/ Se()) : w.cytoscapeFcose = /*#__PURE__*/ N(w.coseBase);
    }, "webpackUniversalModuleDefinition")(fe, function(E) {
        return (()=>{
            var w = {
                658: (n)=>{
                    n.exports = Object.assign != null ? Object.assign.bind(Object) : function(i) {
                        for(var a = arguments.length, c = /*#__PURE__*/ Array(a > 1 ? a - 1 : 0), t = 1; t < a; t++)c[t - 1] = arguments[t];
                        return c.forEach(function(u) {
                            Object.keys(u).forEach(function(r) {
                                return i[r] = u[r];
                            });
                        }), i;
                    };
                },
                548: (n, i, a)=>{
                    var c = /*#__PURE__*/ function() {
                        function r(e, o) {
                            var f = [], l = true, A = false, v = void 0;
                            try {
                                for(var y = /*#__PURE__*/ e[Symbol.iterator](), D; !(l = (D = /*#__PURE__*/ y.next()).done) && (f.push(D.value), !(o && f.length === o)); l = !0);
                            } catch (S) {
                                A = true, v = S;
                            } finally{
                                try {
                                    !l && y.return && y.return();
                                } finally{
                                    if (A) throw v;
                                }
                            }
                            return f;
                        }
                        return m$1(r, "sliceIterator"), function(e, o) {
                            if (Array.isArray(e)) return e;
                            if (Symbol.iterator in Object(e)) return r(e, o);
                            throw new TypeError("Invalid attempt to destructure non-iterable instance");
                        };
                    }(), t = a(140).layoutBase.LinkedList, u = {};
                    u.getTopMostNodes = function(r) {
                        for(var e = {}, o = 0; o < r.length; o++)e[r[o].id()] = true;
                        var f = /*#__PURE__*/ r.filter(function(l, A) {
                            typeof l == "number" && (l = A);
                            for(var v = l.parent()[0]; v != null;){
                                if (e[v.id()]) return false;
                                v = v.parent()[0];
                            }
                            return true;
                        });
                        return f;
                    }, u.connectComponents = function(r, e, o, f) {
                        var l = new t, A = new Set, v = [], y = void 0, D = void 0, S = void 0, C = false, b = 1, z = [], X = [], K = /*#__PURE__*/ m$1(function() {
                            var J = /*#__PURE__*/ r.collection();
                            X.push(J);
                            var h = o[0], m = /*#__PURE__*/ r.collection();
                            m.merge(h).merge(/*#__PURE__*/ h.descendants().intersection(e)), v.push(h), m.forEach(function(p) {
                                l.push(p), A.add(p), J.merge(p);
                            });
                            for(var d = /*#__PURE__*/ m$1(function() {
                                h = /*#__PURE__*/ l.shift();
                                var O = /*#__PURE__*/ r.collection();
                                h.neighborhood().nodes().forEach(function(I) {
                                    e.intersection(/*#__PURE__*/ h.edgesWith(I)).length > 0 && O.merge(I);
                                });
                                for(var x = 0; x < O.length; x++){
                                    var G = O[x];
                                    if (y = /*#__PURE__*/ o.intersection(/*#__PURE__*/ G.union(/*#__PURE__*/ G.ancestors())), y != null && !A.has(y[0])) {
                                        var F = /*#__PURE__*/ y.union(/*#__PURE__*/ y.descendants());
                                        F.forEach(function(I) {
                                            l.push(I), A.add(I), J.merge(I), o.has(I) && v.push(I);
                                        });
                                    }
                                }
                            }, "_loop2"); l.length != 0;)d();
                            if (J.forEach(function(p) {
                                e.intersection(/*#__PURE__*/ p.connectedEdges()).forEach(function(O) {
                                    J.has(/*#__PURE__*/ O.source()) && J.has(/*#__PURE__*/ O.target()) && J.merge(O);
                                });
                            }), v.length == o.length && (C = true), !C || C && b > 1) {
                                D = v[0], S = D.connectedEdges().length, v.forEach(function(p) {
                                    p.connectedEdges().length < S && (S = p.connectedEdges().length, D = p);
                                }), z.push(/*#__PURE__*/ D.id());
                                var T = /*#__PURE__*/ r.collection();
                                T.merge(v[0]), v.forEach(function(p) {
                                    T.merge(p);
                                }), v = [], o = /*#__PURE__*/ o.difference(T), b++;
                            }
                        }, "_loop");
                        do K();
                        while (!C);
                        return f && z.length > 0 && f.set("dummy" + (f.size + 1), z), X;
                    }, u.relocateComponent = function(r, e, o) {
                        if (!o.fixedNodeConstraint) {
                            var f = Number.POSITIVE_INFINITY, l = Number.NEGATIVE_INFINITY, A = Number.POSITIVE_INFINITY, v = Number.NEGATIVE_INFINITY;
                            if (o.quality == "draft") {
                                var y = true, D = false, S = void 0;
                                try {
                                    for(var C = /*#__PURE__*/ e.nodeIndexes[Symbol.iterator](), b; !(y = (b = /*#__PURE__*/ C.next()).done); y = !0){
                                        var z = b.value, X = /*#__PURE__*/ c(z, 2), K = X[0], R = X[1], J = /*#__PURE__*/ o.cy.getElementById(K);
                                        if (J) {
                                            var h = /*#__PURE__*/ J.boundingBox(), m = e.xCoords[R] - h.w / 2, d = e.xCoords[R] + h.w / 2, T = e.yCoords[R] - h.h / 2, p = e.yCoords[R] + h.h / 2;
                                            m < f && (f = m), d > l && (l = d), T < A && (A = T), p > v && (v = p);
                                        }
                                    }
                                } catch (I) {
                                    D = true, S = I;
                                } finally{
                                    try {
                                        !y && C.return && C.return();
                                    } finally{
                                        if (D) throw S;
                                    }
                                }
                                var O = r.x - (l + f) / 2, x = r.y - (v + A) / 2;
                                e.xCoords = /*#__PURE__*/ e.xCoords.map(function(I) {
                                    return I + O;
                                }), e.yCoords = /*#__PURE__*/ e.yCoords.map(function(I) {
                                    return I + x;
                                });
                            } else {
                                Object.keys(e).forEach(function(I) {
                                    var Z = e[I], et = Z.getRect().x, P = Z.getRect().x + Z.getRect().width, tt = Z.getRect().y, B = Z.getRect().y + Z.getRect().height;
                                    et < f && (f = et), P > l && (l = P), tt < A && (A = tt), B > v && (v = B);
                                });
                                var G = r.x - (l + f) / 2, F = r.y - (v + A) / 2;
                                Object.keys(e).forEach(function(I) {
                                    var Z = e[I];
                                    Z.setCenter(Z.getCenterX() + G, Z.getCenterY() + F);
                                });
                            }
                        }
                    }, u.calcBoundingBox = function(r, e, o, f) {
                        for(var l = Number.MAX_SAFE_INTEGER, A = Number.MIN_SAFE_INTEGER, v = Number.MAX_SAFE_INTEGER, y = Number.MIN_SAFE_INTEGER, D = void 0, S = void 0, C = void 0, b = void 0, z = /*#__PURE__*/ r.descendants().not(":parent"), X = z.length, K = 0; K < X; K++){
                            var R = z[K];
                            D = e[f.get(/*#__PURE__*/ R.id())] - R.width() / 2, S = e[f.get(/*#__PURE__*/ R.id())] + R.width() / 2, C = o[f.get(/*#__PURE__*/ R.id())] - R.height() / 2, b = o[f.get(/*#__PURE__*/ R.id())] + R.height() / 2, l > D && (l = D), A < S && (A = S), v > C && (v = C), y < b && (y = b);
                        }
                        var J = {};
                        return J.topLeftX = l, J.topLeftY = v, J.width = A - l, J.height = y - v, J;
                    }, u.calcParentsWithoutChildren = function(r, e) {
                        var o = /*#__PURE__*/ r.collection();
                        return e.nodes(":parent").forEach(function(f) {
                            var l = false;
                            f.children().forEach(function(A) {
                                A.css("display") != "none" && (l = true);
                            }), l || o.merge(f);
                        }), o;
                    }, n.exports = u;
                },
                816: (n, i, a)=>{
                    var c = /*#__PURE__*/ a(548), t = a(140).CoSELayout, u = a(140).CoSENode, r = a(140).layoutBase.PointD, e = a(140).layoutBase.DimensionD, o = a(140).layoutBase.LayoutConstants, f = a(140).layoutBase.FDLayoutConstants, l = a(140).CoSEConstants, A = /*#__PURE__*/ m$1(function(y, D) {
                        var S = y.cy, C = y.eles, b = /*#__PURE__*/ C.nodes(), z = /*#__PURE__*/ C.edges(), X = void 0, K = void 0, R = void 0, J = {};
                        y.randomize && (X = D.nodeIndexes, K = D.xCoords, R = D.yCoords);
                        var h = /*#__PURE__*/ m$1(function(I) {
                            return typeof I == "function";
                        }, "isFn"), m = /*#__PURE__*/ m$1(function(I, Z) {
                            return h(I) ? I(Z) : I;
                        }, "optFn"), d = /*#__PURE__*/ c.calcParentsWithoutChildren(S, C), T = /*#__PURE__*/ m$1(function F(I, Z, et, P) {
                            for(var tt = Z.length, B = 0; B < tt; B++){
                                var M = Z[B], U = null;
                                M.intersection(d).length == 0 && (U = /*#__PURE__*/ M.children());
                                var H = void 0, j = /*#__PURE__*/ M.layoutDimensions({
                                    nodeDimensionsIncludeLabels: P.nodeDimensionsIncludeLabels
                                });
                                if (M.outerWidth() != null && M.outerHeight() != null) if (P.randomize) if (!M.isParent()) H = /*#__PURE__*/ I.add(new u(et.graphManager, new r(K[X.get(/*#__PURE__*/ M.id())] - j.w / 2, R[X.get(/*#__PURE__*/ M.id())] - j.h / 2), new e(parseFloat(j.w), parseFloat(j.h))));
                                else {
                                    var ht = /*#__PURE__*/ c.calcBoundingBox(M, K, R, X);
                                    M.intersection(d).length == 0 ? H = /*#__PURE__*/ I.add(new u(et.graphManager, new r(ht.topLeftX, ht.topLeftY), new e(ht.width, ht.height))) : H = /*#__PURE__*/ I.add(new u(et.graphManager, new r(ht.topLeftX, ht.topLeftY), new e(parseFloat(j.w), parseFloat(j.h))));
                                }
                                else H = /*#__PURE__*/ I.add(new u(et.graphManager, new r(M.position("x") - j.w / 2, M.position("y") - j.h / 2), new e(parseFloat(j.w), parseFloat(j.h))));
                                else H = /*#__PURE__*/ I.add(new u(this.graphManager));
                                if (H.id = /*#__PURE__*/ M.data("id"), H.nodeRepulsion = /*#__PURE__*/ m(P.nodeRepulsion, M), H.paddingLeft = /*#__PURE__*/ parseInt(/*#__PURE__*/ M.css("padding")), H.paddingTop = /*#__PURE__*/ parseInt(/*#__PURE__*/ M.css("padding")), H.paddingRight = /*#__PURE__*/ parseInt(/*#__PURE__*/ M.css("padding")), H.paddingBottom = /*#__PURE__*/ parseInt(/*#__PURE__*/ M.css("padding")), P.nodeDimensionsIncludeLabels && (H.labelWidth = M.boundingBox({
                                    includeLabels: true,
                                    includeNodes: false,
                                    includeOverlays: false
                                }).w, H.labelHeight = M.boundingBox({
                                    includeLabels: true,
                                    includeNodes: false,
                                    includeOverlays: false
                                }).h, H.labelPosVertical = /*#__PURE__*/ M.css("text-valign"), H.labelPosHorizontal = /*#__PURE__*/ M.css("text-halign")), J[M.data("id")] = H, isNaN(H.rect.x) && (H.rect.x = 0), isNaN(H.rect.y) && (H.rect.y = 0), U != null && U.length > 0) {
                                    var Lt = void 0;
                                    Lt = /*#__PURE__*/ et.getGraphManager().add(/*#__PURE__*/ et.newGraph(), H), F(Lt, U, et, P);
                                }
                            }
                        }, "processChildrenList"), p = /*#__PURE__*/ m$1(function(I, Z, et) {
                            for(var P = 0, tt = 0, B = 0; B < et.length; B++){
                                var M = et[B], U = J[M.data("source")], H = J[M.data("target")];
                                if (U && H && U !== H && U.getEdgesBetween(H).length == 0) {
                                    var j = /*#__PURE__*/ Z.add(/*#__PURE__*/ I.newEdge(), U, H);
                                    j.id = /*#__PURE__*/ M.id(), j.idealLength = /*#__PURE__*/ m(y.idealEdgeLength, M), j.edgeElasticity = /*#__PURE__*/ m(y.edgeElasticity, M), P += j.idealLength, tt++;
                                }
                            }
                            y.idealEdgeLength != null && (tt > 0 ? l.DEFAULT_EDGE_LENGTH = f.DEFAULT_EDGE_LENGTH = P / tt : h(y.idealEdgeLength) ? l.DEFAULT_EDGE_LENGTH = f.DEFAULT_EDGE_LENGTH = 50 : l.DEFAULT_EDGE_LENGTH = f.DEFAULT_EDGE_LENGTH = y.idealEdgeLength, l.MIN_REPULSION_DIST = f.MIN_REPULSION_DIST = f.DEFAULT_EDGE_LENGTH / 10, l.DEFAULT_RADIAL_SEPARATION = f.DEFAULT_EDGE_LENGTH);
                        }, "processEdges"), O = /*#__PURE__*/ m$1(function(I, Z) {
                            Z.fixedNodeConstraint && (I.constraints.fixedNodeConstraint = Z.fixedNodeConstraint), Z.alignmentConstraint && (I.constraints.alignmentConstraint = Z.alignmentConstraint), Z.relativePlacementConstraint && (I.constraints.relativePlacementConstraint = Z.relativePlacementConstraint);
                        }, "processConstraints");
                        y.nestingFactor != null && (l.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = f.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = y.nestingFactor), y.gravity != null && (l.DEFAULT_GRAVITY_STRENGTH = f.DEFAULT_GRAVITY_STRENGTH = y.gravity), y.numIter != null && (l.MAX_ITERATIONS = f.MAX_ITERATIONS = y.numIter), y.gravityRange != null && (l.DEFAULT_GRAVITY_RANGE_FACTOR = f.DEFAULT_GRAVITY_RANGE_FACTOR = y.gravityRange), y.gravityCompound != null && (l.DEFAULT_COMPOUND_GRAVITY_STRENGTH = f.DEFAULT_COMPOUND_GRAVITY_STRENGTH = y.gravityCompound), y.gravityRangeCompound != null && (l.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = f.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = y.gravityRangeCompound), y.initialEnergyOnIncremental != null && (l.DEFAULT_COOLING_FACTOR_INCREMENTAL = f.DEFAULT_COOLING_FACTOR_INCREMENTAL = y.initialEnergyOnIncremental), y.tilingCompareBy != null && (l.TILING_COMPARE_BY = y.tilingCompareBy), y.quality == "proof" ? o.QUALITY = 2 : o.QUALITY = 0, l.NODE_DIMENSIONS_INCLUDE_LABELS = f.NODE_DIMENSIONS_INCLUDE_LABELS = o.NODE_DIMENSIONS_INCLUDE_LABELS = y.nodeDimensionsIncludeLabels, l.DEFAULT_INCREMENTAL = f.DEFAULT_INCREMENTAL = o.DEFAULT_INCREMENTAL = !y.randomize, l.ANIMATE = f.ANIMATE = o.ANIMATE = y.animate, l.TILE = y.tile, l.TILING_PADDING_VERTICAL = typeof y.tilingPaddingVertical == "function" ? y.tilingPaddingVertical.call() : y.tilingPaddingVertical, l.TILING_PADDING_HORIZONTAL = typeof y.tilingPaddingHorizontal == "function" ? y.tilingPaddingHorizontal.call() : y.tilingPaddingHorizontal, l.DEFAULT_INCREMENTAL = f.DEFAULT_INCREMENTAL = o.DEFAULT_INCREMENTAL = true, l.PURE_INCREMENTAL = !y.randomize, o.DEFAULT_UNIFORM_LEAF_NODE_SIZES = y.uniformNodeDimensions, y.step == "transformed" && (l.TRANSFORM_ON_CONSTRAINT_HANDLING = true, l.ENFORCE_CONSTRAINTS = false, l.APPLY_LAYOUT = false), y.step == "enforced" && (l.TRANSFORM_ON_CONSTRAINT_HANDLING = false, l.ENFORCE_CONSTRAINTS = true, l.APPLY_LAYOUT = false), y.step == "cose" && (l.TRANSFORM_ON_CONSTRAINT_HANDLING = false, l.ENFORCE_CONSTRAINTS = false, l.APPLY_LAYOUT = true), y.step == "all" && (y.randomize ? l.TRANSFORM_ON_CONSTRAINT_HANDLING = true : l.TRANSFORM_ON_CONSTRAINT_HANDLING = false, l.ENFORCE_CONSTRAINTS = true, l.APPLY_LAYOUT = true), y.fixedNodeConstraint || y.alignmentConstraint || y.relativePlacementConstraint ? l.TREE_REDUCTION_ON_INCREMENTAL = false : l.TREE_REDUCTION_ON_INCREMENTAL = true;
                        var x = new t, G = /*#__PURE__*/ x.newGraphManager();
                        return T(/*#__PURE__*/ G.addRoot(), /*#__PURE__*/ c.getTopMostNodes(b), x, y), p(x, G, z), O(x, y), x.runLayout(), J;
                    }, "coseLayout");
                    n.exports = {
                        coseLayout: A
                    };
                },
                212: (n, i, a)=>{
                    var c = /*#__PURE__*/ function() {
                        function y(D, S) {
                            for(var C = 0; C < S.length; C++){
                                var b = S[C];
                                b.enumerable = b.enumerable || false, b.configurable = true, "value" in b && (b.writable = true), Object.defineProperty(D, b.key, b);
                            }
                        }
                        return m$1(y, "defineProperties"), function(D, S, C) {
                            return S && y(D.prototype, S), C && y(D, C), D;
                        };
                    }();
                    function t(y, D) {
                        if (!(y instanceof D)) throw new TypeError("Cannot call a class as a function");
                    }
                    m$1(t, "_classCallCheck");
                    var u = /*#__PURE__*/ a(658), r = /*#__PURE__*/ a(548), e = /*#__PURE__*/ a(657), o = e.spectralLayout, f = /*#__PURE__*/ a(816), l = f.coseLayout, A = /*#__PURE__*/ Object.freeze({
                        quality: "default",
                        randomize: true,
                        animate: true,
                        animationDuration: 1e3,
                        animationEasing: void 0,
                        fit: true,
                        padding: 30,
                        nodeDimensionsIncludeLabels: false,
                        uniformNodeDimensions: false,
                        packComponents: true,
                        step: "all",
                        samplingType: true,
                        sampleSize: 25,
                        nodeSeparation: 75,
                        piTol: 1e-7,
                        nodeRepulsion: /*#__PURE__*/ m$1(function(D) {
                            return 4500;
                        }, "nodeRepulsion"),
                        idealEdgeLength: /*#__PURE__*/ m$1(function(D) {
                            return 50;
                        }, "idealEdgeLength"),
                        edgeElasticity: /*#__PURE__*/ m$1(function(D) {
                            return .45;
                        }, "edgeElasticity"),
                        nestingFactor: .1,
                        gravity: .25,
                        numIter: 2500,
                        tile: true,
                        tilingCompareBy: void 0,
                        tilingPaddingVertical: 10,
                        tilingPaddingHorizontal: 10,
                        gravityRangeCompound: 1.5,
                        gravityCompound: 1,
                        gravityRange: 3.8,
                        initialEnergyOnIncremental: .3,
                        fixedNodeConstraint: void 0,
                        alignmentConstraint: void 0,
                        relativePlacementConstraint: void 0,
                        ready: /*#__PURE__*/ m$1(function() {}, "ready"),
                        stop: /*#__PURE__*/ m$1(function() {}, "stop")
                    }), v = /*#__PURE__*/ function() {
                        function y(D) {
                            t(this, y), this.options = /*#__PURE__*/ u({}, A, D);
                        }
                        return m$1(y, "Layout"), c(y, [
                            {
                                key: "run",
                                value: /*#__PURE__*/ m$1(function() {
                                    var S = this, C = this.options, b = C.cy, z = C.eles, X = [], J = [], h = void 0, m = [];
                                    C.fixedNodeConstraint && (!Array.isArray(C.fixedNodeConstraint) || C.fixedNodeConstraint.length == 0) && (C.fixedNodeConstraint = void 0), C.alignmentConstraint && (C.alignmentConstraint.vertical && (!Array.isArray(C.alignmentConstraint.vertical) || C.alignmentConstraint.vertical.length == 0) && (C.alignmentConstraint.vertical = void 0), C.alignmentConstraint.horizontal && (!Array.isArray(C.alignmentConstraint.horizontal) || C.alignmentConstraint.horizontal.length == 0) && (C.alignmentConstraint.horizontal = void 0)), C.relativePlacementConstraint && (!Array.isArray(C.relativePlacementConstraint) || C.relativePlacementConstraint.length == 0) && (C.relativePlacementConstraint = void 0);
                                    var d = C.fixedNodeConstraint || C.alignmentConstraint || C.relativePlacementConstraint;
                                    d && (C.tile = false, C.packComponents = false);
                                    var T = void 0, p = false;
                                    if (b.layoutUtilities && C.packComponents && (T = /*#__PURE__*/ b.layoutUtilities("get"), T || (T = /*#__PURE__*/ b.layoutUtilities()), p = true), z.nodes().length > 0) if (p) {
                                        var G = /*#__PURE__*/ r.getTopMostNodes(/*#__PURE__*/ C.eles.nodes());
                                        if (h = /*#__PURE__*/ r.connectComponents(b, C.eles, G), h.forEach(function(ot) {
                                            var rt = /*#__PURE__*/ ot.boundingBox();
                                            m.push({
                                                x: rt.x1 + rt.w / 2,
                                                y: rt.y1 + rt.h / 2
                                            });
                                        }), C.randomize && h.forEach(function(ot) {
                                            C.eles = ot, X.push(/*#__PURE__*/ o(C));
                                        }), C.quality == "default" || C.quality == "proof") {
                                            var F = /*#__PURE__*/ b.collection();
                                            if (C.tile) {
                                                var I = new Map, Z = [], et = [], P = 0, tt = {
                                                    nodeIndexes: I,
                                                    xCoords: Z,
                                                    yCoords: et
                                                }, B = [];
                                                if (h.forEach(function(ot, rt) {
                                                    ot.edges().length == 0 && (ot.nodes().forEach(function(yt, Et) {
                                                        F.merge(ot.nodes()[Et]), yt.isParent() || (tt.nodeIndexes.set(/*#__PURE__*/ ot.nodes()[Et].id(), P++), tt.xCoords.push(ot.nodes()[0].position().x), tt.yCoords.push(ot.nodes()[0].position().y));
                                                    }), B.push(rt));
                                                }), F.length > 1) {
                                                    var M = /*#__PURE__*/ F.boundingBox();
                                                    m.push({
                                                        x: M.x1 + M.w / 2,
                                                        y: M.y1 + M.h / 2
                                                    }), h.push(F), X.push(tt);
                                                    for(var U = B.length - 1; U >= 0; U--)h.splice(B[U], 1), X.splice(B[U], 1), m.splice(B[U], 1);
                                                }
                                            }
                                            h.forEach(function(ot, rt) {
                                                C.eles = ot, J.push(/*#__PURE__*/ l(C, X[rt])), r.relocateComponent(m[rt], J[rt], C);
                                            });
                                        } else h.forEach(function(ot, rt) {
                                            r.relocateComponent(m[rt], X[rt], C);
                                        });
                                        var H = new Set;
                                        if (h.length > 1) {
                                            var j = [], ht = /*#__PURE__*/ z.filter(function(ot) {
                                                return ot.css("display") == "none";
                                            });
                                            h.forEach(function(ot, rt) {
                                                var yt = void 0;
                                                if (C.quality == "draft" && (yt = X[rt].nodeIndexes), ot.nodes().not(ht).length > 0) {
                                                    var Et = {};
                                                    Et.edges = [], Et.nodes = [];
                                                    var Dt = void 0;
                                                    ot.nodes().not(ht).forEach(function(Tt) {
                                                        if (C.quality == "draft") if (!Tt.isParent()) Dt = /*#__PURE__*/ yt.get(/*#__PURE__*/ Tt.id()), Et.nodes.push({
                                                            x: X[rt].xCoords[Dt] - Tt.boundingbox().w / 2,
                                                            y: X[rt].yCoords[Dt] - Tt.boundingbox().h / 2,
                                                            width: Tt.boundingbox().w,
                                                            height: Tt.boundingbox().h
                                                        });
                                                        else {
                                                            var At = /*#__PURE__*/ r.calcBoundingBox(Tt, X[rt].xCoords, X[rt].yCoords, yt);
                                                            Et.nodes.push({
                                                                x: At.topLeftX,
                                                                y: At.topLeftY,
                                                                width: At.width,
                                                                height: At.height
                                                            });
                                                        }
                                                        else J[rt][Tt.id()] && Et.nodes.push({
                                                            x: /*#__PURE__*/ J[rt][Tt.id()].getLeft(),
                                                            y: /*#__PURE__*/ J[rt][Tt.id()].getTop(),
                                                            width: /*#__PURE__*/ J[rt][Tt.id()].getWidth(),
                                                            height: /*#__PURE__*/ J[rt][Tt.id()].getHeight()
                                                        });
                                                    }), ot.edges().forEach(function(Tt) {
                                                        var At = /*#__PURE__*/ Tt.source(), xt = /*#__PURE__*/ Tt.target();
                                                        if (At.css("display") != "none" && xt.css("display") != "none") if (C.quality == "draft") {
                                                            var It = /*#__PURE__*/ yt.get(/*#__PURE__*/ At.id()), zt = /*#__PURE__*/ yt.get(/*#__PURE__*/ xt.id()), Yt = [], Ht = [];
                                                            if (At.isParent()) {
                                                                var Pt = /*#__PURE__*/ r.calcBoundingBox(At, X[rt].xCoords, X[rt].yCoords, yt);
                                                                Yt.push(Pt.topLeftX + Pt.width / 2), Yt.push(Pt.topLeftY + Pt.height / 2);
                                                            } else Yt.push(X[rt].xCoords[It]), Yt.push(X[rt].yCoords[It]);
                                                            if (xt.isParent()) {
                                                                var Y = /*#__PURE__*/ r.calcBoundingBox(xt, X[rt].xCoords, X[rt].yCoords, yt);
                                                                Ht.push(Y.topLeftX + Y.width / 2), Ht.push(Y.topLeftY + Y.height / 2);
                                                            } else Ht.push(X[rt].xCoords[zt]), Ht.push(X[rt].yCoords[zt]);
                                                            Et.edges.push({
                                                                startX: Yt[0],
                                                                startY: Yt[1],
                                                                endX: Ht[0],
                                                                endY: Ht[1]
                                                            });
                                                        } else J[rt][At.id()] && J[rt][xt.id()] && Et.edges.push({
                                                            startX: /*#__PURE__*/ J[rt][At.id()].getCenterX(),
                                                            startY: /*#__PURE__*/ J[rt][At.id()].getCenterY(),
                                                            endX: /*#__PURE__*/ J[rt][xt.id()].getCenterX(),
                                                            endY: /*#__PURE__*/ J[rt][xt.id()].getCenterY()
                                                        });
                                                    }), Et.nodes.length > 0 && (j.push(Et), H.add(rt));
                                                }
                                            });
                                            var Lt = T.packComponents(j, C.randomize).shifts;
                                            if (C.quality == "draft") X.forEach(function(ot, rt) {
                                                var yt = /*#__PURE__*/ ot.xCoords.map(function(Dt) {
                                                    return Dt + Lt[rt].dx;
                                                }), Et = /*#__PURE__*/ ot.yCoords.map(function(Dt) {
                                                    return Dt + Lt[rt].dy;
                                                });
                                                ot.xCoords = yt, ot.yCoords = Et;
                                            });
                                            else {
                                                var bt = 0;
                                                H.forEach(function(ot) {
                                                    Object.keys(J[ot]).forEach(function(rt) {
                                                        var yt = J[ot][rt];
                                                        yt.setCenter(yt.getCenterX() + Lt[bt].dx, yt.getCenterY() + Lt[bt].dy);
                                                    }), bt++;
                                                });
                                            }
                                        }
                                    } else {
                                        var O = /*#__PURE__*/ C.eles.boundingBox();
                                        if (m.push({
                                            x: O.x1 + O.w / 2,
                                            y: O.y1 + O.h / 2
                                        }), C.randomize) {
                                            var x = /*#__PURE__*/ o(C);
                                            X.push(x);
                                        }
                                        C.quality == "default" || C.quality == "proof" ? (J.push(/*#__PURE__*/ l(C, X[0])), r.relocateComponent(m[0], J[0], C)) : r.relocateComponent(m[0], X[0], C);
                                    }
                                    var Q = /*#__PURE__*/ m$1(function(rt, yt) {
                                        if (C.quality == "default" || C.quality == "proof") {
                                            typeof rt == "number" && (rt = yt);
                                            var Et = void 0, Dt = void 0, Tt = /*#__PURE__*/ rt.data("id");
                                            return J.forEach(function(xt) {
                                                Tt in xt && (Et = {
                                                    x: /*#__PURE__*/ xt[Tt].getRect().getCenterX(),
                                                    y: /*#__PURE__*/ xt[Tt].getRect().getCenterY()
                                                }, Dt = xt[Tt]);
                                            }), C.nodeDimensionsIncludeLabels && (Dt.labelWidth && (Dt.labelPosHorizontal == "left" ? Et.x += Dt.labelWidth / 2 : Dt.labelPosHorizontal == "right" && (Et.x -= Dt.labelWidth / 2)), Dt.labelHeight && (Dt.labelPosVertical == "top" ? Et.y += Dt.labelHeight / 2 : Dt.labelPosVertical == "bottom" && (Et.y -= Dt.labelHeight / 2))), Et == null && (Et = {
                                                x: /*#__PURE__*/ rt.position("x"),
                                                y: /*#__PURE__*/ rt.position("y")
                                            }), {
                                                x: Et.x,
                                                y: Et.y
                                            };
                                        } else {
                                            var At = void 0;
                                            return X.forEach(function(xt) {
                                                var It = /*#__PURE__*/ xt.nodeIndexes.get(/*#__PURE__*/ rt.id());
                                                It != null && (At = {
                                                    x: xt.xCoords[It],
                                                    y: xt.yCoords[It]
                                                });
                                            }), At == null && (At = {
                                                x: /*#__PURE__*/ rt.position("x"),
                                                y: /*#__PURE__*/ rt.position("y")
                                            }), {
                                                x: At.x,
                                                y: At.y
                                            };
                                        }
                                    }, "getPositions");
                                    if (C.quality == "default" || C.quality == "proof" || C.randomize) {
                                        var Xt = /*#__PURE__*/ r.calcParentsWithoutChildren(b, z), wt = /*#__PURE__*/ z.filter(function(ot) {
                                            return ot.css("display") == "none";
                                        });
                                        C.eles = /*#__PURE__*/ z.not(wt), z.nodes().not(":parent").not(wt).layoutPositions(S, C, Q), Xt.length > 0 && Xt.forEach(function(ot) {
                                            ot.position(/*#__PURE__*/ Q(ot));
                                        });
                                    } else console.log("If randomize option is set to false, then quality option must be 'default' or 'proof'.");
                                }, "run")
                            }
                        ]), y;
                    }();
                    n.exports = v;
                },
                657: (n, i, a)=>{
                    var c = /*#__PURE__*/ a(548), t = a(140).layoutBase.Matrix, u = a(140).layoutBase.SVD, r = /*#__PURE__*/ m$1(function(o) {
                        var f = o.cy, l = o.eles, A = /*#__PURE__*/ l.nodes(), v = /*#__PURE__*/ l.nodes(":parent"), y = new Map, D = new Map, S = new Map, C = [], b = [], z = [], X = [], K = [], R = [], J = [], h = [], d = void 0, T = 1e8, p = 1e-9, O = o.piTol, x = o.samplingType, G = o.nodeSeparation, F = void 0, I = /*#__PURE__*/ m$1(function() {
                            for(var V = 0, $ = 0, k = false; $ < F;){
                                V = /*#__PURE__*/ Math.floor(Math.random() * d), k = false;
                                for(var _ = 0; _ < $; _++)if (X[_] == V) {
                                    k = true;
                                    break;
                                }
                                if (!k) X[$] = V, $++;
                                else continue;
                            }
                        }, "randomSampleCR"), Z = /*#__PURE__*/ m$1(function(V, $, k) {
                            for(var _ = [], gt = 0, ft = 0, q = 0, lt = void 0, ut = [], it = 0, pt = 1, Ct = 0; Ct < d; Ct++)ut[Ct] = T;
                            for(_[ft] = V, ut[V] = 0; ft >= gt;){
                                q = _[gt++];
                                for(var st = C[q], nt = 0; nt < st.length; nt++)lt = /*#__PURE__*/ D.get(st[nt]), ut[lt] == T && (ut[lt] = ut[q] + 1, _[++ft] = lt);
                                R[q][$] = ut[q] * G;
                            }
                            if (k) {
                                for(var dt = 0; dt < d; dt++)R[dt][$] < K[dt] && (K[dt] = R[dt][$]);
                                for(var at = 0; at < d; at++)K[at] > it && (it = K[at], pt = at);
                            }
                            return pt;
                        }, "BFS"), et = /*#__PURE__*/ m$1(function(V) {
                            var $ = void 0;
                            if (V) {
                                $ = /*#__PURE__*/ Math.floor(Math.random() * d);
                                for(var _ = 0; _ < d; _++)K[_] = T;
                                for(var gt = 0; gt < F; gt++)X[gt] = $, $ = /*#__PURE__*/ Z($, gt, V);
                            } else {
                                I();
                                for(var k = 0; k < F; k++)Z(X[k], k, V, false);
                            }
                            for(var ft = 0; ft < d; ft++)for(var q = 0; q < F; q++)R[ft][q] *= R[ft][q];
                            for(var lt = 0; lt < F; lt++)J[lt] = [];
                            for(var ut = 0; ut < F; ut++)for(var it = 0; it < F; it++)J[ut][it] = R[X[it]][ut];
                        }, "allBFS"), P = /*#__PURE__*/ m$1(function() {
                            for(var V = /*#__PURE__*/ u.svd(J), $ = V.S, k = V.U, _ = V.V, gt = $[0] * $[0] * $[0], ft = [], q = 0; q < F; q++){
                                ft[q] = [];
                                for(var lt = 0; lt < F; lt++)ft[q][lt] = 0, q == lt && (ft[q][lt] = $[q] / ($[q] * $[q] + gt / ($[q] * $[q])));
                            }
                            h = /*#__PURE__*/ t.multMat(/*#__PURE__*/ t.multMat(_, ft), /*#__PURE__*/ t.transpose(k));
                        }, "sample"), tt = /*#__PURE__*/ m$1(function() {
                            for(var V = void 0, $ = void 0, k = [], _ = [], gt = [], ft = [], q = 0; q < d; q++)k[q] = /*#__PURE__*/ Math.random(), _[q] = /*#__PURE__*/ Math.random();
                            k = /*#__PURE__*/ t.normalize(k), _ = /*#__PURE__*/ t.normalize(_);
                            for(var lt = 0, ut = p, it = p, pt = void 0;;){
                                lt++;
                                for(var Ct = 0; Ct < d; Ct++)gt[Ct] = k[Ct];
                                if (k = /*#__PURE__*/ t.multGamma(/*#__PURE__*/ t.multL(/*#__PURE__*/ t.multGamma(gt), R, h)), V = /*#__PURE__*/ t.dotProduct(gt, k), k = /*#__PURE__*/ t.normalize(k), ut = /*#__PURE__*/ t.dotProduct(gt, k), pt = /*#__PURE__*/ Math.abs(ut / it), pt <= 1 + O && pt >= 1) break;
                                it = ut;
                            }
                            for(var st = 0; st < d; st++)gt[st] = k[st];
                            for(lt = 0, it = p;;){
                                lt++;
                                for(var nt = 0; nt < d; nt++)ft[nt] = _[nt];
                                if (ft = /*#__PURE__*/ t.minusOp(ft, /*#__PURE__*/ t.multCons(gt, /*#__PURE__*/ t.dotProduct(gt, ft))), _ = /*#__PURE__*/ t.multGamma(/*#__PURE__*/ t.multL(/*#__PURE__*/ t.multGamma(ft), R, h)), $ = /*#__PURE__*/ t.dotProduct(ft, _), _ = /*#__PURE__*/ t.normalize(_), ut = /*#__PURE__*/ t.dotProduct(ft, _), pt = /*#__PURE__*/ Math.abs(ut / it), pt <= 1 + O && pt >= 1) break;
                                it = ut;
                            }
                            for(var dt = 0; dt < d; dt++)ft[dt] = _[dt];
                            b = /*#__PURE__*/ t.multCons(gt, /*#__PURE__*/ Math.sqrt(/*#__PURE__*/ Math.abs(V))), z = /*#__PURE__*/ t.multCons(ft, /*#__PURE__*/ Math.sqrt(/*#__PURE__*/ Math.abs($)));
                        }, "powerIteration");
                        c.connectComponents(f, l, /*#__PURE__*/ c.getTopMostNodes(A), y), v.forEach(function(W) {
                            c.connectComponents(f, l, /*#__PURE__*/ c.getTopMostNodes(/*#__PURE__*/ W.descendants().intersection(l)), y);
                        });
                        for(var B = 0, M = 0; M < A.length; M++)A[M].isParent() || D.set(/*#__PURE__*/ A[M].id(), B++);
                        var U = true, H = false, j = void 0;
                        try {
                            for(var ht = /*#__PURE__*/ y.keys()[Symbol.iterator](), Lt; !(U = (Lt = /*#__PURE__*/ ht.next()).done); U = !0){
                                var bt = Lt.value;
                                D.set(bt, B++);
                            }
                        } catch (W) {
                            H = true, j = W;
                        } finally{
                            try {
                                !U && ht.return && ht.return();
                            } finally{
                                if (H) throw j;
                            }
                        }
                        for(var Q = 0; Q < D.size; Q++)C[Q] = [];
                        v.forEach(function(W) {
                            for(var V = /*#__PURE__*/ W.children().intersection(l); V.nodes(":childless").length == 0;)V = /*#__PURE__*/ V.nodes()[0].children().intersection(l);
                            var $ = 0, k = V.nodes(":childless")[0].connectedEdges().length;
                            V.nodes(":childless").forEach(function(_, gt) {
                                _.connectedEdges().length < k && (k = _.connectedEdges().length, $ = gt);
                            }), S.set(/*#__PURE__*/ W.id(), /*#__PURE__*/ V.nodes(":childless")[$].id());
                        }), A.forEach(function(W) {
                            var V = void 0;
                            W.isParent() ? V = /*#__PURE__*/ D.get(/*#__PURE__*/ S.get(/*#__PURE__*/ W.id())) : V = /*#__PURE__*/ D.get(/*#__PURE__*/ W.id()), W.neighborhood().nodes().forEach(function($) {
                                l.intersection(/*#__PURE__*/ W.edgesWith($)).length > 0 && ($.isParent() ? C[V].push(/*#__PURE__*/ S.get(/*#__PURE__*/ $.id())) : C[V].push(/*#__PURE__*/ $.id()));
                            });
                        });
                        var Xt = /*#__PURE__*/ m$1(function(V) {
                            var $ = /*#__PURE__*/ D.get(V), k = void 0;
                            y.get(V).forEach(function(_) {
                                f.getElementById(_).isParent() ? k = /*#__PURE__*/ S.get(_) : k = _, C[$].push(k), C[D.get(k)].push(V);
                            });
                        }, "_loop"), wt = true, ot = false, rt = void 0;
                        try {
                            for(var yt = /*#__PURE__*/ y.keys()[Symbol.iterator](), Et; !(wt = (Et = /*#__PURE__*/ yt.next()).done); wt = !0){
                                var Dt = Et.value;
                                Xt(Dt);
                            }
                        } catch (W) {
                            ot = true, rt = W;
                        } finally{
                            try {
                                !wt && yt.return && yt.return();
                            } finally{
                                if (ot) throw rt;
                            }
                        }
                        d = D.size;
                        var Tt = void 0;
                        if (d > 2) {
                            F = d < o.sampleSize ? d : o.sampleSize;
                            for(var At = 0; At < d; At++)R[At] = [];
                            for(var xt = 0; xt < F; xt++)h[xt] = [];
                            return o.quality == "draft" || o.step == "all" ? (et(x), P(), tt(), Tt = {
                                nodeIndexes: D,
                                xCoords: b,
                                yCoords: z
                            }) : (D.forEach(function(W, V) {
                                b.push(/*#__PURE__*/ f.getElementById(V).position("x")), z.push(/*#__PURE__*/ f.getElementById(V).position("y"));
                            }), Tt = {
                                nodeIndexes: D,
                                xCoords: b,
                                yCoords: z
                            }), Tt;
                        } else {
                            var It = /*#__PURE__*/ D.keys(), zt = /*#__PURE__*/ f.getElementById(It.next().value), Yt = /*#__PURE__*/ zt.position(), Ht = /*#__PURE__*/ zt.outerWidth();
                            if (b.push(Yt.x), z.push(Yt.y), d == 2) {
                                var Pt = /*#__PURE__*/ f.getElementById(It.next().value), Y = /*#__PURE__*/ Pt.outerWidth();
                                b.push(Yt.x + Ht / 2 + Y / 2 + o.idealEdgeLength), z.push(Yt.y);
                            }
                            return Tt = {
                                nodeIndexes: D,
                                xCoords: b,
                                yCoords: z
                            }, Tt;
                        }
                    }, "spectralLayout");
                    n.exports = {
                        spectralLayout: r
                    };
                },
                579: (n, i, a)=>{
                    var c = /*#__PURE__*/ a(212), t = /*#__PURE__*/ m$1(function(r) {
                        r && r("layout", "fcose", c);
                    }, "register");
                    typeof cytoscape < "u" && t(cytoscape), n.exports = t;
                },
                140: (n)=>{
                    n.exports = E;
                }
            }, N = {};
            function g(n) {
                var i = N[n];
                if (i !== void 0) return i.exports;
                var a = N[n] = {
                    exports: {}
                };
                return w[n](a, a.exports, g), a.exports;
            }
            m$1(g, "__webpack_require__");
            var s = /*#__PURE__*/ g(579);
            return s;
        })();
    });
});
var Ce = {
    L: "left",
    R: "right",
    T: "top",
    B: "bottom"
}, Me = {
    L: /*#__PURE__*/ m$1((E)=>`${E},${E / 2} 0,${E} 0,0`, "L"),
    R: /*#__PURE__*/ m$1((E)=>`0,${E / 2} ${E},0 ${E},${E}`, "R"),
    T: /*#__PURE__*/ m$1((E)=>`0,0 ${E},0 ${E / 2},${E}`, "T"),
    B: /*#__PURE__*/ m$1((E)=>`${E / 2},0 ${E},${E} 0,${E}`, "B")
}, oe = {
    L: /*#__PURE__*/ m$1((E, w)=>E - w + 2, "L"),
    R: /*#__PURE__*/ m$1((E, w)=>E - 2, "R"),
    T: /*#__PURE__*/ m$1((E, w)=>E - w + 2, "T"),
    B: /*#__PURE__*/ m$1((E, w)=>E - 2, "B")
}, ir = /*#__PURE__*/ m$1(function(E) {
    return Vt(E) ? E === "L" ? "R" : "L" : E === "T" ? "B" : "T";
}, "getOppositeArchitectureDirection"), we = /*#__PURE__*/ m$1(function(E) {
    let w = E;
    return w === "L" || w === "R" || w === "T" || w === "B";
}, "isArchitectureDirection"), Vt = /*#__PURE__*/ m$1(function(E) {
    let w = E;
    return w === "L" || w === "R";
}, "isArchitectureDirectionX"), Jt = /*#__PURE__*/ m$1(function(E) {
    let w = E;
    return w === "T" || w === "B";
}, "isArchitectureDirectionY"), se = /*#__PURE__*/ m$1(function(E, w) {
    let N = Vt(E) && Jt(w), g = Jt(E) && Vt(w);
    return N || g;
}, "isArchitectureDirectionXY"), nr = /*#__PURE__*/ m$1(function(E) {
    let w = E[0], N = E[1], g = Vt(w) && Jt(N), s = Jt(w) && Vt(N);
    return g || s;
}, "isArchitecturePairXY"), Lr = /*#__PURE__*/ m$1(function(E) {
    return E !== "LL" && E !== "RR" && E !== "TT" && E !== "BB";
}, "isValidArchitectureDirectionPair"), he = /*#__PURE__*/ m$1(function(E, w) {
    let N = `${E}${w}`;
    return Lr(N) ? N : void 0;
}, "getArchitectureDirectionPair"), ar = /*#__PURE__*/ m$1(function(param, N) {
    let [E, w] = param;
    let g = N[0], s = N[1];
    return Vt(g) ? Jt(s) ? [
        E + (g === "L" ? -1 : 1),
        w + (s === "T" ? 1 : -1)
    ] : [
        E + (g === "L" ? -1 : 1),
        w
    ] : Vt(s) ? [
        E + (s === "L" ? 1 : -1),
        w + (g === "T" ? 1 : -1)
    ] : [
        E,
        w + (g === "T" ? 1 : -1)
    ];
}, "shiftPositionByArchitectureDirectionPair"), or = /*#__PURE__*/ m$1(function(E) {
    return E === "LT" || E === "TL" ? [
        1,
        1
    ] : E === "BL" || E === "LB" ? [
        1,
        -1
    ] : E === "BR" || E === "RB" ? [
        -1,
        -1
    ] : [
        -1,
        1
    ];
}, "getArchitectureDirectionXYFactors"), sr = /*#__PURE__*/ m$1(function(E, w) {
    return se(E, w) ? "bend" : Vt(E) ? "horizontal" : "vertical";
}, "getArchitectureDirectionAlignment"), hr = /*#__PURE__*/ m$1(function(E) {
    return E.type === "service";
}, "isArchitectureService"), lr = /*#__PURE__*/ m$1(function(E) {
    return E.type === "junction";
}, "isArchitectureJunction"), ye = /*#__PURE__*/ m$1((E)=>E.data(), "edgeData"), Qt = /*#__PURE__*/ m$1((E)=>E.data(), "nodeData");
var cr = pl.architecture, vt = new s(()=>({
        nodes: {},
        groups: {},
        edges: [],
        registeredIds: {},
        config: cr,
        dataStructures: void 0,
        elements: {}
    })), Dr = /*#__PURE__*/ m$1(()=>{
    vt.reset(), Sf();
}, "clear"), Cr = /*#__PURE__*/ m$1(function(param) {
    let { id: E, icon: w, in: N, title: g, iconText: s } = param;
    if (vt.records.registeredIds[E] !== void 0) throw new Error(`The service id [${E}] is already in use by another ${vt.records.registeredIds[E]}`);
    if (N !== void 0) {
        if (E === N) throw new Error(`The service [${E}] cannot be placed within itself`);
        if (vt.records.registeredIds[N] === void 0) throw new Error(`The service [${E}]'s parent does not exist. Please make sure the parent is created before this service`);
        if (vt.records.registeredIds[N] === "node") throw new Error(`The service [${E}]'s parent is not a group`);
    }
    vt.records.registeredIds[E] = "node", vt.records.nodes[E] = {
        id: E,
        type: "service",
        icon: w,
        iconText: s,
        title: g,
        edges: [],
        in: N
    };
}, "addService"), Mr = /*#__PURE__*/ m$1(()=>Object.values(vt.records.nodes).filter(hr), "getServices"), wr = /*#__PURE__*/ m$1(function(param) {
    let { id: E, in: w } = param;
    vt.records.registeredIds[E] = "node", vt.records.nodes[E] = {
        id: E,
        type: "junction",
        edges: [],
        in: w
    };
}, "addJunction"), xr = /*#__PURE__*/ m$1(()=>Object.values(vt.records.nodes).filter(lr), "getJunctions"), Or = /*#__PURE__*/ m$1(()=>Object.values(vt.records.nodes), "getNodes"), xe = /*#__PURE__*/ m$1((E)=>vt.records.nodes[E], "getNode"), Rr = /*#__PURE__*/ m$1(function(param) {
    let { id: E, icon: w, in: N, title: g } = param;
    if (vt.records.registeredIds[E] !== void 0) throw new Error(`The group id [${E}] is already in use by another ${vt.records.registeredIds[E]}`);
    if (N !== void 0) {
        if (E === N) throw new Error(`The group [${E}] cannot be placed within itself`);
        if (vt.records.registeredIds[N] === void 0) throw new Error(`The group [${E}]'s parent does not exist. Please make sure the parent is created before this group`);
        if (vt.records.registeredIds[N] === "node") throw new Error(`The group [${E}]'s parent is not a group`);
    }
    vt.records.registeredIds[E] = "group", vt.records.groups[E] = {
        id: E,
        icon: w,
        title: g,
        in: N
    };
}, "addGroup"), Ir = /*#__PURE__*/ m$1(()=>Object.values(vt.records.groups), "getGroups"), Sr = /*#__PURE__*/ m$1(function(param) {
    let { lhsId: E, rhsId: w, lhsDir: N, rhsDir: g, lhsInto: s, rhsInto: n, lhsGroup: i, rhsGroup: a, title: c } = param;
    if (!we(N)) throw new Error(`Invalid direction given for left hand side of edge ${E}--${w}. Expected (L,R,T,B) got ${N}`);
    if (!we(g)) throw new Error(`Invalid direction given for right hand side of edge ${E}--${w}. Expected (L,R,T,B) got ${g}`);
    if (vt.records.nodes[E] === void 0 && vt.records.groups[E] === void 0) throw new Error(`The left-hand id [${E}] does not yet exist. Please create the service/group before declaring an edge to it.`);
    if (vt.records.nodes[w] === void 0 && vt.records.groups[E] === void 0) throw new Error(`The right-hand id [${w}] does not yet exist. Please create the service/group before declaring an edge to it.`);
    let t = vt.records.nodes[E].in, u = vt.records.nodes[w].in;
    if (i && t && u && t == u) throw new Error(`The left-hand id [${E}] is modified to traverse the group boundary, but the edge does not pass through two groups.`);
    if (a && t && u && t == u) throw new Error(`The right-hand id [${w}] is modified to traverse the group boundary, but the edge does not pass through two groups.`);
    let r = {
        lhsId: E,
        lhsDir: N,
        lhsInto: s,
        lhsGroup: i,
        rhsId: w,
        rhsDir: g,
        rhsInto: n,
        rhsGroup: a,
        title: c
    };
    vt.records.edges.push(r), vt.records.nodes[E] && vt.records.nodes[w] && (vt.records.nodes[E].edges.push(vt.records.edges[vt.records.edges.length - 1]), vt.records.nodes[w].edges.push(vt.records.edges[vt.records.edges.length - 1]));
}, "addEdge"), br = /*#__PURE__*/ m$1(()=>vt.records.edges, "getEdges"), Fr = /*#__PURE__*/ m$1(()=>{
    if (vt.records.dataStructures === void 0) {
        let E = {}, w = /*#__PURE__*/ Object.entries(vt.records.nodes).reduce((a, param)=>{
            let [c, t] = param;
            return a[c] = /*#__PURE__*/ t.edges.reduce((u, r)=>{
                let e = xe(r.lhsId)?.in, o = xe(r.rhsId)?.in;
                if (e && o && e !== o) {
                    let f = /*#__PURE__*/ sr(r.lhsDir, r.rhsDir);
                    f !== "bend" && (E[e] ??= {}, E[e][o] = f, E[o] ??= {}, E[o][e] = f);
                }
                if (r.lhsId === c) {
                    let f = /*#__PURE__*/ he(r.lhsDir, r.rhsDir);
                    f && (u[f] = r.rhsId);
                } else {
                    let f = /*#__PURE__*/ he(r.rhsDir, r.lhsDir);
                    f && (u[f] = r.lhsId);
                }
                return u;
            }, {}), a;
        }, {}), N = Object.keys(w)[0], g = {
            [N]: 1
        }, s = /*#__PURE__*/ Object.keys(w).reduce((a, c)=>c === N ? a : {
                ...a,
                [c]: 1
            }, {}), n = /*#__PURE__*/ m$1((a)=>{
            let c = {
                [a]: [
                    0,
                    0
                ]
            }, t = [
                a
            ];
            for(; t.length > 0;){
                let u = /*#__PURE__*/ t.shift();
                if (u) {
                    g[u] = 1, delete s[u];
                    let r = w[u], [e, o] = c[u];
                    Object.entries(r).forEach((param)=>{
                        let [f, l] = param;
                        g[l] || (c[l] = /*#__PURE__*/ ar([
                            e,
                            o
                        ], f), t.push(l));
                    });
                }
            }
            return c;
        }, "BFS"), i = [
            /*#__PURE__*/ n(N)
        ];
        for(; Object.keys(s).length > 0;)i.push(/*#__PURE__*/ n(Object.keys(s)[0]));
        vt.records.dataStructures = {
            adjList: w,
            spatialMaps: i,
            groupAlignments: E
        };
    }
    return vt.records.dataStructures;
}, "getDataStructures"), Pr = /*#__PURE__*/ m$1((E, w)=>{
    vt.records.elements[E] = w;
}, "setElementForId"), Gr = /*#__PURE__*/ m$1((E)=>vt.records.elements[E], "getElementById"), fr = /*#__PURE__*/ m$1(()=>Le({
        ...cr,
        ...Er$1().architecture
    }), "getConfig"), _t = {
    clear: Dr,
    setDiagramTitle: Lf,
    getDiagramTitle: Mf,
    setAccTitle: vf,
    getAccTitle: wf,
    setAccDescription: Bf,
    getAccDescription: Ff,
    getConfig: fr,
    addService: Cr,
    getServices: Mr,
    addJunction: wr,
    getJunctions: xr,
    getNodes: Or,
    getNode: xe,
    addGroup: Rr,
    getGroups: Ir,
    addEdge: Sr,
    getEdges: br,
    setElementForId: Pr,
    getElementById: Gr,
    getDataStructures: Fr
};
function Gt(E) {
    return fr()[E];
}
m$1(Gt, "getConfigField");
var Yr = /*#__PURE__*/ m$1((E, w)=>{
    c(E, w), E.groups.map(w.addGroup), E.services.map((N)=>w.addService({
            ...N,
            type: "service"
        })), E.junctions.map((N)=>w.addJunction({
            ...N,
            type: "junction"
        })), E.edges.map(w.addEdge);
}, "populateDb"), ur = {
    parse: /*#__PURE__*/ m$1(async (E)=>{
        let w = await p("architecture", E);
        tt.debug(w), Yr(w, _t);
    }, "parse")
};
var Ur = /*#__PURE__*/ m$1((E)=>`
  .edge {
    stroke-width: ${E.archEdgeWidth};
    stroke: ${E.archEdgeColor};
    fill: none;
  }

  .arrow {
    fill: ${E.archEdgeArrowColor};
  }

  .node-bkg {
    fill: none;
    stroke: ${E.archGroupBorderColor};
    stroke-width: ${E.archGroupBorderWidth};
    stroke-dasharray: 8;
  }
  .node-icon-text {
    display: flex; 
    align-items: center;
  }
  
  .node-icon-text > div {
    color: #fff;
    margin: 1px;
    height: fit-content;
    text-align: center;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
`, "getStyles"), gr = Ur;
var Er = /*#__PURE__*/ q(/*#__PURE__*/ dr());
var ae = /*#__PURE__*/ m$1((E)=>`<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/>${E}</g>`, "wrapIcon"), te = {
    prefix: "mermaid-architecture",
    height: 80,
    width: 80,
    icons: {
        database: {
            body: /*#__PURE__*/ ae('<path id="b" data-name="4" d="m20,57.86c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path id="c" data-name="3" d="m20,45.95c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path id="d" data-name="2" d="m20,34.05c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse id="e" data-name="1" cx="40" cy="22.14" rx="20" ry="7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="20" y1="57.86" x2="20" y2="22.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="60" y1="57.86" x2="60" y2="22.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>')
        },
        server: {
            body: /*#__PURE__*/ ae('<rect x="17.5" y="17.5" width="45" height="45" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="32.5" x2="62.5" y2="32.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="47.5" x2="62.5" y2="47.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><g><path d="m56.25,25c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,25c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><path d="m56.25,40c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,40c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><path d="m56.25,55c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,55c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g>')
        },
        disk: {
            body: /*#__PURE__*/ ae('<rect x="20" y="15" width="40" height="50" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="24" cy="19.17" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="56" cy="19.17" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="24" cy="60.83" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="56" cy="60.83" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="40" cy="33.75" rx="14" ry="14.58" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="40" cy="33.75" rx="4" ry="4.17" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m37.51,42.52l-4.83,13.22c-.26.71-1.1,1.02-1.76.64l-4.18-2.42c-.66-.38-.81-1.26-.33-1.84l9.01-10.8c.88-1.05,2.56-.08,2.09,1.2Z" style="fill: #fff; stroke-width: 0px;"/>')
        },
        internet: {
            body: /*#__PURE__*/ ae('<circle cx="40" cy="40" r="22.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="40" y1="17.5" x2="40" y2="62.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="40" x2="62.5" y2="40" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m39.99,17.51c-15.28,11.1-15.28,33.88,0,44.98" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m40.01,17.51c15.28,11.1,15.28,33.88,0,44.98" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="19.75" y1="30.1" x2="60.25" y2="30.1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="19.75" y1="49.9" x2="60.25" y2="49.9" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>')
        },
        cloud: {
            body: /*#__PURE__*/ ae('<path d="m65,47.5c0,2.76-2.24,5-5,5H20c-2.76,0-5-2.24-5-5,0-1.87,1.03-3.51,2.56-4.36-.04-.21-.06-.42-.06-.64,0-2.6,2.48-4.74,5.65-4.97,1.65-4.51,6.34-7.76,11.85-7.76.86,0,1.69.08,2.5.23,2.09-1.57,4.69-2.5,7.5-2.5,6.1,0,11.19,4.38,12.28,10.17,2.14.56,3.72,2.51,3.72,4.83,0,.03,0,.07-.01.1,2.29.46,4.01,2.48,4.01,4.9Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>')
        },
        unknown: _t$1,
        blank: {
            body: /*#__PURE__*/ ae("")
        }
    }
};
var pr = /*#__PURE__*/ m$1(async function(E, w) {
    let N = /*#__PURE__*/ Gt("padding"), g = /*#__PURE__*/ Gt("iconSize"), s = g / 2, n = g / 6, i = n / 2;
    await Promise.all(/*#__PURE__*/ w.edges().map(async (a)=>{
        let { source: c, sourceDir: t, sourceArrow: u, sourceGroup: r, target: e, targetDir: o, targetArrow: f, targetGroup: l, label: A } = ye(a), { x: v, y } = a[0].sourceEndpoint(), { x: D, y: S } = a[0].midpoint(), { x: C, y: b } = a[0].targetEndpoint(), z = N + 4;
        if (r && (Vt(t) ? v += t === "L" ? -z : z : y += t === "T" ? -z : z + 18), l && (Vt(o) ? C += o === "L" ? -z : z : b += o === "T" ? -z : z + 18), !r && _t.getNode(c)?.type === "junction" && (Vt(t) ? v += t === "L" ? s : -s : y += t === "T" ? s : -s), !l && _t.getNode(e)?.type === "junction" && (Vt(o) ? C += o === "L" ? s : -s : b += o === "T" ? s : -s), a[0]._private.rscratch) {
            let X = /*#__PURE__*/ E.insert("g");
            if (X.insert("path").attr("d", `M ${v},${y} L ${D},${S} L${C},${b} `).attr("class", "edge"), u) {
                let K = Vt(t) ? oe[t](v, n) : v - i, R = Jt(t) ? oe[t](y, n) : y - i;
                X.insert("polygon").attr("points", /*#__PURE__*/ Me[t](n)).attr("transform", `translate(${K},${R})`).attr("class", "arrow");
            }
            if (f) {
                let K = Vt(o) ? oe[o](C, n) : C - i, R = Jt(o) ? oe[o](b, n) : b - i;
                X.insert("polygon").attr("points", /*#__PURE__*/ Me[o](n)).attr("transform", `translate(${K},${R})`).attr("class", "arrow");
            }
            if (A) {
                let K = se(t, o) ? "XY" : Vt(t) ? "X" : "Y", R = 0;
                K === "X" ? R = /*#__PURE__*/ Math.abs(v - C) : K === "Y" ? R = Math.abs(y - b) / 1.5 : R = Math.abs(v - C) / 2;
                let J = /*#__PURE__*/ X.append("g");
                if (await Jr(J, A, {
                    useHtmlLabels: false,
                    width: R,
                    classes: "architecture-service-label"
                }, /*#__PURE__*/ Hl()), J.attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle"), K === "X") J.attr("transform", "translate(" + D + ", " + S + ")");
                else if (K === "Y") J.attr("transform", "translate(" + D + ", " + S + ") rotate(-90)");
                else if (K === "XY") {
                    let h = /*#__PURE__*/ he(t, o);
                    if (h && nr(h)) {
                        let m = /*#__PURE__*/ J.node().getBoundingClientRect(), [d, T] = or(h);
                        J.attr("dominant-baseline", "auto").attr("transform", `rotate(${-1 * d * T * 45})`);
                        let p = /*#__PURE__*/ J.node().getBoundingClientRect();
                        J.attr("transform", `
                translate(${D}, ${S - m.height / 2})
                translate(${d * p.width / 2}, ${T * p.height / 2})
                rotate(${-1 * d * T * 45}, 0, ${m.height / 2})
              `);
                    }
                }
            }
        }
    }));
}, "drawEdges"), vr = /*#__PURE__*/ m$1(async function(E, w) {
    let g = Gt("padding") * .75, s = /*#__PURE__*/ Gt("fontSize"), i = Gt("iconSize") / 2;
    await Promise.all(/*#__PURE__*/ w.nodes().map(async (a)=>{
        let c = /*#__PURE__*/ Qt(a);
        if (c.type === "group") {
            let { h: t, w: u, x1: r, y1: e } = a.boundingBox();
            E.append("rect").attr("x", r + i).attr("y", e + i).attr("width", u).attr("height", t).attr("class", "node-bkg");
            let o = /*#__PURE__*/ E.append("g"), f = r, l = e;
            if (c.icon) {
                let A = /*#__PURE__*/ o.append("g");
                A.html(`<g>${await Ve(c.icon, {
                    height: g,
                    width: g,
                    fallbackPrefix: te.prefix
                })}</g>`), A.attr("transform", "translate(" + (f + i + 1) + ", " + (l + i + 1) + ")"), f += g, l += s / 2 - 1 - 2;
            }
            if (c.label) {
                let A = /*#__PURE__*/ o.append("g");
                await Jr(A, c.label, {
                    useHtmlLabels: false,
                    width: u,
                    classes: "architecture-service-label"
                }, /*#__PURE__*/ Hl()), A.attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "start").attr("text-anchor", "start"), A.attr("transform", "translate(" + (f + i + 4) + ", " + (l + i + 2) + ")");
            }
        }
    }));
}, "drawGroups"), yr = /*#__PURE__*/ m$1(async function(E, w, N) {
    for (let g of N){
        let s = /*#__PURE__*/ w.append("g"), n = /*#__PURE__*/ Gt("iconSize");
        if (g.title) {
            let t = /*#__PURE__*/ s.append("g");
            await Jr(t, g.title, {
                useHtmlLabels: false,
                width: n * 1.5,
                classes: "architecture-service-label"
            }, /*#__PURE__*/ Hl()), t.attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle"), t.attr("transform", "translate(" + n / 2 + ", " + n + ")");
        }
        let i = /*#__PURE__*/ s.append("g");
        if (g.icon) i.html(`<g>${await Ve(g.icon, {
            height: n,
            width: n,
            fallbackPrefix: te.prefix
        })}</g>`);
        else if (g.iconText) {
            i.html(`<g>${await Ve("blank", {
                height: n,
                width: n,
                fallbackPrefix: te.prefix
            })}</g>`);
            let r = /*#__PURE__*/ i.append("g").append("foreignObject").attr("width", n).attr("height", n).append("div").attr("class", "node-icon-text").attr("style", `height: ${n}px;`).append("div").html(g.iconText), e = parseInt(/*#__PURE__*/ window.getComputedStyle(/*#__PURE__*/ r.node(), null).getPropertyValue("font-size").replace(/\D/g, "")) ?? 16;
            r.attr("style", `-webkit-line-clamp: ${Math.floor((n - 2) / e)};`);
        } else i.append("path").attr("class", "node-bkg").attr("id", "node-" + g.id).attr("d", `M0 ${n} v${-n} q0,-5 5,-5 h${n} q5,0 5,5 v${n} H0 Z`);
        s.attr("class", "architecture-service");
        let { width: a, height: c } = s._groups[0][0].getBBox();
        g.width = a, g.height = c, E.setElementForId(g.id, s);
    }
    return 0;
}, "drawServices"), mr = /*#__PURE__*/ m$1(function(E, w, N) {
    N.forEach((g)=>{
        let s = /*#__PURE__*/ w.append("g"), n = /*#__PURE__*/ Gt("iconSize");
        s.append("g").append("rect").attr("id", "node-" + g.id).attr("fill-opacity", "0").attr("width", n).attr("height", n), s.attr("class", "architecture-junction");
        let { width: a, height: c } = s._groups[0][0].getBBox();
        s.width = a, s.height = c, E.setElementForId(g.id, s);
    });
}, "drawJunctions");
yr$1([
    {
        name: te.prefix,
        icons: te
    }
]);
Gr$1.use(Er.default);
function Xr(E, w) {
    E.forEach((N)=>{
        w.add({
            group: "nodes",
            data: {
                type: "service",
                id: N.id,
                icon: N.icon,
                label: N.title,
                parent: N.in,
                width: /*#__PURE__*/ Gt("iconSize"),
                height: /*#__PURE__*/ Gt("iconSize")
            },
            classes: "node-service"
        });
    });
}
m$1(Xr, "addServices");
function Hr(E, w) {
    E.forEach((N)=>{
        w.add({
            group: "nodes",
            data: {
                type: "junction",
                id: N.id,
                parent: N.in,
                width: /*#__PURE__*/ Gt("iconSize"),
                height: /*#__PURE__*/ Gt("iconSize")
            },
            classes: "node-junction"
        });
    });
}
m$1(Hr, "addJunctions");
function Wr(E, w) {
    w.nodes().map((N)=>{
        let g = /*#__PURE__*/ Qt(N);
        if (g.type === "group") return;
        g.x = N.position().x, g.y = N.position().y, E.getElementById(g.id).attr("transform", "translate(" + (g.x || 0) + "," + (g.y || 0) + ")");
    });
}
m$1(Wr, "positionNodes");
function Vr(E, w) {
    E.forEach((N)=>{
        w.add({
            group: "nodes",
            data: {
                type: "group",
                id: N.id,
                icon: N.icon,
                label: N.title,
                parent: N.in
            },
            classes: "node-group"
        });
    });
}
m$1(Vr, "addGroups");
function zr(E, w) {
    E.forEach((N)=>{
        let { lhsId: g, rhsId: s, lhsInto: n, lhsGroup: i, rhsInto: a, lhsDir: c, rhsDir: t, rhsGroup: u, title: r } = N, e = se(N.lhsDir, N.rhsDir) ? "segments" : "straight", o = {
            id: `${g}-${s}`,
            label: r,
            source: g,
            sourceDir: c,
            sourceArrow: n,
            sourceGroup: i,
            sourceEndpoint: c === "L" ? "0 50%" : c === "R" ? "100% 50%" : c === "T" ? "50% 0" : "50% 100%",
            target: s,
            targetDir: t,
            targetArrow: a,
            targetGroup: u,
            targetEndpoint: t === "L" ? "0 50%" : t === "R" ? "100% 50%" : t === "T" ? "50% 0" : "50% 100%"
        };
        w.add({
            group: "edges",
            data: o,
            classes: e
        });
    });
}
m$1(zr, "addEdges");
function Br(E, w, N) {
    let g = /*#__PURE__*/ m$1((a, c)=>Object.entries(a).reduce((t, param)=>{
            let [u, r] = param;
            let e = 0, o = /*#__PURE__*/ Object.entries(r);
            if (o.length === 1) return t[u] = o[0][1], t;
            for(let f = 0; f < o.length - 1; f++)for(let l = f + 1; l < o.length; l++){
                let [A, v] = o[f], [y, D] = o[l];
                if (N[A]?.[y] === c) t[u] ??= [], t[u] = [
                    ...t[u],
                    ...v,
                    ...D
                ];
                else if (A === "default" || y === "default") t[u] ??= [], t[u] = [
                    ...t[u],
                    ...v,
                    ...D
                ];
                else {
                    let C = `${u}-${e++}`;
                    t[C] = v;
                    let b = `${u}-${e++}`;
                    t[b] = D;
                }
            }
            return t;
        }, {}), "flattenAlignments"), s = /*#__PURE__*/ w.map((a)=>{
        let c = {}, t = {};
        return Object.entries(a).forEach((param)=>{
            let [u, [r, e]] = param;
            let o = E.getNode(u)?.in ?? "default";
            c[e] ??= {}, c[e][o] ??= [], c[e][o].push(u), t[r] ??= {}, t[r][o] ??= [], t[r][o].push(u);
        }), {
            horiz: /*#__PURE__*/ Object.values(/*#__PURE__*/ g(c, "horizontal")).filter((u)=>u.length > 1),
            vert: /*#__PURE__*/ Object.values(/*#__PURE__*/ g(t, "vertical")).filter((u)=>u.length > 1)
        };
    }), [n, i] = s.reduce((param, param1)=>{
        let [a, c] = param, { horiz: t, vert: u } = param1;
        return [
            [
                ...a,
                ...t
            ],
            [
                ...c,
                ...u
            ]
        ];
    }, [
        [],
        []
    ]);
    return {
        horizontal: n,
        vertical: i
    };
}
m$1(Br, "getAlignments");
function $r(E) {
    let w = [], N = /*#__PURE__*/ m$1((s)=>`${s[0]},${s[1]}`, "posToStr"), g = /*#__PURE__*/ m$1((s)=>s.split(",").map((n)=>parseInt(n)), "strToPos");
    return E.forEach((s)=>{
        let n = /*#__PURE__*/ Object.fromEntries(/*#__PURE__*/ Object.entries(s).map((param)=>{
            let [t, u] = param;
            return [
                /*#__PURE__*/ N(u),
                t
            ];
        })), i = [
            /*#__PURE__*/ N([
                0,
                0
            ])
        ], a = {}, c = {
            L: [
                -1,
                0
            ],
            R: [
                1,
                0
            ],
            T: [
                0,
                1
            ],
            B: [
                0,
                -1
            ]
        };
        for(; i.length > 0;){
            let t = /*#__PURE__*/ i.shift();
            if (t) {
                a[t] = 1;
                let u = n[t];
                if (u) {
                    let r = /*#__PURE__*/ g(t);
                    Object.entries(c).forEach((param)=>{
                        let [e, o] = param;
                        let f = /*#__PURE__*/ N([
                            r[0] + o[0],
                            r[1] + o[1]
                        ]), l = n[f];
                        l && !a[f] && (i.push(f), w.push({
                            [Ce[e]]: l,
                            [Ce[ir(e)]]: u,
                            gap: 1.5 * Gt("iconSize")
                        }));
                    });
                }
            }
        }
    }), w;
}
m$1($r, "getRelativeConstraints");
function kr(E, w, N, g, s, param) {
    let { spatialMaps: n, groupAlignments: i } = param;
    return new Promise((a)=>{
        let c = /*#__PURE__*/ ih("body").append("div").attr("id", "cy").attr("style", "display:none"), t = /*#__PURE__*/ Gr$1({
            container: /*#__PURE__*/ document.getElementById("cy"),
            style: [
                {
                    selector: "edge",
                    style: {
                        "curve-style": "straight",
                        label: "data(label)",
                        "source-endpoint": "data(sourceEndpoint)",
                        "target-endpoint": "data(targetEndpoint)"
                    }
                },
                {
                    selector: "edge.segments",
                    style: {
                        "curve-style": "segments",
                        "segment-weights": "0",
                        "segment-distances": [
                            .5
                        ],
                        "edge-distances": "endpoints",
                        "source-endpoint": "data(sourceEndpoint)",
                        "target-endpoint": "data(targetEndpoint)"
                    }
                },
                {
                    selector: "node",
                    style: {
                        "compound-sizing-wrt-labels": "include"
                    }
                },
                {
                    selector: "node[label]",
                    style: {
                        "text-valign": "bottom",
                        "text-halign": "center",
                        "font-size": `${Gt("fontSize")}px`
                    }
                },
                {
                    selector: ".node-service",
                    style: {
                        label: "data(label)",
                        width: "data(width)",
                        height: "data(height)"
                    }
                },
                {
                    selector: ".node-junction",
                    style: {
                        width: "data(width)",
                        height: "data(height)"
                    }
                },
                {
                    selector: ".node-group",
                    style: {
                        padding: `${Gt("padding")}px`
                    }
                }
            ]
        });
        c.remove(), Vr(N, t), Xr(E, t), Hr(w, t), zr(g, t);
        let u = /*#__PURE__*/ Br(s, n, i), r = /*#__PURE__*/ $r(n), e = /*#__PURE__*/ t.layout({
            name: "fcose",
            quality: "proof",
            styleEnabled: false,
            animate: false,
            nodeDimensionsIncludeLabels: false,
            idealEdgeLength (o) {
                let [f, l] = o.connectedNodes(), { parent: A } = Qt(f), { parent: v } = Qt(l);
                return A === v ? 1.5 * Gt("iconSize") : .5 * Gt("iconSize");
            },
            edgeElasticity (o) {
                let [f, l] = o.connectedNodes(), { parent: A } = Qt(f), { parent: v } = Qt(l);
                return A === v ? .45 : .001;
            },
            alignmentConstraint: u,
            relativePlacementConstraint: r
        });
        e.one("layoutstop", ()=>{
            function o(f, l, A, v) {
                let y, D, { x: S, y: C } = f, { x: b, y: z } = l;
                D = (v - C + (S - A) * (C - z) / (S - b)) / Math.sqrt(1 + Math.pow((C - z) / (S - b), 2)), y = /*#__PURE__*/ Math.sqrt(Math.pow(v - C, 2) + Math.pow(A - S, 2) - Math.pow(D, 2));
                let X = /*#__PURE__*/ Math.sqrt(Math.pow(b - S, 2) + Math.pow(z - C, 2));
                y = y / X;
                let K = (b - S) * (v - C) - (z - C) * (A - S);
                switch(true){
                    case K >= 0:
                        K = 1;
                        break;
                    case K < 0:
                        K = -1;
                        break;
                }
                let R = (b - S) * (A - S) + (z - C) * (v - C);
                switch(true){
                    case R >= 0:
                        R = 1;
                        break;
                    case R < 0:
                        R = -1;
                        break;
                }
                return D = Math.abs(D) * K, y = y * R, {
                    distances: D,
                    weights: y
                };
            }
            m$1(o, "getSegmentWeights"), t.startBatch();
            for (let f of Object.values(/*#__PURE__*/ t.edges()))if (f.data?.()) {
                let { x: l, y: A } = f.source().position(), { x: v, y } = f.target().position();
                if (l !== v && A !== y) {
                    let D = /*#__PURE__*/ f.sourceEndpoint(), S = /*#__PURE__*/ f.targetEndpoint(), { sourceDir: C } = ye(f), [b, z] = Jt(C) ? [
                        D.x,
                        S.y
                    ] : [
                        S.x,
                        D.y
                    ], { weights: X, distances: K } = o(D, S, b, z);
                    f.style("segment-distances", K), f.style("segment-weights", X);
                }
            }
            t.endBatch(), e.run();
        }), e.run(), t.ready((o)=>{
            tt.info("Ready", o), a(t);
        });
    });
}
m$1(kr, "layoutArchitecture");
var Zr = /*#__PURE__*/ m$1(async (E, w, N, g)=>{
    let s = g.db, n = /*#__PURE__*/ s.getServices(), i = /*#__PURE__*/ s.getJunctions(), a = /*#__PURE__*/ s.getGroups(), c = /*#__PURE__*/ s.getEdges(), t = /*#__PURE__*/ s.getDataStructures(), u = /*#__PURE__*/ d(w), r = /*#__PURE__*/ u.append("g");
    r.attr("class", "architecture-edges");
    let e = /*#__PURE__*/ u.append("g");
    e.attr("class", "architecture-services");
    let o = /*#__PURE__*/ u.append("g");
    o.attr("class", "architecture-groups"), await yr(s, e, n), mr(s, e, i);
    let f = await kr(n, i, a, c, s, t);
    await pr(r, f), await vr(o, f), Wr(s, f), Pl(void 0, u, /*#__PURE__*/ Gt("padding"), /*#__PURE__*/ Gt("useMaxWidth"));
}, "draw"), Tr = {
    draw: Zr
};
var Vi = {
    parser: ur,
    db: _t,
    renderer: Tr,
    styles: gr
};
export { Vi as diagram };
