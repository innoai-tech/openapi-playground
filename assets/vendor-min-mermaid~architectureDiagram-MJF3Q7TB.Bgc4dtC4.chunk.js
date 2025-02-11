import { F as Ft } from "./vendor-min-mermaid~chunk-PWCSEZZ4.xEHpHduO.chunk.js";
import { s } from "./vendor-min-mermaid~chunk-VSLJSFIP.yC801lW0.chunk.js";
import { c } from "./vendor-min-mermaid~chunk-4KE642ED.C6bdL_Ha.chunk.js";
import { p } from "./vendor-min-mermaid~chunk-QTE35VYX.ixi7v6Mq.chunk.js";
import { d } from "./vendor-min-mermaid~chunk-3YFHLAX3.uIQbCDI_.chunk.js";
import { S as St, y as yt, j as je } from "./vendor-min-mermaid~chunk-D4BOYBYT.Dfa7xGLL.chunk.js";
import { Z as Zt } from "./vendor-min-mermaid~chunk-AFC6EC46.6qmv9LnR.chunk.js";
import { m as m$1, q, n } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js";
import { v as vf, S as Sf, k as kf, T as Tf, B as Bf, w as wf, z as zl, b as bf, t as tt, W as Wl, r as rh, d as dl } from "./vendor-min-mermaid~chunk-OR2G2HG5.D15VT8Rm.chunk.js";
var Oe = /* @__PURE__ */ n((le, xe) => {
  m$1(function(w, N) {
    typeof le == "object" && typeof xe == "object" ? xe.exports = /* @__PURE__ */ N() : typeof define == "function" && define.amd ? define([], N) : typeof le == "object" ? le.layoutBase = /* @__PURE__ */ N() : w.layoutBase = /* @__PURE__ */ N();
  }, "webpackUniversalModuleDefinition")(le, function() {
    return function(E) {
      var w = {};
      function N(u) {
        if (w[u]) return w[u].exports;
        var o = w[u] = {
          i: u,
          l: false,
          exports: {}
        };
        return E[u].call(o.exports, o, o.exports, N), o.l = true, o.exports;
      }
      return m$1(N, "__webpack_require__"), N.m = E, N.c = w, N.i = function(u) {
        return u;
      }, N.d = function(u, o, a) {
        N.o(u, o) || Object.defineProperty(u, o, {
          configurable: false,
          enumerable: true,
          get: a
        });
      }, N.n = function(u) {
        var o = u && u.__esModule ? m$1(function() {
          return u.default;
        }, "getDefault") : m$1(function() {
          return u;
        }, "getModuleExports");
        return N.d(o, "a", o), o;
      }, N.o = function(u, o) {
        return Object.prototype.hasOwnProperty.call(u, o);
      }, N.p = "", N(N.s = 28);
    }([
      function(E, w, N) {
        function u() {
        }
        m$1(u, "LayoutConstants"), u.QUALITY = 1, u.DEFAULT_CREATE_BENDS_AS_NEEDED = false, u.DEFAULT_INCREMENTAL = false, u.DEFAULT_ANIMATION_ON_LAYOUT = true, u.DEFAULT_ANIMATION_DURING_LAYOUT = false, u.DEFAULT_ANIMATION_PERIOD = 50, u.DEFAULT_UNIFORM_LEAF_NODE_SIZES = false, u.DEFAULT_GRAPH_MARGIN = 15, u.NODE_DIMENSIONS_INCLUDE_LABELS = false, u.SIMPLE_NODE_SIZE = 40, u.SIMPLE_NODE_HALF_SIZE = u.SIMPLE_NODE_SIZE / 2, u.EMPTY_COMPOUND_NODE_SIZE = 40, u.MIN_EDGE_LENGTH = 1, u.WORLD_BOUNDARY = 1e6, u.INITIAL_WORLD_BOUNDARY = u.WORLD_BOUNDARY / 1e3, u.WORLD_CENTER_X = 1200, u.WORLD_CENTER_Y = 900, E.exports = u;
      },
      function(E, w, N) {
        var u = /* @__PURE__ */ N(2), o = /* @__PURE__ */ N(8), a = /* @__PURE__ */ N(9);
        function t(c2, e, p2) {
          u.call(this, p2), this.isOverlapingSourceAndTarget = false, this.vGraphObject = p2, this.bendpoints = [], this.source = c2, this.target = e;
        }
        m$1(t, "LEdge"), t.prototype = /* @__PURE__ */ Object.create(u.prototype);
        for (var n2 in u) t[n2] = u[n2];
        t.prototype.getSource = function() {
          return this.source;
        }, t.prototype.getTarget = function() {
          return this.target;
        }, t.prototype.isInterGraph = function() {
          return this.isInterGraph;
        }, t.prototype.getLength = function() {
          return this.length;
        }, t.prototype.isOverlapingSourceAndTarget = function() {
          return this.isOverlapingSourceAndTarget;
        }, t.prototype.getBendpoints = function() {
          return this.bendpoints;
        }, t.prototype.getLca = function() {
          return this.lca;
        }, t.prototype.getSourceInLca = function() {
          return this.sourceInLca;
        }, t.prototype.getTargetInLca = function() {
          return this.targetInLca;
        }, t.prototype.getOtherEnd = function(c2) {
          if (this.source === c2) return this.target;
          if (this.target === c2) return this.source;
          throw "Node is not incident with this edge";
        }, t.prototype.getOtherEndInGraph = function(c2, e) {
          for (var p2 = /* @__PURE__ */ this.getOtherEnd(c2), i = /* @__PURE__ */ e.getGraphManager().getRoot(); ; ) {
            if (p2.getOwner() == e) return p2;
            if (p2.getOwner() == i) break;
            p2 = /* @__PURE__ */ p2.getOwner().getParent();
          }
          return null;
        }, t.prototype.updateLength = function() {
          var c2 = new Array(4);
          this.isOverlapingSourceAndTarget = /* @__PURE__ */ o.getIntersection(/* @__PURE__ */ this.target.getRect(), /* @__PURE__ */ this.source.getRect(), c2), this.isOverlapingSourceAndTarget || (this.lengthX = c2[0] - c2[2], this.lengthY = c2[1] - c2[3], Math.abs(this.lengthX) < 1 && (this.lengthX = /* @__PURE__ */ a.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = /* @__PURE__ */ a.sign(this.lengthY)), this.length = /* @__PURE__ */ Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY));
        }, t.prototype.updateLengthSimple = function() {
          this.lengthX = this.target.getCenterX() - this.source.getCenterX(), this.lengthY = this.target.getCenterY() - this.source.getCenterY(), Math.abs(this.lengthX) < 1 && (this.lengthX = /* @__PURE__ */ a.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = /* @__PURE__ */ a.sign(this.lengthY)), this.length = /* @__PURE__ */ Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
        }, E.exports = t;
      },
      function(E, w, N) {
        function u(o) {
          this.vGraphObject = o;
        }
        m$1(u, "LGraphObject"), E.exports = u;
      },
      function(E, w, N) {
        var u = /* @__PURE__ */ N(2), o = /* @__PURE__ */ N(10), a = /* @__PURE__ */ N(13), t = /* @__PURE__ */ N(0), n2 = /* @__PURE__ */ N(16), c2 = /* @__PURE__ */ N(5);
        function e(i, r, h, f) {
          h == null && f == null && (f = r), u.call(this, f), i.graphManager != null && (i = i.graphManager), this.estimatedSize = o.MIN_VALUE, this.inclusionTreeDepth = o.MAX_VALUE, this.vGraphObject = f, this.edges = [], this.graphManager = i, h != null && r != null ? this.rect = new a(r.x, r.y, h.width, h.height) : this.rect = new a();
        }
        m$1(e, "LNode"), e.prototype = /* @__PURE__ */ Object.create(u.prototype);
        for (var p2 in u) e[p2] = u[p2];
        e.prototype.getEdges = function() {
          return this.edges;
        }, e.prototype.getChild = function() {
          return this.child;
        }, e.prototype.getOwner = function() {
          return this.owner;
        }, e.prototype.getWidth = function() {
          return this.rect.width;
        }, e.prototype.setWidth = function(i) {
          this.rect.width = i;
        }, e.prototype.getHeight = function() {
          return this.rect.height;
        }, e.prototype.setHeight = function(i) {
          this.rect.height = i;
        }, e.prototype.getCenterX = function() {
          return this.rect.x + this.rect.width / 2;
        }, e.prototype.getCenterY = function() {
          return this.rect.y + this.rect.height / 2;
        }, e.prototype.getCenter = function() {
          return new c2(this.rect.x + this.rect.width / 2, this.rect.y + this.rect.height / 2);
        }, e.prototype.getLocation = function() {
          return new c2(this.rect.x, this.rect.y);
        }, e.prototype.getRect = function() {
          return this.rect;
        }, e.prototype.getDiagonal = function() {
          return Math.sqrt(this.rect.width * this.rect.width + this.rect.height * this.rect.height);
        }, e.prototype.getHalfTheDiagonal = function() {
          return Math.sqrt(this.rect.height * this.rect.height + this.rect.width * this.rect.width) / 2;
        }, e.prototype.setRect = function(i, r) {
          this.rect.x = i.x, this.rect.y = i.y, this.rect.width = r.width, this.rect.height = r.height;
        }, e.prototype.setCenter = function(i, r) {
          this.rect.x = i - this.rect.width / 2, this.rect.y = r - this.rect.height / 2;
        }, e.prototype.setLocation = function(i, r) {
          this.rect.x = i, this.rect.y = r;
        }, e.prototype.moveBy = function(i, r) {
          this.rect.x += i, this.rect.y += r;
        }, e.prototype.getEdgeListToNode = function(i) {
          var r = [], f = this;
          return f.edges.forEach(function(l) {
            if (l.target == i) {
              if (l.source != f) throw "Incorrect edge source!";
              r.push(l);
            }
          }), r;
        }, e.prototype.getEdgesBetween = function(i) {
          var r = [], f = this;
          return f.edges.forEach(function(l) {
            if (!(l.source == f || l.target == f)) throw "Incorrect edge source and/or target";
            (l.target == i || l.source == i) && r.push(l);
          }), r;
        }, e.prototype.getNeighborsList = function() {
          var i = /* @__PURE__ */ new Set(), r = this;
          return r.edges.forEach(function(h) {
            if (h.source == r) i.add(h.target);
            else {
              if (h.target != r) throw "Incorrect incidency!";
              i.add(h.source);
            }
          }), i;
        }, e.prototype.withChildren = function() {
          var i = /* @__PURE__ */ new Set(), r, h;
          if (i.add(this), this.child != null) for (var f = /* @__PURE__ */ this.child.getNodes(), l = 0; l < f.length; l++) r = f[l], h = /* @__PURE__ */ r.withChildren(), h.forEach(function(A) {
            i.add(A);
          });
          return i;
        }, e.prototype.getNoOfChildren = function() {
          var i = 0, r;
          if (this.child == null) i = 1;
          else for (var h = /* @__PURE__ */ this.child.getNodes(), f = 0; f < h.length; f++) r = h[f], i += /* @__PURE__ */ r.getNoOfChildren();
          return i == 0 && (i = 1), i;
        }, e.prototype.getEstimatedSize = function() {
          if (this.estimatedSize == o.MIN_VALUE) throw "assert failed";
          return this.estimatedSize;
        }, e.prototype.calcEstimatedSize = function() {
          return this.child == null ? this.estimatedSize = (this.rect.width + this.rect.height) / 2 : (this.estimatedSize = /* @__PURE__ */ this.child.calcEstimatedSize(), this.rect.width = this.estimatedSize, this.rect.height = this.estimatedSize, this.estimatedSize);
        }, e.prototype.scatter = function() {
          var i, r, h = -t.INITIAL_WORLD_BOUNDARY, f = t.INITIAL_WORLD_BOUNDARY;
          i = t.WORLD_CENTER_X + n2.nextDouble() * (f - h) + h;
          var l = -t.INITIAL_WORLD_BOUNDARY, A = t.INITIAL_WORLD_BOUNDARY;
          r = t.WORLD_CENTER_Y + n2.nextDouble() * (A - l) + l, this.rect.x = i, this.rect.y = r;
        }, e.prototype.updateBounds = function() {
          if (this.getChild() == null) throw "assert failed";
          if (this.getChild().getNodes().length != 0) {
            var i = /* @__PURE__ */ this.getChild();
            if (i.updateBounds(true), this.rect.x = /* @__PURE__ */ i.getLeft(), this.rect.y = /* @__PURE__ */ i.getTop(), this.setWidth(i.getRight() - i.getLeft()), this.setHeight(i.getBottom() - i.getTop()), t.NODE_DIMENSIONS_INCLUDE_LABELS) {
              var r = i.getRight() - i.getLeft(), h = i.getBottom() - i.getTop();
              this.labelWidth && (this.labelPosHorizontal == "left" ? (this.rect.x -= this.labelWidth, this.setWidth(r + this.labelWidth)) : this.labelPosHorizontal == "center" && this.labelWidth > r ? (this.rect.x -= (this.labelWidth - r) / 2, this.setWidth(this.labelWidth)) : this.labelPosHorizontal == "right" && this.setWidth(r + this.labelWidth)), this.labelHeight && (this.labelPosVertical == "top" ? (this.rect.y -= this.labelHeight, this.setHeight(h + this.labelHeight)) : this.labelPosVertical == "center" && this.labelHeight > h ? (this.rect.y -= (this.labelHeight - h) / 2, this.setHeight(this.labelHeight)) : this.labelPosVertical == "bottom" && this.setHeight(h + this.labelHeight));
            }
          }
        }, e.prototype.getInclusionTreeDepth = function() {
          if (this.inclusionTreeDepth == o.MAX_VALUE) throw "assert failed";
          return this.inclusionTreeDepth;
        }, e.prototype.transform = function(i) {
          var r = this.rect.x;
          r > t.WORLD_BOUNDARY ? r = t.WORLD_BOUNDARY : r < -t.WORLD_BOUNDARY && (r = -t.WORLD_BOUNDARY);
          var h = this.rect.y;
          h > t.WORLD_BOUNDARY ? h = t.WORLD_BOUNDARY : h < -t.WORLD_BOUNDARY && (h = -t.WORLD_BOUNDARY);
          var f = new c2(r, h), l = /* @__PURE__ */ i.inverseTransformPoint(f);
          this.setLocation(l.x, l.y);
        }, e.prototype.getLeft = function() {
          return this.rect.x;
        }, e.prototype.getRight = function() {
          return this.rect.x + this.rect.width;
        }, e.prototype.getTop = function() {
          return this.rect.y;
        }, e.prototype.getBottom = function() {
          return this.rect.y + this.rect.height;
        }, e.prototype.getParent = function() {
          return this.owner == null ? null : this.owner.getParent();
        }, E.exports = e;
      },
      function(E, w, N) {
        var u = /* @__PURE__ */ N(0);
        function o() {
        }
        m$1(o, "FDLayoutConstants");
        for (var a in u) o[a] = u[a];
        o.MAX_ITERATIONS = 2500, o.DEFAULT_EDGE_LENGTH = 50, o.DEFAULT_SPRING_STRENGTH = 0.45, o.DEFAULT_REPULSION_STRENGTH = 4500, o.DEFAULT_GRAVITY_STRENGTH = 0.4, o.DEFAULT_COMPOUND_GRAVITY_STRENGTH = 1, o.DEFAULT_GRAVITY_RANGE_FACTOR = 3.8, o.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = 1.5, o.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION = true, o.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION = true, o.DEFAULT_COOLING_FACTOR_INCREMENTAL = 0.3, o.COOLING_ADAPTATION_FACTOR = 0.33, o.ADAPTATION_LOWER_NODE_LIMIT = 1e3, o.ADAPTATION_UPPER_NODE_LIMIT = 5e3, o.MAX_NODE_DISPLACEMENT_INCREMENTAL = 100, o.MAX_NODE_DISPLACEMENT = o.MAX_NODE_DISPLACEMENT_INCREMENTAL * 3, o.MIN_REPULSION_DIST = o.DEFAULT_EDGE_LENGTH / 10, o.CONVERGENCE_CHECK_PERIOD = 100, o.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = 0.1, o.MIN_EDGE_LENGTH = 1, o.GRID_CALCULATION_CHECK_PERIOD = 10, E.exports = o;
      },
      function(E, w, N) {
        function u(o, a) {
          o == null && a == null ? (this.x = 0, this.y = 0) : (this.x = o, this.y = a);
        }
        m$1(u, "PointD"), u.prototype.getX = function() {
          return this.x;
        }, u.prototype.getY = function() {
          return this.y;
        }, u.prototype.setX = function(o) {
          this.x = o;
        }, u.prototype.setY = function(o) {
          this.y = o;
        }, u.prototype.getDifference = function(o) {
          return new DimensionD(this.x - o.x, this.y - o.y);
        }, u.prototype.getCopy = function() {
          return new u(this.x, this.y);
        }, u.prototype.translate = function(o) {
          return this.x += o.width, this.y += o.height, this;
        }, E.exports = u;
      },
      function(E, w, N) {
        var u = /* @__PURE__ */ N(2), o = /* @__PURE__ */ N(10), a = /* @__PURE__ */ N(0), t = /* @__PURE__ */ N(7), n2 = /* @__PURE__ */ N(3), c2 = /* @__PURE__ */ N(1), e = /* @__PURE__ */ N(13), p2 = /* @__PURE__ */ N(12), i = /* @__PURE__ */ N(11);
        function r(f, l, A) {
          u.call(this, A), this.estimatedSize = o.MIN_VALUE, this.margin = a.DEFAULT_GRAPH_MARGIN, this.edges = [], this.nodes = [], this.isConnected = false, this.parent = f, l != null && l instanceof t ? this.graphManager = l : l != null && l instanceof Layout && (this.graphManager = l.graphManager);
        }
        m$1(r, "LGraph"), r.prototype = /* @__PURE__ */ Object.create(u.prototype);
        for (var h in u) r[h] = u[h];
        r.prototype.getNodes = function() {
          return this.nodes;
        }, r.prototype.getEdges = function() {
          return this.edges;
        }, r.prototype.getGraphManager = function() {
          return this.graphManager;
        }, r.prototype.getParent = function() {
          return this.parent;
        }, r.prototype.getLeft = function() {
          return this.left;
        }, r.prototype.getRight = function() {
          return this.right;
        }, r.prototype.getTop = function() {
          return this.top;
        }, r.prototype.getBottom = function() {
          return this.bottom;
        }, r.prototype.isConnected = function() {
          return this.isConnected;
        }, r.prototype.add = function(f, l, A) {
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
        }, r.prototype.remove = function(f) {
          var l = f;
          if (f instanceof n2) {
            if (l == null) throw "Node is null!";
            if (!(l.owner != null && l.owner == this)) throw "Owner graph is invalid!";
            if (this.graphManager == null) throw "Owner graph manager is invalid!";
            for (var A = /* @__PURE__ */ l.edges.slice(), v, y = A.length, D = 0; D < y; D++) v = A[D], v.isInterGraph ? this.graphManager.remove(v) : v.source.owner.remove(v);
            var F = /* @__PURE__ */ this.nodes.indexOf(l);
            if (F == -1) throw "Node not in owner node list!";
            this.nodes.splice(F, 1);
          } else if (f instanceof c2) {
            var v = f;
            if (v == null) throw "Edge is null!";
            if (!(v.source != null && v.target != null)) throw "Source and/or target is null!";
            if (!(v.source.owner != null && v.target.owner != null && v.source.owner == this && v.target.owner == this)) throw "Source and/or target owner is invalid!";
            var C = /* @__PURE__ */ v.source.edges.indexOf(v), G = /* @__PURE__ */ v.target.edges.indexOf(v);
            if (!(C > -1 && G > -1)) throw "Source and/or target doesn't know this edge!";
            v.source.edges.splice(C, 1), v.target != v.source && v.target.edges.splice(G, 1);
            var F = /* @__PURE__ */ v.source.owner.getEdges().indexOf(v);
            if (F == -1) throw "Not in owner's edge list!";
            v.source.owner.getEdges().splice(F, 1);
          }
        }, r.prototype.updateLeftTop = function() {
          for (var f = o.MAX_VALUE, l = o.MAX_VALUE, A, v, y, D = /* @__PURE__ */ this.getNodes(), F = D.length, C = 0; C < F; C++) {
            var G = D[C];
            A = /* @__PURE__ */ G.getTop(), v = /* @__PURE__ */ G.getLeft(), f > A && (f = A), l > v && (l = v);
          }
          return f == o.MAX_VALUE ? null : (D[0].getParent().paddingLeft != null ? y = D[0].getParent().paddingLeft : y = this.margin, this.left = l - y, this.top = f - y, new p2(this.left, this.top));
        }, r.prototype.updateBounds = function(f) {
          for (var l = o.MAX_VALUE, A = -o.MAX_VALUE, v = o.MAX_VALUE, y = -o.MAX_VALUE, D, F, C, G, z, X = this.nodes, rt = X.length, I = 0; I < rt; I++) {
            var J = X[I];
            f && J.child != null && J.updateBounds(), D = /* @__PURE__ */ J.getLeft(), F = /* @__PURE__ */ J.getRight(), C = /* @__PURE__ */ J.getTop(), G = /* @__PURE__ */ J.getBottom(), l > D && (l = D), A < F && (A = F), v > C && (v = C), y < G && (y = G);
          }
          var s2 = new e(l, v, A - l, y - v);
          l == o.MAX_VALUE && (this.left = /* @__PURE__ */ this.parent.getLeft(), this.right = /* @__PURE__ */ this.parent.getRight(), this.top = /* @__PURE__ */ this.parent.getTop(), this.bottom = /* @__PURE__ */ this.parent.getBottom()), X[0].getParent().paddingLeft != null ? z = X[0].getParent().paddingLeft : z = this.margin, this.left = s2.x - z, this.right = s2.x + s2.width + z, this.top = s2.y - z, this.bottom = s2.y + s2.height + z;
        }, r.calculateBounds = function(f) {
          for (var l = o.MAX_VALUE, A = -o.MAX_VALUE, v = o.MAX_VALUE, y = -o.MAX_VALUE, D, F, C, G, z = f.length, X = 0; X < z; X++) {
            var rt = f[X];
            D = /* @__PURE__ */ rt.getLeft(), F = /* @__PURE__ */ rt.getRight(), C = /* @__PURE__ */ rt.getTop(), G = /* @__PURE__ */ rt.getBottom(), l > D && (l = D), A < F && (A = F), v > C && (v = C), y < G && (y = G);
          }
          var I = new e(l, v, A - l, y - v);
          return I;
        }, r.prototype.getInclusionTreeDepth = function() {
          return this == this.graphManager.getRoot() ? 1 : this.parent.getInclusionTreeDepth();
        }, r.prototype.getEstimatedSize = function() {
          if (this.estimatedSize == o.MIN_VALUE) throw "assert failed";
          return this.estimatedSize;
        }, r.prototype.calcEstimatedSize = function() {
          for (var f = 0, l = this.nodes, A = l.length, v = 0; v < A; v++) {
            var y = l[v];
            f += /* @__PURE__ */ y.calcEstimatedSize();
          }
          return f == 0 ? this.estimatedSize = a.EMPTY_COMPOUND_NODE_SIZE : this.estimatedSize = f / Math.sqrt(this.nodes.length), this.estimatedSize;
        }, r.prototype.updateConnected = function() {
          var f = this;
          if (this.nodes.length == 0) {
            this.isConnected = true;
            return;
          }
          var l = new i(), A = /* @__PURE__ */ new Set(), v = this.nodes[0], y, D, F = /* @__PURE__ */ v.withChildren();
          for (F.forEach(function(I) {
            l.push(I), A.add(I);
          }); l.length !== 0; ) {
            v = /* @__PURE__ */ l.shift(), y = /* @__PURE__ */ v.getEdges();
            for (var C = y.length, G = 0; G < C; G++) {
              var z = y[G];
              if (D = /* @__PURE__ */ z.getOtherEndInGraph(v, this), D != null && !A.has(D)) {
                var X = /* @__PURE__ */ D.withChildren();
                X.forEach(function(I) {
                  l.push(I), A.add(I);
                });
              }
            }
          }
          if (this.isConnected = false, A.size >= this.nodes.length) {
            var rt = 0;
            A.forEach(function(I) {
              I.owner == f && rt++;
            }), rt == this.nodes.length && (this.isConnected = true);
          }
        }, E.exports = r;
      },
      function(E, w, N) {
        var u, o = /* @__PURE__ */ N(1);
        function a(t) {
          u = /* @__PURE__ */ N(6), this.layout = t, this.graphs = [], this.edges = [];
        }
        m$1(a, "LGraphManager"), a.prototype.addRoot = function() {
          var t = /* @__PURE__ */ this.layout.newGraph(), n2 = /* @__PURE__ */ this.layout.newNode(null), c2 = /* @__PURE__ */ this.add(t, n2);
          return this.setRootGraph(c2), this.rootGraph;
        }, a.prototype.add = function(t, n2, c2, e, p2) {
          if (c2 == null && e == null && p2 == null) {
            if (t == null) throw "Graph is null!";
            if (n2 == null) throw "Parent node is null!";
            if (this.graphs.indexOf(t) > -1) throw "Graph already in this graph mgr!";
            if (this.graphs.push(t), t.parent != null) throw "Already has a parent!";
            if (n2.child != null) throw "Already has a child!";
            return t.parent = n2, n2.child = t, t;
          } else {
            p2 = c2, e = n2, c2 = t;
            var i = /* @__PURE__ */ e.getOwner(), r = /* @__PURE__ */ p2.getOwner();
            if (!(i != null && i.getGraphManager() == this)) throw "Source not in this graph mgr!";
            if (!(r != null && r.getGraphManager() == this)) throw "Target not in this graph mgr!";
            if (i == r) return c2.isInterGraph = false, i.add(c2, e, p2);
            if (c2.isInterGraph = true, c2.source = e, c2.target = p2, this.edges.indexOf(c2) > -1) throw "Edge already in inter-graph edge list!";
            if (this.edges.push(c2), !(c2.source != null && c2.target != null)) throw "Edge source and/or target is null!";
            if (!(c2.source.edges.indexOf(c2) == -1 && c2.target.edges.indexOf(c2) == -1)) throw "Edge already in source and/or target incidency list!";
            return c2.source.edges.push(c2), c2.target.edges.push(c2), c2;
          }
        }, a.prototype.remove = function(t) {
          if (t instanceof u) {
            var n2 = t;
            if (n2.getGraphManager() != this) throw "Graph not in this graph mgr";
            if (!(n2 == this.rootGraph || n2.parent != null && n2.parent.graphManager == this)) throw "Invalid parent node!";
            var c2 = [];
            c2 = /* @__PURE__ */ c2.concat(/* @__PURE__ */ n2.getEdges());
            for (var e, p2 = c2.length, i = 0; i < p2; i++) e = c2[i], n2.remove(e);
            var r = [];
            r = /* @__PURE__ */ r.concat(/* @__PURE__ */ n2.getNodes());
            var h;
            p2 = r.length;
            for (var i = 0; i < p2; i++) h = r[i], n2.remove(h);
            n2 == this.rootGraph && this.setRootGraph(null);
            var f = /* @__PURE__ */ this.graphs.indexOf(n2);
            this.graphs.splice(f, 1), n2.parent = null;
          } else if (t instanceof o) {
            if (e = t, e == null) throw "Edge is null!";
            if (!e.isInterGraph) throw "Not an inter-graph edge!";
            if (!(e.source != null && e.target != null)) throw "Source and/or target is null!";
            if (!(e.source.edges.indexOf(e) != -1 && e.target.edges.indexOf(e) != -1)) throw "Source and/or target doesn't know this edge!";
            var f = /* @__PURE__ */ e.source.edges.indexOf(e);
            if (e.source.edges.splice(f, 1), f = /* @__PURE__ */ e.target.edges.indexOf(e), e.target.edges.splice(f, 1), !(e.source.owner != null && e.source.owner.getGraphManager() != null)) throw "Edge owner graph or owner graph manager is null!";
            if (e.source.owner.getGraphManager().edges.indexOf(e) == -1) throw "Not in owner graph manager's edge list!";
            var f = /* @__PURE__ */ e.source.owner.getGraphManager().edges.indexOf(e);
            e.source.owner.getGraphManager().edges.splice(f, 1);
          }
        }, a.prototype.updateBounds = function() {
          this.rootGraph.updateBounds(true);
        }, a.prototype.getGraphs = function() {
          return this.graphs;
        }, a.prototype.getAllNodes = function() {
          if (this.allNodes == null) {
            for (var t = [], n2 = /* @__PURE__ */ this.getGraphs(), c2 = n2.length, e = 0; e < c2; e++) t = /* @__PURE__ */ t.concat(/* @__PURE__ */ n2[e].getNodes());
            this.allNodes = t;
          }
          return this.allNodes;
        }, a.prototype.resetAllNodes = function() {
          this.allNodes = null;
        }, a.prototype.resetAllEdges = function() {
          this.allEdges = null;
        }, a.prototype.resetAllNodesToApplyGravitation = function() {
          this.allNodesToApplyGravitation = null;
        }, a.prototype.getAllEdges = function() {
          if (this.allEdges == null) {
            for (var t = [], n2 = /* @__PURE__ */ this.getGraphs(), c2 = n2.length, e = 0; e < n2.length; e++) t = /* @__PURE__ */ t.concat(/* @__PURE__ */ n2[e].getEdges());
            t = /* @__PURE__ */ t.concat(this.edges), this.allEdges = t;
          }
          return this.allEdges;
        }, a.prototype.getAllNodesToApplyGravitation = function() {
          return this.allNodesToApplyGravitation;
        }, a.prototype.setAllNodesToApplyGravitation = function(t) {
          if (this.allNodesToApplyGravitation != null) throw "assert failed";
          this.allNodesToApplyGravitation = t;
        }, a.prototype.getRoot = function() {
          return this.rootGraph;
        }, a.prototype.setRootGraph = function(t) {
          if (t.getGraphManager() != this) throw "Root not in this graph mgr!";
          this.rootGraph = t, t.parent == null && (t.parent = /* @__PURE__ */ this.layout.newNode("Root node"));
        }, a.prototype.getLayout = function() {
          return this.layout;
        }, a.prototype.isOneAncestorOfOther = function(t, n2) {
          if (!(t != null && n2 != null)) throw "assert failed";
          if (t == n2) return true;
          var c2 = /* @__PURE__ */ t.getOwner(), e;
          do {
            if (e = /* @__PURE__ */ c2.getParent(), e == null) break;
            if (e == n2) return true;
            if (c2 = /* @__PURE__ */ e.getOwner(), c2 == null) break;
          } while (true);
          c2 = /* @__PURE__ */ n2.getOwner();
          do {
            if (e = /* @__PURE__ */ c2.getParent(), e == null) break;
            if (e == t) return true;
            if (c2 = /* @__PURE__ */ e.getOwner(), c2 == null) break;
          } while (true);
          return false;
        }, a.prototype.calcLowestCommonAncestors = function() {
          for (var t, n2, c2, e, p2, i = /* @__PURE__ */ this.getAllEdges(), r = i.length, h = 0; h < r; h++) {
            if (t = i[h], n2 = t.source, c2 = t.target, t.lca = null, t.sourceInLca = n2, t.targetInLca = c2, n2 == c2) {
              t.lca = /* @__PURE__ */ n2.getOwner();
              continue;
            }
            for (e = /* @__PURE__ */ n2.getOwner(); t.lca == null; ) {
              for (t.targetInLca = c2, p2 = /* @__PURE__ */ c2.getOwner(); t.lca == null; ) {
                if (p2 == e) {
                  t.lca = p2;
                  break;
                }
                if (p2 == this.rootGraph) break;
                if (t.lca != null) throw "assert failed";
                t.targetInLca = /* @__PURE__ */ p2.getParent(), p2 = /* @__PURE__ */ t.targetInLca.getOwner();
              }
              if (e == this.rootGraph) break;
              t.lca == null && (t.sourceInLca = /* @__PURE__ */ e.getParent(), e = /* @__PURE__ */ t.sourceInLca.getOwner());
            }
            if (t.lca == null) throw "assert failed";
          }
        }, a.prototype.calcLowestCommonAncestor = function(t, n2) {
          if (t == n2) return t.getOwner();
          var c2 = /* @__PURE__ */ t.getOwner();
          do {
            if (c2 == null) break;
            var e = /* @__PURE__ */ n2.getOwner();
            do {
              if (e == null) break;
              if (e == c2) return e;
              e = /* @__PURE__ */ e.getParent().getOwner();
            } while (true);
            c2 = /* @__PURE__ */ c2.getParent().getOwner();
          } while (true);
          return c2;
        }, a.prototype.calcInclusionTreeDepths = function(t, n2) {
          t == null && n2 == null && (t = this.rootGraph, n2 = 1);
          for (var c2, e = /* @__PURE__ */ t.getNodes(), p2 = e.length, i = 0; i < p2; i++) c2 = e[i], c2.inclusionTreeDepth = n2, c2.child != null && this.calcInclusionTreeDepths(c2.child, n2 + 1);
        }, a.prototype.includesInvalidEdge = function() {
          for (var t, n2 = [], c2 = this.edges.length, e = 0; e < c2; e++) t = this.edges[e], this.isOneAncestorOfOther(t.source, t.target) && n2.push(t);
          for (var e = 0; e < n2.length; e++) this.remove(n2[e]);
          return false;
        }, E.exports = a;
      },
      function(E, w, N) {
        var u = /* @__PURE__ */ N(12);
        function o() {
        }
        m$1(o, "IGeometry"), o.calcSeparationAmount = function(a, t, n2, c2) {
          if (!a.intersects(t)) throw "assert failed";
          var e = new Array(2);
          this.decideDirectionsForOverlappingNodes(a, t, e), n2[0] = Math.min(/* @__PURE__ */ a.getRight(), /* @__PURE__ */ t.getRight()) - Math.max(a.x, t.x), n2[1] = Math.min(/* @__PURE__ */ a.getBottom(), /* @__PURE__ */ t.getBottom()) - Math.max(a.y, t.y), a.getX() <= t.getX() && a.getRight() >= t.getRight() ? n2[0] += /* @__PURE__ */ Math.min(t.getX() - a.getX(), a.getRight() - t.getRight()) : t.getX() <= a.getX() && t.getRight() >= a.getRight() && (n2[0] += /* @__PURE__ */ Math.min(a.getX() - t.getX(), t.getRight() - a.getRight())), a.getY() <= t.getY() && a.getBottom() >= t.getBottom() ? n2[1] += /* @__PURE__ */ Math.min(t.getY() - a.getY(), a.getBottom() - t.getBottom()) : t.getY() <= a.getY() && t.getBottom() >= a.getBottom() && (n2[1] += /* @__PURE__ */ Math.min(a.getY() - t.getY(), t.getBottom() - a.getBottom()));
          var p2 = /* @__PURE__ */ Math.abs((t.getCenterY() - a.getCenterY()) / (t.getCenterX() - a.getCenterX()));
          t.getCenterY() === a.getCenterY() && t.getCenterX() === a.getCenterX() && (p2 = 1);
          var i = p2 * n2[0], r = n2[1] / p2;
          n2[0] < r ? r = n2[0] : i = n2[1], n2[0] = -1 * e[0] * (r / 2 + c2), n2[1] = -1 * e[1] * (i / 2 + c2);
        }, o.decideDirectionsForOverlappingNodes = function(a, t, n2) {
          a.getCenterX() < t.getCenterX() ? n2[0] = -1 : n2[0] = 1, a.getCenterY() < t.getCenterY() ? n2[1] = -1 : n2[1] = 1;
        }, o.getIntersection2 = function(a, t, n2) {
          var c2 = /* @__PURE__ */ a.getCenterX(), e = /* @__PURE__ */ a.getCenterY(), p2 = /* @__PURE__ */ t.getCenterX(), i = /* @__PURE__ */ t.getCenterY();
          if (a.intersects(t)) return n2[0] = c2, n2[1] = e, n2[2] = p2, n2[3] = i, true;
          var r = /* @__PURE__ */ a.getX(), h = /* @__PURE__ */ a.getY(), f = /* @__PURE__ */ a.getRight(), l = /* @__PURE__ */ a.getX(), A = /* @__PURE__ */ a.getBottom(), v = /* @__PURE__ */ a.getRight(), y = /* @__PURE__ */ a.getWidthHalf(), D = /* @__PURE__ */ a.getHeightHalf(), F = /* @__PURE__ */ t.getX(), C = /* @__PURE__ */ t.getY(), G = /* @__PURE__ */ t.getRight(), z = /* @__PURE__ */ t.getX(), X = /* @__PURE__ */ t.getBottom(), rt = /* @__PURE__ */ t.getRight(), I = /* @__PURE__ */ t.getWidthHalf(), J = /* @__PURE__ */ t.getHeightHalf(), s2 = false, m = false;
          if (c2 === p2) {
            if (e > i) return n2[0] = c2, n2[1] = h, n2[2] = p2, n2[3] = X, false;
            if (e < i) return n2[0] = c2, n2[1] = A, n2[2] = p2, n2[3] = C, false;
          } else if (e === i) {
            if (c2 > p2) return n2[0] = r, n2[1] = e, n2[2] = G, n2[3] = i, false;
            if (c2 < p2) return n2[0] = f, n2[1] = e, n2[2] = F, n2[3] = i, false;
          } else {
            var g = a.height / a.width, T = t.height / t.width, d2 = (i - e) / (p2 - c2), O = void 0, x = void 0, P = void 0, S = void 0, R = void 0, Z = void 0;
            if (-g === d2 ? c2 > p2 ? (n2[0] = l, n2[1] = A, s2 = true) : (n2[0] = f, n2[1] = h, s2 = true) : g === d2 && (c2 > p2 ? (n2[0] = r, n2[1] = h, s2 = true) : (n2[0] = v, n2[1] = A, s2 = true)), -T === d2 ? p2 > c2 ? (n2[2] = z, n2[3] = X, m = true) : (n2[2] = G, n2[3] = C, m = true) : T === d2 && (p2 > c2 ? (n2[2] = F, n2[3] = C, m = true) : (n2[2] = rt, n2[3] = X, m = true)), s2 && m) return false;
            if (c2 > p2 ? e > i ? (O = /* @__PURE__ */ this.getCardinalDirection(g, d2, 4), x = /* @__PURE__ */ this.getCardinalDirection(T, d2, 2)) : (O = /* @__PURE__ */ this.getCardinalDirection(-g, d2, 3), x = /* @__PURE__ */ this.getCardinalDirection(-T, d2, 1)) : e > i ? (O = /* @__PURE__ */ this.getCardinalDirection(-g, d2, 1), x = /* @__PURE__ */ this.getCardinalDirection(-T, d2, 3)) : (O = /* @__PURE__ */ this.getCardinalDirection(g, d2, 2), x = /* @__PURE__ */ this.getCardinalDirection(T, d2, 4)), !s2) switch (O) {
              case 1:
                S = h, P = c2 + -D / d2, n2[0] = P, n2[1] = S;
                break;
              case 2:
                P = v, S = e + y * d2, n2[0] = P, n2[1] = S;
                break;
              case 3:
                S = A, P = c2 + D / d2, n2[0] = P, n2[1] = S;
                break;
              case 4:
                P = l, S = e + -y * d2, n2[0] = P, n2[1] = S;
                break;
            }
            if (!m) switch (x) {
              case 1:
                Z = C, R = p2 + -J / d2, n2[2] = R, n2[3] = Z;
                break;
              case 2:
                R = rt, Z = i + I * d2, n2[2] = R, n2[3] = Z;
                break;
              case 3:
                Z = X, R = p2 + J / d2, n2[2] = R, n2[3] = Z;
                break;
              case 4:
                R = z, Z = i + -I * d2, n2[2] = R, n2[3] = Z;
                break;
            }
          }
          return false;
        }, o.getCardinalDirection = function(a, t, n2) {
          return a > t ? n2 : 1 + n2 % 4;
        }, o.getIntersection = function(a, t, n2, c2) {
          if (c2 == null) return this.getIntersection2(a, t, n2);
          var e = a.x, p2 = a.y, i = t.x, r = t.y, h = n2.x, f = n2.y, l = c2.x, A = c2.y, v = void 0, y = void 0, D = void 0, F = void 0, C = void 0, G = void 0, z = void 0, X = void 0, rt = void 0;
          return D = r - p2, C = e - i, z = i * p2 - e * r, F = A - f, G = h - l, X = l * f - h * A, rt = D * G - F * C, rt === 0 ? null : (v = (C * X - G * z) / rt, y = (F * z - D * X) / rt, new u(v, y));
        }, o.angleOfVector = function(a, t, n2, c2) {
          var e = void 0;
          return a !== n2 ? (e = /* @__PURE__ */ Math.atan((c2 - t) / (n2 - a)), n2 < a ? e += Math.PI : c2 < t && (e += this.TWO_PI)) : c2 < t ? e = this.ONE_AND_HALF_PI : e = this.HALF_PI, e;
        }, o.doIntersect = function(a, t, n2, c2) {
          var e = a.x, p2 = a.y, i = t.x, r = t.y, h = n2.x, f = n2.y, l = c2.x, A = c2.y, v = (i - e) * (A - f) - (l - h) * (r - p2);
          if (v === 0) return false;
          var y = ((A - f) * (l - e) + (h - l) * (A - p2)) / v, D = ((p2 - r) * (l - e) + (i - e) * (A - p2)) / v;
          return 0 < y && y < 1 && 0 < D && D < 1;
        }, o.findCircleLineIntersections = function(a, t, n2, c2, e, p2, i) {
          var r = (n2 - a) * (n2 - a) + (c2 - t) * (c2 - t), h = 2 * ((a - e) * (n2 - a) + (t - p2) * (c2 - t)), f = (a - e) * (a - e) + (t - p2) * (t - p2) - i * i, l = h * h - 4 * r * f;
          if (l >= 0) {
            var A = (-h + Math.sqrt(h * h - 4 * r * f)) / (2 * r), v = (-h - Math.sqrt(h * h - 4 * r * f)) / (2 * r), y = null;
            return A >= 0 && A <= 1 ? [
              A
            ] : v >= 0 && v <= 1 ? [
              v
            ] : y;
          } else return null;
        }, o.HALF_PI = 0.5 * Math.PI, o.ONE_AND_HALF_PI = 1.5 * Math.PI, o.TWO_PI = 2 * Math.PI, o.THREE_PI = 3 * Math.PI, E.exports = o;
      },
      function(E, w, N) {
        function u() {
        }
        m$1(u, "IMath"), u.sign = function(o) {
          return o > 0 ? 1 : o < 0 ? -1 : 0;
        }, u.floor = function(o) {
          return o < 0 ? Math.ceil(o) : Math.floor(o);
        }, u.ceil = function(o) {
          return o < 0 ? Math.floor(o) : Math.ceil(o);
        }, E.exports = u;
      },
      function(E, w, N) {
        function u() {
        }
        m$1(u, "Integer"), u.MAX_VALUE = 2147483647, u.MIN_VALUE = -2147483648, E.exports = u;
      },
      function(E, w, N) {
        var u = /* @__PURE__ */ function() {
          function e(p2, i) {
            for (var r = 0; r < i.length; r++) {
              var h = i[r];
              h.enumerable = h.enumerable || false, h.configurable = true, "value" in h && (h.writable = true), Object.defineProperty(p2, h.key, h);
            }
          }
          return m$1(e, "defineProperties"), function(p2, i, r) {
            return i && e(p2.prototype, i), r && e(p2, r), p2;
          };
        }();
        function o(e, p2) {
          if (!(e instanceof p2)) throw new TypeError("Cannot call a class as a function");
        }
        m$1(o, "_classCallCheck");
        var a = /* @__PURE__ */ m$1(function(p2) {
          return {
            value: p2,
            next: null,
            prev: null
          };
        }, "nodeFrom"), t = /* @__PURE__ */ m$1(function(p2, i, r, h) {
          return p2 !== null ? p2.next = i : h.head = i, r !== null ? r.prev = i : h.tail = i, i.prev = p2, i.next = r, h.length++, i;
        }, "add"), n2 = /* @__PURE__ */ m$1(function(p2, i) {
          var r = p2.prev, h = p2.next;
          return r !== null ? r.next = h : i.head = h, h !== null ? h.prev = r : i.tail = r, p2.prev = p2.next = null, i.length--, p2;
        }, "_remove"), c2 = /* @__PURE__ */ function() {
          function e(p2) {
            var i = this;
            o(this, e), this.length = 0, this.head = null, this.tail = null, p2 == null ? void 0 : p2.forEach(function(r) {
              return i.push(r);
            });
          }
          return m$1(e, "LinkedList"), u(e, [
            {
              key: "size",
              value: /* @__PURE__ */ m$1(function() {
                return this.length;
              }, "size")
            },
            {
              key: "insertBefore",
              value: /* @__PURE__ */ m$1(function(i, r) {
                return t(r.prev, /* @__PURE__ */ a(i), r, this);
              }, "insertBefore")
            },
            {
              key: "insertAfter",
              value: /* @__PURE__ */ m$1(function(i, r) {
                return t(r, /* @__PURE__ */ a(i), r.next, this);
              }, "insertAfter")
            },
            {
              key: "insertNodeBefore",
              value: /* @__PURE__ */ m$1(function(i, r) {
                return t(r.prev, i, r, this);
              }, "insertNodeBefore")
            },
            {
              key: "insertNodeAfter",
              value: /* @__PURE__ */ m$1(function(i, r) {
                return t(r, i, r.next, this);
              }, "insertNodeAfter")
            },
            {
              key: "push",
              value: /* @__PURE__ */ m$1(function(i) {
                return t(this.tail, /* @__PURE__ */ a(i), null, this);
              }, "push")
            },
            {
              key: "unshift",
              value: /* @__PURE__ */ m$1(function(i) {
                return t(null, /* @__PURE__ */ a(i), this.head, this);
              }, "unshift")
            },
            {
              key: "remove",
              value: /* @__PURE__ */ m$1(function(i) {
                return n2(i, this);
              }, "remove")
            },
            {
              key: "pop",
              value: /* @__PURE__ */ m$1(function() {
                return n2(this.tail, this).value;
              }, "pop")
            },
            {
              key: "popNode",
              value: /* @__PURE__ */ m$1(function() {
                return n2(this.tail, this);
              }, "popNode")
            },
            {
              key: "shift",
              value: /* @__PURE__ */ m$1(function() {
                return n2(this.head, this).value;
              }, "shift")
            },
            {
              key: "shiftNode",
              value: /* @__PURE__ */ m$1(function() {
                return n2(this.head, this);
              }, "shiftNode")
            },
            {
              key: "get_object_at",
              value: /* @__PURE__ */ m$1(function(i) {
                if (i <= this.length()) {
                  for (var r = 1, h = this.head; r < i; ) h = h.next, r++;
                  return h.value;
                }
              }, "get_object_at")
            },
            {
              key: "set_object_at",
              value: /* @__PURE__ */ m$1(function(i, r) {
                if (i <= this.length()) {
                  for (var h = 1, f = this.head; h < i; ) f = f.next, h++;
                  f.value = r;
                }
              }, "set_object_at")
            }
          ]), e;
        }();
        E.exports = c2;
      },
      function(E, w, N) {
        function u(o, a, t) {
          this.x = null, this.y = null, o == null && a == null && t == null ? (this.x = 0, this.y = 0) : typeof o == "number" && typeof a == "number" && t == null ? (this.x = o, this.y = a) : o.constructor.name == "Point" && a == null && t == null && (t = o, this.x = t.x, this.y = t.y);
        }
        m$1(u, "Point"), u.prototype.getX = function() {
          return this.x;
        }, u.prototype.getY = function() {
          return this.y;
        }, u.prototype.getLocation = function() {
          return new u(this.x, this.y);
        }, u.prototype.setLocation = function(o, a, t) {
          o.constructor.name == "Point" && a == null && t == null ? (t = o, this.setLocation(t.x, t.y)) : typeof o == "number" && typeof a == "number" && t == null && (parseInt(o) == o && parseInt(a) == a ? this.move(o, a) : (this.x = /* @__PURE__ */ Math.floor(o + 0.5), this.y = /* @__PURE__ */ Math.floor(a + 0.5)));
        }, u.prototype.move = function(o, a) {
          this.x = o, this.y = a;
        }, u.prototype.translate = function(o, a) {
          this.x += o, this.y += a;
        }, u.prototype.equals = function(o) {
          if (o.constructor.name == "Point") {
            var a = o;
            return this.x == a.x && this.y == a.y;
          }
          return this == o;
        }, u.prototype.toString = function() {
          return new u().constructor.name + "[x=" + this.x + ",y=" + this.y + "]";
        }, E.exports = u;
      },
      function(E, w, N) {
        function u(o, a, t, n2) {
          this.x = 0, this.y = 0, this.width = 0, this.height = 0, o != null && a != null && t != null && n2 != null && (this.x = o, this.y = a, this.width = t, this.height = n2);
        }
        m$1(u, "RectangleD"), u.prototype.getX = function() {
          return this.x;
        }, u.prototype.setX = function(o) {
          this.x = o;
        }, u.prototype.getY = function() {
          return this.y;
        }, u.prototype.setY = function(o) {
          this.y = o;
        }, u.prototype.getWidth = function() {
          return this.width;
        }, u.prototype.setWidth = function(o) {
          this.width = o;
        }, u.prototype.getHeight = function() {
          return this.height;
        }, u.prototype.setHeight = function(o) {
          this.height = o;
        }, u.prototype.getRight = function() {
          return this.x + this.width;
        }, u.prototype.getBottom = function() {
          return this.y + this.height;
        }, u.prototype.intersects = function(o) {
          return !(this.getRight() < o.x || this.getBottom() < o.y || o.getRight() < this.x || o.getBottom() < this.y);
        }, u.prototype.getCenterX = function() {
          return this.x + this.width / 2;
        }, u.prototype.getMinX = function() {
          return this.getX();
        }, u.prototype.getMaxX = function() {
          return this.getX() + this.width;
        }, u.prototype.getCenterY = function() {
          return this.y + this.height / 2;
        }, u.prototype.getMinY = function() {
          return this.getY();
        }, u.prototype.getMaxY = function() {
          return this.getY() + this.height;
        }, u.prototype.getWidthHalf = function() {
          return this.width / 2;
        }, u.prototype.getHeightHalf = function() {
          return this.height / 2;
        }, E.exports = u;
      },
      function(E, w, N) {
        var u = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
          return typeof a;
        } : function(a) {
          return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
        };
        function o() {
        }
        m$1(o, "UniqueIDGeneretor"), o.lastID = 0, o.createID = function(a) {
          return o.isPrimitive(a) ? a : (a.uniqueID != null || (a.uniqueID = /* @__PURE__ */ o.getString(), o.lastID++), a.uniqueID);
        }, o.getString = function(a) {
          return a == null && (a = o.lastID), "Object#" + a;
        }, o.isPrimitive = function(a) {
          var t = typeof a > "u" ? "undefined" : u(a);
          return a == null || t != "object" && t != "function";
        }, E.exports = o;
      },
      function(E, w, N) {
        function u(h) {
          if (Array.isArray(h)) {
            for (var f = 0, l = /* @__PURE__ */ Array(h.length); f < h.length; f++) l[f] = h[f];
            return l;
          } else return Array.from(h);
        }
        m$1(u, "_toConsumableArray");
        var o = /* @__PURE__ */ N(0), a = /* @__PURE__ */ N(7), t = /* @__PURE__ */ N(3), n2 = /* @__PURE__ */ N(1), c2 = /* @__PURE__ */ N(6), e = /* @__PURE__ */ N(5), p2 = /* @__PURE__ */ N(17), i = /* @__PURE__ */ N(29);
        function r(h) {
          i.call(this), this.layoutQuality = o.QUALITY, this.createBendsAsNeeded = o.DEFAULT_CREATE_BENDS_AS_NEEDED, this.incremental = o.DEFAULT_INCREMENTAL, this.animationOnLayout = o.DEFAULT_ANIMATION_ON_LAYOUT, this.animationDuringLayout = o.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = o.DEFAULT_ANIMATION_PERIOD, this.uniformLeafNodeSizes = o.DEFAULT_UNIFORM_LEAF_NODE_SIZES, this.edgeToDummyNodes = /* @__PURE__ */ new Map(), this.graphManager = new a(this), this.isLayoutFinished = false, this.isSubLayout = false, this.isRemoteUse = false, h != null && (this.isRemoteUse = h);
        }
        m$1(r, "Layout"), r.RANDOM_SEED = 1, r.prototype = /* @__PURE__ */ Object.create(i.prototype), r.prototype.getGraphManager = function() {
          return this.graphManager;
        }, r.prototype.getAllNodes = function() {
          return this.graphManager.getAllNodes();
        }, r.prototype.getAllEdges = function() {
          return this.graphManager.getAllEdges();
        }, r.prototype.getAllNodesToApplyGravitation = function() {
          return this.graphManager.getAllNodesToApplyGravitation();
        }, r.prototype.newGraphManager = function() {
          var h = new a(this);
          return this.graphManager = h, h;
        }, r.prototype.newGraph = function(h) {
          return new c2(null, this.graphManager, h);
        }, r.prototype.newNode = function(h) {
          return new t(this.graphManager, h);
        }, r.prototype.newEdge = function(h) {
          return new n2(null, null, h);
        }, r.prototype.checkLayoutSuccess = function() {
          return this.graphManager.getRoot() == null || this.graphManager.getRoot().getNodes().length == 0 || this.graphManager.includesInvalidEdge();
        }, r.prototype.runLayout = function() {
          this.isLayoutFinished = false, this.tilingPreLayout && this.tilingPreLayout(), this.initParameters();
          var h;
          return this.checkLayoutSuccess() ? h = false : h = /* @__PURE__ */ this.layout(), o.ANIMATE === "during" ? false : (h && (this.isSubLayout || this.doPostLayout()), this.tilingPostLayout && this.tilingPostLayout(), this.isLayoutFinished = true, h);
        }, r.prototype.doPostLayout = function() {
          this.incremental || this.transform(), this.update();
        }, r.prototype.update2 = function() {
          if (this.createBendsAsNeeded && (this.createBendpointsFromDummyNodes(), this.graphManager.resetAllEdges()), !this.isRemoteUse) {
            for (var h, f = /* @__PURE__ */ this.graphManager.getAllEdges(), l = 0; l < f.length; l++) h = f[l];
            for (var A, v = /* @__PURE__ */ this.graphManager.getRoot().getNodes(), l = 0; l < v.length; l++) A = v[l];
            this.update(/* @__PURE__ */ this.graphManager.getRoot());
          }
        }, r.prototype.update = function(h) {
          if (h == null) this.update2();
          else if (h instanceof t) {
            var f = h;
            if (f.getChild() != null) for (var l = /* @__PURE__ */ f.getChild().getNodes(), A = 0; A < l.length; A++) update(l[A]);
            if (f.vGraphObject != null) {
              var v = f.vGraphObject;
              v.update(f);
            }
          } else if (h instanceof n2) {
            var y = h;
            if (y.vGraphObject != null) {
              var D = y.vGraphObject;
              D.update(y);
            }
          } else if (h instanceof c2) {
            var F = h;
            if (F.vGraphObject != null) {
              var C = F.vGraphObject;
              C.update(F);
            }
          }
        }, r.prototype.initParameters = function() {
          this.isSubLayout || (this.layoutQuality = o.QUALITY, this.animationDuringLayout = o.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = o.DEFAULT_ANIMATION_PERIOD, this.animationOnLayout = o.DEFAULT_ANIMATION_ON_LAYOUT, this.incremental = o.DEFAULT_INCREMENTAL, this.createBendsAsNeeded = o.DEFAULT_CREATE_BENDS_AS_NEEDED, this.uniformLeafNodeSizes = o.DEFAULT_UNIFORM_LEAF_NODE_SIZES), this.animationDuringLayout && (this.animationOnLayout = false);
        }, r.prototype.transform = function(h) {
          if (h == null) this.transform(new e(0, 0));
          else {
            var f = new p2(), l = /* @__PURE__ */ this.graphManager.getRoot().updateLeftTop();
            if (l != null) {
              f.setWorldOrgX(h.x), f.setWorldOrgY(h.y), f.setDeviceOrgX(l.x), f.setDeviceOrgY(l.y);
              for (var A = /* @__PURE__ */ this.getAllNodes(), v, y = 0; y < A.length; y++) v = A[y], v.transform(f);
            }
          }
        }, r.prototype.positionNodesRandomly = function(h) {
          if (h == null) this.positionNodesRandomly(/* @__PURE__ */ this.getGraphManager().getRoot()), this.getGraphManager().getRoot().updateBounds(true);
          else for (var f, l, A = /* @__PURE__ */ h.getNodes(), v = 0; v < A.length; v++) f = A[v], l = /* @__PURE__ */ f.getChild(), l == null || l.getNodes().length == 0 ? f.scatter() : (this.positionNodesRandomly(l), f.updateBounds());
        }, r.prototype.getFlatForest = function() {
          for (var h = [], f = true, l = /* @__PURE__ */ this.graphManager.getRoot().getNodes(), A = true, v = 0; v < l.length; v++) l[v].getChild() != null && (A = false);
          if (!A) return h;
          var y = /* @__PURE__ */ new Set(), D = [], F = /* @__PURE__ */ new Map(), C = [];
          for (C = /* @__PURE__ */ C.concat(l); C.length > 0 && f; ) {
            for (D.push(C[0]); D.length > 0 && f; ) {
              var G = D[0];
              D.splice(0, 1), y.add(G);
              for (var z = /* @__PURE__ */ G.getEdges(), v = 0; v < z.length; v++) {
                var X = /* @__PURE__ */ z[v].getOtherEnd(G);
                if (F.get(G) != X) if (!y.has(X)) D.push(X), F.set(X, G);
                else {
                  f = false;
                  break;
                }
              }
            }
            if (!f) h = [];
            else {
              var rt = /* @__PURE__ */ [].concat(/* @__PURE__ */ u(y));
              h.push(rt);
              for (var v = 0; v < rt.length; v++) {
                var I = rt[v], J = /* @__PURE__ */ C.indexOf(I);
                J > -1 && C.splice(J, 1);
              }
              y = /* @__PURE__ */ new Set(), F = /* @__PURE__ */ new Map();
            }
          }
          return h;
        }, r.prototype.createDummyNodesForBendpoints = function(h) {
          for (var f = [], l = h.source, A = /* @__PURE__ */ this.graphManager.calcLowestCommonAncestor(h.source, h.target), v = 0; v < h.bendpoints.length; v++) {
            var y = /* @__PURE__ */ this.newNode(null);
            y.setRect(new Point(0, 0), new Dimension(1, 1)), A.add(y);
            var D = /* @__PURE__ */ this.newEdge(null);
            this.graphManager.add(D, l, y), f.add(y), l = y;
          }
          var D = /* @__PURE__ */ this.newEdge(null);
          return this.graphManager.add(D, l, h.target), this.edgeToDummyNodes.set(h, f), h.isInterGraph() ? this.graphManager.remove(h) : A.remove(h), f;
        }, r.prototype.createBendpointsFromDummyNodes = function() {
          var h = [];
          h = /* @__PURE__ */ h.concat(/* @__PURE__ */ this.graphManager.getAllEdges()), h = /* @__PURE__ */ [].concat(/* @__PURE__ */ u(/* @__PURE__ */ this.edgeToDummyNodes.keys())).concat(h);
          for (var f = 0; f < h.length; f++) {
            var l = h[f];
            if (l.bendpoints.length > 0) {
              for (var A = /* @__PURE__ */ this.edgeToDummyNodes.get(l), v = 0; v < A.length; v++) {
                var y = A[v], D = new e(y.getCenterX(), y.getCenterY()), F = /* @__PURE__ */ l.bendpoints.get(v);
                F.x = D.x, F.y = D.y, y.getOwner().remove(y);
              }
              this.graphManager.add(l, l.source, l.target);
            }
          }
        }, r.transform = function(h, f, l, A) {
          if (l != null && A != null) {
            var v = f;
            if (h <= 50) {
              var y = f / l;
              v -= (f - y) / 50 * (50 - h);
            } else {
              var D = f * A;
              v += (D - f) / 50 * (h - 50);
            }
            return v;
          } else {
            var F, C;
            return h <= 50 ? (F = 9 * f / 500, C = f / 10) : (F = 9 * f / 50, C = -8 * f), F * h + C;
          }
        }, r.findCenterOfTree = function(h) {
          var f = [];
          f = /* @__PURE__ */ f.concat(h);
          var l = [], A = /* @__PURE__ */ new Map(), v = false, y = null;
          (f.length == 1 || f.length == 2) && (v = true, y = f[0]);
          for (var D = 0; D < f.length; D++) {
            var F = f[D], C = F.getNeighborsList().size;
            A.set(F, F.getNeighborsList().size), C == 1 && l.push(F);
          }
          var G = [];
          for (G = /* @__PURE__ */ G.concat(l); !v; ) {
            var z = [];
            z = /* @__PURE__ */ z.concat(G), G = [];
            for (var D = 0; D < f.length; D++) {
              var F = f[D], X = /* @__PURE__ */ f.indexOf(F);
              X >= 0 && f.splice(X, 1);
              var rt = /* @__PURE__ */ F.getNeighborsList();
              rt.forEach(function(s2) {
                if (l.indexOf(s2) < 0) {
                  var m = /* @__PURE__ */ A.get(s2), g = m - 1;
                  g == 1 && G.push(s2), A.set(s2, g);
                }
              });
            }
            l = /* @__PURE__ */ l.concat(G), (f.length == 1 || f.length == 2) && (v = true, y = f[0]);
          }
          return y;
        }, r.prototype.setGraphManager = function(h) {
          this.graphManager = h;
        }, E.exports = r;
      },
      function(E, w, N) {
        function u() {
        }
        m$1(u, "RandomSeed"), u.seed = 1, u.x = 0, u.nextDouble = function() {
          return u.x = Math.sin(u.seed++) * 1e4, u.x - Math.floor(u.x);
        }, E.exports = u;
      },
      function(E, w, N) {
        var u = /* @__PURE__ */ N(5);
        function o(a, t) {
          this.lworldOrgX = 0, this.lworldOrgY = 0, this.ldeviceOrgX = 0, this.ldeviceOrgY = 0, this.lworldExtX = 1, this.lworldExtY = 1, this.ldeviceExtX = 1, this.ldeviceExtY = 1;
        }
        m$1(o, "Transform"), o.prototype.getWorldOrgX = function() {
          return this.lworldOrgX;
        }, o.prototype.setWorldOrgX = function(a) {
          this.lworldOrgX = a;
        }, o.prototype.getWorldOrgY = function() {
          return this.lworldOrgY;
        }, o.prototype.setWorldOrgY = function(a) {
          this.lworldOrgY = a;
        }, o.prototype.getWorldExtX = function() {
          return this.lworldExtX;
        }, o.prototype.setWorldExtX = function(a) {
          this.lworldExtX = a;
        }, o.prototype.getWorldExtY = function() {
          return this.lworldExtY;
        }, o.prototype.setWorldExtY = function(a) {
          this.lworldExtY = a;
        }, o.prototype.getDeviceOrgX = function() {
          return this.ldeviceOrgX;
        }, o.prototype.setDeviceOrgX = function(a) {
          this.ldeviceOrgX = a;
        }, o.prototype.getDeviceOrgY = function() {
          return this.ldeviceOrgY;
        }, o.prototype.setDeviceOrgY = function(a) {
          this.ldeviceOrgY = a;
        }, o.prototype.getDeviceExtX = function() {
          return this.ldeviceExtX;
        }, o.prototype.setDeviceExtX = function(a) {
          this.ldeviceExtX = a;
        }, o.prototype.getDeviceExtY = function() {
          return this.ldeviceExtY;
        }, o.prototype.setDeviceExtY = function(a) {
          this.ldeviceExtY = a;
        }, o.prototype.transformX = function(a) {
          var t = 0, n2 = this.lworldExtX;
          return n2 != 0 && (t = this.ldeviceOrgX + (a - this.lworldOrgX) * this.ldeviceExtX / n2), t;
        }, o.prototype.transformY = function(a) {
          var t = 0, n2 = this.lworldExtY;
          return n2 != 0 && (t = this.ldeviceOrgY + (a - this.lworldOrgY) * this.ldeviceExtY / n2), t;
        }, o.prototype.inverseTransformX = function(a) {
          var t = 0, n2 = this.ldeviceExtX;
          return n2 != 0 && (t = this.lworldOrgX + (a - this.ldeviceOrgX) * this.lworldExtX / n2), t;
        }, o.prototype.inverseTransformY = function(a) {
          var t = 0, n2 = this.ldeviceExtY;
          return n2 != 0 && (t = this.lworldOrgY + (a - this.ldeviceOrgY) * this.lworldExtY / n2), t;
        }, o.prototype.inverseTransformPoint = function(a) {
          var t = new u(this.inverseTransformX(a.x), this.inverseTransformY(a.y));
          return t;
        }, E.exports = o;
      },
      function(E, w, N) {
        function u(i) {
          if (Array.isArray(i)) {
            for (var r = 0, h = /* @__PURE__ */ Array(i.length); r < i.length; r++) h[r] = i[r];
            return h;
          } else return Array.from(i);
        }
        m$1(u, "_toConsumableArray");
        var o = /* @__PURE__ */ N(15), a = /* @__PURE__ */ N(4), t = /* @__PURE__ */ N(0), n2 = /* @__PURE__ */ N(8), c2 = /* @__PURE__ */ N(9);
        function e() {
          o.call(this), this.useSmartIdealEdgeLengthCalculation = a.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.gravityConstant = a.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = a.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = a.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = a.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.displacementThresholdPerNode = 3 * a.DEFAULT_EDGE_LENGTH / 100, this.coolingFactor = a.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.initialCoolingFactor = a.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.totalDisplacement = 0, this.oldTotalDisplacement = 0, this.maxIterations = a.MAX_ITERATIONS;
        }
        m$1(e, "FDLayout"), e.prototype = /* @__PURE__ */ Object.create(o.prototype);
        for (var p2 in o) e[p2] = o[p2];
        e.prototype.initParameters = function() {
          o.prototype.initParameters.call(this, arguments), this.totalIterations = 0, this.notAnimatedIterations = 0, this.useFRGridVariant = a.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION, this.grid = [];
        }, e.prototype.calcIdealEdgeLengths = function() {
          for (var i, r, h, f, l, A, v, y = /* @__PURE__ */ this.getGraphManager().getAllEdges(), D = 0; D < y.length; D++) i = y[D], r = i.idealLength, i.isInterGraph && (f = /* @__PURE__ */ i.getSource(), l = /* @__PURE__ */ i.getTarget(), A = /* @__PURE__ */ i.getSourceInLca().getEstimatedSize(), v = /* @__PURE__ */ i.getTargetInLca().getEstimatedSize(), this.useSmartIdealEdgeLengthCalculation && (i.idealLength += A + v - 2 * t.SIMPLE_NODE_SIZE), h = /* @__PURE__ */ i.getLca().getInclusionTreeDepth(), i.idealLength += r * a.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR * (f.getInclusionTreeDepth() + l.getInclusionTreeDepth() - 2 * h));
        }, e.prototype.initSpringEmbedder = function() {
          var i = this.getAllNodes().length;
          this.incremental ? (i > a.ADAPTATION_LOWER_NODE_LIMIT && (this.coolingFactor = /* @__PURE__ */ Math.max(this.coolingFactor * a.COOLING_ADAPTATION_FACTOR, this.coolingFactor - (i - a.ADAPTATION_LOWER_NODE_LIMIT) / (a.ADAPTATION_UPPER_NODE_LIMIT - a.ADAPTATION_LOWER_NODE_LIMIT) * this.coolingFactor * (1 - a.COOLING_ADAPTATION_FACTOR))), this.maxNodeDisplacement = a.MAX_NODE_DISPLACEMENT_INCREMENTAL) : (i > a.ADAPTATION_LOWER_NODE_LIMIT ? this.coolingFactor = /* @__PURE__ */ Math.max(a.COOLING_ADAPTATION_FACTOR, 1 - (i - a.ADAPTATION_LOWER_NODE_LIMIT) / (a.ADAPTATION_UPPER_NODE_LIMIT - a.ADAPTATION_LOWER_NODE_LIMIT) * (1 - a.COOLING_ADAPTATION_FACTOR)) : this.coolingFactor = 1, this.initialCoolingFactor = this.coolingFactor, this.maxNodeDisplacement = a.MAX_NODE_DISPLACEMENT), this.maxIterations = /* @__PURE__ */ Math.max(this.getAllNodes().length * 5, this.maxIterations), this.displacementThresholdPerNode = 3 * a.DEFAULT_EDGE_LENGTH / 100, this.totalDisplacementThreshold = this.displacementThresholdPerNode * this.getAllNodes().length, this.repulsionRange = /* @__PURE__ */ this.calcRepulsionRange();
        }, e.prototype.calcSpringForces = function() {
          for (var i = /* @__PURE__ */ this.getAllEdges(), r, h = 0; h < i.length; h++) r = i[h], this.calcSpringForce(r, r.idealLength);
        }, e.prototype.calcRepulsionForces = function() {
          var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, h, f, l, A, v = /* @__PURE__ */ this.getAllNodes(), y;
          if (this.useFRGridVariant) for (this.totalIterations % a.GRID_CALCULATION_CHECK_PERIOD == 1 && i && this.updateGrid(), y = /* @__PURE__ */ new Set(), h = 0; h < v.length; h++) l = v[h], this.calculateRepulsionForceOfANode(l, y, i, r), y.add(l);
          else for (h = 0; h < v.length; h++) for (l = v[h], f = h + 1; f < v.length; f++) A = v[f], l.getOwner() == A.getOwner() && this.calcRepulsionForce(l, A);
        }, e.prototype.calcGravitationalForces = function() {
          for (var i, r = /* @__PURE__ */ this.getAllNodesToApplyGravitation(), h = 0; h < r.length; h++) i = r[h], this.calcGravitationalForce(i);
        }, e.prototype.moveNodes = function() {
          for (var i = /* @__PURE__ */ this.getAllNodes(), r, h = 0; h < i.length; h++) r = i[h], r.move();
        }, e.prototype.calcSpringForce = function(i, r) {
          var h = /* @__PURE__ */ i.getSource(), f = /* @__PURE__ */ i.getTarget(), l, A, v, y;
          if (this.uniformLeafNodeSizes && h.getChild() == null && f.getChild() == null) i.updateLengthSimple();
          else if (i.updateLength(), i.isOverlapingSourceAndTarget) return;
          l = /* @__PURE__ */ i.getLength(), l != 0 && (A = i.edgeElasticity * (l - r), v = A * (i.lengthX / l), y = A * (i.lengthY / l), h.springForceX += v, h.springForceY += y, f.springForceX -= v, f.springForceY -= y);
        }, e.prototype.calcRepulsionForce = function(i, r) {
          var h = /* @__PURE__ */ i.getRect(), f = /* @__PURE__ */ r.getRect(), l = new Array(2), A = new Array(4), v, y, D, F, C, G, z;
          if (h.intersects(f)) {
            n2.calcSeparationAmount(h, f, l, a.DEFAULT_EDGE_LENGTH / 2), G = 2 * l[0], z = 2 * l[1];
            var X = i.noOfChildren * r.noOfChildren / (i.noOfChildren + r.noOfChildren);
            i.repulsionForceX -= X * G, i.repulsionForceY -= X * z, r.repulsionForceX += X * G, r.repulsionForceY += X * z;
          } else this.uniformLeafNodeSizes && i.getChild() == null && r.getChild() == null ? (v = f.getCenterX() - h.getCenterX(), y = f.getCenterY() - h.getCenterY()) : (n2.getIntersection(h, f, A), v = A[2] - A[0], y = A[3] - A[1]), Math.abs(v) < a.MIN_REPULSION_DIST && (v = c2.sign(v) * a.MIN_REPULSION_DIST), Math.abs(y) < a.MIN_REPULSION_DIST && (y = c2.sign(y) * a.MIN_REPULSION_DIST), D = v * v + y * y, F = /* @__PURE__ */ Math.sqrt(D), C = (i.nodeRepulsion / 2 + r.nodeRepulsion / 2) * i.noOfChildren * r.noOfChildren / D, G = C * v / F, z = C * y / F, i.repulsionForceX -= G, i.repulsionForceY -= z, r.repulsionForceX += G, r.repulsionForceY += z;
        }, e.prototype.calcGravitationalForce = function(i) {
          var r, h, f, l, A, v, y, D;
          r = /* @__PURE__ */ i.getOwner(), h = (r.getRight() + r.getLeft()) / 2, f = (r.getTop() + r.getBottom()) / 2, l = i.getCenterX() - h, A = i.getCenterY() - f, v = Math.abs(l) + i.getWidth() / 2, y = Math.abs(A) + i.getHeight() / 2, i.getOwner() == this.graphManager.getRoot() ? (D = r.getEstimatedSize() * this.gravityRangeFactor, (v > D || y > D) && (i.gravitationForceX = -this.gravityConstant * l, i.gravitationForceY = -this.gravityConstant * A)) : (D = r.getEstimatedSize() * this.compoundGravityRangeFactor, (v > D || y > D) && (i.gravitationForceX = -this.gravityConstant * l * this.compoundGravityConstant, i.gravitationForceY = -this.gravityConstant * A * this.compoundGravityConstant));
        }, e.prototype.isConverged = function() {
          var i, r = false;
          return this.totalIterations > this.maxIterations / 3 && (r = Math.abs(this.totalDisplacement - this.oldTotalDisplacement) < 2), i = this.totalDisplacement < this.totalDisplacementThreshold, this.oldTotalDisplacement = this.totalDisplacement, i || r;
        }, e.prototype.animate = function() {
          this.animationDuringLayout && !this.isSubLayout && (this.notAnimatedIterations == this.animationPeriod ? (this.update(), this.notAnimatedIterations = 0) : this.notAnimatedIterations++);
        }, e.prototype.calcNoOfChildrenForAllNodes = function() {
          for (var i, r = /* @__PURE__ */ this.graphManager.getAllNodes(), h = 0; h < r.length; h++) i = r[h], i.noOfChildren = /* @__PURE__ */ i.getNoOfChildren();
        }, e.prototype.calcGrid = function(i) {
          var r = 0, h = 0;
          r = /* @__PURE__ */ parseInt(/* @__PURE__ */ Math.ceil((i.getRight() - i.getLeft()) / this.repulsionRange)), h = /* @__PURE__ */ parseInt(/* @__PURE__ */ Math.ceil((i.getBottom() - i.getTop()) / this.repulsionRange));
          for (var f = new Array(r), l = 0; l < r; l++) f[l] = new Array(h);
          for (var l = 0; l < r; l++) for (var A = 0; A < h; A++) f[l][A] = new Array();
          return f;
        }, e.prototype.addNodeToGrid = function(i, r, h) {
          var f = 0, l = 0, A = 0, v = 0;
          f = /* @__PURE__ */ parseInt(/* @__PURE__ */ Math.floor((i.getRect().x - r) / this.repulsionRange)), l = /* @__PURE__ */ parseInt(/* @__PURE__ */ Math.floor((i.getRect().width + i.getRect().x - r) / this.repulsionRange)), A = /* @__PURE__ */ parseInt(/* @__PURE__ */ Math.floor((i.getRect().y - h) / this.repulsionRange)), v = /* @__PURE__ */ parseInt(/* @__PURE__ */ Math.floor((i.getRect().height + i.getRect().y - h) / this.repulsionRange));
          for (var y = f; y <= l; y++) for (var D = A; D <= v; D++) this.grid[y][D].push(i), i.setGridCoordinates(f, l, A, v);
        }, e.prototype.updateGrid = function() {
          var i, r, h = /* @__PURE__ */ this.getAllNodes();
          for (this.grid = /* @__PURE__ */ this.calcGrid(/* @__PURE__ */ this.graphManager.getRoot()), i = 0; i < h.length; i++) r = h[i], this.addNodeToGrid(r, /* @__PURE__ */ this.graphManager.getRoot().getLeft(), /* @__PURE__ */ this.graphManager.getRoot().getTop());
        }, e.prototype.calculateRepulsionForceOfANode = function(i, r, h, f) {
          if (this.totalIterations % a.GRID_CALCULATION_CHECK_PERIOD == 1 && h || f) {
            var l = /* @__PURE__ */ new Set();
            i.surrounding = new Array();
            for (var A, v = this.grid, y = i.startX - 1; y < i.finishX + 2; y++) for (var D = i.startY - 1; D < i.finishY + 2; D++) if (!(y < 0 || D < 0 || y >= v.length || D >= v[0].length)) {
              for (var F = 0; F < v[y][D].length; F++) if (A = v[y][D][F], !(i.getOwner() != A.getOwner() || i == A) && !r.has(A) && !l.has(A)) {
                var C = Math.abs(i.getCenterX() - A.getCenterX()) - (i.getWidth() / 2 + A.getWidth() / 2), G = Math.abs(i.getCenterY() - A.getCenterY()) - (i.getHeight() / 2 + A.getHeight() / 2);
                C <= this.repulsionRange && G <= this.repulsionRange && l.add(A);
              }
            }
            i.surrounding = /* @__PURE__ */ [].concat(/* @__PURE__ */ u(l));
          }
          for (y = 0; y < i.surrounding.length; y++) this.calcRepulsionForce(i, i.surrounding[y]);
        }, e.prototype.calcRepulsionRange = function() {
          return 0;
        }, E.exports = e;
      },
      function(E, w, N) {
        var u = /* @__PURE__ */ N(1), o = /* @__PURE__ */ N(4);
        function a(n2, c2, e) {
          u.call(this, n2, c2, e), this.idealLength = o.DEFAULT_EDGE_LENGTH, this.edgeElasticity = o.DEFAULT_SPRING_STRENGTH;
        }
        m$1(a, "FDLayoutEdge"), a.prototype = /* @__PURE__ */ Object.create(u.prototype);
        for (var t in u) a[t] = u[t];
        E.exports = a;
      },
      function(E, w, N) {
        var u = /* @__PURE__ */ N(3), o = /* @__PURE__ */ N(4);
        function a(n2, c2, e, p2) {
          u.call(this, n2, c2, e, p2), this.nodeRepulsion = o.DEFAULT_REPULSION_STRENGTH, this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0, this.startX = 0, this.finishX = 0, this.startY = 0, this.finishY = 0, this.surrounding = [];
        }
        m$1(a, "FDLayoutNode"), a.prototype = /* @__PURE__ */ Object.create(u.prototype);
        for (var t in u) a[t] = u[t];
        a.prototype.setGridCoordinates = function(n2, c2, e, p2) {
          this.startX = n2, this.finishX = c2, this.startY = e, this.finishY = p2;
        }, E.exports = a;
      },
      function(E, w, N) {
        function u(o, a) {
          this.width = 0, this.height = 0, o !== null && a !== null && (this.height = a, this.width = o);
        }
        m$1(u, "DimensionD"), u.prototype.getWidth = function() {
          return this.width;
        }, u.prototype.setWidth = function(o) {
          this.width = o;
        }, u.prototype.getHeight = function() {
          return this.height;
        }, u.prototype.setHeight = function(o) {
          this.height = o;
        }, E.exports = u;
      },
      function(E, w, N) {
        var u = /* @__PURE__ */ N(14);
        function o() {
          this.map = {}, this.keys = [];
        }
        m$1(o, "HashMap"), o.prototype.put = function(a, t) {
          var n2 = /* @__PURE__ */ u.createID(a);
          this.contains(n2) || (this.map[n2] = t, this.keys.push(a));
        }, o.prototype.contains = function(a) {
          u.createID(a);
          return this.map[a] != null;
        }, o.prototype.get = function(a) {
          var t = /* @__PURE__ */ u.createID(a);
          return this.map[t];
        }, o.prototype.keySet = function() {
          return this.keys;
        }, E.exports = o;
      },
      function(E, w, N) {
        var u = /* @__PURE__ */ N(14);
        function o() {
          this.set = {};
        }
        m$1(o, "HashSet"), o.prototype.add = function(a) {
          var t = /* @__PURE__ */ u.createID(a);
          this.contains(t) || (this.set[t] = a);
        }, o.prototype.remove = function(a) {
          delete this.set[u.createID(a)];
        }, o.prototype.clear = function() {
          this.set = {};
        }, o.prototype.contains = function(a) {
          return this.set[u.createID(a)] == a;
        }, o.prototype.isEmpty = function() {
          return this.size() === 0;
        }, o.prototype.size = function() {
          return Object.keys(this.set).length;
        }, o.prototype.addAllTo = function(a) {
          for (var t = /* @__PURE__ */ Object.keys(this.set), n2 = t.length, c2 = 0; c2 < n2; c2++) a.push(this.set[t[c2]]);
        }, o.prototype.size = function() {
          return Object.keys(this.set).length;
        }, o.prototype.addAll = function(a) {
          for (var t = a.length, n2 = 0; n2 < t; n2++) {
            var c2 = a[n2];
            this.add(c2);
          }
        }, E.exports = o;
      },
      function(E, w, N) {
        function u() {
        }
        m$1(u, "Matrix"), u.multMat = function(o, a) {
          for (var t = [], n2 = 0; n2 < o.length; n2++) {
            t[n2] = [];
            for (var c2 = 0; c2 < a[0].length; c2++) {
              t[n2][c2] = 0;
              for (var e = 0; e < o[0].length; e++) t[n2][c2] += o[n2][e] * a[e][c2];
            }
          }
          return t;
        }, u.transpose = function(o) {
          for (var a = [], t = 0; t < o[0].length; t++) {
            a[t] = [];
            for (var n2 = 0; n2 < o.length; n2++) a[t][n2] = o[n2][t];
          }
          return a;
        }, u.multCons = function(o, a) {
          for (var t = [], n2 = 0; n2 < o.length; n2++) t[n2] = o[n2] * a;
          return t;
        }, u.minusOp = function(o, a) {
          for (var t = [], n2 = 0; n2 < o.length; n2++) t[n2] = o[n2] - a[n2];
          return t;
        }, u.dotProduct = function(o, a) {
          for (var t = 0, n2 = 0; n2 < o.length; n2++) t += o[n2] * a[n2];
          return t;
        }, u.mag = function(o) {
          return Math.sqrt(/* @__PURE__ */ this.dotProduct(o, o));
        }, u.normalize = function(o) {
          for (var a = [], t = /* @__PURE__ */ this.mag(o), n2 = 0; n2 < o.length; n2++) a[n2] = o[n2] / t;
          return a;
        }, u.multGamma = function(o) {
          for (var a = [], t = 0, n2 = 0; n2 < o.length; n2++) t += o[n2];
          t *= -1 / o.length;
          for (var c2 = 0; c2 < o.length; c2++) a[c2] = t + o[c2];
          return a;
        }, u.multL = function(o, a, t) {
          for (var n2 = [], c2 = [], e = [], p2 = 0; p2 < a[0].length; p2++) {
            for (var i = 0, r = 0; r < a.length; r++) i += -0.5 * a[r][p2] * o[r];
            c2[p2] = i;
          }
          for (var h = 0; h < t.length; h++) {
            for (var f = 0, l = 0; l < t.length; l++) f += t[h][l] * c2[l];
            e[h] = f;
          }
          for (var A = 0; A < a.length; A++) {
            for (var v = 0, y = 0; y < a[0].length; y++) v += a[A][y] * e[y];
            n2[A] = v;
          }
          return n2;
        }, E.exports = u;
      },
      function(E, w, N) {
        var u = /* @__PURE__ */ function() {
          function n2(c2, e) {
            for (var p2 = 0; p2 < e.length; p2++) {
              var i = e[p2];
              i.enumerable = i.enumerable || false, i.configurable = true, "value" in i && (i.writable = true), Object.defineProperty(c2, i.key, i);
            }
          }
          return m$1(n2, "defineProperties"), function(c2, e, p2) {
            return e && n2(c2.prototype, e), p2 && n2(c2, p2), c2;
          };
        }();
        function o(n2, c2) {
          if (!(n2 instanceof c2)) throw new TypeError("Cannot call a class as a function");
        }
        m$1(o, "_classCallCheck");
        var a = /* @__PURE__ */ N(11), t = /* @__PURE__ */ function() {
          function n2(c2, e) {
            o(this, n2), (e !== null || e !== void 0) && (this.compareFunction = this._defaultCompareFunction);
            var p2 = void 0;
            c2 instanceof a ? p2 = /* @__PURE__ */ c2.size() : p2 = c2.length, this._quicksort(c2, 0, p2 - 1);
          }
          return m$1(n2, "Quicksort"), u(n2, [
            {
              key: "_quicksort",
              value: /* @__PURE__ */ m$1(function(e, p2, i) {
                if (p2 < i) {
                  var r = /* @__PURE__ */ this._partition(e, p2, i);
                  this._quicksort(e, p2, r), this._quicksort(e, r + 1, i);
                }
              }, "_quicksort")
            },
            {
              key: "_partition",
              value: /* @__PURE__ */ m$1(function(e, p2, i) {
                for (var r = /* @__PURE__ */ this._get(e, p2), h = p2, f = i; ; ) {
                  for (; this.compareFunction(r, /* @__PURE__ */ this._get(e, f)); ) f--;
                  for (; this.compareFunction(/* @__PURE__ */ this._get(e, h), r); ) h++;
                  if (h < f) this._swap(e, h, f), h++, f--;
                  else return f;
                }
              }, "_partition")
            },
            {
              key: "_get",
              value: /* @__PURE__ */ m$1(function(e, p2) {
                return e instanceof a ? e.get_object_at(p2) : e[p2];
              }, "_get")
            },
            {
              key: "_set",
              value: /* @__PURE__ */ m$1(function(e, p2, i) {
                e instanceof a ? e.set_object_at(p2, i) : e[p2] = i;
              }, "_set")
            },
            {
              key: "_swap",
              value: /* @__PURE__ */ m$1(function(e, p2, i) {
                var r = /* @__PURE__ */ this._get(e, p2);
                this._set(e, p2, /* @__PURE__ */ this._get(e, i)), this._set(e, i, r);
              }, "_swap")
            },
            {
              key: "_defaultCompareFunction",
              value: /* @__PURE__ */ m$1(function(e, p2) {
                return p2 > e;
              }, "_defaultCompareFunction")
            }
          ]), n2;
        }();
        E.exports = t;
      },
      function(E, w, N) {
        function u() {
        }
        m$1(u, "SVD"), u.svd = function(o) {
          this.U = null, this.V = null, this.s = null, this.m = 0, this.n = 0, this.m = o.length, this.n = o[0].length;
          var a = /* @__PURE__ */ Math.min(this.m, this.n);
          this.s = /* @__PURE__ */ function(Ot) {
            for (var Nt = []; Ot-- > 0; ) Nt.push(0);
            return Nt;
          }(/* @__PURE__ */ Math.min(this.m + 1, this.n)), this.U = /* @__PURE__ */ function(Ot) {
            var Nt = /* @__PURE__ */ m$1(function Zt2(St2) {
              if (St2.length == 0) return 0;
              for (var Wt = [], $t = 0; $t < St2[0]; $t++) Wt.push(/* @__PURE__ */ Zt2(/* @__PURE__ */ St2.slice(1)));
              return Wt;
            }, "allocate");
            return Nt(Ot);
          }([
            this.m,
            a
          ]), this.V = /* @__PURE__ */ function(Ot) {
            var Nt = /* @__PURE__ */ m$1(function Zt2(St2) {
              if (St2.length == 0) return 0;
              for (var Wt = [], $t = 0; $t < St2[0]; $t++) Wt.push(/* @__PURE__ */ Zt2(/* @__PURE__ */ St2.slice(1)));
              return Wt;
            }, "allocate");
            return Nt(Ot);
          }([
            this.n,
            this.n
          ]);
          for (var t = /* @__PURE__ */ function(Ot) {
            for (var Nt = []; Ot-- > 0; ) Nt.push(0);
            return Nt;
          }(this.n), n2 = /* @__PURE__ */ function(Ot) {
            for (var Nt = []; Ot-- > 0; ) Nt.push(0);
            return Nt;
          }(this.m), c2 = true, e = true, p2 = /* @__PURE__ */ Math.min(this.m - 1, this.n), i = /* @__PURE__ */ Math.max(0, /* @__PURE__ */ Math.min(this.n - 2, this.m)), r = 0; r < Math.max(p2, i); r++) {
            if (r < p2) {
              this.s[r] = 0;
              for (var h = r; h < this.m; h++) this.s[r] = /* @__PURE__ */ u.hypot(this.s[r], o[h][r]);
              if (this.s[r] !== 0) {
                o[r][r] < 0 && (this.s[r] = -this.s[r]);
                for (var f = r; f < this.m; f++) o[f][r] /= this.s[r];
                o[r][r] += 1;
              }
              this.s[r] = -this.s[r];
            }
            for (var l = r + 1; l < this.n; l++) {
              if (/* @__PURE__ */ function(Ot, Nt) {
                return Ot && Nt;
              }(r < p2, this.s[r] !== 0)) {
                for (var A = 0, v = r; v < this.m; v++) A += o[v][r] * o[v][l];
                A = -A / o[r][r];
                for (var y = r; y < this.m; y++) o[y][l] += A * o[y][r];
              }
              t[l] = o[r][l];
            }
            if (/* @__PURE__ */ function(Ot, Nt) {
              return Ot && Nt;
            }(c2, r < p2)) for (var D = r; D < this.m; D++) this.U[D][r] = o[D][r];
            if (r < i) {
              t[r] = 0;
              for (var F = r + 1; F < this.n; F++) t[r] = /* @__PURE__ */ u.hypot(t[r], t[F]);
              if (t[r] !== 0) {
                t[r + 1] < 0 && (t[r] = -t[r]);
                for (var C = r + 1; C < this.n; C++) t[C] /= t[r];
                t[r + 1] += 1;
              }
              if (t[r] = -t[r], /* @__PURE__ */ function(Ot, Nt) {
                return Ot && Nt;
              }(r + 1 < this.m, t[r] !== 0)) {
                for (var G = r + 1; G < this.m; G++) n2[G] = 0;
                for (var z = r + 1; z < this.n; z++) for (var X = r + 1; X < this.m; X++) n2[X] += t[z] * o[X][z];
                for (var rt = r + 1; rt < this.n; rt++) for (var I = -t[rt] / t[r + 1], J = r + 1; J < this.m; J++) o[J][rt] += I * n2[J];
              }
              if (e) for (var s2 = r + 1; s2 < this.n; s2++) this.V[s2][r] = t[s2];
            }
          }
          var m = /* @__PURE__ */ Math.min(this.n, this.m + 1);
          if (p2 < this.n && (this.s[p2] = o[p2][p2]), this.m < m && (this.s[m - 1] = 0), i + 1 < m && (t[i] = o[i][m - 1]), t[m - 1] = 0, c2) {
            for (var g = p2; g < a; g++) {
              for (var T = 0; T < this.m; T++) this.U[T][g] = 0;
              this.U[g][g] = 1;
            }
            for (var d2 = p2 - 1; d2 >= 0; d2--) if (this.s[d2] !== 0) {
              for (var O = d2 + 1; O < a; O++) {
                for (var x = 0, P = d2; P < this.m; P++) x += this.U[P][d2] * this.U[P][O];
                x = -x / this.U[d2][d2];
                for (var S = d2; S < this.m; S++) this.U[S][O] += x * this.U[S][d2];
              }
              for (var R = d2; R < this.m; R++) this.U[R][d2] = -this.U[R][d2];
              this.U[d2][d2] = 1 + this.U[d2][d2];
              for (var Z = 0; Z < d2 - 1; Z++) this.U[Z][d2] = 0;
            } else {
              for (var tt2 = 0; tt2 < this.m; tt2++) this.U[tt2][d2] = 0;
              this.U[d2][d2] = 1;
            }
          }
          if (e) for (var b = this.n - 1; b >= 0; b--) {
            if (/* @__PURE__ */ function(Ot, Nt) {
              return Ot && Nt;
            }(b < i, t[b] !== 0)) for (var _ = b + 1; _ < a; _++) {
              for (var B = 0, M = b + 1; M < this.n; M++) B += this.V[M][b] * this.V[M][_];
              B = -B / this.V[b + 1][b];
              for (var U = b + 1; U < this.n; U++) this.V[U][_] += B * this.V[U][b];
            }
            for (var H = 0; H < this.n; H++) this.V[H][b] = 0;
            this.V[b][b] = 1;
          }
          for (var K = m - 1, ht = 0, Lt = /* @__PURE__ */ Math.pow(2, -52), bt = /* @__PURE__ */ Math.pow(2, -966); m > 0; ) {
            var Q = void 0, Xt = void 0;
            for (Q = m - 2; Q >= -1 && Q !== -1; Q--) if (Math.abs(t[Q]) <= bt + Lt * (Math.abs(this.s[Q]) + Math.abs(this.s[Q + 1]))) {
              t[Q] = 0;
              break;
            }
            if (Q === m - 2) Xt = 4;
            else {
              var wt = void 0;
              for (wt = m - 1; wt >= Q && wt !== Q; wt--) {
                var ot = (wt !== m ? Math.abs(t[wt]) : 0) + (wt !== Q + 1 ? Math.abs(t[wt - 1]) : 0);
                if (Math.abs(this.s[wt]) <= bt + Lt * ot) {
                  this.s[wt] = 0;
                  break;
                }
              }
              wt === Q ? Xt = 3 : wt === m - 1 ? Xt = 1 : (Xt = 2, Q = wt);
            }
            switch (Q++, Xt) {
              case 1:
                {
                  var et = t[m - 2];
                  t[m - 2] = 0;
                  for (var yt2 = m - 2; yt2 >= Q; yt2--) {
                    var Et = /* @__PURE__ */ u.hypot(this.s[yt2], et), Dt = this.s[yt2] / Et, Tt = et / Et;
                    if (this.s[yt2] = Et, yt2 !== Q && (et = -Tt * t[yt2 - 1], t[yt2 - 1] = Dt * t[yt2 - 1]), e) for (var At = 0; At < this.n; At++) Et = Dt * this.V[At][yt2] + Tt * this.V[At][m - 1], this.V[At][m - 1] = -Tt * this.V[At][yt2] + Dt * this.V[At][m - 1], this.V[At][yt2] = Et;
                  }
                }
                break;
              case 2:
                {
                  var xt = t[Q - 1];
                  t[Q - 1] = 0;
                  for (var It = Q; It < m; It++) {
                    var zt = /* @__PURE__ */ u.hypot(this.s[It], xt), Yt = this.s[It] / zt, Ht = xt / zt;
                    if (this.s[It] = zt, xt = -Ht * t[It], t[It] = Yt * t[It], c2) for (var Pt = 0; Pt < this.m; Pt++) zt = Yt * this.U[Pt][It] + Ht * this.U[Pt][Q - 1], this.U[Pt][Q - 1] = -Ht * this.U[Pt][It] + Yt * this.U[Pt][Q - 1], this.U[Pt][It] = zt;
                  }
                }
                break;
              case 3:
                {
                  var Y = /* @__PURE__ */ Math.max(/* @__PURE__ */ Math.max(/* @__PURE__ */ Math.max(/* @__PURE__ */ Math.max(/* @__PURE__ */ Math.abs(this.s[m - 1]), /* @__PURE__ */ Math.abs(this.s[m - 2])), /* @__PURE__ */ Math.abs(t[m - 2])), /* @__PURE__ */ Math.abs(this.s[Q])), /* @__PURE__ */ Math.abs(t[Q])), W = this.s[m - 1] / Y, V = this.s[m - 2] / Y, $ = t[m - 2] / Y, k = this.s[Q] / Y, j = t[Q] / Y, gt = ((V + W) * (V - W) + $ * $) / 2, ft = W * $ * (W * $), q2 = 0;
                  /* @__PURE__ */ (function(Ot, Nt) {
                    return Ot || Nt;
                  })(gt !== 0, ft !== 0) && (q2 = /* @__PURE__ */ Math.sqrt(gt * gt + ft), gt < 0 && (q2 = -q2), q2 = ft / (gt + q2));
                  for (var lt = (k + W) * (k - W) + q2, ut = k * j, it = Q; it < m - 1; it++) {
                    var pt = /* @__PURE__ */ u.hypot(lt, ut), Ct = lt / pt, st = ut / pt;
                    if (it !== Q && (t[it - 1] = pt), lt = Ct * this.s[it] + st * t[it], t[it] = Ct * t[it] - st * this.s[it], ut = st * this.s[it + 1], this.s[it + 1] = Ct * this.s[it + 1], e) for (var nt = 0; nt < this.n; nt++) pt = Ct * this.V[nt][it] + st * this.V[nt][it + 1], this.V[nt][it + 1] = -st * this.V[nt][it] + Ct * this.V[nt][it + 1], this.V[nt][it] = pt;
                    if (pt = /* @__PURE__ */ u.hypot(lt, ut), Ct = lt / pt, st = ut / pt, this.s[it] = pt, lt = Ct * t[it] + st * this.s[it + 1], this.s[it + 1] = -st * t[it] + Ct * this.s[it + 1], ut = st * t[it + 1], t[it + 1] = Ct * t[it + 1], c2 && it < this.m - 1) for (var dt = 0; dt < this.m; dt++) pt = Ct * this.U[dt][it] + st * this.U[dt][it + 1], this.U[dt][it + 1] = -st * this.U[dt][it] + Ct * this.U[dt][it + 1], this.U[dt][it] = pt;
                  }
                  t[m - 2] = lt, ht = ht + 1;
                }
                break;
              case 4:
                {
                  if (this.s[Q] <= 0 && (this.s[Q] = this.s[Q] < 0 ? -this.s[Q] : 0, e)) for (var at = 0; at <= K; at++) this.V[at][Q] = -this.V[at][Q];
                  for (; Q < K && !(this.s[Q] >= this.s[Q + 1]); ) {
                    var ct = this.s[Q];
                    if (this.s[Q] = this.s[Q + 1], this.s[Q + 1] = ct, e && Q < this.n - 1) for (var Ft2 = 0; Ft2 < this.n; Ft2++) ct = this.V[Ft2][Q + 1], this.V[Ft2][Q + 1] = this.V[Ft2][Q], this.V[Ft2][Q] = ct;
                    if (c2 && Q < this.m - 1) for (var Rt = 0; Rt < this.m; Rt++) ct = this.U[Rt][Q + 1], this.U[Rt][Q + 1] = this.U[Rt][Q], this.U[Rt][Q] = ct;
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
        }, u.hypot = function(o, a) {
          var t = void 0;
          return Math.abs(o) > Math.abs(a) ? (t = a / o, t = Math.abs(o) * Math.sqrt(1 + t * t)) : a != 0 ? (t = o / a, t = Math.abs(a) * Math.sqrt(1 + t * t)) : t = 0, t;
        }, E.exports = u;
      },
      function(E, w, N) {
        var u = /* @__PURE__ */ function() {
          function t(n2, c2) {
            for (var e = 0; e < c2.length; e++) {
              var p2 = c2[e];
              p2.enumerable = p2.enumerable || false, p2.configurable = true, "value" in p2 && (p2.writable = true), Object.defineProperty(n2, p2.key, p2);
            }
          }
          return m$1(t, "defineProperties"), function(n2, c2, e) {
            return c2 && t(n2.prototype, c2), e && t(n2, e), n2;
          };
        }();
        function o(t, n2) {
          if (!(t instanceof n2)) throw new TypeError("Cannot call a class as a function");
        }
        m$1(o, "_classCallCheck");
        var a = /* @__PURE__ */ function() {
          function t(n2, c2) {
            var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, p2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : -1, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : -1;
            o(this, t), this.sequence1 = n2, this.sequence2 = c2, this.match_score = e, this.mismatch_penalty = p2, this.gap_penalty = i, this.iMax = n2.length + 1, this.jMax = c2.length + 1, this.grid = new Array(this.iMax);
            for (var r = 0; r < this.iMax; r++) {
              this.grid[r] = new Array(this.jMax);
              for (var h = 0; h < this.jMax; h++) this.grid[r][h] = 0;
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
          return m$1(t, "NeedlemanWunsch"), u(t, [
            {
              key: "getScore",
              value: /* @__PURE__ */ m$1(function() {
                return this.score;
              }, "getScore")
            },
            {
              key: "getAlignments",
              value: /* @__PURE__ */ m$1(function() {
                return this.alignments;
              }, "getAlignments")
            },
            {
              key: "computeGrids",
              value: /* @__PURE__ */ m$1(function() {
                for (var c2 = 1; c2 < this.jMax; c2++) this.grid[0][c2] = this.grid[0][c2 - 1] + this.gap_penalty, this.tracebackGrid[0][c2] = [
                  false,
                  false,
                  true
                ];
                for (var e = 1; e < this.iMax; e++) this.grid[e][0] = this.grid[e - 1][0] + this.gap_penalty, this.tracebackGrid[e][0] = [
                  false,
                  true,
                  false
                ];
                for (var p2 = 1; p2 < this.iMax; p2++) for (var i = 1; i < this.jMax; i++) {
                  var r = void 0;
                  this.sequence1[p2 - 1] === this.sequence2[i - 1] ? r = this.grid[p2 - 1][i - 1] + this.match_score : r = this.grid[p2 - 1][i - 1] + this.mismatch_penalty;
                  var h = this.grid[p2 - 1][i] + this.gap_penalty, f = this.grid[p2][i - 1] + this.gap_penalty, l = [
                    r,
                    h,
                    f
                  ], A = /* @__PURE__ */ this.arrayAllMaxIndexes(l);
                  this.grid[p2][i] = l[A[0]], this.tracebackGrid[p2][i] = [
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
              value: /* @__PURE__ */ m$1(function() {
                var c2 = [];
                for (c2.push({
                  pos: [
                    this.sequence1.length,
                    this.sequence2.length
                  ],
                  seq1: "",
                  seq2: ""
                }); c2[0]; ) {
                  var e = c2[0], p2 = this.tracebackGrid[e.pos[0]][e.pos[1]];
                  p2[0] && c2.push({
                    pos: [
                      e.pos[0] - 1,
                      e.pos[1] - 1
                    ],
                    seq1: this.sequence1[e.pos[0] - 1] + e.seq1,
                    seq2: this.sequence2[e.pos[1] - 1] + e.seq2
                  }), p2[1] && c2.push({
                    pos: [
                      e.pos[0] - 1,
                      e.pos[1]
                    ],
                    seq1: this.sequence1[e.pos[0] - 1] + e.seq1,
                    seq2: "-" + e.seq2
                  }), p2[2] && c2.push({
                    pos: [
                      e.pos[0],
                      e.pos[1] - 1
                    ],
                    seq1: "-" + e.seq1,
                    seq2: this.sequence2[e.pos[1] - 1] + e.seq2
                  }), e.pos[0] === 0 && e.pos[1] === 0 && this.alignments.push({
                    sequence1: e.seq1,
                    sequence2: e.seq2
                  }), c2.shift();
                }
                return this.alignments;
              }, "alignmentTraceback")
            },
            {
              key: "getAllIndexes",
              value: /* @__PURE__ */ m$1(function(c2, e) {
                for (var p2 = [], i = -1; (i = /* @__PURE__ */ c2.indexOf(e, i + 1)) !== -1; ) p2.push(i);
                return p2;
              }, "getAllIndexes")
            },
            {
              key: "arrayAllMaxIndexes",
              value: /* @__PURE__ */ m$1(function(c2) {
                return this.getAllIndexes(c2, /* @__PURE__ */ Math.max.apply(null, c2));
              }, "arrayAllMaxIndexes")
            }
          ]), t;
        }();
        E.exports = a;
      },
      function(E, w, N) {
        var u = /* @__PURE__ */ m$1(function() {
        }, "layoutBase");
        u.FDLayout = /* @__PURE__ */ N(18), u.FDLayoutConstants = /* @__PURE__ */ N(4), u.FDLayoutEdge = /* @__PURE__ */ N(19), u.FDLayoutNode = /* @__PURE__ */ N(20), u.DimensionD = /* @__PURE__ */ N(21), u.HashMap = /* @__PURE__ */ N(22), u.HashSet = /* @__PURE__ */ N(23), u.IGeometry = /* @__PURE__ */ N(8), u.IMath = /* @__PURE__ */ N(9), u.Integer = /* @__PURE__ */ N(10), u.Point = /* @__PURE__ */ N(12), u.PointD = /* @__PURE__ */ N(5), u.RandomSeed = /* @__PURE__ */ N(16), u.RectangleD = /* @__PURE__ */ N(13), u.Transform = /* @__PURE__ */ N(17), u.UniqueIDGeneretor = /* @__PURE__ */ N(14), u.Quicksort = /* @__PURE__ */ N(25), u.LinkedList = /* @__PURE__ */ N(11), u.LGraphObject = /* @__PURE__ */ N(2), u.LGraph = /* @__PURE__ */ N(6), u.LEdge = /* @__PURE__ */ N(1), u.LGraphManager = /* @__PURE__ */ N(7), u.LNode = /* @__PURE__ */ N(3), u.Layout = /* @__PURE__ */ N(15), u.LayoutConstants = /* @__PURE__ */ N(0), u.NeedlemanWunsch = /* @__PURE__ */ N(27), u.Matrix = /* @__PURE__ */ N(24), u.SVD = /* @__PURE__ */ N(26), E.exports = u;
      },
      function(E, w, N) {
        function u() {
          this.listeners = [];
        }
        m$1(u, "Emitter");
        var o = u.prototype;
        o.addListener = function(a, t) {
          this.listeners.push({
            event: a,
            callback: t
          });
        }, o.removeListener = function(a, t) {
          for (var n2 = this.listeners.length; n2 >= 0; n2--) {
            var c2 = this.listeners[n2];
            c2.event === a && c2.callback === t && this.listeners.splice(n2, 1);
          }
        }, o.emit = function(a, t) {
          for (var n2 = 0; n2 < this.listeners.length; n2++) {
            var c2 = this.listeners[n2];
            a === c2.event && c2.callback(t);
          }
        }, E.exports = u;
      }
    ]);
  });
});
var Ie = /* @__PURE__ */ n((ce, Re) => {
  m$1(function(w, N) {
    typeof ce == "object" && typeof Re == "object" ? Re.exports = /* @__PURE__ */ N(/* @__PURE__ */ Oe()) : typeof define == "function" && define.amd ? define([
      "layout-base"
    ], N) : typeof ce == "object" ? ce.coseBase = /* @__PURE__ */ N(/* @__PURE__ */ Oe()) : w.coseBase = /* @__PURE__ */ N(w.layoutBase);
  }, "webpackUniversalModuleDefinition")(ce, function(E) {
    return (() => {
      var w = {
        45: (a, t, n2) => {
          var c2 = {};
          c2.layoutBase = /* @__PURE__ */ n2(551), c2.CoSEConstants = /* @__PURE__ */ n2(806), c2.CoSEEdge = /* @__PURE__ */ n2(767), c2.CoSEGraph = /* @__PURE__ */ n2(880), c2.CoSEGraphManager = /* @__PURE__ */ n2(578), c2.CoSELayout = /* @__PURE__ */ n2(765), c2.CoSENode = /* @__PURE__ */ n2(991), c2.ConstraintHandler = /* @__PURE__ */ n2(902), a.exports = c2;
        },
        806: (a, t, n2) => {
          var c2 = n2(551).FDLayoutConstants;
          function e() {
          }
          m$1(e, "CoSEConstants");
          for (var p2 in c2) e[p2] = c2[p2];
          e.DEFAULT_USE_MULTI_LEVEL_SCALING = false, e.DEFAULT_RADIAL_SEPARATION = c2.DEFAULT_EDGE_LENGTH, e.DEFAULT_COMPONENT_SEPERATION = 60, e.TILE = true, e.TILING_PADDING_VERTICAL = 10, e.TILING_PADDING_HORIZONTAL = 10, e.TRANSFORM_ON_CONSTRAINT_HANDLING = true, e.ENFORCE_CONSTRAINTS = true, e.APPLY_LAYOUT = true, e.RELAX_MOVEMENT_ON_CONSTRAINTS = true, e.TREE_REDUCTION_ON_INCREMENTAL = true, e.PURE_INCREMENTAL = e.DEFAULT_INCREMENTAL, a.exports = e;
        },
        767: (a, t, n2) => {
          var c2 = n2(551).FDLayoutEdge;
          function e(i, r, h) {
            c2.call(this, i, r, h);
          }
          m$1(e, "CoSEEdge"), e.prototype = /* @__PURE__ */ Object.create(c2.prototype);
          for (var p2 in c2) e[p2] = c2[p2];
          a.exports = e;
        },
        880: (a, t, n2) => {
          var c2 = n2(551).LGraph;
          function e(i, r, h) {
            c2.call(this, i, r, h);
          }
          m$1(e, "CoSEGraph"), e.prototype = /* @__PURE__ */ Object.create(c2.prototype);
          for (var p2 in c2) e[p2] = c2[p2];
          a.exports = e;
        },
        578: (a, t, n2) => {
          var c2 = n2(551).LGraphManager;
          function e(i) {
            c2.call(this, i);
          }
          m$1(e, "CoSEGraphManager"), e.prototype = /* @__PURE__ */ Object.create(c2.prototype);
          for (var p2 in c2) e[p2] = c2[p2];
          a.exports = e;
        },
        765: (a, t, n2) => {
          var c2 = n2(551).FDLayout, e = /* @__PURE__ */ n2(578), p2 = /* @__PURE__ */ n2(880), i = /* @__PURE__ */ n2(991), r = /* @__PURE__ */ n2(767), h = /* @__PURE__ */ n2(806), f = /* @__PURE__ */ n2(902), l = n2(551).FDLayoutConstants, A = n2(551).LayoutConstants, v = n2(551).Point, y = n2(551).PointD, D = n2(551).DimensionD, F = n2(551).Layout, C = n2(551).Integer, G = n2(551).IGeometry, z = n2(551).LGraph, X = n2(551).Transform, rt = n2(551).LinkedList;
          function I() {
            c2.call(this), this.toBeTiled = {}, this.constraints = {};
          }
          m$1(I, "CoSELayout"), I.prototype = /* @__PURE__ */ Object.create(c2.prototype);
          for (var J in c2) I[J] = c2[J];
          I.prototype.newGraphManager = function() {
            var s2 = new e(this);
            return this.graphManager = s2, s2;
          }, I.prototype.newGraph = function(s2) {
            return new p2(null, this.graphManager, s2);
          }, I.prototype.newNode = function(s2) {
            return new i(this.graphManager, s2);
          }, I.prototype.newEdge = function(s2) {
            return new r(null, null, s2);
          }, I.prototype.initParameters = function() {
            c2.prototype.initParameters.call(this, arguments), this.isSubLayout || (h.DEFAULT_EDGE_LENGTH < 10 ? this.idealEdgeLength = 10 : this.idealEdgeLength = h.DEFAULT_EDGE_LENGTH, this.useSmartIdealEdgeLengthCalculation = h.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.gravityConstant = l.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = l.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = l.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = l.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.prunedNodesAll = [], this.growTreeIterations = 0, this.afterGrowthIterations = 0, this.isTreeGrowing = false, this.isGrowthFinished = false);
          }, I.prototype.initSpringEmbedder = function() {
            c2.prototype.initSpringEmbedder.call(this), this.coolingCycle = 0, this.maxCoolingCycle = this.maxIterations / l.CONVERGENCE_CHECK_PERIOD, this.finalTemperature = 0.04, this.coolingAdjuster = 1;
          }, I.prototype.layout = function() {
            var s2 = A.DEFAULT_CREATE_BENDS_AS_NEEDED;
            return s2 && (this.createBendpoints(), this.graphManager.resetAllEdges()), this.level = 0, this.classicLayout();
          }, I.prototype.classicLayout = function() {
            if (this.nodesWithGravity = /* @__PURE__ */ this.calculateNodesToApplyGravitationTo(), this.graphManager.setAllNodesToApplyGravitation(this.nodesWithGravity), this.calcNoOfChildrenForAllNodes(), this.graphManager.calcLowestCommonAncestors(), this.graphManager.calcInclusionTreeDepths(), this.graphManager.getRoot().calcEstimatedSize(), this.calcIdealEdgeLengths(), this.incremental) {
              if (h.TREE_REDUCTION_ON_INCREMENTAL) {
                this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
                var m = new Set(this.getAllNodes()), g = /* @__PURE__ */ this.nodesWithGravity.filter(function(O) {
                  return m.has(O);
                });
                this.graphManager.setAllNodesToApplyGravitation(g);
              }
            } else {
              var s2 = /* @__PURE__ */ this.getFlatForest();
              if (s2.length > 0) this.positionNodesRadially(s2);
              else {
                this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
                var m = new Set(this.getAllNodes()), g = /* @__PURE__ */ this.nodesWithGravity.filter(function(T) {
                  return m.has(T);
                });
                this.graphManager.setAllNodesToApplyGravitation(g), this.positionNodesRandomly();
              }
            }
            return Object.keys(this.constraints).length > 0 && (f.handleConstraints(this), this.initConstraintVariables()), this.initSpringEmbedder(), h.APPLY_LAYOUT && this.runSpringEmbedder(), true;
          }, I.prototype.tick = function() {
            if (this.totalIterations++, this.totalIterations === this.maxIterations && !this.isTreeGrowing && !this.isGrowthFinished) if (this.prunedNodesAll.length > 0) this.isTreeGrowing = true;
            else return true;
            if (this.totalIterations % l.CONVERGENCE_CHECK_PERIOD == 0 && !this.isTreeGrowing && !this.isGrowthFinished) {
              if (this.isConverged()) if (this.prunedNodesAll.length > 0) this.isTreeGrowing = true;
              else return true;
              this.coolingCycle++, this.layoutQuality == 0 ? this.coolingAdjuster = this.coolingCycle : this.layoutQuality == 1 && (this.coolingAdjuster = this.coolingCycle / 3), this.coolingFactor = /* @__PURE__ */ Math.max(this.initialCoolingFactor - Math.pow(this.coolingCycle, Math.log(100 * (this.initialCoolingFactor - this.finalTemperature)) / Math.log(this.maxCoolingCycle)) / 100 * this.coolingAdjuster, this.finalTemperature), this.animationPeriod = /* @__PURE__ */ Math.ceil(this.initialAnimationPeriod * Math.sqrt(this.coolingFactor));
            }
            if (this.isTreeGrowing) {
              if (this.growTreeIterations % 10 == 0) if (this.prunedNodesAll.length > 0) {
                this.graphManager.updateBounds(), this.updateGrid(), this.growTree(this.prunedNodesAll), this.graphManager.resetAllNodesToApplyGravitation();
                var s2 = new Set(this.getAllNodes()), m = /* @__PURE__ */ this.nodesWithGravity.filter(function(d2) {
                  return s2.has(d2);
                });
                this.graphManager.setAllNodesToApplyGravitation(m), this.graphManager.updateBounds(), this.updateGrid(), h.PURE_INCREMENTAL ? this.coolingFactor = l.DEFAULT_COOLING_FACTOR_INCREMENTAL / 2 : this.coolingFactor = l.DEFAULT_COOLING_FACTOR_INCREMENTAL;
              } else this.isTreeGrowing = false, this.isGrowthFinished = true;
              this.growTreeIterations++;
            }
            if (this.isGrowthFinished) {
              if (this.isConverged()) return true;
              this.afterGrowthIterations % 10 == 0 && (this.graphManager.updateBounds(), this.updateGrid()), h.PURE_INCREMENTAL ? this.coolingFactor = l.DEFAULT_COOLING_FACTOR_INCREMENTAL / 2 * ((100 - this.afterGrowthIterations) / 100) : this.coolingFactor = l.DEFAULT_COOLING_FACTOR_INCREMENTAL * ((100 - this.afterGrowthIterations) / 100), this.afterGrowthIterations++;
            }
            var g = !this.isTreeGrowing && !this.isGrowthFinished, T = this.growTreeIterations % 10 == 1 && this.isTreeGrowing || this.afterGrowthIterations % 10 == 1 && this.isGrowthFinished;
            return this.totalDisplacement = 0, this.graphManager.updateBounds(), this.calcSpringForces(), this.calcRepulsionForces(g, T), this.calcGravitationalForces(), this.moveNodes(), this.animate(), false;
          }, I.prototype.getPositionsData = function() {
            for (var s2 = /* @__PURE__ */ this.graphManager.getAllNodes(), m = {}, g = 0; g < s2.length; g++) {
              var T = s2[g].rect, d2 = s2[g].id;
              m[d2] = {
                id: d2,
                x: /* @__PURE__ */ T.getCenterX(),
                y: /* @__PURE__ */ T.getCenterY(),
                w: T.width,
                h: T.height
              };
            }
            return m;
          }, I.prototype.runSpringEmbedder = function() {
            this.initialAnimationPeriod = 25, this.animationPeriod = this.initialAnimationPeriod;
            var s2 = false;
            if (l.ANIMATE === "during") this.emit("layoutstarted");
            else {
              for (; !s2; ) s2 = /* @__PURE__ */ this.tick();
              this.graphManager.updateBounds();
            }
          }, I.prototype.moveNodes = function() {
            for (var s2 = /* @__PURE__ */ this.getAllNodes(), m, g = 0; g < s2.length; g++) m = s2[g], m.calculateDisplacement();
            Object.keys(this.constraints).length > 0 && this.updateDisplacements();
            for (var g = 0; g < s2.length; g++) m = s2[g], m.move();
          }, I.prototype.initConstraintVariables = function() {
            var s2 = this;
            this.idToNodeMap = /* @__PURE__ */ new Map(), this.fixedNodeSet = /* @__PURE__ */ new Set();
            for (var m = /* @__PURE__ */ this.graphManager.getAllNodes(), g = 0; g < m.length; g++) {
              var T = m[g];
              this.idToNodeMap.set(T.id, T);
            }
            var d2 = /* @__PURE__ */ m$1(function M(U) {
              for (var H = /* @__PURE__ */ U.getChild().getNodes(), K, ht = 0, Lt = 0; Lt < H.length; Lt++) K = H[Lt], K.getChild() == null ? s2.fixedNodeSet.has(K.id) && (ht += 100) : ht += /* @__PURE__ */ M(K);
              return ht;
            }, "calculateCompoundWeight");
            if (this.constraints.fixedNodeConstraint) {
              this.constraints.fixedNodeConstraint.forEach(function(H) {
                s2.fixedNodeSet.add(H.nodeId);
              });
              for (var m = /* @__PURE__ */ this.graphManager.getAllNodes(), T, g = 0; g < m.length; g++) if (T = m[g], T.getChild() != null) {
                var O = /* @__PURE__ */ d2(T);
                O > 0 && (T.fixedNodeWeight = O);
              }
            }
            if (this.constraints.relativePlacementConstraint) {
              var x = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map();
              if (this.dummyToNodeForVerticalAlignment = /* @__PURE__ */ new Map(), this.dummyToNodeForHorizontalAlignment = /* @__PURE__ */ new Map(), this.fixedNodesOnHorizontal = /* @__PURE__ */ new Set(), this.fixedNodesOnVertical = /* @__PURE__ */ new Set(), this.fixedNodeSet.forEach(function(M) {
                s2.fixedNodesOnHorizontal.add(M), s2.fixedNodesOnVertical.add(M);
              }), this.constraints.alignmentConstraint) {
                if (this.constraints.alignmentConstraint.vertical) for (var S = this.constraints.alignmentConstraint.vertical, g = 0; g < S.length; g++) this.dummyToNodeForVerticalAlignment.set("dummy" + g, []), S[g].forEach(function(U) {
                  x.set(U, "dummy" + g), s2.dummyToNodeForVerticalAlignment.get("dummy" + g).push(U), s2.fixedNodeSet.has(U) && s2.fixedNodesOnHorizontal.add("dummy" + g);
                });
                if (this.constraints.alignmentConstraint.horizontal) for (var R = this.constraints.alignmentConstraint.horizontal, g = 0; g < R.length; g++) this.dummyToNodeForHorizontalAlignment.set("dummy" + g, []), R[g].forEach(function(U) {
                  P.set(U, "dummy" + g), s2.dummyToNodeForHorizontalAlignment.get("dummy" + g).push(U), s2.fixedNodeSet.has(U) && s2.fixedNodesOnVertical.add("dummy" + g);
                });
              }
              if (h.RELAX_MOVEMENT_ON_CONSTRAINTS) this.shuffle = function(M) {
                var U, H, K;
                for (K = M.length - 1; K >= 2 * M.length / 3; K--) U = /* @__PURE__ */ Math.floor(Math.random() * (K + 1)), H = M[K], M[K] = M[U], M[U] = H;
                return M;
              }, this.nodesInRelativeHorizontal = [], this.nodesInRelativeVertical = [], this.nodeToRelativeConstraintMapHorizontal = /* @__PURE__ */ new Map(), this.nodeToRelativeConstraintMapVertical = /* @__PURE__ */ new Map(), this.nodeToTempPositionMapHorizontal = /* @__PURE__ */ new Map(), this.nodeToTempPositionMapVertical = /* @__PURE__ */ new Map(), this.constraints.relativePlacementConstraint.forEach(function(M) {
                if (M.left) {
                  var U = x.has(M.left) ? x.get(M.left) : M.left, H = x.has(M.right) ? x.get(M.right) : M.right;
                  s2.nodesInRelativeHorizontal.includes(U) || (s2.nodesInRelativeHorizontal.push(U), s2.nodeToRelativeConstraintMapHorizontal.set(U, []), s2.dummyToNodeForVerticalAlignment.has(U) ? s2.nodeToTempPositionMapHorizontal.set(U, /* @__PURE__ */ s2.idToNodeMap.get(s2.dummyToNodeForVerticalAlignment.get(U)[0]).getCenterX()) : s2.nodeToTempPositionMapHorizontal.set(U, /* @__PURE__ */ s2.idToNodeMap.get(U).getCenterX())), s2.nodesInRelativeHorizontal.includes(H) || (s2.nodesInRelativeHorizontal.push(H), s2.nodeToRelativeConstraintMapHorizontal.set(H, []), s2.dummyToNodeForVerticalAlignment.has(H) ? s2.nodeToTempPositionMapHorizontal.set(H, /* @__PURE__ */ s2.idToNodeMap.get(s2.dummyToNodeForVerticalAlignment.get(H)[0]).getCenterX()) : s2.nodeToTempPositionMapHorizontal.set(H, /* @__PURE__ */ s2.idToNodeMap.get(H).getCenterX())), s2.nodeToRelativeConstraintMapHorizontal.get(U).push({
                    right: H,
                    gap: M.gap
                  }), s2.nodeToRelativeConstraintMapHorizontal.get(H).push({
                    left: U,
                    gap: M.gap
                  });
                } else {
                  var K = P.has(M.top) ? P.get(M.top) : M.top, ht = P.has(M.bottom) ? P.get(M.bottom) : M.bottom;
                  s2.nodesInRelativeVertical.includes(K) || (s2.nodesInRelativeVertical.push(K), s2.nodeToRelativeConstraintMapVertical.set(K, []), s2.dummyToNodeForHorizontalAlignment.has(K) ? s2.nodeToTempPositionMapVertical.set(K, /* @__PURE__ */ s2.idToNodeMap.get(s2.dummyToNodeForHorizontalAlignment.get(K)[0]).getCenterY()) : s2.nodeToTempPositionMapVertical.set(K, /* @__PURE__ */ s2.idToNodeMap.get(K).getCenterY())), s2.nodesInRelativeVertical.includes(ht) || (s2.nodesInRelativeVertical.push(ht), s2.nodeToRelativeConstraintMapVertical.set(ht, []), s2.dummyToNodeForHorizontalAlignment.has(ht) ? s2.nodeToTempPositionMapVertical.set(ht, /* @__PURE__ */ s2.idToNodeMap.get(s2.dummyToNodeForHorizontalAlignment.get(ht)[0]).getCenterY()) : s2.nodeToTempPositionMapVertical.set(ht, /* @__PURE__ */ s2.idToNodeMap.get(ht).getCenterY())), s2.nodeToRelativeConstraintMapVertical.get(K).push({
                    bottom: ht,
                    gap: M.gap
                  }), s2.nodeToRelativeConstraintMapVertical.get(ht).push({
                    top: K,
                    gap: M.gap
                  });
                }
              });
              else {
                var Z = /* @__PURE__ */ new Map(), tt2 = /* @__PURE__ */ new Map();
                this.constraints.relativePlacementConstraint.forEach(function(M) {
                  if (M.left) {
                    var U = x.has(M.left) ? x.get(M.left) : M.left, H = x.has(M.right) ? x.get(M.right) : M.right;
                    Z.has(U) ? Z.get(U).push(H) : Z.set(U, [
                      H
                    ]), Z.has(H) ? Z.get(H).push(U) : Z.set(H, [
                      U
                    ]);
                  } else {
                    var K = P.has(M.top) ? P.get(M.top) : M.top, ht = P.has(M.bottom) ? P.get(M.bottom) : M.bottom;
                    tt2.has(K) ? tt2.get(K).push(ht) : tt2.set(K, [
                      ht
                    ]), tt2.has(ht) ? tt2.get(ht).push(K) : tt2.set(ht, [
                      K
                    ]);
                  }
                });
                var b = /* @__PURE__ */ m$1(function(U, H) {
                  var K = [], ht = [], Lt = new rt(), bt = /* @__PURE__ */ new Set(), Q = 0;
                  return U.forEach(function(Xt, wt) {
                    if (!bt.has(wt)) {
                      K[Q] = [], ht[Q] = false;
                      var ot = wt;
                      for (Lt.push(ot), bt.add(ot), K[Q].push(ot); Lt.length != 0; ) {
                        ot = /* @__PURE__ */ Lt.shift(), H.has(ot) && (ht[Q] = true);
                        var et = /* @__PURE__ */ U.get(ot);
                        et.forEach(function(yt2) {
                          bt.has(yt2) || (Lt.push(yt2), bt.add(yt2), K[Q].push(yt2));
                        });
                      }
                      Q++;
                    }
                  }), {
                    components: K,
                    isFixed: ht
                  };
                }, "constructComponents"), _ = /* @__PURE__ */ b(Z, s2.fixedNodesOnHorizontal);
                this.componentsOnHorizontal = _.components, this.fixedComponentsOnHorizontal = _.isFixed;
                var B = /* @__PURE__ */ b(tt2, s2.fixedNodesOnVertical);
                this.componentsOnVertical = B.components, this.fixedComponentsOnVertical = B.isFixed;
              }
            }
          }, I.prototype.updateDisplacements = function() {
            var s2 = this;
            if (this.constraints.fixedNodeConstraint && this.constraints.fixedNodeConstraint.forEach(function(B) {
              var M = /* @__PURE__ */ s2.idToNodeMap.get(B.nodeId);
              M.displacementX = 0, M.displacementY = 0;
            }), this.constraints.alignmentConstraint) {
              if (this.constraints.alignmentConstraint.vertical) for (var m = this.constraints.alignmentConstraint.vertical, g = 0; g < m.length; g++) {
                for (var T = 0, d2 = 0; d2 < m[g].length; d2++) {
                  if (this.fixedNodeSet.has(m[g][d2])) {
                    T = 0;
                    break;
                  }
                  T += this.idToNodeMap.get(m[g][d2]).displacementX;
                }
                for (var O = T / m[g].length, d2 = 0; d2 < m[g].length; d2++) this.idToNodeMap.get(m[g][d2]).displacementX = O;
              }
              if (this.constraints.alignmentConstraint.horizontal) for (var x = this.constraints.alignmentConstraint.horizontal, g = 0; g < x.length; g++) {
                for (var P = 0, d2 = 0; d2 < x[g].length; d2++) {
                  if (this.fixedNodeSet.has(x[g][d2])) {
                    P = 0;
                    break;
                  }
                  P += this.idToNodeMap.get(x[g][d2]).displacementY;
                }
                for (var S = P / x[g].length, d2 = 0; d2 < x[g].length; d2++) this.idToNodeMap.get(x[g][d2]).displacementY = S;
              }
            }
            if (this.constraints.relativePlacementConstraint) if (h.RELAX_MOVEMENT_ON_CONSTRAINTS) this.totalIterations % 10 == 0 && (this.shuffle(this.nodesInRelativeHorizontal), this.shuffle(this.nodesInRelativeVertical)), this.nodesInRelativeHorizontal.forEach(function(B) {
              if (!s2.fixedNodesOnHorizontal.has(B)) {
                var M = 0;
                s2.dummyToNodeForVerticalAlignment.has(B) ? M = s2.idToNodeMap.get(s2.dummyToNodeForVerticalAlignment.get(B)[0]).displacementX : M = s2.idToNodeMap.get(B).displacementX, s2.nodeToRelativeConstraintMapHorizontal.get(B).forEach(function(U) {
                  if (U.right) {
                    var H = s2.nodeToTempPositionMapHorizontal.get(U.right) - s2.nodeToTempPositionMapHorizontal.get(B) - M;
                    H < U.gap && (M -= U.gap - H);
                  } else {
                    var H = s2.nodeToTempPositionMapHorizontal.get(B) - s2.nodeToTempPositionMapHorizontal.get(U.left) + M;
                    H < U.gap && (M += U.gap - H);
                  }
                }), s2.nodeToTempPositionMapHorizontal.set(B, s2.nodeToTempPositionMapHorizontal.get(B) + M), s2.dummyToNodeForVerticalAlignment.has(B) ? s2.dummyToNodeForVerticalAlignment.get(B).forEach(function(U) {
                  s2.idToNodeMap.get(U).displacementX = M;
                }) : s2.idToNodeMap.get(B).displacementX = M;
              }
            }), this.nodesInRelativeVertical.forEach(function(B) {
              if (!s2.fixedNodesOnHorizontal.has(B)) {
                var M = 0;
                s2.dummyToNodeForHorizontalAlignment.has(B) ? M = s2.idToNodeMap.get(s2.dummyToNodeForHorizontalAlignment.get(B)[0]).displacementY : M = s2.idToNodeMap.get(B).displacementY, s2.nodeToRelativeConstraintMapVertical.get(B).forEach(function(U) {
                  if (U.bottom) {
                    var H = s2.nodeToTempPositionMapVertical.get(U.bottom) - s2.nodeToTempPositionMapVertical.get(B) - M;
                    H < U.gap && (M -= U.gap - H);
                  } else {
                    var H = s2.nodeToTempPositionMapVertical.get(B) - s2.nodeToTempPositionMapVertical.get(U.top) + M;
                    H < U.gap && (M += U.gap - H);
                  }
                }), s2.nodeToTempPositionMapVertical.set(B, s2.nodeToTempPositionMapVertical.get(B) + M), s2.dummyToNodeForHorizontalAlignment.has(B) ? s2.dummyToNodeForHorizontalAlignment.get(B).forEach(function(U) {
                  s2.idToNodeMap.get(U).displacementY = M;
                }) : s2.idToNodeMap.get(B).displacementY = M;
              }
            });
            else {
              for (var g = 0; g < this.componentsOnHorizontal.length; g++) {
                var R = this.componentsOnHorizontal[g];
                if (this.fixedComponentsOnHorizontal[g]) for (var d2 = 0; d2 < R.length; d2++) this.dummyToNodeForVerticalAlignment.has(R[d2]) ? this.dummyToNodeForVerticalAlignment.get(R[d2]).forEach(function(U) {
                  s2.idToNodeMap.get(U).displacementX = 0;
                }) : this.idToNodeMap.get(R[d2]).displacementX = 0;
                else {
                  for (var Z = 0, tt2 = 0, d2 = 0; d2 < R.length; d2++) if (this.dummyToNodeForVerticalAlignment.has(R[d2])) {
                    var b = /* @__PURE__ */ this.dummyToNodeForVerticalAlignment.get(R[d2]);
                    Z += b.length * this.idToNodeMap.get(b[0]).displacementX, tt2 += b.length;
                  } else Z += this.idToNodeMap.get(R[d2]).displacementX, tt2++;
                  for (var _ = Z / tt2, d2 = 0; d2 < R.length; d2++) this.dummyToNodeForVerticalAlignment.has(R[d2]) ? this.dummyToNodeForVerticalAlignment.get(R[d2]).forEach(function(U) {
                    s2.idToNodeMap.get(U).displacementX = _;
                  }) : this.idToNodeMap.get(R[d2]).displacementX = _;
                }
              }
              for (var g = 0; g < this.componentsOnVertical.length; g++) {
                var R = this.componentsOnVertical[g];
                if (this.fixedComponentsOnVertical[g]) for (var d2 = 0; d2 < R.length; d2++) this.dummyToNodeForHorizontalAlignment.has(R[d2]) ? this.dummyToNodeForHorizontalAlignment.get(R[d2]).forEach(function(H) {
                  s2.idToNodeMap.get(H).displacementY = 0;
                }) : this.idToNodeMap.get(R[d2]).displacementY = 0;
                else {
                  for (var Z = 0, tt2 = 0, d2 = 0; d2 < R.length; d2++) if (this.dummyToNodeForHorizontalAlignment.has(R[d2])) {
                    var b = /* @__PURE__ */ this.dummyToNodeForHorizontalAlignment.get(R[d2]);
                    Z += b.length * this.idToNodeMap.get(b[0]).displacementY, tt2 += b.length;
                  } else Z += this.idToNodeMap.get(R[d2]).displacementY, tt2++;
                  for (var _ = Z / tt2, d2 = 0; d2 < R.length; d2++) this.dummyToNodeForHorizontalAlignment.has(R[d2]) ? this.dummyToNodeForHorizontalAlignment.get(R[d2]).forEach(function(Lt) {
                    s2.idToNodeMap.get(Lt).displacementY = _;
                  }) : this.idToNodeMap.get(R[d2]).displacementY = _;
                }
              }
            }
          }, I.prototype.calculateNodesToApplyGravitationTo = function() {
            var s2 = [], m, g = /* @__PURE__ */ this.graphManager.getGraphs(), T = g.length, d2;
            for (d2 = 0; d2 < T; d2++) m = g[d2], m.updateConnected(), m.isConnected || (s2 = /* @__PURE__ */ s2.concat(/* @__PURE__ */ m.getNodes()));
            return s2;
          }, I.prototype.createBendpoints = function() {
            var s2 = [];
            s2 = /* @__PURE__ */ s2.concat(/* @__PURE__ */ this.graphManager.getAllEdges());
            var m = /* @__PURE__ */ new Set(), g;
            for (g = 0; g < s2.length; g++) {
              var T = s2[g];
              if (!m.has(T)) {
                var d2 = /* @__PURE__ */ T.getSource(), O = /* @__PURE__ */ T.getTarget();
                if (d2 == O) T.getBendpoints().push(new y()), T.getBendpoints().push(new y()), this.createDummyNodesForBendpoints(T), m.add(T);
                else {
                  var x = [];
                  if (x = /* @__PURE__ */ x.concat(/* @__PURE__ */ d2.getEdgeListToNode(O)), x = /* @__PURE__ */ x.concat(/* @__PURE__ */ O.getEdgeListToNode(d2)), !m.has(x[0])) {
                    if (x.length > 1) {
                      var P;
                      for (P = 0; P < x.length; P++) {
                        var S = x[P];
                        S.getBendpoints().push(new y()), this.createDummyNodesForBendpoints(S);
                      }
                    }
                    x.forEach(function(R) {
                      m.add(R);
                    });
                  }
                }
              }
              if (m.size == s2.length) break;
            }
          }, I.prototype.positionNodesRadially = function(s2) {
            for (var m = new v(0, 0), g = /* @__PURE__ */ Math.ceil(/* @__PURE__ */ Math.sqrt(s2.length)), T = 0, d2 = 0, O = 0, x = new y(0, 0), P = 0; P < s2.length; P++) {
              P % g == 0 && (O = 0, d2 = T, P != 0 && (d2 += h.DEFAULT_COMPONENT_SEPERATION), T = 0);
              var S = s2[P], R = /* @__PURE__ */ F.findCenterOfTree(S);
              m.x = O, m.y = d2, x = /* @__PURE__ */ I.radialLayout(S, R, m), x.y > T && (T = /* @__PURE__ */ Math.floor(x.y)), O = /* @__PURE__ */ Math.floor(x.x + h.DEFAULT_COMPONENT_SEPERATION);
            }
            this.transform(new y(A.WORLD_CENTER_X - x.x / 2, A.WORLD_CENTER_Y - x.y / 2));
          }, I.radialLayout = function(s2, m, g) {
            var T = /* @__PURE__ */ Math.max(/* @__PURE__ */ this.maxDiagonalInTree(s2), h.DEFAULT_RADIAL_SEPARATION);
            I.branchRadialLayout(m, null, 0, 359, 0, T);
            var d2 = /* @__PURE__ */ z.calculateBounds(s2), O = new X();
            O.setDeviceOrgX(/* @__PURE__ */ d2.getMinX()), O.setDeviceOrgY(/* @__PURE__ */ d2.getMinY()), O.setWorldOrgX(g.x), O.setWorldOrgY(g.y);
            for (var x = 0; x < s2.length; x++) {
              var P = s2[x];
              P.transform(O);
            }
            var S = new y(d2.getMaxX(), d2.getMaxY());
            return O.inverseTransformPoint(S);
          }, I.branchRadialLayout = function(s2, m, g, T, d2, O) {
            var x = (T - g + 1) / 2;
            x < 0 && (x += 180);
            var P = (x + g) % 360, S = P * G.TWO_PI / 360, Z = d2 * Math.cos(S), tt2 = d2 * Math.sin(S);
            s2.setCenter(Z, tt2);
            var b = [];
            b = /* @__PURE__ */ b.concat(/* @__PURE__ */ s2.getEdges());
            var _ = b.length;
            m != null && _--;
            for (var B = 0, M = b.length, U, H = /* @__PURE__ */ s2.getEdgesBetween(m); H.length > 1; ) {
              var K = H[0];
              H.splice(0, 1);
              var ht = /* @__PURE__ */ b.indexOf(K);
              ht >= 0 && b.splice(ht, 1), M--, _--;
            }
            m != null ? U = (b.indexOf(H[0]) + 1) % M : U = 0;
            for (var Lt = Math.abs(T - g) / _, bt = U; B != _; bt = ++bt % M) {
              var Q = /* @__PURE__ */ b[bt].getOtherEnd(s2);
              if (Q != m) {
                var Xt = (g + B * Lt) % 360, wt = (Xt + Lt) % 360;
                I.branchRadialLayout(Q, s2, Xt, wt, d2 + O, O), B++;
              }
            }
          }, I.maxDiagonalInTree = function(s2) {
            for (var m = C.MIN_VALUE, g = 0; g < s2.length; g++) {
              var T = s2[g], d2 = /* @__PURE__ */ T.getDiagonal();
              d2 > m && (m = d2);
            }
            return m;
          }, I.prototype.calcRepulsionRange = function() {
            return 2 * (this.level + 1) * this.idealEdgeLength;
          }, I.prototype.groupZeroDegreeMembers = function() {
            var s2 = this, m = {};
            this.memberGroups = {}, this.idToDummyNode = {};
            for (var g = [], T = /* @__PURE__ */ this.graphManager.getAllNodes(), d2 = 0; d2 < T.length; d2++) {
              var O = T[d2], x = /* @__PURE__ */ O.getParent();
              this.getNodeDegreeWithChildren(O) === 0 && (x.id == null || !this.getToBeTiled(x)) && g.push(O);
            }
            for (var d2 = 0; d2 < g.length; d2++) {
              var O = g[d2], P = O.getParent().id;
              typeof m[P] > "u" && (m[P] = []), m[P] = /* @__PURE__ */ m[P].concat(O);
            }
            Object.keys(m).forEach(function(S) {
              if (m[S].length > 1) {
                var R = "DummyCompound_" + S;
                s2.memberGroups[R] = m[S];
                var Z = /* @__PURE__ */ m[S][0].getParent(), tt2 = new i(s2.graphManager);
                tt2.id = R, tt2.paddingLeft = Z.paddingLeft || 0, tt2.paddingRight = Z.paddingRight || 0, tt2.paddingBottom = Z.paddingBottom || 0, tt2.paddingTop = Z.paddingTop || 0, s2.idToDummyNode[R] = tt2;
                var b = /* @__PURE__ */ s2.getGraphManager().add(/* @__PURE__ */ s2.newGraph(), tt2), _ = /* @__PURE__ */ Z.getChild();
                _.add(tt2);
                for (var B = 0; B < m[S].length; B++) {
                  var M = m[S][B];
                  _.remove(M), b.add(M);
                }
              }
            });
          }, I.prototype.clearCompounds = function() {
            var s2 = {}, m = {};
            this.performDFSOnCompounds();
            for (var g = 0; g < this.compoundOrder.length; g++) m[this.compoundOrder[g].id] = this.compoundOrder[g], s2[this.compoundOrder[g].id] = /* @__PURE__ */ [].concat(/* @__PURE__ */ this.compoundOrder[g].getChild().getNodes()), this.graphManager.remove(/* @__PURE__ */ this.compoundOrder[g].getChild()), this.compoundOrder[g].child = null;
            this.graphManager.resetAllNodes(), this.tileCompoundMembers(s2, m);
          }, I.prototype.clearZeroDegreeMembers = function() {
            var s2 = this, m = this.tiledZeroDegreePack = [];
            Object.keys(this.memberGroups).forEach(function(g) {
              var T = s2.idToDummyNode[g];
              if (m[g] = /* @__PURE__ */ s2.tileNodes(s2.memberGroups[g], T.paddingLeft + T.paddingRight), T.rect.width = m[g].width, T.rect.height = m[g].height, T.setCenter(m[g].centerX, m[g].centerY), T.labelMarginLeft = 0, T.labelMarginTop = 0, h.NODE_DIMENSIONS_INCLUDE_LABELS) {
                var d2 = T.rect.width, O = T.rect.height;
                T.labelWidth && (T.labelPosHorizontal == "left" ? (T.rect.x -= T.labelWidth, T.setWidth(d2 + T.labelWidth), T.labelMarginLeft = T.labelWidth) : T.labelPosHorizontal == "center" && T.labelWidth > d2 ? (T.rect.x -= (T.labelWidth - d2) / 2, T.setWidth(T.labelWidth), T.labelMarginLeft = (T.labelWidth - d2) / 2) : T.labelPosHorizontal == "right" && T.setWidth(d2 + T.labelWidth)), T.labelHeight && (T.labelPosVertical == "top" ? (T.rect.y -= T.labelHeight, T.setHeight(O + T.labelHeight), T.labelMarginTop = T.labelHeight) : T.labelPosVertical == "center" && T.labelHeight > O ? (T.rect.y -= (T.labelHeight - O) / 2, T.setHeight(T.labelHeight), T.labelMarginTop = (T.labelHeight - O) / 2) : T.labelPosVertical == "bottom" && T.setHeight(O + T.labelHeight));
              }
            });
          }, I.prototype.repopulateCompounds = function() {
            for (var s2 = this.compoundOrder.length - 1; s2 >= 0; s2--) {
              var m = this.compoundOrder[s2], g = m.id, T = m.paddingLeft, d2 = m.paddingTop, O = m.labelMarginLeft, x = m.labelMarginTop;
              this.adjustLocations(this.tiledMemberPack[g], m.rect.x, m.rect.y, T, d2, O, x);
            }
          }, I.prototype.repopulateZeroDegreeMembers = function() {
            var s2 = this, m = this.tiledZeroDegreePack;
            Object.keys(m).forEach(function(g) {
              var T = s2.idToDummyNode[g], d2 = T.paddingLeft, O = T.paddingTop, x = T.labelMarginLeft, P = T.labelMarginTop;
              s2.adjustLocations(m[g], T.rect.x, T.rect.y, d2, O, x, P);
            });
          }, I.prototype.getToBeTiled = function(s2) {
            var m = s2.id;
            if (this.toBeTiled[m] != null) return this.toBeTiled[m];
            var g = /* @__PURE__ */ s2.getChild();
            if (g == null) return this.toBeTiled[m] = false, false;
            for (var T = /* @__PURE__ */ g.getNodes(), d2 = 0; d2 < T.length; d2++) {
              var O = T[d2];
              if (this.getNodeDegree(O) > 0) return this.toBeTiled[m] = false, false;
              if (O.getChild() == null) {
                this.toBeTiled[O.id] = false;
                continue;
              }
              if (!this.getToBeTiled(O)) return this.toBeTiled[m] = false, false;
            }
            return this.toBeTiled[m] = true, true;
          }, I.prototype.getNodeDegree = function(s2) {
            for (var m = s2.id, g = /* @__PURE__ */ s2.getEdges(), T = 0, d2 = 0; d2 < g.length; d2++) {
              var O = g[d2];
              O.getSource().id !== O.getTarget().id && (T = T + 1);
            }
            return T;
          }, I.prototype.getNodeDegreeWithChildren = function(s2) {
            var m = /* @__PURE__ */ this.getNodeDegree(s2);
            if (s2.getChild() == null) return m;
            for (var g = /* @__PURE__ */ s2.getChild().getNodes(), T = 0; T < g.length; T++) {
              var d2 = g[T];
              m += /* @__PURE__ */ this.getNodeDegreeWithChildren(d2);
            }
            return m;
          }, I.prototype.performDFSOnCompounds = function() {
            this.compoundOrder = [], this.fillCompexOrderByDFS(/* @__PURE__ */ this.graphManager.getRoot().getNodes());
          }, I.prototype.fillCompexOrderByDFS = function(s2) {
            for (var m = 0; m < s2.length; m++) {
              var g = s2[m];
              g.getChild() != null && this.fillCompexOrderByDFS(/* @__PURE__ */ g.getChild().getNodes()), this.getToBeTiled(g) && this.compoundOrder.push(g);
            }
          }, I.prototype.adjustLocations = function(s2, m, g, T, d2, O, x) {
            m += T + O, g += d2 + x;
            for (var P = m, S = 0; S < s2.rows.length; S++) {
              var R = s2.rows[S];
              m = P;
              for (var Z = 0, tt2 = 0; tt2 < R.length; tt2++) {
                var b = R[tt2];
                b.rect.x = m, b.rect.y = g, m += b.rect.width + s2.horizontalPadding, b.rect.height > Z && (Z = b.rect.height);
              }
              g += Z + s2.verticalPadding;
            }
          }, I.prototype.tileCompoundMembers = function(s2, m) {
            var g = this;
            this.tiledMemberPack = [], Object.keys(s2).forEach(function(T) {
              var d2 = m[T];
              if (g.tiledMemberPack[T] = /* @__PURE__ */ g.tileNodes(s2[T], d2.paddingLeft + d2.paddingRight), d2.rect.width = g.tiledMemberPack[T].width, d2.rect.height = g.tiledMemberPack[T].height, d2.setCenter(g.tiledMemberPack[T].centerX, g.tiledMemberPack[T].centerY), d2.labelMarginLeft = 0, d2.labelMarginTop = 0, h.NODE_DIMENSIONS_INCLUDE_LABELS) {
                var O = d2.rect.width, x = d2.rect.height;
                d2.labelWidth && (d2.labelPosHorizontal == "left" ? (d2.rect.x -= d2.labelWidth, d2.setWidth(O + d2.labelWidth), d2.labelMarginLeft = d2.labelWidth) : d2.labelPosHorizontal == "center" && d2.labelWidth > O ? (d2.rect.x -= (d2.labelWidth - O) / 2, d2.setWidth(d2.labelWidth), d2.labelMarginLeft = (d2.labelWidth - O) / 2) : d2.labelPosHorizontal == "right" && d2.setWidth(O + d2.labelWidth)), d2.labelHeight && (d2.labelPosVertical == "top" ? (d2.rect.y -= d2.labelHeight, d2.setHeight(x + d2.labelHeight), d2.labelMarginTop = d2.labelHeight) : d2.labelPosVertical == "center" && d2.labelHeight > x ? (d2.rect.y -= (d2.labelHeight - x) / 2, d2.setHeight(d2.labelHeight), d2.labelMarginTop = (d2.labelHeight - x) / 2) : d2.labelPosVertical == "bottom" && d2.setHeight(x + d2.labelHeight));
              }
            });
          }, I.prototype.tileNodes = function(s2, m) {
            var g = /* @__PURE__ */ this.tileNodesByFavoringDim(s2, m, true), T = /* @__PURE__ */ this.tileNodesByFavoringDim(s2, m, false), d2 = /* @__PURE__ */ this.getOrgRatio(g), O = /* @__PURE__ */ this.getOrgRatio(T), x;
            return O < d2 ? x = T : x = g, x;
          }, I.prototype.getOrgRatio = function(s2) {
            var m = s2.width, g = s2.height, T = m / g;
            return T < 1 && (T = 1 / T), T;
          }, I.prototype.calcIdealRowWidth = function(s2, m) {
            var g = h.TILING_PADDING_VERTICAL, T = h.TILING_PADDING_HORIZONTAL, d2 = s2.length, O = 0, x = 0, P = 0;
            s2.forEach(function(B) {
              O += /* @__PURE__ */ B.getWidth(), x += /* @__PURE__ */ B.getHeight(), B.getWidth() > P && (P = /* @__PURE__ */ B.getWidth());
            });
            var S = O / d2, R = x / d2, Z = Math.pow(g - T, 2) + 4 * (S + T) * (R + g) * d2, tt2 = (T - g + Math.sqrt(Z)) / (2 * (S + T)), b;
            m ? (b = /* @__PURE__ */ Math.ceil(tt2), b == tt2 && b++) : b = /* @__PURE__ */ Math.floor(tt2);
            var _ = b * (S + T) - T;
            return P > _ && (_ = P), _ += T * 2, _;
          }, I.prototype.tileNodesByFavoringDim = function(s2, m, g) {
            var T = h.TILING_PADDING_VERTICAL, d2 = h.TILING_PADDING_HORIZONTAL, O = h.TILING_COMPARE_BY, x = {
              rows: [],
              rowWidth: [],
              rowHeight: [],
              width: 0,
              height: m,
              verticalPadding: T,
              horizontalPadding: d2,
              centerX: 0,
              centerY: 0
            };
            O && (x.idealRowWidth = /* @__PURE__ */ this.calcIdealRowWidth(s2, g));
            var P = /* @__PURE__ */ m$1(function(M) {
              return M.rect.width * M.rect.height;
            }, "getNodeArea"), S = /* @__PURE__ */ m$1(function(M, U) {
              return P(U) - P(M);
            }, "areaCompareFcn");
            s2.sort(function(B, M) {
              var U = S;
              return x.idealRowWidth ? (U = O, U(B.id, M.id)) : U(B, M);
            });
            for (var R = 0, Z = 0, tt2 = 0; tt2 < s2.length; tt2++) {
              var b = s2[tt2];
              R += /* @__PURE__ */ b.getCenterX(), Z += /* @__PURE__ */ b.getCenterY();
            }
            x.centerX = R / s2.length, x.centerY = Z / s2.length;
            for (var tt2 = 0; tt2 < s2.length; tt2++) {
              var b = s2[tt2];
              if (x.rows.length == 0) this.insertNodeToRow(x, b, 0, m);
              else if (this.canAddHorizontal(x, b.rect.width, b.rect.height)) {
                var _ = x.rows.length - 1;
                x.idealRowWidth || (_ = /* @__PURE__ */ this.getShortestRowIndex(x)), this.insertNodeToRow(x, b, _, m);
              } else this.insertNodeToRow(x, b, x.rows.length, m);
              this.shiftToLastRow(x);
            }
            return x;
          }, I.prototype.insertNodeToRow = function(s2, m, g, T) {
            var d2 = T;
            if (g == s2.rows.length) {
              var O = [];
              s2.rows.push(O), s2.rowWidth.push(d2), s2.rowHeight.push(0);
            }
            var x = s2.rowWidth[g] + m.rect.width;
            s2.rows[g].length > 0 && (x += s2.horizontalPadding), s2.rowWidth[g] = x, s2.width < x && (s2.width = x);
            var P = m.rect.height;
            g > 0 && (P += s2.verticalPadding);
            var S = 0;
            P > s2.rowHeight[g] && (S = s2.rowHeight[g], s2.rowHeight[g] = P, S = s2.rowHeight[g] - S), s2.height += S, s2.rows[g].push(m);
          }, I.prototype.getShortestRowIndex = function(s2) {
            for (var m = -1, g = Number.MAX_VALUE, T = 0; T < s2.rows.length; T++) s2.rowWidth[T] < g && (m = T, g = s2.rowWidth[T]);
            return m;
          }, I.prototype.getLongestRowIndex = function(s2) {
            for (var m = -1, g = Number.MIN_VALUE, T = 0; T < s2.rows.length; T++) s2.rowWidth[T] > g && (m = T, g = s2.rowWidth[T]);
            return m;
          }, I.prototype.canAddHorizontal = function(s2, m, g) {
            if (s2.idealRowWidth) {
              var T = s2.rows.length - 1, d2 = s2.rowWidth[T];
              return d2 + m + s2.horizontalPadding <= s2.idealRowWidth;
            }
            var O = /* @__PURE__ */ this.getShortestRowIndex(s2);
            if (O < 0) return true;
            var x = s2.rowWidth[O];
            if (x + s2.horizontalPadding + m <= s2.width) return true;
            var P = 0;
            s2.rowHeight[O] < g && O > 0 && (P = g + s2.verticalPadding - s2.rowHeight[O]);
            var S;
            s2.width - x >= m + s2.horizontalPadding ? S = (s2.height + P) / (x + m + s2.horizontalPadding) : S = (s2.height + P) / s2.width, P = g + s2.verticalPadding;
            var R;
            return s2.width < m ? R = (s2.height + P) / m : R = (s2.height + P) / s2.width, R < 1 && (R = 1 / R), S < 1 && (S = 1 / S), S < R;
          }, I.prototype.shiftToLastRow = function(s2) {
            var m = /* @__PURE__ */ this.getLongestRowIndex(s2), g = s2.rowWidth.length - 1, T = s2.rows[m], d2 = T[T.length - 1], O = d2.width + s2.horizontalPadding;
            if (s2.width - s2.rowWidth[g] > O && m != g) {
              T.splice(-1, 1), s2.rows[g].push(d2), s2.rowWidth[m] = s2.rowWidth[m] - O, s2.rowWidth[g] = s2.rowWidth[g] + O, s2.width = s2.rowWidth[instance.getLongestRowIndex(s2)];
              for (var x = Number.MIN_VALUE, P = 0; P < T.length; P++) T[P].height > x && (x = T[P].height);
              m > 0 && (x += s2.verticalPadding);
              var S = s2.rowHeight[m] + s2.rowHeight[g];
              s2.rowHeight[m] = x, s2.rowHeight[g] < d2.height + s2.verticalPadding && (s2.rowHeight[g] = d2.height + s2.verticalPadding);
              var R = s2.rowHeight[m] + s2.rowHeight[g];
              s2.height += R - S, this.shiftToLastRow(s2);
            }
          }, I.prototype.tilingPreLayout = function() {
            h.TILE && (this.groupZeroDegreeMembers(), this.clearCompounds(), this.clearZeroDegreeMembers());
          }, I.prototype.tilingPostLayout = function() {
            h.TILE && (this.repopulateZeroDegreeMembers(), this.repopulateCompounds());
          }, I.prototype.reduceTrees = function() {
            for (var s2 = [], m = true, g; m; ) {
              var T = /* @__PURE__ */ this.graphManager.getAllNodes(), d2 = [];
              m = false;
              for (var O = 0; O < T.length; O++) if (g = T[O], g.getEdges().length == 1 && !g.getEdges()[0].isInterGraph && g.getChild() == null) {
                if (h.PURE_INCREMENTAL) {
                  var x = /* @__PURE__ */ g.getEdges()[0].getOtherEnd(g), P = new D(g.getCenterX() - x.getCenterX(), g.getCenterY() - x.getCenterY());
                  d2.push([
                    g,
                    g.getEdges()[0],
                    /* @__PURE__ */ g.getOwner(),
                    P
                  ]);
                } else d2.push([
                  g,
                  g.getEdges()[0],
                  /* @__PURE__ */ g.getOwner()
                ]);
                m = true;
              }
              if (m == true) {
                for (var S = [], R = 0; R < d2.length; R++) d2[R][0].getEdges().length == 1 && (S.push(d2[R]), d2[R][0].getOwner().remove(d2[R][0]));
                s2.push(S), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
              }
            }
            this.prunedNodesAll = s2;
          }, I.prototype.growTree = function(s2) {
            for (var m = s2.length, g = s2[m - 1], T, d2 = 0; d2 < g.length; d2++) T = g[d2], this.findPlaceforPrunedNode(T), T[2].add(T[0]), T[2].add(T[1], T[1].source, T[1].target);
            s2.splice(s2.length - 1, 1), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
          }, I.prototype.findPlaceforPrunedNode = function(s2) {
            var m, g, T = s2[0];
            if (T == s2[1].source ? g = s2[1].target : g = s2[1].source, h.PURE_INCREMENTAL) T.setCenter(g.getCenterX() + s2[3].getWidth(), g.getCenterY() + s2[3].getHeight());
            else {
              var d2 = g.startX, O = g.finishX, x = g.startY, P = g.finishY, S = 0, R = 0, Z = 0, tt2 = 0, b = [
                S,
                Z,
                R,
                tt2
              ];
              if (x > 0) for (var _ = d2; _ <= O; _++) b[0] += this.grid[_][x - 1].length + this.grid[_][x].length - 1;
              if (O < this.grid.length - 1) for (var _ = x; _ <= P; _++) b[1] += this.grid[O + 1][_].length + this.grid[O][_].length - 1;
              if (P < this.grid[0].length - 1) for (var _ = d2; _ <= O; _++) b[2] += this.grid[_][P + 1].length + this.grid[_][P].length - 1;
              if (d2 > 0) for (var _ = x; _ <= P; _++) b[3] += this.grid[d2 - 1][_].length + this.grid[d2][_].length - 1;
              for (var B = C.MAX_VALUE, M, U, H = 0; H < b.length; H++) b[H] < B ? (B = b[H], M = 1, U = H) : b[H] == B && M++;
              if (M == 3 && B == 0) b[0] == 0 && b[1] == 0 && b[2] == 0 ? m = 1 : b[0] == 0 && b[1] == 0 && b[3] == 0 ? m = 0 : b[0] == 0 && b[2] == 0 && b[3] == 0 ? m = 3 : b[1] == 0 && b[2] == 0 && b[3] == 0 && (m = 2);
              else if (M == 2 && B == 0) {
                var K = /* @__PURE__ */ Math.floor(Math.random() * 2);
                b[0] == 0 && b[1] == 0 ? K == 0 ? m = 0 : m = 1 : b[0] == 0 && b[2] == 0 ? K == 0 ? m = 0 : m = 2 : b[0] == 0 && b[3] == 0 ? K == 0 ? m = 0 : m = 3 : b[1] == 0 && b[2] == 0 ? K == 0 ? m = 1 : m = 2 : b[1] == 0 && b[3] == 0 ? K == 0 ? m = 1 : m = 3 : K == 0 ? m = 2 : m = 3;
              } else if (M == 4 && B == 0) {
                var K = /* @__PURE__ */ Math.floor(Math.random() * 4);
                m = K;
              } else m = U;
              m == 0 ? T.setCenter(/* @__PURE__ */ g.getCenterX(), g.getCenterY() - g.getHeight() / 2 - l.DEFAULT_EDGE_LENGTH - T.getHeight() / 2) : m == 1 ? T.setCenter(g.getCenterX() + g.getWidth() / 2 + l.DEFAULT_EDGE_LENGTH + T.getWidth() / 2, /* @__PURE__ */ g.getCenterY()) : m == 2 ? T.setCenter(/* @__PURE__ */ g.getCenterX(), g.getCenterY() + g.getHeight() / 2 + l.DEFAULT_EDGE_LENGTH + T.getHeight() / 2) : T.setCenter(g.getCenterX() - g.getWidth() / 2 - l.DEFAULT_EDGE_LENGTH - T.getWidth() / 2, /* @__PURE__ */ g.getCenterY());
            }
          }, a.exports = I;
        },
        991: (a, t, n2) => {
          var c2 = n2(551).FDLayoutNode, e = n2(551).IMath;
          function p2(r, h, f, l) {
            c2.call(this, r, h, f, l);
          }
          m$1(p2, "CoSENode"), p2.prototype = /* @__PURE__ */ Object.create(c2.prototype);
          for (var i in c2) p2[i] = c2[i];
          p2.prototype.calculateDisplacement = function() {
            var r = /* @__PURE__ */ this.graphManager.getLayout();
            this.getChild() != null && this.fixedNodeWeight ? (this.displacementX += r.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.fixedNodeWeight, this.displacementY += r.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.fixedNodeWeight) : (this.displacementX += r.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.noOfChildren, this.displacementY += r.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.noOfChildren), Math.abs(this.displacementX) > r.coolingFactor * r.maxNodeDisplacement && (this.displacementX = r.coolingFactor * r.maxNodeDisplacement * e.sign(this.displacementX)), Math.abs(this.displacementY) > r.coolingFactor * r.maxNodeDisplacement && (this.displacementY = r.coolingFactor * r.maxNodeDisplacement * e.sign(this.displacementY)), this.child && this.child.getNodes().length > 0 && this.propogateDisplacementToChildren(this.displacementX, this.displacementY);
          }, p2.prototype.propogateDisplacementToChildren = function(r, h) {
            for (var f = /* @__PURE__ */ this.getChild().getNodes(), l, A = 0; A < f.length; A++) l = f[A], l.getChild() == null ? (l.displacementX += r, l.displacementY += h) : l.propogateDisplacementToChildren(r, h);
          }, p2.prototype.move = function() {
            var r = /* @__PURE__ */ this.graphManager.getLayout();
            (this.child == null || this.child.getNodes().length == 0) && (this.moveBy(this.displacementX, this.displacementY), r.totalDisplacement += Math.abs(this.displacementX) + Math.abs(this.displacementY)), this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0;
          }, p2.prototype.setPred1 = function(r) {
            this.pred1 = r;
          }, p2.prototype.getPred1 = function() {
            return pred1;
          }, p2.prototype.getPred2 = function() {
            return pred2;
          }, p2.prototype.setNext = function(r) {
            this.next = r;
          }, p2.prototype.getNext = function() {
            return next;
          }, p2.prototype.setProcessed = function(r) {
            this.processed = r;
          }, p2.prototype.isProcessed = function() {
            return processed;
          }, a.exports = p2;
        },
        902: (a, t, n2) => {
          function c2(f) {
            if (Array.isArray(f)) {
              for (var l = 0, A = /* @__PURE__ */ Array(f.length); l < f.length; l++) A[l] = f[l];
              return A;
            } else return Array.from(f);
          }
          m$1(c2, "_toConsumableArray");
          var e = /* @__PURE__ */ n2(806), p2 = n2(551).LinkedList, i = n2(551).Matrix, r = n2(551).SVD;
          function h() {
          }
          m$1(h, "ConstraintHandler"), h.handleConstraints = function(f) {
            var l = {};
            l.fixedNodeConstraint = f.constraints.fixedNodeConstraint, l.alignmentConstraint = f.constraints.alignmentConstraint, l.relativePlacementConstraint = f.constraints.relativePlacementConstraint;
            for (var A = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), y = [], D = [], F = /* @__PURE__ */ f.getAllNodes(), C = 0, G = 0; G < F.length; G++) {
              var z = F[G];
              z.getChild() == null && (v.set(z.id, C++), y.push(/* @__PURE__ */ z.getCenterX()), D.push(/* @__PURE__ */ z.getCenterY()), A.set(z.id, z));
            }
            l.relativePlacementConstraint && l.relativePlacementConstraint.forEach(function(Y) {
              !Y.gap && Y.gap != 0 && (Y.left ? Y.gap = e.DEFAULT_EDGE_LENGTH + A.get(Y.left).getWidth() / 2 + A.get(Y.right).getWidth() / 2 : Y.gap = e.DEFAULT_EDGE_LENGTH + A.get(Y.top).getHeight() / 2 + A.get(Y.bottom).getHeight() / 2);
            });
            var X = /* @__PURE__ */ m$1(function(W, V) {
              return {
                x: W.x - V.x,
                y: W.y - V.y
              };
            }, "calculatePositionDiff"), rt = /* @__PURE__ */ m$1(function(W) {
              var V = 0, $ = 0;
              return W.forEach(function(k) {
                V += y[v.get(k)], $ += D[v.get(k)];
              }), {
                x: V / W.size,
                y: $ / W.size
              };
            }, "calculateAvgPosition"), I = /* @__PURE__ */ m$1(function(W, V, $, k, j) {
              function gt(st, nt) {
                var dt = new Set(st), at = true, ct = false, Ft2 = void 0;
                try {
                  for (var Rt = /* @__PURE__ */ nt[Symbol.iterator](), Bt; !(at = (Bt = /* @__PURE__ */ Rt.next()).done); at = true) {
                    var Ot = Bt.value;
                    dt.add(Ot);
                  }
                } catch (Nt) {
                  ct = true, Ft2 = Nt;
                } finally {
                  try {
                    !at && Rt.return && Rt.return();
                  } finally {
                    if (ct) throw Ft2;
                  }
                }
                return dt;
              }
              m$1(gt, "setUnion");
              var ft = /* @__PURE__ */ new Map();
              W.forEach(function(st, nt) {
                ft.set(nt, 0);
              }), W.forEach(function(st, nt) {
                st.forEach(function(dt) {
                  ft.set(dt.id, ft.get(dt.id) + 1);
                });
              });
              var q2 = /* @__PURE__ */ new Map(), lt = /* @__PURE__ */ new Map(), ut = new p2();
              ft.forEach(function(st, nt) {
                st == 0 ? (ut.push(nt), $ || (V == "horizontal" ? q2.set(nt, v.has(nt) ? y[v.get(nt)] : k.get(nt)) : q2.set(nt, v.has(nt) ? D[v.get(nt)] : k.get(nt)))) : q2.set(nt, Number.NEGATIVE_INFINITY), $ && lt.set(nt, /* @__PURE__ */ new Set([
                  nt
                ]));
              }), $ && j.forEach(function(st) {
                var nt = [];
                if (st.forEach(function(ct) {
                  $.has(ct) && nt.push(ct);
                }), nt.length > 0) {
                  var dt = 0;
                  nt.forEach(function(ct) {
                    V == "horizontal" ? (q2.set(ct, v.has(ct) ? y[v.get(ct)] : k.get(ct)), dt += /* @__PURE__ */ q2.get(ct)) : (q2.set(ct, v.has(ct) ? D[v.get(ct)] : k.get(ct)), dt += /* @__PURE__ */ q2.get(ct));
                  }), dt = dt / nt.length, st.forEach(function(ct) {
                    $.has(ct) || q2.set(ct, dt);
                  });
                } else {
                  var at = 0;
                  st.forEach(function(ct) {
                    V == "horizontal" ? at += v.has(ct) ? y[v.get(ct)] : k.get(ct) : at += v.has(ct) ? D[v.get(ct)] : k.get(ct);
                  }), at = at / st.length, st.forEach(function(ct) {
                    q2.set(ct, at);
                  });
                }
              });
              for (var it = /* @__PURE__ */ m$1(function() {
                var nt = /* @__PURE__ */ ut.shift(), dt = /* @__PURE__ */ W.get(nt);
                dt.forEach(function(at) {
                  if (q2.get(at.id) < q2.get(nt) + at.gap) if ($ && $.has(at.id)) {
                    var ct = void 0;
                    if (V == "horizontal" ? ct = v.has(at.id) ? y[v.get(at.id)] : k.get(at.id) : ct = v.has(at.id) ? D[v.get(at.id)] : k.get(at.id), q2.set(at.id, ct), ct < q2.get(nt) + at.gap) {
                      var Ft2 = q2.get(nt) + at.gap - ct;
                      lt.get(nt).forEach(function(Rt) {
                        q2.set(Rt, q2.get(Rt) - Ft2);
                      });
                    }
                  } else q2.set(at.id, q2.get(nt) + at.gap);
                  ft.set(at.id, ft.get(at.id) - 1), ft.get(at.id) == 0 && ut.push(at.id), $ && lt.set(at.id, /* @__PURE__ */ gt(/* @__PURE__ */ lt.get(nt), /* @__PURE__ */ lt.get(at.id)));
                });
              }, "_loop"); ut.length != 0; ) it();
              if ($) {
                var pt = /* @__PURE__ */ new Set();
                W.forEach(function(st, nt) {
                  st.length == 0 && pt.add(nt);
                });
                var Ct = [];
                lt.forEach(function(st, nt) {
                  if (pt.has(nt)) {
                    var dt = false, at = true, ct = false, Ft2 = void 0;
                    try {
                      for (var Rt = /* @__PURE__ */ st[Symbol.iterator](), Bt; !(at = (Bt = /* @__PURE__ */ Rt.next()).done); at = true) {
                        var Ot = Bt.value;
                        $.has(Ot) && (dt = true);
                      }
                    } catch (St2) {
                      ct = true, Ft2 = St2;
                    } finally {
                      try {
                        !at && Rt.return && Rt.return();
                      } finally {
                        if (ct) throw Ft2;
                      }
                    }
                    if (!dt) {
                      var Nt = false, Zt2 = void 0;
                      Ct.forEach(function(St2, Wt) {
                        St2.has([].concat(/* @__PURE__ */ c2(st))[0]) && (Nt = true, Zt2 = Wt);
                      }), Nt ? st.forEach(function(St2) {
                        Ct[Zt2].add(St2);
                      }) : Ct.push(new Set(st));
                    }
                  }
                }), Ct.forEach(function(st, nt) {
                  var dt = Number.POSITIVE_INFINITY, at = Number.POSITIVE_INFINITY, ct = Number.NEGATIVE_INFINITY, Ft2 = Number.NEGATIVE_INFINITY, Rt = true, Bt = false, Ot = void 0;
                  try {
                    for (var Nt = /* @__PURE__ */ st[Symbol.iterator](), Zt2; !(Rt = (Zt2 = /* @__PURE__ */ Nt.next()).done); Rt = true) {
                      var St2 = Zt2.value, Wt = void 0;
                      V == "horizontal" ? Wt = v.has(St2) ? y[v.get(St2)] : k.get(St2) : Wt = v.has(St2) ? D[v.get(St2)] : k.get(St2);
                      var $t = /* @__PURE__ */ q2.get(St2);
                      Wt < dt && (dt = Wt), Wt > ct && (ct = Wt), $t < at && (at = $t), $t > Ft2 && (Ft2 = $t);
                    }
                  } catch (ne) {
                    Bt = true, Ot = ne;
                  } finally {
                    try {
                      !Rt && Nt.return && Nt.return();
                    } finally {
                      if (Bt) throw Ot;
                    }
                  }
                  var me = (dt + ct) / 2 - (at + Ft2) / 2, Kt = true, ee = false, re = void 0;
                  try {
                    for (var jt = /* @__PURE__ */ st[Symbol.iterator](), ue; !(Kt = (ue = /* @__PURE__ */ jt.next()).done); Kt = true) {
                      var ie = ue.value;
                      q2.set(ie, q2.get(ie) + me);
                    }
                  } catch (ne) {
                    ee = true, re = ne;
                  } finally {
                    try {
                      !Kt && jt.return && jt.return();
                    } finally {
                      if (ee) throw re;
                    }
                  }
                });
              }
              return q2;
            }, "findAppropriatePositionForRelativePlacement"), J = /* @__PURE__ */ m$1(function(W) {
              var V = 0, $ = 0, k = 0, j = 0;
              if (W.forEach(function(lt) {
                lt.left ? y[v.get(lt.left)] - y[v.get(lt.right)] >= 0 ? V++ : $++ : D[v.get(lt.top)] - D[v.get(lt.bottom)] >= 0 ? k++ : j++;
              }), V > $ && k > j) for (var gt = 0; gt < v.size; gt++) y[gt] = -1 * y[gt], D[gt] = -1 * D[gt];
              else if (V > $) for (var ft = 0; ft < v.size; ft++) y[ft] = -1 * y[ft];
              else if (k > j) for (var q2 = 0; q2 < v.size; q2++) D[q2] = -1 * D[q2];
            }, "applyReflectionForRelativePlacement"), s2 = /* @__PURE__ */ m$1(function(W) {
              var V = [], $ = new p2(), k = /* @__PURE__ */ new Set(), j = 0;
              return W.forEach(function(gt, ft) {
                if (!k.has(ft)) {
                  V[j] = [];
                  var q2 = ft;
                  for ($.push(q2), k.add(q2), V[j].push(q2); $.length != 0; ) {
                    q2 = /* @__PURE__ */ $.shift();
                    var lt = /* @__PURE__ */ W.get(q2);
                    lt.forEach(function(ut) {
                      k.has(ut.id) || ($.push(ut.id), k.add(ut.id), V[j].push(ut.id));
                    });
                  }
                  j++;
                }
              }), V;
            }, "findComponents"), m = /* @__PURE__ */ m$1(function(W) {
              var V = /* @__PURE__ */ new Map();
              return W.forEach(function($, k) {
                V.set(k, []);
              }), W.forEach(function($, k) {
                $.forEach(function(j) {
                  V.get(k).push(j), V.get(j.id).push({
                    id: k,
                    gap: j.gap,
                    direction: j.direction
                  });
                });
              }), V;
            }, "dagToUndirected"), g = /* @__PURE__ */ m$1(function(W) {
              var V = /* @__PURE__ */ new Map();
              return W.forEach(function($, k) {
                V.set(k, []);
              }), W.forEach(function($, k) {
                $.forEach(function(j) {
                  V.get(j.id).push({
                    id: k,
                    gap: j.gap,
                    direction: j.direction
                  });
                });
              }), V;
            }, "dagToReversed"), T = [], d2 = [], O = false, x = false, P = /* @__PURE__ */ new Set(), S = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), Z = [];
            if (l.fixedNodeConstraint && l.fixedNodeConstraint.forEach(function(Y) {
              P.add(Y.nodeId);
            }), l.relativePlacementConstraint && (l.relativePlacementConstraint.forEach(function(Y) {
              Y.left ? (S.has(Y.left) ? S.get(Y.left).push({
                id: Y.right,
                gap: Y.gap,
                direction: "horizontal"
              }) : S.set(Y.left, [
                {
                  id: Y.right,
                  gap: Y.gap,
                  direction: "horizontal"
                }
              ]), S.has(Y.right) || S.set(Y.right, [])) : (S.has(Y.top) ? S.get(Y.top).push({
                id: Y.bottom,
                gap: Y.gap,
                direction: "vertical"
              }) : S.set(Y.top, [
                {
                  id: Y.bottom,
                  gap: Y.gap,
                  direction: "vertical"
                }
              ]), S.has(Y.bottom) || S.set(Y.bottom, []));
            }), R = /* @__PURE__ */ m(S), Z = /* @__PURE__ */ s2(R)), e.TRANSFORM_ON_CONSTRAINT_HANDLING) {
              if (l.fixedNodeConstraint && l.fixedNodeConstraint.length > 1) l.fixedNodeConstraint.forEach(function(Y, W) {
                T[W] = [
                  Y.position.x,
                  Y.position.y
                ], d2[W] = [
                  y[v.get(Y.nodeId)],
                  D[v.get(Y.nodeId)]
                ];
              }), O = true;
              else if (l.alignmentConstraint) (function() {
                var Y = 0;
                if (l.alignmentConstraint.vertical) {
                  for (var W = l.alignmentConstraint.vertical, V = /* @__PURE__ */ m$1(function(q2) {
                    var lt = /* @__PURE__ */ new Set();
                    W[q2].forEach(function(pt) {
                      lt.add(pt);
                    });
                    var ut = new Set([].concat(/* @__PURE__ */ c2(lt)).filter(function(pt) {
                      return P.has(pt);
                    })), it = void 0;
                    ut.size > 0 ? it = y[v.get(ut.values().next().value)] : it = rt(lt).x, W[q2].forEach(function(pt) {
                      T[Y] = [
                        it,
                        D[v.get(pt)]
                      ], d2[Y] = [
                        y[v.get(pt)],
                        D[v.get(pt)]
                      ], Y++;
                    });
                  }, "_loop2"), $ = 0; $ < W.length; $++) V($);
                  O = true;
                }
                if (l.alignmentConstraint.horizontal) {
                  for (var k = l.alignmentConstraint.horizontal, j = /* @__PURE__ */ m$1(function(q2) {
                    var lt = /* @__PURE__ */ new Set();
                    k[q2].forEach(function(pt) {
                      lt.add(pt);
                    });
                    var ut = new Set([].concat(/* @__PURE__ */ c2(lt)).filter(function(pt) {
                      return P.has(pt);
                    })), it = void 0;
                    ut.size > 0 ? it = y[v.get(ut.values().next().value)] : it = rt(lt).y, k[q2].forEach(function(pt) {
                      T[Y] = [
                        y[v.get(pt)],
                        it
                      ], d2[Y] = [
                        y[v.get(pt)],
                        D[v.get(pt)]
                      ], Y++;
                    });
                  }, "_loop3"), gt = 0; gt < k.length; gt++) j(gt);
                  O = true;
                }
                l.relativePlacementConstraint && (x = true);
              })();
              else if (l.relativePlacementConstraint) {
                for (var tt2 = 0, b = 0, _ = 0; _ < Z.length; _++) Z[_].length > tt2 && (tt2 = Z[_].length, b = _);
                if (tt2 < R.size / 2) J(l.relativePlacementConstraint), O = false, x = false;
                else {
                  var B = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), U = [];
                  Z[b].forEach(function(Y) {
                    S.get(Y).forEach(function(W) {
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
                  var H = /* @__PURE__ */ I(B, "horizontal"), K = /* @__PURE__ */ I(M, "vertical");
                  Z[b].forEach(function(Y, W) {
                    d2[W] = [
                      y[v.get(Y)],
                      D[v.get(Y)]
                    ], T[W] = [], H.has(Y) ? T[W][0] = /* @__PURE__ */ H.get(Y) : T[W][0] = y[v.get(Y)], K.has(Y) ? T[W][1] = /* @__PURE__ */ K.get(Y) : T[W][1] = D[v.get(Y)];
                  }), O = true;
                }
              }
              if (O) {
                for (var ht = void 0, Lt = /* @__PURE__ */ i.transpose(T), bt = /* @__PURE__ */ i.transpose(d2), Q = 0; Q < Lt.length; Q++) Lt[Q] = /* @__PURE__ */ i.multGamma(Lt[Q]), bt[Q] = /* @__PURE__ */ i.multGamma(bt[Q]);
                var Xt = /* @__PURE__ */ i.multMat(Lt, /* @__PURE__ */ i.transpose(bt)), wt = /* @__PURE__ */ r.svd(Xt);
                ht = /* @__PURE__ */ i.multMat(wt.V, /* @__PURE__ */ i.transpose(wt.U));
                for (var ot = 0; ot < v.size; ot++) {
                  var et = [
                    y[ot],
                    D[ot]
                  ], yt2 = [
                    ht[0][0],
                    ht[1][0]
                  ], Et = [
                    ht[0][1],
                    ht[1][1]
                  ];
                  y[ot] = /* @__PURE__ */ i.dotProduct(et, yt2), D[ot] = /* @__PURE__ */ i.dotProduct(et, Et);
                }
                x && J(l.relativePlacementConstraint);
              }
            }
            if (e.ENFORCE_CONSTRAINTS) {
              if (l.fixedNodeConstraint && l.fixedNodeConstraint.length > 0) {
                var Dt = {
                  x: 0,
                  y: 0
                };
                l.fixedNodeConstraint.forEach(function(Y, W) {
                  var V = {
                    x: y[v.get(Y.nodeId)],
                    y: D[v.get(Y.nodeId)]
                  }, $ = Y.position, k = /* @__PURE__ */ X($, V);
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
                if (l.alignmentConstraint.vertical) for (var Tt = l.alignmentConstraint.vertical, At = /* @__PURE__ */ m$1(function(W) {
                  var V = /* @__PURE__ */ new Set();
                  Tt[W].forEach(function(j) {
                    V.add(j);
                  });
                  var $ = new Set([].concat(/* @__PURE__ */ c2(V)).filter(function(j) {
                    return P.has(j);
                  })), k = void 0;
                  $.size > 0 ? k = y[v.get($.values().next().value)] : k = rt(V).x, V.forEach(function(j) {
                    P.has(j) || (y[v.get(j)] = k);
                  });
                }, "_loop4"), xt = 0; xt < Tt.length; xt++) At(xt);
                if (l.alignmentConstraint.horizontal) for (var It = l.alignmentConstraint.horizontal, zt = /* @__PURE__ */ m$1(function(W) {
                  var V = /* @__PURE__ */ new Set();
                  It[W].forEach(function(j) {
                    V.add(j);
                  });
                  var $ = new Set([].concat(/* @__PURE__ */ c2(V)).filter(function(j) {
                    return P.has(j);
                  })), k = void 0;
                  $.size > 0 ? k = D[v.get($.values().next().value)] : k = rt(V).y, V.forEach(function(j) {
                    P.has(j) || (D[v.get(j)] = k);
                  });
                }, "_loop5"), Yt = 0; Yt < It.length; Yt++) zt(Yt);
              }
              l.relativePlacementConstraint && function() {
                var Y = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), gt = /* @__PURE__ */ new Set(), ft = /* @__PURE__ */ new Set();
                if (P.forEach(function(Ut) {
                  gt.add(Ut), ft.add(Ut);
                }), l.alignmentConstraint) {
                  if (l.alignmentConstraint.vertical) for (var q2 = l.alignmentConstraint.vertical, lt = /* @__PURE__ */ m$1(function(mt) {
                    V.set("dummy" + mt, []), q2[mt].forEach(function(Mt) {
                      Y.set(Mt, "dummy" + mt), V.get("dummy" + mt).push(Mt), P.has(Mt) && gt.add("dummy" + mt);
                    }), k.set("dummy" + mt, y[v.get(q2[mt][0])]);
                  }, "_loop6"), ut = 0; ut < q2.length; ut++) lt(ut);
                  if (l.alignmentConstraint.horizontal) for (var it = l.alignmentConstraint.horizontal, pt = /* @__PURE__ */ m$1(function(mt) {
                    $.set("dummy" + mt, []), it[mt].forEach(function(Mt) {
                      W.set(Mt, "dummy" + mt), $.get("dummy" + mt).push(Mt), P.has(Mt) && ft.add("dummy" + mt);
                    }), j.set("dummy" + mt, D[v.get(it[mt][0])]);
                  }, "_loop7"), Ct = 0; Ct < it.length; Ct++) pt(Ct);
                }
                var st = /* @__PURE__ */ new Map(), nt = /* @__PURE__ */ new Map(), dt = /* @__PURE__ */ m$1(function(mt) {
                  S.get(mt).forEach(function(Mt) {
                    var qt = void 0, kt = void 0;
                    Mt.direction == "horizontal" ? (qt = Y.get(mt) ? Y.get(mt) : mt, Y.get(Mt.id) ? kt = {
                      id: /* @__PURE__ */ Y.get(Mt.id),
                      gap: Mt.gap,
                      direction: Mt.direction
                    } : kt = Mt, st.has(qt) ? st.get(qt).push(kt) : st.set(qt, [
                      kt
                    ]), st.has(kt.id) || st.set(kt.id, [])) : (qt = W.get(mt) ? W.get(mt) : mt, W.get(Mt.id) ? kt = {
                      id: /* @__PURE__ */ W.get(Mt.id),
                      gap: Mt.gap,
                      direction: Mt.direction
                    } : kt = Mt, nt.has(qt) ? nt.get(qt).push(kt) : nt.set(qt, [
                      kt
                    ]), nt.has(kt.id) || nt.set(kt.id, []));
                  });
                }, "_loop8"), at = true, ct = false, Ft2 = void 0;
                try {
                  for (var Rt = /* @__PURE__ */ S.keys()[Symbol.iterator](), Bt; !(at = (Bt = /* @__PURE__ */ Rt.next()).done); at = true) {
                    var Ot = Bt.value;
                    dt(Ot);
                  }
                } catch (Ut) {
                  ct = true, Ft2 = Ut;
                } finally {
                  try {
                    !at && Rt.return && Rt.return();
                  } finally {
                    if (ct) throw Ft2;
                  }
                }
                var Nt = /* @__PURE__ */ m(st), Zt2 = /* @__PURE__ */ m(nt), St2 = /* @__PURE__ */ s2(Nt), Wt = /* @__PURE__ */ s2(Zt2), $t = /* @__PURE__ */ g(st), me = /* @__PURE__ */ g(nt), Kt = [], ee = [];
                St2.forEach(function(Ut, mt) {
                  Kt[mt] = [], Ut.forEach(function(Mt) {
                    $t.get(Mt).length == 0 && Kt[mt].push(Mt);
                  });
                }), Wt.forEach(function(Ut, mt) {
                  ee[mt] = [], Ut.forEach(function(Mt) {
                    me.get(Mt).length == 0 && ee[mt].push(Mt);
                  });
                });
                var re = /* @__PURE__ */ I(st, "horizontal", gt, k, Kt), jt = /* @__PURE__ */ I(nt, "vertical", ft, j, ee), ue = /* @__PURE__ */ m$1(function(mt) {
                  V.get(mt) ? V.get(mt).forEach(function(Mt) {
                    y[v.get(Mt)] = /* @__PURE__ */ re.get(mt);
                  }) : y[v.get(mt)] = /* @__PURE__ */ re.get(mt);
                }, "_loop9"), ie = true, ne = false, be = void 0;
                try {
                  for (var Ee = /* @__PURE__ */ re.keys()[Symbol.iterator](), Fe; !(ie = (Fe = /* @__PURE__ */ Ee.next()).done); ie = true) {
                    var Te = Fe.value;
                    ue(Te);
                  }
                } catch (Ut) {
                  ne = true, be = Ut;
                } finally {
                  try {
                    !ie && Ee.return && Ee.return();
                  } finally {
                    if (ne) throw be;
                  }
                }
                var vr = /* @__PURE__ */ m$1(function(mt) {
                  $.get(mt) ? $.get(mt).forEach(function(Mt) {
                    D[v.get(Mt)] = /* @__PURE__ */ jt.get(mt);
                  }) : D[v.get(mt)] = /* @__PURE__ */ jt.get(mt);
                }, "_loop10"), Ae = true, Pe = false, Ge = void 0;
                try {
                  for (var Ne = /* @__PURE__ */ jt.keys()[Symbol.iterator](), Ye; !(Ae = (Ye = /* @__PURE__ */ Ne.next()).done); Ae = true) {
                    var Te = Ye.value;
                    vr(Te);
                  }
                } catch (Ut) {
                  Pe = true, Ge = Ut;
                } finally {
                  try {
                    !Ae && Ne.return && Ne.return();
                  } finally {
                    if (Pe) throw Ge;
                  }
                }
              }();
            }
            for (var Ht = 0; Ht < F.length; Ht++) {
              var Pt = F[Ht];
              Pt.getChild() == null && Pt.setCenter(y[v.get(Pt.id)], D[v.get(Pt.id)]);
            }
          }, a.exports = h;
        },
        551: (a) => {
          a.exports = E;
        }
      }, N = {};
      function u(a) {
        var t = N[a];
        if (t !== void 0) return t.exports;
        var n2 = N[a] = {
          exports: {}
        };
        return w[a](n2, n2.exports, u), n2.exports;
      }
      m$1(u, "__webpack_require__");
      var o = /* @__PURE__ */ u(45);
      return o;
    })();
  });
});
var lr = /* @__PURE__ */ n((fe, Se) => {
  m$1(function(w, N) {
    typeof fe == "object" && typeof Se == "object" ? Se.exports = /* @__PURE__ */ N(/* @__PURE__ */ Ie()) : typeof define == "function" && define.amd ? define([
      "cose-base"
    ], N) : typeof fe == "object" ? fe.cytoscapeFcose = /* @__PURE__ */ N(/* @__PURE__ */ Ie()) : w.cytoscapeFcose = /* @__PURE__ */ N(w.coseBase);
  }, "webpackUniversalModuleDefinition")(fe, function(E) {
    return (() => {
      var w = {
        658: (a) => {
          a.exports = Object.assign != null ? Object.assign.bind(Object) : function(t) {
            for (var n2 = arguments.length, c2 = /* @__PURE__ */ Array(n2 > 1 ? n2 - 1 : 0), e = 1; e < n2; e++) c2[e - 1] = arguments[e];
            return c2.forEach(function(p2) {
              Object.keys(p2).forEach(function(i) {
                return t[i] = p2[i];
              });
            }), t;
          };
        },
        548: (a, t, n2) => {
          var c2 = /* @__PURE__ */ function() {
            function i(r, h) {
              var f = [], l = true, A = false, v = void 0;
              try {
                for (var y = /* @__PURE__ */ r[Symbol.iterator](), D; !(l = (D = /* @__PURE__ */ y.next()).done) && (f.push(D.value), !(h && f.length === h)); l = true) ;
              } catch (F) {
                A = true, v = F;
              } finally {
                try {
                  !l && y.return && y.return();
                } finally {
                  if (A) throw v;
                }
              }
              return f;
            }
            return m$1(i, "sliceIterator"), function(r, h) {
              if (Array.isArray(r)) return r;
              if (Symbol.iterator in Object(r)) return i(r, h);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), e = n2(140).layoutBase.LinkedList, p2 = {};
          p2.getTopMostNodes = function(i) {
            for (var r = {}, h = 0; h < i.length; h++) r[i[h].id()] = true;
            var f = /* @__PURE__ */ i.filter(function(l, A) {
              typeof l == "number" && (l = A);
              for (var v = l.parent()[0]; v != null; ) {
                if (r[v.id()]) return false;
                v = v.parent()[0];
              }
              return true;
            });
            return f;
          }, p2.connectComponents = function(i, r, h, f) {
            var l = new e(), A = /* @__PURE__ */ new Set(), v = [], y = void 0, D = void 0, F = void 0, C = false, G = 1, z = [], X = [], rt = /* @__PURE__ */ m$1(function() {
              var J = /* @__PURE__ */ i.collection();
              X.push(J);
              var s2 = h[0], m = /* @__PURE__ */ i.collection();
              m.merge(s2).merge(/* @__PURE__ */ s2.descendants().intersection(r)), v.push(s2), m.forEach(function(d2) {
                l.push(d2), A.add(d2), J.merge(d2);
              });
              for (var g = /* @__PURE__ */ m$1(function() {
                s2 = /* @__PURE__ */ l.shift();
                var O = /* @__PURE__ */ i.collection();
                s2.neighborhood().nodes().forEach(function(R) {
                  r.intersection(/* @__PURE__ */ s2.edgesWith(R)).length > 0 && O.merge(R);
                });
                for (var x = 0; x < O.length; x++) {
                  var P = O[x];
                  if (y = /* @__PURE__ */ h.intersection(/* @__PURE__ */ P.union(/* @__PURE__ */ P.ancestors())), y != null && !A.has(y[0])) {
                    var S = /* @__PURE__ */ y.union(/* @__PURE__ */ y.descendants());
                    S.forEach(function(R) {
                      l.push(R), A.add(R), J.merge(R), h.has(R) && v.push(R);
                    });
                  }
                }
              }, "_loop2"); l.length != 0; ) g();
              if (J.forEach(function(d2) {
                r.intersection(/* @__PURE__ */ d2.connectedEdges()).forEach(function(O) {
                  J.has(/* @__PURE__ */ O.source()) && J.has(/* @__PURE__ */ O.target()) && J.merge(O);
                });
              }), v.length == h.length && (C = true), !C || C && G > 1) {
                D = v[0], F = D.connectedEdges().length, v.forEach(function(d2) {
                  d2.connectedEdges().length < F && (F = d2.connectedEdges().length, D = d2);
                }), z.push(/* @__PURE__ */ D.id());
                var T = /* @__PURE__ */ i.collection();
                T.merge(v[0]), v.forEach(function(d2) {
                  T.merge(d2);
                }), v = [], h = /* @__PURE__ */ h.difference(T), G++;
              }
            }, "_loop");
            do
              rt();
            while (!C);
            return f && z.length > 0 && f.set("dummy" + (f.size + 1), z), X;
          }, p2.relocateComponent = function(i, r, h) {
            if (!h.fixedNodeConstraint) {
              var f = Number.POSITIVE_INFINITY, l = Number.NEGATIVE_INFINITY, A = Number.POSITIVE_INFINITY, v = Number.NEGATIVE_INFINITY;
              if (h.quality == "draft") {
                var y = true, D = false, F = void 0;
                try {
                  for (var C = /* @__PURE__ */ r.nodeIndexes[Symbol.iterator](), G; !(y = (G = /* @__PURE__ */ C.next()).done); y = true) {
                    var z = G.value, X = /* @__PURE__ */ c2(z, 2), rt = X[0], I = X[1], J = /* @__PURE__ */ h.cy.getElementById(rt);
                    if (J) {
                      var s2 = /* @__PURE__ */ J.boundingBox(), m = r.xCoords[I] - s2.w / 2, g = r.xCoords[I] + s2.w / 2, T = r.yCoords[I] - s2.h / 2, d2 = r.yCoords[I] + s2.h / 2;
                      m < f && (f = m), g > l && (l = g), T < A && (A = T), d2 > v && (v = d2);
                    }
                  }
                } catch (R) {
                  D = true, F = R;
                } finally {
                  try {
                    !y && C.return && C.return();
                  } finally {
                    if (D) throw F;
                  }
                }
                var O = i.x - (l + f) / 2, x = i.y - (v + A) / 2;
                r.xCoords = /* @__PURE__ */ r.xCoords.map(function(R) {
                  return R + O;
                }), r.yCoords = /* @__PURE__ */ r.yCoords.map(function(R) {
                  return R + x;
                });
              } else {
                Object.keys(r).forEach(function(R) {
                  var Z = r[R], tt2 = Z.getRect().x, b = Z.getRect().x + Z.getRect().width, _ = Z.getRect().y, B = Z.getRect().y + Z.getRect().height;
                  tt2 < f && (f = tt2), b > l && (l = b), _ < A && (A = _), B > v && (v = B);
                });
                var P = i.x - (l + f) / 2, S = i.y - (v + A) / 2;
                Object.keys(r).forEach(function(R) {
                  var Z = r[R];
                  Z.setCenter(Z.getCenterX() + P, Z.getCenterY() + S);
                });
              }
            }
          }, p2.calcBoundingBox = function(i, r, h, f) {
            for (var l = Number.MAX_SAFE_INTEGER, A = Number.MIN_SAFE_INTEGER, v = Number.MAX_SAFE_INTEGER, y = Number.MIN_SAFE_INTEGER, D = void 0, F = void 0, C = void 0, G = void 0, z = /* @__PURE__ */ i.descendants().not(":parent"), X = z.length, rt = 0; rt < X; rt++) {
              var I = z[rt];
              D = r[f.get(/* @__PURE__ */ I.id())] - I.width() / 2, F = r[f.get(/* @__PURE__ */ I.id())] + I.width() / 2, C = h[f.get(/* @__PURE__ */ I.id())] - I.height() / 2, G = h[f.get(/* @__PURE__ */ I.id())] + I.height() / 2, l > D && (l = D), A < F && (A = F), v > C && (v = C), y < G && (y = G);
            }
            var J = {};
            return J.topLeftX = l, J.topLeftY = v, J.width = A - l, J.height = y - v, J;
          }, p2.calcParentsWithoutChildren = function(i, r) {
            var h = /* @__PURE__ */ i.collection();
            return r.nodes(":parent").forEach(function(f) {
              var l = false;
              f.children().forEach(function(A) {
                A.css("display") != "none" && (l = true);
              }), l || h.merge(f);
            }), h;
          }, a.exports = p2;
        },
        816: (a, t, n2) => {
          var c2 = /* @__PURE__ */ n2(548), e = n2(140).CoSELayout, p2 = n2(140).CoSENode, i = n2(140).layoutBase.PointD, r = n2(140).layoutBase.DimensionD, h = n2(140).layoutBase.LayoutConstants, f = n2(140).layoutBase.FDLayoutConstants, l = n2(140).CoSEConstants, A = /* @__PURE__ */ m$1(function(y, D) {
            var F = y.cy, C = y.eles, G = /* @__PURE__ */ C.nodes(), z = /* @__PURE__ */ C.edges(), X = void 0, rt = void 0, I = void 0, J = {};
            y.randomize && (X = D.nodeIndexes, rt = D.xCoords, I = D.yCoords);
            var s2 = /* @__PURE__ */ m$1(function(R) {
              return typeof R == "function";
            }, "isFn"), m = /* @__PURE__ */ m$1(function(R, Z) {
              return s2(R) ? R(Z) : R;
            }, "optFn"), g = /* @__PURE__ */ c2.calcParentsWithoutChildren(F, C), T = /* @__PURE__ */ m$1(function S(R, Z, tt2, b) {
              for (var _ = Z.length, B = 0; B < _; B++) {
                var M = Z[B], U = null;
                M.intersection(g).length == 0 && (U = /* @__PURE__ */ M.children());
                var H = void 0, K = /* @__PURE__ */ M.layoutDimensions({
                  nodeDimensionsIncludeLabels: b.nodeDimensionsIncludeLabels
                });
                if (M.outerWidth() != null && M.outerHeight() != null) if (b.randomize) if (!M.isParent()) H = /* @__PURE__ */ R.add(new p2(tt2.graphManager, new i(rt[X.get(/* @__PURE__ */ M.id())] - K.w / 2, I[X.get(/* @__PURE__ */ M.id())] - K.h / 2), new r(parseFloat(K.w), parseFloat(K.h))));
                else {
                  var ht = /* @__PURE__ */ c2.calcBoundingBox(M, rt, I, X);
                  M.intersection(g).length == 0 ? H = /* @__PURE__ */ R.add(new p2(tt2.graphManager, new i(ht.topLeftX, ht.topLeftY), new r(ht.width, ht.height))) : H = /* @__PURE__ */ R.add(new p2(tt2.graphManager, new i(ht.topLeftX, ht.topLeftY), new r(parseFloat(K.w), parseFloat(K.h))));
                }
                else H = /* @__PURE__ */ R.add(new p2(tt2.graphManager, new i(M.position("x") - K.w / 2, M.position("y") - K.h / 2), new r(parseFloat(K.w), parseFloat(K.h))));
                else H = /* @__PURE__ */ R.add(new p2(this.graphManager));
                if (H.id = /* @__PURE__ */ M.data("id"), H.nodeRepulsion = /* @__PURE__ */ m(b.nodeRepulsion, M), H.paddingLeft = /* @__PURE__ */ parseInt(/* @__PURE__ */ M.css("padding")), H.paddingTop = /* @__PURE__ */ parseInt(/* @__PURE__ */ M.css("padding")), H.paddingRight = /* @__PURE__ */ parseInt(/* @__PURE__ */ M.css("padding")), H.paddingBottom = /* @__PURE__ */ parseInt(/* @__PURE__ */ M.css("padding")), b.nodeDimensionsIncludeLabels && (H.labelWidth = M.boundingBox({
                  includeLabels: true,
                  includeNodes: false,
                  includeOverlays: false
                }).w, H.labelHeight = M.boundingBox({
                  includeLabels: true,
                  includeNodes: false,
                  includeOverlays: false
                }).h, H.labelPosVertical = /* @__PURE__ */ M.css("text-valign"), H.labelPosHorizontal = /* @__PURE__ */ M.css("text-halign")), J[M.data("id")] = H, isNaN(H.rect.x) && (H.rect.x = 0), isNaN(H.rect.y) && (H.rect.y = 0), U != null && U.length > 0) {
                  var Lt = void 0;
                  Lt = /* @__PURE__ */ tt2.getGraphManager().add(/* @__PURE__ */ tt2.newGraph(), H), S(Lt, U, tt2, b);
                }
              }
            }, "processChildrenList"), d2 = /* @__PURE__ */ m$1(function(R, Z, tt2) {
              for (var b = 0, _ = 0, B = 0; B < tt2.length; B++) {
                var M = tt2[B], U = J[M.data("source")], H = J[M.data("target")];
                if (U && H && U !== H && U.getEdgesBetween(H).length == 0) {
                  var K = /* @__PURE__ */ Z.add(/* @__PURE__ */ R.newEdge(), U, H);
                  K.id = /* @__PURE__ */ M.id(), K.idealLength = /* @__PURE__ */ m(y.idealEdgeLength, M), K.edgeElasticity = /* @__PURE__ */ m(y.edgeElasticity, M), b += K.idealLength, _++;
                }
              }
              y.idealEdgeLength != null && (_ > 0 ? l.DEFAULT_EDGE_LENGTH = f.DEFAULT_EDGE_LENGTH = b / _ : s2(y.idealEdgeLength) ? l.DEFAULT_EDGE_LENGTH = f.DEFAULT_EDGE_LENGTH = 50 : l.DEFAULT_EDGE_LENGTH = f.DEFAULT_EDGE_LENGTH = y.idealEdgeLength, l.MIN_REPULSION_DIST = f.MIN_REPULSION_DIST = f.DEFAULT_EDGE_LENGTH / 10, l.DEFAULT_RADIAL_SEPARATION = f.DEFAULT_EDGE_LENGTH);
            }, "processEdges"), O = /* @__PURE__ */ m$1(function(R, Z) {
              Z.fixedNodeConstraint && (R.constraints.fixedNodeConstraint = Z.fixedNodeConstraint), Z.alignmentConstraint && (R.constraints.alignmentConstraint = Z.alignmentConstraint), Z.relativePlacementConstraint && (R.constraints.relativePlacementConstraint = Z.relativePlacementConstraint);
            }, "processConstraints");
            y.nestingFactor != null && (l.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = f.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = y.nestingFactor), y.gravity != null && (l.DEFAULT_GRAVITY_STRENGTH = f.DEFAULT_GRAVITY_STRENGTH = y.gravity), y.numIter != null && (l.MAX_ITERATIONS = f.MAX_ITERATIONS = y.numIter), y.gravityRange != null && (l.DEFAULT_GRAVITY_RANGE_FACTOR = f.DEFAULT_GRAVITY_RANGE_FACTOR = y.gravityRange), y.gravityCompound != null && (l.DEFAULT_COMPOUND_GRAVITY_STRENGTH = f.DEFAULT_COMPOUND_GRAVITY_STRENGTH = y.gravityCompound), y.gravityRangeCompound != null && (l.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = f.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = y.gravityRangeCompound), y.initialEnergyOnIncremental != null && (l.DEFAULT_COOLING_FACTOR_INCREMENTAL = f.DEFAULT_COOLING_FACTOR_INCREMENTAL = y.initialEnergyOnIncremental), y.tilingCompareBy != null && (l.TILING_COMPARE_BY = y.tilingCompareBy), y.quality == "proof" ? h.QUALITY = 2 : h.QUALITY = 0, l.NODE_DIMENSIONS_INCLUDE_LABELS = f.NODE_DIMENSIONS_INCLUDE_LABELS = h.NODE_DIMENSIONS_INCLUDE_LABELS = y.nodeDimensionsIncludeLabels, l.DEFAULT_INCREMENTAL = f.DEFAULT_INCREMENTAL = h.DEFAULT_INCREMENTAL = !y.randomize, l.ANIMATE = f.ANIMATE = h.ANIMATE = y.animate, l.TILE = y.tile, l.TILING_PADDING_VERTICAL = typeof y.tilingPaddingVertical == "function" ? y.tilingPaddingVertical.call() : y.tilingPaddingVertical, l.TILING_PADDING_HORIZONTAL = typeof y.tilingPaddingHorizontal == "function" ? y.tilingPaddingHorizontal.call() : y.tilingPaddingHorizontal, l.DEFAULT_INCREMENTAL = f.DEFAULT_INCREMENTAL = h.DEFAULT_INCREMENTAL = true, l.PURE_INCREMENTAL = !y.randomize, h.DEFAULT_UNIFORM_LEAF_NODE_SIZES = y.uniformNodeDimensions, y.step == "transformed" && (l.TRANSFORM_ON_CONSTRAINT_HANDLING = true, l.ENFORCE_CONSTRAINTS = false, l.APPLY_LAYOUT = false), y.step == "enforced" && (l.TRANSFORM_ON_CONSTRAINT_HANDLING = false, l.ENFORCE_CONSTRAINTS = true, l.APPLY_LAYOUT = false), y.step == "cose" && (l.TRANSFORM_ON_CONSTRAINT_HANDLING = false, l.ENFORCE_CONSTRAINTS = false, l.APPLY_LAYOUT = true), y.step == "all" && (y.randomize ? l.TRANSFORM_ON_CONSTRAINT_HANDLING = true : l.TRANSFORM_ON_CONSTRAINT_HANDLING = false, l.ENFORCE_CONSTRAINTS = true, l.APPLY_LAYOUT = true), y.fixedNodeConstraint || y.alignmentConstraint || y.relativePlacementConstraint ? l.TREE_REDUCTION_ON_INCREMENTAL = false : l.TREE_REDUCTION_ON_INCREMENTAL = true;
            var x = new e(), P = /* @__PURE__ */ x.newGraphManager();
            return T(/* @__PURE__ */ P.addRoot(), /* @__PURE__ */ c2.getTopMostNodes(G), x, y), d2(x, P, z), O(x, y), x.runLayout(), J;
          }, "coseLayout");
          a.exports = {
            coseLayout: A
          };
        },
        212: (a, t, n2) => {
          var c2 = /* @__PURE__ */ function() {
            function y(D, F) {
              for (var C = 0; C < F.length; C++) {
                var G = F[C];
                G.enumerable = G.enumerable || false, G.configurable = true, "value" in G && (G.writable = true), Object.defineProperty(D, G.key, G);
              }
            }
            return m$1(y, "defineProperties"), function(D, F, C) {
              return F && y(D.prototype, F), C && y(D, C), D;
            };
          }();
          function e(y, D) {
            if (!(y instanceof D)) throw new TypeError("Cannot call a class as a function");
          }
          m$1(e, "_classCallCheck");
          var p2 = /* @__PURE__ */ n2(658), i = /* @__PURE__ */ n2(548), r = /* @__PURE__ */ n2(657), h = r.spectralLayout, f = /* @__PURE__ */ n2(816), l = f.coseLayout, A = /* @__PURE__ */ Object.freeze({
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
            nodeRepulsion: /* @__PURE__ */ m$1(function(D) {
              return 4500;
            }, "nodeRepulsion"),
            idealEdgeLength: /* @__PURE__ */ m$1(function(D) {
              return 50;
            }, "idealEdgeLength"),
            edgeElasticity: /* @__PURE__ */ m$1(function(D) {
              return 0.45;
            }, "edgeElasticity"),
            nestingFactor: 0.1,
            gravity: 0.25,
            numIter: 2500,
            tile: true,
            tilingCompareBy: void 0,
            tilingPaddingVertical: 10,
            tilingPaddingHorizontal: 10,
            gravityRangeCompound: 1.5,
            gravityCompound: 1,
            gravityRange: 3.8,
            initialEnergyOnIncremental: 0.3,
            fixedNodeConstraint: void 0,
            alignmentConstraint: void 0,
            relativePlacementConstraint: void 0,
            ready: /* @__PURE__ */ m$1(function() {
            }, "ready"),
            stop: /* @__PURE__ */ m$1(function() {
            }, "stop")
          }), v = /* @__PURE__ */ function() {
            function y(D) {
              e(this, y), this.options = /* @__PURE__ */ p2({}, A, D);
            }
            return m$1(y, "Layout"), c2(y, [
              {
                key: "run",
                value: /* @__PURE__ */ m$1(function() {
                  var F = this, C = this.options, G = C.cy, z = C.eles, X = [], J = [], s2 = void 0, m = [];
                  C.fixedNodeConstraint && (!Array.isArray(C.fixedNodeConstraint) || C.fixedNodeConstraint.length == 0) && (C.fixedNodeConstraint = void 0), C.alignmentConstraint && (C.alignmentConstraint.vertical && (!Array.isArray(C.alignmentConstraint.vertical) || C.alignmentConstraint.vertical.length == 0) && (C.alignmentConstraint.vertical = void 0), C.alignmentConstraint.horizontal && (!Array.isArray(C.alignmentConstraint.horizontal) || C.alignmentConstraint.horizontal.length == 0) && (C.alignmentConstraint.horizontal = void 0)), C.relativePlacementConstraint && (!Array.isArray(C.relativePlacementConstraint) || C.relativePlacementConstraint.length == 0) && (C.relativePlacementConstraint = void 0);
                  var g = C.fixedNodeConstraint || C.alignmentConstraint || C.relativePlacementConstraint;
                  g && (C.tile = false, C.packComponents = false);
                  var T = void 0, d2 = false;
                  if (G.layoutUtilities && C.packComponents && (T = /* @__PURE__ */ G.layoutUtilities("get"), T || (T = /* @__PURE__ */ G.layoutUtilities()), d2 = true), z.nodes().length > 0) if (d2) {
                    var P = /* @__PURE__ */ i.getTopMostNodes(/* @__PURE__ */ C.eles.nodes());
                    if (s2 = /* @__PURE__ */ i.connectComponents(G, C.eles, P), s2.forEach(function(ot) {
                      var et = /* @__PURE__ */ ot.boundingBox();
                      m.push({
                        x: et.x1 + et.w / 2,
                        y: et.y1 + et.h / 2
                      });
                    }), C.randomize && s2.forEach(function(ot) {
                      C.eles = ot, X.push(/* @__PURE__ */ h(C));
                    }), C.quality == "default" || C.quality == "proof") {
                      var S = /* @__PURE__ */ G.collection();
                      if (C.tile) {
                        var R = /* @__PURE__ */ new Map(), Z = [], tt2 = [], b = 0, _ = {
                          nodeIndexes: R,
                          xCoords: Z,
                          yCoords: tt2
                        }, B = [];
                        if (s2.forEach(function(ot, et) {
                          ot.edges().length == 0 && (ot.nodes().forEach(function(yt2, Et) {
                            S.merge(ot.nodes()[Et]), yt2.isParent() || (_.nodeIndexes.set(/* @__PURE__ */ ot.nodes()[Et].id(), b++), _.xCoords.push(ot.nodes()[0].position().x), _.yCoords.push(ot.nodes()[0].position().y));
                          }), B.push(et));
                        }), S.length > 1) {
                          var M = /* @__PURE__ */ S.boundingBox();
                          m.push({
                            x: M.x1 + M.w / 2,
                            y: M.y1 + M.h / 2
                          }), s2.push(S), X.push(_);
                          for (var U = B.length - 1; U >= 0; U--) s2.splice(B[U], 1), X.splice(B[U], 1), m.splice(B[U], 1);
                        }
                      }
                      s2.forEach(function(ot, et) {
                        C.eles = ot, J.push(/* @__PURE__ */ l(C, X[et])), i.relocateComponent(m[et], J[et], C);
                      });
                    } else s2.forEach(function(ot, et) {
                      i.relocateComponent(m[et], X[et], C);
                    });
                    var H = /* @__PURE__ */ new Set();
                    if (s2.length > 1) {
                      var K = [], ht = /* @__PURE__ */ z.filter(function(ot) {
                        return ot.css("display") == "none";
                      });
                      s2.forEach(function(ot, et) {
                        var yt2 = void 0;
                        if (C.quality == "draft" && (yt2 = X[et].nodeIndexes), ot.nodes().not(ht).length > 0) {
                          var Et = {};
                          Et.edges = [], Et.nodes = [];
                          var Dt = void 0;
                          ot.nodes().not(ht).forEach(function(Tt) {
                            if (C.quality == "draft") if (!Tt.isParent()) Dt = /* @__PURE__ */ yt2.get(/* @__PURE__ */ Tt.id()), Et.nodes.push({
                              x: X[et].xCoords[Dt] - Tt.boundingbox().w / 2,
                              y: X[et].yCoords[Dt] - Tt.boundingbox().h / 2,
                              width: Tt.boundingbox().w,
                              height: Tt.boundingbox().h
                            });
                            else {
                              var At = /* @__PURE__ */ i.calcBoundingBox(Tt, X[et].xCoords, X[et].yCoords, yt2);
                              Et.nodes.push({
                                x: At.topLeftX,
                                y: At.topLeftY,
                                width: At.width,
                                height: At.height
                              });
                            }
                            else J[et][Tt.id()] && Et.nodes.push({
                              x: /* @__PURE__ */ J[et][Tt.id()].getLeft(),
                              y: /* @__PURE__ */ J[et][Tt.id()].getTop(),
                              width: /* @__PURE__ */ J[et][Tt.id()].getWidth(),
                              height: /* @__PURE__ */ J[et][Tt.id()].getHeight()
                            });
                          }), ot.edges().forEach(function(Tt) {
                            var At = /* @__PURE__ */ Tt.source(), xt = /* @__PURE__ */ Tt.target();
                            if (At.css("display") != "none" && xt.css("display") != "none") if (C.quality == "draft") {
                              var It = /* @__PURE__ */ yt2.get(/* @__PURE__ */ At.id()), zt = /* @__PURE__ */ yt2.get(/* @__PURE__ */ xt.id()), Yt = [], Ht = [];
                              if (At.isParent()) {
                                var Pt = /* @__PURE__ */ i.calcBoundingBox(At, X[et].xCoords, X[et].yCoords, yt2);
                                Yt.push(Pt.topLeftX + Pt.width / 2), Yt.push(Pt.topLeftY + Pt.height / 2);
                              } else Yt.push(X[et].xCoords[It]), Yt.push(X[et].yCoords[It]);
                              if (xt.isParent()) {
                                var Y = /* @__PURE__ */ i.calcBoundingBox(xt, X[et].xCoords, X[et].yCoords, yt2);
                                Ht.push(Y.topLeftX + Y.width / 2), Ht.push(Y.topLeftY + Y.height / 2);
                              } else Ht.push(X[et].xCoords[zt]), Ht.push(X[et].yCoords[zt]);
                              Et.edges.push({
                                startX: Yt[0],
                                startY: Yt[1],
                                endX: Ht[0],
                                endY: Ht[1]
                              });
                            } else J[et][At.id()] && J[et][xt.id()] && Et.edges.push({
                              startX: /* @__PURE__ */ J[et][At.id()].getCenterX(),
                              startY: /* @__PURE__ */ J[et][At.id()].getCenterY(),
                              endX: /* @__PURE__ */ J[et][xt.id()].getCenterX(),
                              endY: /* @__PURE__ */ J[et][xt.id()].getCenterY()
                            });
                          }), Et.nodes.length > 0 && (K.push(Et), H.add(et));
                        }
                      });
                      var Lt = T.packComponents(K, C.randomize).shifts;
                      if (C.quality == "draft") X.forEach(function(ot, et) {
                        var yt2 = /* @__PURE__ */ ot.xCoords.map(function(Dt) {
                          return Dt + Lt[et].dx;
                        }), Et = /* @__PURE__ */ ot.yCoords.map(function(Dt) {
                          return Dt + Lt[et].dy;
                        });
                        ot.xCoords = yt2, ot.yCoords = Et;
                      });
                      else {
                        var bt = 0;
                        H.forEach(function(ot) {
                          Object.keys(J[ot]).forEach(function(et) {
                            var yt2 = J[ot][et];
                            yt2.setCenter(yt2.getCenterX() + Lt[bt].dx, yt2.getCenterY() + Lt[bt].dy);
                          }), bt++;
                        });
                      }
                    }
                  } else {
                    var O = /* @__PURE__ */ C.eles.boundingBox();
                    if (m.push({
                      x: O.x1 + O.w / 2,
                      y: O.y1 + O.h / 2
                    }), C.randomize) {
                      var x = /* @__PURE__ */ h(C);
                      X.push(x);
                    }
                    C.quality == "default" || C.quality == "proof" ? (J.push(/* @__PURE__ */ l(C, X[0])), i.relocateComponent(m[0], J[0], C)) : i.relocateComponent(m[0], X[0], C);
                  }
                  var Q = /* @__PURE__ */ m$1(function(et, yt2) {
                    if (C.quality == "default" || C.quality == "proof") {
                      typeof et == "number" && (et = yt2);
                      var Et = void 0, Dt = void 0, Tt = /* @__PURE__ */ et.data("id");
                      return J.forEach(function(xt) {
                        Tt in xt && (Et = {
                          x: /* @__PURE__ */ xt[Tt].getRect().getCenterX(),
                          y: /* @__PURE__ */ xt[Tt].getRect().getCenterY()
                        }, Dt = xt[Tt]);
                      }), C.nodeDimensionsIncludeLabels && (Dt.labelWidth && (Dt.labelPosHorizontal == "left" ? Et.x += Dt.labelWidth / 2 : Dt.labelPosHorizontal == "right" && (Et.x -= Dt.labelWidth / 2)), Dt.labelHeight && (Dt.labelPosVertical == "top" ? Et.y += Dt.labelHeight / 2 : Dt.labelPosVertical == "bottom" && (Et.y -= Dt.labelHeight / 2))), Et == null && (Et = {
                        x: /* @__PURE__ */ et.position("x"),
                        y: /* @__PURE__ */ et.position("y")
                      }), {
                        x: Et.x,
                        y: Et.y
                      };
                    } else {
                      var At = void 0;
                      return X.forEach(function(xt) {
                        var It = /* @__PURE__ */ xt.nodeIndexes.get(/* @__PURE__ */ et.id());
                        It != null && (At = {
                          x: xt.xCoords[It],
                          y: xt.yCoords[It]
                        });
                      }), At == null && (At = {
                        x: /* @__PURE__ */ et.position("x"),
                        y: /* @__PURE__ */ et.position("y")
                      }), {
                        x: At.x,
                        y: At.y
                      };
                    }
                  }, "getPositions");
                  if (C.quality == "default" || C.quality == "proof" || C.randomize) {
                    var Xt = /* @__PURE__ */ i.calcParentsWithoutChildren(G, z), wt = /* @__PURE__ */ z.filter(function(ot) {
                      return ot.css("display") == "none";
                    });
                    C.eles = /* @__PURE__ */ z.not(wt), z.nodes().not(":parent").not(wt).layoutPositions(F, C, Q), Xt.length > 0 && Xt.forEach(function(ot) {
                      ot.position(/* @__PURE__ */ Q(ot));
                    });
                  } else console.log("If randomize option is set to false, then quality option must be 'default' or 'proof'.");
                }, "run")
              }
            ]), y;
          }();
          a.exports = v;
        },
        657: (a, t, n2) => {
          var c2 = /* @__PURE__ */ n2(548), e = n2(140).layoutBase.Matrix, p2 = n2(140).layoutBase.SVD, i = /* @__PURE__ */ m$1(function(h) {
            var f = h.cy, l = h.eles, A = /* @__PURE__ */ l.nodes(), v = /* @__PURE__ */ l.nodes(":parent"), y = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), C = [], G = [], z = [], X = [], rt = [], I = [], J = [], s2 = [], g = void 0, T = 1e8, d2 = 1e-9, O = h.piTol, x = h.samplingType, P = h.nodeSeparation, S = void 0, R = /* @__PURE__ */ m$1(function() {
              for (var V = 0, $ = 0, k = false; $ < S; ) {
                V = /* @__PURE__ */ Math.floor(Math.random() * g), k = false;
                for (var j = 0; j < $; j++) if (X[j] == V) {
                  k = true;
                  break;
                }
                if (!k) X[$] = V, $++;
                else continue;
              }
            }, "randomSampleCR"), Z = /* @__PURE__ */ m$1(function(V, $, k) {
              for (var j = [], gt = 0, ft = 0, q2 = 0, lt = void 0, ut = [], it = 0, pt = 1, Ct = 0; Ct < g; Ct++) ut[Ct] = T;
              for (j[ft] = V, ut[V] = 0; ft >= gt; ) {
                q2 = j[gt++];
                for (var st = C[q2], nt = 0; nt < st.length; nt++) lt = /* @__PURE__ */ D.get(st[nt]), ut[lt] == T && (ut[lt] = ut[q2] + 1, j[++ft] = lt);
                I[q2][$] = ut[q2] * P;
              }
              if (k) {
                for (var dt = 0; dt < g; dt++) I[dt][$] < rt[dt] && (rt[dt] = I[dt][$]);
                for (var at = 0; at < g; at++) rt[at] > it && (it = rt[at], pt = at);
              }
              return pt;
            }, "BFS"), tt2 = /* @__PURE__ */ m$1(function(V) {
              var $ = void 0;
              if (V) {
                $ = /* @__PURE__ */ Math.floor(Math.random() * g);
                for (var j = 0; j < g; j++) rt[j] = T;
                for (var gt = 0; gt < S; gt++) X[gt] = $, $ = /* @__PURE__ */ Z($, gt, V);
              } else {
                R();
                for (var k = 0; k < S; k++) Z(X[k], k, V, false);
              }
              for (var ft = 0; ft < g; ft++) for (var q2 = 0; q2 < S; q2++) I[ft][q2] *= I[ft][q2];
              for (var lt = 0; lt < S; lt++) J[lt] = [];
              for (var ut = 0; ut < S; ut++) for (var it = 0; it < S; it++) J[ut][it] = I[X[it]][ut];
            }, "allBFS"), b = /* @__PURE__ */ m$1(function() {
              for (var V = /* @__PURE__ */ p2.svd(J), $ = V.S, k = V.U, j = V.V, gt = $[0] * $[0] * $[0], ft = [], q2 = 0; q2 < S; q2++) {
                ft[q2] = [];
                for (var lt = 0; lt < S; lt++) ft[q2][lt] = 0, q2 == lt && (ft[q2][lt] = $[q2] / ($[q2] * $[q2] + gt / ($[q2] * $[q2])));
              }
              s2 = /* @__PURE__ */ e.multMat(/* @__PURE__ */ e.multMat(j, ft), /* @__PURE__ */ e.transpose(k));
            }, "sample"), _ = /* @__PURE__ */ m$1(function() {
              for (var V = void 0, $ = void 0, k = [], j = [], gt = [], ft = [], q2 = 0; q2 < g; q2++) k[q2] = /* @__PURE__ */ Math.random(), j[q2] = /* @__PURE__ */ Math.random();
              k = /* @__PURE__ */ e.normalize(k), j = /* @__PURE__ */ e.normalize(j);
              for (var lt = 0, ut = d2, it = d2, pt = void 0; ; ) {
                lt++;
                for (var Ct = 0; Ct < g; Ct++) gt[Ct] = k[Ct];
                if (k = /* @__PURE__ */ e.multGamma(/* @__PURE__ */ e.multL(/* @__PURE__ */ e.multGamma(gt), I, s2)), V = /* @__PURE__ */ e.dotProduct(gt, k), k = /* @__PURE__ */ e.normalize(k), ut = /* @__PURE__ */ e.dotProduct(gt, k), pt = /* @__PURE__ */ Math.abs(ut / it), pt <= 1 + O && pt >= 1) break;
                it = ut;
              }
              for (var st = 0; st < g; st++) gt[st] = k[st];
              for (lt = 0, it = d2; ; ) {
                lt++;
                for (var nt = 0; nt < g; nt++) ft[nt] = j[nt];
                if (ft = /* @__PURE__ */ e.minusOp(ft, /* @__PURE__ */ e.multCons(gt, /* @__PURE__ */ e.dotProduct(gt, ft))), j = /* @__PURE__ */ e.multGamma(/* @__PURE__ */ e.multL(/* @__PURE__ */ e.multGamma(ft), I, s2)), $ = /* @__PURE__ */ e.dotProduct(ft, j), j = /* @__PURE__ */ e.normalize(j), ut = /* @__PURE__ */ e.dotProduct(ft, j), pt = /* @__PURE__ */ Math.abs(ut / it), pt <= 1 + O && pt >= 1) break;
                it = ut;
              }
              for (var dt = 0; dt < g; dt++) ft[dt] = j[dt];
              G = /* @__PURE__ */ e.multCons(gt, /* @__PURE__ */ Math.sqrt(/* @__PURE__ */ Math.abs(V))), z = /* @__PURE__ */ e.multCons(ft, /* @__PURE__ */ Math.sqrt(/* @__PURE__ */ Math.abs($)));
            }, "powerIteration");
            c2.connectComponents(f, l, /* @__PURE__ */ c2.getTopMostNodes(A), y), v.forEach(function(W) {
              c2.connectComponents(f, l, /* @__PURE__ */ c2.getTopMostNodes(/* @__PURE__ */ W.descendants().intersection(l)), y);
            });
            for (var B = 0, M = 0; M < A.length; M++) A[M].isParent() || D.set(/* @__PURE__ */ A[M].id(), B++);
            var U = true, H = false, K = void 0;
            try {
              for (var ht = /* @__PURE__ */ y.keys()[Symbol.iterator](), Lt; !(U = (Lt = /* @__PURE__ */ ht.next()).done); U = true) {
                var bt = Lt.value;
                D.set(bt, B++);
              }
            } catch (W) {
              H = true, K = W;
            } finally {
              try {
                !U && ht.return && ht.return();
              } finally {
                if (H) throw K;
              }
            }
            for (var Q = 0; Q < D.size; Q++) C[Q] = [];
            v.forEach(function(W) {
              for (var V = /* @__PURE__ */ W.children().intersection(l); V.nodes(":childless").length == 0; ) V = /* @__PURE__ */ V.nodes()[0].children().intersection(l);
              var $ = 0, k = V.nodes(":childless")[0].connectedEdges().length;
              V.nodes(":childless").forEach(function(j, gt) {
                j.connectedEdges().length < k && (k = j.connectedEdges().length, $ = gt);
              }), F.set(/* @__PURE__ */ W.id(), /* @__PURE__ */ V.nodes(":childless")[$].id());
            }), A.forEach(function(W) {
              var V = void 0;
              W.isParent() ? V = /* @__PURE__ */ D.get(/* @__PURE__ */ F.get(/* @__PURE__ */ W.id())) : V = /* @__PURE__ */ D.get(/* @__PURE__ */ W.id()), W.neighborhood().nodes().forEach(function($) {
                l.intersection(/* @__PURE__ */ W.edgesWith($)).length > 0 && ($.isParent() ? C[V].push(/* @__PURE__ */ F.get(/* @__PURE__ */ $.id())) : C[V].push(/* @__PURE__ */ $.id()));
              });
            });
            var Xt = /* @__PURE__ */ m$1(function(V) {
              var $ = /* @__PURE__ */ D.get(V), k = void 0;
              y.get(V).forEach(function(j) {
                f.getElementById(j).isParent() ? k = /* @__PURE__ */ F.get(j) : k = j, C[$].push(k), C[D.get(k)].push(V);
              });
            }, "_loop"), wt = true, ot = false, et = void 0;
            try {
              for (var yt2 = /* @__PURE__ */ y.keys()[Symbol.iterator](), Et; !(wt = (Et = /* @__PURE__ */ yt2.next()).done); wt = true) {
                var Dt = Et.value;
                Xt(Dt);
              }
            } catch (W) {
              ot = true, et = W;
            } finally {
              try {
                !wt && yt2.return && yt2.return();
              } finally {
                if (ot) throw et;
              }
            }
            g = D.size;
            var Tt = void 0;
            if (g > 2) {
              S = g < h.sampleSize ? g : h.sampleSize;
              for (var At = 0; At < g; At++) I[At] = [];
              for (var xt = 0; xt < S; xt++) s2[xt] = [];
              return h.quality == "draft" || h.step == "all" ? (tt2(x), b(), _(), Tt = {
                nodeIndexes: D,
                xCoords: G,
                yCoords: z
              }) : (D.forEach(function(W, V) {
                G.push(/* @__PURE__ */ f.getElementById(V).position("x")), z.push(/* @__PURE__ */ f.getElementById(V).position("y"));
              }), Tt = {
                nodeIndexes: D,
                xCoords: G,
                yCoords: z
              }), Tt;
            } else {
              var It = /* @__PURE__ */ D.keys(), zt = /* @__PURE__ */ f.getElementById(It.next().value), Yt = /* @__PURE__ */ zt.position(), Ht = /* @__PURE__ */ zt.outerWidth();
              if (G.push(Yt.x), z.push(Yt.y), g == 2) {
                var Pt = /* @__PURE__ */ f.getElementById(It.next().value), Y = /* @__PURE__ */ Pt.outerWidth();
                G.push(Yt.x + Ht / 2 + Y / 2 + h.idealEdgeLength), z.push(Yt.y);
              }
              return Tt = {
                nodeIndexes: D,
                xCoords: G,
                yCoords: z
              }, Tt;
            }
          }, "spectralLayout");
          a.exports = {
            spectralLayout: i
          };
        },
        579: (a, t, n2) => {
          var c2 = /* @__PURE__ */ n2(212), e = /* @__PURE__ */ m$1(function(i) {
            i && i("layout", "fcose", c2);
          }, "register");
          typeof cytoscape < "u" && e(cytoscape), a.exports = e;
        },
        140: (a) => {
          a.exports = E;
        }
      }, N = {};
      function u(a) {
        var t = N[a];
        if (t !== void 0) return t.exports;
        var n2 = N[a] = {
          exports: {}
        };
        return w[a](n2, n2.exports, u), n2.exports;
      }
      m$1(u, "__webpack_require__");
      var o = /* @__PURE__ */ u(579);
      return o;
    })();
  });
});
var Ce = {
  L: "left",
  R: "right",
  T: "top",
  B: "bottom"
}, Me = {
  L: /* @__PURE__ */ m$1((E) => `${E},${E / 2} 0,${E} 0,0`, "L"),
  R: /* @__PURE__ */ m$1((E) => `0,${E / 2} ${E},0 ${E},${E}`, "R"),
  T: /* @__PURE__ */ m$1((E) => `0,0 ${E},0 ${E / 2},${E}`, "T"),
  B: /* @__PURE__ */ m$1((E) => `${E / 2},0 ${E},${E} 0,${E}`, "B")
}, se = {
  L: /* @__PURE__ */ m$1((E, w) => E - w + 2, "L"),
  R: /* @__PURE__ */ m$1((E, w) => E - 2, "R"),
  T: /* @__PURE__ */ m$1((E, w) => E - w + 2, "T"),
  B: /* @__PURE__ */ m$1((E, w) => E - 2, "B")
}, tr = /* @__PURE__ */ m$1(function(E) {
  return Vt(E) ? E === "L" ? "R" : "L" : E === "T" ? "B" : "T";
}, "getOppositeArchitectureDirection"), we = /* @__PURE__ */ m$1(function(E) {
  let w = E;
  return w === "L" || w === "R" || w === "T" || w === "B";
}, "isArchitectureDirection"), Vt = /* @__PURE__ */ m$1(function(E) {
  let w = E;
  return w === "L" || w === "R";
}, "isArchitectureDirectionX"), Jt = /* @__PURE__ */ m$1(function(E) {
  let w = E;
  return w === "T" || w === "B";
}, "isArchitectureDirectionY"), ve = /* @__PURE__ */ m$1(function(E, w) {
  let N = Vt(E) && Jt(w), u = Jt(E) && Vt(w);
  return N || u;
}, "isArchitectureDirectionXY"), er = /* @__PURE__ */ m$1(function(E) {
  let w = E[0], N = E[1], u = Vt(w) && Jt(N), o = Jt(w) && Vt(N);
  return u || o;
}, "isArchitecturePairXY"), mr = /* @__PURE__ */ m$1(function(E) {
  return E !== "LL" && E !== "RR" && E !== "TT" && E !== "BB";
}, "isValidArchitectureDirectionPair"), he = /* @__PURE__ */ m$1(function(E, w) {
  let N = `${E}${w}`;
  return mr(N) ? N : void 0;
}, "getArchitectureDirectionPair"), rr = /* @__PURE__ */ m$1(function(param, N) {
  let [E, w] = param;
  let u = N[0], o = N[1];
  return Vt(u) ? Jt(o) ? [
    E + (u === "L" ? -1 : 1),
    w + (o === "T" ? 1 : -1)
  ] : [
    E + (u === "L" ? -1 : 1),
    w
  ] : Vt(o) ? [
    E + (o === "L" ? 1 : -1),
    w + (u === "T" ? 1 : -1)
  ] : [
    E,
    w + (u === "T" ? 1 : -1)
  ];
}, "shiftPositionByArchitectureDirectionPair"), ir = /* @__PURE__ */ m$1(function(E) {
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
}, "getArchitectureDirectionXYFactors"), nr = /* @__PURE__ */ m$1(function(E) {
  return E.type === "service";
}, "isArchitectureService"), ar = /* @__PURE__ */ m$1(function(E) {
  return E.type === "junction";
}, "isArchitectureJunction"), ye = /* @__PURE__ */ m$1((E) => E.data(), "edgeData"), Qt = /* @__PURE__ */ m$1((E) => E.data(), "nodeData");
var or = dl.architecture, vt = new s(() => ({
  nodes: {},
  groups: {},
  edges: [],
  registeredIds: {},
  config: or,
  dataStructures: void 0,
  elements: {}
})), Er = /* @__PURE__ */ m$1(() => {
  vt.reset(), bf();
}, "clear"), Tr = /* @__PURE__ */ m$1(function(param) {
  let { id: E, icon: w, in: N, title: u, iconText: o } = param;
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
    iconText: o,
    title: u,
    edges: [],
    in: N
  };
}, "addService"), Ar = /* @__PURE__ */ m$1(() => Object.values(vt.records.nodes).filter(nr), "getServices"), Nr = /* @__PURE__ */ m$1(function(param) {
  let { id: E, in: w } = param;
  vt.records.registeredIds[E] = "node", vt.records.nodes[E] = {
    id: E,
    type: "junction",
    edges: [],
    in: w
  };
}, "addJunction"), Lr = /* @__PURE__ */ m$1(() => Object.values(vt.records.nodes).filter(ar), "getJunctions"), Dr = /* @__PURE__ */ m$1(() => Object.values(vt.records.nodes), "getNodes"), Cr = /* @__PURE__ */ m$1((E) => vt.records.nodes[E], "getNode"), Mr = /* @__PURE__ */ m$1(function(param) {
  let { id: E, icon: w, in: N, title: u } = param;
  if (vt.records.registeredIds[E] !== void 0) throw new Error(`The group id [${E}] is already in use by another ${vt.records.registeredIds[E]}`);
  if (N !== void 0) {
    if (E === N) throw new Error(`The group [${E}] cannot be placed within itself`);
    if (vt.records.registeredIds[N] === void 0) throw new Error(`The group [${E}]'s parent does not exist. Please make sure the parent is created before this group`);
    if (vt.records.registeredIds[N] === "node") throw new Error(`The group [${E}]'s parent is not a group`);
  }
  vt.records.registeredIds[E] = "group", vt.records.groups[E] = {
    id: E,
    icon: w,
    title: u,
    in: N
  };
}, "addGroup"), wr = /* @__PURE__ */ m$1(() => Object.values(vt.records.groups), "getGroups"), xr = /* @__PURE__ */ m$1(function(param) {
  let { lhsId: E, rhsId: w, lhsDir: N, rhsDir: u, lhsInto: o, rhsInto: a, lhsGroup: t, rhsGroup: n2, title: c2 } = param;
  if (!we(N)) throw new Error(`Invalid direction given for left hand side of edge ${E}--${w}. Expected (L,R,T,B) got ${N}`);
  if (!we(u)) throw new Error(`Invalid direction given for right hand side of edge ${E}--${w}. Expected (L,R,T,B) got ${u}`);
  if (vt.records.nodes[E] === void 0 && vt.records.groups[E] === void 0) throw new Error(`The left-hand id [${E}] does not yet exist. Please create the service/group before declaring an edge to it.`);
  if (vt.records.nodes[w] === void 0 && vt.records.groups[E] === void 0) throw new Error(`The right-hand id [${w}] does not yet exist. Please create the service/group before declaring an edge to it.`);
  let e = vt.records.nodes[E].in, p2 = vt.records.nodes[w].in;
  if (t && e && p2 && e == p2) throw new Error(`The left-hand id [${E}] is modified to traverse the group boundary, but the edge does not pass through two groups.`);
  if (n2 && e && p2 && e == p2) throw new Error(`The right-hand id [${w}] is modified to traverse the group boundary, but the edge does not pass through two groups.`);
  let i = {
    lhsId: E,
    lhsDir: N,
    lhsInto: o,
    lhsGroup: t,
    rhsId: w,
    rhsDir: u,
    rhsInto: a,
    rhsGroup: n2,
    title: c2
  };
  vt.records.edges.push(i), vt.records.nodes[E] && vt.records.nodes[w] && (vt.records.nodes[E].edges.push(vt.records.edges[vt.records.edges.length - 1]), vt.records.nodes[w].edges.push(vt.records.edges[vt.records.edges.length - 1]));
}, "addEdge"), Or = /* @__PURE__ */ m$1(() => vt.records.edges, "getEdges"), Rr = /* @__PURE__ */ m$1(() => {
  if (vt.records.dataStructures === void 0) {
    let E = /* @__PURE__ */ Object.entries(vt.records.nodes).reduce((t, param) => {
      let [n2, c2] = param;
      return t[n2] = /* @__PURE__ */ c2.edges.reduce((e, p2) => {
        if (p2.lhsId === n2) {
          let i = /* @__PURE__ */ he(p2.lhsDir, p2.rhsDir);
          i && (e[i] = p2.rhsId);
        } else {
          let i = /* @__PURE__ */ he(p2.rhsDir, p2.lhsDir);
          i && (e[i] = p2.lhsId);
        }
        return e;
      }, {}), t;
    }, {}), w = Object.keys(E)[0], N = {
      [w]: 1
    }, u = /* @__PURE__ */ Object.keys(E).reduce((t, n2) => n2 === w ? t : {
      ...t,
      [n2]: 1
    }, {}), o = /* @__PURE__ */ m$1((t) => {
      let n2 = {
        [t]: [
          0,
          0
        ]
      }, c2 = [
        t
      ];
      for (; c2.length > 0; ) {
        let e = /* @__PURE__ */ c2.shift();
        if (e) {
          N[e] = 1, delete u[e];
          let p2 = E[e], [i, r] = n2[e];
          Object.entries(p2).forEach((param) => {
            let [h, f] = param;
            N[f] || (n2[f] = /* @__PURE__ */ rr([
              i,
              r
            ], h), c2.push(f));
          });
        }
      }
      return n2;
    }, "BFS"), a = [
      /* @__PURE__ */ o(w)
    ];
    for (; Object.keys(u).length > 0; ) a.push(/* @__PURE__ */ o(Object.keys(u)[0]));
    vt.records.dataStructures = {
      adjList: E,
      spatialMaps: a
    };
  }
  return vt.records.dataStructures;
}, "getDataStructures"), Ir = /* @__PURE__ */ m$1((E, w) => {
  vt.records.elements[E] = w;
}, "setElementForId"), Sr = /* @__PURE__ */ m$1((E) => vt.records.elements[E], "getElementById"), _t = {
  clear: Er,
  setDiagramTitle: wf,
  getDiagramTitle: Bf,
  setAccTitle: Tf,
  getAccTitle: kf,
  setAccDescription: Sf,
  getAccDescription: vf,
  addService: Tr,
  getServices: Ar,
  addJunction: Nr,
  getJunctions: Lr,
  getNodes: Dr,
  getNode: Cr,
  addGroup: Mr,
  getGroups: wr,
  addEdge: xr,
  getEdges: Or,
  setElementForId: Ir,
  getElementById: Sr,
  getDataStructures: Rr
};
function Gt(E) {
  let w = Wl().architecture;
  return (w == null ? void 0 : w[E]) ? w[E] : or[E];
}
m$1(Gt, "getConfigField");
var br = /* @__PURE__ */ m$1((E, w) => {
  c(E, w), E.groups.map(w.addGroup), E.services.map((N) => w.addService({
    ...N,
    type: "service"
  })), E.junctions.map((N) => w.addJunction({
    ...N,
    type: "junction"
  })), E.edges.map(w.addEdge);
}, "populateDb"), sr = {
  parse: /* @__PURE__ */ m$1(async (E) => {
    let w = await p("architecture", E);
    tt.debug(w), br(w, _t);
  }, "parse")
};
var Fr = /* @__PURE__ */ m$1((E) => `
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
`, "getStyles"), hr = Fr;
var dr = /* @__PURE__ */ q(/* @__PURE__ */ lr());
var oe = /* @__PURE__ */ m$1((E) => `<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/>${E}</g>`, "wrapIcon"), te = {
  prefix: "mermaid-architecture",
  height: 80,
  width: 80,
  icons: {
    database: {
      body: /* @__PURE__ */ oe('<path id="b" data-name="4" d="m20,57.86c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path id="c" data-name="3" d="m20,45.95c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path id="d" data-name="2" d="m20,34.05c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse id="e" data-name="1" cx="40" cy="22.14" rx="20" ry="7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="20" y1="57.86" x2="20" y2="22.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="60" y1="57.86" x2="60" y2="22.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>')
    },
    server: {
      body: /* @__PURE__ */ oe('<rect x="17.5" y="17.5" width="45" height="45" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="32.5" x2="62.5" y2="32.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="47.5" x2="62.5" y2="47.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><g><path d="m56.25,25c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,25c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><path d="m56.25,40c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,40c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><path d="m56.25,55c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,55c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g>')
    },
    disk: {
      body: /* @__PURE__ */ oe('<rect x="20" y="15" width="40" height="50" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="24" cy="19.17" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="56" cy="19.17" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="24" cy="60.83" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="56" cy="60.83" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="40" cy="33.75" rx="14" ry="14.58" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="40" cy="33.75" rx="4" ry="4.17" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m37.51,42.52l-4.83,13.22c-.26.71-1.1,1.02-1.76.64l-4.18-2.42c-.66-.38-.81-1.26-.33-1.84l9.01-10.8c.88-1.05,2.56-.08,2.09,1.2Z" style="fill: #fff; stroke-width: 0px;"/>')
    },
    internet: {
      body: /* @__PURE__ */ oe('<circle cx="40" cy="40" r="22.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="40" y1="17.5" x2="40" y2="62.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="40" x2="62.5" y2="40" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m39.99,17.51c-15.28,11.1-15.28,33.88,0,44.98" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m40.01,17.51c15.28,11.1,15.28,33.88,0,44.98" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="19.75" y1="30.1" x2="60.25" y2="30.1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="19.75" y1="49.9" x2="60.25" y2="49.9" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>')
    },
    cloud: {
      body: /* @__PURE__ */ oe('<path d="m65,47.5c0,2.76-2.24,5-5,5H20c-2.76,0-5-2.24-5-5,0-1.87,1.03-3.51,2.56-4.36-.04-.21-.06-.42-.06-.64,0-2.6,2.48-4.74,5.65-4.97,1.65-4.51,6.34-7.76,11.85-7.76.86,0,1.69.08,2.5.23,2.09-1.57,4.69-2.5,7.5-2.5,6.1,0,11.19,4.38,12.28,10.17,2.14.56,3.72,2.51,3.72,4.83,0,.03,0,.07-.01.1,2.29.46,4.01,2.48,4.01,4.9Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>')
    },
    unknown: je,
    blank: {
      body: /* @__PURE__ */ oe("")
    }
  }
};
var cr = /* @__PURE__ */ m$1(async function(E, w) {
  let N = /* @__PURE__ */ Gt("padding"), u = /* @__PURE__ */ Gt("iconSize"), o = u / 2, a = u / 6, t = a / 2;
  await Promise.all(/* @__PURE__ */ w.edges().map(async (n2) => {
    var _a, _b;
    let { source: c2, sourceDir: e, sourceArrow: p2, sourceGroup: i, target: r, targetDir: h, targetArrow: f, targetGroup: l, label: A } = ye(n2), { x: v, y } = n2[0].sourceEndpoint(), { x: D, y: F } = n2[0].midpoint(), { x: C, y: G } = n2[0].targetEndpoint(), z = N + 4;
    if (i && (Vt(e) ? v += e === "L" ? -z : z : y += e === "T" ? -z : z + 18), l && (Vt(h) ? C += h === "L" ? -z : z : G += h === "T" ? -z : z + 18), !i && ((_a = _t.getNode(c2)) == null ? void 0 : _a.type) === "junction" && (Vt(e) ? v += e === "L" ? o : -o : y += e === "T" ? o : -o), !l && ((_b = _t.getNode(r)) == null ? void 0 : _b.type) === "junction" && (Vt(h) ? C += h === "L" ? o : -o : G += h === "T" ? o : -o), n2[0]._private.rscratch) {
      let X = /* @__PURE__ */ E.insert("g");
      if (X.insert("path").attr("d", `M ${v},${y} L ${D},${F} L${C},${G} `).attr("class", "edge"), p2) {
        let rt = Vt(e) ? se[e](v, a) : v - t, I = Jt(e) ? se[e](y, a) : y - t;
        X.insert("polygon").attr("points", /* @__PURE__ */ Me[e](a)).attr("transform", `translate(${rt},${I})`).attr("class", "arrow");
      }
      if (f) {
        let rt = Vt(h) ? se[h](C, a) : C - t, I = Jt(h) ? se[h](G, a) : G - t;
        X.insert("polygon").attr("points", /* @__PURE__ */ Me[h](a)).attr("transform", `translate(${rt},${I})`).attr("class", "arrow");
      }
      if (A) {
        let rt = ve(e, h) ? "XY" : Vt(e) ? "X" : "Y", I = 0;
        rt === "X" ? I = /* @__PURE__ */ Math.abs(v - C) : rt === "Y" ? I = Math.abs(y - G) / 1.5 : I = Math.abs(v - C) / 2;
        let J = /* @__PURE__ */ X.append("g");
        if (await Zt(J, A, {
          useHtmlLabels: false,
          width: I,
          classes: "architecture-service-label"
        }, /* @__PURE__ */ Wl()), J.attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle"), rt === "X") J.attr("transform", "translate(" + D + ", " + F + ")");
        else if (rt === "Y") J.attr("transform", "translate(" + D + ", " + F + ") rotate(-90)");
        else if (rt === "XY") {
          let s2 = /* @__PURE__ */ he(e, h);
          if (s2 && er(s2)) {
            let m = /* @__PURE__ */ J.node().getBoundingClientRect(), [g, T] = ir(s2);
            J.attr("dominant-baseline", "auto").attr("transform", `rotate(${-1 * g * T * 45})`);
            let d2 = /* @__PURE__ */ J.node().getBoundingClientRect();
            J.attr("transform", `
                translate(${D}, ${F - m.height / 2})
                translate(${g * d2.width / 2}, ${T * d2.height / 2})
                rotate(${-1 * g * T * 45}, 0, ${m.height / 2})
              `);
          }
        }
      }
    }
  }));
}, "drawEdges"), fr = /* @__PURE__ */ m$1(async function(E, w) {
  let u = Gt("padding") * 0.75, o = /* @__PURE__ */ Gt("fontSize"), t = Gt("iconSize") / 2;
  await Promise.all(/* @__PURE__ */ w.nodes().map(async (n2) => {
    let c2 = /* @__PURE__ */ Qt(n2);
    if (c2.type === "group") {
      let { h: e, w: p2, x1: i, y1: r } = n2.boundingBox();
      E.append("rect").attr("x", i + t).attr("y", r + t).attr("width", p2).attr("height", e).attr("class", "node-bkg");
      let h = /* @__PURE__ */ E.append("g"), f = i, l = r;
      if (c2.icon) {
        let A = /* @__PURE__ */ h.append("g");
        A.html(`<g>${await St(c2.icon, {
          height: u,
          width: u,
          fallbackPrefix: te.prefix
        })}</g>`), A.attr("transform", "translate(" + (f + t + 1) + ", " + (l + t + 1) + ")"), f += u, l += o / 2 - 1 - 2;
      }
      if (c2.label) {
        let A = /* @__PURE__ */ h.append("g");
        await Zt(A, c2.label, {
          useHtmlLabels: false,
          width: p2,
          classes: "architecture-service-label"
        }, /* @__PURE__ */ Wl()), A.attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "start").attr("text-anchor", "start"), A.attr("transform", "translate(" + (f + t + 4) + ", " + (l + t + 2) + ")");
      }
    }
  }));
}, "drawGroups"), ur = /* @__PURE__ */ m$1(async function(E, w, N) {
  for (let u of N) {
    let o = /* @__PURE__ */ w.append("g"), a = /* @__PURE__ */ Gt("iconSize");
    if (u.title) {
      let e = /* @__PURE__ */ o.append("g");
      await Zt(e, u.title, {
        useHtmlLabels: false,
        width: a * 1.5,
        classes: "architecture-service-label"
      }, /* @__PURE__ */ Wl()), e.attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle"), e.attr("transform", "translate(" + a / 2 + ", " + a + ")");
    }
    let t = /* @__PURE__ */ o.append("g");
    if (u.icon) t.html(`<g>${await St(u.icon, {
      height: a,
      width: a,
      fallbackPrefix: te.prefix
    })}</g>`);
    else if (u.iconText) {
      t.html(`<g>${await St("blank", {
        height: a,
        width: a,
        fallbackPrefix: te.prefix
      })}</g>`);
      let i = /* @__PURE__ */ t.append("g").append("foreignObject").attr("width", a).attr("height", a).append("div").attr("class", "node-icon-text").attr("style", `height: ${a}px;`).append("div").html(u.iconText), r = parseInt(/* @__PURE__ */ window.getComputedStyle(/* @__PURE__ */ i.node(), null).getPropertyValue("font-size").replace(/\D/g, "")) ?? 16;
      i.attr("style", `-webkit-line-clamp: ${Math.floor((a - 2) / r)};`);
    } else t.append("path").attr("class", "node-bkg").attr("id", "node-" + u.id).attr("d", `M0 ${a} v${-a} q0,-5 5,-5 h${a} q5,0 5,5 v${a} H0 Z`);
    o.attr("class", "architecture-service");
    let { width: n2, height: c2 } = o._groups[0][0].getBBox();
    u.width = n2, u.height = c2, E.setElementForId(u.id, o);
  }
  return 0;
}, "drawServices"), gr = /* @__PURE__ */ m$1(function(E, w, N) {
  N.forEach((u) => {
    let o = /* @__PURE__ */ w.append("g"), a = /* @__PURE__ */ Gt("iconSize");
    o.append("g").append("rect").attr("id", "node-" + u.id).attr("fill-opacity", "0").attr("width", a).attr("height", a), o.attr("class", "architecture-junction");
    let { width: n2, height: c2 } = o._groups[0][0].getBBox();
    o.width = n2, o.height = c2, E.setElementForId(u.id, o);
  });
}, "drawJunctions");
yt([
  {
    name: te.prefix,
    icons: te
  }
]);
Ft.use(dr.default);
function Pr(E, w) {
  E.forEach((N) => {
    w.add({
      group: "nodes",
      data: {
        type: "service",
        id: N.id,
        icon: N.icon,
        label: N.title,
        parent: N.in,
        width: /* @__PURE__ */ Gt("iconSize"),
        height: /* @__PURE__ */ Gt("iconSize")
      },
      classes: "node-service"
    });
  });
}
m$1(Pr, "addServices");
function Gr(E, w) {
  E.forEach((N) => {
    w.add({
      group: "nodes",
      data: {
        type: "junction",
        id: N.id,
        parent: N.in,
        width: /* @__PURE__ */ Gt("iconSize"),
        height: /* @__PURE__ */ Gt("iconSize")
      },
      classes: "node-junction"
    });
  });
}
m$1(Gr, "addJunctions");
function Yr(E, w) {
  w.nodes().map((N) => {
    let u = /* @__PURE__ */ Qt(N);
    if (u.type === "group") return;
    u.x = N.position().x, u.y = N.position().y, E.getElementById(u.id).attr("transform", "translate(" + (u.x || 0) + "," + (u.y || 0) + ")");
  });
}
m$1(Yr, "positionNodes");
function Ur(E, w) {
  E.forEach((N) => {
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
m$1(Ur, "addGroups");
function Xr(E, w) {
  E.forEach((N) => {
    let { lhsId: u, rhsId: o, lhsInto: a, lhsGroup: t, rhsInto: n2, lhsDir: c2, rhsDir: e, rhsGroup: p2, title: i } = N, r = ve(N.lhsDir, N.rhsDir) ? "segments" : "straight", h = {
      id: `${u}-${o}`,
      label: i,
      source: u,
      sourceDir: c2,
      sourceArrow: a,
      sourceGroup: t,
      sourceEndpoint: c2 === "L" ? "0 50%" : c2 === "R" ? "100% 50%" : c2 === "T" ? "50% 0" : "50% 100%",
      target: o,
      targetDir: e,
      targetArrow: n2,
      targetGroup: p2,
      targetEndpoint: e === "L" ? "0 50%" : e === "R" ? "100% 50%" : e === "T" ? "50% 0" : "50% 100%"
    };
    w.add({
      group: "edges",
      data: h,
      classes: r
    });
  });
}
m$1(Xr, "addEdges");
function Hr(E) {
  let w = /* @__PURE__ */ E.map((o) => {
    let a = {}, t = {};
    return Object.entries(o).forEach((param) => {
      let [n2, [c2, e]] = param;
      a[e] || (a[e] = []), t[c2] || (t[c2] = []), a[e].push(n2), t[c2].push(n2);
    }), {
      horiz: /* @__PURE__ */ Object.values(a).filter((n2) => n2.length > 1),
      vert: /* @__PURE__ */ Object.values(t).filter((n2) => n2.length > 1)
    };
  }), [N, u] = w.reduce((param, param1) => {
    let [o, a] = param, { horiz: t, vert: n2 } = param1;
    return [
      [
        ...o,
        ...t
      ],
      [
        ...a,
        ...n2
      ]
    ];
  }, [
    [],
    []
  ]);
  return {
    horizontal: N,
    vertical: u
  };
}
m$1(Hr, "getAlignments");
function Wr(E) {
  let w = [], N = /* @__PURE__ */ m$1((o) => `${o[0]},${o[1]}`, "posToStr"), u = /* @__PURE__ */ m$1((o) => o.split(",").map((a) => parseInt(a)), "strToPos");
  return E.forEach((o) => {
    let a = /* @__PURE__ */ Object.fromEntries(/* @__PURE__ */ Object.entries(o).map((param) => {
      let [e, p2] = param;
      return [
        /* @__PURE__ */ N(p2),
        e
      ];
    })), t = [
      /* @__PURE__ */ N([
        0,
        0
      ])
    ], n2 = {}, c2 = {
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
    for (; t.length > 0; ) {
      let e = /* @__PURE__ */ t.shift();
      if (e) {
        n2[e] = 1;
        let p2 = a[e];
        if (p2) {
          let i = /* @__PURE__ */ u(e);
          Object.entries(c2).forEach((param) => {
            let [r, h] = param;
            let f = /* @__PURE__ */ N([
              i[0] + h[0],
              i[1] + h[1]
            ]), l = a[f];
            l && !n2[f] && (t.push(f), w.push({
              [Ce[r]]: l,
              [Ce[tr(r)]]: p2,
              gap: 1.5 * Gt("iconSize")
            }));
          });
        }
      }
    }
  }), w;
}
m$1(Wr, "getRelativeConstraints");
function Vr(E, w, N, u, param) {
  let { spatialMaps: o } = param;
  return new Promise((a) => {
    let t = /* @__PURE__ */ rh("body").append("div").attr("id", "cy").attr("style", "display:none"), n2 = /* @__PURE__ */ Ft({
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
            "segment-distances": [
              0.5
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
    t.remove(), Ur(N, n2), Pr(E, n2), Gr(w, n2), Xr(u, n2);
    let c2 = /* @__PURE__ */ Hr(o), e = /* @__PURE__ */ Wr(o), p2 = /* @__PURE__ */ n2.layout({
      name: "fcose",
      quality: "proof",
      styleEnabled: false,
      animate: false,
      nodeDimensionsIncludeLabels: false,
      idealEdgeLength(i) {
        let [r, h] = i.connectedNodes(), { parent: f } = Qt(r), { parent: l } = Qt(h);
        return f === l ? 1.5 * Gt("iconSize") : 0.5 * Gt("iconSize");
      },
      edgeElasticity(i) {
        let [r, h] = i.connectedNodes(), { parent: f } = Qt(r), { parent: l } = Qt(h);
        return f === l ? 0.45 : 1e-3;
      },
      alignmentConstraint: c2,
      relativePlacementConstraint: e
    });
    p2.one("layoutstop", () => {
      var _a;
      function i(r, h, f, l) {
        let A, v, { x: y, y: D } = r, { x: F, y: C } = h;
        v = (l - D + (y - f) * (D - C) / (y - F)) / Math.sqrt(1 + Math.pow((D - C) / (y - F), 2)), A = /* @__PURE__ */ Math.sqrt(Math.pow(l - D, 2) + Math.pow(f - y, 2) - Math.pow(v, 2));
        let G = /* @__PURE__ */ Math.sqrt(Math.pow(F - y, 2) + Math.pow(C - D, 2));
        A = A / G;
        let z = (F - y) * (l - D) - (C - D) * (f - y);
        switch (true) {
          case z >= 0:
            z = 1;
            break;
          case z < 0:
            z = -1;
            break;
        }
        let X = (F - y) * (f - y) + (C - D) * (l - D);
        switch (true) {
          case X >= 0:
            X = 1;
            break;
          case X < 0:
            X = -1;
            break;
        }
        return v = Math.abs(v) * z, A = A * X, {
          distances: v,
          weights: A
        };
      }
      m$1(i, "getSegmentWeights"), n2.startBatch();
      for (let r of Object.values(/* @__PURE__ */ n2.edges())) if ((_a = r.data) == null ? void 0 : _a.call(r)) {
        let { x: h, y: f } = r.source().position(), { x: l, y: A } = r.target().position();
        if (h !== l && f !== A) {
          let v = /* @__PURE__ */ r.sourceEndpoint(), y = /* @__PURE__ */ r.targetEndpoint(), { sourceDir: D } = ye(r), [F, C] = Jt(D) ? [
            v.x,
            y.y
          ] : [
            y.x,
            v.y
          ], { weights: G, distances: z } = i(v, y, F, C);
          r.style("segment-distances", z), r.style("segment-weights", G);
        }
      }
      n2.endBatch(), p2.run();
    }), p2.run(), n2.ready((i) => {
      tt.info("Ready", i), a(n2);
    });
  });
}
m$1(Vr, "layoutArchitecture");
var zr = /* @__PURE__ */ m$1(async (E, w, N, u) => {
  let o = u.db, a = /* @__PURE__ */ o.getServices(), t = /* @__PURE__ */ o.getJunctions(), n2 = /* @__PURE__ */ o.getGroups(), c2 = /* @__PURE__ */ o.getEdges(), e = /* @__PURE__ */ o.getDataStructures(), p2 = /* @__PURE__ */ d(w), i = /* @__PURE__ */ p2.append("g");
  i.attr("class", "architecture-edges");
  let r = /* @__PURE__ */ p2.append("g");
  r.attr("class", "architecture-services");
  let h = /* @__PURE__ */ p2.append("g");
  h.attr("class", "architecture-groups"), await ur(o, r, a), gr(o, r, t);
  let f = await Vr(a, t, n2, c2, e);
  await cr(i, f), await fr(h, f), Yr(o, f), zl(void 0, p2, /* @__PURE__ */ Gt("padding"), /* @__PURE__ */ Gt("useMaxWidth"));
}, "draw"), pr = {
  draw: zr
};
var Yi = {
  parser: sr,
  db: _t,
  renderer: pr,
  styles: hr
};
export {
  Yi as diagram
};
