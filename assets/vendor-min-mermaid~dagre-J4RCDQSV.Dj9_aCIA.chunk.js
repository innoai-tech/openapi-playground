import { f as fn } from "./vendor-min-mermaid~chunk-FASC7IG4.uhAIIXQ4.chunk.js";
import { m } from "./vendor-min-mermaid~chunk-ZN7TASNU.KBLMrQvh.chunk.js";
import { t as tr, G as Gt, V as Vt, J as Jt, F as Ft } from "./vendor-min-mermaid~chunk-QTJCGBHB.D4GRlI_F.chunk.js";
import { o as og, x as xo, M, r as rg, s as sg, a as ag, y as yo } from "./vendor-min-mermaid~chunk-USR3SDWQ.BYUbwKxP.chunk.js";
import "./vendor-min-mermaid~chunk-2VPXETT4.BF22TMdS.chunk.js";
import "./vendor-min-mermaid~chunk-S67DUUA5.By2qN2hC.chunk.js";
import { n } from "./vendor-min-mermaid~chunk-LM6QDVU5.CCcUlC7q.chunk.js";
import "./vendor-min-mermaid~chunk-HESFG3RP.Dj2hmxyj.chunk.js";
import "./vendor-min-mermaid~chunk-YM3XIQPS.DIMTnqRF.chunk.js";
import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Cm_2-rE8.chunk.js";
import { t as tt, H as Hl } from "./vendor-min-mermaid~chunk-ZKYS2E5M.CwhZsQ7z.chunk.js";
import { s as sn, _ as _f, J as Jr } from "./vendor-min-mermaid~chunk-5ZJXQJOJ.DZaYt2YO.chunk.js";
import "./vendor-min-mermaid~chunk-YPUTD6PB.DtdPbVSC.chunk.js";
import "./vendor-min-mermaid~chunk-6BY5RJGC.BwVspKnk.chunk.js";
import "./vendor-min-mermaid~chunk-TI4EEUUG.CAA-1BPs.chunk.js";
import "./lib-nodepkg-typedef.zwRRER3a.chunk.js";
function h(e) {
  var t = {
    options: {
      directed: e.isDirected(),
      multigraph: e.isMultigraph(),
      compound: e.isCompound()
    },
    nodes: re(e),
    edges: se(e)
  };
  return sn(e.graph()) || (t.value = _f(e.graph())), t;
}
m$1(h, "write");
function re(e) {
  return Jr(e.nodes(), function(t) {
    var n2 = e.node(t), c = e.parent(t), s = {
      v: t
    };
    return sn(n2) || (s.value = n2), sn(c) || (s.parent = c), s;
  });
}
m$1(re, "writeNodes");
function se(e) {
  return Jr(e.edges(), function(t) {
    var n2 = e.edge(t), c = {
      v: t.v,
      w: t.w
    };
    return sn(t.name) || (c.name = t.name), sn(n2) || (c.value = n2), c;
  });
}
m$1(se, "writeEdges");
var a = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), Z = m$1(() => {
  v.clear(), W.clear(), a.clear();
}, "clear"), J = m$1((e, t) => {
  let n2 = v.get(t) || [];
  return tt.trace("In isDescendant", t, " ", e, " = ", n2.includes(e)), n2.includes(e);
}, "isDescendant"), ce = m$1((e, t) => {
  let n2 = v.get(t) || [];
  return tt.info("Descendants of ", t, " is ", n2), tt.info("Edge is ", e), e.v === t || e.w === t ? false : n2 ? n2.includes(e.v) || J(e.v, t) || J(e.w, t) || n2.includes(e.w) : (tt.debug("Tilt, ", t, ",not in descendants"), false);
}, "edgeInCluster"), $ = m$1((e, t, n2, c) => {
  tt.warn("Copying children of ", e, "root", c, "data", t.node(e), c);
  let s = t.children(e) || [];
  e !== c && s.push(e), tt.warn("Copying (nodes) clusterId", e, "nodes", s), s.forEach((o) => {
    if (t.children(o).length > 0) $(o, t, n2, c);
    else {
      let l = t.node(o);
      tt.info("cp ", o, " to ", c, " with parent ", e), n2.setNode(o, l), c !== t.parent(o) && (tt.warn("Setting parent", o, t.parent(o)), n2.setParent(o, t.parent(o))), e !== c && o !== e ? (tt.debug("Setting parent", o, e), n2.setParent(o, e)) : (tt.info("In copy ", e, "root", c, "data", t.node(e), c), tt.debug("Not Setting parent for node=", o, "cluster!==rootId", e !== c, "node!==clusterId", o !== e));
      let u = t.edges(o);
      tt.debug("Copying Edges", u), u.forEach((d) => {
        tt.info("Edge", d);
        let m2 = t.edge(d.v, d.w, d.name);
        tt.info("Edge data", m2, c);
        try {
          ce(d, c) ? (tt.info("Copying as ", d.v, d.w, m2, d.name), n2.setEdge(d.v, d.w, m2, d.name), tt.info("newGraph edges ", n2.edges(), n2.edge(n2.edges()[0]))) : tt.info("Skipping copy of edge ", d.v, "-->", d.w, " rootId: ", c, " clusterId:", e);
        } catch (p) {
          tt.error(p);
        }
      });
    }
    tt.debug("Removing node", o), t.removeNode(o);
  });
}, "copy"), L = m$1((e, t) => {
  let n2 = t.children(e), c = [
    ...n2
  ];
  for (let s of n2) W.set(s, e), c = [
    ...c,
    ...L(s, t)
  ];
  return c;
}, "extractDescendants");
var ae = m$1((e, t, n2) => {
  let c = e.edges().filter((d) => d.v === t || d.w === t), s = e.edges().filter((d) => d.v === n2 || d.w === n2), o = c.map((d) => ({
    v: d.v === t ? n2 : d.v,
    w: d.w === t ? t : d.w
  })), l = s.map((d) => ({
    v: d.v,
    w: d.w
  }));
  return o.filter((d) => l.some((m2) => d.v === m2.v && d.w === m2.w));
}, "findCommonEdges"), x = m$1((e, t, n2) => {
  let c = t.children(e);
  if (tt.trace("Searching children of id ", e, c), c.length < 1) return e;
  let s;
  for (let o of c) {
    let l = x(o, t, n2), u = ae(t, n2, l);
    if (l) if (u.length > 0) s = l;
    else return l;
  }
  return s;
}, "findNonClusterChild"), Q = m$1((e) => !a.has(e) || !a.get(e).externalConnections ? e : a.has(e) ? a.get(e).id : e, "getAnchorId"), I = m$1((e, t) => {
  if (!e || t > 10) {
    tt.debug("Opting out, no graph ");
    return;
  } else tt.debug("Opting in, graph ");
  e.nodes().forEach(function(n2) {
    e.children(n2).length > 0 && (tt.warn("Cluster identified", n2, " Replacement id in edges: ", x(n2, e, n2)), v.set(n2, L(n2, e)), a.set(n2, {
      id: x(n2, e, n2),
      clusterData: e.node(n2)
    }));
  }), e.nodes().forEach(function(n2) {
    let c = e.children(n2), s = e.edges();
    c.length > 0 ? (tt.debug("Cluster identified", n2, v), s.forEach((o) => {
      let l = J(o.v, n2), u = J(o.w, n2);
      l ^ u && (tt.warn("Edge: ", o, " leaves cluster ", n2), tt.warn("Descendants of XXX ", n2, ": ", v.get(n2)), a.get(n2).externalConnections = true);
    })) : tt.debug("Not a cluster ", n2, v);
  });
  for (let n2 of a.keys()) {
    let c = a.get(n2).id, s = e.parent(c);
    s !== n2 && a.has(s) && !a.get(s).externalConnections && (a.get(n2).id = s);
  }
  e.edges().forEach(function(n2) {
    let c = e.edge(n2);
    tt.warn("Edge " + n2.v + " -> " + n2.w + ": " + JSON.stringify(n2)), tt.warn("Edge " + n2.v + " -> " + n2.w + ": " + JSON.stringify(e.edge(n2)));
    let s = n2.v, o = n2.w;
    if (tt.warn("Fix XXX", a, "ids:", n2.v, n2.w, "Translating: ", a.get(n2.v), " --- ", a.get(n2.w)), a.get(n2.v) || a.get(n2.w)) {
      if (tt.warn("Fixing and trying - removing XXX", n2.v, n2.w, n2.name), s = Q(n2.v), o = Q(n2.w), e.removeEdge(n2.v, n2.w, n2.name), s !== n2.v) {
        let l = e.parent(s);
        a.get(l).externalConnections = true, c.fromCluster = n2.v;
      }
      if (o !== n2.w) {
        let l = e.parent(o);
        a.get(l).externalConnections = true, c.toCluster = n2.w;
      }
      tt.warn("Fix Replacing with XXX", s, o, n2.name), e.setEdge(s, o, c, n2.name);
    }
  }), tt.warn("Adjusted Graph", h(e)), ee(e, 0), tt.trace(a);
}, "adjustClustersAndEdges"), ee = m$1((e, t) => {
  var _a, _b;
  if (tt.warn("extractor - ", t, h(e), e.children("D")), t > 10) {
    tt.error("Bailing out");
    return;
  }
  let n2 = e.nodes(), c = false;
  for (let s of n2) {
    let o = e.children(s);
    c = c || o.length > 0;
  }
  if (!c) {
    tt.debug("Done, no node has children", e.nodes());
    return;
  }
  tt.debug("Nodes = ", n2, t);
  for (let s of n2) if (tt.debug("Extracting node", s, a, a.has(s) && !a.get(s).externalConnections, !e.parent(s), e.node(s), e.children("D"), " Depth ", t), !a.has(s)) tt.debug("Not a cluster", s, t);
  else if (!a.get(s).externalConnections && e.children(s) && e.children(s).length > 0) {
    tt.warn("Cluster without external connections, without a parent and with children", s, t);
    let l = e.graph().rankdir === "TB" ? "LR" : "TB";
    ((_b = (_a = a.get(s)) == null ? void 0 : _a.clusterData) == null ? void 0 : _b.dir) && (l = a.get(s).clusterData.dir, tt.warn("Fixing dir", a.get(s).clusterData.dir, l));
    let u = new m({
      multigraph: true,
      compound: true
    }).setGraph({
      rankdir: l,
      nodesep: 50,
      ranksep: 50,
      marginx: 8,
      marginy: 8
    }).setDefaultEdgeLabel(function() {
      return {};
    });
    tt.warn("Old graph before copy", h(e)), $(s, e, u, s), e.setNode(s, {
      clusterNode: true,
      id: s,
      clusterData: a.get(s).clusterData,
      label: a.get(s).label,
      graph: u
    }), tt.warn("New graph after copy node: (", s, ")", h(u)), tt.debug("Old graph after copy", h(e));
  } else tt.warn("Cluster ** ", s, " **not meeting the criteria !externalConnections:", !a.get(s).externalConnections, " no parent: ", !e.parent(s), " children ", e.children(s) && e.children(s).length > 0, e.children("D"), t), tt.debug(a);
  n2 = e.nodes(), tt.warn("New list of nodes", n2);
  for (let s of n2) {
    let o = e.node(s);
    tt.warn(" Now next level", s, o), (o == null ? void 0 : o.clusterNode) && ee(o.graph, t + 1);
  }
}, "extractor"), ne = m$1((e, t) => {
  if (t.length === 0) return [];
  let n2 = Object.assign([], t);
  return t.forEach((c) => {
    let s = e.children(c), o = ne(e, s);
    n2 = [
      ...n2,
      ...o
    ];
  }), n2;
}, "sorter"), te = m$1((e) => ne(e, e.children()), "sortNodesByHierarchy");
var ie = m$1(async (e, t, n$1, c, s, o) => {
  tt.warn("Graph in recursive render:XAX", h(t), s);
  let l = t.graph().rankdir;
  tt.trace("Dir in recursive render - dir:", l);
  let u = e.insert("g").attr("class", "root");
  t.nodes() ? tt.info("Recursive render XXX", t.nodes()) : tt.info("No nodes found for", t), t.edges().length > 0 && tt.info("Recursive edges", t.edge(t.edges()[0]));
  let d = u.insert("g").attr("class", "clusters"), m2 = u.insert("g").attr("class", "edgePaths"), p = u.insert("g").attr("class", "edgeLabels"), b = u.insert("g").attr("class", "nodes");
  await Promise.all(t.nodes().map(async function(f) {
    let r = t.node(f);
    if (s !== void 0) {
      let w = JSON.parse(JSON.stringify(s.clusterData));
      tt.trace(`Setting data for parent cluster XXX
 Node.id = `, f, `
 data=`, w.height, `
Parent cluster`, s.height), t.setNode(s.id, w), t.parent(f) || (tt.trace("Setting parent", f, s.id), t.setParent(f, s.id, w));
    }
    if (tt.info("(Insert) Node XXX" + f + ": " + JSON.stringify(t.node(f))), r == null ? void 0 : r.clusterNode) {
      tt.info("Cluster identified XBX", f, r.width, t.node(f));
      let { ranksep: w, nodesep: E } = t.graph();
      r.graph.setGraph({
        ...r.graph.graph(),
        ranksep: w + 25,
        nodesep: E
      });
      let N = await ie(b, r.graph, n$1, c, t.node(f), o), D = N.elem;
      M(r, D), r.diff = N.diff || 0, tt.info("New compound node after recursive render XAX", f, "width", r.width, "height", r.height), rg(D, r);
    } else t.children(f).length > 0 ? (tt.trace("Cluster - the non recursive path XBX", f, r.id, r, r.width, "Graph:", t), tt.trace(x(r.id, t)), a.set(r.id, {
      id: x(r.id, t),
      node: r
    })) : (tt.trace("Node - the non recursive path XAX", f, b, t.node(f), l), await sg(b, t.node(f), {
      config: o,
      dir: l
    }));
  })), await m$1(async () => {
    let f = t.edges().map(async function(r) {
      let w = t.edge(r.v, r.w, r.name);
      tt.info("Edge " + r.v + " -> " + r.w + ": " + JSON.stringify(r)), tt.info("Edge " + r.v + " -> " + r.w + ": ", r, " ", JSON.stringify(t.edge(r))), tt.info("Fix", a, "ids:", r.v, r.w, "Translating: ", a.get(r.v), a.get(r.w)), await Vt(p, w);
    });
    await Promise.all(f);
  }, "processEdges")(), tt.info("Graph before layout:", JSON.stringify(h(t))), tt.info("############################################# XXX"), tt.info("###                Layout                 ### XXX"), tt.info("############################################# XXX"), fn(t), tt.info("Graph after layout:", JSON.stringify(h(t)));
  let P = 0, { subGraphTitleTotalMargin: S } = n(o);
  return await Promise.all(te(t).map(async function(f) {
    var _a;
    let r = t.node(f);
    if (tt.info("Position XBX => " + f + ": (" + r.x, "," + r.y, ") width: ", r.width, " height: ", r.height), r == null ? void 0 : r.clusterNode) r.y += S, tt.info("A tainted cluster node XBX1", f, r.id, r.width, r.height, r.x, r.y, t.parent(f)), a.get(r.id).node = r, ag(r);
    else if (t.children(f).length > 0) {
      tt.info("A pure cluster node XBX1", f, r.id, r.x, r.y, r.width, r.height, t.parent(f)), r.height += S, t.node(r.parentId);
      let w = (r == null ? void 0 : r.padding) / 2 || 0, E = ((_a = r == null ? void 0 : r.labelBBox) == null ? void 0 : _a.height) || 0, N = E - w || 0;
      tt.debug("OffsetY", N, "labelHeight", E, "halfPadding", w), await yo(d, r), a.get(r.id).node = r;
    } else {
      let w = t.node(r.parentId);
      r.y += S / 2, tt.info("A regular node XBX1 - using the padding", r.id, "parent", r.parentId, r.width, r.height, r.x, r.y, "offsetY", r.offsetY, "parent", w, w == null ? void 0 : w.offsetY, r), ag(r);
    }
  })), t.edges().forEach(function(f) {
    let r = t.edge(f);
    tt.info("Edge " + f.v + " -> " + f.w + ": " + JSON.stringify(r), r), r.points.forEach((D) => D.y += S / 2);
    let w = t.node(f.v);
    var E = t.node(f.w);
    let N = Jt(m2, r, a, n$1, w, E, c);
    Ft(r, N);
  }), t.nodes().forEach(function(f) {
    let r = t.node(f);
    tt.info(f, r.type, r.diff), r.isGroup && (P = r.diff);
  }), tt.warn("Returning from recursive render XAX", u, P), {
    elem: u,
    diff: P
  };
}, "recursiveRender"), Se = m$1(async (e, t) => {
  var _a, _b, _c, _d, _e, _f2;
  let n2 = new m({
    multigraph: true,
    compound: true
  }).setGraph({
    rankdir: e.direction,
    nodesep: ((_a = e.config) == null ? void 0 : _a.nodeSpacing) || ((_c = (_b = e.config) == null ? void 0 : _b.flowchart) == null ? void 0 : _c.nodeSpacing) || e.nodeSpacing,
    ranksep: ((_d = e.config) == null ? void 0 : _d.rankSpacing) || ((_f2 = (_e = e.config) == null ? void 0 : _e.flowchart) == null ? void 0 : _f2.rankSpacing) || e.rankSpacing,
    marginx: 8,
    marginy: 8
  }).setDefaultEdgeLabel(function() {
    return {};
  }), c = t.select("g");
  tr(c, e.markers, e.type, e.diagramId), og(), Gt(), xo(), Z(), e.nodes.forEach((o) => {
    n2.setNode(o.id, {
      ...o
    }), o.parentId && n2.setParent(o.id, o.parentId);
  }), tt.debug("Edges:", e.edges), e.edges.forEach((o) => {
    if (o.start === o.end) {
      let l = o.start, u = l + "---" + l + "---1", d = l + "---" + l + "---2", m2 = n2.node(l);
      n2.setNode(u, {
        domId: u,
        id: u,
        parentId: m2.parentId,
        labelStyle: "",
        label: "",
        padding: 0,
        shape: "labelRect",
        style: "",
        width: 10,
        height: 10
      }), n2.setParent(u, m2.parentId), n2.setNode(d, {
        domId: d,
        id: d,
        parentId: m2.parentId,
        labelStyle: "",
        padding: 0,
        shape: "labelRect",
        label: "",
        style: "",
        width: 10,
        height: 10
      }), n2.setParent(d, m2.parentId);
      let p = structuredClone(o), b = structuredClone(o), X = structuredClone(o);
      p.label = "", p.arrowTypeEnd = "none", p.id = l + "-cyclic-special-1", b.arrowTypeStart = "none", b.arrowTypeEnd = "none", b.id = l + "-cyclic-special-mid", X.label = "", m2.isGroup && (p.fromCluster = l, X.toCluster = l), X.id = l + "-cyclic-special-2", X.arrowTypeStart = "none", n2.setEdge(l, u, p, l + "-cyclic-special-0"), n2.setEdge(u, d, b, l + "-cyclic-special-1"), n2.setEdge(d, l, X, l + "-cyc<lic-special-2");
    } else n2.setEdge(o.start, o.end, {
      ...o
    }, o.id);
  }), tt.warn("Graph at first:", JSON.stringify(h(n2))), I(n2), tt.warn("Graph after XAX:", JSON.stringify(h(n2)));
  let s = Hl();
  await ie(c, n2, e.type, e.diagramId, void 0, s);
}, "render");
export {
  Se as render
};
