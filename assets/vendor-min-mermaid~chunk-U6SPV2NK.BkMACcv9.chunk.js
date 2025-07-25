const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-min-mermaid~katex-RV2QPRKB.DmDZHRCw.chunk.js","assets/vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './lib-nodepkg-typedef.BBnvnZfU.chunk.js';
import { m as m$1, q as q$1, n, o } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var ul = /*#__PURE__*/ n((Uo, Yo)=>{
    (function(t, e) {
        typeof Uo == "object" && typeof Yo < "u" ? Yo.exports = /*#__PURE__*/ e() : typeof define == "function" && define.amd ? define(e) : (t = typeof globalThis < "u" ? globalThis : t || self).dayjs = /*#__PURE__*/ e();
    })(Uo, function() {
        var t = 1e3, e = 6e4, r = 36e5, o = "millisecond", n = "second", a = "minute", s = "hour", l = "day", c = "week", h = "month", u = "quarter", p = "year", f = "date", g = "Invalid Date", C = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, k = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, L = {
            name: "en",
            weekdays: /*#__PURE__*/ "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            months: /*#__PURE__*/ "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            ordinal: /*#__PURE__*/ m$1(function(S) {
                var x = [
                    "th",
                    "st",
                    "nd",
                    "rd"
                ], y = S % 100;
                return "[" + S + (x[(y - 20) % 10] || x[y] || x[0]) + "]";
            }, "ordinal")
        }, A = /*#__PURE__*/ m$1(function(S, x, y) {
            var D = /*#__PURE__*/ String(S);
            return !D || D.length >= x ? S : "" + Array(x + 1 - D.length).join(y) + S;
        }, "m"), $ = {
            s: A,
            z: /*#__PURE__*/ m$1(function(S) {
                var x = -S.utcOffset(), y = /*#__PURE__*/ Math.abs(x), D = /*#__PURE__*/ Math.floor(y / 60), v = y % 60;
                return (x <= 0 ? "+" : "-") + A(D, 2, "0") + ":" + A(v, 2, "0");
            }, "z"),
            m: /*#__PURE__*/ m$1(function S(x, y) {
                if (x.date() < y.date()) return -S(y, x);
                var D = 12 * (y.year() - x.year()) + (y.month() - x.month()), v = /*#__PURE__*/ x.clone().add(D, h), N = y - v < 0, R = /*#__PURE__*/ x.clone().add(D + (N ? -1 : 1), h);
                return +(-(D + (y - v) / (N ? v - R : R - v)) || 0);
            }, "t"),
            a: /*#__PURE__*/ m$1(function(S) {
                return S < 0 ? Math.ceil(S) || 0 : Math.floor(S);
            }, "a"),
            p: /*#__PURE__*/ m$1(function(S) {
                return ({
                    M: h,
                    y: p,
                    w: c,
                    d: l,
                    D: f,
                    h: s,
                    m: a,
                    s: n,
                    ms: o,
                    Q: u
                })[S] || String(S || "").toLowerCase().replace(/s$/, "");
            }, "p"),
            u: /*#__PURE__*/ m$1(function(S) {
                return S === void 0;
            }, "u")
        }, O = "en", F = {};
        F[O] = L;
        var P = "$isDayjsObject", w = /*#__PURE__*/ m$1(function(S) {
            return S instanceof it || !(!S || !S[P]);
        }, "S"), X = /*#__PURE__*/ m$1(function S(x, y, D) {
            var v;
            if (!x) return O;
            if (typeof x == "string") {
                var N = /*#__PURE__*/ x.toLowerCase();
                F[N] && (v = N), y && (F[N] = y, v = N);
                var R = /*#__PURE__*/ x.split("-");
                if (!v && R.length > 1) return S(R[0]);
            } else {
                var Y = x.name;
                F[Y] = x, v = Y;
            }
            return !D && v && (O = v), v || !D && O;
        }, "t"), j = /*#__PURE__*/ m$1(function(S, x) {
            if (w(S)) return S.clone();
            var y = typeof x == "object" ? x : {};
            return y.date = S, y.args = arguments, new it(y);
        }, "O"), H = $;
        H.l = X, H.i = w, H.w = function(S, x) {
            return j(S, {
                locale: x.$L,
                utc: x.$u,
                x: x.$x,
                $offset: x.$offset
            });
        };
        var it = /*#__PURE__*/ function() {
            function S(y) {
                this.$L = /*#__PURE__*/ X(y.locale, null, true), this.parse(y), this.$x = this.$x || y.x || {}, this[P] = true;
            }
            m$1(S, "M");
            var x = S.prototype;
            return x.parse = function(y) {
                this.$d = /*#__PURE__*/ function(D) {
                    var v = D.date, N = D.utc;
                    if (v === null) return new Date(NaN);
                    if (H.u(v)) return new Date;
                    if (v instanceof Date) return new Date(v);
                    if (typeof v == "string" && !/Z$/i.test(v)) {
                        var R = /*#__PURE__*/ v.match(C);
                        if (R) {
                            var Y = R[2] - 1 || 0, rt = /*#__PURE__*/ (R[7] || "0").substring(0, 3);
                            return N ? new Date(Date.UTC(R[1], Y, R[3] || 1, R[4] || 0, R[5] || 0, R[6] || 0, rt)) : new Date(R[1], Y, R[3] || 1, R[4] || 0, R[5] || 0, R[6] || 0, rt);
                        }
                    }
                    return new Date(v);
                }(y), this.init();
            }, x.init = function() {
                var y = this.$d;
                this.$y = /*#__PURE__*/ y.getFullYear(), this.$M = /*#__PURE__*/ y.getMonth(), this.$D = /*#__PURE__*/ y.getDate(), this.$W = /*#__PURE__*/ y.getDay(), this.$H = /*#__PURE__*/ y.getHours(), this.$m = /*#__PURE__*/ y.getMinutes(), this.$s = /*#__PURE__*/ y.getSeconds(), this.$ms = /*#__PURE__*/ y.getMilliseconds();
            }, x.$utils = function() {
                return H;
            }, x.isValid = function() {
                return this.$d.toString() !== g;
            }, x.isSame = function(y, D) {
                var v = /*#__PURE__*/ j(y);
                return this.startOf(D) <= v && v <= this.endOf(D);
            }, x.isAfter = function(y, D) {
                return j(y) < this.startOf(D);
            }, x.isBefore = function(y, D) {
                return this.endOf(D) < j(y);
            }, x.$g = function(y, D, v) {
                return H.u(y) ? this[D] : this.set(v, y);
            }, x.unix = function() {
                return Math.floor(this.valueOf() / 1e3);
            }, x.valueOf = function() {
                return this.$d.getTime();
            }, x.startOf = function(y, D) {
                var v = this, N = !!H.u(D) || D, R = /*#__PURE__*/ H.p(y), Y = /*#__PURE__*/ m$1(function(_t, lt) {
                    var B = /*#__PURE__*/ H.w(v.$u ? Date.UTC(v.$y, lt, _t) : new Date(v.$y, lt, _t), v);
                    return N ? B : B.endOf(l);
                }, "l"), rt = /*#__PURE__*/ m$1(function(_t, lt) {
                    return H.w(/*#__PURE__*/ v.toDate()[_t].apply(/*#__PURE__*/ v.toDate("s"), /*#__PURE__*/ (N ? [
                        0,
                        0,
                        0,
                        0
                    ] : [
                        23,
                        59,
                        59,
                        999
                    ]).slice(lt)), v);
                }, "$"), G = this.$W, nt = this.$M, Q = this.$D, Ft = "set" + (this.$u ? "UTC" : "");
                switch(R){
                    case p:
                        return N ? Y(1, 0) : Y(31, 11);
                    case h:
                        return N ? Y(1, nt) : Y(0, nt + 1);
                    case c:
                        var Z = this.$locale().weekStart || 0, Ct = (G < Z ? G + 7 : G) - Z;
                        return Y(N ? Q - Ct : Q + (6 - Ct), nt);
                    case l:
                    case f:
                        return rt(Ft + "Hours", 0);
                    case s:
                        return rt(Ft + "Minutes", 1);
                    case a:
                        return rt(Ft + "Seconds", 2);
                    case n:
                        return rt(Ft + "Milliseconds", 3);
                    default:
                        return this.clone();
                }
            }, x.endOf = function(y) {
                return this.startOf(y, false);
            }, x.$set = function(y, D) {
                var v, N = /*#__PURE__*/ H.p(y), R = "set" + (this.$u ? "UTC" : ""), Y = (v = {}, v[l] = R + "Date", v[f] = R + "Date", v[h] = R + "Month", v[p] = R + "FullYear", v[s] = R + "Hours", v[a] = R + "Minutes", v[n] = R + "Seconds", v[o] = R + "Milliseconds", v)[N], rt = N === l ? this.$D + (D - this.$W) : D;
                if (N === h || N === p) {
                    var G = /*#__PURE__*/ this.clone().set(f, 1);
                    G.$d[Y](rt), G.init(), this.$d = G.set(f, /*#__PURE__*/ Math.min(this.$D, /*#__PURE__*/ G.daysInMonth())).$d;
                } else Y && this.$d[Y](rt);
                return this.init(), this;
            }, x.set = function(y, D) {
                return this.clone().$set(y, D);
            }, x.get = function(y) {
                return this[H.p(y)]();
            }, x.add = function(y, D) {
                var v, N = this;
                y = /*#__PURE__*/ Number(y);
                var R = /*#__PURE__*/ H.p(D), Y = /*#__PURE__*/ m$1(function(nt) {
                    var Q = /*#__PURE__*/ j(N);
                    return H.w(/*#__PURE__*/ Q.date(Q.date() + Math.round(nt * y)), N);
                }, "y");
                if (R === h) return this.set(h, this.$M + y);
                if (R === p) return this.set(p, this.$y + y);
                if (R === l) return Y(1);
                if (R === c) return Y(7);
                var rt = (v = {}, v[a] = e, v[s] = r, v[n] = t, v)[R] || 1, G = this.$d.getTime() + y * rt;
                return H.w(G, this);
            }, x.subtract = function(y, D) {
                return this.add(-1 * y, D);
            }, x.format = function(y) {
                var D = this, v = /*#__PURE__*/ this.$locale();
                if (!this.isValid()) return v.invalidDate || g;
                var N = y || "YYYY-MM-DDTHH:mm:ssZ", R = /*#__PURE__*/ H.z(this), Y = this.$H, rt = this.$m, G = this.$M, nt = v.weekdays, Q = v.months, Ft = v.meridiem, Z = /*#__PURE__*/ m$1(function(lt, B, U, V) {
                    return lt && (lt[B] || lt(D, N)) || U[B].slice(0, V);
                }, "h"), Ct = /*#__PURE__*/ m$1(function(lt) {
                    return H.s(Y % 12 || 12, lt, "0");
                }, "d"), _t = Ft || function(lt, B, U) {
                    var V = lt < 12 ? "AM" : "PM";
                    return U ? V.toLowerCase() : V;
                };
                return N.replace(k, function(lt, B) {
                    return B || function(U) {
                        switch(U){
                            case "YY":
                                return String(D.$y).slice(-2);
                            case "YYYY":
                                return H.s(D.$y, 4, "0");
                            case "M":
                                return G + 1;
                            case "MM":
                                return H.s(G + 1, 2, "0");
                            case "MMM":
                                return Z(v.monthsShort, G, Q, 3);
                            case "MMMM":
                                return Z(Q, G);
                            case "D":
                                return D.$D;
                            case "DD":
                                return H.s(D.$D, 2, "0");
                            case "d":
                                return String(D.$W);
                            case "dd":
                                return Z(v.weekdaysMin, D.$W, nt, 2);
                            case "ddd":
                                return Z(v.weekdaysShort, D.$W, nt, 3);
                            case "dddd":
                                return nt[D.$W];
                            case "H":
                                return String(Y);
                            case "HH":
                                return H.s(Y, 2, "0");
                            case "h":
                                return Ct(1);
                            case "hh":
                                return Ct(2);
                            case "a":
                                return _t(Y, rt, true);
                            case "A":
                                return _t(Y, rt, false);
                            case "m":
                                return String(rt);
                            case "mm":
                                return H.s(rt, 2, "0");
                            case "s":
                                return String(D.$s);
                            case "ss":
                                return H.s(D.$s, 2, "0");
                            case "SSS":
                                return H.s(D.$ms, 3, "0");
                            case "Z":
                                return R;
                        }
                        return null;
                    }(lt) || R.replace(":", "");
                });
            }, x.utcOffset = function() {
                return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
            }, x.diff = function(y, D, v) {
                var N, R = this, Y = /*#__PURE__*/ H.p(D), rt = /*#__PURE__*/ j(y), G = (rt.utcOffset() - this.utcOffset()) * e, nt = this - rt, Q = /*#__PURE__*/ m$1(function() {
                    return H.m(R, rt);
                }, "D");
                switch(Y){
                    case p:
                        N = Q() / 12;
                        break;
                    case h:
                        N = /*#__PURE__*/ Q();
                        break;
                    case u:
                        N = Q() / 3;
                        break;
                    case c:
                        N = (nt - G) / 6048e5;
                        break;
                    case l:
                        N = (nt - G) / 864e5;
                        break;
                    case s:
                        N = nt / r;
                        break;
                    case a:
                        N = nt / e;
                        break;
                    case n:
                        N = nt / t;
                        break;
                    default:
                        N = nt;
                }
                return v ? N : H.a(N);
            }, x.daysInMonth = function() {
                return this.endOf(h).$D;
            }, x.$locale = function() {
                return F[this.$L];
            }, x.locale = function(y, D) {
                if (!y) return this.$L;
                var v = /*#__PURE__*/ this.clone(), N = /*#__PURE__*/ X(y, D, true);
                return N && (v.$L = N), v;
            }, x.clone = function() {
                return H.w(this.$d, this);
            }, x.toDate = function() {
                return new Date(this.valueOf());
            }, x.toJSON = function() {
                return this.isValid() ? this.toISOString() : null;
            }, x.toISOString = function() {
                return this.$d.toISOString();
            }, x.toString = function() {
                return this.$d.toUTCString();
            }, S;
        }(), M = it.prototype;
        return j.prototype = M, [
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
                a
            ],
            [
                "$H",
                s
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
        ].forEach(function(S) {
            M[S[1]] = function(x) {
                return this.$g(x, S[0], S[1]);
            };
        }), j.extend = function(S, x) {
            return S.$i || (S(x, it, j), S.$i = true), j;
        }, j.locale = X, j.isDayjs = w, j.unix = function(S) {
            return j(1e3 * S);
        }, j.en = F[O], j.Ls = F, j.p = {}, j;
    });
});
var fl = /*#__PURE__*/ q$1(/*#__PURE__*/ ul());
var ne = {
    trace: 0,
    debug: 1,
    info: 2,
    warn: 3,
    error: 4,
    fatal: 5
}, tt = {
    trace: /*#__PURE__*/ m$1((...t)=>{}, "trace"),
    debug: /*#__PURE__*/ m$1((...t)=>{}, "debug"),
    info: /*#__PURE__*/ m$1((...t)=>{}, "info"),
    warn: /*#__PURE__*/ m$1((...t)=>{}, "warn"),
    error: /*#__PURE__*/ m$1((...t)=>{}, "error"),
    fatal: /*#__PURE__*/ m$1((...t)=>{}, "fatal")
}, dl = /*#__PURE__*/ m$1(function(t = "fatal") {
    let e = ne.fatal;
    typeof t == "string" ? t.toLowerCase() in ne && (e = ne[t]) : typeof t == "number" && (e = t), tt.trace = ()=>{}, tt.debug = ()=>{}, tt.info = ()=>{}, tt.warn = ()=>{}, tt.error = ()=>{}, tt.fatal = ()=>{}, e <= ne.fatal && (tt.fatal = console.error ? console.error.bind(console, /*#__PURE__*/ Pt("FATAL"), "color: orange") : console.log.bind(console, "\x1B[35m", /*#__PURE__*/ Pt("FATAL"))), e <= ne.error && (tt.error = console.error ? console.error.bind(console, /*#__PURE__*/ Pt("ERROR"), "color: orange") : console.log.bind(console, "\x1B[31m", /*#__PURE__*/ Pt("ERROR"))), e <= ne.warn && (tt.warn = console.warn ? console.warn.bind(console, /*#__PURE__*/ Pt("WARN"), "color: orange") : console.log.bind(console, "\x1B[33m", /*#__PURE__*/ Pt("WARN"))), e <= ne.info && (tt.info = console.info ? console.info.bind(console, /*#__PURE__*/ Pt("INFO"), "color: lightblue") : console.log.bind(console, "\x1B[34m", /*#__PURE__*/ Pt("INFO"))), e <= ne.debug && (tt.debug = console.debug ? console.debug.bind(console, /*#__PURE__*/ Pt("DEBUG"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", /*#__PURE__*/ Pt("DEBUG"))), e <= ne.trace && (tt.trace = console.debug ? console.debug.bind(console, /*#__PURE__*/ Pt("TRACE"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", /*#__PURE__*/ Pt("TRACE")));
}, "setLogLevel"), Pt = /*#__PURE__*/ m$1((t)=>`%c${(0, fl.default)().format("ss.SSS")} : ${t} : `, "format");
var pl = /^-{3}\s*[\n\r](.*?)[\n\r]-{3}\s*[\n\r]+/s, ml = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, gl = /\s*%%.*\n/gm;
var Si = class extends Error {
    static{
        m$1(this, "UnknownDiagramError");
    }
    constructor(e){
        super(e), this.name = "UnknownDiagramError";
    }
};
var vi = {}, Yx = /*#__PURE__*/ m$1(function(t, e) {
    t = /*#__PURE__*/ t.replace(pl, "").replace(ml, "").replace(gl, `
`);
    for (let [r, { detector: o }] of Object.entries(vi))if (o(t, e)) return r;
    throw new Si(`No diagram type detected matching given configuration for text: ${t}`);
}, "detectType"), Gx = /*#__PURE__*/ m$1((...t)=>{
    for (let { id: e, detector: r, loader: o } of t)Go(e, r, o);
}, "registerLazyLoadedDiagrams"), Go = /*#__PURE__*/ m$1((t, e, r)=>{
    vi[t] && tt.warn(`Detector with key ${t} already exists. Overwriting.`), vi[t] = {
        detector: e,
        loader: r
    }, tt.debug(`Detector with key ${t} added${r ? " with loader" : ""}`);
}, "addDetector"), Vx = /*#__PURE__*/ m$1((t)=>vi[t].loader, "getDiagramLoader");
var Vo = m$1((t, e, { depth: r = 2, clobber: o = false } = {})=>{
    let n = {
        depth: r,
        clobber: o
    };
    return Array.isArray(e) && !Array.isArray(t) ? (e.forEach((a)=>Vo(t, a, n)), t) : Array.isArray(e) && Array.isArray(t) ? (e.forEach((a)=>{
        t.includes(a) || t.push(a);
    }), t) : t === void 0 || r <= 0 ? t != null && typeof t == "object" && typeof e == "object" ? Object.assign(t, e) : e : (e !== void 0 && typeof t == "object" && typeof e == "object" && Object.keys(e).forEach((a)=>{
        typeof e[a] == "object" && (t[a] === void 0 || typeof t[a] == "object") ? (t[a] === void 0 && (t[a] = Array.isArray(e[a]) ? [] : {}), t[a] = /*#__PURE__*/ Vo(t[a], e[a], {
            depth: r - 1,
            clobber: o
        })) : (o || typeof t[a] != "object" && typeof e[a] != "object") && (t[a] = e[a]);
    }), t);
}, "assignWithDepth"), Mt = Vo;
var wi = {
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
    hsl2rgb: /*#__PURE__*/ m$1(({ h: t, s: e, l: r }, o)=>{
        if (!e) return r * 2.55;
        t /= 360, e /= 100, r /= 100;
        let n = r < .5 ? r * (1 + e) : r + e - r * e, a = 2 * r - n;
        switch(o){
            case "r":
                return wi.hue2rgb(a, n, t + .3333333333333333) * 255;
            case "g":
                return wi.hue2rgb(a, n, t) * 255;
            case "b":
                return wi.hue2rgb(a, n, t - .3333333333333333) * 255;
        }
    }, "hsl2rgb"),
    rgb2hsl: /*#__PURE__*/ m$1(({ r: t, g: e, b: r }, o)=>{
        t /= 255, e /= 255, r /= 255;
        let n = /*#__PURE__*/ Math.max(t, e, r), a = /*#__PURE__*/ Math.min(t, e, r), s = (n + a) / 2;
        if (o === "l") return s * 100;
        if (n === a) return 0;
        let l = n - a, c = s > .5 ? l / (2 - n - a) : l / (n + a);
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
}, xl = wi;
var qu = {
    clamp: /*#__PURE__*/ m$1((t, e, r)=>e > r ? Math.min(e, /*#__PURE__*/ Math.max(r, t)) : Math.min(r, /*#__PURE__*/ Math.max(e, t)), "clamp"),
    round: /*#__PURE__*/ m$1((t)=>Math.round(t * 1e10) / 1e10, "round")
}, yl = qu;
var Pu = {
    dec2hex: /*#__PURE__*/ m$1((t)=>{
        let e = /*#__PURE__*/ Math.round(t).toString(16);
        return e.length > 1 ? e : `0${e}`;
    }, "dec2hex")
}, Cl = Pu;
var Wu = {
    channel: xl,
    lang: yl,
    unit: Cl
}, q = Wu;
var ae = {};
for(let t = 0; t <= 255; t++)ae[t] = /*#__PURE__*/ q.unit.dec2hex(t);
var ut = {
    ALL: 0,
    RGB: 1,
    HSL: 2
};
var Xo = class {
    static{
        m$1(this, "Type");
    }
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
}, _l = Xo;
var jo = class {
    static{
        m$1(this, "Channels");
    }
    constructor(e, r){
        this.color = r, this.changed = false, this.data = e, this.type = new _l;
    }
    set(e, r) {
        return this.color = r, this.changed = false, this.data = e, this.type.type = ut.ALL, this;
    }
    _ensureHSL() {
        let e = this.data, { h: r, s: o, l: n } = e;
        r === void 0 && (e.h = /*#__PURE__*/ q.channel.rgb2hsl(e, "h")), o === void 0 && (e.s = /*#__PURE__*/ q.channel.rgb2hsl(e, "s")), n === void 0 && (e.l = /*#__PURE__*/ q.channel.rgb2hsl(e, "l"));
    }
    _ensureRGB() {
        let e = this.data, { r, g: o, b: n } = e;
        r === void 0 && (e.r = /*#__PURE__*/ q.channel.hsl2rgb(e, "r")), o === void 0 && (e.g = /*#__PURE__*/ q.channel.hsl2rgb(e, "g")), n === void 0 && (e.b = /*#__PURE__*/ q.channel.hsl2rgb(e, "b"));
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
}, bl = jo;
var $u = new bl({
    r: 0,
    g: 0,
    b: 0,
    a: 0
}, "transparent"), me = $u;
var Tl = {
    re: /^#((?:[a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i,
    parse: /*#__PURE__*/ m$1((t)=>{
        if (t.charCodeAt(0) !== 35) return;
        let e = /*#__PURE__*/ t.match(Tl.re);
        if (!e) return;
        let r = e[1], o = /*#__PURE__*/ parseInt(r, 16), n = r.length, a = n % 4 === 0, s = n > 4, l = s ? 1 : 17, c = s ? 8 : 4, h = a ? 0 : -1, u = s ? 255 : 15;
        return me.set({
            r: (o >> c * (h + 3) & u) * l,
            g: (o >> c * (h + 2) & u) * l,
            b: (o >> c * (h + 1) & u) * l,
            a: a ? (o & u) * l / 255 : 1
        }, t);
    }, "parse"),
    stringify: /*#__PURE__*/ m$1((t)=>{
        let { r: e, g: r, b: o, a: n } = t;
        return n < 1 ? `#${ae[Math.round(e)]}${ae[Math.round(r)]}${ae[Math.round(o)]}${ae[Math.round(n * 255)]}` : `#${ae[Math.round(e)]}${ae[Math.round(r)]}${ae[Math.round(o)]}`;
    }, "stringify")
}, Ae = Tl;
var Bi = {
    re: /^hsla?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(?:deg|grad|rad|turn)?)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(%)?))?\s*?\)$/i,
    hueRe: /^(.+?)(deg|grad|rad|turn)$/i,
    _hue2deg: /*#__PURE__*/ m$1((t)=>{
        let e = /*#__PURE__*/ t.match(Bi.hueRe);
        if (e) {
            let [, r, o] = e;
            switch(o){
                case "grad":
                    return q.channel.clamp.h(parseFloat(r) * .9);
                case "rad":
                    return q.channel.clamp.h(parseFloat(r) * 180 / Math.PI);
                case "turn":
                    return q.channel.clamp.h(parseFloat(r) * 360);
            }
        }
        return q.channel.clamp.h(/*#__PURE__*/ parseFloat(t));
    }, "_hue2deg"),
    parse: /*#__PURE__*/ m$1((t)=>{
        let e = /*#__PURE__*/ t.charCodeAt(0);
        if (e !== 104 && e !== 72) return;
        let r = /*#__PURE__*/ t.match(Bi.re);
        if (!r) return;
        let [, o, n, a, s, l] = r;
        return me.set({
            h: /*#__PURE__*/ Bi._hue2deg(o),
            s: /*#__PURE__*/ q.channel.clamp.s(/*#__PURE__*/ parseFloat(n)),
            l: /*#__PURE__*/ q.channel.clamp.l(/*#__PURE__*/ parseFloat(a)),
            a: s ? q.channel.clamp.a(l ? parseFloat(s) / 100 : parseFloat(s)) : 1
        }, t);
    }, "parse"),
    stringify: /*#__PURE__*/ m$1((t)=>{
        let { h: e, s: r, l: o, a: n } = t;
        return n < 1 ? `hsla(${q.lang.round(e)}, ${q.lang.round(r)}%, ${q.lang.round(o)}%, ${n})` : `hsl(${q.lang.round(e)}, ${q.lang.round(r)}%, ${q.lang.round(o)}%)`;
    }, "stringify")
}, Mr = Bi;
var Fi = {
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
        let e = Fi.colors[t];
        if (e) return Ae.parse(e);
    }, "parse"),
    stringify: /*#__PURE__*/ m$1((t)=>{
        let e = /*#__PURE__*/ Ae.stringify(t);
        for(let r in Fi.colors)if (Fi.colors[r] === e) return r;
    }, "stringify")
}, Zo = Fi;
var kl = {
    re: /^rgba?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?)))?\s*?\)$/i,
    parse: /*#__PURE__*/ m$1((t)=>{
        let e = /*#__PURE__*/ t.charCodeAt(0);
        if (e !== 114 && e !== 82) return;
        let r = /*#__PURE__*/ t.match(kl.re);
        if (!r) return;
        let [, o, n, a, s, l, c, h, u] = r;
        return me.set({
            r: /*#__PURE__*/ q.channel.clamp.r(n ? parseFloat(o) * 2.55 : parseFloat(o)),
            g: /*#__PURE__*/ q.channel.clamp.g(s ? parseFloat(a) * 2.55 : parseFloat(a)),
            b: /*#__PURE__*/ q.channel.clamp.b(c ? parseFloat(l) * 2.55 : parseFloat(l)),
            a: h ? q.channel.clamp.a(u ? parseFloat(h) / 100 : parseFloat(h)) : 1
        }, t);
    }, "parse"),
    stringify: /*#__PURE__*/ m$1((t)=>{
        let { r: e, g: r, b: o, a: n } = t;
        return n < 1 ? `rgba(${q.lang.round(e)}, ${q.lang.round(r)}, ${q.lang.round(o)}, ${q.lang.round(n)})` : `rgb(${q.lang.round(e)}, ${q.lang.round(r)}, ${q.lang.round(o)})`;
    }, "stringify")
}, Ar = kl;
var Hu = {
    format: {
        keyword: Zo,
        hex: Ae,
        rgb: Ar,
        rgba: Ar,
        hsl: Mr,
        hsla: Mr
    },
    parse: /*#__PURE__*/ m$1((t)=>{
        if (typeof t != "string") return t;
        let e = Ae.parse(t) || Ar.parse(t) || Mr.parse(t) || Zo.parse(t);
        if (e) return e;
        throw new Error(`Unsupported color format: "${t}"`);
    }, "parse"),
    stringify: /*#__PURE__*/ m$1((t)=>!t.changed && t.color ? t.color : t.type.is(ut.HSL) || t.data.r === void 0 ? Mr.stringify(t) : t.a < 1 || !Number.isInteger(t.r) || !Number.isInteger(t.g) || !Number.isInteger(t.b) ? Ar.stringify(t) : Ae.stringify(t), "stringify")
}, ft = Hu;
var Uu = /*#__PURE__*/ m$1((t, e)=>{
    let r = /*#__PURE__*/ ft.parse(t);
    for(let o in e)r[o] = /*#__PURE__*/ q.channel.clamp[o](e[o]);
    return ft.stringify(r);
}, "change"), Li = Uu;
var Yu = /*#__PURE__*/ m$1((t, e, r = 0, o = 1)=>{
    if (typeof t != "number") return Li(t, {
        a: e
    });
    let n = /*#__PURE__*/ me.set({
        r: /*#__PURE__*/ q.channel.clamp.r(t),
        g: /*#__PURE__*/ q.channel.clamp.g(e),
        b: /*#__PURE__*/ q.channel.clamp.b(r),
        a: /*#__PURE__*/ q.channel.clamp.a(o)
    });
    return ft.stringify(n);
}, "rgba"), se = Yu;
var Gu = /*#__PURE__*/ m$1((t, e)=>q.lang.round(ft.parse(t)[e]), "channel"), Vu = Gu;
var Xu = /*#__PURE__*/ m$1((t)=>{
    let { r: e, g: r, b: o } = ft.parse(t), n = .2126 * q.channel.toLinear(e) + .7152 * q.channel.toLinear(r) + .0722 * q.channel.toLinear(o);
    return q.lang.round(n);
}, "luminance"), Sl = Xu;
var ju = /*#__PURE__*/ m$1((t)=>Sl(t) >= .5, "isLight"), vl = ju;
var Zu = /*#__PURE__*/ m$1((t)=>!vl(t), "isDark"), $t = Zu;
var Ku = /*#__PURE__*/ m$1((t, e, r)=>{
    let o = /*#__PURE__*/ ft.parse(t), n = o[e], a = /*#__PURE__*/ q.channel.clamp[e](n + r);
    return n !== a && (o[e] = a), ft.stringify(o);
}, "adjustChannel"), Mi = Ku;
var Qu = /*#__PURE__*/ m$1((t, e)=>Mi(t, "l", e), "lighten"), E = Qu;
var Ju = /*#__PURE__*/ m$1((t, e)=>Mi(t, "l", -e), "darken"), I = Ju;
var tf = /*#__PURE__*/ m$1((t, e)=>{
    let r = /*#__PURE__*/ ft.parse(t), o = {};
    for(let n in e)e[n] && (o[n] = r[n] + e[n]);
    return Li(t, o);
}, "adjust"), m = tf;
var ef = /*#__PURE__*/ m$1((t, e, r = 50)=>{
    let { r: o, g: n, b: a, a: s } = ft.parse(t), { r: l, g: c, b: h, a: u } = ft.parse(e), p = r / 100, f = p * 2 - 1, g = s - u, k = ((f * g === -1 ? f : (f + g) / (1 + f * g)) + 1) / 2, L = 1 - k, A = o * k + l * L, $ = n * k + c * L, O = a * k + h * L, F = s * p + u * (1 - p);
    return se(A, $, O, F);
}, "mix"), wl = ef;
var rf = /*#__PURE__*/ m$1((t, e = 100)=>{
    let r = /*#__PURE__*/ ft.parse(t);
    return r.r = 255 - r.r, r.g = 255 - r.g, r.b = 255 - r.b, wl(r, t, e);
}, "invert"), T = rf;
var ge = "#ffffff", xe = "#f2f2f2";
var ct = /*#__PURE__*/ m$1((t, e)=>e ? m(t, {
        s: -40,
        l: 10
    }) : m(t, {
        s: -40,
        l: -10
    }), "mkBorder");
var Ko = class {
    static{
        m$1(this, "Theme");
    }
    constructor(){
        this.background = "#f4f4f4", this.primaryColor = "#fff4dd", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#333", this.THEME_COLOR_LIMIT = 12, this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px";
    }
    updateColors() {
        if (this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333"), this.secondaryColor = this.secondaryColor || m(this.primaryColor, {
            h: -120
        }), this.tertiaryColor = this.tertiaryColor || m(this.primaryColor, {
            h: 180,
            l: 5
        }), this.primaryBorderColor = this.primaryBorderColor || ct(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || ct(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || ct(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || ct(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#333", this.secondaryTextColor = this.secondaryTextColor || T(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || T(this.tertiaryColor), this.lineColor = this.lineColor || T(this.background), this.arrowheadColor = this.arrowheadColor || T(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? I(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || I(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || T(this.lineColor), this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || E(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.vertLineColor = this.vertLineColor || "navy", this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.darkMode ? (this.rowOdd = this.rowOdd || I(this.mainBkg, 5) || "#ffffff", this.rowEven = this.rowEven || I(this.mainBkg, 10)) : (this.rowOdd = this.rowOdd || E(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || E(this.mainBkg, 5)), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || this.tertiaryColor, this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || m(this.primaryColor, {
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
        }), this.darkMode) for(let r = 0; r < this.THEME_COLOR_LIMIT; r++)this["cScale" + r] = /*#__PURE__*/ I(this["cScale" + r], 75);
        else for(let r = 0; r < this.THEME_COLOR_LIMIT; r++)this["cScale" + r] = /*#__PURE__*/ I(this["cScale" + r], 25);
        for(let r = 0; r < this.THEME_COLOR_LIMIT; r++)this["cScaleInv" + r] = this["cScaleInv" + r] || T(this["cScale" + r]);
        for(let r = 0; r < this.THEME_COLOR_LIMIT; r++)this.darkMode ? this["cScalePeer" + r] = this["cScalePeer" + r] || E(this["cScale" + r], 10) : this["cScalePeer" + r] = this["cScalePeer" + r] || I(this["cScale" + r], 10);
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
        }), this.quadrantPointFill = this.quadrantPointFill || $t(this.quadrant1Fill) ? E(this.quadrant1Fill) : I(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
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
        }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? I(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || m(this.primaryColor, {
            h: -30
        }), this.git4 = this.git4 || m(this.primaryColor, {
            h: -60
        }), this.git5 = this.git5 || m(this.primaryColor, {
            h: -90
        }), this.git6 = this.git6 || m(this.primaryColor, {
            h: 60
        }), this.git7 = this.git7 || m(this.primaryColor, {
            h: 120
        }), this.darkMode ? (this.git0 = /*#__PURE__*/ E(this.git0, 25), this.git1 = /*#__PURE__*/ E(this.git1, 25), this.git2 = /*#__PURE__*/ E(this.git2, 25), this.git3 = /*#__PURE__*/ E(this.git3, 25), this.git4 = /*#__PURE__*/ E(this.git4, 25), this.git5 = /*#__PURE__*/ E(this.git5, 25), this.git6 = /*#__PURE__*/ E(this.git6, 25), this.git7 = /*#__PURE__*/ E(this.git7, 25)) : (this.git0 = /*#__PURE__*/ I(this.git0, 25), this.git1 = /*#__PURE__*/ I(this.git1, 25), this.git2 = /*#__PURE__*/ I(this.git2, 25), this.git3 = /*#__PURE__*/ I(this.git3, 25), this.git4 = /*#__PURE__*/ I(this.git4, 25), this.git5 = /*#__PURE__*/ I(this.git5, 25), this.git6 = /*#__PURE__*/ I(this.git6, 25), this.git7 = /*#__PURE__*/ I(this.git7, 25)), this.gitInv0 = this.gitInv0 || T(this.git0), this.gitInv1 = this.gitInv1 || T(this.git1), this.gitInv2 = this.gitInv2 || T(this.git2), this.gitInv3 = this.gitInv3 || T(this.git3), this.gitInv4 = this.gitInv4 || T(this.git4), this.gitInv5 = this.gitInv5 || T(this.git5), this.gitInv6 = this.gitInv6 || T(this.git6), this.gitInv7 = this.gitInv7 || T(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || ge, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || xe;
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
}, Bl = /*#__PURE__*/ m$1((t)=>{
    let e = new Ko;
    return e.calculate(t), e;
}, "getThemeVariables");
var Qo = class {
    static{
        m$1(this, "Theme");
    }
    constructor(){
        this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = /*#__PURE__*/ E(this.primaryColor, 16), this.tertiaryColor = /*#__PURE__*/ m(this.primaryColor, {
            h: -160
        }), this.primaryBorderColor = /*#__PURE__*/ T(this.background), this.secondaryBorderColor = /*#__PURE__*/ ct(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = /*#__PURE__*/ ct(this.tertiaryColor, this.darkMode), this.primaryTextColor = /*#__PURE__*/ T(this.primaryColor), this.secondaryTextColor = /*#__PURE__*/ T(this.secondaryColor), this.tertiaryTextColor = /*#__PURE__*/ T(this.tertiaryColor), this.lineColor = /*#__PURE__*/ T(this.background), this.textColor = /*#__PURE__*/ T(this.background), this.mainBkg = "#1f2020", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = /*#__PURE__*/ E(/*#__PURE__*/ T("#323D47"), 10), this.lineColor = "calculated", this.border1 = "#ccc", this.border2 = /*#__PURE__*/ se(255, 255, 255, .25), this.arrowheadColor = "calculated", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "#181818", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#F9FFFE", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "calculated", this.activationBkgColor = "calculated", this.sequenceNumberColor = "black", this.sectionBkgColor = /*#__PURE__*/ I("#EAE8D9", 30), this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "#EAE8D9", this.excludeBkgColor = /*#__PURE__*/ I(this.sectionBkgColor, 10), this.taskBorderColor = /*#__PURE__*/ se(255, 255, 255, 70), this.taskBkgColor = "calculated", this.taskTextColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = /*#__PURE__*/ se(255, 255, 255, 50), this.activeTaskBkgColor = "#81B1DB", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "grey", this.critBorderColor = "#E83737", this.critBkgColor = "#E83737", this.taskTextDarkColor = "calculated", this.todayLineColor = "#DB5757", this.vertLineColor = "#00BFFF", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = this.rowOdd || E(this.mainBkg, 5) || "#ffffff", this.rowEven = this.rowEven || I(this.mainBkg, 10), this.labelColor = "calculated", this.errorBkgColor = "#a44141", this.errorTextColor = "#ddd";
    }
    updateColors() {
        this.secondBkg = /*#__PURE__*/ E(this.mainBkg, 16), this.lineColor = this.mainContrastColor, this.arrowheadColor = this.mainContrastColor, this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.edgeLabelBackground = /*#__PURE__*/ E(this.labelBackground, 25), this.actorBorder = this.border1, this.actorBkg = this.mainBkg, this.actorTextColor = this.mainContrastColor, this.actorLineColor = this.actorBorder, this.signalColor = this.mainContrastColor, this.signalTextColor = this.mainContrastColor, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.mainContrastColor, this.loopTextColor = this.mainContrastColor, this.noteBorderColor = this.secondaryBorderColor, this.noteBkgColor = this.secondBkg, this.noteTextColor = this.secondaryTextColor, this.activationBorderColor = this.border1, this.activationBkgColor = this.secondBkg, this.altSectionBkgColor = this.background, this.taskBkgColor = /*#__PURE__*/ E(this.mainBkg, 23), this.taskTextColor = this.darkTextColor, this.taskTextLightColor = this.mainContrastColor, this.taskTextOutsideColor = this.taskTextLightColor, this.gridColor = this.mainContrastColor, this.doneTaskBkgColor = this.mainContrastColor, this.taskTextDarkColor = this.darkTextColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#555", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#f4f4f4", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = /*#__PURE__*/ m(this.primaryColor, {
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
        for(let e = 0; e < this.THEME_COLOR_LIMIT; e++)this["cScaleInv" + e] = this["cScaleInv" + e] || T(this["cScale" + e]);
        for(let e = 0; e < this.THEME_COLOR_LIMIT; e++)this["cScalePeer" + e] = this["cScalePeer" + e] || E(this["cScale" + e], 10);
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
        }), this.quadrantPointFill = this.quadrantPointFill || $t(this.quadrant1Fill) ? E(this.quadrant1Fill) : I(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
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
        }, this.classText = this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? I(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = /*#__PURE__*/ E(this.secondaryColor, 20), this.git1 = /*#__PURE__*/ E(this.pie2 || this.secondaryColor, 20), this.git2 = /*#__PURE__*/ E(this.pie3 || this.tertiaryColor, 20), this.git3 = /*#__PURE__*/ E(this.pie4 || m(this.primaryColor, {
            h: -30
        }), 20), this.git4 = /*#__PURE__*/ E(this.pie5 || m(this.primaryColor, {
            h: -60
        }), 20), this.git5 = /*#__PURE__*/ E(this.pie6 || m(this.primaryColor, {
            h: -90
        }), 10), this.git6 = /*#__PURE__*/ E(this.pie7 || m(this.primaryColor, {
            h: 60
        }), 10), this.git7 = /*#__PURE__*/ E(this.pie8 || m(this.primaryColor, {
            h: 120
        }), 20), this.gitInv0 = this.gitInv0 || T(this.git0), this.gitInv1 = this.gitInv1 || T(this.git1), this.gitInv2 = this.gitInv2 || T(this.git2), this.gitInv3 = this.gitInv3 || T(this.git3), this.gitInv4 = this.gitInv4 || T(this.git4), this.gitInv5 = this.gitInv5 || T(this.git5), this.gitInv6 = this.gitInv6 || T(this.git6), this.gitInv7 = this.gitInv7 || T(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || T(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || T(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || E(this.background, 12), this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || E(this.background, 2), this.nodeBorder = this.nodeBorder || "#999";
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
}, Fl = /*#__PURE__*/ m$1((t)=>{
    let e = new Qo;
    return e.calculate(t), e;
}, "getThemeVariables");
var Jo = class {
    static{
        m$1(this, "Theme");
    }
    constructor(){
        this.background = "#f4f4f4", this.primaryColor = "#ECECFF", this.secondaryColor = /*#__PURE__*/ m(this.primaryColor, {
            h: 120
        }), this.secondaryColor = "#ffffde", this.tertiaryColor = /*#__PURE__*/ m(this.primaryColor, {
            h: -160
        }), this.primaryBorderColor = /*#__PURE__*/ ct(this.primaryColor, this.darkMode), this.secondaryBorderColor = /*#__PURE__*/ ct(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = /*#__PURE__*/ ct(this.tertiaryColor, this.darkMode), this.primaryTextColor = /*#__PURE__*/ T(this.primaryColor), this.secondaryTextColor = /*#__PURE__*/ T(this.secondaryColor), this.tertiaryTextColor = /*#__PURE__*/ T(this.tertiaryColor), this.lineColor = /*#__PURE__*/ T(this.background), this.textColor = /*#__PURE__*/ T(this.background), this.background = "white", this.mainBkg = "#ECECFF", this.secondBkg = "#ffffde", this.lineColor = "#333333", this.border1 = "#9370DB", this.border2 = "#aaaa33", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "rgba(232,232,232, 0.8)", this.textColor = "#333", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = this.taskTextDarkColor, this.taskTextClickableColor = "calculated", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBorderColor = "calculated", this.critBkgColor = "calculated", this.todayLineColor = "calculated", this.vertLineColor = "calculated", this.sectionBkgColor = /*#__PURE__*/ se(102, 102, 255, .49), this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#fff400", this.taskBorderColor = "#534fbc", this.taskBkgColor = "#8a90dd", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "#534fbc", this.activeTaskBkgColor = "#bfc7ff", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.vertLineColor = "navy", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = "calculated", this.rowEven = "calculated", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222", this.updateColors();
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
        }), this.cScalePeer1 = this.cScalePeer1 || I(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || I(this.tertiaryColor, 40);
        for(let e = 0; e < this.THEME_COLOR_LIMIT; e++)this["cScale" + e] = /*#__PURE__*/ I(this["cScale" + e], 10), this["cScalePeer" + e] = this["cScalePeer" + e] || I(this["cScale" + e], 25);
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
            this.cScaleLabel0 = this.cScaleLabel0 || T(this.labelTextColor), this.cScaleLabel3 = this.cScaleLabel3 || T(this.labelTextColor);
            for(let e = 0; e < this.THEME_COLOR_LIMIT; e++)this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.labelTextColor;
        }
        this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.textColor, this.edgeLabelBackground = this.labelBackground, this.actorBorder = /*#__PURE__*/ E(this.border1, 23), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.signalColor = this.textColor, this.signalTextColor = this.textColor, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.actorLineColor = this.actorBorder, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.rowOdd = this.rowOdd || E(this.primaryColor, 75) || "#ffffff", this.rowEven = this.rowEven || E(this.primaryColor, 1), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = /*#__PURE__*/ m(this.primaryColor, {
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
        }), this.quadrantPointFill = this.quadrantPointFill || $t(this.quadrant1Fill) ? E(this.quadrant1Fill) : I(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.radar = {
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
        }), this.darkMode ? (this.git0 = /*#__PURE__*/ E(this.git0, 25), this.git1 = /*#__PURE__*/ E(this.git1, 25), this.git2 = /*#__PURE__*/ E(this.git2, 25), this.git3 = /*#__PURE__*/ E(this.git3, 25), this.git4 = /*#__PURE__*/ E(this.git4, 25), this.git5 = /*#__PURE__*/ E(this.git5, 25), this.git6 = /*#__PURE__*/ E(this.git6, 25), this.git7 = /*#__PURE__*/ E(this.git7, 25)) : (this.git0 = /*#__PURE__*/ I(this.git0, 25), this.git1 = /*#__PURE__*/ I(this.git1, 25), this.git2 = /*#__PURE__*/ I(this.git2, 25), this.git3 = /*#__PURE__*/ I(this.git3, 25), this.git4 = /*#__PURE__*/ I(this.git4, 25), this.git5 = /*#__PURE__*/ I(this.git5, 25), this.git6 = /*#__PURE__*/ I(this.git6, 25), this.git7 = /*#__PURE__*/ I(this.git7, 25)), this.gitInv0 = this.gitInv0 || I(/*#__PURE__*/ T(this.git0), 25), this.gitInv1 = this.gitInv1 || T(this.git1), this.gitInv2 = this.gitInv2 || T(this.git2), this.gitInv3 = this.gitInv3 || T(this.git3), this.gitInv4 = this.gitInv4 || T(this.git4), this.gitInv5 = this.gitInv5 || T(this.git5), this.gitInv6 = this.gitInv6 || T(this.git6), this.gitInv7 = this.gitInv7 || T(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || T(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || T(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || ge, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || xe;
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
}, Ll = /*#__PURE__*/ m$1((t)=>{
    let e = new Jo;
    return e.calculate(t), e;
}, "getThemeVariables");
var tn = class {
    static{
        m$1(this, "Theme");
    }
    constructor(){
        this.background = "#f4f4f4", this.primaryColor = "#cde498", this.secondaryColor = "#cdffb2", this.background = "white", this.mainBkg = "#cde498", this.secondBkg = "#cdffb2", this.lineColor = "green", this.border1 = "#13540c", this.border2 = "#6eaa49", this.arrowheadColor = "green", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.tertiaryColor = /*#__PURE__*/ E("#cde498", 10), this.primaryBorderColor = /*#__PURE__*/ ct(this.primaryColor, this.darkMode), this.secondaryBorderColor = /*#__PURE__*/ ct(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = /*#__PURE__*/ ct(this.tertiaryColor, this.darkMode), this.primaryTextColor = /*#__PURE__*/ T(this.primaryColor), this.secondaryTextColor = /*#__PURE__*/ T(this.secondaryColor), this.tertiaryTextColor = /*#__PURE__*/ T(this.primaryColor), this.lineColor = /*#__PURE__*/ T(this.background), this.textColor = /*#__PURE__*/ T(this.background), this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#333", this.edgeLabelBackground = "#e8e8e8", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "calculated", this.signalColor = "#333", this.signalTextColor = "#333", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "#326932", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "#6eaa49", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#6eaa49", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "#487e3a", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.vertLineColor = "#00BFFF", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
    }
    updateColors() {
        this.actorBorder = /*#__PURE__*/ I(this.mainBkg, 20), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.actorLineColor = this.actorBorder, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || m(this.primaryColor, {
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
        }), this.cScalePeer1 = this.cScalePeer1 || I(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || I(this.tertiaryColor, 40);
        for(let e = 0; e < this.THEME_COLOR_LIMIT; e++)this["cScale" + e] = /*#__PURE__*/ I(this["cScale" + e], 10), this["cScalePeer" + e] = this["cScalePeer" + e] || I(this["cScale" + e], 25);
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
        this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.taskBorderColor = this.border1, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.rowOdd = this.rowOdd || E(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || E(this.mainBkg, 20), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = /*#__PURE__*/ m(this.primaryColor, {
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
        }), this.quadrantPointFill = this.quadrantPointFill || $t(this.quadrant1Fill) ? E(this.quadrant1Fill) : I(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.packet = {
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
        }), this.darkMode ? (this.git0 = /*#__PURE__*/ E(this.git0, 25), this.git1 = /*#__PURE__*/ E(this.git1, 25), this.git2 = /*#__PURE__*/ E(this.git2, 25), this.git3 = /*#__PURE__*/ E(this.git3, 25), this.git4 = /*#__PURE__*/ E(this.git4, 25), this.git5 = /*#__PURE__*/ E(this.git5, 25), this.git6 = /*#__PURE__*/ E(this.git6, 25), this.git7 = /*#__PURE__*/ E(this.git7, 25)) : (this.git0 = /*#__PURE__*/ I(this.git0, 25), this.git1 = /*#__PURE__*/ I(this.git1, 25), this.git2 = /*#__PURE__*/ I(this.git2, 25), this.git3 = /*#__PURE__*/ I(this.git3, 25), this.git4 = /*#__PURE__*/ I(this.git4, 25), this.git5 = /*#__PURE__*/ I(this.git5, 25), this.git6 = /*#__PURE__*/ I(this.git6, 25), this.git7 = /*#__PURE__*/ I(this.git7, 25)), this.gitInv0 = this.gitInv0 || T(this.git0), this.gitInv1 = this.gitInv1 || T(this.git1), this.gitInv2 = this.gitInv2 || T(this.git2), this.gitInv3 = this.gitInv3 || T(this.git3), this.gitInv4 = this.gitInv4 || T(this.git4), this.gitInv5 = this.gitInv5 || T(this.git5), this.gitInv6 = this.gitInv6 || T(this.git6), this.gitInv7 = this.gitInv7 || T(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || T(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || T(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || ge, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || xe;
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
}, Ml = /*#__PURE__*/ m$1((t)=>{
    let e = new tn;
    return e.calculate(t), e;
}, "getThemeVariables");
var en = class {
    static{
        m$1(this, "Theme");
    }
    constructor(){
        this.primaryColor = "#eee", this.contrast = "#707070", this.secondaryColor = /*#__PURE__*/ E(this.contrast, 55), this.background = "#ffffff", this.tertiaryColor = /*#__PURE__*/ m(this.primaryColor, {
            h: -160
        }), this.primaryBorderColor = /*#__PURE__*/ ct(this.primaryColor, this.darkMode), this.secondaryBorderColor = /*#__PURE__*/ ct(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = /*#__PURE__*/ ct(this.tertiaryColor, this.darkMode), this.primaryTextColor = /*#__PURE__*/ T(this.primaryColor), this.secondaryTextColor = /*#__PURE__*/ T(this.secondaryColor), this.tertiaryTextColor = /*#__PURE__*/ T(this.tertiaryColor), this.lineColor = /*#__PURE__*/ T(this.background), this.textColor = /*#__PURE__*/ T(this.background), this.mainBkg = "#eee", this.secondBkg = "calculated", this.lineColor = "#666", this.border1 = "#999", this.border2 = "calculated", this.note = "#ffa", this.text = "#333", this.critical = "#d42", this.done = "#bbb", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "white", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = this.actorBorder, this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "calculated", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBkgColor = "calculated", this.critBorderColor = "calculated", this.todayLineColor = "calculated", this.vertLineColor = "calculated", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = this.rowOdd || E(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || "#f4f4f4", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
    }
    updateColors() {
        this.secondBkg = /*#__PURE__*/ E(this.contrast, 55), this.border2 = this.contrast, this.actorBorder = /*#__PURE__*/ E(this.border1, 23), this.actorBkg = this.mainBkg, this.actorTextColor = this.text, this.actorLineColor = this.actorBorder, this.signalColor = this.text, this.signalTextColor = this.text, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.text, this.loopTextColor = this.text, this.noteBorderColor = "#999", this.noteBkgColor = "#666", this.noteTextColor = "#fff", this.cScale0 = this.cScale0 || "#555", this.cScale1 = this.cScale1 || "#F4F4F4", this.cScale2 = this.cScale2 || "#555", this.cScale3 = this.cScale3 || "#BBB", this.cScale4 = this.cScale4 || "#777", this.cScale5 = this.cScale5 || "#999", this.cScale6 = this.cScale6 || "#DDD", this.cScale7 = this.cScale7 || "#FFF", this.cScale8 = this.cScale8 || "#DDD", this.cScale9 = this.cScale9 || "#BBB", this.cScale10 = this.cScale10 || "#999", this.cScale11 = this.cScale11 || "#777";
        for(let e = 0; e < this.THEME_COLOR_LIMIT; e++)this["cScaleInv" + e] = this["cScaleInv" + e] || T(this["cScale" + e]);
        for(let e = 0; e < this.THEME_COLOR_LIMIT; e++)this.darkMode ? this["cScalePeer" + e] = this["cScalePeer" + e] || E(this["cScale" + e], 10) : this["cScalePeer" + e] = this["cScalePeer" + e] || I(this["cScale" + e], 10);
        this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.cScaleLabel0 = this.cScaleLabel0 || this.cScale1, this.cScaleLabel2 = this.cScaleLabel2 || this.cScale1;
        for(let e = 0; e < this.THEME_COLOR_LIMIT; e++)this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.scaleLabelColor;
        for(let e = 0; e < 5; e++)this["surface" + e] = this["surface" + e] || m(this.mainBkg, {
            l: -(5 + e * 5)
        }), this["surfacePeer" + e] = this["surfacePeer" + e] || m(this.mainBkg, {
            l: -(8 + e * 5)
        });
        this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.text, this.sectionBkgColor = /*#__PURE__*/ E(this.contrast, 30), this.sectionBkgColor2 = /*#__PURE__*/ E(this.contrast, 30), this.taskBorderColor = /*#__PURE__*/ I(this.contrast, 10), this.taskBkgColor = this.contrast, this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = this.text, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.gridColor = /*#__PURE__*/ E(this.border1, 30), this.doneTaskBkgColor = this.done, this.doneTaskBorderColor = this.lineColor, this.critBkgColor = this.critical, this.critBorderColor = /*#__PURE__*/ I(this.critBkgColor, 10), this.todayLineColor = this.critBkgColor, this.vertLineColor = this.critBkgColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.transitionColor = this.transitionColor || "#000", this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f4f4f4", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.stateBorder = this.stateBorder || "#000", this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#222", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = /*#__PURE__*/ m(this.primaryColor, {
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
        }), this.quadrantPointFill = this.quadrantPointFill || $t(this.quadrant1Fill) ? E(this.quadrant1Fill) : I(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
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
        }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = I(this.pie1, 25) || this.primaryColor, this.git1 = this.pie2 || this.secondaryColor, this.git2 = this.pie3 || this.tertiaryColor, this.git3 = this.pie4 || m(this.primaryColor, {
            h: -30
        }), this.git4 = this.pie5 || m(this.primaryColor, {
            h: -60
        }), this.git5 = this.pie6 || m(this.primaryColor, {
            h: -90
        }), this.git6 = this.pie7 || m(this.primaryColor, {
            h: 60
        }), this.git7 = this.pie8 || m(this.primaryColor, {
            h: 120
        }), this.gitInv0 = this.gitInv0 || T(this.git0), this.gitInv1 = this.gitInv1 || T(this.git1), this.gitInv2 = this.gitInv2 || T(this.git2), this.gitInv3 = this.gitInv3 || T(this.git3), this.gitInv4 = this.gitInv4 || T(this.git4), this.gitInv5 = this.gitInv5 || T(this.git5), this.gitInv6 = this.gitInv6 || T(this.git6), this.gitInv7 = this.gitInv7 || T(this.git7), this.branchLabelColor = this.branchLabelColor || this.labelTextColor, this.gitBranchLabel0 = this.branchLabelColor, this.gitBranchLabel1 = "white", this.gitBranchLabel2 = this.branchLabelColor, this.gitBranchLabel3 = "white", this.gitBranchLabel4 = this.branchLabelColor, this.gitBranchLabel5 = this.branchLabelColor, this.gitBranchLabel6 = this.branchLabelColor, this.gitBranchLabel7 = this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || ge, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || xe;
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
}, Al = /*#__PURE__*/ m$1((t)=>{
    let e = new en;
    return e.calculate(t), e;
}, "getThemeVariables");
var ye = {
    base: {
        getThemeVariables: Bl
    },
    dark: {
        getThemeVariables: Fl
    },
    default: {
        getThemeVariables: Ll
    },
    forest: {
        getThemeVariables: Ml
    },
    neutral: {
        getThemeVariables: Al
    }
};
var Ht = {
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
        wrappingWidth: 200,
        inheritDir: false
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
        maxLabelWidth: 360,
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
        titleColor: "",
        titleFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
        titleFontSize: "4ex"
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
        showDataLabel: false,
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
var El = {
    ...Ht,
    deterministicIDSeed: void 0,
    elk: {
        mergeEdges: false,
        nodePlacementStrategy: "BRANDES_KOEPF"
    },
    themeCSS: void 0,
    themeVariables: /*#__PURE__*/ ye.default.getThemeVariables(),
    sequence: {
        ...Ht.sequence,
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
        ...Ht.gantt,
        tickInterval: void 0,
        useWidth: void 0
    },
    c4: {
        ...Ht.c4,
        useWidth: void 0,
        personFont: /*#__PURE__*/ m$1(function() {
            return {
                fontFamily: this.personFontFamily,
                fontSize: this.personFontSize,
                fontWeight: this.personFontWeight
            };
        }, "personFont"),
        flowchart: {
            ...Ht.flowchart,
            inheritDir: false
        },
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
        ...Ht.pie,
        useWidth: 984
    },
    xyChart: {
        ...Ht.xyChart,
        useWidth: void 0
    },
    requirement: {
        ...Ht.requirement,
        useWidth: void 0
    },
    packet: {
        ...Ht.packet
    },
    radar: {
        ...Ht.radar
    },
    treemap: {
        useMaxWidth: true,
        padding: 10,
        diagramPadding: 8,
        showValues: true,
        nodeWidth: 100,
        nodeHeight: 40,
        borderWidth: 1,
        valueFontSize: 12,
        labelFontSize: 14,
        valueFormat: ","
    }
}, Dl = m$1((t, e = "")=>Object.keys(t).reduce((r, o)=>Array.isArray(t[o]) ? r : typeof t[o] == "object" && t[o] !== null ? [
            ...r,
            e + o,
            .../*#__PURE__*/ Dl(t[o], "")
        ] : [
            ...r,
            e + o
        ], []), "keyify"), Ol = new Set(Dl(El, "")), Il = El;
var Ai = m$1((t)=>{
    if (tt.debug("sanitizeDirective called with", t), !(typeof t != "object" || t == null)) {
        if (Array.isArray(t)) {
            t.forEach((e)=>Ai(e));
            return;
        }
        for (let e of Object.keys(t)){
            if (tt.debug("Checking key", e), e.startsWith("__") || e.includes("proto") || e.includes("constr") || !Ol.has(e) || t[e] == null) {
                tt.debug("sanitize deleting key: ", e), delete t[e];
                continue;
            }
            if (typeof t[e] == "object") {
                tt.debug("sanitizing object", e), Ai(t[e]);
                continue;
            }
            let r = [
                "themeCSS",
                "fontFamily",
                "altFontFamily"
            ];
            for (let o of r)e.includes(o) && (tt.debug("sanitizing css option", e), t[e] = /*#__PURE__*/ of(t[e]));
        }
        if (t.themeVariables) for (let e of Object.keys(t.themeVariables)){
            let r = t.themeVariables[e];
            r?.match && !r.match(/^[\d "#%(),.;A-Za-z]+$/) && (t.themeVariables[e] = "");
        }
        tt.debug("After sanitization", t);
    }
}, "sanitizeDirective"), of = /*#__PURE__*/ m$1((t)=>{
    let e = 0, r = 0;
    for (let o of t){
        if (e < r) return "{ /* ERROR: Unbalanced CSS */ }";
        o === "{" ? e++ : o === "}" && r++;
    }
    return e !== r ? "{ /* ERROR: Unbalanced CSS */ }" : t;
}, "sanitizeCss");
var Dr = /*#__PURE__*/ Object.freeze(Il), Rt = /*#__PURE__*/ Mt({}, Dr), Rl, er = [], Er = /*#__PURE__*/ Mt({}, Dr), Ei = /*#__PURE__*/ m$1((t, e)=>{
    let r = /*#__PURE__*/ Mt({}, t), o = {};
    for (let n of e)ql(n), o = /*#__PURE__*/ Mt(o, n);
    if (r = /*#__PURE__*/ Mt(r, o), o.theme && o.theme in ye) {
        let n = /*#__PURE__*/ Mt({}, Rl), a = /*#__PURE__*/ Mt(n.themeVariables || {}, o.themeVariables);
        r.theme && r.theme in ye && (r.themeVariables = /*#__PURE__*/ ye[r.theme].getThemeVariables(a));
    }
    return Er = r, Pl(Er), Er;
}, "updateCurrentConfig"), nf = /*#__PURE__*/ m$1((t)=>(Rt = /*#__PURE__*/ Mt({}, Dr), Rt = /*#__PURE__*/ Mt(Rt, t), t.theme && ye[t.theme] && (Rt.themeVariables = /*#__PURE__*/ ye[t.theme].getThemeVariables(t.themeVariables)), Ei(Rt, er), Rt), "setSiteConfig"), zC = /*#__PURE__*/ m$1((t)=>{
    Rl = /*#__PURE__*/ Mt({}, t);
}, "saveConfigFromInitialize"), RC = /*#__PURE__*/ m$1((t)=>(Rt = /*#__PURE__*/ Mt(Rt, t), Ei(Rt, er), Rt), "updateSiteConfig"), NC = /*#__PURE__*/ m$1(()=>Mt({}, Rt), "getSiteConfig"), Nl = /*#__PURE__*/ m$1((t)=>(Pl(t), Mt(Er, t), Or()), "setConfig"), Or = /*#__PURE__*/ m$1(()=>Mt({}, Er), "getConfig"), ql = m$1((t)=>{
    t && ([
        "secure",
        ...Rt.secure ?? []
    ].forEach((e)=>{
        Object.hasOwn(t, e) && (tt.debug(`Denied attempt to modify a secure key ${e}`, t[e]), delete t[e]);
    }), Object.keys(t).forEach((e)=>{
        e.startsWith("__") && delete t[e];
    }), Object.keys(t).forEach((e)=>{
        typeof t[e] == "string" && (t[e].includes("<") || t[e].includes(">") || t[e].includes("url(data:")) && delete t[e], typeof t[e] == "object" && ql(t[e]);
    }));
}, "sanitize"), qC = /*#__PURE__*/ m$1((t)=>{
    Ai(t), t.fontFamily && !t.themeVariables?.fontFamily && (t.themeVariables = {
        ...t.themeVariables,
        fontFamily: t.fontFamily
    }), er.push(t), Ei(Rt, er);
}, "addDirective"), PC = /*#__PURE__*/ m$1((t = Rt)=>{
    er = [], Ei(t, er);
}, "reset"), af = {
    LAZY_LOAD_DEPRECATED: "The configuration options lazyLoadedDiagrams and loadExternalDiagramsAtStartup are deprecated. Please use registerExternalDiagrams instead."
}, zl = {}, sf = /*#__PURE__*/ m$1((t)=>{
    zl[t] || (tt.warn(af[t]), zl[t] = true);
}, "issueWarning"), Pl = /*#__PURE__*/ m$1((t)=>{
    t && (t.lazyLoadedDiagrams || t.loadExternalDiagramsAtStartup) && sf("LAZY_LOAD_DEPRECATED");
}, "checkConfig");
var { entries: Zl, setPrototypeOf: Wl, isFrozen: lf, getPrototypeOf: hf, getOwnPropertyDescriptor: cf } = Object, { freeze: Et, seal: Wt, create: Kl } = Object, { apply: ln, construct: hn } = typeof Reflect < "u" && Reflect;
Et || (Et = /*#__PURE__*/ m$1(function(e) {
    return e;
}, "freeze"));
Wt || (Wt = /*#__PURE__*/ m$1(function(e) {
    return e;
}, "seal"));
ln || (ln = /*#__PURE__*/ m$1(function(e, r, o) {
    return e.apply(r, o);
}, "apply"));
hn || (hn = /*#__PURE__*/ m$1(function(e, r) {
    return new e(...r);
}, "construct"));
var Di = /*#__PURE__*/ Dt(Array.prototype.forEach), uf = /*#__PURE__*/ Dt(Array.prototype.lastIndexOf), $l = /*#__PURE__*/ Dt(Array.prototype.pop), Ir = /*#__PURE__*/ Dt(Array.prototype.push), ff = /*#__PURE__*/ Dt(Array.prototype.splice), Ii = /*#__PURE__*/ Dt(String.prototype.toLowerCase), rn = /*#__PURE__*/ Dt(String.prototype.toString), Hl = /*#__PURE__*/ Dt(String.prototype.match), zr = /*#__PURE__*/ Dt(String.prototype.replace), df = /*#__PURE__*/ Dt(String.prototype.indexOf), pf = /*#__PURE__*/ Dt(String.prototype.trim), Ut = /*#__PURE__*/ Dt(Object.prototype.hasOwnProperty), At = /*#__PURE__*/ Dt(RegExp.prototype.test), Rr = /*#__PURE__*/ mf(TypeError);
function Dt(t) {
    return function(e) {
        e instanceof RegExp && (e.lastIndex = 0);
        for(var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)o[n - 1] = arguments[n];
        return ln(t, e, o);
    };
}
m$1(Dt, "unapply");
function mf(t) {
    return function() {
        for(var e = arguments.length, r = new Array(e), o = 0; o < e; o++)r[o] = arguments[o];
        return hn(t, r);
    };
}
m$1(mf, "unconstruct");
function K(t, e) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ii;
    Wl && Wl(t, null);
    let o = e.length;
    for(; o--;){
        let n = e[o];
        if (typeof n == "string") {
            let a = /*#__PURE__*/ r(n);
            a !== n && (lf(e) || (e[o] = a), n = a);
        }
        t[n] = true;
    }
    return t;
}
m$1(K, "addToSet");
function gf(t) {
    for(let e = 0; e < t.length; e++)Ut(t, e) || (t[e] = null);
    return t;
}
m$1(gf, "cleanArray");
function Ee(t) {
    let e = /*#__PURE__*/ Kl(null);
    for (let [r, o] of Zl(t))Ut(t, r) && (Array.isArray(o) ? e[r] = /*#__PURE__*/ gf(o) : o && typeof o == "object" && o.constructor === Object ? e[r] = /*#__PURE__*/ Ee(o) : e[r] = o);
    return e;
}
m$1(Ee, "clone");
function Nr(t, e) {
    for(; t !== null;){
        let o = /*#__PURE__*/ cf(t, e);
        if (o) {
            if (o.get) return Dt(o.get);
            if (typeof o.value == "function") return Dt(o.value);
        }
        t = /*#__PURE__*/ hf(t);
    }
    function r() {
        return null;
    }
    return m$1(r, "fallbackValue"), r;
}
m$1(Nr, "lookupGetter");
var Ul = /*#__PURE__*/ Et([
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
]), on = /*#__PURE__*/ Et([
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
]), nn = /*#__PURE__*/ Et([
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
]), xf = /*#__PURE__*/ Et([
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
]), an = /*#__PURE__*/ Et([
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
]), yf = /*#__PURE__*/ Et([
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
]), Yl = /*#__PURE__*/ Et([
    "#text"
]), Gl = /*#__PURE__*/ Et([
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
]), sn = /*#__PURE__*/ Et([
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
]), Vl = /*#__PURE__*/ Et([
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
]), Oi = /*#__PURE__*/ Et([
    "xlink:href",
    "xml:id",
    "xlink:title",
    "xml:space",
    "xmlns:xlink"
]), Cf = /*#__PURE__*/ Wt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), _f = /*#__PURE__*/ Wt(/<%[\w\W]*|[\w\W]*%>/gm), bf = /*#__PURE__*/ Wt(/\$\{[\w\W]*/gm), Tf = /*#__PURE__*/ Wt(/^data-[\-\w.\u00B7-\uFFFF]+$/), kf = /*#__PURE__*/ Wt(/^aria-[\-\w]+$/), Ql = /*#__PURE__*/ Wt(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), Sf = /*#__PURE__*/ Wt(/^(?:\w+script|data):/i), vf = /*#__PURE__*/ Wt(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), Jl = /*#__PURE__*/ Wt(/^html$/i), wf = /*#__PURE__*/ Wt(/^[a-z][.\w]*(-[.\w]+)+$/i), Xl = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    ARIA_ATTR: kf,
    ATTR_WHITESPACE: vf,
    CUSTOM_ELEMENT: wf,
    DATA_ATTR: Tf,
    DOCTYPE_NAME: Jl,
    ERB_EXPR: _f,
    IS_ALLOWED_URI: Ql,
    IS_SCRIPT_OR_DATA: Sf,
    MUSTACHE_EXPR: Cf,
    TMPLIT_EXPR: bf
}), qr = {
    element: 1,
    text: 3,
    progressingInstruction: 7,
    comment: 8,
    document: 9
}, Bf = /*#__PURE__*/ m$1(function() {
    return typeof window > "u" ? null : window;
}, "getGlobal"), Ff = /*#__PURE__*/ m$1(function(e, r) {
    if (typeof e != "object" || typeof e.createPolicy != "function") return null;
    let o = null, n = "data-tt-policy-suffix";
    r && r.hasAttribute(n) && (o = /*#__PURE__*/ r.getAttribute(n));
    let a = "dompurify" + (o ? "#" + o : "");
    try {
        return e.createPolicy(a, {
            createHTML (s) {
                return s;
            },
            createScriptURL (s) {
                return s;
            }
        });
    } catch  {
        return console.warn("TrustedTypes policy " + a + " could not be created."), null;
    }
}, "_createTrustedTypesPolicy"), jl = /*#__PURE__*/ m$1(function() {
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
function th() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Bf(), e = /*#__PURE__*/ m$1((W)=>th(W), "DOMPurify");
    if (e.version = "3.2.5", e.removed = [], !t || !t.document || t.document.nodeType !== qr.document || !t.Element) return e.isSupported = false, e;
    let { document: r } = t, o = r, n = o.currentScript, { DocumentFragment: a, HTMLTemplateElement: s, Node: l, Element: c, NodeFilter: h, NamedNodeMap: u = t.NamedNodeMap || t.MozNamedAttrMap, HTMLFormElement: p, DOMParser: f, trustedTypes: g } = t, C = c.prototype, k = /*#__PURE__*/ Nr(C, "cloneNode"), L = /*#__PURE__*/ Nr(C, "remove"), A = /*#__PURE__*/ Nr(C, "nextSibling"), $ = /*#__PURE__*/ Nr(C, "childNodes"), O = /*#__PURE__*/ Nr(C, "parentNode");
    if (typeof s == "function") {
        let W = /*#__PURE__*/ r.createElement("template");
        W.content && W.content.ownerDocument && (r = W.content.ownerDocument);
    }
    let F, P = "", { implementation: w, createNodeIterator: X, createDocumentFragment: j, getElementsByTagName: H } = r, { importNode: it } = o, M = /*#__PURE__*/ jl();
    e.isSupported = typeof Zl == "function" && typeof O == "function" && w && w.createHTMLDocument !== void 0;
    let { MUSTACHE_EXPR: S, ERB_EXPR: x, TMPLIT_EXPR: y, DATA_ATTR: D, ARIA_ATTR: v, IS_SCRIPT_OR_DATA: N, ATTR_WHITESPACE: R, CUSTOM_ELEMENT: Y } = Xl, { IS_ALLOWED_URI: rt } = Xl, G = null, nt = /*#__PURE__*/ K({}, [
        ...Ul,
        ...on,
        ...nn,
        ...an,
        ...Yl
    ]), Q = null, Ft = /*#__PURE__*/ K({}, [
        ...Gl,
        ...sn,
        ...Vl,
        ...Oi
    ]), Z = /*#__PURE__*/ Object.seal(/*#__PURE__*/ Kl(null, {
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
    })), Ct = null, _t = null, lt = true, B = true, U = false, V = true, _ = false, pt = true, J = false, bt = false, Tt = false, It = false, Me = false, yi = false, Vs = true, Xs = false, Fu = "user-content-", No = true, Br = false, Ke = {}, Qe = null, js = /*#__PURE__*/ K({}, [
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
    ]), Zs = null, Ks = /*#__PURE__*/ K({}, [
        "audio",
        "video",
        "img",
        "source",
        "image",
        "track"
    ]), qo = null, Qs = /*#__PURE__*/ K({}, [
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
    ]), Ci = "http://www.w3.org/1998/Math/MathML", _i = "http://www.w3.org/2000/svg", ie = "http://www.w3.org/1999/xhtml", Je = ie, Po = false, Wo = null, Lu = /*#__PURE__*/ K({}, [
        Ci,
        _i,
        ie
    ], rn), bi = /*#__PURE__*/ K({}, [
        "mi",
        "mo",
        "mn",
        "ms",
        "mtext"
    ]), Ti = /*#__PURE__*/ K({}, [
        "annotation-xml"
    ]), Mu = /*#__PURE__*/ K({}, [
        "title",
        "style",
        "font",
        "a",
        "script"
    ]), Fr = null, Au = [
        "application/xhtml+xml",
        "text/html"
    ], Eu = "text/html", mt = null, tr = null, Du = /*#__PURE__*/ r.createElement("form"), Js = /*#__PURE__*/ m$1(function(d) {
        return d instanceof RegExp || d instanceof Function;
    }, "isRegexOrFunction"), $o = /*#__PURE__*/ m$1(function() {
        let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (!(tr && tr === d)) {
            if ((!d || typeof d != "object") && (d = {}), d = /*#__PURE__*/ Ee(d), Fr = Au.indexOf(d.PARSER_MEDIA_TYPE) === -1 ? Eu : d.PARSER_MEDIA_TYPE, mt = Fr === "application/xhtml+xml" ? rn : Ii, G = Ut(d, "ALLOWED_TAGS") ? K({}, d.ALLOWED_TAGS, mt) : nt, Q = Ut(d, "ALLOWED_ATTR") ? K({}, d.ALLOWED_ATTR, mt) : Ft, Wo = Ut(d, "ALLOWED_NAMESPACES") ? K({}, d.ALLOWED_NAMESPACES, rn) : Lu, qo = Ut(d, "ADD_URI_SAFE_ATTR") ? K(/*#__PURE__*/ Ee(Qs), d.ADD_URI_SAFE_ATTR, mt) : Qs, Zs = Ut(d, "ADD_DATA_URI_TAGS") ? K(/*#__PURE__*/ Ee(Ks), d.ADD_DATA_URI_TAGS, mt) : Ks, Qe = Ut(d, "FORBID_CONTENTS") ? K({}, d.FORBID_CONTENTS, mt) : js, Ct = Ut(d, "FORBID_TAGS") ? K({}, d.FORBID_TAGS, mt) : {}, _t = Ut(d, "FORBID_ATTR") ? K({}, d.FORBID_ATTR, mt) : {}, Ke = Ut(d, "USE_PROFILES") ? d.USE_PROFILES : false, lt = d.ALLOW_ARIA_ATTR !== false, B = d.ALLOW_DATA_ATTR !== false, U = d.ALLOW_UNKNOWN_PROTOCOLS || false, V = d.ALLOW_SELF_CLOSE_IN_ATTR !== false, _ = d.SAFE_FOR_TEMPLATES || false, pt = d.SAFE_FOR_XML !== false, J = d.WHOLE_DOCUMENT || false, It = d.RETURN_DOM || false, Me = d.RETURN_DOM_FRAGMENT || false, yi = d.RETURN_TRUSTED_TYPE || false, Tt = d.FORCE_BODY || false, Vs = d.SANITIZE_DOM !== false, Xs = d.SANITIZE_NAMED_PROPS || false, No = d.KEEP_CONTENT !== false, Br = d.IN_PLACE || false, rt = d.ALLOWED_URI_REGEXP || Ql, Je = d.NAMESPACE || ie, bi = d.MATHML_TEXT_INTEGRATION_POINTS || bi, Ti = d.HTML_INTEGRATION_POINTS || Ti, Z = d.CUSTOM_ELEMENT_HANDLING || {}, d.CUSTOM_ELEMENT_HANDLING && Js(d.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Z.tagNameCheck = d.CUSTOM_ELEMENT_HANDLING.tagNameCheck), d.CUSTOM_ELEMENT_HANDLING && Js(d.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Z.attributeNameCheck = d.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), d.CUSTOM_ELEMENT_HANDLING && typeof d.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (Z.allowCustomizedBuiltInElements = d.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), _ && (B = false), Me && (It = true), Ke && (G = /*#__PURE__*/ K({}, Yl), Q = [], Ke.html === true && (K(G, Ul), K(Q, Gl)), Ke.svg === true && (K(G, on), K(Q, sn), K(Q, Oi)), Ke.svgFilters === true && (K(G, nn), K(Q, sn), K(Q, Oi)), Ke.mathMl === true && (K(G, an), K(Q, Vl), K(Q, Oi))), d.ADD_TAGS && (G === nt && (G = /*#__PURE__*/ Ee(G)), K(G, d.ADD_TAGS, mt)), d.ADD_ATTR && (Q === Ft && (Q = /*#__PURE__*/ Ee(Q)), K(Q, d.ADD_ATTR, mt)), d.ADD_URI_SAFE_ATTR && K(qo, d.ADD_URI_SAFE_ATTR, mt), d.FORBID_CONTENTS && (Qe === js && (Qe = /*#__PURE__*/ Ee(Qe)), K(Qe, d.FORBID_CONTENTS, mt)), No && (G["#text"] = true), J && K(G, [
                "html",
                "head",
                "body"
            ]), G.table && (K(G, [
                "tbody"
            ]), delete Ct.tbody), d.TRUSTED_TYPES_POLICY) {
                if (typeof d.TRUSTED_TYPES_POLICY.createHTML != "function") throw Rr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
                if (typeof d.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw Rr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
                F = d.TRUSTED_TYPES_POLICY, P = /*#__PURE__*/ F.createHTML("");
            } else F === void 0 && (F = /*#__PURE__*/ Ff(g, n)), F !== null && typeof P == "string" && (P = /*#__PURE__*/ F.createHTML(""));
            Et && Et(d), tr = d;
        }
    }, "_parseConfig"), tl = /*#__PURE__*/ K({}, [
        ...on,
        ...nn,
        ...xf
    ]), el = /*#__PURE__*/ K({}, [
        ...an,
        ...yf
    ]), Ou = /*#__PURE__*/ m$1(function(d) {
        let b = /*#__PURE__*/ O(d);
        (!b || !b.tagName) && (b = {
            namespaceURI: Je,
            tagName: "template"
        });
        let z = /*#__PURE__*/ Ii(d.tagName), st = /*#__PURE__*/ Ii(b.tagName);
        return Wo[d.namespaceURI] ? d.namespaceURI === _i ? b.namespaceURI === ie ? z === "svg" : b.namespaceURI === Ci ? z === "svg" && (st === "annotation-xml" || bi[st]) : !!tl[z] : d.namespaceURI === Ci ? b.namespaceURI === ie ? z === "math" : b.namespaceURI === _i ? z === "math" && Ti[st] : !!el[z] : d.namespaceURI === ie ? b.namespaceURI === _i && !Ti[st] || b.namespaceURI === Ci && !bi[st] ? false : !el[z] && (Mu[z] || !tl[z]) : !!(Fr === "application/xhtml+xml" && Wo[d.namespaceURI]) : false;
    }, "_checkValidNamespace"), Zt = /*#__PURE__*/ m$1(function(d) {
        Ir(e.removed, {
            element: d
        });
        try {
            O(d).removeChild(d);
        } catch  {
            L(d);
        }
    }, "_forceRemove"), ki = /*#__PURE__*/ m$1(function(d, b) {
        try {
            Ir(e.removed, {
                attribute: /*#__PURE__*/ b.getAttributeNode(d),
                from: b
            });
        } catch  {
            Ir(e.removed, {
                attribute: null,
                from: b
            });
        }
        if (b.removeAttribute(d), d === "is") if (It || Me) try {
            Zt(b);
        } catch  {}
        else try {
            b.setAttribute(d, "");
        } catch  {}
    }, "_removeAttribute"), rl = /*#__PURE__*/ m$1(function(d) {
        let b = null, z = null;
        if (Tt) d = "<remove></remove>" + d;
        else {
            let kt = /*#__PURE__*/ Hl(d, /^[\r\n\t ]+/);
            z = kt && kt[0];
        }
        Fr === "application/xhtml+xml" && Je === ie && (d = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + d + "</body></html>");
        let st = F ? F.createHTML(d) : d;
        if (Je === ie) try {
            b = /*#__PURE__*/ new f().parseFromString(st, Fr);
        } catch  {}
        if (!b || !b.documentElement) {
            b = /*#__PURE__*/ w.createDocument(Je, "template", null);
            try {
                b.documentElement.innerHTML = Po ? P : st;
            } catch  {}
        }
        let Bt = b.body || b.documentElement;
        return d && z && Bt.insertBefore(/*#__PURE__*/ r.createTextNode(z), Bt.childNodes[0] || null), Je === ie ? H.call(b, J ? "html" : "body")[0] : J ? b.documentElement : Bt;
    }, "_initDocument"), il = /*#__PURE__*/ m$1(function(d) {
        return X.call(d.ownerDocument || d, d, h.SHOW_ELEMENT | h.SHOW_COMMENT | h.SHOW_TEXT | h.SHOW_PROCESSING_INSTRUCTION | h.SHOW_CDATA_SECTION, null);
    }, "_createNodeIterator"), Ho = /*#__PURE__*/ m$1(function(d) {
        return d instanceof p && (typeof d.nodeName != "string" || typeof d.textContent != "string" || typeof d.removeChild != "function" || !(d.attributes instanceof u) || typeof d.removeAttribute != "function" || typeof d.setAttribute != "function" || typeof d.namespaceURI != "string" || typeof d.insertBefore != "function" || typeof d.hasChildNodes != "function");
    }, "_isClobbered"), ol = /*#__PURE__*/ m$1(function(d) {
        return typeof l == "function" && d instanceof l;
    }, "_isNode");
    function oe(W, d, b) {
        Di(W, (z)=>{
            z.call(e, d, b, tr);
        });
    }
    m$1(oe, "_executeHooks");
    let nl = /*#__PURE__*/ m$1(function(d) {
        let b = null;
        if (oe(M.beforeSanitizeElements, d, null), Ho(d)) return Zt(d), true;
        let z = /*#__PURE__*/ mt(d.nodeName);
        if (oe(M.uponSanitizeElement, d, {
            tagName: z,
            allowedTags: G
        }), d.hasChildNodes() && !ol(d.firstElementChild) && At(/<[/\w!]/g, d.innerHTML) && At(/<[/\w!]/g, d.textContent) || d.nodeType === qr.progressingInstruction || pt && d.nodeType === qr.comment && At(/<[/\w]/g, d.data)) return Zt(d), true;
        if (!G[z] || Ct[z]) {
            if (!Ct[z] && sl(z) && (Z.tagNameCheck instanceof RegExp && At(Z.tagNameCheck, z) || Z.tagNameCheck instanceof Function && Z.tagNameCheck(z))) return false;
            if (No && !Qe[z]) {
                let st = O(d) || d.parentNode, Bt = $(d) || d.childNodes;
                if (Bt && st) {
                    let kt = Bt.length;
                    for(let zt = kt - 1; zt >= 0; --zt){
                        let Kt = /*#__PURE__*/ k(Bt[zt], true);
                        Kt.__removalCount = (d.__removalCount || 0) + 1, st.insertBefore(Kt, /*#__PURE__*/ A(d));
                    }
                }
            }
            return Zt(d), true;
        }
        return d instanceof c && !Ou(d) || (z === "noscript" || z === "noembed" || z === "noframes") && At(/<\/no(script|embed|frames)/i, d.innerHTML) ? (Zt(d), true) : (_ && d.nodeType === qr.text && (b = d.textContent, Di([
            S,
            x,
            y
        ], (st)=>{
            b = /*#__PURE__*/ zr(b, st, " ");
        }), d.textContent !== b && (Ir(e.removed, {
            element: /*#__PURE__*/ d.cloneNode()
        }), d.textContent = b)), oe(M.afterSanitizeElements, d, null), false);
    }, "_sanitizeElements"), al = /*#__PURE__*/ m$1(function(d, b, z) {
        if (Vs && (b === "id" || b === "name") && (z in r || z in Du)) return false;
        if (!(B && !_t[b] && At(D, b))) {
            if (!(lt && At(v, b))) {
                if (!Q[b] || _t[b]) {
                    if (!(sl(d) && (Z.tagNameCheck instanceof RegExp && At(Z.tagNameCheck, d) || Z.tagNameCheck instanceof Function && Z.tagNameCheck(d)) && (Z.attributeNameCheck instanceof RegExp && At(Z.attributeNameCheck, b) || Z.attributeNameCheck instanceof Function && Z.attributeNameCheck(b)) || b === "is" && Z.allowCustomizedBuiltInElements && (Z.tagNameCheck instanceof RegExp && At(Z.tagNameCheck, z) || Z.tagNameCheck instanceof Function && Z.tagNameCheck(z)))) return false;
                } else if (!qo[b]) {
                    if (!At(rt, /*#__PURE__*/ zr(z, R, ""))) {
                        if (!((b === "src" || b === "xlink:href" || b === "href") && d !== "script" && df(z, "data:") === 0 && Zs[d])) {
                            if (!(U && !At(N, /*#__PURE__*/ zr(z, R, "")))) {
                                if (z) return false;
                            }
                        }
                    }
                }
            }
        }
        return true;
    }, "_isValidAttribute"), sl = /*#__PURE__*/ m$1(function(d) {
        return d !== "annotation-xml" && Hl(d, Y);
    }, "_isBasicCustomElement"), ll = /*#__PURE__*/ m$1(function(d) {
        oe(M.beforeSanitizeAttributes, d, null);
        let { attributes: b } = d;
        if (!b || Ho(d)) return;
        let z = {
            attrName: "",
            attrValue: "",
            keepAttr: true,
            allowedAttributes: Q,
            forceKeepAttr: void 0
        }, st = b.length;
        for(; st--;){
            let Bt = b[st], { name: kt, namespaceURI: zt, value: Kt } = Bt, Lr = /*#__PURE__*/ mt(kt), Lt = kt === "value" ? Kt : pf(Kt);
            if (z.attrName = Lr, z.attrValue = Lt, z.keepAttr = true, z.forceKeepAttr = void 0, oe(M.uponSanitizeAttribute, d, z), Lt = z.attrValue, Xs && (Lr === "id" || Lr === "name") && (ki(kt, d), Lt = Fu + Lt), pt && At(/((--!?|])>)|<\/(style|title)/i, Lt)) {
                ki(kt, d);
                continue;
            }
            if (z.forceKeepAttr || (ki(kt, d), !z.keepAttr)) continue;
            if (!V && At(/\/>/i, Lt)) {
                ki(kt, d);
                continue;
            }
            _ && Di([
                S,
                x,
                y
            ], (cl)=>{
                Lt = /*#__PURE__*/ zr(Lt, cl, " ");
            });
            let hl = /*#__PURE__*/ mt(d.nodeName);
            if (al(hl, Lr, Lt)) {
                if (F && typeof g == "object" && typeof g.getAttributeType == "function" && !zt) switch(g.getAttributeType(hl, Lr)){
                    case "TrustedHTML":
                        {
                            Lt = /*#__PURE__*/ F.createHTML(Lt);
                            break;
                        }
                    case "TrustedScriptURL":
                        {
                            Lt = /*#__PURE__*/ F.createScriptURL(Lt);
                            break;
                        }
                }
                try {
                    zt ? d.setAttributeNS(zt, kt, Lt) : d.setAttribute(kt, Lt), Ho(d) ? Zt(d) : $l(e.removed);
                } catch  {}
            }
        }
        oe(M.afterSanitizeAttributes, d, null);
    }, "_sanitizeAttributes"), Iu = /*#__PURE__*/ m$1(function W(d) {
        let b = null, z = /*#__PURE__*/ il(d);
        for(oe(M.beforeSanitizeShadowDOM, d, null); b = /*#__PURE__*/ z.nextNode();)oe(M.uponSanitizeShadowNode, b, null), nl(b), ll(b), b.content instanceof a && W(b.content);
        oe(M.afterSanitizeShadowDOM, d, null);
    }, "_sanitizeShadowDOM");
    return e.sanitize = function(W) {
        let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, b = null, z = null, st = null, Bt = null;
        if (Po = !W, Po && (W = "<!-->"), typeof W != "string" && !ol(W)) if (typeof W.toString == "function") {
            if (W = /*#__PURE__*/ W.toString(), typeof W != "string") throw Rr("dirty is not a string, aborting");
        } else throw Rr("toString is not a function");
        if (!e.isSupported) return W;
        if (bt || $o(d), e.removed = [], typeof W == "string" && (Br = false), Br) {
            if (W.nodeName) {
                let Kt = /*#__PURE__*/ mt(W.nodeName);
                if (!G[Kt] || Ct[Kt]) throw Rr("root node is forbidden and cannot be sanitized in-place");
            }
        } else if (W instanceof l) b = /*#__PURE__*/ rl("<!---->"), z = /*#__PURE__*/ b.ownerDocument.importNode(W, true), z.nodeType === qr.element && z.nodeName === "BODY" || z.nodeName === "HTML" ? b = z : b.appendChild(z);
        else {
            if (!It && !_ && !J && W.indexOf("<") === -1) return F && yi ? F.createHTML(W) : W;
            if (b = /*#__PURE__*/ rl(W), !b) return It ? null : yi ? P : "";
        }
        b && Tt && Zt(b.firstChild);
        let kt = /*#__PURE__*/ il(Br ? W : b);
        for(; st = /*#__PURE__*/ kt.nextNode();)nl(st), ll(st), st.content instanceof a && Iu(st.content);
        if (Br) return W;
        if (It) {
            if (Me) for(Bt = /*#__PURE__*/ j.call(b.ownerDocument); b.firstChild;)Bt.appendChild(b.firstChild);
            else Bt = b;
            return (Q.shadowroot || Q.shadowrootmode) && (Bt = /*#__PURE__*/ it.call(o, Bt, true)), Bt;
        }
        let zt = J ? b.outerHTML : b.innerHTML;
        return J && G["!doctype"] && b.ownerDocument && b.ownerDocument.doctype && b.ownerDocument.doctype.name && At(Jl, b.ownerDocument.doctype.name) && (zt = "<!DOCTYPE " + b.ownerDocument.doctype.name + `>
` + zt), _ && Di([
            S,
            x,
            y
        ], (Kt)=>{
            zt = /*#__PURE__*/ zr(zt, Kt, " ");
        }), F && yi ? F.createHTML(zt) : zt;
    }, e.setConfig = function() {
        let W = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        $o(W), bt = true;
    }, e.clearConfig = function() {
        tr = null, bt = false;
    }, e.isValidAttribute = function(W, d, b) {
        tr || $o({});
        let z = /*#__PURE__*/ mt(W), st = /*#__PURE__*/ mt(d);
        return al(z, st, b);
    }, e.addHook = function(W, d) {
        typeof d == "function" && Ir(M[W], d);
    }, e.removeHook = function(W, d) {
        if (d !== void 0) {
            let b = /*#__PURE__*/ uf(M[W], d);
            return b === -1 ? void 0 : ff(M[W], b, 1)[0];
        }
        return $l(M[W]);
    }, e.removeHooks = function(W) {
        M[W] = [];
    }, e.removeAllHooks = function() {
        M = /*#__PURE__*/ jl();
    }, e;
}
m$1(th, "createDOMPurify");
var rr = /*#__PURE__*/ th();
var Pr = /<br\s*\/?>/gi, Lf = /*#__PURE__*/ m$1((t)=>t ? nh(t).replace(/\\n/g, "#br#").split("#br#") : [
        ""
    ], "getRows"), Mf = /*#__PURE__*/ (()=>{
    let t = false;
    return ()=>{
        t || (Af(), t = true);
    };
})();
function Af() {
    let t = "data-temp-href-target";
    rr.addHook("beforeSanitizeAttributes", (e)=>{
        e instanceof Element && e.tagName === "A" && e.hasAttribute("target") && e.setAttribute(t, e.getAttribute("target") ?? "");
    }), rr.addHook("afterSanitizeAttributes", (e)=>{
        e instanceof Element && e.tagName === "A" && e.hasAttribute(t) && (e.setAttribute("target", e.getAttribute(t) ?? ""), e.removeAttribute(t), e.getAttribute("target") === "_blank" && e.setAttribute("rel", "noopener"));
    });
}
m$1(Af, "setupDompurifyHooks");
var oh = /*#__PURE__*/ m$1((t)=>(Mf(), rr.sanitize(t)), "removeScript"), eh = /*#__PURE__*/ m$1((t, e)=>{
    if (e.flowchart?.htmlLabels !== false) {
        let r = e.securityLevel;
        r === "antiscript" || r === "strict" ? t = /*#__PURE__*/ oh(t) : r !== "loose" && (t = /*#__PURE__*/ nh(t), t = /*#__PURE__*/ t.replace(/</g, "&lt;").replace(/>/g, "&gt;"), t = /*#__PURE__*/ t.replace(/=/g, "&equals;"), t = /*#__PURE__*/ If(t));
    }
    return t;
}, "sanitizeMore"), De = /*#__PURE__*/ m$1((t, e)=>t && (e.dompurifyConfig ? t = /*#__PURE__*/ rr.sanitize(/*#__PURE__*/ eh(t, e), e.dompurifyConfig).toString() : t = /*#__PURE__*/ rr.sanitize(/*#__PURE__*/ eh(t, e), {
        FORBID_TAGS: [
            "style"
        ]
    }).toString(), t), "sanitizeText"), Ef = /*#__PURE__*/ m$1((t, e)=>typeof t == "string" ? De(t, e) : t.flat().map((r)=>De(r, e)), "sanitizeTextOrArray"), Df = /*#__PURE__*/ m$1((t)=>Pr.test(t), "hasBreaks"), Of = /*#__PURE__*/ m$1((t)=>t.split(Pr), "splitBreaks"), If = /*#__PURE__*/ m$1((t)=>t.replace(/#br#/g, "<br/>"), "placeholderToBreak"), nh = /*#__PURE__*/ m$1((t)=>t.replace(Pr, "#br#"), "breakToPlaceholder"), zf = /*#__PURE__*/ m$1((t)=>{
    let e = "";
    return t && (e = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, e = /*#__PURE__*/ CSS.escape(e)), e;
}, "getUrl"), Rf = /*#__PURE__*/ m$1((t)=>!(t === false || [
        "false",
        "null",
        "0"
    ].includes(/*#__PURE__*/ String(t).trim().toLowerCase())), "evaluate"), Nf = /*#__PURE__*/ m$1(function(...t) {
    let e = /*#__PURE__*/ t.filter((r)=>!isNaN(r));
    return Math.max(...e);
}, "getMax"), qf = /*#__PURE__*/ m$1(function(...t) {
    let e = /*#__PURE__*/ t.filter((r)=>!isNaN(r));
    return Math.min(...e);
}, "getMin"), GC = /*#__PURE__*/ m$1(function(t) {
    let e = /*#__PURE__*/ t.split(/(,)/), r = [];
    for(let o = 0; o < e.length; o++){
        let n = e[o];
        if (n === "," && o > 0 && o + 1 < e.length) {
            let a = e[o - 1], s = e[o + 1];
            Pf(a, s) && (n = a + "," + s, o++, r.pop());
        }
        r.push(/*#__PURE__*/ Wf(n));
    }
    return r.join("");
}, "parseGenericTypes"), cn = /*#__PURE__*/ m$1((t, e)=>Math.max(0, t.split(e).length - 1), "countOccurrence"), Pf = /*#__PURE__*/ m$1((t, e)=>{
    let r = /*#__PURE__*/ cn(t, "~"), o = /*#__PURE__*/ cn(e, "~");
    return r === 1 && o === 1;
}, "shouldCombineSets"), Wf = /*#__PURE__*/ m$1((t)=>{
    let e = /*#__PURE__*/ cn(t, "~"), r = false;
    if (e <= 1) return t;
    e % 2 !== 0 && t.startsWith("~") && (t = /*#__PURE__*/ t.substring(1), r = true);
    let o = [
        ...t
    ], n = /*#__PURE__*/ o.indexOf("~"), a = /*#__PURE__*/ o.lastIndexOf("~");
    for(; n !== -1 && a !== -1 && n !== a;)o[n] = "<", o[a] = ">", n = /*#__PURE__*/ o.indexOf("~"), a = /*#__PURE__*/ o.lastIndexOf("~");
    return r && o.unshift("~"), o.join("");
}, "processSet"), rh = /*#__PURE__*/ m$1(()=>window.MathMLElement !== void 0, "isMathMLSupported"), zi = /\$\$(.*)\$\$/g, ih = /*#__PURE__*/ m$1((t)=>(t.match(zi)?.length ?? 0) > 0, "hasKatex"), VC = /*#__PURE__*/ m$1(async (t, e)=>{
    t = await $f(t, e);
    let r = /*#__PURE__*/ document.createElement("div");
    r.innerHTML = t, r.id = "katex-temp", r.style.visibility = "hidden", r.style.position = "absolute", r.style.top = "0", document.querySelector("body")?.insertAdjacentElement("beforeend", r);
    let n = {
        width: r.clientWidth,
        height: r.clientHeight
    };
    return r.remove(), n;
}, "calculateMathMLDimensions"), $f = /*#__PURE__*/ m$1(async (t, e)=>{
    if (!ih(t)) return t;
    if (!(rh() || e.legacyMathML || e.forceLegacyMathML)) return t.replace(zi, "MathML is unsupported in this environment.");
    {
        let { default: r } = await __vitePreload(async ()=>{
            const { default: r } = await import('./vendor-min-mermaid~katex-RV2QPRKB.DmDZHRCw.chunk.js');
            return {
                default: r
            };
        }, true               ? __vite__mapDeps([0,1]) : void 0), o = e.forceLegacyMathML || !rh() && e.legacyMathML ? "htmlAndMathml" : "mathml";
        return t.split(Pr).map((n)=>ih(n) ? `<div style="display: flex; align-items: center; justify-content: center; white-space: nowrap;">${n}</div>` : `<div>${n}</div>`).join("").replace(zi, (n, a)=>r.renderToString(a, {
                throwOnError: true,
                displayMode: true,
                output: o
            }).replace(/\n/g, " ").replace(/<annotation.*<\/annotation>/g, ""));
    }
}, "renderKatex"), XC = {
    getRows: Lf,
    sanitizeText: De,
    sanitizeTextOrArray: Ef,
    hasBreaks: Df,
    splitBreaks: Of,
    lineBreakRegex: Pr,
    removeScript: oh,
    getUrl: zf,
    evaluate: Rf,
    getMax: Nf,
    getMin: qf
};
var Hf = /*#__PURE__*/ m$1(function(t, e) {
    for (let r of e)t.attr(r[0], r[1]);
}, "d3Attrs"), Uf = /*#__PURE__*/ m$1(function(t, e, r) {
    let o = new Map;
    return r ? (o.set("width", "100%"), o.set("style", `max-width: ${e}px;`)) : (o.set("height", t), o.set("width", e)), o;
}, "calculateSvgSizeAttrs"), Yf = /*#__PURE__*/ m$1(function(t, e, r, o) {
    let n = /*#__PURE__*/ Uf(e, r, o);
    Hf(t, n);
}, "configureSvgSize"), ah = /*#__PURE__*/ m$1(function(t, e, r, o) {
    let n = /*#__PURE__*/ e.node().getBBox(), a = n.width, s = n.height;
    tt.info(`SVG bounds: ${a}x${s}`, n);
    let l = 0, c = 0;
    tt.info(`Graph bounds: ${l}x${c}`, t), l = a + r * 2, c = s + r * 2, tt.info(`Calculated bounds: ${l}x${c}`), Yf(e, c, l, o);
    let h = `${n.x - r} ${n.y - r} ${n.width + 2 * r} ${n.height + 2 * r}`;
    e.attr("viewBox", h);
}, "setupGraphViewbox");
var Ri = {}, Gf = /*#__PURE__*/ m$1((t, e, r)=>{
    let o = "";
    return t in Ri && Ri[t] ? o = /*#__PURE__*/ Ri[t](r) : tt.warn(`No theme found for ${t}`), ` & {
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
}, "getStyles"), sh = /*#__PURE__*/ m$1((t, e)=>{
    e !== void 0 && (Ri[t] = e);
}, "addStylesForDiagram"), e_ = Gf;
var mn = {};
o(mn, {
    clear: ()=>Vf,
    getAccDescription: ()=>Kf,
    getAccTitle: ()=>jf,
    getDiagramTitle: ()=>Jf,
    setAccDescription: ()=>Zf,
    setAccTitle: ()=>Xf,
    setDiagramTitle: ()=>Qf
});
var un = "", fn = "", dn = "", pn = /*#__PURE__*/ m$1((t)=>De(t, /*#__PURE__*/ Or()), "sanitizeText"), Vf = /*#__PURE__*/ m$1(()=>{
    un = "", dn = "", fn = "";
}, "clear"), Xf = /*#__PURE__*/ m$1((t)=>{
    un = /*#__PURE__*/ pn(t).replace(/^\s+/g, "");
}, "setAccTitle"), jf = /*#__PURE__*/ m$1(()=>un, "getAccTitle"), Zf = /*#__PURE__*/ m$1((t)=>{
    dn = /*#__PURE__*/ pn(t).replace(/\n\s+/g, `
`);
}, "setAccDescription"), Kf = /*#__PURE__*/ m$1(()=>dn, "getAccDescription"), Qf = /*#__PURE__*/ m$1((t)=>{
    fn = /*#__PURE__*/ pn(t);
}, "setDiagramTitle"), Jf = /*#__PURE__*/ m$1(()=>fn, "getDiagramTitle");
var lh = tt, td = dl, hh = Or, d_ = Nl, p_ = Dr;
var ed = /*#__PURE__*/ m$1((t)=>De(t, /*#__PURE__*/ hh()), "sanitizeText"), rd = ah, id = /*#__PURE__*/ m$1(()=>mn, "getCommonDb"), Ni = {}, m_ = /*#__PURE__*/ m$1((t, e, r)=>{
    Ni[t] && lh.warn(`Diagram with id ${t} already registered. Overwriting.`), Ni[t] = e, r && Go(t, r), sh(t, e.styles), e.injectUtils?.(lh, td, hh, ed, rd, id(), ()=>{});
}, "registerDiagram"), g_ = /*#__PURE__*/ m$1((t)=>{
    if (t in Ni) return Ni[t];
    throw new gn(t);
}, "getDiagram"), gn = class extends Error {
    static{
        m$1(this, "DiagramNotFoundError");
    }
    constructor(e){
        super(`Diagram ${e} not found.`);
    }
};
function ch(t, e) {
    let r;
    if (e === void 0) for (let o of t)o != null && (r < o || r === void 0 && o >= o) && (r = o);
    else {
        let o = -1;
        for (let n of t)(n = /*#__PURE__*/ e(n, ++o, t)) != null && (r < n || r === void 0 && n >= n) && (r = n);
    }
    return r;
}
m$1(ch, "max");
function uh(t, e) {
    let r;
    if (e === void 0) for (let o of t)o != null && (r > o || r === void 0 && o >= o) && (r = o);
    else {
        let o = -1;
        for (let n of t)(n = /*#__PURE__*/ e(n, ++o, t)) != null && (r > n || r === void 0 && n >= n) && (r = n);
    }
    return r;
}
m$1(uh, "min");
function Oe(t, e) {
    return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
m$1(Oe, "ascending");
function xn(t, e) {
    return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
m$1(xn, "descending");
function Ie(t) {
    let e, r, o;
    t.length !== 2 ? (e = Oe, r = /*#__PURE__*/ m$1((l, c)=>Oe(/*#__PURE__*/ t(l), c), "compare2"), o = /*#__PURE__*/ m$1((l, c)=>t(l) - c, "delta")) : (e = t === Oe || t === xn ? t : od, r = t, o = t);
    function n(l, c, h = 0, u = l.length) {
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
    function a(l, c, h = 0, u = l.length) {
        if (h < u) {
            if (e(c, c) !== 0) return u;
            do {
                let p = h + u >>> 1;
                r(l[p], c) <= 0 ? h = p + 1 : u = p;
            }while (h < u);
        }
        return h;
    }
    m$1(a, "right");
    function s(l, c, h = 0, u = l.length) {
        let p = /*#__PURE__*/ n(l, c, h, u - 1);
        return p > h && o(l[p - 1], c) > -o(l[p], c) ? p - 1 : p;
    }
    return m$1(s, "center"), {
        left: n,
        center: s,
        right: a
    };
}
m$1(Ie, "bisector");
function od() {
    return 0;
}
m$1(od, "zero");
function yn(t) {
    return t === null ? NaN : +t;
}
m$1(yn, "number");
var fh = /*#__PURE__*/ Ie(Oe), dh = fh.right;
fh.left;
Ie(yn).center;
var Cn = dh;
var ir = class extends Map {
    static{
        m$1(this, "InternMap");
    }
    constructor(e, r = hd){
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
        return super.get(/*#__PURE__*/ ph(this, e));
    }
    has(e) {
        return super.has(/*#__PURE__*/ ph(this, e));
    }
    set(e, r) {
        return super.set(/*#__PURE__*/ sd(this, e), r);
    }
    delete(e) {
        return super.delete(/*#__PURE__*/ ld(this, e));
    }
};
function ph({ _intern: t, _key: e }, r) {
    let o = /*#__PURE__*/ e(r);
    return t.has(o) ? t.get(o) : r;
}
m$1(ph, "intern_get");
function sd({ _intern: t, _key: e }, r) {
    let o = /*#__PURE__*/ e(r);
    return t.has(o) ? t.get(o) : (t.set(o, r), r);
}
m$1(sd, "intern_set");
function ld({ _intern: t, _key: e }, r) {
    let o = /*#__PURE__*/ e(r);
    return t.has(o) && (r = /*#__PURE__*/ t.get(o), t.delete(o)), r;
}
m$1(ld, "intern_delete");
function hd(t) {
    return t !== null && typeof t == "object" ? t.valueOf() : t;
}
m$1(hd, "keyof");
var cd = /*#__PURE__*/ Math.sqrt(50), ud = /*#__PURE__*/ Math.sqrt(10), fd = /*#__PURE__*/ Math.sqrt(2);
function qi(t, e, r) {
    let o = (e - t) / Math.max(0, r), n = /*#__PURE__*/ Math.floor(/*#__PURE__*/ Math.log10(o)), a = o / Math.pow(10, n), s = a >= cd ? 10 : a >= ud ? 5 : a >= fd ? 2 : 1, l, c, h;
    return n < 0 ? (h = Math.pow(10, -n) / s, l = /*#__PURE__*/ Math.round(t * h), c = /*#__PURE__*/ Math.round(e * h), l / h < t && ++l, c / h > e && --c, h = -h) : (h = Math.pow(10, n) * s, l = /*#__PURE__*/ Math.round(t / h), c = /*#__PURE__*/ Math.round(e / h), l * h < t && ++l, c * h > e && --c), c < l && .5 <= r && r < 2 ? qi(t, e, r * 2) : [
        l,
        c,
        h
    ];
}
m$1(qi, "tickSpec");
function Pi(t, e, r) {
    if (e = +e, t = +t, r = +r, !(r > 0)) return [];
    if (t === e) return [
        t
    ];
    let o = e < t, [n, a, s] = o ? qi(e, t, r) : qi(t, e, r);
    if (!(a >= n)) return [];
    let l = a - n + 1, c = new Array(l);
    if (o) if (s < 0) for(let h = 0; h < l; ++h)c[h] = (a - h) / -s;
    else for(let h = 0; h < l; ++h)c[h] = (a - h) * s;
    else if (s < 0) for(let h = 0; h < l; ++h)c[h] = (n + h) / -s;
    else for(let h = 0; h < l; ++h)c[h] = (n + h) * s;
    return c;
}
m$1(Pi, "ticks");
function Wr(t, e, r) {
    return e = +e, t = +t, r = +r, qi(t, e, r)[2];
}
m$1(Wr, "tickIncrement");
function or(t, e, r) {
    e = +e, t = +t, r = +r;
    let o = e < t, n = o ? Wr(e, t, r) : Wr(t, e, r);
    return (o ? -1 : 1) * (n < 0 ? 1 / -n : n);
}
m$1(or, "tickStep");
function Wi(t, e, r) {
    t = +t, e = +e, r = (n = arguments.length) < 2 ? (e = t, t = 0, 1) : n < 3 ? 1 : +r;
    for(var o = -1, n = Math.max(0, /*#__PURE__*/ Math.ceil((e - t) / r)) | 0, a = new Array(n); ++o < n;)a[o] = t + o * r;
    return a;
}
m$1(Wi, "range");
function _n(t) {
    return t;
}
m$1(_n, "default");
var Hi = 1, bn = 2, Tn = 3, $i = 4, mh = 1e-6;
function dd(t) {
    return "translate(" + t + ",0)";
}
m$1(dd, "translateX");
function pd(t) {
    return "translate(0," + t + ")";
}
m$1(pd, "translateY");
function md(t) {
    return (e)=>+t(e);
}
m$1(md, "number");
function gd(t, e) {
    return e = Math.max(0, t.bandwidth() - e * 2) / 2, t.round() && (e = /*#__PURE__*/ Math.round(e)), (r)=>+t(r) + e;
}
m$1(gd, "center");
function xd() {
    return !this.__axis;
}
m$1(xd, "entering");
function gh(t, e) {
    var r = [], o = null, n = null, a = 6, s = 6, l = 3, c = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : .5, h = t === Hi || t === $i ? -1 : 1, u = t === $i || t === bn ? "x" : "y", p = t === Hi || t === Tn ? dd : pd;
    function f(g) {
        var C = o ?? (e.ticks ? e.ticks.apply(e, r) : e.domain()), k = n ?? (e.tickFormat ? e.tickFormat.apply(e, r) : _n), L = Math.max(a, 0) + l, A = /*#__PURE__*/ e.range(), $ = +A[0] + c, O = +A[A.length - 1] + c, F = /*#__PURE__*/ (e.bandwidth ? gd : md)(/*#__PURE__*/ e.copy(), c), P = g.selection ? g.selection() : g, w = /*#__PURE__*/ P.selectAll(".domain").data([
            null
        ]), X = /*#__PURE__*/ P.selectAll(".tick").data(C, e).order(), j = /*#__PURE__*/ X.exit(), H = /*#__PURE__*/ X.enter().append("g").attr("class", "tick"), it = /*#__PURE__*/ X.select("line"), M = /*#__PURE__*/ X.select("text");
        w = /*#__PURE__*/ w.merge(/*#__PURE__*/ w.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), X = /*#__PURE__*/ X.merge(H), it = /*#__PURE__*/ it.merge(/*#__PURE__*/ H.append("line").attr("stroke", "currentColor").attr(u + "2", h * a)), M = /*#__PURE__*/ M.merge(/*#__PURE__*/ H.append("text").attr("fill", "currentColor").attr(u, h * L).attr("dy", t === Hi ? "0em" : t === Tn ? "0.71em" : "0.32em")), g !== P && (w = /*#__PURE__*/ w.transition(g), X = /*#__PURE__*/ X.transition(g), it = /*#__PURE__*/ it.transition(g), M = /*#__PURE__*/ M.transition(g), j = /*#__PURE__*/ j.transition(g).attr("opacity", mh).attr("transform", function(S) {
            return isFinite(S = /*#__PURE__*/ F(S)) ? p(S + c) : this.getAttribute("transform");
        }), H.attr("opacity", mh).attr("transform", function(S) {
            var x = this.parentNode.__axis;
            return p((x && isFinite(x = /*#__PURE__*/ x(S)) ? x : F(S)) + c);
        })), j.remove(), w.attr("d", t === $i || t === bn ? s ? "M" + h * s + "," + $ + "H" + c + "V" + O + "H" + h * s : "M" + c + "," + $ + "V" + O : s ? "M" + $ + "," + h * s + "V" + c + "H" + O + "V" + h * s : "M" + $ + "," + c + "H" + O), X.attr("opacity", 1).attr("transform", function(S) {
            return p(F(S) + c);
        }), it.attr(u + "2", h * a), M.attr(u, h * L).text(k), P.filter(xd).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === bn ? "start" : t === $i ? "end" : "middle"), P.each(function() {
            this.__axis = F;
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
        return arguments.length ? (a = s = +g, f) : a;
    }, f.tickSizeInner = function(g) {
        return arguments.length ? (a = +g, f) : a;
    }, f.tickSizeOuter = function(g) {
        return arguments.length ? (s = +g, f) : s;
    }, f.tickPadding = function(g) {
        return arguments.length ? (l = +g, f) : l;
    }, f.offset = function(g) {
        return arguments.length ? (c = +g, f) : c;
    }, f;
}
m$1(gh, "axis");
function yd(t) {
    return gh(Hi, t);
}
m$1(yd, "axisTop");
function Cd(t) {
    return gh(Tn, t);
}
m$1(Cd, "axisBottom");
function _d() {}
m$1(_d, "none");
function Ce(t) {
    return t == null ? _d : function() {
        return this.querySelector(t);
    };
}
m$1(Ce, "default");
function kn(t) {
    typeof t != "function" && (t = /*#__PURE__*/ Ce(t));
    for(var e = this._groups, r = e.length, o = new Array(r), n = 0; n < r; ++n)for(var a = e[n], s = a.length, l = o[n] = new Array(s), c, h, u = 0; u < s; ++u)(c = a[u]) && (h = /*#__PURE__*/ t.call(c, c.__data__, u, a)) && ("__data__" in c && (h.__data__ = c.__data__), l[u] = h);
    return new ht(o, this._parents);
}
m$1(kn, "default");
function Sn(t) {
    return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
m$1(Sn, "array");
function bd() {
    return [];
}
m$1(bd, "empty");
function nr(t) {
    return t == null ? bd : function() {
        return this.querySelectorAll(t);
    };
}
m$1(nr, "default");
function Td(t) {
    return function() {
        return Sn(/*#__PURE__*/ t.apply(this, arguments));
    };
}
m$1(Td, "arrayAll");
function vn(t) {
    typeof t == "function" ? t = /*#__PURE__*/ Td(t) : t = /*#__PURE__*/ nr(t);
    for(var e = this._groups, r = e.length, o = [], n = [], a = 0; a < r; ++a)for(var s = e[a], l = s.length, c, h = 0; h < l; ++h)(c = s[h]) && (o.push(/*#__PURE__*/ t.call(c, c.__data__, h, s)), n.push(c));
    return new ht(o, n);
}
m$1(vn, "default");
function ar(t) {
    return function() {
        return this.matches(t);
    };
}
m$1(ar, "default");
function Ui(t) {
    return function(e) {
        return e.matches(t);
    };
}
m$1(Ui, "childMatcher");
var kd = Array.prototype.find;
function Sd(t) {
    return function() {
        return kd.call(this.children, t);
    };
}
m$1(Sd, "childFind");
function vd() {
    return this.firstElementChild;
}
m$1(vd, "childFirst");
function wn(t) {
    return this.select(t == null ? vd : Sd(typeof t == "function" ? t : Ui(t)));
}
m$1(wn, "default");
var wd = Array.prototype.filter;
function Bd() {
    return Array.from(this.children);
}
m$1(Bd, "children");
function Fd(t) {
    return function() {
        return wd.call(this.children, t);
    };
}
m$1(Fd, "childrenFilter");
function Bn(t) {
    return this.selectAll(t == null ? Bd : Fd(typeof t == "function" ? t : Ui(t)));
}
m$1(Bn, "default");
function Fn(t) {
    typeof t != "function" && (t = /*#__PURE__*/ ar(t));
    for(var e = this._groups, r = e.length, o = new Array(r), n = 0; n < r; ++n)for(var a = e[n], s = a.length, l = o[n] = [], c, h = 0; h < s; ++h)(c = a[h]) && t.call(c, c.__data__, h, a) && l.push(c);
    return new ht(o, this._parents);
}
m$1(Fn, "default");
function $r(t) {
    return new Array(t.length);
}
m$1($r, "default");
function Ln() {
    return new ht(this._enter || this._groups.map($r), this._parents);
}
m$1(Ln, "default");
function Hr(t, e) {
    this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
m$1(Hr, "EnterNode");
Hr.prototype = {
    constructor: Hr,
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
function Mn(t) {
    return function() {
        return t;
    };
}
m$1(Mn, "default");
function Ld(t, e, r, o, n, a) {
    for(var s = 0, l, c = e.length, h = a.length; s < h; ++s)(l = e[s]) ? (l.__data__ = a[s], o[s] = l) : r[s] = new Hr(t, a[s]);
    for(; s < c; ++s)(l = e[s]) && (n[s] = l);
}
m$1(Ld, "bindIndex");
function Md(t, e, r, o, n, a, s) {
    var l, c, h = new Map, u = e.length, p = a.length, f = new Array(u), g;
    for(l = 0; l < u; ++l)(c = e[l]) && (f[l] = g = s.call(c, c.__data__, l, e) + "", h.has(g) ? n[l] = c : h.set(g, c));
    for(l = 0; l < p; ++l)g = s.call(t, a[l], l, a) + "", (c = /*#__PURE__*/ h.get(g)) ? (o[l] = c, c.__data__ = a[l], h.delete(g)) : r[l] = new Hr(t, a[l]);
    for(l = 0; l < u; ++l)(c = e[l]) && h.get(f[l]) === c && (n[l] = c);
}
m$1(Md, "bindKey");
function Ad(t) {
    return t.__data__;
}
m$1(Ad, "datum");
function An(t, e) {
    if (!arguments.length) return Array.from(this, Ad);
    var r = e ? Md : Ld, o = this._parents, n = this._groups;
    typeof t != "function" && (t = /*#__PURE__*/ Mn(t));
    for(var a = n.length, s = new Array(a), l = new Array(a), c = new Array(a), h = 0; h < a; ++h){
        var u = o[h], p = n[h], f = p.length, g = /*#__PURE__*/ Ed(/*#__PURE__*/ t.call(u, u && u.__data__, h, o)), C = g.length, k = l[h] = new Array(C), L = s[h] = new Array(C), A = c[h] = new Array(f);
        r(u, p, k, L, A, g, e);
        for(var $ = 0, O = 0, F, P; $ < C; ++$)if (F = k[$]) {
            for($ >= O && (O = $ + 1); !(P = L[O]) && ++O < C;);
            F._next = P || null;
        }
    }
    return s = new ht(s, o), s._enter = l, s._exit = c, s;
}
m$1(An, "default");
function Ed(t) {
    return typeof t == "object" && "length" in t ? t : Array.from(t);
}
m$1(Ed, "arraylike");
function En() {
    return new ht(this._exit || this._groups.map($r), this._parents);
}
m$1(En, "default");
function Dn(t, e, r) {
    var o = /*#__PURE__*/ this.enter(), n = this, a = /*#__PURE__*/ this.exit();
    return typeof t == "function" ? (o = /*#__PURE__*/ t(o), o && (o = /*#__PURE__*/ o.selection())) : o = /*#__PURE__*/ o.append(t + ""), e != null && (n = /*#__PURE__*/ e(n), n && (n = /*#__PURE__*/ n.selection())), r == null ? a.remove() : r(a), o && n ? o.merge(n).order() : n;
}
m$1(Dn, "default");
function On(t) {
    for(var e = t.selection ? t.selection() : t, r = this._groups, o = e._groups, n = r.length, a = o.length, s = /*#__PURE__*/ Math.min(n, a), l = new Array(n), c = 0; c < s; ++c)for(var h = r[c], u = o[c], p = h.length, f = l[c] = new Array(p), g, C = 0; C < p; ++C)(g = h[C] || u[C]) && (f[C] = g);
    for(; c < n; ++c)l[c] = r[c];
    return new ht(l, this._parents);
}
m$1(On, "default");
function In() {
    for(var t = this._groups, e = -1, r = t.length; ++e < r;)for(var o = t[e], n = o.length - 1, a = o[n], s; --n >= 0;)(s = o[n]) && (a && s.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(s, a), a = s);
    return this;
}
m$1(In, "default");
function zn(t) {
    t || (t = Dd);
    function e(p, f) {
        return p && f ? t(p.__data__, f.__data__) : !p - !f;
    }
    m$1(e, "compareNode");
    for(var r = this._groups, o = r.length, n = new Array(o), a = 0; a < o; ++a){
        for(var s = r[a], l = s.length, c = n[a] = new Array(l), h, u = 0; u < l; ++u)(h = s[u]) && (c[u] = h);
        c.sort(e);
    }
    return new ht(n, this._parents).order();
}
m$1(zn, "default");
function Dd(t, e) {
    return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
m$1(Dd, "ascending");
function Rn() {
    var t = arguments[0];
    return arguments[0] = this, t.apply(null, arguments), this;
}
m$1(Rn, "default");
function Nn() {
    return Array.from(this);
}
m$1(Nn, "default");
function qn() {
    for(var t = this._groups, e = 0, r = t.length; e < r; ++e)for(var o = t[e], n = 0, a = o.length; n < a; ++n){
        var s = o[n];
        if (s) return s;
    }
    return null;
}
m$1(qn, "default");
function Pn() {
    let t = 0;
    for (let e of this)++t;
    return t;
}
m$1(Pn, "default");
function Wn() {
    return !this.node();
}
m$1(Wn, "default");
function $n(t) {
    for(var e = this._groups, r = 0, o = e.length; r < o; ++r)for(var n = e[r], a = 0, s = n.length, l; a < s; ++a)(l = n[a]) && t.call(l, l.__data__, a, n);
    return this;
}
m$1($n, "default");
var Yi = "http://www.w3.org/1999/xhtml", Hn = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: Yi,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
};
function Qt(t) {
    var e = t += "", r = /*#__PURE__*/ e.indexOf(":");
    return r >= 0 && (e = /*#__PURE__*/ t.slice(0, r)) !== "xmlns" && (t = /*#__PURE__*/ t.slice(r + 1)), Hn.hasOwnProperty(e) ? {
        space: Hn[e],
        local: t
    } : t;
}
m$1(Qt, "default");
function Od(t) {
    return function() {
        this.removeAttribute(t);
    };
}
m$1(Od, "attrRemove");
function Id(t) {
    return function() {
        this.removeAttributeNS(t.space, t.local);
    };
}
m$1(Id, "attrRemoveNS");
function zd(t, e) {
    return function() {
        this.setAttribute(t, e);
    };
}
m$1(zd, "attrConstant");
function Rd(t, e) {
    return function() {
        this.setAttributeNS(t.space, t.local, e);
    };
}
m$1(Rd, "attrConstantNS");
function Nd(t, e) {
    return function() {
        var r = /*#__PURE__*/ e.apply(this, arguments);
        r == null ? this.removeAttribute(t) : this.setAttribute(t, r);
    };
}
m$1(Nd, "attrFunction");
function qd(t, e) {
    return function() {
        var r = /*#__PURE__*/ e.apply(this, arguments);
        r == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, r);
    };
}
m$1(qd, "attrFunctionNS");
function Un(t, e) {
    var r = /*#__PURE__*/ Qt(t);
    if (arguments.length < 2) {
        var o = /*#__PURE__*/ this.node();
        return r.local ? o.getAttributeNS(r.space, r.local) : o.getAttribute(r);
    }
    return this.each(/*#__PURE__*/ (e == null ? r.local ? Id : Od : typeof e == "function" ? r.local ? qd : Nd : r.local ? Rd : zd)(r, e));
}
m$1(Un, "default");
function Ur(t) {
    return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
m$1(Ur, "default");
function Pd(t) {
    return function() {
        this.style.removeProperty(t);
    };
}
m$1(Pd, "styleRemove");
function Wd(t, e, r) {
    return function() {
        this.style.setProperty(t, e, r);
    };
}
m$1(Wd, "styleConstant");
function $d(t, e, r) {
    return function() {
        var o = /*#__PURE__*/ e.apply(this, arguments);
        o == null ? this.style.removeProperty(t) : this.style.setProperty(t, o, r);
    };
}
m$1($d, "styleFunction");
function Yn(t, e, r) {
    return arguments.length > 1 ? this.each(/*#__PURE__*/ (e == null ? Pd : typeof e == "function" ? $d : Wd)(t, e, r ?? "")) : _e(/*#__PURE__*/ this.node(), t);
}
m$1(Yn, "default");
function _e(t, e) {
    return t.style.getPropertyValue(e) || Ur(t).getComputedStyle(t, null).getPropertyValue(e);
}
m$1(_e, "styleValue");
function Hd(t) {
    return function() {
        delete this[t];
    };
}
m$1(Hd, "propertyRemove");
function Ud(t, e) {
    return function() {
        this[t] = e;
    };
}
m$1(Ud, "propertyConstant");
function Yd(t, e) {
    return function() {
        var r = /*#__PURE__*/ e.apply(this, arguments);
        r == null ? delete this[t] : this[t] = r;
    };
}
m$1(Yd, "propertyFunction");
function Gn(t, e) {
    return arguments.length > 1 ? this.each(/*#__PURE__*/ (e == null ? Hd : typeof e == "function" ? Yd : Ud)(t, e)) : this.node()[t];
}
m$1(Gn, "default");
function xh(t) {
    return t.trim().split(/^|\s+/);
}
m$1(xh, "classArray");
function Vn(t) {
    return t.classList || new yh(t);
}
m$1(Vn, "classList");
function yh(t) {
    this._node = t, this._names = /*#__PURE__*/ xh(t.getAttribute("class") || "");
}
m$1(yh, "ClassList");
yh.prototype = {
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
function Ch(t, e) {
    for(var r = /*#__PURE__*/ Vn(t), o = -1, n = e.length; ++o < n;)r.add(e[o]);
}
m$1(Ch, "classedAdd");
function _h(t, e) {
    for(var r = /*#__PURE__*/ Vn(t), o = -1, n = e.length; ++o < n;)r.remove(e[o]);
}
m$1(_h, "classedRemove");
function Gd(t) {
    return function() {
        Ch(this, t);
    };
}
m$1(Gd, "classedTrue");
function Vd(t) {
    return function() {
        _h(this, t);
    };
}
m$1(Vd, "classedFalse");
function Xd(t, e) {
    return function() {
        (e.apply(this, arguments) ? Ch : _h)(this, t);
    };
}
m$1(Xd, "classedFunction");
function Xn(t, e) {
    var r = /*#__PURE__*/ xh(t + "");
    if (arguments.length < 2) {
        for(var o = /*#__PURE__*/ Vn(/*#__PURE__*/ this.node()), n = -1, a = r.length; ++n < a;)if (!o.contains(r[n])) return false;
        return true;
    }
    return this.each(/*#__PURE__*/ (typeof e == "function" ? Xd : e ? Gd : Vd)(r, e));
}
m$1(Xn, "default");
function jd() {
    this.textContent = "";
}
m$1(jd, "textRemove");
function Zd(t) {
    return function() {
        this.textContent = t;
    };
}
m$1(Zd, "textConstant");
function Kd(t) {
    return function() {
        var e = /*#__PURE__*/ t.apply(this, arguments);
        this.textContent = e ?? "";
    };
}
m$1(Kd, "textFunction");
function jn(t) {
    return arguments.length ? this.each(t == null ? jd : (typeof t == "function" ? Kd : Zd)(t)) : this.node().textContent;
}
m$1(jn, "default");
function Qd() {
    this.innerHTML = "";
}
m$1(Qd, "htmlRemove");
function Jd(t) {
    return function() {
        this.innerHTML = t;
    };
}
m$1(Jd, "htmlConstant");
function tp(t) {
    return function() {
        var e = /*#__PURE__*/ t.apply(this, arguments);
        this.innerHTML = e ?? "";
    };
}
m$1(tp, "htmlFunction");
function Zn(t) {
    return arguments.length ? this.each(t == null ? Qd : (typeof t == "function" ? tp : Jd)(t)) : this.node().innerHTML;
}
m$1(Zn, "default");
function ep() {
    this.nextSibling && this.parentNode.appendChild(this);
}
m$1(ep, "raise");
function Kn() {
    return this.each(ep);
}
m$1(Kn, "default");
function rp() {
    this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
m$1(rp, "lower");
function Qn() {
    return this.each(rp);
}
m$1(Qn, "default");
function ip(t) {
    return function() {
        var e = this.ownerDocument, r = this.namespaceURI;
        return r === Yi && e.documentElement.namespaceURI === Yi ? e.createElement(t) : e.createElementNS(r, t);
    };
}
m$1(ip, "creatorInherit");
function op(t) {
    return function() {
        return this.ownerDocument.createElementNS(t.space, t.local);
    };
}
m$1(op, "creatorFixed");
function Yr(t) {
    var e = /*#__PURE__*/ Qt(t);
    return (e.local ? op : ip)(e);
}
m$1(Yr, "default");
function Jn(t) {
    var e = typeof t == "function" ? t : Yr(t);
    return this.select(function() {
        return this.appendChild(/*#__PURE__*/ e.apply(this, arguments));
    });
}
m$1(Jn, "default");
function np() {
    return null;
}
m$1(np, "constantNull");
function ta(t, e) {
    var r = typeof t == "function" ? t : Yr(t), o = e == null ? np : typeof e == "function" ? e : Ce(e);
    return this.select(function() {
        return this.insertBefore(/*#__PURE__*/ r.apply(this, arguments), o.apply(this, arguments) || null);
    });
}
m$1(ta, "default");
function ap() {
    var t = this.parentNode;
    t && t.removeChild(this);
}
m$1(ap, "remove");
function ea() {
    return this.each(ap);
}
m$1(ea, "default");
function sp() {
    var t = /*#__PURE__*/ this.cloneNode(false), e = this.parentNode;
    return e ? e.insertBefore(t, this.nextSibling) : t;
}
m$1(sp, "selection_cloneShallow");
function lp() {
    var t = /*#__PURE__*/ this.cloneNode(true), e = this.parentNode;
    return e ? e.insertBefore(t, this.nextSibling) : t;
}
m$1(lp, "selection_cloneDeep");
function ra(t) {
    return this.select(t ? lp : sp);
}
m$1(ra, "default");
function ia(t) {
    return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
m$1(ia, "default");
function hp(t) {
    return function(e) {
        t.call(this, e, this.__data__);
    };
}
m$1(hp, "contextListener");
function cp(t) {
    return t.trim().split(/^|\s+/).map(function(e) {
        var r = "", o = /*#__PURE__*/ e.indexOf(".");
        return o >= 0 && (r = /*#__PURE__*/ e.slice(o + 1), e = /*#__PURE__*/ e.slice(0, o)), {
            type: e,
            name: r
        };
    });
}
m$1(cp, "parseTypenames");
function up(t) {
    return function() {
        var e = this.__on;
        if (e) {
            for(var r = 0, o = -1, n = e.length, a; r < n; ++r)a = e[r], (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.options) : e[++o] = a;
            ++o ? e.length = o : delete this.__on;
        }
    };
}
m$1(up, "onRemove");
function fp(t, e, r) {
    return function() {
        var o = this.__on, n, a = /*#__PURE__*/ hp(e);
        if (o) {
            for(var s = 0, l = o.length; s < l; ++s)if ((n = o[s]).type === t.type && n.name === t.name) {
                this.removeEventListener(n.type, n.listener, n.options), this.addEventListener(n.type, n.listener = a, n.options = r), n.value = e;
                return;
            }
        }
        this.addEventListener(t.type, a, r), n = {
            type: t.type,
            name: t.name,
            value: e,
            listener: a,
            options: r
        }, o ? o.push(n) : this.__on = [
            n
        ];
    };
}
m$1(fp, "onAdd");
function oa(t, e, r) {
    var o = /*#__PURE__*/ cp(t + ""), n, a = o.length, s;
    if (arguments.length < 2) {
        var l = this.node().__on;
        if (l) {
            for(var c = 0, h = l.length, u; c < h; ++c)for(n = 0, u = l[c]; n < a; ++n)if ((s = o[n]).type === u.type && s.name === u.name) return u.value;
        }
        return;
    }
    for(l = e ? fp : up, n = 0; n < a; ++n)this.each(/*#__PURE__*/ l(o[n], e, r));
    return this;
}
m$1(oa, "default");
function bh(t, e, r) {
    var o = /*#__PURE__*/ Ur(t), n = o.CustomEvent;
    typeof n == "function" ? n = new n(e, r) : (n = /*#__PURE__*/ o.document.createEvent("Event"), r ? (n.initEvent(e, r.bubbles, r.cancelable), n.detail = r.detail) : n.initEvent(e, false, false)), t.dispatchEvent(n);
}
m$1(bh, "dispatchEvent");
function dp(t, e) {
    return function() {
        return bh(this, t, e);
    };
}
m$1(dp, "dispatchConstant");
function pp(t, e) {
    return function() {
        return bh(this, t, /*#__PURE__*/ e.apply(this, arguments));
    };
}
m$1(pp, "dispatchFunction");
function na(t, e) {
    return this.each(/*#__PURE__*/ (typeof e == "function" ? pp : dp)(t, e));
}
m$1(na, "default");
function* aa() {
    for(var t = this._groups, e = 0, r = t.length; e < r; ++e)for(var o = t[e], n = 0, a = o.length, s; n < a; ++n)(s = o[n]) && (yield s);
}
m$1(aa, "default");
var sa = [
    null
];
function ht(t, e) {
    this._groups = t, this._parents = e;
}
m$1(ht, "Selection");
function Th() {
    return new ht([
        [
            document.documentElement
        ]
    ], sa);
}
m$1(Th, "selection");
function mp() {
    return this;
}
m$1(mp, "selection_selection");
ht.prototype = Th.prototype = {
    constructor: ht,
    select: kn,
    selectAll: vn,
    selectChild: wn,
    selectChildren: Bn,
    filter: Fn,
    data: An,
    enter: Ln,
    exit: En,
    join: Dn,
    merge: On,
    selection: mp,
    order: In,
    sort: zn,
    call: Rn,
    nodes: Nn,
    node: qn,
    size: Pn,
    empty: Wn,
    each: $n,
    attr: Un,
    style: Yn,
    property: Gn,
    classed: Xn,
    text: jn,
    html: Zn,
    raise: Kn,
    lower: Qn,
    append: Jn,
    insert: ta,
    remove: ea,
    clone: ra,
    datum: ia,
    on: oa,
    dispatch: na,
    [Symbol.iterator]: aa
};
var le = Th;
function kh(t) {
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
    ], sa);
}
m$1(kh, "default");
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
var Gr = .7, Xi = 1 / Gr, lr = "\\s*([+-]?\\d+)\\s*", Vr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Jt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", gp = /^#([0-9a-f]{3,8})$/, xp = new RegExp(`^rgb\\(${lr},${lr},${lr}\\)$`), yp = new RegExp(`^rgb\\(${Jt},${Jt},${Jt}\\)$`), Cp = new RegExp(`^rgba\\(${lr},${lr},${lr},${Vr}\\)$`), _p = new RegExp(`^rgba\\(${Jt},${Jt},${Jt},${Vr}\\)$`), bp = new RegExp(`^hsl\\(${Vr},${Jt},${Jt}\\)$`), Tp = new RegExp(`^hsla\\(${Vr},${Jt},${Jt},${Vr}\\)$`), Sh = {
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
be(Te, Gt, {
    copy (t) {
        return Object.assign(new this.constructor, this, t);
    },
    displayable () {
        return this.rgb().displayable();
    },
    hex: vh,
    formatHex: vh,
    formatHex8: kp,
    formatHsl: Sp,
    formatRgb: wh,
    toString: wh
});
function vh() {
    return this.rgb().formatHex();
}
m$1(vh, "color_formatHex");
function kp() {
    return this.rgb().formatHex8();
}
m$1(kp, "color_formatHex8");
function Sp() {
    return Eh(this).formatHsl();
}
m$1(Sp, "color_formatHsl");
function wh() {
    return this.rgb().formatRgb();
}
m$1(wh, "color_formatRgb");
function Gt(t) {
    var e, r;
    return t = /*#__PURE__*/ (t + "").trim().toLowerCase(), (e = /*#__PURE__*/ gp.exec(t)) ? (r = e[1].length, e = /*#__PURE__*/ parseInt(e[1], 16), r === 6 ? Bh(e) : r === 3 ? new St(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : r === 8 ? Gi(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : r === 4 ? Gi(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = /*#__PURE__*/ xp.exec(t)) ? new St(e[1], e[2], e[3], 1) : (e = /*#__PURE__*/ yp.exec(t)) ? new St(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = /*#__PURE__*/ Cp.exec(t)) ? Gi(e[1], e[2], e[3], e[4]) : (e = /*#__PURE__*/ _p.exec(t)) ? Gi(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = /*#__PURE__*/ bp.exec(t)) ? Mh(e[1], e[2] / 100, e[3] / 100, 1) : (e = /*#__PURE__*/ Tp.exec(t)) ? Mh(e[1], e[2] / 100, e[3] / 100, e[4]) : Sh.hasOwnProperty(t) ? Bh(Sh[t]) : t === "transparent" ? new St(NaN, NaN, NaN, 0) : null;
}
m$1(Gt, "color");
function Bh(t) {
    return new St(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
m$1(Bh, "rgbn");
function Gi(t, e, r, o) {
    return o <= 0 && (t = e = r = NaN), new St(t, e, r, o);
}
m$1(Gi, "rgba");
function ha(t) {
    return t instanceof Te || (t = /*#__PURE__*/ Gt(t)), t ? (t = /*#__PURE__*/ t.rgb(), new St(t.r, t.g, t.b, t.opacity)) : new St;
}
m$1(ha, "rgbConvert");
function hr(t, e, r, o) {
    return arguments.length === 1 ? ha(t) : new St(t, e, r, o ?? 1);
}
m$1(hr, "rgb");
function St(t, e, r, o) {
    this.r = +t, this.g = +e, this.b = +r, this.opacity = +o;
}
m$1(St, "Rgb");
be(St, hr, /*#__PURE__*/ sr(Te, {
    brighter (t) {
        return t = t == null ? Xi : Math.pow(Xi, t), new St(this.r * t, this.g * t, this.b * t, this.opacity);
    },
    darker (t) {
        return t = t == null ? Gr : Math.pow(Gr, t), new St(this.r * t, this.g * t, this.b * t, this.opacity);
    },
    rgb () {
        return this;
    },
    clamp () {
        return new St(Re(this.r), Re(this.g), Re(this.b), ji(this.opacity));
    },
    displayable () {
        return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
    },
    hex: Fh,
    formatHex: Fh,
    formatHex8: vp,
    formatRgb: Lh,
    toString: Lh
}));
function Fh() {
    return `#${ze(this.r)}${ze(this.g)}${ze(this.b)}`;
}
m$1(Fh, "rgb_formatHex");
function vp() {
    return `#${ze(this.r)}${ze(this.g)}${ze(this.b)}${ze((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
m$1(vp, "rgb_formatHex8");
function Lh() {
    let t = /*#__PURE__*/ ji(this.opacity);
    return `${t === 1 ? "rgb(" : "rgba("}${Re(this.r)}, ${Re(this.g)}, ${Re(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
m$1(Lh, "rgb_formatRgb");
function ji(t) {
    return isNaN(t) ? 1 : Math.max(0, /*#__PURE__*/ Math.min(1, t));
}
m$1(ji, "clampa");
function Re(t) {
    return Math.max(0, /*#__PURE__*/ Math.min(255, Math.round(t) || 0));
}
m$1(Re, "clampi");
function ze(t) {
    return t = /*#__PURE__*/ Re(t), (t < 16 ? "0" : "") + t.toString(16);
}
m$1(ze, "hex");
function Mh(t, e, r, o) {
    return o <= 0 ? t = e = r = NaN : r <= 0 || r >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new Yt(t, e, r, o);
}
m$1(Mh, "hsla");
function Eh(t) {
    if (t instanceof Yt) return new Yt(t.h, t.s, t.l, t.opacity);
    if (t instanceof Te || (t = /*#__PURE__*/ Gt(t)), !t) return new Yt;
    if (t instanceof Yt) return t;
    t = /*#__PURE__*/ t.rgb();
    var e = t.r / 255, r = t.g / 255, o = t.b / 255, n = /*#__PURE__*/ Math.min(e, r, o), a = /*#__PURE__*/ Math.max(e, r, o), s = NaN, l = a - n, c = (a + n) / 2;
    return l ? (e === a ? s = (r - o) / l + (r < o) * 6 : r === a ? s = (o - e) / l + 2 : s = (e - r) / l + 4, l /= c < .5 ? a + n : 2 - a - n, s *= 60) : l = c > 0 && c < 1 ? 0 : s, new Yt(s, l, c, t.opacity);
}
m$1(Eh, "hslConvert");
function Dh(t, e, r, o) {
    return arguments.length === 1 ? Eh(t) : new Yt(t, e, r, o ?? 1);
}
m$1(Dh, "hsl");
function Yt(t, e, r, o) {
    this.h = +t, this.s = +e, this.l = +r, this.opacity = +o;
}
m$1(Yt, "Hsl");
be(Yt, Dh, /*#__PURE__*/ sr(Te, {
    brighter (t) {
        return t = t == null ? Xi : Math.pow(Xi, t), new Yt(this.h, this.s, this.l * t, this.opacity);
    },
    darker (t) {
        return t = t == null ? Gr : Math.pow(Gr, t), new Yt(this.h, this.s, this.l * t, this.opacity);
    },
    rgb () {
        var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, r = this.l, o = r + (r < .5 ? r : 1 - r) * e, n = 2 * r - o;
        return new St(la(t >= 240 ? t - 240 : t + 120, n, o), la(t, n, o), la(t < 120 ? t + 240 : t - 120, n, o), this.opacity);
    },
    clamp () {
        return new Yt(Ah(this.h), Vi(this.s), Vi(this.l), ji(this.opacity));
    },
    displayable () {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    },
    formatHsl () {
        let t = /*#__PURE__*/ ji(this.opacity);
        return `${t === 1 ? "hsl(" : "hsla("}${Ah(this.h)}, ${Vi(this.s) * 100}%, ${Vi(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
    }
}));
function Ah(t) {
    return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
m$1(Ah, "clamph");
function Vi(t) {
    return Math.max(0, /*#__PURE__*/ Math.min(1, t || 0));
}
m$1(Vi, "clampt");
function la(t, e, r) {
    return (t < 60 ? e + (r - e) * t / 60 : t < 180 ? r : t < 240 ? e + (r - e) * (240 - t) / 60 : e) * 255;
}
m$1(la, "hsl2rgb");
var Oh = Math.PI / 180, Ih = 180 / Math.PI;
var Zi = 18, zh = .96422, Rh = 1, Nh = .82521, qh = 4 / 29, cr = 6 / 29, Ph = 3 * cr * cr, wp = cr * cr * cr;
function Wh(t) {
    if (t instanceof te) return new te(t.l, t.a, t.b, t.opacity);
    if (t instanceof he) return $h(t);
    t instanceof St || (t = /*#__PURE__*/ ha(t));
    var e = /*#__PURE__*/ da(t.r), r = /*#__PURE__*/ da(t.g), o = /*#__PURE__*/ da(t.b), n = /*#__PURE__*/ ca((.2225045 * e + .7168786 * r + .0606169 * o) / Rh), a, s;
    return e === r && r === o ? a = s = n : (a = /*#__PURE__*/ ca((.4360747 * e + .3850649 * r + .1430804 * o) / zh), s = /*#__PURE__*/ ca((.0139322 * e + .0971045 * r + .7141733 * o) / Nh)), new te(116 * n - 16, 500 * (a - n), 200 * (n - s), t.opacity);
}
m$1(Wh, "labConvert");
function pa(t, e, r, o) {
    return arguments.length === 1 ? Wh(t) : new te(t, e, r, o ?? 1);
}
m$1(pa, "lab");
function te(t, e, r, o) {
    this.l = +t, this.a = +e, this.b = +r, this.opacity = +o;
}
m$1(te, "Lab");
be(te, pa, /*#__PURE__*/ sr(Te, {
    brighter (t) {
        return new te(this.l + Zi * (t ?? 1), this.a, this.b, this.opacity);
    },
    darker (t) {
        return new te(this.l - Zi * (t ?? 1), this.a, this.b, this.opacity);
    },
    rgb () {
        var t = (this.l + 16) / 116, e = isNaN(this.a) ? t : t + this.a / 500, r = isNaN(this.b) ? t : t - this.b / 200;
        return e = zh * ua(e), t = Rh * ua(t), r = Nh * ua(r), new St(fa(3.1338561 * e - 1.6168667 * t - .4906146 * r), fa(-0.9787684 * e + 1.9161415 * t + .033454 * r), fa(.0719453 * e - .2289914 * t + 1.4052427 * r), this.opacity);
    }
}));
function ca(t) {
    return t > wp ? Math.pow(t, 1 / 3) : t / Ph + qh;
}
m$1(ca, "xyz2lab");
function ua(t) {
    return t > cr ? t * t * t : Ph * (t - qh);
}
m$1(ua, "lab2xyz");
function fa(t) {
    return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055);
}
m$1(fa, "lrgb2rgb");
function da(t) {
    return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
}
m$1(da, "rgb2lrgb");
function Bp(t) {
    if (t instanceof he) return new he(t.h, t.c, t.l, t.opacity);
    if (t instanceof te || (t = /*#__PURE__*/ Wh(t)), t.a === 0 && t.b === 0) return new he(NaN, 0 < t.l && t.l < 100 ? 0 : NaN, t.l, t.opacity);
    var e = Math.atan2(t.b, t.a) * Ih;
    return new he(e < 0 ? e + 360 : e, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
}
m$1(Bp, "hclConvert");
function Xr(t, e, r, o) {
    return arguments.length === 1 ? Bp(t) : new he(t, e, r, o ?? 1);
}
m$1(Xr, "hcl");
function he(t, e, r, o) {
    this.h = +t, this.c = +e, this.l = +r, this.opacity = +o;
}
m$1(he, "Hcl");
function $h(t) {
    if (isNaN(t.h)) return new te(t.l, 0, 0, t.opacity);
    var e = t.h * Oh;
    return new te(t.l, Math.cos(e) * t.c, Math.sin(e) * t.c, t.opacity);
}
m$1($h, "hcl2lab");
be(he, Xr, /*#__PURE__*/ sr(Te, {
    brighter (t) {
        return new he(this.h, this.c, this.l + Zi * (t ?? 1), this.opacity);
    },
    darker (t) {
        return new he(this.h, this.c, this.l - Zi * (t ?? 1), this.opacity);
    },
    rgb () {
        return $h(this).rgb();
    }
}));
var ur = /*#__PURE__*/ m$1((t)=>()=>t, "default");
function Hh(t, e) {
    return function(r) {
        return t + r * e;
    };
}
m$1(Hh, "linear");
function Fp(t, e, r) {
    return t = /*#__PURE__*/ Math.pow(t, r), e = Math.pow(e, r) - t, r = 1 / r, function(o) {
        return Math.pow(t + o * e, r);
    };
}
m$1(Fp, "exponential");
function Uh(t, e) {
    var r = e - t;
    return r ? Hh(t, r > 180 || r < -180 ? r - 360 * Math.round(r / 360) : r) : ur(isNaN(t) ? e : t);
}
m$1(Uh, "hue");
function Yh(t) {
    return (t = +t) == 1 ? ce : function(e, r) {
        return r - e ? Fp(e, r, t) : ur(isNaN(e) ? r : e);
    };
}
m$1(Yh, "gamma");
function ce(t, e) {
    var r = e - t;
    return r ? Hh(t, r) : ur(isNaN(t) ? e : t);
}
m$1(ce, "nogamma");
function Gh(t) {
    return function(e, r) {
        var o = /*#__PURE__*/ t((e = /*#__PURE__*/ Xr(e)).h, (r = /*#__PURE__*/ Xr(r)).h), n = /*#__PURE__*/ ce(e.c, r.c), a = /*#__PURE__*/ ce(e.l, r.l), s = /*#__PURE__*/ ce(e.opacity, r.opacity);
        return function(l) {
            return e.h = /*#__PURE__*/ o(l), e.c = /*#__PURE__*/ n(l), e.l = /*#__PURE__*/ a(l), e.opacity = /*#__PURE__*/ s(l), e + "";
        };
    };
}
m$1(Gh, "hcl");
var Lp = /*#__PURE__*/ Gh(Uh);
function ma(t, e, r, o, n) {
    var a = t * t, s = a * t;
    return ((1 - 3 * t + 3 * a - s) * e + (4 - 6 * a + 3 * s) * r + (1 + 3 * t + 3 * a - 3 * s) * o + s * n) / 6;
}
m$1(ma, "basis");
function ga(t) {
    var e = t.length - 1;
    return function(r) {
        var o = r <= 0 ? r = 0 : r >= 1 ? (r = 1, e - 1) : Math.floor(r * e), n = t[o], a = t[o + 1], s = o > 0 ? t[o - 1] : 2 * n - a, l = o < e - 1 ? t[o + 2] : 2 * a - n;
        return ma((r - o / e) * e, s, n, a, l);
    };
}
m$1(ga, "default");
function xa(t) {
    var e = t.length;
    return function(r) {
        var o = /*#__PURE__*/ Math.floor(((r %= 1) < 0 ? ++r : r) * e), n = t[(o + e - 1) % e], a = t[o % e], s = t[(o + 1) % e], l = t[(o + 2) % e];
        return ma((r - o / e) * e, n, a, s, l);
    };
}
m$1(xa, "default");
var Ne = /*#__PURE__*/ m$1(function t(e) {
    var r = /*#__PURE__*/ Yh(e);
    function o(n, a) {
        var s = /*#__PURE__*/ r((n = /*#__PURE__*/ hr(n)).r, (a = /*#__PURE__*/ hr(a)).r), l = /*#__PURE__*/ r(n.g, a.g), c = /*#__PURE__*/ r(n.b, a.b), h = /*#__PURE__*/ ce(n.opacity, a.opacity);
        return function(u) {
            return n.r = /*#__PURE__*/ s(u), n.g = /*#__PURE__*/ l(u), n.b = /*#__PURE__*/ c(u), n.opacity = /*#__PURE__*/ h(u), n + "";
        };
    }
    return m$1(o, "rgb"), o.gamma = t, o;
}, "rgbGamma")(1);
function Vh(t) {
    return function(e) {
        var r = e.length, o = new Array(r), n = new Array(r), a = new Array(r), s, l;
        for(s = 0; s < r; ++s)l = /*#__PURE__*/ hr(e[s]), o[s] = l.r || 0, n[s] = l.g || 0, a[s] = l.b || 0;
        return o = /*#__PURE__*/ t(o), n = /*#__PURE__*/ t(n), a = /*#__PURE__*/ t(a), l.opacity = 1, function(c) {
            return l.r = /*#__PURE__*/ o(c), l.g = /*#__PURE__*/ n(c), l.b = /*#__PURE__*/ a(c), l + "";
        };
    };
}
m$1(Vh, "rgbSpline");
function ya(t, e) {
    e || (e = []);
    var r = t ? Math.min(e.length, t.length) : 0, o = /*#__PURE__*/ e.slice(), n;
    return function(a) {
        for(n = 0; n < r; ++n)o[n] = t[n] * (1 - a) + e[n] * a;
        return o;
    };
}
m$1(ya, "default");
function Xh(t) {
    return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
m$1(Xh, "isNumberArray");
function jh(t, e) {
    var r = e ? e.length : 0, o = t ? Math.min(r, t.length) : 0, n = new Array(o), a = new Array(r), s;
    for(s = 0; s < o; ++s)n[s] = /*#__PURE__*/ ke(t[s], e[s]);
    for(; s < r; ++s)a[s] = e[s];
    return function(l) {
        for(s = 0; s < o; ++s)a[s] = /*#__PURE__*/ n[s](l);
        return a;
    };
}
m$1(jh, "genericArray");
function Ca(t, e) {
    var r = new Date;
    return t = +t, e = +e, function(o) {
        return r.setTime(t * (1 - o) + e * o), r;
    };
}
m$1(Ca, "default");
function gt(t, e) {
    return t = +t, e = +e, function(r) {
        return t * (1 - r) + e * r;
    };
}
m$1(gt, "default");
function _a(t, e) {
    var r = {}, o = {}, n;
    (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
    for(n in e)n in t ? r[n] = /*#__PURE__*/ ke(t[n], e[n]) : o[n] = e[n];
    return function(a) {
        for(n in r)o[n] = /*#__PURE__*/ r[n](a);
        return o;
    };
}
m$1(_a, "default");
var Ta = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ba = new RegExp(Ta.source, "g");
function Dp(t) {
    return function() {
        return t;
    };
}
m$1(Dp, "zero");
function Op(t) {
    return function(e) {
        return t(e) + "";
    };
}
m$1(Op, "one");
function fr(t, e) {
    var r = Ta.lastIndex = ba.lastIndex = 0, o, n, a, s = -1, l = [], c = [];
    for(t = t + "", e = e + ""; (o = /*#__PURE__*/ Ta.exec(t)) && (n = /*#__PURE__*/ ba.exec(e));)(a = n.index) > r && (a = /*#__PURE__*/ e.slice(r, a), l[s] ? l[s] += a : l[++s] = a), (o = o[0]) === (n = n[0]) ? l[s] ? l[s] += n : l[++s] = n : (l[++s] = null, c.push({
        i: s,
        x: /*#__PURE__*/ gt(o, n)
    })), r = ba.lastIndex;
    return r < e.length && (a = /*#__PURE__*/ e.slice(r), l[s] ? l[s] += a : l[++s] = a), l.length < 2 ? c[0] ? Op(c[0].x) : Dp(e) : (e = c.length, function(h) {
        for(var u = 0, p; u < e; ++u)l[(p = c[u]).i] = /*#__PURE__*/ p.x(h);
        return l.join("");
    });
}
m$1(fr, "default");
function ke(t, e) {
    var r = typeof e, o;
    return e == null || r === "boolean" ? ur(e) : (r === "number" ? gt : r === "string" ? (o = /*#__PURE__*/ Gt(e)) ? (e = o, Ne) : fr : e instanceof Gt ? Ne : e instanceof Date ? Ca : Xh(e) ? ya : Array.isArray(e) ? jh : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? _a : gt)(t, e);
}
m$1(ke, "default");
function Ki(t, e) {
    return t = +t, e = +e, function(r) {
        return Math.round(t * (1 - r) + e * r);
    };
}
m$1(Ki, "default");
var Zh = 180 / Math.PI, Qi = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
};
function Ji(t, e, r, o, n, a) {
    var s, l, c;
    return (s = /*#__PURE__*/ Math.sqrt(t * t + e * e)) && (t /= s, e /= s), (c = t * r + e * o) && (r -= t * c, o -= e * c), (l = /*#__PURE__*/ Math.sqrt(r * r + o * o)) && (r /= l, o /= l, c /= l), t * o < e * r && (t = -t, e = -e, c = -c, s = -s), {
        translateX: n,
        translateY: a,
        rotate: Math.atan2(e, t) * Zh,
        skewX: Math.atan(c) * Zh,
        scaleX: s,
        scaleY: l
    };
}
m$1(Ji, "default");
var to;
function Kh(t) {
    let e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
    return e.isIdentity ? Qi : Ji(e.a, e.b, e.c, e.d, e.e, e.f);
}
m$1(Kh, "parseCss");
function Qh(t) {
    return t == null ? Qi : (to || (to = /*#__PURE__*/ document.createElementNS("http://www.w3.org/2000/svg", "g")), to.setAttribute("transform", t), (t = /*#__PURE__*/ to.transform.baseVal.consolidate()) ? (t = t.matrix, Ji(t.a, t.b, t.c, t.d, t.e, t.f)) : Qi);
}
m$1(Qh, "parseSvg");
function Jh(t, e, r, o) {
    function n(h) {
        return h.length ? h.pop() + " " : "";
    }
    m$1(n, "pop");
    function a(h, u, p, f, g, C) {
        if (h !== p || u !== f) {
            var k = /*#__PURE__*/ g.push("translate(", null, e, null, r);
            C.push({
                i: k - 4,
                x: /*#__PURE__*/ gt(h, p)
            }, {
                i: k - 2,
                x: /*#__PURE__*/ gt(u, f)
            });
        } else (p || f) && g.push("translate(" + p + e + f + r);
    }
    m$1(a, "translate");
    function s(h, u, p, f) {
        h !== u ? (h - u > 180 ? u += 360 : u - h > 180 && (h += 360), f.push({
            i: p.push(n(p) + "rotate(", null, o) - 2,
            x: /*#__PURE__*/ gt(h, u)
        })) : u && p.push(n(p) + "rotate(" + u + o);
    }
    m$1(s, "rotate");
    function l(h, u, p, f) {
        h !== u ? f.push({
            i: p.push(n(p) + "skewX(", null, o) - 2,
            x: /*#__PURE__*/ gt(h, u)
        }) : u && p.push(n(p) + "skewX(" + u + o);
    }
    m$1(l, "skewX");
    function c(h, u, p, f, g, C) {
        if (h !== p || u !== f) {
            var k = /*#__PURE__*/ g.push(n(g) + "scale(", null, ",", null, ")");
            C.push({
                i: k - 4,
                x: /*#__PURE__*/ gt(h, p)
            }, {
                i: k - 2,
                x: /*#__PURE__*/ gt(u, f)
            });
        } else (p !== 1 || f !== 1) && g.push(n(g) + "scale(" + p + "," + f + ")");
    }
    return m$1(c, "scale"), function(h, u) {
        var p = [], f = [];
        return h = /*#__PURE__*/ t(h), u = /*#__PURE__*/ t(u), a(h.translateX, h.translateY, u.translateX, u.translateY, p, f), s(h.rotate, u.rotate, p, f), l(h.skewX, u.skewX, p, f), c(h.scaleX, h.scaleY, u.scaleX, u.scaleY, p, f), h = u = null, function(g) {
            for(var C = -1, k = f.length, L; ++C < k;)p[(L = f[C]).i] = /*#__PURE__*/ L.x(g);
            return p.join("");
        };
    };
}
m$1(Jh, "interpolateTransform");
var ka = /*#__PURE__*/ Jh(Kh, "px, ", "px)", "deg)"), Sa = /*#__PURE__*/ Jh(Qh, ", ", ")", ")");
function va(t) {
    return Math.abs(t = /*#__PURE__*/ Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
m$1(va, "default");
function qe(t, e) {
    if ((r = /*#__PURE__*/ (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;
    var r, o = /*#__PURE__*/ t.slice(0, r);
    return [
        o.length > 1 ? o[0] + o.slice(2) : o,
        +t.slice(r + 1)
    ];
}
m$1(qe, "formatDecimalParts");
function Vt(t) {
    return t = /*#__PURE__*/ qe(/*#__PURE__*/ Math.abs(t)), t ? t[1] : NaN;
}
m$1(Vt, "default");
function wa(t, e) {
    return function(r, o) {
        for(var n = r.length, a = [], s = 0, l = t[0], c = 0; n > 0 && l > 0 && (c + l + 1 > o && (l = /*#__PURE__*/ Math.max(1, o - c)), a.push(/*#__PURE__*/ r.substring(n -= l, n + l)), !((c += l + 1) > o));)l = t[s = (s + 1) % t.length];
        return a.reverse().join(e);
    };
}
m$1(wa, "default");
function Ba(t) {
    return function(e) {
        return e.replace(/[0-9]/g, function(r) {
            return t[+r];
        });
    };
}
m$1(Ba, "default");
var Ip = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Se(t) {
    if (!(e = /*#__PURE__*/ Ip.exec(t))) throw new Error("invalid format: " + t);
    var e;
    return new eo({
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
m$1(Se, "formatSpecifier");
Se.prototype = eo.prototype;
function eo(t) {
    this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
m$1(eo, "FormatSpecifier");
eo.prototype.toString = function() {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Fa(t) {
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
m$1(Fa, "default");
var La;
function Ma(t, e) {
    var r = /*#__PURE__*/ qe(t, e);
    if (!r) return t + "";
    var o = r[0], n = r[1], a = n - (La = Math.max(-8, /*#__PURE__*/ Math.min(8, /*#__PURE__*/ Math.floor(n / 3))) * 3) + 1, s = o.length;
    return a === s ? o : a > s ? o + new Array(a - s + 1).join("0") : a > 0 ? o.slice(0, a) + "." + o.slice(a) : "0." + new Array(1 - a).join("0") + qe(t, /*#__PURE__*/ Math.max(0, e + a - 1))[0];
}
m$1(Ma, "default");
function ro(t, e) {
    var r = /*#__PURE__*/ qe(t, e);
    if (!r) return t + "";
    var o = r[0], n = r[1];
    return n < 0 ? "0." + new Array(-n).join("0") + o : o.length > n + 1 ? o.slice(0, n + 1) + "." + o.slice(n + 1) : o + new Array(n - o.length + 2).join("0");
}
m$1(ro, "default");
var Aa = {
    "%": /*#__PURE__*/ m$1((t, e)=>(t * 100).toFixed(e), "%"),
    b: /*#__PURE__*/ m$1((t)=>Math.round(t).toString(2), "b"),
    c: /*#__PURE__*/ m$1((t)=>t + "", "c"),
    d: va,
    e: /*#__PURE__*/ m$1((t, e)=>t.toExponential(e), "e"),
    f: /*#__PURE__*/ m$1((t, e)=>t.toFixed(e), "f"),
    g: /*#__PURE__*/ m$1((t, e)=>t.toPrecision(e), "g"),
    o: /*#__PURE__*/ m$1((t)=>Math.round(t).toString(8), "o"),
    p: /*#__PURE__*/ m$1((t, e)=>ro(t * 100, e), "p"),
    r: ro,
    s: Ma,
    X: /*#__PURE__*/ m$1((t)=>Math.round(t).toString(16).toUpperCase(), "X"),
    x: /*#__PURE__*/ m$1((t)=>Math.round(t).toString(16), "x")
};
function io(t) {
    return t;
}
m$1(io, "default");
var tc = Array.prototype.map, ec = [
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
function Ea(t) {
    var e = t.grouping === void 0 || t.thousands === void 0 ? io : wa(/*#__PURE__*/ tc.call(t.grouping, Number), t.thousands + ""), r = t.currency === void 0 ? "" : t.currency[0] + "", o = t.currency === void 0 ? "" : t.currency[1] + "", n = t.decimal === void 0 ? "." : t.decimal + "", a = t.numerals === void 0 ? io : Ba(/*#__PURE__*/ tc.call(t.numerals, String)), s = t.percent === void 0 ? "%" : t.percent + "", l = t.minus === void 0 ? "\u2212" : t.minus + "", c = t.nan === void 0 ? "NaN" : t.nan + "";
    function h(p) {
        p = /*#__PURE__*/ Se(p);
        var f = p.fill, g = p.align, C = p.sign, k = p.symbol, L = p.zero, A = p.width, $ = p.comma, O = p.precision, F = p.trim, P = p.type;
        P === "n" ? ($ = true, P = "g") : Aa[P] || (O === void 0 && (O = 12), F = true, P = "g"), (L || f === "0" && g === "=") && (L = true, f = "0", g = "=");
        var w = k === "$" ? r : k === "#" && /[boxX]/.test(P) ? "0" + P.toLowerCase() : "", X = k === "$" ? o : /[%p]/.test(P) ? s : "", j = Aa[P], H = /*#__PURE__*/ /[defgprs%]/.test(P);
        O = O === void 0 ? 6 : /[gprs]/.test(P) ? Math.max(1, /*#__PURE__*/ Math.min(21, O)) : Math.max(0, /*#__PURE__*/ Math.min(20, O));
        function it(M) {
            var S = w, x = X, y, D, v;
            if (P === "c") x = j(M) + x, M = "";
            else {
                M = +M;
                var N = M < 0 || 1 / M < 0;
                if (M = isNaN(M) ? c : j(/*#__PURE__*/ Math.abs(M), O), F && (M = /*#__PURE__*/ Fa(M)), N && +M == 0 && C !== "+" && (N = false), S = (N ? C === "(" ? C : l : C === "-" || C === "(" ? "" : C) + S, x = (P === "s" ? ec[8 + La / 3] : "") + x + (N && C === "(" ? ")" : ""), H) {
                    for(y = -1, D = M.length; ++y < D;)if (v = /*#__PURE__*/ M.charCodeAt(y), 48 > v || v > 57) {
                        x = (v === 46 ? n + M.slice(y + 1) : M.slice(y)) + x, M = /*#__PURE__*/ M.slice(0, y);
                        break;
                    }
                }
            }
            $ && !L && (M = /*#__PURE__*/ e(M, 1 / 0));
            var R = S.length + M.length + x.length, Y = R < A ? new Array(A - R + 1).join(f) : "";
            switch($ && L && (M = /*#__PURE__*/ e(Y + M, Y.length ? A - x.length : 1 / 0), Y = ""), g){
                case "<":
                    M = S + M + x + Y;
                    break;
                case "=":
                    M = S + Y + M + x;
                    break;
                case "^":
                    M = Y.slice(0, R = Y.length >> 1) + S + M + x + Y.slice(R);
                    break;
                default:
                    M = Y + S + M + x;
                    break;
            }
            return a(M);
        }
        return m$1(it, "format"), it.toString = function() {
            return p + "";
        }, it;
    }
    m$1(h, "newFormat");
    function u(p, f) {
        var g = /*#__PURE__*/ h((p = /*#__PURE__*/ Se(p), p.type = "f", p)), C = Math.max(-8, /*#__PURE__*/ Math.min(8, /*#__PURE__*/ Math.floor(Vt(f) / 3))) * 3, k = /*#__PURE__*/ Math.pow(10, -C), L = ec[8 + C / 3];
        return function(A) {
            return g(k * A) + L;
        };
    }
    return m$1(u, "formatPrefix"), {
        format: h,
        formatPrefix: u
    };
}
m$1(Ea, "default");
var oo, no, ao;
Da({
    thousands: ",",
    grouping: [
        3
    ],
    currency: [
        "$",
        ""
    ]
});
function Da(t) {
    return oo = /*#__PURE__*/ Ea(t), no = oo.format, ao = oo.formatPrefix, oo;
}
m$1(Da, "defaultLocale");
function so(t) {
    return Math.max(0, -Vt(/*#__PURE__*/ Math.abs(t)));
}
m$1(so, "default");
function lo(t, e) {
    return Math.max(0, Math.max(-8, /*#__PURE__*/ Math.min(8, /*#__PURE__*/ Math.floor(Vt(e) / 3))) * 3 - Vt(/*#__PURE__*/ Math.abs(t)));
}
m$1(lo, "default");
function ho(t, e) {
    return t = /*#__PURE__*/ Math.abs(t), e = Math.abs(e) - t, Math.max(0, Vt(e) - Vt(t)) + 1;
}
m$1(ho, "default");
function zp(t) {
    var e = 0, r = t.children, o = r && r.length;
    if (!o) e = 1;
    else for(; --o >= 0;)e += r[o].value;
    t.value = e;
}
m$1(zp, "count");
function Oa() {
    return this.eachAfter(zp);
}
m$1(Oa, "default");
function Ia(t, e) {
    let r = -1;
    for (let o of this)t.call(e, o, ++r, this);
    return this;
}
m$1(Ia, "default");
function za(t, e) {
    for(var r = this, o = [
        r
    ], n, a, s = -1; r = /*#__PURE__*/ o.pop();)if (t.call(e, r, ++s, this), n = r.children) for(a = n.length - 1; a >= 0; --a)o.push(n[a]);
    return this;
}
m$1(za, "default");
function Ra(t, e) {
    for(var r = this, o = [
        r
    ], n = [], a, s, l, c = -1; r = /*#__PURE__*/ o.pop();)if (n.push(r), a = r.children) for(s = 0, l = a.length; s < l; ++s)o.push(a[s]);
    for(; r = /*#__PURE__*/ n.pop();)t.call(e, r, ++c, this);
    return this;
}
m$1(Ra, "default");
function Na(t, e) {
    let r = -1;
    for (let o of this)if (t.call(e, o, ++r, this)) return o;
}
m$1(Na, "default");
function qa(t) {
    return this.eachAfter(function(e) {
        for(var r = +t(e.data) || 0, o = e.children, n = o && o.length; --n >= 0;)r += o[n].value;
        e.value = r;
    });
}
m$1(qa, "default");
function Pa(t) {
    return this.eachBefore(function(e) {
        e.children && e.children.sort(t);
    });
}
m$1(Pa, "default");
function Wa(t) {
    for(var e = this, r = /*#__PURE__*/ Rp(e, t), o = [
        e
    ]; e !== r;)e = e.parent, o.push(e);
    for(var n = o.length; t !== r;)o.splice(n, 0, t), t = t.parent;
    return o;
}
m$1(Wa, "default");
function Rp(t, e) {
    if (t === e) return t;
    var r = /*#__PURE__*/ t.ancestors(), o = /*#__PURE__*/ e.ancestors(), n = null;
    for(t = /*#__PURE__*/ r.pop(), e = /*#__PURE__*/ o.pop(); t === e;)n = t, t = /*#__PURE__*/ r.pop(), e = /*#__PURE__*/ o.pop();
    return n;
}
m$1(Rp, "leastCommonAncestor");
function $a() {
    for(var t = this, e = [
        t
    ]; t = t.parent;)e.push(t);
    return e;
}
m$1($a, "default");
function Ha() {
    return Array.from(this);
}
m$1(Ha, "default");
function Ua() {
    var t = [];
    return this.eachBefore(function(e) {
        e.children || t.push(e);
    }), t;
}
m$1(Ua, "default");
function Ya() {
    var t = this, e = [];
    return t.each(function(r) {
        r !== t && e.push({
            source: r.parent,
            target: r
        });
    }), e;
}
m$1(Ya, "default");
function* Ga() {
    var t = this, e, r = [
        t
    ], o, n, a;
    do for(e = /*#__PURE__*/ r.reverse(), r = []; t = /*#__PURE__*/ e.pop();)if (yield t, o = t.children) for(n = 0, a = o.length; n < a; ++n)r.push(o[n]);
    while (r.length);
}
m$1(Ga, "default");
function co(t, e) {
    t instanceof Map ? (t = [
        void 0,
        t
    ], e === void 0 && (e = Pp)) : e === void 0 && (e = qp);
    for(var r = new jr(t), o, n = [
        r
    ], a, s, l, c; o = /*#__PURE__*/ n.pop();)if ((s = /*#__PURE__*/ e(o.data)) && (c = (s = /*#__PURE__*/ Array.from(s)).length)) for(o.children = s, l = c - 1; l >= 0; --l)n.push(a = s[l] = new jr(s[l])), a.parent = o, a.depth = o.depth + 1;
    return r.eachBefore($p);
}
m$1(co, "hierarchy");
function Np() {
    return co(this).eachBefore(Wp);
}
m$1(Np, "node_copy");
function qp(t) {
    return t.children;
}
m$1(qp, "objectChildren");
function Pp(t) {
    return Array.isArray(t) ? t[1] : null;
}
m$1(Pp, "mapChildren");
function Wp(t) {
    t.data.value !== void 0 && (t.value = t.data.value), t.data = t.data.data;
}
m$1(Wp, "copyData");
function $p(t) {
    var e = 0;
    do t.height = e;
    while ((t = t.parent) && t.height < ++e);
}
m$1($p, "computeHeight");
function jr(t) {
    this.data = t, this.depth = this.height = 0, this.parent = null;
}
m$1(jr, "Node");
jr.prototype = co.prototype = {
    constructor: jr,
    count: Oa,
    each: Ia,
    eachAfter: Ra,
    eachBefore: za,
    find: Na,
    sum: qa,
    sort: Pa,
    path: Wa,
    ancestors: $a,
    descendants: Ha,
    leaves: Ua,
    links: Ya,
    copy: Np,
    [Symbol.iterator]: Ga
};
function Va(t) {
    t.x0 = /*#__PURE__*/ Math.round(t.x0), t.y0 = /*#__PURE__*/ Math.round(t.y0), t.x1 = /*#__PURE__*/ Math.round(t.x1), t.y1 = /*#__PURE__*/ Math.round(t.y1);
}
m$1(Va, "default");
function Xa(t, e, r, o, n) {
    for(var a = t.children, s, l = -1, c = a.length, h = t.value && (o - e) / t.value; ++l < c;)s = a[l], s.y0 = r, s.y1 = n, s.x0 = e, s.x1 = e += s.value * h;
}
m$1(Xa, "default");
function ja(t, e, r, o, n) {
    for(var a = t.children, s, l = -1, c = a.length, h = t.value && (n - r) / t.value; ++l < c;)s = a[l], s.x0 = e, s.x1 = o, s.y0 = r, s.y1 = r += s.value * h;
}
m$1(ja, "default");
var Hp = (1 + Math.sqrt(5)) / 2;
function Up(t, e, r, o, n, a) {
    for(var s = [], l = e.children, c, h, u = 0, p = 0, f = l.length, g, C, k = e.value, L, A, $, O, F, P, w; u < f;){
        g = n - r, C = a - o;
        do L = l[p++].value;
        while (!L && p < f);
        for(A = $ = L, P = Math.max(C / g, g / C) / (k * t), w = L * L * P, F = /*#__PURE__*/ Math.max($ / w, w / A); p < f; ++p){
            if (L += h = l[p].value, h < A && (A = h), h > $ && ($ = h), w = L * L * P, O = /*#__PURE__*/ Math.max($ / w, w / A), O > F) {
                L -= h;
                break;
            }
            F = O;
        }
        s.push(c = {
            value: L,
            dice: g < C,
            children: /*#__PURE__*/ l.slice(u, p)
        }), c.dice ? Xa(c, r, o, n, k ? o += C * L / k : a) : ja(c, r, o, k ? r += g * L / k : n, a), k -= L, u = p;
    }
    return s;
}
m$1(Up, "squarifyRatio");
var rc = /*#__PURE__*/ m$1(function t(e) {
    function r(o, n, a, s, l) {
        Up(e, o, n, a, s, l);
    }
    return m$1(r, "squarify"), r.ratio = function(o) {
        return t((o = +o) > 1 ? o : 1);
    }, r;
}, "custom")(Hp);
function ic(t) {
    if (typeof t != "function") throw new Error;
    return t;
}
m$1(ic, "required");
function dr() {
    return 0;
}
m$1(dr, "constantZero");
function Pe(t) {
    return function() {
        return t;
    };
}
m$1(Pe, "default");
function oc() {
    var t = rc, e = false, r = 1, o = 1, n = [
        0
    ], a = dr, s = dr, l = dr, c = dr, h = dr;
    function u(f) {
        return f.x0 = f.y0 = 0, f.x1 = r, f.y1 = o, f.eachBefore(p), n = [
            0
        ], e && f.eachBefore(Va), f;
    }
    m$1(u, "treemap");
    function p(f) {
        var g = n[f.depth], C = f.x0 + g, k = f.y0 + g, L = f.x1 - g, A = f.y1 - g;
        L < C && (C = L = (C + L) / 2), A < k && (k = A = (k + A) / 2), f.x0 = C, f.y0 = k, f.x1 = L, f.y1 = A, f.children && (g = n[f.depth + 1] = a(f) / 2, C += h(f) - g, k += s(f) - g, L -= l(f) - g, A -= c(f) - g, L < C && (C = L = (C + L) / 2), A < k && (k = A = (k + A) / 2), t(f, C, k, L, A));
    }
    return m$1(p, "positionNode"), u.round = function(f) {
        return arguments.length ? (e = !!f, u) : e;
    }, u.size = function(f) {
        return arguments.length ? (r = +f[0], o = +f[1], u) : [
            r,
            o
        ];
    }, u.tile = function(f) {
        return arguments.length ? (t = /*#__PURE__*/ ic(f), u) : t;
    }, u.padding = function(f) {
        return arguments.length ? u.paddingInner(f).paddingOuter(f) : u.paddingInner();
    }, u.paddingInner = function(f) {
        return arguments.length ? (a = typeof f == "function" ? f : Pe(+f), u) : a;
    }, u.paddingOuter = function(f) {
        return arguments.length ? u.paddingTop(f).paddingRight(f).paddingBottom(f).paddingLeft(f) : u.paddingTop();
    }, u.paddingTop = function(f) {
        return arguments.length ? (s = typeof f == "function" ? f : Pe(+f), u) : s;
    }, u.paddingRight = function(f) {
        return arguments.length ? (l = typeof f == "function" ? f : Pe(+f), u) : l;
    }, u.paddingBottom = function(f) {
        return arguments.length ? (c = typeof f == "function" ? f : Pe(+f), u) : c;
    }, u.paddingLeft = function(f) {
        return arguments.length ? (h = typeof f == "function" ? f : Pe(+f), u) : h;
    }, u;
}
m$1(oc, "default");
function ve(t, e) {
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
m$1(ve, "initRange");
var Za = /*#__PURE__*/ Symbol("implicit");
function Zr() {
    var t = new ir, e = [], r = [], o = Za;
    function n(a) {
        let s = /*#__PURE__*/ t.get(a);
        if (s === void 0) {
            if (o !== Za) return o;
            t.set(a, s = e.push(a) - 1);
        }
        return r[s % r.length];
    }
    return m$1(n, "scale"), n.domain = function(a) {
        if (!arguments.length) return e.slice();
        e = [], t = new ir;
        for (let s of a)t.has(s) || t.set(s, e.push(s) - 1);
        return n;
    }, n.range = function(a) {
        return arguments.length ? (r = /*#__PURE__*/ Array.from(a), n) : r.slice();
    }, n.unknown = function(a) {
        return arguments.length ? (o = a, n) : o;
    }, n.copy = function() {
        return Zr(e, r).unknown(o);
    }, ve.apply(n, arguments), n;
}
m$1(Zr, "ordinal");
function Ka(t) {
    return function() {
        return t;
    };
}
m$1(Ka, "constants");
function Qa(t) {
    return +t;
}
m$1(Qa, "number");
var nc = [
    0,
    1
];
function pr(t) {
    return t;
}
m$1(pr, "identity");
function Ja(t, e) {
    return (e -= t = +t) ? function(r) {
        return (r - t) / e;
    } : Ka(isNaN(e) ? NaN : .5);
}
m$1(Ja, "normalize");
function Yp(t, e) {
    var r;
    return t > e && (r = t, t = e, e = r), function(o) {
        return Math.max(t, /*#__PURE__*/ Math.min(e, o));
    };
}
m$1(Yp, "clamper");
function Gp(t, e, r) {
    var o = t[0], n = t[1], a = e[0], s = e[1];
    return n < o ? (o = /*#__PURE__*/ Ja(n, o), a = /*#__PURE__*/ r(s, a)) : (o = /*#__PURE__*/ Ja(o, n), a = /*#__PURE__*/ r(a, s)), function(l) {
        return a(/*#__PURE__*/ o(l));
    };
}
m$1(Gp, "bimap");
function Vp(t, e, r) {
    var o = Math.min(t.length, e.length) - 1, n = new Array(o), a = new Array(o), s = -1;
    for(t[o] < t[0] && (t = /*#__PURE__*/ t.slice().reverse(), e = /*#__PURE__*/ e.slice().reverse()); ++s < o;)n[s] = /*#__PURE__*/ Ja(t[s], t[s + 1]), a[s] = /*#__PURE__*/ r(e[s], e[s + 1]);
    return function(l) {
        var c = Cn(t, l, 1, o) - 1;
        return a[c](/*#__PURE__*/ n[c](l));
    };
}
m$1(Vp, "polymap");
function uo(t, e) {
    return e.domain(/*#__PURE__*/ t.domain()).range(/*#__PURE__*/ t.range()).interpolate(/*#__PURE__*/ t.interpolate()).clamp(/*#__PURE__*/ t.clamp()).unknown(/*#__PURE__*/ t.unknown());
}
m$1(uo, "copy");
function Xp() {
    var t = nc, e = nc, r = ke, o, n, a, s = pr, l, c, h;
    function u() {
        var f = /*#__PURE__*/ Math.min(t.length, e.length);
        return s !== pr && (s = /*#__PURE__*/ Yp(t[0], t[f - 1])), l = f > 2 ? Vp : Gp, c = h = null, p;
    }
    m$1(u, "rescale");
    function p(f) {
        return f == null || isNaN(f = +f) ? a : (c || (c = /*#__PURE__*/ l(/*#__PURE__*/ t.map(o), e, r)))(/*#__PURE__*/ o(/*#__PURE__*/ s(f)));
    }
    return m$1(p, "scale"), p.invert = function(f) {
        return s(/*#__PURE__*/ n(/*#__PURE__*/ (h || (h = /*#__PURE__*/ l(e, /*#__PURE__*/ t.map(o), gt)))(f)));
    }, p.domain = function(f) {
        return arguments.length ? (t = /*#__PURE__*/ Array.from(f, Qa), u()) : t.slice();
    }, p.range = function(f) {
        return arguments.length ? (e = /*#__PURE__*/ Array.from(f), u()) : e.slice();
    }, p.rangeRound = function(f) {
        return e = /*#__PURE__*/ Array.from(f), r = Ki, u();
    }, p.clamp = function(f) {
        return arguments.length ? (s = f ? true : pr, u()) : s !== pr;
    }, p.interpolate = function(f) {
        return arguments.length ? (r = f, u()) : r;
    }, p.unknown = function(f) {
        return arguments.length ? (a = f, p) : a;
    }, function(f, g) {
        return o = f, n = g, u();
    };
}
m$1(Xp, "transformer");
function Kr() {
    return Xp()(pr, pr);
}
m$1(Kr, "continuous");
function ts(t, e, r, o) {
    var n = /*#__PURE__*/ or(t, e, r), a;
    switch(o = /*#__PURE__*/ Se(o ?? ",f"), o.type){
        case "s":
            {
                var s = /*#__PURE__*/ Math.max(/*#__PURE__*/ Math.abs(t), /*#__PURE__*/ Math.abs(e));
                return o.precision == null && !isNaN(a = /*#__PURE__*/ lo(n, s)) && (o.precision = a), ao(o, s);
            }
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
            {
                o.precision == null && !isNaN(a = /*#__PURE__*/ ho(n, /*#__PURE__*/ Math.max(/*#__PURE__*/ Math.abs(t), /*#__PURE__*/ Math.abs(e)))) && (o.precision = a - (o.type === "e"));
                break;
            }
        case "f":
        case "%":
            {
                o.precision == null && !isNaN(a = /*#__PURE__*/ so(n)) && (o.precision = a - (o.type === "%") * 2);
                break;
            }
    }
    return no(o);
}
m$1(ts, "tickFormat");
function jp(t) {
    var e = t.domain;
    return t.ticks = function(r) {
        var o = /*#__PURE__*/ e();
        return Pi(o[0], o[o.length - 1], r ?? 10);
    }, t.tickFormat = function(r, o) {
        var n = /*#__PURE__*/ e();
        return ts(n[0], n[n.length - 1], r ?? 10, o);
    }, t.nice = function(r) {
        r == null && (r = 10);
        var o = /*#__PURE__*/ e(), n = 0, a = o.length - 1, s = o[n], l = o[a], c, h, u = 10;
        for(l < s && (h = s, s = l, l = h, h = n, n = a, a = h); u-- > 0;){
            if (h = /*#__PURE__*/ Wr(s, l, r), h === c) return o[n] = s, o[a] = l, e(o);
            if (h > 0) s = Math.floor(s / h) * h, l = Math.ceil(l / h) * h;
            else if (h < 0) s = Math.ceil(s * h) / h, l = Math.floor(l * h) / h;
            else break;
            c = h;
        }
        return t;
    }, t;
}
m$1(jp, "linearish");
function es() {
    var t = /*#__PURE__*/ Kr();
    return t.copy = function() {
        return uo(t, /*#__PURE__*/ es());
    }, ve.apply(t, arguments), jp(t);
}
m$1(es, "linear");
var rs = new Date, is = new Date;
function ot(t, e, r, o) {
    function n(a) {
        return t(a = arguments.length === 0 ? new Date : new Date(+a)), a;
    }
    return m$1(n, "interval"), n.floor = (a)=>(t(a = new Date(+a)), a), n.ceil = (a)=>(t(a = new Date(a - 1)), e(a, 1), t(a), a), n.round = (a)=>{
        let s = /*#__PURE__*/ n(a), l = /*#__PURE__*/ n.ceil(a);
        return a - s < l - a ? s : l;
    }, n.offset = (a, s)=>(e(a = new Date(+a), s == null ? 1 : Math.floor(s)), a), n.range = (a, s, l)=>{
        let c = [];
        if (a = /*#__PURE__*/ n.ceil(a), l = l == null ? 1 : Math.floor(l), !(a < s) || !(l > 0)) return c;
        let h;
        do c.push(h = new Date(+a)), e(a, l), t(a);
        while (h < a && a < s);
        return c;
    }, n.filter = (a)=>ot((s)=>{
            if (s >= s) for(; t(s), !a(s);)s.setTime(s - 1);
        }, (s, l)=>{
            if (s >= s) if (l < 0) for(; ++l <= 0;)for(; e(s, -1), !a(s););
            else for(; --l >= 0;)for(; e(s, 1), !a(s););
        }), r && (n.count = (a, s)=>(rs.setTime(+a), is.setTime(+s), t(rs), t(is), Math.floor(/*#__PURE__*/ r(rs, is))), n.every = (a)=>(a = /*#__PURE__*/ Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? n.filter(o ? (s)=>o(s) % a === 0 : (s)=>n.count(0, s) % a === 0) : n)), n;
}
m$1(ot, "timeInterval");
var We = /*#__PURE__*/ ot(()=>{}, (t, e)=>{
    t.setTime(+t + e);
}, (t, e)=>e - t);
We.every = (t)=>(t = /*#__PURE__*/ Math.floor(t), !isFinite(t) || !(t > 0) ? null : t > 1 ? ot((e)=>{
        e.setTime(Math.floor(e / t) * t);
    }, (e, r)=>{
        e.setTime(+e + r * t);
    }, (e, r)=>(r - e) / t) : We);
We.range;
var ee = /*#__PURE__*/ ot((t)=>{
    t.setTime(t - t.getMilliseconds());
}, (t, e)=>{
    t.setTime(+t + e * 1e3);
}, (t, e)=>(e - t) / 1e3, (t)=>t.getUTCSeconds());
ee.range;
var mr = /*#__PURE__*/ ot((t)=>{
    t.setTime(t - t.getMilliseconds() - t.getSeconds() * 1e3);
}, (t, e)=>{
    t.setTime(+t + e * 6e4);
}, (t, e)=>(e - t) / 6e4, (t)=>t.getMinutes());
mr.range;
var fo = /*#__PURE__*/ ot((t)=>{
    t.setUTCSeconds(0, 0);
}, (t, e)=>{
    t.setTime(+t + e * 6e4);
}, (t, e)=>(e - t) / 6e4, (t)=>t.getUTCMinutes());
fo.range;
var gr = /*#__PURE__*/ ot((t)=>{
    t.setTime(t - t.getMilliseconds() - t.getSeconds() * 1e3 - t.getMinutes() * 6e4);
}, (t, e)=>{
    t.setTime(+t + e * 36e5);
}, (t, e)=>(e - t) / 36e5, (t)=>t.getHours());
gr.range;
var po = /*#__PURE__*/ ot((t)=>{
    t.setUTCMinutes(0, 0, 0);
}, (t, e)=>{
    t.setTime(+t + e * 36e5);
}, (t, e)=>(e - t) / 36e5, (t)=>t.getUTCHours());
po.range;
var ue = /*#__PURE__*/ ot((t)=>t.setHours(0, 0, 0, 0), (t, e)=>t.setDate(t.getDate() + e), (t, e)=>(e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * 6e4) / 864e5, (t)=>t.getDate() - 1);
ue.range;
var Jr = /*#__PURE__*/ ot((t)=>{
    t.setUTCHours(0, 0, 0, 0);
}, (t, e)=>{
    t.setUTCDate(t.getUTCDate() + e);
}, (t, e)=>(e - t) / 864e5, (t)=>t.getUTCDate() - 1);
Jr.range;
var mo = /*#__PURE__*/ ot((t)=>{
    t.setUTCHours(0, 0, 0, 0);
}, (t, e)=>{
    t.setUTCDate(t.getUTCDate() + e);
}, (t, e)=>(e - t) / 864e5, (t)=>Math.floor(t / 864e5));
mo.range;
function Ue(t) {
    return ot((e)=>{
        e.setDate(e.getDate() - (e.getDay() + 7 - t) % 7), e.setHours(0, 0, 0, 0);
    }, (e, r)=>{
        e.setDate(e.getDate() + r * 7);
    }, (e, r)=>(r - e - (r.getTimezoneOffset() - e.getTimezoneOffset()) * 6e4) / 6048e5);
}
m$1(Ue, "timeWeekday");
var fe = /*#__PURE__*/ Ue(0), xr = /*#__PURE__*/ Ue(1), hc = /*#__PURE__*/ Ue(2), cc = /*#__PURE__*/ Ue(3), we = /*#__PURE__*/ Ue(4), uc = /*#__PURE__*/ Ue(5), fc = /*#__PURE__*/ Ue(6);
fe.range;
xr.range;
hc.range;
cc.range;
we.range;
uc.range;
fc.range;
function Ye(t) {
    return ot((e)=>{
        e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t) % 7), e.setUTCHours(0, 0, 0, 0);
    }, (e, r)=>{
        e.setUTCDate(e.getUTCDate() + r * 7);
    }, (e, r)=>(r - e) / 6048e5);
}
m$1(Ye, "utcWeekday");
var Ge = /*#__PURE__*/ Ye(0), yr = /*#__PURE__*/ Ye(1), pc = /*#__PURE__*/ Ye(2), mc = /*#__PURE__*/ Ye(3), Be = /*#__PURE__*/ Ye(4), gc = /*#__PURE__*/ Ye(5), xc = /*#__PURE__*/ Ye(6);
Ge.range;
yr.range;
pc.range;
mc.range;
Be.range;
gc.range;
xc.range;
var Cr = /*#__PURE__*/ ot((t)=>{
    t.setDate(1), t.setHours(0, 0, 0, 0);
}, (t, e)=>{
    t.setMonth(t.getMonth() + e);
}, (t, e)=>e.getMonth() - t.getMonth() + (e.getFullYear() - t.getFullYear()) * 12, (t)=>t.getMonth());
Cr.range;
var go = /*#__PURE__*/ ot((t)=>{
    t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
}, (t, e)=>{
    t.setUTCMonth(t.getUTCMonth() + e);
}, (t, e)=>e.getUTCMonth() - t.getUTCMonth() + (e.getUTCFullYear() - t.getUTCFullYear()) * 12, (t)=>t.getUTCMonth());
go.range;
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
var Xt = /*#__PURE__*/ ot((t)=>{
    t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, e)=>{
    t.setUTCFullYear(t.getUTCFullYear() + e);
}, (t, e)=>e.getUTCFullYear() - t.getUTCFullYear(), (t)=>t.getUTCFullYear());
Xt.every = (t)=>!isFinite(t = /*#__PURE__*/ Math.floor(t)) || !(t > 0) ? null : ot((e)=>{
        e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t), e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
    }, (e, r)=>{
        e.setUTCFullYear(e.getUTCFullYear() + r * t);
    });
Xt.range;
function _c(t, e, r, o, n, a) {
    let s = [
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
            a,
            1,
            6e4
        ],
        [
            a,
            5,
            5 * 6e4
        ],
        [
            a,
            15,
            15 * 6e4
        ],
        [
            a,
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
        let g = p && typeof p.range == "function" ? p : c(h, u, p), C = g ? g.range(h, +u + 1) : [];
        return f ? C.reverse() : C;
    }
    m$1(l, "ticks");
    function c(h, u, p) {
        let f = Math.abs(u - h) / p, g = /*#__PURE__*/ Ie(([, , L])=>L).right(s, f);
        if (g === s.length) return t.every(/*#__PURE__*/ or(h / 31536e6, u / 31536e6, p));
        if (g === 0) return We.every(/*#__PURE__*/ Math.max(/*#__PURE__*/ or(h, u, p), 1));
        let [C, k] = s[f / s[g - 1][2] < s[g][2] / f ? g - 1 : g];
        return C.every(k);
    }
    return m$1(c, "tickInterval"), [
        l,
        c
    ];
}
m$1(_c, "ticker");
var [_m, bm] = _c(Xt, go, Ge, mo, po, fo), [os, ns] = _c(Nt, Cr, fe, ue, gr, mr);
function as(t) {
    if (0 <= t.y && t.y < 100) {
        var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
        return e.setFullYear(t.y), e;
    }
    return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
}
m$1(as, "localDate");
function ss(t) {
    if (0 <= t.y && t.y < 100) {
        var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
        return e.setUTCFullYear(t.y), e;
    }
    return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
}
m$1(ss, "utcDate");
function ti(t, e, r) {
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
m$1(ti, "newDate");
function ls(t) {
    var e = t.dateTime, r = t.date, o = t.time, n = t.periods, a = t.days, s = t.shortDays, l = t.months, c = t.shortMonths, h = /*#__PURE__*/ ei(n), u = /*#__PURE__*/ ri(n), p = /*#__PURE__*/ ei(a), f = /*#__PURE__*/ ri(a), g = /*#__PURE__*/ ei(s), C = /*#__PURE__*/ ri(s), k = /*#__PURE__*/ ei(l), L = /*#__PURE__*/ ri(l), A = /*#__PURE__*/ ei(c), $ = /*#__PURE__*/ ri(c), O = {
        a: N,
        A: R,
        b: Y,
        B: rt,
        c: null,
        d: wc,
        e: wc,
        f: Um,
        g: tg,
        G: rg,
        H: Wm,
        I: $m,
        j: Hm,
        L: Ac,
        m: Ym,
        M: Gm,
        p: G,
        q: nt,
        Q: Lc,
        s: Mc,
        S: Vm,
        u: Xm,
        U: jm,
        V: Zm,
        w: Km,
        W: Qm,
        x: null,
        X: null,
        y: Jm,
        Y: eg,
        Z: ig,
        "%": Fc
    }, F = {
        a: Q,
        A: Ft,
        b: Z,
        B: Ct,
        c: null,
        d: Bc,
        e: Bc,
        f: sg,
        g: xg,
        G: Cg,
        H: og,
        I: ng,
        j: ag,
        L: Dc,
        m: lg,
        M: hg,
        p: _t,
        q: lt,
        Q: Lc,
        s: Mc,
        S: cg,
        u: ug,
        U: fg,
        V: dg,
        w: pg,
        W: mg,
        x: null,
        X: null,
        y: gg,
        Y: yg,
        Z: _g,
        "%": Fc
    }, P = {
        a: it,
        A: M,
        b: S,
        B: x,
        c: y,
        d: Sc,
        e: Sc,
        f: Rm,
        g: kc,
        G: Tc,
        H: vc,
        I: vc,
        j: Dm,
        L: zm,
        m: Em,
        M: Om,
        p: H,
        q: Am,
        Q: qm,
        s: Pm,
        S: Im,
        u: wm,
        U: Bm,
        V: Fm,
        w: vm,
        W: Lm,
        x: D,
        X: v,
        y: kc,
        Y: Tc,
        Z: Mm,
        "%": Nm
    };
    O.x = /*#__PURE__*/ w(r, O), O.X = /*#__PURE__*/ w(o, O), O.c = /*#__PURE__*/ w(e, O), F.x = /*#__PURE__*/ w(r, F), F.X = /*#__PURE__*/ w(o, F), F.c = /*#__PURE__*/ w(e, F);
    function w(B, U) {
        return function(V) {
            var _ = [], pt = -1, J = 0, bt = B.length, Tt, It, Me;
            for(V instanceof Date || (V = new Date(+V)); ++pt < bt;)B.charCodeAt(pt) === 37 && (_.push(/*#__PURE__*/ B.slice(J, pt)), (It = bc[Tt = /*#__PURE__*/ B.charAt(++pt)]) != null ? Tt = /*#__PURE__*/ B.charAt(++pt) : It = Tt === "e" ? " " : "0", (Me = U[Tt]) && (Tt = /*#__PURE__*/ Me(V, It)), _.push(Tt), J = pt + 1);
            return _.push(/*#__PURE__*/ B.slice(J, pt)), _.join("");
        };
    }
    m$1(w, "newFormat");
    function X(B, U) {
        return function(V) {
            var _ = /*#__PURE__*/ ti(1900, void 0, 1), pt = /*#__PURE__*/ j(_, B, V += "", 0), J, bt;
            if (pt != V.length) return null;
            if ("Q" in _) return new Date(_.Q);
            if ("s" in _) return new Date(_.s * 1e3 + ("L" in _ ? _.L : 0));
            if (U && !("Z" in _) && (_.Z = 0), "p" in _ && (_.H = _.H % 12 + _.p * 12), _.m === void 0 && (_.m = "q" in _ ? _.q : 0), "V" in _) {
                if (_.V < 1 || _.V > 53) return null;
                "w" in _ || (_.w = 1), "Z" in _ ? (J = /*#__PURE__*/ ss(/*#__PURE__*/ ti(_.y, 0, 1)), bt = /*#__PURE__*/ J.getUTCDay(), J = bt > 4 || bt === 0 ? yr.ceil(J) : yr(J), J = /*#__PURE__*/ Jr.offset(J, (_.V - 1) * 7), _.y = /*#__PURE__*/ J.getUTCFullYear(), _.m = /*#__PURE__*/ J.getUTCMonth(), _.d = J.getUTCDate() + (_.w + 6) % 7) : (J = /*#__PURE__*/ as(/*#__PURE__*/ ti(_.y, 0, 1)), bt = /*#__PURE__*/ J.getDay(), J = bt > 4 || bt === 0 ? xr.ceil(J) : xr(J), J = /*#__PURE__*/ ue.offset(J, (_.V - 1) * 7), _.y = /*#__PURE__*/ J.getFullYear(), _.m = /*#__PURE__*/ J.getMonth(), _.d = J.getDate() + (_.w + 6) % 7);
            } else ("W" in _ || "U" in _) && ("w" in _ || (_.w = "u" in _ ? _.u % 7 : "W" in _ ? 1 : 0), bt = "Z" in _ ? ss(/*#__PURE__*/ ti(_.y, 0, 1)).getUTCDay() : as(/*#__PURE__*/ ti(_.y, 0, 1)).getDay(), _.m = 0, _.d = "W" in _ ? (_.w + 6) % 7 + _.W * 7 - (bt + 5) % 7 : _.w + _.U * 7 - (bt + 6) % 7);
            return "Z" in _ ? (_.H += _.Z / 100 | 0, _.M += _.Z % 100, ss(_)) : as(_);
        };
    }
    m$1(X, "newParse");
    function j(B, U, V, _) {
        for(var pt = 0, J = U.length, bt = V.length, Tt, It; pt < J;){
            if (_ >= bt) return -1;
            if (Tt = /*#__PURE__*/ U.charCodeAt(pt++), Tt === 37) {
                if (Tt = /*#__PURE__*/ U.charAt(pt++), It = P[Tt in bc ? U.charAt(pt++) : Tt], !It || (_ = /*#__PURE__*/ It(B, V, _)) < 0) return -1;
            } else if (Tt != V.charCodeAt(_++)) return -1;
        }
        return _;
    }
    m$1(j, "parseSpecifier");
    function H(B, U, V) {
        var _ = /*#__PURE__*/ h.exec(/*#__PURE__*/ U.slice(V));
        return _ ? (B.p = /*#__PURE__*/ u.get(/*#__PURE__*/ _[0].toLowerCase()), V + _[0].length) : -1;
    }
    m$1(H, "parsePeriod");
    function it(B, U, V) {
        var _ = /*#__PURE__*/ g.exec(/*#__PURE__*/ U.slice(V));
        return _ ? (B.w = /*#__PURE__*/ C.get(/*#__PURE__*/ _[0].toLowerCase()), V + _[0].length) : -1;
    }
    m$1(it, "parseShortWeekday");
    function M(B, U, V) {
        var _ = /*#__PURE__*/ p.exec(/*#__PURE__*/ U.slice(V));
        return _ ? (B.w = /*#__PURE__*/ f.get(/*#__PURE__*/ _[0].toLowerCase()), V + _[0].length) : -1;
    }
    m$1(M, "parseWeekday");
    function S(B, U, V) {
        var _ = /*#__PURE__*/ A.exec(/*#__PURE__*/ U.slice(V));
        return _ ? (B.m = /*#__PURE__*/ $.get(/*#__PURE__*/ _[0].toLowerCase()), V + _[0].length) : -1;
    }
    m$1(S, "parseShortMonth");
    function x(B, U, V) {
        var _ = /*#__PURE__*/ k.exec(/*#__PURE__*/ U.slice(V));
        return _ ? (B.m = /*#__PURE__*/ L.get(/*#__PURE__*/ _[0].toLowerCase()), V + _[0].length) : -1;
    }
    m$1(x, "parseMonth");
    function y(B, U, V) {
        return j(B, e, U, V);
    }
    m$1(y, "parseLocaleDateTime");
    function D(B, U, V) {
        return j(B, r, U, V);
    }
    m$1(D, "parseLocaleDate");
    function v(B, U, V) {
        return j(B, o, U, V);
    }
    m$1(v, "parseLocaleTime");
    function N(B) {
        return s[B.getDay()];
    }
    m$1(N, "formatShortWeekday");
    function R(B) {
        return a[B.getDay()];
    }
    m$1(R, "formatWeekday");
    function Y(B) {
        return c[B.getMonth()];
    }
    m$1(Y, "formatShortMonth");
    function rt(B) {
        return l[B.getMonth()];
    }
    m$1(rt, "formatMonth");
    function G(B) {
        return n[+(B.getHours() >= 12)];
    }
    m$1(G, "formatPeriod");
    function nt(B) {
        return 1 + ~~(B.getMonth() / 3);
    }
    m$1(nt, "formatQuarter");
    function Q(B) {
        return s[B.getUTCDay()];
    }
    m$1(Q, "formatUTCShortWeekday");
    function Ft(B) {
        return a[B.getUTCDay()];
    }
    m$1(Ft, "formatUTCWeekday");
    function Z(B) {
        return c[B.getUTCMonth()];
    }
    m$1(Z, "formatUTCShortMonth");
    function Ct(B) {
        return l[B.getUTCMonth()];
    }
    m$1(Ct, "formatUTCMonth");
    function _t(B) {
        return n[+(B.getUTCHours() >= 12)];
    }
    m$1(_t, "formatUTCPeriod");
    function lt(B) {
        return 1 + ~~(B.getUTCMonth() / 3);
    }
    return m$1(lt, "formatUTCQuarter"), {
        format: /*#__PURE__*/ m$1(function(B) {
            var U = /*#__PURE__*/ w(B += "", O);
            return U.toString = function() {
                return B;
            }, U;
        }, "format"),
        parse: /*#__PURE__*/ m$1(function(B) {
            var U = /*#__PURE__*/ X(B += "", false);
            return U.toString = function() {
                return B;
            }, U;
        }, "parse"),
        utcFormat: /*#__PURE__*/ m$1(function(B) {
            var U = /*#__PURE__*/ w(B += "", F);
            return U.toString = function() {
                return B;
            }, U;
        }, "utcFormat"),
        utcParse: /*#__PURE__*/ m$1(function(B) {
            var U = /*#__PURE__*/ X(B += "", true);
            return U.toString = function() {
                return B;
            }, U;
        }, "utcParse")
    };
}
m$1(ls, "formatLocale");
var bc = {
    "-": "",
    _: " ",
    0: "0"
}, xt = /^\s*\d+/, Tm = /^%/, km = /[\\^$*+?|[\]().{}]/g;
function et(t, e, r) {
    var o = t < 0 ? "-" : "", n = (o ? -t : t) + "", a = n.length;
    return o + (a < r ? new Array(r - a + 1).join(e) + n : n);
}
m$1(et, "pad");
function Sm(t) {
    return t.replace(km, "\\$&");
}
m$1(Sm, "requote");
function ei(t) {
    return new RegExp("^(?:" + t.map(Sm).join("|") + ")", "i");
}
m$1(ei, "formatRe");
function ri(t) {
    return new Map(t.map((e, r)=>[
            /*#__PURE__*/ e.toLowerCase(),
            r
        ]));
}
m$1(ri, "formatLookup");
function vm(t, e, r) {
    var o = /*#__PURE__*/ xt.exec(/*#__PURE__*/ e.slice(r, r + 1));
    return o ? (t.w = +o[0], r + o[0].length) : -1;
}
m$1(vm, "parseWeekdayNumberSunday");
function wm(t, e, r) {
    var o = /*#__PURE__*/ xt.exec(/*#__PURE__*/ e.slice(r, r + 1));
    return o ? (t.u = +o[0], r + o[0].length) : -1;
}
m$1(wm, "parseWeekdayNumberMonday");
function Bm(t, e, r) {
    var o = /*#__PURE__*/ xt.exec(/*#__PURE__*/ e.slice(r, r + 2));
    return o ? (t.U = +o[0], r + o[0].length) : -1;
}
m$1(Bm, "parseWeekNumberSunday");
function Fm(t, e, r) {
    var o = /*#__PURE__*/ xt.exec(/*#__PURE__*/ e.slice(r, r + 2));
    return o ? (t.V = +o[0], r + o[0].length) : -1;
}
m$1(Fm, "parseWeekNumberISO");
function Lm(t, e, r) {
    var o = /*#__PURE__*/ xt.exec(/*#__PURE__*/ e.slice(r, r + 2));
    return o ? (t.W = +o[0], r + o[0].length) : -1;
}
m$1(Lm, "parseWeekNumberMonday");
function Tc(t, e, r) {
    var o = /*#__PURE__*/ xt.exec(/*#__PURE__*/ e.slice(r, r + 4));
    return o ? (t.y = +o[0], r + o[0].length) : -1;
}
m$1(Tc, "parseFullYear");
function kc(t, e, r) {
    var o = /*#__PURE__*/ xt.exec(/*#__PURE__*/ e.slice(r, r + 2));
    return o ? (t.y = +o[0] + (+o[0] > 68 ? 1900 : 2e3), r + o[0].length) : -1;
}
m$1(kc, "parseYear");
function Mm(t, e, r) {
    var o = /*#__PURE__*/ /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(/*#__PURE__*/ e.slice(r, r + 6));
    return o ? (t.Z = o[1] ? 0 : -(o[2] + (o[3] || "00")), r + o[0].length) : -1;
}
m$1(Mm, "parseZone");
function Am(t, e, r) {
    var o = /*#__PURE__*/ xt.exec(/*#__PURE__*/ e.slice(r, r + 1));
    return o ? (t.q = o[0] * 3 - 3, r + o[0].length) : -1;
}
m$1(Am, "parseQuarter");
function Em(t, e, r) {
    var o = /*#__PURE__*/ xt.exec(/*#__PURE__*/ e.slice(r, r + 2));
    return o ? (t.m = o[0] - 1, r + o[0].length) : -1;
}
m$1(Em, "parseMonthNumber");
function Sc(t, e, r) {
    var o = /*#__PURE__*/ xt.exec(/*#__PURE__*/ e.slice(r, r + 2));
    return o ? (t.d = +o[0], r + o[0].length) : -1;
}
m$1(Sc, "parseDayOfMonth");
function Dm(t, e, r) {
    var o = /*#__PURE__*/ xt.exec(/*#__PURE__*/ e.slice(r, r + 3));
    return o ? (t.m = 0, t.d = +o[0], r + o[0].length) : -1;
}
m$1(Dm, "parseDayOfYear");
function vc(t, e, r) {
    var o = /*#__PURE__*/ xt.exec(/*#__PURE__*/ e.slice(r, r + 2));
    return o ? (t.H = +o[0], r + o[0].length) : -1;
}
m$1(vc, "parseHour24");
function Om(t, e, r) {
    var o = /*#__PURE__*/ xt.exec(/*#__PURE__*/ e.slice(r, r + 2));
    return o ? (t.M = +o[0], r + o[0].length) : -1;
}
m$1(Om, "parseMinutes");
function Im(t, e, r) {
    var o = /*#__PURE__*/ xt.exec(/*#__PURE__*/ e.slice(r, r + 2));
    return o ? (t.S = +o[0], r + o[0].length) : -1;
}
m$1(Im, "parseSeconds");
function zm(t, e, r) {
    var o = /*#__PURE__*/ xt.exec(/*#__PURE__*/ e.slice(r, r + 3));
    return o ? (t.L = +o[0], r + o[0].length) : -1;
}
m$1(zm, "parseMilliseconds");
function Rm(t, e, r) {
    var o = /*#__PURE__*/ xt.exec(/*#__PURE__*/ e.slice(r, r + 6));
    return o ? (t.L = /*#__PURE__*/ Math.floor(o[0] / 1e3), r + o[0].length) : -1;
}
m$1(Rm, "parseMicroseconds");
function Nm(t, e, r) {
    var o = /*#__PURE__*/ Tm.exec(/*#__PURE__*/ e.slice(r, r + 1));
    return o ? r + o[0].length : -1;
}
m$1(Nm, "parseLiteralPercent");
function qm(t, e, r) {
    var o = /*#__PURE__*/ xt.exec(/*#__PURE__*/ e.slice(r));
    return o ? (t.Q = +o[0], r + o[0].length) : -1;
}
m$1(qm, "parseUnixTimestamp");
function Pm(t, e, r) {
    var o = /*#__PURE__*/ xt.exec(/*#__PURE__*/ e.slice(r));
    return o ? (t.s = +o[0], r + o[0].length) : -1;
}
m$1(Pm, "parseUnixTimestampSeconds");
function wc(t, e) {
    return et(/*#__PURE__*/ t.getDate(), e, 2);
}
m$1(wc, "formatDayOfMonth");
function Wm(t, e) {
    return et(/*#__PURE__*/ t.getHours(), e, 2);
}
m$1(Wm, "formatHour24");
function $m(t, e) {
    return et(t.getHours() % 12 || 12, e, 2);
}
m$1($m, "formatHour12");
function Hm(t, e) {
    return et(1 + ue.count(/*#__PURE__*/ Nt(t), t), e, 3);
}
m$1(Hm, "formatDayOfYear");
function Ac(t, e) {
    return et(/*#__PURE__*/ t.getMilliseconds(), e, 3);
}
m$1(Ac, "formatMilliseconds");
function Um(t, e) {
    return Ac(t, e) + "000";
}
m$1(Um, "formatMicroseconds");
function Ym(t, e) {
    return et(t.getMonth() + 1, e, 2);
}
m$1(Ym, "formatMonthNumber");
function Gm(t, e) {
    return et(/*#__PURE__*/ t.getMinutes(), e, 2);
}
m$1(Gm, "formatMinutes");
function Vm(t, e) {
    return et(/*#__PURE__*/ t.getSeconds(), e, 2);
}
m$1(Vm, "formatSeconds");
function Xm(t) {
    var e = /*#__PURE__*/ t.getDay();
    return e === 0 ? 7 : e;
}
m$1(Xm, "formatWeekdayNumberMonday");
function jm(t, e) {
    return et(/*#__PURE__*/ fe.count(Nt(t) - 1, t), e, 2);
}
m$1(jm, "formatWeekNumberSunday");
function Ec(t) {
    var e = /*#__PURE__*/ t.getDay();
    return e >= 4 || e === 0 ? we(t) : we.ceil(t);
}
m$1(Ec, "dISO");
function Zm(t, e) {
    return t = /*#__PURE__*/ Ec(t), et(we.count(/*#__PURE__*/ Nt(t), t) + (Nt(t).getDay() === 4), e, 2);
}
m$1(Zm, "formatWeekNumberISO");
function Km(t) {
    return t.getDay();
}
m$1(Km, "formatWeekdayNumberSunday");
function Qm(t, e) {
    return et(/*#__PURE__*/ xr.count(Nt(t) - 1, t), e, 2);
}
m$1(Qm, "formatWeekNumberMonday");
function Jm(t, e) {
    return et(t.getFullYear() % 100, e, 2);
}
m$1(Jm, "formatYear");
function tg(t, e) {
    return t = /*#__PURE__*/ Ec(t), et(t.getFullYear() % 100, e, 2);
}
m$1(tg, "formatYearISO");
function eg(t, e) {
    return et(t.getFullYear() % 1e4, e, 4);
}
m$1(eg, "formatFullYear");
function rg(t, e) {
    var r = /*#__PURE__*/ t.getDay();
    return t = r >= 4 || r === 0 ? we(t) : we.ceil(t), et(t.getFullYear() % 1e4, e, 4);
}
m$1(rg, "formatFullYearISO");
function ig(t) {
    var e = /*#__PURE__*/ t.getTimezoneOffset();
    return (e > 0 ? "-" : (e *= -1, "+")) + et(e / 60 | 0, "0", 2) + et(e % 60, "0", 2);
}
m$1(ig, "formatZone");
function Bc(t, e) {
    return et(/*#__PURE__*/ t.getUTCDate(), e, 2);
}
m$1(Bc, "formatUTCDayOfMonth");
function og(t, e) {
    return et(/*#__PURE__*/ t.getUTCHours(), e, 2);
}
m$1(og, "formatUTCHour24");
function ng(t, e) {
    return et(t.getUTCHours() % 12 || 12, e, 2);
}
m$1(ng, "formatUTCHour12");
function ag(t, e) {
    return et(1 + Jr.count(/*#__PURE__*/ Xt(t), t), e, 3);
}
m$1(ag, "formatUTCDayOfYear");
function Dc(t, e) {
    return et(/*#__PURE__*/ t.getUTCMilliseconds(), e, 3);
}
m$1(Dc, "formatUTCMilliseconds");
function sg(t, e) {
    return Dc(t, e) + "000";
}
m$1(sg, "formatUTCMicroseconds");
function lg(t, e) {
    return et(t.getUTCMonth() + 1, e, 2);
}
m$1(lg, "formatUTCMonthNumber");
function hg(t, e) {
    return et(/*#__PURE__*/ t.getUTCMinutes(), e, 2);
}
m$1(hg, "formatUTCMinutes");
function cg(t, e) {
    return et(/*#__PURE__*/ t.getUTCSeconds(), e, 2);
}
m$1(cg, "formatUTCSeconds");
function ug(t) {
    var e = /*#__PURE__*/ t.getUTCDay();
    return e === 0 ? 7 : e;
}
m$1(ug, "formatUTCWeekdayNumberMonday");
function fg(t, e) {
    return et(/*#__PURE__*/ Ge.count(Xt(t) - 1, t), e, 2);
}
m$1(fg, "formatUTCWeekNumberSunday");
function Oc(t) {
    var e = /*#__PURE__*/ t.getUTCDay();
    return e >= 4 || e === 0 ? Be(t) : Be.ceil(t);
}
m$1(Oc, "UTCdISO");
function dg(t, e) {
    return t = /*#__PURE__*/ Oc(t), et(Be.count(/*#__PURE__*/ Xt(t), t) + (Xt(t).getUTCDay() === 4), e, 2);
}
m$1(dg, "formatUTCWeekNumberISO");
function pg(t) {
    return t.getUTCDay();
}
m$1(pg, "formatUTCWeekdayNumberSunday");
function mg(t, e) {
    return et(/*#__PURE__*/ yr.count(Xt(t) - 1, t), e, 2);
}
m$1(mg, "formatUTCWeekNumberMonday");
function gg(t, e) {
    return et(t.getUTCFullYear() % 100, e, 2);
}
m$1(gg, "formatUTCYear");
function xg(t, e) {
    return t = /*#__PURE__*/ Oc(t), et(t.getUTCFullYear() % 100, e, 2);
}
m$1(xg, "formatUTCYearISO");
function yg(t, e) {
    return et(t.getUTCFullYear() % 1e4, e, 4);
}
m$1(yg, "formatUTCFullYear");
function Cg(t, e) {
    var r = /*#__PURE__*/ t.getUTCDay();
    return t = r >= 4 || r === 0 ? Be(t) : Be.ceil(t), et(t.getUTCFullYear() % 1e4, e, 4);
}
m$1(Cg, "formatUTCFullYearISO");
function _g() {
    return "+0000";
}
m$1(_g, "formatUTCZone");
function Fc() {
    return "%";
}
m$1(Fc, "formatLiteralPercent");
function Lc(t) {
    return +t;
}
m$1(Lc, "formatUnixTimestamp");
function Mc(t) {
    return Math.floor(+t / 1e3);
}
m$1(Mc, "formatUnixTimestampSeconds");
var _r, xo;
hs({
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
function hs(t) {
    return _r = /*#__PURE__*/ ls(t), xo = _r.format, _r.parse, _r.utcFormat, _r.utcParse, _r;
}
m$1(hs, "defaultLocale");
function cs(t, e) {
    t = /*#__PURE__*/ t.slice();
    var r = 0, o = t.length - 1, n = t[r], a = t[o], s;
    return a < n && (s = r, r = o, o = s, s = n, n = a, a = s), t[r] = /*#__PURE__*/ e.floor(n), t[o] = /*#__PURE__*/ e.ceil(a), t;
}
m$1(cs, "nice");
function bg(t) {
    return new Date(t);
}
m$1(bg, "date");
function Tg(t) {
    return t instanceof Date ? +t : +new Date(+t);
}
m$1(Tg, "number");
function Nc(t, e, r, o, n, a, s, l, c, h) {
    var u = /*#__PURE__*/ Kr(), p = u.invert, f = u.domain, g = /*#__PURE__*/ h(".%L"), C = /*#__PURE__*/ h(":%S"), k = /*#__PURE__*/ h("%I:%M"), L = /*#__PURE__*/ h("%I %p"), A = /*#__PURE__*/ h("%a %d"), $ = /*#__PURE__*/ h("%b %d"), O = /*#__PURE__*/ h("%B"), F = /*#__PURE__*/ h("%Y");
    function P(w) {
        return (c(w) < w ? g : l(w) < w ? C : s(w) < w ? k : a(w) < w ? L : o(w) < w ? n(w) < w ? A : $ : r(w) < w ? O : F)(w);
    }
    return m$1(P, "tickFormat"), u.invert = function(w) {
        return new Date(p(w));
    }, u.domain = function(w) {
        return arguments.length ? f(/*#__PURE__*/ Array.from(w, Tg)) : f().map(bg);
    }, u.ticks = function(w) {
        var X = /*#__PURE__*/ f();
        return t(X[0], X[X.length - 1], w ?? 10);
    }, u.tickFormat = function(w, X) {
        return X == null ? P : h(X);
    }, u.nice = function(w) {
        var X = /*#__PURE__*/ f();
        return (!w || typeof w.range != "function") && (w = /*#__PURE__*/ e(X[0], X[X.length - 1], w ?? 10)), w ? f(/*#__PURE__*/ cs(X, w)) : u;
    }, u.copy = function() {
        return uo(u, /*#__PURE__*/ Nc(t, e, r, o, n, a, s, l, c, h));
    }, u;
}
m$1(Nc, "calendar");
function qc() {
    return ve.apply(/*#__PURE__*/ Nc(os, ns, Nt, Cr, fe, ue, gr, mr, ee, xo).domain([
        new Date(2e3, 0, 1),
        new Date(2e3, 0, 2)
    ]), arguments);
}
m$1(qc, "time");
function us() {
    var t = /*#__PURE__*/ Zr().unknown(void 0), e = t.domain, r = t.range, o = 0, n = 1, a, s, l = false, c = 0, h = 0, u = .5;
    delete t.unknown;
    function p() {
        var f = e().length, g = n < o, C = g ? n : o, k = g ? o : n;
        a = (k - C) / Math.max(1, f - c + h * 2), l && (a = /*#__PURE__*/ Math.floor(a)), C += (k - C - a * (f - c)) * u, s = a * (1 - c), l && (C = /*#__PURE__*/ Math.round(C), s = /*#__PURE__*/ Math.round(s));
        var L = /*#__PURE__*/ Wi(f).map(function(A) {
            return C + a * A;
        });
        return r(g ? L.reverse() : L);
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
        return s;
    }, t.step = function() {
        return a;
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
        return us(/*#__PURE__*/ e(), [
            o,
            n
        ]).round(l).paddingInner(c).paddingOuter(h).align(u);
    }, ve.apply(/*#__PURE__*/ p(), arguments);
}
m$1(us, "band");
function fs(t) {
    for(var e = t.length / 6 | 0, r = new Array(e), o = 0; o < e;)r[o] = "#" + t.slice(o * 6, ++o * 6);
    return r;
}
m$1(fs, "default");
var kg = /*#__PURE__*/ fs("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
function at(t) {
    return m$1(function() {
        return t;
    }, "constant");
}
m$1(at, "default");
var ds = Math.abs, vt = Math.atan2, Fe = Math.cos, Pc = Math.max, yo = Math.min, jt = Math.sin, Ve = Math.sqrt, yt = 1e-12, br = Math.PI, ii = br / 2, Tr = 2 * br;
function Wc(t) {
    return t > 1 ? 0 : t < -1 ? br : Math.acos(t);
}
m$1(Wc, "acos");
function ps(t) {
    return t >= 1 ? ii : t <= -1 ? -ii : Math.asin(t);
}
m$1(ps, "asin");
var ms = Math.PI, gs = 2 * ms, Xe = 1e-6, Sg = gs - Xe;
function $c(t) {
    this._ += t[0];
    for(let e = 1, r = t.length; e < r; ++e)this._ += arguments[e] + t[e];
}
m$1($c, "append");
function vg(t) {
    let e = /*#__PURE__*/ Math.floor(t);
    if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
    if (e > 15) return $c;
    let r = 10 ** e;
    return function(o) {
        this._ += o[0];
        for(let n = 1, a = o.length; n < a; ++n)this._ += Math.round(arguments[n] * r) / r + o[n];
    };
}
m$1(vg, "appendRound");
var je = class {
    static{
        m$1(this, "Path");
    }
    constructor(e){
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = e == null ? $c : vg(e);
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
    bezierCurveTo(e, r, o, n, a, s) {
        this._append`C${+e},${+r},${+o},${+n},${this._x1 = +a},${this._y1 = +s}`;
    }
    arcTo(e, r, o, n, a) {
        if (e = +e, r = +r, o = +o, n = +n, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
        let s = this._x1, l = this._y1, c = o - e, h = n - r, u = s - e, p = l - r, f = u * u + p * p;
        if (this._x1 === null) this._append`M${this._x1 = e},${this._y1 = r}`;
        else if (f > Xe) if (!(Math.abs(p * c - h * u) > Xe) || !a) this._append`L${this._x1 = e},${this._y1 = r}`;
        else {
            let g = o - s, C = n - l, k = c * c + h * h, L = g * g + C * C, A = /*#__PURE__*/ Math.sqrt(k), $ = /*#__PURE__*/ Math.sqrt(f), O = a * Math.tan((ms - Math.acos((k + f - L) / (2 * A * $))) / 2), F = O / $, P = O / A;
            Math.abs(F - 1) > Xe && this._append`L${e + F * u},${r + F * p}`, this._append`A${a},${a},0,0,${+(p * g > u * C)},${this._x1 = e + P * c},${this._y1 = r + P * h}`;
        }
    }
    arc(e, r, o, n, a, s) {
        if (e = +e, r = +r, o = +o, s = !!s, o < 0) throw new Error(`negative radius: ${o}`);
        let l = o * Math.cos(n), c = o * Math.sin(n), h = e + l, u = r + c, p = 1 ^ s, f = s ? n - a : a - n;
        this._x1 === null ? this._append`M${h},${u}` : (Math.abs(this._x1 - h) > Xe || Math.abs(this._y1 - u) > Xe) && this._append`L${h},${u}`, o && (f < 0 && (f = f % gs + gs), f > Sg ? this._append`A${o},${o},0,1,${p},${e - l},${r - c}A${o},${o},0,1,${p},${this._x1 = h},${this._y1 = u}` : f > Xe && this._append`A${o},${o},0,${+(f >= ms)},${p},${this._x1 = e + o * Math.cos(a)},${this._y1 = r + o * Math.sin(a)}`);
    }
    rect(e, r, o, n) {
        this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +r}h${o = +o}v${+n}h${-o}Z`;
    }
    toString() {
        return this._;
    }
};
function Hc() {
    return new je;
}
m$1(Hc, "path");
Hc.prototype = je.prototype;
function Co(t) {
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
    }, ()=>new je(e);
}
m$1(Co, "withPath");
function wg(t) {
    return t.innerRadius;
}
m$1(wg, "arcInnerRadius");
function Bg(t) {
    return t.outerRadius;
}
m$1(Bg, "arcOuterRadius");
function Fg(t) {
    return t.startAngle;
}
m$1(Fg, "arcStartAngle");
function Lg(t) {
    return t.endAngle;
}
m$1(Lg, "arcEndAngle");
function Mg(t) {
    return t && t.padAngle;
}
m$1(Mg, "arcPadAngle");
function Ag(t, e, r, o, n, a, s, l) {
    var c = r - t, h = o - e, u = s - n, p = l - a, f = p * c - u * h;
    if (!(f * f < yt)) return f = (u * (e - a) - p * (t - n)) / f, [
        t + f * c,
        e + f * h
    ];
}
m$1(Ag, "intersect");
function _o(t, e, r, o, n, a, s) {
    var l = t - r, c = e - o, h = (s ? a : -a) / Ve(l * l + c * c), u = h * c, p = -h * l, f = t + u, g = e + p, C = r + u, k = o + p, L = (f + C) / 2, A = (g + k) / 2, $ = C - f, O = k - g, F = $ * $ + O * O, P = n - a, w = f * k - C * g, X = (O < 0 ? -1 : 1) * Ve(/*#__PURE__*/ Pc(0, P * P * F - w * w)), j = (w * O - $ * X) / F, H = (-w * $ - O * X) / F, it = (w * O + $ * X) / F, M = (-w * $ + O * X) / F, S = j - L, x = H - A, y = it - L, D = M - A;
    return S * S + x * x > y * y + D * D && (j = it, H = M), {
        cx: j,
        cy: H,
        x01: -u,
        y01: -p,
        x11: j * (n / P - 1),
        y11: H * (n / P - 1)
    };
}
m$1(_o, "cornerTangents");
function Uc() {
    var t = wg, e = Bg, r = /*#__PURE__*/ at(0), o = null, n = Fg, a = Lg, s = Mg, l = null, c = /*#__PURE__*/ Co(h);
    function h() {
        var u, p, f = +t.apply(this, arguments), g = +e.apply(this, arguments), C = n.apply(this, arguments) - ii, k = a.apply(this, arguments) - ii, L = /*#__PURE__*/ ds(k - C), A = k > C;
        if (l || (l = u = /*#__PURE__*/ c()), g < f && (p = g, g = f, f = p), !(g > yt)) l.moveTo(0, 0);
        else if (L > Tr - yt) l.moveTo(g * Fe(C), g * jt(C)), l.arc(0, 0, g, C, k, !A), f > yt && (l.moveTo(f * Fe(k), f * jt(k)), l.arc(0, 0, f, k, C, A));
        else {
            var $ = C, O = k, F = C, P = k, w = L, X = L, j = s.apply(this, arguments) / 2, H = j > yt && (o ? +o.apply(this, arguments) : Ve(f * f + g * g)), it = /*#__PURE__*/ yo(ds(g - f) / 2, +r.apply(this, arguments)), M = it, S = it, x, y;
            if (H > yt) {
                var D = /*#__PURE__*/ ps(H / f * jt(j)), v = /*#__PURE__*/ ps(H / g * jt(j));
                (w -= D * 2) > yt ? (D *= A ? 1 : -1, F += D, P -= D) : (w = 0, F = P = (C + k) / 2), (X -= v * 2) > yt ? (v *= A ? 1 : -1, $ += v, O -= v) : (X = 0, $ = O = (C + k) / 2);
            }
            var N = g * Fe($), R = g * jt($), Y = f * Fe(P), rt = f * jt(P);
            if (it > yt) {
                var G = g * Fe(O), nt = g * jt(O), Q = f * Fe(F), Ft = f * jt(F), Z;
                if (L < br) if (Z = /*#__PURE__*/ Ag(N, R, Q, Ft, G, nt, Y, rt)) {
                    var Ct = N - Z[0], _t = R - Z[1], lt = G - Z[0], B = nt - Z[1], U = 1 / jt(Wc((Ct * lt + _t * B) / (Ve(Ct * Ct + _t * _t) * Ve(lt * lt + B * B))) / 2), V = /*#__PURE__*/ Ve(Z[0] * Z[0] + Z[1] * Z[1]);
                    M = /*#__PURE__*/ yo(it, (f - V) / (U - 1)), S = /*#__PURE__*/ yo(it, (g - V) / (U + 1));
                } else M = S = 0;
            }
            X > yt ? S > yt ? (x = /*#__PURE__*/ _o(Q, Ft, N, R, g, S, A), y = /*#__PURE__*/ _o(G, nt, Y, rt, g, S, A), l.moveTo(x.cx + x.x01, x.cy + x.y01), S < it ? l.arc(x.cx, x.cy, S, /*#__PURE__*/ vt(x.y01, x.x01), /*#__PURE__*/ vt(y.y01, y.x01), !A) : (l.arc(x.cx, x.cy, S, /*#__PURE__*/ vt(x.y01, x.x01), /*#__PURE__*/ vt(x.y11, x.x11), !A), l.arc(0, 0, g, /*#__PURE__*/ vt(x.cy + x.y11, x.cx + x.x11), /*#__PURE__*/ vt(y.cy + y.y11, y.cx + y.x11), !A), l.arc(y.cx, y.cy, S, /*#__PURE__*/ vt(y.y11, y.x11), /*#__PURE__*/ vt(y.y01, y.x01), !A))) : (l.moveTo(N, R), l.arc(0, 0, g, $, O, !A)) : l.moveTo(N, R), !(f > yt) || !(w > yt) ? l.lineTo(Y, rt) : M > yt ? (x = /*#__PURE__*/ _o(Y, rt, G, nt, f, -M, A), y = /*#__PURE__*/ _o(N, R, Q, Ft, f, -M, A), l.lineTo(x.cx + x.x01, x.cy + x.y01), M < it ? l.arc(x.cx, x.cy, M, /*#__PURE__*/ vt(x.y01, x.x01), /*#__PURE__*/ vt(y.y01, y.x01), !A) : (l.arc(x.cx, x.cy, M, /*#__PURE__*/ vt(x.y01, x.x01), /*#__PURE__*/ vt(x.y11, x.x11), !A), l.arc(0, 0, f, /*#__PURE__*/ vt(x.cy + x.y11, x.cx + x.x11), /*#__PURE__*/ vt(y.cy + y.y11, y.cx + y.x11), A), l.arc(y.cx, y.cy, M, /*#__PURE__*/ vt(y.y11, y.x11), /*#__PURE__*/ vt(y.y01, y.x01), !A))) : l.arc(0, 0, f, P, F, A);
        }
        if (l.closePath(), u) return l = null, u + "" || null;
    }
    return m$1(h, "arc"), h.centroid = function() {
        var u = (+t.apply(this, arguments) + +e.apply(this, arguments)) / 2, p = (+n.apply(this, arguments) + +a.apply(this, arguments)) / 2 - br / 2;
        return [
            Fe(p) * u,
            jt(p) * u
        ];
    }, h.innerRadius = function(u) {
        return arguments.length ? (t = typeof u == "function" ? u : at(+u), h) : t;
    }, h.outerRadius = function(u) {
        return arguments.length ? (e = typeof u == "function" ? u : at(+u), h) : e;
    }, h.cornerRadius = function(u) {
        return arguments.length ? (r = typeof u == "function" ? u : at(+u), h) : r;
    }, h.padRadius = function(u) {
        return arguments.length ? (o = u == null ? null : typeof u == "function" ? u : at(+u), h) : o;
    }, h.startAngle = function(u) {
        return arguments.length ? (n = typeof u == "function" ? u : at(+u), h) : n;
    }, h.endAngle = function(u) {
        return arguments.length ? (a = typeof u == "function" ? u : at(+u), h) : a;
    }, h.padAngle = function(u) {
        return arguments.length ? (s = typeof u == "function" ? u : at(+u), h) : s;
    }, h.context = function(u) {
        return arguments.length ? (l = u ?? null, h) : l;
    }, h;
}
m$1(Uc, "default");
function Yc(t) {
    this._context = t;
}
m$1(Yc, "Linear");
Yc.prototype = {
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
function bo(t) {
    return new Yc(t);
}
m$1(bo, "default");
function oi(t) {
    return typeof t == "object" && "length" in t ? t : Array.from(t);
}
m$1(oi, "default");
function Gc(t) {
    return t[0];
}
m$1(Gc, "x");
function Vc(t) {
    return t[1];
}
m$1(Vc, "y");
function Xc(t, e) {
    var r = /*#__PURE__*/ at(true), o = null, n = bo, a = null, s = /*#__PURE__*/ Co(l);
    t = typeof t == "function" ? t : t === void 0 ? Gc : at(t), e = typeof e == "function" ? e : e === void 0 ? Vc : at(e);
    function l(c) {
        var h, u = (c = /*#__PURE__*/ oi(c)).length, p, f = false, g;
        for(o == null && (a = /*#__PURE__*/ n(g = /*#__PURE__*/ s())), h = 0; h <= u; ++h)!(h < u && r(p = c[h], h, c)) === f && ((f = !f) ? a.lineStart() : a.lineEnd()), f && a.point(+t(p, h, c), +e(p, h, c));
        if (g) return a = null, g + "" || null;
    }
    return m$1(l, "line"), l.x = function(c) {
        return arguments.length ? (t = typeof c == "function" ? c : at(+c), l) : t;
    }, l.y = function(c) {
        return arguments.length ? (e = typeof c == "function" ? c : at(+c), l) : e;
    }, l.defined = function(c) {
        return arguments.length ? (r = typeof c == "function" ? c : at(!!c), l) : r;
    }, l.curve = function(c) {
        return arguments.length ? (n = c, o != null && (a = /*#__PURE__*/ n(o)), l) : n;
    }, l.context = function(c) {
        return arguments.length ? (c == null ? o = a = null : a = /*#__PURE__*/ n(o = c), l) : o;
    }, l;
}
m$1(Xc, "default");
function xs(t, e) {
    return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
m$1(xs, "default");
function ys(t) {
    return t;
}
m$1(ys, "default");
function jc() {
    var t = ys, e = xs, r = null, o = /*#__PURE__*/ at(0), n = /*#__PURE__*/ at(Tr), a = /*#__PURE__*/ at(0);
    function s(l) {
        var c, h = (l = /*#__PURE__*/ oi(l)).length, u, p, f = 0, g = new Array(h), C = new Array(h), k = +o.apply(this, arguments), L = /*#__PURE__*/ Math.min(Tr, /*#__PURE__*/ Math.max(-Tr, n.apply(this, arguments) - k)), A, $ = /*#__PURE__*/ Math.min(Math.abs(L) / h, /*#__PURE__*/ a.apply(this, arguments)), O = $ * (L < 0 ? -1 : 1), F;
        for(c = 0; c < h; ++c)(F = C[g[c] = c] = +t(l[c], c, l)) > 0 && (f += F);
        for(e != null ? g.sort(function(P, w) {
            return e(C[P], C[w]);
        }) : r != null && g.sort(function(P, w) {
            return r(l[P], l[w]);
        }), c = 0, p = f ? (L - h * O) / f : 0; c < h; ++c, k = A)u = g[c], F = C[u], A = k + (F > 0 ? F * p : 0) + O, C[u] = {
            data: l[u],
            index: c,
            value: F,
            startAngle: k,
            endAngle: A,
            padAngle: $
        };
        return C;
    }
    return m$1(s, "pie"), s.value = function(l) {
        return arguments.length ? (t = typeof l == "function" ? l : at(+l), s) : t;
    }, s.sortValues = function(l) {
        return arguments.length ? (e = l, r = null, s) : e;
    }, s.sort = function(l) {
        return arguments.length ? (r = l, e = null, s) : r;
    }, s.startAngle = function(l) {
        return arguments.length ? (o = typeof l == "function" ? l : at(+l), s) : o;
    }, s.endAngle = function(l) {
        return arguments.length ? (n = typeof l == "function" ? l : at(+l), s) : n;
    }, s.padAngle = function(l) {
        return arguments.length ? (a = typeof l == "function" ? l : at(+l), s) : a;
    }, s;
}
m$1(jc, "default");
var To = class {
    static{
        m$1(this, "Bump");
    }
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
function Eg(t) {
    return new To(t, true);
}
m$1(Eg, "bumpX");
function Dg(t) {
    return new To(t, false);
}
m$1(Dg, "bumpY");
function kr(t, e, r) {
    t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + e) / 6, (t._y0 + 4 * t._y1 + r) / 6);
}
m$1(kr, "point");
function ni(t) {
    this._context = t;
}
m$1(ni, "Basis");
ni.prototype = {
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
                kr(this, this._x1, this._y1);
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
                kr(this, t, e);
                break;
        }
        this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e;
    }, "point")
};
function Zc(t) {
    return new ni(t);
}
m$1(Zc, "default");
function qt() {}
m$1(qt, "default");
function Kc(t) {
    this._context = t;
}
m$1(Kc, "BasisClosed");
Kc.prototype = {
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
                kr(this, t, e);
                break;
        }
        this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e;
    }, "point")
};
function Qc(t) {
    return new Kc(t);
}
m$1(Qc, "default");
function Jc(t) {
    this._context = t;
}
m$1(Jc, "BasisOpen");
Jc.prototype = {
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
                kr(this, t, e);
                break;
        }
        this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e;
    }, "point")
};
function tu(t) {
    return new Jc(t);
}
m$1(tu, "default");
function eu(t, e) {
    this._basis = new ni(t), this._beta = e;
}
m$1(eu, "Bundle");
eu.prototype = {
    lineStart: /*#__PURE__*/ m$1(function() {
        this._x = [], this._y = [], this._basis.lineStart();
    }, "lineStart"),
    lineEnd: /*#__PURE__*/ m$1(function() {
        var t = this._x, e = this._y, r = t.length - 1;
        if (r > 0) for(var o = t[0], n = e[0], a = t[r] - o, s = e[r] - n, l = -1, c; ++l <= r;)c = l / r, this._basis.point(this._beta * t[l] + (1 - this._beta) * (o + c * a), this._beta * e[l] + (1 - this._beta) * (n + c * s));
        this._x = this._y = null, this._basis.lineEnd();
    }, "lineEnd"),
    point: /*#__PURE__*/ m$1(function(t, e) {
        this._x.push(+t), this._y.push(+e);
    }, "point")
};
var Og = /*#__PURE__*/ m$1(function t(e) {
    function r(o) {
        return e === 1 ? new ni(o) : new eu(o, e);
    }
    return m$1(r, "bundle"), r.beta = function(o) {
        return t(+o);
    }, r;
}, "custom")(.85);
function Sr(t, e, r) {
    t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - e), t._y2 + t._k * (t._y1 - r), t._x2, t._y2);
}
m$1(Sr, "point");
function ko(t, e) {
    this._context = t, this._k = (1 - e) / 6;
}
m$1(ko, "Cardinal");
ko.prototype = {
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
                Sr(this, this._x1, this._y1);
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
                Sr(this, t, e);
                break;
        }
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
    }, "point")
};
var Ig = /*#__PURE__*/ m$1(function t(e) {
    function r(o) {
        return new ko(o, e);
    }
    return m$1(r, "cardinal"), r.tension = function(o) {
        return t(+o);
    }, r;
}, "custom")(0);
function So(t, e) {
    this._context = t, this._k = (1 - e) / 6;
}
m$1(So, "CardinalClosed");
So.prototype = {
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
                Sr(this, t, e);
                break;
        }
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
    }, "point")
};
var zg = /*#__PURE__*/ m$1(function t(e) {
    function r(o) {
        return new So(o, e);
    }
    return m$1(r, "cardinal"), r.tension = function(o) {
        return t(+o);
    }, r;
}, "custom")(0);
function vo(t, e) {
    this._context = t, this._k = (1 - e) / 6;
}
m$1(vo, "CardinalOpen");
vo.prototype = {
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
                Sr(this, t, e);
                break;
        }
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
    }, "point")
};
var Rg = /*#__PURE__*/ m$1(function t(e) {
    function r(o) {
        return new vo(o, e);
    }
    return m$1(r, "cardinal"), r.tension = function(o) {
        return t(+o);
    }, r;
}, "custom")(0);
function ai(t, e, r) {
    var o = t._x1, n = t._y1, a = t._x2, s = t._y2;
    if (t._l01_a > yt) {
        var l = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a, c = 3 * t._l01_a * (t._l01_a + t._l12_a);
        o = (o * l - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / c, n = (n * l - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / c;
    }
    if (t._l23_a > yt) {
        var h = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a, u = 3 * t._l23_a * (t._l23_a + t._l12_a);
        a = (a * h + t._x1 * t._l23_2a - e * t._l12_2a) / u, s = (s * h + t._y1 * t._l23_2a - r * t._l12_2a) / u;
    }
    t._context.bezierCurveTo(o, n, a, s, t._x2, t._y2);
}
m$1(ai, "point");
function ru(t, e) {
    this._context = t, this._alpha = e;
}
m$1(ru, "CatmullRom");
ru.prototype = {
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
                ai(this, t, e);
                break;
        }
        this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
    }, "point")
};
var Ng = /*#__PURE__*/ m$1(function t(e) {
    function r(o) {
        return e ? new ru(o, e) : new ko(o, 0);
    }
    return m$1(r, "catmullRom"), r.alpha = function(o) {
        return t(+o);
    }, r;
}, "custom")(.5);
function iu(t, e) {
    this._context = t, this._alpha = e;
}
m$1(iu, "CatmullRomClosed");
iu.prototype = {
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
                ai(this, t, e);
                break;
        }
        this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
    }, "point")
};
var qg = /*#__PURE__*/ m$1(function t(e) {
    function r(o) {
        return e ? new iu(o, e) : new So(o, 0);
    }
    return m$1(r, "catmullRom"), r.alpha = function(o) {
        return t(+o);
    }, r;
}, "custom")(.5);
function ou(t, e) {
    this._context = t, this._alpha = e;
}
m$1(ou, "CatmullRomOpen");
ou.prototype = {
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
                ai(this, t, e);
                break;
        }
        this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
    }, "point")
};
var Pg = /*#__PURE__*/ m$1(function t(e) {
    function r(o) {
        return e ? new ou(o, e) : new vo(o, 0);
    }
    return m$1(r, "catmullRom"), r.alpha = function(o) {
        return t(+o);
    }, r;
}, "custom")(.5);
function nu(t) {
    this._context = t;
}
m$1(nu, "LinearClosed");
nu.prototype = {
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
function au(t) {
    return new nu(t);
}
m$1(au, "default");
function su(t) {
    return t < 0 ? -1 : 1;
}
m$1(su, "sign");
function lu(t, e, r) {
    var o = t._x1 - t._x0, n = e - t._x1, a = (t._y1 - t._y0) / (o || n < 0 && -0), s = (r - t._y1) / (n || o < 0 && -0), l = (a * n + s * o) / (o + n);
    return (su(a) + su(s)) * Math.min(/*#__PURE__*/ Math.abs(a), /*#__PURE__*/ Math.abs(s), .5 * Math.abs(l)) || 0;
}
m$1(lu, "slope3");
function hu(t, e) {
    var r = t._x1 - t._x0;
    return r ? (3 * (t._y1 - t._y0) / r - e) / 2 : e;
}
m$1(hu, "slope2");
function Cs(t, e, r) {
    var o = t._x0, n = t._y0, a = t._x1, s = t._y1, l = (a - o) / 3;
    t._context.bezierCurveTo(o + l, n + l * e, a - l, s - l * r, a, s);
}
m$1(Cs, "point");
function wo(t) {
    this._context = t;
}
m$1(wo, "MonotoneX");
wo.prototype = {
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
                Cs(this, this._t0, /*#__PURE__*/ hu(this, this._t0));
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
                    this._point = 3, Cs(this, /*#__PURE__*/ hu(this, r = /*#__PURE__*/ lu(this, t, e)), r);
                    break;
                default:
                    Cs(this, this._t0, r = /*#__PURE__*/ lu(this, t, e));
                    break;
            }
            this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e, this._t0 = r;
        }
    }, "point")
};
function cu(t) {
    this._context = new uu(t);
}
m$1(cu, "MonotoneY");
(cu.prototype = /*#__PURE__*/ Object.create(wo.prototype)).point = function(t, e) {
    wo.prototype.point.call(this, e, t);
};
function uu(t) {
    this._context = t;
}
m$1(uu, "ReflectContext");
uu.prototype = {
    moveTo: /*#__PURE__*/ m$1(function(t, e) {
        this._context.moveTo(e, t);
    }, "moveTo"),
    closePath: /*#__PURE__*/ m$1(function() {
        this._context.closePath();
    }, "closePath"),
    lineTo: /*#__PURE__*/ m$1(function(t, e) {
        this._context.lineTo(e, t);
    }, "lineTo"),
    bezierCurveTo: /*#__PURE__*/ m$1(function(t, e, r, o, n, a) {
        this._context.bezierCurveTo(e, t, o, r, a, n);
    }, "bezierCurveTo")
};
function Wg(t) {
    return new wo(t);
}
m$1(Wg, "monotoneX");
function $g(t) {
    return new cu(t);
}
m$1($g, "monotoneY");
function du(t) {
    this._context = t;
}
m$1(du, "Natural");
du.prototype = {
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
        else for(var o = /*#__PURE__*/ fu(t), n = /*#__PURE__*/ fu(e), a = 0, s = 1; s < r; ++a, ++s)this._context.bezierCurveTo(o[0][a], n[0][a], o[1][a], n[1][a], t[s], e[s]);
        (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
    }, "lineEnd"),
    point: /*#__PURE__*/ m$1(function(t, e) {
        this._x.push(+t), this._y.push(+e);
    }, "point")
};
function fu(t) {
    var e, r = t.length - 1, o, n = new Array(r), a = new Array(r), s = new Array(r);
    for(n[0] = 0, a[0] = 2, s[0] = t[0] + 2 * t[1], e = 1; e < r - 1; ++e)n[e] = 1, a[e] = 4, s[e] = 4 * t[e] + 2 * t[e + 1];
    for(n[r - 1] = 2, a[r - 1] = 7, s[r - 1] = 8 * t[r - 1] + t[r], e = 1; e < r; ++e)o = n[e] / a[e - 1], a[e] -= o, s[e] -= o * s[e - 1];
    for(n[r - 1] = s[r - 1] / a[r - 1], e = r - 2; e >= 0; --e)n[e] = (s[e] - n[e + 1]) / a[e];
    for(a[r - 1] = (t[r] + n[r - 1]) / 2, e = 0; e < r - 1; ++e)a[e] = 2 * t[e + 1] - n[e + 1];
    return [
        n,
        a
    ];
}
m$1(fu, "controlPoints");
function pu(t) {
    return new du(t);
}
m$1(pu, "default");
function Bo(t, e) {
    this._context = t, this._t = e;
}
m$1(Bo, "Step");
Bo.prototype = {
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
function mu(t) {
    return new Bo(t, .5);
}
m$1(mu, "default");
function Hg(t) {
    return new Bo(t, 0);
}
m$1(Hg, "stepBefore");
function Ug(t) {
    return new Bo(t, 1);
}
m$1(Ug, "stepAfter");
var Yg = {
    value: /*#__PURE__*/ m$1(()=>{}, "value")
};
function xu() {
    for(var t = 0, e = arguments.length, r = {}, o; t < e; ++t){
        if (!(o = arguments[t] + "") || o in r || /[\s.]/.test(o)) throw new Error("illegal type: " + o);
        r[o] = [];
    }
    return new Fo(r);
}
m$1(xu, "dispatch");
function Fo(t) {
    this._ = t;
}
m$1(Fo, "Dispatch");
function Gg(t, e) {
    return t.trim().split(/^|\s+/).map(function(r) {
        var o = "", n = /*#__PURE__*/ r.indexOf(".");
        if (n >= 0 && (o = /*#__PURE__*/ r.slice(n + 1), r = /*#__PURE__*/ r.slice(0, n)), r && !e.hasOwnProperty(r)) throw new Error("unknown type: " + r);
        return {
            type: r,
            name: o
        };
    });
}
m$1(Gg, "parseTypenames");
Fo.prototype = xu.prototype = {
    constructor: Fo,
    on: /*#__PURE__*/ m$1(function(t, e) {
        var r = this._, o = /*#__PURE__*/ Gg(t + "", r), n, a = -1, s = o.length;
        if (arguments.length < 2) {
            for(; ++a < s;)if ((n = (t = o[a]).type) && (n = /*#__PURE__*/ Vg(r[n], t.name))) return n;
            return;
        }
        if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
        for(; ++a < s;)if (n = (t = o[a]).type) r[n] = /*#__PURE__*/ gu(r[n], t.name, e);
        else if (e == null) for(n in r)r[n] = /*#__PURE__*/ gu(r[n], t.name, null);
        return this;
    }, "on"),
    copy: /*#__PURE__*/ m$1(function() {
        var t = {}, e = this._;
        for(var r in e)t[r] = /*#__PURE__*/ e[r].slice();
        return new Fo(t);
    }, "copy"),
    call: /*#__PURE__*/ m$1(function(t, e) {
        if ((n = arguments.length - 2) > 0) for(var r = new Array(n), o = 0, n, a; o < n; ++o)r[o] = arguments[o + 2];
        if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        for(a = this._[t], o = 0, n = a.length; o < n; ++o)a[o].value.apply(e, r);
    }, "call"),
    apply: /*#__PURE__*/ m$1(function(t, e, r) {
        if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        for(var o = this._[t], n = 0, a = o.length; n < a; ++n)o[n].value.apply(e, r);
    }, "apply")
};
function Vg(t, e) {
    for(var r = 0, o = t.length, n; r < o; ++r)if ((n = t[r]).name === e) return n.value;
}
m$1(Vg, "get");
function gu(t, e, r) {
    for(var o = 0, n = t.length; o < n; ++o)if (t[o].name === e) {
        t[o] = Yg, t = /*#__PURE__*/ t.slice(0, o).concat(/*#__PURE__*/ t.slice(o + 1));
        break;
    }
    return r != null && t.push({
        name: e,
        value: r
    }), t;
}
m$1(gu, "set");
var _s = xu;
var vr = 0, li = 0, si = 0, Cu = 1e3, Lo, hi, Mo = 0, Ze = 0, Ao = 0, ci = typeof performance == "object" && performance.now ? performance : Date, _u = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
    setTimeout(t, 17);
};
function fi() {
    return Ze || (_u(Xg), Ze = ci.now() + Ao);
}
m$1(fi, "now");
function Xg() {
    Ze = 0;
}
m$1(Xg, "clearNow");
function ui() {
    this._call = this._time = this._next = null;
}
m$1(ui, "Timer");
ui.prototype = Eo.prototype = {
    constructor: ui,
    restart: /*#__PURE__*/ m$1(function(t, e, r) {
        if (typeof t != "function") throw new TypeError("callback is not a function");
        r = (r == null ? fi() : +r) + (e == null ? 0 : +e), !this._next && hi !== this && (hi ? hi._next = this : Lo = this, hi = this), this._call = t, this._time = r, bs();
    }, "restart"),
    stop: /*#__PURE__*/ m$1(function() {
        this._call && (this._call = null, this._time = 1 / 0, bs());
    }, "stop")
};
function Eo(t, e, r) {
    var o = new ui;
    return o.restart(t, e, r), o;
}
m$1(Eo, "timer");
function bu() {
    fi(), ++vr;
    for(var t = Lo, e; t;)(e = Ze - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
    --vr;
}
m$1(bu, "timerFlush");
function yu() {
    Ze = (Mo = /*#__PURE__*/ ci.now()) + Ao, vr = li = 0;
    try {
        bu();
    } finally{
        vr = 0, Zg(), Ze = 0;
    }
}
m$1(yu, "wake");
function jg() {
    var t = /*#__PURE__*/ ci.now(), e = t - Mo;
    e > Cu && (Ao -= e, Mo = t);
}
m$1(jg, "poke");
function Zg() {
    for(var t, e = Lo, r, o = 1 / 0; e;)e._call ? (o > e._time && (o = e._time), t = e, e = e._next) : (r = e._next, e._next = null, e = t ? t._next = r : Lo = r);
    hi = t, bs(o);
}
m$1(Zg, "nap");
function bs(t) {
    if (!vr) {
        li && (li = /*#__PURE__*/ clearTimeout(li));
        var e = t - Ze;
        e > 24 ? (t < 1 / 0 && (li = /*#__PURE__*/ setTimeout(yu, t - ci.now() - Ao)), si && (si = /*#__PURE__*/ clearInterval(si))) : (si || (Mo = /*#__PURE__*/ ci.now(), si = /*#__PURE__*/ setInterval(jg, Cu)), vr = 1, _u(yu));
    }
}
m$1(bs, "sleep");
function di(t, e, r) {
    var o = new ui;
    return e = e == null ? 0 : +e, o.restart((n)=>{
        o.stop(), t(n + e);
    }, e, r), o;
}
m$1(di, "default");
var Kg = /*#__PURE__*/ _s("start", "end", "cancel", "interrupt"), Qg = [], Su = 0, Tu = 1, Oo = 2, Do = 3, ku = 4, Io = 5, pi = 6;
function de(t, e, r, o, n, a) {
    var s = t.__transition;
    if (!s) t.__transition = {};
    else if (r in s) return;
    Jg(t, r, {
        name: e,
        index: o,
        group: n,
        on: Kg,
        tween: Qg,
        time: a.time,
        delay: a.delay,
        duration: a.duration,
        ease: a.ease,
        timer: null,
        state: Su
    });
}
m$1(de, "default");
function mi(t, e) {
    var r = /*#__PURE__*/ dt(t, e);
    if (r.state > Su) throw new Error("too late; already scheduled");
    return r;
}
m$1(mi, "init");
function wt(t, e) {
    var r = /*#__PURE__*/ dt(t, e);
    if (r.state > Do) throw new Error("too late; already running");
    return r;
}
m$1(wt, "set");
function dt(t, e) {
    var r = t.__transition;
    if (!r || !(r = r[e])) throw new Error("transition not found");
    return r;
}
m$1(dt, "get");
function Jg(t, e, r) {
    var o = t.__transition, n;
    o[e] = r, r.timer = /*#__PURE__*/ Eo(a, 0, r.time);
    function a(h) {
        r.state = Tu, r.timer.restart(s, r.delay, r.time), r.delay <= h && s(h - r.delay);
    }
    m$1(a, "schedule");
    function s(h) {
        var u, p, f, g;
        if (r.state !== Tu) return c();
        for(u in o)if (g = o[u], g.name === r.name) {
            if (g.state === Do) return di(s);
            g.state === ku ? (g.state = pi, g.timer.stop(), g.on.call("interrupt", t, t.__data__, g.index, g.group), delete o[u]) : +u < e && (g.state = pi, g.timer.stop(), g.on.call("cancel", t, t.__data__, g.index, g.group), delete o[u]);
        }
        if (di(function() {
            r.state === Do && (r.state = ku, r.timer.restart(l, r.delay, r.time), l(h));
        }), r.state = Oo, r.on.call("start", t, t.__data__, r.index, r.group), r.state === Oo) {
            for(r.state = Do, n = new Array(f = r.tween.length), u = 0, p = -1; u < f; ++u)(g = /*#__PURE__*/ r.tween[u].value.call(t, t.__data__, r.index, r.group)) && (n[++p] = g);
            n.length = p + 1;
        }
    }
    m$1(s, "start");
    function l(h) {
        for(var u = h < r.duration ? r.ease.call(null, h / r.duration) : (r.timer.restart(c), r.state = Io, 1), p = -1, f = n.length; ++p < f;)n[p].call(t, u);
        r.state === Io && (r.on.call("end", t, t.__data__, r.index, r.group), c());
    }
    m$1(l, "tick");
    function c() {
        r.state = pi, r.timer.stop(), delete o[e];
        for(var h in o)return;
        delete t.__transition;
    }
    m$1(c, "stop");
}
m$1(Jg, "create");
function gi(t, e) {
    var r = t.__transition, o, n, a = true, s;
    if (r) {
        e = e == null ? null : e + "";
        for(s in r){
            if ((o = r[s]).name !== e) {
                a = false;
                continue;
            }
            n = o.state > Oo && o.state < Io, o.state = pi, o.timer.stop(), o.on.call(n ? "interrupt" : "cancel", t, t.__data__, o.index, o.group), delete r[s];
        }
        a && delete t.__transition;
    }
}
m$1(gi, "default");
function Ts(t) {
    return this.each(function() {
        gi(this, t);
    });
}
m$1(Ts, "default");
function tx(t, e) {
    var r, o;
    return function() {
        var n = /*#__PURE__*/ wt(this, t), a = n.tween;
        if (a !== r) {
            o = r = a;
            for(var s = 0, l = o.length; s < l; ++s)if (o[s].name === e) {
                o = /*#__PURE__*/ o.slice(), o.splice(s, 1);
                break;
            }
        }
        n.tween = o;
    };
}
m$1(tx, "tweenRemove");
function ex(t, e, r) {
    var o, n;
    if (typeof r != "function") throw new Error;
    return function() {
        var a = /*#__PURE__*/ wt(this, t), s = a.tween;
        if (s !== o) {
            n = /*#__PURE__*/ (o = s).slice();
            for(var l = {
                name: e,
                value: r
            }, c = 0, h = n.length; c < h; ++c)if (n[c].name === e) {
                n[c] = l;
                break;
            }
            c === h && n.push(l);
        }
        a.tween = n;
    };
}
m$1(ex, "tweenFunction");
function ks(t, e) {
    var r = this._id;
    if (t += "", arguments.length < 2) {
        for(var o = dt(/*#__PURE__*/ this.node(), r).tween, n = 0, a = o.length, s; n < a; ++n)if ((s = o[n]).name === t) return s.value;
        return null;
    }
    return this.each(/*#__PURE__*/ (e == null ? tx : ex)(r, t, e));
}
m$1(ks, "default");
function wr(t, e, r) {
    var o = t._id;
    return t.each(function() {
        var n = /*#__PURE__*/ wt(this, o);
        (n.value || (n.value = {}))[e] = /*#__PURE__*/ r.apply(this, arguments);
    }), function(n) {
        return dt(n, o).value[e];
    };
}
m$1(wr, "tweenValue");
function xi(t, e) {
    var r;
    return (typeof e == "number" ? gt : e instanceof Gt ? Ne : (r = /*#__PURE__*/ Gt(e)) ? (e = r, Ne) : fr)(t, e);
}
m$1(xi, "default");
function rx(t) {
    return function() {
        this.removeAttribute(t);
    };
}
m$1(rx, "attrRemove");
function ix(t) {
    return function() {
        this.removeAttributeNS(t.space, t.local);
    };
}
m$1(ix, "attrRemoveNS");
function ox(t, e, r) {
    var o, n = r + "", a;
    return function() {
        var s = /*#__PURE__*/ this.getAttribute(t);
        return s === n ? null : s === o ? a : a = /*#__PURE__*/ e(o = s, r);
    };
}
m$1(ox, "attrConstant");
function nx(t, e, r) {
    var o, n = r + "", a;
    return function() {
        var s = /*#__PURE__*/ this.getAttributeNS(t.space, t.local);
        return s === n ? null : s === o ? a : a = /*#__PURE__*/ e(o = s, r);
    };
}
m$1(nx, "attrConstantNS");
function ax(t, e, r) {
    var o, n, a;
    return function() {
        var s, l = /*#__PURE__*/ r(this), c;
        return l == null ? void this.removeAttribute(t) : (s = /*#__PURE__*/ this.getAttribute(t), c = l + "", s === c ? null : s === o && c === n ? a : (n = c, a = /*#__PURE__*/ e(o = s, l)));
    };
}
m$1(ax, "attrFunction");
function sx(t, e, r) {
    var o, n, a;
    return function() {
        var s, l = /*#__PURE__*/ r(this), c;
        return l == null ? void this.removeAttributeNS(t.space, t.local) : (s = /*#__PURE__*/ this.getAttributeNS(t.space, t.local), c = l + "", s === c ? null : s === o && c === n ? a : (n = c, a = /*#__PURE__*/ e(o = s, l)));
    };
}
m$1(sx, "attrFunctionNS");
function Ss(t, e) {
    var r = /*#__PURE__*/ Qt(t), o = r === "transform" ? Sa : xi;
    return this.attrTween(t, typeof e == "function" ? (r.local ? sx : ax)(r, o, /*#__PURE__*/ wr(this, "attr." + t, e)) : e == null ? (r.local ? ix : rx)(r) : (r.local ? nx : ox)(r, o, e));
}
m$1(Ss, "default");
function lx(t, e) {
    return function(r) {
        this.setAttribute(t, /*#__PURE__*/ e.call(this, r));
    };
}
m$1(lx, "attrInterpolate");
function hx(t, e) {
    return function(r) {
        this.setAttributeNS(t.space, t.local, /*#__PURE__*/ e.call(this, r));
    };
}
m$1(hx, "attrInterpolateNS");
function cx(t, e) {
    var r, o;
    function n() {
        var a = /*#__PURE__*/ e.apply(this, arguments);
        return a !== o && (r = (o = a) && hx(t, a)), r;
    }
    return m$1(n, "tween"), n._value = e, n;
}
m$1(cx, "attrTweenNS");
function ux(t, e) {
    var r, o;
    function n() {
        var a = /*#__PURE__*/ e.apply(this, arguments);
        return a !== o && (r = (o = a) && lx(t, a)), r;
    }
    return m$1(n, "tween"), n._value = e, n;
}
m$1(ux, "attrTween");
function vs(t, e) {
    var r = "attr." + t;
    if (arguments.length < 2) return (r = /*#__PURE__*/ this.tween(r)) && r._value;
    if (e == null) return this.tween(r, null);
    if (typeof e != "function") throw new Error;
    var o = /*#__PURE__*/ Qt(t);
    return this.tween(r, /*#__PURE__*/ (o.local ? cx : ux)(o, e));
}
m$1(vs, "default");
function fx(t, e) {
    return function() {
        mi(this, t).delay = +e.apply(this, arguments);
    };
}
m$1(fx, "delayFunction");
function dx(t, e) {
    return e = +e, function() {
        mi(this, t).delay = e;
    };
}
m$1(dx, "delayConstant");
function ws(t) {
    var e = this._id;
    return arguments.length ? this.each(/*#__PURE__*/ (typeof t == "function" ? fx : dx)(e, t)) : dt(/*#__PURE__*/ this.node(), e).delay;
}
m$1(ws, "default");
function px(t, e) {
    return function() {
        wt(this, t).duration = +e.apply(this, arguments);
    };
}
m$1(px, "durationFunction");
function mx(t, e) {
    return e = +e, function() {
        wt(this, t).duration = e;
    };
}
m$1(mx, "durationConstant");
function Bs(t) {
    var e = this._id;
    return arguments.length ? this.each(/*#__PURE__*/ (typeof t == "function" ? px : mx)(e, t)) : dt(/*#__PURE__*/ this.node(), e).duration;
}
m$1(Bs, "default");
function gx(t, e) {
    if (typeof e != "function") throw new Error;
    return function() {
        wt(this, t).ease = e;
    };
}
m$1(gx, "easeConstant");
function Fs(t) {
    var e = this._id;
    return arguments.length ? this.each(/*#__PURE__*/ gx(e, t)) : dt(/*#__PURE__*/ this.node(), e).ease;
}
m$1(Fs, "default");
function xx(t, e) {
    return function() {
        var r = /*#__PURE__*/ e.apply(this, arguments);
        if (typeof r != "function") throw new Error;
        wt(this, t).ease = r;
    };
}
m$1(xx, "easeVarying");
function Ls(t) {
    if (typeof t != "function") throw new Error;
    return this.each(/*#__PURE__*/ xx(this._id, t));
}
m$1(Ls, "default");
function Ms(t) {
    typeof t != "function" && (t = /*#__PURE__*/ ar(t));
    for(var e = this._groups, r = e.length, o = new Array(r), n = 0; n < r; ++n)for(var a = e[n], s = a.length, l = o[n] = [], c, h = 0; h < s; ++h)(c = a[h]) && t.call(c, c.__data__, h, a) && l.push(c);
    return new Ot(o, this._parents, this._name, this._id);
}
m$1(Ms, "default");
function As(t) {
    if (t._id !== this._id) throw new Error;
    for(var e = this._groups, r = t._groups, o = e.length, n = r.length, a = /*#__PURE__*/ Math.min(o, n), s = new Array(o), l = 0; l < a; ++l)for(var c = e[l], h = r[l], u = c.length, p = s[l] = new Array(u), f, g = 0; g < u; ++g)(f = c[g] || h[g]) && (p[g] = f);
    for(; l < o; ++l)s[l] = e[l];
    return new Ot(s, this._parents, this._name, this._id);
}
m$1(As, "default");
function yx(t) {
    return (t + "").trim().split(/^|\s+/).every(function(e) {
        var r = /*#__PURE__*/ e.indexOf(".");
        return r >= 0 && (e = /*#__PURE__*/ e.slice(0, r)), !e || e === "start";
    });
}
m$1(yx, "start");
function Cx(t, e, r) {
    var o, n, a = yx(e) ? mi : wt;
    return function() {
        var s = /*#__PURE__*/ a(this, t), l = s.on;
        l !== o && (n = /*#__PURE__*/ (o = l).copy()).on(e, r), s.on = n;
    };
}
m$1(Cx, "onFunction");
function Es(t, e) {
    var r = this._id;
    return arguments.length < 2 ? dt(/*#__PURE__*/ this.node(), r).on.on(t) : this.each(/*#__PURE__*/ Cx(r, t, e));
}
m$1(Es, "default");
function _x(t) {
    return function() {
        var e = this.parentNode;
        for(var r in this.__transition)if (+r !== t) return;
        e && e.removeChild(this);
    };
}
m$1(_x, "removeFunction");
function Ds() {
    return this.on("end.remove", /*#__PURE__*/ _x(this._id));
}
m$1(Ds, "default");
function Os(t) {
    var e = this._name, r = this._id;
    typeof t != "function" && (t = /*#__PURE__*/ Ce(t));
    for(var o = this._groups, n = o.length, a = new Array(n), s = 0; s < n; ++s)for(var l = o[s], c = l.length, h = a[s] = new Array(c), u, p, f = 0; f < c; ++f)(u = l[f]) && (p = /*#__PURE__*/ t.call(u, u.__data__, f, l)) && ("__data__" in u && (p.__data__ = u.__data__), h[f] = p, de(h[f], e, r, f, h, /*#__PURE__*/ dt(u, r)));
    return new Ot(a, this._parents, e, r);
}
m$1(Os, "default");
function Is(t) {
    var e = this._name, r = this._id;
    typeof t != "function" && (t = /*#__PURE__*/ nr(t));
    for(var o = this._groups, n = o.length, a = [], s = [], l = 0; l < n; ++l)for(var c = o[l], h = c.length, u, p = 0; p < h; ++p)if (u = c[p]) {
        for(var f = /*#__PURE__*/ t.call(u, u.__data__, p, c), g, C = /*#__PURE__*/ dt(u, r), k = 0, L = f.length; k < L; ++k)(g = f[k]) && de(g, e, r, k, f, C);
        a.push(f), s.push(u);
    }
    return new Ot(a, s, e, r);
}
m$1(Is, "default");
var bx = le.prototype.constructor;
function zs() {
    return new bx(this._groups, this._parents);
}
m$1(zs, "default");
function Tx(t, e) {
    var r, o, n;
    return function() {
        var a = /*#__PURE__*/ _e(this, t), s = (this.style.removeProperty(t), _e(this, t));
        return a === s ? null : a === r && s === o ? n : n = /*#__PURE__*/ e(r = a, o = s);
    };
}
m$1(Tx, "styleNull");
function vu(t) {
    return function() {
        this.style.removeProperty(t);
    };
}
m$1(vu, "styleRemove");
function kx(t, e, r) {
    var o, n = r + "", a;
    return function() {
        var s = /*#__PURE__*/ _e(this, t);
        return s === n ? null : s === o ? a : a = /*#__PURE__*/ e(o = s, r);
    };
}
m$1(kx, "styleConstant");
function Sx(t, e, r) {
    var o, n, a;
    return function() {
        var s = /*#__PURE__*/ _e(this, t), l = /*#__PURE__*/ r(this), c = l + "";
        return l == null && (c = l = (this.style.removeProperty(t), _e(this, t))), s === c ? null : s === o && c === n ? a : (n = c, a = /*#__PURE__*/ e(o = s, l));
    };
}
m$1(Sx, "styleFunction");
function vx(t, e) {
    var r, o, n, a = "style." + e, s = "end." + a, l;
    return function() {
        var c = /*#__PURE__*/ wt(this, t), h = c.on, u = c.value[a] == null ? l || (l = /*#__PURE__*/ vu(e)) : void 0;
        (h !== r || n !== u) && (o = /*#__PURE__*/ (r = h).copy()).on(s, n = u), c.on = o;
    };
}
m$1(vx, "styleMaybeRemove");
function Rs(t, e, r) {
    var o = (t += "") == "transform" ? ka : xi;
    return e == null ? this.styleTween(t, /*#__PURE__*/ Tx(t, o)).on("end.style." + t, /*#__PURE__*/ vu(t)) : typeof e == "function" ? this.styleTween(t, /*#__PURE__*/ Sx(t, o, /*#__PURE__*/ wr(this, "style." + t, e))).each(/*#__PURE__*/ vx(this._id, t)) : this.styleTween(t, /*#__PURE__*/ kx(t, o, e), r).on("end.style." + t, null);
}
m$1(Rs, "default");
function wx(t, e, r) {
    return function(o) {
        this.style.setProperty(t, /*#__PURE__*/ e.call(this, o), r);
    };
}
m$1(wx, "styleInterpolate");
function Bx(t, e, r) {
    var o, n;
    function a() {
        var s = /*#__PURE__*/ e.apply(this, arguments);
        return s !== n && (o = (n = s) && wx(t, s, r)), o;
    }
    return m$1(a, "tween"), a._value = e, a;
}
m$1(Bx, "styleTween");
function Ns(t, e, r) {
    var o = "style." + (t += "");
    if (arguments.length < 2) return (o = /*#__PURE__*/ this.tween(o)) && o._value;
    if (e == null) return this.tween(o, null);
    if (typeof e != "function") throw new Error;
    return this.tween(o, /*#__PURE__*/ Bx(t, e, r ?? ""));
}
m$1(Ns, "default");
function Fx(t) {
    return function() {
        this.textContent = t;
    };
}
m$1(Fx, "textConstant");
function Lx(t) {
    return function() {
        var e = /*#__PURE__*/ t(this);
        this.textContent = e ?? "";
    };
}
m$1(Lx, "textFunction");
function qs(t) {
    return this.tween("text", typeof t == "function" ? Lx(/*#__PURE__*/ wr(this, "text", t)) : Fx(t == null ? "" : t + ""));
}
m$1(qs, "default");
function Mx(t) {
    return function(e) {
        this.textContent = /*#__PURE__*/ t.call(this, e);
    };
}
m$1(Mx, "textInterpolate");
function Ax(t) {
    var e, r;
    function o() {
        var n = /*#__PURE__*/ t.apply(this, arguments);
        return n !== r && (e = (r = n) && Mx(n)), e;
    }
    return m$1(o, "tween"), o._value = t, o;
}
m$1(Ax, "textTween");
function Ps(t) {
    var e = "text";
    if (arguments.length < 1) return (e = /*#__PURE__*/ this.tween(e)) && e._value;
    if (t == null) return this.tween(e, null);
    if (typeof t != "function") throw new Error;
    return this.tween(e, /*#__PURE__*/ Ax(t));
}
m$1(Ps, "default");
function Ws() {
    for(var t = this._name, e = this._id, r = /*#__PURE__*/ zo(), o = this._groups, n = o.length, a = 0; a < n; ++a)for(var s = o[a], l = s.length, c, h = 0; h < l; ++h)if (c = s[h]) {
        var u = /*#__PURE__*/ dt(c, e);
        de(c, t, r, h, s, {
            time: u.time + u.delay + u.duration,
            delay: 0,
            duration: u.duration,
            ease: u.ease
        });
    }
    return new Ot(o, this._parents, t, r);
}
m$1(Ws, "default");
function $s() {
    var t, e, r = this, o = r._id, n = /*#__PURE__*/ r.size();
    return new Promise(function(a, s) {
        var l = {
            value: s
        }, c = {
            value: /*#__PURE__*/ m$1(function() {
                --n === 0 && a();
            }, "value")
        };
        r.each(function() {
            var h = /*#__PURE__*/ wt(this, o), u = h.on;
            u !== t && (e = /*#__PURE__*/ (t = u).copy(), e._.cancel.push(l), e._.interrupt.push(l), e._.end.push(c)), h.on = e;
        }), n === 0 && a();
    });
}
m$1($s, "default");
var Ex = 0;
function Ot(t, e, r, o) {
    this._groups = t, this._parents = e, this._name = r, this._id = o;
}
m$1(Ot, "Transition");
function wu(t) {
    return le().transition(t);
}
m$1(wu, "transition");
function zo() {
    return ++Ex;
}
m$1(zo, "newId");
var pe = le.prototype;
Ot.prototype = wu.prototype = {
    constructor: Ot,
    select: Os,
    selectAll: Is,
    selectChild: pe.selectChild,
    selectChildren: pe.selectChildren,
    filter: Ms,
    merge: As,
    selection: zs,
    transition: Ws,
    call: pe.call,
    nodes: pe.nodes,
    node: pe.node,
    size: pe.size,
    empty: pe.empty,
    each: pe.each,
    on: Es,
    attr: Ss,
    attrTween: vs,
    style: Rs,
    styleTween: Ns,
    text: qs,
    textTween: Ps,
    remove: Ds,
    tween: ks,
    delay: ws,
    duration: Bs,
    ease: Fs,
    easeVarying: Ls,
    end: $s,
    [Symbol.iterator]: pe[Symbol.iterator]
};
function Ro(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
m$1(Ro, "cubicInOut");
var Dx = {
    time: null,
    delay: 0,
    duration: 250,
    ease: Ro
};
function Ox(t, e) {
    for(var r; !(r = t.__transition) || !(r = r[e]);)if (!(t = t.parentNode)) throw new Error(`transition ${e} not found`);
    return r;
}
m$1(Ox, "inherit");
function Hs(t) {
    var e, r;
    t instanceof Ot ? (e = t._id, t = t._name) : (e = /*#__PURE__*/ zo(), (r = Dx).time = /*#__PURE__*/ fi(), t = t == null ? null : t + "");
    for(var o = this._groups, n = o.length, a = 0; a < n; ++a)for(var s = o[a], l = s.length, c, h = 0; h < l; ++h)(c = s[h]) && de(c, t, e, h, s, r || Ox(c, e));
    return new Ot(o, this._parents, t, e);
}
m$1(Hs, "default");
le.prototype.interrupt = Ts;
le.prototype.transition = Hs;
function Bu(t) {
    return [
        +t[0],
        +t[1]
    ];
}
m$1(Bu, "number1");
function Ix(t) {
    return [
        /*#__PURE__*/ Bu(t[0]),
        /*#__PURE__*/ Bu(t[1])
    ];
}
m$1(Ix, "number2");
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
        return t == null ? null : Ix(t);
    }, "input"),
    output: /*#__PURE__*/ m$1(function(t) {
        return t;
    }, "output")
});
function Us(t) {
    return {
        type: t
    };
}
m$1(Us, "type");
function Le(t, e, r) {
    this.k = t, this.x = e, this.y = r;
}
m$1(Le, "Transform");
Le.prototype = {
    constructor: Le,
    scale: /*#__PURE__*/ m$1(function(t) {
        return t === 1 ? this : new Le(this.k * t, this.x, this.y);
    }, "scale"),
    translate: /*#__PURE__*/ m$1(function(t, e) {
        return t === 0 & e === 0 ? this : new Le(this.k, this.x + this.k * t, this.y + this.k * e);
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
var Ys = new Le(1, 0, 0);
Gs.prototype = Le.prototype;
function Gs(t) {
    for(; !t.__zoom;)if (!(t = t.parentNode)) return Ys;
    return t.__zoom;
}
m$1(Gs, "transform");
export { $f as $, Qc as A, ml as B, Ai as C, De as D, Eg as E, Yx as F, GC as G, Hg as H, Il as I, Jf as J, Kf as K, no as L, Mt as M, Ng as N, Or as O, Pr as P, Qf as Q, Rf as R, Zr as S, co as T, Ug as U, Vf as V, Wg as W, Xf as X, Yf as Y, Zf as Z, oc as _, ah as a, Ll as a0, d_ as a1, p_ as a2, qc as a3, uh as a4, ch as a5, es as a6, Lp as a7, Cd as a8, xo as a9, m_ as aA, vi as aB, g_ as aC, zC as aD, ye as aE, nf as aF, dl as aG, rr as aH, Vx as aI, Si as aJ, qC as aK, e_ as aL, pl as aM, jc as aN, kg as aO, VC as aP, mn as aQ, us as aR, Cr as aa, fe as ab, fc as ac, uc as ad, we as ae, cc as af, hc as ag, xr as ah, ue as ai, gr as aj, mr as ak, ee as al, We as am, yd as an, ul as ao, rd as ap, Uc as aq, $t as ar, E as as, I as at, Gx as au, Dr as av, RC as aw, NC as ax, Nl as ay, PC as az, Vu as b, Xc as c, Zc as d, XC as e, ed as f, bo as g, hh as h, ih as i, jf as j, kh as k, $g as l, mu as m, Dg as n, Ig as o, pu as p, au as q, Pg as r, se as s, tt as t, qg as u, Rg as v, zg as w, Og as x, tu as y, zf as z };
