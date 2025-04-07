import { s } from "./vendor-min-mermaid~chunk-VSLJSFIP.BLhi0jEX.chunk.js";
import { c } from "./vendor-min-mermaid~chunk-4KE642ED.BFCpHScK.chunk.js";
import { p } from "./vendor-min-mermaid~chunk-TYETAW3D.BIlrjcQi.chunk.js";
import "./vendor-min-mermaid~chunk-ZWYQHTDX.BfhYjC6o.chunk.js";
import "./vendor-min-mermaid~chunk-DDW4HWGY.ZoJLOt6K.chunk.js";
import "./vendor-min-mermaid~chunk-NA3436M7.DG84OIGm.chunk.js";
import "./vendor-min-mermaid~chunk-RRF4A5XS.CCpQ3CSD.chunk.js";
import { I as Ie$1, L as Le$1, w as we$1 } from "./vendor-min-mermaid~chunk-YM3XIQPS.DzKxOkHI.chunk.js";
import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Cm_2-rE8.chunk.js";
import { L as Lf, M as Mf, B as Bf, F as Ff, w as wf, v as vf, t as tt$1, H as Hl, i as ih, ak as Of, S as Sf, g as gC, E as Er, p as pl } from "./vendor-min-mermaid~chunk-ZKYS2E5M.DYmB7G2x.chunk.js";
import "./vendor-min-mermaid~chunk-SWO474TD.DyTty_i1.chunk.js";
import "./vendor-min-mermaid~chunk-237OD7E6.DYMr3-lc.chunk.js";
import "./vendor-min-mermaid~chunk-JVB3IFOF.CyFWjgvM.chunk.js";
import "./vendor-min-mermaid~chunk-5ZJXQJOJ.DZaYt2YO.chunk.js";
import "./vendor-min-mermaid~chunk-YPUTD6PB.DtdPbVSC.chunk.js";
import "./vendor-min-mermaid~chunk-6BY5RJGC.BwVspKnk.chunk.js";
import "./lib-nodepkg-typedef.D-PCYzjh.chunk.js";
import "./vendor-min-mermaid~chunk-TI4EEUUG.CAA-1BPs.chunk.js";
var u = {
  NORMAL: 0,
  REVERSE: 1,
  HIGHLIGHT: 2,
  MERGE: 3,
  CHERRY_PICK: 4
};
var he = pl.gitGraph, D = m$1(() => Le$1({
  ...he,
  ...Er().gitGraph
}), "getConfig"), i = new s(() => {
  let r = D(), e = r.mainBranchName, o = r.mainBranchOrder;
  return {
    mainBranchName: e,
    commits: /* @__PURE__ */ new Map(),
    head: null,
    branchConfig: /* @__PURE__ */ new Map([
      [
        e,
        {
          name: e,
          order: o
        }
      ]
    ]),
    branches: /* @__PURE__ */ new Map([
      [
        e,
        null
      ]
    ]),
    currBranch: e,
    direction: "LR",
    seq: 0,
    options: {}
  };
});
function q() {
  return we$1({
    length: 7
  });
}
m$1(q, "getID");
function ge(r, e) {
  let o = /* @__PURE__ */ Object.create(null);
  return r.reduce((a, t) => {
    let n = e(t);
    return o[n] || (o[n] = true, a.push(t)), a;
  }, []);
}
m$1(ge, "uniqBy");
var fe = m$1(function(r) {
  i.records.direction = r;
}, "setDirection"), le = m$1(function(r) {
  tt$1.debug("options str", r), r = r == null ? void 0 : r.trim(), r = r || "{}";
  try {
    i.records.options = JSON.parse(r);
  } catch (e) {
    tt$1.error("error while parsing gitGraph options", e.message);
  }
}, "setOptions"), ye = m$1(function() {
  return i.records.options;
}, "getOptions"), ue = m$1(function(r) {
  let e = r.msg, o = r.id, a = r.type, t = r.tags;
  tt$1.info("commit", e, o, a, t), tt$1.debug("Entering commit:", e, o, a, t);
  let n = D();
  o = gC.sanitizeText(o, n), e = gC.sanitizeText(e, n), t = t == null ? void 0 : t.map((s2) => gC.sanitizeText(s2, n));
  let m = {
    id: o || i.records.seq + "-" + q(),
    message: e,
    seq: i.records.seq++,
    type: a ?? u.NORMAL,
    tags: t ?? [],
    parents: i.records.head == null ? [] : [
      i.records.head.id
    ],
    branch: i.records.currBranch
  };
  i.records.head = m, tt$1.info("main branch", n.mainBranchName), i.records.commits.set(m.id, m), i.records.branches.set(i.records.currBranch, m.id), tt$1.debug("in pushCommit " + m.id);
}, "commit"), xe = m$1(function(r) {
  let e = r.name, o = r.order;
  if (e = gC.sanitizeText(e, D()), i.records.branches.has(e)) throw new Error(`Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout ${e}")`);
  i.records.branches.set(e, i.records.head != null ? i.records.head.id : null), i.records.branchConfig.set(e, {
    name: e,
    order: o
  }), ne(e), tt$1.debug("in createBranch");
}, "branch"), $e = m$1((r) => {
  let e = r.branch, o = r.id, a = r.type, t = r.tags, n = D();
  e = gC.sanitizeText(e, n), o && (o = gC.sanitizeText(o, n));
  let m = i.records.branches.get(i.records.currBranch), s2 = i.records.branches.get(e), g = m ? i.records.commits.get(m) : void 0, p2 = s2 ? i.records.commits.get(s2) : void 0;
  if (g && p2 && g.branch === e) throw new Error(`Cannot merge branch '${e}' into itself.`);
  if (i.records.currBranch === e) {
    let c2 = new Error('Incorrect usage of "merge". Cannot merge a branch to itself');
    throw c2.hash = {
      text: `merge ${e}`,
      token: `merge ${e}`,
      expected: [
        "branch abc"
      ]
    }, c2;
  }
  if (g === void 0 || !g) {
    let c2 = new Error(`Incorrect usage of "merge". Current branch (${i.records.currBranch})has no commits`);
    throw c2.hash = {
      text: `merge ${e}`,
      token: `merge ${e}`,
      expected: [
        "commit"
      ]
    }, c2;
  }
  if (!i.records.branches.has(e)) {
    let c2 = new Error('Incorrect usage of "merge". Branch to be merged (' + e + ") does not exist");
    throw c2.hash = {
      text: `merge ${e}`,
      token: `merge ${e}`,
      expected: [
        `branch ${e}`
      ]
    }, c2;
  }
  if (p2 === void 0 || !p2) {
    let c2 = new Error('Incorrect usage of "merge". Branch to be merged (' + e + ") has no commits");
    throw c2.hash = {
      text: `merge ${e}`,
      token: `merge ${e}`,
      expected: [
        '"commit"'
      ]
    }, c2;
  }
  if (g === p2) {
    let c2 = new Error('Incorrect usage of "merge". Both branches have same head');
    throw c2.hash = {
      text: `merge ${e}`,
      token: `merge ${e}`,
      expected: [
        "branch abc"
      ]
    }, c2;
  }
  if (o && i.records.commits.has(o)) {
    let c2 = new Error('Incorrect usage of "merge". Commit with id:' + o + " already exists, use different custom Id");
    throw c2.hash = {
      text: `merge ${e} ${o} ${a} ${t == null ? void 0 : t.join(" ")}`,
      token: `merge ${e} ${o} ${a} ${t == null ? void 0 : t.join(" ")}`,
      expected: [
        `merge ${e} ${o}_UNIQUE ${a} ${t == null ? void 0 : t.join(" ")}`
      ]
    }, c2;
  }
  let h = s2 || "", f = {
    id: o || `${i.records.seq}-${q()}`,
    message: `merged branch ${e} into ${i.records.currBranch}`,
    seq: i.records.seq++,
    parents: i.records.head == null ? [] : [
      i.records.head.id,
      h
    ],
    branch: i.records.currBranch,
    type: u.MERGE,
    customType: a,
    customId: !!o,
    tags: t ?? []
  };
  i.records.head = f, i.records.commits.set(f.id, f), i.records.branches.set(i.records.currBranch, f.id), tt$1.debug(i.records.branches), tt$1.debug("in mergeBranch");
}, "merge"), be = m$1(function(r) {
  let e = r.id, o = r.targetId, a = r.tags, t = r.parent;
  tt$1.debug("Entering cherryPick:", e, o, a);
  let n = D();
  if (e = gC.sanitizeText(e, n), o = gC.sanitizeText(o, n), a = a == null ? void 0 : a.map((g) => gC.sanitizeText(g, n)), t = gC.sanitizeText(t, n), !e || !i.records.commits.has(e)) {
    let g = new Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');
    throw g.hash = {
      text: `cherryPick ${e} ${o}`,
      token: `cherryPick ${e} ${o}`,
      expected: [
        "cherry-pick abc"
      ]
    }, g;
  }
  let m = i.records.commits.get(e);
  if (m === void 0 || !m) throw new Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');
  if (t && !(Array.isArray(m.parents) && m.parents.includes(t))) throw new Error("Invalid operation: The specified parent commit is not an immediate parent of the cherry-picked commit.");
  let s2 = m.branch;
  if (m.type === u.MERGE && !t) throw new Error("Incorrect usage of cherry-pick: If the source commit is a merge commit, an immediate parent commit must be specified.");
  if (!o || !i.records.commits.has(o)) {
    if (s2 === i.records.currBranch) {
      let f = new Error('Incorrect usage of "cherryPick". Source commit is already on current branch');
      throw f.hash = {
        text: `cherryPick ${e} ${o}`,
        token: `cherryPick ${e} ${o}`,
        expected: [
          "cherry-pick abc"
        ]
      }, f;
    }
    let g = i.records.branches.get(i.records.currBranch);
    if (g === void 0 || !g) {
      let f = new Error(`Incorrect usage of "cherry-pick". Current branch (${i.records.currBranch})has no commits`);
      throw f.hash = {
        text: `cherryPick ${e} ${o}`,
        token: `cherryPick ${e} ${o}`,
        expected: [
          "cherry-pick abc"
        ]
      }, f;
    }
    let p2 = i.records.commits.get(g);
    if (p2 === void 0 || !p2) {
      let f = new Error(`Incorrect usage of "cherry-pick". Current branch (${i.records.currBranch})has no commits`);
      throw f.hash = {
        text: `cherryPick ${e} ${o}`,
        token: `cherryPick ${e} ${o}`,
        expected: [
          "cherry-pick abc"
        ]
      }, f;
    }
    let h = {
      id: i.records.seq + "-" + q(),
      message: `cherry-picked ${m == null ? void 0 : m.message} into ${i.records.currBranch}`,
      seq: i.records.seq++,
      parents: i.records.head == null ? [] : [
        i.records.head.id,
        m.id
      ],
      branch: i.records.currBranch,
      type: u.CHERRY_PICK,
      tags: a ? a.filter(Boolean) : [
        `cherry-pick:${m.id}${m.type === u.MERGE ? `|parent:${t}` : ""}`
      ]
    };
    i.records.head = h, i.records.commits.set(h.id, h), i.records.branches.set(i.records.currBranch, h.id), tt$1.debug(i.records.branches), tt$1.debug("in cherryPick");
  }
}, "cherryPick"), ne = m$1(function(r) {
  if (r = gC.sanitizeText(r, D()), i.records.branches.has(r)) {
    i.records.currBranch = r;
    let e = i.records.branches.get(i.records.currBranch);
    e === void 0 || !e ? i.records.head = null : i.records.head = i.records.commits.get(e) ?? null;
  } else {
    let e = new Error(`Trying to checkout branch which is not yet created. (Help try using "branch ${r}")`);
    throw e.hash = {
      text: `checkout ${r}`,
      token: `checkout ${r}`,
      expected: [
        `branch ${r}`
      ]
    }, e;
  }
}, "checkout");
function re(r, e, o) {
  let a = r.indexOf(e);
  a === -1 ? r.push(o) : r.splice(a, 1, o);
}
m$1(re, "upsert");
function oe(r) {
  let e = r.reduce((t, n) => t.seq > n.seq ? t : n, r[0]), o = "";
  r.forEach(function(t) {
    t === e ? o += "	*" : o += "	|";
  });
  let a = [
    o,
    e.id,
    e.seq
  ];
  for (let t in i.records.branches) i.records.branches.get(t) === e.id && a.push(t);
  if (tt$1.debug(a.join(" ")), e.parents && e.parents.length == 2 && e.parents[0] && e.parents[1]) {
    let t = i.records.commits.get(e.parents[0]);
    re(r, e, t), e.parents[1] && r.push(i.records.commits.get(e.parents[1]));
  } else {
    if (e.parents.length == 0) return;
    if (e.parents[0]) {
      let t = i.records.commits.get(e.parents[0]);
      re(r, e, t);
    }
  }
  r = ge(r, (t) => t.id), oe(r);
}
m$1(oe, "prettyPrintCommitHistory");
var Ce = m$1(function() {
  tt$1.debug(i.records.commits);
  let r = ae()[0];
  oe([
    r
  ]);
}, "prettyPrint"), Be = m$1(function() {
  i.reset(), Sf();
}, "clear"), we = m$1(function() {
  return [
    ...i.records.branchConfig.values()
  ].map((e, o) => e.order !== null && e.order !== void 0 ? e : {
    ...e,
    order: parseFloat(`0.${o}`)
  }).sort((e, o) => (e.order ?? 0) - (o.order ?? 0)).map((param) => {
    let { name: e } = param;
    return {
      name: e
    };
  });
}, "getBranchesAsObjArray"), ke = m$1(function() {
  return i.records.branches;
}, "getBranches"), Te = m$1(function() {
  return i.records.commits;
}, "getCommits"), ae = m$1(function() {
  let r = [
    ...i.records.commits.values()
  ];
  return r.forEach(function(e) {
    tt$1.debug(e.id);
  }), r.sort((e, o) => e.seq - o.seq), r;
}, "getCommitsArray"), Ee = m$1(function() {
  return i.records.currBranch;
}, "getCurrentBranch"), Pe = m$1(function() {
  return i.records.direction;
}, "getDirection"), Me = m$1(function() {
  return i.records.head;
}, "getHead"), v = {
  commitType: u,
  getConfig: D,
  setDirection: fe,
  setOptions: le,
  getOptions: ye,
  commit: ue,
  branch: xe,
  merge: $e,
  cherryPick: be,
  checkout: ne,
  prettyPrint: Ce,
  clear: Be,
  getBranchesAsObjArray: we,
  getBranches: ke,
  getCommits: Te,
  getCommitsArray: ae,
  getCurrentBranch: Ee,
  getDirection: Pe,
  getHead: Me,
  setAccTitle: vf,
  getAccTitle: wf,
  getAccDescription: Ff,
  setAccDescription: Bf,
  setDiagramTitle: Mf,
  getDiagramTitle: Lf
};
var De = m$1((r, e) => {
  c(r, e), r.dir && e.setDirection(r.dir);
  for (let o of r.statements) Ge(o, e);
}, "populate"), Ge = m$1((r, e) => {
  let a = {
    Commit: m$1((t) => e.commit(Le(t)), "Commit"),
    Branch: m$1((t) => e.branch(Oe(t)), "Branch"),
    Merge: m$1((t) => e.merge(ve(t)), "Merge"),
    Checkout: m$1((t) => e.checkout(Re(t)), "Checkout"),
    CherryPicking: m$1((t) => e.cherryPick(Ae(t)), "CherryPicking")
  }[r.$type];
  a ? a(r) : tt$1.error(`Unknown statement type: ${r.$type}`);
}, "parseStatement"), Le = m$1((r) => ({
  id: r.id,
  msg: r.message ?? "",
  type: r.type !== void 0 ? u[r.type] : u.NORMAL,
  tags: r.tags ?? void 0
}), "parseCommit"), Oe = m$1((r) => ({
  name: r.name,
  order: r.order ?? 0
}), "parseBranch"), ve = m$1((r) => ({
  branch: r.branch,
  id: r.id ?? "",
  type: r.type !== void 0 ? u[r.type] : void 0,
  tags: r.tags ?? void 0
}), "parseMerge"), Re = m$1((r) => r.branch, "parseCheckout"), Ae = m$1((r) => {
  var _a;
  return {
    id: r.id,
    targetId: "",
    tags: ((_a = r.tags) == null ? void 0 : _a.length) === 0 ? void 0 : r.tags,
    parent: r.parent
  };
}, "parseCherryPicking"), se = {
  parse: m$1(async (r) => {
    let e = await p("gitGraph", r);
    tt$1.debug(e), De(e, v);
  }, "parse")
};
var Ie = Hl(), w = Ie == null ? void 0 : Ie.gitGraph, P = 10, M = 40, k = 4, T = 2, G = 8, b = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), R = 30, L = /* @__PURE__ */ new Map(), A = [], E = 0, y = "LR", qe = m$1(() => {
  b.clear(), C.clear(), L.clear(), E = 0, A = [], y = "LR";
}, "clear"), ce = m$1((r) => {
  let e = document.createElementNS("http://www.w3.org/2000/svg", "text");
  return (typeof r == "string" ? r.split(/\\n|\n|<br\s*\/?>/gi) : r).forEach((a) => {
    let t = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
    t.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), t.setAttribute("dy", "1em"), t.setAttribute("x", "0"), t.setAttribute("class", "row"), t.textContent = a.trim(), e.appendChild(t);
  }), e;
}, "drawText"), me = m$1((r) => {
  let e, o, a;
  return y === "BT" ? (o = m$1((t, n) => t <= n, "comparisonFunc"), a = 1 / 0) : (o = m$1((t, n) => t >= n, "comparisonFunc"), a = 0), r.forEach((t) => {
    var _a, _b;
    let n = y === "TB" || y == "BT" ? (_a = C.get(t)) == null ? void 0 : _a.y : (_b = C.get(t)) == null ? void 0 : _b.x;
    n !== void 0 && o(n, a) && (e = t, a = n);
  }), e;
}, "findClosestParent"), He = m$1((r) => {
  let e = "", o = 1 / 0;
  return r.forEach((a) => {
    let t = C.get(a).y;
    t <= o && (e = a, o = t);
  }), e || void 0;
}, "findClosestParentBT"), Se = m$1((r, e, o) => {
  let a = o, t = o, n = [];
  r.forEach((m) => {
    let s2 = e.get(m);
    if (!s2) throw new Error(`Commit not found for key ${m}`);
    s2.parents.length ? (a = Ne(s2), t = Math.max(a, t)) : n.push(s2), _e(s2, a);
  }), a = t, n.forEach((m) => {
    je(m, a, o);
  }), r.forEach((m) => {
    let s2 = e.get(m);
    if (s2 == null ? void 0 : s2.parents.length) {
      let g = He(s2.parents);
      a = C.get(g).y - M, a <= t && (t = a);
      let p2 = b.get(s2.branch).pos, h = a - P;
      C.set(s2.id, {
        x: p2,
        y: h
      });
    }
  });
}, "setParallelBTPos"), We = m$1((r) => {
  var _a;
  let e = me(r.parents.filter((a) => a !== null));
  if (!e) throw new Error(`Closest parent not found for commit ${r.id}`);
  let o = (_a = C.get(e)) == null ? void 0 : _a.y;
  if (o === void 0) throw new Error(`Closest parent position not found for commit ${r.id}`);
  return o;
}, "findClosestParentPos"), Ne = m$1((r) => We(r) + M, "calculateCommitPosition"), _e = m$1((r, e) => {
  let o = b.get(r.branch);
  if (!o) throw new Error(`Branch not found for commit ${r.id}`);
  let a = o.pos, t = e + P;
  return C.set(r.id, {
    x: a,
    y: t
  }), {
    x: a,
    y: t
  };
}, "setCommitPosition"), je = m$1((r, e, o) => {
  let a = b.get(r.branch);
  if (!a) throw new Error(`Branch not found for commit ${r.id}`);
  let t = e + o, n = a.pos;
  C.set(r.id, {
    x: n,
    y: t
  });
}, "setRootPosition"), Fe = m$1((r, e, o, a, t, n) => {
  if (n === u.HIGHLIGHT) r.append("rect").attr("x", o.x - 10).attr("y", o.y - 10).attr("width", 20).attr("height", 20).attr("class", `commit ${e.id} commit-highlight${t % G} ${a}-outer`), r.append("rect").attr("x", o.x - 6).attr("y", o.y - 6).attr("width", 12).attr("height", 12).attr("class", `commit ${e.id} commit${t % G} ${a}-inner`);
  else if (n === u.CHERRY_PICK) r.append("circle").attr("cx", o.x).attr("cy", o.y).attr("r", 10).attr("class", `commit ${e.id} ${a}`), r.append("circle").attr("cx", o.x - 3).attr("cy", o.y + 2).attr("r", 2.75).attr("fill", "#fff").attr("class", `commit ${e.id} ${a}`), r.append("circle").attr("cx", o.x + 3).attr("cy", o.y + 2).attr("r", 2.75).attr("fill", "#fff").attr("class", `commit ${e.id} ${a}`), r.append("line").attr("x1", o.x + 3).attr("y1", o.y + 1).attr("x2", o.x).attr("y2", o.y - 5).attr("stroke", "#fff").attr("class", `commit ${e.id} ${a}`), r.append("line").attr("x1", o.x - 3).attr("y1", o.y + 1).attr("x2", o.x).attr("y2", o.y - 5).attr("stroke", "#fff").attr("class", `commit ${e.id} ${a}`);
  else {
    let m = r.append("circle");
    if (m.attr("cx", o.x), m.attr("cy", o.y), m.attr("r", e.type === u.MERGE ? 9 : 10), m.attr("class", `commit ${e.id} commit${t % G}`), n === u.MERGE) {
      let s2 = r.append("circle");
      s2.attr("cx", o.x), s2.attr("cy", o.y), s2.attr("r", 6), s2.attr("class", `commit ${a} ${e.id} commit${t % G}`);
    }
    n === u.REVERSE && r.append("path").attr("d", `M ${o.x - 5},${o.y - 5}L${o.x + 5},${o.y + 5}M${o.x - 5},${o.y + 5}L${o.x + 5},${o.y - 5}`).attr("class", `commit ${a} ${e.id} commit${t % G}`);
  }
}, "drawCommitBullet"), ze = m$1((r, e, o, a) => {
  var _a;
  if (e.type !== u.CHERRY_PICK && (e.customId && e.type === u.MERGE || e.type !== u.MERGE) && (w == null ? void 0 : w.showCommitLabel)) {
    let t = r.append("g"), n = t.insert("rect").attr("class", "commit-label-bkg"), m = t.append("text").attr("x", a).attr("y", o.y + 25).attr("class", "commit-label").text(e.id), s2 = (_a = m.node()) == null ? void 0 : _a.getBBox();
    if (s2 && (n.attr("x", o.posWithOffset - s2.width / 2 - T).attr("y", o.y + 13.5).attr("width", s2.width + 2 * T).attr("height", s2.height + 2 * T), y === "TB" || y === "BT" ? (n.attr("x", o.x - (s2.width + 4 * k + 5)).attr("y", o.y - 12), m.attr("x", o.x - (s2.width + 4 * k)).attr("y", o.y + s2.height - 12)) : m.attr("x", o.posWithOffset - s2.width / 2), w.rotateCommitLabel)) if (y === "TB" || y === "BT") m.attr("transform", "rotate(-45, " + o.x + ", " + o.y + ")"), n.attr("transform", "rotate(-45, " + o.x + ", " + o.y + ")");
    else {
      let g = -7.5 - (s2.width + 10) / 25 * 9.5, p2 = 10 + s2.width / 25 * 8.5;
      t.attr("transform", "translate(" + g + ", " + p2 + ") rotate(-45, " + a + ", " + o.y + ")");
    }
  }
}, "drawCommitLabel"), Ke = m$1((r, e, o, a) => {
  var _a;
  if (e.tags.length > 0) {
    let t = 0, n = 0, m = 0, s2 = [];
    for (let g of e.tags.reverse()) {
      let p2 = r.insert("polygon"), h = r.append("circle"), f = r.append("text").attr("y", o.y - 16 - t).attr("class", "tag-label").text(g), c2 = (_a = f.node()) == null ? void 0 : _a.getBBox();
      if (!c2) throw new Error("Tag bbox not found");
      n = Math.max(n, c2.width), m = Math.max(m, c2.height), f.attr("x", o.posWithOffset - c2.width / 2), s2.push({
        tag: f,
        hole: h,
        rect: p2,
        yOffset: t
      }), t += 20;
    }
    for (let { tag: g, hole: p2, rect: h, yOffset: f } of s2) {
      let c2 = m / 2, l = o.y - 19.2 - f;
      if (h.attr("class", "tag-label-bkg").attr("points", `
      ${a - n / 2 - k / 2},${l + T}  
      ${a - n / 2 - k / 2},${l - T}
      ${o.posWithOffset - n / 2 - k},${l - c2 - T}
      ${o.posWithOffset + n / 2 + k},${l - c2 - T}
      ${o.posWithOffset + n / 2 + k},${l + c2 + T}
      ${o.posWithOffset - n / 2 - k},${l + c2 + T}`), p2.attr("cy", l).attr("cx", a - n / 2 + k / 2).attr("r", 1.5).attr("class", "tag-hole"), y === "TB" || y === "BT") {
        let x = a + f;
        h.attr("class", "tag-label-bkg").attr("points", `
        ${o.x},${x + 2}
        ${o.x},${x - 2}
        ${o.x + P},${x - c2 - 2}
        ${o.x + P + n + 4},${x - c2 - 2}
        ${o.x + P + n + 4},${x + c2 + 2}
        ${o.x + P},${x + c2 + 2}`).attr("transform", "translate(12,12) rotate(45, " + o.x + "," + a + ")"), p2.attr("cx", o.x + k / 2).attr("cy", x).attr("transform", "translate(12,12) rotate(45, " + o.x + "," + a + ")"), g.attr("x", o.x + 5).attr("y", x + 3).attr("transform", "translate(14,14) rotate(45, " + o.x + "," + a + ")");
      }
    }
  }
}, "drawCommitTags"), Ue = m$1((r) => {
  switch (r.customType ?? r.type) {
    case u.NORMAL:
      return "commit-normal";
    case u.REVERSE:
      return "commit-reverse";
    case u.HIGHLIGHT:
      return "commit-highlight";
    case u.MERGE:
      return "commit-merge";
    case u.CHERRY_PICK:
      return "commit-cherry-pick";
    default:
      return "commit-normal";
  }
}, "getCommitClassType"), Ve = m$1((r, e, o, a) => {
  let t = {
    x: 0,
    y: 0
  };
  if (r.parents.length > 0) {
    let n = me(r.parents);
    if (n) {
      let m = a.get(n) ?? t;
      return e === "TB" ? m.y + M : e === "BT" ? (a.get(r.id) ?? t).y - M : m.x + M;
    }
  } else return e === "TB" ? R : e === "BT" ? (a.get(r.id) ?? t).y - M : 0;
  return 0;
}, "calculatePosition"), Ye = m$1((r, e, o) => {
  var _a, _b;
  let a = y === "BT" && o ? e : e + P, t = y === "TB" || y === "BT" ? a : (_a = b.get(r.branch)) == null ? void 0 : _a.pos, n = y === "TB" || y === "BT" ? (_b = b.get(r.branch)) == null ? void 0 : _b.pos : a;
  if (n === void 0 || t === void 0) throw new Error(`Position were undefined for commit ${r.id}`);
  return {
    x: n,
    y: t,
    posWithOffset: a
  };
}, "getCommitPosition"), ie = m$1((r, e, o) => {
  if (!w) throw new Error("GitGraph config not found");
  let a = r.append("g").attr("class", "commit-bullets"), t = r.append("g").attr("class", "commit-labels"), n = y === "TB" || y === "BT" ? R : 0, m = [
    ...e.keys()
  ], s2 = (w == null ? void 0 : w.parallelCommits) ?? false, g = m$1((h, f) => {
    var _a, _b;
    let c2 = (_a = e.get(h)) == null ? void 0 : _a.seq, l = (_b = e.get(f)) == null ? void 0 : _b.seq;
    return c2 !== void 0 && l !== void 0 ? c2 - l : 0;
  }, "sortKeys"), p2 = m.sort(g);
  y === "BT" && (s2 && Se(p2, e, n), p2 = p2.reverse()), p2.forEach((h) => {
    var _a;
    let f = e.get(h);
    if (!f) throw new Error(`Commit not found for key ${h}`);
    s2 && (n = Ve(f, y, n, C));
    let c2 = Ye(f, n, s2);
    if (o) {
      let l = Ue(f), x = f.customType ?? f.type, I = ((_a = b.get(f.branch)) == null ? void 0 : _a.index) ?? 0;
      Fe(a, f, c2, l, I, x), ze(t, f, c2, n), Ke(t, f, c2, n);
    }
    y === "TB" || y === "BT" ? C.set(f.id, {
      x: c2.x,
      y: c2.posWithOffset
    }) : C.set(f.id, {
      x: c2.posWithOffset,
      y: c2.y
    }), n = y === "BT" && s2 ? n + M : n + M + P, n > E && (E = n);
  });
}, "drawCommits"), Ze = m$1((r, e, o, a, t) => {
  let m = (y === "TB" || y === "BT" ? o.x < a.x : o.y < a.y) ? e.branch : r.branch, s2 = m$1((p2) => p2.branch === m, "isOnBranchToGetCurve"), g = m$1((p2) => p2.seq > r.seq && p2.seq < e.seq, "isBetweenCommits");
  return [
    ...t.values()
  ].some((p2) => g(p2) && s2(p2));
}, "shouldRerouteArrow"), O = m$1(function(r, e) {
  let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
  let a = r + Math.abs(r - e) / 2;
  if (o > 5) return a;
  if (A.every((m) => Math.abs(m - a) >= 10)) return A.push(a), a;
  let n = Math.abs(r - e);
  return O(r, e - n / 5, o + 1);
}, "findLane"), Je = m$1((r, e, o, a) => {
  var _a, _b, _c, _d, _e2;
  let t = C.get(e.id), n = C.get(o.id);
  if (t === void 0 || n === void 0) throw new Error(`Commit positions not found for commits ${e.id} and ${o.id}`);
  let m = Ze(e, o, t, n, a), s2 = "", g = "", p2 = 0, h = 0, f = (_a = b.get(o.branch)) == null ? void 0 : _a.index;
  o.type === u.MERGE && e.id !== o.parents[0] && (f = (_b = b.get(e.branch)) == null ? void 0 : _b.index);
  let c2;
  if (m) {
    s2 = "A 10 10, 0, 0, 0,", g = "A 10 10, 0, 0, 1,", p2 = 10, h = 10;
    let l = t.y < n.y ? O(t.y, n.y) : O(n.y, t.y), x = t.x < n.x ? O(t.x, n.x) : O(n.x, t.x);
    y === "TB" ? t.x < n.x ? c2 = `M ${t.x} ${t.y} L ${x - p2} ${t.y} ${g} ${x} ${t.y + h} L ${x} ${n.y - p2} ${s2} ${x + h} ${n.y} L ${n.x} ${n.y}` : (f = (_c = b.get(e.branch)) == null ? void 0 : _c.index, c2 = `M ${t.x} ${t.y} L ${x + p2} ${t.y} ${s2} ${x} ${t.y + h} L ${x} ${n.y - p2} ${g} ${x - h} ${n.y} L ${n.x} ${n.y}`) : y === "BT" ? t.x < n.x ? c2 = `M ${t.x} ${t.y} L ${x - p2} ${t.y} ${s2} ${x} ${t.y - h} L ${x} ${n.y + p2} ${g} ${x + h} ${n.y} L ${n.x} ${n.y}` : (f = (_d = b.get(e.branch)) == null ? void 0 : _d.index, c2 = `M ${t.x} ${t.y} L ${x + p2} ${t.y} ${g} ${x} ${t.y - h} L ${x} ${n.y + p2} ${s2} ${x - h} ${n.y} L ${n.x} ${n.y}`) : t.y < n.y ? c2 = `M ${t.x} ${t.y} L ${t.x} ${l - p2} ${s2} ${t.x + h} ${l} L ${n.x - p2} ${l} ${g} ${n.x} ${l + h} L ${n.x} ${n.y}` : (f = (_e2 = b.get(e.branch)) == null ? void 0 : _e2.index, c2 = `M ${t.x} ${t.y} L ${t.x} ${l + p2} ${g} ${t.x + h} ${l} L ${n.x - p2} ${l} ${s2} ${n.x} ${l - h} L ${n.x} ${n.y}`);
  } else s2 = "A 20 20, 0, 0, 0,", g = "A 20 20, 0, 0, 1,", p2 = 20, h = 20, y === "TB" ? (t.x < n.x && (o.type === u.MERGE && e.id !== o.parents[0] ? c2 = `M ${t.x} ${t.y} L ${t.x} ${n.y - p2} ${s2} ${t.x + h} ${n.y} L ${n.x} ${n.y}` : c2 = `M ${t.x} ${t.y} L ${n.x - p2} ${t.y} ${g} ${n.x} ${t.y + h} L ${n.x} ${n.y}`), t.x > n.x && (s2 = "A 20 20, 0, 0, 0,", g = "A 20 20, 0, 0, 1,", p2 = 20, h = 20, o.type === u.MERGE && e.id !== o.parents[0] ? c2 = `M ${t.x} ${t.y} L ${t.x} ${n.y - p2} ${g} ${t.x - h} ${n.y} L ${n.x} ${n.y}` : c2 = `M ${t.x} ${t.y} L ${n.x + p2} ${t.y} ${s2} ${n.x} ${t.y + h} L ${n.x} ${n.y}`), t.x === n.x && (c2 = `M ${t.x} ${t.y} L ${n.x} ${n.y}`)) : y === "BT" ? (t.x < n.x && (o.type === u.MERGE && e.id !== o.parents[0] ? c2 = `M ${t.x} ${t.y} L ${t.x} ${n.y + p2} ${g} ${t.x + h} ${n.y} L ${n.x} ${n.y}` : c2 = `M ${t.x} ${t.y} L ${n.x - p2} ${t.y} ${s2} ${n.x} ${t.y - h} L ${n.x} ${n.y}`), t.x > n.x && (s2 = "A 20 20, 0, 0, 0,", g = "A 20 20, 0, 0, 1,", p2 = 20, h = 20, o.type === u.MERGE && e.id !== o.parents[0] ? c2 = `M ${t.x} ${t.y} L ${t.x} ${n.y + p2} ${s2} ${t.x - h} ${n.y} L ${n.x} ${n.y}` : c2 = `M ${t.x} ${t.y} L ${n.x - p2} ${t.y} ${s2} ${n.x} ${t.y - h} L ${n.x} ${n.y}`), t.x === n.x && (c2 = `M ${t.x} ${t.y} L ${n.x} ${n.y}`)) : (t.y < n.y && (o.type === u.MERGE && e.id !== o.parents[0] ? c2 = `M ${t.x} ${t.y} L ${n.x - p2} ${t.y} ${g} ${n.x} ${t.y + h} L ${n.x} ${n.y}` : c2 = `M ${t.x} ${t.y} L ${t.x} ${n.y - p2} ${s2} ${t.x + h} ${n.y} L ${n.x} ${n.y}`), t.y > n.y && (o.type === u.MERGE && e.id !== o.parents[0] ? c2 = `M ${t.x} ${t.y} L ${n.x - p2} ${t.y} ${s2} ${n.x} ${t.y - h} L ${n.x} ${n.y}` : c2 = `M ${t.x} ${t.y} L ${t.x} ${n.y + p2} ${g} ${t.x + h} ${n.y} L ${n.x} ${n.y}`), t.y === n.y && (c2 = `M ${t.x} ${t.y} L ${n.x} ${n.y}`));
  if (c2 === void 0) throw new Error("Line definition not found");
  r.append("path").attr("d", c2).attr("class", "arrow arrow" + f % G);
}, "drawArrow"), Xe = m$1((r, e) => {
  let o = r.append("g").attr("class", "commit-arrows");
  [
    ...e.keys()
  ].forEach((a) => {
    let t = e.get(a);
    t.parents && t.parents.length > 0 && t.parents.forEach((n) => {
      Je(o, e.get(n), t, e);
    });
  });
}, "drawArrows"), Qe = m$1((r, e) => {
  let o = r.append("g");
  e.forEach((a, t) => {
    var _a;
    let n = t % G, m = (_a = b.get(a.name)) == null ? void 0 : _a.pos;
    if (m === void 0) throw new Error(`Position not found for branch ${a.name}`);
    let s2 = o.append("line");
    s2.attr("x1", 0), s2.attr("y1", m), s2.attr("x2", E), s2.attr("y2", m), s2.attr("class", "branch branch" + n), y === "TB" ? (s2.attr("y1", R), s2.attr("x1", m), s2.attr("y2", E), s2.attr("x2", m)) : y === "BT" && (s2.attr("y1", E), s2.attr("x1", m), s2.attr("y2", R), s2.attr("x2", m)), A.push(m);
    let g = a.name, p2 = ce(g), h = o.insert("rect"), c2 = o.insert("g").attr("class", "branchLabel").insert("g").attr("class", "label branch-label" + n);
    c2.node().appendChild(p2);
    let l = p2.getBBox();
    h.attr("class", "branchLabelBkg label" + n).attr("rx", 4).attr("ry", 4).attr("x", -l.width - 4 - ((w == null ? void 0 : w.rotateCommitLabel) === true ? 30 : 0)).attr("y", -l.height / 2 + 8).attr("width", l.width + 18).attr("height", l.height + 4), c2.attr("transform", "translate(" + (-l.width - 14 - ((w == null ? void 0 : w.rotateCommitLabel) === true ? 30 : 0)) + ", " + (m - l.height / 2 - 1) + ")"), y === "TB" ? (h.attr("x", m - l.width / 2 - 10).attr("y", 0), c2.attr("transform", "translate(" + (m - l.width / 2 - 5) + ", 0)")) : y === "BT" ? (h.attr("x", m - l.width / 2 - 10).attr("y", E), c2.attr("transform", "translate(" + (m - l.width / 2 - 5) + ", " + E + ")")) : h.attr("transform", "translate(-19, " + (m - l.height / 2) + ")");
  });
}, "drawBranches"), et = m$1(function(r, e, o, a, t) {
  return b.set(r, {
    pos: e,
    index: o
  }), e += 50 + (t ? 40 : 0) + (y === "TB" || y === "BT" ? a.width / 2 : 0), e;
}, "setBranchPosition"), tt = m$1(function(r, e, o, a) {
  if (qe(), tt$1.debug("in gitgraph renderer", r + `
`, "id:", e, o), !w) throw new Error("GitGraph config not found");
  let t = w.rotateCommitLabel ?? false, n = a.db;
  L = n.getCommits();
  let m = n.getBranchesAsObjArray();
  y = n.getDirection();
  let s2 = ih(`[id="${e}"]`), g = 0;
  m.forEach((p2, h) => {
    var _a;
    let f = ce(p2.name), c2 = s2.append("g"), l = c2.insert("g").attr("class", "branchLabel"), x = l.insert("g").attr("class", "label branch-label");
    (_a = x.node()) == null ? void 0 : _a.appendChild(f);
    let I = f.getBBox();
    g = et(p2.name, g, h, I, t), x.remove(), l.remove(), c2.remove();
  }), ie(s2, L, false), w.showBranches && Qe(s2, m), Xe(s2, L), ie(s2, L, true), Ie$1.insertTitle(s2, "gitTitleText", w.titleTopMargin ?? 0, n.getDiagramTitle()), Of(void 0, s2, w.diagramPadding, w.useMaxWidth);
}, "draw"), de = {
  draw: tt
};
var rt = m$1((r) => `
  .commit-id,
  .commit-msg,
  .branch-label {
    fill: lightgrey;
    color: lightgrey;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  ${[
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7
].map((e) => `
        .branch-label${e} { fill: ${r["gitBranchLabel" + e]}; }
        .commit${e} { stroke: ${r["git" + e]}; fill: ${r["git" + e]}; }
        .commit-highlight${e} { stroke: ${r["gitInv" + e]}; fill: ${r["gitInv" + e]}; }
        .label${e}  { fill: ${r["git" + e]}; }
        .arrow${e} { stroke: ${r["git" + e]}; }
        `).join(`
`)}

  .branch {
    stroke-width: 1;
    stroke: ${r.lineColor};
    stroke-dasharray: 2;
  }
  .commit-label { font-size: ${r.commitLabelFontSize}; fill: ${r.commitLabelColor};}
  .commit-label-bkg { font-size: ${r.commitLabelFontSize}; fill: ${r.commitLabelBackground}; opacity: 0.5; }
  .tag-label { font-size: ${r.tagLabelFontSize}; fill: ${r.tagLabelColor};}
  .tag-label-bkg { fill: ${r.tagLabelBackground}; stroke: ${r.tagLabelBorder}; }
  .tag-hole { fill: ${r.textColor}; }

  .commit-merge {
    stroke: ${r.primaryColor};
    fill: ${r.primaryColor};
  }
  .commit-reverse {
    stroke: ${r.primaryColor};
    fill: ${r.primaryColor};
    stroke-width: 3;
  }
  .commit-highlight-outer {
  }
  .commit-highlight-inner {
    stroke: ${r.primaryColor};
    fill: ${r.primaryColor};
  }

  .arrow { stroke-width: 8; stroke-linecap: round; fill: none}
  .gitTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${r.textColor};
  }
`, "getStyles"), pe = rt;
var Rt = {
  parser: se,
  db: v,
  renderer: de,
  styles: pe
};
export {
  Rt as diagram
};
