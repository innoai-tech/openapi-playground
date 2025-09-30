const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-mermaid.46mTL6Bq.chunk.js","assets/vendor-min-mermaid~chunk-2XYWPRAO.Da8Ms7Co.chunk.js"])))=>i.map(i=>d[i]);
import { $ as o, Q as n, Z as m, et as q$1 } from "./vendor-min-mermaid~chunk-2XYWPRAO.Da8Ms7Co.chunk.js";
var scriptRel = "modulepreload";
var assetsURL = function(dep) {
	return "/__APP_BASE_HREF__/" + dep;
};
var seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
	let promise = /* @__PURE__ */ Promise.resolve();
	if (deps && deps.length > 0) {
		let allSettled = function(promises$2) {
			return Promise.all(/* @__PURE__ */ promises$2.map((p$2) => Promise.resolve(p$2).then((value$1) => ({
				status: "fulfilled",
				value: value$1
			}), (reason) => ({
				status: "rejected",
				reason
			}))));
		};
		const links = /* @__PURE__ */ document.getElementsByTagName("link"), cspNonceMeta = /* @__PURE__ */ document.querySelector("meta[property=csp-nonce]"), cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
		promise = /* @__PURE__ */ allSettled(/* @__PURE__ */ deps.map((dep) => {
			dep = /* @__PURE__ */ assetsURL(dep, importerUrl);
			if (dep in seen) return;
			seen[dep] = !0;
			const isCss = /* @__PURE__ */ dep.endsWith(".css"), cssSelector = isCss ? "[rel=\"stylesheet\"]" : "";
			if (importerUrl) for (let i$1 = links.length - 1; i$1 >= 0; i$1--) {
				const link$1 = links[i$1];
				if (link$1.href === dep && (!isCss || link$1.rel === "stylesheet")) return;
			}
			else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) return;
			const link = /* @__PURE__ */ document.createElement("link");
			link.rel = isCss ? "stylesheet" : scriptRel;
			if (!isCss) link.as = "script";
			link.crossOrigin = "";
			link.href = dep;
			if (cspNonce) link.setAttribute("nonce", cspNonce);
			document.head.appendChild(link);
			if (isCss) return new Promise((res, rej) => {
				link.addEventListener("load", res);
				link.addEventListener("error", () => rej(/* @__PURE__ */ Error(`Unable to preload CSS for ${dep}`)));
			});
		}));
	}
	function handlePreloadError(err$2) {
		const e$1 = new Event("vite:preloadError", { cancelable: !0 });
		e$1.payload = err$2;
		window.dispatchEvent(e$1);
		if (!e$1.defaultPrevented) throw err$2;
	}
	return promise.then((res) => {
		for (const item of res || []) {
			if (item.status !== "rejected") continue;
			handlePreloadError(item.reason);
		}
		return baseModule().catch(handlePreloadError);
	});
};
var Bo$1 = /* @__PURE__ */ n((fr, lr$1) => {
	(function(t, e) {
		typeof fr == "object" && typeof lr$1 < "u" ? lr$1.exports = /* @__PURE__ */ e() : typeof define == "function" && define.amd ? define(e) : (t = typeof globalThis < "u" ? globalThis : t || self).dayjs = /* @__PURE__ */ e();
	})(fr, function() {
		var t = 1e3, e = 6e4, n$1 = 36e5, i = "millisecond", o$1 = "second", a$1 = "minute", s = "hour", u$1 = "day", l = "week", f = "month", h$2 = "quarter", p$2 = "year", c$1 = "date", m$3 = "Invalid Date", _ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, M = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, T = {
			name: "en",
			weekdays: /* @__PURE__ */ "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			months: /* @__PURE__ */ "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			ordinal: /* @__PURE__ */ m(function(v$1) {
				var d$1 = [
					"th",
					"st",
					"nd",
					"rd"
				], x = v$1 % 100;
				return "[" + v$1 + (d$1[(x - 20) % 10] || d$1[x] || d$1[0]) + "]";
			}, "ordinal")
		}, k$1 = /* @__PURE__ */ m(function(v$1, d$1, x) {
			var S$2 = /* @__PURE__ */ String(v$1);
			return !S$2 || S$2.length >= d$1 ? v$1 : "" + Array(d$1 + 1 - S$2.length).join(x) + v$1;
		}, "m"), I = {
			s: k$1,
			z: /* @__PURE__ */ m(function(v$1) {
				var d$1 = -v$1.utcOffset(), x = /* @__PURE__ */ Math.abs(d$1), S$2 = /* @__PURE__ */ Math.floor(x / 60), y = x % 60;
				return (d$1 <= 0 ? "+" : "-") + k$1(S$2, 2, "0") + ":" + k$1(y, 2, "0");
			}, "z"),
			m: /* @__PURE__ */ m(function v$1(d$1, x) {
				if (d$1.date() < x.date()) return -v$1(x, d$1);
				var S$2 = 12 * (x.year() - d$1.year()) + (x.month() - d$1.month()), y = /* @__PURE__ */ d$1.clone().add(S$2, f), D = x - y < 0, $$1 = /* @__PURE__ */ d$1.clone().add(S$2 + (D ? -1 : 1), f);
				return +(-(S$2 + (x - y) / (D ? y - $$1 : $$1 - y)) || 0);
			}, "t"),
			a: /* @__PURE__ */ m(function(v$1) {
				return v$1 < 0 ? Math.ceil(v$1) || 0 : Math.floor(v$1);
			}, "a"),
			p: /* @__PURE__ */ m(function(v$1) {
				return {
					M: f,
					y: p$2,
					w: l,
					d: u$1,
					D: c$1,
					h: s,
					m: a$1,
					s: o$1,
					ms: i,
					Q: h$2
				}[v$1] || String(v$1 || "").toLowerCase().replace(/s$/, "");
			}, "p"),
			u: /* @__PURE__ */ m(function(v$1) {
				return v$1 === void 0;
			}, "u")
		}, C = "en", A = {};
		A[C] = T;
		var O = "$isDayjsObject", w = /* @__PURE__ */ m(function(v$1) {
			return v$1 instanceof B || !(!v$1 || !v$1[O]);
		}, "S"), Y = /* @__PURE__ */ m(function v$1(d$1, x, S$2) {
			var y;
			if (!d$1) return C;
			if (typeof d$1 == "string") {
				var D = /* @__PURE__ */ d$1.toLowerCase();
				A[D] && (y = D), x && (A[D] = x, y = D);
				var $$1 = /* @__PURE__ */ d$1.split("-");
				if (!y && $$1.length > 1) return v$1($$1[0]);
			} else {
				var P$1 = d$1.name;
				A[P$1] = d$1, y = P$1;
			}
			return !S$2 && y && (C = y), y || !S$2 && C;
		}, "t"), U$1 = /* @__PURE__ */ m(function(v$1, d$1) {
			if (w(v$1)) return v$1.clone();
			var x = typeof d$1 == "object" ? d$1 : {};
			return x.date = v$1, x.args = arguments, new B(x);
		}, "O"), E = I;
		E.l = Y, E.i = w, E.w = function(v$1, d$1) {
			return U$1(v$1, {
				locale: d$1.$L,
				utc: d$1.$u,
				x: d$1.$x,
				$offset: d$1.$offset
			});
		};
		var B = /* @__PURE__ */ function() {
			function v$1(x) {
				this.$L = /* @__PURE__ */ Y(x.locale, null, !0), this.parse(x), this.$x = this.$x || x.x || {}, this[O] = !0;
			}
			m(v$1, "M");
			var d$1 = v$1.prototype;
			return d$1.parse = function(x) {
				this.$d = /* @__PURE__ */ function(S$2) {
					var y = S$2.date, D = S$2.utc;
					if (y === null) return /* @__PURE__ */ new Date(NaN);
					if (E.u(y)) return /* @__PURE__ */ new Date();
					if (y instanceof Date) return new Date(y);
					if (typeof y == "string" && !/Z$/i.test(y)) {
						var $$1 = /* @__PURE__ */ y.match(_);
						if ($$1) {
							var P$1 = $$1[2] - 1 || 0, z$1 = /* @__PURE__ */ ($$1[7] || "0").substring(0, 3);
							return D ? new Date(Date.UTC($$1[1], P$1, $$1[3] || 1, $$1[4] || 0, $$1[5] || 0, $$1[6] || 0, z$1)) : new Date($$1[1], P$1, $$1[3] || 1, $$1[4] || 0, $$1[5] || 0, $$1[6] || 0, z$1);
						}
					}
					return new Date(y);
				}(x), this.init();
			}, d$1.init = function() {
				var x = this.$d;
				this.$y = /* @__PURE__ */ x.getFullYear(), this.$M = /* @__PURE__ */ x.getMonth(), this.$D = /* @__PURE__ */ x.getDate(), this.$W = /* @__PURE__ */ x.getDay(), this.$H = /* @__PURE__ */ x.getHours(), this.$m = /* @__PURE__ */ x.getMinutes(), this.$s = /* @__PURE__ */ x.getSeconds(), this.$ms = /* @__PURE__ */ x.getMilliseconds();
			}, d$1.$utils = function() {
				return E;
			}, d$1.isValid = function() {
				return this.$d.toString() !== m$3;
			}, d$1.isSame = function(x, S$2) {
				var y = /* @__PURE__ */ U$1(x);
				return this.startOf(S$2) <= y && y <= this.endOf(S$2);
			}, d$1.isAfter = function(x, S$2) {
				return U$1(x) < this.startOf(S$2);
			}, d$1.isBefore = function(x, S$2) {
				return this.endOf(S$2) < U$1(x);
			}, d$1.$g = function(x, S$2, y) {
				return E.u(x) ? this[S$2] : this.set(y, x);
			}, d$1.unix = function() {
				return Math.floor(this.valueOf() / 1e3);
			}, d$1.valueOf = function() {
				return this.$d.getTime();
			}, d$1.startOf = function(x, S$2) {
				var y = this, D = !!E.u(S$2) || S$2, $$1 = /* @__PURE__ */ E.p(x), P$1 = /* @__PURE__ */ m(function(st, Z$1) {
					var b = /* @__PURE__ */ E.w(y.$u ? Date.UTC(y.$y, Z$1, st) : new Date(y.$y, Z$1, st), y);
					return D ? b : b.endOf(u$1);
				}, "l"), z$1 = /* @__PURE__ */ m(function(st, Z$1) {
					return E.w(/* @__PURE__ */ y.toDate()[st].apply(/* @__PURE__ */ y.toDate("s"), /* @__PURE__ */ (D ? [
						0,
						0,
						0,
						0
					] : [
						23,
						59,
						59,
						999
					]).slice(Z$1)), y);
				}, "$"), W = this.$W, X = this.$M, J$1 = this.$D, ht = "set" + (this.$u ? "UTC" : "");
				switch ($$1) {
					case p$2: return D ? P$1(1, 0) : P$1(31, 11);
					case f: return D ? P$1(1, X) : P$1(0, X + 1);
					case l:
						var Q = this.$locale().weekStart || 0, dt = (W < Q ? W + 7 : W) - Q;
						return P$1(D ? J$1 - dt : J$1 + (6 - dt), X);
					case u$1:
					case c$1: return z$1(ht + "Hours", 0);
					case s: return z$1(ht + "Minutes", 1);
					case a$1: return z$1(ht + "Seconds", 2);
					case o$1: return z$1(ht + "Milliseconds", 3);
					default: return this.clone();
				}
			}, d$1.endOf = function(x) {
				return this.startOf(x, !1);
			}, d$1.$set = function(x, S$2) {
				var y, D = /* @__PURE__ */ E.p(x), $$1 = "set" + (this.$u ? "UTC" : ""), P$1 = (y = {}, y[u$1] = $$1 + "Date", y[c$1] = $$1 + "Date", y[f] = $$1 + "Month", y[p$2] = $$1 + "FullYear", y[s] = $$1 + "Hours", y[a$1] = $$1 + "Minutes", y[o$1] = $$1 + "Seconds", y[i] = $$1 + "Milliseconds", y)[D], z$1 = D === u$1 ? this.$D + (S$2 - this.$W) : S$2;
				if (D === f || D === p$2) {
					var W = /* @__PURE__ */ this.clone().set(c$1, 1);
					W.$d[P$1](z$1), W.init(), this.$d = W.set(c$1, /* @__PURE__ */ Math.min(this.$D, /* @__PURE__ */ W.daysInMonth())).$d;
				} else P$1 && this.$d[P$1](z$1);
				return this.init(), this;
			}, d$1.set = function(x, S$2) {
				return this.clone().$set(x, S$2);
			}, d$1.get = function(x) {
				return this[E.p(x)]();
			}, d$1.add = function(x, S$2) {
				var y, D = this;
				x = /* @__PURE__ */ Number(x);
				var $$1 = /* @__PURE__ */ E.p(S$2), P$1 = /* @__PURE__ */ m(function(X) {
					var J$1 = /* @__PURE__ */ U$1(D);
					return E.w(/* @__PURE__ */ J$1.date(J$1.date() + Math.round(X * x)), D);
				}, "y");
				if ($$1 === f) return this.set(f, this.$M + x);
				if ($$1 === p$2) return this.set(p$2, this.$y + x);
				if ($$1 === u$1) return P$1(1);
				if ($$1 === l) return P$1(7);
				var z$1 = (y = {}, y[a$1] = e, y[s] = n$1, y[o$1] = t, y)[$$1] || 1, W = this.$d.getTime() + x * z$1;
				return E.w(W, this);
			}, d$1.subtract = function(x, S$2) {
				return this.add(-1 * x, S$2);
			}, d$1.format = function(x) {
				var S$2 = this, y = /* @__PURE__ */ this.$locale();
				if (!this.isValid()) return y.invalidDate || m$3;
				var D = x || "YYYY-MM-DDTHH:mm:ssZ", $$1 = /* @__PURE__ */ E.z(this), P$1 = this.$H, z$1 = this.$m, W = this.$M, X = y.weekdays, J$1 = y.months, ht = y.meridiem, Q = /* @__PURE__ */ m(function(Z$1, b, R$1, F$1) {
					return Z$1 && (Z$1[b] || Z$1(S$2, D)) || R$1[b].slice(0, F$1);
				}, "h"), dt = /* @__PURE__ */ m(function(Z$1) {
					return E.s(P$1 % 12 || 12, Z$1, "0");
				}, "d"), st = ht || function(Z$1, b, R$1) {
					var F$1 = Z$1 < 12 ? "AM" : "PM";
					return R$1 ? F$1.toLowerCase() : F$1;
				};
				return D.replace(M, function(Z$1, b) {
					return b || function(R$1) {
						switch (R$1) {
							case "YY": return String(S$2.$y).slice(-2);
							case "YYYY": return E.s(S$2.$y, 4, "0");
							case "M": return W + 1;
							case "MM": return E.s(W + 1, 2, "0");
							case "MMM": return Q(y.monthsShort, W, J$1, 3);
							case "MMMM": return Q(J$1, W);
							case "D": return S$2.$D;
							case "DD": return E.s(S$2.$D, 2, "0");
							case "d": return String(S$2.$W);
							case "dd": return Q(y.weekdaysMin, S$2.$W, X, 2);
							case "ddd": return Q(y.weekdaysShort, S$2.$W, X, 3);
							case "dddd": return X[S$2.$W];
							case "H": return String(P$1);
							case "HH": return E.s(P$1, 2, "0");
							case "h": return dt(1);
							case "hh": return dt(2);
							case "a": return st(P$1, z$1, !0);
							case "A": return st(P$1, z$1, !1);
							case "m": return String(z$1);
							case "mm": return E.s(z$1, 2, "0");
							case "s": return String(S$2.$s);
							case "ss": return E.s(S$2.$s, 2, "0");
							case "SSS": return E.s(S$2.$ms, 3, "0");
							case "Z": return $$1;
						}
						return null;
					}(Z$1) || $$1.replace(":", "");
				});
			}, d$1.utcOffset = function() {
				return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
			}, d$1.diff = function(x, S$2, y) {
				var D, $$1 = this, P$1 = /* @__PURE__ */ E.p(S$2), z$1 = /* @__PURE__ */ U$1(x), W = (z$1.utcOffset() - this.utcOffset()) * e, X = this - z$1, J$1 = /* @__PURE__ */ m(function() {
					return E.m($$1, z$1);
				}, "D");
				switch (P$1) {
					case p$2:
						D = J$1() / 12;
						break;
					case f:
						D = /* @__PURE__ */ J$1();
						break;
					case h$2:
						D = J$1() / 3;
						break;
					case l:
						D = (X - W) / 6048e5;
						break;
					case u$1:
						D = (X - W) / 864e5;
						break;
					case s:
						D = X / n$1;
						break;
					case a$1:
						D = X / e;
						break;
					case o$1:
						D = X / t;
						break;
					default: D = X;
				}
				return y ? D : E.a(D);
			}, d$1.daysInMonth = function() {
				return this.endOf(f).$D;
			}, d$1.$locale = function() {
				return A[this.$L];
			}, d$1.locale = function(x, S$2) {
				if (!x) return this.$L;
				var y = /* @__PURE__ */ this.clone(), D = /* @__PURE__ */ Y(x, S$2, !0);
				return D && (y.$L = D), y;
			}, d$1.clone = function() {
				return E.w(this.$d, this);
			}, d$1.toDate = function() {
				return new Date(this.valueOf());
			}, d$1.toJSON = function() {
				return this.isValid() ? this.toISOString() : null;
			}, d$1.toISOString = function() {
				return this.$d.toISOString();
			}, d$1.toString = function() {
				return this.$d.toUTCString();
			}, v$1;
		}(), N$1 = B.prototype;
		return U$1.prototype = N$1, [
			["$ms", i],
			["$s", o$1],
			["$m", a$1],
			["$H", s],
			["$W", u$1],
			["$M", f],
			["$y", p$2],
			["$D", c$1]
		].forEach(function(v$1) {
			N$1[v$1[1]] = function(d$1) {
				return this.$g(d$1, v$1[0], v$1[1]);
			};
		}), U$1.extend = function(v$1, d$1) {
			return v$1.$i || (v$1(d$1, B, U$1), v$1.$i = !0), U$1;
		}, U$1.locale = Y, U$1.isDayjs = w, U$1.unix = function(v$1) {
			return U$1(1e3 * v$1);
		}, U$1.en = A[C], U$1.Ls = A, U$1.p = {}, U$1;
	});
});
var qo$1 = /* @__PURE__ */ q$1(/* @__PURE__ */ Bo$1(), 1);
var St = {
	trace: 0,
	debug: 1,
	info: 2,
	warn: 3,
	error: 4,
	fatal: 5
}, pt = {
	trace: /* @__PURE__ */ m((...t) => {}, "trace"),
	debug: /* @__PURE__ */ m((...t) => {}, "debug"),
	info: /* @__PURE__ */ m((...t) => {}, "info"),
	warn: /* @__PURE__ */ m((...t) => {}, "warn"),
	error: /* @__PURE__ */ m((...t) => {}, "error"),
	fatal: /* @__PURE__ */ m((...t) => {}, "fatal")
}, Wh = /* @__PURE__ */ m(function(t = "fatal") {
	let e = St.fatal;
	typeof t == "string" ? t.toLowerCase() in St && (e = St[t]) : typeof t == "number" && (e = t), pt.trace = () => {}, pt.debug = () => {}, pt.info = () => {}, pt.warn = () => {}, pt.error = () => {}, pt.fatal = () => {}, e <= St.fatal && (pt.fatal = console.error ? console.error.bind(console, /* @__PURE__ */ mt("FATAL"), "color: orange") : console.log.bind(console, "\x1B[35m", /* @__PURE__ */ mt("FATAL"))), e <= St.error && (pt.error = console.error ? console.error.bind(console, /* @__PURE__ */ mt("ERROR"), "color: orange") : console.log.bind(console, "\x1B[31m", /* @__PURE__ */ mt("ERROR"))), e <= St.warn && (pt.warn = console.warn ? console.warn.bind(console, /* @__PURE__ */ mt("WARN"), "color: orange") : console.log.bind(console, "\x1B[33m", /* @__PURE__ */ mt("WARN"))), e <= St.info && (pt.info = console.info ? console.info.bind(console, /* @__PURE__ */ mt("INFO"), "color: lightblue") : console.log.bind(console, "\x1B[34m", /* @__PURE__ */ mt("INFO"))), e <= St.debug && (pt.debug = console.debug ? console.debug.bind(console, /* @__PURE__ */ mt("DEBUG"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", /* @__PURE__ */ mt("DEBUG"))), e <= St.trace && (pt.trace = console.debug ? console.debug.bind(console, /* @__PURE__ */ mt("TRACE"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", /* @__PURE__ */ mt("TRACE")));
}, "setLogLevel"), mt = /* @__PURE__ */ m((t) => `%c${(0, qo$1.default)().format("ss.SSS")} : ${t} : `, "format");
function Wo$1(t, e) {
	let n$1;
	if (e === void 0) for (let i of t) i != null && (n$1 < i || n$1 === void 0 && i >= i) && (n$1 = i);
	else {
		let i = -1;
		for (let o$1 of t) (o$1 = /* @__PURE__ */ e(o$1, ++i, t)) != null && (n$1 < o$1 || n$1 === void 0 && o$1 >= o$1) && (n$1 = o$1);
	}
	return n$1;
}
m(Wo$1, "max");
function Vo$1(t, e) {
	let n$1;
	if (e === void 0) for (let i of t) i != null && (n$1 > i || n$1 === void 0 && i >= i) && (n$1 = i);
	else {
		let i = -1;
		for (let o$1 of t) (o$1 = /* @__PURE__ */ e(o$1, ++i, t)) != null && (n$1 > o$1 || n$1 === void 0 && o$1 >= o$1) && (n$1 = o$1);
	}
	return n$1;
}
m(Vo$1, "min");
function Vt$1(t, e) {
	return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
m(Vt$1, "ascending");
function cr$1(t, e) {
	return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
m(cr$1, "descending");
function Xt$1(t) {
	let e, n$1, i;
	t.length !== 2 ? (e = Vt$1, n$1 = /* @__PURE__ */ m((u$1, l) => Vt$1(/* @__PURE__ */ t(u$1), l), "compare2"), i = /* @__PURE__ */ m((u$1, l) => t(u$1) - l, "delta")) : (e = t === Vt$1 || t === cr$1 ? t : cu, n$1 = t, i = t);
	function o$1(u$1, l, f = 0, h$2 = u$1.length) {
		if (f < h$2) {
			if (e(l, l) !== 0) return h$2;
			do {
				let p$2 = f + h$2 >>> 1;
				n$1(u$1[p$2], l) < 0 ? f = p$2 + 1 : h$2 = p$2;
			} while (f < h$2);
		}
		return f;
	}
	m(o$1, "left");
	function a$1(u$1, l, f = 0, h$2 = u$1.length) {
		if (f < h$2) {
			if (e(l, l) !== 0) return h$2;
			do {
				let p$2 = f + h$2 >>> 1;
				n$1(u$1[p$2], l) <= 0 ? f = p$2 + 1 : h$2 = p$2;
			} while (f < h$2);
		}
		return f;
	}
	m(a$1, "right");
	function s(u$1, l, f = 0, h$2 = u$1.length) {
		let p$2 = /* @__PURE__ */ o$1(u$1, l, f, h$2 - 1);
		return p$2 > f && i(u$1[p$2 - 1], l) > -i(u$1[p$2], l) ? p$2 - 1 : p$2;
	}
	return m(s, "center"), {
		left: o$1,
		center: s,
		right: a$1
	};
}
m(Xt$1, "bisector");
function cu() {
	return 0;
}
m(cu, "zero");
function hr$1(t) {
	return t === null ? NaN : +t;
}
m(hr$1, "number");
var Xo$1 = /* @__PURE__ */ Xt$1(Vt$1), Go$1 = Xo$1.right;
Xo$1.left;
Xt$1(hr$1).center;
var pr = Go$1;
var fe = class extends Map {
	static {
		m(this, "InternMap");
	}
	constructor(e, n$1 = xu) {
		if (super(), Object.defineProperties(this, {
			_intern: { value: /* @__PURE__ */ new Map() },
			_key: { value: n$1 }
		}), e != null) for (let [i, o$1] of e) this.set(i, o$1);
	}
	get(e) {
		return super.get(/* @__PURE__ */ Zo$1(this, e));
	}
	has(e) {
		return super.has(/* @__PURE__ */ Zo$1(this, e));
	}
	set(e, n$1) {
		return super.set(/* @__PURE__ */ mu(this, e), n$1);
	}
	delete(e) {
		return super.delete(/* @__PURE__ */ du(this, e));
	}
};
function Zo$1({ _intern: t, _key: e }, n$1) {
	let i = /* @__PURE__ */ e(n$1);
	return t.has(i) ? t.get(i) : n$1;
}
m(Zo$1, "intern_get");
function mu({ _intern: t, _key: e }, n$1) {
	let i = /* @__PURE__ */ e(n$1);
	return t.has(i) ? t.get(i) : (t.set(i, n$1), n$1);
}
m(mu, "intern_set");
function du({ _intern: t, _key: e }, n$1) {
	let i = /* @__PURE__ */ e(n$1);
	return t.has(i) && (n$1 = /* @__PURE__ */ t.get(i), t.delete(i)), n$1;
}
m(du, "intern_delete");
function xu(t) {
	return t !== null && typeof t == "object" ? t.valueOf() : t;
}
m(xu, "keyof");
var _u = /* @__PURE__ */ Math.sqrt(50), gu = /* @__PURE__ */ Math.sqrt(10), yu = /* @__PURE__ */ Math.sqrt(2);
function cn(t, e, n$1) {
	let i = (e - t) / Math.max(0, n$1), o$1 = /* @__PURE__ */ Math.floor(/* @__PURE__ */ Math.log10(i)), a$1 = i / Math.pow(10, o$1), s = a$1 >= _u ? 10 : a$1 >= gu ? 5 : a$1 >= yu ? 2 : 1, u$1, l, f;
	return o$1 < 0 ? (f = Math.pow(10, -o$1) / s, u$1 = /* @__PURE__ */ Math.round(t * f), l = /* @__PURE__ */ Math.round(e * f), u$1 / f < t && ++u$1, l / f > e && --l, f = -f) : (f = Math.pow(10, o$1) * s, u$1 = /* @__PURE__ */ Math.round(t / f), l = /* @__PURE__ */ Math.round(e / f), u$1 * f < t && ++u$1, l * f > e && --l), l < u$1 && .5 <= n$1 && n$1 < 2 ? cn(t, e, n$1 * 2) : [
		u$1,
		l,
		f
	];
}
m(cn, "tickSpec");
function hn$1(t, e, n$1) {
	if (e = +e, t = +t, n$1 = +n$1, !(n$1 > 0)) return [];
	if (t === e) return [t];
	let i = e < t, [o$1, a$1, s] = i ? cn(e, t, n$1) : cn(t, e, n$1);
	if (!(a$1 >= o$1)) return [];
	let u$1 = a$1 - o$1 + 1, l = new Array(u$1);
	if (i) if (s < 0) for (let f = 0; f < u$1; ++f) l[f] = (a$1 - f) / -s;
	else for (let f = 0; f < u$1; ++f) l[f] = (a$1 - f) * s;
	else if (s < 0) for (let f = 0; f < u$1; ++f) l[f] = (o$1 + f) / -s;
	else for (let f = 0; f < u$1; ++f) l[f] = (o$1 + f) * s;
	return l;
}
m(hn$1, "ticks");
function Ee$1(t, e, n$1) {
	return e = +e, t = +t, n$1 = +n$1, cn(t, e, n$1)[2];
}
m(Ee$1, "tickIncrement");
function le(t, e, n$1) {
	e = +e, t = +t, n$1 = +n$1;
	let i = e < t, o$1 = i ? Ee$1(e, t, n$1) : Ee$1(t, e, n$1);
	return (i ? -1 : 1) * (o$1 < 0 ? 1 / -o$1 : o$1);
}
m(le, "tickStep");
function pn$1(t, e, n$1) {
	t = +t, e = +e, n$1 = (o$1 = arguments.length) < 2 ? (e = t, t = 0, 1) : o$1 < 3 ? 1 : +n$1;
	for (var i = -1, o$1 = Math.max(0, /* @__PURE__ */ Math.ceil((e - t) / n$1)) | 0, a$1 = new Array(o$1); ++i < o$1;) a$1[i] = t + i * n$1;
	return a$1;
}
m(pn$1, "range");
function mr$1(t) {
	return t;
}
m(mr$1, "default");
var dn = 1, dr$1 = 2, xr = 3, mn = 4, Qo = 1e-6;
function vu(t) {
	return "translate(" + t + ",0)";
}
m(vu, "translateX");
function wu(t) {
	return "translate(0," + t + ")";
}
m(wu, "translateY");
function bu(t) {
	return (e) => +t(e);
}
m(bu, "number");
function Mu(t, e) {
	return e = Math.max(0, t.bandwidth() - e * 2) / 2, t.round() && (e = /* @__PURE__ */ Math.round(e)), (n$1) => +t(n$1) + e;
}
m(Mu, "center");
function Tu() {
	return !this.__axis;
}
m(Tu, "entering");
function Ko$1(t, e) {
	var n$1 = [], i = null, o$1 = null, a$1 = 6, s = 6, u$1 = 3, l = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : .5, f = t === dn || t === mn ? -1 : 1, h$2 = t === mn || t === dr$1 ? "x" : "y", p$2 = t === dn || t === xr ? vu : wu;
	function c$1(m$3) {
		var _ = i ?? (e.ticks ? e.ticks.apply(e, n$1) : e.domain()), M = o$1 ?? (e.tickFormat ? e.tickFormat.apply(e, n$1) : mr$1), T = Math.max(a$1, 0) + u$1, k$1 = /* @__PURE__ */ e.range(), I = +k$1[0] + l, C = +k$1[k$1.length - 1] + l, A = /* @__PURE__ */ (e.bandwidth ? Mu : bu)(/* @__PURE__ */ e.copy(), l), O = m$3.selection ? m$3.selection() : m$3, w = /* @__PURE__ */ O.selectAll(".domain").data([null]), Y = /* @__PURE__ */ O.selectAll(".tick").data(_, e).order(), U$1 = /* @__PURE__ */ Y.exit(), E = /* @__PURE__ */ Y.enter().append("g").attr("class", "tick"), B = /* @__PURE__ */ Y.select("line"), N$1 = /* @__PURE__ */ Y.select("text");
		w = /* @__PURE__ */ w.merge(/* @__PURE__ */ w.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), Y = /* @__PURE__ */ Y.merge(E), B = /* @__PURE__ */ B.merge(/* @__PURE__ */ E.append("line").attr("stroke", "currentColor").attr(h$2 + "2", f * a$1)), N$1 = /* @__PURE__ */ N$1.merge(/* @__PURE__ */ E.append("text").attr("fill", "currentColor").attr(h$2, f * T).attr("dy", t === dn ? "0em" : t === xr ? "0.71em" : "0.32em")), m$3 !== O && (w = /* @__PURE__ */ w.transition(m$3), Y = /* @__PURE__ */ Y.transition(m$3), B = /* @__PURE__ */ B.transition(m$3), N$1 = /* @__PURE__ */ N$1.transition(m$3), U$1 = /* @__PURE__ */ U$1.transition(m$3).attr("opacity", Qo).attr("transform", function(v$1) {
			return isFinite(v$1 = /* @__PURE__ */ A(v$1)) ? p$2(v$1 + l) : this.getAttribute("transform");
		}), E.attr("opacity", Qo).attr("transform", function(v$1) {
			var d$1 = this.parentNode.__axis;
			return p$2((d$1 && isFinite(d$1 = /* @__PURE__ */ d$1(v$1)) ? d$1 : A(v$1)) + l);
		})), U$1.remove(), w.attr("d", t === mn || t === dr$1 ? s ? "M" + f * s + "," + I + "H" + l + "V" + C + "H" + f * s : "M" + l + "," + I + "V" + C : s ? "M" + I + "," + f * s + "V" + l + "H" + C + "V" + f * s : "M" + I + "," + l + "H" + C), Y.attr("opacity", 1).attr("transform", function(v$1) {
			return p$2(A(v$1) + l);
		}), B.attr(h$2 + "2", f * a$1), N$1.attr(h$2, f * T).text(M), O.filter(Tu).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === dr$1 ? "start" : t === mn ? "end" : "middle"), O.each(function() {
			this.__axis = A;
		});
	}
	return m(c$1, "axis"), c$1.scale = function(m$3) {
		return arguments.length ? (e = m$3, c$1) : e;
	}, c$1.ticks = function() {
		return n$1 = /* @__PURE__ */ Array.from(arguments), c$1;
	}, c$1.tickArguments = function(m$3) {
		return arguments.length ? (n$1 = m$3 == null ? [] : Array.from(m$3), c$1) : n$1.slice();
	}, c$1.tickValues = function(m$3) {
		return arguments.length ? (i = m$3 == null ? null : Array.from(m$3), c$1) : i && i.slice();
	}, c$1.tickFormat = function(m$3) {
		return arguments.length ? (o$1 = m$3, c$1) : o$1;
	}, c$1.tickSize = function(m$3) {
		return arguments.length ? (a$1 = s = +m$3, c$1) : a$1;
	}, c$1.tickSizeInner = function(m$3) {
		return arguments.length ? (a$1 = +m$3, c$1) : a$1;
	}, c$1.tickSizeOuter = function(m$3) {
		return arguments.length ? (s = +m$3, c$1) : s;
	}, c$1.tickPadding = function(m$3) {
		return arguments.length ? (u$1 = +m$3, c$1) : u$1;
	}, c$1.offset = function(m$3) {
		return arguments.length ? (l = +m$3, c$1) : l;
	}, c$1;
}
m(Ko$1, "axis");
function ku(t) {
	return Ko$1(dn, t);
}
m(ku, "axisTop");
function Su(t) {
	return Ko$1(xr, t);
}
m(Su, "axisBottom");
function Cu() {}
m(Cu, "none");
function It$1(t) {
	return t == null ? Cu : function() {
		return this.querySelector(t);
	};
}
m(It$1, "default");
function _r(t) {
	typeof t != "function" && (t = /* @__PURE__ */ It$1(t));
	for (var e = this._groups, n$1 = e.length, i = new Array(n$1), o$1 = 0; o$1 < n$1; ++o$1) for (var a$1 = e[o$1], s = a$1.length, u$1 = i[o$1] = new Array(s), l, f, h$2 = 0; h$2 < s; ++h$2) (l = a$1[h$2]) && (f = /* @__PURE__ */ t.call(l, l.__data__, h$2, a$1)) && ("__data__" in l && (f.__data__ = l.__data__), u$1[h$2] = f);
	return new G$1(i, this._parents);
}
m(_r, "default");
function gr$1(t) {
	return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
m(gr$1, "array");
function Nu() {
	return [];
}
m(Nu, "empty");
function ce(t) {
	return t == null ? Nu : function() {
		return this.querySelectorAll(t);
	};
}
m(ce, "default");
function Au(t) {
	return function() {
		return gr$1(/* @__PURE__ */ t.apply(this, arguments));
	};
}
m(Au, "arrayAll");
function yr(t) {
	typeof t == "function" ? t = /* @__PURE__ */ Au(t) : t = /* @__PURE__ */ ce(t);
	for (var e = this._groups, n$1 = e.length, i = [], o$1 = [], a$1 = 0; a$1 < n$1; ++a$1) for (var s = e[a$1], u$1 = s.length, l, f = 0; f < u$1; ++f) (l = s[f]) && (i.push(/* @__PURE__ */ t.call(l, l.__data__, f, s)), o$1.push(l));
	return new G$1(i, o$1);
}
m(yr, "default");
function he(t) {
	return function() {
		return this.matches(t);
	};
}
m(he, "default");
function xn(t) {
	return function(e) {
		return e.matches(t);
	};
}
m(xn, "childMatcher");
var Du = Array.prototype.find;
function $u(t) {
	return function() {
		return Du.call(this.children, t);
	};
}
m($u, "childFind");
function Ou() {
	return this.firstElementChild;
}
m(Ou, "childFirst");
function vr(t) {
	return this.select(t == null ? Ou : $u(typeof t == "function" ? t : xn(t)));
}
m(vr, "default");
var Eu = Array.prototype.filter;
function Iu() {
	return Array.from(this.children);
}
m(Iu, "children");
function Ru(t) {
	return function() {
		return Eu.call(this.children, t);
	};
}
m(Ru, "childrenFilter");
function wr(t) {
	return this.selectAll(t == null ? Iu : Ru(typeof t == "function" ? t : xn(t)));
}
m(wr, "default");
function br(t) {
	typeof t != "function" && (t = /* @__PURE__ */ he(t));
	for (var e = this._groups, n$1 = e.length, i = new Array(n$1), o$1 = 0; o$1 < n$1; ++o$1) for (var a$1 = e[o$1], s = a$1.length, u$1 = i[o$1] = [], l, f = 0; f < s; ++f) (l = a$1[f]) && t.call(l, l.__data__, f, a$1) && u$1.push(l);
	return new G$1(i, this._parents);
}
m(br, "default");
function Ie$1(t) {
	return new Array(t.length);
}
m(Ie$1, "default");
function Mr() {
	return new G$1(this._enter || this._groups.map(Ie$1), this._parents);
}
m(Mr, "default");
function Re$1(t, e) {
	this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
m(Re$1, "EnterNode");
Re$1.prototype = {
	constructor: Re$1,
	appendChild: /* @__PURE__ */ m(function(t) {
		return this._parent.insertBefore(t, this._next);
	}, "appendChild"),
	insertBefore: /* @__PURE__ */ m(function(t, e) {
		return this._parent.insertBefore(t, e);
	}, "insertBefore"),
	querySelector: /* @__PURE__ */ m(function(t) {
		return this._parent.querySelector(t);
	}, "querySelector"),
	querySelectorAll: /* @__PURE__ */ m(function(t) {
		return this._parent.querySelectorAll(t);
	}, "querySelectorAll")
};
function Tr(t) {
	return function() {
		return t;
	};
}
m(Tr, "default");
function Pu(t, e, n$1, i, o$1, a$1) {
	for (var s = 0, u$1, l = e.length, f = a$1.length; s < f; ++s) (u$1 = e[s]) ? (u$1.__data__ = a$1[s], i[s] = u$1) : n$1[s] = new Re$1(t, a$1[s]);
	for (; s < l; ++s) (u$1 = e[s]) && (o$1[s] = u$1);
}
m(Pu, "bindIndex");
function Yu(t, e, n$1, i, o$1, a$1, s) {
	var u$1, l, f = /* @__PURE__ */ new Map(), h$2 = e.length, p$2 = a$1.length, c$1 = new Array(h$2), m$3;
	for (u$1 = 0; u$1 < h$2; ++u$1) (l = e[u$1]) && (c$1[u$1] = m$3 = s.call(l, l.__data__, u$1, e) + "", f.has(m$3) ? o$1[u$1] = l : f.set(m$3, l));
	for (u$1 = 0; u$1 < p$2; ++u$1) m$3 = s.call(t, a$1[u$1], u$1, a$1) + "", (l = /* @__PURE__ */ f.get(m$3)) ? (i[u$1] = l, l.__data__ = a$1[u$1], f.delete(m$3)) : n$1[u$1] = new Re$1(t, a$1[u$1]);
	for (u$1 = 0; u$1 < h$2; ++u$1) (l = e[u$1]) && f.get(c$1[u$1]) === l && (o$1[u$1] = l);
}
m(Yu, "bindKey");
function Fu(t) {
	return t.__data__;
}
m(Fu, "datum");
function kr(t, e) {
	if (!arguments.length) return Array.from(this, Fu);
	var n$1 = e ? Yu : Pu, i = this._parents, o$1 = this._groups;
	typeof t != "function" && (t = /* @__PURE__ */ Tr(t));
	for (var a$1 = o$1.length, s = new Array(a$1), u$1 = new Array(a$1), l = new Array(a$1), f = 0; f < a$1; ++f) {
		var h$2 = i[f], p$2 = o$1[f], c$1 = p$2.length, m$3 = /* @__PURE__ */ Uu(/* @__PURE__ */ t.call(h$2, h$2 && h$2.__data__, f, i)), _ = m$3.length, M = u$1[f] = new Array(_), T = s[f] = new Array(_), k$1 = l[f] = new Array(c$1);
		n$1(h$2, p$2, M, T, k$1, m$3, e);
		for (var I = 0, C = 0, A, O; I < _; ++I) if (A = M[I]) {
			for (I >= C && (C = I + 1); !(O = T[C]) && ++C < _;);
			A._next = O || null;
		}
	}
	return s = new G$1(s, i), s._enter = u$1, s._exit = l, s;
}
m(kr, "default");
function Uu(t) {
	return typeof t == "object" && "length" in t ? t : Array.from(t);
}
m(Uu, "arraylike");
function Sr() {
	return new G$1(this._exit || this._groups.map(Ie$1), this._parents);
}
m(Sr, "default");
function Cr(t, e, n$1) {
	var i = /* @__PURE__ */ this.enter(), o$1 = this, a$1 = /* @__PURE__ */ this.exit();
	return typeof t == "function" ? (i = /* @__PURE__ */ t(i), i && (i = /* @__PURE__ */ i.selection())) : i = /* @__PURE__ */ i.append(t + ""), e != null && (o$1 = /* @__PURE__ */ e(o$1), o$1 && (o$1 = /* @__PURE__ */ o$1.selection())), n$1 == null ? a$1.remove() : n$1(a$1), i && o$1 ? i.merge(o$1).order() : o$1;
}
m(Cr, "default");
function Nr(t) {
	for (var e = t.selection ? t.selection() : t, n$1 = this._groups, i = e._groups, o$1 = n$1.length, a$1 = i.length, s = /* @__PURE__ */ Math.min(o$1, a$1), u$1 = new Array(o$1), l = 0; l < s; ++l) for (var f = n$1[l], h$2 = i[l], p$2 = f.length, c$1 = u$1[l] = new Array(p$2), m$3, _ = 0; _ < p$2; ++_) (m$3 = f[_] || h$2[_]) && (c$1[_] = m$3);
	for (; l < o$1; ++l) u$1[l] = n$1[l];
	return new G$1(u$1, this._parents);
}
m(Nr, "default");
function Ar() {
	for (var t = this._groups, e = -1, n$1 = t.length; ++e < n$1;) for (var i = t[e], o$1 = i.length - 1, a$1 = i[o$1], s; --o$1 >= 0;) (s = i[o$1]) && (a$1 && s.compareDocumentPosition(a$1) ^ 4 && a$1.parentNode.insertBefore(s, a$1), a$1 = s);
	return this;
}
m(Ar, "default");
function Dr(t) {
	t || (t = Lu);
	function e(p$2, c$1) {
		return p$2 && c$1 ? t(p$2.__data__, c$1.__data__) : !p$2 - !c$1;
	}
	m(e, "compareNode");
	for (var n$1 = this._groups, i = n$1.length, o$1 = new Array(i), a$1 = 0; a$1 < i; ++a$1) {
		for (var s = n$1[a$1], u$1 = s.length, l = o$1[a$1] = new Array(u$1), f, h$2 = 0; h$2 < u$1; ++h$2) (f = s[h$2]) && (l[h$2] = f);
		l.sort(e);
	}
	return new G$1(o$1, this._parents).order();
}
m(Dr, "default");
function Lu(t, e) {
	return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
m(Lu, "ascending");
function $r() {
	var t = arguments[0];
	return arguments[0] = this, t.apply(null, arguments), this;
}
m($r, "default");
function Or() {
	return Array.from(this);
}
m(Or, "default");
function Er() {
	for (var t = this._groups, e = 0, n$1 = t.length; e < n$1; ++e) for (var i = t[e], o$1 = 0, a$1 = i.length; o$1 < a$1; ++o$1) {
		var s = i[o$1];
		if (s) return s;
	}
	return null;
}
m(Er, "default");
function Ir() {
	let t = 0;
	for (let e of this) ++t;
	return t;
}
m(Ir, "default");
function Rr() {
	return !this.node();
}
m(Rr, "default");
function Pr$1(t) {
	for (var e = this._groups, n$1 = 0, i = e.length; n$1 < i; ++n$1) for (var o$1 = e[n$1], a$1 = 0, s = o$1.length, u$1; a$1 < s; ++a$1) (u$1 = o$1[a$1]) && t.call(u$1, u$1.__data__, a$1, o$1);
	return this;
}
m(Pr$1, "default");
var _n = "http://www.w3.org/1999/xhtml", Yr = {
	svg: "http://www.w3.org/2000/svg",
	xhtml: _n,
	xlink: "http://www.w3.org/1999/xlink",
	xml: "http://www.w3.org/XML/1998/namespace",
	xmlns: "http://www.w3.org/2000/xmlns/"
};
function wt$1(t) {
	var e = t += "", n$1 = /* @__PURE__ */ e.indexOf(":");
	return n$1 >= 0 && (e = /* @__PURE__ */ t.slice(0, n$1)) !== "xmlns" && (t = /* @__PURE__ */ t.slice(n$1 + 1)), Yr.hasOwnProperty(e) ? {
		space: Yr[e],
		local: t
	} : t;
}
m(wt$1, "default");
function zu(t) {
	return function() {
		this.removeAttribute(t);
	};
}
m(zu, "attrRemove");
function Hu(t) {
	return function() {
		this.removeAttributeNS(t.space, t.local);
	};
}
m(Hu, "attrRemoveNS");
function Bu(t, e) {
	return function() {
		this.setAttribute(t, e);
	};
}
m(Bu, "attrConstant");
function qu(t, e) {
	return function() {
		this.setAttributeNS(t.space, t.local, e);
	};
}
m(qu, "attrConstantNS");
function Wu(t, e) {
	return function() {
		var n$1 = /* @__PURE__ */ e.apply(this, arguments);
		n$1 == null ? this.removeAttribute(t) : this.setAttribute(t, n$1);
	};
}
m(Wu, "attrFunction");
function Vu(t, e) {
	return function() {
		var n$1 = /* @__PURE__ */ e.apply(this, arguments);
		n$1 == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n$1);
	};
}
m(Vu, "attrFunctionNS");
function Fr(t, e) {
	var n$1 = /* @__PURE__ */ wt$1(t);
	if (arguments.length < 2) {
		var i = /* @__PURE__ */ this.node();
		return n$1.local ? i.getAttributeNS(n$1.space, n$1.local) : i.getAttribute(n$1);
	}
	return this.each(/* @__PURE__ */ (e == null ? n$1.local ? Hu : zu : typeof e == "function" ? n$1.local ? Vu : Wu : n$1.local ? qu : Bu)(n$1, e));
}
m(Fr, "default");
function Pe$1(t) {
	return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
m(Pe$1, "default");
function Xu(t) {
	return function() {
		this.style.removeProperty(t);
	};
}
m(Xu, "styleRemove");
function Gu(t, e, n$1) {
	return function() {
		this.style.setProperty(t, e, n$1);
	};
}
m(Gu, "styleConstant");
function Zu(t, e, n$1) {
	return function() {
		var i = /* @__PURE__ */ e.apply(this, arguments);
		i == null ? this.style.removeProperty(t) : this.style.setProperty(t, i, n$1);
	};
}
m(Zu, "styleFunction");
function Ur(t, e, n$1) {
	return arguments.length > 1 ? this.each(/* @__PURE__ */ (e == null ? Xu : typeof e == "function" ? Zu : Gu)(t, e, n$1 ?? "")) : Rt(/* @__PURE__ */ this.node(), t);
}
m(Ur, "default");
function Rt(t, e) {
	return t.style.getPropertyValue(e) || Pe$1(t).getComputedStyle(t, null).getPropertyValue(e);
}
m(Rt, "styleValue");
function Qu(t) {
	return function() {
		delete this[t];
	};
}
m(Qu, "propertyRemove");
function Ku(t, e) {
	return function() {
		this[t] = e;
	};
}
m(Ku, "propertyConstant");
function Ju(t, e) {
	return function() {
		var n$1 = /* @__PURE__ */ e.apply(this, arguments);
		n$1 == null ? delete this[t] : this[t] = n$1;
	};
}
m(Ju, "propertyFunction");
function Lr(t, e) {
	return arguments.length > 1 ? this.each(/* @__PURE__ */ (e == null ? Qu : typeof e == "function" ? Ju : Ku)(t, e)) : this.node()[t];
}
m(Lr, "default");
function Jo(t) {
	return t.trim().split(/^|\s+/);
}
m(Jo, "classArray");
function zr(t) {
	return t.classList || new jo$1(t);
}
m(zr, "classList");
function jo$1(t) {
	this._node = t, this._names = /* @__PURE__ */ Jo(t.getAttribute("class") || "");
}
m(jo$1, "ClassList");
jo$1.prototype = {
	add: /* @__PURE__ */ m(function(t) {
		this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", /* @__PURE__ */ this._names.join(" ")));
	}, "add"),
	remove: /* @__PURE__ */ m(function(t) {
		var e = /* @__PURE__ */ this._names.indexOf(t);
		e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", /* @__PURE__ */ this._names.join(" ")));
	}, "remove"),
	contains: /* @__PURE__ */ m(function(t) {
		return this._names.indexOf(t) >= 0;
	}, "contains")
};
function ta(t, e) {
	for (var n$1 = /* @__PURE__ */ zr(t), i = -1, o$1 = e.length; ++i < o$1;) n$1.add(e[i]);
}
m(ta, "classedAdd");
function ea(t, e) {
	for (var n$1 = /* @__PURE__ */ zr(t), i = -1, o$1 = e.length; ++i < o$1;) n$1.remove(e[i]);
}
m(ea, "classedRemove");
function ju(t) {
	return function() {
		ta(this, t);
	};
}
m(ju, "classedTrue");
function tf(t) {
	return function() {
		ea(this, t);
	};
}
m(tf, "classedFalse");
function ef(t, e) {
	return function() {
		(e.apply(this, arguments) ? ta : ea)(this, t);
	};
}
m(ef, "classedFunction");
function Hr(t, e) {
	var n$1 = /* @__PURE__ */ Jo(t + "");
	if (arguments.length < 2) {
		for (var i = /* @__PURE__ */ zr(/* @__PURE__ */ this.node()), o$1 = -1, a$1 = n$1.length; ++o$1 < a$1;) if (!i.contains(n$1[o$1])) return !1;
		return !0;
	}
	return this.each(/* @__PURE__ */ (typeof e == "function" ? ef : e ? ju : tf)(n$1, e));
}
m(Hr, "default");
function nf() {
	this.textContent = "";
}
m(nf, "textRemove");
function rf(t) {
	return function() {
		this.textContent = t;
	};
}
m(rf, "textConstant");
function of(t) {
	return function() {
		this.textContent = t.apply(this, arguments) ?? "";
	};
}
m(of, "textFunction");
function Br(t) {
	return arguments.length ? this.each(t == null ? nf : (typeof t == "function" ? of : rf)(t)) : this.node().textContent;
}
m(Br, "default");
function af() {
	this.innerHTML = "";
}
m(af, "htmlRemove");
function sf(t) {
	return function() {
		this.innerHTML = t;
	};
}
m(sf, "htmlConstant");
function uf(t) {
	return function() {
		this.innerHTML = t.apply(this, arguments) ?? "";
	};
}
m(uf, "htmlFunction");
function qr(t) {
	return arguments.length ? this.each(t == null ? af : (typeof t == "function" ? uf : sf)(t)) : this.node().innerHTML;
}
m(qr, "default");
function ff() {
	this.nextSibling && this.parentNode.appendChild(this);
}
m(ff, "raise");
function Wr() {
	return this.each(ff);
}
m(Wr, "default");
function lf() {
	this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
m(lf, "lower");
function Vr() {
	return this.each(lf);
}
m(Vr, "default");
function cf(t) {
	return function() {
		var e = this.ownerDocument, n$1 = this.namespaceURI;
		return n$1 === _n && e.documentElement.namespaceURI === _n ? e.createElement(t) : e.createElementNS(n$1, t);
	};
}
m(cf, "creatorInherit");
function hf(t) {
	return function() {
		return this.ownerDocument.createElementNS(t.space, t.local);
	};
}
m(hf, "creatorFixed");
function Ye(t) {
	var e = /* @__PURE__ */ wt$1(t);
	return (e.local ? hf : cf)(e);
}
m(Ye, "default");
function Xr(t) {
	var e = typeof t == "function" ? t : Ye(t);
	return this.select(function() {
		return this.appendChild(/* @__PURE__ */ e.apply(this, arguments));
	});
}
m(Xr, "default");
function pf() {
	return null;
}
m(pf, "constantNull");
function Gr(t, e) {
	var n$1 = typeof t == "function" ? t : Ye(t), i = e == null ? pf : typeof e == "function" ? e : It$1(e);
	return this.select(function() {
		return this.insertBefore(/* @__PURE__ */ n$1.apply(this, arguments), i.apply(this, arguments) || null);
	});
}
m(Gr, "default");
function mf() {
	var t = this.parentNode;
	t && t.removeChild(this);
}
m(mf, "remove");
function Zr$1() {
	return this.each(mf);
}
m(Zr$1, "default");
function df() {
	var t = /* @__PURE__ */ this.cloneNode(!1), e = this.parentNode;
	return e ? e.insertBefore(t, this.nextSibling) : t;
}
m(df, "selection_cloneShallow");
function xf() {
	var t = /* @__PURE__ */ this.cloneNode(!0), e = this.parentNode;
	return e ? e.insertBefore(t, this.nextSibling) : t;
}
m(xf, "selection_cloneDeep");
function Qr$1(t) {
	return this.select(t ? xf : df);
}
m(Qr$1, "default");
function Kr$1(t) {
	return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
m(Kr$1, "default");
function _f(t) {
	return function(e) {
		t.call(this, e, this.__data__);
	};
}
m(_f, "contextListener");
function gf(t) {
	return t.trim().split(/^|\s+/).map(function(e) {
		var n$1 = "", i = /* @__PURE__ */ e.indexOf(".");
		return i >= 0 && (n$1 = /* @__PURE__ */ e.slice(i + 1), e = /* @__PURE__ */ e.slice(0, i)), {
			type: e,
			name: n$1
		};
	});
}
m(gf, "parseTypenames");
function yf(t) {
	return function() {
		var e = this.__on;
		if (e) {
			for (var n$1 = 0, i = -1, o$1 = e.length, a$1; n$1 < o$1; ++n$1) a$1 = e[n$1], (!t.type || a$1.type === t.type) && a$1.name === t.name ? this.removeEventListener(a$1.type, a$1.listener, a$1.options) : e[++i] = a$1;
			++i ? e.length = i : delete this.__on;
		}
	};
}
m(yf, "onRemove");
function vf(t, e, n$1) {
	return function() {
		var i = this.__on, o$1, a$1 = /* @__PURE__ */ _f(e);
		if (i) {
			for (var s = 0, u$1 = i.length; s < u$1; ++s) if ((o$1 = i[s]).type === t.type && o$1.name === t.name) {
				this.removeEventListener(o$1.type, o$1.listener, o$1.options), this.addEventListener(o$1.type, o$1.listener = a$1, o$1.options = n$1), o$1.value = e;
				return;
			}
		}
		this.addEventListener(t.type, a$1, n$1), o$1 = {
			type: t.type,
			name: t.name,
			value: e,
			listener: a$1,
			options: n$1
		}, i ? i.push(o$1) : this.__on = [o$1];
	};
}
m(vf, "onAdd");
function Jr$1(t, e, n$1) {
	var i = /* @__PURE__ */ gf(t + ""), o$1, a$1 = i.length, s;
	if (arguments.length < 2) {
		var u$1 = this.node().__on;
		if (u$1) {
			for (var l = 0, f = u$1.length, h$2; l < f; ++l) for (o$1 = 0, h$2 = u$1[l]; o$1 < a$1; ++o$1) if ((s = i[o$1]).type === h$2.type && s.name === h$2.name) return h$2.value;
		}
		return;
	}
	for (u$1 = e ? vf : yf, o$1 = 0; o$1 < a$1; ++o$1) this.each(/* @__PURE__ */ u$1(i[o$1], e, n$1));
	return this;
}
m(Jr$1, "default");
function na(t, e, n$1) {
	var i = /* @__PURE__ */ Pe$1(t), o$1 = i.CustomEvent;
	typeof o$1 == "function" ? o$1 = new o$1(e, n$1) : (o$1 = /* @__PURE__ */ i.document.createEvent("Event"), n$1 ? (o$1.initEvent(e, n$1.bubbles, n$1.cancelable), o$1.detail = n$1.detail) : o$1.initEvent(e, !1, !1)), t.dispatchEvent(o$1);
}
m(na, "dispatchEvent");
function wf(t, e) {
	return function() {
		return na(this, t, e);
	};
}
m(wf, "dispatchConstant");
function bf(t, e) {
	return function() {
		return na(this, t, /* @__PURE__ */ e.apply(this, arguments));
	};
}
m(bf, "dispatchFunction");
function jr(t, e) {
	return this.each(/* @__PURE__ */ (typeof e == "function" ? bf : wf)(t, e));
}
m(jr, "default");
function* ti() {
	for (var t = this._groups, e = 0, n$1 = t.length; e < n$1; ++e) for (var i = t[e], o$1 = 0, a$1 = i.length, s; o$1 < a$1; ++o$1) (s = i[o$1]) && (yield s);
}
m(ti, "default");
var ei = [null];
function G$1(t, e) {
	this._groups = t, this._parents = e;
}
m(G$1, "Selection");
function ra() {
	return new G$1([[document.documentElement]], ei);
}
m(ra, "selection");
function Mf() {
	return this;
}
m(Mf, "selection_selection");
G$1.prototype = ra.prototype = {
	constructor: G$1,
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
	each: Pr$1,
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
	remove: Zr$1,
	clone: Qr$1,
	datum: Kr$1,
	on: Jr$1,
	dispatch: jr,
	[Symbol.iterator]: ti
};
var Ct = ra;
function ia(t) {
	return typeof t == "string" ? new G$1([[/* @__PURE__ */ document.querySelector(t)]], [document.documentElement]) : new G$1([[t]], ei);
}
m(ia, "default");
function Pt(t, e, n$1) {
	t.prototype = e.prototype = n$1, n$1.constructor = t;
}
m(Pt, "default");
function pe(t, e) {
	var n$1 = /* @__PURE__ */ Object.create(t.prototype);
	for (var i in e) n$1[i] = e[i];
	return n$1;
}
m(pe, "extend");
function Yt$1() {}
m(Yt$1, "Color");
var Fe$1 = .7, vn = 1 / Fe$1, me = "\\s*([+-]?\\d+)\\s*", Ue$1 = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", bt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Tf = /^#([0-9a-f]{3,8})$/, kf = /* @__PURE__ */ new RegExp(`^rgb\\(${me},${me},${me}\\)$`), Sf = /* @__PURE__ */ new RegExp(`^rgb\\(${bt},${bt},${bt}\\)$`), Cf = /* @__PURE__ */ new RegExp(`^rgba\\(${me},${me},${me},${Ue$1}\\)$`), Nf = /* @__PURE__ */ new RegExp(`^rgba\\(${bt},${bt},${bt},${Ue$1}\\)$`), Af = /* @__PURE__ */ new RegExp(`^hsl\\(${Ue$1},${bt},${bt}\\)$`), Df = /* @__PURE__ */ new RegExp(`^hsla\\(${Ue$1},${bt},${bt},${Ue$1}\\)$`), oa = {
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
Pt(Yt$1, _t$1, {
	copy(t) {
		return Object.assign(new this.constructor(), this, t);
	},
	displayable() {
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
m(aa, "color_formatHex");
function $f() {
	return this.rgb().formatHex8();
}
m($f, "color_formatHex8");
function Of() {
	return pa(this).formatHsl();
}
m(Of, "color_formatHsl");
function sa() {
	return this.rgb().formatRgb();
}
m(sa, "color_formatRgb");
function _t$1(t) {
	var e, n$1;
	return t = /* @__PURE__ */ (t + "").trim().toLowerCase(), (e = /* @__PURE__ */ Tf.exec(t)) ? (n$1 = e[1].length, e = /* @__PURE__ */ parseInt(e[1], 16), n$1 === 6 ? ua(e) : n$1 === 3 ? new nt(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n$1 === 8 ? gn(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n$1 === 4 ? gn(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = /* @__PURE__ */ kf.exec(t)) ? new nt(e[1], e[2], e[3], 1) : (e = /* @__PURE__ */ Sf.exec(t)) ? new nt(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = /* @__PURE__ */ Cf.exec(t)) ? gn(e[1], e[2], e[3], e[4]) : (e = /* @__PURE__ */ Nf.exec(t)) ? gn(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = /* @__PURE__ */ Af.exec(t)) ? ca(e[1], e[2] / 100, e[3] / 100, 1) : (e = /* @__PURE__ */ Df.exec(t)) ? ca(e[1], e[2] / 100, e[3] / 100, e[4]) : oa.hasOwnProperty(t) ? ua(oa[t]) : t === "transparent" ? new nt(NaN, NaN, NaN, 0) : null;
}
m(_t$1, "color");
function ua(t) {
	return new nt(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
m(ua, "rgbn");
function gn(t, e, n$1, i) {
	return i <= 0 && (t = e = n$1 = NaN), new nt(t, e, n$1, i);
}
m(gn, "rgba");
function ri(t) {
	return t instanceof Yt$1 || (t = /* @__PURE__ */ _t$1(t)), t ? (t = /* @__PURE__ */ t.rgb(), new nt(t.r, t.g, t.b, t.opacity)) : new nt();
}
m(ri, "rgbConvert");
function de(t, e, n$1, i) {
	return arguments.length === 1 ? ri(t) : new nt(t, e, n$1, i ?? 1);
}
m(de, "rgb");
function nt(t, e, n$1, i) {
	this.r = +t, this.g = +e, this.b = +n$1, this.opacity = +i;
}
m(nt, "Rgb");
Pt(nt, de, /* @__PURE__ */ pe(Yt$1, {
	brighter(t) {
		return t = t == null ? vn : Math.pow(vn, t), new nt(this.r * t, this.g * t, this.b * t, this.opacity);
	},
	darker(t) {
		return t = t == null ? Fe$1 : Math.pow(Fe$1, t), new nt(this.r * t, this.g * t, this.b * t, this.opacity);
	},
	rgb() {
		return this;
	},
	clamp() {
		return new nt(Zt$1(this.r), Zt$1(this.g), Zt$1(this.b), wn(this.opacity));
	},
	displayable() {
		return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
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
m(fa, "rgb_formatHex");
function Ef() {
	return `#${Gt(this.r)}${Gt(this.g)}${Gt(this.b)}${Gt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
m(Ef, "rgb_formatHex8");
function la() {
	let t = /* @__PURE__ */ wn(this.opacity);
	return `${t === 1 ? "rgb(" : "rgba("}${Zt$1(this.r)}, ${Zt$1(this.g)}, ${Zt$1(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
m(la, "rgb_formatRgb");
function wn(t) {
	return isNaN(t) ? 1 : Math.max(0, /* @__PURE__ */ Math.min(1, t));
}
m(wn, "clampa");
function Zt$1(t) {
	return Math.max(0, /* @__PURE__ */ Math.min(255, Math.round(t) || 0));
}
m(Zt$1, "clampi");
function Gt(t) {
	return t = /* @__PURE__ */ Zt$1(t), (t < 16 ? "0" : "") + t.toString(16);
}
m(Gt, "hex");
function ca(t, e, n$1, i) {
	return i <= 0 ? t = e = n$1 = NaN : n$1 <= 0 || n$1 >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new xt(t, e, n$1, i);
}
m(ca, "hsla");
function pa(t) {
	if (t instanceof xt) return new xt(t.h, t.s, t.l, t.opacity);
	if (t instanceof Yt$1 || (t = /* @__PURE__ */ _t$1(t)), !t) return new xt();
	if (t instanceof xt) return t;
	t = /* @__PURE__ */ t.rgb();
	var e = t.r / 255, n$1 = t.g / 255, i = t.b / 255, o$1 = /* @__PURE__ */ Math.min(e, n$1, i), a$1 = /* @__PURE__ */ Math.max(e, n$1, i), s = NaN, u$1 = a$1 - o$1, l = (a$1 + o$1) / 2;
	return u$1 ? (e === a$1 ? s = (n$1 - i) / u$1 + (n$1 < i) * 6 : n$1 === a$1 ? s = (i - e) / u$1 + 2 : s = (e - n$1) / u$1 + 4, u$1 /= l < .5 ? a$1 + o$1 : 2 - a$1 - o$1, s *= 60) : u$1 = l > 0 && l < 1 ? 0 : s, new xt(s, u$1, l, t.opacity);
}
m(pa, "hslConvert");
function ma(t, e, n$1, i) {
	return arguments.length === 1 ? pa(t) : new xt(t, e, n$1, i ?? 1);
}
m(ma, "hsl");
function xt(t, e, n$1, i) {
	this.h = +t, this.s = +e, this.l = +n$1, this.opacity = +i;
}
m(xt, "Hsl");
Pt(xt, ma, /* @__PURE__ */ pe(Yt$1, {
	brighter(t) {
		return t = t == null ? vn : Math.pow(vn, t), new xt(this.h, this.s, this.l * t, this.opacity);
	},
	darker(t) {
		return t = t == null ? Fe$1 : Math.pow(Fe$1, t), new xt(this.h, this.s, this.l * t, this.opacity);
	},
	rgb() {
		var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n$1 = this.l, i = n$1 + (n$1 < .5 ? n$1 : 1 - n$1) * e, o$1 = 2 * n$1 - i;
		return new nt(ni(t >= 240 ? t - 240 : t + 120, o$1, i), ni(t, o$1, i), ni(t < 120 ? t + 240 : t - 120, o$1, i), this.opacity);
	},
	clamp() {
		return new xt(ha(this.h), yn(this.s), yn(this.l), wn(this.opacity));
	},
	displayable() {
		return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
	},
	formatHsl() {
		let t = /* @__PURE__ */ wn(this.opacity);
		return `${t === 1 ? "hsl(" : "hsla("}${ha(this.h)}, ${yn(this.s) * 100}%, ${yn(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
	}
}));
function ha(t) {
	return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
m(ha, "clamph");
function yn(t) {
	return Math.max(0, /* @__PURE__ */ Math.min(1, t || 0));
}
m(yn, "clampt");
function ni(t, e, n$1) {
	return (t < 60 ? e + (n$1 - e) * t / 60 : t < 180 ? n$1 : t < 240 ? e + (n$1 - e) * (240 - t) / 60 : e) * 255;
}
m(ni, "hsl2rgb");
var da = Math.PI / 180, xa = 180 / Math.PI;
var bn = 18, _a = .96422, ga = 1, ya = .82521, va = 4 / 29, xe = 6 / 29, wa = 3 * xe * xe, If = xe * xe * xe;
function ba(t) {
	if (t instanceof Mt$1) return new Mt$1(t.l, t.a, t.b, t.opacity);
	if (t instanceof Nt) return Ma(t);
	t instanceof nt || (t = /* @__PURE__ */ ri(t));
	var e = /* @__PURE__ */ si(t.r), n$1 = /* @__PURE__ */ si(t.g), i = /* @__PURE__ */ si(t.b), o$1 = /* @__PURE__ */ ii((.2225045 * e + .7168786 * n$1 + .0606169 * i) / ga), a$1, s;
	return e === n$1 && n$1 === i ? a$1 = s = o$1 : (a$1 = /* @__PURE__ */ ii((.4360747 * e + .3850649 * n$1 + .1430804 * i) / _a), s = /* @__PURE__ */ ii((.0139322 * e + .0971045 * n$1 + .7141733 * i) / ya)), new Mt$1(116 * o$1 - 16, 500 * (a$1 - o$1), 200 * (o$1 - s), t.opacity);
}
m(ba, "labConvert");
function ui(t, e, n$1, i) {
	return arguments.length === 1 ? ba(t) : new Mt$1(t, e, n$1, i ?? 1);
}
m(ui, "lab");
function Mt$1(t, e, n$1, i) {
	this.l = +t, this.a = +e, this.b = +n$1, this.opacity = +i;
}
m(Mt$1, "Lab");
Pt(Mt$1, ui, /* @__PURE__ */ pe(Yt$1, {
	brighter(t) {
		return new Mt$1(this.l + bn * (t ?? 1), this.a, this.b, this.opacity);
	},
	darker(t) {
		return new Mt$1(this.l - bn * (t ?? 1), this.a, this.b, this.opacity);
	},
	rgb() {
		var t = (this.l + 16) / 116, e = isNaN(this.a) ? t : t + this.a / 500, n$1 = isNaN(this.b) ? t : t - this.b / 200;
		return e = _a * oi(e), t = ga * oi(t), n$1 = ya * oi(n$1), new nt(ai(3.1338561 * e - 1.6168667 * t - .4906146 * n$1), ai(-.9787684 * e + 1.9161415 * t + .033454 * n$1), ai(.0719453 * e - .2289914 * t + 1.4052427 * n$1), this.opacity);
	}
}));
function ii(t) {
	return t > If ? Math.pow(t, 1 / 3) : t / wa + va;
}
m(ii, "xyz2lab");
function oi(t) {
	return t > xe ? t * t * t : wa * (t - va);
}
m(oi, "lab2xyz");
function ai(t) {
	return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055);
}
m(ai, "lrgb2rgb");
function si(t) {
	return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
}
m(si, "rgb2lrgb");
function Rf(t) {
	if (t instanceof Nt) return new Nt(t.h, t.c, t.l, t.opacity);
	if (t instanceof Mt$1 || (t = /* @__PURE__ */ ba(t)), t.a === 0 && t.b === 0) return new Nt(NaN, 0 < t.l && t.l < 100 ? 0 : NaN, t.l, t.opacity);
	var e = Math.atan2(t.b, t.a) * xa;
	return new Nt(e < 0 ? e + 360 : e, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
}
m(Rf, "hclConvert");
function Le$1(t, e, n$1, i) {
	return arguments.length === 1 ? Rf(t) : new Nt(t, e, n$1, i ?? 1);
}
m(Le$1, "hcl");
function Nt(t, e, n$1, i) {
	this.h = +t, this.c = +e, this.l = +n$1, this.opacity = +i;
}
m(Nt, "Hcl");
function Ma(t) {
	if (isNaN(t.h)) return new Mt$1(t.l, 0, 0, t.opacity);
	var e = t.h * da;
	return new Mt$1(t.l, Math.cos(e) * t.c, Math.sin(e) * t.c, t.opacity);
}
m(Ma, "hcl2lab");
Pt(Nt, Le$1, /* @__PURE__ */ pe(Yt$1, {
	brighter(t) {
		return new Nt(this.h, this.c, this.l + bn * (t ?? 1), this.opacity);
	},
	darker(t) {
		return new Nt(this.h, this.c, this.l - bn * (t ?? 1), this.opacity);
	},
	rgb() {
		return Ma(this).rgb();
	}
}));
var _e$1 = /* @__PURE__ */ m((t) => () => t, "default");
function Ta(t, e) {
	return function(n$1) {
		return t + n$1 * e;
	};
}
m(Ta, "linear");
function Pf(t, e, n$1) {
	return t = /* @__PURE__ */ Math.pow(t, n$1), e = Math.pow(e, n$1) - t, n$1 = 1 / n$1, function(i) {
		return Math.pow(t + i * e, n$1);
	};
}
m(Pf, "exponential");
function ka(t, e) {
	var n$1 = e - t;
	return n$1 ? Ta(t, n$1 > 180 || n$1 < -180 ? n$1 - 360 * Math.round(n$1 / 360) : n$1) : _e$1(isNaN(t) ? e : t);
}
m(ka, "hue");
function Sa(t) {
	return (t = +t) == 1 ? At$1 : function(e, n$1) {
		return n$1 - e ? Pf(e, n$1, t) : _e$1(isNaN(e) ? n$1 : e);
	};
}
m(Sa, "gamma");
function At$1(t, e) {
	var n$1 = e - t;
	return n$1 ? Ta(t, n$1) : _e$1(isNaN(t) ? e : t);
}
m(At$1, "nogamma");
function Ca(t) {
	return function(e, n$1) {
		var i = /* @__PURE__ */ t((e = /* @__PURE__ */ Le$1(e)).h, (n$1 = /* @__PURE__ */ Le$1(n$1)).h), o$1 = /* @__PURE__ */ At$1(e.c, n$1.c), a$1 = /* @__PURE__ */ At$1(e.l, n$1.l), s = /* @__PURE__ */ At$1(e.opacity, n$1.opacity);
		return function(u$1) {
			return e.h = /* @__PURE__ */ i(u$1), e.c = /* @__PURE__ */ o$1(u$1), e.l = /* @__PURE__ */ a$1(u$1), e.opacity = /* @__PURE__ */ s(u$1), e + "";
		};
	};
}
m(Ca, "hcl");
var Yf = /* @__PURE__ */ Ca(ka);
Ca(At$1);
function fi(t, e, n$1, i, o$1) {
	var a$1 = t * t, s = a$1 * t;
	return ((1 - 3 * t + 3 * a$1 - s) * e + (4 - 6 * a$1 + 3 * s) * n$1 + (1 + 3 * t + 3 * a$1 - 3 * s) * i + s * o$1) / 6;
}
m(fi, "basis");
function li(t) {
	var e = t.length - 1;
	return function(n$1) {
		var i = n$1 <= 0 ? n$1 = 0 : n$1 >= 1 ? (n$1 = 1, e - 1) : Math.floor(n$1 * e), o$1 = t[i], a$1 = t[i + 1], s = i > 0 ? t[i - 1] : 2 * o$1 - a$1, u$1 = i < e - 1 ? t[i + 2] : 2 * a$1 - o$1;
		return fi((n$1 - i / e) * e, s, o$1, a$1, u$1);
	};
}
m(li, "default");
function ci(t) {
	var e = t.length;
	return function(n$1) {
		var i = /* @__PURE__ */ Math.floor(((n$1 %= 1) < 0 ? ++n$1 : n$1) * e), o$1 = t[(i + e - 1) % e], a$1 = t[i % e], s = t[(i + 1) % e], u$1 = t[(i + 2) % e];
		return fi((n$1 - i / e) * e, o$1, a$1, s, u$1);
	};
}
m(ci, "default");
var Qt$1 = /* @__PURE__ */ m(function t(e) {
	var n$1 = /* @__PURE__ */ Sa(e);
	function i(o$1, a$1) {
		var s = /* @__PURE__ */ n$1((o$1 = /* @__PURE__ */ de(o$1)).r, (a$1 = /* @__PURE__ */ de(a$1)).r), u$1 = /* @__PURE__ */ n$1(o$1.g, a$1.g), l = /* @__PURE__ */ n$1(o$1.b, a$1.b), f = /* @__PURE__ */ At$1(o$1.opacity, a$1.opacity);
		return function(h$2) {
			return o$1.r = /* @__PURE__ */ s(h$2), o$1.g = /* @__PURE__ */ u$1(h$2), o$1.b = /* @__PURE__ */ l(h$2), o$1.opacity = /* @__PURE__ */ f(h$2), o$1 + "";
		};
	}
	return m(i, "rgb"), i.gamma = t, i;
}, "rgbGamma")(1);
function Na(t) {
	return function(e) {
		var n$1 = e.length, i = new Array(n$1), o$1 = new Array(n$1), a$1 = new Array(n$1), s, u$1;
		for (s = 0; s < n$1; ++s) u$1 = /* @__PURE__ */ de(e[s]), i[s] = u$1.r || 0, o$1[s] = u$1.g || 0, a$1[s] = u$1.b || 0;
		return i = /* @__PURE__ */ t(i), o$1 = /* @__PURE__ */ t(o$1), a$1 = /* @__PURE__ */ t(a$1), u$1.opacity = 1, function(l) {
			return u$1.r = /* @__PURE__ */ i(l), u$1.g = /* @__PURE__ */ o$1(l), u$1.b = /* @__PURE__ */ a$1(l), u$1 + "";
		};
	};
}
m(Na, "rgbSpline");
Na(li);
Na(ci);
function hi(t, e) {
	e || (e = []);
	var n$1 = t ? Math.min(e.length, t.length) : 0, i = /* @__PURE__ */ e.slice(), o$1;
	return function(a$1) {
		for (o$1 = 0; o$1 < n$1; ++o$1) i[o$1] = t[o$1] * (1 - a$1) + e[o$1] * a$1;
		return i;
	};
}
m(hi, "default");
function Aa(t) {
	return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
m(Aa, "isNumberArray");
function Da(t, e) {
	var n$1 = e ? e.length : 0, i = t ? Math.min(n$1, t.length) : 0, o$1 = new Array(i), a$1 = new Array(n$1), s;
	for (s = 0; s < i; ++s) o$1[s] = /* @__PURE__ */ Ft(t[s], e[s]);
	for (; s < n$1; ++s) a$1[s] = e[s];
	return function(u$1) {
		for (s = 0; s < i; ++s) a$1[s] = /* @__PURE__ */ o$1[s](u$1);
		return a$1;
	};
}
m(Da, "genericArray");
function pi(t, e) {
	var n$1 = /* @__PURE__ */ new Date();
	return t = +t, e = +e, function(i) {
		return n$1.setTime(t * (1 - i) + e * i), n$1;
	};
}
m(pi, "default");
function j(t, e) {
	return t = +t, e = +e, function(n$1) {
		return t * (1 - n$1) + e * n$1;
	};
}
m(j, "default");
function mi(t, e) {
	var n$1 = {}, i = {}, o$1;
	(t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
	for (o$1 in e) o$1 in t ? n$1[o$1] = /* @__PURE__ */ Ft(t[o$1], e[o$1]) : i[o$1] = e[o$1];
	return function(a$1) {
		for (o$1 in n$1) i[o$1] = /* @__PURE__ */ n$1[o$1](a$1);
		return i;
	};
}
m(mi, "default");
var xi = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, di = new RegExp(xi.source, "g");
function zf(t) {
	return function() {
		return t;
	};
}
m(zf, "zero");
function Hf(t) {
	return function(e) {
		return t(e) + "";
	};
}
m(Hf, "one");
function ge(t, e) {
	var n$1 = xi.lastIndex = di.lastIndex = 0, i, o$1, a$1, s = -1, u$1 = [], l = [];
	for (t = t + "", e = e + ""; (i = /* @__PURE__ */ xi.exec(t)) && (o$1 = /* @__PURE__ */ di.exec(e));) (a$1 = o$1.index) > n$1 && (a$1 = /* @__PURE__ */ e.slice(n$1, a$1), u$1[s] ? u$1[s] += a$1 : u$1[++s] = a$1), (i = i[0]) === (o$1 = o$1[0]) ? u$1[s] ? u$1[s] += o$1 : u$1[++s] = o$1 : (u$1[++s] = null, l.push({
		i: s,
		x: /* @__PURE__ */ j(i, o$1)
	})), n$1 = di.lastIndex;
	return n$1 < e.length && (a$1 = /* @__PURE__ */ e.slice(n$1), u$1[s] ? u$1[s] += a$1 : u$1[++s] = a$1), u$1.length < 2 ? l[0] ? Hf(l[0].x) : zf(e) : (e = l.length, function(f) {
		for (var h$2 = 0, p$2; h$2 < e; ++h$2) u$1[(p$2 = l[h$2]).i] = /* @__PURE__ */ p$2.x(f);
		return u$1.join("");
	});
}
m(ge, "default");
function Ft(t, e) {
	var n$1 = typeof e, i;
	return e == null || n$1 === "boolean" ? _e$1(e) : (n$1 === "number" ? j : n$1 === "string" ? (i = /* @__PURE__ */ _t$1(e)) ? (e = i, Qt$1) : ge : e instanceof _t$1 ? Qt$1 : e instanceof Date ? pi : Aa(e) ? hi : Array.isArray(e) ? Da : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? mi : j)(t, e);
}
m(Ft, "default");
function Mn$1(t, e) {
	return t = +t, e = +e, function(n$1) {
		return Math.round(t * (1 - n$1) + e * n$1);
	};
}
m(Mn$1, "default");
var $a = 180 / Math.PI, Tn = {
	translateX: 0,
	translateY: 0,
	rotate: 0,
	skewX: 0,
	scaleX: 1,
	scaleY: 1
};
function kn(t, e, n$1, i, o$1, a$1) {
	var s, u$1, l;
	return (s = /* @__PURE__ */ Math.sqrt(t * t + e * e)) && (t /= s, e /= s), (l = t * n$1 + e * i) && (n$1 -= t * l, i -= e * l), (u$1 = /* @__PURE__ */ Math.sqrt(n$1 * n$1 + i * i)) && (n$1 /= u$1, i /= u$1, l /= u$1), t * i < e * n$1 && (t = -t, e = -e, l = -l, s = -s), {
		translateX: o$1,
		translateY: a$1,
		rotate: Math.atan2(e, t) * $a,
		skewX: Math.atan(l) * $a,
		scaleX: s,
		scaleY: u$1
	};
}
m(kn, "default");
var Sn;
function Oa(t) {
	let e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
	return e.isIdentity ? Tn : kn(e.a, e.b, e.c, e.d, e.e, e.f);
}
m(Oa, "parseCss");
function Ea(t) {
	return t == null ? Tn : (Sn || (Sn = /* @__PURE__ */ document.createElementNS("http://www.w3.org/2000/svg", "g")), Sn.setAttribute("transform", t), (t = /* @__PURE__ */ Sn.transform.baseVal.consolidate()) ? (t = t.matrix, kn(t.a, t.b, t.c, t.d, t.e, t.f)) : Tn);
}
m(Ea, "parseSvg");
function Ia(t, e, n$1, i) {
	function o$1(f) {
		return f.length ? f.pop() + " " : "";
	}
	m(o$1, "pop");
	function a$1(f, h$2, p$2, c$1, m$3, _) {
		if (f !== p$2 || h$2 !== c$1) {
			var M = /* @__PURE__ */ m$3.push("translate(", null, e, null, n$1);
			_.push({
				i: M - 4,
				x: /* @__PURE__ */ j(f, p$2)
			}, {
				i: M - 2,
				x: /* @__PURE__ */ j(h$2, c$1)
			});
		} else (p$2 || c$1) && m$3.push("translate(" + p$2 + e + c$1 + n$1);
	}
	m(a$1, "translate");
	function s(f, h$2, p$2, c$1) {
		f !== h$2 ? (f - h$2 > 180 ? h$2 += 360 : h$2 - f > 180 && (f += 360), c$1.push({
			i: p$2.push(o$1(p$2) + "rotate(", null, i) - 2,
			x: /* @__PURE__ */ j(f, h$2)
		})) : h$2 && p$2.push(o$1(p$2) + "rotate(" + h$2 + i);
	}
	m(s, "rotate");
	function u$1(f, h$2, p$2, c$1) {
		f !== h$2 ? c$1.push({
			i: p$2.push(o$1(p$2) + "skewX(", null, i) - 2,
			x: /* @__PURE__ */ j(f, h$2)
		}) : h$2 && p$2.push(o$1(p$2) + "skewX(" + h$2 + i);
	}
	m(u$1, "skewX");
	function l(f, h$2, p$2, c$1, m$3, _) {
		if (f !== p$2 || h$2 !== c$1) {
			var M = /* @__PURE__ */ m$3.push(o$1(m$3) + "scale(", null, ",", null, ")");
			_.push({
				i: M - 4,
				x: /* @__PURE__ */ j(f, p$2)
			}, {
				i: M - 2,
				x: /* @__PURE__ */ j(h$2, c$1)
			});
		} else (p$2 !== 1 || c$1 !== 1) && m$3.push(o$1(m$3) + "scale(" + p$2 + "," + c$1 + ")");
	}
	return m(l, "scale"), function(f, h$2) {
		var p$2 = [], c$1 = [];
		return f = /* @__PURE__ */ t(f), h$2 = /* @__PURE__ */ t(h$2), a$1(f.translateX, f.translateY, h$2.translateX, h$2.translateY, p$2, c$1), s(f.rotate, h$2.rotate, p$2, c$1), u$1(f.skewX, h$2.skewX, p$2, c$1), l(f.scaleX, f.scaleY, h$2.scaleX, h$2.scaleY, p$2, c$1), f = h$2 = null, function(m$3) {
			for (var _ = -1, M = c$1.length, T; ++_ < M;) p$2[(T = c$1[_]).i] = /* @__PURE__ */ T.x(m$3);
			return p$2.join("");
		};
	};
}
m(Ia, "interpolateTransform");
var _i = /* @__PURE__ */ Ia(Oa, "px, ", "px)", "deg)"), gi = /* @__PURE__ */ Ia(Ea, ", ", ")", ")");
function yi(t) {
	return Math.abs(t = /* @__PURE__ */ Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
m(yi, "default");
function Kt$1(t, e) {
	if ((n$1 = /* @__PURE__ */ (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;
	var n$1, i = /* @__PURE__ */ t.slice(0, n$1);
	return [i.length > 1 ? i[0] + i.slice(2) : i, +t.slice(n$1 + 1)];
}
m(Kt$1, "formatDecimalParts");
function gt(t) {
	return t = /* @__PURE__ */ Kt$1(/* @__PURE__ */ Math.abs(t)), t ? t[1] : NaN;
}
m(gt, "default");
function vi$1(t, e) {
	return function(n$1, i) {
		for (var o$1 = n$1.length, a$1 = [], s = 0, u$1 = t[0], l = 0; o$1 > 0 && u$1 > 0 && (l + u$1 + 1 > i && (u$1 = /* @__PURE__ */ Math.max(1, i - l)), a$1.push(/* @__PURE__ */ n$1.substring(o$1 -= u$1, o$1 + u$1)), !((l += u$1 + 1) > i));) u$1 = t[s = (s + 1) % t.length];
		return a$1.reverse().join(e);
	};
}
m(vi$1, "default");
function wi$1(t) {
	return function(e) {
		return e.replace(/[0-9]/g, function(n$1) {
			return t[+n$1];
		});
	};
}
m(wi$1, "default");
var Bf = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Ut(t) {
	if (!(e = /* @__PURE__ */ Bf.exec(t))) throw new Error("invalid format: " + t);
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
m(Ut, "formatSpecifier");
Ut.prototype = Cn.prototype;
function Cn(t) {
	this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
m(Cn, "FormatSpecifier");
Cn.prototype.toString = function() {
	return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function bi$1(t) {
	t: for (var e = t.length, n$1 = 1, i = -1, o$1; n$1 < e; ++n$1) switch (t[n$1]) {
		case ".":
			i = o$1 = n$1;
			break;
		case "0":
			i === 0 && (i = n$1), o$1 = n$1;
			break;
		default:
			if (!+t[n$1]) break t;
			i > 0 && (i = 0);
			break;
	}
	return i > 0 ? t.slice(0, i) + t.slice(o$1 + 1) : t;
}
m(bi$1, "default");
var Mi$1;
function Ti$1(t, e) {
	var n$1 = /* @__PURE__ */ Kt$1(t, e);
	if (!n$1) return t + "";
	var i = n$1[0], o$1 = n$1[1], a$1 = o$1 - (Mi$1 = Math.max(-8, /* @__PURE__ */ Math.min(8, /* @__PURE__ */ Math.floor(o$1 / 3))) * 3) + 1, s = i.length;
	return a$1 === s ? i : a$1 > s ? i + new Array(a$1 - s + 1).join("0") : a$1 > 0 ? i.slice(0, a$1) + "." + i.slice(a$1) : "0." + new Array(1 - a$1).join("0") + Kt$1(t, /* @__PURE__ */ Math.max(0, e + a$1 - 1))[0];
}
m(Ti$1, "default");
function Nn(t, e) {
	var n$1 = /* @__PURE__ */ Kt$1(t, e);
	if (!n$1) return t + "";
	var i = n$1[0], o$1 = n$1[1];
	return o$1 < 0 ? "0." + new Array(-o$1).join("0") + i : i.length > o$1 + 1 ? i.slice(0, o$1 + 1) + "." + i.slice(o$1 + 1) : i + new Array(o$1 - i.length + 2).join("0");
}
m(Nn, "default");
var ki$1 = {
	"%": /* @__PURE__ */ m((t, e) => (t * 100).toFixed(e), "%"),
	b: /* @__PURE__ */ m((t) => Math.round(t).toString(2), "b"),
	c: /* @__PURE__ */ m((t) => t + "", "c"),
	d: yi,
	e: /* @__PURE__ */ m((t, e) => t.toExponential(e), "e"),
	f: /* @__PURE__ */ m((t, e) => t.toFixed(e), "f"),
	g: /* @__PURE__ */ m((t, e) => t.toPrecision(e), "g"),
	o: /* @__PURE__ */ m((t) => Math.round(t).toString(8), "o"),
	p: /* @__PURE__ */ m((t, e) => Nn(t * 100, e), "p"),
	r: Nn,
	s: Ti$1,
	X: /* @__PURE__ */ m((t) => Math.round(t).toString(16).toUpperCase(), "X"),
	x: /* @__PURE__ */ m((t) => Math.round(t).toString(16), "x")
};
function An$1(t) {
	return t;
}
m(An$1, "default");
var Ra = Array.prototype.map, Pa = [
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
function Si$1(t) {
	var e = t.grouping === void 0 || t.thousands === void 0 ? An$1 : vi$1(/* @__PURE__ */ Ra.call(t.grouping, Number), t.thousands + ""), n$1 = t.currency === void 0 ? "" : t.currency[0] + "", i = t.currency === void 0 ? "" : t.currency[1] + "", o$1 = t.decimal === void 0 ? "." : t.decimal + "", a$1 = t.numerals === void 0 ? An$1 : wi$1(/* @__PURE__ */ Ra.call(t.numerals, String)), s = t.percent === void 0 ? "%" : t.percent + "", u$1 = t.minus === void 0 ? "−" : t.minus + "", l = t.nan === void 0 ? "NaN" : t.nan + "";
	function f(p$2) {
		p$2 = /* @__PURE__ */ Ut(p$2);
		var c$1 = p$2.fill, m$3 = p$2.align, _ = p$2.sign, M = p$2.symbol, T = p$2.zero, k$1 = p$2.width, I = p$2.comma, C = p$2.precision, A = p$2.trim, O = p$2.type;
		O === "n" ? (I = !0, O = "g") : ki$1[O] || (C === void 0 && (C = 12), A = !0, O = "g"), (T || c$1 === "0" && m$3 === "=") && (T = !0, c$1 = "0", m$3 = "=");
		var w = M === "$" ? n$1 : M === "#" && /[boxX]/.test(O) ? "0" + O.toLowerCase() : "", Y = M === "$" ? i : /[%p]/.test(O) ? s : "", U$1 = ki$1[O], E = /* @__PURE__ */ /[defgprs%]/.test(O);
		C = C === void 0 ? 6 : /[gprs]/.test(O) ? Math.max(1, /* @__PURE__ */ Math.min(21, C)) : Math.max(0, /* @__PURE__ */ Math.min(20, C));
		function B(N$1) {
			var v$1 = w, d$1 = Y, x, S$2, y;
			if (O === "c") d$1 = U$1(N$1) + d$1, N$1 = "";
			else {
				N$1 = +N$1;
				var D = N$1 < 0 || 1 / N$1 < 0;
				if (N$1 = isNaN(N$1) ? l : U$1(/* @__PURE__ */ Math.abs(N$1), C), A && (N$1 = /* @__PURE__ */ bi$1(N$1)), D && +N$1 == 0 && _ !== "+" && (D = !1), v$1 = (D ? _ === "(" ? _ : u$1 : _ === "-" || _ === "(" ? "" : _) + v$1, d$1 = (O === "s" ? Pa[8 + Mi$1 / 3] : "") + d$1 + (D && _ === "(" ? ")" : ""), E) {
					for (x = -1, S$2 = N$1.length; ++x < S$2;) if (y = /* @__PURE__ */ N$1.charCodeAt(x), 48 > y || y > 57) {
						d$1 = (y === 46 ? o$1 + N$1.slice(x + 1) : N$1.slice(x)) + d$1, N$1 = /* @__PURE__ */ N$1.slice(0, x);
						break;
					}
				}
			}
			I && !T && (N$1 = /* @__PURE__ */ e(N$1, Infinity));
			var $$1 = v$1.length + N$1.length + d$1.length, P$1 = $$1 < k$1 ? new Array(k$1 - $$1 + 1).join(c$1) : "";
			switch (I && T && (N$1 = /* @__PURE__ */ e(P$1 + N$1, P$1.length ? k$1 - d$1.length : Infinity), P$1 = ""), m$3) {
				case "<":
					N$1 = v$1 + N$1 + d$1 + P$1;
					break;
				case "=":
					N$1 = v$1 + P$1 + N$1 + d$1;
					break;
				case "^":
					N$1 = P$1.slice(0, $$1 = P$1.length >> 1) + v$1 + N$1 + d$1 + P$1.slice($$1);
					break;
				default:
					N$1 = P$1 + v$1 + N$1 + d$1;
					break;
			}
			return a$1(N$1);
		}
		return m(B, "format"), B.toString = function() {
			return p$2 + "";
		}, B;
	}
	m(f, "newFormat");
	function h$2(p$2, c$1) {
		var m$3 = /* @__PURE__ */ f((p$2 = /* @__PURE__ */ Ut(p$2), p$2.type = "f", p$2)), _ = Math.max(-8, /* @__PURE__ */ Math.min(8, /* @__PURE__ */ Math.floor(gt(c$1) / 3))) * 3, M = /* @__PURE__ */ Math.pow(10, -_), T = Pa[8 + _ / 3];
		return function(k$1) {
			return m$3(M * k$1) + T;
		};
	}
	return m(h$2, "formatPrefix"), {
		format: f,
		formatPrefix: h$2
	};
}
m(Si$1, "default");
var Dn, $n, On$1;
Ci({
	thousands: ",",
	grouping: [3],
	currency: ["$", ""]
});
function Ci(t) {
	return Dn = /* @__PURE__ */ Si$1(t), $n = Dn.format, On$1 = Dn.formatPrefix, Dn;
}
m(Ci, "defaultLocale");
function En$1(t) {
	return Math.max(0, -gt(/* @__PURE__ */ Math.abs(t)));
}
m(En$1, "default");
function In(t, e) {
	return Math.max(0, Math.max(-8, /* @__PURE__ */ Math.min(8, /* @__PURE__ */ Math.floor(gt(e) / 3))) * 3 - gt(/* @__PURE__ */ Math.abs(t)));
}
m(In, "default");
function Rn(t, e) {
	return t = /* @__PURE__ */ Math.abs(t), e = Math.abs(e) - t, Math.max(0, gt(e) - gt(t)) + 1;
}
m(Rn, "default");
function qf(t) {
	var e = 0, n$1 = t.children, i = n$1 && n$1.length;
	if (!i) e = 1;
	else for (; --i >= 0;) e += n$1[i].value;
	t.value = e;
}
m(qf, "count");
function Ni$1() {
	return this.eachAfter(qf);
}
m(Ni$1, "default");
function Ai$1(t, e) {
	let n$1 = -1;
	for (let i of this) t.call(e, i, ++n$1, this);
	return this;
}
m(Ai$1, "default");
function Di$1(t, e) {
	for (var n$1 = this, i = [n$1], o$1, a$1, s = -1; n$1 = /* @__PURE__ */ i.pop();) if (t.call(e, n$1, ++s, this), o$1 = n$1.children) for (a$1 = o$1.length - 1; a$1 >= 0; --a$1) i.push(o$1[a$1]);
	return this;
}
m(Di$1, "default");
function $i$1(t, e) {
	for (var n$1 = this, i = [n$1], o$1 = [], a$1, s, u$1, l = -1; n$1 = /* @__PURE__ */ i.pop();) if (o$1.push(n$1), a$1 = n$1.children) for (s = 0, u$1 = a$1.length; s < u$1; ++s) i.push(a$1[s]);
	for (; n$1 = /* @__PURE__ */ o$1.pop();) t.call(e, n$1, ++l, this);
	return this;
}
m($i$1, "default");
function Oi$1(t, e) {
	let n$1 = -1;
	for (let i of this) if (t.call(e, i, ++n$1, this)) return i;
}
m(Oi$1, "default");
function Ei$1(t) {
	return this.eachAfter(function(e) {
		for (var n$1 = +t(e.data) || 0, i = e.children, o$1 = i && i.length; --o$1 >= 0;) n$1 += i[o$1].value;
		e.value = n$1;
	});
}
m(Ei$1, "default");
function Ii$1(t) {
	return this.eachBefore(function(e) {
		e.children && e.children.sort(t);
	});
}
m(Ii$1, "default");
function Ri$1(t) {
	for (var e = this, n$1 = /* @__PURE__ */ Wf(e, t), i = [e]; e !== n$1;) e = e.parent, i.push(e);
	for (var o$1 = i.length; t !== n$1;) i.splice(o$1, 0, t), t = t.parent;
	return i;
}
m(Ri$1, "default");
function Wf(t, e) {
	if (t === e) return t;
	var n$1 = /* @__PURE__ */ t.ancestors(), i = /* @__PURE__ */ e.ancestors(), o$1 = null;
	for (t = /* @__PURE__ */ n$1.pop(), e = /* @__PURE__ */ i.pop(); t === e;) o$1 = t, t = /* @__PURE__ */ n$1.pop(), e = /* @__PURE__ */ i.pop();
	return o$1;
}
m(Wf, "leastCommonAncestor");
function Pi$1() {
	for (var t = this, e = [t]; t = t.parent;) e.push(t);
	return e;
}
m(Pi$1, "default");
function Yi$1() {
	return Array.from(this);
}
m(Yi$1, "default");
function Fi$1() {
	var t = [];
	return this.eachBefore(function(e) {
		e.children || t.push(e);
	}), t;
}
m(Fi$1, "default");
function Ui$1() {
	var t = this, e = [];
	return t.each(function(n$1) {
		n$1 !== t && e.push({
			source: n$1.parent,
			target: n$1
		});
	}), e;
}
m(Ui$1, "default");
function* Li$1() {
	var t = this, e, n$1 = [t], i, o$1, a$1;
	do
		for (e = /* @__PURE__ */ n$1.reverse(), n$1 = []; t = /* @__PURE__ */ e.pop();) if (yield t, i = t.children) for (o$1 = 0, a$1 = i.length; o$1 < a$1; ++o$1) n$1.push(i[o$1]);
	while (n$1.length);
}
m(Li$1, "default");
function Pn(t, e) {
	t instanceof Map ? (t = [void 0, t], e === void 0 && (e = Gf)) : e === void 0 && (e = Xf);
	for (var n$1 = new ze$1(t), i, o$1 = [n$1], a$1, s, u$1, l; i = /* @__PURE__ */ o$1.pop();) if ((s = /* @__PURE__ */ e(i.data)) && (l = (s = /* @__PURE__ */ Array.from(s)).length)) for (i.children = s, u$1 = l - 1; u$1 >= 0; --u$1) o$1.push(a$1 = s[u$1] = new ze$1(s[u$1])), a$1.parent = i, a$1.depth = i.depth + 1;
	return n$1.eachBefore(Qf);
}
m(Pn, "hierarchy");
function Vf() {
	return Pn(this).eachBefore(Zf);
}
m(Vf, "node_copy");
function Xf(t) {
	return t.children;
}
m(Xf, "objectChildren");
function Gf(t) {
	return Array.isArray(t) ? t[1] : null;
}
m(Gf, "mapChildren");
function Zf(t) {
	t.data.value !== void 0 && (t.value = t.data.value), t.data = t.data.data;
}
m(Zf, "copyData");
function Qf(t) {
	var e = 0;
	do
		t.height = e;
	while ((t = t.parent) && t.height < ++e);
}
m(Qf, "computeHeight");
function ze$1(t) {
	this.data = t, this.depth = this.height = 0, this.parent = null;
}
m(ze$1, "Node");
ze$1.prototype = Pn.prototype = {
	constructor: ze$1,
	count: Ni$1,
	each: Ai$1,
	eachAfter: $i$1,
	eachBefore: Di$1,
	find: Oi$1,
	sum: Ei$1,
	sort: Ii$1,
	path: Ri$1,
	ancestors: Pi$1,
	descendants: Yi$1,
	leaves: Fi$1,
	links: Ui$1,
	copy: Vf,
	[Symbol.iterator]: Li$1
};
function zi$1(t) {
	t.x0 = /* @__PURE__ */ Math.round(t.x0), t.y0 = /* @__PURE__ */ Math.round(t.y0), t.x1 = /* @__PURE__ */ Math.round(t.x1), t.y1 = /* @__PURE__ */ Math.round(t.y1);
}
m(zi$1, "default");
function Hi$1(t, e, n$1, i, o$1) {
	for (var a$1 = t.children, s, u$1 = -1, l = a$1.length, f = t.value && (i - e) / t.value; ++u$1 < l;) s = a$1[u$1], s.y0 = n$1, s.y1 = o$1, s.x0 = e, s.x1 = e += s.value * f;
}
m(Hi$1, "default");
function Bi$1(t, e, n$1, i, o$1) {
	for (var a$1 = t.children, s, u$1 = -1, l = a$1.length, f = t.value && (o$1 - n$1) / t.value; ++u$1 < l;) s = a$1[u$1], s.x0 = e, s.x1 = i, s.y0 = n$1, s.y1 = n$1 += s.value * f;
}
m(Bi$1, "default");
var Kf = (1 + Math.sqrt(5)) / 2;
function Jf(t, e, n$1, i, o$1, a$1) {
	for (var s = [], u$1 = e.children, l, f, h$2 = 0, p$2 = 0, c$1 = u$1.length, m$3, _, M = e.value, T, k$1, I, C, A, O, w; h$2 < c$1;) {
		m$3 = o$1 - n$1, _ = a$1 - i;
		do
			T = u$1[p$2++].value;
		while (!T && p$2 < c$1);
		for (k$1 = I = T, O = Math.max(_ / m$3, m$3 / _) / (M * t), w = T * T * O, A = /* @__PURE__ */ Math.max(I / w, w / k$1); p$2 < c$1; ++p$2) {
			if (T += f = u$1[p$2].value, f < k$1 && (k$1 = f), f > I && (I = f), w = T * T * O, C = /* @__PURE__ */ Math.max(I / w, w / k$1), C > A) {
				T -= f;
				break;
			}
			A = C;
		}
		s.push(l = {
			value: T,
			dice: m$3 < _,
			children: /* @__PURE__ */ u$1.slice(h$2, p$2)
		}), l.dice ? Hi$1(l, n$1, i, o$1, M ? i += _ * T / M : a$1) : Bi$1(l, n$1, i, M ? n$1 += m$3 * T / M : o$1, a$1), M -= T, h$2 = p$2;
	}
	return s;
}
m(Jf, "squarifyRatio");
var Ya = /* @__PURE__ */ m(function t(e) {
	function n$1(i, o$1, a$1, s, u$1) {
		Jf(e, i, o$1, a$1, s, u$1);
	}
	return m(n$1, "squarify"), n$1.ratio = function(i) {
		return t((i = +i) > 1 ? i : 1);
	}, n$1;
}, "custom")(Kf);
function Fa(t) {
	if (typeof t != "function") throw new Error();
	return t;
}
m(Fa, "required");
function ye() {
	return 0;
}
m(ye, "constantZero");
function Jt$1(t) {
	return function() {
		return t;
	};
}
m(Jt$1, "default");
function Ua() {
	var t = Ya, e = !1, n$1 = 1, i = 1, o$1 = [0], a$1 = ye, s = ye, u$1 = ye, l = ye, f = ye;
	function h$2(c$1) {
		return c$1.x0 = c$1.y0 = 0, c$1.x1 = n$1, c$1.y1 = i, c$1.eachBefore(p$2), o$1 = [0], e && c$1.eachBefore(zi$1), c$1;
	}
	m(h$2, "treemap");
	function p$2(c$1) {
		var m$3 = o$1[c$1.depth], _ = c$1.x0 + m$3, M = c$1.y0 + m$3, T = c$1.x1 - m$3, k$1 = c$1.y1 - m$3;
		T < _ && (_ = T = (_ + T) / 2), k$1 < M && (M = k$1 = (M + k$1) / 2), c$1.x0 = _, c$1.y0 = M, c$1.x1 = T, c$1.y1 = k$1, c$1.children && (m$3 = o$1[c$1.depth + 1] = a$1(c$1) / 2, _ += f(c$1) - m$3, M += s(c$1) - m$3, T -= u$1(c$1) - m$3, k$1 -= l(c$1) - m$3, T < _ && (_ = T = (_ + T) / 2), k$1 < M && (M = k$1 = (M + k$1) / 2), t(c$1, _, M, T, k$1));
	}
	return m(p$2, "positionNode"), h$2.round = function(c$1) {
		return arguments.length ? (e = !!c$1, h$2) : e;
	}, h$2.size = function(c$1) {
		return arguments.length ? (n$1 = +c$1[0], i = +c$1[1], h$2) : [n$1, i];
	}, h$2.tile = function(c$1) {
		return arguments.length ? (t = /* @__PURE__ */ Fa(c$1), h$2) : t;
	}, h$2.padding = function(c$1) {
		return arguments.length ? h$2.paddingInner(c$1).paddingOuter(c$1) : h$2.paddingInner();
	}, h$2.paddingInner = function(c$1) {
		return arguments.length ? (a$1 = typeof c$1 == "function" ? c$1 : Jt$1(+c$1), h$2) : a$1;
	}, h$2.paddingOuter = function(c$1) {
		return arguments.length ? h$2.paddingTop(c$1).paddingRight(c$1).paddingBottom(c$1).paddingLeft(c$1) : h$2.paddingTop();
	}, h$2.paddingTop = function(c$1) {
		return arguments.length ? (s = typeof c$1 == "function" ? c$1 : Jt$1(+c$1), h$2) : s;
	}, h$2.paddingRight = function(c$1) {
		return arguments.length ? (u$1 = typeof c$1 == "function" ? c$1 : Jt$1(+c$1), h$2) : u$1;
	}, h$2.paddingBottom = function(c$1) {
		return arguments.length ? (l = typeof c$1 == "function" ? c$1 : Jt$1(+c$1), h$2) : l;
	}, h$2.paddingLeft = function(c$1) {
		return arguments.length ? (f = typeof c$1 == "function" ? c$1 : Jt$1(+c$1), h$2) : f;
	}, h$2;
}
m(Ua, "default");
function Lt(t, e) {
	switch (arguments.length) {
		case 0: break;
		case 1:
			this.range(t);
			break;
		default:
			this.range(e).domain(t);
			break;
	}
	return this;
}
m(Lt, "initRange");
var qi$1 = /* @__PURE__ */ Symbol("implicit");
function He$1() {
	var t = new fe(), e = [], n$1 = [], i = qi$1;
	function o$1(a$1) {
		let s = /* @__PURE__ */ t.get(a$1);
		if (s === void 0) {
			if (i !== qi$1) return i;
			t.set(a$1, s = e.push(a$1) - 1);
		}
		return n$1[s % n$1.length];
	}
	return m(o$1, "scale"), o$1.domain = function(a$1) {
		if (!arguments.length) return e.slice();
		e = [], t = new fe();
		for (let s of a$1) t.has(s) || t.set(s, e.push(s) - 1);
		return o$1;
	}, o$1.range = function(a$1) {
		return arguments.length ? (n$1 = /* @__PURE__ */ Array.from(a$1), o$1) : n$1.slice();
	}, o$1.unknown = function(a$1) {
		return arguments.length ? (i = a$1, o$1) : i;
	}, o$1.copy = function() {
		return He$1(e, n$1).unknown(i);
	}, Lt.apply(o$1, arguments), o$1;
}
m(He$1, "ordinal");
function Wi$1(t) {
	return function() {
		return t;
	};
}
m(Wi$1, "constants");
function Vi$1(t) {
	return +t;
}
m(Vi$1, "number");
var La = [0, 1];
function ve$1(t) {
	return t;
}
m(ve$1, "identity");
function Xi$1(t, e) {
	return (e -= t = +t) ? function(n$1) {
		return (n$1 - t) / e;
	} : Wi$1(isNaN(e) ? NaN : .5);
}
m(Xi$1, "normalize");
function jf(t, e) {
	var n$1;
	return t > e && (n$1 = t, t = e, e = n$1), function(i) {
		return Math.max(t, /* @__PURE__ */ Math.min(e, i));
	};
}
m(jf, "clamper");
function tl(t, e, n$1) {
	var i = t[0], o$1 = t[1], a$1 = e[0], s = e[1];
	return o$1 < i ? (i = /* @__PURE__ */ Xi$1(o$1, i), a$1 = /* @__PURE__ */ n$1(s, a$1)) : (i = /* @__PURE__ */ Xi$1(i, o$1), a$1 = /* @__PURE__ */ n$1(a$1, s)), function(u$1) {
		return a$1(/* @__PURE__ */ i(u$1));
	};
}
m(tl, "bimap");
function el(t, e, n$1) {
	var i = Math.min(t.length, e.length) - 1, o$1 = new Array(i), a$1 = new Array(i), s = -1;
	for (t[i] < t[0] && (t = /* @__PURE__ */ t.slice().reverse(), e = /* @__PURE__ */ e.slice().reverse()); ++s < i;) o$1[s] = /* @__PURE__ */ Xi$1(t[s], t[s + 1]), a$1[s] = /* @__PURE__ */ n$1(e[s], e[s + 1]);
	return function(u$1) {
		var l = pr(t, u$1, 1, i) - 1;
		return a$1[l](/* @__PURE__ */ o$1[l](u$1));
	};
}
m(el, "polymap");
function Yn(t, e) {
	return e.domain(/* @__PURE__ */ t.domain()).range(/* @__PURE__ */ t.range()).interpolate(/* @__PURE__ */ t.interpolate()).clamp(/* @__PURE__ */ t.clamp()).unknown(/* @__PURE__ */ t.unknown());
}
m(Yn, "copy");
function nl() {
	var t = La, e = La, n$1 = Ft, i, o$1, a$1, s = ve$1, u$1, l, f;
	function h$2() {
		var c$1 = /* @__PURE__ */ Math.min(t.length, e.length);
		return s !== ve$1 && (s = /* @__PURE__ */ jf(t[0], t[c$1 - 1])), u$1 = c$1 > 2 ? el : tl, l = f = null, p$2;
	}
	m(h$2, "rescale");
	function p$2(c$1) {
		return c$1 == null || isNaN(c$1 = +c$1) ? a$1 : (l || (l = /* @__PURE__ */ u$1(/* @__PURE__ */ t.map(i), e, n$1)))(/* @__PURE__ */ i(/* @__PURE__ */ s(c$1)));
	}
	return m(p$2, "scale"), p$2.invert = function(c$1) {
		return s(/* @__PURE__ */ o$1(/* @__PURE__ */ (f || (f = /* @__PURE__ */ u$1(e, /* @__PURE__ */ t.map(i), j)))(c$1)));
	}, p$2.domain = function(c$1) {
		return arguments.length ? (t = /* @__PURE__ */ Array.from(c$1, Vi$1), h$2()) : t.slice();
	}, p$2.range = function(c$1) {
		return arguments.length ? (e = /* @__PURE__ */ Array.from(c$1), h$2()) : e.slice();
	}, p$2.rangeRound = function(c$1) {
		return e = /* @__PURE__ */ Array.from(c$1), n$1 = Mn$1, h$2();
	}, p$2.clamp = function(c$1) {
		return arguments.length ? (s = c$1 ? !0 : ve$1, h$2()) : s !== ve$1;
	}, p$2.interpolate = function(c$1) {
		return arguments.length ? (n$1 = c$1, h$2()) : n$1;
	}, p$2.unknown = function(c$1) {
		return arguments.length ? (a$1 = c$1, p$2) : a$1;
	}, function(c$1, m$3) {
		return i = c$1, o$1 = m$3, h$2();
	};
}
m(nl, "transformer");
function Be() {
	return nl()(ve$1, ve$1);
}
m(Be, "continuous");
function Gi$1(t, e, n$1, i) {
	var o$1 = /* @__PURE__ */ le(t, e, n$1), a$1;
	switch (i = /* @__PURE__ */ Ut(i ?? ",f"), i.type) {
		case "s":
			var s = /* @__PURE__ */ Math.max(/* @__PURE__ */ Math.abs(t), /* @__PURE__ */ Math.abs(e));
			return i.precision == null && !isNaN(a$1 = /* @__PURE__ */ In(o$1, s)) && (i.precision = a$1), On$1(i, s);
		case "":
		case "e":
		case "g":
		case "p":
		case "r":
			i.precision == null && !isNaN(a$1 = /* @__PURE__ */ Rn(o$1, /* @__PURE__ */ Math.max(/* @__PURE__ */ Math.abs(t), /* @__PURE__ */ Math.abs(e)))) && (i.precision = a$1 - (i.type === "e"));
			break;
		case "f":
		case "%":
			i.precision == null && !isNaN(a$1 = /* @__PURE__ */ En$1(o$1)) && (i.precision = a$1 - (i.type === "%") * 2);
			break;
	}
	return $n(i);
}
m(Gi$1, "tickFormat");
function rl(t) {
	var e = t.domain;
	return t.ticks = function(n$1) {
		var i = /* @__PURE__ */ e();
		return hn$1(i[0], i[i.length - 1], n$1 ?? 10);
	}, t.tickFormat = function(n$1, i) {
		var o$1 = /* @__PURE__ */ e();
		return Gi$1(o$1[0], o$1[o$1.length - 1], n$1 ?? 10, i);
	}, t.nice = function(n$1) {
		n$1 ??= 10;
		var i = /* @__PURE__ */ e(), o$1 = 0, a$1 = i.length - 1, s = i[o$1], u$1 = i[a$1], l, f, h$2 = 10;
		for (u$1 < s && (f = s, s = u$1, u$1 = f, f = o$1, o$1 = a$1, a$1 = f); h$2-- > 0;) {
			if (f = /* @__PURE__ */ Ee$1(s, u$1, n$1), f === l) return i[o$1] = s, i[a$1] = u$1, e(i);
			if (f > 0) s = Math.floor(s / f) * f, u$1 = Math.ceil(u$1 / f) * f;
			else if (f < 0) s = Math.ceil(s * f) / f, u$1 = Math.floor(u$1 * f) / f;
			else break;
			l = f;
		}
		return t;
	}, t;
}
m(rl, "linearish");
function Zi$1() {
	var t = /* @__PURE__ */ Be();
	return t.copy = function() {
		return Yn(t, /* @__PURE__ */ Zi$1());
	}, Lt.apply(t, arguments), rl(t);
}
m(Zi$1, "linear");
var Qi$1 = /* @__PURE__ */ new Date(), Ki$1 = /* @__PURE__ */ new Date();
function H(t, e, n$1, i) {
	function o$1(a$1) {
		return t(a$1 = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+a$1)), a$1;
	}
	return m(o$1, "interval"), o$1.floor = (a$1) => (t(a$1 = /* @__PURE__ */ new Date(+a$1)), a$1), o$1.ceil = (a$1) => (t(a$1 = /* @__PURE__ */ new Date(a$1 - 1)), e(a$1, 1), t(a$1), a$1), o$1.round = (a$1) => {
		let s = /* @__PURE__ */ o$1(a$1), u$1 = /* @__PURE__ */ o$1.ceil(a$1);
		return a$1 - s < u$1 - a$1 ? s : u$1;
	}, o$1.offset = (a$1, s) => (e(a$1 = /* @__PURE__ */ new Date(+a$1), s == null ? 1 : Math.floor(s)), a$1), o$1.range = (a$1, s, u$1) => {
		let l = [];
		if (a$1 = /* @__PURE__ */ o$1.ceil(a$1), u$1 = u$1 == null ? 1 : Math.floor(u$1), !(a$1 < s) || !(u$1 > 0)) return l;
		let f;
		do
			l.push(f = /* @__PURE__ */ new Date(+a$1)), e(a$1, u$1), t(a$1);
		while (f < a$1 && a$1 < s);
		return l;
	}, o$1.filter = (a$1) => H((s) => {
		if (s >= s) for (; t(s), !a$1(s);) s.setTime(s - 1);
	}, (s, u$1) => {
		if (s >= s) if (u$1 < 0) for (; ++u$1 <= 0;) for (; e(s, -1), !a$1(s););
		else for (; --u$1 >= 0;) for (; e(s, 1), !a$1(s););
	}), n$1 && (o$1.count = (a$1, s) => (Qi$1.setTime(+a$1), Ki$1.setTime(+s), t(Qi$1), t(Ki$1), Math.floor(/* @__PURE__ */ n$1(Qi$1, Ki$1))), o$1.every = (a$1) => (a$1 = /* @__PURE__ */ Math.floor(a$1), !isFinite(a$1) || !(a$1 > 0) ? null : a$1 > 1 ? o$1.filter(i ? (s) => i(s) % a$1 === 0 : (s) => o$1.count(0, s) % a$1 === 0) : o$1)), o$1;
}
m(H, "timeInterval");
var jt$1 = /* @__PURE__ */ H(() => {}, (t, e) => {
	t.setTime(+t + e);
}, (t, e) => e - t);
jt$1.every = (t) => (t = /* @__PURE__ */ Math.floor(t), !isFinite(t) || !(t > 0) ? null : t > 1 ? H((e) => {
	e.setTime(Math.floor(e / t) * t);
}, (e, n$1) => {
	e.setTime(+e + n$1 * t);
}, (e, n$1) => (n$1 - e) / t) : jt$1);
jt$1.range;
var Tt = /* @__PURE__ */ H((t) => {
	t.setTime(t - t.getMilliseconds());
}, (t, e) => {
	t.setTime(+t + e * 1e3);
}, (t, e) => (e - t) / 1e3, (t) => t.getUTCSeconds());
Tt.range;
var we$1 = /* @__PURE__ */ H((t) => {
	t.setTime(t - t.getMilliseconds() - t.getSeconds() * 1e3);
}, (t, e) => {
	t.setTime(+t + e * 6e4);
}, (t, e) => (e - t) / 6e4, (t) => t.getMinutes());
we$1.range;
var Fn = /* @__PURE__ */ H((t) => {
	t.setUTCSeconds(0, 0);
}, (t, e) => {
	t.setTime(+t + e * 6e4);
}, (t, e) => (e - t) / 6e4, (t) => t.getUTCMinutes());
Fn.range;
var be = /* @__PURE__ */ H((t) => {
	t.setTime(t - t.getMilliseconds() - t.getSeconds() * 1e3 - t.getMinutes() * 6e4);
}, (t, e) => {
	t.setTime(+t + e * 36e5);
}, (t, e) => (e - t) / 36e5, (t) => t.getHours());
be.range;
var Un = /* @__PURE__ */ H((t) => {
	t.setUTCMinutes(0, 0, 0);
}, (t, e) => {
	t.setTime(+t + e * 36e5);
}, (t, e) => (e - t) / 36e5, (t) => t.getUTCHours());
Un.range;
var Dt$1 = /* @__PURE__ */ H((t) => t.setHours(0, 0, 0, 0), (t, e) => t.setDate(t.getDate() + e), (t, e) => (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * 6e4) / 864e5, (t) => t.getDate() - 1);
Dt$1.range;
var We$1 = /* @__PURE__ */ H((t) => {
	t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
	t.setUTCDate(t.getUTCDate() + e);
}, (t, e) => (e - t) / 864e5, (t) => t.getUTCDate() - 1);
We$1.range;
var Ln = /* @__PURE__ */ H((t) => {
	t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
	t.setUTCDate(t.getUTCDate() + e);
}, (t, e) => (e - t) / 864e5, (t) => Math.floor(t / 864e5));
Ln.range;
function ne(t) {
	return H((e) => {
		e.setDate(e.getDate() - (e.getDay() + 7 - t) % 7), e.setHours(0, 0, 0, 0);
	}, (e, n$1) => {
		e.setDate(e.getDate() + n$1 * 7);
	}, (e, n$1) => (n$1 - e - (n$1.getTimezoneOffset() - e.getTimezoneOffset()) * 6e4) / 6048e5);
}
m(ne, "timeWeekday");
var $t$1 = /* @__PURE__ */ ne(0), Me$1 = /* @__PURE__ */ ne(1), qa = /* @__PURE__ */ ne(2), Wa = /* @__PURE__ */ ne(3), zt$1 = /* @__PURE__ */ ne(4), Va = /* @__PURE__ */ ne(5), Xa = /* @__PURE__ */ ne(6);
$t$1.range;
Me$1.range;
qa.range;
Wa.range;
zt$1.range;
Va.range;
Xa.range;
function re$1(t) {
	return H((e) => {
		e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t) % 7), e.setUTCHours(0, 0, 0, 0);
	}, (e, n$1) => {
		e.setUTCDate(e.getUTCDate() + n$1 * 7);
	}, (e, n$1) => (n$1 - e) / 6048e5);
}
m(re$1, "utcWeekday");
var ie$1 = /* @__PURE__ */ re$1(0), Te = /* @__PURE__ */ re$1(1), Za = /* @__PURE__ */ re$1(2), Qa = /* @__PURE__ */ re$1(3), Ht = /* @__PURE__ */ re$1(4), Ka = /* @__PURE__ */ re$1(5), Ja = /* @__PURE__ */ re$1(6);
ie$1.range;
Te.range;
Za.range;
Qa.range;
Ht.range;
Ka.range;
Ja.range;
var ke = /* @__PURE__ */ H((t) => {
	t.setDate(1), t.setHours(0, 0, 0, 0);
}, (t, e) => {
	t.setMonth(t.getMonth() + e);
}, (t, e) => e.getMonth() - t.getMonth() + (e.getFullYear() - t.getFullYear()) * 12, (t) => t.getMonth());
ke.range;
var zn = /* @__PURE__ */ H((t) => {
	t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
	t.setUTCMonth(t.getUTCMonth() + e);
}, (t, e) => e.getUTCMonth() - t.getUTCMonth() + (e.getUTCFullYear() - t.getUTCFullYear()) * 12, (t) => t.getUTCMonth());
zn.range;
var lt$1 = /* @__PURE__ */ H((t) => {
	t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, e) => {
	t.setFullYear(t.getFullYear() + e);
}, (t, e) => e.getFullYear() - t.getFullYear(), (t) => t.getFullYear());
lt$1.every = (t) => !isFinite(t = /* @__PURE__ */ Math.floor(t)) || !(t > 0) ? null : H((e) => {
	e.setFullYear(Math.floor(e.getFullYear() / t) * t), e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, n$1) => {
	e.setFullYear(e.getFullYear() + n$1 * t);
});
lt$1.range;
var yt$1 = /* @__PURE__ */ H((t) => {
	t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
	t.setUTCFullYear(t.getUTCFullYear() + e);
}, (t, e) => e.getUTCFullYear() - t.getUTCFullYear(), (t) => t.getUTCFullYear());
yt$1.every = (t) => !isFinite(t = /* @__PURE__ */ Math.floor(t)) || !(t > 0) ? null : H((e) => {
	e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t), e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, n$1) => {
	e.setUTCFullYear(e.getUTCFullYear() + n$1 * t);
});
yt$1.range;
function es(t, e, n$1, i, o$1, a$1) {
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
			a$1,
			1,
			6e4
		],
		[
			a$1,
			5,
			5 * 6e4
		],
		[
			a$1,
			15,
			15 * 6e4
		],
		[
			a$1,
			30,
			30 * 6e4
		],
		[
			o$1,
			1,
			36e5
		],
		[
			o$1,
			3,
			3 * 36e5
		],
		[
			o$1,
			6,
			6 * 36e5
		],
		[
			o$1,
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
			n$1,
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
	function u$1(f, h$2, p$2) {
		let c$1 = h$2 < f;
		c$1 && ([f, h$2] = [h$2, f]);
		let m$3 = p$2 && typeof p$2.range == "function" ? p$2 : l(f, h$2, p$2), _ = m$3 ? m$3.range(f, +h$2 + 1) : [];
		return c$1 ? _.reverse() : _;
	}
	m(u$1, "ticks");
	function l(f, h$2, p$2) {
		let c$1 = Math.abs(h$2 - f) / p$2, m$3 = /* @__PURE__ */ Xt$1(([, , T]) => T).right(s, c$1);
		if (m$3 === s.length) return t.every(/* @__PURE__ */ le(f / 31536e6, h$2 / 31536e6, p$2));
		if (m$3 === 0) return jt$1.every(/* @__PURE__ */ Math.max(/* @__PURE__ */ le(f, h$2, p$2), 1));
		let [_, M] = s[c$1 / s[m$3 - 1][2] < s[m$3][2] / c$1 ? m$3 - 1 : m$3];
		return _.every(M);
	}
	return m(l, "tickInterval"), [u$1, l];
}
m(es, "ticker");
var [Nl, Al] = es(yt$1, zn, ie$1, Ln, Un, Fn), [Ji$1, ji$1] = es(lt$1, ke, $t$1, Dt$1, be, we$1);
function to$1(t) {
	if (0 <= t.y && t.y < 100) {
		var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
		return e.setFullYear(t.y), e;
	}
	return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
}
m(to$1, "localDate");
function eo$1(t) {
	if (0 <= t.y && t.y < 100) {
		var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
		return e.setUTCFullYear(t.y), e;
	}
	return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
}
m(eo$1, "utcDate");
function Ve$1(t, e, n$1) {
	return {
		y: t,
		m: e,
		d: n$1,
		H: 0,
		M: 0,
		S: 0,
		L: 0
	};
}
m(Ve$1, "newDate");
function no$1(t) {
	var e = t.dateTime, n$1 = t.date, i = t.time, o$1 = t.periods, a$1 = t.days, s = t.shortDays, u$1 = t.months, l = t.shortMonths, f = /* @__PURE__ */ Xe(o$1), h$2 = /* @__PURE__ */ Ge$1(o$1), p$2 = /* @__PURE__ */ Xe(a$1), c$1 = /* @__PURE__ */ Ge$1(a$1), m$3 = /* @__PURE__ */ Xe(s), _ = /* @__PURE__ */ Ge$1(s), M = /* @__PURE__ */ Xe(u$1), T = /* @__PURE__ */ Ge$1(u$1), k$1 = /* @__PURE__ */ Xe(l), I = /* @__PURE__ */ Ge$1(l), C = {
		a: D,
		A: $$1,
		b: P$1,
		B: z$1,
		c: null,
		d: ss$1,
		e: ss$1,
		f: Jl$1,
		g: uc,
		G: lc,
		H: Zl$1,
		I: Ql$1,
		j: Kl$1,
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
		a: J$1,
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
		q: Z$1,
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
		A: N$1,
		b: v$1,
		B: d$1,
		c: x,
		d: os$1,
		e: os$1,
		f: Wl,
		g: is,
		G: rs,
		H: as$1,
		I: as$1,
		j: zl,
		L: ql,
		m: Ll,
		M: Hl,
		p: E,
		q: Ul,
		Q: Xl$1,
		s: Gl,
		S: Bl,
		u: Il,
		U: Rl,
		V: Pl,
		w: El,
		W: Yl,
		x: S$2,
		X: y,
		y: is,
		Y: rs,
		Z: Fl,
		"%": Vl
	};
	C.x = /* @__PURE__ */ w(n$1, C), C.X = /* @__PURE__ */ w(i, C), C.c = /* @__PURE__ */ w(e, C), A.x = /* @__PURE__ */ w(n$1, A), A.X = /* @__PURE__ */ w(i, A), A.c = /* @__PURE__ */ w(e, A);
	function w(b, R$1) {
		return function(F$1) {
			var g$2 = [], at$1 = -1, q$2 = 0, ut = b.length, ft, Wt, Ho$1;
			for (F$1 instanceof Date || (F$1 = /* @__PURE__ */ new Date(+F$1)); ++at$1 < ut;) b.charCodeAt(at$1) === 37 && (g$2.push(/* @__PURE__ */ b.slice(q$2, at$1)), (Wt = ns[ft = /* @__PURE__ */ b.charAt(++at$1)]) != null ? ft = /* @__PURE__ */ b.charAt(++at$1) : Wt = ft === "e" ? " " : "0", (Ho$1 = R$1[ft]) && (ft = /* @__PURE__ */ Ho$1(F$1, Wt)), g$2.push(ft), q$2 = at$1 + 1);
			return g$2.push(/* @__PURE__ */ b.slice(q$2, at$1)), g$2.join("");
		};
	}
	m(w, "newFormat");
	function Y(b, R$1) {
		return function(F$1) {
			var g$2 = /* @__PURE__ */ Ve$1(1900, void 0, 1), at$1 = /* @__PURE__ */ U$1(g$2, b, F$1 += "", 0), q$2, ut;
			if (at$1 != F$1.length) return null;
			if ("Q" in g$2) return new Date(g$2.Q);
			if ("s" in g$2) return new Date(g$2.s * 1e3 + ("L" in g$2 ? g$2.L : 0));
			if (R$1 && !("Z" in g$2) && (g$2.Z = 0), "p" in g$2 && (g$2.H = g$2.H % 12 + g$2.p * 12), g$2.m === void 0 && (g$2.m = "q" in g$2 ? g$2.q : 0), "V" in g$2) {
				if (g$2.V < 1 || g$2.V > 53) return null;
				"w" in g$2 || (g$2.w = 1), "Z" in g$2 ? (q$2 = /* @__PURE__ */ eo$1(/* @__PURE__ */ Ve$1(g$2.y, 0, 1)), ut = /* @__PURE__ */ q$2.getUTCDay(), q$2 = ut > 4 || ut === 0 ? Te.ceil(q$2) : Te(q$2), q$2 = /* @__PURE__ */ We$1.offset(q$2, (g$2.V - 1) * 7), g$2.y = /* @__PURE__ */ q$2.getUTCFullYear(), g$2.m = /* @__PURE__ */ q$2.getUTCMonth(), g$2.d = q$2.getUTCDate() + (g$2.w + 6) % 7) : (q$2 = /* @__PURE__ */ to$1(/* @__PURE__ */ Ve$1(g$2.y, 0, 1)), ut = /* @__PURE__ */ q$2.getDay(), q$2 = ut > 4 || ut === 0 ? Me$1.ceil(q$2) : Me$1(q$2), q$2 = /* @__PURE__ */ Dt$1.offset(q$2, (g$2.V - 1) * 7), g$2.y = /* @__PURE__ */ q$2.getFullYear(), g$2.m = /* @__PURE__ */ q$2.getMonth(), g$2.d = q$2.getDate() + (g$2.w + 6) % 7);
			} else ("W" in g$2 || "U" in g$2) && ("w" in g$2 || (g$2.w = "u" in g$2 ? g$2.u % 7 : "W" in g$2 ? 1 : 0), ut = "Z" in g$2 ? eo$1(/* @__PURE__ */ Ve$1(g$2.y, 0, 1)).getUTCDay() : to$1(/* @__PURE__ */ Ve$1(g$2.y, 0, 1)).getDay(), g$2.m = 0, g$2.d = "W" in g$2 ? (g$2.w + 6) % 7 + g$2.W * 7 - (ut + 5) % 7 : g$2.w + g$2.U * 7 - (ut + 6) % 7);
			return "Z" in g$2 ? (g$2.H += g$2.Z / 100 | 0, g$2.M += g$2.Z % 100, eo$1(g$2)) : to$1(g$2);
		};
	}
	m(Y, "newParse");
	function U$1(b, R$1, F$1, g$2) {
		for (var at$1 = 0, q$2 = R$1.length, ut = F$1.length, ft, Wt; at$1 < q$2;) {
			if (g$2 >= ut) return -1;
			if (ft = /* @__PURE__ */ R$1.charCodeAt(at$1++), ft === 37) {
				if (ft = /* @__PURE__ */ R$1.charAt(at$1++), Wt = O[ft in ns ? R$1.charAt(at$1++) : ft], !Wt || (g$2 = /* @__PURE__ */ Wt(b, F$1, g$2)) < 0) return -1;
			} else if (ft != F$1.charCodeAt(g$2++)) return -1;
		}
		return g$2;
	}
	m(U$1, "parseSpecifier");
	function E(b, R$1, F$1) {
		var g$2 = /* @__PURE__ */ f.exec(/* @__PURE__ */ R$1.slice(F$1));
		return g$2 ? (b.p = /* @__PURE__ */ h$2.get(/* @__PURE__ */ g$2[0].toLowerCase()), F$1 + g$2[0].length) : -1;
	}
	m(E, "parsePeriod");
	function B(b, R$1, F$1) {
		var g$2 = /* @__PURE__ */ m$3.exec(/* @__PURE__ */ R$1.slice(F$1));
		return g$2 ? (b.w = /* @__PURE__ */ _.get(/* @__PURE__ */ g$2[0].toLowerCase()), F$1 + g$2[0].length) : -1;
	}
	m(B, "parseShortWeekday");
	function N$1(b, R$1, F$1) {
		var g$2 = /* @__PURE__ */ p$2.exec(/* @__PURE__ */ R$1.slice(F$1));
		return g$2 ? (b.w = /* @__PURE__ */ c$1.get(/* @__PURE__ */ g$2[0].toLowerCase()), F$1 + g$2[0].length) : -1;
	}
	m(N$1, "parseWeekday");
	function v$1(b, R$1, F$1) {
		var g$2 = /* @__PURE__ */ k$1.exec(/* @__PURE__ */ R$1.slice(F$1));
		return g$2 ? (b.m = /* @__PURE__ */ I.get(/* @__PURE__ */ g$2[0].toLowerCase()), F$1 + g$2[0].length) : -1;
	}
	m(v$1, "parseShortMonth");
	function d$1(b, R$1, F$1) {
		var g$2 = /* @__PURE__ */ M.exec(/* @__PURE__ */ R$1.slice(F$1));
		return g$2 ? (b.m = /* @__PURE__ */ T.get(/* @__PURE__ */ g$2[0].toLowerCase()), F$1 + g$2[0].length) : -1;
	}
	m(d$1, "parseMonth");
	function x(b, R$1, F$1) {
		return U$1(b, e, R$1, F$1);
	}
	m(x, "parseLocaleDateTime");
	function S$2(b, R$1, F$1) {
		return U$1(b, n$1, R$1, F$1);
	}
	m(S$2, "parseLocaleDate");
	function y(b, R$1, F$1) {
		return U$1(b, i, R$1, F$1);
	}
	m(y, "parseLocaleTime");
	function D(b) {
		return s[b.getDay()];
	}
	m(D, "formatShortWeekday");
	function $$1(b) {
		return a$1[b.getDay()];
	}
	m($$1, "formatWeekday");
	function P$1(b) {
		return l[b.getMonth()];
	}
	m(P$1, "formatShortMonth");
	function z$1(b) {
		return u$1[b.getMonth()];
	}
	m(z$1, "formatMonth");
	function W(b) {
		return o$1[+(b.getHours() >= 12)];
	}
	m(W, "formatPeriod");
	function X(b) {
		return 1 + ~~(b.getMonth() / 3);
	}
	m(X, "formatQuarter");
	function J$1(b) {
		return s[b.getUTCDay()];
	}
	m(J$1, "formatUTCShortWeekday");
	function ht(b) {
		return a$1[b.getUTCDay()];
	}
	m(ht, "formatUTCWeekday");
	function Q(b) {
		return l[b.getUTCMonth()];
	}
	m(Q, "formatUTCShortMonth");
	function dt(b) {
		return u$1[b.getUTCMonth()];
	}
	m(dt, "formatUTCMonth");
	function st(b) {
		return o$1[+(b.getUTCHours() >= 12)];
	}
	m(st, "formatUTCPeriod");
	function Z$1(b) {
		return 1 + ~~(b.getUTCMonth() / 3);
	}
	return m(Z$1, "formatUTCQuarter"), {
		format: /* @__PURE__ */ m(function(b) {
			var R$1 = /* @__PURE__ */ w(b += "", C);
			return R$1.toString = function() {
				return b;
			}, R$1;
		}, "format"),
		parse: /* @__PURE__ */ m(function(b) {
			var R$1 = /* @__PURE__ */ Y(b += "", !1);
			return R$1.toString = function() {
				return b;
			}, R$1;
		}, "parse"),
		utcFormat: /* @__PURE__ */ m(function(b) {
			var R$1 = /* @__PURE__ */ w(b += "", A);
			return R$1.toString = function() {
				return b;
			}, R$1;
		}, "utcFormat"),
		utcParse: /* @__PURE__ */ m(function(b) {
			var R$1 = /* @__PURE__ */ Y(b += "", !0);
			return R$1.toString = function() {
				return b;
			}, R$1;
		}, "utcParse")
	};
}
m(no$1, "formatLocale");
var ns = {
	"-": "",
	_: " ",
	0: "0"
}, tt$1 = /^\s*\d+/, Dl = /^%/, $l = /[\\^$*+?|[\]().{}]/g;
function L(t, e, n$1) {
	var i = t < 0 ? "-" : "", o$1 = (i ? -t : t) + "", a$1 = o$1.length;
	return i + (a$1 < n$1 ? new Array(n$1 - a$1 + 1).join(e) + o$1 : o$1);
}
m(L, "pad");
function Ol(t) {
	return t.replace($l, "\\$&");
}
m(Ol, "requote");
function Xe(t) {
	return new RegExp("^(?:" + t.map(Ol).join("|") + ")", "i");
}
m(Xe, "formatRe");
function Ge$1(t) {
	return new Map(t.map((e, n$1) => [/* @__PURE__ */ e.toLowerCase(), n$1]));
}
m(Ge$1, "formatLookup");
function El(t, e, n$1) {
	var i = /* @__PURE__ */ tt$1.exec(/* @__PURE__ */ e.slice(n$1, n$1 + 1));
	return i ? (t.w = +i[0], n$1 + i[0].length) : -1;
}
m(El, "parseWeekdayNumberSunday");
function Il(t, e, n$1) {
	var i = /* @__PURE__ */ tt$1.exec(/* @__PURE__ */ e.slice(n$1, n$1 + 1));
	return i ? (t.u = +i[0], n$1 + i[0].length) : -1;
}
m(Il, "parseWeekdayNumberMonday");
function Rl(t, e, n$1) {
	var i = /* @__PURE__ */ tt$1.exec(/* @__PURE__ */ e.slice(n$1, n$1 + 2));
	return i ? (t.U = +i[0], n$1 + i[0].length) : -1;
}
m(Rl, "parseWeekNumberSunday");
function Pl(t, e, n$1) {
	var i = /* @__PURE__ */ tt$1.exec(/* @__PURE__ */ e.slice(n$1, n$1 + 2));
	return i ? (t.V = +i[0], n$1 + i[0].length) : -1;
}
m(Pl, "parseWeekNumberISO");
function Yl(t, e, n$1) {
	var i = /* @__PURE__ */ tt$1.exec(/* @__PURE__ */ e.slice(n$1, n$1 + 2));
	return i ? (t.W = +i[0], n$1 + i[0].length) : -1;
}
m(Yl, "parseWeekNumberMonday");
function rs(t, e, n$1) {
	var i = /* @__PURE__ */ tt$1.exec(/* @__PURE__ */ e.slice(n$1, n$1 + 4));
	return i ? (t.y = +i[0], n$1 + i[0].length) : -1;
}
m(rs, "parseFullYear");
function is(t, e, n$1) {
	var i = /* @__PURE__ */ tt$1.exec(/* @__PURE__ */ e.slice(n$1, n$1 + 2));
	return i ? (t.y = +i[0] + (+i[0] > 68 ? 1900 : 2e3), n$1 + i[0].length) : -1;
}
m(is, "parseYear");
function Fl(t, e, n$1) {
	var i = /* @__PURE__ */ /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(/* @__PURE__ */ e.slice(n$1, n$1 + 6));
	return i ? (t.Z = i[1] ? 0 : -(i[2] + (i[3] || "00")), n$1 + i[0].length) : -1;
}
m(Fl, "parseZone");
function Ul(t, e, n$1) {
	var i = /* @__PURE__ */ tt$1.exec(/* @__PURE__ */ e.slice(n$1, n$1 + 1));
	return i ? (t.q = i[0] * 3 - 3, n$1 + i[0].length) : -1;
}
m(Ul, "parseQuarter");
function Ll(t, e, n$1) {
	var i = /* @__PURE__ */ tt$1.exec(/* @__PURE__ */ e.slice(n$1, n$1 + 2));
	return i ? (t.m = i[0] - 1, n$1 + i[0].length) : -1;
}
m(Ll, "parseMonthNumber");
function os$1(t, e, n$1) {
	var i = /* @__PURE__ */ tt$1.exec(/* @__PURE__ */ e.slice(n$1, n$1 + 2));
	return i ? (t.d = +i[0], n$1 + i[0].length) : -1;
}
m(os$1, "parseDayOfMonth");
function zl(t, e, n$1) {
	var i = /* @__PURE__ */ tt$1.exec(/* @__PURE__ */ e.slice(n$1, n$1 + 3));
	return i ? (t.m = 0, t.d = +i[0], n$1 + i[0].length) : -1;
}
m(zl, "parseDayOfYear");
function as$1(t, e, n$1) {
	var i = /* @__PURE__ */ tt$1.exec(/* @__PURE__ */ e.slice(n$1, n$1 + 2));
	return i ? (t.H = +i[0], n$1 + i[0].length) : -1;
}
m(as$1, "parseHour24");
function Hl(t, e, n$1) {
	var i = /* @__PURE__ */ tt$1.exec(/* @__PURE__ */ e.slice(n$1, n$1 + 2));
	return i ? (t.M = +i[0], n$1 + i[0].length) : -1;
}
m(Hl, "parseMinutes");
function Bl(t, e, n$1) {
	var i = /* @__PURE__ */ tt$1.exec(/* @__PURE__ */ e.slice(n$1, n$1 + 2));
	return i ? (t.S = +i[0], n$1 + i[0].length) : -1;
}
m(Bl, "parseSeconds");
function ql(t, e, n$1) {
	var i = /* @__PURE__ */ tt$1.exec(/* @__PURE__ */ e.slice(n$1, n$1 + 3));
	return i ? (t.L = +i[0], n$1 + i[0].length) : -1;
}
m(ql, "parseMilliseconds");
function Wl(t, e, n$1) {
	var i = /* @__PURE__ */ tt$1.exec(/* @__PURE__ */ e.slice(n$1, n$1 + 6));
	return i ? (t.L = /* @__PURE__ */ Math.floor(i[0] / 1e3), n$1 + i[0].length) : -1;
}
m(Wl, "parseMicroseconds");
function Vl(t, e, n$1) {
	var i = /* @__PURE__ */ Dl.exec(/* @__PURE__ */ e.slice(n$1, n$1 + 1));
	return i ? n$1 + i[0].length : -1;
}
m(Vl, "parseLiteralPercent");
function Xl$1(t, e, n$1) {
	var i = /* @__PURE__ */ tt$1.exec(/* @__PURE__ */ e.slice(n$1));
	return i ? (t.Q = +i[0], n$1 + i[0].length) : -1;
}
m(Xl$1, "parseUnixTimestamp");
function Gl(t, e, n$1) {
	var i = /* @__PURE__ */ tt$1.exec(/* @__PURE__ */ e.slice(n$1));
	return i ? (t.s = +i[0], n$1 + i[0].length) : -1;
}
m(Gl, "parseUnixTimestampSeconds");
function ss$1(t, e) {
	return L(/* @__PURE__ */ t.getDate(), e, 2);
}
m(ss$1, "formatDayOfMonth");
function Zl$1(t, e) {
	return L(/* @__PURE__ */ t.getHours(), e, 2);
}
m(Zl$1, "formatHour24");
function Ql$1(t, e) {
	return L(t.getHours() % 12 || 12, e, 2);
}
m(Ql$1, "formatHour12");
function Kl$1(t, e) {
	return L(1 + Dt$1.count(/* @__PURE__ */ lt$1(t), t), e, 3);
}
m(Kl$1, "formatDayOfYear");
function hs(t, e) {
	return L(/* @__PURE__ */ t.getMilliseconds(), e, 3);
}
m(hs, "formatMilliseconds");
function Jl$1(t, e) {
	return hs(t, e) + "000";
}
m(Jl$1, "formatMicroseconds");
function jl(t, e) {
	return L(t.getMonth() + 1, e, 2);
}
m(jl, "formatMonthNumber");
function tc(t, e) {
	return L(/* @__PURE__ */ t.getMinutes(), e, 2);
}
m(tc, "formatMinutes");
function ec(t, e) {
	return L(/* @__PURE__ */ t.getSeconds(), e, 2);
}
m(ec, "formatSeconds");
function nc(t) {
	var e = /* @__PURE__ */ t.getDay();
	return e === 0 ? 7 : e;
}
m(nc, "formatWeekdayNumberMonday");
function rc(t, e) {
	return L(/* @__PURE__ */ $t$1.count(lt$1(t) - 1, t), e, 2);
}
m(rc, "formatWeekNumberSunday");
function ps(t) {
	var e = /* @__PURE__ */ t.getDay();
	return e >= 4 || e === 0 ? zt$1(t) : zt$1.ceil(t);
}
m(ps, "dISO");
function ic(t, e) {
	return t = /* @__PURE__ */ ps(t), L(zt$1.count(/* @__PURE__ */ lt$1(t), t) + (lt$1(t).getDay() === 4), e, 2);
}
m(ic, "formatWeekNumberISO");
function oc(t) {
	return t.getDay();
}
m(oc, "formatWeekdayNumberSunday");
function ac(t, e) {
	return L(/* @__PURE__ */ Me$1.count(lt$1(t) - 1, t), e, 2);
}
m(ac, "formatWeekNumberMonday");
function sc(t, e) {
	return L(t.getFullYear() % 100, e, 2);
}
m(sc, "formatYear");
function uc(t, e) {
	return t = /* @__PURE__ */ ps(t), L(t.getFullYear() % 100, e, 2);
}
m(uc, "formatYearISO");
function fc(t, e) {
	return L(t.getFullYear() % 1e4, e, 4);
}
m(fc, "formatFullYear");
function lc(t, e) {
	var n$1 = /* @__PURE__ */ t.getDay();
	return t = n$1 >= 4 || n$1 === 0 ? zt$1(t) : zt$1.ceil(t), L(t.getFullYear() % 1e4, e, 4);
}
m(lc, "formatFullYearISO");
function cc(t) {
	var e = /* @__PURE__ */ t.getTimezoneOffset();
	return (e > 0 ? "-" : (e *= -1, "+")) + L(e / 60 | 0, "0", 2) + L(e % 60, "0", 2);
}
m(cc, "formatZone");
function us(t, e) {
	return L(/* @__PURE__ */ t.getUTCDate(), e, 2);
}
m(us, "formatUTCDayOfMonth");
function hc(t, e) {
	return L(/* @__PURE__ */ t.getUTCHours(), e, 2);
}
m(hc, "formatUTCHour24");
function pc(t, e) {
	return L(t.getUTCHours() % 12 || 12, e, 2);
}
m(pc, "formatUTCHour12");
function mc(t, e) {
	return L(1 + We$1.count(/* @__PURE__ */ yt$1(t), t), e, 3);
}
m(mc, "formatUTCDayOfYear");
function ms(t, e) {
	return L(/* @__PURE__ */ t.getUTCMilliseconds(), e, 3);
}
m(ms, "formatUTCMilliseconds");
function dc(t, e) {
	return ms(t, e) + "000";
}
m(dc, "formatUTCMicroseconds");
function xc(t, e) {
	return L(t.getUTCMonth() + 1, e, 2);
}
m(xc, "formatUTCMonthNumber");
function _c(t, e) {
	return L(/* @__PURE__ */ t.getUTCMinutes(), e, 2);
}
m(_c, "formatUTCMinutes");
function gc(t, e) {
	return L(/* @__PURE__ */ t.getUTCSeconds(), e, 2);
}
m(gc, "formatUTCSeconds");
function yc(t) {
	var e = /* @__PURE__ */ t.getUTCDay();
	return e === 0 ? 7 : e;
}
m(yc, "formatUTCWeekdayNumberMonday");
function vc(t, e) {
	return L(/* @__PURE__ */ ie$1.count(yt$1(t) - 1, t), e, 2);
}
m(vc, "formatUTCWeekNumberSunday");
function ds(t) {
	var e = /* @__PURE__ */ t.getUTCDay();
	return e >= 4 || e === 0 ? Ht(t) : Ht.ceil(t);
}
m(ds, "UTCdISO");
function wc(t, e) {
	return t = /* @__PURE__ */ ds(t), L(Ht.count(/* @__PURE__ */ yt$1(t), t) + (yt$1(t).getUTCDay() === 4), e, 2);
}
m(wc, "formatUTCWeekNumberISO");
function bc(t) {
	return t.getUTCDay();
}
m(bc, "formatUTCWeekdayNumberSunday");
function Mc(t, e) {
	return L(/* @__PURE__ */ Te.count(yt$1(t) - 1, t), e, 2);
}
m(Mc, "formatUTCWeekNumberMonday");
function Tc(t, e) {
	return L(t.getUTCFullYear() % 100, e, 2);
}
m(Tc, "formatUTCYear");
function kc(t, e) {
	return t = /* @__PURE__ */ ds(t), L(t.getUTCFullYear() % 100, e, 2);
}
m(kc, "formatUTCYearISO");
function Sc(t, e) {
	return L(t.getUTCFullYear() % 1e4, e, 4);
}
m(Sc, "formatUTCFullYear");
function Cc(t, e) {
	var n$1 = /* @__PURE__ */ t.getUTCDay();
	return t = n$1 >= 4 || n$1 === 0 ? Ht(t) : Ht.ceil(t), L(t.getUTCFullYear() % 1e4, e, 4);
}
m(Cc, "formatUTCFullYearISO");
function Nc() {
	return "+0000";
}
m(Nc, "formatUTCZone");
function fs() {
	return "%";
}
m(fs, "formatLiteralPercent");
function ls(t) {
	return +t;
}
m(ls, "formatUnixTimestamp");
function cs(t) {
	return Math.floor(+t / 1e3);
}
m(cs, "formatUnixTimestampSeconds");
var Se$1, Hn;
ro$1({
	dateTime: "%x, %X",
	date: "%-m/%-d/%Y",
	time: "%-I:%M:%S %p",
	periods: ["AM", "PM"],
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
function ro$1(t) {
	return Se$1 = /* @__PURE__ */ no$1(t), Hn = Se$1.format, Se$1.parse, Se$1.utcFormat, Se$1.utcParse, Se$1;
}
m(ro$1, "defaultLocale");
function io$1(t, e) {
	t = /* @__PURE__ */ t.slice();
	var n$1 = 0, i = t.length - 1, o$1 = t[n$1], a$1 = t[i], s;
	return a$1 < o$1 && (s = n$1, n$1 = i, i = s, s = o$1, o$1 = a$1, a$1 = s), t[n$1] = /* @__PURE__ */ e.floor(o$1), t[i] = /* @__PURE__ */ e.ceil(a$1), t;
}
m(io$1, "nice");
function Ac(t) {
	return new Date(t);
}
m(Ac, "date");
function Dc(t) {
	return t instanceof Date ? +t : +/* @__PURE__ */ new Date(+t);
}
m(Dc, "number");
function ys(t, e, n$1, i, o$1, a$1, s, u$1, l, f) {
	var h$2 = /* @__PURE__ */ Be(), p$2 = h$2.invert, c$1 = h$2.domain, m$3 = /* @__PURE__ */ f(".%L"), _ = /* @__PURE__ */ f(":%S"), M = /* @__PURE__ */ f("%I:%M"), T = /* @__PURE__ */ f("%I %p"), k$1 = /* @__PURE__ */ f("%a %d"), I = /* @__PURE__ */ f("%b %d"), C = /* @__PURE__ */ f("%B"), A = /* @__PURE__ */ f("%Y");
	function O(w) {
		return (l(w) < w ? m$3 : u$1(w) < w ? _ : s(w) < w ? M : a$1(w) < w ? T : i(w) < w ? o$1(w) < w ? k$1 : I : n$1(w) < w ? C : A)(w);
	}
	return m(O, "tickFormat"), h$2.invert = function(w) {
		return new Date(p$2(w));
	}, h$2.domain = function(w) {
		return arguments.length ? c$1(/* @__PURE__ */ Array.from(w, Dc)) : c$1().map(Ac);
	}, h$2.ticks = function(w) {
		var Y = /* @__PURE__ */ c$1();
		return t(Y[0], Y[Y.length - 1], w ?? 10);
	}, h$2.tickFormat = function(w, Y) {
		return Y == null ? O : f(Y);
	}, h$2.nice = function(w) {
		var Y = /* @__PURE__ */ c$1();
		return (!w || typeof w.range != "function") && (w = /* @__PURE__ */ e(Y[0], Y[Y.length - 1], w ?? 10)), w ? c$1(/* @__PURE__ */ io$1(Y, w)) : h$2;
	}, h$2.copy = function() {
		return Yn(h$2, /* @__PURE__ */ ys(t, e, n$1, i, o$1, a$1, s, u$1, l, f));
	}, h$2;
}
m(ys, "calendar");
function vs() {
	return Lt.apply(/* @__PURE__ */ ys(Ji$1, ji$1, lt$1, ke, $t$1, Dt$1, be, we$1, Tt, Hn).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
m(vs, "time");
function oo$1() {
	var t = /* @__PURE__ */ He$1().unknown(void 0), e = t.domain, n$1 = t.range, i = 0, o$1 = 1, a$1, s, u$1 = !1, l = 0, f = 0, h$2 = .5;
	delete t.unknown;
	function p$2() {
		var c$1 = e().length, m$3 = o$1 < i, _ = m$3 ? o$1 : i, M = m$3 ? i : o$1;
		a$1 = (M - _) / Math.max(1, c$1 - l + f * 2), u$1 && (a$1 = /* @__PURE__ */ Math.floor(a$1)), _ += (M - _ - a$1 * (c$1 - l)) * h$2, s = a$1 * (1 - l), u$1 && (_ = /* @__PURE__ */ Math.round(_), s = /* @__PURE__ */ Math.round(s));
		var T = /* @__PURE__ */ pn$1(c$1).map(function(k$1) {
			return _ + a$1 * k$1;
		});
		return n$1(m$3 ? T.reverse() : T);
	}
	return m(p$2, "rescale"), t.domain = function(c$1) {
		return arguments.length ? (e(c$1), p$2()) : e();
	}, t.range = function(c$1) {
		return arguments.length ? ([i, o$1] = c$1, i = +i, o$1 = +o$1, p$2()) : [i, o$1];
	}, t.rangeRound = function(c$1) {
		return [i, o$1] = c$1, i = +i, o$1 = +o$1, u$1 = !0, p$2();
	}, t.bandwidth = function() {
		return s;
	}, t.step = function() {
		return a$1;
	}, t.round = function(c$1) {
		return arguments.length ? (u$1 = !!c$1, p$2()) : u$1;
	}, t.padding = function(c$1) {
		return arguments.length ? (l = /* @__PURE__ */ Math.min(1, f = +c$1), p$2()) : l;
	}, t.paddingInner = function(c$1) {
		return arguments.length ? (l = /* @__PURE__ */ Math.min(1, c$1), p$2()) : l;
	}, t.paddingOuter = function(c$1) {
		return arguments.length ? (f = +c$1, p$2()) : f;
	}, t.align = function(c$1) {
		return arguments.length ? (h$2 = /* @__PURE__ */ Math.max(0, /* @__PURE__ */ Math.min(1, c$1)), p$2()) : h$2;
	}, t.copy = function() {
		return oo$1(/* @__PURE__ */ e(), [i, o$1]).round(u$1).paddingInner(l).paddingOuter(f).align(h$2);
	}, Lt.apply(/* @__PURE__ */ p$2(), arguments);
}
m(oo$1, "band");
function ao$1(t) {
	for (var e = t.length / 6 | 0, n$1 = new Array(e), i = 0; i < e;) n$1[i] = "#" + t.slice(i * 6, ++i * 6);
	return n$1;
}
m(ao$1, "default");
var $c = /* @__PURE__ */ ao$1("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
function V(t) {
	return m(function() {
		return t;
	}, "constant");
}
m(V, "default");
var so$1 = Math.abs, rt$1 = Math.atan2, Bt = Math.cos, ws = Math.max, Bn = Math.min, vt$1 = Math.sin, oe$1 = Math.sqrt, et$1 = 1e-12, Ce = Math.PI, Ze = Ce / 2, Ne$1 = 2 * Ce;
function bs(t) {
	return t > 1 ? 0 : t < -1 ? Ce : Math.acos(t);
}
m(bs, "acos");
function uo$1(t) {
	return t >= 1 ? Ze : t <= -1 ? -Ze : Math.asin(t);
}
m(uo$1, "asin");
var fo$1 = Math.PI, lo$1 = 2 * fo$1, ae$1 = 1e-6, Oc = lo$1 - ae$1;
function Ms(t) {
	this._ += t[0];
	for (let e = 1, n$1 = t.length; e < n$1; ++e) this._ += arguments[e] + t[e];
}
m(Ms, "append");
function Ec(t) {
	let e = /* @__PURE__ */ Math.floor(t);
	if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
	if (e > 15) return Ms;
	let n$1 = 10 ** e;
	return function(i) {
		this._ += i[0];
		for (let o$1 = 1, a$1 = i.length; o$1 < a$1; ++o$1) this._ += Math.round(arguments[o$1] * n$1) / n$1 + i[o$1];
	};
}
m(Ec, "appendRound");
var se$1 = class {
	static {
		m(this, "Path");
	}
	constructor(e) {
		this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = e == null ? Ms : Ec(e);
	}
	moveTo(e, n$1) {
		this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n$1}`;
	}
	closePath() {
		this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
	}
	lineTo(e, n$1) {
		this._append`L${this._x1 = +e},${this._y1 = +n$1}`;
	}
	quadraticCurveTo(e, n$1, i, o$1) {
		this._append`Q${+e},${+n$1},${this._x1 = +i},${this._y1 = +o$1}`;
	}
	bezierCurveTo(e, n$1, i, o$1, a$1, s) {
		this._append`C${+e},${+n$1},${+i},${+o$1},${this._x1 = +a$1},${this._y1 = +s}`;
	}
	arcTo(e, n$1, i, o$1, a$1) {
		if (e = +e, n$1 = +n$1, i = +i, o$1 = +o$1, a$1 = +a$1, a$1 < 0) throw new Error(`negative radius: ${a$1}`);
		let s = this._x1, u$1 = this._y1, l = i - e, f = o$1 - n$1, h$2 = s - e, p$2 = u$1 - n$1, c$1 = h$2 * h$2 + p$2 * p$2;
		if (this._x1 === null) this._append`M${this._x1 = e},${this._y1 = n$1}`;
		else if (c$1 > ae$1) if (!(Math.abs(p$2 * l - f * h$2) > ae$1) || !a$1) this._append`L${this._x1 = e},${this._y1 = n$1}`;
		else {
			let m$3 = i - s, _ = o$1 - u$1, M = l * l + f * f, T = m$3 * m$3 + _ * _, k$1 = /* @__PURE__ */ Math.sqrt(M), I = /* @__PURE__ */ Math.sqrt(c$1), C = a$1 * Math.tan((fo$1 - Math.acos((M + c$1 - T) / (2 * k$1 * I))) / 2), A = C / I, O = C / k$1;
			Math.abs(A - 1) > ae$1 && this._append`L${e + A * h$2},${n$1 + A * p$2}`, this._append`A${a$1},${a$1},0,0,${+(p$2 * m$3 > h$2 * _)},${this._x1 = e + O * l},${this._y1 = n$1 + O * f}`;
		}
	}
	arc(e, n$1, i, o$1, a$1, s) {
		if (e = +e, n$1 = +n$1, i = +i, s = !!s, i < 0) throw new Error(`negative radius: ${i}`);
		let u$1 = i * Math.cos(o$1), l = i * Math.sin(o$1), f = e + u$1, h$2 = n$1 + l, p$2 = 1 ^ s, c$1 = s ? o$1 - a$1 : a$1 - o$1;
		this._x1 === null ? this._append`M${f},${h$2}` : (Math.abs(this._x1 - f) > ae$1 || Math.abs(this._y1 - h$2) > ae$1) && this._append`L${f},${h$2}`, i && (c$1 < 0 && (c$1 = c$1 % lo$1 + lo$1), c$1 > Oc ? this._append`A${i},${i},0,1,${p$2},${e - u$1},${n$1 - l}A${i},${i},0,1,${p$2},${this._x1 = f},${this._y1 = h$2}` : c$1 > ae$1 && this._append`A${i},${i},0,${+(c$1 >= fo$1)},${p$2},${this._x1 = e + i * Math.cos(a$1)},${this._y1 = n$1 + i * Math.sin(a$1)}`);
	}
	rect(e, n$1, i, o$1) {
		this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n$1}h${i = +i}v${+o$1}h${-i}Z`;
	}
	toString() {
		return this._;
	}
};
function Ts() {
	return new se$1();
}
m(Ts, "path");
Ts.prototype = se$1.prototype;
function qn(t) {
	let e = 3;
	return t.digits = function(n$1) {
		if (!arguments.length) return e;
		if (n$1 == null) e = null;
		else {
			let i = /* @__PURE__ */ Math.floor(n$1);
			if (!(i >= 0)) throw new RangeError(`invalid digits: ${n$1}`);
			e = i;
		}
		return t;
	}, () => new se$1(e);
}
m(qn, "withPath");
function Ic(t) {
	return t.innerRadius;
}
m(Ic, "arcInnerRadius");
function Rc(t) {
	return t.outerRadius;
}
m(Rc, "arcOuterRadius");
function Pc(t) {
	return t.startAngle;
}
m(Pc, "arcStartAngle");
function Yc(t) {
	return t.endAngle;
}
m(Yc, "arcEndAngle");
function Fc(t) {
	return t && t.padAngle;
}
m(Fc, "arcPadAngle");
function Uc(t, e, n$1, i, o$1, a$1, s, u$1) {
	var l = n$1 - t, f = i - e, h$2 = s - o$1, p$2 = u$1 - a$1, c$1 = p$2 * l - h$2 * f;
	if (!(c$1 * c$1 < et$1)) return c$1 = (h$2 * (e - a$1) - p$2 * (t - o$1)) / c$1, [t + c$1 * l, e + c$1 * f];
}
m(Uc, "intersect");
function Wn(t, e, n$1, i, o$1, a$1, s) {
	var u$1 = t - n$1, l = e - i, f = (s ? a$1 : -a$1) / oe$1(u$1 * u$1 + l * l), h$2 = f * l, p$2 = -f * u$1, c$1 = t + h$2, m$3 = e + p$2, _ = n$1 + h$2, M = i + p$2, T = (c$1 + _) / 2, k$1 = (m$3 + M) / 2, I = _ - c$1, C = M - m$3, A = I * I + C * C, O = o$1 - a$1, w = c$1 * M - _ * m$3, Y = (C < 0 ? -1 : 1) * oe$1(/* @__PURE__ */ ws(0, O * O * A - w * w)), U$1 = (w * C - I * Y) / A, E = (-w * I - C * Y) / A, B = (w * C + I * Y) / A, N$1 = (-w * I + C * Y) / A, v$1 = U$1 - T, d$1 = E - k$1, x = B - T, S$2 = N$1 - k$1;
	return v$1 * v$1 + d$1 * d$1 > x * x + S$2 * S$2 && (U$1 = B, E = N$1), {
		cx: U$1,
		cy: E,
		x01: -h$2,
		y01: -p$2,
		x11: U$1 * (o$1 / O - 1),
		y11: E * (o$1 / O - 1)
	};
}
m(Wn, "cornerTangents");
function ks() {
	var t = Ic, e = Rc, n$1 = /* @__PURE__ */ V(0), i = null, o$1 = Pc, a$1 = Yc, s = Fc, u$1 = null, l = /* @__PURE__ */ qn(f);
	function f() {
		var h$2, p$2, c$1 = +t.apply(this, arguments), m$3 = +e.apply(this, arguments), _ = o$1.apply(this, arguments) - Ze, M = a$1.apply(this, arguments) - Ze, T = /* @__PURE__ */ so$1(M - _), k$1 = M > _;
		if (u$1 || (u$1 = h$2 = /* @__PURE__ */ l()), m$3 < c$1 && (p$2 = m$3, m$3 = c$1, c$1 = p$2), !(m$3 > et$1)) u$1.moveTo(0, 0);
		else if (T > Ne$1 - et$1) u$1.moveTo(m$3 * Bt(_), m$3 * vt$1(_)), u$1.arc(0, 0, m$3, _, M, !k$1), c$1 > et$1 && (u$1.moveTo(c$1 * Bt(M), c$1 * vt$1(M)), u$1.arc(0, 0, c$1, M, _, k$1));
		else {
			var I = _, C = M, A = _, O = M, w = T, Y = T, U$1 = s.apply(this, arguments) / 2, E = U$1 > et$1 && (i ? +i.apply(this, arguments) : oe$1(c$1 * c$1 + m$3 * m$3)), B = /* @__PURE__ */ Bn(so$1(m$3 - c$1) / 2, +n$1.apply(this, arguments)), N$1 = B, v$1 = B, d$1, x;
			if (E > et$1) {
				var S$2 = /* @__PURE__ */ uo$1(E / c$1 * vt$1(U$1)), y = /* @__PURE__ */ uo$1(E / m$3 * vt$1(U$1));
				(w -= S$2 * 2) > et$1 ? (S$2 *= k$1 ? 1 : -1, A += S$2, O -= S$2) : (w = 0, A = O = (_ + M) / 2), (Y -= y * 2) > et$1 ? (y *= k$1 ? 1 : -1, I += y, C -= y) : (Y = 0, I = C = (_ + M) / 2);
			}
			var D = m$3 * Bt(I), $$1 = m$3 * vt$1(I), P$1 = c$1 * Bt(O), z$1 = c$1 * vt$1(O);
			if (B > et$1) {
				var W = m$3 * Bt(C), X = m$3 * vt$1(C), J$1 = c$1 * Bt(A), ht = c$1 * vt$1(A), Q;
				if (T < Ce) if (Q = /* @__PURE__ */ Uc(D, $$1, J$1, ht, W, X, P$1, z$1)) {
					var dt = D - Q[0], st = $$1 - Q[1], Z$1 = W - Q[0], b = X - Q[1], R$1 = 1 / vt$1(bs((dt * Z$1 + st * b) / (oe$1(dt * dt + st * st) * oe$1(Z$1 * Z$1 + b * b))) / 2), F$1 = /* @__PURE__ */ oe$1(Q[0] * Q[0] + Q[1] * Q[1]);
					N$1 = /* @__PURE__ */ Bn(B, (c$1 - F$1) / (R$1 - 1)), v$1 = /* @__PURE__ */ Bn(B, (m$3 - F$1) / (R$1 + 1));
				} else N$1 = v$1 = 0;
			}
			Y > et$1 ? v$1 > et$1 ? (d$1 = /* @__PURE__ */ Wn(J$1, ht, D, $$1, m$3, v$1, k$1), x = /* @__PURE__ */ Wn(W, X, P$1, z$1, m$3, v$1, k$1), u$1.moveTo(d$1.cx + d$1.x01, d$1.cy + d$1.y01), v$1 < B ? u$1.arc(d$1.cx, d$1.cy, v$1, /* @__PURE__ */ rt$1(d$1.y01, d$1.x01), /* @__PURE__ */ rt$1(x.y01, x.x01), !k$1) : (u$1.arc(d$1.cx, d$1.cy, v$1, /* @__PURE__ */ rt$1(d$1.y01, d$1.x01), /* @__PURE__ */ rt$1(d$1.y11, d$1.x11), !k$1), u$1.arc(0, 0, m$3, /* @__PURE__ */ rt$1(d$1.cy + d$1.y11, d$1.cx + d$1.x11), /* @__PURE__ */ rt$1(x.cy + x.y11, x.cx + x.x11), !k$1), u$1.arc(x.cx, x.cy, v$1, /* @__PURE__ */ rt$1(x.y11, x.x11), /* @__PURE__ */ rt$1(x.y01, x.x01), !k$1))) : (u$1.moveTo(D, $$1), u$1.arc(0, 0, m$3, I, C, !k$1)) : u$1.moveTo(D, $$1), !(c$1 > et$1) || !(w > et$1) ? u$1.lineTo(P$1, z$1) : N$1 > et$1 ? (d$1 = /* @__PURE__ */ Wn(P$1, z$1, W, X, c$1, -N$1, k$1), x = /* @__PURE__ */ Wn(D, $$1, J$1, ht, c$1, -N$1, k$1), u$1.lineTo(d$1.cx + d$1.x01, d$1.cy + d$1.y01), N$1 < B ? u$1.arc(d$1.cx, d$1.cy, N$1, /* @__PURE__ */ rt$1(d$1.y01, d$1.x01), /* @__PURE__ */ rt$1(x.y01, x.x01), !k$1) : (u$1.arc(d$1.cx, d$1.cy, N$1, /* @__PURE__ */ rt$1(d$1.y01, d$1.x01), /* @__PURE__ */ rt$1(d$1.y11, d$1.x11), !k$1), u$1.arc(0, 0, c$1, /* @__PURE__ */ rt$1(d$1.cy + d$1.y11, d$1.cx + d$1.x11), /* @__PURE__ */ rt$1(x.cy + x.y11, x.cx + x.x11), k$1), u$1.arc(x.cx, x.cy, N$1, /* @__PURE__ */ rt$1(x.y11, x.x11), /* @__PURE__ */ rt$1(x.y01, x.x01), !k$1))) : u$1.arc(0, 0, c$1, O, A, k$1);
		}
		if (u$1.closePath(), h$2) return u$1 = null, h$2 + "" || null;
	}
	return m(f, "arc"), f.centroid = function() {
		var h$2 = (+t.apply(this, arguments) + +e.apply(this, arguments)) / 2, p$2 = (+o$1.apply(this, arguments) + +a$1.apply(this, arguments)) / 2 - Ce / 2;
		return [Bt(p$2) * h$2, vt$1(p$2) * h$2];
	}, f.innerRadius = function(h$2) {
		return arguments.length ? (t = typeof h$2 == "function" ? h$2 : V(+h$2), f) : t;
	}, f.outerRadius = function(h$2) {
		return arguments.length ? (e = typeof h$2 == "function" ? h$2 : V(+h$2), f) : e;
	}, f.cornerRadius = function(h$2) {
		return arguments.length ? (n$1 = typeof h$2 == "function" ? h$2 : V(+h$2), f) : n$1;
	}, f.padRadius = function(h$2) {
		return arguments.length ? (i = h$2 == null ? null : typeof h$2 == "function" ? h$2 : V(+h$2), f) : i;
	}, f.startAngle = function(h$2) {
		return arguments.length ? (o$1 = typeof h$2 == "function" ? h$2 : V(+h$2), f) : o$1;
	}, f.endAngle = function(h$2) {
		return arguments.length ? (a$1 = typeof h$2 == "function" ? h$2 : V(+h$2), f) : a$1;
	}, f.padAngle = function(h$2) {
		return arguments.length ? (s = typeof h$2 == "function" ? h$2 : V(+h$2), f) : s;
	}, f.context = function(h$2) {
		return arguments.length ? (u$1 = h$2 ?? null, f) : u$1;
	}, f;
}
m(ks, "default");
function Ss(t) {
	this._context = t;
}
m(Ss, "Linear");
Ss.prototype = {
	areaStart: /* @__PURE__ */ m(function() {
		this._line = 0;
	}, "areaStart"),
	areaEnd: /* @__PURE__ */ m(function() {
		this._line = NaN;
	}, "areaEnd"),
	lineStart: /* @__PURE__ */ m(function() {
		this._point = 0;
	}, "lineStart"),
	lineEnd: /* @__PURE__ */ m(function() {
		(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
	}, "lineEnd"),
	point: /* @__PURE__ */ m(function(t, e) {
		switch (t = +t, e = +e, this._point) {
			case 0:
				this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
				break;
			case 1: this._point = 2;
			default:
				this._context.lineTo(t, e);
				break;
		}
	}, "point")
};
function Vn(t) {
	return new Ss(t);
}
m(Vn, "default");
Array.prototype.slice;
function Qe(t) {
	return typeof t == "object" && "length" in t ? t : Array.from(t);
}
m(Qe, "default");
function Cs(t) {
	return t[0];
}
m(Cs, "x");
function Ns(t) {
	return t[1];
}
m(Ns, "y");
function As(t, e) {
	var n$1 = /* @__PURE__ */ V(!0), i = null, o$1 = Vn, a$1 = null, s = /* @__PURE__ */ qn(u$1);
	t = typeof t == "function" ? t : t === void 0 ? Cs : V(t), e = typeof e == "function" ? e : e === void 0 ? Ns : V(e);
	function u$1(l) {
		var f, h$2 = (l = /* @__PURE__ */ Qe(l)).length, p$2, c$1 = !1, m$3;
		for (i ?? (a$1 = /* @__PURE__ */ o$1(m$3 = /* @__PURE__ */ s())), f = 0; f <= h$2; ++f) !(f < h$2 && n$1(p$2 = l[f], f, l)) === c$1 && ((c$1 = !c$1) ? a$1.lineStart() : a$1.lineEnd()), c$1 && a$1.point(+t(p$2, f, l), +e(p$2, f, l));
		if (m$3) return a$1 = null, m$3 + "" || null;
	}
	return m(u$1, "line"), u$1.x = function(l) {
		return arguments.length ? (t = typeof l == "function" ? l : V(+l), u$1) : t;
	}, u$1.y = function(l) {
		return arguments.length ? (e = typeof l == "function" ? l : V(+l), u$1) : e;
	}, u$1.defined = function(l) {
		return arguments.length ? (n$1 = typeof l == "function" ? l : V(!!l), u$1) : n$1;
	}, u$1.curve = function(l) {
		return arguments.length ? (o$1 = l, i != null && (a$1 = /* @__PURE__ */ o$1(i)), u$1) : o$1;
	}, u$1.context = function(l) {
		return arguments.length ? (l == null ? i = a$1 = null : a$1 = /* @__PURE__ */ o$1(i = l), u$1) : i;
	}, u$1;
}
m(As, "default");
function co$1(t, e) {
	return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
m(co$1, "default");
function ho$1(t) {
	return t;
}
m(ho$1, "default");
function Ds() {
	var t = ho$1, e = co$1, n$1 = null, i = /* @__PURE__ */ V(0), o$1 = /* @__PURE__ */ V(Ne$1), a$1 = /* @__PURE__ */ V(0);
	function s(u$1) {
		var l, f = (u$1 = /* @__PURE__ */ Qe(u$1)).length, h$2, p$2, c$1 = 0, m$3 = new Array(f), _ = new Array(f), M = +i.apply(this, arguments), T = /* @__PURE__ */ Math.min(Ne$1, /* @__PURE__ */ Math.max(-Ne$1, o$1.apply(this, arguments) - M)), k$1, I = /* @__PURE__ */ Math.min(Math.abs(T) / f, /* @__PURE__ */ a$1.apply(this, arguments)), C = I * (T < 0 ? -1 : 1), A;
		for (l = 0; l < f; ++l) (A = _[m$3[l] = l] = +t(u$1[l], l, u$1)) > 0 && (c$1 += A);
		for (e != null ? m$3.sort(function(O, w) {
			return e(_[O], _[w]);
		}) : n$1 != null && m$3.sort(function(O, w) {
			return n$1(u$1[O], u$1[w]);
		}), l = 0, p$2 = c$1 ? (T - f * C) / c$1 : 0; l < f; ++l, M = k$1) h$2 = m$3[l], A = _[h$2], k$1 = M + (A > 0 ? A * p$2 : 0) + C, _[h$2] = {
			data: u$1[h$2],
			index: l,
			value: A,
			startAngle: M,
			endAngle: k$1,
			padAngle: I
		};
		return _;
	}
	return m(s, "pie"), s.value = function(u$1) {
		return arguments.length ? (t = typeof u$1 == "function" ? u$1 : V(+u$1), s) : t;
	}, s.sortValues = function(u$1) {
		return arguments.length ? (e = u$1, n$1 = null, s) : e;
	}, s.sort = function(u$1) {
		return arguments.length ? (n$1 = u$1, e = null, s) : n$1;
	}, s.startAngle = function(u$1) {
		return arguments.length ? (i = typeof u$1 == "function" ? u$1 : V(+u$1), s) : i;
	}, s.endAngle = function(u$1) {
		return arguments.length ? (o$1 = typeof u$1 == "function" ? u$1 : V(+u$1), s) : o$1;
	}, s.padAngle = function(u$1) {
		return arguments.length ? (a$1 = typeof u$1 == "function" ? u$1 : V(+u$1), s) : a$1;
	}, s;
}
m(Ds, "default");
var Xn = class {
	static {
		m(this, "Bump");
	}
	constructor(e, n$1) {
		this._context = e, this._x = n$1;
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
	point(e, n$1) {
		switch (e = +e, n$1 = +n$1, this._point) {
			case 0:
				this._point = 1, this._line ? this._context.lineTo(e, n$1) : this._context.moveTo(e, n$1);
				break;
			case 1: this._point = 2;
			default:
				this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + e) / 2, this._y0, this._x0, n$1, e, n$1) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + n$1) / 2, e, this._y0, e, n$1);
				break;
		}
		this._x0 = e, this._y0 = n$1;
	}
};
function Lc(t) {
	return new Xn(t, !0);
}
m(Lc, "bumpX");
function zc(t) {
	return new Xn(t, !1);
}
m(zc, "bumpY");
function Ae$1(t, e, n$1) {
	t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + e) / 6, (t._y0 + 4 * t._y1 + n$1) / 6);
}
m(Ae$1, "point");
function Ke(t) {
	this._context = t;
}
m(Ke, "Basis");
Ke.prototype = {
	areaStart: /* @__PURE__ */ m(function() {
		this._line = 0;
	}, "areaStart"),
	areaEnd: /* @__PURE__ */ m(function() {
		this._line = NaN;
	}, "areaEnd"),
	lineStart: /* @__PURE__ */ m(function() {
		this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
	}, "lineStart"),
	lineEnd: /* @__PURE__ */ m(function() {
		switch (this._point) {
			case 3: Ae$1(this, this._x1, this._y1);
			case 2:
				this._context.lineTo(this._x1, this._y1);
				break;
		}
		(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
	}, "lineEnd"),
	point: /* @__PURE__ */ m(function(t, e) {
		switch (t = +t, e = +e, this._point) {
			case 0:
				this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
				break;
			case 1:
				this._point = 2;
				break;
			case 2: this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
			default:
				Ae$1(this, t, e);
				break;
		}
		this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e;
	}, "point")
};
function $s(t) {
	return new Ke(t);
}
m($s, "default");
function ct() {}
m(ct, "default");
function Os(t) {
	this._context = t;
}
m(Os, "BasisClosed");
Os.prototype = {
	areaStart: ct,
	areaEnd: ct,
	lineStart: /* @__PURE__ */ m(function() {
		this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
	}, "lineStart"),
	lineEnd: /* @__PURE__ */ m(function() {
		switch (this._point) {
			case 1:
				this._context.moveTo(this._x2, this._y2), this._context.closePath();
				break;
			case 2:
				this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
				break;
			case 3:
				this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
				break;
		}
	}, "lineEnd"),
	point: /* @__PURE__ */ m(function(t, e) {
		switch (t = +t, e = +e, this._point) {
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
				Ae$1(this, t, e);
				break;
		}
		this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e;
	}, "point")
};
function Es(t) {
	return new Os(t);
}
m(Es, "default");
function Is(t) {
	this._context = t;
}
m(Is, "BasisOpen");
Is.prototype = {
	areaStart: /* @__PURE__ */ m(function() {
		this._line = 0;
	}, "areaStart"),
	areaEnd: /* @__PURE__ */ m(function() {
		this._line = NaN;
	}, "areaEnd"),
	lineStart: /* @__PURE__ */ m(function() {
		this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
	}, "lineStart"),
	lineEnd: /* @__PURE__ */ m(function() {
		(this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
	}, "lineEnd"),
	point: /* @__PURE__ */ m(function(t, e) {
		switch (t = +t, e = +e, this._point) {
			case 0:
				this._point = 1;
				break;
			case 1:
				this._point = 2;
				break;
			case 2:
				this._point = 3;
				var n$1 = (this._x0 + 4 * this._x1 + t) / 6, i = (this._y0 + 4 * this._y1 + e) / 6;
				this._line ? this._context.lineTo(n$1, i) : this._context.moveTo(n$1, i);
				break;
			case 3: this._point = 4;
			default:
				Ae$1(this, t, e);
				break;
		}
		this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e;
	}, "point")
};
function Rs(t) {
	return new Is(t);
}
m(Rs, "default");
function Ps(t, e) {
	this._basis = new Ke(t), this._beta = e;
}
m(Ps, "Bundle");
Ps.prototype = {
	lineStart: /* @__PURE__ */ m(function() {
		this._x = [], this._y = [], this._basis.lineStart();
	}, "lineStart"),
	lineEnd: /* @__PURE__ */ m(function() {
		var t = this._x, e = this._y, n$1 = t.length - 1;
		if (n$1 > 0) for (var i = t[0], o$1 = e[0], a$1 = t[n$1] - i, s = e[n$1] - o$1, u$1 = -1, l; ++u$1 <= n$1;) l = u$1 / n$1, this._basis.point(this._beta * t[u$1] + (1 - this._beta) * (i + l * a$1), this._beta * e[u$1] + (1 - this._beta) * (o$1 + l * s));
		this._x = this._y = null, this._basis.lineEnd();
	}, "lineEnd"),
	point: /* @__PURE__ */ m(function(t, e) {
		this._x.push(+t), this._y.push(+e);
	}, "point")
};
var Hc = /* @__PURE__ */ m(function t(e) {
	function n$1(i) {
		return e === 1 ? new Ke(i) : new Ps(i, e);
	}
	return m(n$1, "bundle"), n$1.beta = function(i) {
		return t(+i);
	}, n$1;
}, "custom")(.85);
function De$1(t, e, n$1) {
	t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - e), t._y2 + t._k * (t._y1 - n$1), t._x2, t._y2);
}
m(De$1, "point");
function Gn(t, e) {
	this._context = t, this._k = (1 - e) / 6;
}
m(Gn, "Cardinal");
Gn.prototype = {
	areaStart: /* @__PURE__ */ m(function() {
		this._line = 0;
	}, "areaStart"),
	areaEnd: /* @__PURE__ */ m(function() {
		this._line = NaN;
	}, "areaEnd"),
	lineStart: /* @__PURE__ */ m(function() {
		this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
	}, "lineStart"),
	lineEnd: /* @__PURE__ */ m(function() {
		switch (this._point) {
			case 2:
				this._context.lineTo(this._x2, this._y2);
				break;
			case 3:
				De$1(this, this._x1, this._y1);
				break;
		}
		(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
	}, "lineEnd"),
	point: /* @__PURE__ */ m(function(t, e) {
		switch (t = +t, e = +e, this._point) {
			case 0:
				this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
				break;
			case 1:
				this._point = 2, this._x1 = t, this._y1 = e;
				break;
			case 2: this._point = 3;
			default:
				De$1(this, t, e);
				break;
		}
		this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
	}, "point")
};
var Bc = /* @__PURE__ */ m(function t(e) {
	function n$1(i) {
		return new Gn(i, e);
	}
	return m(n$1, "cardinal"), n$1.tension = function(i) {
		return t(+i);
	}, n$1;
}, "custom")(0);
function Zn(t, e) {
	this._context = t, this._k = (1 - e) / 6;
}
m(Zn, "CardinalClosed");
Zn.prototype = {
	areaStart: ct,
	areaEnd: ct,
	lineStart: /* @__PURE__ */ m(function() {
		this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
	}, "lineStart"),
	lineEnd: /* @__PURE__ */ m(function() {
		switch (this._point) {
			case 1:
				this._context.moveTo(this._x3, this._y3), this._context.closePath();
				break;
			case 2:
				this._context.lineTo(this._x3, this._y3), this._context.closePath();
				break;
			case 3:
				this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
				break;
		}
	}, "lineEnd"),
	point: /* @__PURE__ */ m(function(t, e) {
		switch (t = +t, e = +e, this._point) {
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
				De$1(this, t, e);
				break;
		}
		this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
	}, "point")
};
var qc = /* @__PURE__ */ m(function t(e) {
	function n$1(i) {
		return new Zn(i, e);
	}
	return m(n$1, "cardinal"), n$1.tension = function(i) {
		return t(+i);
	}, n$1;
}, "custom")(0);
function Qn(t, e) {
	this._context = t, this._k = (1 - e) / 6;
}
m(Qn, "CardinalOpen");
Qn.prototype = {
	areaStart: /* @__PURE__ */ m(function() {
		this._line = 0;
	}, "areaStart"),
	areaEnd: /* @__PURE__ */ m(function() {
		this._line = NaN;
	}, "areaEnd"),
	lineStart: /* @__PURE__ */ m(function() {
		this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
	}, "lineStart"),
	lineEnd: /* @__PURE__ */ m(function() {
		(this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
	}, "lineEnd"),
	point: /* @__PURE__ */ m(function(t, e) {
		switch (t = +t, e = +e, this._point) {
			case 0:
				this._point = 1;
				break;
			case 1:
				this._point = 2;
				break;
			case 2:
				this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
				break;
			case 3: this._point = 4;
			default:
				De$1(this, t, e);
				break;
		}
		this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
	}, "point")
};
var Wc = /* @__PURE__ */ m(function t(e) {
	function n$1(i) {
		return new Qn(i, e);
	}
	return m(n$1, "cardinal"), n$1.tension = function(i) {
		return t(+i);
	}, n$1;
}, "custom")(0);
function Je(t, e, n$1) {
	var i = t._x1, o$1 = t._y1, a$1 = t._x2, s = t._y2;
	if (t._l01_a > et$1) {
		var u$1 = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a, l = 3 * t._l01_a * (t._l01_a + t._l12_a);
		i = (i * u$1 - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / l, o$1 = (o$1 * u$1 - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / l;
	}
	if (t._l23_a > et$1) {
		var f = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a, h$2 = 3 * t._l23_a * (t._l23_a + t._l12_a);
		a$1 = (a$1 * f + t._x1 * t._l23_2a - e * t._l12_2a) / h$2, s = (s * f + t._y1 * t._l23_2a - n$1 * t._l12_2a) / h$2;
	}
	t._context.bezierCurveTo(i, o$1, a$1, s, t._x2, t._y2);
}
m(Je, "point");
function Ys(t, e) {
	this._context = t, this._alpha = e;
}
m(Ys, "CatmullRom");
Ys.prototype = {
	areaStart: /* @__PURE__ */ m(function() {
		this._line = 0;
	}, "areaStart"),
	areaEnd: /* @__PURE__ */ m(function() {
		this._line = NaN;
	}, "areaEnd"),
	lineStart: /* @__PURE__ */ m(function() {
		this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
	}, "lineStart"),
	lineEnd: /* @__PURE__ */ m(function() {
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
	point: /* @__PURE__ */ m(function(t, e) {
		if (t = +t, e = +e, this._point) {
			var n$1 = this._x2 - t, i = this._y2 - e;
			this._l23_a = /* @__PURE__ */ Math.sqrt(this._l23_2a = /* @__PURE__ */ Math.pow(n$1 * n$1 + i * i, this._alpha));
		}
		switch (this._point) {
			case 0:
				this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
				break;
			case 1:
				this._point = 2;
				break;
			case 2: this._point = 3;
			default:
				Je(this, t, e);
				break;
		}
		this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
	}, "point")
};
var Vc = /* @__PURE__ */ m(function t(e) {
	function n$1(i) {
		return e ? new Ys(i, e) : new Gn(i, 0);
	}
	return m(n$1, "catmullRom"), n$1.alpha = function(i) {
		return t(+i);
	}, n$1;
}, "custom")(.5);
function Fs(t, e) {
	this._context = t, this._alpha = e;
}
m(Fs, "CatmullRomClosed");
Fs.prototype = {
	areaStart: ct,
	areaEnd: ct,
	lineStart: /* @__PURE__ */ m(function() {
		this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
	}, "lineStart"),
	lineEnd: /* @__PURE__ */ m(function() {
		switch (this._point) {
			case 1:
				this._context.moveTo(this._x3, this._y3), this._context.closePath();
				break;
			case 2:
				this._context.lineTo(this._x3, this._y3), this._context.closePath();
				break;
			case 3:
				this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
				break;
		}
	}, "lineEnd"),
	point: /* @__PURE__ */ m(function(t, e) {
		if (t = +t, e = +e, this._point) {
			var n$1 = this._x2 - t, i = this._y2 - e;
			this._l23_a = /* @__PURE__ */ Math.sqrt(this._l23_2a = /* @__PURE__ */ Math.pow(n$1 * n$1 + i * i, this._alpha));
		}
		switch (this._point) {
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
var Xc = /* @__PURE__ */ m(function t(e) {
	function n$1(i) {
		return e ? new Fs(i, e) : new Zn(i, 0);
	}
	return m(n$1, "catmullRom"), n$1.alpha = function(i) {
		return t(+i);
	}, n$1;
}, "custom")(.5);
function Us(t, e) {
	this._context = t, this._alpha = e;
}
m(Us, "CatmullRomOpen");
Us.prototype = {
	areaStart: /* @__PURE__ */ m(function() {
		this._line = 0;
	}, "areaStart"),
	areaEnd: /* @__PURE__ */ m(function() {
		this._line = NaN;
	}, "areaEnd"),
	lineStart: /* @__PURE__ */ m(function() {
		this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
	}, "lineStart"),
	lineEnd: /* @__PURE__ */ m(function() {
		(this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
	}, "lineEnd"),
	point: /* @__PURE__ */ m(function(t, e) {
		if (t = +t, e = +e, this._point) {
			var n$1 = this._x2 - t, i = this._y2 - e;
			this._l23_a = /* @__PURE__ */ Math.sqrt(this._l23_2a = /* @__PURE__ */ Math.pow(n$1 * n$1 + i * i, this._alpha));
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
			case 3: this._point = 4;
			default:
				Je(this, t, e);
				break;
		}
		this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
	}, "point")
};
var Gc = /* @__PURE__ */ m(function t(e) {
	function n$1(i) {
		return e ? new Us(i, e) : new Qn(i, 0);
	}
	return m(n$1, "catmullRom"), n$1.alpha = function(i) {
		return t(+i);
	}, n$1;
}, "custom")(.5);
function Ls(t) {
	this._context = t;
}
m(Ls, "LinearClosed");
Ls.prototype = {
	areaStart: ct,
	areaEnd: ct,
	lineStart: /* @__PURE__ */ m(function() {
		this._point = 0;
	}, "lineStart"),
	lineEnd: /* @__PURE__ */ m(function() {
		this._point && this._context.closePath();
	}, "lineEnd"),
	point: /* @__PURE__ */ m(function(t, e) {
		t = +t, e = +e, this._point ? this._context.lineTo(t, e) : (this._point = 1, this._context.moveTo(t, e));
	}, "point")
};
function zs(t) {
	return new Ls(t);
}
m(zs, "default");
function Hs(t) {
	return t < 0 ? -1 : 1;
}
m(Hs, "sign");
function Bs(t, e, n$1) {
	var i = t._x1 - t._x0, o$1 = e - t._x1, a$1 = (t._y1 - t._y0) / (i || o$1 < 0 && -0), s = (n$1 - t._y1) / (o$1 || i < 0 && -0), u$1 = (a$1 * o$1 + s * i) / (i + o$1);
	return (Hs(a$1) + Hs(s)) * Math.min(/* @__PURE__ */ Math.abs(a$1), /* @__PURE__ */ Math.abs(s), .5 * Math.abs(u$1)) || 0;
}
m(Bs, "slope3");
function qs(t, e) {
	var n$1 = t._x1 - t._x0;
	return n$1 ? (3 * (t._y1 - t._y0) / n$1 - e) / 2 : e;
}
m(qs, "slope2");
function po$1(t, e, n$1) {
	var i = t._x0, o$1 = t._y0, a$1 = t._x1, s = t._y1, u$1 = (a$1 - i) / 3;
	t._context.bezierCurveTo(i + u$1, o$1 + u$1 * e, a$1 - u$1, s - u$1 * n$1, a$1, s);
}
m(po$1, "point");
function Kn(t) {
	this._context = t;
}
m(Kn, "MonotoneX");
Kn.prototype = {
	areaStart: /* @__PURE__ */ m(function() {
		this._line = 0;
	}, "areaStart"),
	areaEnd: /* @__PURE__ */ m(function() {
		this._line = NaN;
	}, "areaEnd"),
	lineStart: /* @__PURE__ */ m(function() {
		this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
	}, "lineStart"),
	lineEnd: /* @__PURE__ */ m(function() {
		switch (this._point) {
			case 2:
				this._context.lineTo(this._x1, this._y1);
				break;
			case 3:
				po$1(this, this._t0, /* @__PURE__ */ qs(this, this._t0));
				break;
		}
		(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
	}, "lineEnd"),
	point: /* @__PURE__ */ m(function(t, e) {
		var n$1 = NaN;
		if (t = +t, e = +e, !(t === this._x1 && e === this._y1)) {
			switch (this._point) {
				case 0:
					this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
					break;
				case 1:
					this._point = 2;
					break;
				case 2:
					this._point = 3, po$1(this, /* @__PURE__ */ qs(this, n$1 = /* @__PURE__ */ Bs(this, t, e)), n$1);
					break;
				default:
					po$1(this, this._t0, n$1 = /* @__PURE__ */ Bs(this, t, e));
					break;
			}
			this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e, this._t0 = n$1;
		}
	}, "point")
};
function Ws(t) {
	this._context = new Vs(t);
}
m(Ws, "MonotoneY");
(Ws.prototype = /* @__PURE__ */ Object.create(Kn.prototype)).point = function(t, e) {
	Kn.prototype.point.call(this, e, t);
};
function Vs(t) {
	this._context = t;
}
m(Vs, "ReflectContext");
Vs.prototype = {
	moveTo: /* @__PURE__ */ m(function(t, e) {
		this._context.moveTo(e, t);
	}, "moveTo"),
	closePath: /* @__PURE__ */ m(function() {
		this._context.closePath();
	}, "closePath"),
	lineTo: /* @__PURE__ */ m(function(t, e) {
		this._context.lineTo(e, t);
	}, "lineTo"),
	bezierCurveTo: /* @__PURE__ */ m(function(t, e, n$1, i, o$1, a$1) {
		this._context.bezierCurveTo(e, t, i, n$1, a$1, o$1);
	}, "bezierCurveTo")
};
function Zc(t) {
	return new Kn(t);
}
m(Zc, "monotoneX");
function Qc(t) {
	return new Ws(t);
}
m(Qc, "monotoneY");
function Gs(t) {
	this._context = t;
}
m(Gs, "Natural");
Gs.prototype = {
	areaStart: /* @__PURE__ */ m(function() {
		this._line = 0;
	}, "areaStart"),
	areaEnd: /* @__PURE__ */ m(function() {
		this._line = NaN;
	}, "areaEnd"),
	lineStart: /* @__PURE__ */ m(function() {
		this._x = [], this._y = [];
	}, "lineStart"),
	lineEnd: /* @__PURE__ */ m(function() {
		var t = this._x, e = this._y, n$1 = t.length;
		if (n$1) if (this._line ? this._context.lineTo(t[0], e[0]) : this._context.moveTo(t[0], e[0]), n$1 === 2) this._context.lineTo(t[1], e[1]);
		else for (var i = /* @__PURE__ */ Xs(t), o$1 = /* @__PURE__ */ Xs(e), a$1 = 0, s = 1; s < n$1; ++a$1, ++s) this._context.bezierCurveTo(i[0][a$1], o$1[0][a$1], i[1][a$1], o$1[1][a$1], t[s], e[s]);
		(this._line || this._line !== 0 && n$1 === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
	}, "lineEnd"),
	point: /* @__PURE__ */ m(function(t, e) {
		this._x.push(+t), this._y.push(+e);
	}, "point")
};
function Xs(t) {
	var e, n$1 = t.length - 1, i, o$1 = new Array(n$1), a$1 = new Array(n$1), s = new Array(n$1);
	for (o$1[0] = 0, a$1[0] = 2, s[0] = t[0] + 2 * t[1], e = 1; e < n$1 - 1; ++e) o$1[e] = 1, a$1[e] = 4, s[e] = 4 * t[e] + 2 * t[e + 1];
	for (o$1[n$1 - 1] = 2, a$1[n$1 - 1] = 7, s[n$1 - 1] = 8 * t[n$1 - 1] + t[n$1], e = 1; e < n$1; ++e) i = o$1[e] / a$1[e - 1], a$1[e] -= i, s[e] -= i * s[e - 1];
	for (o$1[n$1 - 1] = s[n$1 - 1] / a$1[n$1 - 1], e = n$1 - 2; e >= 0; --e) o$1[e] = (s[e] - o$1[e + 1]) / a$1[e];
	for (a$1[n$1 - 1] = (t[n$1] + o$1[n$1 - 1]) / 2, e = 0; e < n$1 - 1; ++e) a$1[e] = 2 * t[e + 1] - o$1[e + 1];
	return [o$1, a$1];
}
m(Xs, "controlPoints");
function Zs(t) {
	return new Gs(t);
}
m(Zs, "default");
function Jn(t, e) {
	this._context = t, this._t = e;
}
m(Jn, "Step");
Jn.prototype = {
	areaStart: /* @__PURE__ */ m(function() {
		this._line = 0;
	}, "areaStart"),
	areaEnd: /* @__PURE__ */ m(function() {
		this._line = NaN;
	}, "areaEnd"),
	lineStart: /* @__PURE__ */ m(function() {
		this._x = this._y = NaN, this._point = 0;
	}, "lineStart"),
	lineEnd: /* @__PURE__ */ m(function() {
		0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
	}, "lineEnd"),
	point: /* @__PURE__ */ m(function(t, e) {
		switch (t = +t, e = +e, this._point) {
			case 0:
				this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
				break;
			case 1: this._point = 2;
			default:
				if (this._t <= 0) this._context.lineTo(this._x, e), this._context.lineTo(t, e);
				else {
					var n$1 = this._x * (1 - this._t) + t * this._t;
					this._context.lineTo(n$1, this._y), this._context.lineTo(n$1, e);
				}
				break;
		}
		this._x = t, this._y = e;
	}, "point")
};
function Qs(t) {
	return new Jn(t, .5);
}
m(Qs, "default");
function Kc(t) {
	return new Jn(t, 0);
}
m(Kc, "stepBefore");
function Jc(t) {
	return new Jn(t, 1);
}
m(Jc, "stepAfter");
var jc = { value: /* @__PURE__ */ m(() => {}, "value") };
function Js() {
	for (var t = 0, e = arguments.length, n$1 = {}, i; t < e; ++t) {
		if (!(i = arguments[t] + "") || i in n$1 || /[\s.]/.test(i)) throw new Error("illegal type: " + i);
		n$1[i] = [];
	}
	return new jn(n$1);
}
m(Js, "dispatch");
function jn(t) {
	this._ = t;
}
m(jn, "Dispatch");
function th(t, e) {
	return t.trim().split(/^|\s+/).map(function(n$1) {
		var i = "", o$1 = /* @__PURE__ */ n$1.indexOf(".");
		if (o$1 >= 0 && (i = /* @__PURE__ */ n$1.slice(o$1 + 1), n$1 = /* @__PURE__ */ n$1.slice(0, o$1)), n$1 && !e.hasOwnProperty(n$1)) throw new Error("unknown type: " + n$1);
		return {
			type: n$1,
			name: i
		};
	});
}
m(th, "parseTypenames");
jn.prototype = Js.prototype = {
	constructor: jn,
	on: /* @__PURE__ */ m(function(t, e) {
		var n$1 = this._, i = /* @__PURE__ */ th(t + "", n$1), o$1, a$1 = -1, s = i.length;
		if (arguments.length < 2) {
			for (; ++a$1 < s;) if ((o$1 = (t = i[a$1]).type) && (o$1 = /* @__PURE__ */ eh(n$1[o$1], t.name))) return o$1;
			return;
		}
		if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
		for (; ++a$1 < s;) if (o$1 = (t = i[a$1]).type) n$1[o$1] = /* @__PURE__ */ Ks(n$1[o$1], t.name, e);
		else if (e == null) for (o$1 in n$1) n$1[o$1] = /* @__PURE__ */ Ks(n$1[o$1], t.name, null);
		return this;
	}, "on"),
	copy: /* @__PURE__ */ m(function() {
		var t = {}, e = this._;
		for (var n$1 in e) t[n$1] = /* @__PURE__ */ e[n$1].slice();
		return new jn(t);
	}, "copy"),
	call: /* @__PURE__ */ m(function(t, e) {
		if ((o$1 = arguments.length - 2) > 0) for (var n$1 = new Array(o$1), i = 0, o$1, a$1; i < o$1; ++i) n$1[i] = arguments[i + 2];
		if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
		for (a$1 = this._[t], i = 0, o$1 = a$1.length; i < o$1; ++i) a$1[i].value.apply(e, n$1);
	}, "call"),
	apply: /* @__PURE__ */ m(function(t, e, n$1) {
		if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
		for (var i = this._[t], o$1 = 0, a$1 = i.length; o$1 < a$1; ++o$1) i[o$1].value.apply(e, n$1);
	}, "apply")
};
function eh(t, e) {
	for (var n$1 = 0, i = t.length, o$1; n$1 < i; ++n$1) if ((o$1 = t[n$1]).name === e) return o$1.value;
}
m(eh, "get");
function Ks(t, e, n$1) {
	for (var i = 0, o$1 = t.length; i < o$1; ++i) if (t[i].name === e) {
		t[i] = jc, t = /* @__PURE__ */ t.slice(0, i).concat(/* @__PURE__ */ t.slice(i + 1));
		break;
	}
	return n$1 != null && t.push({
		name: e,
		value: n$1
	}), t;
}
m(Ks, "set");
var mo$1 = Js;
var $e$1 = 0, tn$1 = 0, je$1 = 0, tu = 1e3, tr$1, en, er$1 = 0, ue = 0, nr$1 = 0, nn$1 = typeof performance == "object" && performance.now ? performance : Date, eu = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
	setTimeout(t, 17);
};
function on() {
	return ue || (eu(nh), ue = nn$1.now() + nr$1);
}
m(on, "now");
function nh() {
	ue = 0;
}
m(nh, "clearNow");
function rn() {
	this._call = this._time = this._next = null;
}
m(rn, "Timer");
rn.prototype = rr$1.prototype = {
	constructor: rn,
	restart: /* @__PURE__ */ m(function(t, e, n$1) {
		if (typeof t != "function") throw new TypeError("callback is not a function");
		n$1 = (n$1 == null ? on() : +n$1) + (e == null ? 0 : +e), !this._next && en !== this && (en ? en._next = this : tr$1 = this, en = this), this._call = t, this._time = n$1, xo$1();
	}, "restart"),
	stop: /* @__PURE__ */ m(function() {
		this._call && (this._call = null, this._time = Infinity, xo$1());
	}, "stop")
};
function rr$1(t, e, n$1) {
	var i = new rn();
	return i.restart(t, e, n$1), i;
}
m(rr$1, "timer");
function nu() {
	on(), ++$e$1;
	for (var t = tr$1, e; t;) (e = ue - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
	--$e$1;
}
m(nu, "timerFlush");
function js() {
	ue = (er$1 = /* @__PURE__ */ nn$1.now()) + nr$1, $e$1 = tn$1 = 0;
	try {
		nu();
	} finally {
		$e$1 = 0, ih(), ue = 0;
	}
}
m(js, "wake");
function rh() {
	var t = /* @__PURE__ */ nn$1.now(), e = t - er$1;
	e > tu && (nr$1 -= e, er$1 = t);
}
m(rh, "poke");
function ih() {
	for (var t, e = tr$1, n$1, i = Infinity; e;) e._call ? (i > e._time && (i = e._time), t = e, e = e._next) : (n$1 = e._next, e._next = null, e = t ? t._next = n$1 : tr$1 = n$1);
	en = t, xo$1(i);
}
m(ih, "nap");
function xo$1(t) {
	if (!$e$1) {
		tn$1 && (tn$1 = /* @__PURE__ */ clearTimeout(tn$1));
		t - ue > 24 ? (t < Infinity && (tn$1 = /* @__PURE__ */ setTimeout(js, t - nn$1.now() - nr$1)), je$1 && (je$1 = /* @__PURE__ */ clearInterval(je$1))) : (je$1 || (er$1 = /* @__PURE__ */ nn$1.now(), je$1 = /* @__PURE__ */ setInterval(rh, tu)), $e$1 = 1, eu(js));
	}
}
m(xo$1, "sleep");
function an(t, e, n$1) {
	var i = new rn();
	return e = e == null ? 0 : +e, i.restart((o$1) => {
		i.stop(), t(o$1 + e);
	}, e, n$1), i;
}
m(an, "default");
var oh = /* @__PURE__ */ mo$1("start", "end", "cancel", "interrupt"), ah = [], ou = 0, ru = 1, or$1 = 2, ir$1 = 3, iu = 4, ar$1 = 5, sn = 6;
function Ot$1(t, e, n$1, i, o$1, a$1) {
	var s = t.__transition;
	if (!s) t.__transition = {};
	else if (n$1 in s) return;
	sh(t, n$1, {
		name: e,
		index: i,
		group: o$1,
		on: oh,
		tween: ah,
		time: a$1.time,
		delay: a$1.delay,
		duration: a$1.duration,
		ease: a$1.ease,
		timer: null,
		state: ou
	});
}
m(Ot$1, "default");
function un(t, e) {
	var n$1 = /* @__PURE__ */ K$1(t, e);
	if (n$1.state > ou) throw new Error("too late; already scheduled");
	return n$1;
}
m(un, "init");
function it$1(t, e) {
	var n$1 = /* @__PURE__ */ K$1(t, e);
	if (n$1.state > ir$1) throw new Error("too late; already running");
	return n$1;
}
m(it$1, "set");
function K$1(t, e) {
	var n$1 = t.__transition;
	if (!n$1 || !(n$1 = n$1[e])) throw new Error("transition not found");
	return n$1;
}
m(K$1, "get");
function sh(t, e, n$1) {
	var i = t.__transition, o$1;
	i[e] = n$1, n$1.timer = /* @__PURE__ */ rr$1(a$1, 0, n$1.time);
	function a$1(f) {
		n$1.state = ru, n$1.timer.restart(s, n$1.delay, n$1.time), n$1.delay <= f && s(f - n$1.delay);
	}
	m(a$1, "schedule");
	function s(f) {
		var h$2, p$2, c$1, m$3;
		if (n$1.state !== ru) return l();
		for (h$2 in i) if (m$3 = i[h$2], m$3.name === n$1.name) {
			if (m$3.state === ir$1) return an(s);
			m$3.state === iu ? (m$3.state = sn, m$3.timer.stop(), m$3.on.call("interrupt", t, t.__data__, m$3.index, m$3.group), delete i[h$2]) : +h$2 < e && (m$3.state = sn, m$3.timer.stop(), m$3.on.call("cancel", t, t.__data__, m$3.index, m$3.group), delete i[h$2]);
		}
		if (an(function() {
			n$1.state === ir$1 && (n$1.state = iu, n$1.timer.restart(u$1, n$1.delay, n$1.time), u$1(f));
		}), n$1.state = or$1, n$1.on.call("start", t, t.__data__, n$1.index, n$1.group), n$1.state === or$1) {
			for (n$1.state = ir$1, o$1 = new Array(c$1 = n$1.tween.length), h$2 = 0, p$2 = -1; h$2 < c$1; ++h$2) (m$3 = /* @__PURE__ */ n$1.tween[h$2].value.call(t, t.__data__, n$1.index, n$1.group)) && (o$1[++p$2] = m$3);
			o$1.length = p$2 + 1;
		}
	}
	m(s, "start");
	function u$1(f) {
		for (var h$2 = f < n$1.duration ? n$1.ease.call(null, f / n$1.duration) : (n$1.timer.restart(l), n$1.state = ar$1, 1), p$2 = -1, c$1 = o$1.length; ++p$2 < c$1;) o$1[p$2].call(t, h$2);
		n$1.state === ar$1 && (n$1.on.call("end", t, t.__data__, n$1.index, n$1.group), l());
	}
	m(u$1, "tick");
	function l() {
		n$1.state = sn, n$1.timer.stop(), delete i[e];
		for (var f in i) return;
		delete t.__transition;
	}
	m(l, "stop");
}
m(sh, "create");
function fn(t, e) {
	var n$1 = t.__transition, i, o$1, a$1 = !0, s;
	if (n$1) {
		e = e == null ? null : e + "";
		for (s in n$1) {
			if ((i = n$1[s]).name !== e) {
				a$1 = !1;
				continue;
			}
			o$1 = i.state > or$1 && i.state < ar$1, i.state = sn, i.timer.stop(), i.on.call(o$1 ? "interrupt" : "cancel", t, t.__data__, i.index, i.group), delete n$1[s];
		}
		a$1 && delete t.__transition;
	}
}
m(fn, "default");
function _o$1(t) {
	return this.each(function() {
		fn(this, t);
	});
}
m(_o$1, "default");
function uh(t, e) {
	var n$1, i;
	return function() {
		var o$1 = /* @__PURE__ */ it$1(this, t), a$1 = o$1.tween;
		if (a$1 !== n$1) {
			i = n$1 = a$1;
			for (var s = 0, u$1 = i.length; s < u$1; ++s) if (i[s].name === e) {
				i = /* @__PURE__ */ i.slice(), i.splice(s, 1);
				break;
			}
		}
		o$1.tween = i;
	};
}
m(uh, "tweenRemove");
function fh(t, e, n$1) {
	var i, o$1;
	if (typeof n$1 != "function") throw new Error();
	return function() {
		var a$1 = /* @__PURE__ */ it$1(this, t), s = a$1.tween;
		if (s !== i) {
			o$1 = /* @__PURE__ */ (i = s).slice();
			for (var u$1 = {
				name: e,
				value: n$1
			}, l = 0, f = o$1.length; l < f; ++l) if (o$1[l].name === e) {
				o$1[l] = u$1;
				break;
			}
			l === f && o$1.push(u$1);
		}
		a$1.tween = o$1;
	};
}
m(fh, "tweenFunction");
function go$1(t, e) {
	var n$1 = this._id;
	if (t += "", arguments.length < 2) {
		for (var i = K$1(/* @__PURE__ */ this.node(), n$1).tween, o$1 = 0, a$1 = i.length, s; o$1 < a$1; ++o$1) if ((s = i[o$1]).name === t) return s.value;
		return null;
	}
	return this.each(/* @__PURE__ */ (e == null ? uh : fh)(n$1, t, e));
}
m(go$1, "default");
function Oe$1(t, e, n$1) {
	var i = t._id;
	return t.each(function() {
		var o$1 = /* @__PURE__ */ it$1(this, i);
		(o$1.value || (o$1.value = {}))[e] = /* @__PURE__ */ n$1.apply(this, arguments);
	}), function(o$1) {
		return K$1(o$1, i).value[e];
	};
}
m(Oe$1, "tweenValue");
function ln$1(t, e) {
	var n$1;
	return (typeof e == "number" ? j : e instanceof _t$1 ? Qt$1 : (n$1 = /* @__PURE__ */ _t$1(e)) ? (e = n$1, Qt$1) : ge)(t, e);
}
m(ln$1, "default");
function lh(t) {
	return function() {
		this.removeAttribute(t);
	};
}
m(lh, "attrRemove");
function ch(t) {
	return function() {
		this.removeAttributeNS(t.space, t.local);
	};
}
m(ch, "attrRemoveNS");
function hh(t, e, n$1) {
	var i, o$1 = n$1 + "", a$1;
	return function() {
		var s = /* @__PURE__ */ this.getAttribute(t);
		return s === o$1 ? null : s === i ? a$1 : a$1 = /* @__PURE__ */ e(i = s, n$1);
	};
}
m(hh, "attrConstant");
function ph(t, e, n$1) {
	var i, o$1 = n$1 + "", a$1;
	return function() {
		var s = /* @__PURE__ */ this.getAttributeNS(t.space, t.local);
		return s === o$1 ? null : s === i ? a$1 : a$1 = /* @__PURE__ */ e(i = s, n$1);
	};
}
m(ph, "attrConstantNS");
function mh(t, e, n$1) {
	var i, o$1, a$1;
	return function() {
		var s, u$1 = /* @__PURE__ */ n$1(this), l;
		return u$1 == null ? void this.removeAttribute(t) : (s = /* @__PURE__ */ this.getAttribute(t), l = u$1 + "", s === l ? null : s === i && l === o$1 ? a$1 : (o$1 = l, a$1 = /* @__PURE__ */ e(i = s, u$1)));
	};
}
m(mh, "attrFunction");
function dh(t, e, n$1) {
	var i, o$1, a$1;
	return function() {
		var s, u$1 = /* @__PURE__ */ n$1(this), l;
		return u$1 == null ? void this.removeAttributeNS(t.space, t.local) : (s = /* @__PURE__ */ this.getAttributeNS(t.space, t.local), l = u$1 + "", s === l ? null : s === i && l === o$1 ? a$1 : (o$1 = l, a$1 = /* @__PURE__ */ e(i = s, u$1)));
	};
}
m(dh, "attrFunctionNS");
function yo$1(t, e) {
	var n$1 = /* @__PURE__ */ wt$1(t), i = n$1 === "transform" ? gi : ln$1;
	return this.attrTween(t, typeof e == "function" ? (n$1.local ? dh : mh)(n$1, i, /* @__PURE__ */ Oe$1(this, "attr." + t, e)) : e == null ? (n$1.local ? ch : lh)(n$1) : (n$1.local ? ph : hh)(n$1, i, e));
}
m(yo$1, "default");
function xh(t, e) {
	return function(n$1) {
		this.setAttribute(t, /* @__PURE__ */ e.call(this, n$1));
	};
}
m(xh, "attrInterpolate");
function _h(t, e) {
	return function(n$1) {
		this.setAttributeNS(t.space, t.local, /* @__PURE__ */ e.call(this, n$1));
	};
}
m(_h, "attrInterpolateNS");
function gh(t, e) {
	var n$1, i;
	function o$1() {
		var a$1 = /* @__PURE__ */ e.apply(this, arguments);
		return a$1 !== i && (n$1 = (i = a$1) && _h(t, a$1)), n$1;
	}
	return m(o$1, "tween"), o$1._value = e, o$1;
}
m(gh, "attrTweenNS");
function yh(t, e) {
	var n$1, i;
	function o$1() {
		var a$1 = /* @__PURE__ */ e.apply(this, arguments);
		return a$1 !== i && (n$1 = (i = a$1) && xh(t, a$1)), n$1;
	}
	return m(o$1, "tween"), o$1._value = e, o$1;
}
m(yh, "attrTween");
function vo$1(t, e) {
	var n$1 = "attr." + t;
	if (arguments.length < 2) return (n$1 = /* @__PURE__ */ this.tween(n$1)) && n$1._value;
	if (e == null) return this.tween(n$1, null);
	if (typeof e != "function") throw new Error();
	var i = /* @__PURE__ */ wt$1(t);
	return this.tween(n$1, /* @__PURE__ */ (i.local ? gh : yh)(i, e));
}
m(vo$1, "default");
function vh(t, e) {
	return function() {
		un(this, t).delay = +e.apply(this, arguments);
	};
}
m(vh, "delayFunction");
function wh(t, e) {
	return e = +e, function() {
		un(this, t).delay = e;
	};
}
m(wh, "delayConstant");
function wo$1(t) {
	var e = this._id;
	return arguments.length ? this.each(/* @__PURE__ */ (typeof t == "function" ? vh : wh)(e, t)) : K$1(/* @__PURE__ */ this.node(), e).delay;
}
m(wo$1, "default");
function bh(t, e) {
	return function() {
		it$1(this, t).duration = +e.apply(this, arguments);
	};
}
m(bh, "durationFunction");
function Mh(t, e) {
	return e = +e, function() {
		it$1(this, t).duration = e;
	};
}
m(Mh, "durationConstant");
function bo$1(t) {
	var e = this._id;
	return arguments.length ? this.each(/* @__PURE__ */ (typeof t == "function" ? bh : Mh)(e, t)) : K$1(/* @__PURE__ */ this.node(), e).duration;
}
m(bo$1, "default");
function Th(t, e) {
	if (typeof e != "function") throw new Error();
	return function() {
		it$1(this, t).ease = e;
	};
}
m(Th, "easeConstant");
function Mo$1(t) {
	var e = this._id;
	return arguments.length ? this.each(/* @__PURE__ */ Th(e, t)) : K$1(/* @__PURE__ */ this.node(), e).ease;
}
m(Mo$1, "default");
function kh(t, e) {
	return function() {
		var n$1 = /* @__PURE__ */ e.apply(this, arguments);
		if (typeof n$1 != "function") throw new Error();
		it$1(this, t).ease = n$1;
	};
}
m(kh, "easeVarying");
function To$1(t) {
	if (typeof t != "function") throw new Error();
	return this.each(/* @__PURE__ */ kh(this._id, t));
}
m(To$1, "default");
function ko$1(t) {
	typeof t != "function" && (t = /* @__PURE__ */ he(t));
	for (var e = this._groups, n$1 = e.length, i = new Array(n$1), o$1 = 0; o$1 < n$1; ++o$1) for (var a$1 = e[o$1], s = a$1.length, u$1 = i[o$1] = [], l, f = 0; f < s; ++f) (l = a$1[f]) && t.call(l, l.__data__, f, a$1) && u$1.push(l);
	return new ot$1(i, this._parents, this._name, this._id);
}
m(ko$1, "default");
function So$1(t) {
	if (t._id !== this._id) throw new Error();
	for (var e = this._groups, n$1 = t._groups, i = e.length, o$1 = n$1.length, a$1 = /* @__PURE__ */ Math.min(i, o$1), s = new Array(i), u$1 = 0; u$1 < a$1; ++u$1) for (var l = e[u$1], f = n$1[u$1], h$2 = l.length, p$2 = s[u$1] = new Array(h$2), c$1, m$3 = 0; m$3 < h$2; ++m$3) (c$1 = l[m$3] || f[m$3]) && (p$2[m$3] = c$1);
	for (; u$1 < i; ++u$1) s[u$1] = e[u$1];
	return new ot$1(s, this._parents, this._name, this._id);
}
m(So$1, "default");
function Sh(t) {
	return (t + "").trim().split(/^|\s+/).every(function(e) {
		var n$1 = /* @__PURE__ */ e.indexOf(".");
		return n$1 >= 0 && (e = /* @__PURE__ */ e.slice(0, n$1)), !e || e === "start";
	});
}
m(Sh, "start");
function Ch(t, e, n$1) {
	var i, o$1, a$1 = Sh(e) ? un : it$1;
	return function() {
		var s = /* @__PURE__ */ a$1(this, t), u$1 = s.on;
		u$1 !== i && (o$1 = /* @__PURE__ */ (i = u$1).copy()).on(e, n$1), s.on = o$1;
	};
}
m(Ch, "onFunction");
function Co$1(t, e) {
	var n$1 = this._id;
	return arguments.length < 2 ? K$1(/* @__PURE__ */ this.node(), n$1).on.on(t) : this.each(/* @__PURE__ */ Ch(n$1, t, e));
}
m(Co$1, "default");
function Nh(t) {
	return function() {
		var e = this.parentNode;
		for (var n$1 in this.__transition) if (+n$1 !== t) return;
		e && e.removeChild(this);
	};
}
m(Nh, "removeFunction");
function No$1() {
	return this.on("end.remove", /* @__PURE__ */ Nh(this._id));
}
m(No$1, "default");
function Ao$1(t) {
	var e = this._name, n$1 = this._id;
	typeof t != "function" && (t = /* @__PURE__ */ It$1(t));
	for (var i = this._groups, o$1 = i.length, a$1 = new Array(o$1), s = 0; s < o$1; ++s) for (var u$1 = i[s], l = u$1.length, f = a$1[s] = new Array(l), h$2, p$2, c$1 = 0; c$1 < l; ++c$1) (h$2 = u$1[c$1]) && (p$2 = /* @__PURE__ */ t.call(h$2, h$2.__data__, c$1, u$1)) && ("__data__" in h$2 && (p$2.__data__ = h$2.__data__), f[c$1] = p$2, Ot$1(f[c$1], e, n$1, c$1, f, /* @__PURE__ */ K$1(h$2, n$1)));
	return new ot$1(a$1, this._parents, e, n$1);
}
m(Ao$1, "default");
function Do$1(t) {
	var e = this._name, n$1 = this._id;
	typeof t != "function" && (t = /* @__PURE__ */ ce(t));
	for (var i = this._groups, o$1 = i.length, a$1 = [], s = [], u$1 = 0; u$1 < o$1; ++u$1) for (var l = i[u$1], f = l.length, h$2, p$2 = 0; p$2 < f; ++p$2) if (h$2 = l[p$2]) {
		for (var c$1 = /* @__PURE__ */ t.call(h$2, h$2.__data__, p$2, l), m$3, _ = /* @__PURE__ */ K$1(h$2, n$1), M = 0, T = c$1.length; M < T; ++M) (m$3 = c$1[M]) && Ot$1(m$3, e, n$1, M, c$1, _);
		a$1.push(c$1), s.push(h$2);
	}
	return new ot$1(a$1, s, e, n$1);
}
m(Do$1, "default");
var Ah = Ct.prototype.constructor;
function $o$1() {
	return new Ah(this._groups, this._parents);
}
m($o$1, "default");
function Dh(t, e) {
	var n$1, i, o$1;
	return function() {
		var a$1 = /* @__PURE__ */ Rt(this, t), s = (this.style.removeProperty(t), Rt(this, t));
		return a$1 === s ? null : a$1 === n$1 && s === i ? o$1 : o$1 = /* @__PURE__ */ e(n$1 = a$1, i = s);
	};
}
m(Dh, "styleNull");
function au(t) {
	return function() {
		this.style.removeProperty(t);
	};
}
m(au, "styleRemove");
function $h(t, e, n$1) {
	var i, o$1 = n$1 + "", a$1;
	return function() {
		var s = /* @__PURE__ */ Rt(this, t);
		return s === o$1 ? null : s === i ? a$1 : a$1 = /* @__PURE__ */ e(i = s, n$1);
	};
}
m($h, "styleConstant");
function Oh(t, e, n$1) {
	var i, o$1, a$1;
	return function() {
		var s = /* @__PURE__ */ Rt(this, t), u$1 = /* @__PURE__ */ n$1(this), l = u$1 + "";
		return u$1 ?? (l = u$1 = (this.style.removeProperty(t), Rt(this, t))), s === l ? null : s === i && l === o$1 ? a$1 : (o$1 = l, a$1 = /* @__PURE__ */ e(i = s, u$1));
	};
}
m(Oh, "styleFunction");
function Eh(t, e) {
	var n$1, i, o$1, a$1 = "style." + e, s = "end." + a$1, u$1;
	return function() {
		var l = /* @__PURE__ */ it$1(this, t), f = l.on, h$2 = l.value[a$1] == null ? u$1 || (u$1 = /* @__PURE__ */ au(e)) : void 0;
		(f !== n$1 || o$1 !== h$2) && (i = /* @__PURE__ */ (n$1 = f).copy()).on(s, o$1 = h$2), l.on = i;
	};
}
m(Eh, "styleMaybeRemove");
function Oo$1(t, e, n$1) {
	var i = (t += "") == "transform" ? _i : ln$1;
	return e == null ? this.styleTween(t, /* @__PURE__ */ Dh(t, i)).on("end.style." + t, /* @__PURE__ */ au(t)) : typeof e == "function" ? this.styleTween(t, /* @__PURE__ */ Oh(t, i, /* @__PURE__ */ Oe$1(this, "style." + t, e))).each(/* @__PURE__ */ Eh(this._id, t)) : this.styleTween(t, /* @__PURE__ */ $h(t, i, e), n$1).on("end.style." + t, null);
}
m(Oo$1, "default");
function Ih(t, e, n$1) {
	return function(i) {
		this.style.setProperty(t, /* @__PURE__ */ e.call(this, i), n$1);
	};
}
m(Ih, "styleInterpolate");
function Rh(t, e, n$1) {
	var i, o$1;
	function a$1() {
		var s = /* @__PURE__ */ e.apply(this, arguments);
		return s !== o$1 && (i = (o$1 = s) && Ih(t, s, n$1)), i;
	}
	return m(a$1, "tween"), a$1._value = e, a$1;
}
m(Rh, "styleTween");
function Eo$1(t, e, n$1) {
	var i = "style." + (t += "");
	if (arguments.length < 2) return (i = /* @__PURE__ */ this.tween(i)) && i._value;
	if (e == null) return this.tween(i, null);
	if (typeof e != "function") throw new Error();
	return this.tween(i, /* @__PURE__ */ Rh(t, e, n$1 ?? ""));
}
m(Eo$1, "default");
function Ph(t) {
	return function() {
		this.textContent = t;
	};
}
m(Ph, "textConstant");
function Yh(t) {
	return function() {
		this.textContent = t(this) ?? "";
	};
}
m(Yh, "textFunction");
function Io$1(t) {
	return this.tween("text", typeof t == "function" ? Yh(/* @__PURE__ */ Oe$1(this, "text", t)) : Ph(t == null ? "" : t + ""));
}
m(Io$1, "default");
function Fh(t) {
	return function(e) {
		this.textContent = /* @__PURE__ */ t.call(this, e);
	};
}
m(Fh, "textInterpolate");
function Uh(t) {
	var e, n$1;
	function i() {
		var o$1 = /* @__PURE__ */ t.apply(this, arguments);
		return o$1 !== n$1 && (e = (n$1 = o$1) && Fh(o$1)), e;
	}
	return m(i, "tween"), i._value = t, i;
}
m(Uh, "textTween");
function Ro$1(t) {
	var e = "text";
	if (arguments.length < 1) return (e = /* @__PURE__ */ this.tween(e)) && e._value;
	if (t == null) return this.tween(e, null);
	if (typeof t != "function") throw new Error();
	return this.tween(e, /* @__PURE__ */ Uh(t));
}
m(Ro$1, "default");
function Po$1() {
	for (var t = this._name, e = this._id, n$1 = /* @__PURE__ */ sr$1(), i = this._groups, o$1 = i.length, a$1 = 0; a$1 < o$1; ++a$1) for (var s = i[a$1], u$1 = s.length, l, f = 0; f < u$1; ++f) if (l = s[f]) {
		var h$2 = /* @__PURE__ */ K$1(l, e);
		Ot$1(l, t, n$1, f, s, {
			time: h$2.time + h$2.delay + h$2.duration,
			delay: 0,
			duration: h$2.duration,
			ease: h$2.ease
		});
	}
	return new ot$1(i, this._parents, t, n$1);
}
m(Po$1, "default");
function Yo$1() {
	var t, e, n$1 = this, i = n$1._id, o$1 = /* @__PURE__ */ n$1.size();
	return new Promise(function(a$1, s) {
		var u$1 = { value: s }, l = { value: /* @__PURE__ */ m(function() {
			--o$1 === 0 && a$1();
		}, "value") };
		n$1.each(function() {
			var f = /* @__PURE__ */ it$1(this, i), h$2 = f.on;
			h$2 !== t && (e = /* @__PURE__ */ (t = h$2).copy(), e._.cancel.push(u$1), e._.interrupt.push(u$1), e._.end.push(l)), f.on = e;
		}), o$1 === 0 && a$1();
	});
}
m(Yo$1, "default");
var Lh = 0;
function ot$1(t, e, n$1, i) {
	this._groups = t, this._parents = e, this._name = n$1, this._id = i;
}
m(ot$1, "Transition");
function su(t) {
	return Ct().transition(t);
}
m(su, "transition");
function sr$1() {
	return ++Lh;
}
m(sr$1, "newId");
var Et$1 = Ct.prototype;
ot$1.prototype = su.prototype = {
	constructor: ot$1,
	select: Ao$1,
	selectAll: Do$1,
	selectChild: Et$1.selectChild,
	selectChildren: Et$1.selectChildren,
	filter: ko$1,
	merge: So$1,
	selection: $o$1,
	transition: Po$1,
	call: Et$1.call,
	nodes: Et$1.nodes,
	node: Et$1.node,
	size: Et$1.size,
	empty: Et$1.empty,
	each: Et$1.each,
	on: Co$1,
	attr: yo$1,
	attrTween: vo$1,
	style: Oo$1,
	styleTween: Eo$1,
	text: Io$1,
	textTween: Ro$1,
	remove: No$1,
	tween: go$1,
	delay: wo$1,
	duration: bo$1,
	ease: Mo$1,
	easeVarying: To$1,
	end: Yo$1,
	[Symbol.iterator]: Et$1[Symbol.iterator]
};
function ur$1(t) {
	return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
m(ur$1, "cubicInOut");
var zh = {
	time: null,
	delay: 0,
	duration: 250,
	ease: ur$1
};
function Hh(t, e) {
	for (var n$1; !(n$1 = t.__transition) || !(n$1 = n$1[e]);) if (!(t = t.parentNode)) throw new Error(`transition ${e} not found`);
	return n$1;
}
m(Hh, "inherit");
function Fo$1(t) {
	var e, n$1;
	t instanceof ot$1 ? (e = t._id, t = t._name) : (e = /* @__PURE__ */ sr$1(), (n$1 = zh).time = /* @__PURE__ */ on(), t = t == null ? null : t + "");
	for (var i = this._groups, o$1 = i.length, a$1 = 0; a$1 < o$1; ++a$1) for (var s = i[a$1], u$1 = s.length, l, f = 0; f < u$1; ++f) (l = s[f]) && Ot$1(l, t, e, f, s, n$1 || Hh(l, e));
	return new ot$1(i, this._parents, t, e);
}
m(Fo$1, "default");
Ct.prototype.interrupt = _o$1;
Ct.prototype.transition = Fo$1;
var { abs: jM, max: tT, min: eT } = Math;
function uu(t) {
	return [+t[0], +t[1]];
}
m(uu, "number1");
function Bh(t) {
	return [/* @__PURE__ */ uu(t[0]), /* @__PURE__ */ uu(t[1])];
}
m(Bh, "number2");
["w", "e"].map(Uo$1), m(function(t, e) {
	return t == null ? null : [[+t[0], e[0][1]], [+t[1], e[1][1]]];
}, "input"), m(function(t) {
	return t && [t[0][0], t[1][0]];
}, "output");
["n", "s"].map(Uo$1), m(function(t, e) {
	return t == null ? null : [[e[0][0], +t[0]], [e[1][0], +t[1]]];
}, "input"), m(function(t) {
	return t && [t[0][1], t[1][1]];
}, "output");
[
	"n",
	"w",
	"e",
	"s",
	"nw",
	"ne",
	"sw",
	"se"
].map(Uo$1), m(function(t) {
	return t == null ? null : Bh(t);
}, "input"), m(function(t) {
	return t;
}, "output");
function Uo$1(t) {
	return { type: t };
}
m(Uo$1, "type");
function qt$1(t, e, n$1) {
	this.k = t, this.x = e, this.y = n$1;
}
m(qt$1, "Transform");
qt$1.prototype = {
	constructor: qt$1,
	scale: /* @__PURE__ */ m(function(t) {
		return t === 1 ? this : new qt$1(this.k * t, this.x, this.y);
	}, "scale"),
	translate: /* @__PURE__ */ m(function(t, e) {
		return t === 0 & e === 0 ? this : new qt$1(this.k, this.x + this.k * t, this.y + this.k * e);
	}, "translate"),
	apply: /* @__PURE__ */ m(function(t) {
		return [t[0] * this.k + this.x, t[1] * this.k + this.y];
	}, "apply"),
	applyX: /* @__PURE__ */ m(function(t) {
		return t * this.k + this.x;
	}, "applyX"),
	applyY: /* @__PURE__ */ m(function(t) {
		return t * this.k + this.y;
	}, "applyY"),
	invert: /* @__PURE__ */ m(function(t) {
		return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
	}, "invert"),
	invertX: /* @__PURE__ */ m(function(t) {
		return (t - this.x) / this.k;
	}, "invertX"),
	invertY: /* @__PURE__ */ m(function(t) {
		return (t - this.y) / this.k;
	}, "invertY"),
	rescaleX: /* @__PURE__ */ m(function(t) {
		return t.copy().domain(/* @__PURE__ */ t.range().map(this.invertX, this).map(t.invert, t));
	}, "rescaleX"),
	rescaleY: /* @__PURE__ */ m(function(t) {
		return t.copy().domain(/* @__PURE__ */ t.range().map(this.invertY, this).map(t.invert, t));
	}, "rescaleY"),
	toString: /* @__PURE__ */ m(function() {
		return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
	}, "toString")
};
var Lo$1 = new qt$1(1, 0, 0);
zo$1.prototype = qt$1.prototype;
function zo$1(t) {
	for (; !t.__zoom;) if (!(t = t.parentNode)) return Lo$1;
	return t.__zoom;
}
m(zo$1, "transform");
var bi = /^-{3}\s*[\n\r](.*?)[\n\r]-{3}\s*[\n\r]+/s, Ti = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, ki = /\s*%%.*\n/gm;
var $t = class extends Error {
	static {
		m(this, "UnknownDiagramError");
	}
	constructor(t) {
		super(t), this.name = "UnknownDiagramError";
	}
};
var jt = {}, os = /* @__PURE__ */ m(function(e, t) {
	e = /* @__PURE__ */ e.replace(bi, "").replace(Ti, "").replace(ki, `
`);
	for (let [i, { detector: s }] of Object.entries(jt)) if (s(e, t)) return i;
	throw new $t(`No diagram type detected matching given configuration for text: ${e}`);
}, "detectType"), ss = /* @__PURE__ */ m((...e) => {
	for (let { id: t, detector: i, loader: s } of e) Se(t, i, s);
}, "registerLazyLoadedDiagrams"), Se = /* @__PURE__ */ m((e, t, i) => {
	jt[e] && pt.warn(`Detector with key ${e} already exists. Overwriting.`), jt[e] = {
		detector: t,
		loader: i
	}, pt.debug(`Detector with key ${e} added${i ? " with loader" : ""}`);
}, "addDetector"), as = /* @__PURE__ */ m((e) => jt[e].loader, "getDiagramLoader");
var Fe = m((e, t, { depth: i = 2, clobber: s = !1 } = {}) => {
	let l = {
		depth: i,
		clobber: s
	};
	return Array.isArray(t) && !Array.isArray(e) ? (t.forEach((d$1) => Fe(e, d$1, l)), e) : Array.isArray(t) && Array.isArray(e) ? (t.forEach((d$1) => {
		e.includes(d$1) || e.push(d$1);
	}), e) : e === void 0 || i <= 0 ? e != null && typeof e == "object" && typeof t == "object" ? Object.assign(e, t) : t : (t !== void 0 && typeof e == "object" && typeof t == "object" && Object.keys(t).forEach((d$1) => {
		typeof t[d$1] == "object" && (e[d$1] === void 0 || typeof e[d$1] == "object") ? (e[d$1] === void 0 && (e[d$1] = Array.isArray(t[d$1]) ? [] : {}), e[d$1] = /* @__PURE__ */ Fe(e[d$1], t[d$1], {
			depth: i - 1,
			clobber: s
		})) : (s || typeof e[d$1] != "object" && typeof t[d$1] != "object") && (e[d$1] = t[d$1]);
	}), e);
}, "assignWithDepth"), v = Fe;
var Vt = {
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
		r: /* @__PURE__ */ m((e) => e >= 255 ? 255 : e < 0 ? 0 : e, "r"),
		g: /* @__PURE__ */ m((e) => e >= 255 ? 255 : e < 0 ? 0 : e, "g"),
		b: /* @__PURE__ */ m((e) => e >= 255 ? 255 : e < 0 ? 0 : e, "b"),
		h: /* @__PURE__ */ m((e) => e % 360, "h"),
		s: /* @__PURE__ */ m((e) => e >= 100 ? 100 : e < 0 ? 0 : e, "s"),
		l: /* @__PURE__ */ m((e) => e >= 100 ? 100 : e < 0 ? 0 : e, "l"),
		a: /* @__PURE__ */ m((e) => e >= 1 ? 1 : e < 0 ? 0 : e, "a")
	},
	toLinear: /* @__PURE__ */ m((e) => {
		let t = e / 255;
		return e > .03928 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92;
	}, "toLinear"),
	hue2rgb: /* @__PURE__ */ m((e, t, i) => (i < 0 && (i += 1), i > 1 && (i -= 1), i < .16666666666666666 ? e + (t - e) * 6 * i : i < .5 ? t : i < .6666666666666666 ? e + (t - e) * (.6666666666666666 - i) * 6 : e), "hue2rgb"),
	hsl2rgb: /* @__PURE__ */ m(({ h: e, s: t, l: i }, s) => {
		if (!t) return i * 2.55;
		e /= 360, t /= 100, i /= 100;
		let l = i < .5 ? i * (1 + t) : i + t - i * t, d$1 = 2 * i - l;
		switch (s) {
			case "r": return Vt.hue2rgb(d$1, l, e + .3333333333333333) * 255;
			case "g": return Vt.hue2rgb(d$1, l, e) * 255;
			case "b": return Vt.hue2rgb(d$1, l, e - .3333333333333333) * 255;
		}
	}, "hsl2rgb"),
	rgb2hsl: /* @__PURE__ */ m(({ r: e, g: t, b: i }, s) => {
		e /= 255, t /= 255, i /= 255;
		let l = /* @__PURE__ */ Math.max(e, t, i), d$1 = /* @__PURE__ */ Math.min(e, t, i), f = (l + d$1) / 2;
		if (s === "l") return f * 100;
		if (l === d$1) return 0;
		let x = l - d$1, E = f > .5 ? x / (2 - l - d$1) : x / (l + d$1);
		if (s === "s") return E * 100;
		switch (l) {
			case e: return ((t - i) / x + (t < i ? 6 : 0)) * 60;
			case t: return ((i - e) / x + 2) * 60;
			case i: return ((e - t) / x + 4) * 60;
			default: return -1;
		}
	}, "rgb2hsl")
};
var m$2 = {
	channel: Vt,
	lang: {
		clamp: /* @__PURE__ */ m((e, t, i) => t > i ? Math.min(t, /* @__PURE__ */ Math.max(i, e)) : Math.min(i, /* @__PURE__ */ Math.max(t, e)), "clamp"),
		round: /* @__PURE__ */ m((e) => Math.round(e * 1e10) / 1e10, "round")
	},
	unit: { dec2hex: /* @__PURE__ */ m((e) => {
		let t = /* @__PURE__ */ Math.round(e).toString(16);
		return t.length > 1 ? t : `0${t}`;
	}, "dec2hex") }
};
var K = {};
for (let e = 0; e <= 255; e++) K[e] = /* @__PURE__ */ m$2.unit.dec2hex(e);
var S$1 = {
	ALL: 0,
	RGB: 1,
	HSL: 2
};
var Le = class {
	static {
		m(this, "Type");
	}
	constructor() {
		this.type = S$1.ALL;
	}
	get() {
		return this.type;
	}
	set(t) {
		if (this.type && this.type !== t) throw new Error("Cannot change both RGB and HSL channels at the same time");
		this.type = t;
	}
	reset() {
		this.type = S$1.ALL;
	}
	is(t) {
		return this.type === t;
	}
}, Li = Le;
var _e = class {
	static {
		m(this, "Channels");
	}
	constructor(t, i) {
		this.color = i, this.changed = !1, this.data = t, this.type = new Li();
	}
	set(t, i) {
		return this.color = i, this.changed = !1, this.data = t, this.type.type = S$1.ALL, this;
	}
	_ensureHSL() {
		let t = this.data, { h: i, s, l } = t;
		i === void 0 && (t.h = /* @__PURE__ */ m$2.channel.rgb2hsl(t, "h")), s === void 0 && (t.s = /* @__PURE__ */ m$2.channel.rgb2hsl(t, "s")), l === void 0 && (t.l = /* @__PURE__ */ m$2.channel.rgb2hsl(t, "l"));
	}
	_ensureRGB() {
		let t = this.data, { r: i, g: s, b: l } = t;
		i === void 0 && (t.r = /* @__PURE__ */ m$2.channel.hsl2rgb(t, "r")), s === void 0 && (t.g = /* @__PURE__ */ m$2.channel.hsl2rgb(t, "g")), l === void 0 && (t.b = /* @__PURE__ */ m$2.channel.hsl2rgb(t, "b"));
	}
	get r() {
		let t = this.data, i = t.r;
		return !this.type.is(S$1.HSL) && i !== void 0 ? i : (this._ensureHSL(), m$2.channel.hsl2rgb(t, "r"));
	}
	get g() {
		let t = this.data, i = t.g;
		return !this.type.is(S$1.HSL) && i !== void 0 ? i : (this._ensureHSL(), m$2.channel.hsl2rgb(t, "g"));
	}
	get b() {
		let t = this.data, i = t.b;
		return !this.type.is(S$1.HSL) && i !== void 0 ? i : (this._ensureHSL(), m$2.channel.hsl2rgb(t, "b"));
	}
	get h() {
		let t = this.data, i = t.h;
		return !this.type.is(S$1.RGB) && i !== void 0 ? i : (this._ensureRGB(), m$2.channel.rgb2hsl(t, "h"));
	}
	get s() {
		let t = this.data, i = t.s;
		return !this.type.is(S$1.RGB) && i !== void 0 ? i : (this._ensureRGB(), m$2.channel.rgb2hsl(t, "s"));
	}
	get l() {
		let t = this.data, i = t.l;
		return !this.type.is(S$1.RGB) && i !== void 0 ? i : (this._ensureRGB(), m$2.channel.rgb2hsl(t, "l"));
	}
	get a() {
		return this.data.a;
	}
	set r(t) {
		this.type.set(S$1.RGB), this.changed = !0, this.data.r = t;
	}
	set g(t) {
		this.type.set(S$1.RGB), this.changed = !0, this.data.g = t;
	}
	set b(t) {
		this.type.set(S$1.RGB), this.changed = !0, this.data.b = t;
	}
	set h(t) {
		this.type.set(S$1.HSL), this.changed = !0, this.data.h = t;
	}
	set s(t) {
		this.type.set(S$1.HSL), this.changed = !0, this.data.s = t;
	}
	set l(t) {
		this.type.set(S$1.HSL), this.changed = !0, this.data.l = t;
	}
	set a(t) {
		this.changed = !0, this.data.a = t;
	}
};
var tt = new _e({
	r: 0,
	g: 0,
	b: 0,
	a: 0
}, "transparent");
var Ei = {
	re: /^#((?:[a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i,
	parse: /* @__PURE__ */ m((e) => {
		if (e.charCodeAt(0) !== 35) return;
		let t = /* @__PURE__ */ e.match(Ei.re);
		if (!t) return;
		let i = t[1], s = /* @__PURE__ */ parseInt(i, 16), l = i.length, d$1 = l % 4 === 0, f = l > 4, x = f ? 1 : 17, E = f ? 8 : 4, A = d$1 ? 0 : -1, H$1 = f ? 255 : 15;
		return tt.set({
			r: (s >> E * (A + 3) & H$1) * x,
			g: (s >> E * (A + 2) & H$1) * x,
			b: (s >> E * (A + 1) & H$1) * x,
			a: d$1 ? (s & H$1) * x / 255 : 1
		}, e);
	}, "parse"),
	stringify: /* @__PURE__ */ m((e) => {
		let { r: t, g: i, b: s, a: l } = e;
		return l < 1 ? `#${K[Math.round(t)]}${K[Math.round(i)]}${K[Math.round(s)]}${K[Math.round(l * 255)]}` : `#${K[Math.round(t)]}${K[Math.round(i)]}${K[Math.round(s)]}`;
	}, "stringify")
}, at = Ei;
var Yt = {
	re: /^hsla?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(?:deg|grad|rad|turn)?)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(%)?))?\s*?\)$/i,
	hueRe: /^(.+?)(deg|grad|rad|turn)$/i,
	_hue2deg: /* @__PURE__ */ m((e) => {
		let t = /* @__PURE__ */ e.match(Yt.hueRe);
		if (t) {
			let [, i, s] = t;
			switch (s) {
				case "grad": return m$2.channel.clamp.h(parseFloat(i) * .9);
				case "rad": return m$2.channel.clamp.h(parseFloat(i) * 180 / Math.PI);
				case "turn": return m$2.channel.clamp.h(parseFloat(i) * 360);
			}
		}
		return m$2.channel.clamp.h(/* @__PURE__ */ parseFloat(e));
	}, "_hue2deg"),
	parse: /* @__PURE__ */ m((e) => {
		let t = /* @__PURE__ */ e.charCodeAt(0);
		if (t !== 104 && t !== 72) return;
		let i = /* @__PURE__ */ e.match(Yt.re);
		if (!i) return;
		let [, s, l, d$1, f, x] = i;
		return tt.set({
			h: /* @__PURE__ */ Yt._hue2deg(s),
			s: /* @__PURE__ */ m$2.channel.clamp.s(/* @__PURE__ */ parseFloat(l)),
			l: /* @__PURE__ */ m$2.channel.clamp.l(/* @__PURE__ */ parseFloat(d$1)),
			a: f ? m$2.channel.clamp.a(x ? parseFloat(f) / 100 : parseFloat(f)) : 1
		}, e);
	}, "parse"),
	stringify: /* @__PURE__ */ m((e) => {
		let { h: t, s: i, l: s, a: l } = e;
		return l < 1 ? `hsla(${m$2.lang.round(t)}, ${m$2.lang.round(i)}%, ${m$2.lang.round(s)}%, ${l})` : `hsl(${m$2.lang.round(t)}, ${m$2.lang.round(i)}%, ${m$2.lang.round(s)}%)`;
	}, "stringify")
}, _t = Yt;
var Xt = {
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
	parse: /* @__PURE__ */ m((e) => {
		e = /* @__PURE__ */ e.toLowerCase();
		let t = Xt.colors[e];
		if (t) return at.parse(t);
	}, "parse"),
	stringify: /* @__PURE__ */ m((e) => {
		let t = /* @__PURE__ */ at.stringify(e);
		for (let i in Xt.colors) if (Xt.colors[i] === t) return i;
	}, "stringify")
}, Ee = Xt;
var Ai = {
	re: /^rgba?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?)))?\s*?\)$/i,
	parse: /* @__PURE__ */ m((e) => {
		let t = /* @__PURE__ */ e.charCodeAt(0);
		if (t !== 114 && t !== 82) return;
		let i = /* @__PURE__ */ e.match(Ai.re);
		if (!i) return;
		let [, s, l, d$1, f, x, E, A, H$1] = i;
		return tt.set({
			r: /* @__PURE__ */ m$2.channel.clamp.r(l ? parseFloat(s) * 2.55 : parseFloat(s)),
			g: /* @__PURE__ */ m$2.channel.clamp.g(f ? parseFloat(d$1) * 2.55 : parseFloat(d$1)),
			b: /* @__PURE__ */ m$2.channel.clamp.b(E ? parseFloat(x) * 2.55 : parseFloat(x)),
			a: A ? m$2.channel.clamp.a(H$1 ? parseFloat(A) / 100 : parseFloat(A)) : 1
		}, e);
	}, "parse"),
	stringify: /* @__PURE__ */ m((e) => {
		let { r: t, g: i, b: s, a: l } = e;
		return l < 1 ? `rgba(${m$2.lang.round(t)}, ${m$2.lang.round(i)}, ${m$2.lang.round(s)}, ${m$2.lang.round(l)})` : `rgb(${m$2.lang.round(t)}, ${m$2.lang.round(i)}, ${m$2.lang.round(s)})`;
	}, "stringify")
}, Et = Ai;
var F = {
	format: {
		keyword: Ee,
		hex: at,
		rgb: Et,
		rgba: Et,
		hsl: _t,
		hsla: _t
	},
	parse: /* @__PURE__ */ m((e) => {
		if (typeof e != "string") return e;
		let t = at.parse(e) || Et.parse(e) || _t.parse(e) || Ee.parse(e);
		if (t) return t;
		throw new Error(`Unsupported color format: "${e}"`);
	}, "parse"),
	stringify: /* @__PURE__ */ m((e) => !e.changed && e.color ? e.color : e.type.is(S$1.HSL) || e.data.r === void 0 ? _t.stringify(e) : e.a < 1 || !Number.isInteger(e.r) || !Number.isInteger(e.g) || !Number.isInteger(e.b) ? Et.stringify(e) : at.stringify(e), "stringify")
};
var Kt = /* @__PURE__ */ m((e, t) => {
	let i = /* @__PURE__ */ F.parse(e);
	for (let s in t) i[s] = /* @__PURE__ */ m$2.channel.clamp[s](t[s]);
	return F.stringify(i);
}, "change");
var Z = /* @__PURE__ */ m((e, t, i = 0, s = 1) => {
	if (typeof e != "number") return Kt(e, { a: t });
	let l = /* @__PURE__ */ tt.set({
		r: /* @__PURE__ */ m$2.channel.clamp.r(e),
		g: /* @__PURE__ */ m$2.channel.clamp.g(t),
		b: /* @__PURE__ */ m$2.channel.clamp.b(i),
		a: /* @__PURE__ */ m$2.channel.clamp.a(s)
	});
	return F.stringify(l);
}, "rgba");
var Pr = /* @__PURE__ */ m((e, t) => m$2.lang.round(F.parse(e)[t]), "channel");
var Mi = /* @__PURE__ */ m((e) => {
	let { r: t, g: i, b: s } = F.parse(e), l = .2126 * m$2.channel.toLinear(t) + .7152 * m$2.channel.toLinear(i) + .0722 * m$2.channel.toLinear(s);
	return m$2.lang.round(l);
}, "luminance");
var Oi = /* @__PURE__ */ m((e) => Mi(e) >= .5, "isLight");
var U = /* @__PURE__ */ m((e) => !Oi(e), "isDark");
var Zt = /* @__PURE__ */ m((e, t, i) => {
	let s = /* @__PURE__ */ F.parse(e), l = s[t], d$1 = /* @__PURE__ */ m$2.channel.clamp[t](l + i);
	return l !== d$1 && (s[t] = d$1), F.stringify(s);
}, "adjustChannel");
var c = /* @__PURE__ */ m((e, t) => Zt(e, "l", t), "lighten");
var g$1 = /* @__PURE__ */ m((e, t) => Zt(e, "l", -t), "darken");
var a = /* @__PURE__ */ m((e, t) => {
	let i = /* @__PURE__ */ F.parse(e), s = {};
	for (let l in t) t[l] && (s[l] = i[l] + t[l]);
	return Kt(e, s);
}, "adjust");
var vi = /* @__PURE__ */ m((e, t, i = 50) => {
	let { r: s, g: l, b: d$1, a: f } = F.parse(e), { r: x, g: E, b: A, a: H$1 } = F.parse(t), bt$1 = i / 100, nt$1 = bt$1 * 2 - 1, Q = f - H$1, ct$1 = ((nt$1 * Q === -1 ? nt$1 : (nt$1 + Q) / (1 + nt$1 * Q)) + 1) / 2, Tt$1 = 1 - ct$1, le$1 = s * ct$1 + x * Tt$1, ne$1 = l * ct$1 + E * Tt$1, dt = d$1 * ct$1 + A * Tt$1, M = f * bt$1 + H$1 * (1 - bt$1);
	return Z(le$1, ne$1, dt, M);
}, "mix");
var h$1 = /* @__PURE__ */ m((e, t = 100) => {
	let i = /* @__PURE__ */ F.parse(e);
	return i.r = 255 - i.r, i.g = 255 - i.g, i.b = 255 - i.b, vi(i, e, t);
}, "invert");
var et = "#ffffff", it = "#f2f2f2";
var k = /* @__PURE__ */ m((e, t) => t ? a(e, {
	s: -40,
	l: 10
}) : a(e, {
	s: -40,
	l: -10
}), "mkBorder");
var Ae = class {
	static {
		m(this, "Theme");
	}
	constructor() {
		this.background = "#f4f4f4", this.primaryColor = "#fff4dd", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#333", this.THEME_COLOR_LIMIT = 12, this.fontFamily = "\"trebuchet ms\", verdana, arial, sans-serif", this.fontSize = "16px";
	}
	updateColors() {
		if (this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333"), this.secondaryColor = this.secondaryColor || a(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || a(this.primaryColor, {
			h: 180,
			l: 5
		}), this.primaryBorderColor = this.primaryBorderColor || k(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || k(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || k(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || k(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#333", this.secondaryTextColor = this.secondaryTextColor || h$1(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || h$1(this.tertiaryColor), this.lineColor = this.lineColor || h$1(this.background), this.arrowheadColor = this.arrowheadColor || h$1(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? g$1(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || g$1(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || h$1(this.lineColor), this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || c(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.vertLineColor = this.vertLineColor || "navy", this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.darkMode ? (this.rowOdd = this.rowOdd || g$1(this.mainBkg, 5) || "#ffffff", this.rowEven = this.rowEven || g$1(this.mainBkg, 10)) : (this.rowOdd = this.rowOdd || c(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || c(this.mainBkg, 5)), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || this.tertiaryColor, this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || a(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || a(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || a(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || a(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || a(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || a(this.primaryColor, {
			h: 210,
			l: 150
		}), this.cScale9 = this.cScale9 || a(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || a(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || a(this.primaryColor, { h: 330 }), this.darkMode) for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) this["cScale" + i] = /* @__PURE__ */ g$1(this["cScale" + i], 75);
		else for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) this["cScale" + i] = /* @__PURE__ */ g$1(this["cScale" + i], 25);
		for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) this["cScaleInv" + i] = this["cScaleInv" + i] || h$1(this["cScale" + i]);
		for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) this.darkMode ? this["cScalePeer" + i] = this["cScalePeer" + i] || c(this["cScale" + i], 10) : this["cScalePeer" + i] = this["cScalePeer" + i] || g$1(this["cScale" + i], 10);
		this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
		for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) this["cScaleLabel" + i] = this["cScaleLabel" + i] || this.scaleLabelColor;
		let t = this.darkMode ? -4 : -1;
		for (let i = 0; i < 5; i++) this["surface" + i] = this["surface" + i] || a(this.mainBkg, {
			h: 180,
			s: -15,
			l: t * (5 + i * 3)
		}), this["surfacePeer" + i] = this["surfacePeer" + i] || a(this.mainBkg, {
			h: 180,
			s: -15,
			l: t * (8 + i * 3)
		});
		this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || a(this.primaryColor, { h: 64 }), this.fillType3 = this.fillType3 || a(this.secondaryColor, { h: 64 }), this.fillType4 = this.fillType4 || a(this.primaryColor, { h: -64 }), this.fillType5 = this.fillType5 || a(this.secondaryColor, { h: -64 }), this.fillType6 = this.fillType6 || a(this.primaryColor, { h: 128 }), this.fillType7 = this.fillType7 || a(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || a(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || a(this.secondaryColor, { l: -10 }), this.pie6 = this.pie6 || a(this.tertiaryColor, { l: -10 }), this.pie7 = this.pie7 || a(this.primaryColor, {
			h: 60,
			l: -10
		}), this.pie8 = this.pie8 || a(this.primaryColor, {
			h: -60,
			l: -10
		}), this.pie9 = this.pie9 || a(this.primaryColor, {
			h: 120,
			l: 0
		}), this.pie10 = this.pie10 || a(this.primaryColor, {
			h: 60,
			l: -20
		}), this.pie11 = this.pie11 || a(this.primaryColor, {
			h: -60,
			l: -20
		}), this.pie12 = this.pie12 || a(this.primaryColor, {
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
		}, this.archEdgeColor = this.archEdgeColor || "#777", this.archEdgeArrowColor = this.archEdgeArrowColor || "#777", this.archEdgeWidth = this.archEdgeWidth || "3", this.archGroupBorderColor = this.archGroupBorderColor || "#000", this.archGroupBorderWidth = this.archGroupBorderWidth || "2px", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || a(this.primaryColor, {
			r: 5,
			g: 5,
			b: 5
		}), this.quadrant3Fill = this.quadrant3Fill || a(this.primaryColor, {
			r: 10,
			g: 10,
			b: 10
		}), this.quadrant4Fill = this.quadrant4Fill || a(this.primaryColor, {
			r: 15,
			g: 15,
			b: 15
		}), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || a(this.primaryTextColor, {
			r: -5,
			g: -5,
			b: -5
		}), this.quadrant3TextFill = this.quadrant3TextFill || a(this.primaryTextColor, {
			r: -10,
			g: -10,
			b: -10
		}), this.quadrant4TextFill = this.quadrant4TextFill || a(this.primaryTextColor, {
			r: -15,
			g: -15,
			b: -15
		}), this.quadrantPointFill = this.quadrantPointFill || U(this.quadrant1Fill) ? c(this.quadrant1Fill) : g$1(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
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
		}, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? g$1(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || a(this.primaryColor, { h: -30 }), this.git4 = this.git4 || a(this.primaryColor, { h: -60 }), this.git5 = this.git5 || a(this.primaryColor, { h: -90 }), this.git6 = this.git6 || a(this.primaryColor, { h: 60 }), this.git7 = this.git7 || a(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = /* @__PURE__ */ c(this.git0, 25), this.git1 = /* @__PURE__ */ c(this.git1, 25), this.git2 = /* @__PURE__ */ c(this.git2, 25), this.git3 = /* @__PURE__ */ c(this.git3, 25), this.git4 = /* @__PURE__ */ c(this.git4, 25), this.git5 = /* @__PURE__ */ c(this.git5, 25), this.git6 = /* @__PURE__ */ c(this.git6, 25), this.git7 = /* @__PURE__ */ c(this.git7, 25)) : (this.git0 = /* @__PURE__ */ g$1(this.git0, 25), this.git1 = /* @__PURE__ */ g$1(this.git1, 25), this.git2 = /* @__PURE__ */ g$1(this.git2, 25), this.git3 = /* @__PURE__ */ g$1(this.git3, 25), this.git4 = /* @__PURE__ */ g$1(this.git4, 25), this.git5 = /* @__PURE__ */ g$1(this.git5, 25), this.git6 = /* @__PURE__ */ g$1(this.git6, 25), this.git7 = /* @__PURE__ */ g$1(this.git7, 25)), this.gitInv0 = this.gitInv0 || h$1(this.git0), this.gitInv1 = this.gitInv1 || h$1(this.git1), this.gitInv2 = this.gitInv2 || h$1(this.git2), this.gitInv3 = this.gitInv3 || h$1(this.git3), this.gitInv4 = this.gitInv4 || h$1(this.git4), this.gitInv5 = this.gitInv5 || h$1(this.git5), this.gitInv6 = this.gitInv6 || h$1(this.git6), this.gitInv7 = this.gitInv7 || h$1(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || et, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || it;
	}
	calculate(t) {
		if (typeof t != "object") {
			this.updateColors();
			return;
		}
		let i = /* @__PURE__ */ Object.keys(t);
		i.forEach((s) => {
			this[s] = t[s];
		}), this.updateColors(), i.forEach((s) => {
			this[s] = t[s];
		});
	}
}, wi = /* @__PURE__ */ m((e) => {
	let t = new Ae();
	return t.calculate(e), t;
}, "getThemeVariables");
var Me = class {
	static {
		m(this, "Theme");
	}
	constructor() {
		this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = /* @__PURE__ */ c(this.primaryColor, 16), this.tertiaryColor = /* @__PURE__ */ a(this.primaryColor, { h: -160 }), this.primaryBorderColor = /* @__PURE__ */ h$1(this.background), this.secondaryBorderColor = /* @__PURE__ */ k(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = /* @__PURE__ */ k(this.tertiaryColor, this.darkMode), this.primaryTextColor = /* @__PURE__ */ h$1(this.primaryColor), this.secondaryTextColor = /* @__PURE__ */ h$1(this.secondaryColor), this.tertiaryTextColor = /* @__PURE__ */ h$1(this.tertiaryColor), this.lineColor = /* @__PURE__ */ h$1(this.background), this.textColor = /* @__PURE__ */ h$1(this.background), this.mainBkg = "#1f2020", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = /* @__PURE__ */ c(/* @__PURE__ */ h$1("#323D47"), 10), this.lineColor = "calculated", this.border1 = "#ccc", this.border2 = /* @__PURE__ */ Z(255, 255, 255, .25), this.arrowheadColor = "calculated", this.fontFamily = "\"trebuchet ms\", verdana, arial, sans-serif", this.fontSize = "16px", this.labelBackground = "#181818", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#F9FFFE", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "calculated", this.activationBkgColor = "calculated", this.sequenceNumberColor = "black", this.sectionBkgColor = /* @__PURE__ */ g$1("#EAE8D9", 30), this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "#EAE8D9", this.excludeBkgColor = /* @__PURE__ */ g$1(this.sectionBkgColor, 10), this.taskBorderColor = /* @__PURE__ */ Z(255, 255, 255, 70), this.taskBkgColor = "calculated", this.taskTextColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = /* @__PURE__ */ Z(255, 255, 255, 50), this.activeTaskBkgColor = "#81B1DB", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "grey", this.critBorderColor = "#E83737", this.critBkgColor = "#E83737", this.taskTextDarkColor = "calculated", this.todayLineColor = "#DB5757", this.vertLineColor = "#00BFFF", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = this.rowOdd || c(this.mainBkg, 5) || "#ffffff", this.rowEven = this.rowEven || g$1(this.mainBkg, 10), this.labelColor = "calculated", this.errorBkgColor = "#a44141", this.errorTextColor = "#ddd";
	}
	updateColors() {
		this.secondBkg = /* @__PURE__ */ c(this.mainBkg, 16), this.lineColor = this.mainContrastColor, this.arrowheadColor = this.mainContrastColor, this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.edgeLabelBackground = /* @__PURE__ */ c(this.labelBackground, 25), this.actorBorder = this.border1, this.actorBkg = this.mainBkg, this.actorTextColor = this.mainContrastColor, this.actorLineColor = this.actorBorder, this.signalColor = this.mainContrastColor, this.signalTextColor = this.mainContrastColor, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.mainContrastColor, this.loopTextColor = this.mainContrastColor, this.noteBorderColor = this.secondaryBorderColor, this.noteBkgColor = this.secondBkg, this.noteTextColor = this.secondaryTextColor, this.activationBorderColor = this.border1, this.activationBkgColor = this.secondBkg, this.altSectionBkgColor = this.background, this.taskBkgColor = /* @__PURE__ */ c(this.mainBkg, 23), this.taskTextColor = this.darkTextColor, this.taskTextLightColor = this.mainContrastColor, this.taskTextOutsideColor = this.taskTextLightColor, this.gridColor = this.mainContrastColor, this.doneTaskBkgColor = this.mainContrastColor, this.taskTextDarkColor = this.darkTextColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#555", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#f4f4f4", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = /* @__PURE__ */ a(this.primaryColor, { h: 64 }), this.fillType3 = /* @__PURE__ */ a(this.secondaryColor, { h: 64 }), this.fillType4 = /* @__PURE__ */ a(this.primaryColor, { h: -64 }), this.fillType5 = /* @__PURE__ */ a(this.secondaryColor, { h: -64 }), this.fillType6 = /* @__PURE__ */ a(this.primaryColor, { h: 128 }), this.fillType7 = /* @__PURE__ */ a(this.secondaryColor, { h: 128 }), this.cScale1 = this.cScale1 || "#0b0000", this.cScale2 = this.cScale2 || "#4d1037", this.cScale3 = this.cScale3 || "#3f5258", this.cScale4 = this.cScale4 || "#4f2f1b", this.cScale5 = this.cScale5 || "#6e0a0a", this.cScale6 = this.cScale6 || "#3b0048", this.cScale7 = this.cScale7 || "#995a01", this.cScale8 = this.cScale8 || "#154706", this.cScale9 = this.cScale9 || "#161722", this.cScale10 = this.cScale10 || "#00296f", this.cScale11 = this.cScale11 || "#01629c", this.cScale12 = this.cScale12 || "#010029", this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || a(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || a(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || a(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || a(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || a(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || a(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || a(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || a(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || a(this.primaryColor, { h: 330 });
		for (let t = 0; t < this.THEME_COLOR_LIMIT; t++) this["cScaleInv" + t] = this["cScaleInv" + t] || h$1(this["cScale" + t]);
		for (let t = 0; t < this.THEME_COLOR_LIMIT; t++) this["cScalePeer" + t] = this["cScalePeer" + t] || c(this["cScale" + t], 10);
		for (let t = 0; t < 5; t++) this["surface" + t] = this["surface" + t] || a(this.mainBkg, {
			h: 30,
			s: -30,
			l: -(-10 + t * 4)
		}), this["surfacePeer" + t] = this["surfacePeer" + t] || a(this.mainBkg, {
			h: 30,
			s: -30,
			l: -(-7 + t * 4)
		});
		this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor);
		for (let t = 0; t < this.THEME_COLOR_LIMIT; t++) this["cScaleLabel" + t] = this["cScaleLabel" + t] || this.scaleLabelColor;
		for (let t = 0; t < this.THEME_COLOR_LIMIT; t++) this["pie" + t] = this["cScale" + t];
		this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || a(this.primaryColor, {
			r: 5,
			g: 5,
			b: 5
		}), this.quadrant3Fill = this.quadrant3Fill || a(this.primaryColor, {
			r: 10,
			g: 10,
			b: 10
		}), this.quadrant4Fill = this.quadrant4Fill || a(this.primaryColor, {
			r: 15,
			g: 15,
			b: 15
		}), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || a(this.primaryTextColor, {
			r: -5,
			g: -5,
			b: -5
		}), this.quadrant3TextFill = this.quadrant3TextFill || a(this.primaryTextColor, {
			r: -10,
			g: -10,
			b: -10
		}), this.quadrant4TextFill = this.quadrant4TextFill || a(this.primaryTextColor, {
			r: -15,
			g: -15,
			b: -15
		}), this.quadrantPointFill = this.quadrantPointFill || U(this.quadrant1Fill) ? c(this.quadrant1Fill) : g$1(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
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
		}, this.classText = this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? g$1(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = /* @__PURE__ */ c(this.secondaryColor, 20), this.git1 = /* @__PURE__ */ c(this.pie2 || this.secondaryColor, 20), this.git2 = /* @__PURE__ */ c(this.pie3 || this.tertiaryColor, 20), this.git3 = /* @__PURE__ */ c(this.pie4 || a(this.primaryColor, { h: -30 }), 20), this.git4 = /* @__PURE__ */ c(this.pie5 || a(this.primaryColor, { h: -60 }), 20), this.git5 = /* @__PURE__ */ c(this.pie6 || a(this.primaryColor, { h: -90 }), 10), this.git6 = /* @__PURE__ */ c(this.pie7 || a(this.primaryColor, { h: 60 }), 10), this.git7 = /* @__PURE__ */ c(this.pie8 || a(this.primaryColor, { h: 120 }), 20), this.gitInv0 = this.gitInv0 || h$1(this.git0), this.gitInv1 = this.gitInv1 || h$1(this.git1), this.gitInv2 = this.gitInv2 || h$1(this.git2), this.gitInv3 = this.gitInv3 || h$1(this.git3), this.gitInv4 = this.gitInv4 || h$1(this.git4), this.gitInv5 = this.gitInv5 || h$1(this.git5), this.gitInv6 = this.gitInv6 || h$1(this.git6), this.gitInv7 = this.gitInv7 || h$1(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || h$1(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || h$1(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || c(this.background, 12), this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || c(this.background, 2), this.nodeBorder = this.nodeBorder || "#999";
	}
	calculate(t) {
		if (typeof t != "object") {
			this.updateColors();
			return;
		}
		let i = /* @__PURE__ */ Object.keys(t);
		i.forEach((s) => {
			this[s] = t[s];
		}), this.updateColors(), i.forEach((s) => {
			this[s] = t[s];
		});
	}
}, Di = /* @__PURE__ */ m((e) => {
	let t = new Me();
	return t.calculate(e), t;
}, "getThemeVariables");
var Oe = class {
	static {
		m(this, "Theme");
	}
	constructor() {
		this.background = "#f4f4f4", this.primaryColor = "#ECECFF", this.secondaryColor = /* @__PURE__ */ a(this.primaryColor, { h: 120 }), this.secondaryColor = "#ffffde", this.tertiaryColor = /* @__PURE__ */ a(this.primaryColor, { h: -160 }), this.primaryBorderColor = /* @__PURE__ */ k(this.primaryColor, this.darkMode), this.secondaryBorderColor = /* @__PURE__ */ k(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = /* @__PURE__ */ k(this.tertiaryColor, this.darkMode), this.primaryTextColor = /* @__PURE__ */ h$1(this.primaryColor), this.secondaryTextColor = /* @__PURE__ */ h$1(this.secondaryColor), this.tertiaryTextColor = /* @__PURE__ */ h$1(this.tertiaryColor), this.lineColor = /* @__PURE__ */ h$1(this.background), this.textColor = /* @__PURE__ */ h$1(this.background), this.background = "white", this.mainBkg = "#ECECFF", this.secondBkg = "#ffffde", this.lineColor = "#333333", this.border1 = "#9370DB", this.border2 = "#aaaa33", this.arrowheadColor = "#333333", this.fontFamily = "\"trebuchet ms\", verdana, arial, sans-serif", this.fontSize = "16px", this.labelBackground = "rgba(232,232,232, 0.8)", this.textColor = "#333", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = this.taskTextDarkColor, this.taskTextClickableColor = "calculated", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBorderColor = "calculated", this.critBkgColor = "calculated", this.todayLineColor = "calculated", this.vertLineColor = "calculated", this.sectionBkgColor = /* @__PURE__ */ Z(102, 102, 255, .49), this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#fff400", this.taskBorderColor = "#534fbc", this.taskBkgColor = "#8a90dd", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "#534fbc", this.activeTaskBkgColor = "#bfc7ff", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.vertLineColor = "navy", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = "calculated", this.rowEven = "calculated", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222", this.updateColors();
	}
	updateColors() {
		this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || a(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || a(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || a(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || a(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || a(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || a(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || a(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || a(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || a(this.primaryColor, { h: 330 }), this.cScalePeer1 = this.cScalePeer1 || g$1(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || g$1(this.tertiaryColor, 40);
		for (let t = 0; t < this.THEME_COLOR_LIMIT; t++) this["cScale" + t] = /* @__PURE__ */ g$1(this["cScale" + t], 10), this["cScalePeer" + t] = this["cScalePeer" + t] || g$1(this["cScale" + t], 25);
		for (let t = 0; t < this.THEME_COLOR_LIMIT; t++) this["cScaleInv" + t] = this["cScaleInv" + t] || a(this["cScale" + t], { h: 180 });
		for (let t = 0; t < 5; t++) this["surface" + t] = this["surface" + t] || a(this.mainBkg, {
			h: 30,
			l: -(5 + t * 5)
		}), this["surfacePeer" + t] = this["surfacePeer" + t] || a(this.mainBkg, {
			h: 30,
			l: -(7 + t * 5)
		});
		if (this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor, this.labelTextColor !== "calculated") {
			this.cScaleLabel0 = this.cScaleLabel0 || h$1(this.labelTextColor), this.cScaleLabel3 = this.cScaleLabel3 || h$1(this.labelTextColor);
			for (let t = 0; t < this.THEME_COLOR_LIMIT; t++) this["cScaleLabel" + t] = this["cScaleLabel" + t] || this.labelTextColor;
		}
		this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.textColor, this.edgeLabelBackground = this.labelBackground, this.actorBorder = /* @__PURE__ */ c(this.border1, 23), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.signalColor = this.textColor, this.signalTextColor = this.textColor, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.actorLineColor = this.actorBorder, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.rowOdd = this.rowOdd || c(this.primaryColor, 75) || "#ffffff", this.rowEven = this.rowEven || c(this.primaryColor, 1), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = /* @__PURE__ */ a(this.primaryColor, { h: 64 }), this.fillType3 = /* @__PURE__ */ a(this.secondaryColor, { h: 64 }), this.fillType4 = /* @__PURE__ */ a(this.primaryColor, { h: -64 }), this.fillType5 = /* @__PURE__ */ a(this.secondaryColor, { h: -64 }), this.fillType6 = /* @__PURE__ */ a(this.primaryColor, { h: 128 }), this.fillType7 = /* @__PURE__ */ a(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || a(this.tertiaryColor, { l: -40 }), this.pie4 = this.pie4 || a(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || a(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || a(this.tertiaryColor, { l: -20 }), this.pie7 = this.pie7 || a(this.primaryColor, {
			h: 60,
			l: -20
		}), this.pie8 = this.pie8 || a(this.primaryColor, {
			h: -60,
			l: -40
		}), this.pie9 = this.pie9 || a(this.primaryColor, {
			h: 120,
			l: -40
		}), this.pie10 = this.pie10 || a(this.primaryColor, {
			h: 60,
			l: -40
		}), this.pie11 = this.pie11 || a(this.primaryColor, {
			h: -90,
			l: -40
		}), this.pie12 = this.pie12 || a(this.primaryColor, {
			h: 120,
			l: -30
		}), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || a(this.primaryColor, {
			r: 5,
			g: 5,
			b: 5
		}), this.quadrant3Fill = this.quadrant3Fill || a(this.primaryColor, {
			r: 10,
			g: 10,
			b: 10
		}), this.quadrant4Fill = this.quadrant4Fill || a(this.primaryColor, {
			r: 15,
			g: 15,
			b: 15
		}), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || a(this.primaryTextColor, {
			r: -5,
			g: -5,
			b: -5
		}), this.quadrant3TextFill = this.quadrant3TextFill || a(this.primaryTextColor, {
			r: -10,
			g: -10,
			b: -10
		}), this.quadrant4TextFill = this.quadrant4TextFill || a(this.primaryTextColor, {
			r: -15,
			g: -15,
			b: -15
		}), this.quadrantPointFill = this.quadrantPointFill || U(this.quadrant1Fill) ? c(this.quadrant1Fill) : g$1(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.radar = {
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
		}, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.labelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || a(this.primaryColor, { h: -30 }), this.git4 = this.git4 || a(this.primaryColor, { h: -60 }), this.git5 = this.git5 || a(this.primaryColor, { h: -90 }), this.git6 = this.git6 || a(this.primaryColor, { h: 60 }), this.git7 = this.git7 || a(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = /* @__PURE__ */ c(this.git0, 25), this.git1 = /* @__PURE__ */ c(this.git1, 25), this.git2 = /* @__PURE__ */ c(this.git2, 25), this.git3 = /* @__PURE__ */ c(this.git3, 25), this.git4 = /* @__PURE__ */ c(this.git4, 25), this.git5 = /* @__PURE__ */ c(this.git5, 25), this.git6 = /* @__PURE__ */ c(this.git6, 25), this.git7 = /* @__PURE__ */ c(this.git7, 25)) : (this.git0 = /* @__PURE__ */ g$1(this.git0, 25), this.git1 = /* @__PURE__ */ g$1(this.git1, 25), this.git2 = /* @__PURE__ */ g$1(this.git2, 25), this.git3 = /* @__PURE__ */ g$1(this.git3, 25), this.git4 = /* @__PURE__ */ g$1(this.git4, 25), this.git5 = /* @__PURE__ */ g$1(this.git5, 25), this.git6 = /* @__PURE__ */ g$1(this.git6, 25), this.git7 = /* @__PURE__ */ g$1(this.git7, 25)), this.gitInv0 = this.gitInv0 || g$1(/* @__PURE__ */ h$1(this.git0), 25), this.gitInv1 = this.gitInv1 || h$1(this.git1), this.gitInv2 = this.gitInv2 || h$1(this.git2), this.gitInv3 = this.gitInv3 || h$1(this.git3), this.gitInv4 = this.gitInv4 || h$1(this.git4), this.gitInv5 = this.gitInv5 || h$1(this.git5), this.gitInv6 = this.gitInv6 || h$1(this.git6), this.gitInv7 = this.gitInv7 || h$1(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || h$1(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || h$1(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || et, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || it;
	}
	calculate(t) {
		if (Object.keys(this).forEach((s) => {
			this[s] === "calculated" && (this[s] = void 0);
		}), typeof t != "object") {
			this.updateColors();
			return;
		}
		let i = /* @__PURE__ */ Object.keys(t);
		i.forEach((s) => {
			this[s] = t[s];
		}), this.updateColors(), i.forEach((s) => {
			this[s] = t[s];
		});
	}
}, Ii = /* @__PURE__ */ m((e) => {
	let t = new Oe();
	return t.calculate(e), t;
}, "getThemeVariables");
var ve = class {
	static {
		m(this, "Theme");
	}
	constructor() {
		this.background = "#f4f4f4", this.primaryColor = "#cde498", this.secondaryColor = "#cdffb2", this.background = "white", this.mainBkg = "#cde498", this.secondBkg = "#cdffb2", this.lineColor = "green", this.border1 = "#13540c", this.border2 = "#6eaa49", this.arrowheadColor = "green", this.fontFamily = "\"trebuchet ms\", verdana, arial, sans-serif", this.fontSize = "16px", this.tertiaryColor = /* @__PURE__ */ c("#cde498", 10), this.primaryBorderColor = /* @__PURE__ */ k(this.primaryColor, this.darkMode), this.secondaryBorderColor = /* @__PURE__ */ k(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = /* @__PURE__ */ k(this.tertiaryColor, this.darkMode), this.primaryTextColor = /* @__PURE__ */ h$1(this.primaryColor), this.secondaryTextColor = /* @__PURE__ */ h$1(this.secondaryColor), this.tertiaryTextColor = /* @__PURE__ */ h$1(this.primaryColor), this.lineColor = /* @__PURE__ */ h$1(this.background), this.textColor = /* @__PURE__ */ h$1(this.background), this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#333", this.edgeLabelBackground = "#e8e8e8", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "calculated", this.signalColor = "#333", this.signalTextColor = "#333", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "#326932", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "#6eaa49", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#6eaa49", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "#487e3a", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.vertLineColor = "#00BFFF", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
	}
	updateColors() {
		this.actorBorder = /* @__PURE__ */ g$1(this.mainBkg, 20), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.actorLineColor = this.actorBorder, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || a(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || a(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || a(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || a(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || a(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || a(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || a(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || a(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || a(this.primaryColor, { h: 330 }), this.cScalePeer1 = this.cScalePeer1 || g$1(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || g$1(this.tertiaryColor, 40);
		for (let t = 0; t < this.THEME_COLOR_LIMIT; t++) this["cScale" + t] = /* @__PURE__ */ g$1(this["cScale" + t], 10), this["cScalePeer" + t] = this["cScalePeer" + t] || g$1(this["cScale" + t], 25);
		for (let t = 0; t < this.THEME_COLOR_LIMIT; t++) this["cScaleInv" + t] = this["cScaleInv" + t] || a(this["cScale" + t], { h: 180 });
		this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor;
		for (let t = 0; t < this.THEME_COLOR_LIMIT; t++) this["cScaleLabel" + t] = this["cScaleLabel" + t] || this.scaleLabelColor;
		for (let t = 0; t < 5; t++) this["surface" + t] = this["surface" + t] || a(this.mainBkg, {
			h: 30,
			s: -30,
			l: -(5 + t * 5)
		}), this["surfacePeer" + t] = this["surfacePeer" + t] || a(this.mainBkg, {
			h: 30,
			s: -30,
			l: -(8 + t * 5)
		});
		this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.taskBorderColor = this.border1, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.rowOdd = this.rowOdd || c(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || c(this.mainBkg, 20), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = /* @__PURE__ */ a(this.primaryColor, { h: 64 }), this.fillType3 = /* @__PURE__ */ a(this.secondaryColor, { h: 64 }), this.fillType4 = /* @__PURE__ */ a(this.primaryColor, { h: -64 }), this.fillType5 = /* @__PURE__ */ a(this.secondaryColor, { h: -64 }), this.fillType6 = /* @__PURE__ */ a(this.primaryColor, { h: 128 }), this.fillType7 = /* @__PURE__ */ a(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || a(this.primaryColor, { l: -30 }), this.pie5 = this.pie5 || a(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || a(this.tertiaryColor, {
			h: 40,
			l: -40
		}), this.pie7 = this.pie7 || a(this.primaryColor, {
			h: 60,
			l: -10
		}), this.pie8 = this.pie8 || a(this.primaryColor, {
			h: -60,
			l: -10
		}), this.pie9 = this.pie9 || a(this.primaryColor, {
			h: 120,
			l: 0
		}), this.pie10 = this.pie10 || a(this.primaryColor, {
			h: 60,
			l: -50
		}), this.pie11 = this.pie11 || a(this.primaryColor, {
			h: -60,
			l: -50
		}), this.pie12 = this.pie12 || a(this.primaryColor, {
			h: 120,
			l: -50
		}), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || a(this.primaryColor, {
			r: 5,
			g: 5,
			b: 5
		}), this.quadrant3Fill = this.quadrant3Fill || a(this.primaryColor, {
			r: 10,
			g: 10,
			b: 10
		}), this.quadrant4Fill = this.quadrant4Fill || a(this.primaryColor, {
			r: 15,
			g: 15,
			b: 15
		}), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || a(this.primaryTextColor, {
			r: -5,
			g: -5,
			b: -5
		}), this.quadrant3TextFill = this.quadrant3TextFill || a(this.primaryTextColor, {
			r: -10,
			g: -10,
			b: -10
		}), this.quadrant4TextFill = this.quadrant4TextFill || a(this.primaryTextColor, {
			r: -15,
			g: -15,
			b: -15
		}), this.quadrantPointFill = this.quadrantPointFill || U(this.quadrant1Fill) ? c(this.quadrant1Fill) : g$1(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.packet = {
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
		}, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || a(this.primaryColor, { h: -30 }), this.git4 = this.git4 || a(this.primaryColor, { h: -60 }), this.git5 = this.git5 || a(this.primaryColor, { h: -90 }), this.git6 = this.git6 || a(this.primaryColor, { h: 60 }), this.git7 = this.git7 || a(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = /* @__PURE__ */ c(this.git0, 25), this.git1 = /* @__PURE__ */ c(this.git1, 25), this.git2 = /* @__PURE__ */ c(this.git2, 25), this.git3 = /* @__PURE__ */ c(this.git3, 25), this.git4 = /* @__PURE__ */ c(this.git4, 25), this.git5 = /* @__PURE__ */ c(this.git5, 25), this.git6 = /* @__PURE__ */ c(this.git6, 25), this.git7 = /* @__PURE__ */ c(this.git7, 25)) : (this.git0 = /* @__PURE__ */ g$1(this.git0, 25), this.git1 = /* @__PURE__ */ g$1(this.git1, 25), this.git2 = /* @__PURE__ */ g$1(this.git2, 25), this.git3 = /* @__PURE__ */ g$1(this.git3, 25), this.git4 = /* @__PURE__ */ g$1(this.git4, 25), this.git5 = /* @__PURE__ */ g$1(this.git5, 25), this.git6 = /* @__PURE__ */ g$1(this.git6, 25), this.git7 = /* @__PURE__ */ g$1(this.git7, 25)), this.gitInv0 = this.gitInv0 || h$1(this.git0), this.gitInv1 = this.gitInv1 || h$1(this.git1), this.gitInv2 = this.gitInv2 || h$1(this.git2), this.gitInv3 = this.gitInv3 || h$1(this.git3), this.gitInv4 = this.gitInv4 || h$1(this.git4), this.gitInv5 = this.gitInv5 || h$1(this.git5), this.gitInv6 = this.gitInv6 || h$1(this.git6), this.gitInv7 = this.gitInv7 || h$1(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || h$1(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || h$1(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || et, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || it;
	}
	calculate(t) {
		if (typeof t != "object") {
			this.updateColors();
			return;
		}
		let i = /* @__PURE__ */ Object.keys(t);
		i.forEach((s) => {
			this[s] = t[s];
		}), this.updateColors(), i.forEach((s) => {
			this[s] = t[s];
		});
	}
}, qi = /* @__PURE__ */ m((e) => {
	let t = new ve();
	return t.calculate(e), t;
}, "getThemeVariables");
var we = class {
	static {
		m(this, "Theme");
	}
	constructor() {
		this.primaryColor = "#eee", this.contrast = "#707070", this.secondaryColor = /* @__PURE__ */ c(this.contrast, 55), this.background = "#ffffff", this.tertiaryColor = /* @__PURE__ */ a(this.primaryColor, { h: -160 }), this.primaryBorderColor = /* @__PURE__ */ k(this.primaryColor, this.darkMode), this.secondaryBorderColor = /* @__PURE__ */ k(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = /* @__PURE__ */ k(this.tertiaryColor, this.darkMode), this.primaryTextColor = /* @__PURE__ */ h$1(this.primaryColor), this.secondaryTextColor = /* @__PURE__ */ h$1(this.secondaryColor), this.tertiaryTextColor = /* @__PURE__ */ h$1(this.tertiaryColor), this.lineColor = /* @__PURE__ */ h$1(this.background), this.textColor = /* @__PURE__ */ h$1(this.background), this.mainBkg = "#eee", this.secondBkg = "calculated", this.lineColor = "#666", this.border1 = "#999", this.border2 = "calculated", this.note = "#ffa", this.text = "#333", this.critical = "#d42", this.done = "#bbb", this.arrowheadColor = "#333333", this.fontFamily = "\"trebuchet ms\", verdana, arial, sans-serif", this.fontSize = "16px", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "white", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = this.actorBorder, this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "calculated", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBkgColor = "calculated", this.critBorderColor = "calculated", this.todayLineColor = "calculated", this.vertLineColor = "calculated", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = this.rowOdd || c(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || "#f4f4f4", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
	}
	updateColors() {
		this.secondBkg = /* @__PURE__ */ c(this.contrast, 55), this.border2 = this.contrast, this.actorBorder = /* @__PURE__ */ c(this.border1, 23), this.actorBkg = this.mainBkg, this.actorTextColor = this.text, this.actorLineColor = this.actorBorder, this.signalColor = this.text, this.signalTextColor = this.text, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.text, this.loopTextColor = this.text, this.noteBorderColor = "#999", this.noteBkgColor = "#666", this.noteTextColor = "#fff", this.cScale0 = this.cScale0 || "#555", this.cScale1 = this.cScale1 || "#F4F4F4", this.cScale2 = this.cScale2 || "#555", this.cScale3 = this.cScale3 || "#BBB", this.cScale4 = this.cScale4 || "#777", this.cScale5 = this.cScale5 || "#999", this.cScale6 = this.cScale6 || "#DDD", this.cScale7 = this.cScale7 || "#FFF", this.cScale8 = this.cScale8 || "#DDD", this.cScale9 = this.cScale9 || "#BBB", this.cScale10 = this.cScale10 || "#999", this.cScale11 = this.cScale11 || "#777";
		for (let t = 0; t < this.THEME_COLOR_LIMIT; t++) this["cScaleInv" + t] = this["cScaleInv" + t] || h$1(this["cScale" + t]);
		for (let t = 0; t < this.THEME_COLOR_LIMIT; t++) this.darkMode ? this["cScalePeer" + t] = this["cScalePeer" + t] || c(this["cScale" + t], 10) : this["cScalePeer" + t] = this["cScalePeer" + t] || g$1(this["cScale" + t], 10);
		this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.cScaleLabel0 = this.cScaleLabel0 || this.cScale1, this.cScaleLabel2 = this.cScaleLabel2 || this.cScale1;
		for (let t = 0; t < this.THEME_COLOR_LIMIT; t++) this["cScaleLabel" + t] = this["cScaleLabel" + t] || this.scaleLabelColor;
		for (let t = 0; t < 5; t++) this["surface" + t] = this["surface" + t] || a(this.mainBkg, { l: -(5 + t * 5) }), this["surfacePeer" + t] = this["surfacePeer" + t] || a(this.mainBkg, { l: -(8 + t * 5) });
		this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.text, this.sectionBkgColor = /* @__PURE__ */ c(this.contrast, 30), this.sectionBkgColor2 = /* @__PURE__ */ c(this.contrast, 30), this.taskBorderColor = /* @__PURE__ */ g$1(this.contrast, 10), this.taskBkgColor = this.contrast, this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = this.text, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.gridColor = /* @__PURE__ */ c(this.border1, 30), this.doneTaskBkgColor = this.done, this.doneTaskBorderColor = this.lineColor, this.critBkgColor = this.critical, this.critBorderColor = /* @__PURE__ */ g$1(this.critBkgColor, 10), this.todayLineColor = this.critBkgColor, this.vertLineColor = this.critBkgColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.transitionColor = this.transitionColor || "#000", this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f4f4f4", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.stateBorder = this.stateBorder || "#000", this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#222", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = /* @__PURE__ */ a(this.primaryColor, { h: 64 }), this.fillType3 = /* @__PURE__ */ a(this.secondaryColor, { h: 64 }), this.fillType4 = /* @__PURE__ */ a(this.primaryColor, { h: -64 }), this.fillType5 = /* @__PURE__ */ a(this.secondaryColor, { h: -64 }), this.fillType6 = /* @__PURE__ */ a(this.primaryColor, { h: 128 }), this.fillType7 = /* @__PURE__ */ a(this.secondaryColor, { h: 128 });
		for (let t = 0; t < this.THEME_COLOR_LIMIT; t++) this["pie" + t] = this["cScale" + t];
		this.pie12 = this.pie0, this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || a(this.primaryColor, {
			r: 5,
			g: 5,
			b: 5
		}), this.quadrant3Fill = this.quadrant3Fill || a(this.primaryColor, {
			r: 10,
			g: 10,
			b: 10
		}), this.quadrant4Fill = this.quadrant4Fill || a(this.primaryColor, {
			r: 15,
			g: 15,
			b: 15
		}), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || a(this.primaryTextColor, {
			r: -5,
			g: -5,
			b: -5
		}), this.quadrant3TextFill = this.quadrant3TextFill || a(this.primaryTextColor, {
			r: -10,
			g: -10,
			b: -10
		}), this.quadrant4TextFill = this.quadrant4TextFill || a(this.primaryTextColor, {
			r: -15,
			g: -15,
			b: -15
		}), this.quadrantPointFill = this.quadrantPointFill || U(this.quadrant1Fill) ? c(this.quadrant1Fill) : g$1(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
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
		}, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = g$1(this.pie1, 25) || this.primaryColor, this.git1 = this.pie2 || this.secondaryColor, this.git2 = this.pie3 || this.tertiaryColor, this.git3 = this.pie4 || a(this.primaryColor, { h: -30 }), this.git4 = this.pie5 || a(this.primaryColor, { h: -60 }), this.git5 = this.pie6 || a(this.primaryColor, { h: -90 }), this.git6 = this.pie7 || a(this.primaryColor, { h: 60 }), this.git7 = this.pie8 || a(this.primaryColor, { h: 120 }), this.gitInv0 = this.gitInv0 || h$1(this.git0), this.gitInv1 = this.gitInv1 || h$1(this.git1), this.gitInv2 = this.gitInv2 || h$1(this.git2), this.gitInv3 = this.gitInv3 || h$1(this.git3), this.gitInv4 = this.gitInv4 || h$1(this.git4), this.gitInv5 = this.gitInv5 || h$1(this.git5), this.gitInv6 = this.gitInv6 || h$1(this.git6), this.gitInv7 = this.gitInv7 || h$1(this.git7), this.branchLabelColor = this.branchLabelColor || this.labelTextColor, this.gitBranchLabel0 = this.branchLabelColor, this.gitBranchLabel1 = "white", this.gitBranchLabel2 = this.branchLabelColor, this.gitBranchLabel3 = "white", this.gitBranchLabel4 = this.branchLabelColor, this.gitBranchLabel5 = this.branchLabelColor, this.gitBranchLabel6 = this.branchLabelColor, this.gitBranchLabel7 = this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || et, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || it;
	}
	calculate(t) {
		if (typeof t != "object") {
			this.updateColors();
			return;
		}
		let i = /* @__PURE__ */ Object.keys(t);
		i.forEach((s) => {
			this[s] = t[s];
		}), this.updateColors(), i.forEach((s) => {
			this[s] = t[s];
		});
	}
};
var rt = {
	base: { getThemeVariables: wi },
	dark: { getThemeVariables: Di },
	default: { getThemeVariables: Ii },
	forest: { getThemeVariables: qi },
	neutral: { getThemeVariables: /* @__PURE__ */ m((e) => {
		let t = new we();
		return t.calculate(e), t;
	}, "getThemeVariables") }
};
var G = {
	flowchart: {
		useMaxWidth: !0,
		titleTopMargin: 25,
		subGraphTitleMargin: {
			top: 0,
			bottom: 0
		},
		diagramPadding: 8,
		htmlLabels: !0,
		nodeSpacing: 50,
		rankSpacing: 50,
		curve: "basis",
		padding: 15,
		defaultRenderer: "dagre-wrapper",
		wrappingWidth: 200,
		inheritDir: !1
	},
	sequence: {
		useMaxWidth: !0,
		hideUnusedParticipants: !1,
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
		mirrorActors: !0,
		forceMenus: !1,
		bottomMarginAdj: 1,
		rightAngles: !1,
		showSequenceNumbers: !1,
		actorFontSize: 14,
		actorFontFamily: "\"Open Sans\", sans-serif",
		actorFontWeight: 400,
		noteFontSize: 14,
		noteFontFamily: "\"trebuchet ms\", verdana, arial, sans-serif",
		noteFontWeight: 400,
		noteAlign: "center",
		messageFontSize: 16,
		messageFontFamily: "\"trebuchet ms\", verdana, arial, sans-serif",
		messageFontWeight: 400,
		wrap: !1,
		wrapPadding: 10,
		labelBoxWidth: 50,
		labelBoxHeight: 20
	},
	gantt: {
		useMaxWidth: !0,
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
		topAxis: !1,
		displayMode: "",
		weekday: "sunday"
	},
	journey: {
		useMaxWidth: !0,
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
		rightAngles: !1,
		taskFontSize: 14,
		taskFontFamily: "\"Open Sans\", sans-serif",
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
		sectionColours: ["#fff"],
		titleColor: "",
		titleFontFamily: "\"trebuchet ms\", verdana, arial, sans-serif",
		titleFontSize: "4ex"
	},
	class: {
		useMaxWidth: !0,
		titleTopMargin: 25,
		arrowMarkerAbsolute: !1,
		dividerMargin: 10,
		padding: 5,
		textHeight: 10,
		defaultRenderer: "dagre-wrapper",
		htmlLabels: !1,
		hideEmptyMembersBox: !1
	},
	state: {
		useMaxWidth: !0,
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
		useMaxWidth: !0,
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
		useMaxWidth: !0,
		textPosition: .75
	},
	quadrantChart: {
		useMaxWidth: !0,
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
		useMaxWidth: !0,
		width: 700,
		height: 500,
		titleFontSize: 20,
		titlePadding: 10,
		showDataLabel: !1,
		showTitle: !0,
		xAxis: {
			$ref: "#/$defs/XYChartAxisConfig",
			showLabel: !0,
			labelFontSize: 14,
			labelPadding: 5,
			showTitle: !0,
			titleFontSize: 16,
			titlePadding: 5,
			showTick: !0,
			tickLength: 5,
			tickWidth: 2,
			showAxisLine: !0,
			axisLineWidth: 2
		},
		yAxis: {
			$ref: "#/$defs/XYChartAxisConfig",
			showLabel: !0,
			labelFontSize: 14,
			labelPadding: 5,
			showTitle: !0,
			titleFontSize: 16,
			titlePadding: 5,
			showTick: !0,
			tickLength: 5,
			tickWidth: 2,
			showAxisLine: !0,
			axisLineWidth: 2
		},
		chartOrientation: "vertical",
		plotReservedSpacePercent: 50
	},
	requirement: {
		useMaxWidth: !0,
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
		useMaxWidth: !0,
		padding: 10,
		maxNodeWidth: 200,
		layoutAlgorithm: "cose-bilkent"
	},
	kanban: {
		useMaxWidth: !0,
		padding: 8,
		sectionWidth: 200,
		ticketBaseUrl: ""
	},
	timeline: {
		useMaxWidth: !0,
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
		rightAngles: !1,
		taskFontSize: 14,
		taskFontFamily: "\"Open Sans\", sans-serif",
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
		sectionColours: ["#fff"],
		disableMulticolor: !1
	},
	gitGraph: {
		useMaxWidth: !0,
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
		showCommitLabel: !0,
		showBranches: !0,
		rotateCommitLabel: !0,
		parallelCommits: !1,
		arrowMarkerAbsolute: !1
	},
	c4: {
		useMaxWidth: !0,
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
		personFontFamily: "\"Open Sans\", sans-serif",
		personFontWeight: "normal",
		external_personFontSize: 14,
		external_personFontFamily: "\"Open Sans\", sans-serif",
		external_personFontWeight: "normal",
		systemFontSize: 14,
		systemFontFamily: "\"Open Sans\", sans-serif",
		systemFontWeight: "normal",
		external_systemFontSize: 14,
		external_systemFontFamily: "\"Open Sans\", sans-serif",
		external_systemFontWeight: "normal",
		system_dbFontSize: 14,
		system_dbFontFamily: "\"Open Sans\", sans-serif",
		system_dbFontWeight: "normal",
		external_system_dbFontSize: 14,
		external_system_dbFontFamily: "\"Open Sans\", sans-serif",
		external_system_dbFontWeight: "normal",
		system_queueFontSize: 14,
		system_queueFontFamily: "\"Open Sans\", sans-serif",
		system_queueFontWeight: "normal",
		external_system_queueFontSize: 14,
		external_system_queueFontFamily: "\"Open Sans\", sans-serif",
		external_system_queueFontWeight: "normal",
		boundaryFontSize: 14,
		boundaryFontFamily: "\"Open Sans\", sans-serif",
		boundaryFontWeight: "normal",
		messageFontSize: 12,
		messageFontFamily: "\"Open Sans\", sans-serif",
		messageFontWeight: "normal",
		containerFontSize: 14,
		containerFontFamily: "\"Open Sans\", sans-serif",
		containerFontWeight: "normal",
		external_containerFontSize: 14,
		external_containerFontFamily: "\"Open Sans\", sans-serif",
		external_containerFontWeight: "normal",
		container_dbFontSize: 14,
		container_dbFontFamily: "\"Open Sans\", sans-serif",
		container_dbFontWeight: "normal",
		external_container_dbFontSize: 14,
		external_container_dbFontFamily: "\"Open Sans\", sans-serif",
		external_container_dbFontWeight: "normal",
		container_queueFontSize: 14,
		container_queueFontFamily: "\"Open Sans\", sans-serif",
		container_queueFontWeight: "normal",
		external_container_queueFontSize: 14,
		external_container_queueFontFamily: "\"Open Sans\", sans-serif",
		external_container_queueFontWeight: "normal",
		componentFontSize: 14,
		componentFontFamily: "\"Open Sans\", sans-serif",
		componentFontWeight: "normal",
		external_componentFontSize: 14,
		external_componentFontFamily: "\"Open Sans\", sans-serif",
		external_componentFontWeight: "normal",
		component_dbFontSize: 14,
		component_dbFontFamily: "\"Open Sans\", sans-serif",
		component_dbFontWeight: "normal",
		external_component_dbFontSize: 14,
		external_component_dbFontFamily: "\"Open Sans\", sans-serif",
		external_component_dbFontWeight: "normal",
		component_queueFontSize: 14,
		component_queueFontFamily: "\"Open Sans\", sans-serif",
		component_queueFontWeight: "normal",
		external_component_queueFontSize: 14,
		external_component_queueFontFamily: "\"Open Sans\", sans-serif",
		external_component_queueFontWeight: "normal",
		wrap: !0,
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
		useMaxWidth: !0,
		width: 600,
		height: 400,
		linkColor: "gradient",
		nodeAlignment: "justify",
		showValues: !0,
		prefix: "",
		suffix: ""
	},
	block: {
		useMaxWidth: !0,
		padding: 8
	},
	packet: {
		useMaxWidth: !0,
		rowHeight: 32,
		bitWidth: 32,
		bitsPerRow: 32,
		showBits: !0,
		paddingX: 5,
		paddingY: 5
	},
	architecture: {
		useMaxWidth: !0,
		padding: 40,
		iconSize: 80,
		fontSize: 16
	},
	radar: {
		useMaxWidth: !0,
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
	darkMode: !1,
	fontFamily: "\"trebuchet ms\", verdana, arial, sans-serif;",
	logLevel: 5,
	securityLevel: "strict",
	startOnLoad: !0,
	arrowMarkerAbsolute: !1,
	secure: [
		"secure",
		"securityLevel",
		"startOnLoad",
		"maxTextSize",
		"suppressErrorRendering",
		"maxEdges"
	],
	legacyMathML: !1,
	forceLegacyMathML: !1,
	deterministicIds: !1,
	fontSize: 16,
	markdownAutoWrap: !0,
	suppressErrorRendering: !1
};
var Ri = {
	...G,
	deterministicIDSeed: void 0,
	elk: {
		mergeEdges: !1,
		nodePlacementStrategy: "BRANDES_KOEPF",
		forceNodeModelOrder: !1,
		considerModelOrder: "NODES_AND_EDGES"
	},
	themeCSS: void 0,
	themeVariables: /* @__PURE__ */ rt.default.getThemeVariables(),
	sequence: {
		...G.sequence,
		messageFont: /* @__PURE__ */ m(function() {
			return {
				fontFamily: this.messageFontFamily,
				fontSize: this.messageFontSize,
				fontWeight: this.messageFontWeight
			};
		}, "messageFont"),
		noteFont: /* @__PURE__ */ m(function() {
			return {
				fontFamily: this.noteFontFamily,
				fontSize: this.noteFontSize,
				fontWeight: this.noteFontWeight
			};
		}, "noteFont"),
		actorFont: /* @__PURE__ */ m(function() {
			return {
				fontFamily: this.actorFontFamily,
				fontSize: this.actorFontSize,
				fontWeight: this.actorFontWeight
			};
		}, "actorFont")
	},
	class: { hideEmptyMembersBox: !1 },
	gantt: {
		...G.gantt,
		tickInterval: void 0,
		useWidth: void 0
	},
	c4: {
		...G.c4,
		useWidth: void 0,
		personFont: /* @__PURE__ */ m(function() {
			return {
				fontFamily: this.personFontFamily,
				fontSize: this.personFontSize,
				fontWeight: this.personFontWeight
			};
		}, "personFont"),
		flowchart: {
			...G.flowchart,
			inheritDir: !1
		},
		external_personFont: /* @__PURE__ */ m(function() {
			return {
				fontFamily: this.external_personFontFamily,
				fontSize: this.external_personFontSize,
				fontWeight: this.external_personFontWeight
			};
		}, "external_personFont"),
		systemFont: /* @__PURE__ */ m(function() {
			return {
				fontFamily: this.systemFontFamily,
				fontSize: this.systemFontSize,
				fontWeight: this.systemFontWeight
			};
		}, "systemFont"),
		external_systemFont: /* @__PURE__ */ m(function() {
			return {
				fontFamily: this.external_systemFontFamily,
				fontSize: this.external_systemFontSize,
				fontWeight: this.external_systemFontWeight
			};
		}, "external_systemFont"),
		system_dbFont: /* @__PURE__ */ m(function() {
			return {
				fontFamily: this.system_dbFontFamily,
				fontSize: this.system_dbFontSize,
				fontWeight: this.system_dbFontWeight
			};
		}, "system_dbFont"),
		external_system_dbFont: /* @__PURE__ */ m(function() {
			return {
				fontFamily: this.external_system_dbFontFamily,
				fontSize: this.external_system_dbFontSize,
				fontWeight: this.external_system_dbFontWeight
			};
		}, "external_system_dbFont"),
		system_queueFont: /* @__PURE__ */ m(function() {
			return {
				fontFamily: this.system_queueFontFamily,
				fontSize: this.system_queueFontSize,
				fontWeight: this.system_queueFontWeight
			};
		}, "system_queueFont"),
		external_system_queueFont: /* @__PURE__ */ m(function() {
			return {
				fontFamily: this.external_system_queueFontFamily,
				fontSize: this.external_system_queueFontSize,
				fontWeight: this.external_system_queueFontWeight
			};
		}, "external_system_queueFont"),
		containerFont: /* @__PURE__ */ m(function() {
			return {
				fontFamily: this.containerFontFamily,
				fontSize: this.containerFontSize,
				fontWeight: this.containerFontWeight
			};
		}, "containerFont"),
		external_containerFont: /* @__PURE__ */ m(function() {
			return {
				fontFamily: this.external_containerFontFamily,
				fontSize: this.external_containerFontSize,
				fontWeight: this.external_containerFontWeight
			};
		}, "external_containerFont"),
		container_dbFont: /* @__PURE__ */ m(function() {
			return {
				fontFamily: this.container_dbFontFamily,
				fontSize: this.container_dbFontSize,
				fontWeight: this.container_dbFontWeight
			};
		}, "container_dbFont"),
		external_container_dbFont: /* @__PURE__ */ m(function() {
			return {
				fontFamily: this.external_container_dbFontFamily,
				fontSize: this.external_container_dbFontSize,
				fontWeight: this.external_container_dbFontWeight
			};
		}, "external_container_dbFont"),
		container_queueFont: /* @__PURE__ */ m(function() {
			return {
				fontFamily: this.container_queueFontFamily,
				fontSize: this.container_queueFontSize,
				fontWeight: this.container_queueFontWeight
			};
		}, "container_queueFont"),
		external_container_queueFont: /* @__PURE__ */ m(function() {
			return {
				fontFamily: this.external_container_queueFontFamily,
				fontSize: this.external_container_queueFontSize,
				fontWeight: this.external_container_queueFontWeight
			};
		}, "external_container_queueFont"),
		componentFont: /* @__PURE__ */ m(function() {
			return {
				fontFamily: this.componentFontFamily,
				fontSize: this.componentFontSize,
				fontWeight: this.componentFontWeight
			};
		}, "componentFont"),
		external_componentFont: /* @__PURE__ */ m(function() {
			return {
				fontFamily: this.external_componentFontFamily,
				fontSize: this.external_componentFontSize,
				fontWeight: this.external_componentFontWeight
			};
		}, "external_componentFont"),
		component_dbFont: /* @__PURE__ */ m(function() {
			return {
				fontFamily: this.component_dbFontFamily,
				fontSize: this.component_dbFontSize,
				fontWeight: this.component_dbFontWeight
			};
		}, "component_dbFont"),
		external_component_dbFont: /* @__PURE__ */ m(function() {
			return {
				fontFamily: this.external_component_dbFontFamily,
				fontSize: this.external_component_dbFontSize,
				fontWeight: this.external_component_dbFontWeight
			};
		}, "external_component_dbFont"),
		component_queueFont: /* @__PURE__ */ m(function() {
			return {
				fontFamily: this.component_queueFontFamily,
				fontSize: this.component_queueFontSize,
				fontWeight: this.component_queueFontWeight
			};
		}, "component_queueFont"),
		external_component_queueFont: /* @__PURE__ */ m(function() {
			return {
				fontFamily: this.external_component_queueFontFamily,
				fontSize: this.external_component_queueFontSize,
				fontWeight: this.external_component_queueFontWeight
			};
		}, "external_component_queueFont"),
		boundaryFont: /* @__PURE__ */ m(function() {
			return {
				fontFamily: this.boundaryFontFamily,
				fontSize: this.boundaryFontSize,
				fontWeight: this.boundaryFontWeight
			};
		}, "boundaryFont"),
		messageFont: /* @__PURE__ */ m(function() {
			return {
				fontFamily: this.messageFontFamily,
				fontSize: this.messageFontSize,
				fontWeight: this.messageFontWeight
			};
		}, "messageFont")
	},
	pie: {
		...G.pie,
		useWidth: 984
	},
	xyChart: {
		...G.xyChart,
		useWidth: void 0
	},
	requirement: {
		...G.requirement,
		useWidth: void 0
	},
	packet: { ...G.packet },
	radar: { ...G.radar },
	treemap: {
		useMaxWidth: !0,
		padding: 10,
		diagramPadding: 8,
		showValues: !0,
		nodeWidth: 100,
		nodeHeight: 40,
		borderWidth: 1,
		valueFontSize: 12,
		labelFontSize: 14,
		valueFormat: ","
	}
}, Wi = m((e, t = "") => Object.keys(e).reduce((i, s) => Array.isArray(e[s]) ? i : typeof e[s] == "object" && e[s] !== null ? [
	...i,
	t + s,
	.../* @__PURE__ */ Wi(e[s], "")
] : [...i, t + s], []), "keyify"), Pi = new Set(Wi(Ri, "")), Ni = Ri;
var Jt = m((e) => {
	if (pt.debug("sanitizeDirective called with", e), !(typeof e != "object" || e == null)) {
		if (Array.isArray(e)) {
			e.forEach((t) => Jt(t));
			return;
		}
		for (let t of Object.keys(e)) {
			if (pt.debug("Checking key", t), t.startsWith("__") || t.includes("proto") || t.includes("constr") || !Pi.has(t) || e[t] == null) {
				pt.debug("sanitize deleting key: ", t), delete e[t];
				continue;
			}
			if (typeof e[t] == "object") {
				pt.debug("sanitizing object", t), Jt(e[t]);
				continue;
			}
			for (let s of [
				"themeCSS",
				"fontFamily",
				"altFontFamily"
			]) t.includes(s) && (pt.debug("sanitizing css option", t), e[t] = /* @__PURE__ */ Kr(e[t]));
		}
		if (e.themeVariables) for (let t of Object.keys(e.themeVariables)) {
			let i = e.themeVariables[t];
			i?.match && !i.match(/^[\d "#%(),.;A-Za-z]+$/) && (e.themeVariables[t] = "");
		}
		pt.debug("After sanitization", e);
	}
}, "sanitizeDirective"), Kr = /* @__PURE__ */ m((e) => {
	let t = 0, i = 0;
	for (let s of e) {
		if (t < i) return "{ /* ERROR: Unbalanced CSS */ }";
		s === "{" ? t++ : s === "}" && i++;
	}
	return t !== i ? "{ /* ERROR: Unbalanced CSS */ }" : e;
}, "sanitizeCss");
var Mt = /* @__PURE__ */ Object.freeze(Ni), P = /* @__PURE__ */ v({}, Mt), Qt, lt = [], At = /* @__PURE__ */ v({}, Mt), te = /* @__PURE__ */ m((e, t) => {
	let i = /* @__PURE__ */ v({}, e), s = {};
	for (let l of t) Gi(l), s = /* @__PURE__ */ v(s, l);
	if (i = /* @__PURE__ */ v(i, s), s.theme && s.theme in rt) {
		let d$1 = /* @__PURE__ */ v((/* @__PURE__ */ v({}, Qt)).themeVariables || {}, s.themeVariables);
		i.theme && i.theme in rt && (i.themeVariables = /* @__PURE__ */ rt[i.theme].getThemeVariables(d$1));
	}
	return At = i, $i(At), At;
}, "updateCurrentConfig"), Zr = /* @__PURE__ */ m((e) => (P = /* @__PURE__ */ v({}, Mt), P = /* @__PURE__ */ v(P, e), e.theme && rt[e.theme] && (P.themeVariables = /* @__PURE__ */ rt[e.theme].getThemeVariables(e.themeVariables)), te(P, lt), P), "setSiteConfig"), Xl = /* @__PURE__ */ m((e) => {
	Qt = /* @__PURE__ */ v({}, e);
}, "saveConfigFromInitialize"), Kl = /* @__PURE__ */ m((e) => (P = /* @__PURE__ */ v(P, e), te(P, lt), P), "updateSiteConfig"), Zl = /* @__PURE__ */ m(() => v({}, P), "getSiteConfig"), Ui = /* @__PURE__ */ m((e) => ($i(e), v(At, e), Ot()), "setConfig"), Ot = /* @__PURE__ */ m(() => v({}, At), "getConfig"), Gi = m((e) => {
	e && (["secure", ...P.secure ?? []].forEach((t) => {
		Object.hasOwn(e, t) && (pt.debug(`Denied attempt to modify a secure key ${t}`, e[t]), delete e[t]);
	}), Object.keys(e).forEach((t) => {
		t.startsWith("__") && delete e[t];
	}), Object.keys(e).forEach((t) => {
		typeof e[t] == "string" && (e[t].includes("<") || e[t].includes(">") || e[t].includes("url(data:")) && delete e[t], typeof e[t] == "object" && Gi(e[t]);
	}));
}, "sanitize"), Jl = /* @__PURE__ */ m((e) => {
	Jt(e), e.fontFamily && !e.themeVariables?.fontFamily && (e.themeVariables = {
		...e.themeVariables,
		fontFamily: e.fontFamily
	}), lt.push(e), te(P, lt);
}, "addDirective"), Ql = /* @__PURE__ */ m((e = P) => {
	lt = [], te(e, lt);
}, "reset"), Jr = { LAZY_LOAD_DEPRECATED: "The configuration options lazyLoadedDiagrams and loadExternalDiagramsAtStartup are deprecated. Please use registerExternalDiagrams instead." }, Hi = {}, Qr = /* @__PURE__ */ m((e) => {
	Hi[e] || (pt.warn(Jr[e]), Hi[e] = !0);
}, "issueWarning"), $i = /* @__PURE__ */ m((e) => {
	e && (e.lazyLoadedDiagrams || e.loadExternalDiagramsAtStartup) && Qr("LAZY_LOAD_DEPRECATED");
}, "checkConfig"), tn = /* @__PURE__ */ m(() => {
	let e = {};
	Qt && (e = /* @__PURE__ */ v(e, Qt));
	for (let t of lt) e = /* @__PURE__ */ v(e, t);
	return e;
}, "getUserDefinedConfig");
var { entries: er, setPrototypeOf: ji, isFrozen: to, getPrototypeOf: eo, getOwnPropertyDescriptor: io } = Object, { freeze: z, seal: N, create: ir } = Object, { apply: We, construct: Pe } = typeof Reflect < "u" && Reflect;
z || (z = /* @__PURE__ */ m(function(t) {
	return t;
}, "freeze"));
N || (N = /* @__PURE__ */ m(function(t) {
	return t;
}, "seal"));
We || (We = /* @__PURE__ */ m(function(t, i, s) {
	return t.apply(i, s);
}, "apply"));
Pe || (Pe = /* @__PURE__ */ m(function(t, i) {
	return new t(...i);
}, "construct"));
var ee = /* @__PURE__ */ R(Array.prototype.forEach), ro = /* @__PURE__ */ R(Array.prototype.lastIndexOf), Vi = /* @__PURE__ */ R(Array.prototype.pop), vt = /* @__PURE__ */ R(Array.prototype.push), oo = /* @__PURE__ */ R(Array.prototype.splice), re = /* @__PURE__ */ R(String.prototype.toLowerCase), De = /* @__PURE__ */ R(String.prototype.toString), Yi = /* @__PURE__ */ R(String.prototype.match), wt = /* @__PURE__ */ R(String.prototype.replace), so = /* @__PURE__ */ R(String.prototype.indexOf), ao = /* @__PURE__ */ R(String.prototype.trim), $ = /* @__PURE__ */ R(Object.prototype.hasOwnProperty), q = /* @__PURE__ */ R(RegExp.prototype.test), Dt = /* @__PURE__ */ lo(TypeError);
function R(e) {
	return function(t) {
		t instanceof RegExp && (t.lastIndex = 0);
		for (var i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), l = 1; l < i; l++) s[l - 1] = arguments[l];
		return We(e, t, s);
	};
}
m(R, "unapply");
function lo(e) {
	return function() {
		for (var t = arguments.length, i = new Array(t), s = 0; s < t; s++) i[s] = arguments[s];
		return Pe(e, i);
	};
}
m(lo, "unconstruct");
function p$1(e, t) {
	let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : re;
	ji && ji(e, null);
	let s = t.length;
	for (; s--;) {
		let l = t[s];
		if (typeof l == "string") {
			let d$1 = /* @__PURE__ */ i(l);
			d$1 !== l && (to(t) || (t[s] = d$1), l = d$1);
		}
		e[l] = !0;
	}
	return e;
}
m(p$1, "addToSet");
function no(e) {
	for (let t = 0; t < e.length; t++) $(e, t) || (e[t] = null);
	return e;
}
m(no, "cleanArray");
function J(e) {
	let t = /* @__PURE__ */ ir(null);
	for (let [i, s] of er(e)) $(e, i) && (Array.isArray(s) ? t[i] = /* @__PURE__ */ no(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = /* @__PURE__ */ J(s) : t[i] = s);
	return t;
}
m(J, "clone");
function It(e, t) {
	for (; e !== null;) {
		let s = /* @__PURE__ */ io(e, t);
		if (s) {
			if (s.get) return R(s.get);
			if (typeof s.value == "function") return R(s.value);
		}
		e = /* @__PURE__ */ eo(e);
	}
	function i() {
		return null;
	}
	return m(i, "fallbackValue"), i;
}
m(It, "lookupGetter");
var Xi = /* @__PURE__ */ z([
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
]), Ie = /* @__PURE__ */ z([
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
]), qe = /* @__PURE__ */ z([
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
]), ho = /* @__PURE__ */ z([
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
]), ze = /* @__PURE__ */ z([
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
]), co = /* @__PURE__ */ z([
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
]), Ki = /* @__PURE__ */ z(["#text"]), Zi = /* @__PURE__ */ z([
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
]), Re = /* @__PURE__ */ z([
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
]), Ji = /* @__PURE__ */ z([
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
]), ie = /* @__PURE__ */ z([
	"xlink:href",
	"xml:id",
	"xlink:title",
	"xml:space",
	"xmlns:xlink"
]), go = /* @__PURE__ */ N(/\{\{[\w\W]*|[\w\W]*\}\}/gm), uo = /* @__PURE__ */ N(/<%[\w\W]*|[\w\W]*%>/gm), mo = /* @__PURE__ */ N(/\$\{[\w\W]*/gm), Co = /* @__PURE__ */ N(/^data-[\-\w.\u00B7-\uFFFF]+$/), po = /* @__PURE__ */ N(/^aria-[\-\w]+$/), rr = /* @__PURE__ */ N(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), fo = /* @__PURE__ */ N(/^(?:\w+script|data):/i), xo = /* @__PURE__ */ N(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), or = /* @__PURE__ */ N(/^html$/i), yo = /* @__PURE__ */ N(/^[a-z][.\w]*(-[.\w]+)+$/i), Qi = /* @__PURE__ */ Object.freeze({
	__proto__: null,
	ARIA_ATTR: po,
	ATTR_WHITESPACE: xo,
	CUSTOM_ELEMENT: yo,
	DATA_ATTR: Co,
	DOCTYPE_NAME: or,
	ERB_EXPR: uo,
	IS_ALLOWED_URI: rr,
	IS_SCRIPT_OR_DATA: fo,
	MUSTACHE_EXPR: go,
	TMPLIT_EXPR: mo
}), qt = {
	element: 1,
	attribute: 2,
	text: 3,
	cdataSection: 4,
	entityReference: 5,
	entityNode: 6,
	progressingInstruction: 7,
	comment: 8,
	document: 9,
	documentType: 10,
	documentFragment: 11,
	notation: 12
}, bo = /* @__PURE__ */ m(function() {
	return typeof window > "u" ? null : window;
}, "getGlobal"), To = /* @__PURE__ */ m(function(t, i) {
	if (typeof t != "object" || typeof t.createPolicy != "function") return null;
	let s = null, l = "data-tt-policy-suffix";
	i && i.hasAttribute(l) && (s = /* @__PURE__ */ i.getAttribute(l));
	let d$1 = "dompurify" + (s ? "#" + s : "");
	try {
		return t.createPolicy(d$1, {
			createHTML(f) {
				return f;
			},
			createScriptURL(f) {
				return f;
			}
		});
	} catch {
		return console.warn("TrustedTypes policy " + d$1 + " could not be created."), null;
	}
}, "_createTrustedTypesPolicy"), tr = /* @__PURE__ */ m(function() {
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
function sr() {
	let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : bo(), t = /* @__PURE__ */ m((C) => sr(C), "DOMPurify");
	if (t.version = "3.2.6", t.removed = [], !e || !e.document || e.document.nodeType !== qt.document || !e.Element) return t.isSupported = !1, t;
	let { document: i } = e, s = i, l = s.currentScript, { DocumentFragment: d$1, HTMLTemplateElement: f, Node: x, Element: E, NodeFilter: A, NamedNodeMap: H$1 = e.NamedNodeMap || e.MozNamedAttrMap, HTMLFormElement: bt$1, DOMParser: nt$1, trustedTypes: Q } = e, ht = E.prototype, ct$1 = /* @__PURE__ */ It(ht, "cloneNode"), Tt$1 = /* @__PURE__ */ It(ht, "remove"), le$1 = /* @__PURE__ */ It(ht, "nextSibling"), ne$1 = /* @__PURE__ */ It(ht, "childNodes"), dt = /* @__PURE__ */ It(ht, "parentNode");
	if (typeof f == "function") {
		let C = /* @__PURE__ */ i.createElement("template");
		C.content && C.content.ownerDocument && (i = C.content.ownerDocument);
	}
	let M, kt = "", { implementation: he$1, createNodeIterator: Cr$1, createDocumentFragment: pr$1, getElementsByTagName: fr } = i, { importNode: xr$1 } = s, I = /* @__PURE__ */ tr();
	t.isSupported = typeof er == "function" && typeof dt == "function" && he$1 && he$1.createHTMLDocument !== void 0;
	let { MUSTACHE_EXPR: ce$1, ERB_EXPR: de$1, TMPLIT_EXPR: ge$1, DATA_ATTR: yr$1, ARIA_ATTR: br$1, IS_SCRIPT_OR_DATA: Tr$1, ATTR_WHITESPACE: Ye$1, CUSTOM_ELEMENT: kr$1 } = Qi, { IS_ALLOWED_URI: Xe$1 } = Qi, L$1 = null, Ke$1 = /* @__PURE__ */ p$1({}, [
		...Xi,
		...Ie,
		...qe,
		...ze,
		...Ki
	]), O = null, Ze$1 = /* @__PURE__ */ p$1({}, [
		...Zi,
		...Re,
		...Ji,
		...ie
	]), b = /* @__PURE__ */ Object.seal(/* @__PURE__ */ ir(null, {
		tagNameCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		},
		attributeNameCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		},
		allowCustomizedBuiltInElements: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: !1
		}
	})), Bt$1 = null, ue$1 = null, Je$1 = !0, me$1 = !0, Qe$1 = !1, ti$1 = !0, gt$1 = !1, Rt$1 = !0, st = !1, Ce$1 = !1, pe$1 = !1, ut = !1, Wt = !1, Pt$1 = !1, ei$1 = !0, ii$1 = !1, Br$1 = "user-content-", fe$1 = !0, St$1 = !1, mt$1 = {}, Ct$1 = null, ri$1 = /* @__PURE__ */ p$1({}, [
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
	]), oi$1 = null, si$1 = /* @__PURE__ */ p$1({}, [
		"audio",
		"video",
		"img",
		"source",
		"image",
		"track"
	]), xe$1 = null, ai$1 = /* @__PURE__ */ p$1({}, [
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
	]), Nt$1 = "http://www.w3.org/1998/Math/MathML", Ht$1 = "http://www.w3.org/2000/svg", V$1 = "http://www.w3.org/1999/xhtml", pt$1 = V$1, ye$1 = !1, be$1 = null, Sr$1 = /* @__PURE__ */ p$1({}, [
		Nt$1,
		Ht$1,
		V$1
	], De), Ut$1 = /* @__PURE__ */ p$1({}, [
		"mi",
		"mo",
		"mn",
		"ms",
		"mtext"
	]), Gt$1 = /* @__PURE__ */ p$1({}, ["annotation-xml"]), Fr$1 = /* @__PURE__ */ p$1({}, [
		"title",
		"style",
		"font",
		"a",
		"script"
	]), Ft$1 = null, Lr$1 = ["application/xhtml+xml", "text/html"], _r$1 = "text/html", _ = null, ft = null, Er$1 = /* @__PURE__ */ i.createElement("form"), li$1 = /* @__PURE__ */ m(function(o$1) {
		return o$1 instanceof RegExp || o$1 instanceof Function;
	}, "isRegexOrFunction"), Te$1 = /* @__PURE__ */ m(function() {
		let o$1 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		if (!(ft && ft === o$1)) {
			if ((!o$1 || typeof o$1 != "object") && (o$1 = {}), o$1 = /* @__PURE__ */ J(o$1), Ft$1 = Lr$1.indexOf(o$1.PARSER_MEDIA_TYPE) === -1 ? _r$1 : o$1.PARSER_MEDIA_TYPE, _ = Ft$1 === "application/xhtml+xml" ? De : re, L$1 = $(o$1, "ALLOWED_TAGS") ? p$1({}, o$1.ALLOWED_TAGS, _) : Ke$1, O = $(o$1, "ALLOWED_ATTR") ? p$1({}, o$1.ALLOWED_ATTR, _) : Ze$1, be$1 = $(o$1, "ALLOWED_NAMESPACES") ? p$1({}, o$1.ALLOWED_NAMESPACES, De) : Sr$1, xe$1 = $(o$1, "ADD_URI_SAFE_ATTR") ? p$1(/* @__PURE__ */ J(ai$1), o$1.ADD_URI_SAFE_ATTR, _) : ai$1, oi$1 = $(o$1, "ADD_DATA_URI_TAGS") ? p$1(/* @__PURE__ */ J(si$1), o$1.ADD_DATA_URI_TAGS, _) : si$1, Ct$1 = $(o$1, "FORBID_CONTENTS") ? p$1({}, o$1.FORBID_CONTENTS, _) : ri$1, Bt$1 = $(o$1, "FORBID_TAGS") ? p$1({}, o$1.FORBID_TAGS, _) : J({}), ue$1 = $(o$1, "FORBID_ATTR") ? p$1({}, o$1.FORBID_ATTR, _) : J({}), mt$1 = $(o$1, "USE_PROFILES") ? o$1.USE_PROFILES : !1, Je$1 = o$1.ALLOW_ARIA_ATTR !== !1, me$1 = o$1.ALLOW_DATA_ATTR !== !1, Qe$1 = o$1.ALLOW_UNKNOWN_PROTOCOLS || !1, ti$1 = o$1.ALLOW_SELF_CLOSE_IN_ATTR !== !1, gt$1 = o$1.SAFE_FOR_TEMPLATES || !1, Rt$1 = o$1.SAFE_FOR_XML !== !1, st = o$1.WHOLE_DOCUMENT || !1, ut = o$1.RETURN_DOM || !1, Wt = o$1.RETURN_DOM_FRAGMENT || !1, Pt$1 = o$1.RETURN_TRUSTED_TYPE || !1, pe$1 = o$1.FORCE_BODY || !1, ei$1 = o$1.SANITIZE_DOM !== !1, ii$1 = o$1.SANITIZE_NAMED_PROPS || !1, fe$1 = o$1.KEEP_CONTENT !== !1, St$1 = o$1.IN_PLACE || !1, Xe$1 = o$1.ALLOWED_URI_REGEXP || rr, pt$1 = o$1.NAMESPACE || V$1, Ut$1 = o$1.MATHML_TEXT_INTEGRATION_POINTS || Ut$1, Gt$1 = o$1.HTML_INTEGRATION_POINTS || Gt$1, b = o$1.CUSTOM_ELEMENT_HANDLING || {}, o$1.CUSTOM_ELEMENT_HANDLING && li$1(o$1.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (b.tagNameCheck = o$1.CUSTOM_ELEMENT_HANDLING.tagNameCheck), o$1.CUSTOM_ELEMENT_HANDLING && li$1(o$1.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (b.attributeNameCheck = o$1.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), o$1.CUSTOM_ELEMENT_HANDLING && typeof o$1.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (b.allowCustomizedBuiltInElements = o$1.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), gt$1 && (me$1 = !1), Wt && (ut = !0), mt$1 && (L$1 = /* @__PURE__ */ p$1({}, Ki), O = [], mt$1.html === !0 && (p$1(L$1, Xi), p$1(O, Zi)), mt$1.svg === !0 && (p$1(L$1, Ie), p$1(O, Re), p$1(O, ie)), mt$1.svgFilters === !0 && (p$1(L$1, qe), p$1(O, Re), p$1(O, ie)), mt$1.mathMl === !0 && (p$1(L$1, ze), p$1(O, Ji), p$1(O, ie))), o$1.ADD_TAGS && (L$1 === Ke$1 && (L$1 = /* @__PURE__ */ J(L$1)), p$1(L$1, o$1.ADD_TAGS, _)), o$1.ADD_ATTR && (O === Ze$1 && (O = /* @__PURE__ */ J(O)), p$1(O, o$1.ADD_ATTR, _)), o$1.ADD_URI_SAFE_ATTR && p$1(xe$1, o$1.ADD_URI_SAFE_ATTR, _), o$1.FORBID_CONTENTS && (Ct$1 === ri$1 && (Ct$1 = /* @__PURE__ */ J(Ct$1)), p$1(Ct$1, o$1.FORBID_CONTENTS, _)), fe$1 && (L$1["#text"] = !0), st && p$1(L$1, [
				"html",
				"head",
				"body"
			]), L$1.table && (p$1(L$1, ["tbody"]), delete Bt$1.tbody), o$1.TRUSTED_TYPES_POLICY) {
				if (typeof o$1.TRUSTED_TYPES_POLICY.createHTML != "function") throw Dt("TRUSTED_TYPES_POLICY configuration option must provide a \"createHTML\" hook.");
				if (typeof o$1.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw Dt("TRUSTED_TYPES_POLICY configuration option must provide a \"createScriptURL\" hook.");
				M = o$1.TRUSTED_TYPES_POLICY, kt = /* @__PURE__ */ M.createHTML("");
			} else M === void 0 && (M = /* @__PURE__ */ To(Q, l)), M !== null && typeof kt == "string" && (kt = /* @__PURE__ */ M.createHTML(""));
			z && z(o$1), ft = o$1;
		}
	}, "_parseConfig"), ni$1 = /* @__PURE__ */ p$1({}, [
		...Ie,
		...qe,
		...ho
	]), hi$1 = /* @__PURE__ */ p$1({}, [...ze, ...co]), Ar$1 = /* @__PURE__ */ m(function(o$1) {
		let n$1 = /* @__PURE__ */ dt(o$1);
		(!n$1 || !n$1.tagName) && (n$1 = {
			namespaceURI: pt$1,
			tagName: "template"
		});
		let u$1 = /* @__PURE__ */ re(o$1.tagName), y = /* @__PURE__ */ re(n$1.tagName);
		return be$1[o$1.namespaceURI] ? o$1.namespaceURI === Ht$1 ? n$1.namespaceURI === V$1 ? u$1 === "svg" : n$1.namespaceURI === Nt$1 ? u$1 === "svg" && (y === "annotation-xml" || Ut$1[y]) : !!ni$1[u$1] : o$1.namespaceURI === Nt$1 ? n$1.namespaceURI === V$1 ? u$1 === "math" : n$1.namespaceURI === Ht$1 ? u$1 === "math" && Gt$1[y] : !!hi$1[u$1] : o$1.namespaceURI === V$1 ? n$1.namespaceURI === Ht$1 && !Gt$1[y] || n$1.namespaceURI === Nt$1 && !Ut$1[y] ? !1 : !hi$1[u$1] && (Fr$1[u$1] || !ni$1[u$1]) : !!(Ft$1 === "application/xhtml+xml" && be$1[o$1.namespaceURI]) : !1;
	}, "_checkValidNamespace"), j$1 = /* @__PURE__ */ m(function(o$1) {
		vt(t.removed, { element: o$1 });
		try {
			dt(o$1).removeChild(o$1);
		} catch {
			Tt$1(o$1);
		}
	}, "_forceRemove"), xt$1 = /* @__PURE__ */ m(function(o$1, n$1) {
		try {
			vt(t.removed, {
				attribute: /* @__PURE__ */ n$1.getAttributeNode(o$1),
				from: n$1
			});
		} catch {
			vt(t.removed, {
				attribute: null,
				from: n$1
			});
		}
		if (n$1.removeAttribute(o$1), o$1 === "is") if (ut || Wt) try {
			j$1(n$1);
		} catch {}
		else try {
			n$1.setAttribute(o$1, "");
		} catch {}
	}, "_removeAttribute"), ci$1 = /* @__PURE__ */ m(function(o$1) {
		let n$1 = null, u$1 = null;
		if (pe$1) o$1 = "<remove></remove>" + o$1;
		else {
			let B = /* @__PURE__ */ Yi(o$1, /^[\r\n\t ]+/);
			u$1 = B && B[0];
		}
		Ft$1 === "application/xhtml+xml" && pt$1 === V$1 && (o$1 = "<html xmlns=\"http://www.w3.org/1999/xhtml\"><head></head><body>" + o$1 + "</body></html>");
		let y = M ? M.createHTML(o$1) : o$1;
		if (pt$1 === V$1) try {
			n$1 = /* @__PURE__ */ new nt$1().parseFromString(y, Ft$1);
		} catch {}
		if (!n$1 || !n$1.documentElement) {
			n$1 = /* @__PURE__ */ he$1.createDocument(pt$1, "template", null);
			try {
				n$1.documentElement.innerHTML = ye$1 ? kt : y;
			} catch {}
		}
		let w = n$1.body || n$1.documentElement;
		return o$1 && u$1 && w.insertBefore(/* @__PURE__ */ i.createTextNode(u$1), w.childNodes[0] || null), pt$1 === V$1 ? fr.call(n$1, st ? "html" : "body")[0] : st ? n$1.documentElement : w;
	}, "_initDocument"), di$1 = /* @__PURE__ */ m(function(o$1) {
		return Cr$1.call(o$1.ownerDocument || o$1, o$1, A.SHOW_ELEMENT | A.SHOW_COMMENT | A.SHOW_TEXT | A.SHOW_PROCESSING_INSTRUCTION | A.SHOW_CDATA_SECTION, null);
	}, "_createNodeIterator"), ke$1 = /* @__PURE__ */ m(function(o$1) {
		return o$1 instanceof bt$1 && (typeof o$1.nodeName != "string" || typeof o$1.textContent != "string" || typeof o$1.removeChild != "function" || !(o$1.attributes instanceof H$1) || typeof o$1.removeAttribute != "function" || typeof o$1.setAttribute != "function" || typeof o$1.namespaceURI != "string" || typeof o$1.insertBefore != "function" || typeof o$1.hasChildNodes != "function");
	}, "_isClobbered"), gi$1 = /* @__PURE__ */ m(function(o$1) {
		return typeof x == "function" && o$1 instanceof x;
	}, "_isNode");
	function Y(C, o$1, n$1) {
		ee(C, (u$1) => {
			u$1.call(t, o$1, n$1, ft);
		});
	}
	m(Y, "_executeHooks");
	let ui$1 = /* @__PURE__ */ m(function(o$1) {
		let n$1 = null;
		if (Y(I.beforeSanitizeElements, o$1, null), ke$1(o$1)) return j$1(o$1), !0;
		let u$1 = /* @__PURE__ */ _(o$1.nodeName);
		if (Y(I.uponSanitizeElement, o$1, {
			tagName: u$1,
			allowedTags: L$1
		}), Rt$1 && o$1.hasChildNodes() && !gi$1(o$1.firstElementChild) && q(/<[/\w!]/g, o$1.innerHTML) && q(/<[/\w!]/g, o$1.textContent) || o$1.nodeType === qt.progressingInstruction || Rt$1 && o$1.nodeType === qt.comment && q(/<[/\w]/g, o$1.data)) return j$1(o$1), !0;
		if (!L$1[u$1] || Bt$1[u$1]) {
			if (!Bt$1[u$1] && Ci$1(u$1) && (b.tagNameCheck instanceof RegExp && q(b.tagNameCheck, u$1) || b.tagNameCheck instanceof Function && b.tagNameCheck(u$1))) return !1;
			if (fe$1 && !Ct$1[u$1]) {
				let y = dt(o$1) || o$1.parentNode, w = ne$1(o$1) || o$1.childNodes;
				if (w && y) {
					let B = w.length;
					for (let W = B - 1; W >= 0; --W) {
						let X = /* @__PURE__ */ ct$1(w[W], !0);
						X.__removalCount = (o$1.__removalCount || 0) + 1, y.insertBefore(X, /* @__PURE__ */ le$1(o$1));
					}
				}
			}
			return j$1(o$1), !0;
		}
		return o$1 instanceof E && !Ar$1(o$1) || (u$1 === "noscript" || u$1 === "noembed" || u$1 === "noframes") && q(/<\/no(script|embed|frames)/i, o$1.innerHTML) ? (j$1(o$1), !0) : (gt$1 && o$1.nodeType === qt.text && (n$1 = o$1.textContent, ee([
			ce$1,
			de$1,
			ge$1
		], (y) => {
			n$1 = /* @__PURE__ */ wt(n$1, y, " ");
		}), o$1.textContent !== n$1 && (vt(t.removed, { element: /* @__PURE__ */ o$1.cloneNode() }), o$1.textContent = n$1)), Y(I.afterSanitizeElements, o$1, null), !1);
	}, "_sanitizeElements"), mi$1 = /* @__PURE__ */ m(function(o$1, n$1, u$1) {
		if (ei$1 && (n$1 === "id" || n$1 === "name") && (u$1 in i || u$1 in Er$1)) return !1;
		if (!(me$1 && !ue$1[n$1] && q(yr$1, n$1))) {
			if (!(Je$1 && q(br$1, n$1))) {
				if (!O[n$1] || ue$1[n$1]) {
					if (!(Ci$1(o$1) && (b.tagNameCheck instanceof RegExp && q(b.tagNameCheck, o$1) || b.tagNameCheck instanceof Function && b.tagNameCheck(o$1)) && (b.attributeNameCheck instanceof RegExp && q(b.attributeNameCheck, n$1) || b.attributeNameCheck instanceof Function && b.attributeNameCheck(n$1)) || n$1 === "is" && b.allowCustomizedBuiltInElements && (b.tagNameCheck instanceof RegExp && q(b.tagNameCheck, u$1) || b.tagNameCheck instanceof Function && b.tagNameCheck(u$1)))) return !1;
				} else if (!xe$1[n$1]) {
					if (!q(Xe$1, /* @__PURE__ */ wt(u$1, Ye$1, ""))) {
						if (!((n$1 === "src" || n$1 === "xlink:href" || n$1 === "href") && o$1 !== "script" && so(u$1, "data:") === 0 && oi$1[o$1])) {
							if (!(Qe$1 && !q(Tr$1, /* @__PURE__ */ wt(u$1, Ye$1, "")))) {
								if (u$1) return !1;
							}
						}
					}
				}
			}
		}
		return !0;
	}, "_isValidAttribute"), Ci$1 = /* @__PURE__ */ m(function(o$1) {
		return o$1 !== "annotation-xml" && Yi(o$1, kr$1);
	}, "_isBasicCustomElement"), pi$1 = /* @__PURE__ */ m(function(o$1) {
		Y(I.beforeSanitizeAttributes, o$1, null);
		let { attributes: n$1 } = o$1;
		if (!n$1 || ke$1(o$1)) return;
		let u$1 = {
			attrName: "",
			attrValue: "",
			keepAttr: !0,
			allowedAttributes: O,
			forceKeepAttr: void 0
		}, y = n$1.length;
		for (; y--;) {
			let { name: B, namespaceURI: W, value: X } = n$1[y], Lt$1 = /* @__PURE__ */ _(B), Be$1 = X, D = B === "value" ? Be$1 : ao(Be$1);
			if (u$1.attrName = Lt$1, u$1.attrValue = D, u$1.keepAttr = !0, u$1.forceKeepAttr = void 0, Y(I.uponSanitizeAttribute, o$1, u$1), D = u$1.attrValue, ii$1 && (Lt$1 === "id" || Lt$1 === "name") && (xt$1(B, o$1), D = Br$1 + D), Rt$1 && q(/((--!?|])>)|<\/(style|title)/i, D)) {
				xt$1(B, o$1);
				continue;
			}
			if (u$1.forceKeepAttr) continue;
			if (!u$1.keepAttr) {
				xt$1(B, o$1);
				continue;
			}
			if (!ti$1 && q(/\/>/i, D)) {
				xt$1(B, o$1);
				continue;
			}
			gt$1 && ee([
				ce$1,
				de$1,
				ge$1
			], (xi$1) => {
				D = /* @__PURE__ */ wt(D, xi$1, " ");
			});
			let fi$1 = /* @__PURE__ */ _(o$1.nodeName);
			if (!mi$1(fi$1, Lt$1, D)) {
				xt$1(B, o$1);
				continue;
			}
			if (M && typeof Q == "object" && typeof Q.getAttributeType == "function" && !W) switch (Q.getAttributeType(fi$1, Lt$1)) {
				case "TrustedHTML":
					D = /* @__PURE__ */ M.createHTML(D);
					break;
				case "TrustedScriptURL":
					D = /* @__PURE__ */ M.createScriptURL(D);
					break;
			}
			if (D !== Be$1) try {
				W ? o$1.setAttributeNS(W, B, D) : o$1.setAttribute(B, D), ke$1(o$1) ? j$1(o$1) : Vi(t.removed);
			} catch {
				xt$1(B, o$1);
			}
		}
		Y(I.afterSanitizeAttributes, o$1, null);
	}, "_sanitizeAttributes"), Mr$1 = /* @__PURE__ */ m(function C(o$1) {
		let n$1 = null, u$1 = /* @__PURE__ */ di$1(o$1);
		for (Y(I.beforeSanitizeShadowDOM, o$1, null); n$1 = /* @__PURE__ */ u$1.nextNode();) Y(I.uponSanitizeShadowNode, n$1, null), ui$1(n$1), pi$1(n$1), n$1.content instanceof d$1 && C(n$1.content);
		Y(I.afterSanitizeShadowDOM, o$1, null);
	}, "_sanitizeShadowDOM");
	return t.sanitize = function(C) {
		let o$1 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n$1 = null, u$1 = null, y = null, w = null;
		if (ye$1 = !C, ye$1 && (C = "<!-->"), typeof C != "string" && !gi$1(C)) if (typeof C.toString == "function") {
			if (C = /* @__PURE__ */ C.toString(), typeof C != "string") throw Dt("dirty is not a string, aborting");
		} else throw Dt("toString is not a function");
		if (!t.isSupported) return C;
		if (Ce$1 || Te$1(o$1), t.removed = [], typeof C == "string" && (St$1 = !1), St$1) {
			if (C.nodeName) {
				let X = /* @__PURE__ */ _(C.nodeName);
				if (!L$1[X] || Bt$1[X]) throw Dt("root node is forbidden and cannot be sanitized in-place");
			}
		} else if (C instanceof x) n$1 = /* @__PURE__ */ ci$1("<!---->"), u$1 = /* @__PURE__ */ n$1.ownerDocument.importNode(C, !0), u$1.nodeType === qt.element && u$1.nodeName === "BODY" || u$1.nodeName === "HTML" ? n$1 = u$1 : n$1.appendChild(u$1);
		else {
			if (!ut && !gt$1 && !st && C.indexOf("<") === -1) return M && Pt$1 ? M.createHTML(C) : C;
			if (n$1 = /* @__PURE__ */ ci$1(C), !n$1) return ut ? null : Pt$1 ? kt : "";
		}
		n$1 && pe$1 && j$1(n$1.firstChild);
		let B = /* @__PURE__ */ di$1(St$1 ? C : n$1);
		for (; y = /* @__PURE__ */ B.nextNode();) ui$1(y), pi$1(y), y.content instanceof d$1 && Mr$1(y.content);
		if (St$1) return C;
		if (ut) {
			if (Wt) for (w = /* @__PURE__ */ pr$1.call(n$1.ownerDocument); n$1.firstChild;) w.appendChild(n$1.firstChild);
			else w = n$1;
			return (O.shadowroot || O.shadowrootmode) && (w = /* @__PURE__ */ xr$1.call(s, w, !0)), w;
		}
		let W = st ? n$1.outerHTML : n$1.innerHTML;
		return st && L$1["!doctype"] && n$1.ownerDocument && n$1.ownerDocument.doctype && n$1.ownerDocument.doctype.name && q(or, n$1.ownerDocument.doctype.name) && (W = "<!DOCTYPE " + n$1.ownerDocument.doctype.name + `>
` + W), gt$1 && ee([
			ce$1,
			de$1,
			ge$1
		], (X) => {
			W = /* @__PURE__ */ wt(W, X, " ");
		}), M && Pt$1 ? M.createHTML(W) : W;
	}, t.setConfig = function() {
		let C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		Te$1(C), Ce$1 = !0;
	}, t.clearConfig = function() {
		ft = null, Ce$1 = !1;
	}, t.isValidAttribute = function(C, o$1, n$1) {
		ft || Te$1({});
		return mi$1(/* @__PURE__ */ _(C), /* @__PURE__ */ _(o$1), n$1);
	}, t.addHook = function(C, o$1) {
		typeof o$1 == "function" && vt(I[C], o$1);
	}, t.removeHook = function(C, o$1) {
		if (o$1 !== void 0) {
			let n$1 = /* @__PURE__ */ ro(I[C], o$1);
			return n$1 === -1 ? void 0 : oo(I[C], n$1, 1)[0];
		}
		return Vi(I[C]);
	}, t.removeHooks = function(C) {
		I[C] = [];
	}, t.removeAllHooks = function() {
		I = /* @__PURE__ */ tr();
	}, t;
}
m(sr, "createDOMPurify");
var yt = /* @__PURE__ */ sr();
var zt = /<br\s*\/?>/gi, ko = /* @__PURE__ */ m((e) => e ? cr(e).replace(/\\n/g, "#br#").split("#br#") : [""], "getRows"), Bo = /* @__PURE__ */ (() => {
	let e = !1;
	return () => {
		e || (So(), e = !0);
	};
})();
function So() {
	let e = "data-temp-href-target";
	yt.addHook("beforeSanitizeAttributes", (t) => {
		t.tagName === "A" && t.hasAttribute("target") && t.setAttribute(e, t.getAttribute("target") ?? "");
	}), yt.addHook("afterSanitizeAttributes", (t) => {
		t.tagName === "A" && t.hasAttribute(e) && (t.setAttribute("target", t.getAttribute(e) ?? ""), t.removeAttribute(e), t.getAttribute("target") === "_blank" && t.setAttribute("rel", "noopener"));
	});
}
m(So, "setupDompurifyHooks");
var hr = /* @__PURE__ */ m((e) => (Bo(), yt.sanitize(e)), "removeScript"), ar = /* @__PURE__ */ m((e, t) => {
	if (t.flowchart?.htmlLabels !== !1) {
		let i = t.securityLevel;
		i === "antiscript" || i === "strict" ? e = /* @__PURE__ */ hr(e) : i !== "loose" && (e = /* @__PURE__ */ cr(e), e = /* @__PURE__ */ e.replace(/</g, "&lt;").replace(/>/g, "&gt;"), e = /* @__PURE__ */ e.replace(/=/g, "&equals;"), e = /* @__PURE__ */ Eo(e));
	}
	return e;
}, "sanitizeMore"), ot = /* @__PURE__ */ m((e, t) => e && (t.dompurifyConfig ? e = /* @__PURE__ */ yt.sanitize(/* @__PURE__ */ ar(e, t), t.dompurifyConfig).toString() : e = /* @__PURE__ */ yt.sanitize(/* @__PURE__ */ ar(e, t), { FORBID_TAGS: ["style"] }).toString(), e), "sanitizeText"), Fo = /* @__PURE__ */ m((e, t) => typeof e == "string" ? ot(e, t) : e.flat().map((i) => ot(i, t)), "sanitizeTextOrArray"), Lo = /* @__PURE__ */ m((e) => zt.test(e), "hasBreaks"), _o = /* @__PURE__ */ m((e) => e.split(zt), "splitBreaks"), Eo = /* @__PURE__ */ m((e) => e.replace(/#br#/g, "<br/>"), "placeholderToBreak"), cr = /* @__PURE__ */ m((e) => e.replace(zt, "#br#"), "breakToPlaceholder"), Ao = /* @__PURE__ */ m((e) => {
	let t = "";
	return e && (t = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, t = /* @__PURE__ */ CSS.escape(t)), t;
}, "getUrl"), Mo = /* @__PURE__ */ m((e) => !(e === !1 || [
	"false",
	"null",
	"0"
].includes(/* @__PURE__ */ String(e).trim().toLowerCase())), "evaluate"), Oo = /* @__PURE__ */ m(function(...e) {
	let t = /* @__PURE__ */ e.filter((i) => !isNaN(i));
	return Math.max(...t);
}, "getMax"), vo = /* @__PURE__ */ m(function(...e) {
	let t = /* @__PURE__ */ e.filter((i) => !isNaN(i));
	return Math.min(...t);
}, "getMin"), ln = /* @__PURE__ */ m(function(e) {
	let t = /* @__PURE__ */ e.split(/(,)/), i = [];
	for (let s = 0; s < t.length; s++) {
		let l = t[s];
		if (l === "," && s > 0 && s + 1 < t.length) {
			let d$1 = t[s - 1], f = t[s + 1];
			wo(d$1, f) && (l = d$1 + "," + f, s++, i.pop());
		}
		i.push(/* @__PURE__ */ Do(l));
	}
	return i.join("");
}, "parseGenericTypes"), Ne = /* @__PURE__ */ m((e, t) => Math.max(0, e.split(t).length - 1), "countOccurrence"), wo = /* @__PURE__ */ m((e, t) => {
	return /* @__PURE__ */ Ne(e, "~") === 1 && /* @__PURE__ */ Ne(t, "~") === 1;
}, "shouldCombineSets"), Do = /* @__PURE__ */ m((e) => {
	let t = /* @__PURE__ */ Ne(e, "~"), i = !1;
	if (t <= 1) return e;
	t % 2 !== 0 && e.startsWith("~") && (e = /* @__PURE__ */ e.substring(1), i = !0);
	let s = [...e], l = /* @__PURE__ */ s.indexOf("~"), d$1 = /* @__PURE__ */ s.lastIndexOf("~");
	for (; l !== -1 && d$1 !== -1 && l !== d$1;) s[l] = "<", s[d$1] = ">", l = /* @__PURE__ */ s.indexOf("~"), d$1 = /* @__PURE__ */ s.lastIndexOf("~");
	return i && s.unshift("~"), s.join("");
}, "processSet"), lr = /* @__PURE__ */ m(() => window.MathMLElement !== void 0, "isMathMLSupported"), oe = /\$\$(.*)\$\$/g, nr = /* @__PURE__ */ m((e) => (e.match(oe)?.length ?? 0) > 0, "hasKatex"), nn = /* @__PURE__ */ m(async (e, t) => {
	let i = /* @__PURE__ */ document.createElement("div");
	i.innerHTML = await qo(e, t), i.id = "katex-temp", i.style.visibility = "hidden", i.style.position = "absolute", i.style.top = "0", document.querySelector("body")?.insertAdjacentElement("beforeend", i);
	let l = {
		width: i.clientWidth,
		height: i.clientHeight
	};
	return i.remove(), l;
}, "calculateMathMLDimensions"), Io = /* @__PURE__ */ m(async (e, t) => {
	if (!nr(e)) return e;
	if (!(lr() || t.legacyMathML || t.forceLegacyMathML)) return e.replace(oe, "MathML is unsupported in this environment.");
	{
		let { default: i } = await __vitePreload(async () => {
			const { default: i$1 } = await import("./vendor-mermaid.46mTL6Bq.chunk.js");
			return { default: i$1 };
		}, __vite__mapDeps([0,1])), s = t.forceLegacyMathML || !lr() && t.legacyMathML ? "htmlAndMathml" : "mathml";
		return e.split(zt).map((l) => nr(l) ? `<div style="display: flex; align-items: center; justify-content: center; white-space: nowrap;">${l}</div>` : `<div>${l}</div>`).join("").replace(oe, (l, d$1) => i.renderToString(d$1, {
			throwOnError: !0,
			displayMode: !0,
			output: s
		}).replace(/\n/g, " ").replace(/<annotation.*<\/annotation>/g, ""));
	}
	return e.replace(oe, "Katex is not supported in @mermaid-js/tiny. Please use the full mermaid library.");
}, "renderKatexUnsanitized"), qo = /* @__PURE__ */ m(async (e, t) => ot(await Io(e, t), t), "renderKatexSanitized"), hn = {
	getRows: ko,
	sanitizeText: ot,
	sanitizeTextOrArray: Fo,
	hasBreaks: Lo,
	splitBreaks: _o,
	lineBreakRegex: zt,
	removeScript: hr,
	getUrl: Ao,
	evaluate: Mo,
	getMax: Oo,
	getMin: vo
};
var zo = /* @__PURE__ */ m(function(e, t) {
	for (let i of t) e.attr(i[0], i[1]);
}, "d3Attrs"), Ro = /* @__PURE__ */ m(function(e, t, i) {
	let s = /* @__PURE__ */ new Map();
	return i ? (s.set("width", "100%"), s.set("style", `max-width: ${t}px;`)) : (s.set("height", e), s.set("width", t)), s;
}, "calculateSvgSizeAttrs"), Wo = /* @__PURE__ */ m(function(e, t, i, s) {
	zo(e, /* @__PURE__ */ Ro(t, i, s));
}, "configureSvgSize"), dr = /* @__PURE__ */ m(function(e, t, i, s) {
	let l = /* @__PURE__ */ t.node().getBBox(), d$1 = l.width, f = l.height;
	pt.info(`SVG bounds: ${d$1}x${f}`, l);
	let x = 0, E = 0;
	pt.info(`Graph bounds: ${x}x${E}`, e), x = d$1 + i * 2, E = f + i * 2, pt.info(`Calculated bounds: ${x}x${E}`), Wo(t, E, x, s);
	let A = `${l.x - i} ${l.y - i} ${l.width + 2 * i} ${l.height + 2 * i}`;
	t.attr("viewBox", A);
}, "setupGraphViewbox");
var se = {}, Po = /* @__PURE__ */ m((e, t, i) => {
	let s = "";
	return e in se && se[e] ? s = /* @__PURE__ */ se[e](i) : pt.warn(`No theme found for ${e}`), ` & {
    font-family: ${i.fontFamily};
    font-size: ${i.fontSize};
    fill: ${i.textColor}
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
    fill: ${i.errorBkgColor};
  }
  & .error-text {
    fill: ${i.errorTextColor};
    stroke: ${i.errorTextColor};
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
    fill: ${i.lineColor};
    stroke: ${i.lineColor};
  }
  & .marker.cross {
    stroke: ${i.lineColor};
  }

  & svg {
    font-family: ${i.fontFamily};
    font-size: ${i.fontSize};
  }
   & p {
    margin: 0
   }

  ${s}

  ${t}
`;
}, "getStyles"), gr = /* @__PURE__ */ m((e, t) => {
	t !== void 0 && (se[e] = t);
}, "addStylesForDiagram"), pn = Po;
var je = {};
o(je, {
	clear: () => No,
	getAccDescription: () => $o,
	getAccTitle: () => Uo,
	getDiagramTitle: () => Vo,
	setAccDescription: () => Go,
	setAccTitle: () => Ho,
	setDiagramTitle: () => jo
});
var He = "", Ue = "", Ge = "", $e = /* @__PURE__ */ m((e) => ot(e, /* @__PURE__ */ Ot()), "sanitizeText"), No = /* @__PURE__ */ m(() => {
	He = "", Ge = "", Ue = "";
}, "clear"), Ho = /* @__PURE__ */ m((e) => {
	He = /* @__PURE__ */ $e(e).replace(/^\s+/g, "");
}, "setAccTitle"), Uo = /* @__PURE__ */ m(() => He, "getAccTitle"), Go = /* @__PURE__ */ m((e) => {
	Ge = /* @__PURE__ */ $e(e).replace(/\n\s+/g, `
`);
}, "setAccDescription"), $o = /* @__PURE__ */ m(() => Ge, "getAccDescription"), jo = /* @__PURE__ */ m((e) => {
	Ue = /* @__PURE__ */ $e(e);
}, "setDiagramTitle"), Vo = /* @__PURE__ */ m(() => Ue, "getDiagramTitle");
var ur = pt, Yo = Wh, mr = Ot, En = Ui, An = Mt;
var Xo = /* @__PURE__ */ m((e) => ot(e, /* @__PURE__ */ mr()), "sanitizeText"), Ko = dr, Zo = /* @__PURE__ */ m(() => je, "getCommonDb"), ae = {}, Mn = /* @__PURE__ */ m((e, t, i) => {
	ae[e] && ur.warn(`Diagram with id ${e} already registered. Overwriting.`), ae[e] = t, i && Se(e, i), gr(e, t.styles), t.injectUtils?.(ur, Yo, mr, Xo, Ko, Zo(), () => {});
}, "registerDiagram"), On = /* @__PURE__ */ m((e) => {
	if (e in ae) return ae[e];
	throw new Ve(e);
}, "getDiagram"), Ve = class extends Error {
	static {
		m(this, "DiagramNotFoundError");
	}
	constructor(t) {
		super(`Diagram ${t} not found.`);
	}
};
var u = /* @__PURE__ */ m((t) => {
	let { handDrawnSeed: s } = mr();
	return {
		fill: t,
		hachureAngle: 120,
		hachureGap: 4,
		fillWeight: 2,
		roughness: .7,
		stroke: t,
		seed: s
	};
}, "solidStateFill"), p = /* @__PURE__ */ m((t) => {
	let s = /* @__PURE__ */ h([
		...t.cssCompiledStyles || [],
		...t.cssStyles || [],
		...t.labelStyle || []
	]);
	return {
		stylesMap: s,
		stylesArray: [...s]
	};
}, "compileStyles"), h = /* @__PURE__ */ m((t) => {
	let s = /* @__PURE__ */ new Map();
	return t.forEach((o$1) => {
		let [n$1, r] = o$1.split(":");
		s.set(/* @__PURE__ */ n$1.trim(), r?.trim());
	}), s;
}, "styles2Map"), g = /* @__PURE__ */ m((t) => t === "color" || t === "font-size" || t === "font-family" || t === "font-weight" || t === "font-style" || t === "text-decoration" || t === "text-align" || t === "text-transform" || t === "line-height" || t === "letter-spacing" || t === "word-spacing" || t === "text-shadow" || t === "text-overflow" || t === "white-space" || t === "word-wrap" || t === "word-break" || t === "overflow-wrap" || t === "hyphens", "isLabelStyle"), m$1 = /* @__PURE__ */ m((t) => {
	let { stylesArray: s } = p(t), o$1 = [], n$1 = [], r = [], l = [];
	return s.forEach((e) => {
		let a$1 = e[0];
		g(a$1) ? o$1.push(e.join(":") + " !important") : (n$1.push(e.join(":") + " !important"), a$1.includes("stroke") && r.push(e.join(":") + " !important"), a$1 === "fill" && l.push(e.join(":") + " !important"));
	}), {
		labelStyles: /* @__PURE__ */ o$1.join(";"),
		nodeStyles: /* @__PURE__ */ n$1.join(";"),
		stylesArray: s,
		borderStyles: r,
		backgroundStyles: l
	};
}, "styles2String"), S = /* @__PURE__ */ m((t, s) => {
	let { themeVariables: o$1, handDrawnSeed: n$1 } = mr(), { nodeBorder: r, mainBkg: l } = o$1, { stylesMap: e } = p(t);
	return Object.assign({
		roughness: .7,
		fill: e.get("fill") || l,
		fillStyle: "hachure",
		fillWeight: 4,
		hachureGap: 5.2,
		stroke: e.get("stroke") || r,
		seed: n$1,
		strokeWidth: e.get("stroke-width")?.replace("px", "") || 1.3,
		fillLineDash: [0, 0],
		strokeLineDash: /* @__PURE__ */ d(/* @__PURE__ */ e.get("stroke-dasharray"))
	}, s);
}, "userNodeOverrides"), d = /* @__PURE__ */ m((t) => {
	if (!t) return [0, 0];
	let s = /* @__PURE__ */ t.trim().split(/\s+/).map(Number);
	if (s.length === 1) {
		let r = isNaN(s[0]) ? 0 : s[0];
		return [r, r];
	}
	let o$1 = isNaN(s[0]) ? 0 : s[0], n$1 = isNaN(s[1]) ? 0 : s[1];
	return [o$1, n$1];
}, "getStrokeDashArray");
export { pn as $, pt as $t, Uo as A, Tt as At, c as B, Xa as Bt, On as C, Lc as Ct, Ti as D, Qs as Dt, Ql as E, Qc as Et, Z as F, Vo$1 as Ft, jo as G, Zs as Gt, g$1 as H, Yf as Ht, Zl as I, Wa as It, mr as J, jt$1 as Jt, jt as K, be as Kt, Zr as L, Wc as Lt, Wo as M, Va as Mt, Xl as N, Vc as Nt, U as O, Rs as Ot, Xo as P, Vn as Pt, ot as Q, oo$1 as Qt, as as R, Wh as Rt, No as S, Kc as St, Pr as T, Pn as Tt, hn as U, Zc as Ut, dr as V, Xc as Vt, je as W, Zi$1 as Wt, nr as X, ks as Xt, nn as Y, ke as Yt, os as Z, ku as Zt, Ko as _, Gc as _t, u as a, zs as an, yt as at, Mt as b, Hn as bt, An as c, $n as ct, Go as d, As as dt, qa as en, qo as et, Ho as f, Bc as ft, Kl as g, Es as gt, Jt as h, Dt$1 as ht, p as i, zc as in, v as it, Vo as j, Ua as jt, Ui as k, Su as kt, Ao as l, $s as lt, Jl as m, Ds as mt, g as n, vs as nn, ss as nt, $o as o, zt$1 as on, zt as ot, Ii as p, Bo$1 as pt, ln as q, ia as qt, m$1 as r, we$1 as rn, tn as rt, $t as s, __vitePreload as sn, $c as st, S as t, qc as tn, rt as tt, En as u, $t$1 as ut, Mn as v, Hc as vt, Ot as w, Me$1 as wt, Ni as x, Jc as xt, Mo as y, He$1 as yt, bi as z, Wo$1 as zt };
