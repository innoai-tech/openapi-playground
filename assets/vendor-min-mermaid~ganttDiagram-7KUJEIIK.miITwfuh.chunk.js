import { I as Ie } from "./vendor-min-mermaid~chunk-UENA7NWE.BvTIpTYh.chunk.js";
import { f } from "./vendor-min-mermaid~chunk-TI4EEUUG._cpilAVR.chunk.js";
import { v as vf, S as Sf, B as Bf, w as wf, k as kf, T as Tf, W as Wl, r as rh, Z as dc, _ as Ul, $ as Hl, C as Cf, a0 as Os, a1 as ip, t as tt, a2 as Vf, a3 as uo, a4 as xr, a5 as fe$1, a6 as Wh, a7 as $h, a8 as we$1, a9 as Ph, aa as zh, ab as dr, ac as ue, ad as pr, ae as mr, af as te, ag as Pe, ah as Gf, m as mC, b as bf, ai as Ya } from "./vendor-min-mermaid~chunk-OR2G2HG5.CGE7obu6.chunk.js";
import { m as m$1, q as q$1, n } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js";
var Et = /* @__PURE__ */ n((Oe, Pe2) => {
  (function(e, t) {
    typeof Oe == "object" && typeof Pe2 < "u" ? Pe2.exports = /* @__PURE__ */ t() : typeof define == "function" && define.amd ? define(t) : (e = typeof globalThis < "u" ? globalThis : e || self).dayjs_plugin_isoWeek = /* @__PURE__ */ t();
  })(Oe, function() {
    var e = "day";
    return function(t, s, a) {
      var r = /* @__PURE__ */ m$1(function(D) {
        return D.add(4 - D.isoWeekday(), e);
      }, "a"), f2 = s.prototype;
      f2.isoWeekYear = function() {
        return r(this).year();
      }, f2.isoWeek = function(D) {
        if (!this.$utils().u(D)) return this.add(7 * (D - this.isoWeek()), e);
        var _, L, S, F, G = /* @__PURE__ */ r(this), z = (_ = /* @__PURE__ */ this.isoWeekYear(), L = this.$u, S = /* @__PURE__ */ (L ? a.utc : a)().year(_).startOf("year"), F = 4 - S.isoWeekday(), S.isoWeekday() > 4 && (F += 7), S.add(F, e));
        return G.diff(z, "week") + 1;
      }, f2.isoWeekday = function(D) {
        return this.$utils().u(D) ? this.day() || 7 : this.day(this.day() % 7 ? D : D - 7);
      };
      var m = f2.startOf;
      f2.startOf = function(D, _) {
        var L = /* @__PURE__ */ this.$utils(), S = !!L.u(_) || _;
        return L.p(D) === "isoweek" ? S ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : m.bind(this)(D, _);
      };
    };
  });
});
var Mt = /* @__PURE__ */ n((ze, Ne) => {
  (function(e, t) {
    typeof ze == "object" && typeof Ne < "u" ? Ne.exports = /* @__PURE__ */ t() : typeof define == "function" && define.amd ? define(t) : (e = typeof globalThis < "u" ? globalThis : e || self).dayjs_plugin_customParseFormat = /* @__PURE__ */ t();
  })(ze, function() {
    var e = {
      LTS: "h:mm:ss A",
      LT: "h:mm A",
      L: "MM/DD/YYYY",
      LL: "MMMM D, YYYY",
      LLL: "MMMM D, YYYY h:mm A",
      LLLL: "dddd, MMMM D, YYYY h:mm A"
    }, t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d/, a = /\d\d/, r = /\d\d?/, f2 = /\d*[^-_:/,()\s\d]+/, m = {}, D = /* @__PURE__ */ m$1(function(p) {
      return (p = +p) + (p > 68 ? 1900 : 2e3);
    }, "a"), _ = /* @__PURE__ */ m$1(function(p) {
      return function(k) {
        this[p] = +k;
      };
    }, "f"), L = [
      /[+-]\d\d:?(\d\d)?|Z/,
      function(p) {
        (this.zone || (this.zone = {})).offset = /* @__PURE__ */ function(k) {
          if (!k || k === "Z") return 0;
          var A = /* @__PURE__ */ k.match(/([+-]|\d\d)/g), I = 60 * A[1] + (+A[2] || 0);
          return I === 0 ? 0 : A[0] === "+" ? -I : I;
        }(p);
      }
    ], S = /* @__PURE__ */ m$1(function(p) {
      var k = m[p];
      return k && (k.indexOf ? k : k.s.concat(k.f));
    }, "u"), F = /* @__PURE__ */ m$1(function(p, k) {
      var A, I = m.meridiem;
      if (I) {
        for (var N = 1; N <= 24; N += 1) if (p.indexOf(/* @__PURE__ */ I(N, 0, k)) > -1) {
          A = N > 12;
          break;
        }
      } else A = p === (k ? "pm" : "PM");
      return A;
    }, "d"), G = {
      A: [
        f2,
        function(p) {
          this.afternoon = /* @__PURE__ */ F(p, false);
        }
      ],
      a: [
        f2,
        function(p) {
          this.afternoon = /* @__PURE__ */ F(p, true);
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
        r,
        /* @__PURE__ */ _("seconds")
      ],
      ss: [
        r,
        /* @__PURE__ */ _("seconds")
      ],
      m: [
        r,
        /* @__PURE__ */ _("minutes")
      ],
      mm: [
        r,
        /* @__PURE__ */ _("minutes")
      ],
      H: [
        r,
        /* @__PURE__ */ _("hours")
      ],
      h: [
        r,
        /* @__PURE__ */ _("hours")
      ],
      HH: [
        r,
        /* @__PURE__ */ _("hours")
      ],
      hh: [
        r,
        /* @__PURE__ */ _("hours")
      ],
      D: [
        r,
        /* @__PURE__ */ _("day")
      ],
      DD: [
        a,
        /* @__PURE__ */ _("day")
      ],
      Do: [
        f2,
        function(p) {
          var k = m.ordinal, A = /* @__PURE__ */ p.match(/\d+/);
          if (this.day = A[0], k) for (var I = 1; I <= 31; I += 1) k(I).replace(/\[|\]/g, "") === p && (this.day = I);
        }
      ],
      w: [
        r,
        /* @__PURE__ */ _("week")
      ],
      ww: [
        a,
        /* @__PURE__ */ _("week")
      ],
      M: [
        r,
        /* @__PURE__ */ _("month")
      ],
      MM: [
        a,
        /* @__PURE__ */ _("month")
      ],
      MMM: [
        f2,
        function(p) {
          var k = /* @__PURE__ */ S("months"), A = (S("monthsShort") || k.map(function(I) {
            return I.slice(0, 3);
          })).indexOf(p) + 1;
          if (A < 1) throw new Error();
          this.month = A % 12 || A;
        }
      ],
      MMMM: [
        f2,
        function(p) {
          var k = S("months").indexOf(p) + 1;
          if (k < 1) throw new Error();
          this.month = k % 12 || k;
        }
      ],
      Y: [
        /[+-]?\d+/,
        /* @__PURE__ */ _("year")
      ],
      YY: [
        a,
        function(p) {
          this.year = /* @__PURE__ */ D(p);
        }
      ],
      YYYY: [
        /\d{4}/,
        /* @__PURE__ */ _("year")
      ],
      Z: L,
      ZZ: L
    };
    function z(p) {
      var k, A;
      k = p, A = m && m.formats;
      for (var I = /* @__PURE__ */ (p = /* @__PURE__ */ k.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(g, v, b) {
        var x = b && b.toUpperCase();
        return v || A[b] || e[b] || A[x].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(y, w, c) {
          return w || c.slice(1);
        });
      })).match(t), N = I.length, R = 0; R < N; R += 1) {
        var K = I[R], U = G[K], B = U && U[0], j = U && U[1];
        I[R] = j ? {
          regex: B,
          parser: j
        } : K.replace(/^\[|\]$/g, "");
      }
      return function(g) {
        for (var v = {}, b = 0, x = 0; b < N; b += 1) {
          var y = I[b];
          if (typeof y == "string") x += y.length;
          else {
            var w = y.regex, c = y.parser, l = /* @__PURE__ */ g.slice(x), h = w.exec(l)[0];
            c.call(v, h), g = /* @__PURE__ */ g.replace(h, "");
          }
        }
        return function(d) {
          var T = d.afternoon;
          if (T !== void 0) {
            var n2 = d.hours;
            T ? n2 < 12 && (d.hours += 12) : n2 === 12 && (d.hours = 0), delete d.afternoon;
          }
        }(v), v;
      };
    }
    return m$1(z, "l"), function(p, k, A) {
      A.p.customParseFormat = true, p && p.parseTwoDigitYear && (D = p.parseTwoDigitYear);
      var I = k.prototype, N = I.parse;
      I.parse = function(R) {
        var K = R.date, U = R.utc, B = R.args;
        this.$u = U;
        var j = B[1];
        if (typeof j == "string") {
          var g = B[2] === true, v = B[3] === true, b = g || v, x = B[2];
          v && (x = B[2]), m = /* @__PURE__ */ this.$locale(), !g && x && (m = A.Ls[x]), this.$d = /* @__PURE__ */ function(l, h, d, T) {
            try {
              if ([
                "x",
                "X"
              ].indexOf(h) > -1) return new Date((h === "X" ? 1e3 : 1) * l);
              var n2 = /* @__PURE__ */ z(h)(l), u = n2.year, i = n2.month, M = n2.day, C = n2.hours, E = n2.minutes, P = n2.seconds, Y = n2.milliseconds, ae = n2.zone, W = n2.week, Z = /* @__PURE__ */ new Date(), ne = M || (u || i ? 1 : Z.getDate()), ie = u || Z.getFullYear(), oe = 0;
              u && !i || (oe = i > 0 ? i - 1 : Z.getMonth());
              var he, me = C || 0, V = E || 0, re = P || 0, Q = Y || 0;
              return ae ? new Date(Date.UTC(ie, oe, ne, me, V, re, Q + 60 * ae.offset * 1e3)) : d ? new Date(Date.UTC(ie, oe, ne, me, V, re, Q)) : (he = new Date(ie, oe, ne, me, V, re, Q), W && (he = /* @__PURE__ */ T(he).week(W).toDate()), he);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(K, j, U, A), this.init(), x && x !== true && (this.$L = this.locale(x).$L), b && K != this.format(j) && (this.$d = /* @__PURE__ */ new Date("")), m = {};
        } else if (j instanceof Array) for (var y = j.length, w = 1; w <= y; w += 1) {
          B[1] = j[w - 1];
          var c = /* @__PURE__ */ A.apply(this, B);
          if (c.isValid()) {
            this.$d = c.$d, this.$L = c.$L, this.init();
            break;
          }
          w === y && (this.$d = /* @__PURE__ */ new Date(""));
        }
        else N.call(this, R);
      };
    };
  });
});
var At = /* @__PURE__ */ n((Re, Be) => {
  (function(e, t) {
    typeof Re == "object" && typeof Be < "u" ? Be.exports = /* @__PURE__ */ t() : typeof define == "function" && define.amd ? define(t) : (e = typeof globalThis < "u" ? globalThis : e || self).dayjs_plugin_advancedFormat = /* @__PURE__ */ t();
  })(Re, function() {
    return function(e, t) {
      var s = t.prototype, a = s.format;
      s.format = function(r) {
        var f2 = this, m = /* @__PURE__ */ this.$locale();
        if (!this.isValid()) return a.bind(this)(r);
        var D = /* @__PURE__ */ this.$utils(), _ = /* @__PURE__ */ (r || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(L) {
          switch (L) {
            case "Q":
              return Math.ceil((f2.$M + 1) / 3);
            case "Do":
              return m.ordinal(f2.$D);
            case "gggg":
              return f2.weekYear();
            case "GGGG":
              return f2.isoWeekYear();
            case "wo":
              return m.ordinal(/* @__PURE__ */ f2.week(), "W");
            case "w":
            case "ww":
              return D.s(/* @__PURE__ */ f2.week(), L === "w" ? 1 : 2, "0");
            case "W":
            case "WW":
              return D.s(/* @__PURE__ */ f2.isoWeek(), L === "W" ? 1 : 2, "0");
            case "k":
            case "kk":
              return D.s(/* @__PURE__ */ String(f2.$H === 0 ? 24 : f2.$H), L === "k" ? 1 : 2, "0");
            case "X":
              return Math.floor(f2.$d.getTime() / 1e3);
            case "x":
              return f2.$d.getTime();
            case "z":
              return "[" + f2.offsetName() + "]";
            case "zzz":
              return "[" + f2.offsetName("long") + "]";
            default:
              return L;
          }
        });
        return a.bind(this)(_);
      };
    };
  });
});
var Ve = /* @__PURE__ */ function() {
  var e = /* @__PURE__ */ m$1(function(w, c, l, h) {
    for (l = l || {}, h = w.length; h--; l[w[h]] = c) ;
    return l;
  }, "o"), t = [
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
  ], r = [
    1,
    28
  ], f2 = [
    1,
    29
  ], m = [
    1,
    30
  ], D = [
    1,
    31
  ], _ = [
    1,
    32
  ], L = [
    1,
    33
  ], S = [
    1,
    34
  ], F = [
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
  ], k = [
    1,
    13
  ], A = [
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
  ], K = [
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
  ], b = {
    trace: /* @__PURE__ */ m$1(function() {
    }, "trace"),
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
    performAction: /* @__PURE__ */ m$1(function(c, l, h, d, T, n2, u) {
      var i = n2.length - 1;
      switch (T) {
        case 1:
          return n2[i - 1];
        case 2:
          this.$ = [];
          break;
        case 3:
          n2[i - 1].push(n2[i]), this.$ = n2[i - 1];
          break;
        case 4:
        case 5:
          this.$ = n2[i];
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
          d.setDateFormat(/* @__PURE__ */ n2[i].substr(11)), this.$ = /* @__PURE__ */ n2[i].substr(11);
          break;
        case 18:
          d.enableInclusiveEndDates(), this.$ = /* @__PURE__ */ n2[i].substr(18);
          break;
        case 19:
          d.TopAxis(), this.$ = /* @__PURE__ */ n2[i].substr(8);
          break;
        case 20:
          d.setAxisFormat(/* @__PURE__ */ n2[i].substr(11)), this.$ = /* @__PURE__ */ n2[i].substr(11);
          break;
        case 21:
          d.setTickInterval(/* @__PURE__ */ n2[i].substr(13)), this.$ = /* @__PURE__ */ n2[i].substr(13);
          break;
        case 22:
          d.setExcludes(/* @__PURE__ */ n2[i].substr(9)), this.$ = /* @__PURE__ */ n2[i].substr(9);
          break;
        case 23:
          d.setIncludes(/* @__PURE__ */ n2[i].substr(9)), this.$ = /* @__PURE__ */ n2[i].substr(9);
          break;
        case 24:
          d.setTodayMarker(/* @__PURE__ */ n2[i].substr(12)), this.$ = /* @__PURE__ */ n2[i].substr(12);
          break;
        case 27:
          d.setDiagramTitle(/* @__PURE__ */ n2[i].substr(6)), this.$ = /* @__PURE__ */ n2[i].substr(6);
          break;
        case 28:
          this.$ = /* @__PURE__ */ n2[i].trim(), d.setAccTitle(this.$);
          break;
        case 29:
        case 30:
          this.$ = /* @__PURE__ */ n2[i].trim(), d.setAccDescription(this.$);
          break;
        case 31:
          d.addSection(/* @__PURE__ */ n2[i].substr(8)), this.$ = /* @__PURE__ */ n2[i].substr(8);
          break;
        case 33:
          d.addTask(n2[i - 1], n2[i]), this.$ = "task";
          break;
        case 34:
          this.$ = n2[i - 1], d.setClickEvent(n2[i - 1], n2[i], null);
          break;
        case 35:
          this.$ = n2[i - 2], d.setClickEvent(n2[i - 2], n2[i - 1], n2[i]);
          break;
        case 36:
          this.$ = n2[i - 2], d.setClickEvent(n2[i - 2], n2[i - 1], null), d.setLink(n2[i - 2], n2[i]);
          break;
        case 37:
          this.$ = n2[i - 3], d.setClickEvent(n2[i - 3], n2[i - 2], n2[i - 1]), d.setLink(n2[i - 3], n2[i]);
          break;
        case 38:
          this.$ = n2[i - 2], d.setClickEvent(n2[i - 2], n2[i], null), d.setLink(n2[i - 2], n2[i - 1]);
          break;
        case 39:
          this.$ = n2[i - 3], d.setClickEvent(n2[i - 3], n2[i - 1], n2[i]), d.setLink(n2[i - 3], n2[i - 2]);
          break;
        case 40:
          this.$ = n2[i - 1], d.setLink(n2[i - 1], n2[i]);
          break;
        case 41:
        case 47:
          this.$ = n2[i - 1] + " " + n2[i];
          break;
        case 42:
        case 43:
        case 45:
          this.$ = n2[i - 2] + " " + n2[i - 1] + " " + n2[i];
          break;
        case 44:
        case 46:
          this.$ = n2[i - 3] + " " + n2[i - 2] + " " + n2[i - 1] + " " + n2[i];
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
      /* @__PURE__ */ e(t, [
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
        14: r,
        15: f2,
        16: m,
        17: D,
        18: _,
        19: 18,
        20: L,
        21: S,
        22: F,
        23: G,
        24: z,
        25: p,
        26: k,
        27: A,
        28: I,
        29: N,
        30: R,
        31: K,
        33: U,
        35: B,
        36: j,
        37: 24,
        38: g,
        40: v
      },
      /* @__PURE__ */ e(t, [
        2,
        7
      ], {
        1: [
          2,
          1
        ]
      }),
      /* @__PURE__ */ e(t, [
        2,
        3
      ]),
      {
        9: 36,
        11: 17,
        12: s,
        13: a,
        14: r,
        15: f2,
        16: m,
        17: D,
        18: _,
        19: 18,
        20: L,
        21: S,
        22: F,
        23: G,
        24: z,
        25: p,
        26: k,
        27: A,
        28: I,
        29: N,
        30: R,
        31: K,
        33: U,
        35: B,
        36: j,
        37: 24,
        38: g,
        40: v
      },
      /* @__PURE__ */ e(t, [
        2,
        5
      ]),
      /* @__PURE__ */ e(t, [
        2,
        6
      ]),
      /* @__PURE__ */ e(t, [
        2,
        17
      ]),
      /* @__PURE__ */ e(t, [
        2,
        18
      ]),
      /* @__PURE__ */ e(t, [
        2,
        19
      ]),
      /* @__PURE__ */ e(t, [
        2,
        20
      ]),
      /* @__PURE__ */ e(t, [
        2,
        21
      ]),
      /* @__PURE__ */ e(t, [
        2,
        22
      ]),
      /* @__PURE__ */ e(t, [
        2,
        23
      ]),
      /* @__PURE__ */ e(t, [
        2,
        24
      ]),
      /* @__PURE__ */ e(t, [
        2,
        25
      ]),
      /* @__PURE__ */ e(t, [
        2,
        26
      ]),
      /* @__PURE__ */ e(t, [
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
      /* @__PURE__ */ e(t, [
        2,
        30
      ]),
      /* @__PURE__ */ e(t, [
        2,
        31
      ]),
      /* @__PURE__ */ e(t, [
        2,
        32
      ]),
      {
        39: [
          1,
          39
        ]
      },
      /* @__PURE__ */ e(t, [
        2,
        8
      ]),
      /* @__PURE__ */ e(t, [
        2,
        9
      ]),
      /* @__PURE__ */ e(t, [
        2,
        10
      ]),
      /* @__PURE__ */ e(t, [
        2,
        11
      ]),
      /* @__PURE__ */ e(t, [
        2,
        12
      ]),
      /* @__PURE__ */ e(t, [
        2,
        13
      ]),
      /* @__PURE__ */ e(t, [
        2,
        14
      ]),
      /* @__PURE__ */ e(t, [
        2,
        15
      ]),
      /* @__PURE__ */ e(t, [
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
      /* @__PURE__ */ e(t, [
        2,
        4
      ]),
      /* @__PURE__ */ e(t, [
        2,
        28
      ]),
      /* @__PURE__ */ e(t, [
        2,
        29
      ]),
      /* @__PURE__ */ e(t, [
        2,
        33
      ]),
      /* @__PURE__ */ e(t, [
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
      /* @__PURE__ */ e(t, [
        2,
        40
      ], {
        41: [
          1,
          44
        ]
      }),
      /* @__PURE__ */ e(t, [
        2,
        35
      ], {
        43: [
          1,
          45
        ]
      }),
      /* @__PURE__ */ e(t, [
        2,
        36
      ]),
      /* @__PURE__ */ e(t, [
        2,
        38
      ], {
        42: [
          1,
          46
        ]
      }),
      /* @__PURE__ */ e(t, [
        2,
        37
      ]),
      /* @__PURE__ */ e(t, [
        2,
        39
      ])
    ],
    defaultActions: {},
    parseError: /* @__PURE__ */ m$1(function(c, l) {
      if (l.recoverable) this.trace(c);
      else {
        var h = new Error(c);
        throw h.hash = l, h;
      }
    }, "parseError"),
    parse: /* @__PURE__ */ m$1(function(c) {
      var l = this, h = [
        0
      ], d = [], T = [
        null
      ], n2 = [], u = this.table, i = "", M = 0, C = 0, E = 0, P = 2, Y = 1, ae = /* @__PURE__ */ n2.slice.call(arguments, 1), W = /* @__PURE__ */ Object.create(this.lexer), Z = {
        yy: {}
      };
      for (var ne in this.yy) Object.prototype.hasOwnProperty.call(this.yy, ne) && (Z.yy[ne] = this.yy[ne]);
      W.setInput(c, Z.yy), Z.yy.lexer = W, Z.yy.parser = this, typeof W.yylloc > "u" && (W.yylloc = {});
      var ie = W.yylloc;
      n2.push(ie);
      var oe = W.options && W.options.ranges;
      typeof Z.yy.parseError == "function" ? this.parseError = Z.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function he(X) {
        h.length = h.length - 2 * X, T.length = T.length - X, n2.length = n2.length - X;
      }
      m$1(he, "popStack");
      function me() {
        var X;
        return X = d.pop() || W.lex() || Y, typeof X != "number" && (X instanceof Array && (d = X, X = /* @__PURE__ */ d.pop()), X = l.symbols_[X] || X), X;
      }
      m$1(me, "lex");
      for (var V, re, Q, H, On, Ce, ce = {}, be, $, tt2, xe; ; ) {
        if (Q = h[h.length - 1], this.defaultActions[Q] ? H = this.defaultActions[Q] : ((V === null || typeof V > "u") && (V = /* @__PURE__ */ me()), H = u[Q] && u[Q][V]), typeof H > "u" || !H.length || !H[0]) {
          var Se = "";
          xe = [];
          for (be in u[Q]) this.terminals_[be] && be > P && xe.push("'" + this.terminals_[be] + "'");
          W.showPosition ? Se = "Parse error on line " + (M + 1) + `:
` + W.showPosition() + `
Expecting ` + xe.join(", ") + ", got '" + (this.terminals_[V] || V) + "'" : Se = "Parse error on line " + (M + 1) + ": Unexpected " + (V == Y ? "end of input" : "'" + (this.terminals_[V] || V) + "'"), this.parseError(Se, {
            text: W.match,
            token: this.terminals_[V] || V,
            line: W.yylineno,
            loc: ie,
            expected: xe
          });
        }
        if (H[0] instanceof Array && H.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + Q + ", token: " + V);
        switch (H[0]) {
          case 1:
            h.push(V), T.push(W.yytext), n2.push(W.yylloc), h.push(H[1]), V = null, re ? (V = re, re = null) : (C = W.yyleng, i = W.yytext, M = W.yylineno, ie = W.yylloc, E > 0);
            break;
          case 2:
            if ($ = this.productions_[H[1]][1], ce.$ = T[T.length - $], ce._$ = {
              first_line: n2[n2.length - ($ || 1)].first_line,
              last_line: n2[n2.length - 1].last_line,
              first_column: n2[n2.length - ($ || 1)].first_column,
              last_column: n2[n2.length - 1].last_column
            }, oe && (ce._$.range = [
              n2[n2.length - ($ || 1)].range[0],
              n2[n2.length - 1].range[1]
            ]), Ce = /* @__PURE__ */ this.performAction.apply(ce, /* @__PURE__ */ [
              i,
              C,
              M,
              Z.yy,
              H[1],
              T,
              n2
            ].concat(ae)), typeof Ce < "u") return Ce;
            $ && (h = /* @__PURE__ */ h.slice(0, -1 * $ * 2), T = /* @__PURE__ */ T.slice(0, -1 * $), n2 = /* @__PURE__ */ n2.slice(0, -1 * $)), h.push(this.productions_[H[1]][0]), T.push(ce.$), n2.push(ce._$), tt2 = u[h[h.length - 2]][h[h.length - 1]], h.push(tt2);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }, "parse")
  }, x = /* @__PURE__ */ function() {
    var w = {
      EOF: 1,
      parseError: /* @__PURE__ */ m$1(function(l, h) {
        if (this.yy.parser) this.yy.parser.parseError(l, h);
        else throw new Error(l);
      }, "parseError"),
      setInput: /* @__PURE__ */ m$1(function(c, l) {
        return this.yy = l || this.yy || {}, this._input = c, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = [
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
        var c = this._input[0];
        this.yytext += c, this.yyleng++, this.offset++, this.match += c, this.matched += c;
        var l = /* @__PURE__ */ c.match(/(?:\r\n?|\n).*/g);
        return l ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = /* @__PURE__ */ this._input.slice(1), c;
      }, "input"),
      unput: /* @__PURE__ */ m$1(function(c) {
        var l = c.length, h = /* @__PURE__ */ c.split(/(?:\r\n?|\n)/g);
        this._input = c + this._input, this.yytext = /* @__PURE__ */ this.yytext.substr(0, this.yytext.length - l), this.offset -= l;
        var d = /* @__PURE__ */ this.match.split(/(?:\r\n?|\n)/g);
        this.match = /* @__PURE__ */ this.match.substr(0, this.match.length - 1), this.matched = /* @__PURE__ */ this.matched.substr(0, this.matched.length - 1), h.length - 1 && (this.yylineno -= h.length - 1);
        var T = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: h ? (h.length === d.length ? this.yylloc.first_column : 0) + d[d.length - h.length].length - h[0].length : this.yylloc.first_column - l
        }, this.options.ranges && (this.yylloc.range = [
          T[0],
          T[0] + this.yyleng - l
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
      less: /* @__PURE__ */ m$1(function(c) {
        this.unput(/* @__PURE__ */ this.match.slice(c));
      }, "less"),
      pastInput: /* @__PURE__ */ m$1(function() {
        var c = /* @__PURE__ */ this.matched.substr(0, this.matched.length - this.match.length);
        return (c.length > 20 ? "..." : "") + c.substr(-20).replace(/\n/g, "");
      }, "pastInput"),
      upcomingInput: /* @__PURE__ */ m$1(function() {
        var c = this.match;
        return c.length < 20 && (c += /* @__PURE__ */ this._input.substr(0, 20 - c.length)), (c.substr(0, 20) + (c.length > 20 ? "..." : "")).replace(/\n/g, "");
      }, "upcomingInput"),
      showPosition: /* @__PURE__ */ m$1(function() {
        var c = /* @__PURE__ */ this.pastInput(), l = /* @__PURE__ */ new Array(c.length + 1).join("-");
        return c + this.upcomingInput() + `
` + l + "^";
      }, "showPosition"),
      test_match: /* @__PURE__ */ m$1(function(c, l) {
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
          conditionStack: /* @__PURE__ */ this.conditionStack.slice(0),
          done: this.done
        }, this.options.ranges && (T.yylloc.range = /* @__PURE__ */ this.yylloc.range.slice(0))), d = /* @__PURE__ */ c[0].match(/(?:\r\n?|\n).*/g), d && (this.yylineno += d.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: d ? d[d.length - 1].length - d[d.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + c[0].length
        }, this.yytext += c[0], this.match += c[0], this.matches = c, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [
          this.offset,
          this.offset += this.yyleng
        ]), this._more = false, this._backtrack = false, this._input = /* @__PURE__ */ this._input.slice(c[0].length), this.matched += c[0], h = /* @__PURE__ */ this.performAction.call(this, this.yy, this, l, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), h) return h;
        if (this._backtrack) {
          for (var n2 in T) this[n2] = T[n2];
          return false;
        }
        return false;
      }, "test_match"),
      next: /* @__PURE__ */ m$1(function() {
        if (this.done) return this.EOF;
        this._input || (this.done = true);
        var c, l, h, d;
        this._more || (this.yytext = "", this.match = "");
        for (var T = /* @__PURE__ */ this._currentRules(), n2 = 0; n2 < T.length; n2++) if (h = /* @__PURE__ */ this._input.match(this.rules[T[n2]]), h && (!l || h[0].length > l[0].length)) {
          if (l = h, d = n2, this.options.backtrack_lexer) {
            if (c = /* @__PURE__ */ this.test_match(h, T[n2]), c !== false) return c;
            if (this._backtrack) {
              l = false;
              continue;
            } else return false;
          } else if (!this.options.flex) break;
        }
        return l ? (c = /* @__PURE__ */ this.test_match(l, T[d]), c !== false ? c : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      }, "next"),
      lex: /* @__PURE__ */ m$1(function() {
        var l = /* @__PURE__ */ this.next();
        return l || this.lex();
      }, "lex"),
      begin: /* @__PURE__ */ m$1(function(l) {
        this.conditionStack.push(l);
      }, "begin"),
      popState: /* @__PURE__ */ m$1(function() {
        var l = this.conditionStack.length - 1;
        return l > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      }, "popState"),
      _currentRules: /* @__PURE__ */ m$1(function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      }, "_currentRules"),
      topState: /* @__PURE__ */ m$1(function(l) {
        return l = this.conditionStack.length - 1 - Math.abs(l || 0), l >= 0 ? this.conditionStack[l] : "INITIAL";
      }, "topState"),
      pushState: /* @__PURE__ */ m$1(function(l) {
        this.begin(l);
      }, "pushState"),
      stateStackSize: /* @__PURE__ */ m$1(function() {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: {
        "case-insensitive": true
      },
      performAction: /* @__PURE__ */ m$1(function(l, h, d, T) {
        switch (d) {
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
  b.lexer = x;
  function y() {
    this.yy = {};
  }
  return m$1(y, "Parser"), y.prototype = b, b.Parser = y, new y();
}();
Ve.parser = Ve;
var St = Ve;
var Yt = /* @__PURE__ */ q$1(/* @__PURE__ */ f()), q = /* @__PURE__ */ q$1(/* @__PURE__ */ Ya()), Wt = /* @__PURE__ */ q$1(/* @__PURE__ */ Et()), Ft = /* @__PURE__ */ q$1(/* @__PURE__ */ Mt()), Vt = /* @__PURE__ */ q$1(/* @__PURE__ */ At());
q.default.extend(Wt.default);
q.default.extend(Ft.default);
q.default.extend(Vt.default);
var Lt = {
  friday: 5,
  saturday: 6
}, J = "", Xe = "", qe, Ue = "", ye = [], pe = [], Ze = /* @__PURE__ */ new Map(), Qe = [], we = [], fe = "", Ke = "", Ot = [
  "active",
  "done",
  "crit",
  "milestone"
], Je = [], ge = false, $e = false, et = "sunday", _e = "saturday", je = 0, Kt = /* @__PURE__ */ m$1(function() {
  Qe = [], we = [], fe = "", Je = [], Te = 0, He = void 0, ve = void 0, O = [], J = "", Xe = "", Ke = "", qe = void 0, Ue = "", ye = [], pe = [], ge = false, $e = false, je = 0, Ze = /* @__PURE__ */ new Map(), bf(), et = "sunday", _e = "saturday";
}, "clear"), Jt = /* @__PURE__ */ m$1(function(e) {
  Xe = e;
}, "setAxisFormat"), $t = /* @__PURE__ */ m$1(function() {
  return Xe;
}, "getAxisFormat"), en = /* @__PURE__ */ m$1(function(e) {
  qe = e;
}, "setTickInterval"), tn = /* @__PURE__ */ m$1(function() {
  return qe;
}, "getTickInterval"), nn = /* @__PURE__ */ m$1(function(e) {
  Ue = e;
}, "setTodayMarker"), rn = /* @__PURE__ */ m$1(function() {
  return Ue;
}, "getTodayMarker"), sn = /* @__PURE__ */ m$1(function(e) {
  J = e;
}, "setDateFormat"), an = /* @__PURE__ */ m$1(function() {
  ge = true;
}, "enableInclusiveEndDates"), on = /* @__PURE__ */ m$1(function() {
  return ge;
}, "endDatesAreInclusive"), cn = /* @__PURE__ */ m$1(function() {
  $e = true;
}, "enableTopAxis"), ln = /* @__PURE__ */ m$1(function() {
  return $e;
}, "topAxisEnabled"), un = /* @__PURE__ */ m$1(function(e) {
  Ke = e;
}, "setDisplayMode"), dn = /* @__PURE__ */ m$1(function() {
  return Ke;
}, "getDisplayMode"), fn = /* @__PURE__ */ m$1(function() {
  return J;
}, "getDateFormat"), hn = /* @__PURE__ */ m$1(function(e) {
  ye = /* @__PURE__ */ e.toLowerCase().split(/[\s,]+/);
}, "setIncludes"), mn = /* @__PURE__ */ m$1(function() {
  return ye;
}, "getIncludes"), kn = /* @__PURE__ */ m$1(function(e) {
  pe = /* @__PURE__ */ e.toLowerCase().split(/[\s,]+/);
}, "setExcludes"), yn = /* @__PURE__ */ m$1(function() {
  return pe;
}, "getExcludes"), pn = /* @__PURE__ */ m$1(function() {
  return Ze;
}, "getLinks"), gn = /* @__PURE__ */ m$1(function(e) {
  fe = e, Qe.push(e);
}, "addSection"), bn = /* @__PURE__ */ m$1(function() {
  return Qe;
}, "getSections"), xn = /* @__PURE__ */ m$1(function() {
  let e = /* @__PURE__ */ It(), t = 10, s = 0;
  for (; !e && s < t; ) e = /* @__PURE__ */ It(), s++;
  return we = O, we;
}, "getTasks"), Pt = /* @__PURE__ */ m$1(function(e, t, s, a) {
  return a.includes(/* @__PURE__ */ e.format(/* @__PURE__ */ t.trim())) ? false : s.includes("weekends") && (e.isoWeekday() === Lt[_e] || e.isoWeekday() === Lt[_e] + 1) || s.includes(/* @__PURE__ */ e.format("dddd").toLowerCase()) ? true : s.includes(/* @__PURE__ */ e.format(/* @__PURE__ */ t.trim()));
}, "isInvalidDate"), Tn = /* @__PURE__ */ m$1(function(e) {
  et = e;
}, "setWeekday"), vn = /* @__PURE__ */ m$1(function() {
  return et;
}, "getWeekday"), wn = /* @__PURE__ */ m$1(function(e) {
  _e = e;
}, "setWeekend"), zt = /* @__PURE__ */ m$1(function(e, t, s, a) {
  if (!s.length || e.manualEndTime) return;
  let r;
  e.startTime instanceof Date ? r = /* @__PURE__ */ (0, q.default)(e.startTime) : r = /* @__PURE__ */ (0, q.default)(e.startTime, t, true), r = /* @__PURE__ */ r.add(1, "d");
  let f2;
  e.endTime instanceof Date ? f2 = /* @__PURE__ */ (0, q.default)(e.endTime) : f2 = /* @__PURE__ */ (0, q.default)(e.endTime, t, true);
  let [m, D] = _n(r, f2, t, s, a);
  e.endTime = /* @__PURE__ */ m.toDate(), e.renderEndTime = D;
}, "checkTaskDates"), _n = /* @__PURE__ */ m$1(function(e, t, s, a, r) {
  let f2 = false, m = null;
  for (; e <= t; ) f2 || (m = /* @__PURE__ */ t.toDate()), f2 = /* @__PURE__ */ Pt(e, s, a, r), f2 && (t = /* @__PURE__ */ t.add(1, "d")), e = /* @__PURE__ */ e.add(1, "d");
  return [
    t,
    m
  ];
}, "fixTaskDates"), Ge = /* @__PURE__ */ m$1(function(e, t, s) {
  s = /* @__PURE__ */ s.trim();
  let r = /* @__PURE__ */ /^after\s+(?<ids>[\d\w- ]+)/.exec(s);
  if (r !== null) {
    let m = null;
    for (let _ of r.groups.ids.split(" ")) {
      let L = /* @__PURE__ */ se(_);
      L !== void 0 && (!m || L.endTime > m.endTime) && (m = L);
    }
    if (m) return m.endTime;
    let D = /* @__PURE__ */ new Date();
    return D.setHours(0, 0, 0, 0), D;
  }
  let f2 = /* @__PURE__ */ (0, q.default)(s, /* @__PURE__ */ t.trim(), true);
  if (f2.isValid()) return f2.toDate();
  {
    tt.debug("Invalid date:" + s), tt.debug("With date format:" + t.trim());
    let m = new Date(s);
    if (m === void 0 || isNaN(/* @__PURE__ */ m.getTime()) || m.getFullYear() < -1e4 || m.getFullYear() > 1e4) throw new Error("Invalid date:" + s);
    return m;
  }
}, "getStartDate"), Nt = /* @__PURE__ */ m$1(function(e) {
  let t = /* @__PURE__ */ /^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(/* @__PURE__ */ e.trim());
  return t !== null ? [
    /* @__PURE__ */ Number.parseFloat(t[1]),
    t[2]
  ] : [
    NaN,
    "ms"
  ];
}, "parseDuration"), Rt = /* @__PURE__ */ m$1(function(e, t, s) {
  let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  s = /* @__PURE__ */ s.trim();
  let f2 = /* @__PURE__ */ /^until\s+(?<ids>[\d\w- ]+)/.exec(s);
  if (f2 !== null) {
    let S = null;
    for (let G of f2.groups.ids.split(" ")) {
      let z = /* @__PURE__ */ se(G);
      z !== void 0 && (!S || z.startTime < S.startTime) && (S = z);
    }
    if (S) return S.startTime;
    let F = /* @__PURE__ */ new Date();
    return F.setHours(0, 0, 0, 0), F;
  }
  let m = /* @__PURE__ */ (0, q.default)(s, /* @__PURE__ */ t.trim(), true);
  if (m.isValid()) return a && (m = /* @__PURE__ */ m.add(1, "d")), m.toDate();
  let D = /* @__PURE__ */ (0, q.default)(e), [_, L] = Nt(s);
  if (!Number.isNaN(_)) {
    let S = /* @__PURE__ */ D.add(_, L);
    S.isValid() && (D = S);
  }
  return D.toDate();
}, "getEndDate"), Te = 0, de = /* @__PURE__ */ m$1(function(e) {
  return e === void 0 ? (Te = Te + 1, "task" + Te) : e;
}, "parseId"), Dn = /* @__PURE__ */ m$1(function(e, t) {
  let s;
  t.substr(0, 1) === ":" ? s = /* @__PURE__ */ t.substr(1, t.length) : s = t;
  let a = /* @__PURE__ */ s.split(","), r = {};
  Xt(a, r, Ot);
  for (let m = 0; m < a.length; m++) a[m] = /* @__PURE__ */ a[m].trim();
  let f2 = "";
  switch (a.length) {
    case 1:
      r.id = /* @__PURE__ */ de(), r.startTime = e.endTime, f2 = a[0];
      break;
    case 2:
      r.id = /* @__PURE__ */ de(), r.startTime = /* @__PURE__ */ Ge(void 0, J, a[0]), f2 = a[1];
      break;
    case 3:
      r.id = /* @__PURE__ */ de(a[0]), r.startTime = /* @__PURE__ */ Ge(void 0, J, a[1]), f2 = a[2];
      break;
  }
  return f2 && (r.endTime = /* @__PURE__ */ Rt(r.startTime, J, f2, ge), r.manualEndTime = /* @__PURE__ */ (0, q.default)(f2, "YYYY-MM-DD", true).isValid(), zt(r, J, pe, ye)), r;
}, "compileData"), Cn = /* @__PURE__ */ m$1(function(e, t) {
  let s;
  t.substr(0, 1) === ":" ? s = /* @__PURE__ */ t.substr(1, t.length) : s = t;
  let a = /* @__PURE__ */ s.split(","), r = {};
  Xt(a, r, Ot);
  for (let f2 = 0; f2 < a.length; f2++) a[f2] = /* @__PURE__ */ a[f2].trim();
  switch (a.length) {
    case 1:
      r.id = /* @__PURE__ */ de(), r.startTime = {
        type: "prevTaskEnd",
        id: e
      }, r.endTime = {
        data: a[0]
      };
      break;
    case 2:
      r.id = /* @__PURE__ */ de(), r.startTime = {
        type: "getStartDate",
        startData: a[0]
      }, r.endTime = {
        data: a[1]
      };
      break;
    case 3:
      r.id = /* @__PURE__ */ de(a[0]), r.startTime = {
        type: "getStartDate",
        startData: a[1]
      }, r.endTime = {
        data: a[2]
      };
      break;
  }
  return r;
}, "parseData"), He, ve, O = [], Bt = {}, Sn = /* @__PURE__ */ m$1(function(e, t) {
  let s = {
    section: fe,
    type: fe,
    processed: false,
    manualEndTime: false,
    renderEndTime: null,
    raw: {
      data: t
    },
    task: e,
    classes: []
  }, a = /* @__PURE__ */ Cn(ve, t);
  s.raw.startTime = a.startTime, s.raw.endTime = a.endTime, s.id = a.id, s.prevTaskId = ve, s.active = a.active, s.done = a.done, s.crit = a.crit, s.milestone = a.milestone, s.order = je, je++;
  let r = /* @__PURE__ */ O.push(s);
  ve = s.id, Bt[s.id] = r - 1;
}, "addTask"), se = /* @__PURE__ */ m$1(function(e) {
  let t = Bt[e];
  return O[t];
}, "findTaskById"), En = /* @__PURE__ */ m$1(function(e, t) {
  let s = {
    section: fe,
    type: fe,
    description: e,
    task: e,
    classes: []
  }, a = /* @__PURE__ */ Dn(He, t);
  s.startTime = a.startTime, s.endTime = a.endTime, s.id = a.id, s.active = a.active, s.done = a.done, s.crit = a.crit, s.milestone = a.milestone, He = s, we.push(s);
}, "addTaskOrg"), It = /* @__PURE__ */ m$1(function() {
  let e = /* @__PURE__ */ m$1(function(s) {
    let a = O[s], r = "";
    switch (O[s].raw.startTime.type) {
      case "prevTaskEnd": {
        let f2 = /* @__PURE__ */ se(a.prevTaskId);
        a.startTime = f2.endTime;
        break;
      }
      case "getStartDate":
        r = /* @__PURE__ */ Ge(void 0, J, O[s].raw.startTime.startData), r && (O[s].startTime = r);
        break;
    }
    return O[s].startTime && (O[s].endTime = /* @__PURE__ */ Rt(O[s].startTime, J, O[s].raw.endTime.data, ge), O[s].endTime && (O[s].processed = true, O[s].manualEndTime = /* @__PURE__ */ (0, q.default)(O[s].raw.endTime.data, "YYYY-MM-DD", true).isValid(), zt(O[s], J, pe, ye))), O[s].processed;
  }, "compileTask"), t = true;
  for (let [s, a] of O.entries()) e(s), t = t && a.processed;
  return t;
}, "compileTasks"), Mn = /* @__PURE__ */ m$1(function(e, t) {
  let s = t;
  Wl().securityLevel !== "loose" && (s = /* @__PURE__ */ (0, Yt.sanitizeUrl)(t)), e.split(",").forEach(function(a) {
    se(a) !== void 0 && (Gt(a, () => {
      window.open(s, "_self");
    }), Ze.set(a, s));
  }), jt(e, "clickable");
}, "setLink"), jt = /* @__PURE__ */ m$1(function(e, t) {
  e.split(",").forEach(function(s) {
    let a = /* @__PURE__ */ se(s);
    a !== void 0 && a.classes.push(t);
  });
}, "setClass"), An = /* @__PURE__ */ m$1(function(e, t, s) {
  if (Wl().securityLevel !== "loose" || t === void 0) return;
  let a = [];
  if (typeof s == "string") {
    a = /* @__PURE__ */ s.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    for (let f2 = 0; f2 < a.length; f2++) {
      let m = /* @__PURE__ */ a[f2].trim();
      m.startsWith('"') && m.endsWith('"') && (m = /* @__PURE__ */ m.substr(1, m.length - 2)), a[f2] = m;
    }
  }
  a.length === 0 && a.push(e), se(e) !== void 0 && Gt(e, () => {
    Ie.runFunc(t, ...a);
  });
}, "setClickFun"), Gt = /* @__PURE__ */ m$1(function(e, t) {
  Je.push(function() {
    let s = /* @__PURE__ */ document.querySelector(`[id="${e}"]`);
    s !== null && s.addEventListener("click", function() {
      t();
    });
  }, function() {
    let s = /* @__PURE__ */ document.querySelector(`[id="${e}-text"]`);
    s !== null && s.addEventListener("click", function() {
      t();
    });
  });
}, "pushFun"), Ln = /* @__PURE__ */ m$1(function(e, t, s) {
  e.split(",").forEach(function(a) {
    An(a, t, s);
  }), jt(e, "clickable");
}, "setClickEvent"), In = /* @__PURE__ */ m$1(function(e) {
  Je.forEach(function(t) {
    t(e);
  });
}, "bindFunctions"), Ht = {
  getConfig: /* @__PURE__ */ m$1(() => Wl().gantt, "getConfig"),
  clear: Kt,
  setDateFormat: sn,
  getDateFormat: fn,
  enableInclusiveEndDates: an,
  endDatesAreInclusive: on,
  enableTopAxis: cn,
  topAxisEnabled: ln,
  setAxisFormat: Jt,
  getAxisFormat: $t,
  setTickInterval: en,
  getTickInterval: tn,
  setTodayMarker: nn,
  getTodayMarker: rn,
  setAccTitle: Tf,
  getAccTitle: kf,
  setDiagramTitle: wf,
  getDiagramTitle: Bf,
  setDisplayMode: un,
  getDisplayMode: dn,
  setAccDescription: Sf,
  getAccDescription: vf,
  addSection: gn,
  getSections: bn,
  getTasks: xn,
  addTask: Sn,
  findTaskById: se,
  addTaskOrg: En,
  setIncludes: hn,
  getIncludes: mn,
  setExcludes: kn,
  getExcludes: yn,
  setClickEvent: Ln,
  setLink: Mn,
  getLinks: pn,
  bindFunctions: In,
  parseDuration: Nt,
  isInvalidDate: Pt,
  setWeekday: Tn,
  getWeekday: vn,
  setWeekend: wn
};
function Xt(e, t, s) {
  let a = true;
  for (; a; ) a = false, s.forEach(function(r) {
    let f2 = "^\\s*" + r + "\\s*$", m = new RegExp(f2);
    e[0].match(m) && (t[r] = true, e.shift(1), a = true);
  });
}
m$1(Xt, "getTaskTags");
var De = /* @__PURE__ */ q$1(/* @__PURE__ */ Ya());
var Yn = /* @__PURE__ */ m$1(function() {
  tt.debug("Something is calling, setConf, remove the call");
}, "setConf"), qt = {
  monday: dr,
  tuesday: zh,
  wednesday: Ph,
  thursday: we$1,
  friday: $h,
  saturday: Wh,
  sunday: fe$1
}, Wn = /* @__PURE__ */ m$1((e, t) => {
  let s = /* @__PURE__ */ [
    ...e
  ].map(() => -1 / 0), a = /* @__PURE__ */ [
    ...e
  ].sort((f2, m) => f2.startTime - m.startTime || f2.order - m.order), r = 0;
  for (let f2 of a) for (let m = 0; m < s.length; m++) if (f2.startTime >= s[m]) {
    s[m] = f2.endTime, f2.order = m + t, m > r && (r = m);
    break;
  }
  return r;
}, "getMaxIntersections"), ee, Fn = /* @__PURE__ */ m$1(function(e, t, s, a) {
  let r = Wl().gantt, f2 = Wl().securityLevel, m;
  f2 === "sandbox" && (m = /* @__PURE__ */ rh("#i" + t));
  let D = f2 === "sandbox" ? rh(m.nodes()[0].contentDocument.body) : rh("body"), _ = f2 === "sandbox" ? m.nodes()[0].contentDocument : document, L = /* @__PURE__ */ _.getElementById(t);
  ee = L.parentElement.offsetWidth, ee === void 0 && (ee = 1200), r.useWidth !== void 0 && (ee = r.useWidth);
  let S = /* @__PURE__ */ a.db.getTasks(), F = [];
  for (let g of S) F.push(g.type);
  F = /* @__PURE__ */ j(F);
  let G = {}, z = 2 * r.topPadding;
  if (a.db.getDisplayMode() === "compact" || r.displayMode === "compact") {
    let g = {};
    for (let b of S) g[b.section] === void 0 ? g[b.section] = [
      b
    ] : g[b.section].push(b);
    let v = 0;
    for (let b of Object.keys(g)) {
      let x = Wn(g[b], v) + 1;
      v += x, z += x * (r.barHeight + r.barGap), G[b] = x;
    }
  } else {
    z += S.length * (r.barHeight + r.barGap);
    for (let g of F) G[g] = S.filter((v) => v.type === g).length;
  }
  L.setAttribute("viewBox", "0 0 " + ee + " " + z);
  let p = /* @__PURE__ */ D.select(`[id="${t}"]`), k = /* @__PURE__ */ dc().domain([
    /* @__PURE__ */ Ul(S, function(g) {
      return g.startTime;
    }),
    /* @__PURE__ */ Hl(S, function(g) {
      return g.endTime;
    })
  ]).rangeRound([
    0,
    ee - r.leftPadding - r.rightPadding
  ]);
  function A(g, v) {
    let b = g.startTime, x = v.startTime, y = 0;
    return b > x ? y = 1 : b < x && (y = -1), y;
  }
  m$1(A, "taskCompare"), S.sort(A), I(S, ee, z), Cf(p, z, ee, r.useMaxWidth), p.append("text").text(/* @__PURE__ */ a.db.getDiagramTitle()).attr("x", ee / 2).attr("y", r.titleTopMargin).attr("class", "titleText");
  function I(g, v, b) {
    let x = r.barHeight, y = x + r.barGap, w = r.topPadding, c = r.leftPadding, l = /* @__PURE__ */ Os().domain([
      0,
      F.length
    ]).range([
      "#00B9FA",
      "#F95002"
    ]).interpolate(ip);
    R(y, w, c, v, b, g, /* @__PURE__ */ a.db.getExcludes(), /* @__PURE__ */ a.db.getIncludes()), K(c, w, v, b), N(g, y, w, c, x, l, v), U(y, w), B(c, w, v, b);
  }
  m$1(I, "makeGantt");
  function N(g, v, b, x, y, w, c) {
    let h = /* @__PURE__ */ [
      ...new Set(g.map((u) => u.order))
    ].map((u) => g.find((i) => i.order === u));
    p.append("g").selectAll("rect").data(h).enter().append("rect").attr("x", 0).attr("y", function(u, i) {
      return i = u.order, i * v + b - 2;
    }).attr("width", function() {
      return c - r.rightPadding / 2;
    }).attr("height", v).attr("class", function(u) {
      for (let [i, M] of F.entries()) if (u.type === M) return "section section" + i % r.numberSectionStyles;
      return "section section0";
    });
    let d = /* @__PURE__ */ p.append("g").selectAll("rect").data(g).enter(), T = /* @__PURE__ */ a.db.getLinks();
    if (d.append("rect").attr("id", function(u) {
      return u.id;
    }).attr("rx", 3).attr("ry", 3).attr("x", function(u) {
      return u.milestone ? k(u.startTime) + x + 0.5 * (k(u.endTime) - k(u.startTime)) - 0.5 * y : k(u.startTime) + x;
    }).attr("y", function(u, i) {
      return i = u.order, i * v + b;
    }).attr("width", function(u) {
      return u.milestone ? y : k(u.renderEndTime || u.endTime) - k(u.startTime);
    }).attr("height", y).attr("transform-origin", function(u, i) {
      return i = u.order, (k(u.startTime) + x + 0.5 * (k(u.endTime) - k(u.startTime))).toString() + "px " + (i * v + b + 0.5 * y).toString() + "px";
    }).attr("class", function(u) {
      let i = "task", M = "";
      u.classes.length > 0 && (M = /* @__PURE__ */ u.classes.join(" "));
      let C = 0;
      for (let [P, Y] of F.entries()) u.type === Y && (C = P % r.numberSectionStyles);
      let E = "";
      return u.active ? u.crit ? E += " activeCrit" : E = " active" : u.done ? u.crit ? E = " doneCrit" : E = " done" : u.crit && (E += " crit"), E.length === 0 && (E = " task"), u.milestone && (E = " milestone " + E), E += C, E += " " + M, i + E;
    }), d.append("text").attr("id", function(u) {
      return u.id + "-text";
    }).text(function(u) {
      return u.task;
    }).attr("font-size", r.fontSize).attr("x", function(u) {
      let i = /* @__PURE__ */ k(u.startTime), M = /* @__PURE__ */ k(u.renderEndTime || u.endTime);
      u.milestone && (i += 0.5 * (k(u.endTime) - k(u.startTime)) - 0.5 * y), u.milestone && (M = i + y);
      let C = this.getBBox().width;
      return C > M - i ? M + C + 1.5 * r.leftPadding > c ? i + x - 5 : M + x + 5 : (M - i) / 2 + i + x;
    }).attr("y", function(u, i) {
      return i = u.order, i * v + r.barHeight / 2 + (r.fontSize / 2 - 2) + b;
    }).attr("text-height", y).attr("class", function(u) {
      let i = /* @__PURE__ */ k(u.startTime), M = /* @__PURE__ */ k(u.endTime);
      u.milestone && (M = i + y);
      let C = this.getBBox().width, E = "";
      u.classes.length > 0 && (E = /* @__PURE__ */ u.classes.join(" "));
      let P = 0;
      for (let [ae, W] of F.entries()) u.type === W && (P = ae % r.numberSectionStyles);
      let Y = "";
      return u.active && (u.crit ? Y = "activeCritText" + P : Y = "activeText" + P), u.done ? u.crit ? Y = Y + " doneCritText" + P : Y = Y + " doneText" + P : u.crit && (Y = Y + " critText" + P), u.milestone && (Y += " milestoneText"), C > M - i ? M + C + 1.5 * r.leftPadding > c ? E + " taskTextOutsideLeft taskTextOutside" + P + " " + Y : E + " taskTextOutsideRight taskTextOutside" + P + " " + Y + " width-" + C : E + " taskText taskText" + P + " " + Y + " width-" + C;
    }), Wl().securityLevel === "sandbox") {
      let u;
      u = /* @__PURE__ */ rh("#i" + t);
      let i = u.nodes()[0].contentDocument;
      d.filter(function(M) {
        return T.has(M.id);
      }).each(function(M) {
        var C = /* @__PURE__ */ i.querySelector("#" + M.id), E = /* @__PURE__ */ i.querySelector("#" + M.id + "-text");
        let P = C.parentNode;
        var Y = /* @__PURE__ */ i.createElement("a");
        Y.setAttribute("xlink:href", /* @__PURE__ */ T.get(M.id)), Y.setAttribute("target", "_top"), P.appendChild(Y), Y.appendChild(C), Y.appendChild(E);
      });
    }
  }
  m$1(N, "drawRects");
  function R(g, v, b, x, y, w, c, l) {
    if (c.length === 0 && l.length === 0) return;
    let h, d;
    for (let { startTime: C, endTime: E } of w) (h === void 0 || C < h) && (h = C), (d === void 0 || E > d) && (d = E);
    if (!h || !d) return;
    if ((0, De.default)(d).diff(/* @__PURE__ */ (0, De.default)(h), "year") > 5) {
      tt.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");
      return;
    }
    let T = /* @__PURE__ */ a.db.getDateFormat(), n2 = [], u = null, i = /* @__PURE__ */ (0, De.default)(h);
    for (; i.valueOf() <= d; ) a.db.isInvalidDate(i, T, c, l) ? u ? u.end = i : u = {
      start: i,
      end: i
    } : u && (n2.push(u), u = null), i = /* @__PURE__ */ i.add(1, "d");
    p.append("g").selectAll("rect").data(n2).enter().append("rect").attr("id", function(C) {
      return "exclude-" + C.start.format("YYYY-MM-DD");
    }).attr("x", function(C) {
      return k(C.start) + b;
    }).attr("y", r.gridLineStartPadding).attr("width", function(C) {
      let E = /* @__PURE__ */ C.end.add(1, "day");
      return k(E) - k(C.start);
    }).attr("height", y - v - r.gridLineStartPadding).attr("transform-origin", function(C, E) {
      return (k(C.start) + b + 0.5 * (k(C.end) - k(C.start))).toString() + "px " + (E * g + 0.5 * y).toString() + "px";
    }).attr("class", "exclude-range");
  }
  m$1(R, "drawExcludeDays");
  function K(g, v, b, x) {
    let y = /* @__PURE__ */ Vf(k).tickSize(-x + v + r.gridLineStartPadding).tickFormat(/* @__PURE__ */ uo(a.db.getAxisFormat() || r.axisFormat || "%Y-%m-%d")), c = /* @__PURE__ */ /^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(a.db.getTickInterval() || r.tickInterval);
    if (c !== null) {
      let l = c[1], h = c[2], d = a.db.getWeekday() || r.weekday;
      switch (h) {
        case "millisecond":
          y.ticks(/* @__PURE__ */ Pe.every(l));
          break;
        case "second":
          y.ticks(/* @__PURE__ */ te.every(l));
          break;
        case "minute":
          y.ticks(/* @__PURE__ */ mr.every(l));
          break;
        case "hour":
          y.ticks(/* @__PURE__ */ pr.every(l));
          break;
        case "day":
          y.ticks(/* @__PURE__ */ ue.every(l));
          break;
        case "week":
          y.ticks(/* @__PURE__ */ qt[d].every(l));
          break;
        case "month":
          y.ticks(/* @__PURE__ */ xr.every(l));
          break;
      }
    }
    if (p.append("g").attr("class", "grid").attr("transform", "translate(" + g + ", " + (x - 50) + ")").call(y).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10).attr("dy", "1em"), a.db.topAxisEnabled() || r.topAxis) {
      let l = /* @__PURE__ */ Gf(k).tickSize(-x + v + r.gridLineStartPadding).tickFormat(/* @__PURE__ */ uo(a.db.getAxisFormat() || r.axisFormat || "%Y-%m-%d"));
      if (c !== null) {
        let h = c[1], d = c[2], T = a.db.getWeekday() || r.weekday;
        switch (d) {
          case "millisecond":
            l.ticks(/* @__PURE__ */ Pe.every(h));
            break;
          case "second":
            l.ticks(/* @__PURE__ */ te.every(h));
            break;
          case "minute":
            l.ticks(/* @__PURE__ */ mr.every(h));
            break;
          case "hour":
            l.ticks(/* @__PURE__ */ pr.every(h));
            break;
          case "day":
            l.ticks(/* @__PURE__ */ ue.every(h));
            break;
          case "week":
            l.ticks(/* @__PURE__ */ qt[T].every(h));
            break;
          case "month":
            l.ticks(/* @__PURE__ */ xr.every(h));
            break;
        }
      }
      p.append("g").attr("class", "grid").attr("transform", "translate(" + g + ", " + v + ")").call(l).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10);
    }
  }
  m$1(K, "makeGrid");
  function U(g, v) {
    let b = 0, x = /* @__PURE__ */ Object.keys(G).map((y) => [
      y,
      G[y]
    ]);
    p.append("g").selectAll("text").data(x).enter().append(function(y) {
      let w = /* @__PURE__ */ y[0].split(mC.lineBreakRegex), c = -(w.length - 1) / 2, l = /* @__PURE__ */ _.createElementNS("http://www.w3.org/2000/svg", "text");
      l.setAttribute("dy", c + "em");
      for (let [h, d] of w.entries()) {
        let T = /* @__PURE__ */ _.createElementNS("http://www.w3.org/2000/svg", "tspan");
        T.setAttribute("alignment-baseline", "central"), T.setAttribute("x", "10"), h > 0 && T.setAttribute("dy", "1em"), T.textContent = d, l.appendChild(T);
      }
      return l;
    }).attr("x", 10).attr("y", function(y, w) {
      if (w > 0) for (let c = 0; c < w; c++) return b += x[w - 1][1], y[1] * g / 2 + b * g + v;
      else return y[1] * g / 2 + v;
    }).attr("font-size", r.sectionFontSize).attr("class", function(y) {
      for (let [w, c] of F.entries()) if (y[0] === c) return "sectionTitle sectionTitle" + w % r.numberSectionStyles;
      return "sectionTitle";
    });
  }
  m$1(U, "vertLabels");
  function B(g, v, b, x) {
    let y = /* @__PURE__ */ a.db.getTodayMarker();
    if (y === "off") return;
    let w = /* @__PURE__ */ p.append("g").attr("class", "today"), c = /* @__PURE__ */ new Date(), l = /* @__PURE__ */ w.append("line");
    l.attr("x1", k(c) + g).attr("x2", k(c) + g).attr("y1", r.titleTopMargin).attr("y2", x - r.titleTopMargin).attr("class", "today"), y !== "" && l.attr("style", /* @__PURE__ */ y.replace(/,/g, ";"));
  }
  m$1(B, "drawToday");
  function j(g) {
    let v = {}, b = [];
    for (let x = 0, y = g.length; x < y; ++x) Object.prototype.hasOwnProperty.call(v, g[x]) || (v[g[x]] = true, b.push(g[x]));
    return b;
  }
  m$1(j, "checkUnique");
}, "draw"), Ut = {
  setConf: Yn,
  draw: Fn
};
var Vn = /* @__PURE__ */ m$1((e) => `
  .mermaid-main-font {
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .exclude-range {
    fill: ${e.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${e.sectionBkgColor};
  }

  .section2 {
    fill: ${e.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${e.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${e.titleColor};
  }

  .sectionTitle1 {
    fill: ${e.titleColor};
  }

  .sectionTitle2 {
    fill: ${e.titleColor};
  }

  .sectionTitle3 {
    fill: ${e.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${e.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${e.fontFamily};
    fill: ${e.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${e.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .taskTextOutsideRight {
    fill: ${e.taskTextDarkColor};
    text-anchor: start;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .taskTextOutsideLeft {
    fill: ${e.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${e.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${e.taskBkgColor};
    stroke: ${e.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${e.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${e.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${e.activeTaskBkgColor};
    stroke: ${e.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${e.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${e.doneTaskBorderColor};
    fill: ${e.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${e.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.doneTaskBkgColor};
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
    fill: ${e.taskTextDarkColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${e.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.titleColor || e.textColor};
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }
`, "getStyles"), Zt = Vn;
var oi = {
  parser: St,
  db: Ht,
  renderer: Ut,
  styles: Zt
};
export {
  oi as diagram
};
