const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-min-mermaid~katex-SWYD7GD6.CzzmMwNd.chunk.js","assets/vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './lib-nodepkg-typedef.BfNI1ZyL.chunk.js';
import { m as m$1, q, n, o } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var Ya = /*#__PURE__*/ n((qo, Po)=>{
    (function(t, e) {
        typeof qo == "object" && typeof Po < "u" ? Po.exports = /*#__PURE__*/ e() : typeof define == "function" && define.amd ? define(e) : (t = typeof globalThis < "u" ? globalThis : t || self).dayjs = /*#__PURE__*/ e();
    })(qo, function() {
        var t = 1e3, e = 6e4, r = 36e5, o = "millisecond", n = "second", s = "minute", a = "hour", l = "day", c = "week", h = "month", u = "quarter", p = "year", f = "date", g = "Invalid Date", T = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, A = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, W = {
            name: "en",
            weekdays: /*#__PURE__*/ "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            months: /*#__PURE__*/ "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            ordinal: /*#__PURE__*/ m$1(function(k) {
                var x = [
                    "th",
                    "st",
                    "nd",
                    "rd"
                ], y = k % 100;
                return "[" + k + (x[(y - 20) % 10] || x[y] || x[0]) + "]";
            }, "ordinal")
        }, q = /*#__PURE__*/ m$1(function(k, x, y) {
            var L = /*#__PURE__*/ String(k);
            return !L || L.length >= x ? k : "" + Array(x + 1 - L.length).join(y) + k;
        }, "m"), G = {
            s: q,
            z: /*#__PURE__*/ m$1(function(k) {
                var x = -k.utcOffset(), y = /*#__PURE__*/ Math.abs(x), L = /*#__PURE__*/ Math.floor(y / 60), S = y % 60;
                return (x <= 0 ? "+" : "-") + q(L, 2, "0") + ":" + q(S, 2, "0");
            }, "z"),
            m: /*#__PURE__*/ m$1(function k(x, y) {
                if (x.date() < y.date()) return -k(y, x);
                var L = 12 * (y.year() - x.year()) + (y.month() - x.month()), S = /*#__PURE__*/ x.clone().add(L, h), z = y - S < 0, I = /*#__PURE__*/ x.clone().add(L + (z ? -1 : 1), h);
                return +(-(L + (y - S) / (z ? S - I : I - S)) || 0);
            }, "t"),
            a: /*#__PURE__*/ m$1(function(k) {
                return k < 0 ? Math.ceil(k) || 0 : Math.floor(k);
            }, "a"),
            p: /*#__PURE__*/ m$1(function(k) {
                return ({
                    M: h,
                    y: p,
                    w: c,
                    d: l,
                    D: f,
                    h: a,
                    m: s,
                    s: n,
                    ms: o,
                    Q: u
                })[k] || String(k || "").toLowerCase().replace(/s$/, "");
            }, "p"),
            u: /*#__PURE__*/ m$1(function(k) {
                return k === void 0;
            }, "u")
        }, O = "en", M = {};
        M[O] = W;
        var P = "$isDayjsObject", w = /*#__PURE__*/ m$1(function(k) {
            return k instanceof it || !(!k || !k[P]);
        }, "S"), X = /*#__PURE__*/ m$1(function k(x, y, L) {
            var S;
            if (!x) return O;
            if (typeof x == "string") {
                var z = /*#__PURE__*/ x.toLowerCase();
                M[z] && (S = z), y && (M[z] = y, S = z);
                var I = /*#__PURE__*/ x.split("-");
                if (!S && I.length > 1) return k(I[0]);
            } else {
                var U = x.name;
                M[U] = x, S = U;
            }
            return !L && S && (O = S), S || !L && O;
        }, "t"), j = /*#__PURE__*/ m$1(function(k, x) {
            if (w(k)) return k.clone();
            var y = typeof x == "object" ? x : {};
            return y.date = k, y.args = arguments, new it(y);
        }, "O"), $ = G;
        $.l = X, $.i = w, $.w = function(k, x) {
            return j(k, {
                locale: x.$L,
                utc: x.$u,
                x: x.$x,
                $offset: x.$offset
            });
        };
        var it = /*#__PURE__*/ function() {
            function k(y) {
                this.$L = /*#__PURE__*/ X(y.locale, null, true), this.parse(y), this.$x = this.$x || y.x || {}, this[P] = true;
            }
            m$1(k, "M");
            var x = k.prototype;
            return x.parse = function(y) {
                this.$d = /*#__PURE__*/ function(L) {
                    var S = L.date, z = L.utc;
                    if (S === null) return new Date(NaN);
                    if ($.u(S)) return new Date;
                    if (S instanceof Date) return new Date(S);
                    if (typeof S == "string" && !/Z$/i.test(S)) {
                        var I = /*#__PURE__*/ S.match(T);
                        if (I) {
                            var U = I[2] - 1 || 0, rt = /*#__PURE__*/ (I[7] || "0").substring(0, 3);
                            return z ? new Date(Date.UTC(I[1], U, I[3] || 1, I[4] || 0, I[5] || 0, I[6] || 0, rt)) : new Date(I[1], U, I[3] || 1, I[4] || 0, I[5] || 0, I[6] || 0, rt);
                        }
                    }
                    return new Date(S);
                }(y), this.init();
            }, x.init = function() {
                var y = this.$d;
                this.$y = /*#__PURE__*/ y.getFullYear(), this.$M = /*#__PURE__*/ y.getMonth(), this.$D = /*#__PURE__*/ y.getDate(), this.$W = /*#__PURE__*/ y.getDay(), this.$H = /*#__PURE__*/ y.getHours(), this.$m = /*#__PURE__*/ y.getMinutes(), this.$s = /*#__PURE__*/ y.getSeconds(), this.$ms = /*#__PURE__*/ y.getMilliseconds();
            }, x.$utils = function() {
                return $;
            }, x.isValid = function() {
                return this.$d.toString() !== g;
            }, x.isSame = function(y, L) {
                var S = /*#__PURE__*/ j(y);
                return this.startOf(L) <= S && S <= this.endOf(L);
            }, x.isAfter = function(y, L) {
                return j(y) < this.startOf(L);
            }, x.isBefore = function(y, L) {
                return this.endOf(L) < j(y);
            }, x.$g = function(y, L, S) {
                return $.u(y) ? this[L] : this.set(S, y);
            }, x.unix = function() {
                return Math.floor(this.valueOf() / 1e3);
            }, x.valueOf = function() {
                return this.$d.getTime();
            }, x.startOf = function(y, L) {
                var S = this, z = !!$.u(L) || L, I = /*#__PURE__*/ $.p(y), U = /*#__PURE__*/ m$1(function(_t, lt) {
                    var v = /*#__PURE__*/ $.w(S.$u ? Date.UTC(S.$y, lt, _t) : new Date(S.$y, lt, _t), S);
                    return z ? v : v.endOf(l);
                }, "l"), rt = /*#__PURE__*/ m$1(function(_t, lt) {
                    return $.w(/*#__PURE__*/ S.toDate()[_t].apply(/*#__PURE__*/ S.toDate("s"), /*#__PURE__*/ (z ? [
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
                }, "$"), Y = this.$W, nt = this.$M, Q = this.$D, Ft = "set" + (this.$u ? "UTC" : "");
                switch(I){
                    case p:
                        return z ? U(1, 0) : U(31, 11);
                    case h:
                        return z ? U(1, nt) : U(0, nt + 1);
                    case c:
                        var Z = this.$locale().weekStart || 0, Ct = (Y < Z ? Y + 7 : Y) - Z;
                        return U(z ? Q - Ct : Q + (6 - Ct), nt);
                    case l:
                    case f:
                        return rt(Ft + "Hours", 0);
                    case a:
                        return rt(Ft + "Minutes", 1);
                    case s:
                        return rt(Ft + "Seconds", 2);
                    case n:
                        return rt(Ft + "Milliseconds", 3);
                    default:
                        return this.clone();
                }
            }, x.endOf = function(y) {
                return this.startOf(y, false);
            }, x.$set = function(y, L) {
                var S, z = /*#__PURE__*/ $.p(y), I = "set" + (this.$u ? "UTC" : ""), U = (S = {}, S[l] = I + "Date", S[f] = I + "Date", S[h] = I + "Month", S[p] = I + "FullYear", S[a] = I + "Hours", S[s] = I + "Minutes", S[n] = I + "Seconds", S[o] = I + "Milliseconds", S)[z], rt = z === l ? this.$D + (L - this.$W) : L;
                if (z === h || z === p) {
                    var Y = /*#__PURE__*/ this.clone().set(f, 1);
                    Y.$d[U](rt), Y.init(), this.$d = Y.set(f, /*#__PURE__*/ Math.min(this.$D, /*#__PURE__*/ Y.daysInMonth())).$d;
                } else U && this.$d[U](rt);
                return this.init(), this;
            }, x.set = function(y, L) {
                return this.clone().$set(y, L);
            }, x.get = function(y) {
                return this[$.p(y)]();
            }, x.add = function(y, L) {
                var S, z = this;
                y = /*#__PURE__*/ Number(y);
                var I = /*#__PURE__*/ $.p(L), U = /*#__PURE__*/ m$1(function(nt) {
                    var Q = /*#__PURE__*/ j(z);
                    return $.w(/*#__PURE__*/ Q.date(Q.date() + Math.round(nt * y)), z);
                }, "y");
                if (I === h) return this.set(h, this.$M + y);
                if (I === p) return this.set(p, this.$y + y);
                if (I === l) return U(1);
                if (I === c) return U(7);
                var rt = (S = {}, S[s] = e, S[a] = r, S[n] = t, S)[I] || 1, Y = this.$d.getTime() + y * rt;
                return $.w(Y, this);
            }, x.subtract = function(y, L) {
                return this.add(-1 * y, L);
            }, x.format = function(y) {
                var L = this, S = /*#__PURE__*/ this.$locale();
                if (!this.isValid()) return S.invalidDate || g;
                var z = y || "YYYY-MM-DDTHH:mm:ssZ", I = /*#__PURE__*/ $.z(this), U = this.$H, rt = this.$m, Y = this.$M, nt = S.weekdays, Q = S.months, Ft = S.meridiem, Z = /*#__PURE__*/ m$1(function(lt, v, H, V) {
                    return lt && (lt[v] || lt(L, z)) || H[v].slice(0, V);
                }, "h"), Ct = /*#__PURE__*/ m$1(function(lt) {
                    return $.s(U % 12 || 12, lt, "0");
                }, "d"), _t = Ft || function(lt, v, H) {
                    var V = lt < 12 ? "AM" : "PM";
                    return H ? V.toLowerCase() : V;
                };
                return z.replace(A, function(lt, v) {
                    return v || function(H) {
                        switch(H){
                            case "YY":
                                return String(L.$y).slice(-2);
                            case "YYYY":
                                return $.s(L.$y, 4, "0");
                            case "M":
                                return Y + 1;
                            case "MM":
                                return $.s(Y + 1, 2, "0");
                            case "MMM":
                                return Z(S.monthsShort, Y, Q, 3);
                            case "MMMM":
                                return Z(Q, Y);
                            case "D":
                                return L.$D;
                            case "DD":
                                return $.s(L.$D, 2, "0");
                            case "d":
                                return String(L.$W);
                            case "dd":
                                return Z(S.weekdaysMin, L.$W, nt, 2);
                            case "ddd":
                                return Z(S.weekdaysShort, L.$W, nt, 3);
                            case "dddd":
                                return nt[L.$W];
                            case "H":
                                return String(U);
                            case "HH":
                                return $.s(U, 2, "0");
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
                                return $.s(rt, 2, "0");
                            case "s":
                                return String(L.$s);
                            case "ss":
                                return $.s(L.$s, 2, "0");
                            case "SSS":
                                return $.s(L.$ms, 3, "0");
                            case "Z":
                                return I;
                        }
                        return null;
                    }(lt) || I.replace(":", "");
                });
            }, x.utcOffset = function() {
                return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
            }, x.diff = function(y, L, S) {
                var z, I = this, U = /*#__PURE__*/ $.p(L), rt = /*#__PURE__*/ j(y), Y = (rt.utcOffset() - this.utcOffset()) * e, nt = this - rt, Q = /*#__PURE__*/ m$1(function() {
                    return $.m(I, rt);
                }, "D");
                switch(U){
                    case p:
                        z = Q() / 12;
                        break;
                    case h:
                        z = /*#__PURE__*/ Q();
                        break;
                    case u:
                        z = Q() / 3;
                        break;
                    case c:
                        z = (nt - Y) / 6048e5;
                        break;
                    case l:
                        z = (nt - Y) / 864e5;
                        break;
                    case a:
                        z = nt / r;
                        break;
                    case s:
                        z = nt / e;
                        break;
                    case n:
                        z = nt / t;
                        break;
                    default:
                        z = nt;
                }
                return S ? z : $.a(z);
            }, x.daysInMonth = function() {
                return this.endOf(h).$D;
            }, x.$locale = function() {
                return M[this.$L];
            }, x.locale = function(y, L) {
                if (!y) return this.$L;
                var S = /*#__PURE__*/ this.clone(), z = /*#__PURE__*/ X(y, L, true);
                return z && (S.$L = z), S;
            }, x.clone = function() {
                return $.w(this.$d, this);
            }, x.toDate = function() {
                return new Date(this.valueOf());
            }, x.toJSON = function() {
                return this.isValid() ? this.toISOString() : null;
            }, x.toISOString = function() {
                return this.$d.toISOString();
            }, x.toString = function() {
                return this.$d.toUTCString();
            }, k;
        }(), B = it.prototype;
        return j.prototype = B, [
            [
                "$ms",
                o
            ],
            [
                "$s",
                n
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
                p
            ],
            [
                "$D",
                f
            ]
        ].forEach(function(k) {
            B[k[1]] = function(x) {
                return this.$g(x, k[0], k[1]);
            };
        }), j.extend = function(k, x) {
            return k.$i || (k(x, it, j), k.$i = true), j;
        }, j.locale = X, j.isDayjs = w, j.unix = function(k) {
            return j(1e3 * k);
        }, j.en = M[O], j.Ls = M, j.p = {}, j;
    });
});
var Ga = /*#__PURE__*/ q(/*#__PURE__*/ Ya());
var ne = {
    trace: 0,
    debug: 1,
    info: 2,
    warn: 3,
    error: 4,
    fatal: 5
}, tt = {
    trace: /*#__PURE__*/ m$1(function() {
        for(var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++){
            t[_key] = arguments[_key];
        }
    }, "trace"),
    debug: /*#__PURE__*/ m$1(function() {
        for(var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++){
            t[_key] = arguments[_key];
        }
    }, "debug"),
    info: /*#__PURE__*/ m$1(function() {
        for(var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++){
            t[_key] = arguments[_key];
        }
    }, "info"),
    warn: /*#__PURE__*/ m$1(function() {
        for(var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++){
            t[_key] = arguments[_key];
        }
    }, "warn"),
    error: /*#__PURE__*/ m$1(function() {
        for(var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++){
            t[_key] = arguments[_key];
        }
    }, "error"),
    fatal: /*#__PURE__*/ m$1(function() {
        for(var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++){
            t[_key] = arguments[_key];
        }
    }, "fatal")
}, Va = /*#__PURE__*/ m$1(function() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "fatal";
    let e = ne.fatal;
    typeof t == "string" ? t.toLowerCase() in ne && (e = ne[t]) : typeof t == "number" && (e = t), tt.trace = ()=>{}, tt.debug = ()=>{}, tt.info = ()=>{}, tt.warn = ()=>{}, tt.error = ()=>{}, tt.fatal = ()=>{}, e <= ne.fatal && (tt.fatal = console.error ? console.error.bind(console, /*#__PURE__*/ Pt("FATAL"), "color: orange") : console.log.bind(console, "\x1B[35m", /*#__PURE__*/ Pt("FATAL"))), e <= ne.error && (tt.error = console.error ? console.error.bind(console, /*#__PURE__*/ Pt("ERROR"), "color: orange") : console.log.bind(console, "\x1B[31m", /*#__PURE__*/ Pt("ERROR"))), e <= ne.warn && (tt.warn = console.warn ? console.warn.bind(console, /*#__PURE__*/ Pt("WARN"), "color: orange") : console.log.bind(console, "\x1B[33m", /*#__PURE__*/ Pt("WARN"))), e <= ne.info && (tt.info = console.info ? console.info.bind(console, /*#__PURE__*/ Pt("INFO"), "color: lightblue") : console.log.bind(console, "\x1B[34m", /*#__PURE__*/ Pt("INFO"))), e <= ne.debug && (tt.debug = console.debug ? console.debug.bind(console, /*#__PURE__*/ Pt("DEBUG"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", /*#__PURE__*/ Pt("DEBUG"))), e <= ne.trace && (tt.trace = console.debug ? console.debug.bind(console, /*#__PURE__*/ Pt("TRACE"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", /*#__PURE__*/ Pt("TRACE")));
}, "setLogLevel"), Pt = /*#__PURE__*/ m$1((t)=>`%c${(0, Ga.default)().format("ss.SSS")} : ${t} : `, "format");
var Xa = /^-{3}\s*[\n\r](.*?)[\n\r]-{3}\s*[\n\r]+/s, ja = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, Za = /\s*%%.*\n/gm;
var bi = class extends Error {
    static #_ = m$1(this, "UnknownDiagramError");
    constructor(e){
        super(e), this.name = "UnknownDiagramError";
    }
};
var Ti = {}, dx = /*#__PURE__*/ m$1(function(t, e) {
    t = /*#__PURE__*/ t.replace(Xa, "").replace(ja, "").replace(Za, `
`);
    for (let [r, { detector: o }] of Object.entries(Ti))if (o(t, e)) return r;
    throw new bi(`No diagram type detected matching given configuration for text: ${t}`);
}, "detectType"), mx = /*#__PURE__*/ m$1(function() {
    for(var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++){
        t[_key] = arguments[_key];
    }
    for (let { id: e, detector: r, loader: o } of t)Wo(e, r, o);
}, "registerLazyLoadedDiagrams"), Wo = /*#__PURE__*/ m$1((t, e, r)=>{
    Ti[t] && tt.warn(`Detector with key ${t} already exists. Overwriting.`), Ti[t] = {
        detector: e,
        loader: r
    }, tt.debug(`Detector with key ${t} added${r ? " with loader" : ""}`);
}, "addDetector"), px = /*#__PURE__*/ m$1((t)=>Ti[t].loader, "getDiagramLoader");
var $o = m$1(function(t, e) {
    let { depth: r = 2, clobber: o = false } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    let n = {
        depth: r,
        clobber: o
    };
    return Array.isArray(e) && !Array.isArray(t) ? (e.forEach((s)=>$o(t, s, n)), t) : Array.isArray(e) && Array.isArray(t) ? (e.forEach((s)=>{
        t.includes(s) || t.push(s);
    }), t) : t === void 0 || r <= 0 ? t != null && typeof t == "object" && typeof e == "object" ? Object.assign(t, e) : e : (e !== void 0 && typeof t == "object" && typeof e == "object" && Object.keys(e).forEach((s)=>{
        typeof e[s] == "object" && (t[s] === void 0 || typeof t[s] == "object") ? (t[s] === void 0 && (t[s] = Array.isArray(e[s]) ? [] : {}), t[s] = /*#__PURE__*/ $o(t[s], e[s], {
            depth: r - 1,
            clobber: o
        })) : (o || typeof t[s] != "object" && typeof e[s] != "object") && (t[s] = e[s]);
    }), t);
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
        r: /*#__PURE__*/ m$1((t)=>t >= 255 ? 255 : t < 0 ? 0 : t, "r"),
        g: /*#__PURE__*/ m$1((t)=>t >= 255 ? 255 : t < 0 ? 0 : t, "g"),
        b: /*#__PURE__*/ m$1((t)=>t >= 255 ? 255 : t < 0 ? 0 : t, "b"),
        h: /*#__PURE__*/ m$1((t)=>t % 360, "h"),
        s: /*#__PURE__*/ m$1((t)=>t >= 100 ? 100 : t < 0 ? 0 : t, "s"),
        l: /*#__PURE__*/ m$1((t)=>t >= 100 ? 100 : t < 0 ? 0 : t, "l"),
        a: /*#__PURE__*/ m$1((t)=>t >= 1 ? 1 : t < 0 ? 0 : t, "a")
    },
    toLinear: /*#__PURE__*/ m$1((t)=>{
        let e = t / 255;
        return t > .03928 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92;
    }, "toLinear"),
    hue2rgb: /*#__PURE__*/ m$1((t, e, r)=>(r < 0 && (r += 1), r > 1 && (r -= 1), r < .16666666666666666 ? t + (e - t) * 6 * r : r < .5 ? e : r < .6666666666666666 ? t + (e - t) * (.6666666666666666 - r) * 6 : t), "hue2rgb"),
    hsl2rgb: /*#__PURE__*/ m$1((param, o)=>{
        let { h: t, s: e, l: r } = param;
        if (!e) return r * 2.55;
        t /= 360, e /= 100, r /= 100;
        let n = r < .5 ? r * (1 + e) : r + e - r * e, s = 2 * r - n;
        switch(o){
            case "r":
                return ki.hue2rgb(s, n, t + .3333333333333333) * 255;
            case "g":
                return ki.hue2rgb(s, n, t) * 255;
            case "b":
                return ki.hue2rgb(s, n, t - .3333333333333333) * 255;
        }
    }, "hsl2rgb"),
    rgb2hsl: /*#__PURE__*/ m$1((param, o)=>{
        let { r: t, g: e, b: r } = param;
        t /= 255, e /= 255, r /= 255;
        let n = /*#__PURE__*/ Math.max(t, e, r), s = /*#__PURE__*/ Math.min(t, e, r), a = (n + s) / 2;
        if (o === "l") return a * 100;
        if (n === s) return 0;
        let l = n - s, c = a > .5 ? l / (2 - n - s) : l / (n + s);
        if (o === "s") return c * 100;
        switch(n){
            case t:
                return ((e - r) / l + (e < r ? 6 : 0)) * 60;
            case e:
                return ((r - t) / l + 2) * 60;
            case r:
                return ((t - e) / l + 4) * 60;
            default:
                return -1;
        }
    }, "rgb2hsl")
}, Ka = ki;
var gu = {
    clamp: /*#__PURE__*/ m$1((t, e, r)=>e > r ? Math.min(e, /*#__PURE__*/ Math.max(r, t)) : Math.min(r, /*#__PURE__*/ Math.max(e, t)), "clamp"),
    round: /*#__PURE__*/ m$1((t)=>Math.round(t * 1e10) / 1e10, "round")
}, Qa = gu;
var xu = {
    dec2hex: /*#__PURE__*/ m$1((t)=>{
        let e = /*#__PURE__*/ Math.round(t).toString(16);
        return e.length > 1 ? e : `0${e}`;
    }, "dec2hex")
}, Ja = xu;
var yu = {
    channel: Ka,
    lang: Qa,
    unit: Ja
}, R = yu;
var se = {};
for(let t = 0; t <= 255; t++)se[t] = /*#__PURE__*/ R.unit.dec2hex(t);
var ut = {
    ALL: 0,
    RGB: 1,
    HSL: 2
};
var Ho = class {
    static #_ = m$1(this, "Type");
    constructor(){
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
}, tl = Ho;
var Uo = class {
    static #_ = m$1(this, "Channels");
    constructor(e, r){
        this.color = r, this.changed = false, this.data = e, this.type = new tl;
    }
    set(e, r) {
        return this.color = r, this.changed = false, this.data = e, this.type.type = ut.ALL, this;
    }
    _ensureHSL() {
        let e = this.data, { h: r, s: o, l: n } = e;
        r === void 0 && (e.h = /*#__PURE__*/ R.channel.rgb2hsl(e, "h")), o === void 0 && (e.s = /*#__PURE__*/ R.channel.rgb2hsl(e, "s")), n === void 0 && (e.l = /*#__PURE__*/ R.channel.rgb2hsl(e, "l"));
    }
    _ensureRGB() {
        let e = this.data, { r, g: o, b: n } = e;
        r === void 0 && (e.r = /*#__PURE__*/ R.channel.hsl2rgb(e, "r")), o === void 0 && (e.g = /*#__PURE__*/ R.channel.hsl2rgb(e, "g")), n === void 0 && (e.b = /*#__PURE__*/ R.channel.hsl2rgb(e, "b"));
    }
    get r() {
        let e = this.data, r = e.r;
        return !this.type.is(ut.HSL) && r !== void 0 ? r : (this._ensureHSL(), R.channel.hsl2rgb(e, "r"));
    }
    get g() {
        let e = this.data, r = e.g;
        return !this.type.is(ut.HSL) && r !== void 0 ? r : (this._ensureHSL(), R.channel.hsl2rgb(e, "g"));
    }
    get b() {
        let e = this.data, r = e.b;
        return !this.type.is(ut.HSL) && r !== void 0 ? r : (this._ensureHSL(), R.channel.hsl2rgb(e, "b"));
    }
    get h() {
        let e = this.data, r = e.h;
        return !this.type.is(ut.RGB) && r !== void 0 ? r : (this._ensureRGB(), R.channel.rgb2hsl(e, "h"));
    }
    get s() {
        let e = this.data, r = e.s;
        return !this.type.is(ut.RGB) && r !== void 0 ? r : (this._ensureRGB(), R.channel.rgb2hsl(e, "s"));
    }
    get l() {
        let e = this.data, r = e.l;
        return !this.type.is(ut.RGB) && r !== void 0 ? r : (this._ensureRGB(), R.channel.rgb2hsl(e, "l"));
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
}, el = Uo;
var Cu = new el({
    r: 0,
    g: 0,
    b: 0,
    a: 0
}, "transparent"), pe = Cu;
var rl = {
    re: /^#((?:[a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i,
    parse: /*#__PURE__*/ m$1((t)=>{
        if (t.charCodeAt(0) !== 35) return;
        let e = /*#__PURE__*/ t.match(rl.re);
        if (!e) return;
        let r = e[1], o = /*#__PURE__*/ parseInt(r, 16), n = r.length, s = n % 4 === 0, a = n > 4, l = a ? 1 : 17, c = a ? 8 : 4, h = s ? 0 : -1, u = a ? 255 : 15;
        return pe.set({
            r: (o >> c * (h + 3) & u) * l,
            g: (o >> c * (h + 2) & u) * l,
            b: (o >> c * (h + 1) & u) * l,
            a: s ? (o & u) * l / 255 : 1
        }, t);
    }, "parse"),
    stringify: /*#__PURE__*/ m$1((t)=>{
        let { r: e, g: r, b: o, a: n } = t;
        return n < 1 ? `#${se[Math.round(e)]}${se[Math.round(r)]}${se[Math.round(o)]}${se[Math.round(n * 255)]}` : `#${se[Math.round(e)]}${se[Math.round(r)]}${se[Math.round(o)]}`;
    }, "stringify")
}, Ae = rl;
var Si = {
    re: /^hsla?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(?:deg|grad|rad|turn)?)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(%)?))?\s*?\)$/i,
    hueRe: /^(.+?)(deg|grad|rad|turn)$/i,
    _hue2deg: /*#__PURE__*/ m$1((t)=>{
        let e = /*#__PURE__*/ t.match(Si.hueRe);
        if (e) {
            let [, r, o] = e;
            switch(o){
                case "grad":
                    return R.channel.clamp.h(parseFloat(r) * .9);
                case "rad":
                    return R.channel.clamp.h(parseFloat(r) * 180 / Math.PI);
                case "turn":
                    return R.channel.clamp.h(parseFloat(r) * 360);
            }
        }
        return R.channel.clamp.h(/*#__PURE__*/ parseFloat(t));
    }, "_hue2deg"),
    parse: /*#__PURE__*/ m$1((t)=>{
        let e = /*#__PURE__*/ t.charCodeAt(0);
        if (e !== 104 && e !== 72) return;
        let r = /*#__PURE__*/ t.match(Si.re);
        if (!r) return;
        let [, o, n, s, a, l] = r;
        return pe.set({
            h: /*#__PURE__*/ Si._hue2deg(o),
            s: /*#__PURE__*/ R.channel.clamp.s(/*#__PURE__*/ parseFloat(n)),
            l: /*#__PURE__*/ R.channel.clamp.l(/*#__PURE__*/ parseFloat(s)),
            a: a ? R.channel.clamp.a(l ? parseFloat(a) / 100 : parseFloat(a)) : 1
        }, t);
    }, "parse"),
    stringify: /*#__PURE__*/ m$1((t)=>{
        let { h: e, s: r, l: o, a: n } = t;
        return n < 1 ? `hsla(${R.lang.round(e)}, ${R.lang.round(r)}%, ${R.lang.round(o)}%, ${n})` : `hsl(${R.lang.round(e)}, ${R.lang.round(r)}%, ${R.lang.round(o)}%)`;
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
    parse: /*#__PURE__*/ m$1((t)=>{
        t = /*#__PURE__*/ t.toLowerCase();
        let e = vi.colors[t];
        if (e) return Ae.parse(e);
    }, "parse"),
    stringify: /*#__PURE__*/ m$1((t)=>{
        let e = /*#__PURE__*/ Ae.stringify(t);
        for(let r in vi.colors)if (vi.colors[r] === e) return r;
    }, "stringify")
}, Yo = vi;
var il = {
    re: /^rgba?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?)))?\s*?\)$/i,
    parse: /*#__PURE__*/ m$1((t)=>{
        let e = /*#__PURE__*/ t.charCodeAt(0);
        if (e !== 114 && e !== 82) return;
        let r = /*#__PURE__*/ t.match(il.re);
        if (!r) return;
        let [, o, n, s, a, l, c, h, u] = r;
        return pe.set({
            r: /*#__PURE__*/ R.channel.clamp.r(n ? parseFloat(o) * 2.55 : parseFloat(o)),
            g: /*#__PURE__*/ R.channel.clamp.g(a ? parseFloat(s) * 2.55 : parseFloat(s)),
            b: /*#__PURE__*/ R.channel.clamp.b(c ? parseFloat(l) * 2.55 : parseFloat(l)),
            a: h ? R.channel.clamp.a(u ? parseFloat(h) / 100 : parseFloat(h)) : 1
        }, t);
    }, "parse"),
    stringify: /*#__PURE__*/ m$1((t)=>{
        let { r: e, g: r, b: o, a: n } = t;
        return n < 1 ? `rgba(${R.lang.round(e)}, ${R.lang.round(r)}, ${R.lang.round(o)}, ${R.lang.round(n)})` : `rgb(${R.lang.round(e)}, ${R.lang.round(r)}, ${R.lang.round(o)})`;
    }, "stringify")
}, Mr = il;
var _u = {
    format: {
        keyword: Yo,
        hex: Ae,
        rgb: Mr,
        rgba: Mr,
        hsl: Fr,
        hsla: Fr
    },
    parse: /*#__PURE__*/ m$1((t)=>{
        if (typeof t != "string") return t;
        let e = Ae.parse(t) || Mr.parse(t) || Fr.parse(t) || Yo.parse(t);
        if (e) return e;
        throw new Error(`Unsupported color format: "${t}"`);
    }, "parse"),
    stringify: /*#__PURE__*/ m$1((t)=>!t.changed && t.color ? t.color : t.type.is(ut.HSL) || t.data.r === void 0 ? Fr.stringify(t) : t.a < 1 || !Number.isInteger(t.r) || !Number.isInteger(t.g) || !Number.isInteger(t.b) ? Mr.stringify(t) : Ae.stringify(t), "stringify")
}, ft = _u;
var bu = /*#__PURE__*/ m$1((t, e)=>{
    let r = /*#__PURE__*/ ft.parse(t);
    for(let o in e)r[o] = /*#__PURE__*/ R.channel.clamp[o](e[o]);
    return ft.stringify(r);
}, "change"), wi = bu;
var Tu = /*#__PURE__*/ m$1(function(t, e) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
    if (typeof t != "number") return wi(t, {
        a: e
    });
    let n = /*#__PURE__*/ pe.set({
        r: /*#__PURE__*/ R.channel.clamp.r(t),
        g: /*#__PURE__*/ R.channel.clamp.g(e),
        b: /*#__PURE__*/ R.channel.clamp.b(r),
        a: /*#__PURE__*/ R.channel.clamp.a(o)
    });
    return ft.stringify(n);
}, "rgba"), ae = Tu;
var ku = /*#__PURE__*/ m$1((t, e)=>R.lang.round(ft.parse(t)[e]), "channel"), Su = ku;
var vu = /*#__PURE__*/ m$1((t)=>{
    let { r: e, g: r, b: o } = ft.parse(t), n = .2126 * R.channel.toLinear(e) + .7152 * R.channel.toLinear(r) + .0722 * R.channel.toLinear(o);
    return R.lang.round(n);
}, "luminance"), ol = vu;
var wu = /*#__PURE__*/ m$1((t)=>ol(t) >= .5, "isLight"), nl = wu;
var Bu = /*#__PURE__*/ m$1((t)=>!nl(t), "isDark"), $t = Bu;
var Fu = /*#__PURE__*/ m$1((t, e, r)=>{
    let o = /*#__PURE__*/ ft.parse(t), n = o[e], s = /*#__PURE__*/ R.channel.clamp[e](n + r);
    return n !== s && (o[e] = s), ft.stringify(o);
}, "adjustChannel"), Bi = Fu;
var Mu = /*#__PURE__*/ m$1((t, e)=>Bi(t, "l", e), "lighten"), F = Mu;
var Lu = /*#__PURE__*/ m$1((t, e)=>Bi(t, "l", -e), "darken"), E = Lu;
var Au = /*#__PURE__*/ m$1((t, e)=>{
    let r = /*#__PURE__*/ ft.parse(t), o = {};
    for(let n in e)e[n] && (o[n] = r[n] + e[n]);
    return wi(t, o);
}, "adjust"), m = Au;
var Eu = /*#__PURE__*/ m$1(function(t, e) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 50;
    let { r: o, g: n, b: s, a } = ft.parse(t), { r: l, g: c, b: h, a: u } = ft.parse(e), p = r / 100, f = p * 2 - 1, g = a - u, A = ((f * g === -1 ? f : (f + g) / (1 + f * g)) + 1) / 2, W = 1 - A, q = o * A + l * W, G = n * A + c * W, O = s * A + h * W, M = a * p + u * (1 - p);
    return ae(q, G, O, M);
}, "mix"), sl = Eu;
var Ou = /*#__PURE__*/ m$1(function(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    let r = /*#__PURE__*/ ft.parse(t);
    return r.r = 255 - r.r, r.g = 255 - r.g, r.b = 255 - r.b, sl(r, t, e);
}, "invert"), b = Ou;
var ge = "#ffffff", xe = "#f2f2f2";
var ct = /*#__PURE__*/ m$1((t, e)=>e ? m(t, {
        s: -40,
        l: 10
    }) : m(t, {
        s: -40,
        l: -10
    }), "mkBorder");
var Go = class {
    static #_ = m$1(this, "Theme");
    constructor(){
        this.background = "#f4f4f4", this.primaryColor = "#fff4dd", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#333", this.THEME_COLOR_LIMIT = 12, this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px";
    }
    updateColors() {
        if (this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333"), this.secondaryColor = this.secondaryColor || m(this.primaryColor, {
            h: -120
        }), this.tertiaryColor = this.tertiaryColor || m(this.primaryColor, {
            h: 180,
            l: 5
        }), this.primaryBorderColor = this.primaryBorderColor || ct(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || ct(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || ct(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || ct(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#333", this.secondaryTextColor = this.secondaryTextColor || b(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || b(this.tertiaryColor), this.lineColor = this.lineColor || b(this.background), this.arrowheadColor = this.arrowheadColor || b(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? E(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || E(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || b(this.lineColor), this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || F(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.darkMode ? (this.rowOdd = this.rowOdd || E(this.mainBkg, 5) || "#ffffff", this.rowEven = this.rowEven || E(this.mainBkg, 10)) : (this.rowOdd = this.rowOdd || F(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || F(this.mainBkg, 5)), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || this.tertiaryColor, this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || m(this.primaryColor, {
            h: 30
        }), this.cScale4 = this.cScale4 || m(this.primaryColor, {
            h: 60
        }), this.cScale5 = this.cScale5 || m(this.primaryColor, {
            h: 90
        }), this.cScale6 = this.cScale6 || m(this.primaryColor, {
            h: 120
        }), this.cScale7 = this.cScale7 || m(this.primaryColor, {
            h: 150
        }), this.cScale8 = this.cScale8 || m(this.primaryColor, {
            h: 210,
            l: 150
        }), this.cScale9 = this.cScale9 || m(this.primaryColor, {
            h: 270
        }), this.cScale10 = this.cScale10 || m(this.primaryColor, {
            h: 300
        }), this.cScale11 = this.cScale11 || m(this.primaryColor, {
            h: 330
        }), this.darkMode) for(let r = 0; r < this.THEME_COLOR_LIMIT; r++)this["cScale" + r] = /*#__PURE__*/ E(this["cScale" + r], 75);
        else for(let r = 0; r < this.THEME_COLOR_LIMIT; r++)this["cScale" + r] = /*#__PURE__*/ E(this["cScale" + r], 25);
        for(let r = 0; r < this.THEME_COLOR_LIMIT; r++)this["cScaleInv" + r] = this["cScaleInv" + r] || b(this["cScale" + r]);
        for(let r = 0; r < this.THEME_COLOR_LIMIT; r++)this.darkMode ? this["cScalePeer" + r] = this["cScalePeer" + r] || F(this["cScale" + r], 10) : this["cScalePeer" + r] = this["cScalePeer" + r] || E(this["cScale" + r], 10);
        this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
        for(let r = 0; r < this.THEME_COLOR_LIMIT; r++)this["cScaleLabel" + r] = this["cScaleLabel" + r] || this.scaleLabelColor;
        let e = this.darkMode ? -4 : -1;
        for(let r = 0; r < 5; r++)this["surface" + r] = this["surface" + r] || m(this.mainBkg, {
            h: 180,
            s: -15,
            l: e * (5 + r * 3)
        }), this["surfacePeer" + r] = this["surfacePeer" + r] || m(this.mainBkg, {
            h: 180,
            s: -15,
            l: e * (8 + r * 3)
        });
        this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || m(this.primaryColor, {
            h: 64
        }), this.fillType3 = this.fillType3 || m(this.secondaryColor, {
            h: 64
        }), this.fillType4 = this.fillType4 || m(this.primaryColor, {
            h: -64
        }), this.fillType5 = this.fillType5 || m(this.secondaryColor, {
            h: -64
        }), this.fillType6 = this.fillType6 || m(this.primaryColor, {
            h: 128
        }), this.fillType7 = this.fillType7 || m(this.secondaryColor, {
            h: 128
        }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || m(this.primaryColor, {
            l: -10
        }), this.pie5 = this.pie5 || m(this.secondaryColor, {
            l: -10
        }), this.pie6 = this.pie6 || m(this.tertiaryColor, {
            l: -10
        }), this.pie7 = this.pie7 || m(this.primaryColor, {
            h: 60,
            l: -10
        }), this.pie8 = this.pie8 || m(this.primaryColor, {
            h: -60,
            l: -10
        }), this.pie9 = this.pie9 || m(this.primaryColor, {
            h: 120,
            l: 0
        }), this.pie10 = this.pie10 || m(this.primaryColor, {
            h: 60,
            l: -20
        }), this.pie11 = this.pie11 || m(this.primaryColor, {
            h: -60,
            l: -20
        }), this.pie12 = this.pie12 || m(this.primaryColor, {
            h: 120,
            l: -10
        }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.radar = {
            axisColor: this.radar?.axisColor || this.lineColor,
            axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
            axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
            curveOpacity: this.radar?.curveOpacity || .5,
            curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
            graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
            graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
            graticuleOpacity: this.radar?.graticuleOpacity || .3,
            legendBoxSize: this.radar?.legendBoxSize || 12,
            legendFontSize: this.radar?.legendFontSize || 12
        }, this.archEdgeColor = this.archEdgeColor || "#777", this.archEdgeArrowColor = this.archEdgeArrowColor || "#777", this.archEdgeWidth = this.archEdgeWidth || "3", this.archGroupBorderColor = this.archGroupBorderColor || "#000", this.archGroupBorderWidth = this.archGroupBorderWidth || "2px", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || m(this.primaryColor, {
            r: 5,
            g: 5,
            b: 5
        }), this.quadrant3Fill = this.quadrant3Fill || m(this.primaryColor, {
            r: 10,
            g: 10,
            b: 10
        }), this.quadrant4Fill = this.quadrant4Fill || m(this.primaryColor, {
            r: 15,
            g: 15,
            b: 15
        }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || m(this.primaryTextColor, {
            r: -5,
            g: -5,
            b: -5
        }), this.quadrant3TextFill = this.quadrant3TextFill || m(this.primaryTextColor, {
            r: -10,
            g: -10,
            b: -10
        }), this.quadrant4TextFill = this.quadrant4TextFill || m(this.primaryTextColor, {
            r: -15,
            g: -15,
            b: -15
        }), this.quadrantPointFill = this.quadrantPointFill || $t(this.quadrant1Fill) ? F(this.quadrant1Fill) : E(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
            backgroundColor: this.xyChart?.backgroundColor || this.background,
            titleColor: this.xyChart?.titleColor || this.primaryTextColor,
            xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
            xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
            xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
            xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
            yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
            yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
            yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
            yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
            plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
        }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? E(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || m(this.primaryColor, {
            h: -30
        }), this.git4 = this.git4 || m(this.primaryColor, {
            h: -60
        }), this.git5 = this.git5 || m(this.primaryColor, {
            h: -90
        }), this.git6 = this.git6 || m(this.primaryColor, {
            h: 60
        }), this.git7 = this.git7 || m(this.primaryColor, {
            h: 120
        }), this.darkMode ? (this.git0 = /*#__PURE__*/ F(this.git0, 25), this.git1 = /*#__PURE__*/ F(this.git1, 25), this.git2 = /*#__PURE__*/ F(this.git2, 25), this.git3 = /*#__PURE__*/ F(this.git3, 25), this.git4 = /*#__PURE__*/ F(this.git4, 25), this.git5 = /*#__PURE__*/ F(this.git5, 25), this.git6 = /*#__PURE__*/ F(this.git6, 25), this.git7 = /*#__PURE__*/ F(this.git7, 25)) : (this.git0 = /*#__PURE__*/ E(this.git0, 25), this.git1 = /*#__PURE__*/ E(this.git1, 25), this.git2 = /*#__PURE__*/ E(this.git2, 25), this.git3 = /*#__PURE__*/ E(this.git3, 25), this.git4 = /*#__PURE__*/ E(this.git4, 25), this.git5 = /*#__PURE__*/ E(this.git5, 25), this.git6 = /*#__PURE__*/ E(this.git6, 25), this.git7 = /*#__PURE__*/ E(this.git7, 25)), this.gitInv0 = this.gitInv0 || b(this.git0), this.gitInv1 = this.gitInv1 || b(this.git1), this.gitInv2 = this.gitInv2 || b(this.git2), this.gitInv3 = this.gitInv3 || b(this.git3), this.gitInv4 = this.gitInv4 || b(this.git4), this.gitInv5 = this.gitInv5 || b(this.git5), this.gitInv6 = this.gitInv6 || b(this.git6), this.gitInv7 = this.gitInv7 || b(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || ge, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || xe;
    }
    calculate(e) {
        if (typeof e != "object") {
            this.updateColors();
            return;
        }
        let r = /*#__PURE__*/ Object.keys(e);
        r.forEach((o)=>{
            this[o] = e[o];
        }), this.updateColors(), r.forEach((o)=>{
            this[o] = e[o];
        });
    }
}, al = /*#__PURE__*/ m$1((t)=>{
    let e = new Go;
    return e.calculate(t), e;
}, "getThemeVariables");
var Vo = class {
    static #_ = m$1(this, "Theme");
    constructor(){
        this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = /*#__PURE__*/ F(this.primaryColor, 16), this.tertiaryColor = /*#__PURE__*/ m(this.primaryColor, {
            h: -160
        }), this.primaryBorderColor = /*#__PURE__*/ b(this.background), this.secondaryBorderColor = /*#__PURE__*/ ct(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = /*#__PURE__*/ ct(this.tertiaryColor, this.darkMode), this.primaryTextColor = /*#__PURE__*/ b(this.primaryColor), this.secondaryTextColor = /*#__PURE__*/ b(this.secondaryColor), this.tertiaryTextColor = /*#__PURE__*/ b(this.tertiaryColor), this.lineColor = /*#__PURE__*/ b(this.background), this.textColor = /*#__PURE__*/ b(this.background), this.mainBkg = "#1f2020", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = /*#__PURE__*/ F(/*#__PURE__*/ b("#323D47"), 10), this.lineColor = "calculated", this.border1 = "#ccc", this.border2 = /*#__PURE__*/ ae(255, 255, 255, .25), this.arrowheadColor = "calculated", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "#181818", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#F9FFFE", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "calculated", this.activationBkgColor = "calculated", this.sequenceNumberColor = "black", this.sectionBkgColor = /*#__PURE__*/ E("#EAE8D9", 30), this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "#EAE8D9", this.excludeBkgColor = /*#__PURE__*/ E(this.sectionBkgColor, 10), this.taskBorderColor = /*#__PURE__*/ ae(255, 255, 255, 70), this.taskBkgColor = "calculated", this.taskTextColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = /*#__PURE__*/ ae(255, 255, 255, 50), this.activeTaskBkgColor = "#81B1DB", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "grey", this.critBorderColor = "#E83737", this.critBkgColor = "#E83737", this.taskTextDarkColor = "calculated", this.todayLineColor = "#DB5757", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = this.rowOdd || F(this.mainBkg, 5) || "#ffffff", this.rowEven = this.rowEven || E(this.mainBkg, 10), this.labelColor = "calculated", this.errorBkgColor = "#a44141", this.errorTextColor = "#ddd";
    }
    updateColors() {
        this.secondBkg = /*#__PURE__*/ F(this.mainBkg, 16), this.lineColor = this.mainContrastColor, this.arrowheadColor = this.mainContrastColor, this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.edgeLabelBackground = /*#__PURE__*/ F(this.labelBackground, 25), this.actorBorder = this.border1, this.actorBkg = this.mainBkg, this.actorTextColor = this.mainContrastColor, this.actorLineColor = this.actorBorder, this.signalColor = this.mainContrastColor, this.signalTextColor = this.mainContrastColor, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.mainContrastColor, this.loopTextColor = this.mainContrastColor, this.noteBorderColor = this.secondaryBorderColor, this.noteBkgColor = this.secondBkg, this.noteTextColor = this.secondaryTextColor, this.activationBorderColor = this.border1, this.activationBkgColor = this.secondBkg, this.altSectionBkgColor = this.background, this.taskBkgColor = /*#__PURE__*/ F(this.mainBkg, 23), this.taskTextColor = this.darkTextColor, this.taskTextLightColor = this.mainContrastColor, this.taskTextOutsideColor = this.taskTextLightColor, this.gridColor = this.mainContrastColor, this.doneTaskBkgColor = this.mainContrastColor, this.taskTextDarkColor = this.darkTextColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#555", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#f4f4f4", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = /*#__PURE__*/ m(this.primaryColor, {
            h: 64
        }), this.fillType3 = /*#__PURE__*/ m(this.secondaryColor, {
            h: 64
        }), this.fillType4 = /*#__PURE__*/ m(this.primaryColor, {
            h: -64
        }), this.fillType5 = /*#__PURE__*/ m(this.secondaryColor, {
            h: -64
        }), this.fillType6 = /*#__PURE__*/ m(this.primaryColor, {
            h: 128
        }), this.fillType7 = /*#__PURE__*/ m(this.secondaryColor, {
            h: 128
        }), this.cScale1 = this.cScale1 || "#0b0000", this.cScale2 = this.cScale2 || "#4d1037", this.cScale3 = this.cScale3 || "#3f5258", this.cScale4 = this.cScale4 || "#4f2f1b", this.cScale5 = this.cScale5 || "#6e0a0a", this.cScale6 = this.cScale6 || "#3b0048", this.cScale7 = this.cScale7 || "#995a01", this.cScale8 = this.cScale8 || "#154706", this.cScale9 = this.cScale9 || "#161722", this.cScale10 = this.cScale10 || "#00296f", this.cScale11 = this.cScale11 || "#01629c", this.cScale12 = this.cScale12 || "#010029", this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || m(this.primaryColor, {
            h: 30
        }), this.cScale4 = this.cScale4 || m(this.primaryColor, {
            h: 60
        }), this.cScale5 = this.cScale5 || m(this.primaryColor, {
            h: 90
        }), this.cScale6 = this.cScale6 || m(this.primaryColor, {
            h: 120
        }), this.cScale7 = this.cScale7 || m(this.primaryColor, {
            h: 150
        }), this.cScale8 = this.cScale8 || m(this.primaryColor, {
            h: 210
        }), this.cScale9 = this.cScale9 || m(this.primaryColor, {
            h: 270
        }), this.cScale10 = this.cScale10 || m(this.primaryColor, {
            h: 300
        }), this.cScale11 = this.cScale11 || m(this.primaryColor, {
            h: 330
        });
        for(let e = 0; e < this.THEME_COLOR_LIMIT; e++)this["cScaleInv" + e] = this["cScaleInv" + e] || b(this["cScale" + e]);
        for(let e = 0; e < this.THEME_COLOR_LIMIT; e++)this["cScalePeer" + e] = this["cScalePeer" + e] || F(this["cScale" + e], 10);
        for(let e = 0; e < 5; e++)this["surface" + e] = this["surface" + e] || m(this.mainBkg, {
            h: 30,
            s: -30,
            l: -(-10 + e * 4)
        }), this["surfacePeer" + e] = this["surfacePeer" + e] || m(this.mainBkg, {
            h: 30,
            s: -30,
            l: -(-7 + e * 4)
        });
        this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor);
        for(let e = 0; e < this.THEME_COLOR_LIMIT; e++)this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.scaleLabelColor;
        for(let e = 0; e < this.THEME_COLOR_LIMIT; e++)this["pie" + e] = this["cScale" + e];
        this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || m(this.primaryColor, {
            r: 5,
            g: 5,
            b: 5
        }), this.quadrant3Fill = this.quadrant3Fill || m(this.primaryColor, {
            r: 10,
            g: 10,
            b: 10
        }), this.quadrant4Fill = this.quadrant4Fill || m(this.primaryColor, {
            r: 15,
            g: 15,
            b: 15
        }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || m(this.primaryTextColor, {
            r: -5,
            g: -5,
            b: -5
        }), this.quadrant3TextFill = this.quadrant3TextFill || m(this.primaryTextColor, {
            r: -10,
            g: -10,
            b: -10
        }), this.quadrant4TextFill = this.quadrant4TextFill || m(this.primaryTextColor, {
            r: -15,
            g: -15,
            b: -15
        }), this.quadrantPointFill = this.quadrantPointFill || $t(this.quadrant1Fill) ? F(this.quadrant1Fill) : E(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
            backgroundColor: this.xyChart?.backgroundColor || this.background,
            titleColor: this.xyChart?.titleColor || this.primaryTextColor,
            xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
            xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
            xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
            xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
            yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
            yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
            yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
            yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
            plotColorPalette: this.xyChart?.plotColorPalette || "#3498db,#2ecc71,#e74c3c,#f1c40f,#bdc3c7,#ffffff,#34495e,#9b59b6,#1abc9c,#e67e22"
        }, this.packet = {
            startByteColor: this.primaryTextColor,
            endByteColor: this.primaryTextColor,
            labelColor: this.primaryTextColor,
            titleColor: this.primaryTextColor,
            blockStrokeColor: this.primaryTextColor,
            blockFillColor: this.background
        }, this.radar = {
            axisColor: this.radar?.axisColor || this.lineColor,
            axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
            axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
            curveOpacity: this.radar?.curveOpacity || .5,
            curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
            graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
            graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
            graticuleOpacity: this.radar?.graticuleOpacity || .3,
            legendBoxSize: this.radar?.legendBoxSize || 12,
            legendFontSize: this.radar?.legendFontSize || 12
        }, this.classText = this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? E(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = /*#__PURE__*/ F(this.secondaryColor, 20), this.git1 = /*#__PURE__*/ F(this.pie2 || this.secondaryColor, 20), this.git2 = /*#__PURE__*/ F(this.pie3 || this.tertiaryColor, 20), this.git3 = /*#__PURE__*/ F(this.pie4 || m(this.primaryColor, {
            h: -30
        }), 20), this.git4 = /*#__PURE__*/ F(this.pie5 || m(this.primaryColor, {
            h: -60
        }), 20), this.git5 = /*#__PURE__*/ F(this.pie6 || m(this.primaryColor, {
            h: -90
        }), 10), this.git6 = /*#__PURE__*/ F(this.pie7 || m(this.primaryColor, {
            h: 60
        }), 10), this.git7 = /*#__PURE__*/ F(this.pie8 || m(this.primaryColor, {
            h: 120
        }), 20), this.gitInv0 = this.gitInv0 || b(this.git0), this.gitInv1 = this.gitInv1 || b(this.git1), this.gitInv2 = this.gitInv2 || b(this.git2), this.gitInv3 = this.gitInv3 || b(this.git3), this.gitInv4 = this.gitInv4 || b(this.git4), this.gitInv5 = this.gitInv5 || b(this.git5), this.gitInv6 = this.gitInv6 || b(this.git6), this.gitInv7 = this.gitInv7 || b(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || b(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || b(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || F(this.background, 12), this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || F(this.background, 2), this.nodeBorder = this.nodeBorder || "#999";
    }
    calculate(e) {
        if (typeof e != "object") {
            this.updateColors();
            return;
        }
        let r = /*#__PURE__*/ Object.keys(e);
        r.forEach((o)=>{
            this[o] = e[o];
        }), this.updateColors(), r.forEach((o)=>{
            this[o] = e[o];
        });
    }
}, ll = /*#__PURE__*/ m$1((t)=>{
    let e = new Vo;
    return e.calculate(t), e;
}, "getThemeVariables");
var Xo = class {
    static #_ = m$1(this, "Theme");
    constructor(){
        this.background = "#f4f4f4", this.primaryColor = "#ECECFF", this.secondaryColor = /*#__PURE__*/ m(this.primaryColor, {
            h: 120
        }), this.secondaryColor = "#ffffde", this.tertiaryColor = /*#__PURE__*/ m(this.primaryColor, {
            h: -160
        }), this.primaryBorderColor = /*#__PURE__*/ ct(this.primaryColor, this.darkMode), this.secondaryBorderColor = /*#__PURE__*/ ct(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = /*#__PURE__*/ ct(this.tertiaryColor, this.darkMode), this.primaryTextColor = /*#__PURE__*/ b(this.primaryColor), this.secondaryTextColor = /*#__PURE__*/ b(this.secondaryColor), this.tertiaryTextColor = /*#__PURE__*/ b(this.tertiaryColor), this.lineColor = /*#__PURE__*/ b(this.background), this.textColor = /*#__PURE__*/ b(this.background), this.background = "white", this.mainBkg = "#ECECFF", this.secondBkg = "#ffffde", this.lineColor = "#333333", this.border1 = "#9370DB", this.border2 = "#aaaa33", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "rgba(232,232,232, 0.8)", this.textColor = "#333", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = this.taskTextDarkColor, this.taskTextClickableColor = "calculated", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBorderColor = "calculated", this.critBkgColor = "calculated", this.todayLineColor = "calculated", this.sectionBkgColor = /*#__PURE__*/ ae(102, 102, 255, .49), this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#fff400", this.taskBorderColor = "#534fbc", this.taskBkgColor = "#8a90dd", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "#534fbc", this.activeTaskBkgColor = "#bfc7ff", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = "calculated", this.rowEven = "calculated", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222", this.updateColors();
    }
    updateColors() {
        this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || m(this.primaryColor, {
            h: 30
        }), this.cScale4 = this.cScale4 || m(this.primaryColor, {
            h: 60
        }), this.cScale5 = this.cScale5 || m(this.primaryColor, {
            h: 90
        }), this.cScale6 = this.cScale6 || m(this.primaryColor, {
            h: 120
        }), this.cScale7 = this.cScale7 || m(this.primaryColor, {
            h: 150
        }), this.cScale8 = this.cScale8 || m(this.primaryColor, {
            h: 210
        }), this.cScale9 = this.cScale9 || m(this.primaryColor, {
            h: 270
        }), this.cScale10 = this.cScale10 || m(this.primaryColor, {
            h: 300
        }), this.cScale11 = this.cScale11 || m(this.primaryColor, {
            h: 330
        }), this.cScalePeer1 = this.cScalePeer1 || E(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || E(this.tertiaryColor, 40);
        for(let e = 0; e < this.THEME_COLOR_LIMIT; e++)this["cScale" + e] = /*#__PURE__*/ E(this["cScale" + e], 10), this["cScalePeer" + e] = this["cScalePeer" + e] || E(this["cScale" + e], 25);
        for(let e = 0; e < this.THEME_COLOR_LIMIT; e++)this["cScaleInv" + e] = this["cScaleInv" + e] || m(this["cScale" + e], {
            h: 180
        });
        for(let e = 0; e < 5; e++)this["surface" + e] = this["surface" + e] || m(this.mainBkg, {
            h: 30,
            l: -(5 + e * 5)
        }), this["surfacePeer" + e] = this["surfacePeer" + e] || m(this.mainBkg, {
            h: 30,
            l: -(7 + e * 5)
        });
        if (this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor, this.labelTextColor !== "calculated") {
            this.cScaleLabel0 = this.cScaleLabel0 || b(this.labelTextColor), this.cScaleLabel3 = this.cScaleLabel3 || b(this.labelTextColor);
            for(let e = 0; e < this.THEME_COLOR_LIMIT; e++)this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.labelTextColor;
        }
        this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.textColor, this.edgeLabelBackground = this.labelBackground, this.actorBorder = /*#__PURE__*/ F(this.border1, 23), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.signalColor = this.textColor, this.signalTextColor = this.textColor, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.actorLineColor = this.actorBorder, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.rowOdd = this.rowOdd || F(this.primaryColor, 75) || "#ffffff", this.rowEven = this.rowEven || F(this.primaryColor, 1), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = /*#__PURE__*/ m(this.primaryColor, {
            h: 64
        }), this.fillType3 = /*#__PURE__*/ m(this.secondaryColor, {
            h: 64
        }), this.fillType4 = /*#__PURE__*/ m(this.primaryColor, {
            h: -64
        }), this.fillType5 = /*#__PURE__*/ m(this.secondaryColor, {
            h: -64
        }), this.fillType6 = /*#__PURE__*/ m(this.primaryColor, {
            h: 128
        }), this.fillType7 = /*#__PURE__*/ m(this.secondaryColor, {
            h: 128
        }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || m(this.tertiaryColor, {
            l: -40
        }), this.pie4 = this.pie4 || m(this.primaryColor, {
            l: -10
        }), this.pie5 = this.pie5 || m(this.secondaryColor, {
            l: -30
        }), this.pie6 = this.pie6 || m(this.tertiaryColor, {
            l: -20
        }), this.pie7 = this.pie7 || m(this.primaryColor, {
            h: 60,
            l: -20
        }), this.pie8 = this.pie8 || m(this.primaryColor, {
            h: -60,
            l: -40
        }), this.pie9 = this.pie9 || m(this.primaryColor, {
            h: 120,
            l: -40
        }), this.pie10 = this.pie10 || m(this.primaryColor, {
            h: 60,
            l: -40
        }), this.pie11 = this.pie11 || m(this.primaryColor, {
            h: -90,
            l: -40
        }), this.pie12 = this.pie12 || m(this.primaryColor, {
            h: 120,
            l: -30
        }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || m(this.primaryColor, {
            r: 5,
            g: 5,
            b: 5
        }), this.quadrant3Fill = this.quadrant3Fill || m(this.primaryColor, {
            r: 10,
            g: 10,
            b: 10
        }), this.quadrant4Fill = this.quadrant4Fill || m(this.primaryColor, {
            r: 15,
            g: 15,
            b: 15
        }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || m(this.primaryTextColor, {
            r: -5,
            g: -5,
            b: -5
        }), this.quadrant3TextFill = this.quadrant3TextFill || m(this.primaryTextColor, {
            r: -10,
            g: -10,
            b: -10
        }), this.quadrant4TextFill = this.quadrant4TextFill || m(this.primaryTextColor, {
            r: -15,
            g: -15,
            b: -15
        }), this.quadrantPointFill = this.quadrantPointFill || $t(this.quadrant1Fill) ? F(this.quadrant1Fill) : E(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.radar = {
            axisColor: this.radar?.axisColor || this.lineColor,
            axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
            axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
            curveOpacity: this.radar?.curveOpacity || .5,
            curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
            graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
            graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
            graticuleOpacity: this.radar?.graticuleOpacity || .3,
            legendBoxSize: this.radar?.legendBoxSize || 12,
            legendFontSize: this.radar?.legendFontSize || 12
        }, this.xyChart = {
            backgroundColor: this.xyChart?.backgroundColor || this.background,
            titleColor: this.xyChart?.titleColor || this.primaryTextColor,
            xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
            xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
            xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
            xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
            yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
            yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
            yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
            yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
            plotColorPalette: this.xyChart?.plotColorPalette || "#ECECFF,#8493A6,#FFC3A0,#DCDDE1,#B8E994,#D1A36F,#C3CDE6,#FFB6C1,#496078,#F8F3E3"
        }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.labelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || m(this.primaryColor, {
            h: -30
        }), this.git4 = this.git4 || m(this.primaryColor, {
            h: -60
        }), this.git5 = this.git5 || m(this.primaryColor, {
            h: -90
        }), this.git6 = this.git6 || m(this.primaryColor, {
            h: 60
        }), this.git7 = this.git7 || m(this.primaryColor, {
            h: 120
        }), this.darkMode ? (this.git0 = /*#__PURE__*/ F(this.git0, 25), this.git1 = /*#__PURE__*/ F(this.git1, 25), this.git2 = /*#__PURE__*/ F(this.git2, 25), this.git3 = /*#__PURE__*/ F(this.git3, 25), this.git4 = /*#__PURE__*/ F(this.git4, 25), this.git5 = /*#__PURE__*/ F(this.git5, 25), this.git6 = /*#__PURE__*/ F(this.git6, 25), this.git7 = /*#__PURE__*/ F(this.git7, 25)) : (this.git0 = /*#__PURE__*/ E(this.git0, 25), this.git1 = /*#__PURE__*/ E(this.git1, 25), this.git2 = /*#__PURE__*/ E(this.git2, 25), this.git3 = /*#__PURE__*/ E(this.git3, 25), this.git4 = /*#__PURE__*/ E(this.git4, 25), this.git5 = /*#__PURE__*/ E(this.git5, 25), this.git6 = /*#__PURE__*/ E(this.git6, 25), this.git7 = /*#__PURE__*/ E(this.git7, 25)), this.gitInv0 = this.gitInv0 || E(/*#__PURE__*/ b(this.git0), 25), this.gitInv1 = this.gitInv1 || b(this.git1), this.gitInv2 = this.gitInv2 || b(this.git2), this.gitInv3 = this.gitInv3 || b(this.git3), this.gitInv4 = this.gitInv4 || b(this.git4), this.gitInv5 = this.gitInv5 || b(this.git5), this.gitInv6 = this.gitInv6 || b(this.git6), this.gitInv7 = this.gitInv7 || b(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || b(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || b(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || ge, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || xe;
    }
    calculate(e) {
        if (Object.keys(this).forEach((o)=>{
            this[o] === "calculated" && (this[o] = void 0);
        }), typeof e != "object") {
            this.updateColors();
            return;
        }
        let r = /*#__PURE__*/ Object.keys(e);
        r.forEach((o)=>{
            this[o] = e[o];
        }), this.updateColors(), r.forEach((o)=>{
            this[o] = e[o];
        });
    }
}, hl = /*#__PURE__*/ m$1((t)=>{
    let e = new Xo;
    return e.calculate(t), e;
}, "getThemeVariables");
var jo = class {
    static #_ = m$1(this, "Theme");
    constructor(){
        this.background = "#f4f4f4", this.primaryColor = "#cde498", this.secondaryColor = "#cdffb2", this.background = "white", this.mainBkg = "#cde498", this.secondBkg = "#cdffb2", this.lineColor = "green", this.border1 = "#13540c", this.border2 = "#6eaa49", this.arrowheadColor = "green", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.tertiaryColor = /*#__PURE__*/ F("#cde498", 10), this.primaryBorderColor = /*#__PURE__*/ ct(this.primaryColor, this.darkMode), this.secondaryBorderColor = /*#__PURE__*/ ct(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = /*#__PURE__*/ ct(this.tertiaryColor, this.darkMode), this.primaryTextColor = /*#__PURE__*/ b(this.primaryColor), this.secondaryTextColor = /*#__PURE__*/ b(this.secondaryColor), this.tertiaryTextColor = /*#__PURE__*/ b(this.primaryColor), this.lineColor = /*#__PURE__*/ b(this.background), this.textColor = /*#__PURE__*/ b(this.background), this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#333", this.edgeLabelBackground = "#e8e8e8", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "calculated", this.signalColor = "#333", this.signalTextColor = "#333", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "#326932", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "#6eaa49", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#6eaa49", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "#487e3a", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
    }
    updateColors() {
        this.actorBorder = /*#__PURE__*/ E(this.mainBkg, 20), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.actorLineColor = this.actorBorder, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || m(this.primaryColor, {
            h: 30
        }), this.cScale4 = this.cScale4 || m(this.primaryColor, {
            h: 60
        }), this.cScale5 = this.cScale5 || m(this.primaryColor, {
            h: 90
        }), this.cScale6 = this.cScale6 || m(this.primaryColor, {
            h: 120
        }), this.cScale7 = this.cScale7 || m(this.primaryColor, {
            h: 150
        }), this.cScale8 = this.cScale8 || m(this.primaryColor, {
            h: 210
        }), this.cScale9 = this.cScale9 || m(this.primaryColor, {
            h: 270
        }), this.cScale10 = this.cScale10 || m(this.primaryColor, {
            h: 300
        }), this.cScale11 = this.cScale11 || m(this.primaryColor, {
            h: 330
        }), this.cScalePeer1 = this.cScalePeer1 || E(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || E(this.tertiaryColor, 40);
        for(let e = 0; e < this.THEME_COLOR_LIMIT; e++)this["cScale" + e] = /*#__PURE__*/ E(this["cScale" + e], 10), this["cScalePeer" + e] = this["cScalePeer" + e] || E(this["cScale" + e], 25);
        for(let e = 0; e < this.THEME_COLOR_LIMIT; e++)this["cScaleInv" + e] = this["cScaleInv" + e] || m(this["cScale" + e], {
            h: 180
        });
        this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor;
        for(let e = 0; e < this.THEME_COLOR_LIMIT; e++)this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.scaleLabelColor;
        for(let e = 0; e < 5; e++)this["surface" + e] = this["surface" + e] || m(this.mainBkg, {
            h: 30,
            s: -30,
            l: -(5 + e * 5)
        }), this["surfacePeer" + e] = this["surfacePeer" + e] || m(this.mainBkg, {
            h: 30,
            s: -30,
            l: -(8 + e * 5)
        });
        this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.taskBorderColor = this.border1, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.rowOdd = this.rowOdd || F(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || F(this.mainBkg, 20), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = /*#__PURE__*/ m(this.primaryColor, {
            h: 64
        }), this.fillType3 = /*#__PURE__*/ m(this.secondaryColor, {
            h: 64
        }), this.fillType4 = /*#__PURE__*/ m(this.primaryColor, {
            h: -64
        }), this.fillType5 = /*#__PURE__*/ m(this.secondaryColor, {
            h: -64
        }), this.fillType6 = /*#__PURE__*/ m(this.primaryColor, {
            h: 128
        }), this.fillType7 = /*#__PURE__*/ m(this.secondaryColor, {
            h: 128
        }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || m(this.primaryColor, {
            l: -30
        }), this.pie5 = this.pie5 || m(this.secondaryColor, {
            l: -30
        }), this.pie6 = this.pie6 || m(this.tertiaryColor, {
            h: 40,
            l: -40
        }), this.pie7 = this.pie7 || m(this.primaryColor, {
            h: 60,
            l: -10
        }), this.pie8 = this.pie8 || m(this.primaryColor, {
            h: -60,
            l: -10
        }), this.pie9 = this.pie9 || m(this.primaryColor, {
            h: 120,
            l: 0
        }), this.pie10 = this.pie10 || m(this.primaryColor, {
            h: 60,
            l: -50
        }), this.pie11 = this.pie11 || m(this.primaryColor, {
            h: -60,
            l: -50
        }), this.pie12 = this.pie12 || m(this.primaryColor, {
            h: 120,
            l: -50
        }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || m(this.primaryColor, {
            r: 5,
            g: 5,
            b: 5
        }), this.quadrant3Fill = this.quadrant3Fill || m(this.primaryColor, {
            r: 10,
            g: 10,
            b: 10
        }), this.quadrant4Fill = this.quadrant4Fill || m(this.primaryColor, {
            r: 15,
            g: 15,
            b: 15
        }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || m(this.primaryTextColor, {
            r: -5,
            g: -5,
            b: -5
        }), this.quadrant3TextFill = this.quadrant3TextFill || m(this.primaryTextColor, {
            r: -10,
            g: -10,
            b: -10
        }), this.quadrant4TextFill = this.quadrant4TextFill || m(this.primaryTextColor, {
            r: -15,
            g: -15,
            b: -15
        }), this.quadrantPointFill = this.quadrantPointFill || $t(this.quadrant1Fill) ? F(this.quadrant1Fill) : E(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.packet = {
            startByteColor: this.primaryTextColor,
            endByteColor: this.primaryTextColor,
            labelColor: this.primaryTextColor,
            titleColor: this.primaryTextColor,
            blockStrokeColor: this.primaryTextColor,
            blockFillColor: this.mainBkg
        }, this.radar = {
            axisColor: this.radar?.axisColor || this.lineColor,
            axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
            axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
            curveOpacity: this.radar?.curveOpacity || .5,
            curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
            graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
            graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
            graticuleOpacity: this.radar?.graticuleOpacity || .3,
            legendBoxSize: this.radar?.legendBoxSize || 12,
            legendFontSize: this.radar?.legendFontSize || 12
        }, this.xyChart = {
            backgroundColor: this.xyChart?.backgroundColor || this.background,
            titleColor: this.xyChart?.titleColor || this.primaryTextColor,
            xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
            xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
            xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
            xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
            yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
            yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
            yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
            yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
            plotColorPalette: this.xyChart?.plotColorPalette || "#CDE498,#FF6B6B,#A0D2DB,#D7BDE2,#F0F0F0,#FFC3A0,#7FD8BE,#FF9A8B,#FAF3E0,#FFF176"
        }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || m(this.primaryColor, {
            h: -30
        }), this.git4 = this.git4 || m(this.primaryColor, {
            h: -60
        }), this.git5 = this.git5 || m(this.primaryColor, {
            h: -90
        }), this.git6 = this.git6 || m(this.primaryColor, {
            h: 60
        }), this.git7 = this.git7 || m(this.primaryColor, {
            h: 120
        }), this.darkMode ? (this.git0 = /*#__PURE__*/ F(this.git0, 25), this.git1 = /*#__PURE__*/ F(this.git1, 25), this.git2 = /*#__PURE__*/ F(this.git2, 25), this.git3 = /*#__PURE__*/ F(this.git3, 25), this.git4 = /*#__PURE__*/ F(this.git4, 25), this.git5 = /*#__PURE__*/ F(this.git5, 25), this.git6 = /*#__PURE__*/ F(this.git6, 25), this.git7 = /*#__PURE__*/ F(this.git7, 25)) : (this.git0 = /*#__PURE__*/ E(this.git0, 25), this.git1 = /*#__PURE__*/ E(this.git1, 25), this.git2 = /*#__PURE__*/ E(this.git2, 25), this.git3 = /*#__PURE__*/ E(this.git3, 25), this.git4 = /*#__PURE__*/ E(this.git4, 25), this.git5 = /*#__PURE__*/ E(this.git5, 25), this.git6 = /*#__PURE__*/ E(this.git6, 25), this.git7 = /*#__PURE__*/ E(this.git7, 25)), this.gitInv0 = this.gitInv0 || b(this.git0), this.gitInv1 = this.gitInv1 || b(this.git1), this.gitInv2 = this.gitInv2 || b(this.git2), this.gitInv3 = this.gitInv3 || b(this.git3), this.gitInv4 = this.gitInv4 || b(this.git4), this.gitInv5 = this.gitInv5 || b(this.git5), this.gitInv6 = this.gitInv6 || b(this.git6), this.gitInv7 = this.gitInv7 || b(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || b(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || b(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || ge, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || xe;
    }
    calculate(e) {
        if (typeof e != "object") {
            this.updateColors();
            return;
        }
        let r = /*#__PURE__*/ Object.keys(e);
        r.forEach((o)=>{
            this[o] = e[o];
        }), this.updateColors(), r.forEach((o)=>{
            this[o] = e[o];
        });
    }
}, cl = /*#__PURE__*/ m$1((t)=>{
    let e = new jo;
    return e.calculate(t), e;
}, "getThemeVariables");
var Zo = class {
    static #_ = m$1(this, "Theme");
    constructor(){
        this.primaryColor = "#eee", this.contrast = "#707070", this.secondaryColor = /*#__PURE__*/ F(this.contrast, 55), this.background = "#ffffff", this.tertiaryColor = /*#__PURE__*/ m(this.primaryColor, {
            h: -160
        }), this.primaryBorderColor = /*#__PURE__*/ ct(this.primaryColor, this.darkMode), this.secondaryBorderColor = /*#__PURE__*/ ct(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = /*#__PURE__*/ ct(this.tertiaryColor, this.darkMode), this.primaryTextColor = /*#__PURE__*/ b(this.primaryColor), this.secondaryTextColor = /*#__PURE__*/ b(this.secondaryColor), this.tertiaryTextColor = /*#__PURE__*/ b(this.tertiaryColor), this.lineColor = /*#__PURE__*/ b(this.background), this.textColor = /*#__PURE__*/ b(this.background), this.mainBkg = "#eee", this.secondBkg = "calculated", this.lineColor = "#666", this.border1 = "#999", this.border2 = "calculated", this.note = "#ffa", this.text = "#333", this.critical = "#d42", this.done = "#bbb", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "white", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = this.actorBorder, this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "calculated", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBkgColor = "calculated", this.critBorderColor = "calculated", this.todayLineColor = "calculated", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = this.rowOdd || F(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || "#f4f4f4", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
    }
    updateColors() {
        this.secondBkg = /*#__PURE__*/ F(this.contrast, 55), this.border2 = this.contrast, this.actorBorder = /*#__PURE__*/ F(this.border1, 23), this.actorBkg = this.mainBkg, this.actorTextColor = this.text, this.actorLineColor = this.actorBorder, this.signalColor = this.text, this.signalTextColor = this.text, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.text, this.loopTextColor = this.text, this.noteBorderColor = "#999", this.noteBkgColor = "#666", this.noteTextColor = "#fff", this.cScale0 = this.cScale0 || "#555", this.cScale1 = this.cScale1 || "#F4F4F4", this.cScale2 = this.cScale2 || "#555", this.cScale3 = this.cScale3 || "#BBB", this.cScale4 = this.cScale4 || "#777", this.cScale5 = this.cScale5 || "#999", this.cScale6 = this.cScale6 || "#DDD", this.cScale7 = this.cScale7 || "#FFF", this.cScale8 = this.cScale8 || "#DDD", this.cScale9 = this.cScale9 || "#BBB", this.cScale10 = this.cScale10 || "#999", this.cScale11 = this.cScale11 || "#777";
        for(let e = 0; e < this.THEME_COLOR_LIMIT; e++)this["cScaleInv" + e] = this["cScaleInv" + e] || b(this["cScale" + e]);
        for(let e = 0; e < this.THEME_COLOR_LIMIT; e++)this.darkMode ? this["cScalePeer" + e] = this["cScalePeer" + e] || F(this["cScale" + e], 10) : this["cScalePeer" + e] = this["cScalePeer" + e] || E(this["cScale" + e], 10);
        this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.cScaleLabel0 = this.cScaleLabel0 || this.cScale1, this.cScaleLabel2 = this.cScaleLabel2 || this.cScale1;
        for(let e = 0; e < this.THEME_COLOR_LIMIT; e++)this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.scaleLabelColor;
        for(let e = 0; e < 5; e++)this["surface" + e] = this["surface" + e] || m(this.mainBkg, {
            l: -(5 + e * 5)
        }), this["surfacePeer" + e] = this["surfacePeer" + e] || m(this.mainBkg, {
            l: -(8 + e * 5)
        });
        this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.text, this.sectionBkgColor = /*#__PURE__*/ F(this.contrast, 30), this.sectionBkgColor2 = /*#__PURE__*/ F(this.contrast, 30), this.taskBorderColor = /*#__PURE__*/ E(this.contrast, 10), this.taskBkgColor = this.contrast, this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = this.text, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.gridColor = /*#__PURE__*/ F(this.border1, 30), this.doneTaskBkgColor = this.done, this.doneTaskBorderColor = this.lineColor, this.critBkgColor = this.critical, this.critBorderColor = /*#__PURE__*/ E(this.critBkgColor, 10), this.todayLineColor = this.critBkgColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.transitionColor = this.transitionColor || "#000", this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f4f4f4", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.stateBorder = this.stateBorder || "#000", this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#222", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = /*#__PURE__*/ m(this.primaryColor, {
            h: 64
        }), this.fillType3 = /*#__PURE__*/ m(this.secondaryColor, {
            h: 64
        }), this.fillType4 = /*#__PURE__*/ m(this.primaryColor, {
            h: -64
        }), this.fillType5 = /*#__PURE__*/ m(this.secondaryColor, {
            h: -64
        }), this.fillType6 = /*#__PURE__*/ m(this.primaryColor, {
            h: 128
        }), this.fillType7 = /*#__PURE__*/ m(this.secondaryColor, {
            h: 128
        });
        for(let e = 0; e < this.THEME_COLOR_LIMIT; e++)this["pie" + e] = this["cScale" + e];
        this.pie12 = this.pie0, this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || m(this.primaryColor, {
            r: 5,
            g: 5,
            b: 5
        }), this.quadrant3Fill = this.quadrant3Fill || m(this.primaryColor, {
            r: 10,
            g: 10,
            b: 10
        }), this.quadrant4Fill = this.quadrant4Fill || m(this.primaryColor, {
            r: 15,
            g: 15,
            b: 15
        }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || m(this.primaryTextColor, {
            r: -5,
            g: -5,
            b: -5
        }), this.quadrant3TextFill = this.quadrant3TextFill || m(this.primaryTextColor, {
            r: -10,
            g: -10,
            b: -10
        }), this.quadrant4TextFill = this.quadrant4TextFill || m(this.primaryTextColor, {
            r: -15,
            g: -15,
            b: -15
        }), this.quadrantPointFill = this.quadrantPointFill || $t(this.quadrant1Fill) ? F(this.quadrant1Fill) : E(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
            backgroundColor: this.xyChart?.backgroundColor || this.background,
            titleColor: this.xyChart?.titleColor || this.primaryTextColor,
            xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
            xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
            xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
            xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
            yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
            yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
            yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
            yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
            plotColorPalette: this.xyChart?.plotColorPalette || "#EEE,#6BB8E4,#8ACB88,#C7ACD6,#E8DCC2,#FFB2A8,#FFF380,#7E8D91,#FFD8B1,#FAF3E0"
        }, this.radar = {
            axisColor: this.radar?.axisColor || this.lineColor,
            axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
            axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
            curveOpacity: this.radar?.curveOpacity || .5,
            curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
            graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
            graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
            graticuleOpacity: this.radar?.graticuleOpacity || .3,
            legendBoxSize: this.radar?.legendBoxSize || 12,
            legendFontSize: this.radar?.legendFontSize || 12
        }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = E(this.pie1, 25) || this.primaryColor, this.git1 = this.pie2 || this.secondaryColor, this.git2 = this.pie3 || this.tertiaryColor, this.git3 = this.pie4 || m(this.primaryColor, {
            h: -30
        }), this.git4 = this.pie5 || m(this.primaryColor, {
            h: -60
        }), this.git5 = this.pie6 || m(this.primaryColor, {
            h: -90
        }), this.git6 = this.pie7 || m(this.primaryColor, {
            h: 60
        }), this.git7 = this.pie8 || m(this.primaryColor, {
            h: 120
        }), this.gitInv0 = this.gitInv0 || b(this.git0), this.gitInv1 = this.gitInv1 || b(this.git1), this.gitInv2 = this.gitInv2 || b(this.git2), this.gitInv3 = this.gitInv3 || b(this.git3), this.gitInv4 = this.gitInv4 || b(this.git4), this.gitInv5 = this.gitInv5 || b(this.git5), this.gitInv6 = this.gitInv6 || b(this.git6), this.gitInv7 = this.gitInv7 || b(this.git7), this.branchLabelColor = this.branchLabelColor || this.labelTextColor, this.gitBranchLabel0 = this.branchLabelColor, this.gitBranchLabel1 = "white", this.gitBranchLabel2 = this.branchLabelColor, this.gitBranchLabel3 = "white", this.gitBranchLabel4 = this.branchLabelColor, this.gitBranchLabel5 = this.branchLabelColor, this.gitBranchLabel6 = this.branchLabelColor, this.gitBranchLabel7 = this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || ge, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || xe;
    }
    calculate(e) {
        if (typeof e != "object") {
            this.updateColors();
            return;
        }
        let r = /*#__PURE__*/ Object.keys(e);
        r.forEach((o)=>{
            this[o] = e[o];
        }), this.updateColors(), r.forEach((o)=>{
            this[o] = e[o];
        });
    }
}, ul = /*#__PURE__*/ m$1((t)=>{
    let e = new Zo;
    return e.calculate(t), e;
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
var Kt = {
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
        nodeSpacing: 140,
        rankSpacing: 80,
        stroke: "gray",
        fill: "honeydew",
        fontSize: 12
    },
    pie: {
        useMaxWidth: true,
        textPosition: .75
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
    radar: {
        useMaxWidth: true,
        width: 600,
        height: 600,
        marginTop: 50,
        marginRight: 50,
        marginBottom: 50,
        marginLeft: 50,
        axisScaleFactor: 1,
        axisLabelFactor: 1.05,
        curveTension: .17
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
    ...Kt,
    deterministicIDSeed: void 0,
    elk: {
        mergeEdges: false,
        nodePlacementStrategy: "BRANDES_KOEPF"
    },
    themeCSS: void 0,
    themeVariables: /*#__PURE__*/ ye.default.getThemeVariables(),
    sequence: {
        ...Kt.sequence,
        messageFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.messageFontFamily,
                fontSize: this.messageFontSize,
                fontWeight: this.messageFontWeight
            };
        }, "messageFont"),
        noteFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.noteFontFamily,
                fontSize: this.noteFontSize,
                fontWeight: this.noteFontWeight
            };
        }, "noteFont"),
        actorFont: /*#__PURE__*/ m$1(function() {
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
        ...Kt.gantt,
        tickInterval: void 0,
        useWidth: void 0
    },
    c4: {
        ...Kt.c4,
        useWidth: void 0,
        personFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.personFontFamily,
                fontSize: this.personFontSize,
                fontWeight: this.personFontWeight
            };
        }, "personFont"),
        external_personFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.external_personFontFamily,
                fontSize: this.external_personFontSize,
                fontWeight: this.external_personFontWeight
            };
        }, "external_personFont"),
        systemFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.systemFontFamily,
                fontSize: this.systemFontSize,
                fontWeight: this.systemFontWeight
            };
        }, "systemFont"),
        external_systemFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.external_systemFontFamily,
                fontSize: this.external_systemFontSize,
                fontWeight: this.external_systemFontWeight
            };
        }, "external_systemFont"),
        system_dbFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.system_dbFontFamily,
                fontSize: this.system_dbFontSize,
                fontWeight: this.system_dbFontWeight
            };
        }, "system_dbFont"),
        external_system_dbFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.external_system_dbFontFamily,
                fontSize: this.external_system_dbFontSize,
                fontWeight: this.external_system_dbFontWeight
            };
        }, "external_system_dbFont"),
        system_queueFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.system_queueFontFamily,
                fontSize: this.system_queueFontSize,
                fontWeight: this.system_queueFontWeight
            };
        }, "system_queueFont"),
        external_system_queueFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.external_system_queueFontFamily,
                fontSize: this.external_system_queueFontSize,
                fontWeight: this.external_system_queueFontWeight
            };
        }, "external_system_queueFont"),
        containerFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.containerFontFamily,
                fontSize: this.containerFontSize,
                fontWeight: this.containerFontWeight
            };
        }, "containerFont"),
        external_containerFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.external_containerFontFamily,
                fontSize: this.external_containerFontSize,
                fontWeight: this.external_containerFontWeight
            };
        }, "external_containerFont"),
        container_dbFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.container_dbFontFamily,
                fontSize: this.container_dbFontSize,
                fontWeight: this.container_dbFontWeight
            };
        }, "container_dbFont"),
        external_container_dbFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.external_container_dbFontFamily,
                fontSize: this.external_container_dbFontSize,
                fontWeight: this.external_container_dbFontWeight
            };
        }, "external_container_dbFont"),
        container_queueFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.container_queueFontFamily,
                fontSize: this.container_queueFontSize,
                fontWeight: this.container_queueFontWeight
            };
        }, "container_queueFont"),
        external_container_queueFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.external_container_queueFontFamily,
                fontSize: this.external_container_queueFontSize,
                fontWeight: this.external_container_queueFontWeight
            };
        }, "external_container_queueFont"),
        componentFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.componentFontFamily,
                fontSize: this.componentFontSize,
                fontWeight: this.componentFontWeight
            };
        }, "componentFont"),
        external_componentFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.external_componentFontFamily,
                fontSize: this.external_componentFontSize,
                fontWeight: this.external_componentFontWeight
            };
        }, "external_componentFont"),
        component_dbFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.component_dbFontFamily,
                fontSize: this.component_dbFontSize,
                fontWeight: this.component_dbFontWeight
            };
        }, "component_dbFont"),
        external_component_dbFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.external_component_dbFontFamily,
                fontSize: this.external_component_dbFontSize,
                fontWeight: this.external_component_dbFontWeight
            };
        }, "external_component_dbFont"),
        component_queueFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.component_queueFontFamily,
                fontSize: this.component_queueFontSize,
                fontWeight: this.component_queueFontWeight
            };
        }, "component_queueFont"),
        external_component_queueFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.external_component_queueFontFamily,
                fontSize: this.external_component_queueFontSize,
                fontWeight: this.external_component_queueFontWeight
            };
        }, "external_component_queueFont"),
        boundaryFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.boundaryFontFamily,
                fontSize: this.boundaryFontSize,
                fontWeight: this.boundaryFontWeight
            };
        }, "boundaryFont"),
        messageFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.messageFontFamily,
                fontSize: this.messageFontSize,
                fontWeight: this.messageFontWeight
            };
        }, "messageFont")
    },
    pie: {
        ...Kt.pie,
        useWidth: 984
    },
    xyChart: {
        ...Kt.xyChart,
        useWidth: void 0
    },
    requirement: {
        ...Kt.requirement,
        useWidth: void 0
    },
    packet: {
        ...Kt.packet
    },
    radar: {
        ...Kt.radar
    }
}, dl = m$1(function(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return Object.keys(t).reduce((r, o)=>Array.isArray(t[o]) ? r : typeof t[o] == "object" && t[o] !== null ? [
            ...r,
            e + o,
            .../*#__PURE__*/ dl(t[o], "")
        ] : [
            ...r,
            e + o
        ], []);
}, "keyify"), ml = new Set(dl(fl, "")), pl = fl;
var Fi = m$1((t)=>{
    if (tt.debug("sanitizeDirective called with", t), !(typeof t != "object" || t == null)) {
        if (Array.isArray(t)) {
            t.forEach((e)=>Fi(e));
            return;
        }
        for (let e of Object.keys(t)){
            if (tt.debug("Checking key", e), e.startsWith("__") || e.includes("proto") || e.includes("constr") || !ml.has(e) || t[e] == null) {
                tt.debug("sanitize deleting key: ", e), delete t[e];
                continue;
            }
            if (typeof t[e] == "object") {
                tt.debug("sanitizing object", e), Fi(t[e]);
                continue;
            }
            let r = [
                "themeCSS",
                "fontFamily",
                "altFontFamily"
            ];
            for (let o of r)e.includes(o) && (tt.debug("sanitizing css option", e), t[e] = /*#__PURE__*/ Du(t[e]));
        }
        if (t.themeVariables) for (let e of Object.keys(t.themeVariables)){
            let r = t.themeVariables[e];
            r?.match && !r.match(/^[\d "#%(),.;A-Za-z]+$/) && (t.themeVariables[e] = "");
        }
        tt.debug("After sanitization", t);
    }
}, "sanitizeDirective"), Du = /*#__PURE__*/ m$1((t)=>{
    let e = 0, r = 0;
    for (let o of t){
        if (e < r) return "{ /* ERROR: Unbalanced CSS */ }";
        o === "{" ? e++ : o === "}" && r++;
    }
    return e !== r ? "{ /* ERROR: Unbalanced CSS */ }" : t;
}, "sanitizeCss");
var Ar = /*#__PURE__*/ Object.freeze(pl), Rt = /*#__PURE__*/ Lt({}, Ar), xl, tr = [], Lr = /*#__PURE__*/ Lt({}, Ar), Mi = /*#__PURE__*/ m$1((t, e)=>{
    let r = /*#__PURE__*/ Lt({}, t), o = {};
    for (let n of e)Cl(n), o = /*#__PURE__*/ Lt(o, n);
    if (r = /*#__PURE__*/ Lt(r, o), o.theme && o.theme in ye) {
        let n = /*#__PURE__*/ Lt({}, xl), s = /*#__PURE__*/ Lt(n.themeVariables || {}, o.themeVariables);
        r.theme && r.theme in ye && (r.themeVariables = /*#__PURE__*/ ye[r.theme].getThemeVariables(s));
    }
    return Lr = r, _l(Lr), Lr;
}, "updateCurrentConfig"), Iu = /*#__PURE__*/ m$1((t)=>(Rt = /*#__PURE__*/ Lt({}, Ar), Rt = /*#__PURE__*/ Lt(Rt, t), t.theme && ye[t.theme] && (Rt.themeVariables = /*#__PURE__*/ ye[t.theme].getThemeVariables(t.themeVariables)), Mi(Rt, tr), Rt), "setSiteConfig"), oC = /*#__PURE__*/ m$1((t)=>{
    xl = /*#__PURE__*/ Lt({}, t);
}, "saveConfigFromInitialize"), nC = /*#__PURE__*/ m$1((t)=>(Rt = /*#__PURE__*/ Lt(Rt, t), Mi(Rt, tr), Rt), "updateSiteConfig"), sC = /*#__PURE__*/ m$1(()=>Lt({}, Rt), "getSiteConfig"), yl = /*#__PURE__*/ m$1((t)=>(_l(t), Lt(Lr, t), Er()), "setConfig"), Er = /*#__PURE__*/ m$1(()=>Lt({}, Lr), "getConfig"), Cl = m$1((t)=>{
    t && ([
        "secure",
        ...Rt.secure ?? []
    ].forEach((e)=>{
        Object.hasOwn(t, e) && (tt.debug(`Denied attempt to modify a secure key ${e}`, t[e]), delete t[e]);
    }), Object.keys(t).forEach((e)=>{
        e.startsWith("__") && delete t[e];
    }), Object.keys(t).forEach((e)=>{
        typeof t[e] == "string" && (t[e].includes("<") || t[e].includes(">") || t[e].includes("url(data:")) && delete t[e], typeof t[e] == "object" && Cl(t[e]);
    }));
}, "sanitize"), aC = /*#__PURE__*/ m$1((t)=>{
    Fi(t), t.fontFamily && !t.themeVariables?.fontFamily && (t.themeVariables = {
        ...t.themeVariables,
        fontFamily: t.fontFamily
    }), tr.push(t), Mi(Rt, tr);
}, "addDirective"), lC = /*#__PURE__*/ m$1(function() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Rt;
    tr = [], Mi(t, tr);
}, "reset"), zu = {
    LAZY_LOAD_DEPRECATED: "The configuration options lazyLoadedDiagrams and loadExternalDiagramsAtStartup are deprecated. Please use registerExternalDiagrams instead."
}, gl = {}, Ru = /*#__PURE__*/ m$1((t)=>{
    gl[t] || (tt.warn(zu[t]), gl[t] = true);
}, "issueWarning"), _l = /*#__PURE__*/ m$1((t)=>{
    t && (t.lazyLoadedDiagrams || t.loadExternalDiagramsAtStartup) && Ru("LAZY_LOAD_DEPRECATED");
}, "checkConfig");
var { entries: Ll, setPrototypeOf: bl, isFrozen: Nu, getPrototypeOf: qu, getOwnPropertyDescriptor: Pu } = Object, { freeze: Et, seal: Wt, create: Al } = Object, { apply: rn, construct: on } = typeof Reflect < "u" && Reflect;
Et || (Et = /*#__PURE__*/ m$1(function(e) {
    return e;
}, "freeze"));
Wt || (Wt = /*#__PURE__*/ m$1(function(e) {
    return e;
}, "seal"));
rn || (rn = /*#__PURE__*/ m$1(function(e, r, o) {
    return e.apply(r, o);
}, "apply"));
on || (on = /*#__PURE__*/ m$1(function(e, r) {
    return new e(...r);
}, "construct"));
var Li = /*#__PURE__*/ Ot(Array.prototype.forEach), Wu = /*#__PURE__*/ Ot(Array.prototype.lastIndexOf), Tl = /*#__PURE__*/ Ot(Array.prototype.pop), Or = /*#__PURE__*/ Ot(Array.prototype.push), $u = /*#__PURE__*/ Ot(Array.prototype.splice), Ei = /*#__PURE__*/ Ot(String.prototype.toLowerCase), Ko = /*#__PURE__*/ Ot(String.prototype.toString), kl = /*#__PURE__*/ Ot(String.prototype.match), Dr = /*#__PURE__*/ Ot(String.prototype.replace), Hu = /*#__PURE__*/ Ot(String.prototype.indexOf), Uu = /*#__PURE__*/ Ot(String.prototype.trim), Ht = /*#__PURE__*/ Ot(Object.prototype.hasOwnProperty), At = /*#__PURE__*/ Ot(RegExp.prototype.test), Ir = /*#__PURE__*/ Yu(TypeError);
function Ot(t) {
    return function(e) {
        for(var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)o[n - 1] = arguments[n];
        return rn(t, e, o);
    };
}
m$1(Ot, "unapply");
function Yu(t) {
    return function() {
        for(var e = arguments.length, r = new Array(e), o = 0; o < e; o++)r[o] = arguments[o];
        return on(t, r);
    };
}
m$1(Yu, "unconstruct");
function K(t, e) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ei;
    bl && bl(t, null);
    let o = e.length;
    for(; o--;){
        let n = e[o];
        if (typeof n == "string") {
            let s = /*#__PURE__*/ r(n);
            s !== n && (Nu(e) || (e[o] = s), n = s);
        }
        t[n] = true;
    }
    return t;
}
m$1(K, "addToSet");
function Gu(t) {
    for(let e = 0; e < t.length; e++)Ht(t, e) || (t[e] = null);
    return t;
}
m$1(Gu, "cleanArray");
function Ee(t) {
    let e = /*#__PURE__*/ Al(null);
    for (let [r, o] of Ll(t))Ht(t, r) && (Array.isArray(o) ? e[r] = /*#__PURE__*/ Gu(o) : o && typeof o == "object" && o.constructor === Object ? e[r] = /*#__PURE__*/ Ee(o) : e[r] = o);
    return e;
}
m$1(Ee, "clone");
function zr(t, e) {
    for(; t !== null;){
        let o = /*#__PURE__*/ Pu(t, e);
        if (o) {
            if (o.get) return Ot(o.get);
            if (typeof o.value == "function") return Ot(o.value);
        }
        t = /*#__PURE__*/ qu(t);
    }
    function r() {
        return null;
    }
    return m$1(r, "fallbackValue"), r;
}
m$1(zr, "lookupGetter");
var Sl = /*#__PURE__*/ Et([
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
]), Qo = /*#__PURE__*/ Et([
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
]), Jo = /*#__PURE__*/ Et([
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
]), Vu = /*#__PURE__*/ Et([
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
]), tn = /*#__PURE__*/ Et([
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
]), Xu = /*#__PURE__*/ Et([
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
]), vl = /*#__PURE__*/ Et([
    "#text"
]), wl = /*#__PURE__*/ Et([
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
]), en = /*#__PURE__*/ Et([
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
]), Bl = /*#__PURE__*/ Et([
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
]), Ai = /*#__PURE__*/ Et([
    "xlink:href",
    "xml:id",
    "xlink:title",
    "xml:space",
    "xmlns:xlink"
]), ju = /*#__PURE__*/ Wt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Zu = /*#__PURE__*/ Wt(/<%[\w\W]*|[\w\W]*%>/gm), Ku = /*#__PURE__*/ Wt(/\$\{[\w\W]*/gm), Qu = /*#__PURE__*/ Wt(/^data-[\-\w.\u00B7-\uFFFF]+$/), Ju = /*#__PURE__*/ Wt(/^aria-[\-\w]+$/), El = /*#__PURE__*/ Wt(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), tf = /*#__PURE__*/ Wt(/^(?:\w+script|data):/i), ef = /*#__PURE__*/ Wt(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), Ol = /*#__PURE__*/ Wt(/^html$/i), rf = /*#__PURE__*/ Wt(/^[a-z][.\w]*(-[.\w]+)+$/i), Fl = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    ARIA_ATTR: Ju,
    ATTR_WHITESPACE: ef,
    CUSTOM_ELEMENT: rf,
    DATA_ATTR: Qu,
    DOCTYPE_NAME: Ol,
    ERB_EXPR: Zu,
    IS_ALLOWED_URI: El,
    IS_SCRIPT_OR_DATA: tf,
    MUSTACHE_EXPR: ju,
    TMPLIT_EXPR: Ku
}), Rr = {
    element: 1,
    text: 3,
    progressingInstruction: 7,
    comment: 8,
    document: 9
}, of = /*#__PURE__*/ m$1(function() {
    return typeof window > "u" ? null : window;
}, "getGlobal"), nf = /*#__PURE__*/ m$1(function(e, r) {
    if (typeof e != "object" || typeof e.createPolicy != "function") return null;
    let o = null, n = "data-tt-policy-suffix";
    r && r.hasAttribute(n) && (o = /*#__PURE__*/ r.getAttribute(n));
    let s = "dompurify" + (o ? "#" + o : "");
    try {
        return e.createPolicy(s, {
            createHTML (a) {
                return a;
            },
            createScriptURL (a) {
                return a;
            }
        });
    } catch  {
        return console.warn("TrustedTypes policy " + s + " could not be created."), null;
    }
}, "_createTrustedTypesPolicy"), Ml = /*#__PURE__*/ m$1(function() {
    return {
        afterSanitizeAttributes: [],
        afterSanitizeElements: [],
        afterSanitizeShadowDOM: [],
        beforeSanitizeAttributes: [],
        beforeSanitizeElements: [],
        beforeSanitizeShadowDOM: [],
        uponSanitizeAttribute: [],
        uponSanitizeElement: [],
        uponSanitizeShadowNode: []
    };
}, "_createHooksMap");
function Dl() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : of(), e = /*#__PURE__*/ m$1((N)=>Dl(N), "DOMPurify");
    if (e.version = "3.2.4", e.removed = [], !t || !t.document || t.document.nodeType !== Rr.document || !t.Element) return e.isSupported = false, e;
    let { document: r } = t, o = r, n = o.currentScript, { DocumentFragment: s, HTMLTemplateElement: a, Node: l, Element: c, NodeFilter: h, NamedNodeMap: u = t.NamedNodeMap || t.MozNamedAttrMap, HTMLFormElement: p, DOMParser: f, trustedTypes: g } = t, T = c.prototype, A = /*#__PURE__*/ zr(T, "cloneNode"), W = /*#__PURE__*/ zr(T, "remove"), q = /*#__PURE__*/ zr(T, "nextSibling"), G = /*#__PURE__*/ zr(T, "childNodes"), O = /*#__PURE__*/ zr(T, "parentNode");
    if (typeof a == "function") {
        let N = /*#__PURE__*/ r.createElement("template");
        N.content && N.content.ownerDocument && (r = N.content.ownerDocument);
    }
    let M, P = "", { implementation: w, createNodeIterator: X, createDocumentFragment: j, getElementsByTagName: $ } = r, { importNode: it } = o, B = /*#__PURE__*/ Ml();
    e.isSupported = typeof Ll == "function" && typeof O == "function" && w && w.createHTMLDocument !== void 0;
    let { MUSTACHE_EXPR: k, ERB_EXPR: x, TMPLIT_EXPR: y, DATA_ATTR: L, ARIA_ATTR: S, IS_SCRIPT_OR_DATA: z, ATTR_WHITESPACE: I, CUSTOM_ELEMENT: U } = Fl, { IS_ALLOWED_URI: rt } = Fl, Y = null, nt = /*#__PURE__*/ K({}, [
        ...Sl,
        ...Qo,
        ...Jo,
        ...tn,
        ...vl
    ]), Q = null, Ft = /*#__PURE__*/ K({}, [
        ...wl,
        ...en,
        ...Bl,
        ...Ai
    ]), Z = /*#__PURE__*/ Object.seal(/*#__PURE__*/ Al(null, {
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
    })), Ct = null, _t = null, lt = true, v = true, H = false, V = true, C = false, mt = true, J = false, bt = false, Tt = false, It = false, Le = false, pi = false, Ba = true, Fa = false, nu = "user-content-", Oo = true, vr = false, Ze = {}, Ke = null, Ma = /*#__PURE__*/ K({}, [
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
    ]), La = null, Aa = /*#__PURE__*/ K({}, [
        "audio",
        "video",
        "img",
        "source",
        "image",
        "track"
    ]), Do = null, Ea = /*#__PURE__*/ K({}, [
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
    ]), gi = "http://www.w3.org/1998/Math/MathML", xi = "http://www.w3.org/2000/svg", ie = "http://www.w3.org/1999/xhtml", Qe = ie, Io = false, zo = null, su = /*#__PURE__*/ K({}, [
        gi,
        xi,
        ie
    ], Ko), yi = /*#__PURE__*/ K({}, [
        "mi",
        "mo",
        "mn",
        "ms",
        "mtext"
    ]), Ci = /*#__PURE__*/ K({}, [
        "annotation-xml"
    ]), au = /*#__PURE__*/ K({}, [
        "title",
        "style",
        "font",
        "a",
        "script"
    ]), wr = null, lu = [
        "application/xhtml+xml",
        "text/html"
    ], hu = "text/html", pt = null, Je = null, cu = /*#__PURE__*/ r.createElement("form"), Oa = /*#__PURE__*/ m$1(function(d) {
        return d instanceof RegExp || d instanceof Function;
    }, "isRegexOrFunction"), Ro = /*#__PURE__*/ m$1(function() {
        let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (!(Je && Je === d)) {
            if ((!d || typeof d != "object") && (d = {}), d = /*#__PURE__*/ Ee(d), wr = lu.indexOf(d.PARSER_MEDIA_TYPE) === -1 ? hu : d.PARSER_MEDIA_TYPE, pt = wr === "application/xhtml+xml" ? Ko : Ei, Y = Ht(d, "ALLOWED_TAGS") ? K({}, d.ALLOWED_TAGS, pt) : nt, Q = Ht(d, "ALLOWED_ATTR") ? K({}, d.ALLOWED_ATTR, pt) : Ft, zo = Ht(d, "ALLOWED_NAMESPACES") ? K({}, d.ALLOWED_NAMESPACES, Ko) : su, Do = Ht(d, "ADD_URI_SAFE_ATTR") ? K(/*#__PURE__*/ Ee(Ea), d.ADD_URI_SAFE_ATTR, pt) : Ea, La = Ht(d, "ADD_DATA_URI_TAGS") ? K(/*#__PURE__*/ Ee(Aa), d.ADD_DATA_URI_TAGS, pt) : Aa, Ke = Ht(d, "FORBID_CONTENTS") ? K({}, d.FORBID_CONTENTS, pt) : Ma, Ct = Ht(d, "FORBID_TAGS") ? K({}, d.FORBID_TAGS, pt) : {}, _t = Ht(d, "FORBID_ATTR") ? K({}, d.FORBID_ATTR, pt) : {}, Ze = Ht(d, "USE_PROFILES") ? d.USE_PROFILES : false, lt = d.ALLOW_ARIA_ATTR !== false, v = d.ALLOW_DATA_ATTR !== false, H = d.ALLOW_UNKNOWN_PROTOCOLS || false, V = d.ALLOW_SELF_CLOSE_IN_ATTR !== false, C = d.SAFE_FOR_TEMPLATES || false, mt = d.SAFE_FOR_XML !== false, J = d.WHOLE_DOCUMENT || false, It = d.RETURN_DOM || false, Le = d.RETURN_DOM_FRAGMENT || false, pi = d.RETURN_TRUSTED_TYPE || false, Tt = d.FORCE_BODY || false, Ba = d.SANITIZE_DOM !== false, Fa = d.SANITIZE_NAMED_PROPS || false, Oo = d.KEEP_CONTENT !== false, vr = d.IN_PLACE || false, rt = d.ALLOWED_URI_REGEXP || El, Qe = d.NAMESPACE || ie, yi = d.MATHML_TEXT_INTEGRATION_POINTS || yi, Ci = d.HTML_INTEGRATION_POINTS || Ci, Z = d.CUSTOM_ELEMENT_HANDLING || {}, d.CUSTOM_ELEMENT_HANDLING && Oa(d.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Z.tagNameCheck = d.CUSTOM_ELEMENT_HANDLING.tagNameCheck), d.CUSTOM_ELEMENT_HANDLING && Oa(d.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Z.attributeNameCheck = d.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), d.CUSTOM_ELEMENT_HANDLING && typeof d.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (Z.allowCustomizedBuiltInElements = d.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), C && (v = false), Le && (It = true), Ze && (Y = /*#__PURE__*/ K({}, vl), Q = [], Ze.html === true && (K(Y, Sl), K(Q, wl)), Ze.svg === true && (K(Y, Qo), K(Q, en), K(Q, Ai)), Ze.svgFilters === true && (K(Y, Jo), K(Q, en), K(Q, Ai)), Ze.mathMl === true && (K(Y, tn), K(Q, Bl), K(Q, Ai))), d.ADD_TAGS && (Y === nt && (Y = /*#__PURE__*/ Ee(Y)), K(Y, d.ADD_TAGS, pt)), d.ADD_ATTR && (Q === Ft && (Q = /*#__PURE__*/ Ee(Q)), K(Q, d.ADD_ATTR, pt)), d.ADD_URI_SAFE_ATTR && K(Do, d.ADD_URI_SAFE_ATTR, pt), d.FORBID_CONTENTS && (Ke === Ma && (Ke = /*#__PURE__*/ Ee(Ke)), K(Ke, d.FORBID_CONTENTS, pt)), Oo && (Y["#text"] = true), J && K(Y, [
                "html",
                "head",
                "body"
            ]), Y.table && (K(Y, [
                "tbody"
            ]), delete Ct.tbody), d.TRUSTED_TYPES_POLICY) {
                if (typeof d.TRUSTED_TYPES_POLICY.createHTML != "function") throw Ir('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
                if (typeof d.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw Ir('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
                M = d.TRUSTED_TYPES_POLICY, P = /*#__PURE__*/ M.createHTML("");
            } else M === void 0 && (M = /*#__PURE__*/ nf(g, n)), M !== null && typeof P == "string" && (P = /*#__PURE__*/ M.createHTML(""));
            Et && Et(d), Je = d;
        }
    }, "_parseConfig"), Da = /*#__PURE__*/ K({}, [
        ...Qo,
        ...Jo,
        ...Vu
    ]), Ia = /*#__PURE__*/ K({}, [
        ...tn,
        ...Xu
    ]), uu = /*#__PURE__*/ m$1(function(d) {
        let _ = /*#__PURE__*/ O(d);
        (!_ || !_.tagName) && (_ = {
            namespaceURI: Qe,
            tagName: "template"
        });
        let D = /*#__PURE__*/ Ei(d.tagName), at = /*#__PURE__*/ Ei(_.tagName);
        return zo[d.namespaceURI] ? d.namespaceURI === xi ? _.namespaceURI === ie ? D === "svg" : _.namespaceURI === gi ? D === "svg" && (at === "annotation-xml" || yi[at]) : !!Da[D] : d.namespaceURI === gi ? _.namespaceURI === ie ? D === "math" : _.namespaceURI === xi ? D === "math" && Ci[at] : !!Ia[D] : d.namespaceURI === ie ? _.namespaceURI === xi && !Ci[at] || _.namespaceURI === gi && !yi[at] ? false : !Ia[D] && (au[D] || !Da[D]) : !!(wr === "application/xhtml+xml" && zo[d.namespaceURI]) : false;
    }, "_checkValidNamespace"), jt = /*#__PURE__*/ m$1(function(d) {
        Or(e.removed, {
            element: d
        });
        try {
            O(d).removeChild(d);
        } catch  {
            W(d);
        }
    }, "_forceRemove"), _i = /*#__PURE__*/ m$1(function(d, _) {
        try {
            Or(e.removed, {
                attribute: /*#__PURE__*/ _.getAttributeNode(d),
                from: _
            });
        } catch  {
            Or(e.removed, {
                attribute: null,
                from: _
            });
        }
        if (_.removeAttribute(d), d === "is") if (It || Le) try {
            jt(_);
        } catch  {}
        else try {
            _.setAttribute(d, "");
        } catch  {}
    }, "_removeAttribute"), za = /*#__PURE__*/ m$1(function(d) {
        let _ = null, D = null;
        if (Tt) d = "<remove></remove>" + d;
        else {
            let kt = /*#__PURE__*/ kl(d, /^[\r\n\t ]+/);
            D = kt && kt[0];
        }
        wr === "application/xhtml+xml" && Qe === ie && (d = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + d + "</body></html>");
        let at = M ? M.createHTML(d) : d;
        if (Qe === ie) try {
            _ = /*#__PURE__*/ new f().parseFromString(at, wr);
        } catch  {}
        if (!_ || !_.documentElement) {
            _ = /*#__PURE__*/ w.createDocument(Qe, "template", null);
            try {
                _.documentElement.innerHTML = Io ? P : at;
            } catch  {}
        }
        let Bt = _.body || _.documentElement;
        return d && D && Bt.insertBefore(/*#__PURE__*/ r.createTextNode(D), Bt.childNodes[0] || null), Qe === ie ? $.call(_, J ? "html" : "body")[0] : J ? _.documentElement : Bt;
    }, "_initDocument"), Ra = /*#__PURE__*/ m$1(function(d) {
        return X.call(d.ownerDocument || d, d, h.SHOW_ELEMENT | h.SHOW_COMMENT | h.SHOW_TEXT | h.SHOW_PROCESSING_INSTRUCTION | h.SHOW_CDATA_SECTION, null);
    }, "_createNodeIterator"), No = /*#__PURE__*/ m$1(function(d) {
        return d instanceof p && (typeof d.nodeName != "string" || typeof d.textContent != "string" || typeof d.removeChild != "function" || !(d.attributes instanceof u) || typeof d.removeAttribute != "function" || typeof d.setAttribute != "function" || typeof d.namespaceURI != "string" || typeof d.insertBefore != "function" || typeof d.hasChildNodes != "function");
    }, "_isClobbered"), Na = /*#__PURE__*/ m$1(function(d) {
        return typeof l == "function" && d instanceof l;
    }, "_isNode");
    function oe(N, d, _) {
        Li(N, (D)=>{
            D.call(e, d, _, Je);
        });
    }
    m$1(oe, "_executeHooks");
    let qa = /*#__PURE__*/ m$1(function(d) {
        let _ = null;
        if (oe(B.beforeSanitizeElements, d, null), No(d)) return jt(d), true;
        let D = /*#__PURE__*/ pt(d.nodeName);
        if (oe(B.uponSanitizeElement, d, {
            tagName: D,
            allowedTags: Y
        }), d.hasChildNodes() && !Na(d.firstElementChild) && At(/<[/\w]/g, d.innerHTML) && At(/<[/\w]/g, d.textContent) || d.nodeType === Rr.progressingInstruction || mt && d.nodeType === Rr.comment && At(/<[/\w]/g, d.data)) return jt(d), true;
        if (!Y[D] || Ct[D]) {
            if (!Ct[D] && Wa(D) && (Z.tagNameCheck instanceof RegExp && At(Z.tagNameCheck, D) || Z.tagNameCheck instanceof Function && Z.tagNameCheck(D))) return false;
            if (Oo && !Ke[D]) {
                let at = O(d) || d.parentNode, Bt = G(d) || d.childNodes;
                if (Bt && at) {
                    let kt = Bt.length;
                    for(let zt = kt - 1; zt >= 0; --zt){
                        let Zt = /*#__PURE__*/ A(Bt[zt], true);
                        Zt.__removalCount = (d.__removalCount || 0) + 1, at.insertBefore(Zt, /*#__PURE__*/ q(d));
                    }
                }
            }
            return jt(d), true;
        }
        return d instanceof c && !uu(d) || (D === "noscript" || D === "noembed" || D === "noframes") && At(/<\/no(script|embed|frames)/i, d.innerHTML) ? (jt(d), true) : (C && d.nodeType === Rr.text && (_ = d.textContent, Li([
            k,
            x,
            y
        ], (at)=>{
            _ = /*#__PURE__*/ Dr(_, at, " ");
        }), d.textContent !== _ && (Or(e.removed, {
            element: /*#__PURE__*/ d.cloneNode()
        }), d.textContent = _)), oe(B.afterSanitizeElements, d, null), false);
    }, "_sanitizeElements"), Pa = /*#__PURE__*/ m$1(function(d, _, D) {
        if (Ba && (_ === "id" || _ === "name") && (D in r || D in cu)) return false;
        if (!(v && !_t[_] && At(L, _))) {
            if (!(lt && At(S, _))) {
                if (!Q[_] || _t[_]) {
                    if (!(Wa(d) && (Z.tagNameCheck instanceof RegExp && At(Z.tagNameCheck, d) || Z.tagNameCheck instanceof Function && Z.tagNameCheck(d)) && (Z.attributeNameCheck instanceof RegExp && At(Z.attributeNameCheck, _) || Z.attributeNameCheck instanceof Function && Z.attributeNameCheck(_)) || _ === "is" && Z.allowCustomizedBuiltInElements && (Z.tagNameCheck instanceof RegExp && At(Z.tagNameCheck, D) || Z.tagNameCheck instanceof Function && Z.tagNameCheck(D)))) return false;
                } else if (!Do[_]) {
                    if (!At(rt, /*#__PURE__*/ Dr(D, I, ""))) {
                        if (!((_ === "src" || _ === "xlink:href" || _ === "href") && d !== "script" && Hu(D, "data:") === 0 && La[d])) {
                            if (!(H && !At(z, /*#__PURE__*/ Dr(D, I, "")))) {
                                if (D) return false;
                            }
                        }
                    }
                }
            }
        }
        return true;
    }, "_isValidAttribute"), Wa = /*#__PURE__*/ m$1(function(d) {
        return d !== "annotation-xml" && kl(d, U);
    }, "_isBasicCustomElement"), $a = /*#__PURE__*/ m$1(function(d) {
        oe(B.beforeSanitizeAttributes, d, null);
        let { attributes: _ } = d;
        if (!_ || No(d)) return;
        let D = {
            attrName: "",
            attrValue: "",
            keepAttr: true,
            allowedAttributes: Q,
            forceKeepAttr: void 0
        }, at = _.length;
        for(; at--;){
            let Bt = _[at], { name: kt, namespaceURI: zt, value: Zt } = Bt, Br = /*#__PURE__*/ pt(kt), Mt = kt === "value" ? Zt : Uu(Zt);
            if (D.attrName = Br, D.attrValue = Mt, D.keepAttr = true, D.forceKeepAttr = void 0, oe(B.uponSanitizeAttribute, d, D), Mt = D.attrValue, Fa && (Br === "id" || Br === "name") && (_i(kt, d), Mt = nu + Mt), mt && At(/((--!?|])>)|<\/(style|title)/i, Mt)) {
                _i(kt, d);
                continue;
            }
            if (D.forceKeepAttr || (_i(kt, d), !D.keepAttr)) continue;
            if (!V && At(/\/>/i, Mt)) {
                _i(kt, d);
                continue;
            }
            C && Li([
                k,
                x,
                y
            ], (Ua)=>{
                Mt = /*#__PURE__*/ Dr(Mt, Ua, " ");
            });
            let Ha = /*#__PURE__*/ pt(d.nodeName);
            if (Pa(Ha, Br, Mt)) {
                if (M && typeof g == "object" && typeof g.getAttributeType == "function" && !zt) switch(g.getAttributeType(Ha, Br)){
                    case "TrustedHTML":
                        {
                            Mt = /*#__PURE__*/ M.createHTML(Mt);
                            break;
                        }
                    case "TrustedScriptURL":
                        {
                            Mt = /*#__PURE__*/ M.createScriptURL(Mt);
                            break;
                        }
                }
                try {
                    zt ? d.setAttributeNS(zt, kt, Mt) : d.setAttribute(kt, Mt), No(d) ? jt(d) : Tl(e.removed);
                } catch  {}
            }
        }
        oe(B.afterSanitizeAttributes, d, null);
    }, "_sanitizeAttributes"), fu = /*#__PURE__*/ m$1(function N(d) {
        let _ = null, D = /*#__PURE__*/ Ra(d);
        for(oe(B.beforeSanitizeShadowDOM, d, null); _ = /*#__PURE__*/ D.nextNode();)oe(B.uponSanitizeShadowNode, _, null), qa(_), $a(_), _.content instanceof s && N(_.content);
        oe(B.afterSanitizeShadowDOM, d, null);
    }, "_sanitizeShadowDOM");
    return e.sanitize = function(N) {
        let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ = null, D = null, at = null, Bt = null;
        if (Io = !N, Io && (N = "<!-->"), typeof N != "string" && !Na(N)) if (typeof N.toString == "function") {
            if (N = /*#__PURE__*/ N.toString(), typeof N != "string") throw Ir("dirty is not a string, aborting");
        } else throw Ir("toString is not a function");
        if (!e.isSupported) return N;
        if (bt || Ro(d), e.removed = [], typeof N == "string" && (vr = false), vr) {
            if (N.nodeName) {
                let Zt = /*#__PURE__*/ pt(N.nodeName);
                if (!Y[Zt] || Ct[Zt]) throw Ir("root node is forbidden and cannot be sanitized in-place");
            }
        } else if (N instanceof l) _ = /*#__PURE__*/ za("<!---->"), D = /*#__PURE__*/ _.ownerDocument.importNode(N, true), D.nodeType === Rr.element && D.nodeName === "BODY" || D.nodeName === "HTML" ? _ = D : _.appendChild(D);
        else {
            if (!It && !C && !J && N.indexOf("<") === -1) return M && pi ? M.createHTML(N) : N;
            if (_ = /*#__PURE__*/ za(N), !_) return It ? null : pi ? P : "";
        }
        _ && Tt && jt(_.firstChild);
        let kt = /*#__PURE__*/ Ra(vr ? N : _);
        for(; at = /*#__PURE__*/ kt.nextNode();)qa(at), $a(at), at.content instanceof s && fu(at.content);
        if (vr) return N;
        if (It) {
            if (Le) for(Bt = /*#__PURE__*/ j.call(_.ownerDocument); _.firstChild;)Bt.appendChild(_.firstChild);
            else Bt = _;
            return (Q.shadowroot || Q.shadowrootmode) && (Bt = /*#__PURE__*/ it.call(o, Bt, true)), Bt;
        }
        let zt = J ? _.outerHTML : _.innerHTML;
        return J && Y["!doctype"] && _.ownerDocument && _.ownerDocument.doctype && _.ownerDocument.doctype.name && At(Ol, _.ownerDocument.doctype.name) && (zt = "<!DOCTYPE " + _.ownerDocument.doctype.name + `>
` + zt), C && Li([
            k,
            x,
            y
        ], (Zt)=>{
            zt = /*#__PURE__*/ Dr(zt, Zt, " ");
        }), M && pi ? M.createHTML(zt) : zt;
    }, e.setConfig = function() {
        let N = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        Ro(N), bt = true;
    }, e.clearConfig = function() {
        Je = null, bt = false;
    }, e.isValidAttribute = function(N, d, _) {
        Je || Ro({});
        let D = /*#__PURE__*/ pt(N), at = /*#__PURE__*/ pt(d);
        return Pa(D, at, _);
    }, e.addHook = function(N, d) {
        typeof d == "function" && Or(B[N], d);
    }, e.removeHook = function(N, d) {
        if (d !== void 0) {
            let _ = /*#__PURE__*/ Wu(B[N], d);
            return _ === -1 ? void 0 : $u(B[N], _, 1)[0];
        }
        return Tl(B[N]);
    }, e.removeHooks = function(N) {
        B[N] = [];
    }, e.removeAllHooks = function() {
        B = /*#__PURE__*/ Ml();
    }, e;
}
m$1(Dl, "createDOMPurify");
var er = /*#__PURE__*/ Dl();
var Nr = /<br\s*\/?>/gi, sf = /*#__PURE__*/ m$1((t)=>t ? ql(t).replace(/\\n/g, "#br#").split("#br#") : [
        ""
    ], "getRows"), af = /*#__PURE__*/ (()=>{
    let t = false;
    return ()=>{
        t || (lf(), t = true);
    };
})();
function lf() {
    let t = "data-temp-href-target";
    er.addHook("beforeSanitizeAttributes", (e)=>{
        e instanceof Element && e.tagName === "A" && e.hasAttribute("target") && e.setAttribute(t, e.getAttribute("target") ?? "");
    }), er.addHook("afterSanitizeAttributes", (e)=>{
        e instanceof Element && e.tagName === "A" && e.hasAttribute(t) && (e.setAttribute("target", e.getAttribute(t) ?? ""), e.removeAttribute(t), e.getAttribute("target") === "_blank" && e.setAttribute("rel", "noopener"));
    });
}
m$1(lf, "setupDompurifyHooks");
var Nl = /*#__PURE__*/ m$1((t)=>(af(), er.sanitize(t)), "removeScript"), Il = /*#__PURE__*/ m$1((t, e)=>{
    if (e.flowchart?.htmlLabels !== false) {
        let r = e.securityLevel;
        r === "antiscript" || r === "strict" ? t = /*#__PURE__*/ Nl(t) : r !== "loose" && (t = /*#__PURE__*/ ql(t), t = /*#__PURE__*/ t.replace(/</g, "&lt;").replace(/>/g, "&gt;"), t = /*#__PURE__*/ t.replace(/=/g, "&equals;"), t = /*#__PURE__*/ ff(t));
    }
    return t;
}, "sanitizeMore"), Oe = /*#__PURE__*/ m$1((t, e)=>t && (e.dompurifyConfig ? t = /*#__PURE__*/ er.sanitize(/*#__PURE__*/ Il(t, e), e.dompurifyConfig).toString() : t = /*#__PURE__*/ er.sanitize(/*#__PURE__*/ Il(t, e), {
        FORBID_TAGS: [
            "style"
        ]
    }).toString(), t), "sanitizeText"), hf = /*#__PURE__*/ m$1((t, e)=>typeof t == "string" ? Oe(t, e) : t.flat().map((r)=>Oe(r, e)), "sanitizeTextOrArray"), cf = /*#__PURE__*/ m$1((t)=>Nr.test(t), "hasBreaks"), uf = /*#__PURE__*/ m$1((t)=>t.split(Nr), "splitBreaks"), ff = /*#__PURE__*/ m$1((t)=>t.replace(/#br#/g, "<br/>"), "placeholderToBreak"), ql = /*#__PURE__*/ m$1((t)=>t.replace(Nr, "#br#"), "breakToPlaceholder"), df = /*#__PURE__*/ m$1((t)=>{
    let e = "";
    return t && (e = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, e = /*#__PURE__*/ e.replaceAll(/\(/g, "\\("), e = /*#__PURE__*/ e.replaceAll(/\)/g, "\\)")), e;
}, "getUrl"), mf = /*#__PURE__*/ m$1((t)=>!(t === false || [
        "false",
        "null",
        "0"
    ].includes(/*#__PURE__*/ String(t).trim().toLowerCase())), "evaluate"), pf = /*#__PURE__*/ m$1(function() {
    for(var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++){
        t[_key] = arguments[_key];
    }
    let e = /*#__PURE__*/ t.filter((r)=>!isNaN(r));
    return Math.max(...e);
}, "getMax"), gf = /*#__PURE__*/ m$1(function() {
    for(var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++){
        t[_key] = arguments[_key];
    }
    let e = /*#__PURE__*/ t.filter((r)=>!isNaN(r));
    return Math.min(...e);
}, "getMin"), mC = /*#__PURE__*/ m$1(function(t) {
    let e = /*#__PURE__*/ t.split(/(,)/), r = [];
    for(let o = 0; o < e.length; o++){
        let n = e[o];
        if (n === "," && o > 0 && o + 1 < e.length) {
            let s = e[o - 1], a = e[o + 1];
            xf(s, a) && (n = s + "," + a, o++, r.pop());
        }
        r.push(/*#__PURE__*/ yf(n));
    }
    return r.join("");
}, "parseGenericTypes"), nn = /*#__PURE__*/ m$1((t, e)=>Math.max(0, t.split(e).length - 1), "countOccurrence"), xf = /*#__PURE__*/ m$1((t, e)=>{
    let r = /*#__PURE__*/ nn(t, "~"), o = /*#__PURE__*/ nn(e, "~");
    return r === 1 && o === 1;
}, "shouldCombineSets"), yf = /*#__PURE__*/ m$1((t)=>{
    let e = /*#__PURE__*/ nn(t, "~"), r = false;
    if (e <= 1) return t;
    e % 2 !== 0 && t.startsWith("~") && (t = /*#__PURE__*/ t.substring(1), r = true);
    let o = [
        ...t
    ], n = /*#__PURE__*/ o.indexOf("~"), s = /*#__PURE__*/ o.lastIndexOf("~");
    for(; n !== -1 && s !== -1 && n !== s;)o[n] = "<", o[s] = ">", n = /*#__PURE__*/ o.indexOf("~"), s = /*#__PURE__*/ o.lastIndexOf("~");
    return r && o.unshift("~"), o.join("");
}, "processSet"), zl = /*#__PURE__*/ m$1(()=>window.MathMLElement !== void 0, "isMathMLSupported"), sn = /\$\$(.*)\$\$/g, Rl = /*#__PURE__*/ m$1((t)=>(t.match(sn)?.length ?? 0) > 0, "hasKatex"), pC = /*#__PURE__*/ m$1(async (t, e)=>{
    t = await Cf(t, e);
    let r = /*#__PURE__*/ document.createElement("div");
    r.innerHTML = t, r.id = "katex-temp", r.style.visibility = "hidden", r.style.position = "absolute", r.style.top = "0", document.querySelector("body")?.insertAdjacentElement("beforeend", r);
    let n = {
        width: r.clientWidth,
        height: r.clientHeight
    };
    return r.remove(), n;
}, "calculateMathMLDimensions"), Cf = /*#__PURE__*/ m$1(async (t, e)=>{
    if (!Rl(t)) return t;
    if (!(zl() || e.legacyMathML || e.forceLegacyMathML)) return t.replace(sn, "MathML is unsupported in this environment.");
    let { default: r } = await __vitePreload(async ()=>{
        const { default: r } = await import('./vendor-min-mermaid~katex-SWYD7GD6.CzzmMwNd.chunk.js');
        return {
            default: r
        };
    }, true ? __vite__mapDeps([0,1]) : void 0), o = e.forceLegacyMathML || !zl() && e.legacyMathML ? "htmlAndMathml" : "mathml";
    return t.split(Nr).map((n)=>Rl(n) ? `<div style="display: flex; align-items: center; justify-content: center; white-space: nowrap;">${n}</div>` : `<div>${n}</div>`).join("").replace(sn, (n, s)=>r.renderToString(s, {
            throwOnError: true,
            displayMode: true,
            output: o
        }).replace(/\n/g, " ").replace(/<annotation.*<\/annotation>/g, ""));
}, "renderKatex"), gC = {
    getRows: sf,
    sanitizeText: Oe,
    sanitizeTextOrArray: hf,
    hasBreaks: cf,
    splitBreaks: uf,
    lineBreakRegex: Nr,
    removeScript: Nl,
    getUrl: df,
    evaluate: mf,
    getMax: pf,
    getMin: gf
};
var _f = /*#__PURE__*/ m$1(function(t, e) {
    for (let r of e)t.attr(r[0], r[1]);
}, "d3Attrs"), bf = /*#__PURE__*/ m$1(function(t, e, r) {
    let o = new Map;
    return r ? (o.set("width", "100%"), o.set("style", `max-width: ${e}px;`)) : (o.set("height", t), o.set("width", e)), o;
}, "calculateSvgSizeAttrs"), Tf = /*#__PURE__*/ m$1(function(t, e, r, o) {
    let n = /*#__PURE__*/ bf(e, r, o);
    _f(t, n);
}, "configureSvgSize"), Pl = /*#__PURE__*/ m$1(function(t, e, r, o) {
    let n = /*#__PURE__*/ e.node().getBBox(), s = n.width, a = n.height;
    tt.info(`SVG bounds: ${s}x${a}`, n);
    let l = 0, c = 0;
    tt.info(`Graph bounds: ${l}x${c}`, t), l = s + r * 2, c = a + r * 2, tt.info(`Calculated bounds: ${l}x${c}`), Tf(e, c, l, o);
    let h = `${n.x - r} ${n.y - r} ${n.width + 2 * r} ${n.height + 2 * r}`;
    e.attr("viewBox", h);
}, "setupGraphViewbox");
var Oi = {}, kf = /*#__PURE__*/ m$1((t, e, r)=>{
    let o = "";
    return t in Oi && Oi[t] ? o = /*#__PURE__*/ Oi[t](r) : tt.warn(`No theme found for ${t}`), ` & {
    font-family: ${r.fontFamily};
    font-size: ${r.fontSize};
    fill: ${r.textColor}
  }
  @keyframes edge-animation-frame {
    from {
      stroke-dashoffset: 0;
    }
  }
  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
  & .edge-animation-slow {
    stroke-dasharray: 9,5 !important;
    stroke-dashoffset: 900;
    animation: dash 50s linear infinite;
    stroke-linecap: round;
  }
  & .edge-animation-fast {
    stroke-dasharray: 9,5 !important;
    stroke-dashoffset: 900;
    animation: dash 20s linear infinite;
    stroke-linecap: round;
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

  ${o}

  ${e}
`;
}, "getStyles"), Wl = /*#__PURE__*/ m$1((t, e)=>{
    e !== void 0 && (Oi[t] = e);
}, "addStylesForDiagram"), kC = kf;
var un = {};
o(un, {
    clear: ()=>Sf,
    getAccDescription: ()=>Ff,
    getAccTitle: ()=>wf,
    getDiagramTitle: ()=>Lf,
    setAccDescription: ()=>Bf,
    setAccTitle: ()=>vf,
    setDiagramTitle: ()=>Mf
});
var an = "", ln = "", hn = "", cn = /*#__PURE__*/ m$1((t)=>Oe(t, /*#__PURE__*/ Er()), "sanitizeText"), Sf = /*#__PURE__*/ m$1(()=>{
    an = "", hn = "", ln = "";
}, "clear"), vf = /*#__PURE__*/ m$1((t)=>{
    an = /*#__PURE__*/ cn(t).replace(/^\s+/g, "");
}, "setAccTitle"), wf = /*#__PURE__*/ m$1(()=>an, "getAccTitle"), Bf = /*#__PURE__*/ m$1((t)=>{
    hn = /*#__PURE__*/ cn(t).replace(/\n\s+/g, `
`);
}, "setAccDescription"), Ff = /*#__PURE__*/ m$1(()=>hn, "getAccDescription"), Mf = /*#__PURE__*/ m$1((t)=>{
    ln = /*#__PURE__*/ cn(t);
}, "setDiagramTitle"), Lf = /*#__PURE__*/ m$1(()=>ln, "getDiagramTitle");
var $l = tt, Af = Va, Hl = Er, IC = yl, zC = Ar;
var Ef = /*#__PURE__*/ m$1((t)=>Oe(t, /*#__PURE__*/ Hl()), "sanitizeText"), Of = Pl, Df = /*#__PURE__*/ m$1(()=>un, "getCommonDb"), Di = {}, RC = /*#__PURE__*/ m$1((t, e, r)=>{
    Di[t] && $l.warn(`Diagram with id ${t} already registered. Overwriting.`), Di[t] = e, r && Wo(t, r), Wl(t, e.styles), e.injectUtils?.($l, Af, Hl, Ef, Of, Df(), ()=>{});
}, "registerDiagram"), NC = /*#__PURE__*/ m$1((t)=>{
    if (t in Di) return Di[t];
    throw new fn(t);
}, "getDiagram"), fn = class extends Error {
    static #_ = m$1(this, "DiagramNotFoundError");
    constructor(e){
        super(`Diagram ${e} not found.`);
    }
};
function Ul(t, e) {
    let r;
    if (e === void 0) for (let o of t)o != null && (r < o || r === void 0 && o >= o) && (r = o);
    else {
        let o = -1;
        for (let n of t)(n = /*#__PURE__*/ e(n, ++o, t)) != null && (r < n || r === void 0 && n >= n) && (r = n);
    }
    return r;
}
m$1(Ul, "max");
function Yl(t, e) {
    let r;
    if (e === void 0) for (let o of t)o != null && (r > o || r === void 0 && o >= o) && (r = o);
    else {
        let o = -1;
        for (let n of t)(n = /*#__PURE__*/ e(n, ++o, t)) != null && (r > n || r === void 0 && n >= n) && (r = n);
    }
    return r;
}
m$1(Yl, "min");
function De(t, e) {
    return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
m$1(De, "ascending");
function dn(t, e) {
    return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
m$1(dn, "descending");
function Ie(t) {
    let e, r, o;
    t.length !== 2 ? (e = De, r = /*#__PURE__*/ m$1((l, c)=>De(/*#__PURE__*/ t(l), c), "compare2"), o = /*#__PURE__*/ m$1((l, c)=>t(l) - c, "delta")) : (e = t === De || t === dn ? t : If, r = t, o = t);
    function n(l, c) {
        let h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : l.length;
        if (h < u) {
            if (e(c, c) !== 0) return u;
            do {
                let p = h + u >>> 1;
                r(l[p], c) < 0 ? h = p + 1 : u = p;
            }while (h < u);
        }
        return h;
    }
    m$1(n, "left");
    function s(l, c) {
        let h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : l.length;
        if (h < u) {
            if (e(c, c) !== 0) return u;
            do {
                let p = h + u >>> 1;
                r(l[p], c) <= 0 ? h = p + 1 : u = p;
            }while (h < u);
        }
        return h;
    }
    m$1(s, "right");
    function a(l, c) {
        let h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : l.length;
        let p = /*#__PURE__*/ n(l, c, h, u - 1);
        return p > h && o(l[p - 1], c) > -o(l[p], c) ? p - 1 : p;
    }
    return m$1(a, "center"), {
        left: n,
        center: a,
        right: s
    };
}
m$1(Ie, "bisector");
function If() {
    return 0;
}
m$1(If, "zero");
function mn(t) {
    return t === null ? NaN : +t;
}
m$1(mn, "number");
var Gl = /*#__PURE__*/ Ie(De), Vl = Gl.right;
Gl.left;
Ie(mn).center;
var pn = Vl;
var rr = class extends Map {
    static #_ = m$1(this, "InternMap");
    constructor(e, r = Pf){
        if (super(), Object.defineProperties(this, {
            _intern: {
                value: new Map
            },
            _key: {
                value: r
            }
        }), e != null) for (let [o, n] of e)this.set(o, n);
    }
    get(e) {
        return super.get(/*#__PURE__*/ Xl(this, e));
    }
    has(e) {
        return super.has(/*#__PURE__*/ Xl(this, e));
    }
    set(e, r) {
        return super.set(/*#__PURE__*/ Nf(this, e), r);
    }
    delete(e) {
        return super.delete(/*#__PURE__*/ qf(this, e));
    }
};
function Xl(param, r) {
    let { _intern: t, _key: e } = param;
    let o = /*#__PURE__*/ e(r);
    return t.has(o) ? t.get(o) : r;
}
m$1(Xl, "intern_get");
function Nf(param, r) {
    let { _intern: t, _key: e } = param;
    let o = /*#__PURE__*/ e(r);
    return t.has(o) ? t.get(o) : (t.set(o, r), r);
}
m$1(Nf, "intern_set");
function qf(param, r) {
    let { _intern: t, _key: e } = param;
    let o = /*#__PURE__*/ e(r);
    return t.has(o) && (r = /*#__PURE__*/ t.get(o), t.delete(o)), r;
}
m$1(qf, "intern_delete");
function Pf(t) {
    return t !== null && typeof t == "object" ? t.valueOf() : t;
}
m$1(Pf, "keyof");
var Wf = /*#__PURE__*/ Math.sqrt(50), $f = /*#__PURE__*/ Math.sqrt(10), Hf = /*#__PURE__*/ Math.sqrt(2);
function Ii(t, e, r) {
    let o = (e - t) / Math.max(0, r), n = /*#__PURE__*/ Math.floor(/*#__PURE__*/ Math.log10(o)), s = o / Math.pow(10, n), a = s >= Wf ? 10 : s >= $f ? 5 : s >= Hf ? 2 : 1, l, c, h;
    return n < 0 ? (h = Math.pow(10, -n) / a, l = /*#__PURE__*/ Math.round(t * h), c = /*#__PURE__*/ Math.round(e * h), l / h < t && ++l, c / h > e && --c, h = -h) : (h = Math.pow(10, n) * a, l = /*#__PURE__*/ Math.round(t / h), c = /*#__PURE__*/ Math.round(e / h), l * h < t && ++l, c * h > e && --c), c < l && .5 <= r && r < 2 ? Ii(t, e, r * 2) : [
        l,
        c,
        h
    ];
}
m$1(Ii, "tickSpec");
function zi(t, e, r) {
    if (e = +e, t = +t, r = +r, !(r > 0)) return [];
    if (t === e) return [
        t
    ];
    let o = e < t, [n, s, a] = o ? Ii(e, t, r) : Ii(t, e, r);
    if (!(s >= n)) return [];
    let l = s - n + 1, c = new Array(l);
    if (o) if (a < 0) for(let h = 0; h < l; ++h)c[h] = (s - h) / -a;
    else for(let h = 0; h < l; ++h)c[h] = (s - h) * a;
    else if (a < 0) for(let h = 0; h < l; ++h)c[h] = (n + h) / -a;
    else for(let h = 0; h < l; ++h)c[h] = (n + h) * a;
    return c;
}
m$1(zi, "ticks");
function qr(t, e, r) {
    return e = +e, t = +t, r = +r, Ii(t, e, r)[2];
}
m$1(qr, "tickIncrement");
function ir(t, e, r) {
    e = +e, t = +t, r = +r;
    let o = e < t, n = o ? qr(e, t, r) : qr(t, e, r);
    return (o ? -1 : 1) * (n < 0 ? 1 / -n : n);
}
m$1(ir, "tickStep");
function Ri(t, e, r) {
    t = +t, e = +e, r = (n = arguments.length) < 2 ? (e = t, t = 0, 1) : n < 3 ? 1 : +r;
    for(var o = -1, n = Math.max(0, /*#__PURE__*/ Math.ceil((e - t) / r)) | 0, s = new Array(n); ++o < n;)s[o] = t + o * r;
    return s;
}
m$1(Ri, "range");
function gn(t) {
    return t;
}
m$1(gn, "default");
var qi = 1, xn = 2, yn = 3, Ni = 4, jl = 1e-6;
function Uf(t) {
    return "translate(" + t + ",0)";
}
m$1(Uf, "translateX");
function Yf(t) {
    return "translate(0," + t + ")";
}
m$1(Yf, "translateY");
function Gf(t) {
    return (e)=>+t(e);
}
m$1(Gf, "number");
function Vf(t, e) {
    return e = Math.max(0, t.bandwidth() - e * 2) / 2, t.round() && (e = /*#__PURE__*/ Math.round(e)), (r)=>+t(r) + e;
}
m$1(Vf, "center");
function Xf() {
    return !this.__axis;
}
m$1(Xf, "entering");
function Zl(t, e) {
    var r = [], o = null, n = null, s = 6, a = 6, l = 3, c = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : .5, h = t === qi || t === Ni ? -1 : 1, u = t === Ni || t === xn ? "x" : "y", p = t === qi || t === yn ? Uf : Yf;
    function f(g) {
        var T = o ?? (e.ticks ? e.ticks.apply(e, r) : e.domain()), A = n ?? (e.tickFormat ? e.tickFormat.apply(e, r) : gn), W = Math.max(s, 0) + l, q = /*#__PURE__*/ e.range(), G = +q[0] + c, O = +q[q.length - 1] + c, M = /*#__PURE__*/ (e.bandwidth ? Vf : Gf)(/*#__PURE__*/ e.copy(), c), P = g.selection ? g.selection() : g, w = /*#__PURE__*/ P.selectAll(".domain").data([
            null
        ]), X = /*#__PURE__*/ P.selectAll(".tick").data(T, e).order(), j = /*#__PURE__*/ X.exit(), $ = /*#__PURE__*/ X.enter().append("g").attr("class", "tick"), it = /*#__PURE__*/ X.select("line"), B = /*#__PURE__*/ X.select("text");
        w = /*#__PURE__*/ w.merge(/*#__PURE__*/ w.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), X = /*#__PURE__*/ X.merge($), it = /*#__PURE__*/ it.merge(/*#__PURE__*/ $.append("line").attr("stroke", "currentColor").attr(u + "2", h * s)), B = /*#__PURE__*/ B.merge(/*#__PURE__*/ $.append("text").attr("fill", "currentColor").attr(u, h * W).attr("dy", t === qi ? "0em" : t === yn ? "0.71em" : "0.32em")), g !== P && (w = /*#__PURE__*/ w.transition(g), X = /*#__PURE__*/ X.transition(g), it = /*#__PURE__*/ it.transition(g), B = /*#__PURE__*/ B.transition(g), j = /*#__PURE__*/ j.transition(g).attr("opacity", jl).attr("transform", function(k) {
            return isFinite(k = /*#__PURE__*/ M(k)) ? p(k + c) : this.getAttribute("transform");
        }), $.attr("opacity", jl).attr("transform", function(k) {
            var x = this.parentNode.__axis;
            return p((x && isFinite(x = /*#__PURE__*/ x(k)) ? x : M(k)) + c);
        })), j.remove(), w.attr("d", t === Ni || t === xn ? a ? "M" + h * a + "," + G + "H" + c + "V" + O + "H" + h * a : "M" + c + "," + G + "V" + O : a ? "M" + G + "," + h * a + "V" + c + "H" + O + "V" + h * a : "M" + G + "," + c + "H" + O), X.attr("opacity", 1).attr("transform", function(k) {
            return p(M(k) + c);
        }), it.attr(u + "2", h * s), B.attr(u, h * W).text(A), P.filter(Xf).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === xn ? "start" : t === Ni ? "end" : "middle"), P.each(function() {
            this.__axis = M;
        });
    }
    return m$1(f, "axis"), f.scale = function(g) {
        return arguments.length ? (e = g, f) : e;
    }, f.ticks = function() {
        return r = /*#__PURE__*/ Array.from(arguments), f;
    }, f.tickArguments = function(g) {
        return arguments.length ? (r = g == null ? [] : Array.from(g), f) : r.slice();
    }, f.tickValues = function(g) {
        return arguments.length ? (o = g == null ? null : Array.from(g), f) : o && o.slice();
    }, f.tickFormat = function(g) {
        return arguments.length ? (n = g, f) : n;
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
m$1(Zl, "axis");
function jf(t) {
    return Zl(qi, t);
}
m$1(jf, "axisTop");
function Zf(t) {
    return Zl(yn, t);
}
m$1(Zf, "axisBottom");
function Kf() {}
m$1(Kf, "none");
function Ce(t) {
    return t == null ? Kf : function() {
        return this.querySelector(t);
    };
}
m$1(Ce, "default");
function Cn(t) {
    typeof t != "function" && (t = /*#__PURE__*/ Ce(t));
    for(var e = this._groups, r = e.length, o = new Array(r), n = 0; n < r; ++n)for(var s = e[n], a = s.length, l = o[n] = new Array(a), c, h, u = 0; u < a; ++u)(c = s[u]) && (h = /*#__PURE__*/ t.call(c, c.__data__, u, s)) && ("__data__" in c && (h.__data__ = c.__data__), l[u] = h);
    return new ht(o, this._parents);
}
m$1(Cn, "default");
function _n(t) {
    return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
m$1(_n, "array");
function Qf() {
    return [];
}
m$1(Qf, "empty");
function or(t) {
    return t == null ? Qf : function() {
        return this.querySelectorAll(t);
    };
}
m$1(or, "default");
function Jf(t) {
    return function() {
        return _n(/*#__PURE__*/ t.apply(this, arguments));
    };
}
m$1(Jf, "arrayAll");
function bn(t) {
    typeof t == "function" ? t = /*#__PURE__*/ Jf(t) : t = /*#__PURE__*/ or(t);
    for(var e = this._groups, r = e.length, o = [], n = [], s = 0; s < r; ++s)for(var a = e[s], l = a.length, c, h = 0; h < l; ++h)(c = a[h]) && (o.push(/*#__PURE__*/ t.call(c, c.__data__, h, a)), n.push(c));
    return new ht(o, n);
}
m$1(bn, "default");
function nr(t) {
    return function() {
        return this.matches(t);
    };
}
m$1(nr, "default");
function Pi(t) {
    return function(e) {
        return e.matches(t);
    };
}
m$1(Pi, "childMatcher");
var td = Array.prototype.find;
function ed(t) {
    return function() {
        return td.call(this.children, t);
    };
}
m$1(ed, "childFind");
function rd() {
    return this.firstElementChild;
}
m$1(rd, "childFirst");
function Tn(t) {
    return this.select(t == null ? rd : ed(typeof t == "function" ? t : Pi(t)));
}
m$1(Tn, "default");
var id = Array.prototype.filter;
function od() {
    return Array.from(this.children);
}
m$1(od, "children");
function nd(t) {
    return function() {
        return id.call(this.children, t);
    };
}
m$1(nd, "childrenFilter");
function kn(t) {
    return this.selectAll(t == null ? od : nd(typeof t == "function" ? t : Pi(t)));
}
m$1(kn, "default");
function Sn(t) {
    typeof t != "function" && (t = /*#__PURE__*/ nr(t));
    for(var e = this._groups, r = e.length, o = new Array(r), n = 0; n < r; ++n)for(var s = e[n], a = s.length, l = o[n] = [], c, h = 0; h < a; ++h)(c = s[h]) && t.call(c, c.__data__, h, s) && l.push(c);
    return new ht(o, this._parents);
}
m$1(Sn, "default");
function Pr(t) {
    return new Array(t.length);
}
m$1(Pr, "default");
function vn() {
    return new ht(this._enter || this._groups.map(Pr), this._parents);
}
m$1(vn, "default");
function Wr(t, e) {
    this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
m$1(Wr, "EnterNode");
Wr.prototype = {
    constructor: Wr,
    appendChild: /*#__PURE__*/ m$1(function(t) {
        return this._parent.insertBefore(t, this._next);
    }, "appendChild"),
    insertBefore: /*#__PURE__*/ m$1(function(t, e) {
        return this._parent.insertBefore(t, e);
    }, "insertBefore"),
    querySelector: /*#__PURE__*/ m$1(function(t) {
        return this._parent.querySelector(t);
    }, "querySelector"),
    querySelectorAll: /*#__PURE__*/ m$1(function(t) {
        return this._parent.querySelectorAll(t);
    }, "querySelectorAll")
};
function wn(t) {
    return function() {
        return t;
    };
}
m$1(wn, "default");
function sd(t, e, r, o, n, s) {
    for(var a = 0, l, c = e.length, h = s.length; a < h; ++a)(l = e[a]) ? (l.__data__ = s[a], o[a] = l) : r[a] = new Wr(t, s[a]);
    for(; a < c; ++a)(l = e[a]) && (n[a] = l);
}
m$1(sd, "bindIndex");
function ad(t, e, r, o, n, s, a) {
    var l, c, h = new Map, u = e.length, p = s.length, f = new Array(u), g;
    for(l = 0; l < u; ++l)(c = e[l]) && (f[l] = g = a.call(c, c.__data__, l, e) + "", h.has(g) ? n[l] = c : h.set(g, c));
    for(l = 0; l < p; ++l)g = a.call(t, s[l], l, s) + "", (c = /*#__PURE__*/ h.get(g)) ? (o[l] = c, c.__data__ = s[l], h.delete(g)) : r[l] = new Wr(t, s[l]);
    for(l = 0; l < u; ++l)(c = e[l]) && h.get(f[l]) === c && (n[l] = c);
}
m$1(ad, "bindKey");
function ld(t) {
    return t.__data__;
}
m$1(ld, "datum");
function Bn(t, e) {
    if (!arguments.length) return Array.from(this, ld);
    var r = e ? ad : sd, o = this._parents, n = this._groups;
    typeof t != "function" && (t = /*#__PURE__*/ wn(t));
    for(var s = n.length, a = new Array(s), l = new Array(s), c = new Array(s), h = 0; h < s; ++h){
        var u = o[h], p = n[h], f = p.length, g = /*#__PURE__*/ hd(/*#__PURE__*/ t.call(u, u && u.__data__, h, o)), T = g.length, A = l[h] = new Array(T), W = a[h] = new Array(T), q = c[h] = new Array(f);
        r(u, p, A, W, q, g, e);
        for(var G = 0, O = 0, M, P; G < T; ++G)if (M = A[G]) {
            for(G >= O && (O = G + 1); !(P = W[O]) && ++O < T;);
            M._next = P || null;
        }
    }
    return a = new ht(a, o), a._enter = l, a._exit = c, a;
}
m$1(Bn, "default");
function hd(t) {
    return typeof t == "object" && "length" in t ? t : Array.from(t);
}
m$1(hd, "arraylike");
function Fn() {
    return new ht(this._exit || this._groups.map(Pr), this._parents);
}
m$1(Fn, "default");
function Mn(t, e, r) {
    var o = /*#__PURE__*/ this.enter(), n = this, s = /*#__PURE__*/ this.exit();
    return typeof t == "function" ? (o = /*#__PURE__*/ t(o), o && (o = /*#__PURE__*/ o.selection())) : o = /*#__PURE__*/ o.append(t + ""), e != null && (n = /*#__PURE__*/ e(n), n && (n = /*#__PURE__*/ n.selection())), r == null ? s.remove() : r(s), o && n ? o.merge(n).order() : n;
}
m$1(Mn, "default");
function Ln(t) {
    for(var e = t.selection ? t.selection() : t, r = this._groups, o = e._groups, n = r.length, s = o.length, a = /*#__PURE__*/ Math.min(n, s), l = new Array(n), c = 0; c < a; ++c)for(var h = r[c], u = o[c], p = h.length, f = l[c] = new Array(p), g, T = 0; T < p; ++T)(g = h[T] || u[T]) && (f[T] = g);
    for(; c < n; ++c)l[c] = r[c];
    return new ht(l, this._parents);
}
m$1(Ln, "default");
function An() {
    for(var t = this._groups, e = -1, r = t.length; ++e < r;)for(var o = t[e], n = o.length - 1, s = o[n], a; --n >= 0;)(a = o[n]) && (s && a.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(a, s), s = a);
    return this;
}
m$1(An, "default");
function En(t) {
    t || (t = cd);
    function e(p, f) {
        return p && f ? t(p.__data__, f.__data__) : !p - !f;
    }
    m$1(e, "compareNode");
    for(var r = this._groups, o = r.length, n = new Array(o), s = 0; s < o; ++s){
        for(var a = r[s], l = a.length, c = n[s] = new Array(l), h, u = 0; u < l; ++u)(h = a[u]) && (c[u] = h);
        c.sort(e);
    }
    return new ht(n, this._parents).order();
}
m$1(En, "default");
function cd(t, e) {
    return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
m$1(cd, "ascending");
function On() {
    var t = arguments[0];
    return arguments[0] = this, t.apply(null, arguments), this;
}
m$1(On, "default");
function Dn() {
    return Array.from(this);
}
m$1(Dn, "default");
function In() {
    for(var t = this._groups, e = 0, r = t.length; e < r; ++e)for(var o = t[e], n = 0, s = o.length; n < s; ++n){
        var a = o[n];
        if (a) return a;
    }
    return null;
}
m$1(In, "default");
function zn() {
    let t = 0;
    for (let e of this)++t;
    return t;
}
m$1(zn, "default");
function Rn() {
    return !this.node();
}
m$1(Rn, "default");
function Nn(t) {
    for(var e = this._groups, r = 0, o = e.length; r < o; ++r)for(var n = e[r], s = 0, a = n.length, l; s < a; ++s)(l = n[s]) && t.call(l, l.__data__, s, n);
    return this;
}
m$1(Nn, "default");
var Wi = "http://www.w3.org/1999/xhtml", qn = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: Wi,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
};
function Qt(t) {
    var e = t += "", r = /*#__PURE__*/ e.indexOf(":");
    return r >= 0 && (e = /*#__PURE__*/ t.slice(0, r)) !== "xmlns" && (t = /*#__PURE__*/ t.slice(r + 1)), qn.hasOwnProperty(e) ? {
        space: qn[e],
        local: t
    } : t;
}
m$1(Qt, "default");
function ud(t) {
    return function() {
        this.removeAttribute(t);
    };
}
m$1(ud, "attrRemove");
function fd(t) {
    return function() {
        this.removeAttributeNS(t.space, t.local);
    };
}
m$1(fd, "attrRemoveNS");
function dd(t, e) {
    return function() {
        this.setAttribute(t, e);
    };
}
m$1(dd, "attrConstant");
function md(t, e) {
    return function() {
        this.setAttributeNS(t.space, t.local, e);
    };
}
m$1(md, "attrConstantNS");
function pd(t, e) {
    return function() {
        var r = /*#__PURE__*/ e.apply(this, arguments);
        r == null ? this.removeAttribute(t) : this.setAttribute(t, r);
    };
}
m$1(pd, "attrFunction");
function gd(t, e) {
    return function() {
        var r = /*#__PURE__*/ e.apply(this, arguments);
        r == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, r);
    };
}
m$1(gd, "attrFunctionNS");
function Pn(t, e) {
    var r = /*#__PURE__*/ Qt(t);
    if (arguments.length < 2) {
        var o = /*#__PURE__*/ this.node();
        return r.local ? o.getAttributeNS(r.space, r.local) : o.getAttribute(r);
    }
    return this.each(/*#__PURE__*/ (e == null ? r.local ? fd : ud : typeof e == "function" ? r.local ? gd : pd : r.local ? md : dd)(r, e));
}
m$1(Pn, "default");
function $r(t) {
    return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
m$1($r, "default");
function xd(t) {
    return function() {
        this.style.removeProperty(t);
    };
}
m$1(xd, "styleRemove");
function yd(t, e, r) {
    return function() {
        this.style.setProperty(t, e, r);
    };
}
m$1(yd, "styleConstant");
function Cd(t, e, r) {
    return function() {
        var o = /*#__PURE__*/ e.apply(this, arguments);
        o == null ? this.style.removeProperty(t) : this.style.setProperty(t, o, r);
    };
}
m$1(Cd, "styleFunction");
function Wn(t, e, r) {
    return arguments.length > 1 ? this.each(/*#__PURE__*/ (e == null ? xd : typeof e == "function" ? Cd : yd)(t, e, r ?? "")) : _e(/*#__PURE__*/ this.node(), t);
}
m$1(Wn, "default");
function _e(t, e) {
    return t.style.getPropertyValue(e) || $r(t).getComputedStyle(t, null).getPropertyValue(e);
}
m$1(_e, "styleValue");
function _d(t) {
    return function() {
        delete this[t];
    };
}
m$1(_d, "propertyRemove");
function bd(t, e) {
    return function() {
        this[t] = e;
    };
}
m$1(bd, "propertyConstant");
function Td(t, e) {
    return function() {
        var r = /*#__PURE__*/ e.apply(this, arguments);
        r == null ? delete this[t] : this[t] = r;
    };
}
m$1(Td, "propertyFunction");
function $n(t, e) {
    return arguments.length > 1 ? this.each(/*#__PURE__*/ (e == null ? _d : typeof e == "function" ? Td : bd)(t, e)) : this.node()[t];
}
m$1($n, "default");
function Kl(t) {
    return t.trim().split(/^|\s+/);
}
m$1(Kl, "classArray");
function Hn(t) {
    return t.classList || new Ql(t);
}
m$1(Hn, "classList");
function Ql(t) {
    this._node = t, this._names = /*#__PURE__*/ Kl(t.getAttribute("class") || "");
}
m$1(Ql, "ClassList");
Ql.prototype = {
    add: /*#__PURE__*/ m$1(function(t) {
        var e = /*#__PURE__*/ this._names.indexOf(t);
        e < 0 && (this._names.push(t), this._node.setAttribute("class", /*#__PURE__*/ this._names.join(" ")));
    }, "add"),
    remove: /*#__PURE__*/ m$1(function(t) {
        var e = /*#__PURE__*/ this._names.indexOf(t);
        e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", /*#__PURE__*/ this._names.join(" ")));
    }, "remove"),
    contains: /*#__PURE__*/ m$1(function(t) {
        return this._names.indexOf(t) >= 0;
    }, "contains")
};
function Jl(t, e) {
    for(var r = /*#__PURE__*/ Hn(t), o = -1, n = e.length; ++o < n;)r.add(e[o]);
}
m$1(Jl, "classedAdd");
function th(t, e) {
    for(var r = /*#__PURE__*/ Hn(t), o = -1, n = e.length; ++o < n;)r.remove(e[o]);
}
m$1(th, "classedRemove");
function kd(t) {
    return function() {
        Jl(this, t);
    };
}
m$1(kd, "classedTrue");
function Sd(t) {
    return function() {
        th(this, t);
    };
}
m$1(Sd, "classedFalse");
function vd(t, e) {
    return function() {
        (e.apply(this, arguments) ? Jl : th)(this, t);
    };
}
m$1(vd, "classedFunction");
function Un(t, e) {
    var r = /*#__PURE__*/ Kl(t + "");
    if (arguments.length < 2) {
        for(var o = /*#__PURE__*/ Hn(/*#__PURE__*/ this.node()), n = -1, s = r.length; ++n < s;)if (!o.contains(r[n])) return false;
        return true;
    }
    return this.each(/*#__PURE__*/ (typeof e == "function" ? vd : e ? kd : Sd)(r, e));
}
m$1(Un, "default");
function wd() {
    this.textContent = "";
}
m$1(wd, "textRemove");
function Bd(t) {
    return function() {
        this.textContent = t;
    };
}
m$1(Bd, "textConstant");
function Fd(t) {
    return function() {
        var e = /*#__PURE__*/ t.apply(this, arguments);
        this.textContent = e ?? "";
    };
}
m$1(Fd, "textFunction");
function Yn(t) {
    return arguments.length ? this.each(t == null ? wd : (typeof t == "function" ? Fd : Bd)(t)) : this.node().textContent;
}
m$1(Yn, "default");
function Md() {
    this.innerHTML = "";
}
m$1(Md, "htmlRemove");
function Ld(t) {
    return function() {
        this.innerHTML = t;
    };
}
m$1(Ld, "htmlConstant");
function Ad(t) {
    return function() {
        var e = /*#__PURE__*/ t.apply(this, arguments);
        this.innerHTML = e ?? "";
    };
}
m$1(Ad, "htmlFunction");
function Gn(t) {
    return arguments.length ? this.each(t == null ? Md : (typeof t == "function" ? Ad : Ld)(t)) : this.node().innerHTML;
}
m$1(Gn, "default");
function Ed() {
    this.nextSibling && this.parentNode.appendChild(this);
}
m$1(Ed, "raise");
function Vn() {
    return this.each(Ed);
}
m$1(Vn, "default");
function Od() {
    this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
m$1(Od, "lower");
function Xn() {
    return this.each(Od);
}
m$1(Xn, "default");
function Dd(t) {
    return function() {
        var e = this.ownerDocument, r = this.namespaceURI;
        return r === Wi && e.documentElement.namespaceURI === Wi ? e.createElement(t) : e.createElementNS(r, t);
    };
}
m$1(Dd, "creatorInherit");
function Id(t) {
    return function() {
        return this.ownerDocument.createElementNS(t.space, t.local);
    };
}
m$1(Id, "creatorFixed");
function Hr(t) {
    var e = /*#__PURE__*/ Qt(t);
    return (e.local ? Id : Dd)(e);
}
m$1(Hr, "default");
function jn(t) {
    var e = typeof t == "function" ? t : Hr(t);
    return this.select(function() {
        return this.appendChild(/*#__PURE__*/ e.apply(this, arguments));
    });
}
m$1(jn, "default");
function zd() {
    return null;
}
m$1(zd, "constantNull");
function Zn(t, e) {
    var r = typeof t == "function" ? t : Hr(t), o = e == null ? zd : typeof e == "function" ? e : Ce(e);
    return this.select(function() {
        return this.insertBefore(/*#__PURE__*/ r.apply(this, arguments), o.apply(this, arguments) || null);
    });
}
m$1(Zn, "default");
function Rd() {
    var t = this.parentNode;
    t && t.removeChild(this);
}
m$1(Rd, "remove");
function Kn() {
    return this.each(Rd);
}
m$1(Kn, "default");
function Nd() {
    var t = /*#__PURE__*/ this.cloneNode(false), e = this.parentNode;
    return e ? e.insertBefore(t, this.nextSibling) : t;
}
m$1(Nd, "selection_cloneShallow");
function qd() {
    var t = /*#__PURE__*/ this.cloneNode(true), e = this.parentNode;
    return e ? e.insertBefore(t, this.nextSibling) : t;
}
m$1(qd, "selection_cloneDeep");
function Qn(t) {
    return this.select(t ? qd : Nd);
}
m$1(Qn, "default");
function Jn(t) {
    return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
m$1(Jn, "default");
function Pd(t) {
    return function(e) {
        t.call(this, e, this.__data__);
    };
}
m$1(Pd, "contextListener");
function Wd(t) {
    return t.trim().split(/^|\s+/).map(function(e) {
        var r = "", o = /*#__PURE__*/ e.indexOf(".");
        return o >= 0 && (r = /*#__PURE__*/ e.slice(o + 1), e = /*#__PURE__*/ e.slice(0, o)), {
            type: e,
            name: r
        };
    });
}
m$1(Wd, "parseTypenames");
function $d(t) {
    return function() {
        var e = this.__on;
        if (e) {
            for(var r = 0, o = -1, n = e.length, s; r < n; ++r)s = e[r], (!t.type || s.type === t.type) && s.name === t.name ? this.removeEventListener(s.type, s.listener, s.options) : e[++o] = s;
            ++o ? e.length = o : delete this.__on;
        }
    };
}
m$1($d, "onRemove");
function Hd(t, e, r) {
    return function() {
        var o = this.__on, n, s = /*#__PURE__*/ Pd(e);
        if (o) {
            for(var a = 0, l = o.length; a < l; ++a)if ((n = o[a]).type === t.type && n.name === t.name) {
                this.removeEventListener(n.type, n.listener, n.options), this.addEventListener(n.type, n.listener = s, n.options = r), n.value = e;
                return;
            }
        }
        this.addEventListener(t.type, s, r), n = {
            type: t.type,
            name: t.name,
            value: e,
            listener: s,
            options: r
        }, o ? o.push(n) : this.__on = [
            n
        ];
    };
}
m$1(Hd, "onAdd");
function ts(t, e, r) {
    var o = /*#__PURE__*/ Wd(t + ""), n, s = o.length, a;
    if (arguments.length < 2) {
        var l = this.node().__on;
        if (l) {
            for(var c = 0, h = l.length, u; c < h; ++c)for(n = 0, u = l[c]; n < s; ++n)if ((a = o[n]).type === u.type && a.name === u.name) return u.value;
        }
        return;
    }
    for(l = e ? Hd : $d, n = 0; n < s; ++n)this.each(/*#__PURE__*/ l(o[n], e, r));
    return this;
}
m$1(ts, "default");
function eh(t, e, r) {
    var o = /*#__PURE__*/ $r(t), n = o.CustomEvent;
    typeof n == "function" ? n = new n(e, r) : (n = /*#__PURE__*/ o.document.createEvent("Event"), r ? (n.initEvent(e, r.bubbles, r.cancelable), n.detail = r.detail) : n.initEvent(e, false, false)), t.dispatchEvent(n);
}
m$1(eh, "dispatchEvent");
function Ud(t, e) {
    return function() {
        return eh(this, t, e);
    };
}
m$1(Ud, "dispatchConstant");
function Yd(t, e) {
    return function() {
        return eh(this, t, /*#__PURE__*/ e.apply(this, arguments));
    };
}
m$1(Yd, "dispatchFunction");
function es(t, e) {
    return this.each(/*#__PURE__*/ (typeof e == "function" ? Yd : Ud)(t, e));
}
m$1(es, "default");
function* rs() {
    for(var t = this._groups, e = 0, r = t.length; e < r; ++e)for(var o = t[e], n = 0, s = o.length, a; n < s; ++n)(a = o[n]) && (yield a);
}
m$1(rs, "default");
var is = [
    null
];
function ht(t, e) {
    this._groups = t, this._parents = e;
}
m$1(ht, "Selection");
function rh() {
    return new ht([
        [
            document.documentElement
        ]
    ], is);
}
m$1(rh, "selection");
function Gd() {
    return this;
}
m$1(Gd, "selection_selection");
ht.prototype = rh.prototype = {
    constructor: ht,
    select: Cn,
    selectAll: bn,
    selectChild: Tn,
    selectChildren: kn,
    filter: Sn,
    data: Bn,
    enter: vn,
    exit: Fn,
    join: Mn,
    merge: Ln,
    selection: Gd,
    order: An,
    sort: En,
    call: On,
    nodes: Dn,
    node: In,
    size: zn,
    empty: Rn,
    each: Nn,
    attr: Pn,
    style: Wn,
    property: $n,
    classed: Un,
    text: Yn,
    html: Gn,
    raise: Vn,
    lower: Xn,
    append: jn,
    insert: Zn,
    remove: Kn,
    clone: Qn,
    datum: Jn,
    on: ts,
    dispatch: es,
    [Symbol.iterator]: rs
};
var le = rh;
function ih(t) {
    return typeof t == "string" ? new ht([
        [
            /*#__PURE__*/ document.querySelector(t)
        ]
    ], [
        document.documentElement
    ]) : new ht([
        [
            t
        ]
    ], is);
}
m$1(ih, "default");
function be(t, e, r) {
    t.prototype = e.prototype = r, r.constructor = t;
}
m$1(be, "default");
function sr(t, e) {
    var r = /*#__PURE__*/ Object.create(t.prototype);
    for(var o in e)r[o] = e[o];
    return r;
}
m$1(sr, "extend");
function Te() {}
m$1(Te, "Color");
var Ur = .7, Ui = 1 / Ur, ar = "\\s*([+-]?\\d+)\\s*", Yr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Jt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Vd = /^#([0-9a-f]{3,8})$/, Xd = new RegExp(`^rgb\\(${ar},${ar},${ar}\\)$`), jd = new RegExp(`^rgb\\(${Jt},${Jt},${Jt}\\)$`), Zd = new RegExp(`^rgba\\(${ar},${ar},${ar},${Yr}\\)$`), Kd = new RegExp(`^rgba\\(${Jt},${Jt},${Jt},${Yr}\\)$`), Qd = new RegExp(`^hsl\\(${Yr},${Jt},${Jt}\\)$`), Jd = new RegExp(`^hsla\\(${Yr},${Jt},${Jt},${Yr}\\)$`), oh = {
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
    copy (t) {
        return Object.assign(new this.constructor, this, t);
    },
    displayable () {
        return this.rgb().displayable();
    },
    hex: nh,
    formatHex: nh,
    formatHex8: tm,
    formatHsl: em,
    formatRgb: sh,
    toString: sh
});
function nh() {
    return this.rgb().formatHex();
}
m$1(nh, "color_formatHex");
function tm() {
    return this.rgb().formatHex8();
}
m$1(tm, "color_formatHex8");
function em() {
    return fh(this).formatHsl();
}
m$1(em, "color_formatHsl");
function sh() {
    return this.rgb().formatRgb();
}
m$1(sh, "color_formatRgb");
function Yt(t) {
    var e, r;
    return t = /*#__PURE__*/ (t + "").trim().toLowerCase(), (e = /*#__PURE__*/ Vd.exec(t)) ? (r = e[1].length, e = /*#__PURE__*/ parseInt(e[1], 16), r === 6 ? ah(e) : r === 3 ? new St(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : r === 8 ? $i(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : r === 4 ? $i(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = /*#__PURE__*/ Xd.exec(t)) ? new St(e[1], e[2], e[3], 1) : (e = /*#__PURE__*/ jd.exec(t)) ? new St(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = /*#__PURE__*/ Zd.exec(t)) ? $i(e[1], e[2], e[3], e[4]) : (e = /*#__PURE__*/ Kd.exec(t)) ? $i(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = /*#__PURE__*/ Qd.exec(t)) ? ch(e[1], e[2] / 100, e[3] / 100, 1) : (e = /*#__PURE__*/ Jd.exec(t)) ? ch(e[1], e[2] / 100, e[3] / 100, e[4]) : oh.hasOwnProperty(t) ? ah(oh[t]) : t === "transparent" ? new St(NaN, NaN, NaN, 0) : null;
}
m$1(Yt, "color");
function ah(t) {
    return new St(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
m$1(ah, "rgbn");
function $i(t, e, r, o) {
    return o <= 0 && (t = e = r = NaN), new St(t, e, r, o);
}
m$1($i, "rgba");
function ns(t) {
    return t instanceof Te || (t = /*#__PURE__*/ Yt(t)), t ? (t = /*#__PURE__*/ t.rgb(), new St(t.r, t.g, t.b, t.opacity)) : new St;
}
m$1(ns, "rgbConvert");
function lr(t, e, r, o) {
    return arguments.length === 1 ? ns(t) : new St(t, e, r, o ?? 1);
}
m$1(lr, "rgb");
function St(t, e, r, o) {
    this.r = +t, this.g = +e, this.b = +r, this.opacity = +o;
}
m$1(St, "Rgb");
be(St, lr, /*#__PURE__*/ sr(Te, {
    brighter (t) {
        return t = t == null ? Ui : Math.pow(Ui, t), new St(this.r * t, this.g * t, this.b * t, this.opacity);
    },
    darker (t) {
        return t = t == null ? Ur : Math.pow(Ur, t), new St(this.r * t, this.g * t, this.b * t, this.opacity);
    },
    rgb () {
        return this;
    },
    clamp () {
        return new St(Re(this.r), Re(this.g), Re(this.b), Yi(this.opacity));
    },
    displayable () {
        return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
    },
    hex: lh,
    formatHex: lh,
    formatHex8: rm,
    formatRgb: hh,
    toString: hh
}));
function lh() {
    return `#${ze(this.r)}${ze(this.g)}${ze(this.b)}`;
}
m$1(lh, "rgb_formatHex");
function rm() {
    return `#${ze(this.r)}${ze(this.g)}${ze(this.b)}${ze((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
m$1(rm, "rgb_formatHex8");
function hh() {
    let t = /*#__PURE__*/ Yi(this.opacity);
    return `${t === 1 ? "rgb(" : "rgba("}${Re(this.r)}, ${Re(this.g)}, ${Re(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
m$1(hh, "rgb_formatRgb");
function Yi(t) {
    return isNaN(t) ? 1 : Math.max(0, /*#__PURE__*/ Math.min(1, t));
}
m$1(Yi, "clampa");
function Re(t) {
    return Math.max(0, /*#__PURE__*/ Math.min(255, Math.round(t) || 0));
}
m$1(Re, "clampi");
function ze(t) {
    return t = /*#__PURE__*/ Re(t), (t < 16 ? "0" : "") + t.toString(16);
}
m$1(ze, "hex");
function ch(t, e, r, o) {
    return o <= 0 ? t = e = r = NaN : r <= 0 || r >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new Ut(t, e, r, o);
}
m$1(ch, "hsla");
function fh(t) {
    if (t instanceof Ut) return new Ut(t.h, t.s, t.l, t.opacity);
    if (t instanceof Te || (t = /*#__PURE__*/ Yt(t)), !t) return new Ut;
    if (t instanceof Ut) return t;
    t = /*#__PURE__*/ t.rgb();
    var e = t.r / 255, r = t.g / 255, o = t.b / 255, n = /*#__PURE__*/ Math.min(e, r, o), s = /*#__PURE__*/ Math.max(e, r, o), a = NaN, l = s - n, c = (s + n) / 2;
    return l ? (e === s ? a = (r - o) / l + (r < o) * 6 : r === s ? a = (o - e) / l + 2 : a = (e - r) / l + 4, l /= c < .5 ? s + n : 2 - s - n, a *= 60) : l = c > 0 && c < 1 ? 0 : a, new Ut(a, l, c, t.opacity);
}
m$1(fh, "hslConvert");
function dh(t, e, r, o) {
    return arguments.length === 1 ? fh(t) : new Ut(t, e, r, o ?? 1);
}
m$1(dh, "hsl");
function Ut(t, e, r, o) {
    this.h = +t, this.s = +e, this.l = +r, this.opacity = +o;
}
m$1(Ut, "Hsl");
be(Ut, dh, /*#__PURE__*/ sr(Te, {
    brighter (t) {
        return t = t == null ? Ui : Math.pow(Ui, t), new Ut(this.h, this.s, this.l * t, this.opacity);
    },
    darker (t) {
        return t = t == null ? Ur : Math.pow(Ur, t), new Ut(this.h, this.s, this.l * t, this.opacity);
    },
    rgb () {
        var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, r = this.l, o = r + (r < .5 ? r : 1 - r) * e, n = 2 * r - o;
        return new St(os(t >= 240 ? t - 240 : t + 120, n, o), os(t, n, o), os(t < 120 ? t + 240 : t - 120, n, o), this.opacity);
    },
    clamp () {
        return new Ut(uh(this.h), Hi(this.s), Hi(this.l), Yi(this.opacity));
    },
    displayable () {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    },
    formatHsl () {
        let t = /*#__PURE__*/ Yi(this.opacity);
        return `${t === 1 ? "hsl(" : "hsla("}${uh(this.h)}, ${Hi(this.s) * 100}%, ${Hi(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
    }
}));
function uh(t) {
    return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
m$1(uh, "clamph");
function Hi(t) {
    return Math.max(0, /*#__PURE__*/ Math.min(1, t || 0));
}
m$1(Hi, "clampt");
function os(t, e, r) {
    return (t < 60 ? e + (r - e) * t / 60 : t < 180 ? r : t < 240 ? e + (r - e) * (240 - t) / 60 : e) * 255;
}
m$1(os, "hsl2rgb");
var mh = Math.PI / 180, ph = 180 / Math.PI;
var Gi = 18, gh = .96422, xh = 1, yh = .82521, Ch = 4 / 29, hr = 6 / 29, _h = 3 * hr * hr, im = hr * hr * hr;
function bh(t) {
    if (t instanceof te) return new te(t.l, t.a, t.b, t.opacity);
    if (t instanceof he) return Th(t);
    t instanceof St || (t = /*#__PURE__*/ ns(t));
    var e = /*#__PURE__*/ hs(t.r), r = /*#__PURE__*/ hs(t.g), o = /*#__PURE__*/ hs(t.b), n = /*#__PURE__*/ ss((.2225045 * e + .7168786 * r + .0606169 * o) / xh), s, a;
    return e === r && r === o ? s = a = n : (s = /*#__PURE__*/ ss((.4360747 * e + .3850649 * r + .1430804 * o) / gh), a = /*#__PURE__*/ ss((.0139322 * e + .0971045 * r + .7141733 * o) / yh)), new te(116 * n - 16, 500 * (s - n), 200 * (n - a), t.opacity);
}
m$1(bh, "labConvert");
function cs(t, e, r, o) {
    return arguments.length === 1 ? bh(t) : new te(t, e, r, o ?? 1);
}
m$1(cs, "lab");
function te(t, e, r, o) {
    this.l = +t, this.a = +e, this.b = +r, this.opacity = +o;
}
m$1(te, "Lab");
be(te, cs, /*#__PURE__*/ sr(Te, {
    brighter (t) {
        return new te(this.l + Gi * (t ?? 1), this.a, this.b, this.opacity);
    },
    darker (t) {
        return new te(this.l - Gi * (t ?? 1), this.a, this.b, this.opacity);
    },
    rgb () {
        var t = (this.l + 16) / 116, e = isNaN(this.a) ? t : t + this.a / 500, r = isNaN(this.b) ? t : t - this.b / 200;
        return e = gh * as(e), t = xh * as(t), r = yh * as(r), new St(ls(3.1338561 * e - 1.6168667 * t - .4906146 * r), ls(-0.9787684 * e + 1.9161415 * t + .033454 * r), ls(.0719453 * e - .2289914 * t + 1.4052427 * r), this.opacity);
    }
}));
function ss(t) {
    return t > im ? Math.pow(t, 1 / 3) : t / _h + Ch;
}
m$1(ss, "xyz2lab");
function as(t) {
    return t > hr ? t * t * t : _h * (t - Ch);
}
m$1(as, "lab2xyz");
function ls(t) {
    return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055);
}
m$1(ls, "lrgb2rgb");
function hs(t) {
    return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
}
m$1(hs, "rgb2lrgb");
function om(t) {
    if (t instanceof he) return new he(t.h, t.c, t.l, t.opacity);
    if (t instanceof te || (t = /*#__PURE__*/ bh(t)), t.a === 0 && t.b === 0) return new he(NaN, 0 < t.l && t.l < 100 ? 0 : NaN, t.l, t.opacity);
    var e = Math.atan2(t.b, t.a) * ph;
    return new he(e < 0 ? e + 360 : e, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
}
m$1(om, "hclConvert");
function Gr(t, e, r, o) {
    return arguments.length === 1 ? om(t) : new he(t, e, r, o ?? 1);
}
m$1(Gr, "hcl");
function he(t, e, r, o) {
    this.h = +t, this.c = +e, this.l = +r, this.opacity = +o;
}
m$1(he, "Hcl");
function Th(t) {
    if (isNaN(t.h)) return new te(t.l, 0, 0, t.opacity);
    var e = t.h * mh;
    return new te(t.l, Math.cos(e) * t.c, Math.sin(e) * t.c, t.opacity);
}
m$1(Th, "hcl2lab");
be(he, Gr, /*#__PURE__*/ sr(Te, {
    brighter (t) {
        return new he(this.h, this.c, this.l + Gi * (t ?? 1), this.opacity);
    },
    darker (t) {
        return new he(this.h, this.c, this.l - Gi * (t ?? 1), this.opacity);
    },
    rgb () {
        return Th(this).rgb();
    }
}));
var cr = /*#__PURE__*/ m$1((t)=>()=>t, "default");
function kh(t, e) {
    return function(r) {
        return t + r * e;
    };
}
m$1(kh, "linear");
function nm(t, e, r) {
    return t = /*#__PURE__*/ Math.pow(t, r), e = Math.pow(e, r) - t, r = 1 / r, function(o) {
        return Math.pow(t + o * e, r);
    };
}
m$1(nm, "exponential");
function Sh(t, e) {
    var r = e - t;
    return r ? kh(t, r > 180 || r < -180 ? r - 360 * Math.round(r / 360) : r) : cr(isNaN(t) ? e : t);
}
m$1(Sh, "hue");
function vh(t) {
    return (t = +t) == 1 ? ce : function(e, r) {
        return r - e ? nm(e, r, t) : cr(isNaN(e) ? r : e);
    };
}
m$1(vh, "gamma");
function ce(t, e) {
    var r = e - t;
    return r ? kh(t, r) : cr(isNaN(t) ? e : t);
}
m$1(ce, "nogamma");
function wh(t) {
    return function(e, r) {
        var o = /*#__PURE__*/ t((e = /*#__PURE__*/ Gr(e)).h, (r = /*#__PURE__*/ Gr(r)).h), n = /*#__PURE__*/ ce(e.c, r.c), s = /*#__PURE__*/ ce(e.l, r.l), a = /*#__PURE__*/ ce(e.opacity, r.opacity);
        return function(l) {
            return e.h = /*#__PURE__*/ o(l), e.c = /*#__PURE__*/ n(l), e.l = /*#__PURE__*/ s(l), e.opacity = /*#__PURE__*/ a(l), e + "";
        };
    };
}
m$1(wh, "hcl");
var sm = /*#__PURE__*/ wh(Sh);
function us(t, e, r, o, n) {
    var s = t * t, a = s * t;
    return ((1 - 3 * t + 3 * s - a) * e + (4 - 6 * s + 3 * a) * r + (1 + 3 * t + 3 * s - 3 * a) * o + a * n) / 6;
}
m$1(us, "basis");
function fs(t) {
    var e = t.length - 1;
    return function(r) {
        var o = r <= 0 ? r = 0 : r >= 1 ? (r = 1, e - 1) : Math.floor(r * e), n = t[o], s = t[o + 1], a = o > 0 ? t[o - 1] : 2 * n - s, l = o < e - 1 ? t[o + 2] : 2 * s - n;
        return us((r - o / e) * e, a, n, s, l);
    };
}
m$1(fs, "default");
function ds(t) {
    var e = t.length;
    return function(r) {
        var o = /*#__PURE__*/ Math.floor(((r %= 1) < 0 ? ++r : r) * e), n = t[(o + e - 1) % e], s = t[o % e], a = t[(o + 1) % e], l = t[(o + 2) % e];
        return us((r - o / e) * e, n, s, a, l);
    };
}
m$1(ds, "default");
var Ne = /*#__PURE__*/ m$1(function t(e) {
    var r = /*#__PURE__*/ vh(e);
    function o(n, s) {
        var a = /*#__PURE__*/ r((n = /*#__PURE__*/ lr(n)).r, (s = /*#__PURE__*/ lr(s)).r), l = /*#__PURE__*/ r(n.g, s.g), c = /*#__PURE__*/ r(n.b, s.b), h = /*#__PURE__*/ ce(n.opacity, s.opacity);
        return function(u) {
            return n.r = /*#__PURE__*/ a(u), n.g = /*#__PURE__*/ l(u), n.b = /*#__PURE__*/ c(u), n.opacity = /*#__PURE__*/ h(u), n + "";
        };
    }
    return m$1(o, "rgb"), o.gamma = t, o;
}, "rgbGamma")(1);
function Bh(t) {
    return function(e) {
        var r = e.length, o = new Array(r), n = new Array(r), s = new Array(r), a, l;
        for(a = 0; a < r; ++a)l = /*#__PURE__*/ lr(e[a]), o[a] = l.r || 0, n[a] = l.g || 0, s[a] = l.b || 0;
        return o = /*#__PURE__*/ t(o), n = /*#__PURE__*/ t(n), s = /*#__PURE__*/ t(s), l.opacity = 1, function(c) {
            return l.r = /*#__PURE__*/ o(c), l.g = /*#__PURE__*/ n(c), l.b = /*#__PURE__*/ s(c), l + "";
        };
    };
}
m$1(Bh, "rgbSpline");
function ms(t, e) {
    e || (e = []);
    var r = t ? Math.min(e.length, t.length) : 0, o = /*#__PURE__*/ e.slice(), n;
    return function(s) {
        for(n = 0; n < r; ++n)o[n] = t[n] * (1 - s) + e[n] * s;
        return o;
    };
}
m$1(ms, "default");
function Fh(t) {
    return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
m$1(Fh, "isNumberArray");
function Mh(t, e) {
    var r = e ? e.length : 0, o = t ? Math.min(r, t.length) : 0, n = new Array(o), s = new Array(r), a;
    for(a = 0; a < o; ++a)n[a] = /*#__PURE__*/ ke(t[a], e[a]);
    for(; a < r; ++a)s[a] = e[a];
    return function(l) {
        for(a = 0; a < o; ++a)s[a] = /*#__PURE__*/ n[a](l);
        return s;
    };
}
m$1(Mh, "genericArray");
function ps(t, e) {
    var r = new Date;
    return t = +t, e = +e, function(o) {
        return r.setTime(t * (1 - o) + e * o), r;
    };
}
m$1(ps, "default");
function gt(t, e) {
    return t = +t, e = +e, function(r) {
        return t * (1 - r) + e * r;
    };
}
m$1(gt, "default");
function gs(t, e) {
    var r = {}, o = {}, n;
    (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
    for(n in e)n in t ? r[n] = /*#__PURE__*/ ke(t[n], e[n]) : o[n] = e[n];
    return function(s) {
        for(n in r)o[n] = /*#__PURE__*/ r[n](s);
        return o;
    };
}
m$1(gs, "default");
var ys = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, xs = new RegExp(ys.source, "g");
function cm(t) {
    return function() {
        return t;
    };
}
m$1(cm, "zero");
function um(t) {
    return function(e) {
        return t(e) + "";
    };
}
m$1(um, "one");
function ur(t, e) {
    var r = ys.lastIndex = xs.lastIndex = 0, o, n, s, a = -1, l = [], c = [];
    for(t = t + "", e = e + ""; (o = /*#__PURE__*/ ys.exec(t)) && (n = /*#__PURE__*/ xs.exec(e));)(s = n.index) > r && (s = /*#__PURE__*/ e.slice(r, s), l[a] ? l[a] += s : l[++a] = s), (o = o[0]) === (n = n[0]) ? l[a] ? l[a] += n : l[++a] = n : (l[++a] = null, c.push({
        i: a,
        x: /*#__PURE__*/ gt(o, n)
    })), r = xs.lastIndex;
    return r < e.length && (s = /*#__PURE__*/ e.slice(r), l[a] ? l[a] += s : l[++a] = s), l.length < 2 ? c[0] ? um(c[0].x) : cm(e) : (e = c.length, function(h) {
        for(var u = 0, p; u < e; ++u)l[(p = c[u]).i] = /*#__PURE__*/ p.x(h);
        return l.join("");
    });
}
m$1(ur, "default");
function ke(t, e) {
    var r = typeof e, o;
    return e == null || r === "boolean" ? cr(e) : (r === "number" ? gt : r === "string" ? (o = /*#__PURE__*/ Yt(e)) ? (e = o, Ne) : ur : e instanceof Yt ? Ne : e instanceof Date ? ps : Fh(e) ? ms : Array.isArray(e) ? Mh : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? gs : gt)(t, e);
}
m$1(ke, "default");
function Vi(t, e) {
    return t = +t, e = +e, function(r) {
        return Math.round(t * (1 - r) + e * r);
    };
}
m$1(Vi, "default");
var Lh = 180 / Math.PI, Xi = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
};
function ji(t, e, r, o, n, s) {
    var a, l, c;
    return (a = /*#__PURE__*/ Math.sqrt(t * t + e * e)) && (t /= a, e /= a), (c = t * r + e * o) && (r -= t * c, o -= e * c), (l = /*#__PURE__*/ Math.sqrt(r * r + o * o)) && (r /= l, o /= l, c /= l), t * o < e * r && (t = -t, e = -e, c = -c, a = -a), {
        translateX: n,
        translateY: s,
        rotate: Math.atan2(e, t) * Lh,
        skewX: Math.atan(c) * Lh,
        scaleX: a,
        scaleY: l
    };
}
m$1(ji, "default");
var Zi;
function Ah(t) {
    let e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
    return e.isIdentity ? Xi : ji(e.a, e.b, e.c, e.d, e.e, e.f);
}
m$1(Ah, "parseCss");
function Eh(t) {
    return t == null ? Xi : (Zi || (Zi = /*#__PURE__*/ document.createElementNS("http://www.w3.org/2000/svg", "g")), Zi.setAttribute("transform", t), (t = /*#__PURE__*/ Zi.transform.baseVal.consolidate()) ? (t = t.matrix, ji(t.a, t.b, t.c, t.d, t.e, t.f)) : Xi);
}
m$1(Eh, "parseSvg");
function Oh(t, e, r, o) {
    function n(h) {
        return h.length ? h.pop() + " " : "";
    }
    m$1(n, "pop");
    function s(h, u, p, f, g, T) {
        if (h !== p || u !== f) {
            var A = /*#__PURE__*/ g.push("translate(", null, e, null, r);
            T.push({
                i: A - 4,
                x: /*#__PURE__*/ gt(h, p)
            }, {
                i: A - 2,
                x: /*#__PURE__*/ gt(u, f)
            });
        } else (p || f) && g.push("translate(" + p + e + f + r);
    }
    m$1(s, "translate");
    function a(h, u, p, f) {
        h !== u ? (h - u > 180 ? u += 360 : u - h > 180 && (h += 360), f.push({
            i: p.push(n(p) + "rotate(", null, o) - 2,
            x: /*#__PURE__*/ gt(h, u)
        })) : u && p.push(n(p) + "rotate(" + u + o);
    }
    m$1(a, "rotate");
    function l(h, u, p, f) {
        h !== u ? f.push({
            i: p.push(n(p) + "skewX(", null, o) - 2,
            x: /*#__PURE__*/ gt(h, u)
        }) : u && p.push(n(p) + "skewX(" + u + o);
    }
    m$1(l, "skewX");
    function c(h, u, p, f, g, T) {
        if (h !== p || u !== f) {
            var A = /*#__PURE__*/ g.push(n(g) + "scale(", null, ",", null, ")");
            T.push({
                i: A - 4,
                x: /*#__PURE__*/ gt(h, p)
            }, {
                i: A - 2,
                x: /*#__PURE__*/ gt(u, f)
            });
        } else (p !== 1 || f !== 1) && g.push(n(g) + "scale(" + p + "," + f + ")");
    }
    return m$1(c, "scale"), function(h, u) {
        var p = [], f = [];
        return h = /*#__PURE__*/ t(h), u = /*#__PURE__*/ t(u), s(h.translateX, h.translateY, u.translateX, u.translateY, p, f), a(h.rotate, u.rotate, p, f), l(h.skewX, u.skewX, p, f), c(h.scaleX, h.scaleY, u.scaleX, u.scaleY, p, f), h = u = null, function(g) {
            for(var T = -1, A = f.length, W; ++T < A;)p[(W = f[T]).i] = /*#__PURE__*/ W.x(g);
            return p.join("");
        };
    };
}
m$1(Oh, "interpolateTransform");
var Cs = /*#__PURE__*/ Oh(Ah, "px, ", "px)", "deg)"), _s = /*#__PURE__*/ Oh(Eh, ", ", ")", ")");
function Se(t, e) {
    switch(arguments.length){
        case 0:
            break;
        case 1:
            this.range(t);
            break;
        default:
            this.range(e).domain(t);
            break;
    }
    return this;
}
m$1(Se, "initRange");
var bs = /*#__PURE__*/ Symbol("implicit");
function Vr() {
    var t = new rr, e = [], r = [], o = bs;
    function n(s) {
        let a = /*#__PURE__*/ t.get(s);
        if (a === void 0) {
            if (o !== bs) return o;
            t.set(s, a = e.push(s) - 1);
        }
        return r[a % r.length];
    }
    return m$1(n, "scale"), n.domain = function(s) {
        if (!arguments.length) return e.slice();
        e = [], t = new rr;
        for (let a of s)t.has(a) || t.set(a, e.push(a) - 1);
        return n;
    }, n.range = function(s) {
        return arguments.length ? (r = /*#__PURE__*/ Array.from(s), n) : r.slice();
    }, n.unknown = function(s) {
        return arguments.length ? (o = s, n) : o;
    }, n.copy = function() {
        return Vr(e, r).unknown(o);
    }, Se.apply(n, arguments), n;
}
m$1(Vr, "ordinal");
function Ts(t) {
    return function() {
        return t;
    };
}
m$1(Ts, "constants");
function ks(t) {
    return +t;
}
m$1(ks, "number");
var Dh = [
    0,
    1
];
function fr(t) {
    return t;
}
m$1(fr, "identity");
function Ss(t, e) {
    return (e -= t = +t) ? function(r) {
        return (r - t) / e;
    } : Ts(isNaN(e) ? NaN : .5);
}
m$1(Ss, "normalize");
function fm(t, e) {
    var r;
    return t > e && (r = t, t = e, e = r), function(o) {
        return Math.max(t, /*#__PURE__*/ Math.min(e, o));
    };
}
m$1(fm, "clamper");
function dm(t, e, r) {
    var o = t[0], n = t[1], s = e[0], a = e[1];
    return n < o ? (o = /*#__PURE__*/ Ss(n, o), s = /*#__PURE__*/ r(a, s)) : (o = /*#__PURE__*/ Ss(o, n), s = /*#__PURE__*/ r(s, a)), function(l) {
        return s(/*#__PURE__*/ o(l));
    };
}
m$1(dm, "bimap");
function mm(t, e, r) {
    var o = Math.min(t.length, e.length) - 1, n = new Array(o), s = new Array(o), a = -1;
    for(t[o] < t[0] && (t = /*#__PURE__*/ t.slice().reverse(), e = /*#__PURE__*/ e.slice().reverse()); ++a < o;)n[a] = /*#__PURE__*/ Ss(t[a], t[a + 1]), s[a] = /*#__PURE__*/ r(e[a], e[a + 1]);
    return function(l) {
        var c = pn(t, l, 1, o) - 1;
        return s[c](/*#__PURE__*/ n[c](l));
    };
}
m$1(mm, "polymap");
function Ki(t, e) {
    return e.domain(/*#__PURE__*/ t.domain()).range(/*#__PURE__*/ t.range()).interpolate(/*#__PURE__*/ t.interpolate()).clamp(/*#__PURE__*/ t.clamp()).unknown(/*#__PURE__*/ t.unknown());
}
m$1(Ki, "copy");
function pm() {
    var t = Dh, e = Dh, r = ke, o, n, s, a = fr, l, c, h;
    function u() {
        var f = /*#__PURE__*/ Math.min(t.length, e.length);
        return a !== fr && (a = /*#__PURE__*/ fm(t[0], t[f - 1])), l = f > 2 ? mm : dm, c = h = null, p;
    }
    m$1(u, "rescale");
    function p(f) {
        return f == null || isNaN(f = +f) ? s : (c || (c = /*#__PURE__*/ l(/*#__PURE__*/ t.map(o), e, r)))(/*#__PURE__*/ o(/*#__PURE__*/ a(f)));
    }
    return m$1(p, "scale"), p.invert = function(f) {
        return a(/*#__PURE__*/ n(/*#__PURE__*/ (h || (h = /*#__PURE__*/ l(e, /*#__PURE__*/ t.map(o), gt)))(f)));
    }, p.domain = function(f) {
        return arguments.length ? (t = /*#__PURE__*/ Array.from(f, ks), u()) : t.slice();
    }, p.range = function(f) {
        return arguments.length ? (e = /*#__PURE__*/ Array.from(f), u()) : e.slice();
    }, p.rangeRound = function(f) {
        return e = /*#__PURE__*/ Array.from(f), r = Vi, u();
    }, p.clamp = function(f) {
        return arguments.length ? (a = f ? true : fr, u()) : a !== fr;
    }, p.interpolate = function(f) {
        return arguments.length ? (r = f, u()) : r;
    }, p.unknown = function(f) {
        return arguments.length ? (s = f, p) : s;
    }, function(f, g) {
        return o = f, n = g, u();
    };
}
m$1(pm, "transformer");
function Xr() {
    return pm()(fr, fr);
}
m$1(Xr, "continuous");
function vs(t) {
    return Math.abs(t = /*#__PURE__*/ Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
m$1(vs, "default");
function qe(t, e) {
    if ((r = /*#__PURE__*/ (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;
    var r, o = /*#__PURE__*/ t.slice(0, r);
    return [
        o.length > 1 ? o[0] + o.slice(2) : o,
        +t.slice(r + 1)
    ];
}
m$1(qe, "formatDecimalParts");
function Gt(t) {
    return t = /*#__PURE__*/ qe(/*#__PURE__*/ Math.abs(t)), t ? t[1] : NaN;
}
m$1(Gt, "default");
function ws(t, e) {
    return function(r, o) {
        for(var n = r.length, s = [], a = 0, l = t[0], c = 0; n > 0 && l > 0 && (c + l + 1 > o && (l = /*#__PURE__*/ Math.max(1, o - c)), s.push(/*#__PURE__*/ r.substring(n -= l, n + l)), !((c += l + 1) > o));)l = t[a = (a + 1) % t.length];
        return s.reverse().join(e);
    };
}
m$1(ws, "default");
function Bs(t) {
    return function(e) {
        return e.replace(/[0-9]/g, function(r) {
            return t[+r];
        });
    };
}
m$1(Bs, "default");
var gm = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function ve(t) {
    if (!(e = /*#__PURE__*/ gm.exec(t))) throw new Error("invalid format: " + t);
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
function Qi(t) {
    this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
m$1(Qi, "FormatSpecifier");
Qi.prototype.toString = function() {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Fs(t) {
    t: for(var e = t.length, r = 1, o = -1, n; r < e; ++r)switch(t[r]){
        case ".":
            o = n = r;
            break;
        case "0":
            o === 0 && (o = r), n = r;
            break;
        default:
            if (!+t[r]) break t;
            o > 0 && (o = 0);
            break;
    }
    return o > 0 ? t.slice(0, o) + t.slice(n + 1) : t;
}
m$1(Fs, "default");
var Ms;
function Ls(t, e) {
    var r = /*#__PURE__*/ qe(t, e);
    if (!r) return t + "";
    var o = r[0], n = r[1], s = n - (Ms = Math.max(-8, /*#__PURE__*/ Math.min(8, /*#__PURE__*/ Math.floor(n / 3))) * 3) + 1, a = o.length;
    return s === a ? o : s > a ? o + new Array(s - a + 1).join("0") : s > 0 ? o.slice(0, s) + "." + o.slice(s) : "0." + new Array(1 - s).join("0") + qe(t, /*#__PURE__*/ Math.max(0, e + s - 1))[0];
}
m$1(Ls, "default");
function Ji(t, e) {
    var r = /*#__PURE__*/ qe(t, e);
    if (!r) return t + "";
    var o = r[0], n = r[1];
    return n < 0 ? "0." + new Array(-n).join("0") + o : o.length > n + 1 ? o.slice(0, n + 1) + "." + o.slice(n + 1) : o + new Array(n - o.length + 2).join("0");
}
m$1(Ji, "default");
var As = {
    "%": /*#__PURE__*/ m$1((t, e)=>(t * 100).toFixed(e), "%"),
    b: /*#__PURE__*/ m$1((t)=>Math.round(t).toString(2), "b"),
    c: /*#__PURE__*/ m$1((t)=>t + "", "c"),
    d: vs,
    e: /*#__PURE__*/ m$1((t, e)=>t.toExponential(e), "e"),
    f: /*#__PURE__*/ m$1((t, e)=>t.toFixed(e), "f"),
    g: /*#__PURE__*/ m$1((t, e)=>t.toPrecision(e), "g"),
    o: /*#__PURE__*/ m$1((t)=>Math.round(t).toString(8), "o"),
    p: /*#__PURE__*/ m$1((t, e)=>Ji(t * 100, e), "p"),
    r: Ji,
    s: Ls,
    X: /*#__PURE__*/ m$1((t)=>Math.round(t).toString(16).toUpperCase(), "X"),
    x: /*#__PURE__*/ m$1((t)=>Math.round(t).toString(16), "x")
};
function to(t) {
    return t;
}
m$1(to, "default");
var Ih = Array.prototype.map, zh = [
    "y",
    "z",
    "a",
    "f",
    "p",
    "n",
    "\xB5",
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
function Es(t) {
    var e = t.grouping === void 0 || t.thousands === void 0 ? to : ws(/*#__PURE__*/ Ih.call(t.grouping, Number), t.thousands + ""), r = t.currency === void 0 ? "" : t.currency[0] + "", o = t.currency === void 0 ? "" : t.currency[1] + "", n = t.decimal === void 0 ? "." : t.decimal + "", s = t.numerals === void 0 ? to : Bs(/*#__PURE__*/ Ih.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", l = t.minus === void 0 ? "\u2212" : t.minus + "", c = t.nan === void 0 ? "NaN" : t.nan + "";
    function h(p) {
        p = /*#__PURE__*/ ve(p);
        var f = p.fill, g = p.align, T = p.sign, A = p.symbol, W = p.zero, q = p.width, G = p.comma, O = p.precision, M = p.trim, P = p.type;
        P === "n" ? (G = true, P = "g") : As[P] || (O === void 0 && (O = 12), M = true, P = "g"), (W || f === "0" && g === "=") && (W = true, f = "0", g = "=");
        var w = A === "$" ? r : A === "#" && /[boxX]/.test(P) ? "0" + P.toLowerCase() : "", X = A === "$" ? o : /[%p]/.test(P) ? a : "", j = As[P], $ = /*#__PURE__*/ /[defgprs%]/.test(P);
        O = O === void 0 ? 6 : /[gprs]/.test(P) ? Math.max(1, /*#__PURE__*/ Math.min(21, O)) : Math.max(0, /*#__PURE__*/ Math.min(20, O));
        function it(B) {
            var k = w, x = X, y, L, S;
            if (P === "c") x = j(B) + x, B = "";
            else {
                B = +B;
                var z = B < 0 || 1 / B < 0;
                if (B = isNaN(B) ? c : j(/*#__PURE__*/ Math.abs(B), O), M && (B = /*#__PURE__*/ Fs(B)), z && +B == 0 && T !== "+" && (z = false), k = (z ? T === "(" ? T : l : T === "-" || T === "(" ? "" : T) + k, x = (P === "s" ? zh[8 + Ms / 3] : "") + x + (z && T === "(" ? ")" : ""), $) {
                    for(y = -1, L = B.length; ++y < L;)if (S = /*#__PURE__*/ B.charCodeAt(y), 48 > S || S > 57) {
                        x = (S === 46 ? n + B.slice(y + 1) : B.slice(y)) + x, B = /*#__PURE__*/ B.slice(0, y);
                        break;
                    }
                }
            }
            G && !W && (B = /*#__PURE__*/ e(B, 1 / 0));
            var I = k.length + B.length + x.length, U = I < q ? new Array(q - I + 1).join(f) : "";
            switch(G && W && (B = /*#__PURE__*/ e(U + B, U.length ? q - x.length : 1 / 0), U = ""), g){
                case "<":
                    B = k + B + x + U;
                    break;
                case "=":
                    B = k + U + B + x;
                    break;
                case "^":
                    B = U.slice(0, I = U.length >> 1) + k + B + x + U.slice(I);
                    break;
                default:
                    B = U + k + B + x;
                    break;
            }
            return s(B);
        }
        return m$1(it, "format"), it.toString = function() {
            return p + "";
        }, it;
    }
    m$1(h, "newFormat");
    function u(p, f) {
        var g = /*#__PURE__*/ h((p = /*#__PURE__*/ ve(p), p.type = "f", p)), T = Math.max(-8, /*#__PURE__*/ Math.min(8, /*#__PURE__*/ Math.floor(Gt(f) / 3))) * 3, A = /*#__PURE__*/ Math.pow(10, -T), W = zh[8 + T / 3];
        return function(q) {
            return g(A * q) + W;
        };
    }
    return m$1(u, "formatPrefix"), {
        format: h,
        formatPrefix: u
    };
}
m$1(Es, "default");
var eo, ro, io;
Os({
    thousands: ",",
    grouping: [
        3
    ],
    currency: [
        "$",
        ""
    ]
});
function Os(t) {
    return eo = /*#__PURE__*/ Es(t), ro = eo.format, io = eo.formatPrefix, eo;
}
m$1(Os, "defaultLocale");
function oo(t) {
    return Math.max(0, -Gt(/*#__PURE__*/ Math.abs(t)));
}
m$1(oo, "default");
function no(t, e) {
    return Math.max(0, Math.max(-8, /*#__PURE__*/ Math.min(8, /*#__PURE__*/ Math.floor(Gt(e) / 3))) * 3 - Gt(/*#__PURE__*/ Math.abs(t)));
}
m$1(no, "default");
function so(t, e) {
    return t = /*#__PURE__*/ Math.abs(t), e = Math.abs(e) - t, Math.max(0, Gt(e) - Gt(t)) + 1;
}
m$1(so, "default");
function Ds(t, e, r, o) {
    var n = /*#__PURE__*/ ir(t, e, r), s;
    switch(o = /*#__PURE__*/ ve(o ?? ",f"), o.type){
        case "s":
            {
                var a = /*#__PURE__*/ Math.max(/*#__PURE__*/ Math.abs(t), /*#__PURE__*/ Math.abs(e));
                return o.precision == null && !isNaN(s = /*#__PURE__*/ no(n, a)) && (o.precision = s), io(o, a);
            }
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
            {
                o.precision == null && !isNaN(s = /*#__PURE__*/ so(n, /*#__PURE__*/ Math.max(/*#__PURE__*/ Math.abs(t), /*#__PURE__*/ Math.abs(e)))) && (o.precision = s - (o.type === "e"));
                break;
            }
        case "f":
        case "%":
            {
                o.precision == null && !isNaN(s = /*#__PURE__*/ oo(n)) && (o.precision = s - (o.type === "%") * 2);
                break;
            }
    }
    return ro(o);
}
m$1(Ds, "tickFormat");
function xm(t) {
    var e = t.domain;
    return t.ticks = function(r) {
        var o = /*#__PURE__*/ e();
        return zi(o[0], o[o.length - 1], r ?? 10);
    }, t.tickFormat = function(r, o) {
        var n = /*#__PURE__*/ e();
        return Ds(n[0], n[n.length - 1], r ?? 10, o);
    }, t.nice = function(r) {
        r == null && (r = 10);
        var o = /*#__PURE__*/ e(), n = 0, s = o.length - 1, a = o[n], l = o[s], c, h, u = 10;
        for(l < a && (h = a, a = l, l = h, h = n, n = s, s = h); u-- > 0;){
            if (h = /*#__PURE__*/ qr(a, l, r), h === c) return o[n] = a, o[s] = l, e(o);
            if (h > 0) a = Math.floor(a / h) * h, l = Math.ceil(l / h) * h;
            else if (h < 0) a = Math.ceil(a * h) / h, l = Math.floor(l * h) / h;
            else break;
            c = h;
        }
        return t;
    }, t;
}
m$1(xm, "linearish");
function Is() {
    var t = /*#__PURE__*/ Xr();
    return t.copy = function() {
        return Ki(t, /*#__PURE__*/ Is());
    }, Se.apply(t, arguments), xm(t);
}
m$1(Is, "linear");
var zs = new Date, Rs = new Date;
function ot(t, e, r, o) {
    function n(s) {
        return t(s = arguments.length === 0 ? new Date : new Date(+s)), s;
    }
    return m$1(n, "interval"), n.floor = (s)=>(t(s = new Date(+s)), s), n.ceil = (s)=>(t(s = new Date(s - 1)), e(s, 1), t(s), s), n.round = (s)=>{
        let a = /*#__PURE__*/ n(s), l = /*#__PURE__*/ n.ceil(s);
        return s - a < l - s ? a : l;
    }, n.offset = (s, a)=>(e(s = new Date(+s), a == null ? 1 : Math.floor(a)), s), n.range = (s, a, l)=>{
        let c = [];
        if (s = /*#__PURE__*/ n.ceil(s), l = l == null ? 1 : Math.floor(l), !(s < a) || !(l > 0)) return c;
        let h;
        do c.push(h = new Date(+s)), e(s, l), t(s);
        while (h < s && s < a);
        return c;
    }, n.filter = (s)=>ot((a)=>{
            if (a >= a) for(; t(a), !s(a);)a.setTime(a - 1);
        }, (a, l)=>{
            if (a >= a) if (l < 0) for(; ++l <= 0;)for(; e(a, -1), !s(a););
            else for(; --l >= 0;)for(; e(a, 1), !s(a););
        }), r && (n.count = (s, a)=>(zs.setTime(+s), Rs.setTime(+a), t(zs), t(Rs), Math.floor(/*#__PURE__*/ r(zs, Rs))), n.every = (s)=>(s = /*#__PURE__*/ Math.floor(s), !isFinite(s) || !(s > 0) ? null : s > 1 ? n.filter(o ? (a)=>o(a) % s === 0 : (a)=>n.count(0, a) % s === 0) : n)), n;
}
m$1(ot, "timeInterval");
var Pe = /*#__PURE__*/ ot(()=>{}, (t, e)=>{
    t.setTime(+t + e);
}, (t, e)=>e - t);
Pe.every = (t)=>(t = /*#__PURE__*/ Math.floor(t), !isFinite(t) || !(t > 0) ? null : t > 1 ? ot((e)=>{
        e.setTime(Math.floor(e / t) * t);
    }, (e, r)=>{
        e.setTime(+e + r * t);
    }, (e, r)=>(r - e) / t) : Pe);
Pe.range;
var ee = /*#__PURE__*/ ot((t)=>{
    t.setTime(t - t.getMilliseconds());
}, (t, e)=>{
    t.setTime(+t + e * 1e3);
}, (t, e)=>(e - t) / 1e3, (t)=>t.getUTCSeconds());
ee.range;
var dr = /*#__PURE__*/ ot((t)=>{
    t.setTime(t - t.getMilliseconds() - t.getSeconds() * 1e3);
}, (t, e)=>{
    t.setTime(+t + e * 6e4);
}, (t, e)=>(e - t) / 6e4, (t)=>t.getMinutes());
dr.range;
var ao = /*#__PURE__*/ ot((t)=>{
    t.setUTCSeconds(0, 0);
}, (t, e)=>{
    t.setTime(+t + e * 6e4);
}, (t, e)=>(e - t) / 6e4, (t)=>t.getUTCMinutes());
ao.range;
var mr = /*#__PURE__*/ ot((t)=>{
    t.setTime(t - t.getMilliseconds() - t.getSeconds() * 1e3 - t.getMinutes() * 6e4);
}, (t, e)=>{
    t.setTime(+t + e * 36e5);
}, (t, e)=>(e - t) / 36e5, (t)=>t.getHours());
mr.range;
var lo = /*#__PURE__*/ ot((t)=>{
    t.setUTCMinutes(0, 0, 0);
}, (t, e)=>{
    t.setTime(+t + e * 36e5);
}, (t, e)=>(e - t) / 36e5, (t)=>t.getUTCHours());
lo.range;
var ue = /*#__PURE__*/ ot((t)=>t.setHours(0, 0, 0, 0), (t, e)=>t.setDate(t.getDate() + e), (t, e)=>(e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * 6e4) / 864e5, (t)=>t.getDate() - 1);
ue.range;
var Zr = /*#__PURE__*/ ot((t)=>{
    t.setUTCHours(0, 0, 0, 0);
}, (t, e)=>{
    t.setUTCDate(t.getUTCDate() + e);
}, (t, e)=>(e - t) / 864e5, (t)=>t.getUTCDate() - 1);
Zr.range;
var ho = /*#__PURE__*/ ot((t)=>{
    t.setUTCHours(0, 0, 0, 0);
}, (t, e)=>{
    t.setUTCDate(t.getUTCDate() + e);
}, (t, e)=>(e - t) / 864e5, (t)=>Math.floor(t / 864e5));
ho.range;
function He(t) {
    return ot((e)=>{
        e.setDate(e.getDate() - (e.getDay() + 7 - t) % 7), e.setHours(0, 0, 0, 0);
    }, (e, r)=>{
        e.setDate(e.getDate() + r * 7);
    }, (e, r)=>(r - e - (r.getTimezoneOffset() - e.getTimezoneOffset()) * 6e4) / 6048e5);
}
m$1(He, "timeWeekday");
var fe = /*#__PURE__*/ He(0), pr = /*#__PURE__*/ He(1), Ph = /*#__PURE__*/ He(2), Wh = /*#__PURE__*/ He(3), we = /*#__PURE__*/ He(4), $h = /*#__PURE__*/ He(5), Hh = /*#__PURE__*/ He(6);
fe.range;
pr.range;
Ph.range;
Wh.range;
we.range;
$h.range;
Hh.range;
function Ue(t) {
    return ot((e)=>{
        e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t) % 7), e.setUTCHours(0, 0, 0, 0);
    }, (e, r)=>{
        e.setUTCDate(e.getUTCDate() + r * 7);
    }, (e, r)=>(r - e) / 6048e5);
}
m$1(Ue, "utcWeekday");
var Ye = /*#__PURE__*/ Ue(0), gr = /*#__PURE__*/ Ue(1), Yh = /*#__PURE__*/ Ue(2), Gh = /*#__PURE__*/ Ue(3), Be = /*#__PURE__*/ Ue(4), Vh = /*#__PURE__*/ Ue(5), Xh = /*#__PURE__*/ Ue(6);
Ye.range;
gr.range;
Yh.range;
Gh.range;
Be.range;
Vh.range;
Xh.range;
var xr = /*#__PURE__*/ ot((t)=>{
    t.setDate(1), t.setHours(0, 0, 0, 0);
}, (t, e)=>{
    t.setMonth(t.getMonth() + e);
}, (t, e)=>e.getMonth() - t.getMonth() + (e.getFullYear() - t.getFullYear()) * 12, (t)=>t.getMonth());
xr.range;
var co = /*#__PURE__*/ ot((t)=>{
    t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
}, (t, e)=>{
    t.setUTCMonth(t.getUTCMonth() + e);
}, (t, e)=>e.getUTCMonth() - t.getUTCMonth() + (e.getUTCFullYear() - t.getUTCFullYear()) * 12, (t)=>t.getUTCMonth());
co.range;
var Nt = /*#__PURE__*/ ot((t)=>{
    t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, e)=>{
    t.setFullYear(t.getFullYear() + e);
}, (t, e)=>e.getFullYear() - t.getFullYear(), (t)=>t.getFullYear());
Nt.every = (t)=>!isFinite(t = /*#__PURE__*/ Math.floor(t)) || !(t > 0) ? null : ot((e)=>{
        e.setFullYear(Math.floor(e.getFullYear() / t) * t), e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
    }, (e, r)=>{
        e.setFullYear(e.getFullYear() + r * t);
    });
Nt.range;
var Vt = /*#__PURE__*/ ot((t)=>{
    t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, e)=>{
    t.setUTCFullYear(t.getUTCFullYear() + e);
}, (t, e)=>e.getUTCFullYear() - t.getUTCFullYear(), (t)=>t.getUTCFullYear());
Vt.every = (t)=>!isFinite(t = /*#__PURE__*/ Math.floor(t)) || !(t > 0) ? null : ot((e)=>{
        e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t), e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
    }, (e, r)=>{
        e.setUTCFullYear(e.getUTCFullYear() + r * t);
    });
Vt.range;
function Kh(t, e, r, o, n, s) {
    let a = [
        [
            ee,
            1,
            1e3
        ],
        [
            ee,
            5,
            5 * 1e3
        ],
        [
            ee,
            15,
            15 * 1e3
        ],
        [
            ee,
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
            n,
            1,
            36e5
        ],
        [
            n,
            3,
            3 * 36e5
        ],
        [
            n,
            6,
            6 * 36e5
        ],
        [
            n,
            12,
            12 * 36e5
        ],
        [
            o,
            1,
            864e5
        ],
        [
            o,
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
            t,
            1,
            31536e6
        ]
    ];
    function l(h, u, p) {
        let f = u < h;
        f && ([h, u] = [
            u,
            h
        ]);
        let g = p && typeof p.range == "function" ? p : c(h, u, p), T = g ? g.range(h, +u + 1) : [];
        return f ? T.reverse() : T;
    }
    m$1(l, "ticks");
    function c(h, u, p) {
        let f = Math.abs(u - h) / p, g = /*#__PURE__*/ Ie((param)=>{
            let [, , W] = param;
            return W;
        }).right(a, f);
        if (g === a.length) return t.every(/*#__PURE__*/ ir(h / 31536e6, u / 31536e6, p));
        if (g === 0) return Pe.every(/*#__PURE__*/ Math.max(/*#__PURE__*/ ir(h, u, p), 1));
        let [T, A] = a[f / a[g - 1][2] < a[g][2] / f ? g - 1 : g];
        return T.every(A);
    }
    return m$1(c, "tickInterval"), [
        l,
        c
    ];
}
m$1(Kh, "ticker");
var [$m, Hm] = Kh(Vt, co, Ye, ho, lo, ao), [Ns, qs] = Kh(Nt, xr, fe, ue, mr, dr);
function Ps(t) {
    if (0 <= t.y && t.y < 100) {
        var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
        return e.setFullYear(t.y), e;
    }
    return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
}
m$1(Ps, "localDate");
function Ws(t) {
    if (0 <= t.y && t.y < 100) {
        var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
        return e.setUTCFullYear(t.y), e;
    }
    return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
}
m$1(Ws, "utcDate");
function Kr(t, e, r) {
    return {
        y: t,
        m: e,
        d: r,
        H: 0,
        M: 0,
        S: 0,
        L: 0
    };
}
m$1(Kr, "newDate");
function $s(t) {
    var e = t.dateTime, r = t.date, o = t.time, n = t.periods, s = t.days, a = t.shortDays, l = t.months, c = t.shortMonths, h = /*#__PURE__*/ Qr(n), u = /*#__PURE__*/ Jr(n), p = /*#__PURE__*/ Qr(s), f = /*#__PURE__*/ Jr(s), g = /*#__PURE__*/ Qr(a), T = /*#__PURE__*/ Jr(a), A = /*#__PURE__*/ Qr(l), W = /*#__PURE__*/ Jr(l), q = /*#__PURE__*/ Qr(c), G = /*#__PURE__*/ Jr(c), O = {
        a: z,
        A: I,
        b: U,
        B: rt,
        c: null,
        d: ic,
        e: ic,
        f: fp,
        g: Tp,
        G: Sp,
        H: hp,
        I: cp,
        j: up,
        L: lc,
        m: dp,
        M: mp,
        p: Y,
        q: nt,
        Q: sc,
        s: ac,
        S: pp,
        u: gp,
        U: xp,
        V: yp,
        w: Cp,
        W: _p,
        x: null,
        X: null,
        y: bp,
        Y: kp,
        Z: vp,
        "%": nc
    }, M = {
        a: Q,
        A: Ft,
        b: Z,
        B: Ct,
        c: null,
        d: oc,
        e: oc,
        f: Mp,
        g: qp,
        G: Wp,
        H: wp,
        I: Bp,
        j: Fp,
        L: cc,
        m: Lp,
        M: Ap,
        p: _t,
        q: lt,
        Q: sc,
        s: ac,
        S: Ep,
        u: Op,
        U: Dp,
        V: Ip,
        w: zp,
        W: Rp,
        x: null,
        X: null,
        y: Np,
        Y: Pp,
        Z: $p,
        "%": nc
    }, P = {
        a: it,
        A: B,
        b: k,
        B: x,
        c: y,
        d: ec,
        e: ec,
        f: np,
        g: tc,
        G: Jh,
        H: rc,
        I: rc,
        j: ep,
        L: op,
        m: tp,
        M: rp,
        p: $,
        q: Jm,
        Q: ap,
        s: lp,
        S: ip,
        u: Xm,
        U: jm,
        V: Zm,
        w: Vm,
        W: Km,
        x: L,
        X: S,
        y: tc,
        Y: Jh,
        Z: Qm,
        "%": sp
    };
    O.x = /*#__PURE__*/ w(r, O), O.X = /*#__PURE__*/ w(o, O), O.c = /*#__PURE__*/ w(e, O), M.x = /*#__PURE__*/ w(r, M), M.X = /*#__PURE__*/ w(o, M), M.c = /*#__PURE__*/ w(e, M);
    function w(v, H) {
        return function(V) {
            var C = [], mt = -1, J = 0, bt = v.length, Tt, It, Le;
            for(V instanceof Date || (V = new Date(+V)); ++mt < bt;)v.charCodeAt(mt) === 37 && (C.push(/*#__PURE__*/ v.slice(J, mt)), (It = Qh[Tt = /*#__PURE__*/ v.charAt(++mt)]) != null ? Tt = /*#__PURE__*/ v.charAt(++mt) : It = Tt === "e" ? " " : "0", (Le = H[Tt]) && (Tt = /*#__PURE__*/ Le(V, It)), C.push(Tt), J = mt + 1);
            return C.push(/*#__PURE__*/ v.slice(J, mt)), C.join("");
        };
    }
    m$1(w, "newFormat");
    function X(v, H) {
        return function(V) {
            var C = /*#__PURE__*/ Kr(1900, void 0, 1), mt = /*#__PURE__*/ j(C, v, V += "", 0), J, bt;
            if (mt != V.length) return null;
            if ("Q" in C) return new Date(C.Q);
            if ("s" in C) return new Date(C.s * 1e3 + ("L" in C ? C.L : 0));
            if (H && !("Z" in C) && (C.Z = 0), "p" in C && (C.H = C.H % 12 + C.p * 12), C.m === void 0 && (C.m = "q" in C ? C.q : 0), "V" in C) {
                if (C.V < 1 || C.V > 53) return null;
                "w" in C || (C.w = 1), "Z" in C ? (J = /*#__PURE__*/ Ws(/*#__PURE__*/ Kr(C.y, 0, 1)), bt = /*#__PURE__*/ J.getUTCDay(), J = bt > 4 || bt === 0 ? gr.ceil(J) : gr(J), J = /*#__PURE__*/ Zr.offset(J, (C.V - 1) * 7), C.y = /*#__PURE__*/ J.getUTCFullYear(), C.m = /*#__PURE__*/ J.getUTCMonth(), C.d = J.getUTCDate() + (C.w + 6) % 7) : (J = /*#__PURE__*/ Ps(/*#__PURE__*/ Kr(C.y, 0, 1)), bt = /*#__PURE__*/ J.getDay(), J = bt > 4 || bt === 0 ? pr.ceil(J) : pr(J), J = /*#__PURE__*/ ue.offset(J, (C.V - 1) * 7), C.y = /*#__PURE__*/ J.getFullYear(), C.m = /*#__PURE__*/ J.getMonth(), C.d = J.getDate() + (C.w + 6) % 7);
            } else ("W" in C || "U" in C) && ("w" in C || (C.w = "u" in C ? C.u % 7 : "W" in C ? 1 : 0), bt = "Z" in C ? Ws(/*#__PURE__*/ Kr(C.y, 0, 1)).getUTCDay() : Ps(/*#__PURE__*/ Kr(C.y, 0, 1)).getDay(), C.m = 0, C.d = "W" in C ? (C.w + 6) % 7 + C.W * 7 - (bt + 5) % 7 : C.w + C.U * 7 - (bt + 6) % 7);
            return "Z" in C ? (C.H += C.Z / 100 | 0, C.M += C.Z % 100, Ws(C)) : Ps(C);
        };
    }
    m$1(X, "newParse");
    function j(v, H, V, C) {
        for(var mt = 0, J = H.length, bt = V.length, Tt, It; mt < J;){
            if (C >= bt) return -1;
            if (Tt = /*#__PURE__*/ H.charCodeAt(mt++), Tt === 37) {
                if (Tt = /*#__PURE__*/ H.charAt(mt++), It = P[Tt in Qh ? H.charAt(mt++) : Tt], !It || (C = /*#__PURE__*/ It(v, V, C)) < 0) return -1;
            } else if (Tt != V.charCodeAt(C++)) return -1;
        }
        return C;
    }
    m$1(j, "parseSpecifier");
    function $(v, H, V) {
        var C = /*#__PURE__*/ h.exec(/*#__PURE__*/ H.slice(V));
        return C ? (v.p = /*#__PURE__*/ u.get(/*#__PURE__*/ C[0].toLowerCase()), V + C[0].length) : -1;
    }
    m$1($, "parsePeriod");
    function it(v, H, V) {
        var C = /*#__PURE__*/ g.exec(/*#__PURE__*/ H.slice(V));
        return C ? (v.w = /*#__PURE__*/ T.get(/*#__PURE__*/ C[0].toLowerCase()), V + C[0].length) : -1;
    }
    m$1(it, "parseShortWeekday");
    function B(v, H, V) {
        var C = /*#__PURE__*/ p.exec(/*#__PURE__*/ H.slice(V));
        return C ? (v.w = /*#__PURE__*/ f.get(/*#__PURE__*/ C[0].toLowerCase()), V + C[0].length) : -1;
    }
    m$1(B, "parseWeekday");
    function k(v, H, V) {
        var C = /*#__PURE__*/ q.exec(/*#__PURE__*/ H.slice(V));
        return C ? (v.m = /*#__PURE__*/ G.get(/*#__PURE__*/ C[0].toLowerCase()), V + C[0].length) : -1;
    }
    m$1(k, "parseShortMonth");
    function x(v, H, V) {
        var C = /*#__PURE__*/ A.exec(/*#__PURE__*/ H.slice(V));
        return C ? (v.m = /*#__PURE__*/ W.get(/*#__PURE__*/ C[0].toLowerCase()), V + C[0].length) : -1;
    }
    m$1(x, "parseMonth");
    function y(v, H, V) {
        return j(v, e, H, V);
    }
    m$1(y, "parseLocaleDateTime");
    function L(v, H, V) {
        return j(v, r, H, V);
    }
    m$1(L, "parseLocaleDate");
    function S(v, H, V) {
        return j(v, o, H, V);
    }
    m$1(S, "parseLocaleTime");
    function z(v) {
        return a[v.getDay()];
    }
    m$1(z, "formatShortWeekday");
    function I(v) {
        return s[v.getDay()];
    }
    m$1(I, "formatWeekday");
    function U(v) {
        return c[v.getMonth()];
    }
    m$1(U, "formatShortMonth");
    function rt(v) {
        return l[v.getMonth()];
    }
    m$1(rt, "formatMonth");
    function Y(v) {
        return n[+(v.getHours() >= 12)];
    }
    m$1(Y, "formatPeriod");
    function nt(v) {
        return 1 + ~~(v.getMonth() / 3);
    }
    m$1(nt, "formatQuarter");
    function Q(v) {
        return a[v.getUTCDay()];
    }
    m$1(Q, "formatUTCShortWeekday");
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
        return n[+(v.getUTCHours() >= 12)];
    }
    m$1(_t, "formatUTCPeriod");
    function lt(v) {
        return 1 + ~~(v.getUTCMonth() / 3);
    }
    return m$1(lt, "formatUTCQuarter"), {
        format: /*#__PURE__*/ m$1(function(v) {
            var H = /*#__PURE__*/ w(v += "", O);
            return H.toString = function() {
                return v;
            }, H;
        }, "format"),
        parse: /*#__PURE__*/ m$1(function(v) {
            var H = /*#__PURE__*/ X(v += "", false);
            return H.toString = function() {
                return v;
            }, H;
        }, "parse"),
        utcFormat: /*#__PURE__*/ m$1(function(v) {
            var H = /*#__PURE__*/ w(v += "", M);
            return H.toString = function() {
                return v;
            }, H;
        }, "utcFormat"),
        utcParse: /*#__PURE__*/ m$1(function(v) {
            var H = /*#__PURE__*/ X(v += "", true);
            return H.toString = function() {
                return v;
            }, H;
        }, "utcParse")
    };
}
m$1($s, "formatLocale");
var Qh = {
    "-": "",
    _: " ",
    0: "0"
}, xt = /^\s*\d+/, Um = /^%/, Ym = /[\\^$*+?|[\]().{}]/g;
function et(t, e, r) {
    var o = t < 0 ? "-" : "", n = (o ? -t : t) + "", s = n.length;
    return o + (s < r ? new Array(r - s + 1).join(e) + n : n);
}
m$1(et, "pad");
function Gm(t) {
    return t.replace(Ym, "\\$&");
}
m$1(Gm, "requote");
function Qr(t) {
    return new RegExp("^(?:" + t.map(Gm).join("|") + ")", "i");
}
m$1(Qr, "formatRe");
function Jr(t) {
    return new Map(t.map((e, r)=>[
            /*#__PURE__*/ e.toLowerCase(),
            r
        ]));
}
m$1(Jr, "formatLookup");
function Vm(t, e, r) {
    var o = /*#__PURE__*/ xt.exec(/*#__PURE__*/ e.slice(r, r + 1));
    return o ? (t.w = +o[0], r + o[0].length) : -1;
}
m$1(Vm, "parseWeekdayNumberSunday");
function Xm(t, e, r) {
    var o = /*#__PURE__*/ xt.exec(/*#__PURE__*/ e.slice(r, r + 1));
    return o ? (t.u = +o[0], r + o[0].length) : -1;
}
m$1(Xm, "parseWeekdayNumberMonday");
function jm(t, e, r) {
    var o = /*#__PURE__*/ xt.exec(/*#__PURE__*/ e.slice(r, r + 2));
    return o ? (t.U = +o[0], r + o[0].length) : -1;
}
m$1(jm, "parseWeekNumberSunday");
function Zm(t, e, r) {
    var o = /*#__PURE__*/ xt.exec(/*#__PURE__*/ e.slice(r, r + 2));
    return o ? (t.V = +o[0], r + o[0].length) : -1;
}
m$1(Zm, "parseWeekNumberISO");
function Km(t, e, r) {
    var o = /*#__PURE__*/ xt.exec(/*#__PURE__*/ e.slice(r, r + 2));
    return o ? (t.W = +o[0], r + o[0].length) : -1;
}
m$1(Km, "parseWeekNumberMonday");
function Jh(t, e, r) {
    var o = /*#__PURE__*/ xt.exec(/*#__PURE__*/ e.slice(r, r + 4));
    return o ? (t.y = +o[0], r + o[0].length) : -1;
}
m$1(Jh, "parseFullYear");
function tc(t, e, r) {
    var o = /*#__PURE__*/ xt.exec(/*#__PURE__*/ e.slice(r, r + 2));
    return o ? (t.y = +o[0] + (+o[0] > 68 ? 1900 : 2e3), r + o[0].length) : -1;
}
m$1(tc, "parseYear");
function Qm(t, e, r) {
    var o = /*#__PURE__*/ /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(/*#__PURE__*/ e.slice(r, r + 6));
    return o ? (t.Z = o[1] ? 0 : -(o[2] + (o[3] || "00")), r + o[0].length) : -1;
}
m$1(Qm, "parseZone");
function Jm(t, e, r) {
    var o = /*#__PURE__*/ xt.exec(/*#__PURE__*/ e.slice(r, r + 1));
    return o ? (t.q = o[0] * 3 - 3, r + o[0].length) : -1;
}
m$1(Jm, "parseQuarter");
function tp(t, e, r) {
    var o = /*#__PURE__*/ xt.exec(/*#__PURE__*/ e.slice(r, r + 2));
    return o ? (t.m = o[0] - 1, r + o[0].length) : -1;
}
m$1(tp, "parseMonthNumber");
function ec(t, e, r) {
    var o = /*#__PURE__*/ xt.exec(/*#__PURE__*/ e.slice(r, r + 2));
    return o ? (t.d = +o[0], r + o[0].length) : -1;
}
m$1(ec, "parseDayOfMonth");
function ep(t, e, r) {
    var o = /*#__PURE__*/ xt.exec(/*#__PURE__*/ e.slice(r, r + 3));
    return o ? (t.m = 0, t.d = +o[0], r + o[0].length) : -1;
}
m$1(ep, "parseDayOfYear");
function rc(t, e, r) {
    var o = /*#__PURE__*/ xt.exec(/*#__PURE__*/ e.slice(r, r + 2));
    return o ? (t.H = +o[0], r + o[0].length) : -1;
}
m$1(rc, "parseHour24");
function rp(t, e, r) {
    var o = /*#__PURE__*/ xt.exec(/*#__PURE__*/ e.slice(r, r + 2));
    return o ? (t.M = +o[0], r + o[0].length) : -1;
}
m$1(rp, "parseMinutes");
function ip(t, e, r) {
    var o = /*#__PURE__*/ xt.exec(/*#__PURE__*/ e.slice(r, r + 2));
    return o ? (t.S = +o[0], r + o[0].length) : -1;
}
m$1(ip, "parseSeconds");
function op(t, e, r) {
    var o = /*#__PURE__*/ xt.exec(/*#__PURE__*/ e.slice(r, r + 3));
    return o ? (t.L = +o[0], r + o[0].length) : -1;
}
m$1(op, "parseMilliseconds");
function np(t, e, r) {
    var o = /*#__PURE__*/ xt.exec(/*#__PURE__*/ e.slice(r, r + 6));
    return o ? (t.L = /*#__PURE__*/ Math.floor(o[0] / 1e3), r + o[0].length) : -1;
}
m$1(np, "parseMicroseconds");
function sp(t, e, r) {
    var o = /*#__PURE__*/ Um.exec(/*#__PURE__*/ e.slice(r, r + 1));
    return o ? r + o[0].length : -1;
}
m$1(sp, "parseLiteralPercent");
function ap(t, e, r) {
    var o = /*#__PURE__*/ xt.exec(/*#__PURE__*/ e.slice(r));
    return o ? (t.Q = +o[0], r + o[0].length) : -1;
}
m$1(ap, "parseUnixTimestamp");
function lp(t, e, r) {
    var o = /*#__PURE__*/ xt.exec(/*#__PURE__*/ e.slice(r));
    return o ? (t.s = +o[0], r + o[0].length) : -1;
}
m$1(lp, "parseUnixTimestampSeconds");
function ic(t, e) {
    return et(/*#__PURE__*/ t.getDate(), e, 2);
}
m$1(ic, "formatDayOfMonth");
function hp(t, e) {
    return et(/*#__PURE__*/ t.getHours(), e, 2);
}
m$1(hp, "formatHour24");
function cp(t, e) {
    return et(t.getHours() % 12 || 12, e, 2);
}
m$1(cp, "formatHour12");
function up(t, e) {
    return et(1 + ue.count(/*#__PURE__*/ Nt(t), t), e, 3);
}
m$1(up, "formatDayOfYear");
function lc(t, e) {
    return et(/*#__PURE__*/ t.getMilliseconds(), e, 3);
}
m$1(lc, "formatMilliseconds");
function fp(t, e) {
    return lc(t, e) + "000";
}
m$1(fp, "formatMicroseconds");
function dp(t, e) {
    return et(t.getMonth() + 1, e, 2);
}
m$1(dp, "formatMonthNumber");
function mp(t, e) {
    return et(/*#__PURE__*/ t.getMinutes(), e, 2);
}
m$1(mp, "formatMinutes");
function pp(t, e) {
    return et(/*#__PURE__*/ t.getSeconds(), e, 2);
}
m$1(pp, "formatSeconds");
function gp(t) {
    var e = /*#__PURE__*/ t.getDay();
    return e === 0 ? 7 : e;
}
m$1(gp, "formatWeekdayNumberMonday");
function xp(t, e) {
    return et(/*#__PURE__*/ fe.count(Nt(t) - 1, t), e, 2);
}
m$1(xp, "formatWeekNumberSunday");
function hc(t) {
    var e = /*#__PURE__*/ t.getDay();
    return e >= 4 || e === 0 ? we(t) : we.ceil(t);
}
m$1(hc, "dISO");
function yp(t, e) {
    return t = /*#__PURE__*/ hc(t), et(we.count(/*#__PURE__*/ Nt(t), t) + (Nt(t).getDay() === 4), e, 2);
}
m$1(yp, "formatWeekNumberISO");
function Cp(t) {
    return t.getDay();
}
m$1(Cp, "formatWeekdayNumberSunday");
function _p(t, e) {
    return et(/*#__PURE__*/ pr.count(Nt(t) - 1, t), e, 2);
}
m$1(_p, "formatWeekNumberMonday");
function bp(t, e) {
    return et(t.getFullYear() % 100, e, 2);
}
m$1(bp, "formatYear");
function Tp(t, e) {
    return t = /*#__PURE__*/ hc(t), et(t.getFullYear() % 100, e, 2);
}
m$1(Tp, "formatYearISO");
function kp(t, e) {
    return et(t.getFullYear() % 1e4, e, 4);
}
m$1(kp, "formatFullYear");
function Sp(t, e) {
    var r = /*#__PURE__*/ t.getDay();
    return t = r >= 4 || r === 0 ? we(t) : we.ceil(t), et(t.getFullYear() % 1e4, e, 4);
}
m$1(Sp, "formatFullYearISO");
function vp(t) {
    var e = /*#__PURE__*/ t.getTimezoneOffset();
    return (e > 0 ? "-" : (e *= -1, "+")) + et(e / 60 | 0, "0", 2) + et(e % 60, "0", 2);
}
m$1(vp, "formatZone");
function oc(t, e) {
    return et(/*#__PURE__*/ t.getUTCDate(), e, 2);
}
m$1(oc, "formatUTCDayOfMonth");
function wp(t, e) {
    return et(/*#__PURE__*/ t.getUTCHours(), e, 2);
}
m$1(wp, "formatUTCHour24");
function Bp(t, e) {
    return et(t.getUTCHours() % 12 || 12, e, 2);
}
m$1(Bp, "formatUTCHour12");
function Fp(t, e) {
    return et(1 + Zr.count(/*#__PURE__*/ Vt(t), t), e, 3);
}
m$1(Fp, "formatUTCDayOfYear");
function cc(t, e) {
    return et(/*#__PURE__*/ t.getUTCMilliseconds(), e, 3);
}
m$1(cc, "formatUTCMilliseconds");
function Mp(t, e) {
    return cc(t, e) + "000";
}
m$1(Mp, "formatUTCMicroseconds");
function Lp(t, e) {
    return et(t.getUTCMonth() + 1, e, 2);
}
m$1(Lp, "formatUTCMonthNumber");
function Ap(t, e) {
    return et(/*#__PURE__*/ t.getUTCMinutes(), e, 2);
}
m$1(Ap, "formatUTCMinutes");
function Ep(t, e) {
    return et(/*#__PURE__*/ t.getUTCSeconds(), e, 2);
}
m$1(Ep, "formatUTCSeconds");
function Op(t) {
    var e = /*#__PURE__*/ t.getUTCDay();
    return e === 0 ? 7 : e;
}
m$1(Op, "formatUTCWeekdayNumberMonday");
function Dp(t, e) {
    return et(/*#__PURE__*/ Ye.count(Vt(t) - 1, t), e, 2);
}
m$1(Dp, "formatUTCWeekNumberSunday");
function uc(t) {
    var e = /*#__PURE__*/ t.getUTCDay();
    return e >= 4 || e === 0 ? Be(t) : Be.ceil(t);
}
m$1(uc, "UTCdISO");
function Ip(t, e) {
    return t = /*#__PURE__*/ uc(t), et(Be.count(/*#__PURE__*/ Vt(t), t) + (Vt(t).getUTCDay() === 4), e, 2);
}
m$1(Ip, "formatUTCWeekNumberISO");
function zp(t) {
    return t.getUTCDay();
}
m$1(zp, "formatUTCWeekdayNumberSunday");
function Rp(t, e) {
    return et(/*#__PURE__*/ gr.count(Vt(t) - 1, t), e, 2);
}
m$1(Rp, "formatUTCWeekNumberMonday");
function Np(t, e) {
    return et(t.getUTCFullYear() % 100, e, 2);
}
m$1(Np, "formatUTCYear");
function qp(t, e) {
    return t = /*#__PURE__*/ uc(t), et(t.getUTCFullYear() % 100, e, 2);
}
m$1(qp, "formatUTCYearISO");
function Pp(t, e) {
    return et(t.getUTCFullYear() % 1e4, e, 4);
}
m$1(Pp, "formatUTCFullYear");
function Wp(t, e) {
    var r = /*#__PURE__*/ t.getUTCDay();
    return t = r >= 4 || r === 0 ? Be(t) : Be.ceil(t), et(t.getUTCFullYear() % 1e4, e, 4);
}
m$1(Wp, "formatUTCFullYearISO");
function $p() {
    return "+0000";
}
m$1($p, "formatUTCZone");
function nc() {
    return "%";
}
m$1(nc, "formatLiteralPercent");
function sc(t) {
    return +t;
}
m$1(sc, "formatUnixTimestamp");
function ac(t) {
    return Math.floor(+t / 1e3);
}
m$1(ac, "formatUnixTimestampSeconds");
var yr, uo;
Hs({
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
function Hs(t) {
    return yr = /*#__PURE__*/ $s(t), uo = yr.format, yr.parse, yr.utcFormat, yr.utcParse, yr;
}
m$1(Hs, "defaultLocale");
function Us(t, e) {
    t = /*#__PURE__*/ t.slice();
    var r = 0, o = t.length - 1, n = t[r], s = t[o], a;
    return s < n && (a = r, r = o, o = a, a = n, n = s, s = a), t[r] = /*#__PURE__*/ e.floor(n), t[o] = /*#__PURE__*/ e.ceil(s), t;
}
m$1(Us, "nice");
function Hp(t) {
    return new Date(t);
}
m$1(Hp, "date");
function Up(t) {
    return t instanceof Date ? +t : +new Date(+t);
}
m$1(Up, "number");
function pc(t, e, r, o, n, s, a, l, c, h) {
    var u = /*#__PURE__*/ Xr(), p = u.invert, f = u.domain, g = /*#__PURE__*/ h(".%L"), T = /*#__PURE__*/ h(":%S"), A = /*#__PURE__*/ h("%I:%M"), W = /*#__PURE__*/ h("%I %p"), q = /*#__PURE__*/ h("%a %d"), G = /*#__PURE__*/ h("%b %d"), O = /*#__PURE__*/ h("%B"), M = /*#__PURE__*/ h("%Y");
    function P(w) {
        return (c(w) < w ? g : l(w) < w ? T : a(w) < w ? A : s(w) < w ? W : o(w) < w ? n(w) < w ? q : G : r(w) < w ? O : M)(w);
    }
    return m$1(P, "tickFormat"), u.invert = function(w) {
        return new Date(p(w));
    }, u.domain = function(w) {
        return arguments.length ? f(/*#__PURE__*/ Array.from(w, Up)) : f().map(Hp);
    }, u.ticks = function(w) {
        var X = /*#__PURE__*/ f();
        return t(X[0], X[X.length - 1], w ?? 10);
    }, u.tickFormat = function(w, X) {
        return X == null ? P : h(X);
    }, u.nice = function(w) {
        var X = /*#__PURE__*/ f();
        return (!w || typeof w.range != "function") && (w = /*#__PURE__*/ e(X[0], X[X.length - 1], w ?? 10)), w ? f(/*#__PURE__*/ Us(X, w)) : u;
    }, u.copy = function() {
        return Ki(u, /*#__PURE__*/ pc(t, e, r, o, n, s, a, l, c, h));
    }, u;
}
m$1(pc, "calendar");
function gc() {
    return Se.apply(/*#__PURE__*/ pc(Ns, qs, Nt, xr, fe, ue, mr, dr, ee, uo).domain([
        new Date(2e3, 0, 1),
        new Date(2e3, 0, 2)
    ]), arguments);
}
m$1(gc, "time");
function Ys() {
    var t = /*#__PURE__*/ Vr().unknown(void 0), e = t.domain, r = t.range, o = 0, n = 1, s, a, l = false, c = 0, h = 0, u = .5;
    delete t.unknown;
    function p() {
        var f = e().length, g = n < o, T = g ? n : o, A = g ? o : n;
        s = (A - T) / Math.max(1, f - c + h * 2), l && (s = /*#__PURE__*/ Math.floor(s)), T += (A - T - s * (f - c)) * u, a = s * (1 - c), l && (T = /*#__PURE__*/ Math.round(T), a = /*#__PURE__*/ Math.round(a));
        var W = /*#__PURE__*/ Ri(f).map(function(q) {
            return T + s * q;
        });
        return r(g ? W.reverse() : W);
    }
    return m$1(p, "rescale"), t.domain = function(f) {
        return arguments.length ? (e(f), p()) : e();
    }, t.range = function(f) {
        return arguments.length ? ([o, n] = f, o = +o, n = +n, p()) : [
            o,
            n
        ];
    }, t.rangeRound = function(f) {
        return [o, n] = f, o = +o, n = +n, l = true, p();
    }, t.bandwidth = function() {
        return a;
    }, t.step = function() {
        return s;
    }, t.round = function(f) {
        return arguments.length ? (l = !!f, p()) : l;
    }, t.padding = function(f) {
        return arguments.length ? (c = /*#__PURE__*/ Math.min(1, h = +f), p()) : c;
    }, t.paddingInner = function(f) {
        return arguments.length ? (c = /*#__PURE__*/ Math.min(1, f), p()) : c;
    }, t.paddingOuter = function(f) {
        return arguments.length ? (h = +f, p()) : h;
    }, t.align = function(f) {
        return arguments.length ? (u = /*#__PURE__*/ Math.max(0, /*#__PURE__*/ Math.min(1, f)), p()) : u;
    }, t.copy = function() {
        return Ys(/*#__PURE__*/ e(), [
            o,
            n
        ]).round(l).paddingInner(c).paddingOuter(h).align(u);
    }, Se.apply(/*#__PURE__*/ p(), arguments);
}
m$1(Ys, "band");
function Gs(t) {
    for(var e = t.length / 6 | 0, r = new Array(e), o = 0; o < e;)r[o] = "#" + t.slice(o * 6, ++o * 6);
    return r;
}
m$1(Gs, "default");
var Yp = /*#__PURE__*/ Gs("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
function st(t) {
    return m$1(function() {
        return t;
    }, "constant");
}
m$1(st, "default");
var Vs = Math.abs, vt = Math.atan2, Fe = Math.cos, xc = Math.max, fo = Math.min, Xt = Math.sin, Ge = Math.sqrt, yt = 1e-12, Cr = Math.PI, ti = Cr / 2, _r = 2 * Cr;
function yc(t) {
    return t > 1 ? 0 : t < -1 ? Cr : Math.acos(t);
}
m$1(yc, "acos");
function Xs(t) {
    return t >= 1 ? ti : t <= -1 ? -ti : Math.asin(t);
}
m$1(Xs, "asin");
var js = Math.PI, Zs = 2 * js, Ve = 1e-6, Gp = Zs - Ve;
function Cc(t) {
    this._ += t[0];
    for(let e = 1, r = t.length; e < r; ++e)this._ += arguments[e] + t[e];
}
m$1(Cc, "append");
function Vp(t) {
    let e = /*#__PURE__*/ Math.floor(t);
    if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
    if (e > 15) return Cc;
    let r = 10 ** e;
    return function(o) {
        this._ += o[0];
        for(let n = 1, s = o.length; n < s; ++n)this._ += Math.round(arguments[n] * r) / r + o[n];
    };
}
m$1(Vp, "appendRound");
var Xe = class {
    static #_ = m$1(this, "Path");
    constructor(e){
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = e == null ? Cc : Vp(e);
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
    quadraticCurveTo(e, r, o, n) {
        this._append`Q${+e},${+r},${this._x1 = +o},${this._y1 = +n}`;
    }
    bezierCurveTo(e, r, o, n, s, a) {
        this._append`C${+e},${+r},${+o},${+n},${this._x1 = +s},${this._y1 = +a}`;
    }
    arcTo(e, r, o, n, s) {
        if (e = +e, r = +r, o = +o, n = +n, s = +s, s < 0) throw new Error(`negative radius: ${s}`);
        let a = this._x1, l = this._y1, c = o - e, h = n - r, u = a - e, p = l - r, f = u * u + p * p;
        if (this._x1 === null) this._append`M${this._x1 = e},${this._y1 = r}`;
        else if (f > Ve) if (!(Math.abs(p * c - h * u) > Ve) || !s) this._append`L${this._x1 = e},${this._y1 = r}`;
        else {
            let g = o - a, T = n - l, A = c * c + h * h, W = g * g + T * T, q = /*#__PURE__*/ Math.sqrt(A), G = /*#__PURE__*/ Math.sqrt(f), O = s * Math.tan((js - Math.acos((A + f - W) / (2 * q * G))) / 2), M = O / G, P = O / q;
            Math.abs(M - 1) > Ve && this._append`L${e + M * u},${r + M * p}`, this._append`A${s},${s},0,0,${+(p * g > u * T)},${this._x1 = e + P * c},${this._y1 = r + P * h}`;
        }
    }
    arc(e, r, o, n, s, a) {
        if (e = +e, r = +r, o = +o, a = !!a, o < 0) throw new Error(`negative radius: ${o}`);
        let l = o * Math.cos(n), c = o * Math.sin(n), h = e + l, u = r + c, p = 1 ^ a, f = a ? n - s : s - n;
        this._x1 === null ? this._append`M${h},${u}` : (Math.abs(this._x1 - h) > Ve || Math.abs(this._y1 - u) > Ve) && this._append`L${h},${u}`, o && (f < 0 && (f = f % Zs + Zs), f > Gp ? this._append`A${o},${o},0,1,${p},${e - l},${r - c}A${o},${o},0,1,${p},${this._x1 = h},${this._y1 = u}` : f > Ve && this._append`A${o},${o},0,${+(f >= js)},${p},${this._x1 = e + o * Math.cos(s)},${this._y1 = r + o * Math.sin(s)}`);
    }
    rect(e, r, o, n) {
        this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +r}h${o = +o}v${+n}h${-o}Z`;
    }
    toString() {
        return this._;
    }
};
function _c() {
    return new Xe;
}
m$1(_c, "path");
_c.prototype = Xe.prototype;
function mo(t) {
    let e = 3;
    return t.digits = function(r) {
        if (!arguments.length) return e;
        if (r == null) e = null;
        else {
            let o = /*#__PURE__*/ Math.floor(r);
            if (!(o >= 0)) throw new RangeError(`invalid digits: ${r}`);
            e = o;
        }
        return t;
    }, ()=>new Xe(e);
}
m$1(mo, "withPath");
function Xp(t) {
    return t.innerRadius;
}
m$1(Xp, "arcInnerRadius");
function jp(t) {
    return t.outerRadius;
}
m$1(jp, "arcOuterRadius");
function Zp(t) {
    return t.startAngle;
}
m$1(Zp, "arcStartAngle");
function Kp(t) {
    return t.endAngle;
}
m$1(Kp, "arcEndAngle");
function Qp(t) {
    return t && t.padAngle;
}
m$1(Qp, "arcPadAngle");
function Jp(t, e, r, o, n, s, a, l) {
    var c = r - t, h = o - e, u = a - n, p = l - s, f = p * c - u * h;
    if (!(f * f < yt)) return f = (u * (e - s) - p * (t - n)) / f, [
        t + f * c,
        e + f * h
    ];
}
m$1(Jp, "intersect");
function po(t, e, r, o, n, s, a) {
    var l = t - r, c = e - o, h = (a ? s : -s) / Ge(l * l + c * c), u = h * c, p = -h * l, f = t + u, g = e + p, T = r + u, A = o + p, W = (f + T) / 2, q = (g + A) / 2, G = T - f, O = A - g, M = G * G + O * O, P = n - s, w = f * A - T * g, X = (O < 0 ? -1 : 1) * Ge(/*#__PURE__*/ xc(0, P * P * M - w * w)), j = (w * O - G * X) / M, $ = (-w * G - O * X) / M, it = (w * O + G * X) / M, B = (-w * G + O * X) / M, k = j - W, x = $ - q, y = it - W, L = B - q;
    return k * k + x * x > y * y + L * L && (j = it, $ = B), {
        cx: j,
        cy: $,
        x01: -u,
        y01: -p,
        x11: j * (n / P - 1),
        y11: $ * (n / P - 1)
    };
}
m$1(po, "cornerTangents");
function bc() {
    var t = Xp, e = jp, r = /*#__PURE__*/ st(0), o = null, n = Zp, s = Kp, a = Qp, l = null, c = /*#__PURE__*/ mo(h);
    function h() {
        var u, p, f = +t.apply(this, arguments), g = +e.apply(this, arguments), T = n.apply(this, arguments) - ti, A = s.apply(this, arguments) - ti, W = /*#__PURE__*/ Vs(A - T), q = A > T;
        if (l || (l = u = /*#__PURE__*/ c()), g < f && (p = g, g = f, f = p), !(g > yt)) l.moveTo(0, 0);
        else if (W > _r - yt) l.moveTo(g * Fe(T), g * Xt(T)), l.arc(0, 0, g, T, A, !q), f > yt && (l.moveTo(f * Fe(A), f * Xt(A)), l.arc(0, 0, f, A, T, q));
        else {
            var G = T, O = A, M = T, P = A, w = W, X = W, j = a.apply(this, arguments) / 2, $ = j > yt && (o ? +o.apply(this, arguments) : Ge(f * f + g * g)), it = /*#__PURE__*/ fo(Vs(g - f) / 2, +r.apply(this, arguments)), B = it, k = it, x, y;
            if ($ > yt) {
                var L = /*#__PURE__*/ Xs($ / f * Xt(j)), S = /*#__PURE__*/ Xs($ / g * Xt(j));
                (w -= L * 2) > yt ? (L *= q ? 1 : -1, M += L, P -= L) : (w = 0, M = P = (T + A) / 2), (X -= S * 2) > yt ? (S *= q ? 1 : -1, G += S, O -= S) : (X = 0, G = O = (T + A) / 2);
            }
            var z = g * Fe(G), I = g * Xt(G), U = f * Fe(P), rt = f * Xt(P);
            if (it > yt) {
                var Y = g * Fe(O), nt = g * Xt(O), Q = f * Fe(M), Ft = f * Xt(M), Z;
                if (W < Cr) if (Z = /*#__PURE__*/ Jp(z, I, Q, Ft, Y, nt, U, rt)) {
                    var Ct = z - Z[0], _t = I - Z[1], lt = Y - Z[0], v = nt - Z[1], H = 1 / Xt(yc((Ct * lt + _t * v) / (Ge(Ct * Ct + _t * _t) * Ge(lt * lt + v * v))) / 2), V = /*#__PURE__*/ Ge(Z[0] * Z[0] + Z[1] * Z[1]);
                    B = /*#__PURE__*/ fo(it, (f - V) / (H - 1)), k = /*#__PURE__*/ fo(it, (g - V) / (H + 1));
                } else B = k = 0;
            }
            X > yt ? k > yt ? (x = /*#__PURE__*/ po(Q, Ft, z, I, g, k, q), y = /*#__PURE__*/ po(Y, nt, U, rt, g, k, q), l.moveTo(x.cx + x.x01, x.cy + x.y01), k < it ? l.arc(x.cx, x.cy, k, /*#__PURE__*/ vt(x.y01, x.x01), /*#__PURE__*/ vt(y.y01, y.x01), !q) : (l.arc(x.cx, x.cy, k, /*#__PURE__*/ vt(x.y01, x.x01), /*#__PURE__*/ vt(x.y11, x.x11), !q), l.arc(0, 0, g, /*#__PURE__*/ vt(x.cy + x.y11, x.cx + x.x11), /*#__PURE__*/ vt(y.cy + y.y11, y.cx + y.x11), !q), l.arc(y.cx, y.cy, k, /*#__PURE__*/ vt(y.y11, y.x11), /*#__PURE__*/ vt(y.y01, y.x01), !q))) : (l.moveTo(z, I), l.arc(0, 0, g, G, O, !q)) : l.moveTo(z, I), !(f > yt) || !(w > yt) ? l.lineTo(U, rt) : B > yt ? (x = /*#__PURE__*/ po(U, rt, Y, nt, f, -B, q), y = /*#__PURE__*/ po(z, I, Q, Ft, f, -B, q), l.lineTo(x.cx + x.x01, x.cy + x.y01), B < it ? l.arc(x.cx, x.cy, B, /*#__PURE__*/ vt(x.y01, x.x01), /*#__PURE__*/ vt(y.y01, y.x01), !q) : (l.arc(x.cx, x.cy, B, /*#__PURE__*/ vt(x.y01, x.x01), /*#__PURE__*/ vt(x.y11, x.x11), !q), l.arc(0, 0, f, /*#__PURE__*/ vt(x.cy + x.y11, x.cx + x.x11), /*#__PURE__*/ vt(y.cy + y.y11, y.cx + y.x11), q), l.arc(y.cx, y.cy, B, /*#__PURE__*/ vt(y.y11, y.x11), /*#__PURE__*/ vt(y.y01, y.x01), !q))) : l.arc(0, 0, f, P, M, q);
        }
        if (l.closePath(), u) return l = null, u + "" || null;
    }
    return m$1(h, "arc"), h.centroid = function() {
        var u = (+t.apply(this, arguments) + +e.apply(this, arguments)) / 2, p = (+n.apply(this, arguments) + +s.apply(this, arguments)) / 2 - Cr / 2;
        return [
            Fe(p) * u,
            Xt(p) * u
        ];
    }, h.innerRadius = function(u) {
        return arguments.length ? (t = typeof u == "function" ? u : st(+u), h) : t;
    }, h.outerRadius = function(u) {
        return arguments.length ? (e = typeof u == "function" ? u : st(+u), h) : e;
    }, h.cornerRadius = function(u) {
        return arguments.length ? (r = typeof u == "function" ? u : st(+u), h) : r;
    }, h.padRadius = function(u) {
        return arguments.length ? (o = u == null ? null : typeof u == "function" ? u : st(+u), h) : o;
    }, h.startAngle = function(u) {
        return arguments.length ? (n = typeof u == "function" ? u : st(+u), h) : n;
    }, h.endAngle = function(u) {
        return arguments.length ? (s = typeof u == "function" ? u : st(+u), h) : s;
    }, h.padAngle = function(u) {
        return arguments.length ? (a = typeof u == "function" ? u : st(+u), h) : a;
    }, h.context = function(u) {
        return arguments.length ? (l = u ?? null, h) : l;
    }, h;
}
m$1(bc, "default");
function Tc(t) {
    this._context = t;
}
m$1(Tc, "Linear");
Tc.prototype = {
    areaStart: /*#__PURE__*/ m$1(function() {
        this._line = 0;
    }, "areaStart"),
    areaEnd: /*#__PURE__*/ m$1(function() {
        this._line = NaN;
    }, "areaEnd"),
    lineStart: /*#__PURE__*/ m$1(function() {
        this._point = 0;
    }, "lineStart"),
    lineEnd: /*#__PURE__*/ m$1(function() {
        (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
    }, "lineEnd"),
    point: /*#__PURE__*/ m$1(function(t, e) {
        switch(t = +t, e = +e, this._point){
            case 0:
                this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                break;
            case 1:
                this._point = 2;
            default:
                this._context.lineTo(t, e);
                break;
        }
    }, "point")
};
function go(t) {
    return new Tc(t);
}
m$1(go, "default");
function ei(t) {
    return typeof t == "object" && "length" in t ? t : Array.from(t);
}
m$1(ei, "default");
function kc(t) {
    return t[0];
}
m$1(kc, "x");
function Sc(t) {
    return t[1];
}
m$1(Sc, "y");
function vc(t, e) {
    var r = /*#__PURE__*/ st(true), o = null, n = go, s = null, a = /*#__PURE__*/ mo(l);
    t = typeof t == "function" ? t : t === void 0 ? kc : st(t), e = typeof e == "function" ? e : e === void 0 ? Sc : st(e);
    function l(c) {
        var h, u = (c = /*#__PURE__*/ ei(c)).length, p, f = false, g;
        for(o == null && (s = /*#__PURE__*/ n(g = /*#__PURE__*/ a())), h = 0; h <= u; ++h)!(h < u && r(p = c[h], h, c)) === f && ((f = !f) ? s.lineStart() : s.lineEnd()), f && s.point(+t(p, h, c), +e(p, h, c));
        if (g) return s = null, g + "" || null;
    }
    return m$1(l, "line"), l.x = function(c) {
        return arguments.length ? (t = typeof c == "function" ? c : st(+c), l) : t;
    }, l.y = function(c) {
        return arguments.length ? (e = typeof c == "function" ? c : st(+c), l) : e;
    }, l.defined = function(c) {
        return arguments.length ? (r = typeof c == "function" ? c : st(!!c), l) : r;
    }, l.curve = function(c) {
        return arguments.length ? (n = c, o != null && (s = /*#__PURE__*/ n(o)), l) : n;
    }, l.context = function(c) {
        return arguments.length ? (c == null ? o = s = null : s = /*#__PURE__*/ n(o = c), l) : o;
    }, l;
}
m$1(vc, "default");
function Ks(t, e) {
    return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
m$1(Ks, "default");
function Qs(t) {
    return t;
}
m$1(Qs, "default");
function wc() {
    var t = Qs, e = Ks, r = null, o = /*#__PURE__*/ st(0), n = /*#__PURE__*/ st(_r), s = /*#__PURE__*/ st(0);
    function a(l) {
        var c, h = (l = /*#__PURE__*/ ei(l)).length, u, p, f = 0, g = new Array(h), T = new Array(h), A = +o.apply(this, arguments), W = /*#__PURE__*/ Math.min(_r, /*#__PURE__*/ Math.max(-_r, n.apply(this, arguments) - A)), q, G = /*#__PURE__*/ Math.min(Math.abs(W) / h, /*#__PURE__*/ s.apply(this, arguments)), O = G * (W < 0 ? -1 : 1), M;
        for(c = 0; c < h; ++c)(M = T[g[c] = c] = +t(l[c], c, l)) > 0 && (f += M);
        for(e != null ? g.sort(function(P, w) {
            return e(T[P], T[w]);
        }) : r != null && g.sort(function(P, w) {
            return r(l[P], l[w]);
        }), c = 0, p = f ? (W - h * O) / f : 0; c < h; ++c, A = q)u = g[c], M = T[u], q = A + (M > 0 ? M * p : 0) + O, T[u] = {
            data: l[u],
            index: c,
            value: M,
            startAngle: A,
            endAngle: q,
            padAngle: G
        };
        return T;
    }
    return m$1(a, "pie"), a.value = function(l) {
        return arguments.length ? (t = typeof l == "function" ? l : st(+l), a) : t;
    }, a.sortValues = function(l) {
        return arguments.length ? (e = l, r = null, a) : e;
    }, a.sort = function(l) {
        return arguments.length ? (r = l, e = null, a) : r;
    }, a.startAngle = function(l) {
        return arguments.length ? (o = typeof l == "function" ? l : st(+l), a) : o;
    }, a.endAngle = function(l) {
        return arguments.length ? (n = typeof l == "function" ? l : st(+l), a) : n;
    }, a.padAngle = function(l) {
        return arguments.length ? (s = typeof l == "function" ? l : st(+l), a) : s;
    }, a;
}
m$1(wc, "default");
var xo = class {
    static #_ = m$1(this, "Bump");
    constructor(e, r){
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
        switch(e = +e, r = +r, this._point){
            case 0:
                {
                    this._point = 1, this._line ? this._context.lineTo(e, r) : this._context.moveTo(e, r);
                    break;
                }
            case 1:
                this._point = 2;
            default:
                {
                    this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + e) / 2, this._y0, this._x0, r, e, r) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + r) / 2, e, this._y0, e, r);
                    break;
                }
        }
        this._x0 = e, this._y0 = r;
    }
};
function tg(t) {
    return new xo(t, true);
}
m$1(tg, "bumpX");
function eg(t) {
    return new xo(t, false);
}
m$1(eg, "bumpY");
function br(t, e, r) {
    t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + e) / 6, (t._y0 + 4 * t._y1 + r) / 6);
}
m$1(br, "point");
function ri(t) {
    this._context = t;
}
m$1(ri, "Basis");
ri.prototype = {
    areaStart: /*#__PURE__*/ m$1(function() {
        this._line = 0;
    }, "areaStart"),
    areaEnd: /*#__PURE__*/ m$1(function() {
        this._line = NaN;
    }, "areaEnd"),
    lineStart: /*#__PURE__*/ m$1(function() {
        this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
    }, "lineStart"),
    lineEnd: /*#__PURE__*/ m$1(function() {
        switch(this._point){
            case 3:
                br(this, this._x1, this._y1);
            case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
        }
        (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
    }, "lineEnd"),
    point: /*#__PURE__*/ m$1(function(t, e) {
        switch(t = +t, e = +e, this._point){
            case 0:
                this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
            default:
                br(this, t, e);
                break;
        }
        this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e;
    }, "point")
};
function Bc(t) {
    return new ri(t);
}
m$1(Bc, "default");
function qt() {}
m$1(qt, "default");
function Fc(t) {
    this._context = t;
}
m$1(Fc, "BasisClosed");
Fc.prototype = {
    areaStart: qt,
    areaEnd: qt,
    lineStart: /*#__PURE__*/ m$1(function() {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
    }, "lineStart"),
    lineEnd: /*#__PURE__*/ m$1(function() {
        switch(this._point){
            case 1:
                {
                    this._context.moveTo(this._x2, this._y2), this._context.closePath();
                    break;
                }
            case 2:
                {
                    this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
                    break;
                }
            case 3:
                {
                    this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
                    break;
                }
        }
    }, "lineEnd"),
    point: /*#__PURE__*/ m$1(function(t, e) {
        switch(t = +t, e = +e, this._point){
            case 0:
                this._point = 1, this._x2 = t, this._y2 = e;
                break;
            case 1:
                this._point = 2, this._x3 = t, this._y3 = e;
                break;
            case 2:
                this._point = 3, this._x4 = t, this._y4 = e, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + e) / 6);
                break;
            default:
                br(this, t, e);
                break;
        }
        this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e;
    }, "point")
};
function Mc(t) {
    return new Fc(t);
}
m$1(Mc, "default");
function Lc(t) {
    this._context = t;
}
m$1(Lc, "BasisOpen");
Lc.prototype = {
    areaStart: /*#__PURE__*/ m$1(function() {
        this._line = 0;
    }, "areaStart"),
    areaEnd: /*#__PURE__*/ m$1(function() {
        this._line = NaN;
    }, "areaEnd"),
    lineStart: /*#__PURE__*/ m$1(function() {
        this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
    }, "lineStart"),
    lineEnd: /*#__PURE__*/ m$1(function() {
        (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
    }, "lineEnd"),
    point: /*#__PURE__*/ m$1(function(t, e) {
        switch(t = +t, e = +e, this._point){
            case 0:
                this._point = 1;
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3;
                var r = (this._x0 + 4 * this._x1 + t) / 6, o = (this._y0 + 4 * this._y1 + e) / 6;
                this._line ? this._context.lineTo(r, o) : this._context.moveTo(r, o);
                break;
            case 3:
                this._point = 4;
            default:
                br(this, t, e);
                break;
        }
        this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e;
    }, "point")
};
function Ac(t) {
    return new Lc(t);
}
m$1(Ac, "default");
function Ec(t, e) {
    this._basis = new ri(t), this._beta = e;
}
m$1(Ec, "Bundle");
Ec.prototype = {
    lineStart: /*#__PURE__*/ m$1(function() {
        this._x = [], this._y = [], this._basis.lineStart();
    }, "lineStart"),
    lineEnd: /*#__PURE__*/ m$1(function() {
        var t = this._x, e = this._y, r = t.length - 1;
        if (r > 0) for(var o = t[0], n = e[0], s = t[r] - o, a = e[r] - n, l = -1, c; ++l <= r;)c = l / r, this._basis.point(this._beta * t[l] + (1 - this._beta) * (o + c * s), this._beta * e[l] + (1 - this._beta) * (n + c * a));
        this._x = this._y = null, this._basis.lineEnd();
    }, "lineEnd"),
    point: /*#__PURE__*/ m$1(function(t, e) {
        this._x.push(+t), this._y.push(+e);
    }, "point")
};
var rg = /*#__PURE__*/ m$1(function t(e) {
    function r(o) {
        return e === 1 ? new ri(o) : new Ec(o, e);
    }
    return m$1(r, "bundle"), r.beta = function(o) {
        return t(+o);
    }, r;
}, "custom")(.85);
function Tr(t, e, r) {
    t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - e), t._y2 + t._k * (t._y1 - r), t._x2, t._y2);
}
m$1(Tr, "point");
function yo(t, e) {
    this._context = t, this._k = (1 - e) / 6;
}
m$1(yo, "Cardinal");
yo.prototype = {
    areaStart: /*#__PURE__*/ m$1(function() {
        this._line = 0;
    }, "areaStart"),
    areaEnd: /*#__PURE__*/ m$1(function() {
        this._line = NaN;
    }, "areaEnd"),
    lineStart: /*#__PURE__*/ m$1(function() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
    }, "lineStart"),
    lineEnd: /*#__PURE__*/ m$1(function() {
        switch(this._point){
            case 2:
                this._context.lineTo(this._x2, this._y2);
                break;
            case 3:
                Tr(this, this._x1, this._y1);
                break;
        }
        (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
    }, "lineEnd"),
    point: /*#__PURE__*/ m$1(function(t, e) {
        switch(t = +t, e = +e, this._point){
            case 0:
                this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                break;
            case 1:
                this._point = 2, this._x1 = t, this._y1 = e;
                break;
            case 2:
                this._point = 3;
            default:
                Tr(this, t, e);
                break;
        }
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
    }, "point")
};
var ig = /*#__PURE__*/ m$1(function t(e) {
    function r(o) {
        return new yo(o, e);
    }
    return m$1(r, "cardinal"), r.tension = function(o) {
        return t(+o);
    }, r;
}, "custom")(0);
function Co(t, e) {
    this._context = t, this._k = (1 - e) / 6;
}
m$1(Co, "CardinalClosed");
Co.prototype = {
    areaStart: qt,
    areaEnd: qt,
    lineStart: /*#__PURE__*/ m$1(function() {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
    }, "lineStart"),
    lineEnd: /*#__PURE__*/ m$1(function() {
        switch(this._point){
            case 1:
                {
                    this._context.moveTo(this._x3, this._y3), this._context.closePath();
                    break;
                }
            case 2:
                {
                    this._context.lineTo(this._x3, this._y3), this._context.closePath();
                    break;
                }
            case 3:
                {
                    this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
                    break;
                }
        }
    }, "lineEnd"),
    point: /*#__PURE__*/ m$1(function(t, e) {
        switch(t = +t, e = +e, this._point){
            case 0:
                this._point = 1, this._x3 = t, this._y3 = e;
                break;
            case 1:
                this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = e);
                break;
            case 2:
                this._point = 3, this._x5 = t, this._y5 = e;
                break;
            default:
                Tr(this, t, e);
                break;
        }
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
    }, "point")
};
var og = /*#__PURE__*/ m$1(function t(e) {
    function r(o) {
        return new Co(o, e);
    }
    return m$1(r, "cardinal"), r.tension = function(o) {
        return t(+o);
    }, r;
}, "custom")(0);
function _o(t, e) {
    this._context = t, this._k = (1 - e) / 6;
}
m$1(_o, "CardinalOpen");
_o.prototype = {
    areaStart: /*#__PURE__*/ m$1(function() {
        this._line = 0;
    }, "areaStart"),
    areaEnd: /*#__PURE__*/ m$1(function() {
        this._line = NaN;
    }, "areaEnd"),
    lineStart: /*#__PURE__*/ m$1(function() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
    }, "lineStart"),
    lineEnd: /*#__PURE__*/ m$1(function() {
        (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
    }, "lineEnd"),
    point: /*#__PURE__*/ m$1(function(t, e) {
        switch(t = +t, e = +e, this._point){
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
                Tr(this, t, e);
                break;
        }
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
    }, "point")
};
var ng = /*#__PURE__*/ m$1(function t(e) {
    function r(o) {
        return new _o(o, e);
    }
    return m$1(r, "cardinal"), r.tension = function(o) {
        return t(+o);
    }, r;
}, "custom")(0);
function ii(t, e, r) {
    var o = t._x1, n = t._y1, s = t._x2, a = t._y2;
    if (t._l01_a > yt) {
        var l = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a, c = 3 * t._l01_a * (t._l01_a + t._l12_a);
        o = (o * l - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / c, n = (n * l - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / c;
    }
    if (t._l23_a > yt) {
        var h = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a, u = 3 * t._l23_a * (t._l23_a + t._l12_a);
        s = (s * h + t._x1 * t._l23_2a - e * t._l12_2a) / u, a = (a * h + t._y1 * t._l23_2a - r * t._l12_2a) / u;
    }
    t._context.bezierCurveTo(o, n, s, a, t._x2, t._y2);
}
m$1(ii, "point");
function Oc(t, e) {
    this._context = t, this._alpha = e;
}
m$1(Oc, "CatmullRom");
Oc.prototype = {
    areaStart: /*#__PURE__*/ m$1(function() {
        this._line = 0;
    }, "areaStart"),
    areaEnd: /*#__PURE__*/ m$1(function() {
        this._line = NaN;
    }, "areaEnd"),
    lineStart: /*#__PURE__*/ m$1(function() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    }, "lineStart"),
    lineEnd: /*#__PURE__*/ m$1(function() {
        switch(this._point){
            case 2:
                this._context.lineTo(this._x2, this._y2);
                break;
            case 3:
                this.point(this._x2, this._y2);
                break;
        }
        (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
    }, "lineEnd"),
    point: /*#__PURE__*/ m$1(function(t, e) {
        if (t = +t, e = +e, this._point) {
            var r = this._x2 - t, o = this._y2 - e;
            this._l23_a = /*#__PURE__*/ Math.sqrt(this._l23_2a = /*#__PURE__*/ Math.pow(r * r + o * o, this._alpha));
        }
        switch(this._point){
            case 0:
                this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3;
            default:
                ii(this, t, e);
                break;
        }
        this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
    }, "point")
};
var sg = /*#__PURE__*/ m$1(function t(e) {
    function r(o) {
        return e ? new Oc(o, e) : new yo(o, 0);
    }
    return m$1(r, "catmullRom"), r.alpha = function(o) {
        return t(+o);
    }, r;
}, "custom")(.5);
function Dc(t, e) {
    this._context = t, this._alpha = e;
}
m$1(Dc, "CatmullRomClosed");
Dc.prototype = {
    areaStart: qt,
    areaEnd: qt,
    lineStart: /*#__PURE__*/ m$1(function() {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    }, "lineStart"),
    lineEnd: /*#__PURE__*/ m$1(function() {
        switch(this._point){
            case 1:
                {
                    this._context.moveTo(this._x3, this._y3), this._context.closePath();
                    break;
                }
            case 2:
                {
                    this._context.lineTo(this._x3, this._y3), this._context.closePath();
                    break;
                }
            case 3:
                {
                    this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
                    break;
                }
        }
    }, "lineEnd"),
    point: /*#__PURE__*/ m$1(function(t, e) {
        if (t = +t, e = +e, this._point) {
            var r = this._x2 - t, o = this._y2 - e;
            this._l23_a = /*#__PURE__*/ Math.sqrt(this._l23_2a = /*#__PURE__*/ Math.pow(r * r + o * o, this._alpha));
        }
        switch(this._point){
            case 0:
                this._point = 1, this._x3 = t, this._y3 = e;
                break;
            case 1:
                this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = e);
                break;
            case 2:
                this._point = 3, this._x5 = t, this._y5 = e;
                break;
            default:
                ii(this, t, e);
                break;
        }
        this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
    }, "point")
};
var ag = /*#__PURE__*/ m$1(function t(e) {
    function r(o) {
        return e ? new Dc(o, e) : new Co(o, 0);
    }
    return m$1(r, "catmullRom"), r.alpha = function(o) {
        return t(+o);
    }, r;
}, "custom")(.5);
function Ic(t, e) {
    this._context = t, this._alpha = e;
}
m$1(Ic, "CatmullRomOpen");
Ic.prototype = {
    areaStart: /*#__PURE__*/ m$1(function() {
        this._line = 0;
    }, "areaStart"),
    areaEnd: /*#__PURE__*/ m$1(function() {
        this._line = NaN;
    }, "areaEnd"),
    lineStart: /*#__PURE__*/ m$1(function() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    }, "lineStart"),
    lineEnd: /*#__PURE__*/ m$1(function() {
        (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
    }, "lineEnd"),
    point: /*#__PURE__*/ m$1(function(t, e) {
        if (t = +t, e = +e, this._point) {
            var r = this._x2 - t, o = this._y2 - e;
            this._l23_a = /*#__PURE__*/ Math.sqrt(this._l23_2a = /*#__PURE__*/ Math.pow(r * r + o * o, this._alpha));
        }
        switch(this._point){
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
                ii(this, t, e);
                break;
        }
        this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
    }, "point")
};
var lg = /*#__PURE__*/ m$1(function t(e) {
    function r(o) {
        return e ? new Ic(o, e) : new _o(o, 0);
    }
    return m$1(r, "catmullRom"), r.alpha = function(o) {
        return t(+o);
    }, r;
}, "custom")(.5);
function zc(t) {
    this._context = t;
}
m$1(zc, "LinearClosed");
zc.prototype = {
    areaStart: qt,
    areaEnd: qt,
    lineStart: /*#__PURE__*/ m$1(function() {
        this._point = 0;
    }, "lineStart"),
    lineEnd: /*#__PURE__*/ m$1(function() {
        this._point && this._context.closePath();
    }, "lineEnd"),
    point: /*#__PURE__*/ m$1(function(t, e) {
        t = +t, e = +e, this._point ? this._context.lineTo(t, e) : (this._point = 1, this._context.moveTo(t, e));
    }, "point")
};
function Rc(t) {
    return new zc(t);
}
m$1(Rc, "default");
function Nc(t) {
    return t < 0 ? -1 : 1;
}
m$1(Nc, "sign");
function qc(t, e, r) {
    var o = t._x1 - t._x0, n = e - t._x1, s = (t._y1 - t._y0) / (o || n < 0 && -0), a = (r - t._y1) / (n || o < 0 && -0), l = (s * n + a * o) / (o + n);
    return (Nc(s) + Nc(a)) * Math.min(/*#__PURE__*/ Math.abs(s), /*#__PURE__*/ Math.abs(a), .5 * Math.abs(l)) || 0;
}
m$1(qc, "slope3");
function Pc(t, e) {
    var r = t._x1 - t._x0;
    return r ? (3 * (t._y1 - t._y0) / r - e) / 2 : e;
}
m$1(Pc, "slope2");
function Js(t, e, r) {
    var o = t._x0, n = t._y0, s = t._x1, a = t._y1, l = (s - o) / 3;
    t._context.bezierCurveTo(o + l, n + l * e, s - l, a - l * r, s, a);
}
m$1(Js, "point");
function bo(t) {
    this._context = t;
}
m$1(bo, "MonotoneX");
bo.prototype = {
    areaStart: /*#__PURE__*/ m$1(function() {
        this._line = 0;
    }, "areaStart"),
    areaEnd: /*#__PURE__*/ m$1(function() {
        this._line = NaN;
    }, "areaEnd"),
    lineStart: /*#__PURE__*/ m$1(function() {
        this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
    }, "lineStart"),
    lineEnd: /*#__PURE__*/ m$1(function() {
        switch(this._point){
            case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
            case 3:
                Js(this, this._t0, /*#__PURE__*/ Pc(this, this._t0));
                break;
        }
        (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
    }, "lineEnd"),
    point: /*#__PURE__*/ m$1(function(t, e) {
        var r = NaN;
        if (t = +t, e = +e, !(t === this._x1 && e === this._y1)) {
            switch(this._point){
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3, Js(this, /*#__PURE__*/ Pc(this, r = /*#__PURE__*/ qc(this, t, e)), r);
                    break;
                default:
                    Js(this, this._t0, r = /*#__PURE__*/ qc(this, t, e));
                    break;
            }
            this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e, this._t0 = r;
        }
    }, "point")
};
function Wc(t) {
    this._context = new $c(t);
}
m$1(Wc, "MonotoneY");
(Wc.prototype = /*#__PURE__*/ Object.create(bo.prototype)).point = function(t, e) {
    bo.prototype.point.call(this, e, t);
};
function $c(t) {
    this._context = t;
}
m$1($c, "ReflectContext");
$c.prototype = {
    moveTo: /*#__PURE__*/ m$1(function(t, e) {
        this._context.moveTo(e, t);
    }, "moveTo"),
    closePath: /*#__PURE__*/ m$1(function() {
        this._context.closePath();
    }, "closePath"),
    lineTo: /*#__PURE__*/ m$1(function(t, e) {
        this._context.lineTo(e, t);
    }, "lineTo"),
    bezierCurveTo: /*#__PURE__*/ m$1(function(t, e, r, o, n, s) {
        this._context.bezierCurveTo(e, t, o, r, s, n);
    }, "bezierCurveTo")
};
function hg(t) {
    return new bo(t);
}
m$1(hg, "monotoneX");
function cg(t) {
    return new Wc(t);
}
m$1(cg, "monotoneY");
function Uc(t) {
    this._context = t;
}
m$1(Uc, "Natural");
Uc.prototype = {
    areaStart: /*#__PURE__*/ m$1(function() {
        this._line = 0;
    }, "areaStart"),
    areaEnd: /*#__PURE__*/ m$1(function() {
        this._line = NaN;
    }, "areaEnd"),
    lineStart: /*#__PURE__*/ m$1(function() {
        this._x = [], this._y = [];
    }, "lineStart"),
    lineEnd: /*#__PURE__*/ m$1(function() {
        var t = this._x, e = this._y, r = t.length;
        if (r) if (this._line ? this._context.lineTo(t[0], e[0]) : this._context.moveTo(t[0], e[0]), r === 2) this._context.lineTo(t[1], e[1]);
        else for(var o = /*#__PURE__*/ Hc(t), n = /*#__PURE__*/ Hc(e), s = 0, a = 1; a < r; ++s, ++a)this._context.bezierCurveTo(o[0][s], n[0][s], o[1][s], n[1][s], t[a], e[a]);
        (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
    }, "lineEnd"),
    point: /*#__PURE__*/ m$1(function(t, e) {
        this._x.push(+t), this._y.push(+e);
    }, "point")
};
function Hc(t) {
    var e, r = t.length - 1, o, n = new Array(r), s = new Array(r), a = new Array(r);
    for(n[0] = 0, s[0] = 2, a[0] = t[0] + 2 * t[1], e = 1; e < r - 1; ++e)n[e] = 1, s[e] = 4, a[e] = 4 * t[e] + 2 * t[e + 1];
    for(n[r - 1] = 2, s[r - 1] = 7, a[r - 1] = 8 * t[r - 1] + t[r], e = 1; e < r; ++e)o = n[e] / s[e - 1], s[e] -= o, a[e] -= o * a[e - 1];
    for(n[r - 1] = a[r - 1] / s[r - 1], e = r - 2; e >= 0; --e)n[e] = (a[e] - n[e + 1]) / s[e];
    for(s[r - 1] = (t[r] + n[r - 1]) / 2, e = 0; e < r - 1; ++e)s[e] = 2 * t[e + 1] - n[e + 1];
    return [
        n,
        s
    ];
}
m$1(Hc, "controlPoints");
function Yc(t) {
    return new Uc(t);
}
m$1(Yc, "default");
function To(t, e) {
    this._context = t, this._t = e;
}
m$1(To, "Step");
To.prototype = {
    areaStart: /*#__PURE__*/ m$1(function() {
        this._line = 0;
    }, "areaStart"),
    areaEnd: /*#__PURE__*/ m$1(function() {
        this._line = NaN;
    }, "areaEnd"),
    lineStart: /*#__PURE__*/ m$1(function() {
        this._x = this._y = NaN, this._point = 0;
    }, "lineStart"),
    lineEnd: /*#__PURE__*/ m$1(function() {
        0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
    }, "lineEnd"),
    point: /*#__PURE__*/ m$1(function(t, e) {
        switch(t = +t, e = +e, this._point){
            case 0:
                this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                break;
            case 1:
                this._point = 2;
            default:
                {
                    if (this._t <= 0) this._context.lineTo(this._x, e), this._context.lineTo(t, e);
                    else {
                        var r = this._x * (1 - this._t) + t * this._t;
                        this._context.lineTo(r, this._y), this._context.lineTo(r, e);
                    }
                    break;
                }
        }
        this._x = t, this._y = e;
    }, "point")
};
function Gc(t) {
    return new To(t, .5);
}
m$1(Gc, "default");
function ug(t) {
    return new To(t, 0);
}
m$1(ug, "stepBefore");
function fg(t) {
    return new To(t, 1);
}
m$1(fg, "stepAfter");
var dg = {
    value: /*#__PURE__*/ m$1(()=>{}, "value")
};
function Xc() {
    for(var t = 0, e = arguments.length, r = {}, o; t < e; ++t){
        if (!(o = arguments[t] + "") || o in r || /[\s.]/.test(o)) throw new Error("illegal type: " + o);
        r[o] = [];
    }
    return new ko(r);
}
m$1(Xc, "dispatch");
function ko(t) {
    this._ = t;
}
m$1(ko, "Dispatch");
function mg(t, e) {
    return t.trim().split(/^|\s+/).map(function(r) {
        var o = "", n = /*#__PURE__*/ r.indexOf(".");
        if (n >= 0 && (o = /*#__PURE__*/ r.slice(n + 1), r = /*#__PURE__*/ r.slice(0, n)), r && !e.hasOwnProperty(r)) throw new Error("unknown type: " + r);
        return {
            type: r,
            name: o
        };
    });
}
m$1(mg, "parseTypenames");
ko.prototype = Xc.prototype = {
    constructor: ko,
    on: /*#__PURE__*/ m$1(function(t, e) {
        var r = this._, o = /*#__PURE__*/ mg(t + "", r), n, s = -1, a = o.length;
        if (arguments.length < 2) {
            for(; ++s < a;)if ((n = (t = o[s]).type) && (n = /*#__PURE__*/ pg(r[n], t.name))) return n;
            return;
        }
        if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
        for(; ++s < a;)if (n = (t = o[s]).type) r[n] = /*#__PURE__*/ Vc(r[n], t.name, e);
        else if (e == null) for(n in r)r[n] = /*#__PURE__*/ Vc(r[n], t.name, null);
        return this;
    }, "on"),
    copy: /*#__PURE__*/ m$1(function() {
        var t = {}, e = this._;
        for(var r in e)t[r] = /*#__PURE__*/ e[r].slice();
        return new ko(t);
    }, "copy"),
    call: /*#__PURE__*/ m$1(function(t, e) {
        if ((n = arguments.length - 2) > 0) for(var r = new Array(n), o = 0, n, s; o < n; ++o)r[o] = arguments[o + 2];
        if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        for(s = this._[t], o = 0, n = s.length; o < n; ++o)s[o].value.apply(e, r);
    }, "call"),
    apply: /*#__PURE__*/ m$1(function(t, e, r) {
        if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        for(var o = this._[t], n = 0, s = o.length; n < s; ++n)o[n].value.apply(e, r);
    }, "apply")
};
function pg(t, e) {
    for(var r = 0, o = t.length, n; r < o; ++r)if ((n = t[r]).name === e) return n.value;
}
m$1(pg, "get");
function Vc(t, e, r) {
    for(var o = 0, n = t.length; o < n; ++o)if (t[o].name === e) {
        t[o] = dg, t = /*#__PURE__*/ t.slice(0, o).concat(/*#__PURE__*/ t.slice(o + 1));
        break;
    }
    return r != null && t.push({
        name: e,
        value: r
    }), t;
}
m$1(Vc, "set");
var ta = Xc;
var kr = 0, ni = 0, oi = 0, Zc = 1e3, So, si, vo = 0, je = 0, wo = 0, ai = typeof performance == "object" && performance.now ? performance : Date, Kc = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
    setTimeout(t, 17);
};
function hi() {
    return je || (Kc(gg), je = ai.now() + wo);
}
m$1(hi, "now");
function gg() {
    je = 0;
}
m$1(gg, "clearNow");
function li() {
    this._call = this._time = this._next = null;
}
m$1(li, "Timer");
li.prototype = Bo.prototype = {
    constructor: li,
    restart: /*#__PURE__*/ m$1(function(t, e, r) {
        if (typeof t != "function") throw new TypeError("callback is not a function");
        r = (r == null ? hi() : +r) + (e == null ? 0 : +e), !this._next && si !== this && (si ? si._next = this : So = this, si = this), this._call = t, this._time = r, ea();
    }, "restart"),
    stop: /*#__PURE__*/ m$1(function() {
        this._call && (this._call = null, this._time = 1 / 0, ea());
    }, "stop")
};
function Bo(t, e, r) {
    var o = new li;
    return o.restart(t, e, r), o;
}
m$1(Bo, "timer");
function Qc() {
    hi(), ++kr;
    for(var t = So, e; t;)(e = je - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
    --kr;
}
m$1(Qc, "timerFlush");
function jc() {
    je = (vo = /*#__PURE__*/ ai.now()) + wo, kr = ni = 0;
    try {
        Qc();
    } finally{
        kr = 0, yg(), je = 0;
    }
}
m$1(jc, "wake");
function xg() {
    var t = /*#__PURE__*/ ai.now(), e = t - vo;
    e > Zc && (wo -= e, vo = t);
}
m$1(xg, "poke");
function yg() {
    for(var t, e = So, r, o = 1 / 0; e;)e._call ? (o > e._time && (o = e._time), t = e, e = e._next) : (r = e._next, e._next = null, e = t ? t._next = r : So = r);
    si = t, ea(o);
}
m$1(yg, "nap");
function ea(t) {
    if (!kr) {
        ni && (ni = /*#__PURE__*/ clearTimeout(ni));
        var e = t - je;
        e > 24 ? (t < 1 / 0 && (ni = /*#__PURE__*/ setTimeout(jc, t - ai.now() - wo)), oi && (oi = /*#__PURE__*/ clearInterval(oi))) : (oi || (vo = /*#__PURE__*/ ai.now(), oi = /*#__PURE__*/ setInterval(xg, Zc)), kr = 1, Kc(jc));
    }
}
m$1(ea, "sleep");
function ci(t, e, r) {
    var o = new li;
    return e = e == null ? 0 : +e, o.restart((n)=>{
        o.stop(), t(n + e);
    }, e, r), o;
}
m$1(ci, "default");
var Cg = /*#__PURE__*/ ta("start", "end", "cancel", "interrupt"), _g = [], eu = 0, Jc = 1, Mo = 2, Fo = 3, tu = 4, Lo = 5, ui = 6;
function de(t, e, r, o, n, s) {
    var a = t.__transition;
    if (!a) t.__transition = {};
    else if (r in a) return;
    bg(t, r, {
        name: e,
        index: o,
        group: n,
        on: Cg,
        tween: _g,
        time: s.time,
        delay: s.delay,
        duration: s.duration,
        ease: s.ease,
        timer: null,
        state: eu
    });
}
m$1(de, "default");
function fi(t, e) {
    var r = /*#__PURE__*/ dt(t, e);
    if (r.state > eu) throw new Error("too late; already scheduled");
    return r;
}
m$1(fi, "init");
function wt(t, e) {
    var r = /*#__PURE__*/ dt(t, e);
    if (r.state > Fo) throw new Error("too late; already running");
    return r;
}
m$1(wt, "set");
function dt(t, e) {
    var r = t.__transition;
    if (!r || !(r = r[e])) throw new Error("transition not found");
    return r;
}
m$1(dt, "get");
function bg(t, e, r) {
    var o = t.__transition, n;
    o[e] = r, r.timer = /*#__PURE__*/ Bo(s, 0, r.time);
    function s(h) {
        r.state = Jc, r.timer.restart(a, r.delay, r.time), r.delay <= h && a(h - r.delay);
    }
    m$1(s, "schedule");
    function a(h) {
        var u, p, f, g;
        if (r.state !== Jc) return c();
        for(u in o)if (g = o[u], g.name === r.name) {
            if (g.state === Fo) return ci(a);
            g.state === tu ? (g.state = ui, g.timer.stop(), g.on.call("interrupt", t, t.__data__, g.index, g.group), delete o[u]) : +u < e && (g.state = ui, g.timer.stop(), g.on.call("cancel", t, t.__data__, g.index, g.group), delete o[u]);
        }
        if (ci(function() {
            r.state === Fo && (r.state = tu, r.timer.restart(l, r.delay, r.time), l(h));
        }), r.state = Mo, r.on.call("start", t, t.__data__, r.index, r.group), r.state === Mo) {
            for(r.state = Fo, n = new Array(f = r.tween.length), u = 0, p = -1; u < f; ++u)(g = /*#__PURE__*/ r.tween[u].value.call(t, t.__data__, r.index, r.group)) && (n[++p] = g);
            n.length = p + 1;
        }
    }
    m$1(a, "start");
    function l(h) {
        for(var u = h < r.duration ? r.ease.call(null, h / r.duration) : (r.timer.restart(c), r.state = Lo, 1), p = -1, f = n.length; ++p < f;)n[p].call(t, u);
        r.state === Lo && (r.on.call("end", t, t.__data__, r.index, r.group), c());
    }
    m$1(l, "tick");
    function c() {
        r.state = ui, r.timer.stop(), delete o[e];
        for(var h in o)return;
        delete t.__transition;
    }
    m$1(c, "stop");
}
m$1(bg, "create");
function di(t, e) {
    var r = t.__transition, o, n, s = true, a;
    if (r) {
        e = e == null ? null : e + "";
        for(a in r){
            if ((o = r[a]).name !== e) {
                s = false;
                continue;
            }
            n = o.state > Mo && o.state < Lo, o.state = ui, o.timer.stop(), o.on.call(n ? "interrupt" : "cancel", t, t.__data__, o.index, o.group), delete r[a];
        }
        s && delete t.__transition;
    }
}
m$1(di, "default");
function ra(t) {
    return this.each(function() {
        di(this, t);
    });
}
m$1(ra, "default");
function Tg(t, e) {
    var r, o;
    return function() {
        var n = /*#__PURE__*/ wt(this, t), s = n.tween;
        if (s !== r) {
            o = r = s;
            for(var a = 0, l = o.length; a < l; ++a)if (o[a].name === e) {
                o = /*#__PURE__*/ o.slice(), o.splice(a, 1);
                break;
            }
        }
        n.tween = o;
    };
}
m$1(Tg, "tweenRemove");
function kg(t, e, r) {
    var o, n;
    if (typeof r != "function") throw new Error;
    return function() {
        var s = /*#__PURE__*/ wt(this, t), a = s.tween;
        if (a !== o) {
            n = /*#__PURE__*/ (o = a).slice();
            for(var l = {
                name: e,
                value: r
            }, c = 0, h = n.length; c < h; ++c)if (n[c].name === e) {
                n[c] = l;
                break;
            }
            c === h && n.push(l);
        }
        s.tween = n;
    };
}
m$1(kg, "tweenFunction");
function ia(t, e) {
    var r = this._id;
    if (t += "", arguments.length < 2) {
        for(var o = dt(/*#__PURE__*/ this.node(), r).tween, n = 0, s = o.length, a; n < s; ++n)if ((a = o[n]).name === t) return a.value;
        return null;
    }
    return this.each(/*#__PURE__*/ (e == null ? Tg : kg)(r, t, e));
}
m$1(ia, "default");
function Sr(t, e, r) {
    var o = t._id;
    return t.each(function() {
        var n = /*#__PURE__*/ wt(this, o);
        (n.value || (n.value = {}))[e] = /*#__PURE__*/ r.apply(this, arguments);
    }), function(n) {
        return dt(n, o).value[e];
    };
}
m$1(Sr, "tweenValue");
function mi(t, e) {
    var r;
    return (typeof e == "number" ? gt : e instanceof Yt ? Ne : (r = /*#__PURE__*/ Yt(e)) ? (e = r, Ne) : ur)(t, e);
}
m$1(mi, "default");
function Sg(t) {
    return function() {
        this.removeAttribute(t);
    };
}
m$1(Sg, "attrRemove");
function vg(t) {
    return function() {
        this.removeAttributeNS(t.space, t.local);
    };
}
m$1(vg, "attrRemoveNS");
function wg(t, e, r) {
    var o, n = r + "", s;
    return function() {
        var a = /*#__PURE__*/ this.getAttribute(t);
        return a === n ? null : a === o ? s : s = /*#__PURE__*/ e(o = a, r);
    };
}
m$1(wg, "attrConstant");
function Bg(t, e, r) {
    var o, n = r + "", s;
    return function() {
        var a = /*#__PURE__*/ this.getAttributeNS(t.space, t.local);
        return a === n ? null : a === o ? s : s = /*#__PURE__*/ e(o = a, r);
    };
}
m$1(Bg, "attrConstantNS");
function Fg(t, e, r) {
    var o, n, s;
    return function() {
        var a, l = /*#__PURE__*/ r(this), c;
        return l == null ? void this.removeAttribute(t) : (a = /*#__PURE__*/ this.getAttribute(t), c = l + "", a === c ? null : a === o && c === n ? s : (n = c, s = /*#__PURE__*/ e(o = a, l)));
    };
}
m$1(Fg, "attrFunction");
function Mg(t, e, r) {
    var o, n, s;
    return function() {
        var a, l = /*#__PURE__*/ r(this), c;
        return l == null ? void this.removeAttributeNS(t.space, t.local) : (a = /*#__PURE__*/ this.getAttributeNS(t.space, t.local), c = l + "", a === c ? null : a === o && c === n ? s : (n = c, s = /*#__PURE__*/ e(o = a, l)));
    };
}
m$1(Mg, "attrFunctionNS");
function oa(t, e) {
    var r = /*#__PURE__*/ Qt(t), o = r === "transform" ? _s : mi;
    return this.attrTween(t, typeof e == "function" ? (r.local ? Mg : Fg)(r, o, /*#__PURE__*/ Sr(this, "attr." + t, e)) : e == null ? (r.local ? vg : Sg)(r) : (r.local ? Bg : wg)(r, o, e));
}
m$1(oa, "default");
function Lg(t, e) {
    return function(r) {
        this.setAttribute(t, /*#__PURE__*/ e.call(this, r));
    };
}
m$1(Lg, "attrInterpolate");
function Ag(t, e) {
    return function(r) {
        this.setAttributeNS(t.space, t.local, /*#__PURE__*/ e.call(this, r));
    };
}
m$1(Ag, "attrInterpolateNS");
function Eg(t, e) {
    var r, o;
    function n() {
        var s = /*#__PURE__*/ e.apply(this, arguments);
        return s !== o && (r = (o = s) && Ag(t, s)), r;
    }
    return m$1(n, "tween"), n._value = e, n;
}
m$1(Eg, "attrTweenNS");
function Og(t, e) {
    var r, o;
    function n() {
        var s = /*#__PURE__*/ e.apply(this, arguments);
        return s !== o && (r = (o = s) && Lg(t, s)), r;
    }
    return m$1(n, "tween"), n._value = e, n;
}
m$1(Og, "attrTween");
function na(t, e) {
    var r = "attr." + t;
    if (arguments.length < 2) return (r = /*#__PURE__*/ this.tween(r)) && r._value;
    if (e == null) return this.tween(r, null);
    if (typeof e != "function") throw new Error;
    var o = /*#__PURE__*/ Qt(t);
    return this.tween(r, /*#__PURE__*/ (o.local ? Eg : Og)(o, e));
}
m$1(na, "default");
function Dg(t, e) {
    return function() {
        fi(this, t).delay = +e.apply(this, arguments);
    };
}
m$1(Dg, "delayFunction");
function Ig(t, e) {
    return e = +e, function() {
        fi(this, t).delay = e;
    };
}
m$1(Ig, "delayConstant");
function sa(t) {
    var e = this._id;
    return arguments.length ? this.each(/*#__PURE__*/ (typeof t == "function" ? Dg : Ig)(e, t)) : dt(/*#__PURE__*/ this.node(), e).delay;
}
m$1(sa, "default");
function zg(t, e) {
    return function() {
        wt(this, t).duration = +e.apply(this, arguments);
    };
}
m$1(zg, "durationFunction");
function Rg(t, e) {
    return e = +e, function() {
        wt(this, t).duration = e;
    };
}
m$1(Rg, "durationConstant");
function aa(t) {
    var e = this._id;
    return arguments.length ? this.each(/*#__PURE__*/ (typeof t == "function" ? zg : Rg)(e, t)) : dt(/*#__PURE__*/ this.node(), e).duration;
}
m$1(aa, "default");
function Ng(t, e) {
    if (typeof e != "function") throw new Error;
    return function() {
        wt(this, t).ease = e;
    };
}
m$1(Ng, "easeConstant");
function la(t) {
    var e = this._id;
    return arguments.length ? this.each(/*#__PURE__*/ Ng(e, t)) : dt(/*#__PURE__*/ this.node(), e).ease;
}
m$1(la, "default");
function qg(t, e) {
    return function() {
        var r = /*#__PURE__*/ e.apply(this, arguments);
        if (typeof r != "function") throw new Error;
        wt(this, t).ease = r;
    };
}
m$1(qg, "easeVarying");
function ha(t) {
    if (typeof t != "function") throw new Error;
    return this.each(/*#__PURE__*/ qg(this._id, t));
}
m$1(ha, "default");
function ca(t) {
    typeof t != "function" && (t = /*#__PURE__*/ nr(t));
    for(var e = this._groups, r = e.length, o = new Array(r), n = 0; n < r; ++n)for(var s = e[n], a = s.length, l = o[n] = [], c, h = 0; h < a; ++h)(c = s[h]) && t.call(c, c.__data__, h, s) && l.push(c);
    return new Dt(o, this._parents, this._name, this._id);
}
m$1(ca, "default");
function ua(t) {
    if (t._id !== this._id) throw new Error;
    for(var e = this._groups, r = t._groups, o = e.length, n = r.length, s = /*#__PURE__*/ Math.min(o, n), a = new Array(o), l = 0; l < s; ++l)for(var c = e[l], h = r[l], u = c.length, p = a[l] = new Array(u), f, g = 0; g < u; ++g)(f = c[g] || h[g]) && (p[g] = f);
    for(; l < o; ++l)a[l] = e[l];
    return new Dt(a, this._parents, this._name, this._id);
}
m$1(ua, "default");
function Pg(t) {
    return (t + "").trim().split(/^|\s+/).every(function(e) {
        var r = /*#__PURE__*/ e.indexOf(".");
        return r >= 0 && (e = /*#__PURE__*/ e.slice(0, r)), !e || e === "start";
    });
}
m$1(Pg, "start");
function Wg(t, e, r) {
    var o, n, s = Pg(e) ? fi : wt;
    return function() {
        var a = /*#__PURE__*/ s(this, t), l = a.on;
        l !== o && (n = /*#__PURE__*/ (o = l).copy()).on(e, r), a.on = n;
    };
}
m$1(Wg, "onFunction");
function fa(t, e) {
    var r = this._id;
    return arguments.length < 2 ? dt(/*#__PURE__*/ this.node(), r).on.on(t) : this.each(/*#__PURE__*/ Wg(r, t, e));
}
m$1(fa, "default");
function $g(t) {
    return function() {
        var e = this.parentNode;
        for(var r in this.__transition)if (+r !== t) return;
        e && e.removeChild(this);
    };
}
m$1($g, "removeFunction");
function da() {
    return this.on("end.remove", /*#__PURE__*/ $g(this._id));
}
m$1(da, "default");
function ma(t) {
    var e = this._name, r = this._id;
    typeof t != "function" && (t = /*#__PURE__*/ Ce(t));
    for(var o = this._groups, n = o.length, s = new Array(n), a = 0; a < n; ++a)for(var l = o[a], c = l.length, h = s[a] = new Array(c), u, p, f = 0; f < c; ++f)(u = l[f]) && (p = /*#__PURE__*/ t.call(u, u.__data__, f, l)) && ("__data__" in u && (p.__data__ = u.__data__), h[f] = p, de(h[f], e, r, f, h, /*#__PURE__*/ dt(u, r)));
    return new Dt(s, this._parents, e, r);
}
m$1(ma, "default");
function pa(t) {
    var e = this._name, r = this._id;
    typeof t != "function" && (t = /*#__PURE__*/ or(t));
    for(var o = this._groups, n = o.length, s = [], a = [], l = 0; l < n; ++l)for(var c = o[l], h = c.length, u, p = 0; p < h; ++p)if (u = c[p]) {
        for(var f = /*#__PURE__*/ t.call(u, u.__data__, p, c), g, T = /*#__PURE__*/ dt(u, r), A = 0, W = f.length; A < W; ++A)(g = f[A]) && de(g, e, r, A, f, T);
        s.push(f), a.push(u);
    }
    return new Dt(s, a, e, r);
}
m$1(pa, "default");
var Hg = le.prototype.constructor;
function ga() {
    return new Hg(this._groups, this._parents);
}
m$1(ga, "default");
function Ug(t, e) {
    var r, o, n;
    return function() {
        var s = /*#__PURE__*/ _e(this, t), a = (this.style.removeProperty(t), _e(this, t));
        return s === a ? null : s === r && a === o ? n : n = /*#__PURE__*/ e(r = s, o = a);
    };
}
m$1(Ug, "styleNull");
function ru(t) {
    return function() {
        this.style.removeProperty(t);
    };
}
m$1(ru, "styleRemove");
function Yg(t, e, r) {
    var o, n = r + "", s;
    return function() {
        var a = /*#__PURE__*/ _e(this, t);
        return a === n ? null : a === o ? s : s = /*#__PURE__*/ e(o = a, r);
    };
}
m$1(Yg, "styleConstant");
function Gg(t, e, r) {
    var o, n, s;
    return function() {
        var a = /*#__PURE__*/ _e(this, t), l = /*#__PURE__*/ r(this), c = l + "";
        return l == null && (c = l = (this.style.removeProperty(t), _e(this, t))), a === c ? null : a === o && c === n ? s : (n = c, s = /*#__PURE__*/ e(o = a, l));
    };
}
m$1(Gg, "styleFunction");
function Vg(t, e) {
    var r, o, n, s = "style." + e, a = "end." + s, l;
    return function() {
        var c = /*#__PURE__*/ wt(this, t), h = c.on, u = c.value[s] == null ? l || (l = /*#__PURE__*/ ru(e)) : void 0;
        (h !== r || n !== u) && (o = /*#__PURE__*/ (r = h).copy()).on(a, n = u), c.on = o;
    };
}
m$1(Vg, "styleMaybeRemove");
function xa(t, e, r) {
    var o = (t += "") == "transform" ? Cs : mi;
    return e == null ? this.styleTween(t, /*#__PURE__*/ Ug(t, o)).on("end.style." + t, /*#__PURE__*/ ru(t)) : typeof e == "function" ? this.styleTween(t, /*#__PURE__*/ Gg(t, o, /*#__PURE__*/ Sr(this, "style." + t, e))).each(/*#__PURE__*/ Vg(this._id, t)) : this.styleTween(t, /*#__PURE__*/ Yg(t, o, e), r).on("end.style." + t, null);
}
m$1(xa, "default");
function Xg(t, e, r) {
    return function(o) {
        this.style.setProperty(t, /*#__PURE__*/ e.call(this, o), r);
    };
}
m$1(Xg, "styleInterpolate");
function jg(t, e, r) {
    var o, n;
    function s() {
        var a = /*#__PURE__*/ e.apply(this, arguments);
        return a !== n && (o = (n = a) && Xg(t, a, r)), o;
    }
    return m$1(s, "tween"), s._value = e, s;
}
m$1(jg, "styleTween");
function ya(t, e, r) {
    var o = "style." + (t += "");
    if (arguments.length < 2) return (o = /*#__PURE__*/ this.tween(o)) && o._value;
    if (e == null) return this.tween(o, null);
    if (typeof e != "function") throw new Error;
    return this.tween(o, /*#__PURE__*/ jg(t, e, r ?? ""));
}
m$1(ya, "default");
function Zg(t) {
    return function() {
        this.textContent = t;
    };
}
m$1(Zg, "textConstant");
function Kg(t) {
    return function() {
        var e = /*#__PURE__*/ t(this);
        this.textContent = e ?? "";
    };
}
m$1(Kg, "textFunction");
function Ca(t) {
    return this.tween("text", typeof t == "function" ? Kg(/*#__PURE__*/ Sr(this, "text", t)) : Zg(t == null ? "" : t + ""));
}
m$1(Ca, "default");
function Qg(t) {
    return function(e) {
        this.textContent = /*#__PURE__*/ t.call(this, e);
    };
}
m$1(Qg, "textInterpolate");
function Jg(t) {
    var e, r;
    function o() {
        var n = /*#__PURE__*/ t.apply(this, arguments);
        return n !== r && (e = (r = n) && Qg(n)), e;
    }
    return m$1(o, "tween"), o._value = t, o;
}
m$1(Jg, "textTween");
function _a(t) {
    var e = "text";
    if (arguments.length < 1) return (e = /*#__PURE__*/ this.tween(e)) && e._value;
    if (t == null) return this.tween(e, null);
    if (typeof t != "function") throw new Error;
    return this.tween(e, /*#__PURE__*/ Jg(t));
}
m$1(_a, "default");
function ba() {
    for(var t = this._name, e = this._id, r = /*#__PURE__*/ Ao(), o = this._groups, n = o.length, s = 0; s < n; ++s)for(var a = o[s], l = a.length, c, h = 0; h < l; ++h)if (c = a[h]) {
        var u = /*#__PURE__*/ dt(c, e);
        de(c, t, r, h, a, {
            time: u.time + u.delay + u.duration,
            delay: 0,
            duration: u.duration,
            ease: u.ease
        });
    }
    return new Dt(o, this._parents, t, r);
}
m$1(ba, "default");
function Ta() {
    var t, e, r = this, o = r._id, n = /*#__PURE__*/ r.size();
    return new Promise(function(s, a) {
        var l = {
            value: a
        }, c = {
            value: /*#__PURE__*/ m$1(function() {
                --n === 0 && s();
            }, "value")
        };
        r.each(function() {
            var h = /*#__PURE__*/ wt(this, o), u = h.on;
            u !== t && (e = /*#__PURE__*/ (t = u).copy(), e._.cancel.push(l), e._.interrupt.push(l), e._.end.push(c)), h.on = e;
        }), n === 0 && s();
    });
}
m$1(Ta, "default");
var tx = 0;
function Dt(t, e, r, o) {
    this._groups = t, this._parents = e, this._name = r, this._id = o;
}
m$1(Dt, "Transition");
function iu(t) {
    return le().transition(t);
}
m$1(iu, "transition");
function Ao() {
    return ++tx;
}
m$1(Ao, "newId");
var me = le.prototype;
Dt.prototype = iu.prototype = {
    constructor: Dt,
    select: ma,
    selectAll: pa,
    selectChild: me.selectChild,
    selectChildren: me.selectChildren,
    filter: ca,
    merge: ua,
    selection: ga,
    transition: ba,
    call: me.call,
    nodes: me.nodes,
    node: me.node,
    size: me.size,
    empty: me.empty,
    each: me.each,
    on: fa,
    attr: oa,
    attrTween: na,
    style: xa,
    styleTween: ya,
    text: Ca,
    textTween: _a,
    remove: da,
    tween: ia,
    delay: sa,
    duration: aa,
    ease: la,
    easeVarying: ha,
    end: Ta,
    [Symbol.iterator]: me[Symbol.iterator]
};
function Eo(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
m$1(Eo, "cubicInOut");
var ex = {
    time: null,
    delay: 0,
    duration: 250,
    ease: Eo
};
function rx(t, e) {
    for(var r; !(r = t.__transition) || !(r = r[e]);)if (!(t = t.parentNode)) throw new Error(`transition ${e} not found`);
    return r;
}
m$1(rx, "inherit");
function ka(t) {
    var e, r;
    t instanceof Dt ? (e = t._id, t = t._name) : (e = /*#__PURE__*/ Ao(), (r = ex).time = /*#__PURE__*/ hi(), t = t == null ? null : t + "");
    for(var o = this._groups, n = o.length, s = 0; s < n; ++s)for(var a = o[s], l = a.length, c, h = 0; h < l; ++h)(c = a[h]) && de(c, t, e, h, a, r || rx(c, e));
    return new Dt(o, this._parents, t, e);
}
m$1(ka, "default");
le.prototype.interrupt = ra;
le.prototype.transition = ka;
function ou(t) {
    return [
        +t[0],
        +t[1]
    ];
}
m$1(ou, "number1");
function ix(t) {
    return [
        /*#__PURE__*/ ou(t[0]),
        /*#__PURE__*/ ou(t[1])
    ];
}
m$1(ix, "number2");
({
    input: /*#__PURE__*/ m$1(function(t, e) {
        return t == null ? null : [
            [
                +t[0],
                e[0][1]
            ],
            [
                +t[1],
                e[1][1]
            ]
        ];
    }, "input"),
    output: /*#__PURE__*/ m$1(function(t) {
        return t && [
            t[0][0],
            t[1][0]
        ];
    }, "output")
});
({
    input: /*#__PURE__*/ m$1(function(t, e) {
        return t == null ? null : [
            [
                e[0][0],
                +t[0]
            ],
            [
                e[1][0],
                +t[1]
            ]
        ];
    }, "input"),
    output: /*#__PURE__*/ m$1(function(t) {
        return t && [
            t[0][1],
            t[1][1]
        ];
    }, "output")
});
({
    input: /*#__PURE__*/ m$1(function(t) {
        return t == null ? null : ix(t);
    }, "input"),
    output: /*#__PURE__*/ m$1(function(t) {
        return t;
    }, "output")
});
function Sa(t) {
    return {
        type: t
    };
}
m$1(Sa, "type");
function Me(t, e, r) {
    this.k = t, this.x = e, this.y = r;
}
m$1(Me, "Transform");
Me.prototype = {
    constructor: Me,
    scale: /*#__PURE__*/ m$1(function(t) {
        return t === 1 ? this : new Me(this.k * t, this.x, this.y);
    }, "scale"),
    translate: /*#__PURE__*/ m$1(function(t, e) {
        return t === 0 & e === 0 ? this : new Me(this.k, this.x + this.k * t, this.y + this.k * e);
    }, "translate"),
    apply: /*#__PURE__*/ m$1(function(t) {
        return [
            t[0] * this.k + this.x,
            t[1] * this.k + this.y
        ];
    }, "apply"),
    applyX: /*#__PURE__*/ m$1(function(t) {
        return t * this.k + this.x;
    }, "applyX"),
    applyY: /*#__PURE__*/ m$1(function(t) {
        return t * this.k + this.y;
    }, "applyY"),
    invert: /*#__PURE__*/ m$1(function(t) {
        return [
            (t[0] - this.x) / this.k,
            (t[1] - this.y) / this.k
        ];
    }, "invert"),
    invertX: /*#__PURE__*/ m$1(function(t) {
        return (t - this.x) / this.k;
    }, "invertX"),
    invertY: /*#__PURE__*/ m$1(function(t) {
        return (t - this.y) / this.k;
    }, "invertY"),
    rescaleX: /*#__PURE__*/ m$1(function(t) {
        return t.copy().domain(/*#__PURE__*/ t.range().map(this.invertX, this).map(t.invert, t));
    }, "rescaleX"),
    rescaleY: /*#__PURE__*/ m$1(function(t) {
        return t.copy().domain(/*#__PURE__*/ t.range().map(this.invertY, this).map(t.invert, t));
    }, "rescaleY"),
    toString: /*#__PURE__*/ m$1(function() {
        return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    }, "toString")
};
var va = new Me(1, 0, 0);
wa.prototype = Me.prototype;
function wa(t) {
    for(; !t.__zoom;)if (!(t = t.parentNode)) return va;
    return t.__zoom;
}
m$1(wa, "transform");
export { Yl as $, ng as A, Bf as B, Cf as C, og as D, Er as E, Ff as F, Gc as G, Hl as H, rg as I, Ac as J, Mc as K, Lf as L, Mf as M, Nr as N, Oe as O, Pl as P, ja as Q, Rl as R, Sf as S, Tf as T, Fi as U, dx as V, hl as W, IC as X, Yc as Y, zC as Z, gc as _, Su as a, Ul as a0, Is as a1, sm as a2, Zf as a3, uo as a4, xr as a5, fe as a6, Hh as a7, $h as a8, we as a9, Iu as aA, Va as aB, er as aC, px as aD, bi as aE, aC as aF, kC as aG, Xa as aH, Vr as aI, wc as aJ, Yp as aK, pC as aL, un as aM, Ys as aN, Wh as aa, Ph as ab, pr as ac, ue as ad, mr as ae, dr as af, ee as ag, Pe as ah, jf as ai, Ya as aj, Of as ak, bc as al, $t as am, F as an, E as ao, mx as ap, Ar as aq, nC as ar, sC as as, yl as at, lC as au, RC as av, Ti as aw, NC as ax, oC as ay, ye as az, ae as b, vc as c, Bc as d, Lt as e, go as f, gC as g, fg as h, ih as i, cg as j, hg as k, eg as l, mf as m, tg as n, ig as o, pl as p, mC as q, Ef as r, sg as s, tt as t, ug as u, vf as v, wf as w, Rc as x, lg as y, ag as z };
