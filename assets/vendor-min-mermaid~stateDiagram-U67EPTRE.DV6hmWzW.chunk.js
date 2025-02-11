import { a as ar, r as rr, I as Is } from "./vendor-min-mermaid~chunk-LDJ5YOBB.CskAQYsZ.chunk.js";
import { f as fn } from "./vendor-min-mermaid~chunk-FASC7IG4.CRggc87b.chunk.js";
import { m } from "./vendor-min-mermaid~chunk-ZN7TASNU.DiqFmblu.chunk.js";
import { I as Ie } from "./vendor-min-mermaid~chunk-UENA7NWE.DfvA4zio.chunk.js";
import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js";
import { W as Wl, r as rh, t as tt$1, C as Cf, m as mC, c as Sc, e as wc } from "./vendor-min-mermaid~chunk-OR2G2HG5.D15VT8Rm.chunk.js";
var A = {}, Z = /* @__PURE__ */ m$1((e, n) => {
  A[e] = n;
}, "set"), K = /* @__PURE__ */ m$1((e) => A[e], "get"), Y = /* @__PURE__ */ m$1(() => Object.keys(A), "keys"), Q = /* @__PURE__ */ m$1(() => Y().length, "size"), v = {
  get: K,
  set: Z,
  keys: Y,
  size: Q
};
var V = /* @__PURE__ */ m$1((e) => e.append("circle").attr("class", "start-state").attr("r", Wl().state.sizeUnit).attr("cx", Wl().state.padding + Wl().state.sizeUnit).attr("cy", Wl().state.padding + Wl().state.sizeUnit), "drawStartState"), D = /* @__PURE__ */ m$1((e) => e.append("line").style("stroke", "grey").style("stroke-dasharray", "3").attr("x1", Wl().state.textHeight).attr("class", "divider").attr("x2", Wl().state.textHeight * 2).attr("y1", 0).attr("y2", 0), "drawDivider"), tt = /* @__PURE__ */ m$1((e, n) => {
  let s = /* @__PURE__ */ e.append("text").attr("x", 2 * Wl().state.padding).attr("y", Wl().state.textHeight + 2 * Wl().state.padding).attr("font-size", Wl().state.fontSize).attr("class", "state-title").text(n.id), d = /* @__PURE__ */ s.node().getBBox();
  return e.insert("rect", ":first-child").attr("x", Wl().state.padding).attr("y", Wl().state.padding).attr("width", d.width + 2 * Wl().state.padding).attr("height", d.height + 2 * Wl().state.padding).attr("rx", Wl().state.radius), s;
}, "drawSimpleState"), et = /* @__PURE__ */ m$1((e, n) => {
  let s = /* @__PURE__ */ m$1(function(p, y, w) {
    let k = /* @__PURE__ */ p.append("tspan").attr("x", 2 * Wl().state.padding).text(y);
    w || k.attr("dy", Wl().state.textHeight);
  }, "addTspan"), r = /* @__PURE__ */ e.append("text").attr("x", 2 * Wl().state.padding).attr("y", Wl().state.textHeight + 1.3 * Wl().state.padding).attr("font-size", Wl().state.fontSize).attr("class", "state-title").text(n.descriptions[0]).node().getBBox(), h = r.height, x = /* @__PURE__ */ e.append("text").attr("x", Wl().state.padding).attr("y", h + Wl().state.padding * 0.4 + Wl().state.dividerMargin + Wl().state.textHeight).attr("class", "state-description"), i = true, o = true;
  n.descriptions.forEach(function(p) {
    i || (s(x, p, o), o = false), i = false;
  });
  let m2 = /* @__PURE__ */ e.append("line").attr("x1", Wl().state.padding).attr("y1", Wl().state.padding + h + Wl().state.dividerMargin / 2).attr("y2", Wl().state.padding + h + Wl().state.dividerMargin / 2).attr("class", "descr-divider"), f = /* @__PURE__ */ x.node().getBBox(), c = /* @__PURE__ */ Math.max(f.width, r.width);
  return m2.attr("x2", c + 3 * Wl().state.padding), e.insert("rect", ":first-child").attr("x", Wl().state.padding).attr("y", Wl().state.padding).attr("width", c + 2 * Wl().state.padding).attr("height", f.height + h + 2 * Wl().state.padding).attr("rx", Wl().state.radius), e;
}, "drawDescrState"), $ = /* @__PURE__ */ m$1((e, n, s) => {
  let d = Wl().state.padding, r = 2 * Wl().state.padding, h = /* @__PURE__ */ e.node().getBBox(), x = h.width, i = h.x, o = /* @__PURE__ */ e.append("text").attr("x", 0).attr("y", Wl().state.titleShift).attr("font-size", Wl().state.fontSize).attr("class", "state-title").text(n.id), f = o.node().getBBox().width + r, c = /* @__PURE__ */ Math.max(f, x);
  c === x && (c = c + r);
  let p, y = /* @__PURE__ */ e.node().getBBox();
  n.doc, p = i - d, f > x && (p = (x - c) / 2 + d), Math.abs(i - y.x) < d && f > x && (p = i - (f - x) / 2);
  let w = 1 - Wl().state.textHeight;
  return e.insert("rect", ":first-child").attr("x", p).attr("y", w).attr("class", s ? "alt-composit" : "composit").attr("width", c).attr("height", y.height + Wl().state.textHeight + Wl().state.titleShift + 1).attr("rx", "0"), o.attr("x", p + d), f <= x && o.attr("x", i + (c - r) / 2 - f / 2 + d), e.insert("rect", ":first-child").attr("x", p).attr("y", Wl().state.titleShift - Wl().state.textHeight - Wl().state.padding).attr("width", c).attr("height", Wl().state.textHeight * 3).attr("rx", Wl().state.radius), e.insert("rect", ":first-child").attr("x", p).attr("y", Wl().state.titleShift - Wl().state.textHeight - Wl().state.padding).attr("width", c).attr("height", y.height + 3 + 2 * Wl().state.textHeight).attr("rx", Wl().state.radius), e;
}, "addTitleAndBox"), it = /* @__PURE__ */ m$1((e) => (e.append("circle").attr("class", "end-state-outer").attr("r", Wl().state.sizeUnit + Wl().state.miniPadding).attr("cx", Wl().state.padding + Wl().state.sizeUnit + Wl().state.miniPadding).attr("cy", Wl().state.padding + Wl().state.sizeUnit + Wl().state.miniPadding), e.append("circle").attr("class", "end-state-inner").attr("r", Wl().state.sizeUnit).attr("cx", Wl().state.padding + Wl().state.sizeUnit + 2).attr("cy", Wl().state.padding + Wl().state.sizeUnit + 2)), "drawEndState"), nt = /* @__PURE__ */ m$1((e, n) => {
  let s = Wl().state.forkWidth, d = Wl().state.forkHeight;
  if (n.parentId) {
    let r = s;
    s = d, d = r;
  }
  return e.append("rect").style("stroke", "black").style("fill", "black").attr("width", s).attr("height", d).attr("x", Wl().state.padding).attr("y", Wl().state.padding);
}, "drawForkJoinState");
var at = /* @__PURE__ */ m$1((e, n, s, d) => {
  let r = 0, h = /* @__PURE__ */ d.append("text");
  h.style("text-anchor", "start"), h.attr("class", "noteText");
  let x = /* @__PURE__ */ e.replace(/\r\n/g, "<br/>");
  x = /* @__PURE__ */ x.replace(/\n/g, "<br/>");
  let i = /* @__PURE__ */ x.split(mC.lineBreakRegex), o = 1.25 * Wl().state.noteMargin;
  for (let m2 of i) {
    let f = /* @__PURE__ */ m2.trim();
    if (f.length > 0) {
      let c = /* @__PURE__ */ h.append("tspan");
      if (c.text(f), o === 0) {
        let p = /* @__PURE__ */ c.node().getBBox();
        o += p.height;
      }
      r += o, c.attr("x", n + Wl().state.noteMargin), c.attr("y", s + r + 1.25 * Wl().state.noteMargin);
    }
  }
  return {
    textWidth: h.node().getBBox().width,
    textHeight: r
  };
}, "_drawLongText"), rt = /* @__PURE__ */ m$1((e, n) => {
  n.attr("class", "state-note");
  let s = /* @__PURE__ */ n.append("rect").attr("x", 0).attr("y", Wl().state.padding), d = /* @__PURE__ */ n.append("g"), { textWidth: r, textHeight: h } = at(e, 0, 0, d);
  return s.attr("height", h + 2 * Wl().state.noteMargin), s.attr("width", r + Wl().state.noteMargin * 2), s;
}, "drawNote"), C = /* @__PURE__ */ m$1(function(e, n) {
  let s = n.id, d = {
    id: s,
    label: n.id,
    width: 0,
    height: 0
  }, r = /* @__PURE__ */ e.append("g").attr("id", s).attr("class", "stateGroup");
  n.type === "start" && V(r), n.type === "end" && it(r), (n.type === "fork" || n.type === "join") && nt(r, n), n.type === "note" && rt(n.note.text, r), n.type === "divider" && D(r), n.type === "default" && n.descriptions.length === 0 && tt(r, n), n.type === "default" && n.descriptions.length > 0 && et(r, n);
  let h = /* @__PURE__ */ r.node().getBBox();
  return d.width = h.width + 2 * Wl().state.padding, d.height = h.height + 2 * Wl().state.padding, v.set(s, d), d;
}, "drawState"), I = 0, _ = /* @__PURE__ */ m$1(function(e, n, s) {
  let d = /* @__PURE__ */ m$1(function(o) {
    switch (o) {
      case rr.relationType.AGGREGATION:
        return "aggregation";
      case rr.relationType.EXTENSION:
        return "extension";
      case rr.relationType.COMPOSITION:
        return "composition";
      case rr.relationType.DEPENDENCY:
        return "dependency";
    }
  }, "getRelationType");
  n.points = /* @__PURE__ */ n.points.filter((o) => !Number.isNaN(o.y));
  let r = n.points, h = /* @__PURE__ */ Sc().x(function(o) {
    return o.x;
  }).y(function(o) {
    return o.y;
  }).curve(wc), x = /* @__PURE__ */ e.append("path").attr("d", /* @__PURE__ */ h(r)).attr("id", "edge" + I).attr("class", "transition"), i = "";
  if (Wl().state.arrowMarkerAbsolute && (i = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, i = /* @__PURE__ */ i.replace(/\(/g, "\\("), i = /* @__PURE__ */ i.replace(/\)/g, "\\)")), x.attr("marker-end", "url(" + i + "#" + d(rr.relationType.DEPENDENCY) + "End)"), s.title !== void 0) {
    let o = /* @__PURE__ */ e.append("g").attr("class", "stateLabel"), { x: m2, y: f } = Ie.calcLabelPosition(n.points), c = /* @__PURE__ */ mC.getRows(s.title), p = 0, y = [], w = 0, k = 0;
    for (let a = 0; a <= c.length; a++) {
      let u = /* @__PURE__ */ o.append("text").attr("text-anchor", "middle").text(c[a]).attr("x", m2).attr("y", f + p), l = /* @__PURE__ */ u.node().getBBox();
      w = /* @__PURE__ */ Math.max(w, l.width), k = /* @__PURE__ */ Math.min(k, l.x), tt$1.info(l.x, m2, f + p), p === 0 && (p = u.node().getBBox().height, tt$1.info("Title height", p, f)), y.push(u);
    }
    let M = p * c.length;
    if (c.length > 1) {
      let a = (c.length - 1) * p * 0.5;
      y.forEach((u, l) => u.attr("y", f + l * p - a)), M = p * c.length;
    }
    let H = /* @__PURE__ */ o.node().getBBox();
    o.insert("rect", ":first-child").attr("class", "box").attr("x", m2 - w / 2 - Wl().state.padding / 2).attr("y", f - M / 2 - Wl().state.padding / 2 - 3.5).attr("width", w + Wl().state.padding).attr("height", M + Wl().state.padding), tt$1.info(H);
  }
  I++;
}, "drawEdge");
var S, G = {}, ot = /* @__PURE__ */ m$1(function() {
}, "setConf"), st = /* @__PURE__ */ m$1(function(e) {
  e.append("defs").append("marker").attr("id", "dependencyEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
}, "insertMarkers"), dt = /* @__PURE__ */ m$1(function(e, n, s, d) {
  S = Wl().state;
  let r = Wl().securityLevel, h;
  r === "sandbox" && (h = /* @__PURE__ */ rh("#i" + n));
  let x = r === "sandbox" ? rh(h.nodes()[0].contentDocument.body) : rh("body"), i = r === "sandbox" ? h.nodes()[0].contentDocument : document;
  tt$1.debug("Rendering diagram " + e);
  let o = /* @__PURE__ */ x.select(`[id='${n}']`);
  st(o);
  let m2 = /* @__PURE__ */ d.db.getRootDoc();
  j(m2, o, void 0, false, x, i, d);
  let f = S.padding, c = /* @__PURE__ */ o.node().getBBox(), p = c.width + f * 2, y = c.height + f * 2, w = p * 1.75;
  Cf(o, y, w, S.useMaxWidth), o.attr("viewBox", `${c.x - S.padding}  ${c.y - S.padding} ` + p + " " + y);
}, "draw"), ct = /* @__PURE__ */ m$1((e) => e ? e.length * S.fontSizeFactor : 1, "getLabelWidth"), j = m$1((e, n, s, d, r, h, x) => {
  let i = new m({
    compound: true,
    multigraph: true
  }), o, m$12 = true;
  for (o = 0; o < e.length; o++) if (e[o].stmt === "relation") {
    m$12 = false;
    break;
  }
  s ? i.setGraph({
    rankdir: "LR",
    multigraph: true,
    compound: true,
    ranker: "tight-tree",
    ranksep: m$12 ? 1 : S.edgeLengthFactor,
    nodeSep: m$12 ? 1 : 50,
    isMultiGraph: true
  }) : i.setGraph({
    rankdir: "TB",
    multigraph: true,
    compound: true,
    ranksep: m$12 ? 1 : S.edgeLengthFactor,
    nodeSep: m$12 ? 1 : 50,
    ranker: "tight-tree",
    isMultiGraph: true
  }), i.setDefaultEdgeLabel(function() {
    return {};
  }), x.db.extract(e);
  let f = /* @__PURE__ */ x.db.getStates(), c = /* @__PURE__ */ x.db.getRelations(), p = /* @__PURE__ */ Object.keys(f), y = true;
  for (let a of p) {
    let u = f[a];
    s && (u.parentId = s);
    let l;
    if (u.doc) {
      let B = /* @__PURE__ */ n.append("g").attr("id", u.id).attr("class", "stateGroup");
      if (l = /* @__PURE__ */ j(u.doc, B, u.id, !d, r, h, x), y) {
        B = /* @__PURE__ */ $(B, u, d);
        let E = /* @__PURE__ */ B.node().getBBox();
        l.width = E.width, l.height = E.height + S.padding / 2, G[u.id] = {
          y: S.compositTitleSize
        };
      }
    } else l = /* @__PURE__ */ C(n, u, i);
    if (u.note) {
      let B = {
        descriptions: [],
        id: u.id + "-note",
        note: u.note,
        type: "note"
      }, E = /* @__PURE__ */ C(n, B, i);
      u.note.position === "left of" ? (i.setNode(l.id + "-note", E), i.setNode(l.id, l)) : (i.setNode(l.id, l), i.setNode(l.id + "-note", E)), i.setParent(l.id, l.id + "-group"), i.setParent(l.id + "-note", l.id + "-group");
    } else i.setNode(l.id, l);
  }
  tt$1.debug("Count=", /* @__PURE__ */ i.nodeCount(), i);
  let w = 0;
  c.forEach(function(a) {
    w++, tt$1.debug("Setting edge", a), i.setEdge(a.id1, a.id2, {
      relation: a,
      width: /* @__PURE__ */ ct(a.title),
      height: S.labelHeight * mC.getRows(a.title).length,
      labelpos: "c"
    }, "id" + w);
  }), fn(i), tt$1.debug("Graph after layout", /* @__PURE__ */ i.nodes());
  let k = /* @__PURE__ */ n.node();
  i.nodes().forEach(function(a) {
    a !== void 0 && i.node(a) !== void 0 ? (tt$1.warn("Node " + a + ": " + JSON.stringify(/* @__PURE__ */ i.node(a))), r.select("#" + k.id + " #" + a).attr("transform", "translate(" + (i.node(a).x - i.node(a).width / 2) + "," + (i.node(a).y + (G[a] ? G[a].y : 0) - i.node(a).height / 2) + " )"), r.select("#" + k.id + " #" + a).attr("data-x-shift", i.node(a).x - i.node(a).width / 2), h.querySelectorAll("#" + k.id + " #" + a + " .divider").forEach((l) => {
      let B = l.parentElement, E = 0, T = 0;
      B && (B.parentElement && (E = B.parentElement.getBBox().width), T = /* @__PURE__ */ parseInt(/* @__PURE__ */ B.getAttribute("data-x-shift"), 10), Number.isNaN(T) && (T = 0)), l.setAttribute("x1", 0 - T + 8), l.setAttribute("x2", E - T - 8);
    })) : tt$1.debug("No Node " + a + ": " + JSON.stringify(/* @__PURE__ */ i.node(a)));
  });
  let M = /* @__PURE__ */ k.getBBox();
  i.edges().forEach(function(a) {
    a !== void 0 && i.edge(a) !== void 0 && (tt$1.debug("Edge " + a.v + " -> " + a.w + ": " + JSON.stringify(/* @__PURE__ */ i.edge(a))), _(n, /* @__PURE__ */ i.edge(a), i.edge(a).relation));
  }), M = /* @__PURE__ */ k.getBBox();
  let H = {
    id: s || "root",
    label: s || "root",
    width: 0,
    height: 0
  };
  return H.width = M.width + 2 * S.padding, H.height = M.height + 2 * S.padding, tt$1.debug("Doc rendered", H, i), H;
}, "renderDoc"), q = {
  setConf: ot,
  draw: dt
};
var Rt = {
  parser: Is,
  db: rr,
  renderer: q,
  styles: ar,
  init: /* @__PURE__ */ m$1((e) => {
    e.state || (e.state = {}), e.state.arrowMarkerAbsolute = e.arrowMarkerAbsolute, rr.clear();
  }, "init")
};
export {
  Rt as diagram
};
