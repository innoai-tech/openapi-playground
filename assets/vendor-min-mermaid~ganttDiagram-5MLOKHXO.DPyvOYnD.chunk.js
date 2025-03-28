import { I as Ie$1 } from "./vendor-min-mermaid~chunk-YM3XIQPS.BhHSAhRp.chunk.js";
import { f } from "./vendor-min-mermaid~chunk-TI4EEUUG._cpilAVR.chunk.js";
import { F as Ff, B as Bf, L as Lf, M as Mf, w as wf, v as vf, H as Hl, i as ih, _ as gc, $ as Yl, a0 as Ul, T as Tf, a1 as Is, a2 as sm, t as tt$1, a3 as Zf, a4 as uo, a5 as xr, a6 as fe, a7 as Hh, a8 as $h, a9 as we, aa as Wh, ab as Ph, ac as pr, ad as ue, ae as mr, af as dr, ag as ee, ah as Pe$1, ai as jf, g as gC, S as Sf, aj as Ya } from "./vendor-min-mermaid~chunk-ZKYS2E5M.BYv2PEOY.chunk.js";
import { m as m$1, q as q$1, n } from "./vendor-min-mermaid~chunk-GTKDMUJJ.Q7R0ayzM.chunk.js";
var Ee = /* @__PURE__ */ n((Ot, Pt) => {
  (function(t, e) {
    typeof Ot == "object" && typeof Pt < "u" ? Pt.exports = /* @__PURE__ */ e() : typeof define == "function" && define.amd ? define(e) : (t = typeof globalThis < "u" ? globalThis : t || self).dayjs_plugin_isoWeek = /* @__PURE__ */ e();
  })(Ot, function() {
    var t = "day";
    return function(e, s, a) {
      var r = /* @__PURE__ */ m$1(function(D) {
        return D.add(4 - D.isoWeekday(), t);
      }, "a"), f2 = s.prototype;
      f2.isoWeekYear = function() {
        return r(this).year();
      }, f2.isoWeek = function(D) {
        if (!this.$utils().u(D)) return this.add(7 * (D - this.isoWeek()), t);
        var _, L, S, W, G = /* @__PURE__ */ r(this), z = (_ = /* @__PURE__ */ this.isoWeekYear(), L = this.$u, S = /* @__PURE__ */ (L ? a.utc : a)().year(_).startOf("year"), W = 4 - S.isoWeekday(), S.isoWeekday() > 4 && (W += 7), S.add(W, t));
        return G.diff(z, "week") + 1;
      }, f2.isoWeekday = function(D) {
        return this.$utils().u(D) ? this.day() || 7 : this.day(this.day() % 7 ? D : D - 7);
      };
      var k = f2.startOf;
      f2.startOf = function(D, _) {
        var L = /* @__PURE__ */ this.$utils(), S = !!L.u(_) || _;
        return L.p(D) === "isoweek" ? S ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : k.bind(this)(D, _);
      };
    };
  });
});
var Me = /* @__PURE__ */ n((zt, Nt) => {
  (function(t, e) {
    typeof zt == "object" && typeof Nt < "u" ? Nt.exports = /* @__PURE__ */ e() : typeof define == "function" && define.amd ? define(e) : (t = typeof globalThis < "u" ? globalThis : t || self).dayjs_plugin_customParseFormat = /* @__PURE__ */ e();
  })(zt, function() {
    var t = {
      LTS: "h:mm:ss A",
      LT: "h:mm A",
      L: "MM/DD/YYYY",
      LL: "MMMM D, YYYY",
      LLL: "MMMM D, YYYY h:mm A",
      LLLL: "dddd, MMMM D, YYYY h:mm A"
    }, e = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d/, a = /\d\d/, r = /\d\d?/, f2 = /\d*[^-_:/,()\s\d]+/, k = {}, D = /* @__PURE__ */ m$1(function(p) {
      return (p = +p) + (p > 68 ? 1900 : 2e3);
    }, "a"), _ = /* @__PURE__ */ m$1(function(p) {
      return function(m) {
        this[p] = +m;
      };
    }, "f"), L = [
      /[+-]\d\d:?(\d\d)?|Z/,
      function(p) {
        (this.zone || (this.zone = {})).offset = /* @__PURE__ */ function(m) {
          if (!m || m === "Z") return 0;
          var A = /* @__PURE__ */ m.match(/([+-]|\d\d)/g), I = 60 * A[1] + (+A[2] || 0);
          return I === 0 ? 0 : A[0] === "+" ? -I : I;
        }(p);
      }
    ], S = /* @__PURE__ */ m$1(function(p) {
      var m = k[p];
      return m && (m.indexOf ? m : m.s.concat(m.f));
    }, "u"), W = /* @__PURE__ */ m$1(function(p, m) {
      var A, I = k.meridiem;
      if (I) {
        for (var N = 1; N <= 24; N += 1) if (p.indexOf(/* @__PURE__ */ I(N, 0, m)) > -1) {
          A = N > 12;
          break;
        }
      } else A = p === (m ? "pm" : "PM");
      return A;
    }, "d"), G = {
      A: [
        f2,
        function(p) {
          this.afternoon = /* @__PURE__ */ W(p, false);
        }
      ],
      a: [
        f2,
        function(p) {
          this.afternoon = /* @__PURE__ */ W(p, true);
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
          var m = k.ordinal, A = /* @__PURE__ */ p.match(/\d+/);
          if (this.day = A[0], m) for (var I = 1; I <= 31; I += 1) m(I).replace(/\[|\]/g, "") === p && (this.day = I);
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
          var m = /* @__PURE__ */ S("months"), A = (S("monthsShort") || m.map(function(I) {
            return I.slice(0, 3);
          })).indexOf(p) + 1;
          if (A < 1) throw new Error();
          this.month = A % 12 || A;
        }
      ],
      MMMM: [
        f2,
        function(p) {
          var m = S("months").indexOf(p) + 1;
          if (m < 1) throw new Error();
          this.month = m % 12 || m;
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
      var m, A;
      m = p, A = k && k.formats;
      for (var I = /* @__PURE__ */ (p = /* @__PURE__ */ m.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(g, v, b) {
        var x = b && b.toUpperCase();
        return v || A[b] || t[b] || A[x].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(y, w, c) {
          return w || c.slice(1);
        });
      })).match(e), N = I.length, R = 0; R < N; R += 1) {
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
    return m$1(z, "l"), function(p, m, A) {
      A.p.customParseFormat = true, p && p.parseTwoDigitYear && (D = p.parseTwoDigitYear);
      var I = m.prototype, N = I.parse;
      I.parse = function(R) {
        var K = R.date, U = R.utc, B = R.args;
        this.$u = U;
        var j = B[1];
        if (typeof j == "string") {
          var g = B[2] === true, v = B[3] === true, b = g || v, x = B[2];
          v && (x = B[2]), k = /* @__PURE__ */ this.$locale(), !g && x && (k = A.Ls[x]), this.$d = /* @__PURE__ */ function(l, h, d, T) {
            try {
              if ([
                "x",
                "X"
              ].indexOf(h) > -1) return new Date((h === "X" ? 1e3 : 1) * l);
              var n2 = /* @__PURE__ */ z(h)(l), u = n2.year, i = n2.month, M = n2.day, C = n2.hours, E = n2.minutes, P = n2.seconds, Y = n2.milliseconds, at = n2.zone, F = n2.week, Z = /* @__PURE__ */ new Date(), nt = M || (u || i ? 1 : Z.getDate()), it = u || Z.getFullYear(), ot = 0;
              u && !i || (ot = i > 0 ? i - 1 : Z.getMonth());
              var ht, kt = C || 0, V = E || 0, rt = P || 0, Q = Y || 0;
              return at ? new Date(Date.UTC(it, ot, nt, kt, V, rt, Q + 60 * at.offset * 1e3)) : d ? new Date(Date.UTC(it, ot, nt, kt, V, rt, Q)) : (ht = new Date(it, ot, nt, kt, V, rt, Q), F && (ht = /* @__PURE__ */ T(ht).week(F).toDate()), ht);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(K, j, U, A), this.init(), x && x !== true && (this.$L = this.locale(x).$L), b && K != this.format(j) && (this.$d = /* @__PURE__ */ new Date("")), k = {};
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
var Ae = /* @__PURE__ */ n((Rt, Bt) => {
  (function(t, e) {
    typeof Rt == "object" && typeof Bt < "u" ? Bt.exports = /* @__PURE__ */ e() : typeof define == "function" && define.amd ? define(e) : (t = typeof globalThis < "u" ? globalThis : t || self).dayjs_plugin_advancedFormat = /* @__PURE__ */ e();
  })(Rt, function() {
    return function(t, e) {
      var s = e.prototype, a = s.format;
      s.format = function(r) {
        var f2 = this, k = /* @__PURE__ */ this.$locale();
        if (!this.isValid()) return a.bind(this)(r);
        var D = /* @__PURE__ */ this.$utils(), _ = /* @__PURE__ */ (r || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(L) {
          switch (L) {
            case "Q":
              return Math.ceil((f2.$M + 1) / 3);
            case "Do":
              return k.ordinal(f2.$D);
            case "gggg":
              return f2.weekYear();
            case "GGGG":
              return f2.isoWeekYear();
            case "wo":
              return k.ordinal(/* @__PURE__ */ f2.week(), "W");
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
var Vt = /* @__PURE__ */ function() {
  var t = /* @__PURE__ */ m$1(function(w, c, l, h) {
    for (l = l || {}, h = w.length; h--; l[w[h]] = c) ;
    return l;
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
  ], r = [
    1,
    28
  ], f2 = [
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
  ], L = [
    1,
    33
  ], S = [
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
      /* @__PURE__ */ t(e, [
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
        16: k,
        17: D,
        18: _,
        19: 18,
        20: L,
        21: S,
        22: W,
        23: G,
        24: z,
        25: p,
        26: m,
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
      /* @__PURE__ */ t(e, [
        2,
        7
      ], {
        1: [
          2,
          1
        ]
      }),
      /* @__PURE__ */ t(e, [
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
        16: k,
        17: D,
        18: _,
        19: 18,
        20: L,
        21: S,
        22: W,
        23: G,
        24: z,
        25: p,
        26: m,
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
      /* @__PURE__ */ t(e, [
        2,
        5
      ]),
      /* @__PURE__ */ t(e, [
        2,
        6
      ]),
      /* @__PURE__ */ t(e, [
        2,
        17
      ]),
      /* @__PURE__ */ t(e, [
        2,
        18
      ]),
      /* @__PURE__ */ t(e, [
        2,
        19
      ]),
      /* @__PURE__ */ t(e, [
        2,
        20
      ]),
      /* @__PURE__ */ t(e, [
        2,
        21
      ]),
      /* @__PURE__ */ t(e, [
        2,
        22
      ]),
      /* @__PURE__ */ t(e, [
        2,
        23
      ]),
      /* @__PURE__ */ t(e, [
        2,
        24
      ]),
      /* @__PURE__ */ t(e, [
        2,
        25
      ]),
      /* @__PURE__ */ t(e, [
        2,
        26
      ]),
      /* @__PURE__ */ t(e, [
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
      /* @__PURE__ */ t(e, [
        2,
        30
      ]),
      /* @__PURE__ */ t(e, [
        2,
        31
      ]),
      /* @__PURE__ */ t(e, [
        2,
        32
      ]),
      {
        39: [
          1,
          39
        ]
      },
      /* @__PURE__ */ t(e, [
        2,
        8
      ]),
      /* @__PURE__ */ t(e, [
        2,
        9
      ]),
      /* @__PURE__ */ t(e, [
        2,
        10
      ]),
      /* @__PURE__ */ t(e, [
        2,
        11
      ]),
      /* @__PURE__ */ t(e, [
        2,
        12
      ]),
      /* @__PURE__ */ t(e, [
        2,
        13
      ]),
      /* @__PURE__ */ t(e, [
        2,
        14
      ]),
      /* @__PURE__ */ t(e, [
        2,
        15
      ]),
      /* @__PURE__ */ t(e, [
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
      /* @__PURE__ */ t(e, [
        2,
        4
      ]),
      /* @__PURE__ */ t(e, [
        2,
        28
      ]),
      /* @__PURE__ */ t(e, [
        2,
        29
      ]),
      /* @__PURE__ */ t(e, [
        2,
        33
      ]),
      /* @__PURE__ */ t(e, [
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
      /* @__PURE__ */ t(e, [
        2,
        40
      ], {
        41: [
          1,
          44
        ]
      }),
      /* @__PURE__ */ t(e, [
        2,
        35
      ], {
        43: [
          1,
          45
        ]
      }),
      /* @__PURE__ */ t(e, [
        2,
        36
      ]),
      /* @__PURE__ */ t(e, [
        2,
        38
      ], {
        42: [
          1,
          46
        ]
      }),
      /* @__PURE__ */ t(e, [
        2,
        37
      ]),
      /* @__PURE__ */ t(e, [
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
      ], n2 = [], u = this.table, i = "", M = 0, C = 0, E = 0, P = 2, Y = 1, at = /* @__PURE__ */ n2.slice.call(arguments, 1), F = /* @__PURE__ */ Object.create(this.lexer), Z = {
        yy: {}
      };
      for (var nt in this.yy) Object.prototype.hasOwnProperty.call(this.yy, nt) && (Z.yy[nt] = this.yy[nt]);
      F.setInput(c, Z.yy), Z.yy.lexer = F, Z.yy.parser = this, typeof F.yylloc > "u" && (F.yylloc = {});
      var it = F.yylloc;
      n2.push(it);
      var ot = F.options && F.options.ranges;
      typeof Z.yy.parseError == "function" ? this.parseError = Z.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function ht(X) {
        h.length = h.length - 2 * X, T.length = T.length - X, n2.length = n2.length - X;
      }
      m$1(ht, "popStack");
      function kt() {
        var X;
        return X = d.pop() || F.lex() || Y, typeof X != "number" && (X instanceof Array && (d = X, X = /* @__PURE__ */ d.pop()), X = l.symbols_[X] || X), X;
      }
      m$1(kt, "lex");
      for (var V, rt, Q, H, On, Ct, ct = {}, bt, J, ee2, xt; ; ) {
        if (Q = h[h.length - 1], this.defaultActions[Q] ? H = this.defaultActions[Q] : ((V === null || typeof V > "u") && (V = /* @__PURE__ */ kt()), H = u[Q] && u[Q][V]), typeof H > "u" || !H.length || !H[0]) {
          var St = "";
          xt = [];
          for (bt in u[Q]) this.terminals_[bt] && bt > P && xt.push("'" + this.terminals_[bt] + "'");
          F.showPosition ? St = "Parse error on line " + (M + 1) + `:
` + F.showPosition() + `
Expecting ` + xt.join(", ") + ", got '" + (this.terminals_[V] || V) + "'" : St = "Parse error on line " + (M + 1) + ": Unexpected " + (V == Y ? "end of input" : "'" + (this.terminals_[V] || V) + "'"), this.parseError(St, {
            text: F.match,
            token: this.terminals_[V] || V,
            line: F.yylineno,
            loc: it,
            expected: xt
          });
        }
        if (H[0] instanceof Array && H.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + Q + ", token: " + V);
        switch (H[0]) {
          case 1:
            h.push(V), T.push(F.yytext), n2.push(F.yylloc), h.push(H[1]), V = null, rt ? (V = rt, rt = null) : (C = F.yyleng, i = F.yytext, M = F.yylineno, it = F.yylloc, E > 0);
            break;
          case 2:
            if (J = this.productions_[H[1]][1], ct.$ = T[T.length - J], ct._$ = {
              first_line: n2[n2.length - (J || 1)].first_line,
              last_line: n2[n2.length - 1].last_line,
              first_column: n2[n2.length - (J || 1)].first_column,
              last_column: n2[n2.length - 1].last_column
            }, ot && (ct._$.range = [
              n2[n2.length - (J || 1)].range[0],
              n2[n2.length - 1].range[1]
            ]), Ct = /* @__PURE__ */ this.performAction.apply(ct, /* @__PURE__ */ [
              i,
              C,
              M,
              Z.yy,
              H[1],
              T,
              n2
            ].concat(at)), typeof Ct < "u") return Ct;
            J && (h = /* @__PURE__ */ h.slice(0, -1 * J * 2), T = /* @__PURE__ */ T.slice(0, -1 * J), n2 = /* @__PURE__ */ n2.slice(0, -1 * J)), h.push(this.productions_[H[1]][0]), T.push(ct.$), n2.push(ct._$), ee2 = u[h[h.length - 2]][h[h.length - 1]], h.push(ee2);
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
Vt.parser = Vt;
var Se = Vt;
var Ye = /* @__PURE__ */ q$1(/* @__PURE__ */ f()), q = /* @__PURE__ */ q$1(/* @__PURE__ */ Ya()), Fe = /* @__PURE__ */ q$1(/* @__PURE__ */ Ee()), We = /* @__PURE__ */ q$1(/* @__PURE__ */ Me()), Ve = /* @__PURE__ */ q$1(/* @__PURE__ */ Ae());
q.default.extend(Fe.default);
q.default.extend(We.default);
q.default.extend(Ve.default);
var Le = {
  friday: 5,
  saturday: 6
}, $ = "", Xt = "", qt, Ut = "", yt = [], pt = [], Zt = /* @__PURE__ */ new Map(), Qt = [], wt = [], ft = "", Kt = "", Oe = [
  "active",
  "done",
  "crit",
  "milestone"
], $t = [], gt = false, Jt = false, te = "sunday", _t = "saturday", jt = 0, Ke = /* @__PURE__ */ m$1(function() {
  Qt = [], wt = [], ft = "", $t = [], Tt = 0, Ht = void 0, vt = void 0, O = [], $ = "", Xt = "", Kt = "", qt = void 0, Ut = "", yt = [], pt = [], gt = false, Jt = false, jt = 0, Zt = /* @__PURE__ */ new Map(), Sf(), te = "sunday", _t = "saturday";
}, "clear"), $e = /* @__PURE__ */ m$1(function(t) {
  Xt = t;
}, "setAxisFormat"), Je = /* @__PURE__ */ m$1(function() {
  return Xt;
}, "getAxisFormat"), tn = /* @__PURE__ */ m$1(function(t) {
  qt = t;
}, "setTickInterval"), en = /* @__PURE__ */ m$1(function() {
  return qt;
}, "getTickInterval"), nn = /* @__PURE__ */ m$1(function(t) {
  Ut = t;
}, "setTodayMarker"), rn = /* @__PURE__ */ m$1(function() {
  return Ut;
}, "getTodayMarker"), sn = /* @__PURE__ */ m$1(function(t) {
  $ = t;
}, "setDateFormat"), an = /* @__PURE__ */ m$1(function() {
  gt = true;
}, "enableInclusiveEndDates"), on = /* @__PURE__ */ m$1(function() {
  return gt;
}, "endDatesAreInclusive"), cn = /* @__PURE__ */ m$1(function() {
  Jt = true;
}, "enableTopAxis"), ln = /* @__PURE__ */ m$1(function() {
  return Jt;
}, "topAxisEnabled"), un = /* @__PURE__ */ m$1(function(t) {
  Kt = t;
}, "setDisplayMode"), dn = /* @__PURE__ */ m$1(function() {
  return Kt;
}, "getDisplayMode"), fn = /* @__PURE__ */ m$1(function() {
  return $;
}, "getDateFormat"), hn = /* @__PURE__ */ m$1(function(t) {
  yt = /* @__PURE__ */ t.toLowerCase().split(/[\s,]+/);
}, "setIncludes"), kn = /* @__PURE__ */ m$1(function() {
  return yt;
}, "getIncludes"), mn = /* @__PURE__ */ m$1(function(t) {
  pt = /* @__PURE__ */ t.toLowerCase().split(/[\s,]+/);
}, "setExcludes"), yn = /* @__PURE__ */ m$1(function() {
  return pt;
}, "getExcludes"), pn = /* @__PURE__ */ m$1(function() {
  return Zt;
}, "getLinks"), gn = /* @__PURE__ */ m$1(function(t) {
  ft = t, Qt.push(t);
}, "addSection"), bn = /* @__PURE__ */ m$1(function() {
  return Qt;
}, "getSections"), xn = /* @__PURE__ */ m$1(function() {
  let t = /* @__PURE__ */ Ie(), e = 10, s = 0;
  for (; !t && s < e; ) t = /* @__PURE__ */ Ie(), s++;
  return wt = O, wt;
}, "getTasks"), Pe = /* @__PURE__ */ m$1(function(t, e, s, a) {
  return a.includes(/* @__PURE__ */ t.format(/* @__PURE__ */ e.trim())) ? false : s.includes("weekends") && (t.isoWeekday() === Le[_t] || t.isoWeekday() === Le[_t] + 1) || s.includes(/* @__PURE__ */ t.format("dddd").toLowerCase()) ? true : s.includes(/* @__PURE__ */ t.format(/* @__PURE__ */ e.trim()));
}, "isInvalidDate"), Tn = /* @__PURE__ */ m$1(function(t) {
  te = t;
}, "setWeekday"), vn = /* @__PURE__ */ m$1(function() {
  return te;
}, "getWeekday"), wn = /* @__PURE__ */ m$1(function(t) {
  _t = t;
}, "setWeekend"), ze = /* @__PURE__ */ m$1(function(t, e, s, a) {
  if (!s.length || t.manualEndTime) return;
  let r;
  t.startTime instanceof Date ? r = /* @__PURE__ */ (0, q.default)(t.startTime) : r = /* @__PURE__ */ (0, q.default)(t.startTime, e, true), r = /* @__PURE__ */ r.add(1, "d");
  let f2;
  t.endTime instanceof Date ? f2 = /* @__PURE__ */ (0, q.default)(t.endTime) : f2 = /* @__PURE__ */ (0, q.default)(t.endTime, e, true);
  let [k, D] = _n(r, f2, e, s, a);
  t.endTime = /* @__PURE__ */ k.toDate(), t.renderEndTime = D;
}, "checkTaskDates"), _n = /* @__PURE__ */ m$1(function(t, e, s, a, r) {
  let f2 = false, k = null;
  for (; t <= e; ) f2 || (k = /* @__PURE__ */ e.toDate()), f2 = /* @__PURE__ */ Pe(t, s, a, r), f2 && (e = /* @__PURE__ */ e.add(1, "d")), t = /* @__PURE__ */ t.add(1, "d");
  return [
    e,
    k
  ];
}, "fixTaskDates"), Gt = /* @__PURE__ */ m$1(function(t, e, s) {
  s = /* @__PURE__ */ s.trim();
  let r = /* @__PURE__ */ /^after\s+(?<ids>[\d\w- ]+)/.exec(s);
  if (r !== null) {
    let k = null;
    for (let _ of r.groups.ids.split(" ")) {
      let L = /* @__PURE__ */ st(_);
      L !== void 0 && (!k || L.endTime > k.endTime) && (k = L);
    }
    if (k) return k.endTime;
    let D = /* @__PURE__ */ new Date();
    return D.setHours(0, 0, 0, 0), D;
  }
  let f2 = /* @__PURE__ */ (0, q.default)(s, /* @__PURE__ */ e.trim(), true);
  if (f2.isValid()) return f2.toDate();
  {
    tt$1.debug("Invalid date:" + s), tt$1.debug("With date format:" + e.trim());
    let k = new Date(s);
    if (k === void 0 || isNaN(/* @__PURE__ */ k.getTime()) || k.getFullYear() < -1e4 || k.getFullYear() > 1e4) throw new Error("Invalid date:" + s);
    return k;
  }
}, "getStartDate"), Ne = /* @__PURE__ */ m$1(function(t) {
  let e = /* @__PURE__ */ /^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(/* @__PURE__ */ t.trim());
  return e !== null ? [
    /* @__PURE__ */ Number.parseFloat(e[1]),
    e[2]
  ] : [
    NaN,
    "ms"
  ];
}, "parseDuration"), Re = /* @__PURE__ */ m$1(function(t, e, s) {
  let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  s = /* @__PURE__ */ s.trim();
  let f2 = /* @__PURE__ */ /^until\s+(?<ids>[\d\w- ]+)/.exec(s);
  if (f2 !== null) {
    let S = null;
    for (let G of f2.groups.ids.split(" ")) {
      let z = /* @__PURE__ */ st(G);
      z !== void 0 && (!S || z.startTime < S.startTime) && (S = z);
    }
    if (S) return S.startTime;
    let W = /* @__PURE__ */ new Date();
    return W.setHours(0, 0, 0, 0), W;
  }
  let k = /* @__PURE__ */ (0, q.default)(s, /* @__PURE__ */ e.trim(), true);
  if (k.isValid()) return a && (k = /* @__PURE__ */ k.add(1, "d")), k.toDate();
  let D = /* @__PURE__ */ (0, q.default)(t), [_, L] = Ne(s);
  if (!Number.isNaN(_)) {
    let S = /* @__PURE__ */ D.add(_, L);
    S.isValid() && (D = S);
  }
  return D.toDate();
}, "getEndDate"), Tt = 0, dt = /* @__PURE__ */ m$1(function(t) {
  return t === void 0 ? (Tt = Tt + 1, "task" + Tt) : t;
}, "parseId"), Dn = /* @__PURE__ */ m$1(function(t, e) {
  let s;
  e.substr(0, 1) === ":" ? s = /* @__PURE__ */ e.substr(1, e.length) : s = e;
  let a = /* @__PURE__ */ s.split(","), r = {};
  Xe(a, r, Oe);
  for (let k = 0; k < a.length; k++) a[k] = /* @__PURE__ */ a[k].trim();
  let f2 = "";
  switch (a.length) {
    case 1:
      r.id = /* @__PURE__ */ dt(), r.startTime = t.endTime, f2 = a[0];
      break;
    case 2:
      r.id = /* @__PURE__ */ dt(), r.startTime = /* @__PURE__ */ Gt(void 0, $, a[0]), f2 = a[1];
      break;
    case 3:
      r.id = /* @__PURE__ */ dt(a[0]), r.startTime = /* @__PURE__ */ Gt(void 0, $, a[1]), f2 = a[2];
      break;
  }
  return f2 && (r.endTime = /* @__PURE__ */ Re(r.startTime, $, f2, gt), r.manualEndTime = /* @__PURE__ */ (0, q.default)(f2, "YYYY-MM-DD", true).isValid(), ze(r, $, pt, yt)), r;
}, "compileData"), Cn = /* @__PURE__ */ m$1(function(t, e) {
  let s;
  e.substr(0, 1) === ":" ? s = /* @__PURE__ */ e.substr(1, e.length) : s = e;
  let a = /* @__PURE__ */ s.split(","), r = {};
  Xe(a, r, Oe);
  for (let f2 = 0; f2 < a.length; f2++) a[f2] = /* @__PURE__ */ a[f2].trim();
  switch (a.length) {
    case 1:
      r.id = /* @__PURE__ */ dt(), r.startTime = {
        type: "prevTaskEnd",
        id: t
      }, r.endTime = {
        data: a[0]
      };
      break;
    case 2:
      r.id = /* @__PURE__ */ dt(), r.startTime = {
        type: "getStartDate",
        startData: a[0]
      }, r.endTime = {
        data: a[1]
      };
      break;
    case 3:
      r.id = /* @__PURE__ */ dt(a[0]), r.startTime = {
        type: "getStartDate",
        startData: a[1]
      }, r.endTime = {
        data: a[2]
      };
      break;
  }
  return r;
}, "parseData"), Ht, vt, O = [], Be = {}, Sn = /* @__PURE__ */ m$1(function(t, e) {
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
  }, a = /* @__PURE__ */ Cn(vt, e);
  s.raw.startTime = a.startTime, s.raw.endTime = a.endTime, s.id = a.id, s.prevTaskId = vt, s.active = a.active, s.done = a.done, s.crit = a.crit, s.milestone = a.milestone, s.order = jt, jt++;
  let r = /* @__PURE__ */ O.push(s);
  vt = s.id, Be[s.id] = r - 1;
}, "addTask"), st = /* @__PURE__ */ m$1(function(t) {
  let e = Be[t];
  return O[e];
}, "findTaskById"), En = /* @__PURE__ */ m$1(function(t, e) {
  let s = {
    section: ft,
    type: ft,
    description: t,
    task: t,
    classes: []
  }, a = /* @__PURE__ */ Dn(Ht, e);
  s.startTime = a.startTime, s.endTime = a.endTime, s.id = a.id, s.active = a.active, s.done = a.done, s.crit = a.crit, s.milestone = a.milestone, Ht = s, wt.push(s);
}, "addTaskOrg"), Ie = /* @__PURE__ */ m$1(function() {
  let t = /* @__PURE__ */ m$1(function(s) {
    let a = O[s], r = "";
    switch (O[s].raw.startTime.type) {
      case "prevTaskEnd": {
        let f2 = /* @__PURE__ */ st(a.prevTaskId);
        a.startTime = f2.endTime;
        break;
      }
      case "getStartDate":
        r = /* @__PURE__ */ Gt(void 0, $, O[s].raw.startTime.startData), r && (O[s].startTime = r);
        break;
    }
    return O[s].startTime && (O[s].endTime = /* @__PURE__ */ Re(O[s].startTime, $, O[s].raw.endTime.data, gt), O[s].endTime && (O[s].processed = true, O[s].manualEndTime = /* @__PURE__ */ (0, q.default)(O[s].raw.endTime.data, "YYYY-MM-DD", true).isValid(), ze(O[s], $, pt, yt))), O[s].processed;
  }, "compileTask"), e = true;
  for (let [s, a] of O.entries()) t(s), e = e && a.processed;
  return e;
}, "compileTasks"), Mn = /* @__PURE__ */ m$1(function(t, e) {
  let s = e;
  Hl().securityLevel !== "loose" && (s = /* @__PURE__ */ (0, Ye.sanitizeUrl)(e)), t.split(",").forEach(function(a) {
    st(a) !== void 0 && (Ge(a, () => {
      window.open(s, "_self");
    }), Zt.set(a, s));
  }), je(t, "clickable");
}, "setLink"), je = /* @__PURE__ */ m$1(function(t, e) {
  t.split(",").forEach(function(s) {
    let a = /* @__PURE__ */ st(s);
    a !== void 0 && a.classes.push(e);
  });
}, "setClass"), An = /* @__PURE__ */ m$1(function(t, e, s) {
  if (Hl().securityLevel !== "loose" || e === void 0) return;
  let a = [];
  if (typeof s == "string") {
    a = /* @__PURE__ */ s.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    for (let f2 = 0; f2 < a.length; f2++) {
      let k = /* @__PURE__ */ a[f2].trim();
      k.startsWith('"') && k.endsWith('"') && (k = /* @__PURE__ */ k.substr(1, k.length - 2)), a[f2] = k;
    }
  }
  a.length === 0 && a.push(t), st(t) !== void 0 && Ge(t, () => {
    Ie$1.runFunc(e, ...a);
  });
}, "setClickFun"), Ge = /* @__PURE__ */ m$1(function(t, e) {
  $t.push(function() {
    let s = /* @__PURE__ */ document.querySelector(`[id="${t}"]`);
    s !== null && s.addEventListener("click", function() {
      e();
    });
  }, function() {
    let s = /* @__PURE__ */ document.querySelector(`[id="${t}-text"]`);
    s !== null && s.addEventListener("click", function() {
      e();
    });
  });
}, "pushFun"), Ln = /* @__PURE__ */ m$1(function(t, e, s) {
  t.split(",").forEach(function(a) {
    An(a, e, s);
  }), je(t, "clickable");
}, "setClickEvent"), In = /* @__PURE__ */ m$1(function(t) {
  $t.forEach(function(e) {
    e(t);
  });
}, "bindFunctions"), He = {
  getConfig: /* @__PURE__ */ m$1(() => Hl().gantt, "getConfig"),
  clear: Ke,
  setDateFormat: sn,
  getDateFormat: fn,
  enableInclusiveEndDates: an,
  endDatesAreInclusive: on,
  enableTopAxis: cn,
  topAxisEnabled: ln,
  setAxisFormat: $e,
  getAxisFormat: Je,
  setTickInterval: tn,
  getTickInterval: en,
  setTodayMarker: nn,
  getTodayMarker: rn,
  setAccTitle: vf,
  getAccTitle: wf,
  setDiagramTitle: Mf,
  getDiagramTitle: Lf,
  setDisplayMode: un,
  getDisplayMode: dn,
  setAccDescription: Bf,
  getAccDescription: Ff,
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
  setClickEvent: Ln,
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
  for (; a; ) a = false, s.forEach(function(r) {
    let f2 = "^\\s*" + r + "\\s*$", k = new RegExp(f2);
    t[0].match(k) && (e[r] = true, t.shift(1), a = true);
  });
}
m$1(Xe, "getTaskTags");
var Dt = /* @__PURE__ */ q$1(/* @__PURE__ */ Ya());
var Yn = /* @__PURE__ */ m$1(function() {
  tt$1.debug("Something is calling, setConf, remove the call");
}, "setConf"), qe = {
  monday: pr,
  tuesday: Ph,
  wednesday: Wh,
  thursday: we,
  friday: $h,
  saturday: Hh,
  sunday: fe
}, Fn = /* @__PURE__ */ m$1((t, e) => {
  let s = /* @__PURE__ */ [
    ...t
  ].map(() => -1 / 0), a = /* @__PURE__ */ [
    ...t
  ].sort((f2, k) => f2.startTime - k.startTime || f2.order - k.order), r = 0;
  for (let f2 of a) for (let k = 0; k < s.length; k++) if (f2.startTime >= s[k]) {
    s[k] = f2.endTime, f2.order = k + e, k > r && (r = k);
    break;
  }
  return r;
}, "getMaxIntersections"), tt, Wn = /* @__PURE__ */ m$1(function(t, e, s, a) {
  let r = Hl().gantt, f2 = Hl().securityLevel, k;
  f2 === "sandbox" && (k = /* @__PURE__ */ ih("#i" + e));
  let D = f2 === "sandbox" ? ih(k.nodes()[0].contentDocument.body) : ih("body"), _ = f2 === "sandbox" ? k.nodes()[0].contentDocument : document, L = /* @__PURE__ */ _.getElementById(e);
  tt = L.parentElement.offsetWidth, tt === void 0 && (tt = 1200), r.useWidth !== void 0 && (tt = r.useWidth);
  let S = /* @__PURE__ */ a.db.getTasks(), W = [];
  for (let g of S) W.push(g.type);
  W = /* @__PURE__ */ j(W);
  let G = {}, z = 2 * r.topPadding;
  if (a.db.getDisplayMode() === "compact" || r.displayMode === "compact") {
    let g = {};
    for (let b of S) g[b.section] === void 0 ? g[b.section] = [
      b
    ] : g[b.section].push(b);
    let v = 0;
    for (let b of Object.keys(g)) {
      let x = Fn(g[b], v) + 1;
      v += x, z += x * (r.barHeight + r.barGap), G[b] = x;
    }
  } else {
    z += S.length * (r.barHeight + r.barGap);
    for (let g of W) G[g] = S.filter((v) => v.type === g).length;
  }
  L.setAttribute("viewBox", "0 0 " + tt + " " + z);
  let p = /* @__PURE__ */ D.select(`[id="${e}"]`), m = /* @__PURE__ */ gc().domain([
    /* @__PURE__ */ Yl(S, function(g) {
      return g.startTime;
    }),
    /* @__PURE__ */ Ul(S, function(g) {
      return g.endTime;
    })
  ]).rangeRound([
    0,
    tt - r.leftPadding - r.rightPadding
  ]);
  function A(g, v) {
    let b = g.startTime, x = v.startTime, y = 0;
    return b > x ? y = 1 : b < x && (y = -1), y;
  }
  m$1(A, "taskCompare"), S.sort(A), I(S, tt, z), Tf(p, z, tt, r.useMaxWidth), p.append("text").text(/* @__PURE__ */ a.db.getDiagramTitle()).attr("x", tt / 2).attr("y", r.titleTopMargin).attr("class", "titleText");
  function I(g, v, b) {
    let x = r.barHeight, y = x + r.barGap, w = r.topPadding, c = r.leftPadding, l = /* @__PURE__ */ Is().domain([
      0,
      W.length
    ]).range([
      "#00B9FA",
      "#F95002"
    ]).interpolate(sm);
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
      for (let [i, M] of W.entries()) if (u.type === M) return "section section" + i % r.numberSectionStyles;
      return "section section0";
    });
    let d = /* @__PURE__ */ p.append("g").selectAll("rect").data(g).enter(), T = /* @__PURE__ */ a.db.getLinks();
    if (d.append("rect").attr("id", function(u) {
      return u.id;
    }).attr("rx", 3).attr("ry", 3).attr("x", function(u) {
      return u.milestone ? m(u.startTime) + x + 0.5 * (m(u.endTime) - m(u.startTime)) - 0.5 * y : m(u.startTime) + x;
    }).attr("y", function(u, i) {
      return i = u.order, i * v + b;
    }).attr("width", function(u) {
      return u.milestone ? y : m(u.renderEndTime || u.endTime) - m(u.startTime);
    }).attr("height", y).attr("transform-origin", function(u, i) {
      return i = u.order, (m(u.startTime) + x + 0.5 * (m(u.endTime) - m(u.startTime))).toString() + "px " + (i * v + b + 0.5 * y).toString() + "px";
    }).attr("class", function(u) {
      let i = "task", M = "";
      u.classes.length > 0 && (M = /* @__PURE__ */ u.classes.join(" "));
      let C = 0;
      for (let [P, Y] of W.entries()) u.type === Y && (C = P % r.numberSectionStyles);
      let E = "";
      return u.active ? u.crit ? E += " activeCrit" : E = " active" : u.done ? u.crit ? E = " doneCrit" : E = " done" : u.crit && (E += " crit"), E.length === 0 && (E = " task"), u.milestone && (E = " milestone " + E), E += C, E += " " + M, i + E;
    }), d.append("text").attr("id", function(u) {
      return u.id + "-text";
    }).text(function(u) {
      return u.task;
    }).attr("font-size", r.fontSize).attr("x", function(u) {
      let i = /* @__PURE__ */ m(u.startTime), M = /* @__PURE__ */ m(u.renderEndTime || u.endTime);
      u.milestone && (i += 0.5 * (m(u.endTime) - m(u.startTime)) - 0.5 * y), u.milestone && (M = i + y);
      let C = this.getBBox().width;
      return C > M - i ? M + C + 1.5 * r.leftPadding > c ? i + x - 5 : M + x + 5 : (M - i) / 2 + i + x;
    }).attr("y", function(u, i) {
      return i = u.order, i * v + r.barHeight / 2 + (r.fontSize / 2 - 2) + b;
    }).attr("text-height", y).attr("class", function(u) {
      let i = /* @__PURE__ */ m(u.startTime), M = /* @__PURE__ */ m(u.endTime);
      u.milestone && (M = i + y);
      let C = this.getBBox().width, E = "";
      u.classes.length > 0 && (E = /* @__PURE__ */ u.classes.join(" "));
      let P = 0;
      for (let [at, F] of W.entries()) u.type === F && (P = at % r.numberSectionStyles);
      let Y = "";
      return u.active && (u.crit ? Y = "activeCritText" + P : Y = "activeText" + P), u.done ? u.crit ? Y = Y + " doneCritText" + P : Y = Y + " doneText" + P : u.crit && (Y = Y + " critText" + P), u.milestone && (Y += " milestoneText"), C > M - i ? M + C + 1.5 * r.leftPadding > c ? E + " taskTextOutsideLeft taskTextOutside" + P + " " + Y : E + " taskTextOutsideRight taskTextOutside" + P + " " + Y + " width-" + C : E + " taskText taskText" + P + " " + Y + " width-" + C;
    }), Hl().securityLevel === "sandbox") {
      let u;
      u = /* @__PURE__ */ ih("#i" + e);
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
    if ((0, Dt.default)(d).diff(/* @__PURE__ */ (0, Dt.default)(h), "year") > 5) {
      tt$1.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");
      return;
    }
    let T = /* @__PURE__ */ a.db.getDateFormat(), n2 = [], u = null, i = /* @__PURE__ */ (0, Dt.default)(h);
    for (; i.valueOf() <= d; ) a.db.isInvalidDate(i, T, c, l) ? u ? u.end = i : u = {
      start: i,
      end: i
    } : u && (n2.push(u), u = null), i = /* @__PURE__ */ i.add(1, "d");
    p.append("g").selectAll("rect").data(n2).enter().append("rect").attr("id", function(C) {
      return "exclude-" + C.start.format("YYYY-MM-DD");
    }).attr("x", function(C) {
      return m(C.start) + b;
    }).attr("y", r.gridLineStartPadding).attr("width", function(C) {
      let E = /* @__PURE__ */ C.end.add(1, "day");
      return m(E) - m(C.start);
    }).attr("height", y - v - r.gridLineStartPadding).attr("transform-origin", function(C, E) {
      return (m(C.start) + b + 0.5 * (m(C.end) - m(C.start))).toString() + "px " + (E * g + 0.5 * y).toString() + "px";
    }).attr("class", "exclude-range");
  }
  m$1(R, "drawExcludeDays");
  function K(g, v, b, x) {
    let y = /* @__PURE__ */ Zf(m).tickSize(-x + v + r.gridLineStartPadding).tickFormat(/* @__PURE__ */ uo(a.db.getAxisFormat() || r.axisFormat || "%Y-%m-%d")), c = /* @__PURE__ */ /^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(a.db.getTickInterval() || r.tickInterval);
    if (c !== null) {
      let l = c[1], h = c[2], d = a.db.getWeekday() || r.weekday;
      switch (h) {
        case "millisecond":
          y.ticks(/* @__PURE__ */ Pe$1.every(l));
          break;
        case "second":
          y.ticks(/* @__PURE__ */ ee.every(l));
          break;
        case "minute":
          y.ticks(/* @__PURE__ */ dr.every(l));
          break;
        case "hour":
          y.ticks(/* @__PURE__ */ mr.every(l));
          break;
        case "day":
          y.ticks(/* @__PURE__ */ ue.every(l));
          break;
        case "week":
          y.ticks(/* @__PURE__ */ qe[d].every(l));
          break;
        case "month":
          y.ticks(/* @__PURE__ */ xr.every(l));
          break;
      }
    }
    if (p.append("g").attr("class", "grid").attr("transform", "translate(" + g + ", " + (x - 50) + ")").call(y).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10).attr("dy", "1em"), a.db.topAxisEnabled() || r.topAxis) {
      let l = /* @__PURE__ */ jf(m).tickSize(-x + v + r.gridLineStartPadding).tickFormat(/* @__PURE__ */ uo(a.db.getAxisFormat() || r.axisFormat || "%Y-%m-%d"));
      if (c !== null) {
        let h = c[1], d = c[2], T = a.db.getWeekday() || r.weekday;
        switch (d) {
          case "millisecond":
            l.ticks(/* @__PURE__ */ Pe$1.every(h));
            break;
          case "second":
            l.ticks(/* @__PURE__ */ ee.every(h));
            break;
          case "minute":
            l.ticks(/* @__PURE__ */ dr.every(h));
            break;
          case "hour":
            l.ticks(/* @__PURE__ */ mr.every(h));
            break;
          case "day":
            l.ticks(/* @__PURE__ */ ue.every(h));
            break;
          case "week":
            l.ticks(/* @__PURE__ */ qe[T].every(h));
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
      let w = /* @__PURE__ */ y[0].split(gC.lineBreakRegex), c = -(w.length - 1) / 2, l = /* @__PURE__ */ _.createElementNS("http://www.w3.org/2000/svg", "text");
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
      for (let [w, c] of W.entries()) if (y[0] === c) return "sectionTitle sectionTitle" + w % r.numberSectionStyles;
      return "sectionTitle";
    });
  }
  m$1(U, "vertLabels");
  function B(g, v, b, x) {
    let y = /* @__PURE__ */ a.db.getTodayMarker();
    if (y === "off") return;
    let w = /* @__PURE__ */ p.append("g").attr("class", "today"), c = /* @__PURE__ */ new Date(), l = /* @__PURE__ */ w.append("line");
    l.attr("x1", m(c) + g).attr("x2", m(c) + g).attr("y1", r.titleTopMargin).attr("y2", x - r.titleTopMargin).attr("class", "today"), y !== "" && l.attr("style", /* @__PURE__ */ y.replace(/,/g, ";"));
  }
  m$1(B, "drawToday");
  function j(g) {
    let v = {}, b = [];
    for (let x = 0, y = g.length; x < y; ++x) Object.prototype.hasOwnProperty.call(v, g[x]) || (v[g[x]] = true, b.push(g[x]));
    return b;
  }
  m$1(j, "checkUnique");
}, "draw"), Ue = {
  setConf: Yn,
  draw: Wn
};
var Vn = /* @__PURE__ */ m$1((t) => `
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
var oi = {
  parser: Se,
  db: He,
  renderer: Ue,
  styles: Ze
};
export {
  oi as diagram
};
