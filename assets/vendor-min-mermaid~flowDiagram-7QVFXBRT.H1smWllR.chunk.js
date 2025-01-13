import { w, $ } from "./vendor-min-mermaid~chunk-P7KHIEPL.dhUaYSEK.chunk.js";
import { g as gr, m as mr } from "./vendor-min-mermaid~chunk-7LIB5WBN.mzbHd62r.chunk.js";
import { V, S } from "./vendor-min-mermaid~chunk-54VS5GG6.BwAH1iPT.chunk.js";
import { g as gf } from "./vendor-min-mermaid~chunk-E7A2AWYO.9sfNWd-b.chunk.js";
import { I as Ie, Y as Ye$1 } from "./vendor-min-mermaid~chunk-UENA7NWE.a12nwn0g.chunk.js";
import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js";
import { W as Wl, m as mC, t as tt, r as rh, b as bf, V as DC, T as Tf, k as kf, v as vf, S as Sf, w as wf, B as Bf, s as se, X as EC, c as ku } from "./vendor-min-mermaid~chunk-OR2G2HG5.BWDWUMki.chunk.js";
var Ot = "flowchart-", Et = 0, Ue = /* @__PURE__ */ Wl(), Ae = /* @__PURE__ */ new Map(), j = [], Ye = /* @__PURE__ */ new Map(), fe = [], k1 = /* @__PURE__ */ new Map(), A1 = /* @__PURE__ */ new Map(), e1 = 0, g1 = true, Z, t1, s1 = [], r1 = /* @__PURE__ */ m$1((e) => mC.sanitizeText(e, Ue), "sanitizeText"), n1 = /* @__PURE__ */ m$1(function(e) {
  for (let r of Ae.values()) if (r.id === e) return r.domId;
  return e;
}, "lookUpDomId"), Mt = /* @__PURE__ */ m$1(function(e, r, n, i, o, f) {
  var _a, _b;
  let g = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : {}, S2 = arguments.length > 7 ? arguments[7] : void 0;
  if (!e || e.trim().length === 0) return;
  let h, l = /* @__PURE__ */ Ae.get(e);
  if (l === void 0 && (l = {
    id: e,
    labelType: "text",
    domId: Ot + e + "-" + Et,
    styles: [],
    classes: []
  }, Ae.set(e, l)), Et++, r !== void 0 ? (Ue = /* @__PURE__ */ Wl(), h = /* @__PURE__ */ r1(/* @__PURE__ */ r.text.trim()), l.labelType = r.type, h.startsWith('"') && h.endsWith('"') && (h = /* @__PURE__ */ h.substring(1, h.length - 1)), l.text = h) : l.text === void 0 && (l.text = e), n !== void 0 && (l.type = n), i == null ? void 0 : i.forEach(function(T) {
    l.styles.push(T);
  }), o == null ? void 0 : o.forEach(function(T) {
    l.classes.push(T);
  }), f !== void 0 && (l.dir = f), l.props === void 0 ? l.props = g : g !== void 0 && Object.assign(l.props, g), S2 !== void 0) {
    let T;
    S2.includes(`
`) ? T = S2 + `
` : T = `{
` + S2 + `
}`;
    let b = /* @__PURE__ */ gr(T, {
      schema: mr
    });
    if (b.shape) {
      if (b.shape !== b.shape.toLowerCase() || b.shape.includes("_")) throw new Error(`No such shape: ${b.shape}. Shape names should be lowercase.`);
      if (!gf(b.shape)) throw new Error(`No such shape: ${b.shape}.`);
      l.type = b == null ? void 0 : b.shape;
    }
    (b == null ? void 0 : b.label) && (l.text = b == null ? void 0 : b.label), (b == null ? void 0 : b.icon) && (l.icon = b == null ? void 0 : b.icon, !((_a = b.label) == null ? void 0 : _a.trim()) && l.text === e && (l.text = "")), (b == null ? void 0 : b.form) && (l.form = b == null ? void 0 : b.form), (b == null ? void 0 : b.pos) && (l.pos = b == null ? void 0 : b.pos), (b == null ? void 0 : b.img) && (l.img = b == null ? void 0 : b.img, !((_b = b.label) == null ? void 0 : _b.trim()) && l.text === e && (l.text = "")), (b == null ? void 0 : b.constraint) && (l.constraint = b.constraint), b.w && (l.assetWidth = /* @__PURE__ */ Number(b.w)), b.h && (l.assetHeight = /* @__PURE__ */ Number(b.h));
  }
}, "addVertex"), Gt = /* @__PURE__ */ m$1(function(e, r, n) {
  let f = {
    start: e,
    end: r,
    type: void 0,
    text: "",
    labelType: "text"
  };
  tt.info("abc78 Got edge...", f);
  let g = n.text;
  if (g !== void 0 && (f.text = /* @__PURE__ */ r1(/* @__PURE__ */ g.text.trim()), f.text.startsWith('"') && f.text.endsWith('"') && (f.text = /* @__PURE__ */ f.text.substring(1, f.text.length - 1)), f.labelType = g.type), n !== void 0 && (f.type = n.type, f.stroke = n.stroke, f.length = n.length > 10 ? 10 : n.length), j.length < (Ue.maxEdges ?? 500)) tt.info("Pushing edge..."), j.push(f);
  else throw new Error(`Edge limit exceeded. ${j.length} edges found, but the limit is ${Ue.maxEdges}.

Initialize mermaid with maxEdges set to a higher number to allow more edges.
You cannot set this config via configuration inside the diagram as it is a secure config.
You have to call mermaid.initialize.`);
}, "addSingleLink"), Ut = /* @__PURE__ */ m$1(function(e, r, n) {
  tt.info("addLink", e, r, n);
  for (let i of e) for (let o of r) Gt(i, o, n);
}, "addLink"), Wt = /* @__PURE__ */ m$1(function(e, r) {
  e.forEach(function(n) {
    n === "default" ? j.defaultInterpolate = r : j[n].interpolate = r;
  });
}, "updateLinkInterpolate"), jt = /* @__PURE__ */ m$1(function(e, r) {
  e.forEach(function(n) {
    var _a, _b, _c, _d, _e, _f;
    if (typeof n == "number" && n >= j.length) throw new Error(`The index ${n} for linkStyle is out of bounds. Valid indices for linkStyle are between 0 and ${j.length - 1}. (Help: Ensure that the index is within the range of existing edges.)`);
    n === "default" ? j.defaultStyle = r : (j[n].style = r, (((_b = (_a = j[n]) == null ? void 0 : _a.style) == null ? void 0 : _b.length) ?? 0) > 0 && !((_d = (_c = j[n]) == null ? void 0 : _c.style) == null ? void 0 : _d.some((i) => i == null ? void 0 : i.startsWith("fill"))) && ((_f = (_e = j[n]) == null ? void 0 : _e.style) == null ? void 0 : _f.push("fill:none")));
  });
}, "updateLink"), Kt = /* @__PURE__ */ m$1(function(e, r) {
  e.split(",").forEach(function(n) {
    let i = /* @__PURE__ */ Ye.get(n);
    i === void 0 && (i = {
      id: n,
      styles: [],
      textStyles: []
    }, Ye.set(n, i)), r == null ? void 0 : r.forEach(function(o) {
      if (/color/.exec(o)) {
        let f = /* @__PURE__ */ o.replace("fill", "bgFill");
        i.textStyles.push(f);
      }
      i.styles.push(o);
    });
  });
}, "addClass"), Yt = /* @__PURE__ */ m$1(function(e) {
  Z = e, /.*</.exec(Z) && (Z = "RL"), /.*\^/.exec(Z) && (Z = "BT"), /.*>/.exec(Z) && (Z = "LR"), /.*v/.exec(Z) && (Z = "TB"), Z === "TD" && (Z = "TB");
}, "setDirection"), m1 = /* @__PURE__ */ m$1(function(e, r) {
  for (let n of e.split(",")) {
    let i = /* @__PURE__ */ Ae.get(n);
    i && i.classes.push(r);
    let o = /* @__PURE__ */ k1.get(n);
    o && o.classes.push(r);
  }
}, "setClass"), zt = /* @__PURE__ */ m$1(function(e, r) {
  if (r !== void 0) {
    r = /* @__PURE__ */ r1(r);
    for (let n of e.split(",")) A1.set(t1 === "gen-1" ? n1(n) : n, r);
  }
}, "setTooltip"), Ht = /* @__PURE__ */ m$1(function(e, r, n) {
  let i = /* @__PURE__ */ n1(e);
  if (Wl().securityLevel !== "loose" || r === void 0) return;
  let o = [];
  if (typeof n == "string") {
    o = /* @__PURE__ */ n.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    for (let g = 0; g < o.length; g++) {
      let S2 = /* @__PURE__ */ o[g].trim();
      S2.startsWith('"') && S2.endsWith('"') && (S2 = /* @__PURE__ */ S2.substr(1, S2.length - 2)), o[g] = S2;
    }
  }
  o.length === 0 && o.push(e);
  let f = /* @__PURE__ */ Ae.get(e);
  f && (f.haveCallback = true, s1.push(function() {
    let g = /* @__PURE__ */ document.querySelector(`[id="${i}"]`);
    g !== null && g.addEventListener("click", function() {
      Ie.runFunc(r, ...o);
    }, false);
  }));
}, "setClickFun"), Xt = /* @__PURE__ */ m$1(function(e, r, n) {
  e.split(",").forEach(function(i) {
    let o = /* @__PURE__ */ Ae.get(i);
    o !== void 0 && (o.link = /* @__PURE__ */ Ie.formatUrl(r, Ue), o.linkTarget = n);
  }), m1(e, "clickable");
}, "setLink"), xt = /* @__PURE__ */ m$1(function(e) {
  return A1.get(e);
}, "getTooltip"), qt = /* @__PURE__ */ m$1(function(e, r, n) {
  e.split(",").forEach(function(i) {
    Ht(i, r, n);
  }), m1(e, "clickable");
}, "setClickEvent"), Qt = /* @__PURE__ */ m$1(function(e) {
  s1.forEach(function(r) {
    r(e);
  });
}, "bindFunctions"), E1 = /* @__PURE__ */ m$1(function() {
  return Z.trim();
}, "getDirection"), yt = /* @__PURE__ */ m$1(function() {
  return Ae;
}, "getVertices"), St = /* @__PURE__ */ m$1(function() {
  return j;
}, "getEdges"), Jt = /* @__PURE__ */ m$1(function() {
  return Ye;
}, "getClasses"), Dt = /* @__PURE__ */ m$1(function(e) {
  let r = /* @__PURE__ */ rh(".mermaidTooltip");
  (r._groups || r)[0][0] === null && (r = /* @__PURE__ */ rh("body").append("div").attr("class", "mermaidTooltip").style("opacity", 0)), rh(e).select("svg").selectAll("g.node").on("mouseover", function() {
    let o = /* @__PURE__ */ rh(this);
    if (o.attr("title") === null) return;
    let g = this == null ? void 0 : this.getBoundingClientRect();
    r.transition().duration(200).style("opacity", ".9"), r.text(/* @__PURE__ */ o.attr("title")).style("left", window.scrollX + g.left + (g.right - g.left) / 2 + "px").style("top", window.scrollY + g.bottom + "px"), r.html(/* @__PURE__ */ r.html().replace(/&lt;br\/&gt;/g, "<br/>")), o.classed("hover", true);
  }).on("mouseout", function() {
    r.transition().duration(500).style("opacity", 0), rh(this).classed("hover", false);
  });
}, "setupToolTips");
s1.push(Dt);
var Zt = /* @__PURE__ */ m$1(function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "gen-1";
  Ae = /* @__PURE__ */ new Map(), Ye = /* @__PURE__ */ new Map(), j = [], s1 = [
    Dt
  ], fe = [], k1 = /* @__PURE__ */ new Map(), e1 = 0, A1 = /* @__PURE__ */ new Map(), g1 = true, t1 = e, Ue = /* @__PURE__ */ Wl(), bf();
}, "clear"), $t = /* @__PURE__ */ m$1((e) => {
  t1 = e || "gen-2";
}, "setGen"), es = /* @__PURE__ */ m$1(function() {
  return "fill:#ffa;stroke: #f66; stroke-width: 3px; stroke-dasharray: 5, 5;fill:#ffa;stroke: #666;";
}, "defaultStyle"), ts = /* @__PURE__ */ m$1(function(e, r, n) {
  let i = /* @__PURE__ */ e.text.trim(), o = n.text;
  e === n && /\s/.exec(n.text) && (i = void 0);
  function f(l) {
    let T = {
      boolean: {},
      number: {},
      string: {}
    }, b = [], K;
    return {
      nodeList: /* @__PURE__ */ l.filter(function(k) {
        let y = typeof k;
        return k.stmt && k.stmt === "dir" ? (K = k.value, false) : k.trim() === "" ? false : y in T ? T[y].hasOwnProperty(k) ? false : T[y][k] = true : b.includes(k) ? false : b.push(k);
      }),
      dir: K
    };
  }
  m$1(f, "uniq");
  let { nodeList: g, dir: S2 } = f(/* @__PURE__ */ r.flat());
  if (t1 === "gen-1") for (let l = 0; l < g.length; l++) g[l] = /* @__PURE__ */ n1(g[l]);
  i = i ?? "subGraph" + e1, o = o || "", o = /* @__PURE__ */ r1(o), e1 = e1 + 1;
  let h = {
    id: i,
    nodes: g,
    title: /* @__PURE__ */ o.trim(),
    classes: [],
    dir: S2,
    labelType: n.type
  };
  return tt.info("Adding", h.id, h.nodes, h.dir), h.nodes = _t(h, fe).nodes, fe.push(h), k1.set(i, h), i;
}, "addSubGraph"), ss = /* @__PURE__ */ m$1(function(e) {
  for (let [r, n] of fe.entries()) if (n.id === e) return r;
  return -1;
}, "getPosForId"), Ke = -1, Ct = [], Ft = m$1(function(e, r) {
  let n = fe[r].nodes;
  if (Ke = Ke + 1, Ke > 2e3) return {
    result: false,
    count: 0
  };
  if (Ct[Ke] = r, fe[r].id === e) return {
    result: true,
    count: 0
  };
  let i = 0, o = 1;
  for (; i < n.length; ) {
    let f = /* @__PURE__ */ ss(n[i]);
    if (f >= 0) {
      let g = /* @__PURE__ */ Ft(e, f);
      if (g.result) return {
        result: true,
        count: o + g.count
      };
      o = o + g.count;
    }
    i = i + 1;
  }
  return {
    result: false,
    count: o
  };
}, "indexNodes2"), rs = /* @__PURE__ */ m$1(function(e) {
  return Ct[e];
}, "getDepthFirstPos"), ns = /* @__PURE__ */ m$1(function() {
  Ke = -1, fe.length > 0 && Ft("none", fe.length - 1);
}, "indexNodes"), Tt = /* @__PURE__ */ m$1(function() {
  return fe;
}, "getSubGraphs"), is = /* @__PURE__ */ m$1(() => g1 ? (g1 = false, true) : false, "firstGraph"), as = /* @__PURE__ */ m$1((e) => {
  let r = /* @__PURE__ */ e.trim(), n = "arrow_open";
  switch (r[0]) {
    case "<":
      n = "arrow_point", r = /* @__PURE__ */ r.slice(1);
      break;
    case "x":
      n = "arrow_cross", r = /* @__PURE__ */ r.slice(1);
      break;
    case "o":
      n = "arrow_circle", r = /* @__PURE__ */ r.slice(1);
      break;
  }
  let i = "normal";
  return r.includes("=") && (i = "thick"), r.includes(".") && (i = "dotted"), {
    type: n,
    stroke: i
  };
}, "destructStartLink"), us = /* @__PURE__ */ m$1((e, r) => {
  let n = r.length, i = 0;
  for (let o = 0; o < n; ++o) r[o] === e && ++i;
  return i;
}, "countChar"), os = /* @__PURE__ */ m$1((e) => {
  let r = /* @__PURE__ */ e.trim(), n = /* @__PURE__ */ r.slice(0, -1), i = "arrow_open";
  switch (r.slice(-1)) {
    case "x":
      i = "arrow_cross", r.startsWith("x") && (i = "double_" + i, n = /* @__PURE__ */ n.slice(1));
      break;
    case ">":
      i = "arrow_point", r.startsWith("<") && (i = "double_" + i, n = /* @__PURE__ */ n.slice(1));
      break;
    case "o":
      i = "arrow_circle", r.startsWith("o") && (i = "double_" + i, n = /* @__PURE__ */ n.slice(1));
      break;
  }
  let o = "normal", f = n.length - 1;
  n.startsWith("=") && (o = "thick"), n.startsWith("~") && (o = "invisible");
  let g = /* @__PURE__ */ us(".", n);
  return g && (o = "dotted", f = g), {
    type: i,
    stroke: o,
    length: f
  };
}, "destructEndLink"), ls = /* @__PURE__ */ m$1((e, r) => {
  let n = /* @__PURE__ */ os(e), i;
  if (r) {
    if (i = /* @__PURE__ */ as(r), i.stroke !== n.stroke) return {
      type: "INVALID",
      stroke: "INVALID"
    };
    if (i.type === "arrow_open") i.type = n.type;
    else {
      if (i.type !== n.type) return {
        type: "INVALID",
        stroke: "INVALID"
      };
      i.type = "double_" + i.type;
    }
    return i.type === "double_arrow" && (i.type = "double_arrow_point"), i.length = n.length, i;
  }
  return n;
}, "destructLink"), Bt = /* @__PURE__ */ m$1((e, r) => {
  for (let n of e) if (n.nodes.includes(r)) return true;
  return false;
}, "exists"), _t = /* @__PURE__ */ m$1((e, r) => {
  let n = [];
  return e.nodes.forEach((i, o) => {
    Bt(r, i) || n.push(e.nodes[o]);
  }), {
    nodes: n
  };
}, "makeUniq"), cs = {
  firstGraph: is
}, hs = /* @__PURE__ */ m$1((e) => {
  if (e.img) return "imageSquare";
  if (e.icon) return e.form === "circle" ? "iconCircle" : e.form === "square" ? "iconSquare" : e.form === "rounded" ? "iconRounded" : "icon";
  switch (e.type) {
    case "square":
    case void 0:
      return "squareRect";
    case "round":
      return "roundedRect";
    case "ellipse":
      return "ellipse";
    default:
      return e.type;
  }
}, "getTypeFromVertex"), ds = /* @__PURE__ */ m$1((e, r) => e.find((n) => n.id === r), "findNode"), fs = /* @__PURE__ */ m$1((e) => {
  let r = "none", n = "arrow_point";
  switch (e) {
    case "arrow_point":
    case "arrow_circle":
    case "arrow_cross":
      n = e;
      break;
    case "double_arrow_point":
    case "double_arrow_circle":
    case "double_arrow_cross":
      r = /* @__PURE__ */ e.replace("double_", ""), n = r;
      break;
  }
  return {
    arrowTypeStart: r,
    arrowTypeEnd: n
  };
}, "destructEdgeType"), ps = /* @__PURE__ */ m$1((e, r, n, i, o, f) => {
  var _a;
  let g = /* @__PURE__ */ n.get(e.id), S2 = i.get(e.id) ?? false, h = /* @__PURE__ */ ds(r, e.id);
  if (h) h.cssStyles = e.styles, h.cssCompiledStyles = /* @__PURE__ */ b1(e.classes), h.cssClasses = /* @__PURE__ */ e.classes.join(" ");
  else {
    let l = {
      id: e.id,
      label: e.text,
      labelStyle: "",
      parentId: g,
      padding: ((_a = o.flowchart) == null ? void 0 : _a.padding) || 8,
      cssStyles: e.styles,
      cssCompiledStyles: /* @__PURE__ */ b1([
        "default",
        "node",
        ...e.classes
      ]),
      cssClasses: "default " + e.classes.join(" "),
      dir: e.dir,
      domId: e.domId,
      look: f,
      link: e.link,
      linkTarget: e.linkTarget,
      tooltip: /* @__PURE__ */ xt(e.id),
      icon: e.icon,
      pos: e.pos,
      img: e.img,
      assetWidth: e.assetWidth,
      assetHeight: e.assetHeight,
      constraint: e.constraint
    };
    S2 ? r.push({
      ...l,
      isGroup: true,
      shape: "rect"
    }) : r.push({
      ...l,
      isGroup: false,
      shape: /* @__PURE__ */ hs(e)
    });
  }
}, "addNodeFromVertex");
function b1(e) {
  let r = [];
  for (let n of e) {
    let i = /* @__PURE__ */ Ye.get(n);
    (i == null ? void 0 : i.styles) && (r = /* @__PURE__ */ [
      ...r,
      ...i.styles ?? []
    ].map((o) => o.trim())), (i == null ? void 0 : i.textStyles) && (r = /* @__PURE__ */ [
      ...r,
      ...i.textStyles ?? []
    ].map((o) => o.trim()));
  }
  return r;
}
m$1(b1, "getCompiledStyles");
var gs = /* @__PURE__ */ m$1(() => {
  let e = /* @__PURE__ */ Wl(), r = [], n = [], i = /* @__PURE__ */ Tt(), o = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
  for (let h = i.length - 1; h >= 0; h--) {
    let l = i[h];
    l.nodes.length > 0 && f.set(l.id, true);
    for (let T of l.nodes) o.set(T, l.id);
  }
  for (let h = i.length - 1; h >= 0; h--) {
    let l = i[h];
    r.push({
      id: l.id,
      label: l.title,
      labelStyle: "",
      parentId: /* @__PURE__ */ o.get(l.id),
      padding: 8,
      cssCompiledStyles: /* @__PURE__ */ b1(l.classes),
      cssClasses: /* @__PURE__ */ l.classes.join(" "),
      shape: "rect",
      dir: l.dir,
      isGroup: true,
      look: e.look
    });
  }
  yt().forEach((h) => {
    ps(h, r, o, f, e, e.look || "classic");
  });
  let S2 = /* @__PURE__ */ St();
  return S2.forEach((h, l) => {
    let { arrowTypeStart: T, arrowTypeEnd: b } = fs(h.type), K = [
      ...S2.defaultStyle ?? []
    ];
    h.style && K.push(...h.style);
    let Y = {
      id: /* @__PURE__ */ Ye$1(h.start, h.end, {
        counter: l,
        prefix: "L"
      }),
      start: h.start,
      end: h.end,
      type: h.type ?? "normal",
      label: h.text,
      labelpos: "c",
      thickness: h.stroke,
      minlen: h.length,
      classes: (h == null ? void 0 : h.stroke) === "invisible" ? "" : "edge-thickness-normal edge-pattern-solid flowchart-link",
      arrowTypeStart: (h == null ? void 0 : h.stroke) === "invisible" ? "none" : T,
      arrowTypeEnd: (h == null ? void 0 : h.stroke) === "invisible" ? "none" : b,
      arrowheadStyle: "fill: #333",
      labelStyle: K,
      style: K,
      pattern: h.stroke,
      look: e.look
    };
    n.push(Y);
  }), {
    nodes: r,
    edges: n,
    other: {},
    config: e
  };
}, "getData"), i1 = {
  defaultConfig: /* @__PURE__ */ m$1(() => DC.flowchart, "defaultConfig"),
  setAccTitle: Tf,
  getAccTitle: kf,
  getAccDescription: vf,
  getData: gs,
  setAccDescription: Sf,
  addVertex: Mt,
  lookUpDomId: n1,
  addLink: Ut,
  updateLinkInterpolate: Wt,
  updateLink: jt,
  addClass: Kt,
  setDirection: Yt,
  setClass: m1,
  setTooltip: zt,
  getTooltip: xt,
  setClickEvent: qt,
  setLink: Xt,
  bindFunctions: Qt,
  getDirection: E1,
  getVertices: yt,
  getEdges: St,
  getClasses: Jt,
  clear: Zt,
  setGen: $t,
  defaultStyle: es,
  addSubGraph: ts,
  getDepthFirstPos: rs,
  indexNodes: ns,
  getSubGraphs: Tt,
  destructLink: ls,
  lex: cs,
  exists: Bt,
  makeUniq: _t,
  setDiagramTitle: wf,
  getDiagramTitle: Bf
};
var bs = /* @__PURE__ */ m$1(function(e, r) {
  return r.db.getClasses();
}, "getClasses"), ks = /* @__PURE__ */ m$1(async function(e, r, n, i) {
  var _a;
  tt.info("REF0:"), tt.info("Drawing state diagram (v2)", r);
  let { securityLevel: o, flowchart: f, layout: g } = Wl(), S$1;
  o === "sandbox" && (S$1 = /* @__PURE__ */ rh("#i" + r));
  let h = o === "sandbox" ? S$1.nodes()[0].contentDocument : document;
  tt.debug("Before getData: ");
  let l = /* @__PURE__ */ i.db.getData();
  tt.debug("Data: ", l);
  let T = /* @__PURE__ */ w(r, o), b = /* @__PURE__ */ E1();
  l.type = i.type, l.layoutAlgorithm = /* @__PURE__ */ V(g), l.layoutAlgorithm === "dagre" && g === "elk" && tt.warn("flowchart-elk was moved to an external package in Mermaid v11. Please refer [release notes](https://github.com/mermaid-js/mermaid/releases/tag/v11.0.0) for more details. This diagram will be rendered using `dagre` layout as a fallback."), l.direction = b, l.nodeSpacing = (f == null ? void 0 : f.nodeSpacing) || 50, l.rankSpacing = (f == null ? void 0 : f.rankSpacing) || 50, l.markers = [
    "point",
    "circle",
    "cross"
  ], l.diagramId = r, tt.debug("REF1:", l), await S(l, T);
  let K = ((_a = l.config.flowchart) == null ? void 0 : _a.diagramPadding) ?? 8;
  Ie.insertTitle(T, "flowchartTitleText", (f == null ? void 0 : f.titleTopMargin) || 0, /* @__PURE__ */ i.db.getDiagramTitle()), $(T, K, "flowchart", (f == null ? void 0 : f.useMaxWidth) || false);
  for (let Y of l.nodes) {
    let k = /* @__PURE__ */ rh(`#${r} [id="${Y.id}"]`);
    if (!k || !Y.link) continue;
    let y = /* @__PURE__ */ h.createElementNS("http://www.w3.org/2000/svg", "a");
    y.setAttributeNS("http://www.w3.org/2000/svg", "class", Y.cssClasses), y.setAttributeNS("http://www.w3.org/2000/svg", "rel", "noopener"), o === "sandbox" ? y.setAttributeNS("http://www.w3.org/2000/svg", "target", "_top") : Y.linkTarget && y.setAttributeNS("http://www.w3.org/2000/svg", "target", Y.linkTarget);
    let me = /* @__PURE__ */ k.insert(function() {
      return y;
    }, ":first-child"), Ee = /* @__PURE__ */ k.select(".label-container");
    Ee && me.append(function() {
      return Ee.node();
    });
    let xe = /* @__PURE__ */ k.select(".label");
    xe && me.append(function() {
      return xe.node();
    });
  }
}, "draw"), wt = {
  getClasses: bs,
  draw: ks
};
var x1 = /* @__PURE__ */ function() {
  var e = /* @__PURE__ */ m$1(function(be, c, d, p) {
    for (d = d || {}, p = be.length; p--; d[be[p]] = c) ;
    return d;
  }, "o"), r = [
    1,
    4
  ], n = [
    1,
    3
  ], i = [
    1,
    5
  ], o = [
    1,
    8,
    9,
    10,
    11,
    27,
    34,
    36,
    38,
    44,
    60,
    83,
    84,
    85,
    86,
    87,
    88,
    101,
    104,
    105,
    108,
    110,
    113,
    114,
    115,
    120,
    121,
    122,
    123
  ], f = [
    2,
    2
  ], g = [
    1,
    13
  ], S2 = [
    1,
    14
  ], h = [
    1,
    15
  ], l = [
    1,
    16
  ], T = [
    1,
    23
  ], b = [
    1,
    25
  ], K = [
    1,
    26
  ], Y = [
    1,
    27
  ], k = [
    1,
    49
  ], y = [
    1,
    48
  ], me = [
    1,
    29
  ], Ee = [
    1,
    30
  ], xe = [
    1,
    31
  ], ze = [
    1,
    32
  ], He = [
    1,
    33
  ], _ = [
    1,
    44
  ], w2 = [
    1,
    46
  ], V2 = [
    1,
    42
  ], L = [
    1,
    47
  ], I = [
    1,
    43
  ], v = [
    1,
    50
  ], R = [
    1,
    45
  ], N = [
    1,
    51
  ], P = [
    1,
    52
  ], Xe = [
    1,
    34
  ], qe = [
    1,
    35
  ], Qe = [
    1,
    36
  ], Je = [
    1,
    37
  ], pe = [
    1,
    57
  ], D = [
    1,
    8,
    9,
    10,
    11,
    27,
    32,
    34,
    36,
    38,
    44,
    60,
    83,
    84,
    85,
    86,
    87,
    88,
    101,
    104,
    105,
    108,
    110,
    113,
    114,
    115,
    120,
    121,
    122,
    123
  ], ee = [
    1,
    61
  ], te = [
    1,
    60
  ], se2 = [
    1,
    62
  ], Fe = [
    8,
    9,
    11,
    75,
    77
  ], y1 = [
    1,
    77
  ], Te = [
    1,
    90
  ], Be = [
    1,
    95
  ], _e = [
    1,
    94
  ], we = [
    1,
    91
  ], Ve = [
    1,
    87
  ], Le = [
    1,
    93
  ], Ie2 = [
    1,
    89
  ], ve = [
    1,
    96
  ], Re = [
    1,
    92
  ], Ne = [
    1,
    97
  ], Pe = [
    1,
    88
  ], ye = [
    8,
    9,
    10,
    11,
    40,
    75,
    77
  ], M = [
    8,
    9,
    10,
    11,
    40,
    46,
    75,
    77
  ], z = [
    8,
    9,
    10,
    11,
    29,
    40,
    44,
    46,
    48,
    50,
    52,
    54,
    56,
    58,
    60,
    63,
    65,
    67,
    68,
    70,
    75,
    77,
    88,
    101,
    104,
    105,
    108,
    110,
    113,
    114,
    115
  ], S1 = [
    8,
    9,
    11,
    44,
    60,
    75,
    77,
    88,
    101,
    104,
    105,
    108,
    110,
    113,
    114,
    115
  ], We = [
    44,
    60,
    88,
    101,
    104,
    105,
    108,
    110,
    113,
    114,
    115
  ], D1 = [
    1,
    123
  ], C1 = [
    1,
    122
  ], F1 = [
    1,
    130
  ], T1 = [
    1,
    144
  ], B1 = [
    1,
    145
  ], _1 = [
    1,
    146
  ], w1 = [
    1,
    147
  ], V1 = [
    1,
    132
  ], L1 = [
    1,
    134
  ], I1 = [
    1,
    138
  ], v1 = [
    1,
    139
  ], R1 = [
    1,
    140
  ], N1 = [
    1,
    141
  ], P1 = [
    1,
    142
  ], O1 = [
    1,
    143
  ], M1 = [
    1,
    148
  ], G1 = [
    1,
    149
  ], U1 = [
    1,
    128
  ], W1 = [
    1,
    129
  ], j1 = [
    1,
    136
  ], K1 = [
    1,
    131
  ], Y1 = [
    1,
    135
  ], z1 = [
    1,
    133
  ], a1 = [
    8,
    9,
    10,
    11,
    27,
    32,
    34,
    36,
    38,
    44,
    60,
    83,
    84,
    85,
    86,
    87,
    88,
    101,
    104,
    105,
    108,
    110,
    113,
    114,
    115,
    120,
    121,
    122,
    123
  ], H1 = [
    1,
    151
  ], X1 = [
    1,
    153
  ], B = [
    8,
    9,
    11
  ], H = [
    8,
    9,
    10,
    11,
    14,
    44,
    60,
    88,
    104,
    105,
    108,
    110,
    113,
    114,
    115
  ], A = [
    1,
    173
  ], G = [
    1,
    169
  ], U = [
    1,
    170
  ], m = [
    1,
    174
  ], E = [
    1,
    171
  ], x = [
    1,
    172
  ], Oe = [
    77,
    115,
    118
  ], C = [
    8,
    9,
    10,
    11,
    12,
    14,
    27,
    29,
    32,
    44,
    60,
    75,
    83,
    84,
    85,
    86,
    87,
    88,
    89,
    104,
    108,
    110,
    113,
    114,
    115
  ], q1 = [
    10,
    105
  ], ge = [
    31,
    49,
    51,
    53,
    55,
    57,
    62,
    64,
    66,
    67,
    69,
    71,
    115,
    116,
    117
  ], re = [
    1,
    242
  ], ne = [
    1,
    240
  ], ie = [
    1,
    244
  ], ae = [
    1,
    238
  ], ue = [
    1,
    239
  ], oe = [
    1,
    241
  ], le = [
    1,
    243
  ], ce = [
    1,
    245
  ], Me = [
    1,
    263
  ], Q1 = [
    8,
    9,
    11,
    105
  ], $2 = [
    8,
    9,
    10,
    11,
    60,
    83,
    104,
    105,
    108,
    109,
    110,
    111
  ], u1 = {
    trace: /* @__PURE__ */ m$1(function() {
    }, "trace"),
    yy: {},
    symbols_: {
      error: 2,
      start: 3,
      graphConfig: 4,
      document: 5,
      line: 6,
      statement: 7,
      SEMI: 8,
      NEWLINE: 9,
      SPACE: 10,
      EOF: 11,
      GRAPH: 12,
      NODIR: 13,
      DIR: 14,
      FirstStmtSeparator: 15,
      ending: 16,
      endToken: 17,
      spaceList: 18,
      spaceListNewline: 19,
      vertexStatement: 20,
      separator: 21,
      styleStatement: 22,
      linkStyleStatement: 23,
      classDefStatement: 24,
      classStatement: 25,
      clickStatement: 26,
      subgraph: 27,
      textNoTags: 28,
      SQS: 29,
      text: 30,
      SQE: 31,
      end: 32,
      direction: 33,
      acc_title: 34,
      acc_title_value: 35,
      acc_descr: 36,
      acc_descr_value: 37,
      acc_descr_multiline_value: 38,
      shapeData: 39,
      SHAPE_DATA: 40,
      link: 41,
      node: 42,
      styledVertex: 43,
      AMP: 44,
      vertex: 45,
      STYLE_SEPARATOR: 46,
      idString: 47,
      DOUBLECIRCLESTART: 48,
      DOUBLECIRCLEEND: 49,
      PS: 50,
      PE: 51,
      "(-": 52,
      "-)": 53,
      STADIUMSTART: 54,
      STADIUMEND: 55,
      SUBROUTINESTART: 56,
      SUBROUTINEEND: 57,
      VERTEX_WITH_PROPS_START: 58,
      "NODE_STRING[field]": 59,
      COLON: 60,
      "NODE_STRING[value]": 61,
      PIPE: 62,
      CYLINDERSTART: 63,
      CYLINDEREND: 64,
      DIAMOND_START: 65,
      DIAMOND_STOP: 66,
      TAGEND: 67,
      TRAPSTART: 68,
      TRAPEND: 69,
      INVTRAPSTART: 70,
      INVTRAPEND: 71,
      linkStatement: 72,
      arrowText: 73,
      TESTSTR: 74,
      START_LINK: 75,
      edgeText: 76,
      LINK: 77,
      edgeTextToken: 78,
      STR: 79,
      MD_STR: 80,
      textToken: 81,
      keywords: 82,
      STYLE: 83,
      LINKSTYLE: 84,
      CLASSDEF: 85,
      CLASS: 86,
      CLICK: 87,
      DOWN: 88,
      UP: 89,
      textNoTagsToken: 90,
      stylesOpt: 91,
      "idString[vertex]": 92,
      "idString[class]": 93,
      CALLBACKNAME: 94,
      CALLBACKARGS: 95,
      HREF: 96,
      LINK_TARGET: 97,
      "STR[link]": 98,
      "STR[tooltip]": 99,
      alphaNum: 100,
      DEFAULT: 101,
      numList: 102,
      INTERPOLATE: 103,
      NUM: 104,
      COMMA: 105,
      style: 106,
      styleComponent: 107,
      NODE_STRING: 108,
      UNIT: 109,
      BRKT: 110,
      PCT: 111,
      idStringToken: 112,
      MINUS: 113,
      MULT: 114,
      UNICODE_TEXT: 115,
      TEXT: 116,
      TAGSTART: 117,
      EDGE_TEXT: 118,
      alphaNumToken: 119,
      direction_tb: 120,
      direction_bt: 121,
      direction_rl: 122,
      direction_lr: 123,
      $accept: 0,
      $end: 1
    },
    terminals_: {
      2: "error",
      8: "SEMI",
      9: "NEWLINE",
      10: "SPACE",
      11: "EOF",
      12: "GRAPH",
      13: "NODIR",
      14: "DIR",
      27: "subgraph",
      29: "SQS",
      31: "SQE",
      32: "end",
      34: "acc_title",
      35: "acc_title_value",
      36: "acc_descr",
      37: "acc_descr_value",
      38: "acc_descr_multiline_value",
      40: "SHAPE_DATA",
      44: "AMP",
      46: "STYLE_SEPARATOR",
      48: "DOUBLECIRCLESTART",
      49: "DOUBLECIRCLEEND",
      50: "PS",
      51: "PE",
      52: "(-",
      53: "-)",
      54: "STADIUMSTART",
      55: "STADIUMEND",
      56: "SUBROUTINESTART",
      57: "SUBROUTINEEND",
      58: "VERTEX_WITH_PROPS_START",
      59: "NODE_STRING[field]",
      60: "COLON",
      61: "NODE_STRING[value]",
      62: "PIPE",
      63: "CYLINDERSTART",
      64: "CYLINDEREND",
      65: "DIAMOND_START",
      66: "DIAMOND_STOP",
      67: "TAGEND",
      68: "TRAPSTART",
      69: "TRAPEND",
      70: "INVTRAPSTART",
      71: "INVTRAPEND",
      74: "TESTSTR",
      75: "START_LINK",
      77: "LINK",
      79: "STR",
      80: "MD_STR",
      83: "STYLE",
      84: "LINKSTYLE",
      85: "CLASSDEF",
      86: "CLASS",
      87: "CLICK",
      88: "DOWN",
      89: "UP",
      92: "idString[vertex]",
      93: "idString[class]",
      94: "CALLBACKNAME",
      95: "CALLBACKARGS",
      96: "HREF",
      97: "LINK_TARGET",
      98: "STR[link]",
      99: "STR[tooltip]",
      101: "DEFAULT",
      103: "INTERPOLATE",
      104: "NUM",
      105: "COMMA",
      108: "NODE_STRING",
      109: "UNIT",
      110: "BRKT",
      111: "PCT",
      113: "MINUS",
      114: "MULT",
      115: "UNICODE_TEXT",
      116: "TEXT",
      117: "TAGSTART",
      118: "EDGE_TEXT",
      120: "direction_tb",
      121: "direction_bt",
      122: "direction_rl",
      123: "direction_lr"
    },
    productions_: [
      0,
      [
        3,
        2
      ],
      [
        5,
        0
      ],
      [
        5,
        2
      ],
      [
        6,
        1
      ],
      [
        6,
        1
      ],
      [
        6,
        1
      ],
      [
        6,
        1
      ],
      [
        6,
        1
      ],
      [
        4,
        2
      ],
      [
        4,
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
        16,
        2
      ],
      [
        16,
        1
      ],
      [
        17,
        1
      ],
      [
        17,
        1
      ],
      [
        17,
        1
      ],
      [
        15,
        1
      ],
      [
        15,
        1
      ],
      [
        15,
        2
      ],
      [
        19,
        2
      ],
      [
        19,
        2
      ],
      [
        19,
        1
      ],
      [
        19,
        1
      ],
      [
        18,
        2
      ],
      [
        18,
        1
      ],
      [
        7,
        2
      ],
      [
        7,
        2
      ],
      [
        7,
        2
      ],
      [
        7,
        2
      ],
      [
        7,
        2
      ],
      [
        7,
        2
      ],
      [
        7,
        9
      ],
      [
        7,
        6
      ],
      [
        7,
        4
      ],
      [
        7,
        1
      ],
      [
        7,
        2
      ],
      [
        7,
        2
      ],
      [
        7,
        1
      ],
      [
        21,
        1
      ],
      [
        21,
        1
      ],
      [
        21,
        1
      ],
      [
        39,
        2
      ],
      [
        39,
        1
      ],
      [
        20,
        4
      ],
      [
        20,
        3
      ],
      [
        20,
        4
      ],
      [
        20,
        2
      ],
      [
        20,
        2
      ],
      [
        20,
        1
      ],
      [
        42,
        1
      ],
      [
        42,
        6
      ],
      [
        42,
        5
      ],
      [
        43,
        1
      ],
      [
        43,
        3
      ],
      [
        45,
        4
      ],
      [
        45,
        4
      ],
      [
        45,
        6
      ],
      [
        45,
        4
      ],
      [
        45,
        4
      ],
      [
        45,
        4
      ],
      [
        45,
        8
      ],
      [
        45,
        4
      ],
      [
        45,
        4
      ],
      [
        45,
        4
      ],
      [
        45,
        6
      ],
      [
        45,
        4
      ],
      [
        45,
        4
      ],
      [
        45,
        4
      ],
      [
        45,
        4
      ],
      [
        45,
        4
      ],
      [
        45,
        1
      ],
      [
        41,
        2
      ],
      [
        41,
        3
      ],
      [
        41,
        3
      ],
      [
        41,
        1
      ],
      [
        41,
        3
      ],
      [
        76,
        1
      ],
      [
        76,
        2
      ],
      [
        76,
        1
      ],
      [
        76,
        1
      ],
      [
        72,
        1
      ],
      [
        73,
        3
      ],
      [
        30,
        1
      ],
      [
        30,
        2
      ],
      [
        30,
        1
      ],
      [
        30,
        1
      ],
      [
        82,
        1
      ],
      [
        82,
        1
      ],
      [
        82,
        1
      ],
      [
        82,
        1
      ],
      [
        82,
        1
      ],
      [
        82,
        1
      ],
      [
        82,
        1
      ],
      [
        82,
        1
      ],
      [
        82,
        1
      ],
      [
        82,
        1
      ],
      [
        82,
        1
      ],
      [
        28,
        1
      ],
      [
        28,
        2
      ],
      [
        28,
        1
      ],
      [
        28,
        1
      ],
      [
        24,
        5
      ],
      [
        25,
        5
      ],
      [
        26,
        2
      ],
      [
        26,
        4
      ],
      [
        26,
        3
      ],
      [
        26,
        5
      ],
      [
        26,
        3
      ],
      [
        26,
        5
      ],
      [
        26,
        5
      ],
      [
        26,
        7
      ],
      [
        26,
        2
      ],
      [
        26,
        4
      ],
      [
        26,
        2
      ],
      [
        26,
        4
      ],
      [
        26,
        4
      ],
      [
        26,
        6
      ],
      [
        22,
        5
      ],
      [
        23,
        5
      ],
      [
        23,
        5
      ],
      [
        23,
        9
      ],
      [
        23,
        9
      ],
      [
        23,
        7
      ],
      [
        23,
        7
      ],
      [
        102,
        1
      ],
      [
        102,
        3
      ],
      [
        91,
        1
      ],
      [
        91,
        3
      ],
      [
        106,
        1
      ],
      [
        106,
        2
      ],
      [
        107,
        1
      ],
      [
        107,
        1
      ],
      [
        107,
        1
      ],
      [
        107,
        1
      ],
      [
        107,
        1
      ],
      [
        107,
        1
      ],
      [
        107,
        1
      ],
      [
        107,
        1
      ],
      [
        112,
        1
      ],
      [
        112,
        1
      ],
      [
        112,
        1
      ],
      [
        112,
        1
      ],
      [
        112,
        1
      ],
      [
        112,
        1
      ],
      [
        112,
        1
      ],
      [
        112,
        1
      ],
      [
        112,
        1
      ],
      [
        112,
        1
      ],
      [
        112,
        1
      ],
      [
        81,
        1
      ],
      [
        81,
        1
      ],
      [
        81,
        1
      ],
      [
        81,
        1
      ],
      [
        90,
        1
      ],
      [
        90,
        1
      ],
      [
        90,
        1
      ],
      [
        90,
        1
      ],
      [
        90,
        1
      ],
      [
        90,
        1
      ],
      [
        90,
        1
      ],
      [
        90,
        1
      ],
      [
        90,
        1
      ],
      [
        90,
        1
      ],
      [
        90,
        1
      ],
      [
        78,
        1
      ],
      [
        78,
        1
      ],
      [
        119,
        1
      ],
      [
        119,
        1
      ],
      [
        119,
        1
      ],
      [
        119,
        1
      ],
      [
        119,
        1
      ],
      [
        119,
        1
      ],
      [
        119,
        1
      ],
      [
        119,
        1
      ],
      [
        119,
        1
      ],
      [
        119,
        1
      ],
      [
        119,
        1
      ],
      [
        47,
        1
      ],
      [
        47,
        2
      ],
      [
        100,
        1
      ],
      [
        100,
        2
      ],
      [
        33,
        1
      ],
      [
        33,
        1
      ],
      [
        33,
        1
      ],
      [
        33,
        1
      ]
    ],
    performAction: /* @__PURE__ */ m$1(function(c, d, p, a, F, t, Se) {
      var s = t.length - 1;
      switch (F) {
        case 2:
          this.$ = [];
          break;
        case 3:
          (!Array.isArray(t[s]) || t[s].length > 0) && t[s - 1].push(t[s]), this.$ = t[s - 1];
          break;
        case 4:
        case 181:
          this.$ = t[s];
          break;
        case 11:
          a.setDirection("TB"), this.$ = "TB";
          break;
        case 12:
          a.setDirection(t[s - 1]), this.$ = t[s - 1];
          break;
        case 27:
          this.$ = t[s - 1].nodes;
          break;
        case 28:
        case 29:
        case 30:
        case 31:
        case 32:
          this.$ = [];
          break;
        case 33:
          this.$ = /* @__PURE__ */ a.addSubGraph(t[s - 6], t[s - 1], t[s - 4]);
          break;
        case 34:
          this.$ = /* @__PURE__ */ a.addSubGraph(t[s - 3], t[s - 1], t[s - 3]);
          break;
        case 35:
          this.$ = /* @__PURE__ */ a.addSubGraph(void 0, t[s - 1], void 0);
          break;
        case 37:
          this.$ = /* @__PURE__ */ t[s].trim(), a.setAccTitle(this.$);
          break;
        case 38:
        case 39:
          this.$ = /* @__PURE__ */ t[s].trim(), a.setAccDescription(this.$);
          break;
        case 43:
          this.$ = t[s - 1] + t[s];
          break;
        case 44:
          this.$ = t[s];
          break;
        case 45:
          a.addVertex(t[s - 1][0], void 0, void 0, void 0, void 0, void 0, void 0, t[s]), a.addLink(t[s - 3].stmt, t[s - 1], t[s - 2]), this.$ = {
            stmt: t[s - 1],
            nodes: /* @__PURE__ */ t[s - 1].concat(t[s - 3].nodes)
          };
          break;
        case 46:
          a.addLink(t[s - 2].stmt, t[s], t[s - 1]), this.$ = {
            stmt: t[s],
            nodes: /* @__PURE__ */ t[s].concat(t[s - 2].nodes)
          };
          break;
        case 47:
          a.addLink(t[s - 3].stmt, t[s - 1], t[s - 2]), this.$ = {
            stmt: t[s - 1],
            nodes: /* @__PURE__ */ t[s - 1].concat(t[s - 3].nodes)
          };
          break;
        case 48:
          this.$ = {
            stmt: t[s - 1],
            nodes: t[s - 1]
          };
          break;
        case 49:
          a.addVertex(t[s - 1][0], void 0, void 0, void 0, void 0, void 0, void 0, t[s]), this.$ = {
            stmt: t[s - 1],
            nodes: t[s - 1],
            shapeData: t[s]
          };
          break;
        case 50:
          this.$ = {
            stmt: t[s],
            nodes: t[s]
          };
          break;
        case 51:
          this.$ = [
            t[s]
          ];
          break;
        case 52:
          a.addVertex(t[s - 5][0], void 0, void 0, void 0, void 0, void 0, void 0, t[s - 4]), this.$ = /* @__PURE__ */ t[s - 5].concat(t[s]);
          break;
        case 53:
          this.$ = /* @__PURE__ */ t[s - 4].concat(t[s]);
          break;
        case 54:
          this.$ = t[s];
          break;
        case 55:
          this.$ = t[s - 2], a.setClass(t[s - 2], t[s]);
          break;
        case 56:
          this.$ = t[s - 3], a.addVertex(t[s - 3], t[s - 1], "square");
          break;
        case 57:
          this.$ = t[s - 3], a.addVertex(t[s - 3], t[s - 1], "doublecircle");
          break;
        case 58:
          this.$ = t[s - 5], a.addVertex(t[s - 5], t[s - 2], "circle");
          break;
        case 59:
          this.$ = t[s - 3], a.addVertex(t[s - 3], t[s - 1], "ellipse");
          break;
        case 60:
          this.$ = t[s - 3], a.addVertex(t[s - 3], t[s - 1], "stadium");
          break;
        case 61:
          this.$ = t[s - 3], a.addVertex(t[s - 3], t[s - 1], "subroutine");
          break;
        case 62:
          this.$ = t[s - 7], a.addVertex(t[s - 7], t[s - 1], "rect", void 0, void 0, void 0, /* @__PURE__ */ Object.fromEntries([
            [
              t[s - 5],
              t[s - 3]
            ]
          ]));
          break;
        case 63:
          this.$ = t[s - 3], a.addVertex(t[s - 3], t[s - 1], "cylinder");
          break;
        case 64:
          this.$ = t[s - 3], a.addVertex(t[s - 3], t[s - 1], "round");
          break;
        case 65:
          this.$ = t[s - 3], a.addVertex(t[s - 3], t[s - 1], "diamond");
          break;
        case 66:
          this.$ = t[s - 5], a.addVertex(t[s - 5], t[s - 2], "hexagon");
          break;
        case 67:
          this.$ = t[s - 3], a.addVertex(t[s - 3], t[s - 1], "odd");
          break;
        case 68:
          this.$ = t[s - 3], a.addVertex(t[s - 3], t[s - 1], "trapezoid");
          break;
        case 69:
          this.$ = t[s - 3], a.addVertex(t[s - 3], t[s - 1], "inv_trapezoid");
          break;
        case 70:
          this.$ = t[s - 3], a.addVertex(t[s - 3], t[s - 1], "lean_right");
          break;
        case 71:
          this.$ = t[s - 3], a.addVertex(t[s - 3], t[s - 1], "lean_left");
          break;
        case 72:
          this.$ = t[s], a.addVertex(t[s]);
          break;
        case 73:
          t[s - 1].text = t[s], this.$ = t[s - 1];
          break;
        case 74:
        case 75:
          t[s - 2].text = t[s - 1], this.$ = t[s - 2];
          break;
        case 76:
          this.$ = t[s];
          break;
        case 77:
          var q = /* @__PURE__ */ a.destructLink(t[s], t[s - 2]);
          this.$ = {
            type: q.type,
            stroke: q.stroke,
            length: q.length,
            text: t[s - 1]
          };
          break;
        case 78:
          this.$ = {
            text: t[s],
            type: "text"
          };
          break;
        case 79:
          this.$ = {
            text: t[s - 1].text + "" + t[s],
            type: t[s - 1].type
          };
          break;
        case 80:
          this.$ = {
            text: t[s],
            type: "string"
          };
          break;
        case 81:
          this.$ = {
            text: t[s],
            type: "markdown"
          };
          break;
        case 82:
          var q = /* @__PURE__ */ a.destructLink(t[s]);
          this.$ = {
            type: q.type,
            stroke: q.stroke,
            length: q.length
          };
          break;
        case 83:
          this.$ = t[s - 1];
          break;
        case 84:
          this.$ = {
            text: t[s],
            type: "text"
          };
          break;
        case 85:
          this.$ = {
            text: t[s - 1].text + "" + t[s],
            type: t[s - 1].type
          };
          break;
        case 86:
          this.$ = {
            text: t[s],
            type: "string"
          };
          break;
        case 87:
        case 102:
          this.$ = {
            text: t[s],
            type: "markdown"
          };
          break;
        case 99:
          this.$ = {
            text: t[s],
            type: "text"
          };
          break;
        case 100:
          this.$ = {
            text: t[s - 1].text + "" + t[s],
            type: t[s - 1].type
          };
          break;
        case 101:
          this.$ = {
            text: t[s],
            type: "text"
          };
          break;
        case 103:
          this.$ = t[s - 4], a.addClass(t[s - 2], t[s]);
          break;
        case 104:
          this.$ = t[s - 4], a.setClass(t[s - 2], t[s]);
          break;
        case 105:
        case 113:
          this.$ = t[s - 1], a.setClickEvent(t[s - 1], t[s]);
          break;
        case 106:
        case 114:
          this.$ = t[s - 3], a.setClickEvent(t[s - 3], t[s - 2]), a.setTooltip(t[s - 3], t[s]);
          break;
        case 107:
          this.$ = t[s - 2], a.setClickEvent(t[s - 2], t[s - 1], t[s]);
          break;
        case 108:
          this.$ = t[s - 4], a.setClickEvent(t[s - 4], t[s - 3], t[s - 2]), a.setTooltip(t[s - 4], t[s]);
          break;
        case 109:
          this.$ = t[s - 2], a.setLink(t[s - 2], t[s]);
          break;
        case 110:
          this.$ = t[s - 4], a.setLink(t[s - 4], t[s - 2]), a.setTooltip(t[s - 4], t[s]);
          break;
        case 111:
          this.$ = t[s - 4], a.setLink(t[s - 4], t[s - 2], t[s]);
          break;
        case 112:
          this.$ = t[s - 6], a.setLink(t[s - 6], t[s - 4], t[s]), a.setTooltip(t[s - 6], t[s - 2]);
          break;
        case 115:
          this.$ = t[s - 1], a.setLink(t[s - 1], t[s]);
          break;
        case 116:
          this.$ = t[s - 3], a.setLink(t[s - 3], t[s - 2]), a.setTooltip(t[s - 3], t[s]);
          break;
        case 117:
          this.$ = t[s - 3], a.setLink(t[s - 3], t[s - 2], t[s]);
          break;
        case 118:
          this.$ = t[s - 5], a.setLink(t[s - 5], t[s - 4], t[s]), a.setTooltip(t[s - 5], t[s - 2]);
          break;
        case 119:
          this.$ = t[s - 4], a.addVertex(t[s - 2], void 0, void 0, t[s]);
          break;
        case 120:
          this.$ = t[s - 4], a.updateLink([
            t[s - 2]
          ], t[s]);
          break;
        case 121:
          this.$ = t[s - 4], a.updateLink(t[s - 2], t[s]);
          break;
        case 122:
          this.$ = t[s - 8], a.updateLinkInterpolate([
            t[s - 6]
          ], t[s - 2]), a.updateLink([
            t[s - 6]
          ], t[s]);
          break;
        case 123:
          this.$ = t[s - 8], a.updateLinkInterpolate(t[s - 6], t[s - 2]), a.updateLink(t[s - 6], t[s]);
          break;
        case 124:
          this.$ = t[s - 6], a.updateLinkInterpolate([
            t[s - 4]
          ], t[s]);
          break;
        case 125:
          this.$ = t[s - 6], a.updateLinkInterpolate(t[s - 4], t[s]);
          break;
        case 126:
        case 128:
          this.$ = [
            t[s]
          ];
          break;
        case 127:
        case 129:
          t[s - 2].push(t[s]), this.$ = t[s - 2];
          break;
        case 131:
          this.$ = t[s - 1] + t[s];
          break;
        case 179:
          this.$ = t[s];
          break;
        case 180:
          this.$ = t[s - 1] + "" + t[s];
          break;
        case 182:
          this.$ = t[s - 1] + "" + t[s];
          break;
        case 183:
          this.$ = {
            stmt: "dir",
            value: "TB"
          };
          break;
        case 184:
          this.$ = {
            stmt: "dir",
            value: "BT"
          };
          break;
        case 185:
          this.$ = {
            stmt: "dir",
            value: "RL"
          };
          break;
        case 186:
          this.$ = {
            stmt: "dir",
            value: "LR"
          };
          break;
      }
    }, "anonymous"),
    table: [
      {
        3: 1,
        4: 2,
        9: r,
        10: n,
        12: i
      },
      {
        1: [
          3
        ]
      },
      /* @__PURE__ */ e(o, f, {
        5: 6
      }),
      {
        4: 7,
        9: r,
        10: n,
        12: i
      },
      {
        4: 8,
        9: r,
        10: n,
        12: i
      },
      {
        13: [
          1,
          9
        ],
        14: [
          1,
          10
        ]
      },
      {
        1: [
          2,
          1
        ],
        6: 11,
        7: 12,
        8: g,
        9: S2,
        10: h,
        11: l,
        20: 17,
        22: 18,
        23: 19,
        24: 20,
        25: 21,
        26: 22,
        27: T,
        33: 24,
        34: b,
        36: K,
        38: Y,
        42: 28,
        43: 38,
        44: k,
        45: 39,
        47: 40,
        60: y,
        83: me,
        84: Ee,
        85: xe,
        86: ze,
        87: He,
        88: _,
        101: w2,
        104: V2,
        105: L,
        108: I,
        110: v,
        112: 41,
        113: R,
        114: N,
        115: P,
        120: Xe,
        121: qe,
        122: Qe,
        123: Je
      },
      /* @__PURE__ */ e(o, [
        2,
        9
      ]),
      /* @__PURE__ */ e(o, [
        2,
        10
      ]),
      /* @__PURE__ */ e(o, [
        2,
        11
      ]),
      {
        8: [
          1,
          54
        ],
        9: [
          1,
          55
        ],
        10: pe,
        15: 53,
        18: 56
      },
      /* @__PURE__ */ e(D, [
        2,
        3
      ]),
      /* @__PURE__ */ e(D, [
        2,
        4
      ]),
      /* @__PURE__ */ e(D, [
        2,
        5
      ]),
      /* @__PURE__ */ e(D, [
        2,
        6
      ]),
      /* @__PURE__ */ e(D, [
        2,
        7
      ]),
      /* @__PURE__ */ e(D, [
        2,
        8
      ]),
      {
        8: ee,
        9: te,
        11: se2,
        21: 58,
        41: 59,
        72: 63,
        75: [
          1,
          64
        ],
        77: [
          1,
          65
        ]
      },
      {
        8: ee,
        9: te,
        11: se2,
        21: 66
      },
      {
        8: ee,
        9: te,
        11: se2,
        21: 67
      },
      {
        8: ee,
        9: te,
        11: se2,
        21: 68
      },
      {
        8: ee,
        9: te,
        11: se2,
        21: 69
      },
      {
        8: ee,
        9: te,
        11: se2,
        21: 70
      },
      {
        8: ee,
        9: te,
        10: [
          1,
          71
        ],
        11: se2,
        21: 72
      },
      /* @__PURE__ */ e(D, [
        2,
        36
      ]),
      {
        35: [
          1,
          73
        ]
      },
      {
        37: [
          1,
          74
        ]
      },
      /* @__PURE__ */ e(D, [
        2,
        39
      ]),
      /* @__PURE__ */ e(Fe, [
        2,
        50
      ], {
        18: 75,
        39: 76,
        10: pe,
        40: y1
      }),
      {
        10: [
          1,
          78
        ]
      },
      {
        10: [
          1,
          79
        ]
      },
      {
        10: [
          1,
          80
        ]
      },
      {
        10: [
          1,
          81
        ]
      },
      {
        14: Te,
        44: Be,
        60: _e,
        79: [
          1,
          85
        ],
        88: we,
        94: [
          1,
          82
        ],
        96: [
          1,
          83
        ],
        100: 84,
        104: Ve,
        105: Le,
        108: Ie2,
        110: ve,
        113: Re,
        114: Ne,
        115: Pe,
        119: 86
      },
      /* @__PURE__ */ e(D, [
        2,
        183
      ]),
      /* @__PURE__ */ e(D, [
        2,
        184
      ]),
      /* @__PURE__ */ e(D, [
        2,
        185
      ]),
      /* @__PURE__ */ e(D, [
        2,
        186
      ]),
      /* @__PURE__ */ e(ye, [
        2,
        51
      ]),
      /* @__PURE__ */ e(ye, [
        2,
        54
      ], {
        46: [
          1,
          98
        ]
      }),
      /* @__PURE__ */ e(M, [
        2,
        72
      ], {
        112: 111,
        29: [
          1,
          99
        ],
        44: k,
        48: [
          1,
          100
        ],
        50: [
          1,
          101
        ],
        52: [
          1,
          102
        ],
        54: [
          1,
          103
        ],
        56: [
          1,
          104
        ],
        58: [
          1,
          105
        ],
        60: y,
        63: [
          1,
          106
        ],
        65: [
          1,
          107
        ],
        67: [
          1,
          108
        ],
        68: [
          1,
          109
        ],
        70: [
          1,
          110
        ],
        88: _,
        101: w2,
        104: V2,
        105: L,
        108: I,
        110: v,
        113: R,
        114: N,
        115: P
      }),
      /* @__PURE__ */ e(z, [
        2,
        179
      ]),
      /* @__PURE__ */ e(z, [
        2,
        140
      ]),
      /* @__PURE__ */ e(z, [
        2,
        141
      ]),
      /* @__PURE__ */ e(z, [
        2,
        142
      ]),
      /* @__PURE__ */ e(z, [
        2,
        143
      ]),
      /* @__PURE__ */ e(z, [
        2,
        144
      ]),
      /* @__PURE__ */ e(z, [
        2,
        145
      ]),
      /* @__PURE__ */ e(z, [
        2,
        146
      ]),
      /* @__PURE__ */ e(z, [
        2,
        147
      ]),
      /* @__PURE__ */ e(z, [
        2,
        148
      ]),
      /* @__PURE__ */ e(z, [
        2,
        149
      ]),
      /* @__PURE__ */ e(z, [
        2,
        150
      ]),
      /* @__PURE__ */ e(o, [
        2,
        12
      ]),
      /* @__PURE__ */ e(o, [
        2,
        18
      ]),
      /* @__PURE__ */ e(o, [
        2,
        19
      ]),
      {
        9: [
          1,
          112
        ]
      },
      /* @__PURE__ */ e(S1, [
        2,
        26
      ], {
        18: 113,
        10: pe
      }),
      /* @__PURE__ */ e(D, [
        2,
        27
      ]),
      {
        42: 114,
        43: 38,
        44: k,
        45: 39,
        47: 40,
        60: y,
        88: _,
        101: w2,
        104: V2,
        105: L,
        108: I,
        110: v,
        112: 41,
        113: R,
        114: N,
        115: P
      },
      /* @__PURE__ */ e(D, [
        2,
        40
      ]),
      /* @__PURE__ */ e(D, [
        2,
        41
      ]),
      /* @__PURE__ */ e(D, [
        2,
        42
      ]),
      /* @__PURE__ */ e(We, [
        2,
        76
      ], {
        73: 115,
        62: [
          1,
          117
        ],
        74: [
          1,
          116
        ]
      }),
      {
        76: 118,
        78: 119,
        79: [
          1,
          120
        ],
        80: [
          1,
          121
        ],
        115: D1,
        118: C1
      },
      /* @__PURE__ */ e([
        44,
        60,
        62,
        74,
        88,
        101,
        104,
        105,
        108,
        110,
        113,
        114,
        115
      ], [
        2,
        82
      ]),
      /* @__PURE__ */ e(D, [
        2,
        28
      ]),
      /* @__PURE__ */ e(D, [
        2,
        29
      ]),
      /* @__PURE__ */ e(D, [
        2,
        30
      ]),
      /* @__PURE__ */ e(D, [
        2,
        31
      ]),
      /* @__PURE__ */ e(D, [
        2,
        32
      ]),
      {
        10: F1,
        12: T1,
        14: B1,
        27: _1,
        28: 124,
        32: w1,
        44: V1,
        60: L1,
        75: I1,
        79: [
          1,
          126
        ],
        80: [
          1,
          127
        ],
        82: 137,
        83: v1,
        84: R1,
        85: N1,
        86: P1,
        87: O1,
        88: M1,
        89: G1,
        90: 125,
        104: U1,
        108: W1,
        110: j1,
        113: K1,
        114: Y1,
        115: z1
      },
      /* @__PURE__ */ e(a1, f, {
        5: 150
      }),
      /* @__PURE__ */ e(D, [
        2,
        37
      ]),
      /* @__PURE__ */ e(D, [
        2,
        38
      ]),
      /* @__PURE__ */ e(Fe, [
        2,
        48
      ], {
        44: H1
      }),
      /* @__PURE__ */ e(Fe, [
        2,
        49
      ], {
        18: 152,
        10: pe,
        40: X1
      }),
      /* @__PURE__ */ e(ye, [
        2,
        44
      ]),
      {
        44: k,
        47: 154,
        60: y,
        88: _,
        101: w2,
        104: V2,
        105: L,
        108: I,
        110: v,
        112: 41,
        113: R,
        114: N,
        115: P
      },
      {
        101: [
          1,
          155
        ],
        102: 156,
        104: [
          1,
          157
        ]
      },
      {
        44: k,
        47: 158,
        60: y,
        88: _,
        101: w2,
        104: V2,
        105: L,
        108: I,
        110: v,
        112: 41,
        113: R,
        114: N,
        115: P
      },
      {
        44: k,
        47: 159,
        60: y,
        88: _,
        101: w2,
        104: V2,
        105: L,
        108: I,
        110: v,
        112: 41,
        113: R,
        114: N,
        115: P
      },
      /* @__PURE__ */ e(B, [
        2,
        105
      ], {
        10: [
          1,
          160
        ],
        95: [
          1,
          161
        ]
      }),
      {
        79: [
          1,
          162
        ]
      },
      /* @__PURE__ */ e(B, [
        2,
        113
      ], {
        119: 164,
        10: [
          1,
          163
        ],
        14: Te,
        44: Be,
        60: _e,
        88: we,
        104: Ve,
        105: Le,
        108: Ie2,
        110: ve,
        113: Re,
        114: Ne,
        115: Pe
      }),
      /* @__PURE__ */ e(B, [
        2,
        115
      ], {
        10: [
          1,
          165
        ]
      }),
      /* @__PURE__ */ e(H, [
        2,
        181
      ]),
      /* @__PURE__ */ e(H, [
        2,
        168
      ]),
      /* @__PURE__ */ e(H, [
        2,
        169
      ]),
      /* @__PURE__ */ e(H, [
        2,
        170
      ]),
      /* @__PURE__ */ e(H, [
        2,
        171
      ]),
      /* @__PURE__ */ e(H, [
        2,
        172
      ]),
      /* @__PURE__ */ e(H, [
        2,
        173
      ]),
      /* @__PURE__ */ e(H, [
        2,
        174
      ]),
      /* @__PURE__ */ e(H, [
        2,
        175
      ]),
      /* @__PURE__ */ e(H, [
        2,
        176
      ]),
      /* @__PURE__ */ e(H, [
        2,
        177
      ]),
      /* @__PURE__ */ e(H, [
        2,
        178
      ]),
      {
        44: k,
        47: 166,
        60: y,
        88: _,
        101: w2,
        104: V2,
        105: L,
        108: I,
        110: v,
        112: 41,
        113: R,
        114: N,
        115: P
      },
      {
        30: 167,
        67: A,
        79: G,
        80: U,
        81: 168,
        115: m,
        116: E,
        117: x
      },
      {
        30: 175,
        67: A,
        79: G,
        80: U,
        81: 168,
        115: m,
        116: E,
        117: x
      },
      {
        30: 177,
        50: [
          1,
          176
        ],
        67: A,
        79: G,
        80: U,
        81: 168,
        115: m,
        116: E,
        117: x
      },
      {
        30: 178,
        67: A,
        79: G,
        80: U,
        81: 168,
        115: m,
        116: E,
        117: x
      },
      {
        30: 179,
        67: A,
        79: G,
        80: U,
        81: 168,
        115: m,
        116: E,
        117: x
      },
      {
        30: 180,
        67: A,
        79: G,
        80: U,
        81: 168,
        115: m,
        116: E,
        117: x
      },
      {
        108: [
          1,
          181
        ]
      },
      {
        30: 182,
        67: A,
        79: G,
        80: U,
        81: 168,
        115: m,
        116: E,
        117: x
      },
      {
        30: 183,
        65: [
          1,
          184
        ],
        67: A,
        79: G,
        80: U,
        81: 168,
        115: m,
        116: E,
        117: x
      },
      {
        30: 185,
        67: A,
        79: G,
        80: U,
        81: 168,
        115: m,
        116: E,
        117: x
      },
      {
        30: 186,
        67: A,
        79: G,
        80: U,
        81: 168,
        115: m,
        116: E,
        117: x
      },
      {
        30: 187,
        67: A,
        79: G,
        80: U,
        81: 168,
        115: m,
        116: E,
        117: x
      },
      /* @__PURE__ */ e(z, [
        2,
        180
      ]),
      /* @__PURE__ */ e(o, [
        2,
        20
      ]),
      /* @__PURE__ */ e(S1, [
        2,
        25
      ]),
      /* @__PURE__ */ e(Fe, [
        2,
        46
      ], {
        39: 188,
        18: 189,
        10: pe,
        40: y1
      }),
      /* @__PURE__ */ e(We, [
        2,
        73
      ], {
        10: [
          1,
          190
        ]
      }),
      {
        10: [
          1,
          191
        ]
      },
      {
        30: 192,
        67: A,
        79: G,
        80: U,
        81: 168,
        115: m,
        116: E,
        117: x
      },
      {
        77: [
          1,
          193
        ],
        78: 194,
        115: D1,
        118: C1
      },
      /* @__PURE__ */ e(Oe, [
        2,
        78
      ]),
      /* @__PURE__ */ e(Oe, [
        2,
        80
      ]),
      /* @__PURE__ */ e(Oe, [
        2,
        81
      ]),
      /* @__PURE__ */ e(Oe, [
        2,
        166
      ]),
      /* @__PURE__ */ e(Oe, [
        2,
        167
      ]),
      {
        8: ee,
        9: te,
        10: F1,
        11: se2,
        12: T1,
        14: B1,
        21: 196,
        27: _1,
        29: [
          1,
          195
        ],
        32: w1,
        44: V1,
        60: L1,
        75: I1,
        82: 137,
        83: v1,
        84: R1,
        85: N1,
        86: P1,
        87: O1,
        88: M1,
        89: G1,
        90: 197,
        104: U1,
        108: W1,
        110: j1,
        113: K1,
        114: Y1,
        115: z1
      },
      /* @__PURE__ */ e(C, [
        2,
        99
      ]),
      /* @__PURE__ */ e(C, [
        2,
        101
      ]),
      /* @__PURE__ */ e(C, [
        2,
        102
      ]),
      /* @__PURE__ */ e(C, [
        2,
        155
      ]),
      /* @__PURE__ */ e(C, [
        2,
        156
      ]),
      /* @__PURE__ */ e(C, [
        2,
        157
      ]),
      /* @__PURE__ */ e(C, [
        2,
        158
      ]),
      /* @__PURE__ */ e(C, [
        2,
        159
      ]),
      /* @__PURE__ */ e(C, [
        2,
        160
      ]),
      /* @__PURE__ */ e(C, [
        2,
        161
      ]),
      /* @__PURE__ */ e(C, [
        2,
        162
      ]),
      /* @__PURE__ */ e(C, [
        2,
        163
      ]),
      /* @__PURE__ */ e(C, [
        2,
        164
      ]),
      /* @__PURE__ */ e(C, [
        2,
        165
      ]),
      /* @__PURE__ */ e(C, [
        2,
        88
      ]),
      /* @__PURE__ */ e(C, [
        2,
        89
      ]),
      /* @__PURE__ */ e(C, [
        2,
        90
      ]),
      /* @__PURE__ */ e(C, [
        2,
        91
      ]),
      /* @__PURE__ */ e(C, [
        2,
        92
      ]),
      /* @__PURE__ */ e(C, [
        2,
        93
      ]),
      /* @__PURE__ */ e(C, [
        2,
        94
      ]),
      /* @__PURE__ */ e(C, [
        2,
        95
      ]),
      /* @__PURE__ */ e(C, [
        2,
        96
      ]),
      /* @__PURE__ */ e(C, [
        2,
        97
      ]),
      /* @__PURE__ */ e(C, [
        2,
        98
      ]),
      {
        6: 11,
        7: 12,
        8: g,
        9: S2,
        10: h,
        11: l,
        20: 17,
        22: 18,
        23: 19,
        24: 20,
        25: 21,
        26: 22,
        27: T,
        32: [
          1,
          198
        ],
        33: 24,
        34: b,
        36: K,
        38: Y,
        42: 28,
        43: 38,
        44: k,
        45: 39,
        47: 40,
        60: y,
        83: me,
        84: Ee,
        85: xe,
        86: ze,
        87: He,
        88: _,
        101: w2,
        104: V2,
        105: L,
        108: I,
        110: v,
        112: 41,
        113: R,
        114: N,
        115: P,
        120: Xe,
        121: qe,
        122: Qe,
        123: Je
      },
      {
        10: pe,
        18: 199
      },
      {
        44: [
          1,
          200
        ]
      },
      /* @__PURE__ */ e(ye, [
        2,
        43
      ]),
      {
        10: [
          1,
          201
        ],
        44: k,
        60: y,
        88: _,
        101: w2,
        104: V2,
        105: L,
        108: I,
        110: v,
        112: 111,
        113: R,
        114: N,
        115: P
      },
      {
        10: [
          1,
          202
        ]
      },
      {
        10: [
          1,
          203
        ],
        105: [
          1,
          204
        ]
      },
      /* @__PURE__ */ e(q1, [
        2,
        126
      ]),
      {
        10: [
          1,
          205
        ],
        44: k,
        60: y,
        88: _,
        101: w2,
        104: V2,
        105: L,
        108: I,
        110: v,
        112: 111,
        113: R,
        114: N,
        115: P
      },
      {
        10: [
          1,
          206
        ],
        44: k,
        60: y,
        88: _,
        101: w2,
        104: V2,
        105: L,
        108: I,
        110: v,
        112: 111,
        113: R,
        114: N,
        115: P
      },
      {
        79: [
          1,
          207
        ]
      },
      /* @__PURE__ */ e(B, [
        2,
        107
      ], {
        10: [
          1,
          208
        ]
      }),
      /* @__PURE__ */ e(B, [
        2,
        109
      ], {
        10: [
          1,
          209
        ]
      }),
      {
        79: [
          1,
          210
        ]
      },
      /* @__PURE__ */ e(H, [
        2,
        182
      ]),
      {
        79: [
          1,
          211
        ],
        97: [
          1,
          212
        ]
      },
      /* @__PURE__ */ e(ye, [
        2,
        55
      ], {
        112: 111,
        44: k,
        60: y,
        88: _,
        101: w2,
        104: V2,
        105: L,
        108: I,
        110: v,
        113: R,
        114: N,
        115: P
      }),
      {
        31: [
          1,
          213
        ],
        67: A,
        81: 214,
        115: m,
        116: E,
        117: x
      },
      /* @__PURE__ */ e(ge, [
        2,
        84
      ]),
      /* @__PURE__ */ e(ge, [
        2,
        86
      ]),
      /* @__PURE__ */ e(ge, [
        2,
        87
      ]),
      /* @__PURE__ */ e(ge, [
        2,
        151
      ]),
      /* @__PURE__ */ e(ge, [
        2,
        152
      ]),
      /* @__PURE__ */ e(ge, [
        2,
        153
      ]),
      /* @__PURE__ */ e(ge, [
        2,
        154
      ]),
      {
        49: [
          1,
          215
        ],
        67: A,
        81: 214,
        115: m,
        116: E,
        117: x
      },
      {
        30: 216,
        67: A,
        79: G,
        80: U,
        81: 168,
        115: m,
        116: E,
        117: x
      },
      {
        51: [
          1,
          217
        ],
        67: A,
        81: 214,
        115: m,
        116: E,
        117: x
      },
      {
        53: [
          1,
          218
        ],
        67: A,
        81: 214,
        115: m,
        116: E,
        117: x
      },
      {
        55: [
          1,
          219
        ],
        67: A,
        81: 214,
        115: m,
        116: E,
        117: x
      },
      {
        57: [
          1,
          220
        ],
        67: A,
        81: 214,
        115: m,
        116: E,
        117: x
      },
      {
        60: [
          1,
          221
        ]
      },
      {
        64: [
          1,
          222
        ],
        67: A,
        81: 214,
        115: m,
        116: E,
        117: x
      },
      {
        66: [
          1,
          223
        ],
        67: A,
        81: 214,
        115: m,
        116: E,
        117: x
      },
      {
        30: 224,
        67: A,
        79: G,
        80: U,
        81: 168,
        115: m,
        116: E,
        117: x
      },
      {
        31: [
          1,
          225
        ],
        67: A,
        81: 214,
        115: m,
        116: E,
        117: x
      },
      {
        67: A,
        69: [
          1,
          226
        ],
        71: [
          1,
          227
        ],
        81: 214,
        115: m,
        116: E,
        117: x
      },
      {
        67: A,
        69: [
          1,
          229
        ],
        71: [
          1,
          228
        ],
        81: 214,
        115: m,
        116: E,
        117: x
      },
      /* @__PURE__ */ e(Fe, [
        2,
        45
      ], {
        18: 152,
        10: pe,
        40: X1
      }),
      /* @__PURE__ */ e(Fe, [
        2,
        47
      ], {
        44: H1
      }),
      /* @__PURE__ */ e(We, [
        2,
        75
      ]),
      /* @__PURE__ */ e(We, [
        2,
        74
      ]),
      {
        62: [
          1,
          230
        ],
        67: A,
        81: 214,
        115: m,
        116: E,
        117: x
      },
      /* @__PURE__ */ e(We, [
        2,
        77
      ]),
      /* @__PURE__ */ e(Oe, [
        2,
        79
      ]),
      {
        30: 231,
        67: A,
        79: G,
        80: U,
        81: 168,
        115: m,
        116: E,
        117: x
      },
      /* @__PURE__ */ e(a1, f, {
        5: 232
      }),
      /* @__PURE__ */ e(C, [
        2,
        100
      ]),
      /* @__PURE__ */ e(D, [
        2,
        35
      ]),
      {
        43: 233,
        44: k,
        45: 39,
        47: 40,
        60: y,
        88: _,
        101: w2,
        104: V2,
        105: L,
        108: I,
        110: v,
        112: 41,
        113: R,
        114: N,
        115: P
      },
      {
        10: pe,
        18: 234
      },
      {
        10: re,
        60: ne,
        83: ie,
        91: 235,
        104: ae,
        106: 236,
        107: 237,
        108: ue,
        109: oe,
        110: le,
        111: ce
      },
      {
        10: re,
        60: ne,
        83: ie,
        91: 246,
        103: [
          1,
          247
        ],
        104: ae,
        106: 236,
        107: 237,
        108: ue,
        109: oe,
        110: le,
        111: ce
      },
      {
        10: re,
        60: ne,
        83: ie,
        91: 248,
        103: [
          1,
          249
        ],
        104: ae,
        106: 236,
        107: 237,
        108: ue,
        109: oe,
        110: le,
        111: ce
      },
      {
        104: [
          1,
          250
        ]
      },
      {
        10: re,
        60: ne,
        83: ie,
        91: 251,
        104: ae,
        106: 236,
        107: 237,
        108: ue,
        109: oe,
        110: le,
        111: ce
      },
      {
        44: k,
        47: 252,
        60: y,
        88: _,
        101: w2,
        104: V2,
        105: L,
        108: I,
        110: v,
        112: 41,
        113: R,
        114: N,
        115: P
      },
      /* @__PURE__ */ e(B, [
        2,
        106
      ]),
      {
        79: [
          1,
          253
        ]
      },
      {
        79: [
          1,
          254
        ],
        97: [
          1,
          255
        ]
      },
      /* @__PURE__ */ e(B, [
        2,
        114
      ]),
      /* @__PURE__ */ e(B, [
        2,
        116
      ], {
        10: [
          1,
          256
        ]
      }),
      /* @__PURE__ */ e(B, [
        2,
        117
      ]),
      /* @__PURE__ */ e(M, [
        2,
        56
      ]),
      /* @__PURE__ */ e(ge, [
        2,
        85
      ]),
      /* @__PURE__ */ e(M, [
        2,
        57
      ]),
      {
        51: [
          1,
          257
        ],
        67: A,
        81: 214,
        115: m,
        116: E,
        117: x
      },
      /* @__PURE__ */ e(M, [
        2,
        64
      ]),
      /* @__PURE__ */ e(M, [
        2,
        59
      ]),
      /* @__PURE__ */ e(M, [
        2,
        60
      ]),
      /* @__PURE__ */ e(M, [
        2,
        61
      ]),
      {
        108: [
          1,
          258
        ]
      },
      /* @__PURE__ */ e(M, [
        2,
        63
      ]),
      /* @__PURE__ */ e(M, [
        2,
        65
      ]),
      {
        66: [
          1,
          259
        ],
        67: A,
        81: 214,
        115: m,
        116: E,
        117: x
      },
      /* @__PURE__ */ e(M, [
        2,
        67
      ]),
      /* @__PURE__ */ e(M, [
        2,
        68
      ]),
      /* @__PURE__ */ e(M, [
        2,
        70
      ]),
      /* @__PURE__ */ e(M, [
        2,
        69
      ]),
      /* @__PURE__ */ e(M, [
        2,
        71
      ]),
      /* @__PURE__ */ e([
        10,
        44,
        60,
        88,
        101,
        104,
        105,
        108,
        110,
        113,
        114,
        115
      ], [
        2,
        83
      ]),
      {
        31: [
          1,
          260
        ],
        67: A,
        81: 214,
        115: m,
        116: E,
        117: x
      },
      {
        6: 11,
        7: 12,
        8: g,
        9: S2,
        10: h,
        11: l,
        20: 17,
        22: 18,
        23: 19,
        24: 20,
        25: 21,
        26: 22,
        27: T,
        32: [
          1,
          261
        ],
        33: 24,
        34: b,
        36: K,
        38: Y,
        42: 28,
        43: 38,
        44: k,
        45: 39,
        47: 40,
        60: y,
        83: me,
        84: Ee,
        85: xe,
        86: ze,
        87: He,
        88: _,
        101: w2,
        104: V2,
        105: L,
        108: I,
        110: v,
        112: 41,
        113: R,
        114: N,
        115: P,
        120: Xe,
        121: qe,
        122: Qe,
        123: Je
      },
      /* @__PURE__ */ e(ye, [
        2,
        53
      ]),
      {
        43: 262,
        44: k,
        45: 39,
        47: 40,
        60: y,
        88: _,
        101: w2,
        104: V2,
        105: L,
        108: I,
        110: v,
        112: 41,
        113: R,
        114: N,
        115: P
      },
      /* @__PURE__ */ e(B, [
        2,
        119
      ], {
        105: Me
      }),
      /* @__PURE__ */ e(Q1, [
        2,
        128
      ], {
        107: 264,
        10: re,
        60: ne,
        83: ie,
        104: ae,
        108: ue,
        109: oe,
        110: le,
        111: ce
      }),
      /* @__PURE__ */ e($2, [
        2,
        130
      ]),
      /* @__PURE__ */ e($2, [
        2,
        132
      ]),
      /* @__PURE__ */ e($2, [
        2,
        133
      ]),
      /* @__PURE__ */ e($2, [
        2,
        134
      ]),
      /* @__PURE__ */ e($2, [
        2,
        135
      ]),
      /* @__PURE__ */ e($2, [
        2,
        136
      ]),
      /* @__PURE__ */ e($2, [
        2,
        137
      ]),
      /* @__PURE__ */ e($2, [
        2,
        138
      ]),
      /* @__PURE__ */ e($2, [
        2,
        139
      ]),
      /* @__PURE__ */ e(B, [
        2,
        120
      ], {
        105: Me
      }),
      {
        10: [
          1,
          265
        ]
      },
      /* @__PURE__ */ e(B, [
        2,
        121
      ], {
        105: Me
      }),
      {
        10: [
          1,
          266
        ]
      },
      /* @__PURE__ */ e(q1, [
        2,
        127
      ]),
      /* @__PURE__ */ e(B, [
        2,
        103
      ], {
        105: Me
      }),
      /* @__PURE__ */ e(B, [
        2,
        104
      ], {
        112: 111,
        44: k,
        60: y,
        88: _,
        101: w2,
        104: V2,
        105: L,
        108: I,
        110: v,
        113: R,
        114: N,
        115: P
      }),
      /* @__PURE__ */ e(B, [
        2,
        108
      ]),
      /* @__PURE__ */ e(B, [
        2,
        110
      ], {
        10: [
          1,
          267
        ]
      }),
      /* @__PURE__ */ e(B, [
        2,
        111
      ]),
      {
        97: [
          1,
          268
        ]
      },
      {
        51: [
          1,
          269
        ]
      },
      {
        62: [
          1,
          270
        ]
      },
      {
        66: [
          1,
          271
        ]
      },
      {
        8: ee,
        9: te,
        11: se2,
        21: 272
      },
      /* @__PURE__ */ e(D, [
        2,
        34
      ]),
      /* @__PURE__ */ e(ye, [
        2,
        52
      ]),
      {
        10: re,
        60: ne,
        83: ie,
        104: ae,
        106: 273,
        107: 237,
        108: ue,
        109: oe,
        110: le,
        111: ce
      },
      /* @__PURE__ */ e($2, [
        2,
        131
      ]),
      {
        14: Te,
        44: Be,
        60: _e,
        88: we,
        100: 274,
        104: Ve,
        105: Le,
        108: Ie2,
        110: ve,
        113: Re,
        114: Ne,
        115: Pe,
        119: 86
      },
      {
        14: Te,
        44: Be,
        60: _e,
        88: we,
        100: 275,
        104: Ve,
        105: Le,
        108: Ie2,
        110: ve,
        113: Re,
        114: Ne,
        115: Pe,
        119: 86
      },
      {
        97: [
          1,
          276
        ]
      },
      /* @__PURE__ */ e(B, [
        2,
        118
      ]),
      /* @__PURE__ */ e(M, [
        2,
        58
      ]),
      {
        30: 277,
        67: A,
        79: G,
        80: U,
        81: 168,
        115: m,
        116: E,
        117: x
      },
      /* @__PURE__ */ e(M, [
        2,
        66
      ]),
      /* @__PURE__ */ e(a1, f, {
        5: 278
      }),
      /* @__PURE__ */ e(Q1, [
        2,
        129
      ], {
        107: 264,
        10: re,
        60: ne,
        83: ie,
        104: ae,
        108: ue,
        109: oe,
        110: le,
        111: ce
      }),
      /* @__PURE__ */ e(B, [
        2,
        124
      ], {
        119: 164,
        10: [
          1,
          279
        ],
        14: Te,
        44: Be,
        60: _e,
        88: we,
        104: Ve,
        105: Le,
        108: Ie2,
        110: ve,
        113: Re,
        114: Ne,
        115: Pe
      }),
      /* @__PURE__ */ e(B, [
        2,
        125
      ], {
        119: 164,
        10: [
          1,
          280
        ],
        14: Te,
        44: Be,
        60: _e,
        88: we,
        104: Ve,
        105: Le,
        108: Ie2,
        110: ve,
        113: Re,
        114: Ne,
        115: Pe
      }),
      /* @__PURE__ */ e(B, [
        2,
        112
      ]),
      {
        31: [
          1,
          281
        ],
        67: A,
        81: 214,
        115: m,
        116: E,
        117: x
      },
      {
        6: 11,
        7: 12,
        8: g,
        9: S2,
        10: h,
        11: l,
        20: 17,
        22: 18,
        23: 19,
        24: 20,
        25: 21,
        26: 22,
        27: T,
        32: [
          1,
          282
        ],
        33: 24,
        34: b,
        36: K,
        38: Y,
        42: 28,
        43: 38,
        44: k,
        45: 39,
        47: 40,
        60: y,
        83: me,
        84: Ee,
        85: xe,
        86: ze,
        87: He,
        88: _,
        101: w2,
        104: V2,
        105: L,
        108: I,
        110: v,
        112: 41,
        113: R,
        114: N,
        115: P,
        120: Xe,
        121: qe,
        122: Qe,
        123: Je
      },
      {
        10: re,
        60: ne,
        83: ie,
        91: 283,
        104: ae,
        106: 236,
        107: 237,
        108: ue,
        109: oe,
        110: le,
        111: ce
      },
      {
        10: re,
        60: ne,
        83: ie,
        91: 284,
        104: ae,
        106: 236,
        107: 237,
        108: ue,
        109: oe,
        110: le,
        111: ce
      },
      /* @__PURE__ */ e(M, [
        2,
        62
      ]),
      /* @__PURE__ */ e(D, [
        2,
        33
      ]),
      /* @__PURE__ */ e(B, [
        2,
        122
      ], {
        105: Me
      }),
      /* @__PURE__ */ e(B, [
        2,
        123
      ], {
        105: Me
      })
    ],
    defaultActions: {},
    parseError: /* @__PURE__ */ m$1(function(c, d) {
      if (d.recoverable) this.trace(c);
      else {
        var p = new Error(c);
        throw p.hash = d, p;
      }
    }, "parseError"),
    parse: /* @__PURE__ */ m$1(function(c) {
      var d = this, p = [
        0
      ], a = [], F = [
        null
      ], t = [], Se = this.table, s = "", q = 0, J1 = 0, Z1 = 0, vt = 2, $1 = 1, Rt = /* @__PURE__ */ t.slice.call(arguments, 1), O = /* @__PURE__ */ Object.create(this.lexer), De = {
        yy: {}
      };
      for (var l1 in this.yy) Object.prototype.hasOwnProperty.call(this.yy, l1) && (De.yy[l1] = this.yy[l1]);
      O.setInput(c, De.yy), De.yy.lexer = O, De.yy.parser = this, typeof O.yylloc > "u" && (O.yylloc = {});
      var c1 = O.yylloc;
      t.push(c1);
      var Nt = O.options && O.options.ranges;
      typeof De.yy.parseError == "function" ? this.parseError = De.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function Es(X) {
        p.length = p.length - 2 * X, F.length = F.length - X, t.length = t.length - X;
      }
      m$1(Es, "popStack");
      function Pt() {
        var X;
        return X = a.pop() || O.lex() || $1, typeof X != "number" && (X instanceof Array && (a = X, X = /* @__PURE__ */ a.pop()), X = d.symbols_[X] || X), X;
      }
      m$1(Pt, "lex");
      for (var W, h1, Ce, Q, xs, d1, Ge = {}, Ze, he, et, $e; ; ) {
        if (Ce = p[p.length - 1], this.defaultActions[Ce] ? Q = this.defaultActions[Ce] : ((W === null || typeof W > "u") && (W = /* @__PURE__ */ Pt()), Q = Se[Ce] && Se[Ce][W]), typeof Q > "u" || !Q.length || !Q[0]) {
          var f1 = "";
          $e = [];
          for (Ze in Se[Ce]) this.terminals_[Ze] && Ze > vt && $e.push("'" + this.terminals_[Ze] + "'");
          O.showPosition ? f1 = "Parse error on line " + (q + 1) + `:
` + O.showPosition() + `
Expecting ` + $e.join(", ") + ", got '" + (this.terminals_[W] || W) + "'" : f1 = "Parse error on line " + (q + 1) + ": Unexpected " + (W == $1 ? "end of input" : "'" + (this.terminals_[W] || W) + "'"), this.parseError(f1, {
            text: O.match,
            token: this.terminals_[W] || W,
            line: O.yylineno,
            loc: c1,
            expected: $e
          });
        }
        if (Q[0] instanceof Array && Q.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + Ce + ", token: " + W);
        switch (Q[0]) {
          case 1:
            p.push(W), F.push(O.yytext), t.push(O.yylloc), p.push(Q[1]), W = null, h1 ? (W = h1, h1 = null) : (J1 = O.yyleng, s = O.yytext, q = O.yylineno, c1 = O.yylloc, Z1 > 0);
            break;
          case 2:
            if (he = this.productions_[Q[1]][1], Ge.$ = F[F.length - he], Ge._$ = {
              first_line: t[t.length - (he || 1)].first_line,
              last_line: t[t.length - 1].last_line,
              first_column: t[t.length - (he || 1)].first_column,
              last_column: t[t.length - 1].last_column
            }, Nt && (Ge._$.range = [
              t[t.length - (he || 1)].range[0],
              t[t.length - 1].range[1]
            ]), d1 = /* @__PURE__ */ this.performAction.apply(Ge, /* @__PURE__ */ [
              s,
              J1,
              q,
              De.yy,
              Q[1],
              F,
              t
            ].concat(Rt)), typeof d1 < "u") return d1;
            he && (p = /* @__PURE__ */ p.slice(0, -1 * he * 2), F = /* @__PURE__ */ F.slice(0, -1 * he), t = /* @__PURE__ */ t.slice(0, -1 * he)), p.push(this.productions_[Q[1]][0]), F.push(Ge.$), t.push(Ge._$), et = Se[p[p.length - 2]][p[p.length - 1]], p.push(et);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }, "parse")
  }, It = /* @__PURE__ */ function() {
    var be = {
      EOF: 1,
      parseError: /* @__PURE__ */ m$1(function(d, p) {
        if (this.yy.parser) this.yy.parser.parseError(d, p);
        else throw new Error(d);
      }, "parseError"),
      setInput: /* @__PURE__ */ m$1(function(c, d) {
        return this.yy = d || this.yy || {}, this._input = c, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = [
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
      input: /* @__PURE__ */ m$1(function() {
        var c = this._input[0];
        this.yytext += c, this.yyleng++, this.offset++, this.match += c, this.matched += c;
        var d = /* @__PURE__ */ c.match(/(?:\r\n?|\n).*/g);
        return d ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = /* @__PURE__ */ this._input.slice(1), c;
      }, "input"),
      unput: /* @__PURE__ */ m$1(function(c) {
        var d = c.length, p = /* @__PURE__ */ c.split(/(?:\r\n?|\n)/g);
        this._input = c + this._input, this.yytext = /* @__PURE__ */ this.yytext.substr(0, this.yytext.length - d), this.offset -= d;
        var a = /* @__PURE__ */ this.match.split(/(?:\r\n?|\n)/g);
        this.match = /* @__PURE__ */ this.match.substr(0, this.match.length - 1), this.matched = /* @__PURE__ */ this.matched.substr(0, this.matched.length - 1), p.length - 1 && (this.yylineno -= p.length - 1);
        var F = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: p ? (p.length === a.length ? this.yylloc.first_column : 0) + a[a.length - p.length].length - p[0].length : this.yylloc.first_column - d
        }, this.options.ranges && (this.yylloc.range = [
          F[0],
          F[0] + this.yyleng - d
        ]), this.yyleng = this.yytext.length, this;
      }, "unput"),
      more: /* @__PURE__ */ m$1(function() {
        return this._more = true, this;
      }, "more"),
      reject: /* @__PURE__ */ m$1(function() {
        if (this.options.backtrack_lexer) this._backtrack = true;
        else return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
        return this;
      }, "reject"),
      less: /* @__PURE__ */ m$1(function(c) {
        this.unput(/* @__PURE__ */ this.match.slice(c));
      }, "less"),
      pastInput: /* @__PURE__ */ m$1(function() {
        var c = /* @__PURE__ */ this.matched.substr(0, this.matched.length - this.match.length);
        return (c.length > 20 ? "..." : "") + c.substr(-20).replace(/\n/g, "");
      }, "pastInput"),
      upcomingInput: /* @__PURE__ */ m$1(function() {
        var c = this.match;
        return c.length < 20 && (c += /* @__PURE__ */ this._input.substr(0, 20 - c.length)), (c.substr(0, 20) + (c.length > 20 ? "..." : "")).replace(/\n/g, "");
      }, "upcomingInput"),
      showPosition: /* @__PURE__ */ m$1(function() {
        var c = /* @__PURE__ */ this.pastInput(), d = /* @__PURE__ */ new Array(c.length + 1).join("-");
        return c + this.upcomingInput() + `
` + d + "^";
      }, "showPosition"),
      test_match: /* @__PURE__ */ m$1(function(c, d) {
        var p, a, F;
        if (this.options.backtrack_lexer && (F = {
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
          conditionStack: /* @__PURE__ */ this.conditionStack.slice(0),
          done: this.done
        }, this.options.ranges && (F.yylloc.range = /* @__PURE__ */ this.yylloc.range.slice(0))), a = /* @__PURE__ */ c[0].match(/(?:\r\n?|\n).*/g), a && (this.yylineno += a.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: a ? a[a.length - 1].length - a[a.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + c[0].length
        }, this.yytext += c[0], this.match += c[0], this.matches = c, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [
          this.offset,
          this.offset += this.yyleng
        ]), this._more = false, this._backtrack = false, this._input = /* @__PURE__ */ this._input.slice(c[0].length), this.matched += c[0], p = /* @__PURE__ */ this.performAction.call(this, this.yy, this, d, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), p) return p;
        if (this._backtrack) {
          for (var t in F) this[t] = F[t];
          return false;
        }
        return false;
      }, "test_match"),
      next: /* @__PURE__ */ m$1(function() {
        if (this.done) return this.EOF;
        this._input || (this.done = true);
        var c, d, p, a;
        this._more || (this.yytext = "", this.match = "");
        for (var F = /* @__PURE__ */ this._currentRules(), t = 0; t < F.length; t++) if (p = /* @__PURE__ */ this._input.match(this.rules[F[t]]), p && (!d || p[0].length > d[0].length)) {
          if (d = p, a = t, this.options.backtrack_lexer) {
            if (c = /* @__PURE__ */ this.test_match(p, F[t]), c !== false) return c;
            if (this._backtrack) {
              d = false;
              continue;
            } else return false;
          } else if (!this.options.flex) break;
        }
        return d ? (c = /* @__PURE__ */ this.test_match(d, F[a]), c !== false ? c : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      }, "next"),
      lex: /* @__PURE__ */ m$1(function() {
        var d = /* @__PURE__ */ this.next();
        return d || this.lex();
      }, "lex"),
      begin: /* @__PURE__ */ m$1(function(d) {
        this.conditionStack.push(d);
      }, "begin"),
      popState: /* @__PURE__ */ m$1(function() {
        var d = this.conditionStack.length - 1;
        return d > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      }, "popState"),
      _currentRules: /* @__PURE__ */ m$1(function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      }, "_currentRules"),
      topState: /* @__PURE__ */ m$1(function(d) {
        return d = this.conditionStack.length - 1 - Math.abs(d || 0), d >= 0 ? this.conditionStack[d] : "INITIAL";
      }, "topState"),
      pushState: /* @__PURE__ */ m$1(function(d) {
        this.begin(d);
      }, "pushState"),
      stateStackSize: /* @__PURE__ */ m$1(function() {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: {},
      performAction: /* @__PURE__ */ m$1(function(d, p, a, F) {
        switch (a) {
          case 0:
            return this.begin("acc_title"), 34;
          case 1:
            return this.popState(), "acc_title_value";
          case 2:
            return this.begin("acc_descr"), 36;
          case 3:
            return this.popState(), "acc_descr_value";
          case 4:
            this.begin("acc_descr_multiline");
            break;
          case 5:
            this.popState();
            break;
          case 6:
            return "acc_descr_multiline_value";
          case 7:
            return this.pushState("shapeData"), p.yytext = "", 40;
          case 8:
            return this.pushState("shapeDataStr"), 40;
          case 9:
            return this.popState(), 40;
          case 10:
            let Se = /\n\s*/g;
            return p.yytext = /* @__PURE__ */ p.yytext.replace(Se, "<br/>"), 40;
          case 11:
            return 40;
          case 12:
            this.popState();
            break;
          case 13:
            this.begin("callbackname");
            break;
          case 14:
            this.popState();
            break;
          case 15:
            this.popState(), this.begin("callbackargs");
            break;
          case 16:
            return 94;
          case 17:
            this.popState();
            break;
          case 18:
            return 95;
          case 19:
            return "MD_STR";
          case 20:
            this.popState();
            break;
          case 21:
            this.begin("md_string");
            break;
          case 22:
            return "STR";
          case 23:
            this.popState();
            break;
          case 24:
            this.pushState("string");
            break;
          case 25:
            return 83;
          case 26:
            return 101;
          case 27:
            return 84;
          case 28:
            return 103;
          case 29:
            return 85;
          case 30:
            return 86;
          case 31:
            return 96;
          case 32:
            this.begin("click");
            break;
          case 33:
            this.popState();
            break;
          case 34:
            return 87;
          case 35:
            return d.lex.firstGraph() && this.begin("dir"), 12;
          case 36:
            return d.lex.firstGraph() && this.begin("dir"), 12;
          case 37:
            return d.lex.firstGraph() && this.begin("dir"), 12;
          case 38:
            return 27;
          case 39:
            return 32;
          case 40:
            return 97;
          case 41:
            return 97;
          case 42:
            return 97;
          case 43:
            return 97;
          case 44:
            return this.popState(), 13;
          case 45:
            return this.popState(), 14;
          case 46:
            return this.popState(), 14;
          case 47:
            return this.popState(), 14;
          case 48:
            return this.popState(), 14;
          case 49:
            return this.popState(), 14;
          case 50:
            return this.popState(), 14;
          case 51:
            return this.popState(), 14;
          case 52:
            return this.popState(), 14;
          case 53:
            return this.popState(), 14;
          case 54:
            return this.popState(), 14;
          case 55:
            return 120;
          case 56:
            return 121;
          case 57:
            return 122;
          case 58:
            return 123;
          case 59:
            return 104;
          case 60:
            return 110;
          case 61:
            return 46;
          case 62:
            return 60;
          case 63:
            return 44;
          case 64:
            return 8;
          case 65:
            return 105;
          case 66:
            return 114;
          case 67:
            return this.popState(), 77;
          case 68:
            return this.pushState("edgeText"), 75;
          case 69:
            return 118;
          case 70:
            return this.popState(), 77;
          case 71:
            return this.pushState("thickEdgeText"), 75;
          case 72:
            return 118;
          case 73:
            return this.popState(), 77;
          case 74:
            return this.pushState("dottedEdgeText"), 75;
          case 75:
            return 118;
          case 76:
            return 77;
          case 77:
            return this.popState(), 53;
          case 78:
            return "TEXT";
          case 79:
            return this.pushState("ellipseText"), 52;
          case 80:
            return this.popState(), 55;
          case 81:
            return this.pushState("text"), 54;
          case 82:
            return this.popState(), 57;
          case 83:
            return this.pushState("text"), 56;
          case 84:
            return 58;
          case 85:
            return this.pushState("text"), 67;
          case 86:
            return this.popState(), 64;
          case 87:
            return this.pushState("text"), 63;
          case 88:
            return this.popState(), 49;
          case 89:
            return this.pushState("text"), 48;
          case 90:
            return this.popState(), 69;
          case 91:
            return this.popState(), 71;
          case 92:
            return 116;
          case 93:
            return this.pushState("trapText"), 68;
          case 94:
            return this.pushState("trapText"), 70;
          case 95:
            return 117;
          case 96:
            return 67;
          case 97:
            return 89;
          case 98:
            return "SEP";
          case 99:
            return 88;
          case 100:
            return 114;
          case 101:
            return 110;
          case 102:
            return 44;
          case 103:
            return 108;
          case 104:
            return 113;
          case 105:
            return 115;
          case 106:
            return this.popState(), 62;
          case 107:
            return this.pushState("text"), 62;
          case 108:
            return this.popState(), 51;
          case 109:
            return this.pushState("text"), 50;
          case 110:
            return this.popState(), 31;
          case 111:
            return this.pushState("text"), 29;
          case 112:
            return this.popState(), 66;
          case 113:
            return this.pushState("text"), 65;
          case 114:
            return "TEXT";
          case 115:
            return "QUOTE";
          case 116:
            return 9;
          case 117:
            return 10;
          case 118:
            return 11;
        }
      }, "anonymous"),
      rules: [
        /^(?:accTitle\s*:\s*)/,
        /^(?:(?!\n||)*[^\n]*)/,
        /^(?:accDescr\s*:\s*)/,
        /^(?:(?!\n||)*[^\n]*)/,
        /^(?:accDescr\s*\{\s*)/,
        /^(?:[\}])/,
        /^(?:[^\}]*)/,
        /^(?:@\{)/,
        /^(?:["])/,
        /^(?:["])/,
        /^(?:[^\"]+)/,
        /^(?:[^}^"]+)/,
        /^(?:\})/,
        /^(?:call[\s]+)/,
        /^(?:\([\s]*\))/,
        /^(?:\()/,
        /^(?:[^(]*)/,
        /^(?:\))/,
        /^(?:[^)]*)/,
        /^(?:[^`"]+)/,
        /^(?:[`]["])/,
        /^(?:["][`])/,
        /^(?:[^"]+)/,
        /^(?:["])/,
        /^(?:["])/,
        /^(?:style\b)/,
        /^(?:default\b)/,
        /^(?:linkStyle\b)/,
        /^(?:interpolate\b)/,
        /^(?:classDef\b)/,
        /^(?:class\b)/,
        /^(?:href[\s])/,
        /^(?:click[\s]+)/,
        /^(?:[\s\n])/,
        /^(?:[^\s\n]*)/,
        /^(?:flowchart-elk\b)/,
        /^(?:graph\b)/,
        /^(?:flowchart\b)/,
        /^(?:subgraph\b)/,
        /^(?:end\b\s*)/,
        /^(?:_self\b)/,
        /^(?:_blank\b)/,
        /^(?:_parent\b)/,
        /^(?:_top\b)/,
        /^(?:(\r?\n)*\s*\n)/,
        /^(?:\s*LR\b)/,
        /^(?:\s*RL\b)/,
        /^(?:\s*TB\b)/,
        /^(?:\s*BT\b)/,
        /^(?:\s*TD\b)/,
        /^(?:\s*BR\b)/,
        /^(?:\s*<)/,
        /^(?:\s*>)/,
        /^(?:\s*\^)/,
        /^(?:\s*v\b)/,
        /^(?:.*direction\s+TB[^\n]*)/,
        /^(?:.*direction\s+BT[^\n]*)/,
        /^(?:.*direction\s+RL[^\n]*)/,
        /^(?:.*direction\s+LR[^\n]*)/,
        /^(?:[0-9]+)/,
        /^(?:#)/,
        /^(?::::)/,
        /^(?::)/,
        /^(?:&)/,
        /^(?:;)/,
        /^(?:,)/,
        /^(?:\*)/,
        /^(?:\s*[xo<]?--+[-xo>]\s*)/,
        /^(?:\s*[xo<]?--\s*)/,
        /^(?:[^-]|-(?!-)+)/,
        /^(?:\s*[xo<]?==+[=xo>]\s*)/,
        /^(?:\s*[xo<]?==\s*)/,
        /^(?:[^=]|=(?!))/,
        /^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/,
        /^(?:\s*[xo<]?-\.\s*)/,
        /^(?:[^\.]|\.(?!))/,
        /^(?:\s*~~[\~]+\s*)/,
        /^(?:[-/\)][\)])/,
        /^(?:[^\(\)\[\]\{\}]|!\)+)/,
        /^(?:\(-)/,
        /^(?:\]\))/,
        /^(?:\(\[)/,
        /^(?:\]\])/,
        /^(?:\[\[)/,
        /^(?:\[\|)/,
        /^(?:>)/,
        /^(?:\)\])/,
        /^(?:\[\()/,
        /^(?:\)\)\))/,
        /^(?:\(\(\()/,
        /^(?:[\\(?=\])][\]])/,
        /^(?:\/(?=\])\])/,
        /^(?:\/(?!\])|\\(?!\])|[^\\\[\]\(\)\{\}\/]+)/,
        /^(?:\[\/)/,
        /^(?:\[\\)/,
        /^(?:<)/,
        /^(?:>)/,
        /^(?:\^)/,
        /^(?:\\\|)/,
        /^(?:v\b)/,
        /^(?:\*)/,
        /^(?:#)/,
        /^(?:&)/,
        /^(?:([A-Za-z0-9!"\#$%&'*+\.`?\\_\/]|-(?=[^\>\-\.])|(?!))+)/,
        /^(?:-)/,
        /^(?:[\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6]|[\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377]|[\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5]|[\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA]|[\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE]|[\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA]|[\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0]|[\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977]|[\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2]|[\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A]|[\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39]|[\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8]|[\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C]|[\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C]|[\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99]|[\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0]|[\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D]|[\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3]|[\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10]|[\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1]|[\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81]|[\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3]|[\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6]|[\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A]|[\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081]|[\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D]|[\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0]|[\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310]|[\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C]|[\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711]|[\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7]|[\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C]|[\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16]|[\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF]|[\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC]|[\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D]|[\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D]|[\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3]|[\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F]|[\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128]|[\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184]|[\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3]|[\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6]|[\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE]|[\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C]|[\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D]|[\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC]|[\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B]|[\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788]|[\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805]|[\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB]|[\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28]|[\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5]|[\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4]|[\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E]|[\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D]|[\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36]|[\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D]|[\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC]|[\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF]|[\uFFD2-\uFFD7\uFFDA-\uFFDC])/,
        /^(?:\|)/,
        /^(?:\|)/,
        /^(?:\))/,
        /^(?:\()/,
        /^(?:\])/,
        /^(?:\[)/,
        /^(?:(\}))/,
        /^(?:\{)/,
        /^(?:[^\[\]\(\)\{\}\|\"]+)/,
        /^(?:")/,
        /^(?:(\r?\n)+)/,
        /^(?:\s)/,
        /^(?:$)/
      ],
      conditions: {
        shapeDataEndBracket: {
          rules: [
            21,
            24,
            76,
            79,
            81,
            83,
            87,
            89,
            93,
            94,
            107,
            109,
            111,
            113
          ],
          inclusive: false
        },
        shapeDataStr: {
          rules: [
            9,
            10,
            21,
            24,
            76,
            79,
            81,
            83,
            87,
            89,
            93,
            94,
            107,
            109,
            111,
            113
          ],
          inclusive: false
        },
        shapeData: {
          rules: [
            8,
            11,
            12,
            21,
            24,
            76,
            79,
            81,
            83,
            87,
            89,
            93,
            94,
            107,
            109,
            111,
            113
          ],
          inclusive: false
        },
        callbackargs: {
          rules: [
            17,
            18,
            21,
            24,
            76,
            79,
            81,
            83,
            87,
            89,
            93,
            94,
            107,
            109,
            111,
            113
          ],
          inclusive: false
        },
        callbackname: {
          rules: [
            14,
            15,
            16,
            21,
            24,
            76,
            79,
            81,
            83,
            87,
            89,
            93,
            94,
            107,
            109,
            111,
            113
          ],
          inclusive: false
        },
        href: {
          rules: [
            21,
            24,
            76,
            79,
            81,
            83,
            87,
            89,
            93,
            94,
            107,
            109,
            111,
            113
          ],
          inclusive: false
        },
        click: {
          rules: [
            21,
            24,
            33,
            34,
            76,
            79,
            81,
            83,
            87,
            89,
            93,
            94,
            107,
            109,
            111,
            113
          ],
          inclusive: false
        },
        dottedEdgeText: {
          rules: [
            21,
            24,
            73,
            75,
            76,
            79,
            81,
            83,
            87,
            89,
            93,
            94,
            107,
            109,
            111,
            113
          ],
          inclusive: false
        },
        thickEdgeText: {
          rules: [
            21,
            24,
            70,
            72,
            76,
            79,
            81,
            83,
            87,
            89,
            93,
            94,
            107,
            109,
            111,
            113
          ],
          inclusive: false
        },
        edgeText: {
          rules: [
            21,
            24,
            67,
            69,
            76,
            79,
            81,
            83,
            87,
            89,
            93,
            94,
            107,
            109,
            111,
            113
          ],
          inclusive: false
        },
        trapText: {
          rules: [
            21,
            24,
            76,
            79,
            81,
            83,
            87,
            89,
            90,
            91,
            92,
            93,
            94,
            107,
            109,
            111,
            113
          ],
          inclusive: false
        },
        ellipseText: {
          rules: [
            21,
            24,
            76,
            77,
            78,
            79,
            81,
            83,
            87,
            89,
            93,
            94,
            107,
            109,
            111,
            113
          ],
          inclusive: false
        },
        text: {
          rules: [
            21,
            24,
            76,
            79,
            80,
            81,
            82,
            83,
            86,
            87,
            88,
            89,
            93,
            94,
            106,
            107,
            108,
            109,
            110,
            111,
            112,
            113,
            114
          ],
          inclusive: false
        },
        vertex: {
          rules: [
            21,
            24,
            76,
            79,
            81,
            83,
            87,
            89,
            93,
            94,
            107,
            109,
            111,
            113
          ],
          inclusive: false
        },
        dir: {
          rules: [
            21,
            24,
            44,
            45,
            46,
            47,
            48,
            49,
            50,
            51,
            52,
            53,
            54,
            76,
            79,
            81,
            83,
            87,
            89,
            93,
            94,
            107,
            109,
            111,
            113
          ],
          inclusive: false
        },
        acc_descr_multiline: {
          rules: [
            5,
            6,
            21,
            24,
            76,
            79,
            81,
            83,
            87,
            89,
            93,
            94,
            107,
            109,
            111,
            113
          ],
          inclusive: false
        },
        acc_descr: {
          rules: [
            3,
            21,
            24,
            76,
            79,
            81,
            83,
            87,
            89,
            93,
            94,
            107,
            109,
            111,
            113
          ],
          inclusive: false
        },
        acc_title: {
          rules: [
            1,
            21,
            24,
            76,
            79,
            81,
            83,
            87,
            89,
            93,
            94,
            107,
            109,
            111,
            113
          ],
          inclusive: false
        },
        md_string: {
          rules: [
            19,
            20,
            21,
            24,
            76,
            79,
            81,
            83,
            87,
            89,
            93,
            94,
            107,
            109,
            111,
            113
          ],
          inclusive: false
        },
        string: {
          rules: [
            21,
            22,
            23,
            24,
            76,
            79,
            81,
            83,
            87,
            89,
            93,
            94,
            107,
            109,
            111,
            113
          ],
          inclusive: false
        },
        INITIAL: {
          rules: [
            0,
            2,
            4,
            7,
            13,
            21,
            24,
            25,
            26,
            27,
            28,
            29,
            30,
            31,
            32,
            35,
            36,
            37,
            38,
            39,
            40,
            41,
            42,
            43,
            55,
            56,
            57,
            58,
            59,
            60,
            61,
            62,
            63,
            64,
            65,
            66,
            67,
            68,
            70,
            71,
            73,
            74,
            76,
            79,
            81,
            83,
            84,
            85,
            87,
            89,
            93,
            94,
            95,
            96,
            97,
            98,
            99,
            100,
            101,
            102,
            103,
            104,
            105,
            107,
            109,
            111,
            113,
            115,
            116,
            117,
            118
          ],
          inclusive: true
        }
      }
    };
    return be;
  }();
  u1.lexer = It;
  function o1() {
    this.yy = {};
  }
  return m$1(o1, "Parser"), o1.prototype = u1, u1.Parser = o1, new o1();
}();
x1.parser = x1;
var Vt = x1;
var As = /* @__PURE__ */ m$1((e, r) => {
  let n = ku, i = /* @__PURE__ */ n(e, "r"), o = /* @__PURE__ */ n(e, "g"), f = /* @__PURE__ */ n(e, "b");
  return se(i, o, f, r);
}, "fade"), ms = /* @__PURE__ */ m$1((e) => `.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor || e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span {
    color: ${e.titleColor};
  }
  .cluster-label span p {
    background-color: transparent;
  }

  .label text,span {
    fill: ${e.nodeTextColor || e.textColor};
    color: ${e.nodeTextColor || e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }
  .rough-node .label text , .node .label text, .image-shape .label, .icon-shape .label {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .katex path {
    fill: #000;
    stroke: #000;
    stroke-width: 1px;
  }

  .rough-node .label,.node .label, .image-shape .label, .icon-shape .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }


  .root .anchor path {
    fill: ${e.lineColor} !important;
    stroke-width: 0;
    stroke: ${e.lineColor};
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    p {
      background-color: ${e.edgeLabelBackground};
    }
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${As(e.edgeLabelBackground, 0.5)};
    // background-color:
  }

  .cluster rect {
    fill: ${e.clusterBkg};
    stroke: ${e.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }

  rect.text {
    fill: none;
    stroke-width: 0;
  }

  .icon-shape, .image-shape {
    background-color: ${e.edgeLabelBackground};
    p {
      background-color: ${e.edgeLabelBackground};
      padding: 2px;
    }
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }
`, "getStyles"), Lt = ms;
var Zs = {
  parser: Vt,
  db: i1,
  renderer: wt,
  styles: Lt,
  init: /* @__PURE__ */ m$1((e) => {
    e.flowchart || (e.flowchart = {}), e.layout && EC({
      layout: e.layout
    }), e.flowchart.arrowMarkerAbsolute = e.arrowMarkerAbsolute, EC({
      flowchart: {
        arrowMarkerAbsolute: e.arrowMarkerAbsolute
      }
    }), i1.clear(), i1.setGen("gen-2");
  }, "init")
};
export {
  Zs as diagram
};
