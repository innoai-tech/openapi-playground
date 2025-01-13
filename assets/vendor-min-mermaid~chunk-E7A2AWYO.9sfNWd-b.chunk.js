var __typeError = (msg) => {
  throw TypeError(msg);
};
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var _a, __, _b, __2, _c, __3, _d, __4, _e2, __5, _f, __6, _g, __7, _h, __8, _i, __9, _j, __10;
import { n } from "./vendor-min-mermaid~chunk-LM6QDVU5.BV2Ps5xm.chunk.js";
import { S as St$1 } from "./vendor-min-mermaid~chunk-D4BOYBYT.DSjM26Cl.chunk.js";
import { Z as Zt$1 } from "./vendor-min-mermaid~chunk-AFC6EC46.CY61scRQ.chunk.js";
import { J as Je$1, X as Xe$1, S, M as M$1 } from "./vendor-min-mermaid~chunk-UENA7NWE.a12nwn0g.chunk.js";
import { u as uf, W as Wl, D as De$1, r as rh, t as tt$1, d as dl, R as Rl, g as gf$1, m as mC, E as Er, M as Mf } from "./vendor-min-mermaid~chunk-OR2G2HG5.BWDWUMki.chunk.js";
import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js";
var T = /* @__PURE__ */ m$1(async (n2, t, o) => {
  var _a2, _b2;
  let r, s = t.useHtmlLabels || uf((_a2 = Wl()) == null ? void 0 : _a2.htmlLabels);
  o ? r = o : r = "node default";
  let a = /* @__PURE__ */ n2.insert("g").attr("class", r).attr("id", t.domId || t.id), c = /* @__PURE__ */ a.insert("g").attr("class", "label").attr("style", /* @__PURE__ */ Je$1(t.labelStyle)), e;
  t.label === void 0 ? e = "" : e = typeof t.label == "string" ? t.label : t.label[0];
  let h = await Zt$1(c, /* @__PURE__ */ De$1(/* @__PURE__ */ Xe$1(e), /* @__PURE__ */ Wl()), {
    useHtmlLabels: s,
    width: t.width || ((_b2 = Wl().flowchart) == null ? void 0 : _b2.wrappingWidth),
    cssClasses: "markdown-node-label",
    style: t.labelStyle,
    addSvgBackground: !!t.icon || !!t.img
  }), i = /* @__PURE__ */ h.getBBox(), l = ((t == null ? void 0 : t.padding) ?? 0) / 2;
  if (s) {
    let p = h.children[0], f = /* @__PURE__ */ rh(h), m = /* @__PURE__ */ p.getElementsByTagName("img");
    if (m) {
      let g = e.replace(/<img[^>]*>/g, "").trim() === "";
      await Promise.all(/* @__PURE__ */ [
        ...m
      ].map((d) => new Promise((x) => {
        function y() {
          if (d.style.display = "flex", d.style.flexDirection = "column", g) {
            let b = Wl().fontSize ? Wl().fontSize : window.getComputedStyle(document.body).fontSize, S$1 = 5, [$ = dl.fontSize] = S(b), w = $ * S$1 + "px";
            d.style.minWidth = w, d.style.maxWidth = w;
          } else d.style.width = "100%";
          x(d);
        }
        m$1(y, "setupImage"), setTimeout(() => {
          d.complete && y();
        }), d.addEventListener("error", y), d.addEventListener("load", y);
      })));
    }
    i = /* @__PURE__ */ p.getBoundingClientRect(), f.attr("width", i.width), f.attr("height", i.height);
  }
  return s ? c.attr("transform", "translate(" + -i.width / 2 + ", " + -i.height / 2 + ")") : c.attr("transform", "translate(0, " + -i.height / 2 + ")"), t.centerLabel && c.attr("transform", "translate(" + -i.width / 2 + ", " + -i.height / 2 + ")"), c.insert("rect", ":first-child"), {
    shapeSvg: a,
    bbox: i,
    halfPadding: l,
    label: c
  };
}, "labelHelper"), Dt = /* @__PURE__ */ m$1(async (n2, t, o) => {
  var _a2, _b2, _c2, _d2, _e3, _f2;
  let r = o.useHtmlLabels || uf((_b2 = (_a2 = Wl()) == null ? void 0 : _a2.flowchart) == null ? void 0 : _b2.htmlLabels), s = /* @__PURE__ */ n2.insert("g").attr("class", "label").attr("style", o.labelStyle || ""), a = await Zt$1(s, /* @__PURE__ */ De$1(/* @__PURE__ */ Xe$1(t), /* @__PURE__ */ Wl()), {
    useHtmlLabels: r,
    width: o.width || ((_d2 = (_c2 = Wl()) == null ? void 0 : _c2.flowchart) == null ? void 0 : _d2.wrappingWidth),
    style: o.labelStyle,
    addSvgBackground: !!o.icon || !!o.img
  }), c = /* @__PURE__ */ a.getBBox(), e = o.padding / 2;
  if (uf((_f2 = (_e3 = Wl()) == null ? void 0 : _e3.flowchart) == null ? void 0 : _f2.htmlLabels)) {
    let h = a.children[0], i = /* @__PURE__ */ rh(a);
    c = /* @__PURE__ */ h.getBoundingClientRect(), i.attr("width", c.width), i.attr("height", c.height);
  }
  return r ? s.attr("transform", "translate(" + -c.width / 2 + ", " + -c.height / 2 + ")") : s.attr("transform", "translate(0, " + -c.height / 2 + ")"), o.centerLabel && s.attr("transform", "translate(" + -c.width / 2 + ", " + -c.height / 2 + ")"), s.insert("rect", ":first-child"), {
    shapeSvg: n2,
    bbox: c,
    halfPadding: e,
    label: s
  };
}, "insertLabel"), v = /* @__PURE__ */ m$1((n2, t) => {
  let o = /* @__PURE__ */ t.node().getBBox();
  n2.width = o.width, n2.height = o.height;
}, "updateNodeBounds");
var P = /* @__PURE__ */ m$1((n2, t) => (n2.look === "handDrawn" ? "rough-node" : "node") + " " + n2.cssClasses + " " + (t || ""), "getNodeClasses");
function H(n2) {
  let t = /* @__PURE__ */ n2.map((o, r) => `${r === 0 ? "M" : "L"}${o.x},${o.y}`);
  return t.push("Z"), t.join(" ");
}
m$1(H, "createPathFromPoints");
function st(n2, t, o, r, s, a) {
  let c = [], h = o - n2, i = r - t, l = h / a, p = 2 * Math.PI / l, f = t + i / 2;
  for (let m = 0; m <= 50; m++) {
    let g = m / 50, d = n2 + g * h, x = f + s * Math.sin(p * (d - n2));
    c.push({
      x: d,
      y: x
    });
  }
  return c;
}
m$1(st, "generateFullSineWavePoints");
function Mt(n2, t, o, r, s, a) {
  let c = [], e = s * Math.PI / 180, l = (a * Math.PI / 180 - e) / (r - 1);
  for (let p = 0; p < r; p++) {
    let f = e + p * l, m = n2 + o * Math.cos(f), g = t + o * Math.sin(f);
    c.push({
      x: -m,
      y: -g
    });
  }
  return c;
}
m$1(Mt, "generateCirclePoints");
function Ht(n2, t, o) {
  if (n2 && n2.length) {
    let [r, s] = t, a = Math.PI / 180 * o, c = /* @__PURE__ */ Math.cos(a), e = /* @__PURE__ */ Math.sin(a);
    for (let h of n2) {
      let [i, l] = h;
      h[0] = (i - r) * c - (l - s) * e + r, h[1] = (i - r) * e + (l - s) * c + s;
    }
  }
}
m$1(Ht, "t");
function Os(n2, t) {
  return n2[0] === t[0] && n2[1] === t[1];
}
m$1(Os, "e");
function Ls(n2, t, o) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
  let s = o, a = /* @__PURE__ */ Math.max(t, 0.1), c = n2[0] && n2[0][0] && typeof n2[0][0] == "number" ? [
    n2
  ] : n2, e = [
    0,
    0
  ];
  if (s) for (let i of c) Ht(i, e, s);
  let h = /* @__PURE__ */ function(i, l, p) {
    let f = [];
    for (let b of i) {
      let S2 = [
        ...b
      ];
      Os(S2[0], S2[S2.length - 1]) || S2.push([
        S2[0][0],
        S2[0][1]
      ]), S2.length > 2 && f.push(S2);
    }
    let m = [];
    l = /* @__PURE__ */ Math.max(l, 0.1);
    let g = [];
    for (let b of f) for (let S2 = 0; S2 < b.length - 1; S2++) {
      let $ = b[S2], w = b[S2 + 1];
      if ($[1] !== w[1]) {
        let C = /* @__PURE__ */ Math.min($[1], w[1]);
        g.push({
          ymin: C,
          ymax: /* @__PURE__ */ Math.max($[1], w[1]),
          x: C === $[1] ? $[0] : w[0],
          islope: (w[0] - $[0]) / (w[1] - $[1])
        });
      }
    }
    if (g.sort((b, S2) => b.ymin < S2.ymin ? -1 : b.ymin > S2.ymin ? 1 : b.x < S2.x ? -1 : b.x > S2.x ? 1 : b.ymax === S2.ymax ? 0 : (b.ymax - S2.ymax) / Math.abs(b.ymax - S2.ymax)), !g.length) return m;
    let d = [], x = g[0].ymin, y = 0;
    for (; d.length || g.length; ) {
      if (g.length) {
        let b = -1;
        for (let S2 = 0; S2 < g.length && !(g[S2].ymin > x); S2++) b = S2;
        g.splice(0, b + 1).forEach((S2) => {
          d.push({
            s: x,
            edge: S2
          });
        });
      }
      if (d = /* @__PURE__ */ d.filter((b) => !(b.edge.ymax <= x)), d.sort((b, S2) => b.edge.x === S2.edge.x ? 0 : (b.edge.x - S2.edge.x) / Math.abs(b.edge.x - S2.edge.x)), (p !== 1 || y % l == 0) && d.length > 1) for (let b = 0; b < d.length; b += 2) {
        let S2 = b + 1;
        if (S2 >= d.length) break;
        let $ = d[b].edge, w = d[S2].edge;
        m.push([
          [
            /* @__PURE__ */ Math.round($.x),
            x
          ],
          [
            /* @__PURE__ */ Math.round(w.x),
            x
          ]
        ]);
      }
      x += p, d.forEach((b) => {
        b.edge.x = b.edge.x + p * b.edge.islope;
      }), y++;
    }
    return m;
  }(c, a, r);
  if (s) {
    for (let i of c) Ht(i, e, -s);
    (function(i, l, p) {
      let f = [];
      i.forEach((m) => f.push(...m)), Ht(f, l, p);
    })(h, e, -s);
  }
  return h;
}
m$1(Ls, "s");
function bt(n2, t) {
  var o;
  let r = t.hachureAngle + 90, s = t.hachureGap;
  s < 0 && (s = 4 * t.strokeWidth), s = /* @__PURE__ */ Math.round(/* @__PURE__ */ Math.max(s, 0.1));
  let a = 1;
  return t.roughness >= 1 && (((o = t.randomizer) === null || o === void 0 ? void 0 : o.next()) || Math.random()) > 0.7 && (a = s), Ls(n2, s, r, a || 1);
}
m$1(bt, "n");
var xt = (_a = class {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, o) {
    return this._fillPolygons(t, o);
  }
  _fillPolygons(t, o) {
    let r = /* @__PURE__ */ bt(t, o);
    return {
      type: "fillSketch",
      ops: /* @__PURE__ */ this.renderLines(r, o)
    };
  }
  renderLines(t, o) {
    let r = [];
    for (let s of t) r.push(.../* @__PURE__ */ this.helper.doubleLineOps(s[0][0], s[0][1], s[1][0], s[1][1], o));
    return r;
  }
}, __ = new WeakMap(), __privateAdd(_a, __, m$1(_a, "o")), _a);
function Gt(n2) {
  let t = n2[0], o = n2[1];
  return Math.sqrt(Math.pow(t[0] - o[0], 2) + Math.pow(t[1] - o[1], 2));
}
m$1(Gt, "a");
var _t = (_b = class extends xt {
  fillPolygons(t, o) {
    let r = o.hachureGap;
    r < 0 && (r = 4 * o.strokeWidth), r = /* @__PURE__ */ Math.max(r, 0.1);
    let s = /* @__PURE__ */ bt(t, /* @__PURE__ */ Object.assign({}, o, {
      hachureGap: r
    })), a = Math.PI / 180 * o.hachureAngle, c = [], e = 0.5 * r * Math.cos(a), h = 0.5 * r * Math.sin(a);
    for (let [i, l] of s) Gt([
      i,
      l
    ]) && c.push([
      [
        i[0] - e,
        i[1] + h
      ],
      [
        ...l
      ]
    ], [
      [
        i[0] + e,
        i[1] - h
      ],
      [
        ...l
      ]
    ]);
    return {
      type: "fillSketch",
      ops: /* @__PURE__ */ this.renderLines(c, o)
    };
  }
}, __2 = new WeakMap(), __privateAdd(_b, __2, m$1(_b, "h")), _b), zt = (_c = class extends xt {
  fillPolygons(t, o) {
    let r = /* @__PURE__ */ this._fillPolygons(t, o), s = /* @__PURE__ */ Object.assign({}, o, {
      hachureAngle: o.hachureAngle + 90
    }), a = /* @__PURE__ */ this._fillPolygons(t, s);
    return r.ops = /* @__PURE__ */ r.ops.concat(a.ops), r;
  }
}, __3 = new WeakMap(), __privateAdd(_c, __3, m$1(_c, "r")), _c), qt = (_d = class {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, o) {
    let r = /* @__PURE__ */ bt(t, o = /* @__PURE__ */ Object.assign({}, o, {
      hachureAngle: 0
    }));
    return this.dotsOnLines(r, o);
  }
  dotsOnLines(t, o) {
    let r = [], s = o.hachureGap;
    s < 0 && (s = 4 * o.strokeWidth), s = /* @__PURE__ */ Math.max(s, 0.1);
    let a = o.fillWeight;
    a < 0 && (a = o.strokeWidth / 2);
    let c = s / 4;
    for (let e of t) {
      let h = /* @__PURE__ */ Gt(e), i = h / s, l = Math.ceil(i) - 1, p = h - l * s, f = (e[0][0] + e[1][0]) / 2 - s / 4, m = /* @__PURE__ */ Math.min(e[0][1], e[1][1]);
      for (let g = 0; g < l; g++) {
        let d = m + p + g * s, x = f - c + 2 * Math.random() * c, y = d - c + 2 * Math.random() * c, b = /* @__PURE__ */ this.helper.ellipse(x, y, a, a, o);
        r.push(...b.ops);
      }
    }
    return {
      type: "fillSketch",
      ops: r
    };
  }
}, __4 = new WeakMap(), __privateAdd(_d, __4, m$1(_d, "i")), _d), Xt = (_e2 = class {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, o) {
    let r = /* @__PURE__ */ bt(t, o);
    return {
      type: "fillSketch",
      ops: /* @__PURE__ */ this.dashedLine(r, o)
    };
  }
  dashedLine(t, o) {
    let r = o.dashOffset < 0 ? o.hachureGap < 0 ? 4 * o.strokeWidth : o.hachureGap : o.dashOffset, s = o.dashGap < 0 ? o.hachureGap < 0 ? 4 * o.strokeWidth : o.hachureGap : o.dashGap, a = [];
    return t.forEach((c) => {
      let e = /* @__PURE__ */ Gt(c), h = /* @__PURE__ */ Math.floor(e / (r + s)), i = (e + s - h * (r + s)) / 2, l = c[0], p = c[1];
      l[0] > p[0] && (l = c[1], p = c[0]);
      let f = /* @__PURE__ */ Math.atan((p[1] - l[1]) / (p[0] - l[0]));
      for (let m = 0; m < h; m++) {
        let g = m * (r + s), d = g + r, x = [
          l[0] + g * Math.cos(f) + i * Math.cos(f),
          l[1] + g * Math.sin(f) + i * Math.sin(f)
        ], y = [
          l[0] + d * Math.cos(f) + i * Math.cos(f),
          l[1] + d * Math.sin(f) + i * Math.sin(f)
        ];
        a.push(.../* @__PURE__ */ this.helper.doubleLineOps(x[0], x[1], y[0], y[1], o));
      }
    }), a;
  }
}, __5 = new WeakMap(), __privateAdd(_e2, __5, m$1(_e2, "c")), _e2), Yt = (_f = class {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, o) {
    let r = o.hachureGap < 0 ? 4 * o.strokeWidth : o.hachureGap, s = o.zigzagOffset < 0 ? r : o.zigzagOffset, a = /* @__PURE__ */ bt(t, o = /* @__PURE__ */ Object.assign({}, o, {
      hachureGap: r + s
    }));
    return {
      type: "fillSketch",
      ops: /* @__PURE__ */ this.zigzagLines(a, s, o)
    };
  }
  zigzagLines(t, o, r) {
    let s = [];
    return t.forEach((a) => {
      let c = /* @__PURE__ */ Gt(a), e = /* @__PURE__ */ Math.round(c / (2 * o)), h = a[0], i = a[1];
      h[0] > i[0] && (h = a[1], i = a[0]);
      let l = /* @__PURE__ */ Math.atan((i[1] - h[1]) / (i[0] - h[0]));
      for (let p = 0; p < e; p++) {
        let f = 2 * p * o, m = 2 * (p + 1) * o, g = /* @__PURE__ */ Math.sqrt(2 * Math.pow(o, 2)), d = [
          h[0] + f * Math.cos(l),
          h[1] + f * Math.sin(l)
        ], x = [
          h[0] + m * Math.cos(l),
          h[1] + m * Math.sin(l)
        ], y = [
          d[0] + g * Math.cos(l + Math.PI / 4),
          d[1] + g * Math.sin(l + Math.PI / 4)
        ];
        s.push(.../* @__PURE__ */ this.helper.doubleLineOps(d[0], d[1], y[0], y[1], r), .../* @__PURE__ */ this.helper.doubleLineOps(y[0], y[1], x[0], x[1], r));
      }
    }), s;
  }
}, __6 = new WeakMap(), __privateAdd(_f, __6, m$1(_f, "l")), _f), tt = {}, Zt = (_g = class {
  constructor(t) {
    this.seed = t;
  }
  next() {
    return this.seed ? (2 ** 31 - 1 & (this.seed = /* @__PURE__ */ Math.imul(48271, this.seed))) / 2 ** 31 : Math.random();
  }
}, __7 = new WeakMap(), __privateAdd(_g, __7, m$1(_g, "p")), _g), Hs = 0, Vt = 1, ce = 2, vt = {
  A: 7,
  a: 7,
  C: 6,
  c: 6,
  H: 1,
  h: 1,
  L: 2,
  l: 2,
  M: 2,
  m: 2,
  Q: 4,
  q: 4,
  S: 4,
  s: 4,
  T: 2,
  t: 2,
  V: 1,
  v: 1,
  Z: 0,
  z: 0
};
function Wt(n2, t) {
  return n2.type === t;
}
m$1(Wt, "k");
function ee(n2) {
  let t = [], o = /* @__PURE__ */ function(c) {
    let e = new Array();
    for (; c !== ""; ) if (c.match(/^([ \t\r\n,]+)/)) c = /* @__PURE__ */ c.substr(RegExp.$1.length);
    else if (c.match(/^([aAcChHlLmMqQsStTvVzZ])/)) e[e.length] = {
      type: Hs,
      text: RegExp.$1
    }, c = /* @__PURE__ */ c.substr(RegExp.$1.length);
    else {
      if (!c.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/)) return [];
      e[e.length] = {
        type: Vt,
        text: `${parseFloat(RegExp.$1)}`
      }, c = /* @__PURE__ */ c.substr(RegExp.$1.length);
    }
    return e[e.length] = {
      type: ce,
      text: ""
    }, e;
  }(n2), r = "BOD", s = 0, a = o[s];
  for (; !Wt(a, ce); ) {
    let c = 0, e = [];
    if (r === "BOD") {
      if (a.text !== "M" && a.text !== "m") return ee("M0,0" + n2);
      s++, c = vt[a.text], r = a.text;
    } else Wt(a, Vt) ? c = vt[r] : (s++, c = vt[a.text], r = a.text);
    if (!(s + c < o.length)) throw new Error("Path data ended short");
    for (let h = s; h < s + c; h++) {
      let i = o[h];
      if (!Wt(i, Vt)) throw new Error("Param not a number: " + r + "," + i.text);
      e[e.length] = +i.text;
    }
    if (typeof vt[r] != "number") throw new Error("Bad segment: " + r);
    {
      let h = {
        key: r,
        data: e
      };
      t.push(h), s += c, a = o[s], r === "M" && (r = "L"), r === "m" && (r = "l");
    }
  }
  return t;
}
m$1(ee, "b");
function ye(n2) {
  let t = 0, o = 0, r = 0, s = 0, a = [];
  for (let { key: c, data: e } of n2) switch (c) {
    case "M":
      a.push({
        key: "M",
        data: [
          ...e
        ]
      }), [t, o] = e, [r, s] = e;
      break;
    case "m":
      t += e[0], o += e[1], a.push({
        key: "M",
        data: [
          t,
          o
        ]
      }), r = t, s = o;
      break;
    case "L":
      a.push({
        key: "L",
        data: [
          ...e
        ]
      }), [t, o] = e;
      break;
    case "l":
      t += e[0], o += e[1], a.push({
        key: "L",
        data: [
          t,
          o
        ]
      });
      break;
    case "C":
      a.push({
        key: "C",
        data: [
          ...e
        ]
      }), t = e[4], o = e[5];
      break;
    case "c": {
      let h = /* @__PURE__ */ e.map((i, l) => l % 2 ? i + o : i + t);
      a.push({
        key: "C",
        data: h
      }), t = h[4], o = h[5];
      break;
    }
    case "Q":
      a.push({
        key: "Q",
        data: [
          ...e
        ]
      }), t = e[2], o = e[3];
      break;
    case "q": {
      let h = /* @__PURE__ */ e.map((i, l) => l % 2 ? i + o : i + t);
      a.push({
        key: "Q",
        data: h
      }), t = h[2], o = h[3];
      break;
    }
    case "A":
      a.push({
        key: "A",
        data: [
          ...e
        ]
      }), t = e[5], o = e[6];
      break;
    case "a":
      t += e[5], o += e[6], a.push({
        key: "A",
        data: [
          e[0],
          e[1],
          e[2],
          e[3],
          e[4],
          t,
          o
        ]
      });
      break;
    case "H":
      a.push({
        key: "H",
        data: [
          ...e
        ]
      }), t = e[0];
      break;
    case "h":
      t += e[0], a.push({
        key: "H",
        data: [
          t
        ]
      });
      break;
    case "V":
      a.push({
        key: "V",
        data: [
          ...e
        ]
      }), o = e[0];
      break;
    case "v":
      o += e[0], a.push({
        key: "V",
        data: [
          o
        ]
      });
      break;
    case "S":
      a.push({
        key: "S",
        data: [
          ...e
        ]
      }), t = e[2], o = e[3];
      break;
    case "s": {
      let h = /* @__PURE__ */ e.map((i, l) => l % 2 ? i + o : i + t);
      a.push({
        key: "S",
        data: h
      }), t = h[2], o = h[3];
      break;
    }
    case "T":
      a.push({
        key: "T",
        data: [
          ...e
        ]
      }), t = e[0], o = e[1];
      break;
    case "t":
      t += e[0], o += e[1], a.push({
        key: "T",
        data: [
          t,
          o
        ]
      });
      break;
    case "Z":
    case "z":
      a.push({
        key: "Z",
        data: []
      }), t = r, o = s;
  }
  return a;
}
m$1(ye, "y");
function xe(n2) {
  let t = [], o = "", r = 0, s = 0, a = 0, c = 0, e = 0, h = 0;
  for (let { key: i, data: l } of n2) {
    switch (i) {
      case "M":
        t.push({
          key: "M",
          data: [
            ...l
          ]
        }), [r, s] = l, [a, c] = l;
        break;
      case "C":
        t.push({
          key: "C",
          data: [
            ...l
          ]
        }), r = l[4], s = l[5], e = l[2], h = l[3];
        break;
      case "L":
        t.push({
          key: "L",
          data: [
            ...l
          ]
        }), [r, s] = l;
        break;
      case "H":
        r = l[0], t.push({
          key: "L",
          data: [
            r,
            s
          ]
        });
        break;
      case "V":
        s = l[0], t.push({
          key: "L",
          data: [
            r,
            s
          ]
        });
        break;
      case "S": {
        let p = 0, f = 0;
        o === "C" || o === "S" ? (p = r + (r - e), f = s + (s - h)) : (p = r, f = s), t.push({
          key: "C",
          data: [
            p,
            f,
            ...l
          ]
        }), e = l[0], h = l[1], r = l[2], s = l[3];
        break;
      }
      case "T": {
        let [p, f] = l, m = 0, g = 0;
        o === "Q" || o === "T" ? (m = r + (r - e), g = s + (s - h)) : (m = r, g = s);
        let d = r + 2 * (m - r) / 3, x = s + 2 * (g - s) / 3, y = p + 2 * (m - p) / 3, b = f + 2 * (g - f) / 3;
        t.push({
          key: "C",
          data: [
            d,
            x,
            y,
            b,
            p,
            f
          ]
        }), e = m, h = g, r = p, s = f;
        break;
      }
      case "Q": {
        let [p, f, m, g] = l, d = r + 2 * (p - r) / 3, x = s + 2 * (f - s) / 3, y = m + 2 * (p - m) / 3, b = g + 2 * (f - g) / 3;
        t.push({
          key: "C",
          data: [
            d,
            x,
            y,
            b,
            m,
            g
          ]
        }), e = p, h = f, r = m, s = g;
        break;
      }
      case "A": {
        let p = /* @__PURE__ */ Math.abs(l[0]), f = /* @__PURE__ */ Math.abs(l[1]), m = l[2], g = l[3], d = l[4], x = l[5], y = l[6];
        p === 0 || f === 0 ? (t.push({
          key: "C",
          data: [
            r,
            s,
            x,
            y,
            x,
            y
          ]
        }), r = x, s = y) : (r !== x || s !== y) && (be(r, s, x, y, p, f, m, g, d).forEach(function(b) {
          t.push({
            key: "C",
            data: b
          });
        }), r = x, s = y);
        break;
      }
      case "Z":
        t.push({
          key: "Z",
          data: []
        }), r = a, s = c;
    }
    o = i;
  }
  return t;
}
m$1(xe, "m");
function ut(n2, t, o) {
  return [
    n2 * Math.cos(o) - t * Math.sin(o),
    n2 * Math.sin(o) + t * Math.cos(o)
  ];
}
m$1(ut, "w");
function be(n2, t, o, r, s, a, c, e, h, i) {
  let l = (p = c, Math.PI * p / 180);
  var p;
  let f = [], m = 0, g = 0, d = 0, x = 0;
  if (i) [m, g, d, x] = i;
  else {
    [n2, t] = /* @__PURE__ */ ut(n2, t, -l), [o, r] = /* @__PURE__ */ ut(o, r, -l);
    let G = (n2 - o) / 2, L = (t - r) / 2, V = G * G / (s * s) + L * L / (a * a);
    V > 1 && (V = /* @__PURE__ */ Math.sqrt(V), s *= V, a *= V);
    let E = s * s, I = a * a, _ = E * I - E * L * L - I * G * G, U = E * L * L + I * G * G, rt = (e === h ? -1 : 1) * Math.sqrt(/* @__PURE__ */ Math.abs(_ / U));
    d = rt * s * L / a + (n2 + o) / 2, x = rt * -a * G / s + (t + r) / 2, m = /* @__PURE__ */ Math.asin(/* @__PURE__ */ parseFloat(/* @__PURE__ */ ((t - x) / a).toFixed(9))), g = /* @__PURE__ */ Math.asin(/* @__PURE__ */ parseFloat(/* @__PURE__ */ ((r - x) / a).toFixed(9))), n2 < d && (m = Math.PI - m), o < d && (g = Math.PI - g), m < 0 && (m = 2 * Math.PI + m), g < 0 && (g = 2 * Math.PI + g), h && m > g && (m -= 2 * Math.PI), !h && g > m && (g -= 2 * Math.PI);
  }
  let y = g - m;
  if (Math.abs(y) > 120 * Math.PI / 180) {
    let G = g, L = o, V = r;
    g = h && g > m ? m + 120 * Math.PI / 180 * 1 : m + 120 * Math.PI / 180 * -1, f = /* @__PURE__ */ be(o = d + s * Math.cos(g), r = x + a * Math.sin(g), L, V, s, a, c, 0, h, [
      g,
      G,
      d,
      x
    ]);
  }
  y = g - m;
  let b = /* @__PURE__ */ Math.cos(m), S2 = /* @__PURE__ */ Math.sin(m), $ = /* @__PURE__ */ Math.cos(g), w = /* @__PURE__ */ Math.sin(g), C = /* @__PURE__ */ Math.tan(y / 4), B = 4 / 3 * s * C, R = 4 / 3 * a * C, j = [
    n2,
    t
  ], A = [
    n2 + B * S2,
    t - R * b
  ], O = [
    o + B * w,
    r - R * $
  ], W = [
    o,
    r
  ];
  if (A[0] = 2 * j[0] - A[0], A[1] = 2 * j[1] - A[1], i) return [
    A,
    O,
    W
  ].concat(f);
  {
    f = /* @__PURE__ */ [
      A,
      O,
      W
    ].concat(f);
    let G = [];
    for (let L = 0; L < f.length; L += 3) {
      let V = /* @__PURE__ */ ut(f[L][0], f[L][1], l), E = /* @__PURE__ */ ut(f[L + 1][0], f[L + 1][1], l), I = /* @__PURE__ */ ut(f[L + 2][0], f[L + 2][1], l);
      G.push([
        V[0],
        V[1],
        E[0],
        E[1],
        I[0],
        I[1]
      ]);
    }
    return G;
  }
}
m$1(be, "x");
var Vs = {
  randOffset: /* @__PURE__ */ m$1(function(n2, t) {
    return F(n2, t);
  }, "randOffset"),
  randOffsetWithRange: /* @__PURE__ */ m$1(function(n2, t, o) {
    return Ct(n2, t, o);
  }, "randOffsetWithRange"),
  ellipse: /* @__PURE__ */ m$1(function(n2, t, o, r, s) {
    let a = /* @__PURE__ */ we(o, r, s);
    return Ut(n2, t, s, a).opset;
  }, "ellipse"),
  doubleLineOps: /* @__PURE__ */ m$1(function(n2, t, o, r, s) {
    return nt(n2, t, o, r, s, true);
  }, "doubleLineOps")
};
function Se(n2, t, o, r, s) {
  return {
    type: "path",
    ops: /* @__PURE__ */ nt(n2, t, o, r, s)
  };
}
m$1(Se, "v");
function Pt(n2, t, o) {
  let r = (n2 || []).length;
  if (r > 2) {
    let s = [];
    for (let a = 0; a < r - 1; a++) s.push(.../* @__PURE__ */ nt(n2[a][0], n2[a][1], n2[a + 1][0], n2[a + 1][1], o));
    return t && s.push(.../* @__PURE__ */ nt(n2[r - 1][0], n2[r - 1][1], n2[0][0], n2[0][1], o)), {
      type: "path",
      ops: s
    };
  }
  return r === 2 ? Se(n2[0][0], n2[0][1], n2[1][0], n2[1][1], o) : {
    type: "path",
    ops: []
  };
}
m$1(Pt, "S");
function Ws(n2, t, o, r, s) {
  return function(a, c) {
    return Pt(a, true, c);
  }([
    [
      n2,
      t
    ],
    [
      n2 + o,
      t
    ],
    [
      n2 + o,
      t + r
    ],
    [
      n2,
      t + r
    ]
  ], s);
}
m$1(Ws, "O");
function he(n2, t) {
  if (n2.length) {
    let o = typeof n2[0][0] == "number" ? [
      n2
    ] : n2, r = /* @__PURE__ */ kt(o[0], 1 * (1 + 0.2 * t.roughness), t), s = t.disableMultiStroke ? [] : kt(o[0], 1.5 * (1 + 0.22 * t.roughness), /* @__PURE__ */ fe(t));
    for (let a = 1; a < o.length; a++) {
      let c = o[a];
      if (c.length) {
        let e = /* @__PURE__ */ kt(c, 1 * (1 + 0.2 * t.roughness), t), h = t.disableMultiStroke ? [] : kt(c, 1.5 * (1 + 0.22 * t.roughness), /* @__PURE__ */ fe(t));
        for (let i of e) i.op !== "move" && r.push(i);
        for (let i of h) i.op !== "move" && s.push(i);
      }
    }
    return {
      type: "path",
      ops: /* @__PURE__ */ r.concat(s)
    };
  }
  return {
    type: "path",
    ops: []
  };
}
m$1(he, "L");
function we(n2, t, o) {
  let r = /* @__PURE__ */ Math.sqrt(2 * Math.PI * Math.sqrt((Math.pow(n2 / 2, 2) + Math.pow(t / 2, 2)) / 2)), s = /* @__PURE__ */ Math.ceil(/* @__PURE__ */ Math.max(o.curveStepCount, o.curveStepCount / Math.sqrt(200) * r)), a = 2 * Math.PI / s, c = /* @__PURE__ */ Math.abs(n2 / 2), e = /* @__PURE__ */ Math.abs(t / 2), h = 1 - o.curveFitting;
  return c += /* @__PURE__ */ F(c * h, o), e += /* @__PURE__ */ F(e * h, o), {
    increment: a,
    rx: c,
    ry: e
  };
}
m$1(we, "T");
function Ut(n2, t, o, r) {
  let [s, a] = ge(r.increment, n2, t, r.rx, r.ry, 1, r.increment * Ct(0.1, /* @__PURE__ */ Ct(0.4, 1, o), o), o), c = /* @__PURE__ */ Bt(s, null, o);
  if (!o.disableMultiStroke && o.roughness !== 0) {
    let [e] = ge(r.increment, n2, t, r.rx, r.ry, 1.5, 0, o), h = /* @__PURE__ */ Bt(e, null, o);
    c = /* @__PURE__ */ c.concat(h);
  }
  return {
    estimatedPoints: a,
    opset: {
      type: "path",
      ops: c
    }
  };
}
m$1(Ut, "D");
function pe(n2, t, o, r, s, a, c, e, h) {
  let i = n2, l = t, p = /* @__PURE__ */ Math.abs(o / 2), f = /* @__PURE__ */ Math.abs(r / 2);
  p += /* @__PURE__ */ F(0.01 * p, h), f += /* @__PURE__ */ F(0.01 * f, h);
  let m = s, g = a;
  for (; m < 0; ) m += 2 * Math.PI, g += 2 * Math.PI;
  g - m > 2 * Math.PI && (m = 0, g = 2 * Math.PI);
  let d = 2 * Math.PI / h.curveStepCount, x = /* @__PURE__ */ Math.min(d / 2, (g - m) / 2), y = /* @__PURE__ */ de(x, i, l, p, f, m, g, 1, h);
  if (!h.disableMultiStroke) {
    let b = /* @__PURE__ */ de(x, i, l, p, f, m, g, 1.5, h);
    y.push(...b);
  }
  return c && (e ? y.push(.../* @__PURE__ */ nt(i, l, i + p * Math.cos(m), l + f * Math.sin(m), h), .../* @__PURE__ */ nt(i, l, i + p * Math.cos(g), l + f * Math.sin(g), h)) : y.push({
    op: "lineTo",
    data: [
      i,
      l
    ]
  }, {
    op: "lineTo",
    data: [
      i + p * Math.cos(m),
      l + f * Math.sin(m)
    ]
  })), {
    type: "path",
    ops: y
  };
}
m$1(pe, "A");
function me(n2, t) {
  let o = /* @__PURE__ */ xe(/* @__PURE__ */ ye(/* @__PURE__ */ ee(n2))), r = [], s = [
    0,
    0
  ], a = [
    0,
    0
  ];
  for (let { key: c, data: e } of o) switch (c) {
    case "M":
      a = [
        e[0],
        e[1]
      ], s = [
        e[0],
        e[1]
      ];
      break;
    case "L":
      r.push(.../* @__PURE__ */ nt(a[0], a[1], e[0], e[1], t)), a = [
        e[0],
        e[1]
      ];
      break;
    case "C": {
      let [h, i, l, p, f, m] = e;
      r.push(.../* @__PURE__ */ Is(h, i, l, p, f, m, a, t)), a = [
        f,
        m
      ];
      break;
    }
    case "Z":
      r.push(.../* @__PURE__ */ nt(a[0], a[1], s[0], s[1], t)), a = [
        s[0],
        s[1]
      ];
  }
  return {
    type: "path",
    ops: r
  };
}
m$1(me, "_");
function It(n2, t) {
  let o = [];
  for (let r of n2) if (r.length) {
    let s = t.maxRandomnessOffset || 0, a = r.length;
    if (a > 2) {
      o.push({
        op: "move",
        data: [
          r[0][0] + F(s, t),
          r[0][1] + F(s, t)
        ]
      });
      for (let c = 1; c < a; c++) o.push({
        op: "lineTo",
        data: [
          r[c][0] + F(s, t),
          r[c][1] + F(s, t)
        ]
      });
    }
  }
  return {
    type: "fillPath",
    ops: o
  };
}
m$1(It, "I");
function gt(n2, t) {
  return function(o, r) {
    let s = o.fillStyle || "hachure";
    if (!tt[s]) switch (s) {
      case "zigzag":
        tt[s] || (tt[s] = new _t(r));
        break;
      case "cross-hatch":
        tt[s] || (tt[s] = new zt(r));
        break;
      case "dots":
        tt[s] || (tt[s] = new qt(r));
        break;
      case "dashed":
        tt[s] || (tt[s] = new Xt(r));
        break;
      case "zigzag-line":
        tt[s] || (tt[s] = new Yt(r));
        break;
      default:
        s = "hachure", tt[s] || (tt[s] = new xt(r));
    }
    return tt[s];
  }(t, Vs).fillPolygons(n2, t);
}
m$1(gt, "C");
function fe(n2) {
  let t = /* @__PURE__ */ Object.assign({}, n2);
  return t.randomizer = void 0, n2.seed && (t.seed = n2.seed + 1), t;
}
m$1(fe, "z");
function Ne(n2) {
  return n2.randomizer || (n2.randomizer = new Zt(n2.seed || 0)), n2.randomizer.next();
}
m$1(Ne, "W");
function Ct(n2, t, o) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
  return o.roughness * r * (Ne(o) * (t - n2) + n2);
}
m$1(Ct, "E");
function F(n2, t) {
  let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Ct(-n2, n2, t, o);
}
m$1(F, "G");
function nt(n2, t, o, r, s) {
  let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : false;
  let c = a ? s.disableMultiStrokeFill : s.disableMultiStroke, e = /* @__PURE__ */ Qt(n2, t, o, r, s, true, false);
  if (c) return e;
  let h = /* @__PURE__ */ Qt(n2, t, o, r, s, true, true);
  return e.concat(h);
}
m$1(nt, "$");
function Qt(n2, t, o, r, s, a, c) {
  let e = Math.pow(n2 - o, 2) + Math.pow(t - r, 2), h = /* @__PURE__ */ Math.sqrt(e), i = 1;
  i = h < 200 ? 1 : h > 500 ? 0.4 : -16668e-7 * h + 1.233334;
  let l = s.maxRandomnessOffset || 0;
  l * l * 100 > e && (l = h / 10);
  let p = l / 2, f = 0.2 + 0.2 * Ne(s), m = s.bowing * s.maxRandomnessOffset * (r - t) / 200, g = s.bowing * s.maxRandomnessOffset * (n2 - o) / 200;
  m = /* @__PURE__ */ F(m, s, i), g = /* @__PURE__ */ F(g, s, i);
  let d = [], x = /* @__PURE__ */ m$1(() => F(p, s, i), "M"), y = /* @__PURE__ */ m$1(() => F(l, s, i), "k"), b = s.preserveVertices;
  return a && (c ? d.push({
    op: "move",
    data: [
      n2 + (b ? 0 : x()),
      t + (b ? 0 : x())
    ]
  }) : d.push({
    op: "move",
    data: [
      n2 + (b ? 0 : F(l, s, i)),
      t + (b ? 0 : F(l, s, i))
    ]
  })), c ? d.push({
    op: "bcurveTo",
    data: [
      m + n2 + (o - n2) * f + x(),
      g + t + (r - t) * f + x(),
      m + n2 + 2 * (o - n2) * f + x(),
      g + t + 2 * (r - t) * f + x(),
      o + (b ? 0 : x()),
      r + (b ? 0 : x())
    ]
  }) : d.push({
    op: "bcurveTo",
    data: [
      m + n2 + (o - n2) * f + y(),
      g + t + (r - t) * f + y(),
      m + n2 + 2 * (o - n2) * f + y(),
      g + t + 2 * (r - t) * f + y(),
      o + (b ? 0 : y()),
      r + (b ? 0 : y())
    ]
  }), d;
}
m$1(Qt, "R");
function kt(n2, t, o) {
  if (!n2.length) return [];
  let r = [];
  r.push([
    n2[0][0] + F(t, o),
    n2[0][1] + F(t, o)
  ]), r.push([
    n2[0][0] + F(t, o),
    n2[0][1] + F(t, o)
  ]);
  for (let s = 1; s < n2.length; s++) r.push([
    n2[s][0] + F(t, o),
    n2[s][1] + F(t, o)
  ]), s === n2.length - 1 && r.push([
    n2[s][0] + F(t, o),
    n2[s][1] + F(t, o)
  ]);
  return Bt(r, null, o);
}
m$1(kt, "j");
function Bt(n2, t, o) {
  let r = n2.length, s = [];
  if (r > 3) {
    let a = [], c = 1 - o.curveTightness;
    s.push({
      op: "move",
      data: [
        n2[1][0],
        n2[1][1]
      ]
    });
    for (let e = 1; e + 2 < r; e++) {
      let h = n2[e];
      a[0] = [
        h[0],
        h[1]
      ], a[1] = [
        h[0] + (c * n2[e + 1][0] - c * n2[e - 1][0]) / 6,
        h[1] + (c * n2[e + 1][1] - c * n2[e - 1][1]) / 6
      ], a[2] = [
        n2[e + 1][0] + (c * n2[e][0] - c * n2[e + 2][0]) / 6,
        n2[e + 1][1] + (c * n2[e][1] - c * n2[e + 2][1]) / 6
      ], a[3] = [
        n2[e + 1][0],
        n2[e + 1][1]
      ], s.push({
        op: "bcurveTo",
        data: [
          a[1][0],
          a[1][1],
          a[2][0],
          a[2][1],
          a[3][0],
          a[3][1]
        ]
      });
    }
    if (t && t.length === 2) {
      let e = o.maxRandomnessOffset;
      s.push({
        op: "lineTo",
        data: [
          t[0] + F(e, o),
          t[1] + F(e, o)
        ]
      });
    }
  } else r === 3 ? (s.push({
    op: "move",
    data: [
      n2[1][0],
      n2[1][1]
    ]
  }), s.push({
    op: "bcurveTo",
    data: [
      n2[1][0],
      n2[1][1],
      n2[2][0],
      n2[2][1],
      n2[2][0],
      n2[2][1]
    ]
  })) : r === 2 && s.push(.../* @__PURE__ */ Qt(n2[0][0], n2[0][1], n2[1][0], n2[1][1], o, true, true));
  return s;
}
m$1(Bt, "q");
function ge(n2, t, o, r, s, a, c, e) {
  let h = [], i = [];
  if (e.roughness === 0) {
    n2 /= 4, i.push([
      t + r * Math.cos(-n2),
      o + s * Math.sin(-n2)
    ]);
    for (let l = 0; l <= 2 * Math.PI; l += n2) {
      let p = [
        t + r * Math.cos(l),
        o + s * Math.sin(l)
      ];
      h.push(p), i.push(p);
    }
    i.push([
      t + r * Math.cos(0),
      o + s * Math.sin(0)
    ]), i.push([
      t + r * Math.cos(n2),
      o + s * Math.sin(n2)
    ]);
  } else {
    let l = F(0.5, e) - Math.PI / 2;
    i.push([
      F(a, e) + t + 0.9 * r * Math.cos(l - n2),
      F(a, e) + o + 0.9 * s * Math.sin(l - n2)
    ]);
    let p = 2 * Math.PI + l - 0.01;
    for (let f = l; f < p; f += n2) {
      let m = [
        F(a, e) + t + r * Math.cos(f),
        F(a, e) + o + s * Math.sin(f)
      ];
      h.push(m), i.push(m);
    }
    i.push([
      F(a, e) + t + r * Math.cos(l + 2 * Math.PI + 0.5 * c),
      F(a, e) + o + s * Math.sin(l + 2 * Math.PI + 0.5 * c)
    ]), i.push([
      F(a, e) + t + 0.98 * r * Math.cos(l + c),
      F(a, e) + o + 0.98 * s * Math.sin(l + c)
    ]), i.push([
      F(a, e) + t + 0.9 * r * Math.cos(l + 0.5 * c),
      F(a, e) + o + 0.9 * s * Math.sin(l + 0.5 * c)
    ]);
  }
  return [
    i,
    h
  ];
}
m$1(ge, "F");
function de(n2, t, o, r, s, a, c, e, h) {
  let i = a + F(0.1, h), l = [];
  l.push([
    F(e, h) + t + 0.9 * r * Math.cos(i - n2),
    F(e, h) + o + 0.9 * s * Math.sin(i - n2)
  ]);
  for (let p = i; p <= c; p += n2) l.push([
    F(e, h) + t + r * Math.cos(p),
    F(e, h) + o + s * Math.sin(p)
  ]);
  return l.push([
    t + r * Math.cos(c),
    o + s * Math.sin(c)
  ]), l.push([
    t + r * Math.cos(c),
    o + s * Math.sin(c)
  ]), Bt(l, null, h);
}
m$1(de, "V");
function Is(n2, t, o, r, s, a, c, e) {
  let h = [], i = [
    e.maxRandomnessOffset || 1,
    (e.maxRandomnessOffset || 1) + 0.3
  ], l = [
    0,
    0
  ], p = e.disableMultiStroke ? 1 : 2, f = e.preserveVertices;
  for (let m = 0; m < p; m++) m === 0 ? h.push({
    op: "move",
    data: [
      c[0],
      c[1]
    ]
  }) : h.push({
    op: "move",
    data: [
      c[0] + (f ? 0 : F(i[0], e)),
      c[1] + (f ? 0 : F(i[0], e))
    ]
  }), l = f ? [
    s,
    a
  ] : [
    s + F(i[m], e),
    a + F(i[m], e)
  ], h.push({
    op: "bcurveTo",
    data: [
      n2 + F(i[m], e),
      t + F(i[m], e),
      o + F(i[m], e),
      r + F(i[m], e),
      l[0],
      l[1]
    ]
  });
  return h;
}
m$1(Is, "Z");
function yt(n2) {
  return [
    ...n2
  ];
}
m$1(yt, "Q");
function ue(n2) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  let o = n2.length;
  if (o < 3) throw new Error("A curve must have at least three points.");
  let r = [];
  if (o === 3) r.push(/* @__PURE__ */ yt(n2[0]), /* @__PURE__ */ yt(n2[1]), /* @__PURE__ */ yt(n2[2]), /* @__PURE__ */ yt(n2[2]));
  else {
    let s = [];
    s.push(n2[0], n2[0]);
    for (let e = 1; e < n2.length; e++) s.push(n2[e]), e === n2.length - 1 && s.push(n2[e]);
    let a = [], c = 1 - t;
    r.push(/* @__PURE__ */ yt(s[0]));
    for (let e = 1; e + 2 < s.length; e++) {
      let h = s[e];
      a[0] = [
        h[0],
        h[1]
      ], a[1] = [
        h[0] + (c * s[e + 1][0] - c * s[e - 1][0]) / 6,
        h[1] + (c * s[e + 1][1] - c * s[e - 1][1]) / 6
      ], a[2] = [
        s[e + 1][0] + (c * s[e][0] - c * s[e + 2][0]) / 6,
        s[e + 1][1] + (c * s[e][1] - c * s[e + 2][1]) / 6
      ], a[3] = [
        s[e + 1][0],
        s[e + 1][1]
      ], r.push(a[1], a[2], a[3]);
    }
  }
  return r;
}
m$1(ue, "H");
function Tt(n2, t) {
  return Math.pow(n2[0] - t[0], 2) + Math.pow(n2[1] - t[1], 2);
}
m$1(Tt, "N");
function Fs(n2, t, o) {
  let r = /* @__PURE__ */ Tt(t, o);
  if (r === 0) return Tt(n2, t);
  let s = ((n2[0] - t[0]) * (o[0] - t[0]) + (n2[1] - t[1]) * (o[1] - t[1])) / r;
  return s = /* @__PURE__ */ Math.max(0, /* @__PURE__ */ Math.min(1, s)), Tt(n2, /* @__PURE__ */ mt(t, o, s));
}
m$1(Fs, "B");
function mt(n2, t, o) {
  return [
    n2[0] + (t[0] - n2[0]) * o,
    n2[1] + (t[1] - n2[1]) * o
  ];
}
m$1(mt, "J");
function Jt(n2, t, o, r) {
  let s = r || [];
  if (function(e, h) {
    let i = e[h + 0], l = e[h + 1], p = e[h + 2], f = e[h + 3], m = 3 * l[0] - 2 * i[0] - f[0];
    m *= m;
    let g = 3 * l[1] - 2 * i[1] - f[1];
    g *= g;
    let d = 3 * p[0] - 2 * f[0] - i[0];
    d *= d;
    let x = 3 * p[1] - 2 * f[1] - i[1];
    return x *= x, m < d && (m = d), g < x && (g = x), m + g;
  }(n2, t) < o) {
    let e = n2[t + 0];
    s.length ? (a = s[s.length - 1], c = e, Math.sqrt(/* @__PURE__ */ Tt(a, c)) > 1 && s.push(e)) : s.push(e), s.push(n2[t + 3]);
  } else {
    let h = n2[t + 0], i = n2[t + 1], l = n2[t + 2], p = n2[t + 3], f = /* @__PURE__ */ mt(h, i, 0.5), m = /* @__PURE__ */ mt(i, l, 0.5), g = /* @__PURE__ */ mt(l, p, 0.5), d = /* @__PURE__ */ mt(f, m, 0.5), x = /* @__PURE__ */ mt(m, g, 0.5), y = /* @__PURE__ */ mt(d, x, 0.5);
    Jt([
      h,
      f,
      d,
      y
    ], 0, o, s), Jt([
      y,
      x,
      g,
      p
    ], 0, o, s);
  }
  var a, c;
  return s;
}
m$1(Jt, "K");
function _s(n2, t) {
  return Rt(n2, 0, n2.length, t);
}
m$1(_s, "U");
function Rt(n2, t, o, r, s) {
  let a = s || [], c = n2[t], e = n2[o - 1], h = 0, i = 1;
  for (let l = t + 1; l < o - 1; ++l) {
    let p = /* @__PURE__ */ Fs(n2[l], c, e);
    p > h && (h = p, i = l);
  }
  return Math.sqrt(h) > r ? (Rt(n2, t, i + 1, r, a), Rt(n2, i, o, r, a)) : (a.length || a.push(c), a.push(e)), a;
}
m$1(Rt, "X");
function Ft(n2) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0.15, o = arguments.length > 2 ? arguments[2] : void 0;
  let r = [], s = (n2.length - 1) / 3;
  for (let a = 0; a < s; a++) Jt(n2, 3 * a, t, r);
  return o && o > 0 ? Rt(r, 0, r.length, o) : r;
}
m$1(Ft, "Y");
var et = "none", dt = (_h = class {
  constructor(t) {
    this.defaultOptions = {
      maxRandomnessOffset: 2,
      roughness: 1,
      bowing: 1,
      stroke: "#000",
      strokeWidth: 1,
      curveTightness: 0,
      curveFitting: 0.95,
      curveStepCount: 9,
      fillStyle: "hachure",
      fillWeight: -1,
      hachureAngle: -41,
      hachureGap: -1,
      dashOffset: -1,
      dashGap: -1,
      zigzagOffset: -1,
      seed: 0,
      disableMultiStroke: false,
      disableMultiStrokeFill: false,
      preserveVertices: false,
      fillShapeRoughnessGain: 0.8
    }, this.config = t || {}, this.config.options && (this.defaultOptions = /* @__PURE__ */ this._o(this.config.options));
  }
  static newSeed() {
    return Math.floor(Math.random() * 2 ** 31);
  }
  _o(t) {
    return t ? Object.assign({}, this.defaultOptions, t) : this.defaultOptions;
  }
  _d(t, o, r) {
    return {
      shape: t,
      sets: o || [],
      options: r || this.defaultOptions
    };
  }
  line(t, o, r, s, a) {
    let c = /* @__PURE__ */ this._o(a);
    return this._d("line", [
      /* @__PURE__ */ Se(t, o, r, s, c)
    ], c);
  }
  rectangle(t, o, r, s, a) {
    let c = /* @__PURE__ */ this._o(a), e = [], h = /* @__PURE__ */ Ws(t, o, r, s, c);
    if (c.fill) {
      let i = [
        [
          t,
          o
        ],
        [
          t + r,
          o
        ],
        [
          t + r,
          o + s
        ],
        [
          t,
          o + s
        ]
      ];
      c.fillStyle === "solid" ? e.push(/* @__PURE__ */ It([
        i
      ], c)) : e.push(/* @__PURE__ */ gt([
        i
      ], c));
    }
    return c.stroke !== et && e.push(h), this._d("rectangle", e, c);
  }
  ellipse(t, o, r, s, a) {
    let c = /* @__PURE__ */ this._o(a), e = [], h = /* @__PURE__ */ we(r, s, c), i = /* @__PURE__ */ Ut(t, o, c, h);
    if (c.fill) if (c.fillStyle === "solid") {
      let l = Ut(t, o, c, h).opset;
      l.type = "fillPath", e.push(l);
    } else e.push(/* @__PURE__ */ gt([
      i.estimatedPoints
    ], c));
    return c.stroke !== et && e.push(i.opset), this._d("ellipse", e, c);
  }
  circle(t, o, r, s) {
    let a = /* @__PURE__ */ this.ellipse(t, o, r, r, s);
    return a.shape = "circle", a;
  }
  linearPath(t, o) {
    let r = /* @__PURE__ */ this._o(o);
    return this._d("linearPath", [
      /* @__PURE__ */ Pt(t, false, r)
    ], r);
  }
  arc(t, o, r, s, a, c) {
    let e = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : false, h = arguments.length > 7 ? arguments[7] : void 0;
    let i = /* @__PURE__ */ this._o(h), l = [], p = /* @__PURE__ */ pe(t, o, r, s, a, c, e, true, i);
    if (e && i.fill) if (i.fillStyle === "solid") {
      let f = /* @__PURE__ */ Object.assign({}, i);
      f.disableMultiStroke = true;
      let m = /* @__PURE__ */ pe(t, o, r, s, a, c, true, false, f);
      m.type = "fillPath", l.push(m);
    } else l.push(/* @__PURE__ */ function(f, m, g, d, x, y, b) {
      let S2 = f, $ = m, w = /* @__PURE__ */ Math.abs(g / 2), C = /* @__PURE__ */ Math.abs(d / 2);
      w += /* @__PURE__ */ F(0.01 * w, b), C += /* @__PURE__ */ F(0.01 * C, b);
      let B = x, R = y;
      for (; B < 0; ) B += 2 * Math.PI, R += 2 * Math.PI;
      R - B > 2 * Math.PI && (B = 0, R = 2 * Math.PI);
      let j = (R - B) / b.curveStepCount, A = [];
      for (let O = B; O <= R; O += j) A.push([
        S2 + w * Math.cos(O),
        $ + C * Math.sin(O)
      ]);
      return A.push([
        S2 + w * Math.cos(R),
        $ + C * Math.sin(R)
      ]), A.push([
        S2,
        $
      ]), gt([
        A
      ], b);
    }(t, o, r, s, a, c, i));
    return i.stroke !== et && l.push(p), this._d("arc", l, i);
  }
  curve(t, o) {
    let r = /* @__PURE__ */ this._o(o), s = [], a = /* @__PURE__ */ he(t, r);
    if (r.fill && r.fill !== et) if (r.fillStyle === "solid") {
      let c = /* @__PURE__ */ he(t, /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.assign({}, r), {
        disableMultiStroke: true,
        roughness: r.roughness ? r.roughness + r.fillShapeRoughnessGain : 0
      }));
      s.push({
        type: "fillPath",
        ops: /* @__PURE__ */ this._mergedShape(c.ops)
      });
    } else {
      let c = [], e = t;
      if (e.length) {
        let h = typeof e[0][0] == "number" ? [
          e
        ] : e;
        for (let i of h) i.length < 3 ? c.push(...i) : i.length === 3 ? c.push(.../* @__PURE__ */ Ft(/* @__PURE__ */ ue([
          i[0],
          i[0],
          i[1],
          i[2]
        ]), 10, (1 + r.roughness) / 2)) : c.push(.../* @__PURE__ */ Ft(/* @__PURE__ */ ue(i), 10, (1 + r.roughness) / 2));
      }
      c.length && s.push(/* @__PURE__ */ gt([
        c
      ], r));
    }
    return r.stroke !== et && s.push(a), this._d("curve", s, r);
  }
  polygon(t, o) {
    let r = /* @__PURE__ */ this._o(o), s = [], a = /* @__PURE__ */ Pt(t, true, r);
    return r.fill && (r.fillStyle === "solid" ? s.push(/* @__PURE__ */ It([
      t
    ], r)) : s.push(/* @__PURE__ */ gt([
      t
    ], r))), r.stroke !== et && s.push(a), this._d("polygon", s, r);
  }
  path(t, o) {
    let r = /* @__PURE__ */ this._o(o), s = [];
    if (!t) return this._d("path", s, r);
    t = /* @__PURE__ */ (t || "").replace(/\n/g, " ").replace(/(-\s)/g, "-").replace("/(ss)/g", " ");
    let a = r.fill && r.fill !== "transparent" && r.fill !== et, c = r.stroke !== et, e = !!(r.simplification && r.simplification < 1), h = /* @__PURE__ */ function(l, p, f) {
      let m = /* @__PURE__ */ xe(/* @__PURE__ */ ye(/* @__PURE__ */ ee(l))), g = [], d = [], x = [
        0,
        0
      ], y = [], b = /* @__PURE__ */ m$1(() => {
        y.length >= 4 && d.push(.../* @__PURE__ */ Ft(y, p)), y = [];
      }, "i"), S2 = /* @__PURE__ */ m$1(() => {
        b(), d.length && (g.push(d), d = []);
      }, "c");
      for (let { key: w, data: C } of m) switch (w) {
        case "M":
          S2(), x = [
            C[0],
            C[1]
          ], d.push(x);
          break;
        case "L":
          b(), d.push([
            C[0],
            C[1]
          ]);
          break;
        case "C":
          if (!y.length) {
            let B = d.length ? d[d.length - 1] : x;
            y.push([
              B[0],
              B[1]
            ]);
          }
          y.push([
            C[0],
            C[1]
          ]), y.push([
            C[2],
            C[3]
          ]), y.push([
            C[4],
            C[5]
          ]);
          break;
        case "Z":
          b(), d.push([
            x[0],
            x[1]
          ]);
      }
      if (S2(), !f) return g;
      let $ = [];
      for (let w of g) {
        let C = /* @__PURE__ */ _s(w, f);
        C.length && $.push(C);
      }
      return $;
    }(t, 1, e ? 4 - 4 * (r.simplification || 1) : (1 + r.roughness) / 2), i = /* @__PURE__ */ me(t, r);
    if (a) if (r.fillStyle === "solid") if (h.length === 1) {
      let l = /* @__PURE__ */ me(t, /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.assign({}, r), {
        disableMultiStroke: true,
        roughness: r.roughness ? r.roughness + r.fillShapeRoughnessGain : 0
      }));
      s.push({
        type: "fillPath",
        ops: /* @__PURE__ */ this._mergedShape(l.ops)
      });
    } else s.push(/* @__PURE__ */ It(h, r));
    else s.push(/* @__PURE__ */ gt(h, r));
    return c && (e ? h.forEach((l) => {
      s.push(/* @__PURE__ */ Pt(l, false, r));
    }) : s.push(i)), this._d("path", s, r);
  }
  opsToPath(t, o) {
    let r = "";
    for (let s of t.ops) {
      let a = typeof o == "number" && o >= 0 ? s.data.map((c) => +c.toFixed(o)) : s.data;
      switch (s.op) {
        case "move":
          r += `M${a[0]} ${a[1]} `;
          break;
        case "bcurveTo":
          r += `C${a[0]} ${a[1]}, ${a[2]} ${a[3]}, ${a[4]} ${a[5]} `;
          break;
        case "lineTo":
          r += `L${a[0]} ${a[1]} `;
      }
    }
    return r.trim();
  }
  toPaths(t) {
    let o = t.sets || [], r = t.options || this.defaultOptions, s = [];
    for (let a of o) {
      let c = null;
      switch (a.type) {
        case "path":
          c = {
            d: /* @__PURE__ */ this.opsToPath(a),
            stroke: r.stroke,
            strokeWidth: r.strokeWidth,
            fill: et
          };
          break;
        case "fillPath":
          c = {
            d: /* @__PURE__ */ this.opsToPath(a),
            stroke: et,
            strokeWidth: 0,
            fill: r.fill || et
          };
          break;
        case "fillSketch":
          c = /* @__PURE__ */ this.fillSketch(a, r);
      }
      c && s.push(c);
    }
    return s;
  }
  fillSketch(t, o) {
    let r = o.fillWeight;
    return r < 0 && (r = o.strokeWidth / 2), {
      d: /* @__PURE__ */ this.opsToPath(t),
      stroke: o.fill || et,
      strokeWidth: r,
      fill: et
    };
  }
  _mergedShape(t) {
    return t.filter((o, r) => r === 0 || o.op !== "move");
  }
}, __8 = new WeakMap(), __privateAdd(_h, __8, m$1(_h, "et")), _h), Kt = (_i = class {
  constructor(t, o) {
    this.canvas = t, this.ctx = /* @__PURE__ */ this.canvas.getContext("2d"), this.gen = new dt(o);
  }
  draw(t) {
    let o = t.sets || [], r = t.options || this.getDefaultOptions(), s = this.ctx, a = t.options.fixedDecimalPlaceDigits;
    for (let c of o) switch (c.type) {
      case "path":
        s.save(), s.strokeStyle = r.stroke === "none" ? "transparent" : r.stroke, s.lineWidth = r.strokeWidth, r.strokeLineDash && s.setLineDash(r.strokeLineDash), r.strokeLineDashOffset && (s.lineDashOffset = r.strokeLineDashOffset), this._drawToContext(s, c, a), s.restore();
        break;
      case "fillPath": {
        s.save(), s.fillStyle = r.fill || "";
        let e = t.shape === "curve" || t.shape === "polygon" || t.shape === "path" ? "evenodd" : "nonzero";
        this._drawToContext(s, c, a, e), s.restore();
        break;
      }
      case "fillSketch":
        this.fillSketch(s, c, r);
    }
  }
  fillSketch(t, o, r) {
    let s = r.fillWeight;
    s < 0 && (s = r.strokeWidth / 2), t.save(), r.fillLineDash && t.setLineDash(r.fillLineDash), r.fillLineDashOffset && (t.lineDashOffset = r.fillLineDashOffset), t.strokeStyle = r.fill || "", t.lineWidth = s, this._drawToContext(t, o, r.fixedDecimalPlaceDigits), t.restore();
  }
  _drawToContext(t, o, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "nonzero";
    t.beginPath();
    for (let a of o.ops) {
      let c = typeof r == "number" && r >= 0 ? a.data.map((e) => +e.toFixed(r)) : a.data;
      switch (a.op) {
        case "move":
          t.moveTo(c[0], c[1]);
          break;
        case "bcurveTo":
          t.bezierCurveTo(c[0], c[1], c[2], c[3], c[4], c[5]);
          break;
        case "lineTo":
          t.lineTo(c[0], c[1]);
      }
    }
    o.type === "fillPath" ? t.fill(s) : t.stroke();
  }
  get generator() {
    return this.gen;
  }
  getDefaultOptions() {
    return this.gen.defaultOptions;
  }
  line(t, o, r, s, a) {
    let c = /* @__PURE__ */ this.gen.line(t, o, r, s, a);
    return this.draw(c), c;
  }
  rectangle(t, o, r, s, a) {
    let c = /* @__PURE__ */ this.gen.rectangle(t, o, r, s, a);
    return this.draw(c), c;
  }
  ellipse(t, o, r, s, a) {
    let c = /* @__PURE__ */ this.gen.ellipse(t, o, r, s, a);
    return this.draw(c), c;
  }
  circle(t, o, r, s) {
    let a = /* @__PURE__ */ this.gen.circle(t, o, r, s);
    return this.draw(a), a;
  }
  linearPath(t, o) {
    let r = /* @__PURE__ */ this.gen.linearPath(t, o);
    return this.draw(r), r;
  }
  polygon(t, o) {
    let r = /* @__PURE__ */ this.gen.polygon(t, o);
    return this.draw(r), r;
  }
  arc(t, o, r, s, a, c) {
    let e = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : false, h = arguments.length > 7 ? arguments[7] : void 0;
    let i = /* @__PURE__ */ this.gen.arc(t, o, r, s, a, c, e, h);
    return this.draw(i), i;
  }
  curve(t, o) {
    let r = /* @__PURE__ */ this.gen.curve(t, o);
    return this.draw(r), r;
  }
  path(t, o) {
    let r = /* @__PURE__ */ this.gen.path(t, o);
    return this.draw(r), r;
  }
}, __9 = new WeakMap(), __privateAdd(_i, __9, m$1(_i, "st")), _i), $t = "http://www.w3.org/2000/svg", te = (_j = class {
  constructor(t, o) {
    this.svg = t, this.gen = new dt(o);
  }
  draw(t) {
    let o = t.sets || [], r = t.options || this.getDefaultOptions(), s = this.svg.ownerDocument || window.document, a = /* @__PURE__ */ s.createElementNS($t, "g"), c = t.options.fixedDecimalPlaceDigits;
    for (let e of o) {
      let h = null;
      switch (e.type) {
        case "path":
          h = /* @__PURE__ */ s.createElementNS($t, "path"), h.setAttribute("d", /* @__PURE__ */ this.opsToPath(e, c)), h.setAttribute("stroke", r.stroke), h.setAttribute("stroke-width", r.strokeWidth + ""), h.setAttribute("fill", "none"), r.strokeLineDash && h.setAttribute("stroke-dasharray", /* @__PURE__ */ r.strokeLineDash.join(" ").trim()), r.strokeLineDashOffset && h.setAttribute("stroke-dashoffset", `${r.strokeLineDashOffset}`);
          break;
        case "fillPath":
          h = /* @__PURE__ */ s.createElementNS($t, "path"), h.setAttribute("d", /* @__PURE__ */ this.opsToPath(e, c)), h.setAttribute("stroke", "none"), h.setAttribute("stroke-width", "0"), h.setAttribute("fill", r.fill || ""), t.shape !== "curve" && t.shape !== "polygon" || h.setAttribute("fill-rule", "evenodd");
          break;
        case "fillSketch":
          h = /* @__PURE__ */ this.fillSketch(s, e, r);
      }
      h && a.appendChild(h);
    }
    return a;
  }
  fillSketch(t, o, r) {
    let s = r.fillWeight;
    s < 0 && (s = r.strokeWidth / 2);
    let a = /* @__PURE__ */ t.createElementNS($t, "path");
    return a.setAttribute("d", /* @__PURE__ */ this.opsToPath(o, r.fixedDecimalPlaceDigits)), a.setAttribute("stroke", r.fill || ""), a.setAttribute("stroke-width", s + ""), a.setAttribute("fill", "none"), r.fillLineDash && a.setAttribute("stroke-dasharray", /* @__PURE__ */ r.fillLineDash.join(" ").trim()), r.fillLineDashOffset && a.setAttribute("stroke-dashoffset", `${r.fillLineDashOffset}`), a;
  }
  get generator() {
    return this.gen;
  }
  getDefaultOptions() {
    return this.gen.defaultOptions;
  }
  opsToPath(t, o) {
    return this.gen.opsToPath(t, o);
  }
  line(t, o, r, s, a) {
    let c = /* @__PURE__ */ this.gen.line(t, o, r, s, a);
    return this.draw(c);
  }
  rectangle(t, o, r, s, a) {
    let c = /* @__PURE__ */ this.gen.rectangle(t, o, r, s, a);
    return this.draw(c);
  }
  ellipse(t, o, r, s, a) {
    let c = /* @__PURE__ */ this.gen.ellipse(t, o, r, s, a);
    return this.draw(c);
  }
  circle(t, o, r, s) {
    let a = /* @__PURE__ */ this.gen.circle(t, o, r, s);
    return this.draw(a);
  }
  linearPath(t, o) {
    let r = /* @__PURE__ */ this.gen.linearPath(t, o);
    return this.draw(r);
  }
  polygon(t, o) {
    let r = /* @__PURE__ */ this.gen.polygon(t, o);
    return this.draw(r);
  }
  arc(t, o, r, s, a, c) {
    let e = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : false, h = arguments.length > 7 ? arguments[7] : void 0;
    let i = /* @__PURE__ */ this.gen.arc(t, o, r, s, a, c, e, h);
    return this.draw(i);
  }
  curve(t, o) {
    let r = /* @__PURE__ */ this.gen.curve(t, o);
    return this.draw(r);
  }
  path(t, o) {
    let r = /* @__PURE__ */ this.gen.path(t, o);
    return this.draw(r);
  }
}, __10 = new WeakMap(), __privateAdd(_j, __10, m$1(_j, "ot")), _j), D = {
  canvas: /* @__PURE__ */ m$1((n2, t) => new Kt(n2, t), "canvas"),
  svg: /* @__PURE__ */ m$1((n2, t) => new te(n2, t), "svg"),
  generator: /* @__PURE__ */ m$1((n2) => new dt(n2), "generator"),
  newSeed: /* @__PURE__ */ m$1(() => dt.newSeed(), "newSeed")
};
var zs = /* @__PURE__ */ m$1((n2, t) => {
  var o = n2.x, r = n2.y, s = t.x - o, a = t.y - r, c = n2.width / 2, e = n2.height / 2, h, i;
  return Math.abs(a) * c > Math.abs(s) * e ? (a < 0 && (e = -e), h = a === 0 ? 0 : e * s / a, i = e) : (s < 0 && (c = -c), h = c, i = s === 0 ? 0 : c * a / s), {
    x: o + h,
    y: r + i
  };
}, "intersectRect"), lt = zs;
function qs(n2, t) {
  t && n2.attr("style", t);
}
m$1(qs, "applyStyle");
async function Xs(n2) {
  let t = /* @__PURE__ */ rh(/* @__PURE__ */ document.createElementNS("http://www.w3.org/2000/svg", "foreignObject")), o = /* @__PURE__ */ t.append("xhtml:div"), r = n2.label;
  n2.label && Rl(n2.label) && (r = await gf$1(/* @__PURE__ */ n2.label.replace(mC.lineBreakRegex, `
`), /* @__PURE__ */ Wl()));
  let s = n2.isNode ? "nodeLabel" : "edgeLabel";
  return o.html('<span class="' + s + '" ' + (n2.labelStyle ? 'style="' + n2.labelStyle + '"' : "") + ">" + r + "</span>"), qs(o, n2.labelStyle), o.style("display", "inline-block"), o.style("padding-right", "1px"), o.style("white-space", "nowrap"), o.attr("xmlns", "http://www.w3.org/1999/xhtml"), t.node();
}
m$1(Xs, "addHtmlLabel");
var Ys = /* @__PURE__ */ m$1(async (n2, t, o, r) => {
  let s = n2 || "";
  if (typeof s == "object" && (s = s[0]), uf(Wl().flowchart.htmlLabels)) {
    s = /* @__PURE__ */ s.replace(/\\n|\n/g, "<br />"), tt$1.info("vertexText" + s);
    let a = {
      isNode: r,
      label: /* @__PURE__ */ Xe$1(s).replace(/fa[blrs]?:fa-[\w-]+/g, (e) => `<i class='${e.replace(":", " ")}'></i>`),
      labelStyle: t && t.replace("fill:", "color:")
    };
    return await Xs(a);
  } else {
    let a = /* @__PURE__ */ document.createElementNS("http://www.w3.org/2000/svg", "text");
    a.setAttribute("style", /* @__PURE__ */ t.replace("color:", "fill:"));
    let c = [];
    typeof s == "string" ? c = /* @__PURE__ */ s.split(/\\n|\n|<br\s*\/?>/gi) : Array.isArray(s) ? c = s : c = [];
    for (let e of c) {
      let h = /* @__PURE__ */ document.createElementNS("http://www.w3.org/2000/svg", "tspan");
      h.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), h.setAttribute("dy", "1em"), h.setAttribute("x", "0"), o ? h.setAttribute("class", "title-row") : h.setAttribute("class", "row"), h.textContent = /* @__PURE__ */ e.trim(), a.appendChild(h);
    }
    return a;
  }
}, "createLabel"), St = Ys;
var Q = /* @__PURE__ */ m$1((n2, t, o, r, s) => [
  "M",
  n2 + s,
  t,
  "H",
  n2 + o - s,
  "A",
  s,
  s,
  0,
  0,
  1,
  n2 + o,
  t + s,
  "V",
  t + r - s,
  "A",
  s,
  s,
  0,
  0,
  1,
  n2 + o - s,
  t + r,
  "H",
  n2 + s,
  "A",
  s,
  s,
  0,
  0,
  1,
  n2,
  t + r - s,
  "V",
  t + s,
  "A",
  s,
  s,
  0,
  0,
  1,
  n2 + s,
  t,
  "Z"
].join(" "), "createRoundedRectPathD");
var De = /* @__PURE__ */ m$1((n2) => {
  let { handDrawnSeed: t } = Wl();
  return {
    fill: n2,
    hachureAngle: 120,
    hachureGap: 4,
    fillWeight: 2,
    roughness: 0.7,
    stroke: n2,
    seed: t
  };
}, "solidStateFill"), ot = /* @__PURE__ */ m$1((n2) => {
  let t = /* @__PURE__ */ Zs([
    ...n2.cssCompiledStyles || [],
    ...n2.cssStyles || []
  ]);
  return {
    stylesMap: t,
    stylesArray: [
      ...t
    ]
  };
}, "compileStyles"), Zs = /* @__PURE__ */ m$1((n2) => {
  let t = /* @__PURE__ */ new Map();
  return n2.forEach((o) => {
    let [r, s] = o.split(":");
    t.set(/* @__PURE__ */ r.trim(), s == null ? void 0 : s.trim());
  }), t;
}, "styles2Map"), k = /* @__PURE__ */ m$1((n2) => {
  let { stylesArray: t } = ot(n2), o = [], r = [], s = [], a = [];
  return t.forEach((c) => {
    let e = c[0];
    e === "color" || e === "font-size" || e === "font-family" || e === "font-weight" || e === "font-style" || e === "text-decoration" || e === "text-align" || e === "text-transform" || e === "line-height" || e === "letter-spacing" || e === "word-spacing" || e === "text-shadow" || e === "text-overflow" || e === "white-space" || e === "word-wrap" || e === "word-break" || e === "overflow-wrap" || e === "hyphens" ? o.push(c.join(":") + " !important") : (r.push(c.join(":") + " !important"), e.includes("stroke") && s.push(c.join(":") + " !important"), e === "fill" && a.push(c.join(":") + " !important"));
  }), {
    labelStyles: /* @__PURE__ */ o.join(";"),
    nodeStyles: /* @__PURE__ */ r.join(";"),
    stylesArray: t,
    borderStyles: s,
    backgroundStyles: a
  };
}, "styles2String"), M = /* @__PURE__ */ m$1((n2, t) => {
  var _a2;
  let { themeVariables: o, handDrawnSeed: r } = Wl(), { nodeBorder: s, mainBkg: a } = o, { stylesMap: c } = ot(n2);
  return Object.assign({
    roughness: 0.7,
    fill: c.get("fill") || a,
    fillStyle: "hachure",
    fillWeight: 4,
    hachureGap: 5.2,
    stroke: c.get("stroke") || s,
    seed: r,
    strokeWidth: ((_a2 = c.get("stroke-width")) == null ? void 0 : _a2.replace("px", "")) || 1.3,
    fillLineDash: [
      0,
      0
    ]
  }, t);
}, "userNodeOverrides");
var Me = /* @__PURE__ */ m$1(async (n$1, t) => {
  tt$1.info("Creating subgraph rect for ", t.id, t);
  let o = /* @__PURE__ */ Wl(), { themeVariables: r, handDrawnSeed: s } = o, { clusterBkg: a, clusterBorder: c } = r, { labelStyles: e, nodeStyles: h, borderStyles: i, backgroundStyles: l } = k(t), p = /* @__PURE__ */ n$1.insert("g").attr("class", "cluster " + t.cssClasses).attr("id", t.id).attr("data-look", t.look), f = /* @__PURE__ */ uf(o.flowchart.htmlLabels), m = /* @__PURE__ */ p.insert("g").attr("class", "cluster-label "), g = await Zt$1(m, t.label, {
    style: t.labelStyle,
    useHtmlLabels: f,
    isNode: true
  }), d = /* @__PURE__ */ g.getBBox();
  if (uf(o.flowchart.htmlLabels)) {
    let B = g.children[0], R = /* @__PURE__ */ rh(g);
    d = /* @__PURE__ */ B.getBoundingClientRect(), R.attr("width", d.width), R.attr("height", d.height);
  }
  let x = t.width <= d.width + t.padding ? d.width + t.padding : t.width;
  t.width <= d.width + t.padding ? t.diff = (x - t.width) / 2 - t.padding : t.diff = -t.padding;
  let y = t.height, b = t.x - x / 2, S2 = t.y - y / 2;
  tt$1.trace("Data ", t, /* @__PURE__ */ JSON.stringify(t));
  let $;
  if (t.look === "handDrawn") {
    let B = /* @__PURE__ */ D.svg(p), R = /* @__PURE__ */ M(t, {
      roughness: 0.7,
      fill: a,
      stroke: c,
      fillWeight: 3,
      seed: s
    }), j = /* @__PURE__ */ B.path(/* @__PURE__ */ Q(b, S2, x, y, 0), R);
    $ = /* @__PURE__ */ p.insert(() => (tt$1.debug("Rough node insert CXC", j), j), ":first-child"), $.select("path:nth-child(2)").attr("style", /* @__PURE__ */ i.join(";")), $.select("path").attr("style", /* @__PURE__ */ l.join(";").replace("fill", "stroke"));
  } else $ = /* @__PURE__ */ p.insert("rect", ":first-child"), $.attr("style", h).attr("rx", t.rx).attr("ry", t.ry).attr("x", b).attr("y", S2).attr("width", x).attr("height", y);
  let { subGraphTitleTopMargin: w } = n(o);
  if (m.attr("transform", `translate(${t.x - d.width / 2}, ${t.y - t.height / 2 + w})`), e) {
    let B = /* @__PURE__ */ m.select("span");
    B && B.attr("style", e);
  }
  let C = /* @__PURE__ */ $.node().getBBox();
  return t.offsetX = 0, t.width = C.width, t.height = C.height, t.offsetY = d.height - t.padding / 2, t.intersect = function(B) {
    return lt(t, B);
  }, {
    cluster: p,
    labelBBox: d
  };
}, "rect"), Us = /* @__PURE__ */ m$1((n2, t) => {
  let o = /* @__PURE__ */ n2.insert("g").attr("class", "note-cluster").attr("id", t.id), r = /* @__PURE__ */ o.insert("rect", ":first-child"), s = 0 * t.padding, a = s / 2;
  r.attr("rx", t.rx).attr("ry", t.ry).attr("x", t.x - t.width / 2 - a).attr("y", t.y - t.height / 2 - a).attr("width", t.width + s).attr("height", t.height + s).attr("fill", "none");
  let c = /* @__PURE__ */ r.node().getBBox();
  return t.width = c.width, t.height = c.height, t.intersect = function(e) {
    return lt(t, e);
  }, {
    cluster: o,
    labelBBox: {
      width: 0,
      height: 0
    }
  };
}, "noteGroup"), Qs = /* @__PURE__ */ m$1(async (n2, t) => {
  let o = /* @__PURE__ */ Wl(), { themeVariables: r, handDrawnSeed: s } = o, { altBackground: a, compositeBackground: c, compositeTitleBackground: e, nodeBorder: h } = r, i = /* @__PURE__ */ n2.insert("g").attr("class", t.cssClasses).attr("id", t.id).attr("data-id", t.id).attr("data-look", t.look), l = /* @__PURE__ */ i.insert("g", ":first-child"), p = /* @__PURE__ */ i.insert("g").attr("class", "cluster-label"), f = /* @__PURE__ */ i.append("rect"), m = /* @__PURE__ */ p.node().appendChild(await St(t.label, t.labelStyle, void 0, true)), g = /* @__PURE__ */ m.getBBox();
  if (uf(o.flowchart.htmlLabels)) {
    let j = m.children[0], A = /* @__PURE__ */ rh(m);
    g = /* @__PURE__ */ j.getBoundingClientRect(), A.attr("width", g.width), A.attr("height", g.height);
  }
  let d = 0 * t.padding, x = d / 2, y = (t.width <= g.width + t.padding ? g.width + t.padding : t.width) + d;
  t.width <= g.width + t.padding ? t.diff = (y - t.width) / 2 - t.padding : t.diff = -t.padding;
  let b = t.height + d, S2 = t.height + d - g.height - 6, $ = t.x - y / 2, w = t.y - b / 2;
  t.width = y;
  let C = t.y - t.height / 2 - x + g.height + 2, B;
  if (t.look === "handDrawn") {
    let j = /* @__PURE__ */ t.cssClasses.includes("statediagram-cluster-alt"), A = /* @__PURE__ */ D.svg(i), O = t.rx || t.ry ? A.path(/* @__PURE__ */ Q($, w, y, b, 10), {
      roughness: 0.7,
      fill: e,
      fillStyle: "solid",
      stroke: h,
      seed: s
    }) : A.rectangle($, w, y, b, {
      seed: s
    });
    B = /* @__PURE__ */ i.insert(() => O, ":first-child");
    let W = /* @__PURE__ */ A.rectangle($, C, y, S2, {
      fill: j ? a : c,
      fillStyle: j ? "hachure" : "solid",
      stroke: h,
      seed: s
    });
    B = /* @__PURE__ */ i.insert(() => O, ":first-child"), f = /* @__PURE__ */ i.insert(() => W);
  } else B = /* @__PURE__ */ l.insert("rect", ":first-child"), B.attr("class", "outer").attr("x", $).attr("y", w).attr("width", y).attr("height", b).attr("data-look", t.look), f.attr("class", "inner").attr("x", $).attr("y", C).attr("width", y).attr("height", S2);
  p.attr("transform", `translate(${t.x - g.width / 2}, ${w + 1 - (uf(o.flowchart.htmlLabels) ? 0 : 3)})`);
  let R = /* @__PURE__ */ B.node().getBBox();
  return t.height = R.height, t.offsetX = 0, t.offsetY = g.height - t.padding / 2, t.labelBBox = g, t.intersect = function(j) {
    return lt(t, j);
  }, {
    cluster: i,
    labelBBox: g
  };
}, "roundedWithTitle"), Js = /* @__PURE__ */ m$1(async (n$1, t) => {
  tt$1.info("Creating subgraph rect for ", t.id, t);
  let o = /* @__PURE__ */ Wl(), { themeVariables: r, handDrawnSeed: s } = o, { clusterBkg: a, clusterBorder: c } = r, { labelStyles: e, nodeStyles: h, borderStyles: i, backgroundStyles: l } = k(t), p = /* @__PURE__ */ n$1.insert("g").attr("class", "cluster " + t.cssClasses).attr("id", t.id).attr("data-look", t.look), f = /* @__PURE__ */ uf(o.flowchart.htmlLabels), m = /* @__PURE__ */ p.insert("g").attr("class", "cluster-label "), g = await Zt$1(m, t.label, {
    style: t.labelStyle,
    useHtmlLabels: f,
    isNode: true,
    width: t.width
  }), d = /* @__PURE__ */ g.getBBox();
  if (uf(o.flowchart.htmlLabels)) {
    let B = g.children[0], R = /* @__PURE__ */ rh(g);
    d = /* @__PURE__ */ B.getBoundingClientRect(), R.attr("width", d.width), R.attr("height", d.height);
  }
  let x = t.width <= d.width + t.padding ? d.width + t.padding : t.width;
  t.width <= d.width + t.padding ? t.diff = (x - t.width) / 2 - t.padding : t.diff = -t.padding;
  let y = t.height, b = t.x - x / 2, S2 = t.y - y / 2;
  tt$1.trace("Data ", t, /* @__PURE__ */ JSON.stringify(t));
  let $;
  if (t.look === "handDrawn") {
    let B = /* @__PURE__ */ D.svg(p), R = /* @__PURE__ */ M(t, {
      roughness: 0.7,
      fill: a,
      stroke: c,
      fillWeight: 4,
      seed: s
    }), j = /* @__PURE__ */ B.path(/* @__PURE__ */ Q(b, S2, x, y, t.rx), R);
    $ = /* @__PURE__ */ p.insert(() => (tt$1.debug("Rough node insert CXC", j), j), ":first-child"), $.select("path:nth-child(2)").attr("style", /* @__PURE__ */ i.join(";")), $.select("path").attr("style", /* @__PURE__ */ l.join(";").replace("fill", "stroke"));
  } else $ = /* @__PURE__ */ p.insert("rect", ":first-child"), $.attr("style", h).attr("rx", t.rx).attr("ry", t.ry).attr("x", b).attr("y", S2).attr("width", x).attr("height", y);
  let { subGraphTitleTopMargin: w } = n(o);
  if (m.attr("transform", `translate(${t.x - d.width / 2}, ${t.y - t.height / 2 + w})`), e) {
    let B = /* @__PURE__ */ m.select("span");
    B && B.attr("style", e);
  }
  let C = /* @__PURE__ */ $.node().getBBox();
  return t.offsetX = 0, t.width = C.width, t.height = C.height, t.offsetY = d.height - t.padding / 2, t.intersect = function(B) {
    return lt(t, B);
  }, {
    cluster: p,
    labelBBox: d
  };
}, "kanbanSection"), Ks = /* @__PURE__ */ m$1((n2, t) => {
  let o = /* @__PURE__ */ Wl(), { themeVariables: r, handDrawnSeed: s } = o, { nodeBorder: a } = r, c = /* @__PURE__ */ n2.insert("g").attr("class", t.cssClasses).attr("id", t.id).attr("data-look", t.look), e = /* @__PURE__ */ c.insert("g", ":first-child"), h = 0 * t.padding, i = t.width + h;
  t.diff = -t.padding;
  let l = t.height + h, p = t.x - i / 2, f = t.y - l / 2;
  t.width = i;
  let m;
  if (t.look === "handDrawn") {
    let x = /* @__PURE__ */ D.svg(c).rectangle(p, f, i, l, {
      fill: "lightgrey",
      roughness: 0.5,
      strokeLineDash: [
        5
      ],
      stroke: a,
      seed: s
    });
    m = /* @__PURE__ */ c.insert(() => x, ":first-child");
  } else m = /* @__PURE__ */ e.insert("rect", ":first-child"), m.attr("class", "divider").attr("x", p).attr("y", f).attr("width", i).attr("height", l).attr("data-look", t.look);
  let g = /* @__PURE__ */ m.node().getBBox();
  return t.height = g.height, t.offsetX = 0, t.offsetY = 0, t.intersect = function(d) {
    return lt(t, d);
  }, {
    cluster: c,
    labelBBox: {}
  };
}, "divider"), tr = Me, er = {
  rect: Me,
  squareRect: tr,
  roundedWithTitle: Qs,
  noteGroup: Us,
  divider: Ks,
  kanbanSection: Js
}, ve = /* @__PURE__ */ new Map(), ro = /* @__PURE__ */ m$1(async (n2, t) => {
  let o = t.shape || "rect", r = await er[o](n2, t);
  return ve.set(t.id, r), r;
}, "insertCluster");
var oo = /* @__PURE__ */ m$1(() => {
  ve = /* @__PURE__ */ new Map();
}, "clear");
function sr(n2, t) {
  return n2.intersect(t);
}
m$1(sr, "intersectNode");
var ke = sr;
function rr(n2, t, o, r) {
  var s = n2.x, a = n2.y, c = s - r.x, e = a - r.y, h = /* @__PURE__ */ Math.sqrt(t * t * e * e + o * o * c * c), i = /* @__PURE__ */ Math.abs(t * o * c / h);
  r.x < s && (i = -i);
  var l = /* @__PURE__ */ Math.abs(t * o * e / h);
  return r.y < a && (l = -l), {
    x: s + i,
    y: a + l
  };
}
m$1(rr, "intersectEllipse");
var jt = rr;
function or(n2, t, o) {
  return jt(n2, t, t, o);
}
m$1(or, "intersectCircle");
var $e = or;
function ar(n2, t, o, r) {
  var s, a, c, e, h, i, l, p, f, m, g, d, x, y, b;
  if (s = t.y - n2.y, c = n2.x - t.x, h = t.x * n2.y - n2.x * t.y, f = s * o.x + c * o.y + h, m = s * r.x + c * r.y + h, !(f !== 0 && m !== 0 && Pe(f, m)) && (a = r.y - o.y, e = o.x - r.x, i = r.x * o.y - o.x * r.y, l = a * n2.x + e * n2.y + i, p = a * t.x + e * t.y + i, !(l !== 0 && p !== 0 && Pe(l, p)) && (g = s * e - a * c, g !== 0))) return d = /* @__PURE__ */ Math.abs(g / 2), x = c * i - e * h, y = x < 0 ? (x - d) / g : (x + d) / g, x = a * h - s * i, b = x < 0 ? (x - d) / g : (x + d) / g, {
    x: y,
    y: b
  };
}
m$1(ar, "intersectLine");
function Pe(n2, t) {
  return n2 * t > 0;
}
m$1(Pe, "sameSign");
var Te = ar;
function ir(n2, t, o) {
  let r = n2.x, s = n2.y, a = [], c = Number.POSITIVE_INFINITY, e = Number.POSITIVE_INFINITY;
  typeof t.forEach == "function" ? t.forEach(function(l) {
    c = /* @__PURE__ */ Math.min(c, l.x), e = /* @__PURE__ */ Math.min(e, l.y);
  }) : (c = /* @__PURE__ */ Math.min(c, t.x), e = /* @__PURE__ */ Math.min(e, t.y));
  let h = r - n2.width / 2 - c, i = s - n2.height / 2 - e;
  for (let l = 0; l < t.length; l++) {
    let p = t[l], f = t[l < t.length - 1 ? l + 1 : 0], m = /* @__PURE__ */ Te(n2, o, {
      x: h + p.x,
      y: i + p.y
    }, {
      x: h + f.x,
      y: i + f.y
    });
    m && a.push(m);
  }
  return a.length ? (a.length > 1 && a.sort(function(l, p) {
    let f = l.x - o.x, m = l.y - o.y, g = /* @__PURE__ */ Math.sqrt(f * f + m * m), d = p.x - o.x, x = p.y - o.y, y = /* @__PURE__ */ Math.sqrt(d * d + x * x);
    return g < y ? -1 : g === y ? 0 : 1;
  }), a[0]) : n2;
}
m$1(ir, "intersectPolygon");
var Ce = ir;
var N = {
  node: ke,
  circle: $e,
  ellipse: jt,
  polygon: Ce,
  rect: lt
};
function Be(n2, t) {
  let { labelStyles: o } = k(t);
  t.labelStyle = o;
  let r = /* @__PURE__ */ P(t), s = r;
  r || (s = "anchor");
  let a = /* @__PURE__ */ n2.insert("g").attr("class", s).attr("id", t.domId || t.id), c = 1, { cssStyles: e } = t, h = /* @__PURE__ */ D.svg(a), i = /* @__PURE__ */ M(t, {
    fill: "black",
    stroke: "none",
    fillStyle: "solid"
  });
  t.look !== "handDrawn" && (i.roughness = 0);
  let l = /* @__PURE__ */ h.circle(0, 0, c * 2, i), p = /* @__PURE__ */ a.insert(() => l, ":first-child");
  return p.attr("class", "anchor").attr("style", /* @__PURE__ */ Je$1(e)), v(t, p), t.intersect = function(f) {
    return tt$1.info("Circle intersect", t, c, f), N.circle(t, c, f);
  }, a;
}
m$1(Be, "anchor");
function Re(n2, t, o, r, s, a, c) {
  let h = (n2 + o) / 2, i = (t + r) / 2, l = /* @__PURE__ */ Math.atan2(r - t, o - n2), p = (o - n2) / 2, f = (r - t) / 2, m = p / s, g = f / a, d = /* @__PURE__ */ Math.sqrt(m ** 2 + g ** 2);
  if (d > 1) throw new Error("The given radii are too small to create an arc between the points.");
  let x = /* @__PURE__ */ Math.sqrt(1 - d ** 2), y = h + x * a * Math.sin(l) * (c ? -1 : 1), b = i - x * s * Math.cos(l) * (c ? -1 : 1), S2 = /* @__PURE__ */ Math.atan2((t - b) / a, (n2 - y) / s), w = Math.atan2((r - b) / a, (o - y) / s) - S2;
  c && w < 0 && (w += 2 * Math.PI), !c && w > 0 && (w -= 2 * Math.PI);
  let C = [];
  for (let B = 0; B < 20; B++) {
    let R = B / 19, j = S2 + R * w, A = y + s * Math.cos(j), O = b + a * Math.sin(j);
    C.push({
      x: A,
      y: O
    });
  }
  return C;
}
m$1(Re, "generateArcPoints");
async function Ge(n2, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: s, bbox: a } = await T(n2, t, /* @__PURE__ */ P(t)), c = a.width + t.padding + 20, e = a.height + t.padding, h = e / 2, i = h / (2.5 + e / 50), { cssStyles: l } = t, p = [
    {
      x: c / 2,
      y: -e / 2
    },
    {
      x: -c / 2,
      y: -e / 2
    },
    .../* @__PURE__ */ Re(-c / 2, -e / 2, -c / 2, e / 2, i, h, false),
    {
      x: c / 2,
      y: e / 2
    },
    .../* @__PURE__ */ Re(c / 2, e / 2, c / 2, -e / 2, i, h, true)
  ], f = /* @__PURE__ */ D.svg(s), m = /* @__PURE__ */ M(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  let g = /* @__PURE__ */ H(p), d = /* @__PURE__ */ f.path(g, m), x = /* @__PURE__ */ s.insert(() => d, ":first-child");
  return x.attr("class", "basic label-container"), l && t.look !== "handDrawn" && x.selectAll("path").attr("style", l), r && t.look !== "handDrawn" && x.selectAll("path").attr("style", r), x.attr("transform", `translate(${i / 2}, 0)`), v(t, x), t.intersect = function(y) {
    return N.polygon(t, p, y);
  }, s;
}
m$1(Ge, "bowTieRect");
function J(n2, t, o, r) {
  return n2.insert("polygon", ":first-child").attr("points", /* @__PURE__ */ r.map(function(s) {
    return s.x + "," + s.y;
  }).join(" ")).attr("class", "label-container").attr("transform", "translate(" + -t / 2 + "," + o / 2 + ")");
}
m$1(J, "insertPolygonShape");
async function je(n2, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: s, bbox: a } = await T(n2, t, /* @__PURE__ */ P(t)), c = a.height + t.padding, e = 12, h = a.width + t.padding + e, i = 0, l = h, p = -c, f = 0, m = [
    {
      x: i + e,
      y: p
    },
    {
      x: l,
      y: p
    },
    {
      x: l,
      y: f
    },
    {
      x: i,
      y: f
    },
    {
      x: i,
      y: p + e
    },
    {
      x: i + e,
      y: p
    }
  ], g, { cssStyles: d } = t;
  if (t.look === "handDrawn") {
    let x = /* @__PURE__ */ D.svg(s), y = /* @__PURE__ */ M(t, {}), b = /* @__PURE__ */ H(m), S2 = /* @__PURE__ */ x.path(b, y);
    g = /* @__PURE__ */ s.insert(() => S2, ":first-child").attr("transform", `translate(${-h / 2}, ${c / 2})`), d && g.attr("style", d);
  } else g = /* @__PURE__ */ J(s, h, c, m);
  return r && g.attr("style", r), v(t, g), t.intersect = function(x) {
    return N.polygon(t, m, x);
  }, s;
}
m$1(je, "card");
function Ee(n2, t) {
  let { nodeStyles: o } = k(t);
  t.label = "";
  let r = /* @__PURE__ */ n2.insert("g").attr("class", /* @__PURE__ */ P(t)).attr("id", t.domId ?? t.id), { cssStyles: s } = t, a = /* @__PURE__ */ Math.max(28, t.width ?? 0), c = [
    {
      x: 0,
      y: a / 2
    },
    {
      x: a / 2,
      y: 0
    },
    {
      x: 0,
      y: -a / 2
    },
    {
      x: -a / 2,
      y: 0
    }
  ], e = /* @__PURE__ */ D.svg(r), h = /* @__PURE__ */ M(t, {});
  t.look !== "handDrawn" && (h.roughness = 0, h.fillStyle = "solid");
  let i = /* @__PURE__ */ H(c), l = /* @__PURE__ */ e.path(i, h), p = /* @__PURE__ */ r.insert(() => l, ":first-child");
  return s && t.look !== "handDrawn" && p.selectAll("path").attr("style", s), o && t.look !== "handDrawn" && p.selectAll("path").attr("style", o), t.width = 28, t.height = 28, t.intersect = function(f) {
    return N.polygon(t, c, f);
  }, r;
}
m$1(Ee, "choice");
async function Ae(n2, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: s, bbox: a, halfPadding: c } = await T(n2, t, /* @__PURE__ */ P(t)), e = a.width / 2 + c, h, { cssStyles: i } = t;
  if (t.look === "handDrawn") {
    let l = /* @__PURE__ */ D.svg(s), p = /* @__PURE__ */ M(t, {}), f = /* @__PURE__ */ l.circle(0, 0, e * 2, p);
    h = /* @__PURE__ */ s.insert(() => f, ":first-child"), h.attr("class", "basic label-container").attr("style", /* @__PURE__ */ Je$1(i));
  } else h = /* @__PURE__ */ s.insert("circle", ":first-child").attr("class", "basic label-container").attr("style", r).attr("r", e).attr("cx", 0).attr("cy", 0);
  return v(t, h), t.intersect = function(l) {
    return tt$1.info("Circle intersect", t, e, l), N.circle(t, e, l);
  }, s;
}
m$1(Ae, "circle");
function nr(n2) {
  let t = /* @__PURE__ */ Math.cos(Math.PI / 4), o = /* @__PURE__ */ Math.sin(Math.PI / 4), r = n2 * 2, s = {
    x: r / 2 * t,
    y: r / 2 * o
  }, a = {
    x: -(r / 2) * t,
    y: r / 2 * o
  }, c = {
    x: -(r / 2) * t,
    y: -(r / 2) * o
  }, e = {
    x: r / 2 * t,
    y: -(r / 2) * o
  };
  return `M ${a.x},${a.y} L ${e.x},${e.y}
                   M ${s.x},${s.y} L ${c.x},${c.y}`;
}
m$1(nr, "createLine");
function Oe(n2, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o, t.label = "";
  let s = /* @__PURE__ */ n2.insert("g").attr("class", /* @__PURE__ */ P(t)).attr("id", t.domId ?? t.id), a = /* @__PURE__ */ Math.max(30, (t == null ? void 0 : t.width) ?? 0), { cssStyles: c } = t, e = /* @__PURE__ */ D.svg(s), h = /* @__PURE__ */ M(t, {});
  t.look !== "handDrawn" && (h.roughness = 0, h.fillStyle = "solid");
  let i = /* @__PURE__ */ e.circle(0, 0, a * 2, h), l = /* @__PURE__ */ nr(a), p = /* @__PURE__ */ e.path(l, h), f = /* @__PURE__ */ s.insert(() => i, ":first-child");
  return f.insert(() => p), c && t.look !== "handDrawn" && f.selectAll("path").attr("style", c), r && t.look !== "handDrawn" && f.selectAll("path").attr("style", r), v(t, f), t.intersect = function(m) {
    return tt$1.info("crossedCircle intersect", t, {
      radius: a,
      point: m
    }), N.circle(t, a, m);
  }, s;
}
m$1(Oe, "crossedCircle");
function ct(n2, t, o) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 100, s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 180;
  let c = [], e = s * Math.PI / 180, l = (a * Math.PI / 180 - e) / (r - 1);
  for (let p = 0; p < r; p++) {
    let f = e + p * l, m = n2 + o * Math.cos(f), g = t + o * Math.sin(f);
    c.push({
      x: -m,
      y: -g
    });
  }
  return c;
}
m$1(ct, "generateCirclePoints");
async function Le(n2, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: s, bbox: a, label: c } = await T(n2, t, /* @__PURE__ */ P(t)), e = a.width + (t.padding ?? 0), h = a.height + (t.padding ?? 0), i = /* @__PURE__ */ Math.max(5, h * 0.1), { cssStyles: l } = t, p = [
    .../* @__PURE__ */ ct(e / 2, -h / 2, i, 30, -90, 0),
    {
      x: -e / 2 - i,
      y: i
    },
    .../* @__PURE__ */ ct(e / 2 + i * 2, -i, i, 20, -180, -270),
    .../* @__PURE__ */ ct(e / 2 + i * 2, i, i, 20, -90, -180),
    {
      x: -e / 2 - i,
      y: -h / 2
    },
    .../* @__PURE__ */ ct(e / 2, h / 2, i, 20, 0, 90)
  ], f = [
    {
      x: e / 2,
      y: -h / 2 - i
    },
    {
      x: -e / 2,
      y: -h / 2 - i
    },
    .../* @__PURE__ */ ct(e / 2, -h / 2, i, 20, -90, 0),
    {
      x: -e / 2 - i,
      y: -i
    },
    .../* @__PURE__ */ ct(e / 2 + e * 0.1, -i, i, 20, -180, -270),
    .../* @__PURE__ */ ct(e / 2 + e * 0.1, i, i, 20, -90, -180),
    {
      x: -e / 2 - i,
      y: h / 2
    },
    .../* @__PURE__ */ ct(e / 2, h / 2, i, 20, 0, 90),
    {
      x: -e / 2,
      y: h / 2 + i
    },
    {
      x: e / 2,
      y: h / 2 + i
    }
  ], m = /* @__PURE__ */ D.svg(s), g = /* @__PURE__ */ M(t, {
    fill: "none"
  });
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  let x = /* @__PURE__ */ H(p).replace("Z", ""), y = /* @__PURE__ */ m.path(x, g), b = /* @__PURE__ */ H(f), S2 = /* @__PURE__ */ m.path(b, {
    ...g
  }), $ = /* @__PURE__ */ s.insert("g", ":first-child");
  return $.insert(() => S2, ":first-child").attr("stroke-opacity", 0), $.insert(() => y, ":first-child"), $.attr("class", "text"), l && t.look !== "handDrawn" && $.selectAll("path").attr("style", l), r && t.look !== "handDrawn" && $.selectAll("path").attr("style", r), $.attr("transform", `translate(${i}, 0)`), c.attr("transform", `translate(${-e / 2 + i - (a.x - (a.left ?? 0))},${-h / 2 + (t.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`), v(t, $), t.intersect = function(w) {
    return N.polygon(t, f, w);
  }, s;
}
m$1(Le, "curlyBraceLeft");
function ht(n2, t, o) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 100, s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 180;
  let c = [], e = s * Math.PI / 180, l = (a * Math.PI / 180 - e) / (r - 1);
  for (let p = 0; p < r; p++) {
    let f = e + p * l, m = n2 + o * Math.cos(f), g = t + o * Math.sin(f);
    c.push({
      x: m,
      y: g
    });
  }
  return c;
}
m$1(ht, "generateCirclePoints");
async function He(n2, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: s, bbox: a, label: c } = await T(n2, t, /* @__PURE__ */ P(t)), e = a.width + (t.padding ?? 0), h = a.height + (t.padding ?? 0), i = /* @__PURE__ */ Math.max(5, h * 0.1), { cssStyles: l } = t, p = [
    .../* @__PURE__ */ ht(e / 2, -h / 2, i, 20, -90, 0),
    {
      x: e / 2 + i,
      y: -i
    },
    .../* @__PURE__ */ ht(e / 2 + i * 2, -i, i, 20, -180, -270),
    .../* @__PURE__ */ ht(e / 2 + i * 2, i, i, 20, -90, -180),
    {
      x: e / 2 + i,
      y: h / 2
    },
    .../* @__PURE__ */ ht(e / 2, h / 2, i, 20, 0, 90)
  ], f = [
    {
      x: -e / 2,
      y: -h / 2 - i
    },
    {
      x: e / 2,
      y: -h / 2 - i
    },
    .../* @__PURE__ */ ht(e / 2, -h / 2, i, 20, -90, 0),
    {
      x: e / 2 + i,
      y: -i
    },
    .../* @__PURE__ */ ht(e / 2 + i * 2, -i, i, 20, -180, -270),
    .../* @__PURE__ */ ht(e / 2 + i * 2, i, i, 20, -90, -180),
    {
      x: e / 2 + i,
      y: h / 2
    },
    .../* @__PURE__ */ ht(e / 2, h / 2, i, 20, 0, 90),
    {
      x: e / 2,
      y: h / 2 + i
    },
    {
      x: -e / 2,
      y: h / 2 + i
    }
  ], m = /* @__PURE__ */ D.svg(s), g = /* @__PURE__ */ M(t, {
    fill: "none"
  });
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  let x = /* @__PURE__ */ H(p).replace("Z", ""), y = /* @__PURE__ */ m.path(x, g), b = /* @__PURE__ */ H(f), S2 = /* @__PURE__ */ m.path(b, {
    ...g
  }), $ = /* @__PURE__ */ s.insert("g", ":first-child");
  return $.insert(() => S2, ":first-child").attr("stroke-opacity", 0), $.insert(() => y, ":first-child"), $.attr("class", "text"), l && t.look !== "handDrawn" && $.selectAll("path").attr("style", l), r && t.look !== "handDrawn" && $.selectAll("path").attr("style", r), $.attr("transform", `translate(${-i}, 0)`), c.attr("transform", `translate(${-e / 2 + (t.padding ?? 0) / 2 - (a.x - (a.left ?? 0))},${-h / 2 + (t.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`), v(t, $), t.intersect = function(w) {
    return N.polygon(t, f, w);
  }, s;
}
m$1(He, "curlyBraceRight");
function K(n2, t, o) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 100, s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 180;
  let c = [], e = s * Math.PI / 180, l = (a * Math.PI / 180 - e) / (r - 1);
  for (let p = 0; p < r; p++) {
    let f = e + p * l, m = n2 + o * Math.cos(f), g = t + o * Math.sin(f);
    c.push({
      x: -m,
      y: -g
    });
  }
  return c;
}
m$1(K, "generateCirclePoints");
async function Ve(n2, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: s, bbox: a, label: c } = await T(n2, t, /* @__PURE__ */ P(t)), e = a.width + (t.padding ?? 0), h = a.height + (t.padding ?? 0), i = /* @__PURE__ */ Math.max(5, h * 0.1), { cssStyles: l } = t, p = [
    .../* @__PURE__ */ K(e / 2, -h / 2, i, 30, -90, 0),
    {
      x: -e / 2 - i,
      y: i
    },
    .../* @__PURE__ */ K(e / 2 + i * 2, -i, i, 20, -180, -270),
    .../* @__PURE__ */ K(e / 2 + i * 2, i, i, 20, -90, -180),
    {
      x: -e / 2 - i,
      y: -h / 2
    },
    .../* @__PURE__ */ K(e / 2, h / 2, i, 20, 0, 90)
  ], f = [
    .../* @__PURE__ */ K(-e / 2 + i + i / 2, -h / 2, i, 20, -90, -180),
    {
      x: e / 2 - i / 2,
      y: i
    },
    .../* @__PURE__ */ K(-e / 2 - i / 2, -i, i, 20, 0, 90),
    .../* @__PURE__ */ K(-e / 2 - i / 2, i, i, 20, -90, 0),
    {
      x: e / 2 - i / 2,
      y: -i
    },
    .../* @__PURE__ */ K(-e / 2 + i + i / 2, h / 2, i, 30, -180, -270)
  ], m = [
    {
      x: e / 2,
      y: -h / 2 - i
    },
    {
      x: -e / 2,
      y: -h / 2 - i
    },
    .../* @__PURE__ */ K(e / 2, -h / 2, i, 20, -90, 0),
    {
      x: -e / 2 - i,
      y: -i
    },
    .../* @__PURE__ */ K(e / 2 + i * 2, -i, i, 20, -180, -270),
    .../* @__PURE__ */ K(e / 2 + i * 2, i, i, 20, -90, -180),
    {
      x: -e / 2 - i,
      y: h / 2
    },
    .../* @__PURE__ */ K(e / 2, h / 2, i, 20, 0, 90),
    {
      x: -e / 2,
      y: h / 2 + i
    },
    {
      x: e / 2 - i - i / 2,
      y: h / 2 + i
    },
    .../* @__PURE__ */ K(-e / 2 + i + i / 2, -h / 2, i, 20, -90, -180),
    {
      x: e / 2 - i / 2,
      y: i
    },
    .../* @__PURE__ */ K(-e / 2 - i / 2, -i, i, 20, 0, 90),
    .../* @__PURE__ */ K(-e / 2 - i / 2, i, i, 20, -90, 0),
    {
      x: e / 2 - i / 2,
      y: -i
    },
    .../* @__PURE__ */ K(-e / 2 + i + i / 2, h / 2, i, 30, -180, -270)
  ], g = /* @__PURE__ */ D.svg(s), d = /* @__PURE__ */ M(t, {
    fill: "none"
  });
  t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
  let y = /* @__PURE__ */ H(p).replace("Z", ""), b = /* @__PURE__ */ g.path(y, d), $ = /* @__PURE__ */ H(f).replace("Z", ""), w = /* @__PURE__ */ g.path($, d), C = /* @__PURE__ */ H(m), B = /* @__PURE__ */ g.path(C, {
    ...d
  }), R = /* @__PURE__ */ s.insert("g", ":first-child");
  return R.insert(() => B, ":first-child").attr("stroke-opacity", 0), R.insert(() => b, ":first-child"), R.insert(() => w, ":first-child"), R.attr("class", "text"), l && t.look !== "handDrawn" && R.selectAll("path").attr("style", l), r && t.look !== "handDrawn" && R.selectAll("path").attr("style", r), R.attr("transform", `translate(${i - i / 4}, 0)`), c.attr("transform", `translate(${-e / 2 + (t.padding ?? 0) / 2 - (a.x - (a.left ?? 0))},${-h / 2 + (t.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`), v(t, R), t.intersect = function(j) {
    return N.polygon(t, m, j);
  }, s;
}
m$1(Ve, "curlyBraces");
async function We(n2, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: s, bbox: a } = await T(n2, t, /* @__PURE__ */ P(t)), c = 80, e = 20, h = /* @__PURE__ */ Math.max(c, (a.width + (t.padding ?? 0) * 2) * 1.25, (t == null ? void 0 : t.width) ?? 0), i = /* @__PURE__ */ Math.max(e, a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), l = i / 2, { cssStyles: p } = t, f = /* @__PURE__ */ D.svg(s), m = /* @__PURE__ */ M(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  let g = h, d = i, x = g - l, y = d / 4, b = [
    {
      x,
      y: 0
    },
    {
      x: y,
      y: 0
    },
    {
      x: 0,
      y: d / 2
    },
    {
      x: y,
      y: d
    },
    {
      x,
      y: d
    },
    .../* @__PURE__ */ Mt(-x, -d / 2, l, 50, 270, 90)
  ], S2 = /* @__PURE__ */ H(b), $ = /* @__PURE__ */ f.path(S2, m), w = /* @__PURE__ */ s.insert(() => $, ":first-child");
  return w.attr("class", "basic label-container"), p && t.look !== "handDrawn" && w.selectChildren("path").attr("style", p), r && t.look !== "handDrawn" && w.selectChildren("path").attr("style", r), w.attr("transform", `translate(${-h / 2}, ${-i / 2})`), v(t, w), t.intersect = function(C) {
    return N.polygon(t, b, C);
  }, s;
}
m$1(We, "curvedTrapezoid");
var lr = /* @__PURE__ */ m$1((n2, t, o, r, s, a) => [
  `M${n2},${t + a}`,
  `a${s},${a} 0,0,0 ${o},0`,
  `a${s},${a} 0,0,0 ${-o},0`,
  `l0,${r}`,
  `a${s},${a} 0,0,0 ${o},0`,
  `l0,${-r}`
].join(" "), "createCylinderPathD"), cr = /* @__PURE__ */ m$1((n2, t, o, r, s, a) => [
  `M${n2},${t + a}`,
  `M${n2 + o},${t + a}`,
  `a${s},${a} 0,0,0 ${-o},0`,
  `l0,${r}`,
  `a${s},${a} 0,0,0 ${o},0`,
  `l0,${-r}`
].join(" "), "createOuterCylinderPathD"), hr = /* @__PURE__ */ m$1((n2, t, o, r, s, a) => [
  `M${n2 - o / 2},${-r / 2}`,
  `a${s},${a} 0,0,0 ${o},0`
].join(" "), "createInnerCylinderPathD");
async function Ie(n2, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: s, bbox: a, label: c } = await T(n2, t, /* @__PURE__ */ P(t)), e = /* @__PURE__ */ Math.max(a.width + t.padding, t.width ?? 0), h = e / 2, i = h / (2.5 + e / 50), l = /* @__PURE__ */ Math.max(a.height + i + t.padding, t.height ?? 0), p, { cssStyles: f } = t;
  if (t.look === "handDrawn") {
    let m = /* @__PURE__ */ D.svg(s), g = /* @__PURE__ */ cr(0, 0, e, l, h, i), d = /* @__PURE__ */ hr(0, i, e, l, h, i), x = /* @__PURE__ */ m.path(g, /* @__PURE__ */ M(t, {})), y = /* @__PURE__ */ m.path(d, /* @__PURE__ */ M(t, {
      fill: "none"
    }));
    p = /* @__PURE__ */ s.insert(() => y, ":first-child"), p = /* @__PURE__ */ s.insert(() => x, ":first-child"), p.attr("class", "basic label-container"), f && p.attr("style", f);
  } else {
    let m = /* @__PURE__ */ lr(0, 0, e, l, h, i);
    p = /* @__PURE__ */ s.insert("path", ":first-child").attr("d", m).attr("class", "basic label-container").attr("style", /* @__PURE__ */ Je$1(f)).attr("style", r);
  }
  return p.attr("label-offset-y", i), p.attr("transform", `translate(${-e / 2}, ${-(l / 2 + i)})`), v(t, p), c.attr("transform", `translate(${-(a.width / 2) - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + (t.padding ?? 0) / 1.5 - (a.y - (a.top ?? 0))})`), t.intersect = function(m) {
    let g = /* @__PURE__ */ N.rect(t, m), d = g.x - (t.x ?? 0);
    if (h != 0 && (Math.abs(d) < (t.width ?? 0) / 2 || Math.abs(d) == (t.width ?? 0) / 2 && Math.abs(g.y - (t.y ?? 0)) > (t.height ?? 0) / 2 - i)) {
      let x = i * i * (1 - d * d / (h * h));
      x > 0 && (x = /* @__PURE__ */ Math.sqrt(x)), x = i - x, m.y - (t.y ?? 0) > 0 && (x = -x), g.y += x;
    }
    return g;
  }, s;
}
m$1(Ie, "cylinder");
async function Fe(n2, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: s, bbox: a, label: c } = await T(n2, t, /* @__PURE__ */ P(t)), e = a.width + t.padding, h = a.height + t.padding, i = h * 0.2, l = -e / 2, p = -h / 2 - i / 2, { cssStyles: f } = t, m = /* @__PURE__ */ D.svg(s), g = /* @__PURE__ */ M(t, {});
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  let d = [
    {
      x: l,
      y: p + i
    },
    {
      x: -l,
      y: p + i
    },
    {
      x: -l,
      y: -p
    },
    {
      x: l,
      y: -p
    },
    {
      x: l,
      y: p
    },
    {
      x: -l,
      y: p
    },
    {
      x: -l,
      y: p + i
    }
  ], x = /* @__PURE__ */ m.polygon(/* @__PURE__ */ d.map((b) => [
    b.x,
    b.y
  ]), g), y = /* @__PURE__ */ s.insert(() => x, ":first-child");
  return y.attr("class", "basic label-container"), f && t.look !== "handDrawn" && y.selectAll("path").attr("style", f), r && t.look !== "handDrawn" && y.selectAll("path").attr("style", r), c.attr("transform", `translate(${l + (t.padding ?? 0) / 2 - (a.x - (a.left ?? 0))}, ${p + i + (t.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`), v(t, y), t.intersect = function(b) {
    return N.rect(t, b);
  }, s;
}
m$1(Fe, "dividedRectangle");
async function _e(n2, t) {
  var _a2, _b2;
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: s, bbox: a, halfPadding: c } = await T(n2, t, /* @__PURE__ */ P(t)), h = a.width / 2 + c + 5, i = a.width / 2 + c, l, { cssStyles: p } = t;
  if (t.look === "handDrawn") {
    let f = /* @__PURE__ */ D.svg(s), m = /* @__PURE__ */ M(t, {
      roughness: 0.2,
      strokeWidth: 2.5
    }), g = /* @__PURE__ */ M(t, {
      roughness: 0.2,
      strokeWidth: 1.5
    }), d = /* @__PURE__ */ f.circle(0, 0, h * 2, m), x = /* @__PURE__ */ f.circle(0, 0, i * 2, g);
    l = /* @__PURE__ */ s.insert("g", ":first-child"), l.attr("class", /* @__PURE__ */ Je$1(t.cssClasses)).attr("style", /* @__PURE__ */ Je$1(p)), (_a2 = l.node()) == null ? void 0 : _a2.appendChild(d), (_b2 = l.node()) == null ? void 0 : _b2.appendChild(x);
  } else {
    l = /* @__PURE__ */ s.insert("g", ":first-child");
    let f = /* @__PURE__ */ l.insert("circle", ":first-child"), m = /* @__PURE__ */ l.insert("circle");
    l.attr("class", "basic label-container").attr("style", r), f.attr("class", "outer-circle").attr("style", r).attr("r", h).attr("cx", 0).attr("cy", 0), m.attr("class", "inner-circle").attr("style", r).attr("r", i).attr("cx", 0).attr("cy", 0);
  }
  return v(t, l), t.intersect = function(f) {
    return tt$1.info("DoubleCircle intersect", t, h, f), N.circle(t, h, f);
  }, s;
}
m$1(_e, "doublecircle");
function ze(n2, t, param) {
  let { config: { themeVariables: o } } = param;
  let { labelStyles: r, nodeStyles: s } = k(t);
  t.label = "", t.labelStyle = r;
  let a = /* @__PURE__ */ n2.insert("g").attr("class", /* @__PURE__ */ P(t)).attr("id", t.domId ?? t.id), c = 7, { cssStyles: e } = t, h = /* @__PURE__ */ D.svg(a), { nodeBorder: i } = o, l = /* @__PURE__ */ M(t, {
    fillStyle: "solid"
  });
  t.look !== "handDrawn" && (l.roughness = 0);
  let p = /* @__PURE__ */ h.circle(0, 0, c * 2, l), f = /* @__PURE__ */ a.insert(() => p, ":first-child");
  return f.selectAll("path").attr("style", `fill: ${i} !important;`), e && e.length > 0 && t.look !== "handDrawn" && f.selectAll("path").attr("style", e), s && t.look !== "handDrawn" && f.selectAll("path").attr("style", s), v(t, f), t.intersect = function(m) {
    return tt$1.info("filledCircle intersect", t, {
      radius: c,
      point: m
    }), N.circle(t, c, m);
  }, a;
}
m$1(ze, "filledCircle");
async function qe(n2, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: s, bbox: a, label: c } = await T(n2, t, /* @__PURE__ */ P(t)), e = a.width + (t.padding ?? 0), h = e + a.height, i = e + a.height, l = [
    {
      x: 0,
      y: -h
    },
    {
      x: i,
      y: -h
    },
    {
      x: i / 2,
      y: 0
    }
  ], { cssStyles: p } = t, f = /* @__PURE__ */ D.svg(s), m = /* @__PURE__ */ M(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  let g = /* @__PURE__ */ H(l), d = /* @__PURE__ */ f.path(g, m), x = /* @__PURE__ */ s.insert(() => d, ":first-child").attr("transform", `translate(${-h / 2}, ${h / 2})`);
  return p && t.look !== "handDrawn" && x.selectChildren("path").attr("style", p), r && t.look !== "handDrawn" && x.selectChildren("path").attr("style", r), t.width = e, t.height = h, v(t, x), c.attr("transform", `translate(${-a.width / 2 - (a.x - (a.left ?? 0))}, ${-h / 2 + (t.padding ?? 0) / 2 + (a.y - (a.top ?? 0))})`), t.intersect = function(y) {
    return tt$1.info("Triangle intersect", t, l, y), N.polygon(t, l, y);
  }, s;
}
m$1(qe, "flippedTriangle");
function Xe(n2, t, param) {
  let { dir: o, config: { state: r, themeVariables: s } } = param;
  let { nodeStyles: a } = k(t);
  t.label = "";
  let c = /* @__PURE__ */ n2.insert("g").attr("class", /* @__PURE__ */ P(t)).attr("id", t.domId ?? t.id), { cssStyles: e } = t, h = /* @__PURE__ */ Math.max(70, (t == null ? void 0 : t.width) ?? 0), i = /* @__PURE__ */ Math.max(10, (t == null ? void 0 : t.height) ?? 0);
  o === "LR" && (h = /* @__PURE__ */ Math.max(10, (t == null ? void 0 : t.width) ?? 0), i = /* @__PURE__ */ Math.max(70, (t == null ? void 0 : t.height) ?? 0));
  let l = -1 * h / 2, p = -1 * i / 2, f = /* @__PURE__ */ D.svg(c), m = /* @__PURE__ */ M(t, {
    stroke: s.lineColor,
    fill: s.lineColor
  });
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  let g = /* @__PURE__ */ f.rectangle(l, p, h, i, m), d = /* @__PURE__ */ c.insert(() => g, ":first-child");
  e && t.look !== "handDrawn" && d.selectAll("path").attr("style", e), a && t.look !== "handDrawn" && d.selectAll("path").attr("style", a), v(t, d);
  let x = (r == null ? void 0 : r.padding) ?? 0;
  return t.width && t.height && (t.width += x / 2 || 0, t.height += x / 2 || 0), t.intersect = function(y) {
    return N.rect(t, y);
  }, c;
}
m$1(Xe, "forkJoin");
async function Ye(n2, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let s = 80, a = 50, { shapeSvg: c, bbox: e } = await T(n2, t, /* @__PURE__ */ P(t)), h = /* @__PURE__ */ Math.max(s, e.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), i = /* @__PURE__ */ Math.max(a, e.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), l = i / 2, { cssStyles: p } = t, f = /* @__PURE__ */ D.svg(c), m = /* @__PURE__ */ M(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  let g = [
    {
      x: -h / 2,
      y: -i / 2
    },
    {
      x: h / 2 - l,
      y: -i / 2
    },
    .../* @__PURE__ */ Mt(-h / 2 + l, 0, l, 50, 90, 270),
    {
      x: h / 2 - l,
      y: i / 2
    },
    {
      x: -h / 2,
      y: i / 2
    }
  ], d = /* @__PURE__ */ H(g), x = /* @__PURE__ */ f.path(d, m), y = /* @__PURE__ */ c.insert(() => x, ":first-child");
  return y.attr("class", "basic label-container"), p && t.look !== "handDrawn" && y.selectChildren("path").attr("style", p), r && t.look !== "handDrawn" && y.selectChildren("path").attr("style", r), v(t, y), t.intersect = function(b) {
    return tt$1.info("Pill intersect", t, {
      radius: l,
      point: b
    }), N.polygon(t, g, b);
  }, c;
}
m$1(Ye, "halfRoundedRectangle");
var pr = /* @__PURE__ */ m$1((n2, t, o, r, s) => [
  `M${n2 + s},${t}`,
  `L${n2 + o - s},${t}`,
  `L${n2 + o},${t - r / 2}`,
  `L${n2 + o - s},${t - r}`,
  `L${n2 + s},${t - r}`,
  `L${n2},${t - r / 2}`,
  "Z"
].join(" "), "createHexagonPathD");
async function Ze(n2, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: s, bbox: a } = await T(n2, t, /* @__PURE__ */ P(t)), c = 4, e = a.height + t.padding, h = e / c, i = a.width + 2 * h + t.padding, l = [
    {
      x: h,
      y: 0
    },
    {
      x: i - h,
      y: 0
    },
    {
      x: i,
      y: -e / 2
    },
    {
      x: i - h,
      y: -e
    },
    {
      x: h,
      y: -e
    },
    {
      x: 0,
      y: -e / 2
    }
  ], p, { cssStyles: f } = t;
  if (t.look === "handDrawn") {
    let m = /* @__PURE__ */ D.svg(s), g = /* @__PURE__ */ M(t, {}), d = /* @__PURE__ */ pr(0, 0, i, e, h), x = /* @__PURE__ */ m.path(d, g);
    p = /* @__PURE__ */ s.insert(() => x, ":first-child").attr("transform", `translate(${-i / 2}, ${e / 2})`), f && p.attr("style", f);
  } else p = /* @__PURE__ */ J(s, i, e, l);
  return r && p.attr("style", r), t.width = i, t.height = e, v(t, p), t.intersect = function(m) {
    return N.polygon(t, l, m);
  }, s;
}
m$1(Ze, "hexagon");
async function Ue(n2, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.label = "", t.labelStyle = o;
  let { shapeSvg: s } = await T(n2, t, /* @__PURE__ */ P(t)), a = /* @__PURE__ */ Math.max(30, (t == null ? void 0 : t.width) ?? 0), c = /* @__PURE__ */ Math.max(30, (t == null ? void 0 : t.height) ?? 0), { cssStyles: e } = t, h = /* @__PURE__ */ D.svg(s), i = /* @__PURE__ */ M(t, {});
  t.look !== "handDrawn" && (i.roughness = 0, i.fillStyle = "solid");
  let l = [
    {
      x: 0,
      y: 0
    },
    {
      x: a,
      y: 0
    },
    {
      x: 0,
      y: c
    },
    {
      x: a,
      y: c
    }
  ], p = /* @__PURE__ */ H(l), f = /* @__PURE__ */ h.path(p, i), m = /* @__PURE__ */ s.insert(() => f, ":first-child");
  return m.attr("class", "basic label-container"), e && t.look !== "handDrawn" && m.selectChildren("path").attr("style", e), r && t.look !== "handDrawn" && m.selectChildren("path").attr("style", r), m.attr("transform", `translate(${-a / 2}, ${-c / 2})`), v(t, m), t.intersect = function(g) {
    return tt$1.info("Pill intersect", t, {
      points: l
    }), N.polygon(t, l, g);
  }, s;
}
m$1(Ue, "hourglass");
async function Qe(n2, t, param) {
  let { config: { themeVariables: o, flowchart: r } } = param;
  let { labelStyles: s } = k(t);
  t.labelStyle = s;
  let a = t.assetHeight ?? 48, c = t.assetWidth ?? 48, e = /* @__PURE__ */ Math.max(a, c), h = r == null ? void 0 : r.wrappingWidth;
  t.width = /* @__PURE__ */ Math.max(e, h ?? 0);
  let { shapeSvg: i, bbox: l, label: p } = await T(n2, t, "icon-shape default"), f = t.pos === "t", m = e, g = e, { nodeBorder: d } = o, { stylesMap: x } = ot(t), y = -g / 2, b = -m / 2, S2 = t.label ? 8 : 0, $ = /* @__PURE__ */ D.svg(i), w = /* @__PURE__ */ M(t, {
    stroke: "none",
    fill: "none"
  });
  t.look !== "handDrawn" && (w.roughness = 0, w.fillStyle = "solid");
  let C = /* @__PURE__ */ $.rectangle(y, b, g, m, w), B = /* @__PURE__ */ Math.max(g, l.width), R = m + l.height + S2, j = /* @__PURE__ */ $.rectangle(-B / 2, -R / 2, B, R, {
    ...w,
    fill: "transparent",
    stroke: "none"
  }), A = /* @__PURE__ */ i.insert(() => C, ":first-child"), O = /* @__PURE__ */ i.insert(() => j);
  if (t.icon) {
    let W = /* @__PURE__ */ i.append("g");
    W.html(`<g>${await St$1(t.icon, {
      height: e,
      width: e,
      fallbackPrefix: ""
    })}</g>`);
    let G = /* @__PURE__ */ W.node().getBBox(), L = G.width, V = G.height, E = G.x, I = G.y;
    W.attr("transform", `translate(${-L / 2 - E},${f ? l.height / 2 + S2 / 2 - V / 2 - I : -l.height / 2 - S2 / 2 - V / 2 - I})`), W.attr("style", `color: ${x.get("stroke") ?? d};`);
  }
  return p.attr("transform", `translate(${-l.width / 2 - (l.x - (l.left ?? 0))},${f ? -R / 2 : R / 2 - l.height})`), A.attr("transform", `translate(0,${f ? l.height / 2 + S2 / 2 : -l.height / 2 - S2 / 2})`), v(t, O), t.intersect = function(W) {
    if (tt$1.info("iconSquare intersect", t, W), !t.label) return N.rect(t, W);
    let G = t.x ?? 0, L = t.y ?? 0, V = t.height ?? 0, E = [];
    return f ? E = [
      {
        x: G - l.width / 2,
        y: L - V / 2
      },
      {
        x: G + l.width / 2,
        y: L - V / 2
      },
      {
        x: G + l.width / 2,
        y: L - V / 2 + l.height + S2
      },
      {
        x: G + g / 2,
        y: L - V / 2 + l.height + S2
      },
      {
        x: G + g / 2,
        y: L + V / 2
      },
      {
        x: G - g / 2,
        y: L + V / 2
      },
      {
        x: G - g / 2,
        y: L - V / 2 + l.height + S2
      },
      {
        x: G - l.width / 2,
        y: L - V / 2 + l.height + S2
      }
    ] : E = [
      {
        x: G - g / 2,
        y: L - V / 2
      },
      {
        x: G + g / 2,
        y: L - V / 2
      },
      {
        x: G + g / 2,
        y: L - V / 2 + m
      },
      {
        x: G + l.width / 2,
        y: L - V / 2 + m
      },
      {
        x: G + l.width / 2 / 2,
        y: L + V / 2
      },
      {
        x: G - l.width / 2,
        y: L + V / 2
      },
      {
        x: G - l.width / 2,
        y: L - V / 2 + m
      },
      {
        x: G - g / 2,
        y: L - V / 2 + m
      }
    ], N.polygon(t, E, W);
  }, i;
}
m$1(Qe, "icon");
async function Je(n2, t, param) {
  let { config: { themeVariables: o, flowchart: r } } = param;
  let { labelStyles: s } = k(t);
  t.labelStyle = s;
  let a = t.assetHeight ?? 48, c = t.assetWidth ?? 48, e = /* @__PURE__ */ Math.max(a, c), h = r == null ? void 0 : r.wrappingWidth;
  t.width = /* @__PURE__ */ Math.max(e, h ?? 0);
  let { shapeSvg: i, bbox: l, label: p } = await T(n2, t, "icon-shape default"), f = 20, m = t.label ? 8 : 0, g = t.pos === "t", { nodeBorder: d, mainBkg: x } = o, { stylesMap: y } = ot(t), b = /* @__PURE__ */ D.svg(i), S2 = /* @__PURE__ */ M(t, {});
  t.look !== "handDrawn" && (S2.roughness = 0, S2.fillStyle = "solid");
  let $ = /* @__PURE__ */ y.get("fill");
  S2.stroke = $ ?? x;
  let w = /* @__PURE__ */ i.append("g");
  t.icon && w.html(`<g>${await St$1(t.icon, {
    height: e,
    width: e,
    fallbackPrefix: ""
  })}</g>`);
  let C = /* @__PURE__ */ w.node().getBBox(), B = C.width, R = C.height, j = C.x, A = C.y, O = Math.max(B, R) * Math.SQRT2 + f * 2, W = /* @__PURE__ */ b.circle(0, 0, O, S2), G = /* @__PURE__ */ Math.max(O, l.width), L = O + l.height + m, V = /* @__PURE__ */ b.rectangle(-G / 2, -L / 2, G, L, {
    ...S2,
    fill: "transparent",
    stroke: "none"
  }), E = /* @__PURE__ */ i.insert(() => W, ":first-child"), I = /* @__PURE__ */ i.insert(() => V);
  return w.attr("transform", `translate(${-B / 2 - j},${g ? l.height / 2 + m / 2 - R / 2 - A : -l.height / 2 - m / 2 - R / 2 - A})`), w.attr("style", `color: ${y.get("stroke") ?? d};`), p.attr("transform", `translate(${-l.width / 2 - (l.x - (l.left ?? 0))},${g ? -L / 2 : L / 2 - l.height})`), E.attr("transform", `translate(0,${g ? l.height / 2 + m / 2 : -l.height / 2 - m / 2})`), v(t, I), t.intersect = function(_) {
    return tt$1.info("iconSquare intersect", t, _), N.rect(t, _);
  }, i;
}
m$1(Je, "iconCircle");
async function Ke(n2, t, param) {
  let { config: { themeVariables: o, flowchart: r } } = param;
  let { labelStyles: s } = k(t);
  t.labelStyle = s;
  let a = t.assetHeight ?? 48, c = t.assetWidth ?? 48, e = /* @__PURE__ */ Math.max(a, c), h = r == null ? void 0 : r.wrappingWidth;
  t.width = /* @__PURE__ */ Math.max(e, h ?? 0);
  let { shapeSvg: i, bbox: l, halfPadding: p, label: f } = await T(n2, t, "icon-shape default"), m = t.pos === "t", g = e + p * 2, d = e + p * 2, { nodeBorder: x, mainBkg: y } = o, { stylesMap: b } = ot(t), S2 = -d / 2, $ = -g / 2, w = t.label ? 8 : 0, C = /* @__PURE__ */ D.svg(i), B = /* @__PURE__ */ M(t, {});
  t.look !== "handDrawn" && (B.roughness = 0, B.fillStyle = "solid");
  let R = /* @__PURE__ */ b.get("fill");
  B.stroke = R ?? y;
  let j = /* @__PURE__ */ C.path(/* @__PURE__ */ Q(S2, $, d, g, 5), B), A = /* @__PURE__ */ Math.max(d, l.width), O = g + l.height + w, W = /* @__PURE__ */ C.rectangle(-A / 2, -O / 2, A, O, {
    ...B,
    fill: "transparent",
    stroke: "none"
  }), G = /* @__PURE__ */ i.insert(() => j, ":first-child").attr("class", "icon-shape2"), L = /* @__PURE__ */ i.insert(() => W);
  if (t.icon) {
    let V = /* @__PURE__ */ i.append("g");
    V.html(`<g>${await St$1(t.icon, {
      height: e,
      width: e,
      fallbackPrefix: ""
    })}</g>`);
    let E = /* @__PURE__ */ V.node().getBBox(), I = E.width, _ = E.height, U = E.x, rt = E.y;
    V.attr("transform", `translate(${-I / 2 - U},${m ? l.height / 2 + w / 2 - _ / 2 - rt : -l.height / 2 - w / 2 - _ / 2 - rt})`), V.attr("style", `color: ${b.get("stroke") ?? x};`);
  }
  return f.attr("transform", `translate(${-l.width / 2 - (l.x - (l.left ?? 0))},${m ? -O / 2 : O / 2 - l.height})`), G.attr("transform", `translate(0,${m ? l.height / 2 + w / 2 : -l.height / 2 - w / 2})`), v(t, L), t.intersect = function(V) {
    if (tt$1.info("iconSquare intersect", t, V), !t.label) return N.rect(t, V);
    let E = t.x ?? 0, I = t.y ?? 0, _ = t.height ?? 0, U = [];
    return m ? U = [
      {
        x: E - l.width / 2,
        y: I - _ / 2
      },
      {
        x: E + l.width / 2,
        y: I - _ / 2
      },
      {
        x: E + l.width / 2,
        y: I - _ / 2 + l.height + w
      },
      {
        x: E + d / 2,
        y: I - _ / 2 + l.height + w
      },
      {
        x: E + d / 2,
        y: I + _ / 2
      },
      {
        x: E - d / 2,
        y: I + _ / 2
      },
      {
        x: E - d / 2,
        y: I - _ / 2 + l.height + w
      },
      {
        x: E - l.width / 2,
        y: I - _ / 2 + l.height + w
      }
    ] : U = [
      {
        x: E - d / 2,
        y: I - _ / 2
      },
      {
        x: E + d / 2,
        y: I - _ / 2
      },
      {
        x: E + d / 2,
        y: I - _ / 2 + g
      },
      {
        x: E + l.width / 2,
        y: I - _ / 2 + g
      },
      {
        x: E + l.width / 2 / 2,
        y: I + _ / 2
      },
      {
        x: E - l.width / 2,
        y: I + _ / 2
      },
      {
        x: E - l.width / 2,
        y: I - _ / 2 + g
      },
      {
        x: E - d / 2,
        y: I - _ / 2 + g
      }
    ], N.polygon(t, U, V);
  }, i;
}
m$1(Ke, "iconRounded");
async function ts(n2, t, param) {
  let { config: { themeVariables: o, flowchart: r } } = param;
  let { labelStyles: s } = k(t);
  t.labelStyle = s;
  let a = t.assetHeight ?? 48, c = t.assetWidth ?? 48, e = /* @__PURE__ */ Math.max(a, c), h = r == null ? void 0 : r.wrappingWidth;
  t.width = /* @__PURE__ */ Math.max(e, h ?? 0);
  let { shapeSvg: i, bbox: l, halfPadding: p, label: f } = await T(n2, t, "icon-shape default"), m = t.pos === "t", g = e + p * 2, d = e + p * 2, { nodeBorder: x, mainBkg: y } = o, { stylesMap: b } = ot(t), S2 = -d / 2, $ = -g / 2, w = t.label ? 8 : 0, C = /* @__PURE__ */ D.svg(i), B = /* @__PURE__ */ M(t, {});
  t.look !== "handDrawn" && (B.roughness = 0, B.fillStyle = "solid");
  let R = /* @__PURE__ */ b.get("fill");
  B.stroke = R ?? y;
  let j = /* @__PURE__ */ C.path(/* @__PURE__ */ Q(S2, $, d, g, 0.1), B), A = /* @__PURE__ */ Math.max(d, l.width), O = g + l.height + w, W = /* @__PURE__ */ C.rectangle(-A / 2, -O / 2, A, O, {
    ...B,
    fill: "transparent",
    stroke: "none"
  }), G = /* @__PURE__ */ i.insert(() => j, ":first-child"), L = /* @__PURE__ */ i.insert(() => W);
  if (t.icon) {
    let V = /* @__PURE__ */ i.append("g");
    V.html(`<g>${await St$1(t.icon, {
      height: e,
      width: e,
      fallbackPrefix: ""
    })}</g>`);
    let E = /* @__PURE__ */ V.node().getBBox(), I = E.width, _ = E.height, U = E.x, rt = E.y;
    V.attr("transform", `translate(${-I / 2 - U},${m ? l.height / 2 + w / 2 - _ / 2 - rt : -l.height / 2 - w / 2 - _ / 2 - rt})`), V.attr("style", `color: ${b.get("stroke") ?? x};`);
  }
  return f.attr("transform", `translate(${-l.width / 2 - (l.x - (l.left ?? 0))},${m ? -O / 2 : O / 2 - l.height})`), G.attr("transform", `translate(0,${m ? l.height / 2 + w / 2 : -l.height / 2 - w / 2})`), v(t, L), t.intersect = function(V) {
    if (tt$1.info("iconSquare intersect", t, V), !t.label) return N.rect(t, V);
    let E = t.x ?? 0, I = t.y ?? 0, _ = t.height ?? 0, U = [];
    return m ? U = [
      {
        x: E - l.width / 2,
        y: I - _ / 2
      },
      {
        x: E + l.width / 2,
        y: I - _ / 2
      },
      {
        x: E + l.width / 2,
        y: I - _ / 2 + l.height + w
      },
      {
        x: E + d / 2,
        y: I - _ / 2 + l.height + w
      },
      {
        x: E + d / 2,
        y: I + _ / 2
      },
      {
        x: E - d / 2,
        y: I + _ / 2
      },
      {
        x: E - d / 2,
        y: I - _ / 2 + l.height + w
      },
      {
        x: E - l.width / 2,
        y: I - _ / 2 + l.height + w
      }
    ] : U = [
      {
        x: E - d / 2,
        y: I - _ / 2
      },
      {
        x: E + d / 2,
        y: I - _ / 2
      },
      {
        x: E + d / 2,
        y: I - _ / 2 + g
      },
      {
        x: E + l.width / 2,
        y: I - _ / 2 + g
      },
      {
        x: E + l.width / 2 / 2,
        y: I + _ / 2
      },
      {
        x: E - l.width / 2,
        y: I + _ / 2
      },
      {
        x: E - l.width / 2,
        y: I - _ / 2 + g
      },
      {
        x: E - d / 2,
        y: I - _ / 2 + g
      }
    ], N.polygon(t, U, V);
  }, i;
}
m$1(ts, "iconSquare");
async function es(n2, t, param) {
  let { config: { flowchart: o } } = param;
  let r = new Image();
  r.src = (t == null ? void 0 : t.img) ?? "", await r.decode();
  let s = /* @__PURE__ */ Number(/* @__PURE__ */ r.naturalWidth.toString().replace("px", "")), a = /* @__PURE__ */ Number(/* @__PURE__ */ r.naturalHeight.toString().replace("px", ""));
  t.imageAspectRatio = s / a;
  let { labelStyles: c } = k(t);
  t.labelStyle = c;
  let e = o == null ? void 0 : o.wrappingWidth;
  t.defaultWidth = o == null ? void 0 : o.wrappingWidth;
  let h = /* @__PURE__ */ Math.max(t.label ? e ?? 0 : 0, (t == null ? void 0 : t.assetWidth) ?? s), i = t.constraint === "on" && (t == null ? void 0 : t.assetHeight) ? t.assetHeight * t.imageAspectRatio : h, l = t.constraint === "on" ? i / t.imageAspectRatio : (t == null ? void 0 : t.assetHeight) ?? a;
  t.width = /* @__PURE__ */ Math.max(i, e ?? 0);
  let { shapeSvg: p, bbox: f, label: m } = await T(n2, t, "image-shape default"), g = t.pos === "t", d = -i / 2, x = -l / 2, y = t.label ? 8 : 0, b = /* @__PURE__ */ D.svg(p), S2 = /* @__PURE__ */ M(t, {});
  t.look !== "handDrawn" && (S2.roughness = 0, S2.fillStyle = "solid");
  let $ = /* @__PURE__ */ b.rectangle(d, x, i, l, S2), w = /* @__PURE__ */ Math.max(i, f.width), C = l + f.height + y, B = /* @__PURE__ */ b.rectangle(-w / 2, -C / 2, w, C, {
    ...S2,
    fill: "none",
    stroke: "none"
  }), R = /* @__PURE__ */ p.insert(() => $, ":first-child"), j = /* @__PURE__ */ p.insert(() => B);
  if (t.img) {
    let A = /* @__PURE__ */ p.append("image");
    A.attr("href", t.img), A.attr("width", i), A.attr("height", l), A.attr("preserveAspectRatio", "none"), A.attr("transform", `translate(${-i / 2},${g ? C / 2 - l : -C / 2})`);
  }
  return m.attr("transform", `translate(${-f.width / 2 - (f.x - (f.left ?? 0))},${g ? -l / 2 - f.height / 2 - y / 2 : l / 2 - f.height / 2 + y / 2})`), R.attr("transform", `translate(0,${g ? f.height / 2 + y / 2 : -f.height / 2 - y / 2})`), v(t, j), t.intersect = function(A) {
    if (tt$1.info("iconSquare intersect", t, A), !t.label) return N.rect(t, A);
    let O = t.x ?? 0, W = t.y ?? 0, G = t.height ?? 0, L = [];
    return g ? L = [
      {
        x: O - f.width / 2,
        y: W - G / 2
      },
      {
        x: O + f.width / 2,
        y: W - G / 2
      },
      {
        x: O + f.width / 2,
        y: W - G / 2 + f.height + y
      },
      {
        x: O + i / 2,
        y: W - G / 2 + f.height + y
      },
      {
        x: O + i / 2,
        y: W + G / 2
      },
      {
        x: O - i / 2,
        y: W + G / 2
      },
      {
        x: O - i / 2,
        y: W - G / 2 + f.height + y
      },
      {
        x: O - f.width / 2,
        y: W - G / 2 + f.height + y
      }
    ] : L = [
      {
        x: O - i / 2,
        y: W - G / 2
      },
      {
        x: O + i / 2,
        y: W - G / 2
      },
      {
        x: O + i / 2,
        y: W - G / 2 + l
      },
      {
        x: O + f.width / 2,
        y: W - G / 2 + l
      },
      {
        x: O + f.width / 2 / 2,
        y: W + G / 2
      },
      {
        x: O - f.width / 2,
        y: W + G / 2
      },
      {
        x: O - f.width / 2,
        y: W - G / 2 + l
      },
      {
        x: O - i / 2,
        y: W - G / 2 + l
      }
    ], N.polygon(t, L, A);
  }, p;
}
m$1(es, "imageSquare");
async function ss(n2, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: s, bbox: a } = await T(n2, t, /* @__PURE__ */ P(t)), c = /* @__PURE__ */ Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), e = /* @__PURE__ */ Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), h = [
    {
      x: 0,
      y: 0
    },
    {
      x: c,
      y: 0
    },
    {
      x: c + 3 * e / 6,
      y: -e
    },
    {
      x: -3 * e / 6,
      y: -e
    }
  ], i, { cssStyles: l } = t;
  if (t.look === "handDrawn") {
    let p = /* @__PURE__ */ D.svg(s), f = /* @__PURE__ */ M(t, {}), m = /* @__PURE__ */ H(h), g = /* @__PURE__ */ p.path(m, f);
    i = /* @__PURE__ */ s.insert(() => g, ":first-child").attr("transform", `translate(${-c / 2}, ${e / 2})`), l && i.attr("style", l);
  } else i = /* @__PURE__ */ J(s, c, e, h);
  return r && i.attr("style", r), t.width = c, t.height = e, v(t, i), t.intersect = function(p) {
    return N.polygon(t, h, p);
  }, s;
}
m$1(ss, "inv_trapezoid");
async function ft(n2, t, o) {
  let { labelStyles: r, nodeStyles: s } = k(t);
  t.labelStyle = r;
  let { shapeSvg: a, bbox: c } = await T(n2, t, /* @__PURE__ */ P(t)), e = /* @__PURE__ */ Math.max(c.width + o.labelPaddingX * 2, (t == null ? void 0 : t.width) || 0), h = /* @__PURE__ */ Math.max(c.height + o.labelPaddingY * 2, (t == null ? void 0 : t.height) || 0), i = -e / 2, l = -h / 2, p, { rx: f, ry: m } = t, { cssStyles: g } = t;
  if ((o == null ? void 0 : o.rx) && o.ry && (f = o.rx, m = o.ry), t.look === "handDrawn") {
    let d = /* @__PURE__ */ D.svg(a), x = /* @__PURE__ */ M(t, {}), y = f || m ? d.path(/* @__PURE__ */ Q(i, l, e, h, f || 0), x) : d.rectangle(i, l, e, h, x);
    p = /* @__PURE__ */ a.insert(() => y, ":first-child"), p.attr("class", "basic label-container").attr("style", /* @__PURE__ */ Je$1(g));
  } else p = /* @__PURE__ */ a.insert("rect", ":first-child"), p.attr("class", "basic label-container").attr("style", s).attr("rx", /* @__PURE__ */ Je$1(f)).attr("ry", /* @__PURE__ */ Je$1(m)).attr("x", i).attr("y", l).attr("width", e).attr("height", h);
  return v(t, p), t.intersect = function(d) {
    return N.rect(t, d);
  }, a;
}
m$1(ft, "drawRect");
async function rs(n2, t) {
  let { shapeSvg: o, bbox: r, label: s } = await T(n2, t, "label"), a = /* @__PURE__ */ o.insert("rect", ":first-child");
  return a.attr("width", 0.1).attr("height", 0.1), o.attr("class", "label edgeLabel"), s.attr("transform", `translate(${-(r.width / 2) - (r.x - (r.left ?? 0))}, ${-(r.height / 2) - (r.y - (r.top ?? 0))})`), v(t, a), t.intersect = function(h) {
    return N.rect(t, h);
  }, o;
}
m$1(rs, "labelRect");
async function os(n2, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: s, bbox: a } = await T(n2, t, /* @__PURE__ */ P(t)), c = /* @__PURE__ */ Math.max(a.width + (t.padding ?? 0), (t == null ? void 0 : t.width) ?? 0), e = /* @__PURE__ */ Math.max(a.height + (t.padding ?? 0), (t == null ? void 0 : t.height) ?? 0), h = [
    {
      x: 0,
      y: 0
    },
    {
      x: c + 3 * e / 6,
      y: 0
    },
    {
      x: c,
      y: -e
    },
    {
      x: -(3 * e) / 6,
      y: -e
    }
  ], i, { cssStyles: l } = t;
  if (t.look === "handDrawn") {
    let p = /* @__PURE__ */ D.svg(s), f = /* @__PURE__ */ M(t, {}), m = /* @__PURE__ */ H(h), g = /* @__PURE__ */ p.path(m, f);
    i = /* @__PURE__ */ s.insert(() => g, ":first-child").attr("transform", `translate(${-c / 2}, ${e / 2})`), l && i.attr("style", l);
  } else i = /* @__PURE__ */ J(s, c, e, h);
  return r && i.attr("style", r), t.width = c, t.height = e, v(t, i), t.intersect = function(p) {
    return N.polygon(t, h, p);
  }, s;
}
m$1(os, "lean_left");
async function as(n2, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: s, bbox: a } = await T(n2, t, /* @__PURE__ */ P(t)), c = /* @__PURE__ */ Math.max(a.width + (t.padding ?? 0), (t == null ? void 0 : t.width) ?? 0), e = /* @__PURE__ */ Math.max(a.height + (t.padding ?? 0), (t == null ? void 0 : t.height) ?? 0), h = [
    {
      x: -3 * e / 6,
      y: 0
    },
    {
      x: c,
      y: 0
    },
    {
      x: c + 3 * e / 6,
      y: -e
    },
    {
      x: 0,
      y: -e
    }
  ], i, { cssStyles: l } = t;
  if (t.look === "handDrawn") {
    let p = /* @__PURE__ */ D.svg(s), f = /* @__PURE__ */ M(t, {}), m = /* @__PURE__ */ H(h), g = /* @__PURE__ */ p.path(m, f);
    i = /* @__PURE__ */ s.insert(() => g, ":first-child").attr("transform", `translate(${-c / 2}, ${e / 2})`), l && i.attr("style", l);
  } else i = /* @__PURE__ */ J(s, c, e, h);
  return r && i.attr("style", r), t.width = c, t.height = e, v(t, i), t.intersect = function(p) {
    return N.polygon(t, h, p);
  }, s;
}
m$1(as, "lean_right");
function is(n2, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.label = "", t.labelStyle = o;
  let s = /* @__PURE__ */ n2.insert("g").attr("class", /* @__PURE__ */ P(t)).attr("id", t.domId ?? t.id), { cssStyles: a } = t, c = /* @__PURE__ */ Math.max(35, (t == null ? void 0 : t.width) ?? 0), e = /* @__PURE__ */ Math.max(35, (t == null ? void 0 : t.height) ?? 0), h = 7, i = [
    {
      x: c,
      y: 0
    },
    {
      x: 0,
      y: e + h / 2
    },
    {
      x: c - 2 * h,
      y: e + h / 2
    },
    {
      x: 0,
      y: 2 * e
    },
    {
      x: c,
      y: e - h / 2
    },
    {
      x: 2 * h,
      y: e - h / 2
    }
  ], l = /* @__PURE__ */ D.svg(s), p = /* @__PURE__ */ M(t, {});
  t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
  let f = /* @__PURE__ */ H(i), m = /* @__PURE__ */ l.path(f, p), g = /* @__PURE__ */ s.insert(() => m, ":first-child");
  return a && t.look !== "handDrawn" && g.selectAll("path").attr("style", a), r && t.look !== "handDrawn" && g.selectAll("path").attr("style", r), g.attr("transform", `translate(-${c / 2},${-e})`), v(t, g), t.intersect = function(d) {
    return tt$1.info("lightningBolt intersect", t, d), N.polygon(t, i, d);
  }, s;
}
m$1(is, "lightningBolt");
var mr = /* @__PURE__ */ m$1((n2, t, o, r, s, a, c) => [
  `M${n2},${t + a}`,
  `a${s},${a} 0,0,0 ${o},0`,
  `a${s},${a} 0,0,0 ${-o},0`,
  `l0,${r}`,
  `a${s},${a} 0,0,0 ${o},0`,
  `l0,${-r}`,
  `M${n2},${t + a + c}`,
  `a${s},${a} 0,0,0 ${o},0`
].join(" "), "createCylinderPathD"), fr = /* @__PURE__ */ m$1((n2, t, o, r, s, a, c) => [
  `M${n2},${t + a}`,
  `M${n2 + o},${t + a}`,
  `a${s},${a} 0,0,0 ${-o},0`,
  `l0,${r}`,
  `a${s},${a} 0,0,0 ${o},0`,
  `l0,${-r}`,
  `M${n2},${t + a + c}`,
  `a${s},${a} 0,0,0 ${o},0`
].join(" "), "createOuterCylinderPathD"), gr = /* @__PURE__ */ m$1((n2, t, o, r, s, a) => [
  `M${n2 - o / 2},${-r / 2}`,
  `a${s},${a} 0,0,0 ${o},0`
].join(" "), "createInnerCylinderPathD");
async function ns(n2, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: s, bbox: a, label: c } = await T(n2, t, /* @__PURE__ */ P(t)), e = /* @__PURE__ */ Math.max(a.width + (t.padding ?? 0), t.width ?? 0), h = e / 2, i = h / (2.5 + e / 50), l = /* @__PURE__ */ Math.max(a.height + i + (t.padding ?? 0), t.height ?? 0), p = l * 0.1, f, { cssStyles: m } = t;
  if (t.look === "handDrawn") {
    let g = /* @__PURE__ */ D.svg(s), d = /* @__PURE__ */ fr(0, 0, e, l, h, i, p), x = /* @__PURE__ */ gr(0, i, e, l, h, i), y = /* @__PURE__ */ M(t, {}), b = /* @__PURE__ */ g.path(d, y), S2 = /* @__PURE__ */ g.path(x, y);
    s.insert(() => S2, ":first-child").attr("class", "line"), f = /* @__PURE__ */ s.insert(() => b, ":first-child"), f.attr("class", "basic label-container"), m && f.attr("style", m);
  } else {
    let g = /* @__PURE__ */ mr(0, 0, e, l, h, i, p);
    f = /* @__PURE__ */ s.insert("path", ":first-child").attr("d", g).attr("class", "basic label-container").attr("style", /* @__PURE__ */ Je$1(m)).attr("style", r);
  }
  return f.attr("label-offset-y", i), f.attr("transform", `translate(${-e / 2}, ${-(l / 2 + i)})`), v(t, f), c.attr("transform", `translate(${-(a.width / 2) - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + i - (a.y - (a.top ?? 0))})`), t.intersect = function(g) {
    let d = /* @__PURE__ */ N.rect(t, g), x = d.x - (t.x ?? 0);
    if (h != 0 && (Math.abs(x) < (t.width ?? 0) / 2 || Math.abs(x) == (t.width ?? 0) / 2 && Math.abs(d.y - (t.y ?? 0)) > (t.height ?? 0) / 2 - i)) {
      let y = i * i * (1 - x * x / (h * h));
      y > 0 && (y = /* @__PURE__ */ Math.sqrt(y)), y = i - y, g.y - (t.y ?? 0) > 0 && (y = -y), d.y += y;
    }
    return d;
  }, s;
}
m$1(ns, "linedCylinder");
async function ls(n2, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: s, bbox: a, label: c } = await T(n2, t, /* @__PURE__ */ P(t)), e = /* @__PURE__ */ Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), h = /* @__PURE__ */ Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), i = h / 4, l = h + i, { cssStyles: p } = t, f = /* @__PURE__ */ D.svg(s), m = /* @__PURE__ */ M(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  let g = [
    {
      x: -e / 2 - e / 2 * 0.1,
      y: -l / 2
    },
    {
      x: -e / 2 - e / 2 * 0.1,
      y: l / 2
    },
    .../* @__PURE__ */ st(-e / 2 - e / 2 * 0.1, l / 2, e / 2 + e / 2 * 0.1, l / 2, i, 0.8),
    {
      x: e / 2 + e / 2 * 0.1,
      y: -l / 2
    },
    {
      x: -e / 2 - e / 2 * 0.1,
      y: -l / 2
    },
    {
      x: -e / 2,
      y: -l / 2
    },
    {
      x: -e / 2,
      y: l / 2 * 1.1
    },
    {
      x: -e / 2,
      y: -l / 2
    }
  ], d = /* @__PURE__ */ f.polygon(/* @__PURE__ */ g.map((y) => [
    y.x,
    y.y
  ]), m), x = /* @__PURE__ */ s.insert(() => d, ":first-child");
  return x.attr("class", "basic label-container"), p && t.look !== "handDrawn" && x.selectAll("path").attr("style", p), r && t.look !== "handDrawn" && x.selectAll("path").attr("style", r), x.attr("transform", `translate(0,${-i / 2})`), c.attr("transform", `translate(${-e / 2 + (t.padding ?? 0) + e / 2 * 0.1 / 2 - (a.x - (a.left ?? 0))},${-h / 2 + (t.padding ?? 0) - i / 2 - (a.y - (a.top ?? 0))})`), v(t, x), t.intersect = function(y) {
    return N.polygon(t, g, y);
  }, s;
}
m$1(ls, "linedWaveEdgedRect");
async function cs(n2, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: s, bbox: a, label: c } = await T(n2, t, /* @__PURE__ */ P(t)), e = /* @__PURE__ */ Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), h = /* @__PURE__ */ Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), i = 5, l = -e / 2, p = -h / 2, { cssStyles: f } = t, m = /* @__PURE__ */ D.svg(s), g = /* @__PURE__ */ M(t, {}), d = [
    {
      x: l - i,
      y: p + i
    },
    {
      x: l - i,
      y: p + h + i
    },
    {
      x: l + e - i,
      y: p + h + i
    },
    {
      x: l + e - i,
      y: p + h
    },
    {
      x: l + e,
      y: p + h
    },
    {
      x: l + e,
      y: p + h - i
    },
    {
      x: l + e + i,
      y: p + h - i
    },
    {
      x: l + e + i,
      y: p - i
    },
    {
      x: l + i,
      y: p - i
    },
    {
      x: l + i,
      y: p
    },
    {
      x: l,
      y: p
    },
    {
      x: l,
      y: p + i
    }
  ], x = [
    {
      x: l,
      y: p + i
    },
    {
      x: l + e - i,
      y: p + i
    },
    {
      x: l + e - i,
      y: p + h
    },
    {
      x: l + e,
      y: p + h
    },
    {
      x: l + e,
      y: p
    },
    {
      x: l,
      y: p
    }
  ];
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  let y = /* @__PURE__ */ H(d), b = /* @__PURE__ */ m.path(y, g), S2 = /* @__PURE__ */ H(x), $ = /* @__PURE__ */ m.path(S2, {
    ...g,
    fill: "none"
  }), w = /* @__PURE__ */ s.insert(() => $, ":first-child");
  return w.insert(() => b, ":first-child"), w.attr("class", "basic label-container"), f && t.look !== "handDrawn" && w.selectAll("path").attr("style", f), r && t.look !== "handDrawn" && w.selectAll("path").attr("style", r), c.attr("transform", `translate(${-(a.width / 2) - i - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + i - (a.y - (a.top ?? 0))})`), v(t, w), t.intersect = function(C) {
    return N.polygon(t, d, C);
  }, s;
}
m$1(cs, "multiRect");
async function hs(n2, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: s, bbox: a, label: c } = await T(n2, t, /* @__PURE__ */ P(t)), e = /* @__PURE__ */ Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), h = /* @__PURE__ */ Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), i = h / 4, l = h + i, p = -e / 2, f = -l / 2, m = 5, { cssStyles: g } = t, d = /* @__PURE__ */ st(p - m, f + l + m, p + e - m, f + l + m, i, 0.8), x = d == null ? void 0 : d[d.length - 1], y = [
    {
      x: p - m,
      y: f + m
    },
    {
      x: p - m,
      y: f + l + m
    },
    ...d,
    {
      x: p + e - m,
      y: x.y - m
    },
    {
      x: p + e,
      y: x.y - m
    },
    {
      x: p + e,
      y: x.y - 2 * m
    },
    {
      x: p + e + m,
      y: x.y - 2 * m
    },
    {
      x: p + e + m,
      y: f - m
    },
    {
      x: p + m,
      y: f - m
    },
    {
      x: p + m,
      y: f
    },
    {
      x: p,
      y: f
    },
    {
      x: p,
      y: f + m
    }
  ], b = [
    {
      x: p,
      y: f + m
    },
    {
      x: p + e - m,
      y: f + m
    },
    {
      x: p + e - m,
      y: x.y - m
    },
    {
      x: p + e,
      y: x.y - m
    },
    {
      x: p + e,
      y: f
    },
    {
      x: p,
      y: f
    }
  ], S2 = /* @__PURE__ */ D.svg(s), $ = /* @__PURE__ */ M(t, {});
  t.look !== "handDrawn" && ($.roughness = 0, $.fillStyle = "solid");
  let w = /* @__PURE__ */ H(y), C = /* @__PURE__ */ S2.path(w, $), B = /* @__PURE__ */ H(b), R = /* @__PURE__ */ S2.path(B, $), j = /* @__PURE__ */ s.insert(() => C, ":first-child");
  return j.insert(() => R), j.attr("class", "basic label-container"), g && t.look !== "handDrawn" && j.selectAll("path").attr("style", g), r && t.look !== "handDrawn" && j.selectAll("path").attr("style", r), j.attr("transform", `translate(0,${-i / 2})`), c.attr("transform", `translate(${-(a.width / 2) - m - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + m - i / 2 - (a.y - (a.top ?? 0))})`), v(t, j), t.intersect = function(A) {
    return N.polygon(t, y, A);
  }, s;
}
m$1(hs, "multiWaveEdgedRectangle");
async function ps(n2, t, param) {
  var _a2;
  let { config: { themeVariables: o } } = param;
  let { labelStyles: r, nodeStyles: s } = k(t);
  t.labelStyle = r, t.useHtmlLabels || ((_a2 = Er().flowchart) == null ? void 0 : _a2.htmlLabels) !== false || (t.centerLabel = true);
  let { shapeSvg: c, bbox: e } = await T(n2, t, /* @__PURE__ */ P(t)), h = /* @__PURE__ */ Math.max(e.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), i = /* @__PURE__ */ Math.max(e.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), l = -h / 2, p = -i / 2, { cssStyles: f } = t, m = /* @__PURE__ */ D.svg(c), g = /* @__PURE__ */ M(t, {
    fill: o.noteBkgColor,
    stroke: o.noteBorderColor
  });
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  let d = /* @__PURE__ */ m.rectangle(l, p, h, i, g), x = /* @__PURE__ */ c.insert(() => d, ":first-child");
  return x.attr("class", "basic label-container"), f && t.look !== "handDrawn" && x.selectAll("path").attr("style", f), s && t.look !== "handDrawn" && x.selectAll("path").attr("style", s), v(t, x), t.intersect = function(y) {
    return N.rect(t, y);
  }, c;
}
m$1(ps, "note");
var dr = /* @__PURE__ */ m$1((n2, t, o) => [
  `M${n2 + o / 2},${t}`,
  `L${n2 + o},${t - o / 2}`,
  `L${n2 + o / 2},${t - o}`,
  `L${n2},${t - o / 2}`,
  "Z"
].join(" "), "createDecisionBoxPathD");
async function ms(n2, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: s, bbox: a } = await T(n2, t, /* @__PURE__ */ P(t)), c = a.width + t.padding, e = a.height + t.padding, h = c + e, i = [
    {
      x: h / 2,
      y: 0
    },
    {
      x: h,
      y: -h / 2
    },
    {
      x: h / 2,
      y: -h
    },
    {
      x: 0,
      y: -h / 2
    }
  ], l, { cssStyles: p } = t;
  if (t.look === "handDrawn") {
    let f = /* @__PURE__ */ D.svg(s), m = /* @__PURE__ */ M(t, {}), g = /* @__PURE__ */ dr(0, 0, h), d = /* @__PURE__ */ f.path(g, m);
    l = /* @__PURE__ */ s.insert(() => d, ":first-child").attr("transform", `translate(${-h / 2}, ${h / 2})`), p && l.attr("style", p);
  } else l = /* @__PURE__ */ J(s, h, h, i);
  return r && l.attr("style", r), v(t, l), t.intersect = function(f) {
    return tt$1.debug(`APA12 Intersect called SPLIT
point:`, f, `
node:
`, t, `
res:`, /* @__PURE__ */ N.polygon(t, i, f)), N.polygon(t, i, f);
  }, s;
}
m$1(ms, "question");
async function fs(n2, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: s, bbox: a, label: c } = await T(n2, t, /* @__PURE__ */ P(t)), e = /* @__PURE__ */ Math.max(a.width + (t.padding ?? 0), (t == null ? void 0 : t.width) ?? 0), h = /* @__PURE__ */ Math.max(a.height + (t.padding ?? 0), (t == null ? void 0 : t.height) ?? 0), i = -e / 2, l = -h / 2, p = l / 2, f = [
    {
      x: i + p,
      y: l
    },
    {
      x: i,
      y: 0
    },
    {
      x: i + p,
      y: -l
    },
    {
      x: -i,
      y: -l
    },
    {
      x: -i,
      y: l
    }
  ], { cssStyles: m } = t, g = /* @__PURE__ */ D.svg(s), d = /* @__PURE__ */ M(t, {});
  t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
  let x = /* @__PURE__ */ H(f), y = /* @__PURE__ */ g.path(x, d), b = /* @__PURE__ */ s.insert(() => y, ":first-child");
  return b.attr("class", "basic label-container"), m && t.look !== "handDrawn" && b.selectAll("path").attr("style", m), r && t.look !== "handDrawn" && b.selectAll("path").attr("style", r), b.attr("transform", `translate(${-p / 2},0)`), c.attr("transform", `translate(${-p / 2 - a.width / 2 - (a.x - (a.left ?? 0))}, ${-(a.height / 2) - (a.y - (a.top ?? 0))})`), v(t, b), t.intersect = function(S2) {
    return N.polygon(t, f, S2);
  }, s;
}
m$1(fs, "rect_left_inv_arrow");
async function gs(n2, t) {
  var _a2, _b2;
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let s;
  t.cssClasses ? s = "node " + t.cssClasses : s = "node default";
  let a = /* @__PURE__ */ n2.insert("g").attr("class", s).attr("id", t.domId || t.id), c = /* @__PURE__ */ a.insert("g"), e = /* @__PURE__ */ a.insert("g").attr("class", "label").attr("style", r), h = t.description, i = t.label, l = /* @__PURE__ */ e.node().appendChild(await St(i, t.labelStyle, true, true)), p = {
    width: 0,
    height: 0
  };
  if (uf((_b2 = (_a2 = Wl()) == null ? void 0 : _a2.flowchart) == null ? void 0 : _b2.htmlLabels)) {
    let R = l.children[0], j = /* @__PURE__ */ rh(l);
    p = /* @__PURE__ */ R.getBoundingClientRect(), j.attr("width", p.width), j.attr("height", p.height);
  }
  tt$1.info("Text 2", h);
  let f = h || [], m = /* @__PURE__ */ l.getBBox(), g = /* @__PURE__ */ e.node().appendChild(await St(f.join ? f.join("<br/>") : f, t.labelStyle, true, true)), d = g.children[0], x = /* @__PURE__ */ rh(g);
  p = /* @__PURE__ */ d.getBoundingClientRect(), x.attr("width", p.width), x.attr("height", p.height);
  let y = (t.padding || 0) / 2;
  rh(g).attr("transform", "translate( " + (p.width > m.width ? 0 : (m.width - p.width) / 2) + ", " + (m.height + y + 5) + ")"), rh(l).attr("transform", "translate( " + (p.width < m.width ? 0 : -(m.width - p.width) / 2) + ", 0)"), p = /* @__PURE__ */ e.node().getBBox(), e.attr("transform", "translate(" + -p.width / 2 + ", " + (-p.height / 2 - y + 3) + ")");
  let b = p.width + (t.padding || 0), S2 = p.height + (t.padding || 0), $ = -p.width / 2 - y, w = -p.height / 2 - y, C, B;
  if (t.look === "handDrawn") {
    let R = /* @__PURE__ */ D.svg(a), j = /* @__PURE__ */ M(t, {}), A = /* @__PURE__ */ R.path(/* @__PURE__ */ Q($, w, b, S2, t.rx || 0), j), O = /* @__PURE__ */ R.line(-p.width / 2 - y, -p.height / 2 - y + m.height + y, p.width / 2 + y, -p.height / 2 - y + m.height + y, j);
    B = /* @__PURE__ */ a.insert(() => (tt$1.debug("Rough node insert CXC", A), O), ":first-child"), C = /* @__PURE__ */ a.insert(() => (tt$1.debug("Rough node insert CXC", A), A), ":first-child");
  } else C = /* @__PURE__ */ c.insert("rect", ":first-child"), B = /* @__PURE__ */ c.insert("line"), C.attr("class", "outer title-state").attr("style", r).attr("x", -p.width / 2 - y).attr("y", -p.height / 2 - y).attr("width", p.width + (t.padding || 0)).attr("height", p.height + (t.padding || 0)), B.attr("class", "divider").attr("x1", -p.width / 2 - y).attr("x2", p.width / 2 + y).attr("y1", -p.height / 2 - y + m.height + y).attr("y2", -p.height / 2 - y + m.height + y);
  return v(t, C), t.intersect = function(R) {
    return N.rect(t, R);
  }, a;
}
m$1(gs, "rectWithTitle");
async function ds(n2, t) {
  let o = {
    rx: 5,
    ry: 5,
    classes: "",
    labelPaddingX: ((t == null ? void 0 : t.padding) || 0) * 1,
    labelPaddingY: ((t == null ? void 0 : t.padding) || 0) * 1
  };
  return ft(n2, t, o);
}
m$1(ds, "roundedRect");
async function us(n2, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: s, bbox: a, label: c } = await T(n2, t, /* @__PURE__ */ P(t)), e = (t == null ? void 0 : t.padding) ?? 0, h = /* @__PURE__ */ Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), i = /* @__PURE__ */ Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), l = -a.width / 2 - e, p = -a.height / 2 - e, { cssStyles: f } = t, m = /* @__PURE__ */ D.svg(s), g = /* @__PURE__ */ M(t, {});
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  let d = [
    {
      x: l,
      y: p
    },
    {
      x: l + h + 8,
      y: p
    },
    {
      x: l + h + 8,
      y: p + i
    },
    {
      x: l - 8,
      y: p + i
    },
    {
      x: l - 8,
      y: p
    },
    {
      x: l,
      y: p
    },
    {
      x: l,
      y: p + i
    }
  ], x = /* @__PURE__ */ m.polygon(/* @__PURE__ */ d.map((b) => [
    b.x,
    b.y
  ]), g), y = /* @__PURE__ */ s.insert(() => x, ":first-child");
  return y.attr("class", "basic label-container").attr("style", /* @__PURE__ */ Je$1(f)), r && t.look !== "handDrawn" && y.selectAll("path").attr("style", r), f && t.look !== "handDrawn" && y.selectAll("path").attr("style", r), c.attr("transform", `translate(${-h / 2 + 4 + (t.padding ?? 0) - (a.x - (a.left ?? 0))},${-i / 2 + (t.padding ?? 0) - (a.y - (a.top ?? 0))})`), v(t, y), t.intersect = function(b) {
    return N.rect(t, b);
  }, s;
}
m$1(us, "shadedProcess");
async function ys(n2, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: s, bbox: a, label: c } = await T(n2, t, /* @__PURE__ */ P(t)), e = /* @__PURE__ */ Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), h = /* @__PURE__ */ Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), i = -e / 2, l = -h / 2, { cssStyles: p } = t, f = /* @__PURE__ */ D.svg(s), m = /* @__PURE__ */ M(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  let g = [
    {
      x: i,
      y: l
    },
    {
      x: i,
      y: l + h
    },
    {
      x: i + e,
      y: l + h
    },
    {
      x: i + e,
      y: l - h / 2
    }
  ], d = /* @__PURE__ */ H(g), x = /* @__PURE__ */ f.path(d, m), y = /* @__PURE__ */ s.insert(() => x, ":first-child");
  return y.attr("class", "basic label-container"), p && t.look !== "handDrawn" && y.selectChildren("path").attr("style", p), r && t.look !== "handDrawn" && y.selectChildren("path").attr("style", r), y.attr("transform", `translate(0, ${h / 4})`), c.attr("transform", `translate(${-e / 2 + (t.padding ?? 0) - (a.x - (a.left ?? 0))}, ${-h / 4 + (t.padding ?? 0) - (a.y - (a.top ?? 0))})`), v(t, y), t.intersect = function(b) {
    return N.polygon(t, g, b);
  }, s;
}
m$1(ys, "slopedRect");
async function xs(n2, t) {
  let o = {
    rx: 0,
    ry: 0,
    classes: "",
    labelPaddingX: ((t == null ? void 0 : t.padding) || 0) * 2,
    labelPaddingY: ((t == null ? void 0 : t.padding) || 0) * 1
  };
  return ft(n2, t, o);
}
m$1(xs, "squareRect");
async function bs(n2, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: s, bbox: a } = await T(n2, t, /* @__PURE__ */ P(t)), c = a.height + t.padding, e = a.width + c / 4 + t.padding, h, { cssStyles: i } = t;
  if (t.look === "handDrawn") {
    let l = /* @__PURE__ */ D.svg(s), p = /* @__PURE__ */ M(t, {}), f = /* @__PURE__ */ Q(-e / 2, -c / 2, e, c, c / 2), m = /* @__PURE__ */ l.path(f, p);
    h = /* @__PURE__ */ s.insert(() => m, ":first-child"), h.attr("class", "basic label-container").attr("style", /* @__PURE__ */ Je$1(i));
  } else h = /* @__PURE__ */ s.insert("rect", ":first-child"), h.attr("class", "basic label-container").attr("style", r).attr("rx", c / 2).attr("ry", c / 2).attr("x", -e / 2).attr("y", -c / 2).attr("width", e).attr("height", c);
  return v(t, h), t.intersect = function(l) {
    return N.rect(t, l);
  }, s;
}
m$1(bs, "stadium");
async function Ss(n2, t) {
  return ft(n2, t, {
    rx: 5,
    ry: 5,
    classes: "flowchart-node"
  });
}
m$1(Ss, "state");
function ws(n2, t, param) {
  let { config: { themeVariables: o } } = param;
  let { labelStyles: r, nodeStyles: s } = k(t);
  t.labelStyle = r;
  let { cssStyles: a } = t, { lineColor: c, stateBorder: e, nodeBorder: h } = o, i = /* @__PURE__ */ n2.insert("g").attr("class", "node default").attr("id", t.domId || t.id), l = /* @__PURE__ */ D.svg(i), p = /* @__PURE__ */ M(t, {});
  t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
  let f = /* @__PURE__ */ l.circle(0, 0, 14, {
    ...p,
    stroke: c,
    strokeWidth: 2
  }), m = e ?? h, g = /* @__PURE__ */ l.circle(0, 0, 5, {
    ...p,
    fill: m,
    stroke: m,
    strokeWidth: 2,
    fillStyle: "solid"
  }), d = /* @__PURE__ */ i.insert(() => f, ":first-child");
  return d.insert(() => g), a && d.selectAll("path").attr("style", a), s && d.selectAll("path").attr("style", s), v(t, d), t.intersect = function(x) {
    return N.circle(t, 7, x);
  }, i;
}
m$1(ws, "stateEnd");
function Ns(n2, t, param) {
  let { config: { themeVariables: o } } = param;
  let { lineColor: r } = o, s = /* @__PURE__ */ n2.insert("g").attr("class", "node default").attr("id", t.domId || t.id), a;
  if (t.look === "handDrawn") {
    let e = /* @__PURE__ */ D.svg(s).circle(0, 0, 14, /* @__PURE__ */ De(r));
    a = /* @__PURE__ */ s.insert(() => e), a.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
  } else a = /* @__PURE__ */ s.insert("circle", ":first-child"), a.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
  return v(t, a), t.intersect = function(c) {
    return N.circle(t, 7, c);
  }, s;
}
m$1(Ns, "stateStart");
async function Ds(n2, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: s, bbox: a } = await T(n2, t, /* @__PURE__ */ P(t)), c = ((t == null ? void 0 : t.padding) || 0) / 2, e = a.width + t.padding, h = a.height + t.padding, i = -a.width / 2 - c, l = -a.height / 2 - c, p = [
    {
      x: 0,
      y: 0
    },
    {
      x: e,
      y: 0
    },
    {
      x: e,
      y: -h
    },
    {
      x: 0,
      y: -h
    },
    {
      x: 0,
      y: 0
    },
    {
      x: -8,
      y: 0
    },
    {
      x: e + 8,
      y: 0
    },
    {
      x: e + 8,
      y: -h
    },
    {
      x: -8,
      y: -h
    },
    {
      x: -8,
      y: 0
    }
  ];
  if (t.look === "handDrawn") {
    let f = /* @__PURE__ */ D.svg(s), m = /* @__PURE__ */ M(t, {}), g = /* @__PURE__ */ f.rectangle(i - 8, l, e + 16, h, m), d = /* @__PURE__ */ f.line(i, l, i, l + h, m), x = /* @__PURE__ */ f.line(i + e, l, i + e, l + h, m);
    s.insert(() => d, ":first-child"), s.insert(() => x, ":first-child");
    let y = /* @__PURE__ */ s.insert(() => g, ":first-child"), { cssStyles: b } = t;
    y.attr("class", "basic label-container").attr("style", /* @__PURE__ */ Je$1(b)), v(t, y);
  } else {
    let f = /* @__PURE__ */ J(s, e, h, p);
    r && f.attr("style", r), v(t, f);
  }
  return t.intersect = function(f) {
    return N.polygon(t, p, f);
  }, s;
}
m$1(Ds, "subroutine");
async function Ms(n2, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: s, bbox: a } = await T(n2, t, /* @__PURE__ */ P(t)), c = /* @__PURE__ */ Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), e = /* @__PURE__ */ Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), h = -c / 2, i = -e / 2, l = 0.2 * e, p = 0.2 * e, { cssStyles: f } = t, m = /* @__PURE__ */ D.svg(s), g = /* @__PURE__ */ M(t, {}), d = [
    {
      x: h - l / 2,
      y: i
    },
    {
      x: h + c + l / 2,
      y: i
    },
    {
      x: h + c + l / 2,
      y: i + e
    },
    {
      x: h - l / 2,
      y: i + e
    }
  ], x = [
    {
      x: h + c - l / 2,
      y: i + e
    },
    {
      x: h + c + l / 2,
      y: i + e
    },
    {
      x: h + c + l / 2,
      y: i + e - p
    }
  ];
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  let y = /* @__PURE__ */ H(d), b = /* @__PURE__ */ m.path(y, g), S2 = /* @__PURE__ */ H(x), $ = /* @__PURE__ */ m.path(S2, {
    ...g,
    fillStyle: "solid"
  }), w = /* @__PURE__ */ s.insert(() => $, ":first-child");
  return w.insert(() => b, ":first-child"), w.attr("class", "basic label-container"), f && t.look !== "handDrawn" && w.selectAll("path").attr("style", f), r && t.look !== "handDrawn" && w.selectAll("path").attr("style", r), v(t, w), t.intersect = function(C) {
    return N.polygon(t, d, C);
  }, s;
}
m$1(Ms, "taggedRect");
async function vs(n2, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: s, bbox: a, label: c } = await T(n2, t, /* @__PURE__ */ P(t)), e = /* @__PURE__ */ Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), h = /* @__PURE__ */ Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), i = h / 4, l = 0.2 * e, p = 0.2 * h, f = h + i, { cssStyles: m } = t, g = /* @__PURE__ */ D.svg(s), d = /* @__PURE__ */ M(t, {});
  t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
  let x = [
    {
      x: -e / 2 - e / 2 * 0.1,
      y: f / 2
    },
    .../* @__PURE__ */ st(-e / 2 - e / 2 * 0.1, f / 2, e / 2 + e / 2 * 0.1, f / 2, i, 0.8),
    {
      x: e / 2 + e / 2 * 0.1,
      y: -f / 2
    },
    {
      x: -e / 2 - e / 2 * 0.1,
      y: -f / 2
    }
  ], y = -e / 2 + e / 2 * 0.1, b = -f / 2 - p * 0.4, S2 = [
    {
      x: y + e - l,
      y: (b + h) * 1.4
    },
    {
      x: y + e,
      y: b + h - p
    },
    {
      x: y + e,
      y: (b + h) * 0.9
    },
    .../* @__PURE__ */ st(y + e, (b + h) * 1.3, y + e - l, (b + h) * 1.5, -h * 0.03, 0.5)
  ], $ = /* @__PURE__ */ H(x), w = /* @__PURE__ */ g.path($, d), C = /* @__PURE__ */ H(S2), B = /* @__PURE__ */ g.path(C, {
    ...d,
    fillStyle: "solid"
  }), R = /* @__PURE__ */ s.insert(() => B, ":first-child");
  return R.insert(() => w, ":first-child"), R.attr("class", "basic label-container"), m && t.look !== "handDrawn" && R.selectAll("path").attr("style", m), r && t.look !== "handDrawn" && R.selectAll("path").attr("style", r), R.attr("transform", `translate(0,${-i / 2})`), c.attr("transform", `translate(${-e / 2 + (t.padding ?? 0) - (a.x - (a.left ?? 0))},${-h / 2 + (t.padding ?? 0) - i / 2 - (a.y - (a.top ?? 0))})`), v(t, R), t.intersect = function(j) {
    return N.polygon(t, x, j);
  }, s;
}
m$1(vs, "taggedWaveEdgedRectangle");
async function ks(n2, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: s, bbox: a } = await T(n2, t, /* @__PURE__ */ P(t)), c = /* @__PURE__ */ Math.max(a.width + t.padding, (t == null ? void 0 : t.width) || 0), e = /* @__PURE__ */ Math.max(a.height + t.padding, (t == null ? void 0 : t.height) || 0), h = -c / 2, i = -e / 2, l = /* @__PURE__ */ s.insert("rect", ":first-child");
  return l.attr("class", "text").attr("style", r).attr("rx", 0).attr("ry", 0).attr("x", h).attr("y", i).attr("width", c).attr("height", e), v(t, l), t.intersect = function(p) {
    return N.rect(t, p);
  }, s;
}
m$1(ks, "text");
var ur = /* @__PURE__ */ m$1((n2, t, o, r, s, a) => `M${n2},${t}
    a${s},${a} 0,0,1 0,${-r}
    l${o},0
    a${s},${a} 0,0,1 0,${r}
    M${o},${-r}
    a${s},${a} 0,0,0 0,${r}
    l${-o},0`, "createCylinderPathD"), yr = /* @__PURE__ */ m$1((n2, t, o, r, s, a) => [
  `M${n2},${t}`,
  `M${n2 + o},${t}`,
  `a${s},${a} 0,0,0 0,${-r}`,
  `l${-o},0`,
  `a${s},${a} 0,0,0 0,${r}`,
  `l${o},0`
].join(" "), "createOuterCylinderPathD"), xr = /* @__PURE__ */ m$1((n2, t, o, r, s, a) => [
  `M${n2 + o / 2},${-r / 2}`,
  `a${s},${a} 0,0,0 0,${r}`
].join(" "), "createInnerCylinderPathD");
async function $s(n2, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: s, bbox: a, label: c, halfPadding: e } = await T(n2, t, /* @__PURE__ */ P(t)), h = t.look === "neo" ? e * 2 : e, i = a.height + h, l = i / 2, p = l / (2.5 + i / 50), f = a.width + p + h, { cssStyles: m } = t, g;
  if (t.look === "handDrawn") {
    let d = /* @__PURE__ */ D.svg(s), x = /* @__PURE__ */ yr(0, 0, f, i, p, l), y = /* @__PURE__ */ xr(0, 0, f, i, p, l), b = /* @__PURE__ */ d.path(x, /* @__PURE__ */ M(t, {})), S2 = /* @__PURE__ */ d.path(y, /* @__PURE__ */ M(t, {
      fill: "none"
    }));
    g = /* @__PURE__ */ s.insert(() => S2, ":first-child"), g = /* @__PURE__ */ s.insert(() => b, ":first-child"), g.attr("class", "basic label-container"), m && g.attr("style", m);
  } else {
    let d = /* @__PURE__ */ ur(0, 0, f, i, p, l);
    g = /* @__PURE__ */ s.insert("path", ":first-child").attr("d", d).attr("class", "basic label-container").attr("style", /* @__PURE__ */ Je$1(m)).attr("style", r), g.attr("class", "basic label-container"), m && g.selectAll("path").attr("style", m), r && g.selectAll("path").attr("style", r);
  }
  return g.attr("label-offset-x", p), g.attr("transform", `translate(${-f / 2}, ${i / 2} )`), c.attr("transform", `translate(${-(a.width / 2) - p - (a.x - (a.left ?? 0))}, ${-(a.height / 2) - (a.y - (a.top ?? 0))})`), v(t, g), t.intersect = function(d) {
    let x = /* @__PURE__ */ N.rect(t, d), y = x.y - (t.y ?? 0);
    if (l != 0 && (Math.abs(y) < (t.height ?? 0) / 2 || Math.abs(y) == (t.height ?? 0) / 2 && Math.abs(x.x - (t.x ?? 0)) > (t.width ?? 0) / 2 - p)) {
      let b = p * p * (1 - y * y / (l * l));
      b != 0 && (b = /* @__PURE__ */ Math.sqrt(/* @__PURE__ */ Math.abs(b))), b = p - b, d.x - (t.x ?? 0) > 0 && (b = -b), x.x += b;
    }
    return x;
  }, s;
}
m$1($s, "tiltedCylinder");
async function Ps(n2, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: s, bbox: a } = await T(n2, t, /* @__PURE__ */ P(t)), c = a.width + t.padding, e = a.height + t.padding, h = [
    {
      x: -3 * e / 6,
      y: 0
    },
    {
      x: c + 3 * e / 6,
      y: 0
    },
    {
      x: c,
      y: -e
    },
    {
      x: 0,
      y: -e
    }
  ], i, { cssStyles: l } = t;
  if (t.look === "handDrawn") {
    let p = /* @__PURE__ */ D.svg(s), f = /* @__PURE__ */ M(t, {}), m = /* @__PURE__ */ H(h), g = /* @__PURE__ */ p.path(m, f);
    i = /* @__PURE__ */ s.insert(() => g, ":first-child").attr("transform", `translate(${-c / 2}, ${e / 2})`), l && i.attr("style", l);
  } else i = /* @__PURE__ */ J(s, c, e, h);
  return r && i.attr("style", r), t.width = c, t.height = e, v(t, i), t.intersect = function(p) {
    return N.polygon(t, h, p);
  }, s;
}
m$1(Ps, "trapezoid");
async function Ts(n2, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: s, bbox: a } = await T(n2, t, /* @__PURE__ */ P(t)), c = 60, e = 20, h = /* @__PURE__ */ Math.max(c, a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), i = /* @__PURE__ */ Math.max(e, a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), { cssStyles: l } = t, p = /* @__PURE__ */ D.svg(s), f = /* @__PURE__ */ M(t, {});
  t.look !== "handDrawn" && (f.roughness = 0, f.fillStyle = "solid");
  let m = [
    {
      x: -h / 2 * 0.8,
      y: -i / 2
    },
    {
      x: h / 2 * 0.8,
      y: -i / 2
    },
    {
      x: h / 2,
      y: -i / 2 * 0.6
    },
    {
      x: h / 2,
      y: i / 2
    },
    {
      x: -h / 2,
      y: i / 2
    },
    {
      x: -h / 2,
      y: -i / 2 * 0.6
    }
  ], g = /* @__PURE__ */ H(m), d = /* @__PURE__ */ p.path(g, f), x = /* @__PURE__ */ s.insert(() => d, ":first-child");
  return x.attr("class", "basic label-container"), l && t.look !== "handDrawn" && x.selectChildren("path").attr("style", l), r && t.look !== "handDrawn" && x.selectChildren("path").attr("style", r), v(t, x), t.intersect = function(y) {
    return N.polygon(t, m, y);
  }, s;
}
m$1(Ts, "trapezoidalPentagon");
async function Cs(n2, t) {
  var _a2;
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: s, bbox: a, label: c } = await T(n2, t, /* @__PURE__ */ P(t)), e = /* @__PURE__ */ uf((_a2 = Wl().flowchart) == null ? void 0 : _a2.htmlLabels), h = a.width + (t.padding ?? 0), i = h + a.height, l = h + a.height, p = [
    {
      x: 0,
      y: 0
    },
    {
      x: l,
      y: 0
    },
    {
      x: l / 2,
      y: -i
    }
  ], { cssStyles: f } = t, m = /* @__PURE__ */ D.svg(s), g = /* @__PURE__ */ M(t, {});
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  let d = /* @__PURE__ */ H(p), x = /* @__PURE__ */ m.path(d, g), y = /* @__PURE__ */ s.insert(() => x, ":first-child").attr("transform", `translate(${-i / 2}, ${i / 2})`);
  return f && t.look !== "handDrawn" && y.selectChildren("path").attr("style", f), r && t.look !== "handDrawn" && y.selectChildren("path").attr("style", r), t.width = h, t.height = i, v(t, y), c.attr("transform", `translate(${-a.width / 2 - (a.x - (a.left ?? 0))}, ${i / 2 - (a.height + (t.padding ?? 0) / (e ? 2 : 1) - (a.y - (a.top ?? 0)))})`), t.intersect = function(b) {
    return tt$1.info("Triangle intersect", t, p, b), N.polygon(t, p, b);
  }, s;
}
m$1(Cs, "triangle");
async function Bs(n2, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: s, bbox: a, label: c } = await T(n2, t, /* @__PURE__ */ P(t)), e = /* @__PURE__ */ Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), h = /* @__PURE__ */ Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), i = h / 8, l = h + i, { cssStyles: p } = t, m = 70 - e, g = m > 0 ? m / 2 : 0, d = /* @__PURE__ */ D.svg(s), x = /* @__PURE__ */ M(t, {});
  t.look !== "handDrawn" && (x.roughness = 0, x.fillStyle = "solid");
  let y = [
    {
      x: -e / 2 - g,
      y: l / 2
    },
    .../* @__PURE__ */ st(-e / 2 - g, l / 2, e / 2 + g, l / 2, i, 0.8),
    {
      x: e / 2 + g,
      y: -l / 2
    },
    {
      x: -e / 2 - g,
      y: -l / 2
    }
  ], b = /* @__PURE__ */ H(y), S2 = /* @__PURE__ */ d.path(b, x), $ = /* @__PURE__ */ s.insert(() => S2, ":first-child");
  return $.attr("class", "basic label-container"), p && t.look !== "handDrawn" && $.selectAll("path").attr("style", p), r && t.look !== "handDrawn" && $.selectAll("path").attr("style", r), $.attr("transform", `translate(0,${-i / 2})`), c.attr("transform", `translate(${-e / 2 + (t.padding ?? 0) - (a.x - (a.left ?? 0))},${-h / 2 + (t.padding ?? 0) - i - (a.y - (a.top ?? 0))})`), v(t, $), t.intersect = function(w) {
    return N.polygon(t, y, w);
  }, s;
}
m$1(Bs, "waveEdgedRectangle");
async function Rs(n2, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: s, bbox: a } = await T(n2, t, /* @__PURE__ */ P(t)), c = 100, e = 50, h = /* @__PURE__ */ Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), i = /* @__PURE__ */ Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), l = h / i, p = h, f = i;
  p > f * l ? f = p / l : p = f * l, p = /* @__PURE__ */ Math.max(p, c), f = /* @__PURE__ */ Math.max(f, e);
  let m = /* @__PURE__ */ Math.min(f * 0.2, f / 4), g = f + m * 2, { cssStyles: d } = t, x = /* @__PURE__ */ D.svg(s), y = /* @__PURE__ */ M(t, {});
  t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
  let b = [
    {
      x: -p / 2,
      y: g / 2
    },
    .../* @__PURE__ */ st(-p / 2, g / 2, p / 2, g / 2, m, 1),
    {
      x: p / 2,
      y: -g / 2
    },
    .../* @__PURE__ */ st(p / 2, -g / 2, -p / 2, -g / 2, m, -1)
  ], S2 = /* @__PURE__ */ H(b), $ = /* @__PURE__ */ x.path(S2, y), w = /* @__PURE__ */ s.insert(() => $, ":first-child");
  return w.attr("class", "basic label-container"), d && t.look !== "handDrawn" && w.selectAll("path").attr("style", d), r && t.look !== "handDrawn" && w.selectAll("path").attr("style", r), v(t, w), t.intersect = function(C) {
    return N.polygon(t, b, C);
  }, s;
}
m$1(Rs, "waveRectangle");
async function Gs(n2, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: s, bbox: a, label: c } = await T(n2, t, /* @__PURE__ */ P(t)), e = /* @__PURE__ */ Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), h = /* @__PURE__ */ Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), i = 5, l = -e / 2, p = -h / 2, { cssStyles: f } = t, m = /* @__PURE__ */ D.svg(s), g = /* @__PURE__ */ M(t, {}), d = [
    {
      x: l - i,
      y: p - i
    },
    {
      x: l - i,
      y: p + h
    },
    {
      x: l + e,
      y: p + h
    },
    {
      x: l + e,
      y: p - i
    }
  ], x = `M${l - i},${p - i} L${l + e},${p - i} L${l + e},${p + h} L${l - i},${p + h} L${l - i},${p - i}
                M${l - i},${p} L${l + e},${p}
                M${l},${p - i} L${l},${p + h}`;
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  let y = /* @__PURE__ */ m.path(x, g), b = /* @__PURE__ */ s.insert(() => y, ":first-child");
  return b.attr("transform", `translate(${i / 2}, ${i / 2})`), b.attr("class", "basic label-container"), f && t.look !== "handDrawn" && b.selectAll("path").attr("style", f), r && t.look !== "handDrawn" && b.selectAll("path").attr("style", r), c.attr("transform", `translate(${-(a.width / 2) + i / 2 - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + i / 2 - (a.y - (a.top ?? 0))})`), v(t, b), t.intersect = function(S2) {
    return N.polygon(t, d, S2);
  }, s;
}
m$1(Gs, "windowPane");
async function js(n2, t, o, r) {
  let s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : o.class.padding ?? 12;
  let a = r ? 0 : 3, c = /* @__PURE__ */ n2.insert("g").attr("class", /* @__PURE__ */ P(t)).attr("id", t.domId || t.id), e = null, h = null, i = null, l = null, p = 0, f = 0, m = 0;
  if (e = /* @__PURE__ */ c.insert("g").attr("class", "annotation-group text"), t.annotations.length > 0) {
    let b = t.annotations[0];
    await Et(e, {
      text: `«${b}»`
    }, 0), p = e.node().getBBox().height;
  }
  h = /* @__PURE__ */ c.insert("g").attr("class", "label-group text"), await Et(h, t, 0, [
    "font-weight: bolder"
  ]);
  let g = /* @__PURE__ */ h.node().getBBox();
  f = g.height, i = /* @__PURE__ */ c.insert("g").attr("class", "members-group text");
  let d = 0;
  for (let b of t.members) {
    let S2 = await Et(i, b, d, [
      /* @__PURE__ */ b.parseClassifier()
    ]);
    d += S2 + a;
  }
  m = i.node().getBBox().height, m <= 0 && (m = s / 2), l = /* @__PURE__ */ c.insert("g").attr("class", "methods-group text");
  let x = 0;
  for (let b of t.methods) {
    let S2 = await Et(l, b, x, [
      /* @__PURE__ */ b.parseClassifier()
    ]);
    x += S2 + a;
  }
  let y = /* @__PURE__ */ c.node().getBBox();
  if (e !== null) {
    let b = /* @__PURE__ */ e.node().getBBox();
    e.attr("transform", `translate(${-b.width / 2})`);
  }
  return h.attr("transform", `translate(${-g.width / 2}, ${p})`), y = /* @__PURE__ */ c.node().getBBox(), i.attr("transform", `translate(0, ${p + f + s * 2})`), y = /* @__PURE__ */ c.node().getBBox(), l.attr("transform", `translate(0, ${p + f + (m ? m + s * 4 : s * 2)})`), y = /* @__PURE__ */ c.node().getBBox(), {
    shapeSvg: c,
    bbox: y
  };
}
m$1(js, "textHelper");
async function Et(n2, t, o) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [];
  let s = /* @__PURE__ */ n2.insert("g").attr("class", "label").attr("style", /* @__PURE__ */ r.join("; ")), a = /* @__PURE__ */ Er(), c = "useHtmlLabels" in t ? t.useHtmlLabels : uf(a.htmlLabels) ?? true, e = "";
  "text" in t ? e = t.text : e = t.label, !c && e.startsWith("\\") && (e = /* @__PURE__ */ e.substring(1)), Rl(e) && (c = true);
  let h = await Zt$1(s, /* @__PURE__ */ Mf(/* @__PURE__ */ Xe$1(e)), {
    width: M$1(e, a) + 50,
    classes: "markdown-node-label",
    useHtmlLabels: c
  }, a), i, l = 1;
  if (c) {
    let p = h.children[0], f = /* @__PURE__ */ rh(h);
    l = p.innerHTML.split("<br>").length, p.innerHTML.includes("</math>") && (l += p.innerHTML.split("<mrow>").length - 1);
    let m = /* @__PURE__ */ p.getElementsByTagName("img");
    if (m) {
      let g = e.replace(/<img[^>]*>/g, "").trim() === "";
      await Promise.all(/* @__PURE__ */ [
        ...m
      ].map((d) => new Promise((x) => {
        function y() {
          var _a2;
          if (d.style.display = "flex", d.style.flexDirection = "column", g) {
            let b = ((_a2 = a.fontSize) == null ? void 0 : _a2.toString()) ?? window.getComputedStyle(document.body).fontSize, $ = parseInt(b, 10) * 5 + "px";
            d.style.minWidth = $, d.style.maxWidth = $;
          } else d.style.width = "100%";
          x(d);
        }
        m$1(y, "setupImage"), setTimeout(() => {
          d.complete && y();
        }), d.addEventListener("error", y), d.addEventListener("load", y);
      })));
    }
    i = /* @__PURE__ */ p.getBoundingClientRect(), f.attr("width", i.width), f.attr("height", i.height);
  } else {
    r.includes("font-weight: bolder") && rh(h).selectAll("tspan").attr("font-weight", ""), l = h.children.length;
    let p = h.children[0];
    (h.textContent === "" || h.textContent.includes("&gt")) && (p.textContent = e[0] + e.substring(1).replaceAll("&gt;", ">").replaceAll("&lt;", "<").trim(), e[1] === " " && (p.textContent = p.textContent[0] + " " + p.textContent.substring(1))), p.textContent === "undefined" && (p.textContent = ""), i = /* @__PURE__ */ h.getBBox();
  }
  return s.attr("transform", "translate(0," + (-i.height / (2 * l) + o) + ")"), i.height;
}
m$1(Et, "addText");
async function Es(n2, t) {
  var _a2, _b2;
  let o = /* @__PURE__ */ Wl(), r = o.class.padding ?? 12, s = r, a = t.useHtmlLabels ?? uf(o.htmlLabels) ?? true, c = t;
  c.annotations = c.annotations ?? [], c.members = c.members ?? [], c.methods = c.methods ?? [];
  let { shapeSvg: e, bbox: h } = await js(n2, t, o, a, s), { labelStyles: i, nodeStyles: l } = k(t);
  t.labelStyle = i, t.cssStyles = c.styles || "";
  let p = ((_a2 = c.styles) == null ? void 0 : _a2.join(";")) || l || "";
  t.cssStyles || (t.cssStyles = /* @__PURE__ */ p.replaceAll("!important", "").split(";"));
  let f = c.members.length === 0 && c.methods.length === 0 && !((_b2 = o.class) == null ? void 0 : _b2.hideEmptyMembersBox), m = /* @__PURE__ */ D.svg(e), g = /* @__PURE__ */ M(t, {});
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  let d = h.width, x = h.height;
  c.members.length === 0 && c.methods.length === 0 ? x += s : c.members.length > 0 && c.methods.length === 0 && (x += s * 2);
  let y = -d / 2, b = -x / 2, S2 = /* @__PURE__ */ m.rectangle(y - r, b - r - (f ? r : c.members.length === 0 && c.methods.length === 0 ? -r / 2 : 0), d + 2 * r, x + 2 * r + (f ? r * 2 : c.members.length === 0 && c.methods.length === 0 ? -r : 0), g), $ = /* @__PURE__ */ e.insert(() => S2, ":first-child");
  $.attr("class", "basic label-container");
  let w = /* @__PURE__ */ $.node().getBBox();
  e.selectAll(".text").each((j, A, O) => {
    var _a3;
    let W = /* @__PURE__ */ rh(O[A]), G = /* @__PURE__ */ W.attr("transform"), L = 0;
    if (G) {
      let _ = /* @__PURE__ */ RegExp(/translate\(([^,]+),([^)]+)\)/).exec(G);
      _ && (L = /* @__PURE__ */ parseFloat(_[2]));
    }
    let V = L + b + r - (f ? r : c.members.length === 0 && c.methods.length === 0 ? -r / 2 : 0);
    a || (V -= 4);
    let E = y;
    (W.attr("class").includes("label-group") || W.attr("class").includes("annotation-group")) && (E = -((_a3 = W.node()) == null ? void 0 : _a3.getBBox().width) / 2 || 0, e.selectAll("text").each(function(I, _, U) {
      window.getComputedStyle(U[_]).textAnchor === "middle" && (E = 0);
    })), W.attr("transform", `translate(${E}, ${V})`);
  });
  let C = e.select(".annotation-group").node().getBBox().height - (f ? r / 2 : 0) || 0, B = e.select(".label-group").node().getBBox().height - (f ? r / 2 : 0) || 0, R = e.select(".members-group").node().getBBox().height - (f ? r / 2 : 0) || 0;
  if (c.members.length > 0 || c.methods.length > 0 || f) {
    let j = /* @__PURE__ */ m.line(w.x, C + B + b + r, w.x + w.width, C + B + b + r, g);
    e.insert(() => j).attr("class", "divider").attr("style", p);
  }
  if (f || c.members.length > 0 || c.methods.length > 0) {
    let j = /* @__PURE__ */ m.line(w.x, C + B + R + b + s * 2 + r, w.x + w.width, C + B + R + b + r + s * 2, g);
    e.insert(() => j).attr("class", "divider").attr("style", p);
  }
  if (c.look !== "handDrawn" && e.selectAll("path").attr("style", p), $.select(":nth-child(2)").attr("style", p), e.selectAll(".divider").select("path").attr("style", p), t.labelStyle ? e.selectAll("span").attr("style", t.labelStyle) : e.selectAll("span").attr("style", p), !a) {
    let j = /* @__PURE__ */ RegExp(/color\s*:\s*([^;]*)/), A = /* @__PURE__ */ j.exec(p);
    if (A) {
      let O = /* @__PURE__ */ A[0].replace("color", "fill");
      e.selectAll("tspan").attr("style", O);
    } else if (i) {
      let O = /* @__PURE__ */ j.exec(i);
      if (O) {
        let W = /* @__PURE__ */ O[0].replace("color", "fill");
        e.selectAll("tspan").attr("style", W);
      }
    }
  }
  return v(t, $), t.intersect = function(j) {
    return N.rect(t, j);
  }, e;
}
m$1(Es, "classBox");
var br = /* @__PURE__ */ m$1((n2) => {
  switch (n2) {
    case "Very High":
      return "red";
    case "High":
      return "orange";
    case "Medium":
      return null;
    case "Low":
      return "blue";
    case "Very Low":
      return "lightblue";
  }
}, "colorFromPriority");
async function As(n2, t, param) {
  var _a2, _b2;
  let { config: o } = param;
  let { labelStyles: r, nodeStyles: s } = k(t);
  t.labelStyle = r || "";
  let a = 10, c = t.width;
  t.width = (t.width ?? 200) - 10;
  let { shapeSvg: e, bbox: h, label: i } = await T(n2, t, /* @__PURE__ */ P(t)), l = t.padding || 10, p = "", f;
  "ticket" in t && t.ticket && ((_a2 = o == null ? void 0 : o.kanban) == null ? void 0 : _a2.ticketBaseUrl) && (p = (_b2 = o == null ? void 0 : o.kanban) == null ? void 0 : _b2.ticketBaseUrl.replace("#TICKET#", t.ticket), f = /* @__PURE__ */ e.insert("svg:a", ":first-child").attr("class", "kanban-ticket-link").attr("xlink:href", p).attr("target", "_blank"));
  let m = {
    useHtmlLabels: t.useHtmlLabels,
    labelStyle: t.labelStyle || "",
    width: t.width,
    img: t.img,
    padding: t.padding || 8,
    centerLabel: false
  }, g, d;
  f ? { label: g, bbox: d } = await Dt(f, "ticket" in t && t.ticket || "", m) : { label: g, bbox: d } = await Dt(e, "ticket" in t && t.ticket || "", m);
  let { label: x, bbox: y } = await Dt(e, "assigned" in t && t.assigned || "", m);
  t.width = c;
  let b = 10, S2 = (t == null ? void 0 : t.width) || 0, $ = Math.max(d.height, y.height) / 2, w = Math.max(h.height + b * 2, (t == null ? void 0 : t.height) || 0) + $, C = -S2 / 2, B = -w / 2;
  i.attr("transform", "translate(" + (l - S2 / 2) + ", " + (-$ - h.height / 2) + ")"), g.attr("transform", "translate(" + (l - S2 / 2) + ", " + (-$ + h.height / 2) + ")"), x.attr("transform", "translate(" + (l + S2 / 2 - y.width - 2 * a) + ", " + (-$ + h.height / 2) + ")");
  let R, { rx: j, ry: A } = t, { cssStyles: O } = t;
  if (t.look === "handDrawn") {
    let W = /* @__PURE__ */ D.svg(e), G = /* @__PURE__ */ M(t, {}), L = j || A ? W.path(/* @__PURE__ */ Q(C, B, S2, w, j || 0), G) : W.rectangle(C, B, S2, w, G);
    R = /* @__PURE__ */ e.insert(() => L, ":first-child"), R.attr("class", "basic label-container").attr("style", O || null);
  } else {
    R = /* @__PURE__ */ e.insert("rect", ":first-child"), R.attr("class", "basic label-container __APA__").attr("style", s).attr("rx", j ?? 5).attr("ry", A ?? 5).attr("x", C).attr("y", B).attr("width", S2).attr("height", w);
    let W = "priority" in t && t.priority;
    if (W) {
      let G = /* @__PURE__ */ e.append("line"), L = C + 2, V = B + Math.floor((j ?? 0) / 2), E = B + w - Math.floor((j ?? 0) / 2);
      G.attr("x1", L).attr("y1", V).attr("x2", L).attr("y2", E).attr("stroke-width", "4").attr("stroke", /* @__PURE__ */ br(W));
    }
  }
  return v(t, R), t.height = w, t.intersect = function(W) {
    return N.rect(t, W);
  }, e;
}
m$1(As, "kanbanItem");
var Sr = [
  {
    semanticName: "Process",
    name: "Rectangle",
    shortName: "rect",
    description: "Standard process shape",
    aliases: [
      "proc",
      "process",
      "rectangle"
    ],
    internalAliases: [
      "squareRect"
    ],
    handler: xs
  },
  {
    semanticName: "Event",
    name: "Rounded Rectangle",
    shortName: "rounded",
    description: "Represents an event",
    aliases: [
      "event"
    ],
    internalAliases: [
      "roundedRect"
    ],
    handler: ds
  },
  {
    semanticName: "Terminal Point",
    name: "Stadium",
    shortName: "stadium",
    description: "Terminal point",
    aliases: [
      "terminal",
      "pill"
    ],
    handler: bs
  },
  {
    semanticName: "Subprocess",
    name: "Framed Rectangle",
    shortName: "fr-rect",
    description: "Subprocess",
    aliases: [
      "subprocess",
      "subproc",
      "framed-rectangle",
      "subroutine"
    ],
    handler: Ds
  },
  {
    semanticName: "Database",
    name: "Cylinder",
    shortName: "cyl",
    description: "Database storage",
    aliases: [
      "db",
      "database",
      "cylinder"
    ],
    handler: Ie
  },
  {
    semanticName: "Start",
    name: "Circle",
    shortName: "circle",
    description: "Starting point",
    aliases: [
      "circ"
    ],
    handler: Ae
  },
  {
    semanticName: "Decision",
    name: "Diamond",
    shortName: "diam",
    description: "Decision-making step",
    aliases: [
      "decision",
      "diamond",
      "question"
    ],
    handler: ms
  },
  {
    semanticName: "Prepare Conditional",
    name: "Hexagon",
    shortName: "hex",
    description: "Preparation or condition step",
    aliases: [
      "hexagon",
      "prepare"
    ],
    handler: Ze
  },
  {
    semanticName: "Data Input/Output",
    name: "Lean Right",
    shortName: "lean-r",
    description: "Represents input or output",
    aliases: [
      "lean-right",
      "in-out"
    ],
    internalAliases: [
      "lean_right"
    ],
    handler: as
  },
  {
    semanticName: "Data Input/Output",
    name: "Lean Left",
    shortName: "lean-l",
    description: "Represents output or input",
    aliases: [
      "lean-left",
      "out-in"
    ],
    internalAliases: [
      "lean_left"
    ],
    handler: os
  },
  {
    semanticName: "Priority Action",
    name: "Trapezoid Base Bottom",
    shortName: "trap-b",
    description: "Priority action",
    aliases: [
      "priority",
      "trapezoid-bottom",
      "trapezoid"
    ],
    handler: Ps
  },
  {
    semanticName: "Manual Operation",
    name: "Trapezoid Base Top",
    shortName: "trap-t",
    description: "Represents a manual task",
    aliases: [
      "manual",
      "trapezoid-top",
      "inv-trapezoid"
    ],
    internalAliases: [
      "inv_trapezoid"
    ],
    handler: ss
  },
  {
    semanticName: "Stop",
    name: "Double Circle",
    shortName: "dbl-circ",
    description: "Represents a stop point",
    aliases: [
      "double-circle"
    ],
    internalAliases: [
      "doublecircle"
    ],
    handler: _e
  },
  {
    semanticName: "Text Block",
    name: "Text Block",
    shortName: "text",
    description: "Text block",
    handler: ks
  },
  {
    semanticName: "Card",
    name: "Notched Rectangle",
    shortName: "notch-rect",
    description: "Represents a card",
    aliases: [
      "card",
      "notched-rectangle"
    ],
    handler: je
  },
  {
    semanticName: "Lined/Shaded Process",
    name: "Lined Rectangle",
    shortName: "lin-rect",
    description: "Lined process shape",
    aliases: [
      "lined-rectangle",
      "lined-process",
      "lin-proc",
      "shaded-process"
    ],
    handler: us
  },
  {
    semanticName: "Start",
    name: "Small Circle",
    shortName: "sm-circ",
    description: "Small starting point",
    aliases: [
      "start",
      "small-circle"
    ],
    internalAliases: [
      "stateStart"
    ],
    handler: Ns
  },
  {
    semanticName: "Stop",
    name: "Framed Circle",
    shortName: "fr-circ",
    description: "Stop point",
    aliases: [
      "stop",
      "framed-circle"
    ],
    internalAliases: [
      "stateEnd"
    ],
    handler: ws
  },
  {
    semanticName: "Fork/Join",
    name: "Filled Rectangle",
    shortName: "fork",
    description: "Fork or join in process flow",
    aliases: [
      "join"
    ],
    internalAliases: [
      "forkJoin"
    ],
    handler: Xe
  },
  {
    semanticName: "Collate",
    name: "Hourglass",
    shortName: "hourglass",
    description: "Represents a collate operation",
    aliases: [
      "hourglass",
      "collate"
    ],
    handler: Ue
  },
  {
    semanticName: "Comment",
    name: "Curly Brace",
    shortName: "brace",
    description: "Adds a comment",
    aliases: [
      "comment",
      "brace-l"
    ],
    handler: Le
  },
  {
    semanticName: "Comment Right",
    name: "Curly Brace",
    shortName: "brace-r",
    description: "Adds a comment",
    handler: He
  },
  {
    semanticName: "Comment with braces on both sides",
    name: "Curly Braces",
    shortName: "braces",
    description: "Adds a comment",
    handler: Ve
  },
  {
    semanticName: "Com Link",
    name: "Lightning Bolt",
    shortName: "bolt",
    description: "Communication link",
    aliases: [
      "com-link",
      "lightning-bolt"
    ],
    handler: is
  },
  {
    semanticName: "Document",
    name: "Document",
    shortName: "doc",
    description: "Represents a document",
    aliases: [
      "doc",
      "document"
    ],
    handler: Bs
  },
  {
    semanticName: "Delay",
    name: "Half-Rounded Rectangle",
    shortName: "delay",
    description: "Represents a delay",
    aliases: [
      "half-rounded-rectangle"
    ],
    handler: Ye
  },
  {
    semanticName: "Direct Access Storage",
    name: "Horizontal Cylinder",
    shortName: "h-cyl",
    description: "Direct access storage",
    aliases: [
      "das",
      "horizontal-cylinder"
    ],
    handler: $s
  },
  {
    semanticName: "Disk Storage",
    name: "Lined Cylinder",
    shortName: "lin-cyl",
    description: "Disk storage",
    aliases: [
      "disk",
      "lined-cylinder"
    ],
    handler: ns
  },
  {
    semanticName: "Display",
    name: "Curved Trapezoid",
    shortName: "curv-trap",
    description: "Represents a display",
    aliases: [
      "curved-trapezoid",
      "display"
    ],
    handler: We
  },
  {
    semanticName: "Divided Process",
    name: "Divided Rectangle",
    shortName: "div-rect",
    description: "Divided process shape",
    aliases: [
      "div-proc",
      "divided-rectangle",
      "divided-process"
    ],
    handler: Fe
  },
  {
    semanticName: "Extract",
    name: "Triangle",
    shortName: "tri",
    description: "Extraction process",
    aliases: [
      "extract",
      "triangle"
    ],
    handler: Cs
  },
  {
    semanticName: "Internal Storage",
    name: "Window Pane",
    shortName: "win-pane",
    description: "Internal storage",
    aliases: [
      "internal-storage",
      "window-pane"
    ],
    handler: Gs
  },
  {
    semanticName: "Junction",
    name: "Filled Circle",
    shortName: "f-circ",
    description: "Junction point",
    aliases: [
      "junction",
      "filled-circle"
    ],
    handler: ze
  },
  {
    semanticName: "Loop Limit",
    name: "Trapezoidal Pentagon",
    shortName: "notch-pent",
    description: "Loop limit step",
    aliases: [
      "loop-limit",
      "notched-pentagon"
    ],
    handler: Ts
  },
  {
    semanticName: "Manual File",
    name: "Flipped Triangle",
    shortName: "flip-tri",
    description: "Manual file operation",
    aliases: [
      "manual-file",
      "flipped-triangle"
    ],
    handler: qe
  },
  {
    semanticName: "Manual Input",
    name: "Sloped Rectangle",
    shortName: "sl-rect",
    description: "Manual input step",
    aliases: [
      "manual-input",
      "sloped-rectangle"
    ],
    handler: ys
  },
  {
    semanticName: "Multi-Document",
    name: "Stacked Document",
    shortName: "docs",
    description: "Multiple documents",
    aliases: [
      "documents",
      "st-doc",
      "stacked-document"
    ],
    handler: hs
  },
  {
    semanticName: "Multi-Process",
    name: "Stacked Rectangle",
    shortName: "st-rect",
    description: "Multiple processes",
    aliases: [
      "procs",
      "processes",
      "stacked-rectangle"
    ],
    handler: cs
  },
  {
    semanticName: "Stored Data",
    name: "Bow Tie Rectangle",
    shortName: "bow-rect",
    description: "Stored data",
    aliases: [
      "stored-data",
      "bow-tie-rectangle"
    ],
    handler: Ge
  },
  {
    semanticName: "Summary",
    name: "Crossed Circle",
    shortName: "cross-circ",
    description: "Summary",
    aliases: [
      "summary",
      "crossed-circle"
    ],
    handler: Oe
  },
  {
    semanticName: "Tagged Document",
    name: "Tagged Document",
    shortName: "tag-doc",
    description: "Tagged document",
    aliases: [
      "tag-doc",
      "tagged-document"
    ],
    handler: vs
  },
  {
    semanticName: "Tagged Process",
    name: "Tagged Rectangle",
    shortName: "tag-rect",
    description: "Tagged process",
    aliases: [
      "tagged-rectangle",
      "tag-proc",
      "tagged-process"
    ],
    handler: Ms
  },
  {
    semanticName: "Paper Tape",
    name: "Flag",
    shortName: "flag",
    description: "Paper tape",
    aliases: [
      "paper-tape"
    ],
    handler: Rs
  },
  {
    semanticName: "Odd",
    name: "Odd",
    shortName: "odd",
    description: "Odd shape",
    internalAliases: [
      "rect_left_inv_arrow"
    ],
    handler: fs
  },
  {
    semanticName: "Lined Document",
    name: "Lined Document",
    shortName: "lin-doc",
    description: "Lined document",
    aliases: [
      "lined-document"
    ],
    handler: ls
  }
], wr = /* @__PURE__ */ m$1(() => {
  let t = [
    .../* @__PURE__ */ Object.entries({
      state: Ss,
      choice: Ee,
      note: ps,
      rectWithTitle: gs,
      labelRect: rs,
      iconSquare: ts,
      iconCircle: Je,
      icon: Qe,
      iconRounded: Ke,
      imageSquare: es,
      anchor: Be,
      kanbanItem: As,
      classBox: Es
    }),
    .../* @__PURE__ */ Sr.flatMap((o) => [
      o.shortName,
      ..."aliases" in o ? o.aliases : [],
      ..."internalAliases" in o ? o.internalAliases : []
    ].map((s) => [
      s,
      o.handler
    ]))
  ];
  return Object.fromEntries(t);
}, "generateShapeMap"), se = /* @__PURE__ */ wr();
function gf(n2) {
  return n2 in se;
}
m$1(gf, "isValidShape");
var At = /* @__PURE__ */ new Map();
async function bf(n2, t, o) {
  let r, s;
  t.shape === "rect" && (t.rx && t.ry ? t.shape = "roundedRect" : t.shape = "squareRect");
  let a = t.shape ? se[t.shape] : void 0;
  if (!a) throw new Error(`No such shape: ${t.shape}. Please check your syntax.`);
  if (t.link) {
    let c;
    o.config.securityLevel === "sandbox" ? c = "_top" : t.linkTarget && (c = t.linkTarget || "_blank"), r = /* @__PURE__ */ n2.insert("svg:a").attr("xlink:href", t.link).attr("target", c ?? null), s = await a(r, t, o);
  } else s = await a(n2, t, o), r = s;
  return t.tooltip && s.attr("title", t.tooltip), At.set(t.id, r), t.haveCallback && r.attr("class", r.attr("class") + " clickable"), r;
}
m$1(bf, "insertNode");
var Sf = /* @__PURE__ */ m$1((n2, t) => {
  At.set(t.id, n2);
}, "setNodeElem"), wf = /* @__PURE__ */ m$1(() => {
  At.clear();
}, "clear"), Nf = /* @__PURE__ */ m$1((n2) => {
  let t = /* @__PURE__ */ At.get(n2.id);
  tt$1.trace("Transforming node", n2.diff, n2, "translate(" + (n2.x - n2.width / 2 - 5) + ", " + n2.width / 2 + ")");
  let o = 8, r = n2.diff || 0;
  return n2.clusterNode ? t.attr("transform", "translate(" + (n2.x + r - n2.width / 2) + ", " + (n2.y - n2.height / 2 - o) + ")") : t.attr("transform", "translate(" + n2.x + ", " + n2.y + ")"), r;
}, "positionNode");
export {
  D,
  Nf as N,
  St as S,
  T,
  Sf as a,
  bf as b,
  gf as g,
  oo as o,
  ro as r,
  v,
  wf as w
};
