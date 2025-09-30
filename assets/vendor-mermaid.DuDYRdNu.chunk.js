import { $t as t, A as e, At as i, Bt as s, Ft as n, G as r, Ht as a, It as o, J as l, Jt as c, Kt as d, M as u, Mt as h, S as f, U as y, Wt as k, Yt as m, Zt as p, bt as g, d as b, en as T, f as v, ht as x, j as w, kt as _, nn as D, o as $, on as S, pt as C, qt as E, rn as M, ut as A, wt as Y, zt as L } from "./vendor-min-mermaid~chunk-5V7UUW6L.B--ayk72.chunk.js";
import { Q as I, Z as F, et as W } from "./vendor-min-mermaid~chunk-2XYWPRAO.Da8Ms7Co.chunk.js";
import { c as O, v as P } from "./vendor-min-mermaid~chunk-EFRVIJHI.B3AEJspH.chunk.js";
var z = I((t, e) => {
	var i = t, s = function() {
		return function(t, e, i) {
			var s = F(function(t) {
				return t.add(4 - t.isoWeekday(), "day");
			}, "a"), n = e.prototype;
			n.isoWeekYear = function() {
				return s(this).year();
			}, n.isoWeek = function(t) {
				if (!this.$utils().u(t)) return this.add(7 * (t - this.isoWeek()), "day");
				var e, n, r, a = s(this), o = (e = this.isoWeekYear(), r = 4 - (n = (this.$u ? i.utc : i)().year(e).startOf("year")).isoWeekday(), n.isoWeekday() > 4 && (r += 7), n.add(r, "day"));
				return a.diff(o, "week") + 1;
			}, n.isoWeekday = function(t) {
				return this.$utils().u(t) ? this.day() || 7 : this.day(this.day() % 7 ? t : t - 7);
			};
			var r = n.startOf;
			n.startOf = function(t, e) {
				var i = this.$utils(), s = !!i.u(e) || e;
				return "isoweek" === i.p(t) ? s ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : r.bind(this)(t, e);
			};
		};
	};
	"object" == typeof t && "u" > typeof e ? e.exports = s() : "function" == typeof define && define.amd ? define(s) : (i = "u" > typeof globalThis ? globalThis : i || self).dayjs_plugin_isoWeek = s();
}), B = I((t, e) => {
	var i = t, s = function() {
		var t = {
			LTS: "h:mm:ss A",
			LT: "h:mm A",
			L: "MM/DD/YYYY",
			LL: "MMMM D, YYYY",
			LLL: "MMMM D, YYYY h:mm A",
			LLLL: "dddd, MMMM D, YYYY h:mm A"
		}, e = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, i = /\d/, s = /\d\d/, n = /\d\d?/, r = /\d*[^-_:/,()\s\d]+/, a = {}, o = F(function(t) {
			return (t *= 1) + (t > 68 ? 1900 : 2e3);
		}, "a"), l = F(function(t) {
			return function(e) {
				this[t] = +e;
			};
		}, "f"), c = [/[+-]\d\d:?(\d\d)?|Z/, function(t) {
			(this.zone || (this.zone = {})).offset = function(t) {
				if (!t || "Z" === t) return 0;
				var e = t.match(/([+-]|\d\d)/g), i = 60 * e[1] + (+e[2] || 0);
				return 0 === i ? 0 : "+" === e[0] ? -i : i;
			}(t);
		}], d = F(function(t) {
			var e = a[t];
			return e && (e.indexOf ? e : e.s.concat(e.f));
		}, "u"), u = F(function(t, e) {
			var i, s = a.meridiem;
			if (s) {
				for (var n = 1; n <= 24; n += 1) if (t.indexOf(s(n, 0, e)) > -1) {
					i = n > 12;
					break;
				}
			} else i = t === (e ? "pm" : "PM");
			return i;
		}, "d"), h = {
			A: [r, function(t) {
				this.afternoon = u(t, !1);
			}],
			a: [r, function(t) {
				this.afternoon = u(t, !0);
			}],
			Q: [i, function(t) {
				this.month = 3 * (t - 1) + 1;
			}],
			S: [i, function(t) {
				this.milliseconds = 100 * t;
			}],
			SS: [s, function(t) {
				this.milliseconds = 10 * t;
			}],
			SSS: [/\d{3}/, function(t) {
				this.milliseconds = +t;
			}],
			s: [n, l("seconds")],
			ss: [n, l("seconds")],
			m: [n, l("minutes")],
			mm: [n, l("minutes")],
			H: [n, l("hours")],
			h: [n, l("hours")],
			HH: [n, l("hours")],
			hh: [n, l("hours")],
			D: [n, l("day")],
			DD: [s, l("day")],
			Do: [r, function(t) {
				var e = a.ordinal;
				if (this.day = t.match(/\d+/)[0], e) for (var i = 1; i <= 31; i += 1) e(i).replace(/\[|\]/g, "") === t && (this.day = i);
			}],
			w: [n, l("week")],
			ww: [s, l("week")],
			M: [n, l("month")],
			MM: [s, l("month")],
			MMM: [r, function(t) {
				var e = d("months"), i = (d("monthsShort") || e.map(function(t) {
					return t.slice(0, 3);
				})).indexOf(t) + 1;
				if (i < 1) throw Error();
				this.month = i % 12 || i;
			}],
			MMMM: [r, function(t) {
				var e = d("months").indexOf(t) + 1;
				if (e < 1) throw Error();
				this.month = e % 12 || e;
			}],
			Y: [/[+-]?\d+/, l("year")],
			YY: [s, function(t) {
				this.year = o(t);
			}],
			YYYY: [/\d{4}/, l("year")],
			Z: c,
			ZZ: c
		};
		function f(i) {
			for (var s = i, n = a && a.formats, r = (i = s.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(e, i, s) {
				var r = s && s.toUpperCase();
				return i || n[s] || t[s] || n[r].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(t, e, i) {
					return e || i.slice(1);
				});
			})).match(e), o = r.length, l = 0; l < o; l += 1) {
				var c = r[l], d = h[c], u = d && d[0], f = d && d[1];
				r[l] = f ? {
					regex: u,
					parser: f
				} : c.replace(/^\[|\]$/g, "");
			}
			return function(t) {
				for (var e = {}, i = 0, s = 0; i < o; i += 1) {
					var n = r[i];
					if ("string" == typeof n) s += n.length;
					else {
						var a = n.regex, l = n.parser, c = t.slice(s), d = a.exec(c)[0];
						l.call(e, d), t = t.replace(d, "");
					}
				}
				return function(t) {
					var e = t.afternoon;
					if (void 0 !== e) {
						var i = t.hours;
						e ? i < 12 && (t.hours += 12) : 12 === i && (t.hours = 0), delete t.afternoon;
					}
				}(e), e;
			};
		}
		return F(f, "l"), function(t, e, i) {
			i.p.customParseFormat = !0, t && t.parseTwoDigitYear && (o = t.parseTwoDigitYear);
			var s = e.prototype, n = s.parse;
			s.parse = function(t) {
				var e = t.date, s = t.utc, r = t.args;
				this.$u = s;
				var o = r[1];
				if ("string" == typeof o) {
					var l = !0 === r[2], c = !0 === r[3], d = r[2];
					c && (d = r[2]), a = this.$locale(), !l && d && (a = i.Ls[d]), this.$d = function(t, e, i, s) {
						try {
							if (["x", "X"].indexOf(e) > -1) return /* @__PURE__ */ new Date(("X" === e ? 1e3 : 1) * t);
							var n = f(e)(t), r = n.year, a = n.month, o = n.day, l = n.hours, c = n.minutes, d = n.seconds, u = n.milliseconds, h = n.zone, y = n.week, k = /* @__PURE__ */ new Date(), m = o || (r || a ? 1 : k.getDate()), p = r || k.getFullYear(), g = 0;
							r && !a || (g = a > 0 ? a - 1 : k.getMonth());
							var b, T = l || 0, v = c || 0, x = d || 0, w = u || 0;
							return h ? new Date(Date.UTC(p, g, m, T, v, x, w + 60 * h.offset * 1e3)) : i ? new Date(Date.UTC(p, g, m, T, v, x, w)) : (b = new Date(p, g, m, T, v, x, w), y && (b = s(b).week(y).toDate()), b);
						} catch {
							return /* @__PURE__ */ new Date("");
						}
					}(e, o, s, i), this.init(), d && !0 !== d && (this.$L = this.locale(d).$L), (l || c) && e != this.format(o) && (this.$d = /* @__PURE__ */ new Date("")), a = {};
				} else if (o instanceof Array) for (var u = o.length, h = 1; h <= u; h += 1) {
					r[1] = o[h - 1];
					var y = i.apply(this, r);
					if (y.isValid()) {
						this.$d = y.$d, this.$L = y.$L, this.init();
						break;
					}
					h === u && (this.$d = /* @__PURE__ */ new Date(""));
				}
				else n.call(this, t);
			};
		};
	};
	"object" == typeof t && "u" > typeof e ? e.exports = s() : "function" == typeof define && define.amd ? define(s) : (i = "u" > typeof globalThis ? globalThis : i || self).dayjs_plugin_customParseFormat = s();
}), j = I((t, e) => {
	var i = t, s = function() {
		return function(t, e) {
			var i = e.prototype, s = i.format;
			i.format = function(t) {
				var e = this, i = this.$locale();
				if (!this.isValid()) return s.bind(this)(t);
				var n = this.$utils(), r = (t || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(t) {
					switch (t) {
						case "Q": return Math.ceil((e.$M + 1) / 3);
						case "Do": return i.ordinal(e.$D);
						case "gggg": return e.weekYear();
						case "GGGG": return e.isoWeekYear();
						case "wo": return i.ordinal(e.week(), "W");
						case "w":
						case "ww": return n.s(e.week(), "w" === t ? 1 : 2, "0");
						case "W":
						case "WW": return n.s(e.isoWeek(), "W" === t ? 1 : 2, "0");
						case "k":
						case "kk": return n.s(String(0 === e.$H ? 24 : e.$H), "k" === t ? 1 : 2, "0");
						case "X": return Math.floor(e.$d.getTime() / 1e3);
						case "x": return e.$d.getTime();
						case "z": return "[" + e.offsetName() + "]";
						case "zzz": return "[" + e.offsetName("long") + "]";
						default: return t;
					}
				});
				return s.bind(this)(r);
			};
		};
	};
	"object" == typeof t && "u" > typeof e ? e.exports = s() : "function" == typeof define && define.amd ? define(s) : (i = "u" > typeof globalThis ? globalThis : i || self).dayjs_plugin_advancedFormat = s();
}), N = function() {
	var t = F(function(t, e, i, s) {
		for (i = i || {}, s = t.length; s--; i[t[s]] = e);
		return i;
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
	], i = [1, 26], s = [1, 27], n = [1, 28], r = [1, 29], a = [1, 30], o = [1, 31], l = [1, 32], c = [1, 33], d = [1, 34], u = [1, 9], h = [1, 10], f = [1, 11], y = [1, 12], k = [1, 13], m = [1, 14], p = [1, 15], g = [1, 16], b = [1, 19], T = [1, 20], v = [1, 21], x = [1, 22], w = [1, 23], _ = [1, 25], D = [1, 35], $ = {
		trace: F(function() {}, "trace"),
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
			[3, 3],
			[5, 0],
			[5, 2],
			[7, 2],
			[7, 1],
			[7, 1],
			[7, 1],
			[11, 1],
			[11, 1],
			[11, 1],
			[11, 1],
			[11, 1],
			[11, 1],
			[11, 1],
			[19, 1],
			[19, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 2],
			[9, 2],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 2],
			[37, 2],
			[37, 3],
			[37, 3],
			[37, 4],
			[37, 3],
			[37, 4],
			[37, 2],
			[44, 2],
			[44, 3],
			[44, 3],
			[44, 4],
			[44, 3],
			[44, 4],
			[44, 2]
		],
		performAction: F(function(t, e, i, s, n, r, a) {
			var o = r.length - 1;
			switch (n) {
				case 1: return r[o - 1];
				case 2:
				case 6:
				case 7:
					this.$ = [];
					break;
				case 3:
					r[o - 1].push(r[o]), this.$ = r[o - 1];
					break;
				case 4:
				case 5:
					this.$ = r[o];
					break;
				case 8:
					s.setWeekday("monday");
					break;
				case 9:
					s.setWeekday("tuesday");
					break;
				case 10:
					s.setWeekday("wednesday");
					break;
				case 11:
					s.setWeekday("thursday");
					break;
				case 12:
					s.setWeekday("friday");
					break;
				case 13:
					s.setWeekday("saturday");
					break;
				case 14:
					s.setWeekday("sunday");
					break;
				case 15:
					s.setWeekend("friday");
					break;
				case 16:
					s.setWeekend("saturday");
					break;
				case 17:
					s.setDateFormat(r[o].substr(11)), this.$ = r[o].substr(11);
					break;
				case 18:
					s.enableInclusiveEndDates(), this.$ = r[o].substr(18);
					break;
				case 19:
					s.TopAxis(), this.$ = r[o].substr(8);
					break;
				case 20:
					s.setAxisFormat(r[o].substr(11)), this.$ = r[o].substr(11);
					break;
				case 21:
					s.setTickInterval(r[o].substr(13)), this.$ = r[o].substr(13);
					break;
				case 22:
					s.setExcludes(r[o].substr(9)), this.$ = r[o].substr(9);
					break;
				case 23:
					s.setIncludes(r[o].substr(9)), this.$ = r[o].substr(9);
					break;
				case 24:
					s.setTodayMarker(r[o].substr(12)), this.$ = r[o].substr(12);
					break;
				case 27:
					s.setDiagramTitle(r[o].substr(6)), this.$ = r[o].substr(6);
					break;
				case 28:
					this.$ = r[o].trim(), s.setAccTitle(this.$);
					break;
				case 29:
				case 30:
					this.$ = r[o].trim(), s.setAccDescription(this.$);
					break;
				case 31:
					s.addSection(r[o].substr(8)), this.$ = r[o].substr(8);
					break;
				case 33:
					s.addTask(r[o - 1], r[o]), this.$ = "task";
					break;
				case 34:
					this.$ = r[o - 1], s.setClickEvent(r[o - 1], r[o], null);
					break;
				case 35:
					this.$ = r[o - 2], s.setClickEvent(r[o - 2], r[o - 1], r[o]);
					break;
				case 36:
					this.$ = r[o - 2], s.setClickEvent(r[o - 2], r[o - 1], null), s.setLink(r[o - 2], r[o]);
					break;
				case 37:
					this.$ = r[o - 3], s.setClickEvent(r[o - 3], r[o - 2], r[o - 1]), s.setLink(r[o - 3], r[o]);
					break;
				case 38:
					this.$ = r[o - 2], s.setClickEvent(r[o - 2], r[o], null), s.setLink(r[o - 2], r[o - 1]);
					break;
				case 39:
					this.$ = r[o - 3], s.setClickEvent(r[o - 3], r[o - 1], r[o]), s.setLink(r[o - 3], r[o - 2]);
					break;
				case 40:
					this.$ = r[o - 1], s.setLink(r[o - 1], r[o]);
					break;
				case 41:
				case 47:
					this.$ = r[o - 1] + " " + r[o];
					break;
				case 42:
				case 43:
				case 45:
					this.$ = r[o - 2] + " " + r[o - 1] + " " + r[o];
					break;
				case 44:
				case 46: this.$ = r[o - 3] + " " + r[o - 2] + " " + r[o - 1] + " " + r[o];
			}
		}, "anonymous"),
		table: [
			{
				3: 1,
				4: [1, 2]
			},
			{ 1: [3] },
			t(e, [2, 2], { 5: 3 }),
			{
				6: [1, 4],
				7: 5,
				8: [1, 6],
				9: 7,
				10: [1, 8],
				11: 17,
				12: i,
				13: s,
				14: n,
				15: r,
				16: a,
				17: o,
				18: l,
				19: 18,
				20: c,
				21: d,
				22: u,
				23: h,
				24: f,
				25: y,
				26: k,
				27: m,
				28: p,
				29: g,
				30: b,
				31: T,
				33: v,
				35: x,
				36: w,
				37: 24,
				38: _,
				40: D
			},
			t(e, [2, 7], { 1: [2, 1] }),
			t(e, [2, 3]),
			{
				9: 36,
				11: 17,
				12: i,
				13: s,
				14: n,
				15: r,
				16: a,
				17: o,
				18: l,
				19: 18,
				20: c,
				21: d,
				22: u,
				23: h,
				24: f,
				25: y,
				26: k,
				27: m,
				28: p,
				29: g,
				30: b,
				31: T,
				33: v,
				35: x,
				36: w,
				37: 24,
				38: _,
				40: D
			},
			t(e, [2, 5]),
			t(e, [2, 6]),
			t(e, [2, 17]),
			t(e, [2, 18]),
			t(e, [2, 19]),
			t(e, [2, 20]),
			t(e, [2, 21]),
			t(e, [2, 22]),
			t(e, [2, 23]),
			t(e, [2, 24]),
			t(e, [2, 25]),
			t(e, [2, 26]),
			t(e, [2, 27]),
			{ 32: [1, 37] },
			{ 34: [1, 38] },
			t(e, [2, 30]),
			t(e, [2, 31]),
			t(e, [2, 32]),
			{ 39: [1, 39] },
			t(e, [2, 8]),
			t(e, [2, 9]),
			t(e, [2, 10]),
			t(e, [2, 11]),
			t(e, [2, 12]),
			t(e, [2, 13]),
			t(e, [2, 14]),
			t(e, [2, 15]),
			t(e, [2, 16]),
			{
				41: [1, 40],
				43: [1, 41]
			},
			t(e, [2, 4]),
			t(e, [2, 28]),
			t(e, [2, 29]),
			t(e, [2, 33]),
			t(e, [2, 34], {
				42: [1, 42],
				43: [1, 43]
			}),
			t(e, [2, 40], { 41: [1, 44] }),
			t(e, [2, 35], { 43: [1, 45] }),
			t(e, [2, 36]),
			t(e, [2, 38], { 42: [1, 46] }),
			t(e, [2, 37]),
			t(e, [2, 39])
		],
		defaultActions: {},
		parseError: F(function(t, e) {
			if (e.recoverable) this.trace(t);
			else {
				var i = Error(t);
				throw i.hash = e, i;
			}
		}, "parseError"),
		parse: F(function(t) {
			var e = this, i = [0], s = [], n = [null], r = [], a = this.table, o = "", l = 0, c = 0, d = 0, u = r.slice.call(arguments, 1), h = Object.create(this.lexer), f = {};
			for (var y in this.yy) Object.prototype.hasOwnProperty.call(this.yy, y) && (f[y] = this.yy[y]);
			h.setInput(t, f), f.lexer = h, f.parser = this, typeof h.yylloc > "u" && (h.yylloc = {});
			var k = h.yylloc;
			r.push(k);
			var m = h.options && h.options.ranges;
			function p() {
				var t;
				return "number" != typeof (t = s.pop() || h.lex() || 1) && (t instanceof Array && (t = (s = t).pop()), t = e.symbols_[t] || t), t;
			}
			"function" == typeof f.parseError ? this.parseError = f.parseError : this.parseError = Object.getPrototypeOf(this).parseError, F(function(t) {
				i.length = i.length - 2 * t, n.length = n.length - t, r.length = r.length - t;
			}, "popStack"), F(p, "lex");
			for (var g, b, T, v, x, w, _, D, $, S = {};;) {
				if (T = i[i.length - 1], this.defaultActions[T] ? v = this.defaultActions[T] : ((null === g || typeof g > "u") && (g = p()), v = a[T] && a[T][g]), typeof v > "u" || !v.length || !v[0]) {
					var C = "";
					for (w in $ = [], a[T]) this.terminals_[w] && w > 2 && $.push("'" + this.terminals_[w] + "'");
					C = h.showPosition ? "Parse error on line " + (l + 1) + `:
` + h.showPosition() + `
Expecting ` + $.join(", ") + ", got '" + (this.terminals_[g] || g) + "'" : "Parse error on line " + (l + 1) + ": Unexpected " + (1 == g ? "end of input" : "'" + (this.terminals_[g] || g) + "'"), this.parseError(C, {
						text: h.match,
						token: this.terminals_[g] || g,
						line: h.yylineno,
						loc: k,
						expected: $
					});
				}
				if (v[0] instanceof Array && v.length > 1) throw Error("Parse Error: multiple actions possible at state: " + T + ", token: " + g);
				switch (v[0]) {
					case 1:
						i.push(g), n.push(h.yytext), r.push(h.yylloc), i.push(v[1]), g = null, b ? (g = b, b = null) : (c = h.yyleng, o = h.yytext, l = h.yylineno, k = h.yylloc, d > 0 && d--);
						break;
					case 2:
						if (_ = this.productions_[v[1]][1], S.$ = n[n.length - _], S._$ = {
							first_line: r[r.length - (_ || 1)].first_line,
							last_line: r[r.length - 1].last_line,
							first_column: r[r.length - (_ || 1)].first_column,
							last_column: r[r.length - 1].last_column
						}, m && (S._$.range = [r[r.length - (_ || 1)].range[0], r[r.length - 1].range[1]]), "u" > typeof (x = this.performAction.apply(S, [
							o,
							c,
							l,
							f,
							v[1],
							n,
							r
						].concat(u)))) return x;
						_ && (i = i.slice(0, -1 * _ * 2), n = n.slice(0, -1 * _), r = r.slice(0, -1 * _)), i.push(this.productions_[v[1]][0]), n.push(S.$), r.push(S._$), D = a[i[i.length - 2]][i[i.length - 1]], i.push(D);
						break;
					case 3: return !0;
				}
			}
			return !0;
		}, "parse")
	};
	function S() {
		this.yy = {};
	}
	return $.lexer = {
		EOF: 1,
		parseError: F(function(t, e) {
			if (this.yy.parser) this.yy.parser.parseError(t, e);
			else throw Error(t);
		}, "parseError"),
		setInput: F(function(t, e) {
			return this.yy = e || this.yy || {}, this._input = t, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
				first_line: 1,
				first_column: 0,
				last_line: 1,
				last_column: 0
			}, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
		}, "setInput"),
		input: F(function() {
			var t = this._input[0];
			return this.yytext += t, this.yyleng++, this.offset++, this.match += t, this.matched += t, t.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), t;
		}, "input"),
		unput: F(function(t) {
			var e = t.length, i = t.split(/(?:\r\n?|\n)/g);
			this._input = t + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - e), this.offset -= e;
			var s = this.match.split(/(?:\r\n?|\n)/g);
			this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), i.length - 1 && (this.yylineno -= i.length - 1);
			var n = this.yylloc.range;
			return this.yylloc = {
				first_line: this.yylloc.first_line,
				last_line: this.yylineno + 1,
				first_column: this.yylloc.first_column,
				last_column: i ? (i.length === s.length ? this.yylloc.first_column : 0) + s[s.length - i.length].length - i[0].length : this.yylloc.first_column - e
			}, this.options.ranges && (this.yylloc.range = [n[0], n[0] + this.yyleng - e]), this.yyleng = this.yytext.length, this;
		}, "unput"),
		more: F(function() {
			return this._more = !0, this;
		}, "more"),
		reject: F(function() {
			return this.options.backtrack_lexer ? (this._backtrack = !0, this) : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
				text: "",
				token: null,
				line: this.yylineno
			});
		}, "reject"),
		less: F(function(t) {
			this.unput(this.match.slice(t));
		}, "less"),
		pastInput: F(function() {
			var t = this.matched.substr(0, this.matched.length - this.match.length);
			return (t.length > 20 ? "..." : "") + t.substr(-20).replace(/\n/g, "");
		}, "pastInput"),
		upcomingInput: F(function() {
			var t = this.match;
			return t.length < 20 && (t += this._input.substr(0, 20 - t.length)), (t.substr(0, 20) + (t.length > 20 ? "..." : "")).replace(/\n/g, "");
		}, "upcomingInput"),
		showPosition: F(function() {
			var t = this.pastInput(), e = Array(t.length + 1).join("-");
			return t + this.upcomingInput() + `
` + e + "^";
		}, "showPosition"),
		test_match: F(function(t, e) {
			var i, s, n;
			if (this.options.backtrack_lexer && (n = {
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
				conditionStack: this.conditionStack.slice(0),
				done: this.done
			}, this.options.ranges && (n.yylloc.range = this.yylloc.range.slice(0))), (s = t[0].match(/(?:\r\n?|\n).*/g)) && (this.yylineno += s.length), this.yylloc = {
				first_line: this.yylloc.last_line,
				last_line: this.yylineno + 1,
				first_column: this.yylloc.last_column,
				last_column: s ? s[s.length - 1].length - s[s.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length
			}, this.yytext += t[0], this.match += t[0], this.matches = t, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(t[0].length), this.matched += t[0], i = this.performAction.call(this, this.yy, this, e, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), i) return i;
			if (this._backtrack) for (var r in n) this[r] = n[r];
			return !1;
		}, "test_match"),
		next: F(function() {
			if (this.done) return this.EOF;
			this._input || (this.done = !0), this._more || (this.yytext = "", this.match = "");
			for (var t, e, i, s, n = this._currentRules(), r = 0; r < n.length; r++) if ((i = this._input.match(this.rules[n[r]])) && (!e || i[0].length > e[0].length)) {
				if (e = i, s = r, this.options.backtrack_lexer) {
					if (!1 !== (t = this.test_match(i, n[r]))) return t;
					if (!this._backtrack) return !1;
					e = !1;
					continue;
				} else if (!this.options.flex) break;
			}
			return e ? !1 !== (t = this.test_match(e, n[s])) && t : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
				text: "",
				token: null,
				line: this.yylineno
			});
		}, "next"),
		lex: F(function() {
			return this.next() || this.lex();
		}, "lex"),
		begin: F(function(t) {
			this.conditionStack.push(t);
		}, "begin"),
		popState: F(function() {
			return this.conditionStack.length - 1 > 0 ? this.conditionStack.pop() : this.conditionStack[0];
		}, "popState"),
		_currentRules: F(function() {
			return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
		}, "_currentRules"),
		topState: F(function(t) {
			return (t = this.conditionStack.length - 1 - Math.abs(t || 0)) >= 0 ? this.conditionStack[t] : "INITIAL";
		}, "topState"),
		pushState: F(function(t) {
			this.begin(t);
		}, "pushState"),
		stateStackSize: F(function() {
			return this.conditionStack.length;
		}, "stateStackSize"),
		options: { "case-insensitive": !0 },
		performAction: F(function(t, e, i, s) {
			switch (i) {
				case 0: return this.begin("open_directive"), "open_directive";
				case 1: return this.begin("acc_title"), 31;
				case 2: return this.popState(), "acc_title_value";
				case 3: return this.begin("acc_descr"), 33;
				case 4: return this.popState(), "acc_descr_value";
				case 5:
					this.begin("acc_descr_multiline");
					break;
				case 6:
				case 15:
				case 18:
				case 21:
				case 24:
					this.popState();
					break;
				case 7: return "acc_descr_multiline_value";
				case 8:
				case 9:
				case 10:
				case 12:
				case 13: break;
				case 11: return 10;
				case 14:
					this.begin("href");
					break;
				case 16: return 43;
				case 17:
					this.begin("callbackname");
					break;
				case 19:
					this.popState(), this.begin("callbackargs");
					break;
				case 20: return 41;
				case 22: return 42;
				case 23:
					this.begin("click");
					break;
				case 25: return 40;
				case 26: return 4;
				case 27: return 22;
				case 28: return 23;
				case 29: return 24;
				case 30: return 25;
				case 31: return 26;
				case 32: return 28;
				case 33: return 27;
				case 34: return 29;
				case 35: return 12;
				case 36: return 13;
				case 37: return 14;
				case 38: return 15;
				case 39: return 16;
				case 40: return 17;
				case 41: return 18;
				case 42: return 20;
				case 43: return 21;
				case 44: return "date";
				case 45: return 30;
				case 46: return "accDescription";
				case 47: return 36;
				case 48: return 38;
				case 49: return 39;
				case 50: return ":";
				case 51: return 6;
				case 52: return "INVALID";
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
				rules: [6, 7],
				inclusive: !1
			},
			acc_descr: {
				rules: [4],
				inclusive: !1
			},
			acc_title: {
				rules: [2],
				inclusive: !1
			},
			callbackargs: {
				rules: [21, 22],
				inclusive: !1
			},
			callbackname: {
				rules: [
					18,
					19,
					20
				],
				inclusive: !1
			},
			href: {
				rules: [15, 16],
				inclusive: !1
			},
			click: {
				rules: [24, 25],
				inclusive: !1
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
				inclusive: !0
			}
		}
	}, F(S, "Parser"), S.prototype = $, $.Parser = S, new S();
}();
N.parser = N;
var H = W(P(), 1), G = W(C(), 1), R = W(z(), 1), U = W(B(), 1), V = W(j(), 1);
G.default.extend(R.default), G.default.extend(U.default), G.default.extend(V.default);
var Z, q, X, Q = {
	friday: 5,
	saturday: 6
}, J = "", K = "", tt = "", te = [], ti = [], ts = /* @__PURE__ */ new Map(), tn = [], tr = [], ta = "", to = "", tl = [
	"active",
	"done",
	"crit",
	"milestone",
	"vert"
], tc = [], td = !1, tu = !1, th = "sunday", tf = "saturday", ty = 0, tk = F(function() {
	tn = [], tr = [], ta = "", tc = [], tV = 0, q = void 0, X = void 0, tQ = [], J = "", K = "", to = "", Z = void 0, tt = "", te = [], ti = [], td = !1, tu = !1, ty = 0, ts = /* @__PURE__ */ new Map(), f(), th = "sunday", tf = "saturday";
}, "clear"), tm = F(function(t) {
	K = t;
}, "setAxisFormat"), tp = F(function() {
	return K;
}, "getAxisFormat"), tg = F(function(t) {
	Z = t;
}, "setTickInterval"), tb = F(function() {
	return Z;
}, "getTickInterval"), tT = F(function(t) {
	tt = t;
}, "setTodayMarker"), tv = F(function() {
	return tt;
}, "getTodayMarker"), tx = F(function(t) {
	J = t;
}, "setDateFormat"), tw = F(function() {
	td = !0;
}, "enableInclusiveEndDates"), t_ = F(function() {
	return td;
}, "endDatesAreInclusive"), tD = F(function() {
	tu = !0;
}, "enableTopAxis"), t$ = F(function() {
	return tu;
}, "topAxisEnabled"), tS = F(function(t) {
	to = t;
}, "setDisplayMode"), tC = F(function() {
	return to;
}, "getDisplayMode"), tE = F(function() {
	return J;
}, "getDateFormat"), tM = F(function(t) {
	te = t.toLowerCase().split(/[\s,]+/);
}, "setIncludes"), tA = F(function() {
	return te;
}, "getIncludes"), tY = F(function(t) {
	ti = t.toLowerCase().split(/[\s,]+/);
}, "setExcludes"), tL = F(function() {
	return ti;
}, "getExcludes"), tI = F(function() {
	return ts;
}, "getLinks"), tF = F(function(t) {
	ta = t, tn.push(t);
}, "addSection"), tW = F(function() {
	return tn;
}, "getSections"), tO = F(function() {
	let t = t2(), e = 0;
	for (; !t && e < 10;) t = t2(), e++;
	return tr = tQ;
}, "getTasks"), tP = F(function(t, e, i, s) {
	let n = t.format(e.trim()), r = t.format("YYYY-MM-DD");
	return !(s.includes(n) || s.includes(r)) && (!!(i.includes("weekends") && (t.isoWeekday() === Q[tf] || t.isoWeekday() === Q[tf] + 1) || i.includes(t.format("dddd").toLowerCase())) || i.includes(n) || i.includes(r));
}, "isInvalidDate"), tz = F(function(t) {
	th = t;
}, "setWeekday"), tB = F(function() {
	return th;
}, "getWeekday"), tj = F(function(t) {
	tf = t;
}, "setWeekend"), tN = F(function(t, e, i, s) {
	if (!i.length || t.manualEndTime) return;
	let [r, a] = tH((t.startTime instanceof Date ? (0, G.default)(t.startTime) : (0, G.default)(t.startTime, e, !0)).add(1, "d"), t.endTime instanceof Date ? (0, G.default)(t.endTime) : (0, G.default)(t.endTime, e, !0), e, i, s);
	t.endTime = r.toDate(), t.renderEndTime = a;
}, "checkTaskDates"), tH = F(function(t, e, i, s, n) {
	let r = !1, a = null;
	for (; t <= e;) r || (a = e.toDate()), (r = tP(t, i, s, n)) && (e = e.add(1, "d")), t = t.add(1, "d");
	return [e, a];
}, "fixTaskDates"), tG = F(function(e, i, s) {
	if (s = s.trim(), ("x" === i.trim() || "X" === i.trim()) && /^\d+$/.test(s)) return new Date(Number(s));
	let n = /^after\s+(?<ids>[\d\w- ]+)/.exec(s);
	if (null !== n) {
		let t = null;
		for (let e of n.groups.ids.split(" ")) {
			let i = t1(e);
			void 0 !== i && (!t || i.endTime > t.endTime) && (t = i);
		}
		if (t) return t.endTime;
		let e = /* @__PURE__ */ new Date();
		return e.setHours(0, 0, 0, 0), e;
	}
	let r = (0, G.default)(s, i.trim(), !0);
	if (r.isValid()) return r.toDate();
	{
		t.debug("Invalid date:" + s), t.debug("With date format:" + i.trim());
		let e = new Date(s);
		if (void 0 === e || isNaN(e.getTime()) || -1e4 > e.getFullYear() || e.getFullYear() > 1e4) throw Error("Invalid date:" + s);
		return e;
	}
}, "getStartDate"), tR = F(function(t) {
	let e = /^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());
	return null !== e ? [Number.parseFloat(e[1]), e[2]] : [NaN, "ms"];
}, "parseDuration"), tU = F(function(t, e, i, s = !1) {
	i = i.trim();
	let n = /^until\s+(?<ids>[\d\w- ]+)/.exec(i);
	if (null !== n) {
		let t = null;
		for (let e of n.groups.ids.split(" ")) {
			let i = t1(e);
			void 0 !== i && (!t || i.startTime < t.startTime) && (t = i);
		}
		if (t) return t.startTime;
		let e = /* @__PURE__ */ new Date();
		return e.setHours(0, 0, 0, 0), e;
	}
	let r = (0, G.default)(i, e.trim(), !0);
	if (r.isValid()) return s && (r = r.add(1, "d")), r.toDate();
	let a = (0, G.default)(t), [o, l] = tR(i);
	if (!Number.isNaN(o)) {
		let t = a.add(o, l);
		t.isValid() && (a = t);
	}
	return a.toDate();
}, "getEndDate"), tV = 0, tZ = F(function(t) {
	return void 0 === t ? "task" + (tV += 1) : t;
}, "parseId"), tq = F(function(t, e) {
	let i = (":" === e.substr(0, 1) ? e.substr(1, e.length) : e).split(","), s = {};
	et(i, s, tl);
	for (let t = 0; t < i.length; t++) i[t] = i[t].trim();
	let n = "";
	switch (i.length) {
		case 1:
			s.id = tZ(), s.startTime = t.endTime, n = i[0];
			break;
		case 2:
			s.id = tZ(), s.startTime = tG(void 0, J, i[0]), n = i[1];
			break;
		case 3: s.id = tZ(i[0]), s.startTime = tG(void 0, J, i[1]), n = i[2];
	}
	return n && (s.endTime = tU(s.startTime, J, n, td), s.manualEndTime = (0, G.default)(n, "YYYY-MM-DD", !0).isValid(), tN(s, J, ti, te)), s;
}, "compileData"), tX = F(function(t, e) {
	let i = (":" === e.substr(0, 1) ? e.substr(1, e.length) : e).split(","), s = {};
	et(i, s, tl);
	for (let t = 0; t < i.length; t++) i[t] = i[t].trim();
	switch (i.length) {
		case 1:
			s.id = tZ(), s.startTime = {
				type: "prevTaskEnd",
				id: t
			}, s.endTime = { data: i[0] };
			break;
		case 2:
			s.id = tZ(), s.startTime = {
				type: "getStartDate",
				startData: i[0]
			}, s.endTime = { data: i[1] };
			break;
		case 3: s.id = tZ(i[0]), s.startTime = {
			type: "getStartDate",
			startData: i[1]
		}, s.endTime = { data: i[2] };
	}
	return s;
}, "parseData"), tQ = [], tJ = {}, tK = F(function(t, e) {
	let i = {
		section: ta,
		type: ta,
		processed: !1,
		manualEndTime: !1,
		renderEndTime: null,
		raw: { data: e },
		task: t,
		classes: []
	}, s = tX(X, e);
	i.raw.startTime = s.startTime, i.raw.endTime = s.endTime, i.id = s.id, i.prevTaskId = X, i.active = s.active, i.done = s.done, i.crit = s.crit, i.milestone = s.milestone, i.vert = s.vert, i.order = ty, ty++;
	let n = tQ.push(i);
	X = i.id, tJ[i.id] = n - 1;
}, "addTask"), t1 = F(function(t) {
	return tQ[tJ[t]];
}, "findTaskById"), t0 = F(function(t, e) {
	let i = {
		section: ta,
		type: ta,
		description: t,
		task: t,
		classes: []
	}, s = tq(q, e);
	i.startTime = s.startTime, i.endTime = s.endTime, i.id = s.id, i.active = s.active, i.done = s.done, i.crit = s.crit, i.milestone = s.milestone, i.vert = s.vert, q = i, tr.push(i);
}, "addTaskOrg"), t2 = F(function() {
	let t = F(function(t) {
		let e = tQ[t], i = "";
		switch (tQ[t].raw.startTime.type) {
			case "prevTaskEnd":
				e.startTime = t1(e.prevTaskId).endTime;
				break;
			case "getStartDate": (i = tG(void 0, J, tQ[t].raw.startTime.startData)) && (tQ[t].startTime = i);
		}
		return tQ[t].startTime && (tQ[t].endTime = tU(tQ[t].startTime, J, tQ[t].raw.endTime.data, td), tQ[t].endTime && (tQ[t].processed = !0, tQ[t].manualEndTime = (0, G.default)(tQ[t].raw.endTime.data, "YYYY-MM-DD", !0).isValid(), tN(tQ[t], J, ti, te))), tQ[t].processed;
	}, "compileTask"), e = !0;
	for (let [i, s] of tQ.entries()) t(i), e = e && s.processed;
	return e;
}, "compileTasks"), t3 = F(function(t, e) {
	let i = e;
	"loose" !== l().securityLevel && (i = (0, H.sanitizeUrl)(e)), t.split(",").forEach(function(t) {
		void 0 !== t1(t) && (t9(t, () => {
			window.open(i, "_self");
		}), ts.set(t, i));
	}), t4(t, "clickable");
}, "setLink"), t4 = F(function(t, e) {
	t.split(",").forEach(function(t) {
		let i = t1(t);
		void 0 !== i && i.classes.push(e);
	});
}, "setClass"), t5 = F(function(t, e, i) {
	if ("loose" !== l().securityLevel || void 0 === e) return;
	let s = [];
	if ("string" == typeof i) {
		s = i.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
		for (let t = 0; t < s.length; t++) {
			let e = s[t].trim();
			e.startsWith("\"") && e.endsWith("\"") && (e = e.substr(1, e.length - 2)), s[t] = e;
		}
	}
	0 === s.length && s.push(t), void 0 !== t1(t) && t9(t, () => {
		O.runFunc(e, ...s);
	});
}, "setClickFun"), t9 = F(function(t, e) {
	tc.push(function() {
		let i = document.querySelector(`[id="${t}"]`);
		null !== i && i.addEventListener("click", function() {
			e();
		});
	}, function() {
		let i = document.querySelector(`[id="${t}-text"]`);
		null !== i && i.addEventListener("click", function() {
			e();
		});
	});
}, "pushFun"), t7 = F(function(t, e, i) {
	t.split(",").forEach(function(t) {
		t5(t, e, i);
	}), t4(t, "clickable");
}, "setClickEvent"), t8 = F(function(t) {
	tc.forEach(function(e) {
		e(t);
	});
}, "bindFunctions"), t6 = {
	getConfig: F(() => l().gantt, "getConfig"),
	clear: tk,
	setDateFormat: tx,
	getDateFormat: tE,
	enableInclusiveEndDates: tw,
	endDatesAreInclusive: t_,
	enableTopAxis: tD,
	topAxisEnabled: t$,
	setAxisFormat: tm,
	getAxisFormat: tp,
	setTickInterval: tg,
	getTickInterval: tb,
	setTodayMarker: tT,
	getTodayMarker: tv,
	setAccTitle: v,
	getAccTitle: e,
	setDiagramTitle: r,
	getDiagramTitle: w,
	setDisplayMode: tS,
	getDisplayMode: tC,
	setAccDescription: b,
	getAccDescription: $,
	addSection: tF,
	getSections: tW,
	getTasks: tO,
	addTask: tK,
	findTaskById: t1,
	addTaskOrg: t0,
	setIncludes: tM,
	getIncludes: tA,
	setExcludes: tY,
	getExcludes: tL,
	setClickEvent: t7,
	setLink: t3,
	getLinks: tI,
	bindFunctions: t8,
	parseDuration: tR,
	isInvalidDate: tP,
	setWeekday: tz,
	getWeekday: tB,
	setWeekend: tj
};
function et(t, e, i) {
	let s = !0;
	for (; s;) s = !1, i.forEach(function(i) {
		let n = RegExp("^\\s*" + i + "\\s*$");
		t[0].match(n) && (e[i] = !0, t.shift(1), s = !0);
	});
}
F(et, "getTaskTags");
var ee, ei = W(C(), 1), es = F(function() {
	t.debug("Something is calling, setConf, remove the call");
}, "setConf"), en = {
	monday: Y,
	tuesday: T,
	wednesday: o,
	thursday: S,
	friday: h,
	saturday: s,
	sunday: A
}, er = F((t, e) => {
	let i = [...t].map(() => -Infinity), s = [...t].sort((t, e) => t.startTime - e.startTime || t.order - e.order), n = 0;
	for (let t of s) for (let s = 0; s < i.length; s++) if (t.startTime >= i[s]) {
		i[s] = t.endTime, t.order = s + e, s > n && (n = s);
		break;
	}
	return n;
}, "getMaxIntersections"), ea = {
	parser: N,
	db: t6,
	renderer: {
		setConf: es,
		draw: F(function(e, s, r, o) {
			let h = l().gantt, f = l().securityLevel, b;
			"sandbox" === f && (b = E("#i" + s));
			let T = "sandbox" === f ? E(b.nodes()[0].contentDocument.body) : E("body"), v = "sandbox" === f ? b.nodes()[0].contentDocument : document, w = v.getElementById(s);
			void 0 === (ee = w.parentElement.offsetWidth) && (ee = 1200), void 0 !== h.useWidth && (ee = h.useWidth);
			let $ = o.db.getTasks(), S = [];
			for (let t of $) S.push(t.type);
			S = H(S);
			let C = {}, A = 2 * h.topPadding;
			if ("compact" === o.db.getDisplayMode() || "compact" === h.displayMode) {
				let t = {};
				for (let e of $) void 0 === t[e.section] ? t[e.section] = [e] : t[e.section].push(e);
				let e = 0;
				for (let i of Object.keys(t)) {
					let s = er(t[i], e) + 1;
					e += s, A += s * (h.barHeight + h.barGap), C[i] = s;
				}
			} else for (let t of (A += $.length * (h.barHeight + h.barGap), S)) C[t] = $.filter((e) => e.type === t).length;
			w.setAttribute("viewBox", "0 0 " + ee + " " + A);
			let Y = T.select(`[id="${s}"]`), I = D().domain([n($, function(t) {
				return t.startTime;
			}), L($, function(t) {
				return t.endTime;
			})]).rangeRound([0, ee - h.leftPadding - h.rightPadding]);
			function W(t, e) {
				let i = t.startTime, s = e.startTime, n = 0;
				return i > s ? n = 1 : i < s && (n = -1), n;
			}
			function O(t, e, i) {
				let s = h.barHeight, n = s + h.barGap, r = h.topPadding, l = h.leftPadding, c = k().domain([0, S.length]).range(["#00B9FA", "#F95002"]).interpolate(a);
				z(n, r, l, e, i, t, o.db.getExcludes(), o.db.getIncludes()), B(l, r, e, i), P(t, n, r, l, s, c, e, i), j(n, r, l, s, c), N(l, r, e, i);
			}
			function P(t, e, i, n, r, a, c) {
				t.sort((t, e) => t.vert === e.vert ? 0 : t.vert ? 1 : -1);
				let d = [...new Set(t.map((t) => t.order))].map((e) => t.find((t) => t.order === e));
				Y.append("g").selectAll("rect").data(d).enter().append("rect").attr("x", 0).attr("y", function(t, s) {
					return t.order * e + i - 2;
				}).attr("width", function() {
					return c - h.rightPadding / 2;
				}).attr("height", e).attr("class", function(t) {
					for (let [e, i] of S.entries()) if (t.type === i) return "section section" + e % h.numberSectionStyles;
					return "section section0";
				}).enter();
				let u = Y.append("g").selectAll("rect").data(t).enter(), f = o.db.getLinks();
				if (u.append("rect").attr("id", function(t) {
					return t.id;
				}).attr("rx", 3).attr("ry", 3).attr("x", function(t) {
					return t.milestone ? I(t.startTime) + n + .5 * (I(t.endTime) - I(t.startTime)) - .5 * r : I(t.startTime) + n;
				}).attr("y", function(t, s) {
					return s = t.order, t.vert ? h.gridLineStartPadding : s * e + i;
				}).attr("width", function(t) {
					return t.milestone ? r : t.vert ? .08 * r : I(t.renderEndTime || t.endTime) - I(t.startTime);
				}).attr("height", function(t) {
					return t.vert ? $.length * (h.barHeight + h.barGap) + 2 * h.barHeight : r;
				}).attr("transform-origin", function(t, s) {
					return s = t.order, (I(t.startTime) + n + .5 * (I(t.endTime) - I(t.startTime))).toString() + "px " + (s * e + i + .5 * r).toString() + "px";
				}).attr("class", function(t) {
					let e = "";
					t.classes.length > 0 && (e = t.classes.join(" "));
					let i = 0;
					for (let [e, s] of S.entries()) t.type === s && (i = e % h.numberSectionStyles);
					let s = "";
					return t.active ? t.crit ? s += " activeCrit" : s = " active" : t.done ? s = t.crit ? " doneCrit" : " done" : t.crit && (s += " crit"), 0 === s.length && (s = " task"), t.milestone && (s = " milestone " + s), t.vert && (s = " vert " + s), s += i, "task" + (s += " " + e);
				}), u.append("text").attr("id", function(t) {
					return t.id + "-text";
				}).text(function(t) {
					return t.task;
				}).attr("font-size", h.fontSize).attr("x", function(t) {
					let e = I(t.startTime), i = I(t.renderEndTime || t.endTime);
					if (t.milestone && (e += .5 * (I(t.endTime) - I(t.startTime)) - .5 * r, i = e + r), t.vert) return I(t.startTime) + n;
					let s = this.getBBox().width;
					return s > i - e ? i + s + 1.5 * h.leftPadding > c ? e + n - 5 : i + n + 5 : (i - e) / 2 + e + n;
				}).attr("y", function(t, s) {
					return t.vert ? h.gridLineStartPadding + $.length * (h.barHeight + h.barGap) + 60 : t.order * e + h.barHeight / 2 + (h.fontSize / 2 - 2) + i;
				}).attr("text-height", r).attr("class", function(t) {
					let e = I(t.startTime), i = I(t.endTime);
					t.milestone && (i = e + r);
					let s = this.getBBox().width, n = "";
					t.classes.length > 0 && (n = t.classes.join(" "));
					let a = 0;
					for (let [e, i] of S.entries()) t.type === i && (a = e % h.numberSectionStyles);
					let o = "";
					return t.active && (o = t.crit ? "activeCritText" + a : "activeText" + a), t.done ? o = t.crit ? o + " doneCritText" + a : o + " doneText" + a : t.crit && (o = o + " critText" + a), t.milestone && (o += " milestoneText"), t.vert && (o += " vertText"), s > i - e ? i + s + 1.5 * h.leftPadding > c ? n + " taskTextOutsideLeft taskTextOutside" + a + " " + o : n + " taskTextOutsideRight taskTextOutside" + a + " " + o + " width-" + s : n + " taskText taskText" + a + " " + o + " width-" + s;
				}), "sandbox" === l().securityLevel) {
					let t = E("#i" + s).nodes()[0].contentDocument;
					u.filter(function(t) {
						return f.has(t.id);
					}).each(function(e) {
						var i = t.querySelector("#" + e.id), s = t.querySelector("#" + e.id + "-text");
						let n = i.parentNode;
						var r = t.createElement("a");
						r.setAttribute("xlink:href", f.get(e.id)), r.setAttribute("target", "_top"), n.appendChild(r), r.appendChild(i), r.appendChild(s);
					});
				}
			}
			function z(e, i, s, n, r, a, l, c) {
				let d, u;
				if (0 === l.length && 0 === c.length) return;
				for (let { startTime: t, endTime: e } of a) (void 0 === d || t < d) && (d = t), (void 0 === u || e > u) && (u = e);
				if (!d || !u) return;
				if ((0, ei.default)(u).diff((0, ei.default)(d), "year") > 5) return void t.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");
				let f = o.db.getDateFormat(), y = [], k = null, m = (0, ei.default)(d);
				for (; m.valueOf() <= u;) o.db.isInvalidDate(m, f, l, c) ? k ? k.end = m : k = {
					start: m,
					end: m
				} : k && (y.push(k), k = null), m = m.add(1, "d");
				Y.append("g").selectAll("rect").data(y).enter().append("rect").attr("id", (t) => "exclude-" + t.start.format("YYYY-MM-DD")).attr("x", (t) => I(t.start.startOf("day")) + s).attr("y", h.gridLineStartPadding).attr("width", (t) => I(t.end.endOf("day")) - I(t.start.startOf("day"))).attr("height", r - i - h.gridLineStartPadding).attr("transform-origin", function(t, i) {
					return (I(t.start) + s + .5 * (I(t.end) - I(t.start))).toString() + "px " + (i * e + .5 * r).toString() + "px";
				}).attr("class", "exclude-range");
			}
			function B(t, e, s, n) {
				let r = o.db.getDateFormat(), a = o.db.getAxisFormat(), l;
				l = a || ("D" === r ? "%d" : h.axisFormat ?? "%Y-%m-%d");
				let u = _(I).tickSize(-n + e + h.gridLineStartPadding).tickFormat(g(l)), f = /^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(o.db.getTickInterval() || h.tickInterval);
				if (null !== f) {
					let t = f[1], e = f[2], s = o.db.getWeekday() || h.weekday;
					switch (e) {
						case "millisecond":
							u.ticks(c.every(t));
							break;
						case "second":
							u.ticks(i.every(t));
							break;
						case "minute":
							u.ticks(M.every(t));
							break;
						case "hour":
							u.ticks(d.every(t));
							break;
						case "day":
							u.ticks(x.every(t));
							break;
						case "week":
							u.ticks(en[s].every(t));
							break;
						case "month": u.ticks(m.every(t));
					}
				}
				if (Y.append("g").attr("class", "grid").attr("transform", "translate(" + t + ", " + (n - 50) + ")").call(u).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10).attr("dy", "1em"), o.db.topAxisEnabled() || h.topAxis) {
					let s = p(I).tickSize(-n + e + h.gridLineStartPadding).tickFormat(g(l));
					if (null !== f) {
						let t = f[1], e = f[2], n = o.db.getWeekday() || h.weekday;
						switch (e) {
							case "millisecond":
								s.ticks(c.every(t));
								break;
							case "second":
								s.ticks(i.every(t));
								break;
							case "minute":
								s.ticks(M.every(t));
								break;
							case "hour":
								s.ticks(d.every(t));
								break;
							case "day":
								s.ticks(x.every(t));
								break;
							case "week":
								s.ticks(en[n].every(t));
								break;
							case "month": s.ticks(m.every(t));
						}
					}
					Y.append("g").attr("class", "grid").attr("transform", "translate(" + t + ", " + e + ")").call(s).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10);
				}
			}
			function j(t, e) {
				let i = 0, s = Object.keys(C).map((t) => [t, C[t]]);
				Y.append("g").selectAll("text").data(s).enter().append(function(t) {
					let e = t[0].split(y.lineBreakRegex), i = -(e.length - 1) / 2, s = v.createElementNS("http://www.w3.org/2000/svg", "text");
					for (let [t, n] of (s.setAttribute("dy", i + "em"), e.entries())) {
						let e = v.createElementNS("http://www.w3.org/2000/svg", "tspan");
						e.setAttribute("alignment-baseline", "central"), e.setAttribute("x", "10"), t > 0 && e.setAttribute("dy", "1em"), e.textContent = n, s.appendChild(e);
					}
					return s;
				}).attr("x", 10).attr("y", function(n, r) {
					if (!(r > 0)) return n[1] * t / 2 + e;
					for (let a = 0; a < r; a++) return i += s[r - 1][1], n[1] * t / 2 + i * t + e;
				}).attr("font-size", h.sectionFontSize).attr("class", function(t) {
					for (let [e, i] of S.entries()) if (t[0] === i) return "sectionTitle sectionTitle" + e % h.numberSectionStyles;
					return "sectionTitle";
				});
			}
			function N(t, e, i, s) {
				let n = o.db.getTodayMarker();
				if ("off" === n) return;
				let r = Y.append("g").attr("class", "today"), a = /* @__PURE__ */ new Date(), l = r.append("line");
				l.attr("x1", I(a) + t).attr("x2", I(a) + t).attr("y1", h.titleTopMargin).attr("y2", s - h.titleTopMargin).attr("class", "today"), "" !== n && l.attr("style", n.replace(/,/g, ";"));
			}
			function H(t) {
				let e = {}, i = [];
				for (let s = 0, n = t.length; s < n; ++s) Object.prototype.hasOwnProperty.call(e, t[s]) || (e[t[s]] = !0, i.push(t[s]));
				return i;
			}
			F(W, "taskCompare"), $.sort(W), O($, ee, A), u(Y, A, ee, h.useMaxWidth), Y.append("text").text(o.db.getDiagramTitle()).attr("x", ee / 2).attr("y", h.titleTopMargin).attr("class", "titleText"), F(O, "makeGantt"), F(P, "drawRects"), F(z, "drawExcludeDays"), F(B, "makeGrid"), F(j, "vertLabels"), F(N, "drawToday"), F(H, "checkUnique");
		}, "draw")
	},
	styles: F((t) => `
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
`, "getStyles")
};
export { ea as diagram };
