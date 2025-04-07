import { t as tt } from "./vendor-min-mermaid~chunk-ZKYS2E5M.DYmB7G2x.chunk.js";
import { m as m$1, q as q$1, n } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Cm_2-rE8.chunk.js";
var define_process_env_default = {};
var Q = n((ct, _) => {
  var v = 1e3, E = v * 60, T = E * 60, S = T * 24, ge = S * 7, he = S * 365.25;
  _.exports = function(e, o) {
    o = o || {};
    var t = typeof e;
    if (t === "string" && e.length > 0) return Ce(e);
    if (t === "number" && isFinite(e)) return o.long ? Ie(e) : xe(e);
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
  };
  function Ce(e) {
    if (e = String(e), !(e.length > 100)) {
      var o = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
      if (o) {
        var t = parseFloat(o[1]), n2 = (o[2] || "ms").toLowerCase();
        switch (n2) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return t * he;
          case "weeks":
          case "week":
          case "w":
            return t * ge;
          case "days":
          case "day":
          case "d":
            return t * S;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return t * T;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return t * E;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return t * v;
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
  m$1(Ce, "parse");
  function xe(e) {
    var o = Math.abs(e);
    return o >= S ? Math.round(e / S) + "d" : o >= T ? Math.round(e / T) + "h" : o >= E ? Math.round(e / E) + "m" : o >= v ? Math.round(e / v) + "s" : e + "ms";
  }
  m$1(xe, "fmtShort");
  function Ie(e) {
    var o = Math.abs(e);
    return o >= S ? k(e, o, S, "day") : o >= T ? k(e, o, T, "hour") : o >= E ? k(e, o, E, "minute") : o >= v ? k(e, o, v, "second") : e + " ms";
  }
  m$1(Ie, "fmtLong");
  function k(e, o, t, n2) {
    var r = o >= t * 1.5;
    return Math.round(e / t) + " " + n2 + (r ? "s" : "");
  }
  m$1(k, "plural");
});
var Y = n((ft, X) => {
  function we(e) {
    t.debug = t, t.default = t, t.coerce = C, t.disable = a, t.enable = r, t.enabled = l, t.humanize = Q(), t.destroy = x, Object.keys(e).forEach((c) => {
      t[c] = e[c];
    }), t.names = [], t.skips = [], t.formatters = {};
    function o(c) {
      let f = 0;
      for (let p = 0; p < c.length; p++) f = (f << 5) - f + c.charCodeAt(p), f |= 0;
      return t.colors[Math.abs(f) % t.colors.length];
    }
    m$1(o, "selectColor"), t.selectColor = o;
    function t(c) {
      let f, p = null, m, w;
      function d() {
        for (var _len = arguments.length, u = new Array(_len), _key = 0; _key < _len; _key++) {
          u[_key] = arguments[_key];
        }
        if (!d.enabled) return;
        let F = d, y = Number(/* @__PURE__ */ new Date()), I = y - (f || y);
        F.diff = I, F.prev = f, F.curr = y, f = y, u[0] = t.coerce(u[0]), typeof u[0] != "string" && u.unshift("%O");
        let g = 0;
        u[0] = u[0].replace(/%([a-zA-Z%])/g, (A, oe) => {
          if (A === "%%") return "%";
          g++;
          let R = t.formatters[oe];
          if (typeof R == "function") {
            let re = u[g];
            A = R.call(F, re), u.splice(g, 1), g--;
          }
          return A;
        }), t.formatArgs.call(F, u), (F.log || t.log).apply(F, u);
      }
      return m$1(d, "debug"), d.namespace = c, d.useColors = t.useColors(), d.color = t.selectColor(c), d.extend = n2, d.destroy = t.destroy, Object.defineProperty(d, "enabled", {
        enumerable: true,
        configurable: false,
        get: m$1(() => p !== null ? p : (m !== t.namespaces && (m = t.namespaces, w = t.enabled(c)), w), "get"),
        set: m$1((u) => {
          p = u;
        }, "set")
      }), typeof t.init == "function" && t.init(d), d;
    }
    m$1(t, "createDebug");
    function n2(c, f) {
      let p = t(this.namespace + (typeof f > "u" ? ":" : f) + c);
      return p.log = this.log, p;
    }
    m$1(n2, "extend");
    function r(c) {
      t.save(c), t.namespaces = c, t.names = [], t.skips = [];
      let f = (typeof c == "string" ? c : "").trim().replace(" ", ",").split(",").filter(Boolean);
      for (let p of f) p[0] === "-" ? t.skips.push(p.slice(1)) : t.names.push(p);
    }
    m$1(r, "enable");
    function i(c, f) {
      let p = 0, m = 0, w = -1, d = 0;
      for (; p < c.length; ) if (m < f.length && (f[m] === c[p] || f[m] === "*")) f[m] === "*" ? (w = m, d = p, m++) : (p++, m++);
      else if (w !== -1) m = w + 1, d++, p = d;
      else return false;
      for (; m < f.length && f[m] === "*"; ) m++;
      return m === f.length;
    }
    m$1(i, "matchesTemplate");
    function a() {
      let c = [
        ...t.names,
        ...t.skips.map((f) => "-" + f)
      ].join(",");
      return t.enable(""), c;
    }
    m$1(a, "disable");
    function l(c) {
      for (let f of t.skips) if (i(c, f)) return false;
      for (let f of t.names) if (i(c, f)) return true;
      return false;
    }
    m$1(l, "enabled");
    function C(c) {
      return c instanceof Error ? c.stack || c.message : c;
    }
    m$1(C, "coerce");
    function x() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return m$1(x, "destroy"), t.enable(t.load()), t;
  }
  m$1(we, "setup");
  X.exports = we;
});
var ee = n((h, D) => {
  h.formatArgs = ye;
  h.save = Se;
  h.load = be;
  h.useColors = Fe;
  h.storage = ve();
  h.destroy = /* @__PURE__ */ (() => {
    let e = false;
    return () => {
      e || (e = true, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
    };
  })();
  h.colors = [
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
  function Fe() {
    if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) return true;
    if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return false;
    let e;
    return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && (e = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(e[1], 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  m$1(Fe, "useColors");
  function ye(e) {
    if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + D.exports.humanize(this.diff), !this.useColors) return;
    let o = "color: " + this.color;
    e.splice(1, 0, o, "color: inherit");
    let t = 0, n2 = 0;
    e[0].replace(/%[a-zA-Z%]/g, (r) => {
      r !== "%%" && (t++, r === "%c" && (n2 = t));
    }), e.splice(n2, 0, o);
  }
  m$1(ye, "formatArgs");
  h.log = console.debug || console.log || (() => {
  });
  function Se(e) {
    try {
      e ? h.storage.setItem("debug", e) : h.storage.removeItem("debug");
    } catch {
    }
  }
  m$1(Se, "save");
  function be() {
    let e;
    try {
      e = h.storage.getItem("debug");
    } catch {
    }
    return !e && typeof process < "u" && "env" in process && (e = define_process_env_default.DEBUG), e;
  }
  m$1(be, "load");
  function ve() {
    try {
      return localStorage;
    } catch {
    }
  }
  m$1(ve, "localstorage");
  D.exports = Y()(h);
  var { formatters: Ee } = D.exports;
  Ee.j = function(e) {
    try {
      return JSON.stringify(e);
    } catch (o) {
      return "[UnexpectedJSONParseError]: " + o.message;
    }
  };
});
var se = Object.freeze({
  left: 0,
  top: 0,
  width: 16,
  height: 16
}), b = Object.freeze({
  rotate: 0,
  vFlip: false,
  hFlip: false
}), P = Object.freeze({
  ...se,
  ...b
}), H = Object.freeze({
  ...P,
  body: "",
  hidden: false
});
var ie = Object.freeze({
  width: null,
  height: null
}), J = Object.freeze({
  ...ie,
  ...b
});
var L = m$1(function(e, o, t) {
  let n2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "";
  let r = e.split(":");
  if (e.slice(0, 1) === "@") {
    if (r.length < 2 || r.length > 3) return null;
    n2 = r.shift().slice(1);
  }
  if (r.length > 3 || !r.length) return null;
  if (r.length > 1) {
    let l = r.pop(), C = r.pop(), x = {
      provider: r.length > 0 ? r[0] : n2,
      prefix: C,
      name: l
    };
    return o && !O(x) ? null : x;
  }
  let i = r[0], a = i.split("-");
  if (a.length > 1) {
    let l = {
      provider: n2,
      prefix: a.shift(),
      name: a.join("-")
    };
    return o && !O(l) ? null : l;
  }
  if (t && n2 === "") {
    let l = {
      provider: n2,
      prefix: "",
      name: i
    };
    return o && !O(l, t) ? null : l;
  }
  return null;
}, "stringToIcon"), O = m$1((e, o) => e ? !!((o && e.prefix === "" || e.prefix) && e.name) : false, "validateIconName");
function B(e, o) {
  let t = {};
  !e.hFlip != !o.hFlip && (t.hFlip = true), !e.vFlip != !o.vFlip && (t.vFlip = true);
  let n2 = ((e.rotate || 0) + (o.rotate || 0)) % 4;
  return n2 && (t.rotate = n2), t;
}
m$1(B, "mergeIconTransformations");
function V(e, o) {
  let t = B(e, o);
  for (let n2 in H) n2 in b ? n2 in e && !(n2 in t) && (t[n2] = b[n2]) : n2 in o ? t[n2] = o[n2] : n2 in e && (t[n2] = e[n2]);
  return t;
}
m$1(V, "mergeIconData");
function K(e, o) {
  let t = e.icons, n2 = e.aliases || /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  function i(a) {
    if (t[a]) return r[a] = [];
    if (!(a in r)) {
      r[a] = null;
      let l = n2[a] && n2[a].parent, C = l && i(l);
      C && (r[a] = [
        l
      ].concat(C));
    }
    return r[a];
  }
  return m$1(i, "resolve"), (o || Object.keys(t).concat(Object.keys(n2))).forEach(i), r;
}
m$1(K, "getIconsTree");
function W(e, o, t) {
  let n2 = e.icons, r = e.aliases || /* @__PURE__ */ Object.create(null), i = {};
  function a(l) {
    i = V(n2[l] || r[l], i);
  }
  return m$1(a, "parse"), a(o), t.forEach(a), V(e, i);
}
m$1(W, "internalGetIconData");
function G(e, o) {
  if (e.icons[o]) return W(e, o, []);
  let t = K(e, [
    o
  ])[o];
  return t ? W(e, o, t) : null;
}
m$1(G, "getIconData");
var ce = /(-?[0-9.]*[0-9]+[0-9.]*)/g, ae = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function z(e, o, t) {
  if (o === 1) return e;
  if (t = t || 100, typeof e == "number") return Math.ceil(e * o * t) / t;
  if (typeof e != "string") return e;
  let n2 = e.split(ce);
  if (n2 === null || !n2.length) return e;
  let r = [], i = n2.shift(), a = ae.test(i);
  for (; ; ) {
    if (a) {
      let l = parseFloat(i);
      isNaN(l) ? r.push(i) : r.push(Math.ceil(l * o * t) / t);
    } else r.push(i);
    if (i = n2.shift(), i === void 0) return r.join("");
    a = !a;
  }
}
m$1(z, "calculateSize");
function fe(e) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "defs";
  let t = "", n2 = e.indexOf("<" + o);
  for (; n2 >= 0; ) {
    let r = e.indexOf(">", n2), i = e.indexOf("</" + o);
    if (r === -1 || i === -1) break;
    let a = e.indexOf(">", i);
    if (a === -1) break;
    t += e.slice(r + 1, i).trim(), e = e.slice(0, n2).trim() + e.slice(a + 1);
  }
  return {
    defs: t,
    content: e
  };
}
m$1(fe, "splitSVGDefs");
function le(e, o) {
  return e ? "<defs>" + e + "</defs>" + o : o;
}
m$1(le, "mergeDefsAndContent");
function Z(e, o, t) {
  let n2 = fe(e);
  return le(n2.defs, o + n2.content + t);
}
m$1(Z, "wrapSVGContent");
var ue = m$1((e) => e === "unset" || e === "undefined" || e === "none", "isUnsetKeyword");
function N(e, o) {
  let t = {
    ...P,
    ...e
  }, n2 = {
    ...J,
    ...o
  }, r = {
    left: t.left,
    top: t.top,
    width: t.width,
    height: t.height
  }, i = t.body;
  [
    t,
    n2
  ].forEach((d) => {
    let u = [], F = d.hFlip, y = d.vFlip, I = d.rotate;
    F ? y ? I += 2 : (u.push("translate(" + (r.width + r.left).toString() + " " + (0 - r.top).toString() + ")"), u.push("scale(-1 1)"), r.top = r.left = 0) : y && (u.push("translate(" + (0 - r.left).toString() + " " + (r.height + r.top).toString() + ")"), u.push("scale(1 -1)"), r.top = r.left = 0);
    let g;
    switch (I < 0 && (I -= Math.floor(I / 4) * 4), I = I % 4, I) {
      case 1:
        g = r.height / 2 + r.top, u.unshift("rotate(90 " + g.toString() + " " + g.toString() + ")");
        break;
      case 2:
        u.unshift("rotate(180 " + (r.width / 2 + r.left).toString() + " " + (r.height / 2 + r.top).toString() + ")");
        break;
      case 3:
        g = r.width / 2 + r.left, u.unshift("rotate(-90 " + g.toString() + " " + g.toString() + ")");
        break;
    }
    I % 2 === 1 && (r.left !== r.top && (g = r.left, r.left = r.top, r.top = g), r.width !== r.height && (g = r.width, r.width = r.height, r.height = g)), u.length && (i = Z(i, '<g transform="' + u.join(" ") + '">', "</g>"));
  });
  let a = n2.width, l = n2.height, C = r.width, x = r.height, c, f;
  a === null ? (f = l === null ? "1em" : l === "auto" ? x : l, c = z(f, C / x)) : (c = a === "auto" ? C : a, f = l === null ? z(c, x / C) : l === "auto" ? x : l);
  let p = {}, m = m$1((d, u) => {
    ue(u) || (p[d] = u.toString());
  }, "setAttr");
  m("width", c), m("height", f);
  let w = [
    r.left,
    r.top,
    C,
    x
  ];
  return p.viewBox = w.join(" "), {
    attributes: p,
    viewBox: w,
    body: i
  };
}
m$1(N, "iconToSVG");
var pe = /\sid="(\S+)"/g, de = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16), me = 0;
function U(e) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : de;
  let t = [], n2;
  for (; n2 = pe.exec(e); ) t.push(n2[1]);
  if (!t.length) return e;
  let r = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return t.forEach((i) => {
    let a = typeof o == "function" ? o(i) : o + (me++).toString(), l = i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(new RegExp('([#;"])(' + l + ')([")]|\\.[a-z])', "g"), "$1" + a + r + "$3");
  }), e = e.replace(new RegExp(r, "g"), ""), e;
}
m$1(U, "replaceIDs");
function q(e, o) {
  let t = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (let n2 in o) t += " " + n2 + '="' + o[n2] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + t + ">" + e + "</svg>";
}
m$1(q, "iconToHTML");
q$1(ee());
var Te = {
  body: '<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/><text transform="translate(21.16 64.67)" style="fill: #fff; font-family: ArialMT, Arial; font-size: 67.75px;"><tspan x="0" y="0">?</tspan></text></g>',
  height: 80,
  width: 80
}, $ = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), yt = m$1((e) => {
  for (let o of e) {
    if (!o.name) throw new Error('Invalid icon loader. Must have a "name" property with non-empty string value.');
    if (tt.debug("Registering icon pack:", o.name), "loader" in o) te.set(o.name, o.loader);
    else if ("icons" in o) $.set(o.name, o.icons);
    else throw tt.error("Invalid icon loader:", o), new Error('Invalid icon loader. Must have either "icons" or "loader" property.');
  }
}, "registerIconPacks"), je = m$1(async (e, o) => {
  let t = L(e, true, o !== void 0);
  if (!t) throw new Error(`Invalid icon name: ${e}`);
  let n2 = t.prefix || o;
  if (!n2) throw new Error(`Icon name must contain a prefix: ${e}`);
  let r = $.get(n2);
  if (!r) {
    let a = te.get(n2);
    if (!a) throw new Error(`Icon set not found: ${t.prefix}`);
    try {
      r = {
        ...await a(),
        prefix: n2
      }, $.set(n2, r);
    } catch (l) {
      throw tt.error(l), new Error(`Failed to load icon set: ${t.prefix}`);
    }
  }
  let i = G(r, t.name);
  if (!i) throw new Error(`Icon not found: ${e}`);
  return i;
}, "getRegisteredIconData");
var St = m$1(async (e, o) => {
  let t;
  try {
    t = await je(e, o == null ? void 0 : o.fallbackPrefix);
  } catch (i) {
    tt.error(i), t = Te;
  }
  let n2 = N(t, o);
  return q(U(n2.body), n2.attributes);
}, "getIconSVG");
export {
  St as S,
  Te as T,
  yt as y
};
