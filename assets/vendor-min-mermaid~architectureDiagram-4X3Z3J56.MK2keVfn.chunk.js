import { a as q, n, t as m } from "./vendor-min-mermaid~chunk-GTKDMUJJ.DL2Iapv7.chunk.js";
import { t as c } from "./vendor-min-mermaid~chunk-4KE642ED.X-WJDyq5.chunk.js";
import { t as p } from "./vendor-min-mermaid~chunk-353K7GK5.DfZrGrs6.chunk.js";
import { V as ia, q as pt } from "./vendor-min-mermaid~chunk-63GW7ZVL.JXMkVvO5.chunk.js";
import { B as jo, E as Vo, I as dr, T as Uo, U as mr, _ as No, g as Ni, o as Go, q as ot, s as Ho, t as $o, y as Ot } from "./vendor-min-mermaid~chunk-KXVH62NG.DXOHBXLD.chunk.js";
import { t as d } from "./vendor-min-mermaid~chunk-ASAHGCDZ.CiiPqzVN.chunk.js";
import { t as ra } from "./vendor-min-mermaid~chunk-7SRKK4IT.JRp13HHg.chunk.js";
import { a as Lt, i as Jt } from "./vendor-min-mermaid~chunk-EFRVIJHI.Df9d5nYk.chunk.js";
import { i as Rr, o as ut, r as Hn, s as ve } from "./vendor-min-mermaid~chunk-GOL2OBWC.B4BOjWXT.chunk.js";
var xe = /* @__PURE__ */ n((se, we) => {
	m(function(C, T) {
		typeof se == "object" && typeof we == "object" ? we.exports = /* @__PURE__ */ T() : typeof define == "function" && define.amd ? define([], T) : typeof se == "object" ? se.layoutBase = /* @__PURE__ */ T() : C.layoutBase = /* @__PURE__ */ T();
	}, "webpackUniversalModuleDefinition")(se, function() {
		return function(D) {
			var C = {};
			function T(g) {
				if (C[g]) return C[g].exports;
				var o = C[g] = {
					i: g,
					l: !1,
					exports: {}
				};
				return D[g].call(o.exports, o, o.exports, T), o.l = !0, o.exports;
			}
			return m(T, "__webpack_require__"), T.m = D, T.c = C, T.i = function(g) {
				return g;
			}, T.d = function(g, o, n$1) {
				T.o(g, o) || Object.defineProperty(g, o, {
					configurable: !1,
					enumerable: !0,
					get: n$1
				});
			}, T.n = function(g) {
				var o = g && g.__esModule ? m(function() {
					return g.default;
				}, "getDefault") : m(function() {
					return g;
				}, "getModuleExports");
				return T.d(o, "a", o), o;
			}, T.o = function(g, o) {
				return Object.prototype.hasOwnProperty.call(g, o);
			}, T.p = "", T(T.s = 28);
		}([
			function(D, C, T) {
				function g() {}
				m(g, "LayoutConstants"), g.QUALITY = 1, g.DEFAULT_CREATE_BENDS_AS_NEEDED = !1, g.DEFAULT_INCREMENTAL = !1, g.DEFAULT_ANIMATION_ON_LAYOUT = !0, g.DEFAULT_ANIMATION_DURING_LAYOUT = !1, g.DEFAULT_ANIMATION_PERIOD = 50, g.DEFAULT_UNIFORM_LEAF_NODE_SIZES = !1, g.DEFAULT_GRAPH_MARGIN = 15, g.NODE_DIMENSIONS_INCLUDE_LABELS = !1, g.SIMPLE_NODE_SIZE = 40, g.SIMPLE_NODE_HALF_SIZE = g.SIMPLE_NODE_SIZE / 2, g.EMPTY_COMPOUND_NODE_SIZE = 40, g.MIN_EDGE_LENGTH = 1, g.WORLD_BOUNDARY = 1e6, g.INITIAL_WORLD_BOUNDARY = g.WORLD_BOUNDARY / 1e3, g.WORLD_CENTER_X = 1200, g.WORLD_CENTER_Y = 900, D.exports = g;
			},
			function(D, C, T) {
				var g = /* @__PURE__ */ T(2), o = /* @__PURE__ */ T(8), n$1 = /* @__PURE__ */ T(9);
				function r(c$1, t, u) {
					g.call(this, u), this.isOverlapingSourceAndTarget = !1, this.vGraphObject = u, this.bendpoints = [], this.source = c$1, this.target = t;
				}
				m(r, "LEdge"), r.prototype = /* @__PURE__ */ Object.create(g.prototype);
				for (var a in g) r[a] = g[a];
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
				}, r.prototype.getOtherEnd = function(c$1) {
					if (this.source === c$1) return this.target;
					if (this.target === c$1) return this.source;
					throw "Node is not incident with this edge";
				}, r.prototype.getOtherEndInGraph = function(c$1, t) {
					for (var u = /* @__PURE__ */ this.getOtherEnd(c$1), i = /* @__PURE__ */ t.getGraphManager().getRoot();;) {
						if (u.getOwner() == t) return u;
						if (u.getOwner() == i) break;
						u = /* @__PURE__ */ u.getOwner().getParent();
					}
					return null;
				}, r.prototype.updateLength = function() {
					var c$1 = new Array(4);
					this.isOverlapingSourceAndTarget = /* @__PURE__ */ o.getIntersection(/* @__PURE__ */ this.target.getRect(), /* @__PURE__ */ this.source.getRect(), c$1), this.isOverlapingSourceAndTarget || (this.lengthX = c$1[0] - c$1[2], this.lengthY = c$1[1] - c$1[3], Math.abs(this.lengthX) < 1 && (this.lengthX = /* @__PURE__ */ n$1.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = /* @__PURE__ */ n$1.sign(this.lengthY)), this.length = /* @__PURE__ */ Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY));
				}, r.prototype.updateLengthSimple = function() {
					this.lengthX = this.target.getCenterX() - this.source.getCenterX(), this.lengthY = this.target.getCenterY() - this.source.getCenterY(), Math.abs(this.lengthX) < 1 && (this.lengthX = /* @__PURE__ */ n$1.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = /* @__PURE__ */ n$1.sign(this.lengthY)), this.length = /* @__PURE__ */ Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
				}, D.exports = r;
			},
			function(D, C, T) {
				function g(o) {
					this.vGraphObject = o;
				}
				m(g, "LGraphObject"), D.exports = g;
			},
			function(D, C, T) {
				var g = /* @__PURE__ */ T(2), o = /* @__PURE__ */ T(10), n$1 = /* @__PURE__ */ T(13), r = /* @__PURE__ */ T(0), a = /* @__PURE__ */ T(16), c$1 = /* @__PURE__ */ T(5);
				function t(i, e, h, f) {
					h == null && f == null && (f = e), g.call(this, f), i.graphManager != null && (i = i.graphManager), this.estimatedSize = o.MIN_VALUE, this.inclusionTreeDepth = o.MAX_VALUE, this.vGraphObject = f, this.edges = [], this.graphManager = i, h != null && e != null ? this.rect = new n$1(e.x, e.y, h.width, h.height) : this.rect = new n$1();
				}
				m(t, "LNode"), t.prototype = /* @__PURE__ */ Object.create(g.prototype);
				for (var u in g) t[u] = g[u];
				t.prototype.getEdges = function() {
					return this.edges;
				}, t.prototype.getChild = function() {
					return this.child;
				}, t.prototype.getOwner = function() {
					return this.owner;
				}, t.prototype.getWidth = function() {
					return this.rect.width;
				}, t.prototype.setWidth = function(i) {
					this.rect.width = i;
				}, t.prototype.getHeight = function() {
					return this.rect.height;
				}, t.prototype.setHeight = function(i) {
					this.rect.height = i;
				}, t.prototype.getCenterX = function() {
					return this.rect.x + this.rect.width / 2;
				}, t.prototype.getCenterY = function() {
					return this.rect.y + this.rect.height / 2;
				}, t.prototype.getCenter = function() {
					return new c$1(this.rect.x + this.rect.width / 2, this.rect.y + this.rect.height / 2);
				}, t.prototype.getLocation = function() {
					return new c$1(this.rect.x, this.rect.y);
				}, t.prototype.getRect = function() {
					return this.rect;
				}, t.prototype.getDiagonal = function() {
					return Math.sqrt(this.rect.width * this.rect.width + this.rect.height * this.rect.height);
				}, t.prototype.getHalfTheDiagonal = function() {
					return Math.sqrt(this.rect.height * this.rect.height + this.rect.width * this.rect.width) / 2;
				}, t.prototype.setRect = function(i, e) {
					this.rect.x = i.x, this.rect.y = i.y, this.rect.width = e.width, this.rect.height = e.height;
				}, t.prototype.setCenter = function(i, e) {
					this.rect.x = i - this.rect.width / 2, this.rect.y = e - this.rect.height / 2;
				}, t.prototype.setLocation = function(i, e) {
					this.rect.x = i, this.rect.y = e;
				}, t.prototype.moveBy = function(i, e) {
					this.rect.x += i, this.rect.y += e;
				}, t.prototype.getEdgeListToNode = function(i) {
					var e = [], f = this;
					return f.edges.forEach(function(l) {
						if (l.target == i) {
							if (l.source != f) throw "Incorrect edge source!";
							e.push(l);
						}
					}), e;
				}, t.prototype.getEdgesBetween = function(i) {
					var e = [], f = this;
					return f.edges.forEach(function(l) {
						if (!(l.source == f || l.target == f)) throw "Incorrect edge source and/or target";
						(l.target == i || l.source == i) && e.push(l);
					}), e;
				}, t.prototype.getNeighborsList = function() {
					var i = /* @__PURE__ */ new Set(), e = this;
					return e.edges.forEach(function(h) {
						if (h.source == e) i.add(h.target);
						else {
							if (h.target != e) throw "Incorrect incidency!";
							i.add(h.source);
						}
					}), i;
				}, t.prototype.withChildren = function() {
					var i = /* @__PURE__ */ new Set(), e, h;
					if (i.add(this), this.child != null) for (var f = /* @__PURE__ */ this.child.getNodes(), l = 0; l < f.length; l++) e = f[l], h = /* @__PURE__ */ e.withChildren(), h.forEach(function(A) {
						i.add(A);
					});
					return i;
				}, t.prototype.getNoOfChildren = function() {
					var i = 0, e;
					if (this.child == null) i = 1;
					else for (var h = /* @__PURE__ */ this.child.getNodes(), f = 0; f < h.length; f++) e = h[f], i += /* @__PURE__ */ e.getNoOfChildren();
					return i == 0 && (i = 1), i;
				}, t.prototype.getEstimatedSize = function() {
					if (this.estimatedSize == o.MIN_VALUE) throw "assert failed";
					return this.estimatedSize;
				}, t.prototype.calcEstimatedSize = function() {
					return this.child == null ? this.estimatedSize = (this.rect.width + this.rect.height) / 2 : (this.estimatedSize = /* @__PURE__ */ this.child.calcEstimatedSize(), this.rect.width = this.estimatedSize, this.rect.height = this.estimatedSize, this.estimatedSize);
				}, t.prototype.scatter = function() {
					var i, e, h = -r.INITIAL_WORLD_BOUNDARY, f = r.INITIAL_WORLD_BOUNDARY;
					i = r.WORLD_CENTER_X + a.nextDouble() * (f - h) + h;
					var l = -r.INITIAL_WORLD_BOUNDARY, A = r.INITIAL_WORLD_BOUNDARY;
					e = r.WORLD_CENTER_Y + a.nextDouble() * (A - l) + l, this.rect.x = i, this.rect.y = e;
				}, t.prototype.updateBounds = function() {
					if (this.getChild() == null) throw "assert failed";
					if (this.getChild().getNodes().length != 0) {
						var i = /* @__PURE__ */ this.getChild();
						if (i.updateBounds(!0), this.rect.x = /* @__PURE__ */ i.getLeft(), this.rect.y = /* @__PURE__ */ i.getTop(), this.setWidth(i.getRight() - i.getLeft()), this.setHeight(i.getBottom() - i.getTop()), r.NODE_DIMENSIONS_INCLUDE_LABELS) {
							var e = i.getRight() - i.getLeft(), h = i.getBottom() - i.getTop();
							this.labelWidth && (this.labelPosHorizontal == "left" ? (this.rect.x -= this.labelWidth, this.setWidth(e + this.labelWidth)) : this.labelPosHorizontal == "center" && this.labelWidth > e ? (this.rect.x -= (this.labelWidth - e) / 2, this.setWidth(this.labelWidth)) : this.labelPosHorizontal == "right" && this.setWidth(e + this.labelWidth)), this.labelHeight && (this.labelPosVertical == "top" ? (this.rect.y -= this.labelHeight, this.setHeight(h + this.labelHeight)) : this.labelPosVertical == "center" && this.labelHeight > h ? (this.rect.y -= (this.labelHeight - h) / 2, this.setHeight(this.labelHeight)) : this.labelPosVertical == "bottom" && this.setHeight(h + this.labelHeight));
						}
					}
				}, t.prototype.getInclusionTreeDepth = function() {
					if (this.inclusionTreeDepth == o.MAX_VALUE) throw "assert failed";
					return this.inclusionTreeDepth;
				}, t.prototype.transform = function(i) {
					var e = this.rect.x;
					e > r.WORLD_BOUNDARY ? e = r.WORLD_BOUNDARY : e < -r.WORLD_BOUNDARY && (e = -r.WORLD_BOUNDARY);
					var h = this.rect.y;
					h > r.WORLD_BOUNDARY ? h = r.WORLD_BOUNDARY : h < -r.WORLD_BOUNDARY && (h = -r.WORLD_BOUNDARY);
					var f = new c$1(e, h), l = /* @__PURE__ */ i.inverseTransformPoint(f);
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
				}, D.exports = t;
			},
			function(D, C, T) {
				var g = /* @__PURE__ */ T(0);
				function o() {}
				m(o, "FDLayoutConstants");
				for (var n$1 in g) o[n$1] = g[n$1];
				o.MAX_ITERATIONS = 2500, o.DEFAULT_EDGE_LENGTH = 50, o.DEFAULT_SPRING_STRENGTH = .45, o.DEFAULT_REPULSION_STRENGTH = 4500, o.DEFAULT_GRAVITY_STRENGTH = .4, o.DEFAULT_COMPOUND_GRAVITY_STRENGTH = 1, o.DEFAULT_GRAVITY_RANGE_FACTOR = 3.8, o.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = 1.5, o.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION = !0, o.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION = !0, o.DEFAULT_COOLING_FACTOR_INCREMENTAL = .3, o.COOLING_ADAPTATION_FACTOR = .33, o.ADAPTATION_LOWER_NODE_LIMIT = 1e3, o.ADAPTATION_UPPER_NODE_LIMIT = 5e3, o.MAX_NODE_DISPLACEMENT_INCREMENTAL = 100, o.MAX_NODE_DISPLACEMENT = o.MAX_NODE_DISPLACEMENT_INCREMENTAL * 3, o.MIN_REPULSION_DIST = o.DEFAULT_EDGE_LENGTH / 10, o.CONVERGENCE_CHECK_PERIOD = 100, o.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = .1, o.MIN_EDGE_LENGTH = 1, o.GRID_CALCULATION_CHECK_PERIOD = 10, D.exports = o;
			},
			function(D, C, T) {
				function g(o, n$1) {
					o == null && n$1 == null ? (this.x = 0, this.y = 0) : (this.x = o, this.y = n$1);
				}
				m(g, "PointD"), g.prototype.getX = function() {
					return this.x;
				}, g.prototype.getY = function() {
					return this.y;
				}, g.prototype.setX = function(o) {
					this.x = o;
				}, g.prototype.setY = function(o) {
					this.y = o;
				}, g.prototype.getDifference = function(o) {
					return new DimensionD(this.x - o.x, this.y - o.y);
				}, g.prototype.getCopy = function() {
					return new g(this.x, this.y);
				}, g.prototype.translate = function(o) {
					return this.x += o.width, this.y += o.height, this;
				}, D.exports = g;
			},
			function(D, C, T) {
				var g = /* @__PURE__ */ T(2), o = /* @__PURE__ */ T(10), n$1 = /* @__PURE__ */ T(0), r = /* @__PURE__ */ T(7), a = /* @__PURE__ */ T(3), c$1 = /* @__PURE__ */ T(1), t = /* @__PURE__ */ T(13), u = /* @__PURE__ */ T(12), i = /* @__PURE__ */ T(11);
				function e(f, l, A) {
					g.call(this, A), this.estimatedSize = o.MIN_VALUE, this.margin = n$1.DEFAULT_GRAPH_MARGIN, this.edges = [], this.nodes = [], this.isConnected = !1, this.parent = f, l != null && l instanceof r ? this.graphManager = l : l != null && l instanceof Layout && (this.graphManager = l.graphManager);
				}
				m(e, "LGraph"), e.prototype = /* @__PURE__ */ Object.create(g.prototype);
				for (var h in g) e[h] = g[h];
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
						var y = f;
						if (this.graphManager == null) throw "Graph has no graph mgr!";
						if (this.getNodes().indexOf(y) > -1) throw "Node already in graph!";
						return y.owner = this, this.getNodes().push(y), y;
					} else {
						var v = f;
						if (!(this.getNodes().indexOf(l) > -1 && this.getNodes().indexOf(A) > -1)) throw "Source or target not in graph!";
						if (!(l.owner == A.owner && l.owner == this)) throw "Both owners must be this graph!";
						return l.owner != A.owner ? null : (v.source = l, v.target = A, v.isInterGraph = !1, this.getEdges().push(v), l.edges.push(v), A != l && A.edges.push(v), v);
					}
				}, e.prototype.remove = function(f) {
					var l = f;
					if (f instanceof a) {
						if (l == null) throw "Node is null!";
						if (!(l.owner != null && l.owner == this)) throw "Owner graph is invalid!";
						if (this.graphManager == null) throw "Owner graph manager is invalid!";
						for (var A = /* @__PURE__ */ l.edges.slice(), y, v = A.length, N = 0; N < v; N++) y = A[N], y.isInterGraph ? this.graphManager.remove(y) : y.source.owner.remove(y);
						var S = /* @__PURE__ */ this.nodes.indexOf(l);
						if (S == -1) throw "Node not in owner node list!";
						this.nodes.splice(S, 1);
					} else if (f instanceof c$1) {
						var y = f;
						if (y == null) throw "Edge is null!";
						if (!(y.source != null && y.target != null)) throw "Source and/or target is null!";
						if (!(y.source.owner != null && y.target.owner != null && y.source.owner == this && y.target.owner == this)) throw "Source and/or target owner is invalid!";
						var M = /* @__PURE__ */ y.source.edges.indexOf(y), b = /* @__PURE__ */ y.target.edges.indexOf(y);
						if (!(M > -1 && b > -1)) throw "Source and/or target doesn't know this edge!";
						y.source.edges.splice(M, 1), y.target != y.source && y.target.edges.splice(b, 1);
						var S = /* @__PURE__ */ y.source.owner.getEdges().indexOf(y);
						if (S == -1) throw "Not in owner's edge list!";
						y.source.owner.getEdges().splice(S, 1);
					}
				}, e.prototype.updateLeftTop = function() {
					for (var f = o.MAX_VALUE, l = o.MAX_VALUE, A, y, v, N = /* @__PURE__ */ this.getNodes(), S = N.length, M = 0; M < S; M++) {
						var b = N[M];
						A = /* @__PURE__ */ b.getTop(), y = /* @__PURE__ */ b.getLeft(), f > A && (f = A), l > y && (l = y);
					}
					return f == o.MAX_VALUE ? null : (N[0].getParent().paddingLeft != null ? v = N[0].getParent().paddingLeft : v = this.margin, this.left = l - v, this.top = f - v, new u(this.left, this.top));
				}, e.prototype.updateBounds = function(f) {
					for (var l = o.MAX_VALUE, A = -o.MAX_VALUE, y = o.MAX_VALUE, v = -o.MAX_VALUE, N, S, M, b, $, X = this.nodes, et = X.length, R = 0; R < et; R++) {
						var J = X[R];
						f && J.child != null && J.updateBounds(), N = /* @__PURE__ */ J.getLeft(), S = /* @__PURE__ */ J.getRight(), M = /* @__PURE__ */ J.getTop(), b = /* @__PURE__ */ J.getBottom(), l > N && (l = N), A < S && (A = S), y > M && (y = M), v < b && (v = b);
					}
					var s = new t(l, y, A - l, v - y);
					l == o.MAX_VALUE && (this.left = /* @__PURE__ */ this.parent.getLeft(), this.right = /* @__PURE__ */ this.parent.getRight(), this.top = /* @__PURE__ */ this.parent.getTop(), this.bottom = /* @__PURE__ */ this.parent.getBottom()), X[0].getParent().paddingLeft != null ? $ = X[0].getParent().paddingLeft : $ = this.margin, this.left = s.x - $, this.right = s.x + s.width + $, this.top = s.y - $, this.bottom = s.y + s.height + $;
				}, e.calculateBounds = function(f) {
					for (var l = o.MAX_VALUE, A = -o.MAX_VALUE, y = o.MAX_VALUE, v = -o.MAX_VALUE, N, S, M, b, $ = f.length, X = 0; X < $; X++) {
						var et = f[X];
						N = /* @__PURE__ */ et.getLeft(), S = /* @__PURE__ */ et.getRight(), M = /* @__PURE__ */ et.getTop(), b = /* @__PURE__ */ et.getBottom(), l > N && (l = N), A < S && (A = S), y > M && (y = M), v < b && (v = b);
					}
					return new t(l, y, A - l, v - y);
				}, e.prototype.getInclusionTreeDepth = function() {
					return this == this.graphManager.getRoot() ? 1 : this.parent.getInclusionTreeDepth();
				}, e.prototype.getEstimatedSize = function() {
					if (this.estimatedSize == o.MIN_VALUE) throw "assert failed";
					return this.estimatedSize;
				}, e.prototype.calcEstimatedSize = function() {
					for (var f = 0, l = this.nodes, A = l.length, y = 0; y < A; y++) {
						var v = l[y];
						f += /* @__PURE__ */ v.calcEstimatedSize();
					}
					return f == 0 ? this.estimatedSize = n$1.EMPTY_COMPOUND_NODE_SIZE : this.estimatedSize = f / Math.sqrt(this.nodes.length), this.estimatedSize;
				}, e.prototype.updateConnected = function() {
					var f = this;
					if (this.nodes.length == 0) {
						this.isConnected = !0;
						return;
					}
					var l = new i(), A = /* @__PURE__ */ new Set(), y = this.nodes[0], v, N;
					for (y.withChildren().forEach(function(R) {
						l.push(R), A.add(R);
					}); l.length !== 0;) {
						y = /* @__PURE__ */ l.shift(), v = /* @__PURE__ */ y.getEdges();
						for (var M = v.length, b = 0; b < M; b++) if (N = /* @__PURE__ */ v[b].getOtherEndInGraph(y, this), N != null && !A.has(N)) N.withChildren().forEach(function(R) {
							l.push(R), A.add(R);
						});
					}
					if (this.isConnected = !1, A.size >= this.nodes.length) {
						var et = 0;
						A.forEach(function(R) {
							R.owner == f && et++;
						}), et == this.nodes.length && (this.isConnected = !0);
					}
				}, D.exports = e;
			},
			function(D, C, T) {
				var g, o = /* @__PURE__ */ T(1);
				function n$1(r) {
					g = /* @__PURE__ */ T(6), this.layout = r, this.graphs = [], this.edges = [];
				}
				m(n$1, "LGraphManager"), n$1.prototype.addRoot = function() {
					var r = /* @__PURE__ */ this.layout.newGraph(), a = /* @__PURE__ */ this.layout.newNode(null), c$1 = /* @__PURE__ */ this.add(r, a);
					return this.setRootGraph(c$1), this.rootGraph;
				}, n$1.prototype.add = function(r, a, c$1, t, u) {
					if (c$1 == null && t == null && u == null) {
						if (r == null) throw "Graph is null!";
						if (a == null) throw "Parent node is null!";
						if (this.graphs.indexOf(r) > -1) throw "Graph already in this graph mgr!";
						if (this.graphs.push(r), r.parent != null) throw "Already has a parent!";
						if (a.child != null) throw "Already has a child!";
						return r.parent = a, a.child = r, r;
					} else {
						u = c$1, t = a, c$1 = r;
						var i = /* @__PURE__ */ t.getOwner(), e = /* @__PURE__ */ u.getOwner();
						if (!(i != null && i.getGraphManager() == this)) throw "Source not in this graph mgr!";
						if (!(e != null && e.getGraphManager() == this)) throw "Target not in this graph mgr!";
						if (i == e) return c$1.isInterGraph = !1, i.add(c$1, t, u);
						if (c$1.isInterGraph = !0, c$1.source = t, c$1.target = u, this.edges.indexOf(c$1) > -1) throw "Edge already in inter-graph edge list!";
						if (this.edges.push(c$1), !(c$1.source != null && c$1.target != null)) throw "Edge source and/or target is null!";
						if (!(c$1.source.edges.indexOf(c$1) == -1 && c$1.target.edges.indexOf(c$1) == -1)) throw "Edge already in source and/or target incidency list!";
						return c$1.source.edges.push(c$1), c$1.target.edges.push(c$1), c$1;
					}
				}, n$1.prototype.remove = function(r) {
					if (r instanceof g) {
						var a = r;
						if (a.getGraphManager() != this) throw "Graph not in this graph mgr";
						if (!(a == this.rootGraph || a.parent != null && a.parent.graphManager == this)) throw "Invalid parent node!";
						var c$1 = [];
						c$1 = /* @__PURE__ */ c$1.concat(/* @__PURE__ */ a.getEdges());
						for (var t, u = c$1.length, i = 0; i < u; i++) t = c$1[i], a.remove(t);
						var e = [];
						e = /* @__PURE__ */ e.concat(/* @__PURE__ */ a.getNodes());
						var h;
						u = e.length;
						for (var i = 0; i < u; i++) h = e[i], a.remove(h);
						a == this.rootGraph && this.setRootGraph(null);
						var f = /* @__PURE__ */ this.graphs.indexOf(a);
						this.graphs.splice(f, 1), a.parent = null;
					} else if (r instanceof o) {
						if (t = r, t == null) throw "Edge is null!";
						if (!t.isInterGraph) throw "Not an inter-graph edge!";
						if (!(t.source != null && t.target != null)) throw "Source and/or target is null!";
						if (!(t.source.edges.indexOf(t) != -1 && t.target.edges.indexOf(t) != -1)) throw "Source and/or target doesn't know this edge!";
						var f = /* @__PURE__ */ t.source.edges.indexOf(t);
						if (t.source.edges.splice(f, 1), f = /* @__PURE__ */ t.target.edges.indexOf(t), t.target.edges.splice(f, 1), !(t.source.owner != null && t.source.owner.getGraphManager() != null)) throw "Edge owner graph or owner graph manager is null!";
						if (t.source.owner.getGraphManager().edges.indexOf(t) == -1) throw "Not in owner graph manager's edge list!";
						var f = /* @__PURE__ */ t.source.owner.getGraphManager().edges.indexOf(t);
						t.source.owner.getGraphManager().edges.splice(f, 1);
					}
				}, n$1.prototype.updateBounds = function() {
					this.rootGraph.updateBounds(!0);
				}, n$1.prototype.getGraphs = function() {
					return this.graphs;
				}, n$1.prototype.getAllNodes = function() {
					if (this.allNodes == null) {
						for (var r = [], a = /* @__PURE__ */ this.getGraphs(), c$1 = a.length, t = 0; t < c$1; t++) r = /* @__PURE__ */ r.concat(/* @__PURE__ */ a[t].getNodes());
						this.allNodes = r;
					}
					return this.allNodes;
				}, n$1.prototype.resetAllNodes = function() {
					this.allNodes = null;
				}, n$1.prototype.resetAllEdges = function() {
					this.allEdges = null;
				}, n$1.prototype.resetAllNodesToApplyGravitation = function() {
					this.allNodesToApplyGravitation = null;
				}, n$1.prototype.getAllEdges = function() {
					if (this.allEdges == null) {
						for (var r = [], a = /* @__PURE__ */ this.getGraphs(), c$1 = a.length, t = 0; t < a.length; t++) r = /* @__PURE__ */ r.concat(/* @__PURE__ */ a[t].getEdges());
						r = /* @__PURE__ */ r.concat(this.edges), this.allEdges = r;
					}
					return this.allEdges;
				}, n$1.prototype.getAllNodesToApplyGravitation = function() {
					return this.allNodesToApplyGravitation;
				}, n$1.prototype.setAllNodesToApplyGravitation = function(r) {
					if (this.allNodesToApplyGravitation != null) throw "assert failed";
					this.allNodesToApplyGravitation = r;
				}, n$1.prototype.getRoot = function() {
					return this.rootGraph;
				}, n$1.prototype.setRootGraph = function(r) {
					if (r.getGraphManager() != this) throw "Root not in this graph mgr!";
					this.rootGraph = r, r.parent ??= /* @__PURE__ */ this.layout.newNode("Root node");
				}, n$1.prototype.getLayout = function() {
					return this.layout;
				}, n$1.prototype.isOneAncestorOfOther = function(r, a) {
					if (!(r != null && a != null)) throw "assert failed";
					if (r == a) return !0;
					var c$1 = /* @__PURE__ */ r.getOwner(), t;
					do {
						if (t = /* @__PURE__ */ c$1.getParent(), t == null) break;
						if (t == a) return !0;
						if (c$1 = /* @__PURE__ */ t.getOwner(), c$1 == null) break;
					} while (!0);
					c$1 = /* @__PURE__ */ a.getOwner();
					do {
						if (t = /* @__PURE__ */ c$1.getParent(), t == null) break;
						if (t == r) return !0;
						if (c$1 = /* @__PURE__ */ t.getOwner(), c$1 == null) break;
					} while (!0);
					return !1;
				}, n$1.prototype.calcLowestCommonAncestors = function() {
					for (var r, a, c$1, t, u, i = /* @__PURE__ */ this.getAllEdges(), e = i.length, h = 0; h < e; h++) {
						if (r = i[h], a = r.source, c$1 = r.target, r.lca = null, r.sourceInLca = a, r.targetInLca = c$1, a == c$1) {
							r.lca = /* @__PURE__ */ a.getOwner();
							continue;
						}
						for (t = /* @__PURE__ */ a.getOwner(); r.lca == null;) {
							for (r.targetInLca = c$1, u = /* @__PURE__ */ c$1.getOwner(); r.lca == null;) {
								if (u == t) {
									r.lca = u;
									break;
								}
								if (u == this.rootGraph) break;
								if (r.lca != null) throw "assert failed";
								r.targetInLca = /* @__PURE__ */ u.getParent(), u = /* @__PURE__ */ r.targetInLca.getOwner();
							}
							if (t == this.rootGraph) break;
							r.lca ?? (r.sourceInLca = /* @__PURE__ */ t.getParent(), t = /* @__PURE__ */ r.sourceInLca.getOwner());
						}
						if (r.lca == null) throw "assert failed";
					}
				}, n$1.prototype.calcLowestCommonAncestor = function(r, a) {
					if (r == a) return r.getOwner();
					var c$1 = /* @__PURE__ */ r.getOwner();
					do {
						if (c$1 == null) break;
						var t = /* @__PURE__ */ a.getOwner();
						do {
							if (t == null) break;
							if (t == c$1) return t;
							t = /* @__PURE__ */ t.getParent().getOwner();
						} while (!0);
						c$1 = /* @__PURE__ */ c$1.getParent().getOwner();
					} while (!0);
					return c$1;
				}, n$1.prototype.calcInclusionTreeDepths = function(r, a) {
					r == null && a == null && (r = this.rootGraph, a = 1);
					for (var c$1, t = /* @__PURE__ */ r.getNodes(), u = t.length, i = 0; i < u; i++) c$1 = t[i], c$1.inclusionTreeDepth = a, c$1.child != null && this.calcInclusionTreeDepths(c$1.child, a + 1);
				}, n$1.prototype.includesInvalidEdge = function() {
					for (var r, a = [], c$1 = this.edges.length, t = 0; t < c$1; t++) r = this.edges[t], this.isOneAncestorOfOther(r.source, r.target) && a.push(r);
					for (var t = 0; t < a.length; t++) this.remove(a[t]);
					return !1;
				}, D.exports = n$1;
			},
			function(D, C, T) {
				var g = /* @__PURE__ */ T(12);
				function o() {}
				m(o, "IGeometry"), o.calcSeparationAmount = function(n$1, r, a, c$1) {
					if (!n$1.intersects(r)) throw "assert failed";
					var t = new Array(2);
					this.decideDirectionsForOverlappingNodes(n$1, r, t), a[0] = Math.min(/* @__PURE__ */ n$1.getRight(), /* @__PURE__ */ r.getRight()) - Math.max(n$1.x, r.x), a[1] = Math.min(/* @__PURE__ */ n$1.getBottom(), /* @__PURE__ */ r.getBottom()) - Math.max(n$1.y, r.y), n$1.getX() <= r.getX() && n$1.getRight() >= r.getRight() ? a[0] += /* @__PURE__ */ Math.min(r.getX() - n$1.getX(), n$1.getRight() - r.getRight()) : r.getX() <= n$1.getX() && r.getRight() >= n$1.getRight() && (a[0] += /* @__PURE__ */ Math.min(n$1.getX() - r.getX(), r.getRight() - n$1.getRight())), n$1.getY() <= r.getY() && n$1.getBottom() >= r.getBottom() ? a[1] += /* @__PURE__ */ Math.min(r.getY() - n$1.getY(), n$1.getBottom() - r.getBottom()) : r.getY() <= n$1.getY() && r.getBottom() >= n$1.getBottom() && (a[1] += /* @__PURE__ */ Math.min(n$1.getY() - r.getY(), r.getBottom() - n$1.getBottom()));
					var u = /* @__PURE__ */ Math.abs((r.getCenterY() - n$1.getCenterY()) / (r.getCenterX() - n$1.getCenterX()));
					r.getCenterY() === n$1.getCenterY() && r.getCenterX() === n$1.getCenterX() && (u = 1);
					var i = u * a[0], e = a[1] / u;
					a[0] < e ? e = a[0] : i = a[1], a[0] = -1 * t[0] * (e / 2 + c$1), a[1] = -1 * t[1] * (i / 2 + c$1);
				}, o.decideDirectionsForOverlappingNodes = function(n$1, r, a) {
					n$1.getCenterX() < r.getCenterX() ? a[0] = -1 : a[0] = 1, n$1.getCenterY() < r.getCenterY() ? a[1] = -1 : a[1] = 1;
				}, o.getIntersection2 = function(n$1, r, a) {
					var c$1 = /* @__PURE__ */ n$1.getCenterX(), t = /* @__PURE__ */ n$1.getCenterY(), u = /* @__PURE__ */ r.getCenterX(), i = /* @__PURE__ */ r.getCenterY();
					if (n$1.intersects(r)) return a[0] = c$1, a[1] = t, a[2] = u, a[3] = i, !0;
					var e = /* @__PURE__ */ n$1.getX(), h = /* @__PURE__ */ n$1.getY(), f = /* @__PURE__ */ n$1.getRight(), l = /* @__PURE__ */ n$1.getX(), A = /* @__PURE__ */ n$1.getBottom(), y = /* @__PURE__ */ n$1.getRight(), v = /* @__PURE__ */ n$1.getWidthHalf(), N = /* @__PURE__ */ n$1.getHeightHalf(), S = /* @__PURE__ */ r.getX(), M = /* @__PURE__ */ r.getY(), b = /* @__PURE__ */ r.getRight(), $ = /* @__PURE__ */ r.getX(), X = /* @__PURE__ */ r.getBottom(), et = /* @__PURE__ */ r.getRight(), R = /* @__PURE__ */ r.getWidthHalf(), J = /* @__PURE__ */ r.getHeightHalf(), s = !1, m$1 = !1;
					if (c$1 === u) {
						if (t > i) return a[0] = c$1, a[1] = h, a[2] = u, a[3] = X, !1;
						if (t < i) return a[0] = c$1, a[1] = A, a[2] = u, a[3] = M, !1;
					} else if (t === i) {
						if (c$1 > u) return a[0] = e, a[1] = t, a[2] = b, a[3] = i, !1;
						if (c$1 < u) return a[0] = f, a[1] = t, a[2] = S, a[3] = i, !1;
					} else {
						var p$1 = n$1.height / n$1.width, E = r.height / r.width, d$1 = (i - t) / (u - c$1), O = void 0, x = void 0, G = void 0, F = void 0, I = void 0, Z = void 0;
						if (-p$1 === d$1 ? c$1 > u ? (a[0] = l, a[1] = A, s = !0) : (a[0] = f, a[1] = h, s = !0) : p$1 === d$1 && (c$1 > u ? (a[0] = e, a[1] = h, s = !0) : (a[0] = y, a[1] = A, s = !0)), -E === d$1 ? u > c$1 ? (a[2] = $, a[3] = X, m$1 = !0) : (a[2] = b, a[3] = M, m$1 = !0) : E === d$1 && (u > c$1 ? (a[2] = S, a[3] = M, m$1 = !0) : (a[2] = et, a[3] = X, m$1 = !0)), s && m$1) return !1;
						if (c$1 > u ? t > i ? (O = /* @__PURE__ */ this.getCardinalDirection(p$1, d$1, 4), x = /* @__PURE__ */ this.getCardinalDirection(E, d$1, 2)) : (O = /* @__PURE__ */ this.getCardinalDirection(-p$1, d$1, 3), x = /* @__PURE__ */ this.getCardinalDirection(-E, d$1, 1)) : t > i ? (O = /* @__PURE__ */ this.getCardinalDirection(-p$1, d$1, 1), x = /* @__PURE__ */ this.getCardinalDirection(-E, d$1, 3)) : (O = /* @__PURE__ */ this.getCardinalDirection(p$1, d$1, 2), x = /* @__PURE__ */ this.getCardinalDirection(E, d$1, 4)), !s) switch (O) {
							case 1:
								F = h, G = c$1 + -N / d$1, a[0] = G, a[1] = F;
								break;
							case 2:
								G = y, F = t + v * d$1, a[0] = G, a[1] = F;
								break;
							case 3:
								F = A, G = c$1 + N / d$1, a[0] = G, a[1] = F;
								break;
							case 4:
								G = l, F = t + -v * d$1, a[0] = G, a[1] = F;
								break;
						}
						if (!m$1) switch (x) {
							case 1:
								Z = M, I = u + -J / d$1, a[2] = I, a[3] = Z;
								break;
							case 2:
								I = et, Z = i + R * d$1, a[2] = I, a[3] = Z;
								break;
							case 3:
								Z = X, I = u + J / d$1, a[2] = I, a[3] = Z;
								break;
							case 4:
								I = $, Z = i + -R * d$1, a[2] = I, a[3] = Z;
								break;
						}
					}
					return !1;
				}, o.getCardinalDirection = function(n$1, r, a) {
					return n$1 > r ? a : 1 + a % 4;
				}, o.getIntersection = function(n$1, r, a, c$1) {
					if (c$1 == null) return this.getIntersection2(n$1, r, a);
					var t = n$1.x, u = n$1.y, i = r.x, e = r.y, h = a.x, f = a.y, l = c$1.x, A = c$1.y, y = void 0, v = void 0, N = void 0, S = void 0, M = void 0, b = void 0, $ = void 0, X = void 0, et = void 0;
					return N = e - u, M = t - i, $ = i * u - t * e, S = A - f, b = h - l, X = l * f - h * A, et = N * b - S * M, et === 0 ? null : (y = (M * X - b * $) / et, v = (S * $ - N * X) / et, new g(y, v));
				}, o.angleOfVector = function(n$1, r, a, c$1) {
					var t = void 0;
					return n$1 !== a ? (t = /* @__PURE__ */ Math.atan((c$1 - r) / (a - n$1)), a < n$1 ? t += Math.PI : c$1 < r && (t += this.TWO_PI)) : c$1 < r ? t = this.ONE_AND_HALF_PI : t = this.HALF_PI, t;
				}, o.doIntersect = function(n$1, r, a, c$1) {
					var t = n$1.x, u = n$1.y, i = r.x, e = r.y, h = a.x, f = a.y, l = c$1.x, A = c$1.y, y = (i - t) * (A - f) - (l - h) * (e - u);
					if (y === 0) return !1;
					var v = ((A - f) * (l - t) + (h - l) * (A - u)) / y, N = ((u - e) * (l - t) + (i - t) * (A - u)) / y;
					return 0 < v && v < 1 && 0 < N && N < 1;
				}, o.findCircleLineIntersections = function(n$1, r, a, c$1, t, u, i) {
					var e = (a - n$1) * (a - n$1) + (c$1 - r) * (c$1 - r), h = 2 * ((n$1 - t) * (a - n$1) + (r - u) * (c$1 - r)), f = (n$1 - t) * (n$1 - t) + (r - u) * (r - u) - i * i;
					if (h * h - 4 * e * f >= 0) {
						var A = (-h + Math.sqrt(h * h - 4 * e * f)) / (2 * e), y = (-h - Math.sqrt(h * h - 4 * e * f)) / (2 * e);
						return A >= 0 && A <= 1 ? [A] : y >= 0 && y <= 1 ? [y] : null;
					} else return null;
				}, o.HALF_PI = .5 * Math.PI, o.ONE_AND_HALF_PI = 1.5 * Math.PI, o.TWO_PI = 2 * Math.PI, o.THREE_PI = 3 * Math.PI, D.exports = o;
			},
			function(D, C, T) {
				function g() {}
				m(g, "IMath"), g.sign = function(o) {
					return o > 0 ? 1 : o < 0 ? -1 : 0;
				}, g.floor = function(o) {
					return o < 0 ? Math.ceil(o) : Math.floor(o);
				}, g.ceil = function(o) {
					return o < 0 ? Math.floor(o) : Math.ceil(o);
				}, D.exports = g;
			},
			function(D, C, T) {
				function g() {}
				m(g, "Integer"), g.MAX_VALUE = 2147483647, g.MIN_VALUE = -2147483648, D.exports = g;
			},
			function(D, C, T) {
				var g = /* @__PURE__ */ function() {
					function t(u, i) {
						for (var e = 0; e < i.length; e++) {
							var h = i[e];
							h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), Object.defineProperty(u, h.key, h);
						}
					}
					return m(t, "defineProperties"), function(u, i, e) {
						return i && t(u.prototype, i), e && t(u, e), u;
					};
				}();
				function o(t, u) {
					if (!(t instanceof u)) throw new TypeError("Cannot call a class as a function");
				}
				m(o, "_classCallCheck");
				var n$1 = /* @__PURE__ */ m(function(u) {
					return {
						value: u,
						next: null,
						prev: null
					};
				}, "nodeFrom"), r = /* @__PURE__ */ m(function(u, i, e, h) {
					return u !== null ? u.next = i : h.head = i, e !== null ? e.prev = i : h.tail = i, i.prev = u, i.next = e, h.length++, i;
				}, "add"), a = /* @__PURE__ */ m(function(u, i) {
					var e = u.prev, h = u.next;
					return e !== null ? e.next = h : i.head = h, h !== null ? h.prev = e : i.tail = e, u.prev = u.next = null, i.length--, u;
				}, "_remove");
				D.exports = /* @__PURE__ */ function() {
					function t(u) {
						var i = this;
						o(this, t), this.length = 0, this.head = null, this.tail = null, u?.forEach(function(e) {
							return i.push(e);
						});
					}
					return m(t, "LinkedList"), g(t, [
						{
							key: "size",
							value: /* @__PURE__ */ m(function() {
								return this.length;
							}, "size")
						},
						{
							key: "insertBefore",
							value: /* @__PURE__ */ m(function(i, e) {
								return r(e.prev, /* @__PURE__ */ n$1(i), e, this);
							}, "insertBefore")
						},
						{
							key: "insertAfter",
							value: /* @__PURE__ */ m(function(i, e) {
								return r(e, /* @__PURE__ */ n$1(i), e.next, this);
							}, "insertAfter")
						},
						{
							key: "insertNodeBefore",
							value: /* @__PURE__ */ m(function(i, e) {
								return r(e.prev, i, e, this);
							}, "insertNodeBefore")
						},
						{
							key: "insertNodeAfter",
							value: /* @__PURE__ */ m(function(i, e) {
								return r(e, i, e.next, this);
							}, "insertNodeAfter")
						},
						{
							key: "push",
							value: /* @__PURE__ */ m(function(i) {
								return r(this.tail, /* @__PURE__ */ n$1(i), null, this);
							}, "push")
						},
						{
							key: "unshift",
							value: /* @__PURE__ */ m(function(i) {
								return r(null, /* @__PURE__ */ n$1(i), this.head, this);
							}, "unshift")
						},
						{
							key: "remove",
							value: /* @__PURE__ */ m(function(i) {
								return a(i, this);
							}, "remove")
						},
						{
							key: "pop",
							value: /* @__PURE__ */ m(function() {
								return a(this.tail, this).value;
							}, "pop")
						},
						{
							key: "popNode",
							value: /* @__PURE__ */ m(function() {
								return a(this.tail, this);
							}, "popNode")
						},
						{
							key: "shift",
							value: /* @__PURE__ */ m(function() {
								return a(this.head, this).value;
							}, "shift")
						},
						{
							key: "shiftNode",
							value: /* @__PURE__ */ m(function() {
								return a(this.head, this);
							}, "shiftNode")
						},
						{
							key: "get_object_at",
							value: /* @__PURE__ */ m(function(i) {
								if (i <= this.length()) {
									for (var e = 1, h = this.head; e < i;) h = h.next, e++;
									return h.value;
								}
							}, "get_object_at")
						},
						{
							key: "set_object_at",
							value: /* @__PURE__ */ m(function(i, e) {
								if (i <= this.length()) {
									for (var h = 1, f = this.head; h < i;) f = f.next, h++;
									f.value = e;
								}
							}, "set_object_at")
						}
					]), t;
				}();
			},
			function(D, C, T) {
				function g(o, n$1, r) {
					this.x = null, this.y = null, o == null && n$1 == null && r == null ? (this.x = 0, this.y = 0) : typeof o == "number" && typeof n$1 == "number" && r == null ? (this.x = o, this.y = n$1) : o.constructor.name == "Point" && n$1 == null && r == null && (r = o, this.x = r.x, this.y = r.y);
				}
				m(g, "Point"), g.prototype.getX = function() {
					return this.x;
				}, g.prototype.getY = function() {
					return this.y;
				}, g.prototype.getLocation = function() {
					return new g(this.x, this.y);
				}, g.prototype.setLocation = function(o, n$1, r) {
					o.constructor.name == "Point" && n$1 == null && r == null ? (r = o, this.setLocation(r.x, r.y)) : typeof o == "number" && typeof n$1 == "number" && r == null && (parseInt(o) == o && parseInt(n$1) == n$1 ? this.move(o, n$1) : (this.x = /* @__PURE__ */ Math.floor(o + .5), this.y = /* @__PURE__ */ Math.floor(n$1 + .5)));
				}, g.prototype.move = function(o, n$1) {
					this.x = o, this.y = n$1;
				}, g.prototype.translate = function(o, n$1) {
					this.x += o, this.y += n$1;
				}, g.prototype.equals = function(o) {
					if (o.constructor.name == "Point") {
						var n$1 = o;
						return this.x == n$1.x && this.y == n$1.y;
					}
					return this == o;
				}, g.prototype.toString = function() {
					return new g().constructor.name + "[x=" + this.x + ",y=" + this.y + "]";
				}, D.exports = g;
			},
			function(D, C, T) {
				function g(o, n$1, r, a) {
					this.x = 0, this.y = 0, this.width = 0, this.height = 0, o != null && n$1 != null && r != null && a != null && (this.x = o, this.y = n$1, this.width = r, this.height = a);
				}
				m(g, "RectangleD"), g.prototype.getX = function() {
					return this.x;
				}, g.prototype.setX = function(o) {
					this.x = o;
				}, g.prototype.getY = function() {
					return this.y;
				}, g.prototype.setY = function(o) {
					this.y = o;
				}, g.prototype.getWidth = function() {
					return this.width;
				}, g.prototype.setWidth = function(o) {
					this.width = o;
				}, g.prototype.getHeight = function() {
					return this.height;
				}, g.prototype.setHeight = function(o) {
					this.height = o;
				}, g.prototype.getRight = function() {
					return this.x + this.width;
				}, g.prototype.getBottom = function() {
					return this.y + this.height;
				}, g.prototype.intersects = function(o) {
					return !(this.getRight() < o.x || this.getBottom() < o.y || o.getRight() < this.x || o.getBottom() < this.y);
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
				}, D.exports = g;
			},
			function(D, C, T) {
				var g = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n$1) {
					return typeof n$1;
				} : function(n$1) {
					return n$1 && typeof Symbol == "function" && n$1.constructor === Symbol && n$1 !== Symbol.prototype ? "symbol" : typeof n$1;
				};
				function o() {}
				m(o, "UniqueIDGeneretor"), o.lastID = 0, o.createID = function(n$1) {
					return o.isPrimitive(n$1) ? n$1 : (n$1.uniqueID ?? (n$1.uniqueID = /* @__PURE__ */ o.getString(), o.lastID++), n$1.uniqueID);
				}, o.getString = function(n$1) {
					return n$1 ??= o.lastID, "Object#" + n$1;
				}, o.isPrimitive = function(n$1) {
					var r = typeof n$1 > "u" ? "undefined" : g(n$1);
					return n$1 == null || r != "object" && r != "function";
				}, D.exports = o;
			},
			function(D, C, T) {
				function g(h) {
					if (Array.isArray(h)) {
						for (var f = 0, l = /* @__PURE__ */ Array(h.length); f < h.length; f++) l[f] = h[f];
						return l;
					} else return Array.from(h);
				}
				m(g, "_toConsumableArray");
				var o = /* @__PURE__ */ T(0), n$1 = /* @__PURE__ */ T(7), r = /* @__PURE__ */ T(3), a = /* @__PURE__ */ T(1), c$1 = /* @__PURE__ */ T(6), t = /* @__PURE__ */ T(5), u = /* @__PURE__ */ T(17), i = /* @__PURE__ */ T(29);
				function e(h) {
					i.call(this), this.layoutQuality = o.QUALITY, this.createBendsAsNeeded = o.DEFAULT_CREATE_BENDS_AS_NEEDED, this.incremental = o.DEFAULT_INCREMENTAL, this.animationOnLayout = o.DEFAULT_ANIMATION_ON_LAYOUT, this.animationDuringLayout = o.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = o.DEFAULT_ANIMATION_PERIOD, this.uniformLeafNodeSizes = o.DEFAULT_UNIFORM_LEAF_NODE_SIZES, this.edgeToDummyNodes = /* @__PURE__ */ new Map(), this.graphManager = new n$1(this), this.isLayoutFinished = !1, this.isSubLayout = !1, this.isRemoteUse = !1, h != null && (this.isRemoteUse = h);
				}
				m(e, "Layout"), e.RANDOM_SEED = 1, e.prototype = /* @__PURE__ */ Object.create(i.prototype), e.prototype.getGraphManager = function() {
					return this.graphManager;
				}, e.prototype.getAllNodes = function() {
					return this.graphManager.getAllNodes();
				}, e.prototype.getAllEdges = function() {
					return this.graphManager.getAllEdges();
				}, e.prototype.getAllNodesToApplyGravitation = function() {
					return this.graphManager.getAllNodesToApplyGravitation();
				}, e.prototype.newGraphManager = function() {
					var h = new n$1(this);
					return this.graphManager = h, h;
				}, e.prototype.newGraph = function(h) {
					return new c$1(null, this.graphManager, h);
				}, e.prototype.newNode = function(h) {
					return new r(this.graphManager, h);
				}, e.prototype.newEdge = function(h) {
					return new a(null, null, h);
				}, e.prototype.checkLayoutSuccess = function() {
					return this.graphManager.getRoot() == null || this.graphManager.getRoot().getNodes().length == 0 || this.graphManager.includesInvalidEdge();
				}, e.prototype.runLayout = function() {
					this.isLayoutFinished = !1, this.tilingPreLayout && this.tilingPreLayout(), this.initParameters();
					var h;
					return this.checkLayoutSuccess() ? h = !1 : h = /* @__PURE__ */ this.layout(), o.ANIMATE === "during" ? !1 : (h && (this.isSubLayout || this.doPostLayout()), this.tilingPostLayout && this.tilingPostLayout(), this.isLayoutFinished = !0, h);
				}, e.prototype.doPostLayout = function() {
					this.incremental || this.transform(), this.update();
				}, e.prototype.update2 = function() {
					if (this.createBendsAsNeeded && (this.createBendpointsFromDummyNodes(), this.graphManager.resetAllEdges()), !this.isRemoteUse) {
						for (var f = /* @__PURE__ */ this.graphManager.getAllEdges(), l = 0; l < f.length; l++) f[l];
						for (var y = /* @__PURE__ */ this.graphManager.getRoot().getNodes(), l = 0; l < y.length; l++) y[l];
						this.update(/* @__PURE__ */ this.graphManager.getRoot());
					}
				}, e.prototype.update = function(h) {
					if (h == null) this.update2();
					else if (h instanceof r) {
						var f = h;
						if (f.getChild() != null) for (var l = /* @__PURE__ */ f.getChild().getNodes(), A = 0; A < l.length; A++) update(l[A]);
						if (f.vGraphObject != null) f.vGraphObject.update(f);
					} else if (h instanceof a) {
						var v = h;
						if (v.vGraphObject != null) v.vGraphObject.update(v);
					} else if (h instanceof c$1) {
						var S = h;
						if (S.vGraphObject != null) S.vGraphObject.update(S);
					}
				}, e.prototype.initParameters = function() {
					this.isSubLayout || (this.layoutQuality = o.QUALITY, this.animationDuringLayout = o.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = o.DEFAULT_ANIMATION_PERIOD, this.animationOnLayout = o.DEFAULT_ANIMATION_ON_LAYOUT, this.incremental = o.DEFAULT_INCREMENTAL, this.createBendsAsNeeded = o.DEFAULT_CREATE_BENDS_AS_NEEDED, this.uniformLeafNodeSizes = o.DEFAULT_UNIFORM_LEAF_NODE_SIZES), this.animationDuringLayout && (this.animationOnLayout = !1);
				}, e.prototype.transform = function(h) {
					if (h == null) this.transform(new t(0, 0));
					else {
						var f = new u(), l = /* @__PURE__ */ this.graphManager.getRoot().updateLeftTop();
						if (l != null) {
							f.setWorldOrgX(h.x), f.setWorldOrgY(h.y), f.setDeviceOrgX(l.x), f.setDeviceOrgY(l.y);
							for (var A = /* @__PURE__ */ this.getAllNodes(), y, v = 0; v < A.length; v++) y = A[v], y.transform(f);
						}
					}
				}, e.prototype.positionNodesRandomly = function(h) {
					if (h == null) this.positionNodesRandomly(/* @__PURE__ */ this.getGraphManager().getRoot()), this.getGraphManager().getRoot().updateBounds(!0);
					else for (var f, l, A = /* @__PURE__ */ h.getNodes(), y = 0; y < A.length; y++) f = A[y], l = /* @__PURE__ */ f.getChild(), l == null || l.getNodes().length == 0 ? f.scatter() : (this.positionNodesRandomly(l), f.updateBounds());
				}, e.prototype.getFlatForest = function() {
					for (var h = [], f = !0, l = /* @__PURE__ */ this.graphManager.getRoot().getNodes(), A = !0, y = 0; y < l.length; y++) l[y].getChild() != null && (A = !1);
					if (!A) return h;
					var v = /* @__PURE__ */ new Set(), N = [], S = /* @__PURE__ */ new Map(), M = [];
					for (M = /* @__PURE__ */ M.concat(l); M.length > 0 && f;) {
						for (N.push(M[0]); N.length > 0 && f;) {
							var b = N[0];
							N.splice(0, 1), v.add(b);
							for (var $ = /* @__PURE__ */ b.getEdges(), y = 0; y < $.length; y++) {
								var X = /* @__PURE__ */ $[y].getOtherEnd(b);
								if (S.get(b) != X) if (!v.has(X)) N.push(X), S.set(X, b);
								else {
									f = !1;
									break;
								}
							}
						}
						if (!f) h = [];
						else {
							var et = /* @__PURE__ */ [].concat(/* @__PURE__ */ g(v));
							h.push(et);
							for (var y = 0; y < et.length; y++) {
								var R = et[y], J = /* @__PURE__ */ M.indexOf(R);
								J > -1 && M.splice(J, 1);
							}
							v = /* @__PURE__ */ new Set(), S = /* @__PURE__ */ new Map();
						}
					}
					return h;
				}, e.prototype.createDummyNodesForBendpoints = function(h) {
					for (var f = [], l = h.source, A = /* @__PURE__ */ this.graphManager.calcLowestCommonAncestor(h.source, h.target), y = 0; y < h.bendpoints.length; y++) {
						var v = /* @__PURE__ */ this.newNode(null);
						v.setRect(new Point(0, 0), new Dimension(1, 1)), A.add(v);
						var N = /* @__PURE__ */ this.newEdge(null);
						this.graphManager.add(N, l, v), f.add(v), l = v;
					}
					var N = /* @__PURE__ */ this.newEdge(null);
					return this.graphManager.add(N, l, h.target), this.edgeToDummyNodes.set(h, f), h.isInterGraph() ? this.graphManager.remove(h) : A.remove(h), f;
				}, e.prototype.createBendpointsFromDummyNodes = function() {
					var h = [];
					h = /* @__PURE__ */ h.concat(/* @__PURE__ */ this.graphManager.getAllEdges()), h = /* @__PURE__ */ [].concat(/* @__PURE__ */ g(/* @__PURE__ */ this.edgeToDummyNodes.keys())).concat(h);
					for (var f = 0; f < h.length; f++) {
						var l = h[f];
						if (l.bendpoints.length > 0) {
							for (var A = /* @__PURE__ */ this.edgeToDummyNodes.get(l), y = 0; y < A.length; y++) {
								var v = A[y], N = new t(v.getCenterX(), v.getCenterY()), S = /* @__PURE__ */ l.bendpoints.get(y);
								S.x = N.x, S.y = N.y, v.getOwner().remove(v);
							}
							this.graphManager.add(l, l.source, l.target);
						}
					}
				}, e.transform = function(h, f, l, A) {
					if (l != null && A != null) {
						var y = f;
						if (h <= 50) {
							var v = f / l;
							y -= (f - v) / 50 * (50 - h);
						} else {
							var N = f * A;
							y += (N - f) / 50 * (h - 50);
						}
						return y;
					} else {
						var S, M;
						return h <= 50 ? (S = 9 * f / 500, M = f / 10) : (S = 9 * f / 50, M = -8 * f), S * h + M;
					}
				}, e.findCenterOfTree = function(h) {
					var f = [];
					f = /* @__PURE__ */ f.concat(h);
					var l = [], A = /* @__PURE__ */ new Map(), y = !1, v = null;
					(f.length == 1 || f.length == 2) && (y = !0, v = f[0]);
					for (var N = 0; N < f.length; N++) {
						var S = f[N], M = S.getNeighborsList().size;
						A.set(S, S.getNeighborsList().size), M == 1 && l.push(S);
					}
					var b = [];
					for (b = /* @__PURE__ */ b.concat(l); !y;) {
						var $ = [];
						$ = /* @__PURE__ */ $.concat(b), b = [];
						for (var N = 0; N < f.length; N++) {
							var S = f[N], X = /* @__PURE__ */ f.indexOf(S);
							X >= 0 && f.splice(X, 1);
							S.getNeighborsList().forEach(function(s) {
								if (l.indexOf(s) < 0) {
									var p$1 = A.get(s) - 1;
									p$1 == 1 && b.push(s), A.set(s, p$1);
								}
							});
						}
						l = /* @__PURE__ */ l.concat(b), (f.length == 1 || f.length == 2) && (y = !0, v = f[0]);
					}
					return v;
				}, e.prototype.setGraphManager = function(h) {
					this.graphManager = h;
				}, D.exports = e;
			},
			function(D, C, T) {
				function g() {}
				m(g, "RandomSeed"), g.seed = 1, g.x = 0, g.nextDouble = function() {
					return g.x = Math.sin(g.seed++) * 1e4, g.x - Math.floor(g.x);
				}, D.exports = g;
			},
			function(D, C, T) {
				var g = /* @__PURE__ */ T(5);
				function o(n$1, r) {
					this.lworldOrgX = 0, this.lworldOrgY = 0, this.ldeviceOrgX = 0, this.ldeviceOrgY = 0, this.lworldExtX = 1, this.lworldExtY = 1, this.ldeviceExtX = 1, this.ldeviceExtY = 1;
				}
				m(o, "Transform"), o.prototype.getWorldOrgX = function() {
					return this.lworldOrgX;
				}, o.prototype.setWorldOrgX = function(n$1) {
					this.lworldOrgX = n$1;
				}, o.prototype.getWorldOrgY = function() {
					return this.lworldOrgY;
				}, o.prototype.setWorldOrgY = function(n$1) {
					this.lworldOrgY = n$1;
				}, o.prototype.getWorldExtX = function() {
					return this.lworldExtX;
				}, o.prototype.setWorldExtX = function(n$1) {
					this.lworldExtX = n$1;
				}, o.prototype.getWorldExtY = function() {
					return this.lworldExtY;
				}, o.prototype.setWorldExtY = function(n$1) {
					this.lworldExtY = n$1;
				}, o.prototype.getDeviceOrgX = function() {
					return this.ldeviceOrgX;
				}, o.prototype.setDeviceOrgX = function(n$1) {
					this.ldeviceOrgX = n$1;
				}, o.prototype.getDeviceOrgY = function() {
					return this.ldeviceOrgY;
				}, o.prototype.setDeviceOrgY = function(n$1) {
					this.ldeviceOrgY = n$1;
				}, o.prototype.getDeviceExtX = function() {
					return this.ldeviceExtX;
				}, o.prototype.setDeviceExtX = function(n$1) {
					this.ldeviceExtX = n$1;
				}, o.prototype.getDeviceExtY = function() {
					return this.ldeviceExtY;
				}, o.prototype.setDeviceExtY = function(n$1) {
					this.ldeviceExtY = n$1;
				}, o.prototype.transformX = function(n$1) {
					var r = 0, a = this.lworldExtX;
					return a != 0 && (r = this.ldeviceOrgX + (n$1 - this.lworldOrgX) * this.ldeviceExtX / a), r;
				}, o.prototype.transformY = function(n$1) {
					var r = 0, a = this.lworldExtY;
					return a != 0 && (r = this.ldeviceOrgY + (n$1 - this.lworldOrgY) * this.ldeviceExtY / a), r;
				}, o.prototype.inverseTransformX = function(n$1) {
					var r = 0, a = this.ldeviceExtX;
					return a != 0 && (r = this.lworldOrgX + (n$1 - this.ldeviceOrgX) * this.lworldExtX / a), r;
				}, o.prototype.inverseTransformY = function(n$1) {
					var r = 0, a = this.ldeviceExtY;
					return a != 0 && (r = this.lworldOrgY + (n$1 - this.ldeviceOrgY) * this.lworldExtY / a), r;
				}, o.prototype.inverseTransformPoint = function(n$1) {
					return new g(this.inverseTransformX(n$1.x), this.inverseTransformY(n$1.y));
				}, D.exports = o;
			},
			function(D, C, T) {
				function g(i) {
					if (Array.isArray(i)) {
						for (var e = 0, h = /* @__PURE__ */ Array(i.length); e < i.length; e++) h[e] = i[e];
						return h;
					} else return Array.from(i);
				}
				m(g, "_toConsumableArray");
				var o = /* @__PURE__ */ T(15), n$1 = /* @__PURE__ */ T(4), r = /* @__PURE__ */ T(0), a = /* @__PURE__ */ T(8), c$1 = /* @__PURE__ */ T(9);
				function t() {
					o.call(this), this.useSmartIdealEdgeLengthCalculation = n$1.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.gravityConstant = n$1.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = n$1.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = n$1.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = n$1.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.displacementThresholdPerNode = 3 * n$1.DEFAULT_EDGE_LENGTH / 100, this.coolingFactor = n$1.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.initialCoolingFactor = n$1.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.totalDisplacement = 0, this.oldTotalDisplacement = 0, this.maxIterations = n$1.MAX_ITERATIONS;
				}
				m(t, "FDLayout"), t.prototype = /* @__PURE__ */ Object.create(o.prototype);
				for (var u in o) t[u] = o[u];
				t.prototype.initParameters = function() {
					o.prototype.initParameters.call(this, arguments), this.totalIterations = 0, this.notAnimatedIterations = 0, this.useFRGridVariant = n$1.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION, this.grid = [];
				}, t.prototype.calcIdealEdgeLengths = function() {
					for (var i, e, h, f, l, A, y, v = /* @__PURE__ */ this.getGraphManager().getAllEdges(), N = 0; N < v.length; N++) i = v[N], e = i.idealLength, i.isInterGraph && (f = /* @__PURE__ */ i.getSource(), l = /* @__PURE__ */ i.getTarget(), A = /* @__PURE__ */ i.getSourceInLca().getEstimatedSize(), y = /* @__PURE__ */ i.getTargetInLca().getEstimatedSize(), this.useSmartIdealEdgeLengthCalculation && (i.idealLength += A + y - 2 * r.SIMPLE_NODE_SIZE), h = /* @__PURE__ */ i.getLca().getInclusionTreeDepth(), i.idealLength += e * n$1.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR * (f.getInclusionTreeDepth() + l.getInclusionTreeDepth() - 2 * h));
				}, t.prototype.initSpringEmbedder = function() {
					var i = this.getAllNodes().length;
					this.incremental ? (i > n$1.ADAPTATION_LOWER_NODE_LIMIT && (this.coolingFactor = /* @__PURE__ */ Math.max(this.coolingFactor * n$1.COOLING_ADAPTATION_FACTOR, this.coolingFactor - (i - n$1.ADAPTATION_LOWER_NODE_LIMIT) / (n$1.ADAPTATION_UPPER_NODE_LIMIT - n$1.ADAPTATION_LOWER_NODE_LIMIT) * this.coolingFactor * (1 - n$1.COOLING_ADAPTATION_FACTOR))), this.maxNodeDisplacement = n$1.MAX_NODE_DISPLACEMENT_INCREMENTAL) : (i > n$1.ADAPTATION_LOWER_NODE_LIMIT ? this.coolingFactor = /* @__PURE__ */ Math.max(n$1.COOLING_ADAPTATION_FACTOR, 1 - (i - n$1.ADAPTATION_LOWER_NODE_LIMIT) / (n$1.ADAPTATION_UPPER_NODE_LIMIT - n$1.ADAPTATION_LOWER_NODE_LIMIT) * (1 - n$1.COOLING_ADAPTATION_FACTOR)) : this.coolingFactor = 1, this.initialCoolingFactor = this.coolingFactor, this.maxNodeDisplacement = n$1.MAX_NODE_DISPLACEMENT), this.maxIterations = /* @__PURE__ */ Math.max(this.getAllNodes().length * 5, this.maxIterations), this.displacementThresholdPerNode = 3 * n$1.DEFAULT_EDGE_LENGTH / 100, this.totalDisplacementThreshold = this.displacementThresholdPerNode * this.getAllNodes().length, this.repulsionRange = /* @__PURE__ */ this.calcRepulsionRange();
				}, t.prototype.calcSpringForces = function() {
					for (var i = /* @__PURE__ */ this.getAllEdges(), e, h = 0; h < i.length; h++) e = i[h], this.calcSpringForce(e, e.idealLength);
				}, t.prototype.calcRepulsionForces = function() {
					var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, h, f, l, A, y = /* @__PURE__ */ this.getAllNodes(), v;
					if (this.useFRGridVariant) for (this.totalIterations % n$1.GRID_CALCULATION_CHECK_PERIOD == 1 && i && this.updateGrid(), v = /* @__PURE__ */ new Set(), h = 0; h < y.length; h++) l = y[h], this.calculateRepulsionForceOfANode(l, v, i, e), v.add(l);
					else for (h = 0; h < y.length; h++) for (l = y[h], f = h + 1; f < y.length; f++) A = y[f], l.getOwner() == A.getOwner() && this.calcRepulsionForce(l, A);
				}, t.prototype.calcGravitationalForces = function() {
					for (var i, e = /* @__PURE__ */ this.getAllNodesToApplyGravitation(), h = 0; h < e.length; h++) i = e[h], this.calcGravitationalForce(i);
				}, t.prototype.moveNodes = function() {
					for (var i = /* @__PURE__ */ this.getAllNodes(), e, h = 0; h < i.length; h++) e = i[h], e.move();
				}, t.prototype.calcSpringForce = function(i, e) {
					var h = /* @__PURE__ */ i.getSource(), f = /* @__PURE__ */ i.getTarget(), l, A, y, v;
					if (this.uniformLeafNodeSizes && h.getChild() == null && f.getChild() == null) i.updateLengthSimple();
					else if (i.updateLength(), i.isOverlapingSourceAndTarget) return;
					l = /* @__PURE__ */ i.getLength(), l != 0 && (A = i.edgeElasticity * (l - e), y = A * (i.lengthX / l), v = A * (i.lengthY / l), h.springForceX += y, h.springForceY += v, f.springForceX -= y, f.springForceY -= v);
				}, t.prototype.calcRepulsionForce = function(i, e) {
					var h = /* @__PURE__ */ i.getRect(), f = /* @__PURE__ */ e.getRect(), l = new Array(2), A = new Array(4), y, v, N, S, M, b, $;
					if (h.intersects(f)) {
						a.calcSeparationAmount(h, f, l, n$1.DEFAULT_EDGE_LENGTH / 2), b = 2 * l[0], $ = 2 * l[1];
						var X = i.noOfChildren * e.noOfChildren / (i.noOfChildren + e.noOfChildren);
						i.repulsionForceX -= X * b, i.repulsionForceY -= X * $, e.repulsionForceX += X * b, e.repulsionForceY += X * $;
					} else this.uniformLeafNodeSizes && i.getChild() == null && e.getChild() == null ? (y = f.getCenterX() - h.getCenterX(), v = f.getCenterY() - h.getCenterY()) : (a.getIntersection(h, f, A), y = A[2] - A[0], v = A[3] - A[1]), Math.abs(y) < n$1.MIN_REPULSION_DIST && (y = c$1.sign(y) * n$1.MIN_REPULSION_DIST), Math.abs(v) < n$1.MIN_REPULSION_DIST && (v = c$1.sign(v) * n$1.MIN_REPULSION_DIST), N = y * y + v * v, S = /* @__PURE__ */ Math.sqrt(N), M = (i.nodeRepulsion / 2 + e.nodeRepulsion / 2) * i.noOfChildren * e.noOfChildren / N, b = M * y / S, $ = M * v / S, i.repulsionForceX -= b, i.repulsionForceY -= $, e.repulsionForceX += b, e.repulsionForceY += $;
				}, t.prototype.calcGravitationalForce = function(i) {
					var e = /* @__PURE__ */ i.getOwner(), h = (e.getRight() + e.getLeft()) / 2, f = (e.getTop() + e.getBottom()) / 2, l = i.getCenterX() - h, A = i.getCenterY() - f, y = Math.abs(l) + i.getWidth() / 2, v = Math.abs(A) + i.getHeight() / 2, N;
					i.getOwner() == this.graphManager.getRoot() ? (N = e.getEstimatedSize() * this.gravityRangeFactor, (y > N || v > N) && (i.gravitationForceX = -this.gravityConstant * l, i.gravitationForceY = -this.gravityConstant * A)) : (N = e.getEstimatedSize() * this.compoundGravityRangeFactor, (y > N || v > N) && (i.gravitationForceX = -this.gravityConstant * l * this.compoundGravityConstant, i.gravitationForceY = -this.gravityConstant * A * this.compoundGravityConstant));
				}, t.prototype.isConverged = function() {
					var i, e = !1;
					return this.totalIterations > this.maxIterations / 3 && (e = Math.abs(this.totalDisplacement - this.oldTotalDisplacement) < 2), i = this.totalDisplacement < this.totalDisplacementThreshold, this.oldTotalDisplacement = this.totalDisplacement, i || e;
				}, t.prototype.animate = function() {
					this.animationDuringLayout && !this.isSubLayout && (this.notAnimatedIterations == this.animationPeriod ? (this.update(), this.notAnimatedIterations = 0) : this.notAnimatedIterations++);
				}, t.prototype.calcNoOfChildrenForAllNodes = function() {
					for (var i, e = /* @__PURE__ */ this.graphManager.getAllNodes(), h = 0; h < e.length; h++) i = e[h], i.noOfChildren = /* @__PURE__ */ i.getNoOfChildren();
				}, t.prototype.calcGrid = function(i) {
					var e = 0, h = 0;
					e = /* @__PURE__ */ parseInt(/* @__PURE__ */ Math.ceil((i.getRight() - i.getLeft()) / this.repulsionRange)), h = /* @__PURE__ */ parseInt(/* @__PURE__ */ Math.ceil((i.getBottom() - i.getTop()) / this.repulsionRange));
					for (var f = new Array(e), l = 0; l < e; l++) f[l] = new Array(h);
					for (var l = 0; l < e; l++) for (var A = 0; A < h; A++) f[l][A] = new Array();
					return f;
				}, t.prototype.addNodeToGrid = function(i, e, h) {
					var f = 0, l = 0, A = 0, y = 0;
					f = /* @__PURE__ */ parseInt(/* @__PURE__ */ Math.floor((i.getRect().x - e) / this.repulsionRange)), l = /* @__PURE__ */ parseInt(/* @__PURE__ */ Math.floor((i.getRect().width + i.getRect().x - e) / this.repulsionRange)), A = /* @__PURE__ */ parseInt(/* @__PURE__ */ Math.floor((i.getRect().y - h) / this.repulsionRange)), y = /* @__PURE__ */ parseInt(/* @__PURE__ */ Math.floor((i.getRect().height + i.getRect().y - h) / this.repulsionRange));
					for (var v = f; v <= l; v++) for (var N = A; N <= y; N++) this.grid[v][N].push(i), i.setGridCoordinates(f, l, A, y);
				}, t.prototype.updateGrid = function() {
					var i, e, h = /* @__PURE__ */ this.getAllNodes();
					for (this.grid = /* @__PURE__ */ this.calcGrid(/* @__PURE__ */ this.graphManager.getRoot()), i = 0; i < h.length; i++) e = h[i], this.addNodeToGrid(e, /* @__PURE__ */ this.graphManager.getRoot().getLeft(), /* @__PURE__ */ this.graphManager.getRoot().getTop());
				}, t.prototype.calculateRepulsionForceOfANode = function(i, e, h, f) {
					if (this.totalIterations % n$1.GRID_CALCULATION_CHECK_PERIOD == 1 && h || f) {
						var l = /* @__PURE__ */ new Set();
						i.surrounding = new Array();
						for (var A, y = this.grid, v = i.startX - 1; v < i.finishX + 2; v++) for (var N = i.startY - 1; N < i.finishY + 2; N++) if (!(v < 0 || N < 0 || v >= y.length || N >= y[0].length)) {
							for (var S = 0; S < y[v][N].length; S++) if (A = y[v][N][S], !(i.getOwner() != A.getOwner() || i == A) && !e.has(A) && !l.has(A)) {
								var M = Math.abs(i.getCenterX() - A.getCenterX()) - (i.getWidth() / 2 + A.getWidth() / 2), b = Math.abs(i.getCenterY() - A.getCenterY()) - (i.getHeight() / 2 + A.getHeight() / 2);
								M <= this.repulsionRange && b <= this.repulsionRange && l.add(A);
							}
						}
						i.surrounding = /* @__PURE__ */ [].concat(/* @__PURE__ */ g(l));
					}
					for (v = 0; v < i.surrounding.length; v++) this.calcRepulsionForce(i, i.surrounding[v]);
				}, t.prototype.calcRepulsionRange = function() {
					return 0;
				}, D.exports = t;
			},
			function(D, C, T) {
				var g = /* @__PURE__ */ T(1), o = /* @__PURE__ */ T(4);
				function n$1(a, c$1, t) {
					g.call(this, a, c$1, t), this.idealLength = o.DEFAULT_EDGE_LENGTH, this.edgeElasticity = o.DEFAULT_SPRING_STRENGTH;
				}
				m(n$1, "FDLayoutEdge"), n$1.prototype = /* @__PURE__ */ Object.create(g.prototype);
				for (var r in g) n$1[r] = g[r];
				D.exports = n$1;
			},
			function(D, C, T) {
				var g = /* @__PURE__ */ T(3), o = /* @__PURE__ */ T(4);
				function n$1(a, c$1, t, u) {
					g.call(this, a, c$1, t, u), this.nodeRepulsion = o.DEFAULT_REPULSION_STRENGTH, this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0, this.startX = 0, this.finishX = 0, this.startY = 0, this.finishY = 0, this.surrounding = [];
				}
				m(n$1, "FDLayoutNode"), n$1.prototype = /* @__PURE__ */ Object.create(g.prototype);
				for (var r in g) n$1[r] = g[r];
				n$1.prototype.setGridCoordinates = function(a, c$1, t, u) {
					this.startX = a, this.finishX = c$1, this.startY = t, this.finishY = u;
				}, D.exports = n$1;
			},
			function(D, C, T) {
				function g(o, n$1) {
					this.width = 0, this.height = 0, o !== null && n$1 !== null && (this.height = n$1, this.width = o);
				}
				m(g, "DimensionD"), g.prototype.getWidth = function() {
					return this.width;
				}, g.prototype.setWidth = function(o) {
					this.width = o;
				}, g.prototype.getHeight = function() {
					return this.height;
				}, g.prototype.setHeight = function(o) {
					this.height = o;
				}, D.exports = g;
			},
			function(D, C, T) {
				var g = /* @__PURE__ */ T(14);
				function o() {
					this.map = {}, this.keys = [];
				}
				m(o, "HashMap"), o.prototype.put = function(n$1, r) {
					var a = /* @__PURE__ */ g.createID(n$1);
					this.contains(a) || (this.map[a] = r, this.keys.push(n$1));
				}, o.prototype.contains = function(n$1) {
					g.createID(n$1);
					return this.map[n$1] != null;
				}, o.prototype.get = function(n$1) {
					var r = /* @__PURE__ */ g.createID(n$1);
					return this.map[r];
				}, o.prototype.keySet = function() {
					return this.keys;
				}, D.exports = o;
			},
			function(D, C, T) {
				var g = /* @__PURE__ */ T(14);
				function o() {
					this.set = {};
				}
				m(o, "HashSet"), o.prototype.add = function(n$1) {
					var r = /* @__PURE__ */ g.createID(n$1);
					this.contains(r) || (this.set[r] = n$1);
				}, o.prototype.remove = function(n$1) {
					delete this.set[g.createID(n$1)];
				}, o.prototype.clear = function() {
					this.set = {};
				}, o.prototype.contains = function(n$1) {
					return this.set[g.createID(n$1)] == n$1;
				}, o.prototype.isEmpty = function() {
					return this.size() === 0;
				}, o.prototype.size = function() {
					return Object.keys(this.set).length;
				}, o.prototype.addAllTo = function(n$1) {
					for (var r = /* @__PURE__ */ Object.keys(this.set), a = r.length, c$1 = 0; c$1 < a; c$1++) n$1.push(this.set[r[c$1]]);
				}, o.prototype.size = function() {
					return Object.keys(this.set).length;
				}, o.prototype.addAll = function(n$1) {
					for (var r = n$1.length, a = 0; a < r; a++) {
						var c$1 = n$1[a];
						this.add(c$1);
					}
				}, D.exports = o;
			},
			function(D, C, T) {
				function g() {}
				m(g, "Matrix"), g.multMat = function(o, n$1) {
					for (var r = [], a = 0; a < o.length; a++) {
						r[a] = [];
						for (var c$1 = 0; c$1 < n$1[0].length; c$1++) {
							r[a][c$1] = 0;
							for (var t = 0; t < o[0].length; t++) r[a][c$1] += o[a][t] * n$1[t][c$1];
						}
					}
					return r;
				}, g.transpose = function(o) {
					for (var n$1 = [], r = 0; r < o[0].length; r++) {
						n$1[r] = [];
						for (var a = 0; a < o.length; a++) n$1[r][a] = o[a][r];
					}
					return n$1;
				}, g.multCons = function(o, n$1) {
					for (var r = [], a = 0; a < o.length; a++) r[a] = o[a] * n$1;
					return r;
				}, g.minusOp = function(o, n$1) {
					for (var r = [], a = 0; a < o.length; a++) r[a] = o[a] - n$1[a];
					return r;
				}, g.dotProduct = function(o, n$1) {
					for (var r = 0, a = 0; a < o.length; a++) r += o[a] * n$1[a];
					return r;
				}, g.mag = function(o) {
					return Math.sqrt(/* @__PURE__ */ this.dotProduct(o, o));
				}, g.normalize = function(o) {
					for (var n$1 = [], r = /* @__PURE__ */ this.mag(o), a = 0; a < o.length; a++) n$1[a] = o[a] / r;
					return n$1;
				}, g.multGamma = function(o) {
					for (var n$1 = [], r = 0, a = 0; a < o.length; a++) r += o[a];
					r *= -1 / o.length;
					for (var c$1 = 0; c$1 < o.length; c$1++) n$1[c$1] = r + o[c$1];
					return n$1;
				}, g.multL = function(o, n$1, r) {
					for (var a = [], c$1 = [], t = [], u = 0; u < n$1[0].length; u++) {
						for (var i = 0, e = 0; e < n$1.length; e++) i += -.5 * n$1[e][u] * o[e];
						c$1[u] = i;
					}
					for (var h = 0; h < r.length; h++) {
						for (var f = 0, l = 0; l < r.length; l++) f += r[h][l] * c$1[l];
						t[h] = f;
					}
					for (var A = 0; A < n$1.length; A++) {
						for (var y = 0, v = 0; v < n$1[0].length; v++) y += n$1[A][v] * t[v];
						a[A] = y;
					}
					return a;
				}, D.exports = g;
			},
			function(D, C, T) {
				var g = /* @__PURE__ */ function() {
					function a(c$1, t) {
						for (var u = 0; u < t.length; u++) {
							var i = t[u];
							i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(c$1, i.key, i);
						}
					}
					return m(a, "defineProperties"), function(c$1, t, u) {
						return t && a(c$1.prototype, t), u && a(c$1, u), c$1;
					};
				}();
				function o(a, c$1) {
					if (!(a instanceof c$1)) throw new TypeError("Cannot call a class as a function");
				}
				m(o, "_classCallCheck");
				var n$1 = /* @__PURE__ */ T(11);
				D.exports = /* @__PURE__ */ function() {
					function a(c$1, t) {
						o(this, a), (t !== null || t !== void 0) && (this.compareFunction = this._defaultCompareFunction);
						var u = void 0;
						c$1 instanceof n$1 ? u = /* @__PURE__ */ c$1.size() : u = c$1.length, this._quicksort(c$1, 0, u - 1);
					}
					return m(a, "Quicksort"), g(a, [
						{
							key: "_quicksort",
							value: /* @__PURE__ */ m(function(t, u, i) {
								if (u < i) {
									var e = /* @__PURE__ */ this._partition(t, u, i);
									this._quicksort(t, u, e), this._quicksort(t, e + 1, i);
								}
							}, "_quicksort")
						},
						{
							key: "_partition",
							value: /* @__PURE__ */ m(function(t, u, i) {
								for (var e = /* @__PURE__ */ this._get(t, u), h = u, f = i;;) {
									for (; this.compareFunction(e, /* @__PURE__ */ this._get(t, f));) f--;
									for (; this.compareFunction(/* @__PURE__ */ this._get(t, h), e);) h++;
									if (h < f) this._swap(t, h, f), h++, f--;
									else return f;
								}
							}, "_partition")
						},
						{
							key: "_get",
							value: /* @__PURE__ */ m(function(t, u) {
								return t instanceof n$1 ? t.get_object_at(u) : t[u];
							}, "_get")
						},
						{
							key: "_set",
							value: /* @__PURE__ */ m(function(t, u, i) {
								t instanceof n$1 ? t.set_object_at(u, i) : t[u] = i;
							}, "_set")
						},
						{
							key: "_swap",
							value: /* @__PURE__ */ m(function(t, u, i) {
								var e = /* @__PURE__ */ this._get(t, u);
								this._set(t, u, /* @__PURE__ */ this._get(t, i)), this._set(t, i, e);
							}, "_swap")
						},
						{
							key: "_defaultCompareFunction",
							value: /* @__PURE__ */ m(function(t, u) {
								return u > t;
							}, "_defaultCompareFunction")
						}
					]), a;
				}();
			},
			function(D, C, T) {
				function g() {}
				m(g, "SVD"), g.svd = function(o) {
					this.U = null, this.V = null, this.s = null, this.m = 0, this.n = 0, this.m = o.length, this.n = o[0].length;
					var n$1 = /* @__PURE__ */ Math.min(this.m, this.n);
					this.s = /* @__PURE__ */ function(xt) {
						for (var At = []; xt-- > 0;) At.push(0);
						return At;
					}(/* @__PURE__ */ Math.min(this.m + 1, this.n)), this.U = /* @__PURE__ */ function(xt) {
						return m(function $t(It) {
							if (It.length == 0) return 0;
							for (var Xt = [], Bt = 0; Bt < It[0]; Bt++) Xt.push(/* @__PURE__ */ $t(/* @__PURE__ */ It.slice(1)));
							return Xt;
						}, "allocate")(xt);
					}([this.m, n$1]), this.V = /* @__PURE__ */ function(xt) {
						return m(function $t(It) {
							if (It.length == 0) return 0;
							for (var Xt = [], Bt = 0; Bt < It[0]; Bt++) Xt.push(/* @__PURE__ */ $t(/* @__PURE__ */ It.slice(1)));
							return Xt;
						}, "allocate")(xt);
					}([this.n, this.n]);
					for (var r = /* @__PURE__ */ function(xt) {
						for (var At = []; xt-- > 0;) At.push(0);
						return At;
					}(this.n), a = /* @__PURE__ */ function(xt) {
						for (var At = []; xt-- > 0;) At.push(0);
						return At;
					}(this.m), c$1 = !0, t = !0, u = /* @__PURE__ */ Math.min(this.m - 1, this.n), i = /* @__PURE__ */ Math.max(0, /* @__PURE__ */ Math.min(this.n - 2, this.m)), e = 0; e < Math.max(u, i); e++) {
						if (e < u) {
							this.s[e] = 0;
							for (var h = e; h < this.m; h++) this.s[e] = /* @__PURE__ */ g.hypot(this.s[e], o[h][e]);
							if (this.s[e] !== 0) {
								o[e][e] < 0 && (this.s[e] = -this.s[e]);
								for (var f = e; f < this.m; f++) o[f][e] /= this.s[e];
								o[e][e] += 1;
							}
							this.s[e] = -this.s[e];
						}
						for (var l = e + 1; l < this.n; l++) {
							if (function(xt, At) {
								return xt && At;
							}(e < u, this.s[e] !== 0)) {
								for (var A = 0, y = e; y < this.m; y++) A += o[y][e] * o[y][l];
								A = -A / o[e][e];
								for (var v = e; v < this.m; v++) o[v][l] += A * o[v][e];
							}
							r[l] = o[e][l];
						}
						if (function(xt, At) {
							return xt && At;
						}(c$1, e < u)) for (var N = e; N < this.m; N++) this.U[N][e] = o[N][e];
						if (e < i) {
							r[e] = 0;
							for (var S = e + 1; S < this.n; S++) r[e] = /* @__PURE__ */ g.hypot(r[e], r[S]);
							if (r[e] !== 0) {
								r[e + 1] < 0 && (r[e] = -r[e]);
								for (var M = e + 1; M < this.n; M++) r[M] /= r[e];
								r[e + 1] += 1;
							}
							if (r[e] = -r[e], function(xt, At) {
								return xt && At;
							}(e + 1 < this.m, r[e] !== 0)) {
								for (var b = e + 1; b < this.m; b++) a[b] = 0;
								for (var $ = e + 1; $ < this.n; $++) for (var X = e + 1; X < this.m; X++) a[X] += r[$] * o[X][$];
								for (var et = e + 1; et < this.n; et++) for (var R = -r[et] / r[e + 1], J = e + 1; J < this.m; J++) o[J][et] += R * a[J];
							}
							if (t) for (var s = e + 1; s < this.n; s++) this.V[s][e] = r[s];
						}
					}
					var m$1 = /* @__PURE__ */ Math.min(this.n, this.m + 1);
					if (u < this.n && (this.s[u] = o[u][u]), this.m < m$1 && (this.s[m$1 - 1] = 0), i + 1 < m$1 && (r[i] = o[i][m$1 - 1]), r[m$1 - 1] = 0, c$1) {
						for (var p$1 = u; p$1 < n$1; p$1++) {
							for (var E = 0; E < this.m; E++) this.U[E][p$1] = 0;
							this.U[p$1][p$1] = 1;
						}
						for (var d$1 = u - 1; d$1 >= 0; d$1--) if (this.s[d$1] !== 0) {
							for (var O = d$1 + 1; O < n$1; O++) {
								for (var x = 0, G = d$1; G < this.m; G++) x += this.U[G][d$1] * this.U[G][O];
								x = -x / this.U[d$1][d$1];
								for (var F = d$1; F < this.m; F++) this.U[F][O] += x * this.U[F][d$1];
							}
							for (var I = d$1; I < this.m; I++) this.U[I][d$1] = -this.U[I][d$1];
							this.U[d$1][d$1] = 1 + this.U[d$1][d$1];
							for (var Z = 0; Z < d$1 - 1; Z++) this.U[Z][d$1] = 0;
						} else {
							for (var tt = 0; tt < this.m; tt++) this.U[tt][d$1] = 0;
							this.U[d$1][d$1] = 1;
						}
					}
					if (t) for (var P = this.n - 1; P >= 0; P--) {
						if (function(xt, At) {
							return xt && At;
						}(P < i, r[P] !== 0)) for (var _ = P + 1; _ < n$1; _++) {
							for (var B = 0, w = P + 1; w < this.n; w++) B += this.V[w][P] * this.V[w][_];
							B = -B / this.V[P + 1][P];
							for (var U = P + 1; U < this.n; U++) this.V[U][_] += B * this.V[U][P];
						}
						for (var H = 0; H < this.n; H++) this.V[H][P] = 0;
						this.V[P][P] = 1;
					}
					for (var K = m$1 - 1, ht = 0, Nt = /* @__PURE__ */ Math.pow(2, -52), St = /* @__PURE__ */ Math.pow(2, -966); m$1 > 0;) {
						var Q = void 0, Yt = void 0;
						for (Q = m$1 - 2; Q >= -1 && Q !== -1; Q--) if (Math.abs(r[Q]) <= St + Nt * (Math.abs(this.s[Q]) + Math.abs(this.s[Q + 1]))) {
							r[Q] = 0;
							break;
						}
						if (Q === m$1 - 2) Yt = 4;
						else {
							var Mt = void 0;
							for (Mt = m$1 - 1; Mt >= Q && Mt !== Q; Mt--) {
								var ot$1 = (Mt !== m$1 ? Math.abs(r[Mt]) : 0) + (Mt !== Q + 1 ? Math.abs(r[Mt - 1]) : 0);
								if (Math.abs(this.s[Mt]) <= St + Nt * ot$1) {
									this.s[Mt] = 0;
									break;
								}
							}
							Mt === Q ? Yt = 3 : Mt === m$1 - 1 ? Yt = 1 : (Yt = 2, Q = Mt);
						}
						switch (Q++, Yt) {
							case 1:
								var rt = r[m$1 - 2];
								r[m$1 - 2] = 0;
								for (var vt = m$1 - 2; vt >= Q; vt--) {
									var mt = /* @__PURE__ */ g.hypot(this.s[vt], rt), Lt$1 = this.s[vt] / mt, Et = rt / mt;
									if (this.s[vt] = mt, vt !== Q && (rt = -Et * r[vt - 1], r[vt - 1] = Lt$1 * r[vt - 1]), t) for (var Tt = 0; Tt < this.n; Tt++) mt = Lt$1 * this.V[Tt][vt] + Et * this.V[Tt][m$1 - 1], this.V[Tt][m$1 - 1] = -Et * this.V[Tt][vt] + Lt$1 * this.V[Tt][m$1 - 1], this.V[Tt][vt] = mt;
								}
								break;
							case 2:
								var wt = r[Q - 1];
								r[Q - 1] = 0;
								for (var Rt = Q; Rt < m$1; Rt++) {
									var Wt = /* @__PURE__ */ g.hypot(this.s[Rt], wt), Pt = this.s[Rt] / Wt, Ut = wt / Wt;
									if (this.s[Rt] = Wt, wt = -Ut * r[Rt], r[Rt] = Pt * r[Rt], c$1) for (var Ft = 0; Ft < this.m; Ft++) Wt = Pt * this.U[Ft][Rt] + Ut * this.U[Ft][Q - 1], this.U[Ft][Q - 1] = -Ut * this.U[Ft][Rt] + Pt * this.U[Ft][Q - 1], this.U[Ft][Rt] = Wt;
								}
								break;
							case 3:
								var Y = /* @__PURE__ */ Math.max(/* @__PURE__ */ Math.max(/* @__PURE__ */ Math.max(/* @__PURE__ */ Math.max(/* @__PURE__ */ Math.abs(this.s[m$1 - 1]), /* @__PURE__ */ Math.abs(this.s[m$1 - 2])), /* @__PURE__ */ Math.abs(r[m$1 - 2])), /* @__PURE__ */ Math.abs(this.s[Q])), /* @__PURE__ */ Math.abs(r[Q])), W = this.s[m$1 - 1] / Y, V = this.s[m$1 - 2] / Y, z = r[m$1 - 2] / Y, k = this.s[Q] / Y, j = r[Q] / Y, gt = ((V + W) * (V - W) + z * z) / 2, ft = W * z * (W * z), q$1 = 0;
								(function(xt, At) {
									return xt || At;
								})(gt !== 0, ft !== 0) && (q$1 = /* @__PURE__ */ Math.sqrt(gt * gt + ft), gt < 0 && (q$1 = -q$1), q$1 = ft / (gt + q$1));
								for (var lt = (k + W) * (k - W) + q$1, ut$1 = k * j, it = Q; it < m$1 - 1; it++) {
									var pt$1 = /* @__PURE__ */ g.hypot(lt, ut$1), Dt = lt / pt$1, st = ut$1 / pt$1;
									if (it !== Q && (r[it - 1] = pt$1), lt = Dt * this.s[it] + st * r[it], r[it] = Dt * r[it] - st * this.s[it], ut$1 = st * this.s[it + 1], this.s[it + 1] = Dt * this.s[it + 1], t) for (var nt = 0; nt < this.n; nt++) pt$1 = Dt * this.V[nt][it] + st * this.V[nt][it + 1], this.V[nt][it + 1] = -st * this.V[nt][it] + Dt * this.V[nt][it + 1], this.V[nt][it] = pt$1;
									if (pt$1 = /* @__PURE__ */ g.hypot(lt, ut$1), Dt = lt / pt$1, st = ut$1 / pt$1, this.s[it] = pt$1, lt = Dt * r[it] + st * this.s[it + 1], this.s[it + 1] = -st * r[it] + Dt * this.s[it + 1], ut$1 = st * r[it + 1], r[it + 1] = Dt * r[it + 1], c$1 && it < this.m - 1) for (var dt = 0; dt < this.m; dt++) pt$1 = Dt * this.U[dt][it] + st * this.U[dt][it + 1], this.U[dt][it + 1] = -st * this.U[dt][it] + Dt * this.U[dt][it + 1], this.U[dt][it] = pt$1;
								}
								r[m$1 - 2] = lt, ht = ht + 1;
								break;
							case 4:
								if (this.s[Q] <= 0 && (this.s[Q] = this.s[Q] < 0 ? -this.s[Q] : 0, t)) for (var at = 0; at <= K; at++) this.V[at][Q] = -this.V[at][Q];
								for (; Q < K && !(this.s[Q] >= this.s[Q + 1]);) {
									var ct = this.s[Q];
									if (this.s[Q] = this.s[Q + 1], this.s[Q + 1] = ct, t && Q < this.n - 1) for (var bt = 0; bt < this.n; bt++) ct = this.V[bt][Q + 1], this.V[bt][Q + 1] = this.V[bt][Q], this.V[bt][Q] = ct;
									if (c$1 && Q < this.m - 1) for (var Ot$1 = 0; Ot$1 < this.m; Ot$1++) ct = this.U[Ot$1][Q + 1], this.U[Ot$1][Q + 1] = this.U[Ot$1][Q], this.U[Ot$1][Q] = ct;
									Q++;
								}
								ht = 0, m$1--;
								break;
						}
					}
					return {
						U: this.U,
						V: this.V,
						S: this.s
					};
				}, g.hypot = function(o, n$1) {
					var r = void 0;
					return Math.abs(o) > Math.abs(n$1) ? (r = n$1 / o, r = Math.abs(o) * Math.sqrt(1 + r * r)) : n$1 != 0 ? (r = o / n$1, r = Math.abs(n$1) * Math.sqrt(1 + r * r)) : r = 0, r;
				}, D.exports = g;
			},
			function(D, C, T) {
				var g = /* @__PURE__ */ function() {
					function r(a, c$1) {
						for (var t = 0; t < c$1.length; t++) {
							var u = c$1[t];
							u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(a, u.key, u);
						}
					}
					return m(r, "defineProperties"), function(a, c$1, t) {
						return c$1 && r(a.prototype, c$1), t && r(a, t), a;
					};
				}();
				function o(r, a) {
					if (!(r instanceof a)) throw new TypeError("Cannot call a class as a function");
				}
				m(o, "_classCallCheck");
				D.exports = /* @__PURE__ */ function() {
					function r(a, c$1) {
						var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : -1, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : -1;
						o(this, r), this.sequence1 = a, this.sequence2 = c$1, this.match_score = t, this.mismatch_penalty = u, this.gap_penalty = i, this.iMax = a.length + 1, this.jMax = c$1.length + 1, this.grid = new Array(this.iMax);
						for (var e = 0; e < this.iMax; e++) {
							this.grid[e] = new Array(this.jMax);
							for (var h = 0; h < this.jMax; h++) this.grid[e][h] = 0;
						}
						this.tracebackGrid = new Array(this.iMax);
						for (var f = 0; f < this.iMax; f++) {
							this.tracebackGrid[f] = new Array(this.jMax);
							for (var l = 0; l < this.jMax; l++) this.tracebackGrid[f][l] = [
								null,
								null,
								null
							];
						}
						this.alignments = [], this.score = -1, this.computeGrids();
					}
					return m(r, "NeedlemanWunsch"), g(r, [
						{
							key: "getScore",
							value: /* @__PURE__ */ m(function() {
								return this.score;
							}, "getScore")
						},
						{
							key: "getAlignments",
							value: /* @__PURE__ */ m(function() {
								return this.alignments;
							}, "getAlignments")
						},
						{
							key: "computeGrids",
							value: /* @__PURE__ */ m(function() {
								for (var c$1 = 1; c$1 < this.jMax; c$1++) this.grid[0][c$1] = this.grid[0][c$1 - 1] + this.gap_penalty, this.tracebackGrid[0][c$1] = [
									!1,
									!1,
									!0
								];
								for (var t = 1; t < this.iMax; t++) this.grid[t][0] = this.grid[t - 1][0] + this.gap_penalty, this.tracebackGrid[t][0] = [
									!1,
									!0,
									!1
								];
								for (var u = 1; u < this.iMax; u++) for (var i = 1; i < this.jMax; i++) {
									var e = void 0;
									this.sequence1[u - 1] === this.sequence2[i - 1] ? e = this.grid[u - 1][i - 1] + this.match_score : e = this.grid[u - 1][i - 1] + this.mismatch_penalty;
									var h = this.grid[u - 1][i] + this.gap_penalty, f = this.grid[u][i - 1] + this.gap_penalty, l = [
										e,
										h,
										f
									], A = /* @__PURE__ */ this.arrayAllMaxIndexes(l);
									this.grid[u][i] = l[A[0]], this.tracebackGrid[u][i] = [
										/* @__PURE__ */ A.includes(0),
										/* @__PURE__ */ A.includes(1),
										/* @__PURE__ */ A.includes(2)
									];
								}
								this.score = this.grid[this.iMax - 1][this.jMax - 1];
							}, "computeGrids")
						},
						{
							key: "alignmentTraceback",
							value: /* @__PURE__ */ m(function() {
								var c$1 = [];
								for (c$1.push({
									pos: [this.sequence1.length, this.sequence2.length],
									seq1: "",
									seq2: ""
								}); c$1[0];) {
									var t = c$1[0], u = this.tracebackGrid[t.pos[0]][t.pos[1]];
									u[0] && c$1.push({
										pos: [t.pos[0] - 1, t.pos[1] - 1],
										seq1: this.sequence1[t.pos[0] - 1] + t.seq1,
										seq2: this.sequence2[t.pos[1] - 1] + t.seq2
									}), u[1] && c$1.push({
										pos: [t.pos[0] - 1, t.pos[1]],
										seq1: this.sequence1[t.pos[0] - 1] + t.seq1,
										seq2: "-" + t.seq2
									}), u[2] && c$1.push({
										pos: [t.pos[0], t.pos[1] - 1],
										seq1: "-" + t.seq1,
										seq2: this.sequence2[t.pos[1] - 1] + t.seq2
									}), t.pos[0] === 0 && t.pos[1] === 0 && this.alignments.push({
										sequence1: t.seq1,
										sequence2: t.seq2
									}), c$1.shift();
								}
								return this.alignments;
							}, "alignmentTraceback")
						},
						{
							key: "getAllIndexes",
							value: /* @__PURE__ */ m(function(c$1, t) {
								for (var u = [], i = -1; (i = /* @__PURE__ */ c$1.indexOf(t, i + 1)) !== -1;) u.push(i);
								return u;
							}, "getAllIndexes")
						},
						{
							key: "arrayAllMaxIndexes",
							value: /* @__PURE__ */ m(function(c$1) {
								return this.getAllIndexes(c$1, /* @__PURE__ */ Math.max.apply(null, c$1));
							}, "arrayAllMaxIndexes")
						}
					]), r;
				}();
			},
			function(D, C, T) {
				var g = /* @__PURE__ */ m(function() {}, "layoutBase");
				g.FDLayout = /* @__PURE__ */ T(18), g.FDLayoutConstants = /* @__PURE__ */ T(4), g.FDLayoutEdge = /* @__PURE__ */ T(19), g.FDLayoutNode = /* @__PURE__ */ T(20), g.DimensionD = /* @__PURE__ */ T(21), g.HashMap = /* @__PURE__ */ T(22), g.HashSet = /* @__PURE__ */ T(23), g.IGeometry = /* @__PURE__ */ T(8), g.IMath = /* @__PURE__ */ T(9), g.Integer = /* @__PURE__ */ T(10), g.Point = /* @__PURE__ */ T(12), g.PointD = /* @__PURE__ */ T(5), g.RandomSeed = /* @__PURE__ */ T(16), g.RectangleD = /* @__PURE__ */ T(13), g.Transform = /* @__PURE__ */ T(17), g.UniqueIDGeneretor = /* @__PURE__ */ T(14), g.Quicksort = /* @__PURE__ */ T(25), g.LinkedList = /* @__PURE__ */ T(11), g.LGraphObject = /* @__PURE__ */ T(2), g.LGraph = /* @__PURE__ */ T(6), g.LEdge = /* @__PURE__ */ T(1), g.LGraphManager = /* @__PURE__ */ T(7), g.LNode = /* @__PURE__ */ T(3), g.Layout = /* @__PURE__ */ T(15), g.LayoutConstants = /* @__PURE__ */ T(0), g.NeedlemanWunsch = /* @__PURE__ */ T(27), g.Matrix = /* @__PURE__ */ T(24), g.SVD = /* @__PURE__ */ T(26), D.exports = g;
			},
			function(D, C, T) {
				function g() {
					this.listeners = [];
				}
				m(g, "Emitter");
				var o = g.prototype;
				o.addListener = function(n$1, r) {
					this.listeners.push({
						event: n$1,
						callback: r
					});
				}, o.removeListener = function(n$1, r) {
					for (var a = this.listeners.length; a >= 0; a--) {
						var c$1 = this.listeners[a];
						c$1.event === n$1 && c$1.callback === r && this.listeners.splice(a, 1);
					}
				}, o.emit = function(n$1, r) {
					for (var a = 0; a < this.listeners.length; a++) {
						var c$1 = this.listeners[a];
						n$1 === c$1.event && c$1.callback(r);
					}
				}, D.exports = g;
			}
		]);
	});
});
var Re = /* @__PURE__ */ n((he, Oe) => {
	m(function(C, T) {
		typeof he == "object" && typeof Oe == "object" ? Oe.exports = /* @__PURE__ */ T(/* @__PURE__ */ xe()) : typeof define == "function" && define.amd ? define(["layout-base"], T) : typeof he == "object" ? he.coseBase = /* @__PURE__ */ T(/* @__PURE__ */ xe()) : C.coseBase = /* @__PURE__ */ T(C.layoutBase);
	}, "webpackUniversalModuleDefinition")(he, function(D) {
		return (() => {
			var C = {
				45: (n$1, r, a) => {
					var c$1 = {};
					c$1.layoutBase = /* @__PURE__ */ a(551), c$1.CoSEConstants = /* @__PURE__ */ a(806), c$1.CoSEEdge = /* @__PURE__ */ a(767), c$1.CoSEGraph = /* @__PURE__ */ a(880), c$1.CoSEGraphManager = /* @__PURE__ */ a(578), c$1.CoSELayout = /* @__PURE__ */ a(765), c$1.CoSENode = /* @__PURE__ */ a(991), c$1.ConstraintHandler = /* @__PURE__ */ a(902), n$1.exports = c$1;
				},
				806: (n$1, r, a) => {
					var c$1 = a(551).FDLayoutConstants;
					function t() {}
					m(t, "CoSEConstants");
					for (var u in c$1) t[u] = c$1[u];
					t.DEFAULT_USE_MULTI_LEVEL_SCALING = !1, t.DEFAULT_RADIAL_SEPARATION = c$1.DEFAULT_EDGE_LENGTH, t.DEFAULT_COMPONENT_SEPERATION = 60, t.TILE = !0, t.TILING_PADDING_VERTICAL = 10, t.TILING_PADDING_HORIZONTAL = 10, t.TRANSFORM_ON_CONSTRAINT_HANDLING = !0, t.ENFORCE_CONSTRAINTS = !0, t.APPLY_LAYOUT = !0, t.RELAX_MOVEMENT_ON_CONSTRAINTS = !0, t.TREE_REDUCTION_ON_INCREMENTAL = !0, t.PURE_INCREMENTAL = t.DEFAULT_INCREMENTAL, n$1.exports = t;
				},
				767: (n$1, r, a) => {
					var c$1 = a(551).FDLayoutEdge;
					function t(i, e, h) {
						c$1.call(this, i, e, h);
					}
					m(t, "CoSEEdge"), t.prototype = /* @__PURE__ */ Object.create(c$1.prototype);
					for (var u in c$1) t[u] = c$1[u];
					n$1.exports = t;
				},
				880: (n$1, r, a) => {
					var c$1 = a(551).LGraph;
					function t(i, e, h) {
						c$1.call(this, i, e, h);
					}
					m(t, "CoSEGraph"), t.prototype = /* @__PURE__ */ Object.create(c$1.prototype);
					for (var u in c$1) t[u] = c$1[u];
					n$1.exports = t;
				},
				578: (n$1, r, a) => {
					var c$1 = a(551).LGraphManager;
					function t(i) {
						c$1.call(this, i);
					}
					m(t, "CoSEGraphManager"), t.prototype = /* @__PURE__ */ Object.create(c$1.prototype);
					for (var u in c$1) t[u] = c$1[u];
					n$1.exports = t;
				},
				765: (n$1, r, a) => {
					var c$1 = a(551).FDLayout, t = /* @__PURE__ */ a(578), u = /* @__PURE__ */ a(880), i = /* @__PURE__ */ a(991), e = /* @__PURE__ */ a(767), h = /* @__PURE__ */ a(806), f = /* @__PURE__ */ a(902), l = a(551).FDLayoutConstants, A = a(551).LayoutConstants, y = a(551).Point, v = a(551).PointD, N = a(551).DimensionD, S = a(551).Layout, M = a(551).Integer, b = a(551).IGeometry, $ = a(551).LGraph, X = a(551).Transform, et = a(551).LinkedList;
					function R() {
						c$1.call(this), this.toBeTiled = {}, this.constraints = {};
					}
					m(R, "CoSELayout"), R.prototype = /* @__PURE__ */ Object.create(c$1.prototype);
					for (var J in c$1) R[J] = c$1[J];
					R.prototype.newGraphManager = function() {
						var s = new t(this);
						return this.graphManager = s, s;
					}, R.prototype.newGraph = function(s) {
						return new u(null, this.graphManager, s);
					}, R.prototype.newNode = function(s) {
						return new i(this.graphManager, s);
					}, R.prototype.newEdge = function(s) {
						return new e(null, null, s);
					}, R.prototype.initParameters = function() {
						c$1.prototype.initParameters.call(this, arguments), this.isSubLayout || (h.DEFAULT_EDGE_LENGTH < 10 ? this.idealEdgeLength = 10 : this.idealEdgeLength = h.DEFAULT_EDGE_LENGTH, this.useSmartIdealEdgeLengthCalculation = h.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.gravityConstant = l.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = l.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = l.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = l.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.prunedNodesAll = [], this.growTreeIterations = 0, this.afterGrowthIterations = 0, this.isTreeGrowing = !1, this.isGrowthFinished = !1);
					}, R.prototype.initSpringEmbedder = function() {
						c$1.prototype.initSpringEmbedder.call(this), this.coolingCycle = 0, this.maxCoolingCycle = this.maxIterations / l.CONVERGENCE_CHECK_PERIOD, this.finalTemperature = .04, this.coolingAdjuster = 1;
					}, R.prototype.layout = function() {
						return A.DEFAULT_CREATE_BENDS_AS_NEEDED && (this.createBendpoints(), this.graphManager.resetAllEdges()), this.level = 0, this.classicLayout();
					}, R.prototype.classicLayout = function() {
						if (this.nodesWithGravity = /* @__PURE__ */ this.calculateNodesToApplyGravitationTo(), this.graphManager.setAllNodesToApplyGravitation(this.nodesWithGravity), this.calcNoOfChildrenForAllNodes(), this.graphManager.calcLowestCommonAncestors(), this.graphManager.calcInclusionTreeDepths(), this.graphManager.getRoot().calcEstimatedSize(), this.calcIdealEdgeLengths(), this.incremental) {
							if (h.TREE_REDUCTION_ON_INCREMENTAL) {
								this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
								var m$1 = new Set(this.getAllNodes()), p$1 = /* @__PURE__ */ this.nodesWithGravity.filter(function(O) {
									return m$1.has(O);
								});
								this.graphManager.setAllNodesToApplyGravitation(p$1);
							}
						} else {
							var s = /* @__PURE__ */ this.getFlatForest();
							if (s.length > 0) this.positionNodesRadially(s);
							else {
								this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
								var m$1 = new Set(this.getAllNodes()), p$1 = /* @__PURE__ */ this.nodesWithGravity.filter(function(E) {
									return m$1.has(E);
								});
								this.graphManager.setAllNodesToApplyGravitation(p$1), this.positionNodesRandomly();
							}
						}
						return Object.keys(this.constraints).length > 0 && (f.handleConstraints(this), this.initConstraintVariables()), this.initSpringEmbedder(), h.APPLY_LAYOUT && this.runSpringEmbedder(), !0;
					}, R.prototype.tick = function() {
						if (this.totalIterations++, this.totalIterations === this.maxIterations && !this.isTreeGrowing && !this.isGrowthFinished) if (this.prunedNodesAll.length > 0) this.isTreeGrowing = !0;
						else return !0;
						if (this.totalIterations % l.CONVERGENCE_CHECK_PERIOD == 0 && !this.isTreeGrowing && !this.isGrowthFinished) {
							if (this.isConverged()) if (this.prunedNodesAll.length > 0) this.isTreeGrowing = !0;
							else return !0;
							this.coolingCycle++, this.layoutQuality == 0 ? this.coolingAdjuster = this.coolingCycle : this.layoutQuality == 1 && (this.coolingAdjuster = this.coolingCycle / 3), this.coolingFactor = /* @__PURE__ */ Math.max(this.initialCoolingFactor - Math.pow(this.coolingCycle, Math.log(100 * (this.initialCoolingFactor - this.finalTemperature)) / Math.log(this.maxCoolingCycle)) / 100 * this.coolingAdjuster, this.finalTemperature), this.animationPeriod = /* @__PURE__ */ Math.ceil(this.initialAnimationPeriod * Math.sqrt(this.coolingFactor));
						}
						if (this.isTreeGrowing) {
							if (this.growTreeIterations % 10 == 0) if (this.prunedNodesAll.length > 0) {
								this.graphManager.updateBounds(), this.updateGrid(), this.growTree(this.prunedNodesAll), this.graphManager.resetAllNodesToApplyGravitation();
								var s = new Set(this.getAllNodes()), m$1 = /* @__PURE__ */ this.nodesWithGravity.filter(function(d$1) {
									return s.has(d$1);
								});
								this.graphManager.setAllNodesToApplyGravitation(m$1), this.graphManager.updateBounds(), this.updateGrid(), h.PURE_INCREMENTAL ? this.coolingFactor = l.DEFAULT_COOLING_FACTOR_INCREMENTAL / 2 : this.coolingFactor = l.DEFAULT_COOLING_FACTOR_INCREMENTAL;
							} else this.isTreeGrowing = !1, this.isGrowthFinished = !0;
							this.growTreeIterations++;
						}
						if (this.isGrowthFinished) {
							if (this.isConverged()) return !0;
							this.afterGrowthIterations % 10 == 0 && (this.graphManager.updateBounds(), this.updateGrid()), h.PURE_INCREMENTAL ? this.coolingFactor = l.DEFAULT_COOLING_FACTOR_INCREMENTAL / 2 * ((100 - this.afterGrowthIterations) / 100) : this.coolingFactor = l.DEFAULT_COOLING_FACTOR_INCREMENTAL * ((100 - this.afterGrowthIterations) / 100), this.afterGrowthIterations++;
						}
						var p$1 = !this.isTreeGrowing && !this.isGrowthFinished, E = this.growTreeIterations % 10 == 1 && this.isTreeGrowing || this.afterGrowthIterations % 10 == 1 && this.isGrowthFinished;
						return this.totalDisplacement = 0, this.graphManager.updateBounds(), this.calcSpringForces(), this.calcRepulsionForces(p$1, E), this.calcGravitationalForces(), this.moveNodes(), this.animate(), !1;
					}, R.prototype.getPositionsData = function() {
						for (var s = /* @__PURE__ */ this.graphManager.getAllNodes(), m$1 = {}, p$1 = 0; p$1 < s.length; p$1++) {
							var E = s[p$1].rect, d$1 = s[p$1].id;
							m$1[d$1] = {
								id: d$1,
								x: /* @__PURE__ */ E.getCenterX(),
								y: /* @__PURE__ */ E.getCenterY(),
								w: E.width,
								h: E.height
							};
						}
						return m$1;
					}, R.prototype.runSpringEmbedder = function() {
						this.initialAnimationPeriod = 25, this.animationPeriod = this.initialAnimationPeriod;
						var s = !1;
						if (l.ANIMATE === "during") this.emit("layoutstarted");
						else {
							for (; !s;) s = /* @__PURE__ */ this.tick();
							this.graphManager.updateBounds();
						}
					}, R.prototype.moveNodes = function() {
						for (var s = /* @__PURE__ */ this.getAllNodes(), m$1, p$1 = 0; p$1 < s.length; p$1++) m$1 = s[p$1], m$1.calculateDisplacement();
						Object.keys(this.constraints).length > 0 && this.updateDisplacements();
						for (var p$1 = 0; p$1 < s.length; p$1++) m$1 = s[p$1], m$1.move();
					}, R.prototype.initConstraintVariables = function() {
						var s = this;
						this.idToNodeMap = /* @__PURE__ */ new Map(), this.fixedNodeSet = /* @__PURE__ */ new Set();
						for (var m$1 = /* @__PURE__ */ this.graphManager.getAllNodes(), p$1 = 0; p$1 < m$1.length; p$1++) {
							var E = m$1[p$1];
							this.idToNodeMap.set(E.id, E);
						}
						var d$1 = /* @__PURE__ */ m(function w(U) {
							for (var H = /* @__PURE__ */ U.getChild().getNodes(), K, ht = 0, Nt = 0; Nt < H.length; Nt++) K = H[Nt], K.getChild() == null ? s.fixedNodeSet.has(K.id) && (ht += 100) : ht += /* @__PURE__ */ w(K);
							return ht;
						}, "calculateCompoundWeight");
						if (this.constraints.fixedNodeConstraint) {
							this.constraints.fixedNodeConstraint.forEach(function(H) {
								s.fixedNodeSet.add(H.nodeId);
							});
							for (var m$1 = /* @__PURE__ */ this.graphManager.getAllNodes(), E, p$1 = 0; p$1 < m$1.length; p$1++) if (E = m$1[p$1], E.getChild() != null) {
								var O = /* @__PURE__ */ d$1(E);
								O > 0 && (E.fixedNodeWeight = O);
							}
						}
						if (this.constraints.relativePlacementConstraint) {
							var x = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map();
							if (this.dummyToNodeForVerticalAlignment = /* @__PURE__ */ new Map(), this.dummyToNodeForHorizontalAlignment = /* @__PURE__ */ new Map(), this.fixedNodesOnHorizontal = /* @__PURE__ */ new Set(), this.fixedNodesOnVertical = /* @__PURE__ */ new Set(), this.fixedNodeSet.forEach(function(w) {
								s.fixedNodesOnHorizontal.add(w), s.fixedNodesOnVertical.add(w);
							}), this.constraints.alignmentConstraint) {
								if (this.constraints.alignmentConstraint.vertical) for (var F = this.constraints.alignmentConstraint.vertical, p$1 = 0; p$1 < F.length; p$1++) this.dummyToNodeForVerticalAlignment.set("dummy" + p$1, []), F[p$1].forEach(function(U) {
									x.set(U, "dummy" + p$1), s.dummyToNodeForVerticalAlignment.get("dummy" + p$1).push(U), s.fixedNodeSet.has(U) && s.fixedNodesOnHorizontal.add("dummy" + p$1);
								});
								if (this.constraints.alignmentConstraint.horizontal) for (var I = this.constraints.alignmentConstraint.horizontal, p$1 = 0; p$1 < I.length; p$1++) this.dummyToNodeForHorizontalAlignment.set("dummy" + p$1, []), I[p$1].forEach(function(U) {
									G.set(U, "dummy" + p$1), s.dummyToNodeForHorizontalAlignment.get("dummy" + p$1).push(U), s.fixedNodeSet.has(U) && s.fixedNodesOnVertical.add("dummy" + p$1);
								});
							}
							if (h.RELAX_MOVEMENT_ON_CONSTRAINTS) this.shuffle = function(w) {
								var U, H, K;
								for (K = w.length - 1; K >= 2 * w.length / 3; K--) U = /* @__PURE__ */ Math.floor(Math.random() * (K + 1)), H = w[K], w[K] = w[U], w[U] = H;
								return w;
							}, this.nodesInRelativeHorizontal = [], this.nodesInRelativeVertical = [], this.nodeToRelativeConstraintMapHorizontal = /* @__PURE__ */ new Map(), this.nodeToRelativeConstraintMapVertical = /* @__PURE__ */ new Map(), this.nodeToTempPositionMapHorizontal = /* @__PURE__ */ new Map(), this.nodeToTempPositionMapVertical = /* @__PURE__ */ new Map(), this.constraints.relativePlacementConstraint.forEach(function(w) {
								if (w.left) {
									var U = x.has(w.left) ? x.get(w.left) : w.left, H = x.has(w.right) ? x.get(w.right) : w.right;
									s.nodesInRelativeHorizontal.includes(U) || (s.nodesInRelativeHorizontal.push(U), s.nodeToRelativeConstraintMapHorizontal.set(U, []), s.dummyToNodeForVerticalAlignment.has(U) ? s.nodeToTempPositionMapHorizontal.set(U, /* @__PURE__ */ s.idToNodeMap.get(s.dummyToNodeForVerticalAlignment.get(U)[0]).getCenterX()) : s.nodeToTempPositionMapHorizontal.set(U, /* @__PURE__ */ s.idToNodeMap.get(U).getCenterX())), s.nodesInRelativeHorizontal.includes(H) || (s.nodesInRelativeHorizontal.push(H), s.nodeToRelativeConstraintMapHorizontal.set(H, []), s.dummyToNodeForVerticalAlignment.has(H) ? s.nodeToTempPositionMapHorizontal.set(H, /* @__PURE__ */ s.idToNodeMap.get(s.dummyToNodeForVerticalAlignment.get(H)[0]).getCenterX()) : s.nodeToTempPositionMapHorizontal.set(H, /* @__PURE__ */ s.idToNodeMap.get(H).getCenterX())), s.nodeToRelativeConstraintMapHorizontal.get(U).push({
										right: H,
										gap: w.gap
									}), s.nodeToRelativeConstraintMapHorizontal.get(H).push({
										left: U,
										gap: w.gap
									});
								} else {
									var K = G.has(w.top) ? G.get(w.top) : w.top, ht = G.has(w.bottom) ? G.get(w.bottom) : w.bottom;
									s.nodesInRelativeVertical.includes(K) || (s.nodesInRelativeVertical.push(K), s.nodeToRelativeConstraintMapVertical.set(K, []), s.dummyToNodeForHorizontalAlignment.has(K) ? s.nodeToTempPositionMapVertical.set(K, /* @__PURE__ */ s.idToNodeMap.get(s.dummyToNodeForHorizontalAlignment.get(K)[0]).getCenterY()) : s.nodeToTempPositionMapVertical.set(K, /* @__PURE__ */ s.idToNodeMap.get(K).getCenterY())), s.nodesInRelativeVertical.includes(ht) || (s.nodesInRelativeVertical.push(ht), s.nodeToRelativeConstraintMapVertical.set(ht, []), s.dummyToNodeForHorizontalAlignment.has(ht) ? s.nodeToTempPositionMapVertical.set(ht, /* @__PURE__ */ s.idToNodeMap.get(s.dummyToNodeForHorizontalAlignment.get(ht)[0]).getCenterY()) : s.nodeToTempPositionMapVertical.set(ht, /* @__PURE__ */ s.idToNodeMap.get(ht).getCenterY())), s.nodeToRelativeConstraintMapVertical.get(K).push({
										bottom: ht,
										gap: w.gap
									}), s.nodeToRelativeConstraintMapVertical.get(ht).push({
										top: K,
										gap: w.gap
									});
								}
							});
							else {
								var Z = /* @__PURE__ */ new Map(), tt = /* @__PURE__ */ new Map();
								this.constraints.relativePlacementConstraint.forEach(function(w) {
									if (w.left) {
										var U = x.has(w.left) ? x.get(w.left) : w.left, H = x.has(w.right) ? x.get(w.right) : w.right;
										Z.has(U) ? Z.get(U).push(H) : Z.set(U, [H]), Z.has(H) ? Z.get(H).push(U) : Z.set(H, [U]);
									} else {
										var K = G.has(w.top) ? G.get(w.top) : w.top, ht = G.has(w.bottom) ? G.get(w.bottom) : w.bottom;
										tt.has(K) ? tt.get(K).push(ht) : tt.set(K, [ht]), tt.has(ht) ? tt.get(ht).push(K) : tt.set(ht, [K]);
									}
								});
								var P = /* @__PURE__ */ m(function(U, H) {
									var K = [], ht = [], Nt = new et(), St = /* @__PURE__ */ new Set(), Q = 0;
									return U.forEach(function(Yt, Mt) {
										if (!St.has(Mt)) {
											K[Q] = [], ht[Q] = !1;
											var ot$1 = Mt;
											for (Nt.push(ot$1), St.add(ot$1), K[Q].push(ot$1); Nt.length != 0;) {
												ot$1 = /* @__PURE__ */ Nt.shift(), H.has(ot$1) && (ht[Q] = !0);
												U.get(ot$1).forEach(function(vt) {
													St.has(vt) || (Nt.push(vt), St.add(vt), K[Q].push(vt));
												});
											}
											Q++;
										}
									}), {
										components: K,
										isFixed: ht
									};
								}, "constructComponents"), _ = /* @__PURE__ */ P(Z, s.fixedNodesOnHorizontal);
								this.componentsOnHorizontal = _.components, this.fixedComponentsOnHorizontal = _.isFixed;
								var B = /* @__PURE__ */ P(tt, s.fixedNodesOnVertical);
								this.componentsOnVertical = B.components, this.fixedComponentsOnVertical = B.isFixed;
							}
						}
					}, R.prototype.updateDisplacements = function() {
						var s = this;
						if (this.constraints.fixedNodeConstraint && this.constraints.fixedNodeConstraint.forEach(function(B) {
							var w = /* @__PURE__ */ s.idToNodeMap.get(B.nodeId);
							w.displacementX = 0, w.displacementY = 0;
						}), this.constraints.alignmentConstraint) {
							if (this.constraints.alignmentConstraint.vertical) for (var m$1 = this.constraints.alignmentConstraint.vertical, p$1 = 0; p$1 < m$1.length; p$1++) {
								for (var E = 0, d$1 = 0; d$1 < m$1[p$1].length; d$1++) {
									if (this.fixedNodeSet.has(m$1[p$1][d$1])) {
										E = 0;
										break;
									}
									E += this.idToNodeMap.get(m$1[p$1][d$1]).displacementX;
								}
								for (var O = E / m$1[p$1].length, d$1 = 0; d$1 < m$1[p$1].length; d$1++) this.idToNodeMap.get(m$1[p$1][d$1]).displacementX = O;
							}
							if (this.constraints.alignmentConstraint.horizontal) for (var x = this.constraints.alignmentConstraint.horizontal, p$1 = 0; p$1 < x.length; p$1++) {
								for (var G = 0, d$1 = 0; d$1 < x[p$1].length; d$1++) {
									if (this.fixedNodeSet.has(x[p$1][d$1])) {
										G = 0;
										break;
									}
									G += this.idToNodeMap.get(x[p$1][d$1]).displacementY;
								}
								for (var F = G / x[p$1].length, d$1 = 0; d$1 < x[p$1].length; d$1++) this.idToNodeMap.get(x[p$1][d$1]).displacementY = F;
							}
						}
						if (this.constraints.relativePlacementConstraint) if (h.RELAX_MOVEMENT_ON_CONSTRAINTS) this.totalIterations % 10 == 0 && (this.shuffle(this.nodesInRelativeHorizontal), this.shuffle(this.nodesInRelativeVertical)), this.nodesInRelativeHorizontal.forEach(function(B) {
							if (!s.fixedNodesOnHorizontal.has(B)) {
								var w = 0;
								s.dummyToNodeForVerticalAlignment.has(B) ? w = s.idToNodeMap.get(s.dummyToNodeForVerticalAlignment.get(B)[0]).displacementX : w = s.idToNodeMap.get(B).displacementX, s.nodeToRelativeConstraintMapHorizontal.get(B).forEach(function(U) {
									if (U.right) {
										var H = s.nodeToTempPositionMapHorizontal.get(U.right) - s.nodeToTempPositionMapHorizontal.get(B) - w;
										H < U.gap && (w -= U.gap - H);
									} else {
										var H = s.nodeToTempPositionMapHorizontal.get(B) - s.nodeToTempPositionMapHorizontal.get(U.left) + w;
										H < U.gap && (w += U.gap - H);
									}
								}), s.nodeToTempPositionMapHorizontal.set(B, s.nodeToTempPositionMapHorizontal.get(B) + w), s.dummyToNodeForVerticalAlignment.has(B) ? s.dummyToNodeForVerticalAlignment.get(B).forEach(function(U) {
									s.idToNodeMap.get(U).displacementX = w;
								}) : s.idToNodeMap.get(B).displacementX = w;
							}
						}), this.nodesInRelativeVertical.forEach(function(B) {
							if (!s.fixedNodesOnHorizontal.has(B)) {
								var w = 0;
								s.dummyToNodeForHorizontalAlignment.has(B) ? w = s.idToNodeMap.get(s.dummyToNodeForHorizontalAlignment.get(B)[0]).displacementY : w = s.idToNodeMap.get(B).displacementY, s.nodeToRelativeConstraintMapVertical.get(B).forEach(function(U) {
									if (U.bottom) {
										var H = s.nodeToTempPositionMapVertical.get(U.bottom) - s.nodeToTempPositionMapVertical.get(B) - w;
										H < U.gap && (w -= U.gap - H);
									} else {
										var H = s.nodeToTempPositionMapVertical.get(B) - s.nodeToTempPositionMapVertical.get(U.top) + w;
										H < U.gap && (w += U.gap - H);
									}
								}), s.nodeToTempPositionMapVertical.set(B, s.nodeToTempPositionMapVertical.get(B) + w), s.dummyToNodeForHorizontalAlignment.has(B) ? s.dummyToNodeForHorizontalAlignment.get(B).forEach(function(U) {
									s.idToNodeMap.get(U).displacementY = w;
								}) : s.idToNodeMap.get(B).displacementY = w;
							}
						});
						else {
							for (var p$1 = 0; p$1 < this.componentsOnHorizontal.length; p$1++) {
								var I = this.componentsOnHorizontal[p$1];
								if (this.fixedComponentsOnHorizontal[p$1]) for (var d$1 = 0; d$1 < I.length; d$1++) this.dummyToNodeForVerticalAlignment.has(I[d$1]) ? this.dummyToNodeForVerticalAlignment.get(I[d$1]).forEach(function(U) {
									s.idToNodeMap.get(U).displacementX = 0;
								}) : this.idToNodeMap.get(I[d$1]).displacementX = 0;
								else {
									for (var Z = 0, tt = 0, d$1 = 0; d$1 < I.length; d$1++) if (this.dummyToNodeForVerticalAlignment.has(I[d$1])) {
										var P = /* @__PURE__ */ this.dummyToNodeForVerticalAlignment.get(I[d$1]);
										Z += P.length * this.idToNodeMap.get(P[0]).displacementX, tt += P.length;
									} else Z += this.idToNodeMap.get(I[d$1]).displacementX, tt++;
									for (var _ = Z / tt, d$1 = 0; d$1 < I.length; d$1++) this.dummyToNodeForVerticalAlignment.has(I[d$1]) ? this.dummyToNodeForVerticalAlignment.get(I[d$1]).forEach(function(U) {
										s.idToNodeMap.get(U).displacementX = _;
									}) : this.idToNodeMap.get(I[d$1]).displacementX = _;
								}
							}
							for (var p$1 = 0; p$1 < this.componentsOnVertical.length; p$1++) {
								var I = this.componentsOnVertical[p$1];
								if (this.fixedComponentsOnVertical[p$1]) for (var d$1 = 0; d$1 < I.length; d$1++) this.dummyToNodeForHorizontalAlignment.has(I[d$1]) ? this.dummyToNodeForHorizontalAlignment.get(I[d$1]).forEach(function(H) {
									s.idToNodeMap.get(H).displacementY = 0;
								}) : this.idToNodeMap.get(I[d$1]).displacementY = 0;
								else {
									for (var Z = 0, tt = 0, d$1 = 0; d$1 < I.length; d$1++) if (this.dummyToNodeForHorizontalAlignment.has(I[d$1])) {
										var P = /* @__PURE__ */ this.dummyToNodeForHorizontalAlignment.get(I[d$1]);
										Z += P.length * this.idToNodeMap.get(P[0]).displacementY, tt += P.length;
									} else Z += this.idToNodeMap.get(I[d$1]).displacementY, tt++;
									for (var _ = Z / tt, d$1 = 0; d$1 < I.length; d$1++) this.dummyToNodeForHorizontalAlignment.has(I[d$1]) ? this.dummyToNodeForHorizontalAlignment.get(I[d$1]).forEach(function(Nt) {
										s.idToNodeMap.get(Nt).displacementY = _;
									}) : this.idToNodeMap.get(I[d$1]).displacementY = _;
								}
							}
						}
					}, R.prototype.calculateNodesToApplyGravitationTo = function() {
						var s = [], m$1, p$1 = /* @__PURE__ */ this.graphManager.getGraphs(), E = p$1.length, d$1;
						for (d$1 = 0; d$1 < E; d$1++) m$1 = p$1[d$1], m$1.updateConnected(), m$1.isConnected || (s = /* @__PURE__ */ s.concat(/* @__PURE__ */ m$1.getNodes()));
						return s;
					}, R.prototype.createBendpoints = function() {
						var s = [];
						s = /* @__PURE__ */ s.concat(/* @__PURE__ */ this.graphManager.getAllEdges());
						var m$1 = /* @__PURE__ */ new Set(), p$1;
						for (p$1 = 0; p$1 < s.length; p$1++) {
							var E = s[p$1];
							if (!m$1.has(E)) {
								var d$1 = /* @__PURE__ */ E.getSource(), O = /* @__PURE__ */ E.getTarget();
								if (d$1 == O) E.getBendpoints().push(new v()), E.getBendpoints().push(new v()), this.createDummyNodesForBendpoints(E), m$1.add(E);
								else {
									var x = [];
									if (x = /* @__PURE__ */ x.concat(/* @__PURE__ */ d$1.getEdgeListToNode(O)), x = /* @__PURE__ */ x.concat(/* @__PURE__ */ O.getEdgeListToNode(d$1)), !m$1.has(x[0])) {
										if (x.length > 1) {
											var G;
											for (G = 0; G < x.length; G++) {
												var F = x[G];
												F.getBendpoints().push(new v()), this.createDummyNodesForBendpoints(F);
											}
										}
										x.forEach(function(I) {
											m$1.add(I);
										});
									}
								}
							}
							if (m$1.size == s.length) break;
						}
					}, R.prototype.positionNodesRadially = function(s) {
						for (var m$1 = new y(0, 0), p$1 = /* @__PURE__ */ Math.ceil(/* @__PURE__ */ Math.sqrt(s.length)), E = 0, d$1 = 0, O = 0, x = new v(0, 0), G = 0; G < s.length; G++) {
							G % p$1 == 0 && (O = 0, d$1 = E, G != 0 && (d$1 += h.DEFAULT_COMPONENT_SEPERATION), E = 0);
							var F = s[G], I = /* @__PURE__ */ S.findCenterOfTree(F);
							m$1.x = O, m$1.y = d$1, x = /* @__PURE__ */ R.radialLayout(F, I, m$1), x.y > E && (E = /* @__PURE__ */ Math.floor(x.y)), O = /* @__PURE__ */ Math.floor(x.x + h.DEFAULT_COMPONENT_SEPERATION);
						}
						this.transform(new v(A.WORLD_CENTER_X - x.x / 2, A.WORLD_CENTER_Y - x.y / 2));
					}, R.radialLayout = function(s, m$1, p$1) {
						var E = /* @__PURE__ */ Math.max(/* @__PURE__ */ this.maxDiagonalInTree(s), h.DEFAULT_RADIAL_SEPARATION);
						R.branchRadialLayout(m$1, null, 0, 359, 0, E);
						var d$1 = /* @__PURE__ */ $.calculateBounds(s), O = new X();
						O.setDeviceOrgX(/* @__PURE__ */ d$1.getMinX()), O.setDeviceOrgY(/* @__PURE__ */ d$1.getMinY()), O.setWorldOrgX(p$1.x), O.setWorldOrgY(p$1.y);
						for (var x = 0; x < s.length; x++) s[x].transform(O);
						var F = new v(d$1.getMaxX(), d$1.getMaxY());
						return O.inverseTransformPoint(F);
					}, R.branchRadialLayout = function(s, m$1, p$1, E, d$1, O) {
						var x = (E - p$1 + 1) / 2;
						x < 0 && (x += 180);
						var F = (x + p$1) % 360 * b.TWO_PI / 360, Z = d$1 * Math.cos(F), tt = d$1 * Math.sin(F);
						s.setCenter(Z, tt);
						var P = [];
						P = /* @__PURE__ */ P.concat(/* @__PURE__ */ s.getEdges());
						var _ = P.length;
						m$1 != null && _--;
						for (var B = 0, w = P.length, U, H = /* @__PURE__ */ s.getEdgesBetween(m$1); H.length > 1;) {
							var K = H[0];
							H.splice(0, 1);
							var ht = /* @__PURE__ */ P.indexOf(K);
							ht >= 0 && P.splice(ht, 1), w--, _--;
						}
						m$1 != null ? U = (P.indexOf(H[0]) + 1) % w : U = 0;
						for (var Nt = Math.abs(E - p$1) / _, St = U; B != _; St = ++St % w) {
							var Q = /* @__PURE__ */ P[St].getOtherEnd(s);
							if (Q != m$1) {
								var Yt = (p$1 + B * Nt) % 360, Mt = (Yt + Nt) % 360;
								R.branchRadialLayout(Q, s, Yt, Mt, d$1 + O, O), B++;
							}
						}
					}, R.maxDiagonalInTree = function(s) {
						for (var m$1 = M.MIN_VALUE, p$1 = 0; p$1 < s.length; p$1++) {
							var d$1 = /* @__PURE__ */ s[p$1].getDiagonal();
							d$1 > m$1 && (m$1 = d$1);
						}
						return m$1;
					}, R.prototype.calcRepulsionRange = function() {
						return 2 * (this.level + 1) * this.idealEdgeLength;
					}, R.prototype.groupZeroDegreeMembers = function() {
						var s = this, m$1 = {};
						this.memberGroups = {}, this.idToDummyNode = {};
						for (var p$1 = [], E = /* @__PURE__ */ this.graphManager.getAllNodes(), d$1 = 0; d$1 < E.length; d$1++) {
							var O = E[d$1], x = /* @__PURE__ */ O.getParent();
							this.getNodeDegreeWithChildren(O) === 0 && (x.id == null || !this.getToBeTiled(x)) && p$1.push(O);
						}
						for (var d$1 = 0; d$1 < p$1.length; d$1++) {
							var O = p$1[d$1], G = O.getParent().id;
							typeof m$1[G] > "u" && (m$1[G] = []), m$1[G] = /* @__PURE__ */ m$1[G].concat(O);
						}
						Object.keys(m$1).forEach(function(F) {
							if (m$1[F].length > 1) {
								var I = "DummyCompound_" + F;
								s.memberGroups[I] = m$1[F];
								var Z = /* @__PURE__ */ m$1[F][0].getParent(), tt = new i(s.graphManager);
								tt.id = I, tt.paddingLeft = Z.paddingLeft || 0, tt.paddingRight = Z.paddingRight || 0, tt.paddingBottom = Z.paddingBottom || 0, tt.paddingTop = Z.paddingTop || 0, s.idToDummyNode[I] = tt;
								var P = /* @__PURE__ */ s.getGraphManager().add(/* @__PURE__ */ s.newGraph(), tt), _ = /* @__PURE__ */ Z.getChild();
								_.add(tt);
								for (var B = 0; B < m$1[F].length; B++) {
									var w = m$1[F][B];
									_.remove(w), P.add(w);
								}
							}
						});
					}, R.prototype.clearCompounds = function() {
						var s = {}, m$1 = {};
						this.performDFSOnCompounds();
						for (var p$1 = 0; p$1 < this.compoundOrder.length; p$1++) m$1[this.compoundOrder[p$1].id] = this.compoundOrder[p$1], s[this.compoundOrder[p$1].id] = /* @__PURE__ */ [].concat(/* @__PURE__ */ this.compoundOrder[p$1].getChild().getNodes()), this.graphManager.remove(/* @__PURE__ */ this.compoundOrder[p$1].getChild()), this.compoundOrder[p$1].child = null;
						this.graphManager.resetAllNodes(), this.tileCompoundMembers(s, m$1);
					}, R.prototype.clearZeroDegreeMembers = function() {
						var s = this, m$1 = this.tiledZeroDegreePack = [];
						Object.keys(this.memberGroups).forEach(function(p$1) {
							var E = s.idToDummyNode[p$1];
							if (m$1[p$1] = /* @__PURE__ */ s.tileNodes(s.memberGroups[p$1], E.paddingLeft + E.paddingRight), E.rect.width = m$1[p$1].width, E.rect.height = m$1[p$1].height, E.setCenter(m$1[p$1].centerX, m$1[p$1].centerY), E.labelMarginLeft = 0, E.labelMarginTop = 0, h.NODE_DIMENSIONS_INCLUDE_LABELS) {
								var d$1 = E.rect.width, O = E.rect.height;
								E.labelWidth && (E.labelPosHorizontal == "left" ? (E.rect.x -= E.labelWidth, E.setWidth(d$1 + E.labelWidth), E.labelMarginLeft = E.labelWidth) : E.labelPosHorizontal == "center" && E.labelWidth > d$1 ? (E.rect.x -= (E.labelWidth - d$1) / 2, E.setWidth(E.labelWidth), E.labelMarginLeft = (E.labelWidth - d$1) / 2) : E.labelPosHorizontal == "right" && E.setWidth(d$1 + E.labelWidth)), E.labelHeight && (E.labelPosVertical == "top" ? (E.rect.y -= E.labelHeight, E.setHeight(O + E.labelHeight), E.labelMarginTop = E.labelHeight) : E.labelPosVertical == "center" && E.labelHeight > O ? (E.rect.y -= (E.labelHeight - O) / 2, E.setHeight(E.labelHeight), E.labelMarginTop = (E.labelHeight - O) / 2) : E.labelPosVertical == "bottom" && E.setHeight(O + E.labelHeight));
							}
						});
					}, R.prototype.repopulateCompounds = function() {
						for (var s = this.compoundOrder.length - 1; s >= 0; s--) {
							var m$1 = this.compoundOrder[s], p$1 = m$1.id, E = m$1.paddingLeft, d$1 = m$1.paddingTop, O = m$1.labelMarginLeft, x = m$1.labelMarginTop;
							this.adjustLocations(this.tiledMemberPack[p$1], m$1.rect.x, m$1.rect.y, E, d$1, O, x);
						}
					}, R.prototype.repopulateZeroDegreeMembers = function() {
						var s = this, m$1 = this.tiledZeroDegreePack;
						Object.keys(m$1).forEach(function(p$1) {
							var E = s.idToDummyNode[p$1], d$1 = E.paddingLeft, O = E.paddingTop, x = E.labelMarginLeft, G = E.labelMarginTop;
							s.adjustLocations(m$1[p$1], E.rect.x, E.rect.y, d$1, O, x, G);
						});
					}, R.prototype.getToBeTiled = function(s) {
						var m$1 = s.id;
						if (this.toBeTiled[m$1] != null) return this.toBeTiled[m$1];
						var p$1 = /* @__PURE__ */ s.getChild();
						if (p$1 == null) return this.toBeTiled[m$1] = !1, !1;
						for (var E = /* @__PURE__ */ p$1.getNodes(), d$1 = 0; d$1 < E.length; d$1++) {
							var O = E[d$1];
							if (this.getNodeDegree(O) > 0) return this.toBeTiled[m$1] = !1, !1;
							if (O.getChild() == null) {
								this.toBeTiled[O.id] = !1;
								continue;
							}
							if (!this.getToBeTiled(O)) return this.toBeTiled[m$1] = !1, !1;
						}
						return this.toBeTiled[m$1] = !0, !0;
					}, R.prototype.getNodeDegree = function(s) {
						for (var m$1 = s.id, p$1 = /* @__PURE__ */ s.getEdges(), E = 0, d$1 = 0; d$1 < p$1.length; d$1++) {
							var O = p$1[d$1];
							O.getSource().id !== O.getTarget().id && (E = E + 1);
						}
						return E;
					}, R.prototype.getNodeDegreeWithChildren = function(s) {
						var m$1 = /* @__PURE__ */ this.getNodeDegree(s);
						if (s.getChild() == null) return m$1;
						for (var p$1 = /* @__PURE__ */ s.getChild().getNodes(), E = 0; E < p$1.length; E++) {
							var d$1 = p$1[E];
							m$1 += /* @__PURE__ */ this.getNodeDegreeWithChildren(d$1);
						}
						return m$1;
					}, R.prototype.performDFSOnCompounds = function() {
						this.compoundOrder = [], this.fillCompexOrderByDFS(/* @__PURE__ */ this.graphManager.getRoot().getNodes());
					}, R.prototype.fillCompexOrderByDFS = function(s) {
						for (var m$1 = 0; m$1 < s.length; m$1++) {
							var p$1 = s[m$1];
							p$1.getChild() != null && this.fillCompexOrderByDFS(/* @__PURE__ */ p$1.getChild().getNodes()), this.getToBeTiled(p$1) && this.compoundOrder.push(p$1);
						}
					}, R.prototype.adjustLocations = function(s, m$1, p$1, E, d$1, O, x) {
						m$1 += E + O, p$1 += d$1 + x;
						for (var G = m$1, F = 0; F < s.rows.length; F++) {
							var I = s.rows[F];
							m$1 = G;
							for (var Z = 0, tt = 0; tt < I.length; tt++) {
								var P = I[tt];
								P.rect.x = m$1, P.rect.y = p$1, m$1 += P.rect.width + s.horizontalPadding, P.rect.height > Z && (Z = P.rect.height);
							}
							p$1 += Z + s.verticalPadding;
						}
					}, R.prototype.tileCompoundMembers = function(s, m$1) {
						var p$1 = this;
						this.tiledMemberPack = [], Object.keys(s).forEach(function(E) {
							var d$1 = m$1[E];
							if (p$1.tiledMemberPack[E] = /* @__PURE__ */ p$1.tileNodes(s[E], d$1.paddingLeft + d$1.paddingRight), d$1.rect.width = p$1.tiledMemberPack[E].width, d$1.rect.height = p$1.tiledMemberPack[E].height, d$1.setCenter(p$1.tiledMemberPack[E].centerX, p$1.tiledMemberPack[E].centerY), d$1.labelMarginLeft = 0, d$1.labelMarginTop = 0, h.NODE_DIMENSIONS_INCLUDE_LABELS) {
								var O = d$1.rect.width, x = d$1.rect.height;
								d$1.labelWidth && (d$1.labelPosHorizontal == "left" ? (d$1.rect.x -= d$1.labelWidth, d$1.setWidth(O + d$1.labelWidth), d$1.labelMarginLeft = d$1.labelWidth) : d$1.labelPosHorizontal == "center" && d$1.labelWidth > O ? (d$1.rect.x -= (d$1.labelWidth - O) / 2, d$1.setWidth(d$1.labelWidth), d$1.labelMarginLeft = (d$1.labelWidth - O) / 2) : d$1.labelPosHorizontal == "right" && d$1.setWidth(O + d$1.labelWidth)), d$1.labelHeight && (d$1.labelPosVertical == "top" ? (d$1.rect.y -= d$1.labelHeight, d$1.setHeight(x + d$1.labelHeight), d$1.labelMarginTop = d$1.labelHeight) : d$1.labelPosVertical == "center" && d$1.labelHeight > x ? (d$1.rect.y -= (d$1.labelHeight - x) / 2, d$1.setHeight(d$1.labelHeight), d$1.labelMarginTop = (d$1.labelHeight - x) / 2) : d$1.labelPosVertical == "bottom" && d$1.setHeight(x + d$1.labelHeight));
							}
						});
					}, R.prototype.tileNodes = function(s, m$1) {
						var p$1 = /* @__PURE__ */ this.tileNodesByFavoringDim(s, m$1, !0), E = /* @__PURE__ */ this.tileNodesByFavoringDim(s, m$1, !1), d$1 = /* @__PURE__ */ this.getOrgRatio(p$1), O = /* @__PURE__ */ this.getOrgRatio(E), x;
						return O < d$1 ? x = E : x = p$1, x;
					}, R.prototype.getOrgRatio = function(s) {
						var E = s.width / s.height;
						return E < 1 && (E = 1 / E), E;
					}, R.prototype.calcIdealRowWidth = function(s, m$1) {
						var p$1 = h.TILING_PADDING_VERTICAL, E = h.TILING_PADDING_HORIZONTAL, d$1 = s.length, O = 0, x = 0, G = 0;
						s.forEach(function(B) {
							O += /* @__PURE__ */ B.getWidth(), x += /* @__PURE__ */ B.getHeight(), B.getWidth() > G && (G = /* @__PURE__ */ B.getWidth());
						});
						var F = O / d$1, I = x / d$1, Z = Math.pow(p$1 - E, 2) + 4 * (F + E) * (I + p$1) * d$1, tt = (E - p$1 + Math.sqrt(Z)) / (2 * (F + E)), P;
						m$1 ? (P = /* @__PURE__ */ Math.ceil(tt), P == tt && P++) : P = /* @__PURE__ */ Math.floor(tt);
						var _ = P * (F + E) - E;
						return G > _ && (_ = G), _ += E * 2, _;
					}, R.prototype.tileNodesByFavoringDim = function(s, m$1, p$1) {
						var E = h.TILING_PADDING_VERTICAL, d$1 = h.TILING_PADDING_HORIZONTAL, O = h.TILING_COMPARE_BY, x = {
							rows: [],
							rowWidth: [],
							rowHeight: [],
							width: 0,
							height: m$1,
							verticalPadding: E,
							horizontalPadding: d$1,
							centerX: 0,
							centerY: 0
						};
						O && (x.idealRowWidth = /* @__PURE__ */ this.calcIdealRowWidth(s, p$1));
						var G = /* @__PURE__ */ m(function(w) {
							return w.rect.width * w.rect.height;
						}, "getNodeArea"), F = /* @__PURE__ */ m(function(w, U) {
							return G(U) - G(w);
						}, "areaCompareFcn");
						s.sort(function(B, w) {
							var U = F;
							return x.idealRowWidth ? (U = O, U(B.id, w.id)) : U(B, w);
						});
						for (var I = 0, Z = 0, tt = 0; tt < s.length; tt++) {
							var P = s[tt];
							I += /* @__PURE__ */ P.getCenterX(), Z += /* @__PURE__ */ P.getCenterY();
						}
						x.centerX = I / s.length, x.centerY = Z / s.length;
						for (var tt = 0; tt < s.length; tt++) {
							var P = s[tt];
							if (x.rows.length == 0) this.insertNodeToRow(x, P, 0, m$1);
							else if (this.canAddHorizontal(x, P.rect.width, P.rect.height)) {
								var _ = x.rows.length - 1;
								x.idealRowWidth || (_ = /* @__PURE__ */ this.getShortestRowIndex(x)), this.insertNodeToRow(x, P, _, m$1);
							} else this.insertNodeToRow(x, P, x.rows.length, m$1);
							this.shiftToLastRow(x);
						}
						return x;
					}, R.prototype.insertNodeToRow = function(s, m$1, p$1, E) {
						var d$1 = E;
						if (p$1 == s.rows.length) s.rows.push([]), s.rowWidth.push(d$1), s.rowHeight.push(0);
						var x = s.rowWidth[p$1] + m$1.rect.width;
						s.rows[p$1].length > 0 && (x += s.horizontalPadding), s.rowWidth[p$1] = x, s.width < x && (s.width = x);
						var G = m$1.rect.height;
						p$1 > 0 && (G += s.verticalPadding);
						var F = 0;
						G > s.rowHeight[p$1] && (F = s.rowHeight[p$1], s.rowHeight[p$1] = G, F = s.rowHeight[p$1] - F), s.height += F, s.rows[p$1].push(m$1);
					}, R.prototype.getShortestRowIndex = function(s) {
						for (var m$1 = -1, p$1 = Number.MAX_VALUE, E = 0; E < s.rows.length; E++) s.rowWidth[E] < p$1 && (m$1 = E, p$1 = s.rowWidth[E]);
						return m$1;
					}, R.prototype.getLongestRowIndex = function(s) {
						for (var m$1 = -1, p$1 = Number.MIN_VALUE, E = 0; E < s.rows.length; E++) s.rowWidth[E] > p$1 && (m$1 = E, p$1 = s.rowWidth[E]);
						return m$1;
					}, R.prototype.canAddHorizontal = function(s, m$1, p$1) {
						if (s.idealRowWidth) {
							var E = s.rows.length - 1;
							return s.rowWidth[E] + m$1 + s.horizontalPadding <= s.idealRowWidth;
						}
						var O = /* @__PURE__ */ this.getShortestRowIndex(s);
						if (O < 0) return !0;
						var x = s.rowWidth[O];
						if (x + s.horizontalPadding + m$1 <= s.width) return !0;
						var G = 0;
						s.rowHeight[O] < p$1 && O > 0 && (G = p$1 + s.verticalPadding - s.rowHeight[O]);
						var F;
						s.width - x >= m$1 + s.horizontalPadding ? F = (s.height + G) / (x + m$1 + s.horizontalPadding) : F = (s.height + G) / s.width, G = p$1 + s.verticalPadding;
						var I;
						return s.width < m$1 ? I = (s.height + G) / m$1 : I = (s.height + G) / s.width, I < 1 && (I = 1 / I), F < 1 && (F = 1 / F), F < I;
					}, R.prototype.shiftToLastRow = function(s) {
						var m$1 = /* @__PURE__ */ this.getLongestRowIndex(s), p$1 = s.rowWidth.length - 1, E = s.rows[m$1], d$1 = E[E.length - 1], O = d$1.width + s.horizontalPadding;
						if (s.width - s.rowWidth[p$1] > O && m$1 != p$1) {
							E.splice(-1, 1), s.rows[p$1].push(d$1), s.rowWidth[m$1] = s.rowWidth[m$1] - O, s.rowWidth[p$1] = s.rowWidth[p$1] + O, s.width = s.rowWidth[instance.getLongestRowIndex(s)];
							for (var x = Number.MIN_VALUE, G = 0; G < E.length; G++) E[G].height > x && (x = E[G].height);
							m$1 > 0 && (x += s.verticalPadding);
							var F = s.rowHeight[m$1] + s.rowHeight[p$1];
							s.rowHeight[m$1] = x, s.rowHeight[p$1] < d$1.height + s.verticalPadding && (s.rowHeight[p$1] = d$1.height + s.verticalPadding);
							var I = s.rowHeight[m$1] + s.rowHeight[p$1];
							s.height += I - F, this.shiftToLastRow(s);
						}
					}, R.prototype.tilingPreLayout = function() {
						h.TILE && (this.groupZeroDegreeMembers(), this.clearCompounds(), this.clearZeroDegreeMembers());
					}, R.prototype.tilingPostLayout = function() {
						h.TILE && (this.repopulateZeroDegreeMembers(), this.repopulateCompounds());
					}, R.prototype.reduceTrees = function() {
						for (var s = [], m$1 = !0, p$1; m$1;) {
							var E = /* @__PURE__ */ this.graphManager.getAllNodes(), d$1 = [];
							m$1 = !1;
							for (var O = 0; O < E.length; O++) if (p$1 = E[O], p$1.getEdges().length == 1 && !p$1.getEdges()[0].isInterGraph && p$1.getChild() == null) {
								if (h.PURE_INCREMENTAL) {
									var x = /* @__PURE__ */ p$1.getEdges()[0].getOtherEnd(p$1), G = new N(p$1.getCenterX() - x.getCenterX(), p$1.getCenterY() - x.getCenterY());
									d$1.push([
										p$1,
										p$1.getEdges()[0],
										/* @__PURE__ */ p$1.getOwner(),
										G
									]);
								} else d$1.push([
									p$1,
									p$1.getEdges()[0],
									/* @__PURE__ */ p$1.getOwner()
								]);
								m$1 = !0;
							}
							if (m$1 == !0) {
								for (var F = [], I = 0; I < d$1.length; I++) d$1[I][0].getEdges().length == 1 && (F.push(d$1[I]), d$1[I][0].getOwner().remove(d$1[I][0]));
								s.push(F), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
							}
						}
						this.prunedNodesAll = s;
					}, R.prototype.growTree = function(s) {
						for (var p$1 = s[s.length - 1], E, d$1 = 0; d$1 < p$1.length; d$1++) E = p$1[d$1], this.findPlaceforPrunedNode(E), E[2].add(E[0]), E[2].add(E[1], E[1].source, E[1].target);
						s.splice(s.length - 1, 1), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
					}, R.prototype.findPlaceforPrunedNode = function(s) {
						var m$1, p$1, E = s[0];
						if (E == s[1].source ? p$1 = s[1].target : p$1 = s[1].source, h.PURE_INCREMENTAL) E.setCenter(p$1.getCenterX() + s[3].getWidth(), p$1.getCenterY() + s[3].getHeight());
						else {
							var d$1 = p$1.startX, O = p$1.finishX, x = p$1.startY, G = p$1.finishY, P = [
								0,
								0,
								0,
								0
							];
							if (x > 0) for (var _ = d$1; _ <= O; _++) P[0] += this.grid[_][x - 1].length + this.grid[_][x].length - 1;
							if (O < this.grid.length - 1) for (var _ = x; _ <= G; _++) P[1] += this.grid[O + 1][_].length + this.grid[O][_].length - 1;
							if (G < this.grid[0].length - 1) for (var _ = d$1; _ <= O; _++) P[2] += this.grid[_][G + 1].length + this.grid[_][G].length - 1;
							if (d$1 > 0) for (var _ = x; _ <= G; _++) P[3] += this.grid[d$1 - 1][_].length + this.grid[d$1][_].length - 1;
							for (var B = M.MAX_VALUE, w, U, H = 0; H < P.length; H++) P[H] < B ? (B = P[H], w = 1, U = H) : P[H] == B && w++;
							if (w == 3 && B == 0) P[0] == 0 && P[1] == 0 && P[2] == 0 ? m$1 = 1 : P[0] == 0 && P[1] == 0 && P[3] == 0 ? m$1 = 0 : P[0] == 0 && P[2] == 0 && P[3] == 0 ? m$1 = 3 : P[1] == 0 && P[2] == 0 && P[3] == 0 && (m$1 = 2);
							else if (w == 2 && B == 0) {
								var K = /* @__PURE__ */ Math.floor(Math.random() * 2);
								P[0] == 0 && P[1] == 0 ? K == 0 ? m$1 = 0 : m$1 = 1 : P[0] == 0 && P[2] == 0 ? K == 0 ? m$1 = 0 : m$1 = 2 : P[0] == 0 && P[3] == 0 ? K == 0 ? m$1 = 0 : m$1 = 3 : P[1] == 0 && P[2] == 0 ? K == 0 ? m$1 = 1 : m$1 = 2 : P[1] == 0 && P[3] == 0 ? K == 0 ? m$1 = 1 : m$1 = 3 : K == 0 ? m$1 = 2 : m$1 = 3;
							} else if (w == 4 && B == 0) {
								var K = /* @__PURE__ */ Math.floor(Math.random() * 4);
								m$1 = K;
							} else m$1 = U;
							m$1 == 0 ? E.setCenter(/* @__PURE__ */ p$1.getCenterX(), p$1.getCenterY() - p$1.getHeight() / 2 - l.DEFAULT_EDGE_LENGTH - E.getHeight() / 2) : m$1 == 1 ? E.setCenter(p$1.getCenterX() + p$1.getWidth() / 2 + l.DEFAULT_EDGE_LENGTH + E.getWidth() / 2, /* @__PURE__ */ p$1.getCenterY()) : m$1 == 2 ? E.setCenter(/* @__PURE__ */ p$1.getCenterX(), p$1.getCenterY() + p$1.getHeight() / 2 + l.DEFAULT_EDGE_LENGTH + E.getHeight() / 2) : E.setCenter(p$1.getCenterX() - p$1.getWidth() / 2 - l.DEFAULT_EDGE_LENGTH - E.getWidth() / 2, /* @__PURE__ */ p$1.getCenterY());
						}
					}, n$1.exports = R;
				},
				991: (n$1, r, a) => {
					var c$1 = a(551).FDLayoutNode, t = a(551).IMath;
					function u(e, h, f, l) {
						c$1.call(this, e, h, f, l);
					}
					m(u, "CoSENode"), u.prototype = /* @__PURE__ */ Object.create(c$1.prototype);
					for (var i in c$1) u[i] = c$1[i];
					u.prototype.calculateDisplacement = function() {
						var e = /* @__PURE__ */ this.graphManager.getLayout();
						this.getChild() != null && this.fixedNodeWeight ? (this.displacementX += e.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.fixedNodeWeight, this.displacementY += e.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.fixedNodeWeight) : (this.displacementX += e.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.noOfChildren, this.displacementY += e.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.noOfChildren), Math.abs(this.displacementX) > e.coolingFactor * e.maxNodeDisplacement && (this.displacementX = e.coolingFactor * e.maxNodeDisplacement * t.sign(this.displacementX)), Math.abs(this.displacementY) > e.coolingFactor * e.maxNodeDisplacement && (this.displacementY = e.coolingFactor * e.maxNodeDisplacement * t.sign(this.displacementY)), this.child && this.child.getNodes().length > 0 && this.propogateDisplacementToChildren(this.displacementX, this.displacementY);
					}, u.prototype.propogateDisplacementToChildren = function(e, h) {
						for (var f = /* @__PURE__ */ this.getChild().getNodes(), l, A = 0; A < f.length; A++) l = f[A], l.getChild() == null ? (l.displacementX += e, l.displacementY += h) : l.propogateDisplacementToChildren(e, h);
					}, u.prototype.move = function() {
						var e = /* @__PURE__ */ this.graphManager.getLayout();
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
					}, n$1.exports = u;
				},
				902: (n$1, r, a) => {
					function c$1(f) {
						if (Array.isArray(f)) {
							for (var l = 0, A = /* @__PURE__ */ Array(f.length); l < f.length; l++) A[l] = f[l];
							return A;
						} else return Array.from(f);
					}
					m(c$1, "_toConsumableArray");
					var t = /* @__PURE__ */ a(806), u = a(551).LinkedList, i = a(551).Matrix, e = a(551).SVD;
					function h() {}
					m(h, "ConstraintHandler"), h.handleConstraints = function(f) {
						var l = {};
						l.fixedNodeConstraint = f.constraints.fixedNodeConstraint, l.alignmentConstraint = f.constraints.alignmentConstraint, l.relativePlacementConstraint = f.constraints.relativePlacementConstraint;
						for (var A = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), v = [], N = [], S = /* @__PURE__ */ f.getAllNodes(), M = 0, b = 0; b < S.length; b++) {
							var $ = S[b];
							$.getChild() ?? (y.set($.id, M++), v.push(/* @__PURE__ */ $.getCenterX()), N.push(/* @__PURE__ */ $.getCenterY()), A.set($.id, $));
						}
						l.relativePlacementConstraint && l.relativePlacementConstraint.forEach(function(Y) {
							!Y.gap && Y.gap != 0 && (Y.left ? Y.gap = t.DEFAULT_EDGE_LENGTH + A.get(Y.left).getWidth() / 2 + A.get(Y.right).getWidth() / 2 : Y.gap = t.DEFAULT_EDGE_LENGTH + A.get(Y.top).getHeight() / 2 + A.get(Y.bottom).getHeight() / 2);
						});
						var X = /* @__PURE__ */ m(function(W, V) {
							return {
								x: W.x - V.x,
								y: W.y - V.y
							};
						}, "calculatePositionDiff"), et = /* @__PURE__ */ m(function(W) {
							var V = 0, z = 0;
							return W.forEach(function(k) {
								V += v[y.get(k)], z += N[y.get(k)];
							}), {
								x: V / W.size,
								y: z / W.size
							};
						}, "calculateAvgPosition"), R = /* @__PURE__ */ m(function(W, V, z, k, j) {
							function gt(st, nt) {
								var dt = new Set(st), at = !0, ct = !1, bt = void 0;
								try {
									for (var Ot$1 = /* @__PURE__ */ nt[Symbol.iterator](), Vt; !(at = (Vt = /* @__PURE__ */ Ot$1.next()).done); at = !0) {
										var xt = Vt.value;
										dt.add(xt);
									}
								} catch (At) {
									ct = !0, bt = At;
								} finally {
									try {
										!at && Ot$1.return && Ot$1.return();
									} finally {
										if (ct) throw bt;
									}
								}
								return dt;
							}
							m(gt, "setUnion");
							var ft = /* @__PURE__ */ new Map();
							W.forEach(function(st, nt) {
								ft.set(nt, 0);
							}), W.forEach(function(st, nt) {
								st.forEach(function(dt) {
									ft.set(dt.id, ft.get(dt.id) + 1);
								});
							});
							var q$1 = /* @__PURE__ */ new Map(), lt = /* @__PURE__ */ new Map(), ut$1 = new u();
							ft.forEach(function(st, nt) {
								st == 0 ? (ut$1.push(nt), z || (V == "horizontal" ? q$1.set(nt, y.has(nt) ? v[y.get(nt)] : k.get(nt)) : q$1.set(nt, y.has(nt) ? N[y.get(nt)] : k.get(nt)))) : q$1.set(nt, Number.NEGATIVE_INFINITY), z && lt.set(nt, new Set([nt]));
							}), z && j.forEach(function(st) {
								var nt = [];
								if (st.forEach(function(ct) {
									z.has(ct) && nt.push(ct);
								}), nt.length > 0) {
									var dt = 0;
									nt.forEach(function(ct) {
										V == "horizontal" ? (q$1.set(ct, y.has(ct) ? v[y.get(ct)] : k.get(ct)), dt += /* @__PURE__ */ q$1.get(ct)) : (q$1.set(ct, y.has(ct) ? N[y.get(ct)] : k.get(ct)), dt += /* @__PURE__ */ q$1.get(ct));
									}), dt = dt / nt.length, st.forEach(function(ct) {
										z.has(ct) || q$1.set(ct, dt);
									});
								} else {
									var at = 0;
									st.forEach(function(ct) {
										V == "horizontal" ? at += y.has(ct) ? v[y.get(ct)] : k.get(ct) : at += y.has(ct) ? N[y.get(ct)] : k.get(ct);
									}), at = at / st.length, st.forEach(function(ct) {
										q$1.set(ct, at);
									});
								}
							});
							for (var it = /* @__PURE__ */ m(function() {
								var nt = /* @__PURE__ */ ut$1.shift();
								W.get(nt).forEach(function(at) {
									if (q$1.get(at.id) < q$1.get(nt) + at.gap) if (z && z.has(at.id)) {
										var ct = void 0;
										if (V == "horizontal" ? ct = y.has(at.id) ? v[y.get(at.id)] : k.get(at.id) : ct = y.has(at.id) ? N[y.get(at.id)] : k.get(at.id), q$1.set(at.id, ct), ct < q$1.get(nt) + at.gap) {
											var bt = q$1.get(nt) + at.gap - ct;
											lt.get(nt).forEach(function(Ot$1) {
												q$1.set(Ot$1, q$1.get(Ot$1) - bt);
											});
										}
									} else q$1.set(at.id, q$1.get(nt) + at.gap);
									ft.set(at.id, ft.get(at.id) - 1), ft.get(at.id) == 0 && ut$1.push(at.id), z && lt.set(at.id, /* @__PURE__ */ gt(/* @__PURE__ */ lt.get(nt), /* @__PURE__ */ lt.get(at.id)));
								});
							}, "_loop"); ut$1.length != 0;) it();
							if (z) {
								var pt$1 = /* @__PURE__ */ new Set();
								W.forEach(function(st, nt) {
									st.length == 0 && pt$1.add(nt);
								});
								var Dt = [];
								lt.forEach(function(st, nt) {
									if (pt$1.has(nt)) {
										var dt = !1, at = !0, ct = !1, bt = void 0;
										try {
											for (var Ot$1 = /* @__PURE__ */ st[Symbol.iterator](), Vt; !(at = (Vt = /* @__PURE__ */ Ot$1.next()).done); at = !0) {
												var xt = Vt.value;
												z.has(xt) && (dt = !0);
											}
										} catch (It) {
											ct = !0, bt = It;
										} finally {
											try {
												!at && Ot$1.return && Ot$1.return();
											} finally {
												if (ct) throw bt;
											}
										}
										if (!dt) {
											var At = !1, $t = void 0;
											Dt.forEach(function(It, Xt) {
												It.has([].concat(/* @__PURE__ */ c$1(st))[0]) && (At = !0, $t = Xt);
											}), At ? st.forEach(function(It) {
												Dt[$t].add(It);
											}) : Dt.push(new Set(st));
										}
									}
								}), Dt.forEach(function(st, nt) {
									var dt = Number.POSITIVE_INFINITY, at = Number.POSITIVE_INFINITY, ct = Number.NEGATIVE_INFINITY, bt = Number.NEGATIVE_INFINITY, Ot$1 = !0, Vt = !1, xt = void 0;
									try {
										for (var At = /* @__PURE__ */ st[Symbol.iterator](), $t; !(Ot$1 = ($t = /* @__PURE__ */ At.next()).done); Ot$1 = !0) {
											var It = $t.value, Xt = void 0;
											V == "horizontal" ? Xt = y.has(It) ? v[y.get(It)] : k.get(It) : Xt = y.has(It) ? N[y.get(It)] : k.get(It);
											var Bt = /* @__PURE__ */ q$1.get(It);
											Xt < dt && (dt = Xt), Xt > ct && (ct = Xt), Bt < at && (at = Bt), Bt > bt && (bt = Bt);
										}
									} catch (ee) {
										Vt = !0, xt = ee;
									} finally {
										try {
											!Ot$1 && At.return && At.return();
										} finally {
											if (Vt) throw xt;
										}
									}
									var ve$1 = (dt + ct) / 2 - (at + bt) / 2, qt = !0, jt = !1, _t = void 0;
									try {
										for (var Qt = /* @__PURE__ */ st[Symbol.iterator](), ce; !(qt = (ce = /* @__PURE__ */ Qt.next()).done); qt = !0) {
											var te = ce.value;
											q$1.set(te, q$1.get(te) + ve$1);
										}
									} catch (ee) {
										jt = !0, _t = ee;
									} finally {
										try {
											!qt && Qt.return && Qt.return();
										} finally {
											if (jt) throw _t;
										}
									}
								});
							}
							return q$1;
						}, "findAppropriatePositionForRelativePlacement"), J = /* @__PURE__ */ m(function(W) {
							var V = 0, z = 0, k = 0, j = 0;
							if (W.forEach(function(lt) {
								lt.left ? v[y.get(lt.left)] - v[y.get(lt.right)] >= 0 ? V++ : z++ : N[y.get(lt.top)] - N[y.get(lt.bottom)] >= 0 ? k++ : j++;
							}), V > z && k > j) for (var gt = 0; gt < y.size; gt++) v[gt] = -1 * v[gt], N[gt] = -1 * N[gt];
							else if (V > z) for (var ft = 0; ft < y.size; ft++) v[ft] = -1 * v[ft];
							else if (k > j) for (var q$1 = 0; q$1 < y.size; q$1++) N[q$1] = -1 * N[q$1];
						}, "applyReflectionForRelativePlacement"), s = /* @__PURE__ */ m(function(W) {
							var V = [], z = new u(), k = /* @__PURE__ */ new Set(), j = 0;
							return W.forEach(function(gt, ft) {
								if (!k.has(ft)) {
									V[j] = [];
									var q$1 = ft;
									for (z.push(q$1), k.add(q$1), V[j].push(q$1); z.length != 0;) {
										q$1 = /* @__PURE__ */ z.shift();
										W.get(q$1).forEach(function(ut$1) {
											k.has(ut$1.id) || (z.push(ut$1.id), k.add(ut$1.id), V[j].push(ut$1.id));
										});
									}
									j++;
								}
							}), V;
						}, "findComponents"), m$1 = /* @__PURE__ */ m(function(W) {
							var V = /* @__PURE__ */ new Map();
							return W.forEach(function(z, k) {
								V.set(k, []);
							}), W.forEach(function(z, k) {
								z.forEach(function(j) {
									V.get(k).push(j), V.get(j.id).push({
										id: k,
										gap: j.gap,
										direction: j.direction
									});
								});
							}), V;
						}, "dagToUndirected"), p$1 = /* @__PURE__ */ m(function(W) {
							var V = /* @__PURE__ */ new Map();
							return W.forEach(function(z, k) {
								V.set(k, []);
							}), W.forEach(function(z, k) {
								z.forEach(function(j) {
									V.get(j.id).push({
										id: k,
										gap: j.gap,
										direction: j.direction
									});
								});
							}), V;
						}, "dagToReversed"), E = [], d$1 = [], O = !1, x = !1, G = /* @__PURE__ */ new Set(), F = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), Z = [];
						if (l.fixedNodeConstraint && l.fixedNodeConstraint.forEach(function(Y) {
							G.add(Y.nodeId);
						}), l.relativePlacementConstraint && (l.relativePlacementConstraint.forEach(function(Y) {
							Y.left ? (F.has(Y.left) ? F.get(Y.left).push({
								id: Y.right,
								gap: Y.gap,
								direction: "horizontal"
							}) : F.set(Y.left, [{
								id: Y.right,
								gap: Y.gap,
								direction: "horizontal"
							}]), F.has(Y.right) || F.set(Y.right, [])) : (F.has(Y.top) ? F.get(Y.top).push({
								id: Y.bottom,
								gap: Y.gap,
								direction: "vertical"
							}) : F.set(Y.top, [{
								id: Y.bottom,
								gap: Y.gap,
								direction: "vertical"
							}]), F.has(Y.bottom) || F.set(Y.bottom, []));
						}), I = /* @__PURE__ */ m$1(F), Z = /* @__PURE__ */ s(I)), t.TRANSFORM_ON_CONSTRAINT_HANDLING) {
							if (l.fixedNodeConstraint && l.fixedNodeConstraint.length > 1) l.fixedNodeConstraint.forEach(function(Y, W) {
								E[W] = [Y.position.x, Y.position.y], d$1[W] = [v[y.get(Y.nodeId)], N[y.get(Y.nodeId)]];
							}), O = !0;
							else if (l.alignmentConstraint) (function() {
								var Y = 0;
								if (l.alignmentConstraint.vertical) {
									for (var W = l.alignmentConstraint.vertical, V = /* @__PURE__ */ m(function(q$1) {
										var lt = /* @__PURE__ */ new Set();
										W[q$1].forEach(function(pt$1) {
											lt.add(pt$1);
										});
										var ut$1 = new Set([].concat(/* @__PURE__ */ c$1(lt)).filter(function(pt$1) {
											return G.has(pt$1);
										})), it = void 0;
										ut$1.size > 0 ? it = v[y.get(ut$1.values().next().value)] : it = et(lt).x, W[q$1].forEach(function(pt$1) {
											E[Y] = [it, N[y.get(pt$1)]], d$1[Y] = [v[y.get(pt$1)], N[y.get(pt$1)]], Y++;
										});
									}, "_loop2"), z = 0; z < W.length; z++) V(z);
									O = !0;
								}
								if (l.alignmentConstraint.horizontal) {
									for (var k = l.alignmentConstraint.horizontal, j = /* @__PURE__ */ m(function(q$1) {
										var lt = /* @__PURE__ */ new Set();
										k[q$1].forEach(function(pt$1) {
											lt.add(pt$1);
										});
										var ut$1 = new Set([].concat(/* @__PURE__ */ c$1(lt)).filter(function(pt$1) {
											return G.has(pt$1);
										})), it = void 0;
										ut$1.size > 0 ? it = v[y.get(ut$1.values().next().value)] : it = et(lt).y, k[q$1].forEach(function(pt$1) {
											E[Y] = [v[y.get(pt$1)], it], d$1[Y] = [v[y.get(pt$1)], N[y.get(pt$1)]], Y++;
										});
									}, "_loop3"), gt = 0; gt < k.length; gt++) j(gt);
									O = !0;
								}
								l.relativePlacementConstraint && (x = !0);
							})();
							else if (l.relativePlacementConstraint) {
								for (var tt = 0, P = 0, _ = 0; _ < Z.length; _++) Z[_].length > tt && (tt = Z[_].length, P = _);
								if (tt < I.size / 2) J(l.relativePlacementConstraint), O = !1, x = !1;
								else {
									var B = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), U = [];
									Z[P].forEach(function(Y) {
										F.get(Y).forEach(function(W) {
											W.direction == "horizontal" ? (B.has(Y) ? B.get(Y).push(W) : B.set(Y, [W]), B.has(W.id) || B.set(W.id, []), U.push({
												left: Y,
												right: W.id
											})) : (w.has(Y) ? w.get(Y).push(W) : w.set(Y, [W]), w.has(W.id) || w.set(W.id, []), U.push({
												top: Y,
												bottom: W.id
											}));
										});
									}), J(U), x = !1;
									var H = /* @__PURE__ */ R(B, "horizontal"), K = /* @__PURE__ */ R(w, "vertical");
									Z[P].forEach(function(Y, W) {
										d$1[W] = [v[y.get(Y)], N[y.get(Y)]], E[W] = [], H.has(Y) ? E[W][0] = /* @__PURE__ */ H.get(Y) : E[W][0] = v[y.get(Y)], K.has(Y) ? E[W][1] = /* @__PURE__ */ K.get(Y) : E[W][1] = N[y.get(Y)];
									}), O = !0;
								}
							}
							if (O) {
								for (var ht = void 0, Nt = /* @__PURE__ */ i.transpose(E), St = /* @__PURE__ */ i.transpose(d$1), Q = 0; Q < Nt.length; Q++) Nt[Q] = /* @__PURE__ */ i.multGamma(Nt[Q]), St[Q] = /* @__PURE__ */ i.multGamma(St[Q]);
								var Yt = /* @__PURE__ */ i.multMat(Nt, /* @__PURE__ */ i.transpose(St)), Mt = /* @__PURE__ */ e.svd(Yt);
								ht = /* @__PURE__ */ i.multMat(Mt.V, /* @__PURE__ */ i.transpose(Mt.U));
								for (var ot$1 = 0; ot$1 < y.size; ot$1++) {
									var rt = [v[ot$1], N[ot$1]], vt = [ht[0][0], ht[1][0]], mt = [ht[0][1], ht[1][1]];
									v[ot$1] = /* @__PURE__ */ i.dotProduct(rt, vt), N[ot$1] = /* @__PURE__ */ i.dotProduct(rt, mt);
								}
								x && J(l.relativePlacementConstraint);
							}
						}
						if (t.ENFORCE_CONSTRAINTS) {
							if (l.fixedNodeConstraint && l.fixedNodeConstraint.length > 0) {
								var Lt$1 = {
									x: 0,
									y: 0
								};
								l.fixedNodeConstraint.forEach(function(Y, W) {
									var V = {
										x: v[y.get(Y.nodeId)],
										y: N[y.get(Y.nodeId)]
									}, z = Y.position, k = /* @__PURE__ */ X(z, V);
									Lt$1.x += k.x, Lt$1.y += k.y;
								}), Lt$1.x /= l.fixedNodeConstraint.length, Lt$1.y /= l.fixedNodeConstraint.length, v.forEach(function(Y, W) {
									v[W] += Lt$1.x;
								}), N.forEach(function(Y, W) {
									N[W] += Lt$1.y;
								}), l.fixedNodeConstraint.forEach(function(Y) {
									v[y.get(Y.nodeId)] = Y.position.x, N[y.get(Y.nodeId)] = Y.position.y;
								});
							}
							if (l.alignmentConstraint) {
								if (l.alignmentConstraint.vertical) for (var Et = l.alignmentConstraint.vertical, Tt = /* @__PURE__ */ m(function(W) {
									var V = /* @__PURE__ */ new Set();
									Et[W].forEach(function(j) {
										V.add(j);
									});
									var z = new Set([].concat(/* @__PURE__ */ c$1(V)).filter(function(j) {
										return G.has(j);
									})), k = void 0;
									z.size > 0 ? k = v[y.get(z.values().next().value)] : k = et(V).x, V.forEach(function(j) {
										G.has(j) || (v[y.get(j)] = k);
									});
								}, "_loop4"), wt = 0; wt < Et.length; wt++) Tt(wt);
								if (l.alignmentConstraint.horizontal) for (var Rt = l.alignmentConstraint.horizontal, Wt = /* @__PURE__ */ m(function(W) {
									var V = /* @__PURE__ */ new Set();
									Rt[W].forEach(function(j) {
										V.add(j);
									});
									var z = new Set([].concat(/* @__PURE__ */ c$1(V)).filter(function(j) {
										return G.has(j);
									})), k = void 0;
									z.size > 0 ? k = N[y.get(z.values().next().value)] : k = et(V).y, V.forEach(function(j) {
										G.has(j) || (N[y.get(j)] = k);
									});
								}, "_loop5"), Pt = 0; Pt < Rt.length; Pt++) Wt(Pt);
							}
							l.relativePlacementConstraint && function() {
								var Y = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), gt = /* @__PURE__ */ new Set(), ft = /* @__PURE__ */ new Set();
								if (G.forEach(function(Gt) {
									gt.add(Gt), ft.add(Gt);
								}), l.alignmentConstraint) {
									if (l.alignmentConstraint.vertical) for (var q$1 = l.alignmentConstraint.vertical, lt = /* @__PURE__ */ m(function(yt) {
										V.set("dummy" + yt, []), q$1[yt].forEach(function(Ct) {
											Y.set(Ct, "dummy" + yt), V.get("dummy" + yt).push(Ct), G.has(Ct) && gt.add("dummy" + yt);
										}), k.set("dummy" + yt, v[y.get(q$1[yt][0])]);
									}, "_loop6"), ut$1 = 0; ut$1 < q$1.length; ut$1++) lt(ut$1);
									if (l.alignmentConstraint.horizontal) for (var it = l.alignmentConstraint.horizontal, pt$1 = /* @__PURE__ */ m(function(yt) {
										z.set("dummy" + yt, []), it[yt].forEach(function(Ct) {
											W.set(Ct, "dummy" + yt), z.get("dummy" + yt).push(Ct), G.has(Ct) && ft.add("dummy" + yt);
										}), j.set("dummy" + yt, N[y.get(it[yt][0])]);
									}, "_loop7"), Dt = 0; Dt < it.length; Dt++) pt$1(Dt);
								}
								var st = /* @__PURE__ */ new Map(), nt = /* @__PURE__ */ new Map(), dt = /* @__PURE__ */ m(function(yt) {
									F.get(yt).forEach(function(Ct) {
										var Zt = void 0, zt = void 0;
										Ct.direction == "horizontal" ? (Zt = Y.get(yt) ? Y.get(yt) : yt, Y.get(Ct.id) ? zt = {
											id: /* @__PURE__ */ Y.get(Ct.id),
											gap: Ct.gap,
											direction: Ct.direction
										} : zt = Ct, st.has(Zt) ? st.get(Zt).push(zt) : st.set(Zt, [zt]), st.has(zt.id) || st.set(zt.id, [])) : (Zt = W.get(yt) ? W.get(yt) : yt, W.get(Ct.id) ? zt = {
											id: /* @__PURE__ */ W.get(Ct.id),
											gap: Ct.gap,
											direction: Ct.direction
										} : zt = Ct, nt.has(Zt) ? nt.get(Zt).push(zt) : nt.set(Zt, [zt]), nt.has(zt.id) || nt.set(zt.id, []));
									});
								}, "_loop8"), at = !0, ct = !1, bt = void 0;
								try {
									for (var Ot$1 = /* @__PURE__ */ F.keys()[Symbol.iterator](), Vt; !(at = (Vt = /* @__PURE__ */ Ot$1.next()).done); at = !0) {
										var xt = Vt.value;
										dt(xt);
									}
								} catch (Gt) {
									ct = !0, bt = Gt;
								} finally {
									try {
										!at && Ot$1.return && Ot$1.return();
									} finally {
										if (ct) throw bt;
									}
								}
								var At = /* @__PURE__ */ m$1(st), $t = /* @__PURE__ */ m$1(nt), It = /* @__PURE__ */ s(At), Xt = /* @__PURE__ */ s($t), Bt = /* @__PURE__ */ p$1(st), ve$1 = /* @__PURE__ */ p$1(nt), qt = [], jt = [];
								It.forEach(function(Gt, yt) {
									qt[yt] = [], Gt.forEach(function(Ct) {
										Bt.get(Ct).length == 0 && qt[yt].push(Ct);
									});
								}), Xt.forEach(function(Gt, yt) {
									jt[yt] = [], Gt.forEach(function(Ct) {
										ve$1.get(Ct).length == 0 && jt[yt].push(Ct);
									});
								});
								var _t = /* @__PURE__ */ R(st, "horizontal", gt, k, qt), Qt = /* @__PURE__ */ R(nt, "vertical", ft, j, jt), ce = /* @__PURE__ */ m(function(yt) {
									V.get(yt) ? V.get(yt).forEach(function(Ct) {
										v[y.get(Ct)] = /* @__PURE__ */ _t.get(yt);
									}) : v[y.get(yt)] = /* @__PURE__ */ _t.get(yt);
								}, "_loop9"), te = !0, ee = !1, Se = void 0;
								try {
									for (var ye = /* @__PURE__ */ _t.keys()[Symbol.iterator](), be; !(te = (be = /* @__PURE__ */ ye.next()).done); te = !0) {
										var me = be.value;
										ce(me);
									}
								} catch (Gt) {
									ee = !0, Se = Gt;
								} finally {
									try {
										!te && ye.return && ye.return();
									} finally {
										if (ee) throw Se;
									}
								}
								var yr = /* @__PURE__ */ m(function(yt) {
									z.get(yt) ? z.get(yt).forEach(function(Ct) {
										N[y.get(Ct)] = /* @__PURE__ */ Qt.get(yt);
									}) : N[y.get(yt)] = /* @__PURE__ */ Qt.get(yt);
								}, "_loop10"), Ee = !0, Fe = !1, Pe = void 0;
								try {
									for (var Te = /* @__PURE__ */ Qt.keys()[Symbol.iterator](), Ge; !(Ee = (Ge = /* @__PURE__ */ Te.next()).done); Ee = !0) {
										var me = Ge.value;
										yr(me);
									}
								} catch (Gt) {
									Fe = !0, Pe = Gt;
								} finally {
									try {
										!Ee && Te.return && Te.return();
									} finally {
										if (Fe) throw Pe;
									}
								}
							}();
						}
						for (var Ut = 0; Ut < S.length; Ut++) {
							var Ft = S[Ut];
							Ft.getChild() ?? Ft.setCenter(v[y.get(Ft.id)], N[y.get(Ft.id)]);
						}
					}, n$1.exports = h;
				},
				551: (n$1) => {
					n$1.exports = D;
				}
			}, T = {};
			function g(n$1) {
				var r = T[n$1];
				if (r !== void 0) return r.exports;
				var a = T[n$1] = { exports: {} };
				return C[n$1](a, a.exports, g), a.exports;
			}
			m(g, "__webpack_require__");
			return g(45);
		})();
	});
});
var cr = /* @__PURE__ */ n((le, Ie) => {
	m(function(C, T) {
		typeof le == "object" && typeof Ie == "object" ? Ie.exports = /* @__PURE__ */ T(/* @__PURE__ */ Re()) : typeof define == "function" && define.amd ? define(["cose-base"], T) : typeof le == "object" ? le.cytoscapeFcose = /* @__PURE__ */ T(/* @__PURE__ */ Re()) : C.cytoscapeFcose = /* @__PURE__ */ T(C.coseBase);
	}, "webpackUniversalModuleDefinition")(le, function(D) {
		return (() => {
			var C = {
				658: (n$1) => {
					n$1.exports = Object.assign != null ? Object.assign.bind(Object) : function(r) {
						for (var a = arguments.length, c$1 = /* @__PURE__ */ Array(a > 1 ? a - 1 : 0), t = 1; t < a; t++) c$1[t - 1] = arguments[t];
						return c$1.forEach(function(u) {
							Object.keys(u).forEach(function(i) {
								return r[i] = u[i];
							});
						}), r;
					};
				},
				548: (n$1, r, a) => {
					var c$1 = /* @__PURE__ */ function() {
						function i(e, h) {
							var f = [], l = !0, A = !1, y = void 0;
							try {
								for (var v = /* @__PURE__ */ e[Symbol.iterator](), N; !(l = (N = /* @__PURE__ */ v.next()).done) && (f.push(N.value), !(h && f.length === h)); l = !0);
							} catch (S) {
								A = !0, y = S;
							} finally {
								try {
									!l && v.return && v.return();
								} finally {
									if (A) throw y;
								}
							}
							return f;
						}
						return m(i, "sliceIterator"), function(e, h) {
							if (Array.isArray(e)) return e;
							if (Symbol.iterator in Object(e)) return i(e, h);
							throw new TypeError("Invalid attempt to destructure non-iterable instance");
						};
					}(), t = a(140).layoutBase.LinkedList, u = {};
					u.getTopMostNodes = function(i) {
						for (var e = {}, h = 0; h < i.length; h++) e[i[h].id()] = !0;
						return i.filter(function(l, A) {
							typeof l == "number" && (l = A);
							for (var y = l.parent()[0]; y != null;) {
								if (e[y.id()]) return !1;
								y = y.parent()[0];
							}
							return !0;
						});
					}, u.connectComponents = function(i, e, h, f) {
						var l = new t(), A = /* @__PURE__ */ new Set(), y = [], v = void 0, N = void 0, S = void 0, M = !1, b = 1, $ = [], X = [], et = /* @__PURE__ */ m(function() {
							var J = /* @__PURE__ */ i.collection();
							X.push(J);
							var s = h[0], m$1 = /* @__PURE__ */ i.collection();
							m$1.merge(s).merge(/* @__PURE__ */ s.descendants().intersection(e)), y.push(s), m$1.forEach(function(d$1) {
								l.push(d$1), A.add(d$1), J.merge(d$1);
							});
							for (var p$1 = /* @__PURE__ */ m(function() {
								s = /* @__PURE__ */ l.shift();
								var O = /* @__PURE__ */ i.collection();
								s.neighborhood().nodes().forEach(function(I) {
									e.intersection(/* @__PURE__ */ s.edgesWith(I)).length > 0 && O.merge(I);
								});
								for (var x = 0; x < O.length; x++) {
									var G = O[x];
									if (v = /* @__PURE__ */ h.intersection(/* @__PURE__ */ G.union(/* @__PURE__ */ G.ancestors())), v != null && !A.has(v[0])) v.union(/* @__PURE__ */ v.descendants()).forEach(function(I) {
										l.push(I), A.add(I), J.merge(I), h.has(I) && y.push(I);
									});
								}
							}, "_loop2"); l.length != 0;) p$1();
							if (J.forEach(function(d$1) {
								e.intersection(/* @__PURE__ */ d$1.connectedEdges()).forEach(function(O) {
									J.has(/* @__PURE__ */ O.source()) && J.has(/* @__PURE__ */ O.target()) && J.merge(O);
								});
							}), y.length == h.length && (M = !0), !M || M && b > 1) {
								N = y[0], S = N.connectedEdges().length, y.forEach(function(d$1) {
									d$1.connectedEdges().length < S && (S = d$1.connectedEdges().length, N = d$1);
								}), $.push(/* @__PURE__ */ N.id());
								var E = /* @__PURE__ */ i.collection();
								E.merge(y[0]), y.forEach(function(d$1) {
									E.merge(d$1);
								}), y = [], h = /* @__PURE__ */ h.difference(E), b++;
							}
						}, "_loop");
						do
							et();
						while (!M);
						return f && $.length > 0 && f.set("dummy" + (f.size + 1), $), X;
					}, u.relocateComponent = function(i, e, h) {
						if (!h.fixedNodeConstraint) {
							var f = Number.POSITIVE_INFINITY, l = Number.NEGATIVE_INFINITY, A = Number.POSITIVE_INFINITY, y = Number.NEGATIVE_INFINITY;
							if (h.quality == "draft") {
								var v = !0, N = !1, S = void 0;
								try {
									for (var M = /* @__PURE__ */ e.nodeIndexes[Symbol.iterator](), b; !(v = (b = /* @__PURE__ */ M.next()).done); v = !0) {
										var $ = b.value, X = /* @__PURE__ */ c$1($, 2), et = X[0], R = X[1], J = /* @__PURE__ */ h.cy.getElementById(et);
										if (J) {
											var s = /* @__PURE__ */ J.boundingBox(), m$1 = e.xCoords[R] - s.w / 2, p$1 = e.xCoords[R] + s.w / 2, E = e.yCoords[R] - s.h / 2, d$1 = e.yCoords[R] + s.h / 2;
											m$1 < f && (f = m$1), p$1 > l && (l = p$1), E < A && (A = E), d$1 > y && (y = d$1);
										}
									}
								} catch (I) {
									N = !0, S = I;
								} finally {
									try {
										!v && M.return && M.return();
									} finally {
										if (N) throw S;
									}
								}
								var O = i.x - (l + f) / 2, x = i.y - (y + A) / 2;
								e.xCoords = /* @__PURE__ */ e.xCoords.map(function(I) {
									return I + O;
								}), e.yCoords = /* @__PURE__ */ e.yCoords.map(function(I) {
									return I + x;
								});
							} else {
								Object.keys(e).forEach(function(I) {
									var Z = e[I], tt = Z.getRect().x, P = Z.getRect().x + Z.getRect().width, _ = Z.getRect().y, B = Z.getRect().y + Z.getRect().height;
									tt < f && (f = tt), P > l && (l = P), _ < A && (A = _), B > y && (y = B);
								});
								var G = i.x - (l + f) / 2, F = i.y - (y + A) / 2;
								Object.keys(e).forEach(function(I) {
									var Z = e[I];
									Z.setCenter(Z.getCenterX() + G, Z.getCenterY() + F);
								});
							}
						}
					}, u.calcBoundingBox = function(i, e, h, f) {
						for (var l = Number.MAX_SAFE_INTEGER, A = Number.MIN_SAFE_INTEGER, y = Number.MAX_SAFE_INTEGER, v = Number.MIN_SAFE_INTEGER, N = void 0, S = void 0, M = void 0, b = void 0, $ = /* @__PURE__ */ i.descendants().not(":parent"), X = $.length, et = 0; et < X; et++) {
							var R = $[et];
							N = e[f.get(/* @__PURE__ */ R.id())] - R.width() / 2, S = e[f.get(/* @__PURE__ */ R.id())] + R.width() / 2, M = h[f.get(/* @__PURE__ */ R.id())] - R.height() / 2, b = h[f.get(/* @__PURE__ */ R.id())] + R.height() / 2, l > N && (l = N), A < S && (A = S), y > M && (y = M), v < b && (v = b);
						}
						var J = {};
						return J.topLeftX = l, J.topLeftY = y, J.width = A - l, J.height = v - y, J;
					}, u.calcParentsWithoutChildren = function(i, e) {
						var h = /* @__PURE__ */ i.collection();
						return e.nodes(":parent").forEach(function(f) {
							var l = !1;
							f.children().forEach(function(A) {
								A.css("display") != "none" && (l = !0);
							}), l || h.merge(f);
						}), h;
					}, n$1.exports = u;
				},
				816: (n$1, r, a) => {
					var c$1 = /* @__PURE__ */ a(548), t = a(140).CoSELayout, u = a(140).CoSENode, i = a(140).layoutBase.PointD, e = a(140).layoutBase.DimensionD, h = a(140).layoutBase.LayoutConstants, f = a(140).layoutBase.FDLayoutConstants, l = a(140).CoSEConstants;
					n$1.exports = { coseLayout: /* @__PURE__ */ m(function(v, N) {
						var S = v.cy, M = v.eles, b = /* @__PURE__ */ M.nodes(), $ = /* @__PURE__ */ M.edges(), X = void 0, et = void 0, R = void 0, J = {};
						v.randomize && (X = N.nodeIndexes, et = N.xCoords, R = N.yCoords);
						var s = /* @__PURE__ */ m(function(I) {
							return typeof I == "function";
						}, "isFn"), m$1 = /* @__PURE__ */ m(function(I, Z) {
							return s(I) ? I(Z) : I;
						}, "optFn"), p$1 = /* @__PURE__ */ c$1.calcParentsWithoutChildren(S, M), E = /* @__PURE__ */ m(function F(I, Z, tt, P) {
							for (var _ = Z.length, B = 0; B < _; B++) {
								var w = Z[B], U = null;
								w.intersection(p$1).length == 0 && (U = /* @__PURE__ */ w.children());
								var H = void 0, K = /* @__PURE__ */ w.layoutDimensions({ nodeDimensionsIncludeLabels: P.nodeDimensionsIncludeLabels });
								if (w.outerWidth() != null && w.outerHeight() != null) if (P.randomize) if (!w.isParent()) H = /* @__PURE__ */ I.add(new u(tt.graphManager, new i(et[X.get(/* @__PURE__ */ w.id())] - K.w / 2, R[X.get(/* @__PURE__ */ w.id())] - K.h / 2), new e(parseFloat(K.w), parseFloat(K.h))));
								else {
									var ht = /* @__PURE__ */ c$1.calcBoundingBox(w, et, R, X);
									w.intersection(p$1).length == 0 ? H = /* @__PURE__ */ I.add(new u(tt.graphManager, new i(ht.topLeftX, ht.topLeftY), new e(ht.width, ht.height))) : H = /* @__PURE__ */ I.add(new u(tt.graphManager, new i(ht.topLeftX, ht.topLeftY), new e(parseFloat(K.w), parseFloat(K.h))));
								}
								else H = /* @__PURE__ */ I.add(new u(tt.graphManager, new i(w.position("x") - K.w / 2, w.position("y") - K.h / 2), new e(parseFloat(K.w), parseFloat(K.h))));
								else H = /* @__PURE__ */ I.add(new u(this.graphManager));
								if (H.id = /* @__PURE__ */ w.data("id"), H.nodeRepulsion = /* @__PURE__ */ m$1(P.nodeRepulsion, w), H.paddingLeft = /* @__PURE__ */ parseInt(/* @__PURE__ */ w.css("padding")), H.paddingTop = /* @__PURE__ */ parseInt(/* @__PURE__ */ w.css("padding")), H.paddingRight = /* @__PURE__ */ parseInt(/* @__PURE__ */ w.css("padding")), H.paddingBottom = /* @__PURE__ */ parseInt(/* @__PURE__ */ w.css("padding")), P.nodeDimensionsIncludeLabels && (H.labelWidth = w.boundingBox({
									includeLabels: !0,
									includeNodes: !1,
									includeOverlays: !1
								}).w, H.labelHeight = w.boundingBox({
									includeLabels: !0,
									includeNodes: !1,
									includeOverlays: !1
								}).h, H.labelPosVertical = /* @__PURE__ */ w.css("text-valign"), H.labelPosHorizontal = /* @__PURE__ */ w.css("text-halign")), J[w.data("id")] = H, isNaN(H.rect.x) && (H.rect.x = 0), isNaN(H.rect.y) && (H.rect.y = 0), U != null && U.length > 0) {
									var Nt = void 0;
									Nt = /* @__PURE__ */ tt.getGraphManager().add(/* @__PURE__ */ tt.newGraph(), H), F(Nt, U, tt, P);
								}
							}
						}, "processChildrenList"), d$1 = /* @__PURE__ */ m(function(I, Z, tt) {
							for (var P = 0, _ = 0, B = 0; B < tt.length; B++) {
								var w = tt[B], U = J[w.data("source")], H = J[w.data("target")];
								if (U && H && U !== H && U.getEdgesBetween(H).length == 0) {
									var K = /* @__PURE__ */ Z.add(/* @__PURE__ */ I.newEdge(), U, H);
									K.id = /* @__PURE__ */ w.id(), K.idealLength = /* @__PURE__ */ m$1(v.idealEdgeLength, w), K.edgeElasticity = /* @__PURE__ */ m$1(v.edgeElasticity, w), P += K.idealLength, _++;
								}
							}
							v.idealEdgeLength != null && (_ > 0 ? l.DEFAULT_EDGE_LENGTH = f.DEFAULT_EDGE_LENGTH = P / _ : s(v.idealEdgeLength) ? l.DEFAULT_EDGE_LENGTH = f.DEFAULT_EDGE_LENGTH = 50 : l.DEFAULT_EDGE_LENGTH = f.DEFAULT_EDGE_LENGTH = v.idealEdgeLength, l.MIN_REPULSION_DIST = f.MIN_REPULSION_DIST = f.DEFAULT_EDGE_LENGTH / 10, l.DEFAULT_RADIAL_SEPARATION = f.DEFAULT_EDGE_LENGTH);
						}, "processEdges"), O = /* @__PURE__ */ m(function(I, Z) {
							Z.fixedNodeConstraint && (I.constraints.fixedNodeConstraint = Z.fixedNodeConstraint), Z.alignmentConstraint && (I.constraints.alignmentConstraint = Z.alignmentConstraint), Z.relativePlacementConstraint && (I.constraints.relativePlacementConstraint = Z.relativePlacementConstraint);
						}, "processConstraints");
						v.nestingFactor != null && (l.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = f.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = v.nestingFactor), v.gravity != null && (l.DEFAULT_GRAVITY_STRENGTH = f.DEFAULT_GRAVITY_STRENGTH = v.gravity), v.numIter != null && (l.MAX_ITERATIONS = f.MAX_ITERATIONS = v.numIter), v.gravityRange != null && (l.DEFAULT_GRAVITY_RANGE_FACTOR = f.DEFAULT_GRAVITY_RANGE_FACTOR = v.gravityRange), v.gravityCompound != null && (l.DEFAULT_COMPOUND_GRAVITY_STRENGTH = f.DEFAULT_COMPOUND_GRAVITY_STRENGTH = v.gravityCompound), v.gravityRangeCompound != null && (l.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = f.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = v.gravityRangeCompound), v.initialEnergyOnIncremental != null && (l.DEFAULT_COOLING_FACTOR_INCREMENTAL = f.DEFAULT_COOLING_FACTOR_INCREMENTAL = v.initialEnergyOnIncremental), v.tilingCompareBy != null && (l.TILING_COMPARE_BY = v.tilingCompareBy), v.quality == "proof" ? h.QUALITY = 2 : h.QUALITY = 0, l.NODE_DIMENSIONS_INCLUDE_LABELS = f.NODE_DIMENSIONS_INCLUDE_LABELS = h.NODE_DIMENSIONS_INCLUDE_LABELS = v.nodeDimensionsIncludeLabels, l.DEFAULT_INCREMENTAL = f.DEFAULT_INCREMENTAL = h.DEFAULT_INCREMENTAL = !v.randomize, l.ANIMATE = f.ANIMATE = h.ANIMATE = v.animate, l.TILE = v.tile, l.TILING_PADDING_VERTICAL = typeof v.tilingPaddingVertical == "function" ? v.tilingPaddingVertical.call() : v.tilingPaddingVertical, l.TILING_PADDING_HORIZONTAL = typeof v.tilingPaddingHorizontal == "function" ? v.tilingPaddingHorizontal.call() : v.tilingPaddingHorizontal, l.DEFAULT_INCREMENTAL = f.DEFAULT_INCREMENTAL = h.DEFAULT_INCREMENTAL = !0, l.PURE_INCREMENTAL = !v.randomize, h.DEFAULT_UNIFORM_LEAF_NODE_SIZES = v.uniformNodeDimensions, v.step == "transformed" && (l.TRANSFORM_ON_CONSTRAINT_HANDLING = !0, l.ENFORCE_CONSTRAINTS = !1, l.APPLY_LAYOUT = !1), v.step == "enforced" && (l.TRANSFORM_ON_CONSTRAINT_HANDLING = !1, l.ENFORCE_CONSTRAINTS = !0, l.APPLY_LAYOUT = !1), v.step == "cose" && (l.TRANSFORM_ON_CONSTRAINT_HANDLING = !1, l.ENFORCE_CONSTRAINTS = !1, l.APPLY_LAYOUT = !0), v.step == "all" && (v.randomize ? l.TRANSFORM_ON_CONSTRAINT_HANDLING = !0 : l.TRANSFORM_ON_CONSTRAINT_HANDLING = !1, l.ENFORCE_CONSTRAINTS = !0, l.APPLY_LAYOUT = !0), v.fixedNodeConstraint || v.alignmentConstraint || v.relativePlacementConstraint ? l.TREE_REDUCTION_ON_INCREMENTAL = !1 : l.TREE_REDUCTION_ON_INCREMENTAL = !0;
						var x = new t(), G = /* @__PURE__ */ x.newGraphManager();
						return E(/* @__PURE__ */ G.addRoot(), /* @__PURE__ */ c$1.getTopMostNodes(b), x, v), d$1(x, G, $), O(x, v), x.runLayout(), J;
					}, "coseLayout") };
				},
				212: (n$1, r, a) => {
					var c$1 = /* @__PURE__ */ function() {
						function v(N, S) {
							for (var M = 0; M < S.length; M++) {
								var b = S[M];
								b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(N, b.key, b);
							}
						}
						return m(v, "defineProperties"), function(N, S, M) {
							return S && v(N.prototype, S), M && v(N, M), N;
						};
					}();
					function t(v, N) {
						if (!(v instanceof N)) throw new TypeError("Cannot call a class as a function");
					}
					m(t, "_classCallCheck");
					var u = /* @__PURE__ */ a(658), i = /* @__PURE__ */ a(548), h = a(657).spectralLayout, l = a(816).coseLayout, A = /* @__PURE__ */ Object.freeze({
						quality: "default",
						randomize: !0,
						animate: !0,
						animationDuration: 1e3,
						animationEasing: void 0,
						fit: !0,
						padding: 30,
						nodeDimensionsIncludeLabels: !1,
						uniformNodeDimensions: !1,
						packComponents: !0,
						step: "all",
						samplingType: !0,
						sampleSize: 25,
						nodeSeparation: 75,
						piTol: 1e-7,
						nodeRepulsion: /* @__PURE__ */ m(function(N) {
							return 4500;
						}, "nodeRepulsion"),
						idealEdgeLength: /* @__PURE__ */ m(function(N) {
							return 50;
						}, "idealEdgeLength"),
						edgeElasticity: /* @__PURE__ */ m(function(N) {
							return .45;
						}, "edgeElasticity"),
						nestingFactor: .1,
						gravity: .25,
						numIter: 2500,
						tile: !0,
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
						ready: /* @__PURE__ */ m(function() {}, "ready"),
						stop: /* @__PURE__ */ m(function() {}, "stop")
					});
					n$1.exports = /* @__PURE__ */ function() {
						function v(N) {
							t(this, v), this.options = /* @__PURE__ */ u({}, A, N);
						}
						return m(v, "Layout"), c$1(v, [{
							key: "run",
							value: /* @__PURE__ */ m(function() {
								var S = this, M = this.options, b = M.cy, $ = M.eles, X = [], J = [], s = void 0, m$1 = [];
								M.fixedNodeConstraint && (!Array.isArray(M.fixedNodeConstraint) || M.fixedNodeConstraint.length == 0) && (M.fixedNodeConstraint = void 0), M.alignmentConstraint && (M.alignmentConstraint.vertical && (!Array.isArray(M.alignmentConstraint.vertical) || M.alignmentConstraint.vertical.length == 0) && (M.alignmentConstraint.vertical = void 0), M.alignmentConstraint.horizontal && (!Array.isArray(M.alignmentConstraint.horizontal) || M.alignmentConstraint.horizontal.length == 0) && (M.alignmentConstraint.horizontal = void 0)), M.relativePlacementConstraint && (!Array.isArray(M.relativePlacementConstraint) || M.relativePlacementConstraint.length == 0) && (M.relativePlacementConstraint = void 0);
								(M.fixedNodeConstraint || M.alignmentConstraint || M.relativePlacementConstraint) && (M.tile = !1, M.packComponents = !1);
								var E = void 0, d$1 = !1;
								if (b.layoutUtilities && M.packComponents && (E = /* @__PURE__ */ b.layoutUtilities("get"), E || (E = /* @__PURE__ */ b.layoutUtilities()), d$1 = !0), $.nodes().length > 0) if (d$1) {
									var G = /* @__PURE__ */ i.getTopMostNodes(/* @__PURE__ */ M.eles.nodes());
									if (s = /* @__PURE__ */ i.connectComponents(b, M.eles, G), s.forEach(function(ot$1) {
										var rt = /* @__PURE__ */ ot$1.boundingBox();
										m$1.push({
											x: rt.x1 + rt.w / 2,
											y: rt.y1 + rt.h / 2
										});
									}), M.randomize && s.forEach(function(ot$1) {
										M.eles = ot$1, X.push(/* @__PURE__ */ h(M));
									}), M.quality == "default" || M.quality == "proof") {
										var F = /* @__PURE__ */ b.collection();
										if (M.tile) {
											var I = /* @__PURE__ */ new Map(), Z = [], tt = [], P = 0, _ = {
												nodeIndexes: I,
												xCoords: Z,
												yCoords: tt
											}, B = [];
											if (s.forEach(function(ot$1, rt) {
												ot$1.edges().length == 0 && (ot$1.nodes().forEach(function(vt, mt) {
													F.merge(ot$1.nodes()[mt]), vt.isParent() || (_.nodeIndexes.set(/* @__PURE__ */ ot$1.nodes()[mt].id(), P++), _.xCoords.push(ot$1.nodes()[0].position().x), _.yCoords.push(ot$1.nodes()[0].position().y));
												}), B.push(rt));
											}), F.length > 1) {
												var w = /* @__PURE__ */ F.boundingBox();
												m$1.push({
													x: w.x1 + w.w / 2,
													y: w.y1 + w.h / 2
												}), s.push(F), X.push(_);
												for (var U = B.length - 1; U >= 0; U--) s.splice(B[U], 1), X.splice(B[U], 1), m$1.splice(B[U], 1);
											}
										}
										s.forEach(function(ot$1, rt) {
											M.eles = ot$1, J.push(/* @__PURE__ */ l(M, X[rt])), i.relocateComponent(m$1[rt], J[rt], M);
										});
									} else s.forEach(function(ot$1, rt) {
										i.relocateComponent(m$1[rt], X[rt], M);
									});
									var H = /* @__PURE__ */ new Set();
									if (s.length > 1) {
										var K = [], ht = /* @__PURE__ */ $.filter(function(ot$1) {
											return ot$1.css("display") == "none";
										});
										s.forEach(function(ot$1, rt) {
											var vt = void 0;
											if (M.quality == "draft" && (vt = X[rt].nodeIndexes), ot$1.nodes().not(ht).length > 0) {
												var mt = {};
												mt.edges = [], mt.nodes = [];
												var Lt$1 = void 0;
												ot$1.nodes().not(ht).forEach(function(Et) {
													if (M.quality == "draft") if (!Et.isParent()) Lt$1 = /* @__PURE__ */ vt.get(/* @__PURE__ */ Et.id()), mt.nodes.push({
														x: X[rt].xCoords[Lt$1] - Et.boundingbox().w / 2,
														y: X[rt].yCoords[Lt$1] - Et.boundingbox().h / 2,
														width: Et.boundingbox().w,
														height: Et.boundingbox().h
													});
													else {
														var Tt = /* @__PURE__ */ i.calcBoundingBox(Et, X[rt].xCoords, X[rt].yCoords, vt);
														mt.nodes.push({
															x: Tt.topLeftX,
															y: Tt.topLeftY,
															width: Tt.width,
															height: Tt.height
														});
													}
													else J[rt][Et.id()] && mt.nodes.push({
														x: /* @__PURE__ */ J[rt][Et.id()].getLeft(),
														y: /* @__PURE__ */ J[rt][Et.id()].getTop(),
														width: /* @__PURE__ */ J[rt][Et.id()].getWidth(),
														height: /* @__PURE__ */ J[rt][Et.id()].getHeight()
													});
												}), ot$1.edges().forEach(function(Et) {
													var Tt = /* @__PURE__ */ Et.source(), wt = /* @__PURE__ */ Et.target();
													if (Tt.css("display") != "none" && wt.css("display") != "none") if (M.quality == "draft") {
														var Rt = /* @__PURE__ */ vt.get(/* @__PURE__ */ Tt.id()), Wt = /* @__PURE__ */ vt.get(/* @__PURE__ */ wt.id()), Pt = [], Ut = [];
														if (Tt.isParent()) {
															var Ft = /* @__PURE__ */ i.calcBoundingBox(Tt, X[rt].xCoords, X[rt].yCoords, vt);
															Pt.push(Ft.topLeftX + Ft.width / 2), Pt.push(Ft.topLeftY + Ft.height / 2);
														} else Pt.push(X[rt].xCoords[Rt]), Pt.push(X[rt].yCoords[Rt]);
														if (wt.isParent()) {
															var Y = /* @__PURE__ */ i.calcBoundingBox(wt, X[rt].xCoords, X[rt].yCoords, vt);
															Ut.push(Y.topLeftX + Y.width / 2), Ut.push(Y.topLeftY + Y.height / 2);
														} else Ut.push(X[rt].xCoords[Wt]), Ut.push(X[rt].yCoords[Wt]);
														mt.edges.push({
															startX: Pt[0],
															startY: Pt[1],
															endX: Ut[0],
															endY: Ut[1]
														});
													} else J[rt][Tt.id()] && J[rt][wt.id()] && mt.edges.push({
														startX: /* @__PURE__ */ J[rt][Tt.id()].getCenterX(),
														startY: /* @__PURE__ */ J[rt][Tt.id()].getCenterY(),
														endX: /* @__PURE__ */ J[rt][wt.id()].getCenterX(),
														endY: /* @__PURE__ */ J[rt][wt.id()].getCenterY()
													});
												}), mt.nodes.length > 0 && (K.push(mt), H.add(rt));
											}
										});
										var Nt = E.packComponents(K, M.randomize).shifts;
										if (M.quality == "draft") X.forEach(function(ot$1, rt) {
											var vt = /* @__PURE__ */ ot$1.xCoords.map(function(Lt$1) {
												return Lt$1 + Nt[rt].dx;
											}), mt = /* @__PURE__ */ ot$1.yCoords.map(function(Lt$1) {
												return Lt$1 + Nt[rt].dy;
											});
											ot$1.xCoords = vt, ot$1.yCoords = mt;
										});
										else {
											var St = 0;
											H.forEach(function(ot$1) {
												Object.keys(J[ot$1]).forEach(function(rt) {
													var vt = J[ot$1][rt];
													vt.setCenter(vt.getCenterX() + Nt[St].dx, vt.getCenterY() + Nt[St].dy);
												}), St++;
											});
										}
									}
								} else {
									var O = /* @__PURE__ */ M.eles.boundingBox();
									if (m$1.push({
										x: O.x1 + O.w / 2,
										y: O.y1 + O.h / 2
									}), M.randomize) {
										var x = /* @__PURE__ */ h(M);
										X.push(x);
									}
									M.quality == "default" || M.quality == "proof" ? (J.push(/* @__PURE__ */ l(M, X[0])), i.relocateComponent(m$1[0], J[0], M)) : i.relocateComponent(m$1[0], X[0], M);
								}
								var Q = /* @__PURE__ */ m(function(rt, vt) {
									if (M.quality == "default" || M.quality == "proof") {
										typeof rt == "number" && (rt = vt);
										var mt = void 0, Lt$1 = void 0, Et = /* @__PURE__ */ rt.data("id");
										return J.forEach(function(wt) {
											Et in wt && (mt = {
												x: /* @__PURE__ */ wt[Et].getRect().getCenterX(),
												y: /* @__PURE__ */ wt[Et].getRect().getCenterY()
											}, Lt$1 = wt[Et]);
										}), M.nodeDimensionsIncludeLabels && (Lt$1.labelWidth && (Lt$1.labelPosHorizontal == "left" ? mt.x += Lt$1.labelWidth / 2 : Lt$1.labelPosHorizontal == "right" && (mt.x -= Lt$1.labelWidth / 2)), Lt$1.labelHeight && (Lt$1.labelPosVertical == "top" ? mt.y += Lt$1.labelHeight / 2 : Lt$1.labelPosVertical == "bottom" && (mt.y -= Lt$1.labelHeight / 2))), mt ??= {
											x: /* @__PURE__ */ rt.position("x"),
											y: /* @__PURE__ */ rt.position("y")
										}, {
											x: mt.x,
											y: mt.y
										};
									} else {
										var Tt = void 0;
										return X.forEach(function(wt) {
											var Rt = /* @__PURE__ */ wt.nodeIndexes.get(/* @__PURE__ */ rt.id());
											Rt != null && (Tt = {
												x: wt.xCoords[Rt],
												y: wt.yCoords[Rt]
											});
										}), Tt ??= {
											x: /* @__PURE__ */ rt.position("x"),
											y: /* @__PURE__ */ rt.position("y")
										}, {
											x: Tt.x,
											y: Tt.y
										};
									}
								}, "getPositions");
								if (M.quality == "default" || M.quality == "proof" || M.randomize) {
									var Yt = /* @__PURE__ */ i.calcParentsWithoutChildren(b, $), Mt = /* @__PURE__ */ $.filter(function(ot$1) {
										return ot$1.css("display") == "none";
									});
									M.eles = /* @__PURE__ */ $.not(Mt), $.nodes().not(":parent").not(Mt).layoutPositions(S, M, Q), Yt.length > 0 && Yt.forEach(function(ot$1) {
										ot$1.position(/* @__PURE__ */ Q(ot$1));
									});
								} else console.log("If randomize option is set to false, then quality option must be 'default' or 'proof'.");
							}, "run")
						}]), v;
					}();
				},
				657: (n$1, r, a) => {
					var c$1 = /* @__PURE__ */ a(548), t = a(140).layoutBase.Matrix, u = a(140).layoutBase.SVD;
					n$1.exports = { spectralLayout: /* @__PURE__ */ m(function(h) {
						var f = h.cy, l = h.eles, A = /* @__PURE__ */ l.nodes(), y = /* @__PURE__ */ l.nodes(":parent"), v = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), M = [], b = [], $ = [], X = [], et = [], R = [], J = [], s = [], p$1 = void 0, E = 1e8, d$1 = 1e-9, O = h.piTol, x = h.samplingType, G = h.nodeSeparation, F = void 0, I = /* @__PURE__ */ m(function() {
							for (var V = 0, z = 0, k = !1; z < F;) {
								V = /* @__PURE__ */ Math.floor(Math.random() * p$1), k = !1;
								for (var j = 0; j < z; j++) if (X[j] == V) {
									k = !0;
									break;
								}
								if (!k) X[z] = V, z++;
								else continue;
							}
						}, "randomSampleCR"), Z = /* @__PURE__ */ m(function(V, z, k) {
							for (var j = [], gt = 0, ft = 0, q$1 = 0, lt = void 0, ut$1 = [], it = 0, pt$1 = 1, Dt = 0; Dt < p$1; Dt++) ut$1[Dt] = E;
							for (j[ft] = V, ut$1[V] = 0; ft >= gt;) {
								q$1 = j[gt++];
								for (var st = M[q$1], nt = 0; nt < st.length; nt++) lt = /* @__PURE__ */ N.get(st[nt]), ut$1[lt] == E && (ut$1[lt] = ut$1[q$1] + 1, j[++ft] = lt);
								R[q$1][z] = ut$1[q$1] * G;
							}
							if (k) {
								for (var dt = 0; dt < p$1; dt++) R[dt][z] < et[dt] && (et[dt] = R[dt][z]);
								for (var at = 0; at < p$1; at++) et[at] > it && (it = et[at], pt$1 = at);
							}
							return pt$1;
						}, "BFS"), tt = /* @__PURE__ */ m(function(V) {
							var z = void 0;
							if (V) {
								z = /* @__PURE__ */ Math.floor(Math.random() * p$1);
								for (var j = 0; j < p$1; j++) et[j] = E;
								for (var gt = 0; gt < F; gt++) X[gt] = z, z = /* @__PURE__ */ Z(z, gt, V);
							} else {
								I();
								for (var k = 0; k < F; k++) Z(X[k], k, V, !1);
							}
							for (var ft = 0; ft < p$1; ft++) for (var q$1 = 0; q$1 < F; q$1++) R[ft][q$1] *= R[ft][q$1];
							for (var lt = 0; lt < F; lt++) J[lt] = [];
							for (var ut$1 = 0; ut$1 < F; ut$1++) for (var it = 0; it < F; it++) J[ut$1][it] = R[X[it]][ut$1];
						}, "allBFS"), P = /* @__PURE__ */ m(function() {
							for (var V = /* @__PURE__ */ u.svd(J), z = V.S, k = V.U, j = V.V, gt = z[0] * z[0] * z[0], ft = [], q$1 = 0; q$1 < F; q$1++) {
								ft[q$1] = [];
								for (var lt = 0; lt < F; lt++) ft[q$1][lt] = 0, q$1 == lt && (ft[q$1][lt] = z[q$1] / (z[q$1] * z[q$1] + gt / (z[q$1] * z[q$1])));
							}
							s = /* @__PURE__ */ t.multMat(/* @__PURE__ */ t.multMat(j, ft), /* @__PURE__ */ t.transpose(k));
						}, "sample"), _ = /* @__PURE__ */ m(function() {
							for (var V = void 0, z = void 0, k = [], j = [], gt = [], ft = [], q$1 = 0; q$1 < p$1; q$1++) k[q$1] = /* @__PURE__ */ Math.random(), j[q$1] = /* @__PURE__ */ Math.random();
							k = /* @__PURE__ */ t.normalize(k), j = /* @__PURE__ */ t.normalize(j);
							for (var lt = 0, ut$1 = d$1, it = d$1, pt$1 = void 0;;) {
								lt++;
								for (var Dt = 0; Dt < p$1; Dt++) gt[Dt] = k[Dt];
								if (k = /* @__PURE__ */ t.multGamma(/* @__PURE__ */ t.multL(/* @__PURE__ */ t.multGamma(gt), R, s)), V = /* @__PURE__ */ t.dotProduct(gt, k), k = /* @__PURE__ */ t.normalize(k), ut$1 = /* @__PURE__ */ t.dotProduct(gt, k), pt$1 = /* @__PURE__ */ Math.abs(ut$1 / it), pt$1 <= 1 + O && pt$1 >= 1) break;
								it = ut$1;
							}
							for (var st = 0; st < p$1; st++) gt[st] = k[st];
							for (lt = 0, it = d$1;;) {
								lt++;
								for (var nt = 0; nt < p$1; nt++) ft[nt] = j[nt];
								if (ft = /* @__PURE__ */ t.minusOp(ft, /* @__PURE__ */ t.multCons(gt, /* @__PURE__ */ t.dotProduct(gt, ft))), j = /* @__PURE__ */ t.multGamma(/* @__PURE__ */ t.multL(/* @__PURE__ */ t.multGamma(ft), R, s)), z = /* @__PURE__ */ t.dotProduct(ft, j), j = /* @__PURE__ */ t.normalize(j), ut$1 = /* @__PURE__ */ t.dotProduct(ft, j), pt$1 = /* @__PURE__ */ Math.abs(ut$1 / it), pt$1 <= 1 + O && pt$1 >= 1) break;
								it = ut$1;
							}
							for (var dt = 0; dt < p$1; dt++) ft[dt] = j[dt];
							b = /* @__PURE__ */ t.multCons(gt, /* @__PURE__ */ Math.sqrt(/* @__PURE__ */ Math.abs(V))), $ = /* @__PURE__ */ t.multCons(ft, /* @__PURE__ */ Math.sqrt(/* @__PURE__ */ Math.abs(z)));
						}, "powerIteration");
						c$1.connectComponents(f, l, /* @__PURE__ */ c$1.getTopMostNodes(A), v), y.forEach(function(W) {
							c$1.connectComponents(f, l, /* @__PURE__ */ c$1.getTopMostNodes(/* @__PURE__ */ W.descendants().intersection(l)), v);
						});
						for (var B = 0, w = 0; w < A.length; w++) A[w].isParent() || N.set(/* @__PURE__ */ A[w].id(), B++);
						var U = !0, H = !1, K = void 0;
						try {
							for (var ht = /* @__PURE__ */ v.keys()[Symbol.iterator](), Nt; !(U = (Nt = /* @__PURE__ */ ht.next()).done); U = !0) {
								var St = Nt.value;
								N.set(St, B++);
							}
						} catch (W) {
							H = !0, K = W;
						} finally {
							try {
								!U && ht.return && ht.return();
							} finally {
								if (H) throw K;
							}
						}
						for (var Q = 0; Q < N.size; Q++) M[Q] = [];
						y.forEach(function(W) {
							for (var V = /* @__PURE__ */ W.children().intersection(l); V.nodes(":childless").length == 0;) V = /* @__PURE__ */ V.nodes()[0].children().intersection(l);
							var z = 0, k = V.nodes(":childless")[0].connectedEdges().length;
							V.nodes(":childless").forEach(function(j, gt) {
								j.connectedEdges().length < k && (k = j.connectedEdges().length, z = gt);
							}), S.set(/* @__PURE__ */ W.id(), /* @__PURE__ */ V.nodes(":childless")[z].id());
						}), A.forEach(function(W) {
							var V = void 0;
							W.isParent() ? V = /* @__PURE__ */ N.get(/* @__PURE__ */ S.get(/* @__PURE__ */ W.id())) : V = /* @__PURE__ */ N.get(/* @__PURE__ */ W.id()), W.neighborhood().nodes().forEach(function(z) {
								l.intersection(/* @__PURE__ */ W.edgesWith(z)).length > 0 && (z.isParent() ? M[V].push(/* @__PURE__ */ S.get(/* @__PURE__ */ z.id())) : M[V].push(/* @__PURE__ */ z.id()));
							});
						});
						var Yt = /* @__PURE__ */ m(function(V) {
							var z = /* @__PURE__ */ N.get(V), k = void 0;
							v.get(V).forEach(function(j) {
								f.getElementById(j).isParent() ? k = /* @__PURE__ */ S.get(j) : k = j, M[z].push(k), M[N.get(k)].push(V);
							});
						}, "_loop"), Mt = !0, ot$1 = !1, rt = void 0;
						try {
							for (var vt = /* @__PURE__ */ v.keys()[Symbol.iterator](), mt; !(Mt = (mt = /* @__PURE__ */ vt.next()).done); Mt = !0) {
								var Lt$1 = mt.value;
								Yt(Lt$1);
							}
						} catch (W) {
							ot$1 = !0, rt = W;
						} finally {
							try {
								!Mt && vt.return && vt.return();
							} finally {
								if (ot$1) throw rt;
							}
						}
						p$1 = N.size;
						var Et = void 0;
						if (p$1 > 2) {
							F = p$1 < h.sampleSize ? p$1 : h.sampleSize;
							for (var Tt = 0; Tt < p$1; Tt++) R[Tt] = [];
							for (var wt = 0; wt < F; wt++) s[wt] = [];
							return h.quality == "draft" || h.step == "all" ? (tt(x), P(), _(), Et = {
								nodeIndexes: N,
								xCoords: b,
								yCoords: $
							}) : (N.forEach(function(W, V) {
								b.push(/* @__PURE__ */ f.getElementById(V).position("x")), $.push(/* @__PURE__ */ f.getElementById(V).position("y"));
							}), Et = {
								nodeIndexes: N,
								xCoords: b,
								yCoords: $
							}), Et;
						} else {
							var Rt = /* @__PURE__ */ N.keys(), Wt = /* @__PURE__ */ f.getElementById(Rt.next().value), Pt = /* @__PURE__ */ Wt.position(), Ut = /* @__PURE__ */ Wt.outerWidth();
							if (b.push(Pt.x), $.push(Pt.y), p$1 == 2) {
								var Y = /* @__PURE__ */ f.getElementById(Rt.next().value).outerWidth();
								b.push(Pt.x + Ut / 2 + Y / 2 + h.idealEdgeLength), $.push(Pt.y);
							}
							return Et = {
								nodeIndexes: N,
								xCoords: b,
								yCoords: $
							}, Et;
						}
					}, "spectralLayout") };
				},
				579: (n$1, r, a) => {
					var c$1 = /* @__PURE__ */ a(212), t = /* @__PURE__ */ m(function(i) {
						i && i("layout", "fcose", c$1);
					}, "register");
					typeof cytoscape < "u" && t(cytoscape), n$1.exports = t;
				},
				140: (n$1) => {
					n$1.exports = D;
				}
			}, T = {};
			function g(n$1) {
				var r = T[n$1];
				if (r !== void 0) return r.exports;
				var a = T[n$1] = { exports: {} };
				return C[n$1](a, a.exports, g), a.exports;
			}
			m(g, "__webpack_require__");
			return g(579);
		})();
	});
});
var Le = {
	L: "left",
	R: "right",
	T: "top",
	B: "bottom"
}, De = {
	L: /* @__PURE__ */ m((D) => `${D},${D / 2} 0,${D} 0,0`, "L"),
	R: /* @__PURE__ */ m((D) => `0,${D / 2} ${D},0 ${D},${D}`, "R"),
	T: /* @__PURE__ */ m((D) => `0,0 ${D},0 ${D / 2},${D}`, "T"),
	B: /* @__PURE__ */ m((D) => `${D / 2},0 ${D},${D} 0,${D}`, "B")
}, ne = {
	L: /* @__PURE__ */ m((D, C) => D - C + 2, "L"),
	R: /* @__PURE__ */ m((D, C) => D - 2, "R"),
	T: /* @__PURE__ */ m((D, C) => D - C + 2, "T"),
	B: /* @__PURE__ */ m((D, C) => D - 2, "B")
}, rr = /* @__PURE__ */ m(function(D) {
	return Ht(D) ? D === "L" ? "R" : "L" : D === "T" ? "B" : "T";
}, "getOppositeArchitectureDirection"), Ce = /* @__PURE__ */ m(function(D) {
	let C = D;
	return C === "L" || C === "R" || C === "T" || C === "B";
}, "isArchitectureDirection"), Ht = /* @__PURE__ */ m(function(D) {
	let C = D;
	return C === "L" || C === "R";
}, "isArchitectureDirectionX"), kt = /* @__PURE__ */ m(function(D) {
	let C = D;
	return C === "T" || C === "B";
}, "isArchitectureDirectionY"), ae = /* @__PURE__ */ m(function(D, C) {
	let T = Ht(D) && kt(C), g = kt(D) && Ht(C);
	return T || g;
}, "isArchitectureDirectionXY"), ir = /* @__PURE__ */ m(function(D) {
	let C = D[0], T = D[1], g = Ht(C) && kt(T), o = kt(C) && Ht(T);
	return g || o;
}, "isArchitecturePairXY"), Er = /* @__PURE__ */ m(function(D) {
	return D !== "LL" && D !== "RR" && D !== "TT" && D !== "BB";
}, "isValidArchitectureDirectionPair"), oe = /* @__PURE__ */ m(function(D, C) {
	let T = `${D}${C}`;
	return Er(T) ? T : void 0;
}, "getArchitectureDirectionPair"), nr = /* @__PURE__ */ m(function([D, C], T) {
	let g = T[0], o = T[1];
	return Ht(g) ? kt(o) ? [D + (g === "L" ? -1 : 1), C + (o === "T" ? 1 : -1)] : [D + (g === "L" ? -1 : 1), C] : Ht(o) ? [D + (o === "L" ? 1 : -1), C + (g === "T" ? 1 : -1)] : [D, C + (g === "T" ? 1 : -1)];
}, "shiftPositionByArchitectureDirectionPair"), ar = /* @__PURE__ */ m(function(D) {
	return D === "LT" || D === "TL" ? [1, 1] : D === "BL" || D === "LB" ? [1, -1] : D === "BR" || D === "RB" ? [-1, -1] : [-1, 1];
}, "getArchitectureDirectionXYFactors"), or = /* @__PURE__ */ m(function(D, C) {
	return ae(D, C) ? "bend" : Ht(D) ? "horizontal" : "vertical";
}, "getArchitectureDirectionAlignment"), sr = /* @__PURE__ */ m(function(D) {
	return D.type === "service";
}, "isArchitectureService"), hr = /* @__PURE__ */ m(function(D) {
	return D.type === "junction";
}, "isArchitectureJunction"), pe = /* @__PURE__ */ m((D) => D.data(), "edgeData"), Jt$1 = /* @__PURE__ */ m((D) => D.data(), "nodeData");
var Tr = Ni.architecture, re = class {
	constructor() {
		this.nodes = {};
		this.groups = {};
		this.edges = [];
		this.registeredIds = {};
		this.elements = {};
		this.setAccTitle = Ho;
		this.getAccTitle = Uo;
		this.setDiagramTitle = jo;
		this.getDiagramTitle = Vo;
		this.getAccDescription = $o;
		this.setAccDescription = Go;
		this.clear();
	}
	static {
		m(this, "ArchitectureDB");
	}
	clear() {
		this.nodes = {}, this.groups = {}, this.edges = [], this.registeredIds = {}, this.dataStructures = void 0, this.elements = {}, No();
	}
	addService({ id: C, icon: T, in: g, title: o, iconText: n$1 }) {
		if (this.registeredIds[C] !== void 0) throw new Error(`The service id [${C}] is already in use by another ${this.registeredIds[C]}`);
		if (g !== void 0) {
			if (C === g) throw new Error(`The service [${C}] cannot be placed within itself`);
			if (this.registeredIds[g] === void 0) throw new Error(`The service [${C}]'s parent does not exist. Please make sure the parent is created before this service`);
			if (this.registeredIds[g] === "node") throw new Error(`The service [${C}]'s parent is not a group`);
		}
		this.registeredIds[C] = "node", this.nodes[C] = {
			id: C,
			type: "service",
			icon: T,
			iconText: n$1,
			title: o,
			edges: [],
			in: g
		};
	}
	getServices() {
		return Object.values(this.nodes).filter(sr);
	}
	addJunction({ id: C, in: T }) {
		this.registeredIds[C] = "node", this.nodes[C] = {
			id: C,
			type: "junction",
			edges: [],
			in: T
		};
	}
	getJunctions() {
		return Object.values(this.nodes).filter(hr);
	}
	getNodes() {
		return Object.values(this.nodes);
	}
	getNode(C) {
		return this.nodes[C] ?? null;
	}
	addGroup({ id: C, icon: T, in: g, title: o }) {
		if (this.registeredIds?.[C] !== void 0) throw new Error(`The group id [${C}] is already in use by another ${this.registeredIds[C]}`);
		if (g !== void 0) {
			if (C === g) throw new Error(`The group [${C}] cannot be placed within itself`);
			if (this.registeredIds?.[g] === void 0) throw new Error(`The group [${C}]'s parent does not exist. Please make sure the parent is created before this group`);
			if (this.registeredIds?.[g] === "node") throw new Error(`The group [${C}]'s parent is not a group`);
		}
		this.registeredIds[C] = "group", this.groups[C] = {
			id: C,
			icon: T,
			title: o,
			in: g
		};
	}
	getGroups() {
		return Object.values(this.groups);
	}
	addEdge({ lhsId: C, rhsId: T, lhsDir: g, rhsDir: o, lhsInto: n$1, rhsInto: r, lhsGroup: a, rhsGroup: c$1, title: t }) {
		if (!Ce(g)) throw new Error(`Invalid direction given for left hand side of edge ${C}--${T}. Expected (L,R,T,B) got ${String(g)}`);
		if (!Ce(o)) throw new Error(`Invalid direction given for right hand side of edge ${C}--${T}. Expected (L,R,T,B) got ${String(o)}`);
		if (this.nodes[C] === void 0 && this.groups[C] === void 0) throw new Error(`The left-hand id [${C}] does not yet exist. Please create the service/group before declaring an edge to it.`);
		if (this.nodes[T] === void 0 && this.groups[T] === void 0) throw new Error(`The right-hand id [${T}] does not yet exist. Please create the service/group before declaring an edge to it.`);
		let u = this.nodes[C].in, i = this.nodes[T].in;
		if (a && u && i && u == i) throw new Error(`The left-hand id [${C}] is modified to traverse the group boundary, but the edge does not pass through two groups.`);
		if (c$1 && u && i && u == i) throw new Error(`The right-hand id [${T}] is modified to traverse the group boundary, but the edge does not pass through two groups.`);
		let e = {
			lhsId: C,
			lhsDir: g,
			lhsInto: n$1,
			lhsGroup: a,
			rhsId: T,
			rhsDir: o,
			rhsInto: r,
			rhsGroup: c$1,
			title: t
		};
		this.edges.push(e), this.nodes[C] && this.nodes[T] && (this.nodes[C].edges.push(this.edges[this.edges.length - 1]), this.nodes[T].edges.push(this.edges[this.edges.length - 1]));
	}
	getEdges() {
		return this.edges;
	}
	getDataStructures() {
		if (this.dataStructures === void 0) {
			let C = {}, T = /* @__PURE__ */ Object.entries(this.nodes).reduce((c$1, [t, u]) => (c$1[t] = /* @__PURE__ */ u.edges.reduce((i, e) => {
				let h = this.getNode(e.lhsId)?.in, f = this.getNode(e.rhsId)?.in;
				if (h && f && h !== f) {
					let l = /* @__PURE__ */ or(e.lhsDir, e.rhsDir);
					l !== "bend" && (C[h] ??= {}, C[h][f] = l, C[f] ??= {}, C[f][h] = l);
				}
				if (e.lhsId === t) {
					let l = /* @__PURE__ */ oe(e.lhsDir, e.rhsDir);
					l && (i[l] = e.rhsId);
				} else {
					let l = /* @__PURE__ */ oe(e.rhsDir, e.lhsDir);
					l && (i[l] = e.lhsId);
				}
				return i;
			}, {}), c$1), {}), g = Object.keys(T)[0], o = { [g]: 1 }, n$1 = /* @__PURE__ */ Object.keys(T).reduce((c$1, t) => t === g ? c$1 : {
				...c$1,
				[t]: 1
			}, {}), r = /* @__PURE__ */ m((c$1) => {
				let t = { [c$1]: [0, 0] }, u = [c$1];
				for (; u.length > 0;) {
					let i = /* @__PURE__ */ u.shift();
					if (i) {
						o[i] = 1, delete n$1[i];
						let e = T[i], [h, f] = t[i];
						Object.entries(e).forEach(([l, A]) => {
							o[A] || (t[A] = /* @__PURE__ */ nr([h, f], l), u.push(A));
						});
					}
				}
				return t;
			}, "BFS"), a = [/* @__PURE__ */ r(g)];
			for (; Object.keys(n$1).length > 0;) a.push(/* @__PURE__ */ r(Object.keys(n$1)[0]));
			this.dataStructures = {
				adjList: T,
				spatialMaps: a,
				groupAlignments: C
			};
		}
		return this.dataStructures;
	}
	setElementForId(C, T) {
		this.elements[C] = T;
	}
	getElementById(C) {
		return this.elements[C];
	}
	getConfig() {
		return Lt({
			...Tr,
			...Ot().architecture
		});
	}
	getConfigField(C) {
		return this.getConfig()[C];
	}
};
var Ar = /* @__PURE__ */ m((D, C) => {
	c(D, C), D.groups.map((T) => C.addGroup(T)), D.services.map((T) => C.addService({
		...T,
		type: "service"
	})), D.junctions.map((T) => C.addJunction({
		...T,
		type: "junction"
	})), D.edges.map((T) => C.addEdge(T));
}, "populateDb"), Me = {
	parser: { yy: void 0 },
	parse: /* @__PURE__ */ m(async (D) => {
		let C = await p("architecture", D);
		pt.debug(C);
		let T = Me.parser?.yy;
		if (!(T instanceof re)) throw new Error("parser.parser?.yy was not a ArchitectureDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");
		Ar(C, T);
	}, "parse")
};
var lr = /* @__PURE__ */ m((D) => `
  .edge {
    stroke-width: ${D.archEdgeWidth};
    stroke: ${D.archEdgeColor};
    fill: none;
  }

  .arrow {
    fill: ${D.archEdgeArrowColor};
  }

  .node-bkg {
    fill: none;
    stroke: ${D.archGroupBorderColor};
    stroke-width: ${D.archGroupBorderWidth};
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
`, "getStyles");
var pr = /* @__PURE__ */ q(/* @__PURE__ */ cr(), 1);
var ie = /* @__PURE__ */ m((D) => `<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/>${D}</g>`, "wrapIcon"), Kt = {
	prefix: "mermaid-architecture",
	height: 80,
	width: 80,
	icons: {
		database: { body: /* @__PURE__ */ ie("<path id=\"b\" data-name=\"4\" d=\"m20,57.86c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><path id=\"c\" data-name=\"3\" d=\"m20,45.95c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><path id=\"d\" data-name=\"2\" d=\"m20,34.05c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><ellipse id=\"e\" data-name=\"1\" cx=\"40\" cy=\"22.14\" rx=\"20\" ry=\"7.14\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><line x1=\"20\" y1=\"57.86\" x2=\"20\" y2=\"22.14\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><line x1=\"60\" y1=\"57.86\" x2=\"60\" y2=\"22.14\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/>") },
		server: { body: /* @__PURE__ */ ie("<rect x=\"17.5\" y=\"17.5\" width=\"45\" height=\"45\" rx=\"2\" ry=\"2\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><line x1=\"17.5\" y1=\"32.5\" x2=\"62.5\" y2=\"32.5\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><line x1=\"17.5\" y1=\"47.5\" x2=\"62.5\" y2=\"47.5\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><g><path d=\"m56.25,25c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z\" style=\"fill: #fff; stroke-width: 0px;\"/><path d=\"m56.25,25c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10;\"/></g><g><path d=\"m56.25,40c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z\" style=\"fill: #fff; stroke-width: 0px;\"/><path d=\"m56.25,40c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10;\"/></g><g><path d=\"m56.25,55c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z\" style=\"fill: #fff; stroke-width: 0px;\"/><path d=\"m56.25,55c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10;\"/></g><g><circle cx=\"32.5\" cy=\"25\" r=\".75\" style=\"fill: #fff; stroke: #fff; stroke-miterlimit: 10;\"/><circle cx=\"27.5\" cy=\"25\" r=\".75\" style=\"fill: #fff; stroke: #fff; stroke-miterlimit: 10;\"/><circle cx=\"22.5\" cy=\"25\" r=\".75\" style=\"fill: #fff; stroke: #fff; stroke-miterlimit: 10;\"/></g><g><circle cx=\"32.5\" cy=\"40\" r=\".75\" style=\"fill: #fff; stroke: #fff; stroke-miterlimit: 10;\"/><circle cx=\"27.5\" cy=\"40\" r=\".75\" style=\"fill: #fff; stroke: #fff; stroke-miterlimit: 10;\"/><circle cx=\"22.5\" cy=\"40\" r=\".75\" style=\"fill: #fff; stroke: #fff; stroke-miterlimit: 10;\"/></g><g><circle cx=\"32.5\" cy=\"55\" r=\".75\" style=\"fill: #fff; stroke: #fff; stroke-miterlimit: 10;\"/><circle cx=\"27.5\" cy=\"55\" r=\".75\" style=\"fill: #fff; stroke: #fff; stroke-miterlimit: 10;\"/><circle cx=\"22.5\" cy=\"55\" r=\".75\" style=\"fill: #fff; stroke: #fff; stroke-miterlimit: 10;\"/></g>") },
		disk: { body: /* @__PURE__ */ ie("<rect x=\"20\" y=\"15\" width=\"40\" height=\"50\" rx=\"1\" ry=\"1\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><ellipse cx=\"24\" cy=\"19.17\" rx=\".8\" ry=\".83\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><ellipse cx=\"56\" cy=\"19.17\" rx=\".8\" ry=\".83\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><ellipse cx=\"24\" cy=\"60.83\" rx=\".8\" ry=\".83\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><ellipse cx=\"56\" cy=\"60.83\" rx=\".8\" ry=\".83\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><ellipse cx=\"40\" cy=\"33.75\" rx=\"14\" ry=\"14.58\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><ellipse cx=\"40\" cy=\"33.75\" rx=\"4\" ry=\"4.17\" style=\"fill: #fff; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><path d=\"m37.51,42.52l-4.83,13.22c-.26.71-1.1,1.02-1.76.64l-4.18-2.42c-.66-.38-.81-1.26-.33-1.84l9.01-10.8c.88-1.05,2.56-.08,2.09,1.2Z\" style=\"fill: #fff; stroke-width: 0px;\"/>") },
		internet: { body: /* @__PURE__ */ ie("<circle cx=\"40\" cy=\"40\" r=\"22.5\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><line x1=\"40\" y1=\"17.5\" x2=\"40\" y2=\"62.5\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><line x1=\"17.5\" y1=\"40\" x2=\"62.5\" y2=\"40\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><path d=\"m39.99,17.51c-15.28,11.1-15.28,33.88,0,44.98\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><path d=\"m40.01,17.51c15.28,11.1,15.28,33.88,0,44.98\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><line x1=\"19.75\" y1=\"30.1\" x2=\"60.25\" y2=\"30.1\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><line x1=\"19.75\" y1=\"49.9\" x2=\"60.25\" y2=\"49.9\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/>") },
		cloud: { body: /* @__PURE__ */ ie("<path d=\"m65,47.5c0,2.76-2.24,5-5,5H20c-2.76,0-5-2.24-5-5,0-1.87,1.03-3.51,2.56-4.36-.04-.21-.06-.42-.06-.64,0-2.6,2.48-4.74,5.65-4.97,1.65-4.51,6.34-7.76,11.85-7.76.86,0,1.69.08,2.5.23,2.09-1.57,4.69-2.5,7.5-2.5,6.1,0,11.19,4.38,12.28,10.17,2.14.56,3.72,2.51,3.72,4.83,0,.03,0,.07-.01.1,2.29.46,4.01,2.48,4.01,4.9Z\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/>") },
		unknown: ut,
		blank: { body: /* @__PURE__ */ ie("") }
	}
};
var fr = /* @__PURE__ */ m(async function(D, C, T) {
	let g = /* @__PURE__ */ T.getConfigField("padding"), o = /* @__PURE__ */ T.getConfigField("iconSize"), n$1 = o / 2, r = o / 6, a = r / 2;
	await Promise.all(/* @__PURE__ */ C.edges().map(async (c$1) => {
		let { source: t, sourceDir: u, sourceArrow: i, sourceGroup: e, target: h, targetDir: f, targetArrow: l, targetGroup: A, label: y } = pe(c$1), { x: v, y: N } = c$1[0].sourceEndpoint(), { x: S, y: M } = c$1[0].midpoint(), { x: b, y: $ } = c$1[0].targetEndpoint(), X = g + 4;
		if (e && (Ht(u) ? v += u === "L" ? -X : X : N += u === "T" ? -X : X + 18), A && (Ht(f) ? b += f === "L" ? -X : X : $ += f === "T" ? -X : X + 18), !e && T.getNode(t)?.type === "junction" && (Ht(u) ? v += u === "L" ? n$1 : -n$1 : N += u === "T" ? n$1 : -n$1), !A && T.getNode(h)?.type === "junction" && (Ht(f) ? b += f === "L" ? n$1 : -n$1 : $ += f === "T" ? n$1 : -n$1), c$1[0]._private.rscratch) {
			let et = /* @__PURE__ */ D.insert("g");
			if (et.insert("path").attr("d", `M ${v},${N} L ${S},${M} L${b},${$} `).attr("class", "edge").attr("id", /* @__PURE__ */ Jt(t, h, { prefix: "L" })), i) {
				let R = Ht(u) ? ne[u](v, r) : v - a, J = kt(u) ? ne[u](N, r) : N - a;
				et.insert("polygon").attr("points", /* @__PURE__ */ De[u](r)).attr("transform", `translate(${R},${J})`).attr("class", "arrow");
			}
			if (l) {
				let R = Ht(f) ? ne[f](b, r) : b - a, J = kt(f) ? ne[f]($, r) : $ - a;
				et.insert("polygon").attr("points", /* @__PURE__ */ De[f](r)).attr("transform", `translate(${R},${J})`).attr("class", "arrow");
			}
			if (y) {
				let R = ae(u, f) ? "XY" : Ht(u) ? "X" : "Y", J = 0;
				R === "X" ? J = /* @__PURE__ */ Math.abs(v - b) : R === "Y" ? J = Math.abs(N - $) / 1.5 : J = Math.abs(v - b) / 2;
				let s = /* @__PURE__ */ et.append("g");
				if (await Rr(s, y, {
					useHtmlLabels: !1,
					width: J,
					classes: "architecture-service-label"
				}, /* @__PURE__ */ mr()), s.attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle"), R === "X") s.attr("transform", "translate(" + S + ", " + M + ")");
				else if (R === "Y") s.attr("transform", "translate(" + S + ", " + M + ") rotate(-90)");
				else if (R === "XY") {
					let m$1 = /* @__PURE__ */ oe(u, f);
					if (m$1 && ir(m$1)) {
						let p$1 = /* @__PURE__ */ s.node().getBoundingClientRect(), [E, d$1] = ar(m$1);
						s.attr("dominant-baseline", "auto").attr("transform", `rotate(${-1 * E * d$1 * 45})`);
						let O = /* @__PURE__ */ s.node().getBoundingClientRect();
						s.attr("transform", `
                translate(${S}, ${M - p$1.height / 2})
                translate(${E * O.width / 2}, ${d$1 * O.height / 2})
                rotate(${-1 * E * d$1 * 45}, 0, ${p$1.height / 2})
              `);
					}
				}
			}
		}
	}));
}, "drawEdges"), ur = /* @__PURE__ */ m(async function(D, C, T) {
	let o = T.getConfigField("padding") * .75, n$1 = /* @__PURE__ */ T.getConfigField("fontSize"), a = T.getConfigField("iconSize") / 2;
	await Promise.all(/* @__PURE__ */ C.nodes().map(async (c$1) => {
		let t = /* @__PURE__ */ Jt$1(c$1);
		if (t.type === "group") {
			let { h: u, w: i, x1: e, y1: h } = c$1.boundingBox(), f = /* @__PURE__ */ D.append("rect");
			f.attr("id", `group-${t.id}`).attr("x", e + a).attr("y", h + a).attr("width", i).attr("height", u).attr("class", "node-bkg");
			let l = /* @__PURE__ */ D.append("g"), A = e, y = h;
			if (t.icon) {
				let v = /* @__PURE__ */ l.append("g");
				v.html(`<g>${await ve(t.icon, {
					height: o,
					width: o,
					fallbackPrefix: Kt.prefix
				})}</g>`), v.attr("transform", "translate(" + (A + a + 1) + ", " + (y + a + 1) + ")"), A += o, y += n$1 / 2 - 1 - 2;
			}
			if (t.label) {
				let v = /* @__PURE__ */ l.append("g");
				await Rr(v, t.label, {
					useHtmlLabels: !1,
					width: i,
					classes: "architecture-service-label"
				}, /* @__PURE__ */ mr()), v.attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "start").attr("text-anchor", "start"), v.attr("transform", "translate(" + (A + a + 4) + ", " + (y + a + 2) + ")");
			}
			T.setElementForId(t.id, f);
		}
	}));
}, "drawGroups"), gr = /* @__PURE__ */ m(async function(D, C, T) {
	let g = /* @__PURE__ */ mr();
	for (let o of T) {
		let n$1 = /* @__PURE__ */ C.append("g"), r = /* @__PURE__ */ D.getConfigField("iconSize");
		if (o.title) {
			let u = /* @__PURE__ */ n$1.append("g");
			await Rr(u, o.title, {
				useHtmlLabels: !1,
				width: r * 1.5,
				classes: "architecture-service-label"
			}, g), u.attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle"), u.attr("transform", "translate(" + r / 2 + ", " + r + ")");
		}
		let a = /* @__PURE__ */ n$1.append("g");
		if (o.icon) a.html(`<g>${await ve(o.icon, {
			height: r,
			width: r,
			fallbackPrefix: Kt.prefix
		})}</g>`);
		else if (o.iconText) {
			a.html(`<g>${await ve("blank", {
				height: r,
				width: r,
				fallbackPrefix: Kt.prefix
			})}</g>`);
			let e = /* @__PURE__ */ a.append("g").append("foreignObject").attr("width", r).attr("height", r).append("div").attr("class", "node-icon-text").attr("style", `height: ${r}px;`).append("div").html(/* @__PURE__ */ ot(o.iconText, g)), h = parseInt(/* @__PURE__ */ window.getComputedStyle(/* @__PURE__ */ e.node(), null).getPropertyValue("font-size").replace(/\D/g, "")) ?? 16;
			e.attr("style", `-webkit-line-clamp: ${Math.floor((r - 2) / h)};`);
		} else a.append("path").attr("class", "node-bkg").attr("id", "node-" + o.id).attr("d", `M0 ${r} v${-r} q0,-5 5,-5 h${r} q5,0 5,5 v${r} H0 Z`);
		n$1.attr("id", `service-${o.id}`).attr("class", "architecture-service");
		let { width: c$1, height: t } = n$1.node().getBBox();
		o.width = c$1, o.height = t, D.setElementForId(o.id, n$1);
	}
	return 0;
}, "drawServices"), dr$1 = /* @__PURE__ */ m(function(D, C, T) {
	T.forEach((g) => {
		let o = /* @__PURE__ */ C.append("g"), n$1 = /* @__PURE__ */ D.getConfigField("iconSize");
		o.append("g").append("rect").attr("id", "node-" + g.id).attr("fill-opacity", "0").attr("width", n$1).attr("height", n$1), o.attr("class", "architecture-junction");
		let { width: a, height: c$1 } = o._groups[0][0].getBBox();
		o.width = a, o.height = c$1, D.setElementForId(g.id, o);
	});
}, "drawJunctions");
Hn([{
	name: Kt.prefix,
	icons: Kt
}]);
ra.use(pr.default);
function Lr(D, C, T) {
	D.forEach((g) => {
		C.add({
			group: "nodes",
			data: {
				type: "service",
				id: g.id,
				icon: g.icon,
				label: g.title,
				parent: g.in,
				width: /* @__PURE__ */ T.getConfigField("iconSize"),
				height: /* @__PURE__ */ T.getConfigField("iconSize")
			},
			classes: "node-service"
		});
	});
}
m(Lr, "addServices");
function Dr(D, C, T) {
	D.forEach((g) => {
		C.add({
			group: "nodes",
			data: {
				type: "junction",
				id: g.id,
				parent: g.in,
				width: /* @__PURE__ */ T.getConfigField("iconSize"),
				height: /* @__PURE__ */ T.getConfigField("iconSize")
			},
			classes: "node-junction"
		});
	});
}
m(Dr, "addJunctions");
function Cr(D, C) {
	C.nodes().map((T) => {
		let g = /* @__PURE__ */ Jt$1(T);
		if (g.type === "group") return;
		g.x = T.position().x, g.y = T.position().y, D.getElementById(g.id).attr("transform", "translate(" + (g.x || 0) + "," + (g.y || 0) + ")");
	});
}
m(Cr, "positionNodes");
function Mr(D, C) {
	D.forEach((T) => {
		C.add({
			group: "nodes",
			data: {
				type: "group",
				id: T.id,
				icon: T.icon,
				label: T.title,
				parent: T.in
			},
			classes: "node-group"
		});
	});
}
m(Mr, "addGroups");
function wr(D, C) {
	D.forEach((T) => {
		let { lhsId: g, rhsId: o, lhsInto: n$1, lhsGroup: r, rhsInto: a, lhsDir: c$1, rhsDir: t, rhsGroup: u, title: i } = T, e = ae(T.lhsDir, T.rhsDir) ? "segments" : "straight", h = {
			id: `${g}-${o}`,
			label: i,
			source: g,
			sourceDir: c$1,
			sourceArrow: n$1,
			sourceGroup: r,
			sourceEndpoint: c$1 === "L" ? "0 50%" : c$1 === "R" ? "100% 50%" : c$1 === "T" ? "50% 0" : "50% 100%",
			target: o,
			targetDir: t,
			targetArrow: a,
			targetGroup: u,
			targetEndpoint: t === "L" ? "0 50%" : t === "R" ? "100% 50%" : t === "T" ? "50% 0" : "50% 100%"
		};
		C.add({
			group: "edges",
			data: h,
			classes: e
		});
	});
}
m(wr, "addEdges");
function xr(D, C, T) {
	let g = /* @__PURE__ */ m((a, c$1) => Object.entries(a).reduce((t, [u, i]) => {
		let e = 0, h = /* @__PURE__ */ Object.entries(i);
		if (h.length === 1) return t[u] = h[0][1], t;
		for (let f = 0; f < h.length - 1; f++) for (let l = f + 1; l < h.length; l++) {
			let [A, y] = h[f], [v, N] = h[l];
			if (T[A]?.[v] === c$1) t[u] ??= [], t[u] = [
				...t[u],
				...y,
				...N
			];
			else if (A === "default" || v === "default") t[u] ??= [], t[u] = [
				...t[u],
				...y,
				...N
			];
			else {
				let M = `${u}-${e++}`;
				t[M] = y;
				let b = `${u}-${e++}`;
				t[b] = N;
			}
		}
		return t;
	}, {}), "flattenAlignments"), [n$1, r] = C.map((a) => {
		let c$1 = {}, t = {};
		return Object.entries(a).forEach(([u, [i, e]]) => {
			let h = D.getNode(u)?.in ?? "default";
			c$1[e] ??= {}, c$1[e][h] ??= [], c$1[e][h].push(u), t[i] ??= {}, t[i][h] ??= [], t[i][h].push(u);
		}), {
			horiz: /* @__PURE__ */ Object.values(/* @__PURE__ */ g(c$1, "horizontal")).filter((u) => u.length > 1),
			vert: /* @__PURE__ */ Object.values(/* @__PURE__ */ g(t, "vertical")).filter((u) => u.length > 1)
		};
	}).reduce(([a, c$1], { horiz: t, vert: u }) => [[...a, ...t], [...c$1, ...u]], [[], []]);
	return {
		horizontal: n$1,
		vertical: r
	};
}
m(xr, "getAlignments");
function Or(D, C) {
	let T = [], g = /* @__PURE__ */ m((n$1) => `${n$1[0]},${n$1[1]}`, "posToStr"), o = /* @__PURE__ */ m((n$1) => n$1.split(",").map((r) => parseInt(r)), "strToPos");
	return D.forEach((n$1) => {
		let r = /* @__PURE__ */ Object.fromEntries(/* @__PURE__ */ Object.entries(n$1).map(([u, i]) => [/* @__PURE__ */ g(i), u])), a = [/* @__PURE__ */ g([0, 0])], c$1 = {}, t = {
			L: [-1, 0],
			R: [1, 0],
			T: [0, 1],
			B: [0, -1]
		};
		for (; a.length > 0;) {
			let u = /* @__PURE__ */ a.shift();
			if (u) {
				c$1[u] = 1;
				let i = r[u];
				if (i) {
					let e = /* @__PURE__ */ o(u);
					Object.entries(t).forEach(([h, f]) => {
						let l = /* @__PURE__ */ g([e[0] + f[0], e[1] + f[1]]), A = r[l];
						A && !c$1[l] && (a.push(l), T.push({
							[Le[h]]: A,
							[Le[rr(h)]]: i,
							gap: 1.5 * C.getConfigField("iconSize")
						}));
					});
				}
			}
		}
	}), T;
}
m(Or, "getRelativeConstraints");
function Rr$1(D, C, T, g, o, { spatialMaps: n$1, groupAlignments: r }) {
	return new Promise((a) => {
		let c$1 = /* @__PURE__ */ ia("body").append("div").attr("id", "cy").attr("style", "display:none"), t = /* @__PURE__ */ ra({
			container: /* @__PURE__ */ document.getElementById("cy"),
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
						"segment-distances": [.5],
						"edge-distances": "endpoints",
						"source-endpoint": "data(sourceEndpoint)",
						"target-endpoint": "data(targetEndpoint)"
					}
				},
				{
					selector: "node",
					style: { "compound-sizing-wrt-labels": "include" }
				},
				{
					selector: "node[label]",
					style: {
						"text-valign": "bottom",
						"text-halign": "center",
						"font-size": `${o.getConfigField("fontSize")}px`
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
					style: { padding: `${o.getConfigField("padding")}px` }
				}
			],
			layout: {
				name: "grid",
				boundingBox: {
					x1: 0,
					x2: 100,
					y1: 0,
					y2: 100
				}
			}
		});
		c$1.remove(), Mr(T, t), Lr(D, t, o), Dr(C, t, o), wr(g, t);
		let u = /* @__PURE__ */ xr(o, n$1, r), i = /* @__PURE__ */ Or(n$1, o), e = /* @__PURE__ */ t.layout({
			name: "fcose",
			quality: "proof",
			styleEnabled: !1,
			animate: !1,
			nodeDimensionsIncludeLabels: !1,
			idealEdgeLength(h) {
				let [f, l] = h.connectedNodes(), { parent: A } = Jt$1(f), { parent: y } = Jt$1(l);
				return A === y ? 1.5 * o.getConfigField("iconSize") : .5 * o.getConfigField("iconSize");
			},
			edgeElasticity(h) {
				let [f, l] = h.connectedNodes(), { parent: A } = Jt$1(f), { parent: y } = Jt$1(l);
				return A === y ? .45 : .001;
			},
			alignmentConstraint: u,
			relativePlacementConstraint: i
		});
		e.one("layoutstop", () => {
			function h(f, l, A, y) {
				let v, N, { x: S, y: M } = f, { x: b, y: $ } = l;
				N = (y - M + (S - A) * (M - $) / (S - b)) / Math.sqrt(1 + Math.pow((M - $) / (S - b), 2)), v = /* @__PURE__ */ Math.sqrt(Math.pow(y - M, 2) + Math.pow(A - S, 2) - Math.pow(N, 2));
				let X = /* @__PURE__ */ Math.sqrt(Math.pow(b - S, 2) + Math.pow($ - M, 2));
				v = v / X;
				let et = (b - S) * (y - M) - ($ - M) * (A - S);
				switch (!0) {
					case et >= 0:
						et = 1;
						break;
					case et < 0:
						et = -1;
						break;
				}
				let R = (b - S) * (A - S) + ($ - M) * (y - M);
				switch (!0) {
					case R >= 0:
						R = 1;
						break;
					case R < 0:
						R = -1;
						break;
				}
				return N = Math.abs(N) * et, v = v * R, {
					distances: N,
					weights: v
				};
			}
			m(h, "getSegmentWeights"), t.startBatch();
			for (let f of Object.values(/* @__PURE__ */ t.edges())) if (f.data?.()) {
				let { x: l, y: A } = f.source().position(), { x: y, y: v } = f.target().position();
				if (l !== y && A !== v) {
					let N = /* @__PURE__ */ f.sourceEndpoint(), S = /* @__PURE__ */ f.targetEndpoint(), { sourceDir: M } = pe(f), [b, $] = kt(M) ? [N.x, S.y] : [S.x, N.y], { weights: X, distances: et } = h(N, S, b, $);
					f.style("segment-distances", et), f.style("segment-weights", X);
				}
			}
			t.endBatch(), e.run();
		}), e.run(), t.ready((h) => {
			pt.info("Ready", h), a(t);
		});
	});
}
m(Rr$1, "layoutArchitecture");
var Ci = {
	parser: Me,
	get db() {
		return new re();
	},
	renderer: { draw: /* @__PURE__ */ m(async (D, C, T, g) => {
		let o = g.db, n$1 = /* @__PURE__ */ o.getServices(), r = /* @__PURE__ */ o.getJunctions(), a = /* @__PURE__ */ o.getGroups(), c$1 = /* @__PURE__ */ o.getEdges(), t = /* @__PURE__ */ o.getDataStructures(), u = /* @__PURE__ */ d(C), i = /* @__PURE__ */ u.append("g");
		i.attr("class", "architecture-edges");
		let e = /* @__PURE__ */ u.append("g");
		e.attr("class", "architecture-services");
		let h = /* @__PURE__ */ u.append("g");
		h.attr("class", "architecture-groups"), await gr(o, e, n$1), dr$1(o, e, r);
		let f = await Rr$1(n$1, r, a, c$1, o, t);
		await fr(i, f, o), await ur(h, f, o), Cr(o, f), dr(void 0, u, /* @__PURE__ */ o.getConfigField("padding"), /* @__PURE__ */ o.getConfigField("useMaxWidth"));
	}, "draw") },
	styles: lr
};
export { Ci as t };
