import { G as Gr } from './vendor-min-mermaid~chunk-MBJCTAW2.CeeVBk3I.chunk.js';
import { d } from './vendor-min-mermaid~chunk-U7M5BGKE.CkyUFSiE.chunk.js';
import { i as is } from './vendor-min-mermaid~chunk-IXVBHSNP.BDZ5TJ6K.chunk.js';
import { $ } from './vendor-min-mermaid~chunk-3R3PQ5PD.DqcBTR0a.chunk.js';
import { m as m$1, q, n } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
import { t as tt, h as hh, a as ah, I as Il, C as Ce, ar as $t$1, as as E, at as I, k as kh } from './vendor-min-mermaid~chunk-F632ZYSZ.C3jO8jR6.chunk.js';
var ut = /*#__PURE__*/ n((tt, gt)=>{
    m$1(function(A, s) {
        typeof tt == "object" && typeof gt == "object" ? gt.exports = /*#__PURE__*/ s() : typeof define == "function" && define.amd ? define([], s) : typeof tt == "object" ? tt.layoutBase = /*#__PURE__*/ s() : A.layoutBase = /*#__PURE__*/ s();
    }, "webpackUniversalModuleDefinition")(tt, function() {
        return function(m) {
            var A = {};
            function s(i) {
                if (A[i]) return A[i].exports;
                var e = A[i] = {
                    i,
                    l: false,
                    exports: {}
                };
                return m[i].call(e.exports, e, e.exports, s), e.l = true, e.exports;
            }
            return m$1(s, "__webpack_require__"), s.m = m, s.c = A, s.i = function(i) {
                return i;
            }, s.d = function(i, e, t) {
                s.o(i, e) || Object.defineProperty(i, e, {
                    configurable: false,
                    enumerable: true,
                    get: t
                });
            }, s.n = function(i) {
                var e = i && i.__esModule ? m$1(function() {
                    return i.default;
                }, "getDefault") : m$1(function() {
                    return i;
                }, "getModuleExports");
                return s.d(e, "a", e), e;
            }, s.o = function(i, e) {
                return Object.prototype.hasOwnProperty.call(i, e);
            }, s.p = "", s(s.s = 26);
        }([
            function(m, A, s) {
                function i() {}
                m$1(i, "LayoutConstants"), i.QUALITY = 1, i.DEFAULT_CREATE_BENDS_AS_NEEDED = false, i.DEFAULT_INCREMENTAL = false, i.DEFAULT_ANIMATION_ON_LAYOUT = true, i.DEFAULT_ANIMATION_DURING_LAYOUT = false, i.DEFAULT_ANIMATION_PERIOD = 50, i.DEFAULT_UNIFORM_LEAF_NODE_SIZES = false, i.DEFAULT_GRAPH_MARGIN = 15, i.NODE_DIMENSIONS_INCLUDE_LABELS = false, i.SIMPLE_NODE_SIZE = 40, i.SIMPLE_NODE_HALF_SIZE = i.SIMPLE_NODE_SIZE / 2, i.EMPTY_COMPOUND_NODE_SIZE = 40, i.MIN_EDGE_LENGTH = 1, i.WORLD_BOUNDARY = 1e6, i.INITIAL_WORLD_BOUNDARY = i.WORLD_BOUNDARY / 1e3, i.WORLD_CENTER_X = 1200, i.WORLD_CENTER_Y = 900, m.exports = i;
            },
            function(m, A, s) {
                var i = /*#__PURE__*/ s(2), e = /*#__PURE__*/ s(8), t = /*#__PURE__*/ s(9);
                function r(f, o, d) {
                    i.call(this, d), this.isOverlapingSourceAndTarget = false, this.vGraphObject = d, this.bendpoints = [], this.source = f, this.target = o;
                }
                m$1(r, "LEdge"), r.prototype = /*#__PURE__*/ Object.create(i.prototype);
                for(var l in i)r[l] = i[l];
                r.prototype.getSource = function() {
                    return this.source;
                }, r.prototype.getTarget = function() {
                    return this.target;
                }, r.prototype.isInterGraph = function() {
                    return this.isInterGraph;
                }, r.prototype.getLength = function() {
                    return this.length;
                }, r.prototype.isOverlapingSourceAndTarget = function() {
                    return this.isOverlapingSourceAndTarget;
                }, r.prototype.getBendpoints = function() {
                    return this.bendpoints;
                }, r.prototype.getLca = function() {
                    return this.lca;
                }, r.prototype.getSourceInLca = function() {
                    return this.sourceInLca;
                }, r.prototype.getTargetInLca = function() {
                    return this.targetInLca;
                }, r.prototype.getOtherEnd = function(f) {
                    if (this.source === f) return this.target;
                    if (this.target === f) return this.source;
                    throw "Node is not incident with this edge";
                }, r.prototype.getOtherEndInGraph = function(f, o) {
                    for(var d = /*#__PURE__*/ this.getOtherEnd(f), a = /*#__PURE__*/ o.getGraphManager().getRoot();;){
                        if (d.getOwner() == o) return d;
                        if (d.getOwner() == a) break;
                        d = /*#__PURE__*/ d.getOwner().getParent();
                    }
                    return null;
                }, r.prototype.updateLength = function() {
                    var f = new Array(4);
                    this.isOverlapingSourceAndTarget = /*#__PURE__*/ e.getIntersection(/*#__PURE__*/ this.target.getRect(), /*#__PURE__*/ this.source.getRect(), f), this.isOverlapingSourceAndTarget || (this.lengthX = f[0] - f[2], this.lengthY = f[1] - f[3], Math.abs(this.lengthX) < 1 && (this.lengthX = /*#__PURE__*/ t.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = /*#__PURE__*/ t.sign(this.lengthY)), this.length = /*#__PURE__*/ Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY));
                }, r.prototype.updateLengthSimple = function() {
                    this.lengthX = this.target.getCenterX() - this.source.getCenterX(), this.lengthY = this.target.getCenterY() - this.source.getCenterY(), Math.abs(this.lengthX) < 1 && (this.lengthX = /*#__PURE__*/ t.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = /*#__PURE__*/ t.sign(this.lengthY)), this.length = /*#__PURE__*/ Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
                }, m.exports = r;
            },
            function(m, A, s) {
                function i(e) {
                    this.vGraphObject = e;
                }
                m$1(i, "LGraphObject"), m.exports = i;
            },
            function(m, A, s) {
                var i = /*#__PURE__*/ s(2), e = /*#__PURE__*/ s(10), t = /*#__PURE__*/ s(13), r = /*#__PURE__*/ s(0), l = /*#__PURE__*/ s(16), f = /*#__PURE__*/ s(4);
                function o(a, c, u, v) {
                    u == null && v == null && (v = c), i.call(this, v), a.graphManager != null && (a = a.graphManager), this.estimatedSize = e.MIN_VALUE, this.inclusionTreeDepth = e.MAX_VALUE, this.vGraphObject = v, this.edges = [], this.graphManager = a, u != null && c != null ? this.rect = new t(c.x, c.y, u.width, u.height) : this.rect = new t;
                }
                m$1(o, "LNode"), o.prototype = /*#__PURE__*/ Object.create(i.prototype);
                for(var d in i)o[d] = i[d];
                o.prototype.getEdges = function() {
                    return this.edges;
                }, o.prototype.getChild = function() {
                    return this.child;
                }, o.prototype.getOwner = function() {
                    return this.owner;
                }, o.prototype.getWidth = function() {
                    return this.rect.width;
                }, o.prototype.setWidth = function(a) {
                    this.rect.width = a;
                }, o.prototype.getHeight = function() {
                    return this.rect.height;
                }, o.prototype.setHeight = function(a) {
                    this.rect.height = a;
                }, o.prototype.getCenterX = function() {
                    return this.rect.x + this.rect.width / 2;
                }, o.prototype.getCenterY = function() {
                    return this.rect.y + this.rect.height / 2;
                }, o.prototype.getCenter = function() {
                    return new f(this.rect.x + this.rect.width / 2, this.rect.y + this.rect.height / 2);
                }, o.prototype.getLocation = function() {
                    return new f(this.rect.x, this.rect.y);
                }, o.prototype.getRect = function() {
                    return this.rect;
                }, o.prototype.getDiagonal = function() {
                    return Math.sqrt(this.rect.width * this.rect.width + this.rect.height * this.rect.height);
                }, o.prototype.getHalfTheDiagonal = function() {
                    return Math.sqrt(this.rect.height * this.rect.height + this.rect.width * this.rect.width) / 2;
                }, o.prototype.setRect = function(a, c) {
                    this.rect.x = a.x, this.rect.y = a.y, this.rect.width = c.width, this.rect.height = c.height;
                }, o.prototype.setCenter = function(a, c) {
                    this.rect.x = a - this.rect.width / 2, this.rect.y = c - this.rect.height / 2;
                }, o.prototype.setLocation = function(a, c) {
                    this.rect.x = a, this.rect.y = c;
                }, o.prototype.moveBy = function(a, c) {
                    this.rect.x += a, this.rect.y += c;
                }, o.prototype.getEdgeListToNode = function(a) {
                    var c = [], v = this;
                    return v.edges.forEach(function(E) {
                        if (E.target == a) {
                            if (E.source != v) throw "Incorrect edge source!";
                            c.push(E);
                        }
                    }), c;
                }, o.prototype.getEdgesBetween = function(a) {
                    var c = [], v = this;
                    return v.edges.forEach(function(E) {
                        if (!(E.source == v || E.target == v)) throw "Incorrect edge source and/or target";
                        (E.target == a || E.source == a) && c.push(E);
                    }), c;
                }, o.prototype.getNeighborsList = function() {
                    var a = new Set, c = this;
                    return c.edges.forEach(function(u) {
                        if (u.source == c) a.add(u.target);
                        else {
                            if (u.target != c) throw "Incorrect incidency!";
                            a.add(u.source);
                        }
                    }), a;
                }, o.prototype.withChildren = function() {
                    var a = new Set, c, u;
                    if (a.add(this), this.child != null) for(var v = /*#__PURE__*/ this.child.getNodes(), E = 0; E < v.length; E++)c = v[E], u = /*#__PURE__*/ c.withChildren(), u.forEach(function(L) {
                        a.add(L);
                    });
                    return a;
                }, o.prototype.getNoOfChildren = function() {
                    var a = 0, c;
                    if (this.child == null) a = 1;
                    else for(var u = /*#__PURE__*/ this.child.getNodes(), v = 0; v < u.length; v++)c = u[v], a += /*#__PURE__*/ c.getNoOfChildren();
                    return a == 0 && (a = 1), a;
                }, o.prototype.getEstimatedSize = function() {
                    if (this.estimatedSize == e.MIN_VALUE) throw "assert failed";
                    return this.estimatedSize;
                }, o.prototype.calcEstimatedSize = function() {
                    return this.child == null ? this.estimatedSize = (this.rect.width + this.rect.height) / 2 : (this.estimatedSize = /*#__PURE__*/ this.child.calcEstimatedSize(), this.rect.width = this.estimatedSize, this.rect.height = this.estimatedSize, this.estimatedSize);
                }, o.prototype.scatter = function() {
                    var a, c, u = -r.INITIAL_WORLD_BOUNDARY, v = r.INITIAL_WORLD_BOUNDARY;
                    a = r.WORLD_CENTER_X + l.nextDouble() * (v - u) + u;
                    var E = -r.INITIAL_WORLD_BOUNDARY, L = r.INITIAL_WORLD_BOUNDARY;
                    c = r.WORLD_CENTER_Y + l.nextDouble() * (L - E) + E, this.rect.x = a, this.rect.y = c;
                }, o.prototype.updateBounds = function() {
                    if (this.getChild() == null) throw "assert failed";
                    if (this.getChild().getNodes().length != 0) {
                        var a = /*#__PURE__*/ this.getChild();
                        if (a.updateBounds(true), this.rect.x = /*#__PURE__*/ a.getLeft(), this.rect.y = /*#__PURE__*/ a.getTop(), this.setWidth(a.getRight() - a.getLeft()), this.setHeight(a.getBottom() - a.getTop()), r.NODE_DIMENSIONS_INCLUDE_LABELS) {
                            var c = a.getRight() - a.getLeft(), u = a.getBottom() - a.getTop();
                            this.labelWidth > c && (this.rect.x -= (this.labelWidth - c) / 2, this.setWidth(this.labelWidth)), this.labelHeight > u && (this.labelPos == "center" ? this.rect.y -= (this.labelHeight - u) / 2 : this.labelPos == "top" && (this.rect.y -= this.labelHeight - u), this.setHeight(this.labelHeight));
                        }
                    }
                }, o.prototype.getInclusionTreeDepth = function() {
                    if (this.inclusionTreeDepth == e.MAX_VALUE) throw "assert failed";
                    return this.inclusionTreeDepth;
                }, o.prototype.transform = function(a) {
                    var c = this.rect.x;
                    c > r.WORLD_BOUNDARY ? c = r.WORLD_BOUNDARY : c < -r.WORLD_BOUNDARY && (c = -r.WORLD_BOUNDARY);
                    var u = this.rect.y;
                    u > r.WORLD_BOUNDARY ? u = r.WORLD_BOUNDARY : u < -r.WORLD_BOUNDARY && (u = -r.WORLD_BOUNDARY);
                    var v = new f(c, u), E = /*#__PURE__*/ a.inverseTransformPoint(v);
                    this.setLocation(E.x, E.y);
                }, o.prototype.getLeft = function() {
                    return this.rect.x;
                }, o.prototype.getRight = function() {
                    return this.rect.x + this.rect.width;
                }, o.prototype.getTop = function() {
                    return this.rect.y;
                }, o.prototype.getBottom = function() {
                    return this.rect.y + this.rect.height;
                }, o.prototype.getParent = function() {
                    return this.owner == null ? null : this.owner.getParent();
                }, m.exports = o;
            },
            function(m, A, s) {
                function i(e, t) {
                    e == null && t == null ? (this.x = 0, this.y = 0) : (this.x = e, this.y = t);
                }
                m$1(i, "PointD"), i.prototype.getX = function() {
                    return this.x;
                }, i.prototype.getY = function() {
                    return this.y;
                }, i.prototype.setX = function(e) {
                    this.x = e;
                }, i.prototype.setY = function(e) {
                    this.y = e;
                }, i.prototype.getDifference = function(e) {
                    return new DimensionD(this.x - e.x, this.y - e.y);
                }, i.prototype.getCopy = function() {
                    return new i(this.x, this.y);
                }, i.prototype.translate = function(e) {
                    return this.x += e.width, this.y += e.height, this;
                }, m.exports = i;
            },
            function(m, A, s) {
                var i = /*#__PURE__*/ s(2), e = /*#__PURE__*/ s(10), t = /*#__PURE__*/ s(0), r = /*#__PURE__*/ s(6), l = /*#__PURE__*/ s(3), f = /*#__PURE__*/ s(1), o = /*#__PURE__*/ s(13), d = /*#__PURE__*/ s(12), a = /*#__PURE__*/ s(11);
                function c(v, E, L) {
                    i.call(this, L), this.estimatedSize = e.MIN_VALUE, this.margin = t.DEFAULT_GRAPH_MARGIN, this.edges = [], this.nodes = [], this.isConnected = false, this.parent = v, E != null && E instanceof r ? this.graphManager = E : E != null && E instanceof Layout && (this.graphManager = E.graphManager);
                }
                m$1(c, "LGraph"), c.prototype = /*#__PURE__*/ Object.create(i.prototype);
                for(var u in i)c[u] = i[u];
                c.prototype.getNodes = function() {
                    return this.nodes;
                }, c.prototype.getEdges = function() {
                    return this.edges;
                }, c.prototype.getGraphManager = function() {
                    return this.graphManager;
                }, c.prototype.getParent = function() {
                    return this.parent;
                }, c.prototype.getLeft = function() {
                    return this.left;
                }, c.prototype.getRight = function() {
                    return this.right;
                }, c.prototype.getTop = function() {
                    return this.top;
                }, c.prototype.getBottom = function() {
                    return this.bottom;
                }, c.prototype.isConnected = function() {
                    return this.isConnected;
                }, c.prototype.add = function(v, E, L) {
                    if (E == null && L == null) {
                        var y = v;
                        if (this.graphManager == null) throw "Graph has no graph mgr!";
                        if (this.getNodes().indexOf(y) > -1) throw "Node already in graph!";
                        return y.owner = this, this.getNodes().push(y), y;
                    } else {
                        var I = v;
                        if (!(this.getNodes().indexOf(E) > -1 && this.getNodes().indexOf(L) > -1)) throw "Source or target not in graph!";
                        if (!(E.owner == L.owner && E.owner == this)) throw "Both owners must be this graph!";
                        return E.owner != L.owner ? null : (I.source = E, I.target = L, I.isInterGraph = false, this.getEdges().push(I), E.edges.push(I), L != E && L.edges.push(I), I);
                    }
                }, c.prototype.remove = function(v) {
                    var E = v;
                    if (v instanceof l) {
                        if (E == null) throw "Node is null!";
                        if (!(E.owner != null && E.owner == this)) throw "Owner graph is invalid!";
                        if (this.graphManager == null) throw "Owner graph manager is invalid!";
                        for(var L = /*#__PURE__*/ E.edges.slice(), y, I = L.length, O = 0; O < I; O++)y = L[O], y.isInterGraph ? this.graphManager.remove(y) : y.source.owner.remove(y);
                        var R = /*#__PURE__*/ this.nodes.indexOf(E);
                        if (R == -1) throw "Node not in owner node list!";
                        this.nodes.splice(R, 1);
                    } else if (v instanceof f) {
                        var y = v;
                        if (y == null) throw "Edge is null!";
                        if (!(y.source != null && y.target != null)) throw "Source and/or target is null!";
                        if (!(y.source.owner != null && y.target.owner != null && y.source.owner == this && y.target.owner == this)) throw "Source and/or target owner is invalid!";
                        var n = /*#__PURE__*/ y.source.edges.indexOf(y), h = /*#__PURE__*/ y.target.edges.indexOf(y);
                        if (!(n > -1 && h > -1)) throw "Source and/or target doesn't know this edge!";
                        y.source.edges.splice(n, 1), y.target != y.source && y.target.edges.splice(h, 1);
                        var R = /*#__PURE__*/ y.source.owner.getEdges().indexOf(y);
                        if (R == -1) throw "Not in owner's edge list!";
                        y.source.owner.getEdges().splice(R, 1);
                    }
                }, c.prototype.updateLeftTop = function() {
                    for(var v = e.MAX_VALUE, E = e.MAX_VALUE, L, y, I, O = /*#__PURE__*/ this.getNodes(), R = O.length, n = 0; n < R; n++){
                        var h = O[n];
                        L = /*#__PURE__*/ h.getTop(), y = /*#__PURE__*/ h.getLeft(), v > L && (v = L), E > y && (E = y);
                    }
                    return v == e.MAX_VALUE ? null : (O[0].getParent().paddingLeft != null ? I = O[0].getParent().paddingLeft : I = this.margin, this.left = E - I, this.top = v - I, new d(this.left, this.top));
                }, c.prototype.updateBounds = function(v) {
                    for(var E = e.MAX_VALUE, L = -e.MAX_VALUE, y = e.MAX_VALUE, I = -e.MAX_VALUE, O, R, n, h, g, p = this.nodes, T = p.length, D = 0; D < T; D++){
                        var C = p[D];
                        v && C.child != null && C.updateBounds(), O = /*#__PURE__*/ C.getLeft(), R = /*#__PURE__*/ C.getRight(), n = /*#__PURE__*/ C.getTop(), h = /*#__PURE__*/ C.getBottom(), E > O && (E = O), L < R && (L = R), y > n && (y = n), I < h && (I = h);
                    }
                    var M = new o(E, y, L - E, I - y);
                    E == e.MAX_VALUE && (this.left = /*#__PURE__*/ this.parent.getLeft(), this.right = /*#__PURE__*/ this.parent.getRight(), this.top = /*#__PURE__*/ this.parent.getTop(), this.bottom = /*#__PURE__*/ this.parent.getBottom()), p[0].getParent().paddingLeft != null ? g = p[0].getParent().paddingLeft : g = this.margin, this.left = M.x - g, this.right = M.x + M.width + g, this.top = M.y - g, this.bottom = M.y + M.height + g;
                }, c.calculateBounds = function(v) {
                    for(var E = e.MAX_VALUE, L = -e.MAX_VALUE, y = e.MAX_VALUE, I = -e.MAX_VALUE, O, R, n, h, g = v.length, p = 0; p < g; p++){
                        var T = v[p];
                        O = /*#__PURE__*/ T.getLeft(), R = /*#__PURE__*/ T.getRight(), n = /*#__PURE__*/ T.getTop(), h = /*#__PURE__*/ T.getBottom(), E > O && (E = O), L < R && (L = R), y > n && (y = n), I < h && (I = h);
                    }
                    var D = new o(E, y, L - E, I - y);
                    return D;
                }, c.prototype.getInclusionTreeDepth = function() {
                    return this == this.graphManager.getRoot() ? 1 : this.parent.getInclusionTreeDepth();
                }, c.prototype.getEstimatedSize = function() {
                    if (this.estimatedSize == e.MIN_VALUE) throw "assert failed";
                    return this.estimatedSize;
                }, c.prototype.calcEstimatedSize = function() {
                    for(var v = 0, E = this.nodes, L = E.length, y = 0; y < L; y++){
                        var I = E[y];
                        v += /*#__PURE__*/ I.calcEstimatedSize();
                    }
                    return v == 0 ? this.estimatedSize = t.EMPTY_COMPOUND_NODE_SIZE : this.estimatedSize = v / Math.sqrt(this.nodes.length), this.estimatedSize;
                }, c.prototype.updateConnected = function() {
                    var v = this;
                    if (this.nodes.length == 0) {
                        this.isConnected = true;
                        return;
                    }
                    var E = new a, L = new Set, y = this.nodes[0], I, O, R = /*#__PURE__*/ y.withChildren();
                    for(R.forEach(function(D) {
                        E.push(D), L.add(D);
                    }); E.length !== 0;){
                        y = /*#__PURE__*/ E.shift(), I = /*#__PURE__*/ y.getEdges();
                        for(var n = I.length, h = 0; h < n; h++){
                            var g = I[h];
                            if (O = /*#__PURE__*/ g.getOtherEndInGraph(y, this), O != null && !L.has(O)) {
                                var p = /*#__PURE__*/ O.withChildren();
                                p.forEach(function(D) {
                                    E.push(D), L.add(D);
                                });
                            }
                        }
                    }
                    if (this.isConnected = false, L.size >= this.nodes.length) {
                        var T = 0;
                        L.forEach(function(D) {
                            D.owner == v && T++;
                        }), T == this.nodes.length && (this.isConnected = true);
                    }
                }, m.exports = c;
            },
            function(m, A, s) {
                var i, e = /*#__PURE__*/ s(1);
                function t(r) {
                    i = /*#__PURE__*/ s(5), this.layout = r, this.graphs = [], this.edges = [];
                }
                m$1(t, "LGraphManager"), t.prototype.addRoot = function() {
                    var r = /*#__PURE__*/ this.layout.newGraph(), l = /*#__PURE__*/ this.layout.newNode(null), f = /*#__PURE__*/ this.add(r, l);
                    return this.setRootGraph(f), this.rootGraph;
                }, t.prototype.add = function(r, l, f, o, d) {
                    if (f == null && o == null && d == null) {
                        if (r == null) throw "Graph is null!";
                        if (l == null) throw "Parent node is null!";
                        if (this.graphs.indexOf(r) > -1) throw "Graph already in this graph mgr!";
                        if (this.graphs.push(r), r.parent != null) throw "Already has a parent!";
                        if (l.child != null) throw "Already has a child!";
                        return r.parent = l, l.child = r, r;
                    } else {
                        d = f, o = l, f = r;
                        var a = /*#__PURE__*/ o.getOwner(), c = /*#__PURE__*/ d.getOwner();
                        if (!(a != null && a.getGraphManager() == this)) throw "Source not in this graph mgr!";
                        if (!(c != null && c.getGraphManager() == this)) throw "Target not in this graph mgr!";
                        if (a == c) return f.isInterGraph = false, a.add(f, o, d);
                        if (f.isInterGraph = true, f.source = o, f.target = d, this.edges.indexOf(f) > -1) throw "Edge already in inter-graph edge list!";
                        if (this.edges.push(f), !(f.source != null && f.target != null)) throw "Edge source and/or target is null!";
                        if (!(f.source.edges.indexOf(f) == -1 && f.target.edges.indexOf(f) == -1)) throw "Edge already in source and/or target incidency list!";
                        return f.source.edges.push(f), f.target.edges.push(f), f;
                    }
                }, t.prototype.remove = function(r) {
                    if (r instanceof i) {
                        var l = r;
                        if (l.getGraphManager() != this) throw "Graph not in this graph mgr";
                        if (!(l == this.rootGraph || l.parent != null && l.parent.graphManager == this)) throw "Invalid parent node!";
                        var f = [];
                        f = /*#__PURE__*/ f.concat(/*#__PURE__*/ l.getEdges());
                        for(var o, d = f.length, a = 0; a < d; a++)o = f[a], l.remove(o);
                        var c = [];
                        c = /*#__PURE__*/ c.concat(/*#__PURE__*/ l.getNodes());
                        var u;
                        d = c.length;
                        for(var a = 0; a < d; a++)u = c[a], l.remove(u);
                        l == this.rootGraph && this.setRootGraph(null);
                        var v = /*#__PURE__*/ this.graphs.indexOf(l);
                        this.graphs.splice(v, 1), l.parent = null;
                    } else if (r instanceof e) {
                        if (o = r, o == null) throw "Edge is null!";
                        if (!o.isInterGraph) throw "Not an inter-graph edge!";
                        if (!(o.source != null && o.target != null)) throw "Source and/or target is null!";
                        if (!(o.source.edges.indexOf(o) != -1 && o.target.edges.indexOf(o) != -1)) throw "Source and/or target doesn't know this edge!";
                        var v = /*#__PURE__*/ o.source.edges.indexOf(o);
                        if (o.source.edges.splice(v, 1), v = /*#__PURE__*/ o.target.edges.indexOf(o), o.target.edges.splice(v, 1), !(o.source.owner != null && o.source.owner.getGraphManager() != null)) throw "Edge owner graph or owner graph manager is null!";
                        if (o.source.owner.getGraphManager().edges.indexOf(o) == -1) throw "Not in owner graph manager's edge list!";
                        var v = /*#__PURE__*/ o.source.owner.getGraphManager().edges.indexOf(o);
                        o.source.owner.getGraphManager().edges.splice(v, 1);
                    }
                }, t.prototype.updateBounds = function() {
                    this.rootGraph.updateBounds(true);
                }, t.prototype.getGraphs = function() {
                    return this.graphs;
                }, t.prototype.getAllNodes = function() {
                    if (this.allNodes == null) {
                        for(var r = [], l = /*#__PURE__*/ this.getGraphs(), f = l.length, o = 0; o < f; o++)r = /*#__PURE__*/ r.concat(/*#__PURE__*/ l[o].getNodes());
                        this.allNodes = r;
                    }
                    return this.allNodes;
                }, t.prototype.resetAllNodes = function() {
                    this.allNodes = null;
                }, t.prototype.resetAllEdges = function() {
                    this.allEdges = null;
                }, t.prototype.resetAllNodesToApplyGravitation = function() {
                    this.allNodesToApplyGravitation = null;
                }, t.prototype.getAllEdges = function() {
                    if (this.allEdges == null) {
                        for(var r = [], l = /*#__PURE__*/ this.getGraphs(), f = l.length, o = 0; o < l.length; o++)r = /*#__PURE__*/ r.concat(/*#__PURE__*/ l[o].getEdges());
                        r = /*#__PURE__*/ r.concat(this.edges), this.allEdges = r;
                    }
                    return this.allEdges;
                }, t.prototype.getAllNodesToApplyGravitation = function() {
                    return this.allNodesToApplyGravitation;
                }, t.prototype.setAllNodesToApplyGravitation = function(r) {
                    if (this.allNodesToApplyGravitation != null) throw "assert failed";
                    this.allNodesToApplyGravitation = r;
                }, t.prototype.getRoot = function() {
                    return this.rootGraph;
                }, t.prototype.setRootGraph = function(r) {
                    if (r.getGraphManager() != this) throw "Root not in this graph mgr!";
                    this.rootGraph = r, r.parent == null && (r.parent = /*#__PURE__*/ this.layout.newNode("Root node"));
                }, t.prototype.getLayout = function() {
                    return this.layout;
                }, t.prototype.isOneAncestorOfOther = function(r, l) {
                    if (!(r != null && l != null)) throw "assert failed";
                    if (r == l) return true;
                    var f = /*#__PURE__*/ r.getOwner(), o;
                    do {
                        if (o = /*#__PURE__*/ f.getParent(), o == null) break;
                        if (o == l) return true;
                        if (f = /*#__PURE__*/ o.getOwner(), f == null) break;
                    }while (true);
                    f = /*#__PURE__*/ l.getOwner();
                    do {
                        if (o = /*#__PURE__*/ f.getParent(), o == null) break;
                        if (o == r) return true;
                        if (f = /*#__PURE__*/ o.getOwner(), f == null) break;
                    }while (true);
                    return false;
                }, t.prototype.calcLowestCommonAncestors = function() {
                    for(var r, l, f, o, d, a = /*#__PURE__*/ this.getAllEdges(), c = a.length, u = 0; u < c; u++){
                        if (r = a[u], l = r.source, f = r.target, r.lca = null, r.sourceInLca = l, r.targetInLca = f, l == f) {
                            r.lca = /*#__PURE__*/ l.getOwner();
                            continue;
                        }
                        for(o = /*#__PURE__*/ l.getOwner(); r.lca == null;){
                            for(r.targetInLca = f, d = /*#__PURE__*/ f.getOwner(); r.lca == null;){
                                if (d == o) {
                                    r.lca = d;
                                    break;
                                }
                                if (d == this.rootGraph) break;
                                if (r.lca != null) throw "assert failed";
                                r.targetInLca = /*#__PURE__*/ d.getParent(), d = /*#__PURE__*/ r.targetInLca.getOwner();
                            }
                            if (o == this.rootGraph) break;
                            r.lca == null && (r.sourceInLca = /*#__PURE__*/ o.getParent(), o = /*#__PURE__*/ r.sourceInLca.getOwner());
                        }
                        if (r.lca == null) throw "assert failed";
                    }
                }, t.prototype.calcLowestCommonAncestor = function(r, l) {
                    if (r == l) return r.getOwner();
                    var f = /*#__PURE__*/ r.getOwner();
                    do {
                        if (f == null) break;
                        var o = /*#__PURE__*/ l.getOwner();
                        do {
                            if (o == null) break;
                            if (o == f) return o;
                            o = /*#__PURE__*/ o.getParent().getOwner();
                        }while (true);
                        f = /*#__PURE__*/ f.getParent().getOwner();
                    }while (true);
                    return f;
                }, t.prototype.calcInclusionTreeDepths = function(r, l) {
                    r == null && l == null && (r = this.rootGraph, l = 1);
                    for(var f, o = /*#__PURE__*/ r.getNodes(), d = o.length, a = 0; a < d; a++)f = o[a], f.inclusionTreeDepth = l, f.child != null && this.calcInclusionTreeDepths(f.child, l + 1);
                }, t.prototype.includesInvalidEdge = function() {
                    for(var r, l = this.edges.length, f = 0; f < l; f++)if (r = this.edges[f], this.isOneAncestorOfOther(r.source, r.target)) return true;
                    return false;
                }, m.exports = t;
            },
            function(m, A, s) {
                var i = /*#__PURE__*/ s(0);
                function e() {}
                m$1(e, "FDLayoutConstants");
                for(var t in i)e[t] = i[t];
                e.MAX_ITERATIONS = 2500, e.DEFAULT_EDGE_LENGTH = 50, e.DEFAULT_SPRING_STRENGTH = .45, e.DEFAULT_REPULSION_STRENGTH = 4500, e.DEFAULT_GRAVITY_STRENGTH = .4, e.DEFAULT_COMPOUND_GRAVITY_STRENGTH = 1, e.DEFAULT_GRAVITY_RANGE_FACTOR = 3.8, e.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = 1.5, e.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION = true, e.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION = true, e.DEFAULT_COOLING_FACTOR_INCREMENTAL = .3, e.COOLING_ADAPTATION_FACTOR = .33, e.ADAPTATION_LOWER_NODE_LIMIT = 1e3, e.ADAPTATION_UPPER_NODE_LIMIT = 5e3, e.MAX_NODE_DISPLACEMENT_INCREMENTAL = 100, e.MAX_NODE_DISPLACEMENT = e.MAX_NODE_DISPLACEMENT_INCREMENTAL * 3, e.MIN_REPULSION_DIST = e.DEFAULT_EDGE_LENGTH / 10, e.CONVERGENCE_CHECK_PERIOD = 100, e.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = .1, e.MIN_EDGE_LENGTH = 1, e.GRID_CALCULATION_CHECK_PERIOD = 10, m.exports = e;
            },
            function(m, A, s) {
                var i = /*#__PURE__*/ s(12);
                function e() {}
                m$1(e, "IGeometry"), e.calcSeparationAmount = function(t, r, l, f) {
                    if (!t.intersects(r)) throw "assert failed";
                    var o = new Array(2);
                    this.decideDirectionsForOverlappingNodes(t, r, o), l[0] = Math.min(/*#__PURE__*/ t.getRight(), /*#__PURE__*/ r.getRight()) - Math.max(t.x, r.x), l[1] = Math.min(/*#__PURE__*/ t.getBottom(), /*#__PURE__*/ r.getBottom()) - Math.max(t.y, r.y), t.getX() <= r.getX() && t.getRight() >= r.getRight() ? l[0] += /*#__PURE__*/ Math.min(r.getX() - t.getX(), t.getRight() - r.getRight()) : r.getX() <= t.getX() && r.getRight() >= t.getRight() && (l[0] += /*#__PURE__*/ Math.min(t.getX() - r.getX(), r.getRight() - t.getRight())), t.getY() <= r.getY() && t.getBottom() >= r.getBottom() ? l[1] += /*#__PURE__*/ Math.min(r.getY() - t.getY(), t.getBottom() - r.getBottom()) : r.getY() <= t.getY() && r.getBottom() >= t.getBottom() && (l[1] += /*#__PURE__*/ Math.min(t.getY() - r.getY(), r.getBottom() - t.getBottom()));
                    var d = /*#__PURE__*/ Math.abs((r.getCenterY() - t.getCenterY()) / (r.getCenterX() - t.getCenterX()));
                    r.getCenterY() === t.getCenterY() && r.getCenterX() === t.getCenterX() && (d = 1);
                    var a = d * l[0], c = l[1] / d;
                    l[0] < c ? c = l[0] : a = l[1], l[0] = -1 * o[0] * (c / 2 + f), l[1] = -1 * o[1] * (a / 2 + f);
                }, e.decideDirectionsForOverlappingNodes = function(t, r, l) {
                    t.getCenterX() < r.getCenterX() ? l[0] = -1 : l[0] = 1, t.getCenterY() < r.getCenterY() ? l[1] = -1 : l[1] = 1;
                }, e.getIntersection2 = function(t, r, l) {
                    var f = /*#__PURE__*/ t.getCenterX(), o = /*#__PURE__*/ t.getCenterY(), d = /*#__PURE__*/ r.getCenterX(), a = /*#__PURE__*/ r.getCenterY();
                    if (t.intersects(r)) return l[0] = f, l[1] = o, l[2] = d, l[3] = a, true;
                    var c = /*#__PURE__*/ t.getX(), u = /*#__PURE__*/ t.getY(), v = /*#__PURE__*/ t.getRight(), E = /*#__PURE__*/ t.getX(), L = /*#__PURE__*/ t.getBottom(), y = /*#__PURE__*/ t.getRight(), I = /*#__PURE__*/ t.getWidthHalf(), O = /*#__PURE__*/ t.getHeightHalf(), R = /*#__PURE__*/ r.getX(), n = /*#__PURE__*/ r.getY(), h = /*#__PURE__*/ r.getRight(), g = /*#__PURE__*/ r.getX(), p = /*#__PURE__*/ r.getBottom(), T = /*#__PURE__*/ r.getRight(), D = /*#__PURE__*/ r.getWidthHalf(), C = /*#__PURE__*/ r.getHeightHalf(), M = false, x = false;
                    if (f === d) {
                        if (o > a) return l[0] = f, l[1] = u, l[2] = d, l[3] = p, false;
                        if (o < a) return l[0] = f, l[1] = L, l[2] = d, l[3] = n, false;
                    } else if (o === a) {
                        if (f > d) return l[0] = c, l[1] = o, l[2] = h, l[3] = a, false;
                        if (f < d) return l[0] = v, l[1] = o, l[2] = R, l[3] = a, false;
                    } else {
                        var P = t.height / t.width, U = r.height / r.width, G = (a - o) / (d - f), w = void 0, b = void 0, S = void 0, F = void 0, X = void 0, _ = void 0;
                        if (-P === G ? f > d ? (l[0] = E, l[1] = L, M = true) : (l[0] = v, l[1] = u, M = true) : P === G && (f > d ? (l[0] = c, l[1] = u, M = true) : (l[0] = y, l[1] = L, M = true)), -U === G ? d > f ? (l[2] = g, l[3] = p, x = true) : (l[2] = h, l[3] = n, x = true) : U === G && (d > f ? (l[2] = R, l[3] = n, x = true) : (l[2] = T, l[3] = p, x = true)), M && x) return false;
                        if (f > d ? o > a ? (w = /*#__PURE__*/ this.getCardinalDirection(P, G, 4), b = /*#__PURE__*/ this.getCardinalDirection(U, G, 2)) : (w = /*#__PURE__*/ this.getCardinalDirection(-P, G, 3), b = /*#__PURE__*/ this.getCardinalDirection(-U, G, 1)) : o > a ? (w = /*#__PURE__*/ this.getCardinalDirection(-P, G, 1), b = /*#__PURE__*/ this.getCardinalDirection(-U, G, 3)) : (w = /*#__PURE__*/ this.getCardinalDirection(P, G, 2), b = /*#__PURE__*/ this.getCardinalDirection(U, G, 4)), !M) switch(w){
                            case 1:
                                F = u, S = f + -O / G, l[0] = S, l[1] = F;
                                break;
                            case 2:
                                S = y, F = o + I * G, l[0] = S, l[1] = F;
                                break;
                            case 3:
                                F = L, S = f + O / G, l[0] = S, l[1] = F;
                                break;
                            case 4:
                                S = E, F = o + -I * G, l[0] = S, l[1] = F;
                                break;
                        }
                        if (!x) switch(b){
                            case 1:
                                _ = n, X = d + -C / G, l[2] = X, l[3] = _;
                                break;
                            case 2:
                                X = T, _ = a + D * G, l[2] = X, l[3] = _;
                                break;
                            case 3:
                                _ = p, X = d + C / G, l[2] = X, l[3] = _;
                                break;
                            case 4:
                                X = g, _ = a + -D * G, l[2] = X, l[3] = _;
                                break;
                        }
                    }
                    return false;
                }, e.getCardinalDirection = function(t, r, l) {
                    return t > r ? l : 1 + l % 4;
                }, e.getIntersection = function(t, r, l, f) {
                    if (f == null) return this.getIntersection2(t, r, l);
                    var o = t.x, d = t.y, a = r.x, c = r.y, u = l.x, v = l.y, E = f.x, L = f.y, y = void 0, I = void 0, O = void 0, R = void 0, n = void 0, h = void 0, g = void 0, p = void 0, T = void 0;
                    return O = c - d, n = o - a, g = a * d - o * c, R = L - v, h = u - E, p = E * v - u * L, T = O * h - R * n, T === 0 ? null : (y = (n * p - h * g) / T, I = (R * g - O * p) / T, new i(y, I));
                }, e.angleOfVector = function(t, r, l, f) {
                    var o = void 0;
                    return t !== l ? (o = /*#__PURE__*/ Math.atan((f - r) / (l - t)), l < t ? o += Math.PI : f < r && (o += this.TWO_PI)) : f < r ? o = this.ONE_AND_HALF_PI : o = this.HALF_PI, o;
                }, e.doIntersect = function(t, r, l, f) {
                    var o = t.x, d = t.y, a = r.x, c = r.y, u = l.x, v = l.y, E = f.x, L = f.y, y = (a - o) * (L - v) - (E - u) * (c - d);
                    if (y === 0) return false;
                    var I = ((L - v) * (E - o) + (u - E) * (L - d)) / y, O = ((d - c) * (E - o) + (a - o) * (L - d)) / y;
                    return 0 < I && I < 1 && 0 < O && O < 1;
                }, e.HALF_PI = .5 * Math.PI, e.ONE_AND_HALF_PI = 1.5 * Math.PI, e.TWO_PI = 2 * Math.PI, e.THREE_PI = 3 * Math.PI, m.exports = e;
            },
            function(m, A, s) {
                function i() {}
                m$1(i, "IMath"), i.sign = function(e) {
                    return e > 0 ? 1 : e < 0 ? -1 : 0;
                }, i.floor = function(e) {
                    return e < 0 ? Math.ceil(e) : Math.floor(e);
                }, i.ceil = function(e) {
                    return e < 0 ? Math.floor(e) : Math.ceil(e);
                }, m.exports = i;
            },
            function(m, A, s) {
                function i() {}
                m$1(i, "Integer"), i.MAX_VALUE = 2147483647, i.MIN_VALUE = -2147483648, m.exports = i;
            },
            function(m, A, s) {
                var i = /*#__PURE__*/ function() {
                    function o(d, a) {
                        for(var c = 0; c < a.length; c++){
                            var u = a[c];
                            u.enumerable = u.enumerable || false, u.configurable = true, "value" in u && (u.writable = true), Object.defineProperty(d, u.key, u);
                        }
                    }
                    return m$1(o, "defineProperties"), function(d, a, c) {
                        return a && o(d.prototype, a), c && o(d, c), d;
                    };
                }();
                function e(o, d) {
                    if (!(o instanceof d)) throw new TypeError("Cannot call a class as a function");
                }
                m$1(e, "_classCallCheck");
                var t = /*#__PURE__*/ m$1(function(d) {
                    return {
                        value: d,
                        next: null,
                        prev: null
                    };
                }, "nodeFrom"), r = /*#__PURE__*/ m$1(function(d, a, c, u) {
                    return d !== null ? d.next = a : u.head = a, c !== null ? c.prev = a : u.tail = a, a.prev = d, a.next = c, u.length++, a;
                }, "add"), l = /*#__PURE__*/ m$1(function(d, a) {
                    var c = d.prev, u = d.next;
                    return c !== null ? c.next = u : a.head = u, u !== null ? u.prev = c : a.tail = c, d.prev = d.next = null, a.length--, d;
                }, "_remove"), f = /*#__PURE__*/ function() {
                    function o(d) {
                        var a = this;
                        e(this, o), this.length = 0, this.head = null, this.tail = null, d?.forEach(function(c) {
                            return a.push(c);
                        });
                    }
                    return m$1(o, "LinkedList"), i(o, [
                        {
                            key: "size",
                            value: /*#__PURE__*/ m$1(function() {
                                return this.length;
                            }, "size")
                        },
                        {
                            key: "insertBefore",
                            value: /*#__PURE__*/ m$1(function(a, c) {
                                return r(c.prev, /*#__PURE__*/ t(a), c, this);
                            }, "insertBefore")
                        },
                        {
                            key: "insertAfter",
                            value: /*#__PURE__*/ m$1(function(a, c) {
                                return r(c, /*#__PURE__*/ t(a), c.next, this);
                            }, "insertAfter")
                        },
                        {
                            key: "insertNodeBefore",
                            value: /*#__PURE__*/ m$1(function(a, c) {
                                return r(c.prev, a, c, this);
                            }, "insertNodeBefore")
                        },
                        {
                            key: "insertNodeAfter",
                            value: /*#__PURE__*/ m$1(function(a, c) {
                                return r(c, a, c.next, this);
                            }, "insertNodeAfter")
                        },
                        {
                            key: "push",
                            value: /*#__PURE__*/ m$1(function(a) {
                                return r(this.tail, /*#__PURE__*/ t(a), null, this);
                            }, "push")
                        },
                        {
                            key: "unshift",
                            value: /*#__PURE__*/ m$1(function(a) {
                                return r(null, /*#__PURE__*/ t(a), this.head, this);
                            }, "unshift")
                        },
                        {
                            key: "remove",
                            value: /*#__PURE__*/ m$1(function(a) {
                                return l(a, this);
                            }, "remove")
                        },
                        {
                            key: "pop",
                            value: /*#__PURE__*/ m$1(function() {
                                return l(this.tail, this).value;
                            }, "pop")
                        },
                        {
                            key: "popNode",
                            value: /*#__PURE__*/ m$1(function() {
                                return l(this.tail, this);
                            }, "popNode")
                        },
                        {
                            key: "shift",
                            value: /*#__PURE__*/ m$1(function() {
                                return l(this.head, this).value;
                            }, "shift")
                        },
                        {
                            key: "shiftNode",
                            value: /*#__PURE__*/ m$1(function() {
                                return l(this.head, this);
                            }, "shiftNode")
                        },
                        {
                            key: "get_object_at",
                            value: /*#__PURE__*/ m$1(function(a) {
                                if (a <= this.length()) {
                                    for(var c = 1, u = this.head; c < a;)u = u.next, c++;
                                    return u.value;
                                }
                            }, "get_object_at")
                        },
                        {
                            key: "set_object_at",
                            value: /*#__PURE__*/ m$1(function(a, c) {
                                if (a <= this.length()) {
                                    for(var u = 1, v = this.head; u < a;)v = v.next, u++;
                                    v.value = c;
                                }
                            }, "set_object_at")
                        }
                    ]), o;
                }();
                m.exports = f;
            },
            function(m, A, s) {
                function i(e, t, r) {
                    this.x = null, this.y = null, e == null && t == null && r == null ? (this.x = 0, this.y = 0) : typeof e == "number" && typeof t == "number" && r == null ? (this.x = e, this.y = t) : e.constructor.name == "Point" && t == null && r == null && (r = e, this.x = r.x, this.y = r.y);
                }
                m$1(i, "Point"), i.prototype.getX = function() {
                    return this.x;
                }, i.prototype.getY = function() {
                    return this.y;
                }, i.prototype.getLocation = function() {
                    return new i(this.x, this.y);
                }, i.prototype.setLocation = function(e, t, r) {
                    e.constructor.name == "Point" && t == null && r == null ? (r = e, this.setLocation(r.x, r.y)) : typeof e == "number" && typeof t == "number" && r == null && (parseInt(e) == e && parseInt(t) == t ? this.move(e, t) : (this.x = /*#__PURE__*/ Math.floor(e + .5), this.y = /*#__PURE__*/ Math.floor(t + .5)));
                }, i.prototype.move = function(e, t) {
                    this.x = e, this.y = t;
                }, i.prototype.translate = function(e, t) {
                    this.x += e, this.y += t;
                }, i.prototype.equals = function(e) {
                    if (e.constructor.name == "Point") {
                        var t = e;
                        return this.x == t.x && this.y == t.y;
                    }
                    return this == e;
                }, i.prototype.toString = function() {
                    return new i().constructor.name + "[x=" + this.x + ",y=" + this.y + "]";
                }, m.exports = i;
            },
            function(m, A, s) {
                function i(e, t, r, l) {
                    this.x = 0, this.y = 0, this.width = 0, this.height = 0, e != null && t != null && r != null && l != null && (this.x = e, this.y = t, this.width = r, this.height = l);
                }
                m$1(i, "RectangleD"), i.prototype.getX = function() {
                    return this.x;
                }, i.prototype.setX = function(e) {
                    this.x = e;
                }, i.prototype.getY = function() {
                    return this.y;
                }, i.prototype.setY = function(e) {
                    this.y = e;
                }, i.prototype.getWidth = function() {
                    return this.width;
                }, i.prototype.setWidth = function(e) {
                    this.width = e;
                }, i.prototype.getHeight = function() {
                    return this.height;
                }, i.prototype.setHeight = function(e) {
                    this.height = e;
                }, i.prototype.getRight = function() {
                    return this.x + this.width;
                }, i.prototype.getBottom = function() {
                    return this.y + this.height;
                }, i.prototype.intersects = function(e) {
                    return !(this.getRight() < e.x || this.getBottom() < e.y || e.getRight() < this.x || e.getBottom() < this.y);
                }, i.prototype.getCenterX = function() {
                    return this.x + this.width / 2;
                }, i.prototype.getMinX = function() {
                    return this.getX();
                }, i.prototype.getMaxX = function() {
                    return this.getX() + this.width;
                }, i.prototype.getCenterY = function() {
                    return this.y + this.height / 2;
                }, i.prototype.getMinY = function() {
                    return this.getY();
                }, i.prototype.getMaxY = function() {
                    return this.getY() + this.height;
                }, i.prototype.getWidthHalf = function() {
                    return this.width / 2;
                }, i.prototype.getHeightHalf = function() {
                    return this.height / 2;
                }, m.exports = i;
            },
            function(m, A, s) {
                var i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                };
                function e() {}
                m$1(e, "UniqueIDGeneretor"), e.lastID = 0, e.createID = function(t) {
                    return e.isPrimitive(t) ? t : (t.uniqueID != null || (t.uniqueID = /*#__PURE__*/ e.getString(), e.lastID++), t.uniqueID);
                }, e.getString = function(t) {
                    return t == null && (t = e.lastID), "Object#" + t;
                }, e.isPrimitive = function(t) {
                    var r = typeof t > "u" ? "undefined" : i(t);
                    return t == null || r != "object" && r != "function";
                }, m.exports = e;
            },
            function(m, A, s) {
                function i(u) {
                    if (Array.isArray(u)) {
                        for(var v = 0, E = /*#__PURE__*/ Array(u.length); v < u.length; v++)E[v] = u[v];
                        return E;
                    } else return Array.from(u);
                }
                m$1(i, "_toConsumableArray");
                var e = /*#__PURE__*/ s(0), t = /*#__PURE__*/ s(6), r = /*#__PURE__*/ s(3), l = /*#__PURE__*/ s(1), f = /*#__PURE__*/ s(5), o = /*#__PURE__*/ s(4), d = /*#__PURE__*/ s(17), a = /*#__PURE__*/ s(27);
                function c(u) {
                    a.call(this), this.layoutQuality = e.QUALITY, this.createBendsAsNeeded = e.DEFAULT_CREATE_BENDS_AS_NEEDED, this.incremental = e.DEFAULT_INCREMENTAL, this.animationOnLayout = e.DEFAULT_ANIMATION_ON_LAYOUT, this.animationDuringLayout = e.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = e.DEFAULT_ANIMATION_PERIOD, this.uniformLeafNodeSizes = e.DEFAULT_UNIFORM_LEAF_NODE_SIZES, this.edgeToDummyNodes = new Map, this.graphManager = new t(this), this.isLayoutFinished = false, this.isSubLayout = false, this.isRemoteUse = false, u != null && (this.isRemoteUse = u);
                }
                m$1(c, "Layout"), c.RANDOM_SEED = 1, c.prototype = /*#__PURE__*/ Object.create(a.prototype), c.prototype.getGraphManager = function() {
                    return this.graphManager;
                }, c.prototype.getAllNodes = function() {
                    return this.graphManager.getAllNodes();
                }, c.prototype.getAllEdges = function() {
                    return this.graphManager.getAllEdges();
                }, c.prototype.getAllNodesToApplyGravitation = function() {
                    return this.graphManager.getAllNodesToApplyGravitation();
                }, c.prototype.newGraphManager = function() {
                    var u = new t(this);
                    return this.graphManager = u, u;
                }, c.prototype.newGraph = function(u) {
                    return new f(null, this.graphManager, u);
                }, c.prototype.newNode = function(u) {
                    return new r(this.graphManager, u);
                }, c.prototype.newEdge = function(u) {
                    return new l(null, null, u);
                }, c.prototype.checkLayoutSuccess = function() {
                    return this.graphManager.getRoot() == null || this.graphManager.getRoot().getNodes().length == 0 || this.graphManager.includesInvalidEdge();
                }, c.prototype.runLayout = function() {
                    this.isLayoutFinished = false, this.tilingPreLayout && this.tilingPreLayout(), this.initParameters();
                    var u;
                    return this.checkLayoutSuccess() ? u = false : u = /*#__PURE__*/ this.layout(), e.ANIMATE === "during" ? false : (u && (this.isSubLayout || this.doPostLayout()), this.tilingPostLayout && this.tilingPostLayout(), this.isLayoutFinished = true, u);
                }, c.prototype.doPostLayout = function() {
                    this.incremental || this.transform(), this.update();
                }, c.prototype.update2 = function() {
                    if (this.createBendsAsNeeded && (this.createBendpointsFromDummyNodes(), this.graphManager.resetAllEdges()), !this.isRemoteUse) {
                        for(var u, v = /*#__PURE__*/ this.graphManager.getAllEdges(), E = 0; E < v.length; E++)u = v[E];
                        for(var L, y = /*#__PURE__*/ this.graphManager.getRoot().getNodes(), E = 0; E < y.length; E++)L = y[E];
                        this.update(/*#__PURE__*/ this.graphManager.getRoot());
                    }
                }, c.prototype.update = function(u) {
                    if (u == null) this.update2();
                    else if (u instanceof r) {
                        var v = u;
                        if (v.getChild() != null) for(var E = /*#__PURE__*/ v.getChild().getNodes(), L = 0; L < E.length; L++)update(E[L]);
                        if (v.vGraphObject != null) {
                            var y = v.vGraphObject;
                            y.update(v);
                        }
                    } else if (u instanceof l) {
                        var I = u;
                        if (I.vGraphObject != null) {
                            var O = I.vGraphObject;
                            O.update(I);
                        }
                    } else if (u instanceof f) {
                        var R = u;
                        if (R.vGraphObject != null) {
                            var n = R.vGraphObject;
                            n.update(R);
                        }
                    }
                }, c.prototype.initParameters = function() {
                    this.isSubLayout || (this.layoutQuality = e.QUALITY, this.animationDuringLayout = e.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = e.DEFAULT_ANIMATION_PERIOD, this.animationOnLayout = e.DEFAULT_ANIMATION_ON_LAYOUT, this.incremental = e.DEFAULT_INCREMENTAL, this.createBendsAsNeeded = e.DEFAULT_CREATE_BENDS_AS_NEEDED, this.uniformLeafNodeSizes = e.DEFAULT_UNIFORM_LEAF_NODE_SIZES), this.animationDuringLayout && (this.animationOnLayout = false);
                }, c.prototype.transform = function(u) {
                    if (u == null) this.transform(new o(0, 0));
                    else {
                        var v = new d, E = /*#__PURE__*/ this.graphManager.getRoot().updateLeftTop();
                        if (E != null) {
                            v.setWorldOrgX(u.x), v.setWorldOrgY(u.y), v.setDeviceOrgX(E.x), v.setDeviceOrgY(E.y);
                            for(var L = /*#__PURE__*/ this.getAllNodes(), y, I = 0; I < L.length; I++)y = L[I], y.transform(v);
                        }
                    }
                }, c.prototype.positionNodesRandomly = function(u) {
                    if (u == null) this.positionNodesRandomly(/*#__PURE__*/ this.getGraphManager().getRoot()), this.getGraphManager().getRoot().updateBounds(true);
                    else for(var v, E, L = /*#__PURE__*/ u.getNodes(), y = 0; y < L.length; y++)v = L[y], E = /*#__PURE__*/ v.getChild(), E == null || E.getNodes().length == 0 ? v.scatter() : (this.positionNodesRandomly(E), v.updateBounds());
                }, c.prototype.getFlatForest = function() {
                    for(var u = [], v = true, E = /*#__PURE__*/ this.graphManager.getRoot().getNodes(), L = true, y = 0; y < E.length; y++)E[y].getChild() != null && (L = false);
                    if (!L) return u;
                    var I = new Set, O = [], R = new Map, n = [];
                    for(n = /*#__PURE__*/ n.concat(E); n.length > 0 && v;){
                        for(O.push(n[0]); O.length > 0 && v;){
                            var h = O[0];
                            O.splice(0, 1), I.add(h);
                            for(var g = /*#__PURE__*/ h.getEdges(), y = 0; y < g.length; y++){
                                var p = /*#__PURE__*/ g[y].getOtherEnd(h);
                                if (R.get(h) != p) if (!I.has(p)) O.push(p), R.set(p, h);
                                else {
                                    v = false;
                                    break;
                                }
                            }
                        }
                        if (!v) u = [];
                        else {
                            var T = /*#__PURE__*/ [].concat(/*#__PURE__*/ i(I));
                            u.push(T);
                            for(var y = 0; y < T.length; y++){
                                var D = T[y], C = /*#__PURE__*/ n.indexOf(D);
                                C > -1 && n.splice(C, 1);
                            }
                            I = new Set, R = new Map;
                        }
                    }
                    return u;
                }, c.prototype.createDummyNodesForBendpoints = function(u) {
                    for(var v = [], E = u.source, L = /*#__PURE__*/ this.graphManager.calcLowestCommonAncestor(u.source, u.target), y = 0; y < u.bendpoints.length; y++){
                        var I = /*#__PURE__*/ this.newNode(null);
                        I.setRect(new Point(0, 0), new Dimension(1, 1)), L.add(I);
                        var O = /*#__PURE__*/ this.newEdge(null);
                        this.graphManager.add(O, E, I), v.add(I), E = I;
                    }
                    var O = /*#__PURE__*/ this.newEdge(null);
                    return this.graphManager.add(O, E, u.target), this.edgeToDummyNodes.set(u, v), u.isInterGraph() ? this.graphManager.remove(u) : L.remove(u), v;
                }, c.prototype.createBendpointsFromDummyNodes = function() {
                    var u = [];
                    u = /*#__PURE__*/ u.concat(/*#__PURE__*/ this.graphManager.getAllEdges()), u = /*#__PURE__*/ [].concat(/*#__PURE__*/ i(/*#__PURE__*/ this.edgeToDummyNodes.keys())).concat(u);
                    for(var v = 0; v < u.length; v++){
                        var E = u[v];
                        if (E.bendpoints.length > 0) {
                            for(var L = /*#__PURE__*/ this.edgeToDummyNodes.get(E), y = 0; y < L.length; y++){
                                var I = L[y], O = new o(I.getCenterX(), I.getCenterY()), R = /*#__PURE__*/ E.bendpoints.get(y);
                                R.x = O.x, R.y = O.y, I.getOwner().remove(I);
                            }
                            this.graphManager.add(E, E.source, E.target);
                        }
                    }
                }, c.transform = function(u, v, E, L) {
                    if (E != null && L != null) {
                        var y = v;
                        if (u <= 50) {
                            var I = v / E;
                            y -= (v - I) / 50 * (50 - u);
                        } else {
                            var O = v * L;
                            y += (O - v) / 50 * (u - 50);
                        }
                        return y;
                    } else {
                        var R, n;
                        return u <= 50 ? (R = 9 * v / 500, n = v / 10) : (R = 9 * v / 50, n = -8 * v), R * u + n;
                    }
                }, c.findCenterOfTree = function(u) {
                    var v = [];
                    v = /*#__PURE__*/ v.concat(u);
                    var E = [], L = new Map, y = false, I = null;
                    (v.length == 1 || v.length == 2) && (y = true, I = v[0]);
                    for(var O = 0; O < v.length; O++){
                        var R = v[O], n = R.getNeighborsList().size;
                        L.set(R, R.getNeighborsList().size), n == 1 && E.push(R);
                    }
                    var h = [];
                    for(h = /*#__PURE__*/ h.concat(E); !y;){
                        var g = [];
                        g = /*#__PURE__*/ g.concat(h), h = [];
                        for(var O = 0; O < v.length; O++){
                            var R = v[O], p = /*#__PURE__*/ v.indexOf(R);
                            p >= 0 && v.splice(p, 1);
                            var T = /*#__PURE__*/ R.getNeighborsList();
                            T.forEach(function(M) {
                                if (E.indexOf(M) < 0) {
                                    var x = /*#__PURE__*/ L.get(M), P = x - 1;
                                    P == 1 && h.push(M), L.set(M, P);
                                }
                            });
                        }
                        E = /*#__PURE__*/ E.concat(h), (v.length == 1 || v.length == 2) && (y = true, I = v[0]);
                    }
                    return I;
                }, c.prototype.setGraphManager = function(u) {
                    this.graphManager = u;
                }, m.exports = c;
            },
            function(m, A, s) {
                function i() {}
                m$1(i, "RandomSeed"), i.seed = 1, i.x = 0, i.nextDouble = function() {
                    return i.x = Math.sin(i.seed++) * 1e4, i.x - Math.floor(i.x);
                }, m.exports = i;
            },
            function(m, A, s) {
                var i = /*#__PURE__*/ s(4);
                function e(t, r) {
                    this.lworldOrgX = 0, this.lworldOrgY = 0, this.ldeviceOrgX = 0, this.ldeviceOrgY = 0, this.lworldExtX = 1, this.lworldExtY = 1, this.ldeviceExtX = 1, this.ldeviceExtY = 1;
                }
                m$1(e, "Transform"), e.prototype.getWorldOrgX = function() {
                    return this.lworldOrgX;
                }, e.prototype.setWorldOrgX = function(t) {
                    this.lworldOrgX = t;
                }, e.prototype.getWorldOrgY = function() {
                    return this.lworldOrgY;
                }, e.prototype.setWorldOrgY = function(t) {
                    this.lworldOrgY = t;
                }, e.prototype.getWorldExtX = function() {
                    return this.lworldExtX;
                }, e.prototype.setWorldExtX = function(t) {
                    this.lworldExtX = t;
                }, e.prototype.getWorldExtY = function() {
                    return this.lworldExtY;
                }, e.prototype.setWorldExtY = function(t) {
                    this.lworldExtY = t;
                }, e.prototype.getDeviceOrgX = function() {
                    return this.ldeviceOrgX;
                }, e.prototype.setDeviceOrgX = function(t) {
                    this.ldeviceOrgX = t;
                }, e.prototype.getDeviceOrgY = function() {
                    return this.ldeviceOrgY;
                }, e.prototype.setDeviceOrgY = function(t) {
                    this.ldeviceOrgY = t;
                }, e.prototype.getDeviceExtX = function() {
                    return this.ldeviceExtX;
                }, e.prototype.setDeviceExtX = function(t) {
                    this.ldeviceExtX = t;
                }, e.prototype.getDeviceExtY = function() {
                    return this.ldeviceExtY;
                }, e.prototype.setDeviceExtY = function(t) {
                    this.ldeviceExtY = t;
                }, e.prototype.transformX = function(t) {
                    var r = 0, l = this.lworldExtX;
                    return l != 0 && (r = this.ldeviceOrgX + (t - this.lworldOrgX) * this.ldeviceExtX / l), r;
                }, e.prototype.transformY = function(t) {
                    var r = 0, l = this.lworldExtY;
                    return l != 0 && (r = this.ldeviceOrgY + (t - this.lworldOrgY) * this.ldeviceExtY / l), r;
                }, e.prototype.inverseTransformX = function(t) {
                    var r = 0, l = this.ldeviceExtX;
                    return l != 0 && (r = this.lworldOrgX + (t - this.ldeviceOrgX) * this.lworldExtX / l), r;
                }, e.prototype.inverseTransformY = function(t) {
                    var r = 0, l = this.ldeviceExtY;
                    return l != 0 && (r = this.lworldOrgY + (t - this.ldeviceOrgY) * this.lworldExtY / l), r;
                }, e.prototype.inverseTransformPoint = function(t) {
                    var r = new i(this.inverseTransformX(t.x), this.inverseTransformY(t.y));
                    return r;
                }, m.exports = e;
            },
            function(m, A, s) {
                function i(a) {
                    if (Array.isArray(a)) {
                        for(var c = 0, u = /*#__PURE__*/ Array(a.length); c < a.length; c++)u[c] = a[c];
                        return u;
                    } else return Array.from(a);
                }
                m$1(i, "_toConsumableArray");
                var e = /*#__PURE__*/ s(15), t = /*#__PURE__*/ s(7), r = /*#__PURE__*/ s(0), l = /*#__PURE__*/ s(8), f = /*#__PURE__*/ s(9);
                function o() {
                    e.call(this), this.useSmartIdealEdgeLengthCalculation = t.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.idealEdgeLength = t.DEFAULT_EDGE_LENGTH, this.springConstant = t.DEFAULT_SPRING_STRENGTH, this.repulsionConstant = t.DEFAULT_REPULSION_STRENGTH, this.gravityConstant = t.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = t.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = t.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = t.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.displacementThresholdPerNode = 3 * t.DEFAULT_EDGE_LENGTH / 100, this.coolingFactor = t.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.initialCoolingFactor = t.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.totalDisplacement = 0, this.oldTotalDisplacement = 0, this.maxIterations = t.MAX_ITERATIONS;
                }
                m$1(o, "FDLayout"), o.prototype = /*#__PURE__*/ Object.create(e.prototype);
                for(var d in e)o[d] = e[d];
                o.prototype.initParameters = function() {
                    e.prototype.initParameters.call(this, arguments), this.totalIterations = 0, this.notAnimatedIterations = 0, this.useFRGridVariant = t.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION, this.grid = [];
                }, o.prototype.calcIdealEdgeLengths = function() {
                    for(var a, c, u, v, E, L, y = /*#__PURE__*/ this.getGraphManager().getAllEdges(), I = 0; I < y.length; I++)a = y[I], a.idealLength = this.idealEdgeLength, a.isInterGraph && (u = /*#__PURE__*/ a.getSource(), v = /*#__PURE__*/ a.getTarget(), E = /*#__PURE__*/ a.getSourceInLca().getEstimatedSize(), L = /*#__PURE__*/ a.getTargetInLca().getEstimatedSize(), this.useSmartIdealEdgeLengthCalculation && (a.idealLength += E + L - 2 * r.SIMPLE_NODE_SIZE), c = /*#__PURE__*/ a.getLca().getInclusionTreeDepth(), a.idealLength += t.DEFAULT_EDGE_LENGTH * t.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR * (u.getInclusionTreeDepth() + v.getInclusionTreeDepth() - 2 * c));
                }, o.prototype.initSpringEmbedder = function() {
                    var a = this.getAllNodes().length;
                    this.incremental ? (a > t.ADAPTATION_LOWER_NODE_LIMIT && (this.coolingFactor = /*#__PURE__*/ Math.max(this.coolingFactor * t.COOLING_ADAPTATION_FACTOR, this.coolingFactor - (a - t.ADAPTATION_LOWER_NODE_LIMIT) / (t.ADAPTATION_UPPER_NODE_LIMIT - t.ADAPTATION_LOWER_NODE_LIMIT) * this.coolingFactor * (1 - t.COOLING_ADAPTATION_FACTOR))), this.maxNodeDisplacement = t.MAX_NODE_DISPLACEMENT_INCREMENTAL) : (a > t.ADAPTATION_LOWER_NODE_LIMIT ? this.coolingFactor = /*#__PURE__*/ Math.max(t.COOLING_ADAPTATION_FACTOR, 1 - (a - t.ADAPTATION_LOWER_NODE_LIMIT) / (t.ADAPTATION_UPPER_NODE_LIMIT - t.ADAPTATION_LOWER_NODE_LIMIT) * (1 - t.COOLING_ADAPTATION_FACTOR)) : this.coolingFactor = 1, this.initialCoolingFactor = this.coolingFactor, this.maxNodeDisplacement = t.MAX_NODE_DISPLACEMENT), this.maxIterations = /*#__PURE__*/ Math.max(this.getAllNodes().length * 5, this.maxIterations), this.totalDisplacementThreshold = this.displacementThresholdPerNode * this.getAllNodes().length, this.repulsionRange = /*#__PURE__*/ this.calcRepulsionRange();
                }, o.prototype.calcSpringForces = function() {
                    for(var a = /*#__PURE__*/ this.getAllEdges(), c, u = 0; u < a.length; u++)c = a[u], this.calcSpringForce(c, c.idealLength);
                }, o.prototype.calcRepulsionForces = function() {
                    var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true, c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, u, v, E, L, y = /*#__PURE__*/ this.getAllNodes(), I;
                    if (this.useFRGridVariant) for(this.totalIterations % t.GRID_CALCULATION_CHECK_PERIOD == 1 && a && this.updateGrid(), I = new Set, u = 0; u < y.length; u++)E = y[u], this.calculateRepulsionForceOfANode(E, I, a, c), I.add(E);
                    else for(u = 0; u < y.length; u++)for(E = y[u], v = u + 1; v < y.length; v++)L = y[v], E.getOwner() == L.getOwner() && this.calcRepulsionForce(E, L);
                }, o.prototype.calcGravitationalForces = function() {
                    for(var a, c = /*#__PURE__*/ this.getAllNodesToApplyGravitation(), u = 0; u < c.length; u++)a = c[u], this.calcGravitationalForce(a);
                }, o.prototype.moveNodes = function() {
                    for(var a = /*#__PURE__*/ this.getAllNodes(), c, u = 0; u < a.length; u++)c = a[u], c.move();
                }, o.prototype.calcSpringForce = function(a, c) {
                    var u = /*#__PURE__*/ a.getSource(), v = /*#__PURE__*/ a.getTarget(), E, L, y, I;
                    if (this.uniformLeafNodeSizes && u.getChild() == null && v.getChild() == null) a.updateLengthSimple();
                    else if (a.updateLength(), a.isOverlapingSourceAndTarget) return;
                    E = /*#__PURE__*/ a.getLength(), E != 0 && (L = this.springConstant * (E - c), y = L * (a.lengthX / E), I = L * (a.lengthY / E), u.springForceX += y, u.springForceY += I, v.springForceX -= y, v.springForceY -= I);
                }, o.prototype.calcRepulsionForce = function(a, c) {
                    var u = /*#__PURE__*/ a.getRect(), v = /*#__PURE__*/ c.getRect(), E = new Array(2), L = new Array(4), y, I, O, R, n, h, g;
                    if (u.intersects(v)) {
                        l.calcSeparationAmount(u, v, E, t.DEFAULT_EDGE_LENGTH / 2), h = 2 * E[0], g = 2 * E[1];
                        var p = a.noOfChildren * c.noOfChildren / (a.noOfChildren + c.noOfChildren);
                        a.repulsionForceX -= p * h, a.repulsionForceY -= p * g, c.repulsionForceX += p * h, c.repulsionForceY += p * g;
                    } else this.uniformLeafNodeSizes && a.getChild() == null && c.getChild() == null ? (y = v.getCenterX() - u.getCenterX(), I = v.getCenterY() - u.getCenterY()) : (l.getIntersection(u, v, L), y = L[2] - L[0], I = L[3] - L[1]), Math.abs(y) < t.MIN_REPULSION_DIST && (y = f.sign(y) * t.MIN_REPULSION_DIST), Math.abs(I) < t.MIN_REPULSION_DIST && (I = f.sign(I) * t.MIN_REPULSION_DIST), O = y * y + I * I, R = /*#__PURE__*/ Math.sqrt(O), n = this.repulsionConstant * a.noOfChildren * c.noOfChildren / O, h = n * y / R, g = n * I / R, a.repulsionForceX -= h, a.repulsionForceY -= g, c.repulsionForceX += h, c.repulsionForceY += g;
                }, o.prototype.calcGravitationalForce = function(a) {
                    var c, u, v, E, L, y, I, O;
                    c = /*#__PURE__*/ a.getOwner(), u = (c.getRight() + c.getLeft()) / 2, v = (c.getTop() + c.getBottom()) / 2, E = a.getCenterX() - u, L = a.getCenterY() - v, y = Math.abs(E) + a.getWidth() / 2, I = Math.abs(L) + a.getHeight() / 2, a.getOwner() == this.graphManager.getRoot() ? (O = c.getEstimatedSize() * this.gravityRangeFactor, (y > O || I > O) && (a.gravitationForceX = -this.gravityConstant * E, a.gravitationForceY = -this.gravityConstant * L)) : (O = c.getEstimatedSize() * this.compoundGravityRangeFactor, (y > O || I > O) && (a.gravitationForceX = -this.gravityConstant * E * this.compoundGravityConstant, a.gravitationForceY = -this.gravityConstant * L * this.compoundGravityConstant));
                }, o.prototype.isConverged = function() {
                    var a, c = false;
                    return this.totalIterations > this.maxIterations / 3 && (c = Math.abs(this.totalDisplacement - this.oldTotalDisplacement) < 2), a = this.totalDisplacement < this.totalDisplacementThreshold, this.oldTotalDisplacement = this.totalDisplacement, a || c;
                }, o.prototype.animate = function() {
                    this.animationDuringLayout && !this.isSubLayout && (this.notAnimatedIterations == this.animationPeriod ? (this.update(), this.notAnimatedIterations = 0) : this.notAnimatedIterations++);
                }, o.prototype.calcNoOfChildrenForAllNodes = function() {
                    for(var a, c = /*#__PURE__*/ this.graphManager.getAllNodes(), u = 0; u < c.length; u++)a = c[u], a.noOfChildren = /*#__PURE__*/ a.getNoOfChildren();
                }, o.prototype.calcGrid = function(a) {
                    var c = 0, u = 0;
                    c = /*#__PURE__*/ parseInt(/*#__PURE__*/ Math.ceil((a.getRight() - a.getLeft()) / this.repulsionRange)), u = /*#__PURE__*/ parseInt(/*#__PURE__*/ Math.ceil((a.getBottom() - a.getTop()) / this.repulsionRange));
                    for(var v = new Array(c), E = 0; E < c; E++)v[E] = new Array(u);
                    for(var E = 0; E < c; E++)for(var L = 0; L < u; L++)v[E][L] = new Array;
                    return v;
                }, o.prototype.addNodeToGrid = function(a, c, u) {
                    var v = 0, E = 0, L = 0, y = 0;
                    v = /*#__PURE__*/ parseInt(/*#__PURE__*/ Math.floor((a.getRect().x - c) / this.repulsionRange)), E = /*#__PURE__*/ parseInt(/*#__PURE__*/ Math.floor((a.getRect().width + a.getRect().x - c) / this.repulsionRange)), L = /*#__PURE__*/ parseInt(/*#__PURE__*/ Math.floor((a.getRect().y - u) / this.repulsionRange)), y = /*#__PURE__*/ parseInt(/*#__PURE__*/ Math.floor((a.getRect().height + a.getRect().y - u) / this.repulsionRange));
                    for(var I = v; I <= E; I++)for(var O = L; O <= y; O++)this.grid[I][O].push(a), a.setGridCoordinates(v, E, L, y);
                }, o.prototype.updateGrid = function() {
                    var a, c, u = /*#__PURE__*/ this.getAllNodes();
                    for(this.grid = /*#__PURE__*/ this.calcGrid(/*#__PURE__*/ this.graphManager.getRoot()), a = 0; a < u.length; a++)c = u[a], this.addNodeToGrid(c, /*#__PURE__*/ this.graphManager.getRoot().getLeft(), /*#__PURE__*/ this.graphManager.getRoot().getTop());
                }, o.prototype.calculateRepulsionForceOfANode = function(a, c, u, v) {
                    if (this.totalIterations % t.GRID_CALCULATION_CHECK_PERIOD == 1 && u || v) {
                        var E = new Set;
                        a.surrounding = new Array;
                        for(var L, y = this.grid, I = a.startX - 1; I < a.finishX + 2; I++)for(var O = a.startY - 1; O < a.finishY + 2; O++)if (!(I < 0 || O < 0 || I >= y.length || O >= y[0].length)) {
                            for(var R = 0; R < y[I][O].length; R++)if (L = y[I][O][R], !(a.getOwner() != L.getOwner() || a == L) && !c.has(L) && !E.has(L)) {
                                var n = Math.abs(a.getCenterX() - L.getCenterX()) - (a.getWidth() / 2 + L.getWidth() / 2), h = Math.abs(a.getCenterY() - L.getCenterY()) - (a.getHeight() / 2 + L.getHeight() / 2);
                                n <= this.repulsionRange && h <= this.repulsionRange && E.add(L);
                            }
                        }
                        a.surrounding = /*#__PURE__*/ [].concat(/*#__PURE__*/ i(E));
                    }
                    for(I = 0; I < a.surrounding.length; I++)this.calcRepulsionForce(a, a.surrounding[I]);
                }, o.prototype.calcRepulsionRange = function() {
                    return 0;
                }, m.exports = o;
            },
            function(m, A, s) {
                var i = /*#__PURE__*/ s(1), e = /*#__PURE__*/ s(7);
                function t(l, f, o) {
                    i.call(this, l, f, o), this.idealLength = e.DEFAULT_EDGE_LENGTH;
                }
                m$1(t, "FDLayoutEdge"), t.prototype = /*#__PURE__*/ Object.create(i.prototype);
                for(var r in i)t[r] = i[r];
                m.exports = t;
            },
            function(m, A, s) {
                var i = /*#__PURE__*/ s(3);
                function e(r, l, f, o) {
                    i.call(this, r, l, f, o), this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0, this.startX = 0, this.finishX = 0, this.startY = 0, this.finishY = 0, this.surrounding = [];
                }
                m$1(e, "FDLayoutNode"), e.prototype = /*#__PURE__*/ Object.create(i.prototype);
                for(var t in i)e[t] = i[t];
                e.prototype.setGridCoordinates = function(r, l, f, o) {
                    this.startX = r, this.finishX = l, this.startY = f, this.finishY = o;
                }, m.exports = e;
            },
            function(m, A, s) {
                function i(e, t) {
                    this.width = 0, this.height = 0, e !== null && t !== null && (this.height = t, this.width = e);
                }
                m$1(i, "DimensionD"), i.prototype.getWidth = function() {
                    return this.width;
                }, i.prototype.setWidth = function(e) {
                    this.width = e;
                }, i.prototype.getHeight = function() {
                    return this.height;
                }, i.prototype.setHeight = function(e) {
                    this.height = e;
                }, m.exports = i;
            },
            function(m, A, s) {
                var i = /*#__PURE__*/ s(14);
                function e() {
                    this.map = {}, this.keys = [];
                }
                m$1(e, "HashMap"), e.prototype.put = function(t, r) {
                    var l = /*#__PURE__*/ i.createID(t);
                    this.contains(l) || (this.map[l] = r, this.keys.push(t));
                }, e.prototype.contains = function(t) {
                    i.createID(t);
                    return this.map[t] != null;
                }, e.prototype.get = function(t) {
                    var r = /*#__PURE__*/ i.createID(t);
                    return this.map[r];
                }, e.prototype.keySet = function() {
                    return this.keys;
                }, m.exports = e;
            },
            function(m, A, s) {
                var i = /*#__PURE__*/ s(14);
                function e() {
                    this.set = {};
                }
                m$1(e, "HashSet"), e.prototype.add = function(t) {
                    var r = /*#__PURE__*/ i.createID(t);
                    this.contains(r) || (this.set[r] = t);
                }, e.prototype.remove = function(t) {
                    delete this.set[i.createID(t)];
                }, e.prototype.clear = function() {
                    this.set = {};
                }, e.prototype.contains = function(t) {
                    return this.set[i.createID(t)] == t;
                }, e.prototype.isEmpty = function() {
                    return this.size() === 0;
                }, e.prototype.size = function() {
                    return Object.keys(this.set).length;
                }, e.prototype.addAllTo = function(t) {
                    for(var r = /*#__PURE__*/ Object.keys(this.set), l = r.length, f = 0; f < l; f++)t.push(this.set[r[f]]);
                }, e.prototype.size = function() {
                    return Object.keys(this.set).length;
                }, e.prototype.addAll = function(t) {
                    for(var r = t.length, l = 0; l < r; l++){
                        var f = t[l];
                        this.add(f);
                    }
                }, m.exports = e;
            },
            function(m, A, s) {
                var i = /*#__PURE__*/ function() {
                    function l(f, o) {
                        for(var d = 0; d < o.length; d++){
                            var a = o[d];
                            a.enumerable = a.enumerable || false, a.configurable = true, "value" in a && (a.writable = true), Object.defineProperty(f, a.key, a);
                        }
                    }
                    return m$1(l, "defineProperties"), function(f, o, d) {
                        return o && l(f.prototype, o), d && l(f, d), f;
                    };
                }();
                function e(l, f) {
                    if (!(l instanceof f)) throw new TypeError("Cannot call a class as a function");
                }
                m$1(e, "_classCallCheck");
                var t = /*#__PURE__*/ s(11), r = /*#__PURE__*/ function() {
                    function l(f, o) {
                        e(this, l), (o !== null || o !== void 0) && (this.compareFunction = this._defaultCompareFunction);
                        var d = void 0;
                        f instanceof t ? d = /*#__PURE__*/ f.size() : d = f.length, this._quicksort(f, 0, d - 1);
                    }
                    return m$1(l, "Quicksort"), i(l, [
                        {
                            key: "_quicksort",
                            value: /*#__PURE__*/ m$1(function(o, d, a) {
                                if (d < a) {
                                    var c = /*#__PURE__*/ this._partition(o, d, a);
                                    this._quicksort(o, d, c), this._quicksort(o, c + 1, a);
                                }
                            }, "_quicksort")
                        },
                        {
                            key: "_partition",
                            value: /*#__PURE__*/ m$1(function(o, d, a) {
                                for(var c = /*#__PURE__*/ this._get(o, d), u = d, v = a;;){
                                    for(; this.compareFunction(c, /*#__PURE__*/ this._get(o, v));)v--;
                                    for(; this.compareFunction(/*#__PURE__*/ this._get(o, u), c);)u++;
                                    if (u < v) this._swap(o, u, v), u++, v--;
                                    else return v;
                                }
                            }, "_partition")
                        },
                        {
                            key: "_get",
                            value: /*#__PURE__*/ m$1(function(o, d) {
                                return o instanceof t ? o.get_object_at(d) : o[d];
                            }, "_get")
                        },
                        {
                            key: "_set",
                            value: /*#__PURE__*/ m$1(function(o, d, a) {
                                o instanceof t ? o.set_object_at(d, a) : o[d] = a;
                            }, "_set")
                        },
                        {
                            key: "_swap",
                            value: /*#__PURE__*/ m$1(function(o, d, a) {
                                var c = /*#__PURE__*/ this._get(o, d);
                                this._set(o, d, /*#__PURE__*/ this._get(o, a)), this._set(o, a, c);
                            }, "_swap")
                        },
                        {
                            key: "_defaultCompareFunction",
                            value: /*#__PURE__*/ m$1(function(o, d) {
                                return d > o;
                            }, "_defaultCompareFunction")
                        }
                    ]), l;
                }();
                m.exports = r;
            },
            function(m, A, s) {
                var i = /*#__PURE__*/ function() {
                    function r(l, f) {
                        for(var o = 0; o < f.length; o++){
                            var d = f[o];
                            d.enumerable = d.enumerable || false, d.configurable = true, "value" in d && (d.writable = true), Object.defineProperty(l, d.key, d);
                        }
                    }
                    return m$1(r, "defineProperties"), function(l, f, o) {
                        return f && r(l.prototype, f), o && r(l, o), l;
                    };
                }();
                function e(r, l) {
                    if (!(r instanceof l)) throw new TypeError("Cannot call a class as a function");
                }
                m$1(e, "_classCallCheck");
                var t = /*#__PURE__*/ function() {
                    function r(l, f) {
                        var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : -1, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : -1;
                        e(this, r), this.sequence1 = l, this.sequence2 = f, this.match_score = o, this.mismatch_penalty = d, this.gap_penalty = a, this.iMax = l.length + 1, this.jMax = f.length + 1, this.grid = new Array(this.iMax);
                        for(var c = 0; c < this.iMax; c++){
                            this.grid[c] = new Array(this.jMax);
                            for(var u = 0; u < this.jMax; u++)this.grid[c][u] = 0;
                        }
                        this.tracebackGrid = new Array(this.iMax);
                        for(var v = 0; v < this.iMax; v++){
                            this.tracebackGrid[v] = new Array(this.jMax);
                            for(var E = 0; E < this.jMax; E++)this.tracebackGrid[v][E] = [
                                null,
                                null,
                                null
                            ];
                        }
                        this.alignments = [], this.score = -1, this.computeGrids();
                    }
                    return m$1(r, "NeedlemanWunsch"), i(r, [
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
                                for(var f = 1; f < this.jMax; f++)this.grid[0][f] = this.grid[0][f - 1] + this.gap_penalty, this.tracebackGrid[0][f] = [
                                    false,
                                    false,
                                    true
                                ];
                                for(var o = 1; o < this.iMax; o++)this.grid[o][0] = this.grid[o - 1][0] + this.gap_penalty, this.tracebackGrid[o][0] = [
                                    false,
                                    true,
                                    false
                                ];
                                for(var d = 1; d < this.iMax; d++)for(var a = 1; a < this.jMax; a++){
                                    var c = void 0;
                                    this.sequence1[d - 1] === this.sequence2[a - 1] ? c = this.grid[d - 1][a - 1] + this.match_score : c = this.grid[d - 1][a - 1] + this.mismatch_penalty;
                                    var u = this.grid[d - 1][a] + this.gap_penalty, v = this.grid[d][a - 1] + this.gap_penalty, E = [
                                        c,
                                        u,
                                        v
                                    ], L = /*#__PURE__*/ this.arrayAllMaxIndexes(E);
                                    this.grid[d][a] = E[L[0]], this.tracebackGrid[d][a] = [
                                        /*#__PURE__*/ L.includes(0),
                                        /*#__PURE__*/ L.includes(1),
                                        /*#__PURE__*/ L.includes(2)
                                    ];
                                }
                                this.score = this.grid[this.iMax - 1][this.jMax - 1];
                            }, "computeGrids")
                        },
                        {
                            key: "alignmentTraceback",
                            value: /*#__PURE__*/ m$1(function() {
                                var f = [];
                                for(f.push({
                                    pos: [
                                        this.sequence1.length,
                                        this.sequence2.length
                                    ],
                                    seq1: "",
                                    seq2: ""
                                }); f[0];){
                                    var o = f[0], d = this.tracebackGrid[o.pos[0]][o.pos[1]];
                                    d[0] && f.push({
                                        pos: [
                                            o.pos[0] - 1,
                                            o.pos[1] - 1
                                        ],
                                        seq1: this.sequence1[o.pos[0] - 1] + o.seq1,
                                        seq2: this.sequence2[o.pos[1] - 1] + o.seq2
                                    }), d[1] && f.push({
                                        pos: [
                                            o.pos[0] - 1,
                                            o.pos[1]
                                        ],
                                        seq1: this.sequence1[o.pos[0] - 1] + o.seq1,
                                        seq2: "-" + o.seq2
                                    }), d[2] && f.push({
                                        pos: [
                                            o.pos[0],
                                            o.pos[1] - 1
                                        ],
                                        seq1: "-" + o.seq1,
                                        seq2: this.sequence2[o.pos[1] - 1] + o.seq2
                                    }), o.pos[0] === 0 && o.pos[1] === 0 && this.alignments.push({
                                        sequence1: o.seq1,
                                        sequence2: o.seq2
                                    }), f.shift();
                                }
                                return this.alignments;
                            }, "alignmentTraceback")
                        },
                        {
                            key: "getAllIndexes",
                            value: /*#__PURE__*/ m$1(function(f, o) {
                                for(var d = [], a = -1; (a = /*#__PURE__*/ f.indexOf(o, a + 1)) !== -1;)d.push(a);
                                return d;
                            }, "getAllIndexes")
                        },
                        {
                            key: "arrayAllMaxIndexes",
                            value: /*#__PURE__*/ m$1(function(f) {
                                return this.getAllIndexes(f, /*#__PURE__*/ Math.max.apply(null, f));
                            }, "arrayAllMaxIndexes")
                        }
                    ]), r;
                }();
                m.exports = t;
            },
            function(m, A, s) {
                var i = /*#__PURE__*/ m$1(function() {}, "layoutBase");
                i.FDLayout = /*#__PURE__*/ s(18), i.FDLayoutConstants = /*#__PURE__*/ s(7), i.FDLayoutEdge = /*#__PURE__*/ s(19), i.FDLayoutNode = /*#__PURE__*/ s(20), i.DimensionD = /*#__PURE__*/ s(21), i.HashMap = /*#__PURE__*/ s(22), i.HashSet = /*#__PURE__*/ s(23), i.IGeometry = /*#__PURE__*/ s(8), i.IMath = /*#__PURE__*/ s(9), i.Integer = /*#__PURE__*/ s(10), i.Point = /*#__PURE__*/ s(12), i.PointD = /*#__PURE__*/ s(4), i.RandomSeed = /*#__PURE__*/ s(16), i.RectangleD = /*#__PURE__*/ s(13), i.Transform = /*#__PURE__*/ s(17), i.UniqueIDGeneretor = /*#__PURE__*/ s(14), i.Quicksort = /*#__PURE__*/ s(24), i.LinkedList = /*#__PURE__*/ s(11), i.LGraphObject = /*#__PURE__*/ s(2), i.LGraph = /*#__PURE__*/ s(5), i.LEdge = /*#__PURE__*/ s(1), i.LGraphManager = /*#__PURE__*/ s(6), i.LNode = /*#__PURE__*/ s(3), i.Layout = /*#__PURE__*/ s(15), i.LayoutConstants = /*#__PURE__*/ s(0), i.NeedlemanWunsch = /*#__PURE__*/ s(25), m.exports = i;
            },
            function(m, A, s) {
                function i() {
                    this.listeners = [];
                }
                m$1(i, "Emitter");
                var e = i.prototype;
                e.addListener = function(t, r) {
                    this.listeners.push({
                        event: t,
                        callback: r
                    });
                }, e.removeListener = function(t, r) {
                    for(var l = this.listeners.length; l >= 0; l--){
                        var f = this.listeners[l];
                        f.event === t && f.callback === r && this.listeners.splice(l, 1);
                    }
                }, e.emit = function(t, r) {
                    for(var l = 0; l < this.listeners.length; l++){
                        var f = this.listeners[l];
                        t === f.event && f.callback(r);
                    }
                }, m.exports = i;
            }
        ]);
    });
});
var pt = /*#__PURE__*/ n((et, ft)=>{
    m$1(function(A, s) {
        typeof et == "object" && typeof ft == "object" ? ft.exports = /*#__PURE__*/ s(/*#__PURE__*/ ut()) : typeof define == "function" && define.amd ? define([
            "layout-base"
        ], s) : typeof et == "object" ? et.coseBase = /*#__PURE__*/ s(/*#__PURE__*/ ut()) : A.coseBase = /*#__PURE__*/ s(A.layoutBase);
    }, "webpackUniversalModuleDefinition")(et, function(m) {
        return function(A) {
            var s = {};
            function i(e) {
                if (s[e]) return s[e].exports;
                var t = s[e] = {
                    i: e,
                    l: false,
                    exports: {}
                };
                return A[e].call(t.exports, t, t.exports, i), t.l = true, t.exports;
            }
            return m$1(i, "__webpack_require__"), i.m = A, i.c = s, i.i = function(e) {
                return e;
            }, i.d = function(e, t, r) {
                i.o(e, t) || Object.defineProperty(e, t, {
                    configurable: false,
                    enumerable: true,
                    get: r
                });
            }, i.n = function(e) {
                var t = e && e.__esModule ? m$1(function() {
                    return e.default;
                }, "getDefault") : m$1(function() {
                    return e;
                }, "getModuleExports");
                return i.d(t, "a", t), t;
            }, i.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }, i.p = "", i(i.s = 7);
        }([
            function(A, s) {
                A.exports = m;
            },
            function(A, s, i) {
                var e = i(0).FDLayoutConstants;
                function t() {}
                m$1(t, "CoSEConstants");
                for(var r in e)t[r] = e[r];
                t.DEFAULT_USE_MULTI_LEVEL_SCALING = false, t.DEFAULT_RADIAL_SEPARATION = e.DEFAULT_EDGE_LENGTH, t.DEFAULT_COMPONENT_SEPERATION = 60, t.TILE = true, t.TILING_PADDING_VERTICAL = 10, t.TILING_PADDING_HORIZONTAL = 10, t.TREE_REDUCTION_ON_INCREMENTAL = false, A.exports = t;
            },
            function(A, s, i) {
                var e = i(0).FDLayoutEdge;
                function t(l, f, o) {
                    e.call(this, l, f, o);
                }
                m$1(t, "CoSEEdge"), t.prototype = /*#__PURE__*/ Object.create(e.prototype);
                for(var r in e)t[r] = e[r];
                A.exports = t;
            },
            function(A, s, i) {
                var e = i(0).LGraph;
                function t(l, f, o) {
                    e.call(this, l, f, o);
                }
                m$1(t, "CoSEGraph"), t.prototype = /*#__PURE__*/ Object.create(e.prototype);
                for(var r in e)t[r] = e[r];
                A.exports = t;
            },
            function(A, s, i) {
                var e = i(0).LGraphManager;
                function t(l) {
                    e.call(this, l);
                }
                m$1(t, "CoSEGraphManager"), t.prototype = /*#__PURE__*/ Object.create(e.prototype);
                for(var r in e)t[r] = e[r];
                A.exports = t;
            },
            function(A, s, i) {
                var e = i(0).FDLayoutNode, t = i(0).IMath;
                function r(f, o, d, a) {
                    e.call(this, f, o, d, a);
                }
                m$1(r, "CoSENode"), r.prototype = /*#__PURE__*/ Object.create(e.prototype);
                for(var l in e)r[l] = e[l];
                r.prototype.move = function() {
                    var f = /*#__PURE__*/ this.graphManager.getLayout();
                    this.displacementX = f.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.noOfChildren, this.displacementY = f.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.noOfChildren, Math.abs(this.displacementX) > f.coolingFactor * f.maxNodeDisplacement && (this.displacementX = f.coolingFactor * f.maxNodeDisplacement * t.sign(this.displacementX)), Math.abs(this.displacementY) > f.coolingFactor * f.maxNodeDisplacement && (this.displacementY = f.coolingFactor * f.maxNodeDisplacement * t.sign(this.displacementY)), this.child == null ? this.moveBy(this.displacementX, this.displacementY) : this.child.getNodes().length == 0 ? this.moveBy(this.displacementX, this.displacementY) : this.propogateDisplacementToChildren(this.displacementX, this.displacementY), f.totalDisplacement += Math.abs(this.displacementX) + Math.abs(this.displacementY), this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0;
                }, r.prototype.propogateDisplacementToChildren = function(f, o) {
                    for(var d = /*#__PURE__*/ this.getChild().getNodes(), a, c = 0; c < d.length; c++)a = d[c], a.getChild() == null ? (a.moveBy(f, o), a.displacementX += f, a.displacementY += o) : a.propogateDisplacementToChildren(f, o);
                }, r.prototype.setPred1 = function(f) {
                    this.pred1 = f;
                }, r.prototype.getPred1 = function() {
                    return pred1;
                }, r.prototype.getPred2 = function() {
                    return pred2;
                }, r.prototype.setNext = function(f) {
                    this.next = f;
                }, r.prototype.getNext = function() {
                    return next;
                }, r.prototype.setProcessed = function(f) {
                    this.processed = f;
                }, r.prototype.isProcessed = function() {
                    return processed;
                }, A.exports = r;
            },
            function(A, s, i) {
                var e = i(0).FDLayout, t = /*#__PURE__*/ i(4), r = /*#__PURE__*/ i(3), l = /*#__PURE__*/ i(5), f = /*#__PURE__*/ i(2), o = /*#__PURE__*/ i(1), d = i(0).FDLayoutConstants, a = i(0).LayoutConstants, c = i(0).Point, u = i(0).PointD, v = i(0).Layout, E = i(0).Integer, L = i(0).IGeometry, y = i(0).LGraph, I = i(0).Transform;
                function O() {
                    e.call(this), this.toBeTiled = {};
                }
                m$1(O, "CoSELayout"), O.prototype = /*#__PURE__*/ Object.create(e.prototype);
                for(var R in e)O[R] = e[R];
                O.prototype.newGraphManager = function() {
                    var n = new t(this);
                    return this.graphManager = n, n;
                }, O.prototype.newGraph = function(n) {
                    return new r(null, this.graphManager, n);
                }, O.prototype.newNode = function(n) {
                    return new l(this.graphManager, n);
                }, O.prototype.newEdge = function(n) {
                    return new f(null, null, n);
                }, O.prototype.initParameters = function() {
                    e.prototype.initParameters.call(this, arguments), this.isSubLayout || (o.DEFAULT_EDGE_LENGTH < 10 ? this.idealEdgeLength = 10 : this.idealEdgeLength = o.DEFAULT_EDGE_LENGTH, this.useSmartIdealEdgeLengthCalculation = o.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.springConstant = d.DEFAULT_SPRING_STRENGTH, this.repulsionConstant = d.DEFAULT_REPULSION_STRENGTH, this.gravityConstant = d.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = d.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = d.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = d.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.prunedNodesAll = [], this.growTreeIterations = 0, this.afterGrowthIterations = 0, this.isTreeGrowing = false, this.isGrowthFinished = false, this.coolingCycle = 0, this.maxCoolingCycle = this.maxIterations / d.CONVERGENCE_CHECK_PERIOD, this.finalTemperature = d.CONVERGENCE_CHECK_PERIOD / this.maxIterations, this.coolingAdjuster = 1);
                }, O.prototype.layout = function() {
                    var n = a.DEFAULT_CREATE_BENDS_AS_NEEDED;
                    return n && (this.createBendpoints(), this.graphManager.resetAllEdges()), this.level = 0, this.classicLayout();
                }, O.prototype.classicLayout = function() {
                    if (this.nodesWithGravity = /*#__PURE__*/ this.calculateNodesToApplyGravitationTo(), this.graphManager.setAllNodesToApplyGravitation(this.nodesWithGravity), this.calcNoOfChildrenForAllNodes(), this.graphManager.calcLowestCommonAncestors(), this.graphManager.calcInclusionTreeDepths(), this.graphManager.getRoot().calcEstimatedSize(), this.calcIdealEdgeLengths(), this.incremental) {
                        if (o.TREE_REDUCTION_ON_INCREMENTAL) {
                            this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
                            var h = new Set(this.getAllNodes()), g = /*#__PURE__*/ this.nodesWithGravity.filter(function(D) {
                                return h.has(D);
                            });
                            this.graphManager.setAllNodesToApplyGravitation(g);
                        }
                    } else {
                        var n = /*#__PURE__*/ this.getFlatForest();
                        if (n.length > 0) this.positionNodesRadially(n);
                        else {
                            this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
                            var h = new Set(this.getAllNodes()), g = /*#__PURE__*/ this.nodesWithGravity.filter(function(p) {
                                return h.has(p);
                            });
                            this.graphManager.setAllNodesToApplyGravitation(g), this.positionNodesRandomly();
                        }
                    }
                    return this.initSpringEmbedder(), this.runSpringEmbedder(), true;
                }, O.prototype.tick = function() {
                    if (this.totalIterations++, this.totalIterations === this.maxIterations && !this.isTreeGrowing && !this.isGrowthFinished) if (this.prunedNodesAll.length > 0) this.isTreeGrowing = true;
                    else return true;
                    if (this.totalIterations % d.CONVERGENCE_CHECK_PERIOD == 0 && !this.isTreeGrowing && !this.isGrowthFinished) {
                        if (this.isConverged()) if (this.prunedNodesAll.length > 0) this.isTreeGrowing = true;
                        else return true;
                        this.coolingCycle++, this.layoutQuality == 0 ? this.coolingAdjuster = this.coolingCycle : this.layoutQuality == 1 && (this.coolingAdjuster = this.coolingCycle / 3), this.coolingFactor = /*#__PURE__*/ Math.max(this.initialCoolingFactor - Math.pow(this.coolingCycle, Math.log(100 * (this.initialCoolingFactor - this.finalTemperature)) / Math.log(this.maxCoolingCycle)) / 100 * this.coolingAdjuster, this.finalTemperature), this.animationPeriod = /*#__PURE__*/ Math.ceil(this.initialAnimationPeriod * Math.sqrt(this.coolingFactor));
                    }
                    if (this.isTreeGrowing) {
                        if (this.growTreeIterations % 10 == 0) if (this.prunedNodesAll.length > 0) {
                            this.graphManager.updateBounds(), this.updateGrid(), this.growTree(this.prunedNodesAll), this.graphManager.resetAllNodesToApplyGravitation();
                            var n = new Set(this.getAllNodes()), h = /*#__PURE__*/ this.nodesWithGravity.filter(function(T) {
                                return n.has(T);
                            });
                            this.graphManager.setAllNodesToApplyGravitation(h), this.graphManager.updateBounds(), this.updateGrid(), this.coolingFactor = d.DEFAULT_COOLING_FACTOR_INCREMENTAL;
                        } else this.isTreeGrowing = false, this.isGrowthFinished = true;
                        this.growTreeIterations++;
                    }
                    if (this.isGrowthFinished) {
                        if (this.isConverged()) return true;
                        this.afterGrowthIterations % 10 == 0 && (this.graphManager.updateBounds(), this.updateGrid()), this.coolingFactor = d.DEFAULT_COOLING_FACTOR_INCREMENTAL * ((100 - this.afterGrowthIterations) / 100), this.afterGrowthIterations++;
                    }
                    var g = !this.isTreeGrowing && !this.isGrowthFinished, p = this.growTreeIterations % 10 == 1 && this.isTreeGrowing || this.afterGrowthIterations % 10 == 1 && this.isGrowthFinished;
                    return this.totalDisplacement = 0, this.graphManager.updateBounds(), this.calcSpringForces(), this.calcRepulsionForces(g, p), this.calcGravitationalForces(), this.moveNodes(), this.animate(), false;
                }, O.prototype.getPositionsData = function() {
                    for(var n = /*#__PURE__*/ this.graphManager.getAllNodes(), h = {}, g = 0; g < n.length; g++){
                        var p = n[g].rect, T = n[g].id;
                        h[T] = {
                            id: T,
                            x: /*#__PURE__*/ p.getCenterX(),
                            y: /*#__PURE__*/ p.getCenterY(),
                            w: p.width,
                            h: p.height
                        };
                    }
                    return h;
                }, O.prototype.runSpringEmbedder = function() {
                    this.initialAnimationPeriod = 25, this.animationPeriod = this.initialAnimationPeriod;
                    var n = false;
                    if (d.ANIMATE === "during") this.emit("layoutstarted");
                    else {
                        for(; !n;)n = /*#__PURE__*/ this.tick();
                        this.graphManager.updateBounds();
                    }
                }, O.prototype.calculateNodesToApplyGravitationTo = function() {
                    var n = [], h, g = /*#__PURE__*/ this.graphManager.getGraphs(), p = g.length, T;
                    for(T = 0; T < p; T++)h = g[T], h.updateConnected(), h.isConnected || (n = /*#__PURE__*/ n.concat(/*#__PURE__*/ h.getNodes()));
                    return n;
                }, O.prototype.createBendpoints = function() {
                    var n = [];
                    n = /*#__PURE__*/ n.concat(/*#__PURE__*/ this.graphManager.getAllEdges());
                    var h = new Set, g;
                    for(g = 0; g < n.length; g++){
                        var p = n[g];
                        if (!h.has(p)) {
                            var T = /*#__PURE__*/ p.getSource(), D = /*#__PURE__*/ p.getTarget();
                            if (T == D) p.getBendpoints().push(new u), p.getBendpoints().push(new u), this.createDummyNodesForBendpoints(p), h.add(p);
                            else {
                                var C = [];
                                if (C = /*#__PURE__*/ C.concat(/*#__PURE__*/ T.getEdgeListToNode(D)), C = /*#__PURE__*/ C.concat(/*#__PURE__*/ D.getEdgeListToNode(T)), !h.has(C[0])) {
                                    if (C.length > 1) {
                                        var M;
                                        for(M = 0; M < C.length; M++){
                                            var x = C[M];
                                            x.getBendpoints().push(new u), this.createDummyNodesForBendpoints(x);
                                        }
                                    }
                                    C.forEach(function(P) {
                                        h.add(P);
                                    });
                                }
                            }
                        }
                        if (h.size == n.length) break;
                    }
                }, O.prototype.positionNodesRadially = function(n) {
                    for(var h = new c(0, 0), g = /*#__PURE__*/ Math.ceil(/*#__PURE__*/ Math.sqrt(n.length)), p = 0, T = 0, D = 0, C = new u(0, 0), M = 0; M < n.length; M++){
                        M % g == 0 && (D = 0, T = p, M != 0 && (T += o.DEFAULT_COMPONENT_SEPERATION), p = 0);
                        var x = n[M], P = /*#__PURE__*/ v.findCenterOfTree(x);
                        h.x = D, h.y = T, C = /*#__PURE__*/ O.radialLayout(x, P, h), C.y > p && (p = /*#__PURE__*/ Math.floor(C.y)), D = /*#__PURE__*/ Math.floor(C.x + o.DEFAULT_COMPONENT_SEPERATION);
                    }
                    this.transform(new u(a.WORLD_CENTER_X - C.x / 2, a.WORLD_CENTER_Y - C.y / 2));
                }, O.radialLayout = function(n, h, g) {
                    var p = /*#__PURE__*/ Math.max(/*#__PURE__*/ this.maxDiagonalInTree(n), o.DEFAULT_RADIAL_SEPARATION);
                    O.branchRadialLayout(h, null, 0, 359, 0, p);
                    var T = /*#__PURE__*/ y.calculateBounds(n), D = new I;
                    D.setDeviceOrgX(/*#__PURE__*/ T.getMinX()), D.setDeviceOrgY(/*#__PURE__*/ T.getMinY()), D.setWorldOrgX(g.x), D.setWorldOrgY(g.y);
                    for(var C = 0; C < n.length; C++){
                        var M = n[C];
                        M.transform(D);
                    }
                    var x = new u(T.getMaxX(), T.getMaxY());
                    return D.inverseTransformPoint(x);
                }, O.branchRadialLayout = function(n, h, g, p, T, D) {
                    var C = (p - g + 1) / 2;
                    C < 0 && (C += 180);
                    var M = (C + g) % 360, x = M * L.TWO_PI / 360, U = T * Math.cos(x), G = T * Math.sin(x);
                    n.setCenter(U, G);
                    var w = [];
                    w = /*#__PURE__*/ w.concat(/*#__PURE__*/ n.getEdges());
                    var b = w.length;
                    h != null && b--;
                    for(var S = 0, F = w.length, X, _ = /*#__PURE__*/ n.getEdgesBetween(h); _.length > 1;){
                        var k = _[0];
                        _.splice(0, 1);
                        var Z = /*#__PURE__*/ w.indexOf(k);
                        Z >= 0 && w.splice(Z, 1), F--, b--;
                    }
                    h != null ? X = (w.indexOf(_[0]) + 1) % F : X = 0;
                    for(var W = Math.abs(p - g) / b, Y = X; S != b; Y = ++Y % F){
                        var Q = /*#__PURE__*/ w[Y].getOtherEnd(n);
                        if (Q != h) {
                            var B = (g + S * W) % 360, H = (B + W) % 360;
                            O.branchRadialLayout(Q, n, B, H, T + D, D), S++;
                        }
                    }
                }, O.maxDiagonalInTree = function(n) {
                    for(var h = E.MIN_VALUE, g = 0; g < n.length; g++){
                        var p = n[g], T = /*#__PURE__*/ p.getDiagonal();
                        T > h && (h = T);
                    }
                    return h;
                }, O.prototype.calcRepulsionRange = function() {
                    return 2 * (this.level + 1) * this.idealEdgeLength;
                }, O.prototype.groupZeroDegreeMembers = function() {
                    var n = this, h = {};
                    this.memberGroups = {}, this.idToDummyNode = {};
                    for(var g = [], p = /*#__PURE__*/ this.graphManager.getAllNodes(), T = 0; T < p.length; T++){
                        var D = p[T], C = /*#__PURE__*/ D.getParent();
                        this.getNodeDegreeWithChildren(D) === 0 && (C.id == null || !this.getToBeTiled(C)) && g.push(D);
                    }
                    for(var T = 0; T < g.length; T++){
                        var D = g[T], M = D.getParent().id;
                        typeof h[M] > "u" && (h[M] = []), h[M] = /*#__PURE__*/ h[M].concat(D);
                    }
                    Object.keys(h).forEach(function(x) {
                        if (h[x].length > 1) {
                            var P = "DummyCompound_" + x;
                            n.memberGroups[P] = h[x];
                            var U = /*#__PURE__*/ h[x][0].getParent(), G = new l(n.graphManager);
                            G.id = P, G.paddingLeft = U.paddingLeft || 0, G.paddingRight = U.paddingRight || 0, G.paddingBottom = U.paddingBottom || 0, G.paddingTop = U.paddingTop || 0, n.idToDummyNode[P] = G;
                            var w = /*#__PURE__*/ n.getGraphManager().add(/*#__PURE__*/ n.newGraph(), G), b = /*#__PURE__*/ U.getChild();
                            b.add(G);
                            for(var S = 0; S < h[x].length; S++){
                                var F = h[x][S];
                                b.remove(F), w.add(F);
                            }
                        }
                    });
                }, O.prototype.clearCompounds = function() {
                    var n = {}, h = {};
                    this.performDFSOnCompounds();
                    for(var g = 0; g < this.compoundOrder.length; g++)h[this.compoundOrder[g].id] = this.compoundOrder[g], n[this.compoundOrder[g].id] = /*#__PURE__*/ [].concat(/*#__PURE__*/ this.compoundOrder[g].getChild().getNodes()), this.graphManager.remove(/*#__PURE__*/ this.compoundOrder[g].getChild()), this.compoundOrder[g].child = null;
                    this.graphManager.resetAllNodes(), this.tileCompoundMembers(n, h);
                }, O.prototype.clearZeroDegreeMembers = function() {
                    var n = this, h = this.tiledZeroDegreePack = [];
                    Object.keys(this.memberGroups).forEach(function(g) {
                        var p = n.idToDummyNode[g];
                        h[g] = /*#__PURE__*/ n.tileNodes(n.memberGroups[g], p.paddingLeft + p.paddingRight), p.rect.width = h[g].width, p.rect.height = h[g].height;
                    });
                }, O.prototype.repopulateCompounds = function() {
                    for(var n = this.compoundOrder.length - 1; n >= 0; n--){
                        var h = this.compoundOrder[n], g = h.id, p = h.paddingLeft, T = h.paddingTop;
                        this.adjustLocations(this.tiledMemberPack[g], h.rect.x, h.rect.y, p, T);
                    }
                }, O.prototype.repopulateZeroDegreeMembers = function() {
                    var n = this, h = this.tiledZeroDegreePack;
                    Object.keys(h).forEach(function(g) {
                        var p = n.idToDummyNode[g], T = p.paddingLeft, D = p.paddingTop;
                        n.adjustLocations(h[g], p.rect.x, p.rect.y, T, D);
                    });
                }, O.prototype.getToBeTiled = function(n) {
                    var h = n.id;
                    if (this.toBeTiled[h] != null) return this.toBeTiled[h];
                    var g = /*#__PURE__*/ n.getChild();
                    if (g == null) return this.toBeTiled[h] = false, false;
                    for(var p = /*#__PURE__*/ g.getNodes(), T = 0; T < p.length; T++){
                        var D = p[T];
                        if (this.getNodeDegree(D) > 0) return this.toBeTiled[h] = false, false;
                        if (D.getChild() == null) {
                            this.toBeTiled[D.id] = false;
                            continue;
                        }
                        if (!this.getToBeTiled(D)) return this.toBeTiled[h] = false, false;
                    }
                    return this.toBeTiled[h] = true, true;
                }, O.prototype.getNodeDegree = function(n) {
                    for(var h = n.id, g = /*#__PURE__*/ n.getEdges(), p = 0, T = 0; T < g.length; T++){
                        var D = g[T];
                        D.getSource().id !== D.getTarget().id && (p = p + 1);
                    }
                    return p;
                }, O.prototype.getNodeDegreeWithChildren = function(n) {
                    var h = /*#__PURE__*/ this.getNodeDegree(n);
                    if (n.getChild() == null) return h;
                    for(var g = /*#__PURE__*/ n.getChild().getNodes(), p = 0; p < g.length; p++){
                        var T = g[p];
                        h += /*#__PURE__*/ this.getNodeDegreeWithChildren(T);
                    }
                    return h;
                }, O.prototype.performDFSOnCompounds = function() {
                    this.compoundOrder = [], this.fillCompexOrderByDFS(/*#__PURE__*/ this.graphManager.getRoot().getNodes());
                }, O.prototype.fillCompexOrderByDFS = function(n) {
                    for(var h = 0; h < n.length; h++){
                        var g = n[h];
                        g.getChild() != null && this.fillCompexOrderByDFS(/*#__PURE__*/ g.getChild().getNodes()), this.getToBeTiled(g) && this.compoundOrder.push(g);
                    }
                }, O.prototype.adjustLocations = function(n, h, g, p, T) {
                    h += p, g += T;
                    for(var D = h, C = 0; C < n.rows.length; C++){
                        var M = n.rows[C];
                        h = D;
                        for(var x = 0, P = 0; P < M.length; P++){
                            var U = M[P];
                            U.rect.x = h, U.rect.y = g, h += U.rect.width + n.horizontalPadding, U.rect.height > x && (x = U.rect.height);
                        }
                        g += x + n.verticalPadding;
                    }
                }, O.prototype.tileCompoundMembers = function(n, h) {
                    var g = this;
                    this.tiledMemberPack = [], Object.keys(n).forEach(function(p) {
                        var T = h[p];
                        g.tiledMemberPack[p] = /*#__PURE__*/ g.tileNodes(n[p], T.paddingLeft + T.paddingRight), T.rect.width = g.tiledMemberPack[p].width, T.rect.height = g.tiledMemberPack[p].height;
                    });
                }, O.prototype.tileNodes = function(n, h) {
                    var g = o.TILING_PADDING_VERTICAL, p = o.TILING_PADDING_HORIZONTAL, T = {
                        rows: [],
                        rowWidth: [],
                        rowHeight: [],
                        width: 0,
                        height: h,
                        verticalPadding: g,
                        horizontalPadding: p
                    };
                    n.sort(function(M, x) {
                        return M.rect.width * M.rect.height > x.rect.width * x.rect.height ? -1 : M.rect.width * M.rect.height < x.rect.width * x.rect.height ? 1 : 0;
                    });
                    for(var D = 0; D < n.length; D++){
                        var C = n[D];
                        T.rows.length == 0 ? this.insertNodeToRow(T, C, 0, h) : this.canAddHorizontal(T, C.rect.width, C.rect.height) ? this.insertNodeToRow(T, C, /*#__PURE__*/ this.getShortestRowIndex(T), h) : this.insertNodeToRow(T, C, T.rows.length, h), this.shiftToLastRow(T);
                    }
                    return T;
                }, O.prototype.insertNodeToRow = function(n, h, g, p) {
                    var T = p;
                    if (g == n.rows.length) {
                        var D = [];
                        n.rows.push(D), n.rowWidth.push(T), n.rowHeight.push(0);
                    }
                    var C = n.rowWidth[g] + h.rect.width;
                    n.rows[g].length > 0 && (C += n.horizontalPadding), n.rowWidth[g] = C, n.width < C && (n.width = C);
                    var M = h.rect.height;
                    g > 0 && (M += n.verticalPadding);
                    var x = 0;
                    M > n.rowHeight[g] && (x = n.rowHeight[g], n.rowHeight[g] = M, x = n.rowHeight[g] - x), n.height += x, n.rows[g].push(h);
                }, O.prototype.getShortestRowIndex = function(n) {
                    for(var h = -1, g = Number.MAX_VALUE, p = 0; p < n.rows.length; p++)n.rowWidth[p] < g && (h = p, g = n.rowWidth[p]);
                    return h;
                }, O.prototype.getLongestRowIndex = function(n) {
                    for(var h = -1, g = Number.MIN_VALUE, p = 0; p < n.rows.length; p++)n.rowWidth[p] > g && (h = p, g = n.rowWidth[p]);
                    return h;
                }, O.prototype.canAddHorizontal = function(n, h, g) {
                    var p = /*#__PURE__*/ this.getShortestRowIndex(n);
                    if (p < 0) return true;
                    var T = n.rowWidth[p];
                    if (T + n.horizontalPadding + h <= n.width) return true;
                    var D = 0;
                    n.rowHeight[p] < g && p > 0 && (D = g + n.verticalPadding - n.rowHeight[p]);
                    var C;
                    n.width - T >= h + n.horizontalPadding ? C = (n.height + D) / (T + h + n.horizontalPadding) : C = (n.height + D) / n.width, D = g + n.verticalPadding;
                    var M;
                    return n.width < h ? M = (n.height + D) / h : M = (n.height + D) / n.width, M < 1 && (M = 1 / M), C < 1 && (C = 1 / C), C < M;
                }, O.prototype.shiftToLastRow = function(n) {
                    var h = /*#__PURE__*/ this.getLongestRowIndex(n), g = n.rowWidth.length - 1, p = n.rows[h], T = p[p.length - 1], D = T.width + n.horizontalPadding;
                    if (n.width - n.rowWidth[g] > D && h != g) {
                        p.splice(-1, 1), n.rows[g].push(T), n.rowWidth[h] = n.rowWidth[h] - D, n.rowWidth[g] = n.rowWidth[g] + D, n.width = n.rowWidth[instance.getLongestRowIndex(n)];
                        for(var C = Number.MIN_VALUE, M = 0; M < p.length; M++)p[M].height > C && (C = p[M].height);
                        h > 0 && (C += n.verticalPadding);
                        var x = n.rowHeight[h] + n.rowHeight[g];
                        n.rowHeight[h] = C, n.rowHeight[g] < T.height + n.verticalPadding && (n.rowHeight[g] = T.height + n.verticalPadding);
                        var P = n.rowHeight[h] + n.rowHeight[g];
                        n.height += P - x, this.shiftToLastRow(n);
                    }
                }, O.prototype.tilingPreLayout = function() {
                    o.TILE && (this.groupZeroDegreeMembers(), this.clearCompounds(), this.clearZeroDegreeMembers());
                }, O.prototype.tilingPostLayout = function() {
                    o.TILE && (this.repopulateZeroDegreeMembers(), this.repopulateCompounds());
                }, O.prototype.reduceTrees = function() {
                    for(var n = [], h = true, g; h;){
                        var p = /*#__PURE__*/ this.graphManager.getAllNodes(), T = [];
                        h = false;
                        for(var D = 0; D < p.length; D++)g = p[D], g.getEdges().length == 1 && !g.getEdges()[0].isInterGraph && g.getChild() == null && (T.push([
                            g,
                            g.getEdges()[0],
                            /*#__PURE__*/ g.getOwner()
                        ]), h = true);
                        if (h == true) {
                            for(var C = [], M = 0; M < T.length; M++)T[M][0].getEdges().length == 1 && (C.push(T[M]), T[M][0].getOwner().remove(T[M][0]));
                            n.push(C), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
                        }
                    }
                    this.prunedNodesAll = n;
                }, O.prototype.growTree = function(n) {
                    for(var h = n.length, g = n[h - 1], p, T = 0; T < g.length; T++)p = g[T], this.findPlaceforPrunedNode(p), p[2].add(p[0]), p[2].add(p[1], p[1].source, p[1].target);
                    n.splice(n.length - 1, 1), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
                }, O.prototype.findPlaceforPrunedNode = function(n) {
                    var h, g, p = n[0];
                    p == n[1].source ? g = n[1].target : g = n[1].source;
                    var T = g.startX, D = g.finishX, C = g.startY, M = g.finishY, x = 0, P = 0, U = 0, G = 0, w = [
                        x,
                        U,
                        P,
                        G
                    ];
                    if (C > 0) for(var b = T; b <= D; b++)w[0] += this.grid[b][C - 1].length + this.grid[b][C].length - 1;
                    if (D < this.grid.length - 1) for(var b = C; b <= M; b++)w[1] += this.grid[D + 1][b].length + this.grid[D][b].length - 1;
                    if (M < this.grid[0].length - 1) for(var b = T; b <= D; b++)w[2] += this.grid[b][M + 1].length + this.grid[b][M].length - 1;
                    if (T > 0) for(var b = C; b <= M; b++)w[3] += this.grid[T - 1][b].length + this.grid[T][b].length - 1;
                    for(var S = E.MAX_VALUE, F, X, _ = 0; _ < w.length; _++)w[_] < S ? (S = w[_], F = 1, X = _) : w[_] == S && F++;
                    if (F == 3 && S == 0) w[0] == 0 && w[1] == 0 && w[2] == 0 ? h = 1 : w[0] == 0 && w[1] == 0 && w[3] == 0 ? h = 0 : w[0] == 0 && w[2] == 0 && w[3] == 0 ? h = 3 : w[1] == 0 && w[2] == 0 && w[3] == 0 && (h = 2);
                    else if (F == 2 && S == 0) {
                        var k = /*#__PURE__*/ Math.floor(Math.random() * 2);
                        w[0] == 0 && w[1] == 0 ? k == 0 ? h = 0 : h = 1 : w[0] == 0 && w[2] == 0 ? k == 0 ? h = 0 : h = 2 : w[0] == 0 && w[3] == 0 ? k == 0 ? h = 0 : h = 3 : w[1] == 0 && w[2] == 0 ? k == 0 ? h = 1 : h = 2 : w[1] == 0 && w[3] == 0 ? k == 0 ? h = 1 : h = 3 : k == 0 ? h = 2 : h = 3;
                    } else if (F == 4 && S == 0) {
                        var k = /*#__PURE__*/ Math.floor(Math.random() * 4);
                        h = k;
                    } else h = X;
                    h == 0 ? p.setCenter(/*#__PURE__*/ g.getCenterX(), g.getCenterY() - g.getHeight() / 2 - d.DEFAULT_EDGE_LENGTH - p.getHeight() / 2) : h == 1 ? p.setCenter(g.getCenterX() + g.getWidth() / 2 + d.DEFAULT_EDGE_LENGTH + p.getWidth() / 2, /*#__PURE__*/ g.getCenterY()) : h == 2 ? p.setCenter(/*#__PURE__*/ g.getCenterX(), g.getCenterY() + g.getHeight() / 2 + d.DEFAULT_EDGE_LENGTH + p.getHeight() / 2) : p.setCenter(g.getCenterX() - g.getWidth() / 2 - d.DEFAULT_EDGE_LENGTH - p.getWidth() / 2, /*#__PURE__*/ g.getCenterY());
                }, A.exports = O;
            },
            function(A, s, i) {
                var e = {};
                e.layoutBase = /*#__PURE__*/ i(0), e.CoSEConstants = /*#__PURE__*/ i(1), e.CoSEEdge = /*#__PURE__*/ i(2), e.CoSEGraph = /*#__PURE__*/ i(3), e.CoSEGraphManager = /*#__PURE__*/ i(4), e.CoSELayout = /*#__PURE__*/ i(6), e.CoSENode = /*#__PURE__*/ i(5), A.exports = e;
            }
        ]);
    });
});
var It = /*#__PURE__*/ n((it, dt)=>{
    m$1(function(A, s) {
        typeof it == "object" && typeof dt == "object" ? dt.exports = /*#__PURE__*/ s(/*#__PURE__*/ pt()) : typeof define == "function" && define.amd ? define([
            "cose-base"
        ], s) : typeof it == "object" ? it.cytoscapeCoseBilkent = /*#__PURE__*/ s(/*#__PURE__*/ pt()) : A.cytoscapeCoseBilkent = /*#__PURE__*/ s(A.coseBase);
    }, "webpackUniversalModuleDefinition")(it, function(m) {
        return function(A) {
            var s = {};
            function i(e) {
                if (s[e]) return s[e].exports;
                var t = s[e] = {
                    i: e,
                    l: false,
                    exports: {}
                };
                return A[e].call(t.exports, t, t.exports, i), t.l = true, t.exports;
            }
            return m$1(i, "__webpack_require__"), i.m = A, i.c = s, i.i = function(e) {
                return e;
            }, i.d = function(e, t, r) {
                i.o(e, t) || Object.defineProperty(e, t, {
                    configurable: false,
                    enumerable: true,
                    get: r
                });
            }, i.n = function(e) {
                var t = e && e.__esModule ? m$1(function() {
                    return e.default;
                }, "getDefault") : m$1(function() {
                    return e;
                }, "getModuleExports");
                return i.d(t, "a", t), t;
            }, i.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }, i.p = "", i(i.s = 1);
        }([
            function(A, s) {
                A.exports = m;
            },
            function(A, s, i) {
                var e = i(0).layoutBase.LayoutConstants, t = i(0).layoutBase.FDLayoutConstants, r = i(0).CoSEConstants, l = i(0).CoSELayout, f = i(0).CoSENode, o = i(0).layoutBase.PointD, d = i(0).layoutBase.DimensionD, a = {
                    ready: /*#__PURE__*/ m$1(function() {}, "ready"),
                    stop: /*#__PURE__*/ m$1(function() {}, "stop"),
                    quality: "default",
                    nodeDimensionsIncludeLabels: false,
                    refresh: 30,
                    fit: true,
                    padding: 10,
                    randomize: true,
                    nodeRepulsion: 4500,
                    idealEdgeLength: 50,
                    edgeElasticity: .45,
                    nestingFactor: .1,
                    gravity: .25,
                    numIter: 2500,
                    tile: true,
                    animate: "end",
                    animationDuration: 500,
                    tilingPaddingVertical: 10,
                    tilingPaddingHorizontal: 10,
                    gravityRangeCompound: 1.5,
                    gravityCompound: 1,
                    gravityRange: 3.8,
                    initialEnergyOnIncremental: .5
                };
                function c(L, y) {
                    var I = {};
                    for(var O in L)I[O] = L[O];
                    for(var O in y)I[O] = y[O];
                    return I;
                }
                m$1(c, "extend");
                function u(L) {
                    this.options = /*#__PURE__*/ c(a, L), v(this.options);
                }
                m$1(u, "_CoSELayout");
                var v = /*#__PURE__*/ m$1(function(y) {
                    y.nodeRepulsion != null && (r.DEFAULT_REPULSION_STRENGTH = t.DEFAULT_REPULSION_STRENGTH = y.nodeRepulsion), y.idealEdgeLength != null && (r.DEFAULT_EDGE_LENGTH = t.DEFAULT_EDGE_LENGTH = y.idealEdgeLength), y.edgeElasticity != null && (r.DEFAULT_SPRING_STRENGTH = t.DEFAULT_SPRING_STRENGTH = y.edgeElasticity), y.nestingFactor != null && (r.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = t.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = y.nestingFactor), y.gravity != null && (r.DEFAULT_GRAVITY_STRENGTH = t.DEFAULT_GRAVITY_STRENGTH = y.gravity), y.numIter != null && (r.MAX_ITERATIONS = t.MAX_ITERATIONS = y.numIter), y.gravityRange != null && (r.DEFAULT_GRAVITY_RANGE_FACTOR = t.DEFAULT_GRAVITY_RANGE_FACTOR = y.gravityRange), y.gravityCompound != null && (r.DEFAULT_COMPOUND_GRAVITY_STRENGTH = t.DEFAULT_COMPOUND_GRAVITY_STRENGTH = y.gravityCompound), y.gravityRangeCompound != null && (r.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = t.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = y.gravityRangeCompound), y.initialEnergyOnIncremental != null && (r.DEFAULT_COOLING_FACTOR_INCREMENTAL = t.DEFAULT_COOLING_FACTOR_INCREMENTAL = y.initialEnergyOnIncremental), y.quality == "draft" ? e.QUALITY = 0 : y.quality == "proof" ? e.QUALITY = 2 : e.QUALITY = 1, r.NODE_DIMENSIONS_INCLUDE_LABELS = t.NODE_DIMENSIONS_INCLUDE_LABELS = e.NODE_DIMENSIONS_INCLUDE_LABELS = y.nodeDimensionsIncludeLabels, r.DEFAULT_INCREMENTAL = t.DEFAULT_INCREMENTAL = e.DEFAULT_INCREMENTAL = !y.randomize, r.ANIMATE = t.ANIMATE = e.ANIMATE = y.animate, r.TILE = y.tile, r.TILING_PADDING_VERTICAL = typeof y.tilingPaddingVertical == "function" ? y.tilingPaddingVertical.call() : y.tilingPaddingVertical, r.TILING_PADDING_HORIZONTAL = typeof y.tilingPaddingHorizontal == "function" ? y.tilingPaddingHorizontal.call() : y.tilingPaddingHorizontal;
                }, "getUserOptions");
                u.prototype.run = function() {
                    var L, y, I = this.options;
                    this.idToLNode = {};
                    var R = this.layout = new l, n = this;
                    n.stopped = false, this.cy = this.options.cy, this.cy.trigger({
                        type: "layoutstart",
                        layout: this
                    });
                    var h = /*#__PURE__*/ R.newGraphManager();
                    this.gm = h;
                    var g = /*#__PURE__*/ this.options.eles.nodes(), p = /*#__PURE__*/ this.options.eles.edges();
                    this.root = /*#__PURE__*/ h.addRoot(), this.processChildrenList(this.root, /*#__PURE__*/ this.getTopMostNodes(g), R);
                    for(var T = 0; T < p.length; T++){
                        var D = p[T], C = this.idToLNode[D.data("source")], M = this.idToLNode[D.data("target")];
                        if (C !== M && C.getEdgesBetween(M).length == 0) {
                            var x = /*#__PURE__*/ h.add(/*#__PURE__*/ R.newEdge(), C, M);
                            x.id = /*#__PURE__*/ D.id();
                        }
                    }
                    var P = /*#__PURE__*/ m$1(function(w, b) {
                        typeof w == "number" && (w = b);
                        var S = /*#__PURE__*/ w.data("id"), F = n.idToLNode[S];
                        return {
                            x: /*#__PURE__*/ F.getRect().getCenterX(),
                            y: /*#__PURE__*/ F.getRect().getCenterY()
                        };
                    }, "getPositions"), U = /*#__PURE__*/ m$1(function G() {
                        for(var w = /*#__PURE__*/ m$1(function() {
                            I.fit && I.cy.fit(I.eles, I.padding), L || (L = true, n.cy.one("layoutready", I.ready), n.cy.trigger({
                                type: "layoutready",
                                layout: n
                            }));
                        }, "afterReposition"), b = n.options.refresh, S, F = 0; F < b && !S; F++)S = n.stopped || n.layout.tick();
                        if (S) {
                            R.checkLayoutSuccess() && !R.isSubLayout && R.doPostLayout(), R.tilingPostLayout && R.tilingPostLayout(), R.isLayoutFinished = true, n.options.eles.nodes().positions(P), w(), n.cy.one("layoutstop", n.options.stop), n.cy.trigger({
                                type: "layoutstop",
                                layout: n
                            }), y && cancelAnimationFrame(y), L = false;
                            return;
                        }
                        var X = /*#__PURE__*/ n.layout.getPositionsData();
                        I.eles.nodes().positions(function(_, k) {
                            if (typeof _ == "number" && (_ = k), !_.isParent()) {
                                for(var Z = /*#__PURE__*/ _.id(), W = X[Z], Y = _; W == null && (W = X[Y.data("parent")] || X["DummyCompound_" + Y.data("parent")], X[Z] = W, Y = Y.parent()[0], Y != null););
                                return W != null ? {
                                    x: W.x,
                                    y: W.y
                                } : {
                                    x: /*#__PURE__*/ _.position("x"),
                                    y: /*#__PURE__*/ _.position("y")
                                };
                            }
                        }), w(), y = /*#__PURE__*/ requestAnimationFrame(G);
                    }, "iterateAnimated");
                    return R.addListener("layoutstarted", function() {
                        n.options.animate === "during" && (y = /*#__PURE__*/ requestAnimationFrame(U));
                    }), R.runLayout(), this.options.animate !== "during" && (n.options.eles.nodes().not(":parent").layoutPositions(n, n.options, P), L = false), this;
                }, u.prototype.getTopMostNodes = function(L) {
                    for(var y = {}, I = 0; I < L.length; I++)y[L[I].id()] = true;
                    var O = /*#__PURE__*/ L.filter(function(R, n) {
                        typeof R == "number" && (R = n);
                        for(var h = R.parent()[0]; h != null;){
                            if (y[h.id()]) return false;
                            h = h.parent()[0];
                        }
                        return true;
                    });
                    return O;
                }, u.prototype.processChildrenList = function(L, y, I) {
                    for(var O = y.length, R = 0; R < O; R++){
                        var n = y[R], h = /*#__PURE__*/ n.children(), g, p = /*#__PURE__*/ n.layoutDimensions({
                            nodeDimensionsIncludeLabels: this.options.nodeDimensionsIncludeLabels
                        });
                        if (n.outerWidth() != null && n.outerHeight() != null ? g = /*#__PURE__*/ L.add(new f(I.graphManager, new o(n.position("x") - p.w / 2, n.position("y") - p.h / 2), new d(parseFloat(p.w), parseFloat(p.h)))) : g = /*#__PURE__*/ L.add(new f(this.graphManager)), g.id = /*#__PURE__*/ n.data("id"), g.paddingLeft = /*#__PURE__*/ parseInt(/*#__PURE__*/ n.css("padding")), g.paddingTop = /*#__PURE__*/ parseInt(/*#__PURE__*/ n.css("padding")), g.paddingRight = /*#__PURE__*/ parseInt(/*#__PURE__*/ n.css("padding")), g.paddingBottom = /*#__PURE__*/ parseInt(/*#__PURE__*/ n.css("padding")), this.options.nodeDimensionsIncludeLabels && n.isParent()) {
                            var T = n.boundingBox({
                                includeLabels: true,
                                includeNodes: false
                            }).w, D = n.boundingBox({
                                includeLabels: true,
                                includeNodes: false
                            }).h, C = /*#__PURE__*/ n.css("text-halign");
                            g.labelWidth = T, g.labelHeight = D, g.labelPos = C;
                        }
                        if (this.idToLNode[n.data("id")] = g, isNaN(g.rect.x) && (g.rect.x = 0), isNaN(g.rect.y) && (g.rect.y = 0), h != null && h.length > 0) {
                            var M;
                            M = /*#__PURE__*/ I.getGraphManager().add(/*#__PURE__*/ I.newGraph(), g), this.processChildrenList(M, h, I);
                        }
                    }
                }, u.prototype.stop = function() {
                    return this.stopped = true, this;
                };
                var E = /*#__PURE__*/ m$1(function(y) {
                    y("layout", "cose-bilkent", u);
                }, "register");
                typeof cytoscape < "u" && E(cytoscape), A.exports = E;
            }
        ]);
    });
});
var ct = /*#__PURE__*/ function() {
    var m = /*#__PURE__*/ m$1(function(R, n, h, g) {
        for(h = h || {}, g = R.length; g--; h[R[g]] = n);
        return h;
    }, "o"), A = [
        1,
        4
    ], s = [
        1,
        13
    ], i = [
        1,
        12
    ], e = [
        1,
        15
    ], t = [
        1,
        16
    ], r = [
        1,
        20
    ], l = [
        1,
        19
    ], f = [
        6,
        7,
        8
    ], o = [
        1,
        26
    ], d = [
        1,
        24
    ], a = [
        1,
        25
    ], c = [
        6,
        7,
        11
    ], u = [
        1,
        6,
        13,
        15,
        16,
        19,
        22
    ], v = [
        1,
        33
    ], E = [
        1,
        34
    ], L = [
        1,
        6,
        7,
        11,
        13,
        15,
        16,
        19,
        22
    ], y = {
        trace: /*#__PURE__*/ m$1(function() {}, "trace"),
        yy: {},
        symbols_: {
            error: 2,
            start: 3,
            mindMap: 4,
            spaceLines: 5,
            SPACELINE: 6,
            NL: 7,
            MINDMAP: 8,
            document: 9,
            stop: 10,
            EOF: 11,
            statement: 12,
            SPACELIST: 13,
            node: 14,
            ICON: 15,
            CLASS: 16,
            nodeWithId: 17,
            nodeWithoutId: 18,
            NODE_DSTART: 19,
            NODE_DESCR: 20,
            NODE_DEND: 21,
            NODE_ID: 22,
            $accept: 0,
            $end: 1
        },
        terminals_: {
            2: "error",
            6: "SPACELINE",
            7: "NL",
            8: "MINDMAP",
            11: "EOF",
            13: "SPACELIST",
            15: "ICON",
            16: "CLASS",
            19: "NODE_DSTART",
            20: "NODE_DESCR",
            21: "NODE_DEND",
            22: "NODE_ID"
        },
        productions_: [
            0,
            [
                3,
                1
            ],
            [
                3,
                2
            ],
            [
                5,
                1
            ],
            [
                5,
                2
            ],
            [
                5,
                2
            ],
            [
                4,
                2
            ],
            [
                4,
                3
            ],
            [
                10,
                1
            ],
            [
                10,
                1
            ],
            [
                10,
                1
            ],
            [
                10,
                2
            ],
            [
                10,
                2
            ],
            [
                9,
                3
            ],
            [
                9,
                2
            ],
            [
                12,
                2
            ],
            [
                12,
                2
            ],
            [
                12,
                2
            ],
            [
                12,
                1
            ],
            [
                12,
                1
            ],
            [
                12,
                1
            ],
            [
                12,
                1
            ],
            [
                12,
                1
            ],
            [
                14,
                1
            ],
            [
                14,
                1
            ],
            [
                18,
                3
            ],
            [
                17,
                1
            ],
            [
                17,
                4
            ]
        ],
        performAction: /*#__PURE__*/ m$1(function(n, h, g, p, T, D, C) {
            var M = D.length - 1;
            switch(T){
                case 6:
                case 7:
                    return p;
                case 8:
                    p.getLogger().trace("Stop NL ");
                    break;
                case 9:
                    p.getLogger().trace("Stop EOF ");
                    break;
                case 11:
                    p.getLogger().trace("Stop NL2 ");
                    break;
                case 12:
                    p.getLogger().trace("Stop EOF2 ");
                    break;
                case 15:
                    p.getLogger().info("Node: ", D[M].id), p.addNode(D[M - 1].length, D[M].id, D[M].descr, D[M].type);
                    break;
                case 16:
                    p.getLogger().trace("Icon: ", D[M]), p.decorateNode({
                        icon: D[M]
                    });
                    break;
                case 17:
                case 21:
                    p.decorateNode({
                        class: D[M]
                    });
                    break;
                case 18:
                    p.getLogger().trace("SPACELIST");
                    break;
                case 19:
                    p.getLogger().trace("Node: ", D[M].id), p.addNode(0, D[M].id, D[M].descr, D[M].type);
                    break;
                case 20:
                    p.decorateNode({
                        icon: D[M]
                    });
                    break;
                case 25:
                    p.getLogger().trace("node found ..", D[M - 2]), this.$ = {
                        id: D[M - 1],
                        descr: D[M - 1],
                        type: /*#__PURE__*/ p.getType(D[M - 2], D[M])
                    };
                    break;
                case 26:
                    this.$ = {
                        id: D[M],
                        descr: D[M],
                        type: p.nodeType.DEFAULT
                    };
                    break;
                case 27:
                    p.getLogger().trace("node found ..", D[M - 3]), this.$ = {
                        id: D[M - 3],
                        descr: D[M - 1],
                        type: /*#__PURE__*/ p.getType(D[M - 2], D[M])
                    };
                    break;
            }
        }, "anonymous"),
        table: [
            {
                3: 1,
                4: 2,
                5: 3,
                6: [
                    1,
                    5
                ],
                8: A
            },
            {
                1: [
                    3
                ]
            },
            {
                1: [
                    2,
                    1
                ]
            },
            {
                4: 6,
                6: [
                    1,
                    7
                ],
                7: [
                    1,
                    8
                ],
                8: A
            },
            {
                6: s,
                7: [
                    1,
                    10
                ],
                9: 9,
                12: 11,
                13: i,
                14: 14,
                15: e,
                16: t,
                17: 17,
                18: 18,
                19: r,
                22: l
            },
            /*#__PURE__*/ m(f, [
                2,
                3
            ]),
            {
                1: [
                    2,
                    2
                ]
            },
            /*#__PURE__*/ m(f, [
                2,
                4
            ]),
            /*#__PURE__*/ m(f, [
                2,
                5
            ]),
            {
                1: [
                    2,
                    6
                ],
                6: s,
                12: 21,
                13: i,
                14: 14,
                15: e,
                16: t,
                17: 17,
                18: 18,
                19: r,
                22: l
            },
            {
                6: s,
                9: 22,
                12: 11,
                13: i,
                14: 14,
                15: e,
                16: t,
                17: 17,
                18: 18,
                19: r,
                22: l
            },
            {
                6: o,
                7: d,
                10: 23,
                11: a
            },
            /*#__PURE__*/ m(c, [
                2,
                22
            ], {
                17: 17,
                18: 18,
                14: 27,
                15: [
                    1,
                    28
                ],
                16: [
                    1,
                    29
                ],
                19: r,
                22: l
            }),
            /*#__PURE__*/ m(c, [
                2,
                18
            ]),
            /*#__PURE__*/ m(c, [
                2,
                19
            ]),
            /*#__PURE__*/ m(c, [
                2,
                20
            ]),
            /*#__PURE__*/ m(c, [
                2,
                21
            ]),
            /*#__PURE__*/ m(c, [
                2,
                23
            ]),
            /*#__PURE__*/ m(c, [
                2,
                24
            ]),
            /*#__PURE__*/ m(c, [
                2,
                26
            ], {
                19: [
                    1,
                    30
                ]
            }),
            {
                20: [
                    1,
                    31
                ]
            },
            {
                6: o,
                7: d,
                10: 32,
                11: a
            },
            {
                1: [
                    2,
                    7
                ],
                6: s,
                12: 21,
                13: i,
                14: 14,
                15: e,
                16: t,
                17: 17,
                18: 18,
                19: r,
                22: l
            },
            /*#__PURE__*/ m(u, [
                2,
                14
            ], {
                7: v,
                11: E
            }),
            /*#__PURE__*/ m(L, [
                2,
                8
            ]),
            /*#__PURE__*/ m(L, [
                2,
                9
            ]),
            /*#__PURE__*/ m(L, [
                2,
                10
            ]),
            /*#__PURE__*/ m(c, [
                2,
                15
            ]),
            /*#__PURE__*/ m(c, [
                2,
                16
            ]),
            /*#__PURE__*/ m(c, [
                2,
                17
            ]),
            {
                20: [
                    1,
                    35
                ]
            },
            {
                21: [
                    1,
                    36
                ]
            },
            /*#__PURE__*/ m(u, [
                2,
                13
            ], {
                7: v,
                11: E
            }),
            /*#__PURE__*/ m(L, [
                2,
                11
            ]),
            /*#__PURE__*/ m(L, [
                2,
                12
            ]),
            {
                21: [
                    1,
                    37
                ]
            },
            /*#__PURE__*/ m(c, [
                2,
                25
            ]),
            /*#__PURE__*/ m(c, [
                2,
                27
            ])
        ],
        defaultActions: {
            2: [
                2,
                1
            ],
            6: [
                2,
                2
            ]
        },
        parseError: /*#__PURE__*/ m$1(function(n, h) {
            if (h.recoverable) this.trace(n);
            else {
                var g = new Error(n);
                throw g.hash = h, g;
            }
        }, "parseError"),
        parse: /*#__PURE__*/ m$1(function(n) {
            var h = this, g = [
                0
            ], p = [], T = [
                null
            ], D = [], C = this.table, M = "", x = 0, P = 0, U = 0, G = 2, w = 1, b = /*#__PURE__*/ D.slice.call(arguments, 1), S = /*#__PURE__*/ Object.create(this.lexer), F = {
                yy: {}
            };
            for(var X in this.yy)Object.prototype.hasOwnProperty.call(this.yy, X) && (F.yy[X] = this.yy[X]);
            S.setInput(n, F.yy), F.yy.lexer = S, F.yy.parser = this, typeof S.yylloc > "u" && (S.yylloc = {});
            var _ = S.yylloc;
            D.push(_);
            var k = S.options && S.options.ranges;
            typeof F.yy.parseError == "function" ? this.parseError = F.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
            function Z($) {
                g.length = g.length - 2 * $, T.length = T.length - $, D.length = D.length - $;
            }
            m$1(Z, "popStack");
            function W() {
                var $;
                return $ = p.pop() || S.lex() || w, typeof $ != "number" && ($ instanceof Array && (p = $, $ = /*#__PURE__*/ p.pop()), $ = h.symbols_[$] || $), $;
            }
            m$1(W, "lex");
            for(var Y, Q, B, H, Kt, at, z = {}, rt, V, vt, nt;;){
                if (B = g[g.length - 1], this.defaultActions[B] ? H = this.defaultActions[B] : ((Y === null || typeof Y > "u") && (Y = /*#__PURE__*/ W()), H = C[B] && C[B][Y]), typeof H > "u" || !H.length || !H[0]) {
                    var ot = "";
                    nt = [];
                    for(rt in C[B])this.terminals_[rt] && rt > G && nt.push("'" + this.terminals_[rt] + "'");
                    S.showPosition ? ot = "Parse error on line " + (x + 1) + `:
` + S.showPosition() + `
Expecting ` + nt.join(", ") + ", got '" + (this.terminals_[Y] || Y) + "'" : ot = "Parse error on line " + (x + 1) + ": Unexpected " + (Y == w ? "end of input" : "'" + (this.terminals_[Y] || Y) + "'"), this.parseError(ot, {
                        text: S.match,
                        token: this.terminals_[Y] || Y,
                        line: S.yylineno,
                        loc: _,
                        expected: nt
                    });
                }
                if (H[0] instanceof Array && H.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + B + ", token: " + Y);
                switch(H[0]){
                    case 1:
                        g.push(Y), T.push(S.yytext), D.push(S.yylloc), g.push(H[1]), Y = null, Q ? (Y = Q, Q = null) : (P = S.yyleng, M = S.yytext, x = S.yylineno, _ = S.yylloc, U > 0);
                        break;
                    case 2:
                        if (V = this.productions_[H[1]][1], z.$ = T[T.length - V], z._$ = {
                            first_line: D[D.length - (V || 1)].first_line,
                            last_line: D[D.length - 1].last_line,
                            first_column: D[D.length - (V || 1)].first_column,
                            last_column: D[D.length - 1].last_column
                        }, k && (z._$.range = [
                            D[D.length - (V || 1)].range[0],
                            D[D.length - 1].range[1]
                        ]), at = /*#__PURE__*/ this.performAction.apply(z, /*#__PURE__*/ [
                            M,
                            P,
                            x,
                            F.yy,
                            H[1],
                            T,
                            D
                        ].concat(b)), typeof at < "u") return at;
                        V && (g = /*#__PURE__*/ g.slice(0, -1 * V * 2), T = /*#__PURE__*/ T.slice(0, -1 * V), D = /*#__PURE__*/ D.slice(0, -1 * V)), g.push(this.productions_[H[1]][0]), T.push(z.$), D.push(z._$), vt = C[g[g.length - 2]][g[g.length - 1]], g.push(vt);
                        break;
                    case 3:
                        return true;
                }
            }
            return true;
        }, "parse")
    }, I = /*#__PURE__*/ function() {
        var R = {
            EOF: 1,
            parseError: /*#__PURE__*/ m$1(function(h, g) {
                if (this.yy.parser) this.yy.parser.parseError(h, g);
                else throw new Error(h);
            }, "parseError"),
            setInput: /*#__PURE__*/ m$1(function(n, h) {
                return this.yy = h || this.yy || {}, this._input = n, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = [
                    "INITIAL"
                ], this.yylloc = {
                    first_line: 1,
                    first_column: 0,
                    last_line: 1,
                    last_column: 0
                }, this.options.ranges && (this.yylloc.range = [
                    0,
                    0
                ]), this.offset = 0, this;
            }, "setInput"),
            input: /*#__PURE__*/ m$1(function() {
                var n = this._input[0];
                this.yytext += n, this.yyleng++, this.offset++, this.match += n, this.matched += n;
                var h = /*#__PURE__*/ n.match(/(?:\r\n?|\n).*/g);
                return h ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = /*#__PURE__*/ this._input.slice(1), n;
            }, "input"),
            unput: /*#__PURE__*/ m$1(function(n) {
                var h = n.length, g = /*#__PURE__*/ n.split(/(?:\r\n?|\n)/g);
                this._input = n + this._input, this.yytext = /*#__PURE__*/ this.yytext.substr(0, this.yytext.length - h), this.offset -= h;
                var p = /*#__PURE__*/ this.match.split(/(?:\r\n?|\n)/g);
                this.match = /*#__PURE__*/ this.match.substr(0, this.match.length - 1), this.matched = /*#__PURE__*/ this.matched.substr(0, this.matched.length - 1), g.length - 1 && (this.yylineno -= g.length - 1);
                var T = this.yylloc.range;
                return this.yylloc = {
                    first_line: this.yylloc.first_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.first_column,
                    last_column: g ? (g.length === p.length ? this.yylloc.first_column : 0) + p[p.length - g.length].length - g[0].length : this.yylloc.first_column - h
                }, this.options.ranges && (this.yylloc.range = [
                    T[0],
                    T[0] + this.yyleng - h
                ]), this.yyleng = this.yytext.length, this;
            }, "unput"),
            more: /*#__PURE__*/ m$1(function() {
                return this._more = true, this;
            }, "more"),
            reject: /*#__PURE__*/ m$1(function() {
                if (this.options.backtrack_lexer) this._backtrack = true;
                else return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
                    text: "",
                    token: null,
                    line: this.yylineno
                });
                return this;
            }, "reject"),
            less: /*#__PURE__*/ m$1(function(n) {
                this.unput(/*#__PURE__*/ this.match.slice(n));
            }, "less"),
            pastInput: /*#__PURE__*/ m$1(function() {
                var n = /*#__PURE__*/ this.matched.substr(0, this.matched.length - this.match.length);
                return (n.length > 20 ? "..." : "") + n.substr(-20).replace(/\n/g, "");
            }, "pastInput"),
            upcomingInput: /*#__PURE__*/ m$1(function() {
                var n = this.match;
                return n.length < 20 && (n += /*#__PURE__*/ this._input.substr(0, 20 - n.length)), (n.substr(0, 20) + (n.length > 20 ? "..." : "")).replace(/\n/g, "");
            }, "upcomingInput"),
            showPosition: /*#__PURE__*/ m$1(function() {
                var n = /*#__PURE__*/ this.pastInput(), h = /*#__PURE__*/ new Array(n.length + 1).join("-");
                return n + this.upcomingInput() + `
` + h + "^";
            }, "showPosition"),
            test_match: /*#__PURE__*/ m$1(function(n, h) {
                var g, p, T;
                if (this.options.backtrack_lexer && (T = {
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
                    conditionStack: /*#__PURE__*/ this.conditionStack.slice(0),
                    done: this.done
                }, this.options.ranges && (T.yylloc.range = /*#__PURE__*/ this.yylloc.range.slice(0))), p = /*#__PURE__*/ n[0].match(/(?:\r\n?|\n).*/g), p && (this.yylineno += p.length), this.yylloc = {
                    first_line: this.yylloc.last_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.last_column,
                    last_column: p ? p[p.length - 1].length - p[p.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + n[0].length
                }, this.yytext += n[0], this.match += n[0], this.matches = n, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [
                    this.offset,
                    this.offset += this.yyleng
                ]), this._more = false, this._backtrack = false, this._input = /*#__PURE__*/ this._input.slice(n[0].length), this.matched += n[0], g = /*#__PURE__*/ this.performAction.call(this, this.yy, this, h, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), g) return g;
                if (this._backtrack) {
                    for(var D in T)this[D] = T[D];
                    return false;
                }
                return false;
            }, "test_match"),
            next: /*#__PURE__*/ m$1(function() {
                if (this.done) return this.EOF;
                this._input || (this.done = true);
                var n, h, g, p;
                this._more || (this.yytext = "", this.match = "");
                for(var T = /*#__PURE__*/ this._currentRules(), D = 0; D < T.length; D++)if (g = /*#__PURE__*/ this._input.match(this.rules[T[D]]), g && (!h || g[0].length > h[0].length)) {
                    if (h = g, p = D, this.options.backtrack_lexer) {
                        if (n = /*#__PURE__*/ this.test_match(g, T[D]), n !== false) return n;
                        if (this._backtrack) {
                            h = false;
                            continue;
                        } else return false;
                    } else if (!this.options.flex) break;
                }
                return h ? (n = /*#__PURE__*/ this.test_match(h, T[p]), n !== false ? n : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
                    text: "",
                    token: null,
                    line: this.yylineno
                });
            }, "next"),
            lex: /*#__PURE__*/ m$1(function() {
                var h = /*#__PURE__*/ this.next();
                return h || this.lex();
            }, "lex"),
            begin: /*#__PURE__*/ m$1(function(h) {
                this.conditionStack.push(h);
            }, "begin"),
            popState: /*#__PURE__*/ m$1(function() {
                var h = this.conditionStack.length - 1;
                return h > 0 ? this.conditionStack.pop() : this.conditionStack[0];
            }, "popState"),
            _currentRules: /*#__PURE__*/ m$1(function() {
                return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
            }, "_currentRules"),
            topState: /*#__PURE__*/ m$1(function(h) {
                return h = this.conditionStack.length - 1 - Math.abs(h || 0), h >= 0 ? this.conditionStack[h] : "INITIAL";
            }, "topState"),
            pushState: /*#__PURE__*/ m$1(function(h) {
                this.begin(h);
            }, "pushState"),
            stateStackSize: /*#__PURE__*/ m$1(function() {
                return this.conditionStack.length;
            }, "stateStackSize"),
            options: {
                "case-insensitive": true
            },
            performAction: /*#__PURE__*/ m$1(function(h, g, p, T) {
                switch(p){
                    case 0:
                        return h.getLogger().trace("Found comment", g.yytext), 6;
                    case 1:
                        return 8;
                    case 2:
                        this.begin("CLASS");
                        break;
                    case 3:
                        return this.popState(), 16;
                    case 4:
                        this.popState();
                        break;
                    case 5:
                        h.getLogger().trace("Begin icon"), this.begin("ICON");
                        break;
                    case 6:
                        return h.getLogger().trace("SPACELINE"), 6;
                    case 7:
                        return 7;
                    case 8:
                        return 15;
                    case 9:
                        h.getLogger().trace("end icon"), this.popState();
                        break;
                    case 10:
                        return h.getLogger().trace("Exploding node"), this.begin("NODE"), 19;
                    case 11:
                        return h.getLogger().trace("Cloud"), this.begin("NODE"), 19;
                    case 12:
                        return h.getLogger().trace("Explosion Bang"), this.begin("NODE"), 19;
                    case 13:
                        return h.getLogger().trace("Cloud Bang"), this.begin("NODE"), 19;
                    case 14:
                        return this.begin("NODE"), 19;
                    case 15:
                        return this.begin("NODE"), 19;
                    case 16:
                        return this.begin("NODE"), 19;
                    case 17:
                        return this.begin("NODE"), 19;
                    case 18:
                        return 13;
                    case 19:
                        return 22;
                    case 20:
                        return 11;
                    case 21:
                        this.begin("NSTR2");
                        break;
                    case 22:
                        return "NODE_DESCR";
                    case 23:
                        this.popState();
                        break;
                    case 24:
                        h.getLogger().trace("Starting NSTR"), this.begin("NSTR");
                        break;
                    case 25:
                        return h.getLogger().trace("description:", g.yytext), "NODE_DESCR";
                    case 26:
                        this.popState();
                        break;
                    case 27:
                        return this.popState(), h.getLogger().trace("node end ))"), "NODE_DEND";
                    case 28:
                        return this.popState(), h.getLogger().trace("node end )"), "NODE_DEND";
                    case 29:
                        return this.popState(), h.getLogger().trace("node end ...", g.yytext), "NODE_DEND";
                    case 30:
                        return this.popState(), h.getLogger().trace("node end (("), "NODE_DEND";
                    case 31:
                        return this.popState(), h.getLogger().trace("node end (-"), "NODE_DEND";
                    case 32:
                        return this.popState(), h.getLogger().trace("node end (-"), "NODE_DEND";
                    case 33:
                        return this.popState(), h.getLogger().trace("node end (("), "NODE_DEND";
                    case 34:
                        return this.popState(), h.getLogger().trace("node end (("), "NODE_DEND";
                    case 35:
                        return h.getLogger().trace("Long description:", g.yytext), 20;
                    case 36:
                        return h.getLogger().trace("Long description:", g.yytext), 20;
                }
            }, "anonymous"),
            rules: [
                /^(?:\s*%%.*)/i,
                /^(?:mindmap\b)/i,
                /^(?::::)/i,
                /^(?:.+)/i,
                /^(?:\n)/i,
                /^(?:::icon\()/i,
                /^(?:[\s]+[\n])/i,
                /^(?:[\n]+)/i,
                /^(?:[^\)]+)/i,
                /^(?:\))/i,
                /^(?:-\))/i,
                /^(?:\(-)/i,
                /^(?:\)\))/i,
                /^(?:\))/i,
                /^(?:\(\()/i,
                /^(?:\{\{)/i,
                /^(?:\()/i,
                /^(?:\[)/i,
                /^(?:[\s]+)/i,
                /^(?:[^\(\[\n\)\{\}]+)/i,
                /^(?:$)/i,
                /^(?:["][`])/i,
                /^(?:[^`"]+)/i,
                /^(?:[`]["])/i,
                /^(?:["])/i,
                /^(?:[^"]+)/i,
                /^(?:["])/i,
                /^(?:[\)]\))/i,
                /^(?:[\)])/i,
                /^(?:[\]])/i,
                /^(?:\}\})/i,
                /^(?:\(-)/i,
                /^(?:-\))/i,
                /^(?:\(\()/i,
                /^(?:\()/i,
                /^(?:[^\)\]\(\}]+)/i,
                /^(?:.+(?!\(\())/i
            ],
            conditions: {
                CLASS: {
                    rules: [
                        3,
                        4
                    ],
                    inclusive: false
                },
                ICON: {
                    rules: [
                        8,
                        9
                    ],
                    inclusive: false
                },
                NSTR2: {
                    rules: [
                        22,
                        23
                    ],
                    inclusive: false
                },
                NSTR: {
                    rules: [
                        25,
                        26
                    ],
                    inclusive: false
                },
                NODE: {
                    rules: [
                        21,
                        24,
                        27,
                        28,
                        29,
                        30,
                        31,
                        32,
                        33,
                        34,
                        35,
                        36
                    ],
                    inclusive: false
                },
                INITIAL: {
                    rules: [
                        0,
                        1,
                        2,
                        5,
                        6,
                        7,
                        10,
                        11,
                        12,
                        13,
                        14,
                        15,
                        16,
                        17,
                        18,
                        19,
                        20
                    ],
                    inclusive: true
                }
            }
        };
        return R;
    }();
    y.lexer = I;
    function O() {
        this.yy = {};
    }
    return m$1(O, "Parser"), O.prototype = y, y.Parser = O, new O;
}();
ct.parser = ct;
var At = ct;
var Ft = {
    DEFAULT: 0,
    NO_BORDER: 0,
    ROUNDED_RECT: 1,
    RECT: 2,
    CIRCLE: 3,
    CLOUD: 4,
    BANG: 5,
    HEXAGON: 6
}, st = class {
    constructor(){
        this.nodes = [];
        this.count = 0;
        this.elements = {};
        this.getLogger = /*#__PURE__*/ this.getLogger.bind(this), this.nodeType = Ft, this.clear(), this.getType = /*#__PURE__*/ this.getType.bind(this), this.getMindmap = /*#__PURE__*/ this.getMindmap.bind(this), this.getElementById = /*#__PURE__*/ this.getElementById.bind(this), this.getParent = /*#__PURE__*/ this.getParent.bind(this), this.getMindmap = /*#__PURE__*/ this.getMindmap.bind(this), this.addNode = /*#__PURE__*/ this.addNode.bind(this), this.decorateNode = /*#__PURE__*/ this.decorateNode.bind(this);
    }
    static{
        m$1(this, "MindmapDB");
    }
    clear() {
        this.nodes = [], this.count = 0, this.elements = {};
    }
    getParent(A) {
        for(let s = this.nodes.length - 1; s >= 0; s--)if (this.nodes[s].level < A) return this.nodes[s];
        return null;
    }
    getMindmap() {
        return this.nodes.length > 0 ? this.nodes[0] : null;
    }
    addNode(A, s, i, e) {
        tt.info("addNode", A, s, i, e);
        let t = /*#__PURE__*/ hh(), r = t.mindmap?.padding ?? Il.mindmap.padding;
        switch(e){
            case this.nodeType.ROUNDED_RECT:
            case this.nodeType.RECT:
            case this.nodeType.HEXAGON:
                r *= 2;
                break;
        }
        let l = {
            id: this.count++,
            nodeId: /*#__PURE__*/ Ce(s, t),
            level: A,
            descr: /*#__PURE__*/ Ce(i, t),
            type: e,
            children: [],
            width: t.mindmap?.maxNodeWidth ?? Il.mindmap.maxNodeWidth,
            padding: r
        }, f = /*#__PURE__*/ this.getParent(A);
        if (f) f.children.push(l), this.nodes.push(l);
        else if (this.nodes.length === 0) this.nodes.push(l);
        else throw new Error(`There can be only one root. No parent could be found for ("${l.descr}")`);
    }
    getType(A, s) {
        switch(tt.debug("In get type", A, s), A){
            case "[":
                return this.nodeType.RECT;
            case "(":
                return s === ")" ? this.nodeType.ROUNDED_RECT : this.nodeType.CLOUD;
            case "((":
                return this.nodeType.CIRCLE;
            case ")":
                return this.nodeType.CLOUD;
            case "))":
                return this.nodeType.BANG;
            case "{{":
                return this.nodeType.HEXAGON;
            default:
                return this.nodeType.DEFAULT;
        }
    }
    setElementForId(A, s) {
        this.elements[A] = s;
    }
    getElementById(A) {
        return this.elements[A];
    }
    decorateNode(A) {
        if (!A) return;
        let s = /*#__PURE__*/ hh(), i = this.nodes[this.nodes.length - 1];
        A.icon && (i.icon = /*#__PURE__*/ Ce(A.icon, s)), A.class && (i.class = /*#__PURE__*/ Ce(A.class, s));
    }
    type2Str(A) {
        switch(A){
            case this.nodeType.DEFAULT:
                return "no-border";
            case this.nodeType.RECT:
                return "rect";
            case this.nodeType.ROUNDED_RECT:
                return "rounded-rect";
            case this.nodeType.CIRCLE:
                return "circle";
            case this.nodeType.CLOUD:
                return "cloud";
            case this.nodeType.BANG:
                return "bang";
            case this.nodeType.HEXAGON:
                return "hexgon";
            default:
                return "no-border";
        }
    }
    getLogger() {
        return tt;
    }
};
var Rt = /*#__PURE__*/ q(/*#__PURE__*/ It());
var _t = 12, Pt = /*#__PURE__*/ m$1(function(m, A, s, i) {
    A.append("path").attr("id", "node-" + s.id).attr("class", "node-bkg node-" + m.type2Str(s.type)).attr("d", `M0 ${s.height - 5} v${-s.height + 2 * 5} q0,-5 5,-5 h${s.width - 2 * 5} q5,0 5,5 v${s.height - 5} H0 Z`), A.append("line").attr("class", "node-line-" + i).attr("x1", 0).attr("y1", s.height).attr("x2", s.width).attr("y2", s.height);
}, "defaultBkg"), Ut = /*#__PURE__*/ m$1(function(m, A, s) {
    A.append("rect").attr("id", "node-" + s.id).attr("class", "node-bkg node-" + m.type2Str(s.type)).attr("height", s.height).attr("width", s.width);
}, "rectBkg"), Yt = /*#__PURE__*/ m$1(function(m, A, s) {
    let i = s.width, e = s.height, t = .15 * i, r = .25 * i, l = .35 * i, f = .2 * i;
    A.append("path").attr("id", "node-" + s.id).attr("class", "node-bkg node-" + m.type2Str(s.type)).attr("d", `M0 0 a${t},${t} 0 0,1 ${i * .25},${-1 * i * .1}
      a${l},${l} 1 0,1 ${i * .4},${-1 * i * .1}
      a${r},${r} 1 0,1 ${i * .35},${1 * i * .2}

      a${t},${t} 1 0,1 ${i * .15},${1 * e * .35}
      a${f},${f} 1 0,1 ${-1 * i * .15},${1 * e * .65}

      a${r},${t} 1 0,1 ${-1 * i * .25},${i * .15}
      a${l},${l} 1 0,1 ${-1 * i * .5},0
      a${t},${t} 1 0,1 ${-1 * i * .25},${-1 * i * .15}

      a${t},${t} 1 0,1 ${-1 * i * .1},${-1 * e * .35}
      a${f},${f} 1 0,1 ${i * .1},${-1 * e * .65}

    H0 V0 Z`);
}, "cloudBkg"), Xt = /*#__PURE__*/ m$1(function(m, A, s) {
    let i = s.width, e = s.height, t = .15 * i;
    A.append("path").attr("id", "node-" + s.id).attr("class", "node-bkg node-" + m.type2Str(s.type)).attr("d", `M0 0 a${t},${t} 1 0,0 ${i * .25},${-1 * e * .1}
      a${t},${t} 1 0,0 ${i * .25},0
      a${t},${t} 1 0,0 ${i * .25},0
      a${t},${t} 1 0,0 ${i * .25},${1 * e * .1}

      a${t},${t} 1 0,0 ${i * .15},${1 * e * .33}
      a${t * .8},${t * .8} 1 0,0 0,${1 * e * .34}
      a${t},${t} 1 0,0 ${-1 * i * .15},${1 * e * .33}

      a${t},${t} 1 0,0 ${-1 * i * .25},${e * .15}
      a${t},${t} 1 0,0 ${-1 * i * .25},0
      a${t},${t} 1 0,0 ${-1 * i * .25},0
      a${t},${t} 1 0,0 ${-1 * i * .25},${-1 * e * .15}

      a${t},${t} 1 0,0 ${-1 * i * .1},${-1 * e * .33}
      a${t * .8},${t * .8} 1 0,0 0,${-1 * e * .34}
      a${t},${t} 1 0,0 ${i * .1},${-1 * e * .33}

    H0 V0 Z`);
}, "bangBkg"), kt = /*#__PURE__*/ m$1(function(m, A, s) {
    A.append("circle").attr("id", "node-" + s.id).attr("class", "node-bkg node-" + m.type2Str(s.type)).attr("r", s.width / 2);
}, "circleBkg");
function Ht(m, A, s, i, e) {
    return m.insert("polygon", ":first-child").attr("points", /*#__PURE__*/ i.map(function(t) {
        return t.x + "," + t.y;
    }).join(" ")).attr("transform", "translate(" + (e.width - A) / 2 + ", " + s + ")");
}
m$1(Ht, "insertPolygonShape");
var $t = /*#__PURE__*/ m$1(function(m, A, s) {
    let i = s.height, t = i / 4, r = s.width - s.padding + 2 * t, l = [
        {
            x: t,
            y: 0
        },
        {
            x: r - t,
            y: 0
        },
        {
            x: r,
            y: -i / 2
        },
        {
            x: r - t,
            y: -i
        },
        {
            x: t,
            y: -i
        },
        {
            x: 0,
            y: -i / 2
        }
    ];
    Ht(A, r, i, l, s);
}, "hexagonBkg"), Wt = /*#__PURE__*/ m$1(function(m, A, s) {
    A.append("rect").attr("id", "node-" + s.id).attr("class", "node-bkg node-" + m.type2Str(s.type)).attr("height", s.height).attr("rx", s.padding).attr("ry", s.padding).attr("width", s.width);
}, "roundedRectBkg"), Mt = /*#__PURE__*/ m$1(async function(m, A, s, i, e) {
    let t = e.htmlLabels, r = i % (_t - 1), l = /*#__PURE__*/ A.append("g");
    s.section = r;
    let f = "section-" + r;
    r < 0 && (f += " section-root"), l.attr("class", (s.class ? s.class + " " : "") + "mindmap-node " + f);
    let o = /*#__PURE__*/ l.append("g"), d = /*#__PURE__*/ l.append("g"), a = /*#__PURE__*/ s.descr.replace(/(<br\/*>)/g, `
`);
    await is(d, a, {
        useHtmlLabels: t,
        width: s.width,
        classes: "mindmap-node-label"
    }, e), t || d.attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle");
    let c = /*#__PURE__*/ d.node().getBBox(), [u] = $(e.fontSize);
    if (s.height = c.height + u * 1.1 * .5 + s.padding, s.width = c.width + 2 * s.padding, s.icon) if (s.type === m.nodeType.CIRCLE) s.height += 50, s.width += 50, l.append("foreignObject").attr("height", "50px").attr("width", s.width).attr("style", "text-align: center;").append("div").attr("class", "icon-container").append("i").attr("class", "node-icon-" + r + " " + s.icon), d.attr("transform", "translate(" + s.width / 2 + ", " + (s.height / 2 - 1.5 * s.padding) + ")");
    else {
        s.width += 50;
        let v = s.height;
        s.height = /*#__PURE__*/ Math.max(v, 60);
        let E = /*#__PURE__*/ Math.abs(s.height - v);
        l.append("foreignObject").attr("width", "60px").attr("height", s.height).attr("style", "text-align: center;margin-top:" + E / 2 + "px;").append("div").attr("class", "icon-container").append("i").attr("class", "node-icon-" + r + " " + s.icon), d.attr("transform", "translate(" + (25 + s.width / 2) + ", " + (E / 2 + s.padding / 2) + ")");
    }
    else if (t) {
        let v = (s.width - c.width) / 2, E = (s.height - c.height) / 2;
        d.attr("transform", "translate(" + v + ", " + E + ")");
    } else {
        let v = s.width / 2, E = s.padding / 2;
        d.attr("transform", "translate(" + v + ", " + E + ")");
    }
    switch(s.type){
        case m.nodeType.DEFAULT:
            Pt(m, o, s, r);
            break;
        case m.nodeType.ROUNDED_RECT:
            Wt(m, o, s, r);
            break;
        case m.nodeType.RECT:
            Ut(m, o, s, r);
            break;
        case m.nodeType.CIRCLE:
            o.attr("transform", "translate(" + s.width / 2 + ", " + +s.height / 2 + ")"), kt(m, o, s, r);
            break;
        case m.nodeType.CLOUD:
            Yt(m, o, s, r);
            break;
        case m.nodeType.BANG:
            Xt(m, o, s, r);
            break;
        case m.nodeType.HEXAGON:
            $t(m, o, s, r);
            break;
    }
    return m.setElementForId(s.id, l), s.height;
}, "drawNode"), Ct = /*#__PURE__*/ m$1(function(m, A) {
    let s = /*#__PURE__*/ m.getElementById(A.id), i = A.x || 0, e = A.y || 0;
    s.attr("transform", "translate(" + i + "," + e + ")");
}, "positionNode");
Gr.use(Rt.default);
async function wt(m, A, s, i, e) {
    await Mt(m, A, s, i, e), s.children && await Promise.all(/*#__PURE__*/ s.children.map((t, r)=>wt(m, A, t, i < 0 ? r : i, e)));
}
m$1(wt, "drawNodes");
function Bt(m, A) {
    A.edges().map((s, i)=>{
        let e = /*#__PURE__*/ s.data();
        if (s[0]._private.bodyBounds) {
            let t = s[0]._private.rscratch;
            tt.trace("Edge: ", i, e), m.insert("path").attr("d", `M ${t.startX},${t.startY} L ${t.midX},${t.midY} L${t.endX},${t.endY} `).attr("class", "edge section-edge-" + e.section + " edge-depth-" + e.depth);
        }
    });
}
m$1(Bt, "drawEdges");
function xt(m, A, s, i) {
    A.add({
        group: "nodes",
        data: {
            id: /*#__PURE__*/ m.id.toString(),
            labelText: m.descr,
            height: m.height,
            width: m.width,
            level: i,
            nodeId: m.id,
            padding: m.padding,
            type: m.type
        },
        position: {
            x: m.x,
            y: m.y
        }
    }), m.children && m.children.forEach((e)=>{
        xt(e, A, s, i + 1), A.add({
            group: "edges",
            data: {
                id: `${m.id}_${e.id}`,
                source: m.id,
                target: e.id,
                depth: i,
                section: e.section
            }
        });
    });
}
m$1(xt, "addNodes");
function Vt(m, A) {
    return new Promise((s)=>{
        let i = /*#__PURE__*/ kh("body").append("div").attr("id", "cy").attr("style", "display:none"), e = /*#__PURE__*/ Gr({
            container: /*#__PURE__*/ document.getElementById("cy"),
            style: [
                {
                    selector: "edge",
                    style: {
                        "curve-style": "bezier"
                    }
                }
            ]
        });
        i.remove(), xt(m, e, A, 0), e.nodes().forEach(function(t) {
            t.layoutDimensions = ()=>{
                let r = /*#__PURE__*/ t.data();
                return {
                    w: r.width,
                    h: r.height
                };
            };
        }), e.layout({
            name: "cose-bilkent",
            quality: "proof",
            styleEnabled: false,
            animate: false
        }).run(), e.ready((t)=>{
            tt.info("Ready", t), s(e);
        });
    });
}
m$1(Vt, "layoutMindmap");
function jt(m, A) {
    A.nodes().map((s, i)=>{
        let e = /*#__PURE__*/ s.data();
        e.x = s.position().x, e.y = s.position().y, Ct(m, e);
        let t = /*#__PURE__*/ m.getElementById(e.nodeId);
        tt.info("id:", i, "Position: (", s.position().x, ", ", s.position().y, ")", e), t.attr("transform", `translate(${s.position().x - e.width / 2}, ${s.position().y - e.height / 2})`), t.attr("attr", `apa-${i})`);
    });
}
m$1(jt, "positionNodes");
var Zt = /*#__PURE__*/ m$1(async (m, A, s, i)=>{
    tt.debug(`Rendering mindmap diagram
` + m);
    let e = i.db, t = /*#__PURE__*/ e.getMindmap();
    if (!t) return;
    let r = /*#__PURE__*/ hh();
    r.htmlLabels = false;
    let l = /*#__PURE__*/ d(A), f = /*#__PURE__*/ l.append("g");
    f.attr("class", "mindmap-edges");
    let o = /*#__PURE__*/ l.append("g");
    o.attr("class", "mindmap-nodes"), await wt(e, o, t, -1, r);
    let d$1 = await Vt(t, r);
    Bt(f, d$1), jt(e, d$1), ah(void 0, l, r.mindmap?.padding ?? Il.mindmap.padding, r.mindmap?.useMaxWidth ?? Il.mindmap.useMaxWidth);
}, "draw"), St = {
    draw: Zt
};
var Qt = /*#__PURE__*/ m$1((m)=>{
    let A = "";
    for(let s = 0; s < m.THEME_COLOR_LIMIT; s++)m["lineColor" + s] = m["lineColor" + s] || m["cScaleInv" + s], $t$1(m["lineColor" + s]) ? m["lineColor" + s] = /*#__PURE__*/ E(m["lineColor" + s], 20) : m["lineColor" + s] = /*#__PURE__*/ I(m["lineColor" + s], 20);
    for(let s = 0; s < m.THEME_COLOR_LIMIT; s++){
        let i = "" + (17 - 3 * s);
        A += `
    .section-${s - 1} rect, .section-${s - 1} path, .section-${s - 1} circle, .section-${s - 1} polygon, .section-${s - 1} path  {
      fill: ${m["cScale" + s]};
    }
    .section-${s - 1} text {
     fill: ${m["cScaleLabel" + s]};
    }
    .node-icon-${s - 1} {
      font-size: 40px;
      color: ${m["cScaleLabel" + s]};
    }
    .section-edge-${s - 1}{
      stroke: ${m["cScale" + s]};
    }
    .edge-depth-${s - 1}{
      stroke-width: ${i};
    }
    .section-${s - 1} line {
      stroke: ${m["cScaleInv" + s]} ;
      stroke-width: 3;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    `;
    }
    return A;
}, "genSections"), zt = /*#__PURE__*/ m$1((m)=>`
  .edge {
    stroke-width: 3;
  }
  ${Qt(m)}
  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {
    fill: ${m.git0};
  }
  .section-root text {
    fill: ${m.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .mindmap-node-label {
    dy: 1em;
    alignment-baseline: middle;
    text-anchor: middle;
    dominant-baseline: middle;
    text-align: center;
  }
`, "getStyles"), bt = zt;
var we = {
    get db () {
        return new st;
    },
    renderer: St,
    parser: At,
    styles: bt
};
export { we as diagram };
