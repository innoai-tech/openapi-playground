var __typeError = (msg) => {
  throw TypeError(msg);
};
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var _a, __, _b, __2, _c, __3, _d, __4, _e2, __5, _f, __6, _g, __7, _h, __8, _i, __9, _j, __10;
import { S as St$1 } from "./vendor-min-mermaid~chunk-2VPXETT4.BF22TMdS.chunk.js";
import { n } from "./vendor-min-mermaid~chunk-LM6QDVU5.CCcUlC7q.chunk.js";
import { Q as Qt$1 } from "./vendor-min-mermaid~chunk-HESFG3RP.Dj2hmxyj.chunk.js";
import { J as Je$1, X as Xe$1, S, M as M$1 } from "./vendor-min-mermaid~chunk-YM3XIQPS.DIMTnqRF.chunk.js";
import { t as tt$1, H as Hl, m as mf, i as ih, O as Oe$1, p as pl, E as Er, R as Rl, C as Cf, g as gC, r as Ef, q as mC } from "./vendor-min-mermaid~chunk-ZKYS2E5M.CwhZsQ7z.chunk.js";
import { m as m$1 } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Cm_2-rE8.chunk.js";
var C = m$1(async (l, t, o) => {
  var _a2, _b2;
  let r, e = t.useHtmlLabels || mf((_a2 = Hl()) == null ? void 0 : _a2.htmlLabels);
  o ? r = o : r = "node default";
  let a = l.insert("g").attr("class", r).attr("id", t.domId || t.id), h = a.insert("g").attr("class", "label").attr("style", Je$1(t.labelStyle)), s;
  t.label === void 0 ? s = "" : s = typeof t.label == "string" ? t.label : t.label[0];
  let c = await Qt$1(h, Oe$1(Xe$1(s), Hl()), {
    useHtmlLabels: e,
    width: t.width || ((_b2 = Hl().flowchart) == null ? void 0 : _b2.wrappingWidth),
    cssClasses: "markdown-node-label",
    style: t.labelStyle,
    addSvgBackground: !!t.icon || !!t.img
  }), i = c.getBBox(), n2 = ((t == null ? void 0 : t.padding) ?? 0) / 2;
  if (e) {
    let p = c.children[0], f = ih(c), m = p.getElementsByTagName("img");
    if (m) {
      let g = s.replace(/<img[^>]*>/g, "").trim() === "";
      await Promise.all([
        ...m
      ].map((d) => new Promise((y) => {
        function x() {
          if (d.style.display = "flex", d.style.flexDirection = "column", g) {
            let b = Hl().fontSize ? Hl().fontSize : window.getComputedStyle(document.body).fontSize, S$1 = 5, [$ = pl.fontSize] = S(b), w = $ * S$1 + "px";
            d.style.minWidth = w, d.style.maxWidth = w;
          } else d.style.width = "100%";
          y(d);
        }
        m$1(x, "setupImage"), setTimeout(() => {
          d.complete && x();
        }), d.addEventListener("error", x), d.addEventListener("load", x);
      })));
    }
    i = p.getBoundingClientRect(), f.attr("width", i.width), f.attr("height", i.height);
  }
  return e ? h.attr("transform", "translate(" + -i.width / 2 + ", " + -i.height / 2 + ")") : h.attr("transform", "translate(0, " + -i.height / 2 + ")"), t.centerLabel && h.attr("transform", "translate(" + -i.width / 2 + ", " + -i.height / 2 + ")"), h.insert("rect", ":first-child"), {
    shapeSvg: a,
    bbox: i,
    halfPadding: n2,
    label: h
  };
}, "labelHelper"), Ct = m$1(async (l, t, o) => {
  var _a2, _b2, _c2, _d2, _e3, _f2;
  let r = o.useHtmlLabels || mf((_b2 = (_a2 = Hl()) == null ? void 0 : _a2.flowchart) == null ? void 0 : _b2.htmlLabels), e = l.insert("g").attr("class", "label").attr("style", o.labelStyle || ""), a = await Qt$1(e, Oe$1(Xe$1(t), Hl()), {
    useHtmlLabels: r,
    width: o.width || ((_d2 = (_c2 = Hl()) == null ? void 0 : _c2.flowchart) == null ? void 0 : _d2.wrappingWidth),
    style: o.labelStyle,
    addSvgBackground: !!o.icon || !!o.img
  }), h = a.getBBox(), s = o.padding / 2;
  if (mf((_f2 = (_e3 = Hl()) == null ? void 0 : _e3.flowchart) == null ? void 0 : _f2.htmlLabels)) {
    let c = a.children[0], i = ih(a);
    h = c.getBoundingClientRect(), i.attr("width", h.width), i.attr("height", h.height);
  }
  return r ? e.attr("transform", "translate(" + -h.width / 2 + ", " + -h.height / 2 + ")") : e.attr("transform", "translate(0, " + -h.height / 2 + ")"), o.centerLabel && e.attr("transform", "translate(" + -h.width / 2 + ", " + -h.height / 2 + ")"), e.insert("rect", ":first-child"), {
    shapeSvg: l,
    bbox: h,
    halfPadding: s,
    label: e
  };
}, "insertLabel"), M = m$1((l, t) => {
  let o = t.node().getBBox();
  l.width = o.width, l.height = o.height;
}, "updateNodeBounds");
var T = m$1((l, t) => (l.look === "handDrawn" ? "rough-node" : "node") + " " + l.cssClasses + " " + (t || ""), "getNodeClasses");
function V(l) {
  let t = l.map((o, r) => `${r === 0 ? "M" : "L"}${o.x},${o.y}`);
  return t.push("Z"), t.join(" ");
}
m$1(V, "createPathFromPoints");
function at(l, t, o, r, e, a) {
  let h = [], c = o - l, i = r - t, n2 = c / a, p = 2 * Math.PI / n2, f = t + i / 2;
  for (let m = 0; m <= 50; m++) {
    let g = m / 50, d = l + g * c, y = f + e * Math.sin(p * (d - l));
    h.push({
      x: d,
      y
    });
  }
  return h;
}
m$1(at, "generateFullSineWavePoints");
function Rt(l, t, o, r, e, a) {
  let h = [], s = e * Math.PI / 180, n2 = (a * Math.PI / 180 - s) / (r - 1);
  for (let p = 0; p < r; p++) {
    let f = s + p * n2, m = l + o * Math.cos(f), g = t + o * Math.sin(f);
    h.push({
      x: -m,
      y: -g
    });
  }
  return h;
}
m$1(Rt, "generateCirclePoints");
function Zt(l, t, o) {
  if (l && l.length) {
    let [r, e] = t, a = Math.PI / 180 * o, h = Math.cos(a), s = Math.sin(a);
    for (let c of l) {
      let [i, n2] = c;
      c[0] = (i - r) * h - (n2 - e) * s + r, c[1] = (i - r) * s + (n2 - e) * h + e;
    }
  }
}
m$1(Zt, "t");
function Ys(l, t) {
  return l[0] === t[0] && l[1] === t[1];
}
m$1(Ys, "e");
function Zs(l, t, o) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
  let e = o, a = Math.max(t, 0.1), h = l[0] && l[0][0] && typeof l[0][0] == "number" ? [
    l
  ] : l, s = [
    0,
    0
  ];
  if (e) for (let i of h) Zt(i, s, e);
  let c = function(i, n2, p) {
    let f = [];
    for (let b of i) {
      let S2 = [
        ...b
      ];
      Ys(S2[0], S2[S2.length - 1]) || S2.push([
        S2[0][0],
        S2[0][1]
      ]), S2.length > 2 && f.push(S2);
    }
    let m = [];
    n2 = Math.max(n2, 0.1);
    let g = [];
    for (let b of f) for (let S2 = 0; S2 < b.length - 1; S2++) {
      let $ = b[S2], w = b[S2 + 1];
      if ($[1] !== w[1]) {
        let P = Math.min($[1], w[1]);
        g.push({
          ymin: P,
          ymax: Math.max($[1], w[1]),
          x: P === $[1] ? $[0] : w[0],
          islope: (w[0] - $[0]) / (w[1] - $[1])
        });
      }
    }
    if (g.sort((b, S2) => b.ymin < S2.ymin ? -1 : b.ymin > S2.ymin ? 1 : b.x < S2.x ? -1 : b.x > S2.x ? 1 : b.ymax === S2.ymax ? 0 : (b.ymax - S2.ymax) / Math.abs(b.ymax - S2.ymax)), !g.length) return m;
    let d = [], y = g[0].ymin, x = 0;
    for (; d.length || g.length; ) {
      if (g.length) {
        let b = -1;
        for (let S2 = 0; S2 < g.length && !(g[S2].ymin > y); S2++) b = S2;
        g.splice(0, b + 1).forEach((S2) => {
          d.push({
            s: y,
            edge: S2
          });
        });
      }
      if (d = d.filter((b) => !(b.edge.ymax <= y)), d.sort((b, S2) => b.edge.x === S2.edge.x ? 0 : (b.edge.x - S2.edge.x) / Math.abs(b.edge.x - S2.edge.x)), (p !== 1 || x % n2 == 0) && d.length > 1) for (let b = 0; b < d.length; b += 2) {
        let S2 = b + 1;
        if (S2 >= d.length) break;
        let $ = d[b].edge, w = d[S2].edge;
        m.push([
          [
            Math.round($.x),
            y
          ],
          [
            Math.round(w.x),
            y
          ]
        ]);
      }
      y += p, d.forEach((b) => {
        b.edge.x = b.edge.x + p * b.edge.islope;
      }), x++;
    }
    return m;
  }(h, a, r);
  if (e) {
    for (let i of h) Zt(i, s, -e);
    (function(i, n2, p) {
      let f = [];
      i.forEach((m) => f.push(...m)), Zt(f, n2, p);
    })(c, s, -e);
  }
  return c;
}
m$1(Zs, "s");
function kt(l, t) {
  var o;
  let r = t.hachureAngle + 90, e = t.hachureGap;
  e < 0 && (e = 4 * t.strokeWidth), e = Math.round(Math.max(e, 0.1));
  let a = 1;
  return t.roughness >= 1 && (((o = t.randomizer) === null || o === void 0 ? void 0 : o.next()) || Math.random()) > 0.7 && (a = e), Zs(l, e, r, a || 1);
}
m$1(kt, "n");
var Mt = (_a = class {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, o) {
    return this._fillPolygons(t, o);
  }
  _fillPolygons(t, o) {
    let r = kt(t, o);
    return {
      type: "fillSketch",
      ops: this.renderLines(r, o)
    };
  }
  renderLines(t, o) {
    let r = [];
    for (let e of t) r.push(...this.helper.doubleLineOps(e[0][0], e[0][1], e[1][0], e[1][1], o));
    return r;
  }
}, __ = new WeakMap(), __privateAdd(_a, __, m$1(_a, "o")), _a);
function Vt(l) {
  let t = l[0], o = l[1];
  return Math.sqrt(Math.pow(t[0] - o[0], 2) + Math.pow(t[1] - o[1], 2));
}
m$1(Vt, "a");
var te = (_b = class extends Mt {
  fillPolygons(t, o) {
    let r = o.hachureGap;
    r < 0 && (r = 4 * o.strokeWidth), r = Math.max(r, 0.1);
    let e = kt(t, Object.assign({}, o, {
      hachureGap: r
    })), a = Math.PI / 180 * o.hachureAngle, h = [], s = 0.5 * r * Math.cos(a), c = 0.5 * r * Math.sin(a);
    for (let [i, n2] of e) Vt([
      i,
      n2
    ]) && h.push([
      [
        i[0] - s,
        i[1] + c
      ],
      [
        ...n2
      ]
    ], [
      [
        i[0] + s,
        i[1] - c
      ],
      [
        ...n2
      ]
    ]);
    return {
      type: "fillSketch",
      ops: this.renderLines(h, o)
    };
  }
}, __2 = new WeakMap(), __privateAdd(_b, __2, m$1(_b, "h")), _b), ee = (_c = class extends Mt {
  fillPolygons(t, o) {
    let r = this._fillPolygons(t, o), e = Object.assign({}, o, {
      hachureAngle: o.hachureAngle + 90
    }), a = this._fillPolygons(t, e);
    return r.ops = r.ops.concat(a.ops), r;
  }
}, __3 = new WeakMap(), __privateAdd(_c, __3, m$1(_c, "r")), _c), se = (_d = class {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, o) {
    let r = kt(t, o = Object.assign({}, o, {
      hachureAngle: 0
    }));
    return this.dotsOnLines(r, o);
  }
  dotsOnLines(t, o) {
    let r = [], e = o.hachureGap;
    e < 0 && (e = 4 * o.strokeWidth), e = Math.max(e, 0.1);
    let a = o.fillWeight;
    a < 0 && (a = o.strokeWidth / 2);
    let h = e / 4;
    for (let s of t) {
      let c = Vt(s), i = c / e, n2 = Math.ceil(i) - 1, p = c - n2 * e, f = (s[0][0] + s[1][0]) / 2 - e / 4, m = Math.min(s[0][1], s[1][1]);
      for (let g = 0; g < n2; g++) {
        let d = m + p + g * e, y = f - h + 2 * Math.random() * h, x = d - h + 2 * Math.random() * h, b = this.helper.ellipse(y, x, a, a, o);
        r.push(...b.ops);
      }
    }
    return {
      type: "fillSketch",
      ops: r
    };
  }
}, __4 = new WeakMap(), __privateAdd(_d, __4, m$1(_d, "i")), _d), re = (_e2 = class {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, o) {
    let r = kt(t, o);
    return {
      type: "fillSketch",
      ops: this.dashedLine(r, o)
    };
  }
  dashedLine(t, o) {
    let r = o.dashOffset < 0 ? o.hachureGap < 0 ? 4 * o.strokeWidth : o.hachureGap : o.dashOffset, e = o.dashGap < 0 ? o.hachureGap < 0 ? 4 * o.strokeWidth : o.hachureGap : o.dashGap, a = [];
    return t.forEach((h) => {
      let s = Vt(h), c = Math.floor(s / (r + e)), i = (s + e - c * (r + e)) / 2, n2 = h[0], p = h[1];
      n2[0] > p[0] && (n2 = h[1], p = h[0]);
      let f = Math.atan((p[1] - n2[1]) / (p[0] - n2[0]));
      for (let m = 0; m < c; m++) {
        let g = m * (r + e), d = g + r, y = [
          n2[0] + g * Math.cos(f) + i * Math.cos(f),
          n2[1] + g * Math.sin(f) + i * Math.sin(f)
        ], x = [
          n2[0] + d * Math.cos(f) + i * Math.cos(f),
          n2[1] + d * Math.sin(f) + i * Math.sin(f)
        ];
        a.push(...this.helper.doubleLineOps(y[0], y[1], x[0], x[1], o));
      }
    }), a;
  }
}, __5 = new WeakMap(), __privateAdd(_e2, __5, m$1(_e2, "c")), _e2), oe = (_f = class {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, o) {
    let r = o.hachureGap < 0 ? 4 * o.strokeWidth : o.hachureGap, e = o.zigzagOffset < 0 ? r : o.zigzagOffset, a = kt(t, o = Object.assign({}, o, {
      hachureGap: r + e
    }));
    return {
      type: "fillSketch",
      ops: this.zigzagLines(a, e, o)
    };
  }
  zigzagLines(t, o, r) {
    let e = [];
    return t.forEach((a) => {
      let h = Vt(a), s = Math.round(h / (2 * o)), c = a[0], i = a[1];
      c[0] > i[0] && (c = a[1], i = a[0]);
      let n2 = Math.atan((i[1] - c[1]) / (i[0] - c[0]));
      for (let p = 0; p < s; p++) {
        let f = 2 * p * o, m = 2 * (p + 1) * o, g = Math.sqrt(2 * Math.pow(o, 2)), d = [
          c[0] + f * Math.cos(n2),
          c[1] + f * Math.sin(n2)
        ], y = [
          c[0] + m * Math.cos(n2),
          c[1] + m * Math.sin(n2)
        ], x = [
          d[0] + g * Math.cos(n2 + Math.PI / 4),
          d[1] + g * Math.sin(n2 + Math.PI / 4)
        ];
        e.push(...this.helper.doubleLineOps(d[0], d[1], x[0], x[1], r), ...this.helper.doubleLineOps(x[0], x[1], y[0], y[1], r));
      }
    }), e;
  }
}, __6 = new WeakMap(), __privateAdd(_f, __6, m$1(_f, "l")), _f), et = {}, ae = (_g = class {
  constructor(t) {
    this.seed = t;
  }
  next() {
    return this.seed ? (2 ** 31 - 1 & (this.seed = Math.imul(48271, this.seed))) / 2 ** 31 : Math.random();
  }
}, __7 = new WeakMap(), __privateAdd(_g, __7, m$1(_g, "p")), _g), Us = 0, Ut = 1, be = 2, Gt = {
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
function Qt(l, t) {
  return l.type === t;
}
m$1(Qt, "k");
function pe(l) {
  let t = [], o = function(h) {
    let s = new Array();
    for (; h !== ""; ) if (h.match(/^([ \t\r\n,]+)/)) h = h.substr(RegExp.$1.length);
    else if (h.match(/^([aAcChHlLmMqQsStTvVzZ])/)) s[s.length] = {
      type: Us,
      text: RegExp.$1
    }, h = h.substr(RegExp.$1.length);
    else {
      if (!h.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/)) return [];
      s[s.length] = {
        type: Ut,
        text: `${parseFloat(RegExp.$1)}`
      }, h = h.substr(RegExp.$1.length);
    }
    return s[s.length] = {
      type: be,
      text: ""
    }, s;
  }(l), r = "BOD", e = 0, a = o[e];
  for (; !Qt(a, be); ) {
    let h = 0, s = [];
    if (r === "BOD") {
      if (a.text !== "M" && a.text !== "m") return pe("M0,0" + l);
      e++, h = Gt[a.text], r = a.text;
    } else Qt(a, Ut) ? h = Gt[r] : (e++, h = Gt[a.text], r = a.text);
    if (!(e + h < o.length)) throw new Error("Path data ended short");
    for (let c = e; c < e + h; c++) {
      let i = o[c];
      if (!Qt(i, Ut)) throw new Error("Param not a number: " + r + "," + i.text);
      s[s.length] = +i.text;
    }
    if (typeof Gt[r] != "number") throw new Error("Bad segment: " + r);
    {
      let c = {
        key: r,
        data: s
      };
      t.push(c), e += h, a = o[e], r === "M" && (r = "L"), r === "m" && (r = "l");
    }
  }
  return t;
}
m$1(pe, "b");
function $e(l) {
  let t = 0, o = 0, r = 0, e = 0, a = [];
  for (let { key: h, data: s } of l) switch (h) {
    case "M":
      a.push({
        key: "M",
        data: [
          ...s
        ]
      }), [t, o] = s, [r, e] = s;
      break;
    case "m":
      t += s[0], o += s[1], a.push({
        key: "M",
        data: [
          t,
          o
        ]
      }), r = t, e = o;
      break;
    case "L":
      a.push({
        key: "L",
        data: [
          ...s
        ]
      }), [t, o] = s;
      break;
    case "l":
      t += s[0], o += s[1], a.push({
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
          ...s
        ]
      }), t = s[4], o = s[5];
      break;
    case "c": {
      let c = s.map((i, n2) => n2 % 2 ? i + o : i + t);
      a.push({
        key: "C",
        data: c
      }), t = c[4], o = c[5];
      break;
    }
    case "Q":
      a.push({
        key: "Q",
        data: [
          ...s
        ]
      }), t = s[2], o = s[3];
      break;
    case "q": {
      let c = s.map((i, n2) => n2 % 2 ? i + o : i + t);
      a.push({
        key: "Q",
        data: c
      }), t = c[2], o = c[3];
      break;
    }
    case "A":
      a.push({
        key: "A",
        data: [
          ...s
        ]
      }), t = s[5], o = s[6];
      break;
    case "a":
      t += s[5], o += s[6], a.push({
        key: "A",
        data: [
          s[0],
          s[1],
          s[2],
          s[3],
          s[4],
          t,
          o
        ]
      });
      break;
    case "H":
      a.push({
        key: "H",
        data: [
          ...s
        ]
      }), t = s[0];
      break;
    case "h":
      t += s[0], a.push({
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
          ...s
        ]
      }), o = s[0];
      break;
    case "v":
      o += s[0], a.push({
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
          ...s
        ]
      }), t = s[2], o = s[3];
      break;
    case "s": {
      let c = s.map((i, n2) => n2 % 2 ? i + o : i + t);
      a.push({
        key: "S",
        data: c
      }), t = c[2], o = c[3];
      break;
    }
    case "T":
      a.push({
        key: "T",
        data: [
          ...s
        ]
      }), t = s[0], o = s[1];
      break;
    case "t":
      t += s[0], o += s[1], a.push({
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
      }), t = r, o = e;
  }
  return a;
}
m$1($e, "y");
function Pe(l) {
  let t = [], o = "", r = 0, e = 0, a = 0, h = 0, s = 0, c = 0;
  for (let { key: i, data: n2 } of l) {
    switch (i) {
      case "M":
        t.push({
          key: "M",
          data: [
            ...n2
          ]
        }), [r, e] = n2, [a, h] = n2;
        break;
      case "C":
        t.push({
          key: "C",
          data: [
            ...n2
          ]
        }), r = n2[4], e = n2[5], s = n2[2], c = n2[3];
        break;
      case "L":
        t.push({
          key: "L",
          data: [
            ...n2
          ]
        }), [r, e] = n2;
        break;
      case "H":
        r = n2[0], t.push({
          key: "L",
          data: [
            r,
            e
          ]
        });
        break;
      case "V":
        e = n2[0], t.push({
          key: "L",
          data: [
            r,
            e
          ]
        });
        break;
      case "S": {
        let p = 0, f = 0;
        o === "C" || o === "S" ? (p = r + (r - s), f = e + (e - c)) : (p = r, f = e), t.push({
          key: "C",
          data: [
            p,
            f,
            ...n2
          ]
        }), s = n2[0], c = n2[1], r = n2[2], e = n2[3];
        break;
      }
      case "T": {
        let [p, f] = n2, m = 0, g = 0;
        o === "Q" || o === "T" ? (m = r + (r - s), g = e + (e - c)) : (m = r, g = e);
        let d = r + 2 * (m - r) / 3, y = e + 2 * (g - e) / 3, x = p + 2 * (m - p) / 3, b = f + 2 * (g - f) / 3;
        t.push({
          key: "C",
          data: [
            d,
            y,
            x,
            b,
            p,
            f
          ]
        }), s = m, c = g, r = p, e = f;
        break;
      }
      case "Q": {
        let [p, f, m, g] = n2, d = r + 2 * (p - r) / 3, y = e + 2 * (f - e) / 3, x = m + 2 * (p - m) / 3, b = g + 2 * (f - g) / 3;
        t.push({
          key: "C",
          data: [
            d,
            y,
            x,
            b,
            m,
            g
          ]
        }), s = p, c = f, r = m, e = g;
        break;
      }
      case "A": {
        let p = Math.abs(n2[0]), f = Math.abs(n2[1]), m = n2[2], g = n2[3], d = n2[4], y = n2[5], x = n2[6];
        p === 0 || f === 0 ? (t.push({
          key: "C",
          data: [
            r,
            e,
            y,
            x,
            y,
            x
          ]
        }), r = y, e = x) : (r !== y || e !== x) && (Be(r, e, y, x, p, f, m, g, d).forEach(function(b) {
          t.push({
            key: "C",
            data: b
          });
        }), r = y, e = x);
        break;
      }
      case "Z":
        t.push({
          key: "Z",
          data: []
        }), r = a, e = h;
    }
    o = i;
  }
  return t;
}
m$1(Pe, "m");
function vt(l, t, o) {
  return [
    l * Math.cos(o) - t * Math.sin(o),
    l * Math.sin(o) + t * Math.cos(o)
  ];
}
m$1(vt, "w");
function Be(l, t, o, r, e, a, h, s, c, i) {
  let n2 = (p = h, Math.PI * p / 180);
  var p;
  let f = [], m = 0, g = 0, d = 0, y = 0;
  if (i) [m, g, d, y] = i;
  else {
    [l, t] = vt(l, t, -n2), [o, r] = vt(o, r, -n2);
    let A = (l - o) / 2, L = (t - r) / 2, H = A * A / (e * e) + L * L / (a * a);
    H > 1 && (H = Math.sqrt(H), e *= H, a *= H);
    let O = e * e, F = a * a, W = O * F - O * L * L - F * A * A, q = O * L * L + F * A * A, Q = (s === c ? -1 : 1) * Math.sqrt(Math.abs(W / q));
    d = Q * e * L / a + (l + o) / 2, y = Q * -a * A / e + (t + r) / 2, m = Math.asin(parseFloat(((t - y) / a).toFixed(9))), g = Math.asin(parseFloat(((r - y) / a).toFixed(9))), l < d && (m = Math.PI - m), o < d && (g = Math.PI - g), m < 0 && (m = 2 * Math.PI + m), g < 0 && (g = 2 * Math.PI + g), c && m > g && (m -= 2 * Math.PI), !c && g > m && (g -= 2 * Math.PI);
  }
  let x = g - m;
  if (Math.abs(x) > 120 * Math.PI / 180) {
    let A = g, L = o, H = r;
    g = c && g > m ? m + 120 * Math.PI / 180 * 1 : m + 120 * Math.PI / 180 * -1, f = Be(o = d + e * Math.cos(g), r = y + a * Math.sin(g), L, H, e, a, h, 0, c, [
      g,
      A,
      d,
      y
    ]);
  }
  x = g - m;
  let b = Math.cos(m), S2 = Math.sin(m), $ = Math.cos(g), w = Math.sin(g), P = Math.tan(x / 4), B = 4 / 3 * e * P, R = 4 / 3 * a * P, j = [
    l,
    t
  ], G = [
    l + B * S2,
    t - R * b
  ], E = [
    o + B * w,
    r - R * $
  ], I = [
    o,
    r
  ];
  if (G[0] = 2 * j[0] - G[0], G[1] = 2 * j[1] - G[1], i) return [
    G,
    E,
    I
  ].concat(f);
  {
    f = [
      G,
      E,
      I
    ].concat(f);
    let A = [];
    for (let L = 0; L < f.length; L += 3) {
      let H = vt(f[L][0], f[L][1], n2), O = vt(f[L + 1][0], f[L + 1][1], n2), F = vt(f[L + 2][0], f[L + 2][1], n2);
      A.push([
        H[0],
        H[1],
        O[0],
        O[1],
        F[0],
        F[1]
      ]);
    }
    return A;
  }
}
m$1(Be, "x");
var Qs = {
  randOffset: m$1(function(l, t) {
    return _(l, t);
  }, "randOffset"),
  randOffsetWithRange: m$1(function(l, t, o) {
    return Lt(l, t, o);
  }, "randOffsetWithRange"),
  ellipse: m$1(function(l, t, o, r, e) {
    let a = Ce(o, r, e);
    return ie(l, t, e, a).opset;
  }, "ellipse"),
  doubleLineOps: m$1(function(l, t, o, r, e) {
    return ft(l, t, o, r, e, true);
  }, "doubleLineOps")
};
function Te(l, t, o, r, e) {
  return {
    type: "path",
    ops: ft(l, t, o, r, e)
  };
}
m$1(Te, "v");
function At(l, t, o) {
  let r = (l || []).length;
  if (r > 2) {
    let e = [];
    for (let a = 0; a < r - 1; a++) e.push(...ft(l[a][0], l[a][1], l[a + 1][0], l[a + 1][1], o));
    return t && e.push(...ft(l[r - 1][0], l[r - 1][1], l[0][0], l[0][1], o)), {
      type: "path",
      ops: e
    };
  }
  return r === 2 ? Te(l[0][0], l[0][1], l[1][0], l[1][1], o) : {
    type: "path",
    ops: []
  };
}
m$1(At, "S");
function Js(l, t, o, r, e) {
  return function(a, h) {
    return At(a, true, h);
  }([
    [
      l,
      t
    ],
    [
      l + o,
      t
    ],
    [
      l + o,
      t + r
    ],
    [
      l,
      t + r
    ]
  ], e);
}
m$1(Js, "O");
function Se(l, t) {
  if (l.length) {
    let o = typeof l[0][0] == "number" ? [
      l
    ] : l, r = Et(o[0], 1 * (1 + 0.2 * t.roughness), t), e = t.disableMultiStroke ? [] : Et(o[0], 1.5 * (1 + 0.22 * t.roughness), ve(t));
    for (let a = 1; a < o.length; a++) {
      let h = o[a];
      if (h.length) {
        let s = Et(h, 1 * (1 + 0.2 * t.roughness), t), c = t.disableMultiStroke ? [] : Et(h, 1.5 * (1 + 0.22 * t.roughness), ve(t));
        for (let i of s) i.op !== "move" && r.push(i);
        for (let i of c) i.op !== "move" && e.push(i);
      }
    }
    return {
      type: "path",
      ops: r.concat(e)
    };
  }
  return {
    type: "path",
    ops: []
  };
}
m$1(Se, "L");
function Ce(l, t, o) {
  let r = Math.sqrt(2 * Math.PI * Math.sqrt((Math.pow(l / 2, 2) + Math.pow(t / 2, 2)) / 2)), e = Math.ceil(Math.max(o.curveStepCount, o.curveStepCount / Math.sqrt(200) * r)), a = 2 * Math.PI / e, h = Math.abs(l / 2), s = Math.abs(t / 2), c = 1 - o.curveFitting;
  return h += _(h * c, o), s += _(s * c, o), {
    increment: a,
    rx: h,
    ry: s
  };
}
m$1(Ce, "T");
function ie(l, t, o, r) {
  let [e, a] = De(r.increment, l, t, r.rx, r.ry, 1, r.increment * Lt(0.1, Lt(0.4, 1, o), o), o), h = Ht(e, null, o);
  if (!o.disableMultiStroke && o.roughness !== 0) {
    let [s] = De(r.increment, l, t, r.rx, r.ry, 1.5, 0, o), c = Ht(s, null, o);
    h = h.concat(c);
  }
  return {
    estimatedPoints: a,
    opset: {
      type: "path",
      ops: h
    }
  };
}
m$1(ie, "D");
function we(l, t, o, r, e, a, h, s, c) {
  let i = l, n2 = t, p = Math.abs(o / 2), f = Math.abs(r / 2);
  p += _(0.01 * p, c), f += _(0.01 * f, c);
  let m = e, g = a;
  for (; m < 0; ) m += 2 * Math.PI, g += 2 * Math.PI;
  g - m > 2 * Math.PI && (m = 0, g = 2 * Math.PI);
  let d = 2 * Math.PI / c.curveStepCount, y = Math.min(d / 2, (g - m) / 2), x = Me(y, i, n2, p, f, m, g, 1, c);
  if (!c.disableMultiStroke) {
    let b = Me(y, i, n2, p, f, m, g, 1.5, c);
    x.push(...b);
  }
  return h && (s ? x.push(...ft(i, n2, i + p * Math.cos(m), n2 + f * Math.sin(m), c), ...ft(i, n2, i + p * Math.cos(g), n2 + f * Math.sin(g), c)) : x.push({
    op: "lineTo",
    data: [
      i,
      n2
    ]
  }, {
    op: "lineTo",
    data: [
      i + p * Math.cos(m),
      n2 + f * Math.sin(m)
    ]
  })), {
    type: "path",
    ops: x
  };
}
m$1(we, "A");
function Ne(l, t) {
  let o = Pe($e(pe(l))), r = [], e = [
    0,
    0
  ], a = [
    0,
    0
  ];
  for (let { key: h, data: s } of o) switch (h) {
    case "M":
      a = [
        s[0],
        s[1]
      ], e = [
        s[0],
        s[1]
      ];
      break;
    case "L":
      r.push(...ft(a[0], a[1], s[0], s[1], t)), a = [
        s[0],
        s[1]
      ];
      break;
    case "C": {
      let [c, i, n2, p, f, m] = s;
      r.push(...Ks(c, i, n2, p, f, m, a, t)), a = [
        f,
        m
      ];
      break;
    }
    case "Z":
      r.push(...ft(a[0], a[1], e[0], e[1], t)), a = [
        e[0],
        e[1]
      ];
  }
  return {
    type: "path",
    ops: r
  };
}
m$1(Ne, "_");
function Jt(l, t) {
  let o = [];
  for (let r of l) if (r.length) {
    let e = t.maxRandomnessOffset || 0, a = r.length;
    if (a > 2) {
      o.push({
        op: "move",
        data: [
          r[0][0] + _(e, t),
          r[0][1] + _(e, t)
        ]
      });
      for (let h = 1; h < a; h++) o.push({
        op: "lineTo",
        data: [
          r[h][0] + _(e, t),
          r[h][1] + _(e, t)
        ]
      });
    }
  }
  return {
    type: "fillPath",
    ops: o
  };
}
m$1(Jt, "I");
function bt(l, t) {
  return function(o, r) {
    let e = o.fillStyle || "hachure";
    if (!et[e]) switch (e) {
      case "zigzag":
        et[e] || (et[e] = new te(r));
        break;
      case "cross-hatch":
        et[e] || (et[e] = new ee(r));
        break;
      case "dots":
        et[e] || (et[e] = new se(r));
        break;
      case "dashed":
        et[e] || (et[e] = new re(r));
        break;
      case "zigzag-line":
        et[e] || (et[e] = new oe(r));
        break;
      default:
        e = "hachure", et[e] || (et[e] = new Mt(r));
    }
    return et[e];
  }(t, Qs).fillPolygons(l, t);
}
m$1(bt, "C");
function ve(l) {
  let t = Object.assign({}, l);
  return t.randomizer = void 0, l.seed && (t.seed = l.seed + 1), t;
}
m$1(ve, "z");
function Re(l) {
  return l.randomizer || (l.randomizer = new ae(l.seed || 0)), l.randomizer.next();
}
m$1(Re, "W");
function Lt(l, t, o) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
  return o.roughness * r * (Re(o) * (t - l) + l);
}
m$1(Lt, "E");
function _(l, t) {
  let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Lt(-l, l, t, o);
}
m$1(_, "G");
function ft(l, t, o, r, e) {
  let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : false;
  let h = a ? e.disableMultiStrokeFill : e.disableMultiStroke, s = ne(l, t, o, r, e, true, false);
  if (h) return s;
  let c = ne(l, t, o, r, e, true, true);
  return s.concat(c);
}
m$1(ft, "$");
function ne(l, t, o, r, e, a, h) {
  let s = Math.pow(l - o, 2) + Math.pow(t - r, 2), c = Math.sqrt(s), i = 1;
  i = c < 200 ? 1 : c > 500 ? 0.4 : -16668e-7 * c + 1.233334;
  let n2 = e.maxRandomnessOffset || 0;
  n2 * n2 * 100 > s && (n2 = c / 10);
  let p = n2 / 2, f = 0.2 + 0.2 * Re(e), m = e.bowing * e.maxRandomnessOffset * (r - t) / 200, g = e.bowing * e.maxRandomnessOffset * (l - o) / 200;
  m = _(m, e, i), g = _(g, e, i);
  let d = [], y = m$1(() => _(p, e, i), "M"), x = m$1(() => _(n2, e, i), "k"), b = e.preserveVertices;
  return a && (h ? d.push({
    op: "move",
    data: [
      l + (b ? 0 : y()),
      t + (b ? 0 : y())
    ]
  }) : d.push({
    op: "move",
    data: [
      l + (b ? 0 : _(n2, e, i)),
      t + (b ? 0 : _(n2, e, i))
    ]
  })), h ? d.push({
    op: "bcurveTo",
    data: [
      m + l + (o - l) * f + y(),
      g + t + (r - t) * f + y(),
      m + l + 2 * (o - l) * f + y(),
      g + t + 2 * (r - t) * f + y(),
      o + (b ? 0 : y()),
      r + (b ? 0 : y())
    ]
  }) : d.push({
    op: "bcurveTo",
    data: [
      m + l + (o - l) * f + x(),
      g + t + (r - t) * f + x(),
      m + l + 2 * (o - l) * f + x(),
      g + t + 2 * (r - t) * f + x(),
      o + (b ? 0 : x()),
      r + (b ? 0 : x())
    ]
  }), d;
}
m$1(ne, "R");
function Et(l, t, o) {
  if (!l.length) return [];
  let r = [];
  r.push([
    l[0][0] + _(t, o),
    l[0][1] + _(t, o)
  ]), r.push([
    l[0][0] + _(t, o),
    l[0][1] + _(t, o)
  ]);
  for (let e = 1; e < l.length; e++) r.push([
    l[e][0] + _(t, o),
    l[e][1] + _(t, o)
  ]), e === l.length - 1 && r.push([
    l[e][0] + _(t, o),
    l[e][1] + _(t, o)
  ]);
  return Ht(r, null, o);
}
m$1(Et, "j");
function Ht(l, t, o) {
  let r = l.length, e = [];
  if (r > 3) {
    let a = [], h = 1 - o.curveTightness;
    e.push({
      op: "move",
      data: [
        l[1][0],
        l[1][1]
      ]
    });
    for (let s = 1; s + 2 < r; s++) {
      let c = l[s];
      a[0] = [
        c[0],
        c[1]
      ], a[1] = [
        c[0] + (h * l[s + 1][0] - h * l[s - 1][0]) / 6,
        c[1] + (h * l[s + 1][1] - h * l[s - 1][1]) / 6
      ], a[2] = [
        l[s + 1][0] + (h * l[s][0] - h * l[s + 2][0]) / 6,
        l[s + 1][1] + (h * l[s][1] - h * l[s + 2][1]) / 6
      ], a[3] = [
        l[s + 1][0],
        l[s + 1][1]
      ], e.push({
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
      let s = o.maxRandomnessOffset;
      e.push({
        op: "lineTo",
        data: [
          t[0] + _(s, o),
          t[1] + _(s, o)
        ]
      });
    }
  } else r === 3 ? (e.push({
    op: "move",
    data: [
      l[1][0],
      l[1][1]
    ]
  }), e.push({
    op: "bcurveTo",
    data: [
      l[1][0],
      l[1][1],
      l[2][0],
      l[2][1],
      l[2][0],
      l[2][1]
    ]
  })) : r === 2 && e.push(...ne(l[0][0], l[0][1], l[1][0], l[1][1], o, true, true));
  return e;
}
m$1(Ht, "q");
function De(l, t, o, r, e, a, h, s) {
  let c = [], i = [];
  if (s.roughness === 0) {
    l /= 4, i.push([
      t + r * Math.cos(-l),
      o + e * Math.sin(-l)
    ]);
    for (let n2 = 0; n2 <= 2 * Math.PI; n2 += l) {
      let p = [
        t + r * Math.cos(n2),
        o + e * Math.sin(n2)
      ];
      c.push(p), i.push(p);
    }
    i.push([
      t + r * Math.cos(0),
      o + e * Math.sin(0)
    ]), i.push([
      t + r * Math.cos(l),
      o + e * Math.sin(l)
    ]);
  } else {
    let n2 = _(0.5, s) - Math.PI / 2;
    i.push([
      _(a, s) + t + 0.9 * r * Math.cos(n2 - l),
      _(a, s) + o + 0.9 * e * Math.sin(n2 - l)
    ]);
    let p = 2 * Math.PI + n2 - 0.01;
    for (let f = n2; f < p; f += l) {
      let m = [
        _(a, s) + t + r * Math.cos(f),
        _(a, s) + o + e * Math.sin(f)
      ];
      c.push(m), i.push(m);
    }
    i.push([
      _(a, s) + t + r * Math.cos(n2 + 2 * Math.PI + 0.5 * h),
      _(a, s) + o + e * Math.sin(n2 + 2 * Math.PI + 0.5 * h)
    ]), i.push([
      _(a, s) + t + 0.98 * r * Math.cos(n2 + h),
      _(a, s) + o + 0.98 * e * Math.sin(n2 + h)
    ]), i.push([
      _(a, s) + t + 0.9 * r * Math.cos(n2 + 0.5 * h),
      _(a, s) + o + 0.9 * e * Math.sin(n2 + 0.5 * h)
    ]);
  }
  return [
    i,
    c
  ];
}
m$1(De, "F");
function Me(l, t, o, r, e, a, h, s, c) {
  let i = a + _(0.1, c), n2 = [];
  n2.push([
    _(s, c) + t + 0.9 * r * Math.cos(i - l),
    _(s, c) + o + 0.9 * e * Math.sin(i - l)
  ]);
  for (let p = i; p <= h; p += l) n2.push([
    _(s, c) + t + r * Math.cos(p),
    _(s, c) + o + e * Math.sin(p)
  ]);
  return n2.push([
    t + r * Math.cos(h),
    o + e * Math.sin(h)
  ]), n2.push([
    t + r * Math.cos(h),
    o + e * Math.sin(h)
  ]), Ht(n2, null, c);
}
m$1(Me, "V");
function Ks(l, t, o, r, e, a, h, s) {
  let c = [], i = [
    s.maxRandomnessOffset || 1,
    (s.maxRandomnessOffset || 1) + 0.3
  ], n2 = [
    0,
    0
  ], p = s.disableMultiStroke ? 1 : 2, f = s.preserveVertices;
  for (let m = 0; m < p; m++) m === 0 ? c.push({
    op: "move",
    data: [
      h[0],
      h[1]
    ]
  }) : c.push({
    op: "move",
    data: [
      h[0] + (f ? 0 : _(i[0], s)),
      h[1] + (f ? 0 : _(i[0], s))
    ]
  }), n2 = f ? [
    e,
    a
  ] : [
    e + _(i[m], s),
    a + _(i[m], s)
  ], c.push({
    op: "bcurveTo",
    data: [
      l + _(i[m], s),
      t + _(i[m], s),
      o + _(i[m], s),
      r + _(i[m], s),
      n2[0],
      n2[1]
    ]
  });
  return c;
}
m$1(Ks, "Z");
function Dt(l) {
  return [
    ...l
  ];
}
m$1(Dt, "Q");
function ke(l) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  let o = l.length;
  if (o < 3) throw new Error("A curve must have at least three points.");
  let r = [];
  if (o === 3) r.push(Dt(l[0]), Dt(l[1]), Dt(l[2]), Dt(l[2]));
  else {
    let e = [];
    e.push(l[0], l[0]);
    for (let s = 1; s < l.length; s++) e.push(l[s]), s === l.length - 1 && e.push(l[s]);
    let a = [], h = 1 - t;
    r.push(Dt(e[0]));
    for (let s = 1; s + 2 < e.length; s++) {
      let c = e[s];
      a[0] = [
        c[0],
        c[1]
      ], a[1] = [
        c[0] + (h * e[s + 1][0] - h * e[s - 1][0]) / 6,
        c[1] + (h * e[s + 1][1] - h * e[s - 1][1]) / 6
      ], a[2] = [
        e[s + 1][0] + (h * e[s][0] - h * e[s + 2][0]) / 6,
        e[s + 1][1] + (h * e[s][1] - h * e[s + 2][1]) / 6
      ], a[3] = [
        e[s + 1][0],
        e[s + 1][1]
      ], r.push(a[1], a[2], a[3]);
    }
  }
  return r;
}
m$1(ke, "H");
function Ot(l, t) {
  return Math.pow(l[0] - t[0], 2) + Math.pow(l[1] - t[1], 2);
}
m$1(Ot, "N");
function tr(l, t, o) {
  let r = Ot(t, o);
  if (r === 0) return Ot(l, t);
  let e = ((l[0] - t[0]) * (o[0] - t[0]) + (l[1] - t[1]) * (o[1] - t[1])) / r;
  return e = Math.max(0, Math.min(1, e)), Ot(l, xt(t, o, e));
}
m$1(tr, "B");
function xt(l, t, o) {
  return [
    l[0] + (t[0] - l[0]) * o,
    l[1] + (t[1] - l[1]) * o
  ];
}
m$1(xt, "J");
function le(l, t, o, r) {
  let e = r || [];
  if (function(s, c) {
    let i = s[c + 0], n2 = s[c + 1], p = s[c + 2], f = s[c + 3], m = 3 * n2[0] - 2 * i[0] - f[0];
    m *= m;
    let g = 3 * n2[1] - 2 * i[1] - f[1];
    g *= g;
    let d = 3 * p[0] - 2 * f[0] - i[0];
    d *= d;
    let y = 3 * p[1] - 2 * f[1] - i[1];
    return y *= y, m < d && (m = d), g < y && (g = y), m + g;
  }(l, t) < o) {
    let s = l[t + 0];
    e.length ? (a = e[e.length - 1], h = s, Math.sqrt(Ot(a, h)) > 1 && e.push(s)) : e.push(s), e.push(l[t + 3]);
  } else {
    let c = l[t + 0], i = l[t + 1], n2 = l[t + 2], p = l[t + 3], f = xt(c, i, 0.5), m = xt(i, n2, 0.5), g = xt(n2, p, 0.5), d = xt(f, m, 0.5), y = xt(m, g, 0.5), x = xt(d, y, 0.5);
    le([
      c,
      f,
      d,
      x
    ], 0, o, e), le([
      x,
      y,
      g,
      p
    ], 0, o, e);
  }
  var a, h;
  return e;
}
m$1(le, "K");
function er(l, t) {
  return Wt(l, 0, l.length, t);
}
m$1(er, "U");
function Wt(l, t, o, r, e) {
  let a = e || [], h = l[t], s = l[o - 1], c = 0, i = 1;
  for (let n2 = t + 1; n2 < o - 1; ++n2) {
    let p = tr(l[n2], h, s);
    p > c && (c = p, i = n2);
  }
  return Math.sqrt(c) > r ? (Wt(l, t, i + 1, r, a), Wt(l, i, o, r, a)) : (a.length || a.push(h), a.push(s)), a;
}
m$1(Wt, "X");
function Kt(l) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0.15, o = arguments.length > 2 ? arguments[2] : void 0;
  let r = [], e = (l.length - 1) / 3;
  for (let a = 0; a < e; a++) le(l, 3 * a, t, r);
  return o && o > 0 ? Wt(r, 0, r.length, o) : r;
}
m$1(Kt, "Y");
var st = "none", St = (_h = class {
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
    }, this.config = t || {}, this.config.options && (this.defaultOptions = this._o(this.config.options));
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
  line(t, o, r, e, a) {
    let h = this._o(a);
    return this._d("line", [
      Te(t, o, r, e, h)
    ], h);
  }
  rectangle(t, o, r, e, a) {
    let h = this._o(a), s = [], c = Js(t, o, r, e, h);
    if (h.fill) {
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
          o + e
        ],
        [
          t,
          o + e
        ]
      ];
      h.fillStyle === "solid" ? s.push(Jt([
        i
      ], h)) : s.push(bt([
        i
      ], h));
    }
    return h.stroke !== st && s.push(c), this._d("rectangle", s, h);
  }
  ellipse(t, o, r, e, a) {
    let h = this._o(a), s = [], c = Ce(r, e, h), i = ie(t, o, h, c);
    if (h.fill) if (h.fillStyle === "solid") {
      let n2 = ie(t, o, h, c).opset;
      n2.type = "fillPath", s.push(n2);
    } else s.push(bt([
      i.estimatedPoints
    ], h));
    return h.stroke !== st && s.push(i.opset), this._d("ellipse", s, h);
  }
  circle(t, o, r, e) {
    let a = this.ellipse(t, o, r, r, e);
    return a.shape = "circle", a;
  }
  linearPath(t, o) {
    let r = this._o(o);
    return this._d("linearPath", [
      At(t, false, r)
    ], r);
  }
  arc(t, o, r, e, a, h) {
    let s = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : false, c = arguments.length > 7 ? arguments[7] : void 0;
    let i = this._o(c), n2 = [], p = we(t, o, r, e, a, h, s, true, i);
    if (s && i.fill) if (i.fillStyle === "solid") {
      let f = Object.assign({}, i);
      f.disableMultiStroke = true;
      let m = we(t, o, r, e, a, h, true, false, f);
      m.type = "fillPath", n2.push(m);
    } else n2.push(function(f, m, g, d, y, x, b) {
      let S2 = f, $ = m, w = Math.abs(g / 2), P = Math.abs(d / 2);
      w += _(0.01 * w, b), P += _(0.01 * P, b);
      let B = y, R = x;
      for (; B < 0; ) B += 2 * Math.PI, R += 2 * Math.PI;
      R - B > 2 * Math.PI && (B = 0, R = 2 * Math.PI);
      let j = (R - B) / b.curveStepCount, G = [];
      for (let E = B; E <= R; E += j) G.push([
        S2 + w * Math.cos(E),
        $ + P * Math.sin(E)
      ]);
      return G.push([
        S2 + w * Math.cos(R),
        $ + P * Math.sin(R)
      ]), G.push([
        S2,
        $
      ]), bt([
        G
      ], b);
    }(t, o, r, e, a, h, i));
    return i.stroke !== st && n2.push(p), this._d("arc", n2, i);
  }
  curve(t, o) {
    let r = this._o(o), e = [], a = Se(t, r);
    if (r.fill && r.fill !== st) if (r.fillStyle === "solid") {
      let h = Se(t, Object.assign(Object.assign({}, r), {
        disableMultiStroke: true,
        roughness: r.roughness ? r.roughness + r.fillShapeRoughnessGain : 0
      }));
      e.push({
        type: "fillPath",
        ops: this._mergedShape(h.ops)
      });
    } else {
      let h = [], s = t;
      if (s.length) {
        let c = typeof s[0][0] == "number" ? [
          s
        ] : s;
        for (let i of c) i.length < 3 ? h.push(...i) : i.length === 3 ? h.push(...Kt(ke([
          i[0],
          i[0],
          i[1],
          i[2]
        ]), 10, (1 + r.roughness) / 2)) : h.push(...Kt(ke(i), 10, (1 + r.roughness) / 2));
      }
      h.length && e.push(bt([
        h
      ], r));
    }
    return r.stroke !== st && e.push(a), this._d("curve", e, r);
  }
  polygon(t, o) {
    let r = this._o(o), e = [], a = At(t, true, r);
    return r.fill && (r.fillStyle === "solid" ? e.push(Jt([
      t
    ], r)) : e.push(bt([
      t
    ], r))), r.stroke !== st && e.push(a), this._d("polygon", e, r);
  }
  path(t, o) {
    let r = this._o(o), e = [];
    if (!t) return this._d("path", e, r);
    t = (t || "").replace(/\n/g, " ").replace(/(-\s)/g, "-").replace("/(ss)/g", " ");
    let a = r.fill && r.fill !== "transparent" && r.fill !== st, h = r.stroke !== st, s = !!(r.simplification && r.simplification < 1), c = function(n2, p, f) {
      let m = Pe($e(pe(n2))), g = [], d = [], y = [
        0,
        0
      ], x = [], b = m$1(() => {
        x.length >= 4 && d.push(...Kt(x, p)), x = [];
      }, "i"), S2 = m$1(() => {
        b(), d.length && (g.push(d), d = []);
      }, "c");
      for (let { key: w, data: P } of m) switch (w) {
        case "M":
          S2(), y = [
            P[0],
            P[1]
          ], d.push(y);
          break;
        case "L":
          b(), d.push([
            P[0],
            P[1]
          ]);
          break;
        case "C":
          if (!x.length) {
            let B = d.length ? d[d.length - 1] : y;
            x.push([
              B[0],
              B[1]
            ]);
          }
          x.push([
            P[0],
            P[1]
          ]), x.push([
            P[2],
            P[3]
          ]), x.push([
            P[4],
            P[5]
          ]);
          break;
        case "Z":
          b(), d.push([
            y[0],
            y[1]
          ]);
      }
      if (S2(), !f) return g;
      let $ = [];
      for (let w of g) {
        let P = er(w, f);
        P.length && $.push(P);
      }
      return $;
    }(t, 1, s ? 4 - 4 * (r.simplification || 1) : (1 + r.roughness) / 2), i = Ne(t, r);
    if (a) if (r.fillStyle === "solid") if (c.length === 1) {
      let n2 = Ne(t, Object.assign(Object.assign({}, r), {
        disableMultiStroke: true,
        roughness: r.roughness ? r.roughness + r.fillShapeRoughnessGain : 0
      }));
      e.push({
        type: "fillPath",
        ops: this._mergedShape(n2.ops)
      });
    } else e.push(Jt(c, r));
    else e.push(bt(c, r));
    return h && (s ? c.forEach((n2) => {
      e.push(At(n2, false, r));
    }) : e.push(i)), this._d("path", e, r);
  }
  opsToPath(t, o) {
    let r = "";
    for (let e of t.ops) {
      let a = typeof o == "number" && o >= 0 ? e.data.map((h) => +h.toFixed(o)) : e.data;
      switch (e.op) {
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
    let o = t.sets || [], r = t.options || this.defaultOptions, e = [];
    for (let a of o) {
      let h = null;
      switch (a.type) {
        case "path":
          h = {
            d: this.opsToPath(a),
            stroke: r.stroke,
            strokeWidth: r.strokeWidth,
            fill: st
          };
          break;
        case "fillPath":
          h = {
            d: this.opsToPath(a),
            stroke: st,
            strokeWidth: 0,
            fill: r.fill || st
          };
          break;
        case "fillSketch":
          h = this.fillSketch(a, r);
      }
      h && e.push(h);
    }
    return e;
  }
  fillSketch(t, o) {
    let r = o.fillWeight;
    return r < 0 && (r = o.strokeWidth / 2), {
      d: this.opsToPath(t),
      stroke: o.fill || st,
      strokeWidth: r,
      fill: st
    };
  }
  _mergedShape(t) {
    return t.filter((o, r) => r === 0 || o.op !== "move");
  }
}, __8 = new WeakMap(), __privateAdd(_h, __8, m$1(_h, "et")), _h), ce = (_i = class {
  constructor(t, o) {
    this.canvas = t, this.ctx = this.canvas.getContext("2d"), this.gen = new St(o);
  }
  draw(t) {
    let o = t.sets || [], r = t.options || this.getDefaultOptions(), e = this.ctx, a = t.options.fixedDecimalPlaceDigits;
    for (let h of o) switch (h.type) {
      case "path":
        e.save(), e.strokeStyle = r.stroke === "none" ? "transparent" : r.stroke, e.lineWidth = r.strokeWidth, r.strokeLineDash && e.setLineDash(r.strokeLineDash), r.strokeLineDashOffset && (e.lineDashOffset = r.strokeLineDashOffset), this._drawToContext(e, h, a), e.restore();
        break;
      case "fillPath": {
        e.save(), e.fillStyle = r.fill || "";
        let s = t.shape === "curve" || t.shape === "polygon" || t.shape === "path" ? "evenodd" : "nonzero";
        this._drawToContext(e, h, a, s), e.restore();
        break;
      }
      case "fillSketch":
        this.fillSketch(e, h, r);
    }
  }
  fillSketch(t, o, r) {
    let e = r.fillWeight;
    e < 0 && (e = r.strokeWidth / 2), t.save(), r.fillLineDash && t.setLineDash(r.fillLineDash), r.fillLineDashOffset && (t.lineDashOffset = r.fillLineDashOffset), t.strokeStyle = r.fill || "", t.lineWidth = e, this._drawToContext(t, o, r.fixedDecimalPlaceDigits), t.restore();
  }
  _drawToContext(t, o, r) {
    let e = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "nonzero";
    t.beginPath();
    for (let a of o.ops) {
      let h = typeof r == "number" && r >= 0 ? a.data.map((s) => +s.toFixed(r)) : a.data;
      switch (a.op) {
        case "move":
          t.moveTo(h[0], h[1]);
          break;
        case "bcurveTo":
          t.bezierCurveTo(h[0], h[1], h[2], h[3], h[4], h[5]);
          break;
        case "lineTo":
          t.lineTo(h[0], h[1]);
      }
    }
    o.type === "fillPath" ? t.fill(e) : t.stroke();
  }
  get generator() {
    return this.gen;
  }
  getDefaultOptions() {
    return this.gen.defaultOptions;
  }
  line(t, o, r, e, a) {
    let h = this.gen.line(t, o, r, e, a);
    return this.draw(h), h;
  }
  rectangle(t, o, r, e, a) {
    let h = this.gen.rectangle(t, o, r, e, a);
    return this.draw(h), h;
  }
  ellipse(t, o, r, e, a) {
    let h = this.gen.ellipse(t, o, r, e, a);
    return this.draw(h), h;
  }
  circle(t, o, r, e) {
    let a = this.gen.circle(t, o, r, e);
    return this.draw(a), a;
  }
  linearPath(t, o) {
    let r = this.gen.linearPath(t, o);
    return this.draw(r), r;
  }
  polygon(t, o) {
    let r = this.gen.polygon(t, o);
    return this.draw(r), r;
  }
  arc(t, o, r, e, a, h) {
    let s = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : false, c = arguments.length > 7 ? arguments[7] : void 0;
    let i = this.gen.arc(t, o, r, e, a, h, s, c);
    return this.draw(i), i;
  }
  curve(t, o) {
    let r = this.gen.curve(t, o);
    return this.draw(r), r;
  }
  path(t, o) {
    let r = this.gen.path(t, o);
    return this.draw(r), r;
  }
}, __9 = new WeakMap(), __privateAdd(_i, __9, m$1(_i, "st")), _i), jt = "http://www.w3.org/2000/svg", he = (_j = class {
  constructor(t, o) {
    this.svg = t, this.gen = new St(o);
  }
  draw(t) {
    let o = t.sets || [], r = t.options || this.getDefaultOptions(), e = this.svg.ownerDocument || window.document, a = e.createElementNS(jt, "g"), h = t.options.fixedDecimalPlaceDigits;
    for (let s of o) {
      let c = null;
      switch (s.type) {
        case "path":
          c = e.createElementNS(jt, "path"), c.setAttribute("d", this.opsToPath(s, h)), c.setAttribute("stroke", r.stroke), c.setAttribute("stroke-width", r.strokeWidth + ""), c.setAttribute("fill", "none"), r.strokeLineDash && c.setAttribute("stroke-dasharray", r.strokeLineDash.join(" ").trim()), r.strokeLineDashOffset && c.setAttribute("stroke-dashoffset", `${r.strokeLineDashOffset}`);
          break;
        case "fillPath":
          c = e.createElementNS(jt, "path"), c.setAttribute("d", this.opsToPath(s, h)), c.setAttribute("stroke", "none"), c.setAttribute("stroke-width", "0"), c.setAttribute("fill", r.fill || ""), t.shape !== "curve" && t.shape !== "polygon" || c.setAttribute("fill-rule", "evenodd");
          break;
        case "fillSketch":
          c = this.fillSketch(e, s, r);
      }
      c && a.appendChild(c);
    }
    return a;
  }
  fillSketch(t, o, r) {
    let e = r.fillWeight;
    e < 0 && (e = r.strokeWidth / 2);
    let a = t.createElementNS(jt, "path");
    return a.setAttribute("d", this.opsToPath(o, r.fixedDecimalPlaceDigits)), a.setAttribute("stroke", r.fill || ""), a.setAttribute("stroke-width", e + ""), a.setAttribute("fill", "none"), r.fillLineDash && a.setAttribute("stroke-dasharray", r.fillLineDash.join(" ").trim()), r.fillLineDashOffset && a.setAttribute("stroke-dashoffset", `${r.fillLineDashOffset}`), a;
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
  line(t, o, r, e, a) {
    let h = this.gen.line(t, o, r, e, a);
    return this.draw(h);
  }
  rectangle(t, o, r, e, a) {
    let h = this.gen.rectangle(t, o, r, e, a);
    return this.draw(h);
  }
  ellipse(t, o, r, e, a) {
    let h = this.gen.ellipse(t, o, r, e, a);
    return this.draw(h);
  }
  circle(t, o, r, e) {
    let a = this.gen.circle(t, o, r, e);
    return this.draw(a);
  }
  linearPath(t, o) {
    let r = this.gen.linearPath(t, o);
    return this.draw(r);
  }
  polygon(t, o) {
    let r = this.gen.polygon(t, o);
    return this.draw(r);
  }
  arc(t, o, r, e, a, h) {
    let s = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : false, c = arguments.length > 7 ? arguments[7] : void 0;
    let i = this.gen.arc(t, o, r, e, a, h, s, c);
    return this.draw(i);
  }
  curve(t, o) {
    let r = this.gen.curve(t, o);
    return this.draw(r);
  }
  path(t, o) {
    let r = this.gen.path(t, o);
    return this.draw(r);
  }
}, __10 = new WeakMap(), __privateAdd(_j, __10, m$1(_j, "ot")), _j), v = {
  canvas: m$1((l, t) => new ce(l, t), "canvas"),
  svg: m$1((l, t) => new he(l, t), "svg"),
  generator: m$1((l) => new St(l), "generator"),
  newSeed: m$1(() => St.newSeed(), "newSeed")
};
var sr = m$1((l, t) => {
  var o = l.x, r = l.y, e = t.x - o, a = t.y - r, h = l.width / 2, s = l.height / 2, c, i;
  return Math.abs(a) * h > Math.abs(e) * s ? (a < 0 && (s = -s), c = a === 0 ? 0 : s * e / a, i = s) : (e < 0 && (h = -h), c = h, i = e === 0 ? 0 : h * a / e), {
    x: o + c,
    y: r + i
  };
}, "intersectRect"), gt = sr;
function rr(l, t) {
  t && l.attr("style", t);
}
m$1(rr, "applyStyle");
async function or(l) {
  let t = ih(document.createElementNS("http://www.w3.org/2000/svg", "foreignObject")), o = t.append("xhtml:div"), r = l.label;
  l.label && Rl(l.label) && (r = await Cf(l.label.replace(gC.lineBreakRegex, `
`), Hl()));
  let e = l.isNode ? "nodeLabel" : "edgeLabel";
  return o.html('<span class="' + e + '" ' + (l.labelStyle ? 'style="' + l.labelStyle + '"' : "") + ">" + r + "</span>"), rr(o, l.labelStyle), o.style("display", "inline-block"), o.style("padding-right", "1px"), o.style("white-space", "nowrap"), o.attr("xmlns", "http://www.w3.org/1999/xhtml"), t.node();
}
m$1(or, "addHtmlLabel");
var ar = m$1(async (l, t, o, r) => {
  let e = l || "";
  if (typeof e == "object" && (e = e[0]), mf(Hl().flowchart.htmlLabels)) {
    e = e.replace(/\\n|\n/g, "<br />"), tt$1.info("vertexText" + e);
    let a = {
      isNode: r,
      label: Xe$1(e).replace(/fa[blrs]?:fa-[\w-]+/g, (s) => `<i class='${s.replace(":", " ")}'></i>`),
      labelStyle: t && t.replace("fill:", "color:")
    };
    return await or(a);
  } else {
    let a = document.createElementNS("http://www.w3.org/2000/svg", "text");
    a.setAttribute("style", t.replace("color:", "fill:"));
    let h = [];
    typeof e == "string" ? h = e.split(/\\n|\n|<br\s*\/?>/gi) : Array.isArray(e) ? h = e : h = [];
    for (let s of h) {
      let c = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
      c.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), c.setAttribute("dy", "1em"), c.setAttribute("x", "0"), o ? c.setAttribute("class", "title-row") : c.setAttribute("class", "row"), c.textContent = s.trim(), a.appendChild(c);
    }
    return a;
  }
}, "createLabel"), $t = ar;
var J = m$1((l, t, o, r, e) => [
  "M",
  l + e,
  t,
  "H",
  l + o - e,
  "A",
  e,
  e,
  0,
  0,
  1,
  l + o,
  t + e,
  "V",
  t + r - e,
  "A",
  e,
  e,
  0,
  0,
  1,
  l + o - e,
  t + r,
  "H",
  l + e,
  "A",
  e,
  e,
  0,
  0,
  1,
  l,
  t + r - e,
  "V",
  t + e,
  "A",
  e,
  e,
  0,
  0,
  1,
  l + e,
  t,
  "Z"
].join(" "), "createRoundedRectPathD");
var Ge = m$1((l) => {
  let { handDrawnSeed: t } = Hl();
  return {
    fill: l,
    hachureAngle: 120,
    hachureGap: 4,
    fillWeight: 2,
    roughness: 0.7,
    stroke: l,
    seed: t
  };
}, "solidStateFill"), nt = m$1((l) => {
  let t = ir([
    ...l.cssCompiledStyles || [],
    ...l.cssStyles || []
  ]);
  return {
    stylesMap: t,
    stylesArray: [
      ...t
    ]
  };
}, "compileStyles"), ir = m$1((l) => {
  let t = /* @__PURE__ */ new Map();
  return l.forEach((o) => {
    let [r, e] = o.split(":");
    t.set(r.trim(), e == null ? void 0 : e.trim());
  }), t;
}, "styles2Map"), nr = m$1((l) => l === "color" || l === "font-size" || l === "font-family" || l === "font-weight" || l === "font-style" || l === "text-decoration" || l === "text-align" || l === "text-transform" || l === "line-height" || l === "letter-spacing" || l === "word-spacing" || l === "text-shadow" || l === "text-overflow" || l === "white-space" || l === "word-wrap" || l === "word-break" || l === "overflow-wrap" || l === "hyphens", "isLabelStyle"), k = m$1((l) => {
  let { stylesArray: t } = nt(l), o = [], r = [], e = [], a = [];
  return t.forEach((h) => {
    let s = h[0];
    nr(s) ? o.push(h.join(":") + " !important") : (r.push(h.join(":") + " !important"), s.includes("stroke") && e.push(h.join(":") + " !important"), s === "fill" && a.push(h.join(":") + " !important"));
  }), {
    labelStyles: o.join(";"),
    nodeStyles: r.join(";"),
    stylesArray: t,
    borderStyles: e,
    backgroundStyles: a
  };
}, "styles2String"), D = m$1((l, t) => {
  var _a2;
  let { themeVariables: o, handDrawnSeed: r } = Hl(), { nodeBorder: e, mainBkg: a } = o, { stylesMap: h } = nt(l);
  return Object.assign({
    roughness: 0.7,
    fill: h.get("fill") || a,
    fillStyle: "hachure",
    fillWeight: 4,
    hachureGap: 5.2,
    stroke: h.get("stroke") || e,
    seed: r,
    strokeWidth: ((_a2 = h.get("stroke-width")) == null ? void 0 : _a2.replace("px", "")) || 1.3,
    fillLineDash: [
      0,
      0
    ]
  }, t);
}, "userNodeOverrides");
var Ee = m$1(async (l, t) => {
  tt$1.info("Creating subgraph rect for ", t.id, t);
  let o = Hl(), { themeVariables: r, handDrawnSeed: e } = o, { clusterBkg: a, clusterBorder: h } = r, { labelStyles: s, nodeStyles: c, borderStyles: i, backgroundStyles: n$1 } = k(t), p = l.insert("g").attr("class", "cluster " + t.cssClasses).attr("id", t.id).attr("data-look", t.look), f = mf(o.flowchart.htmlLabels), m = p.insert("g").attr("class", "cluster-label "), g = await Qt$1(m, t.label, {
    style: t.labelStyle,
    useHtmlLabels: f,
    isNode: true
  }), d = g.getBBox();
  if (mf(o.flowchart.htmlLabels)) {
    let B = g.children[0], R = ih(g);
    d = B.getBoundingClientRect(), R.attr("width", d.width), R.attr("height", d.height);
  }
  let y = t.width <= d.width + t.padding ? d.width + t.padding : t.width;
  t.width <= d.width + t.padding ? t.diff = (y - t.width) / 2 - t.padding : t.diff = -t.padding;
  let x = t.height, b = t.x - y / 2, S2 = t.y - x / 2;
  tt$1.trace("Data ", t, JSON.stringify(t));
  let $;
  if (t.look === "handDrawn") {
    let B = v.svg(p), R = D(t, {
      roughness: 0.7,
      fill: a,
      stroke: h,
      fillWeight: 3,
      seed: e
    }), j = B.path(J(b, S2, y, x, 0), R);
    $ = p.insert(() => (tt$1.debug("Rough node insert CXC", j), j), ":first-child"), $.select("path:nth-child(2)").attr("style", i.join(";")), $.select("path").attr("style", n$1.join(";").replace("fill", "stroke"));
  } else $ = p.insert("rect", ":first-child"), $.attr("style", c).attr("rx", t.rx).attr("ry", t.ry).attr("x", b).attr("y", S2).attr("width", y).attr("height", x);
  let { subGraphTitleTopMargin: w } = n(o);
  if (m.attr("transform", `translate(${t.x - d.width / 2}, ${t.y - t.height / 2 + w})`), s) {
    let B = m.select("span");
    B && B.attr("style", s);
  }
  let P = $.node().getBBox();
  return t.offsetX = 0, t.width = P.width, t.height = P.height, t.offsetY = d.height - t.padding / 2, t.intersect = function(B) {
    return gt(t, B);
  }, {
    cluster: p,
    labelBBox: d
  };
}, "rect"), lr = m$1((l, t) => {
  let o = l.insert("g").attr("class", "note-cluster").attr("id", t.id), r = o.insert("rect", ":first-child"), e = 0 * t.padding, a = e / 2;
  r.attr("rx", t.rx).attr("ry", t.ry).attr("x", t.x - t.width / 2 - a).attr("y", t.y - t.height / 2 - a).attr("width", t.width + e).attr("height", t.height + e).attr("fill", "none");
  let h = r.node().getBBox();
  return t.width = h.width, t.height = h.height, t.intersect = function(s) {
    return gt(t, s);
  }, {
    cluster: o,
    labelBBox: {
      width: 0,
      height: 0
    }
  };
}, "noteGroup"), cr = m$1(async (l, t) => {
  let o = Hl(), { themeVariables: r, handDrawnSeed: e } = o, { altBackground: a, compositeBackground: h, compositeTitleBackground: s, nodeBorder: c } = r, i = l.insert("g").attr("class", t.cssClasses).attr("id", t.id).attr("data-id", t.id).attr("data-look", t.look), n2 = i.insert("g", ":first-child"), p = i.insert("g").attr("class", "cluster-label"), f = i.append("rect"), m = p.node().appendChild(await $t(t.label, t.labelStyle, void 0, true)), g = m.getBBox();
  if (mf(o.flowchart.htmlLabels)) {
    let j = m.children[0], G = ih(m);
    g = j.getBoundingClientRect(), G.attr("width", g.width), G.attr("height", g.height);
  }
  let d = 0 * t.padding, y = d / 2, x = (t.width <= g.width + t.padding ? g.width + t.padding : t.width) + d;
  t.width <= g.width + t.padding ? t.diff = (x - t.width) / 2 - t.padding : t.diff = -t.padding;
  let b = t.height + d, S2 = t.height + d - g.height - 6, $ = t.x - x / 2, w = t.y - b / 2;
  t.width = x;
  let P = t.y - t.height / 2 - y + g.height + 2, B;
  if (t.look === "handDrawn") {
    let j = t.cssClasses.includes("statediagram-cluster-alt"), G = v.svg(i), E = t.rx || t.ry ? G.path(J($, w, x, b, 10), {
      roughness: 0.7,
      fill: s,
      fillStyle: "solid",
      stroke: c,
      seed: e
    }) : G.rectangle($, w, x, b, {
      seed: e
    });
    B = i.insert(() => E, ":first-child");
    let I = G.rectangle($, P, x, S2, {
      fill: j ? a : h,
      fillStyle: j ? "hachure" : "solid",
      stroke: c,
      seed: e
    });
    B = i.insert(() => E, ":first-child"), f = i.insert(() => I);
  } else B = n2.insert("rect", ":first-child"), B.attr("class", "outer").attr("x", $).attr("y", w).attr("width", x).attr("height", b).attr("data-look", t.look), f.attr("class", "inner").attr("x", $).attr("y", P).attr("width", x).attr("height", S2);
  p.attr("transform", `translate(${t.x - g.width / 2}, ${w + 1 - (mf(o.flowchart.htmlLabels) ? 0 : 3)})`);
  let R = B.node().getBBox();
  return t.height = R.height, t.offsetX = 0, t.offsetY = g.height - t.padding / 2, t.labelBBox = g, t.intersect = function(j) {
    return gt(t, j);
  }, {
    cluster: i,
    labelBBox: g
  };
}, "roundedWithTitle"), hr = m$1(async (l, t) => {
  tt$1.info("Creating subgraph rect for ", t.id, t);
  let o = Hl(), { themeVariables: r, handDrawnSeed: e } = o, { clusterBkg: a, clusterBorder: h } = r, { labelStyles: s, nodeStyles: c, borderStyles: i, backgroundStyles: n$1 } = k(t), p = l.insert("g").attr("class", "cluster " + t.cssClasses).attr("id", t.id).attr("data-look", t.look), f = mf(o.flowchart.htmlLabels), m = p.insert("g").attr("class", "cluster-label "), g = await Qt$1(m, t.label, {
    style: t.labelStyle,
    useHtmlLabels: f,
    isNode: true,
    width: t.width
  }), d = g.getBBox();
  if (mf(o.flowchart.htmlLabels)) {
    let B = g.children[0], R = ih(g);
    d = B.getBoundingClientRect(), R.attr("width", d.width), R.attr("height", d.height);
  }
  let y = t.width <= d.width + t.padding ? d.width + t.padding : t.width;
  t.width <= d.width + t.padding ? t.diff = (y - t.width) / 2 - t.padding : t.diff = -t.padding;
  let x = t.height, b = t.x - y / 2, S2 = t.y - x / 2;
  tt$1.trace("Data ", t, JSON.stringify(t));
  let $;
  if (t.look === "handDrawn") {
    let B = v.svg(p), R = D(t, {
      roughness: 0.7,
      fill: a,
      stroke: h,
      fillWeight: 4,
      seed: e
    }), j = B.path(J(b, S2, y, x, t.rx), R);
    $ = p.insert(() => (tt$1.debug("Rough node insert CXC", j), j), ":first-child"), $.select("path:nth-child(2)").attr("style", i.join(";")), $.select("path").attr("style", n$1.join(";").replace("fill", "stroke"));
  } else $ = p.insert("rect", ":first-child"), $.attr("style", c).attr("rx", t.rx).attr("ry", t.ry).attr("x", b).attr("y", S2).attr("width", y).attr("height", x);
  let { subGraphTitleTopMargin: w } = n(o);
  if (m.attr("transform", `translate(${t.x - d.width / 2}, ${t.y - t.height / 2 + w})`), s) {
    let B = m.select("span");
    B && B.attr("style", s);
  }
  let P = $.node().getBBox();
  return t.offsetX = 0, t.width = P.width, t.height = P.height, t.offsetY = d.height - t.padding / 2, t.intersect = function(B) {
    return gt(t, B);
  }, {
    cluster: p,
    labelBBox: d
  };
}, "kanbanSection"), pr = m$1((l, t) => {
  let o = Hl(), { themeVariables: r, handDrawnSeed: e } = o, { nodeBorder: a } = r, h = l.insert("g").attr("class", t.cssClasses).attr("id", t.id).attr("data-look", t.look), s = h.insert("g", ":first-child"), c = 0 * t.padding, i = t.width + c;
  t.diff = -t.padding;
  let n2 = t.height + c, p = t.x - i / 2, f = t.y - n2 / 2;
  t.width = i;
  let m;
  if (t.look === "handDrawn") {
    let y = v.svg(h).rectangle(p, f, i, n2, {
      fill: "lightgrey",
      roughness: 0.5,
      strokeLineDash: [
        5
      ],
      stroke: a,
      seed: e
    });
    m = h.insert(() => y, ":first-child");
  } else m = s.insert("rect", ":first-child"), m.attr("class", "divider").attr("x", p).attr("y", f).attr("width", i).attr("height", n2).attr("data-look", t.look);
  let g = m.node().getBBox();
  return t.height = g.height, t.offsetX = 0, t.offsetY = 0, t.intersect = function(d) {
    return gt(t, d);
  }, {
    cluster: h,
    labelBBox: {}
  };
}, "divider"), mr = Ee, fr = {
  rect: Ee,
  squareRect: mr,
  roundedWithTitle: cr,
  noteGroup: lr,
  divider: pr,
  kanbanSection: hr
}, je = /* @__PURE__ */ new Map(), yo = m$1(async (l, t) => {
  let o = t.shape || "rect", r = await fr[o](l, t);
  return je.set(t.id, r), r;
}, "insertCluster");
var xo = m$1(() => {
  je = /* @__PURE__ */ new Map();
}, "clear");
function gr(l, t) {
  return l.intersect(t);
}
m$1(gr, "intersectNode");
var Ae = gr;
function dr(l, t, o, r) {
  var e = l.x, a = l.y, h = e - r.x, s = a - r.y, c = Math.sqrt(t * t * s * s + o * o * h * h), i = Math.abs(t * o * h / c);
  r.x < e && (i = -i);
  var n2 = Math.abs(t * o * s / c);
  return r.y < a && (n2 = -n2), {
    x: e + i,
    y: a + n2
  };
}
m$1(dr, "intersectEllipse");
var It = dr;
function ur(l, t, o) {
  return It(l, t, t, o);
}
m$1(ur, "intersectCircle");
var Oe = ur;
function yr(l, t, o, r) {
  var e, a, h, s, c, i, n2, p, f, m, g, d, y, x, b;
  if (e = t.y - l.y, h = l.x - t.x, c = t.x * l.y - l.x * t.y, f = e * o.x + h * o.y + c, m = e * r.x + h * r.y + c, !(f !== 0 && m !== 0 && Le(f, m)) && (a = r.y - o.y, s = o.x - r.x, i = r.x * o.y - o.x * r.y, n2 = a * l.x + s * l.y + i, p = a * t.x + s * t.y + i, !(n2 !== 0 && p !== 0 && Le(n2, p)) && (g = e * s - a * h, g !== 0))) return d = Math.abs(g / 2), y = h * i - s * c, x = y < 0 ? (y - d) / g : (y + d) / g, y = a * c - e * i, b = y < 0 ? (y - d) / g : (y + d) / g, {
    x,
    y: b
  };
}
m$1(yr, "intersectLine");
function Le(l, t) {
  return l * t > 0;
}
m$1(Le, "sameSign");
var He = yr;
function xr(l, t, o) {
  let r = l.x, e = l.y, a = [], h = Number.POSITIVE_INFINITY, s = Number.POSITIVE_INFINITY;
  typeof t.forEach == "function" ? t.forEach(function(n2) {
    h = Math.min(h, n2.x), s = Math.min(s, n2.y);
  }) : (h = Math.min(h, t.x), s = Math.min(s, t.y));
  let c = r - l.width / 2 - h, i = e - l.height / 2 - s;
  for (let n2 = 0; n2 < t.length; n2++) {
    let p = t[n2], f = t[n2 < t.length - 1 ? n2 + 1 : 0], m = He(l, o, {
      x: c + p.x,
      y: i + p.y
    }, {
      x: c + f.x,
      y: i + f.y
    });
    m && a.push(m);
  }
  return a.length ? (a.length > 1 && a.sort(function(n2, p) {
    let f = n2.x - o.x, m = n2.y - o.y, g = Math.sqrt(f * f + m * m), d = p.x - o.x, y = p.y - o.y, x = Math.sqrt(d * d + y * y);
    return g < x ? -1 : g === x ? 0 : 1;
  }), a[0]) : l;
}
m$1(xr, "intersectPolygon");
var We = xr;
var N = {
  node: Ae,
  circle: Oe,
  ellipse: It,
  polygon: We,
  rect: gt
};
function Ve(l, t) {
  let { labelStyles: o } = k(t);
  t.labelStyle = o;
  let r = T(t), e = r;
  r || (e = "anchor");
  let a = l.insert("g").attr("class", e).attr("id", t.domId || t.id), h = 1, { cssStyles: s } = t, c = v.svg(a), i = D(t, {
    fill: "black",
    stroke: "none",
    fillStyle: "solid"
  });
  t.look !== "handDrawn" && (i.roughness = 0);
  let n2 = c.circle(0, 0, h * 2, i), p = a.insert(() => n2, ":first-child");
  return p.attr("class", "anchor").attr("style", Je$1(s)), M(t, p), t.intersect = function(f) {
    return tt$1.info("Circle intersect", t, h, f), N.circle(t, h, f);
  }, a;
}
m$1(Ve, "anchor");
function Ie(l, t, o, r, e, a, h) {
  let c = (l + o) / 2, i = (t + r) / 2, n2 = Math.atan2(r - t, o - l), p = (o - l) / 2, f = (r - t) / 2, m = p / e, g = f / a, d = Math.sqrt(m ** 2 + g ** 2);
  if (d > 1) throw new Error("The given radii are too small to create an arc between the points.");
  let y = Math.sqrt(1 - d ** 2), x = c + y * a * Math.sin(n2) * (h ? -1 : 1), b = i - y * e * Math.cos(n2) * (h ? -1 : 1), S2 = Math.atan2((t - b) / a, (l - x) / e), w = Math.atan2((r - b) / a, (o - x) / e) - S2;
  h && w < 0 && (w += 2 * Math.PI), !h && w > 0 && (w -= 2 * Math.PI);
  let P = [];
  for (let B = 0; B < 20; B++) {
    let R = B / 19, j = S2 + R * w, G = x + e * Math.cos(j), E = b + a * Math.sin(j);
    P.push({
      x: G,
      y: E
    });
  }
  return P;
}
m$1(Ie, "generateArcPoints");
async function Fe(l, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: e, bbox: a } = await C(l, t, T(t)), h = a.width + t.padding + 20, s = a.height + t.padding, c = s / 2, i = c / (2.5 + s / 50), { cssStyles: n2 } = t, p = [
    {
      x: h / 2,
      y: -s / 2
    },
    {
      x: -h / 2,
      y: -s / 2
    },
    ...Ie(-h / 2, -s / 2, -h / 2, s / 2, i, c, false),
    {
      x: h / 2,
      y: s / 2
    },
    ...Ie(h / 2, s / 2, h / 2, -s / 2, i, c, true)
  ], f = v.svg(e), m = D(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  let g = V(p), d = f.path(g, m), y = e.insert(() => d, ":first-child");
  return y.attr("class", "basic label-container"), n2 && t.look !== "handDrawn" && y.selectAll("path").attr("style", n2), r && t.look !== "handDrawn" && y.selectAll("path").attr("style", r), y.attr("transform", `translate(${i / 2}, 0)`), M(t, y), t.intersect = function(x) {
    return N.polygon(t, p, x);
  }, e;
}
m$1(Fe, "bowTieRect");
function K(l, t, o, r) {
  return l.insert("polygon", ":first-child").attr("points", r.map(function(e) {
    return e.x + "," + e.y;
  }).join(" ")).attr("class", "label-container").attr("transform", "translate(" + -t / 2 + "," + o / 2 + ")");
}
m$1(K, "insertPolygonShape");
async function _e(l, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: e, bbox: a } = await C(l, t, T(t)), h = a.height + t.padding, s = 12, c = a.width + t.padding + s, i = 0, n2 = c, p = -h, f = 0, m = [
    {
      x: i + s,
      y: p
    },
    {
      x: n2,
      y: p
    },
    {
      x: n2,
      y: f
    },
    {
      x: i,
      y: f
    },
    {
      x: i,
      y: p + s
    },
    {
      x: i + s,
      y: p
    }
  ], g, { cssStyles: d } = t;
  if (t.look === "handDrawn") {
    let y = v.svg(e), x = D(t, {}), b = V(m), S2 = y.path(b, x);
    g = e.insert(() => S2, ":first-child").attr("transform", `translate(${-c / 2}, ${h / 2})`), d && g.attr("style", d);
  } else g = K(e, c, h, m);
  return r && g.attr("style", r), M(t, g), t.intersect = function(y) {
    return N.polygon(t, m, y);
  }, e;
}
m$1(_e, "card");
function ze(l, t) {
  let { nodeStyles: o } = k(t);
  t.label = "";
  let r = l.insert("g").attr("class", T(t)).attr("id", t.domId ?? t.id), { cssStyles: e } = t, a = Math.max(28, t.width ?? 0), h = [
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
  ], s = v.svg(r), c = D(t, {});
  t.look !== "handDrawn" && (c.roughness = 0, c.fillStyle = "solid");
  let i = V(h), n2 = s.path(i, c), p = r.insert(() => n2, ":first-child");
  return e && t.look !== "handDrawn" && p.selectAll("path").attr("style", e), o && t.look !== "handDrawn" && p.selectAll("path").attr("style", o), t.width = 28, t.height = 28, t.intersect = function(f) {
    return N.polygon(t, h, f);
  }, r;
}
m$1(ze, "choice");
async function qe(l, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: e, bbox: a, halfPadding: h } = await C(l, t, T(t)), s = a.width / 2 + h, c, { cssStyles: i } = t;
  if (t.look === "handDrawn") {
    let n2 = v.svg(e), p = D(t, {}), f = n2.circle(0, 0, s * 2, p);
    c = e.insert(() => f, ":first-child"), c.attr("class", "basic label-container").attr("style", Je$1(i));
  } else c = e.insert("circle", ":first-child").attr("class", "basic label-container").attr("style", r).attr("r", s).attr("cx", 0).attr("cy", 0);
  return M(t, c), t.intersect = function(n2) {
    return tt$1.info("Circle intersect", t, s, n2), N.circle(t, s, n2);
  }, e;
}
m$1(qe, "circle");
function br(l) {
  let t = Math.cos(Math.PI / 4), o = Math.sin(Math.PI / 4), r = l * 2, e = {
    x: r / 2 * t,
    y: r / 2 * o
  }, a = {
    x: -(r / 2) * t,
    y: r / 2 * o
  }, h = {
    x: -(r / 2) * t,
    y: -(r / 2) * o
  }, s = {
    x: r / 2 * t,
    y: -(r / 2) * o
  };
  return `M ${a.x},${a.y} L ${s.x},${s.y}
                   M ${e.x},${e.y} L ${h.x},${h.y}`;
}
m$1(br, "createLine");
function Xe(l, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o, t.label = "";
  let e = l.insert("g").attr("class", T(t)).attr("id", t.domId ?? t.id), a = Math.max(30, (t == null ? void 0 : t.width) ?? 0), { cssStyles: h } = t, s = v.svg(e), c = D(t, {});
  t.look !== "handDrawn" && (c.roughness = 0, c.fillStyle = "solid");
  let i = s.circle(0, 0, a * 2, c), n2 = br(a), p = s.path(n2, c), f = e.insert(() => i, ":first-child");
  return f.insert(() => p), h && t.look !== "handDrawn" && f.selectAll("path").attr("style", h), r && t.look !== "handDrawn" && f.selectAll("path").attr("style", r), M(t, f), t.intersect = function(m) {
    return tt$1.info("crossedCircle intersect", t, {
      radius: a,
      point: m
    }), N.circle(t, a, m);
  }, e;
}
m$1(Xe, "crossedCircle");
function dt(l, t, o) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 100, e = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 180;
  let h = [], s = e * Math.PI / 180, n2 = (a * Math.PI / 180 - s) / (r - 1);
  for (let p = 0; p < r; p++) {
    let f = s + p * n2, m = l + o * Math.cos(f), g = t + o * Math.sin(f);
    h.push({
      x: -m,
      y: -g
    });
  }
  return h;
}
m$1(dt, "generateCirclePoints");
async function Ye(l, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: e, bbox: a, label: h } = await C(l, t, T(t)), s = a.width + (t.padding ?? 0), c = a.height + (t.padding ?? 0), i = Math.max(5, c * 0.1), { cssStyles: n2 } = t, p = [
    ...dt(s / 2, -c / 2, i, 30, -90, 0),
    {
      x: -s / 2 - i,
      y: i
    },
    ...dt(s / 2 + i * 2, -i, i, 20, -180, -270),
    ...dt(s / 2 + i * 2, i, i, 20, -90, -180),
    {
      x: -s / 2 - i,
      y: -c / 2
    },
    ...dt(s / 2, c / 2, i, 20, 0, 90)
  ], f = [
    {
      x: s / 2,
      y: -c / 2 - i
    },
    {
      x: -s / 2,
      y: -c / 2 - i
    },
    ...dt(s / 2, -c / 2, i, 20, -90, 0),
    {
      x: -s / 2 - i,
      y: -i
    },
    ...dt(s / 2 + s * 0.1, -i, i, 20, -180, -270),
    ...dt(s / 2 + s * 0.1, i, i, 20, -90, -180),
    {
      x: -s / 2 - i,
      y: c / 2
    },
    ...dt(s / 2, c / 2, i, 20, 0, 90),
    {
      x: -s / 2,
      y: c / 2 + i
    },
    {
      x: s / 2,
      y: c / 2 + i
    }
  ], m = v.svg(e), g = D(t, {
    fill: "none"
  });
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  let y = V(p).replace("Z", ""), x = m.path(y, g), b = V(f), S2 = m.path(b, {
    ...g
  }), $ = e.insert("g", ":first-child");
  return $.insert(() => S2, ":first-child").attr("stroke-opacity", 0), $.insert(() => x, ":first-child"), $.attr("class", "text"), n2 && t.look !== "handDrawn" && $.selectAll("path").attr("style", n2), r && t.look !== "handDrawn" && $.selectAll("path").attr("style", r), $.attr("transform", `translate(${i}, 0)`), h.attr("transform", `translate(${-s / 2 + i - (a.x - (a.left ?? 0))},${-c / 2 + (t.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`), M(t, $), t.intersect = function(w) {
    return N.polygon(t, f, w);
  }, e;
}
m$1(Ye, "curlyBraceLeft");
function ut(l, t, o) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 100, e = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 180;
  let h = [], s = e * Math.PI / 180, n2 = (a * Math.PI / 180 - s) / (r - 1);
  for (let p = 0; p < r; p++) {
    let f = s + p * n2, m = l + o * Math.cos(f), g = t + o * Math.sin(f);
    h.push({
      x: m,
      y: g
    });
  }
  return h;
}
m$1(ut, "generateCirclePoints");
async function Ze(l, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: e, bbox: a, label: h } = await C(l, t, T(t)), s = a.width + (t.padding ?? 0), c = a.height + (t.padding ?? 0), i = Math.max(5, c * 0.1), { cssStyles: n2 } = t, p = [
    ...ut(s / 2, -c / 2, i, 20, -90, 0),
    {
      x: s / 2 + i,
      y: -i
    },
    ...ut(s / 2 + i * 2, -i, i, 20, -180, -270),
    ...ut(s / 2 + i * 2, i, i, 20, -90, -180),
    {
      x: s / 2 + i,
      y: c / 2
    },
    ...ut(s / 2, c / 2, i, 20, 0, 90)
  ], f = [
    {
      x: -s / 2,
      y: -c / 2 - i
    },
    {
      x: s / 2,
      y: -c / 2 - i
    },
    ...ut(s / 2, -c / 2, i, 20, -90, 0),
    {
      x: s / 2 + i,
      y: -i
    },
    ...ut(s / 2 + i * 2, -i, i, 20, -180, -270),
    ...ut(s / 2 + i * 2, i, i, 20, -90, -180),
    {
      x: s / 2 + i,
      y: c / 2
    },
    ...ut(s / 2, c / 2, i, 20, 0, 90),
    {
      x: s / 2,
      y: c / 2 + i
    },
    {
      x: -s / 2,
      y: c / 2 + i
    }
  ], m = v.svg(e), g = D(t, {
    fill: "none"
  });
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  let y = V(p).replace("Z", ""), x = m.path(y, g), b = V(f), S2 = m.path(b, {
    ...g
  }), $ = e.insert("g", ":first-child");
  return $.insert(() => S2, ":first-child").attr("stroke-opacity", 0), $.insert(() => x, ":first-child"), $.attr("class", "text"), n2 && t.look !== "handDrawn" && $.selectAll("path").attr("style", n2), r && t.look !== "handDrawn" && $.selectAll("path").attr("style", r), $.attr("transform", `translate(${-i}, 0)`), h.attr("transform", `translate(${-s / 2 + (t.padding ?? 0) / 2 - (a.x - (a.left ?? 0))},${-c / 2 + (t.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`), M(t, $), t.intersect = function(w) {
    return N.polygon(t, f, w);
  }, e;
}
m$1(Ze, "curlyBraceRight");
function tt(l, t, o) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 100, e = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 180;
  let h = [], s = e * Math.PI / 180, n2 = (a * Math.PI / 180 - s) / (r - 1);
  for (let p = 0; p < r; p++) {
    let f = s + p * n2, m = l + o * Math.cos(f), g = t + o * Math.sin(f);
    h.push({
      x: -m,
      y: -g
    });
  }
  return h;
}
m$1(tt, "generateCirclePoints");
async function Ue(l, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: e, bbox: a, label: h } = await C(l, t, T(t)), s = a.width + (t.padding ?? 0), c = a.height + (t.padding ?? 0), i = Math.max(5, c * 0.1), { cssStyles: n2 } = t, p = [
    ...tt(s / 2, -c / 2, i, 30, -90, 0),
    {
      x: -s / 2 - i,
      y: i
    },
    ...tt(s / 2 + i * 2, -i, i, 20, -180, -270),
    ...tt(s / 2 + i * 2, i, i, 20, -90, -180),
    {
      x: -s / 2 - i,
      y: -c / 2
    },
    ...tt(s / 2, c / 2, i, 20, 0, 90)
  ], f = [
    ...tt(-s / 2 + i + i / 2, -c / 2, i, 20, -90, -180),
    {
      x: s / 2 - i / 2,
      y: i
    },
    ...tt(-s / 2 - i / 2, -i, i, 20, 0, 90),
    ...tt(-s / 2 - i / 2, i, i, 20, -90, 0),
    {
      x: s / 2 - i / 2,
      y: -i
    },
    ...tt(-s / 2 + i + i / 2, c / 2, i, 30, -180, -270)
  ], m = [
    {
      x: s / 2,
      y: -c / 2 - i
    },
    {
      x: -s / 2,
      y: -c / 2 - i
    },
    ...tt(s / 2, -c / 2, i, 20, -90, 0),
    {
      x: -s / 2 - i,
      y: -i
    },
    ...tt(s / 2 + i * 2, -i, i, 20, -180, -270),
    ...tt(s / 2 + i * 2, i, i, 20, -90, -180),
    {
      x: -s / 2 - i,
      y: c / 2
    },
    ...tt(s / 2, c / 2, i, 20, 0, 90),
    {
      x: -s / 2,
      y: c / 2 + i
    },
    {
      x: s / 2 - i - i / 2,
      y: c / 2 + i
    },
    ...tt(-s / 2 + i + i / 2, -c / 2, i, 20, -90, -180),
    {
      x: s / 2 - i / 2,
      y: i
    },
    ...tt(-s / 2 - i / 2, -i, i, 20, 0, 90),
    ...tt(-s / 2 - i / 2, i, i, 20, -90, 0),
    {
      x: s / 2 - i / 2,
      y: -i
    },
    ...tt(-s / 2 + i + i / 2, c / 2, i, 30, -180, -270)
  ], g = v.svg(e), d = D(t, {
    fill: "none"
  });
  t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
  let x = V(p).replace("Z", ""), b = g.path(x, d), $ = V(f).replace("Z", ""), w = g.path($, d), P = V(m), B = g.path(P, {
    ...d
  }), R = e.insert("g", ":first-child");
  return R.insert(() => B, ":first-child").attr("stroke-opacity", 0), R.insert(() => b, ":first-child"), R.insert(() => w, ":first-child"), R.attr("class", "text"), n2 && t.look !== "handDrawn" && R.selectAll("path").attr("style", n2), r && t.look !== "handDrawn" && R.selectAll("path").attr("style", r), R.attr("transform", `translate(${i - i / 4}, 0)`), h.attr("transform", `translate(${-s / 2 + (t.padding ?? 0) / 2 - (a.x - (a.left ?? 0))},${-c / 2 + (t.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`), M(t, R), t.intersect = function(j) {
    return N.polygon(t, m, j);
  }, e;
}
m$1(Ue, "curlyBraces");
async function Qe(l, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: e, bbox: a } = await C(l, t, T(t)), h = 80, s = 20, c = Math.max(h, (a.width + (t.padding ?? 0) * 2) * 1.25, (t == null ? void 0 : t.width) ?? 0), i = Math.max(s, a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), n2 = i / 2, { cssStyles: p } = t, f = v.svg(e), m = D(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  let g = c, d = i, y = g - n2, x = d / 4, b = [
    {
      x: y,
      y: 0
    },
    {
      x,
      y: 0
    },
    {
      x: 0,
      y: d / 2
    },
    {
      x,
      y: d
    },
    {
      x: y,
      y: d
    },
    ...Rt(-y, -d / 2, n2, 50, 270, 90)
  ], S2 = V(b), $ = f.path(S2, m), w = e.insert(() => $, ":first-child");
  return w.attr("class", "basic label-container"), p && t.look !== "handDrawn" && w.selectChildren("path").attr("style", p), r && t.look !== "handDrawn" && w.selectChildren("path").attr("style", r), w.attr("transform", `translate(${-c / 2}, ${-i / 2})`), M(t, w), t.intersect = function(P) {
    return N.polygon(t, b, P);
  }, e;
}
m$1(Qe, "curvedTrapezoid");
var Sr = m$1((l, t, o, r, e, a) => [
  `M${l},${t + a}`,
  `a${e},${a} 0,0,0 ${o},0`,
  `a${e},${a} 0,0,0 ${-o},0`,
  `l0,${r}`,
  `a${e},${a} 0,0,0 ${o},0`,
  `l0,${-r}`
].join(" "), "createCylinderPathD"), wr = m$1((l, t, o, r, e, a) => [
  `M${l},${t + a}`,
  `M${l + o},${t + a}`,
  `a${e},${a} 0,0,0 ${-o},0`,
  `l0,${r}`,
  `a${e},${a} 0,0,0 ${o},0`,
  `l0,${-r}`
].join(" "), "createOuterCylinderPathD"), Nr = m$1((l, t, o, r, e, a) => [
  `M${l - o / 2},${-r / 2}`,
  `a${e},${a} 0,0,0 ${o},0`
].join(" "), "createInnerCylinderPathD");
async function Je(l, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: e, bbox: a, label: h } = await C(l, t, T(t)), s = Math.max(a.width + t.padding, t.width ?? 0), c = s / 2, i = c / (2.5 + s / 50), n2 = Math.max(a.height + i + t.padding, t.height ?? 0), p, { cssStyles: f } = t;
  if (t.look === "handDrawn") {
    let m = v.svg(e), g = wr(0, 0, s, n2, c, i), d = Nr(0, i, s, n2, c, i), y = m.path(g, D(t, {})), x = m.path(d, D(t, {
      fill: "none"
    }));
    p = e.insert(() => x, ":first-child"), p = e.insert(() => y, ":first-child"), p.attr("class", "basic label-container"), f && p.attr("style", f);
  } else {
    let m = Sr(0, 0, s, n2, c, i);
    p = e.insert("path", ":first-child").attr("d", m).attr("class", "basic label-container").attr("style", Je$1(f)).attr("style", r);
  }
  return p.attr("label-offset-y", i), p.attr("transform", `translate(${-s / 2}, ${-(n2 / 2 + i)})`), M(t, p), h.attr("transform", `translate(${-(a.width / 2) - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + (t.padding ?? 0) / 1.5 - (a.y - (a.top ?? 0))})`), t.intersect = function(m) {
    let g = N.rect(t, m), d = g.x - (t.x ?? 0);
    if (c != 0 && (Math.abs(d) < (t.width ?? 0) / 2 || Math.abs(d) == (t.width ?? 0) / 2 && Math.abs(g.y - (t.y ?? 0)) > (t.height ?? 0) / 2 - i)) {
      let y = i * i * (1 - d * d / (c * c));
      y > 0 && (y = Math.sqrt(y)), y = i - y, m.y - (t.y ?? 0) > 0 && (y = -y), g.y += y;
    }
    return g;
  }, e;
}
m$1(Je, "cylinder");
async function Ke(l, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: e, bbox: a, label: h } = await C(l, t, T(t)), s = a.width + t.padding, c = a.height + t.padding, i = c * 0.2, n2 = -s / 2, p = -c / 2 - i / 2, { cssStyles: f } = t, m = v.svg(e), g = D(t, {});
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  let d = [
    {
      x: n2,
      y: p + i
    },
    {
      x: -n2,
      y: p + i
    },
    {
      x: -n2,
      y: -p
    },
    {
      x: n2,
      y: -p
    },
    {
      x: n2,
      y: p
    },
    {
      x: -n2,
      y: p
    },
    {
      x: -n2,
      y: p + i
    }
  ], y = m.polygon(d.map((b) => [
    b.x,
    b.y
  ]), g), x = e.insert(() => y, ":first-child");
  return x.attr("class", "basic label-container"), f && t.look !== "handDrawn" && x.selectAll("path").attr("style", f), r && t.look !== "handDrawn" && x.selectAll("path").attr("style", r), h.attr("transform", `translate(${n2 + (t.padding ?? 0) / 2 - (a.x - (a.left ?? 0))}, ${p + i + (t.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`), M(t, x), t.intersect = function(b) {
    return N.rect(t, b);
  }, e;
}
m$1(Ke, "dividedRectangle");
async function ts(l, t) {
  var _a2, _b2;
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: e, bbox: a, halfPadding: h } = await C(l, t, T(t)), c = a.width / 2 + h + 5, i = a.width / 2 + h, n2, { cssStyles: p } = t;
  if (t.look === "handDrawn") {
    let f = v.svg(e), m = D(t, {
      roughness: 0.2,
      strokeWidth: 2.5
    }), g = D(t, {
      roughness: 0.2,
      strokeWidth: 1.5
    }), d = f.circle(0, 0, c * 2, m), y = f.circle(0, 0, i * 2, g);
    n2 = e.insert("g", ":first-child"), n2.attr("class", Je$1(t.cssClasses)).attr("style", Je$1(p)), (_a2 = n2.node()) == null ? void 0 : _a2.appendChild(d), (_b2 = n2.node()) == null ? void 0 : _b2.appendChild(y);
  } else {
    n2 = e.insert("g", ":first-child");
    let f = n2.insert("circle", ":first-child"), m = n2.insert("circle");
    n2.attr("class", "basic label-container").attr("style", r), f.attr("class", "outer-circle").attr("style", r).attr("r", c).attr("cx", 0).attr("cy", 0), m.attr("class", "inner-circle").attr("style", r).attr("r", i).attr("cx", 0).attr("cy", 0);
  }
  return M(t, n2), t.intersect = function(f) {
    return tt$1.info("DoubleCircle intersect", t, c, f), N.circle(t, c, f);
  }, e;
}
m$1(ts, "doublecircle");
function es(l, t, param) {
  let { config: { themeVariables: o } } = param;
  let { labelStyles: r, nodeStyles: e } = k(t);
  t.label = "", t.labelStyle = r;
  let a = l.insert("g").attr("class", T(t)).attr("id", t.domId ?? t.id), h = 7, { cssStyles: s } = t, c = v.svg(a), { nodeBorder: i } = o, n2 = D(t, {
    fillStyle: "solid"
  });
  t.look !== "handDrawn" && (n2.roughness = 0);
  let p = c.circle(0, 0, h * 2, n2), f = a.insert(() => p, ":first-child");
  return f.selectAll("path").attr("style", `fill: ${i} !important;`), s && s.length > 0 && t.look !== "handDrawn" && f.selectAll("path").attr("style", s), e && t.look !== "handDrawn" && f.selectAll("path").attr("style", e), M(t, f), t.intersect = function(m) {
    return tt$1.info("filledCircle intersect", t, {
      radius: h,
      point: m
    }), N.circle(t, h, m);
  }, a;
}
m$1(es, "filledCircle");
async function ss(l, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: e, bbox: a, label: h } = await C(l, t, T(t)), s = a.width + (t.padding ?? 0), c = s + a.height, i = s + a.height, n2 = [
    {
      x: 0,
      y: -c
    },
    {
      x: i,
      y: -c
    },
    {
      x: i / 2,
      y: 0
    }
  ], { cssStyles: p } = t, f = v.svg(e), m = D(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  let g = V(n2), d = f.path(g, m), y = e.insert(() => d, ":first-child").attr("transform", `translate(${-c / 2}, ${c / 2})`);
  return p && t.look !== "handDrawn" && y.selectChildren("path").attr("style", p), r && t.look !== "handDrawn" && y.selectChildren("path").attr("style", r), t.width = s, t.height = c, M(t, y), h.attr("transform", `translate(${-a.width / 2 - (a.x - (a.left ?? 0))}, ${-c / 2 + (t.padding ?? 0) / 2 + (a.y - (a.top ?? 0))})`), t.intersect = function(x) {
    return tt$1.info("Triangle intersect", t, n2, x), N.polygon(t, n2, x);
  }, e;
}
m$1(ss, "flippedTriangle");
function rs(l, t, param) {
  let { dir: o, config: { state: r, themeVariables: e } } = param;
  let { nodeStyles: a } = k(t);
  t.label = "";
  let h = l.insert("g").attr("class", T(t)).attr("id", t.domId ?? t.id), { cssStyles: s } = t, c = Math.max(70, (t == null ? void 0 : t.width) ?? 0), i = Math.max(10, (t == null ? void 0 : t.height) ?? 0);
  o === "LR" && (c = Math.max(10, (t == null ? void 0 : t.width) ?? 0), i = Math.max(70, (t == null ? void 0 : t.height) ?? 0));
  let n2 = -1 * c / 2, p = -1 * i / 2, f = v.svg(h), m = D(t, {
    stroke: e.lineColor,
    fill: e.lineColor
  });
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  let g = f.rectangle(n2, p, c, i, m), d = h.insert(() => g, ":first-child");
  s && t.look !== "handDrawn" && d.selectAll("path").attr("style", s), a && t.look !== "handDrawn" && d.selectAll("path").attr("style", a), M(t, d);
  let y = (r == null ? void 0 : r.padding) ?? 0;
  return t.width && t.height && (t.width += y / 2 || 0, t.height += y / 2 || 0), t.intersect = function(x) {
    return N.rect(t, x);
  }, h;
}
m$1(rs, "forkJoin");
async function os(l, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let e = 80, a = 50, { shapeSvg: h, bbox: s } = await C(l, t, T(t)), c = Math.max(e, s.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), i = Math.max(a, s.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), n2 = i / 2, { cssStyles: p } = t, f = v.svg(h), m = D(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  let g = [
    {
      x: -c / 2,
      y: -i / 2
    },
    {
      x: c / 2 - n2,
      y: -i / 2
    },
    ...Rt(-c / 2 + n2, 0, n2, 50, 90, 270),
    {
      x: c / 2 - n2,
      y: i / 2
    },
    {
      x: -c / 2,
      y: i / 2
    }
  ], d = V(g), y = f.path(d, m), x = h.insert(() => y, ":first-child");
  return x.attr("class", "basic label-container"), p && t.look !== "handDrawn" && x.selectChildren("path").attr("style", p), r && t.look !== "handDrawn" && x.selectChildren("path").attr("style", r), M(t, x), t.intersect = function(b) {
    return tt$1.info("Pill intersect", t, {
      radius: n2,
      point: b
    }), N.polygon(t, g, b);
  }, h;
}
m$1(os, "halfRoundedRectangle");
var vr = m$1((l, t, o, r, e) => [
  `M${l + e},${t}`,
  `L${l + o - e},${t}`,
  `L${l + o},${t - r / 2}`,
  `L${l + o - e},${t - r}`,
  `L${l + e},${t - r}`,
  `L${l},${t - r / 2}`,
  "Z"
].join(" "), "createHexagonPathD");
async function as(l, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: e, bbox: a } = await C(l, t, T(t)), h = 4, s = a.height + t.padding, c = s / h, i = a.width + 2 * c + t.padding, n2 = [
    {
      x: c,
      y: 0
    },
    {
      x: i - c,
      y: 0
    },
    {
      x: i,
      y: -s / 2
    },
    {
      x: i - c,
      y: -s
    },
    {
      x: c,
      y: -s
    },
    {
      x: 0,
      y: -s / 2
    }
  ], p, { cssStyles: f } = t;
  if (t.look === "handDrawn") {
    let m = v.svg(e), g = D(t, {}), d = vr(0, 0, i, s, c), y = m.path(d, g);
    p = e.insert(() => y, ":first-child").attr("transform", `translate(${-i / 2}, ${s / 2})`), f && p.attr("style", f);
  } else p = K(e, i, s, n2);
  return r && p.attr("style", r), t.width = i, t.height = s, M(t, p), t.intersect = function(m) {
    return N.polygon(t, n2, m);
  }, e;
}
m$1(as, "hexagon");
async function is(l, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.label = "", t.labelStyle = o;
  let { shapeSvg: e } = await C(l, t, T(t)), a = Math.max(30, (t == null ? void 0 : t.width) ?? 0), h = Math.max(30, (t == null ? void 0 : t.height) ?? 0), { cssStyles: s } = t, c = v.svg(e), i = D(t, {});
  t.look !== "handDrawn" && (i.roughness = 0, i.fillStyle = "solid");
  let n2 = [
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
      y: h
    },
    {
      x: a,
      y: h
    }
  ], p = V(n2), f = c.path(p, i), m = e.insert(() => f, ":first-child");
  return m.attr("class", "basic label-container"), s && t.look !== "handDrawn" && m.selectChildren("path").attr("style", s), r && t.look !== "handDrawn" && m.selectChildren("path").attr("style", r), m.attr("transform", `translate(${-a / 2}, ${-h / 2})`), M(t, m), t.intersect = function(g) {
    return tt$1.info("Pill intersect", t, {
      points: n2
    }), N.polygon(t, n2, g);
  }, e;
}
m$1(is, "hourglass");
async function ns(l, t, param) {
  let { config: { themeVariables: o, flowchart: r } } = param;
  let { labelStyles: e } = k(t);
  t.labelStyle = e;
  let a = t.assetHeight ?? 48, h = t.assetWidth ?? 48, s = Math.max(a, h), c = r == null ? void 0 : r.wrappingWidth;
  t.width = Math.max(s, c ?? 0);
  let { shapeSvg: i, bbox: n2, label: p } = await C(l, t, "icon-shape default"), f = t.pos === "t", m = s, g = s, { nodeBorder: d } = o, { stylesMap: y } = nt(t), x = -g / 2, b = -m / 2, S2 = t.label ? 8 : 0, $ = v.svg(i), w = D(t, {
    stroke: "none",
    fill: "none"
  });
  t.look !== "handDrawn" && (w.roughness = 0, w.fillStyle = "solid");
  let P = $.rectangle(x, b, g, m, w), B = Math.max(g, n2.width), R = m + n2.height + S2, j = $.rectangle(-B / 2, -R / 2, B, R, {
    ...w,
    fill: "transparent",
    stroke: "none"
  }), G = i.insert(() => P, ":first-child"), E = i.insert(() => j);
  if (t.icon) {
    let I = i.append("g");
    I.html(`<g>${await St$1(t.icon, {
      height: s,
      width: s,
      fallbackPrefix: ""
    })}</g>`);
    let A = I.node().getBBox(), L = A.width, H = A.height, O = A.x, F = A.y;
    I.attr("transform", `translate(${-L / 2 - O},${f ? n2.height / 2 + S2 / 2 - H / 2 - F : -n2.height / 2 - S2 / 2 - H / 2 - F})`), I.attr("style", `color: ${y.get("stroke") ?? d};`);
  }
  return p.attr("transform", `translate(${-n2.width / 2 - (n2.x - (n2.left ?? 0))},${f ? -R / 2 : R / 2 - n2.height})`), G.attr("transform", `translate(0,${f ? n2.height / 2 + S2 / 2 : -n2.height / 2 - S2 / 2})`), M(t, E), t.intersect = function(I) {
    if (tt$1.info("iconSquare intersect", t, I), !t.label) return N.rect(t, I);
    let A = t.x ?? 0, L = t.y ?? 0, H = t.height ?? 0, O = [];
    return f ? O = [
      {
        x: A - n2.width / 2,
        y: L - H / 2
      },
      {
        x: A + n2.width / 2,
        y: L - H / 2
      },
      {
        x: A + n2.width / 2,
        y: L - H / 2 + n2.height + S2
      },
      {
        x: A + g / 2,
        y: L - H / 2 + n2.height + S2
      },
      {
        x: A + g / 2,
        y: L + H / 2
      },
      {
        x: A - g / 2,
        y: L + H / 2
      },
      {
        x: A - g / 2,
        y: L - H / 2 + n2.height + S2
      },
      {
        x: A - n2.width / 2,
        y: L - H / 2 + n2.height + S2
      }
    ] : O = [
      {
        x: A - g / 2,
        y: L - H / 2
      },
      {
        x: A + g / 2,
        y: L - H / 2
      },
      {
        x: A + g / 2,
        y: L - H / 2 + m
      },
      {
        x: A + n2.width / 2,
        y: L - H / 2 + m
      },
      {
        x: A + n2.width / 2 / 2,
        y: L + H / 2
      },
      {
        x: A - n2.width / 2,
        y: L + H / 2
      },
      {
        x: A - n2.width / 2,
        y: L - H / 2 + m
      },
      {
        x: A - g / 2,
        y: L - H / 2 + m
      }
    ], N.polygon(t, O, I);
  }, i;
}
m$1(ns, "icon");
async function ls(l, t, param) {
  let { config: { themeVariables: o, flowchart: r } } = param;
  let { labelStyles: e } = k(t);
  t.labelStyle = e;
  let a = t.assetHeight ?? 48, h = t.assetWidth ?? 48, s = Math.max(a, h), c = r == null ? void 0 : r.wrappingWidth;
  t.width = Math.max(s, c ?? 0);
  let { shapeSvg: i, bbox: n2, label: p } = await C(l, t, "icon-shape default"), f = 20, m = t.label ? 8 : 0, g = t.pos === "t", { nodeBorder: d, mainBkg: y } = o, { stylesMap: x } = nt(t), b = v.svg(i), S2 = D(t, {});
  t.look !== "handDrawn" && (S2.roughness = 0, S2.fillStyle = "solid");
  let $ = x.get("fill");
  S2.stroke = $ ?? y;
  let w = i.append("g");
  t.icon && w.html(`<g>${await St$1(t.icon, {
    height: s,
    width: s,
    fallbackPrefix: ""
  })}</g>`);
  let P = w.node().getBBox(), B = P.width, R = P.height, j = P.x, G = P.y, E = Math.max(B, R) * Math.SQRT2 + f * 2, I = b.circle(0, 0, E, S2), A = Math.max(E, n2.width), L = E + n2.height + m, H = b.rectangle(-A / 2, -L / 2, A, L, {
    ...S2,
    fill: "transparent",
    stroke: "none"
  }), O = i.insert(() => I, ":first-child"), F = i.insert(() => H);
  return w.attr("transform", `translate(${-B / 2 - j},${g ? n2.height / 2 + m / 2 - R / 2 - G : -n2.height / 2 - m / 2 - R / 2 - G})`), w.attr("style", `color: ${x.get("stroke") ?? d};`), p.attr("transform", `translate(${-n2.width / 2 - (n2.x - (n2.left ?? 0))},${g ? -L / 2 : L / 2 - n2.height})`), O.attr("transform", `translate(0,${g ? n2.height / 2 + m / 2 : -n2.height / 2 - m / 2})`), M(t, F), t.intersect = function(W) {
    return tt$1.info("iconSquare intersect", t, W), N.rect(t, W);
  }, i;
}
m$1(ls, "iconCircle");
async function cs(l, t, param) {
  let { config: { themeVariables: o, flowchart: r } } = param;
  let { labelStyles: e } = k(t);
  t.labelStyle = e;
  let a = t.assetHeight ?? 48, h = t.assetWidth ?? 48, s = Math.max(a, h), c = r == null ? void 0 : r.wrappingWidth;
  t.width = Math.max(s, c ?? 0);
  let { shapeSvg: i, bbox: n2, halfPadding: p, label: f } = await C(l, t, "icon-shape default"), m = t.pos === "t", g = s + p * 2, d = s + p * 2, { nodeBorder: y, mainBkg: x } = o, { stylesMap: b } = nt(t), S2 = -d / 2, $ = -g / 2, w = t.label ? 8 : 0, P = v.svg(i), B = D(t, {});
  t.look !== "handDrawn" && (B.roughness = 0, B.fillStyle = "solid");
  let R = b.get("fill");
  B.stroke = R ?? x;
  let j = P.path(J(S2, $, d, g, 5), B), G = Math.max(d, n2.width), E = g + n2.height + w, I = P.rectangle(-G / 2, -E / 2, G, E, {
    ...B,
    fill: "transparent",
    stroke: "none"
  }), A = i.insert(() => j, ":first-child").attr("class", "icon-shape2"), L = i.insert(() => I);
  if (t.icon) {
    let H = i.append("g");
    H.html(`<g>${await St$1(t.icon, {
      height: s,
      width: s,
      fallbackPrefix: ""
    })}</g>`);
    let O = H.node().getBBox(), F = O.width, W = O.height, q = O.x, Q = O.y;
    H.attr("transform", `translate(${-F / 2 - q},${m ? n2.height / 2 + w / 2 - W / 2 - Q : -n2.height / 2 - w / 2 - W / 2 - Q})`), H.attr("style", `color: ${b.get("stroke") ?? y};`);
  }
  return f.attr("transform", `translate(${-n2.width / 2 - (n2.x - (n2.left ?? 0))},${m ? -E / 2 : E / 2 - n2.height})`), A.attr("transform", `translate(0,${m ? n2.height / 2 + w / 2 : -n2.height / 2 - w / 2})`), M(t, L), t.intersect = function(H) {
    if (tt$1.info("iconSquare intersect", t, H), !t.label) return N.rect(t, H);
    let O = t.x ?? 0, F = t.y ?? 0, W = t.height ?? 0, q = [];
    return m ? q = [
      {
        x: O - n2.width / 2,
        y: F - W / 2
      },
      {
        x: O + n2.width / 2,
        y: F - W / 2
      },
      {
        x: O + n2.width / 2,
        y: F - W / 2 + n2.height + w
      },
      {
        x: O + d / 2,
        y: F - W / 2 + n2.height + w
      },
      {
        x: O + d / 2,
        y: F + W / 2
      },
      {
        x: O - d / 2,
        y: F + W / 2
      },
      {
        x: O - d / 2,
        y: F - W / 2 + n2.height + w
      },
      {
        x: O - n2.width / 2,
        y: F - W / 2 + n2.height + w
      }
    ] : q = [
      {
        x: O - d / 2,
        y: F - W / 2
      },
      {
        x: O + d / 2,
        y: F - W / 2
      },
      {
        x: O + d / 2,
        y: F - W / 2 + g
      },
      {
        x: O + n2.width / 2,
        y: F - W / 2 + g
      },
      {
        x: O + n2.width / 2 / 2,
        y: F + W / 2
      },
      {
        x: O - n2.width / 2,
        y: F + W / 2
      },
      {
        x: O - n2.width / 2,
        y: F - W / 2 + g
      },
      {
        x: O - d / 2,
        y: F - W / 2 + g
      }
    ], N.polygon(t, q, H);
  }, i;
}
m$1(cs, "iconRounded");
async function hs(l, t, param) {
  let { config: { themeVariables: o, flowchart: r } } = param;
  let { labelStyles: e } = k(t);
  t.labelStyle = e;
  let a = t.assetHeight ?? 48, h = t.assetWidth ?? 48, s = Math.max(a, h), c = r == null ? void 0 : r.wrappingWidth;
  t.width = Math.max(s, c ?? 0);
  let { shapeSvg: i, bbox: n2, halfPadding: p, label: f } = await C(l, t, "icon-shape default"), m = t.pos === "t", g = s + p * 2, d = s + p * 2, { nodeBorder: y, mainBkg: x } = o, { stylesMap: b } = nt(t), S2 = -d / 2, $ = -g / 2, w = t.label ? 8 : 0, P = v.svg(i), B = D(t, {});
  t.look !== "handDrawn" && (B.roughness = 0, B.fillStyle = "solid");
  let R = b.get("fill");
  B.stroke = R ?? x;
  let j = P.path(J(S2, $, d, g, 0.1), B), G = Math.max(d, n2.width), E = g + n2.height + w, I = P.rectangle(-G / 2, -E / 2, G, E, {
    ...B,
    fill: "transparent",
    stroke: "none"
  }), A = i.insert(() => j, ":first-child"), L = i.insert(() => I);
  if (t.icon) {
    let H = i.append("g");
    H.html(`<g>${await St$1(t.icon, {
      height: s,
      width: s,
      fallbackPrefix: ""
    })}</g>`);
    let O = H.node().getBBox(), F = O.width, W = O.height, q = O.x, Q = O.y;
    H.attr("transform", `translate(${-F / 2 - q},${m ? n2.height / 2 + w / 2 - W / 2 - Q : -n2.height / 2 - w / 2 - W / 2 - Q})`), H.attr("style", `color: ${b.get("stroke") ?? y};`);
  }
  return f.attr("transform", `translate(${-n2.width / 2 - (n2.x - (n2.left ?? 0))},${m ? -E / 2 : E / 2 - n2.height})`), A.attr("transform", `translate(0,${m ? n2.height / 2 + w / 2 : -n2.height / 2 - w / 2})`), M(t, L), t.intersect = function(H) {
    if (tt$1.info("iconSquare intersect", t, H), !t.label) return N.rect(t, H);
    let O = t.x ?? 0, F = t.y ?? 0, W = t.height ?? 0, q = [];
    return m ? q = [
      {
        x: O - n2.width / 2,
        y: F - W / 2
      },
      {
        x: O + n2.width / 2,
        y: F - W / 2
      },
      {
        x: O + n2.width / 2,
        y: F - W / 2 + n2.height + w
      },
      {
        x: O + d / 2,
        y: F - W / 2 + n2.height + w
      },
      {
        x: O + d / 2,
        y: F + W / 2
      },
      {
        x: O - d / 2,
        y: F + W / 2
      },
      {
        x: O - d / 2,
        y: F - W / 2 + n2.height + w
      },
      {
        x: O - n2.width / 2,
        y: F - W / 2 + n2.height + w
      }
    ] : q = [
      {
        x: O - d / 2,
        y: F - W / 2
      },
      {
        x: O + d / 2,
        y: F - W / 2
      },
      {
        x: O + d / 2,
        y: F - W / 2 + g
      },
      {
        x: O + n2.width / 2,
        y: F - W / 2 + g
      },
      {
        x: O + n2.width / 2 / 2,
        y: F + W / 2
      },
      {
        x: O - n2.width / 2,
        y: F + W / 2
      },
      {
        x: O - n2.width / 2,
        y: F - W / 2 + g
      },
      {
        x: O - d / 2,
        y: F - W / 2 + g
      }
    ], N.polygon(t, q, H);
  }, i;
}
m$1(hs, "iconSquare");
async function ps(l, t, param) {
  let { config: { flowchart: o } } = param;
  let r = new Image();
  r.src = (t == null ? void 0 : t.img) ?? "", await r.decode();
  let e = Number(r.naturalWidth.toString().replace("px", "")), a = Number(r.naturalHeight.toString().replace("px", ""));
  t.imageAspectRatio = e / a;
  let { labelStyles: h } = k(t);
  t.labelStyle = h;
  let s = o == null ? void 0 : o.wrappingWidth;
  t.defaultWidth = o == null ? void 0 : o.wrappingWidth;
  let c = Math.max(t.label ? s ?? 0 : 0, (t == null ? void 0 : t.assetWidth) ?? e), i = t.constraint === "on" && (t == null ? void 0 : t.assetHeight) ? t.assetHeight * t.imageAspectRatio : c, n2 = t.constraint === "on" ? i / t.imageAspectRatio : (t == null ? void 0 : t.assetHeight) ?? a;
  t.width = Math.max(i, s ?? 0);
  let { shapeSvg: p, bbox: f, label: m } = await C(l, t, "image-shape default"), g = t.pos === "t", d = -i / 2, y = -n2 / 2, x = t.label ? 8 : 0, b = v.svg(p), S2 = D(t, {});
  t.look !== "handDrawn" && (S2.roughness = 0, S2.fillStyle = "solid");
  let $ = b.rectangle(d, y, i, n2, S2), w = Math.max(i, f.width), P = n2 + f.height + x, B = b.rectangle(-w / 2, -P / 2, w, P, {
    ...S2,
    fill: "none",
    stroke: "none"
  }), R = p.insert(() => $, ":first-child"), j = p.insert(() => B);
  if (t.img) {
    let G = p.append("image");
    G.attr("href", t.img), G.attr("width", i), G.attr("height", n2), G.attr("preserveAspectRatio", "none"), G.attr("transform", `translate(${-i / 2},${g ? P / 2 - n2 : -P / 2})`);
  }
  return m.attr("transform", `translate(${-f.width / 2 - (f.x - (f.left ?? 0))},${g ? -n2 / 2 - f.height / 2 - x / 2 : n2 / 2 - f.height / 2 + x / 2})`), R.attr("transform", `translate(0,${g ? f.height / 2 + x / 2 : -f.height / 2 - x / 2})`), M(t, j), t.intersect = function(G) {
    if (tt$1.info("iconSquare intersect", t, G), !t.label) return N.rect(t, G);
    let E = t.x ?? 0, I = t.y ?? 0, A = t.height ?? 0, L = [];
    return g ? L = [
      {
        x: E - f.width / 2,
        y: I - A / 2
      },
      {
        x: E + f.width / 2,
        y: I - A / 2
      },
      {
        x: E + f.width / 2,
        y: I - A / 2 + f.height + x
      },
      {
        x: E + i / 2,
        y: I - A / 2 + f.height + x
      },
      {
        x: E + i / 2,
        y: I + A / 2
      },
      {
        x: E - i / 2,
        y: I + A / 2
      },
      {
        x: E - i / 2,
        y: I - A / 2 + f.height + x
      },
      {
        x: E - f.width / 2,
        y: I - A / 2 + f.height + x
      }
    ] : L = [
      {
        x: E - i / 2,
        y: I - A / 2
      },
      {
        x: E + i / 2,
        y: I - A / 2
      },
      {
        x: E + i / 2,
        y: I - A / 2 + n2
      },
      {
        x: E + f.width / 2,
        y: I - A / 2 + n2
      },
      {
        x: E + f.width / 2 / 2,
        y: I + A / 2
      },
      {
        x: E - f.width / 2,
        y: I + A / 2
      },
      {
        x: E - f.width / 2,
        y: I - A / 2 + n2
      },
      {
        x: E - i / 2,
        y: I - A / 2 + n2
      }
    ], N.polygon(t, L, G);
  }, p;
}
m$1(ps, "imageSquare");
async function ms(l, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: e, bbox: a } = await C(l, t, T(t)), h = Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), s = Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), c = [
    {
      x: 0,
      y: 0
    },
    {
      x: h,
      y: 0
    },
    {
      x: h + 3 * s / 6,
      y: -s
    },
    {
      x: -3 * s / 6,
      y: -s
    }
  ], i, { cssStyles: n2 } = t;
  if (t.look === "handDrawn") {
    let p = v.svg(e), f = D(t, {}), m = V(c), g = p.path(m, f);
    i = e.insert(() => g, ":first-child").attr("transform", `translate(${-h / 2}, ${s / 2})`), n2 && i.attr("style", n2);
  } else i = K(e, h, s, c);
  return r && i.attr("style", r), t.width = h, t.height = s, M(t, i), t.intersect = function(p) {
    return N.polygon(t, c, p);
  }, e;
}
m$1(ms, "inv_trapezoid");
async function ct(l, t, o) {
  let { labelStyles: r, nodeStyles: e } = k(t);
  t.labelStyle = r;
  let { shapeSvg: a, bbox: h } = await C(l, t, T(t)), s = Math.max(h.width + o.labelPaddingX * 2, (t == null ? void 0 : t.width) || 0), c = Math.max(h.height + o.labelPaddingY * 2, (t == null ? void 0 : t.height) || 0), i = -s / 2, n2 = -c / 2, p, { rx: f, ry: m } = t, { cssStyles: g } = t;
  if ((o == null ? void 0 : o.rx) && o.ry && (f = o.rx, m = o.ry), t.look === "handDrawn") {
    let d = v.svg(a), y = D(t, {}), x = f || m ? d.path(J(i, n2, s, c, f || 0), y) : d.rectangle(i, n2, s, c, y);
    p = a.insert(() => x, ":first-child"), p.attr("class", "basic label-container").attr("style", Je$1(g));
  } else p = a.insert("rect", ":first-child"), p.attr("class", "basic label-container").attr("style", e).attr("rx", Je$1(f)).attr("ry", Je$1(m)).attr("x", i).attr("y", n2).attr("width", s).attr("height", c);
  return M(t, p), t.intersect = function(d) {
    return N.rect(t, d);
  }, a;
}
m$1(ct, "drawRect");
async function fs(l, t) {
  let { shapeSvg: o, bbox: r, label: e } = await C(l, t, "label"), a = o.insert("rect", ":first-child");
  return a.attr("width", 0.1).attr("height", 0.1), o.attr("class", "label edgeLabel"), e.attr("transform", `translate(${-(r.width / 2) - (r.x - (r.left ?? 0))}, ${-(r.height / 2) - (r.y - (r.top ?? 0))})`), M(t, a), t.intersect = function(c) {
    return N.rect(t, c);
  }, o;
}
m$1(fs, "labelRect");
async function gs(l, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: e, bbox: a } = await C(l, t, T(t)), h = Math.max(a.width + (t.padding ?? 0), (t == null ? void 0 : t.width) ?? 0), s = Math.max(a.height + (t.padding ?? 0), (t == null ? void 0 : t.height) ?? 0), c = [
    {
      x: 0,
      y: 0
    },
    {
      x: h + 3 * s / 6,
      y: 0
    },
    {
      x: h,
      y: -s
    },
    {
      x: -(3 * s) / 6,
      y: -s
    }
  ], i, { cssStyles: n2 } = t;
  if (t.look === "handDrawn") {
    let p = v.svg(e), f = D(t, {}), m = V(c), g = p.path(m, f);
    i = e.insert(() => g, ":first-child").attr("transform", `translate(${-h / 2}, ${s / 2})`), n2 && i.attr("style", n2);
  } else i = K(e, h, s, c);
  return r && i.attr("style", r), t.width = h, t.height = s, M(t, i), t.intersect = function(p) {
    return N.polygon(t, c, p);
  }, e;
}
m$1(gs, "lean_left");
async function ds(l, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: e, bbox: a } = await C(l, t, T(t)), h = Math.max(a.width + (t.padding ?? 0), (t == null ? void 0 : t.width) ?? 0), s = Math.max(a.height + (t.padding ?? 0), (t == null ? void 0 : t.height) ?? 0), c = [
    {
      x: -3 * s / 6,
      y: 0
    },
    {
      x: h,
      y: 0
    },
    {
      x: h + 3 * s / 6,
      y: -s
    },
    {
      x: 0,
      y: -s
    }
  ], i, { cssStyles: n2 } = t;
  if (t.look === "handDrawn") {
    let p = v.svg(e), f = D(t, {}), m = V(c), g = p.path(m, f);
    i = e.insert(() => g, ":first-child").attr("transform", `translate(${-h / 2}, ${s / 2})`), n2 && i.attr("style", n2);
  } else i = K(e, h, s, c);
  return r && i.attr("style", r), t.width = h, t.height = s, M(t, i), t.intersect = function(p) {
    return N.polygon(t, c, p);
  }, e;
}
m$1(ds, "lean_right");
function us(l, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.label = "", t.labelStyle = o;
  let e = l.insert("g").attr("class", T(t)).attr("id", t.domId ?? t.id), { cssStyles: a } = t, h = Math.max(35, (t == null ? void 0 : t.width) ?? 0), s = Math.max(35, (t == null ? void 0 : t.height) ?? 0), c = 7, i = [
    {
      x: h,
      y: 0
    },
    {
      x: 0,
      y: s + c / 2
    },
    {
      x: h - 2 * c,
      y: s + c / 2
    },
    {
      x: 0,
      y: 2 * s
    },
    {
      x: h,
      y: s - c / 2
    },
    {
      x: 2 * c,
      y: s - c / 2
    }
  ], n2 = v.svg(e), p = D(t, {});
  t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
  let f = V(i), m = n2.path(f, p), g = e.insert(() => m, ":first-child");
  return a && t.look !== "handDrawn" && g.selectAll("path").attr("style", a), r && t.look !== "handDrawn" && g.selectAll("path").attr("style", r), g.attr("transform", `translate(-${h / 2},${-s})`), M(t, g), t.intersect = function(d) {
    return tt$1.info("lightningBolt intersect", t, d), N.polygon(t, i, d);
  }, e;
}
m$1(us, "lightningBolt");
var Dr = m$1((l, t, o, r, e, a, h) => [
  `M${l},${t + a}`,
  `a${e},${a} 0,0,0 ${o},0`,
  `a${e},${a} 0,0,0 ${-o},0`,
  `l0,${r}`,
  `a${e},${a} 0,0,0 ${o},0`,
  `l0,${-r}`,
  `M${l},${t + a + h}`,
  `a${e},${a} 0,0,0 ${o},0`
].join(" "), "createCylinderPathD"), Mr = m$1((l, t, o, r, e, a, h) => [
  `M${l},${t + a}`,
  `M${l + o},${t + a}`,
  `a${e},${a} 0,0,0 ${-o},0`,
  `l0,${r}`,
  `a${e},${a} 0,0,0 ${o},0`,
  `l0,${-r}`,
  `M${l},${t + a + h}`,
  `a${e},${a} 0,0,0 ${o},0`
].join(" "), "createOuterCylinderPathD"), kr = m$1((l, t, o, r, e, a) => [
  `M${l - o / 2},${-r / 2}`,
  `a${e},${a} 0,0,0 ${o},0`
].join(" "), "createInnerCylinderPathD");
async function ys(l, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: e, bbox: a, label: h } = await C(l, t, T(t)), s = Math.max(a.width + (t.padding ?? 0), t.width ?? 0), c = s / 2, i = c / (2.5 + s / 50), n2 = Math.max(a.height + i + (t.padding ?? 0), t.height ?? 0), p = n2 * 0.1, f, { cssStyles: m } = t;
  if (t.look === "handDrawn") {
    let g = v.svg(e), d = Mr(0, 0, s, n2, c, i, p), y = kr(0, i, s, n2, c, i), x = D(t, {}), b = g.path(d, x), S2 = g.path(y, x);
    e.insert(() => S2, ":first-child").attr("class", "line"), f = e.insert(() => b, ":first-child"), f.attr("class", "basic label-container"), m && f.attr("style", m);
  } else {
    let g = Dr(0, 0, s, n2, c, i, p);
    f = e.insert("path", ":first-child").attr("d", g).attr("class", "basic label-container").attr("style", Je$1(m)).attr("style", r);
  }
  return f.attr("label-offset-y", i), f.attr("transform", `translate(${-s / 2}, ${-(n2 / 2 + i)})`), M(t, f), h.attr("transform", `translate(${-(a.width / 2) - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + i - (a.y - (a.top ?? 0))})`), t.intersect = function(g) {
    let d = N.rect(t, g), y = d.x - (t.x ?? 0);
    if (c != 0 && (Math.abs(y) < (t.width ?? 0) / 2 || Math.abs(y) == (t.width ?? 0) / 2 && Math.abs(d.y - (t.y ?? 0)) > (t.height ?? 0) / 2 - i)) {
      let x = i * i * (1 - y * y / (c * c));
      x > 0 && (x = Math.sqrt(x)), x = i - x, g.y - (t.y ?? 0) > 0 && (x = -x), d.y += x;
    }
    return d;
  }, e;
}
m$1(ys, "linedCylinder");
async function xs(l, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: e, bbox: a, label: h } = await C(l, t, T(t)), s = Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), c = Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), i = c / 4, n2 = c + i, { cssStyles: p } = t, f = v.svg(e), m = D(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  let g = [
    {
      x: -s / 2 - s / 2 * 0.1,
      y: -n2 / 2
    },
    {
      x: -s / 2 - s / 2 * 0.1,
      y: n2 / 2
    },
    ...at(-s / 2 - s / 2 * 0.1, n2 / 2, s / 2 + s / 2 * 0.1, n2 / 2, i, 0.8),
    {
      x: s / 2 + s / 2 * 0.1,
      y: -n2 / 2
    },
    {
      x: -s / 2 - s / 2 * 0.1,
      y: -n2 / 2
    },
    {
      x: -s / 2,
      y: -n2 / 2
    },
    {
      x: -s / 2,
      y: n2 / 2 * 1.1
    },
    {
      x: -s / 2,
      y: -n2 / 2
    }
  ], d = f.polygon(g.map((x) => [
    x.x,
    x.y
  ]), m), y = e.insert(() => d, ":first-child");
  return y.attr("class", "basic label-container"), p && t.look !== "handDrawn" && y.selectAll("path").attr("style", p), r && t.look !== "handDrawn" && y.selectAll("path").attr("style", r), y.attr("transform", `translate(0,${-i / 2})`), h.attr("transform", `translate(${-s / 2 + (t.padding ?? 0) + s / 2 * 0.1 / 2 - (a.x - (a.left ?? 0))},${-c / 2 + (t.padding ?? 0) - i / 2 - (a.y - (a.top ?? 0))})`), M(t, y), t.intersect = function(x) {
    return N.polygon(t, g, x);
  }, e;
}
m$1(xs, "linedWaveEdgedRect");
async function bs(l, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: e, bbox: a, label: h } = await C(l, t, T(t)), s = Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), c = Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), i = 5, n2 = -s / 2, p = -c / 2, { cssStyles: f } = t, m = v.svg(e), g = D(t, {}), d = [
    {
      x: n2 - i,
      y: p + i
    },
    {
      x: n2 - i,
      y: p + c + i
    },
    {
      x: n2 + s - i,
      y: p + c + i
    },
    {
      x: n2 + s - i,
      y: p + c
    },
    {
      x: n2 + s,
      y: p + c
    },
    {
      x: n2 + s,
      y: p + c - i
    },
    {
      x: n2 + s + i,
      y: p + c - i
    },
    {
      x: n2 + s + i,
      y: p - i
    },
    {
      x: n2 + i,
      y: p - i
    },
    {
      x: n2 + i,
      y: p
    },
    {
      x: n2,
      y: p
    },
    {
      x: n2,
      y: p + i
    }
  ], y = [
    {
      x: n2,
      y: p + i
    },
    {
      x: n2 + s - i,
      y: p + i
    },
    {
      x: n2 + s - i,
      y: p + c
    },
    {
      x: n2 + s,
      y: p + c
    },
    {
      x: n2 + s,
      y: p
    },
    {
      x: n2,
      y: p
    }
  ];
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  let x = V(d), b = m.path(x, g), S2 = V(y), $ = m.path(S2, {
    ...g,
    fill: "none"
  }), w = e.insert(() => $, ":first-child");
  return w.insert(() => b, ":first-child"), w.attr("class", "basic label-container"), f && t.look !== "handDrawn" && w.selectAll("path").attr("style", f), r && t.look !== "handDrawn" && w.selectAll("path").attr("style", r), h.attr("transform", `translate(${-(a.width / 2) - i - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + i - (a.y - (a.top ?? 0))})`), M(t, w), t.intersect = function(P) {
    return N.polygon(t, d, P);
  }, e;
}
m$1(bs, "multiRect");
async function Ss(l, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: e, bbox: a, label: h } = await C(l, t, T(t)), s = Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), c = Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), i = c / 4, n2 = c + i, p = -s / 2, f = -n2 / 2, m = 5, { cssStyles: g } = t, d = at(p - m, f + n2 + m, p + s - m, f + n2 + m, i, 0.8), y = d == null ? void 0 : d[d.length - 1], x = [
    {
      x: p - m,
      y: f + m
    },
    {
      x: p - m,
      y: f + n2 + m
    },
    ...d,
    {
      x: p + s - m,
      y: y.y - m
    },
    {
      x: p + s,
      y: y.y - m
    },
    {
      x: p + s,
      y: y.y - 2 * m
    },
    {
      x: p + s + m,
      y: y.y - 2 * m
    },
    {
      x: p + s + m,
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
      x: p + s - m,
      y: f + m
    },
    {
      x: p + s - m,
      y: y.y - m
    },
    {
      x: p + s,
      y: y.y - m
    },
    {
      x: p + s,
      y: f
    },
    {
      x: p,
      y: f
    }
  ], S2 = v.svg(e), $ = D(t, {});
  t.look !== "handDrawn" && ($.roughness = 0, $.fillStyle = "solid");
  let w = V(x), P = S2.path(w, $), B = V(b), R = S2.path(B, $), j = e.insert(() => P, ":first-child");
  return j.insert(() => R), j.attr("class", "basic label-container"), g && t.look !== "handDrawn" && j.selectAll("path").attr("style", g), r && t.look !== "handDrawn" && j.selectAll("path").attr("style", r), j.attr("transform", `translate(0,${-i / 2})`), h.attr("transform", `translate(${-(a.width / 2) - m - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + m - i / 2 - (a.y - (a.top ?? 0))})`), M(t, j), t.intersect = function(G) {
    return N.polygon(t, x, G);
  }, e;
}
m$1(Ss, "multiWaveEdgedRectangle");
async function ws(l, t, param) {
  var _a2;
  let { config: { themeVariables: o } } = param;
  let { labelStyles: r, nodeStyles: e } = k(t);
  t.labelStyle = r, t.useHtmlLabels || ((_a2 = Er().flowchart) == null ? void 0 : _a2.htmlLabels) !== false || (t.centerLabel = true);
  let { shapeSvg: h, bbox: s } = await C(l, t, T(t)), c = Math.max(s.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), i = Math.max(s.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), n2 = -c / 2, p = -i / 2, { cssStyles: f } = t, m = v.svg(h), g = D(t, {
    fill: o.noteBkgColor,
    stroke: o.noteBorderColor
  });
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  let d = m.rectangle(n2, p, c, i, g), y = h.insert(() => d, ":first-child");
  return y.attr("class", "basic label-container"), f && t.look !== "handDrawn" && y.selectAll("path").attr("style", f), e && t.look !== "handDrawn" && y.selectAll("path").attr("style", e), M(t, y), t.intersect = function(x) {
    return N.rect(t, x);
  }, h;
}
m$1(ws, "note");
var $r = m$1((l, t, o) => [
  `M${l + o / 2},${t}`,
  `L${l + o},${t - o / 2}`,
  `L${l + o / 2},${t - o}`,
  `L${l},${t - o / 2}`,
  "Z"
].join(" "), "createDecisionBoxPathD");
async function Ns(l, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: e, bbox: a } = await C(l, t, T(t)), h = a.width + t.padding, s = a.height + t.padding, c = h + s, i = [
    {
      x: c / 2,
      y: 0
    },
    {
      x: c,
      y: -c / 2
    },
    {
      x: c / 2,
      y: -c
    },
    {
      x: 0,
      y: -c / 2
    }
  ], n2, { cssStyles: p } = t;
  if (t.look === "handDrawn") {
    let f = v.svg(e), m = D(t, {}), g = $r(0, 0, c), d = f.path(g, m);
    n2 = e.insert(() => d, ":first-child").attr("transform", `translate(${-c / 2}, ${c / 2})`), p && n2.attr("style", p);
  } else n2 = K(e, c, c, i);
  return r && n2.attr("style", r), M(t, n2), t.intersect = function(f) {
    return tt$1.debug(`APA12 Intersect called SPLIT
point:`, f, `
node:
`, t, `
res:`, N.polygon(t, i, f)), N.polygon(t, i, f);
  }, e;
}
m$1(Ns, "question");
async function vs(l, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: e, bbox: a, label: h } = await C(l, t, T(t)), s = Math.max(a.width + (t.padding ?? 0), (t == null ? void 0 : t.width) ?? 0), c = Math.max(a.height + (t.padding ?? 0), (t == null ? void 0 : t.height) ?? 0), i = -s / 2, n2 = -c / 2, p = n2 / 2, f = [
    {
      x: i + p,
      y: n2
    },
    {
      x: i,
      y: 0
    },
    {
      x: i + p,
      y: -n2
    },
    {
      x: -i,
      y: -n2
    },
    {
      x: -i,
      y: n2
    }
  ], { cssStyles: m } = t, g = v.svg(e), d = D(t, {});
  t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
  let y = V(f), x = g.path(y, d), b = e.insert(() => x, ":first-child");
  return b.attr("class", "basic label-container"), m && t.look !== "handDrawn" && b.selectAll("path").attr("style", m), r && t.look !== "handDrawn" && b.selectAll("path").attr("style", r), b.attr("transform", `translate(${-p / 2},0)`), h.attr("transform", `translate(${-p / 2 - a.width / 2 - (a.x - (a.left ?? 0))}, ${-(a.height / 2) - (a.y - (a.top ?? 0))})`), M(t, b), t.intersect = function(S2) {
    return N.polygon(t, f, S2);
  }, e;
}
m$1(vs, "rect_left_inv_arrow");
async function Ds(l, t) {
  var _a2, _b2;
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let e;
  t.cssClasses ? e = "node " + t.cssClasses : e = "node default";
  let a = l.insert("g").attr("class", e).attr("id", t.domId || t.id), h = a.insert("g"), s = a.insert("g").attr("class", "label").attr("style", r), c = t.description, i = t.label, n2 = s.node().appendChild(await $t(i, t.labelStyle, true, true)), p = {
    width: 0,
    height: 0
  };
  if (mf((_b2 = (_a2 = Hl()) == null ? void 0 : _a2.flowchart) == null ? void 0 : _b2.htmlLabels)) {
    let R = n2.children[0], j = ih(n2);
    p = R.getBoundingClientRect(), j.attr("width", p.width), j.attr("height", p.height);
  }
  tt$1.info("Text 2", c);
  let f = c || [], m = n2.getBBox(), g = s.node().appendChild(await $t(f.join ? f.join("<br/>") : f, t.labelStyle, true, true)), d = g.children[0], y = ih(g);
  p = d.getBoundingClientRect(), y.attr("width", p.width), y.attr("height", p.height);
  let x = (t.padding || 0) / 2;
  ih(g).attr("transform", "translate( " + (p.width > m.width ? 0 : (m.width - p.width) / 2) + ", " + (m.height + x + 5) + ")"), ih(n2).attr("transform", "translate( " + (p.width < m.width ? 0 : -(m.width - p.width) / 2) + ", 0)"), p = s.node().getBBox(), s.attr("transform", "translate(" + -p.width / 2 + ", " + (-p.height / 2 - x + 3) + ")");
  let b = p.width + (t.padding || 0), S2 = p.height + (t.padding || 0), $ = -p.width / 2 - x, w = -p.height / 2 - x, P, B;
  if (t.look === "handDrawn") {
    let R = v.svg(a), j = D(t, {}), G = R.path(J($, w, b, S2, t.rx || 0), j), E = R.line(-p.width / 2 - x, -p.height / 2 - x + m.height + x, p.width / 2 + x, -p.height / 2 - x + m.height + x, j);
    B = a.insert(() => (tt$1.debug("Rough node insert CXC", G), E), ":first-child"), P = a.insert(() => (tt$1.debug("Rough node insert CXC", G), G), ":first-child");
  } else P = h.insert("rect", ":first-child"), B = h.insert("line"), P.attr("class", "outer title-state").attr("style", r).attr("x", -p.width / 2 - x).attr("y", -p.height / 2 - x).attr("width", p.width + (t.padding || 0)).attr("height", p.height + (t.padding || 0)), B.attr("class", "divider").attr("x1", -p.width / 2 - x).attr("x2", p.width / 2 + x).attr("y1", -p.height / 2 - x + m.height + x).attr("y2", -p.height / 2 - x + m.height + x);
  return M(t, P), t.intersect = function(R) {
    return N.rect(t, R);
  }, a;
}
m$1(Ds, "rectWithTitle");
async function Ms(l, t) {
  let o = {
    rx: 5,
    ry: 5,
    labelPaddingX: ((t == null ? void 0 : t.padding) || 0) * 1,
    labelPaddingY: ((t == null ? void 0 : t.padding) || 0) * 1
  };
  return ct(l, t, o);
}
m$1(Ms, "roundedRect");
async function ks(l, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: e, bbox: a, label: h } = await C(l, t, T(t)), s = (t == null ? void 0 : t.padding) ?? 0, c = Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), i = Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), n2 = -a.width / 2 - s, p = -a.height / 2 - s, { cssStyles: f } = t, m = v.svg(e), g = D(t, {});
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  let d = [
    {
      x: n2,
      y: p
    },
    {
      x: n2 + c + 8,
      y: p
    },
    {
      x: n2 + c + 8,
      y: p + i
    },
    {
      x: n2 - 8,
      y: p + i
    },
    {
      x: n2 - 8,
      y: p
    },
    {
      x: n2,
      y: p
    },
    {
      x: n2,
      y: p + i
    }
  ], y = m.polygon(d.map((b) => [
    b.x,
    b.y
  ]), g), x = e.insert(() => y, ":first-child");
  return x.attr("class", "basic label-container").attr("style", Je$1(f)), r && t.look !== "handDrawn" && x.selectAll("path").attr("style", r), f && t.look !== "handDrawn" && x.selectAll("path").attr("style", r), h.attr("transform", `translate(${-c / 2 + 4 + (t.padding ?? 0) - (a.x - (a.left ?? 0))},${-i / 2 + (t.padding ?? 0) - (a.y - (a.top ?? 0))})`), M(t, x), t.intersect = function(b) {
    return N.rect(t, b);
  }, e;
}
m$1(ks, "shadedProcess");
async function $s(l, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: e, bbox: a, label: h } = await C(l, t, T(t)), s = Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), c = Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), i = -s / 2, n2 = -c / 2, { cssStyles: p } = t, f = v.svg(e), m = D(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  let g = [
    {
      x: i,
      y: n2
    },
    {
      x: i,
      y: n2 + c
    },
    {
      x: i + s,
      y: n2 + c
    },
    {
      x: i + s,
      y: n2 - c / 2
    }
  ], d = V(g), y = f.path(d, m), x = e.insert(() => y, ":first-child");
  return x.attr("class", "basic label-container"), p && t.look !== "handDrawn" && x.selectChildren("path").attr("style", p), r && t.look !== "handDrawn" && x.selectChildren("path").attr("style", r), x.attr("transform", `translate(0, ${c / 4})`), h.attr("transform", `translate(${-s / 2 + (t.padding ?? 0) - (a.x - (a.left ?? 0))}, ${-c / 4 + (t.padding ?? 0) - (a.y - (a.top ?? 0))})`), M(t, x), t.intersect = function(b) {
    return N.polygon(t, g, b);
  }, e;
}
m$1($s, "slopedRect");
async function Ps(l, t) {
  let o = {
    rx: 0,
    ry: 0,
    labelPaddingX: ((t == null ? void 0 : t.padding) || 0) * 2,
    labelPaddingY: ((t == null ? void 0 : t.padding) || 0) * 1
  };
  return ct(l, t, o);
}
m$1(Ps, "squareRect");
async function Bs(l, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: e, bbox: a } = await C(l, t, T(t)), h = a.height + t.padding, s = a.width + h / 4 + t.padding, c, { cssStyles: i } = t;
  if (t.look === "handDrawn") {
    let n2 = v.svg(e), p = D(t, {}), f = J(-s / 2, -h / 2, s, h, h / 2), m = n2.path(f, p);
    c = e.insert(() => m, ":first-child"), c.attr("class", "basic label-container").attr("style", Je$1(i));
  } else c = e.insert("rect", ":first-child"), c.attr("class", "basic label-container").attr("style", r).attr("rx", h / 2).attr("ry", h / 2).attr("x", -s / 2).attr("y", -h / 2).attr("width", s).attr("height", h);
  return M(t, c), t.intersect = function(n2) {
    return N.rect(t, n2);
  }, e;
}
m$1(Bs, "stadium");
async function Ts(l, t) {
  return ct(l, t, {
    rx: 5,
    ry: 5
  });
}
m$1(Ts, "state");
function Cs(l, t, param) {
  let { config: { themeVariables: o } } = param;
  let { labelStyles: r, nodeStyles: e } = k(t);
  t.labelStyle = r;
  let { cssStyles: a } = t, { lineColor: h, stateBorder: s, nodeBorder: c } = o, i = l.insert("g").attr("class", "node default").attr("id", t.domId || t.id), n2 = v.svg(i), p = D(t, {});
  t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
  let f = n2.circle(0, 0, 14, {
    ...p,
    stroke: h,
    strokeWidth: 2
  }), m = s ?? c, g = n2.circle(0, 0, 5, {
    ...p,
    fill: m,
    stroke: m,
    strokeWidth: 2,
    fillStyle: "solid"
  }), d = i.insert(() => f, ":first-child");
  return d.insert(() => g), a && d.selectAll("path").attr("style", a), e && d.selectAll("path").attr("style", e), M(t, d), t.intersect = function(y) {
    return N.circle(t, 7, y);
  }, i;
}
m$1(Cs, "stateEnd");
function Rs(l, t, param) {
  let { config: { themeVariables: o } } = param;
  let { lineColor: r } = o, e = l.insert("g").attr("class", "node default").attr("id", t.domId || t.id), a;
  if (t.look === "handDrawn") {
    let s = v.svg(e).circle(0, 0, 14, Ge(r));
    a = e.insert(() => s), a.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
  } else a = e.insert("circle", ":first-child"), a.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
  return M(t, a), t.intersect = function(h) {
    return N.circle(t, 7, h);
  }, e;
}
m$1(Rs, "stateStart");
async function Gs(l, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: e, bbox: a } = await C(l, t, T(t)), h = ((t == null ? void 0 : t.padding) || 0) / 2, s = a.width + t.padding, c = a.height + t.padding, i = -a.width / 2 - h, n2 = -a.height / 2 - h, p = [
    {
      x: 0,
      y: 0
    },
    {
      x: s,
      y: 0
    },
    {
      x: s,
      y: -c
    },
    {
      x: 0,
      y: -c
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
      x: s + 8,
      y: 0
    },
    {
      x: s + 8,
      y: -c
    },
    {
      x: -8,
      y: -c
    },
    {
      x: -8,
      y: 0
    }
  ];
  if (t.look === "handDrawn") {
    let f = v.svg(e), m = D(t, {}), g = f.rectangle(i - 8, n2, s + 16, c, m), d = f.line(i, n2, i, n2 + c, m), y = f.line(i + s, n2, i + s, n2 + c, m);
    e.insert(() => d, ":first-child"), e.insert(() => y, ":first-child");
    let x = e.insert(() => g, ":first-child"), { cssStyles: b } = t;
    x.attr("class", "basic label-container").attr("style", Je$1(b)), M(t, x);
  } else {
    let f = K(e, s, c, p);
    r && f.attr("style", r), M(t, f);
  }
  return t.intersect = function(f) {
    return N.polygon(t, p, f);
  }, e;
}
m$1(Gs, "subroutine");
async function Es(l, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: e, bbox: a } = await C(l, t, T(t)), h = Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), s = Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), c = -h / 2, i = -s / 2, n2 = 0.2 * s, p = 0.2 * s, { cssStyles: f } = t, m = v.svg(e), g = D(t, {}), d = [
    {
      x: c - n2 / 2,
      y: i
    },
    {
      x: c + h + n2 / 2,
      y: i
    },
    {
      x: c + h + n2 / 2,
      y: i + s
    },
    {
      x: c - n2 / 2,
      y: i + s
    }
  ], y = [
    {
      x: c + h - n2 / 2,
      y: i + s
    },
    {
      x: c + h + n2 / 2,
      y: i + s
    },
    {
      x: c + h + n2 / 2,
      y: i + s - p
    }
  ];
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  let x = V(d), b = m.path(x, g), S2 = V(y), $ = m.path(S2, {
    ...g,
    fillStyle: "solid"
  }), w = e.insert(() => $, ":first-child");
  return w.insert(() => b, ":first-child"), w.attr("class", "basic label-container"), f && t.look !== "handDrawn" && w.selectAll("path").attr("style", f), r && t.look !== "handDrawn" && w.selectAll("path").attr("style", r), M(t, w), t.intersect = function(P) {
    return N.polygon(t, d, P);
  }, e;
}
m$1(Es, "taggedRect");
async function js(l, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: e, bbox: a, label: h } = await C(l, t, T(t)), s = Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), c = Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), i = c / 4, n2 = 0.2 * s, p = 0.2 * c, f = c + i, { cssStyles: m } = t, g = v.svg(e), d = D(t, {});
  t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
  let y = [
    {
      x: -s / 2 - s / 2 * 0.1,
      y: f / 2
    },
    ...at(-s / 2 - s / 2 * 0.1, f / 2, s / 2 + s / 2 * 0.1, f / 2, i, 0.8),
    {
      x: s / 2 + s / 2 * 0.1,
      y: -f / 2
    },
    {
      x: -s / 2 - s / 2 * 0.1,
      y: -f / 2
    }
  ], x = -s / 2 + s / 2 * 0.1, b = -f / 2 - p * 0.4, S2 = [
    {
      x: x + s - n2,
      y: (b + c) * 1.4
    },
    {
      x: x + s,
      y: b + c - p
    },
    {
      x: x + s,
      y: (b + c) * 0.9
    },
    ...at(x + s, (b + c) * 1.3, x + s - n2, (b + c) * 1.5, -c * 0.03, 0.5)
  ], $ = V(y), w = g.path($, d), P = V(S2), B = g.path(P, {
    ...d,
    fillStyle: "solid"
  }), R = e.insert(() => B, ":first-child");
  return R.insert(() => w, ":first-child"), R.attr("class", "basic label-container"), m && t.look !== "handDrawn" && R.selectAll("path").attr("style", m), r && t.look !== "handDrawn" && R.selectAll("path").attr("style", r), R.attr("transform", `translate(0,${-i / 2})`), h.attr("transform", `translate(${-s / 2 + (t.padding ?? 0) - (a.x - (a.left ?? 0))},${-c / 2 + (t.padding ?? 0) - i / 2 - (a.y - (a.top ?? 0))})`), M(t, R), t.intersect = function(j) {
    return N.polygon(t, y, j);
  }, e;
}
m$1(js, "taggedWaveEdgedRectangle");
async function As(l, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: e, bbox: a } = await C(l, t, T(t)), h = Math.max(a.width + t.padding, (t == null ? void 0 : t.width) || 0), s = Math.max(a.height + t.padding, (t == null ? void 0 : t.height) || 0), c = -h / 2, i = -s / 2, n2 = e.insert("rect", ":first-child");
  return n2.attr("class", "text").attr("style", r).attr("rx", 0).attr("ry", 0).attr("x", c).attr("y", i).attr("width", h).attr("height", s), M(t, n2), t.intersect = function(p) {
    return N.rect(t, p);
  }, e;
}
m$1(As, "text");
var Pr = m$1((l, t, o, r, e, a) => `M${l},${t}
    a${e},${a} 0,0,1 0,${-r}
    l${o},0
    a${e},${a} 0,0,1 0,${r}
    M${o},${-r}
    a${e},${a} 0,0,0 0,${r}
    l${-o},0`, "createCylinderPathD"), Br = m$1((l, t, o, r, e, a) => [
  `M${l},${t}`,
  `M${l + o},${t}`,
  `a${e},${a} 0,0,0 0,${-r}`,
  `l${-o},0`,
  `a${e},${a} 0,0,0 0,${r}`,
  `l${o},0`
].join(" "), "createOuterCylinderPathD"), Tr = m$1((l, t, o, r, e, a) => [
  `M${l + o / 2},${-r / 2}`,
  `a${e},${a} 0,0,0 0,${r}`
].join(" "), "createInnerCylinderPathD");
async function Os(l, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: e, bbox: a, label: h, halfPadding: s } = await C(l, t, T(t)), c = t.look === "neo" ? s * 2 : s, i = a.height + c, n2 = i / 2, p = n2 / (2.5 + i / 50), f = a.width + p + c, { cssStyles: m } = t, g;
  if (t.look === "handDrawn") {
    let d = v.svg(e), y = Br(0, 0, f, i, p, n2), x = Tr(0, 0, f, i, p, n2), b = d.path(y, D(t, {})), S2 = d.path(x, D(t, {
      fill: "none"
    }));
    g = e.insert(() => S2, ":first-child"), g = e.insert(() => b, ":first-child"), g.attr("class", "basic label-container"), m && g.attr("style", m);
  } else {
    let d = Pr(0, 0, f, i, p, n2);
    g = e.insert("path", ":first-child").attr("d", d).attr("class", "basic label-container").attr("style", Je$1(m)).attr("style", r), g.attr("class", "basic label-container"), m && g.selectAll("path").attr("style", m), r && g.selectAll("path").attr("style", r);
  }
  return g.attr("label-offset-x", p), g.attr("transform", `translate(${-f / 2}, ${i / 2} )`), h.attr("transform", `translate(${-(a.width / 2) - p - (a.x - (a.left ?? 0))}, ${-(a.height / 2) - (a.y - (a.top ?? 0))})`), M(t, g), t.intersect = function(d) {
    let y = N.rect(t, d), x = y.y - (t.y ?? 0);
    if (n2 != 0 && (Math.abs(x) < (t.height ?? 0) / 2 || Math.abs(x) == (t.height ?? 0) / 2 && Math.abs(y.x - (t.x ?? 0)) > (t.width ?? 0) / 2 - p)) {
      let b = p * p * (1 - x * x / (n2 * n2));
      b != 0 && (b = Math.sqrt(Math.abs(b))), b = p - b, d.x - (t.x ?? 0) > 0 && (b = -b), y.x += b;
    }
    return y;
  }, e;
}
m$1(Os, "tiltedCylinder");
async function Ls(l, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: e, bbox: a } = await C(l, t, T(t)), h = a.width + t.padding, s = a.height + t.padding, c = [
    {
      x: -3 * s / 6,
      y: 0
    },
    {
      x: h + 3 * s / 6,
      y: 0
    },
    {
      x: h,
      y: -s
    },
    {
      x: 0,
      y: -s
    }
  ], i, { cssStyles: n2 } = t;
  if (t.look === "handDrawn") {
    let p = v.svg(e), f = D(t, {}), m = V(c), g = p.path(m, f);
    i = e.insert(() => g, ":first-child").attr("transform", `translate(${-h / 2}, ${s / 2})`), n2 && i.attr("style", n2);
  } else i = K(e, h, s, c);
  return r && i.attr("style", r), t.width = h, t.height = s, M(t, i), t.intersect = function(p) {
    return N.polygon(t, c, p);
  }, e;
}
m$1(Ls, "trapezoid");
async function Hs(l, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: e, bbox: a } = await C(l, t, T(t)), h = 60, s = 20, c = Math.max(h, a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), i = Math.max(s, a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), { cssStyles: n2 } = t, p = v.svg(e), f = D(t, {});
  t.look !== "handDrawn" && (f.roughness = 0, f.fillStyle = "solid");
  let m = [
    {
      x: -c / 2 * 0.8,
      y: -i / 2
    },
    {
      x: c / 2 * 0.8,
      y: -i / 2
    },
    {
      x: c / 2,
      y: -i / 2 * 0.6
    },
    {
      x: c / 2,
      y: i / 2
    },
    {
      x: -c / 2,
      y: i / 2
    },
    {
      x: -c / 2,
      y: -i / 2 * 0.6
    }
  ], g = V(m), d = p.path(g, f), y = e.insert(() => d, ":first-child");
  return y.attr("class", "basic label-container"), n2 && t.look !== "handDrawn" && y.selectChildren("path").attr("style", n2), r && t.look !== "handDrawn" && y.selectChildren("path").attr("style", r), M(t, y), t.intersect = function(x) {
    return N.polygon(t, m, x);
  }, e;
}
m$1(Hs, "trapezoidalPentagon");
async function Ws(l, t) {
  var _a2;
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: e, bbox: a, label: h } = await C(l, t, T(t)), s = mf((_a2 = Hl().flowchart) == null ? void 0 : _a2.htmlLabels), c = a.width + (t.padding ?? 0), i = c + a.height, n2 = c + a.height, p = [
    {
      x: 0,
      y: 0
    },
    {
      x: n2,
      y: 0
    },
    {
      x: n2 / 2,
      y: -i
    }
  ], { cssStyles: f } = t, m = v.svg(e), g = D(t, {});
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  let d = V(p), y = m.path(d, g), x = e.insert(() => y, ":first-child").attr("transform", `translate(${-i / 2}, ${i / 2})`);
  return f && t.look !== "handDrawn" && x.selectChildren("path").attr("style", f), r && t.look !== "handDrawn" && x.selectChildren("path").attr("style", r), t.width = c, t.height = i, M(t, x), h.attr("transform", `translate(${-a.width / 2 - (a.x - (a.left ?? 0))}, ${i / 2 - (a.height + (t.padding ?? 0) / (s ? 2 : 1) - (a.y - (a.top ?? 0)))})`), t.intersect = function(b) {
    return tt$1.info("Triangle intersect", t, p, b), N.polygon(t, p, b);
  }, e;
}
m$1(Ws, "triangle");
async function Vs(l, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: e, bbox: a, label: h } = await C(l, t, T(t)), s = Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), c = Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), i = c / 8, n2 = c + i, { cssStyles: p } = t, m = 70 - s, g = m > 0 ? m / 2 : 0, d = v.svg(e), y = D(t, {});
  t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
  let x = [
    {
      x: -s / 2 - g,
      y: n2 / 2
    },
    ...at(-s / 2 - g, n2 / 2, s / 2 + g, n2 / 2, i, 0.8),
    {
      x: s / 2 + g,
      y: -n2 / 2
    },
    {
      x: -s / 2 - g,
      y: -n2 / 2
    }
  ], b = V(x), S2 = d.path(b, y), $ = e.insert(() => S2, ":first-child");
  return $.attr("class", "basic label-container"), p && t.look !== "handDrawn" && $.selectAll("path").attr("style", p), r && t.look !== "handDrawn" && $.selectAll("path").attr("style", r), $.attr("transform", `translate(0,${-i / 2})`), h.attr("transform", `translate(${-s / 2 + (t.padding ?? 0) - (a.x - (a.left ?? 0))},${-c / 2 + (t.padding ?? 0) - i - (a.y - (a.top ?? 0))})`), M(t, $), t.intersect = function(w) {
    return N.polygon(t, x, w);
  }, e;
}
m$1(Vs, "waveEdgedRectangle");
async function Is(l, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: e, bbox: a } = await C(l, t, T(t)), h = 100, s = 50, c = Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), i = Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), n2 = c / i, p = c, f = i;
  p > f * n2 ? f = p / n2 : p = f * n2, p = Math.max(p, h), f = Math.max(f, s);
  let m = Math.min(f * 0.2, f / 4), g = f + m * 2, { cssStyles: d } = t, y = v.svg(e), x = D(t, {});
  t.look !== "handDrawn" && (x.roughness = 0, x.fillStyle = "solid");
  let b = [
    {
      x: -p / 2,
      y: g / 2
    },
    ...at(-p / 2, g / 2, p / 2, g / 2, m, 1),
    {
      x: p / 2,
      y: -g / 2
    },
    ...at(p / 2, -g / 2, -p / 2, -g / 2, m, -1)
  ], S2 = V(b), $ = y.path(S2, x), w = e.insert(() => $, ":first-child");
  return w.attr("class", "basic label-container"), d && t.look !== "handDrawn" && w.selectAll("path").attr("style", d), r && t.look !== "handDrawn" && w.selectAll("path").attr("style", r), M(t, w), t.intersect = function(P) {
    return N.polygon(t, b, P);
  }, e;
}
m$1(Is, "waveRectangle");
async function Fs(l, t) {
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let { shapeSvg: e, bbox: a, label: h } = await C(l, t, T(t)), s = Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), c = Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), i = 5, n2 = -s / 2, p = -c / 2, { cssStyles: f } = t, m = v.svg(e), g = D(t, {}), d = [
    {
      x: n2 - i,
      y: p - i
    },
    {
      x: n2 - i,
      y: p + c
    },
    {
      x: n2 + s,
      y: p + c
    },
    {
      x: n2 + s,
      y: p - i
    }
  ], y = `M${n2 - i},${p - i} L${n2 + s},${p - i} L${n2 + s},${p + c} L${n2 - i},${p + c} L${n2 - i},${p - i}
                M${n2 - i},${p} L${n2 + s},${p}
                M${n2},${p - i} L${n2},${p + c}`;
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  let x = m.path(y, g), b = e.insert(() => x, ":first-child");
  return b.attr("transform", `translate(${i / 2}, ${i / 2})`), b.attr("class", "basic label-container"), f && t.look !== "handDrawn" && b.selectAll("path").attr("style", f), r && t.look !== "handDrawn" && b.selectAll("path").attr("style", r), h.attr("transform", `translate(${-(a.width / 2) + i / 2 - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + i / 2 - (a.y - (a.top ?? 0))})`), M(t, b), t.intersect = function(S2) {
    return N.polygon(t, d, S2);
  }, e;
}
m$1(Fs, "windowPane");
async function me(l, t) {
  var _a2, _b2, _c2;
  let o = t;
  if (o.alias && (t.label = o.alias), t.look === "handDrawn") {
    let { themeVariables: q } = Er(), { background: Q } = q, it = {
      ...t,
      id: t.id + "-background",
      look: "default",
      cssStyles: [
        "stroke: none",
        `fill: ${Q}`
      ]
    };
    await me(l, it);
  }
  let r = Er();
  t.useHtmlLabels = r.htmlLabels;
  let e = ((_a2 = r.er) == null ? void 0 : _a2.diagramPadding) ?? 10, a = ((_b2 = r.er) == null ? void 0 : _b2.entityPadding) ?? 6, { cssStyles: h } = t, { labelStyles: s } = k(t);
  if (o.attributes.length === 0 && t.label) {
    let q = {
      rx: 0,
      ry: 0,
      labelPaddingX: e,
      labelPaddingY: e * 1.5
    };
    M$1(t.label, r) + q.labelPaddingX * 2 < r.er.minEntityWidth && (t.width = r.er.minEntityWidth);
    let Q = await ct(l, t, q);
    if (!mf(r.htmlLabels)) {
      let it = Q.select("text"), rt = (_c2 = it.node()) == null ? void 0 : _c2.getBBox();
      it.attr("transform", `translate(${-rt.width / 2}, 0)`);
    }
    return Q;
  }
  r.htmlLabels || (e *= 1.25, a *= 1.25);
  let c = T(t);
  c || (c = "node default");
  let i = l.insert("g").attr("class", c).attr("id", t.domId || t.id), n2 = await Pt(i, t.label ?? "", r, 0, 0, [
    "name"
  ], s);
  n2.height += a;
  let p = 0, f = [], m = 0, g = 0, d = 0, y = 0, x = true, b = true;
  for (let q of o.attributes) {
    let Q = await Pt(i, q.type, r, 0, p, [
      "attribute-type"
    ], s);
    m = Math.max(m, Q.width + e);
    let it = await Pt(i, q.name, r, 0, p, [
      "attribute-name"
    ], s);
    g = Math.max(g, it.width + e);
    let rt = await Pt(i, q.keys.join(), r, 0, p, [
      "attribute-keys"
    ], s);
    d = Math.max(d, rt.width + e);
    let wt = await Pt(i, q.comment, r, 0, p, [
      "attribute-comment"
    ], s);
    y = Math.max(y, wt.width + e), p += Math.max(Q.height, it.height, rt.height, wt.height) + a, f.push(p);
  }
  f.pop();
  let S2 = 4;
  d <= e && (x = false, d = 0, S2--), y <= e && (b = false, y = 0, S2--);
  let $ = i.node().getBBox();
  if (n2.width + e * 2 - (m + g + d + y) > 0) {
    let q = n2.width + e * 2 - (m + g + d + y);
    m += q / S2, g += q / S2, d > 0 && (d += q / S2), y > 0 && (y += q / S2);
  }
  let w = m + g + d + y, P = v.svg(i), B = D(t, {});
  t.look !== "handDrawn" && (B.roughness = 0, B.fillStyle = "solid");
  let R = Math.max($.width + e * 2, (t == null ? void 0 : t.width) || 0, w), j = Math.max($.height + (f[0] || p) + a, (t == null ? void 0 : t.height) || 0), G = -R / 2, E = -j / 2;
  i.selectAll("g:not(:first-child)").each((q, Q, it) => {
    let rt = ih(it[Q]), wt = rt.attr("transform"), Nt = 0, ge = 0;
    if (wt) {
      let zt = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(wt);
      zt && (Nt = parseFloat(zt[1]), ge = parseFloat(zt[2]), rt.attr("class").includes("attribute-name") ? Nt += m : rt.attr("class").includes("attribute-keys") ? Nt += m + g : rt.attr("class").includes("attribute-comment") && (Nt += m + g + d));
    }
    rt.attr("transform", `translate(${G + e / 2 + Nt}, ${ge + E + n2.height + a / 2})`);
  }), i.select(".name").attr("transform", "translate(" + -n2.width / 2 + ", " + (E + a / 2) + ")");
  let I = P.rectangle(G, E, R, j, B), A = i.insert(() => I, ":first-child").attr("style", h.join("")), { themeVariables: L } = Er(), { rowEven: H, rowOdd: O, nodeBorder: F } = L;
  f.push(0);
  for (let [q, Q] of f.entries()) {
    if (q === 0 && f.length > 1) continue;
    let it = q % 2 === 0 && Q !== 0, rt = P.rectangle(G, n2.height + E + Q, R, n2.height, {
      ...B,
      fill: it ? H : O,
      stroke: F
    });
    i.insert(() => rt, "g.label").attr("style", h.join("")).attr("class", `row-rect-${q % 2 === 0 ? "even" : "odd"}`);
  }
  let W = P.line(G, n2.height + E, R + G, n2.height + E, B);
  i.insert(() => W).attr("class", "divider"), W = P.line(m + G, n2.height + E, m + G, j + E, B), i.insert(() => W).attr("class", "divider"), x && (W = P.line(m + g + G, n2.height + E, m + g + G, j + E, B), i.insert(() => W).attr("class", "divider")), b && (W = P.line(m + g + d + G, n2.height + E, m + g + d + G, j + E, B), i.insert(() => W).attr("class", "divider"));
  for (let q of f) W = P.line(G, n2.height + E + q, R + G, n2.height + E + q, B), i.insert(() => W).attr("class", "divider");
  return M(t, A), t.intersect = function(q) {
    return N.rect(t, q);
  }, i;
}
m$1(me, "erBox");
async function Pt(l, t, o) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, e = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : [], h = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : "";
  let s = l.insert("g").attr("class", `label ${a.join(" ")}`).attr("transform", `translate(${r}, ${e})`).attr("style", h);
  t !== mC(t) && (t = mC(t), t = t.replaceAll("<", "&lt;").replaceAll(">", "&gt;"));
  let c = s.node().appendChild(await Qt$1(s, t, {
    width: M$1(t, o) + 100,
    style: h,
    useHtmlLabels: o.htmlLabels
  }, o));
  if (t.includes("&lt;") || t.includes("&gt;")) {
    let n2 = c.children[0];
    for (n2.textContent = n2.textContent.replaceAll("&lt;", "<").replaceAll("&gt;", ">"); n2.childNodes[0]; ) n2 = n2.childNodes[0], n2.textContent = n2.textContent.replaceAll("&lt;", "<").replaceAll("&gt;", ">");
  }
  let i = c.getBBox();
  if (mf(o.htmlLabels)) {
    let n2 = c.children[0];
    n2.style.textAlign = "start";
    let p = ih(c);
    i = n2.getBoundingClientRect(), p.attr("width", i.width), p.attr("height", i.height);
  }
  return i;
}
m$1(Pt, "addText");
async function _s(l, t, o, r) {
  let e = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : o.class.padding ?? 12;
  let a = r ? 0 : 3, h = l.insert("g").attr("class", T(t)).attr("id", t.domId || t.id), s = null, c = null, i = null, n2 = null, p = 0, f = 0, m = 0;
  if (s = h.insert("g").attr("class", "annotation-group text"), t.annotations.length > 0) {
    let b = t.annotations[0];
    await Ft(s, {
      text: `«${b}»`
    }, 0), p = s.node().getBBox().height;
  }
  c = h.insert("g").attr("class", "label-group text"), await Ft(c, t, 0, [
    "font-weight: bolder"
  ]);
  let g = c.node().getBBox();
  f = g.height, i = h.insert("g").attr("class", "members-group text");
  let d = 0;
  for (let b of t.members) {
    let S2 = await Ft(i, b, d, [
      b.parseClassifier()
    ]);
    d += S2 + a;
  }
  m = i.node().getBBox().height, m <= 0 && (m = e / 2), n2 = h.insert("g").attr("class", "methods-group text");
  let y = 0;
  for (let b of t.methods) {
    let S2 = await Ft(n2, b, y, [
      b.parseClassifier()
    ]);
    y += S2 + a;
  }
  let x = h.node().getBBox();
  if (s !== null) {
    let b = s.node().getBBox();
    s.attr("transform", `translate(${-b.width / 2})`);
  }
  return c.attr("transform", `translate(${-g.width / 2}, ${p})`), x = h.node().getBBox(), i.attr("transform", `translate(0, ${p + f + e * 2})`), x = h.node().getBBox(), n2.attr("transform", `translate(0, ${p + f + (m ? m + e * 4 : e * 2)})`), x = h.node().getBBox(), {
    shapeSvg: h,
    bbox: x
  };
}
m$1(_s, "textHelper");
async function Ft(l, t, o) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [];
  let e = l.insert("g").attr("class", "label").attr("style", r.join("; ")), a = Er(), h = "useHtmlLabels" in t ? t.useHtmlLabels : mf(a.htmlLabels) ?? true, s = "";
  "text" in t ? s = t.text : s = t.label, !h && s.startsWith("\\") && (s = s.substring(1)), Rl(s) && (h = true);
  let c = await Qt$1(e, Ef(Xe$1(s)), {
    width: M$1(s, a) + 50,
    classes: "markdown-node-label",
    useHtmlLabels: h
  }, a), i, n2 = 1;
  if (h) {
    let p = c.children[0], f = ih(c);
    n2 = p.innerHTML.split("<br>").length, p.innerHTML.includes("</math>") && (n2 += p.innerHTML.split("<mrow>").length - 1);
    let m = p.getElementsByTagName("img");
    if (m) {
      let g = s.replace(/<img[^>]*>/g, "").trim() === "";
      await Promise.all([
        ...m
      ].map((d) => new Promise((y) => {
        function x() {
          var _a2;
          if (d.style.display = "flex", d.style.flexDirection = "column", g) {
            let b = ((_a2 = a.fontSize) == null ? void 0 : _a2.toString()) ?? window.getComputedStyle(document.body).fontSize, $ = parseInt(b, 10) * 5 + "px";
            d.style.minWidth = $, d.style.maxWidth = $;
          } else d.style.width = "100%";
          y(d);
        }
        m$1(x, "setupImage"), setTimeout(() => {
          d.complete && x();
        }), d.addEventListener("error", x), d.addEventListener("load", x);
      })));
    }
    i = p.getBoundingClientRect(), f.attr("width", i.width), f.attr("height", i.height);
  } else {
    r.includes("font-weight: bolder") && ih(c).selectAll("tspan").attr("font-weight", ""), n2 = c.children.length;
    let p = c.children[0];
    (c.textContent === "" || c.textContent.includes("&gt")) && (p.textContent = s[0] + s.substring(1).replaceAll("&gt;", ">").replaceAll("&lt;", "<").trim(), s[1] === " " && (p.textContent = p.textContent[0] + " " + p.textContent.substring(1))), p.textContent === "undefined" && (p.textContent = ""), i = c.getBBox();
  }
  return e.attr("transform", "translate(0," + (-i.height / (2 * n2) + o) + ")"), i.height;
}
m$1(Ft, "addText");
async function zs(l, t) {
  var _a2, _b2;
  let o = Hl(), r = o.class.padding ?? 12, e = r, a = t.useHtmlLabels ?? mf(o.htmlLabels) ?? true, h = t;
  h.annotations = h.annotations ?? [], h.members = h.members ?? [], h.methods = h.methods ?? [];
  let { shapeSvg: s, bbox: c } = await _s(l, t, o, a, e), { labelStyles: i, nodeStyles: n2 } = k(t);
  t.labelStyle = i, t.cssStyles = h.styles || "";
  let p = ((_a2 = h.styles) == null ? void 0 : _a2.join(";")) || n2 || "";
  t.cssStyles || (t.cssStyles = p.replaceAll("!important", "").split(";"));
  let f = h.members.length === 0 && h.methods.length === 0 && !((_b2 = o.class) == null ? void 0 : _b2.hideEmptyMembersBox), m = v.svg(s), g = D(t, {});
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  let d = c.width, y = c.height;
  h.members.length === 0 && h.methods.length === 0 ? y += e : h.members.length > 0 && h.methods.length === 0 && (y += e * 2);
  let x = -d / 2, b = -y / 2, S2 = m.rectangle(x - r, b - r - (f ? r : h.members.length === 0 && h.methods.length === 0 ? -r / 2 : 0), d + 2 * r, y + 2 * r + (f ? r * 2 : h.members.length === 0 && h.methods.length === 0 ? -r : 0), g), $ = s.insert(() => S2, ":first-child");
  $.attr("class", "basic label-container");
  let w = $.node().getBBox();
  s.selectAll(".text").each((j, G, E) => {
    var _a3;
    let I = ih(E[G]), A = I.attr("transform"), L = 0;
    if (A) {
      let W = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(A);
      W && (L = parseFloat(W[2]));
    }
    let H = L + b + r - (f ? r : h.members.length === 0 && h.methods.length === 0 ? -r / 2 : 0);
    a || (H -= 4);
    let O = x;
    (I.attr("class").includes("label-group") || I.attr("class").includes("annotation-group")) && (O = -((_a3 = I.node()) == null ? void 0 : _a3.getBBox().width) / 2 || 0, s.selectAll("text").each(function(F, W, q) {
      window.getComputedStyle(q[W]).textAnchor === "middle" && (O = 0);
    })), I.attr("transform", `translate(${O}, ${H})`);
  });
  let P = s.select(".annotation-group").node().getBBox().height - (f ? r / 2 : 0) || 0, B = s.select(".label-group").node().getBBox().height - (f ? r / 2 : 0) || 0, R = s.select(".members-group").node().getBBox().height - (f ? r / 2 : 0) || 0;
  if (h.members.length > 0 || h.methods.length > 0 || f) {
    let j = m.line(w.x, P + B + b + r, w.x + w.width, P + B + b + r, g);
    s.insert(() => j).attr("class", "divider").attr("style", p);
  }
  if (f || h.members.length > 0 || h.methods.length > 0) {
    let j = m.line(w.x, P + B + R + b + e * 2 + r, w.x + w.width, P + B + R + b + r + e * 2, g);
    s.insert(() => j).attr("class", "divider").attr("style", p);
  }
  if (h.look !== "handDrawn" && s.selectAll("path").attr("style", p), $.select(":nth-child(2)").attr("style", p), s.selectAll(".divider").select("path").attr("style", p), t.labelStyle ? s.selectAll("span").attr("style", t.labelStyle) : s.selectAll("span").attr("style", p), !a) {
    let j = RegExp(/color\s*:\s*([^;]*)/), G = j.exec(p);
    if (G) {
      let E = G[0].replace("color", "fill");
      s.selectAll("tspan").attr("style", E);
    } else if (i) {
      let E = j.exec(i);
      if (E) {
        let I = E[0].replace("color", "fill");
        s.selectAll("tspan").attr("style", I);
      }
    }
  }
  return M(t, $), t.intersect = function(j) {
    return N.rect(t, j);
  }, s;
}
m$1(zs, "classBox");
async function qs(l, t) {
  var _a2, _b2;
  let { labelStyles: o, nodeStyles: r } = k(t);
  t.labelStyle = o;
  let e = t, a = t, h = 20, s = 20, c = "verifyMethod" in t, i = T(t), n2 = l.insert("g").attr("class", i).attr("id", t.domId ?? t.id), p;
  c ? p = await ht(n2, `&lt;&lt;${e.type}&gt;&gt;`, 0, t.labelStyle) : p = await ht(n2, "&lt;&lt;Element&gt;&gt;", 0, t.labelStyle);
  let f = p, m = await ht(n2, e.name, f, t.labelStyle + "; font-weight: bold;");
  if (f += m + s, c) {
    let P = await ht(n2, `${e.requirementId ? `Id: ${e.requirementId}` : ""}`, f, t.labelStyle);
    f += P;
    let B = await ht(n2, `${e.text ? `Text: ${e.text}` : ""}`, f, t.labelStyle);
    f += B;
    let R = await ht(n2, `${e.risk ? `Risk: ${e.risk}` : ""}`, f, t.labelStyle);
    f += R, await ht(n2, `${e.verifyMethod ? `Verification: ${e.verifyMethod}` : ""}`, f, t.labelStyle);
  } else {
    let P = await ht(n2, `${a.type ? `Type: ${a.type}` : ""}`, f, t.labelStyle);
    f += P, await ht(n2, `${a.docRef ? `Doc Ref: ${a.docRef}` : ""}`, f, t.labelStyle);
  }
  let g = (((_a2 = n2.node()) == null ? void 0 : _a2.getBBox().width) ?? 200) + h, d = (((_b2 = n2.node()) == null ? void 0 : _b2.getBBox().height) ?? 200) + h, y = -g / 2, x = -d / 2, b = v.svg(n2), S2 = D(t, {});
  t.look !== "handDrawn" && (S2.roughness = 0, S2.fillStyle = "solid");
  let $ = b.rectangle(y, x, g, d, S2), w = n2.insert(() => $, ":first-child");
  if (w.attr("class", "basic label-container").attr("style", r), n2.selectAll(".label").each((P, B, R) => {
    let j = ih(R[B]), G = j.attr("transform"), E = 0, I = 0;
    if (G) {
      let O = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(G);
      O && (E = parseFloat(O[1]), I = parseFloat(O[2]));
    }
    let A = I - d / 2, L = y + h / 2;
    (B === 0 || B === 1) && (L = E), j.attr("transform", `translate(${L}, ${A + h})`);
  }), f > p + m + s) {
    let P = b.line(y, x + p + m + s, y + g, x + p + m + s, S2);
    n2.insert(() => P).attr("style", r);
  }
  return M(t, w), t.intersect = function(P) {
    return N.rect(t, P);
  }, n2;
}
m$1(qs, "requirementBox");
async function ht(l, t, o) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "";
  if (t === "") return 0;
  let e = l.insert("g").attr("class", "label").attr("style", r), a = Hl(), h = a.htmlLabels ?? true, s = await Qt$1(e, Ef(Xe$1(t)), {
    width: M$1(t, a) + 50,
    classes: "markdown-node-label",
    useHtmlLabels: h,
    style: r
  }, a), c;
  if (h) {
    let i = s.children[0], n2 = ih(s);
    c = i.getBoundingClientRect(), n2.attr("width", c.width), n2.attr("height", c.height);
  } else {
    let i = s.children[0];
    for (let n2 of i.children) n2.textContent = n2.textContent.replaceAll("&gt;", ">").replaceAll("&lt;", "<"), r && n2.setAttribute("style", r);
    c = s.getBBox(), c.height += 6;
  }
  return e.attr("transform", `translate(${-c.width / 2},${-c.height / 2 + o})`), c.height;
}
m$1(ht, "addText");
var Cr = m$1((l) => {
  switch (l) {
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
async function Xs(l, t, param) {
  var _a2, _b2;
  let { config: o } = param;
  let { labelStyles: r, nodeStyles: e } = k(t);
  t.labelStyle = r || "";
  let a = 10, h = t.width;
  t.width = (t.width ?? 200) - 10;
  let { shapeSvg: s, bbox: c, label: i } = await C(l, t, T(t)), n2 = t.padding || 10, p = "", f;
  "ticket" in t && t.ticket && ((_a2 = o == null ? void 0 : o.kanban) == null ? void 0 : _a2.ticketBaseUrl) && (p = (_b2 = o == null ? void 0 : o.kanban) == null ? void 0 : _b2.ticketBaseUrl.replace("#TICKET#", t.ticket), f = s.insert("svg:a", ":first-child").attr("class", "kanban-ticket-link").attr("xlink:href", p).attr("target", "_blank"));
  let m = {
    useHtmlLabels: t.useHtmlLabels,
    labelStyle: t.labelStyle || "",
    width: t.width,
    img: t.img,
    padding: t.padding || 8,
    centerLabel: false
  }, g, d;
  f ? { label: g, bbox: d } = await Ct(f, "ticket" in t && t.ticket || "", m) : { label: g, bbox: d } = await Ct(s, "ticket" in t && t.ticket || "", m);
  let { label: y, bbox: x } = await Ct(s, "assigned" in t && t.assigned || "", m);
  t.width = h;
  let b = 10, S2 = (t == null ? void 0 : t.width) || 0, $ = Math.max(d.height, x.height) / 2, w = Math.max(c.height + b * 2, (t == null ? void 0 : t.height) || 0) + $, P = -S2 / 2, B = -w / 2;
  i.attr("transform", "translate(" + (n2 - S2 / 2) + ", " + (-$ - c.height / 2) + ")"), g.attr("transform", "translate(" + (n2 - S2 / 2) + ", " + (-$ + c.height / 2) + ")"), y.attr("transform", "translate(" + (n2 + S2 / 2 - x.width - 2 * a) + ", " + (-$ + c.height / 2) + ")");
  let R, { rx: j, ry: G } = t, { cssStyles: E } = t;
  if (t.look === "handDrawn") {
    let I = v.svg(s), A = D(t, {}), L = j || G ? I.path(J(P, B, S2, w, j || 0), A) : I.rectangle(P, B, S2, w, A);
    R = s.insert(() => L, ":first-child"), R.attr("class", "basic label-container").attr("style", E || null);
  } else {
    R = s.insert("rect", ":first-child"), R.attr("class", "basic label-container __APA__").attr("style", e).attr("rx", j ?? 5).attr("ry", G ?? 5).attr("x", P).attr("y", B).attr("width", S2).attr("height", w);
    let I = "priority" in t && t.priority;
    if (I) {
      let A = s.append("line"), L = P + 2, H = B + Math.floor((j ?? 0) / 2), O = B + w - Math.floor((j ?? 0) / 2);
      A.attr("x1", L).attr("y1", H).attr("x2", L).attr("y2", O).attr("stroke-width", "4").attr("stroke", Cr(I));
    }
  }
  return M(t, R), t.height = w, t.intersect = function(I) {
    return N.rect(t, I);
  }, s;
}
m$1(Xs, "kanbanItem");
var Rr = [
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
    handler: Ps
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
    handler: Ms
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
    handler: Bs
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
    handler: Gs
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
    handler: Je
  },
  {
    semanticName: "Start",
    name: "Circle",
    shortName: "circle",
    description: "Starting point",
    aliases: [
      "circ"
    ],
    handler: qe
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
    handler: Ns
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
    handler: as
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
    handler: ds
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
    handler: gs
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
    handler: Ls
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
    handler: ms
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
    handler: ts
  },
  {
    semanticName: "Text Block",
    name: "Text Block",
    shortName: "text",
    description: "Text block",
    handler: As
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
    handler: _e
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
    handler: ks
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
    handler: Rs
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
    handler: Cs
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
    handler: rs
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
    handler: is
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
    handler: Ye
  },
  {
    semanticName: "Comment Right",
    name: "Curly Brace",
    shortName: "brace-r",
    description: "Adds a comment",
    handler: Ze
  },
  {
    semanticName: "Comment with braces on both sides",
    name: "Curly Braces",
    shortName: "braces",
    description: "Adds a comment",
    handler: Ue
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
    handler: us
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
    handler: Vs
  },
  {
    semanticName: "Delay",
    name: "Half-Rounded Rectangle",
    shortName: "delay",
    description: "Represents a delay",
    aliases: [
      "half-rounded-rectangle"
    ],
    handler: os
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
    handler: Os
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
    handler: ys
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
    handler: Qe
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
    handler: Ke
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
    handler: Ws
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
    handler: Fs
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
    handler: es
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
    handler: Hs
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
    handler: ss
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
    handler: $s
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
    handler: Ss
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
    handler: bs
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
    handler: Fe
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
    handler: Xe
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
    handler: js
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
    handler: Es
  },
  {
    semanticName: "Paper Tape",
    name: "Flag",
    shortName: "flag",
    description: "Paper tape",
    aliases: [
      "paper-tape"
    ],
    handler: Is
  },
  {
    semanticName: "Odd",
    name: "Odd",
    shortName: "odd",
    description: "Odd shape",
    internalAliases: [
      "rect_left_inv_arrow"
    ],
    handler: vs
  },
  {
    semanticName: "Lined Document",
    name: "Lined Document",
    shortName: "lin-doc",
    description: "Lined document",
    aliases: [
      "lined-document"
    ],
    handler: xs
  }
], Gr = m$1(() => {
  let t = [
    ...Object.entries({
      state: Ts,
      choice: ze,
      note: ws,
      rectWithTitle: Ds,
      labelRect: fs,
      iconSquare: hs,
      iconCircle: ls,
      icon: ns,
      iconRounded: cs,
      imageSquare: ps,
      anchor: Ve,
      kanbanItem: Xs,
      classBox: zs,
      erBox: me,
      requirementBox: qs
    }),
    ...Rr.flatMap((o) => [
      o.shortName,
      ..."aliases" in o ? o.aliases : [],
      ..."internalAliases" in o ? o.internalAliases : []
    ].map((e) => [
      e,
      o.handler
    ]))
  ];
  return Object.fromEntries(t);
}, "generateShapeMap"), fe = Gr();
function Qf(l) {
  return l in fe;
}
m$1(Qf, "isValidShape");
var _t = /* @__PURE__ */ new Map();
async function sg(l, t, o) {
  let r, e;
  t.shape === "rect" && (t.rx && t.ry ? t.shape = "roundedRect" : t.shape = "squareRect");
  let a = t.shape ? fe[t.shape] : void 0;
  if (!a) throw new Error(`No such shape: ${t.shape}. Please check your syntax.`);
  if (t.link) {
    let h;
    o.config.securityLevel === "sandbox" ? h = "_top" : t.linkTarget && (h = t.linkTarget || "_blank"), r = l.insert("svg:a").attr("xlink:href", t.link).attr("target", h ?? null), e = await a(r, t, o);
  } else e = await a(l, t, o), r = e;
  return t.tooltip && e.attr("title", t.tooltip), _t.set(t.id, r), t.haveCallback && r.attr("class", r.attr("class") + " clickable"), r;
}
m$1(sg, "insertNode");
var rg = m$1((l, t) => {
  _t.set(t.id, l);
}, "setNodeElem"), og = m$1(() => {
  _t.clear();
}, "clear"), ag = m$1((l) => {
  let t = _t.get(l.id);
  tt$1.trace("Transforming node", l.diff, l, "translate(" + (l.x - l.width / 2 - 5) + ", " + l.width / 2 + ")");
  let o = 8, r = l.diff || 0;
  return l.clusterNode ? t.attr("transform", "translate(" + (l.x + r - l.width / 2) + ", " + (l.y - l.height / 2 - o) + ")") : t.attr("transform", "translate(" + l.x + ", " + l.y + ")"), r;
}, "positionNode");
export {
  $t as $,
  C,
  M,
  Qf as Q,
  ag as a,
  nr as n,
  og as o,
  rg as r,
  sg as s,
  v,
  xo as x,
  yo as y
};
