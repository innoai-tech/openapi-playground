const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-min-mermaid~katex-SWYD7GD6.DYaxWg_a.chunk.js","assets/vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js"])))=>i.map(i=>d[i]);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var _a2, __, _b, __2, _c2, __3, _d2, __4, _e2, __5, _f2, __6, _g2, __7, _h2, __8, _i, __9, _j, __10, _k, __11, _l2, __12;
import { _ as __vitePreload } from "./lib-nodepkg-typedef.BgZlbiby.chunk.js";
import { m as m$1, q as q$1, n, o } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js";
var Ya = /* @__PURE__ */ n((qo, zo) => {
  (function(t9, e) {
    typeof qo == "object" && typeof zo < "u" ? zo.exports = /* @__PURE__ */ e() : typeof define == "function" && define.amd ? define(e) : (t9 = typeof globalThis < "u" ? globalThis : t9 || self).dayjs = /* @__PURE__ */ e();
  })(qo, function() {
    var t9 = 1e3, e = 6e4, r = 36e5, o2 = "millisecond", n2 = "second", s = "minute", a = "hour", l = "day", c = "week", h = "month", u = "quarter", d = "year", f = "date", g = "Invalid Date", T = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, L = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, $ = {
      name: "en",
      weekdays: /* @__PURE__ */ "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      months: /* @__PURE__ */ "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
      ordinal: /* @__PURE__ */ m$1(function(k) {
        var x = [
          "th",
          "st",
          "nd",
          "rd"
        ], y = k % 100;
        return "[" + k + (x[(y - 20) % 10] || x[y] || x[0]) + "]";
      }, "ordinal")
    }, z = /* @__PURE__ */ m$1(function(k, x, y) {
      var F = /* @__PURE__ */ String(k);
      return !F || F.length >= x ? k : "" + Array(x + 1 - F.length).join(y) + k;
    }, "m"), G = {
      s: z,
      z: /* @__PURE__ */ m$1(function(k) {
        var x = -k.utcOffset(), y = /* @__PURE__ */ Math.abs(x), F = /* @__PURE__ */ Math.floor(y / 60), S = y % 60;
        return (x <= 0 ? "+" : "-") + z(F, 2, "0") + ":" + z(S, 2, "0");
      }, "z"),
      m: /* @__PURE__ */ m$1(function k(x, y) {
        if (x.date() < y.date()) return -k(y, x);
        var F = 12 * (y.year() - x.year()) + (y.month() - x.month()), S = /* @__PURE__ */ x.clone().add(F, h), N = y - S < 0, O = /* @__PURE__ */ x.clone().add(F + (N ? -1 : 1), h);
        return +(-(F + (y - S) / (N ? S - O : O - S)) || 0);
      }, "t"),
      a: /* @__PURE__ */ m$1(function(k) {
        return k < 0 ? Math.ceil(k) || 0 : Math.floor(k);
      }, "a"),
      p: /* @__PURE__ */ m$1(function(k) {
        return {
          M: h,
          y: d,
          w: c,
          d: l,
          D: f,
          h: a,
          m: s,
          s: n2,
          ms: o2,
          Q: u
        }[k] || String(k || "").toLowerCase().replace(/s$/, "");
      }, "p"),
      u: /* @__PURE__ */ m$1(function(k) {
        return k === void 0;
      }, "u")
    }, E = "en", B = {};
    B[E] = $;
    var P = "$isDayjsObject", w = /* @__PURE__ */ m$1(function(k) {
      return k instanceof it || !(!k || !k[P]);
    }, "S"), X = /* @__PURE__ */ m$1(function k(x, y, F) {
      var S;
      if (!x) return E;
      if (typeof x == "string") {
        var N = /* @__PURE__ */ x.toLowerCase();
        B[N] && (S = N), y && (B[N] = y, S = N);
        var O = /* @__PURE__ */ x.split("-");
        if (!S && O.length > 1) return k(O[0]);
      } else {
        var U = x.name;
        B[U] = x, S = U;
      }
      return !F && S && (E = S), S || !F && E;
    }, "t"), j = /* @__PURE__ */ m$1(function(k, x) {
      if (w(k)) return k.clone();
      var y = typeof x == "object" ? x : {};
      return y.date = k, y.args = arguments, new it(y);
    }, "O"), W = G;
    W.l = X, W.i = w, W.w = function(k, x) {
      return j(k, {
        locale: x.$L,
        utc: x.$u,
        x: x.$x,
        $offset: x.$offset
      });
    };
    var it = /* @__PURE__ */ function() {
      function k(y) {
        this.$L = /* @__PURE__ */ X(y.locale, null, true), this.parse(y), this.$x = this.$x || y.x || {}, this[P] = true;
      }
      m$1(k, "M");
      var x = k.prototype;
      return x.parse = function(y) {
        this.$d = /* @__PURE__ */ function(F) {
          var S = F.date, N = F.utc;
          if (S === null) return /* @__PURE__ */ new Date(NaN);
          if (W.u(S)) return /* @__PURE__ */ new Date();
          if (S instanceof Date) return new Date(S);
          if (typeof S == "string" && !/Z$/i.test(S)) {
            var O = /* @__PURE__ */ S.match(T);
            if (O) {
              var U = O[2] - 1 || 0, rt = /* @__PURE__ */ (O[7] || "0").substring(0, 3);
              return N ? new Date(Date.UTC(O[1], U, O[3] || 1, O[4] || 0, O[5] || 0, O[6] || 0, rt)) : new Date(O[1], U, O[3] || 1, O[4] || 0, O[5] || 0, O[6] || 0, rt);
            }
          }
          return new Date(S);
        }(y), this.init();
      }, x.init = function() {
        var y = this.$d;
        this.$y = /* @__PURE__ */ y.getFullYear(), this.$M = /* @__PURE__ */ y.getMonth(), this.$D = /* @__PURE__ */ y.getDate(), this.$W = /* @__PURE__ */ y.getDay(), this.$H = /* @__PURE__ */ y.getHours(), this.$m = /* @__PURE__ */ y.getMinutes(), this.$s = /* @__PURE__ */ y.getSeconds(), this.$ms = /* @__PURE__ */ y.getMilliseconds();
      }, x.$utils = function() {
        return W;
      }, x.isValid = function() {
        return this.$d.toString() !== g;
      }, x.isSame = function(y, F) {
        var S = /* @__PURE__ */ j(y);
        return this.startOf(F) <= S && S <= this.endOf(F);
      }, x.isAfter = function(y, F) {
        return j(y) < this.startOf(F);
      }, x.isBefore = function(y, F) {
        return this.endOf(F) < j(y);
      }, x.$g = function(y, F, S) {
        return W.u(y) ? this[F] : this.set(S, y);
      }, x.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, x.valueOf = function() {
        return this.$d.getTime();
      }, x.startOf = function(y, F) {
        var S = this, N = !!W.u(F) || F, O = /* @__PURE__ */ W.p(y), U = /* @__PURE__ */ m$1(function(_t, lt) {
          var v = /* @__PURE__ */ W.w(S.$u ? Date.UTC(S.$y, lt, _t) : new Date(S.$y, lt, _t), S);
          return N ? v : v.endOf(l);
        }, "l"), rt = /* @__PURE__ */ m$1(function(_t, lt) {
          return W.w(/* @__PURE__ */ S.toDate()[_t].apply(/* @__PURE__ */ S.toDate("s"), /* @__PURE__ */ (N ? [
            0,
            0,
            0,
            0
          ] : [
            23,
            59,
            59,
            999
          ]).slice(lt)), S);
        }, "$"), Y = this.$W, nt = this.$M, K = this.$D, Ft = "set" + (this.$u ? "UTC" : "");
        switch (O) {
          case d:
            return N ? U(1, 0) : U(31, 11);
          case h:
            return N ? U(1, nt) : U(0, nt + 1);
          case c:
            var Z = this.$locale().weekStart || 0, Ct = (Y < Z ? Y + 7 : Y) - Z;
            return U(N ? K - Ct : K + (6 - Ct), nt);
          case l:
          case f:
            return rt(Ft + "Hours", 0);
          case a:
            return rt(Ft + "Minutes", 1);
          case s:
            return rt(Ft + "Seconds", 2);
          case n2:
            return rt(Ft + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, x.endOf = function(y) {
        return this.startOf(y, false);
      }, x.$set = function(y, F) {
        var S, N = /* @__PURE__ */ W.p(y), O = "set" + (this.$u ? "UTC" : ""), U = (S = {}, S[l] = O + "Date", S[f] = O + "Date", S[h] = O + "Month", S[d] = O + "FullYear", S[a] = O + "Hours", S[s] = O + "Minutes", S[n2] = O + "Seconds", S[o2] = O + "Milliseconds", S)[N], rt = N === l ? this.$D + (F - this.$W) : F;
        if (N === h || N === d) {
          var Y = /* @__PURE__ */ this.clone().set(f, 1);
          Y.$d[U](rt), Y.init(), this.$d = Y.set(f, /* @__PURE__ */ Math.min(this.$D, /* @__PURE__ */ Y.daysInMonth())).$d;
        } else U && this.$d[U](rt);
        return this.init(), this;
      }, x.set = function(y, F) {
        return this.clone().$set(y, F);
      }, x.get = function(y) {
        return this[W.p(y)]();
      }, x.add = function(y, F) {
        var S, N = this;
        y = /* @__PURE__ */ Number(y);
        var O = /* @__PURE__ */ W.p(F), U = /* @__PURE__ */ m$1(function(nt) {
          var K = /* @__PURE__ */ j(N);
          return W.w(/* @__PURE__ */ K.date(K.date() + Math.round(nt * y)), N);
        }, "y");
        if (O === h) return this.set(h, this.$M + y);
        if (O === d) return this.set(d, this.$y + y);
        if (O === l) return U(1);
        if (O === c) return U(7);
        var rt = (S = {}, S[s] = e, S[a] = r, S[n2] = t9, S)[O] || 1, Y = this.$d.getTime() + y * rt;
        return W.w(Y, this);
      }, x.subtract = function(y, F) {
        return this.add(-1 * y, F);
      }, x.format = function(y) {
        var F = this, S = /* @__PURE__ */ this.$locale();
        if (!this.isValid()) return S.invalidDate || g;
        var N = y || "YYYY-MM-DDTHH:mm:ssZ", O = /* @__PURE__ */ W.z(this), U = this.$H, rt = this.$m, Y = this.$M, nt = S.weekdays, K = S.months, Ft = S.meridiem, Z = /* @__PURE__ */ m$1(function(lt, v, H, V) {
          return lt && (lt[v] || lt(F, N)) || H[v].slice(0, V);
        }, "h"), Ct = /* @__PURE__ */ m$1(function(lt) {
          return W.s(U % 12 || 12, lt, "0");
        }, "d"), _t = Ft || function(lt, v, H) {
          var V = lt < 12 ? "AM" : "PM";
          return H ? V.toLowerCase() : V;
        };
        return N.replace(L, function(lt, v) {
          return v || function(H) {
            switch (H) {
              case "YY":
                return String(F.$y).slice(-2);
              case "YYYY":
                return W.s(F.$y, 4, "0");
              case "M":
                return Y + 1;
              case "MM":
                return W.s(Y + 1, 2, "0");
              case "MMM":
                return Z(S.monthsShort, Y, K, 3);
              case "MMMM":
                return Z(K, Y);
              case "D":
                return F.$D;
              case "DD":
                return W.s(F.$D, 2, "0");
              case "d":
                return String(F.$W);
              case "dd":
                return Z(S.weekdaysMin, F.$W, nt, 2);
              case "ddd":
                return Z(S.weekdaysShort, F.$W, nt, 3);
              case "dddd":
                return nt[F.$W];
              case "H":
                return String(U);
              case "HH":
                return W.s(U, 2, "0");
              case "h":
                return Ct(1);
              case "hh":
                return Ct(2);
              case "a":
                return _t(U, rt, true);
              case "A":
                return _t(U, rt, false);
              case "m":
                return String(rt);
              case "mm":
                return W.s(rt, 2, "0");
              case "s":
                return String(F.$s);
              case "ss":
                return W.s(F.$s, 2, "0");
              case "SSS":
                return W.s(F.$ms, 3, "0");
              case "Z":
                return O;
            }
            return null;
          }(lt) || O.replace(":", "");
        });
      }, x.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, x.diff = function(y, F, S) {
        var N, O = this, U = /* @__PURE__ */ W.p(F), rt = /* @__PURE__ */ j(y), Y = (rt.utcOffset() - this.utcOffset()) * e, nt = this - rt, K = /* @__PURE__ */ m$1(function() {
          return W.m(O, rt);
        }, "D");
        switch (U) {
          case d:
            N = K() / 12;
            break;
          case h:
            N = /* @__PURE__ */ K();
            break;
          case u:
            N = K() / 3;
            break;
          case c:
            N = (nt - Y) / 6048e5;
            break;
          case l:
            N = (nt - Y) / 864e5;
            break;
          case a:
            N = nt / r;
            break;
          case s:
            N = nt / e;
            break;
          case n2:
            N = nt / t9;
            break;
          default:
            N = nt;
        }
        return S ? N : W.a(N);
      }, x.daysInMonth = function() {
        return this.endOf(h).$D;
      }, x.$locale = function() {
        return B[this.$L];
      }, x.locale = function(y, F) {
        if (!y) return this.$L;
        var S = /* @__PURE__ */ this.clone(), N = /* @__PURE__ */ X(y, F, true);
        return N && (S.$L = N), S;
      }, x.clone = function() {
        return W.w(this.$d, this);
      }, x.toDate = function() {
        return new Date(this.valueOf());
      }, x.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, x.toISOString = function() {
        return this.$d.toISOString();
      }, x.toString = function() {
        return this.$d.toUTCString();
      }, k;
    }(), M = it.prototype;
    return j.prototype = M, [
      [
        "$ms",
        o2
      ],
      [
        "$s",
        n2
      ],
      [
        "$m",
        s
      ],
      [
        "$H",
        a
      ],
      [
        "$W",
        l
      ],
      [
        "$M",
        h
      ],
      [
        "$y",
        d
      ],
      [
        "$D",
        f
      ]
    ].forEach(function(k) {
      M[k[1]] = function(x) {
        return this.$g(x, k[0], k[1]);
      };
    }), j.extend = function(k, x) {
      return k.$i || (k(x, it, j), k.$i = true), j;
    }, j.locale = X, j.isDayjs = w, j.unix = function(k) {
      return j(1e3 * k);
    }, j.en = B[E], j.Ls = B, j.p = {}, j;
  });
});
var Ga = /* @__PURE__ */ q$1(/* @__PURE__ */ Ya());
var oe = {
  trace: 0,
  debug: 1,
  info: 2,
  warn: 3,
  error: 4,
  fatal: 5
}, tt = {
  trace: /* @__PURE__ */ m$1(function() {
    for (var _len = arguments.length, t9 = new Array(_len), _key = 0; _key < _len; _key++) {
      t9[_key] = arguments[_key];
    }
  }, "trace"),
  debug: /* @__PURE__ */ m$1(function() {
    for (var _len = arguments.length, t9 = new Array(_len), _key = 0; _key < _len; _key++) {
      t9[_key] = arguments[_key];
    }
  }, "debug"),
  info: /* @__PURE__ */ m$1(function() {
    for (var _len = arguments.length, t9 = new Array(_len), _key = 0; _key < _len; _key++) {
      t9[_key] = arguments[_key];
    }
  }, "info"),
  warn: /* @__PURE__ */ m$1(function() {
    for (var _len = arguments.length, t9 = new Array(_len), _key = 0; _key < _len; _key++) {
      t9[_key] = arguments[_key];
    }
  }, "warn"),
  error: /* @__PURE__ */ m$1(function() {
    for (var _len = arguments.length, t9 = new Array(_len), _key = 0; _key < _len; _key++) {
      t9[_key] = arguments[_key];
    }
  }, "error"),
  fatal: /* @__PURE__ */ m$1(function() {
    for (var _len = arguments.length, t9 = new Array(_len), _key = 0; _key < _len; _key++) {
      t9[_key] = arguments[_key];
    }
  }, "fatal")
}, Va = /* @__PURE__ */ m$1(function() {
  let t9 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "fatal";
  let e = oe.fatal;
  typeof t9 == "string" ? t9.toLowerCase() in oe && (e = oe[t9]) : typeof t9 == "number" && (e = t9), tt.trace = () => {
  }, tt.debug = () => {
  }, tt.info = () => {
  }, tt.warn = () => {
  }, tt.error = () => {
  }, tt.fatal = () => {
  }, e <= oe.fatal && (tt.fatal = console.error ? console.error.bind(console, /* @__PURE__ */ Pt("FATAL"), "color: orange") : console.log.bind(console, "\x1B[35m", /* @__PURE__ */ Pt("FATAL"))), e <= oe.error && (tt.error = console.error ? console.error.bind(console, /* @__PURE__ */ Pt("ERROR"), "color: orange") : console.log.bind(console, "\x1B[31m", /* @__PURE__ */ Pt("ERROR"))), e <= oe.warn && (tt.warn = console.warn ? console.warn.bind(console, /* @__PURE__ */ Pt("WARN"), "color: orange") : console.log.bind(console, "\x1B[33m", /* @__PURE__ */ Pt("WARN"))), e <= oe.info && (tt.info = console.info ? console.info.bind(console, /* @__PURE__ */ Pt("INFO"), "color: lightblue") : console.log.bind(console, "\x1B[34m", /* @__PURE__ */ Pt("INFO"))), e <= oe.debug && (tt.debug = console.debug ? console.debug.bind(console, /* @__PURE__ */ Pt("DEBUG"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", /* @__PURE__ */ Pt("DEBUG"))), e <= oe.trace && (tt.trace = console.debug ? console.debug.bind(console, /* @__PURE__ */ Pt("TRACE"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", /* @__PURE__ */ Pt("TRACE")));
}, "setLogLevel"), Pt = /* @__PURE__ */ m$1((t9) => `%c${(0, Ga.default)().format("ss.SSS")} : ${t9} : `, "format");
var Xa = /^-{3}\s*[\n\r](.*?)[\n\r]-{3}\s*[\n\r]+/s, ja = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, Za = /\s*%%.*\n/gm;
var bi = (_a2 = class extends Error {
  constructor(e) {
    super(e), this.name = "UnknownDiagramError";
  }
}, __ = new WeakMap(), __privateAdd(_a2, __, m$1(_a2, "UnknownDiagramError")), _a2);
var Ti = {}, cx = /* @__PURE__ */ m$1(function(t9, e) {
  t9 = /* @__PURE__ */ t9.replace(Xa, "").replace(ja, "").replace(Za, `
`);
  for (let [r, { detector: o2 }] of Object.entries(Ti)) if (o2(t9, e)) return r;
  throw new bi(`No diagram type detected matching given configuration for text: ${t9}`);
}, "detectType"), ux = /* @__PURE__ */ m$1(function() {
  for (var _len = arguments.length, t9 = new Array(_len), _key = 0; _key < _len; _key++) {
    t9[_key] = arguments[_key];
  }
  for (let { id: e, detector: r, loader: o2 } of t9) Po(e, r, o2);
}, "registerLazyLoadedDiagrams"), Po = /* @__PURE__ */ m$1((t9, e, r) => {
  Ti[t9] && tt.warn(`Detector with key ${t9} already exists. Overwriting.`), Ti[t9] = {
    detector: e,
    loader: r
  }, tt.debug(`Detector with key ${t9} added${r ? " with loader" : ""}`);
}, "addDetector"), fx = /* @__PURE__ */ m$1((t9) => Ti[t9].loader, "getDiagramLoader");
var $o = m$1(function(t9, e) {
  let { depth: r = 2, clobber: o2 = false } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  let n2 = {
    depth: r,
    clobber: o2
  };
  return Array.isArray(e) && !Array.isArray(t9) ? (e.forEach((s) => $o(t9, s, n2)), t9) : Array.isArray(e) && Array.isArray(t9) ? (e.forEach((s) => {
    t9.includes(s) || t9.push(s);
  }), t9) : t9 === void 0 || r <= 0 ? t9 != null && typeof t9 == "object" && typeof e == "object" ? Object.assign(t9, e) : e : (e !== void 0 && typeof t9 == "object" && typeof e == "object" && Object.keys(e).forEach((s) => {
    typeof e[s] == "object" && (t9[s] === void 0 || typeof t9[s] == "object") ? (t9[s] === void 0 && (t9[s] = Array.isArray(e[s]) ? [] : {}), t9[s] = /* @__PURE__ */ $o(t9[s], e[s], {
      depth: r - 1,
      clobber: o2
    })) : (o2 || typeof t9[s] != "object" && typeof e[s] != "object") && (t9[s] = e[s]);
  }), t9);
}, "assignWithDepth"), Lt = $o;
var ki = {
  min: {
    r: 0,
    g: 0,
    b: 0,
    s: 0,
    l: 0,
    a: 0
  },
  max: {
    r: 255,
    g: 255,
    b: 255,
    h: 360,
    s: 100,
    l: 100,
    a: 1
  },
  clamp: {
    r: /* @__PURE__ */ m$1((t9) => t9 >= 255 ? 255 : t9 < 0 ? 0 : t9, "r"),
    g: /* @__PURE__ */ m$1((t9) => t9 >= 255 ? 255 : t9 < 0 ? 0 : t9, "g"),
    b: /* @__PURE__ */ m$1((t9) => t9 >= 255 ? 255 : t9 < 0 ? 0 : t9, "b"),
    h: /* @__PURE__ */ m$1((t9) => t9 % 360, "h"),
    s: /* @__PURE__ */ m$1((t9) => t9 >= 100 ? 100 : t9 < 0 ? 0 : t9, "s"),
    l: /* @__PURE__ */ m$1((t9) => t9 >= 100 ? 100 : t9 < 0 ? 0 : t9, "l"),
    a: /* @__PURE__ */ m$1((t9) => t9 >= 1 ? 1 : t9 < 0 ? 0 : t9, "a")
  },
  toLinear: /* @__PURE__ */ m$1((t9) => {
    let e = t9 / 255;
    return t9 > 0.03928 ? Math.pow((e + 0.055) / 1.055, 2.4) : e / 12.92;
  }, "toLinear"),
  hue2rgb: /* @__PURE__ */ m$1((t9, e, r) => (r < 0 && (r += 1), r > 1 && (r -= 1), r < 0.16666666666666666 ? t9 + (e - t9) * 6 * r : r < 0.5 ? e : r < 0.6666666666666666 ? t9 + (e - t9) * (0.6666666666666666 - r) * 6 : t9), "hue2rgb"),
  hsl2rgb: /* @__PURE__ */ m$1((param, o2) => {
    let { h: t9, s: e, l: r } = param;
    if (!e) return r * 2.55;
    t9 /= 360, e /= 100, r /= 100;
    let n2 = r < 0.5 ? r * (1 + e) : r + e - r * e, s = 2 * r - n2;
    switch (o2) {
      case "r":
        return ki.hue2rgb(s, n2, t9 + 0.3333333333333333) * 255;
      case "g":
        return ki.hue2rgb(s, n2, t9) * 255;
      case "b":
        return ki.hue2rgb(s, n2, t9 - 0.3333333333333333) * 255;
    }
  }, "hsl2rgb"),
  rgb2hsl: /* @__PURE__ */ m$1((param, o2) => {
    let { r: t9, g: e, b: r } = param;
    t9 /= 255, e /= 255, r /= 255;
    let n2 = /* @__PURE__ */ Math.max(t9, e, r), s = /* @__PURE__ */ Math.min(t9, e, r), a = (n2 + s) / 2;
    if (o2 === "l") return a * 100;
    if (n2 === s) return 0;
    let l = n2 - s, c = a > 0.5 ? l / (2 - n2 - s) : l / (n2 + s);
    if (o2 === "s") return c * 100;
    switch (n2) {
      case t9:
        return ((e - r) / l + (e < r ? 6 : 0)) * 60;
      case e:
        return ((r - t9) / l + 2) * 60;
      case r:
        return ((t9 - e) / l + 4) * 60;
      default:
        return -1;
    }
  }, "rgb2hsl")
}, Ka = ki;
var du = {
  clamp: /* @__PURE__ */ m$1((t9, e, r) => e > r ? Math.min(e, /* @__PURE__ */ Math.max(r, t9)) : Math.min(r, /* @__PURE__ */ Math.max(e, t9)), "clamp"),
  round: /* @__PURE__ */ m$1((t9) => Math.round(t9 * 1e10) / 1e10, "round")
}, Qa = du;
var gu = {
  dec2hex: /* @__PURE__ */ m$1((t9) => {
    let e = /* @__PURE__ */ Math.round(t9).toString(16);
    return e.length > 1 ? e : `0${e}`;
  }, "dec2hex")
}, Ja = gu;
var xu = {
  channel: Ka,
  lang: Qa,
  unit: Ja
}, q = xu;
var ne = {};
for (let t9 = 0; t9 <= 255; t9++) ne[t9] = /* @__PURE__ */ q.unit.dec2hex(t9);
var ut = {
  ALL: 0,
  RGB: 1,
  HSL: 2
};
var Wo = (_b = class {
  constructor() {
    this.type = ut.ALL;
  }
  get() {
    return this.type;
  }
  set(e) {
    if (this.type && this.type !== e) throw new Error("Cannot change both RGB and HSL channels at the same time");
    this.type = e;
  }
  reset() {
    this.type = ut.ALL;
  }
  is(e) {
    return this.type === e;
  }
}, __2 = new WeakMap(), __privateAdd(_b, __2, m$1(_b, "Type")), _b), tl = Wo;
var Ho = (_c2 = class {
  constructor(e, r) {
    this.color = r, this.changed = false, this.data = e, this.type = new tl();
  }
  set(e, r) {
    return this.color = r, this.changed = false, this.data = e, this.type.type = ut.ALL, this;
  }
  _ensureHSL() {
    let e = this.data, { h: r, s: o2, l: n2 } = e;
    r === void 0 && (e.h = /* @__PURE__ */ q.channel.rgb2hsl(e, "h")), o2 === void 0 && (e.s = /* @__PURE__ */ q.channel.rgb2hsl(e, "s")), n2 === void 0 && (e.l = /* @__PURE__ */ q.channel.rgb2hsl(e, "l"));
  }
  _ensureRGB() {
    let e = this.data, { r, g: o2, b: n2 } = e;
    r === void 0 && (e.r = /* @__PURE__ */ q.channel.hsl2rgb(e, "r")), o2 === void 0 && (e.g = /* @__PURE__ */ q.channel.hsl2rgb(e, "g")), n2 === void 0 && (e.b = /* @__PURE__ */ q.channel.hsl2rgb(e, "b"));
  }
  get r() {
    let e = this.data, r = e.r;
    return !this.type.is(ut.HSL) && r !== void 0 ? r : (this._ensureHSL(), q.channel.hsl2rgb(e, "r"));
  }
  get g() {
    let e = this.data, r = e.g;
    return !this.type.is(ut.HSL) && r !== void 0 ? r : (this._ensureHSL(), q.channel.hsl2rgb(e, "g"));
  }
  get b() {
    let e = this.data, r = e.b;
    return !this.type.is(ut.HSL) && r !== void 0 ? r : (this._ensureHSL(), q.channel.hsl2rgb(e, "b"));
  }
  get h() {
    let e = this.data, r = e.h;
    return !this.type.is(ut.RGB) && r !== void 0 ? r : (this._ensureRGB(), q.channel.rgb2hsl(e, "h"));
  }
  get s() {
    let e = this.data, r = e.s;
    return !this.type.is(ut.RGB) && r !== void 0 ? r : (this._ensureRGB(), q.channel.rgb2hsl(e, "s"));
  }
  get l() {
    let e = this.data, r = e.l;
    return !this.type.is(ut.RGB) && r !== void 0 ? r : (this._ensureRGB(), q.channel.rgb2hsl(e, "l"));
  }
  get a() {
    return this.data.a;
  }
  set r(e) {
    this.type.set(ut.RGB), this.changed = true, this.data.r = e;
  }
  set g(e) {
    this.type.set(ut.RGB), this.changed = true, this.data.g = e;
  }
  set b(e) {
    this.type.set(ut.RGB), this.changed = true, this.data.b = e;
  }
  set h(e) {
    this.type.set(ut.HSL), this.changed = true, this.data.h = e;
  }
  set s(e) {
    this.type.set(ut.HSL), this.changed = true, this.data.s = e;
  }
  set l(e) {
    this.type.set(ut.HSL), this.changed = true, this.data.l = e;
  }
  set a(e) {
    this.changed = true, this.data.a = e;
  }
}, __3 = new WeakMap(), __privateAdd(_c2, __3, m$1(_c2, "Channels")), _c2), el = Ho;
var yu = new el({
  r: 0,
  g: 0,
  b: 0,
  a: 0
}, "transparent"), de = yu;
var rl = {
  re: /^#((?:[a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i,
  parse: /* @__PURE__ */ m$1((t9) => {
    if (t9.charCodeAt(0) !== 35) return;
    let e = /* @__PURE__ */ t9.match(rl.re);
    if (!e) return;
    let r = e[1], o2 = /* @__PURE__ */ parseInt(r, 16), n2 = r.length, s = n2 % 4 === 0, a = n2 > 4, l = a ? 1 : 17, c = a ? 8 : 4, h = s ? 0 : -1, u = a ? 255 : 15;
    return de.set({
      r: (o2 >> c * (h + 3) & u) * l,
      g: (o2 >> c * (h + 2) & u) * l,
      b: (o2 >> c * (h + 1) & u) * l,
      a: s ? (o2 & u) * l / 255 : 1
    }, t9);
  }, "parse"),
  stringify: /* @__PURE__ */ m$1((t9) => {
    let { r: e, g: r, b: o2, a: n2 } = t9;
    return n2 < 1 ? `#${ne[Math.round(e)]}${ne[Math.round(r)]}${ne[Math.round(o2)]}${ne[Math.round(n2 * 255)]}` : `#${ne[Math.round(e)]}${ne[Math.round(r)]}${ne[Math.round(o2)]}`;
  }, "stringify")
}, Ae = rl;
var Si = {
  re: /^hsla?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(?:deg|grad|rad|turn)?)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(%)?))?\s*?\)$/i,
  hueRe: /^(.+?)(deg|grad|rad|turn)$/i,
  _hue2deg: /* @__PURE__ */ m$1((t9) => {
    let e = /* @__PURE__ */ t9.match(Si.hueRe);
    if (e) {
      let [, r, o2] = e;
      switch (o2) {
        case "grad":
          return q.channel.clamp.h(parseFloat(r) * 0.9);
        case "rad":
          return q.channel.clamp.h(parseFloat(r) * 180 / Math.PI);
        case "turn":
          return q.channel.clamp.h(parseFloat(r) * 360);
      }
    }
    return q.channel.clamp.h(/* @__PURE__ */ parseFloat(t9));
  }, "_hue2deg"),
  parse: /* @__PURE__ */ m$1((t9) => {
    let e = /* @__PURE__ */ t9.charCodeAt(0);
    if (e !== 104 && e !== 72) return;
    let r = /* @__PURE__ */ t9.match(Si.re);
    if (!r) return;
    let [, o2, n2, s, a, l] = r;
    return de.set({
      h: /* @__PURE__ */ Si._hue2deg(o2),
      s: /* @__PURE__ */ q.channel.clamp.s(/* @__PURE__ */ parseFloat(n2)),
      l: /* @__PURE__ */ q.channel.clamp.l(/* @__PURE__ */ parseFloat(s)),
      a: a ? q.channel.clamp.a(l ? parseFloat(a) / 100 : parseFloat(a)) : 1
    }, t9);
  }, "parse"),
  stringify: /* @__PURE__ */ m$1((t9) => {
    let { h: e, s: r, l: o2, a: n2 } = t9;
    return n2 < 1 ? `hsla(${q.lang.round(e)}, ${q.lang.round(r)}%, ${q.lang.round(o2)}%, ${n2})` : `hsl(${q.lang.round(e)}, ${q.lang.round(r)}%, ${q.lang.round(o2)}%)`;
  }, "stringify")
}, Fr = Si;
var vi = {
  colors: {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyanaqua: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    transparent: "#00000000",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  },
  parse: /* @__PURE__ */ m$1((t9) => {
    t9 = /* @__PURE__ */ t9.toLowerCase();
    let e = vi.colors[t9];
    if (e) return Ae.parse(e);
  }, "parse"),
  stringify: /* @__PURE__ */ m$1((t9) => {
    let e = /* @__PURE__ */ Ae.stringify(t9);
    for (let r in vi.colors) if (vi.colors[r] === e) return r;
  }, "stringify")
}, Uo = vi;
var il = {
  re: /^rgba?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?)))?\s*?\)$/i,
  parse: /* @__PURE__ */ m$1((t9) => {
    let e = /* @__PURE__ */ t9.charCodeAt(0);
    if (e !== 114 && e !== 82) return;
    let r = /* @__PURE__ */ t9.match(il.re);
    if (!r) return;
    let [, o2, n2, s, a, l, c, h, u] = r;
    return de.set({
      r: /* @__PURE__ */ q.channel.clamp.r(n2 ? parseFloat(o2) * 2.55 : parseFloat(o2)),
      g: /* @__PURE__ */ q.channel.clamp.g(a ? parseFloat(s) * 2.55 : parseFloat(s)),
      b: /* @__PURE__ */ q.channel.clamp.b(c ? parseFloat(l) * 2.55 : parseFloat(l)),
      a: h ? q.channel.clamp.a(u ? parseFloat(h) / 100 : parseFloat(h)) : 1
    }, t9);
  }, "parse"),
  stringify: /* @__PURE__ */ m$1((t9) => {
    let { r: e, g: r, b: o2, a: n2 } = t9;
    return n2 < 1 ? `rgba(${q.lang.round(e)}, ${q.lang.round(r)}, ${q.lang.round(o2)}, ${q.lang.round(n2)})` : `rgb(${q.lang.round(e)}, ${q.lang.round(r)}, ${q.lang.round(o2)})`;
  }, "stringify")
}, Mr = il;
var Cu = {
  format: {
    keyword: Uo,
    hex: Ae,
    rgb: Mr,
    rgba: Mr,
    hsl: Fr,
    hsla: Fr
  },
  parse: /* @__PURE__ */ m$1((t9) => {
    if (typeof t9 != "string") return t9;
    let e = Ae.parse(t9) || Mr.parse(t9) || Fr.parse(t9) || Uo.parse(t9);
    if (e) return e;
    throw new Error(`Unsupported color format: "${t9}"`);
  }, "parse"),
  stringify: /* @__PURE__ */ m$1((t9) => !t9.changed && t9.color ? t9.color : t9.type.is(ut.HSL) || t9.data.r === void 0 ? Fr.stringify(t9) : t9.a < 1 || !Number.isInteger(t9.r) || !Number.isInteger(t9.g) || !Number.isInteger(t9.b) ? Mr.stringify(t9) : Ae.stringify(t9), "stringify")
}, ft = Cu;
var _u = /* @__PURE__ */ m$1((t9, e) => {
  let r = /* @__PURE__ */ ft.parse(t9);
  for (let o2 in e) r[o2] = /* @__PURE__ */ q.channel.clamp[o2](e[o2]);
  return ft.stringify(r);
}, "change"), wi = _u;
var bu = /* @__PURE__ */ m$1(function(t9, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, o2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
  if (typeof t9 != "number") return wi(t9, {
    a: e
  });
  let n2 = /* @__PURE__ */ de.set({
    r: /* @__PURE__ */ q.channel.clamp.r(t9),
    g: /* @__PURE__ */ q.channel.clamp.g(e),
    b: /* @__PURE__ */ q.channel.clamp.b(r),
    a: /* @__PURE__ */ q.channel.clamp.a(o2)
  });
  return ft.stringify(n2);
}, "rgba"), se = bu;
var Tu = /* @__PURE__ */ m$1((t9, e) => q.lang.round(ft.parse(t9)[e]), "channel"), ku = Tu;
var Su = /* @__PURE__ */ m$1((t9) => {
  let { r: e, g: r, b: o2 } = ft.parse(t9), n2 = 0.2126 * q.channel.toLinear(e) + 0.7152 * q.channel.toLinear(r) + 0.0722 * q.channel.toLinear(o2);
  return q.lang.round(n2);
}, "luminance"), ol = Su;
var vu = /* @__PURE__ */ m$1((t9) => ol(t9) >= 0.5, "isLight"), nl = vu;
var wu = /* @__PURE__ */ m$1((t9) => !nl(t9), "isDark"), Wt = wu;
var Bu = /* @__PURE__ */ m$1((t9, e, r) => {
  let o2 = /* @__PURE__ */ ft.parse(t9), n2 = o2[e], s = /* @__PURE__ */ q.channel.clamp[e](n2 + r);
  return n2 !== s && (o2[e] = s), ft.stringify(o2);
}, "adjustChannel"), Bi = Bu;
var Fu = /* @__PURE__ */ m$1((t9, e) => Bi(t9, "l", e), "lighten"), A = Fu;
var Mu = /* @__PURE__ */ m$1((t9, e) => Bi(t9, "l", -e), "darken"), R = Mu;
var Lu = /* @__PURE__ */ m$1((t9, e) => {
  let r = /* @__PURE__ */ ft.parse(t9), o2 = {};
  for (let n2 in e) e[n2] && (o2[n2] = r[n2] + e[n2]);
  return wi(t9, o2);
}, "adjust"), p = Lu;
var Au = /* @__PURE__ */ m$1(function(t9, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 50;
  let { r: o2, g: n2, b: s, a } = ft.parse(t9), { r: l, g: c, b: h, a: u } = ft.parse(e), d = r / 100, f = d * 2 - 1, g = a - u, L = ((f * g === -1 ? f : (f + g) / (1 + f * g)) + 1) / 2, $ = 1 - L, z = o2 * L + l * $, G = n2 * L + c * $, E = s * L + h * $, B = a * d + u * (1 - d);
  return se(z, G, E, B);
}, "mix"), sl = Au;
var Eu = /* @__PURE__ */ m$1(function(t9) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
  let r = /* @__PURE__ */ ft.parse(t9);
  return r.r = 255 - r.r, r.g = 255 - r.g, r.b = 255 - r.b, sl(r, t9, e);
}, "invert"), b = Eu;
var ge = "#ffffff", xe = "#f2f2f2";
var ct = /* @__PURE__ */ m$1((t9, e) => e ? p(t9, {
  s: -40,
  l: 10
}) : p(t9, {
  s: -40,
  l: -10
}), "mkBorder");
var Yo = (_d2 = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#fff4dd", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#333", this.THEME_COLOR_LIMIT = 12, this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px";
  }
  updateColors() {
    var _a3, _b2, _c3, _d3, _e3, _f3, _g3, _h3, _i2, _j2, _k2;
    if (this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333"), this.secondaryColor = this.secondaryColor || p(this.primaryColor, {
      h: -120
    }), this.tertiaryColor = this.tertiaryColor || p(this.primaryColor, {
      h: 180,
      l: 5
    }), this.primaryBorderColor = this.primaryBorderColor || ct(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || ct(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || ct(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || ct(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#333", this.secondaryTextColor = this.secondaryTextColor || b(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || b(this.tertiaryColor), this.lineColor = this.lineColor || b(this.background), this.arrowheadColor = this.arrowheadColor || b(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? R(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || R(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || b(this.lineColor), this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || A(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || this.tertiaryColor, this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || p(this.primaryColor, {
      h: 30
    }), this.cScale4 = this.cScale4 || p(this.primaryColor, {
      h: 60
    }), this.cScale5 = this.cScale5 || p(this.primaryColor, {
      h: 90
    }), this.cScale6 = this.cScale6 || p(this.primaryColor, {
      h: 120
    }), this.cScale7 = this.cScale7 || p(this.primaryColor, {
      h: 150
    }), this.cScale8 = this.cScale8 || p(this.primaryColor, {
      h: 210,
      l: 150
    }), this.cScale9 = this.cScale9 || p(this.primaryColor, {
      h: 270
    }), this.cScale10 = this.cScale10 || p(this.primaryColor, {
      h: 300
    }), this.cScale11 = this.cScale11 || p(this.primaryColor, {
      h: 330
    }), this.darkMode) for (let r = 0; r < this.THEME_COLOR_LIMIT; r++) this["cScale" + r] = /* @__PURE__ */ R(this["cScale" + r], 75);
    else for (let r = 0; r < this.THEME_COLOR_LIMIT; r++) this["cScale" + r] = /* @__PURE__ */ R(this["cScale" + r], 25);
    for (let r = 0; r < this.THEME_COLOR_LIMIT; r++) this["cScaleInv" + r] = this["cScaleInv" + r] || b(this["cScale" + r]);
    for (let r = 0; r < this.THEME_COLOR_LIMIT; r++) this.darkMode ? this["cScalePeer" + r] = this["cScalePeer" + r] || A(this["cScale" + r], 10) : this["cScalePeer" + r] = this["cScalePeer" + r] || R(this["cScale" + r], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let r = 0; r < this.THEME_COLOR_LIMIT; r++) this["cScaleLabel" + r] = this["cScaleLabel" + r] || this.scaleLabelColor;
    let e = this.darkMode ? -4 : -1;
    for (let r = 0; r < 5; r++) this["surface" + r] = this["surface" + r] || p(this.mainBkg, {
      h: 180,
      s: -15,
      l: e * (5 + r * 3)
    }), this["surfacePeer" + r] = this["surfacePeer" + r] || p(this.mainBkg, {
      h: 180,
      s: -15,
      l: e * (8 + r * 3)
    });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || p(this.primaryColor, {
      h: 64
    }), this.fillType3 = this.fillType3 || p(this.secondaryColor, {
      h: 64
    }), this.fillType4 = this.fillType4 || p(this.primaryColor, {
      h: -64
    }), this.fillType5 = this.fillType5 || p(this.secondaryColor, {
      h: -64
    }), this.fillType6 = this.fillType6 || p(this.primaryColor, {
      h: 128
    }), this.fillType7 = this.fillType7 || p(this.secondaryColor, {
      h: 128
    }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || p(this.primaryColor, {
      l: -10
    }), this.pie5 = this.pie5 || p(this.secondaryColor, {
      l: -10
    }), this.pie6 = this.pie6 || p(this.tertiaryColor, {
      l: -10
    }), this.pie7 = this.pie7 || p(this.primaryColor, {
      h: 60,
      l: -10
    }), this.pie8 = this.pie8 || p(this.primaryColor, {
      h: -60,
      l: -10
    }), this.pie9 = this.pie9 || p(this.primaryColor, {
      h: 120,
      l: 0
    }), this.pie10 = this.pie10 || p(this.primaryColor, {
      h: 60,
      l: -20
    }), this.pie11 = this.pie11 || p(this.primaryColor, {
      h: -60,
      l: -20
    }), this.pie12 = this.pie12 || p(this.primaryColor, {
      h: 120,
      l: -10
    }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.archEdgeColor = this.archEdgeColor || "#777", this.archEdgeArrowColor = this.archEdgeArrowColor || "#777", this.archEdgeWidth = this.archEdgeWidth || "3", this.archGroupBorderColor = this.archGroupBorderColor || "#000", this.archGroupBorderWidth = this.archGroupBorderWidth || "2px", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || p(this.primaryColor, {
      r: 5,
      g: 5,
      b: 5
    }), this.quadrant3Fill = this.quadrant3Fill || p(this.primaryColor, {
      r: 10,
      g: 10,
      b: 10
    }), this.quadrant4Fill = this.quadrant4Fill || p(this.primaryColor, {
      r: 15,
      g: 15,
      b: 15
    }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || p(this.primaryTextColor, {
      r: -5,
      g: -5,
      b: -5
    }), this.quadrant3TextFill = this.quadrant3TextFill || p(this.primaryTextColor, {
      r: -10,
      g: -10,
      b: -10
    }), this.quadrant4TextFill = this.quadrant4TextFill || p(this.primaryTextColor, {
      r: -15,
      g: -15,
      b: -15
    }), this.quadrantPointFill = this.quadrantPointFill || Wt(this.quadrant1Fill) ? A(this.quadrant1Fill) : R(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((_a3 = this.xyChart) == null ? void 0 : _a3.backgroundColor) || this.background,
      titleColor: ((_b2 = this.xyChart) == null ? void 0 : _b2.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((_c3 = this.xyChart) == null ? void 0 : _c3.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((_d3 = this.xyChart) == null ? void 0 : _d3.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((_e3 = this.xyChart) == null ? void 0 : _e3.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((_f3 = this.xyChart) == null ? void 0 : _f3.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((_g3 = this.xyChart) == null ? void 0 : _g3.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((_h3 = this.xyChart) == null ? void 0 : _h3.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((_i2 = this.xyChart) == null ? void 0 : _i2.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((_j2 = this.xyChart) == null ? void 0 : _j2.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((_k2 = this.xyChart) == null ? void 0 : _k2.plotColorPalette) || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? R(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || p(this.primaryColor, {
      h: -30
    }), this.git4 = this.git4 || p(this.primaryColor, {
      h: -60
    }), this.git5 = this.git5 || p(this.primaryColor, {
      h: -90
    }), this.git6 = this.git6 || p(this.primaryColor, {
      h: 60
    }), this.git7 = this.git7 || p(this.primaryColor, {
      h: 120
    }), this.darkMode ? (this.git0 = /* @__PURE__ */ A(this.git0, 25), this.git1 = /* @__PURE__ */ A(this.git1, 25), this.git2 = /* @__PURE__ */ A(this.git2, 25), this.git3 = /* @__PURE__ */ A(this.git3, 25), this.git4 = /* @__PURE__ */ A(this.git4, 25), this.git5 = /* @__PURE__ */ A(this.git5, 25), this.git6 = /* @__PURE__ */ A(this.git6, 25), this.git7 = /* @__PURE__ */ A(this.git7, 25)) : (this.git0 = /* @__PURE__ */ R(this.git0, 25), this.git1 = /* @__PURE__ */ R(this.git1, 25), this.git2 = /* @__PURE__ */ R(this.git2, 25), this.git3 = /* @__PURE__ */ R(this.git3, 25), this.git4 = /* @__PURE__ */ R(this.git4, 25), this.git5 = /* @__PURE__ */ R(this.git5, 25), this.git6 = /* @__PURE__ */ R(this.git6, 25), this.git7 = /* @__PURE__ */ R(this.git7, 25)), this.gitInv0 = this.gitInv0 || b(this.git0), this.gitInv1 = this.gitInv1 || b(this.git1), this.gitInv2 = this.gitInv2 || b(this.git2), this.gitInv3 = this.gitInv3 || b(this.git3), this.gitInv4 = this.gitInv4 || b(this.git4), this.gitInv5 = this.gitInv5 || b(this.git5), this.gitInv6 = this.gitInv6 || b(this.git6), this.gitInv7 = this.gitInv7 || b(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || ge, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || xe;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    let r = /* @__PURE__ */ Object.keys(e);
    r.forEach((o2) => {
      this[o2] = e[o2];
    }), this.updateColors(), r.forEach((o2) => {
      this[o2] = e[o2];
    });
  }
}, __4 = new WeakMap(), __privateAdd(_d2, __4, m$1(_d2, "Theme")), _d2), al = /* @__PURE__ */ m$1((t9) => {
  let e = new Yo();
  return e.calculate(t9), e;
}, "getThemeVariables");
var Go = (_e2 = class {
  constructor() {
    this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = /* @__PURE__ */ A(this.primaryColor, 16), this.tertiaryColor = /* @__PURE__ */ p(this.primaryColor, {
      h: -160
    }), this.primaryBorderColor = /* @__PURE__ */ b(this.background), this.secondaryBorderColor = /* @__PURE__ */ ct(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = /* @__PURE__ */ ct(this.tertiaryColor, this.darkMode), this.primaryTextColor = /* @__PURE__ */ b(this.primaryColor), this.secondaryTextColor = /* @__PURE__ */ b(this.secondaryColor), this.tertiaryTextColor = /* @__PURE__ */ b(this.tertiaryColor), this.lineColor = /* @__PURE__ */ b(this.background), this.textColor = /* @__PURE__ */ b(this.background), this.mainBkg = "#1f2020", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = /* @__PURE__ */ A(/* @__PURE__ */ b("#323D47"), 10), this.lineColor = "calculated", this.border1 = "#ccc", this.border2 = /* @__PURE__ */ se(255, 255, 255, 0.25), this.arrowheadColor = "calculated", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "#181818", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#F9FFFE", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "calculated", this.activationBkgColor = "calculated", this.sequenceNumberColor = "black", this.sectionBkgColor = /* @__PURE__ */ R("#EAE8D9", 30), this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "#EAE8D9", this.excludeBkgColor = /* @__PURE__ */ R(this.sectionBkgColor, 10), this.taskBorderColor = /* @__PURE__ */ se(255, 255, 255, 70), this.taskBkgColor = "calculated", this.taskTextColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = /* @__PURE__ */ se(255, 255, 255, 50), this.activeTaskBkgColor = "#81B1DB", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "grey", this.critBorderColor = "#E83737", this.critBkgColor = "#E83737", this.taskTextDarkColor = "calculated", this.todayLineColor = "#DB5757", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.labelColor = "calculated", this.errorBkgColor = "#a44141", this.errorTextColor = "#ddd";
  }
  updateColors() {
    var _a3, _b2, _c3, _d3, _e3, _f3, _g3, _h3, _i2, _j2, _k2;
    this.secondBkg = /* @__PURE__ */ A(this.mainBkg, 16), this.lineColor = this.mainContrastColor, this.arrowheadColor = this.mainContrastColor, this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.edgeLabelBackground = /* @__PURE__ */ A(this.labelBackground, 25), this.actorBorder = this.border1, this.actorBkg = this.mainBkg, this.actorTextColor = this.mainContrastColor, this.actorLineColor = this.actorBorder, this.signalColor = this.mainContrastColor, this.signalTextColor = this.mainContrastColor, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.mainContrastColor, this.loopTextColor = this.mainContrastColor, this.noteBorderColor = this.secondaryBorderColor, this.noteBkgColor = this.secondBkg, this.noteTextColor = this.secondaryTextColor, this.activationBorderColor = this.border1, this.activationBkgColor = this.secondBkg, this.altSectionBkgColor = this.background, this.taskBkgColor = /* @__PURE__ */ A(this.mainBkg, 23), this.taskTextColor = this.darkTextColor, this.taskTextLightColor = this.mainContrastColor, this.taskTextOutsideColor = this.taskTextLightColor, this.gridColor = this.mainContrastColor, this.doneTaskBkgColor = this.mainContrastColor, this.taskTextDarkColor = this.darkTextColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#555", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#f4f4f4", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = /* @__PURE__ */ p(this.primaryColor, {
      h: 64
    }), this.fillType3 = /* @__PURE__ */ p(this.secondaryColor, {
      h: 64
    }), this.fillType4 = /* @__PURE__ */ p(this.primaryColor, {
      h: -64
    }), this.fillType5 = /* @__PURE__ */ p(this.secondaryColor, {
      h: -64
    }), this.fillType6 = /* @__PURE__ */ p(this.primaryColor, {
      h: 128
    }), this.fillType7 = /* @__PURE__ */ p(this.secondaryColor, {
      h: 128
    }), this.cScale1 = this.cScale1 || "#0b0000", this.cScale2 = this.cScale2 || "#4d1037", this.cScale3 = this.cScale3 || "#3f5258", this.cScale4 = this.cScale4 || "#4f2f1b", this.cScale5 = this.cScale5 || "#6e0a0a", this.cScale6 = this.cScale6 || "#3b0048", this.cScale7 = this.cScale7 || "#995a01", this.cScale8 = this.cScale8 || "#154706", this.cScale9 = this.cScale9 || "#161722", this.cScale10 = this.cScale10 || "#00296f", this.cScale11 = this.cScale11 || "#01629c", this.cScale12 = this.cScale12 || "#010029", this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || p(this.primaryColor, {
      h: 30
    }), this.cScale4 = this.cScale4 || p(this.primaryColor, {
      h: 60
    }), this.cScale5 = this.cScale5 || p(this.primaryColor, {
      h: 90
    }), this.cScale6 = this.cScale6 || p(this.primaryColor, {
      h: 120
    }), this.cScale7 = this.cScale7 || p(this.primaryColor, {
      h: 150
    }), this.cScale8 = this.cScale8 || p(this.primaryColor, {
      h: 210
    }), this.cScale9 = this.cScale9 || p(this.primaryColor, {
      h: 270
    }), this.cScale10 = this.cScale10 || p(this.primaryColor, {
      h: 300
    }), this.cScale11 = this.cScale11 || p(this.primaryColor, {
      h: 330
    });
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScaleInv" + e] = this["cScaleInv" + e] || b(this["cScale" + e]);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScalePeer" + e] = this["cScalePeer" + e] || A(this["cScale" + e], 10);
    for (let e = 0; e < 5; e++) this["surface" + e] = this["surface" + e] || p(this.mainBkg, {
      h: 30,
      s: -30,
      l: -(-10 + e * 4)
    }), this["surfacePeer" + e] = this["surfacePeer" + e] || p(this.mainBkg, {
      h: 30,
      s: -30,
      l: -(-7 + e * 4)
    });
    this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.scaleLabelColor;
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["pie" + e] = this["cScale" + e];
    this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || p(this.primaryColor, {
      r: 5,
      g: 5,
      b: 5
    }), this.quadrant3Fill = this.quadrant3Fill || p(this.primaryColor, {
      r: 10,
      g: 10,
      b: 10
    }), this.quadrant4Fill = this.quadrant4Fill || p(this.primaryColor, {
      r: 15,
      g: 15,
      b: 15
    }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || p(this.primaryTextColor, {
      r: -5,
      g: -5,
      b: -5
    }), this.quadrant3TextFill = this.quadrant3TextFill || p(this.primaryTextColor, {
      r: -10,
      g: -10,
      b: -10
    }), this.quadrant4TextFill = this.quadrant4TextFill || p(this.primaryTextColor, {
      r: -15,
      g: -15,
      b: -15
    }), this.quadrantPointFill = this.quadrantPointFill || Wt(this.quadrant1Fill) ? A(this.quadrant1Fill) : R(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((_a3 = this.xyChart) == null ? void 0 : _a3.backgroundColor) || this.background,
      titleColor: ((_b2 = this.xyChart) == null ? void 0 : _b2.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((_c3 = this.xyChart) == null ? void 0 : _c3.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((_d3 = this.xyChart) == null ? void 0 : _d3.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((_e3 = this.xyChart) == null ? void 0 : _e3.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((_f3 = this.xyChart) == null ? void 0 : _f3.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((_g3 = this.xyChart) == null ? void 0 : _g3.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((_h3 = this.xyChart) == null ? void 0 : _h3.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((_i2 = this.xyChart) == null ? void 0 : _i2.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((_j2 = this.xyChart) == null ? void 0 : _j2.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((_k2 = this.xyChart) == null ? void 0 : _k2.plotColorPalette) || "#3498db,#2ecc71,#e74c3c,#f1c40f,#bdc3c7,#ffffff,#34495e,#9b59b6,#1abc9c,#e67e22"
    }, this.packet = {
      startByteColor: this.primaryTextColor,
      endByteColor: this.primaryTextColor,
      labelColor: this.primaryTextColor,
      titleColor: this.primaryTextColor,
      blockStrokeColor: this.primaryTextColor,
      blockFillColor: this.background
    }, this.classText = this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? R(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = /* @__PURE__ */ A(this.secondaryColor, 20), this.git1 = /* @__PURE__ */ A(this.pie2 || this.secondaryColor, 20), this.git2 = /* @__PURE__ */ A(this.pie3 || this.tertiaryColor, 20), this.git3 = /* @__PURE__ */ A(this.pie4 || p(this.primaryColor, {
      h: -30
    }), 20), this.git4 = /* @__PURE__ */ A(this.pie5 || p(this.primaryColor, {
      h: -60
    }), 20), this.git5 = /* @__PURE__ */ A(this.pie6 || p(this.primaryColor, {
      h: -90
    }), 10), this.git6 = /* @__PURE__ */ A(this.pie7 || p(this.primaryColor, {
      h: 60
    }), 10), this.git7 = /* @__PURE__ */ A(this.pie8 || p(this.primaryColor, {
      h: 120
    }), 20), this.gitInv0 = this.gitInv0 || b(this.git0), this.gitInv1 = this.gitInv1 || b(this.git1), this.gitInv2 = this.gitInv2 || b(this.git2), this.gitInv3 = this.gitInv3 || b(this.git3), this.gitInv4 = this.gitInv4 || b(this.git4), this.gitInv5 = this.gitInv5 || b(this.git5), this.gitInv6 = this.gitInv6 || b(this.git6), this.gitInv7 = this.gitInv7 || b(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || b(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || b(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || A(this.background, 12), this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || A(this.background, 2), this.nodeBorder = this.nodeBorder || "#999";
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    let r = /* @__PURE__ */ Object.keys(e);
    r.forEach((o2) => {
      this[o2] = e[o2];
    }), this.updateColors(), r.forEach((o2) => {
      this[o2] = e[o2];
    });
  }
}, __5 = new WeakMap(), __privateAdd(_e2, __5, m$1(_e2, "Theme")), _e2), ll = /* @__PURE__ */ m$1((t9) => {
  let e = new Go();
  return e.calculate(t9), e;
}, "getThemeVariables");
var Vo = (_f2 = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#ECECFF", this.secondaryColor = /* @__PURE__ */ p(this.primaryColor, {
      h: 120
    }), this.secondaryColor = "#ffffde", this.tertiaryColor = /* @__PURE__ */ p(this.primaryColor, {
      h: -160
    }), this.primaryBorderColor = /* @__PURE__ */ ct(this.primaryColor, this.darkMode), this.secondaryBorderColor = /* @__PURE__ */ ct(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = /* @__PURE__ */ ct(this.tertiaryColor, this.darkMode), this.primaryTextColor = /* @__PURE__ */ b(this.primaryColor), this.secondaryTextColor = /* @__PURE__ */ b(this.secondaryColor), this.tertiaryTextColor = /* @__PURE__ */ b(this.tertiaryColor), this.lineColor = /* @__PURE__ */ b(this.background), this.textColor = /* @__PURE__ */ b(this.background), this.background = "white", this.mainBkg = "#ECECFF", this.secondBkg = "#ffffde", this.lineColor = "#333333", this.border1 = "#9370DB", this.border2 = "#aaaa33", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "rgba(232,232,232, 0.8)", this.textColor = "#333", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = this.taskTextDarkColor, this.taskTextClickableColor = "calculated", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBorderColor = "calculated", this.critBkgColor = "calculated", this.todayLineColor = "calculated", this.sectionBkgColor = /* @__PURE__ */ se(102, 102, 255, 0.49), this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#fff400", this.taskBorderColor = "#534fbc", this.taskBkgColor = "#8a90dd", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "#534fbc", this.activeTaskBkgColor = "#bfc7ff", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222", this.updateColors();
  }
  updateColors() {
    var _a3, _b2, _c3, _d3, _e3, _f3, _g3, _h3, _i2, _j2, _k2;
    this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || p(this.primaryColor, {
      h: 30
    }), this.cScale4 = this.cScale4 || p(this.primaryColor, {
      h: 60
    }), this.cScale5 = this.cScale5 || p(this.primaryColor, {
      h: 90
    }), this.cScale6 = this.cScale6 || p(this.primaryColor, {
      h: 120
    }), this.cScale7 = this.cScale7 || p(this.primaryColor, {
      h: 150
    }), this.cScale8 = this.cScale8 || p(this.primaryColor, {
      h: 210
    }), this.cScale9 = this.cScale9 || p(this.primaryColor, {
      h: 270
    }), this.cScale10 = this.cScale10 || p(this.primaryColor, {
      h: 300
    }), this.cScale11 = this.cScale11 || p(this.primaryColor, {
      h: 330
    }), this.cScalePeer1 = this.cScalePeer1 || R(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || R(this.tertiaryColor, 40);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScale" + e] = /* @__PURE__ */ R(this["cScale" + e], 10), this["cScalePeer" + e] = this["cScalePeer" + e] || R(this["cScale" + e], 25);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScaleInv" + e] = this["cScaleInv" + e] || p(this["cScale" + e], {
      h: 180
    });
    for (let e = 0; e < 5; e++) this["surface" + e] = this["surface" + e] || p(this.mainBkg, {
      h: 30,
      l: -(5 + e * 5)
    }), this["surfacePeer" + e] = this["surfacePeer" + e] || p(this.mainBkg, {
      h: 30,
      l: -(7 + e * 5)
    });
    if (this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor, this.labelTextColor !== "calculated") {
      this.cScaleLabel0 = this.cScaleLabel0 || b(this.labelTextColor), this.cScaleLabel3 = this.cScaleLabel3 || b(this.labelTextColor);
      for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.labelTextColor;
    }
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.textColor, this.edgeLabelBackground = this.labelBackground, this.actorBorder = /* @__PURE__ */ A(this.border1, 23), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.signalColor = this.textColor, this.signalTextColor = this.textColor, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.actorLineColor = this.actorBorder, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = /* @__PURE__ */ p(this.primaryColor, {
      h: 64
    }), this.fillType3 = /* @__PURE__ */ p(this.secondaryColor, {
      h: 64
    }), this.fillType4 = /* @__PURE__ */ p(this.primaryColor, {
      h: -64
    }), this.fillType5 = /* @__PURE__ */ p(this.secondaryColor, {
      h: -64
    }), this.fillType6 = /* @__PURE__ */ p(this.primaryColor, {
      h: 128
    }), this.fillType7 = /* @__PURE__ */ p(this.secondaryColor, {
      h: 128
    }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || p(this.tertiaryColor, {
      l: -40
    }), this.pie4 = this.pie4 || p(this.primaryColor, {
      l: -10
    }), this.pie5 = this.pie5 || p(this.secondaryColor, {
      l: -30
    }), this.pie6 = this.pie6 || p(this.tertiaryColor, {
      l: -20
    }), this.pie7 = this.pie7 || p(this.primaryColor, {
      h: 60,
      l: -20
    }), this.pie8 = this.pie8 || p(this.primaryColor, {
      h: -60,
      l: -40
    }), this.pie9 = this.pie9 || p(this.primaryColor, {
      h: 120,
      l: -40
    }), this.pie10 = this.pie10 || p(this.primaryColor, {
      h: 60,
      l: -40
    }), this.pie11 = this.pie11 || p(this.primaryColor, {
      h: -90,
      l: -40
    }), this.pie12 = this.pie12 || p(this.primaryColor, {
      h: 120,
      l: -30
    }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || p(this.primaryColor, {
      r: 5,
      g: 5,
      b: 5
    }), this.quadrant3Fill = this.quadrant3Fill || p(this.primaryColor, {
      r: 10,
      g: 10,
      b: 10
    }), this.quadrant4Fill = this.quadrant4Fill || p(this.primaryColor, {
      r: 15,
      g: 15,
      b: 15
    }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || p(this.primaryTextColor, {
      r: -5,
      g: -5,
      b: -5
    }), this.quadrant3TextFill = this.quadrant3TextFill || p(this.primaryTextColor, {
      r: -10,
      g: -10,
      b: -10
    }), this.quadrant4TextFill = this.quadrant4TextFill || p(this.primaryTextColor, {
      r: -15,
      g: -15,
      b: -15
    }), this.quadrantPointFill = this.quadrantPointFill || Wt(this.quadrant1Fill) ? A(this.quadrant1Fill) : R(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((_a3 = this.xyChart) == null ? void 0 : _a3.backgroundColor) || this.background,
      titleColor: ((_b2 = this.xyChart) == null ? void 0 : _b2.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((_c3 = this.xyChart) == null ? void 0 : _c3.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((_d3 = this.xyChart) == null ? void 0 : _d3.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((_e3 = this.xyChart) == null ? void 0 : _e3.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((_f3 = this.xyChart) == null ? void 0 : _f3.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((_g3 = this.xyChart) == null ? void 0 : _g3.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((_h3 = this.xyChart) == null ? void 0 : _h3.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((_i2 = this.xyChart) == null ? void 0 : _i2.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((_j2 = this.xyChart) == null ? void 0 : _j2.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((_k2 = this.xyChart) == null ? void 0 : _k2.plotColorPalette) || "#ECECFF,#8493A6,#FFC3A0,#DCDDE1,#B8E994,#D1A36F,#C3CDE6,#FFB6C1,#496078,#F8F3E3"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.labelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || p(this.primaryColor, {
      h: -30
    }), this.git4 = this.git4 || p(this.primaryColor, {
      h: -60
    }), this.git5 = this.git5 || p(this.primaryColor, {
      h: -90
    }), this.git6 = this.git6 || p(this.primaryColor, {
      h: 60
    }), this.git7 = this.git7 || p(this.primaryColor, {
      h: 120
    }), this.darkMode ? (this.git0 = /* @__PURE__ */ A(this.git0, 25), this.git1 = /* @__PURE__ */ A(this.git1, 25), this.git2 = /* @__PURE__ */ A(this.git2, 25), this.git3 = /* @__PURE__ */ A(this.git3, 25), this.git4 = /* @__PURE__ */ A(this.git4, 25), this.git5 = /* @__PURE__ */ A(this.git5, 25), this.git6 = /* @__PURE__ */ A(this.git6, 25), this.git7 = /* @__PURE__ */ A(this.git7, 25)) : (this.git0 = /* @__PURE__ */ R(this.git0, 25), this.git1 = /* @__PURE__ */ R(this.git1, 25), this.git2 = /* @__PURE__ */ R(this.git2, 25), this.git3 = /* @__PURE__ */ R(this.git3, 25), this.git4 = /* @__PURE__ */ R(this.git4, 25), this.git5 = /* @__PURE__ */ R(this.git5, 25), this.git6 = /* @__PURE__ */ R(this.git6, 25), this.git7 = /* @__PURE__ */ R(this.git7, 25)), this.gitInv0 = this.gitInv0 || R(/* @__PURE__ */ b(this.git0), 25), this.gitInv1 = this.gitInv1 || b(this.git1), this.gitInv2 = this.gitInv2 || b(this.git2), this.gitInv3 = this.gitInv3 || b(this.git3), this.gitInv4 = this.gitInv4 || b(this.git4), this.gitInv5 = this.gitInv5 || b(this.git5), this.gitInv6 = this.gitInv6 || b(this.git6), this.gitInv7 = this.gitInv7 || b(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || b(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || b(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || ge, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || xe;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    let r = /* @__PURE__ */ Object.keys(e);
    r.forEach((o2) => {
      this[o2] = e[o2];
    }), this.updateColors(), r.forEach((o2) => {
      this[o2] = e[o2];
    });
  }
}, __6 = new WeakMap(), __privateAdd(_f2, __6, m$1(_f2, "Theme")), _f2), hl = /* @__PURE__ */ m$1((t9) => {
  let e = new Vo();
  return e.calculate(t9), e;
}, "getThemeVariables");
var Xo = (_g2 = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#cde498", this.secondaryColor = "#cdffb2", this.background = "white", this.mainBkg = "#cde498", this.secondBkg = "#cdffb2", this.lineColor = "green", this.border1 = "#13540c", this.border2 = "#6eaa49", this.arrowheadColor = "green", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.tertiaryColor = /* @__PURE__ */ A("#cde498", 10), this.primaryBorderColor = /* @__PURE__ */ ct(this.primaryColor, this.darkMode), this.secondaryBorderColor = /* @__PURE__ */ ct(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = /* @__PURE__ */ ct(this.tertiaryColor, this.darkMode), this.primaryTextColor = /* @__PURE__ */ b(this.primaryColor), this.secondaryTextColor = /* @__PURE__ */ b(this.secondaryColor), this.tertiaryTextColor = /* @__PURE__ */ b(this.primaryColor), this.lineColor = /* @__PURE__ */ b(this.background), this.textColor = /* @__PURE__ */ b(this.background), this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#333", this.edgeLabelBackground = "#e8e8e8", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "calculated", this.signalColor = "#333", this.signalTextColor = "#333", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "#326932", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "#6eaa49", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#6eaa49", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "#487e3a", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
  }
  updateColors() {
    var _a3, _b2, _c3, _d3, _e3, _f3, _g3, _h3, _i2, _j2, _k2;
    this.actorBorder = /* @__PURE__ */ R(this.mainBkg, 20), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.actorLineColor = this.actorBorder, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || p(this.primaryColor, {
      h: 30
    }), this.cScale4 = this.cScale4 || p(this.primaryColor, {
      h: 60
    }), this.cScale5 = this.cScale5 || p(this.primaryColor, {
      h: 90
    }), this.cScale6 = this.cScale6 || p(this.primaryColor, {
      h: 120
    }), this.cScale7 = this.cScale7 || p(this.primaryColor, {
      h: 150
    }), this.cScale8 = this.cScale8 || p(this.primaryColor, {
      h: 210
    }), this.cScale9 = this.cScale9 || p(this.primaryColor, {
      h: 270
    }), this.cScale10 = this.cScale10 || p(this.primaryColor, {
      h: 300
    }), this.cScale11 = this.cScale11 || p(this.primaryColor, {
      h: 330
    }), this.cScalePeer1 = this.cScalePeer1 || R(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || R(this.tertiaryColor, 40);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScale" + e] = /* @__PURE__ */ R(this["cScale" + e], 10), this["cScalePeer" + e] = this["cScalePeer" + e] || R(this["cScale" + e], 25);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScaleInv" + e] = this["cScaleInv" + e] || p(this["cScale" + e], {
      h: 180
    });
    this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor;
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.scaleLabelColor;
    for (let e = 0; e < 5; e++) this["surface" + e] = this["surface" + e] || p(this.mainBkg, {
      h: 30,
      s: -30,
      l: -(5 + e * 5)
    }), this["surfacePeer" + e] = this["surfacePeer" + e] || p(this.mainBkg, {
      h: 30,
      s: -30,
      l: -(8 + e * 5)
    });
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.taskBorderColor = this.border1, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = /* @__PURE__ */ p(this.primaryColor, {
      h: 64
    }), this.fillType3 = /* @__PURE__ */ p(this.secondaryColor, {
      h: 64
    }), this.fillType4 = /* @__PURE__ */ p(this.primaryColor, {
      h: -64
    }), this.fillType5 = /* @__PURE__ */ p(this.secondaryColor, {
      h: -64
    }), this.fillType6 = /* @__PURE__ */ p(this.primaryColor, {
      h: 128
    }), this.fillType7 = /* @__PURE__ */ p(this.secondaryColor, {
      h: 128
    }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || p(this.primaryColor, {
      l: -30
    }), this.pie5 = this.pie5 || p(this.secondaryColor, {
      l: -30
    }), this.pie6 = this.pie6 || p(this.tertiaryColor, {
      h: 40,
      l: -40
    }), this.pie7 = this.pie7 || p(this.primaryColor, {
      h: 60,
      l: -10
    }), this.pie8 = this.pie8 || p(this.primaryColor, {
      h: -60,
      l: -10
    }), this.pie9 = this.pie9 || p(this.primaryColor, {
      h: 120,
      l: 0
    }), this.pie10 = this.pie10 || p(this.primaryColor, {
      h: 60,
      l: -50
    }), this.pie11 = this.pie11 || p(this.primaryColor, {
      h: -60,
      l: -50
    }), this.pie12 = this.pie12 || p(this.primaryColor, {
      h: 120,
      l: -50
    }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || p(this.primaryColor, {
      r: 5,
      g: 5,
      b: 5
    }), this.quadrant3Fill = this.quadrant3Fill || p(this.primaryColor, {
      r: 10,
      g: 10,
      b: 10
    }), this.quadrant4Fill = this.quadrant4Fill || p(this.primaryColor, {
      r: 15,
      g: 15,
      b: 15
    }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || p(this.primaryTextColor, {
      r: -5,
      g: -5,
      b: -5
    }), this.quadrant3TextFill = this.quadrant3TextFill || p(this.primaryTextColor, {
      r: -10,
      g: -10,
      b: -10
    }), this.quadrant4TextFill = this.quadrant4TextFill || p(this.primaryTextColor, {
      r: -15,
      g: -15,
      b: -15
    }), this.quadrantPointFill = this.quadrantPointFill || Wt(this.quadrant1Fill) ? A(this.quadrant1Fill) : R(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.packet = {
      startByteColor: this.primaryTextColor,
      endByteColor: this.primaryTextColor,
      labelColor: this.primaryTextColor,
      titleColor: this.primaryTextColor,
      blockStrokeColor: this.primaryTextColor,
      blockFillColor: this.mainBkg
    }, this.xyChart = {
      backgroundColor: ((_a3 = this.xyChart) == null ? void 0 : _a3.backgroundColor) || this.background,
      titleColor: ((_b2 = this.xyChart) == null ? void 0 : _b2.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((_c3 = this.xyChart) == null ? void 0 : _c3.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((_d3 = this.xyChart) == null ? void 0 : _d3.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((_e3 = this.xyChart) == null ? void 0 : _e3.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((_f3 = this.xyChart) == null ? void 0 : _f3.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((_g3 = this.xyChart) == null ? void 0 : _g3.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((_h3 = this.xyChart) == null ? void 0 : _h3.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((_i2 = this.xyChart) == null ? void 0 : _i2.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((_j2 = this.xyChart) == null ? void 0 : _j2.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((_k2 = this.xyChart) == null ? void 0 : _k2.plotColorPalette) || "#CDE498,#FF6B6B,#A0D2DB,#D7BDE2,#F0F0F0,#FFC3A0,#7FD8BE,#FF9A8B,#FAF3E0,#FFF176"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || p(this.primaryColor, {
      h: -30
    }), this.git4 = this.git4 || p(this.primaryColor, {
      h: -60
    }), this.git5 = this.git5 || p(this.primaryColor, {
      h: -90
    }), this.git6 = this.git6 || p(this.primaryColor, {
      h: 60
    }), this.git7 = this.git7 || p(this.primaryColor, {
      h: 120
    }), this.darkMode ? (this.git0 = /* @__PURE__ */ A(this.git0, 25), this.git1 = /* @__PURE__ */ A(this.git1, 25), this.git2 = /* @__PURE__ */ A(this.git2, 25), this.git3 = /* @__PURE__ */ A(this.git3, 25), this.git4 = /* @__PURE__ */ A(this.git4, 25), this.git5 = /* @__PURE__ */ A(this.git5, 25), this.git6 = /* @__PURE__ */ A(this.git6, 25), this.git7 = /* @__PURE__ */ A(this.git7, 25)) : (this.git0 = /* @__PURE__ */ R(this.git0, 25), this.git1 = /* @__PURE__ */ R(this.git1, 25), this.git2 = /* @__PURE__ */ R(this.git2, 25), this.git3 = /* @__PURE__ */ R(this.git3, 25), this.git4 = /* @__PURE__ */ R(this.git4, 25), this.git5 = /* @__PURE__ */ R(this.git5, 25), this.git6 = /* @__PURE__ */ R(this.git6, 25), this.git7 = /* @__PURE__ */ R(this.git7, 25)), this.gitInv0 = this.gitInv0 || b(this.git0), this.gitInv1 = this.gitInv1 || b(this.git1), this.gitInv2 = this.gitInv2 || b(this.git2), this.gitInv3 = this.gitInv3 || b(this.git3), this.gitInv4 = this.gitInv4 || b(this.git4), this.gitInv5 = this.gitInv5 || b(this.git5), this.gitInv6 = this.gitInv6 || b(this.git6), this.gitInv7 = this.gitInv7 || b(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || b(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || b(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || ge, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || xe;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    let r = /* @__PURE__ */ Object.keys(e);
    r.forEach((o2) => {
      this[o2] = e[o2];
    }), this.updateColors(), r.forEach((o2) => {
      this[o2] = e[o2];
    });
  }
}, __7 = new WeakMap(), __privateAdd(_g2, __7, m$1(_g2, "Theme")), _g2), cl = /* @__PURE__ */ m$1((t9) => {
  let e = new Xo();
  return e.calculate(t9), e;
}, "getThemeVariables");
var jo = (_h2 = class {
  constructor() {
    this.primaryColor = "#eee", this.contrast = "#707070", this.secondaryColor = /* @__PURE__ */ A(this.contrast, 55), this.background = "#ffffff", this.tertiaryColor = /* @__PURE__ */ p(this.primaryColor, {
      h: -160
    }), this.primaryBorderColor = /* @__PURE__ */ ct(this.primaryColor, this.darkMode), this.secondaryBorderColor = /* @__PURE__ */ ct(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = /* @__PURE__ */ ct(this.tertiaryColor, this.darkMode), this.primaryTextColor = /* @__PURE__ */ b(this.primaryColor), this.secondaryTextColor = /* @__PURE__ */ b(this.secondaryColor), this.tertiaryTextColor = /* @__PURE__ */ b(this.tertiaryColor), this.lineColor = /* @__PURE__ */ b(this.background), this.textColor = /* @__PURE__ */ b(this.background), this.mainBkg = "#eee", this.secondBkg = "calculated", this.lineColor = "#666", this.border1 = "#999", this.border2 = "calculated", this.note = "#ffa", this.text = "#333", this.critical = "#d42", this.done = "#bbb", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "white", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = this.actorBorder, this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "calculated", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBkgColor = "calculated", this.critBorderColor = "calculated", this.todayLineColor = "calculated", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
  }
  updateColors() {
    var _a3, _b2, _c3, _d3, _e3, _f3, _g3, _h3, _i2, _j2, _k2;
    this.secondBkg = /* @__PURE__ */ A(this.contrast, 55), this.border2 = this.contrast, this.actorBorder = /* @__PURE__ */ A(this.border1, 23), this.actorBkg = this.mainBkg, this.actorTextColor = this.text, this.actorLineColor = this.actorBorder, this.signalColor = this.text, this.signalTextColor = this.text, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.text, this.loopTextColor = this.text, this.noteBorderColor = "#999", this.noteBkgColor = "#666", this.noteTextColor = "#fff", this.cScale0 = this.cScale0 || "#555", this.cScale1 = this.cScale1 || "#F4F4F4", this.cScale2 = this.cScale2 || "#555", this.cScale3 = this.cScale3 || "#BBB", this.cScale4 = this.cScale4 || "#777", this.cScale5 = this.cScale5 || "#999", this.cScale6 = this.cScale6 || "#DDD", this.cScale7 = this.cScale7 || "#FFF", this.cScale8 = this.cScale8 || "#DDD", this.cScale9 = this.cScale9 || "#BBB", this.cScale10 = this.cScale10 || "#999", this.cScale11 = this.cScale11 || "#777";
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScaleInv" + e] = this["cScaleInv" + e] || b(this["cScale" + e]);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this.darkMode ? this["cScalePeer" + e] = this["cScalePeer" + e] || A(this["cScale" + e], 10) : this["cScalePeer" + e] = this["cScalePeer" + e] || R(this["cScale" + e], 10);
    this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.cScaleLabel0 = this.cScaleLabel0 || this.cScale1, this.cScaleLabel2 = this.cScaleLabel2 || this.cScale1;
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.scaleLabelColor;
    for (let e = 0; e < 5; e++) this["surface" + e] = this["surface" + e] || p(this.mainBkg, {
      l: -(5 + e * 5)
    }), this["surfacePeer" + e] = this["surfacePeer" + e] || p(this.mainBkg, {
      l: -(8 + e * 5)
    });
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.text, this.sectionBkgColor = /* @__PURE__ */ A(this.contrast, 30), this.sectionBkgColor2 = /* @__PURE__ */ A(this.contrast, 30), this.taskBorderColor = /* @__PURE__ */ R(this.contrast, 10), this.taskBkgColor = this.contrast, this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = this.text, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.gridColor = /* @__PURE__ */ A(this.border1, 30), this.doneTaskBkgColor = this.done, this.doneTaskBorderColor = this.lineColor, this.critBkgColor = this.critical, this.critBorderColor = /* @__PURE__ */ R(this.critBkgColor, 10), this.todayLineColor = this.critBkgColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.transitionColor = this.transitionColor || "#000", this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f4f4f4", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.stateBorder = this.stateBorder || "#000", this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#222", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = /* @__PURE__ */ p(this.primaryColor, {
      h: 64
    }), this.fillType3 = /* @__PURE__ */ p(this.secondaryColor, {
      h: 64
    }), this.fillType4 = /* @__PURE__ */ p(this.primaryColor, {
      h: -64
    }), this.fillType5 = /* @__PURE__ */ p(this.secondaryColor, {
      h: -64
    }), this.fillType6 = /* @__PURE__ */ p(this.primaryColor, {
      h: 128
    }), this.fillType7 = /* @__PURE__ */ p(this.secondaryColor, {
      h: 128
    });
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["pie" + e] = this["cScale" + e];
    this.pie12 = this.pie0, this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || p(this.primaryColor, {
      r: 5,
      g: 5,
      b: 5
    }), this.quadrant3Fill = this.quadrant3Fill || p(this.primaryColor, {
      r: 10,
      g: 10,
      b: 10
    }), this.quadrant4Fill = this.quadrant4Fill || p(this.primaryColor, {
      r: 15,
      g: 15,
      b: 15
    }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || p(this.primaryTextColor, {
      r: -5,
      g: -5,
      b: -5
    }), this.quadrant3TextFill = this.quadrant3TextFill || p(this.primaryTextColor, {
      r: -10,
      g: -10,
      b: -10
    }), this.quadrant4TextFill = this.quadrant4TextFill || p(this.primaryTextColor, {
      r: -15,
      g: -15,
      b: -15
    }), this.quadrantPointFill = this.quadrantPointFill || Wt(this.quadrant1Fill) ? A(this.quadrant1Fill) : R(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((_a3 = this.xyChart) == null ? void 0 : _a3.backgroundColor) || this.background,
      titleColor: ((_b2 = this.xyChart) == null ? void 0 : _b2.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((_c3 = this.xyChart) == null ? void 0 : _c3.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((_d3 = this.xyChart) == null ? void 0 : _d3.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((_e3 = this.xyChart) == null ? void 0 : _e3.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((_f3 = this.xyChart) == null ? void 0 : _f3.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((_g3 = this.xyChart) == null ? void 0 : _g3.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((_h3 = this.xyChart) == null ? void 0 : _h3.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((_i2 = this.xyChart) == null ? void 0 : _i2.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((_j2 = this.xyChart) == null ? void 0 : _j2.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((_k2 = this.xyChart) == null ? void 0 : _k2.plotColorPalette) || "#EEE,#6BB8E4,#8ACB88,#C7ACD6,#E8DCC2,#FFB2A8,#FFF380,#7E8D91,#FFD8B1,#FAF3E0"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = R(this.pie1, 25) || this.primaryColor, this.git1 = this.pie2 || this.secondaryColor, this.git2 = this.pie3 || this.tertiaryColor, this.git3 = this.pie4 || p(this.primaryColor, {
      h: -30
    }), this.git4 = this.pie5 || p(this.primaryColor, {
      h: -60
    }), this.git5 = this.pie6 || p(this.primaryColor, {
      h: -90
    }), this.git6 = this.pie7 || p(this.primaryColor, {
      h: 60
    }), this.git7 = this.pie8 || p(this.primaryColor, {
      h: 120
    }), this.gitInv0 = this.gitInv0 || b(this.git0), this.gitInv1 = this.gitInv1 || b(this.git1), this.gitInv2 = this.gitInv2 || b(this.git2), this.gitInv3 = this.gitInv3 || b(this.git3), this.gitInv4 = this.gitInv4 || b(this.git4), this.gitInv5 = this.gitInv5 || b(this.git5), this.gitInv6 = this.gitInv6 || b(this.git6), this.gitInv7 = this.gitInv7 || b(this.git7), this.branchLabelColor = this.branchLabelColor || this.labelTextColor, this.gitBranchLabel0 = this.branchLabelColor, this.gitBranchLabel1 = "white", this.gitBranchLabel2 = this.branchLabelColor, this.gitBranchLabel3 = "white", this.gitBranchLabel4 = this.branchLabelColor, this.gitBranchLabel5 = this.branchLabelColor, this.gitBranchLabel6 = this.branchLabelColor, this.gitBranchLabel7 = this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || ge, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || xe;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    let r = /* @__PURE__ */ Object.keys(e);
    r.forEach((o2) => {
      this[o2] = e[o2];
    }), this.updateColors(), r.forEach((o2) => {
      this[o2] = e[o2];
    });
  }
}, __8 = new WeakMap(), __privateAdd(_h2, __8, m$1(_h2, "Theme")), _h2), ul = /* @__PURE__ */ m$1((t9) => {
  let e = new jo();
  return e.calculate(t9), e;
}, "getThemeVariables");
var ye = {
  base: {
    getThemeVariables: al
  },
  dark: {
    getThemeVariables: ll
  },
  default: {
    getThemeVariables: hl
  },
  forest: {
    getThemeVariables: cl
  },
  neutral: {
    getThemeVariables: ul
  }
};
var ae = {
  flowchart: {
    useMaxWidth: true,
    titleTopMargin: 25,
    subGraphTitleMargin: {
      top: 0,
      bottom: 0
    },
    diagramPadding: 8,
    htmlLabels: true,
    nodeSpacing: 50,
    rankSpacing: 50,
    curve: "basis",
    padding: 15,
    defaultRenderer: "dagre-wrapper",
    wrappingWidth: 200
  },
  sequence: {
    useMaxWidth: true,
    hideUnusedParticipants: false,
    activationWidth: 10,
    diagramMarginX: 50,
    diagramMarginY: 10,
    actorMargin: 50,
    width: 150,
    height: 65,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    mirrorActors: true,
    forceMenus: false,
    bottomMarginAdj: 1,
    rightAngles: false,
    showSequenceNumbers: false,
    actorFontSize: 14,
    actorFontFamily: '"Open Sans", sans-serif',
    actorFontWeight: 400,
    noteFontSize: 14,
    noteFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    noteFontWeight: 400,
    noteAlign: "center",
    messageFontSize: 16,
    messageFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    messageFontWeight: 400,
    wrap: false,
    wrapPadding: 10,
    labelBoxWidth: 50,
    labelBoxHeight: 20
  },
  gantt: {
    useMaxWidth: true,
    titleTopMargin: 25,
    barHeight: 20,
    barGap: 4,
    topPadding: 50,
    rightPadding: 75,
    leftPadding: 75,
    gridLineStartPadding: 35,
    fontSize: 11,
    sectionFontSize: 11,
    numberSectionStyles: 4,
    axisFormat: "%Y-%m-%d",
    topAxis: false,
    displayMode: "",
    weekday: "sunday"
  },
  journey: {
    useMaxWidth: true,
    diagramMarginX: 50,
    diagramMarginY: 10,
    leftMargin: 150,
    width: 150,
    height: 50,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    bottomMarginAdj: 1,
    rightAngles: false,
    taskFontSize: 14,
    taskFontFamily: '"Open Sans", sans-serif',
    taskMargin: 50,
    activationWidth: 10,
    textPlacement: "fo",
    actorColours: [
      "#8FBC8F",
      "#7CFC00",
      "#00FFFF",
      "#20B2AA",
      "#B0E0E6",
      "#FFFFE0"
    ],
    sectionFills: [
      "#191970",
      "#8B008B",
      "#4B0082",
      "#2F4F4F",
      "#800000",
      "#8B4513",
      "#00008B"
    ],
    sectionColours: [
      "#fff"
    ]
  },
  class: {
    useMaxWidth: true,
    titleTopMargin: 25,
    arrowMarkerAbsolute: false,
    dividerMargin: 10,
    padding: 5,
    textHeight: 10,
    defaultRenderer: "dagre-wrapper",
    htmlLabels: false,
    hideEmptyMembersBox: false
  },
  state: {
    useMaxWidth: true,
    titleTopMargin: 25,
    dividerMargin: 10,
    sizeUnit: 5,
    padding: 8,
    textHeight: 10,
    titleShift: -15,
    noteMargin: 10,
    forkWidth: 70,
    forkHeight: 7,
    miniPadding: 2,
    fontSizeFactor: 5.02,
    fontSize: 24,
    labelHeight: 16,
    edgeLengthFactor: "20",
    compositTitleSize: 35,
    radius: 5,
    defaultRenderer: "dagre-wrapper"
  },
  er: {
    useMaxWidth: true,
    titleTopMargin: 25,
    diagramPadding: 20,
    layoutDirection: "TB",
    minEntityWidth: 100,
    minEntityHeight: 75,
    entityPadding: 15,
    stroke: "gray",
    fill: "honeydew",
    fontSize: 12
  },
  pie: {
    useMaxWidth: true,
    textPosition: 0.75
  },
  quadrantChart: {
    useMaxWidth: true,
    chartWidth: 500,
    chartHeight: 500,
    titleFontSize: 20,
    titlePadding: 10,
    quadrantPadding: 5,
    xAxisLabelPadding: 5,
    yAxisLabelPadding: 5,
    xAxisLabelFontSize: 16,
    yAxisLabelFontSize: 16,
    quadrantLabelFontSize: 16,
    quadrantTextTopPadding: 5,
    pointTextPadding: 5,
    pointLabelFontSize: 12,
    pointRadius: 5,
    xAxisPosition: "top",
    yAxisPosition: "left",
    quadrantInternalBorderStrokeWidth: 1,
    quadrantExternalBorderStrokeWidth: 2
  },
  xyChart: {
    useMaxWidth: true,
    width: 700,
    height: 500,
    titleFontSize: 20,
    titlePadding: 10,
    showTitle: true,
    xAxis: {
      $ref: "#/$defs/XYChartAxisConfig",
      showLabel: true,
      labelFontSize: 14,
      labelPadding: 5,
      showTitle: true,
      titleFontSize: 16,
      titlePadding: 5,
      showTick: true,
      tickLength: 5,
      tickWidth: 2,
      showAxisLine: true,
      axisLineWidth: 2
    },
    yAxis: {
      $ref: "#/$defs/XYChartAxisConfig",
      showLabel: true,
      labelFontSize: 14,
      labelPadding: 5,
      showTitle: true,
      titleFontSize: 16,
      titlePadding: 5,
      showTick: true,
      tickLength: 5,
      tickWidth: 2,
      showAxisLine: true,
      axisLineWidth: 2
    },
    chartOrientation: "vertical",
    plotReservedSpacePercent: 50
  },
  requirement: {
    useMaxWidth: true,
    rect_fill: "#f9f9f9",
    text_color: "#333",
    rect_border_size: "0.5px",
    rect_border_color: "#bbb",
    rect_min_width: 200,
    rect_min_height: 200,
    fontSize: 14,
    rect_padding: 10,
    line_height: 20
  },
  mindmap: {
    useMaxWidth: true,
    padding: 10,
    maxNodeWidth: 200
  },
  kanban: {
    useMaxWidth: true,
    padding: 8,
    sectionWidth: 200,
    ticketBaseUrl: ""
  },
  timeline: {
    useMaxWidth: true,
    diagramMarginX: 50,
    diagramMarginY: 10,
    leftMargin: 150,
    width: 150,
    height: 50,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    bottomMarginAdj: 1,
    rightAngles: false,
    taskFontSize: 14,
    taskFontFamily: '"Open Sans", sans-serif',
    taskMargin: 50,
    activationWidth: 10,
    textPlacement: "fo",
    actorColours: [
      "#8FBC8F",
      "#7CFC00",
      "#00FFFF",
      "#20B2AA",
      "#B0E0E6",
      "#FFFFE0"
    ],
    sectionFills: [
      "#191970",
      "#8B008B",
      "#4B0082",
      "#2F4F4F",
      "#800000",
      "#8B4513",
      "#00008B"
    ],
    sectionColours: [
      "#fff"
    ],
    disableMulticolor: false
  },
  gitGraph: {
    useMaxWidth: true,
    titleTopMargin: 25,
    diagramPadding: 8,
    nodeLabel: {
      width: 75,
      height: 100,
      x: -25,
      y: 0
    },
    mainBranchName: "main",
    mainBranchOrder: 0,
    showCommitLabel: true,
    showBranches: true,
    rotateCommitLabel: true,
    parallelCommits: false,
    arrowMarkerAbsolute: false
  },
  c4: {
    useMaxWidth: true,
    diagramMarginX: 50,
    diagramMarginY: 10,
    c4ShapeMargin: 50,
    c4ShapePadding: 20,
    width: 216,
    height: 60,
    boxMargin: 10,
    c4ShapeInRow: 4,
    nextLinePaddingX: 0,
    c4BoundaryInRow: 2,
    personFontSize: 14,
    personFontFamily: '"Open Sans", sans-serif',
    personFontWeight: "normal",
    external_personFontSize: 14,
    external_personFontFamily: '"Open Sans", sans-serif',
    external_personFontWeight: "normal",
    systemFontSize: 14,
    systemFontFamily: '"Open Sans", sans-serif',
    systemFontWeight: "normal",
    external_systemFontSize: 14,
    external_systemFontFamily: '"Open Sans", sans-serif',
    external_systemFontWeight: "normal",
    system_dbFontSize: 14,
    system_dbFontFamily: '"Open Sans", sans-serif',
    system_dbFontWeight: "normal",
    external_system_dbFontSize: 14,
    external_system_dbFontFamily: '"Open Sans", sans-serif',
    external_system_dbFontWeight: "normal",
    system_queueFontSize: 14,
    system_queueFontFamily: '"Open Sans", sans-serif',
    system_queueFontWeight: "normal",
    external_system_queueFontSize: 14,
    external_system_queueFontFamily: '"Open Sans", sans-serif',
    external_system_queueFontWeight: "normal",
    boundaryFontSize: 14,
    boundaryFontFamily: '"Open Sans", sans-serif',
    boundaryFontWeight: "normal",
    messageFontSize: 12,
    messageFontFamily: '"Open Sans", sans-serif',
    messageFontWeight: "normal",
    containerFontSize: 14,
    containerFontFamily: '"Open Sans", sans-serif',
    containerFontWeight: "normal",
    external_containerFontSize: 14,
    external_containerFontFamily: '"Open Sans", sans-serif',
    external_containerFontWeight: "normal",
    container_dbFontSize: 14,
    container_dbFontFamily: '"Open Sans", sans-serif',
    container_dbFontWeight: "normal",
    external_container_dbFontSize: 14,
    external_container_dbFontFamily: '"Open Sans", sans-serif',
    external_container_dbFontWeight: "normal",
    container_queueFontSize: 14,
    container_queueFontFamily: '"Open Sans", sans-serif',
    container_queueFontWeight: "normal",
    external_container_queueFontSize: 14,
    external_container_queueFontFamily: '"Open Sans", sans-serif',
    external_container_queueFontWeight: "normal",
    componentFontSize: 14,
    componentFontFamily: '"Open Sans", sans-serif',
    componentFontWeight: "normal",
    external_componentFontSize: 14,
    external_componentFontFamily: '"Open Sans", sans-serif',
    external_componentFontWeight: "normal",
    component_dbFontSize: 14,
    component_dbFontFamily: '"Open Sans", sans-serif',
    component_dbFontWeight: "normal",
    external_component_dbFontSize: 14,
    external_component_dbFontFamily: '"Open Sans", sans-serif',
    external_component_dbFontWeight: "normal",
    component_queueFontSize: 14,
    component_queueFontFamily: '"Open Sans", sans-serif',
    component_queueFontWeight: "normal",
    external_component_queueFontSize: 14,
    external_component_queueFontFamily: '"Open Sans", sans-serif',
    external_component_queueFontWeight: "normal",
    wrap: true,
    wrapPadding: 10,
    person_bg_color: "#08427B",
    person_border_color: "#073B6F",
    external_person_bg_color: "#686868",
    external_person_border_color: "#8A8A8A",
    system_bg_color: "#1168BD",
    system_border_color: "#3C7FC0",
    system_db_bg_color: "#1168BD",
    system_db_border_color: "#3C7FC0",
    system_queue_bg_color: "#1168BD",
    system_queue_border_color: "#3C7FC0",
    external_system_bg_color: "#999999",
    external_system_border_color: "#8A8A8A",
    external_system_db_bg_color: "#999999",
    external_system_db_border_color: "#8A8A8A",
    external_system_queue_bg_color: "#999999",
    external_system_queue_border_color: "#8A8A8A",
    container_bg_color: "#438DD5",
    container_border_color: "#3C7FC0",
    container_db_bg_color: "#438DD5",
    container_db_border_color: "#3C7FC0",
    container_queue_bg_color: "#438DD5",
    container_queue_border_color: "#3C7FC0",
    external_container_bg_color: "#B3B3B3",
    external_container_border_color: "#A6A6A6",
    external_container_db_bg_color: "#B3B3B3",
    external_container_db_border_color: "#A6A6A6",
    external_container_queue_bg_color: "#B3B3B3",
    external_container_queue_border_color: "#A6A6A6",
    component_bg_color: "#85BBF0",
    component_border_color: "#78A8D8",
    component_db_bg_color: "#85BBF0",
    component_db_border_color: "#78A8D8",
    component_queue_bg_color: "#85BBF0",
    component_queue_border_color: "#78A8D8",
    external_component_bg_color: "#CCCCCC",
    external_component_border_color: "#BFBFBF",
    external_component_db_bg_color: "#CCCCCC",
    external_component_db_border_color: "#BFBFBF",
    external_component_queue_bg_color: "#CCCCCC",
    external_component_queue_border_color: "#BFBFBF"
  },
  sankey: {
    useMaxWidth: true,
    width: 600,
    height: 400,
    linkColor: "gradient",
    nodeAlignment: "justify",
    showValues: true,
    prefix: "",
    suffix: ""
  },
  block: {
    useMaxWidth: true,
    padding: 8
  },
  packet: {
    useMaxWidth: true,
    rowHeight: 32,
    bitWidth: 32,
    bitsPerRow: 32,
    showBits: true,
    paddingX: 5,
    paddingY: 5
  },
  architecture: {
    useMaxWidth: true,
    padding: 40,
    iconSize: 80,
    fontSize: 16
  },
  theme: "default",
  look: "classic",
  handDrawnSeed: 0,
  layout: "dagre",
  maxTextSize: 5e4,
  maxEdges: 500,
  darkMode: false,
  fontFamily: '"trebuchet ms", verdana, arial, sans-serif;',
  logLevel: 5,
  securityLevel: "strict",
  startOnLoad: true,
  arrowMarkerAbsolute: false,
  secure: [
    "secure",
    "securityLevel",
    "startOnLoad",
    "maxTextSize",
    "suppressErrorRendering",
    "maxEdges"
  ],
  legacyMathML: false,
  forceLegacyMathML: false,
  deterministicIds: false,
  fontSize: 16,
  markdownAutoWrap: true,
  suppressErrorRendering: false
};
var fl = {
  ...ae,
  deterministicIDSeed: void 0,
  elk: {
    mergeEdges: false,
    nodePlacementStrategy: "BRANDES_KOEPF"
  },
  themeCSS: void 0,
  themeVariables: /* @__PURE__ */ ye.default.getThemeVariables(),
  sequence: {
    ...ae.sequence,
    messageFont: /* @__PURE__ */ m$1(function() {
      return {
        fontFamily: this.messageFontFamily,
        fontSize: this.messageFontSize,
        fontWeight: this.messageFontWeight
      };
    }, "messageFont"),
    noteFont: /* @__PURE__ */ m$1(function() {
      return {
        fontFamily: this.noteFontFamily,
        fontSize: this.noteFontSize,
        fontWeight: this.noteFontWeight
      };
    }, "noteFont"),
    actorFont: /* @__PURE__ */ m$1(function() {
      return {
        fontFamily: this.actorFontFamily,
        fontSize: this.actorFontSize,
        fontWeight: this.actorFontWeight
      };
    }, "actorFont")
  },
  class: {
    hideEmptyMembersBox: false
  },
  gantt: {
    ...ae.gantt,
    tickInterval: void 0,
    useWidth: void 0
  },
  c4: {
    ...ae.c4,
    useWidth: void 0,
    personFont: /* @__PURE__ */ m$1(function() {
      return {
        fontFamily: this.personFontFamily,
        fontSize: this.personFontSize,
        fontWeight: this.personFontWeight
      };
    }, "personFont"),
    external_personFont: /* @__PURE__ */ m$1(function() {
      return {
        fontFamily: this.external_personFontFamily,
        fontSize: this.external_personFontSize,
        fontWeight: this.external_personFontWeight
      };
    }, "external_personFont"),
    systemFont: /* @__PURE__ */ m$1(function() {
      return {
        fontFamily: this.systemFontFamily,
        fontSize: this.systemFontSize,
        fontWeight: this.systemFontWeight
      };
    }, "systemFont"),
    external_systemFont: /* @__PURE__ */ m$1(function() {
      return {
        fontFamily: this.external_systemFontFamily,
        fontSize: this.external_systemFontSize,
        fontWeight: this.external_systemFontWeight
      };
    }, "external_systemFont"),
    system_dbFont: /* @__PURE__ */ m$1(function() {
      return {
        fontFamily: this.system_dbFontFamily,
        fontSize: this.system_dbFontSize,
        fontWeight: this.system_dbFontWeight
      };
    }, "system_dbFont"),
    external_system_dbFont: /* @__PURE__ */ m$1(function() {
      return {
        fontFamily: this.external_system_dbFontFamily,
        fontSize: this.external_system_dbFontSize,
        fontWeight: this.external_system_dbFontWeight
      };
    }, "external_system_dbFont"),
    system_queueFont: /* @__PURE__ */ m$1(function() {
      return {
        fontFamily: this.system_queueFontFamily,
        fontSize: this.system_queueFontSize,
        fontWeight: this.system_queueFontWeight
      };
    }, "system_queueFont"),
    external_system_queueFont: /* @__PURE__ */ m$1(function() {
      return {
        fontFamily: this.external_system_queueFontFamily,
        fontSize: this.external_system_queueFontSize,
        fontWeight: this.external_system_queueFontWeight
      };
    }, "external_system_queueFont"),
    containerFont: /* @__PURE__ */ m$1(function() {
      return {
        fontFamily: this.containerFontFamily,
        fontSize: this.containerFontSize,
        fontWeight: this.containerFontWeight
      };
    }, "containerFont"),
    external_containerFont: /* @__PURE__ */ m$1(function() {
      return {
        fontFamily: this.external_containerFontFamily,
        fontSize: this.external_containerFontSize,
        fontWeight: this.external_containerFontWeight
      };
    }, "external_containerFont"),
    container_dbFont: /* @__PURE__ */ m$1(function() {
      return {
        fontFamily: this.container_dbFontFamily,
        fontSize: this.container_dbFontSize,
        fontWeight: this.container_dbFontWeight
      };
    }, "container_dbFont"),
    external_container_dbFont: /* @__PURE__ */ m$1(function() {
      return {
        fontFamily: this.external_container_dbFontFamily,
        fontSize: this.external_container_dbFontSize,
        fontWeight: this.external_container_dbFontWeight
      };
    }, "external_container_dbFont"),
    container_queueFont: /* @__PURE__ */ m$1(function() {
      return {
        fontFamily: this.container_queueFontFamily,
        fontSize: this.container_queueFontSize,
        fontWeight: this.container_queueFontWeight
      };
    }, "container_queueFont"),
    external_container_queueFont: /* @__PURE__ */ m$1(function() {
      return {
        fontFamily: this.external_container_queueFontFamily,
        fontSize: this.external_container_queueFontSize,
        fontWeight: this.external_container_queueFontWeight
      };
    }, "external_container_queueFont"),
    componentFont: /* @__PURE__ */ m$1(function() {
      return {
        fontFamily: this.componentFontFamily,
        fontSize: this.componentFontSize,
        fontWeight: this.componentFontWeight
      };
    }, "componentFont"),
    external_componentFont: /* @__PURE__ */ m$1(function() {
      return {
        fontFamily: this.external_componentFontFamily,
        fontSize: this.external_componentFontSize,
        fontWeight: this.external_componentFontWeight
      };
    }, "external_componentFont"),
    component_dbFont: /* @__PURE__ */ m$1(function() {
      return {
        fontFamily: this.component_dbFontFamily,
        fontSize: this.component_dbFontSize,
        fontWeight: this.component_dbFontWeight
      };
    }, "component_dbFont"),
    external_component_dbFont: /* @__PURE__ */ m$1(function() {
      return {
        fontFamily: this.external_component_dbFontFamily,
        fontSize: this.external_component_dbFontSize,
        fontWeight: this.external_component_dbFontWeight
      };
    }, "external_component_dbFont"),
    component_queueFont: /* @__PURE__ */ m$1(function() {
      return {
        fontFamily: this.component_queueFontFamily,
        fontSize: this.component_queueFontSize,
        fontWeight: this.component_queueFontWeight
      };
    }, "component_queueFont"),
    external_component_queueFont: /* @__PURE__ */ m$1(function() {
      return {
        fontFamily: this.external_component_queueFontFamily,
        fontSize: this.external_component_queueFontSize,
        fontWeight: this.external_component_queueFontWeight
      };
    }, "external_component_queueFont"),
    boundaryFont: /* @__PURE__ */ m$1(function() {
      return {
        fontFamily: this.boundaryFontFamily,
        fontSize: this.boundaryFontSize,
        fontWeight: this.boundaryFontWeight
      };
    }, "boundaryFont"),
    messageFont: /* @__PURE__ */ m$1(function() {
      return {
        fontFamily: this.messageFontFamily,
        fontSize: this.messageFontSize,
        fontWeight: this.messageFontWeight
      };
    }, "messageFont")
  },
  pie: {
    ...ae.pie,
    useWidth: 984
  },
  xyChart: {
    ...ae.xyChart,
    useWidth: void 0
  },
  requirement: {
    ...ae.requirement,
    useWidth: void 0
  },
  packet: {
    ...ae.packet
  }
}, ml = m$1(function(t9) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return Object.keys(t9).reduce((r, o2) => Array.isArray(t9[o2]) ? r : typeof t9[o2] == "object" && t9[o2] !== null ? [
    ...r,
    e + o2,
    .../* @__PURE__ */ ml(t9[o2], "")
  ] : [
    ...r,
    e + o2
  ], []);
}, "keyify"), pl = new Set(ml(fl, "")), dl = fl;
var Fi = m$1((t9) => {
  if (tt.debug("sanitizeDirective called with", t9), !(typeof t9 != "object" || t9 == null)) {
    if (Array.isArray(t9)) {
      t9.forEach((e) => Fi(e));
      return;
    }
    for (let e of Object.keys(t9)) {
      if (tt.debug("Checking key", e), e.startsWith("__") || e.includes("proto") || e.includes("constr") || !pl.has(e) || t9[e] == null) {
        tt.debug("sanitize deleting key: ", e), delete t9[e];
        continue;
      }
      if (typeof t9[e] == "object") {
        tt.debug("sanitizing object", e), Fi(t9[e]);
        continue;
      }
      let r = [
        "themeCSS",
        "fontFamily",
        "altFontFamily"
      ];
      for (let o2 of r) e.includes(o2) && (tt.debug("sanitizing css option", e), t9[e] = /* @__PURE__ */ Du(t9[e]));
    }
    if (t9.themeVariables) for (let e of Object.keys(t9.themeVariables)) {
      let r = t9.themeVariables[e];
      (r == null ? void 0 : r.match) && !r.match(/^[\d "#%(),.;A-Za-z]+$/) && (t9.themeVariables[e] = "");
    }
    tt.debug("After sanitization", t9);
  }
}, "sanitizeDirective"), Du = /* @__PURE__ */ m$1((t9) => {
  let e = 0, r = 0;
  for (let o2 of t9) {
    if (e < r) return "{ /* ERROR: Unbalanced CSS */ }";
    o2 === "{" ? e++ : o2 === "}" && r++;
  }
  return e !== r ? "{ /* ERROR: Unbalanced CSS */ }" : t9;
}, "sanitizeCss");
var Ar = /* @__PURE__ */ Object.freeze(dl), Rt = /* @__PURE__ */ Lt({}, Ar), xl, tr = [], Lr = /* @__PURE__ */ Lt({}, Ar), Mi = /* @__PURE__ */ m$1((t9, e) => {
  let r = /* @__PURE__ */ Lt({}, t9), o2 = {};
  for (let n2 of e) Cl(n2), o2 = /* @__PURE__ */ Lt(o2, n2);
  if (r = /* @__PURE__ */ Lt(r, o2), o2.theme && o2.theme in ye) {
    let n2 = /* @__PURE__ */ Lt({}, xl), s = /* @__PURE__ */ Lt(n2.themeVariables || {}, o2.themeVariables);
    r.theme && r.theme in ye && (r.themeVariables = /* @__PURE__ */ ye[r.theme].getThemeVariables(s));
  }
  return Lr = r, _l(Lr), Lr;
}, "updateCurrentConfig"), Ou = /* @__PURE__ */ m$1((t9) => (Rt = /* @__PURE__ */ Lt({}, Ar), Rt = /* @__PURE__ */ Lt(Rt, t9), t9.theme && ye[t9.theme] && (Rt.themeVariables = /* @__PURE__ */ ye[t9.theme].getThemeVariables(t9.themeVariables)), Mi(Rt, tr), Rt), "setSiteConfig"), eC = /* @__PURE__ */ m$1((t9) => {
  xl = /* @__PURE__ */ Lt({}, t9);
}, "saveConfigFromInitialize"), rC = /* @__PURE__ */ m$1((t9) => (Rt = /* @__PURE__ */ Lt(Rt, t9), Mi(Rt, tr), Rt), "updateSiteConfig"), iC = /* @__PURE__ */ m$1(() => Lt({}, Rt), "getSiteConfig"), yl = /* @__PURE__ */ m$1((t9) => (_l(t9), Lt(Lr, t9), Er()), "setConfig"), Er = /* @__PURE__ */ m$1(() => Lt({}, Lr), "getConfig"), Cl = m$1((t9) => {
  t9 && ([
    "secure",
    ...Rt.secure ?? []
  ].forEach((e) => {
    Object.hasOwn(t9, e) && (tt.debug(`Denied attempt to modify a secure key ${e}`, t9[e]), delete t9[e]);
  }), Object.keys(t9).forEach((e) => {
    e.startsWith("__") && delete t9[e];
  }), Object.keys(t9).forEach((e) => {
    typeof t9[e] == "string" && (t9[e].includes("<") || t9[e].includes(">") || t9[e].includes("url(data:")) && delete t9[e], typeof t9[e] == "object" && Cl(t9[e]);
  }));
}, "sanitize"), oC = /* @__PURE__ */ m$1((t9) => {
  var _a3;
  Fi(t9), t9.fontFamily && !((_a3 = t9.themeVariables) == null ? void 0 : _a3.fontFamily) && (t9.themeVariables = {
    ...t9.themeVariables,
    fontFamily: t9.fontFamily
  }), tr.push(t9), Mi(Rt, tr);
}, "addDirective"), nC = /* @__PURE__ */ m$1(function() {
  let t9 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Rt;
  tr = [], Mi(t9, tr);
}, "reset"), Iu = {
  LAZY_LOAD_DEPRECATED: "The configuration options lazyLoadedDiagrams and loadExternalDiagramsAtStartup are deprecated. Please use registerExternalDiagrams instead."
}, gl = {}, Ru = /* @__PURE__ */ m$1((t9) => {
  gl[t9] || (tt.warn(Iu[t9]), gl[t9] = true);
}, "issueWarning"), _l = /* @__PURE__ */ m$1((t9) => {
  t9 && (t9.lazyLoadedDiagrams || t9.loadExternalDiagramsAtStartup) && Ru("LAZY_LOAD_DEPRECATED");
}, "checkConfig");
var { entries: Ml, setPrototypeOf: bl, isFrozen: Nu, getPrototypeOf: qu, getOwnPropertyDescriptor: zu } = Object, { freeze: Et, seal: $t, create: Ll } = Object, { apply: en, construct: rn } = typeof Reflect < "u" && Reflect;
Et || (Et = /* @__PURE__ */ m$1(function(e) {
  return e;
}, "freeze"));
$t || ($t = /* @__PURE__ */ m$1(function(e) {
  return e;
}, "seal"));
en || (en = /* @__PURE__ */ m$1(function(e, r, o2) {
  return e.apply(r, o2);
}, "apply"));
rn || (rn = /* @__PURE__ */ m$1(function(e, r) {
  return new e(...r);
}, "construct"));
var Li = /* @__PURE__ */ Nt(Array.prototype.forEach), Tl = /* @__PURE__ */ Nt(Array.prototype.pop), Dr = /* @__PURE__ */ Nt(Array.prototype.push), Ei = /* @__PURE__ */ Nt(String.prototype.toLowerCase), Zo = /* @__PURE__ */ Nt(String.prototype.toString), kl = /* @__PURE__ */ Nt(String.prototype.match), Or = /* @__PURE__ */ Nt(String.prototype.replace), Pu = /* @__PURE__ */ Nt(String.prototype.indexOf), $u = /* @__PURE__ */ Nt(String.prototype.trim), Ht = /* @__PURE__ */ Nt(Object.prototype.hasOwnProperty), At = /* @__PURE__ */ Nt(RegExp.prototype.test), Ir = /* @__PURE__ */ Wu(TypeError);
function Nt(t9) {
  return function(e) {
    for (var r = arguments.length, o2 = new Array(r > 1 ? r - 1 : 0), n2 = 1; n2 < r; n2++) o2[n2 - 1] = arguments[n2];
    return en(t9, e, o2);
  };
}
m$1(Nt, "unapply");
function Wu(t9) {
  return function() {
    for (var e = arguments.length, r = new Array(e), o2 = 0; o2 < e; o2++) r[o2] = arguments[o2];
    return rn(t9, r);
  };
}
m$1(Wu, "unconstruct");
function Q(t9, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ei;
  bl && bl(t9, null);
  let o2 = e.length;
  for (; o2--; ) {
    let n2 = e[o2];
    if (typeof n2 == "string") {
      let s = /* @__PURE__ */ r(n2);
      s !== n2 && (Nu(e) || (e[o2] = s), n2 = s);
    }
    t9[n2] = true;
  }
  return t9;
}
m$1(Q, "addToSet");
function Hu(t9) {
  for (let e = 0; e < t9.length; e++) Ht(t9, e) || (t9[e] = null);
  return t9;
}
m$1(Hu, "cleanArray");
function Ee(t9) {
  let e = /* @__PURE__ */ Ll(null);
  for (let [r, o2] of Ml(t9)) Ht(t9, r) && (Array.isArray(o2) ? e[r] = /* @__PURE__ */ Hu(o2) : o2 && typeof o2 == "object" && o2.constructor === Object ? e[r] = /* @__PURE__ */ Ee(o2) : e[r] = o2);
  return e;
}
m$1(Ee, "clone");
function Rr(t9, e) {
  for (; t9 !== null; ) {
    let o2 = /* @__PURE__ */ zu(t9, e);
    if (o2) {
      if (o2.get) return Nt(o2.get);
      if (typeof o2.value == "function") return Nt(o2.value);
    }
    t9 = /* @__PURE__ */ qu(t9);
  }
  function r() {
    return null;
  }
  return m$1(r, "fallbackValue"), r;
}
m$1(Rr, "lookupGetter");
var Sl = /* @__PURE__ */ Et([
  "a",
  "abbr",
  "acronym",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "bdi",
  "bdo",
  "big",
  "blink",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "center",
  "cite",
  "code",
  "col",
  "colgroup",
  "content",
  "data",
  "datalist",
  "dd",
  "decorator",
  "del",
  "details",
  "dfn",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "element",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "font",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meter",
  "nav",
  "nobr",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "section",
  "select",
  "shadow",
  "small",
  "source",
  "spacer",
  "span",
  "strike",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "track",
  "tt",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
]), Ko = /* @__PURE__ */ Et([
  "svg",
  "a",
  "altglyph",
  "altglyphdef",
  "altglyphitem",
  "animatecolor",
  "animatemotion",
  "animatetransform",
  "circle",
  "clippath",
  "defs",
  "desc",
  "ellipse",
  "filter",
  "font",
  "g",
  "glyph",
  "glyphref",
  "hkern",
  "image",
  "line",
  "lineargradient",
  "marker",
  "mask",
  "metadata",
  "mpath",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialgradient",
  "rect",
  "stop",
  "style",
  "switch",
  "symbol",
  "text",
  "textpath",
  "title",
  "tref",
  "tspan",
  "view",
  "vkern"
]), Qo = /* @__PURE__ */ Et([
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence"
]), Uu = /* @__PURE__ */ Et([
  "animate",
  "color-profile",
  "cursor",
  "discard",
  "font-face",
  "font-face-format",
  "font-face-name",
  "font-face-src",
  "font-face-uri",
  "foreignobject",
  "hatch",
  "hatchpath",
  "mesh",
  "meshgradient",
  "meshpatch",
  "meshrow",
  "missing-glyph",
  "script",
  "set",
  "solidcolor",
  "unknown",
  "use"
]), Jo = /* @__PURE__ */ Et([
  "math",
  "menclose",
  "merror",
  "mfenced",
  "mfrac",
  "mglyph",
  "mi",
  "mlabeledtr",
  "mmultiscripts",
  "mn",
  "mo",
  "mover",
  "mpadded",
  "mphantom",
  "mroot",
  "mrow",
  "ms",
  "mspace",
  "msqrt",
  "mstyle",
  "msub",
  "msup",
  "msubsup",
  "mtable",
  "mtd",
  "mtext",
  "mtr",
  "munder",
  "munderover",
  "mprescripts"
]), Yu = /* @__PURE__ */ Et([
  "maction",
  "maligngroup",
  "malignmark",
  "mlongdiv",
  "mscarries",
  "mscarry",
  "msgroup",
  "mstack",
  "msline",
  "msrow",
  "semantics",
  "annotation",
  "annotation-xml",
  "mprescripts",
  "none"
]), vl = /* @__PURE__ */ Et([
  "#text"
]), wl = /* @__PURE__ */ Et([
  "accept",
  "action",
  "align",
  "alt",
  "autocapitalize",
  "autocomplete",
  "autopictureinpicture",
  "autoplay",
  "background",
  "bgcolor",
  "border",
  "capture",
  "cellpadding",
  "cellspacing",
  "checked",
  "cite",
  "class",
  "clear",
  "color",
  "cols",
  "colspan",
  "controls",
  "controlslist",
  "coords",
  "crossorigin",
  "datetime",
  "decoding",
  "default",
  "dir",
  "disabled",
  "disablepictureinpicture",
  "disableremoteplayback",
  "download",
  "draggable",
  "enctype",
  "enterkeyhint",
  "face",
  "for",
  "headers",
  "height",
  "hidden",
  "high",
  "href",
  "hreflang",
  "id",
  "inputmode",
  "integrity",
  "ismap",
  "kind",
  "label",
  "lang",
  "list",
  "loading",
  "loop",
  "low",
  "max",
  "maxlength",
  "media",
  "method",
  "min",
  "minlength",
  "multiple",
  "muted",
  "name",
  "nonce",
  "noshade",
  "novalidate",
  "nowrap",
  "open",
  "optimum",
  "pattern",
  "placeholder",
  "playsinline",
  "popover",
  "popovertarget",
  "popovertargetaction",
  "poster",
  "preload",
  "pubdate",
  "radiogroup",
  "readonly",
  "rel",
  "required",
  "rev",
  "reversed",
  "role",
  "rows",
  "rowspan",
  "spellcheck",
  "scope",
  "selected",
  "shape",
  "size",
  "sizes",
  "span",
  "srclang",
  "start",
  "src",
  "srcset",
  "step",
  "style",
  "summary",
  "tabindex",
  "title",
  "translate",
  "type",
  "usemap",
  "valign",
  "value",
  "width",
  "wrap",
  "xmlns",
  "slot"
]), tn = /* @__PURE__ */ Et([
  "accent-height",
  "accumulate",
  "additive",
  "alignment-baseline",
  "amplitude",
  "ascent",
  "attributename",
  "attributetype",
  "azimuth",
  "basefrequency",
  "baseline-shift",
  "begin",
  "bias",
  "by",
  "class",
  "clip",
  "clippathunits",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "cx",
  "cy",
  "d",
  "dx",
  "dy",
  "diffuseconstant",
  "direction",
  "display",
  "divisor",
  "dur",
  "edgemode",
  "elevation",
  "end",
  "exponent",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "filterunits",
  "flood-color",
  "flood-opacity",
  "font-family",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-style",
  "font-variant",
  "font-weight",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyph-name",
  "glyphref",
  "gradientunits",
  "gradienttransform",
  "height",
  "href",
  "id",
  "image-rendering",
  "in",
  "in2",
  "intercept",
  "k",
  "k1",
  "k2",
  "k3",
  "k4",
  "kerning",
  "keypoints",
  "keysplines",
  "keytimes",
  "lang",
  "lengthadjust",
  "letter-spacing",
  "kernelmatrix",
  "kernelunitlength",
  "lighting-color",
  "local",
  "marker-end",
  "marker-mid",
  "marker-start",
  "markerheight",
  "markerunits",
  "markerwidth",
  "maskcontentunits",
  "maskunits",
  "max",
  "mask",
  "media",
  "method",
  "mode",
  "min",
  "name",
  "numoctaves",
  "offset",
  "operator",
  "opacity",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "paint-order",
  "path",
  "pathlength",
  "patterncontentunits",
  "patterntransform",
  "patternunits",
  "points",
  "preservealpha",
  "preserveaspectratio",
  "primitiveunits",
  "r",
  "rx",
  "ry",
  "radius",
  "refx",
  "refy",
  "repeatcount",
  "repeatdur",
  "restart",
  "result",
  "rotate",
  "scale",
  "seed",
  "shape-rendering",
  "slope",
  "specularconstant",
  "specularexponent",
  "spreadmethod",
  "startoffset",
  "stddeviation",
  "stitchtiles",
  "stop-color",
  "stop-opacity",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke",
  "stroke-width",
  "style",
  "surfacescale",
  "systemlanguage",
  "tabindex",
  "tablevalues",
  "targetx",
  "targety",
  "transform",
  "transform-origin",
  "text-anchor",
  "text-decoration",
  "text-rendering",
  "textlength",
  "type",
  "u1",
  "u2",
  "unicode",
  "values",
  "viewbox",
  "visibility",
  "version",
  "vert-adv-y",
  "vert-origin-x",
  "vert-origin-y",
  "width",
  "word-spacing",
  "wrap",
  "writing-mode",
  "xchannelselector",
  "ychannelselector",
  "x",
  "x1",
  "x2",
  "xmlns",
  "y",
  "y1",
  "y2",
  "z",
  "zoomandpan"
]), Bl = /* @__PURE__ */ Et([
  "accent",
  "accentunder",
  "align",
  "bevelled",
  "close",
  "columnsalign",
  "columnlines",
  "columnspan",
  "denomalign",
  "depth",
  "dir",
  "display",
  "displaystyle",
  "encoding",
  "fence",
  "frame",
  "height",
  "href",
  "id",
  "largeop",
  "length",
  "linethickness",
  "lspace",
  "lquote",
  "mathbackground",
  "mathcolor",
  "mathsize",
  "mathvariant",
  "maxsize",
  "minsize",
  "movablelimits",
  "notation",
  "numalign",
  "open",
  "rowalign",
  "rowlines",
  "rowspacing",
  "rowspan",
  "rspace",
  "rquote",
  "scriptlevel",
  "scriptminsize",
  "scriptsizemultiplier",
  "selection",
  "separator",
  "separators",
  "stretchy",
  "subscriptshift",
  "supscriptshift",
  "symmetric",
  "voffset",
  "width",
  "xmlns"
]), Ai = /* @__PURE__ */ Et([
  "xlink:href",
  "xml:id",
  "xlink:title",
  "xml:space",
  "xmlns:xlink"
]), Gu = /* @__PURE__ */ $t(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Vu = /* @__PURE__ */ $t(/<%[\w\W]*|[\w\W]*%>/gm), Xu = /* @__PURE__ */ $t(/\${[\w\W]*}/gm), ju = /* @__PURE__ */ $t(/^data-[\-\w.\u00B7-\uFFFF]/), Zu = /* @__PURE__ */ $t(/^aria-[\-\w]+$/), Al = /* @__PURE__ */ $t(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), Ku = /* @__PURE__ */ $t(/^(?:\w+script|data):/i), Qu = /* @__PURE__ */ $t(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), El = /* @__PURE__ */ $t(/^html$/i), Ju = /* @__PURE__ */ $t(/^[a-z][.\w]*(-[.\w]+)+$/i), Fl = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Zu,
  ATTR_WHITESPACE: Qu,
  CUSTOM_ELEMENT: Ju,
  DATA_ATTR: ju,
  DOCTYPE_NAME: El,
  ERB_EXPR: Vu,
  IS_ALLOWED_URI: Al,
  IS_SCRIPT_OR_DATA: Ku,
  MUSTACHE_EXPR: Gu,
  TMPLIT_EXPR: Xu
}), Nr = {
  element: 1,
  text: 3,
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, tf = /* @__PURE__ */ m$1(function() {
  return typeof window > "u" ? null : window;
}, "getGlobal"), ef = /* @__PURE__ */ m$1(function(e, r) {
  if (typeof e != "object" || typeof e.createPolicy != "function") return null;
  let o2 = null, n2 = "data-tt-policy-suffix";
  r && r.hasAttribute(n2) && (o2 = /* @__PURE__ */ r.getAttribute(n2));
  let s = "dompurify" + (o2 ? "#" + o2 : "");
  try {
    return e.createPolicy(s, {
      createHTML(a) {
        return a;
      },
      createScriptURL(a) {
        return a;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + s + " could not be created."), null;
  }
}, "_createTrustedTypesPolicy");
function Dl() {
  let t9 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : tf(), e = /* @__PURE__ */ m$1((I) => Dl(I), "DOMPurify");
  if (e.version = "3.2.1", e.removed = [], !t9 || !t9.document || t9.document.nodeType !== Nr.document) return e.isSupported = false, e;
  let { document: r } = t9, o2 = r, n2 = o2.currentScript, { DocumentFragment: s, HTMLTemplateElement: a, Node: l, Element: c, NodeFilter: h, NamedNodeMap: u = t9.NamedNodeMap || t9.MozNamedAttrMap, HTMLFormElement: d, DOMParser: f, trustedTypes: g } = t9, T = c.prototype, L = /* @__PURE__ */ Rr(T, "cloneNode"), $ = /* @__PURE__ */ Rr(T, "remove"), z = /* @__PURE__ */ Rr(T, "nextSibling"), G = /* @__PURE__ */ Rr(T, "childNodes"), E = /* @__PURE__ */ Rr(T, "parentNode");
  if (typeof a == "function") {
    let I = /* @__PURE__ */ r.createElement("template");
    I.content && I.content.ownerDocument && (r = I.content.ownerDocument);
  }
  let B, P = "", { implementation: w, createNodeIterator: X, createDocumentFragment: j, getElementsByTagName: W } = r, { importNode: it } = o2, M = {};
  e.isSupported = typeof Ml == "function" && typeof E == "function" && w && w.createHTMLDocument !== void 0;
  let { MUSTACHE_EXPR: k, ERB_EXPR: x, TMPLIT_EXPR: y, DATA_ATTR: F, ARIA_ATTR: S, IS_SCRIPT_OR_DATA: N, ATTR_WHITESPACE: O, CUSTOM_ELEMENT: U } = Fl, { IS_ALLOWED_URI: rt } = Fl, Y = null, nt = /* @__PURE__ */ Q({}, [
    ...Sl,
    ...Ko,
    ...Qo,
    ...Jo,
    ...vl
  ]), K = null, Ft = /* @__PURE__ */ Q({}, [
    ...wl,
    ...tn,
    ...Bl,
    ...Ai
  ]), Z = /* @__PURE__ */ Object.seal(/* @__PURE__ */ Ll(null, {
    tagNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    attributeNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: false
    }
  })), Ct = null, _t = null, lt = true, v = true, H = false, V = true, C = false, pt = true, J = false, bt = false, Tt = false, Ot = false, Le = false, di = false, wa = true, Ba = false, ou = "user-content-", Do = true, vr = false, Ze = {}, Ke = null, Fa = /* @__PURE__ */ Q({}, [
    "annotation-xml",
    "audio",
    "colgroup",
    "desc",
    "foreignobject",
    "head",
    "iframe",
    "math",
    "mi",
    "mn",
    "mo",
    "ms",
    "mtext",
    "noembed",
    "noframes",
    "noscript",
    "plaintext",
    "script",
    "style",
    "svg",
    "template",
    "thead",
    "title",
    "video",
    "xmp"
  ]), Ma = null, La = /* @__PURE__ */ Q({}, [
    "audio",
    "video",
    "img",
    "source",
    "image",
    "track"
  ]), Oo = null, Aa = /* @__PURE__ */ Q({}, [
    "alt",
    "class",
    "for",
    "id",
    "label",
    "name",
    "pattern",
    "placeholder",
    "role",
    "summary",
    "title",
    "value",
    "style",
    "xmlns"
  ]), gi = "http://www.w3.org/1998/Math/MathML", xi = "http://www.w3.org/2000/svg", re = "http://www.w3.org/1999/xhtml", Qe = re, Io = false, Ro = null, nu = /* @__PURE__ */ Q({}, [
    gi,
    xi,
    re
  ], Zo), yi = /* @__PURE__ */ Q({}, [
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext"
  ]), Ci = /* @__PURE__ */ Q({}, [
    "annotation-xml"
  ]), su = /* @__PURE__ */ Q({}, [
    "title",
    "style",
    "font",
    "a",
    "script"
  ]), wr = null, au = [
    "application/xhtml+xml",
    "text/html"
  ], lu = "text/html", dt = null, Je = null, hu = /* @__PURE__ */ r.createElement("form"), Ea = /* @__PURE__ */ m$1(function(m) {
    return m instanceof RegExp || m instanceof Function;
  }, "isRegexOrFunction"), No = /* @__PURE__ */ m$1(function() {
    let m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Je && Je === m)) {
      if ((!m || typeof m != "object") && (m = {}), m = /* @__PURE__ */ Ee(m), wr = au.indexOf(m.PARSER_MEDIA_TYPE) === -1 ? lu : m.PARSER_MEDIA_TYPE, dt = wr === "application/xhtml+xml" ? Zo : Ei, Y = Ht(m, "ALLOWED_TAGS") ? Q({}, m.ALLOWED_TAGS, dt) : nt, K = Ht(m, "ALLOWED_ATTR") ? Q({}, m.ALLOWED_ATTR, dt) : Ft, Ro = Ht(m, "ALLOWED_NAMESPACES") ? Q({}, m.ALLOWED_NAMESPACES, Zo) : nu, Oo = Ht(m, "ADD_URI_SAFE_ATTR") ? Q(/* @__PURE__ */ Ee(Aa), m.ADD_URI_SAFE_ATTR, dt) : Aa, Ma = Ht(m, "ADD_DATA_URI_TAGS") ? Q(/* @__PURE__ */ Ee(La), m.ADD_DATA_URI_TAGS, dt) : La, Ke = Ht(m, "FORBID_CONTENTS") ? Q({}, m.FORBID_CONTENTS, dt) : Fa, Ct = Ht(m, "FORBID_TAGS") ? Q({}, m.FORBID_TAGS, dt) : {}, _t = Ht(m, "FORBID_ATTR") ? Q({}, m.FORBID_ATTR, dt) : {}, Ze = Ht(m, "USE_PROFILES") ? m.USE_PROFILES : false, lt = m.ALLOW_ARIA_ATTR !== false, v = m.ALLOW_DATA_ATTR !== false, H = m.ALLOW_UNKNOWN_PROTOCOLS || false, V = m.ALLOW_SELF_CLOSE_IN_ATTR !== false, C = m.SAFE_FOR_TEMPLATES || false, pt = m.SAFE_FOR_XML !== false, J = m.WHOLE_DOCUMENT || false, Ot = m.RETURN_DOM || false, Le = m.RETURN_DOM_FRAGMENT || false, di = m.RETURN_TRUSTED_TYPE || false, Tt = m.FORCE_BODY || false, wa = m.SANITIZE_DOM !== false, Ba = m.SANITIZE_NAMED_PROPS || false, Do = m.KEEP_CONTENT !== false, vr = m.IN_PLACE || false, rt = m.ALLOWED_URI_REGEXP || Al, Qe = m.NAMESPACE || re, yi = m.MATHML_TEXT_INTEGRATION_POINTS || yi, Ci = m.HTML_INTEGRATION_POINTS || Ci, Z = m.CUSTOM_ELEMENT_HANDLING || {}, m.CUSTOM_ELEMENT_HANDLING && Ea(m.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Z.tagNameCheck = m.CUSTOM_ELEMENT_HANDLING.tagNameCheck), m.CUSTOM_ELEMENT_HANDLING && Ea(m.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Z.attributeNameCheck = m.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), m.CUSTOM_ELEMENT_HANDLING && typeof m.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (Z.allowCustomizedBuiltInElements = m.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), C && (v = false), Le && (Ot = true), Ze && (Y = /* @__PURE__ */ Q({}, vl), K = [], Ze.html === true && (Q(Y, Sl), Q(K, wl)), Ze.svg === true && (Q(Y, Ko), Q(K, tn), Q(K, Ai)), Ze.svgFilters === true && (Q(Y, Qo), Q(K, tn), Q(K, Ai)), Ze.mathMl === true && (Q(Y, Jo), Q(K, Bl), Q(K, Ai))), m.ADD_TAGS && (Y === nt && (Y = /* @__PURE__ */ Ee(Y)), Q(Y, m.ADD_TAGS, dt)), m.ADD_ATTR && (K === Ft && (K = /* @__PURE__ */ Ee(K)), Q(K, m.ADD_ATTR, dt)), m.ADD_URI_SAFE_ATTR && Q(Oo, m.ADD_URI_SAFE_ATTR, dt), m.FORBID_CONTENTS && (Ke === Fa && (Ke = /* @__PURE__ */ Ee(Ke)), Q(Ke, m.FORBID_CONTENTS, dt)), Do && (Y["#text"] = true), J && Q(Y, [
        "html",
        "head",
        "body"
      ]), Y.table && (Q(Y, [
        "tbody"
      ]), delete Ct.tbody), m.TRUSTED_TYPES_POLICY) {
        if (typeof m.TRUSTED_TYPES_POLICY.createHTML != "function") throw Ir('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof m.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw Ir('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        B = m.TRUSTED_TYPES_POLICY, P = /* @__PURE__ */ B.createHTML("");
      } else B === void 0 && (B = /* @__PURE__ */ ef(g, n2)), B !== null && typeof P == "string" && (P = /* @__PURE__ */ B.createHTML(""));
      Et && Et(m), Je = m;
    }
  }, "_parseConfig"), Da = /* @__PURE__ */ Q({}, [
    ...Ko,
    ...Qo,
    ...Uu
  ]), Oa = /* @__PURE__ */ Q({}, [
    ...Jo,
    ...Yu
  ]), cu = /* @__PURE__ */ m$1(function(m) {
    let _ = /* @__PURE__ */ E(m);
    (!_ || !_.tagName) && (_ = {
      namespaceURI: Qe,
      tagName: "template"
    });
    let D = /* @__PURE__ */ Ei(m.tagName), at = /* @__PURE__ */ Ei(_.tagName);
    return Ro[m.namespaceURI] ? m.namespaceURI === xi ? _.namespaceURI === re ? D === "svg" : _.namespaceURI === gi ? D === "svg" && (at === "annotation-xml" || yi[at]) : !!Da[D] : m.namespaceURI === gi ? _.namespaceURI === re ? D === "math" : _.namespaceURI === xi ? D === "math" && Ci[at] : !!Oa[D] : m.namespaceURI === re ? _.namespaceURI === xi && !Ci[at] || _.namespaceURI === gi && !yi[at] ? false : !Oa[D] && (su[D] || !Da[D]) : !!(wr === "application/xhtml+xml" && Ro[m.namespaceURI]) : false;
  }, "_checkValidNamespace"), jt = /* @__PURE__ */ m$1(function(m) {
    Dr(e.removed, {
      element: m
    });
    try {
      E(m).removeChild(m);
    } catch {
      $(m);
    }
  }, "_forceRemove"), _i2 = /* @__PURE__ */ m$1(function(m, _) {
    try {
      Dr(e.removed, {
        attribute: /* @__PURE__ */ _.getAttributeNode(m),
        from: _
      });
    } catch {
      Dr(e.removed, {
        attribute: null,
        from: _
      });
    }
    if (_.removeAttribute(m), m === "is" && !K[m]) if (Ot || Le) try {
      jt(_);
    } catch {
    }
    else try {
      _.setAttribute(m, "");
    } catch {
    }
  }, "_removeAttribute"), Ia = /* @__PURE__ */ m$1(function(m) {
    let _ = null, D = null;
    if (Tt) m = "<remove></remove>" + m;
    else {
      let kt = /* @__PURE__ */ kl(m, /^[\r\n\t ]+/);
      D = kt && kt[0];
    }
    wr === "application/xhtml+xml" && Qe === re && (m = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + m + "</body></html>");
    let at = B ? B.createHTML(m) : m;
    if (Qe === re) try {
      _ = /* @__PURE__ */ new f().parseFromString(at, wr);
    } catch {
    }
    if (!_ || !_.documentElement) {
      _ = /* @__PURE__ */ w.createDocument(Qe, "template", null);
      try {
        _.documentElement.innerHTML = Io ? P : at;
      } catch {
      }
    }
    let Bt = _.body || _.documentElement;
    return m && D && Bt.insertBefore(/* @__PURE__ */ r.createTextNode(D), Bt.childNodes[0] || null), Qe === re ? W.call(_, J ? "html" : "body")[0] : J ? _.documentElement : Bt;
  }, "_initDocument"), Ra = /* @__PURE__ */ m$1(function(m) {
    return X.call(m.ownerDocument || m, m, h.SHOW_ELEMENT | h.SHOW_COMMENT | h.SHOW_TEXT | h.SHOW_PROCESSING_INSTRUCTION | h.SHOW_CDATA_SECTION, null);
  }, "_createNodeIterator"), Na = /* @__PURE__ */ m$1(function(m) {
    return m instanceof d && (typeof m.nodeName != "string" || typeof m.textContent != "string" || typeof m.removeChild != "function" || !(m.attributes instanceof u) || typeof m.removeAttribute != "function" || typeof m.setAttribute != "function" || typeof m.namespaceURI != "string" || typeof m.insertBefore != "function" || typeof m.hasChildNodes != "function");
  }, "_isClobbered"), qa = /* @__PURE__ */ m$1(function(m) {
    return typeof l == "function" && m instanceof l;
  }, "_isNode");
  function ie(I, m, _) {
    M[I] && Li(M[I], (D) => {
      D.call(e, m, _, Je);
    });
  }
  m$1(ie, "_executeHook");
  let za = /* @__PURE__ */ m$1(function(m) {
    let _ = null;
    if (ie("beforeSanitizeElements", m, null), Na(m)) return jt(m), true;
    let D = /* @__PURE__ */ dt(m.nodeName);
    if (ie("uponSanitizeElement", m, {
      tagName: D,
      allowedTags: Y
    }), m.hasChildNodes() && !qa(m.firstElementChild) && At(/<[/\w]/g, m.innerHTML) && At(/<[/\w]/g, m.textContent) || m.nodeType === Nr.progressingInstruction || pt && m.nodeType === Nr.comment && At(/<[/\w]/g, m.data)) return jt(m), true;
    if (!Y[D] || Ct[D]) {
      if (!Ct[D] && $a(D) && (Z.tagNameCheck instanceof RegExp && At(Z.tagNameCheck, D) || Z.tagNameCheck instanceof Function && Z.tagNameCheck(D))) return false;
      if (Do && !Ke[D]) {
        let at = E(m) || m.parentNode, Bt = G(m) || m.childNodes;
        if (Bt && at) {
          let kt = Bt.length;
          for (let It = kt - 1; It >= 0; --It) {
            let Zt = /* @__PURE__ */ L(Bt[It], true);
            Zt.__removalCount = (m.__removalCount || 0) + 1, at.insertBefore(Zt, /* @__PURE__ */ z(m));
          }
        }
      }
      return jt(m), true;
    }
    return m instanceof c && !cu(m) || (D === "noscript" || D === "noembed" || D === "noframes") && At(/<\/no(script|embed|frames)/i, m.innerHTML) ? (jt(m), true) : (C && m.nodeType === Nr.text && (_ = m.textContent, Li([
      k,
      x,
      y
    ], (at) => {
      _ = /* @__PURE__ */ Or(_, at, " ");
    }), m.textContent !== _ && (Dr(e.removed, {
      element: /* @__PURE__ */ m.cloneNode()
    }), m.textContent = _)), ie("afterSanitizeElements", m, null), false);
  }, "_sanitizeElements"), Pa = /* @__PURE__ */ m$1(function(m, _, D) {
    if (wa && (_ === "id" || _ === "name") && (D in r || D in hu)) return false;
    if (!(v && !_t[_] && At(F, _))) {
      if (!(lt && At(S, _))) {
        if (!K[_] || _t[_]) {
          if (!($a(m) && (Z.tagNameCheck instanceof RegExp && At(Z.tagNameCheck, m) || Z.tagNameCheck instanceof Function && Z.tagNameCheck(m)) && (Z.attributeNameCheck instanceof RegExp && At(Z.attributeNameCheck, _) || Z.attributeNameCheck instanceof Function && Z.attributeNameCheck(_)) || _ === "is" && Z.allowCustomizedBuiltInElements && (Z.tagNameCheck instanceof RegExp && At(Z.tagNameCheck, D) || Z.tagNameCheck instanceof Function && Z.tagNameCheck(D)))) return false;
        } else if (!Oo[_]) {
          if (!At(rt, /* @__PURE__ */ Or(D, O, ""))) {
            if (!((_ === "src" || _ === "xlink:href" || _ === "href") && m !== "script" && Pu(D, "data:") === 0 && Ma[m])) {
              if (!(H && !At(N, /* @__PURE__ */ Or(D, O, "")))) {
                if (D) return false;
              }
            }
          }
        }
      }
    }
    return true;
  }, "_isValidAttribute"), $a = /* @__PURE__ */ m$1(function(m) {
    return m !== "annotation-xml" && kl(m, U);
  }, "_isBasicCustomElement"), Wa = /* @__PURE__ */ m$1(function(m) {
    ie("beforeSanitizeAttributes", m, null);
    let { attributes: _ } = m;
    if (!_) return;
    let D = {
      attrName: "",
      attrValue: "",
      keepAttr: true,
      allowedAttributes: K,
      forceKeepAttr: void 0
    }, at = _.length;
    for (; at--; ) {
      let Bt = _[at], { name: kt, namespaceURI: It, value: Zt } = Bt, Br = /* @__PURE__ */ dt(kt), Mt = kt === "value" ? Zt : $u(Zt);
      if (D.attrName = Br, D.attrValue = Mt, D.keepAttr = true, D.forceKeepAttr = void 0, ie("uponSanitizeAttribute", m, D), Mt = D.attrValue, Ba && (Br === "id" || Br === "name") && (_i2(kt, m), Mt = ou + Mt), pt && At(/((--!?|])>)|<\/(style|title)/i, Mt)) {
        _i2(kt, m);
        continue;
      }
      if (D.forceKeepAttr || (_i2(kt, m), !D.keepAttr)) continue;
      if (!V && At(/\/>/i, Mt)) {
        _i2(kt, m);
        continue;
      }
      C && Li([
        k,
        x,
        y
      ], (Ua) => {
        Mt = /* @__PURE__ */ Or(Mt, Ua, " ");
      });
      let Ha = /* @__PURE__ */ dt(m.nodeName);
      if (Pa(Ha, Br, Mt)) {
        if (B && typeof g == "object" && typeof g.getAttributeType == "function" && !It) switch (g.getAttributeType(Ha, Br)) {
          case "TrustedHTML": {
            Mt = /* @__PURE__ */ B.createHTML(Mt);
            break;
          }
          case "TrustedScriptURL": {
            Mt = /* @__PURE__ */ B.createScriptURL(Mt);
            break;
          }
        }
        try {
          It ? m.setAttributeNS(It, kt, Mt) : m.setAttribute(kt, Mt), Na(m) ? jt(m) : Tl(e.removed);
        } catch {
        }
      }
    }
    ie("afterSanitizeAttributes", m, null);
  }, "_sanitizeAttributes"), uu = /* @__PURE__ */ m$1(function I(m) {
    let _ = null, D = /* @__PURE__ */ Ra(m);
    for (ie("beforeSanitizeShadowDOM", m, null); _ = /* @__PURE__ */ D.nextNode(); ) ie("uponSanitizeShadowNode", _, null), !za(_) && (_.content instanceof s && I(_.content), Wa(_));
    ie("afterSanitizeShadowDOM", m, null);
  }, "_sanitizeShadowDOM");
  return e.sanitize = function(I) {
    let m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ = null, D = null, at = null, Bt = null;
    if (Io = !I, Io && (I = "<!-->"), typeof I != "string" && !qa(I)) if (typeof I.toString == "function") {
      if (I = /* @__PURE__ */ I.toString(), typeof I != "string") throw Ir("dirty is not a string, aborting");
    } else throw Ir("toString is not a function");
    if (!e.isSupported) return I;
    if (bt || No(m), e.removed = [], typeof I == "string" && (vr = false), vr) {
      if (I.nodeName) {
        let Zt = /* @__PURE__ */ dt(I.nodeName);
        if (!Y[Zt] || Ct[Zt]) throw Ir("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (I instanceof l) _ = /* @__PURE__ */ Ia("<!---->"), D = /* @__PURE__ */ _.ownerDocument.importNode(I, true), D.nodeType === Nr.element && D.nodeName === "BODY" || D.nodeName === "HTML" ? _ = D : _.appendChild(D);
    else {
      if (!Ot && !C && !J && I.indexOf("<") === -1) return B && di ? B.createHTML(I) : I;
      if (_ = /* @__PURE__ */ Ia(I), !_) return Ot ? null : di ? P : "";
    }
    _ && Tt && jt(_.firstChild);
    let kt = /* @__PURE__ */ Ra(vr ? I : _);
    for (; at = /* @__PURE__ */ kt.nextNode(); ) za(at) || (at.content instanceof s && uu(at.content), Wa(at));
    if (vr) return I;
    if (Ot) {
      if (Le) for (Bt = /* @__PURE__ */ j.call(_.ownerDocument); _.firstChild; ) Bt.appendChild(_.firstChild);
      else Bt = _;
      return (K.shadowroot || K.shadowrootmode) && (Bt = /* @__PURE__ */ it.call(o2, Bt, true)), Bt;
    }
    let It = J ? _.outerHTML : _.innerHTML;
    return J && Y["!doctype"] && _.ownerDocument && _.ownerDocument.doctype && _.ownerDocument.doctype.name && At(El, _.ownerDocument.doctype.name) && (It = "<!DOCTYPE " + _.ownerDocument.doctype.name + `>
` + It), C && Li([
      k,
      x,
      y
    ], (Zt) => {
      It = /* @__PURE__ */ Or(It, Zt, " ");
    }), B && di ? B.createHTML(It) : It;
  }, e.setConfig = function() {
    let I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    No(I), bt = true;
  }, e.clearConfig = function() {
    Je = null, bt = false;
  }, e.isValidAttribute = function(I, m, _) {
    Je || No({});
    let D = /* @__PURE__ */ dt(I), at = /* @__PURE__ */ dt(m);
    return Pa(D, at, _);
  }, e.addHook = function(I, m) {
    typeof m == "function" && (M[I] = M[I] || [], Dr(M[I], m));
  }, e.removeHook = function(I) {
    if (M[I]) return Tl(M[I]);
  }, e.removeHooks = function(I) {
    M[I] && (M[I] = []);
  }, e.removeAllHooks = function() {
    M = {};
  }, e;
}
m$1(Dl, "createDOMPurify");
var er = /* @__PURE__ */ Dl();
var qr = /<br\s*\/?>/gi, rf = /* @__PURE__ */ m$1((t9) => t9 ? ql(t9).replace(/\\n/g, "#br#").split("#br#") : [
  ""
], "getRows"), of = /* @__PURE__ */ (() => {
  let t9 = false;
  return () => {
    t9 || (nf(), t9 = true);
  };
})();
function nf() {
  let t9 = "data-temp-href-target";
  er.addHook("beforeSanitizeAttributes", (e) => {
    e instanceof Element && e.tagName === "A" && e.hasAttribute("target") && e.setAttribute(t9, e.getAttribute("target") ?? "");
  }), er.addHook("afterSanitizeAttributes", (e) => {
    e instanceof Element && e.tagName === "A" && e.hasAttribute(t9) && (e.setAttribute("target", e.getAttribute(t9) ?? ""), e.removeAttribute(t9), e.getAttribute("target") === "_blank" && e.setAttribute("rel", "noopener"));
  });
}
m$1(nf, "setupDompurifyHooks");
var Nl = /* @__PURE__ */ m$1((t9) => (of(), er.sanitize(t9)), "removeScript"), Ol = /* @__PURE__ */ m$1((t9, e) => {
  var _a3;
  if (((_a3 = e.flowchart) == null ? void 0 : _a3.htmlLabels) !== false) {
    let r = e.securityLevel;
    r === "antiscript" || r === "strict" ? t9 = /* @__PURE__ */ Nl(t9) : r !== "loose" && (t9 = /* @__PURE__ */ ql(t9), t9 = /* @__PURE__ */ t9.replace(/</g, "&lt;").replace(/>/g, "&gt;"), t9 = /* @__PURE__ */ t9.replace(/=/g, "&equals;"), t9 = /* @__PURE__ */ hf(t9));
  }
  return t9;
}, "sanitizeMore"), De = /* @__PURE__ */ m$1((t9, e) => t9 && (e.dompurifyConfig ? t9 = /* @__PURE__ */ er.sanitize(/* @__PURE__ */ Ol(t9, e), e.dompurifyConfig).toString() : t9 = /* @__PURE__ */ er.sanitize(/* @__PURE__ */ Ol(t9, e), {
  FORBID_TAGS: [
    "style"
  ]
}).toString(), t9), "sanitizeText"), sf = /* @__PURE__ */ m$1((t9, e) => typeof t9 == "string" ? De(t9, e) : t9.flat().map((r) => De(r, e)), "sanitizeTextOrArray"), af = /* @__PURE__ */ m$1((t9) => qr.test(t9), "hasBreaks"), lf = /* @__PURE__ */ m$1((t9) => t9.split(qr), "splitBreaks"), hf = /* @__PURE__ */ m$1((t9) => t9.replace(/#br#/g, "<br/>"), "placeholderToBreak"), ql = /* @__PURE__ */ m$1((t9) => t9.replace(qr, "#br#"), "breakToPlaceholder"), cf = /* @__PURE__ */ m$1((t9) => {
  let e = "";
  return t9 && (e = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, e = /* @__PURE__ */ e.replaceAll(/\(/g, "\\("), e = /* @__PURE__ */ e.replaceAll(/\)/g, "\\)")), e;
}, "getUrl"), uf = /* @__PURE__ */ m$1((t9) => !(t9 === false || [
  "false",
  "null",
  "0"
].includes(/* @__PURE__ */ String(t9).trim().toLowerCase())), "evaluate"), ff = /* @__PURE__ */ m$1(function() {
  for (var _len = arguments.length, t9 = new Array(_len), _key = 0; _key < _len; _key++) {
    t9[_key] = arguments[_key];
  }
  let e = /* @__PURE__ */ t9.filter((r) => !isNaN(r));
  return Math.max(...e);
}, "getMax"), mf = /* @__PURE__ */ m$1(function() {
  for (var _len = arguments.length, t9 = new Array(_len), _key = 0; _key < _len; _key++) {
    t9[_key] = arguments[_key];
  }
  let e = /* @__PURE__ */ t9.filter((r) => !isNaN(r));
  return Math.min(...e);
}, "getMin"), uC = /* @__PURE__ */ m$1(function(t9) {
  let e = /* @__PURE__ */ t9.split(/(,)/), r = [];
  for (let o2 = 0; o2 < e.length; o2++) {
    let n2 = e[o2];
    if (n2 === "," && o2 > 0 && o2 + 1 < e.length) {
      let s = e[o2 - 1], a = e[o2 + 1];
      pf(s, a) && (n2 = s + "," + a, o2++, r.pop());
    }
    r.push(/* @__PURE__ */ df(n2));
  }
  return r.join("");
}, "parseGenericTypes"), on = /* @__PURE__ */ m$1((t9, e) => Math.max(0, t9.split(e).length - 1), "countOccurrence"), pf = /* @__PURE__ */ m$1((t9, e) => {
  let r = /* @__PURE__ */ on(t9, "~"), o2 = /* @__PURE__ */ on(e, "~");
  return r === 1 && o2 === 1;
}, "shouldCombineSets"), df = /* @__PURE__ */ m$1((t9) => {
  let e = /* @__PURE__ */ on(t9, "~"), r = false;
  if (e <= 1) return t9;
  e % 2 !== 0 && t9.startsWith("~") && (t9 = /* @__PURE__ */ t9.substring(1), r = true);
  let o2 = [
    ...t9
  ], n2 = /* @__PURE__ */ o2.indexOf("~"), s = /* @__PURE__ */ o2.lastIndexOf("~");
  for (; n2 !== -1 && s !== -1 && n2 !== s; ) o2[n2] = "<", o2[s] = ">", n2 = /* @__PURE__ */ o2.indexOf("~"), s = /* @__PURE__ */ o2.lastIndexOf("~");
  return r && o2.unshift("~"), o2.join("");
}, "processSet"), Il = /* @__PURE__ */ m$1(() => window.MathMLElement !== void 0, "isMathMLSupported"), nn = /\$\$(.*)\$\$/g, Rl = /* @__PURE__ */ m$1((t9) => {
  var _a3;
  return (((_a3 = t9.match(nn)) == null ? void 0 : _a3.length) ?? 0) > 0;
}, "hasKatex"), fC = /* @__PURE__ */ m$1(async (t9, e) => {
  var _a3;
  t9 = await gf(t9, e);
  let r = /* @__PURE__ */ document.createElement("div");
  r.innerHTML = t9, r.id = "katex-temp", r.style.visibility = "hidden", r.style.position = "absolute", r.style.top = "0", (_a3 = document.querySelector("body")) == null ? void 0 : _a3.insertAdjacentElement("beforeend", r);
  let n2 = {
    width: r.clientWidth,
    height: r.clientHeight
  };
  return r.remove(), n2;
}, "calculateMathMLDimensions"), gf = /* @__PURE__ */ m$1(async (t9, e) => {
  if (!Rl(t9)) return t9;
  if (!(Il() || e.legacyMathML || e.forceLegacyMathML)) return t9.replace(nn, "MathML is unsupported in this environment.");
  let { default: r } = await __vitePreload(async () => {
    const { default: r2 } = await import("./vendor-min-mermaid~katex-SWYD7GD6.DYaxWg_a.chunk.js");
    return {
      default: r2
    };
  }, true ? __vite__mapDeps([0,1]) : void 0), o2 = e.forceLegacyMathML || !Il() && e.legacyMathML ? "htmlAndMathml" : "mathml";
  return t9.split(qr).map((n2) => Rl(n2) ? `<div style="display: flex; align-items: center; justify-content: center; white-space: nowrap;">${n2}</div>` : `<div>${n2}</div>`).join("").replace(nn, (n2, s) => r.renderToString(s, {
    throwOnError: true,
    displayMode: true,
    output: o2
  }).replace(/\n/g, " ").replace(/<annotation.*<\/annotation>/g, ""));
}, "renderKatex"), mC = {
  getRows: rf,
  sanitizeText: De,
  sanitizeTextOrArray: sf,
  hasBreaks: af,
  splitBreaks: lf,
  lineBreakRegex: qr,
  removeScript: Nl,
  getUrl: cf,
  evaluate: uf,
  getMax: ff,
  getMin: mf
};
var xf = /* @__PURE__ */ m$1(function(t9, e) {
  for (let r of e) t9.attr(r[0], r[1]);
}, "d3Attrs"), yf = /* @__PURE__ */ m$1(function(t9, e, r) {
  let o2 = /* @__PURE__ */ new Map();
  return r ? (o2.set("width", "100%"), o2.set("style", `max-width: ${e}px;`)) : (o2.set("height", t9), o2.set("width", e)), o2;
}, "calculateSvgSizeAttrs"), Cf = /* @__PURE__ */ m$1(function(t9, e, r, o2) {
  let n2 = /* @__PURE__ */ yf(e, r, o2);
  xf(t9, n2);
}, "configureSvgSize"), zl = /* @__PURE__ */ m$1(function(t9, e, r, o2) {
  let n2 = /* @__PURE__ */ e.node().getBBox(), s = n2.width, a = n2.height;
  tt.info(`SVG bounds: ${s}x${a}`, n2);
  let l = 0, c = 0;
  tt.info(`Graph bounds: ${l}x${c}`, t9), l = s + r * 2, c = a + r * 2, tt.info(`Calculated bounds: ${l}x${c}`), Cf(e, c, l, o2);
  let h = `${n2.x - r} ${n2.y - r} ${n2.width + 2 * r} ${n2.height + 2 * r}`;
  e.attr("viewBox", h);
}, "setupGraphViewbox");
var Di = {}, _f = /* @__PURE__ */ m$1((t9, e, r) => {
  let o2 = "";
  return t9 in Di && Di[t9] ? o2 = /* @__PURE__ */ Di[t9](r) : tt.warn(`No theme found for ${t9}`), ` & {
    font-family: ${r.fontFamily};
    font-size: ${r.fontSize};
    fill: ${r.textColor}
  }

  /* Classes common for multiple diagrams */

  & .error-icon {
    fill: ${r.errorBkgColor};
  }
  & .error-text {
    fill: ${r.errorTextColor};
    stroke: ${r.errorTextColor};
  }

  & .edge-thickness-normal {
    stroke-width: 1px;
  }
  & .edge-thickness-thick {
    stroke-width: 3.5px
  }
  & .edge-pattern-solid {
    stroke-dasharray: 0;
  }
  & .edge-thickness-invisible {
    stroke-width: 0;
    fill: none;
  }
  & .edge-pattern-dashed{
    stroke-dasharray: 3;
  }
  .edge-pattern-dotted {
    stroke-dasharray: 2;
  }

  & .marker {
    fill: ${r.lineColor};
    stroke: ${r.lineColor};
  }
  & .marker.cross {
    stroke: ${r.lineColor};
  }

  & svg {
    font-family: ${r.fontFamily};
    font-size: ${r.fontSize};
  }
   & p {
    margin: 0
   }

  ${o2}

  ${e}
`;
}, "getStyles"), Pl = /* @__PURE__ */ m$1((t9, e) => {
  e !== void 0 && (Di[t9] = e);
}, "addStylesForDiagram"), _C = _f;
var cn = {};
o(cn, {
  clear: () => bf,
  getAccDescription: () => vf,
  getAccTitle: () => kf,
  getDiagramTitle: () => Bf,
  setAccDescription: () => Sf,
  setAccTitle: () => Tf,
  setDiagramTitle: () => wf
});
var sn = "", an = "", ln = "", hn = /* @__PURE__ */ m$1((t9) => De(t9, /* @__PURE__ */ Er()), "sanitizeText"), bf = /* @__PURE__ */ m$1(() => {
  sn = "", ln = "", an = "";
}, "clear"), Tf = /* @__PURE__ */ m$1((t9) => {
  sn = /* @__PURE__ */ hn(t9).replace(/^\s+/g, "");
}, "setAccTitle"), kf = /* @__PURE__ */ m$1(() => sn, "getAccTitle"), Sf = /* @__PURE__ */ m$1((t9) => {
  ln = /* @__PURE__ */ hn(t9).replace(/\n\s+/g, `
`);
}, "setAccDescription"), vf = /* @__PURE__ */ m$1(() => ln, "getAccDescription"), wf = /* @__PURE__ */ m$1((t9) => {
  an = /* @__PURE__ */ hn(t9);
}, "setDiagramTitle"), Bf = /* @__PURE__ */ m$1(() => an, "getDiagramTitle");
var $l = tt, Ff = Va, Wl = Er, EC = yl, DC = Ar;
var Mf = /* @__PURE__ */ m$1((t9) => De(t9, /* @__PURE__ */ Wl()), "sanitizeText"), Lf = zl, Af = /* @__PURE__ */ m$1(() => cn, "getCommonDb"), Oi = {}, OC = /* @__PURE__ */ m$1((t9, e, r) => {
  var _a3;
  Oi[t9] && $l.warn(`Diagram with id ${t9} already registered. Overwriting.`), Oi[t9] = e, r && Po(t9, r), Pl(t9, e.styles), (_a3 = e.injectUtils) == null ? void 0 : _a3.call(e, $l, Ff, Wl, Mf, Lf, Af(), () => {
  });
}, "registerDiagram"), IC = /* @__PURE__ */ m$1((t9) => {
  if (t9 in Oi) return Oi[t9];
  throw new un(t9);
}, "getDiagram"), un = (_i = class extends Error {
  constructor(e) {
    super(`Diagram ${e} not found.`);
  }
}, __9 = new WeakMap(), __privateAdd(_i, __9, m$1(_i, "DiagramNotFoundError")), _i);
function Hl(t9, e) {
  let r;
  if (e === void 0) for (let o2 of t9) o2 != null && (r < o2 || r === void 0 && o2 >= o2) && (r = o2);
  else {
    let o2 = -1;
    for (let n2 of t9) (n2 = /* @__PURE__ */ e(n2, ++o2, t9)) != null && (r < n2 || r === void 0 && n2 >= n2) && (r = n2);
  }
  return r;
}
m$1(Hl, "max");
function Ul(t9, e) {
  let r;
  if (e === void 0) for (let o2 of t9) o2 != null && (r > o2 || r === void 0 && o2 >= o2) && (r = o2);
  else {
    let o2 = -1;
    for (let n2 of t9) (n2 = /* @__PURE__ */ e(n2, ++o2, t9)) != null && (r > n2 || r === void 0 && n2 >= n2) && (r = n2);
  }
  return r;
}
m$1(Ul, "min");
function Oe(t9, e) {
  return t9 == null || e == null ? NaN : t9 < e ? -1 : t9 > e ? 1 : t9 >= e ? 0 : NaN;
}
m$1(Oe, "ascending");
function fn(t9, e) {
  return t9 == null || e == null ? NaN : e < t9 ? -1 : e > t9 ? 1 : e >= t9 ? 0 : NaN;
}
m$1(fn, "descending");
function Ie(t9) {
  let e, r, o2;
  t9.length !== 2 ? (e = Oe, r = /* @__PURE__ */ m$1((l, c) => Oe(/* @__PURE__ */ t9(l), c), "compare2"), o2 = /* @__PURE__ */ m$1((l, c) => t9(l) - c, "delta")) : (e = t9 === Oe || t9 === fn ? t9 : Ef, r = t9, o2 = t9);
  function n2(l, c) {
    let h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : l.length;
    if (h < u) {
      if (e(c, c) !== 0) return u;
      do {
        let d = h + u >>> 1;
        r(l[d], c) < 0 ? h = d + 1 : u = d;
      } while (h < u);
    }
    return h;
  }
  m$1(n2, "left");
  function s(l, c) {
    let h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : l.length;
    if (h < u) {
      if (e(c, c) !== 0) return u;
      do {
        let d = h + u >>> 1;
        r(l[d], c) <= 0 ? h = d + 1 : u = d;
      } while (h < u);
    }
    return h;
  }
  m$1(s, "right");
  function a(l, c) {
    let h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : l.length;
    let d = /* @__PURE__ */ n2(l, c, h, u - 1);
    return d > h && o2(l[d - 1], c) > -o2(l[d], c) ? d - 1 : d;
  }
  return m$1(a, "center"), {
    left: n2,
    center: a,
    right: s
  };
}
m$1(Ie, "bisector");
function Ef() {
  return 0;
}
m$1(Ef, "zero");
function mn(t9) {
  return t9 === null ? NaN : +t9;
}
m$1(mn, "number");
var Yl = /* @__PURE__ */ Ie(Oe), Gl = Yl.right;
Yl.left;
Ie(mn).center;
var pn = Gl;
var rr = (_j = class extends Map {
  constructor(e, r = Nf) {
    if (super(), Object.defineProperties(this, {
      _intern: {
        value: /* @__PURE__ */ new Map()
      },
      _key: {
        value: r
      }
    }), e != null) for (let [o2, n2] of e) this.set(o2, n2);
  }
  get(e) {
    return super.get(/* @__PURE__ */ Vl(this, e));
  }
  has(e) {
    return super.has(/* @__PURE__ */ Vl(this, e));
  }
  set(e, r) {
    return super.set(/* @__PURE__ */ If(this, e), r);
  }
  delete(e) {
    return super.delete(/* @__PURE__ */ Rf(this, e));
  }
}, __10 = new WeakMap(), __privateAdd(_j, __10, m$1(_j, "InternMap")), _j);
function Vl(param, r) {
  let { _intern: t9, _key: e } = param;
  let o2 = /* @__PURE__ */ e(r);
  return t9.has(o2) ? t9.get(o2) : r;
}
m$1(Vl, "intern_get");
function If(param, r) {
  let { _intern: t9, _key: e } = param;
  let o2 = /* @__PURE__ */ e(r);
  return t9.has(o2) ? t9.get(o2) : (t9.set(o2, r), r);
}
m$1(If, "intern_set");
function Rf(param, r) {
  let { _intern: t9, _key: e } = param;
  let o2 = /* @__PURE__ */ e(r);
  return t9.has(o2) && (r = /* @__PURE__ */ t9.get(o2), t9.delete(o2)), r;
}
m$1(Rf, "intern_delete");
function Nf(t9) {
  return t9 !== null && typeof t9 == "object" ? t9.valueOf() : t9;
}
m$1(Nf, "keyof");
var qf = /* @__PURE__ */ Math.sqrt(50), zf = /* @__PURE__ */ Math.sqrt(10), Pf = /* @__PURE__ */ Math.sqrt(2);
function Ii(t9, e, r) {
  let o2 = (e - t9) / Math.max(0, r), n2 = /* @__PURE__ */ Math.floor(/* @__PURE__ */ Math.log10(o2)), s = o2 / Math.pow(10, n2), a = s >= qf ? 10 : s >= zf ? 5 : s >= Pf ? 2 : 1, l, c, h;
  return n2 < 0 ? (h = Math.pow(10, -n2) / a, l = /* @__PURE__ */ Math.round(t9 * h), c = /* @__PURE__ */ Math.round(e * h), l / h < t9 && ++l, c / h > e && --c, h = -h) : (h = Math.pow(10, n2) * a, l = /* @__PURE__ */ Math.round(t9 / h), c = /* @__PURE__ */ Math.round(e / h), l * h < t9 && ++l, c * h > e && --c), c < l && 0.5 <= r && r < 2 ? Ii(t9, e, r * 2) : [
    l,
    c,
    h
  ];
}
m$1(Ii, "tickSpec");
function Ri(t9, e, r) {
  if (e = +e, t9 = +t9, r = +r, !(r > 0)) return [];
  if (t9 === e) return [
    t9
  ];
  let o2 = e < t9, [n2, s, a] = o2 ? Ii(e, t9, r) : Ii(t9, e, r);
  if (!(s >= n2)) return [];
  let l = s - n2 + 1, c = new Array(l);
  if (o2) if (a < 0) for (let h = 0; h < l; ++h) c[h] = (s - h) / -a;
  else for (let h = 0; h < l; ++h) c[h] = (s - h) * a;
  else if (a < 0) for (let h = 0; h < l; ++h) c[h] = (n2 + h) / -a;
  else for (let h = 0; h < l; ++h) c[h] = (n2 + h) * a;
  return c;
}
m$1(Ri, "ticks");
function zr(t9, e, r) {
  return e = +e, t9 = +t9, r = +r, Ii(t9, e, r)[2];
}
m$1(zr, "tickIncrement");
function ir(t9, e, r) {
  e = +e, t9 = +t9, r = +r;
  let o2 = e < t9, n2 = o2 ? zr(e, t9, r) : zr(t9, e, r);
  return (o2 ? -1 : 1) * (n2 < 0 ? 1 / -n2 : n2);
}
m$1(ir, "tickStep");
function Ni(t9, e, r) {
  t9 = +t9, e = +e, r = (n2 = arguments.length) < 2 ? (e = t9, t9 = 0, 1) : n2 < 3 ? 1 : +r;
  for (var o2 = -1, n2 = Math.max(0, /* @__PURE__ */ Math.ceil((e - t9) / r)) | 0, s = new Array(n2); ++o2 < n2; ) s[o2] = t9 + o2 * r;
  return s;
}
m$1(Ni, "range");
function dn(t9) {
  return t9;
}
m$1(dn, "default");
var zi = 1, gn = 2, xn = 3, qi = 4, Xl = 1e-6;
function $f(t9) {
  return "translate(" + t9 + ",0)";
}
m$1($f, "translateX");
function Wf(t9) {
  return "translate(0," + t9 + ")";
}
m$1(Wf, "translateY");
function Hf(t9) {
  return (e) => +t9(e);
}
m$1(Hf, "number");
function Uf(t9, e) {
  return e = Math.max(0, t9.bandwidth() - e * 2) / 2, t9.round() && (e = /* @__PURE__ */ Math.round(e)), (r) => +t9(r) + e;
}
m$1(Uf, "center");
function Yf() {
  return !this.__axis;
}
m$1(Yf, "entering");
function jl(t9, e) {
  var r = [], o2 = null, n2 = null, s = 6, a = 6, l = 3, c = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, h = t9 === zi || t9 === qi ? -1 : 1, u = t9 === qi || t9 === gn ? "x" : "y", d = t9 === zi || t9 === xn ? $f : Wf;
  function f(g) {
    var T = o2 ?? (e.ticks ? e.ticks.apply(e, r) : e.domain()), L = n2 ?? (e.tickFormat ? e.tickFormat.apply(e, r) : dn), $ = Math.max(s, 0) + l, z = /* @__PURE__ */ e.range(), G = +z[0] + c, E = +z[z.length - 1] + c, B = /* @__PURE__ */ (e.bandwidth ? Uf : Hf)(/* @__PURE__ */ e.copy(), c), P = g.selection ? g.selection() : g, w = /* @__PURE__ */ P.selectAll(".domain").data([
      null
    ]), X = /* @__PURE__ */ P.selectAll(".tick").data(T, e).order(), j = /* @__PURE__ */ X.exit(), W = /* @__PURE__ */ X.enter().append("g").attr("class", "tick"), it = /* @__PURE__ */ X.select("line"), M = /* @__PURE__ */ X.select("text");
    w = /* @__PURE__ */ w.merge(/* @__PURE__ */ w.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), X = /* @__PURE__ */ X.merge(W), it = /* @__PURE__ */ it.merge(/* @__PURE__ */ W.append("line").attr("stroke", "currentColor").attr(u + "2", h * s)), M = /* @__PURE__ */ M.merge(/* @__PURE__ */ W.append("text").attr("fill", "currentColor").attr(u, h * $).attr("dy", t9 === zi ? "0em" : t9 === xn ? "0.71em" : "0.32em")), g !== P && (w = /* @__PURE__ */ w.transition(g), X = /* @__PURE__ */ X.transition(g), it = /* @__PURE__ */ it.transition(g), M = /* @__PURE__ */ M.transition(g), j = /* @__PURE__ */ j.transition(g).attr("opacity", Xl).attr("transform", function(k) {
      return isFinite(k = /* @__PURE__ */ B(k)) ? d(k + c) : this.getAttribute("transform");
    }), W.attr("opacity", Xl).attr("transform", function(k) {
      var x = this.parentNode.__axis;
      return d((x && isFinite(x = /* @__PURE__ */ x(k)) ? x : B(k)) + c);
    })), j.remove(), w.attr("d", t9 === qi || t9 === gn ? a ? "M" + h * a + "," + G + "H" + c + "V" + E + "H" + h * a : "M" + c + "," + G + "V" + E : a ? "M" + G + "," + h * a + "V" + c + "H" + E + "V" + h * a : "M" + G + "," + c + "H" + E), X.attr("opacity", 1).attr("transform", function(k) {
      return d(B(k) + c);
    }), it.attr(u + "2", h * s), M.attr(u, h * $).text(L), P.filter(Yf).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t9 === gn ? "start" : t9 === qi ? "end" : "middle"), P.each(function() {
      this.__axis = B;
    });
  }
  return m$1(f, "axis"), f.scale = function(g) {
    return arguments.length ? (e = g, f) : e;
  }, f.ticks = function() {
    return r = /* @__PURE__ */ Array.from(arguments), f;
  }, f.tickArguments = function(g) {
    return arguments.length ? (r = g == null ? [] : Array.from(g), f) : r.slice();
  }, f.tickValues = function(g) {
    return arguments.length ? (o2 = g == null ? null : Array.from(g), f) : o2 && o2.slice();
  }, f.tickFormat = function(g) {
    return arguments.length ? (n2 = g, f) : n2;
  }, f.tickSize = function(g) {
    return arguments.length ? (s = a = +g, f) : s;
  }, f.tickSizeInner = function(g) {
    return arguments.length ? (s = +g, f) : s;
  }, f.tickSizeOuter = function(g) {
    return arguments.length ? (a = +g, f) : a;
  }, f.tickPadding = function(g) {
    return arguments.length ? (l = +g, f) : l;
  }, f.offset = function(g) {
    return arguments.length ? (c = +g, f) : c;
  }, f;
}
m$1(jl, "axis");
function Gf(t9) {
  return jl(zi, t9);
}
m$1(Gf, "axisTop");
function Vf(t9) {
  return jl(xn, t9);
}
m$1(Vf, "axisBottom");
function Xf() {
}
m$1(Xf, "none");
function Ce(t9) {
  return t9 == null ? Xf : function() {
    return this.querySelector(t9);
  };
}
m$1(Ce, "default");
function yn(t9) {
  typeof t9 != "function" && (t9 = /* @__PURE__ */ Ce(t9));
  for (var e = this._groups, r = e.length, o2 = new Array(r), n2 = 0; n2 < r; ++n2) for (var s = e[n2], a = s.length, l = o2[n2] = new Array(a), c, h, u = 0; u < a; ++u) (c = s[u]) && (h = /* @__PURE__ */ t9.call(c, c.__data__, u, s)) && ("__data__" in c && (h.__data__ = c.__data__), l[u] = h);
  return new ht(o2, this._parents);
}
m$1(yn, "default");
function Cn(t9) {
  return t9 == null ? [] : Array.isArray(t9) ? t9 : Array.from(t9);
}
m$1(Cn, "array");
function jf() {
  return [];
}
m$1(jf, "empty");
function or(t9) {
  return t9 == null ? jf : function() {
    return this.querySelectorAll(t9);
  };
}
m$1(or, "default");
function Zf(t9) {
  return function() {
    return Cn(/* @__PURE__ */ t9.apply(this, arguments));
  };
}
m$1(Zf, "arrayAll");
function _n(t9) {
  typeof t9 == "function" ? t9 = /* @__PURE__ */ Zf(t9) : t9 = /* @__PURE__ */ or(t9);
  for (var e = this._groups, r = e.length, o2 = [], n2 = [], s = 0; s < r; ++s) for (var a = e[s], l = a.length, c, h = 0; h < l; ++h) (c = a[h]) && (o2.push(/* @__PURE__ */ t9.call(c, c.__data__, h, a)), n2.push(c));
  return new ht(o2, n2);
}
m$1(_n, "default");
function nr(t9) {
  return function() {
    return this.matches(t9);
  };
}
m$1(nr, "default");
function Pi(t9) {
  return function(e) {
    return e.matches(t9);
  };
}
m$1(Pi, "childMatcher");
var Kf = Array.prototype.find;
function Qf(t9) {
  return function() {
    return Kf.call(this.children, t9);
  };
}
m$1(Qf, "childFind");
function Jf() {
  return this.firstElementChild;
}
m$1(Jf, "childFirst");
function bn(t9) {
  return this.select(t9 == null ? Jf : Qf(typeof t9 == "function" ? t9 : Pi(t9)));
}
m$1(bn, "default");
var tm = Array.prototype.filter;
function em() {
  return Array.from(this.children);
}
m$1(em, "children");
function rm(t9) {
  return function() {
    return tm.call(this.children, t9);
  };
}
m$1(rm, "childrenFilter");
function Tn(t9) {
  return this.selectAll(t9 == null ? em : rm(typeof t9 == "function" ? t9 : Pi(t9)));
}
m$1(Tn, "default");
function kn(t9) {
  typeof t9 != "function" && (t9 = /* @__PURE__ */ nr(t9));
  for (var e = this._groups, r = e.length, o2 = new Array(r), n2 = 0; n2 < r; ++n2) for (var s = e[n2], a = s.length, l = o2[n2] = [], c, h = 0; h < a; ++h) (c = s[h]) && t9.call(c, c.__data__, h, s) && l.push(c);
  return new ht(o2, this._parents);
}
m$1(kn, "default");
function Pr(t9) {
  return new Array(t9.length);
}
m$1(Pr, "default");
function Sn() {
  return new ht(this._enter || this._groups.map(Pr), this._parents);
}
m$1(Sn, "default");
function $r(t9, e) {
  this.ownerDocument = t9.ownerDocument, this.namespaceURI = t9.namespaceURI, this._next = null, this._parent = t9, this.__data__ = e;
}
m$1($r, "EnterNode");
$r.prototype = {
  constructor: $r,
  appendChild: /* @__PURE__ */ m$1(function(t9) {
    return this._parent.insertBefore(t9, this._next);
  }, "appendChild"),
  insertBefore: /* @__PURE__ */ m$1(function(t9, e) {
    return this._parent.insertBefore(t9, e);
  }, "insertBefore"),
  querySelector: /* @__PURE__ */ m$1(function(t9) {
    return this._parent.querySelector(t9);
  }, "querySelector"),
  querySelectorAll: /* @__PURE__ */ m$1(function(t9) {
    return this._parent.querySelectorAll(t9);
  }, "querySelectorAll")
};
function vn(t9) {
  return function() {
    return t9;
  };
}
m$1(vn, "default");
function im(t9, e, r, o2, n2, s) {
  for (var a = 0, l, c = e.length, h = s.length; a < h; ++a) (l = e[a]) ? (l.__data__ = s[a], o2[a] = l) : r[a] = new $r(t9, s[a]);
  for (; a < c; ++a) (l = e[a]) && (n2[a] = l);
}
m$1(im, "bindIndex");
function om(t9, e, r, o2, n2, s, a) {
  var l, c, h = /* @__PURE__ */ new Map(), u = e.length, d = s.length, f = new Array(u), g;
  for (l = 0; l < u; ++l) (c = e[l]) && (f[l] = g = a.call(c, c.__data__, l, e) + "", h.has(g) ? n2[l] = c : h.set(g, c));
  for (l = 0; l < d; ++l) g = a.call(t9, s[l], l, s) + "", (c = /* @__PURE__ */ h.get(g)) ? (o2[l] = c, c.__data__ = s[l], h.delete(g)) : r[l] = new $r(t9, s[l]);
  for (l = 0; l < u; ++l) (c = e[l]) && h.get(f[l]) === c && (n2[l] = c);
}
m$1(om, "bindKey");
function nm(t9) {
  return t9.__data__;
}
m$1(nm, "datum");
function wn(t9, e) {
  if (!arguments.length) return Array.from(this, nm);
  var r = e ? om : im, o2 = this._parents, n2 = this._groups;
  typeof t9 != "function" && (t9 = /* @__PURE__ */ vn(t9));
  for (var s = n2.length, a = new Array(s), l = new Array(s), c = new Array(s), h = 0; h < s; ++h) {
    var u = o2[h], d = n2[h], f = d.length, g = /* @__PURE__ */ sm(/* @__PURE__ */ t9.call(u, u && u.__data__, h, o2)), T = g.length, L = l[h] = new Array(T), $ = a[h] = new Array(T), z = c[h] = new Array(f);
    r(u, d, L, $, z, g, e);
    for (var G = 0, E = 0, B, P; G < T; ++G) if (B = L[G]) {
      for (G >= E && (E = G + 1); !(P = $[E]) && ++E < T; ) ;
      B._next = P || null;
    }
  }
  return a = new ht(a, o2), a._enter = l, a._exit = c, a;
}
m$1(wn, "default");
function sm(t9) {
  return typeof t9 == "object" && "length" in t9 ? t9 : Array.from(t9);
}
m$1(sm, "arraylike");
function Bn() {
  return new ht(this._exit || this._groups.map(Pr), this._parents);
}
m$1(Bn, "default");
function Fn(t9, e, r) {
  var o2 = /* @__PURE__ */ this.enter(), n2 = this, s = /* @__PURE__ */ this.exit();
  return typeof t9 == "function" ? (o2 = /* @__PURE__ */ t9(o2), o2 && (o2 = /* @__PURE__ */ o2.selection())) : o2 = /* @__PURE__ */ o2.append(t9 + ""), e != null && (n2 = /* @__PURE__ */ e(n2), n2 && (n2 = /* @__PURE__ */ n2.selection())), r == null ? s.remove() : r(s), o2 && n2 ? o2.merge(n2).order() : n2;
}
m$1(Fn, "default");
function Mn(t9) {
  for (var e = t9.selection ? t9.selection() : t9, r = this._groups, o2 = e._groups, n2 = r.length, s = o2.length, a = /* @__PURE__ */ Math.min(n2, s), l = new Array(n2), c = 0; c < a; ++c) for (var h = r[c], u = o2[c], d = h.length, f = l[c] = new Array(d), g, T = 0; T < d; ++T) (g = h[T] || u[T]) && (f[T] = g);
  for (; c < n2; ++c) l[c] = r[c];
  return new ht(l, this._parents);
}
m$1(Mn, "default");
function Ln() {
  for (var t9 = this._groups, e = -1, r = t9.length; ++e < r; ) for (var o2 = t9[e], n2 = o2.length - 1, s = o2[n2], a; --n2 >= 0; ) (a = o2[n2]) && (s && a.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(a, s), s = a);
  return this;
}
m$1(Ln, "default");
function An(t9) {
  t9 || (t9 = am);
  function e(d, f) {
    return d && f ? t9(d.__data__, f.__data__) : !d - !f;
  }
  m$1(e, "compareNode");
  for (var r = this._groups, o2 = r.length, n2 = new Array(o2), s = 0; s < o2; ++s) {
    for (var a = r[s], l = a.length, c = n2[s] = new Array(l), h, u = 0; u < l; ++u) (h = a[u]) && (c[u] = h);
    c.sort(e);
  }
  return new ht(n2, this._parents).order();
}
m$1(An, "default");
function am(t9, e) {
  return t9 < e ? -1 : t9 > e ? 1 : t9 >= e ? 0 : NaN;
}
m$1(am, "ascending");
function En() {
  var t9 = arguments[0];
  return arguments[0] = this, t9.apply(null, arguments), this;
}
m$1(En, "default");
function Dn() {
  return Array.from(this);
}
m$1(Dn, "default");
function On() {
  for (var t9 = this._groups, e = 0, r = t9.length; e < r; ++e) for (var o2 = t9[e], n2 = 0, s = o2.length; n2 < s; ++n2) {
    var a = o2[n2];
    if (a) return a;
  }
  return null;
}
m$1(On, "default");
function In() {
  let t9 = 0;
  for (let e of this) ++t9;
  return t9;
}
m$1(In, "default");
function Rn() {
  return !this.node();
}
m$1(Rn, "default");
function Nn(t9) {
  for (var e = this._groups, r = 0, o2 = e.length; r < o2; ++r) for (var n2 = e[r], s = 0, a = n2.length, l; s < a; ++s) (l = n2[s]) && t9.call(l, l.__data__, s, n2);
  return this;
}
m$1(Nn, "default");
var $i = "http://www.w3.org/1999/xhtml", qn = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: $i,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Kt(t9) {
  var e = t9 += "", r = /* @__PURE__ */ e.indexOf(":");
  return r >= 0 && (e = /* @__PURE__ */ t9.slice(0, r)) !== "xmlns" && (t9 = /* @__PURE__ */ t9.slice(r + 1)), qn.hasOwnProperty(e) ? {
    space: qn[e],
    local: t9
  } : t9;
}
m$1(Kt, "default");
function lm(t9) {
  return function() {
    this.removeAttribute(t9);
  };
}
m$1(lm, "attrRemove");
function hm(t9) {
  return function() {
    this.removeAttributeNS(t9.space, t9.local);
  };
}
m$1(hm, "attrRemoveNS");
function cm(t9, e) {
  return function() {
    this.setAttribute(t9, e);
  };
}
m$1(cm, "attrConstant");
function um(t9, e) {
  return function() {
    this.setAttributeNS(t9.space, t9.local, e);
  };
}
m$1(um, "attrConstantNS");
function fm(t9, e) {
  return function() {
    var r = /* @__PURE__ */ e.apply(this, arguments);
    r == null ? this.removeAttribute(t9) : this.setAttribute(t9, r);
  };
}
m$1(fm, "attrFunction");
function mm(t9, e) {
  return function() {
    var r = /* @__PURE__ */ e.apply(this, arguments);
    r == null ? this.removeAttributeNS(t9.space, t9.local) : this.setAttributeNS(t9.space, t9.local, r);
  };
}
m$1(mm, "attrFunctionNS");
function zn(t9, e) {
  var r = /* @__PURE__ */ Kt(t9);
  if (arguments.length < 2) {
    var o2 = /* @__PURE__ */ this.node();
    return r.local ? o2.getAttributeNS(r.space, r.local) : o2.getAttribute(r);
  }
  return this.each(/* @__PURE__ */ (e == null ? r.local ? hm : lm : typeof e == "function" ? r.local ? mm : fm : r.local ? um : cm)(r, e));
}
m$1(zn, "default");
function Wr(t9) {
  return t9.ownerDocument && t9.ownerDocument.defaultView || t9.document && t9 || t9.defaultView;
}
m$1(Wr, "default");
function pm(t9) {
  return function() {
    this.style.removeProperty(t9);
  };
}
m$1(pm, "styleRemove");
function dm(t9, e, r) {
  return function() {
    this.style.setProperty(t9, e, r);
  };
}
m$1(dm, "styleConstant");
function gm(t9, e, r) {
  return function() {
    var o2 = /* @__PURE__ */ e.apply(this, arguments);
    o2 == null ? this.style.removeProperty(t9) : this.style.setProperty(t9, o2, r);
  };
}
m$1(gm, "styleFunction");
function Pn(t9, e, r) {
  return arguments.length > 1 ? this.each(/* @__PURE__ */ (e == null ? pm : typeof e == "function" ? gm : dm)(t9, e, r ?? "")) : _e(/* @__PURE__ */ this.node(), t9);
}
m$1(Pn, "default");
function _e(t9, e) {
  return t9.style.getPropertyValue(e) || Wr(t9).getComputedStyle(t9, null).getPropertyValue(e);
}
m$1(_e, "styleValue");
function xm(t9) {
  return function() {
    delete this[t9];
  };
}
m$1(xm, "propertyRemove");
function ym(t9, e) {
  return function() {
    this[t9] = e;
  };
}
m$1(ym, "propertyConstant");
function Cm(t9, e) {
  return function() {
    var r = /* @__PURE__ */ e.apply(this, arguments);
    r == null ? delete this[t9] : this[t9] = r;
  };
}
m$1(Cm, "propertyFunction");
function $n(t9, e) {
  return arguments.length > 1 ? this.each(/* @__PURE__ */ (e == null ? xm : typeof e == "function" ? Cm : ym)(t9, e)) : this.node()[t9];
}
m$1($n, "default");
function Zl(t9) {
  return t9.trim().split(/^|\s+/);
}
m$1(Zl, "classArray");
function Wn(t9) {
  return t9.classList || new Kl(t9);
}
m$1(Wn, "classList");
function Kl(t9) {
  this._node = t9, this._names = /* @__PURE__ */ Zl(t9.getAttribute("class") || "");
}
m$1(Kl, "ClassList");
Kl.prototype = {
  add: /* @__PURE__ */ m$1(function(t9) {
    var e = /* @__PURE__ */ this._names.indexOf(t9);
    e < 0 && (this._names.push(t9), this._node.setAttribute("class", /* @__PURE__ */ this._names.join(" ")));
  }, "add"),
  remove: /* @__PURE__ */ m$1(function(t9) {
    var e = /* @__PURE__ */ this._names.indexOf(t9);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", /* @__PURE__ */ this._names.join(" ")));
  }, "remove"),
  contains: /* @__PURE__ */ m$1(function(t9) {
    return this._names.indexOf(t9) >= 0;
  }, "contains")
};
function Ql(t9, e) {
  for (var r = /* @__PURE__ */ Wn(t9), o2 = -1, n2 = e.length; ++o2 < n2; ) r.add(e[o2]);
}
m$1(Ql, "classedAdd");
function Jl(t9, e) {
  for (var r = /* @__PURE__ */ Wn(t9), o2 = -1, n2 = e.length; ++o2 < n2; ) r.remove(e[o2]);
}
m$1(Jl, "classedRemove");
function _m(t9) {
  return function() {
    Ql(this, t9);
  };
}
m$1(_m, "classedTrue");
function bm(t9) {
  return function() {
    Jl(this, t9);
  };
}
m$1(bm, "classedFalse");
function Tm(t9, e) {
  return function() {
    (e.apply(this, arguments) ? Ql : Jl)(this, t9);
  };
}
m$1(Tm, "classedFunction");
function Hn(t9, e) {
  var r = /* @__PURE__ */ Zl(t9 + "");
  if (arguments.length < 2) {
    for (var o2 = /* @__PURE__ */ Wn(/* @__PURE__ */ this.node()), n2 = -1, s = r.length; ++n2 < s; ) if (!o2.contains(r[n2])) return false;
    return true;
  }
  return this.each(/* @__PURE__ */ (typeof e == "function" ? Tm : e ? _m : bm)(r, e));
}
m$1(Hn, "default");
function km() {
  this.textContent = "";
}
m$1(km, "textRemove");
function Sm(t9) {
  return function() {
    this.textContent = t9;
  };
}
m$1(Sm, "textConstant");
function vm(t9) {
  return function() {
    var e = /* @__PURE__ */ t9.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
m$1(vm, "textFunction");
function Un(t9) {
  return arguments.length ? this.each(t9 == null ? km : (typeof t9 == "function" ? vm : Sm)(t9)) : this.node().textContent;
}
m$1(Un, "default");
function wm() {
  this.innerHTML = "";
}
m$1(wm, "htmlRemove");
function Bm(t9) {
  return function() {
    this.innerHTML = t9;
  };
}
m$1(Bm, "htmlConstant");
function Fm(t9) {
  return function() {
    var e = /* @__PURE__ */ t9.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
m$1(Fm, "htmlFunction");
function Yn(t9) {
  return arguments.length ? this.each(t9 == null ? wm : (typeof t9 == "function" ? Fm : Bm)(t9)) : this.node().innerHTML;
}
m$1(Yn, "default");
function Mm() {
  this.nextSibling && this.parentNode.appendChild(this);
}
m$1(Mm, "raise");
function Gn() {
  return this.each(Mm);
}
m$1(Gn, "default");
function Lm() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
m$1(Lm, "lower");
function Vn() {
  return this.each(Lm);
}
m$1(Vn, "default");
function Am(t9) {
  return function() {
    var e = this.ownerDocument, r = this.namespaceURI;
    return r === $i && e.documentElement.namespaceURI === $i ? e.createElement(t9) : e.createElementNS(r, t9);
  };
}
m$1(Am, "creatorInherit");
function Em(t9) {
  return function() {
    return this.ownerDocument.createElementNS(t9.space, t9.local);
  };
}
m$1(Em, "creatorFixed");
function Hr(t9) {
  var e = /* @__PURE__ */ Kt(t9);
  return (e.local ? Em : Am)(e);
}
m$1(Hr, "default");
function Xn(t9) {
  var e = typeof t9 == "function" ? t9 : Hr(t9);
  return this.select(function() {
    return this.appendChild(/* @__PURE__ */ e.apply(this, arguments));
  });
}
m$1(Xn, "default");
function Dm() {
  return null;
}
m$1(Dm, "constantNull");
function jn(t9, e) {
  var r = typeof t9 == "function" ? t9 : Hr(t9), o2 = e == null ? Dm : typeof e == "function" ? e : Ce(e);
  return this.select(function() {
    return this.insertBefore(/* @__PURE__ */ r.apply(this, arguments), o2.apply(this, arguments) || null);
  });
}
m$1(jn, "default");
function Om() {
  var t9 = this.parentNode;
  t9 && t9.removeChild(this);
}
m$1(Om, "remove");
function Zn() {
  return this.each(Om);
}
m$1(Zn, "default");
function Im() {
  var t9 = /* @__PURE__ */ this.cloneNode(false), e = this.parentNode;
  return e ? e.insertBefore(t9, this.nextSibling) : t9;
}
m$1(Im, "selection_cloneShallow");
function Rm() {
  var t9 = /* @__PURE__ */ this.cloneNode(true), e = this.parentNode;
  return e ? e.insertBefore(t9, this.nextSibling) : t9;
}
m$1(Rm, "selection_cloneDeep");
function Kn(t9) {
  return this.select(t9 ? Rm : Im);
}
m$1(Kn, "default");
function Qn(t9) {
  return arguments.length ? this.property("__data__", t9) : this.node().__data__;
}
m$1(Qn, "default");
function Nm(t9) {
  return function(e) {
    t9.call(this, e, this.__data__);
  };
}
m$1(Nm, "contextListener");
function qm(t9) {
  return t9.trim().split(/^|\s+/).map(function(e) {
    var r = "", o2 = /* @__PURE__ */ e.indexOf(".");
    return o2 >= 0 && (r = /* @__PURE__ */ e.slice(o2 + 1), e = /* @__PURE__ */ e.slice(0, o2)), {
      type: e,
      name: r
    };
  });
}
m$1(qm, "parseTypenames");
function zm(t9) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var r = 0, o2 = -1, n2 = e.length, s; r < n2; ++r) s = e[r], (!t9.type || s.type === t9.type) && s.name === t9.name ? this.removeEventListener(s.type, s.listener, s.options) : e[++o2] = s;
      ++o2 ? e.length = o2 : delete this.__on;
    }
  };
}
m$1(zm, "onRemove");
function Pm(t9, e, r) {
  return function() {
    var o2 = this.__on, n2, s = /* @__PURE__ */ Nm(e);
    if (o2) {
      for (var a = 0, l = o2.length; a < l; ++a) if ((n2 = o2[a]).type === t9.type && n2.name === t9.name) {
        this.removeEventListener(n2.type, n2.listener, n2.options), this.addEventListener(n2.type, n2.listener = s, n2.options = r), n2.value = e;
        return;
      }
    }
    this.addEventListener(t9.type, s, r), n2 = {
      type: t9.type,
      name: t9.name,
      value: e,
      listener: s,
      options: r
    }, o2 ? o2.push(n2) : this.__on = [
      n2
    ];
  };
}
m$1(Pm, "onAdd");
function Jn(t9, e, r) {
  var o2 = /* @__PURE__ */ qm(t9 + ""), n2, s = o2.length, a;
  if (arguments.length < 2) {
    var l = this.node().__on;
    if (l) {
      for (var c = 0, h = l.length, u; c < h; ++c) for (n2 = 0, u = l[c]; n2 < s; ++n2) if ((a = o2[n2]).type === u.type && a.name === u.name) return u.value;
    }
    return;
  }
  for (l = e ? Pm : zm, n2 = 0; n2 < s; ++n2) this.each(/* @__PURE__ */ l(o2[n2], e, r));
  return this;
}
m$1(Jn, "default");
function th(t9, e, r) {
  var o2 = /* @__PURE__ */ Wr(t9), n2 = o2.CustomEvent;
  typeof n2 == "function" ? n2 = new n2(e, r) : (n2 = /* @__PURE__ */ o2.document.createEvent("Event"), r ? (n2.initEvent(e, r.bubbles, r.cancelable), n2.detail = r.detail) : n2.initEvent(e, false, false)), t9.dispatchEvent(n2);
}
m$1(th, "dispatchEvent");
function $m(t9, e) {
  return function() {
    return th(this, t9, e);
  };
}
m$1($m, "dispatchConstant");
function Wm(t9, e) {
  return function() {
    return th(this, t9, /* @__PURE__ */ e.apply(this, arguments));
  };
}
m$1(Wm, "dispatchFunction");
function ts(t9, e) {
  return this.each(/* @__PURE__ */ (typeof e == "function" ? Wm : $m)(t9, e));
}
m$1(ts, "default");
function* es() {
  for (var t9 = this._groups, e = 0, r = t9.length; e < r; ++e) for (var o2 = t9[e], n2 = 0, s = o2.length, a; n2 < s; ++n2) (a = o2[n2]) && (yield a);
}
m$1(es, "default");
var rs = [
  null
];
function ht(t9, e) {
  this._groups = t9, this._parents = e;
}
m$1(ht, "Selection");
function eh() {
  return new ht([
    [
      document.documentElement
    ]
  ], rs);
}
m$1(eh, "selection");
function Hm() {
  return this;
}
m$1(Hm, "selection_selection");
ht.prototype = eh.prototype = {
  constructor: ht,
  select: yn,
  selectAll: _n,
  selectChild: bn,
  selectChildren: Tn,
  filter: kn,
  data: wn,
  enter: Sn,
  exit: Bn,
  join: Fn,
  merge: Mn,
  selection: Hm,
  order: Ln,
  sort: An,
  call: En,
  nodes: Dn,
  node: On,
  size: In,
  empty: Rn,
  each: Nn,
  attr: zn,
  style: Pn,
  property: $n,
  classed: Hn,
  text: Un,
  html: Yn,
  raise: Gn,
  lower: Vn,
  append: Xn,
  insert: jn,
  remove: Zn,
  clone: Kn,
  datum: Qn,
  on: Jn,
  dispatch: ts,
  [Symbol.iterator]: es
};
var le = eh;
function rh(t9) {
  return typeof t9 == "string" ? new ht([
    [
      /* @__PURE__ */ document.querySelector(t9)
    ]
  ], [
    document.documentElement
  ]) : new ht([
    [
      t9
    ]
  ], rs);
}
m$1(rh, "default");
function be(t9, e, r) {
  t9.prototype = e.prototype = r, r.constructor = t9;
}
m$1(be, "default");
function sr(t9, e) {
  var r = /* @__PURE__ */ Object.create(t9.prototype);
  for (var o2 in e) r[o2] = e[o2];
  return r;
}
m$1(sr, "extend");
function Te() {
}
m$1(Te, "Color");
var Ur = 0.7, Ui = 1 / Ur, ar = "\\s*([+-]?\\d+)\\s*", Yr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Qt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Um = /^#([0-9a-f]{3,8})$/, Ym = new RegExp(`^rgb\\(${ar},${ar},${ar}\\)$`), Gm = new RegExp(`^rgb\\(${Qt},${Qt},${Qt}\\)$`), Vm = new RegExp(`^rgba\\(${ar},${ar},${ar},${Yr}\\)$`), Xm = new RegExp(`^rgba\\(${Qt},${Qt},${Qt},${Yr}\\)$`), jm = new RegExp(`^hsl\\(${Yr},${Qt},${Qt}\\)$`), Zm = new RegExp(`^hsla\\(${Yr},${Qt},${Qt},${Yr}\\)$`), ih = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
be(Te, Yt, {
  copy(t9) {
    return Object.assign(new this.constructor(), this, t9);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: oh,
  formatHex: oh,
  formatHex8: Km,
  formatHsl: Qm,
  formatRgb: nh,
  toString: nh
});
function oh() {
  return this.rgb().formatHex();
}
m$1(oh, "color_formatHex");
function Km() {
  return this.rgb().formatHex8();
}
m$1(Km, "color_formatHex8");
function Qm() {
  return uh(this).formatHsl();
}
m$1(Qm, "color_formatHsl");
function nh() {
  return this.rgb().formatRgb();
}
m$1(nh, "color_formatRgb");
function Yt(t9) {
  var e, r;
  return t9 = /* @__PURE__ */ (t9 + "").trim().toLowerCase(), (e = /* @__PURE__ */ Um.exec(t9)) ? (r = e[1].length, e = /* @__PURE__ */ parseInt(e[1], 16), r === 6 ? sh(e) : r === 3 ? new St(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : r === 8 ? Wi(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : r === 4 ? Wi(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = /* @__PURE__ */ Ym.exec(t9)) ? new St(e[1], e[2], e[3], 1) : (e = /* @__PURE__ */ Gm.exec(t9)) ? new St(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = /* @__PURE__ */ Vm.exec(t9)) ? Wi(e[1], e[2], e[3], e[4]) : (e = /* @__PURE__ */ Xm.exec(t9)) ? Wi(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = /* @__PURE__ */ jm.exec(t9)) ? hh(e[1], e[2] / 100, e[3] / 100, 1) : (e = /* @__PURE__ */ Zm.exec(t9)) ? hh(e[1], e[2] / 100, e[3] / 100, e[4]) : ih.hasOwnProperty(t9) ? sh(ih[t9]) : t9 === "transparent" ? new St(NaN, NaN, NaN, 0) : null;
}
m$1(Yt, "color");
function sh(t9) {
  return new St(t9 >> 16 & 255, t9 >> 8 & 255, t9 & 255, 1);
}
m$1(sh, "rgbn");
function Wi(t9, e, r, o2) {
  return o2 <= 0 && (t9 = e = r = NaN), new St(t9, e, r, o2);
}
m$1(Wi, "rgba");
function os(t9) {
  return t9 instanceof Te || (t9 = /* @__PURE__ */ Yt(t9)), t9 ? (t9 = /* @__PURE__ */ t9.rgb(), new St(t9.r, t9.g, t9.b, t9.opacity)) : new St();
}
m$1(os, "rgbConvert");
function lr(t9, e, r, o2) {
  return arguments.length === 1 ? os(t9) : new St(t9, e, r, o2 ?? 1);
}
m$1(lr, "rgb");
function St(t9, e, r, o2) {
  this.r = +t9, this.g = +e, this.b = +r, this.opacity = +o2;
}
m$1(St, "Rgb");
be(St, lr, /* @__PURE__ */ sr(Te, {
  brighter(t9) {
    return t9 = t9 == null ? Ui : Math.pow(Ui, t9), new St(this.r * t9, this.g * t9, this.b * t9, this.opacity);
  },
  darker(t9) {
    return t9 = t9 == null ? Ur : Math.pow(Ur, t9), new St(this.r * t9, this.g * t9, this.b * t9, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new St(Ne(this.r), Ne(this.g), Ne(this.b), Yi(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ah,
  formatHex: ah,
  formatHex8: Jm,
  formatRgb: lh,
  toString: lh
}));
function ah() {
  return `#${Re(this.r)}${Re(this.g)}${Re(this.b)}`;
}
m$1(ah, "rgb_formatHex");
function Jm() {
  return `#${Re(this.r)}${Re(this.g)}${Re(this.b)}${Re((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
m$1(Jm, "rgb_formatHex8");
function lh() {
  let t9 = /* @__PURE__ */ Yi(this.opacity);
  return `${t9 === 1 ? "rgb(" : "rgba("}${Ne(this.r)}, ${Ne(this.g)}, ${Ne(this.b)}${t9 === 1 ? ")" : `, ${t9})`}`;
}
m$1(lh, "rgb_formatRgb");
function Yi(t9) {
  return isNaN(t9) ? 1 : Math.max(0, /* @__PURE__ */ Math.min(1, t9));
}
m$1(Yi, "clampa");
function Ne(t9) {
  return Math.max(0, /* @__PURE__ */ Math.min(255, Math.round(t9) || 0));
}
m$1(Ne, "clampi");
function Re(t9) {
  return t9 = /* @__PURE__ */ Ne(t9), (t9 < 16 ? "0" : "") + t9.toString(16);
}
m$1(Re, "hex");
function hh(t9, e, r, o2) {
  return o2 <= 0 ? t9 = e = r = NaN : r <= 0 || r >= 1 ? t9 = e = NaN : e <= 0 && (t9 = NaN), new Ut(t9, e, r, o2);
}
m$1(hh, "hsla");
function uh(t9) {
  if (t9 instanceof Ut) return new Ut(t9.h, t9.s, t9.l, t9.opacity);
  if (t9 instanceof Te || (t9 = /* @__PURE__ */ Yt(t9)), !t9) return new Ut();
  if (t9 instanceof Ut) return t9;
  t9 = /* @__PURE__ */ t9.rgb();
  var e = t9.r / 255, r = t9.g / 255, o2 = t9.b / 255, n2 = /* @__PURE__ */ Math.min(e, r, o2), s = /* @__PURE__ */ Math.max(e, r, o2), a = NaN, l = s - n2, c = (s + n2) / 2;
  return l ? (e === s ? a = (r - o2) / l + (r < o2) * 6 : r === s ? a = (o2 - e) / l + 2 : a = (e - r) / l + 4, l /= c < 0.5 ? s + n2 : 2 - s - n2, a *= 60) : l = c > 0 && c < 1 ? 0 : a, new Ut(a, l, c, t9.opacity);
}
m$1(uh, "hslConvert");
function fh(t9, e, r, o2) {
  return arguments.length === 1 ? uh(t9) : new Ut(t9, e, r, o2 ?? 1);
}
m$1(fh, "hsl");
function Ut(t9, e, r, o2) {
  this.h = +t9, this.s = +e, this.l = +r, this.opacity = +o2;
}
m$1(Ut, "Hsl");
be(Ut, fh, /* @__PURE__ */ sr(Te, {
  brighter(t9) {
    return t9 = t9 == null ? Ui : Math.pow(Ui, t9), new Ut(this.h, this.s, this.l * t9, this.opacity);
  },
  darker(t9) {
    return t9 = t9 == null ? Ur : Math.pow(Ur, t9), new Ut(this.h, this.s, this.l * t9, this.opacity);
  },
  rgb() {
    var t9 = this.h % 360 + (this.h < 0) * 360, e = isNaN(t9) || isNaN(this.s) ? 0 : this.s, r = this.l, o2 = r + (r < 0.5 ? r : 1 - r) * e, n2 = 2 * r - o2;
    return new St(is(t9 >= 240 ? t9 - 240 : t9 + 120, n2, o2), is(t9, n2, o2), is(t9 < 120 ? t9 + 240 : t9 - 120, n2, o2), this.opacity);
  },
  clamp() {
    return new Ut(ch(this.h), Hi(this.s), Hi(this.l), Yi(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    let t9 = /* @__PURE__ */ Yi(this.opacity);
    return `${t9 === 1 ? "hsl(" : "hsla("}${ch(this.h)}, ${Hi(this.s) * 100}%, ${Hi(this.l) * 100}%${t9 === 1 ? ")" : `, ${t9})`}`;
  }
}));
function ch(t9) {
  return t9 = (t9 || 0) % 360, t9 < 0 ? t9 + 360 : t9;
}
m$1(ch, "clamph");
function Hi(t9) {
  return Math.max(0, /* @__PURE__ */ Math.min(1, t9 || 0));
}
m$1(Hi, "clampt");
function is(t9, e, r) {
  return (t9 < 60 ? e + (r - e) * t9 / 60 : t9 < 180 ? r : t9 < 240 ? e + (r - e) * (240 - t9) / 60 : e) * 255;
}
m$1(is, "hsl2rgb");
var mh = Math.PI / 180, ph = 180 / Math.PI;
var Gi = 18, dh = 0.96422, gh = 1, xh = 0.82521, yh = 4 / 29, hr = 6 / 29, Ch = 3 * hr * hr, tp = hr * hr * hr;
function _h(t9) {
  if (t9 instanceof Jt) return new Jt(t9.l, t9.a, t9.b, t9.opacity);
  if (t9 instanceof he) return bh(t9);
  t9 instanceof St || (t9 = /* @__PURE__ */ os(t9));
  var e = /* @__PURE__ */ ls(t9.r), r = /* @__PURE__ */ ls(t9.g), o2 = /* @__PURE__ */ ls(t9.b), n2 = /* @__PURE__ */ ns((0.2225045 * e + 0.7168786 * r + 0.0606169 * o2) / gh), s, a;
  return e === r && r === o2 ? s = a = n2 : (s = /* @__PURE__ */ ns((0.4360747 * e + 0.3850649 * r + 0.1430804 * o2) / dh), a = /* @__PURE__ */ ns((0.0139322 * e + 0.0971045 * r + 0.7141733 * o2) / xh)), new Jt(116 * n2 - 16, 500 * (s - n2), 200 * (n2 - a), t9.opacity);
}
m$1(_h, "labConvert");
function hs(t9, e, r, o2) {
  return arguments.length === 1 ? _h(t9) : new Jt(t9, e, r, o2 ?? 1);
}
m$1(hs, "lab");
function Jt(t9, e, r, o2) {
  this.l = +t9, this.a = +e, this.b = +r, this.opacity = +o2;
}
m$1(Jt, "Lab");
be(Jt, hs, /* @__PURE__ */ sr(Te, {
  brighter(t9) {
    return new Jt(this.l + Gi * (t9 ?? 1), this.a, this.b, this.opacity);
  },
  darker(t9) {
    return new Jt(this.l - Gi * (t9 ?? 1), this.a, this.b, this.opacity);
  },
  rgb() {
    var t9 = (this.l + 16) / 116, e = isNaN(this.a) ? t9 : t9 + this.a / 500, r = isNaN(this.b) ? t9 : t9 - this.b / 200;
    return e = dh * ss(e), t9 = gh * ss(t9), r = xh * ss(r), new St(as(3.1338561 * e - 1.6168667 * t9 - 0.4906146 * r), as(-0.9787684 * e + 1.9161415 * t9 + 0.033454 * r), as(0.0719453 * e - 0.2289914 * t9 + 1.4052427 * r), this.opacity);
  }
}));
function ns(t9) {
  return t9 > tp ? Math.pow(t9, 1 / 3) : t9 / Ch + yh;
}
m$1(ns, "xyz2lab");
function ss(t9) {
  return t9 > hr ? t9 * t9 * t9 : Ch * (t9 - yh);
}
m$1(ss, "lab2xyz");
function as(t9) {
  return 255 * (t9 <= 31308e-7 ? 12.92 * t9 : 1.055 * Math.pow(t9, 1 / 2.4) - 0.055);
}
m$1(as, "lrgb2rgb");
function ls(t9) {
  return (t9 /= 255) <= 0.04045 ? t9 / 12.92 : Math.pow((t9 + 0.055) / 1.055, 2.4);
}
m$1(ls, "rgb2lrgb");
function ep(t9) {
  if (t9 instanceof he) return new he(t9.h, t9.c, t9.l, t9.opacity);
  if (t9 instanceof Jt || (t9 = /* @__PURE__ */ _h(t9)), t9.a === 0 && t9.b === 0) return new he(NaN, 0 < t9.l && t9.l < 100 ? 0 : NaN, t9.l, t9.opacity);
  var e = Math.atan2(t9.b, t9.a) * ph;
  return new he(e < 0 ? e + 360 : e, Math.sqrt(t9.a * t9.a + t9.b * t9.b), t9.l, t9.opacity);
}
m$1(ep, "hclConvert");
function Gr(t9, e, r, o2) {
  return arguments.length === 1 ? ep(t9) : new he(t9, e, r, o2 ?? 1);
}
m$1(Gr, "hcl");
function he(t9, e, r, o2) {
  this.h = +t9, this.c = +e, this.l = +r, this.opacity = +o2;
}
m$1(he, "Hcl");
function bh(t9) {
  if (isNaN(t9.h)) return new Jt(t9.l, 0, 0, t9.opacity);
  var e = t9.h * mh;
  return new Jt(t9.l, Math.cos(e) * t9.c, Math.sin(e) * t9.c, t9.opacity);
}
m$1(bh, "hcl2lab");
be(he, Gr, /* @__PURE__ */ sr(Te, {
  brighter(t9) {
    return new he(this.h, this.c, this.l + Gi * (t9 ?? 1), this.opacity);
  },
  darker(t9) {
    return new he(this.h, this.c, this.l - Gi * (t9 ?? 1), this.opacity);
  },
  rgb() {
    return bh(this).rgb();
  }
}));
var cr = /* @__PURE__ */ m$1((t9) => () => t9, "default");
function Th(t9, e) {
  return function(r) {
    return t9 + r * e;
  };
}
m$1(Th, "linear");
function rp(t9, e, r) {
  return t9 = /* @__PURE__ */ Math.pow(t9, r), e = Math.pow(e, r) - t9, r = 1 / r, function(o2) {
    return Math.pow(t9 + o2 * e, r);
  };
}
m$1(rp, "exponential");
function kh(t9, e) {
  var r = e - t9;
  return r ? Th(t9, r > 180 || r < -180 ? r - 360 * Math.round(r / 360) : r) : cr(isNaN(t9) ? e : t9);
}
m$1(kh, "hue");
function Sh(t9) {
  return (t9 = +t9) == 1 ? ce : function(e, r) {
    return r - e ? rp(e, r, t9) : cr(isNaN(e) ? r : e);
  };
}
m$1(Sh, "gamma");
function ce(t9, e) {
  var r = e - t9;
  return r ? Th(t9, r) : cr(isNaN(t9) ? e : t9);
}
m$1(ce, "nogamma");
function vh(t9) {
  return function(e, r) {
    var o2 = /* @__PURE__ */ t9((e = /* @__PURE__ */ Gr(e)).h, (r = /* @__PURE__ */ Gr(r)).h), n2 = /* @__PURE__ */ ce(e.c, r.c), s = /* @__PURE__ */ ce(e.l, r.l), a = /* @__PURE__ */ ce(e.opacity, r.opacity);
    return function(l) {
      return e.h = /* @__PURE__ */ o2(l), e.c = /* @__PURE__ */ n2(l), e.l = /* @__PURE__ */ s(l), e.opacity = /* @__PURE__ */ a(l), e + "";
    };
  };
}
m$1(vh, "hcl");
var ip = /* @__PURE__ */ vh(kh);
function cs(t9, e, r, o2, n2) {
  var s = t9 * t9, a = s * t9;
  return ((1 - 3 * t9 + 3 * s - a) * e + (4 - 6 * s + 3 * a) * r + (1 + 3 * t9 + 3 * s - 3 * a) * o2 + a * n2) / 6;
}
m$1(cs, "basis");
function us(t9) {
  var e = t9.length - 1;
  return function(r) {
    var o2 = r <= 0 ? r = 0 : r >= 1 ? (r = 1, e - 1) : Math.floor(r * e), n2 = t9[o2], s = t9[o2 + 1], a = o2 > 0 ? t9[o2 - 1] : 2 * n2 - s, l = o2 < e - 1 ? t9[o2 + 2] : 2 * s - n2;
    return cs((r - o2 / e) * e, a, n2, s, l);
  };
}
m$1(us, "default");
function fs(t9) {
  var e = t9.length;
  return function(r) {
    var o2 = /* @__PURE__ */ Math.floor(((r %= 1) < 0 ? ++r : r) * e), n2 = t9[(o2 + e - 1) % e], s = t9[o2 % e], a = t9[(o2 + 1) % e], l = t9[(o2 + 2) % e];
    return cs((r - o2 / e) * e, n2, s, a, l);
  };
}
m$1(fs, "default");
var qe = /* @__PURE__ */ m$1(function t(e) {
  var r = /* @__PURE__ */ Sh(e);
  function o2(n2, s) {
    var a = /* @__PURE__ */ r((n2 = /* @__PURE__ */ lr(n2)).r, (s = /* @__PURE__ */ lr(s)).r), l = /* @__PURE__ */ r(n2.g, s.g), c = /* @__PURE__ */ r(n2.b, s.b), h = /* @__PURE__ */ ce(n2.opacity, s.opacity);
    return function(u) {
      return n2.r = /* @__PURE__ */ a(u), n2.g = /* @__PURE__ */ l(u), n2.b = /* @__PURE__ */ c(u), n2.opacity = /* @__PURE__ */ h(u), n2 + "";
    };
  }
  return m$1(o2, "rgb"), o2.gamma = t, o2;
}, "rgbGamma")(1);
function wh(t9) {
  return function(e) {
    var r = e.length, o2 = new Array(r), n2 = new Array(r), s = new Array(r), a, l;
    for (a = 0; a < r; ++a) l = /* @__PURE__ */ lr(e[a]), o2[a] = l.r || 0, n2[a] = l.g || 0, s[a] = l.b || 0;
    return o2 = /* @__PURE__ */ t9(o2), n2 = /* @__PURE__ */ t9(n2), s = /* @__PURE__ */ t9(s), l.opacity = 1, function(c) {
      return l.r = /* @__PURE__ */ o2(c), l.g = /* @__PURE__ */ n2(c), l.b = /* @__PURE__ */ s(c), l + "";
    };
  };
}
m$1(wh, "rgbSpline");
function ms(t9, e) {
  e || (e = []);
  var r = t9 ? Math.min(e.length, t9.length) : 0, o2 = /* @__PURE__ */ e.slice(), n2;
  return function(s) {
    for (n2 = 0; n2 < r; ++n2) o2[n2] = t9[n2] * (1 - s) + e[n2] * s;
    return o2;
  };
}
m$1(ms, "default");
function Bh(t9) {
  return ArrayBuffer.isView(t9) && !(t9 instanceof DataView);
}
m$1(Bh, "isNumberArray");
function Fh(t9, e) {
  var r = e ? e.length : 0, o2 = t9 ? Math.min(r, t9.length) : 0, n2 = new Array(o2), s = new Array(r), a;
  for (a = 0; a < o2; ++a) n2[a] = /* @__PURE__ */ ke(t9[a], e[a]);
  for (; a < r; ++a) s[a] = e[a];
  return function(l) {
    for (a = 0; a < o2; ++a) s[a] = /* @__PURE__ */ n2[a](l);
    return s;
  };
}
m$1(Fh, "genericArray");
function ps(t9, e) {
  var r = /* @__PURE__ */ new Date();
  return t9 = +t9, e = +e, function(o2) {
    return r.setTime(t9 * (1 - o2) + e * o2), r;
  };
}
m$1(ps, "default");
function gt(t9, e) {
  return t9 = +t9, e = +e, function(r) {
    return t9 * (1 - r) + e * r;
  };
}
m$1(gt, "default");
function ds(t9, e) {
  var r = {}, o2 = {}, n2;
  (t9 === null || typeof t9 != "object") && (t9 = {}), (e === null || typeof e != "object") && (e = {});
  for (n2 in e) n2 in t9 ? r[n2] = /* @__PURE__ */ ke(t9[n2], e[n2]) : o2[n2] = e[n2];
  return function(s) {
    for (n2 in r) o2[n2] = /* @__PURE__ */ r[n2](s);
    return o2;
  };
}
m$1(ds, "default");
var xs = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, gs = new RegExp(xs.source, "g");
function ap(t9) {
  return function() {
    return t9;
  };
}
m$1(ap, "zero");
function lp(t9) {
  return function(e) {
    return t9(e) + "";
  };
}
m$1(lp, "one");
function ur(t9, e) {
  var r = xs.lastIndex = gs.lastIndex = 0, o2, n2, s, a = -1, l = [], c = [];
  for (t9 = t9 + "", e = e + ""; (o2 = /* @__PURE__ */ xs.exec(t9)) && (n2 = /* @__PURE__ */ gs.exec(e)); ) (s = n2.index) > r && (s = /* @__PURE__ */ e.slice(r, s), l[a] ? l[a] += s : l[++a] = s), (o2 = o2[0]) === (n2 = n2[0]) ? l[a] ? l[a] += n2 : l[++a] = n2 : (l[++a] = null, c.push({
    i: a,
    x: /* @__PURE__ */ gt(o2, n2)
  })), r = gs.lastIndex;
  return r < e.length && (s = /* @__PURE__ */ e.slice(r), l[a] ? l[a] += s : l[++a] = s), l.length < 2 ? c[0] ? lp(c[0].x) : ap(e) : (e = c.length, function(h) {
    for (var u = 0, d; u < e; ++u) l[(d = c[u]).i] = /* @__PURE__ */ d.x(h);
    return l.join("");
  });
}
m$1(ur, "default");
function ke(t9, e) {
  var r = typeof e, o2;
  return e == null || r === "boolean" ? cr(e) : (r === "number" ? gt : r === "string" ? (o2 = /* @__PURE__ */ Yt(e)) ? (e = o2, qe) : ur : e instanceof Yt ? qe : e instanceof Date ? ps : Bh(e) ? ms : Array.isArray(e) ? Fh : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? ds : gt)(t9, e);
}
m$1(ke, "default");
function Vi(t9, e) {
  return t9 = +t9, e = +e, function(r) {
    return Math.round(t9 * (1 - r) + e * r);
  };
}
m$1(Vi, "default");
var Mh = 180 / Math.PI, Xi = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function ji(t9, e, r, o2, n2, s) {
  var a, l, c;
  return (a = /* @__PURE__ */ Math.sqrt(t9 * t9 + e * e)) && (t9 /= a, e /= a), (c = t9 * r + e * o2) && (r -= t9 * c, o2 -= e * c), (l = /* @__PURE__ */ Math.sqrt(r * r + o2 * o2)) && (r /= l, o2 /= l, c /= l), t9 * o2 < e * r && (t9 = -t9, e = -e, c = -c, a = -a), {
    translateX: n2,
    translateY: s,
    rotate: Math.atan2(e, t9) * Mh,
    skewX: Math.atan(c) * Mh,
    scaleX: a,
    scaleY: l
  };
}
m$1(ji, "default");
var Zi;
function Lh(t9) {
  let e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t9 + "");
  return e.isIdentity ? Xi : ji(e.a, e.b, e.c, e.d, e.e, e.f);
}
m$1(Lh, "parseCss");
function Ah(t9) {
  return t9 == null ? Xi : (Zi || (Zi = /* @__PURE__ */ document.createElementNS("http://www.w3.org/2000/svg", "g")), Zi.setAttribute("transform", t9), (t9 = /* @__PURE__ */ Zi.transform.baseVal.consolidate()) ? (t9 = t9.matrix, ji(t9.a, t9.b, t9.c, t9.d, t9.e, t9.f)) : Xi);
}
m$1(Ah, "parseSvg");
function Eh(t9, e, r, o2) {
  function n2(h) {
    return h.length ? h.pop() + " " : "";
  }
  m$1(n2, "pop");
  function s(h, u, d, f, g, T) {
    if (h !== d || u !== f) {
      var L = /* @__PURE__ */ g.push("translate(", null, e, null, r);
      T.push({
        i: L - 4,
        x: /* @__PURE__ */ gt(h, d)
      }, {
        i: L - 2,
        x: /* @__PURE__ */ gt(u, f)
      });
    } else (d || f) && g.push("translate(" + d + e + f + r);
  }
  m$1(s, "translate");
  function a(h, u, d, f) {
    h !== u ? (h - u > 180 ? u += 360 : u - h > 180 && (h += 360), f.push({
      i: d.push(n2(d) + "rotate(", null, o2) - 2,
      x: /* @__PURE__ */ gt(h, u)
    })) : u && d.push(n2(d) + "rotate(" + u + o2);
  }
  m$1(a, "rotate");
  function l(h, u, d, f) {
    h !== u ? f.push({
      i: d.push(n2(d) + "skewX(", null, o2) - 2,
      x: /* @__PURE__ */ gt(h, u)
    }) : u && d.push(n2(d) + "skewX(" + u + o2);
  }
  m$1(l, "skewX");
  function c(h, u, d, f, g, T) {
    if (h !== d || u !== f) {
      var L = /* @__PURE__ */ g.push(n2(g) + "scale(", null, ",", null, ")");
      T.push({
        i: L - 4,
        x: /* @__PURE__ */ gt(h, d)
      }, {
        i: L - 2,
        x: /* @__PURE__ */ gt(u, f)
      });
    } else (d !== 1 || f !== 1) && g.push(n2(g) + "scale(" + d + "," + f + ")");
  }
  return m$1(c, "scale"), function(h, u) {
    var d = [], f = [];
    return h = /* @__PURE__ */ t9(h), u = /* @__PURE__ */ t9(u), s(h.translateX, h.translateY, u.translateX, u.translateY, d, f), a(h.rotate, u.rotate, d, f), l(h.skewX, u.skewX, d, f), c(h.scaleX, h.scaleY, u.scaleX, u.scaleY, d, f), h = u = null, function(g) {
      for (var T = -1, L = f.length, $; ++T < L; ) d[($ = f[T]).i] = /* @__PURE__ */ $.x(g);
      return d.join("");
    };
  };
}
m$1(Eh, "interpolateTransform");
var ys = /* @__PURE__ */ Eh(Lh, "px, ", "px)", "deg)"), Cs = /* @__PURE__ */ Eh(Ah, ", ", ")", ")");
function Se(t9, e) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t9);
      break;
    default:
      this.range(e).domain(t9);
      break;
  }
  return this;
}
m$1(Se, "initRange");
var _s = /* @__PURE__ */ Symbol("implicit");
function Vr() {
  var t9 = new rr(), e = [], r = [], o2 = _s;
  function n2(s) {
    let a = /* @__PURE__ */ t9.get(s);
    if (a === void 0) {
      if (o2 !== _s) return o2;
      t9.set(s, a = e.push(s) - 1);
    }
    return r[a % r.length];
  }
  return m$1(n2, "scale"), n2.domain = function(s) {
    if (!arguments.length) return e.slice();
    e = [], t9 = new rr();
    for (let a of s) t9.has(a) || t9.set(a, e.push(a) - 1);
    return n2;
  }, n2.range = function(s) {
    return arguments.length ? (r = /* @__PURE__ */ Array.from(s), n2) : r.slice();
  }, n2.unknown = function(s) {
    return arguments.length ? (o2 = s, n2) : o2;
  }, n2.copy = function() {
    return Vr(e, r).unknown(o2);
  }, Se.apply(n2, arguments), n2;
}
m$1(Vr, "ordinal");
function bs(t9) {
  return function() {
    return t9;
  };
}
m$1(bs, "constants");
function Ts(t9) {
  return +t9;
}
m$1(Ts, "number");
var Dh = [
  0,
  1
];
function fr(t9) {
  return t9;
}
m$1(fr, "identity");
function ks(t9, e) {
  return (e -= t9 = +t9) ? function(r) {
    return (r - t9) / e;
  } : bs(isNaN(e) ? NaN : 0.5);
}
m$1(ks, "normalize");
function hp(t9, e) {
  var r;
  return t9 > e && (r = t9, t9 = e, e = r), function(o2) {
    return Math.max(t9, /* @__PURE__ */ Math.min(e, o2));
  };
}
m$1(hp, "clamper");
function cp(t9, e, r) {
  var o2 = t9[0], n2 = t9[1], s = e[0], a = e[1];
  return n2 < o2 ? (o2 = /* @__PURE__ */ ks(n2, o2), s = /* @__PURE__ */ r(a, s)) : (o2 = /* @__PURE__ */ ks(o2, n2), s = /* @__PURE__ */ r(s, a)), function(l) {
    return s(/* @__PURE__ */ o2(l));
  };
}
m$1(cp, "bimap");
function up(t9, e, r) {
  var o2 = Math.min(t9.length, e.length) - 1, n2 = new Array(o2), s = new Array(o2), a = -1;
  for (t9[o2] < t9[0] && (t9 = /* @__PURE__ */ t9.slice().reverse(), e = /* @__PURE__ */ e.slice().reverse()); ++a < o2; ) n2[a] = /* @__PURE__ */ ks(t9[a], t9[a + 1]), s[a] = /* @__PURE__ */ r(e[a], e[a + 1]);
  return function(l) {
    var c = pn(t9, l, 1, o2) - 1;
    return s[c](/* @__PURE__ */ n2[c](l));
  };
}
m$1(up, "polymap");
function Ki(t9, e) {
  return e.domain(/* @__PURE__ */ t9.domain()).range(/* @__PURE__ */ t9.range()).interpolate(/* @__PURE__ */ t9.interpolate()).clamp(/* @__PURE__ */ t9.clamp()).unknown(/* @__PURE__ */ t9.unknown());
}
m$1(Ki, "copy");
function fp() {
  var t9 = Dh, e = Dh, r = ke, o2, n2, s, a = fr, l, c, h;
  function u() {
    var f = /* @__PURE__ */ Math.min(t9.length, e.length);
    return a !== fr && (a = /* @__PURE__ */ hp(t9[0], t9[f - 1])), l = f > 2 ? up : cp, c = h = null, d;
  }
  m$1(u, "rescale");
  function d(f) {
    return f == null || isNaN(f = +f) ? s : (c || (c = /* @__PURE__ */ l(/* @__PURE__ */ t9.map(o2), e, r)))(/* @__PURE__ */ o2(/* @__PURE__ */ a(f)));
  }
  return m$1(d, "scale"), d.invert = function(f) {
    return a(/* @__PURE__ */ n2(/* @__PURE__ */ (h || (h = /* @__PURE__ */ l(e, /* @__PURE__ */ t9.map(o2), gt)))(f)));
  }, d.domain = function(f) {
    return arguments.length ? (t9 = /* @__PURE__ */ Array.from(f, Ts), u()) : t9.slice();
  }, d.range = function(f) {
    return arguments.length ? (e = /* @__PURE__ */ Array.from(f), u()) : e.slice();
  }, d.rangeRound = function(f) {
    return e = /* @__PURE__ */ Array.from(f), r = Vi, u();
  }, d.clamp = function(f) {
    return arguments.length ? (a = f ? true : fr, u()) : a !== fr;
  }, d.interpolate = function(f) {
    return arguments.length ? (r = f, u()) : r;
  }, d.unknown = function(f) {
    return arguments.length ? (s = f, d) : s;
  }, function(f, g) {
    return o2 = f, n2 = g, u();
  };
}
m$1(fp, "transformer");
function Xr() {
  return fp()(fr, fr);
}
m$1(Xr, "continuous");
function Ss(t9) {
  return Math.abs(t9 = /* @__PURE__ */ Math.round(t9)) >= 1e21 ? t9.toLocaleString("en").replace(/,/g, "") : t9.toString(10);
}
m$1(Ss, "default");
function ze(t9, e) {
  if ((r = /* @__PURE__ */ (t9 = e ? t9.toExponential(e - 1) : t9.toExponential()).indexOf("e")) < 0) return null;
  var r, o2 = /* @__PURE__ */ t9.slice(0, r);
  return [
    o2.length > 1 ? o2[0] + o2.slice(2) : o2,
    +t9.slice(r + 1)
  ];
}
m$1(ze, "formatDecimalParts");
function Gt(t9) {
  return t9 = /* @__PURE__ */ ze(/* @__PURE__ */ Math.abs(t9)), t9 ? t9[1] : NaN;
}
m$1(Gt, "default");
function vs(t9, e) {
  return function(r, o2) {
    for (var n2 = r.length, s = [], a = 0, l = t9[0], c = 0; n2 > 0 && l > 0 && (c + l + 1 > o2 && (l = /* @__PURE__ */ Math.max(1, o2 - c)), s.push(/* @__PURE__ */ r.substring(n2 -= l, n2 + l)), !((c += l + 1) > o2)); ) l = t9[a = (a + 1) % t9.length];
    return s.reverse().join(e);
  };
}
m$1(vs, "default");
function ws(t9) {
  return function(e) {
    return e.replace(/[0-9]/g, function(r) {
      return t9[+r];
    });
  };
}
m$1(ws, "default");
var mp = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function ve(t9) {
  if (!(e = /* @__PURE__ */ mp.exec(t9))) throw new Error("invalid format: " + t9);
  var e;
  return new Qi({
    fill: e[1],
    align: e[2],
    sign: e[3],
    symbol: e[4],
    zero: e[5],
    width: e[6],
    comma: e[7],
    precision: e[8] && e[8].slice(1),
    trim: e[9],
    type: e[10]
  });
}
m$1(ve, "formatSpecifier");
ve.prototype = Qi.prototype;
function Qi(t9) {
  this.fill = t9.fill === void 0 ? " " : t9.fill + "", this.align = t9.align === void 0 ? ">" : t9.align + "", this.sign = t9.sign === void 0 ? "-" : t9.sign + "", this.symbol = t9.symbol === void 0 ? "" : t9.symbol + "", this.zero = !!t9.zero, this.width = t9.width === void 0 ? void 0 : +t9.width, this.comma = !!t9.comma, this.precision = t9.precision === void 0 ? void 0 : +t9.precision, this.trim = !!t9.trim, this.type = t9.type === void 0 ? "" : t9.type + "";
}
m$1(Qi, "FormatSpecifier");
Qi.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Bs(t9) {
  t: for (var e = t9.length, r = 1, o2 = -1, n2; r < e; ++r) switch (t9[r]) {
    case ".":
      o2 = n2 = r;
      break;
    case "0":
      o2 === 0 && (o2 = r), n2 = r;
      break;
    default:
      if (!+t9[r]) break t;
      o2 > 0 && (o2 = 0);
      break;
  }
  return o2 > 0 ? t9.slice(0, o2) + t9.slice(n2 + 1) : t9;
}
m$1(Bs, "default");
var Fs;
function Ms(t9, e) {
  var r = /* @__PURE__ */ ze(t9, e);
  if (!r) return t9 + "";
  var o2 = r[0], n2 = r[1], s = n2 - (Fs = Math.max(-8, /* @__PURE__ */ Math.min(8, /* @__PURE__ */ Math.floor(n2 / 3))) * 3) + 1, a = o2.length;
  return s === a ? o2 : s > a ? o2 + new Array(s - a + 1).join("0") : s > 0 ? o2.slice(0, s) + "." + o2.slice(s) : "0." + new Array(1 - s).join("0") + ze(t9, /* @__PURE__ */ Math.max(0, e + s - 1))[0];
}
m$1(Ms, "default");
function Ji(t9, e) {
  var r = /* @__PURE__ */ ze(t9, e);
  if (!r) return t9 + "";
  var o2 = r[0], n2 = r[1];
  return n2 < 0 ? "0." + new Array(-n2).join("0") + o2 : o2.length > n2 + 1 ? o2.slice(0, n2 + 1) + "." + o2.slice(n2 + 1) : o2 + new Array(n2 - o2.length + 2).join("0");
}
m$1(Ji, "default");
var Ls = {
  "%": /* @__PURE__ */ m$1((t9, e) => (t9 * 100).toFixed(e), "%"),
  b: /* @__PURE__ */ m$1((t9) => Math.round(t9).toString(2), "b"),
  c: /* @__PURE__ */ m$1((t9) => t9 + "", "c"),
  d: Ss,
  e: /* @__PURE__ */ m$1((t9, e) => t9.toExponential(e), "e"),
  f: /* @__PURE__ */ m$1((t9, e) => t9.toFixed(e), "f"),
  g: /* @__PURE__ */ m$1((t9, e) => t9.toPrecision(e), "g"),
  o: /* @__PURE__ */ m$1((t9) => Math.round(t9).toString(8), "o"),
  p: /* @__PURE__ */ m$1((t9, e) => Ji(t9 * 100, e), "p"),
  r: Ji,
  s: Ms,
  X: /* @__PURE__ */ m$1((t9) => Math.round(t9).toString(16).toUpperCase(), "X"),
  x: /* @__PURE__ */ m$1((t9) => Math.round(t9).toString(16), "x")
};
function to(t9) {
  return t9;
}
m$1(to, "default");
var Oh = Array.prototype.map, Ih = [
  "y",
  "z",
  "a",
  "f",
  "p",
  "n",
  "µ",
  "m",
  "",
  "k",
  "M",
  "G",
  "T",
  "P",
  "E",
  "Z",
  "Y"
];
function As(t9) {
  var e = t9.grouping === void 0 || t9.thousands === void 0 ? to : vs(/* @__PURE__ */ Oh.call(t9.grouping, Number), t9.thousands + ""), r = t9.currency === void 0 ? "" : t9.currency[0] + "", o2 = t9.currency === void 0 ? "" : t9.currency[1] + "", n2 = t9.decimal === void 0 ? "." : t9.decimal + "", s = t9.numerals === void 0 ? to : ws(/* @__PURE__ */ Oh.call(t9.numerals, String)), a = t9.percent === void 0 ? "%" : t9.percent + "", l = t9.minus === void 0 ? "−" : t9.minus + "", c = t9.nan === void 0 ? "NaN" : t9.nan + "";
  function h(d) {
    d = /* @__PURE__ */ ve(d);
    var f = d.fill, g = d.align, T = d.sign, L = d.symbol, $ = d.zero, z = d.width, G = d.comma, E = d.precision, B = d.trim, P = d.type;
    P === "n" ? (G = true, P = "g") : Ls[P] || (E === void 0 && (E = 12), B = true, P = "g"), ($ || f === "0" && g === "=") && ($ = true, f = "0", g = "=");
    var w = L === "$" ? r : L === "#" && /[boxX]/.test(P) ? "0" + P.toLowerCase() : "", X = L === "$" ? o2 : /[%p]/.test(P) ? a : "", j = Ls[P], W = /* @__PURE__ */ /[defgprs%]/.test(P);
    E = E === void 0 ? 6 : /[gprs]/.test(P) ? Math.max(1, /* @__PURE__ */ Math.min(21, E)) : Math.max(0, /* @__PURE__ */ Math.min(20, E));
    function it(M) {
      var k = w, x = X, y, F, S;
      if (P === "c") x = j(M) + x, M = "";
      else {
        M = +M;
        var N = M < 0 || 1 / M < 0;
        if (M = isNaN(M) ? c : j(/* @__PURE__ */ Math.abs(M), E), B && (M = /* @__PURE__ */ Bs(M)), N && +M == 0 && T !== "+" && (N = false), k = (N ? T === "(" ? T : l : T === "-" || T === "(" ? "" : T) + k, x = (P === "s" ? Ih[8 + Fs / 3] : "") + x + (N && T === "(" ? ")" : ""), W) {
          for (y = -1, F = M.length; ++y < F; ) if (S = /* @__PURE__ */ M.charCodeAt(y), 48 > S || S > 57) {
            x = (S === 46 ? n2 + M.slice(y + 1) : M.slice(y)) + x, M = /* @__PURE__ */ M.slice(0, y);
            break;
          }
        }
      }
      G && !$ && (M = /* @__PURE__ */ e(M, 1 / 0));
      var O = k.length + M.length + x.length, U = O < z ? new Array(z - O + 1).join(f) : "";
      switch (G && $ && (M = /* @__PURE__ */ e(U + M, U.length ? z - x.length : 1 / 0), U = ""), g) {
        case "<":
          M = k + M + x + U;
          break;
        case "=":
          M = k + U + M + x;
          break;
        case "^":
          M = U.slice(0, O = U.length >> 1) + k + M + x + U.slice(O);
          break;
        default:
          M = U + k + M + x;
          break;
      }
      return s(M);
    }
    return m$1(it, "format"), it.toString = function() {
      return d + "";
    }, it;
  }
  m$1(h, "newFormat");
  function u(d, f) {
    var g = /* @__PURE__ */ h((d = /* @__PURE__ */ ve(d), d.type = "f", d)), T = Math.max(-8, /* @__PURE__ */ Math.min(8, /* @__PURE__ */ Math.floor(Gt(f) / 3))) * 3, L = /* @__PURE__ */ Math.pow(10, -T), $ = Ih[8 + T / 3];
    return function(z) {
      return g(L * z) + $;
    };
  }
  return m$1(u, "formatPrefix"), {
    format: h,
    formatPrefix: u
  };
}
m$1(As, "default");
var eo, ro, io;
Es({
  thousands: ",",
  grouping: [
    3
  ],
  currency: [
    "$",
    ""
  ]
});
function Es(t9) {
  return eo = /* @__PURE__ */ As(t9), ro = eo.format, io = eo.formatPrefix, eo;
}
m$1(Es, "defaultLocale");
function oo(t9) {
  return Math.max(0, -Gt(/* @__PURE__ */ Math.abs(t9)));
}
m$1(oo, "default");
function no(t9, e) {
  return Math.max(0, Math.max(-8, /* @__PURE__ */ Math.min(8, /* @__PURE__ */ Math.floor(Gt(e) / 3))) * 3 - Gt(/* @__PURE__ */ Math.abs(t9)));
}
m$1(no, "default");
function so(t9, e) {
  return t9 = /* @__PURE__ */ Math.abs(t9), e = Math.abs(e) - t9, Math.max(0, Gt(e) - Gt(t9)) + 1;
}
m$1(so, "default");
function Ds(t9, e, r, o2) {
  var n2 = /* @__PURE__ */ ir(t9, e, r), s;
  switch (o2 = /* @__PURE__ */ ve(o2 ?? ",f"), o2.type) {
    case "s": {
      var a = /* @__PURE__ */ Math.max(/* @__PURE__ */ Math.abs(t9), /* @__PURE__ */ Math.abs(e));
      return o2.precision == null && !isNaN(s = /* @__PURE__ */ no(n2, a)) && (o2.precision = s), io(o2, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      o2.precision == null && !isNaN(s = /* @__PURE__ */ so(n2, /* @__PURE__ */ Math.max(/* @__PURE__ */ Math.abs(t9), /* @__PURE__ */ Math.abs(e)))) && (o2.precision = s - (o2.type === "e"));
      break;
    }
    case "f":
    case "%": {
      o2.precision == null && !isNaN(s = /* @__PURE__ */ oo(n2)) && (o2.precision = s - (o2.type === "%") * 2);
      break;
    }
  }
  return ro(o2);
}
m$1(Ds, "tickFormat");
function pp(t9) {
  var e = t9.domain;
  return t9.ticks = function(r) {
    var o2 = /* @__PURE__ */ e();
    return Ri(o2[0], o2[o2.length - 1], r ?? 10);
  }, t9.tickFormat = function(r, o2) {
    var n2 = /* @__PURE__ */ e();
    return Ds(n2[0], n2[n2.length - 1], r ?? 10, o2);
  }, t9.nice = function(r) {
    r == null && (r = 10);
    var o2 = /* @__PURE__ */ e(), n2 = 0, s = o2.length - 1, a = o2[n2], l = o2[s], c, h, u = 10;
    for (l < a && (h = a, a = l, l = h, h = n2, n2 = s, s = h); u-- > 0; ) {
      if (h = /* @__PURE__ */ zr(a, l, r), h === c) return o2[n2] = a, o2[s] = l, e(o2);
      if (h > 0) a = Math.floor(a / h) * h, l = Math.ceil(l / h) * h;
      else if (h < 0) a = Math.ceil(a * h) / h, l = Math.floor(l * h) / h;
      else break;
      c = h;
    }
    return t9;
  }, t9;
}
m$1(pp, "linearish");
function Os() {
  var t9 = /* @__PURE__ */ Xr();
  return t9.copy = function() {
    return Ki(t9, /* @__PURE__ */ Os());
  }, Se.apply(t9, arguments), pp(t9);
}
m$1(Os, "linear");
var Is = /* @__PURE__ */ new Date(), Rs = /* @__PURE__ */ new Date();
function ot(t9, e, r, o2) {
  function n2(s) {
    return t9(s = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+s)), s;
  }
  return m$1(n2, "interval"), n2.floor = (s) => (t9(s = /* @__PURE__ */ new Date(+s)), s), n2.ceil = (s) => (t9(s = new Date(s - 1)), e(s, 1), t9(s), s), n2.round = (s) => {
    let a = /* @__PURE__ */ n2(s), l = /* @__PURE__ */ n2.ceil(s);
    return s - a < l - s ? a : l;
  }, n2.offset = (s, a) => (e(s = /* @__PURE__ */ new Date(+s), a == null ? 1 : Math.floor(a)), s), n2.range = (s, a, l) => {
    let c = [];
    if (s = /* @__PURE__ */ n2.ceil(s), l = l == null ? 1 : Math.floor(l), !(s < a) || !(l > 0)) return c;
    let h;
    do
      c.push(h = /* @__PURE__ */ new Date(+s)), e(s, l), t9(s);
    while (h < s && s < a);
    return c;
  }, n2.filter = (s) => ot((a) => {
    if (a >= a) for (; t9(a), !s(a); ) a.setTime(a - 1);
  }, (a, l) => {
    if (a >= a) if (l < 0) for (; ++l <= 0; ) for (; e(a, -1), !s(a); ) ;
    else for (; --l >= 0; ) for (; e(a, 1), !s(a); ) ;
  }), r && (n2.count = (s, a) => (Is.setTime(+s), Rs.setTime(+a), t9(Is), t9(Rs), Math.floor(/* @__PURE__ */ r(Is, Rs))), n2.every = (s) => (s = /* @__PURE__ */ Math.floor(s), !isFinite(s) || !(s > 0) ? null : s > 1 ? n2.filter(o2 ? (a) => o2(a) % s === 0 : (a) => n2.count(0, a) % s === 0) : n2)), n2;
}
m$1(ot, "timeInterval");
var Pe = /* @__PURE__ */ ot(() => {
}, (t9, e) => {
  t9.setTime(+t9 + e);
}, (t9, e) => e - t9);
Pe.every = (t9) => (t9 = /* @__PURE__ */ Math.floor(t9), !isFinite(t9) || !(t9 > 0) ? null : t9 > 1 ? ot((e) => {
  e.setTime(Math.floor(e / t9) * t9);
}, (e, r) => {
  e.setTime(+e + r * t9);
}, (e, r) => (r - e) / t9) : Pe);
Pe.range;
var te = /* @__PURE__ */ ot((t9) => {
  t9.setTime(t9 - t9.getMilliseconds());
}, (t9, e) => {
  t9.setTime(+t9 + e * 1e3);
}, (t9, e) => (e - t9) / 1e3, (t9) => t9.getUTCSeconds());
te.range;
var mr = /* @__PURE__ */ ot((t9) => {
  t9.setTime(t9 - t9.getMilliseconds() - t9.getSeconds() * 1e3);
}, (t9, e) => {
  t9.setTime(+t9 + e * 6e4);
}, (t9, e) => (e - t9) / 6e4, (t9) => t9.getMinutes());
mr.range;
var ao = /* @__PURE__ */ ot((t9) => {
  t9.setUTCSeconds(0, 0);
}, (t9, e) => {
  t9.setTime(+t9 + e * 6e4);
}, (t9, e) => (e - t9) / 6e4, (t9) => t9.getUTCMinutes());
ao.range;
var pr = /* @__PURE__ */ ot((t9) => {
  t9.setTime(t9 - t9.getMilliseconds() - t9.getSeconds() * 1e3 - t9.getMinutes() * 6e4);
}, (t9, e) => {
  t9.setTime(+t9 + e * 36e5);
}, (t9, e) => (e - t9) / 36e5, (t9) => t9.getHours());
pr.range;
var lo = /* @__PURE__ */ ot((t9) => {
  t9.setUTCMinutes(0, 0, 0);
}, (t9, e) => {
  t9.setTime(+t9 + e * 36e5);
}, (t9, e) => (e - t9) / 36e5, (t9) => t9.getUTCHours());
lo.range;
var ue = /* @__PURE__ */ ot((t9) => t9.setHours(0, 0, 0, 0), (t9, e) => t9.setDate(t9.getDate() + e), (t9, e) => (e - t9 - (e.getTimezoneOffset() - t9.getTimezoneOffset()) * 6e4) / 864e5, (t9) => t9.getDate() - 1);
ue.range;
var Zr = /* @__PURE__ */ ot((t9) => {
  t9.setUTCHours(0, 0, 0, 0);
}, (t9, e) => {
  t9.setUTCDate(t9.getUTCDate() + e);
}, (t9, e) => (e - t9) / 864e5, (t9) => t9.getUTCDate() - 1);
Zr.range;
var ho = /* @__PURE__ */ ot((t9) => {
  t9.setUTCHours(0, 0, 0, 0);
}, (t9, e) => {
  t9.setUTCDate(t9.getUTCDate() + e);
}, (t9, e) => (e - t9) / 864e5, (t9) => Math.floor(t9 / 864e5));
ho.range;
function He(t9) {
  return ot((e) => {
    e.setDate(e.getDate() - (e.getDay() + 7 - t9) % 7), e.setHours(0, 0, 0, 0);
  }, (e, r) => {
    e.setDate(e.getDate() + r * 7);
  }, (e, r) => (r - e - (r.getTimezoneOffset() - e.getTimezoneOffset()) * 6e4) / 6048e5);
}
m$1(He, "timeWeekday");
var fe = /* @__PURE__ */ He(0), dr = /* @__PURE__ */ He(1), zh = /* @__PURE__ */ He(2), Ph = /* @__PURE__ */ He(3), we = /* @__PURE__ */ He(4), $h = /* @__PURE__ */ He(5), Wh = /* @__PURE__ */ He(6);
fe.range;
dr.range;
zh.range;
Ph.range;
we.range;
$h.range;
Wh.range;
function Ue(t9) {
  return ot((e) => {
    e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t9) % 7), e.setUTCHours(0, 0, 0, 0);
  }, (e, r) => {
    e.setUTCDate(e.getUTCDate() + r * 7);
  }, (e, r) => (r - e) / 6048e5);
}
m$1(Ue, "utcWeekday");
var Ye = /* @__PURE__ */ Ue(0), gr = /* @__PURE__ */ Ue(1), Uh = /* @__PURE__ */ Ue(2), Yh = /* @__PURE__ */ Ue(3), Be = /* @__PURE__ */ Ue(4), Gh = /* @__PURE__ */ Ue(5), Vh = /* @__PURE__ */ Ue(6);
Ye.range;
gr.range;
Uh.range;
Yh.range;
Be.range;
Gh.range;
Vh.range;
var xr = /* @__PURE__ */ ot((t9) => {
  t9.setDate(1), t9.setHours(0, 0, 0, 0);
}, (t9, e) => {
  t9.setMonth(t9.getMonth() + e);
}, (t9, e) => e.getMonth() - t9.getMonth() + (e.getFullYear() - t9.getFullYear()) * 12, (t9) => t9.getMonth());
xr.range;
var co = /* @__PURE__ */ ot((t9) => {
  t9.setUTCDate(1), t9.setUTCHours(0, 0, 0, 0);
}, (t9, e) => {
  t9.setUTCMonth(t9.getUTCMonth() + e);
}, (t9, e) => e.getUTCMonth() - t9.getUTCMonth() + (e.getUTCFullYear() - t9.getUTCFullYear()) * 12, (t9) => t9.getUTCMonth());
co.range;
var qt = /* @__PURE__ */ ot((t9) => {
  t9.setMonth(0, 1), t9.setHours(0, 0, 0, 0);
}, (t9, e) => {
  t9.setFullYear(t9.getFullYear() + e);
}, (t9, e) => e.getFullYear() - t9.getFullYear(), (t9) => t9.getFullYear());
qt.every = (t9) => !isFinite(t9 = /* @__PURE__ */ Math.floor(t9)) || !(t9 > 0) ? null : ot((e) => {
  e.setFullYear(Math.floor(e.getFullYear() / t9) * t9), e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, r) => {
  e.setFullYear(e.getFullYear() + r * t9);
});
qt.range;
var Vt = /* @__PURE__ */ ot((t9) => {
  t9.setUTCMonth(0, 1), t9.setUTCHours(0, 0, 0, 0);
}, (t9, e) => {
  t9.setUTCFullYear(t9.getUTCFullYear() + e);
}, (t9, e) => e.getUTCFullYear() - t9.getUTCFullYear(), (t9) => t9.getUTCFullYear());
Vt.every = (t9) => !isFinite(t9 = /* @__PURE__ */ Math.floor(t9)) || !(t9 > 0) ? null : ot((e) => {
  e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t9) * t9), e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, r) => {
  e.setUTCFullYear(e.getUTCFullYear() + r * t9);
});
Vt.range;
function Zh(t9, e, r, o2, n2, s) {
  let a = [
    [
      te,
      1,
      1e3
    ],
    [
      te,
      5,
      5 * 1e3
    ],
    [
      te,
      15,
      15 * 1e3
    ],
    [
      te,
      30,
      30 * 1e3
    ],
    [
      s,
      1,
      6e4
    ],
    [
      s,
      5,
      5 * 6e4
    ],
    [
      s,
      15,
      15 * 6e4
    ],
    [
      s,
      30,
      30 * 6e4
    ],
    [
      n2,
      1,
      36e5
    ],
    [
      n2,
      3,
      3 * 36e5
    ],
    [
      n2,
      6,
      6 * 36e5
    ],
    [
      n2,
      12,
      12 * 36e5
    ],
    [
      o2,
      1,
      864e5
    ],
    [
      o2,
      2,
      2 * 864e5
    ],
    [
      r,
      1,
      6048e5
    ],
    [
      e,
      1,
      2592e6
    ],
    [
      e,
      3,
      3 * 2592e6
    ],
    [
      t9,
      1,
      31536e6
    ]
  ];
  function l(h, u, d) {
    let f = u < h;
    f && ([h, u] = [
      u,
      h
    ]);
    let g = d && typeof d.range == "function" ? d : c(h, u, d), T = g ? g.range(h, +u + 1) : [];
    return f ? T.reverse() : T;
  }
  m$1(l, "ticks");
  function c(h, u, d) {
    let f = Math.abs(u - h) / d, g = /* @__PURE__ */ Ie((param) => {
      let [, , $] = param;
      return $;
    }).right(a, f);
    if (g === a.length) return t9.every(/* @__PURE__ */ ir(h / 31536e6, u / 31536e6, d));
    if (g === 0) return Pe.every(/* @__PURE__ */ Math.max(/* @__PURE__ */ ir(h, u, d), 1));
    let [T, L] = a[f / a[g - 1][2] < a[g][2] / f ? g - 1 : g];
    return T.every(L);
  }
  return m$1(c, "tickInterval"), [
    l,
    c
  ];
}
m$1(Zh, "ticker");
var [zp, Pp] = Zh(Vt, co, Ye, ho, lo, ao), [Ns, qs] = Zh(qt, xr, fe, ue, pr, mr);
function zs(t9) {
  if (0 <= t9.y && t9.y < 100) {
    var e = new Date(-1, t9.m, t9.d, t9.H, t9.M, t9.S, t9.L);
    return e.setFullYear(t9.y), e;
  }
  return new Date(t9.y, t9.m, t9.d, t9.H, t9.M, t9.S, t9.L);
}
m$1(zs, "localDate");
function Ps(t9) {
  if (0 <= t9.y && t9.y < 100) {
    var e = new Date(Date.UTC(-1, t9.m, t9.d, t9.H, t9.M, t9.S, t9.L));
    return e.setUTCFullYear(t9.y), e;
  }
  return new Date(Date.UTC(t9.y, t9.m, t9.d, t9.H, t9.M, t9.S, t9.L));
}
m$1(Ps, "utcDate");
function Kr(t9, e, r) {
  return {
    y: t9,
    m: e,
    d: r,
    H: 0,
    M: 0,
    S: 0,
    L: 0
  };
}
m$1(Kr, "newDate");
function $s(t9) {
  var e = t9.dateTime, r = t9.date, o2 = t9.time, n2 = t9.periods, s = t9.days, a = t9.shortDays, l = t9.months, c = t9.shortMonths, h = /* @__PURE__ */ Qr(n2), u = /* @__PURE__ */ Jr(n2), d = /* @__PURE__ */ Qr(s), f = /* @__PURE__ */ Jr(s), g = /* @__PURE__ */ Qr(a), T = /* @__PURE__ */ Jr(a), L = /* @__PURE__ */ Qr(l), $ = /* @__PURE__ */ Jr(l), z = /* @__PURE__ */ Qr(c), G = /* @__PURE__ */ Jr(c), E = {
    a: N,
    A: O,
    b: U,
    B: rt,
    c: null,
    d: rc,
    e: rc,
    f: hd,
    g: Cd,
    G: bd,
    H: sd,
    I: ad,
    j: ld,
    L: ac,
    m: cd,
    M: ud,
    p: Y,
    q: nt,
    Q: nc,
    s: sc,
    S: fd,
    u: md,
    U: pd,
    V: dd,
    w: gd,
    W: xd,
    x: null,
    X: null,
    y: yd,
    Y: _d,
    Z: Td,
    "%": oc
  }, B = {
    a: K,
    A: Ft,
    b: Z,
    B: Ct,
    c: null,
    d: ic,
    e: ic,
    f: wd,
    g: Rd,
    G: qd,
    H: kd,
    I: Sd,
    j: vd,
    L: hc,
    m: Bd,
    M: Fd,
    p: _t,
    q: lt,
    Q: nc,
    s: sc,
    S: Md,
    u: Ld,
    U: Ad,
    V: Ed,
    w: Dd,
    W: Od,
    x: null,
    X: null,
    y: Id,
    Y: Nd,
    Z: zd,
    "%": oc
  }, P = {
    a: it,
    A: M,
    b: k,
    B: x,
    c: y,
    d: tc,
    e: tc,
    f: rd,
    g: Jh,
    G: Qh,
    H: ec,
    I: ec,
    j: Qp,
    L: ed,
    m: Kp,
    M: Jp,
    p: W,
    q: Zp,
    Q: od,
    s: nd,
    S: td,
    u: Yp,
    U: Gp,
    V: Vp,
    w: Up,
    W: Xp,
    x: F,
    X: S,
    y: Jh,
    Y: Qh,
    Z: jp,
    "%": id
  };
  E.x = /* @__PURE__ */ w(r, E), E.X = /* @__PURE__ */ w(o2, E), E.c = /* @__PURE__ */ w(e, E), B.x = /* @__PURE__ */ w(r, B), B.X = /* @__PURE__ */ w(o2, B), B.c = /* @__PURE__ */ w(e, B);
  function w(v, H) {
    return function(V) {
      var C = [], pt = -1, J = 0, bt = v.length, Tt, Ot, Le;
      for (V instanceof Date || (V = /* @__PURE__ */ new Date(+V)); ++pt < bt; ) v.charCodeAt(pt) === 37 && (C.push(/* @__PURE__ */ v.slice(J, pt)), (Ot = Kh[Tt = /* @__PURE__ */ v.charAt(++pt)]) != null ? Tt = /* @__PURE__ */ v.charAt(++pt) : Ot = Tt === "e" ? " " : "0", (Le = H[Tt]) && (Tt = /* @__PURE__ */ Le(V, Ot)), C.push(Tt), J = pt + 1);
      return C.push(/* @__PURE__ */ v.slice(J, pt)), C.join("");
    };
  }
  m$1(w, "newFormat");
  function X(v, H) {
    return function(V) {
      var C = /* @__PURE__ */ Kr(1900, void 0, 1), pt = /* @__PURE__ */ j(C, v, V += "", 0), J, bt;
      if (pt != V.length) return null;
      if ("Q" in C) return new Date(C.Q);
      if ("s" in C) return new Date(C.s * 1e3 + ("L" in C ? C.L : 0));
      if (H && !("Z" in C) && (C.Z = 0), "p" in C && (C.H = C.H % 12 + C.p * 12), C.m === void 0 && (C.m = "q" in C ? C.q : 0), "V" in C) {
        if (C.V < 1 || C.V > 53) return null;
        "w" in C || (C.w = 1), "Z" in C ? (J = /* @__PURE__ */ Ps(/* @__PURE__ */ Kr(C.y, 0, 1)), bt = /* @__PURE__ */ J.getUTCDay(), J = bt > 4 || bt === 0 ? gr.ceil(J) : gr(J), J = /* @__PURE__ */ Zr.offset(J, (C.V - 1) * 7), C.y = /* @__PURE__ */ J.getUTCFullYear(), C.m = /* @__PURE__ */ J.getUTCMonth(), C.d = J.getUTCDate() + (C.w + 6) % 7) : (J = /* @__PURE__ */ zs(/* @__PURE__ */ Kr(C.y, 0, 1)), bt = /* @__PURE__ */ J.getDay(), J = bt > 4 || bt === 0 ? dr.ceil(J) : dr(J), J = /* @__PURE__ */ ue.offset(J, (C.V - 1) * 7), C.y = /* @__PURE__ */ J.getFullYear(), C.m = /* @__PURE__ */ J.getMonth(), C.d = J.getDate() + (C.w + 6) % 7);
      } else ("W" in C || "U" in C) && ("w" in C || (C.w = "u" in C ? C.u % 7 : "W" in C ? 1 : 0), bt = "Z" in C ? Ps(/* @__PURE__ */ Kr(C.y, 0, 1)).getUTCDay() : zs(/* @__PURE__ */ Kr(C.y, 0, 1)).getDay(), C.m = 0, C.d = "W" in C ? (C.w + 6) % 7 + C.W * 7 - (bt + 5) % 7 : C.w + C.U * 7 - (bt + 6) % 7);
      return "Z" in C ? (C.H += C.Z / 100 | 0, C.M += C.Z % 100, Ps(C)) : zs(C);
    };
  }
  m$1(X, "newParse");
  function j(v, H, V, C) {
    for (var pt = 0, J = H.length, bt = V.length, Tt, Ot; pt < J; ) {
      if (C >= bt) return -1;
      if (Tt = /* @__PURE__ */ H.charCodeAt(pt++), Tt === 37) {
        if (Tt = /* @__PURE__ */ H.charAt(pt++), Ot = P[Tt in Kh ? H.charAt(pt++) : Tt], !Ot || (C = /* @__PURE__ */ Ot(v, V, C)) < 0) return -1;
      } else if (Tt != V.charCodeAt(C++)) return -1;
    }
    return C;
  }
  m$1(j, "parseSpecifier");
  function W(v, H, V) {
    var C = /* @__PURE__ */ h.exec(/* @__PURE__ */ H.slice(V));
    return C ? (v.p = /* @__PURE__ */ u.get(/* @__PURE__ */ C[0].toLowerCase()), V + C[0].length) : -1;
  }
  m$1(W, "parsePeriod");
  function it(v, H, V) {
    var C = /* @__PURE__ */ g.exec(/* @__PURE__ */ H.slice(V));
    return C ? (v.w = /* @__PURE__ */ T.get(/* @__PURE__ */ C[0].toLowerCase()), V + C[0].length) : -1;
  }
  m$1(it, "parseShortWeekday");
  function M(v, H, V) {
    var C = /* @__PURE__ */ d.exec(/* @__PURE__ */ H.slice(V));
    return C ? (v.w = /* @__PURE__ */ f.get(/* @__PURE__ */ C[0].toLowerCase()), V + C[0].length) : -1;
  }
  m$1(M, "parseWeekday");
  function k(v, H, V) {
    var C = /* @__PURE__ */ z.exec(/* @__PURE__ */ H.slice(V));
    return C ? (v.m = /* @__PURE__ */ G.get(/* @__PURE__ */ C[0].toLowerCase()), V + C[0].length) : -1;
  }
  m$1(k, "parseShortMonth");
  function x(v, H, V) {
    var C = /* @__PURE__ */ L.exec(/* @__PURE__ */ H.slice(V));
    return C ? (v.m = /* @__PURE__ */ $.get(/* @__PURE__ */ C[0].toLowerCase()), V + C[0].length) : -1;
  }
  m$1(x, "parseMonth");
  function y(v, H, V) {
    return j(v, e, H, V);
  }
  m$1(y, "parseLocaleDateTime");
  function F(v, H, V) {
    return j(v, r, H, V);
  }
  m$1(F, "parseLocaleDate");
  function S(v, H, V) {
    return j(v, o2, H, V);
  }
  m$1(S, "parseLocaleTime");
  function N(v) {
    return a[v.getDay()];
  }
  m$1(N, "formatShortWeekday");
  function O(v) {
    return s[v.getDay()];
  }
  m$1(O, "formatWeekday");
  function U(v) {
    return c[v.getMonth()];
  }
  m$1(U, "formatShortMonth");
  function rt(v) {
    return l[v.getMonth()];
  }
  m$1(rt, "formatMonth");
  function Y(v) {
    return n2[+(v.getHours() >= 12)];
  }
  m$1(Y, "formatPeriod");
  function nt(v) {
    return 1 + ~~(v.getMonth() / 3);
  }
  m$1(nt, "formatQuarter");
  function K(v) {
    return a[v.getUTCDay()];
  }
  m$1(K, "formatUTCShortWeekday");
  function Ft(v) {
    return s[v.getUTCDay()];
  }
  m$1(Ft, "formatUTCWeekday");
  function Z(v) {
    return c[v.getUTCMonth()];
  }
  m$1(Z, "formatUTCShortMonth");
  function Ct(v) {
    return l[v.getUTCMonth()];
  }
  m$1(Ct, "formatUTCMonth");
  function _t(v) {
    return n2[+(v.getUTCHours() >= 12)];
  }
  m$1(_t, "formatUTCPeriod");
  function lt(v) {
    return 1 + ~~(v.getUTCMonth() / 3);
  }
  return m$1(lt, "formatUTCQuarter"), {
    format: /* @__PURE__ */ m$1(function(v) {
      var H = /* @__PURE__ */ w(v += "", E);
      return H.toString = function() {
        return v;
      }, H;
    }, "format"),
    parse: /* @__PURE__ */ m$1(function(v) {
      var H = /* @__PURE__ */ X(v += "", false);
      return H.toString = function() {
        return v;
      }, H;
    }, "parse"),
    utcFormat: /* @__PURE__ */ m$1(function(v) {
      var H = /* @__PURE__ */ w(v += "", B);
      return H.toString = function() {
        return v;
      }, H;
    }, "utcFormat"),
    utcParse: /* @__PURE__ */ m$1(function(v) {
      var H = /* @__PURE__ */ X(v += "", true);
      return H.toString = function() {
        return v;
      }, H;
    }, "utcParse")
  };
}
m$1($s, "formatLocale");
var Kh = {
  "-": "",
  _: " ",
  0: "0"
}, xt = /^\s*\d+/, $p = /^%/, Wp = /[\\^$*+?|[\]().{}]/g;
function et(t9, e, r) {
  var o2 = t9 < 0 ? "-" : "", n2 = (o2 ? -t9 : t9) + "", s = n2.length;
  return o2 + (s < r ? new Array(r - s + 1).join(e) + n2 : n2);
}
m$1(et, "pad");
function Hp(t9) {
  return t9.replace(Wp, "\\$&");
}
m$1(Hp, "requote");
function Qr(t9) {
  return new RegExp("^(?:" + t9.map(Hp).join("|") + ")", "i");
}
m$1(Qr, "formatRe");
function Jr(t9) {
  return new Map(t9.map((e, r) => [
    /* @__PURE__ */ e.toLowerCase(),
    r
  ]));
}
m$1(Jr, "formatLookup");
function Up(t9, e, r) {
  var o2 = /* @__PURE__ */ xt.exec(/* @__PURE__ */ e.slice(r, r + 1));
  return o2 ? (t9.w = +o2[0], r + o2[0].length) : -1;
}
m$1(Up, "parseWeekdayNumberSunday");
function Yp(t9, e, r) {
  var o2 = /* @__PURE__ */ xt.exec(/* @__PURE__ */ e.slice(r, r + 1));
  return o2 ? (t9.u = +o2[0], r + o2[0].length) : -1;
}
m$1(Yp, "parseWeekdayNumberMonday");
function Gp(t9, e, r) {
  var o2 = /* @__PURE__ */ xt.exec(/* @__PURE__ */ e.slice(r, r + 2));
  return o2 ? (t9.U = +o2[0], r + o2[0].length) : -1;
}
m$1(Gp, "parseWeekNumberSunday");
function Vp(t9, e, r) {
  var o2 = /* @__PURE__ */ xt.exec(/* @__PURE__ */ e.slice(r, r + 2));
  return o2 ? (t9.V = +o2[0], r + o2[0].length) : -1;
}
m$1(Vp, "parseWeekNumberISO");
function Xp(t9, e, r) {
  var o2 = /* @__PURE__ */ xt.exec(/* @__PURE__ */ e.slice(r, r + 2));
  return o2 ? (t9.W = +o2[0], r + o2[0].length) : -1;
}
m$1(Xp, "parseWeekNumberMonday");
function Qh(t9, e, r) {
  var o2 = /* @__PURE__ */ xt.exec(/* @__PURE__ */ e.slice(r, r + 4));
  return o2 ? (t9.y = +o2[0], r + o2[0].length) : -1;
}
m$1(Qh, "parseFullYear");
function Jh(t9, e, r) {
  var o2 = /* @__PURE__ */ xt.exec(/* @__PURE__ */ e.slice(r, r + 2));
  return o2 ? (t9.y = +o2[0] + (+o2[0] > 68 ? 1900 : 2e3), r + o2[0].length) : -1;
}
m$1(Jh, "parseYear");
function jp(t9, e, r) {
  var o2 = /* @__PURE__ */ /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(/* @__PURE__ */ e.slice(r, r + 6));
  return o2 ? (t9.Z = o2[1] ? 0 : -(o2[2] + (o2[3] || "00")), r + o2[0].length) : -1;
}
m$1(jp, "parseZone");
function Zp(t9, e, r) {
  var o2 = /* @__PURE__ */ xt.exec(/* @__PURE__ */ e.slice(r, r + 1));
  return o2 ? (t9.q = o2[0] * 3 - 3, r + o2[0].length) : -1;
}
m$1(Zp, "parseQuarter");
function Kp(t9, e, r) {
  var o2 = /* @__PURE__ */ xt.exec(/* @__PURE__ */ e.slice(r, r + 2));
  return o2 ? (t9.m = o2[0] - 1, r + o2[0].length) : -1;
}
m$1(Kp, "parseMonthNumber");
function tc(t9, e, r) {
  var o2 = /* @__PURE__ */ xt.exec(/* @__PURE__ */ e.slice(r, r + 2));
  return o2 ? (t9.d = +o2[0], r + o2[0].length) : -1;
}
m$1(tc, "parseDayOfMonth");
function Qp(t9, e, r) {
  var o2 = /* @__PURE__ */ xt.exec(/* @__PURE__ */ e.slice(r, r + 3));
  return o2 ? (t9.m = 0, t9.d = +o2[0], r + o2[0].length) : -1;
}
m$1(Qp, "parseDayOfYear");
function ec(t9, e, r) {
  var o2 = /* @__PURE__ */ xt.exec(/* @__PURE__ */ e.slice(r, r + 2));
  return o2 ? (t9.H = +o2[0], r + o2[0].length) : -1;
}
m$1(ec, "parseHour24");
function Jp(t9, e, r) {
  var o2 = /* @__PURE__ */ xt.exec(/* @__PURE__ */ e.slice(r, r + 2));
  return o2 ? (t9.M = +o2[0], r + o2[0].length) : -1;
}
m$1(Jp, "parseMinutes");
function td(t9, e, r) {
  var o2 = /* @__PURE__ */ xt.exec(/* @__PURE__ */ e.slice(r, r + 2));
  return o2 ? (t9.S = +o2[0], r + o2[0].length) : -1;
}
m$1(td, "parseSeconds");
function ed(t9, e, r) {
  var o2 = /* @__PURE__ */ xt.exec(/* @__PURE__ */ e.slice(r, r + 3));
  return o2 ? (t9.L = +o2[0], r + o2[0].length) : -1;
}
m$1(ed, "parseMilliseconds");
function rd(t9, e, r) {
  var o2 = /* @__PURE__ */ xt.exec(/* @__PURE__ */ e.slice(r, r + 6));
  return o2 ? (t9.L = /* @__PURE__ */ Math.floor(o2[0] / 1e3), r + o2[0].length) : -1;
}
m$1(rd, "parseMicroseconds");
function id(t9, e, r) {
  var o2 = /* @__PURE__ */ $p.exec(/* @__PURE__ */ e.slice(r, r + 1));
  return o2 ? r + o2[0].length : -1;
}
m$1(id, "parseLiteralPercent");
function od(t9, e, r) {
  var o2 = /* @__PURE__ */ xt.exec(/* @__PURE__ */ e.slice(r));
  return o2 ? (t9.Q = +o2[0], r + o2[0].length) : -1;
}
m$1(od, "parseUnixTimestamp");
function nd(t9, e, r) {
  var o2 = /* @__PURE__ */ xt.exec(/* @__PURE__ */ e.slice(r));
  return o2 ? (t9.s = +o2[0], r + o2[0].length) : -1;
}
m$1(nd, "parseUnixTimestampSeconds");
function rc(t9, e) {
  return et(/* @__PURE__ */ t9.getDate(), e, 2);
}
m$1(rc, "formatDayOfMonth");
function sd(t9, e) {
  return et(/* @__PURE__ */ t9.getHours(), e, 2);
}
m$1(sd, "formatHour24");
function ad(t9, e) {
  return et(t9.getHours() % 12 || 12, e, 2);
}
m$1(ad, "formatHour12");
function ld(t9, e) {
  return et(1 + ue.count(/* @__PURE__ */ qt(t9), t9), e, 3);
}
m$1(ld, "formatDayOfYear");
function ac(t9, e) {
  return et(/* @__PURE__ */ t9.getMilliseconds(), e, 3);
}
m$1(ac, "formatMilliseconds");
function hd(t9, e) {
  return ac(t9, e) + "000";
}
m$1(hd, "formatMicroseconds");
function cd(t9, e) {
  return et(t9.getMonth() + 1, e, 2);
}
m$1(cd, "formatMonthNumber");
function ud(t9, e) {
  return et(/* @__PURE__ */ t9.getMinutes(), e, 2);
}
m$1(ud, "formatMinutes");
function fd(t9, e) {
  return et(/* @__PURE__ */ t9.getSeconds(), e, 2);
}
m$1(fd, "formatSeconds");
function md(t9) {
  var e = /* @__PURE__ */ t9.getDay();
  return e === 0 ? 7 : e;
}
m$1(md, "formatWeekdayNumberMonday");
function pd(t9, e) {
  return et(/* @__PURE__ */ fe.count(qt(t9) - 1, t9), e, 2);
}
m$1(pd, "formatWeekNumberSunday");
function lc(t9) {
  var e = /* @__PURE__ */ t9.getDay();
  return e >= 4 || e === 0 ? we(t9) : we.ceil(t9);
}
m$1(lc, "dISO");
function dd(t9, e) {
  return t9 = /* @__PURE__ */ lc(t9), et(we.count(/* @__PURE__ */ qt(t9), t9) + (qt(t9).getDay() === 4), e, 2);
}
m$1(dd, "formatWeekNumberISO");
function gd(t9) {
  return t9.getDay();
}
m$1(gd, "formatWeekdayNumberSunday");
function xd(t9, e) {
  return et(/* @__PURE__ */ dr.count(qt(t9) - 1, t9), e, 2);
}
m$1(xd, "formatWeekNumberMonday");
function yd(t9, e) {
  return et(t9.getFullYear() % 100, e, 2);
}
m$1(yd, "formatYear");
function Cd(t9, e) {
  return t9 = /* @__PURE__ */ lc(t9), et(t9.getFullYear() % 100, e, 2);
}
m$1(Cd, "formatYearISO");
function _d(t9, e) {
  return et(t9.getFullYear() % 1e4, e, 4);
}
m$1(_d, "formatFullYear");
function bd(t9, e) {
  var r = /* @__PURE__ */ t9.getDay();
  return t9 = r >= 4 || r === 0 ? we(t9) : we.ceil(t9), et(t9.getFullYear() % 1e4, e, 4);
}
m$1(bd, "formatFullYearISO");
function Td(t9) {
  var e = /* @__PURE__ */ t9.getTimezoneOffset();
  return (e > 0 ? "-" : (e *= -1, "+")) + et(e / 60 | 0, "0", 2) + et(e % 60, "0", 2);
}
m$1(Td, "formatZone");
function ic(t9, e) {
  return et(/* @__PURE__ */ t9.getUTCDate(), e, 2);
}
m$1(ic, "formatUTCDayOfMonth");
function kd(t9, e) {
  return et(/* @__PURE__ */ t9.getUTCHours(), e, 2);
}
m$1(kd, "formatUTCHour24");
function Sd(t9, e) {
  return et(t9.getUTCHours() % 12 || 12, e, 2);
}
m$1(Sd, "formatUTCHour12");
function vd(t9, e) {
  return et(1 + Zr.count(/* @__PURE__ */ Vt(t9), t9), e, 3);
}
m$1(vd, "formatUTCDayOfYear");
function hc(t9, e) {
  return et(/* @__PURE__ */ t9.getUTCMilliseconds(), e, 3);
}
m$1(hc, "formatUTCMilliseconds");
function wd(t9, e) {
  return hc(t9, e) + "000";
}
m$1(wd, "formatUTCMicroseconds");
function Bd(t9, e) {
  return et(t9.getUTCMonth() + 1, e, 2);
}
m$1(Bd, "formatUTCMonthNumber");
function Fd(t9, e) {
  return et(/* @__PURE__ */ t9.getUTCMinutes(), e, 2);
}
m$1(Fd, "formatUTCMinutes");
function Md(t9, e) {
  return et(/* @__PURE__ */ t9.getUTCSeconds(), e, 2);
}
m$1(Md, "formatUTCSeconds");
function Ld(t9) {
  var e = /* @__PURE__ */ t9.getUTCDay();
  return e === 0 ? 7 : e;
}
m$1(Ld, "formatUTCWeekdayNumberMonday");
function Ad(t9, e) {
  return et(/* @__PURE__ */ Ye.count(Vt(t9) - 1, t9), e, 2);
}
m$1(Ad, "formatUTCWeekNumberSunday");
function cc(t9) {
  var e = /* @__PURE__ */ t9.getUTCDay();
  return e >= 4 || e === 0 ? Be(t9) : Be.ceil(t9);
}
m$1(cc, "UTCdISO");
function Ed(t9, e) {
  return t9 = /* @__PURE__ */ cc(t9), et(Be.count(/* @__PURE__ */ Vt(t9), t9) + (Vt(t9).getUTCDay() === 4), e, 2);
}
m$1(Ed, "formatUTCWeekNumberISO");
function Dd(t9) {
  return t9.getUTCDay();
}
m$1(Dd, "formatUTCWeekdayNumberSunday");
function Od(t9, e) {
  return et(/* @__PURE__ */ gr.count(Vt(t9) - 1, t9), e, 2);
}
m$1(Od, "formatUTCWeekNumberMonday");
function Id(t9, e) {
  return et(t9.getUTCFullYear() % 100, e, 2);
}
m$1(Id, "formatUTCYear");
function Rd(t9, e) {
  return t9 = /* @__PURE__ */ cc(t9), et(t9.getUTCFullYear() % 100, e, 2);
}
m$1(Rd, "formatUTCYearISO");
function Nd(t9, e) {
  return et(t9.getUTCFullYear() % 1e4, e, 4);
}
m$1(Nd, "formatUTCFullYear");
function qd(t9, e) {
  var r = /* @__PURE__ */ t9.getUTCDay();
  return t9 = r >= 4 || r === 0 ? Be(t9) : Be.ceil(t9), et(t9.getUTCFullYear() % 1e4, e, 4);
}
m$1(qd, "formatUTCFullYearISO");
function zd() {
  return "+0000";
}
m$1(zd, "formatUTCZone");
function oc() {
  return "%";
}
m$1(oc, "formatLiteralPercent");
function nc(t9) {
  return +t9;
}
m$1(nc, "formatUnixTimestamp");
function sc(t9) {
  return Math.floor(+t9 / 1e3);
}
m$1(sc, "formatUnixTimestampSeconds");
var yr, uo;
Ws({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: [
    "AM",
    "PM"
  ],
  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ],
  shortDays: [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
  ],
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  shortMonths: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ]
});
function Ws(t9) {
  return yr = /* @__PURE__ */ $s(t9), uo = yr.format, yr.parse, yr.utcFormat, yr.utcParse, yr;
}
m$1(Ws, "defaultLocale");
function Hs(t9, e) {
  t9 = /* @__PURE__ */ t9.slice();
  var r = 0, o2 = t9.length - 1, n2 = t9[r], s = t9[o2], a;
  return s < n2 && (a = r, r = o2, o2 = a, a = n2, n2 = s, s = a), t9[r] = /* @__PURE__ */ e.floor(n2), t9[o2] = /* @__PURE__ */ e.ceil(s), t9;
}
m$1(Hs, "nice");
function Pd(t9) {
  return new Date(t9);
}
m$1(Pd, "date");
function $d(t9) {
  return t9 instanceof Date ? +t9 : +/* @__PURE__ */ new Date(+t9);
}
m$1($d, "number");
function pc(t9, e, r, o2, n2, s, a, l, c, h) {
  var u = /* @__PURE__ */ Xr(), d = u.invert, f = u.domain, g = /* @__PURE__ */ h(".%L"), T = /* @__PURE__ */ h(":%S"), L = /* @__PURE__ */ h("%I:%M"), $ = /* @__PURE__ */ h("%I %p"), z = /* @__PURE__ */ h("%a %d"), G = /* @__PURE__ */ h("%b %d"), E = /* @__PURE__ */ h("%B"), B = /* @__PURE__ */ h("%Y");
  function P(w) {
    return (c(w) < w ? g : l(w) < w ? T : a(w) < w ? L : s(w) < w ? $ : o2(w) < w ? n2(w) < w ? z : G : r(w) < w ? E : B)(w);
  }
  return m$1(P, "tickFormat"), u.invert = function(w) {
    return new Date(d(w));
  }, u.domain = function(w) {
    return arguments.length ? f(/* @__PURE__ */ Array.from(w, $d)) : f().map(Pd);
  }, u.ticks = function(w) {
    var X = /* @__PURE__ */ f();
    return t9(X[0], X[X.length - 1], w ?? 10);
  }, u.tickFormat = function(w, X) {
    return X == null ? P : h(X);
  }, u.nice = function(w) {
    var X = /* @__PURE__ */ f();
    return (!w || typeof w.range != "function") && (w = /* @__PURE__ */ e(X[0], X[X.length - 1], w ?? 10)), w ? f(/* @__PURE__ */ Hs(X, w)) : u;
  }, u.copy = function() {
    return Ki(u, /* @__PURE__ */ pc(t9, e, r, o2, n2, s, a, l, c, h));
  }, u;
}
m$1(pc, "calendar");
function dc() {
  return Se.apply(/* @__PURE__ */ pc(Ns, qs, qt, xr, fe, ue, pr, mr, te, uo).domain([
    new Date(2e3, 0, 1),
    new Date(2e3, 0, 2)
  ]), arguments);
}
m$1(dc, "time");
function Us() {
  var t9 = /* @__PURE__ */ Vr().unknown(void 0), e = t9.domain, r = t9.range, o2 = 0, n2 = 1, s, a, l = false, c = 0, h = 0, u = 0.5;
  delete t9.unknown;
  function d() {
    var f = e().length, g = n2 < o2, T = g ? n2 : o2, L = g ? o2 : n2;
    s = (L - T) / Math.max(1, f - c + h * 2), l && (s = /* @__PURE__ */ Math.floor(s)), T += (L - T - s * (f - c)) * u, a = s * (1 - c), l && (T = /* @__PURE__ */ Math.round(T), a = /* @__PURE__ */ Math.round(a));
    var $ = /* @__PURE__ */ Ni(f).map(function(z) {
      return T + s * z;
    });
    return r(g ? $.reverse() : $);
  }
  return m$1(d, "rescale"), t9.domain = function(f) {
    return arguments.length ? (e(f), d()) : e();
  }, t9.range = function(f) {
    return arguments.length ? ([o2, n2] = f, o2 = +o2, n2 = +n2, d()) : [
      o2,
      n2
    ];
  }, t9.rangeRound = function(f) {
    return [o2, n2] = f, o2 = +o2, n2 = +n2, l = true, d();
  }, t9.bandwidth = function() {
    return a;
  }, t9.step = function() {
    return s;
  }, t9.round = function(f) {
    return arguments.length ? (l = !!f, d()) : l;
  }, t9.padding = function(f) {
    return arguments.length ? (c = /* @__PURE__ */ Math.min(1, h = +f), d()) : c;
  }, t9.paddingInner = function(f) {
    return arguments.length ? (c = /* @__PURE__ */ Math.min(1, f), d()) : c;
  }, t9.paddingOuter = function(f) {
    return arguments.length ? (h = +f, d()) : h;
  }, t9.align = function(f) {
    return arguments.length ? (u = /* @__PURE__ */ Math.max(0, /* @__PURE__ */ Math.min(1, f)), d()) : u;
  }, t9.copy = function() {
    return Us(/* @__PURE__ */ e(), [
      o2,
      n2
    ]).round(l).paddingInner(c).paddingOuter(h).align(u);
  }, Se.apply(/* @__PURE__ */ d(), arguments);
}
m$1(Us, "band");
function Ys(t9) {
  for (var e = t9.length / 6 | 0, r = new Array(e), o2 = 0; o2 < e; ) r[o2] = "#" + t9.slice(o2 * 6, ++o2 * 6);
  return r;
}
m$1(Ys, "default");
var Wd = /* @__PURE__ */ Ys("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
function st(t9) {
  return m$1(function() {
    return t9;
  }, "constant");
}
m$1(st, "default");
var Gs = Math.abs, vt = Math.atan2, Fe = Math.cos, gc = Math.max, fo = Math.min, Xt = Math.sin, Ge = Math.sqrt, yt = 1e-12, Cr = Math.PI, ti = Cr / 2, _r = 2 * Cr;
function xc(t9) {
  return t9 > 1 ? 0 : t9 < -1 ? Cr : Math.acos(t9);
}
m$1(xc, "acos");
function Vs(t9) {
  return t9 >= 1 ? ti : t9 <= -1 ? -ti : Math.asin(t9);
}
m$1(Vs, "asin");
var Xs = Math.PI, js = 2 * Xs, Ve = 1e-6, Hd = js - Ve;
function yc(t9) {
  this._ += t9[0];
  for (let e = 1, r = t9.length; e < r; ++e) this._ += arguments[e] + t9[e];
}
m$1(yc, "append");
function Ud(t9) {
  let e = /* @__PURE__ */ Math.floor(t9);
  if (!(e >= 0)) throw new Error(`invalid digits: ${t9}`);
  if (e > 15) return yc;
  let r = 10 ** e;
  return function(o2) {
    this._ += o2[0];
    for (let n2 = 1, s = o2.length; n2 < s; ++n2) this._ += Math.round(arguments[n2] * r) / r + o2[n2];
  };
}
m$1(Ud, "appendRound");
var Xe = (_k = class {
  constructor(e) {
    this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = e == null ? yc : Ud(e);
  }
  moveTo(e, r) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +r}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(e, r) {
    this._append`L${this._x1 = +e},${this._y1 = +r}`;
  }
  quadraticCurveTo(e, r, o2, n2) {
    this._append`Q${+e},${+r},${this._x1 = +o2},${this._y1 = +n2}`;
  }
  bezierCurveTo(e, r, o2, n2, s, a) {
    this._append`C${+e},${+r},${+o2},${+n2},${this._x1 = +s},${this._y1 = +a}`;
  }
  arcTo(e, r, o2, n2, s) {
    if (e = +e, r = +r, o2 = +o2, n2 = +n2, s = +s, s < 0) throw new Error(`negative radius: ${s}`);
    let a = this._x1, l = this._y1, c = o2 - e, h = n2 - r, u = a - e, d = l - r, f = u * u + d * d;
    if (this._x1 === null) this._append`M${this._x1 = e},${this._y1 = r}`;
    else if (f > Ve) if (!(Math.abs(d * c - h * u) > Ve) || !s) this._append`L${this._x1 = e},${this._y1 = r}`;
    else {
      let g = o2 - a, T = n2 - l, L = c * c + h * h, $ = g * g + T * T, z = /* @__PURE__ */ Math.sqrt(L), G = /* @__PURE__ */ Math.sqrt(f), E = s * Math.tan((Xs - Math.acos((L + f - $) / (2 * z * G))) / 2), B = E / G, P = E / z;
      Math.abs(B - 1) > Ve && this._append`L${e + B * u},${r + B * d}`, this._append`A${s},${s},0,0,${+(d * g > u * T)},${this._x1 = e + P * c},${this._y1 = r + P * h}`;
    }
  }
  arc(e, r, o2, n2, s, a) {
    if (e = +e, r = +r, o2 = +o2, a = !!a, o2 < 0) throw new Error(`negative radius: ${o2}`);
    let l = o2 * Math.cos(n2), c = o2 * Math.sin(n2), h = e + l, u = r + c, d = 1 ^ a, f = a ? n2 - s : s - n2;
    this._x1 === null ? this._append`M${h},${u}` : (Math.abs(this._x1 - h) > Ve || Math.abs(this._y1 - u) > Ve) && this._append`L${h},${u}`, o2 && (f < 0 && (f = f % js + js), f > Hd ? this._append`A${o2},${o2},0,1,${d},${e - l},${r - c}A${o2},${o2},0,1,${d},${this._x1 = h},${this._y1 = u}` : f > Ve && this._append`A${o2},${o2},0,${+(f >= Xs)},${d},${this._x1 = e + o2 * Math.cos(s)},${this._y1 = r + o2 * Math.sin(s)}`);
  }
  rect(e, r, o2, n2) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +r}h${o2 = +o2}v${+n2}h${-o2}Z`;
  }
  toString() {
    return this._;
  }
}, __11 = new WeakMap(), __privateAdd(_k, __11, m$1(_k, "Path")), _k);
function Cc() {
  return new Xe();
}
m$1(Cc, "path");
Cc.prototype = Xe.prototype;
function mo(t9) {
  let e = 3;
  return t9.digits = function(r) {
    if (!arguments.length) return e;
    if (r == null) e = null;
    else {
      let o2 = /* @__PURE__ */ Math.floor(r);
      if (!(o2 >= 0)) throw new RangeError(`invalid digits: ${r}`);
      e = o2;
    }
    return t9;
  }, () => new Xe(e);
}
m$1(mo, "withPath");
function Yd(t9) {
  return t9.innerRadius;
}
m$1(Yd, "arcInnerRadius");
function Gd(t9) {
  return t9.outerRadius;
}
m$1(Gd, "arcOuterRadius");
function Vd(t9) {
  return t9.startAngle;
}
m$1(Vd, "arcStartAngle");
function Xd(t9) {
  return t9.endAngle;
}
m$1(Xd, "arcEndAngle");
function jd(t9) {
  return t9 && t9.padAngle;
}
m$1(jd, "arcPadAngle");
function Zd(t9, e, r, o2, n2, s, a, l) {
  var c = r - t9, h = o2 - e, u = a - n2, d = l - s, f = d * c - u * h;
  if (!(f * f < yt)) return f = (u * (e - s) - d * (t9 - n2)) / f, [
    t9 + f * c,
    e + f * h
  ];
}
m$1(Zd, "intersect");
function po(t9, e, r, o2, n2, s, a) {
  var l = t9 - r, c = e - o2, h = (a ? s : -s) / Ge(l * l + c * c), u = h * c, d = -h * l, f = t9 + u, g = e + d, T = r + u, L = o2 + d, $ = (f + T) / 2, z = (g + L) / 2, G = T - f, E = L - g, B = G * G + E * E, P = n2 - s, w = f * L - T * g, X = (E < 0 ? -1 : 1) * Ge(/* @__PURE__ */ gc(0, P * P * B - w * w)), j = (w * E - G * X) / B, W = (-w * G - E * X) / B, it = (w * E + G * X) / B, M = (-w * G + E * X) / B, k = j - $, x = W - z, y = it - $, F = M - z;
  return k * k + x * x > y * y + F * F && (j = it, W = M), {
    cx: j,
    cy: W,
    x01: -u,
    y01: -d,
    x11: j * (n2 / P - 1),
    y11: W * (n2 / P - 1)
  };
}
m$1(po, "cornerTangents");
function _c() {
  var t9 = Yd, e = Gd, r = /* @__PURE__ */ st(0), o2 = null, n2 = Vd, s = Xd, a = jd, l = null, c = /* @__PURE__ */ mo(h);
  function h() {
    var u, d, f = +t9.apply(this, arguments), g = +e.apply(this, arguments), T = n2.apply(this, arguments) - ti, L = s.apply(this, arguments) - ti, $ = /* @__PURE__ */ Gs(L - T), z = L > T;
    if (l || (l = u = /* @__PURE__ */ c()), g < f && (d = g, g = f, f = d), !(g > yt)) l.moveTo(0, 0);
    else if ($ > _r - yt) l.moveTo(g * Fe(T), g * Xt(T)), l.arc(0, 0, g, T, L, !z), f > yt && (l.moveTo(f * Fe(L), f * Xt(L)), l.arc(0, 0, f, L, T, z));
    else {
      var G = T, E = L, B = T, P = L, w = $, X = $, j = a.apply(this, arguments) / 2, W = j > yt && (o2 ? +o2.apply(this, arguments) : Ge(f * f + g * g)), it = /* @__PURE__ */ fo(Gs(g - f) / 2, +r.apply(this, arguments)), M = it, k = it, x, y;
      if (W > yt) {
        var F = /* @__PURE__ */ Vs(W / f * Xt(j)), S = /* @__PURE__ */ Vs(W / g * Xt(j));
        (w -= F * 2) > yt ? (F *= z ? 1 : -1, B += F, P -= F) : (w = 0, B = P = (T + L) / 2), (X -= S * 2) > yt ? (S *= z ? 1 : -1, G += S, E -= S) : (X = 0, G = E = (T + L) / 2);
      }
      var N = g * Fe(G), O = g * Xt(G), U = f * Fe(P), rt = f * Xt(P);
      if (it > yt) {
        var Y = g * Fe(E), nt = g * Xt(E), K = f * Fe(B), Ft = f * Xt(B), Z;
        if ($ < Cr) if (Z = /* @__PURE__ */ Zd(N, O, K, Ft, Y, nt, U, rt)) {
          var Ct = N - Z[0], _t = O - Z[1], lt = Y - Z[0], v = nt - Z[1], H = 1 / Xt(xc((Ct * lt + _t * v) / (Ge(Ct * Ct + _t * _t) * Ge(lt * lt + v * v))) / 2), V = /* @__PURE__ */ Ge(Z[0] * Z[0] + Z[1] * Z[1]);
          M = /* @__PURE__ */ fo(it, (f - V) / (H - 1)), k = /* @__PURE__ */ fo(it, (g - V) / (H + 1));
        } else M = k = 0;
      }
      X > yt ? k > yt ? (x = /* @__PURE__ */ po(K, Ft, N, O, g, k, z), y = /* @__PURE__ */ po(Y, nt, U, rt, g, k, z), l.moveTo(x.cx + x.x01, x.cy + x.y01), k < it ? l.arc(x.cx, x.cy, k, /* @__PURE__ */ vt(x.y01, x.x01), /* @__PURE__ */ vt(y.y01, y.x01), !z) : (l.arc(x.cx, x.cy, k, /* @__PURE__ */ vt(x.y01, x.x01), /* @__PURE__ */ vt(x.y11, x.x11), !z), l.arc(0, 0, g, /* @__PURE__ */ vt(x.cy + x.y11, x.cx + x.x11), /* @__PURE__ */ vt(y.cy + y.y11, y.cx + y.x11), !z), l.arc(y.cx, y.cy, k, /* @__PURE__ */ vt(y.y11, y.x11), /* @__PURE__ */ vt(y.y01, y.x01), !z))) : (l.moveTo(N, O), l.arc(0, 0, g, G, E, !z)) : l.moveTo(N, O), !(f > yt) || !(w > yt) ? l.lineTo(U, rt) : M > yt ? (x = /* @__PURE__ */ po(U, rt, Y, nt, f, -M, z), y = /* @__PURE__ */ po(N, O, K, Ft, f, -M, z), l.lineTo(x.cx + x.x01, x.cy + x.y01), M < it ? l.arc(x.cx, x.cy, M, /* @__PURE__ */ vt(x.y01, x.x01), /* @__PURE__ */ vt(y.y01, y.x01), !z) : (l.arc(x.cx, x.cy, M, /* @__PURE__ */ vt(x.y01, x.x01), /* @__PURE__ */ vt(x.y11, x.x11), !z), l.arc(0, 0, f, /* @__PURE__ */ vt(x.cy + x.y11, x.cx + x.x11), /* @__PURE__ */ vt(y.cy + y.y11, y.cx + y.x11), z), l.arc(y.cx, y.cy, M, /* @__PURE__ */ vt(y.y11, y.x11), /* @__PURE__ */ vt(y.y01, y.x01), !z))) : l.arc(0, 0, f, P, B, z);
    }
    if (l.closePath(), u) return l = null, u + "" || null;
  }
  return m$1(h, "arc"), h.centroid = function() {
    var u = (+t9.apply(this, arguments) + +e.apply(this, arguments)) / 2, d = (+n2.apply(this, arguments) + +s.apply(this, arguments)) / 2 - Cr / 2;
    return [
      Fe(d) * u,
      Xt(d) * u
    ];
  }, h.innerRadius = function(u) {
    return arguments.length ? (t9 = typeof u == "function" ? u : st(+u), h) : t9;
  }, h.outerRadius = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : st(+u), h) : e;
  }, h.cornerRadius = function(u) {
    return arguments.length ? (r = typeof u == "function" ? u : st(+u), h) : r;
  }, h.padRadius = function(u) {
    return arguments.length ? (o2 = u == null ? null : typeof u == "function" ? u : st(+u), h) : o2;
  }, h.startAngle = function(u) {
    return arguments.length ? (n2 = typeof u == "function" ? u : st(+u), h) : n2;
  }, h.endAngle = function(u) {
    return arguments.length ? (s = typeof u == "function" ? u : st(+u), h) : s;
  }, h.padAngle = function(u) {
    return arguments.length ? (a = typeof u == "function" ? u : st(+u), h) : a;
  }, h.context = function(u) {
    return arguments.length ? (l = u ?? null, h) : l;
  }, h;
}
m$1(_c, "default");
function bc(t9) {
  this._context = t9;
}
m$1(bc, "Linear");
bc.prototype = {
  areaStart: /* @__PURE__ */ m$1(function() {
    this._line = 0;
  }, "areaStart"),
  areaEnd: /* @__PURE__ */ m$1(function() {
    this._line = NaN;
  }, "areaEnd"),
  lineStart: /* @__PURE__ */ m$1(function() {
    this._point = 0;
  }, "lineStart"),
  lineEnd: /* @__PURE__ */ m$1(function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }, "lineEnd"),
  point: /* @__PURE__ */ m$1(function(t9, e) {
    switch (t9 = +t9, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t9, e) : this._context.moveTo(t9, e);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(t9, e);
        break;
    }
  }, "point")
};
function go(t9) {
  return new bc(t9);
}
m$1(go, "default");
function ei(t9) {
  return typeof t9 == "object" && "length" in t9 ? t9 : Array.from(t9);
}
m$1(ei, "default");
function Tc(t9) {
  return t9[0];
}
m$1(Tc, "x");
function kc(t9) {
  return t9[1];
}
m$1(kc, "y");
function Sc(t9, e) {
  var r = /* @__PURE__ */ st(true), o2 = null, n2 = go, s = null, a = /* @__PURE__ */ mo(l);
  t9 = typeof t9 == "function" ? t9 : t9 === void 0 ? Tc : st(t9), e = typeof e == "function" ? e : e === void 0 ? kc : st(e);
  function l(c) {
    var h, u = (c = /* @__PURE__ */ ei(c)).length, d, f = false, g;
    for (o2 == null && (s = /* @__PURE__ */ n2(g = /* @__PURE__ */ a())), h = 0; h <= u; ++h) !(h < u && r(d = c[h], h, c)) === f && ((f = !f) ? s.lineStart() : s.lineEnd()), f && s.point(+t9(d, h, c), +e(d, h, c));
    if (g) return s = null, g + "" || null;
  }
  return m$1(l, "line"), l.x = function(c) {
    return arguments.length ? (t9 = typeof c == "function" ? c : st(+c), l) : t9;
  }, l.y = function(c) {
    return arguments.length ? (e = typeof c == "function" ? c : st(+c), l) : e;
  }, l.defined = function(c) {
    return arguments.length ? (r = typeof c == "function" ? c : st(!!c), l) : r;
  }, l.curve = function(c) {
    return arguments.length ? (n2 = c, o2 != null && (s = /* @__PURE__ */ n2(o2)), l) : n2;
  }, l.context = function(c) {
    return arguments.length ? (c == null ? o2 = s = null : s = /* @__PURE__ */ n2(o2 = c), l) : o2;
  }, l;
}
m$1(Sc, "default");
function Zs(t9, e) {
  return e < t9 ? -1 : e > t9 ? 1 : e >= t9 ? 0 : NaN;
}
m$1(Zs, "default");
function Ks(t9) {
  return t9;
}
m$1(Ks, "default");
function vc() {
  var t9 = Ks, e = Zs, r = null, o2 = /* @__PURE__ */ st(0), n2 = /* @__PURE__ */ st(_r), s = /* @__PURE__ */ st(0);
  function a(l) {
    var c, h = (l = /* @__PURE__ */ ei(l)).length, u, d, f = 0, g = new Array(h), T = new Array(h), L = +o2.apply(this, arguments), $ = /* @__PURE__ */ Math.min(_r, /* @__PURE__ */ Math.max(-_r, n2.apply(this, arguments) - L)), z, G = /* @__PURE__ */ Math.min(Math.abs($) / h, /* @__PURE__ */ s.apply(this, arguments)), E = G * ($ < 0 ? -1 : 1), B;
    for (c = 0; c < h; ++c) (B = T[g[c] = c] = +t9(l[c], c, l)) > 0 && (f += B);
    for (e != null ? g.sort(function(P, w) {
      return e(T[P], T[w]);
    }) : r != null && g.sort(function(P, w) {
      return r(l[P], l[w]);
    }), c = 0, d = f ? ($ - h * E) / f : 0; c < h; ++c, L = z) u = g[c], B = T[u], z = L + (B > 0 ? B * d : 0) + E, T[u] = {
      data: l[u],
      index: c,
      value: B,
      startAngle: L,
      endAngle: z,
      padAngle: G
    };
    return T;
  }
  return m$1(a, "pie"), a.value = function(l) {
    return arguments.length ? (t9 = typeof l == "function" ? l : st(+l), a) : t9;
  }, a.sortValues = function(l) {
    return arguments.length ? (e = l, r = null, a) : e;
  }, a.sort = function(l) {
    return arguments.length ? (r = l, e = null, a) : r;
  }, a.startAngle = function(l) {
    return arguments.length ? (o2 = typeof l == "function" ? l : st(+l), a) : o2;
  }, a.endAngle = function(l) {
    return arguments.length ? (n2 = typeof l == "function" ? l : st(+l), a) : n2;
  }, a.padAngle = function(l) {
    return arguments.length ? (s = typeof l == "function" ? l : st(+l), a) : s;
  }, a;
}
m$1(vc, "default");
var xo = (_l2 = class {
  constructor(e, r) {
    this._context = e, this._x = r;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(e, r) {
    switch (e = +e, r = +r, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(e, r) : this._context.moveTo(e, r);
        break;
      }
      case 1:
        this._point = 2;
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + e) / 2, this._y0, this._x0, r, e, r) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + r) / 2, e, this._y0, e, r);
        break;
      }
    }
    this._x0 = e, this._y0 = r;
  }
}, __12 = new WeakMap(), __privateAdd(_l2, __12, m$1(_l2, "Bump")), _l2);
function Kd(t9) {
  return new xo(t9, true);
}
m$1(Kd, "bumpX");
function Qd(t9) {
  return new xo(t9, false);
}
m$1(Qd, "bumpY");
function br(t9, e, r) {
  t9._context.bezierCurveTo((2 * t9._x0 + t9._x1) / 3, (2 * t9._y0 + t9._y1) / 3, (t9._x0 + 2 * t9._x1) / 3, (t9._y0 + 2 * t9._y1) / 3, (t9._x0 + 4 * t9._x1 + e) / 6, (t9._y0 + 4 * t9._y1 + r) / 6);
}
m$1(br, "point");
function ri(t9) {
  this._context = t9;
}
m$1(ri, "Basis");
ri.prototype = {
  areaStart: /* @__PURE__ */ m$1(function() {
    this._line = 0;
  }, "areaStart"),
  areaEnd: /* @__PURE__ */ m$1(function() {
    this._line = NaN;
  }, "areaEnd"),
  lineStart: /* @__PURE__ */ m$1(function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  }, "lineStart"),
  lineEnd: /* @__PURE__ */ m$1(function() {
    switch (this._point) {
      case 3:
        br(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }, "lineEnd"),
  point: /* @__PURE__ */ m$1(function(t9, e) {
    switch (t9 = +t9, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t9, e) : this._context.moveTo(t9, e);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      default:
        br(this, t9, e);
        break;
    }
    this._x0 = this._x1, this._x1 = t9, this._y0 = this._y1, this._y1 = e;
  }, "point")
};
function wc(t9) {
  return new ri(t9);
}
m$1(wc, "default");
function zt() {
}
m$1(zt, "default");
function Bc(t9) {
  this._context = t9;
}
m$1(Bc, "BasisClosed");
Bc.prototype = {
  areaStart: zt,
  areaEnd: zt,
  lineStart: /* @__PURE__ */ m$1(function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  }, "lineStart"),
  lineEnd: /* @__PURE__ */ m$1(function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  }, "lineEnd"),
  point: /* @__PURE__ */ m$1(function(t9, e) {
    switch (t9 = +t9, e = +e, this._point) {
      case 0:
        this._point = 1, this._x2 = t9, this._y2 = e;
        break;
      case 1:
        this._point = 2, this._x3 = t9, this._y3 = e;
        break;
      case 2:
        this._point = 3, this._x4 = t9, this._y4 = e, this._context.moveTo((this._x0 + 4 * this._x1 + t9) / 6, (this._y0 + 4 * this._y1 + e) / 6);
        break;
      default:
        br(this, t9, e);
        break;
    }
    this._x0 = this._x1, this._x1 = t9, this._y0 = this._y1, this._y1 = e;
  }, "point")
};
function Fc(t9) {
  return new Bc(t9);
}
m$1(Fc, "default");
function Mc(t9) {
  this._context = t9;
}
m$1(Mc, "BasisOpen");
Mc.prototype = {
  areaStart: /* @__PURE__ */ m$1(function() {
    this._line = 0;
  }, "areaStart"),
  areaEnd: /* @__PURE__ */ m$1(function() {
    this._line = NaN;
  }, "areaEnd"),
  lineStart: /* @__PURE__ */ m$1(function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  }, "lineStart"),
  lineEnd: /* @__PURE__ */ m$1(function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  }, "lineEnd"),
  point: /* @__PURE__ */ m$1(function(t9, e) {
    switch (t9 = +t9, e = +e, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + t9) / 6, o2 = (this._y0 + 4 * this._y1 + e) / 6;
        this._line ? this._context.lineTo(r, o2) : this._context.moveTo(r, o2);
        break;
      case 3:
        this._point = 4;
      default:
        br(this, t9, e);
        break;
    }
    this._x0 = this._x1, this._x1 = t9, this._y0 = this._y1, this._y1 = e;
  }, "point")
};
function Lc(t9) {
  return new Mc(t9);
}
m$1(Lc, "default");
function Ac(t9, e) {
  this._basis = new ri(t9), this._beta = e;
}
m$1(Ac, "Bundle");
Ac.prototype = {
  lineStart: /* @__PURE__ */ m$1(function() {
    this._x = [], this._y = [], this._basis.lineStart();
  }, "lineStart"),
  lineEnd: /* @__PURE__ */ m$1(function() {
    var t9 = this._x, e = this._y, r = t9.length - 1;
    if (r > 0) for (var o2 = t9[0], n2 = e[0], s = t9[r] - o2, a = e[r] - n2, l = -1, c; ++l <= r; ) c = l / r, this._basis.point(this._beta * t9[l] + (1 - this._beta) * (o2 + c * s), this._beta * e[l] + (1 - this._beta) * (n2 + c * a));
    this._x = this._y = null, this._basis.lineEnd();
  }, "lineEnd"),
  point: /* @__PURE__ */ m$1(function(t9, e) {
    this._x.push(+t9), this._y.push(+e);
  }, "point")
};
var Jd = /* @__PURE__ */ m$1(function t2(e) {
  function r(o2) {
    return e === 1 ? new ri(o2) : new Ac(o2, e);
  }
  return m$1(r, "bundle"), r.beta = function(o2) {
    return t2(+o2);
  }, r;
}, "custom")(0.85);
function Tr(t9, e, r) {
  t9._context.bezierCurveTo(t9._x1 + t9._k * (t9._x2 - t9._x0), t9._y1 + t9._k * (t9._y2 - t9._y0), t9._x2 + t9._k * (t9._x1 - e), t9._y2 + t9._k * (t9._y1 - r), t9._x2, t9._y2);
}
m$1(Tr, "point");
function yo(t9, e) {
  this._context = t9, this._k = (1 - e) / 6;
}
m$1(yo, "Cardinal");
yo.prototype = {
  areaStart: /* @__PURE__ */ m$1(function() {
    this._line = 0;
  }, "areaStart"),
  areaEnd: /* @__PURE__ */ m$1(function() {
    this._line = NaN;
  }, "areaEnd"),
  lineStart: /* @__PURE__ */ m$1(function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  }, "lineStart"),
  lineEnd: /* @__PURE__ */ m$1(function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        Tr(this, this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }, "lineEnd"),
  point: /* @__PURE__ */ m$1(function(t9, e) {
    switch (t9 = +t9, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t9, e) : this._context.moveTo(t9, e);
        break;
      case 1:
        this._point = 2, this._x1 = t9, this._y1 = e;
        break;
      case 2:
        this._point = 3;
      default:
        Tr(this, t9, e);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t9, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }, "point")
};
var tg = /* @__PURE__ */ m$1(function t3(e) {
  function r(o2) {
    return new yo(o2, e);
  }
  return m$1(r, "cardinal"), r.tension = function(o2) {
    return t3(+o2);
  }, r;
}, "custom")(0);
function Co(t9, e) {
  this._context = t9, this._k = (1 - e) / 6;
}
m$1(Co, "CardinalClosed");
Co.prototype = {
  areaStart: zt,
  areaEnd: zt,
  lineStart: /* @__PURE__ */ m$1(function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
  }, "lineStart"),
  lineEnd: /* @__PURE__ */ m$1(function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  }, "lineEnd"),
  point: /* @__PURE__ */ m$1(function(t9, e) {
    switch (t9 = +t9, e = +e, this._point) {
      case 0:
        this._point = 1, this._x3 = t9, this._y3 = e;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = t9, this._y4 = e);
        break;
      case 2:
        this._point = 3, this._x5 = t9, this._y5 = e;
        break;
      default:
        Tr(this, t9, e);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t9, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }, "point")
};
var eg = /* @__PURE__ */ m$1(function t4(e) {
  function r(o2) {
    return new Co(o2, e);
  }
  return m$1(r, "cardinal"), r.tension = function(o2) {
    return t4(+o2);
  }, r;
}, "custom")(0);
function _o(t9, e) {
  this._context = t9, this._k = (1 - e) / 6;
}
m$1(_o, "CardinalOpen");
_o.prototype = {
  areaStart: /* @__PURE__ */ m$1(function() {
    this._line = 0;
  }, "areaStart"),
  areaEnd: /* @__PURE__ */ m$1(function() {
    this._line = NaN;
  }, "areaEnd"),
  lineStart: /* @__PURE__ */ m$1(function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  }, "lineStart"),
  lineEnd: /* @__PURE__ */ m$1(function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  }, "lineEnd"),
  point: /* @__PURE__ */ m$1(function(t9, e) {
    switch (t9 = +t9, e = +e, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        Tr(this, t9, e);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t9, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }, "point")
};
var rg = /* @__PURE__ */ m$1(function t5(e) {
  function r(o2) {
    return new _o(o2, e);
  }
  return m$1(r, "cardinal"), r.tension = function(o2) {
    return t5(+o2);
  }, r;
}, "custom")(0);
function ii(t9, e, r) {
  var o2 = t9._x1, n2 = t9._y1, s = t9._x2, a = t9._y2;
  if (t9._l01_a > yt) {
    var l = 2 * t9._l01_2a + 3 * t9._l01_a * t9._l12_a + t9._l12_2a, c = 3 * t9._l01_a * (t9._l01_a + t9._l12_a);
    o2 = (o2 * l - t9._x0 * t9._l12_2a + t9._x2 * t9._l01_2a) / c, n2 = (n2 * l - t9._y0 * t9._l12_2a + t9._y2 * t9._l01_2a) / c;
  }
  if (t9._l23_a > yt) {
    var h = 2 * t9._l23_2a + 3 * t9._l23_a * t9._l12_a + t9._l12_2a, u = 3 * t9._l23_a * (t9._l23_a + t9._l12_a);
    s = (s * h + t9._x1 * t9._l23_2a - e * t9._l12_2a) / u, a = (a * h + t9._y1 * t9._l23_2a - r * t9._l12_2a) / u;
  }
  t9._context.bezierCurveTo(o2, n2, s, a, t9._x2, t9._y2);
}
m$1(ii, "point");
function Ec(t9, e) {
  this._context = t9, this._alpha = e;
}
m$1(Ec, "CatmullRom");
Ec.prototype = {
  areaStart: /* @__PURE__ */ m$1(function() {
    this._line = 0;
  }, "areaStart"),
  areaEnd: /* @__PURE__ */ m$1(function() {
    this._line = NaN;
  }, "areaEnd"),
  lineStart: /* @__PURE__ */ m$1(function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  }, "lineStart"),
  lineEnd: /* @__PURE__ */ m$1(function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }, "lineEnd"),
  point: /* @__PURE__ */ m$1(function(t9, e) {
    if (t9 = +t9, e = +e, this._point) {
      var r = this._x2 - t9, o2 = this._y2 - e;
      this._l23_a = /* @__PURE__ */ Math.sqrt(this._l23_2a = /* @__PURE__ */ Math.pow(r * r + o2 * o2, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t9, e) : this._context.moveTo(t9, e);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      default:
        ii(this, t9, e);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t9, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }, "point")
};
var ig = /* @__PURE__ */ m$1(function t6(e) {
  function r(o2) {
    return e ? new Ec(o2, e) : new yo(o2, 0);
  }
  return m$1(r, "catmullRom"), r.alpha = function(o2) {
    return t6(+o2);
  }, r;
}, "custom")(0.5);
function Dc(t9, e) {
  this._context = t9, this._alpha = e;
}
m$1(Dc, "CatmullRomClosed");
Dc.prototype = {
  areaStart: zt,
  areaEnd: zt,
  lineStart: /* @__PURE__ */ m$1(function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  }, "lineStart"),
  lineEnd: /* @__PURE__ */ m$1(function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  }, "lineEnd"),
  point: /* @__PURE__ */ m$1(function(t9, e) {
    if (t9 = +t9, e = +e, this._point) {
      var r = this._x2 - t9, o2 = this._y2 - e;
      this._l23_a = /* @__PURE__ */ Math.sqrt(this._l23_2a = /* @__PURE__ */ Math.pow(r * r + o2 * o2, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._x3 = t9, this._y3 = e;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = t9, this._y4 = e);
        break;
      case 2:
        this._point = 3, this._x5 = t9, this._y5 = e;
        break;
      default:
        ii(this, t9, e);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t9, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }, "point")
};
var og = /* @__PURE__ */ m$1(function t7(e) {
  function r(o2) {
    return e ? new Dc(o2, e) : new Co(o2, 0);
  }
  return m$1(r, "catmullRom"), r.alpha = function(o2) {
    return t7(+o2);
  }, r;
}, "custom")(0.5);
function Oc(t9, e) {
  this._context = t9, this._alpha = e;
}
m$1(Oc, "CatmullRomOpen");
Oc.prototype = {
  areaStart: /* @__PURE__ */ m$1(function() {
    this._line = 0;
  }, "areaStart"),
  areaEnd: /* @__PURE__ */ m$1(function() {
    this._line = NaN;
  }, "areaEnd"),
  lineStart: /* @__PURE__ */ m$1(function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  }, "lineStart"),
  lineEnd: /* @__PURE__ */ m$1(function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  }, "lineEnd"),
  point: /* @__PURE__ */ m$1(function(t9, e) {
    if (t9 = +t9, e = +e, this._point) {
      var r = this._x2 - t9, o2 = this._y2 - e;
      this._l23_a = /* @__PURE__ */ Math.sqrt(this._l23_2a = /* @__PURE__ */ Math.pow(r * r + o2 * o2, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        ii(this, t9, e);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t9, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }, "point")
};
var ng = /* @__PURE__ */ m$1(function t8(e) {
  function r(o2) {
    return e ? new Oc(o2, e) : new _o(o2, 0);
  }
  return m$1(r, "catmullRom"), r.alpha = function(o2) {
    return t8(+o2);
  }, r;
}, "custom")(0.5);
function Ic(t9) {
  this._context = t9;
}
m$1(Ic, "LinearClosed");
Ic.prototype = {
  areaStart: zt,
  areaEnd: zt,
  lineStart: /* @__PURE__ */ m$1(function() {
    this._point = 0;
  }, "lineStart"),
  lineEnd: /* @__PURE__ */ m$1(function() {
    this._point && this._context.closePath();
  }, "lineEnd"),
  point: /* @__PURE__ */ m$1(function(t9, e) {
    t9 = +t9, e = +e, this._point ? this._context.lineTo(t9, e) : (this._point = 1, this._context.moveTo(t9, e));
  }, "point")
};
function Rc(t9) {
  return new Ic(t9);
}
m$1(Rc, "default");
function Nc(t9) {
  return t9 < 0 ? -1 : 1;
}
m$1(Nc, "sign");
function qc(t9, e, r) {
  var o2 = t9._x1 - t9._x0, n2 = e - t9._x1, s = (t9._y1 - t9._y0) / (o2 || n2 < 0 && -0), a = (r - t9._y1) / (n2 || o2 < 0 && -0), l = (s * n2 + a * o2) / (o2 + n2);
  return (Nc(s) + Nc(a)) * Math.min(/* @__PURE__ */ Math.abs(s), /* @__PURE__ */ Math.abs(a), 0.5 * Math.abs(l)) || 0;
}
m$1(qc, "slope3");
function zc(t9, e) {
  var r = t9._x1 - t9._x0;
  return r ? (3 * (t9._y1 - t9._y0) / r - e) / 2 : e;
}
m$1(zc, "slope2");
function Qs(t9, e, r) {
  var o2 = t9._x0, n2 = t9._y0, s = t9._x1, a = t9._y1, l = (s - o2) / 3;
  t9._context.bezierCurveTo(o2 + l, n2 + l * e, s - l, a - l * r, s, a);
}
m$1(Qs, "point");
function bo(t9) {
  this._context = t9;
}
m$1(bo, "MonotoneX");
bo.prototype = {
  areaStart: /* @__PURE__ */ m$1(function() {
    this._line = 0;
  }, "areaStart"),
  areaEnd: /* @__PURE__ */ m$1(function() {
    this._line = NaN;
  }, "areaEnd"),
  lineStart: /* @__PURE__ */ m$1(function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  }, "lineStart"),
  lineEnd: /* @__PURE__ */ m$1(function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        Qs(this, this._t0, /* @__PURE__ */ zc(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }, "lineEnd"),
  point: /* @__PURE__ */ m$1(function(t9, e) {
    var r = NaN;
    if (t9 = +t9, e = +e, !(t9 === this._x1 && e === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(t9, e) : this._context.moveTo(t9, e);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, Qs(this, /* @__PURE__ */ zc(this, r = /* @__PURE__ */ qc(this, t9, e)), r);
          break;
        default:
          Qs(this, this._t0, r = /* @__PURE__ */ qc(this, t9, e));
          break;
      }
      this._x0 = this._x1, this._x1 = t9, this._y0 = this._y1, this._y1 = e, this._t0 = r;
    }
  }, "point")
};
function Pc(t9) {
  this._context = new $c(t9);
}
m$1(Pc, "MonotoneY");
(Pc.prototype = /* @__PURE__ */ Object.create(bo.prototype)).point = function(t9, e) {
  bo.prototype.point.call(this, e, t9);
};
function $c(t9) {
  this._context = t9;
}
m$1($c, "ReflectContext");
$c.prototype = {
  moveTo: /* @__PURE__ */ m$1(function(t9, e) {
    this._context.moveTo(e, t9);
  }, "moveTo"),
  closePath: /* @__PURE__ */ m$1(function() {
    this._context.closePath();
  }, "closePath"),
  lineTo: /* @__PURE__ */ m$1(function(t9, e) {
    this._context.lineTo(e, t9);
  }, "lineTo"),
  bezierCurveTo: /* @__PURE__ */ m$1(function(t9, e, r, o2, n2, s) {
    this._context.bezierCurveTo(e, t9, o2, r, s, n2);
  }, "bezierCurveTo")
};
function sg(t9) {
  return new bo(t9);
}
m$1(sg, "monotoneX");
function ag(t9) {
  return new Pc(t9);
}
m$1(ag, "monotoneY");
function Hc(t9) {
  this._context = t9;
}
m$1(Hc, "Natural");
Hc.prototype = {
  areaStart: /* @__PURE__ */ m$1(function() {
    this._line = 0;
  }, "areaStart"),
  areaEnd: /* @__PURE__ */ m$1(function() {
    this._line = NaN;
  }, "areaEnd"),
  lineStart: /* @__PURE__ */ m$1(function() {
    this._x = [], this._y = [];
  }, "lineStart"),
  lineEnd: /* @__PURE__ */ m$1(function() {
    var t9 = this._x, e = this._y, r = t9.length;
    if (r) if (this._line ? this._context.lineTo(t9[0], e[0]) : this._context.moveTo(t9[0], e[0]), r === 2) this._context.lineTo(t9[1], e[1]);
    else for (var o2 = /* @__PURE__ */ Wc(t9), n2 = /* @__PURE__ */ Wc(e), s = 0, a = 1; a < r; ++s, ++a) this._context.bezierCurveTo(o2[0][s], n2[0][s], o2[1][s], n2[1][s], t9[a], e[a]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  }, "lineEnd"),
  point: /* @__PURE__ */ m$1(function(t9, e) {
    this._x.push(+t9), this._y.push(+e);
  }, "point")
};
function Wc(t9) {
  var e, r = t9.length - 1, o2, n2 = new Array(r), s = new Array(r), a = new Array(r);
  for (n2[0] = 0, s[0] = 2, a[0] = t9[0] + 2 * t9[1], e = 1; e < r - 1; ++e) n2[e] = 1, s[e] = 4, a[e] = 4 * t9[e] + 2 * t9[e + 1];
  for (n2[r - 1] = 2, s[r - 1] = 7, a[r - 1] = 8 * t9[r - 1] + t9[r], e = 1; e < r; ++e) o2 = n2[e] / s[e - 1], s[e] -= o2, a[e] -= o2 * a[e - 1];
  for (n2[r - 1] = a[r - 1] / s[r - 1], e = r - 2; e >= 0; --e) n2[e] = (a[e] - n2[e + 1]) / s[e];
  for (s[r - 1] = (t9[r] + n2[r - 1]) / 2, e = 0; e < r - 1; ++e) s[e] = 2 * t9[e + 1] - n2[e + 1];
  return [
    n2,
    s
  ];
}
m$1(Wc, "controlPoints");
function Uc(t9) {
  return new Hc(t9);
}
m$1(Uc, "default");
function To(t9, e) {
  this._context = t9, this._t = e;
}
m$1(To, "Step");
To.prototype = {
  areaStart: /* @__PURE__ */ m$1(function() {
    this._line = 0;
  }, "areaStart"),
  areaEnd: /* @__PURE__ */ m$1(function() {
    this._line = NaN;
  }, "areaEnd"),
  lineStart: /* @__PURE__ */ m$1(function() {
    this._x = this._y = NaN, this._point = 0;
  }, "lineStart"),
  lineEnd: /* @__PURE__ */ m$1(function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  }, "lineEnd"),
  point: /* @__PURE__ */ m$1(function(t9, e) {
    switch (t9 = +t9, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t9, e) : this._context.moveTo(t9, e);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0) this._context.lineTo(this._x, e), this._context.lineTo(t9, e);
        else {
          var r = this._x * (1 - this._t) + t9 * this._t;
          this._context.lineTo(r, this._y), this._context.lineTo(r, e);
        }
        break;
      }
    }
    this._x = t9, this._y = e;
  }, "point")
};
function Yc(t9) {
  return new To(t9, 0.5);
}
m$1(Yc, "default");
function lg(t9) {
  return new To(t9, 0);
}
m$1(lg, "stepBefore");
function hg(t9) {
  return new To(t9, 1);
}
m$1(hg, "stepAfter");
var cg = {
  value: /* @__PURE__ */ m$1(() => {
  }, "value")
};
function Vc() {
  for (var t9 = 0, e = arguments.length, r = {}, o2; t9 < e; ++t9) {
    if (!(o2 = arguments[t9] + "") || o2 in r || /[\s.]/.test(o2)) throw new Error("illegal type: " + o2);
    r[o2] = [];
  }
  return new ko(r);
}
m$1(Vc, "dispatch");
function ko(t9) {
  this._ = t9;
}
m$1(ko, "Dispatch");
function ug(t9, e) {
  return t9.trim().split(/^|\s+/).map(function(r) {
    var o2 = "", n2 = /* @__PURE__ */ r.indexOf(".");
    if (n2 >= 0 && (o2 = /* @__PURE__ */ r.slice(n2 + 1), r = /* @__PURE__ */ r.slice(0, n2)), r && !e.hasOwnProperty(r)) throw new Error("unknown type: " + r);
    return {
      type: r,
      name: o2
    };
  });
}
m$1(ug, "parseTypenames");
ko.prototype = Vc.prototype = {
  constructor: ko,
  on: /* @__PURE__ */ m$1(function(t9, e) {
    var r = this._, o2 = /* @__PURE__ */ ug(t9 + "", r), n2, s = -1, a = o2.length;
    if (arguments.length < 2) {
      for (; ++s < a; ) if ((n2 = (t9 = o2[s]).type) && (n2 = /* @__PURE__ */ fg(r[n2], t9.name))) return n2;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++s < a; ) if (n2 = (t9 = o2[s]).type) r[n2] = /* @__PURE__ */ Gc(r[n2], t9.name, e);
    else if (e == null) for (n2 in r) r[n2] = /* @__PURE__ */ Gc(r[n2], t9.name, null);
    return this;
  }, "on"),
  copy: /* @__PURE__ */ m$1(function() {
    var t9 = {}, e = this._;
    for (var r in e) t9[r] = /* @__PURE__ */ e[r].slice();
    return new ko(t9);
  }, "copy"),
  call: /* @__PURE__ */ m$1(function(t9, e) {
    if ((n2 = arguments.length - 2) > 0) for (var r = new Array(n2), o2 = 0, n2, s; o2 < n2; ++o2) r[o2] = arguments[o2 + 2];
    if (!this._.hasOwnProperty(t9)) throw new Error("unknown type: " + t9);
    for (s = this._[t9], o2 = 0, n2 = s.length; o2 < n2; ++o2) s[o2].value.apply(e, r);
  }, "call"),
  apply: /* @__PURE__ */ m$1(function(t9, e, r) {
    if (!this._.hasOwnProperty(t9)) throw new Error("unknown type: " + t9);
    for (var o2 = this._[t9], n2 = 0, s = o2.length; n2 < s; ++n2) o2[n2].value.apply(e, r);
  }, "apply")
};
function fg(t9, e) {
  for (var r = 0, o2 = t9.length, n2; r < o2; ++r) if ((n2 = t9[r]).name === e) return n2.value;
}
m$1(fg, "get");
function Gc(t9, e, r) {
  for (var o2 = 0, n2 = t9.length; o2 < n2; ++o2) if (t9[o2].name === e) {
    t9[o2] = cg, t9 = /* @__PURE__ */ t9.slice(0, o2).concat(/* @__PURE__ */ t9.slice(o2 + 1));
    break;
  }
  return r != null && t9.push({
    name: e,
    value: r
  }), t9;
}
m$1(Gc, "set");
var Js = Vc;
var kr = 0, ni = 0, oi = 0, jc = 1e3, So, si, vo = 0, je = 0, wo = 0, ai = typeof performance == "object" && performance.now ? performance : Date, Zc = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t9) {
  setTimeout(t9, 17);
};
function hi() {
  return je || (Zc(mg), je = ai.now() + wo);
}
m$1(hi, "now");
function mg() {
  je = 0;
}
m$1(mg, "clearNow");
function li() {
  this._call = this._time = this._next = null;
}
m$1(li, "Timer");
li.prototype = Bo.prototype = {
  constructor: li,
  restart: /* @__PURE__ */ m$1(function(t9, e, r) {
    if (typeof t9 != "function") throw new TypeError("callback is not a function");
    r = (r == null ? hi() : +r) + (e == null ? 0 : +e), !this._next && si !== this && (si ? si._next = this : So = this, si = this), this._call = t9, this._time = r, ta();
  }, "restart"),
  stop: /* @__PURE__ */ m$1(function() {
    this._call && (this._call = null, this._time = 1 / 0, ta());
  }, "stop")
};
function Bo(t9, e, r) {
  var o2 = new li();
  return o2.restart(t9, e, r), o2;
}
m$1(Bo, "timer");
function Kc() {
  hi(), ++kr;
  for (var t9 = So, e; t9; ) (e = je - t9._time) >= 0 && t9._call.call(void 0, e), t9 = t9._next;
  --kr;
}
m$1(Kc, "timerFlush");
function Xc() {
  je = (vo = /* @__PURE__ */ ai.now()) + wo, kr = ni = 0;
  try {
    Kc();
  } finally {
    kr = 0, dg(), je = 0;
  }
}
m$1(Xc, "wake");
function pg() {
  var t9 = /* @__PURE__ */ ai.now(), e = t9 - vo;
  e > jc && (wo -= e, vo = t9);
}
m$1(pg, "poke");
function dg() {
  for (var t9, e = So, r, o2 = 1 / 0; e; ) e._call ? (o2 > e._time && (o2 = e._time), t9 = e, e = e._next) : (r = e._next, e._next = null, e = t9 ? t9._next = r : So = r);
  si = t9, ta(o2);
}
m$1(dg, "nap");
function ta(t9) {
  if (!kr) {
    ni && (ni = /* @__PURE__ */ clearTimeout(ni));
    var e = t9 - je;
    e > 24 ? (t9 < 1 / 0 && (ni = /* @__PURE__ */ setTimeout(Xc, t9 - ai.now() - wo)), oi && (oi = /* @__PURE__ */ clearInterval(oi))) : (oi || (vo = /* @__PURE__ */ ai.now(), oi = /* @__PURE__ */ setInterval(pg, jc)), kr = 1, Zc(Xc));
  }
}
m$1(ta, "sleep");
function ci(t9, e, r) {
  var o2 = new li();
  return e = e == null ? 0 : +e, o2.restart((n2) => {
    o2.stop(), t9(n2 + e);
  }, e, r), o2;
}
m$1(ci, "default");
var gg = /* @__PURE__ */ Js("start", "end", "cancel", "interrupt"), xg = [], tu = 0, Qc = 1, Mo = 2, Fo = 3, Jc = 4, Lo = 5, ui = 6;
function me(t9, e, r, o2, n2, s) {
  var a = t9.__transition;
  if (!a) t9.__transition = {};
  else if (r in a) return;
  yg(t9, r, {
    name: e,
    index: o2,
    group: n2,
    on: gg,
    tween: xg,
    time: s.time,
    delay: s.delay,
    duration: s.duration,
    ease: s.ease,
    timer: null,
    state: tu
  });
}
m$1(me, "default");
function fi(t9, e) {
  var r = /* @__PURE__ */ mt(t9, e);
  if (r.state > tu) throw new Error("too late; already scheduled");
  return r;
}
m$1(fi, "init");
function wt(t9, e) {
  var r = /* @__PURE__ */ mt(t9, e);
  if (r.state > Fo) throw new Error("too late; already running");
  return r;
}
m$1(wt, "set");
function mt(t9, e) {
  var r = t9.__transition;
  if (!r || !(r = r[e])) throw new Error("transition not found");
  return r;
}
m$1(mt, "get");
function yg(t9, e, r) {
  var o2 = t9.__transition, n2;
  o2[e] = r, r.timer = /* @__PURE__ */ Bo(s, 0, r.time);
  function s(h) {
    r.state = Qc, r.timer.restart(a, r.delay, r.time), r.delay <= h && a(h - r.delay);
  }
  m$1(s, "schedule");
  function a(h) {
    var u, d, f, g;
    if (r.state !== Qc) return c();
    for (u in o2) if (g = o2[u], g.name === r.name) {
      if (g.state === Fo) return ci(a);
      g.state === Jc ? (g.state = ui, g.timer.stop(), g.on.call("interrupt", t9, t9.__data__, g.index, g.group), delete o2[u]) : +u < e && (g.state = ui, g.timer.stop(), g.on.call("cancel", t9, t9.__data__, g.index, g.group), delete o2[u]);
    }
    if (ci(function() {
      r.state === Fo && (r.state = Jc, r.timer.restart(l, r.delay, r.time), l(h));
    }), r.state = Mo, r.on.call("start", t9, t9.__data__, r.index, r.group), r.state === Mo) {
      for (r.state = Fo, n2 = new Array(f = r.tween.length), u = 0, d = -1; u < f; ++u) (g = /* @__PURE__ */ r.tween[u].value.call(t9, t9.__data__, r.index, r.group)) && (n2[++d] = g);
      n2.length = d + 1;
    }
  }
  m$1(a, "start");
  function l(h) {
    for (var u = h < r.duration ? r.ease.call(null, h / r.duration) : (r.timer.restart(c), r.state = Lo, 1), d = -1, f = n2.length; ++d < f; ) n2[d].call(t9, u);
    r.state === Lo && (r.on.call("end", t9, t9.__data__, r.index, r.group), c());
  }
  m$1(l, "tick");
  function c() {
    r.state = ui, r.timer.stop(), delete o2[e];
    for (var h in o2) return;
    delete t9.__transition;
  }
  m$1(c, "stop");
}
m$1(yg, "create");
function mi(t9, e) {
  var r = t9.__transition, o2, n2, s = true, a;
  if (r) {
    e = e == null ? null : e + "";
    for (a in r) {
      if ((o2 = r[a]).name !== e) {
        s = false;
        continue;
      }
      n2 = o2.state > Mo && o2.state < Lo, o2.state = ui, o2.timer.stop(), o2.on.call(n2 ? "interrupt" : "cancel", t9, t9.__data__, o2.index, o2.group), delete r[a];
    }
    s && delete t9.__transition;
  }
}
m$1(mi, "default");
function ea(t9) {
  return this.each(function() {
    mi(this, t9);
  });
}
m$1(ea, "default");
function Cg(t9, e) {
  var r, o2;
  return function() {
    var n2 = /* @__PURE__ */ wt(this, t9), s = n2.tween;
    if (s !== r) {
      o2 = r = s;
      for (var a = 0, l = o2.length; a < l; ++a) if (o2[a].name === e) {
        o2 = /* @__PURE__ */ o2.slice(), o2.splice(a, 1);
        break;
      }
    }
    n2.tween = o2;
  };
}
m$1(Cg, "tweenRemove");
function _g(t9, e, r) {
  var o2, n2;
  if (typeof r != "function") throw new Error();
  return function() {
    var s = /* @__PURE__ */ wt(this, t9), a = s.tween;
    if (a !== o2) {
      n2 = /* @__PURE__ */ (o2 = a).slice();
      for (var l = {
        name: e,
        value: r
      }, c = 0, h = n2.length; c < h; ++c) if (n2[c].name === e) {
        n2[c] = l;
        break;
      }
      c === h && n2.push(l);
    }
    s.tween = n2;
  };
}
m$1(_g, "tweenFunction");
function ra(t9, e) {
  var r = this._id;
  if (t9 += "", arguments.length < 2) {
    for (var o2 = mt(/* @__PURE__ */ this.node(), r).tween, n2 = 0, s = o2.length, a; n2 < s; ++n2) if ((a = o2[n2]).name === t9) return a.value;
    return null;
  }
  return this.each(/* @__PURE__ */ (e == null ? Cg : _g)(r, t9, e));
}
m$1(ra, "default");
function Sr(t9, e, r) {
  var o2 = t9._id;
  return t9.each(function() {
    var n2 = /* @__PURE__ */ wt(this, o2);
    (n2.value || (n2.value = {}))[e] = /* @__PURE__ */ r.apply(this, arguments);
  }), function(n2) {
    return mt(n2, o2).value[e];
  };
}
m$1(Sr, "tweenValue");
function pi(t9, e) {
  var r;
  return (typeof e == "number" ? gt : e instanceof Yt ? qe : (r = /* @__PURE__ */ Yt(e)) ? (e = r, qe) : ur)(t9, e);
}
m$1(pi, "default");
function bg(t9) {
  return function() {
    this.removeAttribute(t9);
  };
}
m$1(bg, "attrRemove");
function Tg(t9) {
  return function() {
    this.removeAttributeNS(t9.space, t9.local);
  };
}
m$1(Tg, "attrRemoveNS");
function kg(t9, e, r) {
  var o2, n2 = r + "", s;
  return function() {
    var a = /* @__PURE__ */ this.getAttribute(t9);
    return a === n2 ? null : a === o2 ? s : s = /* @__PURE__ */ e(o2 = a, r);
  };
}
m$1(kg, "attrConstant");
function Sg(t9, e, r) {
  var o2, n2 = r + "", s;
  return function() {
    var a = /* @__PURE__ */ this.getAttributeNS(t9.space, t9.local);
    return a === n2 ? null : a === o2 ? s : s = /* @__PURE__ */ e(o2 = a, r);
  };
}
m$1(Sg, "attrConstantNS");
function vg(t9, e, r) {
  var o2, n2, s;
  return function() {
    var a, l = /* @__PURE__ */ r(this), c;
    return l == null ? void this.removeAttribute(t9) : (a = /* @__PURE__ */ this.getAttribute(t9), c = l + "", a === c ? null : a === o2 && c === n2 ? s : (n2 = c, s = /* @__PURE__ */ e(o2 = a, l)));
  };
}
m$1(vg, "attrFunction");
function wg(t9, e, r) {
  var o2, n2, s;
  return function() {
    var a, l = /* @__PURE__ */ r(this), c;
    return l == null ? void this.removeAttributeNS(t9.space, t9.local) : (a = /* @__PURE__ */ this.getAttributeNS(t9.space, t9.local), c = l + "", a === c ? null : a === o2 && c === n2 ? s : (n2 = c, s = /* @__PURE__ */ e(o2 = a, l)));
  };
}
m$1(wg, "attrFunctionNS");
function ia(t9, e) {
  var r = /* @__PURE__ */ Kt(t9), o2 = r === "transform" ? Cs : pi;
  return this.attrTween(t9, typeof e == "function" ? (r.local ? wg : vg)(r, o2, /* @__PURE__ */ Sr(this, "attr." + t9, e)) : e == null ? (r.local ? Tg : bg)(r) : (r.local ? Sg : kg)(r, o2, e));
}
m$1(ia, "default");
function Bg(t9, e) {
  return function(r) {
    this.setAttribute(t9, /* @__PURE__ */ e.call(this, r));
  };
}
m$1(Bg, "attrInterpolate");
function Fg(t9, e) {
  return function(r) {
    this.setAttributeNS(t9.space, t9.local, /* @__PURE__ */ e.call(this, r));
  };
}
m$1(Fg, "attrInterpolateNS");
function Mg(t9, e) {
  var r, o2;
  function n2() {
    var s = /* @__PURE__ */ e.apply(this, arguments);
    return s !== o2 && (r = (o2 = s) && Fg(t9, s)), r;
  }
  return m$1(n2, "tween"), n2._value = e, n2;
}
m$1(Mg, "attrTweenNS");
function Lg(t9, e) {
  var r, o2;
  function n2() {
    var s = /* @__PURE__ */ e.apply(this, arguments);
    return s !== o2 && (r = (o2 = s) && Bg(t9, s)), r;
  }
  return m$1(n2, "tween"), n2._value = e, n2;
}
m$1(Lg, "attrTween");
function oa(t9, e) {
  var r = "attr." + t9;
  if (arguments.length < 2) return (r = /* @__PURE__ */ this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  var o2 = /* @__PURE__ */ Kt(t9);
  return this.tween(r, /* @__PURE__ */ (o2.local ? Mg : Lg)(o2, e));
}
m$1(oa, "default");
function Ag(t9, e) {
  return function() {
    fi(this, t9).delay = +e.apply(this, arguments);
  };
}
m$1(Ag, "delayFunction");
function Eg(t9, e) {
  return e = +e, function() {
    fi(this, t9).delay = e;
  };
}
m$1(Eg, "delayConstant");
function na(t9) {
  var e = this._id;
  return arguments.length ? this.each(/* @__PURE__ */ (typeof t9 == "function" ? Ag : Eg)(e, t9)) : mt(/* @__PURE__ */ this.node(), e).delay;
}
m$1(na, "default");
function Dg(t9, e) {
  return function() {
    wt(this, t9).duration = +e.apply(this, arguments);
  };
}
m$1(Dg, "durationFunction");
function Og(t9, e) {
  return e = +e, function() {
    wt(this, t9).duration = e;
  };
}
m$1(Og, "durationConstant");
function sa(t9) {
  var e = this._id;
  return arguments.length ? this.each(/* @__PURE__ */ (typeof t9 == "function" ? Dg : Og)(e, t9)) : mt(/* @__PURE__ */ this.node(), e).duration;
}
m$1(sa, "default");
function Ig(t9, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    wt(this, t9).ease = e;
  };
}
m$1(Ig, "easeConstant");
function aa(t9) {
  var e = this._id;
  return arguments.length ? this.each(/* @__PURE__ */ Ig(e, t9)) : mt(/* @__PURE__ */ this.node(), e).ease;
}
m$1(aa, "default");
function Rg(t9, e) {
  return function() {
    var r = /* @__PURE__ */ e.apply(this, arguments);
    if (typeof r != "function") throw new Error();
    wt(this, t9).ease = r;
  };
}
m$1(Rg, "easeVarying");
function la(t9) {
  if (typeof t9 != "function") throw new Error();
  return this.each(/* @__PURE__ */ Rg(this._id, t9));
}
m$1(la, "default");
function ha(t9) {
  typeof t9 != "function" && (t9 = /* @__PURE__ */ nr(t9));
  for (var e = this._groups, r = e.length, o2 = new Array(r), n2 = 0; n2 < r; ++n2) for (var s = e[n2], a = s.length, l = o2[n2] = [], c, h = 0; h < a; ++h) (c = s[h]) && t9.call(c, c.__data__, h, s) && l.push(c);
  return new Dt(o2, this._parents, this._name, this._id);
}
m$1(ha, "default");
function ca(t9) {
  if (t9._id !== this._id) throw new Error();
  for (var e = this._groups, r = t9._groups, o2 = e.length, n2 = r.length, s = /* @__PURE__ */ Math.min(o2, n2), a = new Array(o2), l = 0; l < s; ++l) for (var c = e[l], h = r[l], u = c.length, d = a[l] = new Array(u), f, g = 0; g < u; ++g) (f = c[g] || h[g]) && (d[g] = f);
  for (; l < o2; ++l) a[l] = e[l];
  return new Dt(a, this._parents, this._name, this._id);
}
m$1(ca, "default");
function Ng(t9) {
  return (t9 + "").trim().split(/^|\s+/).every(function(e) {
    var r = /* @__PURE__ */ e.indexOf(".");
    return r >= 0 && (e = /* @__PURE__ */ e.slice(0, r)), !e || e === "start";
  });
}
m$1(Ng, "start");
function qg(t9, e, r) {
  var o2, n2, s = Ng(e) ? fi : wt;
  return function() {
    var a = /* @__PURE__ */ s(this, t9), l = a.on;
    l !== o2 && (n2 = /* @__PURE__ */ (o2 = l).copy()).on(e, r), a.on = n2;
  };
}
m$1(qg, "onFunction");
function ua(t9, e) {
  var r = this._id;
  return arguments.length < 2 ? mt(/* @__PURE__ */ this.node(), r).on.on(t9) : this.each(/* @__PURE__ */ qg(r, t9, e));
}
m$1(ua, "default");
function zg(t9) {
  return function() {
    var e = this.parentNode;
    for (var r in this.__transition) if (+r !== t9) return;
    e && e.removeChild(this);
  };
}
m$1(zg, "removeFunction");
function fa() {
  return this.on("end.remove", /* @__PURE__ */ zg(this._id));
}
m$1(fa, "default");
function ma(t9) {
  var e = this._name, r = this._id;
  typeof t9 != "function" && (t9 = /* @__PURE__ */ Ce(t9));
  for (var o2 = this._groups, n2 = o2.length, s = new Array(n2), a = 0; a < n2; ++a) for (var l = o2[a], c = l.length, h = s[a] = new Array(c), u, d, f = 0; f < c; ++f) (u = l[f]) && (d = /* @__PURE__ */ t9.call(u, u.__data__, f, l)) && ("__data__" in u && (d.__data__ = u.__data__), h[f] = d, me(h[f], e, r, f, h, /* @__PURE__ */ mt(u, r)));
  return new Dt(s, this._parents, e, r);
}
m$1(ma, "default");
function pa(t9) {
  var e = this._name, r = this._id;
  typeof t9 != "function" && (t9 = /* @__PURE__ */ or(t9));
  for (var o2 = this._groups, n2 = o2.length, s = [], a = [], l = 0; l < n2; ++l) for (var c = o2[l], h = c.length, u, d = 0; d < h; ++d) if (u = c[d]) {
    for (var f = /* @__PURE__ */ t9.call(u, u.__data__, d, c), g, T = /* @__PURE__ */ mt(u, r), L = 0, $ = f.length; L < $; ++L) (g = f[L]) && me(g, e, r, L, f, T);
    s.push(f), a.push(u);
  }
  return new Dt(s, a, e, r);
}
m$1(pa, "default");
var Pg = le.prototype.constructor;
function da() {
  return new Pg(this._groups, this._parents);
}
m$1(da, "default");
function $g(t9, e) {
  var r, o2, n2;
  return function() {
    var s = /* @__PURE__ */ _e(this, t9), a = (this.style.removeProperty(t9), _e(this, t9));
    return s === a ? null : s === r && a === o2 ? n2 : n2 = /* @__PURE__ */ e(r = s, o2 = a);
  };
}
m$1($g, "styleNull");
function eu(t9) {
  return function() {
    this.style.removeProperty(t9);
  };
}
m$1(eu, "styleRemove");
function Wg(t9, e, r) {
  var o2, n2 = r + "", s;
  return function() {
    var a = /* @__PURE__ */ _e(this, t9);
    return a === n2 ? null : a === o2 ? s : s = /* @__PURE__ */ e(o2 = a, r);
  };
}
m$1(Wg, "styleConstant");
function Hg(t9, e, r) {
  var o2, n2, s;
  return function() {
    var a = /* @__PURE__ */ _e(this, t9), l = /* @__PURE__ */ r(this), c = l + "";
    return l == null && (c = l = (this.style.removeProperty(t9), _e(this, t9))), a === c ? null : a === o2 && c === n2 ? s : (n2 = c, s = /* @__PURE__ */ e(o2 = a, l));
  };
}
m$1(Hg, "styleFunction");
function Ug(t9, e) {
  var r, o2, n2, s = "style." + e, a = "end." + s, l;
  return function() {
    var c = /* @__PURE__ */ wt(this, t9), h = c.on, u = c.value[s] == null ? l || (l = /* @__PURE__ */ eu(e)) : void 0;
    (h !== r || n2 !== u) && (o2 = /* @__PURE__ */ (r = h).copy()).on(a, n2 = u), c.on = o2;
  };
}
m$1(Ug, "styleMaybeRemove");
function ga(t9, e, r) {
  var o2 = (t9 += "") == "transform" ? ys : pi;
  return e == null ? this.styleTween(t9, /* @__PURE__ */ $g(t9, o2)).on("end.style." + t9, /* @__PURE__ */ eu(t9)) : typeof e == "function" ? this.styleTween(t9, /* @__PURE__ */ Hg(t9, o2, /* @__PURE__ */ Sr(this, "style." + t9, e))).each(/* @__PURE__ */ Ug(this._id, t9)) : this.styleTween(t9, /* @__PURE__ */ Wg(t9, o2, e), r).on("end.style." + t9, null);
}
m$1(ga, "default");
function Yg(t9, e, r) {
  return function(o2) {
    this.style.setProperty(t9, /* @__PURE__ */ e.call(this, o2), r);
  };
}
m$1(Yg, "styleInterpolate");
function Gg(t9, e, r) {
  var o2, n2;
  function s() {
    var a = /* @__PURE__ */ e.apply(this, arguments);
    return a !== n2 && (o2 = (n2 = a) && Yg(t9, a, r)), o2;
  }
  return m$1(s, "tween"), s._value = e, s;
}
m$1(Gg, "styleTween");
function xa(t9, e, r) {
  var o2 = "style." + (t9 += "");
  if (arguments.length < 2) return (o2 = /* @__PURE__ */ this.tween(o2)) && o2._value;
  if (e == null) return this.tween(o2, null);
  if (typeof e != "function") throw new Error();
  return this.tween(o2, /* @__PURE__ */ Gg(t9, e, r ?? ""));
}
m$1(xa, "default");
function Vg(t9) {
  return function() {
    this.textContent = t9;
  };
}
m$1(Vg, "textConstant");
function Xg(t9) {
  return function() {
    var e = /* @__PURE__ */ t9(this);
    this.textContent = e ?? "";
  };
}
m$1(Xg, "textFunction");
function ya(t9) {
  return this.tween("text", typeof t9 == "function" ? Xg(/* @__PURE__ */ Sr(this, "text", t9)) : Vg(t9 == null ? "" : t9 + ""));
}
m$1(ya, "default");
function jg(t9) {
  return function(e) {
    this.textContent = /* @__PURE__ */ t9.call(this, e);
  };
}
m$1(jg, "textInterpolate");
function Zg(t9) {
  var e, r;
  function o2() {
    var n2 = /* @__PURE__ */ t9.apply(this, arguments);
    return n2 !== r && (e = (r = n2) && jg(n2)), e;
  }
  return m$1(o2, "tween"), o2._value = t9, o2;
}
m$1(Zg, "textTween");
function Ca(t9) {
  var e = "text";
  if (arguments.length < 1) return (e = /* @__PURE__ */ this.tween(e)) && e._value;
  if (t9 == null) return this.tween(e, null);
  if (typeof t9 != "function") throw new Error();
  return this.tween(e, /* @__PURE__ */ Zg(t9));
}
m$1(Ca, "default");
function _a() {
  for (var t9 = this._name, e = this._id, r = /* @__PURE__ */ Ao(), o2 = this._groups, n2 = o2.length, s = 0; s < n2; ++s) for (var a = o2[s], l = a.length, c, h = 0; h < l; ++h) if (c = a[h]) {
    var u = /* @__PURE__ */ mt(c, e);
    me(c, t9, r, h, a, {
      time: u.time + u.delay + u.duration,
      delay: 0,
      duration: u.duration,
      ease: u.ease
    });
  }
  return new Dt(o2, this._parents, t9, r);
}
m$1(_a, "default");
function ba() {
  var t9, e, r = this, o2 = r._id, n2 = /* @__PURE__ */ r.size();
  return new Promise(function(s, a) {
    var l = {
      value: a
    }, c = {
      value: /* @__PURE__ */ m$1(function() {
        --n2 === 0 && s();
      }, "value")
    };
    r.each(function() {
      var h = /* @__PURE__ */ wt(this, o2), u = h.on;
      u !== t9 && (e = /* @__PURE__ */ (t9 = u).copy(), e._.cancel.push(l), e._.interrupt.push(l), e._.end.push(c)), h.on = e;
    }), n2 === 0 && s();
  });
}
m$1(ba, "default");
var Kg = 0;
function Dt(t9, e, r, o2) {
  this._groups = t9, this._parents = e, this._name = r, this._id = o2;
}
m$1(Dt, "Transition");
function ru(t9) {
  return le().transition(t9);
}
m$1(ru, "transition");
function Ao() {
  return ++Kg;
}
m$1(Ao, "newId");
var pe = le.prototype;
Dt.prototype = ru.prototype = {
  constructor: Dt,
  select: ma,
  selectAll: pa,
  selectChild: pe.selectChild,
  selectChildren: pe.selectChildren,
  filter: ha,
  merge: ca,
  selection: da,
  transition: _a,
  call: pe.call,
  nodes: pe.nodes,
  node: pe.node,
  size: pe.size,
  empty: pe.empty,
  each: pe.each,
  on: ua,
  attr: ia,
  attrTween: oa,
  style: ga,
  styleTween: xa,
  text: ya,
  textTween: Ca,
  remove: fa,
  tween: ra,
  delay: na,
  duration: sa,
  ease: aa,
  easeVarying: la,
  end: ba,
  [Symbol.iterator]: pe[Symbol.iterator]
};
function Eo(t9) {
  return ((t9 *= 2) <= 1 ? t9 * t9 * t9 : (t9 -= 2) * t9 * t9 + 2) / 2;
}
m$1(Eo, "cubicInOut");
var Qg = {
  time: null,
  delay: 0,
  duration: 250,
  ease: Eo
};
function Jg(t9, e) {
  for (var r; !(r = t9.__transition) || !(r = r[e]); ) if (!(t9 = t9.parentNode)) throw new Error(`transition ${e} not found`);
  return r;
}
m$1(Jg, "inherit");
function Ta(t9) {
  var e, r;
  t9 instanceof Dt ? (e = t9._id, t9 = t9._name) : (e = /* @__PURE__ */ Ao(), (r = Qg).time = /* @__PURE__ */ hi(), t9 = t9 == null ? null : t9 + "");
  for (var o2 = this._groups, n2 = o2.length, s = 0; s < n2; ++s) for (var a = o2[s], l = a.length, c, h = 0; h < l; ++h) (c = a[h]) && me(c, t9, e, h, a, r || Jg(c, e));
  return new Dt(o2, this._parents, t9, e);
}
m$1(Ta, "default");
le.prototype.interrupt = ea;
le.prototype.transition = Ta;
function iu(t9) {
  return [
    +t9[0],
    +t9[1]
  ];
}
m$1(iu, "number1");
function tx(t9) {
  return [
    /* @__PURE__ */ iu(t9[0]),
    /* @__PURE__ */ iu(t9[1])
  ];
}
m$1(tx, "number2");
({
  input: /* @__PURE__ */ m$1(function(t9, e) {
    return t9 == null ? null : [
      [
        +t9[0],
        e[0][1]
      ],
      [
        +t9[1],
        e[1][1]
      ]
    ];
  }, "input"),
  output: /* @__PURE__ */ m$1(function(t9) {
    return t9 && [
      t9[0][0],
      t9[1][0]
    ];
  }, "output")
});
({
  input: /* @__PURE__ */ m$1(function(t9, e) {
    return t9 == null ? null : [
      [
        e[0][0],
        +t9[0]
      ],
      [
        e[1][0],
        +t9[1]
      ]
    ];
  }, "input"),
  output: /* @__PURE__ */ m$1(function(t9) {
    return t9 && [
      t9[0][1],
      t9[1][1]
    ];
  }, "output")
});
({
  input: /* @__PURE__ */ m$1(function(t9) {
    return t9 == null ? null : tx(t9);
  }, "input"),
  output: /* @__PURE__ */ m$1(function(t9) {
    return t9;
  }, "output")
});
function ka(t9) {
  return {
    type: t9
  };
}
m$1(ka, "type");
function Me(t9, e, r) {
  this.k = t9, this.x = e, this.y = r;
}
m$1(Me, "Transform");
Me.prototype = {
  constructor: Me,
  scale: /* @__PURE__ */ m$1(function(t9) {
    return t9 === 1 ? this : new Me(this.k * t9, this.x, this.y);
  }, "scale"),
  translate: /* @__PURE__ */ m$1(function(t9, e) {
    return t9 === 0 & e === 0 ? this : new Me(this.k, this.x + this.k * t9, this.y + this.k * e);
  }, "translate"),
  apply: /* @__PURE__ */ m$1(function(t9) {
    return [
      t9[0] * this.k + this.x,
      t9[1] * this.k + this.y
    ];
  }, "apply"),
  applyX: /* @__PURE__ */ m$1(function(t9) {
    return t9 * this.k + this.x;
  }, "applyX"),
  applyY: /* @__PURE__ */ m$1(function(t9) {
    return t9 * this.k + this.y;
  }, "applyY"),
  invert: /* @__PURE__ */ m$1(function(t9) {
    return [
      (t9[0] - this.x) / this.k,
      (t9[1] - this.y) / this.k
    ];
  }, "invert"),
  invertX: /* @__PURE__ */ m$1(function(t9) {
    return (t9 - this.x) / this.k;
  }, "invertX"),
  invertY: /* @__PURE__ */ m$1(function(t9) {
    return (t9 - this.y) / this.k;
  }, "invertY"),
  rescaleX: /* @__PURE__ */ m$1(function(t9) {
    return t9.copy().domain(/* @__PURE__ */ t9.range().map(this.invertX, this).map(t9.invert, t9));
  }, "rescaleX"),
  rescaleY: /* @__PURE__ */ m$1(function(t9) {
    return t9.copy().domain(/* @__PURE__ */ t9.range().map(this.invertY, this).map(t9.invert, t9));
  }, "rescaleY"),
  toString: /* @__PURE__ */ m$1(function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }, "toString")
};
var Sa = new Me(1, 0, 0);
va.prototype = Me.prototype;
function va(t9) {
  for (; !t9.__zoom; ) if (!(t9 = t9.parentNode)) return Sa;
  return t9.__zoom;
}
m$1(va, "transform");
export {
  Hl as $,
  tg as A,
  Bf as B,
  Cf as C,
  De as D,
  Er as E,
  rg as F,
  eg as G,
  Lc as H,
  Fc as I,
  Jd as J,
  Kd as K,
  Lt as L,
  Mf as M,
  ja as N,
  Fi as O,
  cx as P,
  Qd as Q,
  Rl as R,
  Sf as S,
  Tf as T,
  Uc as U,
  EC as V,
  Wl as W,
  DC as X,
  Yc as Y,
  dc as Z,
  Ul as _,
  ku as a,
  Os as a0,
  ip as a1,
  Vf as a2,
  uo as a3,
  xr as a4,
  fe as a5,
  Wh as a6,
  $h as a7,
  we as a8,
  Ph as a9,
  Va as aA,
  er as aB,
  fx as aC,
  bi as aD,
  oC as aE,
  _C as aF,
  Xa as aG,
  Vr as aH,
  vc as aI,
  hl as aJ,
  Wd as aK,
  fC as aL,
  cn as aM,
  Us as aN,
  zh as aa,
  dr as ab,
  ue as ac,
  pr as ad,
  mr as ae,
  te as af,
  Pe as ag,
  Gf as ah,
  Ya as ai,
  Lf as aj,
  _c as ak,
  Wt as al,
  A as am,
  R as an,
  ux as ao,
  Ar as ap,
  rC as aq,
  iC as ar,
  yl as as,
  nC as at,
  OC as au,
  Ti as av,
  IC as aw,
  eC as ax,
  ye as ay,
  Ou as az,
  bf as b,
  Sc as c,
  dl as d,
  wc as e,
  uC as f,
  gf as g,
  hg as h,
  ag as i,
  sg as j,
  kf as k,
  lg as l,
  mC as m,
  Rc as n,
  go as o,
  ig as p,
  qr as q,
  rh as r,
  se as s,
  tt as t,
  uf as u,
  vf as v,
  wf as w,
  ng as x,
  og as y,
  zl as z
};
