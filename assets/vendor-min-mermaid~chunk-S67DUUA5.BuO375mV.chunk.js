import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js";
var o = {
  aggregation: 18,
  extension: 18,
  composition: 18,
  dependency: 6,
  lollipop: 13.5,
  arrow_point: 4
};
function b(n, a) {
  if (n === void 0 || a === void 0) return {
    angle: 0,
    deltaX: 0,
    deltaY: 0
  };
  n = /* @__PURE__ */ t(n), a = /* @__PURE__ */ t(a);
  let [c, e] = [
    n.x,
    n.y
  ], [l, f] = [
    a.x,
    a.y
  ], s = l - c, m = f - e;
  return {
    angle: /* @__PURE__ */ Math.atan(m / s),
    deltaX: s,
    deltaY: m
  };
}
m$1(b, "calculateDeltaAndAngle");
var t = /* @__PURE__ */ m$1((n) => Array.isArray(n) ? {
  x: n[0],
  y: n[1]
} : n, "pointTransformer"), d = /* @__PURE__ */ m$1((n) => ({
  x: /* @__PURE__ */ m$1(function(a, c, e) {
    let l = 0, f = t(e[0]).x < t(e[e.length - 1]).x ? "left" : "right";
    if (c === 0 && Object.hasOwn(o, n.arrowTypeStart)) {
      let { angle: r, deltaX: h } = b(e[0], e[1]);
      l = o[n.arrowTypeStart] * Math.cos(r) * (h >= 0 ? 1 : -1);
    } else if (c === e.length - 1 && Object.hasOwn(o, n.arrowTypeEnd)) {
      let { angle: r, deltaX: h } = b(e[e.length - 1], e[e.length - 2]);
      l = o[n.arrowTypeEnd] * Math.cos(r) * (h >= 0 ? 1 : -1);
    }
    let s = /* @__PURE__ */ Math.abs(t(a).x - t(e[e.length - 1]).x), m = /* @__PURE__ */ Math.abs(t(a).y - t(e[e.length - 1]).y), i = /* @__PURE__ */ Math.abs(t(a).x - t(e[0]).x), x = /* @__PURE__ */ Math.abs(t(a).y - t(e[0]).y), u = o[n.arrowTypeStart], y = o[n.arrowTypeEnd], g = 1;
    if (s < y && s > 0 && m < y) {
      let r = y + g - s;
      r *= f === "right" ? -1 : 1, l -= r;
    }
    if (i < u && i > 0 && x < u) {
      let r = u + g - i;
      r *= f === "right" ? -1 : 1, l += r;
    }
    return t(a).x + l;
  }, "x"),
  y: /* @__PURE__ */ m$1(function(a, c, e) {
    let l = 0, f = t(e[0]).y < t(e[e.length - 1]).y ? "down" : "up";
    if (c === 0 && Object.hasOwn(o, n.arrowTypeStart)) {
      let { angle: r, deltaY: h } = b(e[0], e[1]);
      l = o[n.arrowTypeStart] * Math.abs(/* @__PURE__ */ Math.sin(r)) * (h >= 0 ? 1 : -1);
    } else if (c === e.length - 1 && Object.hasOwn(o, n.arrowTypeEnd)) {
      let { angle: r, deltaY: h } = b(e[e.length - 1], e[e.length - 2]);
      l = o[n.arrowTypeEnd] * Math.abs(/* @__PURE__ */ Math.sin(r)) * (h >= 0 ? 1 : -1);
    }
    let s = /* @__PURE__ */ Math.abs(t(a).y - t(e[e.length - 1]).y), m = /* @__PURE__ */ Math.abs(t(a).x - t(e[e.length - 1]).x), i = /* @__PURE__ */ Math.abs(t(a).y - t(e[0]).y), x = /* @__PURE__ */ Math.abs(t(a).x - t(e[0]).x), u = o[n.arrowTypeStart], y = o[n.arrowTypeEnd], g = 1;
    if (s < y && s > 0 && m < y) {
      let r = y + g - s;
      r *= f === "up" ? -1 : 1, l -= r;
    }
    if (i < u && i > 0 && x < u) {
      let r = u + g - i;
      r *= f === "up" ? -1 : 1, l += r;
    }
    return t(a).y + l;
  }, "y")
}), "getLineFunctionsWithOffset");
export {
  d
};
