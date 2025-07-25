import { I as Ie$1 } from './vendor-min-mermaid~chunk-YR5264OA.BCCprDC8.chunk.js';
import { f } from './vendor-min-mermaid~chunk-TI4EEUUG.BFlBPHyk.chunk.js';
import { K as Kf, Z as Zf, J as Jf, Q as Qf, j as jf, X as Xf, h as hh, k as kh, a3 as qc, a4 as uh, a5 as ch, Y as Yf, a6 as es, a7 as Lp, t as tt$1, a8 as Cd, a9 as xo, aa as Cr, ab as fe, ac as fc, ad as uc, ae as we, af as cc, ag as hc, ah as xr, ai as ue, aj as gr, ak as mr, al as ee, am as We$1, an as yd, e as XC, V as Vf, ao as ul } from './vendor-min-mermaid~chunk-U6SPV2NK.BkMACcv9.chunk.js';
import { m as m$1, q as q$1, n } from './vendor-min-mermaid~chunk-GTKDMUJJ.CzbCS-C_.chunk.js';
var Ee = /*#__PURE__*/ n((Ot, Pt)=>{
    (function(t, e) {
        typeof Ot == "object" && typeof Pt < "u" ? Pt.exports = /*#__PURE__*/ e() : typeof define == "function" && define.amd ? define(e) : (t = typeof globalThis < "u" ? globalThis : t || self).dayjs_plugin_isoWeek = /*#__PURE__*/ e();
    })(Ot, function() {
        var t = "day";
        return function(e, s, a) {
            var n = /*#__PURE__*/ m$1(function(D) {
                return D.add(4 - D.isoWeekday(), t);
            }, "a"), f = s.prototype;
            f.isoWeekYear = function() {
                return n(this).year();
            }, f.isoWeek = function(D) {
                if (!this.$utils().u(D)) return this.add(7 * (D - this.isoWeek()), t);
                var _, A, C, W, G = /*#__PURE__*/ n(this), z = (_ = /*#__PURE__*/ this.isoWeekYear(), A = this.$u, C = /*#__PURE__*/ (A ? a.utc : a)().year(_).startOf("year"), W = 4 - C.isoWeekday(), C.isoWeekday() > 4 && (W += 7), C.add(W, t));
                return G.diff(z, "week") + 1;
            }, f.isoWeekday = function(D) {
                return this.$utils().u(D) ? this.day() || 7 : this.day(this.day() % 7 ? D : D - 7);
            };
            var k = f.startOf;
            f.startOf = function(D, _) {
                var A = /*#__PURE__*/ this.$utils(), C = !!A.u(_) || _;
                return A.p(D) === "isoweek" ? C ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : k.bind(this)(D, _);
            };
        };
    });
});
var Me = /*#__PURE__*/ n((zt, Nt)=>{
    (function(t, e) {
        typeof zt == "object" && typeof Nt < "u" ? Nt.exports = /*#__PURE__*/ e() : typeof define == "function" && define.amd ? define(e) : (t = typeof globalThis < "u" ? globalThis : t || self).dayjs_plugin_customParseFormat = /*#__PURE__*/ e();
    })(zt, function() {
        var t = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        }, e = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d/, a = /\d\d/, n = /\d\d?/, f = /\d*[^-_:/,()\s\d]+/, k = {}, D = /*#__PURE__*/ m$1(function(p) {
            return (p = +p) + (p > 68 ? 1900 : 2e3);
        }, "a"), _ = /*#__PURE__*/ m$1(function(p) {
            return function(m) {
                this[p] = +m;
            };
        }, "f"), A = [
            /[+-]\d\d:?(\d\d)?|Z/,
            function(p) {
                (this.zone || (this.zone = {})).offset = /*#__PURE__*/ function(m) {
                    if (!m || m === "Z") return 0;
                    var L = /*#__PURE__*/ m.match(/([+-]|\d\d)/g), I = 60 * L[1] + (+L[2] || 0);
                    return I === 0 ? 0 : L[0] === "+" ? -I : I;
                }(p);
            }
        ], C = /*#__PURE__*/ m$1(function(p) {
            var m = k[p];
            return m && (m.indexOf ? m : m.s.concat(m.f));
        }, "u"), W = /*#__PURE__*/ m$1(function(p, m) {
            var L, I = k.meridiem;
            if (I) {
                for(var N = 1; N <= 24; N += 1)if (p.indexOf(/*#__PURE__*/ I(N, 0, m)) > -1) {
                    L = N > 12;
                    break;
                }
            } else L = p === (m ? "pm" : "PM");
            return L;
        }, "d"), G = {
            A: [
                f,
                function(p) {
                    this.afternoon = /*#__PURE__*/ W(p, false);
                }
            ],
            a: [
                f,
                function(p) {
                    this.afternoon = /*#__PURE__*/ W(p, true);
                }
            ],
            Q: [
                s,
                function(p) {
                    this.month = 3 * (p - 1) + 1;
                }
            ],
            S: [
                s,
                function(p) {
                    this.milliseconds = 100 * +p;
                }
            ],
            SS: [
                a,
                function(p) {
                    this.milliseconds = 10 * +p;
                }
            ],
            SSS: [
                /\d{3}/,
                function(p) {
                    this.milliseconds = +p;
                }
            ],
            s: [
                n,
                /*#__PURE__*/ _("seconds")
            ],
            ss: [
                n,
                /*#__PURE__*/ _("seconds")
            ],
            m: [
                n,
                /*#__PURE__*/ _("minutes")
            ],
            mm: [
                n,
                /*#__PURE__*/ _("minutes")
            ],
            H: [
                n,
                /*#__PURE__*/ _("hours")
            ],
            h: [
                n,
                /*#__PURE__*/ _("hours")
            ],
            HH: [
                n,
                /*#__PURE__*/ _("hours")
            ],
            hh: [
                n,
                /*#__PURE__*/ _("hours")
            ],
            D: [
                n,
                /*#__PURE__*/ _("day")
            ],
            DD: [
                a,
                /*#__PURE__*/ _("day")
            ],
            Do: [
                f,
                function(p) {
                    var m = k.ordinal, L = /*#__PURE__*/ p.match(/\d+/);
                    if (this.day = L[0], m) for(var I = 1; I <= 31; I += 1)m(I).replace(/\[|\]/g, "") === p && (this.day = I);
                }
            ],
            w: [
                n,
                /*#__PURE__*/ _("week")
            ],
            ww: [
                a,
                /*#__PURE__*/ _("week")
            ],
            M: [
                n,
                /*#__PURE__*/ _("month")
            ],
            MM: [
                a,
                /*#__PURE__*/ _("month")
            ],
            MMM: [
                f,
                function(p) {
                    var m = /*#__PURE__*/ C("months"), L = (C("monthsShort") || m.map(function(I) {
                        return I.slice(0, 3);
                    })).indexOf(p) + 1;
                    if (L < 1) throw new Error;
                    this.month = L % 12 || L;
                }
            ],
            MMMM: [
                f,
                function(p) {
                    var m = C("months").indexOf(p) + 1;
                    if (m < 1) throw new Error;
                    this.month = m % 12 || m;
                }
            ],
            Y: [
                /[+-]?\d+/,
                /*#__PURE__*/ _("year")
            ],
            YY: [
                a,
                function(p) {
                    this.year = /*#__PURE__*/ D(p);
                }
            ],
            YYYY: [
                /\d{4}/,
                /*#__PURE__*/ _("year")
            ],
            Z: A,
            ZZ: A
        };
        function z(p) {
            var m, L;
            m = p, L = k && k.formats;
            for(var I = /*#__PURE__*/ (p = /*#__PURE__*/ m.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(g, v, x) {
                var b = x && x.toUpperCase();
                return v || L[x] || t[x] || L[b].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(y, w, c) {
                    return w || c.slice(1);
                });
            })).match(e), N = I.length, R = 0; R < N; R += 1){
                var $ = I[R], U = G[$], B = U && U[0], j = U && U[1];
                I[R] = j ? {
                    regex: B,
                    parser: j
                } : $.replace(/^\[|\]$/g, "");
            }
            return function(g) {
                for(var v = {}, x = 0, b = 0; x < N; x += 1){
                    var y = I[x];
                    if (typeof y == "string") b += y.length;
                    else {
                        var w = y.regex, c = y.parser, u = /*#__PURE__*/ g.slice(b), h = w.exec(u)[0];
                        c.call(v, h), g = /*#__PURE__*/ g.replace(h, "");
                    }
                }
                return function(d) {
                    var T = d.afternoon;
                    if (T !== void 0) {
                        var r = d.hours;
                        T ? r < 12 && (d.hours += 12) : r === 12 && (d.hours = 0), delete d.afternoon;
                    }
                }(v), v;
            };
        }
        return m$1(z, "l"), function(p, m, L) {
            L.p.customParseFormat = true, p && p.parseTwoDigitYear && (D = p.parseTwoDigitYear);
            var I = m.prototype, N = I.parse;
            I.parse = function(R) {
                var $ = R.date, U = R.utc, B = R.args;
                this.$u = U;
                var j = B[1];
                if (typeof j == "string") {
                    var g = B[2] === true, v = B[3] === true, x = g || v, b = B[2];
                    v && (b = B[2]), k = /*#__PURE__*/ this.$locale(), !g && b && (k = L.Ls[b]), this.$d = /*#__PURE__*/ function(u, h, d, T) {
                        try {
                            if ([
                                "x",
                                "X"
                            ].indexOf(h) > -1) return new Date((h === "X" ? 1e3 : 1) * u);
                            var r = /*#__PURE__*/ z(h)(u), l = r.year, i = r.month, M = r.day, E = r.hours, S = r.minutes, P = r.seconds, Y = r.milliseconds, at = r.zone, F = r.week, Z = new Date, nt = M || (l || i ? 1 : Z.getDate()), rt = l || Z.getFullYear(), ot = 0;
                            l && !i || (ot = i > 0 ? i - 1 : Z.getMonth());
                            var ht, kt = E || 0, V = S || 0, it = P || 0, Q = Y || 0;
                            return at ? new Date(Date.UTC(rt, ot, nt, kt, V, it, Q + 60 * at.offset * 1e3)) : d ? new Date(Date.UTC(rt, ot, nt, kt, V, it, Q)) : (ht = new Date(rt, ot, nt, kt, V, it, Q), F && (ht = /*#__PURE__*/ T(ht).week(F).toDate()), ht);
                        } catch  {
                            return new Date("");
                        }
                    }($, j, U, L), this.init(), b && b !== true && (this.$L = this.locale(b).$L), x && $ != this.format(j) && (this.$d = new Date("")), k = {};
                } else if (j instanceof Array) for(var y = j.length, w = 1; w <= y; w += 1){
                    B[1] = j[w - 1];
                    var c = /*#__PURE__*/ L.apply(this, B);
                    if (c.isValid()) {
                        this.$d = c.$d, this.$L = c.$L, this.init();
                        break;
                    }
                    w === y && (this.$d = new Date(""));
                }
                else N.call(this, R);
            };
        };
    });
});
var Le = /*#__PURE__*/ n((Rt, Bt)=>{
    (function(t, e) {
        typeof Rt == "object" && typeof Bt < "u" ? Bt.exports = /*#__PURE__*/ e() : typeof define == "function" && define.amd ? define(e) : (t = typeof globalThis < "u" ? globalThis : t || self).dayjs_plugin_advancedFormat = /*#__PURE__*/ e();
    })(Rt, function() {
        return function(t, e) {
            var s = e.prototype, a = s.format;
            s.format = function(n) {
                var f = this, k = /*#__PURE__*/ this.$locale();
                if (!this.isValid()) return a.bind(this)(n);
                var D = /*#__PURE__*/ this.$utils(), _ = /*#__PURE__*/ (n || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(A) {
                    switch(A){
                        case "Q":
                            return Math.ceil((f.$M + 1) / 3);
                        case "Do":
                            return k.ordinal(f.$D);
                        case "gggg":
                            return f.weekYear();
                        case "GGGG":
                            return f.isoWeekYear();
                        case "wo":
                            return k.ordinal(/*#__PURE__*/ f.week(), "W");
                        case "w":
                        case "ww":
                            return D.s(/*#__PURE__*/ f.week(), A === "w" ? 1 : 2, "0");
                        case "W":
                        case "WW":
                            return D.s(/*#__PURE__*/ f.isoWeek(), A === "W" ? 1 : 2, "0");
                        case "k":
                        case "kk":
                            return D.s(/*#__PURE__*/ String(f.$H === 0 ? 24 : f.$H), A === "k" ? 1 : 2, "0");
                        case "X":
                            return Math.floor(f.$d.getTime() / 1e3);
                        case "x":
                            return f.$d.getTime();
                        case "z":
                            return "[" + f.offsetName() + "]";
                        case "zzz":
                            return "[" + f.offsetName("long") + "]";
                        default:
                            return A;
                    }
                });
                return a.bind(this)(_);
            };
        };
    });
});
var Vt = /*#__PURE__*/ function() {
    var t = /*#__PURE__*/ m$1(function(w, c, u, h) {
        for(u = u || {}, h = w.length; h--; u[w[h]] = c);
        return u;
    }, "o"), e = [
        6,
        8,
        10,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        33,
        35,
        36,
        38,
        40
    ], s = [
        1,
        26
    ], a = [
        1,
        27
    ], n = [
        1,
        28
    ], f = [
        1,
        29
    ], k = [
        1,
        30
    ], D = [
        1,
        31
    ], _ = [
        1,
        32
    ], A = [
        1,
        33
    ], C = [
        1,
        34
    ], W = [
        1,
        9
    ], G = [
        1,
        10
    ], z = [
        1,
        11
    ], p = [
        1,
        12
    ], m = [
        1,
        13
    ], L = [
        1,
        14
    ], I = [
        1,
        15
    ], N = [
        1,
        16
    ], R = [
        1,
        19
    ], $ = [
        1,
        20
    ], U = [
        1,
        21
    ], B = [
        1,
        22
    ], j = [
        1,
        23
    ], g = [
        1,
        25
    ], v = [
        1,
        35
    ], x = {
        trace: /*#__PURE__*/ m$1(function() {}, "trace"),
        yy: {},
        symbols_: {
            error: 2,
            start: 3,
            gantt: 4,
            document: 5,
            EOF: 6,
            line: 7,
            SPACE: 8,
            statement: 9,
            NL: 10,
            weekday: 11,
            weekday_monday: 12,
            weekday_tuesday: 13,
            weekday_wednesday: 14,
            weekday_thursday: 15,
            weekday_friday: 16,
            weekday_saturday: 17,
            weekday_sunday: 18,
            weekend: 19,
            weekend_friday: 20,
            weekend_saturday: 21,
            dateFormat: 22,
            inclusiveEndDates: 23,
            topAxis: 24,
            axisFormat: 25,
            tickInterval: 26,
            excludes: 27,
            includes: 28,
            todayMarker: 29,
            title: 30,
            acc_title: 31,
            acc_title_value: 32,
            acc_descr: 33,
            acc_descr_value: 34,
            acc_descr_multiline_value: 35,
            section: 36,
            clickStatement: 37,
            taskTxt: 38,
            taskData: 39,
            click: 40,
            callbackname: 41,
            callbackargs: 42,
            href: 43,
            clickStatementDebug: 44,
            $accept: 0,
            $end: 1
        },
        terminals_: {
            2: "error",
            4: "gantt",
            6: "EOF",
            8: "SPACE",
            10: "NL",
            12: "weekday_monday",
            13: "weekday_tuesday",
            14: "weekday_wednesday",
            15: "weekday_thursday",
            16: "weekday_friday",
            17: "weekday_saturday",
            18: "weekday_sunday",
            20: "weekend_friday",
            21: "weekend_saturday",
            22: "dateFormat",
            23: "inclusiveEndDates",
            24: "topAxis",
            25: "axisFormat",
            26: "tickInterval",
            27: "excludes",
            28: "includes",
            29: "todayMarker",
            30: "title",
            31: "acc_title",
            32: "acc_title_value",
            33: "acc_descr",
            34: "acc_descr_value",
            35: "acc_descr_multiline_value",
            36: "section",
            38: "taskTxt",
            39: "taskData",
            40: "click",
            41: "callbackname",
            42: "callbackargs",
            43: "href"
        },
        productions_: [
            0,
            [
                3,
                3
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
                7,
                2
            ],
            [
                7,
                1
            ],
            [
                7,
                1
            ],
            [
                7,
                1
            ],
            [
                11,
                1
            ],
            [
                11,
                1
            ],
            [
                11,
                1
            ],
            [
                11,
                1
            ],
            [
                11,
                1
            ],
            [
                11,
                1
            ],
            [
                11,
                1
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
                9,
                1
            ],
            [
                9,
                1
            ],
            [
                9,
                1
            ],
            [
                9,
                1
            ],
            [
                9,
                1
            ],
            [
                9,
                1
            ],
            [
                9,
                1
            ],
            [
                9,
                1
            ],
            [
                9,
                1
            ],
            [
                9,
                1
            ],
            [
                9,
                1
            ],
            [
                9,
                2
            ],
            [
                9,
                2
            ],
            [
                9,
                1
            ],
            [
                9,
                1
            ],
            [
                9,
                1
            ],
            [
                9,
                2
            ],
            [
                37,
                2
            ],
            [
                37,
                3
            ],
            [
                37,
                3
            ],
            [
                37,
                4
            ],
            [
                37,
                3
            ],
            [
                37,
                4
            ],
            [
                37,
                2
            ],
            [
                44,
                2
            ],
            [
                44,
                3
            ],
            [
                44,
                3
            ],
            [
                44,
                4
            ],
            [
                44,
                3
            ],
            [
                44,
                4
            ],
            [
                44,
                2
            ]
        ],
        performAction: /*#__PURE__*/ m$1(function(c, u, h, d, T, r, l) {
            var i = r.length - 1;
            switch(T){
                case 1:
                    return r[i - 1];
                case 2:
                    this.$ = [];
                    break;
                case 3:
                    r[i - 1].push(r[i]), this.$ = r[i - 1];
                    break;
                case 4:
                case 5:
                    this.$ = r[i];
                    break;
                case 6:
                case 7:
                    this.$ = [];
                    break;
                case 8:
                    d.setWeekday("monday");
                    break;
                case 9:
                    d.setWeekday("tuesday");
                    break;
                case 10:
                    d.setWeekday("wednesday");
                    break;
                case 11:
                    d.setWeekday("thursday");
                    break;
                case 12:
                    d.setWeekday("friday");
                    break;
                case 13:
                    d.setWeekday("saturday");
                    break;
                case 14:
                    d.setWeekday("sunday");
                    break;
                case 15:
                    d.setWeekend("friday");
                    break;
                case 16:
                    d.setWeekend("saturday");
                    break;
                case 17:
                    d.setDateFormat(/*#__PURE__*/ r[i].substr(11)), this.$ = /*#__PURE__*/ r[i].substr(11);
                    break;
                case 18:
                    d.enableInclusiveEndDates(), this.$ = /*#__PURE__*/ r[i].substr(18);
                    break;
                case 19:
                    d.TopAxis(), this.$ = /*#__PURE__*/ r[i].substr(8);
                    break;
                case 20:
                    d.setAxisFormat(/*#__PURE__*/ r[i].substr(11)), this.$ = /*#__PURE__*/ r[i].substr(11);
                    break;
                case 21:
                    d.setTickInterval(/*#__PURE__*/ r[i].substr(13)), this.$ = /*#__PURE__*/ r[i].substr(13);
                    break;
                case 22:
                    d.setExcludes(/*#__PURE__*/ r[i].substr(9)), this.$ = /*#__PURE__*/ r[i].substr(9);
                    break;
                case 23:
                    d.setIncludes(/*#__PURE__*/ r[i].substr(9)), this.$ = /*#__PURE__*/ r[i].substr(9);
                    break;
                case 24:
                    d.setTodayMarker(/*#__PURE__*/ r[i].substr(12)), this.$ = /*#__PURE__*/ r[i].substr(12);
                    break;
                case 27:
                    d.setDiagramTitle(/*#__PURE__*/ r[i].substr(6)), this.$ = /*#__PURE__*/ r[i].substr(6);
                    break;
                case 28:
                    this.$ = /*#__PURE__*/ r[i].trim(), d.setAccTitle(this.$);
                    break;
                case 29:
                case 30:
                    this.$ = /*#__PURE__*/ r[i].trim(), d.setAccDescription(this.$);
                    break;
                case 31:
                    d.addSection(/*#__PURE__*/ r[i].substr(8)), this.$ = /*#__PURE__*/ r[i].substr(8);
                    break;
                case 33:
                    d.addTask(r[i - 1], r[i]), this.$ = "task";
                    break;
                case 34:
                    this.$ = r[i - 1], d.setClickEvent(r[i - 1], r[i], null);
                    break;
                case 35:
                    this.$ = r[i - 2], d.setClickEvent(r[i - 2], r[i - 1], r[i]);
                    break;
                case 36:
                    this.$ = r[i - 2], d.setClickEvent(r[i - 2], r[i - 1], null), d.setLink(r[i - 2], r[i]);
                    break;
                case 37:
                    this.$ = r[i - 3], d.setClickEvent(r[i - 3], r[i - 2], r[i - 1]), d.setLink(r[i - 3], r[i]);
                    break;
                case 38:
                    this.$ = r[i - 2], d.setClickEvent(r[i - 2], r[i], null), d.setLink(r[i - 2], r[i - 1]);
                    break;
                case 39:
                    this.$ = r[i - 3], d.setClickEvent(r[i - 3], r[i - 1], r[i]), d.setLink(r[i - 3], r[i - 2]);
                    break;
                case 40:
                    this.$ = r[i - 1], d.setLink(r[i - 1], r[i]);
                    break;
                case 41:
                case 47:
                    this.$ = r[i - 1] + " " + r[i];
                    break;
                case 42:
                case 43:
                case 45:
                    this.$ = r[i - 2] + " " + r[i - 1] + " " + r[i];
                    break;
                case 44:
                case 46:
                    this.$ = r[i - 3] + " " + r[i - 2] + " " + r[i - 1] + " " + r[i];
                    break;
            }
        }, "anonymous"),
        table: [
            {
                3: 1,
                4: [
                    1,
                    2
                ]
            },
            {
                1: [
                    3
                ]
            },
            /*#__PURE__*/ t(e, [
                2,
                2
            ], {
                5: 3
            }),
            {
                6: [
                    1,
                    4
                ],
                7: 5,
                8: [
                    1,
                    6
                ],
                9: 7,
                10: [
                    1,
                    8
                ],
                11: 17,
                12: s,
                13: a,
                14: n,
                15: f,
                16: k,
                17: D,
                18: _,
                19: 18,
                20: A,
                21: C,
                22: W,
                23: G,
                24: z,
                25: p,
                26: m,
                27: L,
                28: I,
                29: N,
                30: R,
                31: $,
                33: U,
                35: B,
                36: j,
                37: 24,
                38: g,
                40: v
            },
            /*#__PURE__*/ t(e, [
                2,
                7
            ], {
                1: [
                    2,
                    1
                ]
            }),
            /*#__PURE__*/ t(e, [
                2,
                3
            ]),
            {
                9: 36,
                11: 17,
                12: s,
                13: a,
                14: n,
                15: f,
                16: k,
                17: D,
                18: _,
                19: 18,
                20: A,
                21: C,
                22: W,
                23: G,
                24: z,
                25: p,
                26: m,
                27: L,
                28: I,
                29: N,
                30: R,
                31: $,
                33: U,
                35: B,
                36: j,
                37: 24,
                38: g,
                40: v
            },
            /*#__PURE__*/ t(e, [
                2,
                5
            ]),
            /*#__PURE__*/ t(e, [
                2,
                6
            ]),
            /*#__PURE__*/ t(e, [
                2,
                17
            ]),
            /*#__PURE__*/ t(e, [
                2,
                18
            ]),
            /*#__PURE__*/ t(e, [
                2,
                19
            ]),
            /*#__PURE__*/ t(e, [
                2,
                20
            ]),
            /*#__PURE__*/ t(e, [
                2,
                21
            ]),
            /*#__PURE__*/ t(e, [
                2,
                22
            ]),
            /*#__PURE__*/ t(e, [
                2,
                23
            ]),
            /*#__PURE__*/ t(e, [
                2,
                24
            ]),
            /*#__PURE__*/ t(e, [
                2,
                25
            ]),
            /*#__PURE__*/ t(e, [
                2,
                26
            ]),
            /*#__PURE__*/ t(e, [
                2,
                27
            ]),
            {
                32: [
                    1,
                    37
                ]
            },
            {
                34: [
                    1,
                    38
                ]
            },
            /*#__PURE__*/ t(e, [
                2,
                30
            ]),
            /*#__PURE__*/ t(e, [
                2,
                31
            ]),
            /*#__PURE__*/ t(e, [
                2,
                32
            ]),
            {
                39: [
                    1,
                    39
                ]
            },
            /*#__PURE__*/ t(e, [
                2,
                8
            ]),
            /*#__PURE__*/ t(e, [
                2,
                9
            ]),
            /*#__PURE__*/ t(e, [
                2,
                10
            ]),
            /*#__PURE__*/ t(e, [
                2,
                11
            ]),
            /*#__PURE__*/ t(e, [
                2,
                12
            ]),
            /*#__PURE__*/ t(e, [
                2,
                13
            ]),
            /*#__PURE__*/ t(e, [
                2,
                14
            ]),
            /*#__PURE__*/ t(e, [
                2,
                15
            ]),
            /*#__PURE__*/ t(e, [
                2,
                16
            ]),
            {
                41: [
                    1,
                    40
                ],
                43: [
                    1,
                    41
                ]
            },
            /*#__PURE__*/ t(e, [
                2,
                4
            ]),
            /*#__PURE__*/ t(e, [
                2,
                28
            ]),
            /*#__PURE__*/ t(e, [
                2,
                29
            ]),
            /*#__PURE__*/ t(e, [
                2,
                33
            ]),
            /*#__PURE__*/ t(e, [
                2,
                34
            ], {
                42: [
                    1,
                    42
                ],
                43: [
                    1,
                    43
                ]
            }),
            /*#__PURE__*/ t(e, [
                2,
                40
            ], {
                41: [
                    1,
                    44
                ]
            }),
            /*#__PURE__*/ t(e, [
                2,
                35
            ], {
                43: [
                    1,
                    45
                ]
            }),
            /*#__PURE__*/ t(e, [
                2,
                36
            ]),
            /*#__PURE__*/ t(e, [
                2,
                38
            ], {
                42: [
                    1,
                    46
                ]
            }),
            /*#__PURE__*/ t(e, [
                2,
                37
            ]),
            /*#__PURE__*/ t(e, [
                2,
                39
            ])
        ],
        defaultActions: {},
        parseError: /*#__PURE__*/ m$1(function(c, u) {
            if (u.recoverable) this.trace(c);
            else {
                var h = new Error(c);
                throw h.hash = u, h;
            }
        }, "parseError"),
        parse: /*#__PURE__*/ m$1(function(c) {
            var u = this, h = [
                0
            ], d = [], T = [
                null
            ], r = [], l = this.table, i = "", M = 0, E = 0, S = 0, P = 2, Y = 1, at = /*#__PURE__*/ r.slice.call(arguments, 1), F = /*#__PURE__*/ Object.create(this.lexer), Z = {
                yy: {}
            };
            for(var nt in this.yy)Object.prototype.hasOwnProperty.call(this.yy, nt) && (Z.yy[nt] = this.yy[nt]);
            F.setInput(c, Z.yy), Z.yy.lexer = F, Z.yy.parser = this, typeof F.yylloc > "u" && (F.yylloc = {});
            var rt = F.yylloc;
            r.push(rt);
            var ot = F.options && F.options.ranges;
            typeof Z.yy.parseError == "function" ? this.parseError = Z.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
            function ht(X) {
                h.length = h.length - 2 * X, T.length = T.length - X, r.length = r.length - X;
            }
            m$1(ht, "popStack");
            function kt() {
                var X;
                return X = d.pop() || F.lex() || Y, typeof X != "number" && (X instanceof Array && (d = X, X = /*#__PURE__*/ d.pop()), X = u.symbols_[X] || X), X;
            }
            m$1(kt, "lex");
            for(var V, it, Q, H, On, Ct, ct = {}, bt, J, ee, xt;;){
                if (Q = h[h.length - 1], this.defaultActions[Q] ? H = this.defaultActions[Q] : ((V === null || typeof V > "u") && (V = /*#__PURE__*/ kt()), H = l[Q] && l[Q][V]), typeof H > "u" || !H.length || !H[0]) {
                    var St = "";
                    xt = [];
                    for(bt in l[Q])this.terminals_[bt] && bt > P && xt.push("'" + this.terminals_[bt] + "'");
                    F.showPosition ? St = "Parse error on line " + (M + 1) + `:
` + F.showPosition() + `
Expecting ` + xt.join(", ") + ", got '" + (this.terminals_[V] || V) + "'" : St = "Parse error on line " + (M + 1) + ": Unexpected " + (V == Y ? "end of input" : "'" + (this.terminals_[V] || V) + "'"), this.parseError(St, {
                        text: F.match,
                        token: this.terminals_[V] || V,
                        line: F.yylineno,
                        loc: rt,
                        expected: xt
                    });
                }
                if (H[0] instanceof Array && H.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + Q + ", token: " + V);
                switch(H[0]){
                    case 1:
                        h.push(V), T.push(F.yytext), r.push(F.yylloc), h.push(H[1]), V = null, it ? (V = it, it = null) : (E = F.yyleng, i = F.yytext, M = F.yylineno, rt = F.yylloc, S > 0);
                        break;
                    case 2:
                        if (J = this.productions_[H[1]][1], ct.$ = T[T.length - J], ct._$ = {
                            first_line: r[r.length - (J || 1)].first_line,
                            last_line: r[r.length - 1].last_line,
                            first_column: r[r.length - (J || 1)].first_column,
                            last_column: r[r.length - 1].last_column
                        }, ot && (ct._$.range = [
                            r[r.length - (J || 1)].range[0],
                            r[r.length - 1].range[1]
                        ]), Ct = /*#__PURE__*/ this.performAction.apply(ct, /*#__PURE__*/ [
                            i,
                            E,
                            M,
                            Z.yy,
                            H[1],
                            T,
                            r
                        ].concat(at)), typeof Ct < "u") return Ct;
                        J && (h = /*#__PURE__*/ h.slice(0, -1 * J * 2), T = /*#__PURE__*/ T.slice(0, -1 * J), r = /*#__PURE__*/ r.slice(0, -1 * J)), h.push(this.productions_[H[1]][0]), T.push(ct.$), r.push(ct._$), ee = l[h[h.length - 2]][h[h.length - 1]], h.push(ee);
                        break;
                    case 3:
                        return true;
                }
            }
            return true;
        }, "parse")
    }, b = /*#__PURE__*/ function() {
        var w = {
            EOF: 1,
            parseError: /*#__PURE__*/ m$1(function(u, h) {
                if (this.yy.parser) this.yy.parser.parseError(u, h);
                else throw new Error(u);
            }, "parseError"),
            setInput: /*#__PURE__*/ m$1(function(c, u) {
                return this.yy = u || this.yy || {}, this._input = c, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = [
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
            input: /*#__PURE__*/ m$1(function() {
                var c = this._input[0];
                this.yytext += c, this.yyleng++, this.offset++, this.match += c, this.matched += c;
                var u = /*#__PURE__*/ c.match(/(?:\r\n?|\n).*/g);
                return u ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = /*#__PURE__*/ this._input.slice(1), c;
            }, "input"),
            unput: /*#__PURE__*/ m$1(function(c) {
                var u = c.length, h = /*#__PURE__*/ c.split(/(?:\r\n?|\n)/g);
                this._input = c + this._input, this.yytext = /*#__PURE__*/ this.yytext.substr(0, this.yytext.length - u), this.offset -= u;
                var d = /*#__PURE__*/ this.match.split(/(?:\r\n?|\n)/g);
                this.match = /*#__PURE__*/ this.match.substr(0, this.match.length - 1), this.matched = /*#__PURE__*/ this.matched.substr(0, this.matched.length - 1), h.length - 1 && (this.yylineno -= h.length - 1);
                var T = this.yylloc.range;
                return this.yylloc = {
                    first_line: this.yylloc.first_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.first_column,
                    last_column: h ? (h.length === d.length ? this.yylloc.first_column : 0) + d[d.length - h.length].length - h[0].length : this.yylloc.first_column - u
                }, this.options.ranges && (this.yylloc.range = [
                    T[0],
                    T[0] + this.yyleng - u
                ]), this.yyleng = this.yytext.length, this;
            }, "unput"),
            more: /*#__PURE__*/ m$1(function() {
                return this._more = true, this;
            }, "more"),
            reject: /*#__PURE__*/ m$1(function() {
                if (this.options.backtrack_lexer) this._backtrack = true;
                else return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
                    text: "",
                    token: null,
                    line: this.yylineno
                });
                return this;
            }, "reject"),
            less: /*#__PURE__*/ m$1(function(c) {
                this.unput(/*#__PURE__*/ this.match.slice(c));
            }, "less"),
            pastInput: /*#__PURE__*/ m$1(function() {
                var c = /*#__PURE__*/ this.matched.substr(0, this.matched.length - this.match.length);
                return (c.length > 20 ? "..." : "") + c.substr(-20).replace(/\n/g, "");
            }, "pastInput"),
            upcomingInput: /*#__PURE__*/ m$1(function() {
                var c = this.match;
                return c.length < 20 && (c += /*#__PURE__*/ this._input.substr(0, 20 - c.length)), (c.substr(0, 20) + (c.length > 20 ? "..." : "")).replace(/\n/g, "");
            }, "upcomingInput"),
            showPosition: /*#__PURE__*/ m$1(function() {
                var c = /*#__PURE__*/ this.pastInput(), u = /*#__PURE__*/ new Array(c.length + 1).join("-");
                return c + this.upcomingInput() + `
` + u + "^";
            }, "showPosition"),
            test_match: /*#__PURE__*/ m$1(function(c, u) {
                var h, d, T;
                if (this.options.backtrack_lexer && (T = {
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
                    conditionStack: /*#__PURE__*/ this.conditionStack.slice(0),
                    done: this.done
                }, this.options.ranges && (T.yylloc.range = /*#__PURE__*/ this.yylloc.range.slice(0))), d = /*#__PURE__*/ c[0].match(/(?:\r\n?|\n).*/g), d && (this.yylineno += d.length), this.yylloc = {
                    first_line: this.yylloc.last_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.last_column,
                    last_column: d ? d[d.length - 1].length - d[d.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + c[0].length
                }, this.yytext += c[0], this.match += c[0], this.matches = c, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [
                    this.offset,
                    this.offset += this.yyleng
                ]), this._more = false, this._backtrack = false, this._input = /*#__PURE__*/ this._input.slice(c[0].length), this.matched += c[0], h = /*#__PURE__*/ this.performAction.call(this, this.yy, this, u, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), h) return h;
                if (this._backtrack) {
                    for(var r in T)this[r] = T[r];
                    return false;
                }
                return false;
            }, "test_match"),
            next: /*#__PURE__*/ m$1(function() {
                if (this.done) return this.EOF;
                this._input || (this.done = true);
                var c, u, h, d;
                this._more || (this.yytext = "", this.match = "");
                for(var T = /*#__PURE__*/ this._currentRules(), r = 0; r < T.length; r++)if (h = /*#__PURE__*/ this._input.match(this.rules[T[r]]), h && (!u || h[0].length > u[0].length)) {
                    if (u = h, d = r, this.options.backtrack_lexer) {
                        if (c = /*#__PURE__*/ this.test_match(h, T[r]), c !== false) return c;
                        if (this._backtrack) {
                            u = false;
                            continue;
                        } else return false;
                    } else if (!this.options.flex) break;
                }
                return u ? (c = /*#__PURE__*/ this.test_match(u, T[d]), c !== false ? c : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
                    text: "",
                    token: null,
                    line: this.yylineno
                });
            }, "next"),
            lex: /*#__PURE__*/ m$1(function() {
                var u = /*#__PURE__*/ this.next();
                return u || this.lex();
            }, "lex"),
            begin: /*#__PURE__*/ m$1(function(u) {
                this.conditionStack.push(u);
            }, "begin"),
            popState: /*#__PURE__*/ m$1(function() {
                var u = this.conditionStack.length - 1;
                return u > 0 ? this.conditionStack.pop() : this.conditionStack[0];
            }, "popState"),
            _currentRules: /*#__PURE__*/ m$1(function() {
                return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
            }, "_currentRules"),
            topState: /*#__PURE__*/ m$1(function(u) {
                return u = this.conditionStack.length - 1 - Math.abs(u || 0), u >= 0 ? this.conditionStack[u] : "INITIAL";
            }, "topState"),
            pushState: /*#__PURE__*/ m$1(function(u) {
                this.begin(u);
            }, "pushState"),
            stateStackSize: /*#__PURE__*/ m$1(function() {
                return this.conditionStack.length;
            }, "stateStackSize"),
            options: {
                "case-insensitive": true
            },
            performAction: /*#__PURE__*/ m$1(function(u, h, d, T) {
                switch(d){
                    case 0:
                        return this.begin("open_directive"), "open_directive";
                    case 1:
                        return this.begin("acc_title"), 31;
                    case 2:
                        return this.popState(), "acc_title_value";
                    case 3:
                        return this.begin("acc_descr"), 33;
                    case 4:
                        return this.popState(), "acc_descr_value";
                    case 5:
                        this.begin("acc_descr_multiline");
                        break;
                    case 6:
                        this.popState();
                        break;
                    case 7:
                        return "acc_descr_multiline_value";
                    case 8:
                        break;
                    case 9:
                        break;
                    case 10:
                        break;
                    case 11:
                        return 10;
                    case 12:
                        break;
                    case 13:
                        break;
                    case 14:
                        this.begin("href");
                        break;
                    case 15:
                        this.popState();
                        break;
                    case 16:
                        return 43;
                    case 17:
                        this.begin("callbackname");
                        break;
                    case 18:
                        this.popState();
                        break;
                    case 19:
                        this.popState(), this.begin("callbackargs");
                        break;
                    case 20:
                        return 41;
                    case 21:
                        this.popState();
                        break;
                    case 22:
                        return 42;
                    case 23:
                        this.begin("click");
                        break;
                    case 24:
                        this.popState();
                        break;
                    case 25:
                        return 40;
                    case 26:
                        return 4;
                    case 27:
                        return 22;
                    case 28:
                        return 23;
                    case 29:
                        return 24;
                    case 30:
                        return 25;
                    case 31:
                        return 26;
                    case 32:
                        return 28;
                    case 33:
                        return 27;
                    case 34:
                        return 29;
                    case 35:
                        return 12;
                    case 36:
                        return 13;
                    case 37:
                        return 14;
                    case 38:
                        return 15;
                    case 39:
                        return 16;
                    case 40:
                        return 17;
                    case 41:
                        return 18;
                    case 42:
                        return 20;
                    case 43:
                        return 21;
                    case 44:
                        return "date";
                    case 45:
                        return 30;
                    case 46:
                        return "accDescription";
                    case 47:
                        return 36;
                    case 48:
                        return 38;
                    case 49:
                        return 39;
                    case 50:
                        return ":";
                    case 51:
                        return 6;
                    case 52:
                        return "INVALID";
                }
            }, "anonymous"),
            rules: [
                /^(?:%%\{)/i,
                /^(?:accTitle\s*:\s*)/i,
                /^(?:(?!\n||)*[^\n]*)/i,
                /^(?:accDescr\s*:\s*)/i,
                /^(?:(?!\n||)*[^\n]*)/i,
                /^(?:accDescr\s*\{\s*)/i,
                /^(?:[\}])/i,
                /^(?:[^\}]*)/i,
                /^(?:%%(?!\{)*[^\n]*)/i,
                /^(?:[^\}]%%*[^\n]*)/i,
                /^(?:%%*[^\n]*[\n]*)/i,
                /^(?:[\n]+)/i,
                /^(?:\s+)/i,
                /^(?:%[^\n]*)/i,
                /^(?:href[\s]+["])/i,
                /^(?:["])/i,
                /^(?:[^"]*)/i,
                /^(?:call[\s]+)/i,
                /^(?:\([\s]*\))/i,
                /^(?:\()/i,
                /^(?:[^(]*)/i,
                /^(?:\))/i,
                /^(?:[^)]*)/i,
                /^(?:click[\s]+)/i,
                /^(?:[\s\n])/i,
                /^(?:[^\s\n]*)/i,
                /^(?:gantt\b)/i,
                /^(?:dateFormat\s[^#\n;]+)/i,
                /^(?:inclusiveEndDates\b)/i,
                /^(?:topAxis\b)/i,
                /^(?:axisFormat\s[^#\n;]+)/i,
                /^(?:tickInterval\s[^#\n;]+)/i,
                /^(?:includes\s[^#\n;]+)/i,
                /^(?:excludes\s[^#\n;]+)/i,
                /^(?:todayMarker\s[^\n;]+)/i,
                /^(?:weekday\s+monday\b)/i,
                /^(?:weekday\s+tuesday\b)/i,
                /^(?:weekday\s+wednesday\b)/i,
                /^(?:weekday\s+thursday\b)/i,
                /^(?:weekday\s+friday\b)/i,
                /^(?:weekday\s+saturday\b)/i,
                /^(?:weekday\s+sunday\b)/i,
                /^(?:weekend\s+friday\b)/i,
                /^(?:weekend\s+saturday\b)/i,
                /^(?:\d\d\d\d-\d\d-\d\d\b)/i,
                /^(?:title\s[^\n]+)/i,
                /^(?:accDescription\s[^#\n;]+)/i,
                /^(?:section\s[^\n]+)/i,
                /^(?:[^:\n]+)/i,
                /^(?::[^#\n;]+)/i,
                /^(?::)/i,
                /^(?:$)/i,
                /^(?:.)/i
            ],
            conditions: {
                acc_descr_multiline: {
                    rules: [
                        6,
                        7
                    ],
                    inclusive: false
                },
                acc_descr: {
                    rules: [
                        4
                    ],
                    inclusive: false
                },
                acc_title: {
                    rules: [
                        2
                    ],
                    inclusive: false
                },
                callbackargs: {
                    rules: [
                        21,
                        22
                    ],
                    inclusive: false
                },
                callbackname: {
                    rules: [
                        18,
                        19,
                        20
                    ],
                    inclusive: false
                },
                href: {
                    rules: [
                        15,
                        16
                    ],
                    inclusive: false
                },
                click: {
                    rules: [
                        24,
                        25
                    ],
                    inclusive: false
                },
                INITIAL: {
                    rules: [
                        0,
                        1,
                        3,
                        5,
                        8,
                        9,
                        10,
                        11,
                        12,
                        13,
                        14,
                        17,
                        23,
                        26,
                        27,
                        28,
                        29,
                        30,
                        31,
                        32,
                        33,
                        34,
                        35,
                        36,
                        37,
                        38,
                        39,
                        40,
                        41,
                        42,
                        43,
                        44,
                        45,
                        46,
                        47,
                        48,
                        49,
                        50,
                        51,
                        52
                    ],
                    inclusive: true
                }
            }
        };
        return w;
    }();
    x.lexer = b;
    function y() {
        this.yy = {};
    }
    return m$1(y, "Parser"), y.prototype = x, x.Parser = y, new y;
}();
Vt.parser = Vt;
var Se = Vt;
var Ye = /*#__PURE__*/ q$1(/*#__PURE__*/ f()), q = /*#__PURE__*/ q$1(/*#__PURE__*/ ul()), Fe = /*#__PURE__*/ q$1(/*#__PURE__*/ Ee()), We = /*#__PURE__*/ q$1(/*#__PURE__*/ Me()), Ve = /*#__PURE__*/ q$1(/*#__PURE__*/ Le());
q.default.extend(Fe.default);
q.default.extend(We.default);
q.default.extend(Ve.default);
var Ae = {
    friday: 5,
    saturday: 6
}, K = "", Xt = "", qt, Ut = "", yt = [], pt = [], Zt = new Map, Qt = [], wt = [], ft = "", $t = "", Oe = [
    "active",
    "done",
    "crit",
    "milestone",
    "vert"
], Kt = [], gt = false, Jt = false, te = "sunday", _t = "saturday", jt = 0, $e = /*#__PURE__*/ m$1(function() {
    Qt = [], wt = [], ft = "", Kt = [], Tt = 0, Ht = void 0, vt = void 0, O = [], K = "", Xt = "", $t = "", qt = void 0, Ut = "", yt = [], pt = [], gt = false, Jt = false, jt = 0, Zt = new Map, Vf(), te = "sunday", _t = "saturday";
}, "clear"), Ke = /*#__PURE__*/ m$1(function(t) {
    Xt = t;
}, "setAxisFormat"), Je = /*#__PURE__*/ m$1(function() {
    return Xt;
}, "getAxisFormat"), tn = /*#__PURE__*/ m$1(function(t) {
    qt = t;
}, "setTickInterval"), en = /*#__PURE__*/ m$1(function() {
    return qt;
}, "getTickInterval"), nn = /*#__PURE__*/ m$1(function(t) {
    Ut = t;
}, "setTodayMarker"), rn = /*#__PURE__*/ m$1(function() {
    return Ut;
}, "getTodayMarker"), sn = /*#__PURE__*/ m$1(function(t) {
    K = t;
}, "setDateFormat"), an = /*#__PURE__*/ m$1(function() {
    gt = true;
}, "enableInclusiveEndDates"), on = /*#__PURE__*/ m$1(function() {
    return gt;
}, "endDatesAreInclusive"), cn = /*#__PURE__*/ m$1(function() {
    Jt = true;
}, "enableTopAxis"), ln = /*#__PURE__*/ m$1(function() {
    return Jt;
}, "topAxisEnabled"), un = /*#__PURE__*/ m$1(function(t) {
    $t = t;
}, "setDisplayMode"), dn = /*#__PURE__*/ m$1(function() {
    return $t;
}, "getDisplayMode"), fn = /*#__PURE__*/ m$1(function() {
    return K;
}, "getDateFormat"), hn = /*#__PURE__*/ m$1(function(t) {
    yt = /*#__PURE__*/ t.toLowerCase().split(/[\s,]+/);
}, "setIncludes"), kn = /*#__PURE__*/ m$1(function() {
    return yt;
}, "getIncludes"), mn = /*#__PURE__*/ m$1(function(t) {
    pt = /*#__PURE__*/ t.toLowerCase().split(/[\s,]+/);
}, "setExcludes"), yn = /*#__PURE__*/ m$1(function() {
    return pt;
}, "getExcludes"), pn = /*#__PURE__*/ m$1(function() {
    return Zt;
}, "getLinks"), gn = /*#__PURE__*/ m$1(function(t) {
    ft = t, Qt.push(t);
}, "addSection"), bn = /*#__PURE__*/ m$1(function() {
    return Qt;
}, "getSections"), xn = /*#__PURE__*/ m$1(function() {
    let t = /*#__PURE__*/ Ie(), e = 10, s = 0;
    for(; !t && s < e;)t = /*#__PURE__*/ Ie(), s++;
    return wt = O, wt;
}, "getTasks"), Pe = /*#__PURE__*/ m$1(function(t, e, s, a) {
    return a.includes(/*#__PURE__*/ t.format(/*#__PURE__*/ e.trim())) ? false : s.includes("weekends") && (t.isoWeekday() === Ae[_t] || t.isoWeekday() === Ae[_t] + 1) || s.includes(/*#__PURE__*/ t.format("dddd").toLowerCase()) ? true : s.includes(/*#__PURE__*/ t.format(/*#__PURE__*/ e.trim()));
}, "isInvalidDate"), Tn = /*#__PURE__*/ m$1(function(t) {
    te = t;
}, "setWeekday"), vn = /*#__PURE__*/ m$1(function() {
    return te;
}, "getWeekday"), wn = /*#__PURE__*/ m$1(function(t) {
    _t = t;
}, "setWeekend"), ze = /*#__PURE__*/ m$1(function(t, e, s, a) {
    if (!s.length || t.manualEndTime) return;
    let n;
    t.startTime instanceof Date ? n = /*#__PURE__*/ (0, q.default)(t.startTime) : n = /*#__PURE__*/ (0, q.default)(t.startTime, e, true), n = /*#__PURE__*/ n.add(1, "d");
    let f;
    t.endTime instanceof Date ? f = /*#__PURE__*/ (0, q.default)(t.endTime) : f = /*#__PURE__*/ (0, q.default)(t.endTime, e, true);
    let [k, D] = _n(n, f, e, s, a);
    t.endTime = /*#__PURE__*/ k.toDate(), t.renderEndTime = D;
}, "checkTaskDates"), _n = /*#__PURE__*/ m$1(function(t, e, s, a, n) {
    let f = false, k = null;
    for(; t <= e;)f || (k = /*#__PURE__*/ e.toDate()), f = /*#__PURE__*/ Pe(t, s, a, n), f && (e = /*#__PURE__*/ e.add(1, "d")), t = /*#__PURE__*/ t.add(1, "d");
    return [
        e,
        k
    ];
}, "fixTaskDates"), Gt = /*#__PURE__*/ m$1(function(t, e, s) {
    s = /*#__PURE__*/ s.trim();
    let n = /*#__PURE__*/ /^after\s+(?<ids>[\d\w- ]+)/.exec(s);
    if (n !== null) {
        let k = null;
        for (let _ of n.groups.ids.split(" ")){
            let A = /*#__PURE__*/ st(_);
            A !== void 0 && (!k || A.endTime > k.endTime) && (k = A);
        }
        if (k) return k.endTime;
        let D = new Date;
        return D.setHours(0, 0, 0, 0), D;
    }
    let f = /*#__PURE__*/ (0, q.default)(s, /*#__PURE__*/ e.trim(), true);
    if (f.isValid()) return f.toDate();
    {
        tt$1.debug("Invalid date:" + s), tt$1.debug("With date format:" + e.trim());
        let k = new Date(s);
        if (k === void 0 || isNaN(/*#__PURE__*/ k.getTime()) || k.getFullYear() < -1e4 || k.getFullYear() > 1e4) throw new Error("Invalid date:" + s);
        return k;
    }
}, "getStartDate"), Ne = /*#__PURE__*/ m$1(function(t) {
    let e = /*#__PURE__*/ /^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(/*#__PURE__*/ t.trim());
    return e !== null ? [
        /*#__PURE__*/ Number.parseFloat(e[1]),
        e[2]
    ] : [
        NaN,
        "ms"
    ];
}, "parseDuration"), Re = /*#__PURE__*/ m$1(function(t, e, s, a = false) {
    s = /*#__PURE__*/ s.trim();
    let f = /*#__PURE__*/ /^until\s+(?<ids>[\d\w- ]+)/.exec(s);
    if (f !== null) {
        let C = null;
        for (let G of f.groups.ids.split(" ")){
            let z = /*#__PURE__*/ st(G);
            z !== void 0 && (!C || z.startTime < C.startTime) && (C = z);
        }
        if (C) return C.startTime;
        let W = new Date;
        return W.setHours(0, 0, 0, 0), W;
    }
    let k = /*#__PURE__*/ (0, q.default)(s, /*#__PURE__*/ e.trim(), true);
    if (k.isValid()) return a && (k = /*#__PURE__*/ k.add(1, "d")), k.toDate();
    let D = /*#__PURE__*/ (0, q.default)(t), [_, A] = Ne(s);
    if (!Number.isNaN(_)) {
        let C = /*#__PURE__*/ D.add(_, A);
        C.isValid() && (D = C);
    }
    return D.toDate();
}, "getEndDate"), Tt = 0, dt = /*#__PURE__*/ m$1(function(t) {
    return t === void 0 ? (Tt = Tt + 1, "task" + Tt) : t;
}, "parseId"), Dn = /*#__PURE__*/ m$1(function(t, e) {
    let s;
    e.substr(0, 1) === ":" ? s = /*#__PURE__*/ e.substr(1, e.length) : s = e;
    let a = /*#__PURE__*/ s.split(","), n = {};
    Xe(a, n, Oe);
    for(let k = 0; k < a.length; k++)a[k] = /*#__PURE__*/ a[k].trim();
    let f = "";
    switch(a.length){
        case 1:
            n.id = /*#__PURE__*/ dt(), n.startTime = t.endTime, f = a[0];
            break;
        case 2:
            n.id = /*#__PURE__*/ dt(), n.startTime = /*#__PURE__*/ Gt(void 0, K, a[0]), f = a[1];
            break;
        case 3:
            n.id = /*#__PURE__*/ dt(a[0]), n.startTime = /*#__PURE__*/ Gt(void 0, K, a[1]), f = a[2];
            break;
    }
    return f && (n.endTime = /*#__PURE__*/ Re(n.startTime, K, f, gt), n.manualEndTime = /*#__PURE__*/ (0, q.default)(f, "YYYY-MM-DD", true).isValid(), ze(n, K, pt, yt)), n;
}, "compileData"), Cn = /*#__PURE__*/ m$1(function(t, e) {
    let s;
    e.substr(0, 1) === ":" ? s = /*#__PURE__*/ e.substr(1, e.length) : s = e;
    let a = /*#__PURE__*/ s.split(","), n = {};
    Xe(a, n, Oe);
    for(let f = 0; f < a.length; f++)a[f] = /*#__PURE__*/ a[f].trim();
    switch(a.length){
        case 1:
            n.id = /*#__PURE__*/ dt(), n.startTime = {
                type: "prevTaskEnd",
                id: t
            }, n.endTime = {
                data: a[0]
            };
            break;
        case 2:
            n.id = /*#__PURE__*/ dt(), n.startTime = {
                type: "getStartDate",
                startData: a[0]
            }, n.endTime = {
                data: a[1]
            };
            break;
        case 3:
            n.id = /*#__PURE__*/ dt(a[0]), n.startTime = {
                type: "getStartDate",
                startData: a[1]
            }, n.endTime = {
                data: a[2]
            };
            break;
    }
    return n;
}, "parseData"), Ht, vt, O = [], Be = {}, Sn = /*#__PURE__*/ m$1(function(t, e) {
    let s = {
        section: ft,
        type: ft,
        processed: false,
        manualEndTime: false,
        renderEndTime: null,
        raw: {
            data: e
        },
        task: t,
        classes: []
    }, a = /*#__PURE__*/ Cn(vt, e);
    s.raw.startTime = a.startTime, s.raw.endTime = a.endTime, s.id = a.id, s.prevTaskId = vt, s.active = a.active, s.done = a.done, s.crit = a.crit, s.milestone = a.milestone, s.vert = a.vert, s.order = jt, jt++;
    let n = /*#__PURE__*/ O.push(s);
    vt = s.id, Be[s.id] = n - 1;
}, "addTask"), st = /*#__PURE__*/ m$1(function(t) {
    let e = Be[t];
    return O[e];
}, "findTaskById"), En = /*#__PURE__*/ m$1(function(t, e) {
    let s = {
        section: ft,
        type: ft,
        description: t,
        task: t,
        classes: []
    }, a = /*#__PURE__*/ Dn(Ht, e);
    s.startTime = a.startTime, s.endTime = a.endTime, s.id = a.id, s.active = a.active, s.done = a.done, s.crit = a.crit, s.milestone = a.milestone, s.vert = a.vert, Ht = s, wt.push(s);
}, "addTaskOrg"), Ie = /*#__PURE__*/ m$1(function() {
    let t = /*#__PURE__*/ m$1(function(s) {
        let a = O[s], n = "";
        switch(O[s].raw.startTime.type){
            case "prevTaskEnd":
                {
                    let f = /*#__PURE__*/ st(a.prevTaskId);
                    a.startTime = f.endTime;
                    break;
                }
            case "getStartDate":
                n = /*#__PURE__*/ Gt(void 0, K, O[s].raw.startTime.startData), n && (O[s].startTime = n);
                break;
        }
        return O[s].startTime && (O[s].endTime = /*#__PURE__*/ Re(O[s].startTime, K, O[s].raw.endTime.data, gt), O[s].endTime && (O[s].processed = true, O[s].manualEndTime = /*#__PURE__*/ (0, q.default)(O[s].raw.endTime.data, "YYYY-MM-DD", true).isValid(), ze(O[s], K, pt, yt))), O[s].processed;
    }, "compileTask"), e = true;
    for (let [s, a] of O.entries())t(s), e = e && a.processed;
    return e;
}, "compileTasks"), Mn = /*#__PURE__*/ m$1(function(t, e) {
    let s = e;
    hh().securityLevel !== "loose" && (s = /*#__PURE__*/ (0, Ye.sanitizeUrl)(e)), t.split(",").forEach(function(a) {
        st(a) !== void 0 && (Ge(a, ()=>{
            window.open(s, "_self");
        }), Zt.set(a, s));
    }), je(t, "clickable");
}, "setLink"), je = /*#__PURE__*/ m$1(function(t, e) {
    t.split(",").forEach(function(s) {
        let a = /*#__PURE__*/ st(s);
        a !== void 0 && a.classes.push(e);
    });
}, "setClass"), Ln = /*#__PURE__*/ m$1(function(t, e, s) {
    if (hh().securityLevel !== "loose" || e === void 0) return;
    let a = [];
    if (typeof s == "string") {
        a = /*#__PURE__*/ s.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
        for(let f = 0; f < a.length; f++){
            let k = /*#__PURE__*/ a[f].trim();
            k.startsWith('"') && k.endsWith('"') && (k = /*#__PURE__*/ k.substr(1, k.length - 2)), a[f] = k;
        }
    }
    a.length === 0 && a.push(t), st(t) !== void 0 && Ge(t, ()=>{
        Ie$1.runFunc(e, ...a);
    });
}, "setClickFun"), Ge = /*#__PURE__*/ m$1(function(t, e) {
    Kt.push(function() {
        let s = /*#__PURE__*/ document.querySelector(`[id="${t}"]`);
        s !== null && s.addEventListener("click", function() {
            e();
        });
    }, function() {
        let s = /*#__PURE__*/ document.querySelector(`[id="${t}-text"]`);
        s !== null && s.addEventListener("click", function() {
            e();
        });
    });
}, "pushFun"), An = /*#__PURE__*/ m$1(function(t, e, s) {
    t.split(",").forEach(function(a) {
        Ln(a, e, s);
    }), je(t, "clickable");
}, "setClickEvent"), In = /*#__PURE__*/ m$1(function(t) {
    Kt.forEach(function(e) {
        e(t);
    });
}, "bindFunctions"), He = {
    getConfig: /*#__PURE__*/ m$1(()=>hh().gantt, "getConfig"),
    clear: $e,
    setDateFormat: sn,
    getDateFormat: fn,
    enableInclusiveEndDates: an,
    endDatesAreInclusive: on,
    enableTopAxis: cn,
    topAxisEnabled: ln,
    setAxisFormat: Ke,
    getAxisFormat: Je,
    setTickInterval: tn,
    getTickInterval: en,
    setTodayMarker: nn,
    getTodayMarker: rn,
    setAccTitle: Xf,
    getAccTitle: jf,
    setDiagramTitle: Qf,
    getDiagramTitle: Jf,
    setDisplayMode: un,
    getDisplayMode: dn,
    setAccDescription: Zf,
    getAccDescription: Kf,
    addSection: gn,
    getSections: bn,
    getTasks: xn,
    addTask: Sn,
    findTaskById: st,
    addTaskOrg: En,
    setIncludes: hn,
    getIncludes: kn,
    setExcludes: mn,
    getExcludes: yn,
    setClickEvent: An,
    setLink: Mn,
    getLinks: pn,
    bindFunctions: In,
    parseDuration: Ne,
    isInvalidDate: Pe,
    setWeekday: Tn,
    getWeekday: vn,
    setWeekend: wn
};
function Xe(t, e, s) {
    let a = true;
    for(; a;)a = false, s.forEach(function(n) {
        let f = "^\\s*" + n + "\\s*$", k = new RegExp(f);
        t[0].match(k) && (e[n] = true, t.shift(1), a = true);
    });
}
m$1(Xe, "getTaskTags");
var Dt = /*#__PURE__*/ q$1(/*#__PURE__*/ ul());
var Yn = /*#__PURE__*/ m$1(function() {
    tt$1.debug("Something is calling, setConf, remove the call");
}, "setConf"), qe = {
    monday: xr,
    tuesday: hc,
    wednesday: cc,
    thursday: we,
    friday: uc,
    saturday: fc,
    sunday: fe
}, Fn = /*#__PURE__*/ m$1((t, e)=>{
    let s = /*#__PURE__*/ [
        ...t
    ].map(()=>-1 / 0), a = /*#__PURE__*/ [
        ...t
    ].sort((f, k)=>f.startTime - k.startTime || f.order - k.order), n = 0;
    for (let f of a)for(let k = 0; k < s.length; k++)if (f.startTime >= s[k]) {
        s[k] = f.endTime, f.order = k + e, k > n && (n = k);
        break;
    }
    return n;
}, "getMaxIntersections"), tt, Wn = /*#__PURE__*/ m$1(function(t, e, s, a) {
    let n = hh().gantt, f = hh().securityLevel, k;
    f === "sandbox" && (k = /*#__PURE__*/ kh("#i" + e));
    let D = f === "sandbox" ? kh(k.nodes()[0].contentDocument.body) : kh("body"), _ = f === "sandbox" ? k.nodes()[0].contentDocument : document, A = /*#__PURE__*/ _.getElementById(e);
    tt = A.parentElement.offsetWidth, tt === void 0 && (tt = 1200), n.useWidth !== void 0 && (tt = n.useWidth);
    let C = /*#__PURE__*/ a.db.getTasks(), W = [];
    for (let g of C)W.push(g.type);
    W = /*#__PURE__*/ j(W);
    let G = {}, z = 2 * n.topPadding;
    if (a.db.getDisplayMode() === "compact" || n.displayMode === "compact") {
        let g = {};
        for (let x of C)g[x.section] === void 0 ? g[x.section] = [
            x
        ] : g[x.section].push(x);
        let v = 0;
        for (let x of Object.keys(g)){
            let b = Fn(g[x], v) + 1;
            v += b, z += b * (n.barHeight + n.barGap), G[x] = b;
        }
    } else {
        z += C.length * (n.barHeight + n.barGap);
        for (let g of W)G[g] = C.filter((v)=>v.type === g).length;
    }
    A.setAttribute("viewBox", "0 0 " + tt + " " + z);
    let p = /*#__PURE__*/ D.select(`[id="${e}"]`), m = /*#__PURE__*/ qc().domain([
        /*#__PURE__*/ uh(C, function(g) {
            return g.startTime;
        }),
        /*#__PURE__*/ ch(C, function(g) {
            return g.endTime;
        })
    ]).rangeRound([
        0,
        tt - n.leftPadding - n.rightPadding
    ]);
    function L(g, v) {
        let x = g.startTime, b = v.startTime, y = 0;
        return x > b ? y = 1 : x < b && (y = -1), y;
    }
    m$1(L, "taskCompare"), C.sort(L), I(C, tt, z), Yf(p, z, tt, n.useMaxWidth), p.append("text").text(/*#__PURE__*/ a.db.getDiagramTitle()).attr("x", tt / 2).attr("y", n.titleTopMargin).attr("class", "titleText");
    function I(g, v, x) {
        let b = n.barHeight, y = b + n.barGap, w = n.topPadding, c = n.leftPadding, u = /*#__PURE__*/ es().domain([
            0,
            W.length
        ]).range([
            "#00B9FA",
            "#F95002"
        ]).interpolate(Lp);
        R(y, w, c, v, x, g, /*#__PURE__*/ a.db.getExcludes(), /*#__PURE__*/ a.db.getIncludes()), $(c, w, v, x), N(g, y, w, c, b, u, v), U(y, w), B(c, w, v, x);
    }
    m$1(I, "makeGantt");
    function N(g, v, x, b, y, w, c) {
        g.sort((l, i)=>l.vert === i.vert ? 0 : l.vert ? 1 : -1);
        let h = /*#__PURE__*/ [
            ...new Set(g.map((l)=>l.order))
        ].map((l)=>g.find((i)=>i.order === l));
        p.append("g").selectAll("rect").data(h).enter().append("rect").attr("x", 0).attr("y", function(l, i) {
            return i = l.order, i * v + x - 2;
        }).attr("width", function() {
            return c - n.rightPadding / 2;
        }).attr("height", v).attr("class", function(l) {
            for (let [i, M] of W.entries())if (l.type === M) return "section section" + i % n.numberSectionStyles;
            return "section section0";
        }).enter();
        let d = /*#__PURE__*/ p.append("g").selectAll("rect").data(g).enter(), T = /*#__PURE__*/ a.db.getLinks();
        if (d.append("rect").attr("id", function(l) {
            return l.id;
        }).attr("rx", 3).attr("ry", 3).attr("x", function(l) {
            return l.milestone ? m(l.startTime) + b + .5 * (m(l.endTime) - m(l.startTime)) - .5 * y : m(l.startTime) + b;
        }).attr("y", function(l, i) {
            return i = l.order, l.vert ? n.gridLineStartPadding : i * v + x;
        }).attr("width", function(l) {
            return l.milestone ? y : l.vert ? .08 * y : m(l.renderEndTime || l.endTime) - m(l.startTime);
        }).attr("height", function(l) {
            return l.vert ? C.length * (n.barHeight + n.barGap) + n.barHeight * 2 : y;
        }).attr("transform-origin", function(l, i) {
            return i = l.order, (m(l.startTime) + b + .5 * (m(l.endTime) - m(l.startTime))).toString() + "px " + (i * v + x + .5 * y).toString() + "px";
        }).attr("class", function(l) {
            let i = "task", M = "";
            l.classes.length > 0 && (M = /*#__PURE__*/ l.classes.join(" "));
            let E = 0;
            for (let [P, Y] of W.entries())l.type === Y && (E = P % n.numberSectionStyles);
            let S = "";
            return l.active ? l.crit ? S += " activeCrit" : S = " active" : l.done ? l.crit ? S = " doneCrit" : S = " done" : l.crit && (S += " crit"), S.length === 0 && (S = " task"), l.milestone && (S = " milestone " + S), l.vert && (S = " vert " + S), S += E, S += " " + M, i + S;
        }), d.append("text").attr("id", function(l) {
            return l.id + "-text";
        }).text(function(l) {
            return l.task;
        }).attr("font-size", n.fontSize).attr("x", function(l) {
            let i = /*#__PURE__*/ m(l.startTime), M = /*#__PURE__*/ m(l.renderEndTime || l.endTime);
            if (l.milestone && (i += .5 * (m(l.endTime) - m(l.startTime)) - .5 * y, M = i + y), l.vert) return m(l.startTime) + b;
            let E = this.getBBox().width;
            return E > M - i ? M + E + 1.5 * n.leftPadding > c ? i + b - 5 : M + b + 5 : (M - i) / 2 + i + b;
        }).attr("y", function(l, i) {
            return l.vert ? n.gridLineStartPadding + C.length * (n.barHeight + n.barGap) + 60 : (i = l.order, i * v + n.barHeight / 2 + (n.fontSize / 2 - 2) + x);
        }).attr("text-height", y).attr("class", function(l) {
            let i = /*#__PURE__*/ m(l.startTime), M = /*#__PURE__*/ m(l.endTime);
            l.milestone && (M = i + y);
            let E = this.getBBox().width, S = "";
            l.classes.length > 0 && (S = /*#__PURE__*/ l.classes.join(" "));
            let P = 0;
            for (let [at, F] of W.entries())l.type === F && (P = at % n.numberSectionStyles);
            let Y = "";
            return l.active && (l.crit ? Y = "activeCritText" + P : Y = "activeText" + P), l.done ? l.crit ? Y = Y + " doneCritText" + P : Y = Y + " doneText" + P : l.crit && (Y = Y + " critText" + P), l.milestone && (Y += " milestoneText"), l.vert && (Y += " vertText"), E > M - i ? M + E + 1.5 * n.leftPadding > c ? S + " taskTextOutsideLeft taskTextOutside" + P + " " + Y : S + " taskTextOutsideRight taskTextOutside" + P + " " + Y + " width-" + E : S + " taskText taskText" + P + " " + Y + " width-" + E;
        }), hh().securityLevel === "sandbox") {
            let l;
            l = /*#__PURE__*/ kh("#i" + e);
            let i = l.nodes()[0].contentDocument;
            d.filter(function(M) {
                return T.has(M.id);
            }).each(function(M) {
                var E = /*#__PURE__*/ i.querySelector("#" + M.id), S = /*#__PURE__*/ i.querySelector("#" + M.id + "-text");
                let P = E.parentNode;
                var Y = /*#__PURE__*/ i.createElement("a");
                Y.setAttribute("xlink:href", /*#__PURE__*/ T.get(M.id)), Y.setAttribute("target", "_top"), P.appendChild(Y), Y.appendChild(E), Y.appendChild(S);
            });
        }
    }
    m$1(N, "drawRects");
    function R(g, v, x, b, y, w, c, u) {
        if (c.length === 0 && u.length === 0) return;
        let h, d;
        for (let { startTime: E, endTime: S } of w)(h === void 0 || E < h) && (h = E), (d === void 0 || S > d) && (d = S);
        if (!h || !d) return;
        if ((0, Dt.default)(d).diff(/*#__PURE__*/ (0, Dt.default)(h), "year") > 5) {
            tt$1.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");
            return;
        }
        let T = /*#__PURE__*/ a.db.getDateFormat(), r = [], l = null, i = /*#__PURE__*/ (0, Dt.default)(h);
        for(; i.valueOf() <= d;)a.db.isInvalidDate(i, T, c, u) ? l ? l.end = i : l = {
            start: i,
            end: i
        } : l && (r.push(l), l = null), i = /*#__PURE__*/ i.add(1, "d");
        p.append("g").selectAll("rect").data(r).enter().append("rect").attr("id", function(E) {
            return "exclude-" + E.start.format("YYYY-MM-DD");
        }).attr("x", function(E) {
            return m(E.start) + x;
        }).attr("y", n.gridLineStartPadding).attr("width", function(E) {
            let S = /*#__PURE__*/ E.end.add(1, "day");
            return m(S) - m(E.start);
        }).attr("height", y - v - n.gridLineStartPadding).attr("transform-origin", function(E, S) {
            return (m(E.start) + x + .5 * (m(E.end) - m(E.start))).toString() + "px " + (S * g + .5 * y).toString() + "px";
        }).attr("class", "exclude-range");
    }
    m$1(R, "drawExcludeDays");
    function $(g, v, x, b) {
        let y = /*#__PURE__*/ Cd(m).tickSize(-b + v + n.gridLineStartPadding).tickFormat(/*#__PURE__*/ xo(a.db.getAxisFormat() || n.axisFormat || "%Y-%m-%d")), c = /*#__PURE__*/ /^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(a.db.getTickInterval() || n.tickInterval);
        if (c !== null) {
            let u = c[1], h = c[2], d = a.db.getWeekday() || n.weekday;
            switch(h){
                case "millisecond":
                    y.ticks(/*#__PURE__*/ We$1.every(u));
                    break;
                case "second":
                    y.ticks(/*#__PURE__*/ ee.every(u));
                    break;
                case "minute":
                    y.ticks(/*#__PURE__*/ mr.every(u));
                    break;
                case "hour":
                    y.ticks(/*#__PURE__*/ gr.every(u));
                    break;
                case "day":
                    y.ticks(/*#__PURE__*/ ue.every(u));
                    break;
                case "week":
                    y.ticks(/*#__PURE__*/ qe[d].every(u));
                    break;
                case "month":
                    y.ticks(/*#__PURE__*/ Cr.every(u));
                    break;
            }
        }
        if (p.append("g").attr("class", "grid").attr("transform", "translate(" + g + ", " + (b - 50) + ")").call(y).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10).attr("dy", "1em"), a.db.topAxisEnabled() || n.topAxis) {
            let u = /*#__PURE__*/ yd(m).tickSize(-b + v + n.gridLineStartPadding).tickFormat(/*#__PURE__*/ xo(a.db.getAxisFormat() || n.axisFormat || "%Y-%m-%d"));
            if (c !== null) {
                let h = c[1], d = c[2], T = a.db.getWeekday() || n.weekday;
                switch(d){
                    case "millisecond":
                        u.ticks(/*#__PURE__*/ We$1.every(h));
                        break;
                    case "second":
                        u.ticks(/*#__PURE__*/ ee.every(h));
                        break;
                    case "minute":
                        u.ticks(/*#__PURE__*/ mr.every(h));
                        break;
                    case "hour":
                        u.ticks(/*#__PURE__*/ gr.every(h));
                        break;
                    case "day":
                        u.ticks(/*#__PURE__*/ ue.every(h));
                        break;
                    case "week":
                        u.ticks(/*#__PURE__*/ qe[T].every(h));
                        break;
                    case "month":
                        u.ticks(/*#__PURE__*/ Cr.every(h));
                        break;
                }
            }
            p.append("g").attr("class", "grid").attr("transform", "translate(" + g + ", " + v + ")").call(u).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10);
        }
    }
    m$1($, "makeGrid");
    function U(g, v) {
        let x = 0, b = /*#__PURE__*/ Object.keys(G).map((y)=>[
                y,
                G[y]
            ]);
        p.append("g").selectAll("text").data(b).enter().append(function(y) {
            let w = /*#__PURE__*/ y[0].split(XC.lineBreakRegex), c = -(w.length - 1) / 2, u = /*#__PURE__*/ _.createElementNS("http://www.w3.org/2000/svg", "text");
            u.setAttribute("dy", c + "em");
            for (let [h, d] of w.entries()){
                let T = /*#__PURE__*/ _.createElementNS("http://www.w3.org/2000/svg", "tspan");
                T.setAttribute("alignment-baseline", "central"), T.setAttribute("x", "10"), h > 0 && T.setAttribute("dy", "1em"), T.textContent = d, u.appendChild(T);
            }
            return u;
        }).attr("x", 10).attr("y", function(y, w) {
            if (w > 0) for(let c = 0; c < w; c++)return x += b[w - 1][1], y[1] * g / 2 + x * g + v;
            else return y[1] * g / 2 + v;
        }).attr("font-size", n.sectionFontSize).attr("class", function(y) {
            for (let [w, c] of W.entries())if (y[0] === c) return "sectionTitle sectionTitle" + w % n.numberSectionStyles;
            return "sectionTitle";
        });
    }
    m$1(U, "vertLabels");
    function B(g, v, x, b) {
        let y = /*#__PURE__*/ a.db.getTodayMarker();
        if (y === "off") return;
        let w = /*#__PURE__*/ p.append("g").attr("class", "today"), c = new Date, u = /*#__PURE__*/ w.append("line");
        u.attr("x1", m(c) + g).attr("x2", m(c) + g).attr("y1", n.titleTopMargin).attr("y2", b - n.titleTopMargin).attr("class", "today"), y !== "" && u.attr("style", /*#__PURE__*/ y.replace(/,/g, ";"));
    }
    m$1(B, "drawToday");
    function j(g) {
        let v = {}, x = [];
        for(let b = 0, y = g.length; b < y; ++b)Object.prototype.hasOwnProperty.call(v, g[b]) || (v[g[b]] = true, x.push(g[b]));
        return x;
    }
    m$1(j, "checkUnique");
}, "draw"), Ue = {
    setConf: Yn,
    draw: Wn
};
var Vn = /*#__PURE__*/ m$1((t)=>`
  .mermaid-main-font {
        font-family: ${t.fontFamily};
  }

  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${t.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${t.fontFamily};
    fill: ${t.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .vert {
    stroke: ${t.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${t.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.titleColor || t.textColor};
    font-family: ${t.fontFamily};
  }
`, "getStyles"), Ze = Vn;
var or = {
    parser: Se,
    db: He,
    renderer: Ue,
    styles: Ze
};
export { or as diagram };
