import { a as q, n, t as m } from "./vendor-min-mermaid~chunk-GTKDMUJJ.DL2Iapv7.chunk.js";
import { V as ia, q as pt } from "./vendor-min-mermaid~chunk-63GW7ZVL.JXMkVvO5.chunk.js";
import { t as ra } from "./vendor-min-mermaid~chunk-7SRKK4IT.JRp13HHg.chunk.js";
var q$1 = /* @__PURE__ */ n((k, K) => {
	m(function(M, v) {
		typeof k == "object" && typeof K == "object" ? K.exports = /* @__PURE__ */ v() : typeof define == "function" && define.amd ? define([], v) : typeof k == "object" ? k.layoutBase = /* @__PURE__ */ v() : M.layoutBase = /* @__PURE__ */ v();
	}, "webpackUniversalModuleDefinition")(k, function() {
		return function(m$1) {
			var M = {};
			function v(n$1) {
				if (M[n$1]) return M[n$1].exports;
				var e = M[n$1] = {
					i: n$1,
					l: !1,
					exports: {}
				};
				return m$1[n$1].call(e.exports, e, e.exports, v), e.l = !0, e.exports;
			}
			return m(v, "__webpack_require__"), v.m = m$1, v.c = M, v.i = function(n$1) {
				return n$1;
			}, v.d = function(n$1, e, t) {
				v.o(n$1, e) || Object.defineProperty(n$1, e, {
					configurable: !1,
					enumerable: !0,
					get: t
				});
			}, v.n = function(n$1) {
				var e = n$1 && n$1.__esModule ? m(function() {
					return n$1.default;
				}, "getDefault") : m(function() {
					return n$1;
				}, "getModuleExports");
				return v.d(e, "a", e), e;
			}, v.o = function(n$1, e) {
				return Object.prototype.hasOwnProperty.call(n$1, e);
			}, v.p = "", v(v.s = 26);
		}([
			function(m$1, M, v) {
				function n$1() {}
				m(n$1, "LayoutConstants"), n$1.QUALITY = 1, n$1.DEFAULT_CREATE_BENDS_AS_NEEDED = !1, n$1.DEFAULT_INCREMENTAL = !1, n$1.DEFAULT_ANIMATION_ON_LAYOUT = !0, n$1.DEFAULT_ANIMATION_DURING_LAYOUT = !1, n$1.DEFAULT_ANIMATION_PERIOD = 50, n$1.DEFAULT_UNIFORM_LEAF_NODE_SIZES = !1, n$1.DEFAULT_GRAPH_MARGIN = 15, n$1.NODE_DIMENSIONS_INCLUDE_LABELS = !1, n$1.SIMPLE_NODE_SIZE = 40, n$1.SIMPLE_NODE_HALF_SIZE = n$1.SIMPLE_NODE_SIZE / 2, n$1.EMPTY_COMPOUND_NODE_SIZE = 40, n$1.MIN_EDGE_LENGTH = 1, n$1.WORLD_BOUNDARY = 1e6, n$1.INITIAL_WORLD_BOUNDARY = n$1.WORLD_BOUNDARY / 1e3, n$1.WORLD_CENTER_X = 1200, n$1.WORLD_CENTER_Y = 900, m$1.exports = n$1;
			},
			function(m$1, M, v) {
				var n$1 = /* @__PURE__ */ v(2), e = /* @__PURE__ */ v(8), t = /* @__PURE__ */ v(9);
				function r(u, o, p) {
					n$1.call(this, p), this.isOverlapingSourceAndTarget = !1, this.vGraphObject = p, this.bendpoints = [], this.source = u, this.target = o;
				}
				m(r, "LEdge"), r.prototype = /* @__PURE__ */ Object.create(n$1.prototype);
				for (var a in n$1) r[a] = n$1[a];
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
				}, r.prototype.getOtherEnd = function(u) {
					if (this.source === u) return this.target;
					if (this.target === u) return this.source;
					throw "Node is not incident with this edge";
				}, r.prototype.getOtherEndInGraph = function(u, o) {
					for (var p = /* @__PURE__ */ this.getOtherEnd(u), i = /* @__PURE__ */ o.getGraphManager().getRoot();;) {
						if (p.getOwner() == o) return p;
						if (p.getOwner() == i) break;
						p = /* @__PURE__ */ p.getOwner().getParent();
					}
					return null;
				}, r.prototype.updateLength = function() {
					var u = new Array(4);
					this.isOverlapingSourceAndTarget = /* @__PURE__ */ e.getIntersection(/* @__PURE__ */ this.target.getRect(), /* @__PURE__ */ this.source.getRect(), u), this.isOverlapingSourceAndTarget || (this.lengthX = u[0] - u[2], this.lengthY = u[1] - u[3], Math.abs(this.lengthX) < 1 && (this.lengthX = /* @__PURE__ */ t.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = /* @__PURE__ */ t.sign(this.lengthY)), this.length = /* @__PURE__ */ Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY));
				}, r.prototype.updateLengthSimple = function() {
					this.lengthX = this.target.getCenterX() - this.source.getCenterX(), this.lengthY = this.target.getCenterY() - this.source.getCenterY(), Math.abs(this.lengthX) < 1 && (this.lengthX = /* @__PURE__ */ t.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = /* @__PURE__ */ t.sign(this.lengthY)), this.length = /* @__PURE__ */ Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
				}, m$1.exports = r;
			},
			function(m$1, M, v) {
				function n$1(e) {
					this.vGraphObject = e;
				}
				m(n$1, "LGraphObject"), m$1.exports = n$1;
			},
			function(m$1, M, v) {
				var n$1 = /* @__PURE__ */ v(2), e = /* @__PURE__ */ v(10), t = /* @__PURE__ */ v(13), r = /* @__PURE__ */ v(0), a = /* @__PURE__ */ v(16), u = /* @__PURE__ */ v(4);
				function o(i, h, l, d) {
					l == null && d == null && (d = h), n$1.call(this, d), i.graphManager != null && (i = i.graphManager), this.estimatedSize = e.MIN_VALUE, this.inclusionTreeDepth = e.MAX_VALUE, this.vGraphObject = d, this.edges = [], this.graphManager = i, l != null && h != null ? this.rect = new t(h.x, h.y, l.width, l.height) : this.rect = new t();
				}
				m(o, "LNode"), o.prototype = /* @__PURE__ */ Object.create(n$1.prototype);
				for (var p in n$1) o[p] = n$1[p];
				o.prototype.getEdges = function() {
					return this.edges;
				}, o.prototype.getChild = function() {
					return this.child;
				}, o.prototype.getOwner = function() {
					return this.owner;
				}, o.prototype.getWidth = function() {
					return this.rect.width;
				}, o.prototype.setWidth = function(i) {
					this.rect.width = i;
				}, o.prototype.getHeight = function() {
					return this.rect.height;
				}, o.prototype.setHeight = function(i) {
					this.rect.height = i;
				}, o.prototype.getCenterX = function() {
					return this.rect.x + this.rect.width / 2;
				}, o.prototype.getCenterY = function() {
					return this.rect.y + this.rect.height / 2;
				}, o.prototype.getCenter = function() {
					return new u(this.rect.x + this.rect.width / 2, this.rect.y + this.rect.height / 2);
				}, o.prototype.getLocation = function() {
					return new u(this.rect.x, this.rect.y);
				}, o.prototype.getRect = function() {
					return this.rect;
				}, o.prototype.getDiagonal = function() {
					return Math.sqrt(this.rect.width * this.rect.width + this.rect.height * this.rect.height);
				}, o.prototype.getHalfTheDiagonal = function() {
					return Math.sqrt(this.rect.height * this.rect.height + this.rect.width * this.rect.width) / 2;
				}, o.prototype.setRect = function(i, h) {
					this.rect.x = i.x, this.rect.y = i.y, this.rect.width = h.width, this.rect.height = h.height;
				}, o.prototype.setCenter = function(i, h) {
					this.rect.x = i - this.rect.width / 2, this.rect.y = h - this.rect.height / 2;
				}, o.prototype.setLocation = function(i, h) {
					this.rect.x = i, this.rect.y = h;
				}, o.prototype.moveBy = function(i, h) {
					this.rect.x += i, this.rect.y += h;
				}, o.prototype.getEdgeListToNode = function(i) {
					var h = [], d = this;
					return d.edges.forEach(function(y) {
						if (y.target == i) {
							if (y.source != d) throw "Incorrect edge source!";
							h.push(y);
						}
					}), h;
				}, o.prototype.getEdgesBetween = function(i) {
					var h = [], d = this;
					return d.edges.forEach(function(y) {
						if (!(y.source == d || y.target == d)) throw "Incorrect edge source and/or target";
						(y.target == i || y.source == i) && h.push(y);
					}), h;
				}, o.prototype.getNeighborsList = function() {
					var i = /* @__PURE__ */ new Set(), h = this;
					return h.edges.forEach(function(l) {
						if (l.source == h) i.add(l.target);
						else {
							if (l.target != h) throw "Incorrect incidency!";
							i.add(l.source);
						}
					}), i;
				}, o.prototype.withChildren = function() {
					var i = /* @__PURE__ */ new Set(), h, l;
					if (i.add(this), this.child != null) for (var d = /* @__PURE__ */ this.child.getNodes(), y = 0; y < d.length; y++) h = d[y], l = /* @__PURE__ */ h.withChildren(), l.forEach(function(T) {
						i.add(T);
					});
					return i;
				}, o.prototype.getNoOfChildren = function() {
					var i = 0, h;
					if (this.child == null) i = 1;
					else for (var l = /* @__PURE__ */ this.child.getNodes(), d = 0; d < l.length; d++) h = l[d], i += /* @__PURE__ */ h.getNoOfChildren();
					return i == 0 && (i = 1), i;
				}, o.prototype.getEstimatedSize = function() {
					if (this.estimatedSize == e.MIN_VALUE) throw "assert failed";
					return this.estimatedSize;
				}, o.prototype.calcEstimatedSize = function() {
					return this.child == null ? this.estimatedSize = (this.rect.width + this.rect.height) / 2 : (this.estimatedSize = /* @__PURE__ */ this.child.calcEstimatedSize(), this.rect.width = this.estimatedSize, this.rect.height = this.estimatedSize, this.estimatedSize);
				}, o.prototype.scatter = function() {
					var i, h, l = -r.INITIAL_WORLD_BOUNDARY, d = r.INITIAL_WORLD_BOUNDARY;
					i = r.WORLD_CENTER_X + a.nextDouble() * (d - l) + l;
					var y = -r.INITIAL_WORLD_BOUNDARY, T = r.INITIAL_WORLD_BOUNDARY;
					h = r.WORLD_CENTER_Y + a.nextDouble() * (T - y) + y, this.rect.x = i, this.rect.y = h;
				}, o.prototype.updateBounds = function() {
					if (this.getChild() == null) throw "assert failed";
					if (this.getChild().getNodes().length != 0) {
						var i = /* @__PURE__ */ this.getChild();
						if (i.updateBounds(!0), this.rect.x = /* @__PURE__ */ i.getLeft(), this.rect.y = /* @__PURE__ */ i.getTop(), this.setWidth(i.getRight() - i.getLeft()), this.setHeight(i.getBottom() - i.getTop()), r.NODE_DIMENSIONS_INCLUDE_LABELS) {
							var h = i.getRight() - i.getLeft(), l = i.getBottom() - i.getTop();
							this.labelWidth > h && (this.rect.x -= (this.labelWidth - h) / 2, this.setWidth(this.labelWidth)), this.labelHeight > l && (this.labelPos == "center" ? this.rect.y -= (this.labelHeight - l) / 2 : this.labelPos == "top" && (this.rect.y -= this.labelHeight - l), this.setHeight(this.labelHeight));
						}
					}
				}, o.prototype.getInclusionTreeDepth = function() {
					if (this.inclusionTreeDepth == e.MAX_VALUE) throw "assert failed";
					return this.inclusionTreeDepth;
				}, o.prototype.transform = function(i) {
					var h = this.rect.x;
					h > r.WORLD_BOUNDARY ? h = r.WORLD_BOUNDARY : h < -r.WORLD_BOUNDARY && (h = -r.WORLD_BOUNDARY);
					var l = this.rect.y;
					l > r.WORLD_BOUNDARY ? l = r.WORLD_BOUNDARY : l < -r.WORLD_BOUNDARY && (l = -r.WORLD_BOUNDARY);
					var d = new u(h, l), y = /* @__PURE__ */ i.inverseTransformPoint(d);
					this.setLocation(y.x, y.y);
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
				}, m$1.exports = o;
			},
			function(m$1, M, v) {
				function n$1(e, t) {
					e == null && t == null ? (this.x = 0, this.y = 0) : (this.x = e, this.y = t);
				}
				m(n$1, "PointD"), n$1.prototype.getX = function() {
					return this.x;
				}, n$1.prototype.getY = function() {
					return this.y;
				}, n$1.prototype.setX = function(e) {
					this.x = e;
				}, n$1.prototype.setY = function(e) {
					this.y = e;
				}, n$1.prototype.getDifference = function(e) {
					return new DimensionD(this.x - e.x, this.y - e.y);
				}, n$1.prototype.getCopy = function() {
					return new n$1(this.x, this.y);
				}, n$1.prototype.translate = function(e) {
					return this.x += e.width, this.y += e.height, this;
				}, m$1.exports = n$1;
			},
			function(m$1, M, v) {
				var n$1 = /* @__PURE__ */ v(2), e = /* @__PURE__ */ v(10), t = /* @__PURE__ */ v(0), r = /* @__PURE__ */ v(6), a = /* @__PURE__ */ v(3), u = /* @__PURE__ */ v(1), o = /* @__PURE__ */ v(13), p = /* @__PURE__ */ v(12), i = /* @__PURE__ */ v(11);
				function h(d, y, T) {
					n$1.call(this, T), this.estimatedSize = e.MIN_VALUE, this.margin = t.DEFAULT_GRAPH_MARGIN, this.edges = [], this.nodes = [], this.isConnected = !1, this.parent = d, y != null && y instanceof r ? this.graphManager = y : y != null && y instanceof Layout && (this.graphManager = y.graphManager);
				}
				m(h, "LGraph"), h.prototype = /* @__PURE__ */ Object.create(n$1.prototype);
				for (var l in n$1) h[l] = n$1[l];
				h.prototype.getNodes = function() {
					return this.nodes;
				}, h.prototype.getEdges = function() {
					return this.edges;
				}, h.prototype.getGraphManager = function() {
					return this.graphManager;
				}, h.prototype.getParent = function() {
					return this.parent;
				}, h.prototype.getLeft = function() {
					return this.left;
				}, h.prototype.getRight = function() {
					return this.right;
				}, h.prototype.getTop = function() {
					return this.top;
				}, h.prototype.getBottom = function() {
					return this.bottom;
				}, h.prototype.isConnected = function() {
					return this.isConnected;
				}, h.prototype.add = function(d, y, T) {
					if (y == null && T == null) {
						var c = d;
						if (this.graphManager == null) throw "Graph has no graph mgr!";
						if (this.getNodes().indexOf(c) > -1) throw "Node already in graph!";
						return c.owner = this, this.getNodes().push(c), c;
					} else {
						var D = d;
						if (!(this.getNodes().indexOf(y) > -1 && this.getNodes().indexOf(T) > -1)) throw "Source or target not in graph!";
						if (!(y.owner == T.owner && y.owner == this)) throw "Both owners must be this graph!";
						return y.owner != T.owner ? null : (D.source = y, D.target = T, D.isInterGraph = !1, this.getEdges().push(D), y.edges.push(D), T != y && T.edges.push(D), D);
					}
				}, h.prototype.remove = function(d) {
					var y = d;
					if (d instanceof a) {
						if (y == null) throw "Node is null!";
						if (!(y.owner != null && y.owner == this)) throw "Owner graph is invalid!";
						if (this.graphManager == null) throw "Owner graph manager is invalid!";
						for (var T = /* @__PURE__ */ y.edges.slice(), c, D = T.length, E = 0; E < D; E++) c = T[E], c.isInterGraph ? this.graphManager.remove(c) : c.source.owner.remove(c);
						var O = /* @__PURE__ */ this.nodes.indexOf(y);
						if (O == -1) throw "Node not in owner node list!";
						this.nodes.splice(O, 1);
					} else if (d instanceof u) {
						var c = d;
						if (c == null) throw "Edge is null!";
						if (!(c.source != null && c.target != null)) throw "Source and/or target is null!";
						if (!(c.source.owner != null && c.target.owner != null && c.source.owner == this && c.target.owner == this)) throw "Source and/or target owner is invalid!";
						var s = /* @__PURE__ */ c.source.edges.indexOf(c), g = /* @__PURE__ */ c.target.edges.indexOf(c);
						if (!(s > -1 && g > -1)) throw "Source and/or target doesn't know this edge!";
						c.source.edges.splice(s, 1), c.target != c.source && c.target.edges.splice(g, 1);
						var O = /* @__PURE__ */ c.source.owner.getEdges().indexOf(c);
						if (O == -1) throw "Not in owner's edge list!";
						c.source.owner.getEdges().splice(O, 1);
					}
				}, h.prototype.updateLeftTop = function() {
					for (var d = e.MAX_VALUE, y = e.MAX_VALUE, T, c, D, E = /* @__PURE__ */ this.getNodes(), O = E.length, s = 0; s < O; s++) {
						var g = E[s];
						T = /* @__PURE__ */ g.getTop(), c = /* @__PURE__ */ g.getLeft(), d > T && (d = T), y > c && (y = c);
					}
					return d == e.MAX_VALUE ? null : (E[0].getParent().paddingLeft != null ? D = E[0].getParent().paddingLeft : D = this.margin, this.left = y - D, this.top = d - D, new p(this.left, this.top));
				}, h.prototype.updateBounds = function(d) {
					for (var y = e.MAX_VALUE, T = -e.MAX_VALUE, c = e.MAX_VALUE, D = -e.MAX_VALUE, E, O, s, g, f, L = this.nodes, N = L.length, I = 0; I < N; I++) {
						var R = L[I];
						d && R.child != null && R.updateBounds(), E = /* @__PURE__ */ R.getLeft(), O = /* @__PURE__ */ R.getRight(), s = /* @__PURE__ */ R.getTop(), g = /* @__PURE__ */ R.getBottom(), y > E && (y = E), T < O && (T = O), c > s && (c = s), D < g && (D = g);
					}
					var C = new o(y, c, T - y, D - c);
					y == e.MAX_VALUE && (this.left = /* @__PURE__ */ this.parent.getLeft(), this.right = /* @__PURE__ */ this.parent.getRight(), this.top = /* @__PURE__ */ this.parent.getTop(), this.bottom = /* @__PURE__ */ this.parent.getBottom()), L[0].getParent().paddingLeft != null ? f = L[0].getParent().paddingLeft : f = this.margin, this.left = C.x - f, this.right = C.x + C.width + f, this.top = C.y - f, this.bottom = C.y + C.height + f;
				}, h.calculateBounds = function(d) {
					for (var y = e.MAX_VALUE, T = -e.MAX_VALUE, c = e.MAX_VALUE, D = -e.MAX_VALUE, E, O, s, g, f = d.length, L = 0; L < f; L++) {
						var N = d[L];
						E = /* @__PURE__ */ N.getLeft(), O = /* @__PURE__ */ N.getRight(), s = /* @__PURE__ */ N.getTop(), g = /* @__PURE__ */ N.getBottom(), y > E && (y = E), T < O && (T = O), c > s && (c = s), D < g && (D = g);
					}
					return new o(y, c, T - y, D - c);
				}, h.prototype.getInclusionTreeDepth = function() {
					return this == this.graphManager.getRoot() ? 1 : this.parent.getInclusionTreeDepth();
				}, h.prototype.getEstimatedSize = function() {
					if (this.estimatedSize == e.MIN_VALUE) throw "assert failed";
					return this.estimatedSize;
				}, h.prototype.calcEstimatedSize = function() {
					for (var d = 0, y = this.nodes, T = y.length, c = 0; c < T; c++) {
						var D = y[c];
						d += /* @__PURE__ */ D.calcEstimatedSize();
					}
					return d == 0 ? this.estimatedSize = t.EMPTY_COMPOUND_NODE_SIZE : this.estimatedSize = d / Math.sqrt(this.nodes.length), this.estimatedSize;
				}, h.prototype.updateConnected = function() {
					var d = this;
					if (this.nodes.length == 0) {
						this.isConnected = !0;
						return;
					}
					var y = new i(), T = /* @__PURE__ */ new Set(), c = this.nodes[0], D, E;
					for (c.withChildren().forEach(function(I) {
						y.push(I), T.add(I);
					}); y.length !== 0;) {
						c = /* @__PURE__ */ y.shift(), D = /* @__PURE__ */ c.getEdges();
						for (var s = D.length, g = 0; g < s; g++) if (E = /* @__PURE__ */ D[g].getOtherEndInGraph(c, this), E != null && !T.has(E)) E.withChildren().forEach(function(I) {
							y.push(I), T.add(I);
						});
					}
					if (this.isConnected = !1, T.size >= this.nodes.length) {
						var N = 0;
						T.forEach(function(I) {
							I.owner == d && N++;
						}), N == this.nodes.length && (this.isConnected = !0);
					}
				}, m$1.exports = h;
			},
			function(m$1, M, v) {
				var n$1, e = /* @__PURE__ */ v(1);
				function t(r) {
					n$1 = /* @__PURE__ */ v(5), this.layout = r, this.graphs = [], this.edges = [];
				}
				m(t, "LGraphManager"), t.prototype.addRoot = function() {
					var r = /* @__PURE__ */ this.layout.newGraph(), a = /* @__PURE__ */ this.layout.newNode(null), u = /* @__PURE__ */ this.add(r, a);
					return this.setRootGraph(u), this.rootGraph;
				}, t.prototype.add = function(r, a, u, o, p) {
					if (u == null && o == null && p == null) {
						if (r == null) throw "Graph is null!";
						if (a == null) throw "Parent node is null!";
						if (this.graphs.indexOf(r) > -1) throw "Graph already in this graph mgr!";
						if (this.graphs.push(r), r.parent != null) throw "Already has a parent!";
						if (a.child != null) throw "Already has a child!";
						return r.parent = a, a.child = r, r;
					} else {
						p = u, o = a, u = r;
						var i = /* @__PURE__ */ o.getOwner(), h = /* @__PURE__ */ p.getOwner();
						if (!(i != null && i.getGraphManager() == this)) throw "Source not in this graph mgr!";
						if (!(h != null && h.getGraphManager() == this)) throw "Target not in this graph mgr!";
						if (i == h) return u.isInterGraph = !1, i.add(u, o, p);
						if (u.isInterGraph = !0, u.source = o, u.target = p, this.edges.indexOf(u) > -1) throw "Edge already in inter-graph edge list!";
						if (this.edges.push(u), !(u.source != null && u.target != null)) throw "Edge source and/or target is null!";
						if (!(u.source.edges.indexOf(u) == -1 && u.target.edges.indexOf(u) == -1)) throw "Edge already in source and/or target incidency list!";
						return u.source.edges.push(u), u.target.edges.push(u), u;
					}
				}, t.prototype.remove = function(r) {
					if (r instanceof n$1) {
						var a = r;
						if (a.getGraphManager() != this) throw "Graph not in this graph mgr";
						if (!(a == this.rootGraph || a.parent != null && a.parent.graphManager == this)) throw "Invalid parent node!";
						var u = [];
						u = /* @__PURE__ */ u.concat(/* @__PURE__ */ a.getEdges());
						for (var o, p = u.length, i = 0; i < p; i++) o = u[i], a.remove(o);
						var h = [];
						h = /* @__PURE__ */ h.concat(/* @__PURE__ */ a.getNodes());
						var l;
						p = h.length;
						for (var i = 0; i < p; i++) l = h[i], a.remove(l);
						a == this.rootGraph && this.setRootGraph(null);
						var d = /* @__PURE__ */ this.graphs.indexOf(a);
						this.graphs.splice(d, 1), a.parent = null;
					} else if (r instanceof e) {
						if (o = r, o == null) throw "Edge is null!";
						if (!o.isInterGraph) throw "Not an inter-graph edge!";
						if (!(o.source != null && o.target != null)) throw "Source and/or target is null!";
						if (!(o.source.edges.indexOf(o) != -1 && o.target.edges.indexOf(o) != -1)) throw "Source and/or target doesn't know this edge!";
						var d = /* @__PURE__ */ o.source.edges.indexOf(o);
						if (o.source.edges.splice(d, 1), d = /* @__PURE__ */ o.target.edges.indexOf(o), o.target.edges.splice(d, 1), !(o.source.owner != null && o.source.owner.getGraphManager() != null)) throw "Edge owner graph or owner graph manager is null!";
						if (o.source.owner.getGraphManager().edges.indexOf(o) == -1) throw "Not in owner graph manager's edge list!";
						var d = /* @__PURE__ */ o.source.owner.getGraphManager().edges.indexOf(o);
						o.source.owner.getGraphManager().edges.splice(d, 1);
					}
				}, t.prototype.updateBounds = function() {
					this.rootGraph.updateBounds(!0);
				}, t.prototype.getGraphs = function() {
					return this.graphs;
				}, t.prototype.getAllNodes = function() {
					if (this.allNodes == null) {
						for (var r = [], a = /* @__PURE__ */ this.getGraphs(), u = a.length, o = 0; o < u; o++) r = /* @__PURE__ */ r.concat(/* @__PURE__ */ a[o].getNodes());
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
						for (var r = [], a = /* @__PURE__ */ this.getGraphs(), u = a.length, o = 0; o < a.length; o++) r = /* @__PURE__ */ r.concat(/* @__PURE__ */ a[o].getEdges());
						r = /* @__PURE__ */ r.concat(this.edges), this.allEdges = r;
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
					this.rootGraph = r, r.parent ??= /* @__PURE__ */ this.layout.newNode("Root node");
				}, t.prototype.getLayout = function() {
					return this.layout;
				}, t.prototype.isOneAncestorOfOther = function(r, a) {
					if (!(r != null && a != null)) throw "assert failed";
					if (r == a) return !0;
					var u = /* @__PURE__ */ r.getOwner(), o;
					do {
						if (o = /* @__PURE__ */ u.getParent(), o == null) break;
						if (o == a) return !0;
						if (u = /* @__PURE__ */ o.getOwner(), u == null) break;
					} while (!0);
					u = /* @__PURE__ */ a.getOwner();
					do {
						if (o = /* @__PURE__ */ u.getParent(), o == null) break;
						if (o == r) return !0;
						if (u = /* @__PURE__ */ o.getOwner(), u == null) break;
					} while (!0);
					return !1;
				}, t.prototype.calcLowestCommonAncestors = function() {
					for (var r, a, u, o, p, i = /* @__PURE__ */ this.getAllEdges(), h = i.length, l = 0; l < h; l++) {
						if (r = i[l], a = r.source, u = r.target, r.lca = null, r.sourceInLca = a, r.targetInLca = u, a == u) {
							r.lca = /* @__PURE__ */ a.getOwner();
							continue;
						}
						for (o = /* @__PURE__ */ a.getOwner(); r.lca == null;) {
							for (r.targetInLca = u, p = /* @__PURE__ */ u.getOwner(); r.lca == null;) {
								if (p == o) {
									r.lca = p;
									break;
								}
								if (p == this.rootGraph) break;
								if (r.lca != null) throw "assert failed";
								r.targetInLca = /* @__PURE__ */ p.getParent(), p = /* @__PURE__ */ r.targetInLca.getOwner();
							}
							if (o == this.rootGraph) break;
							r.lca ?? (r.sourceInLca = /* @__PURE__ */ o.getParent(), o = /* @__PURE__ */ r.sourceInLca.getOwner());
						}
						if (r.lca == null) throw "assert failed";
					}
				}, t.prototype.calcLowestCommonAncestor = function(r, a) {
					if (r == a) return r.getOwner();
					var u = /* @__PURE__ */ r.getOwner();
					do {
						if (u == null) break;
						var o = /* @__PURE__ */ a.getOwner();
						do {
							if (o == null) break;
							if (o == u) return o;
							o = /* @__PURE__ */ o.getParent().getOwner();
						} while (!0);
						u = /* @__PURE__ */ u.getParent().getOwner();
					} while (!0);
					return u;
				}, t.prototype.calcInclusionTreeDepths = function(r, a) {
					r == null && a == null && (r = this.rootGraph, a = 1);
					for (var u, o = /* @__PURE__ */ r.getNodes(), p = o.length, i = 0; i < p; i++) u = o[i], u.inclusionTreeDepth = a, u.child != null && this.calcInclusionTreeDepths(u.child, a + 1);
				}, t.prototype.includesInvalidEdge = function() {
					for (var r, a = this.edges.length, u = 0; u < a; u++) if (r = this.edges[u], this.isOneAncestorOfOther(r.source, r.target)) return !0;
					return !1;
				}, m$1.exports = t;
			},
			function(m$1, M, v) {
				var n$1 = /* @__PURE__ */ v(0);
				function e() {}
				m(e, "FDLayoutConstants");
				for (var t in n$1) e[t] = n$1[t];
				e.MAX_ITERATIONS = 2500, e.DEFAULT_EDGE_LENGTH = 50, e.DEFAULT_SPRING_STRENGTH = .45, e.DEFAULT_REPULSION_STRENGTH = 4500, e.DEFAULT_GRAVITY_STRENGTH = .4, e.DEFAULT_COMPOUND_GRAVITY_STRENGTH = 1, e.DEFAULT_GRAVITY_RANGE_FACTOR = 3.8, e.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = 1.5, e.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION = !0, e.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION = !0, e.DEFAULT_COOLING_FACTOR_INCREMENTAL = .3, e.COOLING_ADAPTATION_FACTOR = .33, e.ADAPTATION_LOWER_NODE_LIMIT = 1e3, e.ADAPTATION_UPPER_NODE_LIMIT = 5e3, e.MAX_NODE_DISPLACEMENT_INCREMENTAL = 100, e.MAX_NODE_DISPLACEMENT = e.MAX_NODE_DISPLACEMENT_INCREMENTAL * 3, e.MIN_REPULSION_DIST = e.DEFAULT_EDGE_LENGTH / 10, e.CONVERGENCE_CHECK_PERIOD = 100, e.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = .1, e.MIN_EDGE_LENGTH = 1, e.GRID_CALCULATION_CHECK_PERIOD = 10, m$1.exports = e;
			},
			function(m$1, M, v) {
				var n$1 = /* @__PURE__ */ v(12);
				function e() {}
				m(e, "IGeometry"), e.calcSeparationAmount = function(t, r, a, u) {
					if (!t.intersects(r)) throw "assert failed";
					var o = new Array(2);
					this.decideDirectionsForOverlappingNodes(t, r, o), a[0] = Math.min(/* @__PURE__ */ t.getRight(), /* @__PURE__ */ r.getRight()) - Math.max(t.x, r.x), a[1] = Math.min(/* @__PURE__ */ t.getBottom(), /* @__PURE__ */ r.getBottom()) - Math.max(t.y, r.y), t.getX() <= r.getX() && t.getRight() >= r.getRight() ? a[0] += /* @__PURE__ */ Math.min(r.getX() - t.getX(), t.getRight() - r.getRight()) : r.getX() <= t.getX() && r.getRight() >= t.getRight() && (a[0] += /* @__PURE__ */ Math.min(t.getX() - r.getX(), r.getRight() - t.getRight())), t.getY() <= r.getY() && t.getBottom() >= r.getBottom() ? a[1] += /* @__PURE__ */ Math.min(r.getY() - t.getY(), t.getBottom() - r.getBottom()) : r.getY() <= t.getY() && r.getBottom() >= t.getBottom() && (a[1] += /* @__PURE__ */ Math.min(t.getY() - r.getY(), r.getBottom() - t.getBottom()));
					var p = /* @__PURE__ */ Math.abs((r.getCenterY() - t.getCenterY()) / (r.getCenterX() - t.getCenterX()));
					r.getCenterY() === t.getCenterY() && r.getCenterX() === t.getCenterX() && (p = 1);
					var i = p * a[0], h = a[1] / p;
					a[0] < h ? h = a[0] : i = a[1], a[0] = -1 * o[0] * (h / 2 + u), a[1] = -1 * o[1] * (i / 2 + u);
				}, e.decideDirectionsForOverlappingNodes = function(t, r, a) {
					t.getCenterX() < r.getCenterX() ? a[0] = -1 : a[0] = 1, t.getCenterY() < r.getCenterY() ? a[1] = -1 : a[1] = 1;
				}, e.getIntersection2 = function(t, r, a) {
					var u = /* @__PURE__ */ t.getCenterX(), o = /* @__PURE__ */ t.getCenterY(), p = /* @__PURE__ */ r.getCenterX(), i = /* @__PURE__ */ r.getCenterY();
					if (t.intersects(r)) return a[0] = u, a[1] = o, a[2] = p, a[3] = i, !0;
					var h = /* @__PURE__ */ t.getX(), l = /* @__PURE__ */ t.getY(), d = /* @__PURE__ */ t.getRight(), y = /* @__PURE__ */ t.getX(), T = /* @__PURE__ */ t.getBottom(), c = /* @__PURE__ */ t.getRight(), D = /* @__PURE__ */ t.getWidthHalf(), E = /* @__PURE__ */ t.getHeightHalf(), O = /* @__PURE__ */ r.getX(), s = /* @__PURE__ */ r.getY(), g = /* @__PURE__ */ r.getRight(), f = /* @__PURE__ */ r.getX(), L = /* @__PURE__ */ r.getBottom(), N = /* @__PURE__ */ r.getRight(), I = /* @__PURE__ */ r.getWidthHalf(), R = /* @__PURE__ */ r.getHeightHalf(), C = !1, G = !1;
					if (u === p) {
						if (o > i) return a[0] = u, a[1] = l, a[2] = p, a[3] = L, !1;
						if (o < i) return a[0] = u, a[1] = T, a[2] = p, a[3] = s, !1;
					} else if (o === i) {
						if (u > p) return a[0] = h, a[1] = o, a[2] = g, a[3] = i, !1;
						if (u < p) return a[0] = d, a[1] = o, a[2] = O, a[3] = i, !1;
					} else {
						var S = t.height / t.width, _ = r.height / r.width, F = (i - o) / (p - u), w = void 0, x = void 0, P = void 0, Y = void 0, X = void 0, U = void 0;
						if (-S === F ? u > p ? (a[0] = y, a[1] = T, C = !0) : (a[0] = d, a[1] = l, C = !0) : S === F && (u > p ? (a[0] = h, a[1] = l, C = !0) : (a[0] = c, a[1] = T, C = !0)), -_ === F ? p > u ? (a[2] = f, a[3] = L, G = !0) : (a[2] = g, a[3] = s, G = !0) : _ === F && (p > u ? (a[2] = O, a[3] = s, G = !0) : (a[2] = N, a[3] = L, G = !0)), C && G) return !1;
						if (u > p ? o > i ? (w = /* @__PURE__ */ this.getCardinalDirection(S, F, 4), x = /* @__PURE__ */ this.getCardinalDirection(_, F, 2)) : (w = /* @__PURE__ */ this.getCardinalDirection(-S, F, 3), x = /* @__PURE__ */ this.getCardinalDirection(-_, F, 1)) : o > i ? (w = /* @__PURE__ */ this.getCardinalDirection(-S, F, 1), x = /* @__PURE__ */ this.getCardinalDirection(-_, F, 3)) : (w = /* @__PURE__ */ this.getCardinalDirection(S, F, 2), x = /* @__PURE__ */ this.getCardinalDirection(_, F, 4)), !C) switch (w) {
							case 1:
								Y = l, P = u + -E / F, a[0] = P, a[1] = Y;
								break;
							case 2:
								P = c, Y = o + D * F, a[0] = P, a[1] = Y;
								break;
							case 3:
								Y = T, P = u + E / F, a[0] = P, a[1] = Y;
								break;
							case 4:
								P = y, Y = o + -D * F, a[0] = P, a[1] = Y;
								break;
						}
						if (!G) switch (x) {
							case 1:
								U = s, X = p + -R / F, a[2] = X, a[3] = U;
								break;
							case 2:
								X = N, U = i + I * F, a[2] = X, a[3] = U;
								break;
							case 3:
								U = L, X = p + R / F, a[2] = X, a[3] = U;
								break;
							case 4:
								X = f, U = i + -I * F, a[2] = X, a[3] = U;
								break;
						}
					}
					return !1;
				}, e.getCardinalDirection = function(t, r, a) {
					return t > r ? a : 1 + a % 4;
				}, e.getIntersection = function(t, r, a, u) {
					if (u == null) return this.getIntersection2(t, r, a);
					var o = t.x, p = t.y, i = r.x, h = r.y, l = a.x, d = a.y, y = u.x, T = u.y, c = void 0, D = void 0, E = void 0, O = void 0, s = void 0, g = void 0, f = void 0, L = void 0, N = void 0;
					return E = h - p, s = o - i, f = i * p - o * h, O = T - d, g = l - y, L = y * d - l * T, N = E * g - O * s, N === 0 ? null : (c = (s * L - g * f) / N, D = (O * f - E * L) / N, new n$1(c, D));
				}, e.angleOfVector = function(t, r, a, u) {
					var o = void 0;
					return t !== a ? (o = /* @__PURE__ */ Math.atan((u - r) / (a - t)), a < t ? o += Math.PI : u < r && (o += this.TWO_PI)) : u < r ? o = this.ONE_AND_HALF_PI : o = this.HALF_PI, o;
				}, e.doIntersect = function(t, r, a, u) {
					var o = t.x, p = t.y, i = r.x, h = r.y, l = a.x, d = a.y, y = u.x, T = u.y, c = (i - o) * (T - d) - (y - l) * (h - p);
					if (c === 0) return !1;
					var D = ((T - d) * (y - o) + (l - y) * (T - p)) / c, E = ((p - h) * (y - o) + (i - o) * (T - p)) / c;
					return 0 < D && D < 1 && 0 < E && E < 1;
				}, e.HALF_PI = .5 * Math.PI, e.ONE_AND_HALF_PI = 1.5 * Math.PI, e.TWO_PI = 2 * Math.PI, e.THREE_PI = 3 * Math.PI, m$1.exports = e;
			},
			function(m$1, M, v) {
				function n$1() {}
				m(n$1, "IMath"), n$1.sign = function(e) {
					return e > 0 ? 1 : e < 0 ? -1 : 0;
				}, n$1.floor = function(e) {
					return e < 0 ? Math.ceil(e) : Math.floor(e);
				}, n$1.ceil = function(e) {
					return e < 0 ? Math.floor(e) : Math.ceil(e);
				}, m$1.exports = n$1;
			},
			function(m$1, M, v) {
				function n$1() {}
				m(n$1, "Integer"), n$1.MAX_VALUE = 2147483647, n$1.MIN_VALUE = -2147483648, m$1.exports = n$1;
			},
			function(m$1, M, v) {
				var n$1 = /* @__PURE__ */ function() {
					function o(p, i) {
						for (var h = 0; h < i.length; h++) {
							var l = i[h];
							l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(p, l.key, l);
						}
					}
					return m(o, "defineProperties"), function(p, i, h) {
						return i && o(p.prototype, i), h && o(p, h), p;
					};
				}();
				function e(o, p) {
					if (!(o instanceof p)) throw new TypeError("Cannot call a class as a function");
				}
				m(e, "_classCallCheck");
				var t = /* @__PURE__ */ m(function(p) {
					return {
						value: p,
						next: null,
						prev: null
					};
				}, "nodeFrom"), r = /* @__PURE__ */ m(function(p, i, h, l) {
					return p !== null ? p.next = i : l.head = i, h !== null ? h.prev = i : l.tail = i, i.prev = p, i.next = h, l.length++, i;
				}, "add"), a = /* @__PURE__ */ m(function(p, i) {
					var h = p.prev, l = p.next;
					return h !== null ? h.next = l : i.head = l, l !== null ? l.prev = h : i.tail = h, p.prev = p.next = null, i.length--, p;
				}, "_remove");
				m$1.exports = /* @__PURE__ */ function() {
					function o(p) {
						var i = this;
						e(this, o), this.length = 0, this.head = null, this.tail = null, p?.forEach(function(h) {
							return i.push(h);
						});
					}
					return m(o, "LinkedList"), n$1(o, [
						{
							key: "size",
							value: /* @__PURE__ */ m(function() {
								return this.length;
							}, "size")
						},
						{
							key: "insertBefore",
							value: /* @__PURE__ */ m(function(i, h) {
								return r(h.prev, /* @__PURE__ */ t(i), h, this);
							}, "insertBefore")
						},
						{
							key: "insertAfter",
							value: /* @__PURE__ */ m(function(i, h) {
								return r(h, /* @__PURE__ */ t(i), h.next, this);
							}, "insertAfter")
						},
						{
							key: "insertNodeBefore",
							value: /* @__PURE__ */ m(function(i, h) {
								return r(h.prev, i, h, this);
							}, "insertNodeBefore")
						},
						{
							key: "insertNodeAfter",
							value: /* @__PURE__ */ m(function(i, h) {
								return r(h, i, h.next, this);
							}, "insertNodeAfter")
						},
						{
							key: "push",
							value: /* @__PURE__ */ m(function(i) {
								return r(this.tail, /* @__PURE__ */ t(i), null, this);
							}, "push")
						},
						{
							key: "unshift",
							value: /* @__PURE__ */ m(function(i) {
								return r(null, /* @__PURE__ */ t(i), this.head, this);
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
									for (var h = 1, l = this.head; h < i;) l = l.next, h++;
									return l.value;
								}
							}, "get_object_at")
						},
						{
							key: "set_object_at",
							value: /* @__PURE__ */ m(function(i, h) {
								if (i <= this.length()) {
									for (var l = 1, d = this.head; l < i;) d = d.next, l++;
									d.value = h;
								}
							}, "set_object_at")
						}
					]), o;
				}();
			},
			function(m$1, M, v) {
				function n$1(e, t, r) {
					this.x = null, this.y = null, e == null && t == null && r == null ? (this.x = 0, this.y = 0) : typeof e == "number" && typeof t == "number" && r == null ? (this.x = e, this.y = t) : e.constructor.name == "Point" && t == null && r == null && (r = e, this.x = r.x, this.y = r.y);
				}
				m(n$1, "Point"), n$1.prototype.getX = function() {
					return this.x;
				}, n$1.prototype.getY = function() {
					return this.y;
				}, n$1.prototype.getLocation = function() {
					return new n$1(this.x, this.y);
				}, n$1.prototype.setLocation = function(e, t, r) {
					e.constructor.name == "Point" && t == null && r == null ? (r = e, this.setLocation(r.x, r.y)) : typeof e == "number" && typeof t == "number" && r == null && (parseInt(e) == e && parseInt(t) == t ? this.move(e, t) : (this.x = /* @__PURE__ */ Math.floor(e + .5), this.y = /* @__PURE__ */ Math.floor(t + .5)));
				}, n$1.prototype.move = function(e, t) {
					this.x = e, this.y = t;
				}, n$1.prototype.translate = function(e, t) {
					this.x += e, this.y += t;
				}, n$1.prototype.equals = function(e) {
					if (e.constructor.name == "Point") {
						var t = e;
						return this.x == t.x && this.y == t.y;
					}
					return this == e;
				}, n$1.prototype.toString = function() {
					return new n$1().constructor.name + "[x=" + this.x + ",y=" + this.y + "]";
				}, m$1.exports = n$1;
			},
			function(m$1, M, v) {
				function n$1(e, t, r, a) {
					this.x = 0, this.y = 0, this.width = 0, this.height = 0, e != null && t != null && r != null && a != null && (this.x = e, this.y = t, this.width = r, this.height = a);
				}
				m(n$1, "RectangleD"), n$1.prototype.getX = function() {
					return this.x;
				}, n$1.prototype.setX = function(e) {
					this.x = e;
				}, n$1.prototype.getY = function() {
					return this.y;
				}, n$1.prototype.setY = function(e) {
					this.y = e;
				}, n$1.prototype.getWidth = function() {
					return this.width;
				}, n$1.prototype.setWidth = function(e) {
					this.width = e;
				}, n$1.prototype.getHeight = function() {
					return this.height;
				}, n$1.prototype.setHeight = function(e) {
					this.height = e;
				}, n$1.prototype.getRight = function() {
					return this.x + this.width;
				}, n$1.prototype.getBottom = function() {
					return this.y + this.height;
				}, n$1.prototype.intersects = function(e) {
					return !(this.getRight() < e.x || this.getBottom() < e.y || e.getRight() < this.x || e.getBottom() < this.y);
				}, n$1.prototype.getCenterX = function() {
					return this.x + this.width / 2;
				}, n$1.prototype.getMinX = function() {
					return this.getX();
				}, n$1.prototype.getMaxX = function() {
					return this.getX() + this.width;
				}, n$1.prototype.getCenterY = function() {
					return this.y + this.height / 2;
				}, n$1.prototype.getMinY = function() {
					return this.getY();
				}, n$1.prototype.getMaxY = function() {
					return this.getY() + this.height;
				}, n$1.prototype.getWidthHalf = function() {
					return this.width / 2;
				}, n$1.prototype.getHeightHalf = function() {
					return this.height / 2;
				}, m$1.exports = n$1;
			},
			function(m$1, M, v) {
				var n$1 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
					return typeof t;
				} : function(t) {
					return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
				};
				function e() {}
				m(e, "UniqueIDGeneretor"), e.lastID = 0, e.createID = function(t) {
					return e.isPrimitive(t) ? t : (t.uniqueID ?? (t.uniqueID = /* @__PURE__ */ e.getString(), e.lastID++), t.uniqueID);
				}, e.getString = function(t) {
					return t ??= e.lastID, "Object#" + t;
				}, e.isPrimitive = function(t) {
					var r = typeof t > "u" ? "undefined" : n$1(t);
					return t == null || r != "object" && r != "function";
				}, m$1.exports = e;
			},
			function(m$1, M, v) {
				function n$1(l) {
					if (Array.isArray(l)) {
						for (var d = 0, y = /* @__PURE__ */ Array(l.length); d < l.length; d++) y[d] = l[d];
						return y;
					} else return Array.from(l);
				}
				m(n$1, "_toConsumableArray");
				var e = /* @__PURE__ */ v(0), t = /* @__PURE__ */ v(6), r = /* @__PURE__ */ v(3), a = /* @__PURE__ */ v(1), u = /* @__PURE__ */ v(5), o = /* @__PURE__ */ v(4), p = /* @__PURE__ */ v(17), i = /* @__PURE__ */ v(27);
				function h(l) {
					i.call(this), this.layoutQuality = e.QUALITY, this.createBendsAsNeeded = e.DEFAULT_CREATE_BENDS_AS_NEEDED, this.incremental = e.DEFAULT_INCREMENTAL, this.animationOnLayout = e.DEFAULT_ANIMATION_ON_LAYOUT, this.animationDuringLayout = e.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = e.DEFAULT_ANIMATION_PERIOD, this.uniformLeafNodeSizes = e.DEFAULT_UNIFORM_LEAF_NODE_SIZES, this.edgeToDummyNodes = /* @__PURE__ */ new Map(), this.graphManager = new t(this), this.isLayoutFinished = !1, this.isSubLayout = !1, this.isRemoteUse = !1, l != null && (this.isRemoteUse = l);
				}
				m(h, "Layout"), h.RANDOM_SEED = 1, h.prototype = /* @__PURE__ */ Object.create(i.prototype), h.prototype.getGraphManager = function() {
					return this.graphManager;
				}, h.prototype.getAllNodes = function() {
					return this.graphManager.getAllNodes();
				}, h.prototype.getAllEdges = function() {
					return this.graphManager.getAllEdges();
				}, h.prototype.getAllNodesToApplyGravitation = function() {
					return this.graphManager.getAllNodesToApplyGravitation();
				}, h.prototype.newGraphManager = function() {
					var l = new t(this);
					return this.graphManager = l, l;
				}, h.prototype.newGraph = function(l) {
					return new u(null, this.graphManager, l);
				}, h.prototype.newNode = function(l) {
					return new r(this.graphManager, l);
				}, h.prototype.newEdge = function(l) {
					return new a(null, null, l);
				}, h.prototype.checkLayoutSuccess = function() {
					return this.graphManager.getRoot() == null || this.graphManager.getRoot().getNodes().length == 0 || this.graphManager.includesInvalidEdge();
				}, h.prototype.runLayout = function() {
					this.isLayoutFinished = !1, this.tilingPreLayout && this.tilingPreLayout(), this.initParameters();
					var l;
					return this.checkLayoutSuccess() ? l = !1 : l = /* @__PURE__ */ this.layout(), e.ANIMATE === "during" ? !1 : (l && (this.isSubLayout || this.doPostLayout()), this.tilingPostLayout && this.tilingPostLayout(), this.isLayoutFinished = !0, l);
				}, h.prototype.doPostLayout = function() {
					this.incremental || this.transform(), this.update();
				}, h.prototype.update2 = function() {
					if (this.createBendsAsNeeded && (this.createBendpointsFromDummyNodes(), this.graphManager.resetAllEdges()), !this.isRemoteUse) {
						for (var d = /* @__PURE__ */ this.graphManager.getAllEdges(), y = 0; y < d.length; y++) d[y];
						for (var c = /* @__PURE__ */ this.graphManager.getRoot().getNodes(), y = 0; y < c.length; y++) c[y];
						this.update(/* @__PURE__ */ this.graphManager.getRoot());
					}
				}, h.prototype.update = function(l) {
					if (l == null) this.update2();
					else if (l instanceof r) {
						var d = l;
						if (d.getChild() != null) for (var y = /* @__PURE__ */ d.getChild().getNodes(), T = 0; T < y.length; T++) update(y[T]);
						if (d.vGraphObject != null) d.vGraphObject.update(d);
					} else if (l instanceof a) {
						var D = l;
						if (D.vGraphObject != null) D.vGraphObject.update(D);
					} else if (l instanceof u) {
						var O = l;
						if (O.vGraphObject != null) O.vGraphObject.update(O);
					}
				}, h.prototype.initParameters = function() {
					this.isSubLayout || (this.layoutQuality = e.QUALITY, this.animationDuringLayout = e.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = e.DEFAULT_ANIMATION_PERIOD, this.animationOnLayout = e.DEFAULT_ANIMATION_ON_LAYOUT, this.incremental = e.DEFAULT_INCREMENTAL, this.createBendsAsNeeded = e.DEFAULT_CREATE_BENDS_AS_NEEDED, this.uniformLeafNodeSizes = e.DEFAULT_UNIFORM_LEAF_NODE_SIZES), this.animationDuringLayout && (this.animationOnLayout = !1);
				}, h.prototype.transform = function(l) {
					if (l == null) this.transform(new o(0, 0));
					else {
						var d = new p(), y = /* @__PURE__ */ this.graphManager.getRoot().updateLeftTop();
						if (y != null) {
							d.setWorldOrgX(l.x), d.setWorldOrgY(l.y), d.setDeviceOrgX(y.x), d.setDeviceOrgY(y.y);
							for (var T = /* @__PURE__ */ this.getAllNodes(), c, D = 0; D < T.length; D++) c = T[D], c.transform(d);
						}
					}
				}, h.prototype.positionNodesRandomly = function(l) {
					if (l == null) this.positionNodesRandomly(/* @__PURE__ */ this.getGraphManager().getRoot()), this.getGraphManager().getRoot().updateBounds(!0);
					else for (var d, y, T = /* @__PURE__ */ l.getNodes(), c = 0; c < T.length; c++) d = T[c], y = /* @__PURE__ */ d.getChild(), y == null || y.getNodes().length == 0 ? d.scatter() : (this.positionNodesRandomly(y), d.updateBounds());
				}, h.prototype.getFlatForest = function() {
					for (var l = [], d = !0, y = /* @__PURE__ */ this.graphManager.getRoot().getNodes(), T = !0, c = 0; c < y.length; c++) y[c].getChild() != null && (T = !1);
					if (!T) return l;
					var D = /* @__PURE__ */ new Set(), E = [], O = /* @__PURE__ */ new Map(), s = [];
					for (s = /* @__PURE__ */ s.concat(y); s.length > 0 && d;) {
						for (E.push(s[0]); E.length > 0 && d;) {
							var g = E[0];
							E.splice(0, 1), D.add(g);
							for (var f = /* @__PURE__ */ g.getEdges(), c = 0; c < f.length; c++) {
								var L = /* @__PURE__ */ f[c].getOtherEnd(g);
								if (O.get(g) != L) if (!D.has(L)) E.push(L), O.set(L, g);
								else {
									d = !1;
									break;
								}
							}
						}
						if (!d) l = [];
						else {
							var N = /* @__PURE__ */ [].concat(/* @__PURE__ */ n$1(D));
							l.push(N);
							for (var c = 0; c < N.length; c++) {
								var I = N[c], R = /* @__PURE__ */ s.indexOf(I);
								R > -1 && s.splice(R, 1);
							}
							D = /* @__PURE__ */ new Set(), O = /* @__PURE__ */ new Map();
						}
					}
					return l;
				}, h.prototype.createDummyNodesForBendpoints = function(l) {
					for (var d = [], y = l.source, T = /* @__PURE__ */ this.graphManager.calcLowestCommonAncestor(l.source, l.target), c = 0; c < l.bendpoints.length; c++) {
						var D = /* @__PURE__ */ this.newNode(null);
						D.setRect(new Point(0, 0), new Dimension(1, 1)), T.add(D);
						var E = /* @__PURE__ */ this.newEdge(null);
						this.graphManager.add(E, y, D), d.add(D), y = D;
					}
					var E = /* @__PURE__ */ this.newEdge(null);
					return this.graphManager.add(E, y, l.target), this.edgeToDummyNodes.set(l, d), l.isInterGraph() ? this.graphManager.remove(l) : T.remove(l), d;
				}, h.prototype.createBendpointsFromDummyNodes = function() {
					var l = [];
					l = /* @__PURE__ */ l.concat(/* @__PURE__ */ this.graphManager.getAllEdges()), l = /* @__PURE__ */ [].concat(/* @__PURE__ */ n$1(/* @__PURE__ */ this.edgeToDummyNodes.keys())).concat(l);
					for (var d = 0; d < l.length; d++) {
						var y = l[d];
						if (y.bendpoints.length > 0) {
							for (var T = /* @__PURE__ */ this.edgeToDummyNodes.get(y), c = 0; c < T.length; c++) {
								var D = T[c], E = new o(D.getCenterX(), D.getCenterY()), O = /* @__PURE__ */ y.bendpoints.get(c);
								O.x = E.x, O.y = E.y, D.getOwner().remove(D);
							}
							this.graphManager.add(y, y.source, y.target);
						}
					}
				}, h.transform = function(l, d, y, T) {
					if (y != null && T != null) {
						var c = d;
						if (l <= 50) {
							var D = d / y;
							c -= (d - D) / 50 * (50 - l);
						} else {
							var E = d * T;
							c += (E - d) / 50 * (l - 50);
						}
						return c;
					} else {
						var O, s;
						return l <= 50 ? (O = 9 * d / 500, s = d / 10) : (O = 9 * d / 50, s = -8 * d), O * l + s;
					}
				}, h.findCenterOfTree = function(l) {
					var d = [];
					d = /* @__PURE__ */ d.concat(l);
					var y = [], T = /* @__PURE__ */ new Map(), c = !1, D = null;
					(d.length == 1 || d.length == 2) && (c = !0, D = d[0]);
					for (var E = 0; E < d.length; E++) {
						var O = d[E], s = O.getNeighborsList().size;
						T.set(O, O.getNeighborsList().size), s == 1 && y.push(O);
					}
					var g = [];
					for (g = /* @__PURE__ */ g.concat(y); !c;) {
						var f = [];
						f = /* @__PURE__ */ f.concat(g), g = [];
						for (var E = 0; E < d.length; E++) {
							var O = d[E], L = /* @__PURE__ */ d.indexOf(O);
							L >= 0 && d.splice(L, 1);
							O.getNeighborsList().forEach(function(C) {
								if (y.indexOf(C) < 0) {
									var S = T.get(C) - 1;
									S == 1 && g.push(C), T.set(C, S);
								}
							});
						}
						y = /* @__PURE__ */ y.concat(g), (d.length == 1 || d.length == 2) && (c = !0, D = d[0]);
					}
					return D;
				}, h.prototype.setGraphManager = function(l) {
					this.graphManager = l;
				}, m$1.exports = h;
			},
			function(m$1, M, v) {
				function n$1() {}
				m(n$1, "RandomSeed"), n$1.seed = 1, n$1.x = 0, n$1.nextDouble = function() {
					return n$1.x = Math.sin(n$1.seed++) * 1e4, n$1.x - Math.floor(n$1.x);
				}, m$1.exports = n$1;
			},
			function(m$1, M, v) {
				var n$1 = /* @__PURE__ */ v(4);
				function e(t, r) {
					this.lworldOrgX = 0, this.lworldOrgY = 0, this.ldeviceOrgX = 0, this.ldeviceOrgY = 0, this.lworldExtX = 1, this.lworldExtY = 1, this.ldeviceExtX = 1, this.ldeviceExtY = 1;
				}
				m(e, "Transform"), e.prototype.getWorldOrgX = function() {
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
					var r = 0, a = this.lworldExtX;
					return a != 0 && (r = this.ldeviceOrgX + (t - this.lworldOrgX) * this.ldeviceExtX / a), r;
				}, e.prototype.transformY = function(t) {
					var r = 0, a = this.lworldExtY;
					return a != 0 && (r = this.ldeviceOrgY + (t - this.lworldOrgY) * this.ldeviceExtY / a), r;
				}, e.prototype.inverseTransformX = function(t) {
					var r = 0, a = this.ldeviceExtX;
					return a != 0 && (r = this.lworldOrgX + (t - this.ldeviceOrgX) * this.lworldExtX / a), r;
				}, e.prototype.inverseTransformY = function(t) {
					var r = 0, a = this.ldeviceExtY;
					return a != 0 && (r = this.lworldOrgY + (t - this.ldeviceOrgY) * this.lworldExtY / a), r;
				}, e.prototype.inverseTransformPoint = function(t) {
					return new n$1(this.inverseTransformX(t.x), this.inverseTransformY(t.y));
				}, m$1.exports = e;
			},
			function(m$1, M, v) {
				function n$1(i) {
					if (Array.isArray(i)) {
						for (var h = 0, l = /* @__PURE__ */ Array(i.length); h < i.length; h++) l[h] = i[h];
						return l;
					} else return Array.from(i);
				}
				m(n$1, "_toConsumableArray");
				var e = /* @__PURE__ */ v(15), t = /* @__PURE__ */ v(7), r = /* @__PURE__ */ v(0), a = /* @__PURE__ */ v(8), u = /* @__PURE__ */ v(9);
				function o() {
					e.call(this), this.useSmartIdealEdgeLengthCalculation = t.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.idealEdgeLength = t.DEFAULT_EDGE_LENGTH, this.springConstant = t.DEFAULT_SPRING_STRENGTH, this.repulsionConstant = t.DEFAULT_REPULSION_STRENGTH, this.gravityConstant = t.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = t.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = t.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = t.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.displacementThresholdPerNode = 3 * t.DEFAULT_EDGE_LENGTH / 100, this.coolingFactor = t.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.initialCoolingFactor = t.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.totalDisplacement = 0, this.oldTotalDisplacement = 0, this.maxIterations = t.MAX_ITERATIONS;
				}
				m(o, "FDLayout"), o.prototype = /* @__PURE__ */ Object.create(e.prototype);
				for (var p in e) o[p] = e[p];
				o.prototype.initParameters = function() {
					e.prototype.initParameters.call(this, arguments), this.totalIterations = 0, this.notAnimatedIterations = 0, this.useFRGridVariant = t.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION, this.grid = [];
				}, o.prototype.calcIdealEdgeLengths = function() {
					for (var i, h, l, d, y, T, c = /* @__PURE__ */ this.getGraphManager().getAllEdges(), D = 0; D < c.length; D++) i = c[D], i.idealLength = this.idealEdgeLength, i.isInterGraph && (l = /* @__PURE__ */ i.getSource(), d = /* @__PURE__ */ i.getTarget(), y = /* @__PURE__ */ i.getSourceInLca().getEstimatedSize(), T = /* @__PURE__ */ i.getTargetInLca().getEstimatedSize(), this.useSmartIdealEdgeLengthCalculation && (i.idealLength += y + T - 2 * r.SIMPLE_NODE_SIZE), h = /* @__PURE__ */ i.getLca().getInclusionTreeDepth(), i.idealLength += t.DEFAULT_EDGE_LENGTH * t.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR * (l.getInclusionTreeDepth() + d.getInclusionTreeDepth() - 2 * h));
				}, o.prototype.initSpringEmbedder = function() {
					var i = this.getAllNodes().length;
					this.incremental ? (i > t.ADAPTATION_LOWER_NODE_LIMIT && (this.coolingFactor = /* @__PURE__ */ Math.max(this.coolingFactor * t.COOLING_ADAPTATION_FACTOR, this.coolingFactor - (i - t.ADAPTATION_LOWER_NODE_LIMIT) / (t.ADAPTATION_UPPER_NODE_LIMIT - t.ADAPTATION_LOWER_NODE_LIMIT) * this.coolingFactor * (1 - t.COOLING_ADAPTATION_FACTOR))), this.maxNodeDisplacement = t.MAX_NODE_DISPLACEMENT_INCREMENTAL) : (i > t.ADAPTATION_LOWER_NODE_LIMIT ? this.coolingFactor = /* @__PURE__ */ Math.max(t.COOLING_ADAPTATION_FACTOR, 1 - (i - t.ADAPTATION_LOWER_NODE_LIMIT) / (t.ADAPTATION_UPPER_NODE_LIMIT - t.ADAPTATION_LOWER_NODE_LIMIT) * (1 - t.COOLING_ADAPTATION_FACTOR)) : this.coolingFactor = 1, this.initialCoolingFactor = this.coolingFactor, this.maxNodeDisplacement = t.MAX_NODE_DISPLACEMENT), this.maxIterations = /* @__PURE__ */ Math.max(this.getAllNodes().length * 5, this.maxIterations), this.totalDisplacementThreshold = this.displacementThresholdPerNode * this.getAllNodes().length, this.repulsionRange = /* @__PURE__ */ this.calcRepulsionRange();
				}, o.prototype.calcSpringForces = function() {
					for (var i = /* @__PURE__ */ this.getAllEdges(), h, l = 0; l < i.length; l++) h = i[l], this.calcSpringForce(h, h.idealLength);
				}, o.prototype.calcRepulsionForces = function() {
					var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, l, d, y, T, c = /* @__PURE__ */ this.getAllNodes(), D;
					if (this.useFRGridVariant) for (this.totalIterations % t.GRID_CALCULATION_CHECK_PERIOD == 1 && i && this.updateGrid(), D = /* @__PURE__ */ new Set(), l = 0; l < c.length; l++) y = c[l], this.calculateRepulsionForceOfANode(y, D, i, h), D.add(y);
					else for (l = 0; l < c.length; l++) for (y = c[l], d = l + 1; d < c.length; d++) T = c[d], y.getOwner() == T.getOwner() && this.calcRepulsionForce(y, T);
				}, o.prototype.calcGravitationalForces = function() {
					for (var i, h = /* @__PURE__ */ this.getAllNodesToApplyGravitation(), l = 0; l < h.length; l++) i = h[l], this.calcGravitationalForce(i);
				}, o.prototype.moveNodes = function() {
					for (var i = /* @__PURE__ */ this.getAllNodes(), h, l = 0; l < i.length; l++) h = i[l], h.move();
				}, o.prototype.calcSpringForce = function(i, h) {
					var l = /* @__PURE__ */ i.getSource(), d = /* @__PURE__ */ i.getTarget(), y, T, c, D;
					if (this.uniformLeafNodeSizes && l.getChild() == null && d.getChild() == null) i.updateLengthSimple();
					else if (i.updateLength(), i.isOverlapingSourceAndTarget) return;
					y = /* @__PURE__ */ i.getLength(), y != 0 && (T = this.springConstant * (y - h), c = T * (i.lengthX / y), D = T * (i.lengthY / y), l.springForceX += c, l.springForceY += D, d.springForceX -= c, d.springForceY -= D);
				}, o.prototype.calcRepulsionForce = function(i, h) {
					var l = /* @__PURE__ */ i.getRect(), d = /* @__PURE__ */ h.getRect(), y = new Array(2), T = new Array(4), c, D, E, O, s, g, f;
					if (l.intersects(d)) {
						a.calcSeparationAmount(l, d, y, t.DEFAULT_EDGE_LENGTH / 2), g = 2 * y[0], f = 2 * y[1];
						var L = i.noOfChildren * h.noOfChildren / (i.noOfChildren + h.noOfChildren);
						i.repulsionForceX -= L * g, i.repulsionForceY -= L * f, h.repulsionForceX += L * g, h.repulsionForceY += L * f;
					} else this.uniformLeafNodeSizes && i.getChild() == null && h.getChild() == null ? (c = d.getCenterX() - l.getCenterX(), D = d.getCenterY() - l.getCenterY()) : (a.getIntersection(l, d, T), c = T[2] - T[0], D = T[3] - T[1]), Math.abs(c) < t.MIN_REPULSION_DIST && (c = u.sign(c) * t.MIN_REPULSION_DIST), Math.abs(D) < t.MIN_REPULSION_DIST && (D = u.sign(D) * t.MIN_REPULSION_DIST), E = c * c + D * D, O = /* @__PURE__ */ Math.sqrt(E), s = this.repulsionConstant * i.noOfChildren * h.noOfChildren / E, g = s * c / O, f = s * D / O, i.repulsionForceX -= g, i.repulsionForceY -= f, h.repulsionForceX += g, h.repulsionForceY += f;
				}, o.prototype.calcGravitationalForce = function(i) {
					var h = /* @__PURE__ */ i.getOwner(), l = (h.getRight() + h.getLeft()) / 2, d = (h.getTop() + h.getBottom()) / 2, y = i.getCenterX() - l, T = i.getCenterY() - d, c = Math.abs(y) + i.getWidth() / 2, D = Math.abs(T) + i.getHeight() / 2, E;
					i.getOwner() == this.graphManager.getRoot() ? (E = h.getEstimatedSize() * this.gravityRangeFactor, (c > E || D > E) && (i.gravitationForceX = -this.gravityConstant * y, i.gravitationForceY = -this.gravityConstant * T)) : (E = h.getEstimatedSize() * this.compoundGravityRangeFactor, (c > E || D > E) && (i.gravitationForceX = -this.gravityConstant * y * this.compoundGravityConstant, i.gravitationForceY = -this.gravityConstant * T * this.compoundGravityConstant));
				}, o.prototype.isConverged = function() {
					var i, h = !1;
					return this.totalIterations > this.maxIterations / 3 && (h = Math.abs(this.totalDisplacement - this.oldTotalDisplacement) < 2), i = this.totalDisplacement < this.totalDisplacementThreshold, this.oldTotalDisplacement = this.totalDisplacement, i || h;
				}, o.prototype.animate = function() {
					this.animationDuringLayout && !this.isSubLayout && (this.notAnimatedIterations == this.animationPeriod ? (this.update(), this.notAnimatedIterations = 0) : this.notAnimatedIterations++);
				}, o.prototype.calcNoOfChildrenForAllNodes = function() {
					for (var i, h = /* @__PURE__ */ this.graphManager.getAllNodes(), l = 0; l < h.length; l++) i = h[l], i.noOfChildren = /* @__PURE__ */ i.getNoOfChildren();
				}, o.prototype.calcGrid = function(i) {
					var h = 0, l = 0;
					h = /* @__PURE__ */ parseInt(/* @__PURE__ */ Math.ceil((i.getRight() - i.getLeft()) / this.repulsionRange)), l = /* @__PURE__ */ parseInt(/* @__PURE__ */ Math.ceil((i.getBottom() - i.getTop()) / this.repulsionRange));
					for (var d = new Array(h), y = 0; y < h; y++) d[y] = new Array(l);
					for (var y = 0; y < h; y++) for (var T = 0; T < l; T++) d[y][T] = new Array();
					return d;
				}, o.prototype.addNodeToGrid = function(i, h, l) {
					var d = 0, y = 0, T = 0, c = 0;
					d = /* @__PURE__ */ parseInt(/* @__PURE__ */ Math.floor((i.getRect().x - h) / this.repulsionRange)), y = /* @__PURE__ */ parseInt(/* @__PURE__ */ Math.floor((i.getRect().width + i.getRect().x - h) / this.repulsionRange)), T = /* @__PURE__ */ parseInt(/* @__PURE__ */ Math.floor((i.getRect().y - l) / this.repulsionRange)), c = /* @__PURE__ */ parseInt(/* @__PURE__ */ Math.floor((i.getRect().height + i.getRect().y - l) / this.repulsionRange));
					for (var D = d; D <= y; D++) for (var E = T; E <= c; E++) this.grid[D][E].push(i), i.setGridCoordinates(d, y, T, c);
				}, o.prototype.updateGrid = function() {
					var i, h, l = /* @__PURE__ */ this.getAllNodes();
					for (this.grid = /* @__PURE__ */ this.calcGrid(/* @__PURE__ */ this.graphManager.getRoot()), i = 0; i < l.length; i++) h = l[i], this.addNodeToGrid(h, /* @__PURE__ */ this.graphManager.getRoot().getLeft(), /* @__PURE__ */ this.graphManager.getRoot().getTop());
				}, o.prototype.calculateRepulsionForceOfANode = function(i, h, l, d) {
					if (this.totalIterations % t.GRID_CALCULATION_CHECK_PERIOD == 1 && l || d) {
						var y = /* @__PURE__ */ new Set();
						i.surrounding = new Array();
						for (var T, c = this.grid, D = i.startX - 1; D < i.finishX + 2; D++) for (var E = i.startY - 1; E < i.finishY + 2; E++) if (!(D < 0 || E < 0 || D >= c.length || E >= c[0].length)) {
							for (var O = 0; O < c[D][E].length; O++) if (T = c[D][E][O], !(i.getOwner() != T.getOwner() || i == T) && !h.has(T) && !y.has(T)) {
								var s = Math.abs(i.getCenterX() - T.getCenterX()) - (i.getWidth() / 2 + T.getWidth() / 2), g = Math.abs(i.getCenterY() - T.getCenterY()) - (i.getHeight() / 2 + T.getHeight() / 2);
								s <= this.repulsionRange && g <= this.repulsionRange && y.add(T);
							}
						}
						i.surrounding = /* @__PURE__ */ [].concat(/* @__PURE__ */ n$1(y));
					}
					for (D = 0; D < i.surrounding.length; D++) this.calcRepulsionForce(i, i.surrounding[D]);
				}, o.prototype.calcRepulsionRange = function() {
					return 0;
				}, m$1.exports = o;
			},
			function(m$1, M, v) {
				var n$1 = /* @__PURE__ */ v(1), e = /* @__PURE__ */ v(7);
				function t(a, u, o) {
					n$1.call(this, a, u, o), this.idealLength = e.DEFAULT_EDGE_LENGTH;
				}
				m(t, "FDLayoutEdge"), t.prototype = /* @__PURE__ */ Object.create(n$1.prototype);
				for (var r in n$1) t[r] = n$1[r];
				m$1.exports = t;
			},
			function(m$1, M, v) {
				var n$1 = /* @__PURE__ */ v(3);
				function e(r, a, u, o) {
					n$1.call(this, r, a, u, o), this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0, this.startX = 0, this.finishX = 0, this.startY = 0, this.finishY = 0, this.surrounding = [];
				}
				m(e, "FDLayoutNode"), e.prototype = /* @__PURE__ */ Object.create(n$1.prototype);
				for (var t in n$1) e[t] = n$1[t];
				e.prototype.setGridCoordinates = function(r, a, u, o) {
					this.startX = r, this.finishX = a, this.startY = u, this.finishY = o;
				}, m$1.exports = e;
			},
			function(m$1, M, v) {
				function n$1(e, t) {
					this.width = 0, this.height = 0, e !== null && t !== null && (this.height = t, this.width = e);
				}
				m(n$1, "DimensionD"), n$1.prototype.getWidth = function() {
					return this.width;
				}, n$1.prototype.setWidth = function(e) {
					this.width = e;
				}, n$1.prototype.getHeight = function() {
					return this.height;
				}, n$1.prototype.setHeight = function(e) {
					this.height = e;
				}, m$1.exports = n$1;
			},
			function(m$1, M, v) {
				var n$1 = /* @__PURE__ */ v(14);
				function e() {
					this.map = {}, this.keys = [];
				}
				m(e, "HashMap"), e.prototype.put = function(t, r) {
					var a = /* @__PURE__ */ n$1.createID(t);
					this.contains(a) || (this.map[a] = r, this.keys.push(t));
				}, e.prototype.contains = function(t) {
					n$1.createID(t);
					return this.map[t] != null;
				}, e.prototype.get = function(t) {
					var r = /* @__PURE__ */ n$1.createID(t);
					return this.map[r];
				}, e.prototype.keySet = function() {
					return this.keys;
				}, m$1.exports = e;
			},
			function(m$1, M, v) {
				var n$1 = /* @__PURE__ */ v(14);
				function e() {
					this.set = {};
				}
				m(e, "HashSet"), e.prototype.add = function(t) {
					var r = /* @__PURE__ */ n$1.createID(t);
					this.contains(r) || (this.set[r] = t);
				}, e.prototype.remove = function(t) {
					delete this.set[n$1.createID(t)];
				}, e.prototype.clear = function() {
					this.set = {};
				}, e.prototype.contains = function(t) {
					return this.set[n$1.createID(t)] == t;
				}, e.prototype.isEmpty = function() {
					return this.size() === 0;
				}, e.prototype.size = function() {
					return Object.keys(this.set).length;
				}, e.prototype.addAllTo = function(t) {
					for (var r = /* @__PURE__ */ Object.keys(this.set), a = r.length, u = 0; u < a; u++) t.push(this.set[r[u]]);
				}, e.prototype.size = function() {
					return Object.keys(this.set).length;
				}, e.prototype.addAll = function(t) {
					for (var r = t.length, a = 0; a < r; a++) {
						var u = t[a];
						this.add(u);
					}
				}, m$1.exports = e;
			},
			function(m$1, M, v) {
				var n$1 = /* @__PURE__ */ function() {
					function a(u, o) {
						for (var p = 0; p < o.length; p++) {
							var i = o[p];
							i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(u, i.key, i);
						}
					}
					return m(a, "defineProperties"), function(u, o, p) {
						return o && a(u.prototype, o), p && a(u, p), u;
					};
				}();
				function e(a, u) {
					if (!(a instanceof u)) throw new TypeError("Cannot call a class as a function");
				}
				m(e, "_classCallCheck");
				var t = /* @__PURE__ */ v(11);
				m$1.exports = /* @__PURE__ */ function() {
					function a(u, o) {
						e(this, a), (o !== null || o !== void 0) && (this.compareFunction = this._defaultCompareFunction);
						var p = void 0;
						u instanceof t ? p = /* @__PURE__ */ u.size() : p = u.length, this._quicksort(u, 0, p - 1);
					}
					return m(a, "Quicksort"), n$1(a, [
						{
							key: "_quicksort",
							value: /* @__PURE__ */ m(function(o, p, i) {
								if (p < i) {
									var h = /* @__PURE__ */ this._partition(o, p, i);
									this._quicksort(o, p, h), this._quicksort(o, h + 1, i);
								}
							}, "_quicksort")
						},
						{
							key: "_partition",
							value: /* @__PURE__ */ m(function(o, p, i) {
								for (var h = /* @__PURE__ */ this._get(o, p), l = p, d = i;;) {
									for (; this.compareFunction(h, /* @__PURE__ */ this._get(o, d));) d--;
									for (; this.compareFunction(/* @__PURE__ */ this._get(o, l), h);) l++;
									if (l < d) this._swap(o, l, d), l++, d--;
									else return d;
								}
							}, "_partition")
						},
						{
							key: "_get",
							value: /* @__PURE__ */ m(function(o, p) {
								return o instanceof t ? o.get_object_at(p) : o[p];
							}, "_get")
						},
						{
							key: "_set",
							value: /* @__PURE__ */ m(function(o, p, i) {
								o instanceof t ? o.set_object_at(p, i) : o[p] = i;
							}, "_set")
						},
						{
							key: "_swap",
							value: /* @__PURE__ */ m(function(o, p, i) {
								var h = /* @__PURE__ */ this._get(o, p);
								this._set(o, p, /* @__PURE__ */ this._get(o, i)), this._set(o, i, h);
							}, "_swap")
						},
						{
							key: "_defaultCompareFunction",
							value: /* @__PURE__ */ m(function(o, p) {
								return p > o;
							}, "_defaultCompareFunction")
						}
					]), a;
				}();
			},
			function(m$1, M, v) {
				var n$1 = /* @__PURE__ */ function() {
					function r(a, u) {
						for (var o = 0; o < u.length; o++) {
							var p = u[o];
							p.enumerable = p.enumerable || !1, p.configurable = !0, "value" in p && (p.writable = !0), Object.defineProperty(a, p.key, p);
						}
					}
					return m(r, "defineProperties"), function(a, u, o) {
						return u && r(a.prototype, u), o && r(a, o), a;
					};
				}();
				function e(r, a) {
					if (!(r instanceof a)) throw new TypeError("Cannot call a class as a function");
				}
				m(e, "_classCallCheck");
				m$1.exports = /* @__PURE__ */ function() {
					function r(a, u) {
						var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, p = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : -1, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : -1;
						e(this, r), this.sequence1 = a, this.sequence2 = u, this.match_score = o, this.mismatch_penalty = p, this.gap_penalty = i, this.iMax = a.length + 1, this.jMax = u.length + 1, this.grid = new Array(this.iMax);
						for (var h = 0; h < this.iMax; h++) {
							this.grid[h] = new Array(this.jMax);
							for (var l = 0; l < this.jMax; l++) this.grid[h][l] = 0;
						}
						this.tracebackGrid = new Array(this.iMax);
						for (var d = 0; d < this.iMax; d++) {
							this.tracebackGrid[d] = new Array(this.jMax);
							for (var y = 0; y < this.jMax; y++) this.tracebackGrid[d][y] = [
								null,
								null,
								null
							];
						}
						this.alignments = [], this.score = -1, this.computeGrids();
					}
					return m(r, "NeedlemanWunsch"), n$1(r, [
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
								for (var u = 1; u < this.jMax; u++) this.grid[0][u] = this.grid[0][u - 1] + this.gap_penalty, this.tracebackGrid[0][u] = [
									!1,
									!1,
									!0
								];
								for (var o = 1; o < this.iMax; o++) this.grid[o][0] = this.grid[o - 1][0] + this.gap_penalty, this.tracebackGrid[o][0] = [
									!1,
									!0,
									!1
								];
								for (var p = 1; p < this.iMax; p++) for (var i = 1; i < this.jMax; i++) {
									var h = void 0;
									this.sequence1[p - 1] === this.sequence2[i - 1] ? h = this.grid[p - 1][i - 1] + this.match_score : h = this.grid[p - 1][i - 1] + this.mismatch_penalty;
									var l = this.grid[p - 1][i] + this.gap_penalty, d = this.grid[p][i - 1] + this.gap_penalty, y = [
										h,
										l,
										d
									], T = /* @__PURE__ */ this.arrayAllMaxIndexes(y);
									this.grid[p][i] = y[T[0]], this.tracebackGrid[p][i] = [
										/* @__PURE__ */ T.includes(0),
										/* @__PURE__ */ T.includes(1),
										/* @__PURE__ */ T.includes(2)
									];
								}
								this.score = this.grid[this.iMax - 1][this.jMax - 1];
							}, "computeGrids")
						},
						{
							key: "alignmentTraceback",
							value: /* @__PURE__ */ m(function() {
								var u = [];
								for (u.push({
									pos: [this.sequence1.length, this.sequence2.length],
									seq1: "",
									seq2: ""
								}); u[0];) {
									var o = u[0], p = this.tracebackGrid[o.pos[0]][o.pos[1]];
									p[0] && u.push({
										pos: [o.pos[0] - 1, o.pos[1] - 1],
										seq1: this.sequence1[o.pos[0] - 1] + o.seq1,
										seq2: this.sequence2[o.pos[1] - 1] + o.seq2
									}), p[1] && u.push({
										pos: [o.pos[0] - 1, o.pos[1]],
										seq1: this.sequence1[o.pos[0] - 1] + o.seq1,
										seq2: "-" + o.seq2
									}), p[2] && u.push({
										pos: [o.pos[0], o.pos[1] - 1],
										seq1: "-" + o.seq1,
										seq2: this.sequence2[o.pos[1] - 1] + o.seq2
									}), o.pos[0] === 0 && o.pos[1] === 0 && this.alignments.push({
										sequence1: o.seq1,
										sequence2: o.seq2
									}), u.shift();
								}
								return this.alignments;
							}, "alignmentTraceback")
						},
						{
							key: "getAllIndexes",
							value: /* @__PURE__ */ m(function(u, o) {
								for (var p = [], i = -1; (i = /* @__PURE__ */ u.indexOf(o, i + 1)) !== -1;) p.push(i);
								return p;
							}, "getAllIndexes")
						},
						{
							key: "arrayAllMaxIndexes",
							value: /* @__PURE__ */ m(function(u) {
								return this.getAllIndexes(u, /* @__PURE__ */ Math.max.apply(null, u));
							}, "arrayAllMaxIndexes")
						}
					]), r;
				}();
			},
			function(m$1, M, v) {
				var n$1 = /* @__PURE__ */ m(function() {}, "layoutBase");
				n$1.FDLayout = /* @__PURE__ */ v(18), n$1.FDLayoutConstants = /* @__PURE__ */ v(7), n$1.FDLayoutEdge = /* @__PURE__ */ v(19), n$1.FDLayoutNode = /* @__PURE__ */ v(20), n$1.DimensionD = /* @__PURE__ */ v(21), n$1.HashMap = /* @__PURE__ */ v(22), n$1.HashSet = /* @__PURE__ */ v(23), n$1.IGeometry = /* @__PURE__ */ v(8), n$1.IMath = /* @__PURE__ */ v(9), n$1.Integer = /* @__PURE__ */ v(10), n$1.Point = /* @__PURE__ */ v(12), n$1.PointD = /* @__PURE__ */ v(4), n$1.RandomSeed = /* @__PURE__ */ v(16), n$1.RectangleD = /* @__PURE__ */ v(13), n$1.Transform = /* @__PURE__ */ v(17), n$1.UniqueIDGeneretor = /* @__PURE__ */ v(14), n$1.Quicksort = /* @__PURE__ */ v(24), n$1.LinkedList = /* @__PURE__ */ v(11), n$1.LGraphObject = /* @__PURE__ */ v(2), n$1.LGraph = /* @__PURE__ */ v(5), n$1.LEdge = /* @__PURE__ */ v(1), n$1.LGraphManager = /* @__PURE__ */ v(6), n$1.LNode = /* @__PURE__ */ v(3), n$1.Layout = /* @__PURE__ */ v(15), n$1.LayoutConstants = /* @__PURE__ */ v(0), n$1.NeedlemanWunsch = /* @__PURE__ */ v(25), m$1.exports = n$1;
			},
			function(m$1, M, v) {
				function n$1() {
					this.listeners = [];
				}
				m(n$1, "Emitter");
				var e = n$1.prototype;
				e.addListener = function(t, r) {
					this.listeners.push({
						event: t,
						callback: r
					});
				}, e.removeListener = function(t, r) {
					for (var a = this.listeners.length; a >= 0; a--) {
						var u = this.listeners[a];
						u.event === t && u.callback === r && this.listeners.splice(a, 1);
					}
				}, e.emit = function(t, r) {
					for (var a = 0; a < this.listeners.length; a++) {
						var u = this.listeners[a];
						t === u.event && u.callback(r);
					}
				}, m$1.exports = n$1;
			}
		]);
	});
});
var J = /* @__PURE__ */ n((Z, z) => {
	m(function(M, v) {
		typeof Z == "object" && typeof z == "object" ? z.exports = /* @__PURE__ */ v(/* @__PURE__ */ q$1()) : typeof define == "function" && define.amd ? define(["layout-base"], v) : typeof Z == "object" ? Z.coseBase = /* @__PURE__ */ v(/* @__PURE__ */ q$1()) : M.coseBase = /* @__PURE__ */ v(M.layoutBase);
	}, "webpackUniversalModuleDefinition")(Z, function(m$1) {
		return function(M) {
			var v = {};
			function n$1(e) {
				if (v[e]) return v[e].exports;
				var t = v[e] = {
					i: e,
					l: !1,
					exports: {}
				};
				return M[e].call(t.exports, t, t.exports, n$1), t.l = !0, t.exports;
			}
			return m(n$1, "__webpack_require__"), n$1.m = M, n$1.c = v, n$1.i = function(e) {
				return e;
			}, n$1.d = function(e, t, r) {
				n$1.o(e, t) || Object.defineProperty(e, t, {
					configurable: !1,
					enumerable: !0,
					get: r
				});
			}, n$1.n = function(e) {
				var t = e && e.__esModule ? m(function() {
					return e.default;
				}, "getDefault") : m(function() {
					return e;
				}, "getModuleExports");
				return n$1.d(t, "a", t), t;
			}, n$1.o = function(e, t) {
				return Object.prototype.hasOwnProperty.call(e, t);
			}, n$1.p = "", n$1(n$1.s = 7);
		}([
			function(M, v) {
				M.exports = m$1;
			},
			function(M, v, n$1) {
				var e = n$1(0).FDLayoutConstants;
				function t() {}
				m(t, "CoSEConstants");
				for (var r in e) t[r] = e[r];
				t.DEFAULT_USE_MULTI_LEVEL_SCALING = !1, t.DEFAULT_RADIAL_SEPARATION = e.DEFAULT_EDGE_LENGTH, t.DEFAULT_COMPONENT_SEPERATION = 60, t.TILE = !0, t.TILING_PADDING_VERTICAL = 10, t.TILING_PADDING_HORIZONTAL = 10, t.TREE_REDUCTION_ON_INCREMENTAL = !1, M.exports = t;
			},
			function(M, v, n$1) {
				var e = n$1(0).FDLayoutEdge;
				function t(a, u, o) {
					e.call(this, a, u, o);
				}
				m(t, "CoSEEdge"), t.prototype = /* @__PURE__ */ Object.create(e.prototype);
				for (var r in e) t[r] = e[r];
				M.exports = t;
			},
			function(M, v, n$1) {
				var e = n$1(0).LGraph;
				function t(a, u, o) {
					e.call(this, a, u, o);
				}
				m(t, "CoSEGraph"), t.prototype = /* @__PURE__ */ Object.create(e.prototype);
				for (var r in e) t[r] = e[r];
				M.exports = t;
			},
			function(M, v, n$1) {
				var e = n$1(0).LGraphManager;
				function t(a) {
					e.call(this, a);
				}
				m(t, "CoSEGraphManager"), t.prototype = /* @__PURE__ */ Object.create(e.prototype);
				for (var r in e) t[r] = e[r];
				M.exports = t;
			},
			function(M, v, n$1) {
				var e = n$1(0).FDLayoutNode, t = n$1(0).IMath;
				function r(u, o, p, i) {
					e.call(this, u, o, p, i);
				}
				m(r, "CoSENode"), r.prototype = /* @__PURE__ */ Object.create(e.prototype);
				for (var a in e) r[a] = e[a];
				r.prototype.move = function() {
					var u = /* @__PURE__ */ this.graphManager.getLayout();
					this.displacementX = u.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.noOfChildren, this.displacementY = u.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.noOfChildren, Math.abs(this.displacementX) > u.coolingFactor * u.maxNodeDisplacement && (this.displacementX = u.coolingFactor * u.maxNodeDisplacement * t.sign(this.displacementX)), Math.abs(this.displacementY) > u.coolingFactor * u.maxNodeDisplacement && (this.displacementY = u.coolingFactor * u.maxNodeDisplacement * t.sign(this.displacementY)), this.child == null ? this.moveBy(this.displacementX, this.displacementY) : this.child.getNodes().length == 0 ? this.moveBy(this.displacementX, this.displacementY) : this.propogateDisplacementToChildren(this.displacementX, this.displacementY), u.totalDisplacement += Math.abs(this.displacementX) + Math.abs(this.displacementY), this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0;
				}, r.prototype.propogateDisplacementToChildren = function(u, o) {
					for (var p = /* @__PURE__ */ this.getChild().getNodes(), i, h = 0; h < p.length; h++) i = p[h], i.getChild() == null ? (i.moveBy(u, o), i.displacementX += u, i.displacementY += o) : i.propogateDisplacementToChildren(u, o);
				}, r.prototype.setPred1 = function(u) {
					this.pred1 = u;
				}, r.prototype.getPred1 = function() {
					return pred1;
				}, r.prototype.getPred2 = function() {
					return pred2;
				}, r.prototype.setNext = function(u) {
					this.next = u;
				}, r.prototype.getNext = function() {
					return next;
				}, r.prototype.setProcessed = function(u) {
					this.processed = u;
				}, r.prototype.isProcessed = function() {
					return processed;
				}, M.exports = r;
			},
			function(M, v, n$1) {
				var e = n$1(0).FDLayout, t = /* @__PURE__ */ n$1(4), r = /* @__PURE__ */ n$1(3), a = /* @__PURE__ */ n$1(5), u = /* @__PURE__ */ n$1(2), o = /* @__PURE__ */ n$1(1), p = n$1(0).FDLayoutConstants, i = n$1(0).LayoutConstants, h = n$1(0).Point, l = n$1(0).PointD, d = n$1(0).Layout, y = n$1(0).Integer, T = n$1(0).IGeometry, c = n$1(0).LGraph, D = n$1(0).Transform;
				function E() {
					e.call(this), this.toBeTiled = {};
				}
				m(E, "CoSELayout"), E.prototype = /* @__PURE__ */ Object.create(e.prototype);
				for (var O in e) E[O] = e[O];
				E.prototype.newGraphManager = function() {
					var s = new t(this);
					return this.graphManager = s, s;
				}, E.prototype.newGraph = function(s) {
					return new r(null, this.graphManager, s);
				}, E.prototype.newNode = function(s) {
					return new a(this.graphManager, s);
				}, E.prototype.newEdge = function(s) {
					return new u(null, null, s);
				}, E.prototype.initParameters = function() {
					e.prototype.initParameters.call(this, arguments), this.isSubLayout || (o.DEFAULT_EDGE_LENGTH < 10 ? this.idealEdgeLength = 10 : this.idealEdgeLength = o.DEFAULT_EDGE_LENGTH, this.useSmartIdealEdgeLengthCalculation = o.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.springConstant = p.DEFAULT_SPRING_STRENGTH, this.repulsionConstant = p.DEFAULT_REPULSION_STRENGTH, this.gravityConstant = p.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = p.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = p.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = p.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.prunedNodesAll = [], this.growTreeIterations = 0, this.afterGrowthIterations = 0, this.isTreeGrowing = !1, this.isGrowthFinished = !1, this.coolingCycle = 0, this.maxCoolingCycle = this.maxIterations / p.CONVERGENCE_CHECK_PERIOD, this.finalTemperature = p.CONVERGENCE_CHECK_PERIOD / this.maxIterations, this.coolingAdjuster = 1);
				}, E.prototype.layout = function() {
					return i.DEFAULT_CREATE_BENDS_AS_NEEDED && (this.createBendpoints(), this.graphManager.resetAllEdges()), this.level = 0, this.classicLayout();
				}, E.prototype.classicLayout = function() {
					if (this.nodesWithGravity = /* @__PURE__ */ this.calculateNodesToApplyGravitationTo(), this.graphManager.setAllNodesToApplyGravitation(this.nodesWithGravity), this.calcNoOfChildrenForAllNodes(), this.graphManager.calcLowestCommonAncestors(), this.graphManager.calcInclusionTreeDepths(), this.graphManager.getRoot().calcEstimatedSize(), this.calcIdealEdgeLengths(), this.incremental) {
						if (o.TREE_REDUCTION_ON_INCREMENTAL) {
							this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
							var g = new Set(this.getAllNodes()), f = /* @__PURE__ */ this.nodesWithGravity.filter(function(I) {
								return g.has(I);
							});
							this.graphManager.setAllNodesToApplyGravitation(f);
						}
					} else {
						var s = /* @__PURE__ */ this.getFlatForest();
						if (s.length > 0) this.positionNodesRadially(s);
						else {
							this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
							var g = new Set(this.getAllNodes()), f = /* @__PURE__ */ this.nodesWithGravity.filter(function(L) {
								return g.has(L);
							});
							this.graphManager.setAllNodesToApplyGravitation(f), this.positionNodesRandomly();
						}
					}
					return this.initSpringEmbedder(), this.runSpringEmbedder(), !0;
				}, E.prototype.tick = function() {
					if (this.totalIterations++, this.totalIterations === this.maxIterations && !this.isTreeGrowing && !this.isGrowthFinished) if (this.prunedNodesAll.length > 0) this.isTreeGrowing = !0;
					else return !0;
					if (this.totalIterations % p.CONVERGENCE_CHECK_PERIOD == 0 && !this.isTreeGrowing && !this.isGrowthFinished) {
						if (this.isConverged()) if (this.prunedNodesAll.length > 0) this.isTreeGrowing = !0;
						else return !0;
						this.coolingCycle++, this.layoutQuality == 0 ? this.coolingAdjuster = this.coolingCycle : this.layoutQuality == 1 && (this.coolingAdjuster = this.coolingCycle / 3), this.coolingFactor = /* @__PURE__ */ Math.max(this.initialCoolingFactor - Math.pow(this.coolingCycle, Math.log(100 * (this.initialCoolingFactor - this.finalTemperature)) / Math.log(this.maxCoolingCycle)) / 100 * this.coolingAdjuster, this.finalTemperature), this.animationPeriod = /* @__PURE__ */ Math.ceil(this.initialAnimationPeriod * Math.sqrt(this.coolingFactor));
					}
					if (this.isTreeGrowing) {
						if (this.growTreeIterations % 10 == 0) if (this.prunedNodesAll.length > 0) {
							this.graphManager.updateBounds(), this.updateGrid(), this.growTree(this.prunedNodesAll), this.graphManager.resetAllNodesToApplyGravitation();
							var s = new Set(this.getAllNodes()), g = /* @__PURE__ */ this.nodesWithGravity.filter(function(N) {
								return s.has(N);
							});
							this.graphManager.setAllNodesToApplyGravitation(g), this.graphManager.updateBounds(), this.updateGrid(), this.coolingFactor = p.DEFAULT_COOLING_FACTOR_INCREMENTAL;
						} else this.isTreeGrowing = !1, this.isGrowthFinished = !0;
						this.growTreeIterations++;
					}
					if (this.isGrowthFinished) {
						if (this.isConverged()) return !0;
						this.afterGrowthIterations % 10 == 0 && (this.graphManager.updateBounds(), this.updateGrid()), this.coolingFactor = p.DEFAULT_COOLING_FACTOR_INCREMENTAL * ((100 - this.afterGrowthIterations) / 100), this.afterGrowthIterations++;
					}
					var f = !this.isTreeGrowing && !this.isGrowthFinished, L = this.growTreeIterations % 10 == 1 && this.isTreeGrowing || this.afterGrowthIterations % 10 == 1 && this.isGrowthFinished;
					return this.totalDisplacement = 0, this.graphManager.updateBounds(), this.calcSpringForces(), this.calcRepulsionForces(f, L), this.calcGravitationalForces(), this.moveNodes(), this.animate(), !1;
				}, E.prototype.getPositionsData = function() {
					for (var s = /* @__PURE__ */ this.graphManager.getAllNodes(), g = {}, f = 0; f < s.length; f++) {
						var L = s[f].rect, N = s[f].id;
						g[N] = {
							id: N,
							x: /* @__PURE__ */ L.getCenterX(),
							y: /* @__PURE__ */ L.getCenterY(),
							w: L.width,
							h: L.height
						};
					}
					return g;
				}, E.prototype.runSpringEmbedder = function() {
					this.initialAnimationPeriod = 25, this.animationPeriod = this.initialAnimationPeriod;
					var s = !1;
					if (p.ANIMATE === "during") this.emit("layoutstarted");
					else {
						for (; !s;) s = /* @__PURE__ */ this.tick();
						this.graphManager.updateBounds();
					}
				}, E.prototype.calculateNodesToApplyGravitationTo = function() {
					var s = [], g, f = /* @__PURE__ */ this.graphManager.getGraphs(), L = f.length, N;
					for (N = 0; N < L; N++) g = f[N], g.updateConnected(), g.isConnected || (s = /* @__PURE__ */ s.concat(/* @__PURE__ */ g.getNodes()));
					return s;
				}, E.prototype.createBendpoints = function() {
					var s = [];
					s = /* @__PURE__ */ s.concat(/* @__PURE__ */ this.graphManager.getAllEdges());
					var g = /* @__PURE__ */ new Set(), f;
					for (f = 0; f < s.length; f++) {
						var L = s[f];
						if (!g.has(L)) {
							var N = /* @__PURE__ */ L.getSource(), I = /* @__PURE__ */ L.getTarget();
							if (N == I) L.getBendpoints().push(new l()), L.getBendpoints().push(new l()), this.createDummyNodesForBendpoints(L), g.add(L);
							else {
								var R = [];
								if (R = /* @__PURE__ */ R.concat(/* @__PURE__ */ N.getEdgeListToNode(I)), R = /* @__PURE__ */ R.concat(/* @__PURE__ */ I.getEdgeListToNode(N)), !g.has(R[0])) {
									if (R.length > 1) {
										var C;
										for (C = 0; C < R.length; C++) {
											var G = R[C];
											G.getBendpoints().push(new l()), this.createDummyNodesForBendpoints(G);
										}
									}
									R.forEach(function(S) {
										g.add(S);
									});
								}
							}
						}
						if (g.size == s.length) break;
					}
				}, E.prototype.positionNodesRadially = function(s) {
					for (var g = new h(0, 0), f = /* @__PURE__ */ Math.ceil(/* @__PURE__ */ Math.sqrt(s.length)), L = 0, N = 0, I = 0, R = new l(0, 0), C = 0; C < s.length; C++) {
						C % f == 0 && (I = 0, N = L, C != 0 && (N += o.DEFAULT_COMPONENT_SEPERATION), L = 0);
						var G = s[C], S = /* @__PURE__ */ d.findCenterOfTree(G);
						g.x = I, g.y = N, R = /* @__PURE__ */ E.radialLayout(G, S, g), R.y > L && (L = /* @__PURE__ */ Math.floor(R.y)), I = /* @__PURE__ */ Math.floor(R.x + o.DEFAULT_COMPONENT_SEPERATION);
					}
					this.transform(new l(i.WORLD_CENTER_X - R.x / 2, i.WORLD_CENTER_Y - R.y / 2));
				}, E.radialLayout = function(s, g, f) {
					var L = /* @__PURE__ */ Math.max(/* @__PURE__ */ this.maxDiagonalInTree(s), o.DEFAULT_RADIAL_SEPARATION);
					E.branchRadialLayout(g, null, 0, 359, 0, L);
					var N = /* @__PURE__ */ c.calculateBounds(s), I = new D();
					I.setDeviceOrgX(/* @__PURE__ */ N.getMinX()), I.setDeviceOrgY(/* @__PURE__ */ N.getMinY()), I.setWorldOrgX(f.x), I.setWorldOrgY(f.y);
					for (var R = 0; R < s.length; R++) s[R].transform(I);
					var G = new l(N.getMaxX(), N.getMaxY());
					return I.inverseTransformPoint(G);
				}, E.branchRadialLayout = function(s, g, f, L, N, I) {
					var R = (L - f + 1) / 2;
					R < 0 && (R += 180);
					var G = (R + f) % 360 * T.TWO_PI / 360, _ = N * Math.cos(G), F = N * Math.sin(G);
					s.setCenter(_, F);
					var w = [];
					w = /* @__PURE__ */ w.concat(/* @__PURE__ */ s.getEdges());
					var x = w.length;
					g != null && x--;
					for (var P = 0, Y = w.length, X, U = /* @__PURE__ */ s.getEdgesBetween(g); U.length > 1;) {
						var b = U[0];
						U.splice(0, 1);
						var V = /* @__PURE__ */ w.indexOf(b);
						V >= 0 && w.splice(V, 1), Y--, x--;
					}
					g != null ? X = (w.indexOf(U[0]) + 1) % Y : X = 0;
					for (var H = Math.abs(L - f) / x, W = X; P != x; W = ++W % Y) {
						var et = /* @__PURE__ */ w[W].getOtherEnd(s);
						if (et != g) {
							var rt = (f + P * H) % 360, gt = (rt + H) % 360;
							E.branchRadialLayout(et, s, rt, gt, N + I, I), P++;
						}
					}
				}, E.maxDiagonalInTree = function(s) {
					for (var g = y.MIN_VALUE, f = 0; f < s.length; f++) {
						var N = /* @__PURE__ */ s[f].getDiagonal();
						N > g && (g = N);
					}
					return g;
				}, E.prototype.calcRepulsionRange = function() {
					return 2 * (this.level + 1) * this.idealEdgeLength;
				}, E.prototype.groupZeroDegreeMembers = function() {
					var s = this, g = {};
					this.memberGroups = {}, this.idToDummyNode = {};
					for (var f = [], L = /* @__PURE__ */ this.graphManager.getAllNodes(), N = 0; N < L.length; N++) {
						var I = L[N], R = /* @__PURE__ */ I.getParent();
						this.getNodeDegreeWithChildren(I) === 0 && (R.id == null || !this.getToBeTiled(R)) && f.push(I);
					}
					for (var N = 0; N < f.length; N++) {
						var I = f[N], C = I.getParent().id;
						typeof g[C] > "u" && (g[C] = []), g[C] = /* @__PURE__ */ g[C].concat(I);
					}
					Object.keys(g).forEach(function(G) {
						if (g[G].length > 1) {
							var S = "DummyCompound_" + G;
							s.memberGroups[S] = g[G];
							var _ = /* @__PURE__ */ g[G][0].getParent(), F = new a(s.graphManager);
							F.id = S, F.paddingLeft = _.paddingLeft || 0, F.paddingRight = _.paddingRight || 0, F.paddingBottom = _.paddingBottom || 0, F.paddingTop = _.paddingTop || 0, s.idToDummyNode[S] = F;
							var w = /* @__PURE__ */ s.getGraphManager().add(/* @__PURE__ */ s.newGraph(), F), x = /* @__PURE__ */ _.getChild();
							x.add(F);
							for (var P = 0; P < g[G].length; P++) {
								var Y = g[G][P];
								x.remove(Y), w.add(Y);
							}
						}
					});
				}, E.prototype.clearCompounds = function() {
					var s = {}, g = {};
					this.performDFSOnCompounds();
					for (var f = 0; f < this.compoundOrder.length; f++) g[this.compoundOrder[f].id] = this.compoundOrder[f], s[this.compoundOrder[f].id] = /* @__PURE__ */ [].concat(/* @__PURE__ */ this.compoundOrder[f].getChild().getNodes()), this.graphManager.remove(/* @__PURE__ */ this.compoundOrder[f].getChild()), this.compoundOrder[f].child = null;
					this.graphManager.resetAllNodes(), this.tileCompoundMembers(s, g);
				}, E.prototype.clearZeroDegreeMembers = function() {
					var s = this, g = this.tiledZeroDegreePack = [];
					Object.keys(this.memberGroups).forEach(function(f) {
						var L = s.idToDummyNode[f];
						g[f] = /* @__PURE__ */ s.tileNodes(s.memberGroups[f], L.paddingLeft + L.paddingRight), L.rect.width = g[f].width, L.rect.height = g[f].height;
					});
				}, E.prototype.repopulateCompounds = function() {
					for (var s = this.compoundOrder.length - 1; s >= 0; s--) {
						var g = this.compoundOrder[s], f = g.id, L = g.paddingLeft, N = g.paddingTop;
						this.adjustLocations(this.tiledMemberPack[f], g.rect.x, g.rect.y, L, N);
					}
				}, E.prototype.repopulateZeroDegreeMembers = function() {
					var s = this, g = this.tiledZeroDegreePack;
					Object.keys(g).forEach(function(f) {
						var L = s.idToDummyNode[f], N = L.paddingLeft, I = L.paddingTop;
						s.adjustLocations(g[f], L.rect.x, L.rect.y, N, I);
					});
				}, E.prototype.getToBeTiled = function(s) {
					var g = s.id;
					if (this.toBeTiled[g] != null) return this.toBeTiled[g];
					var f = /* @__PURE__ */ s.getChild();
					if (f == null) return this.toBeTiled[g] = !1, !1;
					for (var L = /* @__PURE__ */ f.getNodes(), N = 0; N < L.length; N++) {
						var I = L[N];
						if (this.getNodeDegree(I) > 0) return this.toBeTiled[g] = !1, !1;
						if (I.getChild() == null) {
							this.toBeTiled[I.id] = !1;
							continue;
						}
						if (!this.getToBeTiled(I)) return this.toBeTiled[g] = !1, !1;
					}
					return this.toBeTiled[g] = !0, !0;
				}, E.prototype.getNodeDegree = function(s) {
					for (var g = s.id, f = /* @__PURE__ */ s.getEdges(), L = 0, N = 0; N < f.length; N++) {
						var I = f[N];
						I.getSource().id !== I.getTarget().id && (L = L + 1);
					}
					return L;
				}, E.prototype.getNodeDegreeWithChildren = function(s) {
					var g = /* @__PURE__ */ this.getNodeDegree(s);
					if (s.getChild() == null) return g;
					for (var f = /* @__PURE__ */ s.getChild().getNodes(), L = 0; L < f.length; L++) {
						var N = f[L];
						g += /* @__PURE__ */ this.getNodeDegreeWithChildren(N);
					}
					return g;
				}, E.prototype.performDFSOnCompounds = function() {
					this.compoundOrder = [], this.fillCompexOrderByDFS(/* @__PURE__ */ this.graphManager.getRoot().getNodes());
				}, E.prototype.fillCompexOrderByDFS = function(s) {
					for (var g = 0; g < s.length; g++) {
						var f = s[g];
						f.getChild() != null && this.fillCompexOrderByDFS(/* @__PURE__ */ f.getChild().getNodes()), this.getToBeTiled(f) && this.compoundOrder.push(f);
					}
				}, E.prototype.adjustLocations = function(s, g, f, L, N) {
					g += L, f += N;
					for (var I = g, R = 0; R < s.rows.length; R++) {
						var C = s.rows[R];
						g = I;
						for (var G = 0, S = 0; S < C.length; S++) {
							var _ = C[S];
							_.rect.x = g, _.rect.y = f, g += _.rect.width + s.horizontalPadding, _.rect.height > G && (G = _.rect.height);
						}
						f += G + s.verticalPadding;
					}
				}, E.prototype.tileCompoundMembers = function(s, g) {
					var f = this;
					this.tiledMemberPack = [], Object.keys(s).forEach(function(L) {
						var N = g[L];
						f.tiledMemberPack[L] = /* @__PURE__ */ f.tileNodes(s[L], N.paddingLeft + N.paddingRight), N.rect.width = f.tiledMemberPack[L].width, N.rect.height = f.tiledMemberPack[L].height;
					});
				}, E.prototype.tileNodes = function(s, g) {
					var N = {
						rows: [],
						rowWidth: [],
						rowHeight: [],
						width: 0,
						height: g,
						verticalPadding: o.TILING_PADDING_VERTICAL,
						horizontalPadding: o.TILING_PADDING_HORIZONTAL
					};
					s.sort(function(C, G) {
						return C.rect.width * C.rect.height > G.rect.width * G.rect.height ? -1 : C.rect.width * C.rect.height < G.rect.width * G.rect.height ? 1 : 0;
					});
					for (var I = 0; I < s.length; I++) {
						var R = s[I];
						N.rows.length == 0 ? this.insertNodeToRow(N, R, 0, g) : this.canAddHorizontal(N, R.rect.width, R.rect.height) ? this.insertNodeToRow(N, R, /* @__PURE__ */ this.getShortestRowIndex(N), g) : this.insertNodeToRow(N, R, N.rows.length, g), this.shiftToLastRow(N);
					}
					return N;
				}, E.prototype.insertNodeToRow = function(s, g, f, L) {
					var N = L;
					if (f == s.rows.length) s.rows.push([]), s.rowWidth.push(N), s.rowHeight.push(0);
					var R = s.rowWidth[f] + g.rect.width;
					s.rows[f].length > 0 && (R += s.horizontalPadding), s.rowWidth[f] = R, s.width < R && (s.width = R);
					var C = g.rect.height;
					f > 0 && (C += s.verticalPadding);
					var G = 0;
					C > s.rowHeight[f] && (G = s.rowHeight[f], s.rowHeight[f] = C, G = s.rowHeight[f] - G), s.height += G, s.rows[f].push(g);
				}, E.prototype.getShortestRowIndex = function(s) {
					for (var g = -1, f = Number.MAX_VALUE, L = 0; L < s.rows.length; L++) s.rowWidth[L] < f && (g = L, f = s.rowWidth[L]);
					return g;
				}, E.prototype.getLongestRowIndex = function(s) {
					for (var g = -1, f = Number.MIN_VALUE, L = 0; L < s.rows.length; L++) s.rowWidth[L] > f && (g = L, f = s.rowWidth[L]);
					return g;
				}, E.prototype.canAddHorizontal = function(s, g, f) {
					var L = /* @__PURE__ */ this.getShortestRowIndex(s);
					if (L < 0) return !0;
					var N = s.rowWidth[L];
					if (N + s.horizontalPadding + g <= s.width) return !0;
					var I = 0;
					s.rowHeight[L] < f && L > 0 && (I = f + s.verticalPadding - s.rowHeight[L]);
					var R;
					s.width - N >= g + s.horizontalPadding ? R = (s.height + I) / (N + g + s.horizontalPadding) : R = (s.height + I) / s.width, I = f + s.verticalPadding;
					var C;
					return s.width < g ? C = (s.height + I) / g : C = (s.height + I) / s.width, C < 1 && (C = 1 / C), R < 1 && (R = 1 / R), R < C;
				}, E.prototype.shiftToLastRow = function(s) {
					var g = /* @__PURE__ */ this.getLongestRowIndex(s), f = s.rowWidth.length - 1, L = s.rows[g], N = L[L.length - 1], I = N.width + s.horizontalPadding;
					if (s.width - s.rowWidth[f] > I && g != f) {
						L.splice(-1, 1), s.rows[f].push(N), s.rowWidth[g] = s.rowWidth[g] - I, s.rowWidth[f] = s.rowWidth[f] + I, s.width = s.rowWidth[instance.getLongestRowIndex(s)];
						for (var R = Number.MIN_VALUE, C = 0; C < L.length; C++) L[C].height > R && (R = L[C].height);
						g > 0 && (R += s.verticalPadding);
						var G = s.rowHeight[g] + s.rowHeight[f];
						s.rowHeight[g] = R, s.rowHeight[f] < N.height + s.verticalPadding && (s.rowHeight[f] = N.height + s.verticalPadding);
						var S = s.rowHeight[g] + s.rowHeight[f];
						s.height += S - G, this.shiftToLastRow(s);
					}
				}, E.prototype.tilingPreLayout = function() {
					o.TILE && (this.groupZeroDegreeMembers(), this.clearCompounds(), this.clearZeroDegreeMembers());
				}, E.prototype.tilingPostLayout = function() {
					o.TILE && (this.repopulateZeroDegreeMembers(), this.repopulateCompounds());
				}, E.prototype.reduceTrees = function() {
					for (var s = [], g = !0, f; g;) {
						var L = /* @__PURE__ */ this.graphManager.getAllNodes(), N = [];
						g = !1;
						for (var I = 0; I < L.length; I++) f = L[I], f.getEdges().length == 1 && !f.getEdges()[0].isInterGraph && f.getChild() == null && (N.push([
							f,
							f.getEdges()[0],
							/* @__PURE__ */ f.getOwner()
						]), g = !0);
						if (g == !0) {
							for (var R = [], C = 0; C < N.length; C++) N[C][0].getEdges().length == 1 && (R.push(N[C]), N[C][0].getOwner().remove(N[C][0]));
							s.push(R), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
						}
					}
					this.prunedNodesAll = s;
				}, E.prototype.growTree = function(s) {
					for (var f = s[s.length - 1], L, N = 0; N < f.length; N++) L = f[N], this.findPlaceforPrunedNode(L), L[2].add(L[0]), L[2].add(L[1], L[1].source, L[1].target);
					s.splice(s.length - 1, 1), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
				}, E.prototype.findPlaceforPrunedNode = function(s) {
					var g, f, L = s[0];
					L == s[1].source ? f = s[1].target : f = s[1].source;
					var N = f.startX, I = f.finishX, R = f.startY, C = f.finishY, w = [
						0,
						0,
						0,
						0
					];
					if (R > 0) for (var x = N; x <= I; x++) w[0] += this.grid[x][R - 1].length + this.grid[x][R].length - 1;
					if (I < this.grid.length - 1) for (var x = R; x <= C; x++) w[1] += this.grid[I + 1][x].length + this.grid[I][x].length - 1;
					if (C < this.grid[0].length - 1) for (var x = N; x <= I; x++) w[2] += this.grid[x][C + 1].length + this.grid[x][C].length - 1;
					if (N > 0) for (var x = R; x <= C; x++) w[3] += this.grid[N - 1][x].length + this.grid[N][x].length - 1;
					for (var P = y.MAX_VALUE, Y, X, U = 0; U < w.length; U++) w[U] < P ? (P = w[U], Y = 1, X = U) : w[U] == P && Y++;
					if (Y == 3 && P == 0) w[0] == 0 && w[1] == 0 && w[2] == 0 ? g = 1 : w[0] == 0 && w[1] == 0 && w[3] == 0 ? g = 0 : w[0] == 0 && w[2] == 0 && w[3] == 0 ? g = 3 : w[1] == 0 && w[2] == 0 && w[3] == 0 && (g = 2);
					else if (Y == 2 && P == 0) {
						var b = /* @__PURE__ */ Math.floor(Math.random() * 2);
						w[0] == 0 && w[1] == 0 ? b == 0 ? g = 0 : g = 1 : w[0] == 0 && w[2] == 0 ? b == 0 ? g = 0 : g = 2 : w[0] == 0 && w[3] == 0 ? b == 0 ? g = 0 : g = 3 : w[1] == 0 && w[2] == 0 ? b == 0 ? g = 1 : g = 2 : w[1] == 0 && w[3] == 0 ? b == 0 ? g = 1 : g = 3 : b == 0 ? g = 2 : g = 3;
					} else if (Y == 4 && P == 0) {
						var b = /* @__PURE__ */ Math.floor(Math.random() * 4);
						g = b;
					} else g = X;
					g == 0 ? L.setCenter(/* @__PURE__ */ f.getCenterX(), f.getCenterY() - f.getHeight() / 2 - p.DEFAULT_EDGE_LENGTH - L.getHeight() / 2) : g == 1 ? L.setCenter(f.getCenterX() + f.getWidth() / 2 + p.DEFAULT_EDGE_LENGTH + L.getWidth() / 2, /* @__PURE__ */ f.getCenterY()) : g == 2 ? L.setCenter(/* @__PURE__ */ f.getCenterX(), f.getCenterY() + f.getHeight() / 2 + p.DEFAULT_EDGE_LENGTH + L.getHeight() / 2) : L.setCenter(f.getCenterX() - f.getWidth() / 2 - p.DEFAULT_EDGE_LENGTH - L.getWidth() / 2, /* @__PURE__ */ f.getCenterY());
				}, M.exports = E;
			},
			function(M, v, n$1) {
				var e = {};
				e.layoutBase = /* @__PURE__ */ n$1(0), e.CoSEConstants = /* @__PURE__ */ n$1(1), e.CoSEEdge = /* @__PURE__ */ n$1(2), e.CoSEGraph = /* @__PURE__ */ n$1(3), e.CoSEGraphManager = /* @__PURE__ */ n$1(4), e.CoSELayout = /* @__PURE__ */ n$1(6), e.CoSENode = /* @__PURE__ */ n$1(5), M.exports = e;
			}
		]);
	});
});
var ot = /* @__PURE__ */ q(/* @__PURE__ */ n((j, tt) => {
	m(function(M, v) {
		typeof j == "object" && typeof tt == "object" ? tt.exports = /* @__PURE__ */ v(/* @__PURE__ */ J()) : typeof define == "function" && define.amd ? define(["cose-base"], v) : typeof j == "object" ? j.cytoscapeCoseBilkent = /* @__PURE__ */ v(/* @__PURE__ */ J()) : M.cytoscapeCoseBilkent = /* @__PURE__ */ v(M.coseBase);
	}, "webpackUniversalModuleDefinition")(j, function(m$1) {
		return function(M) {
			var v = {};
			function n$1(e) {
				if (v[e]) return v[e].exports;
				var t = v[e] = {
					i: e,
					l: !1,
					exports: {}
				};
				return M[e].call(t.exports, t, t.exports, n$1), t.l = !0, t.exports;
			}
			return m(n$1, "__webpack_require__"), n$1.m = M, n$1.c = v, n$1.i = function(e) {
				return e;
			}, n$1.d = function(e, t, r) {
				n$1.o(e, t) || Object.defineProperty(e, t, {
					configurable: !1,
					enumerable: !0,
					get: r
				});
			}, n$1.n = function(e) {
				var t = e && e.__esModule ? m(function() {
					return e.default;
				}, "getDefault") : m(function() {
					return e;
				}, "getModuleExports");
				return n$1.d(t, "a", t), t;
			}, n$1.o = function(e, t) {
				return Object.prototype.hasOwnProperty.call(e, t);
			}, n$1.p = "", n$1(n$1.s = 1);
		}([function(M, v) {
			M.exports = m$1;
		}, function(M, v, n$1) {
			var e = n$1(0).layoutBase.LayoutConstants, t = n$1(0).layoutBase.FDLayoutConstants, r = n$1(0).CoSEConstants, a = n$1(0).CoSELayout, u = n$1(0).CoSENode, o = n$1(0).layoutBase.PointD, p = n$1(0).layoutBase.DimensionD, i = {
				ready: /* @__PURE__ */ m(function() {}, "ready"),
				stop: /* @__PURE__ */ m(function() {}, "stop"),
				quality: "default",
				nodeDimensionsIncludeLabels: !1,
				refresh: 30,
				fit: !0,
				padding: 10,
				randomize: !0,
				nodeRepulsion: 4500,
				idealEdgeLength: 50,
				edgeElasticity: .45,
				nestingFactor: .1,
				gravity: .25,
				numIter: 2500,
				tile: !0,
				animate: "end",
				animationDuration: 500,
				tilingPaddingVertical: 10,
				tilingPaddingHorizontal: 10,
				gravityRangeCompound: 1.5,
				gravityCompound: 1,
				gravityRange: 3.8,
				initialEnergyOnIncremental: .5
			};
			function h(T, c) {
				var D = {};
				for (var E in T) D[E] = T[E];
				for (var E in c) D[E] = c[E];
				return D;
			}
			m(h, "extend");
			function l(T) {
				this.options = /* @__PURE__ */ h(i, T), d(this.options);
			}
			m(l, "_CoSELayout");
			var d = /* @__PURE__ */ m(function(c) {
				c.nodeRepulsion != null && (r.DEFAULT_REPULSION_STRENGTH = t.DEFAULT_REPULSION_STRENGTH = c.nodeRepulsion), c.idealEdgeLength != null && (r.DEFAULT_EDGE_LENGTH = t.DEFAULT_EDGE_LENGTH = c.idealEdgeLength), c.edgeElasticity != null && (r.DEFAULT_SPRING_STRENGTH = t.DEFAULT_SPRING_STRENGTH = c.edgeElasticity), c.nestingFactor != null && (r.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = t.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = c.nestingFactor), c.gravity != null && (r.DEFAULT_GRAVITY_STRENGTH = t.DEFAULT_GRAVITY_STRENGTH = c.gravity), c.numIter != null && (r.MAX_ITERATIONS = t.MAX_ITERATIONS = c.numIter), c.gravityRange != null && (r.DEFAULT_GRAVITY_RANGE_FACTOR = t.DEFAULT_GRAVITY_RANGE_FACTOR = c.gravityRange), c.gravityCompound != null && (r.DEFAULT_COMPOUND_GRAVITY_STRENGTH = t.DEFAULT_COMPOUND_GRAVITY_STRENGTH = c.gravityCompound), c.gravityRangeCompound != null && (r.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = t.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = c.gravityRangeCompound), c.initialEnergyOnIncremental != null && (r.DEFAULT_COOLING_FACTOR_INCREMENTAL = t.DEFAULT_COOLING_FACTOR_INCREMENTAL = c.initialEnergyOnIncremental), c.quality == "draft" ? e.QUALITY = 0 : c.quality == "proof" ? e.QUALITY = 2 : e.QUALITY = 1, r.NODE_DIMENSIONS_INCLUDE_LABELS = t.NODE_DIMENSIONS_INCLUDE_LABELS = e.NODE_DIMENSIONS_INCLUDE_LABELS = c.nodeDimensionsIncludeLabels, r.DEFAULT_INCREMENTAL = t.DEFAULT_INCREMENTAL = e.DEFAULT_INCREMENTAL = !c.randomize, r.ANIMATE = t.ANIMATE = e.ANIMATE = c.animate, r.TILE = c.tile, r.TILING_PADDING_VERTICAL = typeof c.tilingPaddingVertical == "function" ? c.tilingPaddingVertical.call() : c.tilingPaddingVertical, r.TILING_PADDING_HORIZONTAL = typeof c.tilingPaddingHorizontal == "function" ? c.tilingPaddingHorizontal.call() : c.tilingPaddingHorizontal;
			}, "getUserOptions");
			l.prototype.run = function() {
				var T, c, D = this.options;
				this.idToLNode = {};
				var O = this.layout = new a(), s = this;
				s.stopped = !1, this.cy = this.options.cy, this.cy.trigger({
					type: "layoutstart",
					layout: this
				});
				var g = /* @__PURE__ */ O.newGraphManager();
				this.gm = g;
				var f = /* @__PURE__ */ this.options.eles.nodes(), L = /* @__PURE__ */ this.options.eles.edges();
				this.root = /* @__PURE__ */ g.addRoot(), this.processChildrenList(this.root, /* @__PURE__ */ this.getTopMostNodes(f), O);
				for (var N = 0; N < L.length; N++) {
					var I = L[N], R = this.idToLNode[I.data("source")], C = this.idToLNode[I.data("target")];
					if (R !== C && R.getEdgesBetween(C).length == 0) {
						var G = /* @__PURE__ */ g.add(/* @__PURE__ */ O.newEdge(), R, C);
						G.id = /* @__PURE__ */ I.id();
					}
				}
				var S = /* @__PURE__ */ m(function(w, x) {
					typeof w == "number" && (w = x);
					var P = /* @__PURE__ */ w.data("id"), Y = s.idToLNode[P];
					return {
						x: /* @__PURE__ */ Y.getRect().getCenterX(),
						y: /* @__PURE__ */ Y.getRect().getCenterY()
					};
				}, "getPositions"), _ = /* @__PURE__ */ m(function F() {
					for (var w = /* @__PURE__ */ m(function() {
						D.fit && D.cy.fit(D.eles, D.padding), T || (T = !0, s.cy.one("layoutready", D.ready), s.cy.trigger({
							type: "layoutready",
							layout: s
						}));
					}, "afterReposition"), x = s.options.refresh, P, Y = 0; Y < x && !P; Y++) P = s.stopped || s.layout.tick();
					if (P) {
						O.checkLayoutSuccess() && !O.isSubLayout && O.doPostLayout(), O.tilingPostLayout && O.tilingPostLayout(), O.isLayoutFinished = !0, s.options.eles.nodes().positions(S), w(), s.cy.one("layoutstop", s.options.stop), s.cy.trigger({
							type: "layoutstop",
							layout: s
						}), c && cancelAnimationFrame(c), T = !1;
						return;
					}
					var X = /* @__PURE__ */ s.layout.getPositionsData();
					D.eles.nodes().positions(function(U, b) {
						if (typeof U == "number" && (U = b), !U.isParent()) {
							for (var V = /* @__PURE__ */ U.id(), H = X[V], W = U; H == null && (H = X[W.data("parent")] || X["DummyCompound_" + W.data("parent")], X[V] = H, W = W.parent()[0], W != null););
							return H != null ? {
								x: H.x,
								y: H.y
							} : {
								x: /* @__PURE__ */ U.position("x"),
								y: /* @__PURE__ */ U.position("y")
							};
						}
					}), w(), c = /* @__PURE__ */ requestAnimationFrame(F);
				}, "iterateAnimated");
				return O.addListener("layoutstarted", function() {
					s.options.animate === "during" && (c = /* @__PURE__ */ requestAnimationFrame(_));
				}), O.runLayout(), this.options.animate !== "during" && (s.options.eles.nodes().not(":parent").layoutPositions(s, s.options, S), T = !1), this;
			}, l.prototype.getTopMostNodes = function(T) {
				for (var c = {}, D = 0; D < T.length; D++) c[T[D].id()] = !0;
				return T.filter(function(O, s) {
					typeof O == "number" && (O = s);
					for (var g = O.parent()[0]; g != null;) {
						if (c[g.id()]) return !1;
						g = g.parent()[0];
					}
					return !0;
				});
			}, l.prototype.processChildrenList = function(T, c, D) {
				for (var E = c.length, O = 0; O < E; O++) {
					var s = c[O], g = /* @__PURE__ */ s.children(), f, L = /* @__PURE__ */ s.layoutDimensions({ nodeDimensionsIncludeLabels: this.options.nodeDimensionsIncludeLabels });
					if (s.outerWidth() != null && s.outerHeight() != null ? f = /* @__PURE__ */ T.add(new u(D.graphManager, new o(s.position("x") - L.w / 2, s.position("y") - L.h / 2), new p(parseFloat(L.w), parseFloat(L.h)))) : f = /* @__PURE__ */ T.add(new u(this.graphManager)), f.id = /* @__PURE__ */ s.data("id"), f.paddingLeft = /* @__PURE__ */ parseInt(/* @__PURE__ */ s.css("padding")), f.paddingTop = /* @__PURE__ */ parseInt(/* @__PURE__ */ s.css("padding")), f.paddingRight = /* @__PURE__ */ parseInt(/* @__PURE__ */ s.css("padding")), f.paddingBottom = /* @__PURE__ */ parseInt(/* @__PURE__ */ s.css("padding")), this.options.nodeDimensionsIncludeLabels && s.isParent()) {
						var N = s.boundingBox({
							includeLabels: !0,
							includeNodes: !1
						}).w, I = s.boundingBox({
							includeLabels: !0,
							includeNodes: !1
						}).h, R = /* @__PURE__ */ s.css("text-halign");
						f.labelWidth = N, f.labelHeight = I, f.labelPos = R;
					}
					if (this.idToLNode[s.data("id")] = f, isNaN(f.rect.x) && (f.rect.x = 0), isNaN(f.rect.y) && (f.rect.y = 0), g != null && g.length > 0) {
						var C = /* @__PURE__ */ D.getGraphManager().add(/* @__PURE__ */ D.newGraph(), f);
						this.processChildrenList(C, g, D);
					}
				}
			}, l.prototype.stop = function() {
				return this.stopped = !0, this;
			};
			var y = /* @__PURE__ */ m(function(c) {
				c("layout", "cose-bilkent", l);
			}, "register");
			typeof cytoscape < "u" && y(cytoscape), M.exports = y;
		}]);
	});
})(), 1);
ra.use(ot.default);
function ct(m$1, M) {
	m$1.forEach((v) => {
		let n$1 = {
			id: v.id,
			labelText: v.label,
			height: v.height,
			width: v.width,
			padding: v.padding ?? 0
		};
		Object.keys(v).forEach((e) => {
			[
				"id",
				"label",
				"height",
				"width",
				"padding",
				"x",
				"y"
			].includes(e) || (n$1[e] = v[e]);
		}), M.add({
			group: "nodes",
			data: n$1,
			position: {
				x: v.x ?? 0,
				y: v.y ?? 0
			}
		});
	});
}
m(ct, "addNodes");
function pt$1(m$1, M) {
	m$1.forEach((v) => {
		let n$1 = {
			id: v.id,
			source: v.start,
			target: v.end
		};
		Object.keys(v).forEach((e) => {
			[
				"id",
				"start",
				"end"
			].includes(e) || (n$1[e] = v[e]);
		}), M.add({
			group: "edges",
			data: n$1
		});
	});
}
m(pt$1, "addEdges");
function st(m$1) {
	return new Promise((M) => {
		let v = /* @__PURE__ */ ia("body").append("div").attr("id", "cy").attr("style", "display:none"), n$1 = /* @__PURE__ */ ra({
			container: /* @__PURE__ */ document.getElementById("cy"),
			style: [{
				selector: "edge",
				style: { "curve-style": "bezier" }
			}]
		});
		v.remove(), ct(m$1.nodes, n$1), pt$1(m$1.edges, n$1), n$1.nodes().forEach(function(t) {
			t.layoutDimensions = () => {
				let r = /* @__PURE__ */ t.data();
				return {
					w: r.width,
					h: r.height
				};
			};
		});
		n$1.layout({
			name: "cose-bilkent",
			quality: "proof",
			styleEnabled: !1,
			animate: !1
		}).run(), n$1.ready((t) => {
			pt.info("Cytoscape ready", t), M(n$1);
		});
	});
}
m(st, "createCytoscapeInstance");
function at(m$1) {
	return m$1.nodes().map((M) => {
		let v = /* @__PURE__ */ M.data(), n$1 = /* @__PURE__ */ M.position(), e = {
			id: v.id,
			x: n$1.x,
			y: n$1.y
		};
		return Object.keys(v).forEach((t) => {
			t !== "id" && (e[t] = v[t]);
		}), e;
	});
}
m(at, "extractPositionedNodes");
function ht(m$1) {
	return m$1.edges().map((M) => {
		let v = /* @__PURE__ */ M.data(), n$1 = M._private.rscratch, e = {
			id: v.id,
			source: v.source,
			target: v.target,
			startX: n$1.startX,
			startY: n$1.startY,
			midX: n$1.midX,
			midY: n$1.midY,
			endX: n$1.endX,
			endY: n$1.endY
		};
		return Object.keys(v).forEach((t) => {
			[
				"id",
				"source",
				"target"
			].includes(t) || (e[t] = v[t]);
		}), e;
	});
}
m(ht, "extractPositionedEdges");
async function lt(m$1, M) {
	pt.debug("Starting cose-bilkent layout algorithm");
	try {
		dt(m$1);
		let v = await st(m$1), n$1 = /* @__PURE__ */ at(v), e = /* @__PURE__ */ ht(v);
		return pt.debug(`Layout completed: ${n$1.length} nodes, ${e.length} edges`), {
			nodes: n$1,
			edges: e
		};
	} catch (v) {
		throw pt.error("Error in cose-bilkent layout algorithm:", v), v;
	}
}
m(lt, "executeCoseBilkentLayout");
function dt(m$1) {
	if (!m$1) throw new Error("Layout data is required");
	if (!m$1.config) throw new Error("Configuration is required in layout data");
	if (!m$1.rootNode) throw new Error("Root node is required");
	if (!m$1.nodes || !Array.isArray(m$1.nodes)) throw new Error("No nodes found in layout data");
	if (!Array.isArray(m$1.edges)) throw new Error("Edges array is required in layout data");
	return !0;
}
m(dt, "validateLayoutData");
var xt = /* @__PURE__ */ m(async (m$1, M, { insertCluster: v, insertEdge: n$1, insertEdgeLabel: e, insertMarkers: t, insertNode: r, log: a, positionEdgeLabel: u }, { algorithm: o }) => {
	let p = {}, i = {}, h = /* @__PURE__ */ M.select("g");
	t(h, m$1.markers, m$1.type, m$1.diagramId);
	let l = /* @__PURE__ */ h.insert("g").attr("class", "subgraphs"), d = /* @__PURE__ */ h.insert("g").attr("class", "edgePaths"), y = /* @__PURE__ */ h.insert("g").attr("class", "edgeLabels"), T = /* @__PURE__ */ h.insert("g").attr("class", "nodes");
	a.debug("Inserting nodes into DOM for dimension calculation"), await Promise.all(/* @__PURE__ */ m$1.nodes.map(async (E) => {
		if (E.isGroup) {
			let O = { ...E };
			i[E.id] = O, p[E.id] = O, await v(l, E);
		} else {
			let O = { ...E };
			p[E.id] = O;
			let s = await r(T, E, {
				config: m$1.config,
				dir: m$1.direction || "TB"
			}), g = /* @__PURE__ */ s.node().getBBox();
			O.width = g.width, O.height = g.height, O.domId = s, a.debug(`Node ${E.id} dimensions: ${g.width}x${g.height}`);
		}
	})), a.debug("Running cose-bilkent layout algorithm");
	let D = await lt({
		...m$1,
		nodes: /* @__PURE__ */ m$1.nodes.map((E) => {
			let O = p[E.id];
			return {
				...E,
				width: O.width,
				height: O.height
			};
		})
	}, m$1.config);
	a.debug("Positioning nodes based on layout results"), D.nodes.forEach((E) => {
		let O = p[E.id];
		O?.domId && (O.domId.attr("transform", `translate(${E.x}, ${E.y})`), O.x = E.x, O.y = E.y, a.debug(`Positioned node ${O.id} at center (${E.x}, ${E.y})`));
	}), D.edges.forEach((E) => {
		let O = /* @__PURE__ */ m$1.edges.find((s) => s.id === E.id);
		O && (O.points = [
			{
				x: E.startX,
				y: E.startY
			},
			{
				x: E.midX,
				y: E.midY
			},
			{
				x: E.endX,
				y: E.endY
			}
		]);
	}), a.debug("Inserting and positioning edges"), await Promise.all(/* @__PURE__ */ m$1.edges.map(async (E) => {
		await e(y, E);
		let s = p[E.start ?? ""], g = p[E.end ?? ""];
		if (s && g) {
			let f = /* @__PURE__ */ D.edges.find((L) => L.id === E.id);
			if (f) {
				a.debug("APA01 positionedEdge", f);
				let L = { ...E };
				u(L, /* @__PURE__ */ n$1(d, L, i, m$1.type, s, g, m$1.diagramId));
			} else {
				let L = {
					...E,
					points: [{
						x: s.x || 0,
						y: s.y || 0
					}, {
						x: g.x || 0,
						y: g.y || 0
					}]
				};
				u(L, /* @__PURE__ */ n$1(d, L, i, m$1.type, s, g, m$1.diagramId));
			}
		}
	})), a.debug("Cose-bilkent rendering completed");
}, "render");
export { xt as t };
