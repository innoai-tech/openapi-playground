import { $t as t, A as e, G as i, J as r, Q as n, S as o, V as a, d as s, f as h, j as l, o as d, qt as c, w as g, x as u } from "./vendor-min-mermaid~chunk-5V7UUW6L.B--ayk72.chunk.js";
import { Q as p, Z as f, et as m } from "./vendor-min-mermaid~chunk-2XYWPRAO.Da8Ms7Co.chunk.js";
import { t as v } from "./vendor-mermaid.Vvvvrg2S.chunk.js";
import { t as y } from "./vendor-mermaid.CNStX6fI.chunk.js";
import { t as E } from "./vendor-mermaid.BVwC1HkE.chunk.js";
import { t as N } from "./vendor-mermaid.9XzSy1EA.chunk.js";
import { a as T, i as A } from "./vendor-min-mermaid~chunk-EFRVIJHI.B3AEJspH.chunk.js";
import { g as C, h as L, v as _, y as w } from "./vendor-min-mermaid~chunk-EQI6KKA3.BtxAWkG-.chunk.js";
var M = p((t, e) => {
	f(function(i, r) {
		"object" == typeof t && "object" == typeof e ? e.exports = r() : "function" == typeof define && define.amd ? define([], r) : "object" == typeof t ? t.layoutBase = r() : i.layoutBase = r();
	}, "webpackUniversalModuleDefinition")(t, function() {
		var t = [
			function(t, e, i) {
				function r() {}
				f(r, "LayoutConstants"), r.QUALITY = 1, r.DEFAULT_CREATE_BENDS_AS_NEEDED = !1, r.DEFAULT_INCREMENTAL = !1, r.DEFAULT_ANIMATION_ON_LAYOUT = !0, r.DEFAULT_ANIMATION_DURING_LAYOUT = !1, r.DEFAULT_ANIMATION_PERIOD = 50, r.DEFAULT_UNIFORM_LEAF_NODE_SIZES = !1, r.DEFAULT_GRAPH_MARGIN = 15, r.NODE_DIMENSIONS_INCLUDE_LABELS = !1, r.SIMPLE_NODE_SIZE = 40, r.SIMPLE_NODE_HALF_SIZE = r.SIMPLE_NODE_SIZE / 2, r.EMPTY_COMPOUND_NODE_SIZE = 40, r.MIN_EDGE_LENGTH = 1, r.WORLD_BOUNDARY = 1e6, r.INITIAL_WORLD_BOUNDARY = r.WORLD_BOUNDARY / 1e3, r.WORLD_CENTER_X = 1200, r.WORLD_CENTER_Y = 900, t.exports = r;
			},
			function(t, e, i) {
				var r = i(2), n = i(8), o = i(9);
				function a(t, e, i) {
					r.call(this, i), this.isOverlapingSourceAndTarget = !1, this.vGraphObject = i, this.bendpoints = [], this.source = t, this.target = e;
				}
				for (var s in f(a, "LEdge"), a.prototype = Object.create(r.prototype), r) a[s] = r[s];
				a.prototype.getSource = function() {
					return this.source;
				}, a.prototype.getTarget = function() {
					return this.target;
				}, a.prototype.isInterGraph = function() {
					return this.isInterGraph;
				}, a.prototype.getLength = function() {
					return this.length;
				}, a.prototype.isOverlapingSourceAndTarget = function() {
					return this.isOverlapingSourceAndTarget;
				}, a.prototype.getBendpoints = function() {
					return this.bendpoints;
				}, a.prototype.getLca = function() {
					return this.lca;
				}, a.prototype.getSourceInLca = function() {
					return this.sourceInLca;
				}, a.prototype.getTargetInLca = function() {
					return this.targetInLca;
				}, a.prototype.getOtherEnd = function(t) {
					if (this.source === t) return this.target;
					if (this.target === t) return this.source;
					throw "Node is not incident with this edge";
				}, a.prototype.getOtherEndInGraph = function(t, e) {
					for (var i = this.getOtherEnd(t), r = e.getGraphManager().getRoot();;) {
						if (i.getOwner() == e) return i;
						if (i.getOwner() == r) break;
						i = i.getOwner().getParent();
					}
					return null;
				}, a.prototype.updateLength = function() {
					var t = [
						,
						,
						,
						,
					];
					this.isOverlapingSourceAndTarget = n.getIntersection(this.target.getRect(), this.source.getRect(), t), this.isOverlapingSourceAndTarget || (this.lengthX = t[0] - t[2], this.lengthY = t[1] - t[3], 1 > Math.abs(this.lengthX) && (this.lengthX = o.sign(this.lengthX)), 1 > Math.abs(this.lengthY) && (this.lengthY = o.sign(this.lengthY)), this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY));
				}, a.prototype.updateLengthSimple = function() {
					this.lengthX = this.target.getCenterX() - this.source.getCenterX(), this.lengthY = this.target.getCenterY() - this.source.getCenterY(), 1 > Math.abs(this.lengthX) && (this.lengthX = o.sign(this.lengthX)), 1 > Math.abs(this.lengthY) && (this.lengthY = o.sign(this.lengthY)), this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
				}, t.exports = a;
			},
			function(t, e, i) {
				function r(t) {
					this.vGraphObject = t;
				}
				f(r, "LGraphObject"), t.exports = r;
			},
			function(t, e, i) {
				var r = i(2), n = i(10), o = i(13), a = i(0), s = i(16), h = i(5);
				function l(t, e, i, a) {
					null == i && null == a && (a = e), r.call(this, a), null != t.graphManager && (t = t.graphManager), this.estimatedSize = n.MIN_VALUE, this.inclusionTreeDepth = n.MAX_VALUE, this.vGraphObject = a, this.edges = [], this.graphManager = t, null != i && null != e ? this.rect = new o(e.x, e.y, i.width, i.height) : this.rect = new o();
				}
				for (var d in f(l, "LNode"), l.prototype = Object.create(r.prototype), r) l[d] = r[d];
				l.prototype.getEdges = function() {
					return this.edges;
				}, l.prototype.getChild = function() {
					return this.child;
				}, l.prototype.getOwner = function() {
					return this.owner;
				}, l.prototype.getWidth = function() {
					return this.rect.width;
				}, l.prototype.setWidth = function(t) {
					this.rect.width = t;
				}, l.prototype.getHeight = function() {
					return this.rect.height;
				}, l.prototype.setHeight = function(t) {
					this.rect.height = t;
				}, l.prototype.getCenterX = function() {
					return this.rect.x + this.rect.width / 2;
				}, l.prototype.getCenterY = function() {
					return this.rect.y + this.rect.height / 2;
				}, l.prototype.getCenter = function() {
					return new h(this.rect.x + this.rect.width / 2, this.rect.y + this.rect.height / 2);
				}, l.prototype.getLocation = function() {
					return new h(this.rect.x, this.rect.y);
				}, l.prototype.getRect = function() {
					return this.rect;
				}, l.prototype.getDiagonal = function() {
					return Math.sqrt(this.rect.width * this.rect.width + this.rect.height * this.rect.height);
				}, l.prototype.getHalfTheDiagonal = function() {
					return Math.sqrt(this.rect.height * this.rect.height + this.rect.width * this.rect.width) / 2;
				}, l.prototype.setRect = function(t, e) {
					this.rect.x = t.x, this.rect.y = t.y, this.rect.width = e.width, this.rect.height = e.height;
				}, l.prototype.setCenter = function(t, e) {
					this.rect.x = t - this.rect.width / 2, this.rect.y = e - this.rect.height / 2;
				}, l.prototype.setLocation = function(t, e) {
					this.rect.x = t, this.rect.y = e;
				}, l.prototype.moveBy = function(t, e) {
					this.rect.x += t, this.rect.y += e;
				}, l.prototype.getEdgeListToNode = function(t) {
					var e = [], i = this;
					return i.edges.forEach(function(r) {
						if (r.target == t) {
							if (r.source != i) throw "Incorrect edge source!";
							e.push(r);
						}
					}), e;
				}, l.prototype.getEdgesBetween = function(t) {
					var e = [], i = this;
					return i.edges.forEach(function(r) {
						if (r.source != i && r.target != i) throw "Incorrect edge source and/or target";
						(r.target == t || r.source == t) && e.push(r);
					}), e;
				}, l.prototype.getNeighborsList = function() {
					var t = /* @__PURE__ */ new Set(), e = this;
					return e.edges.forEach(function(i) {
						if (i.source == e) t.add(i.target);
						else {
							if (i.target != e) throw "Incorrect incidency!";
							t.add(i.source);
						}
					}), t;
				}, l.prototype.withChildren = function() {
					var t = /* @__PURE__ */ new Set();
					if (t.add(this), null != this.child) for (var e = this.child.getNodes(), i = 0; i < e.length; i++) e[i].withChildren().forEach(function(e) {
						t.add(e);
					});
					return t;
				}, l.prototype.getNoOfChildren = function() {
					var t = 0;
					if (null == this.child) t = 1;
					else for (var e = this.child.getNodes(), i = 0; i < e.length; i++) t += e[i].getNoOfChildren();
					return 0 == t && (t = 1), t;
				}, l.prototype.getEstimatedSize = function() {
					if (this.estimatedSize == n.MIN_VALUE) throw "assert failed";
					return this.estimatedSize;
				}, l.prototype.calcEstimatedSize = function() {
					return null == this.child ? this.estimatedSize = (this.rect.width + this.rect.height) / 2 : (this.estimatedSize = this.child.calcEstimatedSize(), this.rect.width = this.estimatedSize, this.rect.height = this.estimatedSize, this.estimatedSize);
				}, l.prototype.scatter = function() {
					var t, e, i = -a.INITIAL_WORLD_BOUNDARY, r = a.INITIAL_WORLD_BOUNDARY;
					t = a.WORLD_CENTER_X + s.nextDouble() * (r - i) + i;
					var n = -a.INITIAL_WORLD_BOUNDARY, o = a.INITIAL_WORLD_BOUNDARY;
					e = a.WORLD_CENTER_Y + s.nextDouble() * (o - n) + n, this.rect.x = t, this.rect.y = e;
				}, l.prototype.updateBounds = function() {
					if (null == this.getChild()) throw "assert failed";
					if (0 != this.getChild().getNodes().length) {
						var t = this.getChild();
						if (t.updateBounds(!0), this.rect.x = t.getLeft(), this.rect.y = t.getTop(), this.setWidth(t.getRight() - t.getLeft()), this.setHeight(t.getBottom() - t.getTop()), a.NODE_DIMENSIONS_INCLUDE_LABELS) {
							var e = t.getRight() - t.getLeft(), i = t.getBottom() - t.getTop();
							this.labelWidth && ("left" == this.labelPosHorizontal ? (this.rect.x -= this.labelWidth, this.setWidth(e + this.labelWidth)) : "center" == this.labelPosHorizontal && this.labelWidth > e ? (this.rect.x -= (this.labelWidth - e) / 2, this.setWidth(this.labelWidth)) : "right" == this.labelPosHorizontal && this.setWidth(e + this.labelWidth)), this.labelHeight && ("top" == this.labelPosVertical ? (this.rect.y -= this.labelHeight, this.setHeight(i + this.labelHeight)) : "center" == this.labelPosVertical && this.labelHeight > i ? (this.rect.y -= (this.labelHeight - i) / 2, this.setHeight(this.labelHeight)) : "bottom" == this.labelPosVertical && this.setHeight(i + this.labelHeight));
						}
					}
				}, l.prototype.getInclusionTreeDepth = function() {
					if (this.inclusionTreeDepth == n.MAX_VALUE) throw "assert failed";
					return this.inclusionTreeDepth;
				}, l.prototype.transform = function(t) {
					var e = this.rect.x;
					e > a.WORLD_BOUNDARY ? e = a.WORLD_BOUNDARY : e < -a.WORLD_BOUNDARY && (e = -a.WORLD_BOUNDARY);
					var i = this.rect.y;
					i > a.WORLD_BOUNDARY ? i = a.WORLD_BOUNDARY : i < -a.WORLD_BOUNDARY && (i = -a.WORLD_BOUNDARY);
					var r = new h(e, i), n = t.inverseTransformPoint(r);
					this.setLocation(n.x, n.y);
				}, l.prototype.getLeft = function() {
					return this.rect.x;
				}, l.prototype.getRight = function() {
					return this.rect.x + this.rect.width;
				}, l.prototype.getTop = function() {
					return this.rect.y;
				}, l.prototype.getBottom = function() {
					return this.rect.y + this.rect.height;
				}, l.prototype.getParent = function() {
					return null == this.owner ? null : this.owner.getParent();
				}, t.exports = l;
			},
			function(t, e, i) {
				var r = i(0);
				function n() {}
				for (var o in f(n, "FDLayoutConstants"), r) n[o] = r[o];
				n.MAX_ITERATIONS = 2500, n.DEFAULT_EDGE_LENGTH = 50, n.DEFAULT_SPRING_STRENGTH = .45, n.DEFAULT_REPULSION_STRENGTH = 4500, n.DEFAULT_GRAVITY_STRENGTH = .4, n.DEFAULT_COMPOUND_GRAVITY_STRENGTH = 1, n.DEFAULT_GRAVITY_RANGE_FACTOR = 3.8, n.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = 1.5, n.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION = !0, n.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION = !0, n.DEFAULT_COOLING_FACTOR_INCREMENTAL = .3, n.COOLING_ADAPTATION_FACTOR = .33, n.ADAPTATION_LOWER_NODE_LIMIT = 1e3, n.ADAPTATION_UPPER_NODE_LIMIT = 5e3, n.MAX_NODE_DISPLACEMENT_INCREMENTAL = 100, n.MAX_NODE_DISPLACEMENT = 3 * n.MAX_NODE_DISPLACEMENT_INCREMENTAL, n.MIN_REPULSION_DIST = n.DEFAULT_EDGE_LENGTH / 10, n.CONVERGENCE_CHECK_PERIOD = 100, n.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = .1, n.MIN_EDGE_LENGTH = 1, n.GRID_CALCULATION_CHECK_PERIOD = 10, t.exports = n;
			},
			function(t, e, i) {
				function r(t, e) {
					null == t && null == e ? (this.x = 0, this.y = 0) : (this.x = t, this.y = e);
				}
				f(r, "PointD"), r.prototype.getX = function() {
					return this.x;
				}, r.prototype.getY = function() {
					return this.y;
				}, r.prototype.setX = function(t) {
					this.x = t;
				}, r.prototype.setY = function(t) {
					this.y = t;
				}, r.prototype.getDifference = function(t) {
					return new DimensionD(this.x - t.x, this.y - t.y);
				}, r.prototype.getCopy = function() {
					return new r(this.x, this.y);
				}, r.prototype.translate = function(t) {
					return this.x += t.width, this.y += t.height, this;
				}, t.exports = r;
			},
			function(t, e, i) {
				var r = i(2), n = i(10), o = i(0), a = i(7), s = i(3), h = i(1), l = i(13), d = i(12), c = i(11);
				function g(t, e, i) {
					r.call(this, i), this.estimatedSize = n.MIN_VALUE, this.margin = o.DEFAULT_GRAPH_MARGIN, this.edges = [], this.nodes = [], this.isConnected = !1, this.parent = t, null != e && e instanceof a ? this.graphManager = e : null != e && e instanceof Layout && (this.graphManager = e.graphManager);
				}
				for (var u in f(g, "LGraph"), g.prototype = Object.create(r.prototype), r) g[u] = r[u];
				g.prototype.getNodes = function() {
					return this.nodes;
				}, g.prototype.getEdges = function() {
					return this.edges;
				}, g.prototype.getGraphManager = function() {
					return this.graphManager;
				}, g.prototype.getParent = function() {
					return this.parent;
				}, g.prototype.getLeft = function() {
					return this.left;
				}, g.prototype.getRight = function() {
					return this.right;
				}, g.prototype.getTop = function() {
					return this.top;
				}, g.prototype.getBottom = function() {
					return this.bottom;
				}, g.prototype.isConnected = function() {
					return this.isConnected;
				}, g.prototype.add = function(t, e, i) {
					if (null == e && null == i) {
						if (null == this.graphManager) throw "Graph has no graph mgr!";
						if (this.getNodes().indexOf(t) > -1) throw "Node already in graph!";
						return t.owner = this, this.getNodes().push(t), t;
					}
					if (!(this.getNodes().indexOf(e) > -1 && this.getNodes().indexOf(i) > -1)) throw "Source or target not in graph!";
					if (e.owner != i.owner || e.owner != this) throw "Both owners must be this graph!";
					return e.owner != i.owner ? null : (t.source = e, t.target = i, t.isInterGraph = !1, this.getEdges().push(t), e.edges.push(t), i != e && i.edges.push(t), t);
				}, g.prototype.remove = function(t) {
					if (t instanceof s) {
						if (null == t) throw "Node is null!";
						if (null == t.owner || t.owner != this) throw "Owner graph is invalid!";
						if (null == this.graphManager) throw "Owner graph manager is invalid!";
						for (var e, i = t.edges.slice(), r = i.length, n = 0; n < r; n++) (e = i[n]).isInterGraph ? this.graphManager.remove(e) : e.source.owner.remove(e);
						var o = this.nodes.indexOf(t);
						if (-1 == o) throw "Node not in owner node list!";
						this.nodes.splice(o, 1);
					} else if (t instanceof h) {
						var e = t;
						if (null == e) throw "Edge is null!";
						if (null == e.source || null == e.target) throw "Source and/or target is null!";
						if (null == e.source.owner || null == e.target.owner || e.source.owner != this || e.target.owner != this) throw "Source and/or target owner is invalid!";
						var a = e.source.edges.indexOf(e), l = e.target.edges.indexOf(e);
						if (!(a > -1 && l > -1)) throw "Source and/or target doesn't know this edge!";
						e.source.edges.splice(a, 1), e.target != e.source && e.target.edges.splice(l, 1);
						var o = e.source.owner.getEdges().indexOf(e);
						if (-1 == o) throw "Not in owner's edge list!";
						e.source.owner.getEdges().splice(o, 1);
					}
				}, g.prototype.updateLeftTop = function() {
					for (var t, e, i, r = n.MAX_VALUE, o = n.MAX_VALUE, a = this.getNodes(), s = a.length, h = 0; h < s; h++) {
						var l = a[h];
						t = l.getTop(), e = l.getLeft(), r > t && (r = t), o > e && (o = e);
					}
					return r == n.MAX_VALUE ? null : (i = null != a[0].getParent().paddingLeft ? a[0].getParent().paddingLeft : this.margin, this.left = o - i, this.top = r - i, new d(this.left, this.top));
				}, g.prototype.updateBounds = function(t) {
					for (var e, i, r, o, a, s = n.MAX_VALUE, h = -n.MAX_VALUE, d = n.MAX_VALUE, c = -n.MAX_VALUE, g = this.nodes, u = g.length, p = 0; p < u; p++) {
						var f = g[p];
						t && null != f.child && f.updateBounds(), e = f.getLeft(), i = f.getRight(), r = f.getTop(), o = f.getBottom(), s > e && (s = e), h < i && (h = i), d > r && (d = r), c < o && (c = o);
					}
					var m = new l(s, d, h - s, c - d);
					s == n.MAX_VALUE && (this.left = this.parent.getLeft(), this.right = this.parent.getRight(), this.top = this.parent.getTop(), this.bottom = this.parent.getBottom()), a = null != g[0].getParent().paddingLeft ? g[0].getParent().paddingLeft : this.margin, this.left = m.x - a, this.right = m.x + m.width + a, this.top = m.y - a, this.bottom = m.y + m.height + a;
				}, g.calculateBounds = function(t) {
					for (var e, i, r, o, a = n.MAX_VALUE, s = -n.MAX_VALUE, h = n.MAX_VALUE, d = -n.MAX_VALUE, c = t.length, g = 0; g < c; g++) {
						var u = t[g];
						e = u.getLeft(), i = u.getRight(), r = u.getTop(), o = u.getBottom(), a > e && (a = e), s < i && (s = i), h > r && (h = r), d < o && (d = o);
					}
					return new l(a, h, s - a, d - h);
				}, g.prototype.getInclusionTreeDepth = function() {
					return this == this.graphManager.getRoot() ? 1 : this.parent.getInclusionTreeDepth();
				}, g.prototype.getEstimatedSize = function() {
					if (this.estimatedSize == n.MIN_VALUE) throw "assert failed";
					return this.estimatedSize;
				}, g.prototype.calcEstimatedSize = function() {
					for (var t = 0, e = this.nodes, i = e.length, r = 0; r < i; r++) t += e[r].calcEstimatedSize();
					return 0 == t ? this.estimatedSize = o.EMPTY_COMPOUND_NODE_SIZE : this.estimatedSize = t / Math.sqrt(this.nodes.length), this.estimatedSize;
				}, g.prototype.updateConnected = function() {
					var t = this;
					if (0 == this.nodes.length) {
						this.isConnected = !0;
						return;
					}
					var e, i, r = new c(), n = /* @__PURE__ */ new Set(), o = this.nodes[0];
					for (o.withChildren().forEach(function(t) {
						r.push(t), n.add(t);
					}); 0 !== r.length;) {
						e = (o = r.shift()).getEdges();
						for (var a = e.length, s = 0; s < a; s++) null == (i = e[s].getOtherEndInGraph(o, this)) || n.has(i) || i.withChildren().forEach(function(t) {
							r.push(t), n.add(t);
						});
					}
					if (this.isConnected = !1, n.size >= this.nodes.length) {
						var h = 0;
						n.forEach(function(e) {
							e.owner == t && h++;
						}), h == this.nodes.length && (this.isConnected = !0);
					}
				}, t.exports = g;
			},
			function(t, e, i) {
				var r, n = i(1);
				function o(t) {
					r = i(6), this.layout = t, this.graphs = [], this.edges = [];
				}
				f(o, "LGraphManager"), o.prototype.addRoot = function() {
					var t = this.layout.newGraph(), e = this.layout.newNode(null), i = this.add(t, e);
					return this.setRootGraph(i), this.rootGraph;
				}, o.prototype.add = function(t, e, i, r, n) {
					if (null == i && null == r && null == n) {
						if (null == t) throw "Graph is null!";
						if (null == e) throw "Parent node is null!";
						if (this.graphs.indexOf(t) > -1) throw "Graph already in this graph mgr!";
						if (this.graphs.push(t), null != t.parent) throw "Already has a parent!";
						if (null != e.child) throw "Already has a child!";
						return t.parent = e, e.child = t, t;
					}
					n = i, r = e, i = t;
					var o = r.getOwner(), a = n.getOwner();
					if (null == o || o.getGraphManager() != this) throw "Source not in this graph mgr!";
					if (null == a || a.getGraphManager() != this) throw "Target not in this graph mgr!";
					if (o == a) return i.isInterGraph = !1, o.add(i, r, n);
					if (i.isInterGraph = !0, i.source = r, i.target = n, this.edges.indexOf(i) > -1) throw "Edge already in inter-graph edge list!";
					if (this.edges.push(i), null == i.source || null == i.target) throw "Edge source and/or target is null!";
					if (-1 != i.source.edges.indexOf(i) || -1 != i.target.edges.indexOf(i)) throw "Edge already in source and/or target incidency list!";
					return i.source.edges.push(i), i.target.edges.push(i), i;
				}, o.prototype.remove = function(t) {
					if (t instanceof r) {
						if (t.getGraphManager() != this) throw "Graph not in this graph mgr";
						if (t != this.rootGraph && (null == t.parent || t.parent.graphManager != this)) throw "Invalid parent node!";
						var e = [];
						e = e.concat(t.getEdges());
						for (var i, o, a = e.length, s = 0; s < a; s++) o = e[s], t.remove(o);
						var h = [];
						a = (h = h.concat(t.getNodes())).length;
						for (var s = 0; s < a; s++) i = h[s], t.remove(i);
						t == this.rootGraph && this.setRootGraph(null);
						var l = this.graphs.indexOf(t);
						this.graphs.splice(l, 1), t.parent = null;
					} else if (t instanceof n) {
						if (null == (o = t)) throw "Edge is null!";
						if (!o.isInterGraph) throw "Not an inter-graph edge!";
						if (null == o.source || null == o.target) throw "Source and/or target is null!";
						if (-1 == o.source.edges.indexOf(o) || -1 == o.target.edges.indexOf(o)) throw "Source and/or target doesn't know this edge!";
						var l = o.source.edges.indexOf(o);
						if (o.source.edges.splice(l, 1), l = o.target.edges.indexOf(o), o.target.edges.splice(l, 1), null == o.source.owner || null == o.source.owner.getGraphManager()) throw "Edge owner graph or owner graph manager is null!";
						if (-1 == o.source.owner.getGraphManager().edges.indexOf(o)) throw "Not in owner graph manager's edge list!";
						var l = o.source.owner.getGraphManager().edges.indexOf(o);
						o.source.owner.getGraphManager().edges.splice(l, 1);
					}
				}, o.prototype.updateBounds = function() {
					this.rootGraph.updateBounds(!0);
				}, o.prototype.getGraphs = function() {
					return this.graphs;
				}, o.prototype.getAllNodes = function() {
					if (null == this.allNodes) {
						for (var t = [], e = this.getGraphs(), i = e.length, r = 0; r < i; r++) t = t.concat(e[r].getNodes());
						this.allNodes = t;
					}
					return this.allNodes;
				}, o.prototype.resetAllNodes = function() {
					this.allNodes = null;
				}, o.prototype.resetAllEdges = function() {
					this.allEdges = null;
				}, o.prototype.resetAllNodesToApplyGravitation = function() {
					this.allNodesToApplyGravitation = null;
				}, o.prototype.getAllEdges = function() {
					if (null == this.allEdges) {
						for (var t = [], e = this.getGraphs(), i = (e.length, 0); i < e.length; i++) t = t.concat(e[i].getEdges());
						t = t.concat(this.edges), this.allEdges = t;
					}
					return this.allEdges;
				}, o.prototype.getAllNodesToApplyGravitation = function() {
					return this.allNodesToApplyGravitation;
				}, o.prototype.setAllNodesToApplyGravitation = function(t) {
					if (null != this.allNodesToApplyGravitation) throw "assert failed";
					this.allNodesToApplyGravitation = t;
				}, o.prototype.getRoot = function() {
					return this.rootGraph;
				}, o.prototype.setRootGraph = function(t) {
					if (t.getGraphManager() != this) throw "Root not in this graph mgr!";
					this.rootGraph = t, t.parent ??= this.layout.newNode("Root node");
				}, o.prototype.getLayout = function() {
					return this.layout;
				}, o.prototype.isOneAncestorOfOther = function(t, e) {
					if (null == t || null == e) throw "assert failed";
					if (t == e) return !0;
					for (var i, r = t.getOwner(); null != (i = r.getParent());) {
						if (i == e) return !0;
						if (null == (r = i.getOwner())) break;
					}
					for (r = e.getOwner(); null != (i = r.getParent());) {
						if (i == t) return !0;
						if (null == (r = i.getOwner())) break;
					}
					return !1;
				}, o.prototype.calcLowestCommonAncestors = function() {
					for (var t, e, i, r, n, o = this.getAllEdges(), a = o.length, s = 0; s < a; s++) {
						if (e = (t = o[s]).source, i = t.target, t.lca = null, t.sourceInLca = e, t.targetInLca = i, e == i) {
							t.lca = e.getOwner();
							continue;
						}
						for (r = e.getOwner(); null == t.lca;) {
							for (t.targetInLca = i, n = i.getOwner(); null == t.lca;) {
								if (n == r) {
									t.lca = n;
									break;
								}
								if (n == this.rootGraph) break;
								if (null != t.lca) throw "assert failed";
								t.targetInLca = n.getParent(), n = t.targetInLca.getOwner();
							}
							if (r == this.rootGraph) break;
							t.lca ?? (t.sourceInLca = r.getParent(), r = t.sourceInLca.getOwner());
						}
						if (null == t.lca) throw "assert failed";
					}
				}, o.prototype.calcLowestCommonAncestor = function(t, e) {
					if (t == e) return t.getOwner();
					for (var i = t.getOwner(); null != i;) {
						for (var r = e.getOwner(); null != r;) {
							if (r == i) return r;
							r = r.getParent().getOwner();
						}
						i = i.getParent().getOwner();
					}
					return i;
				}, o.prototype.calcInclusionTreeDepths = function(t, e) {
					null == t && null == e && (t = this.rootGraph, e = 1);
					for (var i, r = t.getNodes(), n = r.length, o = 0; o < n; o++) (i = r[o]).inclusionTreeDepth = e, null != i.child && this.calcInclusionTreeDepths(i.child, e + 1);
				}, o.prototype.includesInvalidEdge = function() {
					for (var t, e = [], i = this.edges.length, r = 0; r < i; r++) t = this.edges[r], this.isOneAncestorOfOther(t.source, t.target) && e.push(t);
					for (var r = 0; r < e.length; r++) this.remove(e[r]);
					return !1;
				}, t.exports = o;
			},
			function(t, e, i) {
				var r = i(12);
				function n() {}
				f(n, "IGeometry"), n.calcSeparationAmount = function(t, e, i, r) {
					if (!t.intersects(e)) throw "assert failed";
					var n = [, ,];
					this.decideDirectionsForOverlappingNodes(t, e, n), i[0] = Math.min(t.getRight(), e.getRight()) - Math.max(t.x, e.x), i[1] = Math.min(t.getBottom(), e.getBottom()) - Math.max(t.y, e.y), t.getX() <= e.getX() && t.getRight() >= e.getRight() ? i[0] += Math.min(e.getX() - t.getX(), t.getRight() - e.getRight()) : e.getX() <= t.getX() && e.getRight() >= t.getRight() && (i[0] += Math.min(t.getX() - e.getX(), e.getRight() - t.getRight())), t.getY() <= e.getY() && t.getBottom() >= e.getBottom() ? i[1] += Math.min(e.getY() - t.getY(), t.getBottom() - e.getBottom()) : e.getY() <= t.getY() && e.getBottom() >= t.getBottom() && (i[1] += Math.min(t.getY() - e.getY(), e.getBottom() - t.getBottom()));
					var o = Math.abs((e.getCenterY() - t.getCenterY()) / (e.getCenterX() - t.getCenterX()));
					e.getCenterY() === t.getCenterY() && e.getCenterX() === t.getCenterX() && (o = 1);
					var a = o * i[0], s = i[1] / o;
					i[0] < s ? s = i[0] : a = i[1], i[0] = -1 * n[0] * (s / 2 + r), i[1] = -1 * n[1] * (a / 2 + r);
				}, n.decideDirectionsForOverlappingNodes = function(t, e, i) {
					t.getCenterX() < e.getCenterX() ? i[0] = -1 : i[0] = 1, t.getCenterY() < e.getCenterY() ? i[1] = -1 : i[1] = 1;
				}, n.getIntersection2 = function(t, e, i) {
					var r = t.getCenterX(), n = t.getCenterY(), o = e.getCenterX(), a = e.getCenterY();
					if (t.intersects(e)) return i[0] = r, i[1] = n, i[2] = o, i[3] = a, !0;
					var s = t.getX(), h = t.getY(), l = t.getRight(), d = t.getX(), c = t.getBottom(), g = t.getRight(), u = t.getWidthHalf(), p = t.getHeightHalf(), f = e.getX(), m = e.getY(), v = e.getRight(), y = e.getX(), E = e.getBottom(), N = e.getRight(), T = e.getWidthHalf(), A = e.getHeightHalf(), C = !1, L = !1;
					if (r === o) {
						if (n > a) return i[0] = r, i[1] = h, i[2] = o, i[3] = E, !1;
						if (n < a) return i[0] = r, i[1] = c, i[2] = o, i[3] = m, !1;
					} else if (n === a) {
						if (r > o) return i[0] = s, i[1] = n, i[2] = v, i[3] = a, !1;
						if (r < o) return i[0] = l, i[1] = n, i[2] = f, i[3] = a, !1;
					} else {
						var _ = t.height / t.width, w = e.height / e.width, M = (a - n) / (o - r), I = void 0, x = void 0, O = void 0, D = void 0, R = void 0, b = void 0;
						if (-_ === M ? (r > o ? (i[0] = d, i[1] = c) : (i[0] = l, i[1] = h), C = !0) : _ === M && (r > o ? (i[0] = s, i[1] = h) : (i[0] = g, i[1] = c), C = !0), -w === M ? (o > r ? (i[2] = y, i[3] = E) : (i[2] = v, i[3] = m), L = !0) : w === M && (o > r ? (i[2] = f, i[3] = m) : (i[2] = N, i[3] = E), L = !0), C && L) return !1;
						if (r > o ? n > a ? (I = this.getCardinalDirection(_, M, 4), x = this.getCardinalDirection(w, M, 2)) : (I = this.getCardinalDirection(-_, M, 3), x = this.getCardinalDirection(-w, M, 1)) : n > a ? (I = this.getCardinalDirection(-_, M, 1), x = this.getCardinalDirection(-w, M, 3)) : (I = this.getCardinalDirection(_, M, 2), x = this.getCardinalDirection(w, M, 4)), !C) switch (I) {
							case 1:
								D = h, O = r + -p / M, i[0] = O, i[1] = D;
								break;
							case 2:
								O = g, D = n + u * M, i[0] = O, i[1] = D;
								break;
							case 3:
								D = c, O = r + p / M, i[0] = O, i[1] = D;
								break;
							case 4: O = d, D = n + -u * M, i[0] = O, i[1] = D;
						}
						if (!L) switch (x) {
							case 1:
								b = m, R = o + -A / M, i[2] = R, i[3] = b;
								break;
							case 2:
								R = N, b = a + T * M, i[2] = R, i[3] = b;
								break;
							case 3:
								b = E, R = o + A / M, i[2] = R, i[3] = b;
								break;
							case 4: R = y, b = a + -T * M, i[2] = R, i[3] = b;
						}
					}
					return !1;
				}, n.getCardinalDirection = function(t, e, i) {
					return t > e ? i : 1 + i % 4;
				}, n.getIntersection = function(t, e, i, n) {
					if (null == n) return this.getIntersection2(t, e, i);
					var o = t.x, a = t.y, s = e.x, h = e.y, l = i.x, d = i.y, c = n.x, g = n.y, u = void 0, p = void 0, f = void 0, m = void 0, v = void 0, y = void 0, E = void 0;
					return u = h - a, f = o - s, v = s * a - o * h, p = g - d, m = l - c, y = c * d - l * g, 0 == (E = u * m - p * f) ? null : new r((f * y - m * v) / E, (p * v - u * y) / E);
				}, n.angleOfVector = function(t, e, i, r) {
					var n = void 0;
					return t !== i ? (n = Math.atan((r - e) / (i - t)), i < t ? n += Math.PI : r < e && (n += this.TWO_PI)) : n = r < e ? this.ONE_AND_HALF_PI : this.HALF_PI, n;
				}, n.doIntersect = function(t, e, i, r) {
					var n = t.x, o = t.y, a = e.x, s = e.y, h = i.x, l = i.y, d = r.x, c = r.y, g = (a - n) * (c - l) - (d - h) * (s - o);
					if (0 === g) return !1;
					var u = ((c - l) * (d - n) + (h - d) * (c - o)) / g, p = ((o - s) * (d - n) + (a - n) * (c - o)) / g;
					return 0 < u && u < 1 && 0 < p && p < 1;
				}, n.findCircleLineIntersections = function(t, e, i, r, n, o, a) {
					var s = (i - t) * (i - t) + (r - e) * (r - e), h = 2 * ((t - n) * (i - t) + (e - o) * (r - e)), l = (t - n) * (t - n) + (e - o) * (e - o) - a * a;
					if (!(h * h - 4 * s * l >= 0)) return null;
					var d = (-h + Math.sqrt(h * h - 4 * s * l)) / (2 * s), c = (-h - Math.sqrt(h * h - 4 * s * l)) / (2 * s);
					return d >= 0 && d <= 1 ? [d] : c >= 0 && c <= 1 ? [c] : null;
				}, n.HALF_PI = .5 * Math.PI, n.ONE_AND_HALF_PI = 1.5 * Math.PI, n.TWO_PI = 2 * Math.PI, n.THREE_PI = 3 * Math.PI, t.exports = n;
			},
			function(t, e, i) {
				function r() {}
				f(r, "IMath"), r.sign = function(t) {
					return t > 0 ? 1 : t < 0 ? -1 : 0;
				}, r.floor = function(t) {
					return t < 0 ? Math.ceil(t) : Math.floor(t);
				}, r.ceil = function(t) {
					return t < 0 ? Math.floor(t) : Math.ceil(t);
				}, t.exports = r;
			},
			function(t, e, i) {
				function r() {}
				f(r, "Integer"), r.MAX_VALUE = 2147483647, r.MIN_VALUE = -2147483648, t.exports = r;
			},
			function(t, e, i) {
				var r = function() {
					function t(t, e) {
						for (var i = 0; i < e.length; i++) {
							var r = e[i];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
						}
					}
					return f(t, "defineProperties"), function(e, i, r) {
						return i && t(e.prototype, i), r && t(e, r), e;
					};
				}();
				function n(t, e) {
					if (!(t instanceof e)) throw TypeError("Cannot call a class as a function");
				}
				f(n, "_classCallCheck");
				var o = f(function(t) {
					return {
						value: t,
						next: null,
						prev: null
					};
				}, "nodeFrom"), a = f(function(t, e, i, r) {
					return null !== t ? t.next = e : r.head = e, null !== i ? i.prev = e : r.tail = e, e.prev = t, e.next = i, r.length++, e;
				}, "add"), s = f(function(t, e) {
					var i = t.prev, r = t.next;
					return null !== i ? i.next = r : e.head = r, null !== r ? r.prev = i : e.tail = i, t.prev = t.next = null, e.length--, t;
				}, "_remove");
				t.exports = function() {
					function t(e) {
						var i = this;
						n(this, t), this.length = 0, this.head = null, this.tail = null, e?.forEach(function(t) {
							return i.push(t);
						});
					}
					return f(t, "LinkedList"), r(t, [
						{
							key: "size",
							value: f(function() {
								return this.length;
							}, "size")
						},
						{
							key: "insertBefore",
							value: f(function(t, e) {
								return a(e.prev, o(t), e, this);
							}, "insertBefore")
						},
						{
							key: "insertAfter",
							value: f(function(t, e) {
								return a(e, o(t), e.next, this);
							}, "insertAfter")
						},
						{
							key: "insertNodeBefore",
							value: f(function(t, e) {
								return a(e.prev, t, e, this);
							}, "insertNodeBefore")
						},
						{
							key: "insertNodeAfter",
							value: f(function(t, e) {
								return a(e, t, e.next, this);
							}, "insertNodeAfter")
						},
						{
							key: "push",
							value: f(function(t) {
								return a(this.tail, o(t), null, this);
							}, "push")
						},
						{
							key: "unshift",
							value: f(function(t) {
								return a(null, o(t), this.head, this);
							}, "unshift")
						},
						{
							key: "remove",
							value: f(function(t) {
								return s(t, this);
							}, "remove")
						},
						{
							key: "pop",
							value: f(function() {
								return s(this.tail, this).value;
							}, "pop")
						},
						{
							key: "popNode",
							value: f(function() {
								return s(this.tail, this);
							}, "popNode")
						},
						{
							key: "shift",
							value: f(function() {
								return s(this.head, this).value;
							}, "shift")
						},
						{
							key: "shiftNode",
							value: f(function() {
								return s(this.head, this);
							}, "shiftNode")
						},
						{
							key: "get_object_at",
							value: f(function(t) {
								if (t <= this.length()) {
									for (var e = 1, i = this.head; e < t;) i = i.next, e++;
									return i.value;
								}
							}, "get_object_at")
						},
						{
							key: "set_object_at",
							value: f(function(t, e) {
								if (t <= this.length()) {
									for (var i = 1, r = this.head; i < t;) r = r.next, i++;
									r.value = e;
								}
							}, "set_object_at")
						}
					]), t;
				}();
			},
			function(t, e, i) {
				function r(t, e, i) {
					this.x = null, this.y = null, null == t && null == e && null == i ? (this.x = 0, this.y = 0) : "number" == typeof t && "number" == typeof e && null == i ? (this.x = t, this.y = e) : "Point" == t.constructor.name && null == e && null == i && (i = t, this.x = i.x, this.y = i.y);
				}
				f(r, "Point"), r.prototype.getX = function() {
					return this.x;
				}, r.prototype.getY = function() {
					return this.y;
				}, r.prototype.getLocation = function() {
					return new r(this.x, this.y);
				}, r.prototype.setLocation = function(t, e, i) {
					"Point" == t.constructor.name && null == e && null == i ? (i = t, this.setLocation(i.x, i.y)) : "number" == typeof t && "number" == typeof e && null == i && (parseInt(t) == t && parseInt(e) == e ? this.move(t, e) : (this.x = Math.floor(t + .5), this.y = Math.floor(e + .5)));
				}, r.prototype.move = function(t, e) {
					this.x = t, this.y = e;
				}, r.prototype.translate = function(t, e) {
					this.x += t, this.y += e;
				}, r.prototype.equals = function(t) {
					return "Point" == t.constructor.name ? this.x == t.x && this.y == t.y : this == t;
				}, r.prototype.toString = function() {
					return new r().constructor.name + "[x=" + this.x + ",y=" + this.y + "]";
				}, t.exports = r;
			},
			function(t, e, i) {
				function r(t, e, i, r) {
					this.x = 0, this.y = 0, this.width = 0, this.height = 0, null != t && null != e && null != i && null != r && (this.x = t, this.y = e, this.width = i, this.height = r);
				}
				f(r, "RectangleD"), r.prototype.getX = function() {
					return this.x;
				}, r.prototype.setX = function(t) {
					this.x = t;
				}, r.prototype.getY = function() {
					return this.y;
				}, r.prototype.setY = function(t) {
					this.y = t;
				}, r.prototype.getWidth = function() {
					return this.width;
				}, r.prototype.setWidth = function(t) {
					this.width = t;
				}, r.prototype.getHeight = function() {
					return this.height;
				}, r.prototype.setHeight = function(t) {
					this.height = t;
				}, r.prototype.getRight = function() {
					return this.x + this.width;
				}, r.prototype.getBottom = function() {
					return this.y + this.height;
				}, r.prototype.intersects = function(t) {
					return !(this.getRight() < t.x || this.getBottom() < t.y || t.getRight() < this.x || t.getBottom() < this.y);
				}, r.prototype.getCenterX = function() {
					return this.x + this.width / 2;
				}, r.prototype.getMinX = function() {
					return this.getX();
				}, r.prototype.getMaxX = function() {
					return this.getX() + this.width;
				}, r.prototype.getCenterY = function() {
					return this.y + this.height / 2;
				}, r.prototype.getMinY = function() {
					return this.getY();
				}, r.prototype.getMaxY = function() {
					return this.getY() + this.height;
				}, r.prototype.getWidthHalf = function() {
					return this.width / 2;
				}, r.prototype.getHeightHalf = function() {
					return this.height / 2;
				}, t.exports = r;
			},
			function(t, e, i) {
				var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
					return typeof t;
				} : function(t) {
					return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
				};
				function n() {}
				f(n, "UniqueIDGeneretor"), n.lastID = 0, n.createID = function(t) {
					return n.isPrimitive(t) ? t : (t.uniqueID ?? (t.uniqueID = n.getString(), n.lastID++), t.uniqueID);
				}, n.getString = function(t) {
					return "Object#" + (t ??= n.lastID);
				}, n.isPrimitive = function(t) {
					var e = typeof t > "u" ? "undefined" : r(t);
					return null == t || "object" != e && "function" != e;
				}, t.exports = n;
			},
			function(t, e, i) {
				function r(t) {
					if (!Array.isArray(t)) return Array.from(t);
					for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
					return i;
				}
				f(r, "_toConsumableArray");
				var n = i(0), o = i(7), a = i(3), s = i(1), h = i(6), l = i(5), d = i(17), c = i(29);
				function g(t) {
					c.call(this), this.layoutQuality = n.QUALITY, this.createBendsAsNeeded = n.DEFAULT_CREATE_BENDS_AS_NEEDED, this.incremental = n.DEFAULT_INCREMENTAL, this.animationOnLayout = n.DEFAULT_ANIMATION_ON_LAYOUT, this.animationDuringLayout = n.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = n.DEFAULT_ANIMATION_PERIOD, this.uniformLeafNodeSizes = n.DEFAULT_UNIFORM_LEAF_NODE_SIZES, this.edgeToDummyNodes = /* @__PURE__ */ new Map(), this.graphManager = new o(this), this.isLayoutFinished = !1, this.isSubLayout = !1, this.isRemoteUse = !1, null != t && (this.isRemoteUse = t);
				}
				f(g, "Layout"), g.RANDOM_SEED = 1, g.prototype = Object.create(c.prototype), g.prototype.getGraphManager = function() {
					return this.graphManager;
				}, g.prototype.getAllNodes = function() {
					return this.graphManager.getAllNodes();
				}, g.prototype.getAllEdges = function() {
					return this.graphManager.getAllEdges();
				}, g.prototype.getAllNodesToApplyGravitation = function() {
					return this.graphManager.getAllNodesToApplyGravitation();
				}, g.prototype.newGraphManager = function() {
					var t = new o(this);
					return this.graphManager = t, t;
				}, g.prototype.newGraph = function(t) {
					return new h(null, this.graphManager, t);
				}, g.prototype.newNode = function(t) {
					return new a(this.graphManager, t);
				}, g.prototype.newEdge = function(t) {
					return new s(null, null, t);
				}, g.prototype.checkLayoutSuccess = function() {
					return null == this.graphManager.getRoot() || 0 == this.graphManager.getRoot().getNodes().length || this.graphManager.includesInvalidEdge();
				}, g.prototype.runLayout = function() {
					var t;
					return this.isLayoutFinished = !1, this.tilingPreLayout && this.tilingPreLayout(), this.initParameters(), t = !this.checkLayoutSuccess() && this.layout(), "during" !== n.ANIMATE && (t && (this.isSubLayout || this.doPostLayout()), this.tilingPostLayout && this.tilingPostLayout(), this.isLayoutFinished = !0, t);
				}, g.prototype.doPostLayout = function() {
					this.incremental || this.transform(), this.update();
				}, g.prototype.update2 = function() {
					if (this.createBendsAsNeeded && (this.createBendpointsFromDummyNodes(), this.graphManager.resetAllEdges()), !this.isRemoteUse) {
						for (var t = this.graphManager.getAllEdges(), e = 0; e < t.length; e++) t[e];
						for (var i = this.graphManager.getRoot().getNodes(), e = 0; e < i.length; e++) i[e];
						this.update(this.graphManager.getRoot());
					}
				}, g.prototype.update = function(t) {
					if (null == t) this.update2();
					else if (t instanceof a) {
						if (null != t.getChild()) for (var e = t.getChild().getNodes(), i = 0; i < e.length; i++) update(e[i]);
						null != t.vGraphObject && t.vGraphObject.update(t);
					} else t instanceof s ? null != t.vGraphObject && t.vGraphObject.update(t) : t instanceof h && null != t.vGraphObject && t.vGraphObject.update(t);
				}, g.prototype.initParameters = function() {
					this.isSubLayout || (this.layoutQuality = n.QUALITY, this.animationDuringLayout = n.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = n.DEFAULT_ANIMATION_PERIOD, this.animationOnLayout = n.DEFAULT_ANIMATION_ON_LAYOUT, this.incremental = n.DEFAULT_INCREMENTAL, this.createBendsAsNeeded = n.DEFAULT_CREATE_BENDS_AS_NEEDED, this.uniformLeafNodeSizes = n.DEFAULT_UNIFORM_LEAF_NODE_SIZES), this.animationDuringLayout && (this.animationOnLayout = !1);
				}, g.prototype.transform = function(t) {
					if (null == t) this.transform(new l(0, 0));
					else {
						var e = new d(), i = this.graphManager.getRoot().updateLeftTop();
						if (null != i) {
							e.setWorldOrgX(t.x), e.setWorldOrgY(t.y), e.setDeviceOrgX(i.x), e.setDeviceOrgY(i.y);
							for (var r = this.getAllNodes(), n = 0; n < r.length; n++) r[n].transform(e);
						}
					}
				}, g.prototype.positionNodesRandomly = function(t) {
					if (null == t) this.positionNodesRandomly(this.getGraphManager().getRoot()), this.getGraphManager().getRoot().updateBounds(!0);
					else for (var e, i, r = t.getNodes(), n = 0; n < r.length; n++) null == (i = (e = r[n]).getChild()) || 0 == i.getNodes().length ? e.scatter() : (this.positionNodesRandomly(i), e.updateBounds());
				}, g.prototype.getFlatForest = function() {
					for (var t = [], e = !0, i = this.graphManager.getRoot().getNodes(), n = !0, o = 0; o < i.length; o++) null != i[o].getChild() && (n = !1);
					if (!n) return t;
					var a = /* @__PURE__ */ new Set(), s = [], h = /* @__PURE__ */ new Map(), l = [];
					for (l = l.concat(i); l.length > 0 && e;) {
						for (s.push(l[0]); s.length > 0 && e;) {
							var d = s[0];
							s.splice(0, 1), a.add(d);
							for (var c = d.getEdges(), o = 0; o < c.length; o++) {
								var g = c[o].getOtherEnd(d);
								if (h.get(d) != g) if (a.has(g)) {
									e = !1;
									break;
								} else s.push(g), h.set(g, d);
							}
						}
						if (e) {
							var u = [].concat(r(a));
							t.push(u);
							for (var o = 0; o < u.length; o++) {
								var p = u[o], f = l.indexOf(p);
								f > -1 && l.splice(f, 1);
							}
							a = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Map();
						} else t = [];
					}
					return t;
				}, g.prototype.createDummyNodesForBendpoints = function(t) {
					for (var e = [], i = t.source, r = this.graphManager.calcLowestCommonAncestor(t.source, t.target), n = 0; n < t.bendpoints.length; n++) {
						var o = this.newNode(null);
						o.setRect(new Point(0, 0), new Dimension(1, 1)), r.add(o);
						var a = this.newEdge(null);
						this.graphManager.add(a, i, o), e.add(o), i = o;
					}
					var a = this.newEdge(null);
					return this.graphManager.add(a, i, t.target), this.edgeToDummyNodes.set(t, e), t.isInterGraph() ? this.graphManager.remove(t) : r.remove(t), e;
				}, g.prototype.createBendpointsFromDummyNodes = function() {
					var t = [];
					t = t.concat(this.graphManager.getAllEdges()), t = [].concat(r(this.edgeToDummyNodes.keys())).concat(t);
					for (var e = 0; e < t.length; e++) {
						var i = t[e];
						if (i.bendpoints.length > 0) {
							for (var n = this.edgeToDummyNodes.get(i), o = 0; o < n.length; o++) {
								var a = n[o], s = new l(a.getCenterX(), a.getCenterY()), h = i.bendpoints.get(o);
								h.x = s.x, h.y = s.y, a.getOwner().remove(a);
							}
							this.graphManager.add(i, i.source, i.target);
						}
					}
				}, g.transform = function(t, e, i, r) {
					if (null == i || null == r) return t <= 50 ? (n = 9 * e / 500, o = e / 10) : (n = 9 * e / 50, o = -8 * e), n * t + o;
					var n, o, a = e;
					return t <= 50 ? a -= (e - e / i) / 50 * (50 - t) : a += (e * r - e) / 50 * (t - 50), a;
				}, g.findCenterOfTree = function(t) {
					var e = [];
					e = e.concat(t);
					var i = [], r = /* @__PURE__ */ new Map(), n = !1, o = null;
					(1 == e.length || 2 == e.length) && (n = !0, o = e[0]);
					for (var a = 0; a < e.length; a++) {
						var s = e[a], h = s.getNeighborsList().size;
						r.set(s, s.getNeighborsList().size), 1 == h && i.push(s);
					}
					var l = [];
					for (l = l.concat(i); !n;) {
						var d = [];
						d = d.concat(l), l = [];
						for (var a = 0; a < e.length; a++) {
							var s = e[a], c = e.indexOf(s);
							c >= 0 && e.splice(c, 1), s.getNeighborsList().forEach(function(t) {
								if (0 > i.indexOf(t)) {
									var e = r.get(t) - 1;
									1 == e && l.push(t), r.set(t, e);
								}
							});
						}
						i = i.concat(l), (1 == e.length || 2 == e.length) && (n = !0, o = e[0]);
					}
					return o;
				}, g.prototype.setGraphManager = function(t) {
					this.graphManager = t;
				}, t.exports = g;
			},
			function(t, e, i) {
				function r() {}
				f(r, "RandomSeed"), r.seed = 1, r.x = 0, r.nextDouble = function() {
					return r.x = 1e4 * Math.sin(r.seed++), r.x - Math.floor(r.x);
				}, t.exports = r;
			},
			function(t, e, i) {
				var r = i(5);
				function n(t, e) {
					this.lworldOrgX = 0, this.lworldOrgY = 0, this.ldeviceOrgX = 0, this.ldeviceOrgY = 0, this.lworldExtX = 1, this.lworldExtY = 1, this.ldeviceExtX = 1, this.ldeviceExtY = 1;
				}
				f(n, "Transform"), n.prototype.getWorldOrgX = function() {
					return this.lworldOrgX;
				}, n.prototype.setWorldOrgX = function(t) {
					this.lworldOrgX = t;
				}, n.prototype.getWorldOrgY = function() {
					return this.lworldOrgY;
				}, n.prototype.setWorldOrgY = function(t) {
					this.lworldOrgY = t;
				}, n.prototype.getWorldExtX = function() {
					return this.lworldExtX;
				}, n.prototype.setWorldExtX = function(t) {
					this.lworldExtX = t;
				}, n.prototype.getWorldExtY = function() {
					return this.lworldExtY;
				}, n.prototype.setWorldExtY = function(t) {
					this.lworldExtY = t;
				}, n.prototype.getDeviceOrgX = function() {
					return this.ldeviceOrgX;
				}, n.prototype.setDeviceOrgX = function(t) {
					this.ldeviceOrgX = t;
				}, n.prototype.getDeviceOrgY = function() {
					return this.ldeviceOrgY;
				}, n.prototype.setDeviceOrgY = function(t) {
					this.ldeviceOrgY = t;
				}, n.prototype.getDeviceExtX = function() {
					return this.ldeviceExtX;
				}, n.prototype.setDeviceExtX = function(t) {
					this.ldeviceExtX = t;
				}, n.prototype.getDeviceExtY = function() {
					return this.ldeviceExtY;
				}, n.prototype.setDeviceExtY = function(t) {
					this.ldeviceExtY = t;
				}, n.prototype.transformX = function(t) {
					var e = 0, i = this.lworldExtX;
					return 0 != i && (e = this.ldeviceOrgX + (t - this.lworldOrgX) * this.ldeviceExtX / i), e;
				}, n.prototype.transformY = function(t) {
					var e = 0, i = this.lworldExtY;
					return 0 != i && (e = this.ldeviceOrgY + (t - this.lworldOrgY) * this.ldeviceExtY / i), e;
				}, n.prototype.inverseTransformX = function(t) {
					var e = 0, i = this.ldeviceExtX;
					return 0 != i && (e = this.lworldOrgX + (t - this.ldeviceOrgX) * this.lworldExtX / i), e;
				}, n.prototype.inverseTransformY = function(t) {
					var e = 0, i = this.ldeviceExtY;
					return 0 != i && (e = this.lworldOrgY + (t - this.ldeviceOrgY) * this.lworldExtY / i), e;
				}, n.prototype.inverseTransformPoint = function(t) {
					return new r(this.inverseTransformX(t.x), this.inverseTransformY(t.y));
				}, t.exports = n;
			},
			function(t, e, i) {
				function r(t) {
					if (!Array.isArray(t)) return Array.from(t);
					for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
					return i;
				}
				f(r, "_toConsumableArray");
				var n = i(15), o = i(4), a = i(0), s = i(8), h = i(9);
				function l() {
					n.call(this), this.useSmartIdealEdgeLengthCalculation = o.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.gravityConstant = o.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = o.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = o.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = o.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.displacementThresholdPerNode = 3 * o.DEFAULT_EDGE_LENGTH / 100, this.coolingFactor = o.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.initialCoolingFactor = o.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.totalDisplacement = 0, this.oldTotalDisplacement = 0, this.maxIterations = o.MAX_ITERATIONS;
				}
				for (var d in f(l, "FDLayout"), l.prototype = Object.create(n.prototype), n) l[d] = n[d];
				l.prototype.initParameters = function() {
					n.prototype.initParameters.call(this, arguments), this.totalIterations = 0, this.notAnimatedIterations = 0, this.useFRGridVariant = o.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION, this.grid = [];
				}, l.prototype.calcIdealEdgeLengths = function() {
					for (var t, e, i, r, n, s, h, l = this.getGraphManager().getAllEdges(), d = 0; d < l.length; d++) e = (t = l[d]).idealLength, t.isInterGraph && (r = t.getSource(), n = t.getTarget(), s = t.getSourceInLca().getEstimatedSize(), h = t.getTargetInLca().getEstimatedSize(), this.useSmartIdealEdgeLengthCalculation && (t.idealLength += s + h - 2 * a.SIMPLE_NODE_SIZE), i = t.getLca().getInclusionTreeDepth(), t.idealLength += e * o.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR * (r.getInclusionTreeDepth() + n.getInclusionTreeDepth() - 2 * i));
				}, l.prototype.initSpringEmbedder = function() {
					var t = this.getAllNodes().length;
					this.incremental ? (t > o.ADAPTATION_LOWER_NODE_LIMIT && (this.coolingFactor = Math.max(this.coolingFactor * o.COOLING_ADAPTATION_FACTOR, this.coolingFactor - (t - o.ADAPTATION_LOWER_NODE_LIMIT) / (o.ADAPTATION_UPPER_NODE_LIMIT - o.ADAPTATION_LOWER_NODE_LIMIT) * this.coolingFactor * (1 - o.COOLING_ADAPTATION_FACTOR))), this.maxNodeDisplacement = o.MAX_NODE_DISPLACEMENT_INCREMENTAL) : (t > o.ADAPTATION_LOWER_NODE_LIMIT ? this.coolingFactor = Math.max(o.COOLING_ADAPTATION_FACTOR, 1 - (t - o.ADAPTATION_LOWER_NODE_LIMIT) / (o.ADAPTATION_UPPER_NODE_LIMIT - o.ADAPTATION_LOWER_NODE_LIMIT) * (1 - o.COOLING_ADAPTATION_FACTOR)) : this.coolingFactor = 1, this.initialCoolingFactor = this.coolingFactor, this.maxNodeDisplacement = o.MAX_NODE_DISPLACEMENT), this.maxIterations = Math.max(5 * this.getAllNodes().length, this.maxIterations), this.displacementThresholdPerNode = 3 * o.DEFAULT_EDGE_LENGTH / 100, this.totalDisplacementThreshold = this.displacementThresholdPerNode * this.getAllNodes().length, this.repulsionRange = this.calcRepulsionRange();
				}, l.prototype.calcSpringForces = function() {
					for (var t, e = this.getAllEdges(), i = 0; i < e.length; i++) t = e[i], this.calcSpringForce(t, t.idealLength);
				}, l.prototype.calcRepulsionForces = function() {
					var t, e, i, r, n, a = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0], s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], h = this.getAllNodes();
					if (this.useFRGridVariant) for (this.totalIterations % o.GRID_CALCULATION_CHECK_PERIOD == 1 && a && this.updateGrid(), n = /* @__PURE__ */ new Set(), t = 0; t < h.length; t++) i = h[t], this.calculateRepulsionForceOfANode(i, n, a, s), n.add(i);
					else for (t = 0; t < h.length; t++) for (i = h[t], e = t + 1; e < h.length; e++) r = h[e], i.getOwner() == r.getOwner() && this.calcRepulsionForce(i, r);
				}, l.prototype.calcGravitationalForces = function() {
					for (var t, e = this.getAllNodesToApplyGravitation(), i = 0; i < e.length; i++) t = e[i], this.calcGravitationalForce(t);
				}, l.prototype.moveNodes = function() {
					for (var t = this.getAllNodes(), e = 0; e < t.length; e++) t[e].move();
				}, l.prototype.calcSpringForce = function(t, e) {
					var i, r, n, o, a = t.getSource(), s = t.getTarget();
					if (this.uniformLeafNodeSizes && null == a.getChild() && null == s.getChild()) t.updateLengthSimple();
					else if (t.updateLength(), t.isOverlapingSourceAndTarget) return;
					0 != (i = t.getLength()) && (n = (r = t.edgeElasticity * (i - e)) * (t.lengthX / i), o = r * (t.lengthY / i), a.springForceX += n, a.springForceY += o, s.springForceX -= n, s.springForceY -= o);
				}, l.prototype.calcRepulsionForce = function(t, e) {
					var i, r, n, a, l, d, c, g = t.getRect(), u = e.getRect(), p = [, ,], f = [
						,
						,
						,
						,
					];
					if (g.intersects(u)) {
						s.calcSeparationAmount(g, u, p, o.DEFAULT_EDGE_LENGTH / 2), d = 2 * p[0], c = 2 * p[1];
						var m = t.noOfChildren * e.noOfChildren / (t.noOfChildren + e.noOfChildren);
						t.repulsionForceX -= m * d, t.repulsionForceY -= m * c, e.repulsionForceX += m * d, e.repulsionForceY += m * c;
					} else this.uniformLeafNodeSizes && null == t.getChild() && null == e.getChild() ? (i = u.getCenterX() - g.getCenterX(), r = u.getCenterY() - g.getCenterY()) : (s.getIntersection(g, u, f), i = f[2] - f[0], r = f[3] - f[1]), Math.abs(i) < o.MIN_REPULSION_DIST && (i = h.sign(i) * o.MIN_REPULSION_DIST), Math.abs(r) < o.MIN_REPULSION_DIST && (r = h.sign(r) * o.MIN_REPULSION_DIST), a = Math.sqrt(n = i * i + r * r), d = (l = (t.nodeRepulsion / 2 + e.nodeRepulsion / 2) * t.noOfChildren * e.noOfChildren / n) * i / a, c = l * r / a, t.repulsionForceX -= d, t.repulsionForceY -= c, e.repulsionForceX += d, e.repulsionForceY += c;
				}, l.prototype.calcGravitationalForce = function(t) {
					var e, i = t.getOwner(), r = (i.getRight() + i.getLeft()) / 2, n = (i.getTop() + i.getBottom()) / 2, o = t.getCenterX() - r, a = t.getCenterY() - n, s = Math.abs(o) + t.getWidth() / 2, h = Math.abs(a) + t.getHeight() / 2;
					t.getOwner() == this.graphManager.getRoot() ? (s > (e = i.getEstimatedSize() * this.gravityRangeFactor) || h > e) && (t.gravitationForceX = -this.gravityConstant * o, t.gravitationForceY = -this.gravityConstant * a) : (s > (e = i.getEstimatedSize() * this.compoundGravityRangeFactor) || h > e) && (t.gravitationForceX = -this.gravityConstant * o * this.compoundGravityConstant, t.gravitationForceY = -this.gravityConstant * a * this.compoundGravityConstant);
				}, l.prototype.isConverged = function() {
					var t, e = !1;
					return this.totalIterations > this.maxIterations / 3 && (e = 2 > Math.abs(this.totalDisplacement - this.oldTotalDisplacement)), t = this.totalDisplacement < this.totalDisplacementThreshold, this.oldTotalDisplacement = this.totalDisplacement, t || e;
				}, l.prototype.animate = function() {
					this.animationDuringLayout && !this.isSubLayout && (this.notAnimatedIterations == this.animationPeriod ? (this.update(), this.notAnimatedIterations = 0) : this.notAnimatedIterations++);
				}, l.prototype.calcNoOfChildrenForAllNodes = function() {
					for (var t, e = this.graphManager.getAllNodes(), i = 0; i < e.length; i++) (t = e[i]).noOfChildren = t.getNoOfChildren();
				}, l.prototype.calcGrid = function(t) {
					var e = 0, i = 0;
					e = parseInt(Math.ceil((t.getRight() - t.getLeft()) / this.repulsionRange)), i = parseInt(Math.ceil((t.getBottom() - t.getTop()) / this.repulsionRange));
					for (var r = Array(e), n = 0; n < e; n++) r[n] = Array(i);
					for (var n = 0; n < e; n++) for (var o = 0; o < i; o++) r[n][o] = [];
					return r;
				}, l.prototype.addNodeToGrid = function(t, e, i) {
					var r = 0, n = 0, o = 0, a = 0;
					r = parseInt(Math.floor((t.getRect().x - e) / this.repulsionRange)), n = parseInt(Math.floor((t.getRect().width + t.getRect().x - e) / this.repulsionRange)), o = parseInt(Math.floor((t.getRect().y - i) / this.repulsionRange)), a = parseInt(Math.floor((t.getRect().height + t.getRect().y - i) / this.repulsionRange));
					for (var s = r; s <= n; s++) for (var h = o; h <= a; h++) this.grid[s][h].push(t), t.setGridCoordinates(r, n, o, a);
				}, l.prototype.updateGrid = function() {
					var t, e, i = this.getAllNodes();
					for (this.grid = this.calcGrid(this.graphManager.getRoot()), t = 0; t < i.length; t++) e = i[t], this.addNodeToGrid(e, this.graphManager.getRoot().getLeft(), this.graphManager.getRoot().getTop());
				}, l.prototype.calculateRepulsionForceOfANode = function(t, e, i, n) {
					if (this.totalIterations % o.GRID_CALCULATION_CHECK_PERIOD == 1 && i || n) {
						var a = /* @__PURE__ */ new Set();
						t.surrounding = [];
						for (var s, h = this.grid, l = t.startX - 1; l < t.finishX + 2; l++) for (var d = t.startY - 1; d < t.finishY + 2; d++) if (!(l < 0 || d < 0 || l >= h.length || d >= h[0].length)) {
							for (var c = 0; c < h[l][d].length; c++) if (s = h[l][d][c], t.getOwner() == s.getOwner() && t != s && !e.has(s) && !a.has(s)) {
								var g = Math.abs(t.getCenterX() - s.getCenterX()) - (t.getWidth() / 2 + s.getWidth() / 2), u = Math.abs(t.getCenterY() - s.getCenterY()) - (t.getHeight() / 2 + s.getHeight() / 2);
								g <= this.repulsionRange && u <= this.repulsionRange && a.add(s);
							}
						}
						t.surrounding = [].concat(r(a));
					}
					for (l = 0; l < t.surrounding.length; l++) this.calcRepulsionForce(t, t.surrounding[l]);
				}, l.prototype.calcRepulsionRange = function() {
					return 0;
				}, t.exports = l;
			},
			function(t, e, i) {
				var r = i(1), n = i(4);
				function o(t, e, i) {
					r.call(this, t, e, i), this.idealLength = n.DEFAULT_EDGE_LENGTH, this.edgeElasticity = n.DEFAULT_SPRING_STRENGTH;
				}
				for (var a in f(o, "FDLayoutEdge"), o.prototype = Object.create(r.prototype), r) o[a] = r[a];
				t.exports = o;
			},
			function(t, e, i) {
				var r = i(3), n = i(4);
				function o(t, e, i, o) {
					r.call(this, t, e, i, o), this.nodeRepulsion = n.DEFAULT_REPULSION_STRENGTH, this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0, this.startX = 0, this.finishX = 0, this.startY = 0, this.finishY = 0, this.surrounding = [];
				}
				for (var a in f(o, "FDLayoutNode"), o.prototype = Object.create(r.prototype), r) o[a] = r[a];
				o.prototype.setGridCoordinates = function(t, e, i, r) {
					this.startX = t, this.finishX = e, this.startY = i, this.finishY = r;
				}, t.exports = o;
			},
			function(t, e, i) {
				function r(t, e) {
					this.width = 0, this.height = 0, null !== t && null !== e && (this.height = e, this.width = t);
				}
				f(r, "DimensionD"), r.prototype.getWidth = function() {
					return this.width;
				}, r.prototype.setWidth = function(t) {
					this.width = t;
				}, r.prototype.getHeight = function() {
					return this.height;
				}, r.prototype.setHeight = function(t) {
					this.height = t;
				}, t.exports = r;
			},
			function(t, e, i) {
				var r = i(14);
				function n() {
					this.map = {}, this.keys = [];
				}
				f(n, "HashMap"), n.prototype.put = function(t, e) {
					var i = r.createID(t);
					this.contains(i) || (this.map[i] = e, this.keys.push(t));
				}, n.prototype.contains = function(t) {
					return r.createID(t), null != this.map[t];
				}, n.prototype.get = function(t) {
					var e = r.createID(t);
					return this.map[e];
				}, n.prototype.keySet = function() {
					return this.keys;
				}, t.exports = n;
			},
			function(t, e, i) {
				var r = i(14);
				function n() {
					this.set = {};
				}
				f(n, "HashSet"), n.prototype.add = function(t) {
					var e = r.createID(t);
					this.contains(e) || (this.set[e] = t);
				}, n.prototype.remove = function(t) {
					delete this.set[r.createID(t)];
				}, n.prototype.clear = function() {
					this.set = {};
				}, n.prototype.contains = function(t) {
					return this.set[r.createID(t)] == t;
				}, n.prototype.isEmpty = function() {
					return 0 === this.size();
				}, n.prototype.size = function() {
					return Object.keys(this.set).length;
				}, n.prototype.addAllTo = function(t) {
					for (var e = Object.keys(this.set), i = e.length, r = 0; r < i; r++) t.push(this.set[e[r]]);
				}, n.prototype.size = function() {
					return Object.keys(this.set).length;
				}, n.prototype.addAll = function(t) {
					for (var e = t.length, i = 0; i < e; i++) {
						var r = t[i];
						this.add(r);
					}
				}, t.exports = n;
			},
			function(t, e, i) {
				function r() {}
				f(r, "Matrix"), r.multMat = function(t, e) {
					for (var i = [], r = 0; r < t.length; r++) {
						i[r] = [];
						for (var n = 0; n < e[0].length; n++) {
							i[r][n] = 0;
							for (var o = 0; o < t[0].length; o++) i[r][n] += t[r][o] * e[o][n];
						}
					}
					return i;
				}, r.transpose = function(t) {
					for (var e = [], i = 0; i < t[0].length; i++) {
						e[i] = [];
						for (var r = 0; r < t.length; r++) e[i][r] = t[r][i];
					}
					return e;
				}, r.multCons = function(t, e) {
					for (var i = [], r = 0; r < t.length; r++) i[r] = t[r] * e;
					return i;
				}, r.minusOp = function(t, e) {
					for (var i = [], r = 0; r < t.length; r++) i[r] = t[r] - e[r];
					return i;
				}, r.dotProduct = function(t, e) {
					for (var i = 0, r = 0; r < t.length; r++) i += t[r] * e[r];
					return i;
				}, r.mag = function(t) {
					return Math.sqrt(this.dotProduct(t, t));
				}, r.normalize = function(t) {
					for (var e = [], i = this.mag(t), r = 0; r < t.length; r++) e[r] = t[r] / i;
					return e;
				}, r.multGamma = function(t) {
					for (var e = [], i = 0, r = 0; r < t.length; r++) i += t[r];
					i *= -1 / t.length;
					for (var n = 0; n < t.length; n++) e[n] = i + t[n];
					return e;
				}, r.multL = function(t, e, i) {
					for (var r = [], n = [], o = [], a = 0; a < e[0].length; a++) {
						for (var s = 0, h = 0; h < e.length; h++) s += -.5 * e[h][a] * t[h];
						n[a] = s;
					}
					for (var l = 0; l < i.length; l++) {
						for (var d = 0, c = 0; c < i.length; c++) d += i[l][c] * n[c];
						o[l] = d;
					}
					for (var g = 0; g < e.length; g++) {
						for (var u = 0, p = 0; p < e[0].length; p++) u += e[g][p] * o[p];
						r[g] = u;
					}
					return r;
				}, t.exports = r;
			},
			function(t, e, i) {
				var r = function() {
					function t(t, e) {
						for (var i = 0; i < e.length; i++) {
							var r = e[i];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
						}
					}
					return f(t, "defineProperties"), function(e, i, r) {
						return i && t(e.prototype, i), r && t(e, r), e;
					};
				}();
				function n(t, e) {
					if (!(t instanceof e)) throw TypeError("Cannot call a class as a function");
				}
				f(n, "_classCallCheck");
				var o = i(11);
				t.exports = function() {
					function t(e, i) {
						n(this, t), (null !== i || void 0 !== i) && (this.compareFunction = this._defaultCompareFunction);
						var r = void 0;
						r = e instanceof o ? e.size() : e.length, this._quicksort(e, 0, r - 1);
					}
					return f(t, "Quicksort"), r(t, [
						{
							key: "_quicksort",
							value: f(function(t, e, i) {
								if (e < i) {
									var r = this._partition(t, e, i);
									this._quicksort(t, e, r), this._quicksort(t, r + 1, i);
								}
							}, "_quicksort")
						},
						{
							key: "_partition",
							value: f(function(t, e, i) {
								for (var r = this._get(t, e), n = e, o = i;;) {
									for (; this.compareFunction(r, this._get(t, o));) o--;
									for (; this.compareFunction(this._get(t, n), r);) n++;
									if (!(n < o)) return o;
									this._swap(t, n, o), n++, o--;
								}
							}, "_partition")
						},
						{
							key: "_get",
							value: f(function(t, e) {
								return t instanceof o ? t.get_object_at(e) : t[e];
							}, "_get")
						},
						{
							key: "_set",
							value: f(function(t, e, i) {
								t instanceof o ? t.set_object_at(e, i) : t[e] = i;
							}, "_set")
						},
						{
							key: "_swap",
							value: f(function(t, e, i) {
								var r = this._get(t, e);
								this._set(t, e, this._get(t, i)), this._set(t, i, r);
							}, "_swap")
						},
						{
							key: "_defaultCompareFunction",
							value: f(function(t, e) {
								return e > t;
							}, "_defaultCompareFunction")
						}
					]), t;
				}();
			},
			function(t, e, i) {
				function r() {}
				f(r, "SVD"), r.svd = function(t) {
					this.U = null, this.V = null, this.s = null, this.m = 0, this.n = 0, this.m = t.length, this.n = t[0].length;
					var e = Math.min(this.m, this.n);
					this.s = function(t) {
						for (var e = []; t-- > 0;) e.push(0);
						return e;
					}(Math.min(this.m + 1, this.n)), this.U = (m = [this.m, e], f(function t(e) {
						if (0 == e.length) return 0;
						for (var i = [], r = 0; r < e[0]; r++) i.push(t(e.slice(1)));
						return i;
					}, "allocate")(m)), this.V = (v = [this.n, this.n], f(function t(e) {
						if (0 == e.length) return 0;
						for (var i = [], r = 0; r < e[0]; r++) i.push(t(e.slice(1)));
						return i;
					}, "allocate")(v));
					for (var i = function(t) {
						for (var e = []; t-- > 0;) e.push(0);
						return e;
					}(this.n), n = function(t) {
						for (var e = []; t-- > 0;) e.push(0);
						return e;
					}(this.m), o = Math.min(this.m - 1, this.n), a = Math.max(0, Math.min(this.n - 2, this.m)), s = 0; s < Math.max(o, a); s++) {
						if (s < o) {
							this.s[s] = 0;
							for (var h = s; h < this.m; h++) this.s[s] = r.hypot(this.s[s], t[h][s]);
							if (0 !== this.s[s]) {
								t[s][s] < 0 && (this.s[s] = -this.s[s]);
								for (var l = s; l < this.m; l++) t[l][s] /= this.s[s];
								t[s][s] += 1;
							}
							this.s[s] = -this.s[s];
						}
						for (var d = s + 1; d < this.n; d++) {
							if (y = s < o, E = 0 !== this.s[s], y && E) {
								for (var c = 0, g = s; g < this.m; g++) c += t[g][s] * t[g][d];
								c = -c / t[s][s];
								for (var u = s; u < this.m; u++) t[u][d] += c * t[u][s];
							}
							i[d] = t[s][d];
						}
						if (N = s < o) for (var p = s; p < this.m; p++) this.U[p][s] = t[p][s];
						if (s < a) {
							i[s] = 0;
							for (var m, v, y, E, N, T, A, C = s + 1; C < this.n; C++) i[s] = r.hypot(i[s], i[C]);
							if (0 !== i[s]) {
								i[s + 1] < 0 && (i[s] = -i[s]);
								for (var L = s + 1; L < this.n; L++) i[L] /= i[s];
								i[s + 1] += 1;
							}
							if (i[s] = -i[s], T = s + 1 < this.m, A = 0 !== i[s], T && A) {
								for (var _ = s + 1; _ < this.m; _++) n[_] = 0;
								for (var w = s + 1; w < this.n; w++) for (var M = s + 1; M < this.m; M++) n[M] += i[w] * t[M][w];
								for (var I = s + 1; I < this.n; I++) for (var x = -i[I] / i[s + 1], O = s + 1; O < this.m; O++) t[O][I] += x * n[O];
							}
							for (var D = s + 1; D < this.n; D++) this.V[D][s] = i[D];
						}
					}
					var R = Math.min(this.n, this.m + 1);
					o < this.n && (this.s[o] = t[o][o]), this.m < R && (this.s[R - 1] = 0), a + 1 < R && (i[a] = t[a][R - 1]), i[R - 1] = 0;
					for (var b = o; b < e; b++) {
						for (var F = 0; F < this.m; F++) this.U[F][b] = 0;
						this.U[b][b] = 1;
					}
					for (var G = o - 1; G >= 0; G--) if (0 !== this.s[G]) {
						for (var S = G + 1; S < e; S++) {
							for (var P = 0, k = G; k < this.m; k++) P += this.U[k][G] * this.U[k][S];
							P = -P / this.U[G][G];
							for (var U = G; U < this.m; U++) this.U[U][S] += P * this.U[U][G];
						}
						for (var Y = G; Y < this.m; Y++) this.U[Y][G] = -this.U[Y][G];
						this.U[G][G] = 1 + this.U[G][G];
						for (var H = 0; H < G - 1; H++) this.U[H][G] = 0;
					} else {
						for (var X = 0; X < this.m; X++) this.U[X][G] = 0;
						this.U[G][G] = 1;
					}
					for (var z = this.n - 1; z >= 0; z--) {
						if (tu = z < a, tp = 0 !== i[z], tu && tp) for (var B = z + 1; B < e; B++) {
							for (var V = 0, W = z + 1; W < this.n; W++) V += this.V[W][z] * this.V[W][B];
							V = -V / this.V[z + 1][z];
							for (var j = z + 1; j < this.n; j++) this.V[j][B] += V * this.V[j][z];
						}
						for (var q = 0; q < this.n; q++) this.V[q][z] = 0;
						this.V[z][z] = 1;
					}
					for (var $ = R - 1; R > 0;) {
						var Q = void 0, J = void 0;
						for (Q = R - 2; Q >= -1 && -1 !== Q; Q--) if (Math.abs(i[Q]) <= 16033346880071782e-307 + 2220446049250313e-31 * (Math.abs(this.s[Q]) + Math.abs(this.s[Q + 1]))) {
							i[Q] = 0;
							break;
						}
						if (Q === R - 2) J = 4;
						else {
							var K = void 0;
							for (K = R - 1; K >= Q && K !== Q; K--) {
								var tt = (K !== R ? Math.abs(i[K]) : 0) + (K !== Q + 1 ? Math.abs(i[K - 1]) : 0);
								if (Math.abs(this.s[K]) <= 16033346880071782e-307 + 2220446049250313e-31 * tt) {
									this.s[K] = 0;
									break;
								}
							}
							K === Q ? J = 3 : K === R - 1 ? J = 1 : (J = 2, Q = K);
						}
						switch (Q++, J) {
							case 1:
								var te = i[R - 2];
								i[R - 2] = 0;
								for (var ti = R - 2; ti >= Q; ti--) {
									var tr = r.hypot(this.s[ti], te), tn = this.s[ti] / tr, to = te / tr;
									this.s[ti] = tr, ti !== Q && (te = -to * i[ti - 1], i[ti - 1] = tn * i[ti - 1]);
									for (var ta = 0; ta < this.n; ta++) tr = tn * this.V[ta][ti] + to * this.V[ta][R - 1], this.V[ta][R - 1] = -to * this.V[ta][ti] + tn * this.V[ta][R - 1], this.V[ta][ti] = tr;
								}
								break;
							case 2:
								var ts = i[Q - 1];
								i[Q - 1] = 0;
								for (var th = Q; th < R; th++) {
									var tl = r.hypot(this.s[th], ts), td = this.s[th] / tl, tc = ts / tl;
									this.s[th] = tl, ts = -tc * i[th], i[th] = td * i[th];
									for (var tg = 0; tg < this.m; tg++) tl = td * this.U[tg][th] + tc * this.U[tg][Q - 1], this.U[tg][Q - 1] = -tc * this.U[tg][th] + td * this.U[tg][Q - 1], this.U[tg][th] = tl;
								}
								break;
							case 3:
								var tu, tp, tf, tm, tv = Math.max(Math.max(Math.max(Math.max(Math.abs(this.s[R - 1]), Math.abs(this.s[R - 2])), Math.abs(i[R - 2])), Math.abs(this.s[Q])), Math.abs(i[Q])), ty = this.s[R - 1] / tv, tE = this.s[R - 2] / tv, tN = i[R - 2] / tv, tT = this.s[Q] / tv, tA = i[Q] / tv, tC = ((tE + ty) * (tE - ty) + tN * tN) / 2, tL = ty * tN * (ty * tN), t_ = 0;
								tf = 0 !== tC, tm = 0 !== tL, (tf || tm) && (t_ = Math.sqrt(tC * tC + tL), tC < 0 && (t_ = -t_), t_ = tL / (tC + t_));
								for (var tw = (tT + ty) * (tT - ty) + t_, tM = tT * tA, tI = Q; tI < R - 1; tI++) {
									var tx = r.hypot(tw, tM), tO = tw / tx, tD = tM / tx;
									tI !== Q && (i[tI - 1] = tx), tw = tO * this.s[tI] + tD * i[tI], i[tI] = tO * i[tI] - tD * this.s[tI], tM = tD * this.s[tI + 1], this.s[tI + 1] = tO * this.s[tI + 1];
									for (var tR = 0; tR < this.n; tR++) tx = tO * this.V[tR][tI] + tD * this.V[tR][tI + 1], this.V[tR][tI + 1] = -tD * this.V[tR][tI] + tO * this.V[tR][tI + 1], this.V[tR][tI] = tx;
									if (tx = r.hypot(tw, tM), tO = tw / tx, tD = tM / tx, this.s[tI] = tx, tw = tO * i[tI] + tD * this.s[tI + 1], this.s[tI + 1] = -tD * i[tI] + tO * this.s[tI + 1], tM = tD * i[tI + 1], i[tI + 1] = tO * i[tI + 1], tI < this.m - 1) for (var tb = 0; tb < this.m; tb++) tx = tO * this.U[tb][tI] + tD * this.U[tb][tI + 1], this.U[tb][tI + 1] = -tD * this.U[tb][tI] + tO * this.U[tb][tI + 1], this.U[tb][tI] = tx;
								}
								i[R - 2] = tw;
								break;
							case 4:
								if (this.s[Q] <= 0 && (this.s[Q] = this.s[Q] < 0 ? -this.s[Q] : 0, 1)) for (var tF = 0; tF <= $; tF++) this.V[tF][Q] = -this.V[tF][Q];
								for (; Q < $ && !(this.s[Q] >= this.s[Q + 1]);) {
									var tG = this.s[Q];
									if (this.s[Q] = this.s[Q + 1], this.s[Q + 1] = tG, Q < this.n - 1) for (var tS = 0; tS < this.n; tS++) tG = this.V[tS][Q + 1], this.V[tS][Q + 1] = this.V[tS][Q], this.V[tS][Q] = tG;
									if (Q < this.m - 1) for (var tP = 0; tP < this.m; tP++) tG = this.U[tP][Q + 1], this.U[tP][Q + 1] = this.U[tP][Q], this.U[tP][Q] = tG;
									Q++;
								}
								R--;
						}
					}
					return {
						U: this.U,
						V: this.V,
						S: this.s
					};
				}, r.hypot = function(t, e) {
					var i = void 0;
					return Math.abs(t) > Math.abs(e) ? (i = e / t, i = Math.abs(t) * Math.sqrt(1 + i * i)) : 0 != e ? (i = t / e, i = Math.abs(e) * Math.sqrt(1 + i * i)) : i = 0, i;
				}, t.exports = r;
			},
			function(t, e, i) {
				var r = function() {
					function t(t, e) {
						for (var i = 0; i < e.length; i++) {
							var r = e[i];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
						}
					}
					return f(t, "defineProperties"), function(e, i, r) {
						return i && t(e.prototype, i), r && t(e, r), e;
					};
				}();
				function n(t, e) {
					if (!(t instanceof e)) throw TypeError("Cannot call a class as a function");
				}
				f(n, "_classCallCheck"), t.exports = function() {
					function t(e, i) {
						var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1, a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1;
						n(this, t), this.sequence1 = e, this.sequence2 = i, this.match_score = r, this.mismatch_penalty = o, this.gap_penalty = a, this.iMax = e.length + 1, this.jMax = i.length + 1, this.grid = Array(this.iMax);
						for (var s = 0; s < this.iMax; s++) {
							this.grid[s] = Array(this.jMax);
							for (var h = 0; h < this.jMax; h++) this.grid[s][h] = 0;
						}
						this.tracebackGrid = Array(this.iMax);
						for (var l = 0; l < this.iMax; l++) {
							this.tracebackGrid[l] = Array(this.jMax);
							for (var d = 0; d < this.jMax; d++) this.tracebackGrid[l][d] = [
								null,
								null,
								null
							];
						}
						this.alignments = [], this.score = -1, this.computeGrids();
					}
					return f(t, "NeedlemanWunsch"), r(t, [
						{
							key: "getScore",
							value: f(function() {
								return this.score;
							}, "getScore")
						},
						{
							key: "getAlignments",
							value: f(function() {
								return this.alignments;
							}, "getAlignments")
						},
						{
							key: "computeGrids",
							value: f(function() {
								for (var t = 1; t < this.jMax; t++) this.grid[0][t] = this.grid[0][t - 1] + this.gap_penalty, this.tracebackGrid[0][t] = [
									!1,
									!1,
									!0
								];
								for (var e = 1; e < this.iMax; e++) this.grid[e][0] = this.grid[e - 1][0] + this.gap_penalty, this.tracebackGrid[e][0] = [
									!1,
									!0,
									!1
								];
								for (var i = 1; i < this.iMax; i++) for (var r = 1; r < this.jMax; r++) {
									var n = [
										this.sequence1[i - 1] === this.sequence2[r - 1] ? this.grid[i - 1][r - 1] + this.match_score : this.grid[i - 1][r - 1] + this.mismatch_penalty,
										this.grid[i - 1][r] + this.gap_penalty,
										this.grid[i][r - 1] + this.gap_penalty
									], o = this.arrayAllMaxIndexes(n);
									this.grid[i][r] = n[o[0]], this.tracebackGrid[i][r] = [
										o.includes(0),
										o.includes(1),
										o.includes(2)
									];
								}
								this.score = this.grid[this.iMax - 1][this.jMax - 1];
							}, "computeGrids")
						},
						{
							key: "alignmentTraceback",
							value: f(function() {
								var t = [];
								for (t.push({
									pos: [this.sequence1.length, this.sequence2.length],
									seq1: "",
									seq2: ""
								}); t[0];) {
									var e = t[0], i = this.tracebackGrid[e.pos[0]][e.pos[1]];
									i[0] && t.push({
										pos: [e.pos[0] - 1, e.pos[1] - 1],
										seq1: this.sequence1[e.pos[0] - 1] + e.seq1,
										seq2: this.sequence2[e.pos[1] - 1] + e.seq2
									}), i[1] && t.push({
										pos: [e.pos[0] - 1, e.pos[1]],
										seq1: this.sequence1[e.pos[0] - 1] + e.seq1,
										seq2: "-" + e.seq2
									}), i[2] && t.push({
										pos: [e.pos[0], e.pos[1] - 1],
										seq1: "-" + e.seq1,
										seq2: this.sequence2[e.pos[1] - 1] + e.seq2
									}), 0 === e.pos[0] && 0 === e.pos[1] && this.alignments.push({
										sequence1: e.seq1,
										sequence2: e.seq2
									}), t.shift();
								}
								return this.alignments;
							}, "alignmentTraceback")
						},
						{
							key: "getAllIndexes",
							value: f(function(t, e) {
								for (var i = [], r = -1; -1 !== (r = t.indexOf(e, r + 1));) i.push(r);
								return i;
							}, "getAllIndexes")
						},
						{
							key: "arrayAllMaxIndexes",
							value: f(function(t) {
								return this.getAllIndexes(t, Math.max.apply(null, t));
							}, "arrayAllMaxIndexes")
						}
					]), t;
				}();
			},
			function(t, e, i) {
				var r = f(function() {}, "layoutBase");
				r.FDLayout = i(18), r.FDLayoutConstants = i(4), r.FDLayoutEdge = i(19), r.FDLayoutNode = i(20), r.DimensionD = i(21), r.HashMap = i(22), r.HashSet = i(23), r.IGeometry = i(8), r.IMath = i(9), r.Integer = i(10), r.Point = i(12), r.PointD = i(5), r.RandomSeed = i(16), r.RectangleD = i(13), r.Transform = i(17), r.UniqueIDGeneretor = i(14), r.Quicksort = i(25), r.LinkedList = i(11), r.LGraphObject = i(2), r.LGraph = i(6), r.LEdge = i(1), r.LGraphManager = i(7), r.LNode = i(3), r.Layout = i(15), r.LayoutConstants = i(0), r.NeedlemanWunsch = i(27), r.Matrix = i(24), r.SVD = i(26), t.exports = r;
			},
			function(t, e, i) {
				function r() {
					this.listeners = [];
				}
				f(r, "Emitter");
				var n = r.prototype;
				n.addListener = function(t, e) {
					this.listeners.push({
						event: t,
						callback: e
					});
				}, n.removeListener = function(t, e) {
					for (var i = this.listeners.length; i >= 0; i--) {
						var r = this.listeners[i];
						r.event === t && r.callback === e && this.listeners.splice(i, 1);
					}
				}, n.emit = function(t, e) {
					for (var i = 0; i < this.listeners.length; i++) {
						var r = this.listeners[i];
						t === r.event && r.callback(e);
					}
				}, t.exports = r;
			}
		], e = {};
		function i(r) {
			if (e[r]) return e[r].exports;
			var n = e[r] = {
				i: r,
				l: !1,
				exports: {}
			};
			return t[r].call(n.exports, n, n.exports, i), n.l = !0, n.exports;
		}
		return f(i, "__webpack_require__"), i.m = t, i.c = e, i.i = function(t) {
			return t;
		}, i.d = function(t, e, r) {
			i.o(t, e) || Object.defineProperty(t, e, {
				configurable: !1,
				enumerable: !0,
				get: r
			});
		}, i.n = function(t) {
			var e = t && t.__esModule ? f(function() {
				return t.default;
			}, "getDefault") : f(function() {
				return t;
			}, "getModuleExports");
			return i.d(e, "a", e), e;
		}, i.o = function(t, e) {
			return Object.prototype.hasOwnProperty.call(t, e);
		}, i.p = "", i(i.s = 28);
	});
}), I = p((t, e) => {
	f(function(i, r) {
		"object" == typeof t && "object" == typeof e ? e.exports = r(M()) : "function" == typeof define && define.amd ? define(["layout-base"], r) : "object" == typeof t ? t.coseBase = r(M()) : i.coseBase = r(i.layoutBase);
	}, "webpackUniversalModuleDefinition")(t, function(t) {
		var e = {
			45: (t, e, i) => {
				var r = {};
				r.layoutBase = i(551), r.CoSEConstants = i(806), r.CoSEEdge = i(767), r.CoSEGraph = i(880), r.CoSEGraphManager = i(578), r.CoSELayout = i(765), r.CoSENode = i(991), r.ConstraintHandler = i(902), t.exports = r;
			},
			806: (t, e, i) => {
				var r = i(551).FDLayoutConstants;
				function n() {}
				for (var o in f(n, "CoSEConstants"), r) n[o] = r[o];
				n.DEFAULT_USE_MULTI_LEVEL_SCALING = !1, n.DEFAULT_RADIAL_SEPARATION = r.DEFAULT_EDGE_LENGTH, n.DEFAULT_COMPONENT_SEPERATION = 60, n.TILE = !0, n.TILING_PADDING_VERTICAL = 10, n.TILING_PADDING_HORIZONTAL = 10, n.TRANSFORM_ON_CONSTRAINT_HANDLING = !0, n.ENFORCE_CONSTRAINTS = !0, n.APPLY_LAYOUT = !0, n.RELAX_MOVEMENT_ON_CONSTRAINTS = !0, n.TREE_REDUCTION_ON_INCREMENTAL = !0, n.PURE_INCREMENTAL = n.DEFAULT_INCREMENTAL, t.exports = n;
			},
			767: (t, e, i) => {
				var r = i(551).FDLayoutEdge;
				function n(t, e, i) {
					r.call(this, t, e, i);
				}
				for (var o in f(n, "CoSEEdge"), n.prototype = Object.create(r.prototype), r) n[o] = r[o];
				t.exports = n;
			},
			880: (t, e, i) => {
				var r = i(551).LGraph;
				function n(t, e, i) {
					r.call(this, t, e, i);
				}
				for (var o in f(n, "CoSEGraph"), n.prototype = Object.create(r.prototype), r) n[o] = r[o];
				t.exports = n;
			},
			578: (t, e, i) => {
				var r = i(551).LGraphManager;
				function n(t) {
					r.call(this, t);
				}
				for (var o in f(n, "CoSEGraphManager"), n.prototype = Object.create(r.prototype), r) n[o] = r[o];
				t.exports = n;
			},
			765: (t, e, i) => {
				var r = i(551).FDLayout, n = i(578), o = i(880), a = i(991), s = i(767), h = i(806), l = i(902), d = i(551).FDLayoutConstants, c = i(551).LayoutConstants, g = i(551).Point, u = i(551).PointD, p = i(551).DimensionD, m = i(551).Layout, v = i(551).Integer, y = i(551).IGeometry, E = i(551).LGraph, N = i(551).Transform, T = i(551).LinkedList;
				function A() {
					r.call(this), this.toBeTiled = {}, this.constraints = {};
				}
				for (var C in f(A, "CoSELayout"), A.prototype = Object.create(r.prototype), r) A[C] = r[C];
				A.prototype.newGraphManager = function() {
					var t = new n(this);
					return this.graphManager = t, t;
				}, A.prototype.newGraph = function(t) {
					return new o(null, this.graphManager, t);
				}, A.prototype.newNode = function(t) {
					return new a(this.graphManager, t);
				}, A.prototype.newEdge = function(t) {
					return new s(null, null, t);
				}, A.prototype.initParameters = function() {
					r.prototype.initParameters.call(this, arguments), this.isSubLayout || (h.DEFAULT_EDGE_LENGTH < 10 ? this.idealEdgeLength = 10 : this.idealEdgeLength = h.DEFAULT_EDGE_LENGTH, this.useSmartIdealEdgeLengthCalculation = h.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.gravityConstant = d.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = d.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = d.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = d.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.prunedNodesAll = [], this.growTreeIterations = 0, this.afterGrowthIterations = 0, this.isTreeGrowing = !1, this.isGrowthFinished = !1);
				}, A.prototype.initSpringEmbedder = function() {
					r.prototype.initSpringEmbedder.call(this), this.coolingCycle = 0, this.maxCoolingCycle = this.maxIterations / d.CONVERGENCE_CHECK_PERIOD, this.finalTemperature = .04, this.coolingAdjuster = 1;
				}, A.prototype.layout = function() {
					return c.DEFAULT_CREATE_BENDS_AS_NEEDED && (this.createBendpoints(), this.graphManager.resetAllEdges()), this.level = 0, this.classicLayout();
				}, A.prototype.classicLayout = function() {
					if (this.nodesWithGravity = this.calculateNodesToApplyGravitationTo(), this.graphManager.setAllNodesToApplyGravitation(this.nodesWithGravity), this.calcNoOfChildrenForAllNodes(), this.graphManager.calcLowestCommonAncestors(), this.graphManager.calcInclusionTreeDepths(), this.graphManager.getRoot().calcEstimatedSize(), this.calcIdealEdgeLengths(), this.incremental) {
						if (h.TREE_REDUCTION_ON_INCREMENTAL) {
							this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
							var t = new Set(this.getAllNodes()), e = this.nodesWithGravity.filter(function(e) {
								return t.has(e);
							});
							this.graphManager.setAllNodesToApplyGravitation(e);
						}
					} else {
						var i = this.getFlatForest();
						if (i.length > 0) this.positionNodesRadially(i);
						else {
							this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
							var t = new Set(this.getAllNodes()), e = this.nodesWithGravity.filter(function(e) {
								return t.has(e);
							});
							this.graphManager.setAllNodesToApplyGravitation(e), this.positionNodesRandomly();
						}
					}
					return Object.keys(this.constraints).length > 0 && (l.handleConstraints(this), this.initConstraintVariables()), this.initSpringEmbedder(), h.APPLY_LAYOUT && this.runSpringEmbedder(), !0;
				}, A.prototype.tick = function() {
					if (this.totalIterations++, this.totalIterations === this.maxIterations && !this.isTreeGrowing && !this.isGrowthFinished) if (!(this.prunedNodesAll.length > 0)) return !0;
					else this.isTreeGrowing = !0;
					if (this.totalIterations % d.CONVERGENCE_CHECK_PERIOD == 0 && !this.isTreeGrowing && !this.isGrowthFinished) {
						if (this.isConverged()) if (!(this.prunedNodesAll.length > 0)) return !0;
						else this.isTreeGrowing = !0;
						this.coolingCycle++, 0 == this.layoutQuality ? this.coolingAdjuster = this.coolingCycle : 1 == this.layoutQuality && (this.coolingAdjuster = this.coolingCycle / 3), this.coolingFactor = Math.max(this.initialCoolingFactor - Math.pow(this.coolingCycle, Math.log(100 * (this.initialCoolingFactor - this.finalTemperature)) / Math.log(this.maxCoolingCycle)) / 100 * this.coolingAdjuster, this.finalTemperature), this.animationPeriod = Math.ceil(this.initialAnimationPeriod * Math.sqrt(this.coolingFactor));
					}
					if (this.isTreeGrowing) {
						if (this.growTreeIterations % 10 == 0) if (this.prunedNodesAll.length > 0) {
							this.graphManager.updateBounds(), this.updateGrid(), this.growTree(this.prunedNodesAll), this.graphManager.resetAllNodesToApplyGravitation();
							var t = new Set(this.getAllNodes()), e = this.nodesWithGravity.filter(function(e) {
								return t.has(e);
							});
							this.graphManager.setAllNodesToApplyGravitation(e), this.graphManager.updateBounds(), this.updateGrid(), h.PURE_INCREMENTAL ? this.coolingFactor = d.DEFAULT_COOLING_FACTOR_INCREMENTAL / 2 : this.coolingFactor = d.DEFAULT_COOLING_FACTOR_INCREMENTAL;
						} else this.isTreeGrowing = !1, this.isGrowthFinished = !0;
						this.growTreeIterations++;
					}
					if (this.isGrowthFinished) {
						if (this.isConverged()) return !0;
						this.afterGrowthIterations % 10 == 0 && (this.graphManager.updateBounds(), this.updateGrid()), h.PURE_INCREMENTAL ? this.coolingFactor = d.DEFAULT_COOLING_FACTOR_INCREMENTAL / 2 * ((100 - this.afterGrowthIterations) / 100) : this.coolingFactor = d.DEFAULT_COOLING_FACTOR_INCREMENTAL * ((100 - this.afterGrowthIterations) / 100), this.afterGrowthIterations++;
					}
					var i = !this.isTreeGrowing && !this.isGrowthFinished, r = this.growTreeIterations % 10 == 1 && this.isTreeGrowing || this.afterGrowthIterations % 10 == 1 && this.isGrowthFinished;
					return this.totalDisplacement = 0, this.graphManager.updateBounds(), this.calcSpringForces(), this.calcRepulsionForces(i, r), this.calcGravitationalForces(), this.moveNodes(), this.animate(), !1;
				}, A.prototype.getPositionsData = function() {
					for (var t = this.graphManager.getAllNodes(), e = {}, i = 0; i < t.length; i++) {
						var r = t[i].rect, n = t[i].id;
						e[n] = {
							id: n,
							x: r.getCenterX(),
							y: r.getCenterY(),
							w: r.width,
							h: r.height
						};
					}
					return e;
				}, A.prototype.runSpringEmbedder = function() {
					this.initialAnimationPeriod = 25, this.animationPeriod = this.initialAnimationPeriod;
					var t = !1;
					if ("during" === d.ANIMATE) this.emit("layoutstarted");
					else {
						for (; !t;) t = this.tick();
						this.graphManager.updateBounds();
					}
				}, A.prototype.moveNodes = function() {
					for (var e = this.getAllNodes(), i = 0; i < e.length; i++) e[i].calculateDisplacement();
					Object.keys(this.constraints).length > 0 && this.updateDisplacements();
					for (var i = 0; i < e.length; i++) e[i].move();
				}, A.prototype.initConstraintVariables = function() {
					var t = this;
					this.idToNodeMap = /* @__PURE__ */ new Map(), this.fixedNodeSet = /* @__PURE__ */ new Set();
					for (var e = this.graphManager.getAllNodes(), i = 0; i < e.length; i++) {
						var r = e[i];
						this.idToNodeMap.set(r.id, r);
					}
					var n = f(function e(i) {
						for (var r, n = i.getChild().getNodes(), o = 0, a = 0; a < n.length; a++) null == (r = n[a]).getChild() ? t.fixedNodeSet.has(r.id) && (o += 100) : o += e(r);
						return o;
					}, "calculateCompoundWeight");
					if (this.constraints.fixedNodeConstraint) {
						this.constraints.fixedNodeConstraint.forEach(function(e) {
							t.fixedNodeSet.add(e.nodeId);
						});
						for (var r, e = this.graphManager.getAllNodes(), i = 0; i < e.length; i++) if (null != (r = e[i]).getChild()) {
							var o = n(r);
							o > 0 && (r.fixedNodeWeight = o);
						}
					}
					if (this.constraints.relativePlacementConstraint) {
						var a = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
						if (this.dummyToNodeForVerticalAlignment = /* @__PURE__ */ new Map(), this.dummyToNodeForHorizontalAlignment = /* @__PURE__ */ new Map(), this.fixedNodesOnHorizontal = /* @__PURE__ */ new Set(), this.fixedNodesOnVertical = /* @__PURE__ */ new Set(), this.fixedNodeSet.forEach(function(e) {
							t.fixedNodesOnHorizontal.add(e), t.fixedNodesOnVertical.add(e);
						}), this.constraints.alignmentConstraint) {
							if (this.constraints.alignmentConstraint.vertical) for (var l = this.constraints.alignmentConstraint.vertical, i = 0; i < l.length; i++) this.dummyToNodeForVerticalAlignment.set("dummy" + i, []), l[i].forEach(function(e) {
								a.set(e, "dummy" + i), t.dummyToNodeForVerticalAlignment.get("dummy" + i).push(e), t.fixedNodeSet.has(e) && t.fixedNodesOnHorizontal.add("dummy" + i);
							});
							if (this.constraints.alignmentConstraint.horizontal) for (var d = this.constraints.alignmentConstraint.horizontal, i = 0; i < d.length; i++) this.dummyToNodeForHorizontalAlignment.set("dummy" + i, []), d[i].forEach(function(e) {
								s.set(e, "dummy" + i), t.dummyToNodeForHorizontalAlignment.get("dummy" + i).push(e), t.fixedNodeSet.has(e) && t.fixedNodesOnVertical.add("dummy" + i);
							});
						}
						if (h.RELAX_MOVEMENT_ON_CONSTRAINTS) this.shuffle = function(t) {
							var e, i, r;
							for (r = t.length - 1; r >= 2 * t.length / 3; r--) e = Math.floor(Math.random() * (r + 1)), i = t[r], t[r] = t[e], t[e] = i;
							return t;
						}, this.nodesInRelativeHorizontal = [], this.nodesInRelativeVertical = [], this.nodeToRelativeConstraintMapHorizontal = /* @__PURE__ */ new Map(), this.nodeToRelativeConstraintMapVertical = /* @__PURE__ */ new Map(), this.nodeToTempPositionMapHorizontal = /* @__PURE__ */ new Map(), this.nodeToTempPositionMapVertical = /* @__PURE__ */ new Map(), this.constraints.relativePlacementConstraint.forEach(function(e) {
							if (e.left) {
								var i = a.has(e.left) ? a.get(e.left) : e.left, r = a.has(e.right) ? a.get(e.right) : e.right;
								t.nodesInRelativeHorizontal.includes(i) || (t.nodesInRelativeHorizontal.push(i), t.nodeToRelativeConstraintMapHorizontal.set(i, []), t.dummyToNodeForVerticalAlignment.has(i) ? t.nodeToTempPositionMapHorizontal.set(i, t.idToNodeMap.get(t.dummyToNodeForVerticalAlignment.get(i)[0]).getCenterX()) : t.nodeToTempPositionMapHorizontal.set(i, t.idToNodeMap.get(i).getCenterX())), t.nodesInRelativeHorizontal.includes(r) || (t.nodesInRelativeHorizontal.push(r), t.nodeToRelativeConstraintMapHorizontal.set(r, []), t.dummyToNodeForVerticalAlignment.has(r) ? t.nodeToTempPositionMapHorizontal.set(r, t.idToNodeMap.get(t.dummyToNodeForVerticalAlignment.get(r)[0]).getCenterX()) : t.nodeToTempPositionMapHorizontal.set(r, t.idToNodeMap.get(r).getCenterX())), t.nodeToRelativeConstraintMapHorizontal.get(i).push({
									right: r,
									gap: e.gap
								}), t.nodeToRelativeConstraintMapHorizontal.get(r).push({
									left: i,
									gap: e.gap
								});
							} else {
								var n = s.has(e.top) ? s.get(e.top) : e.top, o = s.has(e.bottom) ? s.get(e.bottom) : e.bottom;
								t.nodesInRelativeVertical.includes(n) || (t.nodesInRelativeVertical.push(n), t.nodeToRelativeConstraintMapVertical.set(n, []), t.dummyToNodeForHorizontalAlignment.has(n) ? t.nodeToTempPositionMapVertical.set(n, t.idToNodeMap.get(t.dummyToNodeForHorizontalAlignment.get(n)[0]).getCenterY()) : t.nodeToTempPositionMapVertical.set(n, t.idToNodeMap.get(n).getCenterY())), t.nodesInRelativeVertical.includes(o) || (t.nodesInRelativeVertical.push(o), t.nodeToRelativeConstraintMapVertical.set(o, []), t.dummyToNodeForHorizontalAlignment.has(o) ? t.nodeToTempPositionMapVertical.set(o, t.idToNodeMap.get(t.dummyToNodeForHorizontalAlignment.get(o)[0]).getCenterY()) : t.nodeToTempPositionMapVertical.set(o, t.idToNodeMap.get(o).getCenterY())), t.nodeToRelativeConstraintMapVertical.get(n).push({
									bottom: o,
									gap: e.gap
								}), t.nodeToRelativeConstraintMapVertical.get(o).push({
									top: n,
									gap: e.gap
								});
							}
						});
						else {
							var c = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map();
							this.constraints.relativePlacementConstraint.forEach(function(t) {
								if (t.left) {
									var e = a.has(t.left) ? a.get(t.left) : t.left, i = a.has(t.right) ? a.get(t.right) : t.right;
									c.has(e) ? c.get(e).push(i) : c.set(e, [i]), c.has(i) ? c.get(i).push(e) : c.set(i, [e]);
								} else {
									var r = s.has(t.top) ? s.get(t.top) : t.top, n = s.has(t.bottom) ? s.get(t.bottom) : t.bottom;
									g.has(r) ? g.get(r).push(n) : g.set(r, [n]), g.has(n) ? g.get(n).push(r) : g.set(n, [r]);
								}
							});
							var u = f(function(t, e) {
								var i = [], r = [], n = new T(), o = /* @__PURE__ */ new Set(), a = 0;
								return t.forEach(function(s, h) {
									if (!o.has(h)) {
										i[a] = [], r[a] = !1;
										var l = h;
										for (n.push(l), o.add(l), i[a].push(l); 0 != n.length;) l = n.shift(), e.has(l) && (r[a] = !0), t.get(l).forEach(function(t) {
											o.has(t) || (n.push(t), o.add(t), i[a].push(t));
										});
										a++;
									}
								}), {
									components: i,
									isFixed: r
								};
							}, "constructComponents"), p = u(c, t.fixedNodesOnHorizontal);
							this.componentsOnHorizontal = p.components, this.fixedComponentsOnHorizontal = p.isFixed;
							var m = u(g, t.fixedNodesOnVertical);
							this.componentsOnVertical = m.components, this.fixedComponentsOnVertical = m.isFixed;
						}
					}
				}, A.prototype.updateDisplacements = function() {
					var t = this;
					if (this.constraints.fixedNodeConstraint && this.constraints.fixedNodeConstraint.forEach(function(e) {
						var i = t.idToNodeMap.get(e.nodeId);
						i.displacementX = 0, i.displacementY = 0;
					}), this.constraints.alignmentConstraint) {
						if (this.constraints.alignmentConstraint.vertical) for (var e = this.constraints.alignmentConstraint.vertical, i = 0; i < e.length; i++) {
							for (var r = 0, n = 0; n < e[i].length; n++) {
								if (this.fixedNodeSet.has(e[i][n])) {
									r = 0;
									break;
								}
								r += this.idToNodeMap.get(e[i][n]).displacementX;
							}
							for (var o = r / e[i].length, n = 0; n < e[i].length; n++) this.idToNodeMap.get(e[i][n]).displacementX = o;
						}
						if (this.constraints.alignmentConstraint.horizontal) for (var a = this.constraints.alignmentConstraint.horizontal, i = 0; i < a.length; i++) {
							for (var s = 0, n = 0; n < a[i].length; n++) {
								if (this.fixedNodeSet.has(a[i][n])) {
									s = 0;
									break;
								}
								s += this.idToNodeMap.get(a[i][n]).displacementY;
							}
							for (var l = s / a[i].length, n = 0; n < a[i].length; n++) this.idToNodeMap.get(a[i][n]).displacementY = l;
						}
					}
					if (this.constraints.relativePlacementConstraint) if (h.RELAX_MOVEMENT_ON_CONSTRAINTS) this.totalIterations % 10 == 0 && (this.shuffle(this.nodesInRelativeHorizontal), this.shuffle(this.nodesInRelativeVertical)), this.nodesInRelativeHorizontal.forEach(function(e) {
						if (!t.fixedNodesOnHorizontal.has(e)) {
							var i = 0;
							i = t.dummyToNodeForVerticalAlignment.has(e) ? t.idToNodeMap.get(t.dummyToNodeForVerticalAlignment.get(e)[0]).displacementX : t.idToNodeMap.get(e).displacementX, t.nodeToRelativeConstraintMapHorizontal.get(e).forEach(function(r) {
								if (r.right) {
									var n = t.nodeToTempPositionMapHorizontal.get(r.right) - t.nodeToTempPositionMapHorizontal.get(e) - i;
									n < r.gap && (i -= r.gap - n);
								} else {
									var n = t.nodeToTempPositionMapHorizontal.get(e) - t.nodeToTempPositionMapHorizontal.get(r.left) + i;
									n < r.gap && (i += r.gap - n);
								}
							}), t.nodeToTempPositionMapHorizontal.set(e, t.nodeToTempPositionMapHorizontal.get(e) + i), t.dummyToNodeForVerticalAlignment.has(e) ? t.dummyToNodeForVerticalAlignment.get(e).forEach(function(e) {
								t.idToNodeMap.get(e).displacementX = i;
							}) : t.idToNodeMap.get(e).displacementX = i;
						}
					}), this.nodesInRelativeVertical.forEach(function(e) {
						if (!t.fixedNodesOnHorizontal.has(e)) {
							var i = 0;
							i = t.dummyToNodeForHorizontalAlignment.has(e) ? t.idToNodeMap.get(t.dummyToNodeForHorizontalAlignment.get(e)[0]).displacementY : t.idToNodeMap.get(e).displacementY, t.nodeToRelativeConstraintMapVertical.get(e).forEach(function(r) {
								if (r.bottom) {
									var n = t.nodeToTempPositionMapVertical.get(r.bottom) - t.nodeToTempPositionMapVertical.get(e) - i;
									n < r.gap && (i -= r.gap - n);
								} else {
									var n = t.nodeToTempPositionMapVertical.get(e) - t.nodeToTempPositionMapVertical.get(r.top) + i;
									n < r.gap && (i += r.gap - n);
								}
							}), t.nodeToTempPositionMapVertical.set(e, t.nodeToTempPositionMapVertical.get(e) + i), t.dummyToNodeForHorizontalAlignment.has(e) ? t.dummyToNodeForHorizontalAlignment.get(e).forEach(function(e) {
								t.idToNodeMap.get(e).displacementY = i;
							}) : t.idToNodeMap.get(e).displacementY = i;
						}
					});
					else {
						for (var i = 0; i < this.componentsOnHorizontal.length; i++) {
							var d = this.componentsOnHorizontal[i];
							if (this.fixedComponentsOnHorizontal[i]) for (var n = 0; n < d.length; n++) this.dummyToNodeForVerticalAlignment.has(d[n]) ? this.dummyToNodeForVerticalAlignment.get(d[n]).forEach(function(e) {
								t.idToNodeMap.get(e).displacementX = 0;
							}) : this.idToNodeMap.get(d[n]).displacementX = 0;
							else {
								for (var c = 0, g = 0, n = 0; n < d.length; n++) if (this.dummyToNodeForVerticalAlignment.has(d[n])) {
									var u = this.dummyToNodeForVerticalAlignment.get(d[n]);
									c += u.length * this.idToNodeMap.get(u[0]).displacementX, g += u.length;
								} else c += this.idToNodeMap.get(d[n]).displacementX, g++;
								for (var p = c / g, n = 0; n < d.length; n++) this.dummyToNodeForVerticalAlignment.has(d[n]) ? this.dummyToNodeForVerticalAlignment.get(d[n]).forEach(function(e) {
									t.idToNodeMap.get(e).displacementX = p;
								}) : this.idToNodeMap.get(d[n]).displacementX = p;
							}
						}
						for (var i = 0; i < this.componentsOnVertical.length; i++) {
							var d = this.componentsOnVertical[i];
							if (this.fixedComponentsOnVertical[i]) for (var n = 0; n < d.length; n++) this.dummyToNodeForHorizontalAlignment.has(d[n]) ? this.dummyToNodeForHorizontalAlignment.get(d[n]).forEach(function(e) {
								t.idToNodeMap.get(e).displacementY = 0;
							}) : this.idToNodeMap.get(d[n]).displacementY = 0;
							else {
								for (var c = 0, g = 0, n = 0; n < d.length; n++) if (this.dummyToNodeForHorizontalAlignment.has(d[n])) {
									var u = this.dummyToNodeForHorizontalAlignment.get(d[n]);
									c += u.length * this.idToNodeMap.get(u[0]).displacementY, g += u.length;
								} else c += this.idToNodeMap.get(d[n]).displacementY, g++;
								for (var p = c / g, n = 0; n < d.length; n++) this.dummyToNodeForHorizontalAlignment.has(d[n]) ? this.dummyToNodeForHorizontalAlignment.get(d[n]).forEach(function(e) {
									t.idToNodeMap.get(e).displacementY = p;
								}) : this.idToNodeMap.get(d[n]).displacementY = p;
							}
						}
					}
				}, A.prototype.calculateNodesToApplyGravitationTo = function() {
					var t, e, i = [], r = this.graphManager.getGraphs(), n = r.length;
					for (e = 0; e < n; e++) (t = r[e]).updateConnected(), t.isConnected || (i = i.concat(t.getNodes()));
					return i;
				}, A.prototype.createBendpoints = function() {
					var t = [];
					t = t.concat(this.graphManager.getAllEdges());
					var e, i = /* @__PURE__ */ new Set();
					for (e = 0; e < t.length; e++) {
						var r = t[e];
						if (!i.has(r)) {
							var n = r.getSource(), o = r.getTarget();
							if (n == o) r.getBendpoints().push(new u()), r.getBendpoints().push(new u()), this.createDummyNodesForBendpoints(r), i.add(r);
							else {
								var a, s = [];
								if (s = (s = s.concat(n.getEdgeListToNode(o))).concat(o.getEdgeListToNode(n)), !i.has(s[0])) {
									if (s.length > 1) for (a = 0; a < s.length; a++) {
										var h = s[a];
										h.getBendpoints().push(new u()), this.createDummyNodesForBendpoints(h);
									}
									s.forEach(function(t) {
										i.add(t);
									});
								}
							}
						}
						if (i.size == t.length) break;
					}
				}, A.prototype.positionNodesRadially = function(t) {
					for (var e = new g(0, 0), i = Math.ceil(Math.sqrt(t.length)), r = 0, n = 0, o = 0, a = new u(0, 0), s = 0; s < t.length; s++) {
						s % i == 0 && (o = 0, n = r, 0 != s && (n += h.DEFAULT_COMPONENT_SEPERATION), r = 0);
						var l = t[s], d = m.findCenterOfTree(l);
						e.x = o, e.y = n, (a = A.radialLayout(l, d, e)).y > r && (r = Math.floor(a.y)), o = Math.floor(a.x + h.DEFAULT_COMPONENT_SEPERATION);
					}
					this.transform(new u(c.WORLD_CENTER_X - a.x / 2, c.WORLD_CENTER_Y - a.y / 2));
				}, A.radialLayout = function(t, e, i) {
					var r = Math.max(this.maxDiagonalInTree(t), h.DEFAULT_RADIAL_SEPARATION);
					A.branchRadialLayout(e, null, 0, 359, 0, r);
					var n = E.calculateBounds(t), o = new N();
					o.setDeviceOrgX(n.getMinX()), o.setDeviceOrgY(n.getMinY()), o.setWorldOrgX(i.x), o.setWorldOrgY(i.y);
					for (var a = 0; a < t.length; a++) t[a].transform(o);
					var s = new u(n.getMaxX(), n.getMaxY());
					return o.inverseTransformPoint(s);
				}, A.branchRadialLayout = function(t, e, i, r, n, o) {
					var a = (r - i + 1) / 2;
					a < 0 && (a += 180);
					var s = (a + i) % 360 * y.TWO_PI / 360, h = n * Math.cos(s), l = n * Math.sin(s);
					t.setCenter(h, l);
					var d = [], c = (d = d.concat(t.getEdges())).length;
					null != e && c--;
					for (var g, u = 0, p = d.length, f = t.getEdgesBetween(e); f.length > 1;) {
						var m = f[0];
						f.splice(0, 1);
						var v = d.indexOf(m);
						v >= 0 && d.splice(v, 1), p--, c--;
					}
					g = null != e ? (d.indexOf(f[0]) + 1) % p : 0;
					for (var E = Math.abs(r - i) / c, N = g; u != c; N = ++N % p) {
						var T = d[N].getOtherEnd(t);
						if (T != e) {
							var C = (i + u * E) % 360, L = (C + E) % 360;
							A.branchRadialLayout(T, t, C, L, n + o, o), u++;
						}
					}
				}, A.maxDiagonalInTree = function(t) {
					for (var e = v.MIN_VALUE, i = 0; i < t.length; i++) {
						var r = t[i].getDiagonal();
						r > e && (e = r);
					}
					return e;
				}, A.prototype.calcRepulsionRange = function() {
					return 2 * (this.level + 1) * this.idealEdgeLength;
				}, A.prototype.groupZeroDegreeMembers = function() {
					var t = this, e = {};
					this.memberGroups = {}, this.idToDummyNode = {};
					for (var i = [], r = this.graphManager.getAllNodes(), n = 0; n < r.length; n++) {
						var o = r[n], s = o.getParent();
						0 !== this.getNodeDegreeWithChildren(o) || null != s.id && this.getToBeTiled(s) || i.push(o);
					}
					for (var n = 0; n < i.length; n++) {
						var o = i[n], h = o.getParent().id;
						typeof e[h] > "u" && (e[h] = []), e[h] = e[h].concat(o);
					}
					Object.keys(e).forEach(function(i) {
						if (e[i].length > 1) {
							var r = "DummyCompound_" + i;
							t.memberGroups[r] = e[i];
							var n = e[i][0].getParent(), o = new a(t.graphManager);
							o.id = r, o.paddingLeft = n.paddingLeft || 0, o.paddingRight = n.paddingRight || 0, o.paddingBottom = n.paddingBottom || 0, o.paddingTop = n.paddingTop || 0, t.idToDummyNode[r] = o;
							var s = t.getGraphManager().add(t.newGraph(), o), h = n.getChild();
							h.add(o);
							for (var l = 0; l < e[i].length; l++) {
								var d = e[i][l];
								h.remove(d), s.add(d);
							}
						}
					});
				}, A.prototype.clearCompounds = function() {
					var t = {}, e = {};
					this.performDFSOnCompounds();
					for (var i = 0; i < this.compoundOrder.length; i++) e[this.compoundOrder[i].id] = this.compoundOrder[i], t[this.compoundOrder[i].id] = [].concat(this.compoundOrder[i].getChild().getNodes()), this.graphManager.remove(this.compoundOrder[i].getChild()), this.compoundOrder[i].child = null;
					this.graphManager.resetAllNodes(), this.tileCompoundMembers(t, e);
				}, A.prototype.clearZeroDegreeMembers = function() {
					var t = this, e = this.tiledZeroDegreePack = [];
					Object.keys(this.memberGroups).forEach(function(i) {
						var r = t.idToDummyNode[i];
						if (e[i] = t.tileNodes(t.memberGroups[i], r.paddingLeft + r.paddingRight), r.rect.width = e[i].width, r.rect.height = e[i].height, r.setCenter(e[i].centerX, e[i].centerY), r.labelMarginLeft = 0, r.labelMarginTop = 0, h.NODE_DIMENSIONS_INCLUDE_LABELS) {
							var n = r.rect.width, o = r.rect.height;
							r.labelWidth && ("left" == r.labelPosHorizontal ? (r.rect.x -= r.labelWidth, r.setWidth(n + r.labelWidth), r.labelMarginLeft = r.labelWidth) : "center" == r.labelPosHorizontal && r.labelWidth > n ? (r.rect.x -= (r.labelWidth - n) / 2, r.setWidth(r.labelWidth), r.labelMarginLeft = (r.labelWidth - n) / 2) : "right" == r.labelPosHorizontal && r.setWidth(n + r.labelWidth)), r.labelHeight && ("top" == r.labelPosVertical ? (r.rect.y -= r.labelHeight, r.setHeight(o + r.labelHeight), r.labelMarginTop = r.labelHeight) : "center" == r.labelPosVertical && r.labelHeight > o ? (r.rect.y -= (r.labelHeight - o) / 2, r.setHeight(r.labelHeight), r.labelMarginTop = (r.labelHeight - o) / 2) : "bottom" == r.labelPosVertical && r.setHeight(o + r.labelHeight));
						}
					});
				}, A.prototype.repopulateCompounds = function() {
					for (var t = this.compoundOrder.length - 1; t >= 0; t--) {
						var e = this.compoundOrder[t], i = e.id, r = e.paddingLeft, n = e.paddingTop, o = e.labelMarginLeft, a = e.labelMarginTop;
						this.adjustLocations(this.tiledMemberPack[i], e.rect.x, e.rect.y, r, n, o, a);
					}
				}, A.prototype.repopulateZeroDegreeMembers = function() {
					var t = this, e = this.tiledZeroDegreePack;
					Object.keys(e).forEach(function(i) {
						var r = t.idToDummyNode[i], n = r.paddingLeft, o = r.paddingTop, a = r.labelMarginLeft, s = r.labelMarginTop;
						t.adjustLocations(e[i], r.rect.x, r.rect.y, n, o, a, s);
					});
				}, A.prototype.getToBeTiled = function(t) {
					var e = t.id;
					if (null != this.toBeTiled[e]) return this.toBeTiled[e];
					var i = t.getChild();
					if (null == i) return this.toBeTiled[e] = !1, !1;
					for (var r = i.getNodes(), n = 0; n < r.length; n++) {
						var o = r[n];
						if (this.getNodeDegree(o) > 0) return this.toBeTiled[e] = !1, !1;
						if (null == o.getChild()) {
							this.toBeTiled[o.id] = !1;
							continue;
						}
						if (!this.getToBeTiled(o)) return this.toBeTiled[e] = !1, !1;
					}
					return this.toBeTiled[e] = !0, !0;
				}, A.prototype.getNodeDegree = function(t) {
					t.id;
					for (var e = t.getEdges(), i = 0, r = 0; r < e.length; r++) {
						var n = e[r];
						n.getSource().id !== n.getTarget().id && (i += 1);
					}
					return i;
				}, A.prototype.getNodeDegreeWithChildren = function(t) {
					var e = this.getNodeDegree(t);
					if (null == t.getChild()) return e;
					for (var i = t.getChild().getNodes(), r = 0; r < i.length; r++) {
						var n = i[r];
						e += this.getNodeDegreeWithChildren(n);
					}
					return e;
				}, A.prototype.performDFSOnCompounds = function() {
					this.compoundOrder = [], this.fillCompexOrderByDFS(this.graphManager.getRoot().getNodes());
				}, A.prototype.fillCompexOrderByDFS = function(t) {
					for (var e = 0; e < t.length; e++) {
						var i = t[e];
						null != i.getChild() && this.fillCompexOrderByDFS(i.getChild().getNodes()), this.getToBeTiled(i) && this.compoundOrder.push(i);
					}
				}, A.prototype.adjustLocations = function(t, e, i, r, n, o, a) {
					e += r + o, i += n + a;
					for (var s = e, h = 0; h < t.rows.length; h++) {
						var l = t.rows[h];
						e = s;
						for (var d = 0, c = 0; c < l.length; c++) {
							var g = l[c];
							g.rect.x = e, g.rect.y = i, e += g.rect.width + t.horizontalPadding, g.rect.height > d && (d = g.rect.height);
						}
						i += d + t.verticalPadding;
					}
				}, A.prototype.tileCompoundMembers = function(t, e) {
					var i = this;
					this.tiledMemberPack = [], Object.keys(t).forEach(function(r) {
						var n = e[r];
						if (i.tiledMemberPack[r] = i.tileNodes(t[r], n.paddingLeft + n.paddingRight), n.rect.width = i.tiledMemberPack[r].width, n.rect.height = i.tiledMemberPack[r].height, n.setCenter(i.tiledMemberPack[r].centerX, i.tiledMemberPack[r].centerY), n.labelMarginLeft = 0, n.labelMarginTop = 0, h.NODE_DIMENSIONS_INCLUDE_LABELS) {
							var o = n.rect.width, a = n.rect.height;
							n.labelWidth && ("left" == n.labelPosHorizontal ? (n.rect.x -= n.labelWidth, n.setWidth(o + n.labelWidth), n.labelMarginLeft = n.labelWidth) : "center" == n.labelPosHorizontal && n.labelWidth > o ? (n.rect.x -= (n.labelWidth - o) / 2, n.setWidth(n.labelWidth), n.labelMarginLeft = (n.labelWidth - o) / 2) : "right" == n.labelPosHorizontal && n.setWidth(o + n.labelWidth)), n.labelHeight && ("top" == n.labelPosVertical ? (n.rect.y -= n.labelHeight, n.setHeight(a + n.labelHeight), n.labelMarginTop = n.labelHeight) : "center" == n.labelPosVertical && n.labelHeight > a ? (n.rect.y -= (n.labelHeight - a) / 2, n.setHeight(n.labelHeight), n.labelMarginTop = (n.labelHeight - a) / 2) : "bottom" == n.labelPosVertical && n.setHeight(a + n.labelHeight));
						}
					});
				}, A.prototype.tileNodes = function(t, e) {
					var i = this.tileNodesByFavoringDim(t, e, !0), r = this.tileNodesByFavoringDim(t, e, !1), n = this.getOrgRatio(i);
					return this.getOrgRatio(r) < n ? r : i;
				}, A.prototype.getOrgRatio = function(t) {
					var e = t.width / t.height;
					return e < 1 && (e = 1 / e), e;
				}, A.prototype.calcIdealRowWidth = function(t, e) {
					var i = h.TILING_PADDING_VERTICAL, r = h.TILING_PADDING_HORIZONTAL, n = t.length, o = 0, a = 0, s = 0;
					t.forEach(function(t) {
						o += t.getWidth(), a += t.getHeight(), t.getWidth() > s && (s = t.getWidth());
					});
					var l, d = o / n, c = Math.pow(i - r, 2) + 4 * (d + r) * (a / n + i) * n, g = (r - i + Math.sqrt(c)) / (2 * (d + r));
					e ? (l = Math.ceil(g)) == g && l++ : l = Math.floor(g);
					var u = l * (d + r) - r;
					return s > u && (u = s), u += 2 * r;
				}, A.prototype.tileNodesByFavoringDim = function(t, e, i) {
					var r = h.TILING_PADDING_VERTICAL, n = h.TILING_PADDING_HORIZONTAL, o = h.TILING_COMPARE_BY, a = {
						rows: [],
						rowWidth: [],
						rowHeight: [],
						width: 0,
						height: e,
						verticalPadding: r,
						horizontalPadding: n,
						centerX: 0,
						centerY: 0
					};
					o && (a.idealRowWidth = this.calcIdealRowWidth(t, i));
					var s = f(function(t) {
						return t.rect.width * t.rect.height;
					}, "getNodeArea"), l = f(function(t, e) {
						return s(e) - s(t);
					}, "areaCompareFcn");
					t.sort(function(t, e) {
						var i = l;
						return a.idealRowWidth ? (i = o)(t.id, e.id) : i(t, e);
					});
					for (var d = 0, c = 0, g = 0; g < t.length; g++) {
						var u = t[g];
						d += u.getCenterX(), c += u.getCenterY();
					}
					a.centerX = d / t.length, a.centerY = c / t.length;
					for (var g = 0; g < t.length; g++) {
						var u = t[g];
						if (0 == a.rows.length) this.insertNodeToRow(a, u, 0, e);
						else if (this.canAddHorizontal(a, u.rect.width, u.rect.height)) {
							var p = a.rows.length - 1;
							a.idealRowWidth || (p = this.getShortestRowIndex(a)), this.insertNodeToRow(a, u, p, e);
						} else this.insertNodeToRow(a, u, a.rows.length, e);
						this.shiftToLastRow(a);
					}
					return a;
				}, A.prototype.insertNodeToRow = function(t, e, i, r) {
					i == t.rows.length && (t.rows.push([]), t.rowWidth.push(r), t.rowHeight.push(0));
					var n = t.rowWidth[i] + e.rect.width;
					t.rows[i].length > 0 && (n += t.horizontalPadding), t.rowWidth[i] = n, t.width < n && (t.width = n);
					var o = e.rect.height;
					i > 0 && (o += t.verticalPadding);
					var a = 0;
					o > t.rowHeight[i] && (a = t.rowHeight[i], t.rowHeight[i] = o, a = t.rowHeight[i] - a), t.height += a, t.rows[i].push(e);
				}, A.prototype.getShortestRowIndex = function(t) {
					for (var e = -1, i = Number.MAX_VALUE, r = 0; r < t.rows.length; r++) t.rowWidth[r] < i && (e = r, i = t.rowWidth[r]);
					return e;
				}, A.prototype.getLongestRowIndex = function(t) {
					for (var e = -1, i = 5e-324, r = 0; r < t.rows.length; r++) t.rowWidth[r] > i && (e = r, i = t.rowWidth[r]);
					return e;
				}, A.prototype.canAddHorizontal = function(t, e, i) {
					if (t.idealRowWidth) {
						var r, n, o = t.rows.length - 1;
						return t.rowWidth[o] + e + t.horizontalPadding <= t.idealRowWidth;
					}
					var a = this.getShortestRowIndex(t);
					if (a < 0) return !0;
					var s = t.rowWidth[a];
					if (s + t.horizontalPadding + e <= t.width) return !0;
					var h = 0;
					return t.rowHeight[a] < i && a > 0 && (h = i + t.verticalPadding - t.rowHeight[a]), r = t.width - s >= e + t.horizontalPadding ? (t.height + h) / (s + e + t.horizontalPadding) : (t.height + h) / t.width, h = i + t.verticalPadding, (n = t.width < e ? (t.height + h) / e : (t.height + h) / t.width) < 1 && (n = 1 / n), r < 1 && (r = 1 / r), r < n;
				}, A.prototype.shiftToLastRow = function(t) {
					var e = this.getLongestRowIndex(t), i = t.rowWidth.length - 1, r = t.rows[e], n = r[r.length - 1], o = n.width + t.horizontalPadding;
					if (t.width - t.rowWidth[i] > o && e != i) {
						r.splice(-1, 1), t.rows[i].push(n), t.rowWidth[e] = t.rowWidth[e] - o, t.rowWidth[i] = t.rowWidth[i] + o, t.width = t.rowWidth[instance.getLongestRowIndex(t)];
						for (var a = 5e-324, s = 0; s < r.length; s++) r[s].height > a && (a = r[s].height);
						e > 0 && (a += t.verticalPadding);
						var h = t.rowHeight[e] + t.rowHeight[i];
						t.rowHeight[e] = a, t.rowHeight[i] < n.height + t.verticalPadding && (t.rowHeight[i] = n.height + t.verticalPadding);
						var l = t.rowHeight[e] + t.rowHeight[i];
						t.height += l - h, this.shiftToLastRow(t);
					}
				}, A.prototype.tilingPreLayout = function() {
					h.TILE && (this.groupZeroDegreeMembers(), this.clearCompounds(), this.clearZeroDegreeMembers());
				}, A.prototype.tilingPostLayout = function() {
					h.TILE && (this.repopulateZeroDegreeMembers(), this.repopulateCompounds());
				}, A.prototype.reduceTrees = function() {
					for (var t, e = [], i = !0; i;) {
						var r = this.graphManager.getAllNodes(), n = [];
						i = !1;
						for (var o = 0; o < r.length; o++) if (1 == (t = r[o]).getEdges().length && !t.getEdges()[0].isInterGraph && null == t.getChild()) {
							if (h.PURE_INCREMENTAL) {
								var a = t.getEdges()[0].getOtherEnd(t), s = new p(t.getCenterX() - a.getCenterX(), t.getCenterY() - a.getCenterY());
								n.push([
									t,
									t.getEdges()[0],
									t.getOwner(),
									s
								]);
							} else n.push([
								t,
								t.getEdges()[0],
								t.getOwner()
							]);
							i = !0;
						}
						if (!0 == i) {
							for (var l = [], d = 0; d < n.length; d++) 1 == n[d][0].getEdges().length && (l.push(n[d]), n[d][0].getOwner().remove(n[d][0]));
							e.push(l), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
						}
					}
					this.prunedNodesAll = e;
				}, A.prototype.growTree = function(t) {
					for (var e, i = t.length, r = t[i - 1], n = 0; n < r.length; n++) e = r[n], this.findPlaceforPrunedNode(e), e[2].add(e[0]), e[2].add(e[1], e[1].source, e[1].target);
					t.splice(t.length - 1, 1), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
				}, A.prototype.findPlaceforPrunedNode = function(t) {
					var e, i, r = t[0];
					if (i = r == t[1].source ? t[1].target : t[1].source, h.PURE_INCREMENTAL) r.setCenter(i.getCenterX() + t[3].getWidth(), i.getCenterY() + t[3].getHeight());
					else {
						var n = i.startX, o = i.finishX, a = i.startY, s = i.finishY, l = [
							0,
							0,
							0,
							0
						];
						if (a > 0) for (var c = n; c <= o; c++) l[0] += this.grid[c][a - 1].length + this.grid[c][a].length - 1;
						if (o < this.grid.length - 1) for (var c = a; c <= s; c++) l[1] += this.grid[o + 1][c].length + this.grid[o][c].length - 1;
						if (s < this.grid[0].length - 1) for (var c = n; c <= o; c++) l[2] += this.grid[c][s + 1].length + this.grid[c][s].length - 1;
						if (n > 0) for (var c = a; c <= s; c++) l[3] += this.grid[n - 1][c].length + this.grid[n][c].length - 1;
						for (var g, u, p = v.MAX_VALUE, f = 0; f < l.length; f++) l[f] < p ? (p = l[f], g = 1, u = f) : l[f] == p && g++;
						if (3 == g && 0 == p) 0 == l[0] && 0 == l[1] && 0 == l[2] ? e = 1 : 0 == l[0] && 0 == l[1] && 0 == l[3] ? e = 0 : 0 == l[0] && 0 == l[2] && 0 == l[3] ? e = 3 : 0 == l[1] && 0 == l[2] && 0 == l[3] && (e = 2);
						else if (2 == g && 0 == p) {
							var m = Math.floor(2 * Math.random());
							e = 0 == l[0] && 0 == l[1] ? +(0 != m) : 0 == l[0] && 0 == l[2] ? 2 * (0 != m) : 0 == l[0] && 0 == l[3] ? 3 * (0 != m) : 0 == l[1] && 0 == l[2] ? 0 == m ? 1 : 2 : 0 == l[1] && 0 == l[3] ? 0 == m ? 1 : 3 : 0 == m ? 2 : 3;
						} else if (4 == g && 0 == p) {
							var m = Math.floor(4 * Math.random());
							e = m;
						} else e = u;
						0 == e ? r.setCenter(i.getCenterX(), i.getCenterY() - i.getHeight() / 2 - d.DEFAULT_EDGE_LENGTH - r.getHeight() / 2) : 1 == e ? r.setCenter(i.getCenterX() + i.getWidth() / 2 + d.DEFAULT_EDGE_LENGTH + r.getWidth() / 2, i.getCenterY()) : 2 == e ? r.setCenter(i.getCenterX(), i.getCenterY() + i.getHeight() / 2 + d.DEFAULT_EDGE_LENGTH + r.getHeight() / 2) : r.setCenter(i.getCenterX() - i.getWidth() / 2 - d.DEFAULT_EDGE_LENGTH - r.getWidth() / 2, i.getCenterY());
					}
				}, t.exports = A;
			},
			991: (t, e, i) => {
				var r = i(551).FDLayoutNode, n = i(551).IMath;
				function o(t, e, i, n) {
					r.call(this, t, e, i, n);
				}
				for (var a in f(o, "CoSENode"), o.prototype = Object.create(r.prototype), r) o[a] = r[a];
				o.prototype.calculateDisplacement = function() {
					var t = this.graphManager.getLayout();
					null != this.getChild() && this.fixedNodeWeight ? (this.displacementX += t.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.fixedNodeWeight, this.displacementY += t.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.fixedNodeWeight) : (this.displacementX += t.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.noOfChildren, this.displacementY += t.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.noOfChildren), Math.abs(this.displacementX) > t.coolingFactor * t.maxNodeDisplacement && (this.displacementX = t.coolingFactor * t.maxNodeDisplacement * n.sign(this.displacementX)), Math.abs(this.displacementY) > t.coolingFactor * t.maxNodeDisplacement && (this.displacementY = t.coolingFactor * t.maxNodeDisplacement * n.sign(this.displacementY)), this.child && this.child.getNodes().length > 0 && this.propogateDisplacementToChildren(this.displacementX, this.displacementY);
				}, o.prototype.propogateDisplacementToChildren = function(t, e) {
					for (var i, r = this.getChild().getNodes(), n = 0; n < r.length; n++) null == (i = r[n]).getChild() ? (i.displacementX += t, i.displacementY += e) : i.propogateDisplacementToChildren(t, e);
				}, o.prototype.move = function() {
					var t = this.graphManager.getLayout();
					(null == this.child || 0 == this.child.getNodes().length) && (this.moveBy(this.displacementX, this.displacementY), t.totalDisplacement += Math.abs(this.displacementX) + Math.abs(this.displacementY)), this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0;
				}, o.prototype.setPred1 = function(t) {
					this.pred1 = t;
				}, o.prototype.getPred1 = function() {
					return pred1;
				}, o.prototype.getPred2 = function() {
					return pred2;
				}, o.prototype.setNext = function(t) {
					this.next = t;
				}, o.prototype.getNext = function() {
					return next;
				}, o.prototype.setProcessed = function(t) {
					this.processed = t;
				}, o.prototype.isProcessed = function() {
					return processed;
				}, t.exports = o;
			},
			902: (t, e, i) => {
				function r(t) {
					if (!Array.isArray(t)) return Array.from(t);
					for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
					return i;
				}
				f(r, "_toConsumableArray");
				var n = i(806), o = i(551).LinkedList, a = i(551).Matrix, s = i(551).SVD;
				function h() {}
				f(h, "ConstraintHandler"), h.handleConstraints = function(t) {
					var e = {};
					e.fixedNodeConstraint = t.constraints.fixedNodeConstraint, e.alignmentConstraint = t.constraints.alignmentConstraint, e.relativePlacementConstraint = t.constraints.relativePlacementConstraint;
					for (var i = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), l = [], d = [], c = t.getAllNodes(), g = 0, u = 0; u < c.length; u++) {
						var p = c[u];
						p.getChild() ?? (h.set(p.id, g++), l.push(p.getCenterX()), d.push(p.getCenterY()), i.set(p.id, p));
					}
					e.relativePlacementConstraint && e.relativePlacementConstraint.forEach(function(t) {
						t.gap || 0 == t.gap || (t.left ? t.gap = n.DEFAULT_EDGE_LENGTH + i.get(t.left).getWidth() / 2 + i.get(t.right).getWidth() / 2 : t.gap = n.DEFAULT_EDGE_LENGTH + i.get(t.top).getHeight() / 2 + i.get(t.bottom).getHeight() / 2);
					});
					var m = f(function(t, e) {
						return {
							x: t.x - e.x,
							y: t.y - e.y
						};
					}, "calculatePositionDiff"), v = f(function(t) {
						var e = 0, i = 0;
						return t.forEach(function(t) {
							e += l[h.get(t)], i += d[h.get(t)];
						}), {
							x: e / t.size,
							y: i / t.size
						};
					}, "calculateAvgPosition"), y = f(function(t, e, i, n, a) {
						function s(t, e) {
							var i = new Set(t), r = !0, n = !1, o = void 0;
							try {
								for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done); r = !0) {
									var h = a.value;
									i.add(h);
								}
							} catch (t) {
								n = !0, o = t;
							} finally {
								try {
									!r && s.return && s.return();
								} finally {
									if (n) throw o;
								}
							}
							return i;
						}
						f(s, "setUnion");
						var c = /* @__PURE__ */ new Map();
						t.forEach(function(t, e) {
							c.set(e, 0);
						}), t.forEach(function(t, e) {
							t.forEach(function(t) {
								c.set(t.id, c.get(t.id) + 1);
							});
						});
						var g = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), p = new o();
						c.forEach(function(t, r) {
							0 == t ? (p.push(r), i || ("horizontal" == e ? g.set(r, h.has(r) ? l[h.get(r)] : n.get(r)) : g.set(r, h.has(r) ? d[h.get(r)] : n.get(r)))) : g.set(r, -Infinity), i && u.set(r, new Set([r]));
						}), i && a.forEach(function(t) {
							var r = [];
							if (t.forEach(function(t) {
								i.has(t) && r.push(t);
							}), r.length > 0) {
								var o = 0;
								r.forEach(function(t) {
									"horizontal" == e ? g.set(t, h.has(t) ? l[h.get(t)] : n.get(t)) : g.set(t, h.has(t) ? d[h.get(t)] : n.get(t)), o += g.get(t);
								}), o /= r.length, t.forEach(function(t) {
									i.has(t) || g.set(t, o);
								});
							} else {
								var a = 0;
								t.forEach(function(t) {
									"horizontal" == e ? a += h.has(t) ? l[h.get(t)] : n.get(t) : a += h.has(t) ? d[h.get(t)] : n.get(t);
								}), a /= t.length, t.forEach(function(t) {
									g.set(t, a);
								});
							}
						});
						for (var m = f(function() {
							var r = p.shift();
							t.get(r).forEach(function(t) {
								if (g.get(t.id) < g.get(r) + t.gap) if (i && i.has(t.id)) {
									var o = void 0;
									if (o = "horizontal" == e ? h.has(t.id) ? l[h.get(t.id)] : n.get(t.id) : h.has(t.id) ? d[h.get(t.id)] : n.get(t.id), g.set(t.id, o), o < g.get(r) + t.gap) {
										var a = g.get(r) + t.gap - o;
										u.get(r).forEach(function(t) {
											g.set(t, g.get(t) - a);
										});
									}
								} else g.set(t.id, g.get(r) + t.gap);
								c.set(t.id, c.get(t.id) - 1), 0 == c.get(t.id) && p.push(t.id), i && u.set(t.id, s(u.get(r), u.get(t.id)));
							});
						}, "_loop"); 0 != p.length;) m();
						if (i) {
							var v = /* @__PURE__ */ new Set();
							t.forEach(function(t, e) {
								0 == t.length && v.add(e);
							});
							var y = [];
							u.forEach(function(t, e) {
								if (v.has(e)) {
									var n = !1, o = !0, a = !1, s = void 0;
									try {
										for (var h, l = t[Symbol.iterator](); !(o = (h = l.next()).done); o = !0) {
											var d = h.value;
											i.has(d) && (n = !0);
										}
									} catch (t) {
										a = !0, s = t;
									} finally {
										try {
											!o && l.return && l.return();
										} finally {
											if (a) throw s;
										}
									}
									if (!n) {
										var c = !1, g = void 0;
										y.forEach(function(e, i) {
											e.has([].concat(r(t))[0]) && (c = !0, g = i);
										}), c ? t.forEach(function(t) {
											y[g].add(t);
										}) : y.push(new Set(t));
									}
								}
							}), y.forEach(function(t, i) {
								var r = Infinity, o = Infinity, a = -Infinity, s = -Infinity, c = !0, u = !1, p = void 0;
								try {
									for (var f, m = t[Symbol.iterator](); !(c = (f = m.next()).done); c = !0) {
										var v = f.value, y = void 0;
										y = "horizontal" == e ? h.has(v) ? l[h.get(v)] : n.get(v) : h.has(v) ? d[h.get(v)] : n.get(v);
										var E = g.get(v);
										y < r && (r = y), y > a && (a = y), E < o && (o = E), E > s && (s = E);
									}
								} catch (t) {
									u = !0, p = t;
								} finally {
									try {
										!c && m.return && m.return();
									} finally {
										if (u) throw p;
									}
								}
								var N = (r + a) / 2 - (o + s) / 2, T = !0, A = !1, C = void 0;
								try {
									for (var L, _ = t[Symbol.iterator](); !(T = (L = _.next()).done); T = !0) {
										var w = L.value;
										g.set(w, g.get(w) + N);
									}
								} catch (t) {
									A = !0, C = t;
								} finally {
									try {
										!T && _.return && _.return();
									} finally {
										if (A) throw C;
									}
								}
							});
						}
						return g;
					}, "findAppropriatePositionForRelativePlacement"), E = f(function(t) {
						var e = 0, i = 0, r = 0, n = 0;
						if (t.forEach(function(t) {
							t.left ? l[h.get(t.left)] - l[h.get(t.right)] >= 0 ? e++ : i++ : d[h.get(t.top)] - d[h.get(t.bottom)] >= 0 ? r++ : n++;
						}), e > i && r > n) for (var o = 0; o < h.size; o++) l[o] = -1 * l[o], d[o] = -1 * d[o];
						else if (e > i) for (var a = 0; a < h.size; a++) l[a] = -1 * l[a];
						else if (r > n) for (var s = 0; s < h.size; s++) d[s] = -1 * d[s];
					}, "applyReflectionForRelativePlacement"), N = f(function(t) {
						var e = [], i = new o(), r = /* @__PURE__ */ new Set(), n = 0;
						return t.forEach(function(o, a) {
							if (!r.has(a)) {
								e[n] = [];
								var s = a;
								for (i.push(s), r.add(s), e[n].push(s); 0 != i.length;) s = i.shift(), t.get(s).forEach(function(t) {
									r.has(t.id) || (i.push(t.id), r.add(t.id), e[n].push(t.id));
								});
								n++;
							}
						}), e;
					}, "findComponents"), T = f(function(t) {
						var e = /* @__PURE__ */ new Map();
						return t.forEach(function(t, i) {
							e.set(i, []);
						}), t.forEach(function(t, i) {
							t.forEach(function(t) {
								e.get(i).push(t), e.get(t.id).push({
									id: i,
									gap: t.gap,
									direction: t.direction
								});
							});
						}), e;
					}, "dagToUndirected"), A = f(function(t) {
						var e = /* @__PURE__ */ new Map();
						return t.forEach(function(t, i) {
							e.set(i, []);
						}), t.forEach(function(t, i) {
							t.forEach(function(t) {
								e.get(t.id).push({
									id: i,
									gap: t.gap,
									direction: t.direction
								});
							});
						}), e;
					}, "dagToReversed"), C = [], L = [], _ = !1, w = !1, M = /* @__PURE__ */ new Set(), I = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), O = [];
					if (e.fixedNodeConstraint && e.fixedNodeConstraint.forEach(function(t) {
						M.add(t.nodeId);
					}), e.relativePlacementConstraint && (e.relativePlacementConstraint.forEach(function(t) {
						t.left ? (I.has(t.left) ? I.get(t.left).push({
							id: t.right,
							gap: t.gap,
							direction: "horizontal"
						}) : I.set(t.left, [{
							id: t.right,
							gap: t.gap,
							direction: "horizontal"
						}]), I.has(t.right) || I.set(t.right, [])) : (I.has(t.top) ? I.get(t.top).push({
							id: t.bottom,
							gap: t.gap,
							direction: "vertical"
						}) : I.set(t.top, [{
							id: t.bottom,
							gap: t.gap,
							direction: "vertical"
						}]), I.has(t.bottom) || I.set(t.bottom, []));
					}), O = N(x = T(I))), n.TRANSFORM_ON_CONSTRAINT_HANDLING) {
						if (e.fixedNodeConstraint && e.fixedNodeConstraint.length > 1) e.fixedNodeConstraint.forEach(function(t, e) {
							C[e] = [t.position.x, t.position.y], L[e] = [l[h.get(t.nodeId)], d[h.get(t.nodeId)]];
						}), _ = !0;
						else if (e.alignmentConstraint) (function() {
							var t = 0;
							if (e.alignmentConstraint.vertical) {
								for (var i = e.alignmentConstraint.vertical, n = f(function(e) {
									var n = /* @__PURE__ */ new Set();
									i[e].forEach(function(t) {
										n.add(t);
									});
									var o = new Set([].concat(r(n)).filter(function(t) {
										return M.has(t);
									})), a = void 0;
									a = o.size > 0 ? l[h.get(o.values().next().value)] : v(n).x, i[e].forEach(function(e) {
										C[t] = [a, d[h.get(e)]], L[t] = [l[h.get(e)], d[h.get(e)]], t++;
									});
								}, "_loop2"), o = 0; o < i.length; o++) n(o);
								_ = !0;
							}
							if (e.alignmentConstraint.horizontal) {
								for (var a = e.alignmentConstraint.horizontal, s = f(function(e) {
									var i = /* @__PURE__ */ new Set();
									a[e].forEach(function(t) {
										i.add(t);
									});
									var n = new Set([].concat(r(i)).filter(function(t) {
										return M.has(t);
									})), o = void 0;
									o = n.size > 0 ? l[h.get(n.values().next().value)] : v(i).y, a[e].forEach(function(e) {
										C[t] = [l[h.get(e)], o], L[t] = [l[h.get(e)], d[h.get(e)]], t++;
									});
								}, "_loop3"), c = 0; c < a.length; c++) s(c);
								_ = !0;
							}
							e.relativePlacementConstraint && (w = !0);
						})();
						else if (e.relativePlacementConstraint) {
							for (var D = 0, R = 0, b = 0; b < O.length; b++) O[b].length > D && (D = O[b].length, R = b);
							if (D < x.size / 2) E(e.relativePlacementConstraint), _ = !1, w = !1;
							else {
								var F = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), S = [];
								O[R].forEach(function(t) {
									I.get(t).forEach(function(e) {
										"horizontal" == e.direction ? (F.has(t) ? F.get(t).push(e) : F.set(t, [e]), F.has(e.id) || F.set(e.id, []), S.push({
											left: t,
											right: e.id
										})) : (G.has(t) ? G.get(t).push(e) : G.set(t, [e]), G.has(e.id) || G.set(e.id, []), S.push({
											top: t,
											bottom: e.id
										}));
									});
								}), E(S), w = !1;
								var P = y(F, "horizontal"), k = y(G, "vertical");
								O[R].forEach(function(t, e) {
									L[e] = [l[h.get(t)], d[h.get(t)]], C[e] = [], P.has(t) ? C[e][0] = P.get(t) : C[e][0] = l[h.get(t)], k.has(t) ? C[e][1] = k.get(t) : C[e][1] = d[h.get(t)];
								}), _ = !0;
							}
						}
						if (_) {
							for (var U = void 0, Y = a.transpose(C), H = a.transpose(L), X = 0; X < Y.length; X++) Y[X] = a.multGamma(Y[X]), H[X] = a.multGamma(H[X]);
							var z = a.multMat(Y, a.transpose(H)), B = s.svd(z);
							U = a.multMat(B.V, a.transpose(B.U));
							for (var V = 0; V < h.size; V++) {
								var W = [l[V], d[V]], j = [U[0][0], U[1][0]], q = [U[0][1], U[1][1]];
								l[V] = a.dotProduct(W, j), d[V] = a.dotProduct(W, q);
							}
							w && E(e.relativePlacementConstraint);
						}
					}
					if (n.ENFORCE_CONSTRAINTS) {
						if (e.fixedNodeConstraint && e.fixedNodeConstraint.length > 0) {
							var $ = {
								x: 0,
								y: 0
							};
							e.fixedNodeConstraint.forEach(function(t, e) {
								var i = {
									x: l[h.get(t.nodeId)],
									y: d[h.get(t.nodeId)]
								}, r = m(t.position, i);
								$.x += r.x, $.y += r.y;
							}), $.x /= e.fixedNodeConstraint.length, $.y /= e.fixedNodeConstraint.length, l.forEach(function(t, e) {
								l[e] += $.x;
							}), d.forEach(function(t, e) {
								d[e] += $.y;
							}), e.fixedNodeConstraint.forEach(function(t) {
								l[h.get(t.nodeId)] = t.position.x, d[h.get(t.nodeId)] = t.position.y;
							});
						}
						if (e.alignmentConstraint) {
							if (e.alignmentConstraint.vertical) for (var Z = e.alignmentConstraint.vertical, Q = f(function(t) {
								var e = /* @__PURE__ */ new Set();
								Z[t].forEach(function(t) {
									e.add(t);
								});
								var i = new Set([].concat(r(e)).filter(function(t) {
									return M.has(t);
								})), n = void 0;
								n = i.size > 0 ? l[h.get(i.values().next().value)] : v(e).x, e.forEach(function(t) {
									M.has(t) || (l[h.get(t)] = n);
								});
							}, "_loop4"), J = 0; J < Z.length; J++) Q(J);
							if (e.alignmentConstraint.horizontal) for (var K = e.alignmentConstraint.horizontal, tt = f(function(t) {
								var e = /* @__PURE__ */ new Set();
								K[t].forEach(function(t) {
									e.add(t);
								});
								var i = new Set([].concat(r(e)).filter(function(t) {
									return M.has(t);
								})), n = void 0;
								n = i.size > 0 ? d[h.get(i.values().next().value)] : v(e).y, e.forEach(function(t) {
									M.has(t) || (d[h.get(t)] = n);
								});
							}, "_loop5"), te = 0; te < K.length; te++) tt(te);
						}
						e.relativePlacementConstraint && function() {
							var t = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
							if (M.forEach(function(t) {
								s.add(t), c.add(t);
							}), e.alignmentConstraint) {
								if (e.alignmentConstraint.vertical) for (var g = e.alignmentConstraint.vertical, u = f(function(e) {
									r.set("dummy" + e, []), g[e].forEach(function(i) {
										t.set(i, "dummy" + e), r.get("dummy" + e).push(i), M.has(i) && s.add("dummy" + e);
									}), o.set("dummy" + e, l[h.get(g[e][0])]);
								}, "_loop6"), p = 0; p < g.length; p++) u(p);
								if (e.alignmentConstraint.horizontal) for (var m = e.alignmentConstraint.horizontal, v = f(function(t) {
									n.set("dummy" + t, []), m[t].forEach(function(e) {
										i.set(e, "dummy" + t), n.get("dummy" + t).push(e), M.has(e) && c.add("dummy" + t);
									}), a.set("dummy" + t, d[h.get(m[t][0])]);
								}, "_loop7"), E = 0; E < m.length; E++) v(E);
							}
							var C = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), _ = f(function(e) {
								I.get(e).forEach(function(r) {
									var n = void 0, o = void 0;
									"horizontal" == r.direction ? (n = t.get(e) ? t.get(e) : e, o = t.get(r.id) ? {
										id: t.get(r.id),
										gap: r.gap,
										direction: r.direction
									} : r, C.has(n) ? C.get(n).push(o) : C.set(n, [o]), C.has(o.id) || C.set(o.id, [])) : (n = i.get(e) ? i.get(e) : e, o = i.get(r.id) ? {
										id: i.get(r.id),
										gap: r.gap,
										direction: r.direction
									} : r, L.has(n) ? L.get(n).push(o) : L.set(n, [o]), L.has(o.id) || L.set(o.id, []));
								});
							}, "_loop8"), w = !0, x = !1, O = void 0;
							try {
								for (var D, R = I.keys()[Symbol.iterator](); !(w = (D = R.next()).done); w = !0) {
									var b = D.value;
									_(b);
								}
							} catch (t) {
								x = !0, O = t;
							} finally {
								try {
									!w && R.return && R.return();
								} finally {
									if (x) throw O;
								}
							}
							var F = T(C), G = T(L), S = N(F), P = N(G), k = A(C), U = A(L), Y = [], H = [];
							S.forEach(function(t, e) {
								Y[e] = [], t.forEach(function(t) {
									0 == k.get(t).length && Y[e].push(t);
								});
							}), P.forEach(function(t, e) {
								H[e] = [], t.forEach(function(t) {
									0 == U.get(t).length && H[e].push(t);
								});
							});
							var X = y(C, "horizontal", s, o, Y), z = y(L, "vertical", c, a, H), B = f(function(t) {
								r.get(t) ? r.get(t).forEach(function(e) {
									l[h.get(e)] = X.get(t);
								}) : l[h.get(t)] = X.get(t);
							}, "_loop9"), V = !0, W = !1, j = void 0;
							try {
								for (var q, $ = X.keys()[Symbol.iterator](); !(V = (q = $.next()).done); V = !0) {
									var Z = q.value;
									B(Z);
								}
							} catch (t) {
								W = !0, j = t;
							} finally {
								try {
									!V && $.return && $.return();
								} finally {
									if (W) throw j;
								}
							}
							var Q = f(function(t) {
								n.get(t) ? n.get(t).forEach(function(e) {
									d[h.get(e)] = z.get(t);
								}) : d[h.get(t)] = z.get(t);
							}, "_loop10"), J = !0, K = !1, tt = void 0;
							try {
								for (var te, ti = z.keys()[Symbol.iterator](); !(J = (te = ti.next()).done); J = !0) {
									var Z = te.value;
									Q(Z);
								}
							} catch (t) {
								K = !0, tt = t;
							} finally {
								try {
									!J && ti.return && ti.return();
								} finally {
									if (K) throw tt;
								}
							}
						}();
					}
					for (var ti = 0; ti < c.length; ti++) {
						var tr = c[ti];
						tr.getChild() ?? tr.setCenter(l[h.get(tr.id)], d[h.get(tr.id)]);
					}
				}, t.exports = h;
			},
			551: (e) => {
				e.exports = t;
			}
		}, i = {};
		function r(t) {
			var n = i[t];
			if (void 0 !== n) return n.exports;
			var o = i[t] = { exports: {} };
			return e[t](o, o.exports, r), o.exports;
		}
		return f(r, "__webpack_require__"), r(45);
	});
}), x = p((t, e) => {
	f(function(i, r) {
		"object" == typeof t && "object" == typeof e ? e.exports = r(I()) : "function" == typeof define && define.amd ? define(["cose-base"], r) : "object" == typeof t ? t.cytoscapeFcose = r(I()) : i.cytoscapeFcose = r(i.coseBase);
	}, "webpackUniversalModuleDefinition")(t, function(t) {
		var e = {
			658: (t) => {
				t.exports = null != Object.assign ? Object.assign.bind(Object) : function(t) {
					for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) i[r - 1] = arguments[r];
					return i.forEach(function(e) {
						Object.keys(e).forEach(function(i) {
							return t[i] = e[i];
						});
					}), t;
				};
			},
			548: (t, e, i) => {
				var r = function() {
					function t(t, e) {
						var i = [], r = !0, n = !1, o = void 0;
						try {
							for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (i.push(a.value), !(e && i.length === e)); r = !0);
						} catch (t) {
							n = !0, o = t;
						} finally {
							try {
								!r && s.return && s.return();
							} finally {
								if (n) throw o;
							}
						}
						return i;
					}
					return f(t, "sliceIterator"), function(e, i) {
						if (Array.isArray(e)) return e;
						if (Symbol.iterator in Object(e)) return t(e, i);
						throw TypeError("Invalid attempt to destructure non-iterable instance");
					};
				}(), n = i(140).layoutBase.LinkedList, o = {};
				o.getTopMostNodes = function(t) {
					for (var e = {}, i = 0; i < t.length; i++) e[t[i].id()] = !0;
					return t.filter(function(t, i) {
						"number" == typeof t && (t = i);
						for (var r = t.parent()[0]; null != r;) {
							if (e[r.id()]) return !1;
							r = r.parent()[0];
						}
						return !0;
					});
				}, o.connectComponents = function(t, e, i, r) {
					var o = new n(), a = /* @__PURE__ */ new Set(), s = [], h = void 0, l = void 0, d = void 0, c = !1, g = 1, u = [], p = [], m = f(function() {
						var r = t.collection();
						p.push(r);
						var n = i[0], m = t.collection();
						m.merge(n).merge(n.descendants().intersection(e)), s.push(n), m.forEach(function(t) {
							o.push(t), a.add(t), r.merge(t);
						});
						for (var v = f(function() {
							n = o.shift();
							var l = t.collection();
							n.neighborhood().nodes().forEach(function(t) {
								e.intersection(n.edgesWith(t)).length > 0 && l.merge(t);
							});
							for (var d = 0; d < l.length; d++) {
								var c = l[d];
								null == (h = i.intersection(c.union(c.ancestors()))) || a.has(h[0]) || h.union(h.descendants()).forEach(function(t) {
									o.push(t), a.add(t), r.merge(t), i.has(t) && s.push(t);
								});
							}
						}, "_loop2"); 0 != o.length;) v();
						if (r.forEach(function(t) {
							e.intersection(t.connectedEdges()).forEach(function(t) {
								r.has(t.source()) && r.has(t.target()) && r.merge(t);
							});
						}), s.length == i.length && (c = !0), !c || c && g > 1) {
							d = (l = s[0]).connectedEdges().length, s.forEach(function(t) {
								t.connectedEdges().length < d && (d = t.connectedEdges().length, l = t);
							}), u.push(l.id());
							var y = t.collection();
							y.merge(s[0]), s.forEach(function(t) {
								y.merge(t);
							}), s = [], i = i.difference(y), g++;
						}
					}, "_loop");
					do
						m();
					while (!c);
					return r && u.length > 0 && r.set("dummy" + (r.size + 1), u), p;
				}, o.relocateComponent = function(t, e, i) {
					if (!i.fixedNodeConstraint) {
						var n = Infinity, o = -Infinity, a = Infinity, s = -Infinity;
						if ("draft" == i.quality) {
							var h = !0, l = !1, d = void 0;
							try {
								for (var c, g = e.nodeIndexes[Symbol.iterator](); !(h = (c = g.next()).done); h = !0) {
									var u = c.value, p = r(u, 2), f = p[0], m = p[1], v = i.cy.getElementById(f);
									if (v) {
										var y = v.boundingBox(), E = e.xCoords[m] - y.w / 2, N = e.xCoords[m] + y.w / 2, T = e.yCoords[m] - y.h / 2, A = e.yCoords[m] + y.h / 2;
										E < n && (n = E), N > o && (o = N), T < a && (a = T), A > s && (s = A);
									}
								}
							} catch (t) {
								l = !0, d = t;
							} finally {
								try {
									!h && g.return && g.return();
								} finally {
									if (l) throw d;
								}
							}
							var C = t.x - (o + n) / 2, L = t.y - (s + a) / 2;
							e.xCoords = e.xCoords.map(function(t) {
								return t + C;
							}), e.yCoords = e.yCoords.map(function(t) {
								return t + L;
							});
						} else {
							Object.keys(e).forEach(function(t) {
								var i = e[t], r = i.getRect().x, h = i.getRect().x + i.getRect().width, l = i.getRect().y, d = i.getRect().y + i.getRect().height;
								r < n && (n = r), h > o && (o = h), l < a && (a = l), d > s && (s = d);
							});
							var _ = t.x - (o + n) / 2, w = t.y - (s + a) / 2;
							Object.keys(e).forEach(function(t) {
								var i = e[t];
								i.setCenter(i.getCenterX() + _, i.getCenterY() + w);
							});
						}
					}
				}, o.calcBoundingBox = function(t, e, i, r) {
					for (var n = Number.MAX_SAFE_INTEGER, o = Number.MIN_SAFE_INTEGER, a = Number.MAX_SAFE_INTEGER, s = Number.MIN_SAFE_INTEGER, h = void 0, l = void 0, d = void 0, c = void 0, g = t.descendants().not(":parent"), u = g.length, p = 0; p < u; p++) {
						var f = g[p];
						h = e[r.get(f.id())] - f.width() / 2, l = e[r.get(f.id())] + f.width() / 2, d = i[r.get(f.id())] - f.height() / 2, c = i[r.get(f.id())] + f.height() / 2, n > h && (n = h), o < l && (o = l), a > d && (a = d), s < c && (s = c);
					}
					var m = {};
					return m.topLeftX = n, m.topLeftY = a, m.width = o - n, m.height = s - a, m;
				}, o.calcParentsWithoutChildren = function(t, e) {
					var i = t.collection();
					return e.nodes(":parent").forEach(function(t) {
						var e = !1;
						t.children().forEach(function(t) {
							"none" != t.css("display") && (e = !0);
						}), e || i.merge(t);
					}), i;
				}, t.exports = o;
			},
			816: (t, e, i) => {
				var r = i(548), n = i(140).CoSELayout, o = i(140).CoSENode, a = i(140).layoutBase.PointD, s = i(140).layoutBase.DimensionD, h = i(140).layoutBase.LayoutConstants, l = i(140).layoutBase.FDLayoutConstants, d = i(140).CoSEConstants;
				t.exports = { coseLayout: f(function(t, e) {
					var i = t.cy, c = t.eles, g = c.nodes(), u = c.edges(), p = void 0, m = void 0, v = void 0, y = {};
					t.randomize && (p = e.nodeIndexes, m = e.xCoords, v = e.yCoords);
					var E = f(function(t) {
						return "function" == typeof t;
					}, "isFn"), N = f(function(t, e) {
						return E(t) ? t(e) : t;
					}, "optFn"), T = r.calcParentsWithoutChildren(i, c), A = f(function t(e, i, n, h) {
						for (var l = i.length, d = 0; d < l; d++) {
							var c = i[d], g = null;
							0 == c.intersection(T).length && (g = c.children());
							var u = void 0, f = c.layoutDimensions({ nodeDimensionsIncludeLabels: h.nodeDimensionsIncludeLabels });
							if (null != c.outerWidth() && null != c.outerHeight()) if (h.randomize) if (c.isParent()) {
								var E = r.calcBoundingBox(c, m, v, p);
								u = 0 == c.intersection(T).length ? e.add(new o(n.graphManager, new a(E.topLeftX, E.topLeftY), new s(E.width, E.height))) : e.add(new o(n.graphManager, new a(E.topLeftX, E.topLeftY), new s(parseFloat(f.w), parseFloat(f.h))));
							} else u = e.add(new o(n.graphManager, new a(m[p.get(c.id())] - f.w / 2, v[p.get(c.id())] - f.h / 2), new s(parseFloat(f.w), parseFloat(f.h))));
							else u = e.add(new o(n.graphManager, new a(c.position("x") - f.w / 2, c.position("y") - f.h / 2), new s(parseFloat(f.w), parseFloat(f.h))));
							else u = e.add(new o(this.graphManager));
							(u.id = c.data("id"), u.nodeRepulsion = N(h.nodeRepulsion, c), u.paddingLeft = parseInt(c.css("padding")), u.paddingTop = parseInt(c.css("padding")), u.paddingRight = parseInt(c.css("padding")), u.paddingBottom = parseInt(c.css("padding")), h.nodeDimensionsIncludeLabels && (u.labelWidth = c.boundingBox({
								includeLabels: !0,
								includeNodes: !1,
								includeOverlays: !1
							}).w, u.labelHeight = c.boundingBox({
								includeLabels: !0,
								includeNodes: !1,
								includeOverlays: !1
							}).h, u.labelPosVertical = c.css("text-valign"), u.labelPosHorizontal = c.css("text-halign")), y[c.data("id")] = u, isNaN(u.rect.x) && (u.rect.x = 0), isNaN(u.rect.y) && (u.rect.y = 0), null != g && g.length > 0) && t(n.getGraphManager().add(n.newGraph(), u), g, n, h);
						}
					}, "processChildrenList"), C = f(function(e, i, r) {
						for (var n = 0, o = 0, a = 0; a < r.length; a++) {
							var s = r[a], h = y[s.data("source")], c = y[s.data("target")];
							if (h && c && h !== c && 0 == h.getEdgesBetween(c).length) {
								var g = i.add(e.newEdge(), h, c);
								g.id = s.id(), g.idealLength = N(t.idealEdgeLength, s), g.edgeElasticity = N(t.edgeElasticity, s), n += g.idealLength, o++;
							}
						}
						null != t.idealEdgeLength && (o > 0 ? d.DEFAULT_EDGE_LENGTH = l.DEFAULT_EDGE_LENGTH = n / o : E(t.idealEdgeLength) ? d.DEFAULT_EDGE_LENGTH = l.DEFAULT_EDGE_LENGTH = 50 : d.DEFAULT_EDGE_LENGTH = l.DEFAULT_EDGE_LENGTH = t.idealEdgeLength, d.MIN_REPULSION_DIST = l.MIN_REPULSION_DIST = l.DEFAULT_EDGE_LENGTH / 10, d.DEFAULT_RADIAL_SEPARATION = l.DEFAULT_EDGE_LENGTH);
					}, "processEdges"), L = f(function(t, e) {
						e.fixedNodeConstraint && (t.constraints.fixedNodeConstraint = e.fixedNodeConstraint), e.alignmentConstraint && (t.constraints.alignmentConstraint = e.alignmentConstraint), e.relativePlacementConstraint && (t.constraints.relativePlacementConstraint = e.relativePlacementConstraint);
					}, "processConstraints");
					null != t.nestingFactor && (d.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = l.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = t.nestingFactor), null != t.gravity && (d.DEFAULT_GRAVITY_STRENGTH = l.DEFAULT_GRAVITY_STRENGTH = t.gravity), null != t.numIter && (d.MAX_ITERATIONS = l.MAX_ITERATIONS = t.numIter), null != t.gravityRange && (d.DEFAULT_GRAVITY_RANGE_FACTOR = l.DEFAULT_GRAVITY_RANGE_FACTOR = t.gravityRange), null != t.gravityCompound && (d.DEFAULT_COMPOUND_GRAVITY_STRENGTH = l.DEFAULT_COMPOUND_GRAVITY_STRENGTH = t.gravityCompound), null != t.gravityRangeCompound && (d.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = l.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = t.gravityRangeCompound), null != t.initialEnergyOnIncremental && (d.DEFAULT_COOLING_FACTOR_INCREMENTAL = l.DEFAULT_COOLING_FACTOR_INCREMENTAL = t.initialEnergyOnIncremental), null != t.tilingCompareBy && (d.TILING_COMPARE_BY = t.tilingCompareBy), "proof" == t.quality ? h.QUALITY = 2 : h.QUALITY = 0, d.NODE_DIMENSIONS_INCLUDE_LABELS = l.NODE_DIMENSIONS_INCLUDE_LABELS = h.NODE_DIMENSIONS_INCLUDE_LABELS = t.nodeDimensionsIncludeLabels, d.DEFAULT_INCREMENTAL = l.DEFAULT_INCREMENTAL = h.DEFAULT_INCREMENTAL = !t.randomize, d.ANIMATE = l.ANIMATE = h.ANIMATE = t.animate, d.TILE = t.tile, d.TILING_PADDING_VERTICAL = "function" == typeof t.tilingPaddingVertical ? t.tilingPaddingVertical.call() : t.tilingPaddingVertical, d.TILING_PADDING_HORIZONTAL = "function" == typeof t.tilingPaddingHorizontal ? t.tilingPaddingHorizontal.call() : t.tilingPaddingHorizontal, d.DEFAULT_INCREMENTAL = l.DEFAULT_INCREMENTAL = h.DEFAULT_INCREMENTAL = !0, d.PURE_INCREMENTAL = !t.randomize, h.DEFAULT_UNIFORM_LEAF_NODE_SIZES = t.uniformNodeDimensions, "transformed" == t.step && (d.TRANSFORM_ON_CONSTRAINT_HANDLING = !0, d.ENFORCE_CONSTRAINTS = !1, d.APPLY_LAYOUT = !1), "enforced" == t.step && (d.TRANSFORM_ON_CONSTRAINT_HANDLING = !1, d.ENFORCE_CONSTRAINTS = !0, d.APPLY_LAYOUT = !1), "cose" == t.step && (d.TRANSFORM_ON_CONSTRAINT_HANDLING = !1, d.ENFORCE_CONSTRAINTS = !1, d.APPLY_LAYOUT = !0), "all" == t.step && (t.randomize ? d.TRANSFORM_ON_CONSTRAINT_HANDLING = !0 : d.TRANSFORM_ON_CONSTRAINT_HANDLING = !1, d.ENFORCE_CONSTRAINTS = !0, d.APPLY_LAYOUT = !0), t.fixedNodeConstraint || t.alignmentConstraint || t.relativePlacementConstraint ? d.TREE_REDUCTION_ON_INCREMENTAL = !1 : d.TREE_REDUCTION_ON_INCREMENTAL = !0;
					var _ = new n(), w = _.newGraphManager();
					return A(w.addRoot(), r.getTopMostNodes(g), _, t), C(_, w, u), L(_, t), _.runLayout(), y;
				}, "coseLayout") };
			},
			212: (t, e, i) => {
				var r = function() {
					function t(t, e) {
						for (var i = 0; i < e.length; i++) {
							var r = e[i];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
						}
					}
					return f(t, "defineProperties"), function(e, i, r) {
						return i && t(e.prototype, i), r && t(e, r), e;
					};
				}();
				function n(t, e) {
					if (!(t instanceof e)) throw TypeError("Cannot call a class as a function");
				}
				f(n, "_classCallCheck");
				var o = i(658), a = i(548), s = i(657).spectralLayout, h = i(816).coseLayout, l = Object.freeze({
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
					nodeRepulsion: f(function(t) {
						return 4500;
					}, "nodeRepulsion"),
					idealEdgeLength: f(function(t) {
						return 50;
					}, "idealEdgeLength"),
					edgeElasticity: f(function(t) {
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
					ready: f(function() {}, "ready"),
					stop: f(function() {}, "stop")
				});
				t.exports = function() {
					function t(e) {
						n(this, t), this.options = o({}, l, e);
					}
					return f(t, "Layout"), r(t, [{
						key: "run",
						value: f(function() {
							var t = this.options, e = t.cy, i = t.eles, r = [], n = [], o = void 0, l = [];
							t.fixedNodeConstraint && (!Array.isArray(t.fixedNodeConstraint) || 0 == t.fixedNodeConstraint.length) && (t.fixedNodeConstraint = void 0), t.alignmentConstraint && (t.alignmentConstraint.vertical && (!Array.isArray(t.alignmentConstraint.vertical) || 0 == t.alignmentConstraint.vertical.length) && (t.alignmentConstraint.vertical = void 0), t.alignmentConstraint.horizontal && (!Array.isArray(t.alignmentConstraint.horizontal) || 0 == t.alignmentConstraint.horizontal.length) && (t.alignmentConstraint.horizontal = void 0)), t.relativePlacementConstraint && (!Array.isArray(t.relativePlacementConstraint) || 0 == t.relativePlacementConstraint.length) && (t.relativePlacementConstraint = void 0), (t.fixedNodeConstraint || t.alignmentConstraint || t.relativePlacementConstraint) && (t.tile = !1, t.packComponents = !1);
							var d = void 0, c = !1;
							if (e.layoutUtilities && t.packComponents && ((d = e.layoutUtilities("get")) || (d = e.layoutUtilities()), c = !0), i.nodes().length > 0) if (c) {
								var g = a.getTopMostNodes(t.eles.nodes());
								if ((o = a.connectComponents(e, t.eles, g)).forEach(function(t) {
									var e = t.boundingBox();
									l.push({
										x: e.x1 + e.w / 2,
										y: e.y1 + e.h / 2
									});
								}), t.randomize && o.forEach(function(e) {
									t.eles = e, r.push(s(t));
								}), "default" == t.quality || "proof" == t.quality) {
									var u = e.collection();
									if (t.tile) {
										var p = /* @__PURE__ */ new Map(), m = 0, v = {
											nodeIndexes: p,
											xCoords: [],
											yCoords: []
										}, y = [];
										if (o.forEach(function(t, e) {
											0 == t.edges().length && (t.nodes().forEach(function(e, i) {
												u.merge(t.nodes()[i]), e.isParent() || (v.nodeIndexes.set(t.nodes()[i].id(), m++), v.xCoords.push(t.nodes()[0].position().x), v.yCoords.push(t.nodes()[0].position().y));
											}), y.push(e));
										}), u.length > 1) {
											var E = u.boundingBox();
											l.push({
												x: E.x1 + E.w / 2,
												y: E.y1 + E.h / 2
											}), o.push(u), r.push(v);
											for (var N = y.length - 1; N >= 0; N--) o.splice(y[N], 1), r.splice(y[N], 1), l.splice(y[N], 1);
										}
									}
									o.forEach(function(e, i) {
										t.eles = e, n.push(h(t, r[i])), a.relocateComponent(l[i], n[i], t);
									});
								} else o.forEach(function(e, i) {
									a.relocateComponent(l[i], r[i], t);
								});
								var T = /* @__PURE__ */ new Set();
								if (o.length > 1) {
									var A = [], C = i.filter(function(t) {
										return "none" == t.css("display");
									});
									o.forEach(function(e, i) {
										var o = void 0;
										if ("draft" == t.quality && (o = r[i].nodeIndexes), e.nodes().not(C).length > 0) {
											var s = {};
											s.edges = [], s.nodes = [];
											var h = void 0;
											e.nodes().not(C).forEach(function(e) {
												if ("draft" == t.quality) if (e.isParent()) {
													var l = a.calcBoundingBox(e, r[i].xCoords, r[i].yCoords, o);
													s.nodes.push({
														x: l.topLeftX,
														y: l.topLeftY,
														width: l.width,
														height: l.height
													});
												} else h = o.get(e.id()), s.nodes.push({
													x: r[i].xCoords[h] - e.boundingbox().w / 2,
													y: r[i].yCoords[h] - e.boundingbox().h / 2,
													width: e.boundingbox().w,
													height: e.boundingbox().h
												});
												else n[i][e.id()] && s.nodes.push({
													x: n[i][e.id()].getLeft(),
													y: n[i][e.id()].getTop(),
													width: n[i][e.id()].getWidth(),
													height: n[i][e.id()].getHeight()
												});
											}), e.edges().forEach(function(e) {
												var h = e.source(), l = e.target();
												if ("none" != h.css("display") && "none" != l.css("display")) if ("draft" == t.quality) {
													var d = o.get(h.id()), c = o.get(l.id()), g = [], u = [];
													if (h.isParent()) {
														var p = a.calcBoundingBox(h, r[i].xCoords, r[i].yCoords, o);
														g.push(p.topLeftX + p.width / 2), g.push(p.topLeftY + p.height / 2);
													} else g.push(r[i].xCoords[d]), g.push(r[i].yCoords[d]);
													if (l.isParent()) {
														var f = a.calcBoundingBox(l, r[i].xCoords, r[i].yCoords, o);
														u.push(f.topLeftX + f.width / 2), u.push(f.topLeftY + f.height / 2);
													} else u.push(r[i].xCoords[c]), u.push(r[i].yCoords[c]);
													s.edges.push({
														startX: g[0],
														startY: g[1],
														endX: u[0],
														endY: u[1]
													});
												} else n[i][h.id()] && n[i][l.id()] && s.edges.push({
													startX: n[i][h.id()].getCenterX(),
													startY: n[i][h.id()].getCenterY(),
													endX: n[i][l.id()].getCenterX(),
													endY: n[i][l.id()].getCenterY()
												});
											}), s.nodes.length > 0 && (A.push(s), T.add(i));
										}
									});
									var L = d.packComponents(A, t.randomize).shifts;
									if ("draft" == t.quality) r.forEach(function(t, e) {
										var i = t.xCoords.map(function(t) {
											return t + L[e].dx;
										}), r = t.yCoords.map(function(t) {
											return t + L[e].dy;
										});
										t.xCoords = i, t.yCoords = r;
									});
									else {
										var _ = 0;
										T.forEach(function(t) {
											Object.keys(n[t]).forEach(function(e) {
												var i = n[t][e];
												i.setCenter(i.getCenterX() + L[_].dx, i.getCenterY() + L[_].dy);
											}), _++;
										});
									}
								}
							} else {
								var w = t.eles.boundingBox();
								if (l.push({
									x: w.x1 + w.w / 2,
									y: w.y1 + w.h / 2
								}), t.randomize) {
									var M = s(t);
									r.push(M);
								}
								"default" == t.quality || "proof" == t.quality ? (n.push(h(t, r[0])), a.relocateComponent(l[0], n[0], t)) : a.relocateComponent(l[0], r[0], t);
							}
							var I = f(function(e, i) {
								if ("default" == t.quality || "proof" == t.quality) {
									"number" == typeof e && (e = i);
									var o = void 0, a = void 0, s = e.data("id");
									return n.forEach(function(t) {
										s in t && (o = {
											x: t[s].getRect().getCenterX(),
											y: t[s].getRect().getCenterY()
										}, a = t[s]);
									}), t.nodeDimensionsIncludeLabels && (a.labelWidth && ("left" == a.labelPosHorizontal ? o.x += a.labelWidth / 2 : "right" == a.labelPosHorizontal && (o.x -= a.labelWidth / 2)), a.labelHeight && ("top" == a.labelPosVertical ? o.y += a.labelHeight / 2 : "bottom" == a.labelPosVertical && (o.y -= a.labelHeight / 2))), {
										x: (o ??= {
											x: e.position("x"),
											y: e.position("y")
										}).x,
										y: o.y
									};
								}
								var h = void 0;
								return r.forEach(function(t) {
									var i = t.nodeIndexes.get(e.id());
									null != i && (h = {
										x: t.xCoords[i],
										y: t.yCoords[i]
									});
								}), {
									x: (h ??= {
										x: e.position("x"),
										y: e.position("y")
									}).x,
									y: h.y
								};
							}, "getPositions");
							if ("default" == t.quality || "proof" == t.quality || t.randomize) {
								var x = a.calcParentsWithoutChildren(e, i), O = i.filter(function(t) {
									return "none" == t.css("display");
								});
								t.eles = i.not(O), i.nodes().not(":parent").not(O).layoutPositions(this, t, I), x.length > 0 && x.forEach(function(t) {
									t.position(I(t));
								});
							} else console.log("If randomize option is set to false, then quality option must be 'default' or 'proof'.");
						}, "run")
					}]), t;
				}();
			},
			657: (t, e, i) => {
				var r = i(548), n = i(140).layoutBase.Matrix, o = i(140).layoutBase.SVD;
				t.exports = { spectralLayout: f(function(t) {
					var e = t.cy, i = t.eles, a = i.nodes(), s = i.nodes(":parent"), h = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), c = [], g = [], u = [], p = [], m = [], v = [], y = [], E = [], N = void 0, T = t.piTol, A = t.samplingType, C = t.nodeSeparation, L = void 0, _ = f(function() {
						for (var t = 0, e = 0, i = !1; e < L;) {
							t = Math.floor(Math.random() * N), i = !1;
							for (var r = 0; r < e; r++) if (p[r] == t) {
								i = !0;
								break;
							}
							!i && (p[e] = t, e++);
						}
					}, "randomSampleCR"), w = f(function(t, e, i) {
						for (var r = [], n = 0, o = 0, a = 0, s = void 0, h = [], d = 0, g = 1, u = 0; u < N; u++) h[u] = 1e8;
						for (r[o] = t, h[t] = 0; o >= n;) {
							a = r[n++];
							for (var p = c[a], f = 0; f < p.length; f++) 1e8 == h[s = l.get(p[f])] && (h[s] = h[a] + 1, r[++o] = s);
							v[a][e] = h[a] * C;
						}
						if (i) {
							for (var y = 0; y < N; y++) v[y][e] < m[y] && (m[y] = v[y][e]);
							for (var E = 0; E < N; E++) m[E] > d && (d = m[E], g = E);
						}
						return g;
					}, "BFS"), M = f(function(t) {
						var e = void 0;
						if (t) {
							e = Math.floor(Math.random() * N);
							for (var i = 0; i < N; i++) m[i] = 1e8;
							for (var r = 0; r < L; r++) p[r] = e, e = w(e, r, t);
						} else {
							_();
							for (var n = 0; n < L; n++) w(p[n], n, t, !1);
						}
						for (var o = 0; o < N; o++) for (var a = 0; a < L; a++) v[o][a] *= v[o][a];
						for (var s = 0; s < L; s++) y[s] = [];
						for (var h = 0; h < L; h++) for (var l = 0; l < L; l++) y[h][l] = v[p[l]][h];
					}, "allBFS"), I = f(function() {
						for (var t = o.svd(y), e = t.S, i = t.U, r = t.V, a = e[0] * e[0] * e[0], s = [], h = 0; h < L; h++) {
							s[h] = [];
							for (var l = 0; l < L; l++) s[h][l] = 0, h == l && (s[h][l] = e[h] / (e[h] * e[h] + a / (e[h] * e[h])));
						}
						E = n.multMat(n.multMat(r, s), n.transpose(i));
					}, "sample"), x = f(function() {
						for (var t = void 0, e = void 0, i = [], r = [], o = [], a = [], s = 0; s < N; s++) i[s] = Math.random(), r[s] = Math.random();
						i = n.normalize(i), r = n.normalize(r);
						for (var h = 0, l = 1e-9, d = 1e-9, c = void 0;;) {
							h++;
							for (var p = 0; p < N; p++) o[p] = i[p];
							if (i = n.multGamma(n.multL(n.multGamma(o), v, E)), t = n.dotProduct(o, i), i = n.normalize(i), (c = Math.abs((l = n.dotProduct(o, i)) / d)) <= 1 + T && c >= 1) break;
							d = l;
						}
						for (var f = 0; f < N; f++) o[f] = i[f];
						for (h = 0, d = 1e-9;;) {
							h++;
							for (var m = 0; m < N; m++) a[m] = r[m];
							if (a = n.minusOp(a, n.multCons(o, n.dotProduct(o, a))), r = n.multGamma(n.multL(n.multGamma(a), v, E)), e = n.dotProduct(a, r), r = n.normalize(r), (c = Math.abs((l = n.dotProduct(a, r)) / d)) <= 1 + T && c >= 1) break;
							d = l;
						}
						for (var y = 0; y < N; y++) a[y] = r[y];
						g = n.multCons(o, Math.sqrt(Math.abs(t))), u = n.multCons(a, Math.sqrt(Math.abs(e)));
					}, "powerIteration");
					r.connectComponents(e, i, r.getTopMostNodes(a), h), s.forEach(function(t) {
						r.connectComponents(e, i, r.getTopMostNodes(t.descendants().intersection(i)), h);
					});
					for (var O = 0, D = 0; D < a.length; D++) a[D].isParent() || l.set(a[D].id(), O++);
					var R = !0, b = !1, F = void 0;
					try {
						for (var G, S = h.keys()[Symbol.iterator](); !(R = (G = S.next()).done); R = !0) {
							var P = G.value;
							l.set(P, O++);
						}
					} catch (t) {
						b = !0, F = t;
					} finally {
						try {
							!R && S.return && S.return();
						} finally {
							if (b) throw F;
						}
					}
					for (var k = 0; k < l.size; k++) c[k] = [];
					s.forEach(function(t) {
						for (var e = t.children().intersection(i); 0 == e.nodes(":childless").length;) e = e.nodes()[0].children().intersection(i);
						var r = 0, n = e.nodes(":childless")[0].connectedEdges().length;
						e.nodes(":childless").forEach(function(t, e) {
							t.connectedEdges().length < n && (n = t.connectedEdges().length, r = e);
						}), d.set(t.id(), e.nodes(":childless")[r].id());
					}), a.forEach(function(t) {
						var e = void 0;
						e = t.isParent() ? l.get(d.get(t.id())) : l.get(t.id()), t.neighborhood().nodes().forEach(function(r) {
							i.intersection(t.edgesWith(r)).length > 0 && (r.isParent() ? c[e].push(d.get(r.id())) : c[e].push(r.id()));
						});
					});
					var U = f(function(t) {
						var i = l.get(t), r = void 0;
						h.get(t).forEach(function(n) {
							r = e.getElementById(n).isParent() ? d.get(n) : n, c[i].push(r), c[l.get(r)].push(t);
						});
					}, "_loop"), Y = !0, H = !1, X = void 0;
					try {
						for (var z, B = h.keys()[Symbol.iterator](); !(Y = (z = B.next()).done); Y = !0) {
							var V = z.value;
							U(V);
						}
					} catch (t) {
						H = !0, X = t;
					} finally {
						try {
							!Y && B.return && B.return();
						} finally {
							if (H) throw X;
						}
					}
					N = l.size;
					if (N > 2) {
						L = N < t.sampleSize ? N : t.sampleSize;
						for (var W = 0; W < N; W++) v[W] = [];
						for (var j = 0; j < L; j++) E[j] = [];
						return "draft" == t.quality || "all" == t.step ? (M(A), I(), x()) : l.forEach(function(t, i) {
							g.push(e.getElementById(i).position("x")), u.push(e.getElementById(i).position("y"));
						}), {
							nodeIndexes: l,
							xCoords: g,
							yCoords: u
						};
					}
					var q = l.keys(), $ = e.getElementById(q.next().value), Z = $.position(), Q = $.outerWidth();
					if (g.push(Z.x), u.push(Z.y), 2 == N) {
						var J = e.getElementById(q.next().value).outerWidth();
						g.push(Z.x + Q / 2 + J / 2 + t.idealEdgeLength), u.push(Z.y);
					}
					return {
						nodeIndexes: l,
						xCoords: g,
						yCoords: u
					};
				}, "spectralLayout") };
			},
			579: (t, e, i) => {
				var r = i(212), n = f(function(t) {
					t && t("layout", "fcose", r);
				}, "register");
				"u" > typeof cytoscape && n(cytoscape), t.exports = n;
			},
			140: (e) => {
				e.exports = t;
			}
		}, i = {};
		function r(t) {
			var n = i[t];
			if (void 0 !== n) return n.exports;
			var o = i[t] = { exports: {} };
			return e[t](o, o.exports, r), o.exports;
		}
		return f(r, "__webpack_require__"), r(579);
	});
}), O = {
	L: "left",
	R: "right",
	T: "top",
	B: "bottom"
}, D = {
	L: f((t) => `${t},${t / 2} 0,${t} 0,0`, "L"),
	R: f((t) => `0,${t / 2} ${t},0 ${t},${t}`, "R"),
	T: f((t) => `0,0 ${t},0 ${t / 2},${t}`, "T"),
	B: f((t) => `${t / 2},0 ${t},${t} 0,${t}`, "B")
}, R = {
	L: f((t, e) => t - e + 2, "L"),
	R: f((t, e) => t - 2, "R"),
	T: f((t, e) => t - e + 2, "T"),
	B: f((t, e) => t - 2, "B")
}, b = f(function(t) {
	return G(t) ? "L" === t ? "R" : "L" : "T" === t ? "B" : "T";
}, "getOppositeArchitectureDirection"), F = f(function(t) {
	return "L" === t || "R" === t || "T" === t || "B" === t;
}, "isArchitectureDirection"), G = f(function(t) {
	return "L" === t || "R" === t;
}, "isArchitectureDirectionX"), S = f(function(t) {
	return "T" === t || "B" === t;
}, "isArchitectureDirectionY"), P = f(function(t, e) {
	let i = G(t) && S(e), r = S(t) && G(e);
	return i || r;
}, "isArchitectureDirectionXY"), k = f(function(t) {
	let e = t[0], i = t[1], r = G(e) && S(i), n = S(e) && G(i);
	return r || n;
}, "isArchitecturePairXY"), U = f(function(t) {
	return "LL" !== t && "RR" !== t && "TT" !== t && "BB" !== t;
}, "isValidArchitectureDirectionPair"), Y = f(function(t, e) {
	let i = `${t}${e}`;
	return U(i) ? i : void 0;
}, "getArchitectureDirectionPair"), H = f(function([t, e], i) {
	let r = i[0], n = i[1];
	return G(r) ? S(n) ? [t + ("L" === r ? -1 : 1), e + ("T" === n ? 1 : -1)] : [t + ("L" === r ? -1 : 1), e] : G(n) ? [t + ("L" === n ? 1 : -1), e + ("T" === r ? 1 : -1)] : [t, e + ("T" === r ? 1 : -1)];
}, "shiftPositionByArchitectureDirectionPair"), X = f(function(t) {
	return "LT" === t || "TL" === t ? [1, 1] : "BL" === t || "LB" === t ? [1, -1] : "BR" === t || "RB" === t ? [-1, -1] : [-1, 1];
}, "getArchitectureDirectionXYFactors"), z = f(function(t, e) {
	return P(t, e) ? "bend" : G(t) ? "horizontal" : "vertical";
}, "getArchitectureDirectionAlignment"), B = f(function(t) {
	return "service" === t.type;
}, "isArchitectureService"), V = f(function(t) {
	return "junction" === t.type;
}, "isArchitectureJunction"), W = f((t) => t.data(), "edgeData"), j = f((t) => t.data(), "nodeData"), q = u.architecture, $ = class {
	constructor() {
		this.nodes = {}, this.groups = {}, this.edges = [], this.registeredIds = {}, this.elements = {}, this.setAccTitle = h, this.getAccTitle = e, this.setDiagramTitle = i, this.getDiagramTitle = l, this.getAccDescription = d, this.setAccDescription = s, this.clear();
	}
	static {
		f(this, "ArchitectureDB");
	}
	clear() {
		this.nodes = {}, this.groups = {}, this.edges = [], this.registeredIds = {}, this.dataStructures = void 0, this.elements = {}, o();
	}
	addService({ id: t, icon: e, in: i, title: r, iconText: n }) {
		if (void 0 !== this.registeredIds[t]) throw Error(`The service id [${t}] is already in use by another ${this.registeredIds[t]}`);
		if (void 0 !== i) {
			if (t === i) throw Error(`The service [${t}] cannot be placed within itself`);
			if (void 0 === this.registeredIds[i]) throw Error(`The service [${t}]'s parent does not exist. Please make sure the parent is created before this service`);
			if ("node" === this.registeredIds[i]) throw Error(`The service [${t}]'s parent is not a group`);
		}
		this.registeredIds[t] = "node", this.nodes[t] = {
			id: t,
			type: "service",
			icon: e,
			iconText: n,
			title: r,
			edges: [],
			in: i
		};
	}
	getServices() {
		return Object.values(this.nodes).filter(B);
	}
	addJunction({ id: t, in: e }) {
		this.registeredIds[t] = "node", this.nodes[t] = {
			id: t,
			type: "junction",
			edges: [],
			in: e
		};
	}
	getJunctions() {
		return Object.values(this.nodes).filter(V);
	}
	getNodes() {
		return Object.values(this.nodes);
	}
	getNode(t) {
		return this.nodes[t] ?? null;
	}
	addGroup({ id: t, icon: e, in: i, title: r }) {
		if (this.registeredIds?.[t] !== void 0) throw Error(`The group id [${t}] is already in use by another ${this.registeredIds[t]}`);
		if (void 0 !== i) {
			if (t === i) throw Error(`The group [${t}] cannot be placed within itself`);
			if (this.registeredIds?.[i] === void 0) throw Error(`The group [${t}]'s parent does not exist. Please make sure the parent is created before this group`);
			if (this.registeredIds?.[i] === "node") throw Error(`The group [${t}]'s parent is not a group`);
		}
		this.registeredIds[t] = "group", this.groups[t] = {
			id: t,
			icon: e,
			title: r,
			in: i
		};
	}
	getGroups() {
		return Object.values(this.groups);
	}
	addEdge({ lhsId: t, rhsId: e, lhsDir: i, rhsDir: r, lhsInto: n, rhsInto: o, lhsGroup: a, rhsGroup: s, title: h }) {
		if (!F(i)) throw Error(`Invalid direction given for left hand side of edge ${t}--${e}. Expected (L,R,T,B) got ${String(i)}`);
		if (!F(r)) throw Error(`Invalid direction given for right hand side of edge ${t}--${e}. Expected (L,R,T,B) got ${String(r)}`);
		if (void 0 === this.nodes[t] && void 0 === this.groups[t]) throw Error(`The left-hand id [${t}] does not yet exist. Please create the service/group before declaring an edge to it.`);
		if (void 0 === this.nodes[e] && void 0 === this.groups[e]) throw Error(`The right-hand id [${e}] does not yet exist. Please create the service/group before declaring an edge to it.`);
		let l = this.nodes[t].in, d = this.nodes[e].in;
		if (a && l && d && l == d) throw Error(`The left-hand id [${t}] is modified to traverse the group boundary, but the edge does not pass through two groups.`);
		if (s && l && d && l == d) throw Error(`The right-hand id [${e}] is modified to traverse the group boundary, but the edge does not pass through two groups.`);
		this.edges.push({
			lhsId: t,
			lhsDir: i,
			lhsInto: n,
			lhsGroup: a,
			rhsId: e,
			rhsDir: r,
			rhsInto: o,
			rhsGroup: s,
			title: h
		}), this.nodes[t] && this.nodes[e] && (this.nodes[t].edges.push(this.edges[this.edges.length - 1]), this.nodes[e].edges.push(this.edges[this.edges.length - 1]));
	}
	getEdges() {
		return this.edges;
	}
	getDataStructures() {
		if (void 0 === this.dataStructures) {
			let t = {}, e = Object.entries(this.nodes).reduce((e, [i, r]) => (e[i] = r.edges.reduce((e, r) => {
				let n = this.getNode(r.lhsId)?.in, o = this.getNode(r.rhsId)?.in;
				if (n && o && n !== o) {
					let e = z(r.lhsDir, r.rhsDir);
					"bend" !== e && (t[n] ??= {}, t[n][o] = e, t[o] ??= {}, t[o][n] = e);
				}
				if (r.lhsId === i) {
					let t = Y(r.lhsDir, r.rhsDir);
					t && (e[t] = r.rhsId);
				} else {
					let t = Y(r.rhsDir, r.lhsDir);
					t && (e[t] = r.lhsId);
				}
				return e;
			}, {}), e), {}), i = Object.keys(e)[0], r = { [i]: 1 }, n = Object.keys(e).reduce((t, e) => e === i ? t : {
				...t,
				[e]: 1
			}, {}), o = f((t) => {
				let i = { [t]: [0, 0] }, o = [t];
				for (; o.length > 0;) {
					let t = o.shift();
					if (t) {
						r[t] = 1, delete n[t];
						let a = e[t], [s, h] = i[t];
						Object.entries(a).forEach(([t, e]) => {
							r[e] || (i[e] = H([s, h], t), o.push(e));
						});
					}
				}
				return i;
			}, "BFS"), a = [o(i)];
			for (; Object.keys(n).length > 0;) a.push(o(Object.keys(n)[0]));
			this.dataStructures = {
				adjList: e,
				spatialMaps: a,
				groupAlignments: t
			};
		}
		return this.dataStructures;
	}
	setElementForId(t, e) {
		this.elements[t] = e;
	}
	getElementById(t) {
		return this.elements[t];
	}
	getConfig() {
		return T({
			...q,
			...g().architecture
		});
	}
	getConfigField(t) {
		return this.getConfig()[t];
	}
}, Z = f((t, e) => {
	v(t, e), t.groups.map((t) => e.addGroup(t)), t.services.map((t) => e.addService({
		...t,
		type: "service"
	})), t.junctions.map((t) => e.addJunction({
		...t,
		type: "junction"
	})), t.edges.map((t) => e.addEdge(t));
}, "populateDb"), Q = {
	parser: { yy: void 0 },
	parse: f(async (e) => {
		let i = await y("architecture", e);
		t.debug(i);
		let r = Q.parser?.yy;
		if (!(r instanceof $)) throw Error("parser.parser?.yy was not a ArchitectureDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");
		Z(i, r);
	}, "parse")
}, J = f((t) => `
  .edge {
    stroke-width: ${t.archEdgeWidth};
    stroke: ${t.archEdgeColor};
    fill: none;
  }

  .arrow {
    fill: ${t.archEdgeArrowColor};
  }

  .node-bkg {
    fill: none;
    stroke: ${t.archGroupBorderColor};
    stroke-width: ${t.archGroupBorderWidth};
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
`, "getStyles"), K = m(x(), 1), tt = f((t) => `<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/>${t}</g>`, "wrapIcon"), te = {
	prefix: "mermaid-architecture",
	height: 80,
	width: 80,
	icons: {
		database: { body: tt("<path id=\"b\" data-name=\"4\" d=\"m20,57.86c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><path id=\"c\" data-name=\"3\" d=\"m20,45.95c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><path id=\"d\" data-name=\"2\" d=\"m20,34.05c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><ellipse id=\"e\" data-name=\"1\" cx=\"40\" cy=\"22.14\" rx=\"20\" ry=\"7.14\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><line x1=\"20\" y1=\"57.86\" x2=\"20\" y2=\"22.14\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><line x1=\"60\" y1=\"57.86\" x2=\"60\" y2=\"22.14\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/>") },
		server: { body: tt("<rect x=\"17.5\" y=\"17.5\" width=\"45\" height=\"45\" rx=\"2\" ry=\"2\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><line x1=\"17.5\" y1=\"32.5\" x2=\"62.5\" y2=\"32.5\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><line x1=\"17.5\" y1=\"47.5\" x2=\"62.5\" y2=\"47.5\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><g><path d=\"m56.25,25c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z\" style=\"fill: #fff; stroke-width: 0px;\"/><path d=\"m56.25,25c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10;\"/></g><g><path d=\"m56.25,40c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z\" style=\"fill: #fff; stroke-width: 0px;\"/><path d=\"m56.25,40c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10;\"/></g><g><path d=\"m56.25,55c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z\" style=\"fill: #fff; stroke-width: 0px;\"/><path d=\"m56.25,55c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10;\"/></g><g><circle cx=\"32.5\" cy=\"25\" r=\".75\" style=\"fill: #fff; stroke: #fff; stroke-miterlimit: 10;\"/><circle cx=\"27.5\" cy=\"25\" r=\".75\" style=\"fill: #fff; stroke: #fff; stroke-miterlimit: 10;\"/><circle cx=\"22.5\" cy=\"25\" r=\".75\" style=\"fill: #fff; stroke: #fff; stroke-miterlimit: 10;\"/></g><g><circle cx=\"32.5\" cy=\"40\" r=\".75\" style=\"fill: #fff; stroke: #fff; stroke-miterlimit: 10;\"/><circle cx=\"27.5\" cy=\"40\" r=\".75\" style=\"fill: #fff; stroke: #fff; stroke-miterlimit: 10;\"/><circle cx=\"22.5\" cy=\"40\" r=\".75\" style=\"fill: #fff; stroke: #fff; stroke-miterlimit: 10;\"/></g><g><circle cx=\"32.5\" cy=\"55\" r=\".75\" style=\"fill: #fff; stroke: #fff; stroke-miterlimit: 10;\"/><circle cx=\"27.5\" cy=\"55\" r=\".75\" style=\"fill: #fff; stroke: #fff; stroke-miterlimit: 10;\"/><circle cx=\"22.5\" cy=\"55\" r=\".75\" style=\"fill: #fff; stroke: #fff; stroke-miterlimit: 10;\"/></g>") },
		disk: { body: tt("<rect x=\"20\" y=\"15\" width=\"40\" height=\"50\" rx=\"1\" ry=\"1\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><ellipse cx=\"24\" cy=\"19.17\" rx=\".8\" ry=\".83\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><ellipse cx=\"56\" cy=\"19.17\" rx=\".8\" ry=\".83\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><ellipse cx=\"24\" cy=\"60.83\" rx=\".8\" ry=\".83\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><ellipse cx=\"56\" cy=\"60.83\" rx=\".8\" ry=\".83\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><ellipse cx=\"40\" cy=\"33.75\" rx=\"14\" ry=\"14.58\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><ellipse cx=\"40\" cy=\"33.75\" rx=\"4\" ry=\"4.17\" style=\"fill: #fff; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><path d=\"m37.51,42.52l-4.83,13.22c-.26.71-1.1,1.02-1.76.64l-4.18-2.42c-.66-.38-.81-1.26-.33-1.84l9.01-10.8c.88-1.05,2.56-.08,2.09,1.2Z\" style=\"fill: #fff; stroke-width: 0px;\"/>") },
		internet: { body: tt("<circle cx=\"40\" cy=\"40\" r=\"22.5\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><line x1=\"40\" y1=\"17.5\" x2=\"40\" y2=\"62.5\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><line x1=\"17.5\" y1=\"40\" x2=\"62.5\" y2=\"40\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><path d=\"m39.99,17.51c-15.28,11.1-15.28,33.88,0,44.98\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><path d=\"m40.01,17.51c15.28,11.1,15.28,33.88,0,44.98\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><line x1=\"19.75\" y1=\"30.1\" x2=\"60.25\" y2=\"30.1\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><line x1=\"19.75\" y1=\"49.9\" x2=\"60.25\" y2=\"49.9\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/>") },
		cloud: { body: tt("<path d=\"m65,47.5c0,2.76-2.24,5-5,5H20c-2.76,0-5-2.24-5-5,0-1.87,1.03-3.51,2.56-4.36-.04-.21-.06-.42-.06-.64,0-2.6,2.48-4.74,5.65-4.97,1.65-4.51,6.34-7.76,11.85-7.76.86,0,1.69.08,2.5.23,2.09-1.57,4.69-2.5,7.5-2.5,6.1,0,11.19,4.38,12.28,10.17,2.14.56,3.72,2.51,3.72,4.83,0,.03,0,.07-.01.1,2.29.46,4.01,2.48,4.01,4.9Z\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/>") },
		unknown: _,
		blank: { body: tt("") }
	}
}, ti = f(async function(t, e, i) {
	let n = i.getConfigField("padding"), o = i.getConfigField("iconSize"), a = o / 2, s = o / 6, h = s / 2;
	await Promise.all(e.edges().map(async (e) => {
		let { source: o, sourceDir: l, sourceArrow: d, sourceGroup: c, target: g, targetDir: u, targetArrow: p, targetGroup: f, label: m } = W(e), { x: v, y } = e[0].sourceEndpoint(), { x: E, y: N } = e[0].midpoint(), { x: T, y: L } = e[0].targetEndpoint(), _ = n + 4;
		if (c && (G(l) ? v += "L" === l ? -_ : _ : y += "T" === l ? -_ : _ + 18), f && (G(u) ? T += "L" === u ? -_ : _ : L += "T" === u ? -_ : _ + 18), c || i.getNode(o)?.type !== "junction" || (G(l) ? v += "L" === l ? a : -a : y += "T" === l ? a : -a), f || i.getNode(g)?.type !== "junction" || (G(u) ? T += "L" === u ? a : -a : L += "T" === u ? a : -a), e[0]._private.rscratch) {
			let e = t.insert("g");
			if (e.insert("path").attr("d", `M ${v},${y} L ${E},${N} L${T},${L} `).attr("class", "edge").attr("id", A(o, g, { prefix: "L" })), d) {
				let t = G(l) ? R[l](v, s) : v - h, i = S(l) ? R[l](y, s) : y - h;
				e.insert("polygon").attr("points", D[l](s)).attr("transform", `translate(${t},${i})`).attr("class", "arrow");
			}
			if (p) {
				let t = G(u) ? R[u](T, s) : T - h, i = S(u) ? R[u](L, s) : L - h;
				e.insert("polygon").attr("points", D[u](s)).attr("transform", `translate(${t},${i})`).attr("class", "arrow");
			}
			if (m) {
				let t = P(l, u) ? "XY" : G(l) ? "X" : "Y", i = 0;
				i = "X" === t ? Math.abs(v - T) : "Y" === t ? Math.abs(y - L) / 1.5 : Math.abs(v - T) / 2;
				let n = e.append("g");
				if (await C(n, m, {
					useHtmlLabels: !1,
					width: i,
					classes: "architecture-service-label"
				}, r()), n.attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle"), "X" === t) n.attr("transform", "translate(" + E + ", " + N + ")");
				else if ("Y" === t) n.attr("transform", "translate(" + E + ", " + N + ") rotate(-90)");
				else if ("XY" === t) {
					let t = Y(l, u);
					if (t && k(t)) {
						let e = n.node().getBoundingClientRect(), [i, r] = X(t);
						n.attr("dominant-baseline", "auto").attr("transform", `rotate(${-1 * i * r * 45})`);
						let o = n.node().getBoundingClientRect();
						n.attr("transform", `
                translate(${E}, ${N - e.height / 2})
                translate(${i * o.width / 2}, ${r * o.height / 2})
                rotate(${-1 * i * r * 45}, 0, ${e.height / 2})
              `);
					}
				}
			}
		}
	}));
}, "drawEdges"), tr = f(async function(t, e, i) {
	let n = .75 * i.getConfigField("padding"), o = i.getConfigField("fontSize"), a = i.getConfigField("iconSize") / 2;
	await Promise.all(e.nodes().map(async (e) => {
		let s = j(e);
		if ("group" === s.type) {
			let { h, w: l, x1: d, y1: c } = e.boundingBox(), g = t.append("rect");
			g.attr("id", `group-${s.id}`).attr("x", d + a).attr("y", c + a).attr("width", l).attr("height", h).attr("class", "node-bkg");
			let u = t.append("g"), p = d, f = c;
			if (s.icon) {
				let t = u.append("g");
				t.html(`<g>${await w(s.icon, {
					height: n,
					width: n,
					fallbackPrefix: te.prefix
				})}</g>`), t.attr("transform", "translate(" + (p + a + 1) + ", " + (f + a + 1) + ")"), p += n, f += o / 2 - 1 - 2;
			}
			if (s.label) {
				let t = u.append("g");
				await C(t, s.label, {
					useHtmlLabels: !1,
					width: l,
					classes: "architecture-service-label"
				}, r()), t.attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "start").attr("text-anchor", "start"), t.attr("transform", "translate(" + (p + a + 4) + ", " + (f + a + 2) + ")");
			}
			i.setElementForId(s.id, g);
		}
	}));
}, "drawGroups"), tn = f(async function(t, e, i) {
	let o = r();
	for (let r of i) {
		let i = e.append("g"), a = t.getConfigField("iconSize");
		if (r.title) {
			let t = i.append("g");
			await C(t, r.title, {
				useHtmlLabels: !1,
				width: 1.5 * a,
				classes: "architecture-service-label"
			}, o), t.attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle"), t.attr("transform", "translate(" + a / 2 + ", " + a + ")");
		}
		let s = i.append("g");
		if (r.icon) s.html(`<g>${await w(r.icon, {
			height: a,
			width: a,
			fallbackPrefix: te.prefix
		})}</g>`);
		else if (r.iconText) {
			s.html(`<g>${await w("blank", {
				height: a,
				width: a,
				fallbackPrefix: te.prefix
			})}</g>`);
			let t = s.append("g").append("foreignObject").attr("width", a).attr("height", a).append("div").attr("class", "node-icon-text").attr("style", `height: ${a}px;`).append("div").html(n(r.iconText, o)), e = parseInt(window.getComputedStyle(t.node(), null).getPropertyValue("font-size").replace(/\D/g, "")) ?? 16;
			t.attr("style", `-webkit-line-clamp: ${Math.floor((a - 2) / e)};`);
		} else s.append("path").attr("class", "node-bkg").attr("id", "node-" + r.id).attr("d", `M0 ${a} v${-a} q0,-5 5,-5 h${a} q5,0 5,5 v${a} H0 Z`);
		i.attr("id", `service-${r.id}`).attr("class", "architecture-service");
		let { width: h, height: l } = i.node().getBBox();
		r.width = h, r.height = l, t.setElementForId(r.id, i);
	}
	return 0;
}, "drawServices"), to = f(function(t, e, i) {
	i.forEach((i) => {
		let r = e.append("g"), n = t.getConfigField("iconSize");
		r.append("g").append("rect").attr("id", "node-" + i.id).attr("fill-opacity", "0").attr("width", n).attr("height", n), r.attr("class", "architecture-junction");
		let { width: o, height: a } = r._groups[0][0].getBBox();
		r.width = o, r.height = a, t.setElementForId(i.id, r);
	});
}, "drawJunctions");
function ta(t, e, i) {
	t.forEach((t) => {
		e.add({
			group: "nodes",
			data: {
				type: "service",
				id: t.id,
				icon: t.icon,
				label: t.title,
				parent: t.in,
				width: i.getConfigField("iconSize"),
				height: i.getConfigField("iconSize")
			},
			classes: "node-service"
		});
	});
}
function ts(t, e, i) {
	t.forEach((t) => {
		e.add({
			group: "nodes",
			data: {
				type: "junction",
				id: t.id,
				parent: t.in,
				width: i.getConfigField("iconSize"),
				height: i.getConfigField("iconSize")
			},
			classes: "node-junction"
		});
	});
}
function th(t, e) {
	e.nodes().map((e) => {
		let i = j(e);
		"group" !== i.type && (i.x = e.position().x, i.y = e.position().y, t.getElementById(i.id).attr("transform", "translate(" + (i.x || 0) + "," + (i.y || 0) + ")"));
	});
}
function tl(t, e) {
	t.forEach((t) => {
		e.add({
			group: "nodes",
			data: {
				type: "group",
				id: t.id,
				icon: t.icon,
				label: t.title,
				parent: t.in
			},
			classes: "node-group"
		});
	});
}
function td(t, e) {
	t.forEach((t) => {
		let { lhsId: i, rhsId: r, lhsInto: n, lhsGroup: o, rhsInto: a, lhsDir: s, rhsDir: h, rhsGroup: l, title: d } = t, c = P(t.lhsDir, t.rhsDir) ? "segments" : "straight", g = {
			id: `${i}-${r}`,
			label: d,
			source: i,
			sourceDir: s,
			sourceArrow: n,
			sourceGroup: o,
			sourceEndpoint: "L" === s ? "0 50%" : "R" === s ? "100% 50%" : "T" === s ? "50% 0" : "50% 100%",
			target: r,
			targetDir: h,
			targetArrow: a,
			targetGroup: l,
			targetEndpoint: "L" === h ? "0 50%" : "R" === h ? "100% 50%" : "T" === h ? "50% 0" : "50% 100%"
		};
		e.add({
			group: "edges",
			data: g,
			classes: c
		});
	});
}
function tc(t, e, i) {
	let r = f((t, e) => Object.entries(t).reduce((t, [r, n]) => {
		let o = 0, a = Object.entries(n);
		if (1 === a.length) return t[r] = a[0][1], t;
		for (let n = 0; n < a.length - 1; n++) for (let s = n + 1; s < a.length; s++) {
			let [h, l] = a[n], [d, c] = a[s];
			i[h]?.[d] === e || "default" === h || "default" === d ? (t[r] ??= [], t[r] = [
				...t[r],
				...l,
				...c
			]) : (t[`${r}-${o++}`] = l, t[`${r}-${o++}`] = c);
		}
		return t;
	}, {}), "flattenAlignments"), [n, o] = e.map((e) => {
		let i = {}, n = {};
		return Object.entries(e).forEach(([e, [r, o]]) => {
			let a = t.getNode(e)?.in ?? "default";
			i[o] ??= {}, i[o][a] ??= [], i[o][a].push(e), n[r] ??= {}, n[r][a] ??= [], n[r][a].push(e);
		}), {
			horiz: Object.values(r(i, "horizontal")).filter((t) => t.length > 1),
			vert: Object.values(r(n, "vertical")).filter((t) => t.length > 1)
		};
	}).reduce(([t, e], { horiz: i, vert: r }) => [[...t, ...i], [...e, ...r]], [[], []]);
	return {
		horizontal: n,
		vertical: o
	};
}
function tg(t, e) {
	let i = [], r = f((t) => `${t[0]},${t[1]}`, "posToStr"), n = f((t) => t.split(",").map((t) => parseInt(t)), "strToPos");
	return t.forEach((t) => {
		let o = Object.fromEntries(Object.entries(t).map(([t, e]) => [r(e), t])), a = [r([0, 0])], s = {}, h = {
			L: [-1, 0],
			R: [1, 0],
			T: [0, 1],
			B: [0, -1]
		};
		for (; a.length > 0;) {
			let t = a.shift();
			if (t) {
				s[t] = 1;
				let l = o[t];
				if (l) {
					let d = n(t);
					Object.entries(h).forEach(([t, n]) => {
						let h = r([d[0] + n[0], d[1] + n[1]]), c = o[h];
						c && !s[h] && (a.push(h), i.push({
							[O[t]]: c,
							[O[b(t)]]: l,
							gap: 1.5 * e.getConfigField("iconSize")
						}));
					});
				}
			}
		}
	}), i;
}
function tu(e, i, r, n, o, { spatialMaps: a, groupAlignments: s }) {
	return new Promise((h) => {
		let l = c("body").append("div").attr("id", "cy").attr("style", "display:none"), d = N({
			container: document.getElementById("cy"),
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
		l.remove(), tl(r, d), ta(e, d, o), ts(i, d, o), td(n, d);
		let g = tc(o, a, s), u = tg(a, o), p = d.layout({
			name: "fcose",
			quality: "proof",
			styleEnabled: !1,
			animate: !1,
			nodeDimensionsIncludeLabels: !1,
			idealEdgeLength(t) {
				let [e, i] = t.connectedNodes(), { parent: r } = j(e), { parent: n } = j(i);
				return r === n ? 1.5 * o.getConfigField("iconSize") : .5 * o.getConfigField("iconSize");
			},
			edgeElasticity(t) {
				let [e, i] = t.connectedNodes(), { parent: r } = j(e), { parent: n } = j(i);
				return r === n ? .45 : .001;
			},
			alignmentConstraint: g,
			relativePlacementConstraint: u
		});
		p.one("layoutstop", () => {
			function t(t, e, i, r) {
				let n, o, { x: a, y: s } = t, { x: h, y: l } = e;
				o = (r - s + (a - i) * (s - l) / (a - h)) / Math.sqrt(1 + Math.pow((s - l) / (a - h), 2)), n = Math.sqrt(Math.pow(r - s, 2) + Math.pow(i - a, 2) - Math.pow(o, 2)) / Math.sqrt(Math.pow(h - a, 2) + Math.pow(l - s, 2));
				let d = (h - a) * (r - s) - (l - s) * (i - a);
				switch (!0) {
					case d >= 0:
						d = 1;
						break;
					case d < 0: d = -1;
				}
				let c = (h - a) * (i - a) + (l - s) * (r - s);
				switch (!0) {
					case c >= 0:
						c = 1;
						break;
					case c < 0: c = -1;
				}
				return {
					distances: o = Math.abs(o) * d,
					weights: n *= c
				};
			}
			for (let e of (f(t, "getSegmentWeights"), d.startBatch(), Object.values(d.edges()))) if (e.data?.()) {
				let { x: i, y: r } = e.source().position(), { x: n, y: o } = e.target().position();
				if (i !== n && r !== o) {
					let i = e.sourceEndpoint(), r = e.targetEndpoint(), { sourceDir: n } = W(e), [o, a] = S(n) ? [i.x, r.y] : [r.x, i.y], { weights: s, distances: h } = t(i, r, o, a);
					e.style("segment-distances", h), e.style("segment-weights", s);
				}
			}
			d.endBatch(), p.run();
		}), p.run(), d.ready((e) => {
			t.info("Ready", e), h(d);
		});
	});
}
L([{
	name: te.prefix,
	icons: te
}]), N.use(K.default), f(ta, "addServices"), f(ts, "addJunctions"), f(th, "positionNodes"), f(tl, "addGroups"), f(td, "addEdges"), f(tc, "getAlignments"), f(tg, "getRelativeConstraints"), f(tu, "layoutArchitecture");
var tp = {
	parser: Q,
	get db() {
		return new $();
	},
	renderer: { draw: f(async (t, e, i, r) => {
		let n = r.db, o = n.getServices(), s = n.getJunctions(), h = n.getGroups(), l = n.getEdges(), d = n.getDataStructures(), c = E(e), g = c.append("g");
		g.attr("class", "architecture-edges");
		let u = c.append("g");
		u.attr("class", "architecture-services");
		let p = c.append("g");
		p.attr("class", "architecture-groups"), await tn(n, u, o), to(n, u, s);
		let f = await tu(o, s, h, l, n, d);
		await ti(g, f, n), await tr(p, f, n), th(n, f), a(void 0, c, n.getConfigField("padding"), n.getConfigField("useMaxWidth"));
	}, "draw") },
	styles: J
};
export { tp as diagram };
