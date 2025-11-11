import { $ as Vo, $t as Vo$1, A as $o, D as f, F as Go, Ft as Bo, G as No, I as Ho, Jt as Tt, Lt as Dt, Mt as $t, Q as Uo, Ut as Me, Xt as Va, _ as Ut, _n as vs, bn as zt, cn as be, dn as ke, dt as hn, en as Wa, et as Wo, gn as qa, gt as mr, hn as pt, in as Yf, ln as ia, nn as Wo$1, on as Zi, pn as ku, pt as jo, qt as Su, rn as Xa, un as jt, vn as we, zt as Hn } from "./vendor-min-mermaid~architectureDiagram-4X3Z3J56.3cmRlxJg.chunk.js";
import { $ as n, Q as m, tt as q } from "./vendor-min-mermaid~architecture-U656AL7Q-3ZQKGQJL.BHePMx5P.chunk.js";
var Ee = /* @__PURE__ */ n((Vt, Pt) => {
	(function(t, n$1) {
		typeof Vt == "object" && typeof Pt < "u" ? Pt.exports = /* @__PURE__ */ n$1() : typeof define == "function" && define.amd ? define(n$1) : (t = typeof globalThis < "u" ? globalThis : t || self).dayjs_plugin_isoWeek = /* @__PURE__ */ n$1();
	})(Vt, function() {
		var t = "day";
		return function(n$1, s, a) {
			var r = /* @__PURE__ */ m(function(D) {
				return D.add(4 - D.isoWeekday(), t);
			}, "a"), d = s.prototype;
			d.isoWeekYear = function() {
				return r(this).year();
			}, d.isoWeek = function(D) {
				if (!this.$utils().u(D)) return this.add(7 * (D - this.isoWeek()), t);
				var _, A, C, W, G = /* @__PURE__ */ r(this), z = (_ = /* @__PURE__ */ this.isoWeekYear(), A = this.$u, C = /* @__PURE__ */ (A ? a.utc : a)().year(_).startOf("year"), W = 4 - C.isoWeekday(), C.isoWeekday() > 4 && (W += 7), C.add(W, t));
				return G.diff(z, "week") + 1;
			}, d.isoWeekday = function(D) {
				return this.$utils().u(D) ? this.day() || 7 : this.day(this.day() % 7 ? D : D - 7);
			};
			var h = d.startOf;
			d.startOf = function(D, _) {
				var A = /* @__PURE__ */ this.$utils(), C = !!A.u(_) || _;
				return A.p(D) === "isoweek" ? C ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : h.bind(this)(D, _);
			};
		};
	});
});
var Me$1 = /* @__PURE__ */ n((zt$1, Nt) => {
	(function(t, n$1) {
		typeof zt$1 == "object" && typeof Nt < "u" ? Nt.exports = /* @__PURE__ */ n$1() : typeof define == "function" && define.amd ? define(n$1) : (t = typeof globalThis < "u" ? globalThis : t || self).dayjs_plugin_customParseFormat = /* @__PURE__ */ n$1();
	})(zt$1, function() {
		var t = {
			LTS: "h:mm:ss A",
			LT: "h:mm A",
			L: "MM/DD/YYYY",
			LL: "MMMM D, YYYY",
			LLL: "MMMM D, YYYY h:mm A",
			LLLL: "dddd, MMMM D, YYYY h:mm A"
		}, n$1 = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d/, a = /\d\d/, r = /\d\d?/, d = /\d*[^-_:/,()\s\d]+/, h = {}, D = /* @__PURE__ */ m(function(p) {
			return (p = +p) + (p > 68 ? 1900 : 2e3);
		}, "a"), _ = /* @__PURE__ */ m(function(p) {
			return function(y) {
				this[p] = +y;
			};
		}, "f"), A = [/[+-]\d\d:?(\d\d)?|Z/, function(p) {
			(this.zone || (this.zone = {})).offset = /* @__PURE__ */ function(y) {
				if (!y || y === "Z") return 0;
				var L = /* @__PURE__ */ y.match(/([+-]|\d\d)/g), Y = 60 * L[1] + (+L[2] || 0);
				return Y === 0 ? 0 : L[0] === "+" ? -Y : Y;
			}(p);
		}], C = /* @__PURE__ */ m(function(p) {
			var y = h[p];
			return y && (y.indexOf ? y : y.s.concat(y.f));
		}, "u"), W = /* @__PURE__ */ m(function(p, y) {
			var L, Y = h.meridiem;
			if (Y) {
				for (var N = 1; N <= 24; N += 1) if (p.indexOf(/* @__PURE__ */ Y(N, 0, y)) > -1) {
					L = N > 12;
					break;
				}
			} else L = p === (y ? "pm" : "PM");
			return L;
		}, "d"), G = {
			A: [d, function(p) {
				this.afternoon = /* @__PURE__ */ W(p, !1);
			}],
			a: [d, function(p) {
				this.afternoon = /* @__PURE__ */ W(p, !0);
			}],
			Q: [s, function(p) {
				this.month = 3 * (p - 1) + 1;
			}],
			S: [s, function(p) {
				this.milliseconds = 100 * +p;
			}],
			SS: [a, function(p) {
				this.milliseconds = 10 * +p;
			}],
			SSS: [/\d{3}/, function(p) {
				this.milliseconds = +p;
			}],
			s: [r, /* @__PURE__ */ _("seconds")],
			ss: [r, /* @__PURE__ */ _("seconds")],
			m: [r, /* @__PURE__ */ _("minutes")],
			mm: [r, /* @__PURE__ */ _("minutes")],
			H: [r, /* @__PURE__ */ _("hours")],
			h: [r, /* @__PURE__ */ _("hours")],
			HH: [r, /* @__PURE__ */ _("hours")],
			hh: [r, /* @__PURE__ */ _("hours")],
			D: [r, /* @__PURE__ */ _("day")],
			DD: [a, /* @__PURE__ */ _("day")],
			Do: [d, function(p) {
				var y = h.ordinal;
				if (this.day = p.match(/\d+/)[0], y) for (var Y = 1; Y <= 31; Y += 1) y(Y).replace(/\[|\]/g, "") === p && (this.day = Y);
			}],
			w: [r, /* @__PURE__ */ _("week")],
			ww: [a, /* @__PURE__ */ _("week")],
			M: [r, /* @__PURE__ */ _("month")],
			MM: [a, /* @__PURE__ */ _("month")],
			MMM: [d, function(p) {
				var y = /* @__PURE__ */ C("months"), L = (C("monthsShort") || y.map(function(Y) {
					return Y.slice(0, 3);
				})).indexOf(p) + 1;
				if (L < 1) throw new Error();
				this.month = L % 12 || L;
			}],
			MMMM: [d, function(p) {
				var y = C("months").indexOf(p) + 1;
				if (y < 1) throw new Error();
				this.month = y % 12 || y;
			}],
			Y: [/[+-]?\d+/, /* @__PURE__ */ _("year")],
			YY: [a, function(p) {
				this.year = /* @__PURE__ */ D(p);
			}],
			YYYY: [/\d{4}/, /* @__PURE__ */ _("year")],
			Z: A,
			ZZ: A
		};
		function z(p) {
			var y = p, L = h && h.formats;
			for (var Y = /* @__PURE__ */ (p = /* @__PURE__ */ y.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(g, v, T) {
				var x = T && T.toUpperCase();
				return v || L[T] || t[T] || L[x].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(b, w, l) {
					return w || l.slice(1);
				});
			})).match(n$1), N = Y.length, R = 0; R < N; R += 1) {
				var $ = Y[R], U = G[$], B = U && U[0], j = U && U[1];
				Y[R] = j ? {
					regex: B,
					parser: j
				} : $.replace(/^\[|\]$/g, "");
			}
			return function(g) {
				for (var v = {}, T = 0, x = 0; T < N; T += 1) {
					var b = Y[T];
					if (typeof b == "string") x += b.length;
					else {
						var w = b.regex, l = b.parser, f$1 = /* @__PURE__ */ g.slice(x), k = w.exec(f$1)[0];
						l.call(v, k), g = /* @__PURE__ */ g.replace(k, "");
					}
				}
				return function(u) {
					var m$1 = u.afternoon;
					if (m$1 !== void 0) {
						var e = u.hours;
						m$1 ? e < 12 && (u.hours += 12) : e === 12 && (u.hours = 0), delete u.afternoon;
					}
				}(v), v;
			};
		}
		return m(z, "l"), function(p, y, L) {
			L.p.customParseFormat = !0, p && p.parseTwoDigitYear && (D = p.parseTwoDigitYear);
			var Y = y.prototype, N = Y.parse;
			Y.parse = function(R) {
				var $ = R.date, U = R.utc, B = R.args;
				this.$u = U;
				var j = B[1];
				if (typeof j == "string") {
					var g = B[2] === !0, v = B[3] === !0, T = g || v, x = B[2];
					v && (x = B[2]), h = /* @__PURE__ */ this.$locale(), !g && x && (h = L.Ls[x]), this.$d = /* @__PURE__ */ function(f$1, k, u, m$1) {
						try {
							if (["x", "X"].indexOf(k) > -1) return /* @__PURE__ */ new Date((k === "X" ? 1e3 : 1) * f$1);
							var e = /* @__PURE__ */ z(k)(f$1), c = e.year, i = e.month, M = e.day, S = e.hours, E = e.minutes, P = e.seconds, I = e.milliseconds, at = e.zone, F = e.week, Z = /* @__PURE__ */ new Date(), nt = M || (c || i ? 1 : Z.getDate()), rt = c || Z.getFullYear(), ot = 0;
							c && !i || (ot = i > 0 ? i - 1 : Z.getMonth());
							var ht, kt = S || 0, O = E || 0, it = P || 0, Q = I || 0;
							return at ? new Date(Date.UTC(rt, ot, nt, kt, O, it, Q + 60 * at.offset * 1e3)) : u ? new Date(Date.UTC(rt, ot, nt, kt, O, it, Q)) : (ht = new Date(rt, ot, nt, kt, O, it, Q), F && (ht = /* @__PURE__ */ m$1(ht).week(F).toDate()), ht);
						} catch {
							return /* @__PURE__ */ new Date("");
						}
					}($, j, U, L), this.init(), x && x !== !0 && (this.$L = this.locale(x).$L), T && $ != this.format(j) && (this.$d = /* @__PURE__ */ new Date("")), h = {};
				} else if (j instanceof Array) for (var b = j.length, w = 1; w <= b; w += 1) {
					B[1] = j[w - 1];
					var l = /* @__PURE__ */ L.apply(this, B);
					if (l.isValid()) {
						this.$d = l.$d, this.$L = l.$L, this.init();
						break;
					}
					w === b && (this.$d = /* @__PURE__ */ new Date(""));
				}
				else N.call(this, R);
			};
		};
	});
});
var Le = /* @__PURE__ */ n((Rt, Bt) => {
	(function(t, n$1) {
		typeof Rt == "object" && typeof Bt < "u" ? Bt.exports = /* @__PURE__ */ n$1() : typeof define == "function" && define.amd ? define(n$1) : (t = typeof globalThis < "u" ? globalThis : t || self).dayjs_plugin_advancedFormat = /* @__PURE__ */ n$1();
	})(Rt, function() {
		return function(t, n$1) {
			var s = n$1.prototype, a = s.format;
			s.format = function(r) {
				var d = this, h = /* @__PURE__ */ this.$locale();
				if (!this.isValid()) return a.bind(this)(r);
				var D = /* @__PURE__ */ this.$utils(), _ = /* @__PURE__ */ (r || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(A) {
					switch (A) {
						case "Q": return Math.ceil((d.$M + 1) / 3);
						case "Do": return h.ordinal(d.$D);
						case "gggg": return d.weekYear();
						case "GGGG": return d.isoWeekYear();
						case "wo": return h.ordinal(/* @__PURE__ */ d.week(), "W");
						case "w":
						case "ww": return D.s(/* @__PURE__ */ d.week(), A === "w" ? 1 : 2, "0");
						case "W":
						case "WW": return D.s(/* @__PURE__ */ d.isoWeek(), A === "W" ? 1 : 2, "0");
						case "k":
						case "kk": return D.s(/* @__PURE__ */ String(d.$H === 0 ? 24 : d.$H), A === "k" ? 1 : 2, "0");
						case "X": return Math.floor(d.$d.getTime() / 1e3);
						case "x": return d.$d.getTime();
						case "z": return "[" + d.offsetName() + "]";
						case "zzz": return "[" + d.offsetName("long") + "]";
						default: return A;
					}
				});
				return a.bind(this)(_);
			};
		};
	});
});
var Ot = /* @__PURE__ */ function() {
	var t = /* @__PURE__ */ m(function(w, l, f$1, k) {
		for (f$1 = f$1 || {}, k = w.length; k--; f$1[w[k]] = l);
		return f$1;
	}, "o"), n$1 = [
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
	], s = [1, 26], a = [1, 27], r = [1, 28], d = [1, 29], h = [1, 30], D = [1, 31], _ = [1, 32], A = [1, 33], C = [1, 34], W = [1, 9], G = [1, 10], z = [1, 11], p = [1, 12], y = [1, 13], L = [1, 14], Y = [1, 15], N = [1, 16], R = [1, 19], $ = [1, 20], U = [1, 21], B = [1, 22], j = [1, 23], g = [1, 25], v = [1, 35], T = {
		trace: /* @__PURE__ */ m(function() {}, "trace"),
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
		performAction: /* @__PURE__ */ m(function(l, f$1, k, u, m$1, e, c) {
			var i = e.length - 1;
			switch (m$1) {
				case 1: return e[i - 1];
				case 2:
					this.$ = [];
					break;
				case 3:
					e[i - 1].push(e[i]), this.$ = e[i - 1];
					break;
				case 4:
				case 5:
					this.$ = e[i];
					break;
				case 6:
				case 7:
					this.$ = [];
					break;
				case 8:
					u.setWeekday("monday");
					break;
				case 9:
					u.setWeekday("tuesday");
					break;
				case 10:
					u.setWeekday("wednesday");
					break;
				case 11:
					u.setWeekday("thursday");
					break;
				case 12:
					u.setWeekday("friday");
					break;
				case 13:
					u.setWeekday("saturday");
					break;
				case 14:
					u.setWeekday("sunday");
					break;
				case 15:
					u.setWeekend("friday");
					break;
				case 16:
					u.setWeekend("saturday");
					break;
				case 17:
					u.setDateFormat(/* @__PURE__ */ e[i].substr(11)), this.$ = /* @__PURE__ */ e[i].substr(11);
					break;
				case 18:
					u.enableInclusiveEndDates(), this.$ = /* @__PURE__ */ e[i].substr(18);
					break;
				case 19:
					u.TopAxis(), this.$ = /* @__PURE__ */ e[i].substr(8);
					break;
				case 20:
					u.setAxisFormat(/* @__PURE__ */ e[i].substr(11)), this.$ = /* @__PURE__ */ e[i].substr(11);
					break;
				case 21:
					u.setTickInterval(/* @__PURE__ */ e[i].substr(13)), this.$ = /* @__PURE__ */ e[i].substr(13);
					break;
				case 22:
					u.setExcludes(/* @__PURE__ */ e[i].substr(9)), this.$ = /* @__PURE__ */ e[i].substr(9);
					break;
				case 23:
					u.setIncludes(/* @__PURE__ */ e[i].substr(9)), this.$ = /* @__PURE__ */ e[i].substr(9);
					break;
				case 24:
					u.setTodayMarker(/* @__PURE__ */ e[i].substr(12)), this.$ = /* @__PURE__ */ e[i].substr(12);
					break;
				case 27:
					u.setDiagramTitle(/* @__PURE__ */ e[i].substr(6)), this.$ = /* @__PURE__ */ e[i].substr(6);
					break;
				case 28:
					this.$ = /* @__PURE__ */ e[i].trim(), u.setAccTitle(this.$);
					break;
				case 29:
				case 30:
					this.$ = /* @__PURE__ */ e[i].trim(), u.setAccDescription(this.$);
					break;
				case 31:
					u.addSection(/* @__PURE__ */ e[i].substr(8)), this.$ = /* @__PURE__ */ e[i].substr(8);
					break;
				case 33:
					u.addTask(e[i - 1], e[i]), this.$ = "task";
					break;
				case 34:
					this.$ = e[i - 1], u.setClickEvent(e[i - 1], e[i], null);
					break;
				case 35:
					this.$ = e[i - 2], u.setClickEvent(e[i - 2], e[i - 1], e[i]);
					break;
				case 36:
					this.$ = e[i - 2], u.setClickEvent(e[i - 2], e[i - 1], null), u.setLink(e[i - 2], e[i]);
					break;
				case 37:
					this.$ = e[i - 3], u.setClickEvent(e[i - 3], e[i - 2], e[i - 1]), u.setLink(e[i - 3], e[i]);
					break;
				case 38:
					this.$ = e[i - 2], u.setClickEvent(e[i - 2], e[i], null), u.setLink(e[i - 2], e[i - 1]);
					break;
				case 39:
					this.$ = e[i - 3], u.setClickEvent(e[i - 3], e[i - 1], e[i]), u.setLink(e[i - 3], e[i - 2]);
					break;
				case 40:
					this.$ = e[i - 1], u.setLink(e[i - 1], e[i]);
					break;
				case 41:
				case 47:
					this.$ = e[i - 1] + " " + e[i];
					break;
				case 42:
				case 43:
				case 45:
					this.$ = e[i - 2] + " " + e[i - 1] + " " + e[i];
					break;
				case 44:
				case 46:
					this.$ = e[i - 3] + " " + e[i - 2] + " " + e[i - 1] + " " + e[i];
					break;
			}
		}, "anonymous"),
		table: [
			{
				3: 1,
				4: [1, 2]
			},
			{ 1: [3] },
			/* @__PURE__ */ t(n$1, [2, 2], { 5: 3 }),
			{
				6: [1, 4],
				7: 5,
				8: [1, 6],
				9: 7,
				10: [1, 8],
				11: 17,
				12: s,
				13: a,
				14: r,
				15: d,
				16: h,
				17: D,
				18: _,
				19: 18,
				20: A,
				21: C,
				22: W,
				23: G,
				24: z,
				25: p,
				26: y,
				27: L,
				28: Y,
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
			/* @__PURE__ */ t(n$1, [2, 7], { 1: [2, 1] }),
			/* @__PURE__ */ t(n$1, [2, 3]),
			{
				9: 36,
				11: 17,
				12: s,
				13: a,
				14: r,
				15: d,
				16: h,
				17: D,
				18: _,
				19: 18,
				20: A,
				21: C,
				22: W,
				23: G,
				24: z,
				25: p,
				26: y,
				27: L,
				28: Y,
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
			/* @__PURE__ */ t(n$1, [2, 5]),
			/* @__PURE__ */ t(n$1, [2, 6]),
			/* @__PURE__ */ t(n$1, [2, 17]),
			/* @__PURE__ */ t(n$1, [2, 18]),
			/* @__PURE__ */ t(n$1, [2, 19]),
			/* @__PURE__ */ t(n$1, [2, 20]),
			/* @__PURE__ */ t(n$1, [2, 21]),
			/* @__PURE__ */ t(n$1, [2, 22]),
			/* @__PURE__ */ t(n$1, [2, 23]),
			/* @__PURE__ */ t(n$1, [2, 24]),
			/* @__PURE__ */ t(n$1, [2, 25]),
			/* @__PURE__ */ t(n$1, [2, 26]),
			/* @__PURE__ */ t(n$1, [2, 27]),
			{ 32: [1, 37] },
			{ 34: [1, 38] },
			/* @__PURE__ */ t(n$1, [2, 30]),
			/* @__PURE__ */ t(n$1, [2, 31]),
			/* @__PURE__ */ t(n$1, [2, 32]),
			{ 39: [1, 39] },
			/* @__PURE__ */ t(n$1, [2, 8]),
			/* @__PURE__ */ t(n$1, [2, 9]),
			/* @__PURE__ */ t(n$1, [2, 10]),
			/* @__PURE__ */ t(n$1, [2, 11]),
			/* @__PURE__ */ t(n$1, [2, 12]),
			/* @__PURE__ */ t(n$1, [2, 13]),
			/* @__PURE__ */ t(n$1, [2, 14]),
			/* @__PURE__ */ t(n$1, [2, 15]),
			/* @__PURE__ */ t(n$1, [2, 16]),
			{
				41: [1, 40],
				43: [1, 41]
			},
			/* @__PURE__ */ t(n$1, [2, 4]),
			/* @__PURE__ */ t(n$1, [2, 28]),
			/* @__PURE__ */ t(n$1, [2, 29]),
			/* @__PURE__ */ t(n$1, [2, 33]),
			/* @__PURE__ */ t(n$1, [2, 34], {
				42: [1, 42],
				43: [1, 43]
			}),
			/* @__PURE__ */ t(n$1, [2, 40], { 41: [1, 44] }),
			/* @__PURE__ */ t(n$1, [2, 35], { 43: [1, 45] }),
			/* @__PURE__ */ t(n$1, [2, 36]),
			/* @__PURE__ */ t(n$1, [2, 38], { 42: [1, 46] }),
			/* @__PURE__ */ t(n$1, [2, 37]),
			/* @__PURE__ */ t(n$1, [2, 39])
		],
		defaultActions: {},
		parseError: /* @__PURE__ */ m(function(l, f$1) {
			if (f$1.recoverable) this.trace(l);
			else {
				var k = new Error(l);
				throw k.hash = f$1, k;
			}
		}, "parseError"),
		parse: /* @__PURE__ */ m(function(l) {
			var f$1 = this, k = [0], u = [], m$1 = [null], e = [], c = this.table, i = "", M = 0, S = 0, E = 0, P = 2, I = 1, at = /* @__PURE__ */ e.slice.call(arguments, 1), F = /* @__PURE__ */ Object.create(this.lexer), Z = { yy: {} };
			for (var nt in this.yy) Object.prototype.hasOwnProperty.call(this.yy, nt) && (Z.yy[nt] = this.yy[nt]);
			F.setInput(l, Z.yy), Z.yy.lexer = F, Z.yy.parser = this, typeof F.yylloc > "u" && (F.yylloc = {});
			var rt = F.yylloc;
			e.push(rt);
			var ot = F.options && F.options.ranges;
			typeof Z.yy.parseError == "function" ? this.parseError = Z.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
			function ht(X) {
				k.length = k.length - 2 * X, m$1.length = m$1.length - X, e.length = e.length - X;
			}
			m(ht, "popStack");
			function kt() {
				var X;
				return X = u.pop() || F.lex() || I, typeof X != "number" && (X instanceof Array && (u = X, X = /* @__PURE__ */ u.pop()), X = f$1.symbols_[X] || X), X;
			}
			m(kt, "lex");
			for (var O, it, Q, H, Ct, ct = {}, bt, J, ee, xt;;) {
				if (Q = k[k.length - 1], this.defaultActions[Q] ? H = this.defaultActions[Q] : ((O === null || typeof O > "u") && (O = /* @__PURE__ */ kt()), H = c[Q] && c[Q][O]), typeof H > "u" || !H.length || !H[0]) {
					var St = "";
					xt = [];
					for (bt in c[Q]) this.terminals_[bt] && bt > P && xt.push("'" + this.terminals_[bt] + "'");
					F.showPosition ? St = "Parse error on line " + (M + 1) + `:
` + F.showPosition() + `
Expecting ` + xt.join(", ") + ", got '" + (this.terminals_[O] || O) + "'" : St = "Parse error on line " + (M + 1) + ": Unexpected " + (O == I ? "end of input" : "'" + (this.terminals_[O] || O) + "'"), this.parseError(St, {
						text: F.match,
						token: this.terminals_[O] || O,
						line: F.yylineno,
						loc: rt,
						expected: xt
					});
				}
				if (H[0] instanceof Array && H.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + Q + ", token: " + O);
				switch (H[0]) {
					case 1:
						k.push(O), m$1.push(F.yytext), e.push(F.yylloc), k.push(H[1]), O = null, it ? (O = it, it = null) : (S = F.yyleng, i = F.yytext, M = F.yylineno, rt = F.yylloc, E > 0 && E--);
						break;
					case 2:
						if (J = this.productions_[H[1]][1], ct.$ = m$1[m$1.length - J], ct._$ = {
							first_line: e[e.length - (J || 1)].first_line,
							last_line: e[e.length - 1].last_line,
							first_column: e[e.length - (J || 1)].first_column,
							last_column: e[e.length - 1].last_column
						}, ot && (ct._$.range = [e[e.length - (J || 1)].range[0], e[e.length - 1].range[1]]), Ct = /* @__PURE__ */ this.performAction.apply(ct, /* @__PURE__ */ [
							i,
							S,
							M,
							Z.yy,
							H[1],
							m$1,
							e
						].concat(at)), typeof Ct < "u") return Ct;
						J && (k = /* @__PURE__ */ k.slice(0, -1 * J * 2), m$1 = /* @__PURE__ */ m$1.slice(0, -1 * J), e = /* @__PURE__ */ e.slice(0, -1 * J)), k.push(this.productions_[H[1]][0]), m$1.push(ct.$), e.push(ct._$), ee = c[k[k.length - 2]][k[k.length - 1]], k.push(ee);
						break;
					case 3: return !0;
				}
			}
			return !0;
		}, "parse")
	};
	T.lexer = /* @__PURE__ */ function() {
		return {
			EOF: 1,
			parseError: /* @__PURE__ */ m(function(f$1, k) {
				if (this.yy.parser) this.yy.parser.parseError(f$1, k);
				else throw new Error(f$1);
			}, "parseError"),
			setInput: /* @__PURE__ */ m(function(l, f$1) {
				return this.yy = f$1 || this.yy || {}, this._input = l, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
					first_line: 1,
					first_column: 0,
					last_line: 1,
					last_column: 0
				}, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
			}, "setInput"),
			input: /* @__PURE__ */ m(function() {
				var l = this._input[0];
				this.yytext += l, this.yyleng++, this.offset++, this.match += l, this.matched += l;
				return l.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = /* @__PURE__ */ this._input.slice(1), l;
			}, "input"),
			unput: /* @__PURE__ */ m(function(l) {
				var f$1 = l.length, k = /* @__PURE__ */ l.split(/(?:\r\n?|\n)/g);
				this._input = l + this._input, this.yytext = /* @__PURE__ */ this.yytext.substr(0, this.yytext.length - f$1), this.offset -= f$1;
				var u = /* @__PURE__ */ this.match.split(/(?:\r\n?|\n)/g);
				this.match = /* @__PURE__ */ this.match.substr(0, this.match.length - 1), this.matched = /* @__PURE__ */ this.matched.substr(0, this.matched.length - 1), k.length - 1 && (this.yylineno -= k.length - 1);
				var m$1 = this.yylloc.range;
				return this.yylloc = {
					first_line: this.yylloc.first_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.first_column,
					last_column: k ? (k.length === u.length ? this.yylloc.first_column : 0) + u[u.length - k.length].length - k[0].length : this.yylloc.first_column - f$1
				}, this.options.ranges && (this.yylloc.range = [m$1[0], m$1[0] + this.yyleng - f$1]), this.yyleng = this.yytext.length, this;
			}, "unput"),
			more: /* @__PURE__ */ m(function() {
				return this._more = !0, this;
			}, "more"),
			reject: /* @__PURE__ */ m(function() {
				if (this.options.backtrack_lexer) this._backtrack = !0;
				else return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
					text: "",
					token: null,
					line: this.yylineno
				});
				return this;
			}, "reject"),
			less: /* @__PURE__ */ m(function(l) {
				this.unput(/* @__PURE__ */ this.match.slice(l));
			}, "less"),
			pastInput: /* @__PURE__ */ m(function() {
				var l = /* @__PURE__ */ this.matched.substr(0, this.matched.length - this.match.length);
				return (l.length > 20 ? "..." : "") + l.substr(-20).replace(/\n/g, "");
			}, "pastInput"),
			upcomingInput: /* @__PURE__ */ m(function() {
				var l = this.match;
				return l.length < 20 && (l += /* @__PURE__ */ this._input.substr(0, 20 - l.length)), (l.substr(0, 20) + (l.length > 20 ? "..." : "")).replace(/\n/g, "");
			}, "upcomingInput"),
			showPosition: /* @__PURE__ */ m(function() {
				var l = /* @__PURE__ */ this.pastInput(), f$1 = /* @__PURE__ */ new Array(l.length + 1).join("-");
				return l + this.upcomingInput() + `
` + f$1 + "^";
			}, "showPosition"),
			test_match: /* @__PURE__ */ m(function(l, f$1) {
				var k, u, m$1;
				if (this.options.backtrack_lexer && (m$1 = {
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
				}, this.options.ranges && (m$1.yylloc.range = /* @__PURE__ */ this.yylloc.range.slice(0))), u = /* @__PURE__ */ l[0].match(/(?:\r\n?|\n).*/g), u && (this.yylineno += u.length), this.yylloc = {
					first_line: this.yylloc.last_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.last_column,
					last_column: u ? u[u.length - 1].length - u[u.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + l[0].length
				}, this.yytext += l[0], this.match += l[0], this.matches = l, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = /* @__PURE__ */ this._input.slice(l[0].length), this.matched += l[0], k = /* @__PURE__ */ this.performAction.call(this, this.yy, this, f$1, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), k) return k;
				if (this._backtrack) {
					for (var e in m$1) this[e] = m$1[e];
					return !1;
				}
				return !1;
			}, "test_match"),
			next: /* @__PURE__ */ m(function() {
				if (this.done) return this.EOF;
				this._input || (this.done = !0);
				var l, f$1, k, u;
				this._more || (this.yytext = "", this.match = "");
				for (var m$1 = /* @__PURE__ */ this._currentRules(), e = 0; e < m$1.length; e++) if (k = /* @__PURE__ */ this._input.match(this.rules[m$1[e]]), k && (!f$1 || k[0].length > f$1[0].length)) {
					if (f$1 = k, u = e, this.options.backtrack_lexer) {
						if (l = /* @__PURE__ */ this.test_match(k, m$1[e]), l !== !1) return l;
						if (this._backtrack) {
							f$1 = !1;
							continue;
						} else return !1;
					} else if (!this.options.flex) break;
				}
				return f$1 ? (l = /* @__PURE__ */ this.test_match(f$1, m$1[u]), l !== !1 ? l : !1) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
					text: "",
					token: null,
					line: this.yylineno
				});
			}, "next"),
			lex: /* @__PURE__ */ m(function() {
				return this.next() || this.lex();
			}, "lex"),
			begin: /* @__PURE__ */ m(function(f$1) {
				this.conditionStack.push(f$1);
			}, "begin"),
			popState: /* @__PURE__ */ m(function() {
				return this.conditionStack.length - 1 > 0 ? this.conditionStack.pop() : this.conditionStack[0];
			}, "popState"),
			_currentRules: /* @__PURE__ */ m(function() {
				return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
			}, "_currentRules"),
			topState: /* @__PURE__ */ m(function(f$1) {
				return f$1 = this.conditionStack.length - 1 - Math.abs(f$1 || 0), f$1 >= 0 ? this.conditionStack[f$1] : "INITIAL";
			}, "topState"),
			pushState: /* @__PURE__ */ m(function(f$1) {
				this.begin(f$1);
			}, "pushState"),
			stateStackSize: /* @__PURE__ */ m(function() {
				return this.conditionStack.length;
			}, "stateStackSize"),
			options: { "case-insensitive": !0 },
			performAction: /* @__PURE__ */ m(function(f$1, k, u, m$1) {
				switch (u) {
					case 0: return this.begin("open_directive"), "open_directive";
					case 1: return this.begin("acc_title"), 31;
					case 2: return this.popState(), "acc_title_value";
					case 3: return this.begin("acc_descr"), 33;
					case 4: return this.popState(), "acc_descr_value";
					case 5:
						this.begin("acc_descr_multiline");
						break;
					case 6:
						this.popState();
						break;
					case 7: return "acc_descr_multiline_value";
					case 8: break;
					case 9: break;
					case 10: break;
					case 11: return 10;
					case 12: break;
					case 13: break;
					case 14:
						this.begin("href");
						break;
					case 15:
						this.popState();
						break;
					case 16: return 43;
					case 17:
						this.begin("callbackname");
						break;
					case 18:
						this.popState();
						break;
					case 19:
						this.popState(), this.begin("callbackargs");
						break;
					case 20: return 41;
					case 21:
						this.popState();
						break;
					case 22: return 42;
					case 23:
						this.begin("click");
						break;
					case 24:
						this.popState();
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
		};
	}();
	function b() {
		this.yy = {};
	}
	return m(b, "Parser"), b.prototype = T, T.Parser = b, new b();
}();
Ot.parser = Ot;
var Se = Ot;
var Ie = /* @__PURE__ */ q(/* @__PURE__ */ f(), 1), q$1 = /* @__PURE__ */ q(/* @__PURE__ */ Bo(), 1), Fe = /* @__PURE__ */ q(/* @__PURE__ */ Ee(), 1), We = /* @__PURE__ */ q(/* @__PURE__ */ Me$1(), 1), Oe = /* @__PURE__ */ q(/* @__PURE__ */ Le(), 1);
q$1.default.extend(Fe.default);
q$1.default.extend(We.default);
q$1.default.extend(Oe.default);
var Ae = {
	friday: 5,
	saturday: 6
}, K = "", Xt = "", qt, Ut$1 = "", yt = [], pt$1 = [], Zt = /* @__PURE__ */ new Map(), Qt = [], wt = [], ft = "", $t$1 = "", Ve = [
	"active",
	"done",
	"crit",
	"milestone",
	"vert"
], Kt = [], gt = !1, Jt = !1, te = "sunday", _t = "saturday", jt$1 = 0, $e = /* @__PURE__ */ m(function() {
	Qt = [], wt = [], ft = "", Kt = [], Tt$1 = 0, Ht = void 0, vt = void 0, V = [], K = "", Xt = "", $t$1 = "", qt = void 0, Ut$1 = "", yt = [], pt$1 = [], gt = !1, Jt = !1, jt$1 = 0, Zt = /* @__PURE__ */ new Map(), No(), te = "sunday", _t = "saturday";
}, "clear"), Ke = /* @__PURE__ */ m(function(t) {
	Xt = t;
}, "setAxisFormat"), Je = /* @__PURE__ */ m(function() {
	return Xt;
}, "getAxisFormat"), tn = /* @__PURE__ */ m(function(t) {
	qt = t;
}, "setTickInterval"), en = /* @__PURE__ */ m(function() {
	return qt;
}, "getTickInterval"), nn = /* @__PURE__ */ m(function(t) {
	Ut$1 = t;
}, "setTodayMarker"), rn = /* @__PURE__ */ m(function() {
	return Ut$1;
}, "getTodayMarker"), sn = /* @__PURE__ */ m(function(t) {
	K = t;
}, "setDateFormat"), an = /* @__PURE__ */ m(function() {
	gt = !0;
}, "enableInclusiveEndDates"), on = /* @__PURE__ */ m(function() {
	return gt;
}, "endDatesAreInclusive"), cn = /* @__PURE__ */ m(function() {
	Jt = !0;
}, "enableTopAxis"), ln = /* @__PURE__ */ m(function() {
	return Jt;
}, "topAxisEnabled"), un = /* @__PURE__ */ m(function(t) {
	$t$1 = t;
}, "setDisplayMode"), dn = /* @__PURE__ */ m(function() {
	return $t$1;
}, "getDisplayMode"), fn = /* @__PURE__ */ m(function() {
	return K;
}, "getDateFormat"), hn$1 = /* @__PURE__ */ m(function(t) {
	yt = /* @__PURE__ */ t.toLowerCase().split(/[\s,]+/);
}, "setIncludes"), kn = /* @__PURE__ */ m(function() {
	return yt;
}, "getIncludes"), mn = /* @__PURE__ */ m(function(t) {
	pt$1 = /* @__PURE__ */ t.toLowerCase().split(/[\s,]+/);
}, "setExcludes"), yn = /* @__PURE__ */ m(function() {
	return pt$1;
}, "getExcludes"), pn = /* @__PURE__ */ m(function() {
	return Zt;
}, "getLinks"), gn = /* @__PURE__ */ m(function(t) {
	ft = t, Qt.push(t);
}, "addSection"), bn = /* @__PURE__ */ m(function() {
	return Qt;
}, "getSections"), xn = /* @__PURE__ */ m(function() {
	let t = /* @__PURE__ */ Ye(), n$1 = 10, s = 0;
	for (; !t && s < n$1;) t = /* @__PURE__ */ Ye(), s++;
	return wt = V, wt;
}, "getTasks"), Pe = /* @__PURE__ */ m(function(t, n$1, s, a) {
	let r = /* @__PURE__ */ t.format(/* @__PURE__ */ n$1.trim()), d = /* @__PURE__ */ t.format("YYYY-MM-DD");
	return a.includes(r) || a.includes(d) ? !1 : s.includes("weekends") && (t.isoWeekday() === Ae[_t] || t.isoWeekday() === Ae[_t] + 1) || s.includes(/* @__PURE__ */ t.format("dddd").toLowerCase()) ? !0 : s.includes(r) || s.includes(d);
}, "isInvalidDate"), Tn = /* @__PURE__ */ m(function(t) {
	te = t;
}, "setWeekday"), vn = /* @__PURE__ */ m(function() {
	return te;
}, "getWeekday"), wn = /* @__PURE__ */ m(function(t) {
	_t = t;
}, "setWeekend"), ze = /* @__PURE__ */ m(function(t, n$1, s, a) {
	if (!s.length || t.manualEndTime) return;
	let r;
	t.startTime instanceof Date ? r = /* @__PURE__ */ (0, q$1.default)(t.startTime) : r = /* @__PURE__ */ (0, q$1.default)(t.startTime, n$1, !0), r = /* @__PURE__ */ r.add(1, "d");
	let d;
	t.endTime instanceof Date ? d = /* @__PURE__ */ (0, q$1.default)(t.endTime) : d = /* @__PURE__ */ (0, q$1.default)(t.endTime, n$1, !0);
	let [h, D] = _n(r, d, n$1, s, a);
	t.endTime = /* @__PURE__ */ h.toDate(), t.renderEndTime = D;
}, "checkTaskDates"), _n = /* @__PURE__ */ m(function(t, n$1, s, a, r) {
	let d = !1, h = null;
	for (; t <= n$1;) d || (h = /* @__PURE__ */ n$1.toDate()), d = /* @__PURE__ */ Pe(t, s, a, r), d && (n$1 = /* @__PURE__ */ n$1.add(1, "d")), t = /* @__PURE__ */ t.add(1, "d");
	return [n$1, h];
}, "fixTaskDates"), Gt = /* @__PURE__ */ m(function(t, n$1, s) {
	if (s = /* @__PURE__ */ s.trim(), (n$1.trim() === "x" || n$1.trim() === "X") && /^\d+$/.test(s)) return new Date(Number(s));
	let r = /* @__PURE__ */ /^after\s+(?<ids>[\d\w- ]+)/.exec(s);
	if (r !== null) {
		let h = null;
		for (let _ of r.groups.ids.split(" ")) {
			let A = /* @__PURE__ */ st(_);
			A !== void 0 && (!h || A.endTime > h.endTime) && (h = A);
		}
		if (h) return h.endTime;
		let D = /* @__PURE__ */ new Date();
		return D.setHours(0, 0, 0, 0), D;
	}
	let d = /* @__PURE__ */ (0, q$1.default)(s, /* @__PURE__ */ n$1.trim(), !0);
	if (d.isValid()) return d.toDate();
	{
		pt.debug("Invalid date:" + s), pt.debug("With date format:" + n$1.trim());
		let h = new Date(s);
		if (h === void 0 || isNaN(/* @__PURE__ */ h.getTime()) || h.getFullYear() < -1e4 || h.getFullYear() > 1e4) throw new Error("Invalid date:" + s);
		return h;
	}
}, "getStartDate"), Ne = /* @__PURE__ */ m(function(t) {
	let n$1 = /* @__PURE__ */ /^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(/* @__PURE__ */ t.trim());
	return n$1 !== null ? [/* @__PURE__ */ Number.parseFloat(n$1[1]), n$1[2]] : [NaN, "ms"];
}, "parseDuration"), Re = /* @__PURE__ */ m(function(t, n$1, s, a = !1) {
	s = /* @__PURE__ */ s.trim();
	let d = /* @__PURE__ */ /^until\s+(?<ids>[\d\w- ]+)/.exec(s);
	if (d !== null) {
		let C = null;
		for (let G of d.groups.ids.split(" ")) {
			let z = /* @__PURE__ */ st(G);
			z !== void 0 && (!C || z.startTime < C.startTime) && (C = z);
		}
		if (C) return C.startTime;
		let W = /* @__PURE__ */ new Date();
		return W.setHours(0, 0, 0, 0), W;
	}
	let h = /* @__PURE__ */ (0, q$1.default)(s, /* @__PURE__ */ n$1.trim(), !0);
	if (h.isValid()) return a && (h = /* @__PURE__ */ h.add(1, "d")), h.toDate();
	let D = /* @__PURE__ */ (0, q$1.default)(t), [_, A] = Ne(s);
	if (!Number.isNaN(_)) {
		let C = /* @__PURE__ */ D.add(_, A);
		C.isValid() && (D = C);
	}
	return D.toDate();
}, "getEndDate"), Tt$1 = 0, dt = /* @__PURE__ */ m(function(t) {
	return t === void 0 ? (Tt$1 = Tt$1 + 1, "task" + Tt$1) : t;
}, "parseId"), Dn = /* @__PURE__ */ m(function(t, n$1) {
	let s;
	n$1.substr(0, 1) === ":" ? s = /* @__PURE__ */ n$1.substr(1, n$1.length) : s = n$1;
	let a = /* @__PURE__ */ s.split(","), r = {};
	Xe(a, r, Ve);
	for (let h = 0; h < a.length; h++) a[h] = /* @__PURE__ */ a[h].trim();
	let d = "";
	switch (a.length) {
		case 1:
			r.id = /* @__PURE__ */ dt(), r.startTime = t.endTime, d = a[0];
			break;
		case 2:
			r.id = /* @__PURE__ */ dt(), r.startTime = /* @__PURE__ */ Gt(void 0, K, a[0]), d = a[1];
			break;
		case 3:
			r.id = /* @__PURE__ */ dt(a[0]), r.startTime = /* @__PURE__ */ Gt(void 0, K, a[1]), d = a[2];
			break;
		default:
	}
	return d && (r.endTime = /* @__PURE__ */ Re(r.startTime, K, d, gt), r.manualEndTime = /* @__PURE__ */ (0, q$1.default)(d, "YYYY-MM-DD", !0).isValid(), ze(r, K, pt$1, yt)), r;
}, "compileData"), Cn = /* @__PURE__ */ m(function(t, n$1) {
	let s;
	n$1.substr(0, 1) === ":" ? s = /* @__PURE__ */ n$1.substr(1, n$1.length) : s = n$1;
	let a = /* @__PURE__ */ s.split(","), r = {};
	Xe(a, r, Ve);
	for (let d = 0; d < a.length; d++) a[d] = /* @__PURE__ */ a[d].trim();
	switch (a.length) {
		case 1:
			r.id = /* @__PURE__ */ dt(), r.startTime = {
				type: "prevTaskEnd",
				id: t
			}, r.endTime = { data: a[0] };
			break;
		case 2:
			r.id = /* @__PURE__ */ dt(), r.startTime = {
				type: "getStartDate",
				startData: a[0]
			}, r.endTime = { data: a[1] };
			break;
		case 3:
			r.id = /* @__PURE__ */ dt(a[0]), r.startTime = {
				type: "getStartDate",
				startData: a[1]
			}, r.endTime = { data: a[2] };
			break;
		default:
	}
	return r;
}, "parseData"), Ht, vt, V = [], Be = {}, Sn = /* @__PURE__ */ m(function(t, n$1) {
	let s = {
		section: ft,
		type: ft,
		processed: !1,
		manualEndTime: !1,
		renderEndTime: null,
		raw: { data: n$1 },
		task: t,
		classes: []
	}, a = /* @__PURE__ */ Cn(vt, n$1);
	s.raw.startTime = a.startTime, s.raw.endTime = a.endTime, s.id = a.id, s.prevTaskId = vt, s.active = a.active, s.done = a.done, s.crit = a.crit, s.milestone = a.milestone, s.vert = a.vert, s.order = jt$1, jt$1++;
	let r = /* @__PURE__ */ V.push(s);
	vt = s.id, Be[s.id] = r - 1;
}, "addTask"), st = /* @__PURE__ */ m(function(t) {
	let n$1 = Be[t];
	return V[n$1];
}, "findTaskById"), En = /* @__PURE__ */ m(function(t, n$1) {
	let s = {
		section: ft,
		type: ft,
		description: t,
		task: t,
		classes: []
	}, a = /* @__PURE__ */ Dn(Ht, n$1);
	s.startTime = a.startTime, s.endTime = a.endTime, s.id = a.id, s.active = a.active, s.done = a.done, s.crit = a.crit, s.milestone = a.milestone, s.vert = a.vert, Ht = s, wt.push(s);
}, "addTaskOrg"), Ye = /* @__PURE__ */ m(function() {
	let t = /* @__PURE__ */ m(function(s) {
		let a = V[s], r = "";
		switch (V[s].raw.startTime.type) {
			case "prevTaskEnd":
				a.startTime = st(a.prevTaskId).endTime;
				break;
			case "getStartDate":
				r = /* @__PURE__ */ Gt(void 0, K, V[s].raw.startTime.startData), r && (V[s].startTime = r);
				break;
		}
		return V[s].startTime && (V[s].endTime = /* @__PURE__ */ Re(V[s].startTime, K, V[s].raw.endTime.data, gt), V[s].endTime && (V[s].processed = !0, V[s].manualEndTime = /* @__PURE__ */ (0, q$1.default)(V[s].raw.endTime.data, "YYYY-MM-DD", !0).isValid(), ze(V[s], K, pt$1, yt))), V[s].processed;
	}, "compileTask"), n$1 = !0;
	for (let [s, a] of V.entries()) t(s), n$1 = n$1 && a.processed;
	return n$1;
}, "compileTasks"), Mn = /* @__PURE__ */ m(function(t, n$1) {
	let s = n$1;
	mr().securityLevel !== "loose" && (s = /* @__PURE__ */ (0, Ie.sanitizeUrl)(n$1)), t.split(",").forEach(function(a) {
		st(a) !== void 0 && (Ge(a, () => {
			window.open(s, "_self");
		}), Zt.set(a, s));
	}), je(t, "clickable");
}, "setLink"), je = /* @__PURE__ */ m(function(t, n$1) {
	t.split(",").forEach(function(s) {
		let a = /* @__PURE__ */ st(s);
		a !== void 0 && a.classes.push(n$1);
	});
}, "setClass"), Ln = /* @__PURE__ */ m(function(t, n$1, s) {
	if (mr().securityLevel !== "loose" || n$1 === void 0) return;
	let a = [];
	if (typeof s == "string") {
		a = /* @__PURE__ */ s.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
		for (let d = 0; d < a.length; d++) {
			let h = /* @__PURE__ */ a[d].trim();
			h.startsWith("\"") && h.endsWith("\"") && (h = /* @__PURE__ */ h.substr(1, h.length - 2)), a[d] = h;
		}
	}
	a.length === 0 && a.push(t), st(t) !== void 0 && Ge(t, () => {
		Ut.runFunc(n$1, ...a);
	});
}, "setClickFun"), Ge = /* @__PURE__ */ m(function(t, n$1) {
	Kt.push(function() {
		let s = /* @__PURE__ */ document.querySelector(`[id="${t}"]`);
		s !== null && s.addEventListener("click", function() {
			n$1();
		});
	}, function() {
		let s = /* @__PURE__ */ document.querySelector(`[id="${t}-text"]`);
		s !== null && s.addEventListener("click", function() {
			n$1();
		});
	});
}, "pushFun"), He = {
	getConfig: /* @__PURE__ */ m(() => mr().gantt, "getConfig"),
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
	setAccTitle: Ho,
	getAccTitle: Uo,
	setDiagramTitle: jo,
	getDiagramTitle: Vo,
	setDisplayMode: un,
	getDisplayMode: dn,
	setAccDescription: Go,
	getAccDescription: $o,
	addSection: gn,
	getSections: bn,
	getTasks: xn,
	addTask: Sn,
	findTaskById: st,
	addTaskOrg: En,
	setIncludes: hn$1,
	getIncludes: kn,
	setExcludes: mn,
	getExcludes: yn,
	setClickEvent: /* @__PURE__ */ m(function(t, n$1, s) {
		t.split(",").forEach(function(a) {
			Ln(a, n$1, s);
		}), je(t, "clickable");
	}, "setClickEvent"),
	setLink: Mn,
	getLinks: pn,
	bindFunctions: /* @__PURE__ */ m(function(t) {
		Kt.forEach(function(n$1) {
			n$1(t);
		});
	}, "bindFunctions"),
	parseDuration: Ne,
	isInvalidDate: Pe,
	setWeekday: Tn,
	getWeekday: vn,
	setWeekend: wn
};
function Xe(t, n$1, s) {
	let a = !0;
	for (; a;) a = !1, s.forEach(function(r) {
		let d = "^\\s*" + r + "\\s*$", h = new RegExp(d);
		t[0].match(h) && (n$1[r] = !0, t.shift(1), a = !0);
	});
}
m(Xe, "getTaskTags");
var Dt$1 = /* @__PURE__ */ q(/* @__PURE__ */ Bo(), 1);
var In = /* @__PURE__ */ m(function() {
	pt.debug("Something is calling, setConf, remove the call");
}, "setConf"), qe = {
	monday: Me,
	tuesday: qa,
	wednesday: Wa,
	thursday: zt,
	friday: Va,
	saturday: Xa,
	sunday: $t
}, Fn = /* @__PURE__ */ m((t, n$1) => {
	let s = /* @__PURE__ */ [...t].map(() => -Infinity), a = /* @__PURE__ */ [...t].sort((d, h) => d.startTime - h.startTime || d.order - h.order), r = 0;
	for (let d of a) for (let h = 0; h < s.length; h++) if (d.startTime >= s[h]) {
		s[h] = d.endTime, d.order = h + n$1, h > r && (r = h);
		break;
	}
	return r;
}, "getMaxIntersections"), tt;
var or = {
	parser: Se,
	db: He,
	renderer: {
		setConf: In,
		draw: /* @__PURE__ */ m(function(t, n$1, s, a) {
			let r = mr().gantt, d = mr().securityLevel, h;
			d === "sandbox" && (h = /* @__PURE__ */ ia("#i" + n$1));
			let D = d === "sandbox" ? ia(h.nodes()[0].contentDocument.body) : ia("body"), _ = d === "sandbox" ? h.nodes()[0].contentDocument : document, A = /* @__PURE__ */ _.getElementById(n$1);
			tt = A.parentElement.offsetWidth, tt === void 0 && (tt = 1200), r.useWidth !== void 0 && (tt = r.useWidth);
			let C = /* @__PURE__ */ a.db.getTasks(), W = [];
			for (let g of C) W.push(g.type);
			W = /* @__PURE__ */ j(W);
			let G = {}, z = 2 * r.topPadding;
			if (a.db.getDisplayMode() === "compact" || r.displayMode === "compact") {
				let g = {};
				for (let T of C) g[T.section] === void 0 ? g[T.section] = [T] : g[T.section].push(T);
				let v = 0;
				for (let T of Object.keys(g)) {
					let x = Fn(g[T], v) + 1;
					v += x, z += x * (r.barHeight + r.barGap), G[T] = x;
				}
			} else {
				z += C.length * (r.barHeight + r.barGap);
				for (let g of W) G[g] = C.filter((v) => v.type === g).length;
			}
			A.setAttribute("viewBox", "0 0 " + tt + " " + z);
			let p = /* @__PURE__ */ D.select(`[id="${n$1}"]`), y = /* @__PURE__ */ vs().domain([/* @__PURE__ */ Vo$1(C, function(g) {
				return g.startTime;
			}), /* @__PURE__ */ Wo$1(C, function(g) {
				return g.endTime;
			})]).rangeRound([0, tt - r.leftPadding - r.rightPadding]);
			function L(g, v) {
				let T = g.startTime, x = v.startTime, b = 0;
				return T > x ? b = 1 : T < x && (b = -1), b;
			}
			m(L, "taskCompare"), C.sort(L), Y(C, tt, z), Wo(p, z, tt, r.useMaxWidth), p.append("text").text(/* @__PURE__ */ a.db.getDiagramTitle()).attr("x", tt / 2).attr("y", r.titleTopMargin).attr("class", "titleText");
			function Y(g, v, T) {
				let x = r.barHeight, b = x + r.barGap, w = r.topPadding, l = r.leftPadding, f$1 = /* @__PURE__ */ Zi().domain([0, W.length]).range(["#00B9FA", "#F95002"]).interpolate(Yf);
				R(b, w, l, v, T, g, /* @__PURE__ */ a.db.getExcludes(), /* @__PURE__ */ a.db.getIncludes()), $(l, w, v, T), N(g, b, w, l, x, f$1, v, T), U(b, w, l, x, f$1), B(l, w, v, T);
			}
			m(Y, "makeGantt");
			function N(g, v, T, x, b, w, l) {
				g.sort((c, i) => c.vert === i.vert ? 0 : c.vert ? 1 : -1);
				let k = /* @__PURE__ */ [...new Set(g.map((c) => c.order))].map((c) => g.find((i) => i.order === c));
				p.append("g").selectAll("rect").data(k).enter().append("rect").attr("x", 0).attr("y", function(c, i) {
					return i = c.order, i * v + T - 2;
				}).attr("width", function() {
					return l - r.rightPadding / 2;
				}).attr("height", v).attr("class", function(c) {
					for (let [i, M] of W.entries()) if (c.type === M) return "section section" + i % r.numberSectionStyles;
					return "section section0";
				}).enter();
				let u = /* @__PURE__ */ p.append("g").selectAll("rect").data(g).enter(), m$1 = /* @__PURE__ */ a.db.getLinks();
				if (u.append("rect").attr("id", function(c) {
					return c.id;
				}).attr("rx", 3).attr("ry", 3).attr("x", function(c) {
					return c.milestone ? y(c.startTime) + x + .5 * (y(c.endTime) - y(c.startTime)) - .5 * b : y(c.startTime) + x;
				}).attr("y", function(c, i) {
					return i = c.order, c.vert ? r.gridLineStartPadding : i * v + T;
				}).attr("width", function(c) {
					return c.milestone ? b : c.vert ? .08 * b : y(c.renderEndTime || c.endTime) - y(c.startTime);
				}).attr("height", function(c) {
					return c.vert ? C.length * (r.barHeight + r.barGap) + r.barHeight * 2 : b;
				}).attr("transform-origin", function(c, i) {
					return i = c.order, (y(c.startTime) + x + .5 * (y(c.endTime) - y(c.startTime))).toString() + "px " + (i * v + T + .5 * b).toString() + "px";
				}).attr("class", function(c) {
					let i = "task", M = "";
					c.classes.length > 0 && (M = /* @__PURE__ */ c.classes.join(" "));
					let S = 0;
					for (let [P, I] of W.entries()) c.type === I && (S = P % r.numberSectionStyles);
					let E = "";
					return c.active ? c.crit ? E += " activeCrit" : E = " active" : c.done ? c.crit ? E = " doneCrit" : E = " done" : c.crit && (E += " crit"), E.length === 0 && (E = " task"), c.milestone && (E = " milestone " + E), c.vert && (E = " vert " + E), E += S, E += " " + M, i + E;
				}), u.append("text").attr("id", function(c) {
					return c.id + "-text";
				}).text(function(c) {
					return c.task;
				}).attr("font-size", r.fontSize).attr("x", function(c) {
					let i = /* @__PURE__ */ y(c.startTime), M = /* @__PURE__ */ y(c.renderEndTime || c.endTime);
					if (c.milestone && (i += .5 * (y(c.endTime) - y(c.startTime)) - .5 * b, M = i + b), c.vert) return y(c.startTime) + x;
					let S = this.getBBox().width;
					return S > M - i ? M + S + 1.5 * r.leftPadding > l ? i + x - 5 : M + x + 5 : (M - i) / 2 + i + x;
				}).attr("y", function(c, i) {
					return c.vert ? r.gridLineStartPadding + C.length * (r.barHeight + r.barGap) + 60 : (i = c.order, i * v + r.barHeight / 2 + (r.fontSize / 2 - 2) + T);
				}).attr("text-height", b).attr("class", function(c) {
					let i = /* @__PURE__ */ y(c.startTime), M = /* @__PURE__ */ y(c.endTime);
					c.milestone && (M = i + b);
					let S = this.getBBox().width, E = "";
					c.classes.length > 0 && (E = /* @__PURE__ */ c.classes.join(" "));
					let P = 0;
					for (let [at, F] of W.entries()) c.type === F && (P = at % r.numberSectionStyles);
					let I = "";
					return c.active && (c.crit ? I = "activeCritText" + P : I = "activeText" + P), c.done ? c.crit ? I = I + " doneCritText" + P : I = I + " doneText" + P : c.crit && (I = I + " critText" + P), c.milestone && (I += " milestoneText"), c.vert && (I += " vertText"), S > M - i ? M + S + 1.5 * r.leftPadding > l ? E + " taskTextOutsideLeft taskTextOutside" + P + " " + I : E + " taskTextOutsideRight taskTextOutside" + P + " " + I + " width-" + S : E + " taskText taskText" + P + " " + I + " width-" + S;
				}), mr().securityLevel === "sandbox") {
					let c;
					c = /* @__PURE__ */ ia("#i" + n$1);
					let i = c.nodes()[0].contentDocument;
					u.filter(function(M) {
						return m$1.has(M.id);
					}).each(function(M) {
						var S = /* @__PURE__ */ i.querySelector("#" + M.id), E = /* @__PURE__ */ i.querySelector("#" + M.id + "-text");
						let P = S.parentNode;
						var I = /* @__PURE__ */ i.createElement("a");
						I.setAttribute("xlink:href", /* @__PURE__ */ m$1.get(M.id)), I.setAttribute("target", "_top"), P.appendChild(I), I.appendChild(S), I.appendChild(E);
					});
				}
			}
			m(N, "drawRects");
			function R(g, v, T, x, b, w, l, f$1) {
				if (l.length === 0 && f$1.length === 0) return;
				let k, u;
				for (let { startTime: S, endTime: E } of w) (k === void 0 || S < k) && (k = S), (u === void 0 || E > u) && (u = E);
				if (!k || !u) return;
				if ((0, Dt$1.default)(u).diff(/* @__PURE__ */ (0, Dt$1.default)(k), "year") > 5) {
					pt.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");
					return;
				}
				let m$1 = /* @__PURE__ */ a.db.getDateFormat(), e = [], c = null, i = /* @__PURE__ */ (0, Dt$1.default)(k);
				for (; i.valueOf() <= u;) a.db.isInvalidDate(i, m$1, l, f$1) ? c ? c.end = i : c = {
					start: i,
					end: i
				} : c && (e.push(c), c = null), i = /* @__PURE__ */ i.add(1, "d");
				p.append("g").selectAll("rect").data(e).enter().append("rect").attr("id", (S) => "exclude-" + S.start.format("YYYY-MM-DD")).attr("x", (S) => y(/* @__PURE__ */ S.start.startOf("day")) + T).attr("y", r.gridLineStartPadding).attr("width", (S) => y(/* @__PURE__ */ S.end.endOf("day")) - y(/* @__PURE__ */ S.start.startOf("day"))).attr("height", b - v - r.gridLineStartPadding).attr("transform-origin", function(S, E) {
					return (y(S.start) + T + .5 * (y(S.end) - y(S.start))).toString() + "px " + (E * g + .5 * b).toString() + "px";
				}).attr("class", "exclude-range");
			}
			m(R, "drawExcludeDays");
			function $(g, v, T, x) {
				let b = /* @__PURE__ */ a.db.getDateFormat(), w = /* @__PURE__ */ a.db.getAxisFormat(), l;
				w ? l = w : b === "D" ? l = "%d" : l = r.axisFormat ?? "%Y-%m-%d";
				let f$1 = /* @__PURE__ */ Su(y).tickSize(-x + v + r.gridLineStartPadding).tickFormat(/* @__PURE__ */ Hn(l)), u = /* @__PURE__ */ /^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(a.db.getTickInterval() || r.tickInterval);
				if (u !== null) {
					let m$1 = u[1], e = u[2], c = a.db.getWeekday() || r.weekday;
					switch (e) {
						case "millisecond":
							f$1.ticks(/* @__PURE__ */ jt.every(m$1));
							break;
						case "second":
							f$1.ticks(/* @__PURE__ */ Tt.every(m$1));
							break;
						case "minute":
							f$1.ticks(/* @__PURE__ */ we.every(m$1));
							break;
						case "hour":
							f$1.ticks(/* @__PURE__ */ be.every(m$1));
							break;
						case "day":
							f$1.ticks(/* @__PURE__ */ Dt.every(m$1));
							break;
						case "week":
							f$1.ticks(/* @__PURE__ */ qe[c].every(m$1));
							break;
						case "month":
							f$1.ticks(/* @__PURE__ */ ke.every(m$1));
							break;
					}
				}
				if (p.append("g").attr("class", "grid").attr("transform", "translate(" + g + ", " + (x - 50) + ")").call(f$1).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10).attr("dy", "1em"), a.db.topAxisEnabled() || r.topAxis) {
					let m$1 = /* @__PURE__ */ ku(y).tickSize(-x + v + r.gridLineStartPadding).tickFormat(/* @__PURE__ */ Hn(l));
					if (u !== null) {
						let e = u[1], c = u[2], i = a.db.getWeekday() || r.weekday;
						switch (c) {
							case "millisecond":
								m$1.ticks(/* @__PURE__ */ jt.every(e));
								break;
							case "second":
								m$1.ticks(/* @__PURE__ */ Tt.every(e));
								break;
							case "minute":
								m$1.ticks(/* @__PURE__ */ we.every(e));
								break;
							case "hour":
								m$1.ticks(/* @__PURE__ */ be.every(e));
								break;
							case "day":
								m$1.ticks(/* @__PURE__ */ Dt.every(e));
								break;
							case "week":
								m$1.ticks(/* @__PURE__ */ qe[i].every(e));
								break;
							case "month":
								m$1.ticks(/* @__PURE__ */ ke.every(e));
								break;
						}
					}
					p.append("g").attr("class", "grid").attr("transform", "translate(" + g + ", " + v + ")").call(m$1).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10);
				}
			}
			m($, "makeGrid");
			function U(g, v) {
				let T = 0, x = /* @__PURE__ */ Object.keys(G).map((b) => [b, G[b]]);
				p.append("g").selectAll("text").data(x).enter().append(function(b) {
					let w = /* @__PURE__ */ b[0].split(hn.lineBreakRegex), l = -(w.length - 1) / 2, f$1 = /* @__PURE__ */ _.createElementNS("http://www.w3.org/2000/svg", "text");
					f$1.setAttribute("dy", l + "em");
					for (let [k, u] of w.entries()) {
						let m$1 = /* @__PURE__ */ _.createElementNS("http://www.w3.org/2000/svg", "tspan");
						m$1.setAttribute("alignment-baseline", "central"), m$1.setAttribute("x", "10"), k > 0 && m$1.setAttribute("dy", "1em"), m$1.textContent = u, f$1.appendChild(m$1);
					}
					return f$1;
				}).attr("x", 10).attr("y", function(b, w) {
					if (w > 0) for (let l = 0; l < w; l++) return T += x[w - 1][1], b[1] * g / 2 + T * g + v;
					else return b[1] * g / 2 + v;
				}).attr("font-size", r.sectionFontSize).attr("class", function(b) {
					for (let [w, l] of W.entries()) if (b[0] === l) return "sectionTitle sectionTitle" + w % r.numberSectionStyles;
					return "sectionTitle";
				});
			}
			m(U, "vertLabels");
			function B(g, v, T, x) {
				let b = /* @__PURE__ */ a.db.getTodayMarker();
				if (b === "off") return;
				let w = /* @__PURE__ */ p.append("g").attr("class", "today"), l = /* @__PURE__ */ new Date(), f$1 = /* @__PURE__ */ w.append("line");
				f$1.attr("x1", y(l) + g).attr("x2", y(l) + g).attr("y1", r.titleTopMargin).attr("y2", x - r.titleTopMargin).attr("class", "today"), b !== "" && f$1.attr("style", /* @__PURE__ */ b.replace(/,/g, ";"));
			}
			m(B, "drawToday");
			function j(g) {
				let v = {}, T = [];
				for (let x = 0, b = g.length; x < b; ++x) Object.prototype.hasOwnProperty.call(v, g[x]) || (v[g[x]] = !0, T.push(g[x]));
				return T;
			}
			m(j, "checkUnique");
		}, "draw")
	},
	styles: /* @__PURE__ */ m((t) => `
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
export { or as t };
