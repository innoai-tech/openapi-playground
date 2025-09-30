import { $t as t, qt as e } from "./vendor-min-mermaid~chunk-5V7UUW6L.B--ayk72.chunk.js";
import { Q as i, Z as r, et as n } from "./vendor-min-mermaid~chunk-2XYWPRAO.Da8Ms7Co.chunk.js";
import { t as o } from "./vendor-mermaid.9XzSy1EA.chunk.js";
var s = i((t, e) => {
	r(function(i, r) {
		"object" == typeof t && "object" == typeof e ? e.exports = r() : "function" == typeof define && define.amd ? define([], r) : "object" == typeof t ? t.layoutBase = r() : i.layoutBase = r();
	}, "webpackUniversalModuleDefinition")(t, function() {
		var t = [
			function(t, e, i) {
				function n() {}
				r(n, "LayoutConstants"), n.QUALITY = 1, n.DEFAULT_CREATE_BENDS_AS_NEEDED = !1, n.DEFAULT_INCREMENTAL = !1, n.DEFAULT_ANIMATION_ON_LAYOUT = !0, n.DEFAULT_ANIMATION_DURING_LAYOUT = !1, n.DEFAULT_ANIMATION_PERIOD = 50, n.DEFAULT_UNIFORM_LEAF_NODE_SIZES = !1, n.DEFAULT_GRAPH_MARGIN = 15, n.NODE_DIMENSIONS_INCLUDE_LABELS = !1, n.SIMPLE_NODE_SIZE = 40, n.SIMPLE_NODE_HALF_SIZE = n.SIMPLE_NODE_SIZE / 2, n.EMPTY_COMPOUND_NODE_SIZE = 40, n.MIN_EDGE_LENGTH = 1, n.WORLD_BOUNDARY = 1e6, n.INITIAL_WORLD_BOUNDARY = n.WORLD_BOUNDARY / 1e3, n.WORLD_CENTER_X = 1200, n.WORLD_CENTER_Y = 900, t.exports = n;
			},
			function(t, e, i) {
				var n = i(2), o = i(8), s = i(9);
				function a(t, e, i) {
					n.call(this, i), this.isOverlapingSourceAndTarget = !1, this.vGraphObject = i, this.bendpoints = [], this.source = t, this.target = e;
				}
				for (var h in r(a, "LEdge"), a.prototype = Object.create(n.prototype), n) a[h] = n[h];
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
					this.isOverlapingSourceAndTarget = o.getIntersection(this.target.getRect(), this.source.getRect(), t), this.isOverlapingSourceAndTarget || (this.lengthX = t[0] - t[2], this.lengthY = t[1] - t[3], 1 > Math.abs(this.lengthX) && (this.lengthX = s.sign(this.lengthX)), 1 > Math.abs(this.lengthY) && (this.lengthY = s.sign(this.lengthY)), this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY));
				}, a.prototype.updateLengthSimple = function() {
					this.lengthX = this.target.getCenterX() - this.source.getCenterX(), this.lengthY = this.target.getCenterY() - this.source.getCenterY(), 1 > Math.abs(this.lengthX) && (this.lengthX = s.sign(this.lengthX)), 1 > Math.abs(this.lengthY) && (this.lengthY = s.sign(this.lengthY)), this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
				}, t.exports = a;
			},
			function(t, e, i) {
				function n(t) {
					this.vGraphObject = t;
				}
				r(n, "LGraphObject"), t.exports = n;
			},
			function(t, e, i) {
				var n = i(2), o = i(10), s = i(13), a = i(0), h = i(16), l = i(4);
				function g(t, e, i, r) {
					null == i && null == r && (r = e), n.call(this, r), null != t.graphManager && (t = t.graphManager), this.estimatedSize = o.MIN_VALUE, this.inclusionTreeDepth = o.MAX_VALUE, this.vGraphObject = r, this.edges = [], this.graphManager = t, null != i && null != e ? this.rect = new s(e.x, e.y, i.width, i.height) : this.rect = new s();
				}
				for (var u in r(g, "LNode"), g.prototype = Object.create(n.prototype), n) g[u] = n[u];
				g.prototype.getEdges = function() {
					return this.edges;
				}, g.prototype.getChild = function() {
					return this.child;
				}, g.prototype.getOwner = function() {
					return this.owner;
				}, g.prototype.getWidth = function() {
					return this.rect.width;
				}, g.prototype.setWidth = function(t) {
					this.rect.width = t;
				}, g.prototype.getHeight = function() {
					return this.rect.height;
				}, g.prototype.setHeight = function(t) {
					this.rect.height = t;
				}, g.prototype.getCenterX = function() {
					return this.rect.x + this.rect.width / 2;
				}, g.prototype.getCenterY = function() {
					return this.rect.y + this.rect.height / 2;
				}, g.prototype.getCenter = function() {
					return new l(this.rect.x + this.rect.width / 2, this.rect.y + this.rect.height / 2);
				}, g.prototype.getLocation = function() {
					return new l(this.rect.x, this.rect.y);
				}, g.prototype.getRect = function() {
					return this.rect;
				}, g.prototype.getDiagonal = function() {
					return Math.sqrt(this.rect.width * this.rect.width + this.rect.height * this.rect.height);
				}, g.prototype.getHalfTheDiagonal = function() {
					return Math.sqrt(this.rect.height * this.rect.height + this.rect.width * this.rect.width) / 2;
				}, g.prototype.setRect = function(t, e) {
					this.rect.x = t.x, this.rect.y = t.y, this.rect.width = e.width, this.rect.height = e.height;
				}, g.prototype.setCenter = function(t, e) {
					this.rect.x = t - this.rect.width / 2, this.rect.y = e - this.rect.height / 2;
				}, g.prototype.setLocation = function(t, e) {
					this.rect.x = t, this.rect.y = e;
				}, g.prototype.moveBy = function(t, e) {
					this.rect.x += t, this.rect.y += e;
				}, g.prototype.getEdgeListToNode = function(t) {
					var e = [], i = this;
					return i.edges.forEach(function(r) {
						if (r.target == t) {
							if (r.source != i) throw "Incorrect edge source!";
							e.push(r);
						}
					}), e;
				}, g.prototype.getEdgesBetween = function(t) {
					var e = [], i = this;
					return i.edges.forEach(function(r) {
						if (r.source != i && r.target != i) throw "Incorrect edge source and/or target";
						(r.target == t || r.source == t) && e.push(r);
					}), e;
				}, g.prototype.getNeighborsList = function() {
					var t = /* @__PURE__ */ new Set(), e = this;
					return e.edges.forEach(function(i) {
						if (i.source == e) t.add(i.target);
						else {
							if (i.target != e) throw "Incorrect incidency!";
							t.add(i.source);
						}
					}), t;
				}, g.prototype.withChildren = function() {
					var t = /* @__PURE__ */ new Set();
					if (t.add(this), null != this.child) for (var e = this.child.getNodes(), i = 0; i < e.length; i++) e[i].withChildren().forEach(function(e) {
						t.add(e);
					});
					return t;
				}, g.prototype.getNoOfChildren = function() {
					var t = 0;
					if (null == this.child) t = 1;
					else for (var e = this.child.getNodes(), i = 0; i < e.length; i++) t += e[i].getNoOfChildren();
					return 0 == t && (t = 1), t;
				}, g.prototype.getEstimatedSize = function() {
					if (this.estimatedSize == o.MIN_VALUE) throw "assert failed";
					return this.estimatedSize;
				}, g.prototype.calcEstimatedSize = function() {
					return null == this.child ? this.estimatedSize = (this.rect.width + this.rect.height) / 2 : (this.estimatedSize = this.child.calcEstimatedSize(), this.rect.width = this.estimatedSize, this.rect.height = this.estimatedSize, this.estimatedSize);
				}, g.prototype.scatter = function() {
					var t, e, i = -a.INITIAL_WORLD_BOUNDARY, r = a.INITIAL_WORLD_BOUNDARY;
					t = a.WORLD_CENTER_X + h.nextDouble() * (r - i) + i;
					var n = -a.INITIAL_WORLD_BOUNDARY, o = a.INITIAL_WORLD_BOUNDARY;
					e = a.WORLD_CENTER_Y + h.nextDouble() * (o - n) + n, this.rect.x = t, this.rect.y = e;
				}, g.prototype.updateBounds = function() {
					if (null == this.getChild()) throw "assert failed";
					if (0 != this.getChild().getNodes().length) {
						var t = this.getChild();
						if (t.updateBounds(!0), this.rect.x = t.getLeft(), this.rect.y = t.getTop(), this.setWidth(t.getRight() - t.getLeft()), this.setHeight(t.getBottom() - t.getTop()), a.NODE_DIMENSIONS_INCLUDE_LABELS) {
							var e = t.getRight() - t.getLeft(), i = t.getBottom() - t.getTop();
							this.labelWidth > e && (this.rect.x -= (this.labelWidth - e) / 2, this.setWidth(this.labelWidth)), this.labelHeight > i && ("center" == this.labelPos ? this.rect.y -= (this.labelHeight - i) / 2 : "top" == this.labelPos && (this.rect.y -= this.labelHeight - i), this.setHeight(this.labelHeight));
						}
					}
				}, g.prototype.getInclusionTreeDepth = function() {
					if (this.inclusionTreeDepth == o.MAX_VALUE) throw "assert failed";
					return this.inclusionTreeDepth;
				}, g.prototype.transform = function(t) {
					var e = this.rect.x;
					e > a.WORLD_BOUNDARY ? e = a.WORLD_BOUNDARY : e < -a.WORLD_BOUNDARY && (e = -a.WORLD_BOUNDARY);
					var i = this.rect.y;
					i > a.WORLD_BOUNDARY ? i = a.WORLD_BOUNDARY : i < -a.WORLD_BOUNDARY && (i = -a.WORLD_BOUNDARY);
					var r = new l(e, i), n = t.inverseTransformPoint(r);
					this.setLocation(n.x, n.y);
				}, g.prototype.getLeft = function() {
					return this.rect.x;
				}, g.prototype.getRight = function() {
					return this.rect.x + this.rect.width;
				}, g.prototype.getTop = function() {
					return this.rect.y;
				}, g.prototype.getBottom = function() {
					return this.rect.y + this.rect.height;
				}, g.prototype.getParent = function() {
					return null == this.owner ? null : this.owner.getParent();
				}, t.exports = g;
			},
			function(t, e, i) {
				function n(t, e) {
					null == t && null == e ? (this.x = 0, this.y = 0) : (this.x = t, this.y = e);
				}
				r(n, "PointD"), n.prototype.getX = function() {
					return this.x;
				}, n.prototype.getY = function() {
					return this.y;
				}, n.prototype.setX = function(t) {
					this.x = t;
				}, n.prototype.setY = function(t) {
					this.y = t;
				}, n.prototype.getDifference = function(t) {
					return new DimensionD(this.x - t.x, this.y - t.y);
				}, n.prototype.getCopy = function() {
					return new n(this.x, this.y);
				}, n.prototype.translate = function(t) {
					return this.x += t.width, this.y += t.height, this;
				}, t.exports = n;
			},
			function(t, e, i) {
				var n = i(2), o = i(10), s = i(0), a = i(6), h = i(3), l = i(1), g = i(13), u = i(12), c = i(11);
				function d(t, e, i) {
					n.call(this, i), this.estimatedSize = o.MIN_VALUE, this.margin = s.DEFAULT_GRAPH_MARGIN, this.edges = [], this.nodes = [], this.isConnected = !1, this.parent = t, null != e && e instanceof a ? this.graphManager = e : null != e && e instanceof Layout && (this.graphManager = e.graphManager);
				}
				for (var p in r(d, "LGraph"), d.prototype = Object.create(n.prototype), n) d[p] = n[p];
				d.prototype.getNodes = function() {
					return this.nodes;
				}, d.prototype.getEdges = function() {
					return this.edges;
				}, d.prototype.getGraphManager = function() {
					return this.graphManager;
				}, d.prototype.getParent = function() {
					return this.parent;
				}, d.prototype.getLeft = function() {
					return this.left;
				}, d.prototype.getRight = function() {
					return this.right;
				}, d.prototype.getTop = function() {
					return this.top;
				}, d.prototype.getBottom = function() {
					return this.bottom;
				}, d.prototype.isConnected = function() {
					return this.isConnected;
				}, d.prototype.add = function(t, e, i) {
					if (null == e && null == i) {
						if (null == this.graphManager) throw "Graph has no graph mgr!";
						if (this.getNodes().indexOf(t) > -1) throw "Node already in graph!";
						return t.owner = this, this.getNodes().push(t), t;
					}
					if (!(this.getNodes().indexOf(e) > -1 && this.getNodes().indexOf(i) > -1)) throw "Source or target not in graph!";
					if (e.owner != i.owner || e.owner != this) throw "Both owners must be this graph!";
					return e.owner != i.owner ? null : (t.source = e, t.target = i, t.isInterGraph = !1, this.getEdges().push(t), e.edges.push(t), i != e && i.edges.push(t), t);
				}, d.prototype.remove = function(t) {
					if (t instanceof h) {
						if (null == t) throw "Node is null!";
						if (null == t.owner || t.owner != this) throw "Owner graph is invalid!";
						if (null == this.graphManager) throw "Owner graph manager is invalid!";
						for (var e, i = t.edges.slice(), r = i.length, n = 0; n < r; n++) (e = i[n]).isInterGraph ? this.graphManager.remove(e) : e.source.owner.remove(e);
						var o = this.nodes.indexOf(t);
						if (-1 == o) throw "Node not in owner node list!";
						this.nodes.splice(o, 1);
					} else if (t instanceof l) {
						var e = t;
						if (null == e) throw "Edge is null!";
						if (null == e.source || null == e.target) throw "Source and/or target is null!";
						if (null == e.source.owner || null == e.target.owner || e.source.owner != this || e.target.owner != this) throw "Source and/or target owner is invalid!";
						var s = e.source.edges.indexOf(e), a = e.target.edges.indexOf(e);
						if (!(s > -1 && a > -1)) throw "Source and/or target doesn't know this edge!";
						e.source.edges.splice(s, 1), e.target != e.source && e.target.edges.splice(a, 1);
						var o = e.source.owner.getEdges().indexOf(e);
						if (-1 == o) throw "Not in owner's edge list!";
						e.source.owner.getEdges().splice(o, 1);
					}
				}, d.prototype.updateLeftTop = function() {
					for (var t, e, i, r = o.MAX_VALUE, n = o.MAX_VALUE, s = this.getNodes(), a = s.length, h = 0; h < a; h++) {
						var l = s[h];
						t = l.getTop(), e = l.getLeft(), r > t && (r = t), n > e && (n = e);
					}
					return r == o.MAX_VALUE ? null : (i = null != s[0].getParent().paddingLeft ? s[0].getParent().paddingLeft : this.margin, this.left = n - i, this.top = r - i, new u(this.left, this.top));
				}, d.prototype.updateBounds = function(t) {
					for (var e, i, r, n, s, a = o.MAX_VALUE, h = -o.MAX_VALUE, l = o.MAX_VALUE, u = -o.MAX_VALUE, c = this.nodes, d = c.length, p = 0; p < d; p++) {
						var f = c[p];
						t && null != f.child && f.updateBounds(), e = f.getLeft(), i = f.getRight(), r = f.getTop(), n = f.getBottom(), a > e && (a = e), h < i && (h = i), l > r && (l = r), u < n && (u = n);
					}
					var y = new g(a, l, h - a, u - l);
					a == o.MAX_VALUE && (this.left = this.parent.getLeft(), this.right = this.parent.getRight(), this.top = this.parent.getTop(), this.bottom = this.parent.getBottom()), s = null != c[0].getParent().paddingLeft ? c[0].getParent().paddingLeft : this.margin, this.left = y.x - s, this.right = y.x + y.width + s, this.top = y.y - s, this.bottom = y.y + y.height + s;
				}, d.calculateBounds = function(t) {
					for (var e, i, r, n, s = o.MAX_VALUE, a = -o.MAX_VALUE, h = o.MAX_VALUE, l = -o.MAX_VALUE, u = t.length, c = 0; c < u; c++) {
						var d = t[c];
						e = d.getLeft(), i = d.getRight(), r = d.getTop(), n = d.getBottom(), s > e && (s = e), a < i && (a = i), h > r && (h = r), l < n && (l = n);
					}
					return new g(s, h, a - s, l - h);
				}, d.prototype.getInclusionTreeDepth = function() {
					return this == this.graphManager.getRoot() ? 1 : this.parent.getInclusionTreeDepth();
				}, d.prototype.getEstimatedSize = function() {
					if (this.estimatedSize == o.MIN_VALUE) throw "assert failed";
					return this.estimatedSize;
				}, d.prototype.calcEstimatedSize = function() {
					for (var t = 0, e = this.nodes, i = e.length, r = 0; r < i; r++) t += e[r].calcEstimatedSize();
					return 0 == t ? this.estimatedSize = s.EMPTY_COMPOUND_NODE_SIZE : this.estimatedSize = t / Math.sqrt(this.nodes.length), this.estimatedSize;
				}, d.prototype.updateConnected = function() {
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
						for (var s = e.length, a = 0; a < s; a++) null == (i = e[a].getOtherEndInGraph(o, this)) || n.has(i) || i.withChildren().forEach(function(t) {
							r.push(t), n.add(t);
						});
					}
					if (this.isConnected = !1, n.size >= this.nodes.length) {
						var h = 0;
						n.forEach(function(e) {
							e.owner == t && h++;
						}), h == this.nodes.length && (this.isConnected = !0);
					}
				}, t.exports = d;
			},
			function(t, e, i) {
				var n, o = i(1);
				function s(t) {
					n = i(5), this.layout = t, this.graphs = [], this.edges = [];
				}
				r(s, "LGraphManager"), s.prototype.addRoot = function() {
					var t = this.layout.newGraph(), e = this.layout.newNode(null), i = this.add(t, e);
					return this.setRootGraph(i), this.rootGraph;
				}, s.prototype.add = function(t, e, i, r, n) {
					if (null == i && null == r && null == n) {
						if (null == t) throw "Graph is null!";
						if (null == e) throw "Parent node is null!";
						if (this.graphs.indexOf(t) > -1) throw "Graph already in this graph mgr!";
						if (this.graphs.push(t), null != t.parent) throw "Already has a parent!";
						if (null != e.child) throw "Already has a child!";
						return t.parent = e, e.child = t, t;
					}
					n = i, r = e, i = t;
					var o = r.getOwner(), s = n.getOwner();
					if (null == o || o.getGraphManager() != this) throw "Source not in this graph mgr!";
					if (null == s || s.getGraphManager() != this) throw "Target not in this graph mgr!";
					if (o == s) return i.isInterGraph = !1, o.add(i, r, n);
					if (i.isInterGraph = !0, i.source = r, i.target = n, this.edges.indexOf(i) > -1) throw "Edge already in inter-graph edge list!";
					if (this.edges.push(i), null == i.source || null == i.target) throw "Edge source and/or target is null!";
					if (-1 != i.source.edges.indexOf(i) || -1 != i.target.edges.indexOf(i)) throw "Edge already in source and/or target incidency list!";
					return i.source.edges.push(i), i.target.edges.push(i), i;
				}, s.prototype.remove = function(t) {
					if (t instanceof n) {
						if (t.getGraphManager() != this) throw "Graph not in this graph mgr";
						if (t != this.rootGraph && (null == t.parent || t.parent.graphManager != this)) throw "Invalid parent node!";
						var e = [];
						e = e.concat(t.getEdges());
						for (var i, r, s = e.length, a = 0; a < s; a++) r = e[a], t.remove(r);
						var h = [];
						s = (h = h.concat(t.getNodes())).length;
						for (var a = 0; a < s; a++) i = h[a], t.remove(i);
						t == this.rootGraph && this.setRootGraph(null);
						var l = this.graphs.indexOf(t);
						this.graphs.splice(l, 1), t.parent = null;
					} else if (t instanceof o) {
						if (null == (r = t)) throw "Edge is null!";
						if (!r.isInterGraph) throw "Not an inter-graph edge!";
						if (null == r.source || null == r.target) throw "Source and/or target is null!";
						if (-1 == r.source.edges.indexOf(r) || -1 == r.target.edges.indexOf(r)) throw "Source and/or target doesn't know this edge!";
						var l = r.source.edges.indexOf(r);
						if (r.source.edges.splice(l, 1), l = r.target.edges.indexOf(r), r.target.edges.splice(l, 1), null == r.source.owner || null == r.source.owner.getGraphManager()) throw "Edge owner graph or owner graph manager is null!";
						if (-1 == r.source.owner.getGraphManager().edges.indexOf(r)) throw "Not in owner graph manager's edge list!";
						var l = r.source.owner.getGraphManager().edges.indexOf(r);
						r.source.owner.getGraphManager().edges.splice(l, 1);
					}
				}, s.prototype.updateBounds = function() {
					this.rootGraph.updateBounds(!0);
				}, s.prototype.getGraphs = function() {
					return this.graphs;
				}, s.prototype.getAllNodes = function() {
					if (null == this.allNodes) {
						for (var t = [], e = this.getGraphs(), i = e.length, r = 0; r < i; r++) t = t.concat(e[r].getNodes());
						this.allNodes = t;
					}
					return this.allNodes;
				}, s.prototype.resetAllNodes = function() {
					this.allNodes = null;
				}, s.prototype.resetAllEdges = function() {
					this.allEdges = null;
				}, s.prototype.resetAllNodesToApplyGravitation = function() {
					this.allNodesToApplyGravitation = null;
				}, s.prototype.getAllEdges = function() {
					if (null == this.allEdges) {
						for (var t = [], e = this.getGraphs(), i = (e.length, 0); i < e.length; i++) t = t.concat(e[i].getEdges());
						t = t.concat(this.edges), this.allEdges = t;
					}
					return this.allEdges;
				}, s.prototype.getAllNodesToApplyGravitation = function() {
					return this.allNodesToApplyGravitation;
				}, s.prototype.setAllNodesToApplyGravitation = function(t) {
					if (null != this.allNodesToApplyGravitation) throw "assert failed";
					this.allNodesToApplyGravitation = t;
				}, s.prototype.getRoot = function() {
					return this.rootGraph;
				}, s.prototype.setRootGraph = function(t) {
					if (t.getGraphManager() != this) throw "Root not in this graph mgr!";
					this.rootGraph = t, t.parent ??= this.layout.newNode("Root node");
				}, s.prototype.getLayout = function() {
					return this.layout;
				}, s.prototype.isOneAncestorOfOther = function(t, e) {
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
				}, s.prototype.calcLowestCommonAncestors = function() {
					for (var t, e, i, r, n, o = this.getAllEdges(), s = o.length, a = 0; a < s; a++) {
						if (e = (t = o[a]).source, i = t.target, t.lca = null, t.sourceInLca = e, t.targetInLca = i, e == i) {
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
				}, s.prototype.calcLowestCommonAncestor = function(t, e) {
					if (t == e) return t.getOwner();
					for (var i = t.getOwner(); null != i;) {
						for (var r = e.getOwner(); null != r;) {
							if (r == i) return r;
							r = r.getParent().getOwner();
						}
						i = i.getParent().getOwner();
					}
					return i;
				}, s.prototype.calcInclusionTreeDepths = function(t, e) {
					null == t && null == e && (t = this.rootGraph, e = 1);
					for (var i, r = t.getNodes(), n = r.length, o = 0; o < n; o++) (i = r[o]).inclusionTreeDepth = e, null != i.child && this.calcInclusionTreeDepths(i.child, e + 1);
				}, s.prototype.includesInvalidEdge = function() {
					for (var t, e = this.edges.length, i = 0; i < e; i++) if (t = this.edges[i], this.isOneAncestorOfOther(t.source, t.target)) return !0;
					return !1;
				}, t.exports = s;
			},
			function(t, e, i) {
				var n = i(0);
				function o() {}
				for (var s in r(o, "FDLayoutConstants"), n) o[s] = n[s];
				o.MAX_ITERATIONS = 2500, o.DEFAULT_EDGE_LENGTH = 50, o.DEFAULT_SPRING_STRENGTH = .45, o.DEFAULT_REPULSION_STRENGTH = 4500, o.DEFAULT_GRAVITY_STRENGTH = .4, o.DEFAULT_COMPOUND_GRAVITY_STRENGTH = 1, o.DEFAULT_GRAVITY_RANGE_FACTOR = 3.8, o.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = 1.5, o.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION = !0, o.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION = !0, o.DEFAULT_COOLING_FACTOR_INCREMENTAL = .3, o.COOLING_ADAPTATION_FACTOR = .33, o.ADAPTATION_LOWER_NODE_LIMIT = 1e3, o.ADAPTATION_UPPER_NODE_LIMIT = 5e3, o.MAX_NODE_DISPLACEMENT_INCREMENTAL = 100, o.MAX_NODE_DISPLACEMENT = 3 * o.MAX_NODE_DISPLACEMENT_INCREMENTAL, o.MIN_REPULSION_DIST = o.DEFAULT_EDGE_LENGTH / 10, o.CONVERGENCE_CHECK_PERIOD = 100, o.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = .1, o.MIN_EDGE_LENGTH = 1, o.GRID_CALCULATION_CHECK_PERIOD = 10, t.exports = o;
			},
			function(t, e, i) {
				var n = i(12);
				function o() {}
				r(o, "IGeometry"), o.calcSeparationAmount = function(t, e, i, r) {
					if (!t.intersects(e)) throw "assert failed";
					var n = [, ,];
					this.decideDirectionsForOverlappingNodes(t, e, n), i[0] = Math.min(t.getRight(), e.getRight()) - Math.max(t.x, e.x), i[1] = Math.min(t.getBottom(), e.getBottom()) - Math.max(t.y, e.y), t.getX() <= e.getX() && t.getRight() >= e.getRight() ? i[0] += Math.min(e.getX() - t.getX(), t.getRight() - e.getRight()) : e.getX() <= t.getX() && e.getRight() >= t.getRight() && (i[0] += Math.min(t.getX() - e.getX(), e.getRight() - t.getRight())), t.getY() <= e.getY() && t.getBottom() >= e.getBottom() ? i[1] += Math.min(e.getY() - t.getY(), t.getBottom() - e.getBottom()) : e.getY() <= t.getY() && e.getBottom() >= t.getBottom() && (i[1] += Math.min(t.getY() - e.getY(), e.getBottom() - t.getBottom()));
					var o = Math.abs((e.getCenterY() - t.getCenterY()) / (e.getCenterX() - t.getCenterX()));
					e.getCenterY() === t.getCenterY() && e.getCenterX() === t.getCenterX() && (o = 1);
					var s = o * i[0], a = i[1] / o;
					i[0] < a ? a = i[0] : s = i[1], i[0] = -1 * n[0] * (a / 2 + r), i[1] = -1 * n[1] * (s / 2 + r);
				}, o.decideDirectionsForOverlappingNodes = function(t, e, i) {
					t.getCenterX() < e.getCenterX() ? i[0] = -1 : i[0] = 1, t.getCenterY() < e.getCenterY() ? i[1] = -1 : i[1] = 1;
				}, o.getIntersection2 = function(t, e, i) {
					var r = t.getCenterX(), n = t.getCenterY(), o = e.getCenterX(), s = e.getCenterY();
					if (t.intersects(e)) return i[0] = r, i[1] = n, i[2] = o, i[3] = s, !0;
					var a = t.getX(), h = t.getY(), l = t.getRight(), g = t.getX(), u = t.getBottom(), c = t.getRight(), d = t.getWidthHalf(), p = t.getHeightHalf(), f = e.getX(), y = e.getY(), E = e.getRight(), v = e.getX(), A = e.getBottom(), _ = e.getRight(), N = e.getWidthHalf(), T = e.getHeightHalf(), L = !1, m = !1;
					if (r === o) {
						if (n > s) return i[0] = r, i[1] = h, i[2] = o, i[3] = A, !1;
						if (n < s) return i[0] = r, i[1] = u, i[2] = o, i[3] = y, !1;
					} else if (n === s) {
						if (r > o) return i[0] = a, i[1] = n, i[2] = E, i[3] = s, !1;
						if (r < o) return i[0] = l, i[1] = n, i[2] = f, i[3] = s, !1;
					} else {
						var O = t.height / t.width, D = e.height / e.width, I = (s - n) / (o - r), w = void 0, C = void 0, R = void 0, M = void 0, G = void 0, x = void 0;
						if (-O === I ? (r > o ? (i[0] = g, i[1] = u) : (i[0] = l, i[1] = h), L = !0) : O === I && (r > o ? (i[0] = a, i[1] = h) : (i[0] = c, i[1] = u), L = !0), -D === I ? (o > r ? (i[2] = v, i[3] = A) : (i[2] = E, i[3] = y), m = !0) : D === I && (o > r ? (i[2] = f, i[3] = y) : (i[2] = _, i[3] = A), m = !0), L && m) return !1;
						if (r > o ? n > s ? (w = this.getCardinalDirection(O, I, 4), C = this.getCardinalDirection(D, I, 2)) : (w = this.getCardinalDirection(-O, I, 3), C = this.getCardinalDirection(-D, I, 1)) : n > s ? (w = this.getCardinalDirection(-O, I, 1), C = this.getCardinalDirection(-D, I, 3)) : (w = this.getCardinalDirection(O, I, 2), C = this.getCardinalDirection(D, I, 4)), !L) switch (w) {
							case 1:
								M = h, R = r + -p / I, i[0] = R, i[1] = M;
								break;
							case 2:
								R = c, M = n + d * I, i[0] = R, i[1] = M;
								break;
							case 3:
								M = u, R = r + p / I, i[0] = R, i[1] = M;
								break;
							case 4: R = g, M = n + -d * I, i[0] = R, i[1] = M;
						}
						if (!m) switch (C) {
							case 1:
								x = y, G = o + -T / I, i[2] = G, i[3] = x;
								break;
							case 2:
								G = _, x = s + N * I, i[2] = G, i[3] = x;
								break;
							case 3:
								x = A, G = o + T / I, i[2] = G, i[3] = x;
								break;
							case 4: G = v, x = s + -N * I, i[2] = G, i[3] = x;
						}
					}
					return !1;
				}, o.getCardinalDirection = function(t, e, i) {
					return t > e ? i : 1 + i % 4;
				}, o.getIntersection = function(t, e, i, r) {
					if (null == r) return this.getIntersection2(t, e, i);
					var o = t.x, s = t.y, a = e.x, h = e.y, l = i.x, g = i.y, u = r.x, c = r.y, d = void 0, p = void 0, f = void 0, y = void 0, E = void 0, v = void 0, A = void 0;
					return d = h - s, f = o - a, E = a * s - o * h, p = c - g, y = l - u, v = u * g - l * c, 0 == (A = d * y - p * f) ? null : new n((f * v - y * E) / A, (p * E - d * v) / A);
				}, o.angleOfVector = function(t, e, i, r) {
					var n = void 0;
					return t !== i ? (n = Math.atan((r - e) / (i - t)), i < t ? n += Math.PI : r < e && (n += this.TWO_PI)) : n = r < e ? this.ONE_AND_HALF_PI : this.HALF_PI, n;
				}, o.doIntersect = function(t, e, i, r) {
					var n = t.x, o = t.y, s = e.x, a = e.y, h = i.x, l = i.y, g = r.x, u = r.y, c = (s - n) * (u - l) - (g - h) * (a - o);
					if (0 === c) return !1;
					var d = ((u - l) * (g - n) + (h - g) * (u - o)) / c, p = ((o - a) * (g - n) + (s - n) * (u - o)) / c;
					return 0 < d && d < 1 && 0 < p && p < 1;
				}, o.HALF_PI = .5 * Math.PI, o.ONE_AND_HALF_PI = 1.5 * Math.PI, o.TWO_PI = 2 * Math.PI, o.THREE_PI = 3 * Math.PI, t.exports = o;
			},
			function(t, e, i) {
				function n() {}
				r(n, "IMath"), n.sign = function(t) {
					return t > 0 ? 1 : t < 0 ? -1 : 0;
				}, n.floor = function(t) {
					return t < 0 ? Math.ceil(t) : Math.floor(t);
				}, n.ceil = function(t) {
					return t < 0 ? Math.floor(t) : Math.ceil(t);
				}, t.exports = n;
			},
			function(t, e, i) {
				function n() {}
				r(n, "Integer"), n.MAX_VALUE = 2147483647, n.MIN_VALUE = -2147483648, t.exports = n;
			},
			function(t, e, i) {
				var n = function() {
					function t(t, e) {
						for (var i = 0; i < e.length; i++) {
							var r = e[i];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
						}
					}
					return r(t, "defineProperties"), function(e, i, r) {
						return i && t(e.prototype, i), r && t(e, r), e;
					};
				}();
				function o(t, e) {
					if (!(t instanceof e)) throw TypeError("Cannot call a class as a function");
				}
				r(o, "_classCallCheck");
				var s = r(function(t) {
					return {
						value: t,
						next: null,
						prev: null
					};
				}, "nodeFrom"), a = r(function(t, e, i, r) {
					return null !== t ? t.next = e : r.head = e, null !== i ? i.prev = e : r.tail = e, e.prev = t, e.next = i, r.length++, e;
				}, "add"), h = r(function(t, e) {
					var i = t.prev, r = t.next;
					return null !== i ? i.next = r : e.head = r, null !== r ? r.prev = i : e.tail = i, t.prev = t.next = null, e.length--, t;
				}, "_remove");
				t.exports = function() {
					function t(e) {
						var i = this;
						o(this, t), this.length = 0, this.head = null, this.tail = null, e?.forEach(function(t) {
							return i.push(t);
						});
					}
					return r(t, "LinkedList"), n(t, [
						{
							key: "size",
							value: r(function() {
								return this.length;
							}, "size")
						},
						{
							key: "insertBefore",
							value: r(function(t, e) {
								return a(e.prev, s(t), e, this);
							}, "insertBefore")
						},
						{
							key: "insertAfter",
							value: r(function(t, e) {
								return a(e, s(t), e.next, this);
							}, "insertAfter")
						},
						{
							key: "insertNodeBefore",
							value: r(function(t, e) {
								return a(e.prev, t, e, this);
							}, "insertNodeBefore")
						},
						{
							key: "insertNodeAfter",
							value: r(function(t, e) {
								return a(e, t, e.next, this);
							}, "insertNodeAfter")
						},
						{
							key: "push",
							value: r(function(t) {
								return a(this.tail, s(t), null, this);
							}, "push")
						},
						{
							key: "unshift",
							value: r(function(t) {
								return a(null, s(t), this.head, this);
							}, "unshift")
						},
						{
							key: "remove",
							value: r(function(t) {
								return h(t, this);
							}, "remove")
						},
						{
							key: "pop",
							value: r(function() {
								return h(this.tail, this).value;
							}, "pop")
						},
						{
							key: "popNode",
							value: r(function() {
								return h(this.tail, this);
							}, "popNode")
						},
						{
							key: "shift",
							value: r(function() {
								return h(this.head, this).value;
							}, "shift")
						},
						{
							key: "shiftNode",
							value: r(function() {
								return h(this.head, this);
							}, "shiftNode")
						},
						{
							key: "get_object_at",
							value: r(function(t) {
								if (t <= this.length()) {
									for (var e = 1, i = this.head; e < t;) i = i.next, e++;
									return i.value;
								}
							}, "get_object_at")
						},
						{
							key: "set_object_at",
							value: r(function(t, e) {
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
				function n(t, e, i) {
					this.x = null, this.y = null, null == t && null == e && null == i ? (this.x = 0, this.y = 0) : "number" == typeof t && "number" == typeof e && null == i ? (this.x = t, this.y = e) : "Point" == t.constructor.name && null == e && null == i && (i = t, this.x = i.x, this.y = i.y);
				}
				r(n, "Point"), n.prototype.getX = function() {
					return this.x;
				}, n.prototype.getY = function() {
					return this.y;
				}, n.prototype.getLocation = function() {
					return new n(this.x, this.y);
				}, n.prototype.setLocation = function(t, e, i) {
					"Point" == t.constructor.name && null == e && null == i ? (i = t, this.setLocation(i.x, i.y)) : "number" == typeof t && "number" == typeof e && null == i && (parseInt(t) == t && parseInt(e) == e ? this.move(t, e) : (this.x = Math.floor(t + .5), this.y = Math.floor(e + .5)));
				}, n.prototype.move = function(t, e) {
					this.x = t, this.y = e;
				}, n.prototype.translate = function(t, e) {
					this.x += t, this.y += e;
				}, n.prototype.equals = function(t) {
					return "Point" == t.constructor.name ? this.x == t.x && this.y == t.y : this == t;
				}, n.prototype.toString = function() {
					return new n().constructor.name + "[x=" + this.x + ",y=" + this.y + "]";
				}, t.exports = n;
			},
			function(t, e, i) {
				function n(t, e, i, r) {
					this.x = 0, this.y = 0, this.width = 0, this.height = 0, null != t && null != e && null != i && null != r && (this.x = t, this.y = e, this.width = i, this.height = r);
				}
				r(n, "RectangleD"), n.prototype.getX = function() {
					return this.x;
				}, n.prototype.setX = function(t) {
					this.x = t;
				}, n.prototype.getY = function() {
					return this.y;
				}, n.prototype.setY = function(t) {
					this.y = t;
				}, n.prototype.getWidth = function() {
					return this.width;
				}, n.prototype.setWidth = function(t) {
					this.width = t;
				}, n.prototype.getHeight = function() {
					return this.height;
				}, n.prototype.setHeight = function(t) {
					this.height = t;
				}, n.prototype.getRight = function() {
					return this.x + this.width;
				}, n.prototype.getBottom = function() {
					return this.y + this.height;
				}, n.prototype.intersects = function(t) {
					return !(this.getRight() < t.x || this.getBottom() < t.y || t.getRight() < this.x || t.getBottom() < this.y);
				}, n.prototype.getCenterX = function() {
					return this.x + this.width / 2;
				}, n.prototype.getMinX = function() {
					return this.getX();
				}, n.prototype.getMaxX = function() {
					return this.getX() + this.width;
				}, n.prototype.getCenterY = function() {
					return this.y + this.height / 2;
				}, n.prototype.getMinY = function() {
					return this.getY();
				}, n.prototype.getMaxY = function() {
					return this.getY() + this.height;
				}, n.prototype.getWidthHalf = function() {
					return this.width / 2;
				}, n.prototype.getHeightHalf = function() {
					return this.height / 2;
				}, t.exports = n;
			},
			function(t, e, i) {
				var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
					return typeof t;
				} : function(t) {
					return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
				};
				function o() {}
				r(o, "UniqueIDGeneretor"), o.lastID = 0, o.createID = function(t) {
					return o.isPrimitive(t) ? t : (t.uniqueID ?? (t.uniqueID = o.getString(), o.lastID++), t.uniqueID);
				}, o.getString = function(t) {
					return "Object#" + (t ??= o.lastID);
				}, o.isPrimitive = function(t) {
					var e = typeof t > "u" ? "undefined" : n(t);
					return null == t || "object" != e && "function" != e;
				}, t.exports = o;
			},
			function(t, e, i) {
				function n(t) {
					if (!Array.isArray(t)) return Array.from(t);
					for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
					return i;
				}
				r(n, "_toConsumableArray");
				var o = i(0), s = i(6), a = i(3), h = i(1), l = i(5), g = i(4), u = i(17), c = i(27);
				function d(t) {
					c.call(this), this.layoutQuality = o.QUALITY, this.createBendsAsNeeded = o.DEFAULT_CREATE_BENDS_AS_NEEDED, this.incremental = o.DEFAULT_INCREMENTAL, this.animationOnLayout = o.DEFAULT_ANIMATION_ON_LAYOUT, this.animationDuringLayout = o.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = o.DEFAULT_ANIMATION_PERIOD, this.uniformLeafNodeSizes = o.DEFAULT_UNIFORM_LEAF_NODE_SIZES, this.edgeToDummyNodes = /* @__PURE__ */ new Map(), this.graphManager = new s(this), this.isLayoutFinished = !1, this.isSubLayout = !1, this.isRemoteUse = !1, null != t && (this.isRemoteUse = t);
				}
				r(d, "Layout"), d.RANDOM_SEED = 1, d.prototype = Object.create(c.prototype), d.prototype.getGraphManager = function() {
					return this.graphManager;
				}, d.prototype.getAllNodes = function() {
					return this.graphManager.getAllNodes();
				}, d.prototype.getAllEdges = function() {
					return this.graphManager.getAllEdges();
				}, d.prototype.getAllNodesToApplyGravitation = function() {
					return this.graphManager.getAllNodesToApplyGravitation();
				}, d.prototype.newGraphManager = function() {
					var t = new s(this);
					return this.graphManager = t, t;
				}, d.prototype.newGraph = function(t) {
					return new l(null, this.graphManager, t);
				}, d.prototype.newNode = function(t) {
					return new a(this.graphManager, t);
				}, d.prototype.newEdge = function(t) {
					return new h(null, null, t);
				}, d.prototype.checkLayoutSuccess = function() {
					return null == this.graphManager.getRoot() || 0 == this.graphManager.getRoot().getNodes().length || this.graphManager.includesInvalidEdge();
				}, d.prototype.runLayout = function() {
					var t;
					return this.isLayoutFinished = !1, this.tilingPreLayout && this.tilingPreLayout(), this.initParameters(), t = !this.checkLayoutSuccess() && this.layout(), "during" !== o.ANIMATE && (t && (this.isSubLayout || this.doPostLayout()), this.tilingPostLayout && this.tilingPostLayout(), this.isLayoutFinished = !0, t);
				}, d.prototype.doPostLayout = function() {
					this.incremental || this.transform(), this.update();
				}, d.prototype.update2 = function() {
					if (this.createBendsAsNeeded && (this.createBendpointsFromDummyNodes(), this.graphManager.resetAllEdges()), !this.isRemoteUse) {
						for (var t = this.graphManager.getAllEdges(), e = 0; e < t.length; e++) t[e];
						for (var i = this.graphManager.getRoot().getNodes(), e = 0; e < i.length; e++) i[e];
						this.update(this.graphManager.getRoot());
					}
				}, d.prototype.update = function(t) {
					if (null == t) this.update2();
					else if (t instanceof a) {
						if (null != t.getChild()) for (var e = t.getChild().getNodes(), i = 0; i < e.length; i++) update(e[i]);
						null != t.vGraphObject && t.vGraphObject.update(t);
					} else t instanceof h ? null != t.vGraphObject && t.vGraphObject.update(t) : t instanceof l && null != t.vGraphObject && t.vGraphObject.update(t);
				}, d.prototype.initParameters = function() {
					this.isSubLayout || (this.layoutQuality = o.QUALITY, this.animationDuringLayout = o.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = o.DEFAULT_ANIMATION_PERIOD, this.animationOnLayout = o.DEFAULT_ANIMATION_ON_LAYOUT, this.incremental = o.DEFAULT_INCREMENTAL, this.createBendsAsNeeded = o.DEFAULT_CREATE_BENDS_AS_NEEDED, this.uniformLeafNodeSizes = o.DEFAULT_UNIFORM_LEAF_NODE_SIZES), this.animationDuringLayout && (this.animationOnLayout = !1);
				}, d.prototype.transform = function(t) {
					if (null == t) this.transform(new g(0, 0));
					else {
						var e = new u(), i = this.graphManager.getRoot().updateLeftTop();
						if (null != i) {
							e.setWorldOrgX(t.x), e.setWorldOrgY(t.y), e.setDeviceOrgX(i.x), e.setDeviceOrgY(i.y);
							for (var r = this.getAllNodes(), n = 0; n < r.length; n++) r[n].transform(e);
						}
					}
				}, d.prototype.positionNodesRandomly = function(t) {
					if (null == t) this.positionNodesRandomly(this.getGraphManager().getRoot()), this.getGraphManager().getRoot().updateBounds(!0);
					else for (var e, i, r = t.getNodes(), n = 0; n < r.length; n++) null == (i = (e = r[n]).getChild()) || 0 == i.getNodes().length ? e.scatter() : (this.positionNodesRandomly(i), e.updateBounds());
				}, d.prototype.getFlatForest = function() {
					for (var t = [], e = !0, i = this.graphManager.getRoot().getNodes(), r = !0, o = 0; o < i.length; o++) null != i[o].getChild() && (r = !1);
					if (!r) return t;
					var s = /* @__PURE__ */ new Set(), a = [], h = /* @__PURE__ */ new Map(), l = [];
					for (l = l.concat(i); l.length > 0 && e;) {
						for (a.push(l[0]); a.length > 0 && e;) {
							var g = a[0];
							a.splice(0, 1), s.add(g);
							for (var u = g.getEdges(), o = 0; o < u.length; o++) {
								var c = u[o].getOtherEnd(g);
								if (h.get(g) != c) if (s.has(c)) {
									e = !1;
									break;
								} else a.push(c), h.set(c, g);
							}
						}
						if (e) {
							var d = [].concat(n(s));
							t.push(d);
							for (var o = 0; o < d.length; o++) {
								var p = d[o], f = l.indexOf(p);
								f > -1 && l.splice(f, 1);
							}
							s = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Map();
						} else t = [];
					}
					return t;
				}, d.prototype.createDummyNodesForBendpoints = function(t) {
					for (var e = [], i = t.source, r = this.graphManager.calcLowestCommonAncestor(t.source, t.target), n = 0; n < t.bendpoints.length; n++) {
						var o = this.newNode(null);
						o.setRect(new Point(0, 0), new Dimension(1, 1)), r.add(o);
						var s = this.newEdge(null);
						this.graphManager.add(s, i, o), e.add(o), i = o;
					}
					var s = this.newEdge(null);
					return this.graphManager.add(s, i, t.target), this.edgeToDummyNodes.set(t, e), t.isInterGraph() ? this.graphManager.remove(t) : r.remove(t), e;
				}, d.prototype.createBendpointsFromDummyNodes = function() {
					var t = [];
					t = t.concat(this.graphManager.getAllEdges()), t = [].concat(n(this.edgeToDummyNodes.keys())).concat(t);
					for (var e = 0; e < t.length; e++) {
						var i = t[e];
						if (i.bendpoints.length > 0) {
							for (var r = this.edgeToDummyNodes.get(i), o = 0; o < r.length; o++) {
								var s = r[o], a = new g(s.getCenterX(), s.getCenterY()), h = i.bendpoints.get(o);
								h.x = a.x, h.y = a.y, s.getOwner().remove(s);
							}
							this.graphManager.add(i, i.source, i.target);
						}
					}
				}, d.transform = function(t, e, i, r) {
					if (null == i || null == r) return t <= 50 ? (n = 9 * e / 500, o = e / 10) : (n = 9 * e / 50, o = -8 * e), n * t + o;
					var n, o, s = e;
					return t <= 50 ? s -= (e - e / i) / 50 * (50 - t) : s += (e * r - e) / 50 * (t - 50), s;
				}, d.findCenterOfTree = function(t) {
					var e = [];
					e = e.concat(t);
					var i = [], r = /* @__PURE__ */ new Map(), n = !1, o = null;
					(1 == e.length || 2 == e.length) && (n = !0, o = e[0]);
					for (var s = 0; s < e.length; s++) {
						var a = e[s], h = a.getNeighborsList().size;
						r.set(a, a.getNeighborsList().size), 1 == h && i.push(a);
					}
					var l = [];
					for (l = l.concat(i); !n;) {
						var g = [];
						g = g.concat(l), l = [];
						for (var s = 0; s < e.length; s++) {
							var a = e[s], u = e.indexOf(a);
							u >= 0 && e.splice(u, 1), a.getNeighborsList().forEach(function(t) {
								if (0 > i.indexOf(t)) {
									var e = r.get(t) - 1;
									1 == e && l.push(t), r.set(t, e);
								}
							});
						}
						i = i.concat(l), (1 == e.length || 2 == e.length) && (n = !0, o = e[0]);
					}
					return o;
				}, d.prototype.setGraphManager = function(t) {
					this.graphManager = t;
				}, t.exports = d;
			},
			function(t, e, i) {
				function n() {}
				r(n, "RandomSeed"), n.seed = 1, n.x = 0, n.nextDouble = function() {
					return n.x = 1e4 * Math.sin(n.seed++), n.x - Math.floor(n.x);
				}, t.exports = n;
			},
			function(t, e, i) {
				var n = i(4);
				function o(t, e) {
					this.lworldOrgX = 0, this.lworldOrgY = 0, this.ldeviceOrgX = 0, this.ldeviceOrgY = 0, this.lworldExtX = 1, this.lworldExtY = 1, this.ldeviceExtX = 1, this.ldeviceExtY = 1;
				}
				r(o, "Transform"), o.prototype.getWorldOrgX = function() {
					return this.lworldOrgX;
				}, o.prototype.setWorldOrgX = function(t) {
					this.lworldOrgX = t;
				}, o.prototype.getWorldOrgY = function() {
					return this.lworldOrgY;
				}, o.prototype.setWorldOrgY = function(t) {
					this.lworldOrgY = t;
				}, o.prototype.getWorldExtX = function() {
					return this.lworldExtX;
				}, o.prototype.setWorldExtX = function(t) {
					this.lworldExtX = t;
				}, o.prototype.getWorldExtY = function() {
					return this.lworldExtY;
				}, o.prototype.setWorldExtY = function(t) {
					this.lworldExtY = t;
				}, o.prototype.getDeviceOrgX = function() {
					return this.ldeviceOrgX;
				}, o.prototype.setDeviceOrgX = function(t) {
					this.ldeviceOrgX = t;
				}, o.prototype.getDeviceOrgY = function() {
					return this.ldeviceOrgY;
				}, o.prototype.setDeviceOrgY = function(t) {
					this.ldeviceOrgY = t;
				}, o.prototype.getDeviceExtX = function() {
					return this.ldeviceExtX;
				}, o.prototype.setDeviceExtX = function(t) {
					this.ldeviceExtX = t;
				}, o.prototype.getDeviceExtY = function() {
					return this.ldeviceExtY;
				}, o.prototype.setDeviceExtY = function(t) {
					this.ldeviceExtY = t;
				}, o.prototype.transformX = function(t) {
					var e = 0, i = this.lworldExtX;
					return 0 != i && (e = this.ldeviceOrgX + (t - this.lworldOrgX) * this.ldeviceExtX / i), e;
				}, o.prototype.transformY = function(t) {
					var e = 0, i = this.lworldExtY;
					return 0 != i && (e = this.ldeviceOrgY + (t - this.lworldOrgY) * this.ldeviceExtY / i), e;
				}, o.prototype.inverseTransformX = function(t) {
					var e = 0, i = this.ldeviceExtX;
					return 0 != i && (e = this.lworldOrgX + (t - this.ldeviceOrgX) * this.lworldExtX / i), e;
				}, o.prototype.inverseTransformY = function(t) {
					var e = 0, i = this.ldeviceExtY;
					return 0 != i && (e = this.lworldOrgY + (t - this.ldeviceOrgY) * this.lworldExtY / i), e;
				}, o.prototype.inverseTransformPoint = function(t) {
					return new n(this.inverseTransformX(t.x), this.inverseTransformY(t.y));
				}, t.exports = o;
			},
			function(t, e, i) {
				function n(t) {
					if (!Array.isArray(t)) return Array.from(t);
					for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
					return i;
				}
				r(n, "_toConsumableArray");
				var o = i(15), s = i(7), a = i(0), h = i(8), l = i(9);
				function g() {
					o.call(this), this.useSmartIdealEdgeLengthCalculation = s.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.idealEdgeLength = s.DEFAULT_EDGE_LENGTH, this.springConstant = s.DEFAULT_SPRING_STRENGTH, this.repulsionConstant = s.DEFAULT_REPULSION_STRENGTH, this.gravityConstant = s.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = s.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = s.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = s.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.displacementThresholdPerNode = 3 * s.DEFAULT_EDGE_LENGTH / 100, this.coolingFactor = s.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.initialCoolingFactor = s.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.totalDisplacement = 0, this.oldTotalDisplacement = 0, this.maxIterations = s.MAX_ITERATIONS;
				}
				for (var u in r(g, "FDLayout"), g.prototype = Object.create(o.prototype), o) g[u] = o[u];
				g.prototype.initParameters = function() {
					o.prototype.initParameters.call(this, arguments), this.totalIterations = 0, this.notAnimatedIterations = 0, this.useFRGridVariant = s.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION, this.grid = [];
				}, g.prototype.calcIdealEdgeLengths = function() {
					for (var t, e, i, r, n, o, h = this.getGraphManager().getAllEdges(), l = 0; l < h.length; l++) (t = h[l]).idealLength = this.idealEdgeLength, t.isInterGraph && (i = t.getSource(), r = t.getTarget(), n = t.getSourceInLca().getEstimatedSize(), o = t.getTargetInLca().getEstimatedSize(), this.useSmartIdealEdgeLengthCalculation && (t.idealLength += n + o - 2 * a.SIMPLE_NODE_SIZE), e = t.getLca().getInclusionTreeDepth(), t.idealLength += s.DEFAULT_EDGE_LENGTH * s.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR * (i.getInclusionTreeDepth() + r.getInclusionTreeDepth() - 2 * e));
				}, g.prototype.initSpringEmbedder = function() {
					var t = this.getAllNodes().length;
					this.incremental ? (t > s.ADAPTATION_LOWER_NODE_LIMIT && (this.coolingFactor = Math.max(this.coolingFactor * s.COOLING_ADAPTATION_FACTOR, this.coolingFactor - (t - s.ADAPTATION_LOWER_NODE_LIMIT) / (s.ADAPTATION_UPPER_NODE_LIMIT - s.ADAPTATION_LOWER_NODE_LIMIT) * this.coolingFactor * (1 - s.COOLING_ADAPTATION_FACTOR))), this.maxNodeDisplacement = s.MAX_NODE_DISPLACEMENT_INCREMENTAL) : (t > s.ADAPTATION_LOWER_NODE_LIMIT ? this.coolingFactor = Math.max(s.COOLING_ADAPTATION_FACTOR, 1 - (t - s.ADAPTATION_LOWER_NODE_LIMIT) / (s.ADAPTATION_UPPER_NODE_LIMIT - s.ADAPTATION_LOWER_NODE_LIMIT) * (1 - s.COOLING_ADAPTATION_FACTOR)) : this.coolingFactor = 1, this.initialCoolingFactor = this.coolingFactor, this.maxNodeDisplacement = s.MAX_NODE_DISPLACEMENT), this.maxIterations = Math.max(5 * this.getAllNodes().length, this.maxIterations), this.totalDisplacementThreshold = this.displacementThresholdPerNode * this.getAllNodes().length, this.repulsionRange = this.calcRepulsionRange();
				}, g.prototype.calcSpringForces = function() {
					for (var t, e = this.getAllEdges(), i = 0; i < e.length; i++) t = e[i], this.calcSpringForce(t, t.idealLength);
				}, g.prototype.calcRepulsionForces = function() {
					var t, e, i, r, n, o = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0], a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], h = this.getAllNodes();
					if (this.useFRGridVariant) for (this.totalIterations % s.GRID_CALCULATION_CHECK_PERIOD == 1 && o && this.updateGrid(), n = /* @__PURE__ */ new Set(), t = 0; t < h.length; t++) i = h[t], this.calculateRepulsionForceOfANode(i, n, o, a), n.add(i);
					else for (t = 0; t < h.length; t++) for (i = h[t], e = t + 1; e < h.length; e++) r = h[e], i.getOwner() == r.getOwner() && this.calcRepulsionForce(i, r);
				}, g.prototype.calcGravitationalForces = function() {
					for (var t, e = this.getAllNodesToApplyGravitation(), i = 0; i < e.length; i++) t = e[i], this.calcGravitationalForce(t);
				}, g.prototype.moveNodes = function() {
					for (var t = this.getAllNodes(), e = 0; e < t.length; e++) t[e].move();
				}, g.prototype.calcSpringForce = function(t, e) {
					var i, r, n, o, s = t.getSource(), a = t.getTarget();
					if (this.uniformLeafNodeSizes && null == s.getChild() && null == a.getChild()) t.updateLengthSimple();
					else if (t.updateLength(), t.isOverlapingSourceAndTarget) return;
					0 != (i = t.getLength()) && (n = (r = this.springConstant * (i - e)) * (t.lengthX / i), o = r * (t.lengthY / i), s.springForceX += n, s.springForceY += o, a.springForceX -= n, a.springForceY -= o);
				}, g.prototype.calcRepulsionForce = function(t, e) {
					var i, r, n, o, a, g, u, c = t.getRect(), d = e.getRect(), p = [, ,], f = [
						,
						,
						,
						,
					];
					if (c.intersects(d)) {
						h.calcSeparationAmount(c, d, p, s.DEFAULT_EDGE_LENGTH / 2), g = 2 * p[0], u = 2 * p[1];
						var y = t.noOfChildren * e.noOfChildren / (t.noOfChildren + e.noOfChildren);
						t.repulsionForceX -= y * g, t.repulsionForceY -= y * u, e.repulsionForceX += y * g, e.repulsionForceY += y * u;
					} else this.uniformLeafNodeSizes && null == t.getChild() && null == e.getChild() ? (i = d.getCenterX() - c.getCenterX(), r = d.getCenterY() - c.getCenterY()) : (h.getIntersection(c, d, f), i = f[2] - f[0], r = f[3] - f[1]), Math.abs(i) < s.MIN_REPULSION_DIST && (i = l.sign(i) * s.MIN_REPULSION_DIST), Math.abs(r) < s.MIN_REPULSION_DIST && (r = l.sign(r) * s.MIN_REPULSION_DIST), o = Math.sqrt(n = i * i + r * r), g = (a = this.repulsionConstant * t.noOfChildren * e.noOfChildren / n) * i / o, u = a * r / o, t.repulsionForceX -= g, t.repulsionForceY -= u, e.repulsionForceX += g, e.repulsionForceY += u;
				}, g.prototype.calcGravitationalForce = function(t) {
					var e, i = t.getOwner(), r = (i.getRight() + i.getLeft()) / 2, n = (i.getTop() + i.getBottom()) / 2, o = t.getCenterX() - r, s = t.getCenterY() - n, a = Math.abs(o) + t.getWidth() / 2, h = Math.abs(s) + t.getHeight() / 2;
					t.getOwner() == this.graphManager.getRoot() ? (a > (e = i.getEstimatedSize() * this.gravityRangeFactor) || h > e) && (t.gravitationForceX = -this.gravityConstant * o, t.gravitationForceY = -this.gravityConstant * s) : (a > (e = i.getEstimatedSize() * this.compoundGravityRangeFactor) || h > e) && (t.gravitationForceX = -this.gravityConstant * o * this.compoundGravityConstant, t.gravitationForceY = -this.gravityConstant * s * this.compoundGravityConstant);
				}, g.prototype.isConverged = function() {
					var t, e = !1;
					return this.totalIterations > this.maxIterations / 3 && (e = 2 > Math.abs(this.totalDisplacement - this.oldTotalDisplacement)), t = this.totalDisplacement < this.totalDisplacementThreshold, this.oldTotalDisplacement = this.totalDisplacement, t || e;
				}, g.prototype.animate = function() {
					this.animationDuringLayout && !this.isSubLayout && (this.notAnimatedIterations == this.animationPeriod ? (this.update(), this.notAnimatedIterations = 0) : this.notAnimatedIterations++);
				}, g.prototype.calcNoOfChildrenForAllNodes = function() {
					for (var t, e = this.graphManager.getAllNodes(), i = 0; i < e.length; i++) (t = e[i]).noOfChildren = t.getNoOfChildren();
				}, g.prototype.calcGrid = function(t) {
					var e = 0, i = 0;
					e = parseInt(Math.ceil((t.getRight() - t.getLeft()) / this.repulsionRange)), i = parseInt(Math.ceil((t.getBottom() - t.getTop()) / this.repulsionRange));
					for (var r = Array(e), n = 0; n < e; n++) r[n] = Array(i);
					for (var n = 0; n < e; n++) for (var o = 0; o < i; o++) r[n][o] = [];
					return r;
				}, g.prototype.addNodeToGrid = function(t, e, i) {
					var r = 0, n = 0, o = 0, s = 0;
					r = parseInt(Math.floor((t.getRect().x - e) / this.repulsionRange)), n = parseInt(Math.floor((t.getRect().width + t.getRect().x - e) / this.repulsionRange)), o = parseInt(Math.floor((t.getRect().y - i) / this.repulsionRange)), s = parseInt(Math.floor((t.getRect().height + t.getRect().y - i) / this.repulsionRange));
					for (var a = r; a <= n; a++) for (var h = o; h <= s; h++) this.grid[a][h].push(t), t.setGridCoordinates(r, n, o, s);
				}, g.prototype.updateGrid = function() {
					var t, e, i = this.getAllNodes();
					for (this.grid = this.calcGrid(this.graphManager.getRoot()), t = 0; t < i.length; t++) e = i[t], this.addNodeToGrid(e, this.graphManager.getRoot().getLeft(), this.graphManager.getRoot().getTop());
				}, g.prototype.calculateRepulsionForceOfANode = function(t, e, i, r) {
					if (this.totalIterations % s.GRID_CALCULATION_CHECK_PERIOD == 1 && i || r) {
						var o = /* @__PURE__ */ new Set();
						t.surrounding = [];
						for (var a, h = this.grid, l = t.startX - 1; l < t.finishX + 2; l++) for (var g = t.startY - 1; g < t.finishY + 2; g++) if (!(l < 0 || g < 0 || l >= h.length || g >= h[0].length)) {
							for (var u = 0; u < h[l][g].length; u++) if (a = h[l][g][u], t.getOwner() == a.getOwner() && t != a && !e.has(a) && !o.has(a)) {
								var c = Math.abs(t.getCenterX() - a.getCenterX()) - (t.getWidth() / 2 + a.getWidth() / 2), d = Math.abs(t.getCenterY() - a.getCenterY()) - (t.getHeight() / 2 + a.getHeight() / 2);
								c <= this.repulsionRange && d <= this.repulsionRange && o.add(a);
							}
						}
						t.surrounding = [].concat(n(o));
					}
					for (l = 0; l < t.surrounding.length; l++) this.calcRepulsionForce(t, t.surrounding[l]);
				}, g.prototype.calcRepulsionRange = function() {
					return 0;
				}, t.exports = g;
			},
			function(t, e, i) {
				var n = i(1), o = i(7);
				function s(t, e, i) {
					n.call(this, t, e, i), this.idealLength = o.DEFAULT_EDGE_LENGTH;
				}
				for (var a in r(s, "FDLayoutEdge"), s.prototype = Object.create(n.prototype), n) s[a] = n[a];
				t.exports = s;
			},
			function(t, e, i) {
				var n = i(3);
				function o(t, e, i, r) {
					n.call(this, t, e, i, r), this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0, this.startX = 0, this.finishX = 0, this.startY = 0, this.finishY = 0, this.surrounding = [];
				}
				for (var s in r(o, "FDLayoutNode"), o.prototype = Object.create(n.prototype), n) o[s] = n[s];
				o.prototype.setGridCoordinates = function(t, e, i, r) {
					this.startX = t, this.finishX = e, this.startY = i, this.finishY = r;
				}, t.exports = o;
			},
			function(t, e, i) {
				function n(t, e) {
					this.width = 0, this.height = 0, null !== t && null !== e && (this.height = e, this.width = t);
				}
				r(n, "DimensionD"), n.prototype.getWidth = function() {
					return this.width;
				}, n.prototype.setWidth = function(t) {
					this.width = t;
				}, n.prototype.getHeight = function() {
					return this.height;
				}, n.prototype.setHeight = function(t) {
					this.height = t;
				}, t.exports = n;
			},
			function(t, e, i) {
				var n = i(14);
				function o() {
					this.map = {}, this.keys = [];
				}
				r(o, "HashMap"), o.prototype.put = function(t, e) {
					var i = n.createID(t);
					this.contains(i) || (this.map[i] = e, this.keys.push(t));
				}, o.prototype.contains = function(t) {
					return n.createID(t), null != this.map[t];
				}, o.prototype.get = function(t) {
					var e = n.createID(t);
					return this.map[e];
				}, o.prototype.keySet = function() {
					return this.keys;
				}, t.exports = o;
			},
			function(t, e, i) {
				var n = i(14);
				function o() {
					this.set = {};
				}
				r(o, "HashSet"), o.prototype.add = function(t) {
					var e = n.createID(t);
					this.contains(e) || (this.set[e] = t);
				}, o.prototype.remove = function(t) {
					delete this.set[n.createID(t)];
				}, o.prototype.clear = function() {
					this.set = {};
				}, o.prototype.contains = function(t) {
					return this.set[n.createID(t)] == t;
				}, o.prototype.isEmpty = function() {
					return 0 === this.size();
				}, o.prototype.size = function() {
					return Object.keys(this.set).length;
				}, o.prototype.addAllTo = function(t) {
					for (var e = Object.keys(this.set), i = e.length, r = 0; r < i; r++) t.push(this.set[e[r]]);
				}, o.prototype.size = function() {
					return Object.keys(this.set).length;
				}, o.prototype.addAll = function(t) {
					for (var e = t.length, i = 0; i < e; i++) {
						var r = t[i];
						this.add(r);
					}
				}, t.exports = o;
			},
			function(t, e, i) {
				var n = function() {
					function t(t, e) {
						for (var i = 0; i < e.length; i++) {
							var r = e[i];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
						}
					}
					return r(t, "defineProperties"), function(e, i, r) {
						return i && t(e.prototype, i), r && t(e, r), e;
					};
				}();
				function o(t, e) {
					if (!(t instanceof e)) throw TypeError("Cannot call a class as a function");
				}
				r(o, "_classCallCheck");
				var s = i(11);
				t.exports = function() {
					function t(e, i) {
						o(this, t), (null !== i || void 0 !== i) && (this.compareFunction = this._defaultCompareFunction);
						var r = void 0;
						r = e instanceof s ? e.size() : e.length, this._quicksort(e, 0, r - 1);
					}
					return r(t, "Quicksort"), n(t, [
						{
							key: "_quicksort",
							value: r(function(t, e, i) {
								if (e < i) {
									var r = this._partition(t, e, i);
									this._quicksort(t, e, r), this._quicksort(t, r + 1, i);
								}
							}, "_quicksort")
						},
						{
							key: "_partition",
							value: r(function(t, e, i) {
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
							value: r(function(t, e) {
								return t instanceof s ? t.get_object_at(e) : t[e];
							}, "_get")
						},
						{
							key: "_set",
							value: r(function(t, e, i) {
								t instanceof s ? t.set_object_at(e, i) : t[e] = i;
							}, "_set")
						},
						{
							key: "_swap",
							value: r(function(t, e, i) {
								var r = this._get(t, e);
								this._set(t, e, this._get(t, i)), this._set(t, i, r);
							}, "_swap")
						},
						{
							key: "_defaultCompareFunction",
							value: r(function(t, e) {
								return e > t;
							}, "_defaultCompareFunction")
						}
					]), t;
				}();
			},
			function(t, e, i) {
				var n = function() {
					function t(t, e) {
						for (var i = 0; i < e.length; i++) {
							var r = e[i];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
						}
					}
					return r(t, "defineProperties"), function(e, i, r) {
						return i && t(e.prototype, i), r && t(e, r), e;
					};
				}();
				function o(t, e) {
					if (!(t instanceof e)) throw TypeError("Cannot call a class as a function");
				}
				r(o, "_classCallCheck"), t.exports = function() {
					function t(e, i) {
						var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1, s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1;
						o(this, t), this.sequence1 = e, this.sequence2 = i, this.match_score = r, this.mismatch_penalty = n, this.gap_penalty = s, this.iMax = e.length + 1, this.jMax = i.length + 1, this.grid = Array(this.iMax);
						for (var a = 0; a < this.iMax; a++) {
							this.grid[a] = Array(this.jMax);
							for (var h = 0; h < this.jMax; h++) this.grid[a][h] = 0;
						}
						this.tracebackGrid = Array(this.iMax);
						for (var l = 0; l < this.iMax; l++) {
							this.tracebackGrid[l] = Array(this.jMax);
							for (var g = 0; g < this.jMax; g++) this.tracebackGrid[l][g] = [
								null,
								null,
								null
							];
						}
						this.alignments = [], this.score = -1, this.computeGrids();
					}
					return r(t, "NeedlemanWunsch"), n(t, [
						{
							key: "getScore",
							value: r(function() {
								return this.score;
							}, "getScore")
						},
						{
							key: "getAlignments",
							value: r(function() {
								return this.alignments;
							}, "getAlignments")
						},
						{
							key: "computeGrids",
							value: r(function() {
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
							value: r(function() {
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
							value: r(function(t, e) {
								for (var i = [], r = -1; -1 !== (r = t.indexOf(e, r + 1));) i.push(r);
								return i;
							}, "getAllIndexes")
						},
						{
							key: "arrayAllMaxIndexes",
							value: r(function(t) {
								return this.getAllIndexes(t, Math.max.apply(null, t));
							}, "arrayAllMaxIndexes")
						}
					]), t;
				}();
			},
			function(t, e, i) {
				var n = r(function() {}, "layoutBase");
				n.FDLayout = i(18), n.FDLayoutConstants = i(7), n.FDLayoutEdge = i(19), n.FDLayoutNode = i(20), n.DimensionD = i(21), n.HashMap = i(22), n.HashSet = i(23), n.IGeometry = i(8), n.IMath = i(9), n.Integer = i(10), n.Point = i(12), n.PointD = i(4), n.RandomSeed = i(16), n.RectangleD = i(13), n.Transform = i(17), n.UniqueIDGeneretor = i(14), n.Quicksort = i(24), n.LinkedList = i(11), n.LGraphObject = i(2), n.LGraph = i(5), n.LEdge = i(1), n.LGraphManager = i(6), n.LNode = i(3), n.Layout = i(15), n.LayoutConstants = i(0), n.NeedlemanWunsch = i(25), t.exports = n;
			},
			function(t, e, i) {
				function n() {
					this.listeners = [];
				}
				r(n, "Emitter");
				var o = n.prototype;
				o.addListener = function(t, e) {
					this.listeners.push({
						event: t,
						callback: e
					});
				}, o.removeListener = function(t, e) {
					for (var i = this.listeners.length; i >= 0; i--) {
						var r = this.listeners[i];
						r.event === t && r.callback === e && this.listeners.splice(i, 1);
					}
				}, o.emit = function(t, e) {
					for (var i = 0; i < this.listeners.length; i++) {
						var r = this.listeners[i];
						t === r.event && r.callback(e);
					}
				}, t.exports = n;
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
		return r(i, "__webpack_require__"), i.m = t, i.c = e, i.i = function(t) {
			return t;
		}, i.d = function(t, e, r) {
			i.o(t, e) || Object.defineProperty(t, e, {
				configurable: !1,
				enumerable: !0,
				get: r
			});
		}, i.n = function(t) {
			var e = t && t.__esModule ? r(function() {
				return t.default;
			}, "getDefault") : r(function() {
				return t;
			}, "getModuleExports");
			return i.d(e, "a", e), e;
		}, i.o = function(t, e) {
			return Object.prototype.hasOwnProperty.call(t, e);
		}, i.p = "", i(i.s = 26);
	});
}), a = i((t, e) => {
	r(function(i, r) {
		"object" == typeof t && "object" == typeof e ? e.exports = r(s()) : "function" == typeof define && define.amd ? define(["layout-base"], r) : "object" == typeof t ? t.coseBase = r(s()) : i.coseBase = r(i.layoutBase);
	}, "webpackUniversalModuleDefinition")(t, function(t) {
		var e = [
			function(e, i) {
				e.exports = t;
			},
			function(t, e, i) {
				var n = i(0).FDLayoutConstants;
				function o() {}
				for (var s in r(o, "CoSEConstants"), n) o[s] = n[s];
				o.DEFAULT_USE_MULTI_LEVEL_SCALING = !1, o.DEFAULT_RADIAL_SEPARATION = n.DEFAULT_EDGE_LENGTH, o.DEFAULT_COMPONENT_SEPERATION = 60, o.TILE = !0, o.TILING_PADDING_VERTICAL = 10, o.TILING_PADDING_HORIZONTAL = 10, o.TREE_REDUCTION_ON_INCREMENTAL = !1, t.exports = o;
			},
			function(t, e, i) {
				var n = i(0).FDLayoutEdge;
				function o(t, e, i) {
					n.call(this, t, e, i);
				}
				for (var s in r(o, "CoSEEdge"), o.prototype = Object.create(n.prototype), n) o[s] = n[s];
				t.exports = o;
			},
			function(t, e, i) {
				var n = i(0).LGraph;
				function o(t, e, i) {
					n.call(this, t, e, i);
				}
				for (var s in r(o, "CoSEGraph"), o.prototype = Object.create(n.prototype), n) o[s] = n[s];
				t.exports = o;
			},
			function(t, e, i) {
				var n = i(0).LGraphManager;
				function o(t) {
					n.call(this, t);
				}
				for (var s in r(o, "CoSEGraphManager"), o.prototype = Object.create(n.prototype), n) o[s] = n[s];
				t.exports = o;
			},
			function(t, e, i) {
				var n = i(0).FDLayoutNode, o = i(0).IMath;
				function s(t, e, i, r) {
					n.call(this, t, e, i, r);
				}
				for (var a in r(s, "CoSENode"), s.prototype = Object.create(n.prototype), n) s[a] = n[a];
				s.prototype.move = function() {
					var t = this.graphManager.getLayout();
					this.displacementX = t.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.noOfChildren, this.displacementY = t.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.noOfChildren, Math.abs(this.displacementX) > t.coolingFactor * t.maxNodeDisplacement && (this.displacementX = t.coolingFactor * t.maxNodeDisplacement * o.sign(this.displacementX)), Math.abs(this.displacementY) > t.coolingFactor * t.maxNodeDisplacement && (this.displacementY = t.coolingFactor * t.maxNodeDisplacement * o.sign(this.displacementY)), null == this.child || 0 == this.child.getNodes().length ? this.moveBy(this.displacementX, this.displacementY) : this.propogateDisplacementToChildren(this.displacementX, this.displacementY), t.totalDisplacement += Math.abs(this.displacementX) + Math.abs(this.displacementY), this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0;
				}, s.prototype.propogateDisplacementToChildren = function(t, e) {
					for (var i, r = this.getChild().getNodes(), n = 0; n < r.length; n++) null == (i = r[n]).getChild() ? (i.moveBy(t, e), i.displacementX += t, i.displacementY += e) : i.propogateDisplacementToChildren(t, e);
				}, s.prototype.setPred1 = function(t) {
					this.pred1 = t;
				}, s.prototype.getPred1 = function() {
					return pred1;
				}, s.prototype.getPred2 = function() {
					return pred2;
				}, s.prototype.setNext = function(t) {
					this.next = t;
				}, s.prototype.getNext = function() {
					return next;
				}, s.prototype.setProcessed = function(t) {
					this.processed = t;
				}, s.prototype.isProcessed = function() {
					return processed;
				}, t.exports = s;
			},
			function(t, e, i) {
				var n = i(0).FDLayout, o = i(4), s = i(3), a = i(5), h = i(2), l = i(1), g = i(0).FDLayoutConstants, u = i(0).LayoutConstants, c = i(0).Point, d = i(0).PointD, p = i(0).Layout, f = i(0).Integer, y = i(0).IGeometry, E = i(0).LGraph, v = i(0).Transform;
				function A() {
					n.call(this), this.toBeTiled = {};
				}
				for (var _ in r(A, "CoSELayout"), A.prototype = Object.create(n.prototype), n) A[_] = n[_];
				A.prototype.newGraphManager = function() {
					var t = new o(this);
					return this.graphManager = t, t;
				}, A.prototype.newGraph = function(t) {
					return new s(null, this.graphManager, t);
				}, A.prototype.newNode = function(t) {
					return new a(this.graphManager, t);
				}, A.prototype.newEdge = function(t) {
					return new h(null, null, t);
				}, A.prototype.initParameters = function() {
					n.prototype.initParameters.call(this, arguments), this.isSubLayout || (l.DEFAULT_EDGE_LENGTH < 10 ? this.idealEdgeLength = 10 : this.idealEdgeLength = l.DEFAULT_EDGE_LENGTH, this.useSmartIdealEdgeLengthCalculation = l.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.springConstant = g.DEFAULT_SPRING_STRENGTH, this.repulsionConstant = g.DEFAULT_REPULSION_STRENGTH, this.gravityConstant = g.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = g.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = g.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = g.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.prunedNodesAll = [], this.growTreeIterations = 0, this.afterGrowthIterations = 0, this.isTreeGrowing = !1, this.isGrowthFinished = !1, this.coolingCycle = 0, this.maxCoolingCycle = this.maxIterations / g.CONVERGENCE_CHECK_PERIOD, this.finalTemperature = g.CONVERGENCE_CHECK_PERIOD / this.maxIterations, this.coolingAdjuster = 1);
				}, A.prototype.layout = function() {
					return u.DEFAULT_CREATE_BENDS_AS_NEEDED && (this.createBendpoints(), this.graphManager.resetAllEdges()), this.level = 0, this.classicLayout();
				}, A.prototype.classicLayout = function() {
					if (this.nodesWithGravity = this.calculateNodesToApplyGravitationTo(), this.graphManager.setAllNodesToApplyGravitation(this.nodesWithGravity), this.calcNoOfChildrenForAllNodes(), this.graphManager.calcLowestCommonAncestors(), this.graphManager.calcInclusionTreeDepths(), this.graphManager.getRoot().calcEstimatedSize(), this.calcIdealEdgeLengths(), this.incremental) {
						if (l.TREE_REDUCTION_ON_INCREMENTAL) {
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
					return this.initSpringEmbedder(), this.runSpringEmbedder(), !0;
				}, A.prototype.tick = function() {
					if (this.totalIterations++, this.totalIterations === this.maxIterations && !this.isTreeGrowing && !this.isGrowthFinished) if (!(this.prunedNodesAll.length > 0)) return !0;
					else this.isTreeGrowing = !0;
					if (this.totalIterations % g.CONVERGENCE_CHECK_PERIOD == 0 && !this.isTreeGrowing && !this.isGrowthFinished) {
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
							this.graphManager.setAllNodesToApplyGravitation(e), this.graphManager.updateBounds(), this.updateGrid(), this.coolingFactor = g.DEFAULT_COOLING_FACTOR_INCREMENTAL;
						} else this.isTreeGrowing = !1, this.isGrowthFinished = !0;
						this.growTreeIterations++;
					}
					if (this.isGrowthFinished) {
						if (this.isConverged()) return !0;
						this.afterGrowthIterations % 10 == 0 && (this.graphManager.updateBounds(), this.updateGrid()), this.coolingFactor = g.DEFAULT_COOLING_FACTOR_INCREMENTAL * ((100 - this.afterGrowthIterations) / 100), this.afterGrowthIterations++;
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
					if ("during" === g.ANIMATE) this.emit("layoutstarted");
					else {
						for (; !t;) t = this.tick();
						this.graphManager.updateBounds();
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
							if (n == o) r.getBendpoints().push(new d()), r.getBendpoints().push(new d()), this.createDummyNodesForBendpoints(r), i.add(r);
							else {
								var s, a = [];
								if (a = (a = a.concat(n.getEdgeListToNode(o))).concat(o.getEdgeListToNode(n)), !i.has(a[0])) {
									if (a.length > 1) for (s = 0; s < a.length; s++) {
										var h = a[s];
										h.getBendpoints().push(new d()), this.createDummyNodesForBendpoints(h);
									}
									a.forEach(function(t) {
										i.add(t);
									});
								}
							}
						}
						if (i.size == t.length) break;
					}
				}, A.prototype.positionNodesRadially = function(t) {
					for (var e = new c(0, 0), i = Math.ceil(Math.sqrt(t.length)), r = 0, n = 0, o = 0, s = new d(0, 0), a = 0; a < t.length; a++) {
						a % i == 0 && (o = 0, n = r, 0 != a && (n += l.DEFAULT_COMPONENT_SEPERATION), r = 0);
						var h = t[a], g = p.findCenterOfTree(h);
						e.x = o, e.y = n, (s = A.radialLayout(h, g, e)).y > r && (r = Math.floor(s.y)), o = Math.floor(s.x + l.DEFAULT_COMPONENT_SEPERATION);
					}
					this.transform(new d(u.WORLD_CENTER_X - s.x / 2, u.WORLD_CENTER_Y - s.y / 2));
				}, A.radialLayout = function(t, e, i) {
					var r = Math.max(this.maxDiagonalInTree(t), l.DEFAULT_RADIAL_SEPARATION);
					A.branchRadialLayout(e, null, 0, 359, 0, r);
					var n = E.calculateBounds(t), o = new v();
					o.setDeviceOrgX(n.getMinX()), o.setDeviceOrgY(n.getMinY()), o.setWorldOrgX(i.x), o.setWorldOrgY(i.y);
					for (var s = 0; s < t.length; s++) t[s].transform(o);
					var a = new d(n.getMaxX(), n.getMaxY());
					return o.inverseTransformPoint(a);
				}, A.branchRadialLayout = function(t, e, i, r, n, o) {
					var s = (r - i + 1) / 2;
					s < 0 && (s += 180);
					var a = (s + i) % 360 * y.TWO_PI / 360, h = n * Math.cos(a), l = n * Math.sin(a);
					t.setCenter(h, l);
					var g = [], u = (g = g.concat(t.getEdges())).length;
					null != e && u--;
					for (var c, d = 0, p = g.length, f = t.getEdgesBetween(e); f.length > 1;) {
						var E = f[0];
						f.splice(0, 1);
						var v = g.indexOf(E);
						v >= 0 && g.splice(v, 1), p--, u--;
					}
					c = null != e ? (g.indexOf(f[0]) + 1) % p : 0;
					for (var _ = Math.abs(r - i) / u, N = c; d != u; N = ++N % p) {
						var T = g[N].getOtherEnd(t);
						if (T != e) {
							var L = (i + d * _) % 360, m = (L + _) % 360;
							A.branchRadialLayout(T, t, L, m, n + o, o), d++;
						}
					}
				}, A.maxDiagonalInTree = function(t) {
					for (var e = f.MIN_VALUE, i = 0; i < t.length; i++) {
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
								var g = e[i][l];
								h.remove(g), s.add(g);
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
						e[i] = t.tileNodes(t.memberGroups[i], r.paddingLeft + r.paddingRight), r.rect.width = e[i].width, r.rect.height = e[i].height;
					});
				}, A.prototype.repopulateCompounds = function() {
					for (var t = this.compoundOrder.length - 1; t >= 0; t--) {
						var e = this.compoundOrder[t], i = e.id, r = e.paddingLeft, n = e.paddingTop;
						this.adjustLocations(this.tiledMemberPack[i], e.rect.x, e.rect.y, r, n);
					}
				}, A.prototype.repopulateZeroDegreeMembers = function() {
					var t = this, e = this.tiledZeroDegreePack;
					Object.keys(e).forEach(function(i) {
						var r = t.idToDummyNode[i], n = r.paddingLeft, o = r.paddingTop;
						t.adjustLocations(e[i], r.rect.x, r.rect.y, n, o);
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
				}, A.prototype.adjustLocations = function(t, e, i, r, n) {
					e += r, i += n;
					for (var o = e, s = 0; s < t.rows.length; s++) {
						var a = t.rows[s];
						e = o;
						for (var h = 0, l = 0; l < a.length; l++) {
							var g = a[l];
							g.rect.x = e, g.rect.y = i, e += g.rect.width + t.horizontalPadding, g.rect.height > h && (h = g.rect.height);
						}
						i += h + t.verticalPadding;
					}
				}, A.prototype.tileCompoundMembers = function(t, e) {
					var i = this;
					this.tiledMemberPack = [], Object.keys(t).forEach(function(r) {
						var n = e[r];
						i.tiledMemberPack[r] = i.tileNodes(t[r], n.paddingLeft + n.paddingRight), n.rect.width = i.tiledMemberPack[r].width, n.rect.height = i.tiledMemberPack[r].height;
					});
				}, A.prototype.tileNodes = function(t, e) {
					var i = {
						rows: [],
						rowWidth: [],
						rowHeight: [],
						width: 0,
						height: e,
						verticalPadding: l.TILING_PADDING_VERTICAL,
						horizontalPadding: l.TILING_PADDING_HORIZONTAL
					};
					t.sort(function(t, e) {
						return t.rect.width * t.rect.height > e.rect.width * e.rect.height ? -1 : +(t.rect.width * t.rect.height < e.rect.width * e.rect.height);
					});
					for (var r = 0; r < t.length; r++) {
						var n = t[r];
						0 == i.rows.length ? this.insertNodeToRow(i, n, 0, e) : this.canAddHorizontal(i, n.rect.width, n.rect.height) ? this.insertNodeToRow(i, n, this.getShortestRowIndex(i), e) : this.insertNodeToRow(i, n, i.rows.length, e), this.shiftToLastRow(i);
					}
					return i;
				}, A.prototype.insertNodeToRow = function(t, e, i, r) {
					i == t.rows.length && (t.rows.push([]), t.rowWidth.push(r), t.rowHeight.push(0));
					var n = t.rowWidth[i] + e.rect.width;
					t.rows[i].length > 0 && (n += t.horizontalPadding), t.rowWidth[i] = n, t.width < n && (t.width = n);
					var o = e.rect.height;
					i > 0 && (o += t.verticalPadding);
					var s = 0;
					o > t.rowHeight[i] && (s = t.rowHeight[i], t.rowHeight[i] = o, s = t.rowHeight[i] - s), t.height += s, t.rows[i].push(e);
				}, A.prototype.getShortestRowIndex = function(t) {
					for (var e = -1, i = Number.MAX_VALUE, r = 0; r < t.rows.length; r++) t.rowWidth[r] < i && (e = r, i = t.rowWidth[r]);
					return e;
				}, A.prototype.getLongestRowIndex = function(t) {
					for (var e = -1, i = 5e-324, r = 0; r < t.rows.length; r++) t.rowWidth[r] > i && (e = r, i = t.rowWidth[r]);
					return e;
				}, A.prototype.canAddHorizontal = function(t, e, i) {
					var r, n, o = this.getShortestRowIndex(t);
					if (o < 0) return !0;
					var s = t.rowWidth[o];
					if (s + t.horizontalPadding + e <= t.width) return !0;
					var a = 0;
					return t.rowHeight[o] < i && o > 0 && (a = i + t.verticalPadding - t.rowHeight[o]), r = t.width - s >= e + t.horizontalPadding ? (t.height + a) / (s + e + t.horizontalPadding) : (t.height + a) / t.width, a = i + t.verticalPadding, (n = t.width < e ? (t.height + a) / e : (t.height + a) / t.width) < 1 && (n = 1 / n), r < 1 && (r = 1 / r), r < n;
				}, A.prototype.shiftToLastRow = function(t) {
					var e = this.getLongestRowIndex(t), i = t.rowWidth.length - 1, r = t.rows[e], n = r[r.length - 1], o = n.width + t.horizontalPadding;
					if (t.width - t.rowWidth[i] > o && e != i) {
						r.splice(-1, 1), t.rows[i].push(n), t.rowWidth[e] = t.rowWidth[e] - o, t.rowWidth[i] = t.rowWidth[i] + o, t.width = t.rowWidth[instance.getLongestRowIndex(t)];
						for (var s = 5e-324, a = 0; a < r.length; a++) r[a].height > s && (s = r[a].height);
						e > 0 && (s += t.verticalPadding);
						var h = t.rowHeight[e] + t.rowHeight[i];
						t.rowHeight[e] = s, t.rowHeight[i] < n.height + t.verticalPadding && (t.rowHeight[i] = n.height + t.verticalPadding);
						var l = t.rowHeight[e] + t.rowHeight[i];
						t.height += l - h, this.shiftToLastRow(t);
					}
				}, A.prototype.tilingPreLayout = function() {
					l.TILE && (this.groupZeroDegreeMembers(), this.clearCompounds(), this.clearZeroDegreeMembers());
				}, A.prototype.tilingPostLayout = function() {
					l.TILE && (this.repopulateZeroDegreeMembers(), this.repopulateCompounds());
				}, A.prototype.reduceTrees = function() {
					for (var t, e = [], i = !0; i;) {
						var r = this.graphManager.getAllNodes(), n = [];
						i = !1;
						for (var o = 0; o < r.length; o++) 1 != (t = r[o]).getEdges().length || t.getEdges()[0].isInterGraph || null != t.getChild() || (n.push([
							t,
							t.getEdges()[0],
							t.getOwner()
						]), i = !0);
						if (!0 == i) {
							for (var s = [], a = 0; a < n.length; a++) 1 == n[a][0].getEdges().length && (s.push(n[a]), n[a][0].getOwner().remove(n[a][0]));
							e.push(s), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
						}
					}
					this.prunedNodesAll = e;
				}, A.prototype.growTree = function(t) {
					for (var e, i = t.length, r = t[i - 1], n = 0; n < r.length; n++) e = r[n], this.findPlaceforPrunedNode(e), e[2].add(e[0]), e[2].add(e[1], e[1].source, e[1].target);
					t.splice(t.length - 1, 1), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
				}, A.prototype.findPlaceforPrunedNode = function(t) {
					var e, i, r = t[0], n = (i = r == t[1].source ? t[1].target : t[1].source).startX, o = i.finishX, s = i.startY, a = i.finishY, h = [
						0,
						0,
						0,
						0
					];
					if (s > 0) for (var l = n; l <= o; l++) h[0] += this.grid[l][s - 1].length + this.grid[l][s].length - 1;
					if (o < this.grid.length - 1) for (var l = s; l <= a; l++) h[1] += this.grid[o + 1][l].length + this.grid[o][l].length - 1;
					if (a < this.grid[0].length - 1) for (var l = n; l <= o; l++) h[2] += this.grid[l][a + 1].length + this.grid[l][a].length - 1;
					if (n > 0) for (var l = s; l <= a; l++) h[3] += this.grid[n - 1][l].length + this.grid[n][l].length - 1;
					for (var u, c, d = f.MAX_VALUE, p = 0; p < h.length; p++) h[p] < d ? (d = h[p], u = 1, c = p) : h[p] == d && u++;
					if (3 == u && 0 == d) 0 == h[0] && 0 == h[1] && 0 == h[2] ? e = 1 : 0 == h[0] && 0 == h[1] && 0 == h[3] ? e = 0 : 0 == h[0] && 0 == h[2] && 0 == h[3] ? e = 3 : 0 == h[1] && 0 == h[2] && 0 == h[3] && (e = 2);
					else if (2 == u && 0 == d) {
						var y = Math.floor(2 * Math.random());
						e = 0 == h[0] && 0 == h[1] ? +(0 != y) : 0 == h[0] && 0 == h[2] ? 2 * (0 != y) : 0 == h[0] && 0 == h[3] ? 3 * (0 != y) : 0 == h[1] && 0 == h[2] ? 0 == y ? 1 : 2 : 0 == h[1] && 0 == h[3] ? 0 == y ? 1 : 3 : 0 == y ? 2 : 3;
					} else if (4 == u && 0 == d) {
						var y = Math.floor(4 * Math.random());
						e = y;
					} else e = c;
					0 == e ? r.setCenter(i.getCenterX(), i.getCenterY() - i.getHeight() / 2 - g.DEFAULT_EDGE_LENGTH - r.getHeight() / 2) : 1 == e ? r.setCenter(i.getCenterX() + i.getWidth() / 2 + g.DEFAULT_EDGE_LENGTH + r.getWidth() / 2, i.getCenterY()) : 2 == e ? r.setCenter(i.getCenterX(), i.getCenterY() + i.getHeight() / 2 + g.DEFAULT_EDGE_LENGTH + r.getHeight() / 2) : r.setCenter(i.getCenterX() - i.getWidth() / 2 - g.DEFAULT_EDGE_LENGTH - r.getWidth() / 2, i.getCenterY());
				}, t.exports = A;
			},
			function(t, e, i) {
				var r = {};
				r.layoutBase = i(0), r.CoSEConstants = i(1), r.CoSEEdge = i(2), r.CoSEGraph = i(3), r.CoSEGraphManager = i(4), r.CoSELayout = i(6), r.CoSENode = i(5), t.exports = r;
			}
		], i = {};
		function n(t) {
			if (i[t]) return i[t].exports;
			var r = i[t] = {
				i: t,
				l: !1,
				exports: {}
			};
			return e[t].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
		}
		return r(n, "__webpack_require__"), n.m = e, n.c = i, n.i = function(t) {
			return t;
		}, n.d = function(t, e, i) {
			n.o(t, e) || Object.defineProperty(t, e, {
				configurable: !1,
				enumerable: !0,
				get: i
			});
		}, n.n = function(t) {
			var e = t && t.__esModule ? r(function() {
				return t.default;
			}, "getDefault") : r(function() {
				return t;
			}, "getModuleExports");
			return n.d(e, "a", e), e;
		}, n.o = function(t, e) {
			return Object.prototype.hasOwnProperty.call(t, e);
		}, n.p = "", n(n.s = 7);
	});
}), h = n(i((t, e) => {
	r(function(i, r) {
		"object" == typeof t && "object" == typeof e ? e.exports = r(a()) : "function" == typeof define && define.amd ? define(["cose-base"], r) : "object" == typeof t ? t.cytoscapeCoseBilkent = r(a()) : i.cytoscapeCoseBilkent = r(i.coseBase);
	}, "webpackUniversalModuleDefinition")(t, function(t) {
		var e = [function(e, i) {
			e.exports = t;
		}, function(t, e, i) {
			var n = i(0).layoutBase.LayoutConstants, o = i(0).layoutBase.FDLayoutConstants, s = i(0).CoSEConstants, a = i(0).CoSELayout, h = i(0).CoSENode, l = i(0).layoutBase.PointD, g = i(0).layoutBase.DimensionD, u = {
				ready: r(function() {}, "ready"),
				stop: r(function() {}, "stop"),
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
			function c(t, e) {
				var i = {};
				for (var r in t) i[r] = t[r];
				for (var r in e) i[r] = e[r];
				return i;
			}
			function d(t) {
				this.options = c(u, t), p(this.options);
			}
			r(c, "extend"), r(d, "_CoSELayout");
			var p = r(function(t) {
				null != t.nodeRepulsion && (s.DEFAULT_REPULSION_STRENGTH = o.DEFAULT_REPULSION_STRENGTH = t.nodeRepulsion), null != t.idealEdgeLength && (s.DEFAULT_EDGE_LENGTH = o.DEFAULT_EDGE_LENGTH = t.idealEdgeLength), null != t.edgeElasticity && (s.DEFAULT_SPRING_STRENGTH = o.DEFAULT_SPRING_STRENGTH = t.edgeElasticity), null != t.nestingFactor && (s.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = o.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = t.nestingFactor), null != t.gravity && (s.DEFAULT_GRAVITY_STRENGTH = o.DEFAULT_GRAVITY_STRENGTH = t.gravity), null != t.numIter && (s.MAX_ITERATIONS = o.MAX_ITERATIONS = t.numIter), null != t.gravityRange && (s.DEFAULT_GRAVITY_RANGE_FACTOR = o.DEFAULT_GRAVITY_RANGE_FACTOR = t.gravityRange), null != t.gravityCompound && (s.DEFAULT_COMPOUND_GRAVITY_STRENGTH = o.DEFAULT_COMPOUND_GRAVITY_STRENGTH = t.gravityCompound), null != t.gravityRangeCompound && (s.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = o.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = t.gravityRangeCompound), null != t.initialEnergyOnIncremental && (s.DEFAULT_COOLING_FACTOR_INCREMENTAL = o.DEFAULT_COOLING_FACTOR_INCREMENTAL = t.initialEnergyOnIncremental), "draft" == t.quality ? n.QUALITY = 0 : "proof" == t.quality ? n.QUALITY = 2 : n.QUALITY = 1, s.NODE_DIMENSIONS_INCLUDE_LABELS = o.NODE_DIMENSIONS_INCLUDE_LABELS = n.NODE_DIMENSIONS_INCLUDE_LABELS = t.nodeDimensionsIncludeLabels, s.DEFAULT_INCREMENTAL = o.DEFAULT_INCREMENTAL = n.DEFAULT_INCREMENTAL = !t.randomize, s.ANIMATE = o.ANIMATE = n.ANIMATE = t.animate, s.TILE = t.tile, s.TILING_PADDING_VERTICAL = "function" == typeof t.tilingPaddingVertical ? t.tilingPaddingVertical.call() : t.tilingPaddingVertical, s.TILING_PADDING_HORIZONTAL = "function" == typeof t.tilingPaddingHorizontal ? t.tilingPaddingHorizontal.call() : t.tilingPaddingHorizontal;
			}, "getUserOptions");
			d.prototype.run = function() {
				var t, e, i = this.options;
				this.idToLNode = {};
				var n = this.layout = new a(), o = this;
				o.stopped = !1, this.cy = this.options.cy, this.cy.trigger({
					type: "layoutstart",
					layout: this
				});
				var s = n.newGraphManager();
				this.gm = s;
				var h = this.options.eles.nodes(), l = this.options.eles.edges();
				this.root = s.addRoot(), this.processChildrenList(this.root, this.getTopMostNodes(h), n);
				for (var g = 0; g < l.length; g++) {
					var u = l[g], c = this.idToLNode[u.data("source")], d = this.idToLNode[u.data("target")];
					c !== d && 0 == c.getEdgesBetween(d).length && (s.add(n.newEdge(), c, d).id = u.id());
				}
				var p = r(function(t, e) {
					"number" == typeof t && (t = e);
					var i = t.data("id"), r = o.idToLNode[i];
					return {
						x: r.getRect().getCenterX(),
						y: r.getRect().getCenterY()
					};
				}, "getPositions"), f = r(function s() {
					for (var a, h = r(function() {
						i.fit && i.cy.fit(i.eles, i.padding), t || (t = !0, o.cy.one("layoutready", i.ready), o.cy.trigger({
							type: "layoutready",
							layout: o
						}));
					}, "afterReposition"), l = o.options.refresh, g = 0; g < l && !a; g++) a = o.stopped || o.layout.tick();
					if (a) {
						n.checkLayoutSuccess() && !n.isSubLayout && n.doPostLayout(), n.tilingPostLayout && n.tilingPostLayout(), n.isLayoutFinished = !0, o.options.eles.nodes().positions(p), h(), o.cy.one("layoutstop", o.options.stop), o.cy.trigger({
							type: "layoutstop",
							layout: o
						}), e && cancelAnimationFrame(e), t = !1;
						return;
					}
					var u = o.layout.getPositionsData();
					i.eles.nodes().positions(function(t, e) {
						if ("number" == typeof t && (t = e), !t.isParent()) {
							for (var i = t.id(), r = u[i], n = t; null == r && (r = u[n.data("parent")] || u["DummyCompound_" + n.data("parent")], u[i] = r, null != (n = n.parent()[0])););
							return null != r ? {
								x: r.x,
								y: r.y
							} : {
								x: t.position("x"),
								y: t.position("y")
							};
						}
					}), h(), e = requestAnimationFrame(s);
				}, "iterateAnimated");
				return n.addListener("layoutstarted", function() {
					"during" === o.options.animate && (e = requestAnimationFrame(f));
				}), n.runLayout(), "during" !== this.options.animate && (o.options.eles.nodes().not(":parent").layoutPositions(o, o.options, p), t = !1), this;
			}, d.prototype.getTopMostNodes = function(t) {
				for (var e = {}, i = 0; i < t.length; i++) e[t[i].id()] = !0;
				return t.filter(function(t, i) {
					"number" == typeof t && (t = i);
					for (var r = t.parent()[0]; null != r;) {
						if (e[r.id()]) return !1;
						r = r.parent()[0];
					}
					return !0;
				});
			}, d.prototype.processChildrenList = function(t, e, i) {
				for (var r = e.length, n = 0; n < r; n++) {
					var o, s = e[n], a = s.children(), u = s.layoutDimensions({ nodeDimensionsIncludeLabels: this.options.nodeDimensionsIncludeLabels });
					if ((o = null != s.outerWidth() && null != s.outerHeight() ? t.add(new h(i.graphManager, new l(s.position("x") - u.w / 2, s.position("y") - u.h / 2), new g(parseFloat(u.w), parseFloat(u.h)))) : t.add(new h(this.graphManager))).id = s.data("id"), o.paddingLeft = parseInt(s.css("padding")), o.paddingTop = parseInt(s.css("padding")), o.paddingRight = parseInt(s.css("padding")), o.paddingBottom = parseInt(s.css("padding")), this.options.nodeDimensionsIncludeLabels && s.isParent()) {
						var c = s.boundingBox({
							includeLabels: !0,
							includeNodes: !1
						}).w, d = s.boundingBox({
							includeLabels: !0,
							includeNodes: !1
						}).h, p = s.css("text-halign");
						o.labelWidth = c, o.labelHeight = d, o.labelPos = p;
					}
					if (this.idToLNode[s.data("id")] = o, isNaN(o.rect.x) && (o.rect.x = 0), isNaN(o.rect.y) && (o.rect.y = 0), null != a && a.length > 0) {
						var f = i.getGraphManager().add(i.newGraph(), o);
						this.processChildrenList(f, a, i);
					}
				}
			}, d.prototype.stop = function() {
				return this.stopped = !0, this;
			};
			var f = r(function(t) {
				t("layout", "cose-bilkent", d);
			}, "register");
			"u" > typeof cytoscape && f(cytoscape), t.exports = f;
		}], i = {};
		function n(t) {
			if (i[t]) return i[t].exports;
			var r = i[t] = {
				i: t,
				l: !1,
				exports: {}
			};
			return e[t].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
		}
		return r(n, "__webpack_require__"), n.m = e, n.c = i, n.i = function(t) {
			return t;
		}, n.d = function(t, e, i) {
			n.o(t, e) || Object.defineProperty(t, e, {
				configurable: !1,
				enumerable: !0,
				get: i
			});
		}, n.n = function(t) {
			var e = t && t.__esModule ? r(function() {
				return t.default;
			}, "getDefault") : r(function() {
				return t;
			}, "getModuleExports");
			return n.d(e, "a", e), e;
		}, n.o = function(t, e) {
			return Object.prototype.hasOwnProperty.call(t, e);
		}, n.p = "", n(n.s = 1);
	});
})(), 1);
function l(t, e) {
	t.forEach((t) => {
		let i = {
			id: t.id,
			labelText: t.label,
			height: t.height,
			width: t.width,
			padding: t.padding ?? 0
		};
		Object.keys(t).forEach((e) => {
			[
				"id",
				"label",
				"height",
				"width",
				"padding",
				"x",
				"y"
			].includes(e) || (i[e] = t[e]);
		}), e.add({
			group: "nodes",
			data: i,
			position: {
				x: t.x ?? 0,
				y: t.y ?? 0
			}
		});
	});
}
function g(t, e) {
	t.forEach((t) => {
		let i = {
			id: t.id,
			source: t.start,
			target: t.end
		};
		Object.keys(t).forEach((e) => {
			[
				"id",
				"start",
				"end"
			].includes(e) || (i[e] = t[e]);
		}), e.add({
			group: "edges",
			data: i
		});
	});
}
function u(i) {
	return new Promise((r) => {
		let n = e("body").append("div").attr("id", "cy").attr("style", "display:none"), s = o({
			container: document.getElementById("cy"),
			style: [{
				selector: "edge",
				style: { "curve-style": "bezier" }
			}]
		});
		n.remove(), l(i.nodes, s), g(i.edges, s), s.nodes().forEach(function(t) {
			t.layoutDimensions = () => {
				let e = t.data();
				return {
					w: e.width,
					h: e.height
				};
			};
		}), s.layout({
			name: "cose-bilkent",
			quality: "proof",
			styleEnabled: !1,
			animate: !1
		}).run(), s.ready((e) => {
			t.info("Cytoscape ready", e), r(s);
		});
	});
}
function c(t) {
	return t.nodes().map((t) => {
		let e = t.data(), i = t.position(), r = {
			id: e.id,
			x: i.x,
			y: i.y
		};
		return Object.keys(e).forEach((t) => {
			"id" !== t && (r[t] = e[t]);
		}), r;
	});
}
function d(t) {
	return t.edges().map((t) => {
		let e = t.data(), i = t._private.rscratch, r = {
			id: e.id,
			source: e.source,
			target: e.target,
			startX: i.startX,
			startY: i.startY,
			midX: i.midX,
			midY: i.midY,
			endX: i.endX,
			endY: i.endY
		};
		return Object.keys(e).forEach((t) => {
			[
				"id",
				"source",
				"target"
			].includes(t) || (r[t] = e[t]);
		}), r;
	});
}
async function p(e, i) {
	t.debug("Starting cose-bilkent layout algorithm");
	try {
		f(e);
		let i = await u(e), r = c(i), n = d(i);
		return t.debug(`Layout completed: ${r.length} nodes, ${n.length} edges`), {
			nodes: r,
			edges: n
		};
	} catch (e) {
		throw t.error("Error in cose-bilkent layout algorithm:", e), e;
	}
}
function f(t) {
	if (!t) throw Error("Layout data is required");
	if (!t.config) throw Error("Configuration is required in layout data");
	if (!t.rootNode) throw Error("Root node is required");
	if (!t.nodes || !Array.isArray(t.nodes)) throw Error("No nodes found in layout data");
	if (!Array.isArray(t.edges)) throw Error("Edges array is required in layout data");
	return !0;
}
o.use(h.default), r(l, "addNodes"), r(g, "addEdges"), r(u, "createCytoscapeInstance"), r(c, "extractPositionedNodes"), r(d, "extractPositionedEdges"), r(p, "executeCoseBilkentLayout"), r(f, "validateLayoutData");
var y = r(async (t, e, { insertCluster: i, insertEdge: r, insertEdgeLabel: n, insertMarkers: o, insertNode: s, log: a, positionEdgeLabel: h }, { algorithm: l }) => {
	let g = {}, u = {}, c = e.select("g");
	o(c, t.markers, t.type, t.diagramId);
	let d = c.insert("g").attr("class", "subgraphs"), f = c.insert("g").attr("class", "edgePaths"), y = c.insert("g").attr("class", "edgeLabels"), E = c.insert("g").attr("class", "nodes");
	a.debug("Inserting nodes into DOM for dimension calculation"), await Promise.all(t.nodes.map(async (e) => {
		if (e.isGroup) {
			let t = { ...e };
			u[e.id] = t, g[e.id] = t, await i(d, e);
		} else {
			let i = { ...e };
			g[e.id] = i;
			let r = await s(E, e, {
				config: t.config,
				dir: t.direction || "TB"
			}), n = r.node().getBBox();
			i.width = n.width, i.height = n.height, i.domId = r, a.debug(`Node ${e.id} dimensions: ${n.width}x${n.height}`);
		}
	})), a.debug("Running cose-bilkent layout algorithm");
	let v = {
		...t,
		nodes: t.nodes.map((t) => {
			let e = g[t.id];
			return {
				...t,
				width: e.width,
				height: e.height
			};
		})
	}, A = await p(v, t.config);
	a.debug("Positioning nodes based on layout results"), A.nodes.forEach((t) => {
		let e = g[t.id];
		e?.domId && (e.domId.attr("transform", `translate(${t.x}, ${t.y})`), e.x = t.x, e.y = t.y, a.debug(`Positioned node ${e.id} at center (${t.x}, ${t.y})`));
	}), A.edges.forEach((e) => {
		let i = t.edges.find((t) => t.id === e.id);
		i && (i.points = [
			{
				x: e.startX,
				y: e.startY
			},
			{
				x: e.midX,
				y: e.midY
			},
			{
				x: e.endX,
				y: e.endY
			}
		]);
	}), a.debug("Inserting and positioning edges"), await Promise.all(t.edges.map(async (e) => {
		await n(y, e);
		let i = g[e.start ?? ""], o = g[e.end ?? ""];
		if (i && o) {
			let n = A.edges.find((t) => t.id === e.id);
			if (n) {
				a.debug("APA01 positionedEdge", n);
				let s = { ...e }, l = r(f, s, u, t.type, i, o, t.diagramId);
				h(s, l);
			} else {
				let n = {
					...e,
					points: [{
						x: i.x || 0,
						y: i.y || 0
					}, {
						x: o.x || 0,
						y: o.y || 0
					}]
				}, s = r(f, n, u, t.type, i, o, t.diagramId);
				h(n, s);
			}
		}
	})), a.debug("Cose-bilkent rendering completed");
}, "render");
export { y as render };
