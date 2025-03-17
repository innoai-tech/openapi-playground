var __typeError = (msg) => {
  throw TypeError(msg);
};
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var _a, __;
import { g as gr, m as mr } from "./vendor-min-mermaid~chunk-7LIB5WBN.BUtmhcDf.chunk.js";
import { w, $ } from "./vendor-min-mermaid~chunk-BOXWCURE.DhVggnz6.chunk.js";
import { V, S } from "./vendor-min-mermaid~chunk-SK5YHT3J.D4zQId3L.chunk.js";
import { Q as Qf } from "./vendor-min-mermaid~chunk-KTJJRPYF.Ba3UtYz5.chunk.js";
import { I as Ie, Y as Ye } from "./vendor-min-mermaid~chunk-QS5O44OF.L_MBO-WO.chunk.js";
import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js";
import { W as IC, t as tt, H as Hl, i as ih, v as vf, B as Bf, M as Mf, w as wf, F as Ff, L as Lf, g as gC, S as Sf, X as RC, a as Su, s as se } from "./vendor-min-mermaid~chunk-QJLC67TO.Dw34GYds.chunk.js";
var b1 = "flowchart-", Qe = (_a = class {
  constructor() {
    this.vertexCounter = 0;
    this.config = /* @__PURE__ */ Hl();
    this.vertices = /* @__PURE__ */ new Map();
    this.edges = [];
    this.classes = /* @__PURE__ */ new Map();
    this.subGraphs = [];
    this.subGraphLookup = /* @__PURE__ */ new Map();
    this.tooltips = /* @__PURE__ */ new Map();
    this.subCount = 0;
    this.firstGraphFlag = true;
    this.secCount = -1;
    this.posCrossRef = [];
    this.funs = [];
    this.setAccTitle = vf;
    this.setAccDescription = Bf;
    this.setDiagramTitle = Mf;
    this.getAccTitle = wf;
    this.getAccDescription = Ff;
    this.getDiagramTitle = Lf;
    this.funs.push(/* @__PURE__ */ this.setupToolTips.bind(this)), this.addVertex = /* @__PURE__ */ this.addVertex.bind(this), this.firstGraph = /* @__PURE__ */ this.firstGraph.bind(this), this.setDirection = /* @__PURE__ */ this.setDirection.bind(this), this.addSubGraph = /* @__PURE__ */ this.addSubGraph.bind(this), this.addLink = /* @__PURE__ */ this.addLink.bind(this), this.setLink = /* @__PURE__ */ this.setLink.bind(this), this.updateLink = /* @__PURE__ */ this.updateLink.bind(this), this.addClass = /* @__PURE__ */ this.addClass.bind(this), this.setClass = /* @__PURE__ */ this.setClass.bind(this), this.destructLink = /* @__PURE__ */ this.destructLink.bind(this), this.setClickEvent = /* @__PURE__ */ this.setClickEvent.bind(this), this.setTooltip = /* @__PURE__ */ this.setTooltip.bind(this), this.updateLinkInterpolate = /* @__PURE__ */ this.updateLinkInterpolate.bind(this), this.setClickFun = /* @__PURE__ */ this.setClickFun.bind(this), this.bindFunctions = /* @__PURE__ */ this.bindFunctions.bind(this), this.lex = {
      firstGraph: /* @__PURE__ */ this.firstGraph.bind(this)
    }, this.clear(), this.setGen("gen-2");
  }
  sanitizeText(i) {
    return gC.sanitizeText(i, this.config);
  }
  lookUpDomId(i) {
    for (let r of this.vertices.values()) if (r.id === i) return r.domId;
    return i;
  }
  addVertex(i, r, n, u, l, f) {
    var _a2, _b;
    let c = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : {}, A = arguments.length > 7 ? arguments[7] : void 0;
    if (!i || i.trim().length === 0) return;
    let a;
    if (A !== void 0) {
      let E;
      A.includes(`
`) ? E = A + `
` : E = `{
` + A + `
}`, a = /* @__PURE__ */ gr(E, {
        schema: mr
      });
    }
    let g = /* @__PURE__ */ this.edges.find((E) => E.id === i);
    if (g) {
      let E = a;
      (E == null ? void 0 : E.animate) !== void 0 && (g.animate = E.animate), (E == null ? void 0 : E.animation) !== void 0 && (g.animation = E.animation);
      return;
    }
    let w2, k = /* @__PURE__ */ this.vertices.get(i);
    if (k === void 0 && (k = {
      id: i,
      labelType: "text",
      domId: b1 + i + "-" + this.vertexCounter,
      styles: [],
      classes: []
    }, this.vertices.set(i, k)), this.vertexCounter++, r !== void 0 ? (this.config = /* @__PURE__ */ Hl(), w2 = /* @__PURE__ */ this.sanitizeText(/* @__PURE__ */ r.text.trim()), k.labelType = r.type, w2.startsWith('"') && w2.endsWith('"') && (w2 = /* @__PURE__ */ w2.substring(1, w2.length - 1)), k.text = w2) : k.text === void 0 && (k.text = i), n !== void 0 && (k.type = n), u == null ? void 0 : u.forEach((E) => {
      k.styles.push(E);
    }), l == null ? void 0 : l.forEach((E) => {
      k.classes.push(E);
    }), f !== void 0 && (k.dir = f), k.props === void 0 ? k.props = c : c !== void 0 && Object.assign(k.props, c), a !== void 0) {
      if (a.shape) {
        if (a.shape !== a.shape.toLowerCase() || a.shape.includes("_")) throw new Error(`No such shape: ${a.shape}. Shape names should be lowercase.`);
        if (!Qf(a.shape)) throw new Error(`No such shape: ${a.shape}.`);
        k.type = a == null ? void 0 : a.shape;
      }
      (a == null ? void 0 : a.label) && (k.text = a == null ? void 0 : a.label), (a == null ? void 0 : a.icon) && (k.icon = a == null ? void 0 : a.icon, !((_a2 = a.label) == null ? void 0 : _a2.trim()) && k.text === i && (k.text = "")), (a == null ? void 0 : a.form) && (k.form = a == null ? void 0 : a.form), (a == null ? void 0 : a.pos) && (k.pos = a == null ? void 0 : a.pos), (a == null ? void 0 : a.img) && (k.img = a == null ? void 0 : a.img, !((_b = a.label) == null ? void 0 : _b.trim()) && k.text === i && (k.text = "")), (a == null ? void 0 : a.constraint) && (k.constraint = a.constraint), a.w && (k.assetWidth = /* @__PURE__ */ Number(a.w)), a.h && (k.assetHeight = /* @__PURE__ */ Number(a.h));
    }
  }
  addSingleLink(i, r, n, u) {
    let c = {
      start: i,
      end: r,
      type: void 0,
      text: "",
      labelType: "text",
      classes: [],
      isUserDefinedId: false
    };
    tt.info("abc78 Got edge...", c);
    let A = n.text;
    if (A !== void 0 && (c.text = /* @__PURE__ */ this.sanitizeText(/* @__PURE__ */ A.text.trim()), c.text.startsWith('"') && c.text.endsWith('"') && (c.text = /* @__PURE__ */ c.text.substring(1, c.text.length - 1)), c.labelType = A.type), n !== void 0 && (c.type = n.type, c.stroke = n.stroke, c.length = n.length > 10 ? 10 : n.length), u && !this.edges.some((a) => a.id === u)) c.id = u, c.isUserDefinedId = true;
    else {
      let a = /* @__PURE__ */ this.edges.filter((g) => g.start === c.start && g.end === c.end);
      a.length === 0 ? c.id = /* @__PURE__ */ Ye(c.start, c.end, {
        counter: 0,
        prefix: "L"
      }) : c.id = /* @__PURE__ */ Ye(c.start, c.end, {
        counter: a.length + 1,
        prefix: "L"
      });
    }
    if (this.edges.length < (this.config.maxEdges ?? 500)) tt.info("Pushing edge..."), this.edges.push(c);
    else throw new Error(`Edge limit exceeded. ${this.edges.length} edges found, but the limit is ${this.config.maxEdges}.

Initialize mermaid with maxEdges set to a higher number to allow more edges.
You cannot set this config via configuration inside the diagram as it is a secure config.
You have to call mermaid.initialize.`);
  }
  isLinkData(i) {
    return i !== null && typeof i == "object" && "id" in i && typeof i.id == "string";
  }
  addLink(i, r, n) {
    let u = this.isLinkData(n) ? n.id.replace("@", "") : void 0;
    tt.info("addLink", i, r, u);
    for (let l of i) for (let f of r) {
      let c = l === i[i.length - 1], A = f === r[0];
      c && A ? this.addSingleLink(l, f, n, u) : this.addSingleLink(l, f, n, void 0);
    }
  }
  updateLinkInterpolate(i, r) {
    i.forEach((n) => {
      n === "default" ? this.edges.defaultInterpolate = r : this.edges[n].interpolate = r;
    });
  }
  updateLink(i, r) {
    i.forEach((n) => {
      var _a2, _b, _c, _d, _e, _f;
      if (typeof n == "number" && n >= this.edges.length) throw new Error(`The index ${n} for linkStyle is out of bounds. Valid indices for linkStyle are between 0 and ${this.edges.length - 1}. (Help: Ensure that the index is within the range of existing edges.)`);
      n === "default" ? this.edges.defaultStyle = r : (this.edges[n].style = r, (((_b = (_a2 = this.edges[n]) == null ? void 0 : _a2.style) == null ? void 0 : _b.length) ?? 0) > 0 && !((_d = (_c = this.edges[n]) == null ? void 0 : _c.style) == null ? void 0 : _d.some((u) => u == null ? void 0 : u.startsWith("fill"))) && ((_f = (_e = this.edges[n]) == null ? void 0 : _e.style) == null ? void 0 : _f.push("fill:none")));
    });
  }
  addClass(i, r) {
    let n = /* @__PURE__ */ r.join().replace(/\\,/g, "§§§").replace(/,/g, ";").replace(/§§§/g, ",").split(";");
    i.split(",").forEach((u) => {
      let l = /* @__PURE__ */ this.classes.get(u);
      l === void 0 && (l = {
        id: u,
        styles: [],
        textStyles: []
      }, this.classes.set(u, l)), n == null ? void 0 : n.forEach((f) => {
        if (/color/.exec(f)) {
          let c = /* @__PURE__ */ f.replace("fill", "bgFill");
          l.textStyles.push(c);
        }
        l.styles.push(f);
      });
    });
  }
  setDirection(i) {
    this.direction = i, /.*</.exec(this.direction) && (this.direction = "RL"), /.*\^/.exec(this.direction) && (this.direction = "BT"), /.*>/.exec(this.direction) && (this.direction = "LR"), /.*v/.exec(this.direction) && (this.direction = "TB"), this.direction === "TD" && (this.direction = "TB");
  }
  setClass(i, r) {
    for (let n of i.split(",")) {
      let u = /* @__PURE__ */ this.vertices.get(n);
      u && u.classes.push(r);
      let l = /* @__PURE__ */ this.edges.find((c) => c.id === n);
      l && l.classes.push(r);
      let f = /* @__PURE__ */ this.subGraphLookup.get(n);
      f && f.classes.push(r);
    }
  }
  setTooltip(i, r) {
    if (r !== void 0) {
      r = /* @__PURE__ */ this.sanitizeText(r);
      for (let n of i.split(",")) this.tooltips.set(this.version === "gen-1" ? this.lookUpDomId(n) : n, r);
    }
  }
  setClickFun(i, r, n) {
    let u = /* @__PURE__ */ this.lookUpDomId(i);
    if (Hl().securityLevel !== "loose" || r === void 0) return;
    let l = [];
    if (typeof n == "string") {
      l = /* @__PURE__ */ n.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
      for (let c = 0; c < l.length; c++) {
        let A = /* @__PURE__ */ l[c].trim();
        A.startsWith('"') && A.endsWith('"') && (A = /* @__PURE__ */ A.substr(1, A.length - 2)), l[c] = A;
      }
    }
    l.length === 0 && l.push(i);
    let f = /* @__PURE__ */ this.vertices.get(i);
    f && (f.haveCallback = true, this.funs.push(() => {
      let c = /* @__PURE__ */ document.querySelector(`[id="${u}"]`);
      c !== null && c.addEventListener("click", () => {
        Ie.runFunc(r, ...l);
      }, false);
    }));
  }
  setLink(i, r, n) {
    i.split(",").forEach((u) => {
      let l = /* @__PURE__ */ this.vertices.get(u);
      l !== void 0 && (l.link = /* @__PURE__ */ Ie.formatUrl(r, this.config), l.linkTarget = n);
    }), this.setClass(i, "clickable");
  }
  getTooltip(i) {
    return this.tooltips.get(i);
  }
  setClickEvent(i, r, n) {
    i.split(",").forEach((u) => {
      this.setClickFun(u, r, n);
    }), this.setClass(i, "clickable");
  }
  bindFunctions(i) {
    this.funs.forEach((r) => {
      r(i);
    });
  }
  getDirection() {
    var _a2;
    return (_a2 = this.direction) == null ? void 0 : _a2.trim();
  }
  getVertices() {
    return this.vertices;
  }
  getEdges() {
    return this.edges;
  }
  getClasses() {
    return this.classes;
  }
  setupToolTips(i) {
    let r = /* @__PURE__ */ ih(".mermaidTooltip");
    (r._groups || r)[0][0] === null && (r = /* @__PURE__ */ ih("body").append("div").attr("class", "mermaidTooltip").style("opacity", 0)), ih(i).select("svg").selectAll("g.node").on("mouseover", (l) => {
      var _a2;
      let f = /* @__PURE__ */ ih(l.currentTarget);
      if (f.attr("title") === null) return;
      let A = (_a2 = l.currentTarget) == null ? void 0 : _a2.getBoundingClientRect();
      r.transition().duration(200).style("opacity", ".9"), r.text(/* @__PURE__ */ f.attr("title")).style("left", window.scrollX + A.left + (A.right - A.left) / 2 + "px").style("top", window.scrollY + A.bottom + "px"), r.html(/* @__PURE__ */ r.html().replace(/&lt;br\/&gt;/g, "<br/>")), f.classed("hover", true);
    }).on("mouseout", (l) => {
      r.transition().duration(500).style("opacity", 0), ih(l.currentTarget).classed("hover", false);
    });
  }
  clear() {
    let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "gen-2";
    this.vertices = /* @__PURE__ */ new Map(), this.classes = /* @__PURE__ */ new Map(), this.edges = [], this.funs = [
      /* @__PURE__ */ this.setupToolTips.bind(this)
    ], this.subGraphs = [], this.subGraphLookup = /* @__PURE__ */ new Map(), this.subCount = 0, this.tooltips = /* @__PURE__ */ new Map(), this.firstGraphFlag = true, this.version = i, this.config = /* @__PURE__ */ Hl(), Sf();
  }
  setGen(i) {
    this.version = i || "gen-2";
  }
  defaultStyle() {
    return "fill:#ffa;stroke: #f66; stroke-width: 3px; stroke-dasharray: 5, 5;fill:#ffa;stroke: #666;";
  }
  addSubGraph(i, r, n) {
    let u = /* @__PURE__ */ i.text.trim(), l = n.text;
    i === n && /\s/.exec(n.text) && (u = void 0);
    let f = /* @__PURE__ */ m$1((g) => {
      let w2 = {
        boolean: {},
        number: {},
        string: {}
      }, k = [], E;
      return {
        nodeList: /* @__PURE__ */ g.filter(function(m) {
          let J = typeof m;
          return m.stmt && m.stmt === "dir" ? (E = m.value, false) : m.trim() === "" ? false : J in w2 ? w2[J].hasOwnProperty(m) ? false : w2[J][m] = true : k.includes(m) ? false : k.push(m);
        }),
        dir: E
      };
    }, "uniq"), { nodeList: c, dir: A } = f(/* @__PURE__ */ r.flat());
    if (this.version === "gen-1") for (let g = 0; g < c.length; g++) c[g] = /* @__PURE__ */ this.lookUpDomId(c[g]);
    u = u ?? "subGraph" + this.subCount, l = l || "", l = /* @__PURE__ */ this.sanitizeText(l), this.subCount = this.subCount + 1;
    let a = {
      id: u,
      nodes: c,
      title: /* @__PURE__ */ l.trim(),
      classes: [],
      dir: A,
      labelType: n.type
    };
    return tt.info("Adding", a.id, a.nodes, a.dir), a.nodes = this.makeUniq(a, this.subGraphs).nodes, this.subGraphs.push(a), this.subGraphLookup.set(u, a), u;
  }
  getPosForId(i) {
    for (let [r, n] of this.subGraphs.entries()) if (n.id === i) return r;
    return -1;
  }
  indexNodes2(i, r) {
    let n = this.subGraphs[r].nodes;
    if (this.secCount = this.secCount + 1, this.secCount > 2e3) return {
      result: false,
      count: 0
    };
    if (this.posCrossRef[this.secCount] = r, this.subGraphs[r].id === i) return {
      result: true,
      count: 0
    };
    let u = 0, l = 1;
    for (; u < n.length; ) {
      let f = /* @__PURE__ */ this.getPosForId(n[u]);
      if (f >= 0) {
        let c = /* @__PURE__ */ this.indexNodes2(i, f);
        if (c.result) return {
          result: true,
          count: l + c.count
        };
        l = l + c.count;
      }
      u = u + 1;
    }
    return {
      result: false,
      count: l
    };
  }
  getDepthFirstPos(i) {
    return this.posCrossRef[i];
  }
  indexNodes() {
    this.secCount = -1, this.subGraphs.length > 0 && this.indexNodes2("none", this.subGraphs.length - 1);
  }
  getSubGraphs() {
    return this.subGraphs;
  }
  firstGraph() {
    return this.firstGraphFlag ? (this.firstGraphFlag = false, true) : false;
  }
  destructStartLink(i) {
    let r = /* @__PURE__ */ i.trim(), n = "arrow_open";
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
    let u = "normal";
    return r.includes("=") && (u = "thick"), r.includes(".") && (u = "dotted"), {
      type: n,
      stroke: u
    };
  }
  countChar(i, r) {
    let n = r.length, u = 0;
    for (let l = 0; l < n; ++l) r[l] === i && ++u;
    return u;
  }
  destructEndLink(i) {
    let r = /* @__PURE__ */ i.trim(), n = /* @__PURE__ */ r.slice(0, -1), u = "arrow_open";
    switch (r.slice(-1)) {
      case "x":
        u = "arrow_cross", r.startsWith("x") && (u = "double_" + u, n = /* @__PURE__ */ n.slice(1));
        break;
      case ">":
        u = "arrow_point", r.startsWith("<") && (u = "double_" + u, n = /* @__PURE__ */ n.slice(1));
        break;
      case "o":
        u = "arrow_circle", r.startsWith("o") && (u = "double_" + u, n = /* @__PURE__ */ n.slice(1));
        break;
    }
    let l = "normal", f = n.length - 1;
    n.startsWith("=") && (l = "thick"), n.startsWith("~") && (l = "invisible");
    let c = /* @__PURE__ */ this.countChar(".", n);
    return c && (l = "dotted", f = c), {
      type: u,
      stroke: l,
      length: f
    };
  }
  destructLink(i, r) {
    let n = /* @__PURE__ */ this.destructEndLink(i), u;
    if (r) {
      if (u = /* @__PURE__ */ this.destructStartLink(r), u.stroke !== n.stroke) return {
        type: "INVALID",
        stroke: "INVALID"
      };
      if (u.type === "arrow_open") u.type = n.type;
      else {
        if (u.type !== n.type) return {
          type: "INVALID",
          stroke: "INVALID"
        };
        u.type = "double_" + u.type;
      }
      return u.type === "double_arrow" && (u.type = "double_arrow_point"), u.length = n.length, u;
    }
    return n;
  }
  exists(i, r) {
    for (let n of i) if (n.nodes.includes(r)) return true;
    return false;
  }
  makeUniq(i, r) {
    let n = [];
    return i.nodes.forEach((u, l) => {
      this.exists(r, u) || n.push(i.nodes[l]);
    }), {
      nodes: n
    };
  }
  getTypeFromVertex(i) {
    if (i.img) return "imageSquare";
    if (i.icon) return i.form === "circle" ? "iconCircle" : i.form === "square" ? "iconSquare" : i.form === "rounded" ? "iconRounded" : "icon";
    switch (i.type) {
      case "square":
      case void 0:
        return "squareRect";
      case "round":
        return "roundedRect";
      case "ellipse":
        return "ellipse";
      default:
        return i.type;
    }
  }
  findNode(i, r) {
    return i.find((n) => n.id === r);
  }
  destructEdgeType(i) {
    let r = "none", n = "arrow_point";
    switch (i) {
      case "arrow_point":
      case "arrow_circle":
      case "arrow_cross":
        n = i;
        break;
      case "double_arrow_point":
      case "double_arrow_circle":
      case "double_arrow_cross":
        r = /* @__PURE__ */ i.replace("double_", ""), n = r;
        break;
    }
    return {
      arrowTypeStart: r,
      arrowTypeEnd: n
    };
  }
  addNodeFromVertex(i, r, n, u, l, f) {
    var _a2;
    let c = /* @__PURE__ */ n.get(i.id), A = u.get(i.id) ?? false, a = /* @__PURE__ */ this.findNode(r, i.id);
    if (a) a.cssStyles = i.styles, a.cssCompiledStyles = /* @__PURE__ */ this.getCompiledStyles(i.classes), a.cssClasses = /* @__PURE__ */ i.classes.join(" ");
    else {
      let g = {
        id: i.id,
        label: i.text,
        labelStyle: "",
        parentId: c,
        padding: ((_a2 = l.flowchart) == null ? void 0 : _a2.padding) || 8,
        cssStyles: i.styles,
        cssCompiledStyles: /* @__PURE__ */ this.getCompiledStyles([
          "default",
          "node",
          ...i.classes
        ]),
        cssClasses: "default " + i.classes.join(" "),
        dir: i.dir,
        domId: i.domId,
        look: f,
        link: i.link,
        linkTarget: i.linkTarget,
        tooltip: /* @__PURE__ */ this.getTooltip(i.id),
        icon: i.icon,
        pos: i.pos,
        img: i.img,
        assetWidth: i.assetWidth,
        assetHeight: i.assetHeight,
        constraint: i.constraint
      };
      A ? r.push({
        ...g,
        isGroup: true,
        shape: "rect"
      }) : r.push({
        ...g,
        isGroup: false,
        shape: /* @__PURE__ */ this.getTypeFromVertex(i)
      });
    }
  }
  getCompiledStyles(i) {
    let r = [];
    for (let n of i) {
      let u = /* @__PURE__ */ this.classes.get(n);
      (u == null ? void 0 : u.styles) && (r = /* @__PURE__ */ [
        ...r,
        ...u.styles ?? []
      ].map((l) => l.trim())), (u == null ? void 0 : u.textStyles) && (r = /* @__PURE__ */ [
        ...r,
        ...u.textStyles ?? []
      ].map((l) => l.trim()));
    }
    return r;
  }
  getData() {
    let i = /* @__PURE__ */ Hl(), r = [], n = [], u = /* @__PURE__ */ this.getSubGraphs(), l = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
    for (let a = u.length - 1; a >= 0; a--) {
      let g = u[a];
      g.nodes.length > 0 && f.set(g.id, true);
      for (let w2 of g.nodes) l.set(w2, g.id);
    }
    for (let a = u.length - 1; a >= 0; a--) {
      let g = u[a];
      r.push({
        id: g.id,
        label: g.title,
        labelStyle: "",
        parentId: /* @__PURE__ */ l.get(g.id),
        padding: 8,
        cssCompiledStyles: /* @__PURE__ */ this.getCompiledStyles(g.classes),
        cssClasses: /* @__PURE__ */ g.classes.join(" "),
        shape: "rect",
        dir: g.dir,
        isGroup: true,
        look: i.look
      });
    }
    this.getVertices().forEach((a) => {
      this.addNodeFromVertex(a, r, l, f, i, i.look || "classic");
    });
    let A = /* @__PURE__ */ this.getEdges();
    return A.forEach((a, g) => {
      let { arrowTypeStart: w2, arrowTypeEnd: k } = this.destructEdgeType(a.type), E = [
        ...A.defaultStyle ?? []
      ];
      a.style && E.push(...a.style);
      let S2 = {
        id: /* @__PURE__ */ Ye(a.start, a.end, {
          counter: g,
          prefix: "L"
        }, a.id),
        isUserDefinedId: a.isUserDefinedId,
        start: a.start,
        end: a.end,
        type: a.type ?? "normal",
        label: a.text,
        labelpos: "c",
        thickness: a.stroke,
        minlen: a.length,
        classes: (a == null ? void 0 : a.stroke) === "invisible" ? "" : "edge-thickness-normal edge-pattern-solid flowchart-link",
        arrowTypeStart: (a == null ? void 0 : a.stroke) === "invisible" || (a == null ? void 0 : a.type) === "arrow_open" ? "none" : w2,
        arrowTypeEnd: (a == null ? void 0 : a.stroke) === "invisible" || (a == null ? void 0 : a.type) === "arrow_open" ? "none" : k,
        arrowheadStyle: "fill: #333",
        cssCompiledStyles: /* @__PURE__ */ this.getCompiledStyles(a.classes),
        labelStyle: E,
        style: E,
        pattern: a.stroke,
        look: i.look,
        animate: a.animate,
        animation: a.animation
      };
      n.push(S2);
    }), {
      nodes: r,
      edges: n,
      other: {},
      config: i
    };
  }
  defaultConfig() {
    return RC.flowchart;
  }
}, __ = new WeakMap(), __privateAdd(_a, __, m$1(_a, "FlowDB")), _a);
var g1 = /* @__PURE__ */ m$1(function(s, i) {
  return i.db.getClasses();
}, "getClasses"), k1 = /* @__PURE__ */ m$1(async function(s, i, r, n) {
  var _a2;
  tt.info("REF0:"), tt.info("Drawing state diagram (v2)", i);
  let { securityLevel: u, flowchart: l, layout: f } = Hl(), c;
  u === "sandbox" && (c = /* @__PURE__ */ ih("#i" + i));
  let A = u === "sandbox" ? c.nodes()[0].contentDocument : document;
  tt.debug("Before getData: ");
  let a = /* @__PURE__ */ n.db.getData();
  tt.debug("Data: ", a);
  let g = /* @__PURE__ */ w(i, u), w$1 = /* @__PURE__ */ n.db.getDirection();
  a.type = n.type, a.layoutAlgorithm = /* @__PURE__ */ V(f), a.layoutAlgorithm === "dagre" && f === "elk" && tt.warn("flowchart-elk was moved to an external package in Mermaid v11. Please refer [release notes](https://github.com/mermaid-js/mermaid/releases/tag/v11.0.0) for more details. This diagram will be rendered using `dagre` layout as a fallback."), a.direction = w$1, a.nodeSpacing = (l == null ? void 0 : l.nodeSpacing) || 50, a.rankSpacing = (l == null ? void 0 : l.rankSpacing) || 50, a.markers = [
    "point",
    "circle",
    "cross"
  ], a.diagramId = i, tt.debug("REF1:", a), await S(a, g);
  let k = ((_a2 = a.config.flowchart) == null ? void 0 : _a2.diagramPadding) ?? 8;
  Ie.insertTitle(g, "flowchartTitleText", (l == null ? void 0 : l.titleTopMargin) || 0, /* @__PURE__ */ n.db.getDiagramTitle()), $(g, k, "flowchart", (l == null ? void 0 : l.useMaxWidth) || false);
  for (let E of a.nodes) {
    let S2 = /* @__PURE__ */ ih(`#${i} [id="${E.id}"]`);
    if (!S2 || !E.link) continue;
    let m = /* @__PURE__ */ A.createElementNS("http://www.w3.org/2000/svg", "a");
    m.setAttributeNS("http://www.w3.org/2000/svg", "class", E.cssClasses), m.setAttributeNS("http://www.w3.org/2000/svg", "rel", "noopener"), u === "sandbox" ? m.setAttributeNS("http://www.w3.org/2000/svg", "target", "_top") : E.linkTarget && m.setAttributeNS("http://www.w3.org/2000/svg", "target", E.linkTarget);
    let J = /* @__PURE__ */ S2.insert(function() {
      return m;
    }, ":first-child"), ge = /* @__PURE__ */ S2.select(".label-container");
    ge && J.append(function() {
      return ge.node();
    });
    let ke = /* @__PURE__ */ S2.select(".label");
    ke && J.append(function() {
      return ke.node();
    });
  }
}, "draw"), a1 = {
  getClasses: g1,
  draw: k1
};
var at = /* @__PURE__ */ function() {
  var s = /* @__PURE__ */ m$1(function(fe, h, d, p) {
    for (d = d || {}, p = fe.length; p--; d[fe[p]] = h) ;
    return d;
  }, "o"), i = [
    1,
    4
  ], r = [
    1,
    3
  ], n = [
    1,
    5
  ], u = [
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
    84,
    85,
    86,
    87,
    88,
    89,
    102,
    105,
    106,
    109,
    111,
    114,
    115,
    116,
    121,
    122,
    123,
    124
  ], l = [
    2,
    2
  ], f = [
    1,
    13
  ], c = [
    1,
    14
  ], A = [
    1,
    15
  ], a = [
    1,
    16
  ], g = [
    1,
    23
  ], w2 = [
    1,
    25
  ], k = [
    1,
    26
  ], E = [
    1,
    27
  ], S2 = [
    1,
    49
  ], m = [
    1,
    48
  ], J = [
    1,
    29
  ], ge = [
    1,
    30
  ], ke = [
    1,
    31
  ], Me = [
    1,
    32
  ], Oe = [
    1,
    33
  ], V2 = [
    1,
    44
  ], v = [
    1,
    46
  ], I = [
    1,
    42
  ], N = [
    1,
    47
  ], R = [
    1,
    43
  ], G = [
    1,
    50
  ], P = [
    1,
    45
  ], M = [
    1,
    51
  ], O = [
    1,
    52
  ], Ue = [
    1,
    34
  ], je = [
    1,
    35
  ], We = [
    1,
    36
  ], ze = [
    1,
    37
  ], de = [
    1,
    57
  ], F = [
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
    84,
    85,
    86,
    87,
    88,
    89,
    102,
    105,
    106,
    109,
    111,
    114,
    115,
    116,
    121,
    122,
    123,
    124
  ], $2 = [
    1,
    61
  ], ee = [
    1,
    60
  ], te = [
    1,
    62
  ], De = [
    8,
    9,
    11,
    75,
    77,
    78
  ], ot = [
    1,
    78
  ], ye = [
    1,
    91
  ], xe = [
    1,
    96
  ], Se = [
    1,
    95
  ], Fe = [
    1,
    92
  ], Te = [
    1,
    88
  ], Be = [
    1,
    94
  ], _e = [
    1,
    90
  ], we = [
    1,
    97
  ], Le = [
    1,
    93
  ], Ve = [
    1,
    98
  ], ve = [
    1,
    89
  ], Ae = [
    8,
    9,
    10,
    11,
    40,
    75,
    77,
    78
  ], j = [
    8,
    9,
    10,
    11,
    40,
    46,
    75,
    77,
    78
  ], Y = [
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
    78,
    89,
    102,
    105,
    106,
    109,
    111,
    114,
    115,
    116
  ], lt = [
    8,
    9,
    11,
    44,
    60,
    75,
    77,
    78,
    89,
    102,
    105,
    106,
    109,
    111,
    114,
    115,
    116
  ], Ie2 = [
    44,
    60,
    89,
    102,
    105,
    106,
    109,
    111,
    114,
    115,
    116
  ], ct = [
    1,
    121
  ], ht = [
    1,
    122
  ], Ke = [
    1,
    124
  ], Ye2 = [
    1,
    123
  ], dt = [
    44,
    60,
    62,
    74,
    89,
    102,
    105,
    106,
    109,
    111,
    114,
    115,
    116
  ], pt = [
    1,
    133
  ], ft = [
    1,
    147
  ], bt = [
    1,
    148
  ], gt = [
    1,
    149
  ], kt = [
    1,
    150
  ], At = [
    1,
    135
  ], mt = [
    1,
    137
  ], Et = [
    1,
    141
  ], Ct = [
    1,
    142
  ], Dt = [
    1,
    143
  ], yt = [
    1,
    144
  ], xt = [
    1,
    145
  ], St = [
    1,
    146
  ], Ft = [
    1,
    151
  ], Tt = [
    1,
    152
  ], Bt = [
    1,
    131
  ], _t = [
    1,
    132
  ], wt = [
    1,
    139
  ], Lt = [
    1,
    134
  ], Vt = [
    1,
    138
  ], vt = [
    1,
    136
  ], Je = [
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
    84,
    85,
    86,
    87,
    88,
    89,
    102,
    105,
    106,
    109,
    111,
    114,
    115,
    116,
    121,
    122,
    123,
    124
  ], It = [
    1,
    154
  ], Nt = [
    1,
    156
  ], _ = [
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
    89,
    105,
    106,
    109,
    111,
    114,
    115,
    116
  ], C = [
    1,
    176
  ], W = [
    1,
    172
  ], z = [
    1,
    173
  ], D = [
    1,
    177
  ], y = [
    1,
    174
  ], x = [
    1,
    175
  ], Ne = [
    77,
    116,
    119
  ], T = [
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
    84,
    85,
    86,
    87,
    88,
    89,
    90,
    105,
    109,
    111,
    114,
    115,
    116
  ], Rt = [
    10,
    106
  ], pe = [
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
    116,
    117,
    118
  ], se2 = [
    1,
    247
  ], ie = [
    1,
    245
  ], re = [
    1,
    249
  ], ne = [
    1,
    243
  ], ae = [
    1,
    244
  ], ue = [
    1,
    246
  ], oe = [
    1,
    248
  ], le = [
    1,
    250
  ], Re = [
    1,
    268
  ], Gt = [
    8,
    9,
    11,
    106
  ], Z = [
    8,
    9,
    10,
    11,
    60,
    84,
    105,
    106,
    109,
    110,
    111,
    112
  ], Ze = {
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
      LINK_ID: 78,
      edgeTextToken: 79,
      STR: 80,
      MD_STR: 81,
      textToken: 82,
      keywords: 83,
      STYLE: 84,
      LINKSTYLE: 85,
      CLASSDEF: 86,
      CLASS: 87,
      CLICK: 88,
      DOWN: 89,
      UP: 90,
      textNoTagsToken: 91,
      stylesOpt: 92,
      "idString[vertex]": 93,
      "idString[class]": 94,
      CALLBACKNAME: 95,
      CALLBACKARGS: 96,
      HREF: 97,
      LINK_TARGET: 98,
      "STR[link]": 99,
      "STR[tooltip]": 100,
      alphaNum: 101,
      DEFAULT: 102,
      numList: 103,
      INTERPOLATE: 104,
      NUM: 105,
      COMMA: 106,
      style: 107,
      styleComponent: 108,
      NODE_STRING: 109,
      UNIT: 110,
      BRKT: 111,
      PCT: 112,
      idStringToken: 113,
      MINUS: 114,
      MULT: 115,
      UNICODE_TEXT: 116,
      TEXT: 117,
      TAGSTART: 118,
      EDGE_TEXT: 119,
      alphaNumToken: 120,
      direction_tb: 121,
      direction_bt: 122,
      direction_rl: 123,
      direction_lr: 124,
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
      78: "LINK_ID",
      80: "STR",
      81: "MD_STR",
      84: "STYLE",
      85: "LINKSTYLE",
      86: "CLASSDEF",
      87: "CLASS",
      88: "CLICK",
      89: "DOWN",
      90: "UP",
      93: "idString[vertex]",
      94: "idString[class]",
      95: "CALLBACKNAME",
      96: "CALLBACKARGS",
      97: "HREF",
      98: "LINK_TARGET",
      99: "STR[link]",
      100: "STR[tooltip]",
      102: "DEFAULT",
      104: "INTERPOLATE",
      105: "NUM",
      106: "COMMA",
      109: "NODE_STRING",
      110: "UNIT",
      111: "BRKT",
      112: "PCT",
      114: "MINUS",
      115: "MULT",
      116: "UNICODE_TEXT",
      117: "TEXT",
      118: "TAGSTART",
      119: "EDGE_TEXT",
      121: "direction_tb",
      122: "direction_bt",
      123: "direction_rl",
      124: "direction_lr"
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
        41,
        4
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
        72,
        2
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
        83,
        1
      ],
      [
        83,
        1
      ],
      [
        83,
        1
      ],
      [
        83,
        1
      ],
      [
        83,
        1
      ],
      [
        83,
        1
      ],
      [
        83,
        1
      ],
      [
        83,
        1
      ],
      [
        83,
        1
      ],
      [
        83,
        1
      ],
      [
        83,
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
        103,
        1
      ],
      [
        103,
        3
      ],
      [
        92,
        1
      ],
      [
        92,
        3
      ],
      [
        107,
        1
      ],
      [
        107,
        2
      ],
      [
        108,
        1
      ],
      [
        108,
        1
      ],
      [
        108,
        1
      ],
      [
        108,
        1
      ],
      [
        108,
        1
      ],
      [
        108,
        1
      ],
      [
        108,
        1
      ],
      [
        108,
        1
      ],
      [
        113,
        1
      ],
      [
        113,
        1
      ],
      [
        113,
        1
      ],
      [
        113,
        1
      ],
      [
        113,
        1
      ],
      [
        113,
        1
      ],
      [
        113,
        1
      ],
      [
        113,
        1
      ],
      [
        113,
        1
      ],
      [
        113,
        1
      ],
      [
        113,
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
        91,
        1
      ],
      [
        91,
        1
      ],
      [
        91,
        1
      ],
      [
        91,
        1
      ],
      [
        91,
        1
      ],
      [
        91,
        1
      ],
      [
        91,
        1
      ],
      [
        91,
        1
      ],
      [
        91,
        1
      ],
      [
        91,
        1
      ],
      [
        91,
        1
      ],
      [
        79,
        1
      ],
      [
        79,
        1
      ],
      [
        120,
        1
      ],
      [
        120,
        1
      ],
      [
        120,
        1
      ],
      [
        120,
        1
      ],
      [
        120,
        1
      ],
      [
        120,
        1
      ],
      [
        120,
        1
      ],
      [
        120,
        1
      ],
      [
        120,
        1
      ],
      [
        120,
        1
      ],
      [
        120,
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
        101,
        1
      ],
      [
        101,
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
    performAction: /* @__PURE__ */ m$1(function(h, d, p, o, B, e, me) {
      var t = e.length - 1;
      switch (B) {
        case 2:
          this.$ = [];
          break;
        case 3:
          (!Array.isArray(e[t]) || e[t].length > 0) && e[t - 1].push(e[t]), this.$ = e[t - 1];
          break;
        case 4:
        case 183:
          this.$ = e[t];
          break;
        case 11:
          o.setDirection("TB"), this.$ = "TB";
          break;
        case 12:
          o.setDirection(e[t - 1]), this.$ = e[t - 1];
          break;
        case 27:
          this.$ = e[t - 1].nodes;
          break;
        case 28:
        case 29:
        case 30:
        case 31:
        case 32:
          this.$ = [];
          break;
        case 33:
          this.$ = /* @__PURE__ */ o.addSubGraph(e[t - 6], e[t - 1], e[t - 4]);
          break;
        case 34:
          this.$ = /* @__PURE__ */ o.addSubGraph(e[t - 3], e[t - 1], e[t - 3]);
          break;
        case 35:
          this.$ = /* @__PURE__ */ o.addSubGraph(void 0, e[t - 1], void 0);
          break;
        case 37:
          this.$ = /* @__PURE__ */ e[t].trim(), o.setAccTitle(this.$);
          break;
        case 38:
        case 39:
          this.$ = /* @__PURE__ */ e[t].trim(), o.setAccDescription(this.$);
          break;
        case 43:
          this.$ = e[t - 1] + e[t];
          break;
        case 44:
          this.$ = e[t];
          break;
        case 45:
          o.addVertex(e[t - 1][e[t - 1].length - 1], void 0, void 0, void 0, void 0, void 0, void 0, e[t]), o.addLink(e[t - 3].stmt, e[t - 1], e[t - 2]), this.$ = {
            stmt: e[t - 1],
            nodes: /* @__PURE__ */ e[t - 1].concat(e[t - 3].nodes)
          };
          break;
        case 46:
          o.addLink(e[t - 2].stmt, e[t], e[t - 1]), this.$ = {
            stmt: e[t],
            nodes: /* @__PURE__ */ e[t].concat(e[t - 2].nodes)
          };
          break;
        case 47:
          o.addLink(e[t - 3].stmt, e[t - 1], e[t - 2]), this.$ = {
            stmt: e[t - 1],
            nodes: /* @__PURE__ */ e[t - 1].concat(e[t - 3].nodes)
          };
          break;
        case 48:
          this.$ = {
            stmt: e[t - 1],
            nodes: e[t - 1]
          };
          break;
        case 49:
          o.addVertex(e[t - 1][e[t - 1].length - 1], void 0, void 0, void 0, void 0, void 0, void 0, e[t]), this.$ = {
            stmt: e[t - 1],
            nodes: e[t - 1],
            shapeData: e[t]
          };
          break;
        case 50:
          this.$ = {
            stmt: e[t],
            nodes: e[t]
          };
          break;
        case 51:
          this.$ = [
            e[t]
          ];
          break;
        case 52:
          o.addVertex(e[t - 5][e[t - 5].length - 1], void 0, void 0, void 0, void 0, void 0, void 0, e[t - 4]), this.$ = /* @__PURE__ */ e[t - 5].concat(e[t]);
          break;
        case 53:
          this.$ = /* @__PURE__ */ e[t - 4].concat(e[t]);
          break;
        case 54:
          this.$ = e[t];
          break;
        case 55:
          this.$ = e[t - 2], o.setClass(e[t - 2], e[t]);
          break;
        case 56:
          this.$ = e[t - 3], o.addVertex(e[t - 3], e[t - 1], "square");
          break;
        case 57:
          this.$ = e[t - 3], o.addVertex(e[t - 3], e[t - 1], "doublecircle");
          break;
        case 58:
          this.$ = e[t - 5], o.addVertex(e[t - 5], e[t - 2], "circle");
          break;
        case 59:
          this.$ = e[t - 3], o.addVertex(e[t - 3], e[t - 1], "ellipse");
          break;
        case 60:
          this.$ = e[t - 3], o.addVertex(e[t - 3], e[t - 1], "stadium");
          break;
        case 61:
          this.$ = e[t - 3], o.addVertex(e[t - 3], e[t - 1], "subroutine");
          break;
        case 62:
          this.$ = e[t - 7], o.addVertex(e[t - 7], e[t - 1], "rect", void 0, void 0, void 0, /* @__PURE__ */ Object.fromEntries([
            [
              e[t - 5],
              e[t - 3]
            ]
          ]));
          break;
        case 63:
          this.$ = e[t - 3], o.addVertex(e[t - 3], e[t - 1], "cylinder");
          break;
        case 64:
          this.$ = e[t - 3], o.addVertex(e[t - 3], e[t - 1], "round");
          break;
        case 65:
          this.$ = e[t - 3], o.addVertex(e[t - 3], e[t - 1], "diamond");
          break;
        case 66:
          this.$ = e[t - 5], o.addVertex(e[t - 5], e[t - 2], "hexagon");
          break;
        case 67:
          this.$ = e[t - 3], o.addVertex(e[t - 3], e[t - 1], "odd");
          break;
        case 68:
          this.$ = e[t - 3], o.addVertex(e[t - 3], e[t - 1], "trapezoid");
          break;
        case 69:
          this.$ = e[t - 3], o.addVertex(e[t - 3], e[t - 1], "inv_trapezoid");
          break;
        case 70:
          this.$ = e[t - 3], o.addVertex(e[t - 3], e[t - 1], "lean_right");
          break;
        case 71:
          this.$ = e[t - 3], o.addVertex(e[t - 3], e[t - 1], "lean_left");
          break;
        case 72:
          this.$ = e[t], o.addVertex(e[t]);
          break;
        case 73:
          e[t - 1].text = e[t], this.$ = e[t - 1];
          break;
        case 74:
        case 75:
          e[t - 2].text = e[t - 1], this.$ = e[t - 2];
          break;
        case 76:
          this.$ = e[t];
          break;
        case 77:
          var L = /* @__PURE__ */ o.destructLink(e[t], e[t - 2]);
          this.$ = {
            type: L.type,
            stroke: L.stroke,
            length: L.length,
            text: e[t - 1]
          };
          break;
        case 78:
          var L = /* @__PURE__ */ o.destructLink(e[t], e[t - 2]);
          this.$ = {
            type: L.type,
            stroke: L.stroke,
            length: L.length,
            text: e[t - 1],
            id: e[t - 3]
          };
          break;
        case 79:
          this.$ = {
            text: e[t],
            type: "text"
          };
          break;
        case 80:
          this.$ = {
            text: e[t - 1].text + "" + e[t],
            type: e[t - 1].type
          };
          break;
        case 81:
          this.$ = {
            text: e[t],
            type: "string"
          };
          break;
        case 82:
          this.$ = {
            text: e[t],
            type: "markdown"
          };
          break;
        case 83:
          var L = /* @__PURE__ */ o.destructLink(e[t]);
          this.$ = {
            type: L.type,
            stroke: L.stroke,
            length: L.length
          };
          break;
        case 84:
          var L = /* @__PURE__ */ o.destructLink(e[t]);
          this.$ = {
            type: L.type,
            stroke: L.stroke,
            length: L.length,
            id: e[t - 1]
          };
          break;
        case 85:
          this.$ = e[t - 1];
          break;
        case 86:
          this.$ = {
            text: e[t],
            type: "text"
          };
          break;
        case 87:
          this.$ = {
            text: e[t - 1].text + "" + e[t],
            type: e[t - 1].type
          };
          break;
        case 88:
          this.$ = {
            text: e[t],
            type: "string"
          };
          break;
        case 89:
        case 104:
          this.$ = {
            text: e[t],
            type: "markdown"
          };
          break;
        case 101:
          this.$ = {
            text: e[t],
            type: "text"
          };
          break;
        case 102:
          this.$ = {
            text: e[t - 1].text + "" + e[t],
            type: e[t - 1].type
          };
          break;
        case 103:
          this.$ = {
            text: e[t],
            type: "text"
          };
          break;
        case 105:
          this.$ = e[t - 4], o.addClass(e[t - 2], e[t]);
          break;
        case 106:
          this.$ = e[t - 4], o.setClass(e[t - 2], e[t]);
          break;
        case 107:
        case 115:
          this.$ = e[t - 1], o.setClickEvent(e[t - 1], e[t]);
          break;
        case 108:
        case 116:
          this.$ = e[t - 3], o.setClickEvent(e[t - 3], e[t - 2]), o.setTooltip(e[t - 3], e[t]);
          break;
        case 109:
          this.$ = e[t - 2], o.setClickEvent(e[t - 2], e[t - 1], e[t]);
          break;
        case 110:
          this.$ = e[t - 4], o.setClickEvent(e[t - 4], e[t - 3], e[t - 2]), o.setTooltip(e[t - 4], e[t]);
          break;
        case 111:
          this.$ = e[t - 2], o.setLink(e[t - 2], e[t]);
          break;
        case 112:
          this.$ = e[t - 4], o.setLink(e[t - 4], e[t - 2]), o.setTooltip(e[t - 4], e[t]);
          break;
        case 113:
          this.$ = e[t - 4], o.setLink(e[t - 4], e[t - 2], e[t]);
          break;
        case 114:
          this.$ = e[t - 6], o.setLink(e[t - 6], e[t - 4], e[t]), o.setTooltip(e[t - 6], e[t - 2]);
          break;
        case 117:
          this.$ = e[t - 1], o.setLink(e[t - 1], e[t]);
          break;
        case 118:
          this.$ = e[t - 3], o.setLink(e[t - 3], e[t - 2]), o.setTooltip(e[t - 3], e[t]);
          break;
        case 119:
          this.$ = e[t - 3], o.setLink(e[t - 3], e[t - 2], e[t]);
          break;
        case 120:
          this.$ = e[t - 5], o.setLink(e[t - 5], e[t - 4], e[t]), o.setTooltip(e[t - 5], e[t - 2]);
          break;
        case 121:
          this.$ = e[t - 4], o.addVertex(e[t - 2], void 0, void 0, e[t]);
          break;
        case 122:
          this.$ = e[t - 4], o.updateLink([
            e[t - 2]
          ], e[t]);
          break;
        case 123:
          this.$ = e[t - 4], o.updateLink(e[t - 2], e[t]);
          break;
        case 124:
          this.$ = e[t - 8], o.updateLinkInterpolate([
            e[t - 6]
          ], e[t - 2]), o.updateLink([
            e[t - 6]
          ], e[t]);
          break;
        case 125:
          this.$ = e[t - 8], o.updateLinkInterpolate(e[t - 6], e[t - 2]), o.updateLink(e[t - 6], e[t]);
          break;
        case 126:
          this.$ = e[t - 6], o.updateLinkInterpolate([
            e[t - 4]
          ], e[t]);
          break;
        case 127:
          this.$ = e[t - 6], o.updateLinkInterpolate(e[t - 4], e[t]);
          break;
        case 128:
        case 130:
          this.$ = [
            e[t]
          ];
          break;
        case 129:
        case 131:
          e[t - 2].push(e[t]), this.$ = e[t - 2];
          break;
        case 133:
          this.$ = e[t - 1] + e[t];
          break;
        case 181:
          this.$ = e[t];
          break;
        case 182:
          this.$ = e[t - 1] + "" + e[t];
          break;
        case 184:
          this.$ = e[t - 1] + "" + e[t];
          break;
        case 185:
          this.$ = {
            stmt: "dir",
            value: "TB"
          };
          break;
        case 186:
          this.$ = {
            stmt: "dir",
            value: "BT"
          };
          break;
        case 187:
          this.$ = {
            stmt: "dir",
            value: "RL"
          };
          break;
        case 188:
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
        9: i,
        10: r,
        12: n
      },
      {
        1: [
          3
        ]
      },
      /* @__PURE__ */ s(u, l, {
        5: 6
      }),
      {
        4: 7,
        9: i,
        10: r,
        12: n
      },
      {
        4: 8,
        9: i,
        10: r,
        12: n
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
        8: f,
        9: c,
        10: A,
        11: a,
        20: 17,
        22: 18,
        23: 19,
        24: 20,
        25: 21,
        26: 22,
        27: g,
        33: 24,
        34: w2,
        36: k,
        38: E,
        42: 28,
        43: 38,
        44: S2,
        45: 39,
        47: 40,
        60: m,
        84: J,
        85: ge,
        86: ke,
        87: Me,
        88: Oe,
        89: V2,
        102: v,
        105: I,
        106: N,
        109: R,
        111: G,
        113: 41,
        114: P,
        115: M,
        116: O,
        121: Ue,
        122: je,
        123: We,
        124: ze
      },
      /* @__PURE__ */ s(u, [
        2,
        9
      ]),
      /* @__PURE__ */ s(u, [
        2,
        10
      ]),
      /* @__PURE__ */ s(u, [
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
        10: de,
        15: 53,
        18: 56
      },
      /* @__PURE__ */ s(F, [
        2,
        3
      ]),
      /* @__PURE__ */ s(F, [
        2,
        4
      ]),
      /* @__PURE__ */ s(F, [
        2,
        5
      ]),
      /* @__PURE__ */ s(F, [
        2,
        6
      ]),
      /* @__PURE__ */ s(F, [
        2,
        7
      ]),
      /* @__PURE__ */ s(F, [
        2,
        8
      ]),
      {
        8: $2,
        9: ee,
        11: te,
        21: 58,
        41: 59,
        72: 63,
        75: [
          1,
          64
        ],
        77: [
          1,
          66
        ],
        78: [
          1,
          65
        ]
      },
      {
        8: $2,
        9: ee,
        11: te,
        21: 67
      },
      {
        8: $2,
        9: ee,
        11: te,
        21: 68
      },
      {
        8: $2,
        9: ee,
        11: te,
        21: 69
      },
      {
        8: $2,
        9: ee,
        11: te,
        21: 70
      },
      {
        8: $2,
        9: ee,
        11: te,
        21: 71
      },
      {
        8: $2,
        9: ee,
        10: [
          1,
          72
        ],
        11: te,
        21: 73
      },
      /* @__PURE__ */ s(F, [
        2,
        36
      ]),
      {
        35: [
          1,
          74
        ]
      },
      {
        37: [
          1,
          75
        ]
      },
      /* @__PURE__ */ s(F, [
        2,
        39
      ]),
      /* @__PURE__ */ s(De, [
        2,
        50
      ], {
        18: 76,
        39: 77,
        10: de,
        40: ot
      }),
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
        10: [
          1,
          82
        ]
      },
      {
        14: ye,
        44: xe,
        60: Se,
        80: [
          1,
          86
        ],
        89: Fe,
        95: [
          1,
          83
        ],
        97: [
          1,
          84
        ],
        101: 85,
        105: Te,
        106: Be,
        109: _e,
        111: we,
        114: Le,
        115: Ve,
        116: ve,
        120: 87
      },
      /* @__PURE__ */ s(F, [
        2,
        185
      ]),
      /* @__PURE__ */ s(F, [
        2,
        186
      ]),
      /* @__PURE__ */ s(F, [
        2,
        187
      ]),
      /* @__PURE__ */ s(F, [
        2,
        188
      ]),
      /* @__PURE__ */ s(Ae, [
        2,
        51
      ]),
      /* @__PURE__ */ s(Ae, [
        2,
        54
      ], {
        46: [
          1,
          99
        ]
      }),
      /* @__PURE__ */ s(j, [
        2,
        72
      ], {
        113: 112,
        29: [
          1,
          100
        ],
        44: S2,
        48: [
          1,
          101
        ],
        50: [
          1,
          102
        ],
        52: [
          1,
          103
        ],
        54: [
          1,
          104
        ],
        56: [
          1,
          105
        ],
        58: [
          1,
          106
        ],
        60: m,
        63: [
          1,
          107
        ],
        65: [
          1,
          108
        ],
        67: [
          1,
          109
        ],
        68: [
          1,
          110
        ],
        70: [
          1,
          111
        ],
        89: V2,
        102: v,
        105: I,
        106: N,
        109: R,
        111: G,
        114: P,
        115: M,
        116: O
      }),
      /* @__PURE__ */ s(Y, [
        2,
        181
      ]),
      /* @__PURE__ */ s(Y, [
        2,
        142
      ]),
      /* @__PURE__ */ s(Y, [
        2,
        143
      ]),
      /* @__PURE__ */ s(Y, [
        2,
        144
      ]),
      /* @__PURE__ */ s(Y, [
        2,
        145
      ]),
      /* @__PURE__ */ s(Y, [
        2,
        146
      ]),
      /* @__PURE__ */ s(Y, [
        2,
        147
      ]),
      /* @__PURE__ */ s(Y, [
        2,
        148
      ]),
      /* @__PURE__ */ s(Y, [
        2,
        149
      ]),
      /* @__PURE__ */ s(Y, [
        2,
        150
      ]),
      /* @__PURE__ */ s(Y, [
        2,
        151
      ]),
      /* @__PURE__ */ s(Y, [
        2,
        152
      ]),
      /* @__PURE__ */ s(u, [
        2,
        12
      ]),
      /* @__PURE__ */ s(u, [
        2,
        18
      ]),
      /* @__PURE__ */ s(u, [
        2,
        19
      ]),
      {
        9: [
          1,
          113
        ]
      },
      /* @__PURE__ */ s(lt, [
        2,
        26
      ], {
        18: 114,
        10: de
      }),
      /* @__PURE__ */ s(F, [
        2,
        27
      ]),
      {
        42: 115,
        43: 38,
        44: S2,
        45: 39,
        47: 40,
        60: m,
        89: V2,
        102: v,
        105: I,
        106: N,
        109: R,
        111: G,
        113: 41,
        114: P,
        115: M,
        116: O
      },
      /* @__PURE__ */ s(F, [
        2,
        40
      ]),
      /* @__PURE__ */ s(F, [
        2,
        41
      ]),
      /* @__PURE__ */ s(F, [
        2,
        42
      ]),
      /* @__PURE__ */ s(Ie2, [
        2,
        76
      ], {
        73: 116,
        62: [
          1,
          118
        ],
        74: [
          1,
          117
        ]
      }),
      {
        76: 119,
        79: 120,
        80: ct,
        81: ht,
        116: Ke,
        119: Ye2
      },
      {
        75: [
          1,
          125
        ],
        77: [
          1,
          126
        ]
      },
      /* @__PURE__ */ s(dt, [
        2,
        83
      ]),
      /* @__PURE__ */ s(F, [
        2,
        28
      ]),
      /* @__PURE__ */ s(F, [
        2,
        29
      ]),
      /* @__PURE__ */ s(F, [
        2,
        30
      ]),
      /* @__PURE__ */ s(F, [
        2,
        31
      ]),
      /* @__PURE__ */ s(F, [
        2,
        32
      ]),
      {
        10: pt,
        12: ft,
        14: bt,
        27: gt,
        28: 127,
        32: kt,
        44: At,
        60: mt,
        75: Et,
        80: [
          1,
          129
        ],
        81: [
          1,
          130
        ],
        83: 140,
        84: Ct,
        85: Dt,
        86: yt,
        87: xt,
        88: St,
        89: Ft,
        90: Tt,
        91: 128,
        105: Bt,
        109: _t,
        111: wt,
        114: Lt,
        115: Vt,
        116: vt
      },
      /* @__PURE__ */ s(Je, l, {
        5: 153
      }),
      /* @__PURE__ */ s(F, [
        2,
        37
      ]),
      /* @__PURE__ */ s(F, [
        2,
        38
      ]),
      /* @__PURE__ */ s(De, [
        2,
        48
      ], {
        44: It
      }),
      /* @__PURE__ */ s(De, [
        2,
        49
      ], {
        18: 155,
        10: de,
        40: Nt
      }),
      /* @__PURE__ */ s(Ae, [
        2,
        44
      ]),
      {
        44: S2,
        47: 157,
        60: m,
        89: V2,
        102: v,
        105: I,
        106: N,
        109: R,
        111: G,
        113: 41,
        114: P,
        115: M,
        116: O
      },
      {
        102: [
          1,
          158
        ],
        103: 159,
        105: [
          1,
          160
        ]
      },
      {
        44: S2,
        47: 161,
        60: m,
        89: V2,
        102: v,
        105: I,
        106: N,
        109: R,
        111: G,
        113: 41,
        114: P,
        115: M,
        116: O
      },
      {
        44: S2,
        47: 162,
        60: m,
        89: V2,
        102: v,
        105: I,
        106: N,
        109: R,
        111: G,
        113: 41,
        114: P,
        115: M,
        116: O
      },
      /* @__PURE__ */ s(_, [
        2,
        107
      ], {
        10: [
          1,
          163
        ],
        96: [
          1,
          164
        ]
      }),
      {
        80: [
          1,
          165
        ]
      },
      /* @__PURE__ */ s(_, [
        2,
        115
      ], {
        120: 167,
        10: [
          1,
          166
        ],
        14: ye,
        44: xe,
        60: Se,
        89: Fe,
        105: Te,
        106: Be,
        109: _e,
        111: we,
        114: Le,
        115: Ve,
        116: ve
      }),
      /* @__PURE__ */ s(_, [
        2,
        117
      ], {
        10: [
          1,
          168
        ]
      }),
      /* @__PURE__ */ s(H, [
        2,
        183
      ]),
      /* @__PURE__ */ s(H, [
        2,
        170
      ]),
      /* @__PURE__ */ s(H, [
        2,
        171
      ]),
      /* @__PURE__ */ s(H, [
        2,
        172
      ]),
      /* @__PURE__ */ s(H, [
        2,
        173
      ]),
      /* @__PURE__ */ s(H, [
        2,
        174
      ]),
      /* @__PURE__ */ s(H, [
        2,
        175
      ]),
      /* @__PURE__ */ s(H, [
        2,
        176
      ]),
      /* @__PURE__ */ s(H, [
        2,
        177
      ]),
      /* @__PURE__ */ s(H, [
        2,
        178
      ]),
      /* @__PURE__ */ s(H, [
        2,
        179
      ]),
      /* @__PURE__ */ s(H, [
        2,
        180
      ]),
      {
        44: S2,
        47: 169,
        60: m,
        89: V2,
        102: v,
        105: I,
        106: N,
        109: R,
        111: G,
        113: 41,
        114: P,
        115: M,
        116: O
      },
      {
        30: 170,
        67: C,
        80: W,
        81: z,
        82: 171,
        116: D,
        117: y,
        118: x
      },
      {
        30: 178,
        67: C,
        80: W,
        81: z,
        82: 171,
        116: D,
        117: y,
        118: x
      },
      {
        30: 180,
        50: [
          1,
          179
        ],
        67: C,
        80: W,
        81: z,
        82: 171,
        116: D,
        117: y,
        118: x
      },
      {
        30: 181,
        67: C,
        80: W,
        81: z,
        82: 171,
        116: D,
        117: y,
        118: x
      },
      {
        30: 182,
        67: C,
        80: W,
        81: z,
        82: 171,
        116: D,
        117: y,
        118: x
      },
      {
        30: 183,
        67: C,
        80: W,
        81: z,
        82: 171,
        116: D,
        117: y,
        118: x
      },
      {
        109: [
          1,
          184
        ]
      },
      {
        30: 185,
        67: C,
        80: W,
        81: z,
        82: 171,
        116: D,
        117: y,
        118: x
      },
      {
        30: 186,
        65: [
          1,
          187
        ],
        67: C,
        80: W,
        81: z,
        82: 171,
        116: D,
        117: y,
        118: x
      },
      {
        30: 188,
        67: C,
        80: W,
        81: z,
        82: 171,
        116: D,
        117: y,
        118: x
      },
      {
        30: 189,
        67: C,
        80: W,
        81: z,
        82: 171,
        116: D,
        117: y,
        118: x
      },
      {
        30: 190,
        67: C,
        80: W,
        81: z,
        82: 171,
        116: D,
        117: y,
        118: x
      },
      /* @__PURE__ */ s(Y, [
        2,
        182
      ]),
      /* @__PURE__ */ s(u, [
        2,
        20
      ]),
      /* @__PURE__ */ s(lt, [
        2,
        25
      ]),
      /* @__PURE__ */ s(De, [
        2,
        46
      ], {
        39: 191,
        18: 192,
        10: de,
        40: ot
      }),
      /* @__PURE__ */ s(Ie2, [
        2,
        73
      ], {
        10: [
          1,
          193
        ]
      }),
      {
        10: [
          1,
          194
        ]
      },
      {
        30: 195,
        67: C,
        80: W,
        81: z,
        82: 171,
        116: D,
        117: y,
        118: x
      },
      {
        77: [
          1,
          196
        ],
        79: 197,
        116: Ke,
        119: Ye2
      },
      /* @__PURE__ */ s(Ne, [
        2,
        79
      ]),
      /* @__PURE__ */ s(Ne, [
        2,
        81
      ]),
      /* @__PURE__ */ s(Ne, [
        2,
        82
      ]),
      /* @__PURE__ */ s(Ne, [
        2,
        168
      ]),
      /* @__PURE__ */ s(Ne, [
        2,
        169
      ]),
      {
        76: 198,
        79: 120,
        80: ct,
        81: ht,
        116: Ke,
        119: Ye2
      },
      /* @__PURE__ */ s(dt, [
        2,
        84
      ]),
      {
        8: $2,
        9: ee,
        10: pt,
        11: te,
        12: ft,
        14: bt,
        21: 200,
        27: gt,
        29: [
          1,
          199
        ],
        32: kt,
        44: At,
        60: mt,
        75: Et,
        83: 140,
        84: Ct,
        85: Dt,
        86: yt,
        87: xt,
        88: St,
        89: Ft,
        90: Tt,
        91: 201,
        105: Bt,
        109: _t,
        111: wt,
        114: Lt,
        115: Vt,
        116: vt
      },
      /* @__PURE__ */ s(T, [
        2,
        101
      ]),
      /* @__PURE__ */ s(T, [
        2,
        103
      ]),
      /* @__PURE__ */ s(T, [
        2,
        104
      ]),
      /* @__PURE__ */ s(T, [
        2,
        157
      ]),
      /* @__PURE__ */ s(T, [
        2,
        158
      ]),
      /* @__PURE__ */ s(T, [
        2,
        159
      ]),
      /* @__PURE__ */ s(T, [
        2,
        160
      ]),
      /* @__PURE__ */ s(T, [
        2,
        161
      ]),
      /* @__PURE__ */ s(T, [
        2,
        162
      ]),
      /* @__PURE__ */ s(T, [
        2,
        163
      ]),
      /* @__PURE__ */ s(T, [
        2,
        164
      ]),
      /* @__PURE__ */ s(T, [
        2,
        165
      ]),
      /* @__PURE__ */ s(T, [
        2,
        166
      ]),
      /* @__PURE__ */ s(T, [
        2,
        167
      ]),
      /* @__PURE__ */ s(T, [
        2,
        90
      ]),
      /* @__PURE__ */ s(T, [
        2,
        91
      ]),
      /* @__PURE__ */ s(T, [
        2,
        92
      ]),
      /* @__PURE__ */ s(T, [
        2,
        93
      ]),
      /* @__PURE__ */ s(T, [
        2,
        94
      ]),
      /* @__PURE__ */ s(T, [
        2,
        95
      ]),
      /* @__PURE__ */ s(T, [
        2,
        96
      ]),
      /* @__PURE__ */ s(T, [
        2,
        97
      ]),
      /* @__PURE__ */ s(T, [
        2,
        98
      ]),
      /* @__PURE__ */ s(T, [
        2,
        99
      ]),
      /* @__PURE__ */ s(T, [
        2,
        100
      ]),
      {
        6: 11,
        7: 12,
        8: f,
        9: c,
        10: A,
        11: a,
        20: 17,
        22: 18,
        23: 19,
        24: 20,
        25: 21,
        26: 22,
        27: g,
        32: [
          1,
          202
        ],
        33: 24,
        34: w2,
        36: k,
        38: E,
        42: 28,
        43: 38,
        44: S2,
        45: 39,
        47: 40,
        60: m,
        84: J,
        85: ge,
        86: ke,
        87: Me,
        88: Oe,
        89: V2,
        102: v,
        105: I,
        106: N,
        109: R,
        111: G,
        113: 41,
        114: P,
        115: M,
        116: O,
        121: Ue,
        122: je,
        123: We,
        124: ze
      },
      {
        10: de,
        18: 203
      },
      {
        44: [
          1,
          204
        ]
      },
      /* @__PURE__ */ s(Ae, [
        2,
        43
      ]),
      {
        10: [
          1,
          205
        ],
        44: S2,
        60: m,
        89: V2,
        102: v,
        105: I,
        106: N,
        109: R,
        111: G,
        113: 112,
        114: P,
        115: M,
        116: O
      },
      {
        10: [
          1,
          206
        ]
      },
      {
        10: [
          1,
          207
        ],
        106: [
          1,
          208
        ]
      },
      /* @__PURE__ */ s(Rt, [
        2,
        128
      ]),
      {
        10: [
          1,
          209
        ],
        44: S2,
        60: m,
        89: V2,
        102: v,
        105: I,
        106: N,
        109: R,
        111: G,
        113: 112,
        114: P,
        115: M,
        116: O
      },
      {
        10: [
          1,
          210
        ],
        44: S2,
        60: m,
        89: V2,
        102: v,
        105: I,
        106: N,
        109: R,
        111: G,
        113: 112,
        114: P,
        115: M,
        116: O
      },
      {
        80: [
          1,
          211
        ]
      },
      /* @__PURE__ */ s(_, [
        2,
        109
      ], {
        10: [
          1,
          212
        ]
      }),
      /* @__PURE__ */ s(_, [
        2,
        111
      ], {
        10: [
          1,
          213
        ]
      }),
      {
        80: [
          1,
          214
        ]
      },
      /* @__PURE__ */ s(H, [
        2,
        184
      ]),
      {
        80: [
          1,
          215
        ],
        98: [
          1,
          216
        ]
      },
      /* @__PURE__ */ s(Ae, [
        2,
        55
      ], {
        113: 112,
        44: S2,
        60: m,
        89: V2,
        102: v,
        105: I,
        106: N,
        109: R,
        111: G,
        114: P,
        115: M,
        116: O
      }),
      {
        31: [
          1,
          217
        ],
        67: C,
        82: 218,
        116: D,
        117: y,
        118: x
      },
      /* @__PURE__ */ s(pe, [
        2,
        86
      ]),
      /* @__PURE__ */ s(pe, [
        2,
        88
      ]),
      /* @__PURE__ */ s(pe, [
        2,
        89
      ]),
      /* @__PURE__ */ s(pe, [
        2,
        153
      ]),
      /* @__PURE__ */ s(pe, [
        2,
        154
      ]),
      /* @__PURE__ */ s(pe, [
        2,
        155
      ]),
      /* @__PURE__ */ s(pe, [
        2,
        156
      ]),
      {
        49: [
          1,
          219
        ],
        67: C,
        82: 218,
        116: D,
        117: y,
        118: x
      },
      {
        30: 220,
        67: C,
        80: W,
        81: z,
        82: 171,
        116: D,
        117: y,
        118: x
      },
      {
        51: [
          1,
          221
        ],
        67: C,
        82: 218,
        116: D,
        117: y,
        118: x
      },
      {
        53: [
          1,
          222
        ],
        67: C,
        82: 218,
        116: D,
        117: y,
        118: x
      },
      {
        55: [
          1,
          223
        ],
        67: C,
        82: 218,
        116: D,
        117: y,
        118: x
      },
      {
        57: [
          1,
          224
        ],
        67: C,
        82: 218,
        116: D,
        117: y,
        118: x
      },
      {
        60: [
          1,
          225
        ]
      },
      {
        64: [
          1,
          226
        ],
        67: C,
        82: 218,
        116: D,
        117: y,
        118: x
      },
      {
        66: [
          1,
          227
        ],
        67: C,
        82: 218,
        116: D,
        117: y,
        118: x
      },
      {
        30: 228,
        67: C,
        80: W,
        81: z,
        82: 171,
        116: D,
        117: y,
        118: x
      },
      {
        31: [
          1,
          229
        ],
        67: C,
        82: 218,
        116: D,
        117: y,
        118: x
      },
      {
        67: C,
        69: [
          1,
          230
        ],
        71: [
          1,
          231
        ],
        82: 218,
        116: D,
        117: y,
        118: x
      },
      {
        67: C,
        69: [
          1,
          233
        ],
        71: [
          1,
          232
        ],
        82: 218,
        116: D,
        117: y,
        118: x
      },
      /* @__PURE__ */ s(De, [
        2,
        45
      ], {
        18: 155,
        10: de,
        40: Nt
      }),
      /* @__PURE__ */ s(De, [
        2,
        47
      ], {
        44: It
      }),
      /* @__PURE__ */ s(Ie2, [
        2,
        75
      ]),
      /* @__PURE__ */ s(Ie2, [
        2,
        74
      ]),
      {
        62: [
          1,
          234
        ],
        67: C,
        82: 218,
        116: D,
        117: y,
        118: x
      },
      /* @__PURE__ */ s(Ie2, [
        2,
        77
      ]),
      /* @__PURE__ */ s(Ne, [
        2,
        80
      ]),
      {
        77: [
          1,
          235
        ],
        79: 197,
        116: Ke,
        119: Ye2
      },
      {
        30: 236,
        67: C,
        80: W,
        81: z,
        82: 171,
        116: D,
        117: y,
        118: x
      },
      /* @__PURE__ */ s(Je, l, {
        5: 237
      }),
      /* @__PURE__ */ s(T, [
        2,
        102
      ]),
      /* @__PURE__ */ s(F, [
        2,
        35
      ]),
      {
        43: 238,
        44: S2,
        45: 39,
        47: 40,
        60: m,
        89: V2,
        102: v,
        105: I,
        106: N,
        109: R,
        111: G,
        113: 41,
        114: P,
        115: M,
        116: O
      },
      {
        10: de,
        18: 239
      },
      {
        10: se2,
        60: ie,
        84: re,
        92: 240,
        105: ne,
        107: 241,
        108: 242,
        109: ae,
        110: ue,
        111: oe,
        112: le
      },
      {
        10: se2,
        60: ie,
        84: re,
        92: 251,
        104: [
          1,
          252
        ],
        105: ne,
        107: 241,
        108: 242,
        109: ae,
        110: ue,
        111: oe,
        112: le
      },
      {
        10: se2,
        60: ie,
        84: re,
        92: 253,
        104: [
          1,
          254
        ],
        105: ne,
        107: 241,
        108: 242,
        109: ae,
        110: ue,
        111: oe,
        112: le
      },
      {
        105: [
          1,
          255
        ]
      },
      {
        10: se2,
        60: ie,
        84: re,
        92: 256,
        105: ne,
        107: 241,
        108: 242,
        109: ae,
        110: ue,
        111: oe,
        112: le
      },
      {
        44: S2,
        47: 257,
        60: m,
        89: V2,
        102: v,
        105: I,
        106: N,
        109: R,
        111: G,
        113: 41,
        114: P,
        115: M,
        116: O
      },
      /* @__PURE__ */ s(_, [
        2,
        108
      ]),
      {
        80: [
          1,
          258
        ]
      },
      {
        80: [
          1,
          259
        ],
        98: [
          1,
          260
        ]
      },
      /* @__PURE__ */ s(_, [
        2,
        116
      ]),
      /* @__PURE__ */ s(_, [
        2,
        118
      ], {
        10: [
          1,
          261
        ]
      }),
      /* @__PURE__ */ s(_, [
        2,
        119
      ]),
      /* @__PURE__ */ s(j, [
        2,
        56
      ]),
      /* @__PURE__ */ s(pe, [
        2,
        87
      ]),
      /* @__PURE__ */ s(j, [
        2,
        57
      ]),
      {
        51: [
          1,
          262
        ],
        67: C,
        82: 218,
        116: D,
        117: y,
        118: x
      },
      /* @__PURE__ */ s(j, [
        2,
        64
      ]),
      /* @__PURE__ */ s(j, [
        2,
        59
      ]),
      /* @__PURE__ */ s(j, [
        2,
        60
      ]),
      /* @__PURE__ */ s(j, [
        2,
        61
      ]),
      {
        109: [
          1,
          263
        ]
      },
      /* @__PURE__ */ s(j, [
        2,
        63
      ]),
      /* @__PURE__ */ s(j, [
        2,
        65
      ]),
      {
        66: [
          1,
          264
        ],
        67: C,
        82: 218,
        116: D,
        117: y,
        118: x
      },
      /* @__PURE__ */ s(j, [
        2,
        67
      ]),
      /* @__PURE__ */ s(j, [
        2,
        68
      ]),
      /* @__PURE__ */ s(j, [
        2,
        70
      ]),
      /* @__PURE__ */ s(j, [
        2,
        69
      ]),
      /* @__PURE__ */ s(j, [
        2,
        71
      ]),
      /* @__PURE__ */ s([
        10,
        44,
        60,
        89,
        102,
        105,
        106,
        109,
        111,
        114,
        115,
        116
      ], [
        2,
        85
      ]),
      /* @__PURE__ */ s(Ie2, [
        2,
        78
      ]),
      {
        31: [
          1,
          265
        ],
        67: C,
        82: 218,
        116: D,
        117: y,
        118: x
      },
      {
        6: 11,
        7: 12,
        8: f,
        9: c,
        10: A,
        11: a,
        20: 17,
        22: 18,
        23: 19,
        24: 20,
        25: 21,
        26: 22,
        27: g,
        32: [
          1,
          266
        ],
        33: 24,
        34: w2,
        36: k,
        38: E,
        42: 28,
        43: 38,
        44: S2,
        45: 39,
        47: 40,
        60: m,
        84: J,
        85: ge,
        86: ke,
        87: Me,
        88: Oe,
        89: V2,
        102: v,
        105: I,
        106: N,
        109: R,
        111: G,
        113: 41,
        114: P,
        115: M,
        116: O,
        121: Ue,
        122: je,
        123: We,
        124: ze
      },
      /* @__PURE__ */ s(Ae, [
        2,
        53
      ]),
      {
        43: 267,
        44: S2,
        45: 39,
        47: 40,
        60: m,
        89: V2,
        102: v,
        105: I,
        106: N,
        109: R,
        111: G,
        113: 41,
        114: P,
        115: M,
        116: O
      },
      /* @__PURE__ */ s(_, [
        2,
        121
      ], {
        106: Re
      }),
      /* @__PURE__ */ s(Gt, [
        2,
        130
      ], {
        108: 269,
        10: se2,
        60: ie,
        84: re,
        105: ne,
        109: ae,
        110: ue,
        111: oe,
        112: le
      }),
      /* @__PURE__ */ s(Z, [
        2,
        132
      ]),
      /* @__PURE__ */ s(Z, [
        2,
        134
      ]),
      /* @__PURE__ */ s(Z, [
        2,
        135
      ]),
      /* @__PURE__ */ s(Z, [
        2,
        136
      ]),
      /* @__PURE__ */ s(Z, [
        2,
        137
      ]),
      /* @__PURE__ */ s(Z, [
        2,
        138
      ]),
      /* @__PURE__ */ s(Z, [
        2,
        139
      ]),
      /* @__PURE__ */ s(Z, [
        2,
        140
      ]),
      /* @__PURE__ */ s(Z, [
        2,
        141
      ]),
      /* @__PURE__ */ s(_, [
        2,
        122
      ], {
        106: Re
      }),
      {
        10: [
          1,
          270
        ]
      },
      /* @__PURE__ */ s(_, [
        2,
        123
      ], {
        106: Re
      }),
      {
        10: [
          1,
          271
        ]
      },
      /* @__PURE__ */ s(Rt, [
        2,
        129
      ]),
      /* @__PURE__ */ s(_, [
        2,
        105
      ], {
        106: Re
      }),
      /* @__PURE__ */ s(_, [
        2,
        106
      ], {
        113: 112,
        44: S2,
        60: m,
        89: V2,
        102: v,
        105: I,
        106: N,
        109: R,
        111: G,
        114: P,
        115: M,
        116: O
      }),
      /* @__PURE__ */ s(_, [
        2,
        110
      ]),
      /* @__PURE__ */ s(_, [
        2,
        112
      ], {
        10: [
          1,
          272
        ]
      }),
      /* @__PURE__ */ s(_, [
        2,
        113
      ]),
      {
        98: [
          1,
          273
        ]
      },
      {
        51: [
          1,
          274
        ]
      },
      {
        62: [
          1,
          275
        ]
      },
      {
        66: [
          1,
          276
        ]
      },
      {
        8: $2,
        9: ee,
        11: te,
        21: 277
      },
      /* @__PURE__ */ s(F, [
        2,
        34
      ]),
      /* @__PURE__ */ s(Ae, [
        2,
        52
      ]),
      {
        10: se2,
        60: ie,
        84: re,
        105: ne,
        107: 278,
        108: 242,
        109: ae,
        110: ue,
        111: oe,
        112: le
      },
      /* @__PURE__ */ s(Z, [
        2,
        133
      ]),
      {
        14: ye,
        44: xe,
        60: Se,
        89: Fe,
        101: 279,
        105: Te,
        106: Be,
        109: _e,
        111: we,
        114: Le,
        115: Ve,
        116: ve,
        120: 87
      },
      {
        14: ye,
        44: xe,
        60: Se,
        89: Fe,
        101: 280,
        105: Te,
        106: Be,
        109: _e,
        111: we,
        114: Le,
        115: Ve,
        116: ve,
        120: 87
      },
      {
        98: [
          1,
          281
        ]
      },
      /* @__PURE__ */ s(_, [
        2,
        120
      ]),
      /* @__PURE__ */ s(j, [
        2,
        58
      ]),
      {
        30: 282,
        67: C,
        80: W,
        81: z,
        82: 171,
        116: D,
        117: y,
        118: x
      },
      /* @__PURE__ */ s(j, [
        2,
        66
      ]),
      /* @__PURE__ */ s(Je, l, {
        5: 283
      }),
      /* @__PURE__ */ s(Gt, [
        2,
        131
      ], {
        108: 269,
        10: se2,
        60: ie,
        84: re,
        105: ne,
        109: ae,
        110: ue,
        111: oe,
        112: le
      }),
      /* @__PURE__ */ s(_, [
        2,
        126
      ], {
        120: 167,
        10: [
          1,
          284
        ],
        14: ye,
        44: xe,
        60: Se,
        89: Fe,
        105: Te,
        106: Be,
        109: _e,
        111: we,
        114: Le,
        115: Ve,
        116: ve
      }),
      /* @__PURE__ */ s(_, [
        2,
        127
      ], {
        120: 167,
        10: [
          1,
          285
        ],
        14: ye,
        44: xe,
        60: Se,
        89: Fe,
        105: Te,
        106: Be,
        109: _e,
        111: we,
        114: Le,
        115: Ve,
        116: ve
      }),
      /* @__PURE__ */ s(_, [
        2,
        114
      ]),
      {
        31: [
          1,
          286
        ],
        67: C,
        82: 218,
        116: D,
        117: y,
        118: x
      },
      {
        6: 11,
        7: 12,
        8: f,
        9: c,
        10: A,
        11: a,
        20: 17,
        22: 18,
        23: 19,
        24: 20,
        25: 21,
        26: 22,
        27: g,
        32: [
          1,
          287
        ],
        33: 24,
        34: w2,
        36: k,
        38: E,
        42: 28,
        43: 38,
        44: S2,
        45: 39,
        47: 40,
        60: m,
        84: J,
        85: ge,
        86: ke,
        87: Me,
        88: Oe,
        89: V2,
        102: v,
        105: I,
        106: N,
        109: R,
        111: G,
        113: 41,
        114: P,
        115: M,
        116: O,
        121: Ue,
        122: je,
        123: We,
        124: ze
      },
      {
        10: se2,
        60: ie,
        84: re,
        92: 288,
        105: ne,
        107: 241,
        108: 242,
        109: ae,
        110: ue,
        111: oe,
        112: le
      },
      {
        10: se2,
        60: ie,
        84: re,
        92: 289,
        105: ne,
        107: 241,
        108: 242,
        109: ae,
        110: ue,
        111: oe,
        112: le
      },
      /* @__PURE__ */ s(j, [
        2,
        62
      ]),
      /* @__PURE__ */ s(F, [
        2,
        33
      ]),
      /* @__PURE__ */ s(_, [
        2,
        124
      ], {
        106: Re
      }),
      /* @__PURE__ */ s(_, [
        2,
        125
      ], {
        106: Re
      })
    ],
    defaultActions: {},
    parseError: /* @__PURE__ */ m$1(function(h, d) {
      if (d.recoverable) this.trace(h);
      else {
        var p = new Error(h);
        throw p.hash = d, p;
      }
    }, "parseError"),
    parse: /* @__PURE__ */ m$1(function(h) {
      var d = this, p = [
        0
      ], o = [], B = [
        null
      ], e = [], me = this.table, t = "", L = 0, Pt = 0, Mt = 0, h1 = 2, Ot = 1, d1 = /* @__PURE__ */ e.slice.call(arguments, 1), U = /* @__PURE__ */ Object.create(this.lexer), Ee = {
        yy: {}
      };
      for (var et in this.yy) Object.prototype.hasOwnProperty.call(this.yy, et) && (Ee.yy[et] = this.yy[et]);
      U.setInput(h, Ee.yy), Ee.yy.lexer = U, Ee.yy.parser = this, typeof U.yylloc > "u" && (U.yylloc = {});
      var tt2 = U.yylloc;
      e.push(tt2);
      var p1 = U.options && U.options.ranges;
      typeof Ee.yy.parseError == "function" ? this.parseError = Ee.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function E1(X) {
        p.length = p.length - 2 * X, B.length = B.length - X, e.length = e.length - X;
      }
      m$1(E1, "popStack");
      function f1() {
        var X;
        return X = o.pop() || U.lex() || Ot, typeof X != "number" && (X instanceof Array && (o = X, X = /* @__PURE__ */ o.pop()), X = d.symbols_[X] || X), X;
      }
      m$1(f1, "lex");
      for (var K, st, Ce, q, C1, it, Ge = {}, He, ce, Ut, Xe; ; ) {
        if (Ce = p[p.length - 1], this.defaultActions[Ce] ? q = this.defaultActions[Ce] : ((K === null || typeof K > "u") && (K = /* @__PURE__ */ f1()), q = me[Ce] && me[Ce][K]), typeof q > "u" || !q.length || !q[0]) {
          var rt = "";
          Xe = [];
          for (He in me[Ce]) this.terminals_[He] && He > h1 && Xe.push("'" + this.terminals_[He] + "'");
          U.showPosition ? rt = "Parse error on line " + (L + 1) + `:
` + U.showPosition() + `
Expecting ` + Xe.join(", ") + ", got '" + (this.terminals_[K] || K) + "'" : rt = "Parse error on line " + (L + 1) + ": Unexpected " + (K == Ot ? "end of input" : "'" + (this.terminals_[K] || K) + "'"), this.parseError(rt, {
            text: U.match,
            token: this.terminals_[K] || K,
            line: U.yylineno,
            loc: tt2,
            expected: Xe
          });
        }
        if (q[0] instanceof Array && q.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + Ce + ", token: " + K);
        switch (q[0]) {
          case 1:
            p.push(K), B.push(U.yytext), e.push(U.yylloc), p.push(q[1]), K = null, st ? (K = st, st = null) : (Pt = U.yyleng, t = U.yytext, L = U.yylineno, tt2 = U.yylloc, Mt > 0);
            break;
          case 2:
            if (ce = this.productions_[q[1]][1], Ge.$ = B[B.length - ce], Ge._$ = {
              first_line: e[e.length - (ce || 1)].first_line,
              last_line: e[e.length - 1].last_line,
              first_column: e[e.length - (ce || 1)].first_column,
              last_column: e[e.length - 1].last_column
            }, p1 && (Ge._$.range = [
              e[e.length - (ce || 1)].range[0],
              e[e.length - 1].range[1]
            ]), it = /* @__PURE__ */ this.performAction.apply(Ge, /* @__PURE__ */ [
              t,
              Pt,
              L,
              Ee.yy,
              q[1],
              B,
              e
            ].concat(d1)), typeof it < "u") return it;
            ce && (p = /* @__PURE__ */ p.slice(0, -1 * ce * 2), B = /* @__PURE__ */ B.slice(0, -1 * ce), e = /* @__PURE__ */ e.slice(0, -1 * ce)), p.push(this.productions_[q[1]][0]), B.push(Ge.$), e.push(Ge._$), Ut = me[p[p.length - 2]][p[p.length - 1]], p.push(Ut);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }, "parse")
  }, c1 = /* @__PURE__ */ function() {
    var fe = {
      EOF: 1,
      parseError: /* @__PURE__ */ m$1(function(d, p) {
        if (this.yy.parser) this.yy.parser.parseError(d, p);
        else throw new Error(d);
      }, "parseError"),
      setInput: /* @__PURE__ */ m$1(function(h, d) {
        return this.yy = d || this.yy || {}, this._input = h, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = [
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
        var h = this._input[0];
        this.yytext += h, this.yyleng++, this.offset++, this.match += h, this.matched += h;
        var d = /* @__PURE__ */ h.match(/(?:\r\n?|\n).*/g);
        return d ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = /* @__PURE__ */ this._input.slice(1), h;
      }, "input"),
      unput: /* @__PURE__ */ m$1(function(h) {
        var d = h.length, p = /* @__PURE__ */ h.split(/(?:\r\n?|\n)/g);
        this._input = h + this._input, this.yytext = /* @__PURE__ */ this.yytext.substr(0, this.yytext.length - d), this.offset -= d;
        var o = /* @__PURE__ */ this.match.split(/(?:\r\n?|\n)/g);
        this.match = /* @__PURE__ */ this.match.substr(0, this.match.length - 1), this.matched = /* @__PURE__ */ this.matched.substr(0, this.matched.length - 1), p.length - 1 && (this.yylineno -= p.length - 1);
        var B = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: p ? (p.length === o.length ? this.yylloc.first_column : 0) + o[o.length - p.length].length - p[0].length : this.yylloc.first_column - d
        }, this.options.ranges && (this.yylloc.range = [
          B[0],
          B[0] + this.yyleng - d
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
      less: /* @__PURE__ */ m$1(function(h) {
        this.unput(/* @__PURE__ */ this.match.slice(h));
      }, "less"),
      pastInput: /* @__PURE__ */ m$1(function() {
        var h = /* @__PURE__ */ this.matched.substr(0, this.matched.length - this.match.length);
        return (h.length > 20 ? "..." : "") + h.substr(-20).replace(/\n/g, "");
      }, "pastInput"),
      upcomingInput: /* @__PURE__ */ m$1(function() {
        var h = this.match;
        return h.length < 20 && (h += /* @__PURE__ */ this._input.substr(0, 20 - h.length)), (h.substr(0, 20) + (h.length > 20 ? "..." : "")).replace(/\n/g, "");
      }, "upcomingInput"),
      showPosition: /* @__PURE__ */ m$1(function() {
        var h = /* @__PURE__ */ this.pastInput(), d = /* @__PURE__ */ new Array(h.length + 1).join("-");
        return h + this.upcomingInput() + `
` + d + "^";
      }, "showPosition"),
      test_match: /* @__PURE__ */ m$1(function(h, d) {
        var p, o, B;
        if (this.options.backtrack_lexer && (B = {
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
        }, this.options.ranges && (B.yylloc.range = /* @__PURE__ */ this.yylloc.range.slice(0))), o = /* @__PURE__ */ h[0].match(/(?:\r\n?|\n).*/g), o && (this.yylineno += o.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: o ? o[o.length - 1].length - o[o.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + h[0].length
        }, this.yytext += h[0], this.match += h[0], this.matches = h, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [
          this.offset,
          this.offset += this.yyleng
        ]), this._more = false, this._backtrack = false, this._input = /* @__PURE__ */ this._input.slice(h[0].length), this.matched += h[0], p = /* @__PURE__ */ this.performAction.call(this, this.yy, this, d, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), p) return p;
        if (this._backtrack) {
          for (var e in B) this[e] = B[e];
          return false;
        }
        return false;
      }, "test_match"),
      next: /* @__PURE__ */ m$1(function() {
        if (this.done) return this.EOF;
        this._input || (this.done = true);
        var h, d, p, o;
        this._more || (this.yytext = "", this.match = "");
        for (var B = /* @__PURE__ */ this._currentRules(), e = 0; e < B.length; e++) if (p = /* @__PURE__ */ this._input.match(this.rules[B[e]]), p && (!d || p[0].length > d[0].length)) {
          if (d = p, o = e, this.options.backtrack_lexer) {
            if (h = /* @__PURE__ */ this.test_match(p, B[e]), h !== false) return h;
            if (this._backtrack) {
              d = false;
              continue;
            } else return false;
          } else if (!this.options.flex) break;
        }
        return d ? (h = /* @__PURE__ */ this.test_match(d, B[o]), h !== false ? h : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
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
      performAction: /* @__PURE__ */ m$1(function(d, p, o, B) {
        switch (o) {
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
            let me = /\n\s*/g;
            return p.yytext = /* @__PURE__ */ p.yytext.replace(me, "<br/>"), 40;
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
            return 95;
          case 17:
            this.popState();
            break;
          case 18:
            return 96;
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
            return 84;
          case 26:
            return 102;
          case 27:
            return 85;
          case 28:
            return 104;
          case 29:
            return 86;
          case 30:
            return 87;
          case 31:
            return 97;
          case 32:
            this.begin("click");
            break;
          case 33:
            this.popState();
            break;
          case 34:
            return 88;
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
            return 98;
          case 41:
            return 98;
          case 42:
            return 98;
          case 43:
            return 98;
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
            return 121;
          case 56:
            return 122;
          case 57:
            return 123;
          case 58:
            return 124;
          case 59:
            return 78;
          case 60:
            return 105;
          case 61:
            return 111;
          case 62:
            return 46;
          case 63:
            return 60;
          case 64:
            return 44;
          case 65:
            return 8;
          case 66:
            return 106;
          case 67:
            return 115;
          case 68:
            return this.popState(), 77;
          case 69:
            return this.pushState("edgeText"), 75;
          case 70:
            return 119;
          case 71:
            return this.popState(), 77;
          case 72:
            return this.pushState("thickEdgeText"), 75;
          case 73:
            return 119;
          case 74:
            return this.popState(), 77;
          case 75:
            return this.pushState("dottedEdgeText"), 75;
          case 76:
            return 119;
          case 77:
            return 77;
          case 78:
            return this.popState(), 53;
          case 79:
            return "TEXT";
          case 80:
            return this.pushState("ellipseText"), 52;
          case 81:
            return this.popState(), 55;
          case 82:
            return this.pushState("text"), 54;
          case 83:
            return this.popState(), 57;
          case 84:
            return this.pushState("text"), 56;
          case 85:
            return 58;
          case 86:
            return this.pushState("text"), 67;
          case 87:
            return this.popState(), 64;
          case 88:
            return this.pushState("text"), 63;
          case 89:
            return this.popState(), 49;
          case 90:
            return this.pushState("text"), 48;
          case 91:
            return this.popState(), 69;
          case 92:
            return this.popState(), 71;
          case 93:
            return 117;
          case 94:
            return this.pushState("trapText"), 68;
          case 95:
            return this.pushState("trapText"), 70;
          case 96:
            return 118;
          case 97:
            return 67;
          case 98:
            return 90;
          case 99:
            return "SEP";
          case 100:
            return 89;
          case 101:
            return 115;
          case 102:
            return 111;
          case 103:
            return 44;
          case 104:
            return 109;
          case 105:
            return 114;
          case 106:
            return 116;
          case 107:
            return this.popState(), 62;
          case 108:
            return this.pushState("text"), 62;
          case 109:
            return this.popState(), 51;
          case 110:
            return this.pushState("text"), 50;
          case 111:
            return this.popState(), 31;
          case 112:
            return this.pushState("text"), 29;
          case 113:
            return this.popState(), 66;
          case 114:
            return this.pushState("text"), 65;
          case 115:
            return "TEXT";
          case 116:
            return "QUOTE";
          case 117:
            return 9;
          case 118:
            return 10;
          case 119:
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
        /^(?:[^\s\"]+@(?=[^\{\"]))/,
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
            77,
            80,
            82,
            84,
            88,
            90,
            94,
            95,
            108,
            110,
            112,
            114
          ],
          inclusive: false
        },
        shapeDataStr: {
          rules: [
            9,
            10,
            21,
            24,
            77,
            80,
            82,
            84,
            88,
            90,
            94,
            95,
            108,
            110,
            112,
            114
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
            77,
            80,
            82,
            84,
            88,
            90,
            94,
            95,
            108,
            110,
            112,
            114
          ],
          inclusive: false
        },
        callbackargs: {
          rules: [
            17,
            18,
            21,
            24,
            77,
            80,
            82,
            84,
            88,
            90,
            94,
            95,
            108,
            110,
            112,
            114
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
            77,
            80,
            82,
            84,
            88,
            90,
            94,
            95,
            108,
            110,
            112,
            114
          ],
          inclusive: false
        },
        href: {
          rules: [
            21,
            24,
            77,
            80,
            82,
            84,
            88,
            90,
            94,
            95,
            108,
            110,
            112,
            114
          ],
          inclusive: false
        },
        click: {
          rules: [
            21,
            24,
            33,
            34,
            77,
            80,
            82,
            84,
            88,
            90,
            94,
            95,
            108,
            110,
            112,
            114
          ],
          inclusive: false
        },
        dottedEdgeText: {
          rules: [
            21,
            24,
            74,
            76,
            77,
            80,
            82,
            84,
            88,
            90,
            94,
            95,
            108,
            110,
            112,
            114
          ],
          inclusive: false
        },
        thickEdgeText: {
          rules: [
            21,
            24,
            71,
            73,
            77,
            80,
            82,
            84,
            88,
            90,
            94,
            95,
            108,
            110,
            112,
            114
          ],
          inclusive: false
        },
        edgeText: {
          rules: [
            21,
            24,
            68,
            70,
            77,
            80,
            82,
            84,
            88,
            90,
            94,
            95,
            108,
            110,
            112,
            114
          ],
          inclusive: false
        },
        trapText: {
          rules: [
            21,
            24,
            77,
            80,
            82,
            84,
            88,
            90,
            91,
            92,
            93,
            94,
            95,
            108,
            110,
            112,
            114
          ],
          inclusive: false
        },
        ellipseText: {
          rules: [
            21,
            24,
            77,
            78,
            79,
            80,
            82,
            84,
            88,
            90,
            94,
            95,
            108,
            110,
            112,
            114
          ],
          inclusive: false
        },
        text: {
          rules: [
            21,
            24,
            77,
            80,
            81,
            82,
            83,
            84,
            87,
            88,
            89,
            90,
            94,
            95,
            107,
            108,
            109,
            110,
            111,
            112,
            113,
            114,
            115
          ],
          inclusive: false
        },
        vertex: {
          rules: [
            21,
            24,
            77,
            80,
            82,
            84,
            88,
            90,
            94,
            95,
            108,
            110,
            112,
            114
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
            77,
            80,
            82,
            84,
            88,
            90,
            94,
            95,
            108,
            110,
            112,
            114
          ],
          inclusive: false
        },
        acc_descr_multiline: {
          rules: [
            5,
            6,
            21,
            24,
            77,
            80,
            82,
            84,
            88,
            90,
            94,
            95,
            108,
            110,
            112,
            114
          ],
          inclusive: false
        },
        acc_descr: {
          rules: [
            3,
            21,
            24,
            77,
            80,
            82,
            84,
            88,
            90,
            94,
            95,
            108,
            110,
            112,
            114
          ],
          inclusive: false
        },
        acc_title: {
          rules: [
            1,
            21,
            24,
            77,
            80,
            82,
            84,
            88,
            90,
            94,
            95,
            108,
            110,
            112,
            114
          ],
          inclusive: false
        },
        md_string: {
          rules: [
            19,
            20,
            21,
            24,
            77,
            80,
            82,
            84,
            88,
            90,
            94,
            95,
            108,
            110,
            112,
            114
          ],
          inclusive: false
        },
        string: {
          rules: [
            21,
            22,
            23,
            24,
            77,
            80,
            82,
            84,
            88,
            90,
            94,
            95,
            108,
            110,
            112,
            114
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
            69,
            71,
            72,
            74,
            75,
            77,
            80,
            82,
            84,
            85,
            86,
            88,
            90,
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
            106,
            108,
            110,
            112,
            114,
            116,
            117,
            118,
            119
          ],
          inclusive: true
        }
      }
    };
    return fe;
  }();
  Ze.lexer = c1;
  function $e() {
    this.yy = {};
  }
  return m$1($e, "Parser"), $e.prototype = Ze, Ze.Parser = $e, new $e();
}();
at.parser = at;
var ut = at;
var u1 = /* @__PURE__ */ Object.assign({}, ut);
u1.parse = (s) => {
  let i = /* @__PURE__ */ s.replace(/}\s*\n/g, `}
`);
  return ut.parse(i);
};
var o1 = u1;
var A1 = /* @__PURE__ */ m$1((s, i) => {
  let r = Su, n = /* @__PURE__ */ r(s, "r"), u = /* @__PURE__ */ r(s, "g"), l = /* @__PURE__ */ r(s, "b");
  return se(n, u, l, i);
}, "fade"), m1 = /* @__PURE__ */ m$1((s) => `.label {
    font-family: ${s.fontFamily};
    color: ${s.nodeTextColor || s.textColor};
  }
  .cluster-label text {
    fill: ${s.titleColor};
  }
  .cluster-label span {
    color: ${s.titleColor};
  }
  .cluster-label span p {
    background-color: transparent;
  }

  .label text,span {
    fill: ${s.nodeTextColor || s.textColor};
    color: ${s.nodeTextColor || s.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${s.mainBkg};
    stroke: ${s.nodeBorder};
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
    fill: ${s.lineColor} !important;
    stroke-width: 0;
    stroke: ${s.lineColor};
  }

  .arrowheadPath {
    fill: ${s.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${s.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${s.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${s.edgeLabelBackground};
    p {
      background-color: ${s.edgeLabelBackground};
    }
    rect {
      opacity: 0.5;
      background-color: ${s.edgeLabelBackground};
      fill: ${s.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${A1(s.edgeLabelBackground, 0.5)};
    // background-color:
  }

  .cluster rect {
    fill: ${s.clusterBkg};
    stroke: ${s.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${s.titleColor};
  }

  .cluster span {
    color: ${s.titleColor};
  }
  /* .cluster div {
    color: ${s.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${s.fontFamily};
    font-size: 12px;
    background: ${s.tertiaryColor};
    border: 1px solid ${s.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${s.textColor};
  }

  rect.text {
    fill: none;
    stroke-width: 0;
  }

  .icon-shape, .image-shape {
    background-color: ${s.edgeLabelBackground};
    p {
      background-color: ${s.edgeLabelBackground};
      padding: 2px;
    }
    rect {
      opacity: 0.5;
      background-color: ${s.edgeLabelBackground};
      fill: ${s.edgeLabelBackground};
    }
    text-align: center;
  }
`, "getStyles"), l1 = m1;
var $1 = {
  parser: o1,
  get db() {
    return new Qe();
  },
  renderer: a1,
  styles: l1,
  init: /* @__PURE__ */ m$1((s) => {
    s.flowchart || (s.flowchart = {}), s.layout && IC({
      layout: s.layout
    }), s.flowchart.arrowMarkerAbsolute = s.arrowMarkerAbsolute, IC({
      flowchart: {
        arrowMarkerAbsolute: s.arrowMarkerAbsolute
      }
    });
  }, "init")
};
export {
  $1 as diagram
};
