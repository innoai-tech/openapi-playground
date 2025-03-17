import { $ as $t, n as nr, v as v$1 } from "./vendor-min-mermaid~chunk-KTJJRPYF.Ba3UtYz5.chunk.js";
import { d } from "./vendor-min-mermaid~chunk-S67DUUA5.BuO375mV.chunk.js";
import { n } from "./vendor-min-mermaid~chunk-LM6QDVU5.BV2Ps5xm.chunk.js";
import { Q as Qt } from "./vendor-min-mermaid~chunk-I5SP4YIW.DqV4C2Qh.chunk.js";
import { I as Ie } from "./vendor-min-mermaid~chunk-QS5O44OF.L_MBO-WO.chunk.js";
import { t as tt, H as Hl, d as df, i as ih, b as vc, c as Bc, j as go, k as ig } from "./vendor-min-mermaid~chunk-QJLC67TO.Dw34GYds.chunk.js";
import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js";
var J = /* @__PURE__ */ m$1((r, t, a, s, l, i) => {
  t.arrowTypeStart && F(r, "start", t.arrowTypeStart, a, s, l, i), t.arrowTypeEnd && F(r, "end", t.arrowTypeEnd, a, s, l, i);
}, "addEdgeMarkers"), rt = {
  arrow_cross: {
    type: "cross",
    fill: false
  },
  arrow_point: {
    type: "point",
    fill: true
  },
  arrow_barb: {
    type: "barb",
    fill: true
  },
  arrow_circle: {
    type: "circle",
    fill: false
  },
  aggregation: {
    type: "aggregation",
    fill: false
  },
  extension: {
    type: "extension",
    fill: false
  },
  composition: {
    type: "composition",
    fill: true
  },
  dependency: {
    type: "dependency",
    fill: true
  },
  lollipop: {
    type: "lollipop",
    fill: false
  },
  only_one: {
    type: "onlyOne",
    fill: false
  },
  zero_or_one: {
    type: "zeroOrOne",
    fill: false
  },
  one_or_more: {
    type: "oneOrMore",
    fill: false
  },
  zero_or_more: {
    type: "zeroOrMore",
    fill: false
  },
  requirement_arrow: {
    type: "requirement_arrow",
    fill: false
  },
  requirement_contains: {
    type: "requirement_contains",
    fill: false
  }
}, F = /* @__PURE__ */ m$1((r, t, a, s, l, i, n2) => {
  var _a;
  let o = rt[a];
  if (!o) {
    tt.warn(`Unknown arrow type: ${a}`);
    return;
  }
  let e = o.type, f = `${l}_${i}-${e}${t === "start" ? "Start" : "End"}`;
  if (n2 && n2.trim() !== "") {
    let c = /* @__PURE__ */ n2.replace(/[^\dA-Za-z]/g, "_"), m = `${f}_${c}`;
    if (!document.getElementById(m)) {
      let k = /* @__PURE__ */ document.getElementById(f);
      if (k) {
        let u = /* @__PURE__ */ k.cloneNode(true);
        u.id = m, u.querySelectorAll("path, circle, line").forEach((O) => {
          O.setAttribute("stroke", n2), o.fill && O.setAttribute("fill", n2);
        }), (_a = k.parentNode) == null ? void 0 : _a.appendChild(u);
      }
    }
    r.attr(`marker-${t}`, `url(${s}#${m})`);
  } else r.attr(`marker-${t}`, `url(${s}#${f})`);
}, "addEdgeMarker");
var v = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), zt = /* @__PURE__ */ m$1(() => {
  v.clear(), y.clear();
}, "clear"), E = /* @__PURE__ */ m$1((r) => r ? r.reduce((a, s) => a + ";" + s, "") : "", "getLabelStyles"), qt = /* @__PURE__ */ m$1(async (r, t) => {
  let a = /* @__PURE__ */ df(Hl().flowchart.htmlLabels), s = await Qt(r, t.label, {
    style: /* @__PURE__ */ E(t.labelStyle),
    useHtmlLabels: a,
    addSvgBackground: true,
    isNode: false
  });
  tt.info("abc82", t, t.labelType);
  let l = /* @__PURE__ */ r.insert("g").attr("class", "edgeLabel"), i = /* @__PURE__ */ l.insert("g").attr("class", "label");
  i.node().appendChild(s);
  let n2 = /* @__PURE__ */ s.getBBox();
  if (a) {
    let e = s.children[0], p = /* @__PURE__ */ ih(s);
    n2 = /* @__PURE__ */ e.getBoundingClientRect(), p.attr("width", n2.width), p.attr("height", n2.height);
  }
  i.attr("transform", "translate(" + -n2.width / 2 + ", " + -n2.height / 2 + ")"), v.set(t.id, l), t.width = n2.width, t.height = n2.height;
  let o;
  if (t.startLabelLeft) {
    let e = await $t(t.startLabelLeft, /* @__PURE__ */ E(t.labelStyle)), p = /* @__PURE__ */ r.insert("g").attr("class", "edgeTerminals"), f = /* @__PURE__ */ p.insert("g").attr("class", "inner");
    o = /* @__PURE__ */ f.node().appendChild(e);
    let c = /* @__PURE__ */ e.getBBox();
    f.attr("transform", "translate(" + -c.width / 2 + ", " + -c.height / 2 + ")"), y.get(t.id) || y.set(t.id, {}), y.get(t.id).startLeft = p, C(o, t.startLabelLeft);
  }
  if (t.startLabelRight) {
    let e = await $t(t.startLabelRight, /* @__PURE__ */ E(t.labelStyle)), p = /* @__PURE__ */ r.insert("g").attr("class", "edgeTerminals"), f = /* @__PURE__ */ p.insert("g").attr("class", "inner");
    o = /* @__PURE__ */ p.node().appendChild(e), f.node().appendChild(e);
    let c = /* @__PURE__ */ e.getBBox();
    f.attr("transform", "translate(" + -c.width / 2 + ", " + -c.height / 2 + ")"), y.get(t.id) || y.set(t.id, {}), y.get(t.id).startRight = p, C(o, t.startLabelRight);
  }
  if (t.endLabelLeft) {
    let e = await $t(t.endLabelLeft, /* @__PURE__ */ E(t.labelStyle)), p = /* @__PURE__ */ r.insert("g").attr("class", "edgeTerminals"), f = /* @__PURE__ */ p.insert("g").attr("class", "inner");
    o = /* @__PURE__ */ f.node().appendChild(e);
    let c = /* @__PURE__ */ e.getBBox();
    f.attr("transform", "translate(" + -c.width / 2 + ", " + -c.height / 2 + ")"), p.node().appendChild(e), y.get(t.id) || y.set(t.id, {}), y.get(t.id).endLeft = p, C(o, t.endLabelLeft);
  }
  if (t.endLabelRight) {
    let e = await $t(t.endLabelRight, /* @__PURE__ */ E(t.labelStyle)), p = /* @__PURE__ */ r.insert("g").attr("class", "edgeTerminals"), f = /* @__PURE__ */ p.insert("g").attr("class", "inner");
    o = /* @__PURE__ */ f.node().appendChild(e);
    let c = /* @__PURE__ */ e.getBBox();
    f.attr("transform", "translate(" + -c.width / 2 + ", " + -c.height / 2 + ")"), p.node().appendChild(e), y.get(t.id) || y.set(t.id, {}), y.get(t.id).endRight = p, C(o, t.endLabelRight);
  }
  return s;
}, "insertEdgeLabel");
function C(r, t) {
  Hl().flowchart.htmlLabels && r && (r.style.width = t.length * 9 + "px", r.style.height = "12px");
}
m$1(C, "setTerminalWidth");
var Ut = /* @__PURE__ */ m$1((r, t) => {
  tt.debug("Moving label abc88 ", r.id, r.label, /* @__PURE__ */ v.get(r.id), t);
  let a = t.updatedPath ? t.updatedPath : t.originalPath, s = /* @__PURE__ */ Hl(), { subGraphTitleTotalMargin: l } = n(s);
  if (r.label) {
    let i = /* @__PURE__ */ v.get(r.id), n2 = r.x, o = r.y;
    if (a) {
      let e = /* @__PURE__ */ Ie.calcLabelPosition(a);
      tt.debug("Moving label " + r.label + " from (", n2, ",", o, ") to (", e.x, ",", e.y, ") abc88"), t.updatedPath && (n2 = e.x, o = e.y);
    }
    i.attr("transform", `translate(${n2}, ${o + l / 2})`);
  }
  if (r.startLabelLeft) {
    let i = y.get(r.id).startLeft, n2 = r.x, o = r.y;
    if (a) {
      let e = /* @__PURE__ */ Ie.calcTerminalLabelPosition(r.arrowTypeStart ? 10 : 0, "start_left", a);
      n2 = e.x, o = e.y;
    }
    i.attr("transform", `translate(${n2}, ${o})`);
  }
  if (r.startLabelRight) {
    let i = y.get(r.id).startRight, n2 = r.x, o = r.y;
    if (a) {
      let e = /* @__PURE__ */ Ie.calcTerminalLabelPosition(r.arrowTypeStart ? 10 : 0, "start_right", a);
      n2 = e.x, o = e.y;
    }
    i.attr("transform", `translate(${n2}, ${o})`);
  }
  if (r.endLabelLeft) {
    let i = y.get(r.id).endLeft, n2 = r.x, o = r.y;
    if (a) {
      let e = /* @__PURE__ */ Ie.calcTerminalLabelPosition(r.arrowTypeEnd ? 10 : 0, "end_left", a);
      n2 = e.x, o = e.y;
    }
    i.attr("transform", `translate(${n2}, ${o})`);
  }
  if (r.endLabelRight) {
    let i = y.get(r.id).endRight, n2 = r.x, o = r.y;
    if (a) {
      let e = /* @__PURE__ */ Ie.calcTerminalLabelPosition(r.arrowTypeEnd ? 10 : 0, "end_right", a);
      n2 = e.x, o = e.y;
    }
    i.attr("transform", `translate(${n2}, ${o})`);
  }
}, "positionEdgeLabel"), at = /* @__PURE__ */ m$1((r, t) => {
  let a = r.x, s = r.y, l = /* @__PURE__ */ Math.abs(t.x - a), i = /* @__PURE__ */ Math.abs(t.y - s), n2 = r.width / 2, o = r.height / 2;
  return l >= n2 || i >= o;
}, "outsideNode"), et = /* @__PURE__ */ m$1((r, t, a) => {
  tt.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(t)}
  insidePoint : ${JSON.stringify(a)}
  node        : x:${r.x} y:${r.y} w:${r.width} h:${r.height}`);
  let s = r.x, l = r.y, i = /* @__PURE__ */ Math.abs(s - a.x), n2 = r.width / 2, o = a.x < t.x ? n2 - i : n2 + i, e = r.height / 2, p = /* @__PURE__ */ Math.abs(t.y - a.y), f = /* @__PURE__ */ Math.abs(t.x - a.x);
  if (Math.abs(l - t.y) * n2 > Math.abs(s - t.x) * e) {
    let c = a.y < t.y ? t.y - e - l : l - e - t.y;
    o = f * c / p;
    let m = {
      x: a.x < t.x ? a.x + o : a.x - f + o,
      y: a.y < t.y ? a.y + p - c : a.y - p + c
    };
    return o === 0 && (m.x = t.x, m.y = t.y), f === 0 && (m.x = t.x), p === 0 && (m.y = t.y), tt.debug(`abc89 top/bottom calc, Q ${p}, q ${c}, R ${f}, r ${o}`, m), m;
  } else {
    a.x < t.x ? o = t.x - n2 - s : o = s - n2 - t.x;
    let c = p * o / f, m = a.x < t.x ? a.x + f - o : a.x - f + o, k = a.y < t.y ? a.y + c : a.y - c;
    return tt.debug(`sides calc abc89, Q ${p}, q ${c}, R ${f}, r ${o}`, {
      _x: m,
      _y: k
    }), o === 0 && (m = t.x, k = t.y), f === 0 && (m = t.x), p === 0 && (k = t.y), {
      x: m,
      y: k
    };
  }
}, "intersection"), D = /* @__PURE__ */ m$1((r, t) => {
  tt.warn("abc88 cutPathAtIntersect", r, t);
  let a = [], s = r[0], l = false;
  return r.forEach((i) => {
    if (tt.info("abc88 checking point", i, t), !at(t, i) && !l) {
      let n2 = /* @__PURE__ */ et(t, s, i);
      tt.debug("abc88 inside", i, s, n2), tt.debug("abc88 intersection", n2, t);
      let o = false;
      a.forEach((e) => {
        o = o || e.x === n2.x && e.y === n2.y;
      }), a.some((e) => e.x === n2.x && e.y === n2.y) ? tt.warn("abc88 no intersect", n2, a) : a.push(n2), l = true;
    } else tt.warn("abc88 outside", i, s), s = i, l || a.push(i);
  }), tt.debug("returning points", a), a;
}, "cutPathAtIntersect");
function nt(r) {
  let t = [], a = [];
  for (let s = 1; s < r.length - 1; s++) {
    let l = r[s - 1], i = r[s], n2 = r[s + 1];
    (l.x === i.x && i.y === n2.y && Math.abs(i.x - n2.x) > 5 && Math.abs(i.y - l.y) > 5 || l.y === i.y && i.x === n2.x && Math.abs(i.x - l.x) > 5 && Math.abs(i.y - n2.y) > 5) && (t.push(i), a.push(s));
  }
  return {
    cornerPoints: t,
    cornerPointPositions: a
  };
}
m$1(nt, "extractCornerPoints");
var K = /* @__PURE__ */ m$1(function(r, t, a) {
  let s = t.x - r.x, l = t.y - r.y, i = /* @__PURE__ */ Math.sqrt(s * s + l * l), n2 = a / i;
  return {
    x: t.x - n2 * s,
    y: t.y - n2 * l
  };
}, "findAdjacentPoint"), st = /* @__PURE__ */ m$1(function(r) {
  let { cornerPointPositions: t } = nt(r), a = [];
  for (let s = 0; s < r.length; s++) if (t.includes(s)) {
    let l = r[s - 1], i = r[s + 1], n2 = r[s], o = /* @__PURE__ */ K(l, n2, 5), e = /* @__PURE__ */ K(i, n2, 5), p = e.x - o.x, f = e.y - o.y;
    a.push(o);
    let c = Math.sqrt(2) * 2, m = {
      x: n2.x,
      y: n2.y
    };
    if (Math.abs(i.x - l.x) > 10 && Math.abs(i.y - l.y) >= 10) {
      tt.debug("Corner point fixing", /* @__PURE__ */ Math.abs(i.x - l.x), /* @__PURE__ */ Math.abs(i.y - l.y));
      let k = 5;
      n2.x === o.x ? m = {
        x: p < 0 ? o.x - k + c : o.x + k - c,
        y: f < 0 ? o.y - c : o.y + c
      } : m = {
        x: p < 0 ? o.x - c : o.x + c,
        y: f < 0 ? o.y - k + c : o.y + k - c
      };
    } else tt.debug("Corner point skipping fixing", /* @__PURE__ */ Math.abs(i.x - l.x), /* @__PURE__ */ Math.abs(i.y - l.y));
    a.push(m, e);
  } else a.push(r[s]);
  return a;
}, "fixCorners"), At = /* @__PURE__ */ m$1(function(r, t, a, s, l, i, n2) {
  var _a;
  let { handDrawnSeed: o } = Hl(), e = t.points, p = false, f = l;
  var c = i;
  let m = [];
  for (let b in t.cssCompiledStyles) nr(b) || m.push(t.cssCompiledStyles[b]);
  c.intersect && f.intersect && (e = /* @__PURE__ */ e.slice(1, t.points.length - 1), e.unshift(/* @__PURE__ */ f.intersect(e[0])), tt.debug("Last point APA12", t.start, "-->", t.end, e[e.length - 1], c, /* @__PURE__ */ c.intersect(e[e.length - 1])), e.push(/* @__PURE__ */ c.intersect(e[e.length - 1]))), t.toCluster && (tt.info("to cluster abc88", /* @__PURE__ */ a.get(t.toCluster)), e = /* @__PURE__ */ D(t.points, a.get(t.toCluster).node), p = true), t.fromCluster && (tt.debug("from cluster abc88", /* @__PURE__ */ a.get(t.fromCluster), /* @__PURE__ */ JSON.stringify(e, null, 2)), e = /* @__PURE__ */ D(/* @__PURE__ */ e.reverse(), a.get(t.fromCluster).node).reverse(), p = true);
  let k = /* @__PURE__ */ e.filter((b) => !Number.isNaN(b.y));
  k = /* @__PURE__ */ st(k);
  let u = Bc;
  switch (u = go, t.curve) {
    case "linear":
      u = go;
      break;
    case "basis":
      u = Bc;
      break;
    case "cardinal":
      u = ig;
      break;
    default:
      u = Bc;
  }
  let { x: z, y: O } = d(t), P = /* @__PURE__ */ vc().x(z).y(O).curve(u), x;
  switch (t.thickness) {
    case "normal":
      x = "edge-thickness-normal";
      break;
    case "thick":
      x = "edge-thickness-thick";
      break;
    case "invisible":
      x = "edge-thickness-invisible";
      break;
    default:
      x = "edge-thickness-normal";
  }
  switch (t.pattern) {
    case "solid":
      x += " edge-pattern-solid";
      break;
    case "dotted":
      x += " edge-pattern-dotted";
      break;
    case "dashed":
      x += " edge-pattern-dashed";
      break;
    default:
      x += " edge-pattern-solid";
  }
  let w, q = /* @__PURE__ */ P(k), M = Array.isArray(t.style) ? t.style : [
    t.style
  ], U = /* @__PURE__ */ M.find((b) => b == null ? void 0 : b.startsWith("stroke:"));
  if (t.look === "handDrawn") {
    let b = /* @__PURE__ */ v$1.svg(r);
    Object.assign([], k);
    let T = /* @__PURE__ */ b.path(q, {
      roughness: 0.3,
      seed: o
    });
    x += " transition", w = /* @__PURE__ */ ih(T).select("path").attr("id", t.id).attr("class", " " + x + (t.classes ? " " + t.classes : "")).attr("style", M ? M.reduce((W, Y) => W + ";" + Y, "") : "");
    let _ = /* @__PURE__ */ w.attr("d");
    w.attr("d", _), r.node().appendChild(/* @__PURE__ */ w.node());
  } else {
    let b = /* @__PURE__ */ m.join(";"), T = M ? M.reduce((Y, tt2) => Y + tt2 + ";", "") : "", _ = "";
    t.animate && (_ = " edge-animation-fast"), t.animation && (_ = " edge-animation-" + t.animation);
    let W = b ? b + ";" + T + ";" : T;
    w = /* @__PURE__ */ r.append("path").attr("d", q).attr("id", t.id).attr("class", " " + x + (t.classes ? " " + t.classes : "") + (_ ?? "")).attr("style", W), U = (_a = W.match(/stroke:([^;]+)/)) == null ? void 0 : _a[1];
  }
  let $ = "";
  (Hl().flowchart.arrowMarkerAbsolute || Hl().state.arrowMarkerAbsolute) && ($ = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, $ = /* @__PURE__ */ $.replace(/\(/g, "\\(").replace(/\)/g, "\\)")), tt.info("arrowTypeStart", t.arrowTypeStart), tt.info("arrowTypeEnd", t.arrowTypeEnd), J(w, t, $, n2, s, U);
  let X = {};
  return p && (X.updatedPath = e), X.originalPath = t.points, X;
}, "insertEdge");
var ot = /* @__PURE__ */ m$1((r, t, a, s) => {
  t.forEach((l) => {
    Lt[l](r, a, s);
  });
}, "insertMarkers"), it = /* @__PURE__ */ m$1((r, t, a) => {
  tt.trace("Making markers for ", a), r.append("defs").append("marker").attr("id", a + "_" + t + "-extensionStart").attr("class", "marker extension " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 1,7 L18,13 V 1 Z"), r.append("defs").append("marker").attr("id", a + "_" + t + "-extensionEnd").attr("class", "marker extension " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 1,1 V 13 L18,7 Z");
}, "extension"), lt = /* @__PURE__ */ m$1((r, t, a) => {
  r.append("defs").append("marker").attr("id", a + "_" + t + "-compositionStart").attr("class", "marker composition " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), r.append("defs").append("marker").attr("id", a + "_" + t + "-compositionEnd").attr("class", "marker composition " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
}, "composition"), ct = /* @__PURE__ */ m$1((r, t, a) => {
  r.append("defs").append("marker").attr("id", a + "_" + t + "-aggregationStart").attr("class", "marker aggregation " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), r.append("defs").append("marker").attr("id", a + "_" + t + "-aggregationEnd").attr("class", "marker aggregation " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
}, "aggregation"), pt = /* @__PURE__ */ m$1((r, t, a) => {
  r.append("defs").append("marker").attr("id", a + "_" + t + "-dependencyStart").attr("class", "marker dependency " + t).attr("refX", 6).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z"), r.append("defs").append("marker").attr("id", a + "_" + t + "-dependencyEnd").attr("class", "marker dependency " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
}, "dependency"), dt = /* @__PURE__ */ m$1((r, t, a) => {
  r.append("defs").append("marker").attr("id", a + "_" + t + "-lollipopStart").attr("class", "marker lollipop " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6), r.append("defs").append("marker").attr("id", a + "_" + t + "-lollipopEnd").attr("class", "marker lollipop " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6);
}, "lollipop"), ft = /* @__PURE__ */ m$1((r, t, a) => {
  r.append("marker").attr("id", a + "_" + t + "-pointEnd").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), r.append("marker").attr("id", a + "_" + t + "-pointStart").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 4.5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 5 L 10 10 L 10 0 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
}, "point"), ht = /* @__PURE__ */ m$1((r, t, a) => {
  r.append("marker").attr("id", a + "_" + t + "-circleEnd").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 11).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), r.append("marker").attr("id", a + "_" + t + "-circleStart").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", -1).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
}, "circle"), mt = /* @__PURE__ */ m$1((r, t, a) => {
  r.append("marker").attr("id", a + "_" + t + "-crossEnd").attr("class", "marker cross " + t).attr("viewBox", "0 0 11 11").attr("refX", 12).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0"), r.append("marker").attr("id", a + "_" + t + "-crossStart").attr("class", "marker cross " + t).attr("viewBox", "0 0 11 11").attr("refX", -1).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0");
}, "cross"), kt = /* @__PURE__ */ m$1((r, t, a) => {
  r.append("defs").append("marker").attr("id", a + "_" + t + "-barbEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
}, "barb"), yt = /* @__PURE__ */ m$1((r, t, a) => {
  r.append("defs").append("marker").attr("id", a + "_" + t + "-onlyOneStart").attr("class", "marker onlyOne " + t).attr("refX", 0).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("d", "M9,0 L9,18 M15,0 L15,18"), r.append("defs").append("marker").attr("id", a + "_" + t + "-onlyOneEnd").attr("class", "marker onlyOne " + t).attr("refX", 18).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("d", "M3,0 L3,18 M9,0 L9,18");
}, "only_one"), xt = /* @__PURE__ */ m$1((r, t, a) => {
  let s = /* @__PURE__ */ r.append("defs").append("marker").attr("id", a + "_" + t + "-zeroOrOneStart").attr("class", "marker zeroOrOne " + t).attr("refX", 0).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
  s.append("circle").attr("fill", "white").attr("cx", 21).attr("cy", 9).attr("r", 6), s.append("path").attr("d", "M9,0 L9,18");
  let l = /* @__PURE__ */ r.append("defs").append("marker").attr("id", a + "_" + t + "-zeroOrOneEnd").attr("class", "marker zeroOrOne " + t).attr("refX", 30).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
  l.append("circle").attr("fill", "white").attr("cx", 9).attr("cy", 9).attr("r", 6), l.append("path").attr("d", "M21,0 L21,18");
}, "zero_or_one"), bt = /* @__PURE__ */ m$1((r, t, a) => {
  r.append("defs").append("marker").attr("id", a + "_" + t + "-oneOrMoreStart").attr("class", "marker oneOrMore " + t).attr("refX", 18).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("d", "M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27"), r.append("defs").append("marker").attr("id", a + "_" + t + "-oneOrMoreEnd").attr("class", "marker oneOrMore " + t).attr("refX", 27).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("d", "M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18");
}, "one_or_more"), ut = /* @__PURE__ */ m$1((r, t, a) => {
  let s = /* @__PURE__ */ r.append("defs").append("marker").attr("id", a + "_" + t + "-zeroOrMoreStart").attr("class", "marker zeroOrMore " + t).attr("refX", 18).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
  s.append("circle").attr("fill", "white").attr("cx", 48).attr("cy", 18).attr("r", 6), s.append("path").attr("d", "M0,18 Q18,0 36,18 Q18,36 0,18");
  let l = /* @__PURE__ */ r.append("defs").append("marker").attr("id", a + "_" + t + "-zeroOrMoreEnd").attr("class", "marker zeroOrMore " + t).attr("refX", 39).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
  l.append("circle").attr("fill", "white").attr("cx", 9).attr("cy", 18).attr("r", 6), l.append("path").attr("d", "M21,18 Q39,0 57,18 Q39,36 21,18");
}, "zero_or_more"), gt = /* @__PURE__ */ m$1((r, t, a) => {
  r.append("defs").append("marker").attr("id", a + "_" + t + "-requirement_arrowEnd").attr("refX", 20).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").append("path").attr("d", `M0,0
      L20,10
      M20,10
      L0,20`);
}, "requirement_arrow"), wt = /* @__PURE__ */ m$1((r, t, a) => {
  let s = /* @__PURE__ */ r.append("defs").append("marker").attr("id", a + "_" + t + "-requirement_containsEnd").attr("refX", 20).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").append("g");
  s.append("circle").attr("cx", 10).attr("cy", 10).attr("r", 10).attr("fill", "none"), s.append("line").attr("x1", 0).attr("x2", 20).attr("y1", 10).attr("y2", 10), s.append("line").attr("y1", 0).attr("y2", 20).attr("x1", 10).attr("x2", 10);
}, "requirement_contains"), Lt = {
  extension: it,
  composition: lt,
  aggregation: ct,
  dependency: pt,
  lollipop: dt,
  point: ft,
  circle: ht,
  cross: mt,
  barb: kt,
  only_one: yt,
  zero_or_one: xt,
  one_or_more: bt,
  zero_or_more: ut,
  requirement_arrow: gt,
  requirement_contains: wt
}, Nt = ot;
export {
  At as A,
  Nt as N,
  Ut as U,
  qt as q,
  zt as z
};
