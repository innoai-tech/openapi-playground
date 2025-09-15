import { m as m$1, q, n } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var Bo = /*#__PURE__*/ n((fr, lr)=>{
    (function(t, e) {
        typeof fr == "object" && typeof lr < "u" ? lr.exports = /*#__PURE__*/ e() : typeof define == "function" && define.amd ? define(e) : (t = typeof globalThis < "u" ? globalThis : t || self).dayjs = /*#__PURE__*/ e();
    })(fr, function() {
        var t = 1e3, e = 6e4, n = 36e5, i = "millisecond", o = "second", a = "minute", s = "hour", u = "day", l = "week", f = "month", h = "quarter", p = "year", c = "date", m = "Invalid Date", _ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, M = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, T = {
            name: "en",
            weekdays: /*#__PURE__*/ "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            months: /*#__PURE__*/ "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            ordinal: /*#__PURE__*/ m$1(function(v) {
                var d = [
                    "th",
                    "st",
                    "nd",
                    "rd"
                ], x = v % 100;
                return "[" + v + (d[(x - 20) % 10] || d[x] || d[0]) + "]";
            }, "ordinal")
        }, k = /*#__PURE__*/ m$1(function(v, d, x) {
            var S = /*#__PURE__*/ String(v);
            return !S || S.length >= d ? v : "" + Array(d + 1 - S.length).join(x) + v;
        }, "m"), I = {
            s: k,
            z: /*#__PURE__*/ m$1(function(v) {
                var d = -v.utcOffset(), x = /*#__PURE__*/ Math.abs(d), S = /*#__PURE__*/ Math.floor(x / 60), y = x % 60;
                return (d <= 0 ? "+" : "-") + k(S, 2, "0") + ":" + k(y, 2, "0");
            }, "z"),
            m: /*#__PURE__*/ m$1(function v(d, x) {
                if (d.date() < x.date()) return -v(x, d);
                var S = 12 * (x.year() - d.year()) + (x.month() - d.month()), y = /*#__PURE__*/ d.clone().add(S, f), D = x - y < 0, $ = /*#__PURE__*/ d.clone().add(S + (D ? -1 : 1), f);
                return +(-(S + (x - y) / (D ? y - $ : $ - y)) || 0);
            }, "t"),
            a: /*#__PURE__*/ m$1(function(v) {
                return v < 0 ? Math.ceil(v) || 0 : Math.floor(v);
            }, "a"),
            p: /*#__PURE__*/ m$1(function(v) {
                return ({
                    M: f,
                    y: p,
                    w: l,
                    d: u,
                    D: c,
                    h: s,
                    m: a,
                    s: o,
                    ms: i,
                    Q: h
                })[v] || String(v || "").toLowerCase().replace(/s$/, "");
            }, "p"),
            u: /*#__PURE__*/ m$1(function(v) {
                return v === void 0;
            }, "u")
        }, C = "en", A = {};
        A[C] = T;
        var O = "$isDayjsObject", w = /*#__PURE__*/ m$1(function(v) {
            return v instanceof B || !(!v || !v[O]);
        }, "S"), Y = /*#__PURE__*/ m$1(function v(d, x, S) {
            var y;
            if (!d) return C;
            if (typeof d == "string") {
                var D = /*#__PURE__*/ d.toLowerCase();
                A[D] && (y = D), x && (A[D] = x, y = D);
                var $ = /*#__PURE__*/ d.split("-");
                if (!y && $.length > 1) return v($[0]);
            } else {
                var P = d.name;
                A[P] = d, y = P;
            }
            return !S && y && (C = y), y || !S && C;
        }, "t"), U = /*#__PURE__*/ m$1(function(v, d) {
            if (w(v)) return v.clone();
            var x = typeof d == "object" ? d : {};
            return x.date = v, x.args = arguments, new B(x);
        }, "O"), E = I;
        E.l = Y, E.i = w, E.w = function(v, d) {
            return U(v, {
                locale: d.$L,
                utc: d.$u,
                x: d.$x,
                $offset: d.$offset
            });
        };
        var B = /*#__PURE__*/ function() {
            function v(x) {
                this.$L = /*#__PURE__*/ Y(x.locale, null, true), this.parse(x), this.$x = this.$x || x.x || {}, this[O] = true;
            }
            m$1(v, "M");
            var d = v.prototype;
            return d.parse = function(x) {
                this.$d = /*#__PURE__*/ function(S) {
                    var y = S.date, D = S.utc;
                    if (y === null) return new Date(NaN);
                    if (E.u(y)) return new Date;
                    if (y instanceof Date) return new Date(y);
                    if (typeof y == "string" && !/Z$/i.test(y)) {
                        var $ = /*#__PURE__*/ y.match(_);
                        if ($) {
                            var P = $[2] - 1 || 0, z = /*#__PURE__*/ ($[7] || "0").substring(0, 3);
                            return D ? new Date(Date.UTC($[1], P, $[3] || 1, $[4] || 0, $[5] || 0, $[6] || 0, z)) : new Date($[1], P, $[3] || 1, $[4] || 0, $[5] || 0, $[6] || 0, z);
                        }
                    }
                    return new Date(y);
                }(x), this.init();
            }, d.init = function() {
                var x = this.$d;
                this.$y = /*#__PURE__*/ x.getFullYear(), this.$M = /*#__PURE__*/ x.getMonth(), this.$D = /*#__PURE__*/ x.getDate(), this.$W = /*#__PURE__*/ x.getDay(), this.$H = /*#__PURE__*/ x.getHours(), this.$m = /*#__PURE__*/ x.getMinutes(), this.$s = /*#__PURE__*/ x.getSeconds(), this.$ms = /*#__PURE__*/ x.getMilliseconds();
            }, d.$utils = function() {
                return E;
            }, d.isValid = function() {
                return this.$d.toString() !== m;
            }, d.isSame = function(x, S) {
                var y = /*#__PURE__*/ U(x);
                return this.startOf(S) <= y && y <= this.endOf(S);
            }, d.isAfter = function(x, S) {
                return U(x) < this.startOf(S);
            }, d.isBefore = function(x, S) {
                return this.endOf(S) < U(x);
            }, d.$g = function(x, S, y) {
                return E.u(x) ? this[S] : this.set(y, x);
            }, d.unix = function() {
                return Math.floor(this.valueOf() / 1e3);
            }, d.valueOf = function() {
                return this.$d.getTime();
            }, d.startOf = function(x, S) {
                var y = this, D = !!E.u(S) || S, $ = /*#__PURE__*/ E.p(x), P = /*#__PURE__*/ m$1(function(st, Z) {
                    var b = /*#__PURE__*/ E.w(y.$u ? Date.UTC(y.$y, Z, st) : new Date(y.$y, Z, st), y);
                    return D ? b : b.endOf(u);
                }, "l"), z = /*#__PURE__*/ m$1(function(st, Z) {
                    return E.w(/*#__PURE__*/ y.toDate()[st].apply(/*#__PURE__*/ y.toDate("s"), /*#__PURE__*/ (D ? [
                        0,
                        0,
                        0,
                        0
                    ] : [
                        23,
                        59,
                        59,
                        999
                    ]).slice(Z)), y);
                }, "$"), W = this.$W, X = this.$M, J = this.$D, ht = "set" + (this.$u ? "UTC" : "");
                switch($){
                    case p:
                        return D ? P(1, 0) : P(31, 11);
                    case f:
                        return D ? P(1, X) : P(0, X + 1);
                    case l:
                        var Q = this.$locale().weekStart || 0, dt = (W < Q ? W + 7 : W) - Q;
                        return P(D ? J - dt : J + (6 - dt), X);
                    case u:
                    case c:
                        return z(ht + "Hours", 0);
                    case s:
                        return z(ht + "Minutes", 1);
                    case a:
                        return z(ht + "Seconds", 2);
                    case o:
                        return z(ht + "Milliseconds", 3);
                    default:
                        return this.clone();
                }
            }, d.endOf = function(x) {
                return this.startOf(x, false);
            }, d.$set = function(x, S) {
                var y, D = /*#__PURE__*/ E.p(x), $ = "set" + (this.$u ? "UTC" : ""), P = (y = {}, y[u] = $ + "Date", y[c] = $ + "Date", y[f] = $ + "Month", y[p] = $ + "FullYear", y[s] = $ + "Hours", y[a] = $ + "Minutes", y[o] = $ + "Seconds", y[i] = $ + "Milliseconds", y)[D], z = D === u ? this.$D + (S - this.$W) : S;
                if (D === f || D === p) {
                    var W = /*#__PURE__*/ this.clone().set(c, 1);
                    W.$d[P](z), W.init(), this.$d = W.set(c, /*#__PURE__*/ Math.min(this.$D, /*#__PURE__*/ W.daysInMonth())).$d;
                } else P && this.$d[P](z);
                return this.init(), this;
            }, d.set = function(x, S) {
                return this.clone().$set(x, S);
            }, d.get = function(x) {
                return this[E.p(x)]();
            }, d.add = function(x, S) {
                var y, D = this;
                x = /*#__PURE__*/ Number(x);
                var $ = /*#__PURE__*/ E.p(S), P = /*#__PURE__*/ m$1(function(X) {
                    var J = /*#__PURE__*/ U(D);
                    return E.w(/*#__PURE__*/ J.date(J.date() + Math.round(X * x)), D);
                }, "y");
                if ($ === f) return this.set(f, this.$M + x);
                if ($ === p) return this.set(p, this.$y + x);
                if ($ === u) return P(1);
                if ($ === l) return P(7);
                var z = (y = {}, y[a] = e, y[s] = n, y[o] = t, y)[$] || 1, W = this.$d.getTime() + x * z;
                return E.w(W, this);
            }, d.subtract = function(x, S) {
                return this.add(-1 * x, S);
            }, d.format = function(x) {
                var S = this, y = /*#__PURE__*/ this.$locale();
                if (!this.isValid()) return y.invalidDate || m;
                var D = x || "YYYY-MM-DDTHH:mm:ssZ", $ = /*#__PURE__*/ E.z(this), P = this.$H, z = this.$m, W = this.$M, X = y.weekdays, J = y.months, ht = y.meridiem, Q = /*#__PURE__*/ m$1(function(Z, b, R, F) {
                    return Z && (Z[b] || Z(S, D)) || R[b].slice(0, F);
                }, "h"), dt = /*#__PURE__*/ m$1(function(Z) {
                    return E.s(P % 12 || 12, Z, "0");
                }, "d"), st = ht || function(Z, b, R) {
                    var F = Z < 12 ? "AM" : "PM";
                    return R ? F.toLowerCase() : F;
                };
                return D.replace(M, function(Z, b) {
                    return b || function(R) {
                        switch(R){
                            case "YY":
                                return String(S.$y).slice(-2);
                            case "YYYY":
                                return E.s(S.$y, 4, "0");
                            case "M":
                                return W + 1;
                            case "MM":
                                return E.s(W + 1, 2, "0");
                            case "MMM":
                                return Q(y.monthsShort, W, J, 3);
                            case "MMMM":
                                return Q(J, W);
                            case "D":
                                return S.$D;
                            case "DD":
                                return E.s(S.$D, 2, "0");
                            case "d":
                                return String(S.$W);
                            case "dd":
                                return Q(y.weekdaysMin, S.$W, X, 2);
                            case "ddd":
                                return Q(y.weekdaysShort, S.$W, X, 3);
                            case "dddd":
                                return X[S.$W];
                            case "H":
                                return String(P);
                            case "HH":
                                return E.s(P, 2, "0");
                            case "h":
                                return dt(1);
                            case "hh":
                                return dt(2);
                            case "a":
                                return st(P, z, true);
                            case "A":
                                return st(P, z, false);
                            case "m":
                                return String(z);
                            case "mm":
                                return E.s(z, 2, "0");
                            case "s":
                                return String(S.$s);
                            case "ss":
                                return E.s(S.$s, 2, "0");
                            case "SSS":
                                return E.s(S.$ms, 3, "0");
                            case "Z":
                                return $;
                        }
                        return null;
                    }(Z) || $.replace(":", "");
                });
            }, d.utcOffset = function() {
                return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
            }, d.diff = function(x, S, y) {
                var D, $ = this, P = /*#__PURE__*/ E.p(S), z = /*#__PURE__*/ U(x), W = (z.utcOffset() - this.utcOffset()) * e, X = this - z, J = /*#__PURE__*/ m$1(function() {
                    return E.m($, z);
                }, "D");
                switch(P){
                    case p:
                        D = J() / 12;
                        break;
                    case f:
                        D = /*#__PURE__*/ J();
                        break;
                    case h:
                        D = J() / 3;
                        break;
                    case l:
                        D = (X - W) / 6048e5;
                        break;
                    case u:
                        D = (X - W) / 864e5;
                        break;
                    case s:
                        D = X / n;
                        break;
                    case a:
                        D = X / e;
                        break;
                    case o:
                        D = X / t;
                        break;
                    default:
                        D = X;
                }
                return y ? D : E.a(D);
            }, d.daysInMonth = function() {
                return this.endOf(f).$D;
            }, d.$locale = function() {
                return A[this.$L];
            }, d.locale = function(x, S) {
                if (!x) return this.$L;
                var y = /*#__PURE__*/ this.clone(), D = /*#__PURE__*/ Y(x, S, true);
                return D && (y.$L = D), y;
            }, d.clone = function() {
                return E.w(this.$d, this);
            }, d.toDate = function() {
                return new Date(this.valueOf());
            }, d.toJSON = function() {
                return this.isValid() ? this.toISOString() : null;
            }, d.toISOString = function() {
                return this.$d.toISOString();
            }, d.toString = function() {
                return this.$d.toUTCString();
            }, v;
        }(), N = B.prototype;
        return U.prototype = N, [
            [
                "$ms",
                i
            ],
            [
                "$s",
                o
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
                u
            ],
            [
                "$M",
                f
            ],
            [
                "$y",
                p
            ],
            [
                "$D",
                c
            ]
        ].forEach(function(v) {
            N[v[1]] = function(d) {
                return this.$g(d, v[0], v[1]);
            };
        }), U.extend = function(v, d) {
            return v.$i || (v(d, B, U), v.$i = true), U;
        }, U.locale = Y, U.isDayjs = w, U.unix = function(v) {
            return U(1e3 * v);
        }, U.en = A[C], U.Ls = A, U.p = {}, U;
    });
});
var qo = /*#__PURE__*/ q(/*#__PURE__*/ Bo());
var St = {
    trace: 0,
    debug: 1,
    info: 2,
    warn: 3,
    error: 4,
    fatal: 5
}, pt = {
    trace: /*#__PURE__*/ m$1((...t)=>{}, "trace"),
    debug: /*#__PURE__*/ m$1((...t)=>{}, "debug"),
    info: /*#__PURE__*/ m$1((...t)=>{}, "info"),
    warn: /*#__PURE__*/ m$1((...t)=>{}, "warn"),
    error: /*#__PURE__*/ m$1((...t)=>{}, "error"),
    fatal: /*#__PURE__*/ m$1((...t)=>{}, "fatal")
}, Wh = /*#__PURE__*/ m$1(function(t = "fatal") {
    let e = St.fatal;
    typeof t == "string" ? t.toLowerCase() in St && (e = St[t]) : typeof t == "number" && (e = t), pt.trace = ()=>{}, pt.debug = ()=>{}, pt.info = ()=>{}, pt.warn = ()=>{}, pt.error = ()=>{}, pt.fatal = ()=>{}, e <= St.fatal && (pt.fatal = console.error ? console.error.bind(console, /*#__PURE__*/ mt("FATAL"), "color: orange") : console.log.bind(console, "\x1B[35m", /*#__PURE__*/ mt("FATAL"))), e <= St.error && (pt.error = console.error ? console.error.bind(console, /*#__PURE__*/ mt("ERROR"), "color: orange") : console.log.bind(console, "\x1B[31m", /*#__PURE__*/ mt("ERROR"))), e <= St.warn && (pt.warn = console.warn ? console.warn.bind(console, /*#__PURE__*/ mt("WARN"), "color: orange") : console.log.bind(console, "\x1B[33m", /*#__PURE__*/ mt("WARN"))), e <= St.info && (pt.info = console.info ? console.info.bind(console, /*#__PURE__*/ mt("INFO"), "color: lightblue") : console.log.bind(console, "\x1B[34m", /*#__PURE__*/ mt("INFO"))), e <= St.debug && (pt.debug = console.debug ? console.debug.bind(console, /*#__PURE__*/ mt("DEBUG"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", /*#__PURE__*/ mt("DEBUG"))), e <= St.trace && (pt.trace = console.debug ? console.debug.bind(console, /*#__PURE__*/ mt("TRACE"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", /*#__PURE__*/ mt("TRACE")));
}, "setLogLevel"), mt = /*#__PURE__*/ m$1((t)=>`%c${(0, qo.default)().format("ss.SSS")} : ${t} : `, "format");
function Wo(t, e) {
    let n;
    if (e === void 0) for (let i of t)i != null && (n < i || n === void 0 && i >= i) && (n = i);
    else {
        let i = -1;
        for (let o of t)(o = /*#__PURE__*/ e(o, ++i, t)) != null && (n < o || n === void 0 && o >= o) && (n = o);
    }
    return n;
}
m$1(Wo, "max");
function Vo(t, e) {
    let n;
    if (e === void 0) for (let i of t)i != null && (n > i || n === void 0 && i >= i) && (n = i);
    else {
        let i = -1;
        for (let o of t)(o = /*#__PURE__*/ e(o, ++i, t)) != null && (n > o || n === void 0 && o >= o) && (n = o);
    }
    return n;
}
m$1(Vo, "min");
function Vt(t, e) {
    return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
m$1(Vt, "ascending");
function cr(t, e) {
    return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
m$1(cr, "descending");
function Xt(t) {
    let e, n, i;
    t.length !== 2 ? (e = Vt, n = /*#__PURE__*/ m$1((u, l)=>Vt(/*#__PURE__*/ t(u), l), "compare2"), i = /*#__PURE__*/ m$1((u, l)=>t(u) - l, "delta")) : (e = t === Vt || t === cr ? t : cu, n = t, i = t);
    function o(u, l, f = 0, h = u.length) {
        if (f < h) {
            if (e(l, l) !== 0) return h;
            do {
                let p = f + h >>> 1;
                n(u[p], l) < 0 ? f = p + 1 : h = p;
            }while (f < h);
        }
        return f;
    }
    m$1(o, "left");
    function a(u, l, f = 0, h = u.length) {
        if (f < h) {
            if (e(l, l) !== 0) return h;
            do {
                let p = f + h >>> 1;
                n(u[p], l) <= 0 ? f = p + 1 : h = p;
            }while (f < h);
        }
        return f;
    }
    m$1(a, "right");
    function s(u, l, f = 0, h = u.length) {
        let p = /*#__PURE__*/ o(u, l, f, h - 1);
        return p > f && i(u[p - 1], l) > -i(u[p], l) ? p - 1 : p;
    }
    return m$1(s, "center"), {
        left: o,
        center: s,
        right: a
    };
}
m$1(Xt, "bisector");
function cu() {
    return 0;
}
m$1(cu, "zero");
function hr(t) {
    return t === null ? NaN : +t;
}
m$1(hr, "number");
var Xo = /*#__PURE__*/ Xt(Vt), Go = Xo.right;
Xo.left;
Xt(hr).center;
var pr = Go;
var fe = class extends Map {
    static{
        m$1(this, "InternMap");
    }
    constructor(e, n = xu){
        if (super(), Object.defineProperties(this, {
            _intern: {
                value: new Map
            },
            _key: {
                value: n
            }
        }), e != null) for (let [i, o] of e)this.set(i, o);
    }
    get(e) {
        return super.get(/*#__PURE__*/ Zo(this, e));
    }
    has(e) {
        return super.has(/*#__PURE__*/ Zo(this, e));
    }
    set(e, n) {
        return super.set(/*#__PURE__*/ mu(this, e), n);
    }
    delete(e) {
        return super.delete(/*#__PURE__*/ du(this, e));
    }
};
function Zo({ _intern: t, _key: e }, n) {
    let i = /*#__PURE__*/ e(n);
    return t.has(i) ? t.get(i) : n;
}
m$1(Zo, "intern_get");
function mu({ _intern: t, _key: e }, n) {
    let i = /*#__PURE__*/ e(n);
    return t.has(i) ? t.get(i) : (t.set(i, n), n);
}
m$1(mu, "intern_set");
function du({ _intern: t, _key: e }, n) {
    let i = /*#__PURE__*/ e(n);
    return t.has(i) && (n = /*#__PURE__*/ t.get(i), t.delete(i)), n;
}
m$1(du, "intern_delete");
function xu(t) {
    return t !== null && typeof t == "object" ? t.valueOf() : t;
}
m$1(xu, "keyof");
var _u = /*#__PURE__*/ Math.sqrt(50), gu = /*#__PURE__*/ Math.sqrt(10), yu = /*#__PURE__*/ Math.sqrt(2);
function cn(t, e, n) {
    let i = (e - t) / Math.max(0, n), o = /*#__PURE__*/ Math.floor(/*#__PURE__*/ Math.log10(i)), a = i / Math.pow(10, o), s = a >= _u ? 10 : a >= gu ? 5 : a >= yu ? 2 : 1, u, l, f;
    return o < 0 ? (f = Math.pow(10, -o) / s, u = /*#__PURE__*/ Math.round(t * f), l = /*#__PURE__*/ Math.round(e * f), u / f < t && ++u, l / f > e && --l, f = -f) : (f = Math.pow(10, o) * s, u = /*#__PURE__*/ Math.round(t / f), l = /*#__PURE__*/ Math.round(e / f), u * f < t && ++u, l * f > e && --l), l < u && .5 <= n && n < 2 ? cn(t, e, n * 2) : [
        u,
        l,
        f
    ];
}
m$1(cn, "tickSpec");
function hn(t, e, n) {
    if (e = +e, t = +t, n = +n, !(n > 0)) return [];
    if (t === e) return [
        t
    ];
    let i = e < t, [o, a, s] = i ? cn(e, t, n) : cn(t, e, n);
    if (!(a >= o)) return [];
    let u = a - o + 1, l = new Array(u);
    if (i) if (s < 0) for(let f = 0; f < u; ++f)l[f] = (a - f) / -s;
    else for(let f = 0; f < u; ++f)l[f] = (a - f) * s;
    else if (s < 0) for(let f = 0; f < u; ++f)l[f] = (o + f) / -s;
    else for(let f = 0; f < u; ++f)l[f] = (o + f) * s;
    return l;
}
m$1(hn, "ticks");
function Ee(t, e, n) {
    return e = +e, t = +t, n = +n, cn(t, e, n)[2];
}
m$1(Ee, "tickIncrement");
function le(t, e, n) {
    e = +e, t = +t, n = +n;
    let i = e < t, o = i ? Ee(e, t, n) : Ee(t, e, n);
    return (i ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
m$1(le, "tickStep");
function pn(t, e, n) {
    t = +t, e = +e, n = (o = arguments.length) < 2 ? (e = t, t = 0, 1) : o < 3 ? 1 : +n;
    for(var i = -1, o = Math.max(0, /*#__PURE__*/ Math.ceil((e - t) / n)) | 0, a = new Array(o); ++i < o;)a[i] = t + i * n;
    return a;
}
m$1(pn, "range");
function mr(t) {
    return t;
}
m$1(mr, "default");
var dn = 1, dr = 2, xr = 3, mn = 4, Qo = 1e-6;
function vu(t) {
    return "translate(" + t + ",0)";
}
m$1(vu, "translateX");
function wu(t) {
    return "translate(0," + t + ")";
}
m$1(wu, "translateY");
function bu(t) {
    return (e)=>+t(e);
}
m$1(bu, "number");
function Mu(t, e) {
    return e = Math.max(0, t.bandwidth() - e * 2) / 2, t.round() && (e = /*#__PURE__*/ Math.round(e)), (n)=>+t(n) + e;
}
m$1(Mu, "center");
function Tu() {
    return !this.__axis;
}
m$1(Tu, "entering");
function Ko(t, e) {
    var n = [], i = null, o = null, a = 6, s = 6, u = 3, l = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : .5, f = t === dn || t === mn ? -1 : 1, h = t === mn || t === dr ? "x" : "y", p = t === dn || t === xr ? vu : wu;
    function c(m) {
        var _ = i ?? (e.ticks ? e.ticks.apply(e, n) : e.domain()), M = o ?? (e.tickFormat ? e.tickFormat.apply(e, n) : mr), T = Math.max(a, 0) + u, k = /*#__PURE__*/ e.range(), I = +k[0] + l, C = +k[k.length - 1] + l, A = /*#__PURE__*/ (e.bandwidth ? Mu : bu)(/*#__PURE__*/ e.copy(), l), O = m.selection ? m.selection() : m, w = /*#__PURE__*/ O.selectAll(".domain").data([
            null
        ]), Y = /*#__PURE__*/ O.selectAll(".tick").data(_, e).order(), U = /*#__PURE__*/ Y.exit(), E = /*#__PURE__*/ Y.enter().append("g").attr("class", "tick"), B = /*#__PURE__*/ Y.select("line"), N = /*#__PURE__*/ Y.select("text");
        w = /*#__PURE__*/ w.merge(/*#__PURE__*/ w.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), Y = /*#__PURE__*/ Y.merge(E), B = /*#__PURE__*/ B.merge(/*#__PURE__*/ E.append("line").attr("stroke", "currentColor").attr(h + "2", f * a)), N = /*#__PURE__*/ N.merge(/*#__PURE__*/ E.append("text").attr("fill", "currentColor").attr(h, f * T).attr("dy", t === dn ? "0em" : t === xr ? "0.71em" : "0.32em")), m !== O && (w = /*#__PURE__*/ w.transition(m), Y = /*#__PURE__*/ Y.transition(m), B = /*#__PURE__*/ B.transition(m), N = /*#__PURE__*/ N.transition(m), U = /*#__PURE__*/ U.transition(m).attr("opacity", Qo).attr("transform", function(v) {
            return isFinite(v = /*#__PURE__*/ A(v)) ? p(v + l) : this.getAttribute("transform");
        }), E.attr("opacity", Qo).attr("transform", function(v) {
            var d = this.parentNode.__axis;
            return p((d && isFinite(d = /*#__PURE__*/ d(v)) ? d : A(v)) + l);
        })), U.remove(), w.attr("d", t === mn || t === dr ? s ? "M" + f * s + "," + I + "H" + l + "V" + C + "H" + f * s : "M" + l + "," + I + "V" + C : s ? "M" + I + "," + f * s + "V" + l + "H" + C + "V" + f * s : "M" + I + "," + l + "H" + C), Y.attr("opacity", 1).attr("transform", function(v) {
            return p(A(v) + l);
        }), B.attr(h + "2", f * a), N.attr(h, f * T).text(M), O.filter(Tu).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === dr ? "start" : t === mn ? "end" : "middle"), O.each(function() {
            this.__axis = A;
        });
    }
    return m$1(c, "axis"), c.scale = function(m) {
        return arguments.length ? (e = m, c) : e;
    }, c.ticks = function() {
        return n = /*#__PURE__*/ Array.from(arguments), c;
    }, c.tickArguments = function(m) {
        return arguments.length ? (n = m == null ? [] : Array.from(m), c) : n.slice();
    }, c.tickValues = function(m) {
        return arguments.length ? (i = m == null ? null : Array.from(m), c) : i && i.slice();
    }, c.tickFormat = function(m) {
        return arguments.length ? (o = m, c) : o;
    }, c.tickSize = function(m) {
        return arguments.length ? (a = s = +m, c) : a;
    }, c.tickSizeInner = function(m) {
        return arguments.length ? (a = +m, c) : a;
    }, c.tickSizeOuter = function(m) {
        return arguments.length ? (s = +m, c) : s;
    }, c.tickPadding = function(m) {
        return arguments.length ? (u = +m, c) : u;
    }, c.offset = function(m) {
        return arguments.length ? (l = +m, c) : l;
    }, c;
}
m$1(Ko, "axis");
function ku(t) {
    return Ko(dn, t);
}
m$1(ku, "axisTop");
function Su(t) {
    return Ko(xr, t);
}
m$1(Su, "axisBottom");
function Cu() {}
m$1(Cu, "none");
function It(t) {
    return t == null ? Cu : function() {
        return this.querySelector(t);
    };
}
m$1(It, "default");
function _r(t) {
    typeof t != "function" && (t = /*#__PURE__*/ It(t));
    for(var e = this._groups, n = e.length, i = new Array(n), o = 0; o < n; ++o)for(var a = e[o], s = a.length, u = i[o] = new Array(s), l, f, h = 0; h < s; ++h)(l = a[h]) && (f = /*#__PURE__*/ t.call(l, l.__data__, h, a)) && ("__data__" in l && (f.__data__ = l.__data__), u[h] = f);
    return new G(i, this._parents);
}
m$1(_r, "default");
function gr(t) {
    return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
m$1(gr, "array");
function Nu() {
    return [];
}
m$1(Nu, "empty");
function ce(t) {
    return t == null ? Nu : function() {
        return this.querySelectorAll(t);
    };
}
m$1(ce, "default");
function Au(t) {
    return function() {
        return gr(/*#__PURE__*/ t.apply(this, arguments));
    };
}
m$1(Au, "arrayAll");
function yr(t) {
    typeof t == "function" ? t = /*#__PURE__*/ Au(t) : t = /*#__PURE__*/ ce(t);
    for(var e = this._groups, n = e.length, i = [], o = [], a = 0; a < n; ++a)for(var s = e[a], u = s.length, l, f = 0; f < u; ++f)(l = s[f]) && (i.push(/*#__PURE__*/ t.call(l, l.__data__, f, s)), o.push(l));
    return new G(i, o);
}
m$1(yr, "default");
function he(t) {
    return function() {
        return this.matches(t);
    };
}
m$1(he, "default");
function xn(t) {
    return function(e) {
        return e.matches(t);
    };
}
m$1(xn, "childMatcher");
var Du = Array.prototype.find;
function $u(t) {
    return function() {
        return Du.call(this.children, t);
    };
}
m$1($u, "childFind");
function Ou() {
    return this.firstElementChild;
}
m$1(Ou, "childFirst");
function vr(t) {
    return this.select(t == null ? Ou : $u(typeof t == "function" ? t : xn(t)));
}
m$1(vr, "default");
var Eu = Array.prototype.filter;
function Iu() {
    return Array.from(this.children);
}
m$1(Iu, "children");
function Ru(t) {
    return function() {
        return Eu.call(this.children, t);
    };
}
m$1(Ru, "childrenFilter");
function wr(t) {
    return this.selectAll(t == null ? Iu : Ru(typeof t == "function" ? t : xn(t)));
}
m$1(wr, "default");
function br(t) {
    typeof t != "function" && (t = /*#__PURE__*/ he(t));
    for(var e = this._groups, n = e.length, i = new Array(n), o = 0; o < n; ++o)for(var a = e[o], s = a.length, u = i[o] = [], l, f = 0; f < s; ++f)(l = a[f]) && t.call(l, l.__data__, f, a) && u.push(l);
    return new G(i, this._parents);
}
m$1(br, "default");
function Ie(t) {
    return new Array(t.length);
}
m$1(Ie, "default");
function Mr() {
    return new G(this._enter || this._groups.map(Ie), this._parents);
}
m$1(Mr, "default");
function Re(t, e) {
    this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
m$1(Re, "EnterNode");
Re.prototype = {
    constructor: Re,
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
function Tr(t) {
    return function() {
        return t;
    };
}
m$1(Tr, "default");
function Pu(t, e, n, i, o, a) {
    for(var s = 0, u, l = e.length, f = a.length; s < f; ++s)(u = e[s]) ? (u.__data__ = a[s], i[s] = u) : n[s] = new Re(t, a[s]);
    for(; s < l; ++s)(u = e[s]) && (o[s] = u);
}
m$1(Pu, "bindIndex");
function Yu(t, e, n, i, o, a, s) {
    var u, l, f = new Map, h = e.length, p = a.length, c = new Array(h), m;
    for(u = 0; u < h; ++u)(l = e[u]) && (c[u] = m = s.call(l, l.__data__, u, e) + "", f.has(m) ? o[u] = l : f.set(m, l));
    for(u = 0; u < p; ++u)m = s.call(t, a[u], u, a) + "", (l = /*#__PURE__*/ f.get(m)) ? (i[u] = l, l.__data__ = a[u], f.delete(m)) : n[u] = new Re(t, a[u]);
    for(u = 0; u < h; ++u)(l = e[u]) && f.get(c[u]) === l && (o[u] = l);
}
m$1(Yu, "bindKey");
function Fu(t) {
    return t.__data__;
}
m$1(Fu, "datum");
function kr(t, e) {
    if (!arguments.length) return Array.from(this, Fu);
    var n = e ? Yu : Pu, i = this._parents, o = this._groups;
    typeof t != "function" && (t = /*#__PURE__*/ Tr(t));
    for(var a = o.length, s = new Array(a), u = new Array(a), l = new Array(a), f = 0; f < a; ++f){
        var h = i[f], p = o[f], c = p.length, m = /*#__PURE__*/ Uu(/*#__PURE__*/ t.call(h, h && h.__data__, f, i)), _ = m.length, M = u[f] = new Array(_), T = s[f] = new Array(_), k = l[f] = new Array(c);
        n(h, p, M, T, k, m, e);
        for(var I = 0, C = 0, A, O; I < _; ++I)if (A = M[I]) {
            for(I >= C && (C = I + 1); !(O = T[C]) && ++C < _;);
            A._next = O || null;
        }
    }
    return s = new G(s, i), s._enter = u, s._exit = l, s;
}
m$1(kr, "default");
function Uu(t) {
    return typeof t == "object" && "length" in t ? t : Array.from(t);
}
m$1(Uu, "arraylike");
function Sr() {
    return new G(this._exit || this._groups.map(Ie), this._parents);
}
m$1(Sr, "default");
function Cr(t, e, n) {
    var i = /*#__PURE__*/ this.enter(), o = this, a = /*#__PURE__*/ this.exit();
    return typeof t == "function" ? (i = /*#__PURE__*/ t(i), i && (i = /*#__PURE__*/ i.selection())) : i = /*#__PURE__*/ i.append(t + ""), e != null && (o = /*#__PURE__*/ e(o), o && (o = /*#__PURE__*/ o.selection())), n == null ? a.remove() : n(a), i && o ? i.merge(o).order() : o;
}
m$1(Cr, "default");
function Nr(t) {
    for(var e = t.selection ? t.selection() : t, n = this._groups, i = e._groups, o = n.length, a = i.length, s = /*#__PURE__*/ Math.min(o, a), u = new Array(o), l = 0; l < s; ++l)for(var f = n[l], h = i[l], p = f.length, c = u[l] = new Array(p), m, _ = 0; _ < p; ++_)(m = f[_] || h[_]) && (c[_] = m);
    for(; l < o; ++l)u[l] = n[l];
    return new G(u, this._parents);
}
m$1(Nr, "default");
function Ar() {
    for(var t = this._groups, e = -1, n = t.length; ++e < n;)for(var i = t[e], o = i.length - 1, a = i[o], s; --o >= 0;)(s = i[o]) && (a && s.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(s, a), a = s);
    return this;
}
m$1(Ar, "default");
function Dr(t) {
    t || (t = Lu);
    function e(p, c) {
        return p && c ? t(p.__data__, c.__data__) : !p - !c;
    }
    m$1(e, "compareNode");
    for(var n = this._groups, i = n.length, o = new Array(i), a = 0; a < i; ++a){
        for(var s = n[a], u = s.length, l = o[a] = new Array(u), f, h = 0; h < u; ++h)(f = s[h]) && (l[h] = f);
        l.sort(e);
    }
    return new G(o, this._parents).order();
}
m$1(Dr, "default");
function Lu(t, e) {
    return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
m$1(Lu, "ascending");
function $r() {
    var t = arguments[0];
    return arguments[0] = this, t.apply(null, arguments), this;
}
m$1($r, "default");
function Or() {
    return Array.from(this);
}
m$1(Or, "default");
function Er() {
    for(var t = this._groups, e = 0, n = t.length; e < n; ++e)for(var i = t[e], o = 0, a = i.length; o < a; ++o){
        var s = i[o];
        if (s) return s;
    }
    return null;
}
m$1(Er, "default");
function Ir() {
    let t = 0;
    for (let e of this)++t;
    return t;
}
m$1(Ir, "default");
function Rr() {
    return !this.node();
}
m$1(Rr, "default");
function Pr(t) {
    for(var e = this._groups, n = 0, i = e.length; n < i; ++n)for(var o = e[n], a = 0, s = o.length, u; a < s; ++a)(u = o[a]) && t.call(u, u.__data__, a, o);
    return this;
}
m$1(Pr, "default");
var _n = "http://www.w3.org/1999/xhtml", Yr = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: _n,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
};
function wt(t) {
    var e = t += "", n = /*#__PURE__*/ e.indexOf(":");
    return n >= 0 && (e = /*#__PURE__*/ t.slice(0, n)) !== "xmlns" && (t = /*#__PURE__*/ t.slice(n + 1)), Yr.hasOwnProperty(e) ? {
        space: Yr[e],
        local: t
    } : t;
}
m$1(wt, "default");
function zu(t) {
    return function() {
        this.removeAttribute(t);
    };
}
m$1(zu, "attrRemove");
function Hu(t) {
    return function() {
        this.removeAttributeNS(t.space, t.local);
    };
}
m$1(Hu, "attrRemoveNS");
function Bu(t, e) {
    return function() {
        this.setAttribute(t, e);
    };
}
m$1(Bu, "attrConstant");
function qu(t, e) {
    return function() {
        this.setAttributeNS(t.space, t.local, e);
    };
}
m$1(qu, "attrConstantNS");
function Wu(t, e) {
    return function() {
        var n = /*#__PURE__*/ e.apply(this, arguments);
        n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
    };
}
m$1(Wu, "attrFunction");
function Vu(t, e) {
    return function() {
        var n = /*#__PURE__*/ e.apply(this, arguments);
        n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
    };
}
m$1(Vu, "attrFunctionNS");
function Fr(t, e) {
    var n = /*#__PURE__*/ wt(t);
    if (arguments.length < 2) {
        var i = /*#__PURE__*/ this.node();
        return n.local ? i.getAttributeNS(n.space, n.local) : i.getAttribute(n);
    }
    return this.each(/*#__PURE__*/ (e == null ? n.local ? Hu : zu : typeof e == "function" ? n.local ? Vu : Wu : n.local ? qu : Bu)(n, e));
}
m$1(Fr, "default");
function Pe(t) {
    return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
m$1(Pe, "default");
function Xu(t) {
    return function() {
        this.style.removeProperty(t);
    };
}
m$1(Xu, "styleRemove");
function Gu(t, e, n) {
    return function() {
        this.style.setProperty(t, e, n);
    };
}
m$1(Gu, "styleConstant");
function Zu(t, e, n) {
    return function() {
        var i = /*#__PURE__*/ e.apply(this, arguments);
        i == null ? this.style.removeProperty(t) : this.style.setProperty(t, i, n);
    };
}
m$1(Zu, "styleFunction");
function Ur(t, e, n) {
    return arguments.length > 1 ? this.each(/*#__PURE__*/ (e == null ? Xu : typeof e == "function" ? Zu : Gu)(t, e, n ?? "")) : Rt(/*#__PURE__*/ this.node(), t);
}
m$1(Ur, "default");
function Rt(t, e) {
    return t.style.getPropertyValue(e) || Pe(t).getComputedStyle(t, null).getPropertyValue(e);
}
m$1(Rt, "styleValue");
function Qu(t) {
    return function() {
        delete this[t];
    };
}
m$1(Qu, "propertyRemove");
function Ku(t, e) {
    return function() {
        this[t] = e;
    };
}
m$1(Ku, "propertyConstant");
function Ju(t, e) {
    return function() {
        var n = /*#__PURE__*/ e.apply(this, arguments);
        n == null ? delete this[t] : this[t] = n;
    };
}
m$1(Ju, "propertyFunction");
function Lr(t, e) {
    return arguments.length > 1 ? this.each(/*#__PURE__*/ (e == null ? Qu : typeof e == "function" ? Ju : Ku)(t, e)) : this.node()[t];
}
m$1(Lr, "default");
function Jo(t) {
    return t.trim().split(/^|\s+/);
}
m$1(Jo, "classArray");
function zr(t) {
    return t.classList || new jo(t);
}
m$1(zr, "classList");
function jo(t) {
    this._node = t, this._names = /*#__PURE__*/ Jo(t.getAttribute("class") || "");
}
m$1(jo, "ClassList");
jo.prototype = {
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
function ta(t, e) {
    for(var n = /*#__PURE__*/ zr(t), i = -1, o = e.length; ++i < o;)n.add(e[i]);
}
m$1(ta, "classedAdd");
function ea(t, e) {
    for(var n = /*#__PURE__*/ zr(t), i = -1, o = e.length; ++i < o;)n.remove(e[i]);
}
m$1(ea, "classedRemove");
function ju(t) {
    return function() {
        ta(this, t);
    };
}
m$1(ju, "classedTrue");
function tf(t) {
    return function() {
        ea(this, t);
    };
}
m$1(tf, "classedFalse");
function ef(t, e) {
    return function() {
        (e.apply(this, arguments) ? ta : ea)(this, t);
    };
}
m$1(ef, "classedFunction");
function Hr(t, e) {
    var n = /*#__PURE__*/ Jo(t + "");
    if (arguments.length < 2) {
        for(var i = /*#__PURE__*/ zr(/*#__PURE__*/ this.node()), o = -1, a = n.length; ++o < a;)if (!i.contains(n[o])) return false;
        return true;
    }
    return this.each(/*#__PURE__*/ (typeof e == "function" ? ef : e ? ju : tf)(n, e));
}
m$1(Hr, "default");
function nf() {
    this.textContent = "";
}
m$1(nf, "textRemove");
function rf(t) {
    return function() {
        this.textContent = t;
    };
}
m$1(rf, "textConstant");
function of(t) {
    return function() {
        var e = /*#__PURE__*/ t.apply(this, arguments);
        this.textContent = e ?? "";
    };
}
m$1(of, "textFunction");
function Br(t) {
    return arguments.length ? this.each(t == null ? nf : (typeof t == "function" ? of : rf)(t)) : this.node().textContent;
}
m$1(Br, "default");
function af() {
    this.innerHTML = "";
}
m$1(af, "htmlRemove");
function sf(t) {
    return function() {
        this.innerHTML = t;
    };
}
m$1(sf, "htmlConstant");
function uf(t) {
    return function() {
        var e = /*#__PURE__*/ t.apply(this, arguments);
        this.innerHTML = e ?? "";
    };
}
m$1(uf, "htmlFunction");
function qr(t) {
    return arguments.length ? this.each(t == null ? af : (typeof t == "function" ? uf : sf)(t)) : this.node().innerHTML;
}
m$1(qr, "default");
function ff() {
    this.nextSibling && this.parentNode.appendChild(this);
}
m$1(ff, "raise");
function Wr() {
    return this.each(ff);
}
m$1(Wr, "default");
function lf() {
    this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
m$1(lf, "lower");
function Vr() {
    return this.each(lf);
}
m$1(Vr, "default");
function cf(t) {
    return function() {
        var e = this.ownerDocument, n = this.namespaceURI;
        return n === _n && e.documentElement.namespaceURI === _n ? e.createElement(t) : e.createElementNS(n, t);
    };
}
m$1(cf, "creatorInherit");
function hf(t) {
    return function() {
        return this.ownerDocument.createElementNS(t.space, t.local);
    };
}
m$1(hf, "creatorFixed");
function Ye(t) {
    var e = /*#__PURE__*/ wt(t);
    return (e.local ? hf : cf)(e);
}
m$1(Ye, "default");
function Xr(t) {
    var e = typeof t == "function" ? t : Ye(t);
    return this.select(function() {
        return this.appendChild(/*#__PURE__*/ e.apply(this, arguments));
    });
}
m$1(Xr, "default");
function pf() {
    return null;
}
m$1(pf, "constantNull");
function Gr(t, e) {
    var n = typeof t == "function" ? t : Ye(t), i = e == null ? pf : typeof e == "function" ? e : It(e);
    return this.select(function() {
        return this.insertBefore(/*#__PURE__*/ n.apply(this, arguments), i.apply(this, arguments) || null);
    });
}
m$1(Gr, "default");
function mf() {
    var t = this.parentNode;
    t && t.removeChild(this);
}
m$1(mf, "remove");
function Zr() {
    return this.each(mf);
}
m$1(Zr, "default");
function df() {
    var t = /*#__PURE__*/ this.cloneNode(false), e = this.parentNode;
    return e ? e.insertBefore(t, this.nextSibling) : t;
}
m$1(df, "selection_cloneShallow");
function xf() {
    var t = /*#__PURE__*/ this.cloneNode(true), e = this.parentNode;
    return e ? e.insertBefore(t, this.nextSibling) : t;
}
m$1(xf, "selection_cloneDeep");
function Qr(t) {
    return this.select(t ? xf : df);
}
m$1(Qr, "default");
function Kr(t) {
    return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
m$1(Kr, "default");
function _f(t) {
    return function(e) {
        t.call(this, e, this.__data__);
    };
}
m$1(_f, "contextListener");
function gf(t) {
    return t.trim().split(/^|\s+/).map(function(e) {
        var n = "", i = /*#__PURE__*/ e.indexOf(".");
        return i >= 0 && (n = /*#__PURE__*/ e.slice(i + 1), e = /*#__PURE__*/ e.slice(0, i)), {
            type: e,
            name: n
        };
    });
}
m$1(gf, "parseTypenames");
function yf(t) {
    return function() {
        var e = this.__on;
        if (e) {
            for(var n = 0, i = -1, o = e.length, a; n < o; ++n)a = e[n], (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.options) : e[++i] = a;
            ++i ? e.length = i : delete this.__on;
        }
    };
}
m$1(yf, "onRemove");
function vf(t, e, n) {
    return function() {
        var i = this.__on, o, a = /*#__PURE__*/ _f(e);
        if (i) {
            for(var s = 0, u = i.length; s < u; ++s)if ((o = i[s]).type === t.type && o.name === t.name) {
                this.removeEventListener(o.type, o.listener, o.options), this.addEventListener(o.type, o.listener = a, o.options = n), o.value = e;
                return;
            }
        }
        this.addEventListener(t.type, a, n), o = {
            type: t.type,
            name: t.name,
            value: e,
            listener: a,
            options: n
        }, i ? i.push(o) : this.__on = [
            o
        ];
    };
}
m$1(vf, "onAdd");
function Jr(t, e, n) {
    var i = /*#__PURE__*/ gf(t + ""), o, a = i.length, s;
    if (arguments.length < 2) {
        var u = this.node().__on;
        if (u) {
            for(var l = 0, f = u.length, h; l < f; ++l)for(o = 0, h = u[l]; o < a; ++o)if ((s = i[o]).type === h.type && s.name === h.name) return h.value;
        }
        return;
    }
    for(u = e ? vf : yf, o = 0; o < a; ++o)this.each(/*#__PURE__*/ u(i[o], e, n));
    return this;
}
m$1(Jr, "default");
function na(t, e, n) {
    var i = /*#__PURE__*/ Pe(t), o = i.CustomEvent;
    typeof o == "function" ? o = new o(e, n) : (o = /*#__PURE__*/ i.document.createEvent("Event"), n ? (o.initEvent(e, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(e, false, false)), t.dispatchEvent(o);
}
m$1(na, "dispatchEvent");
function wf(t, e) {
    return function() {
        return na(this, t, e);
    };
}
m$1(wf, "dispatchConstant");
function bf(t, e) {
    return function() {
        return na(this, t, /*#__PURE__*/ e.apply(this, arguments));
    };
}
m$1(bf, "dispatchFunction");
function jr(t, e) {
    return this.each(/*#__PURE__*/ (typeof e == "function" ? bf : wf)(t, e));
}
m$1(jr, "default");
function* ti() {
    for(var t = this._groups, e = 0, n = t.length; e < n; ++e)for(var i = t[e], o = 0, a = i.length, s; o < a; ++o)(s = i[o]) && (yield s);
}
m$1(ti, "default");
var ei = [
    null
];
function G(t, e) {
    this._groups = t, this._parents = e;
}
m$1(G, "Selection");
function ra() {
    return new G([
        [
            document.documentElement
        ]
    ], ei);
}
m$1(ra, "selection");
function Mf() {
    return this;
}
m$1(Mf, "selection_selection");
G.prototype = ra.prototype = {
    constructor: G,
    select: _r,
    selectAll: yr,
    selectChild: vr,
    selectChildren: wr,
    filter: br,
    data: kr,
    enter: Mr,
    exit: Sr,
    join: Cr,
    merge: Nr,
    selection: Mf,
    order: Ar,
    sort: Dr,
    call: $r,
    nodes: Or,
    node: Er,
    size: Ir,
    empty: Rr,
    each: Pr,
    attr: Fr,
    style: Ur,
    property: Lr,
    classed: Hr,
    text: Br,
    html: qr,
    raise: Wr,
    lower: Vr,
    append: Xr,
    insert: Gr,
    remove: Zr,
    clone: Qr,
    datum: Kr,
    on: Jr,
    dispatch: jr,
    [Symbol.iterator]: ti
};
var Ct = ra;
function ia(t) {
    return typeof t == "string" ? new G([
        [
            /*#__PURE__*/ document.querySelector(t)
        ]
    ], [
        document.documentElement
    ]) : new G([
        [
            t
        ]
    ], ei);
}
m$1(ia, "default");
function Pt(t, e, n) {
    t.prototype = e.prototype = n, n.constructor = t;
}
m$1(Pt, "default");
function pe(t, e) {
    var n = /*#__PURE__*/ Object.create(t.prototype);
    for(var i in e)n[i] = e[i];
    return n;
}
m$1(pe, "extend");
function Yt() {}
m$1(Yt, "Color");
var Fe = .7, vn = 1 / Fe, me = "\\s*([+-]?\\d+)\\s*", Ue = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", bt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Tf = /^#([0-9a-f]{3,8})$/, kf = new RegExp(`^rgb\\(${me},${me},${me}\\)$`), Sf = new RegExp(`^rgb\\(${bt},${bt},${bt}\\)$`), Cf = new RegExp(`^rgba\\(${me},${me},${me},${Ue}\\)$`), Nf = new RegExp(`^rgba\\(${bt},${bt},${bt},${Ue}\\)$`), Af = new RegExp(`^hsl\\(${Ue},${bt},${bt}\\)$`), Df = new RegExp(`^hsla\\(${Ue},${bt},${bt},${Ue}\\)$`), oa = {
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
Pt(Yt, _t, {
    copy (t) {
        return Object.assign(new this.constructor, this, t);
    },
    displayable () {
        return this.rgb().displayable();
    },
    hex: aa,
    formatHex: aa,
    formatHex8: $f,
    formatHsl: Of,
    formatRgb: sa,
    toString: sa
});
function aa() {
    return this.rgb().formatHex();
}
m$1(aa, "color_formatHex");
function $f() {
    return this.rgb().formatHex8();
}
m$1($f, "color_formatHex8");
function Of() {
    return pa(this).formatHsl();
}
m$1(Of, "color_formatHsl");
function sa() {
    return this.rgb().formatRgb();
}
m$1(sa, "color_formatRgb");
function _t(t) {
    var e, n;
    return t = /*#__PURE__*/ (t + "").trim().toLowerCase(), (e = /*#__PURE__*/ Tf.exec(t)) ? (n = e[1].length, e = /*#__PURE__*/ parseInt(e[1], 16), n === 6 ? ua(e) : n === 3 ? new nt(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? gn(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? gn(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = /*#__PURE__*/ kf.exec(t)) ? new nt(e[1], e[2], e[3], 1) : (e = /*#__PURE__*/ Sf.exec(t)) ? new nt(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = /*#__PURE__*/ Cf.exec(t)) ? gn(e[1], e[2], e[3], e[4]) : (e = /*#__PURE__*/ Nf.exec(t)) ? gn(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = /*#__PURE__*/ Af.exec(t)) ? ca(e[1], e[2] / 100, e[3] / 100, 1) : (e = /*#__PURE__*/ Df.exec(t)) ? ca(e[1], e[2] / 100, e[3] / 100, e[4]) : oa.hasOwnProperty(t) ? ua(oa[t]) : t === "transparent" ? new nt(NaN, NaN, NaN, 0) : null;
}
m$1(_t, "color");
function ua(t) {
    return new nt(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
m$1(ua, "rgbn");
function gn(t, e, n, i) {
    return i <= 0 && (t = e = n = NaN), new nt(t, e, n, i);
}
m$1(gn, "rgba");
function ri(t) {
    return t instanceof Yt || (t = /*#__PURE__*/ _t(t)), t ? (t = /*#__PURE__*/ t.rgb(), new nt(t.r, t.g, t.b, t.opacity)) : new nt;
}
m$1(ri, "rgbConvert");
function de(t, e, n, i) {
    return arguments.length === 1 ? ri(t) : new nt(t, e, n, i ?? 1);
}
m$1(de, "rgb");
function nt(t, e, n, i) {
    this.r = +t, this.g = +e, this.b = +n, this.opacity = +i;
}
m$1(nt, "Rgb");
Pt(nt, de, /*#__PURE__*/ pe(Yt, {
    brighter (t) {
        return t = t == null ? vn : Math.pow(vn, t), new nt(this.r * t, this.g * t, this.b * t, this.opacity);
    },
    darker (t) {
        return t = t == null ? Fe : Math.pow(Fe, t), new nt(this.r * t, this.g * t, this.b * t, this.opacity);
    },
    rgb () {
        return this;
    },
    clamp () {
        return new nt(Zt(this.r), Zt(this.g), Zt(this.b), wn(this.opacity));
    },
    displayable () {
        return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
    },
    hex: fa,
    formatHex: fa,
    formatHex8: Ef,
    formatRgb: la,
    toString: la
}));
function fa() {
    return `#${Gt(this.r)}${Gt(this.g)}${Gt(this.b)}`;
}
m$1(fa, "rgb_formatHex");
function Ef() {
    return `#${Gt(this.r)}${Gt(this.g)}${Gt(this.b)}${Gt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
m$1(Ef, "rgb_formatHex8");
function la() {
    let t = /*#__PURE__*/ wn(this.opacity);
    return `${t === 1 ? "rgb(" : "rgba("}${Zt(this.r)}, ${Zt(this.g)}, ${Zt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
m$1(la, "rgb_formatRgb");
function wn(t) {
    return isNaN(t) ? 1 : Math.max(0, /*#__PURE__*/ Math.min(1, t));
}
m$1(wn, "clampa");
function Zt(t) {
    return Math.max(0, /*#__PURE__*/ Math.min(255, Math.round(t) || 0));
}
m$1(Zt, "clampi");
function Gt(t) {
    return t = /*#__PURE__*/ Zt(t), (t < 16 ? "0" : "") + t.toString(16);
}
m$1(Gt, "hex");
function ca(t, e, n, i) {
    return i <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new xt(t, e, n, i);
}
m$1(ca, "hsla");
function pa(t) {
    if (t instanceof xt) return new xt(t.h, t.s, t.l, t.opacity);
    if (t instanceof Yt || (t = /*#__PURE__*/ _t(t)), !t) return new xt;
    if (t instanceof xt) return t;
    t = /*#__PURE__*/ t.rgb();
    var e = t.r / 255, n = t.g / 255, i = t.b / 255, o = /*#__PURE__*/ Math.min(e, n, i), a = /*#__PURE__*/ Math.max(e, n, i), s = NaN, u = a - o, l = (a + o) / 2;
    return u ? (e === a ? s = (n - i) / u + (n < i) * 6 : n === a ? s = (i - e) / u + 2 : s = (e - n) / u + 4, u /= l < .5 ? a + o : 2 - a - o, s *= 60) : u = l > 0 && l < 1 ? 0 : s, new xt(s, u, l, t.opacity);
}
m$1(pa, "hslConvert");
function ma(t, e, n, i) {
    return arguments.length === 1 ? pa(t) : new xt(t, e, n, i ?? 1);
}
m$1(ma, "hsl");
function xt(t, e, n, i) {
    this.h = +t, this.s = +e, this.l = +n, this.opacity = +i;
}
m$1(xt, "Hsl");
Pt(xt, ma, /*#__PURE__*/ pe(Yt, {
    brighter (t) {
        return t = t == null ? vn : Math.pow(vn, t), new xt(this.h, this.s, this.l * t, this.opacity);
    },
    darker (t) {
        return t = t == null ? Fe : Math.pow(Fe, t), new xt(this.h, this.s, this.l * t, this.opacity);
    },
    rgb () {
        var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, i = n + (n < .5 ? n : 1 - n) * e, o = 2 * n - i;
        return new nt(ni(t >= 240 ? t - 240 : t + 120, o, i), ni(t, o, i), ni(t < 120 ? t + 240 : t - 120, o, i), this.opacity);
    },
    clamp () {
        return new xt(ha(this.h), yn(this.s), yn(this.l), wn(this.opacity));
    },
    displayable () {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    },
    formatHsl () {
        let t = /*#__PURE__*/ wn(this.opacity);
        return `${t === 1 ? "hsl(" : "hsla("}${ha(this.h)}, ${yn(this.s) * 100}%, ${yn(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
    }
}));
function ha(t) {
    return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
m$1(ha, "clamph");
function yn(t) {
    return Math.max(0, /*#__PURE__*/ Math.min(1, t || 0));
}
m$1(yn, "clampt");
function ni(t, e, n) {
    return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
m$1(ni, "hsl2rgb");
var da = Math.PI / 180, xa = 180 / Math.PI;
var bn = 18, _a = .96422, ga = 1, ya = .82521, va = 4 / 29, xe = 6 / 29, wa = 3 * xe * xe, If = xe * xe * xe;
function ba(t) {
    if (t instanceof Mt) return new Mt(t.l, t.a, t.b, t.opacity);
    if (t instanceof Nt) return Ma(t);
    t instanceof nt || (t = /*#__PURE__*/ ri(t));
    var e = /*#__PURE__*/ si(t.r), n = /*#__PURE__*/ si(t.g), i = /*#__PURE__*/ si(t.b), o = /*#__PURE__*/ ii((.2225045 * e + .7168786 * n + .0606169 * i) / ga), a, s;
    return e === n && n === i ? a = s = o : (a = /*#__PURE__*/ ii((.4360747 * e + .3850649 * n + .1430804 * i) / _a), s = /*#__PURE__*/ ii((.0139322 * e + .0971045 * n + .7141733 * i) / ya)), new Mt(116 * o - 16, 500 * (a - o), 200 * (o - s), t.opacity);
}
m$1(ba, "labConvert");
function ui(t, e, n, i) {
    return arguments.length === 1 ? ba(t) : new Mt(t, e, n, i ?? 1);
}
m$1(ui, "lab");
function Mt(t, e, n, i) {
    this.l = +t, this.a = +e, this.b = +n, this.opacity = +i;
}
m$1(Mt, "Lab");
Pt(Mt, ui, /*#__PURE__*/ pe(Yt, {
    brighter (t) {
        return new Mt(this.l + bn * (t ?? 1), this.a, this.b, this.opacity);
    },
    darker (t) {
        return new Mt(this.l - bn * (t ?? 1), this.a, this.b, this.opacity);
    },
    rgb () {
        var t = (this.l + 16) / 116, e = isNaN(this.a) ? t : t + this.a / 500, n = isNaN(this.b) ? t : t - this.b / 200;
        return e = _a * oi(e), t = ga * oi(t), n = ya * oi(n), new nt(ai(3.1338561 * e - 1.6168667 * t - .4906146 * n), ai(-0.9787684 * e + 1.9161415 * t + .033454 * n), ai(.0719453 * e - .2289914 * t + 1.4052427 * n), this.opacity);
    }
}));
function ii(t) {
    return t > If ? Math.pow(t, 1 / 3) : t / wa + va;
}
m$1(ii, "xyz2lab");
function oi(t) {
    return t > xe ? t * t * t : wa * (t - va);
}
m$1(oi, "lab2xyz");
function ai(t) {
    return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055);
}
m$1(ai, "lrgb2rgb");
function si(t) {
    return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
}
m$1(si, "rgb2lrgb");
function Rf(t) {
    if (t instanceof Nt) return new Nt(t.h, t.c, t.l, t.opacity);
    if (t instanceof Mt || (t = /*#__PURE__*/ ba(t)), t.a === 0 && t.b === 0) return new Nt(NaN, 0 < t.l && t.l < 100 ? 0 : NaN, t.l, t.opacity);
    var e = Math.atan2(t.b, t.a) * xa;
    return new Nt(e < 0 ? e + 360 : e, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
}
m$1(Rf, "hclConvert");
function Le(t, e, n, i) {
    return arguments.length === 1 ? Rf(t) : new Nt(t, e, n, i ?? 1);
}
m$1(Le, "hcl");
function Nt(t, e, n, i) {
    this.h = +t, this.c = +e, this.l = +n, this.opacity = +i;
}
m$1(Nt, "Hcl");
function Ma(t) {
    if (isNaN(t.h)) return new Mt(t.l, 0, 0, t.opacity);
    var e = t.h * da;
    return new Mt(t.l, Math.cos(e) * t.c, Math.sin(e) * t.c, t.opacity);
}
m$1(Ma, "hcl2lab");
Pt(Nt, Le, /*#__PURE__*/ pe(Yt, {
    brighter (t) {
        return new Nt(this.h, this.c, this.l + bn * (t ?? 1), this.opacity);
    },
    darker (t) {
        return new Nt(this.h, this.c, this.l - bn * (t ?? 1), this.opacity);
    },
    rgb () {
        return Ma(this).rgb();
    }
}));
var _e = /*#__PURE__*/ m$1((t)=>()=>t, "default");
function Ta(t, e) {
    return function(n) {
        return t + n * e;
    };
}
m$1(Ta, "linear");
function Pf(t, e, n) {
    return t = /*#__PURE__*/ Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(i) {
        return Math.pow(t + i * e, n);
    };
}
m$1(Pf, "exponential");
function ka(t, e) {
    var n = e - t;
    return n ? Ta(t, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : _e(isNaN(t) ? e : t);
}
m$1(ka, "hue");
function Sa(t) {
    return (t = +t) == 1 ? At : function(e, n) {
        return n - e ? Pf(e, n, t) : _e(isNaN(e) ? n : e);
    };
}
m$1(Sa, "gamma");
function At(t, e) {
    var n = e - t;
    return n ? Ta(t, n) : _e(isNaN(t) ? e : t);
}
m$1(At, "nogamma");
function Ca(t) {
    return function(e, n) {
        var i = /*#__PURE__*/ t((e = /*#__PURE__*/ Le(e)).h, (n = /*#__PURE__*/ Le(n)).h), o = /*#__PURE__*/ At(e.c, n.c), a = /*#__PURE__*/ At(e.l, n.l), s = /*#__PURE__*/ At(e.opacity, n.opacity);
        return function(u) {
            return e.h = /*#__PURE__*/ i(u), e.c = /*#__PURE__*/ o(u), e.l = /*#__PURE__*/ a(u), e.opacity = /*#__PURE__*/ s(u), e + "";
        };
    };
}
m$1(Ca, "hcl");
var Yf = /*#__PURE__*/ Ca(ka);
function fi(t, e, n, i, o) {
    var a = t * t, s = a * t;
    return ((1 - 3 * t + 3 * a - s) * e + (4 - 6 * a + 3 * s) * n + (1 + 3 * t + 3 * a - 3 * s) * i + s * o) / 6;
}
m$1(fi, "basis");
function li(t) {
    var e = t.length - 1;
    return function(n) {
        var i = n <= 0 ? n = 0 : n >= 1 ? (n = 1, e - 1) : Math.floor(n * e), o = t[i], a = t[i + 1], s = i > 0 ? t[i - 1] : 2 * o - a, u = i < e - 1 ? t[i + 2] : 2 * a - o;
        return fi((n - i / e) * e, s, o, a, u);
    };
}
m$1(li, "default");
function ci(t) {
    var e = t.length;
    return function(n) {
        var i = /*#__PURE__*/ Math.floor(((n %= 1) < 0 ? ++n : n) * e), o = t[(i + e - 1) % e], a = t[i % e], s = t[(i + 1) % e], u = t[(i + 2) % e];
        return fi((n - i / e) * e, o, a, s, u);
    };
}
m$1(ci, "default");
var Qt = /*#__PURE__*/ m$1(function t(e) {
    var n = /*#__PURE__*/ Sa(e);
    function i(o, a) {
        var s = /*#__PURE__*/ n((o = /*#__PURE__*/ de(o)).r, (a = /*#__PURE__*/ de(a)).r), u = /*#__PURE__*/ n(o.g, a.g), l = /*#__PURE__*/ n(o.b, a.b), f = /*#__PURE__*/ At(o.opacity, a.opacity);
        return function(h) {
            return o.r = /*#__PURE__*/ s(h), o.g = /*#__PURE__*/ u(h), o.b = /*#__PURE__*/ l(h), o.opacity = /*#__PURE__*/ f(h), o + "";
        };
    }
    return m$1(i, "rgb"), i.gamma = t, i;
}, "rgbGamma")(1);
function Na(t) {
    return function(e) {
        var n = e.length, i = new Array(n), o = new Array(n), a = new Array(n), s, u;
        for(s = 0; s < n; ++s)u = /*#__PURE__*/ de(e[s]), i[s] = u.r || 0, o[s] = u.g || 0, a[s] = u.b || 0;
        return i = /*#__PURE__*/ t(i), o = /*#__PURE__*/ t(o), a = /*#__PURE__*/ t(a), u.opacity = 1, function(l) {
            return u.r = /*#__PURE__*/ i(l), u.g = /*#__PURE__*/ o(l), u.b = /*#__PURE__*/ a(l), u + "";
        };
    };
}
m$1(Na, "rgbSpline");
function hi(t, e) {
    e || (e = []);
    var n = t ? Math.min(e.length, t.length) : 0, i = /*#__PURE__*/ e.slice(), o;
    return function(a) {
        for(o = 0; o < n; ++o)i[o] = t[o] * (1 - a) + e[o] * a;
        return i;
    };
}
m$1(hi, "default");
function Aa(t) {
    return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
m$1(Aa, "isNumberArray");
function Da(t, e) {
    var n = e ? e.length : 0, i = t ? Math.min(n, t.length) : 0, o = new Array(i), a = new Array(n), s;
    for(s = 0; s < i; ++s)o[s] = /*#__PURE__*/ Ft(t[s], e[s]);
    for(; s < n; ++s)a[s] = e[s];
    return function(u) {
        for(s = 0; s < i; ++s)a[s] = /*#__PURE__*/ o[s](u);
        return a;
    };
}
m$1(Da, "genericArray");
function pi(t, e) {
    var n = new Date;
    return t = +t, e = +e, function(i) {
        return n.setTime(t * (1 - i) + e * i), n;
    };
}
m$1(pi, "default");
function j(t, e) {
    return t = +t, e = +e, function(n) {
        return t * (1 - n) + e * n;
    };
}
m$1(j, "default");
function mi(t, e) {
    var n = {}, i = {}, o;
    (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
    for(o in e)o in t ? n[o] = /*#__PURE__*/ Ft(t[o], e[o]) : i[o] = e[o];
    return function(a) {
        for(o in n)i[o] = /*#__PURE__*/ n[o](a);
        return i;
    };
}
m$1(mi, "default");
var xi = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, di = new RegExp(xi.source, "g");
function zf(t) {
    return function() {
        return t;
    };
}
m$1(zf, "zero");
function Hf(t) {
    return function(e) {
        return t(e) + "";
    };
}
m$1(Hf, "one");
function ge(t, e) {
    var n = xi.lastIndex = di.lastIndex = 0, i, o, a, s = -1, u = [], l = [];
    for(t = t + "", e = e + ""; (i = /*#__PURE__*/ xi.exec(t)) && (o = /*#__PURE__*/ di.exec(e));)(a = o.index) > n && (a = /*#__PURE__*/ e.slice(n, a), u[s] ? u[s] += a : u[++s] = a), (i = i[0]) === (o = o[0]) ? u[s] ? u[s] += o : u[++s] = o : (u[++s] = null, l.push({
        i: s,
        x: /*#__PURE__*/ j(i, o)
    })), n = di.lastIndex;
    return n < e.length && (a = /*#__PURE__*/ e.slice(n), u[s] ? u[s] += a : u[++s] = a), u.length < 2 ? l[0] ? Hf(l[0].x) : zf(e) : (e = l.length, function(f) {
        for(var h = 0, p; h < e; ++h)u[(p = l[h]).i] = /*#__PURE__*/ p.x(f);
        return u.join("");
    });
}
m$1(ge, "default");
function Ft(t, e) {
    var n = typeof e, i;
    return e == null || n === "boolean" ? _e(e) : (n === "number" ? j : n === "string" ? (i = /*#__PURE__*/ _t(e)) ? (e = i, Qt) : ge : e instanceof _t ? Qt : e instanceof Date ? pi : Aa(e) ? hi : Array.isArray(e) ? Da : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? mi : j)(t, e);
}
m$1(Ft, "default");
function Mn(t, e) {
    return t = +t, e = +e, function(n) {
        return Math.round(t * (1 - n) + e * n);
    };
}
m$1(Mn, "default");
var $a = 180 / Math.PI, Tn = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
};
function kn(t, e, n, i, o, a) {
    var s, u, l;
    return (s = /*#__PURE__*/ Math.sqrt(t * t + e * e)) && (t /= s, e /= s), (l = t * n + e * i) && (n -= t * l, i -= e * l), (u = /*#__PURE__*/ Math.sqrt(n * n + i * i)) && (n /= u, i /= u, l /= u), t * i < e * n && (t = -t, e = -e, l = -l, s = -s), {
        translateX: o,
        translateY: a,
        rotate: Math.atan2(e, t) * $a,
        skewX: Math.atan(l) * $a,
        scaleX: s,
        scaleY: u
    };
}
m$1(kn, "default");
var Sn;
function Oa(t) {
    let e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
    return e.isIdentity ? Tn : kn(e.a, e.b, e.c, e.d, e.e, e.f);
}
m$1(Oa, "parseCss");
function Ea(t) {
    return t == null ? Tn : (Sn || (Sn = /*#__PURE__*/ document.createElementNS("http://www.w3.org/2000/svg", "g")), Sn.setAttribute("transform", t), (t = /*#__PURE__*/ Sn.transform.baseVal.consolidate()) ? (t = t.matrix, kn(t.a, t.b, t.c, t.d, t.e, t.f)) : Tn);
}
m$1(Ea, "parseSvg");
function Ia(t, e, n, i) {
    function o(f) {
        return f.length ? f.pop() + " " : "";
    }
    m$1(o, "pop");
    function a(f, h, p, c, m, _) {
        if (f !== p || h !== c) {
            var M = /*#__PURE__*/ m.push("translate(", null, e, null, n);
            _.push({
                i: M - 4,
                x: /*#__PURE__*/ j(f, p)
            }, {
                i: M - 2,
                x: /*#__PURE__*/ j(h, c)
            });
        } else (p || c) && m.push("translate(" + p + e + c + n);
    }
    m$1(a, "translate");
    function s(f, h, p, c) {
        f !== h ? (f - h > 180 ? h += 360 : h - f > 180 && (f += 360), c.push({
            i: p.push(o(p) + "rotate(", null, i) - 2,
            x: /*#__PURE__*/ j(f, h)
        })) : h && p.push(o(p) + "rotate(" + h + i);
    }
    m$1(s, "rotate");
    function u(f, h, p, c) {
        f !== h ? c.push({
            i: p.push(o(p) + "skewX(", null, i) - 2,
            x: /*#__PURE__*/ j(f, h)
        }) : h && p.push(o(p) + "skewX(" + h + i);
    }
    m$1(u, "skewX");
    function l(f, h, p, c, m, _) {
        if (f !== p || h !== c) {
            var M = /*#__PURE__*/ m.push(o(m) + "scale(", null, ",", null, ")");
            _.push({
                i: M - 4,
                x: /*#__PURE__*/ j(f, p)
            }, {
                i: M - 2,
                x: /*#__PURE__*/ j(h, c)
            });
        } else (p !== 1 || c !== 1) && m.push(o(m) + "scale(" + p + "," + c + ")");
    }
    return m$1(l, "scale"), function(f, h) {
        var p = [], c = [];
        return f = /*#__PURE__*/ t(f), h = /*#__PURE__*/ t(h), a(f.translateX, f.translateY, h.translateX, h.translateY, p, c), s(f.rotate, h.rotate, p, c), u(f.skewX, h.skewX, p, c), l(f.scaleX, f.scaleY, h.scaleX, h.scaleY, p, c), f = h = null, function(m) {
            for(var _ = -1, M = c.length, T; ++_ < M;)p[(T = c[_]).i] = /*#__PURE__*/ T.x(m);
            return p.join("");
        };
    };
}
m$1(Ia, "interpolateTransform");
var _i = /*#__PURE__*/ Ia(Oa, "px, ", "px)", "deg)"), gi = /*#__PURE__*/ Ia(Ea, ", ", ")", ")");
function yi(t) {
    return Math.abs(t = /*#__PURE__*/ Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
m$1(yi, "default");
function Kt(t, e) {
    if ((n = /*#__PURE__*/ (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;
    var n, i = /*#__PURE__*/ t.slice(0, n);
    return [
        i.length > 1 ? i[0] + i.slice(2) : i,
        +t.slice(n + 1)
    ];
}
m$1(Kt, "formatDecimalParts");
function gt(t) {
    return t = /*#__PURE__*/ Kt(/*#__PURE__*/ Math.abs(t)), t ? t[1] : NaN;
}
m$1(gt, "default");
function vi(t, e) {
    return function(n, i) {
        for(var o = n.length, a = [], s = 0, u = t[0], l = 0; o > 0 && u > 0 && (l + u + 1 > i && (u = /*#__PURE__*/ Math.max(1, i - l)), a.push(/*#__PURE__*/ n.substring(o -= u, o + u)), !((l += u + 1) > i));)u = t[s = (s + 1) % t.length];
        return a.reverse().join(e);
    };
}
m$1(vi, "default");
function wi(t) {
    return function(e) {
        return e.replace(/[0-9]/g, function(n) {
            return t[+n];
        });
    };
}
m$1(wi, "default");
var Bf = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Ut(t) {
    if (!(e = /*#__PURE__*/ Bf.exec(t))) throw new Error("invalid format: " + t);
    var e;
    return new Cn({
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
m$1(Ut, "formatSpecifier");
Ut.prototype = Cn.prototype;
function Cn(t) {
    this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
m$1(Cn, "FormatSpecifier");
Cn.prototype.toString = function() {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function bi(t) {
    t: for(var e = t.length, n = 1, i = -1, o; n < e; ++n)switch(t[n]){
        case ".":
            i = o = n;
            break;
        case "0":
            i === 0 && (i = n), o = n;
            break;
        default:
            if (!+t[n]) break t;
            i > 0 && (i = 0);
            break;
    }
    return i > 0 ? t.slice(0, i) + t.slice(o + 1) : t;
}
m$1(bi, "default");
var Mi;
function Ti(t, e) {
    var n = /*#__PURE__*/ Kt(t, e);
    if (!n) return t + "";
    var i = n[0], o = n[1], a = o - (Mi = Math.max(-8, /*#__PURE__*/ Math.min(8, /*#__PURE__*/ Math.floor(o / 3))) * 3) + 1, s = i.length;
    return a === s ? i : a > s ? i + new Array(a - s + 1).join("0") : a > 0 ? i.slice(0, a) + "." + i.slice(a) : "0." + new Array(1 - a).join("0") + Kt(t, /*#__PURE__*/ Math.max(0, e + a - 1))[0];
}
m$1(Ti, "default");
function Nn(t, e) {
    var n = /*#__PURE__*/ Kt(t, e);
    if (!n) return t + "";
    var i = n[0], o = n[1];
    return o < 0 ? "0." + new Array(-o).join("0") + i : i.length > o + 1 ? i.slice(0, o + 1) + "." + i.slice(o + 1) : i + new Array(o - i.length + 2).join("0");
}
m$1(Nn, "default");
var ki = {
    "%": /*#__PURE__*/ m$1((t, e)=>(t * 100).toFixed(e), "%"),
    b: /*#__PURE__*/ m$1((t)=>Math.round(t).toString(2), "b"),
    c: /*#__PURE__*/ m$1((t)=>t + "", "c"),
    d: yi,
    e: /*#__PURE__*/ m$1((t, e)=>t.toExponential(e), "e"),
    f: /*#__PURE__*/ m$1((t, e)=>t.toFixed(e), "f"),
    g: /*#__PURE__*/ m$1((t, e)=>t.toPrecision(e), "g"),
    o: /*#__PURE__*/ m$1((t)=>Math.round(t).toString(8), "o"),
    p: /*#__PURE__*/ m$1((t, e)=>Nn(t * 100, e), "p"),
    r: Nn,
    s: Ti,
    X: /*#__PURE__*/ m$1((t)=>Math.round(t).toString(16).toUpperCase(), "X"),
    x: /*#__PURE__*/ m$1((t)=>Math.round(t).toString(16), "x")
};
function An(t) {
    return t;
}
m$1(An, "default");
var Ra = Array.prototype.map, Pa = [
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
function Si(t) {
    var e = t.grouping === void 0 || t.thousands === void 0 ? An : vi(/*#__PURE__*/ Ra.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", i = t.currency === void 0 ? "" : t.currency[1] + "", o = t.decimal === void 0 ? "." : t.decimal + "", a = t.numerals === void 0 ? An : wi(/*#__PURE__*/ Ra.call(t.numerals, String)), s = t.percent === void 0 ? "%" : t.percent + "", u = t.minus === void 0 ? "\u2212" : t.minus + "", l = t.nan === void 0 ? "NaN" : t.nan + "";
    function f(p) {
        p = /*#__PURE__*/ Ut(p);
        var c = p.fill, m = p.align, _ = p.sign, M = p.symbol, T = p.zero, k = p.width, I = p.comma, C = p.precision, A = p.trim, O = p.type;
        O === "n" ? (I = true, O = "g") : ki[O] || (C === void 0 && (C = 12), A = true, O = "g"), (T || c === "0" && m === "=") && (T = true, c = "0", m = "=");
        var w = M === "$" ? n : M === "#" && /[boxX]/.test(O) ? "0" + O.toLowerCase() : "", Y = M === "$" ? i : /[%p]/.test(O) ? s : "", U = ki[O], E = /*#__PURE__*/ /[defgprs%]/.test(O);
        C = C === void 0 ? 6 : /[gprs]/.test(O) ? Math.max(1, /*#__PURE__*/ Math.min(21, C)) : Math.max(0, /*#__PURE__*/ Math.min(20, C));
        function B(N) {
            var v = w, d = Y, x, S, y;
            if (O === "c") d = U(N) + d, N = "";
            else {
                N = +N;
                var D = N < 0 || 1 / N < 0;
                if (N = isNaN(N) ? l : U(/*#__PURE__*/ Math.abs(N), C), A && (N = /*#__PURE__*/ bi(N)), D && +N == 0 && _ !== "+" && (D = false), v = (D ? _ === "(" ? _ : u : _ === "-" || _ === "(" ? "" : _) + v, d = (O === "s" ? Pa[8 + Mi / 3] : "") + d + (D && _ === "(" ? ")" : ""), E) {
                    for(x = -1, S = N.length; ++x < S;)if (y = /*#__PURE__*/ N.charCodeAt(x), 48 > y || y > 57) {
                        d = (y === 46 ? o + N.slice(x + 1) : N.slice(x)) + d, N = /*#__PURE__*/ N.slice(0, x);
                        break;
                    }
                }
            }
            I && !T && (N = /*#__PURE__*/ e(N, 1 / 0));
            var $ = v.length + N.length + d.length, P = $ < k ? new Array(k - $ + 1).join(c) : "";
            switch(I && T && (N = /*#__PURE__*/ e(P + N, P.length ? k - d.length : 1 / 0), P = ""), m){
                case "<":
                    N = v + N + d + P;
                    break;
                case "=":
                    N = v + P + N + d;
                    break;
                case "^":
                    N = P.slice(0, $ = P.length >> 1) + v + N + d + P.slice($);
                    break;
                default:
                    N = P + v + N + d;
                    break;
            }
            return a(N);
        }
        return m$1(B, "format"), B.toString = function() {
            return p + "";
        }, B;
    }
    m$1(f, "newFormat");
    function h(p, c) {
        var m = /*#__PURE__*/ f((p = /*#__PURE__*/ Ut(p), p.type = "f", p)), _ = Math.max(-8, /*#__PURE__*/ Math.min(8, /*#__PURE__*/ Math.floor(gt(c) / 3))) * 3, M = /*#__PURE__*/ Math.pow(10, -_), T = Pa[8 + _ / 3];
        return function(k) {
            return m(M * k) + T;
        };
    }
    return m$1(h, "formatPrefix"), {
        format: f,
        formatPrefix: h
    };
}
m$1(Si, "default");
var Dn, $n, On;
Ci({
    thousands: ",",
    grouping: [
        3
    ],
    currency: [
        "$",
        ""
    ]
});
function Ci(t) {
    return Dn = /*#__PURE__*/ Si(t), $n = Dn.format, On = Dn.formatPrefix, Dn;
}
m$1(Ci, "defaultLocale");
function En(t) {
    return Math.max(0, -gt(/*#__PURE__*/ Math.abs(t)));
}
m$1(En, "default");
function In(t, e) {
    return Math.max(0, Math.max(-8, /*#__PURE__*/ Math.min(8, /*#__PURE__*/ Math.floor(gt(e) / 3))) * 3 - gt(/*#__PURE__*/ Math.abs(t)));
}
m$1(In, "default");
function Rn(t, e) {
    return t = /*#__PURE__*/ Math.abs(t), e = Math.abs(e) - t, Math.max(0, gt(e) - gt(t)) + 1;
}
m$1(Rn, "default");
function qf(t) {
    var e = 0, n = t.children, i = n && n.length;
    if (!i) e = 1;
    else for(; --i >= 0;)e += n[i].value;
    t.value = e;
}
m$1(qf, "count");
function Ni() {
    return this.eachAfter(qf);
}
m$1(Ni, "default");
function Ai(t, e) {
    let n = -1;
    for (let i of this)t.call(e, i, ++n, this);
    return this;
}
m$1(Ai, "default");
function Di(t, e) {
    for(var n = this, i = [
        n
    ], o, a, s = -1; n = /*#__PURE__*/ i.pop();)if (t.call(e, n, ++s, this), o = n.children) for(a = o.length - 1; a >= 0; --a)i.push(o[a]);
    return this;
}
m$1(Di, "default");
function $i(t, e) {
    for(var n = this, i = [
        n
    ], o = [], a, s, u, l = -1; n = /*#__PURE__*/ i.pop();)if (o.push(n), a = n.children) for(s = 0, u = a.length; s < u; ++s)i.push(a[s]);
    for(; n = /*#__PURE__*/ o.pop();)t.call(e, n, ++l, this);
    return this;
}
m$1($i, "default");
function Oi(t, e) {
    let n = -1;
    for (let i of this)if (t.call(e, i, ++n, this)) return i;
}
m$1(Oi, "default");
function Ei(t) {
    return this.eachAfter(function(e) {
        for(var n = +t(e.data) || 0, i = e.children, o = i && i.length; --o >= 0;)n += i[o].value;
        e.value = n;
    });
}
m$1(Ei, "default");
function Ii(t) {
    return this.eachBefore(function(e) {
        e.children && e.children.sort(t);
    });
}
m$1(Ii, "default");
function Ri(t) {
    for(var e = this, n = /*#__PURE__*/ Wf(e, t), i = [
        e
    ]; e !== n;)e = e.parent, i.push(e);
    for(var o = i.length; t !== n;)i.splice(o, 0, t), t = t.parent;
    return i;
}
m$1(Ri, "default");
function Wf(t, e) {
    if (t === e) return t;
    var n = /*#__PURE__*/ t.ancestors(), i = /*#__PURE__*/ e.ancestors(), o = null;
    for(t = /*#__PURE__*/ n.pop(), e = /*#__PURE__*/ i.pop(); t === e;)o = t, t = /*#__PURE__*/ n.pop(), e = /*#__PURE__*/ i.pop();
    return o;
}
m$1(Wf, "leastCommonAncestor");
function Pi() {
    for(var t = this, e = [
        t
    ]; t = t.parent;)e.push(t);
    return e;
}
m$1(Pi, "default");
function Yi() {
    return Array.from(this);
}
m$1(Yi, "default");
function Fi() {
    var t = [];
    return this.eachBefore(function(e) {
        e.children || t.push(e);
    }), t;
}
m$1(Fi, "default");
function Ui() {
    var t = this, e = [];
    return t.each(function(n) {
        n !== t && e.push({
            source: n.parent,
            target: n
        });
    }), e;
}
m$1(Ui, "default");
function* Li() {
    var t = this, e, n = [
        t
    ], i, o, a;
    do for(e = /*#__PURE__*/ n.reverse(), n = []; t = /*#__PURE__*/ e.pop();)if (yield t, i = t.children) for(o = 0, a = i.length; o < a; ++o)n.push(i[o]);
    while (n.length);
}
m$1(Li, "default");
function Pn(t, e) {
    t instanceof Map ? (t = [
        void 0,
        t
    ], e === void 0 && (e = Gf)) : e === void 0 && (e = Xf);
    for(var n = new ze(t), i, o = [
        n
    ], a, s, u, l; i = /*#__PURE__*/ o.pop();)if ((s = /*#__PURE__*/ e(i.data)) && (l = (s = /*#__PURE__*/ Array.from(s)).length)) for(i.children = s, u = l - 1; u >= 0; --u)o.push(a = s[u] = new ze(s[u])), a.parent = i, a.depth = i.depth + 1;
    return n.eachBefore(Qf);
}
m$1(Pn, "hierarchy");
function Vf() {
    return Pn(this).eachBefore(Zf);
}
m$1(Vf, "node_copy");
function Xf(t) {
    return t.children;
}
m$1(Xf, "objectChildren");
function Gf(t) {
    return Array.isArray(t) ? t[1] : null;
}
m$1(Gf, "mapChildren");
function Zf(t) {
    t.data.value !== void 0 && (t.value = t.data.value), t.data = t.data.data;
}
m$1(Zf, "copyData");
function Qf(t) {
    var e = 0;
    do t.height = e;
    while ((t = t.parent) && t.height < ++e);
}
m$1(Qf, "computeHeight");
function ze(t) {
    this.data = t, this.depth = this.height = 0, this.parent = null;
}
m$1(ze, "Node");
ze.prototype = Pn.prototype = {
    constructor: ze,
    count: Ni,
    each: Ai,
    eachAfter: $i,
    eachBefore: Di,
    find: Oi,
    sum: Ei,
    sort: Ii,
    path: Ri,
    ancestors: Pi,
    descendants: Yi,
    leaves: Fi,
    links: Ui,
    copy: Vf,
    [Symbol.iterator]: Li
};
function zi(t) {
    t.x0 = /*#__PURE__*/ Math.round(t.x0), t.y0 = /*#__PURE__*/ Math.round(t.y0), t.x1 = /*#__PURE__*/ Math.round(t.x1), t.y1 = /*#__PURE__*/ Math.round(t.y1);
}
m$1(zi, "default");
function Hi(t, e, n, i, o) {
    for(var a = t.children, s, u = -1, l = a.length, f = t.value && (i - e) / t.value; ++u < l;)s = a[u], s.y0 = n, s.y1 = o, s.x0 = e, s.x1 = e += s.value * f;
}
m$1(Hi, "default");
function Bi(t, e, n, i, o) {
    for(var a = t.children, s, u = -1, l = a.length, f = t.value && (o - n) / t.value; ++u < l;)s = a[u], s.x0 = e, s.x1 = i, s.y0 = n, s.y1 = n += s.value * f;
}
m$1(Bi, "default");
var Kf = (1 + Math.sqrt(5)) / 2;
function Jf(t, e, n, i, o, a) {
    for(var s = [], u = e.children, l, f, h = 0, p = 0, c = u.length, m, _, M = e.value, T, k, I, C, A, O, w; h < c;){
        m = o - n, _ = a - i;
        do T = u[p++].value;
        while (!T && p < c);
        for(k = I = T, O = Math.max(_ / m, m / _) / (M * t), w = T * T * O, A = /*#__PURE__*/ Math.max(I / w, w / k); p < c; ++p){
            if (T += f = u[p].value, f < k && (k = f), f > I && (I = f), w = T * T * O, C = /*#__PURE__*/ Math.max(I / w, w / k), C > A) {
                T -= f;
                break;
            }
            A = C;
        }
        s.push(l = {
            value: T,
            dice: m < _,
            children: /*#__PURE__*/ u.slice(h, p)
        }), l.dice ? Hi(l, n, i, o, M ? i += _ * T / M : a) : Bi(l, n, i, M ? n += m * T / M : o, a), M -= T, h = p;
    }
    return s;
}
m$1(Jf, "squarifyRatio");
var Ya = /*#__PURE__*/ m$1(function t(e) {
    function n(i, o, a, s, u) {
        Jf(e, i, o, a, s, u);
    }
    return m$1(n, "squarify"), n.ratio = function(i) {
        return t((i = +i) > 1 ? i : 1);
    }, n;
}, "custom")(Kf);
function Fa(t) {
    if (typeof t != "function") throw new Error;
    return t;
}
m$1(Fa, "required");
function ye() {
    return 0;
}
m$1(ye, "constantZero");
function Jt(t) {
    return function() {
        return t;
    };
}
m$1(Jt, "default");
function Ua() {
    var t = Ya, e = false, n = 1, i = 1, o = [
        0
    ], a = ye, s = ye, u = ye, l = ye, f = ye;
    function h(c) {
        return c.x0 = c.y0 = 0, c.x1 = n, c.y1 = i, c.eachBefore(p), o = [
            0
        ], e && c.eachBefore(zi), c;
    }
    m$1(h, "treemap");
    function p(c) {
        var m = o[c.depth], _ = c.x0 + m, M = c.y0 + m, T = c.x1 - m, k = c.y1 - m;
        T < _ && (_ = T = (_ + T) / 2), k < M && (M = k = (M + k) / 2), c.x0 = _, c.y0 = M, c.x1 = T, c.y1 = k, c.children && (m = o[c.depth + 1] = a(c) / 2, _ += f(c) - m, M += s(c) - m, T -= u(c) - m, k -= l(c) - m, T < _ && (_ = T = (_ + T) / 2), k < M && (M = k = (M + k) / 2), t(c, _, M, T, k));
    }
    return m$1(p, "positionNode"), h.round = function(c) {
        return arguments.length ? (e = !!c, h) : e;
    }, h.size = function(c) {
        return arguments.length ? (n = +c[0], i = +c[1], h) : [
            n,
            i
        ];
    }, h.tile = function(c) {
        return arguments.length ? (t = /*#__PURE__*/ Fa(c), h) : t;
    }, h.padding = function(c) {
        return arguments.length ? h.paddingInner(c).paddingOuter(c) : h.paddingInner();
    }, h.paddingInner = function(c) {
        return arguments.length ? (a = typeof c == "function" ? c : Jt(+c), h) : a;
    }, h.paddingOuter = function(c) {
        return arguments.length ? h.paddingTop(c).paddingRight(c).paddingBottom(c).paddingLeft(c) : h.paddingTop();
    }, h.paddingTop = function(c) {
        return arguments.length ? (s = typeof c == "function" ? c : Jt(+c), h) : s;
    }, h.paddingRight = function(c) {
        return arguments.length ? (u = typeof c == "function" ? c : Jt(+c), h) : u;
    }, h.paddingBottom = function(c) {
        return arguments.length ? (l = typeof c == "function" ? c : Jt(+c), h) : l;
    }, h.paddingLeft = function(c) {
        return arguments.length ? (f = typeof c == "function" ? c : Jt(+c), h) : f;
    }, h;
}
m$1(Ua, "default");
function Lt(t, e) {
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
m$1(Lt, "initRange");
var qi = /*#__PURE__*/ Symbol("implicit");
function He() {
    var t = new fe, e = [], n = [], i = qi;
    function o(a) {
        let s = /*#__PURE__*/ t.get(a);
        if (s === void 0) {
            if (i !== qi) return i;
            t.set(a, s = e.push(a) - 1);
        }
        return n[s % n.length];
    }
    return m$1(o, "scale"), o.domain = function(a) {
        if (!arguments.length) return e.slice();
        e = [], t = new fe;
        for (let s of a)t.has(s) || t.set(s, e.push(s) - 1);
        return o;
    }, o.range = function(a) {
        return arguments.length ? (n = /*#__PURE__*/ Array.from(a), o) : n.slice();
    }, o.unknown = function(a) {
        return arguments.length ? (i = a, o) : i;
    }, o.copy = function() {
        return He(e, n).unknown(i);
    }, Lt.apply(o, arguments), o;
}
m$1(He, "ordinal");
function Wi(t) {
    return function() {
        return t;
    };
}
m$1(Wi, "constants");
function Vi(t) {
    return +t;
}
m$1(Vi, "number");
var La = [
    0,
    1
];
function ve(t) {
    return t;
}
m$1(ve, "identity");
function Xi(t, e) {
    return (e -= t = +t) ? function(n) {
        return (n - t) / e;
    } : Wi(isNaN(e) ? NaN : .5);
}
m$1(Xi, "normalize");
function jf(t, e) {
    var n;
    return t > e && (n = t, t = e, e = n), function(i) {
        return Math.max(t, /*#__PURE__*/ Math.min(e, i));
    };
}
m$1(jf, "clamper");
function tl(t, e, n) {
    var i = t[0], o = t[1], a = e[0], s = e[1];
    return o < i ? (i = /*#__PURE__*/ Xi(o, i), a = /*#__PURE__*/ n(s, a)) : (i = /*#__PURE__*/ Xi(i, o), a = /*#__PURE__*/ n(a, s)), function(u) {
        return a(/*#__PURE__*/ i(u));
    };
}
m$1(tl, "bimap");
function el(t, e, n) {
    var i = Math.min(t.length, e.length) - 1, o = new Array(i), a = new Array(i), s = -1;
    for(t[i] < t[0] && (t = /*#__PURE__*/ t.slice().reverse(), e = /*#__PURE__*/ e.slice().reverse()); ++s < i;)o[s] = /*#__PURE__*/ Xi(t[s], t[s + 1]), a[s] = /*#__PURE__*/ n(e[s], e[s + 1]);
    return function(u) {
        var l = pr(t, u, 1, i) - 1;
        return a[l](/*#__PURE__*/ o[l](u));
    };
}
m$1(el, "polymap");
function Yn(t, e) {
    return e.domain(/*#__PURE__*/ t.domain()).range(/*#__PURE__*/ t.range()).interpolate(/*#__PURE__*/ t.interpolate()).clamp(/*#__PURE__*/ t.clamp()).unknown(/*#__PURE__*/ t.unknown());
}
m$1(Yn, "copy");
function nl() {
    var t = La, e = La, n = Ft, i, o, a, s = ve, u, l, f;
    function h() {
        var c = /*#__PURE__*/ Math.min(t.length, e.length);
        return s !== ve && (s = /*#__PURE__*/ jf(t[0], t[c - 1])), u = c > 2 ? el : tl, l = f = null, p;
    }
    m$1(h, "rescale");
    function p(c) {
        return c == null || isNaN(c = +c) ? a : (l || (l = /*#__PURE__*/ u(/*#__PURE__*/ t.map(i), e, n)))(/*#__PURE__*/ i(/*#__PURE__*/ s(c)));
    }
    return m$1(p, "scale"), p.invert = function(c) {
        return s(/*#__PURE__*/ o(/*#__PURE__*/ (f || (f = /*#__PURE__*/ u(e, /*#__PURE__*/ t.map(i), j)))(c)));
    }, p.domain = function(c) {
        return arguments.length ? (t = /*#__PURE__*/ Array.from(c, Vi), h()) : t.slice();
    }, p.range = function(c) {
        return arguments.length ? (e = /*#__PURE__*/ Array.from(c), h()) : e.slice();
    }, p.rangeRound = function(c) {
        return e = /*#__PURE__*/ Array.from(c), n = Mn, h();
    }, p.clamp = function(c) {
        return arguments.length ? (s = c ? true : ve, h()) : s !== ve;
    }, p.interpolate = function(c) {
        return arguments.length ? (n = c, h()) : n;
    }, p.unknown = function(c) {
        return arguments.length ? (a = c, p) : a;
    }, function(c, m) {
        return i = c, o = m, h();
    };
}
m$1(nl, "transformer");
function Be() {
    return nl()(ve, ve);
}
m$1(Be, "continuous");
function Gi(t, e, n, i) {
    var o = /*#__PURE__*/ le(t, e, n), a;
    switch(i = /*#__PURE__*/ Ut(i ?? ",f"), i.type){
        case "s":
            {
                var s = /*#__PURE__*/ Math.max(/*#__PURE__*/ Math.abs(t), /*#__PURE__*/ Math.abs(e));
                return i.precision == null && !isNaN(a = /*#__PURE__*/ In(o, s)) && (i.precision = a), On(i, s);
            }
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
            {
                i.precision == null && !isNaN(a = /*#__PURE__*/ Rn(o, /*#__PURE__*/ Math.max(/*#__PURE__*/ Math.abs(t), /*#__PURE__*/ Math.abs(e)))) && (i.precision = a - (i.type === "e"));
                break;
            }
        case "f":
        case "%":
            {
                i.precision == null && !isNaN(a = /*#__PURE__*/ En(o)) && (i.precision = a - (i.type === "%") * 2);
                break;
            }
    }
    return $n(i);
}
m$1(Gi, "tickFormat");
function rl(t) {
    var e = t.domain;
    return t.ticks = function(n) {
        var i = /*#__PURE__*/ e();
        return hn(i[0], i[i.length - 1], n ?? 10);
    }, t.tickFormat = function(n, i) {
        var o = /*#__PURE__*/ e();
        return Gi(o[0], o[o.length - 1], n ?? 10, i);
    }, t.nice = function(n) {
        n == null && (n = 10);
        var i = /*#__PURE__*/ e(), o = 0, a = i.length - 1, s = i[o], u = i[a], l, f, h = 10;
        for(u < s && (f = s, s = u, u = f, f = o, o = a, a = f); h-- > 0;){
            if (f = /*#__PURE__*/ Ee(s, u, n), f === l) return i[o] = s, i[a] = u, e(i);
            if (f > 0) s = Math.floor(s / f) * f, u = Math.ceil(u / f) * f;
            else if (f < 0) s = Math.ceil(s * f) / f, u = Math.floor(u * f) / f;
            else break;
            l = f;
        }
        return t;
    }, t;
}
m$1(rl, "linearish");
function Zi() {
    var t = /*#__PURE__*/ Be();
    return t.copy = function() {
        return Yn(t, /*#__PURE__*/ Zi());
    }, Lt.apply(t, arguments), rl(t);
}
m$1(Zi, "linear");
var Qi = new Date, Ki = new Date;
function H(t, e, n, i) {
    function o(a) {
        return t(a = arguments.length === 0 ? new Date : new Date(+a)), a;
    }
    return m$1(o, "interval"), o.floor = (a)=>(t(a = new Date(+a)), a), o.ceil = (a)=>(t(a = new Date(a - 1)), e(a, 1), t(a), a), o.round = (a)=>{
        let s = /*#__PURE__*/ o(a), u = /*#__PURE__*/ o.ceil(a);
        return a - s < u - a ? s : u;
    }, o.offset = (a, s)=>(e(a = new Date(+a), s == null ? 1 : Math.floor(s)), a), o.range = (a, s, u)=>{
        let l = [];
        if (a = /*#__PURE__*/ o.ceil(a), u = u == null ? 1 : Math.floor(u), !(a < s) || !(u > 0)) return l;
        let f;
        do l.push(f = new Date(+a)), e(a, u), t(a);
        while (f < a && a < s);
        return l;
    }, o.filter = (a)=>H((s)=>{
            if (s >= s) for(; t(s), !a(s);)s.setTime(s - 1);
        }, (s, u)=>{
            if (s >= s) if (u < 0) for(; ++u <= 0;)for(; e(s, -1), !a(s););
            else for(; --u >= 0;)for(; e(s, 1), !a(s););
        }), n && (o.count = (a, s)=>(Qi.setTime(+a), Ki.setTime(+s), t(Qi), t(Ki), Math.floor(/*#__PURE__*/ n(Qi, Ki))), o.every = (a)=>(a = /*#__PURE__*/ Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? o.filter(i ? (s)=>i(s) % a === 0 : (s)=>o.count(0, s) % a === 0) : o)), o;
}
m$1(H, "timeInterval");
var jt = /*#__PURE__*/ H(()=>{}, (t, e)=>{
    t.setTime(+t + e);
}, (t, e)=>e - t);
jt.every = (t)=>(t = /*#__PURE__*/ Math.floor(t), !isFinite(t) || !(t > 0) ? null : t > 1 ? H((e)=>{
        e.setTime(Math.floor(e / t) * t);
    }, (e, n)=>{
        e.setTime(+e + n * t);
    }, (e, n)=>(n - e) / t) : jt);
jt.range;
var Tt = /*#__PURE__*/ H((t)=>{
    t.setTime(t - t.getMilliseconds());
}, (t, e)=>{
    t.setTime(+t + e * 1e3);
}, (t, e)=>(e - t) / 1e3, (t)=>t.getUTCSeconds());
Tt.range;
var we = /*#__PURE__*/ H((t)=>{
    t.setTime(t - t.getMilliseconds() - t.getSeconds() * 1e3);
}, (t, e)=>{
    t.setTime(+t + e * 6e4);
}, (t, e)=>(e - t) / 6e4, (t)=>t.getMinutes());
we.range;
var Fn = /*#__PURE__*/ H((t)=>{
    t.setUTCSeconds(0, 0);
}, (t, e)=>{
    t.setTime(+t + e * 6e4);
}, (t, e)=>(e - t) / 6e4, (t)=>t.getUTCMinutes());
Fn.range;
var be = /*#__PURE__*/ H((t)=>{
    t.setTime(t - t.getMilliseconds() - t.getSeconds() * 1e3 - t.getMinutes() * 6e4);
}, (t, e)=>{
    t.setTime(+t + e * 36e5);
}, (t, e)=>(e - t) / 36e5, (t)=>t.getHours());
be.range;
var Un = /*#__PURE__*/ H((t)=>{
    t.setUTCMinutes(0, 0, 0);
}, (t, e)=>{
    t.setTime(+t + e * 36e5);
}, (t, e)=>(e - t) / 36e5, (t)=>t.getUTCHours());
Un.range;
var Dt = /*#__PURE__*/ H((t)=>t.setHours(0, 0, 0, 0), (t, e)=>t.setDate(t.getDate() + e), (t, e)=>(e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * 6e4) / 864e5, (t)=>t.getDate() - 1);
Dt.range;
var We = /*#__PURE__*/ H((t)=>{
    t.setUTCHours(0, 0, 0, 0);
}, (t, e)=>{
    t.setUTCDate(t.getUTCDate() + e);
}, (t, e)=>(e - t) / 864e5, (t)=>t.getUTCDate() - 1);
We.range;
var Ln = /*#__PURE__*/ H((t)=>{
    t.setUTCHours(0, 0, 0, 0);
}, (t, e)=>{
    t.setUTCDate(t.getUTCDate() + e);
}, (t, e)=>(e - t) / 864e5, (t)=>Math.floor(t / 864e5));
Ln.range;
function ne(t) {
    return H((e)=>{
        e.setDate(e.getDate() - (e.getDay() + 7 - t) % 7), e.setHours(0, 0, 0, 0);
    }, (e, n)=>{
        e.setDate(e.getDate() + n * 7);
    }, (e, n)=>(n - e - (n.getTimezoneOffset() - e.getTimezoneOffset()) * 6e4) / 6048e5);
}
m$1(ne, "timeWeekday");
var $t = /*#__PURE__*/ ne(0), Me = /*#__PURE__*/ ne(1), qa = /*#__PURE__*/ ne(2), Wa = /*#__PURE__*/ ne(3), zt = /*#__PURE__*/ ne(4), Va = /*#__PURE__*/ ne(5), Xa = /*#__PURE__*/ ne(6);
$t.range;
Me.range;
qa.range;
Wa.range;
zt.range;
Va.range;
Xa.range;
function re(t) {
    return H((e)=>{
        e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t) % 7), e.setUTCHours(0, 0, 0, 0);
    }, (e, n)=>{
        e.setUTCDate(e.getUTCDate() + n * 7);
    }, (e, n)=>(n - e) / 6048e5);
}
m$1(re, "utcWeekday");
var ie = /*#__PURE__*/ re(0), Te = /*#__PURE__*/ re(1), Za = /*#__PURE__*/ re(2), Qa = /*#__PURE__*/ re(3), Ht = /*#__PURE__*/ re(4), Ka = /*#__PURE__*/ re(5), Ja = /*#__PURE__*/ re(6);
ie.range;
Te.range;
Za.range;
Qa.range;
Ht.range;
Ka.range;
Ja.range;
var ke = /*#__PURE__*/ H((t)=>{
    t.setDate(1), t.setHours(0, 0, 0, 0);
}, (t, e)=>{
    t.setMonth(t.getMonth() + e);
}, (t, e)=>e.getMonth() - t.getMonth() + (e.getFullYear() - t.getFullYear()) * 12, (t)=>t.getMonth());
ke.range;
var zn = /*#__PURE__*/ H((t)=>{
    t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
}, (t, e)=>{
    t.setUTCMonth(t.getUTCMonth() + e);
}, (t, e)=>e.getUTCMonth() - t.getUTCMonth() + (e.getUTCFullYear() - t.getUTCFullYear()) * 12, (t)=>t.getUTCMonth());
zn.range;
var lt = /*#__PURE__*/ H((t)=>{
    t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, e)=>{
    t.setFullYear(t.getFullYear() + e);
}, (t, e)=>e.getFullYear() - t.getFullYear(), (t)=>t.getFullYear());
lt.every = (t)=>!isFinite(t = /*#__PURE__*/ Math.floor(t)) || !(t > 0) ? null : H((e)=>{
        e.setFullYear(Math.floor(e.getFullYear() / t) * t), e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
    }, (e, n)=>{
        e.setFullYear(e.getFullYear() + n * t);
    });
lt.range;
var yt = /*#__PURE__*/ H((t)=>{
    t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, e)=>{
    t.setUTCFullYear(t.getUTCFullYear() + e);
}, (t, e)=>e.getUTCFullYear() - t.getUTCFullYear(), (t)=>t.getUTCFullYear());
yt.every = (t)=>!isFinite(t = /*#__PURE__*/ Math.floor(t)) || !(t > 0) ? null : H((e)=>{
        e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t), e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
    }, (e, n)=>{
        e.setUTCFullYear(e.getUTCFullYear() + n * t);
    });
yt.range;
function es(t, e, n, i, o, a) {
    let s = [
        [
            Tt,
            1,
            1e3
        ],
        [
            Tt,
            5,
            5 * 1e3
        ],
        [
            Tt,
            15,
            15 * 1e3
        ],
        [
            Tt,
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
            o,
            1,
            36e5
        ],
        [
            o,
            3,
            3 * 36e5
        ],
        [
            o,
            6,
            6 * 36e5
        ],
        [
            o,
            12,
            12 * 36e5
        ],
        [
            i,
            1,
            864e5
        ],
        [
            i,
            2,
            2 * 864e5
        ],
        [
            n,
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
    function u(f, h, p) {
        let c = h < f;
        c && ([f, h] = [
            h,
            f
        ]);
        let m = p && typeof p.range == "function" ? p : l(f, h, p), _ = m ? m.range(f, +h + 1) : [];
        return c ? _.reverse() : _;
    }
    m$1(u, "ticks");
    function l(f, h, p) {
        let c = Math.abs(h - f) / p, m = /*#__PURE__*/ Xt(([, , T])=>T).right(s, c);
        if (m === s.length) return t.every(/*#__PURE__*/ le(f / 31536e6, h / 31536e6, p));
        if (m === 0) return jt.every(/*#__PURE__*/ Math.max(/*#__PURE__*/ le(f, h, p), 1));
        let [_, M] = s[c / s[m - 1][2] < s[m][2] / c ? m - 1 : m];
        return _.every(M);
    }
    return m$1(l, "tickInterval"), [
        u,
        l
    ];
}
m$1(es, "ticker");
var [Nl, Al] = es(yt, zn, ie, Ln, Un, Fn), [Ji, ji] = es(lt, ke, $t, Dt, be, we);
function to(t) {
    if (0 <= t.y && t.y < 100) {
        var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
        return e.setFullYear(t.y), e;
    }
    return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
}
m$1(to, "localDate");
function eo(t) {
    if (0 <= t.y && t.y < 100) {
        var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
        return e.setUTCFullYear(t.y), e;
    }
    return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
}
m$1(eo, "utcDate");
function Ve(t, e, n) {
    return {
        y: t,
        m: e,
        d: n,
        H: 0,
        M: 0,
        S: 0,
        L: 0
    };
}
m$1(Ve, "newDate");
function no(t) {
    var e = t.dateTime, n = t.date, i = t.time, o = t.periods, a = t.days, s = t.shortDays, u = t.months, l = t.shortMonths, f = /*#__PURE__*/ Xe(o), h = /*#__PURE__*/ Ge(o), p = /*#__PURE__*/ Xe(a), c = /*#__PURE__*/ Ge(a), m = /*#__PURE__*/ Xe(s), _ = /*#__PURE__*/ Ge(s), M = /*#__PURE__*/ Xe(u), T = /*#__PURE__*/ Ge(u), k = /*#__PURE__*/ Xe(l), I = /*#__PURE__*/ Ge(l), C = {
        a: D,
        A: $,
        b: P,
        B: z,
        c: null,
        d: ss,
        e: ss,
        f: Jl,
        g: uc,
        G: lc,
        H: Zl,
        I: Ql,
        j: Kl,
        L: hs,
        m: jl,
        M: tc,
        p: W,
        q: X,
        Q: ls,
        s: cs,
        S: ec,
        u: nc,
        U: rc,
        V: ic,
        w: oc,
        W: ac,
        x: null,
        X: null,
        y: sc,
        Y: fc,
        Z: cc,
        "%": fs
    }, A = {
        a: J,
        A: ht,
        b: Q,
        B: dt,
        c: null,
        d: us,
        e: us,
        f: dc,
        g: kc,
        G: Cc,
        H: hc,
        I: pc,
        j: mc,
        L: ms,
        m: xc,
        M: _c,
        p: st,
        q: Z,
        Q: ls,
        s: cs,
        S: gc,
        u: yc,
        U: vc,
        V: wc,
        w: bc,
        W: Mc,
        x: null,
        X: null,
        y: Tc,
        Y: Sc,
        Z: Nc,
        "%": fs
    }, O = {
        a: B,
        A: N,
        b: v,
        B: d,
        c: x,
        d: os,
        e: os,
        f: Wl,
        g: is,
        G: rs,
        H: as,
        I: as,
        j: zl,
        L: ql,
        m: Ll,
        M: Hl,
        p: E,
        q: Ul,
        Q: Xl,
        s: Gl,
        S: Bl,
        u: Il,
        U: Rl,
        V: Pl,
        w: El,
        W: Yl,
        x: S,
        X: y,
        y: is,
        Y: rs,
        Z: Fl,
        "%": Vl
    };
    C.x = /*#__PURE__*/ w(n, C), C.X = /*#__PURE__*/ w(i, C), C.c = /*#__PURE__*/ w(e, C), A.x = /*#__PURE__*/ w(n, A), A.X = /*#__PURE__*/ w(i, A), A.c = /*#__PURE__*/ w(e, A);
    function w(b, R) {
        return function(F) {
            var g = [], at = -1, q = 0, ut = b.length, ft, Wt, Ho;
            for(F instanceof Date || (F = new Date(+F)); ++at < ut;)b.charCodeAt(at) === 37 && (g.push(/*#__PURE__*/ b.slice(q, at)), (Wt = ns[ft = /*#__PURE__*/ b.charAt(++at)]) != null ? ft = /*#__PURE__*/ b.charAt(++at) : Wt = ft === "e" ? " " : "0", (Ho = R[ft]) && (ft = /*#__PURE__*/ Ho(F, Wt)), g.push(ft), q = at + 1);
            return g.push(/*#__PURE__*/ b.slice(q, at)), g.join("");
        };
    }
    m$1(w, "newFormat");
    function Y(b, R) {
        return function(F) {
            var g = /*#__PURE__*/ Ve(1900, void 0, 1), at = /*#__PURE__*/ U(g, b, F += "", 0), q, ut;
            if (at != F.length) return null;
            if ("Q" in g) return new Date(g.Q);
            if ("s" in g) return new Date(g.s * 1e3 + ("L" in g ? g.L : 0));
            if (R && !("Z" in g) && (g.Z = 0), "p" in g && (g.H = g.H % 12 + g.p * 12), g.m === void 0 && (g.m = "q" in g ? g.q : 0), "V" in g) {
                if (g.V < 1 || g.V > 53) return null;
                "w" in g || (g.w = 1), "Z" in g ? (q = /*#__PURE__*/ eo(/*#__PURE__*/ Ve(g.y, 0, 1)), ut = /*#__PURE__*/ q.getUTCDay(), q = ut > 4 || ut === 0 ? Te.ceil(q) : Te(q), q = /*#__PURE__*/ We.offset(q, (g.V - 1) * 7), g.y = /*#__PURE__*/ q.getUTCFullYear(), g.m = /*#__PURE__*/ q.getUTCMonth(), g.d = q.getUTCDate() + (g.w + 6) % 7) : (q = /*#__PURE__*/ to(/*#__PURE__*/ Ve(g.y, 0, 1)), ut = /*#__PURE__*/ q.getDay(), q = ut > 4 || ut === 0 ? Me.ceil(q) : Me(q), q = /*#__PURE__*/ Dt.offset(q, (g.V - 1) * 7), g.y = /*#__PURE__*/ q.getFullYear(), g.m = /*#__PURE__*/ q.getMonth(), g.d = q.getDate() + (g.w + 6) % 7);
            } else ("W" in g || "U" in g) && ("w" in g || (g.w = "u" in g ? g.u % 7 : "W" in g ? 1 : 0), ut = "Z" in g ? eo(/*#__PURE__*/ Ve(g.y, 0, 1)).getUTCDay() : to(/*#__PURE__*/ Ve(g.y, 0, 1)).getDay(), g.m = 0, g.d = "W" in g ? (g.w + 6) % 7 + g.W * 7 - (ut + 5) % 7 : g.w + g.U * 7 - (ut + 6) % 7);
            return "Z" in g ? (g.H += g.Z / 100 | 0, g.M += g.Z % 100, eo(g)) : to(g);
        };
    }
    m$1(Y, "newParse");
    function U(b, R, F, g) {
        for(var at = 0, q = R.length, ut = F.length, ft, Wt; at < q;){
            if (g >= ut) return -1;
            if (ft = /*#__PURE__*/ R.charCodeAt(at++), ft === 37) {
                if (ft = /*#__PURE__*/ R.charAt(at++), Wt = O[ft in ns ? R.charAt(at++) : ft], !Wt || (g = /*#__PURE__*/ Wt(b, F, g)) < 0) return -1;
            } else if (ft != F.charCodeAt(g++)) return -1;
        }
        return g;
    }
    m$1(U, "parseSpecifier");
    function E(b, R, F) {
        var g = /*#__PURE__*/ f.exec(/*#__PURE__*/ R.slice(F));
        return g ? (b.p = /*#__PURE__*/ h.get(/*#__PURE__*/ g[0].toLowerCase()), F + g[0].length) : -1;
    }
    m$1(E, "parsePeriod");
    function B(b, R, F) {
        var g = /*#__PURE__*/ m.exec(/*#__PURE__*/ R.slice(F));
        return g ? (b.w = /*#__PURE__*/ _.get(/*#__PURE__*/ g[0].toLowerCase()), F + g[0].length) : -1;
    }
    m$1(B, "parseShortWeekday");
    function N(b, R, F) {
        var g = /*#__PURE__*/ p.exec(/*#__PURE__*/ R.slice(F));
        return g ? (b.w = /*#__PURE__*/ c.get(/*#__PURE__*/ g[0].toLowerCase()), F + g[0].length) : -1;
    }
    m$1(N, "parseWeekday");
    function v(b, R, F) {
        var g = /*#__PURE__*/ k.exec(/*#__PURE__*/ R.slice(F));
        return g ? (b.m = /*#__PURE__*/ I.get(/*#__PURE__*/ g[0].toLowerCase()), F + g[0].length) : -1;
    }
    m$1(v, "parseShortMonth");
    function d(b, R, F) {
        var g = /*#__PURE__*/ M.exec(/*#__PURE__*/ R.slice(F));
        return g ? (b.m = /*#__PURE__*/ T.get(/*#__PURE__*/ g[0].toLowerCase()), F + g[0].length) : -1;
    }
    m$1(d, "parseMonth");
    function x(b, R, F) {
        return U(b, e, R, F);
    }
    m$1(x, "parseLocaleDateTime");
    function S(b, R, F) {
        return U(b, n, R, F);
    }
    m$1(S, "parseLocaleDate");
    function y(b, R, F) {
        return U(b, i, R, F);
    }
    m$1(y, "parseLocaleTime");
    function D(b) {
        return s[b.getDay()];
    }
    m$1(D, "formatShortWeekday");
    function $(b) {
        return a[b.getDay()];
    }
    m$1($, "formatWeekday");
    function P(b) {
        return l[b.getMonth()];
    }
    m$1(P, "formatShortMonth");
    function z(b) {
        return u[b.getMonth()];
    }
    m$1(z, "formatMonth");
    function W(b) {
        return o[+(b.getHours() >= 12)];
    }
    m$1(W, "formatPeriod");
    function X(b) {
        return 1 + ~~(b.getMonth() / 3);
    }
    m$1(X, "formatQuarter");
    function J(b) {
        return s[b.getUTCDay()];
    }
    m$1(J, "formatUTCShortWeekday");
    function ht(b) {
        return a[b.getUTCDay()];
    }
    m$1(ht, "formatUTCWeekday");
    function Q(b) {
        return l[b.getUTCMonth()];
    }
    m$1(Q, "formatUTCShortMonth");
    function dt(b) {
        return u[b.getUTCMonth()];
    }
    m$1(dt, "formatUTCMonth");
    function st(b) {
        return o[+(b.getUTCHours() >= 12)];
    }
    m$1(st, "formatUTCPeriod");
    function Z(b) {
        return 1 + ~~(b.getUTCMonth() / 3);
    }
    return m$1(Z, "formatUTCQuarter"), {
        format: /*#__PURE__*/ m$1(function(b) {
            var R = /*#__PURE__*/ w(b += "", C);
            return R.toString = function() {
                return b;
            }, R;
        }, "format"),
        parse: /*#__PURE__*/ m$1(function(b) {
            var R = /*#__PURE__*/ Y(b += "", false);
            return R.toString = function() {
                return b;
            }, R;
        }, "parse"),
        utcFormat: /*#__PURE__*/ m$1(function(b) {
            var R = /*#__PURE__*/ w(b += "", A);
            return R.toString = function() {
                return b;
            }, R;
        }, "utcFormat"),
        utcParse: /*#__PURE__*/ m$1(function(b) {
            var R = /*#__PURE__*/ Y(b += "", true);
            return R.toString = function() {
                return b;
            }, R;
        }, "utcParse")
    };
}
m$1(no, "formatLocale");
var ns = {
    "-": "",
    _: " ",
    0: "0"
}, tt = /^\s*\d+/, Dl = /^%/, $l = /[\\^$*+?|[\]().{}]/g;
function L(t, e, n) {
    var i = t < 0 ? "-" : "", o = (i ? -t : t) + "", a = o.length;
    return i + (a < n ? new Array(n - a + 1).join(e) + o : o);
}
m$1(L, "pad");
function Ol(t) {
    return t.replace($l, "\\$&");
}
m$1(Ol, "requote");
function Xe(t) {
    return new RegExp("^(?:" + t.map(Ol).join("|") + ")", "i");
}
m$1(Xe, "formatRe");
function Ge(t) {
    return new Map(t.map((e, n)=>[
            /*#__PURE__*/ e.toLowerCase(),
            n
        ]));
}
m$1(Ge, "formatLookup");
function El(t, e, n) {
    var i = /*#__PURE__*/ tt.exec(/*#__PURE__*/ e.slice(n, n + 1));
    return i ? (t.w = +i[0], n + i[0].length) : -1;
}
m$1(El, "parseWeekdayNumberSunday");
function Il(t, e, n) {
    var i = /*#__PURE__*/ tt.exec(/*#__PURE__*/ e.slice(n, n + 1));
    return i ? (t.u = +i[0], n + i[0].length) : -1;
}
m$1(Il, "parseWeekdayNumberMonday");
function Rl(t, e, n) {
    var i = /*#__PURE__*/ tt.exec(/*#__PURE__*/ e.slice(n, n + 2));
    return i ? (t.U = +i[0], n + i[0].length) : -1;
}
m$1(Rl, "parseWeekNumberSunday");
function Pl(t, e, n) {
    var i = /*#__PURE__*/ tt.exec(/*#__PURE__*/ e.slice(n, n + 2));
    return i ? (t.V = +i[0], n + i[0].length) : -1;
}
m$1(Pl, "parseWeekNumberISO");
function Yl(t, e, n) {
    var i = /*#__PURE__*/ tt.exec(/*#__PURE__*/ e.slice(n, n + 2));
    return i ? (t.W = +i[0], n + i[0].length) : -1;
}
m$1(Yl, "parseWeekNumberMonday");
function rs(t, e, n) {
    var i = /*#__PURE__*/ tt.exec(/*#__PURE__*/ e.slice(n, n + 4));
    return i ? (t.y = +i[0], n + i[0].length) : -1;
}
m$1(rs, "parseFullYear");
function is(t, e, n) {
    var i = /*#__PURE__*/ tt.exec(/*#__PURE__*/ e.slice(n, n + 2));
    return i ? (t.y = +i[0] + (+i[0] > 68 ? 1900 : 2e3), n + i[0].length) : -1;
}
m$1(is, "parseYear");
function Fl(t, e, n) {
    var i = /*#__PURE__*/ /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(/*#__PURE__*/ e.slice(n, n + 6));
    return i ? (t.Z = i[1] ? 0 : -(i[2] + (i[3] || "00")), n + i[0].length) : -1;
}
m$1(Fl, "parseZone");
function Ul(t, e, n) {
    var i = /*#__PURE__*/ tt.exec(/*#__PURE__*/ e.slice(n, n + 1));
    return i ? (t.q = i[0] * 3 - 3, n + i[0].length) : -1;
}
m$1(Ul, "parseQuarter");
function Ll(t, e, n) {
    var i = /*#__PURE__*/ tt.exec(/*#__PURE__*/ e.slice(n, n + 2));
    return i ? (t.m = i[0] - 1, n + i[0].length) : -1;
}
m$1(Ll, "parseMonthNumber");
function os(t, e, n) {
    var i = /*#__PURE__*/ tt.exec(/*#__PURE__*/ e.slice(n, n + 2));
    return i ? (t.d = +i[0], n + i[0].length) : -1;
}
m$1(os, "parseDayOfMonth");
function zl(t, e, n) {
    var i = /*#__PURE__*/ tt.exec(/*#__PURE__*/ e.slice(n, n + 3));
    return i ? (t.m = 0, t.d = +i[0], n + i[0].length) : -1;
}
m$1(zl, "parseDayOfYear");
function as(t, e, n) {
    var i = /*#__PURE__*/ tt.exec(/*#__PURE__*/ e.slice(n, n + 2));
    return i ? (t.H = +i[0], n + i[0].length) : -1;
}
m$1(as, "parseHour24");
function Hl(t, e, n) {
    var i = /*#__PURE__*/ tt.exec(/*#__PURE__*/ e.slice(n, n + 2));
    return i ? (t.M = +i[0], n + i[0].length) : -1;
}
m$1(Hl, "parseMinutes");
function Bl(t, e, n) {
    var i = /*#__PURE__*/ tt.exec(/*#__PURE__*/ e.slice(n, n + 2));
    return i ? (t.S = +i[0], n + i[0].length) : -1;
}
m$1(Bl, "parseSeconds");
function ql(t, e, n) {
    var i = /*#__PURE__*/ tt.exec(/*#__PURE__*/ e.slice(n, n + 3));
    return i ? (t.L = +i[0], n + i[0].length) : -1;
}
m$1(ql, "parseMilliseconds");
function Wl(t, e, n) {
    var i = /*#__PURE__*/ tt.exec(/*#__PURE__*/ e.slice(n, n + 6));
    return i ? (t.L = /*#__PURE__*/ Math.floor(i[0] / 1e3), n + i[0].length) : -1;
}
m$1(Wl, "parseMicroseconds");
function Vl(t, e, n) {
    var i = /*#__PURE__*/ Dl.exec(/*#__PURE__*/ e.slice(n, n + 1));
    return i ? n + i[0].length : -1;
}
m$1(Vl, "parseLiteralPercent");
function Xl(t, e, n) {
    var i = /*#__PURE__*/ tt.exec(/*#__PURE__*/ e.slice(n));
    return i ? (t.Q = +i[0], n + i[0].length) : -1;
}
m$1(Xl, "parseUnixTimestamp");
function Gl(t, e, n) {
    var i = /*#__PURE__*/ tt.exec(/*#__PURE__*/ e.slice(n));
    return i ? (t.s = +i[0], n + i[0].length) : -1;
}
m$1(Gl, "parseUnixTimestampSeconds");
function ss(t, e) {
    return L(/*#__PURE__*/ t.getDate(), e, 2);
}
m$1(ss, "formatDayOfMonth");
function Zl(t, e) {
    return L(/*#__PURE__*/ t.getHours(), e, 2);
}
m$1(Zl, "formatHour24");
function Ql(t, e) {
    return L(t.getHours() % 12 || 12, e, 2);
}
m$1(Ql, "formatHour12");
function Kl(t, e) {
    return L(1 + Dt.count(/*#__PURE__*/ lt(t), t), e, 3);
}
m$1(Kl, "formatDayOfYear");
function hs(t, e) {
    return L(/*#__PURE__*/ t.getMilliseconds(), e, 3);
}
m$1(hs, "formatMilliseconds");
function Jl(t, e) {
    return hs(t, e) + "000";
}
m$1(Jl, "formatMicroseconds");
function jl(t, e) {
    return L(t.getMonth() + 1, e, 2);
}
m$1(jl, "formatMonthNumber");
function tc(t, e) {
    return L(/*#__PURE__*/ t.getMinutes(), e, 2);
}
m$1(tc, "formatMinutes");
function ec(t, e) {
    return L(/*#__PURE__*/ t.getSeconds(), e, 2);
}
m$1(ec, "formatSeconds");
function nc(t) {
    var e = /*#__PURE__*/ t.getDay();
    return e === 0 ? 7 : e;
}
m$1(nc, "formatWeekdayNumberMonday");
function rc(t, e) {
    return L(/*#__PURE__*/ $t.count(lt(t) - 1, t), e, 2);
}
m$1(rc, "formatWeekNumberSunday");
function ps(t) {
    var e = /*#__PURE__*/ t.getDay();
    return e >= 4 || e === 0 ? zt(t) : zt.ceil(t);
}
m$1(ps, "dISO");
function ic(t, e) {
    return t = /*#__PURE__*/ ps(t), L(zt.count(/*#__PURE__*/ lt(t), t) + (lt(t).getDay() === 4), e, 2);
}
m$1(ic, "formatWeekNumberISO");
function oc(t) {
    return t.getDay();
}
m$1(oc, "formatWeekdayNumberSunday");
function ac(t, e) {
    return L(/*#__PURE__*/ Me.count(lt(t) - 1, t), e, 2);
}
m$1(ac, "formatWeekNumberMonday");
function sc(t, e) {
    return L(t.getFullYear() % 100, e, 2);
}
m$1(sc, "formatYear");
function uc(t, e) {
    return t = /*#__PURE__*/ ps(t), L(t.getFullYear() % 100, e, 2);
}
m$1(uc, "formatYearISO");
function fc(t, e) {
    return L(t.getFullYear() % 1e4, e, 4);
}
m$1(fc, "formatFullYear");
function lc(t, e) {
    var n = /*#__PURE__*/ t.getDay();
    return t = n >= 4 || n === 0 ? zt(t) : zt.ceil(t), L(t.getFullYear() % 1e4, e, 4);
}
m$1(lc, "formatFullYearISO");
function cc(t) {
    var e = /*#__PURE__*/ t.getTimezoneOffset();
    return (e > 0 ? "-" : (e *= -1, "+")) + L(e / 60 | 0, "0", 2) + L(e % 60, "0", 2);
}
m$1(cc, "formatZone");
function us(t, e) {
    return L(/*#__PURE__*/ t.getUTCDate(), e, 2);
}
m$1(us, "formatUTCDayOfMonth");
function hc(t, e) {
    return L(/*#__PURE__*/ t.getUTCHours(), e, 2);
}
m$1(hc, "formatUTCHour24");
function pc(t, e) {
    return L(t.getUTCHours() % 12 || 12, e, 2);
}
m$1(pc, "formatUTCHour12");
function mc(t, e) {
    return L(1 + We.count(/*#__PURE__*/ yt(t), t), e, 3);
}
m$1(mc, "formatUTCDayOfYear");
function ms(t, e) {
    return L(/*#__PURE__*/ t.getUTCMilliseconds(), e, 3);
}
m$1(ms, "formatUTCMilliseconds");
function dc(t, e) {
    return ms(t, e) + "000";
}
m$1(dc, "formatUTCMicroseconds");
function xc(t, e) {
    return L(t.getUTCMonth() + 1, e, 2);
}
m$1(xc, "formatUTCMonthNumber");
function _c(t, e) {
    return L(/*#__PURE__*/ t.getUTCMinutes(), e, 2);
}
m$1(_c, "formatUTCMinutes");
function gc(t, e) {
    return L(/*#__PURE__*/ t.getUTCSeconds(), e, 2);
}
m$1(gc, "formatUTCSeconds");
function yc(t) {
    var e = /*#__PURE__*/ t.getUTCDay();
    return e === 0 ? 7 : e;
}
m$1(yc, "formatUTCWeekdayNumberMonday");
function vc(t, e) {
    return L(/*#__PURE__*/ ie.count(yt(t) - 1, t), e, 2);
}
m$1(vc, "formatUTCWeekNumberSunday");
function ds(t) {
    var e = /*#__PURE__*/ t.getUTCDay();
    return e >= 4 || e === 0 ? Ht(t) : Ht.ceil(t);
}
m$1(ds, "UTCdISO");
function wc(t, e) {
    return t = /*#__PURE__*/ ds(t), L(Ht.count(/*#__PURE__*/ yt(t), t) + (yt(t).getUTCDay() === 4), e, 2);
}
m$1(wc, "formatUTCWeekNumberISO");
function bc(t) {
    return t.getUTCDay();
}
m$1(bc, "formatUTCWeekdayNumberSunday");
function Mc(t, e) {
    return L(/*#__PURE__*/ Te.count(yt(t) - 1, t), e, 2);
}
m$1(Mc, "formatUTCWeekNumberMonday");
function Tc(t, e) {
    return L(t.getUTCFullYear() % 100, e, 2);
}
m$1(Tc, "formatUTCYear");
function kc(t, e) {
    return t = /*#__PURE__*/ ds(t), L(t.getUTCFullYear() % 100, e, 2);
}
m$1(kc, "formatUTCYearISO");
function Sc(t, e) {
    return L(t.getUTCFullYear() % 1e4, e, 4);
}
m$1(Sc, "formatUTCFullYear");
function Cc(t, e) {
    var n = /*#__PURE__*/ t.getUTCDay();
    return t = n >= 4 || n === 0 ? Ht(t) : Ht.ceil(t), L(t.getUTCFullYear() % 1e4, e, 4);
}
m$1(Cc, "formatUTCFullYearISO");
function Nc() {
    return "+0000";
}
m$1(Nc, "formatUTCZone");
function fs() {
    return "%";
}
m$1(fs, "formatLiteralPercent");
function ls(t) {
    return +t;
}
m$1(ls, "formatUnixTimestamp");
function cs(t) {
    return Math.floor(+t / 1e3);
}
m$1(cs, "formatUnixTimestampSeconds");
var Se, Hn;
ro({
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
function ro(t) {
    return Se = /*#__PURE__*/ no(t), Hn = Se.format, Se.parse, Se.utcFormat, Se.utcParse, Se;
}
m$1(ro, "defaultLocale");
function io(t, e) {
    t = /*#__PURE__*/ t.slice();
    var n = 0, i = t.length - 1, o = t[n], a = t[i], s;
    return a < o && (s = n, n = i, i = s, s = o, o = a, a = s), t[n] = /*#__PURE__*/ e.floor(o), t[i] = /*#__PURE__*/ e.ceil(a), t;
}
m$1(io, "nice");
function Ac(t) {
    return new Date(t);
}
m$1(Ac, "date");
function Dc(t) {
    return t instanceof Date ? +t : +new Date(+t);
}
m$1(Dc, "number");
function ys(t, e, n, i, o, a, s, u, l, f) {
    var h = /*#__PURE__*/ Be(), p = h.invert, c = h.domain, m = /*#__PURE__*/ f(".%L"), _ = /*#__PURE__*/ f(":%S"), M = /*#__PURE__*/ f("%I:%M"), T = /*#__PURE__*/ f("%I %p"), k = /*#__PURE__*/ f("%a %d"), I = /*#__PURE__*/ f("%b %d"), C = /*#__PURE__*/ f("%B"), A = /*#__PURE__*/ f("%Y");
    function O(w) {
        return (l(w) < w ? m : u(w) < w ? _ : s(w) < w ? M : a(w) < w ? T : i(w) < w ? o(w) < w ? k : I : n(w) < w ? C : A)(w);
    }
    return m$1(O, "tickFormat"), h.invert = function(w) {
        return new Date(p(w));
    }, h.domain = function(w) {
        return arguments.length ? c(/*#__PURE__*/ Array.from(w, Dc)) : c().map(Ac);
    }, h.ticks = function(w) {
        var Y = /*#__PURE__*/ c();
        return t(Y[0], Y[Y.length - 1], w ?? 10);
    }, h.tickFormat = function(w, Y) {
        return Y == null ? O : f(Y);
    }, h.nice = function(w) {
        var Y = /*#__PURE__*/ c();
        return (!w || typeof w.range != "function") && (w = /*#__PURE__*/ e(Y[0], Y[Y.length - 1], w ?? 10)), w ? c(/*#__PURE__*/ io(Y, w)) : h;
    }, h.copy = function() {
        return Yn(h, /*#__PURE__*/ ys(t, e, n, i, o, a, s, u, l, f));
    }, h;
}
m$1(ys, "calendar");
function vs() {
    return Lt.apply(/*#__PURE__*/ ys(Ji, ji, lt, ke, $t, Dt, be, we, Tt, Hn).domain([
        new Date(2e3, 0, 1),
        new Date(2e3, 0, 2)
    ]), arguments);
}
m$1(vs, "time");
function oo() {
    var t = /*#__PURE__*/ He().unknown(void 0), e = t.domain, n = t.range, i = 0, o = 1, a, s, u = false, l = 0, f = 0, h = .5;
    delete t.unknown;
    function p() {
        var c = e().length, m = o < i, _ = m ? o : i, M = m ? i : o;
        a = (M - _) / Math.max(1, c - l + f * 2), u && (a = /*#__PURE__*/ Math.floor(a)), _ += (M - _ - a * (c - l)) * h, s = a * (1 - l), u && (_ = /*#__PURE__*/ Math.round(_), s = /*#__PURE__*/ Math.round(s));
        var T = /*#__PURE__*/ pn(c).map(function(k) {
            return _ + a * k;
        });
        return n(m ? T.reverse() : T);
    }
    return m$1(p, "rescale"), t.domain = function(c) {
        return arguments.length ? (e(c), p()) : e();
    }, t.range = function(c) {
        return arguments.length ? ([i, o] = c, i = +i, o = +o, p()) : [
            i,
            o
        ];
    }, t.rangeRound = function(c) {
        return [i, o] = c, i = +i, o = +o, u = true, p();
    }, t.bandwidth = function() {
        return s;
    }, t.step = function() {
        return a;
    }, t.round = function(c) {
        return arguments.length ? (u = !!c, p()) : u;
    }, t.padding = function(c) {
        return arguments.length ? (l = /*#__PURE__*/ Math.min(1, f = +c), p()) : l;
    }, t.paddingInner = function(c) {
        return arguments.length ? (l = /*#__PURE__*/ Math.min(1, c), p()) : l;
    }, t.paddingOuter = function(c) {
        return arguments.length ? (f = +c, p()) : f;
    }, t.align = function(c) {
        return arguments.length ? (h = /*#__PURE__*/ Math.max(0, /*#__PURE__*/ Math.min(1, c)), p()) : h;
    }, t.copy = function() {
        return oo(/*#__PURE__*/ e(), [
            i,
            o
        ]).round(u).paddingInner(l).paddingOuter(f).align(h);
    }, Lt.apply(/*#__PURE__*/ p(), arguments);
}
m$1(oo, "band");
function ao(t) {
    for(var e = t.length / 6 | 0, n = new Array(e), i = 0; i < e;)n[i] = "#" + t.slice(i * 6, ++i * 6);
    return n;
}
m$1(ao, "default");
var $c = /*#__PURE__*/ ao("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
function V(t) {
    return m$1(function() {
        return t;
    }, "constant");
}
m$1(V, "default");
var so = Math.abs, rt = Math.atan2, Bt = Math.cos, ws = Math.max, Bn = Math.min, vt = Math.sin, oe = Math.sqrt, et = 1e-12, Ce = Math.PI, Ze = Ce / 2, Ne = 2 * Ce;
function bs(t) {
    return t > 1 ? 0 : t < -1 ? Ce : Math.acos(t);
}
m$1(bs, "acos");
function uo(t) {
    return t >= 1 ? Ze : t <= -1 ? -Ze : Math.asin(t);
}
m$1(uo, "asin");
var fo = Math.PI, lo = 2 * fo, ae = 1e-6, Oc = lo - ae;
function Ms(t) {
    this._ += t[0];
    for(let e = 1, n = t.length; e < n; ++e)this._ += arguments[e] + t[e];
}
m$1(Ms, "append");
function Ec(t) {
    let e = /*#__PURE__*/ Math.floor(t);
    if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
    if (e > 15) return Ms;
    let n = 10 ** e;
    return function(i) {
        this._ += i[0];
        for(let o = 1, a = i.length; o < a; ++o)this._ += Math.round(arguments[o] * n) / n + i[o];
    };
}
m$1(Ec, "appendRound");
var se = class {
    static{
        m$1(this, "Path");
    }
    constructor(e){
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = e == null ? Ms : Ec(e);
    }
    moveTo(e, n) {
        this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}`;
    }
    closePath() {
        this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
    }
    lineTo(e, n) {
        this._append`L${this._x1 = +e},${this._y1 = +n}`;
    }
    quadraticCurveTo(e, n, i, o) {
        this._append`Q${+e},${+n},${this._x1 = +i},${this._y1 = +o}`;
    }
    bezierCurveTo(e, n, i, o, a, s) {
        this._append`C${+e},${+n},${+i},${+o},${this._x1 = +a},${this._y1 = +s}`;
    }
    arcTo(e, n, i, o, a) {
        if (e = +e, n = +n, i = +i, o = +o, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
        let s = this._x1, u = this._y1, l = i - e, f = o - n, h = s - e, p = u - n, c = h * h + p * p;
        if (this._x1 === null) this._append`M${this._x1 = e},${this._y1 = n}`;
        else if (c > ae) if (!(Math.abs(p * l - f * h) > ae) || !a) this._append`L${this._x1 = e},${this._y1 = n}`;
        else {
            let m = i - s, _ = o - u, M = l * l + f * f, T = m * m + _ * _, k = /*#__PURE__*/ Math.sqrt(M), I = /*#__PURE__*/ Math.sqrt(c), C = a * Math.tan((fo - Math.acos((M + c - T) / (2 * k * I))) / 2), A = C / I, O = C / k;
            Math.abs(A - 1) > ae && this._append`L${e + A * h},${n + A * p}`, this._append`A${a},${a},0,0,${+(p * m > h * _)},${this._x1 = e + O * l},${this._y1 = n + O * f}`;
        }
    }
    arc(e, n, i, o, a, s) {
        if (e = +e, n = +n, i = +i, s = !!s, i < 0) throw new Error(`negative radius: ${i}`);
        let u = i * Math.cos(o), l = i * Math.sin(o), f = e + u, h = n + l, p = 1 ^ s, c = s ? o - a : a - o;
        this._x1 === null ? this._append`M${f},${h}` : (Math.abs(this._x1 - f) > ae || Math.abs(this._y1 - h) > ae) && this._append`L${f},${h}`, i && (c < 0 && (c = c % lo + lo), c > Oc ? this._append`A${i},${i},0,1,${p},${e - u},${n - l}A${i},${i},0,1,${p},${this._x1 = f},${this._y1 = h}` : c > ae && this._append`A${i},${i},0,${+(c >= fo)},${p},${this._x1 = e + i * Math.cos(a)},${this._y1 = n + i * Math.sin(a)}`);
    }
    rect(e, n, i, o) {
        this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}h${i = +i}v${+o}h${-i}Z`;
    }
    toString() {
        return this._;
    }
};
function Ts() {
    return new se;
}
m$1(Ts, "path");
Ts.prototype = se.prototype;
function qn(t) {
    let e = 3;
    return t.digits = function(n) {
        if (!arguments.length) return e;
        if (n == null) e = null;
        else {
            let i = /*#__PURE__*/ Math.floor(n);
            if (!(i >= 0)) throw new RangeError(`invalid digits: ${n}`);
            e = i;
        }
        return t;
    }, ()=>new se(e);
}
m$1(qn, "withPath");
function Ic(t) {
    return t.innerRadius;
}
m$1(Ic, "arcInnerRadius");
function Rc(t) {
    return t.outerRadius;
}
m$1(Rc, "arcOuterRadius");
function Pc(t) {
    return t.startAngle;
}
m$1(Pc, "arcStartAngle");
function Yc(t) {
    return t.endAngle;
}
m$1(Yc, "arcEndAngle");
function Fc(t) {
    return t && t.padAngle;
}
m$1(Fc, "arcPadAngle");
function Uc(t, e, n, i, o, a, s, u) {
    var l = n - t, f = i - e, h = s - o, p = u - a, c = p * l - h * f;
    if (!(c * c < et)) return c = (h * (e - a) - p * (t - o)) / c, [
        t + c * l,
        e + c * f
    ];
}
m$1(Uc, "intersect");
function Wn(t, e, n, i, o, a, s) {
    var u = t - n, l = e - i, f = (s ? a : -a) / oe(u * u + l * l), h = f * l, p = -f * u, c = t + h, m = e + p, _ = n + h, M = i + p, T = (c + _) / 2, k = (m + M) / 2, I = _ - c, C = M - m, A = I * I + C * C, O = o - a, w = c * M - _ * m, Y = (C < 0 ? -1 : 1) * oe(/*#__PURE__*/ ws(0, O * O * A - w * w)), U = (w * C - I * Y) / A, E = (-w * I - C * Y) / A, B = (w * C + I * Y) / A, N = (-w * I + C * Y) / A, v = U - T, d = E - k, x = B - T, S = N - k;
    return v * v + d * d > x * x + S * S && (U = B, E = N), {
        cx: U,
        cy: E,
        x01: -h,
        y01: -p,
        x11: U * (o / O - 1),
        y11: E * (o / O - 1)
    };
}
m$1(Wn, "cornerTangents");
function ks() {
    var t = Ic, e = Rc, n = /*#__PURE__*/ V(0), i = null, o = Pc, a = Yc, s = Fc, u = null, l = /*#__PURE__*/ qn(f);
    function f() {
        var h, p, c = +t.apply(this, arguments), m = +e.apply(this, arguments), _ = o.apply(this, arguments) - Ze, M = a.apply(this, arguments) - Ze, T = /*#__PURE__*/ so(M - _), k = M > _;
        if (u || (u = h = /*#__PURE__*/ l()), m < c && (p = m, m = c, c = p), !(m > et)) u.moveTo(0, 0);
        else if (T > Ne - et) u.moveTo(m * Bt(_), m * vt(_)), u.arc(0, 0, m, _, M, !k), c > et && (u.moveTo(c * Bt(M), c * vt(M)), u.arc(0, 0, c, M, _, k));
        else {
            var I = _, C = M, A = _, O = M, w = T, Y = T, U = s.apply(this, arguments) / 2, E = U > et && (i ? +i.apply(this, arguments) : oe(c * c + m * m)), B = /*#__PURE__*/ Bn(so(m - c) / 2, +n.apply(this, arguments)), N = B, v = B, d, x;
            if (E > et) {
                var S = /*#__PURE__*/ uo(E / c * vt(U)), y = /*#__PURE__*/ uo(E / m * vt(U));
                (w -= S * 2) > et ? (S *= k ? 1 : -1, A += S, O -= S) : (w = 0, A = O = (_ + M) / 2), (Y -= y * 2) > et ? (y *= k ? 1 : -1, I += y, C -= y) : (Y = 0, I = C = (_ + M) / 2);
            }
            var D = m * Bt(I), $ = m * vt(I), P = c * Bt(O), z = c * vt(O);
            if (B > et) {
                var W = m * Bt(C), X = m * vt(C), J = c * Bt(A), ht = c * vt(A), Q;
                if (T < Ce) if (Q = /*#__PURE__*/ Uc(D, $, J, ht, W, X, P, z)) {
                    var dt = D - Q[0], st = $ - Q[1], Z = W - Q[0], b = X - Q[1], R = 1 / vt(bs((dt * Z + st * b) / (oe(dt * dt + st * st) * oe(Z * Z + b * b))) / 2), F = /*#__PURE__*/ oe(Q[0] * Q[0] + Q[1] * Q[1]);
                    N = /*#__PURE__*/ Bn(B, (c - F) / (R - 1)), v = /*#__PURE__*/ Bn(B, (m - F) / (R + 1));
                } else N = v = 0;
            }
            Y > et ? v > et ? (d = /*#__PURE__*/ Wn(J, ht, D, $, m, v, k), x = /*#__PURE__*/ Wn(W, X, P, z, m, v, k), u.moveTo(d.cx + d.x01, d.cy + d.y01), v < B ? u.arc(d.cx, d.cy, v, /*#__PURE__*/ rt(d.y01, d.x01), /*#__PURE__*/ rt(x.y01, x.x01), !k) : (u.arc(d.cx, d.cy, v, /*#__PURE__*/ rt(d.y01, d.x01), /*#__PURE__*/ rt(d.y11, d.x11), !k), u.arc(0, 0, m, /*#__PURE__*/ rt(d.cy + d.y11, d.cx + d.x11), /*#__PURE__*/ rt(x.cy + x.y11, x.cx + x.x11), !k), u.arc(x.cx, x.cy, v, /*#__PURE__*/ rt(x.y11, x.x11), /*#__PURE__*/ rt(x.y01, x.x01), !k))) : (u.moveTo(D, $), u.arc(0, 0, m, I, C, !k)) : u.moveTo(D, $), !(c > et) || !(w > et) ? u.lineTo(P, z) : N > et ? (d = /*#__PURE__*/ Wn(P, z, W, X, c, -N, k), x = /*#__PURE__*/ Wn(D, $, J, ht, c, -N, k), u.lineTo(d.cx + d.x01, d.cy + d.y01), N < B ? u.arc(d.cx, d.cy, N, /*#__PURE__*/ rt(d.y01, d.x01), /*#__PURE__*/ rt(x.y01, x.x01), !k) : (u.arc(d.cx, d.cy, N, /*#__PURE__*/ rt(d.y01, d.x01), /*#__PURE__*/ rt(d.y11, d.x11), !k), u.arc(0, 0, c, /*#__PURE__*/ rt(d.cy + d.y11, d.cx + d.x11), /*#__PURE__*/ rt(x.cy + x.y11, x.cx + x.x11), k), u.arc(x.cx, x.cy, N, /*#__PURE__*/ rt(x.y11, x.x11), /*#__PURE__*/ rt(x.y01, x.x01), !k))) : u.arc(0, 0, c, O, A, k);
        }
        if (u.closePath(), h) return u = null, h + "" || null;
    }
    return m$1(f, "arc"), f.centroid = function() {
        var h = (+t.apply(this, arguments) + +e.apply(this, arguments)) / 2, p = (+o.apply(this, arguments) + +a.apply(this, arguments)) / 2 - Ce / 2;
        return [
            Bt(p) * h,
            vt(p) * h
        ];
    }, f.innerRadius = function(h) {
        return arguments.length ? (t = typeof h == "function" ? h : V(+h), f) : t;
    }, f.outerRadius = function(h) {
        return arguments.length ? (e = typeof h == "function" ? h : V(+h), f) : e;
    }, f.cornerRadius = function(h) {
        return arguments.length ? (n = typeof h == "function" ? h : V(+h), f) : n;
    }, f.padRadius = function(h) {
        return arguments.length ? (i = h == null ? null : typeof h == "function" ? h : V(+h), f) : i;
    }, f.startAngle = function(h) {
        return arguments.length ? (o = typeof h == "function" ? h : V(+h), f) : o;
    }, f.endAngle = function(h) {
        return arguments.length ? (a = typeof h == "function" ? h : V(+h), f) : a;
    }, f.padAngle = function(h) {
        return arguments.length ? (s = typeof h == "function" ? h : V(+h), f) : s;
    }, f.context = function(h) {
        return arguments.length ? (u = h ?? null, f) : u;
    }, f;
}
m$1(ks, "default");
function Ss(t) {
    this._context = t;
}
m$1(Ss, "Linear");
Ss.prototype = {
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
function Vn(t) {
    return new Ss(t);
}
m$1(Vn, "default");
function Qe(t) {
    return typeof t == "object" && "length" in t ? t : Array.from(t);
}
m$1(Qe, "default");
function Cs(t) {
    return t[0];
}
m$1(Cs, "x");
function Ns(t) {
    return t[1];
}
m$1(Ns, "y");
function As(t, e) {
    var n = /*#__PURE__*/ V(true), i = null, o = Vn, a = null, s = /*#__PURE__*/ qn(u);
    t = typeof t == "function" ? t : t === void 0 ? Cs : V(t), e = typeof e == "function" ? e : e === void 0 ? Ns : V(e);
    function u(l) {
        var f, h = (l = /*#__PURE__*/ Qe(l)).length, p, c = false, m;
        for(i == null && (a = /*#__PURE__*/ o(m = /*#__PURE__*/ s())), f = 0; f <= h; ++f)!(f < h && n(p = l[f], f, l)) === c && ((c = !c) ? a.lineStart() : a.lineEnd()), c && a.point(+t(p, f, l), +e(p, f, l));
        if (m) return a = null, m + "" || null;
    }
    return m$1(u, "line"), u.x = function(l) {
        return arguments.length ? (t = typeof l == "function" ? l : V(+l), u) : t;
    }, u.y = function(l) {
        return arguments.length ? (e = typeof l == "function" ? l : V(+l), u) : e;
    }, u.defined = function(l) {
        return arguments.length ? (n = typeof l == "function" ? l : V(!!l), u) : n;
    }, u.curve = function(l) {
        return arguments.length ? (o = l, i != null && (a = /*#__PURE__*/ o(i)), u) : o;
    }, u.context = function(l) {
        return arguments.length ? (l == null ? i = a = null : a = /*#__PURE__*/ o(i = l), u) : i;
    }, u;
}
m$1(As, "default");
function co(t, e) {
    return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
m$1(co, "default");
function ho(t) {
    return t;
}
m$1(ho, "default");
function Ds() {
    var t = ho, e = co, n = null, i = /*#__PURE__*/ V(0), o = /*#__PURE__*/ V(Ne), a = /*#__PURE__*/ V(0);
    function s(u) {
        var l, f = (u = /*#__PURE__*/ Qe(u)).length, h, p, c = 0, m = new Array(f), _ = new Array(f), M = +i.apply(this, arguments), T = /*#__PURE__*/ Math.min(Ne, /*#__PURE__*/ Math.max(-Ne, o.apply(this, arguments) - M)), k, I = /*#__PURE__*/ Math.min(Math.abs(T) / f, /*#__PURE__*/ a.apply(this, arguments)), C = I * (T < 0 ? -1 : 1), A;
        for(l = 0; l < f; ++l)(A = _[m[l] = l] = +t(u[l], l, u)) > 0 && (c += A);
        for(e != null ? m.sort(function(O, w) {
            return e(_[O], _[w]);
        }) : n != null && m.sort(function(O, w) {
            return n(u[O], u[w]);
        }), l = 0, p = c ? (T - f * C) / c : 0; l < f; ++l, M = k)h = m[l], A = _[h], k = M + (A > 0 ? A * p : 0) + C, _[h] = {
            data: u[h],
            index: l,
            value: A,
            startAngle: M,
            endAngle: k,
            padAngle: I
        };
        return _;
    }
    return m$1(s, "pie"), s.value = function(u) {
        return arguments.length ? (t = typeof u == "function" ? u : V(+u), s) : t;
    }, s.sortValues = function(u) {
        return arguments.length ? (e = u, n = null, s) : e;
    }, s.sort = function(u) {
        return arguments.length ? (n = u, e = null, s) : n;
    }, s.startAngle = function(u) {
        return arguments.length ? (i = typeof u == "function" ? u : V(+u), s) : i;
    }, s.endAngle = function(u) {
        return arguments.length ? (o = typeof u == "function" ? u : V(+u), s) : o;
    }, s.padAngle = function(u) {
        return arguments.length ? (a = typeof u == "function" ? u : V(+u), s) : a;
    }, s;
}
m$1(Ds, "default");
var Xn = class {
    static{
        m$1(this, "Bump");
    }
    constructor(e, n){
        this._context = e, this._x = n;
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
    point(e, n) {
        switch(e = +e, n = +n, this._point){
            case 0:
                {
                    this._point = 1, this._line ? this._context.lineTo(e, n) : this._context.moveTo(e, n);
                    break;
                }
            case 1:
                this._point = 2;
            default:
                {
                    this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + e) / 2, this._y0, this._x0, n, e, n) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + n) / 2, e, this._y0, e, n);
                    break;
                }
        }
        this._x0 = e, this._y0 = n;
    }
};
function Lc(t) {
    return new Xn(t, true);
}
m$1(Lc, "bumpX");
function zc(t) {
    return new Xn(t, false);
}
m$1(zc, "bumpY");
function Ae(t, e, n) {
    t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + e) / 6, (t._y0 + 4 * t._y1 + n) / 6);
}
m$1(Ae, "point");
function Ke(t) {
    this._context = t;
}
m$1(Ke, "Basis");
Ke.prototype = {
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
                Ae(this, this._x1, this._y1);
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
                Ae(this, t, e);
                break;
        }
        this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e;
    }, "point")
};
function $s(t) {
    return new Ke(t);
}
m$1($s, "default");
function ct() {}
m$1(ct, "default");
function Os(t) {
    this._context = t;
}
m$1(Os, "BasisClosed");
Os.prototype = {
    areaStart: ct,
    areaEnd: ct,
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
                Ae(this, t, e);
                break;
        }
        this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e;
    }, "point")
};
function Es(t) {
    return new Os(t);
}
m$1(Es, "default");
function Is(t) {
    this._context = t;
}
m$1(Is, "BasisOpen");
Is.prototype = {
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
                var n = (this._x0 + 4 * this._x1 + t) / 6, i = (this._y0 + 4 * this._y1 + e) / 6;
                this._line ? this._context.lineTo(n, i) : this._context.moveTo(n, i);
                break;
            case 3:
                this._point = 4;
            default:
                Ae(this, t, e);
                break;
        }
        this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e;
    }, "point")
};
function Rs(t) {
    return new Is(t);
}
m$1(Rs, "default");
function Ps(t, e) {
    this._basis = new Ke(t), this._beta = e;
}
m$1(Ps, "Bundle");
Ps.prototype = {
    lineStart: /*#__PURE__*/ m$1(function() {
        this._x = [], this._y = [], this._basis.lineStart();
    }, "lineStart"),
    lineEnd: /*#__PURE__*/ m$1(function() {
        var t = this._x, e = this._y, n = t.length - 1;
        if (n > 0) for(var i = t[0], o = e[0], a = t[n] - i, s = e[n] - o, u = -1, l; ++u <= n;)l = u / n, this._basis.point(this._beta * t[u] + (1 - this._beta) * (i + l * a), this._beta * e[u] + (1 - this._beta) * (o + l * s));
        this._x = this._y = null, this._basis.lineEnd();
    }, "lineEnd"),
    point: /*#__PURE__*/ m$1(function(t, e) {
        this._x.push(+t), this._y.push(+e);
    }, "point")
};
var Hc = /*#__PURE__*/ m$1(function t(e) {
    function n(i) {
        return e === 1 ? new Ke(i) : new Ps(i, e);
    }
    return m$1(n, "bundle"), n.beta = function(i) {
        return t(+i);
    }, n;
}, "custom")(.85);
function De(t, e, n) {
    t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - e), t._y2 + t._k * (t._y1 - n), t._x2, t._y2);
}
m$1(De, "point");
function Gn(t, e) {
    this._context = t, this._k = (1 - e) / 6;
}
m$1(Gn, "Cardinal");
Gn.prototype = {
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
                De(this, this._x1, this._y1);
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
                De(this, t, e);
                break;
        }
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
    }, "point")
};
var Bc = /*#__PURE__*/ m$1(function t(e) {
    function n(i) {
        return new Gn(i, e);
    }
    return m$1(n, "cardinal"), n.tension = function(i) {
        return t(+i);
    }, n;
}, "custom")(0);
function Zn(t, e) {
    this._context = t, this._k = (1 - e) / 6;
}
m$1(Zn, "CardinalClosed");
Zn.prototype = {
    areaStart: ct,
    areaEnd: ct,
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
                De(this, t, e);
                break;
        }
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
    }, "point")
};
var qc = /*#__PURE__*/ m$1(function t(e) {
    function n(i) {
        return new Zn(i, e);
    }
    return m$1(n, "cardinal"), n.tension = function(i) {
        return t(+i);
    }, n;
}, "custom")(0);
function Qn(t, e) {
    this._context = t, this._k = (1 - e) / 6;
}
m$1(Qn, "CardinalOpen");
Qn.prototype = {
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
                De(this, t, e);
                break;
        }
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
    }, "point")
};
var Wc = /*#__PURE__*/ m$1(function t(e) {
    function n(i) {
        return new Qn(i, e);
    }
    return m$1(n, "cardinal"), n.tension = function(i) {
        return t(+i);
    }, n;
}, "custom")(0);
function Je(t, e, n) {
    var i = t._x1, o = t._y1, a = t._x2, s = t._y2;
    if (t._l01_a > et) {
        var u = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a, l = 3 * t._l01_a * (t._l01_a + t._l12_a);
        i = (i * u - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / l, o = (o * u - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / l;
    }
    if (t._l23_a > et) {
        var f = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a, h = 3 * t._l23_a * (t._l23_a + t._l12_a);
        a = (a * f + t._x1 * t._l23_2a - e * t._l12_2a) / h, s = (s * f + t._y1 * t._l23_2a - n * t._l12_2a) / h;
    }
    t._context.bezierCurveTo(i, o, a, s, t._x2, t._y2);
}
m$1(Je, "point");
function Ys(t, e) {
    this._context = t, this._alpha = e;
}
m$1(Ys, "CatmullRom");
Ys.prototype = {
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
            var n = this._x2 - t, i = this._y2 - e;
            this._l23_a = /*#__PURE__*/ Math.sqrt(this._l23_2a = /*#__PURE__*/ Math.pow(n * n + i * i, this._alpha));
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
                Je(this, t, e);
                break;
        }
        this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
    }, "point")
};
var Vc = /*#__PURE__*/ m$1(function t(e) {
    function n(i) {
        return e ? new Ys(i, e) : new Gn(i, 0);
    }
    return m$1(n, "catmullRom"), n.alpha = function(i) {
        return t(+i);
    }, n;
}, "custom")(.5);
function Fs(t, e) {
    this._context = t, this._alpha = e;
}
m$1(Fs, "CatmullRomClosed");
Fs.prototype = {
    areaStart: ct,
    areaEnd: ct,
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
            var n = this._x2 - t, i = this._y2 - e;
            this._l23_a = /*#__PURE__*/ Math.sqrt(this._l23_2a = /*#__PURE__*/ Math.pow(n * n + i * i, this._alpha));
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
                Je(this, t, e);
                break;
        }
        this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
    }, "point")
};
var Xc = /*#__PURE__*/ m$1(function t(e) {
    function n(i) {
        return e ? new Fs(i, e) : new Zn(i, 0);
    }
    return m$1(n, "catmullRom"), n.alpha = function(i) {
        return t(+i);
    }, n;
}, "custom")(.5);
function Us(t, e) {
    this._context = t, this._alpha = e;
}
m$1(Us, "CatmullRomOpen");
Us.prototype = {
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
            var n = this._x2 - t, i = this._y2 - e;
            this._l23_a = /*#__PURE__*/ Math.sqrt(this._l23_2a = /*#__PURE__*/ Math.pow(n * n + i * i, this._alpha));
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
                Je(this, t, e);
                break;
        }
        this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
    }, "point")
};
var Gc = /*#__PURE__*/ m$1(function t(e) {
    function n(i) {
        return e ? new Us(i, e) : new Qn(i, 0);
    }
    return m$1(n, "catmullRom"), n.alpha = function(i) {
        return t(+i);
    }, n;
}, "custom")(.5);
function Ls(t) {
    this._context = t;
}
m$1(Ls, "LinearClosed");
Ls.prototype = {
    areaStart: ct,
    areaEnd: ct,
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
function zs(t) {
    return new Ls(t);
}
m$1(zs, "default");
function Hs(t) {
    return t < 0 ? -1 : 1;
}
m$1(Hs, "sign");
function Bs(t, e, n) {
    var i = t._x1 - t._x0, o = e - t._x1, a = (t._y1 - t._y0) / (i || o < 0 && -0), s = (n - t._y1) / (o || i < 0 && -0), u = (a * o + s * i) / (i + o);
    return (Hs(a) + Hs(s)) * Math.min(/*#__PURE__*/ Math.abs(a), /*#__PURE__*/ Math.abs(s), .5 * Math.abs(u)) || 0;
}
m$1(Bs, "slope3");
function qs(t, e) {
    var n = t._x1 - t._x0;
    return n ? (3 * (t._y1 - t._y0) / n - e) / 2 : e;
}
m$1(qs, "slope2");
function po(t, e, n) {
    var i = t._x0, o = t._y0, a = t._x1, s = t._y1, u = (a - i) / 3;
    t._context.bezierCurveTo(i + u, o + u * e, a - u, s - u * n, a, s);
}
m$1(po, "point");
function Kn(t) {
    this._context = t;
}
m$1(Kn, "MonotoneX");
Kn.prototype = {
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
                po(this, this._t0, /*#__PURE__*/ qs(this, this._t0));
                break;
        }
        (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
    }, "lineEnd"),
    point: /*#__PURE__*/ m$1(function(t, e) {
        var n = NaN;
        if (t = +t, e = +e, !(t === this._x1 && e === this._y1)) {
            switch(this._point){
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3, po(this, /*#__PURE__*/ qs(this, n = /*#__PURE__*/ Bs(this, t, e)), n);
                    break;
                default:
                    po(this, this._t0, n = /*#__PURE__*/ Bs(this, t, e));
                    break;
            }
            this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e, this._t0 = n;
        }
    }, "point")
};
function Ws(t) {
    this._context = new Vs(t);
}
m$1(Ws, "MonotoneY");
(Ws.prototype = /*#__PURE__*/ Object.create(Kn.prototype)).point = function(t, e) {
    Kn.prototype.point.call(this, e, t);
};
function Vs(t) {
    this._context = t;
}
m$1(Vs, "ReflectContext");
Vs.prototype = {
    moveTo: /*#__PURE__*/ m$1(function(t, e) {
        this._context.moveTo(e, t);
    }, "moveTo"),
    closePath: /*#__PURE__*/ m$1(function() {
        this._context.closePath();
    }, "closePath"),
    lineTo: /*#__PURE__*/ m$1(function(t, e) {
        this._context.lineTo(e, t);
    }, "lineTo"),
    bezierCurveTo: /*#__PURE__*/ m$1(function(t, e, n, i, o, a) {
        this._context.bezierCurveTo(e, t, i, n, a, o);
    }, "bezierCurveTo")
};
function Zc(t) {
    return new Kn(t);
}
m$1(Zc, "monotoneX");
function Qc(t) {
    return new Ws(t);
}
m$1(Qc, "monotoneY");
function Gs(t) {
    this._context = t;
}
m$1(Gs, "Natural");
Gs.prototype = {
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
        var t = this._x, e = this._y, n = t.length;
        if (n) if (this._line ? this._context.lineTo(t[0], e[0]) : this._context.moveTo(t[0], e[0]), n === 2) this._context.lineTo(t[1], e[1]);
        else for(var i = /*#__PURE__*/ Xs(t), o = /*#__PURE__*/ Xs(e), a = 0, s = 1; s < n; ++a, ++s)this._context.bezierCurveTo(i[0][a], o[0][a], i[1][a], o[1][a], t[s], e[s]);
        (this._line || this._line !== 0 && n === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
    }, "lineEnd"),
    point: /*#__PURE__*/ m$1(function(t, e) {
        this._x.push(+t), this._y.push(+e);
    }, "point")
};
function Xs(t) {
    var e, n = t.length - 1, i, o = new Array(n), a = new Array(n), s = new Array(n);
    for(o[0] = 0, a[0] = 2, s[0] = t[0] + 2 * t[1], e = 1; e < n - 1; ++e)o[e] = 1, a[e] = 4, s[e] = 4 * t[e] + 2 * t[e + 1];
    for(o[n - 1] = 2, a[n - 1] = 7, s[n - 1] = 8 * t[n - 1] + t[n], e = 1; e < n; ++e)i = o[e] / a[e - 1], a[e] -= i, s[e] -= i * s[e - 1];
    for(o[n - 1] = s[n - 1] / a[n - 1], e = n - 2; e >= 0; --e)o[e] = (s[e] - o[e + 1]) / a[e];
    for(a[n - 1] = (t[n] + o[n - 1]) / 2, e = 0; e < n - 1; ++e)a[e] = 2 * t[e + 1] - o[e + 1];
    return [
        o,
        a
    ];
}
m$1(Xs, "controlPoints");
function Zs(t) {
    return new Gs(t);
}
m$1(Zs, "default");
function Jn(t, e) {
    this._context = t, this._t = e;
}
m$1(Jn, "Step");
Jn.prototype = {
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
                        var n = this._x * (1 - this._t) + t * this._t;
                        this._context.lineTo(n, this._y), this._context.lineTo(n, e);
                    }
                    break;
                }
        }
        this._x = t, this._y = e;
    }, "point")
};
function Qs(t) {
    return new Jn(t, .5);
}
m$1(Qs, "default");
function Kc(t) {
    return new Jn(t, 0);
}
m$1(Kc, "stepBefore");
function Jc(t) {
    return new Jn(t, 1);
}
m$1(Jc, "stepAfter");
var jc = {
    value: /*#__PURE__*/ m$1(()=>{}, "value")
};
function Js() {
    for(var t = 0, e = arguments.length, n = {}, i; t < e; ++t){
        if (!(i = arguments[t] + "") || i in n || /[\s.]/.test(i)) throw new Error("illegal type: " + i);
        n[i] = [];
    }
    return new jn(n);
}
m$1(Js, "dispatch");
function jn(t) {
    this._ = t;
}
m$1(jn, "Dispatch");
function th(t, e) {
    return t.trim().split(/^|\s+/).map(function(n) {
        var i = "", o = /*#__PURE__*/ n.indexOf(".");
        if (o >= 0 && (i = /*#__PURE__*/ n.slice(o + 1), n = /*#__PURE__*/ n.slice(0, o)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
        return {
            type: n,
            name: i
        };
    });
}
m$1(th, "parseTypenames");
jn.prototype = Js.prototype = {
    constructor: jn,
    on: /*#__PURE__*/ m$1(function(t, e) {
        var n = this._, i = /*#__PURE__*/ th(t + "", n), o, a = -1, s = i.length;
        if (arguments.length < 2) {
            for(; ++a < s;)if ((o = (t = i[a]).type) && (o = /*#__PURE__*/ eh(n[o], t.name))) return o;
            return;
        }
        if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
        for(; ++a < s;)if (o = (t = i[a]).type) n[o] = /*#__PURE__*/ Ks(n[o], t.name, e);
        else if (e == null) for(o in n)n[o] = /*#__PURE__*/ Ks(n[o], t.name, null);
        return this;
    }, "on"),
    copy: /*#__PURE__*/ m$1(function() {
        var t = {}, e = this._;
        for(var n in e)t[n] = /*#__PURE__*/ e[n].slice();
        return new jn(t);
    }, "copy"),
    call: /*#__PURE__*/ m$1(function(t, e) {
        if ((o = arguments.length - 2) > 0) for(var n = new Array(o), i = 0, o, a; i < o; ++i)n[i] = arguments[i + 2];
        if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        for(a = this._[t], i = 0, o = a.length; i < o; ++i)a[i].value.apply(e, n);
    }, "call"),
    apply: /*#__PURE__*/ m$1(function(t, e, n) {
        if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        for(var i = this._[t], o = 0, a = i.length; o < a; ++o)i[o].value.apply(e, n);
    }, "apply")
};
function eh(t, e) {
    for(var n = 0, i = t.length, o; n < i; ++n)if ((o = t[n]).name === e) return o.value;
}
m$1(eh, "get");
function Ks(t, e, n) {
    for(var i = 0, o = t.length; i < o; ++i)if (t[i].name === e) {
        t[i] = jc, t = /*#__PURE__*/ t.slice(0, i).concat(/*#__PURE__*/ t.slice(i + 1));
        break;
    }
    return n != null && t.push({
        name: e,
        value: n
    }), t;
}
m$1(Ks, "set");
var mo = Js;
var $e = 0, tn = 0, je = 0, tu = 1e3, tr, en, er = 0, ue = 0, nr = 0, nn = typeof performance == "object" && performance.now ? performance : Date, eu = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
    setTimeout(t, 17);
};
function on() {
    return ue || (eu(nh), ue = nn.now() + nr);
}
m$1(on, "now");
function nh() {
    ue = 0;
}
m$1(nh, "clearNow");
function rn() {
    this._call = this._time = this._next = null;
}
m$1(rn, "Timer");
rn.prototype = rr.prototype = {
    constructor: rn,
    restart: /*#__PURE__*/ m$1(function(t, e, n) {
        if (typeof t != "function") throw new TypeError("callback is not a function");
        n = (n == null ? on() : +n) + (e == null ? 0 : +e), !this._next && en !== this && (en ? en._next = this : tr = this, en = this), this._call = t, this._time = n, xo();
    }, "restart"),
    stop: /*#__PURE__*/ m$1(function() {
        this._call && (this._call = null, this._time = 1 / 0, xo());
    }, "stop")
};
function rr(t, e, n) {
    var i = new rn;
    return i.restart(t, e, n), i;
}
m$1(rr, "timer");
function nu() {
    on(), ++$e;
    for(var t = tr, e; t;)(e = ue - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
    --$e;
}
m$1(nu, "timerFlush");
function js() {
    ue = (er = /*#__PURE__*/ nn.now()) + nr, $e = tn = 0;
    try {
        nu();
    } finally{
        $e = 0, ih(), ue = 0;
    }
}
m$1(js, "wake");
function rh() {
    var t = /*#__PURE__*/ nn.now(), e = t - er;
    e > tu && (nr -= e, er = t);
}
m$1(rh, "poke");
function ih() {
    for(var t, e = tr, n, i = 1 / 0; e;)e._call ? (i > e._time && (i = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : tr = n);
    en = t, xo(i);
}
m$1(ih, "nap");
function xo(t) {
    if (!$e) {
        tn && (tn = /*#__PURE__*/ clearTimeout(tn));
        var e = t - ue;
        e > 24 ? (t < 1 / 0 && (tn = /*#__PURE__*/ setTimeout(js, t - nn.now() - nr)), je && (je = /*#__PURE__*/ clearInterval(je))) : (je || (er = /*#__PURE__*/ nn.now(), je = /*#__PURE__*/ setInterval(rh, tu)), $e = 1, eu(js));
    }
}
m$1(xo, "sleep");
function an(t, e, n) {
    var i = new rn;
    return e = e == null ? 0 : +e, i.restart((o)=>{
        i.stop(), t(o + e);
    }, e, n), i;
}
m$1(an, "default");
var oh = /*#__PURE__*/ mo("start", "end", "cancel", "interrupt"), ah = [], ou = 0, ru = 1, or = 2, ir = 3, iu = 4, ar = 5, sn = 6;
function Ot(t, e, n, i, o, a) {
    var s = t.__transition;
    if (!s) t.__transition = {};
    else if (n in s) return;
    sh(t, n, {
        name: e,
        index: i,
        group: o,
        on: oh,
        tween: ah,
        time: a.time,
        delay: a.delay,
        duration: a.duration,
        ease: a.ease,
        timer: null,
        state: ou
    });
}
m$1(Ot, "default");
function un(t, e) {
    var n = /*#__PURE__*/ K(t, e);
    if (n.state > ou) throw new Error("too late; already scheduled");
    return n;
}
m$1(un, "init");
function it(t, e) {
    var n = /*#__PURE__*/ K(t, e);
    if (n.state > ir) throw new Error("too late; already running");
    return n;
}
m$1(it, "set");
function K(t, e) {
    var n = t.__transition;
    if (!n || !(n = n[e])) throw new Error("transition not found");
    return n;
}
m$1(K, "get");
function sh(t, e, n) {
    var i = t.__transition, o;
    i[e] = n, n.timer = /*#__PURE__*/ rr(a, 0, n.time);
    function a(f) {
        n.state = ru, n.timer.restart(s, n.delay, n.time), n.delay <= f && s(f - n.delay);
    }
    m$1(a, "schedule");
    function s(f) {
        var h, p, c, m;
        if (n.state !== ru) return l();
        for(h in i)if (m = i[h], m.name === n.name) {
            if (m.state === ir) return an(s);
            m.state === iu ? (m.state = sn, m.timer.stop(), m.on.call("interrupt", t, t.__data__, m.index, m.group), delete i[h]) : +h < e && (m.state = sn, m.timer.stop(), m.on.call("cancel", t, t.__data__, m.index, m.group), delete i[h]);
        }
        if (an(function() {
            n.state === ir && (n.state = iu, n.timer.restart(u, n.delay, n.time), u(f));
        }), n.state = or, n.on.call("start", t, t.__data__, n.index, n.group), n.state === or) {
            for(n.state = ir, o = new Array(c = n.tween.length), h = 0, p = -1; h < c; ++h)(m = /*#__PURE__*/ n.tween[h].value.call(t, t.__data__, n.index, n.group)) && (o[++p] = m);
            o.length = p + 1;
        }
    }
    m$1(s, "start");
    function u(f) {
        for(var h = f < n.duration ? n.ease.call(null, f / n.duration) : (n.timer.restart(l), n.state = ar, 1), p = -1, c = o.length; ++p < c;)o[p].call(t, h);
        n.state === ar && (n.on.call("end", t, t.__data__, n.index, n.group), l());
    }
    m$1(u, "tick");
    function l() {
        n.state = sn, n.timer.stop(), delete i[e];
        for(var f in i)return;
        delete t.__transition;
    }
    m$1(l, "stop");
}
m$1(sh, "create");
function fn(t, e) {
    var n = t.__transition, i, o, a = true, s;
    if (n) {
        e = e == null ? null : e + "";
        for(s in n){
            if ((i = n[s]).name !== e) {
                a = false;
                continue;
            }
            o = i.state > or && i.state < ar, i.state = sn, i.timer.stop(), i.on.call(o ? "interrupt" : "cancel", t, t.__data__, i.index, i.group), delete n[s];
        }
        a && delete t.__transition;
    }
}
m$1(fn, "default");
function _o(t) {
    return this.each(function() {
        fn(this, t);
    });
}
m$1(_o, "default");
function uh(t, e) {
    var n, i;
    return function() {
        var o = /*#__PURE__*/ it(this, t), a = o.tween;
        if (a !== n) {
            i = n = a;
            for(var s = 0, u = i.length; s < u; ++s)if (i[s].name === e) {
                i = /*#__PURE__*/ i.slice(), i.splice(s, 1);
                break;
            }
        }
        o.tween = i;
    };
}
m$1(uh, "tweenRemove");
function fh(t, e, n) {
    var i, o;
    if (typeof n != "function") throw new Error;
    return function() {
        var a = /*#__PURE__*/ it(this, t), s = a.tween;
        if (s !== i) {
            o = /*#__PURE__*/ (i = s).slice();
            for(var u = {
                name: e,
                value: n
            }, l = 0, f = o.length; l < f; ++l)if (o[l].name === e) {
                o[l] = u;
                break;
            }
            l === f && o.push(u);
        }
        a.tween = o;
    };
}
m$1(fh, "tweenFunction");
function go(t, e) {
    var n = this._id;
    if (t += "", arguments.length < 2) {
        for(var i = K(/*#__PURE__*/ this.node(), n).tween, o = 0, a = i.length, s; o < a; ++o)if ((s = i[o]).name === t) return s.value;
        return null;
    }
    return this.each(/*#__PURE__*/ (e == null ? uh : fh)(n, t, e));
}
m$1(go, "default");
function Oe(t, e, n) {
    var i = t._id;
    return t.each(function() {
        var o = /*#__PURE__*/ it(this, i);
        (o.value || (o.value = {}))[e] = /*#__PURE__*/ n.apply(this, arguments);
    }), function(o) {
        return K(o, i).value[e];
    };
}
m$1(Oe, "tweenValue");
function ln(t, e) {
    var n;
    return (typeof e == "number" ? j : e instanceof _t ? Qt : (n = /*#__PURE__*/ _t(e)) ? (e = n, Qt) : ge)(t, e);
}
m$1(ln, "default");
function lh(t) {
    return function() {
        this.removeAttribute(t);
    };
}
m$1(lh, "attrRemove");
function ch(t) {
    return function() {
        this.removeAttributeNS(t.space, t.local);
    };
}
m$1(ch, "attrRemoveNS");
function hh(t, e, n) {
    var i, o = n + "", a;
    return function() {
        var s = /*#__PURE__*/ this.getAttribute(t);
        return s === o ? null : s === i ? a : a = /*#__PURE__*/ e(i = s, n);
    };
}
m$1(hh, "attrConstant");
function ph(t, e, n) {
    var i, o = n + "", a;
    return function() {
        var s = /*#__PURE__*/ this.getAttributeNS(t.space, t.local);
        return s === o ? null : s === i ? a : a = /*#__PURE__*/ e(i = s, n);
    };
}
m$1(ph, "attrConstantNS");
function mh(t, e, n) {
    var i, o, a;
    return function() {
        var s, u = /*#__PURE__*/ n(this), l;
        return u == null ? void this.removeAttribute(t) : (s = /*#__PURE__*/ this.getAttribute(t), l = u + "", s === l ? null : s === i && l === o ? a : (o = l, a = /*#__PURE__*/ e(i = s, u)));
    };
}
m$1(mh, "attrFunction");
function dh(t, e, n) {
    var i, o, a;
    return function() {
        var s, u = /*#__PURE__*/ n(this), l;
        return u == null ? void this.removeAttributeNS(t.space, t.local) : (s = /*#__PURE__*/ this.getAttributeNS(t.space, t.local), l = u + "", s === l ? null : s === i && l === o ? a : (o = l, a = /*#__PURE__*/ e(i = s, u)));
    };
}
m$1(dh, "attrFunctionNS");
function yo(t, e) {
    var n = /*#__PURE__*/ wt(t), i = n === "transform" ? gi : ln;
    return this.attrTween(t, typeof e == "function" ? (n.local ? dh : mh)(n, i, /*#__PURE__*/ Oe(this, "attr." + t, e)) : e == null ? (n.local ? ch : lh)(n) : (n.local ? ph : hh)(n, i, e));
}
m$1(yo, "default");
function xh(t, e) {
    return function(n) {
        this.setAttribute(t, /*#__PURE__*/ e.call(this, n));
    };
}
m$1(xh, "attrInterpolate");
function _h(t, e) {
    return function(n) {
        this.setAttributeNS(t.space, t.local, /*#__PURE__*/ e.call(this, n));
    };
}
m$1(_h, "attrInterpolateNS");
function gh(t, e) {
    var n, i;
    function o() {
        var a = /*#__PURE__*/ e.apply(this, arguments);
        return a !== i && (n = (i = a) && _h(t, a)), n;
    }
    return m$1(o, "tween"), o._value = e, o;
}
m$1(gh, "attrTweenNS");
function yh(t, e) {
    var n, i;
    function o() {
        var a = /*#__PURE__*/ e.apply(this, arguments);
        return a !== i && (n = (i = a) && xh(t, a)), n;
    }
    return m$1(o, "tween"), o._value = e, o;
}
m$1(yh, "attrTween");
function vo(t, e) {
    var n = "attr." + t;
    if (arguments.length < 2) return (n = /*#__PURE__*/ this.tween(n)) && n._value;
    if (e == null) return this.tween(n, null);
    if (typeof e != "function") throw new Error;
    var i = /*#__PURE__*/ wt(t);
    return this.tween(n, /*#__PURE__*/ (i.local ? gh : yh)(i, e));
}
m$1(vo, "default");
function vh(t, e) {
    return function() {
        un(this, t).delay = +e.apply(this, arguments);
    };
}
m$1(vh, "delayFunction");
function wh(t, e) {
    return e = +e, function() {
        un(this, t).delay = e;
    };
}
m$1(wh, "delayConstant");
function wo(t) {
    var e = this._id;
    return arguments.length ? this.each(/*#__PURE__*/ (typeof t == "function" ? vh : wh)(e, t)) : K(/*#__PURE__*/ this.node(), e).delay;
}
m$1(wo, "default");
function bh(t, e) {
    return function() {
        it(this, t).duration = +e.apply(this, arguments);
    };
}
m$1(bh, "durationFunction");
function Mh(t, e) {
    return e = +e, function() {
        it(this, t).duration = e;
    };
}
m$1(Mh, "durationConstant");
function bo(t) {
    var e = this._id;
    return arguments.length ? this.each(/*#__PURE__*/ (typeof t == "function" ? bh : Mh)(e, t)) : K(/*#__PURE__*/ this.node(), e).duration;
}
m$1(bo, "default");
function Th(t, e) {
    if (typeof e != "function") throw new Error;
    return function() {
        it(this, t).ease = e;
    };
}
m$1(Th, "easeConstant");
function Mo(t) {
    var e = this._id;
    return arguments.length ? this.each(/*#__PURE__*/ Th(e, t)) : K(/*#__PURE__*/ this.node(), e).ease;
}
m$1(Mo, "default");
function kh(t, e) {
    return function() {
        var n = /*#__PURE__*/ e.apply(this, arguments);
        if (typeof n != "function") throw new Error;
        it(this, t).ease = n;
    };
}
m$1(kh, "easeVarying");
function To(t) {
    if (typeof t != "function") throw new Error;
    return this.each(/*#__PURE__*/ kh(this._id, t));
}
m$1(To, "default");
function ko(t) {
    typeof t != "function" && (t = /*#__PURE__*/ he(t));
    for(var e = this._groups, n = e.length, i = new Array(n), o = 0; o < n; ++o)for(var a = e[o], s = a.length, u = i[o] = [], l, f = 0; f < s; ++f)(l = a[f]) && t.call(l, l.__data__, f, a) && u.push(l);
    return new ot(i, this._parents, this._name, this._id);
}
m$1(ko, "default");
function So(t) {
    if (t._id !== this._id) throw new Error;
    for(var e = this._groups, n = t._groups, i = e.length, o = n.length, a = /*#__PURE__*/ Math.min(i, o), s = new Array(i), u = 0; u < a; ++u)for(var l = e[u], f = n[u], h = l.length, p = s[u] = new Array(h), c, m = 0; m < h; ++m)(c = l[m] || f[m]) && (p[m] = c);
    for(; u < i; ++u)s[u] = e[u];
    return new ot(s, this._parents, this._name, this._id);
}
m$1(So, "default");
function Sh(t) {
    return (t + "").trim().split(/^|\s+/).every(function(e) {
        var n = /*#__PURE__*/ e.indexOf(".");
        return n >= 0 && (e = /*#__PURE__*/ e.slice(0, n)), !e || e === "start";
    });
}
m$1(Sh, "start");
function Ch(t, e, n) {
    var i, o, a = Sh(e) ? un : it;
    return function() {
        var s = /*#__PURE__*/ a(this, t), u = s.on;
        u !== i && (o = /*#__PURE__*/ (i = u).copy()).on(e, n), s.on = o;
    };
}
m$1(Ch, "onFunction");
function Co(t, e) {
    var n = this._id;
    return arguments.length < 2 ? K(/*#__PURE__*/ this.node(), n).on.on(t) : this.each(/*#__PURE__*/ Ch(n, t, e));
}
m$1(Co, "default");
function Nh(t) {
    return function() {
        var e = this.parentNode;
        for(var n in this.__transition)if (+n !== t) return;
        e && e.removeChild(this);
    };
}
m$1(Nh, "removeFunction");
function No() {
    return this.on("end.remove", /*#__PURE__*/ Nh(this._id));
}
m$1(No, "default");
function Ao(t) {
    var e = this._name, n = this._id;
    typeof t != "function" && (t = /*#__PURE__*/ It(t));
    for(var i = this._groups, o = i.length, a = new Array(o), s = 0; s < o; ++s)for(var u = i[s], l = u.length, f = a[s] = new Array(l), h, p, c = 0; c < l; ++c)(h = u[c]) && (p = /*#__PURE__*/ t.call(h, h.__data__, c, u)) && ("__data__" in h && (p.__data__ = h.__data__), f[c] = p, Ot(f[c], e, n, c, f, /*#__PURE__*/ K(h, n)));
    return new ot(a, this._parents, e, n);
}
m$1(Ao, "default");
function Do(t) {
    var e = this._name, n = this._id;
    typeof t != "function" && (t = /*#__PURE__*/ ce(t));
    for(var i = this._groups, o = i.length, a = [], s = [], u = 0; u < o; ++u)for(var l = i[u], f = l.length, h, p = 0; p < f; ++p)if (h = l[p]) {
        for(var c = /*#__PURE__*/ t.call(h, h.__data__, p, l), m, _ = /*#__PURE__*/ K(h, n), M = 0, T = c.length; M < T; ++M)(m = c[M]) && Ot(m, e, n, M, c, _);
        a.push(c), s.push(h);
    }
    return new ot(a, s, e, n);
}
m$1(Do, "default");
var Ah = Ct.prototype.constructor;
function $o() {
    return new Ah(this._groups, this._parents);
}
m$1($o, "default");
function Dh(t, e) {
    var n, i, o;
    return function() {
        var a = /*#__PURE__*/ Rt(this, t), s = (this.style.removeProperty(t), Rt(this, t));
        return a === s ? null : a === n && s === i ? o : o = /*#__PURE__*/ e(n = a, i = s);
    };
}
m$1(Dh, "styleNull");
function au(t) {
    return function() {
        this.style.removeProperty(t);
    };
}
m$1(au, "styleRemove");
function $h(t, e, n) {
    var i, o = n + "", a;
    return function() {
        var s = /*#__PURE__*/ Rt(this, t);
        return s === o ? null : s === i ? a : a = /*#__PURE__*/ e(i = s, n);
    };
}
m$1($h, "styleConstant");
function Oh(t, e, n) {
    var i, o, a;
    return function() {
        var s = /*#__PURE__*/ Rt(this, t), u = /*#__PURE__*/ n(this), l = u + "";
        return u == null && (l = u = (this.style.removeProperty(t), Rt(this, t))), s === l ? null : s === i && l === o ? a : (o = l, a = /*#__PURE__*/ e(i = s, u));
    };
}
m$1(Oh, "styleFunction");
function Eh(t, e) {
    var n, i, o, a = "style." + e, s = "end." + a, u;
    return function() {
        var l = /*#__PURE__*/ it(this, t), f = l.on, h = l.value[a] == null ? u || (u = /*#__PURE__*/ au(e)) : void 0;
        (f !== n || o !== h) && (i = /*#__PURE__*/ (n = f).copy()).on(s, o = h), l.on = i;
    };
}
m$1(Eh, "styleMaybeRemove");
function Oo(t, e, n) {
    var i = (t += "") == "transform" ? _i : ln;
    return e == null ? this.styleTween(t, /*#__PURE__*/ Dh(t, i)).on("end.style." + t, /*#__PURE__*/ au(t)) : typeof e == "function" ? this.styleTween(t, /*#__PURE__*/ Oh(t, i, /*#__PURE__*/ Oe(this, "style." + t, e))).each(/*#__PURE__*/ Eh(this._id, t)) : this.styleTween(t, /*#__PURE__*/ $h(t, i, e), n).on("end.style." + t, null);
}
m$1(Oo, "default");
function Ih(t, e, n) {
    return function(i) {
        this.style.setProperty(t, /*#__PURE__*/ e.call(this, i), n);
    };
}
m$1(Ih, "styleInterpolate");
function Rh(t, e, n) {
    var i, o;
    function a() {
        var s = /*#__PURE__*/ e.apply(this, arguments);
        return s !== o && (i = (o = s) && Ih(t, s, n)), i;
    }
    return m$1(a, "tween"), a._value = e, a;
}
m$1(Rh, "styleTween");
function Eo(t, e, n) {
    var i = "style." + (t += "");
    if (arguments.length < 2) return (i = /*#__PURE__*/ this.tween(i)) && i._value;
    if (e == null) return this.tween(i, null);
    if (typeof e != "function") throw new Error;
    return this.tween(i, /*#__PURE__*/ Rh(t, e, n ?? ""));
}
m$1(Eo, "default");
function Ph(t) {
    return function() {
        this.textContent = t;
    };
}
m$1(Ph, "textConstant");
function Yh(t) {
    return function() {
        var e = /*#__PURE__*/ t(this);
        this.textContent = e ?? "";
    };
}
m$1(Yh, "textFunction");
function Io(t) {
    return this.tween("text", typeof t == "function" ? Yh(/*#__PURE__*/ Oe(this, "text", t)) : Ph(t == null ? "" : t + ""));
}
m$1(Io, "default");
function Fh(t) {
    return function(e) {
        this.textContent = /*#__PURE__*/ t.call(this, e);
    };
}
m$1(Fh, "textInterpolate");
function Uh(t) {
    var e, n;
    function i() {
        var o = /*#__PURE__*/ t.apply(this, arguments);
        return o !== n && (e = (n = o) && Fh(o)), e;
    }
    return m$1(i, "tween"), i._value = t, i;
}
m$1(Uh, "textTween");
function Ro(t) {
    var e = "text";
    if (arguments.length < 1) return (e = /*#__PURE__*/ this.tween(e)) && e._value;
    if (t == null) return this.tween(e, null);
    if (typeof t != "function") throw new Error;
    return this.tween(e, /*#__PURE__*/ Uh(t));
}
m$1(Ro, "default");
function Po() {
    for(var t = this._name, e = this._id, n = /*#__PURE__*/ sr(), i = this._groups, o = i.length, a = 0; a < o; ++a)for(var s = i[a], u = s.length, l, f = 0; f < u; ++f)if (l = s[f]) {
        var h = /*#__PURE__*/ K(l, e);
        Ot(l, t, n, f, s, {
            time: h.time + h.delay + h.duration,
            delay: 0,
            duration: h.duration,
            ease: h.ease
        });
    }
    return new ot(i, this._parents, t, n);
}
m$1(Po, "default");
function Yo() {
    var t, e, n = this, i = n._id, o = /*#__PURE__*/ n.size();
    return new Promise(function(a, s) {
        var u = {
            value: s
        }, l = {
            value: /*#__PURE__*/ m$1(function() {
                --o === 0 && a();
            }, "value")
        };
        n.each(function() {
            var f = /*#__PURE__*/ it(this, i), h = f.on;
            h !== t && (e = /*#__PURE__*/ (t = h).copy(), e._.cancel.push(u), e._.interrupt.push(u), e._.end.push(l)), f.on = e;
        }), o === 0 && a();
    });
}
m$1(Yo, "default");
var Lh = 0;
function ot(t, e, n, i) {
    this._groups = t, this._parents = e, this._name = n, this._id = i;
}
m$1(ot, "Transition");
function su(t) {
    return Ct().transition(t);
}
m$1(su, "transition");
function sr() {
    return ++Lh;
}
m$1(sr, "newId");
var Et = Ct.prototype;
ot.prototype = su.prototype = {
    constructor: ot,
    select: Ao,
    selectAll: Do,
    selectChild: Et.selectChild,
    selectChildren: Et.selectChildren,
    filter: ko,
    merge: So,
    selection: $o,
    transition: Po,
    call: Et.call,
    nodes: Et.nodes,
    node: Et.node,
    size: Et.size,
    empty: Et.empty,
    each: Et.each,
    on: Co,
    attr: yo,
    attrTween: vo,
    style: Oo,
    styleTween: Eo,
    text: Io,
    textTween: Ro,
    remove: No,
    tween: go,
    delay: wo,
    duration: bo,
    ease: Mo,
    easeVarying: To,
    end: Yo,
    [Symbol.iterator]: Et[Symbol.iterator]
};
function ur(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
m$1(ur, "cubicInOut");
var zh = {
    time: null,
    delay: 0,
    duration: 250,
    ease: ur
};
function Hh(t, e) {
    for(var n; !(n = t.__transition) || !(n = n[e]);)if (!(t = t.parentNode)) throw new Error(`transition ${e} not found`);
    return n;
}
m$1(Hh, "inherit");
function Fo(t) {
    var e, n;
    t instanceof ot ? (e = t._id, t = t._name) : (e = /*#__PURE__*/ sr(), (n = zh).time = /*#__PURE__*/ on(), t = t == null ? null : t + "");
    for(var i = this._groups, o = i.length, a = 0; a < o; ++a)for(var s = i[a], u = s.length, l, f = 0; f < u; ++f)(l = s[f]) && Ot(l, t, e, f, s, n || Hh(l, e));
    return new ot(i, this._parents, t, e);
}
m$1(Fo, "default");
Ct.prototype.interrupt = _o;
Ct.prototype.transition = Fo;
function uu(t) {
    return [
        +t[0],
        +t[1]
    ];
}
m$1(uu, "number1");
function Bh(t) {
    return [
        /*#__PURE__*/ uu(t[0]),
        /*#__PURE__*/ uu(t[1])
    ];
}
m$1(Bh, "number2");
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
        return t == null ? null : Bh(t);
    }, "input"),
    output: /*#__PURE__*/ m$1(function(t) {
        return t;
    }, "output")
});
function Uo(t) {
    return {
        type: t
    };
}
m$1(Uo, "type");
function qt(t, e, n) {
    this.k = t, this.x = e, this.y = n;
}
m$1(qt, "Transform");
qt.prototype = {
    constructor: qt,
    scale: /*#__PURE__*/ m$1(function(t) {
        return t === 1 ? this : new qt(this.k * t, this.x, this.y);
    }, "scale"),
    translate: /*#__PURE__*/ m$1(function(t, e) {
        return t === 0 & e === 0 ? this : new qt(this.k, this.x + this.k * t, this.y + this.k * e);
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
var Lo = new qt(1, 0, 0);
zo.prototype = qt.prototype;
function zo(t) {
    for(; !t.__zoom;)if (!(t = t.parentNode)) return Lo;
    return t.__zoom;
}
m$1(zo, "transform");
export { $s as $, As as A, Bc as B, ku as C, Dt as D, Es as E, Bo as F, Gc as G, Hc as H, ks as I, Jc as J, Kc as K, Lc as L, Me as M, Ds as N, $c as O, Pn as P, Qs as Q, Rs as R, Su as S, Tt as T, Ua as U, Vn as V, Wh as W, Xc as X, Yf as Y, Zs as Z, oo as _, Qc as a, Zc as b, Vc as c, Wc as d, zc as e, $n as f, He as g, Vo as h, ia as i, Wo as j, Zi as k, Hn as l, ke as m, $t as n, Xa as o, pt as p, qc as q, Va as r, zt as s, Wa as t, qa as u, vs as v, be as w, we as x, jt as y, zs as z };
