import { t as tt } from "./vendor-min-mermaid~chunk-OR2G2HG5.D15VT8Rm.chunk.js";
import { m as m$1, q as q$1, n } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js";
var define_process_env_default = {};
var X = /* @__PURE__ */ n((at, Q) => {
  var b = 1e3, v = b * 60, E = v * 60, y = E * 24, he = y * 7, Ce = y * 365.25;
  Q.exports = function(e, o) {
    o = o || {};
    var t = typeof e;
    if (t === "string" && e.length > 0) return xe(e);
    if (t === "number" && isFinite(e)) return o.long ? we(e) : Ie(e);
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
  };
  function xe(e) {
    if (e = /* @__PURE__ */ String(e), !(e.length > 100)) {
      var o = /* @__PURE__ */ /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
      if (o) {
        var t = /* @__PURE__ */ parseFloat(o[1]), n2 = /* @__PURE__ */ (o[2] || "ms").toLowerCase();
        switch (n2) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return t * Ce;
          case "weeks":
          case "week":
          case "w":
            return t * he;
          case "days":
          case "day":
          case "d":
            return t * y;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return t * E;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return t * v;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return t * b;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return t;
          default:
            return;
        }
      }
    }
  }
  m$1(xe, "parse");
  function Ie(e) {
    var o = /* @__PURE__ */ Math.abs(e);
    return o >= y ? Math.round(e / y) + "d" : o >= E ? Math.round(e / E) + "h" : o >= v ? Math.round(e / v) + "m" : o >= b ? Math.round(e / b) + "s" : e + "ms";
  }
  m$1(Ie, "fmtShort");
  function we(e) {
    var o = /* @__PURE__ */ Math.abs(e);
    return o >= y ? D(e, o, y, "day") : o >= E ? D(e, o, E, "hour") : o >= v ? D(e, o, v, "minute") : o >= b ? D(e, o, b, "second") : e + " ms";
  }
  m$1(we, "fmtLong");
  function D(e, o, t, n2) {
    var r = o >= t * 1.5;
    return Math.round(e / t) + " " + n2 + (r ? "s" : "");
  }
  m$1(D, "plural");
});
var ee = /* @__PURE__ */ n((lt, Y) => {
  function Fe(e) {
    t.debug = t, t.default = t, t.coerce = h, t.disable = c, t.enable = r, t.enabled = f, t.humanize = /* @__PURE__ */ X(), t.destroy = C, Object.keys(e).forEach((s) => {
      t[s] = e[s];
    }), t.names = [], t.skips = [], t.formatters = {};
    function o(s) {
      let a = 0;
      for (let p = 0; p < s.length; p++) a = (a << 5) - a + s.charCodeAt(p), a |= 0;
      return t.colors[Math.abs(a) % t.colors.length];
    }
    m$1(o, "selectColor"), t.selectColor = o;
    function t(s) {
      let a, p = null, w, T;
      function m() {
        for (var _len = arguments.length, u = new Array(_len), _key = 0; _key < _len; _key++) {
          u[_key] = arguments[_key];
        }
        if (!m.enabled) return;
        let I = m, F = /* @__PURE__ */ Number(/* @__PURE__ */ new Date()), x = F - (a || F);
        I.diff = x, I.prev = a, I.curr = F, a = F, u[0] = /* @__PURE__ */ t.coerce(u[0]), typeof u[0] != "string" && u.unshift("%O");
        let d = 0;
        u[0] = /* @__PURE__ */ u[0].replace(/%([a-zA-Z%])/g, (M, re) => {
          if (M === "%%") return "%";
          d++;
          let H = t.formatters[re];
          if (typeof H == "function") {
            let ne = u[d];
            M = /* @__PURE__ */ H.call(I, ne), u.splice(d, 1), d--;
          }
          return M;
        }), t.formatArgs.call(I, u), (I.log || t.log).apply(I, u);
      }
      return m$1(m, "debug"), m.namespace = s, m.useColors = /* @__PURE__ */ t.useColors(), m.color = /* @__PURE__ */ t.selectColor(s), m.extend = n2, m.destroy = t.destroy, Object.defineProperty(m, "enabled", {
        enumerable: true,
        configurable: false,
        get: /* @__PURE__ */ m$1(() => p !== null ? p : (w !== t.namespaces && (w = t.namespaces, T = /* @__PURE__ */ t.enabled(s)), T), "get"),
        set: /* @__PURE__ */ m$1((u) => {
          p = u;
        }, "set")
      }), typeof t.init == "function" && t.init(m), m;
    }
    m$1(t, "createDebug");
    function n2(s, a) {
      let p = /* @__PURE__ */ t(this.namespace + (typeof a > "u" ? ":" : a) + s);
      return p.log = this.log, p;
    }
    m$1(n2, "extend");
    function r(s) {
      t.save(s), t.namespaces = s, t.names = [], t.skips = [];
      let a, p = /* @__PURE__ */ (typeof s == "string" ? s : "").split(/[\s,]+/), w = p.length;
      for (a = 0; a < w; a++) p[a] && (s = /* @__PURE__ */ p[a].replace(/\*/g, ".*?"), s[0] === "-" ? t.skips.push(new RegExp("^" + s.slice(1) + "$")) : t.names.push(new RegExp("^" + s + "$")));
    }
    m$1(r, "enable");
    function c() {
      let s = /* @__PURE__ */ [
        .../* @__PURE__ */ t.names.map(l),
        .../* @__PURE__ */ t.skips.map(l).map((a) => "-" + a)
      ].join(",");
      return t.enable(""), s;
    }
    m$1(c, "disable");
    function f(s) {
      if (s[s.length - 1] === "*") return true;
      let a, p;
      for (a = 0, p = t.skips.length; a < p; a++) if (t.skips[a].test(s)) return false;
      for (a = 0, p = t.names.length; a < p; a++) if (t.names[a].test(s)) return true;
      return false;
    }
    m$1(f, "enabled");
    function l(s) {
      return s.toString().substring(2, s.toString().length - 2).replace(/\.\*\?$/, "*");
    }
    m$1(l, "toNamespace");
    function h(s) {
      return s instanceof Error ? s.stack || s.message : s;
    }
    m$1(h, "coerce");
    function C() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return m$1(C, "destroy"), t.enable(/* @__PURE__ */ t.load()), t;
  }
  m$1(Fe, "setup");
  Y.exports = Fe;
});
var te = /* @__PURE__ */ n((g, A) => {
  g.formatArgs = Se;
  g.save = be;
  g.load = ve;
  g.useColors = ye;
  g.storage = /* @__PURE__ */ Ee();
  g.destroy = /* @__PURE__ */ (() => {
    let e = false;
    return () => {
      e || (e = true, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
    };
  })();
  g.colors = [
    "#0000CC",
    "#0000FF",
    "#0033CC",
    "#0033FF",
    "#0066CC",
    "#0066FF",
    "#0099CC",
    "#0099FF",
    "#00CC00",
    "#00CC33",
    "#00CC66",
    "#00CC99",
    "#00CCCC",
    "#00CCFF",
    "#3300CC",
    "#3300FF",
    "#3333CC",
    "#3333FF",
    "#3366CC",
    "#3366FF",
    "#3399CC",
    "#3399FF",
    "#33CC00",
    "#33CC33",
    "#33CC66",
    "#33CC99",
    "#33CCCC",
    "#33CCFF",
    "#6600CC",
    "#6600FF",
    "#6633CC",
    "#6633FF",
    "#66CC00",
    "#66CC33",
    "#9900CC",
    "#9900FF",
    "#9933CC",
    "#9933FF",
    "#99CC00",
    "#99CC33",
    "#CC0000",
    "#CC0033",
    "#CC0066",
    "#CC0099",
    "#CC00CC",
    "#CC00FF",
    "#CC3300",
    "#CC3333",
    "#CC3366",
    "#CC3399",
    "#CC33CC",
    "#CC33FF",
    "#CC6600",
    "#CC6633",
    "#CC9900",
    "#CC9933",
    "#CCCC00",
    "#CCCC33",
    "#FF0000",
    "#FF0033",
    "#FF0066",
    "#FF0099",
    "#FF00CC",
    "#FF00FF",
    "#FF3300",
    "#FF3333",
    "#FF3366",
    "#FF3399",
    "#FF33CC",
    "#FF33FF",
    "#FF6600",
    "#FF6633",
    "#FF9900",
    "#FF9933",
    "#FFCC00",
    "#FFCC33"
  ];
  function ye() {
    if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) return true;
    if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return false;
    let e;
    return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && (e = /* @__PURE__ */ navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(e[1], 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  m$1(ye, "useColors");
  function Se(e) {
    if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + A.exports.humanize(this.diff), !this.useColors) return;
    let o = "color: " + this.color;
    e.splice(1, 0, o, "color: inherit");
    let t = 0, n2 = 0;
    e[0].replace(/%[a-zA-Z%]/g, (r) => {
      r !== "%%" && (t++, r === "%c" && (n2 = t));
    }), e.splice(n2, 0, o);
  }
  m$1(Se, "formatArgs");
  g.log = console.debug || console.log || (() => {
  });
  function be(e) {
    try {
      e ? g.storage.setItem("debug", e) : g.storage.removeItem("debug");
    } catch {
    }
  }
  m$1(be, "save");
  function ve() {
    let e;
    try {
      e = /* @__PURE__ */ g.storage.getItem("debug");
    } catch {
    }
    return !e && typeof process < "u" && "env" in process && (e = define_process_env_default.DEBUG), e;
  }
  m$1(ve, "load");
  function Ee() {
    try {
      return localStorage;
    } catch {
    }
  }
  m$1(Ee, "localstorage");
  A.exports = /* @__PURE__ */ ee()(g);
  var { formatters: Te } = A.exports;
  Te.j = function(e) {
    try {
      return JSON.stringify(e);
    } catch (o) {
      return "[UnexpectedJSONParseError]: " + o.message;
    }
  };
});
var se = /* @__PURE__ */ Object.freeze({
  left: 0,
  top: 0,
  width: 16,
  height: 16
}), S = /* @__PURE__ */ Object.freeze({
  rotate: 0,
  vFlip: false,
  hFlip: false
}), L = /* @__PURE__ */ Object.freeze({
  ...se,
  ...S
}), J = /* @__PURE__ */ Object.freeze({
  ...L,
  body: "",
  hidden: false
});
var ce = /* @__PURE__ */ Object.freeze({
  width: null,
  height: null
}), B = /* @__PURE__ */ Object.freeze({
  ...ce,
  ...S
});
var O = /^[a-z0-9]+(-[a-z0-9]+)*$/, V = /* @__PURE__ */ m$1(function(e, o, t) {
  let n2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "";
  let r = /* @__PURE__ */ e.split(":");
  if (e.slice(0, 1) === "@") {
    if (r.length < 2 || r.length > 3) return null;
    n2 = /* @__PURE__ */ r.shift().slice(1);
  }
  if (r.length > 3 || !r.length) return null;
  if (r.length > 1) {
    let l = /* @__PURE__ */ r.pop(), h = /* @__PURE__ */ r.pop(), C = {
      provider: r.length > 0 ? r[0] : n2,
      prefix: h,
      name: l
    };
    return o && !k(C) ? null : C;
  }
  let c = r[0], f = /* @__PURE__ */ c.split("-");
  if (f.length > 1) {
    let l = {
      provider: n2,
      prefix: /* @__PURE__ */ f.shift(),
      name: /* @__PURE__ */ f.join("-")
    };
    return o && !k(l) ? null : l;
  }
  if (t && n2 === "") {
    let l = {
      provider: n2,
      prefix: "",
      name: c
    };
    return o && !k(l, t) ? null : l;
  }
  return null;
}, "stringToIcon"), k = /* @__PURE__ */ m$1((e, o) => e ? !!((e.provider === "" || e.provider.match(O)) && (o && e.prefix === "" || e.prefix.match(O)) && e.name.match(O)) : false, "validateIconName");
function K(e, o) {
  let t = {};
  !e.hFlip != !o.hFlip && (t.hFlip = true), !e.vFlip != !o.vFlip && (t.vFlip = true);
  let n2 = ((e.rotate || 0) + (o.rotate || 0)) % 4;
  return n2 && (t.rotate = n2), t;
}
m$1(K, "mergeIconTransformations");
function G(e, o) {
  let t = /* @__PURE__ */ K(e, o);
  for (let n2 in J) n2 in S ? n2 in e && !(n2 in t) && (t[n2] = S[n2]) : n2 in o ? t[n2] = o[n2] : n2 in e && (t[n2] = e[n2]);
  return t;
}
m$1(G, "mergeIconData");
function W(e, o) {
  let t = e.icons, n2 = e.aliases || /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  function c(f) {
    if (t[f]) return r[f] = [];
    if (!(f in r)) {
      r[f] = null;
      let l = n2[f] && n2[f].parent, h = l && c(l);
      h && (r[f] = /* @__PURE__ */ [
        l
      ].concat(h));
    }
    return r[f];
  }
  return m$1(c, "resolve"), (o || Object.keys(t).concat(/* @__PURE__ */ Object.keys(n2))).forEach(c), r;
}
m$1(W, "getIconsTree");
function Z(e, o, t) {
  let n2 = e.icons, r = e.aliases || /* @__PURE__ */ Object.create(null), c = {};
  function f(l) {
    c = /* @__PURE__ */ G(n2[l] || r[l], c);
  }
  return m$1(f, "parse"), f(o), t.forEach(f), G(e, c);
}
m$1(Z, "internalGetIconData");
function z(e, o) {
  if (e.icons[o]) return Z(e, o, []);
  let t = W(e, [
    o
  ])[o];
  return t ? Z(e, o, t) : null;
}
m$1(z, "getIconData");
var ae = /(-?[0-9.]*[0-9]+[0-9.]*)/g, fe = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function N(e, o, t) {
  if (o === 1) return e;
  if (t = t || 100, typeof e == "number") return Math.ceil(e * o * t) / t;
  if (typeof e != "string") return e;
  let n2 = /* @__PURE__ */ e.split(ae);
  if (n2 === null || !n2.length) return e;
  let r = [], c = /* @__PURE__ */ n2.shift(), f = /* @__PURE__ */ fe.test(c);
  for (; ; ) {
    if (f) {
      let l = /* @__PURE__ */ parseFloat(c);
      isNaN(l) ? r.push(c) : r.push(Math.ceil(l * o * t) / t);
    } else r.push(c);
    if (c = /* @__PURE__ */ n2.shift(), c === void 0) return r.join("");
    f = !f;
  }
}
m$1(N, "calculateSize");
function le(e) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "defs";
  let t = "", n2 = /* @__PURE__ */ e.indexOf("<" + o);
  for (; n2 >= 0; ) {
    let r = /* @__PURE__ */ e.indexOf(">", n2), c = /* @__PURE__ */ e.indexOf("</" + o);
    if (r === -1 || c === -1) break;
    let f = /* @__PURE__ */ e.indexOf(">", c);
    if (f === -1) break;
    t += /* @__PURE__ */ e.slice(r + 1, c).trim(), e = e.slice(0, n2).trim() + e.slice(f + 1);
  }
  return {
    defs: t,
    content: e
  };
}
m$1(le, "splitSVGDefs");
function ue(e, o) {
  return e ? "<defs>" + e + "</defs>" + o : o;
}
m$1(ue, "mergeDefsAndContent");
function _(e, o, t) {
  let n2 = /* @__PURE__ */ le(e);
  return ue(n2.defs, o + n2.content + t);
}
m$1(_, "wrapSVGContent");
var pe = /* @__PURE__ */ m$1((e) => e === "unset" || e === "undefined" || e === "none", "isUnsetKeyword");
function $(e, o) {
  let t = {
    ...L,
    ...e
  }, n2 = {
    ...B,
    ...o
  }, r = {
    left: t.left,
    top: t.top,
    width: t.width,
    height: t.height
  }, c = t.body;
  [
    t,
    n2
  ].forEach((m) => {
    let u = [], I = m.hFlip, F = m.vFlip, x = m.rotate;
    I ? F ? x += 2 : (u.push("translate(" + (r.width + r.left).toString() + " " + (0 - r.top).toString() + ")"), u.push("scale(-1 1)"), r.top = r.left = 0) : F && (u.push("translate(" + (0 - r.left).toString() + " " + (r.height + r.top).toString() + ")"), u.push("scale(1 -1)"), r.top = r.left = 0);
    let d;
    switch (x < 0 && (x -= Math.floor(x / 4) * 4), x = x % 4, x) {
      case 1:
        d = r.height / 2 + r.top, u.unshift("rotate(90 " + d.toString() + " " + d.toString() + ")");
        break;
      case 2:
        u.unshift("rotate(180 " + (r.width / 2 + r.left).toString() + " " + (r.height / 2 + r.top).toString() + ")");
        break;
      case 3:
        d = r.width / 2 + r.left, u.unshift("rotate(-90 " + d.toString() + " " + d.toString() + ")");
        break;
    }
    x % 2 === 1 && (r.left !== r.top && (d = r.left, r.left = r.top, r.top = d), r.width !== r.height && (d = r.width, r.width = r.height, r.height = d)), u.length && (c = /* @__PURE__ */ _(c, '<g transform="' + u.join(" ") + '">', "</g>"));
  });
  let f = n2.width, l = n2.height, h = r.width, C = r.height, s, a;
  f === null ? (a = l === null ? "1em" : l === "auto" ? C : l, s = /* @__PURE__ */ N(a, h / C)) : (s = f === "auto" ? h : f, a = l === null ? N(s, C / h) : l === "auto" ? C : l);
  let p = {}, w = /* @__PURE__ */ m$1((m, u) => {
    pe(u) || (p[m] = /* @__PURE__ */ u.toString());
  }, "setAttr");
  w("width", s), w("height", a);
  let T = [
    r.left,
    r.top,
    h,
    C
  ];
  return p.viewBox = /* @__PURE__ */ T.join(" "), {
    attributes: p,
    viewBox: T,
    body: c
  };
}
m$1($, "iconToSVG");
var me = /\sid="(\S+)"/g, de = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16), ge = 0;
function U(e) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : de;
  let t = [], n2;
  for (; n2 = /* @__PURE__ */ me.exec(e); ) t.push(n2[1]);
  if (!t.length) return e;
  let r = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return t.forEach((c) => {
    let f = typeof o == "function" ? o(c) : o + (ge++).toString(), l = /* @__PURE__ */ c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = /* @__PURE__ */ e.replace(new RegExp('([#;"])(' + l + ')([")]|\\.[a-z])', "g"), "$1" + f + r + "$3");
  }), e = /* @__PURE__ */ e.replace(new RegExp(r, "g"), ""), e;
}
m$1(U, "replaceIDs");
function q(e, o) {
  let t = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (let n2 in o) t += " " + n2 + '="' + o[n2] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + t + ">" + e + "</svg>";
}
m$1(q, "iconToHTML");
q$1(/* @__PURE__ */ te());
var je = {
  body: '<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/><text transform="translate(21.16 64.67)" style="fill: #fff; font-family: ArialMT, Arial; font-size: 67.75px;"><tspan x="0" y="0">?</tspan></text></g>',
  height: 80,
  width: 80
}, R = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map(), yt = /* @__PURE__ */ m$1((e) => {
  for (let o of e) {
    if (!o.name) throw new Error('Invalid icon loader. Must have a "name" property with non-empty string value.');
    if (tt.debug("Registering icon pack:", o.name), "loader" in o) oe.set(o.name, o.loader);
    else if ("icons" in o) R.set(o.name, o.icons);
    else throw tt.error("Invalid icon loader:", o), new Error('Invalid icon loader. Must have either "icons" or "loader" property.');
  }
}, "registerIconPacks"), Oe = /* @__PURE__ */ m$1(async (e, o) => {
  let t = /* @__PURE__ */ V(e, true, o !== void 0);
  if (!t) throw new Error(`Invalid icon name: ${e}`);
  let n2 = t.prefix || o;
  if (!n2) throw new Error(`Icon name must contain a prefix: ${e}`);
  let r = /* @__PURE__ */ R.get(n2);
  if (!r) {
    let f = /* @__PURE__ */ oe.get(n2);
    if (!f) throw new Error(`Icon set not found: ${t.prefix}`);
    try {
      r = {
        ...await f(),
        prefix: n2
      }, R.set(n2, r);
    } catch (l) {
      throw tt.error(l), new Error(`Failed to load icon set: ${t.prefix}`);
    }
  }
  let c = /* @__PURE__ */ z(r, t.name);
  if (!c) throw new Error(`Icon not found: ${e}`);
  return c;
}, "getRegisteredIconData");
var St = /* @__PURE__ */ m$1(async (e, o) => {
  let t;
  try {
    t = await Oe(e, o == null ? void 0 : o.fallbackPrefix);
  } catch (c) {
    tt.error(c), t = je;
  }
  let n2 = /* @__PURE__ */ $(t, o);
  return q(/* @__PURE__ */ U(n2.body), n2.attributes);
}, "getIconSVG");
export {
  St as S,
  je as j,
  yt as y
};
