import { S as St, D as D$1 } from "./vendor-min-mermaid~chunk-E7A2AWYO.9sfNWd-b.chunk.js";
import { d } from "./vendor-min-mermaid~chunk-S67DUUA5.BuO375mV.chunk.js";
import { n } from "./vendor-min-mermaid~chunk-LM6QDVU5.BV2Ps5xm.chunk.js";
import { Z as Zt } from "./vendor-min-mermaid~chunk-AFC6EC46.CY61scRQ.chunk.js";
import { I as Ie } from "./vendor-min-mermaid~chunk-UENA7NWE.a12nwn0g.chunk.js";
import { t as tt$1, u as uf, W as Wl, r as rh, a as Sc, e as wc } from "./vendor-min-mermaid~chunk-OR2G2HG5.BWDWUMki.chunk.js";
import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js";
var A = /* @__PURE__ */ m$1((r, t, a, o, l) => {
  t.arrowTypeStart && Z(r, "start", t.arrowTypeStart, a, o, l), t.arrowTypeEnd && Z(r, "end", t.arrowTypeEnd, a, o, l);
}, "addEdgeMarkers"), z = {
  arrow_cross: "cross",
  arrow_point: "point",
  arrow_barb: "barb",
  arrow_circle: "circle",
  aggregation: "aggregation",
  extension: "extension",
  composition: "composition",
  dependency: "dependency",
  lollipop: "lollipop"
}, Z = /* @__PURE__ */ m$1((r, t, a, o, l, i) => {
  let s = z[a];
  if (!s) {
    tt$1.warn(`Unknown arrow type: ${a}`);
    return;
  }
  let n2 = t === "start" ? "Start" : "End";
  r.attr(`marker-${t}`, `url(${o}#${l}_${i}-${s}${n2})`);
}, "addEdgeMarker");
var T = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), Et = /* @__PURE__ */ m$1(() => {
  T.clear(), x.clear();
}, "clear"), M = /* @__PURE__ */ m$1((r) => r ? r.reduce((a, o) => a + ";" + o, "") : "", "getLabelStyles"), $t = /* @__PURE__ */ m$1(async (r, t) => {
  let a = /* @__PURE__ */ uf(Wl().flowchart.htmlLabels), o = await Zt(r, t.label, {
    style: /* @__PURE__ */ M(t.labelStyle),
    useHtmlLabels: a,
    addSvgBackground: true,
    isNode: false
  });
  tt$1.info("abc82", t, t.labelType);
  let l = /* @__PURE__ */ r.insert("g").attr("class", "edgeLabel"), i = /* @__PURE__ */ l.insert("g").attr("class", "label");
  i.node().appendChild(o);
  let s = /* @__PURE__ */ o.getBBox();
  if (a) {
    let e = o.children[0], p = /* @__PURE__ */ rh(o);
    s = /* @__PURE__ */ e.getBoundingClientRect(), p.attr("width", s.width), p.attr("height", s.height);
  }
  i.attr("transform", "translate(" + -s.width / 2 + ", " + -s.height / 2 + ")"), T.set(t.id, l), t.width = s.width, t.height = s.height;
  let n2;
  if (t.startLabelLeft) {
    let e = await St(t.startLabelLeft, /* @__PURE__ */ M(t.labelStyle)), p = /* @__PURE__ */ r.insert("g").attr("class", "edgeTerminals"), h = /* @__PURE__ */ p.insert("g").attr("class", "inner");
    n2 = /* @__PURE__ */ h.node().appendChild(e);
    let c = /* @__PURE__ */ e.getBBox();
    h.attr("transform", "translate(" + -c.width / 2 + ", " + -c.height / 2 + ")"), x.get(t.id) || x.set(t.id, {}), x.get(t.id).startLeft = p, $(n2, t.startLabelLeft);
  }
  if (t.startLabelRight) {
    let e = await St(t.startLabelRight, /* @__PURE__ */ M(t.labelStyle)), p = /* @__PURE__ */ r.insert("g").attr("class", "edgeTerminals"), h = /* @__PURE__ */ p.insert("g").attr("class", "inner");
    n2 = /* @__PURE__ */ p.node().appendChild(e), h.node().appendChild(e);
    let c = /* @__PURE__ */ e.getBBox();
    h.attr("transform", "translate(" + -c.width / 2 + ", " + -c.height / 2 + ")"), x.get(t.id) || x.set(t.id, {}), x.get(t.id).startRight = p, $(n2, t.startLabelRight);
  }
  if (t.endLabelLeft) {
    let e = await St(t.endLabelLeft, /* @__PURE__ */ M(t.labelStyle)), p = /* @__PURE__ */ r.insert("g").attr("class", "edgeTerminals"), h = /* @__PURE__ */ p.insert("g").attr("class", "inner");
    n2 = /* @__PURE__ */ h.node().appendChild(e);
    let c = /* @__PURE__ */ e.getBBox();
    h.attr("transform", "translate(" + -c.width / 2 + ", " + -c.height / 2 + ")"), p.node().appendChild(e), x.get(t.id) || x.set(t.id, {}), x.get(t.id).endLeft = p, $(n2, t.endLabelLeft);
  }
  if (t.endLabelRight) {
    let e = await St(t.endLabelRight, /* @__PURE__ */ M(t.labelStyle)), p = /* @__PURE__ */ r.insert("g").attr("class", "edgeTerminals"), h = /* @__PURE__ */ p.insert("g").attr("class", "inner");
    n2 = /* @__PURE__ */ h.node().appendChild(e);
    let c = /* @__PURE__ */ e.getBBox();
    h.attr("transform", "translate(" + -c.width / 2 + ", " + -c.height / 2 + ")"), p.node().appendChild(e), x.get(t.id) || x.set(t.id, {}), x.get(t.id).endRight = p, $(n2, t.endLabelRight);
  }
  return o;
}, "insertEdgeLabel");
function $(r, t) {
  Wl().flowchart.htmlLabels && r && (r.style.width = t.length * 9 + "px", r.style.height = "12px");
}
m$1($, "setTerminalWidth");
var Tt = /* @__PURE__ */ m$1((r, t) => {
  tt$1.debug("Moving label abc88 ", r.id, r.label, /* @__PURE__ */ T.get(r.id), t);
  let a = t.updatedPath ? t.updatedPath : t.originalPath, o = /* @__PURE__ */ Wl(), { subGraphTitleTotalMargin: l } = n(o);
  if (r.label) {
    let i = /* @__PURE__ */ T.get(r.id), s = r.x, n2 = r.y;
    if (a) {
      let e = /* @__PURE__ */ Ie.calcLabelPosition(a);
      tt$1.debug("Moving label " + r.label + " from (", s, ",", n2, ") to (", e.x, ",", e.y, ") abc88"), t.updatedPath && (s = e.x, n2 = e.y);
    }
    i.attr("transform", `translate(${s}, ${n2 + l / 2})`);
  }
  if (r.startLabelLeft) {
    let i = x.get(r.id).startLeft, s = r.x, n2 = r.y;
    if (a) {
      let e = /* @__PURE__ */ Ie.calcTerminalLabelPosition(r.arrowTypeStart ? 10 : 0, "start_left", a);
      s = e.x, n2 = e.y;
    }
    i.attr("transform", `translate(${s}, ${n2})`);
  }
  if (r.startLabelRight) {
    let i = x.get(r.id).startRight, s = r.x, n2 = r.y;
    if (a) {
      let e = /* @__PURE__ */ Ie.calcTerminalLabelPosition(r.arrowTypeStart ? 10 : 0, "start_right", a);
      s = e.x, n2 = e.y;
    }
    i.attr("transform", `translate(${s}, ${n2})`);
  }
  if (r.endLabelLeft) {
    let i = x.get(r.id).endLeft, s = r.x, n2 = r.y;
    if (a) {
      let e = /* @__PURE__ */ Ie.calcTerminalLabelPosition(r.arrowTypeEnd ? 10 : 0, "end_left", a);
      s = e.x, n2 = e.y;
    }
    i.attr("transform", `translate(${s}, ${n2})`);
  }
  if (r.endLabelRight) {
    let i = x.get(r.id).endRight, s = r.x, n2 = r.y;
    if (a) {
      let e = /* @__PURE__ */ Ie.calcTerminalLabelPosition(r.arrowTypeEnd ? 10 : 0, "end_right", a);
      s = e.x, n2 = e.y;
    }
    i.attr("transform", `translate(${s}, ${n2})`);
  }
}, "positionEdgeLabel"), D = /* @__PURE__ */ m$1((r, t) => {
  let a = r.x, o = r.y, l = /* @__PURE__ */ Math.abs(t.x - a), i = /* @__PURE__ */ Math.abs(t.y - o), s = r.width / 2, n2 = r.height / 2;
  return l >= s || i >= n2;
}, "outsideNode"), F = /* @__PURE__ */ m$1((r, t, a) => {
  tt$1.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(t)}
  insidePoint : ${JSON.stringify(a)}
  node        : x:${r.x} y:${r.y} w:${r.width} h:${r.height}`);
  let o = r.x, l = r.y, i = /* @__PURE__ */ Math.abs(o - a.x), s = r.width / 2, n2 = a.x < t.x ? s - i : s + i, e = r.height / 2, p = /* @__PURE__ */ Math.abs(t.y - a.y), h = /* @__PURE__ */ Math.abs(t.x - a.x);
  if (Math.abs(l - t.y) * s > Math.abs(o - t.x) * e) {
    let c = a.y < t.y ? t.y - e - l : l - e - t.y;
    n2 = h * c / p;
    let m = {
      x: a.x < t.x ? a.x + n2 : a.x - h + n2,
      y: a.y < t.y ? a.y + p - c : a.y - p + c
    };
    return n2 === 0 && (m.x = t.x, m.y = t.y), h === 0 && (m.x = t.x), p === 0 && (m.y = t.y), tt$1.debug(`abc89 top/bottom calc, Q ${p}, q ${c}, R ${h}, r ${n2}`, m), m;
  } else {
    a.x < t.x ? n2 = t.x - s - o : n2 = o - s - t.x;
    let c = p * n2 / h, m = a.x < t.x ? a.x + h - n2 : a.x - h + n2, y = a.y < t.y ? a.y + c : a.y - c;
    return tt$1.debug(`sides calc abc89, Q ${p}, q ${c}, R ${h}, r ${n2}`, {
      _x: m,
      _y: y
    }), n2 === 0 && (m = t.x, y = t.y), h === 0 && (m = t.x), p === 0 && (y = t.y), {
      x: m,
      y
    };
  }
}, "intersection"), q = /* @__PURE__ */ m$1((r, t) => {
  tt$1.warn("abc88 cutPathAtIntersect", r, t);
  let a = [], o = r[0], l = false;
  return r.forEach((i) => {
    if (tt$1.info("abc88 checking point", i, t), !D(t, i) && !l) {
      let s = /* @__PURE__ */ F(t, o, i);
      tt$1.debug("abc88 inside", i, o, s), tt$1.debug("abc88 intersection", s, t);
      let n2 = false;
      a.forEach((e) => {
        n2 = n2 || e.x === s.x && e.y === s.y;
      }), a.some((e) => e.x === s.x && e.y === s.y) ? tt$1.warn("abc88 no intersect", s, a) : a.push(s), l = true;
    } else tt$1.warn("abc88 outside", i, o), o = i, l || a.push(i);
  }), tt$1.debug("returning points", a), a;
}, "cutPathAtIntersect");
function K(r) {
  let t = [], a = [];
  for (let o = 1; o < r.length - 1; o++) {
    let l = r[o - 1], i = r[o], s = r[o + 1];
    (l.x === i.x && i.y === s.y && Math.abs(i.x - s.x) > 5 && Math.abs(i.y - l.y) > 5 || l.y === i.y && i.x === s.x && Math.abs(i.x - l.x) > 5 && Math.abs(i.y - s.y) > 5) && (t.push(i), a.push(o));
  }
  return {
    cornerPoints: t,
    cornerPointPositions: a
  };
}
m$1(K, "extractCornerPoints");
var N = /* @__PURE__ */ m$1(function(r, t, a) {
  let o = t.x - r.x, l = t.y - r.y, i = /* @__PURE__ */ Math.sqrt(o * o + l * l), s = a / i;
  return {
    x: t.x - s * o,
    y: t.y - s * l
  };
}, "findAdjacentPoint"), P = /* @__PURE__ */ m$1(function(r) {
  let { cornerPointPositions: t } = K(r), a = [];
  for (let o = 0; o < r.length; o++) if (t.includes(o)) {
    let l = r[o - 1], i = r[o + 1], s = r[o], n2 = /* @__PURE__ */ N(l, s, 5), e = /* @__PURE__ */ N(i, s, 5), p = e.x - n2.x, h = e.y - n2.y;
    a.push(n2);
    let c = Math.sqrt(2) * 2, m = {
      x: s.x,
      y: s.y
    };
    if (Math.abs(i.x - l.x) > 10 && Math.abs(i.y - l.y) >= 10) {
      tt$1.debug("Corner point fixing", /* @__PURE__ */ Math.abs(i.x - l.x), /* @__PURE__ */ Math.abs(i.y - l.y));
      let y = 5;
      s.x === n2.x ? m = {
        x: p < 0 ? n2.x - y + c : n2.x + y - c,
        y: h < 0 ? n2.y - c : n2.y + c
      } : m = {
        x: p < 0 ? n2.x - c : n2.x + c,
        y: h < 0 ? n2.y - y + c : n2.y + y - c
      };
    } else tt$1.debug("Corner point skipping fixing", /* @__PURE__ */ Math.abs(i.x - l.x), /* @__PURE__ */ Math.abs(i.y - l.y));
    a.push(m, e);
  } else a.push(r[o]);
  return a;
}, "fixCorners"), vt = /* @__PURE__ */ m$1(function(r, t, a, o, l, i, s) {
  let { handDrawnSeed: n2 } = Wl(), e = t.points, p = false, h = l;
  var c = i;
  c.intersect && h.intersect && (e = /* @__PURE__ */ e.slice(1, t.points.length - 1), e.unshift(/* @__PURE__ */ h.intersect(e[0])), tt$1.debug("Last point APA12", t.start, "-->", t.end, e[e.length - 1], c, /* @__PURE__ */ c.intersect(e[e.length - 1])), e.push(/* @__PURE__ */ c.intersect(e[e.length - 1]))), t.toCluster && (tt$1.info("to cluster abc88", /* @__PURE__ */ a.get(t.toCluster)), e = /* @__PURE__ */ q(t.points, a.get(t.toCluster).node), p = true), t.fromCluster && (tt$1.debug("from cluster abc88", /* @__PURE__ */ a.get(t.fromCluster), /* @__PURE__ */ JSON.stringify(e, null, 2)), e = /* @__PURE__ */ q(/* @__PURE__ */ e.reverse(), a.get(t.fromCluster).node).reverse(), p = true);
  let m = /* @__PURE__ */ e.filter((u) => !Number.isNaN(u.y));
  m = /* @__PURE__ */ P(m);
  let y = wc;
  t.curve && (y = t.curve);
  let { x: G, y: V } = d(t), j = /* @__PURE__ */ Sc().x(G).y(V).curve(y), k;
  switch (t.thickness) {
    case "normal":
      k = "edge-thickness-normal";
      break;
    case "thick":
      k = "edge-thickness-thick";
      break;
    case "invisible":
      k = "edge-thickness-invisible";
      break;
    default:
      k = "edge-thickness-normal";
  }
  switch (t.pattern) {
    case "solid":
      k += " edge-pattern-solid";
      break;
    case "dotted":
      k += " edge-pattern-dotted";
      break;
    case "dashed":
      k += " edge-pattern-dashed";
      break;
    default:
      k += " edge-pattern-solid";
  }
  let g, B = /* @__PURE__ */ j(m), S = Array.isArray(t.style) ? t.style : [
    t.style
  ];
  if (t.look === "handDrawn") {
    let u = /* @__PURE__ */ D$1.svg(r);
    Object.assign([], m);
    let _ = /* @__PURE__ */ u.path(B, {
      roughness: 0.3,
      seed: n2
    });
    k += " transition", g = /* @__PURE__ */ rh(_).select("path").attr("id", t.id).attr("class", " " + k + (t.classes ? " " + t.classes : "")).attr("style", S ? S.reduce((J, Q) => J + ";" + Q, "") : "");
    let I = /* @__PURE__ */ g.attr("d");
    g.attr("d", I), r.node().appendChild(/* @__PURE__ */ g.node());
  } else g = /* @__PURE__ */ r.append("path").attr("d", B).attr("id", t.id).attr("class", " " + k + (t.classes ? " " + t.classes : "")).attr("style", S ? S.reduce((u, _) => u + ";" + _, "") : "");
  let E = "";
  (Wl().flowchart.arrowMarkerAbsolute || Wl().state.arrowMarkerAbsolute) && (E = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, E = /* @__PURE__ */ E.replace(/\(/g, "\\(").replace(/\)/g, "\\)")), tt$1.info("arrowTypeStart", t.arrowTypeStart), tt$1.info("arrowTypeEnd", t.arrowTypeEnd), A(g, t, E, s, o);
  let v = {};
  return p && (v.updatedPath = e), v.originalPath = t.points, v;
}, "insertEdge");
var tt = /* @__PURE__ */ m$1((r, t, a, o) => {
  t.forEach((l) => {
    pt[l](r, a, o);
  });
}, "insertMarkers"), rt = /* @__PURE__ */ m$1((r, t, a) => {
  tt$1.trace("Making markers for ", a), r.append("defs").append("marker").attr("id", a + "_" + t + "-extensionStart").attr("class", "marker extension " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 1,7 L18,13 V 1 Z"), r.append("defs").append("marker").attr("id", a + "_" + t + "-extensionEnd").attr("class", "marker extension " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 1,1 V 13 L18,7 Z");
}, "extension"), at = /* @__PURE__ */ m$1((r, t, a) => {
  r.append("defs").append("marker").attr("id", a + "_" + t + "-compositionStart").attr("class", "marker composition " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), r.append("defs").append("marker").attr("id", a + "_" + t + "-compositionEnd").attr("class", "marker composition " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
}, "composition"), et = /* @__PURE__ */ m$1((r, t, a) => {
  r.append("defs").append("marker").attr("id", a + "_" + t + "-aggregationStart").attr("class", "marker aggregation " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), r.append("defs").append("marker").attr("id", a + "_" + t + "-aggregationEnd").attr("class", "marker aggregation " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
}, "aggregation"), st = /* @__PURE__ */ m$1((r, t, a) => {
  r.append("defs").append("marker").attr("id", a + "_" + t + "-dependencyStart").attr("class", "marker dependency " + t).attr("refX", 6).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z"), r.append("defs").append("marker").attr("id", a + "_" + t + "-dependencyEnd").attr("class", "marker dependency " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
}, "dependency"), nt = /* @__PURE__ */ m$1((r, t, a) => {
  r.append("defs").append("marker").attr("id", a + "_" + t + "-lollipopStart").attr("class", "marker lollipop " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6), r.append("defs").append("marker").attr("id", a + "_" + t + "-lollipopEnd").attr("class", "marker lollipop " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6);
}, "lollipop"), ot = /* @__PURE__ */ m$1((r, t, a) => {
  r.append("marker").attr("id", a + "_" + t + "-pointEnd").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), r.append("marker").attr("id", a + "_" + t + "-pointStart").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 4.5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 5 L 10 10 L 10 0 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
}, "point"), it = /* @__PURE__ */ m$1((r, t, a) => {
  r.append("marker").attr("id", a + "_" + t + "-circleEnd").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 11).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), r.append("marker").attr("id", a + "_" + t + "-circleStart").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", -1).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
}, "circle"), lt = /* @__PURE__ */ m$1((r, t, a) => {
  r.append("marker").attr("id", a + "_" + t + "-crossEnd").attr("class", "marker cross " + t).attr("viewBox", "0 0 11 11").attr("refX", 12).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0"), r.append("marker").attr("id", a + "_" + t + "-crossStart").attr("class", "marker cross " + t).attr("viewBox", "0 0 11 11").attr("refX", -1).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0");
}, "cross"), ct = /* @__PURE__ */ m$1((r, t, a) => {
  r.append("defs").append("marker").attr("id", a + "_" + t + "-barbEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
}, "barb"), pt = {
  extension: rt,
  composition: at,
  aggregation: et,
  dependency: st,
  lollipop: nt,
  point: ot,
  circle: it,
  cross: lt,
  barb: ct
}, Ht = tt;
export {
  $t as $,
  Et as E,
  Ht as H,
  Tt as T,
  vt as v
};
