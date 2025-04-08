import { G as Gr } from './vendor-min-mermaid~chunk-MBJCTAW2.CeeVBk3I.chunk.js';
import { d } from './vendor-min-mermaid~chunk-MEBTFSOL.Bjs9FFZg.chunk.js';
import { Q as Qt$1 } from './vendor-min-mermaid~chunk-HESFG3RP.EvsgN7RW.chunk.js';
import { S } from './vendor-min-mermaid~chunk-YM3XIQPS.CNQBySGW.chunk.js';
import { m as m$1, q, n } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
import { t as tt, H as Hl, P as Pl, p as pl, O as Oe, am as $t$1, an as F, ao as E, i as ih } from './vendor-min-mermaid~chunk-ZKYS2E5M.Dvid1YGB.chunk.js';
var pt = /*#__PURE__*/ n((rt, ft)=>{
    m$1(function(I, o) {
        typeof rt == "object" && typeof ft == "object" ? ft.exports = /*#__PURE__*/ o() : typeof define == "function" && define.amd ? define([], o) : typeof rt == "object" ? rt.layoutBase = /*#__PURE__*/ o() : I.layoutBase = /*#__PURE__*/ o();
    }, "webpackUniversalModuleDefinition")(rt, function() {
        return function(E) {
            var I = {};
            function o(i) {
                if (I[i]) return I[i].exports;
                var e = I[i] = {
                    i,
                    l: false,
                    exports: {}
                };
                return E[i].call(e.exports, e, e.exports, o), e.l = true, e.exports;
            }
            return m$1(o, "__webpack_require__"), o.m = E, o.c = I, o.i = function(i) {
                return i;
            }, o.d = function(i, e, t) {
                o.o(i, e) || Object.defineProperty(i, e, {
                    configurable: false,
                    enumerable: true,
                    get: t
                });
            }, o.n = function(i) {
                var e = i && i.__esModule ? m$1(function() {
                    return i.default;
                }, "getDefault") : m$1(function() {
                    return i;
                }, "getModuleExports");
                return o.d(e, "a", e), e;
            }, o.o = function(i, e) {
                return Object.prototype.hasOwnProperty.call(i, e);
            }, o.p = "", o(o.s = 26);
        }([
            function(E, I, o) {
                function i() {}
                m$1(i, "LayoutConstants"), i.QUALITY = 1, i.DEFAULT_CREATE_BENDS_AS_NEEDED = false, i.DEFAULT_INCREMENTAL = false, i.DEFAULT_ANIMATION_ON_LAYOUT = true, i.DEFAULT_ANIMATION_DURING_LAYOUT = false, i.DEFAULT_ANIMATION_PERIOD = 50, i.DEFAULT_UNIFORM_LEAF_NODE_SIZES = false, i.DEFAULT_GRAPH_MARGIN = 15, i.NODE_DIMENSIONS_INCLUDE_LABELS = false, i.SIMPLE_NODE_SIZE = 40, i.SIMPLE_NODE_HALF_SIZE = i.SIMPLE_NODE_SIZE / 2, i.EMPTY_COMPOUND_NODE_SIZE = 40, i.MIN_EDGE_LENGTH = 1, i.WORLD_BOUNDARY = 1e6, i.INITIAL_WORLD_BOUNDARY = i.WORLD_BOUNDARY / 1e3, i.WORLD_CENTER_X = 1200, i.WORLD_CENTER_Y = 900, E.exports = i;
            },
            function(E, I, o) {
                var i = /*#__PURE__*/ o(2), e = /*#__PURE__*/ o(8), t = /*#__PURE__*/ o(9);
                function r(f, a, d) {
                    i.call(this, d), this.isOverlapingSourceAndTarget = false, this.vGraphObject = d, this.bendpoints = [], this.source = f, this.target = a;
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
                }, r.prototype.getOtherEndInGraph = function(f, a) {
                    for(var d = /*#__PURE__*/ this.getOtherEnd(f), s = /*#__PURE__*/ a.getGraphManager().getRoot();;){
                        if (d.getOwner() == a) return d;
                        if (d.getOwner() == s) break;
                        d = /*#__PURE__*/ d.getOwner().getParent();
                    }
                    return null;
                }, r.prototype.updateLength = function() {
                    var f = new Array(4);
                    this.isOverlapingSourceAndTarget = /*#__PURE__*/ e.getIntersection(/*#__PURE__*/ this.target.getRect(), /*#__PURE__*/ this.source.getRect(), f), this.isOverlapingSourceAndTarget || (this.lengthX = f[0] - f[2], this.lengthY = f[1] - f[3], Math.abs(this.lengthX) < 1 && (this.lengthX = /*#__PURE__*/ t.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = /*#__PURE__*/ t.sign(this.lengthY)), this.length = /*#__PURE__*/ Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY));
                }, r.prototype.updateLengthSimple = function() {
                    this.lengthX = this.target.getCenterX() - this.source.getCenterX(), this.lengthY = this.target.getCenterY() - this.source.getCenterY(), Math.abs(this.lengthX) < 1 && (this.lengthX = /*#__PURE__*/ t.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = /*#__PURE__*/ t.sign(this.lengthY)), this.length = /*#__PURE__*/ Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
                }, E.exports = r;
            },
            function(E, I, o) {
                function i(e) {
                    this.vGraphObject = e;
                }
                m$1(i, "LGraphObject"), E.exports = i;
            },
            function(E, I, o) {
                var i = /*#__PURE__*/ o(2), e = /*#__PURE__*/ o(10), t = /*#__PURE__*/ o(13), r = /*#__PURE__*/ o(0), l = /*#__PURE__*/ o(16), f = /*#__PURE__*/ o(4);
                function a(s, c, u, v) {
                    u == null && v == null && (v = c), i.call(this, v), s.graphManager != null && (s = s.graphManager), this.estimatedSize = e.MIN_VALUE, this.inclusionTreeDepth = e.MAX_VALUE, this.vGraphObject = v, this.edges = [], this.graphManager = s, u != null && c != null ? this.rect = new t(c.x, c.y, u.width, u.height) : this.rect = new t;
                }
                m$1(a, "LNode"), a.prototype = /*#__PURE__*/ Object.create(i.prototype);
                for(var d in i)a[d] = i[d];
                a.prototype.getEdges = function() {
                    return this.edges;
                }, a.prototype.getChild = function() {
                    return this.child;
                }, a.prototype.getOwner = function() {
                    return this.owner;
                }, a.prototype.getWidth = function() {
                    return this.rect.width;
                }, a.prototype.setWidth = function(s) {
                    this.rect.width = s;
                }, a.prototype.getHeight = function() {
                    return this.rect.height;
                }, a.prototype.setHeight = function(s) {
                    this.rect.height = s;
                }, a.prototype.getCenterX = function() {
                    return this.rect.x + this.rect.width / 2;
                }, a.prototype.getCenterY = function() {
                    return this.rect.y + this.rect.height / 2;
                }, a.prototype.getCenter = function() {
                    return new f(this.rect.x + this.rect.width / 2, this.rect.y + this.rect.height / 2);
                }, a.prototype.getLocation = function() {
                    return new f(this.rect.x, this.rect.y);
                }, a.prototype.getRect = function() {
                    return this.rect;
                }, a.prototype.getDiagonal = function() {
                    return Math.sqrt(this.rect.width * this.rect.width + this.rect.height * this.rect.height);
                }, a.prototype.getHalfTheDiagonal = function() {
                    return Math.sqrt(this.rect.height * this.rect.height + this.rect.width * this.rect.width) / 2;
                }, a.prototype.setRect = function(s, c) {
                    this.rect.x = s.x, this.rect.y = s.y, this.rect.width = c.width, this.rect.height = c.height;
                }, a.prototype.setCenter = function(s, c) {
                    this.rect.x = s - this.rect.width / 2, this.rect.y = c - this.rect.height / 2;
                }, a.prototype.setLocation = function(s, c) {
                    this.rect.x = s, this.rect.y = c;
                }, a.prototype.moveBy = function(s, c) {
                    this.rect.x += s, this.rect.y += c;
                }, a.prototype.getEdgeListToNode = function(s) {
                    var c = [], v = this;
                    return v.edges.forEach(function(m) {
                        if (m.target == s) {
                            if (m.source != v) throw "Incorrect edge source!";
                            c.push(m);
                        }
                    }), c;
                }, a.prototype.getEdgesBetween = function(s) {
                    var c = [], v = this;
                    return v.edges.forEach(function(m) {
                        if (!(m.source == v || m.target == v)) throw "Incorrect edge source and/or target";
                        (m.target == s || m.source == s) && c.push(m);
                    }), c;
                }, a.prototype.getNeighborsList = function() {
                    var s = new Set, c = this;
                    return c.edges.forEach(function(u) {
                        if (u.source == c) s.add(u.target);
                        else {
                            if (u.target != c) throw "Incorrect incidency!";
                            s.add(u.source);
                        }
                    }), s;
                }, a.prototype.withChildren = function() {
                    var s = new Set, c, u;
                    if (s.add(this), this.child != null) for(var v = /*#__PURE__*/ this.child.getNodes(), m = 0; m < v.length; m++)c = v[m], u = /*#__PURE__*/ c.withChildren(), u.forEach(function(T) {
                        s.add(T);
                    });
                    return s;
                }, a.prototype.getNoOfChildren = function() {
                    var s = 0, c;
                    if (this.child == null) s = 1;
                    else for(var u = /*#__PURE__*/ this.child.getNodes(), v = 0; v < u.length; v++)c = u[v], s += /*#__PURE__*/ c.getNoOfChildren();
                    return s == 0 && (s = 1), s;
                }, a.prototype.getEstimatedSize = function() {
                    if (this.estimatedSize == e.MIN_VALUE) throw "assert failed";
                    return this.estimatedSize;
                }, a.prototype.calcEstimatedSize = function() {
                    return this.child == null ? this.estimatedSize = (this.rect.width + this.rect.height) / 2 : (this.estimatedSize = /*#__PURE__*/ this.child.calcEstimatedSize(), this.rect.width = this.estimatedSize, this.rect.height = this.estimatedSize, this.estimatedSize);
                }, a.prototype.scatter = function() {
                    var s, c, u = -r.INITIAL_WORLD_BOUNDARY, v = r.INITIAL_WORLD_BOUNDARY;
                    s = r.WORLD_CENTER_X + l.nextDouble() * (v - u) + u;
                    var m = -r.INITIAL_WORLD_BOUNDARY, T = r.INITIAL_WORLD_BOUNDARY;
                    c = r.WORLD_CENTER_Y + l.nextDouble() * (T - m) + m, this.rect.x = s, this.rect.y = c;
                }, a.prototype.updateBounds = function() {
                    if (this.getChild() == null) throw "assert failed";
                    if (this.getChild().getNodes().length != 0) {
                        var s = /*#__PURE__*/ this.getChild();
                        if (s.updateBounds(true), this.rect.x = /*#__PURE__*/ s.getLeft(), this.rect.y = /*#__PURE__*/ s.getTop(), this.setWidth(s.getRight() - s.getLeft()), this.setHeight(s.getBottom() - s.getTop()), r.NODE_DIMENSIONS_INCLUDE_LABELS) {
                            var c = s.getRight() - s.getLeft(), u = s.getBottom() - s.getTop();
                            this.labelWidth > c && (this.rect.x -= (this.labelWidth - c) / 2, this.setWidth(this.labelWidth)), this.labelHeight > u && (this.labelPos == "center" ? this.rect.y -= (this.labelHeight - u) / 2 : this.labelPos == "top" && (this.rect.y -= this.labelHeight - u), this.setHeight(this.labelHeight));
                        }
                    }
                }, a.prototype.getInclusionTreeDepth = function() {
                    if (this.inclusionTreeDepth == e.MAX_VALUE) throw "assert failed";
                    return this.inclusionTreeDepth;
                }, a.prototype.transform = function(s) {
                    var c = this.rect.x;
                    c > r.WORLD_BOUNDARY ? c = r.WORLD_BOUNDARY : c < -r.WORLD_BOUNDARY && (c = -r.WORLD_BOUNDARY);
                    var u = this.rect.y;
                    u > r.WORLD_BOUNDARY ? u = r.WORLD_BOUNDARY : u < -r.WORLD_BOUNDARY && (u = -r.WORLD_BOUNDARY);
                    var v = new f(c, u), m = /*#__PURE__*/ s.inverseTransformPoint(v);
                    this.setLocation(m.x, m.y);
                }, a.prototype.getLeft = function() {
                    return this.rect.x;
                }, a.prototype.getRight = function() {
                    return this.rect.x + this.rect.width;
                }, a.prototype.getTop = function() {
                    return this.rect.y;
                }, a.prototype.getBottom = function() {
                    return this.rect.y + this.rect.height;
                }, a.prototype.getParent = function() {
                    return this.owner == null ? null : this.owner.getParent();
                }, E.exports = a;
            },
            function(E, I, o) {
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
                }, E.exports = i;
            },
            function(E, I, o) {
                var i = /*#__PURE__*/ o(2), e = /*#__PURE__*/ o(10), t = /*#__PURE__*/ o(0), r = /*#__PURE__*/ o(6), l = /*#__PURE__*/ o(3), f = /*#__PURE__*/ o(1), a = /*#__PURE__*/ o(13), d = /*#__PURE__*/ o(12), s = /*#__PURE__*/ o(11);
                function c(v, m, T) {
                    i.call(this, T), this.estimatedSize = e.MIN_VALUE, this.margin = t.DEFAULT_GRAPH_MARGIN, this.edges = [], this.nodes = [], this.isConnected = false, this.parent = v, m != null && m instanceof r ? this.graphManager = m : m != null && m instanceof Layout && (this.graphManager = m.graphManager);
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
                }, c.prototype.add = function(v, m, T) {
                    if (m == null && T == null) {
                        var y = v;
                        if (this.graphManager == null) throw "Graph has no graph mgr!";
                        if (this.getNodes().indexOf(y) > -1) throw "Node already in graph!";
                        return y.owner = this, this.getNodes().push(y), y;
                    } else {
                        var A = v;
                        if (!(this.getNodes().indexOf(m) > -1 && this.getNodes().indexOf(T) > -1)) throw "Source or target not in graph!";
                        if (!(m.owner == T.owner && m.owner == this)) throw "Both owners must be this graph!";
                        return m.owner != T.owner ? null : (A.source = m, A.target = T, A.isInterGraph = false, this.getEdges().push(A), m.edges.push(A), T != m && T.edges.push(A), A);
                    }
                }, c.prototype.remove = function(v) {
                    var m = v;
                    if (v instanceof l) {
                        if (m == null) throw "Node is null!";
                        if (!(m.owner != null && m.owner == this)) throw "Owner graph is invalid!";
                        if (this.graphManager == null) throw "Owner graph manager is invalid!";
                        for(var T = /*#__PURE__*/ m.edges.slice(), y, A = T.length, O = 0; O < A; O++)y = T[O], y.isInterGraph ? this.graphManager.remove(y) : y.source.owner.remove(y);
                        var R = /*#__PURE__*/ this.nodes.indexOf(m);
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
                    for(var v = e.MAX_VALUE, m = e.MAX_VALUE, T, y, A, O = /*#__PURE__*/ this.getNodes(), R = O.length, n = 0; n < R; n++){
                        var h = O[n];
                        T = /*#__PURE__*/ h.getTop(), y = /*#__PURE__*/ h.getLeft(), v > T && (v = T), m > y && (m = y);
                    }
                    return v == e.MAX_VALUE ? null : (O[0].getParent().paddingLeft != null ? A = O[0].getParent().paddingLeft : A = this.margin, this.left = m - A, this.top = v - A, new d(this.left, this.top));
                }, c.prototype.updateBounds = function(v) {
                    for(var m = e.MAX_VALUE, T = -e.MAX_VALUE, y = e.MAX_VALUE, A = -e.MAX_VALUE, O, R, n, h, g, p = this.nodes, D = p.length, N = 0; N < D; N++){
                        var M = p[N];
                        v && M.child != null && M.updateBounds(), O = /*#__PURE__*/ M.getLeft(), R = /*#__PURE__*/ M.getRight(), n = /*#__PURE__*/ M.getTop(), h = /*#__PURE__*/ M.getBottom(), m > O && (m = O), T < R && (T = R), y > n && (y = n), A < h && (A = h);
                    }
                    var C = new a(m, y, T - m, A - y);
                    m == e.MAX_VALUE && (this.left = /*#__PURE__*/ this.parent.getLeft(), this.right = /*#__PURE__*/ this.parent.getRight(), this.top = /*#__PURE__*/ this.parent.getTop(), this.bottom = /*#__PURE__*/ this.parent.getBottom()), p[0].getParent().paddingLeft != null ? g = p[0].getParent().paddingLeft : g = this.margin, this.left = C.x - g, this.right = C.x + C.width + g, this.top = C.y - g, this.bottom = C.y + C.height + g;
                }, c.calculateBounds = function(v) {
                    for(var m = e.MAX_VALUE, T = -e.MAX_VALUE, y = e.MAX_VALUE, A = -e.MAX_VALUE, O, R, n, h, g = v.length, p = 0; p < g; p++){
                        var D = v[p];
                        O = /*#__PURE__*/ D.getLeft(), R = /*#__PURE__*/ D.getRight(), n = /*#__PURE__*/ D.getTop(), h = /*#__PURE__*/ D.getBottom(), m > O && (m = O), T < R && (T = R), y > n && (y = n), A < h && (A = h);
                    }
                    var N = new a(m, y, T - m, A - y);
                    return N;
                }, c.prototype.getInclusionTreeDepth = function() {
                    return this == this.graphManager.getRoot() ? 1 : this.parent.getInclusionTreeDepth();
                }, c.prototype.getEstimatedSize = function() {
                    if (this.estimatedSize == e.MIN_VALUE) throw "assert failed";
                    return this.estimatedSize;
                }, c.prototype.calcEstimatedSize = function() {
                    for(var v = 0, m = this.nodes, T = m.length, y = 0; y < T; y++){
                        var A = m[y];
                        v += /*#__PURE__*/ A.calcEstimatedSize();
                    }
                    return v == 0 ? this.estimatedSize = t.EMPTY_COMPOUND_NODE_SIZE : this.estimatedSize = v / Math.sqrt(this.nodes.length), this.estimatedSize;
                }, c.prototype.updateConnected = function() {
                    var v = this;
                    if (this.nodes.length == 0) {
                        this.isConnected = true;
                        return;
                    }
                    var m = new s, T = new Set, y = this.nodes[0], A, O, R = /*#__PURE__*/ y.withChildren();
                    for(R.forEach(function(N) {
                        m.push(N), T.add(N);
                    }); m.length !== 0;){
                        y = /*#__PURE__*/ m.shift(), A = /*#__PURE__*/ y.getEdges();
                        for(var n = A.length, h = 0; h < n; h++){
                            var g = A[h];
                            if (O = /*#__PURE__*/ g.getOtherEndInGraph(y, this), O != null && !T.has(O)) {
                                var p = /*#__PURE__*/ O.withChildren();
                                p.forEach(function(N) {
                                    m.push(N), T.add(N);
                                });
                            }
                        }
                    }
                    if (this.isConnected = false, T.size >= this.nodes.length) {
                        var D = 0;
                        T.forEach(function(N) {
                            N.owner == v && D++;
                        }), D == this.nodes.length && (this.isConnected = true);
                    }
                }, E.exports = c;
            },
            function(E, I, o) {
                var i, e = /*#__PURE__*/ o(1);
                function t(r) {
                    i = /*#__PURE__*/ o(5), this.layout = r, this.graphs = [], this.edges = [];
                }
                m$1(t, "LGraphManager"), t.prototype.addRoot = function() {
                    var r = /*#__PURE__*/ this.layout.newGraph(), l = /*#__PURE__*/ this.layout.newNode(null), f = /*#__PURE__*/ this.add(r, l);
                    return this.setRootGraph(f), this.rootGraph;
                }, t.prototype.add = function(r, l, f, a, d) {
                    if (f == null && a == null && d == null) {
                        if (r == null) throw "Graph is null!";
                        if (l == null) throw "Parent node is null!";
                        if (this.graphs.indexOf(r) > -1) throw "Graph already in this graph mgr!";
                        if (this.graphs.push(r), r.parent != null) throw "Already has a parent!";
                        if (l.child != null) throw "Already has a child!";
                        return r.parent = l, l.child = r, r;
                    } else {
                        d = f, a = l, f = r;
                        var s = /*#__PURE__*/ a.getOwner(), c = /*#__PURE__*/ d.getOwner();
                        if (!(s != null && s.getGraphManager() == this)) throw "Source not in this graph mgr!";
                        if (!(c != null && c.getGraphManager() == this)) throw "Target not in this graph mgr!";
                        if (s == c) return f.isInterGraph = false, s.add(f, a, d);
                        if (f.isInterGraph = true, f.source = a, f.target = d, this.edges.indexOf(f) > -1) throw "Edge already in inter-graph edge list!";
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
                        for(var a, d = f.length, s = 0; s < d; s++)a = f[s], l.remove(a);
                        var c = [];
                        c = /*#__PURE__*/ c.concat(/*#__PURE__*/ l.getNodes());
                        var u;
                        d = c.length;
                        for(var s = 0; s < d; s++)u = c[s], l.remove(u);
                        l == this.rootGraph && this.setRootGraph(null);
                        var v = /*#__PURE__*/ this.graphs.indexOf(l);
                        this.graphs.splice(v, 1), l.parent = null;
                    } else if (r instanceof e) {
                        if (a = r, a == null) throw "Edge is null!";
                        if (!a.isInterGraph) throw "Not an inter-graph edge!";
                        if (!(a.source != null && a.target != null)) throw "Source and/or target is null!";
                        if (!(a.source.edges.indexOf(a) != -1 && a.target.edges.indexOf(a) != -1)) throw "Source and/or target doesn't know this edge!";
                        var v = /*#__PURE__*/ a.source.edges.indexOf(a);
                        if (a.source.edges.splice(v, 1), v = /*#__PURE__*/ a.target.edges.indexOf(a), a.target.edges.splice(v, 1), !(a.source.owner != null && a.source.owner.getGraphManager() != null)) throw "Edge owner graph or owner graph manager is null!";
                        if (a.source.owner.getGraphManager().edges.indexOf(a) == -1) throw "Not in owner graph manager's edge list!";
                        var v = /*#__PURE__*/ a.source.owner.getGraphManager().edges.indexOf(a);
                        a.source.owner.getGraphManager().edges.splice(v, 1);
                    }
                }, t.prototype.updateBounds = function() {
                    this.rootGraph.updateBounds(true);
                }, t.prototype.getGraphs = function() {
                    return this.graphs;
                }, t.prototype.getAllNodes = function() {
                    if (this.allNodes == null) {
                        for(var r = [], l = /*#__PURE__*/ this.getGraphs(), f = l.length, a = 0; a < f; a++)r = /*#__PURE__*/ r.concat(/*#__PURE__*/ l[a].getNodes());
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
                        for(var r = [], l = /*#__PURE__*/ this.getGraphs(), f = l.length, a = 0; a < l.length; a++)r = /*#__PURE__*/ r.concat(/*#__PURE__*/ l[a].getEdges());
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
                    var f = /*#__PURE__*/ r.getOwner(), a;
                    do {
                        if (a = /*#__PURE__*/ f.getParent(), a == null) break;
                        if (a == l) return true;
                        if (f = /*#__PURE__*/ a.getOwner(), f == null) break;
                    }while (true);
                    f = /*#__PURE__*/ l.getOwner();
                    do {
                        if (a = /*#__PURE__*/ f.getParent(), a == null) break;
                        if (a == r) return true;
                        if (f = /*#__PURE__*/ a.getOwner(), f == null) break;
                    }while (true);
                    return false;
                }, t.prototype.calcLowestCommonAncestors = function() {
                    for(var r, l, f, a, d, s = /*#__PURE__*/ this.getAllEdges(), c = s.length, u = 0; u < c; u++){
                        if (r = s[u], l = r.source, f = r.target, r.lca = null, r.sourceInLca = l, r.targetInLca = f, l == f) {
                            r.lca = /*#__PURE__*/ l.getOwner();
                            continue;
                        }
                        for(a = /*#__PURE__*/ l.getOwner(); r.lca == null;){
                            for(r.targetInLca = f, d = /*#__PURE__*/ f.getOwner(); r.lca == null;){
                                if (d == a) {
                                    r.lca = d;
                                    break;
                                }
                                if (d == this.rootGraph) break;
                                if (r.lca != null) throw "assert failed";
                                r.targetInLca = /*#__PURE__*/ d.getParent(), d = /*#__PURE__*/ r.targetInLca.getOwner();
                            }
                            if (a == this.rootGraph) break;
                            r.lca == null && (r.sourceInLca = /*#__PURE__*/ a.getParent(), a = /*#__PURE__*/ r.sourceInLca.getOwner());
                        }
                        if (r.lca == null) throw "assert failed";
                    }
                }, t.prototype.calcLowestCommonAncestor = function(r, l) {
                    if (r == l) return r.getOwner();
                    var f = /*#__PURE__*/ r.getOwner();
                    do {
                        if (f == null) break;
                        var a = /*#__PURE__*/ l.getOwner();
                        do {
                            if (a == null) break;
                            if (a == f) return a;
                            a = /*#__PURE__*/ a.getParent().getOwner();
                        }while (true);
                        f = /*#__PURE__*/ f.getParent().getOwner();
                    }while (true);
                    return f;
                }, t.prototype.calcInclusionTreeDepths = function(r, l) {
                    r == null && l == null && (r = this.rootGraph, l = 1);
                    for(var f, a = /*#__PURE__*/ r.getNodes(), d = a.length, s = 0; s < d; s++)f = a[s], f.inclusionTreeDepth = l, f.child != null && this.calcInclusionTreeDepths(f.child, l + 1);
                }, t.prototype.includesInvalidEdge = function() {
                    for(var r, l = this.edges.length, f = 0; f < l; f++)if (r = this.edges[f], this.isOneAncestorOfOther(r.source, r.target)) return true;
                    return false;
                }, E.exports = t;
            },
            function(E, I, o) {
                var i = /*#__PURE__*/ o(0);
                function e() {}
                m$1(e, "FDLayoutConstants");
                for(var t in i)e[t] = i[t];
                e.MAX_ITERATIONS = 2500, e.DEFAULT_EDGE_LENGTH = 50, e.DEFAULT_SPRING_STRENGTH = .45, e.DEFAULT_REPULSION_STRENGTH = 4500, e.DEFAULT_GRAVITY_STRENGTH = .4, e.DEFAULT_COMPOUND_GRAVITY_STRENGTH = 1, e.DEFAULT_GRAVITY_RANGE_FACTOR = 3.8, e.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = 1.5, e.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION = true, e.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION = true, e.DEFAULT_COOLING_FACTOR_INCREMENTAL = .3, e.COOLING_ADAPTATION_FACTOR = .33, e.ADAPTATION_LOWER_NODE_LIMIT = 1e3, e.ADAPTATION_UPPER_NODE_LIMIT = 5e3, e.MAX_NODE_DISPLACEMENT_INCREMENTAL = 100, e.MAX_NODE_DISPLACEMENT = e.MAX_NODE_DISPLACEMENT_INCREMENTAL * 3, e.MIN_REPULSION_DIST = e.DEFAULT_EDGE_LENGTH / 10, e.CONVERGENCE_CHECK_PERIOD = 100, e.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = .1, e.MIN_EDGE_LENGTH = 1, e.GRID_CALCULATION_CHECK_PERIOD = 10, E.exports = e;
            },
            function(E, I, o) {
                var i = /*#__PURE__*/ o(12);
                function e() {}
                m$1(e, "IGeometry"), e.calcSeparationAmount = function(t, r, l, f) {
                    if (!t.intersects(r)) throw "assert failed";
                    var a = new Array(2);
                    this.decideDirectionsForOverlappingNodes(t, r, a), l[0] = Math.min(/*#__PURE__*/ t.getRight(), /*#__PURE__*/ r.getRight()) - Math.max(t.x, r.x), l[1] = Math.min(/*#__PURE__*/ t.getBottom(), /*#__PURE__*/ r.getBottom()) - Math.max(t.y, r.y), t.getX() <= r.getX() && t.getRight() >= r.getRight() ? l[0] += /*#__PURE__*/ Math.min(r.getX() - t.getX(), t.getRight() - r.getRight()) : r.getX() <= t.getX() && r.getRight() >= t.getRight() && (l[0] += /*#__PURE__*/ Math.min(t.getX() - r.getX(), r.getRight() - t.getRight())), t.getY() <= r.getY() && t.getBottom() >= r.getBottom() ? l[1] += /*#__PURE__*/ Math.min(r.getY() - t.getY(), t.getBottom() - r.getBottom()) : r.getY() <= t.getY() && r.getBottom() >= t.getBottom() && (l[1] += /*#__PURE__*/ Math.min(t.getY() - r.getY(), r.getBottom() - t.getBottom()));
                    var d = /*#__PURE__*/ Math.abs((r.getCenterY() - t.getCenterY()) / (r.getCenterX() - t.getCenterX()));
                    r.getCenterY() === t.getCenterY() && r.getCenterX() === t.getCenterX() && (d = 1);
                    var s = d * l[0], c = l[1] / d;
                    l[0] < c ? c = l[0] : s = l[1], l[0] = -1 * a[0] * (c / 2 + f), l[1] = -1 * a[1] * (s / 2 + f);
                }, e.decideDirectionsForOverlappingNodes = function(t, r, l) {
                    t.getCenterX() < r.getCenterX() ? l[0] = -1 : l[0] = 1, t.getCenterY() < r.getCenterY() ? l[1] = -1 : l[1] = 1;
                }, e.getIntersection2 = function(t, r, l) {
                    var f = /*#__PURE__*/ t.getCenterX(), a = /*#__PURE__*/ t.getCenterY(), d = /*#__PURE__*/ r.getCenterX(), s = /*#__PURE__*/ r.getCenterY();
                    if (t.intersects(r)) return l[0] = f, l[1] = a, l[2] = d, l[3] = s, true;
                    var c = /*#__PURE__*/ t.getX(), u = /*#__PURE__*/ t.getY(), v = /*#__PURE__*/ t.getRight(), m = /*#__PURE__*/ t.getX(), T = /*#__PURE__*/ t.getBottom(), y = /*#__PURE__*/ t.getRight(), A = /*#__PURE__*/ t.getWidthHalf(), O = /*#__PURE__*/ t.getHeightHalf(), R = /*#__PURE__*/ r.getX(), n = /*#__PURE__*/ r.getY(), h = /*#__PURE__*/ r.getRight(), g = /*#__PURE__*/ r.getX(), p = /*#__PURE__*/ r.getBottom(), D = /*#__PURE__*/ r.getRight(), N = /*#__PURE__*/ r.getWidthHalf(), M = /*#__PURE__*/ r.getHeightHalf(), C = false, w = false;
                    if (f === d) {
                        if (a > s) return l[0] = f, l[1] = u, l[2] = d, l[3] = p, false;
                        if (a < s) return l[0] = f, l[1] = T, l[2] = d, l[3] = n, false;
                    } else if (a === s) {
                        if (f > d) return l[0] = c, l[1] = a, l[2] = h, l[3] = s, false;
                        if (f < d) return l[0] = v, l[1] = a, l[2] = R, l[3] = s, false;
                    } else {
                        var P = t.height / t.width, U = r.height / r.width, F = (s - a) / (d - f), x = void 0, G = void 0, S = void 0, _ = void 0, X = void 0, b = void 0;
                        if (-P === F ? f > d ? (l[0] = m, l[1] = T, C = true) : (l[0] = v, l[1] = u, C = true) : P === F && (f > d ? (l[0] = c, l[1] = u, C = true) : (l[0] = y, l[1] = T, C = true)), -U === F ? d > f ? (l[2] = g, l[3] = p, w = true) : (l[2] = h, l[3] = n, w = true) : U === F && (d > f ? (l[2] = R, l[3] = n, w = true) : (l[2] = D, l[3] = p, w = true)), C && w) return false;
                        if (f > d ? a > s ? (x = /*#__PURE__*/ this.getCardinalDirection(P, F, 4), G = /*#__PURE__*/ this.getCardinalDirection(U, F, 2)) : (x = /*#__PURE__*/ this.getCardinalDirection(-P, F, 3), G = /*#__PURE__*/ this.getCardinalDirection(-U, F, 1)) : a > s ? (x = /*#__PURE__*/ this.getCardinalDirection(-P, F, 1), G = /*#__PURE__*/ this.getCardinalDirection(-U, F, 3)) : (x = /*#__PURE__*/ this.getCardinalDirection(P, F, 2), G = /*#__PURE__*/ this.getCardinalDirection(U, F, 4)), !C) switch(x){
                            case 1:
                                _ = u, S = f + -O / F, l[0] = S, l[1] = _;
                                break;
                            case 2:
                                S = y, _ = a + A * F, l[0] = S, l[1] = _;
                                break;
                            case 3:
                                _ = T, S = f + O / F, l[0] = S, l[1] = _;
                                break;
                            case 4:
                                S = m, _ = a + -A * F, l[0] = S, l[1] = _;
                                break;
                        }
                        if (!w) switch(G){
                            case 1:
                                b = n, X = d + -M / F, l[2] = X, l[3] = b;
                                break;
                            case 2:
                                X = D, b = s + N * F, l[2] = X, l[3] = b;
                                break;
                            case 3:
                                b = p, X = d + M / F, l[2] = X, l[3] = b;
                                break;
                            case 4:
                                X = g, b = s + -N * F, l[2] = X, l[3] = b;
                                break;
                        }
                    }
                    return false;
                }, e.getCardinalDirection = function(t, r, l) {
                    return t > r ? l : 1 + l % 4;
                }, e.getIntersection = function(t, r, l, f) {
                    if (f == null) return this.getIntersection2(t, r, l);
                    var a = t.x, d = t.y, s = r.x, c = r.y, u = l.x, v = l.y, m = f.x, T = f.y, y = void 0, A = void 0, O = void 0, R = void 0, n = void 0, h = void 0, g = void 0, p = void 0, D = void 0;
                    return O = c - d, n = a - s, g = s * d - a * c, R = T - v, h = u - m, p = m * v - u * T, D = O * h - R * n, D === 0 ? null : (y = (n * p - h * g) / D, A = (R * g - O * p) / D, new i(y, A));
                }, e.angleOfVector = function(t, r, l, f) {
                    var a = void 0;
                    return t !== l ? (a = /*#__PURE__*/ Math.atan((f - r) / (l - t)), l < t ? a += Math.PI : f < r && (a += this.TWO_PI)) : f < r ? a = this.ONE_AND_HALF_PI : a = this.HALF_PI, a;
                }, e.doIntersect = function(t, r, l, f) {
                    var a = t.x, d = t.y, s = r.x, c = r.y, u = l.x, v = l.y, m = f.x, T = f.y, y = (s - a) * (T - v) - (m - u) * (c - d);
                    if (y === 0) return false;
                    var A = ((T - v) * (m - a) + (u - m) * (T - d)) / y, O = ((d - c) * (m - a) + (s - a) * (T - d)) / y;
                    return 0 < A && A < 1 && 0 < O && O < 1;
                }, e.HALF_PI = .5 * Math.PI, e.ONE_AND_HALF_PI = 1.5 * Math.PI, e.TWO_PI = 2 * Math.PI, e.THREE_PI = 3 * Math.PI, E.exports = e;
            },
            function(E, I, o) {
                function i() {}
                m$1(i, "IMath"), i.sign = function(e) {
                    return e > 0 ? 1 : e < 0 ? -1 : 0;
                }, i.floor = function(e) {
                    return e < 0 ? Math.ceil(e) : Math.floor(e);
                }, i.ceil = function(e) {
                    return e < 0 ? Math.floor(e) : Math.ceil(e);
                }, E.exports = i;
            },
            function(E, I, o) {
                function i() {}
                m$1(i, "Integer"), i.MAX_VALUE = 2147483647, i.MIN_VALUE = -2147483648, E.exports = i;
            },
            function(E, I, o) {
                var i = /*#__PURE__*/ function() {
                    function a(d, s) {
                        for(var c = 0; c < s.length; c++){
                            var u = s[c];
                            u.enumerable = u.enumerable || false, u.configurable = true, "value" in u && (u.writable = true), Object.defineProperty(d, u.key, u);
                        }
                    }
                    return m$1(a, "defineProperties"), function(d, s, c) {
                        return s && a(d.prototype, s), c && a(d, c), d;
                    };
                }();
                function e(a, d) {
                    if (!(a instanceof d)) throw new TypeError("Cannot call a class as a function");
                }
                m$1(e, "_classCallCheck");
                var t = /*#__PURE__*/ m$1(function(d) {
                    return {
                        value: d,
                        next: null,
                        prev: null
                    };
                }, "nodeFrom"), r = /*#__PURE__*/ m$1(function(d, s, c, u) {
                    return d !== null ? d.next = s : u.head = s, c !== null ? c.prev = s : u.tail = s, s.prev = d, s.next = c, u.length++, s;
                }, "add"), l = /*#__PURE__*/ m$1(function(d, s) {
                    var c = d.prev, u = d.next;
                    return c !== null ? c.next = u : s.head = u, u !== null ? u.prev = c : s.tail = c, d.prev = d.next = null, s.length--, d;
                }, "_remove"), f = /*#__PURE__*/ function() {
                    function a(d) {
                        var s = this;
                        e(this, a), this.length = 0, this.head = null, this.tail = null, d?.forEach(function(c) {
                            return s.push(c);
                        });
                    }
                    return m$1(a, "LinkedList"), i(a, [
                        {
                            key: "size",
                            value: /*#__PURE__*/ m$1(function() {
                                return this.length;
                            }, "size")
                        },
                        {
                            key: "insertBefore",
                            value: /*#__PURE__*/ m$1(function(s, c) {
                                return r(c.prev, /*#__PURE__*/ t(s), c, this);
                            }, "insertBefore")
                        },
                        {
                            key: "insertAfter",
                            value: /*#__PURE__*/ m$1(function(s, c) {
                                return r(c, /*#__PURE__*/ t(s), c.next, this);
                            }, "insertAfter")
                        },
                        {
                            key: "insertNodeBefore",
                            value: /*#__PURE__*/ m$1(function(s, c) {
                                return r(c.prev, s, c, this);
                            }, "insertNodeBefore")
                        },
                        {
                            key: "insertNodeAfter",
                            value: /*#__PURE__*/ m$1(function(s, c) {
                                return r(c, s, c.next, this);
                            }, "insertNodeAfter")
                        },
                        {
                            key: "push",
                            value: /*#__PURE__*/ m$1(function(s) {
                                return r(this.tail, /*#__PURE__*/ t(s), null, this);
                            }, "push")
                        },
                        {
                            key: "unshift",
                            value: /*#__PURE__*/ m$1(function(s) {
                                return r(null, /*#__PURE__*/ t(s), this.head, this);
                            }, "unshift")
                        },
                        {
                            key: "remove",
                            value: /*#__PURE__*/ m$1(function(s) {
                                return l(s, this);
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
                            value: /*#__PURE__*/ m$1(function(s) {
                                if (s <= this.length()) {
                                    for(var c = 1, u = this.head; c < s;)u = u.next, c++;
                                    return u.value;
                                }
                            }, "get_object_at")
                        },
                        {
                            key: "set_object_at",
                            value: /*#__PURE__*/ m$1(function(s, c) {
                                if (s <= this.length()) {
                                    for(var u = 1, v = this.head; u < s;)v = v.next, u++;
                                    v.value = c;
                                }
                            }, "set_object_at")
                        }
                    ]), a;
                }();
                E.exports = f;
            },
            function(E, I, o) {
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
                }, E.exports = i;
            },
            function(E, I, o) {
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
                }, E.exports = i;
            },
            function(E, I, o) {
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
                }, E.exports = e;
            },
            function(E, I, o) {
                function i(u) {
                    if (Array.isArray(u)) {
                        for(var v = 0, m = /*#__PURE__*/ Array(u.length); v < u.length; v++)m[v] = u[v];
                        return m;
                    } else return Array.from(u);
                }
                m$1(i, "_toConsumableArray");
                var e = /*#__PURE__*/ o(0), t = /*#__PURE__*/ o(6), r = /*#__PURE__*/ o(3), l = /*#__PURE__*/ o(1), f = /*#__PURE__*/ o(5), a = /*#__PURE__*/ o(4), d = /*#__PURE__*/ o(17), s = /*#__PURE__*/ o(27);
                function c(u) {
                    s.call(this), this.layoutQuality = e.QUALITY, this.createBendsAsNeeded = e.DEFAULT_CREATE_BENDS_AS_NEEDED, this.incremental = e.DEFAULT_INCREMENTAL, this.animationOnLayout = e.DEFAULT_ANIMATION_ON_LAYOUT, this.animationDuringLayout = e.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = e.DEFAULT_ANIMATION_PERIOD, this.uniformLeafNodeSizes = e.DEFAULT_UNIFORM_LEAF_NODE_SIZES, this.edgeToDummyNodes = new Map, this.graphManager = new t(this), this.isLayoutFinished = false, this.isSubLayout = false, this.isRemoteUse = false, u != null && (this.isRemoteUse = u);
                }
                m$1(c, "Layout"), c.RANDOM_SEED = 1, c.prototype = /*#__PURE__*/ Object.create(s.prototype), c.prototype.getGraphManager = function() {
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
                        for(var u, v = /*#__PURE__*/ this.graphManager.getAllEdges(), m = 0; m < v.length; m++)u = v[m];
                        for(var T, y = /*#__PURE__*/ this.graphManager.getRoot().getNodes(), m = 0; m < y.length; m++)T = y[m];
                        this.update(/*#__PURE__*/ this.graphManager.getRoot());
                    }
                }, c.prototype.update = function(u) {
                    if (u == null) this.update2();
                    else if (u instanceof r) {
                        var v = u;
                        if (v.getChild() != null) for(var m = /*#__PURE__*/ v.getChild().getNodes(), T = 0; T < m.length; T++)update(m[T]);
                        if (v.vGraphObject != null) {
                            var y = v.vGraphObject;
                            y.update(v);
                        }
                    } else if (u instanceof l) {
                        var A = u;
                        if (A.vGraphObject != null) {
                            var O = A.vGraphObject;
                            O.update(A);
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
                    if (u == null) this.transform(new a(0, 0));
                    else {
                        var v = new d, m = /*#__PURE__*/ this.graphManager.getRoot().updateLeftTop();
                        if (m != null) {
                            v.setWorldOrgX(u.x), v.setWorldOrgY(u.y), v.setDeviceOrgX(m.x), v.setDeviceOrgY(m.y);
                            for(var T = /*#__PURE__*/ this.getAllNodes(), y, A = 0; A < T.length; A++)y = T[A], y.transform(v);
                        }
                    }
                }, c.prototype.positionNodesRandomly = function(u) {
                    if (u == null) this.positionNodesRandomly(/*#__PURE__*/ this.getGraphManager().getRoot()), this.getGraphManager().getRoot().updateBounds(true);
                    else for(var v, m, T = /*#__PURE__*/ u.getNodes(), y = 0; y < T.length; y++)v = T[y], m = /*#__PURE__*/ v.getChild(), m == null || m.getNodes().length == 0 ? v.scatter() : (this.positionNodesRandomly(m), v.updateBounds());
                }, c.prototype.getFlatForest = function() {
                    for(var u = [], v = true, m = /*#__PURE__*/ this.graphManager.getRoot().getNodes(), T = true, y = 0; y < m.length; y++)m[y].getChild() != null && (T = false);
                    if (!T) return u;
                    var A = new Set, O = [], R = new Map, n = [];
                    for(n = /*#__PURE__*/ n.concat(m); n.length > 0 && v;){
                        for(O.push(n[0]); O.length > 0 && v;){
                            var h = O[0];
                            O.splice(0, 1), A.add(h);
                            for(var g = /*#__PURE__*/ h.getEdges(), y = 0; y < g.length; y++){
                                var p = /*#__PURE__*/ g[y].getOtherEnd(h);
                                if (R.get(h) != p) if (!A.has(p)) O.push(p), R.set(p, h);
                                else {
                                    v = false;
                                    break;
                                }
                            }
                        }
                        if (!v) u = [];
                        else {
                            var D = /*#__PURE__*/ [].concat(/*#__PURE__*/ i(A));
                            u.push(D);
                            for(var y = 0; y < D.length; y++){
                                var N = D[y], M = /*#__PURE__*/ n.indexOf(N);
                                M > -1 && n.splice(M, 1);
                            }
                            A = new Set, R = new Map;
                        }
                    }
                    return u;
                }, c.prototype.createDummyNodesForBendpoints = function(u) {
                    for(var v = [], m = u.source, T = /*#__PURE__*/ this.graphManager.calcLowestCommonAncestor(u.source, u.target), y = 0; y < u.bendpoints.length; y++){
                        var A = /*#__PURE__*/ this.newNode(null);
                        A.setRect(new Point(0, 0), new Dimension(1, 1)), T.add(A);
                        var O = /*#__PURE__*/ this.newEdge(null);
                        this.graphManager.add(O, m, A), v.add(A), m = A;
                    }
                    var O = /*#__PURE__*/ this.newEdge(null);
                    return this.graphManager.add(O, m, u.target), this.edgeToDummyNodes.set(u, v), u.isInterGraph() ? this.graphManager.remove(u) : T.remove(u), v;
                }, c.prototype.createBendpointsFromDummyNodes = function() {
                    var u = [];
                    u = /*#__PURE__*/ u.concat(/*#__PURE__*/ this.graphManager.getAllEdges()), u = /*#__PURE__*/ [].concat(/*#__PURE__*/ i(/*#__PURE__*/ this.edgeToDummyNodes.keys())).concat(u);
                    for(var v = 0; v < u.length; v++){
                        var m = u[v];
                        if (m.bendpoints.length > 0) {
                            for(var T = /*#__PURE__*/ this.edgeToDummyNodes.get(m), y = 0; y < T.length; y++){
                                var A = T[y], O = new a(A.getCenterX(), A.getCenterY()), R = /*#__PURE__*/ m.bendpoints.get(y);
                                R.x = O.x, R.y = O.y, A.getOwner().remove(A);
                            }
                            this.graphManager.add(m, m.source, m.target);
                        }
                    }
                }, c.transform = function(u, v, m, T) {
                    if (m != null && T != null) {
                        var y = v;
                        if (u <= 50) {
                            var A = v / m;
                            y -= (v - A) / 50 * (50 - u);
                        } else {
                            var O = v * T;
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
                    var m = [], T = new Map, y = false, A = null;
                    (v.length == 1 || v.length == 2) && (y = true, A = v[0]);
                    for(var O = 0; O < v.length; O++){
                        var R = v[O], n = R.getNeighborsList().size;
                        T.set(R, R.getNeighborsList().size), n == 1 && m.push(R);
                    }
                    var h = [];
                    for(h = /*#__PURE__*/ h.concat(m); !y;){
                        var g = [];
                        g = /*#__PURE__*/ g.concat(h), h = [];
                        for(var O = 0; O < v.length; O++){
                            var R = v[O], p = /*#__PURE__*/ v.indexOf(R);
                            p >= 0 && v.splice(p, 1);
                            var D = /*#__PURE__*/ R.getNeighborsList();
                            D.forEach(function(C) {
                                if (m.indexOf(C) < 0) {
                                    var w = /*#__PURE__*/ T.get(C), P = w - 1;
                                    P == 1 && h.push(C), T.set(C, P);
                                }
                            });
                        }
                        m = /*#__PURE__*/ m.concat(h), (v.length == 1 || v.length == 2) && (y = true, A = v[0]);
                    }
                    return A;
                }, c.prototype.setGraphManager = function(u) {
                    this.graphManager = u;
                }, E.exports = c;
            },
            function(E, I, o) {
                function i() {}
                m$1(i, "RandomSeed"), i.seed = 1, i.x = 0, i.nextDouble = function() {
                    return i.x = Math.sin(i.seed++) * 1e4, i.x - Math.floor(i.x);
                }, E.exports = i;
            },
            function(E, I, o) {
                var i = /*#__PURE__*/ o(4);
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
                }, E.exports = e;
            },
            function(E, I, o) {
                function i(s) {
                    if (Array.isArray(s)) {
                        for(var c = 0, u = /*#__PURE__*/ Array(s.length); c < s.length; c++)u[c] = s[c];
                        return u;
                    } else return Array.from(s);
                }
                m$1(i, "_toConsumableArray");
                var e = /*#__PURE__*/ o(15), t = /*#__PURE__*/ o(7), r = /*#__PURE__*/ o(0), l = /*#__PURE__*/ o(8), f = /*#__PURE__*/ o(9);
                function a() {
                    e.call(this), this.useSmartIdealEdgeLengthCalculation = t.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.idealEdgeLength = t.DEFAULT_EDGE_LENGTH, this.springConstant = t.DEFAULT_SPRING_STRENGTH, this.repulsionConstant = t.DEFAULT_REPULSION_STRENGTH, this.gravityConstant = t.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = t.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = t.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = t.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.displacementThresholdPerNode = 3 * t.DEFAULT_EDGE_LENGTH / 100, this.coolingFactor = t.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.initialCoolingFactor = t.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.totalDisplacement = 0, this.oldTotalDisplacement = 0, this.maxIterations = t.MAX_ITERATIONS;
                }
                m$1(a, "FDLayout"), a.prototype = /*#__PURE__*/ Object.create(e.prototype);
                for(var d in e)a[d] = e[d];
                a.prototype.initParameters = function() {
                    e.prototype.initParameters.call(this, arguments), this.totalIterations = 0, this.notAnimatedIterations = 0, this.useFRGridVariant = t.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION, this.grid = [];
                }, a.prototype.calcIdealEdgeLengths = function() {
                    for(var s, c, u, v, m, T, y = /*#__PURE__*/ this.getGraphManager().getAllEdges(), A = 0; A < y.length; A++)s = y[A], s.idealLength = this.idealEdgeLength, s.isInterGraph && (u = /*#__PURE__*/ s.getSource(), v = /*#__PURE__*/ s.getTarget(), m = /*#__PURE__*/ s.getSourceInLca().getEstimatedSize(), T = /*#__PURE__*/ s.getTargetInLca().getEstimatedSize(), this.useSmartIdealEdgeLengthCalculation && (s.idealLength += m + T - 2 * r.SIMPLE_NODE_SIZE), c = /*#__PURE__*/ s.getLca().getInclusionTreeDepth(), s.idealLength += t.DEFAULT_EDGE_LENGTH * t.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR * (u.getInclusionTreeDepth() + v.getInclusionTreeDepth() - 2 * c));
                }, a.prototype.initSpringEmbedder = function() {
                    var s = this.getAllNodes().length;
                    this.incremental ? (s > t.ADAPTATION_LOWER_NODE_LIMIT && (this.coolingFactor = /*#__PURE__*/ Math.max(this.coolingFactor * t.COOLING_ADAPTATION_FACTOR, this.coolingFactor - (s - t.ADAPTATION_LOWER_NODE_LIMIT) / (t.ADAPTATION_UPPER_NODE_LIMIT - t.ADAPTATION_LOWER_NODE_LIMIT) * this.coolingFactor * (1 - t.COOLING_ADAPTATION_FACTOR))), this.maxNodeDisplacement = t.MAX_NODE_DISPLACEMENT_INCREMENTAL) : (s > t.ADAPTATION_LOWER_NODE_LIMIT ? this.coolingFactor = /*#__PURE__*/ Math.max(t.COOLING_ADAPTATION_FACTOR, 1 - (s - t.ADAPTATION_LOWER_NODE_LIMIT) / (t.ADAPTATION_UPPER_NODE_LIMIT - t.ADAPTATION_LOWER_NODE_LIMIT) * (1 - t.COOLING_ADAPTATION_FACTOR)) : this.coolingFactor = 1, this.initialCoolingFactor = this.coolingFactor, this.maxNodeDisplacement = t.MAX_NODE_DISPLACEMENT), this.maxIterations = /*#__PURE__*/ Math.max(this.getAllNodes().length * 5, this.maxIterations), this.totalDisplacementThreshold = this.displacementThresholdPerNode * this.getAllNodes().length, this.repulsionRange = /*#__PURE__*/ this.calcRepulsionRange();
                }, a.prototype.calcSpringForces = function() {
                    for(var s = /*#__PURE__*/ this.getAllEdges(), c, u = 0; u < s.length; u++)c = s[u], this.calcSpringForce(c, c.idealLength);
                }, a.prototype.calcRepulsionForces = function() {
                    var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true, c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, u, v, m, T, y = /*#__PURE__*/ this.getAllNodes(), A;
                    if (this.useFRGridVariant) for(this.totalIterations % t.GRID_CALCULATION_CHECK_PERIOD == 1 && s && this.updateGrid(), A = new Set, u = 0; u < y.length; u++)m = y[u], this.calculateRepulsionForceOfANode(m, A, s, c), A.add(m);
                    else for(u = 0; u < y.length; u++)for(m = y[u], v = u + 1; v < y.length; v++)T = y[v], m.getOwner() == T.getOwner() && this.calcRepulsionForce(m, T);
                }, a.prototype.calcGravitationalForces = function() {
                    for(var s, c = /*#__PURE__*/ this.getAllNodesToApplyGravitation(), u = 0; u < c.length; u++)s = c[u], this.calcGravitationalForce(s);
                }, a.prototype.moveNodes = function() {
                    for(var s = /*#__PURE__*/ this.getAllNodes(), c, u = 0; u < s.length; u++)c = s[u], c.move();
                }, a.prototype.calcSpringForce = function(s, c) {
                    var u = /*#__PURE__*/ s.getSource(), v = /*#__PURE__*/ s.getTarget(), m, T, y, A;
                    if (this.uniformLeafNodeSizes && u.getChild() == null && v.getChild() == null) s.updateLengthSimple();
                    else if (s.updateLength(), s.isOverlapingSourceAndTarget) return;
                    m = /*#__PURE__*/ s.getLength(), m != 0 && (T = this.springConstant * (m - c), y = T * (s.lengthX / m), A = T * (s.lengthY / m), u.springForceX += y, u.springForceY += A, v.springForceX -= y, v.springForceY -= A);
                }, a.prototype.calcRepulsionForce = function(s, c) {
                    var u = /*#__PURE__*/ s.getRect(), v = /*#__PURE__*/ c.getRect(), m = new Array(2), T = new Array(4), y, A, O, R, n, h, g;
                    if (u.intersects(v)) {
                        l.calcSeparationAmount(u, v, m, t.DEFAULT_EDGE_LENGTH / 2), h = 2 * m[0], g = 2 * m[1];
                        var p = s.noOfChildren * c.noOfChildren / (s.noOfChildren + c.noOfChildren);
                        s.repulsionForceX -= p * h, s.repulsionForceY -= p * g, c.repulsionForceX += p * h, c.repulsionForceY += p * g;
                    } else this.uniformLeafNodeSizes && s.getChild() == null && c.getChild() == null ? (y = v.getCenterX() - u.getCenterX(), A = v.getCenterY() - u.getCenterY()) : (l.getIntersection(u, v, T), y = T[2] - T[0], A = T[3] - T[1]), Math.abs(y) < t.MIN_REPULSION_DIST && (y = f.sign(y) * t.MIN_REPULSION_DIST), Math.abs(A) < t.MIN_REPULSION_DIST && (A = f.sign(A) * t.MIN_REPULSION_DIST), O = y * y + A * A, R = /*#__PURE__*/ Math.sqrt(O), n = this.repulsionConstant * s.noOfChildren * c.noOfChildren / O, h = n * y / R, g = n * A / R, s.repulsionForceX -= h, s.repulsionForceY -= g, c.repulsionForceX += h, c.repulsionForceY += g;
                }, a.prototype.calcGravitationalForce = function(s) {
                    var c, u, v, m, T, y, A, O;
                    c = /*#__PURE__*/ s.getOwner(), u = (c.getRight() + c.getLeft()) / 2, v = (c.getTop() + c.getBottom()) / 2, m = s.getCenterX() - u, T = s.getCenterY() - v, y = Math.abs(m) + s.getWidth() / 2, A = Math.abs(T) + s.getHeight() / 2, s.getOwner() == this.graphManager.getRoot() ? (O = c.getEstimatedSize() * this.gravityRangeFactor, (y > O || A > O) && (s.gravitationForceX = -this.gravityConstant * m, s.gravitationForceY = -this.gravityConstant * T)) : (O = c.getEstimatedSize() * this.compoundGravityRangeFactor, (y > O || A > O) && (s.gravitationForceX = -this.gravityConstant * m * this.compoundGravityConstant, s.gravitationForceY = -this.gravityConstant * T * this.compoundGravityConstant));
                }, a.prototype.isConverged = function() {
                    var s, c = false;
                    return this.totalIterations > this.maxIterations / 3 && (c = Math.abs(this.totalDisplacement - this.oldTotalDisplacement) < 2), s = this.totalDisplacement < this.totalDisplacementThreshold, this.oldTotalDisplacement = this.totalDisplacement, s || c;
                }, a.prototype.animate = function() {
                    this.animationDuringLayout && !this.isSubLayout && (this.notAnimatedIterations == this.animationPeriod ? (this.update(), this.notAnimatedIterations = 0) : this.notAnimatedIterations++);
                }, a.prototype.calcNoOfChildrenForAllNodes = function() {
                    for(var s, c = /*#__PURE__*/ this.graphManager.getAllNodes(), u = 0; u < c.length; u++)s = c[u], s.noOfChildren = /*#__PURE__*/ s.getNoOfChildren();
                }, a.prototype.calcGrid = function(s) {
                    var c = 0, u = 0;
                    c = /*#__PURE__*/ parseInt(/*#__PURE__*/ Math.ceil((s.getRight() - s.getLeft()) / this.repulsionRange)), u = /*#__PURE__*/ parseInt(/*#__PURE__*/ Math.ceil((s.getBottom() - s.getTop()) / this.repulsionRange));
                    for(var v = new Array(c), m = 0; m < c; m++)v[m] = new Array(u);
                    for(var m = 0; m < c; m++)for(var T = 0; T < u; T++)v[m][T] = new Array;
                    return v;
                }, a.prototype.addNodeToGrid = function(s, c, u) {
                    var v = 0, m = 0, T = 0, y = 0;
                    v = /*#__PURE__*/ parseInt(/*#__PURE__*/ Math.floor((s.getRect().x - c) / this.repulsionRange)), m = /*#__PURE__*/ parseInt(/*#__PURE__*/ Math.floor((s.getRect().width + s.getRect().x - c) / this.repulsionRange)), T = /*#__PURE__*/ parseInt(/*#__PURE__*/ Math.floor((s.getRect().y - u) / this.repulsionRange)), y = /*#__PURE__*/ parseInt(/*#__PURE__*/ Math.floor((s.getRect().height + s.getRect().y - u) / this.repulsionRange));
                    for(var A = v; A <= m; A++)for(var O = T; O <= y; O++)this.grid[A][O].push(s), s.setGridCoordinates(v, m, T, y);
                }, a.prototype.updateGrid = function() {
                    var s, c, u = /*#__PURE__*/ this.getAllNodes();
                    for(this.grid = /*#__PURE__*/ this.calcGrid(/*#__PURE__*/ this.graphManager.getRoot()), s = 0; s < u.length; s++)c = u[s], this.addNodeToGrid(c, /*#__PURE__*/ this.graphManager.getRoot().getLeft(), /*#__PURE__*/ this.graphManager.getRoot().getTop());
                }, a.prototype.calculateRepulsionForceOfANode = function(s, c, u, v) {
                    if (this.totalIterations % t.GRID_CALCULATION_CHECK_PERIOD == 1 && u || v) {
                        var m = new Set;
                        s.surrounding = new Array;
                        for(var T, y = this.grid, A = s.startX - 1; A < s.finishX + 2; A++)for(var O = s.startY - 1; O < s.finishY + 2; O++)if (!(A < 0 || O < 0 || A >= y.length || O >= y[0].length)) {
                            for(var R = 0; R < y[A][O].length; R++)if (T = y[A][O][R], !(s.getOwner() != T.getOwner() || s == T) && !c.has(T) && !m.has(T)) {
                                var n = Math.abs(s.getCenterX() - T.getCenterX()) - (s.getWidth() / 2 + T.getWidth() / 2), h = Math.abs(s.getCenterY() - T.getCenterY()) - (s.getHeight() / 2 + T.getHeight() / 2);
                                n <= this.repulsionRange && h <= this.repulsionRange && m.add(T);
                            }
                        }
                        s.surrounding = /*#__PURE__*/ [].concat(/*#__PURE__*/ i(m));
                    }
                    for(A = 0; A < s.surrounding.length; A++)this.calcRepulsionForce(s, s.surrounding[A]);
                }, a.prototype.calcRepulsionRange = function() {
                    return 0;
                }, E.exports = a;
            },
            function(E, I, o) {
                var i = /*#__PURE__*/ o(1), e = /*#__PURE__*/ o(7);
                function t(l, f, a) {
                    i.call(this, l, f, a), this.idealLength = e.DEFAULT_EDGE_LENGTH;
                }
                m$1(t, "FDLayoutEdge"), t.prototype = /*#__PURE__*/ Object.create(i.prototype);
                for(var r in i)t[r] = i[r];
                E.exports = t;
            },
            function(E, I, o) {
                var i = /*#__PURE__*/ o(3);
                function e(r, l, f, a) {
                    i.call(this, r, l, f, a), this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0, this.startX = 0, this.finishX = 0, this.startY = 0, this.finishY = 0, this.surrounding = [];
                }
                m$1(e, "FDLayoutNode"), e.prototype = /*#__PURE__*/ Object.create(i.prototype);
                for(var t in i)e[t] = i[t];
                e.prototype.setGridCoordinates = function(r, l, f, a) {
                    this.startX = r, this.finishX = l, this.startY = f, this.finishY = a;
                }, E.exports = e;
            },
            function(E, I, o) {
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
                }, E.exports = i;
            },
            function(E, I, o) {
                var i = /*#__PURE__*/ o(14);
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
                }, E.exports = e;
            },
            function(E, I, o) {
                var i = /*#__PURE__*/ o(14);
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
                }, E.exports = e;
            },
            function(E, I, o) {
                var i = /*#__PURE__*/ function() {
                    function l(f, a) {
                        for(var d = 0; d < a.length; d++){
                            var s = a[d];
                            s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(f, s.key, s);
                        }
                    }
                    return m$1(l, "defineProperties"), function(f, a, d) {
                        return a && l(f.prototype, a), d && l(f, d), f;
                    };
                }();
                function e(l, f) {
                    if (!(l instanceof f)) throw new TypeError("Cannot call a class as a function");
                }
                m$1(e, "_classCallCheck");
                var t = /*#__PURE__*/ o(11), r = /*#__PURE__*/ function() {
                    function l(f, a) {
                        e(this, l), (a !== null || a !== void 0) && (this.compareFunction = this._defaultCompareFunction);
                        var d = void 0;
                        f instanceof t ? d = /*#__PURE__*/ f.size() : d = f.length, this._quicksort(f, 0, d - 1);
                    }
                    return m$1(l, "Quicksort"), i(l, [
                        {
                            key: "_quicksort",
                            value: /*#__PURE__*/ m$1(function(a, d, s) {
                                if (d < s) {
                                    var c = /*#__PURE__*/ this._partition(a, d, s);
                                    this._quicksort(a, d, c), this._quicksort(a, c + 1, s);
                                }
                            }, "_quicksort")
                        },
                        {
                            key: "_partition",
                            value: /*#__PURE__*/ m$1(function(a, d, s) {
                                for(var c = /*#__PURE__*/ this._get(a, d), u = d, v = s;;){
                                    for(; this.compareFunction(c, /*#__PURE__*/ this._get(a, v));)v--;
                                    for(; this.compareFunction(/*#__PURE__*/ this._get(a, u), c);)u++;
                                    if (u < v) this._swap(a, u, v), u++, v--;
                                    else return v;
                                }
                            }, "_partition")
                        },
                        {
                            key: "_get",
                            value: /*#__PURE__*/ m$1(function(a, d) {
                                return a instanceof t ? a.get_object_at(d) : a[d];
                            }, "_get")
                        },
                        {
                            key: "_set",
                            value: /*#__PURE__*/ m$1(function(a, d, s) {
                                a instanceof t ? a.set_object_at(d, s) : a[d] = s;
                            }, "_set")
                        },
                        {
                            key: "_swap",
                            value: /*#__PURE__*/ m$1(function(a, d, s) {
                                var c = /*#__PURE__*/ this._get(a, d);
                                this._set(a, d, /*#__PURE__*/ this._get(a, s)), this._set(a, s, c);
                            }, "_swap")
                        },
                        {
                            key: "_defaultCompareFunction",
                            value: /*#__PURE__*/ m$1(function(a, d) {
                                return d > a;
                            }, "_defaultCompareFunction")
                        }
                    ]), l;
                }();
                E.exports = r;
            },
            function(E, I, o) {
                var i = /*#__PURE__*/ function() {
                    function r(l, f) {
                        for(var a = 0; a < f.length; a++){
                            var d = f[a];
                            d.enumerable = d.enumerable || false, d.configurable = true, "value" in d && (d.writable = true), Object.defineProperty(l, d.key, d);
                        }
                    }
                    return m$1(r, "defineProperties"), function(l, f, a) {
                        return f && r(l.prototype, f), a && r(l, a), l;
                    };
                }();
                function e(r, l) {
                    if (!(r instanceof l)) throw new TypeError("Cannot call a class as a function");
                }
                m$1(e, "_classCallCheck");
                var t = /*#__PURE__*/ function() {
                    function r(l, f) {
                        var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : -1, s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : -1;
                        e(this, r), this.sequence1 = l, this.sequence2 = f, this.match_score = a, this.mismatch_penalty = d, this.gap_penalty = s, this.iMax = l.length + 1, this.jMax = f.length + 1, this.grid = new Array(this.iMax);
                        for(var c = 0; c < this.iMax; c++){
                            this.grid[c] = new Array(this.jMax);
                            for(var u = 0; u < this.jMax; u++)this.grid[c][u] = 0;
                        }
                        this.tracebackGrid = new Array(this.iMax);
                        for(var v = 0; v < this.iMax; v++){
                            this.tracebackGrid[v] = new Array(this.jMax);
                            for(var m = 0; m < this.jMax; m++)this.tracebackGrid[v][m] = [
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
                                for(var a = 1; a < this.iMax; a++)this.grid[a][0] = this.grid[a - 1][0] + this.gap_penalty, this.tracebackGrid[a][0] = [
                                    false,
                                    true,
                                    false
                                ];
                                for(var d = 1; d < this.iMax; d++)for(var s = 1; s < this.jMax; s++){
                                    var c = void 0;
                                    this.sequence1[d - 1] === this.sequence2[s - 1] ? c = this.grid[d - 1][s - 1] + this.match_score : c = this.grid[d - 1][s - 1] + this.mismatch_penalty;
                                    var u = this.grid[d - 1][s] + this.gap_penalty, v = this.grid[d][s - 1] + this.gap_penalty, m = [
                                        c,
                                        u,
                                        v
                                    ], T = /*#__PURE__*/ this.arrayAllMaxIndexes(m);
                                    this.grid[d][s] = m[T[0]], this.tracebackGrid[d][s] = [
                                        /*#__PURE__*/ T.includes(0),
                                        /*#__PURE__*/ T.includes(1),
                                        /*#__PURE__*/ T.includes(2)
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
                                    var a = f[0], d = this.tracebackGrid[a.pos[0]][a.pos[1]];
                                    d[0] && f.push({
                                        pos: [
                                            a.pos[0] - 1,
                                            a.pos[1] - 1
                                        ],
                                        seq1: this.sequence1[a.pos[0] - 1] + a.seq1,
                                        seq2: this.sequence2[a.pos[1] - 1] + a.seq2
                                    }), d[1] && f.push({
                                        pos: [
                                            a.pos[0] - 1,
                                            a.pos[1]
                                        ],
                                        seq1: this.sequence1[a.pos[0] - 1] + a.seq1,
                                        seq2: "-" + a.seq2
                                    }), d[2] && f.push({
                                        pos: [
                                            a.pos[0],
                                            a.pos[1] - 1
                                        ],
                                        seq1: "-" + a.seq1,
                                        seq2: this.sequence2[a.pos[1] - 1] + a.seq2
                                    }), a.pos[0] === 0 && a.pos[1] === 0 && this.alignments.push({
                                        sequence1: a.seq1,
                                        sequence2: a.seq2
                                    }), f.shift();
                                }
                                return this.alignments;
                            }, "alignmentTraceback")
                        },
                        {
                            key: "getAllIndexes",
                            value: /*#__PURE__*/ m$1(function(f, a) {
                                for(var d = [], s = -1; (s = /*#__PURE__*/ f.indexOf(a, s + 1)) !== -1;)d.push(s);
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
                E.exports = t;
            },
            function(E, I, o) {
                var i = /*#__PURE__*/ m$1(function() {}, "layoutBase");
                i.FDLayout = /*#__PURE__*/ o(18), i.FDLayoutConstants = /*#__PURE__*/ o(7), i.FDLayoutEdge = /*#__PURE__*/ o(19), i.FDLayoutNode = /*#__PURE__*/ o(20), i.DimensionD = /*#__PURE__*/ o(21), i.HashMap = /*#__PURE__*/ o(22), i.HashSet = /*#__PURE__*/ o(23), i.IGeometry = /*#__PURE__*/ o(8), i.IMath = /*#__PURE__*/ o(9), i.Integer = /*#__PURE__*/ o(10), i.Point = /*#__PURE__*/ o(12), i.PointD = /*#__PURE__*/ o(4), i.RandomSeed = /*#__PURE__*/ o(16), i.RectangleD = /*#__PURE__*/ o(13), i.Transform = /*#__PURE__*/ o(17), i.UniqueIDGeneretor = /*#__PURE__*/ o(14), i.Quicksort = /*#__PURE__*/ o(24), i.LinkedList = /*#__PURE__*/ o(11), i.LGraphObject = /*#__PURE__*/ o(2), i.LGraph = /*#__PURE__*/ o(5), i.LEdge = /*#__PURE__*/ o(1), i.LGraphManager = /*#__PURE__*/ o(6), i.LNode = /*#__PURE__*/ o(3), i.Layout = /*#__PURE__*/ o(15), i.LayoutConstants = /*#__PURE__*/ o(0), i.NeedlemanWunsch = /*#__PURE__*/ o(25), E.exports = i;
            },
            function(E, I, o) {
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
                }, E.exports = i;
            }
        ]);
    });
});
var vt = /*#__PURE__*/ n((it, dt)=>{
    m$1(function(I, o) {
        typeof it == "object" && typeof dt == "object" ? dt.exports = /*#__PURE__*/ o(/*#__PURE__*/ pt()) : typeof define == "function" && define.amd ? define([
            "layout-base"
        ], o) : typeof it == "object" ? it.coseBase = /*#__PURE__*/ o(/*#__PURE__*/ pt()) : I.coseBase = /*#__PURE__*/ o(I.layoutBase);
    }, "webpackUniversalModuleDefinition")(it, function(E) {
        return function(I) {
            var o = {};
            function i(e) {
                if (o[e]) return o[e].exports;
                var t = o[e] = {
                    i: e,
                    l: false,
                    exports: {}
                };
                return I[e].call(t.exports, t, t.exports, i), t.l = true, t.exports;
            }
            return m$1(i, "__webpack_require__"), i.m = I, i.c = o, i.i = function(e) {
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
            function(I, o) {
                I.exports = E;
            },
            function(I, o, i) {
                var e = i(0).FDLayoutConstants;
                function t() {}
                m$1(t, "CoSEConstants");
                for(var r in e)t[r] = e[r];
                t.DEFAULT_USE_MULTI_LEVEL_SCALING = false, t.DEFAULT_RADIAL_SEPARATION = e.DEFAULT_EDGE_LENGTH, t.DEFAULT_COMPONENT_SEPERATION = 60, t.TILE = true, t.TILING_PADDING_VERTICAL = 10, t.TILING_PADDING_HORIZONTAL = 10, t.TREE_REDUCTION_ON_INCREMENTAL = false, I.exports = t;
            },
            function(I, o, i) {
                var e = i(0).FDLayoutEdge;
                function t(l, f, a) {
                    e.call(this, l, f, a);
                }
                m$1(t, "CoSEEdge"), t.prototype = /*#__PURE__*/ Object.create(e.prototype);
                for(var r in e)t[r] = e[r];
                I.exports = t;
            },
            function(I, o, i) {
                var e = i(0).LGraph;
                function t(l, f, a) {
                    e.call(this, l, f, a);
                }
                m$1(t, "CoSEGraph"), t.prototype = /*#__PURE__*/ Object.create(e.prototype);
                for(var r in e)t[r] = e[r];
                I.exports = t;
            },
            function(I, o, i) {
                var e = i(0).LGraphManager;
                function t(l) {
                    e.call(this, l);
                }
                m$1(t, "CoSEGraphManager"), t.prototype = /*#__PURE__*/ Object.create(e.prototype);
                for(var r in e)t[r] = e[r];
                I.exports = t;
            },
            function(I, o, i) {
                var e = i(0).FDLayoutNode, t = i(0).IMath;
                function r(f, a, d, s) {
                    e.call(this, f, a, d, s);
                }
                m$1(r, "CoSENode"), r.prototype = /*#__PURE__*/ Object.create(e.prototype);
                for(var l in e)r[l] = e[l];
                r.prototype.move = function() {
                    var f = /*#__PURE__*/ this.graphManager.getLayout();
                    this.displacementX = f.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.noOfChildren, this.displacementY = f.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.noOfChildren, Math.abs(this.displacementX) > f.coolingFactor * f.maxNodeDisplacement && (this.displacementX = f.coolingFactor * f.maxNodeDisplacement * t.sign(this.displacementX)), Math.abs(this.displacementY) > f.coolingFactor * f.maxNodeDisplacement && (this.displacementY = f.coolingFactor * f.maxNodeDisplacement * t.sign(this.displacementY)), this.child == null ? this.moveBy(this.displacementX, this.displacementY) : this.child.getNodes().length == 0 ? this.moveBy(this.displacementX, this.displacementY) : this.propogateDisplacementToChildren(this.displacementX, this.displacementY), f.totalDisplacement += Math.abs(this.displacementX) + Math.abs(this.displacementY), this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0;
                }, r.prototype.propogateDisplacementToChildren = function(f, a) {
                    for(var d = /*#__PURE__*/ this.getChild().getNodes(), s, c = 0; c < d.length; c++)s = d[c], s.getChild() == null ? (s.moveBy(f, a), s.displacementX += f, s.displacementY += a) : s.propogateDisplacementToChildren(f, a);
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
                }, I.exports = r;
            },
            function(I, o, i) {
                var e = i(0).FDLayout, t = /*#__PURE__*/ i(4), r = /*#__PURE__*/ i(3), l = /*#__PURE__*/ i(5), f = /*#__PURE__*/ i(2), a = /*#__PURE__*/ i(1), d = i(0).FDLayoutConstants, s = i(0).LayoutConstants, c = i(0).Point, u = i(0).PointD, v = i(0).Layout, m = i(0).Integer, T = i(0).IGeometry, y = i(0).LGraph, A = i(0).Transform;
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
                    e.prototype.initParameters.call(this, arguments), this.isSubLayout || (a.DEFAULT_EDGE_LENGTH < 10 ? this.idealEdgeLength = 10 : this.idealEdgeLength = a.DEFAULT_EDGE_LENGTH, this.useSmartIdealEdgeLengthCalculation = a.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.springConstant = d.DEFAULT_SPRING_STRENGTH, this.repulsionConstant = d.DEFAULT_REPULSION_STRENGTH, this.gravityConstant = d.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = d.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = d.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = d.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.prunedNodesAll = [], this.growTreeIterations = 0, this.afterGrowthIterations = 0, this.isTreeGrowing = false, this.isGrowthFinished = false, this.coolingCycle = 0, this.maxCoolingCycle = this.maxIterations / d.CONVERGENCE_CHECK_PERIOD, this.finalTemperature = d.CONVERGENCE_CHECK_PERIOD / this.maxIterations, this.coolingAdjuster = 1);
                }, O.prototype.layout = function() {
                    var n = s.DEFAULT_CREATE_BENDS_AS_NEEDED;
                    return n && (this.createBendpoints(), this.graphManager.resetAllEdges()), this.level = 0, this.classicLayout();
                }, O.prototype.classicLayout = function() {
                    if (this.nodesWithGravity = /*#__PURE__*/ this.calculateNodesToApplyGravitationTo(), this.graphManager.setAllNodesToApplyGravitation(this.nodesWithGravity), this.calcNoOfChildrenForAllNodes(), this.graphManager.calcLowestCommonAncestors(), this.graphManager.calcInclusionTreeDepths(), this.graphManager.getRoot().calcEstimatedSize(), this.calcIdealEdgeLengths(), this.incremental) {
                        if (a.TREE_REDUCTION_ON_INCREMENTAL) {
                            this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
                            var h = new Set(this.getAllNodes()), g = /*#__PURE__*/ this.nodesWithGravity.filter(function(N) {
                                return h.has(N);
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
                            var n = new Set(this.getAllNodes()), h = /*#__PURE__*/ this.nodesWithGravity.filter(function(D) {
                                return n.has(D);
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
                        var p = n[g].rect, D = n[g].id;
                        h[D] = {
                            id: D,
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
                    var n = [], h, g = /*#__PURE__*/ this.graphManager.getGraphs(), p = g.length, D;
                    for(D = 0; D < p; D++)h = g[D], h.updateConnected(), h.isConnected || (n = /*#__PURE__*/ n.concat(/*#__PURE__*/ h.getNodes()));
                    return n;
                }, O.prototype.createBendpoints = function() {
                    var n = [];
                    n = /*#__PURE__*/ n.concat(/*#__PURE__*/ this.graphManager.getAllEdges());
                    var h = new Set, g;
                    for(g = 0; g < n.length; g++){
                        var p = n[g];
                        if (!h.has(p)) {
                            var D = /*#__PURE__*/ p.getSource(), N = /*#__PURE__*/ p.getTarget();
                            if (D == N) p.getBendpoints().push(new u), p.getBendpoints().push(new u), this.createDummyNodesForBendpoints(p), h.add(p);
                            else {
                                var M = [];
                                if (M = /*#__PURE__*/ M.concat(/*#__PURE__*/ D.getEdgeListToNode(N)), M = /*#__PURE__*/ M.concat(/*#__PURE__*/ N.getEdgeListToNode(D)), !h.has(M[0])) {
                                    if (M.length > 1) {
                                        var C;
                                        for(C = 0; C < M.length; C++){
                                            var w = M[C];
                                            w.getBendpoints().push(new u), this.createDummyNodesForBendpoints(w);
                                        }
                                    }
                                    M.forEach(function(P) {
                                        h.add(P);
                                    });
                                }
                            }
                        }
                        if (h.size == n.length) break;
                    }
                }, O.prototype.positionNodesRadially = function(n) {
                    for(var h = new c(0, 0), g = /*#__PURE__*/ Math.ceil(/*#__PURE__*/ Math.sqrt(n.length)), p = 0, D = 0, N = 0, M = new u(0, 0), C = 0; C < n.length; C++){
                        C % g == 0 && (N = 0, D = p, C != 0 && (D += a.DEFAULT_COMPONENT_SEPERATION), p = 0);
                        var w = n[C], P = /*#__PURE__*/ v.findCenterOfTree(w);
                        h.x = N, h.y = D, M = /*#__PURE__*/ O.radialLayout(w, P, h), M.y > p && (p = /*#__PURE__*/ Math.floor(M.y)), N = /*#__PURE__*/ Math.floor(M.x + a.DEFAULT_COMPONENT_SEPERATION);
                    }
                    this.transform(new u(s.WORLD_CENTER_X - M.x / 2, s.WORLD_CENTER_Y - M.y / 2));
                }, O.radialLayout = function(n, h, g) {
                    var p = /*#__PURE__*/ Math.max(/*#__PURE__*/ this.maxDiagonalInTree(n), a.DEFAULT_RADIAL_SEPARATION);
                    O.branchRadialLayout(h, null, 0, 359, 0, p);
                    var D = /*#__PURE__*/ y.calculateBounds(n), N = new A;
                    N.setDeviceOrgX(/*#__PURE__*/ D.getMinX()), N.setDeviceOrgY(/*#__PURE__*/ D.getMinY()), N.setWorldOrgX(g.x), N.setWorldOrgY(g.y);
                    for(var M = 0; M < n.length; M++){
                        var C = n[M];
                        C.transform(N);
                    }
                    var w = new u(D.getMaxX(), D.getMaxY());
                    return N.inverseTransformPoint(w);
                }, O.branchRadialLayout = function(n, h, g, p, D, N) {
                    var M = (p - g + 1) / 2;
                    M < 0 && (M += 180);
                    var C = (M + g) % 360, w = C * T.TWO_PI / 360, U = D * Math.cos(w), F = D * Math.sin(w);
                    n.setCenter(U, F);
                    var x = [];
                    x = /*#__PURE__*/ x.concat(/*#__PURE__*/ n.getEdges());
                    var G = x.length;
                    h != null && G--;
                    for(var S = 0, _ = x.length, X, b = /*#__PURE__*/ n.getEdgesBetween(h); b.length > 1;){
                        var H = b[0];
                        b.splice(0, 1);
                        var z = /*#__PURE__*/ x.indexOf(H);
                        z >= 0 && x.splice(z, 1), _--, G--;
                    }
                    h != null ? X = (x.indexOf(b[0]) + 1) % _ : X = 0;
                    for(var B = Math.abs(p - g) / G, Y = X; S != G; Y = ++Y % _){
                        var K = /*#__PURE__*/ x[Y].getOtherEnd(n);
                        if (K != h) {
                            var j = (g + S * B) % 360, $ = (j + B) % 360;
                            O.branchRadialLayout(K, n, j, $, D + N, N), S++;
                        }
                    }
                }, O.maxDiagonalInTree = function(n) {
                    for(var h = m.MIN_VALUE, g = 0; g < n.length; g++){
                        var p = n[g], D = /*#__PURE__*/ p.getDiagonal();
                        D > h && (h = D);
                    }
                    return h;
                }, O.prototype.calcRepulsionRange = function() {
                    return 2 * (this.level + 1) * this.idealEdgeLength;
                }, O.prototype.groupZeroDegreeMembers = function() {
                    var n = this, h = {};
                    this.memberGroups = {}, this.idToDummyNode = {};
                    for(var g = [], p = /*#__PURE__*/ this.graphManager.getAllNodes(), D = 0; D < p.length; D++){
                        var N = p[D], M = /*#__PURE__*/ N.getParent();
                        this.getNodeDegreeWithChildren(N) === 0 && (M.id == null || !this.getToBeTiled(M)) && g.push(N);
                    }
                    for(var D = 0; D < g.length; D++){
                        var N = g[D], C = N.getParent().id;
                        typeof h[C] > "u" && (h[C] = []), h[C] = /*#__PURE__*/ h[C].concat(N);
                    }
                    Object.keys(h).forEach(function(w) {
                        if (h[w].length > 1) {
                            var P = "DummyCompound_" + w;
                            n.memberGroups[P] = h[w];
                            var U = /*#__PURE__*/ h[w][0].getParent(), F = new l(n.graphManager);
                            F.id = P, F.paddingLeft = U.paddingLeft || 0, F.paddingRight = U.paddingRight || 0, F.paddingBottom = U.paddingBottom || 0, F.paddingTop = U.paddingTop || 0, n.idToDummyNode[P] = F;
                            var x = /*#__PURE__*/ n.getGraphManager().add(/*#__PURE__*/ n.newGraph(), F), G = /*#__PURE__*/ U.getChild();
                            G.add(F);
                            for(var S = 0; S < h[w].length; S++){
                                var _ = h[w][S];
                                G.remove(_), x.add(_);
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
                        var h = this.compoundOrder[n], g = h.id, p = h.paddingLeft, D = h.paddingTop;
                        this.adjustLocations(this.tiledMemberPack[g], h.rect.x, h.rect.y, p, D);
                    }
                }, O.prototype.repopulateZeroDegreeMembers = function() {
                    var n = this, h = this.tiledZeroDegreePack;
                    Object.keys(h).forEach(function(g) {
                        var p = n.idToDummyNode[g], D = p.paddingLeft, N = p.paddingTop;
                        n.adjustLocations(h[g], p.rect.x, p.rect.y, D, N);
                    });
                }, O.prototype.getToBeTiled = function(n) {
                    var h = n.id;
                    if (this.toBeTiled[h] != null) return this.toBeTiled[h];
                    var g = /*#__PURE__*/ n.getChild();
                    if (g == null) return this.toBeTiled[h] = false, false;
                    for(var p = /*#__PURE__*/ g.getNodes(), D = 0; D < p.length; D++){
                        var N = p[D];
                        if (this.getNodeDegree(N) > 0) return this.toBeTiled[h] = false, false;
                        if (N.getChild() == null) {
                            this.toBeTiled[N.id] = false;
                            continue;
                        }
                        if (!this.getToBeTiled(N)) return this.toBeTiled[h] = false, false;
                    }
                    return this.toBeTiled[h] = true, true;
                }, O.prototype.getNodeDegree = function(n) {
                    for(var h = n.id, g = /*#__PURE__*/ n.getEdges(), p = 0, D = 0; D < g.length; D++){
                        var N = g[D];
                        N.getSource().id !== N.getTarget().id && (p = p + 1);
                    }
                    return p;
                }, O.prototype.getNodeDegreeWithChildren = function(n) {
                    var h = /*#__PURE__*/ this.getNodeDegree(n);
                    if (n.getChild() == null) return h;
                    for(var g = /*#__PURE__*/ n.getChild().getNodes(), p = 0; p < g.length; p++){
                        var D = g[p];
                        h += /*#__PURE__*/ this.getNodeDegreeWithChildren(D);
                    }
                    return h;
                }, O.prototype.performDFSOnCompounds = function() {
                    this.compoundOrder = [], this.fillCompexOrderByDFS(/*#__PURE__*/ this.graphManager.getRoot().getNodes());
                }, O.prototype.fillCompexOrderByDFS = function(n) {
                    for(var h = 0; h < n.length; h++){
                        var g = n[h];
                        g.getChild() != null && this.fillCompexOrderByDFS(/*#__PURE__*/ g.getChild().getNodes()), this.getToBeTiled(g) && this.compoundOrder.push(g);
                    }
                }, O.prototype.adjustLocations = function(n, h, g, p, D) {
                    h += p, g += D;
                    for(var N = h, M = 0; M < n.rows.length; M++){
                        var C = n.rows[M];
                        h = N;
                        for(var w = 0, P = 0; P < C.length; P++){
                            var U = C[P];
                            U.rect.x = h, U.rect.y = g, h += U.rect.width + n.horizontalPadding, U.rect.height > w && (w = U.rect.height);
                        }
                        g += w + n.verticalPadding;
                    }
                }, O.prototype.tileCompoundMembers = function(n, h) {
                    var g = this;
                    this.tiledMemberPack = [], Object.keys(n).forEach(function(p) {
                        var D = h[p];
                        g.tiledMemberPack[p] = /*#__PURE__*/ g.tileNodes(n[p], D.paddingLeft + D.paddingRight), D.rect.width = g.tiledMemberPack[p].width, D.rect.height = g.tiledMemberPack[p].height;
                    });
                }, O.prototype.tileNodes = function(n, h) {
                    var g = a.TILING_PADDING_VERTICAL, p = a.TILING_PADDING_HORIZONTAL, D = {
                        rows: [],
                        rowWidth: [],
                        rowHeight: [],
                        width: 0,
                        height: h,
                        verticalPadding: g,
                        horizontalPadding: p
                    };
                    n.sort(function(C, w) {
                        return C.rect.width * C.rect.height > w.rect.width * w.rect.height ? -1 : C.rect.width * C.rect.height < w.rect.width * w.rect.height ? 1 : 0;
                    });
                    for(var N = 0; N < n.length; N++){
                        var M = n[N];
                        D.rows.length == 0 ? this.insertNodeToRow(D, M, 0, h) : this.canAddHorizontal(D, M.rect.width, M.rect.height) ? this.insertNodeToRow(D, M, /*#__PURE__*/ this.getShortestRowIndex(D), h) : this.insertNodeToRow(D, M, D.rows.length, h), this.shiftToLastRow(D);
                    }
                    return D;
                }, O.prototype.insertNodeToRow = function(n, h, g, p) {
                    var D = p;
                    if (g == n.rows.length) {
                        var N = [];
                        n.rows.push(N), n.rowWidth.push(D), n.rowHeight.push(0);
                    }
                    var M = n.rowWidth[g] + h.rect.width;
                    n.rows[g].length > 0 && (M += n.horizontalPadding), n.rowWidth[g] = M, n.width < M && (n.width = M);
                    var C = h.rect.height;
                    g > 0 && (C += n.verticalPadding);
                    var w = 0;
                    C > n.rowHeight[g] && (w = n.rowHeight[g], n.rowHeight[g] = C, w = n.rowHeight[g] - w), n.height += w, n.rows[g].push(h);
                }, O.prototype.getShortestRowIndex = function(n) {
                    for(var h = -1, g = Number.MAX_VALUE, p = 0; p < n.rows.length; p++)n.rowWidth[p] < g && (h = p, g = n.rowWidth[p]);
                    return h;
                }, O.prototype.getLongestRowIndex = function(n) {
                    for(var h = -1, g = Number.MIN_VALUE, p = 0; p < n.rows.length; p++)n.rowWidth[p] > g && (h = p, g = n.rowWidth[p]);
                    return h;
                }, O.prototype.canAddHorizontal = function(n, h, g) {
                    var p = /*#__PURE__*/ this.getShortestRowIndex(n);
                    if (p < 0) return true;
                    var D = n.rowWidth[p];
                    if (D + n.horizontalPadding + h <= n.width) return true;
                    var N = 0;
                    n.rowHeight[p] < g && p > 0 && (N = g + n.verticalPadding - n.rowHeight[p]);
                    var M;
                    n.width - D >= h + n.horizontalPadding ? M = (n.height + N) / (D + h + n.horizontalPadding) : M = (n.height + N) / n.width, N = g + n.verticalPadding;
                    var C;
                    return n.width < h ? C = (n.height + N) / h : C = (n.height + N) / n.width, C < 1 && (C = 1 / C), M < 1 && (M = 1 / M), M < C;
                }, O.prototype.shiftToLastRow = function(n) {
                    var h = /*#__PURE__*/ this.getLongestRowIndex(n), g = n.rowWidth.length - 1, p = n.rows[h], D = p[p.length - 1], N = D.width + n.horizontalPadding;
                    if (n.width - n.rowWidth[g] > N && h != g) {
                        p.splice(-1, 1), n.rows[g].push(D), n.rowWidth[h] = n.rowWidth[h] - N, n.rowWidth[g] = n.rowWidth[g] + N, n.width = n.rowWidth[instance.getLongestRowIndex(n)];
                        for(var M = Number.MIN_VALUE, C = 0; C < p.length; C++)p[C].height > M && (M = p[C].height);
                        h > 0 && (M += n.verticalPadding);
                        var w = n.rowHeight[h] + n.rowHeight[g];
                        n.rowHeight[h] = M, n.rowHeight[g] < D.height + n.verticalPadding && (n.rowHeight[g] = D.height + n.verticalPadding);
                        var P = n.rowHeight[h] + n.rowHeight[g];
                        n.height += P - w, this.shiftToLastRow(n);
                    }
                }, O.prototype.tilingPreLayout = function() {
                    a.TILE && (this.groupZeroDegreeMembers(), this.clearCompounds(), this.clearZeroDegreeMembers());
                }, O.prototype.tilingPostLayout = function() {
                    a.TILE && (this.repopulateZeroDegreeMembers(), this.repopulateCompounds());
                }, O.prototype.reduceTrees = function() {
                    for(var n = [], h = true, g; h;){
                        var p = /*#__PURE__*/ this.graphManager.getAllNodes(), D = [];
                        h = false;
                        for(var N = 0; N < p.length; N++)g = p[N], g.getEdges().length == 1 && !g.getEdges()[0].isInterGraph && g.getChild() == null && (D.push([
                            g,
                            g.getEdges()[0],
                            /*#__PURE__*/ g.getOwner()
                        ]), h = true);
                        if (h == true) {
                            for(var M = [], C = 0; C < D.length; C++)D[C][0].getEdges().length == 1 && (M.push(D[C]), D[C][0].getOwner().remove(D[C][0]));
                            n.push(M), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
                        }
                    }
                    this.prunedNodesAll = n;
                }, O.prototype.growTree = function(n) {
                    for(var h = n.length, g = n[h - 1], p, D = 0; D < g.length; D++)p = g[D], this.findPlaceforPrunedNode(p), p[2].add(p[0]), p[2].add(p[1], p[1].source, p[1].target);
                    n.splice(n.length - 1, 1), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
                }, O.prototype.findPlaceforPrunedNode = function(n) {
                    var h, g, p = n[0];
                    p == n[1].source ? g = n[1].target : g = n[1].source;
                    var D = g.startX, N = g.finishX, M = g.startY, C = g.finishY, w = 0, P = 0, U = 0, F = 0, x = [
                        w,
                        U,
                        P,
                        F
                    ];
                    if (M > 0) for(var G = D; G <= N; G++)x[0] += this.grid[G][M - 1].length + this.grid[G][M].length - 1;
                    if (N < this.grid.length - 1) for(var G = M; G <= C; G++)x[1] += this.grid[N + 1][G].length + this.grid[N][G].length - 1;
                    if (C < this.grid[0].length - 1) for(var G = D; G <= N; G++)x[2] += this.grid[G][C + 1].length + this.grid[G][C].length - 1;
                    if (D > 0) for(var G = M; G <= C; G++)x[3] += this.grid[D - 1][G].length + this.grid[D][G].length - 1;
                    for(var S = m.MAX_VALUE, _, X, b = 0; b < x.length; b++)x[b] < S ? (S = x[b], _ = 1, X = b) : x[b] == S && _++;
                    if (_ == 3 && S == 0) x[0] == 0 && x[1] == 0 && x[2] == 0 ? h = 1 : x[0] == 0 && x[1] == 0 && x[3] == 0 ? h = 0 : x[0] == 0 && x[2] == 0 && x[3] == 0 ? h = 3 : x[1] == 0 && x[2] == 0 && x[3] == 0 && (h = 2);
                    else if (_ == 2 && S == 0) {
                        var H = /*#__PURE__*/ Math.floor(Math.random() * 2);
                        x[0] == 0 && x[1] == 0 ? H == 0 ? h = 0 : h = 1 : x[0] == 0 && x[2] == 0 ? H == 0 ? h = 0 : h = 2 : x[0] == 0 && x[3] == 0 ? H == 0 ? h = 0 : h = 3 : x[1] == 0 && x[2] == 0 ? H == 0 ? h = 1 : h = 2 : x[1] == 0 && x[3] == 0 ? H == 0 ? h = 1 : h = 3 : H == 0 ? h = 2 : h = 3;
                    } else if (_ == 4 && S == 0) {
                        var H = /*#__PURE__*/ Math.floor(Math.random() * 4);
                        h = H;
                    } else h = X;
                    h == 0 ? p.setCenter(/*#__PURE__*/ g.getCenterX(), g.getCenterY() - g.getHeight() / 2 - d.DEFAULT_EDGE_LENGTH - p.getHeight() / 2) : h == 1 ? p.setCenter(g.getCenterX() + g.getWidth() / 2 + d.DEFAULT_EDGE_LENGTH + p.getWidth() / 2, /*#__PURE__*/ g.getCenterY()) : h == 2 ? p.setCenter(/*#__PURE__*/ g.getCenterX(), g.getCenterY() + g.getHeight() / 2 + d.DEFAULT_EDGE_LENGTH + p.getHeight() / 2) : p.setCenter(g.getCenterX() - g.getWidth() / 2 - d.DEFAULT_EDGE_LENGTH - p.getWidth() / 2, /*#__PURE__*/ g.getCenterY());
                }, I.exports = O;
            },
            function(I, o, i) {
                var e = {};
                e.layoutBase = /*#__PURE__*/ i(0), e.CoSEConstants = /*#__PURE__*/ i(1), e.CoSEEdge = /*#__PURE__*/ i(2), e.CoSEGraph = /*#__PURE__*/ i(3), e.CoSEGraphManager = /*#__PURE__*/ i(4), e.CoSELayout = /*#__PURE__*/ i(6), e.CoSENode = /*#__PURE__*/ i(5), I.exports = e;
            }
        ]);
    });
});
var xt = /*#__PURE__*/ n((nt, yt)=>{
    m$1(function(I, o) {
        typeof nt == "object" && typeof yt == "object" ? yt.exports = /*#__PURE__*/ o(/*#__PURE__*/ vt()) : typeof define == "function" && define.amd ? define([
            "cose-base"
        ], o) : typeof nt == "object" ? nt.cytoscapeCoseBilkent = /*#__PURE__*/ o(/*#__PURE__*/ vt()) : I.cytoscapeCoseBilkent = /*#__PURE__*/ o(I.coseBase);
    }, "webpackUniversalModuleDefinition")(nt, function(E) {
        return function(I) {
            var o = {};
            function i(e) {
                if (o[e]) return o[e].exports;
                var t = o[e] = {
                    i: e,
                    l: false,
                    exports: {}
                };
                return I[e].call(t.exports, t, t.exports, i), t.l = true, t.exports;
            }
            return m$1(i, "__webpack_require__"), i.m = I, i.c = o, i.i = function(e) {
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
            function(I, o) {
                I.exports = E;
            },
            function(I, o, i) {
                var e = i(0).layoutBase.LayoutConstants, t = i(0).layoutBase.FDLayoutConstants, r = i(0).CoSEConstants, l = i(0).CoSELayout, f = i(0).CoSENode, a = i(0).layoutBase.PointD, d = i(0).layoutBase.DimensionD, s = {
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
                function c(T, y) {
                    var A = {};
                    for(var O in T)A[O] = T[O];
                    for(var O in y)A[O] = y[O];
                    return A;
                }
                m$1(c, "extend");
                function u(T) {
                    this.options = /*#__PURE__*/ c(s, T), v(this.options);
                }
                m$1(u, "_CoSELayout");
                var v = /*#__PURE__*/ m$1(function(y) {
                    y.nodeRepulsion != null && (r.DEFAULT_REPULSION_STRENGTH = t.DEFAULT_REPULSION_STRENGTH = y.nodeRepulsion), y.idealEdgeLength != null && (r.DEFAULT_EDGE_LENGTH = t.DEFAULT_EDGE_LENGTH = y.idealEdgeLength), y.edgeElasticity != null && (r.DEFAULT_SPRING_STRENGTH = t.DEFAULT_SPRING_STRENGTH = y.edgeElasticity), y.nestingFactor != null && (r.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = t.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = y.nestingFactor), y.gravity != null && (r.DEFAULT_GRAVITY_STRENGTH = t.DEFAULT_GRAVITY_STRENGTH = y.gravity), y.numIter != null && (r.MAX_ITERATIONS = t.MAX_ITERATIONS = y.numIter), y.gravityRange != null && (r.DEFAULT_GRAVITY_RANGE_FACTOR = t.DEFAULT_GRAVITY_RANGE_FACTOR = y.gravityRange), y.gravityCompound != null && (r.DEFAULT_COMPOUND_GRAVITY_STRENGTH = t.DEFAULT_COMPOUND_GRAVITY_STRENGTH = y.gravityCompound), y.gravityRangeCompound != null && (r.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = t.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = y.gravityRangeCompound), y.initialEnergyOnIncremental != null && (r.DEFAULT_COOLING_FACTOR_INCREMENTAL = t.DEFAULT_COOLING_FACTOR_INCREMENTAL = y.initialEnergyOnIncremental), y.quality == "draft" ? e.QUALITY = 0 : y.quality == "proof" ? e.QUALITY = 2 : e.QUALITY = 1, r.NODE_DIMENSIONS_INCLUDE_LABELS = t.NODE_DIMENSIONS_INCLUDE_LABELS = e.NODE_DIMENSIONS_INCLUDE_LABELS = y.nodeDimensionsIncludeLabels, r.DEFAULT_INCREMENTAL = t.DEFAULT_INCREMENTAL = e.DEFAULT_INCREMENTAL = !y.randomize, r.ANIMATE = t.ANIMATE = e.ANIMATE = y.animate, r.TILE = y.tile, r.TILING_PADDING_VERTICAL = typeof y.tilingPaddingVertical == "function" ? y.tilingPaddingVertical.call() : y.tilingPaddingVertical, r.TILING_PADDING_HORIZONTAL = typeof y.tilingPaddingHorizontal == "function" ? y.tilingPaddingHorizontal.call() : y.tilingPaddingHorizontal;
                }, "getUserOptions");
                u.prototype.run = function() {
                    var T, y, A = this.options;
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
                    for(var D = 0; D < p.length; D++){
                        var N = p[D], M = this.idToLNode[N.data("source")], C = this.idToLNode[N.data("target")];
                        if (M !== C && M.getEdgesBetween(C).length == 0) {
                            var w = /*#__PURE__*/ h.add(/*#__PURE__*/ R.newEdge(), M, C);
                            w.id = /*#__PURE__*/ N.id();
                        }
                    }
                    var P = /*#__PURE__*/ m$1(function(x, G) {
                        typeof x == "number" && (x = G);
                        var S = /*#__PURE__*/ x.data("id"), _ = n.idToLNode[S];
                        return {
                            x: /*#__PURE__*/ _.getRect().getCenterX(),
                            y: /*#__PURE__*/ _.getRect().getCenterY()
                        };
                    }, "getPositions"), U = /*#__PURE__*/ m$1(function F() {
                        for(var x = /*#__PURE__*/ m$1(function() {
                            A.fit && A.cy.fit(A.eles, A.padding), T || (T = true, n.cy.one("layoutready", A.ready), n.cy.trigger({
                                type: "layoutready",
                                layout: n
                            }));
                        }, "afterReposition"), G = n.options.refresh, S, _ = 0; _ < G && !S; _++)S = n.stopped || n.layout.tick();
                        if (S) {
                            R.checkLayoutSuccess() && !R.isSubLayout && R.doPostLayout(), R.tilingPostLayout && R.tilingPostLayout(), R.isLayoutFinished = true, n.options.eles.nodes().positions(P), x(), n.cy.one("layoutstop", n.options.stop), n.cy.trigger({
                                type: "layoutstop",
                                layout: n
                            }), y && cancelAnimationFrame(y), T = false;
                            return;
                        }
                        var X = /*#__PURE__*/ n.layout.getPositionsData();
                        A.eles.nodes().positions(function(b, H) {
                            if (typeof b == "number" && (b = H), !b.isParent()) {
                                for(var z = /*#__PURE__*/ b.id(), B = X[z], Y = b; B == null && (B = X[Y.data("parent")] || X["DummyCompound_" + Y.data("parent")], X[z] = B, Y = Y.parent()[0], Y != null););
                                return B != null ? {
                                    x: B.x,
                                    y: B.y
                                } : {
                                    x: /*#__PURE__*/ b.position("x"),
                                    y: /*#__PURE__*/ b.position("y")
                                };
                            }
                        }), x(), y = /*#__PURE__*/ requestAnimationFrame(F);
                    }, "iterateAnimated");
                    return R.addListener("layoutstarted", function() {
                        n.options.animate === "during" && (y = /*#__PURE__*/ requestAnimationFrame(U));
                    }), R.runLayout(), this.options.animate !== "during" && (n.options.eles.nodes().not(":parent").layoutPositions(n, n.options, P), T = false), this;
                }, u.prototype.getTopMostNodes = function(T) {
                    for(var y = {}, A = 0; A < T.length; A++)y[T[A].id()] = true;
                    var O = /*#__PURE__*/ T.filter(function(R, n) {
                        typeof R == "number" && (R = n);
                        for(var h = R.parent()[0]; h != null;){
                            if (y[h.id()]) return false;
                            h = h.parent()[0];
                        }
                        return true;
                    });
                    return O;
                }, u.prototype.processChildrenList = function(T, y, A) {
                    for(var O = y.length, R = 0; R < O; R++){
                        var n = y[R], h = /*#__PURE__*/ n.children(), g, p = /*#__PURE__*/ n.layoutDimensions({
                            nodeDimensionsIncludeLabels: this.options.nodeDimensionsIncludeLabels
                        });
                        if (n.outerWidth() != null && n.outerHeight() != null ? g = /*#__PURE__*/ T.add(new f(A.graphManager, new a(n.position("x") - p.w / 2, n.position("y") - p.h / 2), new d(parseFloat(p.w), parseFloat(p.h)))) : g = /*#__PURE__*/ T.add(new f(this.graphManager)), g.id = /*#__PURE__*/ n.data("id"), g.paddingLeft = /*#__PURE__*/ parseInt(/*#__PURE__*/ n.css("padding")), g.paddingTop = /*#__PURE__*/ parseInt(/*#__PURE__*/ n.css("padding")), g.paddingRight = /*#__PURE__*/ parseInt(/*#__PURE__*/ n.css("padding")), g.paddingBottom = /*#__PURE__*/ parseInt(/*#__PURE__*/ n.css("padding")), this.options.nodeDimensionsIncludeLabels && n.isParent()) {
                            var D = n.boundingBox({
                                includeLabels: true,
                                includeNodes: false
                            }).w, N = n.boundingBox({
                                includeLabels: true,
                                includeNodes: false
                            }).h, M = /*#__PURE__*/ n.css("text-halign");
                            g.labelWidth = D, g.labelHeight = N, g.labelPos = M;
                        }
                        if (this.idToLNode[n.data("id")] = g, isNaN(g.rect.x) && (g.rect.x = 0), isNaN(g.rect.y) && (g.rect.y = 0), h != null && h.length > 0) {
                            var C;
                            C = /*#__PURE__*/ A.getGraphManager().add(/*#__PURE__*/ A.newGraph(), g), this.processChildrenList(C, h, A);
                        }
                    }
                }, u.prototype.stop = function() {
                    return this.stopped = true, this;
                };
                var m = /*#__PURE__*/ m$1(function(y) {
                    y("layout", "cose-bilkent", u);
                }, "register");
                typeof cytoscape < "u" && m(cytoscape), I.exports = m;
            }
        ]);
    });
});
var gt = /*#__PURE__*/ function() {
    var E = /*#__PURE__*/ m$1(function(R, n, h, g) {
        for(h = h || {}, g = R.length; g--; h[R[g]] = n);
        return h;
    }, "o"), I = [
        1,
        4
    ], o = [
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
    ], a = [
        1,
        26
    ], d = [
        1,
        24
    ], s = [
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
    ], m = [
        1,
        34
    ], T = [
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
        performAction: /*#__PURE__*/ m$1(function(n, h, g, p, D, N, M) {
            var C = N.length - 1;
            switch(D){
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
                    p.getLogger().info("Node: ", N[C].id), p.addNode(N[C - 1].length, N[C].id, N[C].descr, N[C].type);
                    break;
                case 16:
                    p.getLogger().trace("Icon: ", N[C]), p.decorateNode({
                        icon: N[C]
                    });
                    break;
                case 17:
                case 21:
                    p.decorateNode({
                        class: N[C]
                    });
                    break;
                case 18:
                    p.getLogger().trace("SPACELIST");
                    break;
                case 19:
                    p.getLogger().trace("Node: ", N[C].id), p.addNode(0, N[C].id, N[C].descr, N[C].type);
                    break;
                case 20:
                    p.decorateNode({
                        icon: N[C]
                    });
                    break;
                case 25:
                    p.getLogger().trace("node found ..", N[C - 2]), this.$ = {
                        id: N[C - 1],
                        descr: N[C - 1],
                        type: /*#__PURE__*/ p.getType(N[C - 2], N[C])
                    };
                    break;
                case 26:
                    this.$ = {
                        id: N[C],
                        descr: N[C],
                        type: p.nodeType.DEFAULT
                    };
                    break;
                case 27:
                    p.getLogger().trace("node found ..", N[C - 3]), this.$ = {
                        id: N[C - 3],
                        descr: N[C - 1],
                        type: /*#__PURE__*/ p.getType(N[C - 2], N[C])
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
                8: I
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
                8: I
            },
            {
                6: o,
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
            /*#__PURE__*/ E(f, [
                2,
                3
            ]),
            {
                1: [
                    2,
                    2
                ]
            },
            /*#__PURE__*/ E(f, [
                2,
                4
            ]),
            /*#__PURE__*/ E(f, [
                2,
                5
            ]),
            {
                1: [
                    2,
                    6
                ],
                6: o,
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
                6: o,
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
                6: a,
                7: d,
                10: 23,
                11: s
            },
            /*#__PURE__*/ E(c, [
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
            /*#__PURE__*/ E(c, [
                2,
                18
            ]),
            /*#__PURE__*/ E(c, [
                2,
                19
            ]),
            /*#__PURE__*/ E(c, [
                2,
                20
            ]),
            /*#__PURE__*/ E(c, [
                2,
                21
            ]),
            /*#__PURE__*/ E(c, [
                2,
                23
            ]),
            /*#__PURE__*/ E(c, [
                2,
                24
            ]),
            /*#__PURE__*/ E(c, [
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
                6: a,
                7: d,
                10: 32,
                11: s
            },
            {
                1: [
                    2,
                    7
                ],
                6: o,
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
            /*#__PURE__*/ E(u, [
                2,
                14
            ], {
                7: v,
                11: m
            }),
            /*#__PURE__*/ E(T, [
                2,
                8
            ]),
            /*#__PURE__*/ E(T, [
                2,
                9
            ]),
            /*#__PURE__*/ E(T, [
                2,
                10
            ]),
            /*#__PURE__*/ E(c, [
                2,
                15
            ]),
            /*#__PURE__*/ E(c, [
                2,
                16
            ]),
            /*#__PURE__*/ E(c, [
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
            /*#__PURE__*/ E(u, [
                2,
                13
            ], {
                7: v,
                11: m
            }),
            /*#__PURE__*/ E(T, [
                2,
                11
            ]),
            /*#__PURE__*/ E(T, [
                2,
                12
            ]),
            {
                21: [
                    1,
                    37
                ]
            },
            /*#__PURE__*/ E(c, [
                2,
                25
            ]),
            /*#__PURE__*/ E(c, [
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
            ], p = [], D = [
                null
            ], N = [], M = this.table, C = "", w = 0, P = 0, U = 0, F = 2, x = 1, G = /*#__PURE__*/ N.slice.call(arguments, 1), S = /*#__PURE__*/ Object.create(this.lexer), _ = {
                yy: {}
            };
            for(var X in this.yy)Object.prototype.hasOwnProperty.call(this.yy, X) && (_.yy[X] = this.yy[X]);
            S.setInput(n, _.yy), _.yy.lexer = S, _.yy.parser = this, typeof S.yylloc > "u" && (S.yylloc = {});
            var b = S.yylloc;
            N.push(b);
            var H = S.options && S.options.ranges;
            typeof _.yy.parseError == "function" ? this.parseError = _.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
            function z(W) {
                g.length = g.length - 2 * W, D.length = D.length - W, N.length = N.length - W;
            }
            m$1(z, "popStack");
            function B() {
                var W;
                return W = p.pop() || S.lex() || x, typeof W != "number" && (W instanceof Array && (p = W, W = /*#__PURE__*/ p.pop()), W = h.symbols_[W] || W), W;
            }
            m$1(B, "lex");
            for(var Y, K, j, $, ge, ot, J = {}, st, Z, Et, at;;){
                if (j = g[g.length - 1], this.defaultActions[j] ? $ = this.defaultActions[j] : ((Y === null || typeof Y > "u") && (Y = /*#__PURE__*/ B()), $ = M[j] && M[j][Y]), typeof $ > "u" || !$.length || !$[0]) {
                    var ht = "";
                    at = [];
                    for(st in M[j])this.terminals_[st] && st > F && at.push("'" + this.terminals_[st] + "'");
                    S.showPosition ? ht = "Parse error on line " + (w + 1) + `:
` + S.showPosition() + `
Expecting ` + at.join(", ") + ", got '" + (this.terminals_[Y] || Y) + "'" : ht = "Parse error on line " + (w + 1) + ": Unexpected " + (Y == x ? "end of input" : "'" + (this.terminals_[Y] || Y) + "'"), this.parseError(ht, {
                        text: S.match,
                        token: this.terminals_[Y] || Y,
                        line: S.yylineno,
                        loc: b,
                        expected: at
                    });
                }
                if ($[0] instanceof Array && $.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + j + ", token: " + Y);
                switch($[0]){
                    case 1:
                        g.push(Y), D.push(S.yytext), N.push(S.yylloc), g.push($[1]), Y = null, K ? (Y = K, K = null) : (P = S.yyleng, C = S.yytext, w = S.yylineno, b = S.yylloc, U > 0);
                        break;
                    case 2:
                        if (Z = this.productions_[$[1]][1], J.$ = D[D.length - Z], J._$ = {
                            first_line: N[N.length - (Z || 1)].first_line,
                            last_line: N[N.length - 1].last_line,
                            first_column: N[N.length - (Z || 1)].first_column,
                            last_column: N[N.length - 1].last_column
                        }, H && (J._$.range = [
                            N[N.length - (Z || 1)].range[0],
                            N[N.length - 1].range[1]
                        ]), ot = /*#__PURE__*/ this.performAction.apply(J, /*#__PURE__*/ [
                            C,
                            P,
                            w,
                            _.yy,
                            $[1],
                            D,
                            N
                        ].concat(G)), typeof ot < "u") return ot;
                        Z && (g = /*#__PURE__*/ g.slice(0, -1 * Z * 2), D = /*#__PURE__*/ D.slice(0, -1 * Z), N = /*#__PURE__*/ N.slice(0, -1 * Z)), g.push(this.productions_[$[1]][0]), D.push(J.$), N.push(J._$), Et = M[g[g.length - 2]][g[g.length - 1]], g.push(Et);
                        break;
                    case 3:
                        return true;
                }
            }
            return true;
        }, "parse")
    }, A = /*#__PURE__*/ function() {
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
                var D = this.yylloc.range;
                return this.yylloc = {
                    first_line: this.yylloc.first_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.first_column,
                    last_column: g ? (g.length === p.length ? this.yylloc.first_column : 0) + p[p.length - g.length].length - g[0].length : this.yylloc.first_column - h
                }, this.options.ranges && (this.yylloc.range = [
                    D[0],
                    D[0] + this.yyleng - h
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
                var g, p, D;
                if (this.options.backtrack_lexer && (D = {
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
                }, this.options.ranges && (D.yylloc.range = /*#__PURE__*/ this.yylloc.range.slice(0))), p = /*#__PURE__*/ n[0].match(/(?:\r\n?|\n).*/g), p && (this.yylineno += p.length), this.yylloc = {
                    first_line: this.yylloc.last_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.last_column,
                    last_column: p ? p[p.length - 1].length - p[p.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + n[0].length
                }, this.yytext += n[0], this.match += n[0], this.matches = n, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [
                    this.offset,
                    this.offset += this.yyleng
                ]), this._more = false, this._backtrack = false, this._input = /*#__PURE__*/ this._input.slice(n[0].length), this.matched += n[0], g = /*#__PURE__*/ this.performAction.call(this, this.yy, this, h, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), g) return g;
                if (this._backtrack) {
                    for(var N in D)this[N] = D[N];
                    return false;
                }
                return false;
            }, "test_match"),
            next: /*#__PURE__*/ m$1(function() {
                if (this.done) return this.EOF;
                this._input || (this.done = true);
                var n, h, g, p;
                this._more || (this.yytext = "", this.match = "");
                for(var D = /*#__PURE__*/ this._currentRules(), N = 0; N < D.length; N++)if (g = /*#__PURE__*/ this._input.match(this.rules[D[N]]), g && (!h || g[0].length > h[0].length)) {
                    if (h = g, p = N, this.options.backtrack_lexer) {
                        if (n = /*#__PURE__*/ this.test_match(g, D[N]), n !== false) return n;
                        if (this._backtrack) {
                            h = false;
                            continue;
                        } else return false;
                    } else if (!this.options.flex) break;
                }
                return h ? (n = /*#__PURE__*/ this.test_match(h, D[p]), n !== false ? n : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
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
            performAction: /*#__PURE__*/ m$1(function(h, g, p, D) {
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
    y.lexer = A;
    function O() {
        this.yy = {};
    }
    return m$1(O, "Parser"), O.prototype = y, y.Parser = O, new O;
}();
gt.parser = gt;
var Ct = gt;
var V = [], Mt = 0, ut = {}, Yt = /*#__PURE__*/ m$1(()=>{
    V = [], Mt = 0, ut = {};
}, "clear"), Xt = /*#__PURE__*/ m$1(function(E) {
    for(let I = V.length - 1; I >= 0; I--)if (V[I].level < E) return V[I];
    return null;
}, "getParent"), kt = /*#__PURE__*/ m$1(()=>V.length > 0 ? V[0] : null, "getMindmap"), Ht = /*#__PURE__*/ m$1((E, I, o, i)=>{
    tt.info("addNode", E, I, o, i);
    let e = /*#__PURE__*/ Hl(), t = e.mindmap?.padding ?? pl.mindmap.padding;
    switch(i){
        case k.ROUNDED_RECT:
        case k.RECT:
        case k.HEXAGON:
            t *= 2;
    }
    let r = {
        id: Mt++,
        nodeId: /*#__PURE__*/ Oe(I, e),
        level: E,
        descr: /*#__PURE__*/ Oe(o, e),
        type: i,
        children: [],
        width: e.mindmap?.maxNodeWidth ?? pl.mindmap.maxNodeWidth,
        padding: t
    }, l = /*#__PURE__*/ Xt(E);
    if (l) l.children.push(r), V.push(r);
    else if (V.length === 0) V.push(r);
    else throw new Error('There can be only one root. No parent could be found for ("' + r.descr + '")');
}, "addNode"), k = {
    DEFAULT: 0,
    NO_BORDER: 0,
    ROUNDED_RECT: 1,
    RECT: 2,
    CIRCLE: 3,
    CLOUD: 4,
    BANG: 5,
    HEXAGON: 6
}, $t = /*#__PURE__*/ m$1((E, I)=>{
    switch(tt.debug("In get type", E, I), E){
        case "[":
            return k.RECT;
        case "(":
            return I === ")" ? k.ROUNDED_RECT : k.CLOUD;
        case "((":
            return k.CIRCLE;
        case ")":
            return k.CLOUD;
        case "))":
            return k.BANG;
        case "{{":
            return k.HEXAGON;
        default:
            return k.DEFAULT;
    }
}, "getType"), Wt = /*#__PURE__*/ m$1((E, I)=>{
    ut[E] = I;
}, "setElementForId"), Bt = /*#__PURE__*/ m$1((E)=>{
    if (!E) return;
    let I = /*#__PURE__*/ Hl(), o = V[V.length - 1];
    E.icon && (o.icon = /*#__PURE__*/ Oe(E.icon, I)), E.class && (o.class = /*#__PURE__*/ Oe(E.class, I));
}, "decorateNode"), Vt = /*#__PURE__*/ m$1((E)=>{
    switch(E){
        case k.DEFAULT:
            return "no-border";
        case k.RECT:
            return "rect";
        case k.ROUNDED_RECT:
            return "rounded-rect";
        case k.CIRCLE:
            return "circle";
        case k.CLOUD:
            return "cloud";
        case k.BANG:
            return "bang";
        case k.HEXAGON:
            return "hexgon";
        default:
            return "no-border";
    }
}, "type2Str"), jt = /*#__PURE__*/ m$1(()=>tt, "getLogger"), Zt = /*#__PURE__*/ m$1((E)=>ut[E], "getElementById"), Qt = {
    clear: Yt,
    addNode: Ht,
    getMindmap: kt,
    nodeType: k,
    getType: $t,
    setElementForId: Wt,
    decorateNode: Bt,
    type2Str: Vt,
    getLogger: jt,
    getElementById: Zt
}, Rt = Qt;
var Gt = /*#__PURE__*/ q(/*#__PURE__*/ xt());
var zt = 12, Kt = /*#__PURE__*/ m$1(function(E, I, o, i) {
    I.append("path").attr("id", "node-" + o.id).attr("class", "node-bkg node-" + E.type2Str(o.type)).attr("d", `M0 ${o.height - 5} v${-o.height + 2 * 5} q0,-5 5,-5 h${o.width - 2 * 5} q5,0 5,5 v${o.height - 5} H0 Z`), I.append("line").attr("class", "node-line-" + i).attr("x1", 0).attr("y1", o.height).attr("x2", o.width).attr("y2", o.height);
}, "defaultBkg"), Jt = /*#__PURE__*/ m$1(function(E, I, o) {
    I.append("rect").attr("id", "node-" + o.id).attr("class", "node-bkg node-" + E.type2Str(o.type)).attr("height", o.height).attr("width", o.width);
}, "rectBkg"), qt = /*#__PURE__*/ m$1(function(E, I, o) {
    let i = o.width, e = o.height, t = .15 * i, r = .25 * i, l = .35 * i, f = .2 * i;
    I.append("path").attr("id", "node-" + o.id).attr("class", "node-bkg node-" + E.type2Str(o.type)).attr("d", `M0 0 a${t},${t} 0 0,1 ${i * .25},${-1 * i * .1}
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
}, "cloudBkg"), te = /*#__PURE__*/ m$1(function(E, I, o) {
    let i = o.width, e = o.height, t = .15 * i;
    I.append("path").attr("id", "node-" + o.id).attr("class", "node-bkg node-" + E.type2Str(o.type)).attr("d", `M0 0 a${t},${t} 1 0,0 ${i * .25},${-1 * e * .1}
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
}, "bangBkg"), ee = /*#__PURE__*/ m$1(function(E, I, o) {
    I.append("circle").attr("id", "node-" + o.id).attr("class", "node-bkg node-" + E.type2Str(o.type)).attr("r", o.width / 2);
}, "circleBkg");
function re(E, I, o, i, e) {
    return E.insert("polygon", ":first-child").attr("points", /*#__PURE__*/ i.map(function(t) {
        return t.x + "," + t.y;
    }).join(" ")).attr("transform", "translate(" + (e.width - I) / 2 + ", " + o + ")");
}
m$1(re, "insertPolygonShape");
var ie = /*#__PURE__*/ m$1(function(E, I, o) {
    let i = o.height, t = i / 4, r = o.width - o.padding + 2 * t, l = [
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
    re(I, r, i, l, o);
}, "hexagonBkg"), ne = /*#__PURE__*/ m$1(function(E, I, o) {
    I.append("rect").attr("id", "node-" + o.id).attr("class", "node-bkg node-" + E.type2Str(o.type)).attr("height", o.height).attr("rx", o.padding).attr("ry", o.padding).attr("width", o.width);
}, "roundedRectBkg"), wt = /*#__PURE__*/ m$1(async function(E, I, o, i, e) {
    let t = e.htmlLabels, r = i % (zt - 1), l = /*#__PURE__*/ I.append("g");
    o.section = r;
    let f = "section-" + r;
    r < 0 && (f += " section-root"), l.attr("class", (o.class ? o.class + " " : "") + "mindmap-node " + f);
    let a = /*#__PURE__*/ l.append("g"), d = /*#__PURE__*/ l.append("g"), s = /*#__PURE__*/ o.descr.replace(/(<br\/*>)/g, `
`);
    await Qt$1(d, s, {
        useHtmlLabels: t,
        width: o.width,
        classes: "mindmap-node-label"
    }, e), t || d.attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle");
    let c = /*#__PURE__*/ d.node().getBBox(), [u] = S(e.fontSize);
    if (o.height = c.height + u * 1.1 * .5 + o.padding, o.width = c.width + 2 * o.padding, o.icon) if (o.type === E.nodeType.CIRCLE) o.height += 50, o.width += 50, l.append("foreignObject").attr("height", "50px").attr("width", o.width).attr("style", "text-align: center;").append("div").attr("class", "icon-container").append("i").attr("class", "node-icon-" + r + " " + o.icon), d.attr("transform", "translate(" + o.width / 2 + ", " + (o.height / 2 - 1.5 * o.padding) + ")");
    else {
        o.width += 50;
        let v = o.height;
        o.height = /*#__PURE__*/ Math.max(v, 60);
        let m = /*#__PURE__*/ Math.abs(o.height - v);
        l.append("foreignObject").attr("width", "60px").attr("height", o.height).attr("style", "text-align: center;margin-top:" + m / 2 + "px;").append("div").attr("class", "icon-container").append("i").attr("class", "node-icon-" + r + " " + o.icon), d.attr("transform", "translate(" + (25 + o.width / 2) + ", " + (m / 2 + o.padding / 2) + ")");
    }
    else if (t) {
        let v = (o.width - c.width) / 2, m = (o.height - c.height) / 2;
        d.attr("transform", "translate(" + v + ", " + m + ")");
    } else {
        let v = o.width / 2, m = o.padding / 2;
        d.attr("transform", "translate(" + v + ", " + m + ")");
    }
    switch(o.type){
        case E.nodeType.DEFAULT:
            Kt(E, a, o, r);
            break;
        case E.nodeType.ROUNDED_RECT:
            ne(E, a, o, r);
            break;
        case E.nodeType.RECT:
            Jt(E, a, o, r);
            break;
        case E.nodeType.CIRCLE:
            a.attr("transform", "translate(" + o.width / 2 + ", " + +o.height / 2 + ")"), ee(E, a, o, r);
            break;
        case E.nodeType.CLOUD:
            qt(E, a, o, r);
            break;
        case E.nodeType.BANG:
            te(E, a, o, r);
            break;
        case E.nodeType.HEXAGON:
            ie(E, a, o, r);
            break;
    }
    return E.setElementForId(o.id, l), o.height;
}, "drawNode"), St = /*#__PURE__*/ m$1(function(E, I) {
    let o = /*#__PURE__*/ E.getElementById(I.id), i = I.x || 0, e = I.y || 0;
    o.attr("transform", "translate(" + i + "," + e + ")");
}, "positionNode");
Gr.use(Gt.default);
async function Ft(E, I, o, i, e) {
    await wt(E, I, o, i, e), o.children && await Promise.all(/*#__PURE__*/ o.children.map((t, r)=>Ft(E, I, t, i < 0 ? r : i, e)));
}
m$1(Ft, "drawNodes");
function se(E, I) {
    I.edges().map((o, i)=>{
        let e = /*#__PURE__*/ o.data();
        if (o[0]._private.bodyBounds) {
            let t = o[0]._private.rscratch;
            tt.trace("Edge: ", i, e), E.insert("path").attr("d", `M ${t.startX},${t.startY} L ${t.midX},${t.midY} L${t.endX},${t.endY} `).attr("class", "edge section-edge-" + e.section + " edge-depth-" + e.depth);
        }
    });
}
m$1(se, "drawEdges");
function _t(E, I, o, i) {
    I.add({
        group: "nodes",
        data: {
            id: /*#__PURE__*/ E.id.toString(),
            labelText: E.descr,
            height: E.height,
            width: E.width,
            level: i,
            nodeId: E.id,
            padding: E.padding,
            type: E.type
        },
        position: {
            x: E.x,
            y: E.y
        }
    }), E.children && E.children.forEach((e)=>{
        _t(e, I, o, i + 1), I.add({
            group: "edges",
            data: {
                id: `${E.id}_${e.id}`,
                source: E.id,
                target: e.id,
                depth: i,
                section: e.section
            }
        });
    });
}
m$1(_t, "addNodes");
function ae(E, I) {
    return new Promise((o)=>{
        let i = /*#__PURE__*/ ih("body").append("div").attr("id", "cy").attr("style", "display:none"), e = /*#__PURE__*/ Gr({
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
        i.remove(), _t(E, e, I, 0), e.nodes().forEach(function(t) {
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
            tt.info("Ready", t), o(e);
        });
    });
}
m$1(ae, "layoutMindmap");
function oe(E, I) {
    I.nodes().map((o, i)=>{
        let e = /*#__PURE__*/ o.data();
        e.x = o.position().x, e.y = o.position().y, St(E, e);
        let t = /*#__PURE__*/ E.getElementById(e.nodeId);
        tt.info("Id:", i, "Position: (", o.position().x, ", ", o.position().y, ")", e), t.attr("transform", `translate(${o.position().x - e.width / 2}, ${o.position().y - e.height / 2})`), t.attr("attr", `apa-${i})`);
    });
}
m$1(oe, "positionNodes");
var he = /*#__PURE__*/ m$1(async (E, I, o, i)=>{
    tt.debug(`Rendering mindmap diagram
` + E);
    let e = i.db, t = /*#__PURE__*/ e.getMindmap();
    if (!t) return;
    let r = /*#__PURE__*/ Hl();
    r.htmlLabels = false;
    let l = /*#__PURE__*/ d(I), f = /*#__PURE__*/ l.append("g");
    f.attr("class", "mindmap-edges");
    let a = /*#__PURE__*/ l.append("g");
    a.attr("class", "mindmap-nodes"), await Ft(e, a, t, -1, r);
    let d$1 = await ae(t, r);
    se(f, d$1), oe(e, d$1), Pl(void 0, l, r.mindmap?.padding ?? pl.mindmap.padding, r.mindmap?.useMaxWidth ?? pl.mindmap.useMaxWidth);
}, "draw"), bt = {
    draw: he
};
var le = /*#__PURE__*/ m$1((E$1)=>{
    let I = "";
    for(let o = 0; o < E$1.THEME_COLOR_LIMIT; o++)E$1["lineColor" + o] = E$1["lineColor" + o] || E$1["cScaleInv" + o], $t$1(E$1["lineColor" + o]) ? E$1["lineColor" + o] = /*#__PURE__*/ F(E$1["lineColor" + o], 20) : E$1["lineColor" + o] = /*#__PURE__*/ E(E$1["lineColor" + o], 20);
    for(let o = 0; o < E$1.THEME_COLOR_LIMIT; o++){
        let i = "" + (17 - 3 * o);
        I += `
    .section-${o - 1} rect, .section-${o - 1} path, .section-${o - 1} circle, .section-${o - 1} polygon, .section-${o - 1} path  {
      fill: ${E$1["cScale" + o]};
    }
    .section-${o - 1} text {
     fill: ${E$1["cScaleLabel" + o]};
    }
    .node-icon-${o - 1} {
      font-size: 40px;
      color: ${E$1["cScaleLabel" + o]};
    }
    .section-edge-${o - 1}{
      stroke: ${E$1["cScale" + o]};
    }
    .edge-depth-${o - 1}{
      stroke-width: ${i};
    }
    .section-${o - 1} line {
      stroke: ${E$1["cScaleInv" + o]} ;
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
    return I;
}, "genSections"), ce = /*#__PURE__*/ m$1((E)=>`
  .edge {
    stroke-width: 3;
  }
  ${le(E)}
  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {
    fill: ${E.git0};
  }
  .section-root text {
    fill: ${E.gitBranchLabel0};
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
`, "getStyles"), Pt = ce;
var We = {
    db: Rt,
    renderer: bt,
    parser: Ct,
    styles: Pt
};
export { We as diagram };
