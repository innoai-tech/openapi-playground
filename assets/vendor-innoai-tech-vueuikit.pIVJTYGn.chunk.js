let e;
import { $ as t, B as r, H as n, J as a, K as i, L as o, M as s, N as l, P as u, Q as c, U as f, V as d, W as h, X as m, Y as g, Z as p, et as b, j as y, q as v, tt as x, z as w } from "./vendor-innoai-tech-fetcher.BFkhBuB3.chunk.js";
import { $ as C, A as k, At as P, B as M, Bt as S, C as _, Ct as A, Et as T, Ft as R, G as O, Gt as D, H as $, Ht as I, It as L, J as F, K as E, Kt as j, Lt as B, Mt as V, Nt as H, Ot as N, Pt as z, Q as W, Rt as U, S as q, Tt as G, U as Y, Ut as K, V as X, Vt as J, W as Z, Wt as Q, Y as ee, _t as et, at as er, bt as en, c as ea, ct as ei, d as eo, dt as es, et as el, f as eu, ft as ec, gt as ef, ht as ed, i as eh, it as em, jt as eg, kt as ep, lt as eb, m as ey, mt as ev, n as ex, nt as ew, o as eC, ot as ek, pt as eP, q as eM, rt as eS, s as e_, st as eA, t as eT, tt as eR, u as eO, ut as eD, vt as e$, x as eI, z as eL, zt as eF } from "./vendor-innoai-tech-vuekit.D5qvH0e4.chunk.js";
import { u as eE } from "./vendor-rxjs.nCW51blg.chunk.js";
var ej, eB, eV, eH, eN, ez, eW, eU, eq, eG, eY, eK = /\s/, eX = function(e) {
	for (var t = e.length; t-- && eK.test(e.charAt(t)););
	return t;
}, eJ = /^\s+/, eZ = NaN, eQ = /^[-+]0x[0-9a-f]+$/i, e0 = /^0b[01]+$/i, e1 = /^0o[0-7]+$/i, e2 = parseInt, e4 = function(e) {
	if ("number" == typeof e) return e;
	if (j(e)) return eZ;
	if (m(e)) {
		var t, r = "function" == typeof e.valueOf ? e.valueOf() : e;
		e = m(r) ? r + "" : r;
	}
	if ("string" != typeof e) return 0 === e ? e : +e;
	e = (t = e) ? t.slice(0, eX(t) + 1).replace(eJ, "") : t;
	var n = e0.test(e);
	return n || e1.test(e) ? e2(e.slice(2), n ? 2 : 8) : eQ.test(e) ? eZ : +e;
}, e5 = Infinity, e3 = function(e) {
	var t, r = (t = e) ? (t = e4(t)) === e5 || t === -e5 ? (t < 0 ? -1 : 1) * 17976931348623157e292 : t == t ? t : 0 : 0 === t ? t : 0, n = r % 1;
	return r == r ? n ? r - n : r : 0;
}, e8 = Object.create, e6 = function() {
	function e() {}
	return function(t) {
		if (!m(t)) return {};
		if (e8) return e8(t);
		e.prototype = t;
		var r = new e();
		return e.prototype = void 0, r;
	};
}(), e9 = function(e, t, r) {
	switch (r.length) {
		case 0: return e.call(t);
		case 1: return e.call(t, r[0]);
		case 2: return e.call(t, r[0], r[1]);
		case 3: return e.call(t, r[0], r[1], r[2]);
	}
	return e.apply(t, r);
}, e7 = function(e, t) {
	var r = -1, n = e.length;
	for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
	return t;
}, te = Date.now, tt = function() {
	try {
		var e = K(Object, "defineProperty");
		return e({}, "", {}), e;
	} catch (e) {}
}(), tr = (ej = tt ? function(e, t) {
	return tt(e, "toString", {
		configurable: !0,
		enumerable: !1,
		value: function() {
			return t;
		},
		writable: !0
	});
} : g, eB = 0, eV = 0, function() {
	var e = te(), t = 16 - (e - eV);
	if (eV = e, t > 0) {
		if (++eB >= 800) return arguments[0];
	} else eB = 0;
	return ej.apply(void 0, arguments);
}), tn = function(e, t, r) {
	"__proto__" == t && tt ? tt(e, t, {
		configurable: !0,
		enumerable: !0,
		value: r,
		writable: !0
	}) : e[t] = r;
}, ta = Object.prototype.hasOwnProperty, ti = function(e, t, r) {
	var n = e[t];
	ta.call(e, t) && I(n, r) && (void 0 !== r || t in e) || tn(e, t, r);
}, to = function(e, t, r, n) {
	var a = !r;
	r || (r = {});
	for (var i = -1, o = t.length; ++i < o;) {
		var s = t[i], l = n ? n(r[s], e[s], s, r, e) : void 0;
		void 0 === l && (l = e[s]), a ? tn(r, s, l) : ti(r, s, l);
	}
	return r;
}, ts = Math.max, tl = function(e, t, r) {
	if (!m(r)) return !1;
	var n = typeof t;
	return ("number" == n ? !!(h(r) && i(t, r.length)) : "string" == n && t in r) && I(r[t], e);
}, tu = function(e) {
	var t = [];
	if (null != e) for (var r in Object(e)) t.push(r);
	return t;
}, tc = Object.prototype.hasOwnProperty, tf = function(e) {
	if (!m(e)) return tu(e);
	var t = f(e), r = [];
	for (var n in e) "constructor" == n && (t || !tc.call(e, n)) || r.push(n);
	return r;
}, td = function(e) {
	return h(e) ? o(e, !0) : tf(e);
}, th = b ? b.isConcatSpreadable : void 0, tm = function(e) {
	return p(e) || n(e) || !!(th && e && e[th]);
}, tg = function e(t, r, n, a, i) {
	var o = -1, s = t.length;
	for (n || (n = tm), i || (i = []); ++o < s;) {
		var l = t[o];
		r > 0 && n(l) ? r > 1 ? e(l, r - 1, n, a, i) : L(i, l) : a || (i[i.length] = l);
	}
	return i;
}, tp = function(e) {
	return (null == e ? 0 : e.length) ? tg(e, 1) : [];
}, tb = function(e) {
	var t;
	return tr((t = ts((t = void 0, e.length - 1), 0), function() {
		for (var r = arguments, n = -1, a = ts(r.length - t, 0), i = Array(a); ++n < a;) i[n] = r[t + n];
		n = -1;
		for (var o = Array(t + 1); ++n < t;) o[n] = r[n];
		return o[t] = tp(i), e9(e, this, o);
	}), e + "");
}, ty = function(e, t, r) {
	var n = -1, a = e.length;
	t < 0 && (t = -t > a ? 0 : a + t), (r = r > a ? a : r) < 0 && (r += a), a = t > r ? 0 : r - t >>> 0, t >>>= 0;
	for (var i = Array(a); ++n < a;) i[n] = e[n + t];
	return i;
}, tv = function(e, t, r) {
	var n = e.length;
	return r = void 0 === r ? n : r, !t && r >= n ? e : ty(e, t, r);
}, tx = RegExp("[\\u200d\ud800-\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"), tw = function(e) {
	return tx.test(e);
}, tC = "\ud800-\udfff", tk = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", tP = "\ud83c[\udffb-\udfff]", tM = "[^" + tC + "]", tS = "(?:\ud83c[\udde6-\uddff]){2}", t_ = "[\ud800-\udbff][\udc00-\udfff]", tA = "(?:" + tk + "|" + tP + ")?", tT = "[\\ufe0e\\ufe0f]?", tR = "(?:\\u200d(?:" + [
	tM,
	tS,
	t_
].join("|") + ")" + tT + tA + ")*", tO = RegExp(tP + "(?=" + tP + ")|" + ("(?:" + [
	tM + tk + "?",
	tk,
	tS,
	t_,
	"[" + tC + "]"
].join("|")) + ")" + (tT + tA + tR), "g"), tD = function(e) {
	return tw(e) ? e.match(tO) || [] : e.split("");
}, t$ = function(e) {
	var t = tw(e = J(e)) ? tD(e) : void 0, r = t ? t[0] : e.charAt(0), n = t ? tv(t, 1).join("") : e.slice(1);
	return r.toUpperCase() + n;
}, tI = H(function(e, t, r) {
	return t = t.toLowerCase(), e + (r ? t$(J(t).toLowerCase()) : t);
}), tL = "object" == typeof exports && exports && !exports.nodeType && exports, tF = tL && "object" == typeof module && module && !module.nodeType && module, tE = tF && tF.exports === tL ? x.Buffer : void 0, tj = tE ? tE.allocUnsafe : void 0, tB = function(e, t) {
	if (t) return e.slice();
	var r = e.length, n = tj ? tj(r) : new e.constructor(r);
	return e.copy(n), n;
}, tV = Object.getOwnPropertySymbols ? function(e) {
	for (var t = []; e;) L(t, P(e)), e = R(e);
	return t;
} : eg, tH = function(e) {
	return ep(e, td, tV);
}, tN = Object.prototype.hasOwnProperty, tz = function(e) {
	var t = e.length, r = new e.constructor(t);
	return t && "string" == typeof e[0] && tN.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}, tW = function(e) {
	var t = new e.constructor(e.byteLength);
	return new G(t).set(new G(e)), t;
}, tU = function(e, t) {
	var r = t ? tW(e.buffer) : e.buffer;
	return new e.constructor(r, e.byteOffset, e.byteLength);
}, tq = /\w*$/, tG = function(e) {
	var t = new e.constructor(e.source, tq.exec(e));
	return t.lastIndex = e.lastIndex, t;
}, tY = b ? b.prototype : void 0, tK = tY ? tY.valueOf : void 0, tX = function(e, t) {
	var r = t ? tW(e.buffer) : e.buffer;
	return new e.constructor(r, e.byteOffset, e.length);
}, tJ = function(e, t, r) {
	var n = e.constructor;
	switch (t) {
		case "[object ArrayBuffer]": return tW(e);
		case "[object Boolean]":
		case "[object Date]": return new n(+e);
		case "[object DataView]": return tU(e, r);
		case "[object Float32Array]":
		case "[object Float64Array]":
		case "[object Int8Array]":
		case "[object Int16Array]":
		case "[object Int32Array]":
		case "[object Uint8Array]":
		case "[object Uint8ClampedArray]":
		case "[object Uint16Array]":
		case "[object Uint32Array]": return tX(e, r);
		case "[object Map]":
		case "[object Set]": return new n();
		case "[object Number]":
		case "[object String]": return new n(e);
		case "[object RegExp]": return tG(e);
		case "[object Symbol]": return tK ? Object(tK.call(e)) : {};
	}
}, tZ = w && w.isMap, tQ = tZ ? r(tZ) : function(e) {
	return c(e) && "[object Map]" == T(e);
}, t0 = w && w.isSet, t1 = t0 ? r(t0) : function(e) {
	return c(e) && "[object Set]" == T(e);
}, t2 = "[object Arguments]", t4 = "[object Function]", t5 = "[object Object]", t3 = {};
t3[t2] = t3["[object Array]"] = t3["[object ArrayBuffer]"] = t3["[object DataView]"] = t3["[object Boolean]"] = t3["[object Date]"] = t3["[object Float32Array]"] = t3["[object Float64Array]"] = t3["[object Int8Array]"] = t3["[object Int16Array]"] = t3["[object Int32Array]"] = t3["[object Map]"] = t3["[object Number]"] = t3[t5] = t3["[object RegExp]"] = t3["[object Set]"] = t3["[object String]"] = t3["[object Symbol]"] = t3["[object Uint8Array]"] = t3["[object Uint8ClampedArray]"] = t3["[object Uint16Array]"] = t3["[object Uint32Array]"] = !0, t3["[object Error]"] = t3[t4] = t3["[object WeakMap]"] = !1;
var t8 = function e(t, r, n, a, i, o) {
	var s, l = 1 & r, c = 2 & r, h = 4 & r;
	if (n && (s = i ? n(t, a, i, o) : n(t)), void 0 !== s) return s;
	if (!m(t)) return t;
	var g = p(t);
	if (g) {
		if (s = tz(t), !l) return e7(t, s);
	} else {
		var b, y, x, w, C, k = T(t), M = k == t4 || "[object GeneratorFunction]" == k;
		if (d(t)) return tB(t, l);
		if (k == t5 || k == t2 || M && !i) {
			if (s = c || M || "function" != typeof (b = t).constructor || f(b) ? {} : e6(R(b)), !l) return c ? (x = (y = s) && to(t, td(t), y), to(t, tV(t), x)) : (C = (w = s) && to(t, u(t), w), to(t, P(t), C));
		} else {
			if (!t3[k]) return i ? t : {};
			s = tJ(t, k, l);
		}
	}
	o || (o = new V());
	var S = o.get(t);
	if (S) return S;
	o.set(t, s), t1(t) ? t.forEach(function(a) {
		s.add(e(a, r, n, a, t, o));
	}) : tQ(t) && t.forEach(function(a, i) {
		s.set(i, e(a, r, n, i, t, o));
	});
	var _ = g ? void 0 : (h ? c ? tH : N : c ? td : u)(t);
	return v(_ || t, function(a, i) {
		_ && (a = t[i = a]), ti(s, i, e(a, r, n, i, t, o));
	}), s;
}, t6 = function(e) {
	var t = null == e ? 0 : e.length;
	return t ? e[t - 1] : void 0;
}, t9 = Object.prototype.hasOwnProperty, t7 = function(e, t) {
	return null != e && t9.call(e, t);
}, re = function(e, t) {
	return null != e && en(e, t, t7);
}, rt = function(e) {
	return "string" == typeof e || !p(e) && c(e) && "[object String]" == t(e);
}, rr = function(e) {
	return "number" == typeof e || c(e) && "[object Number]" == t(e);
}, rn = function(e, t) {
	var r = {};
	return t = et(t, 3), l(e, function(e, n, a) {
		tn(r, n, t(e, n, a));
	}), r;
}, ra = function(e, t) {
	var r, n;
	return t = S(t, e), r = e, null == (e = (n = t).length < 2 ? r : U(r, ty(n, 0, -1))) || delete e[eF(t6(t))];
}, ri = function(e) {
	return z(e) ? void 0 : e;
}, ro = tb(function(e, t) {
	var r = {};
	if (null == e) return r;
	var n = !1;
	t = D(t, function(t) {
		return t = S(t, e), n || (n = t.length > 1), t;
	}), to(e, tH(e), r), n && (r = t8(r, 7, ri));
	for (var a = t.length; a--;) ra(r, t[a]);
	return r;
}), rs = function(e, t, r, n) {
	if (!m(e)) return e;
	t = S(t, e);
	for (var a = -1, o = t.length, s = o - 1, l = e; null != l && ++a < o;) {
		var u = eF(t[a]), c = r;
		if ("__proto__" === u || "constructor" === u || "prototype" === u) break;
		if (a != s) {
			var f = l[u];
			void 0 === (c = n ? n(f, u, l) : void 0) && (c = m(f) ? f : i(t[a + 1]) ? [] : {});
		}
		ti(l, u, c), l = l[u];
	}
	return e;
}, rl = function(e, t, r) {
	for (var n = -1, a = t.length, i = {}; ++n < a;) {
		var o = t[n], s = U(e, o);
		r(s, o) && rs(i, S(o, e), s);
	}
	return i;
}, ru = function(e, t) {
	if (null == e) return {};
	var r = D(tH(e), function(e) {
		return [e];
	});
	return t = et(t), rl(e, r, function(e, r) {
		return t(e, r[0]);
	});
}, rc = Math.floor, rf = function(e, t) {
	var r = "";
	if (!e || t < 1 || t > 9007199254740991) return r;
	do
		t % 2 && (r += e), (t = rc(t / 2)) && (e += e);
	while (t);
	return r;
}, rd = e$("length"), rh = "\ud800-\udfff", rm = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", rg = "\ud83c[\udffb-\udfff]", rp = "[^" + rh + "]", rb = "(?:\ud83c[\udde6-\uddff]){2}", ry = "[\ud800-\udbff][\udc00-\udfff]", rv = "(?:" + rm + "|" + rg + ")?", rx = "[\\ufe0e\\ufe0f]?", rw = "(?:\\u200d(?:" + [
	rp,
	rb,
	ry
].join("|") + ")" + rx + rv + ")*", rC = RegExp(rg + "(?=" + rg + ")|" + ("(?:" + [
	rp + rm + "?",
	rm,
	rb,
	ry,
	"[" + rh + "]"
].join("|")) + ")" + (rx + rv + rw), "g"), rk = function(e) {
	for (var t = rC.lastIndex = 0; rC.test(e);) ++t;
	return t;
}, rP = function(e) {
	return tw(e) ? rk(e) : rd(e);
}, rM = Math.ceil, rS = function(e, t) {
	var r = (t = void 0 === t ? " " : Q(t)).length;
	if (r < 2) return r ? rf(t, e) : t;
	var n = rf(t, rM(e / rP(t)));
	return tw(t) ? tv(tD(n), 0, e).join("") : n.slice(0, e);
}, r_ = function(e, t, r) {
	e = J(e);
	var n = (t = e3(t)) ? rP(e) : 0;
	return t && n < t ? rS(t - n, r) + e : e;
}, rA = function(e, t, r) {
	return null == e ? e : rs(e, t, r);
}, rT = function(e, t) {
	var r;
	return s(e, function(e, n, a) {
		return !(r = t(e, n, a));
	}), !!r;
}, rR = function(e, t, r) {
	var n = p(e) ? A : rT;
	return r && tl(e, t, r) && (t = void 0), n(e, et(t, 3));
}, rO = void 0, rD = "undefined" != typeof window && window.trustedTypes;
if (rD) try {
	rO = rD.createPolicy("vue", { createHTML: (e) => e });
} catch (e) {}
var r$ = rO ? (e) => rO.createHTML(e) : (e) => e, rI = "undefined" != typeof document ? document : null, rL = rI && rI.createElement("template"), rF = "transition", rE = "animation", rj = Symbol("_vtc"), rB = {
	name: String,
	type: String,
	css: {
		type: Boolean,
		default: !0
	},
	duration: [
		String,
		Number,
		Object
	],
	enterFromClass: String,
	enterActiveClass: String,
	enterToClass: String,
	appearFromClass: String,
	appearActiveClass: String,
	appearToClass: String,
	leaveFromClass: String,
	leaveActiveClass: String,
	leaveToClass: String
}, rV = eS({}, M, rB), rH = ((eH = (e, { slots: t }) => E(eL, function(e) {
	let t = {};
	for (let r in e) r in rB || (t[r] = e[r]);
	if (!1 === e.css) return t;
	let { name: r = "v", type: n, duration: a, enterFromClass: i = `${r}-enter-from`, enterActiveClass: o = `${r}-enter-active`, enterToClass: s = `${r}-enter-to`, appearFromClass: l = i, appearActiveClass: u = o, appearToClass: c = s, leaveFromClass: f = `${r}-leave-from`, leaveActiveClass: d = `${r}-leave-active`, leaveToClass: h = `${r}-leave-to` } = e, m = function(e) {
		if (null == e) return null;
		{
			if (eb(e)) return [function(e) {
				return ev(e);
			}(e.enter), function(e) {
				return ev(e);
			}(e.leave)];
			let t = function(e) {
				return ev(e);
			}(e);
			return [t, t];
		}
	}(a), g = m && m[0], p = m && m[1], { onBeforeEnter: b, onEnter: y, onEnterCancelled: v, onLeave: x, onLeaveCancelled: w, onBeforeAppear: C = b, onAppear: k = y, onAppearCancelled: P = v } = t, M = (e, t, r, n) => {
		e._enterCancelled = n, rU(e, t ? c : s), rU(e, t ? u : o), r && r();
	}, S = (e, t) => {
		e._isLeaving = !1, rU(e, f), rU(e, h), rU(e, d), t && t();
	}, _ = (e) => (t, r) => {
		let a = e ? k : y, o = () => M(t, e, r);
		rN(a, [t, o]), rq(() => {
			rU(t, e ? l : i), rW(t, e ? c : s), rz(a) || rY(t, n, g, o);
		});
	};
	return eS(t, {
		onBeforeEnter(e) {
			rN(b, [e]), rW(e, i), rW(e, o);
		},
		onBeforeAppear(e) {
			rN(C, [e]), rW(e, l), rW(e, u);
		},
		onEnter: _(!1),
		onAppear: _(!0),
		onLeave(e, t) {
			e._isLeaving = !0;
			let r = () => S(e, t);
			rW(e, f), e._enterCancelled ? (rW(e, d), rJ(e)) : (rJ(e), rW(e, d)), rq(() => {
				e._isLeaving && (rU(e, f), rW(e, h), rz(x) || rY(e, n, p, r));
			}), rN(x, [e, r]);
		},
		onEnterCancelled(e) {
			M(e, !1, void 0, !0), rN(v, [e]);
		},
		onAppearCancelled(e) {
			M(e, !0, void 0, !0), rN(P, [e]);
		},
		onLeaveCancelled(e) {
			S(e), rN(w, [e]);
		}
	});
}(e), t)).displayName = "Transition", eH.props = rV, eH), rN = (e, t = []) => {
	ek(e) ? e.forEach((e) => e(...t)) : e && e(...t);
}, rz = (e) => !!e && (ek(e) ? e.some((e) => e.length > 1) : e.length > 1);
function rW(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.add(t)), (e[rj] || (e[rj] = /* @__PURE__ */ new Set())).add(t);
}
function rU(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.remove(t));
	let r = e[rj];
	r && (r.delete(t), r.size || (e[rj] = void 0));
}
function rq(e) {
	requestAnimationFrame(() => {
		requestAnimationFrame(e);
	});
}
var rG = 0;
function rY(e, t, r, n) {
	let a = e._endId = ++rG, i = () => {
		a === e._endId && n();
	};
	if (null != r) return setTimeout(i, r);
	let { type: o, timeout: s, propCount: l } = function(e, t) {
		let r = window.getComputedStyle(e), n = (e) => (r[e] || "").split(", "), a = n(`${rF}Delay`), i = n(`${rF}Duration`), o = rK(a, i), s = n(`${rE}Delay`), l = n(`${rE}Duration`), u = rK(s, l), c = null, f = 0, d = 0;
		t === rF ? o > 0 && (c = rF, f = o, d = i.length) : t === rE ? u > 0 && (c = rE, f = u, d = l.length) : d = (c = (f = Math.max(o, u)) > 0 ? o > u ? rF : rE : null) ? c === rF ? i.length : l.length : 0;
		let h = c === rF && /\b(?:transform|all)(?:,|$)/.test(n(`${rF}Property`).toString());
		return {
			type: c,
			timeout: f,
			propCount: d,
			hasTransform: h
		};
	}(e, t);
	if (!o) return n();
	let u = o + "end", c = 0, f = () => {
		e.removeEventListener(u, d), i();
	}, d = (t) => {
		t.target === e && ++c >= l && f();
	};
	setTimeout(() => {
		c < l && f();
	}, s + 1), e.addEventListener(u, d);
}
function rK(e, t) {
	for (; e.length < t.length;) e = e.concat(e);
	return Math.max(...t.map((t, r) => rX(t) + rX(e[r])));
}
function rX(e) {
	return "auto" === e ? 0 : 1e3 * Number(e.slice(0, -1).replace(",", "."));
}
function rJ(e) {
	return (e ? e.ownerDocument : document).body.offsetHeight;
}
var rZ = Symbol("_vod"), rQ = Symbol("_vsh"), r0 = Symbol(""), r1 = /(?:^|;)\s*display\s*:/, r2 = /\s*!important$/;
function r4(e, t, r) {
	if (ek(r)) r.forEach((r) => r4(e, t, r));
	else if (r ??= "", t.startsWith("--")) e.setProperty(t, r);
	else {
		let n = function(e, t) {
			let r = r3[t];
			if (r) return r;
			let n = eR(t);
			if ("filter" !== n && n in e) return r3[t] = n;
			n = ew(n);
			for (let r = 0; r < r5.length; r++) {
				let a = r5[r] + n;
				if (a in e) return r3[t] = a;
			}
			return t;
		}(e, t);
		r2.test(r) ? e.setProperty(em(n), r.replace(r2, ""), "important") : e[n] = r;
	}
}
var r5 = [
	"Webkit",
	"Moz",
	"ms"
], r3 = {}, r8 = "http://www.w3.org/1999/xlink";
function r6(e, t, r, n, a, i = es(t)) {
	n && t.startsWith("xlink:") ? null == r ? e.removeAttributeNS(r8, t.slice(6, t.length)) : e.setAttributeNS(r8, t, r) : null == r || i && !er(r) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : eP(r) ? String(r) : r);
}
function r9(e, t, r, n, a) {
	if ("innerHTML" === t || "textContent" === t) {
		null != r && (e[t] = "innerHTML" === t ? r$(r) : r);
		return;
	}
	let i = e.tagName;
	if ("value" === t && "PROGRESS" !== i && !i.includes("-")) {
		let n = "OPTION" === i ? e.getAttribute("value") || "" : e.value, a = null == r ? "checkbox" === e.type ? "on" : "" : String(r);
		n === a && "_value" in e || (e.value = a), r ?? e.removeAttribute(t), e._value = r;
		return;
	}
	let o = !1;
	if ("" === r || null == r) {
		let n = typeof e[t];
		"boolean" === n ? r = er(r) : null == r && "string" === n ? (r = "", o = !0) : "number" === n && (r = 0, o = !0);
	}
	try {
		e[t] = r;
	} catch (e) {}
	o && e.removeAttribute(a || t);
}
var r7 = Symbol("_vei"), ne = /(?:Once|Passive|Capture)$/, nt = 0, nr = Promise.resolve(), nn = (e) => 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) > 96 && 123 > e.charCodeAt(2), na = eS({ patchProp: (e, t, r, n, a, i) => {
	let o = "svg" === a;
	if ("class" === t) {
		var s = n;
		let t = e[rj];
		t && (s = (s ? [s, ...t] : [...t]).join(" ")), null == s ? e.removeAttribute("class") : o ? e.setAttribute("class", s) : e.className = s;
	} else "style" === t ? function(e, t, r) {
		let n = e.style, a = ec(r), i = !1;
		if (r && !a) {
			if (t) if (ec(t)) for (let e of t.split(";")) {
				let t = e.slice(0, e.indexOf(":")).trim();
				r[t] ?? r4(n, t, "");
			}
			else for (let e in t) r[e] ?? r4(n, e, "");
			for (let e in r) "display" === e && (i = !0), r4(n, e, r[e]);
		} else if (a) {
			if (t !== r) {
				let e = n[r0];
				e && (r += ";" + e), n.cssText = r, i = r1.test(r);
			}
		} else t && e.removeAttribute("style");
		rZ in e && (e[rZ] = i ? n.display : "", e[rQ] && (n.display = "none"));
	}(e, r, n) : eD(t) ? ei(t) || function(e, t, r, n, a = null) {
		let i = e[r7] || (e[r7] = {}), o = i[t];
		if (n && o) o.value = n;
		else {
			let [r, s] = function(e) {
				let t;
				if (ne.test(e)) {
					let r;
					for (t = {}; r = e.match(ne);) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
				}
				return [":" === e[2] ? e.slice(3) : em(e.slice(2)), t];
			}(t);
			if (n) {
				let o = i[t] = function(e, t) {
					let r = (e) => {
						if (e._vts) {
							if (e._vts <= r.attached) return;
						} else e._vts = Date.now();
						Y(function(e, t) {
							if (!ek(t)) return t;
							{
								let r = e.stopImmediatePropagation;
								return e.stopImmediatePropagation = () => {
									r.call(e), e._stopped = !0;
								}, t.map((e) => (t) => !t._stopped && e && e(t));
							}
						}(e, r.value), t, 5, [e]);
					};
					return r.value = e, r.attached = nt || (nr.then(() => nt = 0), nt = Date.now()), r;
				}(n, a);
				e.addEventListener(r, o, s);
			} else o && (e.removeEventListener(r, o, s), i[t] = void 0);
		}
	}(e, t, 0, n, i) : ("." === t[0] ? (t = t.slice(1), 0) : "^" === t[0] ? (t = t.slice(1), 1) : !function(e, t, r, n) {
		if (n) return !!("innerHTML" === t || "textContent" === t || t in e && nn(t) && eA(r));
		if ("spellcheck" === t || "draggable" === t || "translate" === t || "autocorrect" === t || "form" === t || "list" === t && "INPUT" === e.tagName || "type" === t && "TEXTAREA" === e.tagName) return !1;
		if ("width" === t || "height" === t) {
			let t = e.tagName;
			if ("IMG" === t || "VIDEO" === t || "CANVAS" === t || "SOURCE" === t) return !1;
		}
		return !(nn(t) && ec(r)) && t in e;
	}(e, t, n, o)) ? e._isVueCE && (/[A-Z]/.test(t) || !ec(n)) ? r9(e, eR(t), n, i, t) : ("true-value" === t ? e._trueValue = n : "false-value" === t && (e._falseValue = n), r6(e, t, n, o)) : (r9(e, t, n), e.tagName.includes("-") || "value" !== t && "checked" !== t && "selected" !== t || r6(e, t, n, o, i, "value" !== t));
} }, {
	insert: (e, t, r) => {
		t.insertBefore(e, r || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, r, n) => {
		let a = "svg" === t ? rI.createElementNS("http://www.w3.org/2000/svg", e) : "mathml" === t ? rI.createElementNS("http://www.w3.org/1998/Math/MathML", e) : r ? rI.createElement(e, { is: r }) : rI.createElement(e);
		return "select" === e && n && null != n.multiple && a.setAttribute("multiple", n.multiple), a;
	},
	createText: (e) => rI.createTextNode(e),
	createComment: (e) => rI.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => rI.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, r, n, a, i) {
		let o = r ? r.previousSibling : t.lastChild;
		if (a && (a === i || a.nextSibling)) for (; t.insertBefore(a.cloneNode(!0), r), a !== i && (a = a.nextSibling););
		else {
			rL.innerHTML = r$("svg" === n ? `<svg>${e}</svg>` : "mathml" === n ? `<math>${e}</math>` : e);
			let a = rL.content;
			if ("svg" === n || "mathml" === n) {
				let e = a.firstChild;
				for (; e.firstChild;) a.appendChild(e.firstChild);
				a.removeChild(e);
			}
			t.insertBefore(a, r);
		}
		return [o ? o.nextSibling : t.firstChild, r ? r.previousSibling : t.lastChild];
	}
}), ni = (...e) => {
	let t = (eq || (eq = O(na))).createApp(...e), { mount: r } = t;
	return t.mount = (e) => {
		var n, a;
		let i = ec(n = e) ? document.querySelector(n) : n;
		if (!i) return;
		let o = t._component;
		eA(o) || o.render || o.template || (o.template = i.innerHTML), 1 === i.nodeType && (i.textContent = "");
		let s = r(i, !1, (a = i) instanceof SVGElement ? "svg" : "function" == typeof MathMLElement && a instanceof MathMLElement ? "mathml" : void 0);
		return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), s;
	}, t;
};
function no(e, t) {
	var r = {};
	for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
	if (null != e && "function" == typeof Object.getOwnPropertySymbols) for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++) 0 > t.indexOf(n[a]) && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
	return r;
}
var ns = function() {}, nl = function() {}, nu = (e, t, r) => Math.min(Math.max(r, e), t);
function nc(e, t) {
	return e * Math.sqrt(1 - t * t);
}
var nf = ["duration", "bounce"], nd = [
	"stiffness",
	"damping",
	"mass"
];
function nh(e, t) {
	return t.some((t) => void 0 !== e[t]);
}
function nm(e) {
	var { from: t = 0, to: r = 1, restSpeed: n = 2, restDelta: a } = e, i = no(e, [
		"from",
		"to",
		"restSpeed",
		"restDelta"
	]);
	let o = {
		done: !1,
		value: t
	}, { stiffness: s, damping: l, mass: u, velocity: c, duration: f, isResolvedFromDuration: d } = function(e) {
		let t = Object.assign({
			velocity: 0,
			stiffness: 100,
			damping: 10,
			mass: 1,
			isResolvedFromDuration: !1
		}, e);
		if (!nh(e, nd) && nh(e, nf)) {
			let r = function({ duration: e = 800, bounce: t = .25, velocity: r = 0, mass: n = 1 }) {
				let a, i;
				ns(e <= 1e4, "Spring duration must be 10 seconds or less");
				let o = 1 - t;
				o = nu(.05, 1, o), e = nu(.01, 10, e / 1e3), o < 1 ? (a = (t) => {
					let n = t * o, a = n * e;
					return .001 - (n - r) / nc(t, o) * Math.exp(-a);
				}, i = (t) => {
					let n = t * o * e, i = Math.pow(o, 2) * Math.pow(t, 2) * e, s = Math.exp(-n), l = nc(Math.pow(t, 2), o);
					return (-a(t) + .001 > 0 ? -1 : 1) * ((n * r + r - i) * s) / l;
				}) : (a = (t) => -.001 + Math.exp(-t * e) * ((t - r) * e + 1), i = (t) => e * e * (r - t) * Math.exp(-t * e));
				let s = function(e, t, r) {
					let n = r;
					for (let r = 1; r < 12; r++) n -= e(n) / t(n);
					return n;
				}(a, i, 5 / e);
				if (e *= 1e3, isNaN(s)) return {
					stiffness: 100,
					damping: 10,
					duration: e
				};
				{
					let t = Math.pow(s, 2) * n;
					return {
						stiffness: t,
						damping: 2 * o * Math.sqrt(n * t),
						duration: e
					};
				}
			}(e);
			(t = Object.assign(Object.assign(Object.assign({}, t), r), {
				velocity: 0,
				mass: 1
			})).isResolvedFromDuration = !0;
		}
		return t;
	}(i), h = ng, m = ng;
	function g() {
		let e = c ? -(c / 1e3) : 0, n = r - t, i = l / (2 * Math.sqrt(s * u)), o = Math.sqrt(s / u) / 1e3;
		if (void 0 === a && (a = Math.min(Math.abs(r - t) / 100, .4)), i < 1) {
			let t = nc(o, i);
			h = (a) => r - Math.exp(-i * o * a) * ((e + i * o * n) / t * Math.sin(t * a) + n * Math.cos(t * a)), m = (r) => {
				let a = Math.exp(-i * o * r);
				return i * o * a * (Math.sin(t * r) * (e + i * o * n) / t + n * Math.cos(t * r)) - a * (Math.cos(t * r) * (e + i * o * n) - t * n * Math.sin(t * r));
			};
		} else if (1 === i) h = (t) => r - Math.exp(-o * t) * (n + (e + o * n) * t);
		else {
			let t = o * Math.sqrt(i * i - 1);
			h = (a) => {
				let s = Math.exp(-i * o * a), l = Math.min(t * a, 300);
				return r - s * ((e + i * o * n) * Math.sinh(l) + t * n * Math.cosh(l)) / t;
			};
		}
	}
	return g(), {
		next: (e) => {
			let t = h(e);
			if (d) o.done = e >= f;
			else {
				let i = Math.abs(1e3 * m(e)) <= n, s = Math.abs(r - t) <= a;
				o.done = i && s;
			}
			return o.value = o.done ? r : t, o;
		},
		flipTarget: () => {
			c = -c, [t, r] = [r, t], g();
		}
	};
}
nm.needsInterpolation = (e, t) => "string" == typeof e || "string" == typeof t;
var ng = (e) => 0, np = (e, t, r) => {
	let n = t - e;
	return 0 === n ? 1 : (r - e) / n;
}, nb = (e, t, r) => -r * e + r * t + e, ny = (e, t) => (r) => Math.max(Math.min(r, t), e), nv = (e) => e % 1 ? Number(e.toFixed(5)) : e, nx = /(-)?([\d]*\.?[\d])+/g, nw = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, nC = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function nk(e) {
	return "string" == typeof e;
}
var nP = {
	test: (e) => "number" == typeof e,
	parse: parseFloat,
	transform: (e) => e
}, nM = Object.assign(Object.assign({}, nP), { transform: ny(0, 1) }), nS = {
	test: (e) => nk(e) && e.endsWith("%") && 1 === e.split(" ").length,
	parse: parseFloat,
	transform: (e) => `${e}%`
}, n_ = (e, t) => (r) => !!(nk(r) && nC.test(r) && r.startsWith(e) || t && Object.prototype.hasOwnProperty.call(r, t)), nA = (e, t, r) => (n) => {
	if (!nk(n)) return n;
	let [a, i, o, s] = n.match(nx);
	return {
		[e]: parseFloat(a),
		[t]: parseFloat(i),
		[r]: parseFloat(o),
		alpha: void 0 !== s ? parseFloat(s) : 1
	};
}, nT = {
	test: n_("hsl", "hue"),
	parse: nA("hue", "saturation", "lightness"),
	transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) => "hsla(" + Math.round(e) + ", " + nS.transform(nv(t)) + ", " + nS.transform(nv(r)) + ", " + nv(nM.transform(n)) + ")"
}, nR = ny(0, 255), nO = Object.assign(Object.assign({}, nP), { transform: (e) => Math.round(nR(e)) }), nD = {
	test: n_("rgb", "red"),
	parse: nA("red", "green", "blue"),
	transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) => "rgba(" + nO.transform(e) + ", " + nO.transform(t) + ", " + nO.transform(r) + ", " + nv(nM.transform(n)) + ")"
}, n$ = {
	test: n_("#"),
	parse: function(e) {
		let t = "", r = "", n = "", a = "";
		return e.length > 5 ? (t = e.substr(1, 2), r = e.substr(3, 2), n = e.substr(5, 2), a = e.substr(7, 2)) : (t = e.substr(1, 1), r = e.substr(2, 1), n = e.substr(3, 1), a = e.substr(4, 1), t += t, r += r, n += n, a += a), {
			red: parseInt(t, 16),
			green: parseInt(r, 16),
			blue: parseInt(n, 16),
			alpha: a ? parseInt(a, 16) / 255 : 1
		};
	},
	transform: nD.transform
}, nI = (e) => nD.test(e) || n$.test(e) || nT.test(e), nL = (e) => nD.test(e) ? nD.parse(e) : nT.test(e) ? nT.parse(e) : n$.parse(e), nF = (e) => nk(e) ? e : e.hasOwnProperty("red") ? nD.transform(e) : nT.transform(e), nE = "${c}", nj = "${n}";
function nB(e) {
	"number" == typeof e && (e = `${e}`);
	let t = [], r = 0, n = e.match(nw);
	n && (r = n.length, e = e.replace(nw, nE), t.push(...n.map(nL)));
	let a = e.match(nx);
	return a && (e = e.replace(nx, nj), t.push(...a.map(nP.parse))), {
		values: t,
		numColors: r,
		tokenised: e
	};
}
var nV = function(e) {
	let { values: t, numColors: r, tokenised: n } = nB(e), a = t.length;
	return (e) => {
		let t = n;
		for (let n = 0; n < a; n++) t = t.replace(n < r ? nE : nj, n < r ? nF(e[n]) : nv(e[n]));
		return t;
	};
};
function nH(e, t, r) {
	return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6) ? e + (t - e) * 6 * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function nN({ hue: e, saturation: t, lightness: r, alpha: n }) {
	e /= 360, r /= 100;
	let a = 0, i = 0, o = 0;
	if (t /= 100) {
		let n = r < .5 ? r * (1 + t) : r + t - r * t, s = 2 * r - n;
		a = nH(s, n, e + 1 / 3), i = nH(s, n, e), o = nH(s, n, e - 1 / 3);
	} else a = i = o = r;
	return {
		red: Math.round(255 * a),
		green: Math.round(255 * i),
		blue: Math.round(255 * o),
		alpha: n
	};
}
var nz = (e, t, r) => {
	let n = e * e;
	return Math.sqrt(Math.max(0, r * (t * t - n) + n));
}, nW = [
	n$,
	nD,
	nT
], nU = (e) => nW.find((t) => t.test(e)), nq = (e) => `'${e}' is not an animatable color. Use the equivalent color code instead.`, nG = (e, t) => {
	let r = nU(e), n = nU(t);
	nl(!!r, nq(e)), nl(!!n, nq(t));
	let a = r.parse(e), i = n.parse(t);
	r === nT && (a = nN(a), r = nD), n === nT && (i = nN(i), n = nD);
	let o = Object.assign({}, a);
	return (e) => {
		for (let t in o) "alpha" !== t && (o[t] = nz(a[t], i[t], e));
		return o.alpha = nb(a.alpha, i.alpha, e), r.transform(o);
	};
}, nY = (e, t) => (r) => t(e(r)), nK = (...e) => e.reduce(nY);
function nX(e, t) {
	return "number" == typeof e ? (r) => nb(e, t, r) : nI(e) ? nG(e, t) : n0(e, t);
}
var nJ = (e, t) => {
	let r = [...e], n = r.length, a = e.map((e, r) => nX(e, t[r]));
	return (e) => {
		for (let t = 0; t < n; t++) r[t] = a[t](e);
		return r;
	};
}, nZ = (e, t) => {
	let r = Object.assign(Object.assign({}, e), t), n = {};
	for (let a in r) void 0 !== e[a] && void 0 !== t[a] && (n[a] = nX(e[a], t[a]));
	return (e) => {
		for (let t in n) r[t] = n[t](e);
		return r;
	};
};
function nQ(e) {
	let t = nB(e).values, r = t.length, n = 0, a = 0, i = 0;
	for (let e = 0; e < r; e++) n || "number" == typeof t[e] ? n++ : void 0 !== t[e].hue ? i++ : a++;
	return {
		parsed: t,
		numNumbers: n,
		numRGB: a,
		numHSL: i
	};
}
var n0 = (e, t) => {
	let r = nV(t), n = nQ(e), a = nQ(t);
	return n.numHSL === a.numHSL && n.numRGB === a.numRGB && n.numNumbers >= a.numNumbers ? nK(nJ(n.parsed, a.parsed), r) : (ns(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), (r) => `${r > 0 ? t : e}`);
}, n1 = (e, t) => (r) => nb(e, t, r);
function n2(e, t, { clamp: r = !0, ease: n, mixer: a } = {}) {
	let i = e.length;
	nl(i === t.length, "Both input and output ranges must be the same length"), nl(!n || !Array.isArray(n) || n.length === i - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), e[0] > e[i - 1] && (e = [].concat(e), t = [].concat(t), e.reverse(), t.reverse());
	let o = function(e, t, r) {
		let n = [], a = r || function(e) {
			if ("number" == typeof e) return n1;
			if ("string" == typeof e) if (nI(e)) return nG;
			else return n0;
			return Array.isArray(e) ? nJ : "object" == typeof e ? nZ : void 0;
		}(e[0]), i = e.length - 1;
		for (let r = 0; r < i; r++) {
			let i = a(e[r], e[r + 1]);
			t && (i = nK(Array.isArray(t) ? t[r] : t, i)), n.push(i);
		}
		return n;
	}(t, n, a), s = 2 === i ? function([e, t], [r]) {
		return (n) => r(np(e, t, n));
	}(e, o) : function(e, t) {
		let r = e.length, n = r - 1;
		return (a) => {
			let i = 0, o = !1;
			if (a <= e[0] ? o = !0 : a >= e[n] && (i = n - 1, o = !0), !o) {
				let t = 1;
				for (; t < r && !(e[t] > a) && t !== n; t++);
				i = t - 1;
			}
			let s = np(e[i], e[i + 1], a);
			return t[i](s);
		};
	}(e, o);
	return r ? (t) => s(nu(e[0], e[i - 1], t)) : s;
}
var n4 = (e) => e, n5 = (e = (e) => Math.pow(e, 2), (t) => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2);
function n3({ from: e = 0, to: t = 1, ease: r, offset: n, duration: a = 300 }) {
	var i;
	let o = {
		done: !1,
		value: e
	}, s = Array.isArray(t) ? t : [e, t], l = (i = n && n.length === s.length ? n : function(e) {
		let t = e.length;
		return e.map((e, r) => 0 !== r ? r / (t - 1) : 0);
	}(s), i.map((e) => e * a));
	function u() {
		return n2(l, s, { ease: Array.isArray(r) ? r : s.map(() => r || n5).splice(0, s.length - 1) });
	}
	let c = u();
	return {
		next: (e) => (o.value = c(e), o.done = e >= a, o),
		flipTarget: () => {
			s.reverse(), c = u();
		}
	};
}
var n8 = {
	keyframes: n3,
	spring: nm,
	decay: function({ velocity: e = 0, from: t = 0, power: r = .8, timeConstant: n = 350, restDelta: a = .5, modifyTarget: i }) {
		let o = {
			done: !1,
			value: t
		}, s = r * e, l = t + s, u = void 0 === i ? l : i(l);
		return u !== l && (s = u - t), {
			next: (e) => {
				let t = -s * Math.exp(-e / n);
				return o.done = !(t > a || t < -a), o.value = o.done ? u : u + t, o;
			},
			flipTarget: () => {}
		};
	}
}, n6 = 1 / 60 * 1e3, n9 = "undefined" != typeof performance ? () => performance.now() : () => Date.now(), n7 = "undefined" != typeof window ? (e) => window.requestAnimationFrame(e) : (e) => setTimeout(() => e(n9()), n6), ae = !0, at = !1, ar = !1, an = {
	delta: 0,
	timestamp: 0
}, aa = [
	"read",
	"update",
	"preRender",
	"render",
	"postRender"
], ai = aa.reduce((e, t) => (e[t] = function(e) {
	let t = [], r = [], n = 0, a = !1, i = !1, o = /* @__PURE__ */ new WeakSet(), s = {
		schedule: (e, i = !1, s = !1) => {
			let l = s && a, u = l ? t : r;
			return i && o.add(e), -1 === u.indexOf(e) && (u.push(e), l && a && (n = t.length)), e;
		},
		cancel: (e) => {
			let t = r.indexOf(e);
			-1 !== t && r.splice(t, 1), o.delete(e);
		},
		process: (l) => {
			if (a) {
				i = !0;
				return;
			}
			if (a = !0, [t, r] = [r, t], r.length = 0, n = t.length) for (let r = 0; r < n; r++) {
				let n = t[r];
				n(l), o.has(n) && (s.schedule(n), e());
			}
			a = !1, i && (i = !1, s.process(l));
		}
	};
	return s;
}(() => at = !0), e), {}), ao = aa.reduce((e, t) => {
	let r = ai[t];
	return e[t] = (e, t = !1, n = !1) => (at || ac(), r.schedule(e, t, n)), e;
}, {}), as = aa.reduce((e, t) => (e[t] = ai[t].cancel, e), {}), al = (e) => ai[e].process(an), au = (e) => {
	at = !1, an.delta = ae ? n6 : Math.max(Math.min(e - an.timestamp, 40), 1), an.timestamp = e, ar = !0, aa.forEach(al), ar = !1, at && (ae = !1, n7(au));
}, ac = () => {
	at = !0, ae = !0, ar || n7(au);
};
function af(e, t, r = 0) {
	return e - t - r;
}
var ad = (e) => {
	let t = ({ delta: t }) => e(t);
	return {
		start: () => ao.update(t, !0),
		stop: () => as.update(t)
	};
};
function ah(e) {
	let t, r, n;
	var a, { from: i, autoplay: o = !0, driver: s = ad, elapsed: l = 0, repeat: u = 0, repeatType: c = "loop", repeatDelay: f = 0, onPlay: d, onStop: h, onComplete: m, onRepeat: g, onUpdate: p } = e, b = no(e, [
		"from",
		"autoplay",
		"driver",
		"elapsed",
		"repeat",
		"repeatType",
		"repeatDelay",
		"onPlay",
		"onStop",
		"onComplete",
		"onRepeat",
		"onUpdate"
	]);
	let { to: y } = b, v = 0, x = b.duration, w = !1, C = !0, k = function(e) {
		if (Array.isArray(e.to)) return n3;
		if (n8[e.type]) return n8[e.type];
		let t = new Set(Object.keys(e));
		if (t.has("ease") || t.has("duration") && !t.has("dampingRatio"));
		else if (t.has("dampingRatio") || t.has("stiffness") || t.has("mass") || t.has("damping") || t.has("restSpeed") || t.has("restDelta")) return nm;
		return n3;
	}(b);
	null != (a = k.needsInterpolation) && a.call(k, i, y) && (n = n2([0, 100], [i, y], { clamp: !1 }), i = 0, y = 100);
	let P = k(Object.assign(Object.assign({}, b), {
		from: i,
		to: y
	}));
	return o && (d?.(), (t = s(function(e) {
		if (C || (e = -e), l += e, !w) {
			let e = P.next(Math.max(0, l));
			r = e.value, n && (r = n(r)), w = C ? e.done : l <= 0;
		}
		if (p?.(r), w) if (0 === v && (x ??= l), v < u) {
			var a = l;
			(C ? a >= x + f : a <= -f) && (v++, "reverse" === c ? l = function(e, t, r = 0, n = !0) {
				return n ? af(t + -e, t, r) : t - (e - t) + r;
			}(l, x, f, C = v % 2 == 0) : (l = af(l, x, f), "mirror" === c && P.flipTarget()), w = !1, g && g());
		} else t.stop(), m && m();
	})).start()), { stop: () => {
		h?.(), t.stop();
	} };
}
var am = (e, t) => 1 - 3 * t + 3 * e, ag = (e, t) => 3 * t - 6 * e, ap = (e, t, r) => ((am(t, r) * e + ag(t, r)) * e + 3 * t) * e, ab = (e, t, r) => 3 * am(t, r) * e * e + 2 * ag(t, r) * e + 3 * t, ay = {
	animationIterationCount: 1,
	aspectRatio: 1,
	borderImageOutset: 1,
	borderImageSlice: 1,
	borderImageWidth: 1,
	boxFlex: 1,
	boxFlexGroup: 1,
	boxOrdinalGroup: 1,
	columnCount: 1,
	columns: 1,
	flex: 1,
	flexGrow: 1,
	flexPositive: 1,
	flexShrink: 1,
	flexNegative: 1,
	flexOrder: 1,
	gridRow: 1,
	gridRowEnd: 1,
	gridRowSpan: 1,
	gridRowStart: 1,
	gridColumn: 1,
	gridColumnEnd: 1,
	gridColumnSpan: 1,
	gridColumnStart: 1,
	msGridRow: 1,
	msGridRowSpan: 1,
	msGridColumn: 1,
	msGridColumnSpan: 1,
	fontWeight: 1,
	lineHeight: 1,
	opacity: 1,
	order: 1,
	orphans: 1,
	scale: 1,
	tabSize: 1,
	widows: 1,
	zIndex: 1,
	zoom: 1,
	WebkitLineClamp: 1,
	fillOpacity: 1,
	floodOpacity: 1,
	stopOpacity: 1,
	strokeDasharray: 1,
	strokeDashoffset: 1,
	strokeMiterlimit: 1,
	strokeOpacity: 1,
	strokeWidth: 1
}, av = /[A-Z]|^ms/g, ax = /_EMO_([^_]+?)_([^]*?)_EMO_/g, aw = function(e) {
	return 45 === e.charCodeAt(1);
}, aC = function(e) {
	return null != e && "boolean" != typeof e;
}, ak = (eN = function(e) {
	return aw(e) ? e : e.replace(av, "-$&").toLowerCase();
}, ez = Object.create(null), function(e) {
	return void 0 === ez[e] && (ez[e] = eN(e)), ez[e];
}), aP = function(e, t) {
	switch (e) {
		case "animation":
		case "animationName": if ("string" == typeof t) return t.replace(ax, function(e, t, r) {
			return eG = {
				name: t,
				styles: r,
				next: eG
			}, t;
		});
	}
	return 1 === ay[e] || aw(e) || "number" != typeof t || 0 === t ? t : t + "px";
};
function aM(e, t, r) {
	if (null == r) return "";
	if (void 0 !== r.__emotion_styles) return r;
	switch (typeof r) {
		case "boolean": return "";
		case "object":
			if (1 === r.anim) return eG = {
				name: r.name,
				styles: r.styles,
				next: eG
			}, r.name;
			if (void 0 !== r.styles) {
				var n = r.next;
				if (void 0 !== n) for (; void 0 !== n;) eG = {
					name: n.name,
					styles: n.styles,
					next: eG
				}, n = n.next;
				return r.styles + ";";
			}
			return function(e, t, r) {
				var n = "";
				if (Array.isArray(r)) for (var a = 0; a < r.length; a++) n += aM(e, t, r[a]) + ";";
				else for (var i in r) {
					var o = r[i];
					if ("object" != typeof o) null != t && void 0 !== t[o] ? n += i + "{" + t[o] + "}" : aC(o) && (n += ak(i) + ":" + aP(i, o) + ";");
					else if (Array.isArray(o) && "string" == typeof o[0] && (null == t || void 0 === t[o[0]])) for (var s = 0; s < o.length; s++) aC(o[s]) && (n += ak(i) + ":" + aP(i, o[s]) + ";");
					else {
						var l = aM(e, t, o);
						switch (i) {
							case "animation":
							case "animationName":
								n += ak(i) + ":" + l + ";";
								break;
							default: n += i + "{" + l + "}";
						}
					}
				}
				return n;
			}(e, t, r);
		case "function": if (void 0 !== e) {
			var a = eG, i = r(e);
			return eG = a, aM(e, t, i);
		}
	}
	if (null == t) return r;
	var o = t[r];
	return void 0 !== o ? o : r;
}
var aS = /label:\s*([^\s;{]+)\s*(;|$)/g;
function a_() {
	return new Proxy({}, { get: (e, t) => t });
}
let aA = a_(), aT = {
	paddingX: [aA.paddingLeft, aA.paddingRight],
	paddingY: [aA.paddingTop, aA.paddingBottom],
	marginX: [aA.marginInlineStart, aA.marginInlineEnd],
	marginY: [aA.marginTop, aA.marginBottom],
	borderX: [aA.borderLeft, aA.borderRight],
	borderY: [aA.borderTop, aA.borderBottom],
	color: [aA.color, aA.fill],
	borderTopRadius: [aA.borderTopLeftRadius, aA.borderTopRightRadius],
	borderBottomRadius: [aA.borderBottomLeftRadius, aA.borderBottomRightRadius],
	borderRightRadius: [aA.borderTopRightRadius, aA.borderBottomRightRadius],
	borderLeftRadius: [aA.borderTopLeftRadius, aA.borderBottomLeftRadius],
	backgroundGradient: [aA.backgroundImage],
	boxSize: [aA.width, aA.height]
}, aR = a_(), aO = {
	font: aR.fontFamily,
	shadow: aR.boxShadow,
	rounded: aR.borderRadius,
	roundedTop: aR.borderTopRadius,
	roundedBottom: aR.borderBottomRadius,
	roundedLeft: aR.borderLeftRadius,
	roundedRight: aR.borderRightRadius,
	bg: aR.background,
	bgImage: aR.backgroundImage,
	bgSize: aR.backgroundSize,
	bgPosition: aR.backgroundPosition,
	bgRepeat: aR.backgroundRepeat,
	bgAttachment: aR.backgroundAttachment,
	bgColor: aR.backgroundColor,
	bgGradient: aR.backgroundGradient,
	bgClip: aR.backgroundClip,
	pos: aR.position,
	p: aR.padding,
	pt: aR.paddingTop,
	pr: aR.paddingRight,
	pl: aR.paddingLeft,
	pb: aR.paddingBottom,
	ps: aR.paddingInlineStart,
	pe: aR.paddingInlineEnd,
	px: aR.paddingX,
	py: aR.paddingY,
	m: aR.margin,
	mt: aR.marginTop,
	mr: aR.marginRight,
	ml: aR.marginLeft,
	mb: aR.marginBottom,
	ms: aR.marginInlineStart,
	me: aR.marginInlineEnd,
	mx: aR.marginX,
	my: aR.marginY,
	w: aR.width,
	minW: aR.minWidth,
	maxW: aR.maxWidth,
	h: aR.height,
	minH: aR.minHeight,
	maxH: aR.maxHeight
}, aD = a_(), a$ = (...e) => {
	let t = [...e];
	for (let r of e) aO[r] && t.push(aO[r]);
	return t;
}, aI = {
	_rtl: "[dir=rtl] &, &[dir=rtl]",
	_ltr: "[dir=ltr] &, &[dir=ltr]",
	_dark: "&[data-theme=dark]",
	_light: "&[data-theme=light]"
};
var aL = class e {
	static supportedPseudoClasses = {
		active: "active",
		after: "after",
		anyLink: "any-link",
		before: "before",
		blank: "blank",
		checked: "checked",
		current: "current",
		default: "default",
		defined: "defined",
		disabled: "disabled",
		empty: "empty",
		enabled: "enabled",
		first: "first",
		firstChild: "first-child",
		firstLetter: "first-letter",
		firstLine: "first-line",
		firstOfType: "first-of-type",
		focus: "focus",
		focusVisible: "focus-visible",
		focusWithin: "focus-within",
		fullscreen: "fullscreen",
		future: "future",
		hover: "hover",
		inRange: "in-range",
		indeterminate: "indeterminate",
		invalid: "invalid",
		lastChild: "last-child",
		lastOfType: "last-of-type",
		left: "left",
		link: "link",
		localLink: "local-link",
		nthCol: "nth-col",
		nthLastCol: "nth-last-col",
		onlyChild: "only-child",
		onlyOfType: "only-of-type",
		optional: "optional",
		outOfRange: "out-of-range",
		past: "past",
		paused: "paused",
		pictureInPicture: "picture-in-picture",
		placeholderShown: "placeholder-shown",
		playing: "playing",
		readOnly: "read-only",
		readWrite: "read-write",
		required: "required",
		right: "right",
		root: "root",
		scope: "scope",
		target: "target",
		targetWithin: "target-within",
		userInvalid: "user-invalid",
		userValid: "user-valid",
		valid: "valid",
		visited: "visited"
	};
	static convertSelector = (t) => {
		if (aI[t]) return aI[t];
		let r = t;
		if (r.startsWith("$") || r.endsWith("$") || r.startsWith("_")) {
			let t = "", n = "";
			if (r.startsWith("_") ? (t = "&", r = r.slice(1)) : r.startsWith("$") ? (t = "& ", r = r.slice(1)) : (n = " &", r = r.slice(0, r.length - 1)), r.startsWith("data") || r.startsWith("aria")) {
				let [e, a] = r.split("__");
				return a ? `${t}[${ed(e)}='${ed(a)}']${n}` : `${t}[${ed(e)}]${n}`;
			}
			if ("&" === t) {
				if (r.startsWith("$")) return `${t}::${r.slice(1)}`;
				if (e.supportedPseudoClasses[r]) {
					let n = e.supportedPseudoClasses[r];
					return `${t}:${n}, ${t}[data-${n}]:not([data-${n}='false']), ${t}.${n}`;
				}
				let [n, a] = r.split("__"), i = ed(n);
				return a ? `${t}[data-${i}='${ed(a)}']` : `${t}[data-${i}]:not([data-${i}='false'])`;
			}
		}
	};
	static walkStateValues = (t, r, n = {
		default: {},
		selectorPath: [],
		path: []
	}) => {
		let { $: a,...i } = t;
		for (let t in i) {
			let o = i[t], s = i.default ?? n.default, l = a ?? B(s, [...n.path.slice(1), "$"]), u = l ? [...n.selectorPath, l] : n.selectorPath, c = [...n.path, t];
			if (z(o)) {
				e.walkStateValues(o, r, {
					path: c,
					selectorPath: u,
					default: s
				});
				continue;
			}
			r(o, c, u);
		}
	};
	constructor(e) {
		this.opt = e;
	}
	processAll(t, r = !0) {
		let n = [], { state: a, extends: i,...o } = t;
		if (i) for (let e of i) n.push(...this.processAll(e, r));
		if (a) {
			let t = {}, r = {};
			e.walkStateValues(a, (e, n, a) => {
				let i = `--${this.opt.varPrefix}-state-${n.join("-")}`, o = t6(n) ?? "", s = {};
				this.process(s, o, e, !1), t[i] = s[o], rA(r, [...a, o], `var(${i})`);
			}), n.push(t), n.push(...this.processAll(r));
		}
		if (!ef(o)) {
			let e = {};
			this.processTo(e, o, r), n.push(e);
		}
		return n;
	}
	processTo(e, t, r = !0) {
		for (let n in t) this.process(e, n, t[n], r);
	}
	process(t, r, n, a = !0) {
		if (this.opt.mixins[r]) {
			let e = this.opt.mixins[r]?.get(n);
			if (e) for (let r in e) this.process(t, r, e[r], a);
			return;
		}
		let i = r;
		if (z(n)) {
			t[i = e.convertSelector(i) ?? i] = t[i] ?? {}, this.processTo(t[i], n);
			return;
		}
		if (a && aT[i = aO[i] ?? i]) {
			for (let e of aT[i]) t[e] = this.opt.processValue(e, n);
			return;
		}
		t[i] = this.opt.processValue(i, n);
	}
};
let aF = ((eW = {}).var = "var", eW.mixin = "mixin", eW);
var aE = class e {
	static create(e, { value: t, on: r, transform: n }) {
		return {
			type: e,
			value: t,
			on: r,
			transform: n,
			__Tokens: void 0,
			__ValueType: void 0,
			__CSSTokens: void 0
		};
	}
	static color(t) {
		return e.create(aF.var, {
			value: t,
			on: a$(aD.color, aD.bgColor, aD.outlineColor, aD.borderColor, aD.accentColor, aD.fill, aD.stroke),
			transform: (e, t) => rt(e) ? {
				default: `var(${t(e)})`,
				rgb: `var(${t(`${e}/rgb`)})`
			} : {
				default: `rgb(${e[0]}, ${e[1]}, ${e[2]})`,
				rgb: `${e[0]} ${e[1]} ${e[2]}`
			},
			fallback: ""
		});
	}
	static space(t) {
		return e.create(aF.var, {
			value: t,
			on: a$(aD.gap, aD.rowGap, aD.columnGap, aD.top, aD.right, aD.bottom, aD.left, aD.m, aD.ms, aD.me, aD.mt, aD.mr, aD.mb, aD.ml, aD.mx, aD.my, aD.p, aD.ps, aD.pe, aD.pt, aD.pr, aD.pb, aD.pl, aD.px, aD.py)
		});
	}
	static boxSize(t) {
		return e.create(aF.var, {
			value: t,
			on: a$(aD.w, aD.minW, aD.maxW, aD.h, aD.minH, aD.maxH, aD.boxSize),
			fallback: 0
		});
	}
	static fontSize(t) {
		return e.create(aF.var, {
			value: t,
			on: a$(aD.fontSize),
			fallback: 0
		});
	}
	static lineHeight(t) {
		return e.create(aF.var, {
			value: t,
			on: a$(aD.lineHeight),
			fallback: 0
		});
	}
	static rounded(t) {
		return e.create(aF.var, {
			value: t,
			fallback: 0,
			on: a$(aD.rounded, aD.roundedTop, aD.roundedBottom, aD.roundedLeft, aD.roundedRight, aA.borderTopLeftRadius, aA.borderTopRightRadius, aA.borderBottomLeftRadius, aA.borderBottomRightRadius, aA.borderTopRightRadius, aA.borderBottomRightRadius, aA.borderTopLeftRadius, aA.borderBottomLeftRadius)
		});
	}
	static transitionTimingFunction(t) {
		return e.create(aF.var, {
			value: t,
			on: a$(aD.transitionTimingFunction)
		});
	}
	static transitionDuration(t) {
		return e.create(aF.var, {
			value: t,
			on: a$(aD.transitionDuration),
			transform: (e) => `${e}ms`
		});
	}
	static font(t) {
		return e.create(aF.var, {
			value: t,
			on: a$(aD.font)
		});
	}
	static fontWeight(t) {
		return e.create(aF.var, {
			value: t,
			on: a$(aD.fontWeight)
		});
	}
	static letterSpacing(t) {
		return e.create(aF.var, {
			value: t,
			on: a$(aD.letterSpacing)
		});
	}
	static shadow(t) {
		return e.create(aF.var, {
			value: t,
			on: a$(aD.shadow)
		});
	}
	static customMixin(t, r) {
		return e.create(aF.mixin, {
			value: r,
			on: [t]
		});
	}
	static mixin(e) {
		return {
			...e,
			__mixin: !0
		};
	}
};
let aj = (e, t, r) => {
	let n = e;
	for (let e = 0; e < t.length; e++) {
		let a = t[e];
		if (e === t.length - 1) {
			n[a] = r;
			continue;
		}
		n[a] = n[a] ?? {}, n = n[a];
	}
};
var aB = class e {
	static defaultMode = "_default";
	static walkValues = (t, r, n = []) => {
		for (let a in t) {
			let i = t[a];
			if (z(i)) {
				if (re(i, "_default")) {
					r(i, [...n, a]);
					continue;
				}
				e.walkValues(i, r, [...n, a]);
				continue;
			}
			r(i, [...n, a]);
		}
	};
	__Tokens = void 0;
	_values = {};
	_cssVarRefs = {};
	constructor(t, { cssVar: r, transformFallback: n }) {
		e.walkValues(t.value, (e, a) => {
			let i = a.join("."), o = (e, a) => {
				let i = t.transform ? t.transform(e, r) : n(e);
				if (m(i)) for (let e in i) a(i[e], "default" === e ? "" : e);
				else a(i, "");
			};
			if (rA(this._cssVarRefs, [i], r(i)), z(e)) for (let t in e) o(e[t], (e, r) => {
				rA(this._values, [`${i}${r ? `/${r}` : ""}`, t], e);
			});
			else o(e, (e, t) => {
				rA(this._values, [`${i}${t ? `/${t}` : ""}`], e);
			});
		});
	}
	get tokens() {
		return u(this._values);
	}
	get(t, r, n) {
		let a = this._values[t];
		return m(a) ? n ? a[r] : a[r] ?? a[e.defaultMode] : n ? r === e.defaultMode ? a : void 0 : a;
	}
	use(e, t = !1) {
		if (this._cssVarRefs[e]) return t ? `${this._cssVarRefs[e]}` : `var(${this._cssVarRefs[e]})`;
	}
}, aV = class e {
	static walkValue = (t, r, n = []) => {
		for (let a in t) {
			let i = t[a];
			if (z(i)) {
				if (re(i, "__mixin")) {
					r(i, [...n, a]);
					continue;
				}
				e.walkValue(i, r, [...n, a]);
				continue;
			}
			r(i, [...n, a]);
		}
	};
	_values = {};
	constructor(t) {
		e.walkValue(t.value, (e, t) => {
			let r = t.join(".");
			rA(this._values, [r], ro(e, "__mixin"));
		});
	}
	get tokens() {
		return u(this._values);
	}
	get(e) {
		return this._values[e];
	}
}, aH = {
	primary: ["primary"],
	secondary: ["secondary"],
	tertiary: ["tertiary"],
	error: ["error"],
	warning: ["warning"],
	success: ["success"],
	neutral: ["surface", "outline"]
};
let aN = (e) => {
	let t = B(e, ["color", "sys"], {});
	return {
		...e,
		color: { sys: rn(aH, (e) => ru(t, (t, r) => rR(e, (e) => r.indexOf(e) > -1))) }
	};
}, az = (e) => (t) => `rgba(var(${t}--rgb) / ${e})`;
function aW(e, t) {
	return Object.assign((e) => t(e), {
		toString: () => e,
		token: e
	});
}
var aU = (e) => e.reduce((e, t) => Object.assign(e, { [t]: !0 }), {}), aq = class e {
	static propsCanPercent = aU([...aE.boxSize({}).on]);
	static propsCanBaseDp = aU([
		...aE.boxSize({}).on,
		...aE.space({}).on,
		...aE.fontSize({}).on,
		...aE.letterSpacing({}).on,
		...aE.lineHeight({}).on,
		...aE.rounded({}).on
	]);
	static create(t, r) {
		return new e(t, r);
	}
	mode;
	varPrefix;
	cssVars = {};
	tokens = {};
	propValues = {};
	mixins = {};
	dp = (e) => 0 === e ? 0 : `calc(${e} * var(${this.cssVar("space", "dp")}))`;
	transformFallback = (t, r) => e.propsCanBaseDp[t] && rr(r) ? e.propsCanPercent[t] && 1 > Math.abs(r) ? `${100 * r}%` : this.dp(r) : r;
	constructor(e, t = {}) {
		for (let r in this.theme = e, this.varPrefix = t.varPrefix ?? "vk", this.mode = t.mode ?? "light", rA(this.cssVars, [this.cssVar("space", "dp")], "0.1rem"), e) {
			let t = e[r];
			if (t) {
				if (t.type === aF.var) {
					let e = new aB(t, {
						cssVar: (e) => this.cssVar(r, e),
						transformFallback: (e) => this.transformFallback(t.on[0], e)
					});
					for (let n of (this.tokens[r] = e, t.on)) this.propValues[n] = e;
					for (let t of e.tokens) for (let n of ["light", "dark"]) {
						let a = n === this.mode ? "_default" : `_${n}`, i = e.get(t, a, !0);
						y(i) || ("_default" === a ? rA(this.cssVars, [this.cssVar(r, t)], i) : rA(this.cssVars, [a, this.cssVar(r, t)], i));
					}
					continue;
				}
				if (t.type === aF.mixin) {
					let e = new aV(t);
					for (let r of t.on) this.mixins[r] = e;
				}
			}
		}
	}
	cssVar(e, t) {
		return `--${this.varPrefix}-${ed(e)}__${t.replaceAll("/", "--").replaceAll(".", "__")}`;
	}
	get rootCSSVars() {
		return this.cssVars;
	}
	token = new Proxy({}, { get: (e, t) => this.tokens[t] ? Object.assign((e) => this.tokens[t]?.get(e, `_${this.mode}`), { tokens: this.tokens[t]?.tokens }) : this.mixins[t] ? Object.assign((e) => this.mixins[t]?.get(e), { tokens: this.mixins[t]?.tokens }) : void 0 });
	processValue = (e, t) => {
		if (a(t) && re(t, "token")) {
			let r = this.propValues[e]?.use(t.token, !0);
			return r ? t(r) : void 0;
		}
		return this.propValues[e]?.use(t) ?? this.transformFallback(e, t);
	};
	unstable_sx = (e) => new aL({
		mixins: this.mixins,
		varPrefix: this.varPrefix,
		processValue: this.processValue
	}).processAll(e);
	unstable_css(e, t) {
		let r = t ?? {};
		return r.__emotion_styles = r.__emotion_styles ?? function(e, t, r) {
			if (1 === e.length && "object" == typeof e[0] && null !== e[0] && void 0 !== e[0].styles) return e[0];
			var n, a = !0, i = "";
			eG = void 0;
			var o = e[0];
			null == o || void 0 === o.raw ? (a = !1, i += aM(r, t, o)) : i += o[0];
			for (var s = 1; s < e.length; s++) i += aM(r, t, e[s]), a && (i += o[s]);
			aS.lastIndex = 0;
			for (var l = ""; null !== (n = aS.exec(i));) l += "-" + n[1];
			return {
				name: function(e) {
					for (var t, r = 0, n = 0, a = e.length; a >= 4; ++n, a -= 4) t = (65535 & (t = 255 & e.charCodeAt(n) | (255 & e.charCodeAt(++n)) << 8 | (255 & e.charCodeAt(++n)) << 16 | (255 & e.charCodeAt(++n)) << 24)) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= t >>> 24, r = (65535 & t) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ (65535 & r) * 1540483477 + ((r >>> 16) * 59797 << 16);
					switch (a) {
						case 3: r ^= (255 & e.charCodeAt(n + 2)) << 16;
						case 2: r ^= (255 & e.charCodeAt(n + 1)) << 8;
						case 1: r ^= 255 & e.charCodeAt(n), r = (65535 & r) * 1540483477 + ((r >>> 16) * 59797 << 16);
					}
					return r ^= r >>> 13, (((r = (65535 & r) * 1540483477 + ((r >>> 16) * 59797 << 16)) ^ r >>> 15) >>> 0).toString(36);
				}(i) + l,
				styles: i,
				next: eG
			};
		}(this.unstable_sx(t), e?.registered, {}), r.__emotion_styles;
	}
	toFigmaTokens() {
		let e = { space: { dp: {
			$type: "sizing",
			$value: 1
		} } }, t = {}, r = {}, n = (e, t) => m(t) ? {
			$type: e,
			$value: rn(t, (t) => n(e, t).$value)
		} : rt(t) ? {
			$type: e,
			$value: t.replace(/var\(([^)]+)\)/g, (e) => {
				let t = e.slice(4, e.length - 1).slice(`--${this.varPrefix}-`.length).split("--")[0]?.split("__").map((e, t) => 0 === t ? tI(e) : e).join(".") ?? "";
				return t.startsWith("sys.") ? `{${t}}` : `{seed.${t}}`;
			}).replace(/calc\(.+\)$/g, (e) => e.slice(5, e.length - 1))
		} : {
			$type: e,
			$value: t
		};
		for (let a in this.tokens) {
			let i = this.tokens[a], o = (o) => {
				for (let s of i.tokens) if (!s.includes("/")) if (s.startsWith("sys.")) {
					let e = i.get(s, "_default"), l = i.get(s, "_dark");
					aj(t, [a, ...s.split(".")], n(o, e)), e !== l && aj(r, [a, ...s.split(".")], n(o, l));
				} else aj(e, [a, ...s.split(".")], n(o, i.get(s, "_default")));
			};
			switch (a) {
				case "color":
					o("color");
					break;
				case "rounded":
					o("borderRadius");
					break;
				case "shadow":
					o("boxShadow");
					break;
				case "font":
					o("fontFamily");
					break;
				case "fontWeight": o("fontWeight");
			}
		}
		for (let e in this.mixins) {
			let r = this.mixins[e];
			if (!r) continue;
			let a = (a) => {
				for (let i of r.tokens) {
					let o = r.get(i);
					if (!o) continue;
					let s = this.unstable_sx(o)[0];
					aj(t, [e, ...i.split(".")], n(a, s));
				}
			};
			"textStyle" === e && a("typography");
		}
		return {
			seed: e,
			base: aN(t),
			dark: aN(r)
		};
	}
};
let aG = {
	shadow: aE.shadow({
		0: {
			_default: "0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0)",
			_dark: "0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(0, 0, 0, 0)"
		},
		1: {
			_default: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
			_dark: "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)"
		},
		2: {
			_default: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)",
			_dark: "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)"
		},
		3: {
			_default: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)",
			_dark: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)"
		},
		4: {
			_default: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)",
			_dark: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)"
		},
		5: {
			_default: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)",
			_dark: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)"
		}
	}),
	elevation: aE.customMixin("elevation", {
		0: aE.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "0",
			_hover: { shadow: "1" }
		}),
		1: aE.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "1",
			_hover: { shadow: "2" }
		}),
		2: aE.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "2",
			_hover: { shadow: "3" }
		}),
		3: aE.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "3",
			_hover: { shadow: "4" }
		}),
		4: aE.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "4",
			_hover: { shadow: "5" }
		})
	})
};
var aY = (e, t, r, n) => Object.assign(function(e, t, r, n) {
	if (e === t && r === n) return n4;
	let a = new Float32Array(11);
	for (let t = 0; t < 11; ++t) a[t] = ap(.1 * t, e, r);
	return (i) => 0 === i || 1 === i ? i : ap(function(t) {
		let n = 0, i = 1;
		for (; 10 !== i && a[i] <= t; ++i) n += .1;
		let o = n + (t - a[--i]) / (a[i + 1] - a[i]) * .1, s = ab(o, e, r);
		if (s >= .001) {
			var l = o;
			for (let n = 0; n < 8; ++n) {
				let n = ab(l, e, r);
				if (0 === n) break;
				let a = ap(l, e, r) - t;
				l -= a / n;
			}
			return l;
		}
		return 0 === s ? o : function(e, t, r, n, a) {
			let i, o, s = 0;
			do
				(i = ap(o = t + (r - t) / 2, n, a) - e) > 0 ? r = o : t = o;
			while (Math.abs(i) > 1e-7 && ++s < 10);
			return o;
		}(t, n, n + .1, e, r);
	}(i), t, n);
}(e, t, r, n), { toString: () => `cubic-bezier(${e}, ${t}, ${r}, ${n})` });
let aK = {
	duration: {
		sm1: 50,
		sm2: 100,
		sm3: 150,
		sm4: 200,
		md1: 250,
		md2: 300,
		md3: 350,
		md4: 400,
		lg1: 450,
		lg2: 500,
		lg3: 550,
		lg4: 600,
		xl1: 700,
		xl2: 800,
		xl3: 900,
		xl4: 1e3
	},
	easing: {
		linear: aY(0, 0, 1, 1),
		standard: Object.assign(aY(.2, 0, 0, 1), {
			accelerate: aY(.3, 0, 1, 1),
			decelerate: aY(0, 0, 0, 1)
		}),
		emphasized: Object.assign(aY(.2, 0, 0, 1), {
			accelerate: aY(.3, 0, .8, .15),
			decelerate: aY(.05, .7, .1, 1)
		}),
		legacy: Object.assign(aY(.4, 0, .2, 1), {
			decelerate: aY(0, 0, .2, 1),
			accelerate: aY(.4, 0, 1, 1)
		})
	}
}, aX = (e, t) => {
	let r = t ?? {
		...e,
		from: { ...e.to },
		to: { ...e.from }
	};
	return eI({
		onComplete: k(),
		$default: k()
	}, (t, { slots: n, emit: a }) => {
		let i, o = (t, r) => {
			i = ah({
				...e,
				autoplay: !0,
				onComplete: () => {
					r(), a("complete", "enter");
				},
				onUpdate: (e) => {
					Object.assign(t.style, e);
				}
			});
		}, s = (e, t) => {
			i = ah({
				...r,
				autoplay: !0,
				onComplete: () => {
					t(), a("complete", "leave");
				},
				onUpdate: (t) => {
					Object.assign(e.style, t);
				}
			});
		}, l = () => {
			i?.stop();
		};
		return () => eC(rH, {
			css: !1,
			onEnter: o,
			onEnterCancelled: l,
			onLeave: s,
			onLeaveCancelled: l,
			children: n.default?.()
		});
	}, { name: "Transition" });
}, aJ = {
	transitionDuration: aE.transitionDuration(aK.duration),
	transitionTimingFunction: aE.transitionTimingFunction({
		linear: aK.easing.linear.toString(),
		standard: aK.easing.standard.toString(),
		"standard-accelerate": aK.easing.standard.accelerate.toString(),
		"standard-decelerate": aK.easing.standard.decelerate.toString(),
		emphasized: aK.easing.emphasized.toString(),
		"emphasized-decelerate": aK.easing.emphasized.decelerate.toString(),
		"emphasized-accelerate": aK.easing.emphasized.accelerate.toString(),
		legacy: aK.easing.legacy.toString(),
		"legacy-decelerate": aK.easing.legacy.decelerate.toString(),
		"legacy-accelerate": aK.easing.legacy.accelerate.toString()
	})
};
function aZ(e) {
	return e < 0 ? -1 : +(0 !== e);
}
function aQ(e, t, r) {
	return r < e ? e : r > t ? t : r;
}
function a0(e) {
	return (e %= 360) < 0 && (e += 360), e;
}
function a1(e) {
	return (e %= 360) < 0 && (e += 360), e;
}
function a2(e, t) {
	return [
		e[0] * t[0][0] + e[1] * t[0][1] + e[2] * t[0][2],
		e[0] * t[1][0] + e[1] * t[1][1] + e[2] * t[1][2],
		e[0] * t[2][0] + e[1] * t[2][1] + e[2] * t[2][2]
	];
}
var a4 = [
	[
		.41233895,
		.35762064,
		.18051042
	],
	[
		.2126,
		.7152,
		.0722
	],
	[
		.01932141,
		.11916382,
		.95034478
	]
], a5 = [
	[
		3.2413774792388685,
		-1.5376652402851851,
		-.49885366846268053
	],
	[
		-.9691452513005321,
		1.8758853451067872,
		.04156585616912061
	],
	[
		.05562093689691305,
		-.20395524564742123,
		1.0571799111220335
	]
], a3 = [
	95.047,
	100,
	108.883
];
function a8(e, t, r) {
	return (-16777216 | (255 & e) << 16 | (255 & t) << 8 | 255 & r) >>> 0;
}
function a6(e) {
	let t = ir(e[0]);
	return a8(t, ir(e[1]), ir(e[2]));
}
function a9(e) {
	return 116 * ia(function(e) {
		let t = it(e >> 16 & 255);
		return a2([
			t,
			it(e >> 8 & 255),
			it(255 & e)
		], a4);
	}(e)[1] / 100) - 16;
}
function a7(e) {
	return 100 * function(e) {
		let t = e * e * e;
		return t > 216 / 24389 ? t : (116 * e - 16) / (24389 / 27);
	}((e + 16) / 116);
}
function ie(e) {
	return 116 * ia(e / 100) - 16;
}
function it(e) {
	let t = e / 255;
	return t <= .040449936 ? t / 12.92 * 100 : 100 * Math.pow((t + .055) / 1.055, 2.4);
}
function ir(e) {
	var t;
	let r = e / 100;
	return (t = Math.round(255 * (r <= .0031308 ? 12.92 * r : 1.055 * Math.pow(r, 1 / 2.4) - .055))) < 0 ? 0 : t > 255 ? 255 : t;
}
function ia(e) {
	return e > 216 / 24389 ? Math.pow(e, 1 / 3) : (24389 / 27 * e + 16) / 116;
}
var ii = class e {
	static make(t = a3, r = 200 / Math.PI * a7(50) / 100, n = 50, a = 2, i = !1) {
		var o, s;
		let l = .401288 * t[0] + .650173 * t[1] + -.051461 * t[2], u = -.250268 * t[0] + 1.204414 * t[1] + .045854 * t[2], c = -.002079 * t[0] + .048952 * t[1] + .953127 * t[2], f = .8 + a / 10, d = f >= .9 ? (1 - (o = (f - .9) * 10)) * .59 + .69 * o : (1 - (s = (f - .8) * 10)) * .525 + .59 * s, h = i ? 1 : f * (1 - 1 / 3.6 * Math.exp((-r - 42) / 92)), m = [
			100 / l * (h = h > 1 ? 1 : h < 0 ? 0 : h) + 1 - h,
			100 / u * h + 1 - h,
			100 / c * h + 1 - h
		], g = 1 / (5 * r + 1), p = g * g * g * g, b = 1 - p, y = p * r + .1 * b * b * Math.cbrt(5 * r), v = a7(n) / t[1], x = 1.48 + Math.sqrt(v), w = .725 / Math.pow(v, .2), C = [
			Math.pow(y * m[0] * l / 100, .42),
			Math.pow(y * m[1] * u / 100, .42),
			Math.pow(y * m[2] * c / 100, .42)
		], k = [
			400 * C[0] / (C[0] + 27.13),
			400 * C[1] / (C[1] + 27.13),
			400 * C[2] / (C[2] + 27.13)
		];
		return new e(v, (2 * k[0] + k[1] + .05 * k[2]) * w, w, w, d, f, m, y, Math.pow(y, .25), x);
	}
	constructor(e, t, r, n, a, i, o, s, l, u) {
		this.n = e, this.aw = t, this.nbb = r, this.ncb = n, this.c = a, this.nc = i, this.rgbD = o, this.fl = s, this.fLRoot = l, this.z = u;
	}
};
ii.DEFAULT = ii.make();
var io = class e {
	constructor(e, t, r, n, a, i, o, s, l) {
		this.hue = e, this.chroma = t, this.j = r, this.q = n, this.m = a, this.s = i, this.jstar = o, this.astar = s, this.bstar = l;
	}
	distance(e) {
		let t = this.jstar - e.jstar, r = this.astar - e.astar, n = this.bstar - e.bstar;
		return 1.41 * Math.pow(Math.sqrt(t * t + r * r + n * n), .63);
	}
	static fromInt(t) {
		return e.fromIntInViewingConditions(t, ii.DEFAULT);
	}
	static fromIntInViewingConditions(t, r) {
		let n = it((16711680 & t) >> 16), a = it((65280 & t) >> 8), i = it(255 & t), o = .41233895 * n + .35762064 * a + .18051042 * i, s = .2126 * n + .7152 * a + .0722 * i, l = .01932141 * n + .11916382 * a + .95034478 * i, u = r.rgbD[0] * (.401288 * o + .650173 * s - .051461 * l), c = r.rgbD[1] * (-.250268 * o + 1.204414 * s + .045854 * l), f = r.rgbD[2] * (-.002079 * o + .048952 * s + .953127 * l), d = Math.pow(r.fl * Math.abs(u) / 100, .42), h = Math.pow(r.fl * Math.abs(c) / 100, .42), m = Math.pow(r.fl * Math.abs(f) / 100, .42), g = 400 * aZ(u) * d / (d + 27.13), p = 400 * aZ(c) * h / (h + 27.13), b = 400 * aZ(f) * m / (m + 27.13), y = (11 * g + -12 * p + b) / 11, v = (g + p - 2 * b) / 9, x = 180 * Math.atan2(v, y) / Math.PI, w = x < 0 ? x + 360 : x >= 360 ? x - 360 : x, C = w * Math.PI / 180, k = 100 * Math.pow((40 * g + 20 * p + b) / 20 * r.nbb / r.aw, r.c * r.z), P = 4 / r.c * Math.sqrt(k / 100) * (r.aw + 4) * r.fLRoot, M = Math.pow(5e4 / 13 * (.25 * (Math.cos((w < 20.14 ? w + 360 : w) * Math.PI / 180 + 2) + 3.8)) * r.nc * r.ncb * Math.sqrt(y * y + v * v) / ((20 * g + 20 * p + 21 * b) / 20 + .305), .9) * Math.pow(1.64 - Math.pow(.29, r.n), .73), S = M * Math.sqrt(k / 100), _ = S * r.fLRoot, A = 50 * Math.sqrt(M * r.c / (r.aw + 4)), T = 1 / .0228 * Math.log(1 + .0228 * _);
		return new e(w, S, k, P, _, A, 1.7000000000000002 * k / (1 + .007 * k), T * Math.cos(C), T * Math.sin(C));
	}
	static fromJch(t, r, n) {
		return e.fromJchInViewingConditions(t, r, n, ii.DEFAULT);
	}
	static fromJchInViewingConditions(t, r, n, a) {
		let i = 4 / a.c * Math.sqrt(t / 100) * (a.aw + 4) * a.fLRoot, o = r * a.fLRoot, s = 50 * Math.sqrt(r / Math.sqrt(t / 100) * a.c / (a.aw + 4)), l = n * Math.PI / 180, u = 1 / .0228 * Math.log(1 + .0228 * o);
		return new e(n, r, t, i, o, s, 1.7000000000000002 * t / (1 + .007 * t), u * Math.cos(l), u * Math.sin(l));
	}
	static fromUcs(t, r, n) {
		return e.fromUcsInViewingConditions(t, r, n, ii.DEFAULT);
	}
	static fromUcsInViewingConditions(t, r, n, a) {
		let i = (Math.exp(.0228 * Math.sqrt(r * r + n * n)) - 1) / .0228 / a.fLRoot, o = 180 / Math.PI * Math.atan2(n, r);
		return o < 0 && (o += 360), e.fromJchInViewingConditions(t / (1 - (t - 100) * .007), i, o, a);
	}
	toInt() {
		return this.viewed(ii.DEFAULT);
	}
	viewed(e) {
		let t = Math.pow((0 === this.chroma || 0 === this.j ? 0 : this.chroma / Math.sqrt(this.j / 100)) / Math.pow(1.64 - Math.pow(.29, e.n), .73), 1 / .9), r = this.hue * Math.PI / 180, n = .25 * (Math.cos(r + 2) + 3.8), a = e.aw * Math.pow(this.j / 100, 1 / e.c / e.z), i = 5e4 / 13 * n * e.nc * e.ncb, o = a / e.nbb, s = Math.sin(r), l = Math.cos(r), u = 23 * (o + .305) * t / (23 * i + 11 * t * l + 108 * t * s), c = u * l, f = u * s, d = (460 * o + 451 * c + 288 * f) / 1403, h = (460 * o - 891 * c - 261 * f) / 1403, m = (460 * o - 220 * c - 6300 * f) / 1403, g = Math.max(0, 27.13 * Math.abs(d) / (400 - Math.abs(d))), p = aZ(d) * (100 / e.fl) * Math.pow(g, 1 / .42), b = Math.max(0, 27.13 * Math.abs(h) / (400 - Math.abs(h))), y = aZ(h) * (100 / e.fl) * Math.pow(b, 1 / .42), v = Math.max(0, 27.13 * Math.abs(m) / (400 - Math.abs(m))), x = aZ(m) * (100 / e.fl) * Math.pow(v, 1 / .42), w = p / e.rgbD[0], C = y / e.rgbD[1], k = x / e.rgbD[2];
		return function(e, t, r) {
			let n = a5[0][0] * e + a5[0][1] * t + a5[0][2] * r, a = a5[1][0] * e + a5[1][1] * t + a5[1][2] * r, i = a5[2][0] * e + a5[2][1] * t + a5[2][2] * r, o = ir(n);
			return a8(o, ir(a), ir(i));
		}(1.86206786 * w - 1.01125463 * C + .14918677 * k, .38752654 * w + .62144744 * C - .00897398 * k, -.0158415 * w - .03412294 * C + 1.04996444 * k);
	}
	static fromXyzInViewingConditions(t, r, n, a) {
		let i = a.rgbD[0] * (.401288 * t + .650173 * r - .051461 * n), o = a.rgbD[1] * (-.250268 * t + 1.204414 * r + .045854 * n), s = a.rgbD[2] * (-.002079 * t + .048952 * r + .953127 * n), l = Math.pow(a.fl * Math.abs(i) / 100, .42), u = Math.pow(a.fl * Math.abs(o) / 100, .42), c = Math.pow(a.fl * Math.abs(s) / 100, .42), f = 400 * aZ(i) * l / (l + 27.13), d = 400 * aZ(o) * u / (u + 27.13), h = 400 * aZ(s) * c / (c + 27.13), m = (11 * f + -12 * d + h) / 11, g = (f + d - 2 * h) / 9, p = 180 * Math.atan2(g, m) / Math.PI, b = p < 0 ? p + 360 : p >= 360 ? p - 360 : p, y = b * Math.PI / 180, v = 100 * Math.pow((40 * f + 20 * d + h) / 20 * a.nbb / a.aw, a.c * a.z), x = 4 / a.c * Math.sqrt(v / 100) * (a.aw + 4) * a.fLRoot, w = Math.pow(5e4 / 13 * (1 / 4 * (Math.cos((b < 20.14 ? b + 360 : b) * Math.PI / 180 + 2) + 3.8)) * a.nc * a.ncb * Math.sqrt(m * m + g * g) / ((20 * f + 20 * d + 21 * h) / 20 + .305), .9) * Math.pow(1.64 - Math.pow(.29, a.n), .73), C = w * Math.sqrt(v / 100), k = C * a.fLRoot, P = 50 * Math.sqrt(w * a.c / (a.aw + 4)), M = Math.log(1 + .0228 * k) / .0228;
		return new e(b, C, v, x, k, P, 1.7000000000000002 * v / (1 + .007 * v), M * Math.cos(y), M * Math.sin(y));
	}
	xyzInViewingConditions(e) {
		let t = Math.pow((0 === this.chroma || 0 === this.j ? 0 : this.chroma / Math.sqrt(this.j / 100)) / Math.pow(1.64 - Math.pow(.29, e.n), .73), 1 / .9), r = this.hue * Math.PI / 180, n = .25 * (Math.cos(r + 2) + 3.8), a = e.aw * Math.pow(this.j / 100, 1 / e.c / e.z), i = 5e4 / 13 * n * e.nc * e.ncb, o = a / e.nbb, s = Math.sin(r), l = Math.cos(r), u = 23 * (o + .305) * t / (23 * i + 11 * t * l + 108 * t * s), c = u * l, f = u * s, d = (460 * o + 451 * c + 288 * f) / 1403, h = (460 * o - 891 * c - 261 * f) / 1403, m = (460 * o - 220 * c - 6300 * f) / 1403, g = Math.max(0, 27.13 * Math.abs(d) / (400 - Math.abs(d))), p = aZ(d) * (100 / e.fl) * Math.pow(g, 1 / .42), b = Math.max(0, 27.13 * Math.abs(h) / (400 - Math.abs(h))), y = aZ(h) * (100 / e.fl) * Math.pow(b, 1 / .42), v = Math.max(0, 27.13 * Math.abs(m) / (400 - Math.abs(m))), x = aZ(m) * (100 / e.fl) * Math.pow(v, 1 / .42), w = p / e.rgbD[0], C = y / e.rgbD[1], k = x / e.rgbD[2];
		return [
			1.86206786 * w - 1.01125463 * C + .14918677 * k,
			.38752654 * w + .62144744 * C - .00897398 * k,
			-.0158415 * w - .03412294 * C + 1.04996444 * k
		];
	}
}, is = class e {
	static sanitizeRadians(e) {
		return (e + 8 * Math.PI) % (2 * Math.PI);
	}
	static trueDelinearized(e) {
		let t = e / 100;
		return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055);
	}
	static chromaticAdaptation(e) {
		let t = Math.pow(Math.abs(e), .42);
		return 400 * aZ(e) * t / (t + 27.13);
	}
	static hueOf(t) {
		let r = a2(t, e.SCALED_DISCOUNT_FROM_LINRGB), n = e.chromaticAdaptation(r[0]), a = e.chromaticAdaptation(r[1]), i = e.chromaticAdaptation(r[2]);
		return Math.atan2((n + a - 2 * i) / 9, (11 * n + -12 * a + i) / 11);
	}
	static areInCyclicOrder(t, r, n) {
		return e.sanitizeRadians(r - t) < e.sanitizeRadians(n - t);
	}
	static intercept(e, t, r) {
		return (t - e) / (r - e);
	}
	static lerpPoint(e, t, r) {
		return [
			e[0] + (r[0] - e[0]) * t,
			e[1] + (r[1] - e[1]) * t,
			e[2] + (r[2] - e[2]) * t
		];
	}
	static setCoordinate(t, r, n, a) {
		let i = e.intercept(t[a], r, n[a]);
		return e.lerpPoint(t, i, n);
	}
	static isBounded(e) {
		return 0 <= e && e <= 100;
	}
	static nthVertex(t, r) {
		let n = e.Y_FROM_LINRGB[0], a = e.Y_FROM_LINRGB[1], i = e.Y_FROM_LINRGB[2], o = r % 4 <= 1 ? 0 : 100, s = 100 * (r % 2 != 0);
		if (r < 4) {
			let r = (t - o * a - s * i) / n;
			return e.isBounded(r) ? [
				r,
				o,
				s
			] : [
				-1,
				-1,
				-1
			];
		}
		if (r < 8) {
			let r = (t - s * n - o * i) / a;
			return e.isBounded(r) ? [
				s,
				r,
				o
			] : [
				-1,
				-1,
				-1
			];
		}
		{
			let r = (t - o * n - s * a) / i;
			return e.isBounded(r) ? [
				o,
				s,
				r
			] : [
				-1,
				-1,
				-1
			];
		}
	}
	static bisectToSegment(t, r) {
		let n = [
			-1,
			-1,
			-1
		], a = n, i = 0, o = 0, s = !1, l = !0;
		for (let u = 0; u < 12; u++) {
			let c = e.nthVertex(t, u);
			if (c[0] < 0) continue;
			let f = e.hueOf(c);
			if (!s) {
				n = c, a = c, i = f, o = f, s = !0;
				continue;
			}
			(l || e.areInCyclicOrder(i, f, o)) && (l = !1, e.areInCyclicOrder(i, r, f) ? (a = c, o = f) : (n = c, i = f));
		}
		return [n, a];
	}
	static midpoint(e, t) {
		return [
			(e[0] + t[0]) / 2,
			(e[1] + t[1]) / 2,
			(e[2] + t[2]) / 2
		];
	}
	static criticalPlaneBelow(e) {
		return Math.floor(e - .5);
	}
	static criticalPlaneAbove(e) {
		return Math.ceil(e - .5);
	}
	static bisectToLimit(t, r) {
		let n = e.bisectToSegment(t, r), a = n[0], i = e.hueOf(a), o = n[1];
		for (let t = 0; t < 3; t++) if (a[t] !== o[t]) {
			let n = -1, s = 255;
			a[t] < o[t] ? (n = e.criticalPlaneBelow(e.trueDelinearized(a[t])), s = e.criticalPlaneAbove(e.trueDelinearized(o[t]))) : (n = e.criticalPlaneAbove(e.trueDelinearized(a[t])), s = e.criticalPlaneBelow(e.trueDelinearized(o[t])));
			for (let l = 0; l < 8; l++) if (1 >= Math.abs(s - n)) break;
			else {
				let l = Math.floor((n + s) / 2), u = e.CRITICAL_PLANES[l], c = e.setCoordinate(a, u, o, t), f = e.hueOf(c);
				e.areInCyclicOrder(i, r, f) ? (o = c, s = l) : (a = c, i = f, n = l);
			}
		}
		return e.midpoint(a, o);
	}
	static inverseChromaticAdaptation(e) {
		let t = Math.abs(e), r = Math.max(0, 27.13 * t / (400 - t));
		return aZ(e) * Math.pow(r, 1 / .42);
	}
	static findResultByJ(t, r, n) {
		let a = 11 * Math.sqrt(n), i = ii.DEFAULT, o = 1 / Math.pow(1.64 - Math.pow(.29, i.n), .73), s = .25 * (Math.cos(t + 2) + 3.8) * (5e4 / 13) * i.nc * i.ncb, l = Math.sin(t), u = Math.cos(t);
		for (let t = 0; t < 5; t++) {
			let c = a / 100, f = Math.pow((0 === r || 0 === a ? 0 : r / Math.sqrt(c)) * o, 1 / .9), d = i.aw * Math.pow(c, 1 / i.c / i.z) / i.nbb, h = 23 * (d + .305) * f / (23 * s + 11 * f * u + 108 * f * l), m = h * u, g = h * l, p = (460 * d + 451 * m + 288 * g) / 1403, b = (460 * d - 891 * m - 261 * g) / 1403, y = (460 * d - 220 * m - 6300 * g) / 1403, v = e.inverseChromaticAdaptation(p), x = a2([
				v,
				e.inverseChromaticAdaptation(b),
				e.inverseChromaticAdaptation(y)
			], e.LINRGB_FROM_SCALED_DISCOUNT);
			if (x[0] < 0 || x[1] < 0 || x[2] < 0) break;
			let w = e.Y_FROM_LINRGB[0], C = e.Y_FROM_LINRGB[1], k = e.Y_FROM_LINRGB[2], P = w * x[0] + C * x[1] + k * x[2];
			if (P <= 0) break;
			if (4 === t || .002 > Math.abs(P - n)) {
				if (x[0] > 100.01 || x[1] > 100.01 || x[2] > 100.01) return 0;
				return a6(x);
			}
			a -= (P - n) * a / (2 * P);
		}
		return 0;
	}
	static solveToInt(t, r, n) {
		if (r < 1e-4 || n < 1e-4 || n > 99.9999) {
			let e = ir(a7(n));
			return a8(e, e, e);
		}
		let a = (t = a1(t)) / 180 * Math.PI, i = a7(n), o = e.findResultByJ(a, r, i);
		return 0 !== o ? o : a6(e.bisectToLimit(i, a));
	}
	static solveToCam(t, r, n) {
		return io.fromInt(e.solveToInt(t, r, n));
	}
};
is.SCALED_DISCOUNT_FROM_LINRGB = [
	[
		.001200833568784504,
		.002389694492170889,
		.0002795742885861124
	],
	[
		.0005891086651375999,
		.0029785502573438758,
		.0003270666104008398
	],
	[
		.00010146692491640572,
		.0005364214359186694,
		.0032979401770712076
	]
], is.LINRGB_FROM_SCALED_DISCOUNT = [
	[
		1373.2198709594231,
		-1100.4251190754821,
		-7.278681089101213
	],
	[
		-271.815969077903,
		559.6580465940733,
		-32.46047482791194
	],
	[
		1.9622899599665666,
		-57.173814538844006,
		308.7233197812385
	]
], is.Y_FROM_LINRGB = [
	.2126,
	.7152,
	.0722
], is.CRITICAL_PLANES = [
	.015176349177441876,
	.045529047532325624,
	.07588174588720938,
	.10623444424209313,
	.13658714259697685,
	.16693984095186062,
	.19729253930674434,
	.2276452376616281,
	.2579979360165119,
	.28835063437139563,
	.3188300904430532,
	.350925934958123,
	.3848314933096426,
	.42057480301049466,
	.458183274052838,
	.4976837250274023,
	.5391024159806381,
	.5824650784040898,
	.6277969426914107,
	.6751227633498623,
	.7244668422128921,
	.775853049866786,
	.829304845476233,
	.8848452951698498,
	.942497089126609,
	1.0022825574869039,
	1.0642236851973577,
	1.1283421258858297,
	1.1946592148522128,
	1.2631959812511864,
	1.3339731595349034,
	1.407011200216447,
	1.4823302800086415,
	1.5599503113873272,
	1.6398909516233677,
	1.7221716113234105,
	1.8068114625156377,
	1.8938294463134073,
	1.9832442801866852,
	2.075074464868551,
	2.1693382909216234,
	2.2660538449872063,
	2.36523901573795,
	2.4669114995532007,
	2.5710888059345764,
	2.6777882626779785,
	2.7870270208169257,
	2.898822059350997,
	3.0131901897720907,
	3.1301480604002863,
	3.2497121605402226,
	3.3718988244681087,
	3.4967242352587946,
	3.624204428461639,
	3.754355295633311,
	3.887192587735158,
	4.022731918402185,
	4.160988767090289,
	4.301978482107941,
	4.445716283538092,
	4.592217266055746,
	4.741496401646282,
	4.893568542229298,
	5.048448422192488,
	5.20615066083972,
	5.3666897647573375,
	5.5300801301023865,
	5.696336044816294,
	5.865471690767354,
	6.037501145825082,
	6.212438385869475,
	6.390297286737924,
	6.571091626112461,
	6.7548350853498045,
	6.941541251256611,
	7.131223617812143,
	7.323895587840543,
	7.5195704746346665,
	7.7182615035334345,
	7.919981813454504,
	8.124744458384042,
	8.332562408825165,
	8.543448553206703,
	8.757415699253682,
	8.974476575321063,
	9.194643831691977,
	9.417930041841839,
	9.644347703669503,
	9.873909240696694,
	10.106627003236781,
	10.342513269534024,
	10.58158024687427,
	10.8238400726681,
	11.069304815507364,
	11.317986476196008,
	11.569896988756009,
	11.825048221409341,
	12.083451977536606,
	12.345119996613247,
	12.610063955123938,
	12.878295467455942,
	13.149826086772048,
	13.42466730586372,
	13.702830557985108,
	13.984327217668513,
	14.269168601521828,
	14.55736596900856,
	14.848930523210871,
	15.143873411576273,
	15.44220572664832,
	15.743938506781891,
	16.04908273684337,
	16.35764934889634,
	16.66964922287304,
	16.985093187232053,
	17.30399201960269,
	17.62635644741625,
	17.95219714852476,
	18.281524751807332,
	18.614349837764564,
	18.95068293910138,
	19.290534541298456,
	19.633915083172692,
	19.98083495742689,
	20.331304511189067,
	20.685334046541502,
	21.042933821039977,
	21.404114048223256,
	21.76888489811322,
	22.137256497705877,
	22.50923893145328,
	22.884842241736916,
	23.264076429332462,
	23.6469514538663,
	24.033477234264016,
	24.42366364919083,
	24.817520537484558,
	25.21505769858089,
	25.61628489293138,
	26.021211842414342,
	26.429848230738664,
	26.842203703840827,
	27.258287870275353,
	27.678110301598522,
	28.10168053274597,
	28.529008062403893,
	28.96010235337422,
	29.39497283293396,
	29.83362889318845,
	30.276079891419332,
	30.722335150426627,
	31.172403958865512,
	31.62629557157785,
	32.08401920991837,
	32.54558406207592,
	33.010999283389665,
	33.4802739966603,
	33.953417292456834,
	34.430438229418264,
	34.911345834551085,
	35.39614910352207,
	35.88485700094671,
	36.37747846067349,
	36.87402238606382,
	37.37449765026789,
	37.87891309649659,
	38.38727753828926,
	38.89959975977785,
	39.41588851594697,
	39.93615253289054,
	40.460400508064545,
	40.98864111053629,
	41.520882981230194,
	42.05713473317016,
	42.597404951718396,
	43.141702194811224,
	43.6900349931913,
	44.24241185063697,
	44.798841244188324,
	45.35933162437017,
	45.92389141541209,
	46.49252901546552,
	47.065252796817916,
	47.64207110610409,
	48.22299226451468,
	48.808024568002054,
	49.3971762874833,
	49.9904556690408,
	50.587870934119984,
	51.189430279724725,
	51.79514187861014,
	52.40501387947288,
	53.0190544071392,
	53.637271562750364,
	54.259673423945976,
	54.88626804504493,
	55.517063457223934,
	56.15206766869424,
	56.79128866487574,
	57.43473440856916,
	58.08241284012621,
	58.734331877617365,
	59.39049941699807,
	60.05092333227251,
	60.715611475655585,
	61.38457167773311,
	62.057811747619894,
	62.7353394731159,
	63.417162620860914,
	64.10328893648692,
	64.79372614476921,
	65.48848194977529,
	66.18756403501224,
	66.89098006357258,
	67.59873767827808,
	68.31084450182222,
	69.02730813691093,
	69.74813616640164,
	70.47333615344107,
	71.20291564160104,
	71.93688215501312,
	72.67524319850172,
	73.41800625771542,
	74.16517879925733,
	74.9167682708136,
	75.67278210128072,
	76.43322770089146,
	77.1981124613393,
	77.96744375590167,
	78.74122893956174,
	79.51947534912904,
	80.30219030335869,
	81.08938110306934,
	81.88105503125999,
	82.67721935322541,
	83.4778813166706,
	84.28304815182372,
	85.09272707154808,
	85.90692527145302,
	86.72564993000343,
	87.54890820862819,
	88.3767072518277,
	89.2090541872801,
	90.04595612594655,
	90.88742016217518,
	91.73345337380438,
	92.58406282226491,
	93.43925555268066,
	94.29903859396902,
	95.16341895893969,
	96.03240364439274,
	96.9059996312159,
	97.78421388448044,
	98.6670533535366,
	99.55452497210776
];
var il = class e {
	static from(t, r, n) {
		return new e(is.solveToInt(t, r, n));
	}
	static fromInt(t) {
		return new e(t);
	}
	toInt() {
		return this.argb;
	}
	get hue() {
		return this.internalHue;
	}
	set hue(e) {
		this.setInternalState(is.solveToInt(e, this.internalChroma, this.internalTone));
	}
	get chroma() {
		return this.internalChroma;
	}
	set chroma(e) {
		this.setInternalState(is.solveToInt(this.internalHue, e, this.internalTone));
	}
	get tone() {
		return this.internalTone;
	}
	set tone(e) {
		this.setInternalState(is.solveToInt(this.internalHue, this.internalChroma, e));
	}
	constructor(e) {
		this.argb = e;
		let t = io.fromInt(e);
		this.internalHue = t.hue, this.internalChroma = t.chroma, this.internalTone = a9(e), this.argb = e;
	}
	setInternalState(e) {
		let t = io.fromInt(e);
		this.internalHue = t.hue, this.internalChroma = t.chroma, this.internalTone = a9(e), this.argb = e;
	}
	inViewingConditions(t) {
		let r = io.fromInt(this.toInt()).xyzInViewingConditions(t), n = io.fromXyzInViewingConditions(r[0], r[1], r[2], ii.make());
		return e.from(n.hue, n.chroma, ie(r[1]));
	}
}, iu = class e {
	static ratioOfTones(t, r) {
		return t = aQ(0, 100, t), r = aQ(0, 100, r), e.ratioOfYs(a7(t), a7(r));
	}
	static ratioOfYs(e, t) {
		let r = e > t ? e : t;
		return (r + 5) / ((r === t ? e : t) + 5);
	}
	static lighter(t, r) {
		if (t < 0 || t > 100) return -1;
		let n = a7(t), a = r * (n + 5) - 5, i = e.ratioOfYs(a, n), o = Math.abs(i - r);
		if (i < r && o > .04) return -1;
		let s = ie(a) + .4;
		return s < 0 || s > 100 ? -1 : s;
	}
	static darker(t, r) {
		if (t < 0 || t > 100) return -1;
		let n = a7(t), a = (n + 5) / r - 5, i = e.ratioOfYs(n, a), o = Math.abs(i - r);
		if (i < r && o > .04) return -1;
		let s = ie(a) - .4;
		return s < 0 || s > 100 ? -1 : s;
	}
	static lighterUnsafe(t, r) {
		let n = e.lighter(t, r);
		return n < 0 ? 100 : n;
	}
	static darkerUnsafe(t, r) {
		let n = e.darker(t, r);
		return n < 0 ? 0 : n;
	}
}, ic = class e {
	static isDisliked(e) {
		let t = Math.round(e.hue) >= 90 && 111 >= Math.round(e.hue), r = Math.round(e.chroma) > 16, n = 65 > Math.round(e.tone);
		return t && r && n;
	}
	static fixIfDisliked(t) {
		return e.isDisliked(t) ? il.from(t.hue, t.chroma, 70) : t;
	}
}, id = class e {
	static fromPalette(t) {
		return new e(t.name ?? "", t.palette, t.tone, t.isBackground ?? !1, t.background, t.secondBackground, t.contrastCurve, t.toneDeltaPair);
	}
	constructor(e, t, r, n, a, i, o, s) {
		if (this.name = e, this.palette = t, this.tone = r, this.isBackground = n, this.background = a, this.secondBackground = i, this.contrastCurve = o, this.toneDeltaPair = s, this.hctCache = /* @__PURE__ */ new Map(), !a && i) throw Error(`Color ${e} has secondBackgrounddefined, but background is not defined.`);
		if (!a && o) throw Error(`Color ${e} has contrastCurvedefined, but background is not defined.`);
		if (a && !o) throw Error(`Color ${e} has backgrounddefined, but contrastCurve is not defined.`);
	}
	getArgb(e) {
		return this.getHct(e).toInt();
	}
	getHct(e) {
		let t = this.hctCache.get(e);
		if (null != t) return t;
		let r = this.getTone(e), n = this.palette(e).getHct(r);
		return this.hctCache.size > 4 && this.hctCache.clear(), this.hctCache.set(e, n), n;
	}
	getTone(t) {
		let r = t.contrastLevel < 0;
		if (this.toneDeltaPair) {
			let n = this.toneDeltaPair(t), a = n.roleA, i = n.roleB, o = n.delta, s = n.polarity, l = n.stayTogether, u = this.background(t).getTone(t), c = "nearer" === s || "lighter" === s && !t.isDark || "darker" === s && t.isDark, f = c ? a : i, d = c ? i : a, h = this.name === f.name, m = t.isDark ? 1 : -1, g = f.contrastCurve.get(t.contrastLevel), p = d.contrastCurve.get(t.contrastLevel), b = f.tone(t), y = iu.ratioOfTones(u, b) >= g ? b : e.foregroundTone(u, g), v = d.tone(t), x = iu.ratioOfTones(u, v) >= p ? v : e.foregroundTone(u, p);
			return r && (y = e.foregroundTone(u, g), x = e.foregroundTone(u, p)), (x - y) * m >= o || ((x = aQ(0, 100, y + o * m)) - y) * m >= o || (y = aQ(0, 100, x - o * m)), 50 <= y && y < 60 ? x = m > 0 ? Math.max(x, (y = 60) + o * m) : Math.min(x, (y = 49) + o * m) : 50 <= x && x < 60 && (x = l ? m > 0 ? Math.max(x, (y = 60) + o * m) : Math.min(x, (y = 49) + o * m) : m > 0 ? 60 : 49), h ? y : x;
		}
		{
			let n = this.tone(t);
			if (null == this.background) return n;
			let a = this.background(t).getTone(t), i = this.contrastCurve.get(t.contrastLevel);
			if (iu.ratioOfTones(a, n) >= i || (n = e.foregroundTone(a, i)), r && (n = e.foregroundTone(a, i)), this.isBackground && 50 <= n && n < 60 && (n = iu.ratioOfTones(49, a) >= i ? 49 : 60), this.secondBackground) {
				let [r, a] = [this.background, this.secondBackground], [o, s] = [r(t).getTone(t), a(t).getTone(t)], [l, u] = [Math.max(o, s), Math.min(o, s)];
				if (iu.ratioOfTones(l, n) >= i && iu.ratioOfTones(u, n) >= i) return n;
				let c = iu.lighter(l, i), f = iu.darker(u, i), d = [];
				return (-1 !== c && d.push(c), -1 !== f && d.push(f), e.tonePrefersLightForeground(o) || e.tonePrefersLightForeground(s)) ? c < 0 ? 100 : c : 1 === d.length ? d[0] : f < 0 ? 0 : f;
			}
			return n;
		}
	}
	static foregroundTone(t, r) {
		let n = iu.lighterUnsafe(t, r), a = iu.darkerUnsafe(t, r), i = iu.ratioOfTones(n, t), o = iu.ratioOfTones(a, t);
		if (!e.tonePrefersLightForeground(t)) return o >= r || o >= i ? a : n;
		{
			let e = .1 > Math.abs(i - o) && i < r && o < r;
			return i >= r || i >= o || e ? n : a;
		}
	}
	static tonePrefersLightForeground(e) {
		return 60 > Math.round(e);
	}
	static toneAllowsLightForeground(e) {
		return 49 >= Math.round(e);
	}
	static enableLightForeground(t) {
		return e.tonePrefersLightForeground(t) && !e.toneAllowsLightForeground(t) ? 49 : t;
	}
}, ih = class e {
	static fromInt(t) {
		let r = il.fromInt(t);
		return e.fromHct(r);
	}
	static fromHct(t) {
		return new e(t.hue, t.chroma, t);
	}
	static fromHueAndChroma(t, r) {
		let n = new im(t, r).create();
		return new e(t, r, n);
	}
	constructor(e, t, r) {
		this.hue = e, this.chroma = t, this.keyColor = r, this.cache = /* @__PURE__ */ new Map();
	}
	tone(e) {
		let t = this.cache.get(e);
		return void 0 === t && (t = il.from(this.hue, this.chroma, e).toInt(), this.cache.set(e, t)), t;
	}
	getHct(e) {
		return il.fromInt(this.tone(e));
	}
}, im = class {
	constructor(e, t) {
		this.hue = e, this.requestedChroma = t, this.chromaCache = /* @__PURE__ */ new Map(), this.maxChromaValue = 200;
	}
	create() {
		let e = 0, t = 100;
		for (; e < t;) {
			let r = Math.floor((e + t) / 2), n = this.maxChroma(r) < this.maxChroma(r + 1);
			if (this.maxChroma(r) >= this.requestedChroma - .01) if (Math.abs(e - 50) < Math.abs(t - 50)) t = r;
			else {
				if (e === r) return il.from(this.hue, this.requestedChroma, e);
				e = r;
			}
			else n ? e = r + 1 : t = r;
		}
		return il.from(this.hue, this.requestedChroma, e);
	}
	maxChroma(e) {
		if (this.chromaCache.has(e)) return this.chromaCache.get(e);
		let t = il.from(this.hue, this.maxChromaValue, e).chroma;
		return this.chromaCache.set(e, t), t;
	}
}, ig = class {
	constructor(e, t, r, n) {
		this.low = e, this.normal = t, this.medium = r, this.high = n;
	}
	get(e) {
		var t, r, n, a, i, o, s, l, u;
		return e <= -1 ? this.low : e < 0 ? (t = this.low, r = this.normal, (1 - (n = (e - -1) / 1)) * t + n * r) : e < .5 ? (a = this.normal, i = this.medium, (1 - (o = (e - 0) / .5)) * a + o * i) : e < 1 ? (s = this.medium, l = this.high, (1 - (u = (e - .5) / .5)) * s + u * l) : this.high;
	}
}, ip = class {
	constructor(e, t, r, n, a) {
		this.roleA = e, this.roleB = t, this.delta = r, this.polarity = n, this.stayTogether = a;
	}
};
function ib(e) {
	return e.variant === eY.FIDELITY || e.variant === eY.CONTENT;
}
function iy(e) {
	return e.variant === eY.MONOCHROME;
}
(eU = eY || (eY = {}))[eU.MONOCHROME = 0] = "MONOCHROME", eU[eU.NEUTRAL = 1] = "NEUTRAL", eU[eU.TONAL_SPOT = 2] = "TONAL_SPOT", eU[eU.VIBRANT = 3] = "VIBRANT", eU[eU.EXPRESSIVE = 4] = "EXPRESSIVE", eU[eU.FIDELITY = 5] = "FIDELITY", eU[eU.CONTENT = 6] = "CONTENT", eU[eU.RAINBOW = 7] = "RAINBOW", eU[eU.FRUIT_SALAD = 8] = "FRUIT_SALAD";
var iv = class e {
	static highestSurface(t) {
		return t.isDark ? e.surfaceBright : e.surfaceDim;
	}
};
iv.contentAccentToneDelta = 15, iv.primaryPaletteKeyColor = id.fromPalette({
	name: "primary_palette_key_color",
	palette: (e) => e.primaryPalette,
	tone: (e) => e.primaryPalette.keyColor.tone
}), iv.secondaryPaletteKeyColor = id.fromPalette({
	name: "secondary_palette_key_color",
	palette: (e) => e.secondaryPalette,
	tone: (e) => e.secondaryPalette.keyColor.tone
}), iv.tertiaryPaletteKeyColor = id.fromPalette({
	name: "tertiary_palette_key_color",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => e.tertiaryPalette.keyColor.tone
}), iv.neutralPaletteKeyColor = id.fromPalette({
	name: "neutral_palette_key_color",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.neutralPalette.keyColor.tone
}), iv.neutralVariantPaletteKeyColor = id.fromPalette({
	name: "neutral_variant_palette_key_color",
	palette: (e) => e.neutralVariantPalette,
	tone: (e) => e.neutralVariantPalette.keyColor.tone
}), iv.background = id.fromPalette({
	name: "background",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 6 : 98,
	isBackground: !0
}), iv.onBackground = id.fromPalette({
	name: "on_background",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 90 : 10,
	background: (e) => iv.background,
	contrastCurve: new ig(3, 3, 4.5, 7)
}), iv.surface = id.fromPalette({
	name: "surface",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 6 : 98,
	isBackground: !0
}), iv.surfaceDim = id.fromPalette({
	name: "surface_dim",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 6 : new ig(87, 87, 80, 75).get(e.contrastLevel),
	isBackground: !0
}), iv.surfaceBright = id.fromPalette({
	name: "surface_bright",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? new ig(24, 24, 29, 34).get(e.contrastLevel) : 98,
	isBackground: !0
}), iv.surfaceContainerLowest = id.fromPalette({
	name: "surface_container_lowest",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? new ig(4, 4, 2, 0).get(e.contrastLevel) : 100,
	isBackground: !0
}), iv.surfaceContainerLow = id.fromPalette({
	name: "surface_container_low",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? new ig(10, 10, 11, 12).get(e.contrastLevel) : new ig(96, 96, 96, 95).get(e.contrastLevel),
	isBackground: !0
}), iv.surfaceContainer = id.fromPalette({
	name: "surface_container",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? new ig(12, 12, 16, 20).get(e.contrastLevel) : new ig(94, 94, 92, 90).get(e.contrastLevel),
	isBackground: !0
}), iv.surfaceContainerHigh = id.fromPalette({
	name: "surface_container_high",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? new ig(17, 17, 21, 25).get(e.contrastLevel) : new ig(92, 92, 88, 85).get(e.contrastLevel),
	isBackground: !0
}), iv.surfaceContainerHighest = id.fromPalette({
	name: "surface_container_highest",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? new ig(22, 22, 26, 30).get(e.contrastLevel) : new ig(90, 90, 84, 80).get(e.contrastLevel),
	isBackground: !0
}), iv.onSurface = id.fromPalette({
	name: "on_surface",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 90 : 10,
	background: (e) => iv.highestSurface(e),
	contrastCurve: new ig(4.5, 7, 11, 21)
}), iv.surfaceVariant = id.fromPalette({
	name: "surface_variant",
	palette: (e) => e.neutralVariantPalette,
	tone: (e) => e.isDark ? 30 : 90,
	isBackground: !0
}), iv.onSurfaceVariant = id.fromPalette({
	name: "on_surface_variant",
	palette: (e) => e.neutralVariantPalette,
	tone: (e) => e.isDark ? 80 : 30,
	background: (e) => iv.highestSurface(e),
	contrastCurve: new ig(3, 4.5, 7, 11)
}), iv.inverseSurface = id.fromPalette({
	name: "inverse_surface",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 90 : 20
}), iv.inverseOnSurface = id.fromPalette({
	name: "inverse_on_surface",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 20 : 95,
	background: (e) => iv.inverseSurface,
	contrastCurve: new ig(4.5, 7, 11, 21)
}), iv.outline = id.fromPalette({
	name: "outline",
	palette: (e) => e.neutralVariantPalette,
	tone: (e) => e.isDark ? 60 : 50,
	background: (e) => iv.highestSurface(e),
	contrastCurve: new ig(1.5, 3, 4.5, 7)
}), iv.outlineVariant = id.fromPalette({
	name: "outline_variant",
	palette: (e) => e.neutralVariantPalette,
	tone: (e) => e.isDark ? 30 : 80,
	background: (e) => iv.highestSurface(e),
	contrastCurve: new ig(1, 1, 3, 4.5)
}), iv.shadow = id.fromPalette({
	name: "shadow",
	palette: (e) => e.neutralPalette,
	tone: (e) => 0
}), iv.scrim = id.fromPalette({
	name: "scrim",
	palette: (e) => e.neutralPalette,
	tone: (e) => 0
}), iv.surfaceTint = id.fromPalette({
	name: "surface_tint",
	palette: (e) => e.primaryPalette,
	tone: (e) => e.isDark ? 80 : 40,
	isBackground: !0
}), iv.primary = id.fromPalette({
	name: "primary",
	palette: (e) => e.primaryPalette,
	tone: (e) => iy(e) ? 100 * !!e.isDark : e.isDark ? 80 : 40,
	isBackground: !0,
	background: (e) => iv.highestSurface(e),
	contrastCurve: new ig(3, 4.5, 7, 7),
	toneDeltaPair: (e) => new ip(iv.primaryContainer, iv.primary, 10, "nearer", !1)
}), iv.onPrimary = id.fromPalette({
	name: "on_primary",
	palette: (e) => e.primaryPalette,
	tone: (e) => iy(e) ? e.isDark ? 10 : 90 : e.isDark ? 20 : 100,
	background: (e) => iv.primary,
	contrastCurve: new ig(4.5, 7, 11, 21)
}), iv.primaryContainer = id.fromPalette({
	name: "primary_container",
	palette: (e) => e.primaryPalette,
	tone: (e) => ib(e) ? e.sourceColorHct.tone : iy(e) ? e.isDark ? 85 : 25 : e.isDark ? 30 : 90,
	isBackground: !0,
	background: (e) => iv.highestSurface(e),
	contrastCurve: new ig(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new ip(iv.primaryContainer, iv.primary, 10, "nearer", !1)
}), iv.onPrimaryContainer = id.fromPalette({
	name: "on_primary_container",
	palette: (e) => e.primaryPalette,
	tone: (e) => ib(e) ? id.foregroundTone(iv.primaryContainer.tone(e), 4.5) : iy(e) ? 100 * !e.isDark : e.isDark ? 90 : 30,
	background: (e) => iv.primaryContainer,
	contrastCurve: new ig(3, 4.5, 7, 11)
}), iv.inversePrimary = id.fromPalette({
	name: "inverse_primary",
	palette: (e) => e.primaryPalette,
	tone: (e) => e.isDark ? 40 : 80,
	background: (e) => iv.inverseSurface,
	contrastCurve: new ig(3, 4.5, 7, 7)
}), iv.secondary = id.fromPalette({
	name: "secondary",
	palette: (e) => e.secondaryPalette,
	tone: (e) => e.isDark ? 80 : 40,
	isBackground: !0,
	background: (e) => iv.highestSurface(e),
	contrastCurve: new ig(3, 4.5, 7, 7),
	toneDeltaPair: (e) => new ip(iv.secondaryContainer, iv.secondary, 10, "nearer", !1)
}), iv.onSecondary = id.fromPalette({
	name: "on_secondary",
	palette: (e) => e.secondaryPalette,
	tone: (e) => iy(e) ? e.isDark ? 10 : 100 : e.isDark ? 20 : 100,
	background: (e) => iv.secondary,
	contrastCurve: new ig(4.5, 7, 11, 21)
}), iv.secondaryContainer = id.fromPalette({
	name: "secondary_container",
	palette: (e) => e.secondaryPalette,
	tone: (e) => {
		let t = e.isDark ? 30 : 90;
		return iy(e) ? e.isDark ? 30 : 85 : ib(e) ? function(e, t, r, n) {
			let a = r, i = il.from(e, t, r);
			if (i.chroma < t) {
				let r = i.chroma;
				for (; i.chroma < t;) {
					a += n ? -1 : 1;
					let o = il.from(e, t, a);
					if (r > o.chroma || .4 > Math.abs(o.chroma - t)) break;
					Math.abs(o.chroma - t) < Math.abs(i.chroma - t) && (i = o), r = Math.max(r, o.chroma);
				}
			}
			return a;
		}(e.secondaryPalette.hue, e.secondaryPalette.chroma, t, !e.isDark) : t;
	},
	isBackground: !0,
	background: (e) => iv.highestSurface(e),
	contrastCurve: new ig(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new ip(iv.secondaryContainer, iv.secondary, 10, "nearer", !1)
}), iv.onSecondaryContainer = id.fromPalette({
	name: "on_secondary_container",
	palette: (e) => e.secondaryPalette,
	tone: (e) => iy(e) ? e.isDark ? 90 : 10 : ib(e) ? id.foregroundTone(iv.secondaryContainer.tone(e), 4.5) : e.isDark ? 90 : 30,
	background: (e) => iv.secondaryContainer,
	contrastCurve: new ig(3, 4.5, 7, 11)
}), iv.tertiary = id.fromPalette({
	name: "tertiary",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => iy(e) ? e.isDark ? 90 : 25 : e.isDark ? 80 : 40,
	isBackground: !0,
	background: (e) => iv.highestSurface(e),
	contrastCurve: new ig(3, 4.5, 7, 7),
	toneDeltaPair: (e) => new ip(iv.tertiaryContainer, iv.tertiary, 10, "nearer", !1)
}), iv.onTertiary = id.fromPalette({
	name: "on_tertiary",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => iy(e) ? e.isDark ? 10 : 90 : e.isDark ? 20 : 100,
	background: (e) => iv.tertiary,
	contrastCurve: new ig(4.5, 7, 11, 21)
}), iv.tertiaryContainer = id.fromPalette({
	name: "tertiary_container",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => {
		if (iy(e)) return e.isDark ? 60 : 49;
		if (!ib(e)) return e.isDark ? 30 : 90;
		let t = e.tertiaryPalette.getHct(e.sourceColorHct.tone);
		return ic.fixIfDisliked(t).tone;
	},
	isBackground: !0,
	background: (e) => iv.highestSurface(e),
	contrastCurve: new ig(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new ip(iv.tertiaryContainer, iv.tertiary, 10, "nearer", !1)
}), iv.onTertiaryContainer = id.fromPalette({
	name: "on_tertiary_container",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => iy(e) ? 100 * !e.isDark : ib(e) ? id.foregroundTone(iv.tertiaryContainer.tone(e), 4.5) : e.isDark ? 90 : 30,
	background: (e) => iv.tertiaryContainer,
	contrastCurve: new ig(3, 4.5, 7, 11)
}), iv.error = id.fromPalette({
	name: "error",
	palette: (e) => e.errorPalette,
	tone: (e) => e.isDark ? 80 : 40,
	isBackground: !0,
	background: (e) => iv.highestSurface(e),
	contrastCurve: new ig(3, 4.5, 7, 7),
	toneDeltaPair: (e) => new ip(iv.errorContainer, iv.error, 10, "nearer", !1)
}), iv.onError = id.fromPalette({
	name: "on_error",
	palette: (e) => e.errorPalette,
	tone: (e) => e.isDark ? 20 : 100,
	background: (e) => iv.error,
	contrastCurve: new ig(4.5, 7, 11, 21)
}), iv.errorContainer = id.fromPalette({
	name: "error_container",
	palette: (e) => e.errorPalette,
	tone: (e) => e.isDark ? 30 : 90,
	isBackground: !0,
	background: (e) => iv.highestSurface(e),
	contrastCurve: new ig(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new ip(iv.errorContainer, iv.error, 10, "nearer", !1)
}), iv.onErrorContainer = id.fromPalette({
	name: "on_error_container",
	palette: (e) => e.errorPalette,
	tone: (e) => iy(e) ? e.isDark ? 90 : 10 : e.isDark ? 90 : 30,
	background: (e) => iv.errorContainer,
	contrastCurve: new ig(3, 4.5, 7, 11)
}), iv.primaryFixed = id.fromPalette({
	name: "primary_fixed",
	palette: (e) => e.primaryPalette,
	tone: (e) => iy(e) ? 40 : 90,
	isBackground: !0,
	background: (e) => iv.highestSurface(e),
	contrastCurve: new ig(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new ip(iv.primaryFixed, iv.primaryFixedDim, 10, "lighter", !0)
}), iv.primaryFixedDim = id.fromPalette({
	name: "primary_fixed_dim",
	palette: (e) => e.primaryPalette,
	tone: (e) => iy(e) ? 30 : 80,
	isBackground: !0,
	background: (e) => iv.highestSurface(e),
	contrastCurve: new ig(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new ip(iv.primaryFixed, iv.primaryFixedDim, 10, "lighter", !0)
}), iv.onPrimaryFixed = id.fromPalette({
	name: "on_primary_fixed",
	palette: (e) => e.primaryPalette,
	tone: (e) => iy(e) ? 100 : 10,
	background: (e) => iv.primaryFixedDim,
	secondBackground: (e) => iv.primaryFixed,
	contrastCurve: new ig(4.5, 7, 11, 21)
}), iv.onPrimaryFixedVariant = id.fromPalette({
	name: "on_primary_fixed_variant",
	palette: (e) => e.primaryPalette,
	tone: (e) => iy(e) ? 90 : 30,
	background: (e) => iv.primaryFixedDim,
	secondBackground: (e) => iv.primaryFixed,
	contrastCurve: new ig(3, 4.5, 7, 11)
}), iv.secondaryFixed = id.fromPalette({
	name: "secondary_fixed",
	palette: (e) => e.secondaryPalette,
	tone: (e) => iy(e) ? 80 : 90,
	isBackground: !0,
	background: (e) => iv.highestSurface(e),
	contrastCurve: new ig(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new ip(iv.secondaryFixed, iv.secondaryFixedDim, 10, "lighter", !0)
}), iv.secondaryFixedDim = id.fromPalette({
	name: "secondary_fixed_dim",
	palette: (e) => e.secondaryPalette,
	tone: (e) => iy(e) ? 70 : 80,
	isBackground: !0,
	background: (e) => iv.highestSurface(e),
	contrastCurve: new ig(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new ip(iv.secondaryFixed, iv.secondaryFixedDim, 10, "lighter", !0)
}), iv.onSecondaryFixed = id.fromPalette({
	name: "on_secondary_fixed",
	palette: (e) => e.secondaryPalette,
	tone: (e) => 10,
	background: (e) => iv.secondaryFixedDim,
	secondBackground: (e) => iv.secondaryFixed,
	contrastCurve: new ig(4.5, 7, 11, 21)
}), iv.onSecondaryFixedVariant = id.fromPalette({
	name: "on_secondary_fixed_variant",
	palette: (e) => e.secondaryPalette,
	tone: (e) => iy(e) ? 25 : 30,
	background: (e) => iv.secondaryFixedDim,
	secondBackground: (e) => iv.secondaryFixed,
	contrastCurve: new ig(3, 4.5, 7, 11)
}), iv.tertiaryFixed = id.fromPalette({
	name: "tertiary_fixed",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => iy(e) ? 40 : 90,
	isBackground: !0,
	background: (e) => iv.highestSurface(e),
	contrastCurve: new ig(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new ip(iv.tertiaryFixed, iv.tertiaryFixedDim, 10, "lighter", !0)
}), iv.tertiaryFixedDim = id.fromPalette({
	name: "tertiary_fixed_dim",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => iy(e) ? 30 : 80,
	isBackground: !0,
	background: (e) => iv.highestSurface(e),
	contrastCurve: new ig(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new ip(iv.tertiaryFixed, iv.tertiaryFixedDim, 10, "lighter", !0)
}), iv.onTertiaryFixed = id.fromPalette({
	name: "on_tertiary_fixed",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => iy(e) ? 100 : 10,
	background: (e) => iv.tertiaryFixedDim,
	secondBackground: (e) => iv.tertiaryFixed,
	contrastCurve: new ig(4.5, 7, 11, 21)
}), iv.onTertiaryFixedVariant = id.fromPalette({
	name: "on_tertiary_fixed_variant",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => iy(e) ? 90 : 30,
	background: (e) => iv.tertiaryFixedDim,
	secondBackground: (e) => iv.tertiaryFixed,
	contrastCurve: new ig(3, 4.5, 7, 11)
});
var ix = class {
	constructor(e) {
		this.sourceColorArgb = e.sourceColorArgb, this.variant = e.variant, this.contrastLevel = e.contrastLevel, this.isDark = e.isDark, this.sourceColorHct = il.fromInt(e.sourceColorArgb), this.primaryPalette = e.primaryPalette, this.secondaryPalette = e.secondaryPalette, this.tertiaryPalette = e.tertiaryPalette, this.neutralPalette = e.neutralPalette, this.neutralVariantPalette = e.neutralVariantPalette, this.errorPalette = ih.fromHueAndChroma(25, 84);
	}
	static getRotatedHue(e, t, r) {
		let n = e.hue;
		if (t.length !== r.length) throw Error(`mismatch between hue length ${t.length} & rotations ${r.length}`);
		if (1 === r.length) return a1(e.hue + r[0]);
		let a = t.length;
		for (let e = 0; e <= a - 2; e++) {
			let a = t[e], i = t[e + 1];
			if (a < n && n < i) return a1(n + r[e]);
		}
		return n;
	}
	getArgb(e) {
		return e.getArgb(this);
	}
	getHct(e) {
		return e.getHct(this);
	}
	get primaryPaletteKeyColor() {
		return this.getArgb(iv.primaryPaletteKeyColor);
	}
	get secondaryPaletteKeyColor() {
		return this.getArgb(iv.secondaryPaletteKeyColor);
	}
	get tertiaryPaletteKeyColor() {
		return this.getArgb(iv.tertiaryPaletteKeyColor);
	}
	get neutralPaletteKeyColor() {
		return this.getArgb(iv.neutralPaletteKeyColor);
	}
	get neutralVariantPaletteKeyColor() {
		return this.getArgb(iv.neutralVariantPaletteKeyColor);
	}
	get background() {
		return this.getArgb(iv.background);
	}
	get onBackground() {
		return this.getArgb(iv.onBackground);
	}
	get surface() {
		return this.getArgb(iv.surface);
	}
	get surfaceDim() {
		return this.getArgb(iv.surfaceDim);
	}
	get surfaceBright() {
		return this.getArgb(iv.surfaceBright);
	}
	get surfaceContainerLowest() {
		return this.getArgb(iv.surfaceContainerLowest);
	}
	get surfaceContainerLow() {
		return this.getArgb(iv.surfaceContainerLow);
	}
	get surfaceContainer() {
		return this.getArgb(iv.surfaceContainer);
	}
	get surfaceContainerHigh() {
		return this.getArgb(iv.surfaceContainerHigh);
	}
	get surfaceContainerHighest() {
		return this.getArgb(iv.surfaceContainerHighest);
	}
	get onSurface() {
		return this.getArgb(iv.onSurface);
	}
	get surfaceVariant() {
		return this.getArgb(iv.surfaceVariant);
	}
	get onSurfaceVariant() {
		return this.getArgb(iv.onSurfaceVariant);
	}
	get inverseSurface() {
		return this.getArgb(iv.inverseSurface);
	}
	get inverseOnSurface() {
		return this.getArgb(iv.inverseOnSurface);
	}
	get outline() {
		return this.getArgb(iv.outline);
	}
	get outlineVariant() {
		return this.getArgb(iv.outlineVariant);
	}
	get shadow() {
		return this.getArgb(iv.shadow);
	}
	get scrim() {
		return this.getArgb(iv.scrim);
	}
	get surfaceTint() {
		return this.getArgb(iv.surfaceTint);
	}
	get primary() {
		return this.getArgb(iv.primary);
	}
	get onPrimary() {
		return this.getArgb(iv.onPrimary);
	}
	get primaryContainer() {
		return this.getArgb(iv.primaryContainer);
	}
	get onPrimaryContainer() {
		return this.getArgb(iv.onPrimaryContainer);
	}
	get inversePrimary() {
		return this.getArgb(iv.inversePrimary);
	}
	get secondary() {
		return this.getArgb(iv.secondary);
	}
	get onSecondary() {
		return this.getArgb(iv.onSecondary);
	}
	get secondaryContainer() {
		return this.getArgb(iv.secondaryContainer);
	}
	get onSecondaryContainer() {
		return this.getArgb(iv.onSecondaryContainer);
	}
	get tertiary() {
		return this.getArgb(iv.tertiary);
	}
	get onTertiary() {
		return this.getArgb(iv.onTertiary);
	}
	get tertiaryContainer() {
		return this.getArgb(iv.tertiaryContainer);
	}
	get onTertiaryContainer() {
		return this.getArgb(iv.onTertiaryContainer);
	}
	get error() {
		return this.getArgb(iv.error);
	}
	get onError() {
		return this.getArgb(iv.onError);
	}
	get errorContainer() {
		return this.getArgb(iv.errorContainer);
	}
	get onErrorContainer() {
		return this.getArgb(iv.onErrorContainer);
	}
	get primaryFixed() {
		return this.getArgb(iv.primaryFixed);
	}
	get primaryFixedDim() {
		return this.getArgb(iv.primaryFixedDim);
	}
	get onPrimaryFixed() {
		return this.getArgb(iv.onPrimaryFixed);
	}
	get onPrimaryFixedVariant() {
		return this.getArgb(iv.onPrimaryFixedVariant);
	}
	get secondaryFixed() {
		return this.getArgb(iv.secondaryFixed);
	}
	get secondaryFixedDim() {
		return this.getArgb(iv.secondaryFixedDim);
	}
	get onSecondaryFixed() {
		return this.getArgb(iv.onSecondaryFixed);
	}
	get onSecondaryFixedVariant() {
		return this.getArgb(iv.onSecondaryFixedVariant);
	}
	get tertiaryFixed() {
		return this.getArgb(iv.tertiaryFixed);
	}
	get tertiaryFixedDim() {
		return this.getArgb(iv.tertiaryFixedDim);
	}
	get onTertiaryFixed() {
		return this.getArgb(iv.onTertiaryFixed);
	}
	get onTertiaryFixedVariant() {
		return this.getArgb(iv.onTertiaryFixedVariant);
	}
}, iw = class e {
	static of(t) {
		return new e(t, !1);
	}
	static contentOf(t) {
		return new e(t, !0);
	}
	static fromColors(t) {
		return e.createPaletteFromColors(!1, t);
	}
	static contentFromColors(t) {
		return e.createPaletteFromColors(!0, t);
	}
	static createPaletteFromColors(t, r) {
		let n = new e(r.primary, t);
		return r.secondary && (n.a2 = new e(r.secondary, t).a1), r.tertiary && (n.a3 = new e(r.tertiary, t).a1), r.error && (n.error = new e(r.error, t).a1), r.neutral && (n.n1 = new e(r.neutral, t).n1), r.neutralVariant && (n.n2 = new e(r.neutralVariant, t).n2), n;
	}
	constructor(e, t) {
		let r = il.fromInt(e), n = r.hue, a = r.chroma;
		t ? (this.a1 = ih.fromHueAndChroma(n, a), this.a2 = ih.fromHueAndChroma(n, a / 3), this.a3 = ih.fromHueAndChroma(n + 60, a / 2), this.n1 = ih.fromHueAndChroma(n, Math.min(a / 12, 4)), this.n2 = ih.fromHueAndChroma(n, Math.min(a / 6, 8))) : (this.a1 = ih.fromHueAndChroma(n, Math.max(48, a)), this.a2 = ih.fromHueAndChroma(n, 16), this.a3 = ih.fromHueAndChroma(n + 60, 24), this.n1 = ih.fromHueAndChroma(n, 4), this.n2 = ih.fromHueAndChroma(n, 8)), this.error = ih.fromHueAndChroma(25, 84);
	}
}, iC = class e extends ix {
	constructor(t, r, n) {
		super({
			sourceColorArgb: t.toInt(),
			variant: eY.EXPRESSIVE,
			contrastLevel: n,
			isDark: r,
			primaryPalette: ih.fromHueAndChroma(a1(t.hue + 240), 40),
			secondaryPalette: ih.fromHueAndChroma(ix.getRotatedHue(t, e.hues, e.secondaryRotations), 24),
			tertiaryPalette: ih.fromHueAndChroma(ix.getRotatedHue(t, e.hues, e.tertiaryRotations), 32),
			neutralPalette: ih.fromHueAndChroma(t.hue + 15, 8),
			neutralVariantPalette: ih.fromHueAndChroma(t.hue + 15, 12)
		});
	}
};
iC.hues = [
	0,
	21,
	51,
	121,
	151,
	191,
	271,
	321,
	360
], iC.secondaryRotations = [
	45,
	95,
	45,
	20,
	45,
	90,
	45,
	45,
	45
], iC.tertiaryRotations = [
	120,
	120,
	20,
	45,
	20,
	15,
	20,
	120,
	120
];
var ik = class e extends ix {
	constructor(t, r, n) {
		super({
			sourceColorArgb: t.toInt(),
			variant: eY.VIBRANT,
			contrastLevel: n,
			isDark: r,
			primaryPalette: ih.fromHueAndChroma(t.hue, 200),
			secondaryPalette: ih.fromHueAndChroma(ix.getRotatedHue(t, e.hues, e.secondaryRotations), 24),
			tertiaryPalette: ih.fromHueAndChroma(ix.getRotatedHue(t, e.hues, e.tertiaryRotations), 32),
			neutralPalette: ih.fromHueAndChroma(t.hue, 10),
			neutralVariantPalette: ih.fromHueAndChroma(t.hue, 12)
		});
	}
};
ik.hues = [
	0,
	41,
	61,
	101,
	131,
	181,
	251,
	301,
	360
], ik.secondaryRotations = [
	18,
	15,
	10,
	12,
	15,
	18,
	15,
	12,
	12
], ik.tertiaryRotations = [
	35,
	30,
	20,
	25,
	30,
	35,
	30,
	25,
	25
];
var iP = {
	desired: 4,
	fallbackColorARGB: 4282549748,
	filter: !0
};
function iM(e, t) {
	return e.score > t.score ? -1 : +(e.score < t.score);
}
var iS = class e {
	constructor() {}
	static score(t, r) {
		let { desired: n, fallbackColorARGB: a, filter: i } = {
			...iP,
			...r
		}, o = [], s = Array(360).fill(0), l = 0;
		for (let [e, r] of t.entries()) {
			let t = il.fromInt(e);
			o.push(t);
			let n = Math.floor(t.hue);
			s[n] += r, l += r;
		}
		let u = Array(360).fill(0);
		for (let e = 0; e < 360; e++) {
			let t = s[e] / l;
			for (let r = e - 14; r < e + 16; r++) {
				let e = a0(r);
				u[e] += t;
			}
		}
		let c = [];
		for (let t of o) {
			let r = u[a0(Math.round(t.hue))];
			if (i && (t.chroma < e.CUTOFF_CHROMA || r <= e.CUTOFF_EXCITED_PROPORTION)) continue;
			let n = 100 * r * e.WEIGHT_PROPORTION, a = t.chroma < e.TARGET_CHROMA ? e.WEIGHT_CHROMA_BELOW : e.WEIGHT_CHROMA_ABOVE, o = n + (t.chroma - e.TARGET_CHROMA) * a;
			c.push({
				hct: t,
				score: o
			});
		}
		c.sort(iM);
		let f = [];
		for (let e = 90; e >= 15; e--) {
			for (let { hct: t } of (f.length = 0, c)) if (f.find((r) => 180 - Math.abs(Math.abs(t.hue - r.hue) - 180) < e) || f.push(t), f.length >= n) break;
			if (f.length >= n) break;
		}
		let d = [];
		for (let e of (0 === f.length && d.push(a), f)) d.push(e.toInt());
		return d;
	}
};
function i_(e) {
	let t = 3 === (e = e.replace("#", "")).length, r = 6 === e.length, n = 8 === e.length;
	if (!t && !r && !n) throw Error("unexpected hex " + e);
	let a = 0, i = 0, o = 0;
	return t ? (a = iA(e.slice(0, 1).repeat(2)), i = iA(e.slice(1, 2).repeat(2)), o = iA(e.slice(2, 3).repeat(2))) : r ? (a = iA(e.slice(0, 2)), i = iA(e.slice(2, 4)), o = iA(e.slice(4, 6))) : n && (a = iA(e.slice(2, 4)), i = iA(e.slice(4, 6)), o = iA(e.slice(6, 8))), (-16777216 | (255 & a) << 16 | (255 & i) << 8 | 255 & o) >>> 0;
}
function iA(e) {
	return parseInt(e, 16);
}
iS.TARGET_CHROMA = 48, iS.WEIGHT_PROPORTION = .7, iS.WEIGHT_CHROMA_ABOVE = .3, iS.WEIGHT_CHROMA_BELOW = .1, iS.CUTOFF_CHROMA = 5, iS.CUTOFF_EXCITED_PROPORTION = .01;
var iT = {
	0: !0,
	10: !0,
	20: !0,
	30: !0,
	40: !0,
	50: !0,
	60: !0,
	70: !0,
	80: !0,
	90: !0,
	95: !0,
	100: !0
}, iR = (e) => {
	var t;
	let r = {
		r: (t = e) >> 16 & 255,
		g: t >> 8 & 255,
		b: 255 & t,
		a: t >> 24 & 255
	};
	return [
		r.r,
		r.g,
		r.b
	];
}, iO = (e) => ({
	primary: !0,
	secondary: !0,
	tertiary: !0,
	error: !0,
	warning: !0,
	success: !0
})[e], iD = class e {
	static toHEX = (e) => `#${iR(e).map((e) => r_(e.toString(16), 2, "0")).join("")}`;
	static createRoleColorRuleBuilder(e) {
		let t = {}, r = new Proxy({}, { get: (n, a) => "build" == a ? () => t : (n, a) => (t[`${n}${e ? `:${e}` : ""}`] = a, r) });
		return r;
	}
	static createRoleColorSourcePicker() {
		return new Proxy({}, { get: (e, t) => (e) => [t, e] });
	}
	static fromColors = (t) => {
		let { primary: r, secondary: n, tertiary: a, neutral: i, neutralVariant: o, error: s,...l } = t, u = iw.contentFromColors({
			primary: i_(r),
			secondary: n ? i_(n) : void 0,
			tertiary: a ? i_(a) : void 0,
			error: s ? i_(s) : void 0
		});
		return i && (u.n1 = ih.fromHueAndChroma(i_(i), 4)), o && (u.n2 = ih.fromHueAndChroma(i_(o), 8)), new e({
			primary: u.a1,
			secondary: u.a2,
			tertiary: u.a3,
			neutral: u.n1,
			neutralVariant: u.n2,
			error: u.error,
			...rn(l, (e) => ih.fromInt(i_(e)))
		});
	};
	constructor(e) {
		this.seeds = e;
	}
	normalizeRoleRules(t = {}) {
		let r = e.createRoleColorSourcePicker(), n = e.createRoleColorRuleBuilder().rule("shadow", r.neutral(0)).rule("scrim", r.neutral(0)).rule("outline", r.neutralVariant(87)).rule("outline-variant", r.neutralVariant(80)).rule("surface", r.neutral(99)).rule("on-surface", r.neutral(10)).rule("surface-variant", r.neutralVariant(90)).rule("on-surface-variant", r.neutralVariant(30)).rule("surface-dim", r.neutral(87)).rule("surface-bright", r.neutral(98)).rule("surface-container-lowest", r.neutral(100)).rule("surface-container-low", r.neutral(96)).rule("surface-container", r.neutral(94)).rule("surface-container-high", r.neutral(92)).rule("surface-container-highest", r.neutral(90)).rule("inverse-surface", r.neutral(20)).rule("inverse-on-surface", r.neutral(95)).rule("inverse-primary", r.primary(80)), a = e.createRoleColorRuleBuilder("dark").rule("shadow", r.neutral(0)).rule("scrim", r.neutral(0)).rule("outline", r.neutralVariant(60)).rule("outline-variant", r.neutralVariant(30)).rule("surface", r.neutral(10)).rule("on-surface", r.neutral(90)).rule("surface-variant", r.neutralVariant(30)).rule("on-surface-variant", r.neutralVariant(80)).rule("surface-dim", r.neutral(6)).rule("surface-bright", r.neutral(24)).rule("surface-container-lowest", r.neutral(4)).rule("surface-container-low", r.neutral(10)).rule("surface-container", r.neutral(12)).rule("surface-container-high", r.neutral(17)).rule("surface-container-highest", r.neutral(22)).rule("inverse-surface", r.neutral(90)).rule("inverse-on-surface", r.neutral(20)).rule("inverse-primary", r.primary(40));
		for (let e in this.seeds) e.startsWith("neutral") || (n = n.rule(e, r[e](40)).rule(`on-${e}`, r[e](100)).rule(`${e}-container`, r[e](90)).rule(`on-${e}-container`, r[e](10)), a = a.rule(e, r[e](80)).rule(`on-${e}`, r[e](20)).rule(`${e}-container`, r[e](30)).rule(`on-${e}-container`, r[e](90)));
		return {
			...n.build(),
			...a.build(),
			...t
		};
	}
	getThemeRoleColors(e) {
		let t = {}, r = {};
		for (let [n, [a, i]] of Object.entries(e)) if (this.seeds[a]) {
			if (n.endsWith(":dark")) {
				r[n.split(":")[0]] = iT[i] ? `${String(a)}.${i}` : this.seeds[a]?.tone(i);
				continue;
			}
			t[n] = iT[i] ? `${String(a)}.${i}` : this.seeds[a]?.tone(i);
		}
		return [t, r];
	}
	toDesignTokens(e = {}) {
		let t = this.normalizeRoleRules(e), [r, n] = this.getThemeRoleColors(t), a = {}, i = {};
		for (let e in r) if (a[`${e}`] = {
			_default: rr(r[e]) ? iR(r[e]) : r[e],
			_dark: rr(n[e]) ? iR(n[e]) : n[e]
		}, iO(e) && (i[`${e}`] = aE.mixin({
			bgColor: `sys.${e}`,
			color: `sys.on-${e}`
		}), i[`${e}-container`] = aE.mixin({
			bgColor: `sys.${e}-container`,
			color: `sys.on-${e}-container`
		})), e.startsWith("surface")) {
			if (e.includes("container")) {
				i[`${e}`] = aE.mixin({
					bgColor: `sys.${e}`,
					color: "sys.on-surface"
				});
				continue;
			}
			i[`${e}`] = aE.mixin({
				bgColor: `sys.${e}`,
				color: "sys.on-surface"
			}), i[`on-${e}`] = aE.mixin({
				bgColor: `sys.on-${e}`,
				color: "sys.inverse-on-surface"
			});
		}
		return {
			color: aE.color({
				...rn(this.seeds, (e) => Object.keys(iT).reduce((t, r) => Object.assign(t, { [r]: iR(e.tone(parseInt(r))) }), {})),
				white: [
					255,
					255,
					255
				],
				black: [
					0,
					0,
					0
				],
				sys: a
			}),
			containerStyle: aE.customMixin("containerStyle", { sys: i })
		};
	}
};
let i$ = aE.rounded({
	xs: 4,
	sm: 8,
	md: 12,
	lg: 16,
	xl: 28
}), iI = {
	font: aE.font({
		brand: "-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
		plain: "-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
		code: "'Lucida Console',Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace"
	}),
	fontWeight: aE.fontWeight({
		regular: 400,
		medium: 500,
		bold: 700
	}),
	textStyle: aE.customMixin("textStyle", { sys: {
		"display-large": aE.mixin({
			lineHeight: 64,
			fontSize: 57,
			letterSpacing: -.25,
			fontWeight: "regular",
			font: "brand"
		}),
		"display-medium": aE.mixin({
			lineHeight: 52,
			fontSize: 45,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "brand"
		}),
		"display-small": aE.mixin({
			lineHeight: 44,
			fontSize: 36,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "brand"
		}),
		"headline-large": aE.mixin({
			lineHeight: 40,
			fontSize: 32,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "brand"
		}),
		"headline-medium": aE.mixin({
			lineHeight: 36,
			fontSize: 28,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "brand"
		}),
		"headline-small": aE.mixin({
			lineHeight: 32,
			fontSize: 24,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "plain"
		}),
		"title-large": aE.mixin({
			lineHeight: 28,
			fontSize: 22,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "brand"
		}),
		"title-medium": aE.mixin({
			lineHeight: 24,
			fontSize: 16,
			letterSpacing: .15,
			fontWeight: "medium",
			font: "plain"
		}),
		"title-small": aE.mixin({
			lineHeight: 20,
			fontSize: 14,
			letterSpacing: .1,
			fontWeight: "medium",
			font: "plain"
		}),
		"label-large": aE.mixin({
			lineHeight: 20,
			fontSize: 14,
			letterSpacing: .1,
			fontWeight: "medium",
			font: "plain"
		}),
		"label-medium": aE.mixin({
			lineHeight: 16,
			fontSize: 12,
			letterSpacing: .5,
			fontWeight: "medium",
			font: "plain"
		}),
		"label-small": aE.mixin({
			lineHeight: 16,
			fontSize: 11,
			letterSpacing: .5,
			fontWeight: "medium",
			font: "plain"
		}),
		"body-large": aE.mixin({
			lineHeight: 24,
			fontSize: 16,
			letterSpacing: .5,
			fontWeight: "regular",
			font: "plain"
		}),
		"body-medium": aE.mixin({
			lineHeight: 20,
			fontSize: 14,
			letterSpacing: .25,
			fontWeight: "regular",
			font: "plain"
		}),
		"body-small": aE.mixin({
			lineHeight: 16,
			fontSize: 12,
			letterSpacing: .4,
			fontWeight: "regular",
			font: "plain"
		})
	} })
};
var iL = iD.fromColors({
	primary: "#1270f5",
	secondary: "#8a90a5",
	tertiary: "#b58391",
	neutral: "#5e5e5e",
	error: "#d93f23",
	warning: "#e69c00",
	success: "#5ac220"
});
let iF = {
	...iI,
	...aJ,
	...aG,
	rounded: i$,
	...iL.toDesignTokens({})
}, iE = aq.create(iF, { varPrefix: "vk" }), ij = eT(() => iE, { name: "Theme" });
var iB = function() {
	function e(e) {
		var t = this;
		this._insertTag = function(e) {
			var r = 0 === t.tags.length ? t.insertionPoint ? t.insertionPoint.nextSibling : t.prepend ? t.container.firstChild : t.before : t.tags[t.tags.length - 1].nextSibling;
			t.container.insertBefore(e, r), t.tags.push(e);
		}, this.isSpeedy = void 0 === e.speedy || e.speedy, this.tags = [], this.ctr = 0, this.nonce = e.nonce, this.key = e.key, this.container = e.container, this.prepend = e.prepend, this.insertionPoint = e.insertionPoint, this.before = null;
	}
	var t = e.prototype;
	return t.hydrate = function(e) {
		e.forEach(this._insertTag);
	}, t.insert = function(e) {
		this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(((t = document.createElement("style")).setAttribute("data-emotion", this.key), void 0 !== this.nonce && t.setAttribute("nonce", this.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t));
		var t, r = this.tags[this.tags.length - 1];
		if (this.isSpeedy) {
			var n = function(e) {
				if (e.sheet) return e.sheet;
				for (var t = 0; t < document.styleSheets.length; t++) if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
			}(r);
			try {
				n.insertRule(e, n.cssRules.length);
			} catch (e) {}
		} else r.appendChild(document.createTextNode(e));
		this.ctr++;
	}, t.flush = function() {
		this.tags.forEach(function(e) {
			var t;
			return null == (t = e.parentNode) ? void 0 : t.removeChild(e);
		}), this.tags = [], this.ctr = 0;
	}, e;
}(), iV = "-ms-", iH = "-moz-", iN = "-webkit-", iz = "comm", iW = "rule", iU = "decl", iq = "@keyframes", iG = Math.abs, iY = String.fromCharCode, iK = Object.assign;
function iX(e, t, r) {
	return e.replace(t, r);
}
function iJ(e, t) {
	return e.indexOf(t);
}
function iZ(e, t) {
	return 0 | e.charCodeAt(t);
}
function iQ(e, t, r) {
	return e.slice(t, r);
}
function i0(e) {
	return e.length;
}
function i1(e, t) {
	return t.push(e), e;
}
var i2 = 1, i4 = 1, i5 = 0, i3 = 0, i8 = 0, i6 = "";
function i9(e, t, r, n, a, i, o) {
	return {
		value: e,
		root: t,
		parent: r,
		type: n,
		props: a,
		children: i,
		line: i2,
		column: i4,
		length: o,
		return: ""
	};
}
function i7(e, t) {
	return iK(i9("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function oe() {
	return i8 = i3 < i5 ? iZ(i6, i3++) : 0, i4++, 10 === i8 && (i4 = 1, i2++), i8;
}
function ot() {
	return iZ(i6, i3);
}
function or(e) {
	switch (e) {
		case 0:
		case 9:
		case 10:
		case 13:
		case 32: return 5;
		case 33:
		case 43:
		case 44:
		case 47:
		case 62:
		case 64:
		case 126:
		case 59:
		case 123:
		case 125: return 4;
		case 58: return 3;
		case 34:
		case 39:
		case 40:
		case 91: return 2;
		case 41:
		case 93: return 1;
	}
	return 0;
}
function on(e) {
	return i2 = i4 = 1, i5 = i0(i6 = e), i3 = 0, [];
}
function oa(e) {
	var t, r;
	return (t = i3 - 1, r = function e(t) {
		for (; oe();) switch (i8) {
			case t: return i3;
			case 34:
			case 39:
				34 !== t && 39 !== t && e(i8);
				break;
			case 40:
				41 === t && e(t);
				break;
			case 92: oe();
		}
		return i3;
	}(91 === e ? e + 2 : 40 === e ? e + 1 : e), iQ(i6, t, r)).trim();
}
function oi(e, t, r, n, a, i, o, s, l, u, c) {
	for (var f = a - 1, d = 0 === a ? i : [""], h = d.length, m = 0, g = 0, p = 0; m < n; ++m) for (var b = 0, y = iQ(e, f + 1, f = iG(g = o[m])), v = e; b < h; ++b) (v = (g > 0 ? d[b] + " " + y : iX(y, /&\f/g, d[b])).trim()) && (l[p++] = v);
	return i9(e, t, r, 0 === a ? iW : s, l, u, c);
}
function oo(e, t, r, n) {
	return i9(e, t, r, iU, iQ(e, 0, n), iQ(e, n + 1, -1), n);
}
function os(e, t) {
	for (var r = "", n = e.length, a = 0; a < n; a++) r += t(e[a], a, e, t) || "";
	return r;
}
function ol(e, t, r, n) {
	switch (e.type) {
		case "@layer": if (e.children.length) break;
		case "@import":
		case iU: return e.return = e.return || e.value;
		case iz: return "";
		case iq: return e.return = e.value + "{" + os(e.children, n) + "}";
		case iW: e.value = e.props.join(",");
	}
	return i0(r = os(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
var ou = function(e, t, r) {
	for (var n = 0, a = 0; n = a, a = ot(), 38 === n && 12 === a && (t[r] = 1), !or(a);) oe();
	return iQ(i6, e, i3);
}, oc = function(e, t) {
	var r = -1, n = 44;
	do
		switch (or(n)) {
			case 0:
				38 === n && 12 === ot() && (t[r] = 1), e[r] += ou(i3 - 1, t, r);
				break;
			case 2:
				e[r] += oa(n);
				break;
			case 4: if (44 === n) {
				e[++r] = 58 === ot() ? "&\f" : "", t[r] = e[r].length;
				break;
			}
			default: e[r] += iY(n);
		}
	while (n = oe());
	return e;
}, of = function(e, t) {
	var r;
	return r = oc(on(e), t), i6 = "", r;
}, od = /* @__PURE__ */ new WeakMap(), oh = function(e) {
	if ("rule" === e.type && e.parent && !(e.length < 1)) {
		for (var t = e.value, r = e.parent, n = e.column === r.column && e.line === r.line; "rule" !== r.type;) if (!(r = r.parent)) return;
		if ((1 !== e.props.length || 58 === t.charCodeAt(0) || od.get(r)) && !n) {
			od.set(e, !0);
			for (var a = [], i = of(t, a), o = r.props, s = 0, l = 0; s < i.length; s++) for (var u = 0; u < o.length; u++, l++) e.props[l] = a[s] ? i[s].replace(/&\f/g, o[u]) : o[u] + " " + i[s];
		}
	}
}, om = function(e) {
	if ("decl" === e.type) {
		var t = e.value;
		108 === t.charCodeAt(0) && 98 === t.charCodeAt(2) && (e.return = "", e.value = "");
	}
}, og = [function(e, t, r, n) {
	if (e.length > -1 && !e.return) switch (e.type) {
		case iU:
			e.return = function e(t, r) {
				switch (45 ^ iZ(t, 0) ? (((r << 2 ^ iZ(t, 0)) << 2 ^ iZ(t, 1)) << 2 ^ iZ(t, 2)) << 2 ^ iZ(t, 3) : 0) {
					case 5103: return iN + "print-" + t + t;
					case 5737:
					case 4201:
					case 3177:
					case 3433:
					case 1641:
					case 4457:
					case 2921:
					case 5572:
					case 6356:
					case 5844:
					case 3191:
					case 6645:
					case 3005:
					case 6391:
					case 5879:
					case 5623:
					case 6135:
					case 4599:
					case 4855:
					case 4215:
					case 6389:
					case 5109:
					case 5365:
					case 5621:
					case 3829: return iN + t + t;
					case 5349:
					case 4246:
					case 4810:
					case 6968:
					case 2756: return iN + t + iH + t + iV + t + t;
					case 6828:
					case 4268: return iN + t + iV + t + t;
					case 6165: return iN + t + iV + "flex-" + t + t;
					case 5187: return iN + t + iX(t, /(\w+).+(:[^]+)/, iN + "box-$1$2" + iV + "flex-$1$2") + t;
					case 5443: return iN + t + iV + "flex-item-" + iX(t, /flex-|-self/, "") + t;
					case 4675: return iN + t + iV + "flex-line-pack" + iX(t, /align-content|flex-|-self/, "") + t;
					case 5548: return iN + t + iV + iX(t, "shrink", "negative") + t;
					case 5292: return iN + t + iV + iX(t, "basis", "preferred-size") + t;
					case 6060: return iN + "box-" + iX(t, "-grow", "") + iN + t + iV + iX(t, "grow", "positive") + t;
					case 4554: return iN + iX(t, /([^-])(transform)/g, "$1" + iN + "$2") + t;
					case 6187: return iX(iX(iX(t, /(zoom-|grab)/, iN + "$1"), /(image-set)/, iN + "$1"), t, "") + t;
					case 5495:
					case 3959: return iX(t, /(image-set\([^]*)/, iN + "$1$`$1");
					case 4968: return iX(iX(t, /(.+:)(flex-)?(.*)/, iN + "box-pack:$3" + iV + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + iN + t + t;
					case 4095:
					case 3583:
					case 4068:
					case 2532: return iX(t, /(.+)-inline(.+)/, iN + "$1$2") + t;
					case 8116:
					case 7059:
					case 5753:
					case 5535:
					case 5445:
					case 5701:
					case 4933:
					case 4677:
					case 5533:
					case 5789:
					case 5021:
					case 4765:
						if (i0(t) - 1 - r > 6) switch (iZ(t, r + 1)) {
							case 109: if (45 !== iZ(t, r + 4)) break;
							case 102: return iX(t, /(.+:)(.+)-([^]+)/, "$1" + iN + "$2-$3$1" + iH + (108 == iZ(t, r + 3) ? "$3" : "$2-$3")) + t;
							case 115: return ~iJ(t, "stretch") ? e(iX(t, "stretch", "fill-available"), r) + t : t;
						}
						break;
					case 4949: if (115 !== iZ(t, r + 1)) break;
					case 6444:
						switch (iZ(t, i0(t) - 3 - (~iJ(t, "!important") && 10))) {
							case 107: return iX(t, ":", ":" + iN) + t;
							case 101: return iX(t, /(.+:)([^;!]+)(;|!.+)?/, "$1" + iN + (45 === iZ(t, 14) ? "inline-" : "") + "box$3$1" + iN + "$2$3$1" + iV + "$2box$3") + t;
						}
						break;
					case 5936:
						switch (iZ(t, r + 11)) {
							case 114: return iN + t + iV + iX(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
							case 108: return iN + t + iV + iX(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
							case 45: return iN + t + iV + iX(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
						}
						return iN + t + iV + t + t;
				}
				return t;
			}(e.value, e.length);
			break;
		case iq: return os([i7(e, { value: iX(e.value, "@", "@" + iN) })], n);
		case iW: if (e.length) {
			var a, i;
			return a = e.props, i = function(t) {
				var r;
				switch (r = t, (r = /(::plac\w+|:read-\w+)/.exec(r)) ? r[0] : r) {
					case ":read-only":
					case ":read-write": return os([i7(e, { props: [iX(t, /:(read-\w+)/, ":" + iH + "$1")] })], n);
					case "::placeholder": return os([
						i7(e, { props: [iX(t, /:(plac\w+)/, ":" + iN + "input-$1")] }),
						i7(e, { props: [iX(t, /:(plac\w+)/, ":" + iH + "$1")] }),
						i7(e, { props: [iX(t, /:(plac\w+)/, iV + "input-$1")] })
					], n);
				}
				return "";
			}, a.map(i).join("");
		}
	}
}], op = function(e) {
	var t, r, n, a, i, o = e.key;
	if ("css" === o) {
		var s = document.querySelectorAll("style[data-emotion]:not([data-s])");
		Array.prototype.forEach.call(s, function(e) {
			-1 !== e.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e), e.setAttribute("data-s", ""));
		});
	}
	var l = e.stylisPlugins || og, u = {}, c = [];
	a = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll("style[data-emotion^=\"" + o + " \"]"), function(e) {
		for (var t = e.getAttribute("data-emotion").split(" "), r = 1; r < t.length; r++) u[t[r]] = !0;
		c.push(e);
	});
	var f = (r = (t = [oh, om].concat(l, [ol, (n = function(e) {
		i.insert(e);
	}, function(e) {
		!e.root && (e = e.return) && n(e);
	})])).length, function(e, n, a, i) {
		for (var o = "", s = 0; s < r; s++) o += t[s](e, n, a, i) || "";
		return o;
	}), d = function(e) {
		var t, r;
		return os((r = function e(t, r, n, a, i, o, s, l, u) {
			for (var c, f = 0, d = 0, h = s, m = 0, g = 0, p = 0, b = 1, y = 1, v = 1, x = 0, w = "", C = i, k = o, P = a, M = w; y;) switch (p = x, x = oe()) {
				case 40: if (108 != p && 58 == iZ(M, h - 1)) {
					-1 != iJ(M += iX(oa(x), "&", "&\f"), "&\f") && (v = -1);
					break;
				}
				case 34:
				case 39:
				case 91:
					M += oa(x);
					break;
				case 9:
				case 10:
				case 13:
				case 32:
					M += function(e) {
						for (; i8 = ot();) if (i8 < 33) oe();
						else break;
						return or(e) > 2 || or(i8) > 3 ? "" : " ";
					}(p);
					break;
				case 92:
					M += function(e, t) {
						for (var r; --t && oe() && !(i8 < 48) && !(i8 > 102) && (!(i8 > 57) || !(i8 < 65)) && (!(i8 > 70) || !(i8 < 97)););
						return r = i3 + (t < 6 && 32 == ot() && 32 == oe()), iQ(i6, e, r);
					}(i3 - 1, 7);
					continue;
				case 47:
					switch (ot()) {
						case 42:
						case 47:
							i1((c = function(e, t) {
								for (; oe();) if (e + i8 === 57) break;
								else if (e + i8 === 84 && 47 === ot()) break;
								return "/*" + iQ(i6, t, i3 - 1) + "*" + iY(47 === e ? e : oe());
							}(oe(), i3), i9(c, r, n, iz, iY(i8), iQ(c, 2, -2), 0)), u);
							break;
						default: M += "/";
					}
					break;
				case 123 * b: l[f++] = i0(M) * v;
				case 125 * b:
				case 59:
				case 0:
					switch (x) {
						case 0:
						case 125: y = 0;
						case 59 + d:
							-1 == v && (M = iX(M, /\f/g, "")), g > 0 && i0(M) - h && i1(g > 32 ? oo(M + ";", a, n, h - 1) : oo(iX(M, " ", "") + ";", a, n, h - 2), u);
							break;
						case 59: M += ";";
						default: if (i1(P = oi(M, r, n, f, d, i, l, w, C = [], k = [], h), o), 123 === x) if (0 === d) e(M, r, P, P, C, o, h, l, k);
						else switch (99 === m && 110 === iZ(M, 3) ? 100 : m) {
							case 100:
							case 108:
							case 109:
							case 115:
								e(t, P, P, a && i1(oi(t, P, P, 0, 0, i, l, w, i, C = [], h), k), i, k, h, l, a ? C : k);
								break;
							default: e(M, P, P, P, [""], k, 0, l, k);
						}
					}
					f = d = g = 0, b = v = 1, w = M = "", h = s;
					break;
				case 58: h = 1 + i0(M), g = p;
				default:
					if (b < 1) {
						if (123 == x) --b;
						else if (125 == x && 0 == b++ && 125 == (i8 = i3 > 0 ? iZ(i6, --i3) : 0, i4--, 10 === i8 && (i4 = 1, i2--), i8)) continue;
					}
					switch (M += iY(x), x * b) {
						case 38:
							v = d > 0 ? 1 : (M += "\f", -1);
							break;
						case 44:
							l[f++] = (i0(M) - 1) * v, v = 1;
							break;
						case 64:
							45 === ot() && (M += oa(oe())), m = ot(), d = h = i0(w = M += function(e) {
								for (; !or(ot());) oe();
								return iQ(i6, e, i3);
							}(i3)), x++;
							break;
						case 45: 45 === p && 2 == i0(M) && (b = 0);
					}
			}
			return o;
		}("", null, null, null, [""], t = on(t = e), 0, [0], t), i6 = "", r), f);
	}, h = {
		key: o,
		sheet: new iB({
			key: o,
			container: a,
			nonce: e.nonce,
			speedy: e.speedy,
			prepend: e.prepend,
			insertionPoint: e.insertionPoint
		}),
		nonce: e.nonce,
		inserted: u,
		registered: {},
		insert: function(e, t, r, n) {
			i = r, d(e ? e + "{" + t.styles + "}" : t.styles), n && (h.inserted[t.name] = !0);
		}
	};
	return h.sheet.hydrate(c), h;
}, ob = function(e, t, r) {
	var n = e.key + "-" + t.name;
	!1 === r && void 0 === e.registered[n] && (e.registered[n] = t.styles);
}, oy = function(e, t, r) {
	ob(e, t, r);
	var n = e.key + "-" + t.name;
	if (void 0 === e.inserted[t.name]) {
		var a = t;
		do
			e.insert(t === a ? "." + n : "", a, e.sheet, !0), a = a.next;
		while (void 0 !== a);
	}
};
let ov = eT(() => op({ key: "css" }), { name: "Cache" }), ox = (e) => (t) => {
	t.serialized && (t.withoutScoping ? e.insert("", t.serialized, e.sheet, !0) : oy(e, t.serialized, t.isStringTag ?? !0));
};
var ow = eI({
	sx: k(),
	component: k().optional().default("div")
}, (e, { slots: t, expose: r }) => {
	let n = ij.use(), a = ov.use(), i = n.unstable_css(a, e.sx ?? {}), o = ox(a);
	ee(() => {
		o({
			serialized: i,
			isStringTag: !0
		});
	});
	let s = eu(null);
	return r({ [eo]: s }), () => eC(e.component ?? "div", {
		ref: s,
		class: "0" !== i.name ? `${a.key}-${i.name}` : "",
		children: t
	});
});
function oC(...e) {
	let t, r = "div", n = {}, i = {};
	for (let o of e) {
		if (a(o)) {
			t = o;
			continue;
		}
		if (rt(o) || q(o)) {
			r = o;
			continue;
		}
		y(t) && _(o) ? n = o : i = o;
	}
	return t ??= (e, t) => (r) => {
		let n = {};
		for (let t in e) "component" !== t && "sx" !== t && e[t] && (n[`data-${t}`] = e[t]);
		return eC(r, {
			...n,
			children: t.slots
		});
	}, (e) => {
		let a = Object.assign(eI({
			...n,
			sx: k().optional(),
			component: k().optional()
		}, (n, i) => {
			let o = ij.use(), s = ov.use(), l = ox(s), u = C(""), c = o.unstable_css(s, e), f = () => ("0" !== c.name ? `${s.key}-${c.name}${u.value}` : `${u.value}`) + (a.name ? ` ${a.name}` : "");
			if (r.__styled) {
				let e = o.unstable_css(s, n.sx ?? {});
				"0" !== e.name && (u.value = ` ${s.key}-${e.name}`), ee(() => {
					l({
						serialized: c,
						isStringTag: !0
					}), l({
						serialized: e,
						isStringTag: !0
					});
				});
			} else eM(() => {
				l({
					serialized: c,
					isStringTag: !0
				});
			});
			let d = t(n, i), h = eu(null);
			return i.expose({ [eo]: h }), () => {
				if (r.__styled) {
					let e = d(r);
					return e ? Z(e, {
						component: n.component,
						ref: h,
						class: f()
					}) : null;
				}
				let e = d(ow);
				return e ? Z(e, {
					component: n.component || r,
					sx: n.sx,
					ref: h,
					class: f()
				}) : null;
			};
		}, i), { __styled: !0 });
		return a.toString = () => `.${a.name}`, a;
	};
}
var ok = eI(({ styles: e }) => {
	let t = ij.use(), r = ov.use(), n = ox(r), a = t.unstable_css(r, rt(e) ? { "&": e } : e);
	return eM(() => {
		n({
			serialized: a,
			withoutScoping: !0
		});
	}), () => null;
}, {
	displayName: "GlobalStyle",
	props: ["styles"]
}), oP = eI(() => {
	let e = ij.use().rootCSSVars;
	return () => eC(ok, { styles: {
		":host, :root, [data-theme]": e,
		"*, *::after, *::before": { boxSizing: "border-box" },
		html: { fontSize: "10px" },
		a: { color: "inherit" },
		body: { textStyle: "sys.body-medium" }
	} });
}, { displayName: "CSSReset" });
let oM = eT(() => ({ mountPoint: () => document.body }), { name: "OverlaySetting" });
var oS = eT(() => new o_(W(null), W(null), () => !1), { name: "Overlay" }), o_ = class {
	children = [];
	constructor(e, t, r) {
		this.triggerRef = e, this.contentRef = t, this.isOpen = r;
	}
	add = (e) => (this.children = [...this.children, e], () => {
		this.children = this.children.filter((t) => t !== e);
	});
	isClickInside = (e) => {
		for (let t of this.children) if (t.isClickInside(e)) return !0;
		let t = el(this.triggerRef), r = el(this.contentRef);
		return t && (t === e.target || e.composedPath().includes(t)) || r && (r === e.target || e.composedPath().includes(r));
	};
	topmost() {
		return 0 === this.children.filter((e) => e.isOpen()).length;
	}
}, oA = eI((e, { slots: t, attrs: r, emit: n }) => {
	let a = e.contentRef || W(null), i = new o_(e.triggerRef ?? W(null), a, () => !!e.isOpen), o = oM.use();
	return F(oS.use().add(i)), window && ey(eh(a, "value"), ex((e) => {
		if (!e) return;
		let t = (e) => {
			i.isClickInside(e) || n("click-outside", e);
		};
		return window.addEventListener("pointerdown", t), () => {
			window.removeEventListener("pointerdown", t);
		};
	}), ex((e) => {
		if (!e) return;
		let t = (e) => {
			"Escape" === e.key && i.topmost() && n("esc-keydown", e);
		};
		return window.addEventListener("keydown", t), () => {
			window.removeEventListener("keydown", t);
		};
	}), eO()), () => {
		let s = e.isOpen ? Z(eC("div", {
			...r,
			ref: a,
			style: e.style,
			children: eC(oS, {
				value: i,
				children: t.default?.()
			})
		}), { onVnodeBeforeMount: () => {
			n("content-before-mount");
		} }) : null;
		return eC($, {
			to: o.mountPoint(),
			children: t.transition ? t.transition({ content: s }) : s
		});
	};
}, {
	name: "Overlay",
	inheritAttrs: !1
}, {
	displayName: "Overlay",
	props: [
		"isOpen",
		"style",
		"contentRef",
		"triggerRef"
	],
	emits: [
		"click-outside",
		"esc-keydown",
		"content-before-mount"
	]
}), oT = Math.min, oR = Math.max, oO = Math.round, oD = Math.floor, o$ = (e) => ({
	x: e,
	y: e
}), oI = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
}, oL = {
	start: "end",
	end: "start"
};
function oF(e, t) {
	return "function" == typeof e ? e(t) : e;
}
function oE(e) {
	return e.split("-")[0];
}
function oj(e) {
	return e.split("-")[1];
}
function oB(e) {
	return "x" === e ? "y" : "x";
}
function oV(e) {
	return "y" === e ? "height" : "width";
}
var oH = new Set(["top", "bottom"]);
function oN(e) {
	return oH.has(oE(e)) ? "y" : "x";
}
function oz(e) {
	return e.replace(/start|end/g, (e) => oL[e]);
}
var oW = ["left", "right"], oU = ["right", "left"], oq = ["top", "bottom"], oG = ["bottom", "top"];
function oY(e) {
	return e.replace(/left|right|bottom|top/g, (e) => oI[e]);
}
function oK(e) {
	let { x: t, y: r, width: n, height: a } = e;
	return {
		width: n,
		height: a,
		top: r,
		left: t,
		right: t + n,
		bottom: r + a,
		x: t,
		y: r
	};
}
function oX(e, t, r) {
	let n, { reference: a, floating: i } = e, o = oN(t), s = oB(oN(t)), l = oV(s), u = oE(t), c = "y" === o, f = a.x + a.width / 2 - i.width / 2, d = a.y + a.height / 2 - i.height / 2, h = a[l] / 2 - i[l] / 2;
	switch (u) {
		case "top":
			n = {
				x: f,
				y: a.y - i.height
			};
			break;
		case "bottom":
			n = {
				x: f,
				y: a.y + a.height
			};
			break;
		case "right":
			n = {
				x: a.x + a.width,
				y: d
			};
			break;
		case "left":
			n = {
				x: a.x - i.width,
				y: d
			};
			break;
		default: n = {
			x: a.x,
			y: a.y
		};
	}
	switch (oj(t)) {
		case "start":
			n[s] -= h * (r && c ? -1 : 1);
			break;
		case "end": n[s] += h * (r && c ? -1 : 1);
	}
	return n;
}
var oJ = async (e, t, r) => {
	let { placement: n = "bottom", strategy: a = "absolute", middleware: i = [], platform: o } = r, s = i.filter(Boolean), l = await (null == o.isRTL ? void 0 : o.isRTL(t)), u = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: a
	}), { x: c, y: f } = oX(u, n, l), d = n, h = {}, m = 0;
	for (let r = 0; r < s.length; r++) {
		let { name: i, fn: g } = s[r], { x: p, y: b, data: y, reset: v } = await g({
			x: c,
			y: f,
			initialPlacement: n,
			placement: d,
			strategy: a,
			middlewareData: h,
			rects: u,
			platform: o,
			elements: {
				reference: e,
				floating: t
			}
		});
		c = null != p ? p : c, f = null != b ? b : f, h = {
			...h,
			[i]: {
				...h[i],
				...y
			}
		}, v && m <= 50 && (m++, "object" == typeof v && (v.placement && (d = v.placement), v.rects && (u = !0 === v.rects ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: a
		}) : v.rects), {x: c, y: f} = oX(u, d, l)), r = -1);
	}
	return {
		x: c,
		y: f,
		placement: d,
		strategy: a,
		middlewareData: h
	};
};
async function oZ(e, t) {
	var r, n;
	void 0 === t && (t = {});
	let { x: a, y: i, platform: o, rects: s, elements: l, strategy: u } = e, { boundary: c = "clippingAncestors", rootBoundary: f = "viewport", elementContext: d = "floating", altBoundary: h = !1, padding: m = 0 } = oF(t, e), g = "number" != typeof (n = m) ? {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...n
	} : {
		top: n,
		right: n,
		bottom: n,
		left: n
	}, p = l[h ? "floating" === d ? "reference" : "floating" : d], b = oK(await o.getClippingRect({
		element: null == (r = await (null == o.isElement ? void 0 : o.isElement(p))) || r ? p : p.contextElement || await (null == o.getDocumentElement ? void 0 : o.getDocumentElement(l.floating)),
		boundary: c,
		rootBoundary: f,
		strategy: u
	})), y = "floating" === d ? {
		x: a,
		y: i,
		width: s.floating.width,
		height: s.floating.height
	} : s.reference, v = await (null == o.getOffsetParent ? void 0 : o.getOffsetParent(l.floating)), x = await (null == o.isElement ? void 0 : o.isElement(v)) && await (null == o.getScale ? void 0 : o.getScale(v)) || {
		x: 1,
		y: 1
	}, w = oK(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: l,
		rect: y,
		offsetParent: v,
		strategy: u
	}) : y);
	return {
		top: (b.top - w.top + g.top) / x.y,
		bottom: (w.bottom - b.bottom + g.bottom) / x.y,
		left: (b.left - w.left + g.left) / x.x,
		right: (w.right - b.right + g.right) / x.x
	};
}
function oQ() {
	return "undefined" != typeof window;
}
function o0(e) {
	return o4(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function o1(e) {
	var t;
	return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window;
}
function o2(e) {
	var t;
	return null == (t = (o4(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement;
}
function o4(e) {
	return !!oQ() && (e instanceof Node || e instanceof o1(e).Node);
}
function o5(e) {
	return !!oQ() && (e instanceof Element || e instanceof o1(e).Element);
}
function o3(e) {
	return !!oQ() && (e instanceof HTMLElement || e instanceof o1(e).HTMLElement);
}
function o8(e) {
	return !!oQ() && "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof o1(e).ShadowRoot);
}
var o6 = new Set(["inline", "contents"]);
function o9(e) {
	let { overflow: t, overflowX: r, overflowY: n, display: a } = su(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !o6.has(a);
}
var o7 = new Set([
	"table",
	"td",
	"th"
]), se = [":popover-open", ":modal"];
function st(e) {
	return se.some((t) => {
		try {
			return e.matches(t);
		} catch (e) {
			return !1;
		}
	});
}
var sr = [
	"transform",
	"translate",
	"scale",
	"rotate",
	"perspective"
], sn = [
	"transform",
	"translate",
	"scale",
	"rotate",
	"perspective",
	"filter"
], sa = [
	"paint",
	"layout",
	"strict",
	"content"
];
function si(e) {
	let t = so(), r = o5(e) ? su(e) : e;
	return sr.some((e) => !!r[e] && "none" !== r[e]) || !!r.containerType && "normal" !== r.containerType || !t && !!r.backdropFilter && "none" !== r.backdropFilter || !t && !!r.filter && "none" !== r.filter || sn.some((e) => (r.willChange || "").includes(e)) || sa.some((e) => (r.contain || "").includes(e));
}
function so() {
	return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none");
}
var ss = new Set([
	"html",
	"body",
	"#document"
]);
function sl(e) {
	return ss.has(o0(e));
}
function su(e) {
	return o1(e).getComputedStyle(e);
}
function sc(e) {
	return o5(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function sf(e) {
	if ("html" === o0(e)) return e;
	let t = e.assignedSlot || e.parentNode || o8(e) && e.host || o2(e);
	return o8(t) ? t.host : t;
}
function sd(e, t, r) {
	var n;
	void 0 === t && (t = []), void 0 === r && (r = !0);
	let a = function e(t) {
		let r = sf(t);
		return sl(r) ? t.ownerDocument ? t.ownerDocument.body : t.body : o3(r) && o9(r) ? r : e(r);
	}(e), i = a === (null == (n = e.ownerDocument) ? void 0 : n.body), o = o1(a);
	if (i) {
		let e = sh(o);
		return t.concat(o, o.visualViewport || [], o9(a) ? a : [], e && r ? sd(e) : []);
	}
	return t.concat(a, sd(a, [], r));
}
function sh(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function sm(e) {
	let t = su(e), r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0, a = o3(e), i = a ? e.offsetWidth : r, o = a ? e.offsetHeight : n, s = oO(r) !== i || oO(n) !== o;
	return s && (r = i, n = o), {
		width: r,
		height: n,
		$: s
	};
}
function sg(e) {
	return o5(e) ? e : e.contextElement;
}
function sp(e) {
	let t = sg(e);
	if (!o3(t)) return o$(1);
	let r = t.getBoundingClientRect(), { width: n, height: a, $: i } = sm(t), o = (i ? oO(r.width) : r.width) / n, s = (i ? oO(r.height) : r.height) / a;
	return o && Number.isFinite(o) || (o = 1), s && Number.isFinite(s) || (s = 1), {
		x: o,
		y: s
	};
}
var sb = o$(0);
function sy(e) {
	let t = o1(e);
	return so() && t.visualViewport ? {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	} : sb;
}
function sv(e, t, r, n) {
	var a;
	void 0 === t && (t = !1), void 0 === r && (r = !1);
	let i = e.getBoundingClientRect(), o = sg(e), s = o$(1);
	t && (n ? o5(n) && (s = sp(n)) : s = sp(e));
	let l = (void 0 === (a = r) && (a = !1), n && (!a || n === o1(o)) && a) ? sy(o) : o$(0), u = (i.left + l.x) / s.x, c = (i.top + l.y) / s.y, f = i.width / s.x, d = i.height / s.y;
	if (o) {
		let e = o1(o), t = n && o5(n) ? o1(n) : n, r = e, a = sh(r);
		for (; a && n && t !== r;) {
			let e = sp(a), t = a.getBoundingClientRect(), n = su(a), i = t.left + (a.clientLeft + parseFloat(n.paddingLeft)) * e.x, o = t.top + (a.clientTop + parseFloat(n.paddingTop)) * e.y;
			u *= e.x, c *= e.y, f *= e.x, d *= e.y, u += i, c += o, a = sh(r = o1(a));
		}
	}
	return oK({
		width: f,
		height: d,
		x: u,
		y: c
	});
}
function sx(e, t) {
	let r = sc(e).scrollLeft;
	return t ? t.left + r : sv(o2(e)).left + r;
}
function sw(e, t) {
	let r = e.getBoundingClientRect();
	return {
		x: r.left + t.scrollLeft - sx(e, r),
		y: r.top + t.scrollTop
	};
}
var sC = new Set(["absolute", "fixed"]);
function sk(e, t, r) {
	let n;
	if ("viewport" === t) n = function(e, t) {
		let r = o1(e), n = o2(e), a = r.visualViewport, i = n.clientWidth, o = n.clientHeight, s = 0, l = 0;
		if (a) {
			i = a.width, o = a.height;
			let e = so();
			(!e || e && "fixed" === t) && (s = a.offsetLeft, l = a.offsetTop);
		}
		let u = sx(n);
		if (u <= 0) {
			let e = n.ownerDocument, t = e.body, r = getComputedStyle(t), a = "CSS1Compat" === e.compatMode && parseFloat(r.marginLeft) + parseFloat(r.marginRight) || 0, o = Math.abs(n.clientWidth - t.clientWidth - a);
			o <= 25 && (i -= o);
		} else u <= 25 && (i += u);
		return {
			width: i,
			height: o,
			x: s,
			y: l
		};
	}(e, r);
	else if ("document" === t) n = function(e) {
		let t = o2(e), r = sc(e), n = e.ownerDocument.body, a = oR(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), i = oR(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight), o = -r.scrollLeft + sx(e), s = -r.scrollTop;
		return "rtl" === su(n).direction && (o += oR(t.clientWidth, n.clientWidth) - a), {
			width: a,
			height: i,
			x: o,
			y: s
		};
	}(o2(e));
	else if (o5(t)) n = function(e, t) {
		let r = sv(e, !0, "fixed" === t), n = r.top + e.clientTop, a = r.left + e.clientLeft, i = o3(e) ? sp(e) : o$(1), o = e.clientWidth * i.x, s = e.clientHeight * i.y;
		return {
			width: o,
			height: s,
			x: a * i.x,
			y: n * i.y
		};
	}(t, r);
	else {
		let r = sy(e);
		n = {
			x: t.x - r.x,
			y: t.y - r.y,
			width: t.width,
			height: t.height
		};
	}
	return oK(n);
}
function sP(e) {
	return "static" === su(e).position;
}
function sM(e, t) {
	if (!o3(e) || "fixed" === su(e).position) return null;
	if (t) return t(e);
	let r = e.offsetParent;
	return o2(e) === r && (r = r.ownerDocument.body), r;
}
function sS(e, t) {
	var r;
	let n = o1(e);
	if (st(e)) return n;
	if (!o3(e)) {
		let t = sf(e);
		for (; t && !sl(t);) {
			if (o5(t) && !sP(t)) return t;
			t = sf(t);
		}
		return n;
	}
	let a = sM(e, t);
	for (; a && (r = a, o7.has(o0(r))) && sP(a);) a = sM(a, t);
	return a && sl(a) && sP(a) && !si(a) ? n : a || function(e) {
		let t = sf(e);
		for (; o3(t) && !sl(t);) {
			if (si(t)) return t;
			if (st(t)) break;
			t = sf(t);
		}
		return null;
	}(e) || n;
}
var s_ = async function(e) {
	let t = this.getOffsetParent || sS, r = this.getDimensions, n = await r(e.floating);
	return {
		reference: function(e, t, r) {
			let n = o3(t), a = o2(t), i = "fixed" === r, o = sv(e, !0, i, t), s = {
				scrollLeft: 0,
				scrollTop: 0
			}, l = o$(0);
			if (n || !n && !i) if (("body" !== o0(t) || o9(a)) && (s = sc(t)), n) {
				let e = sv(t, !0, i, t);
				l.x = e.x + t.clientLeft, l.y = e.y + t.clientTop;
			} else a && (l.x = sx(a));
			i && !n && a && (l.x = sx(a));
			let u = !a || n || i ? o$(0) : sw(a, s);
			return {
				x: o.left + s.scrollLeft - l.x - u.x,
				y: o.top + s.scrollTop - l.y - u.y,
				width: o.width,
				height: o.height
			};
		}(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: n.width,
			height: n.height
		}
	};
}, sA = {
	convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
		let { elements: t, rect: r, offsetParent: n, strategy: a } = e, i = "fixed" === a, o = o2(n), s = !!t && st(t.floating);
		if (n === o || s && i) return r;
		let l = {
			scrollLeft: 0,
			scrollTop: 0
		}, u = o$(1), c = o$(0), f = o3(n);
		if ((f || !f && !i) && (("body" !== o0(n) || o9(o)) && (l = sc(n)), o3(n))) {
			let e = sv(n);
			u = sp(n), c.x = e.x + n.clientLeft, c.y = e.y + n.clientTop;
		}
		let d = !o || f || i ? o$(0) : sw(o, l);
		return {
			width: r.width * u.x,
			height: r.height * u.y,
			x: r.x * u.x - l.scrollLeft * u.x + c.x + d.x,
			y: r.y * u.y - l.scrollTop * u.y + c.y + d.y
		};
	},
	getDocumentElement: o2,
	getClippingRect: function(e) {
		let { element: t, boundary: r, rootBoundary: n, strategy: a } = e, i = [..."clippingAncestors" === r ? st(t) ? [] : function(e, t) {
			let r = t.get(e);
			if (r) return r;
			let n = sd(e, [], !1).filter((e) => o5(e) && "body" !== o0(e)), a = null, i = "fixed" === su(e).position, o = i ? sf(e) : e;
			for (; o5(o) && !sl(o);) {
				let t = su(o), r = si(o);
				r || "fixed" !== t.position || (a = null), (i ? !r && !a : !r && "static" === t.position && !!a && sC.has(a.position) || o9(o) && !r && function e(t, r) {
					let n = sf(t);
					return !(n === r || !o5(n) || sl(n)) && ("fixed" === su(n).position || e(n, r));
				}(e, o)) ? n = n.filter((e) => e !== o) : a = t, o = sf(o);
			}
			return t.set(e, n), n;
		}(t, this._c) : [].concat(r), n], o = i[0], s = i.reduce((e, r) => {
			let n = sk(t, r, a);
			return e.top = oR(n.top, e.top), e.right = oT(n.right, e.right), e.bottom = oT(n.bottom, e.bottom), e.left = oR(n.left, e.left), e;
		}, sk(t, o, a));
		return {
			width: s.right - s.left,
			height: s.bottom - s.top,
			x: s.left,
			y: s.top
		};
	},
	getOffsetParent: sS,
	getElementRects: s_,
	getClientRects: function(e) {
		return Array.from(e.getClientRects());
	},
	getDimensions: function(e) {
		let { width: t, height: r } = sm(e);
		return {
			width: t,
			height: r
		};
	},
	getScale: sp,
	isElement: o5,
	isRTL: function(e) {
		return "rtl" === su(e).direction;
	}
};
function sT(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
var sR = function(e) {
	return void 0 === e && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			var r, n;
			let a, i, { placement: o, rects: s, platform: l, elements: u } = t, { apply: c = () => {},...f } = oF(e, t), d = await oZ(t, f), h = oE(o), m = oj(o), g = "y" === oN(o), { width: p, height: b } = s.floating;
			"top" === h || "bottom" === h ? (a = h, i = m === (await (null == l.isRTL ? void 0 : l.isRTL(u.floating)) ? "start" : "end") ? "left" : "right") : (i = h, a = "end" === m ? "top" : "bottom");
			let y = b - d.top - d.bottom, v = p - d.left - d.right, x = oT(b - d[a], y), w = oT(p - d[i], v), C = !t.middlewareData.shift, k = x, P = w;
			if (null != (r = t.middlewareData.shift) && r.enabled.x && (P = v), null != (n = t.middlewareData.shift) && n.enabled.y && (k = y), C && !m) {
				let e = oR(d.left, 0), t = oR(d.right, 0), r = oR(d.top, 0), n = oR(d.bottom, 0);
				g ? P = p - 2 * (0 !== e || 0 !== t ? e + t : oR(d.left, d.right)) : k = b - 2 * (0 !== r || 0 !== n ? r + n : oR(d.top, d.bottom));
			}
			await c({
				...t,
				availableWidth: P,
				availableHeight: k
			});
			let M = await l.getDimensions(u.floating);
			return p !== M.width || b !== M.height ? { reset: { rects: !0 } } : {};
		}
	};
}, sO = eI((e, { slots: t, emit: r, attrs: n }) => {
	let a = ea(null), i = ea(null);
	return ey(eE([a, i]), ex(([t, r]) => {
		if (r && t) {
			let n = async () => {
				var n, a;
				r.style.position = "absolute";
				let i = await ((e, t, r) => {
					let n = /* @__PURE__ */ new Map(), a = {
						platform: sA,
						...r
					}, i = {
						...a.platform,
						_c: n
					};
					return oJ(e, t, {
						...a,
						platform: i
					});
				})(t, r, {
					placement: e.placement ?? "bottom",
					middleware: [
						...e.modifiers ?? [],
						...e.middleware ?? [],
						(void 0 === n && (n = {}), {
							name: "flip",
							options: n,
							async fn(e) {
								var t, r, a, i, o;
								let { placement: s, middlewareData: l, rects: u, initialPlacement: c, platform: f, elements: d } = e, { mainAxis: h = !0, crossAxis: m = !0, fallbackPlacements: g, fallbackStrategy: p = "bestFit", fallbackAxisSideDirection: b = "none", flipAlignment: y = !0,...v } = oF(n, e);
								if (null != (t = l.arrow) && t.alignmentOffset) return {};
								let x = oE(s), w = oN(c), C = oE(c) === c, k = await (null == f.isRTL ? void 0 : f.isRTL(d.floating)), P = g || (C || !y ? [oY(c)] : function(e) {
									let t = oY(e);
									return [
										oz(e),
										t,
										oz(t)
									];
								}(c)), M = "none" !== b;
								!g && M && P.push(...function(e, t, r, n) {
									let a = oj(e), i = function(e, t, r) {
										switch (e) {
											case "top":
											case "bottom":
												if (r) return t ? oU : oW;
												return t ? oW : oU;
											case "left":
											case "right": return t ? oq : oG;
											default: return [];
										}
									}(oE(e), "start" === r, n);
									return a && (i = i.map((e) => e + "-" + a), t && (i = i.concat(i.map(oz)))), i;
								}(c, y, b, k));
								let S = [c, ...P], _ = await oZ(e, v), A = [], T = (null == (r = l.flip) ? void 0 : r.overflows) || [];
								if (h && A.push(_[x]), m) {
									let e = function(e, t, r) {
										void 0 === r && (r = !1);
										let n = oj(e), a = oB(oN(e)), i = oV(a), o = "x" === a ? n === (r ? "end" : "start") ? "right" : "left" : "start" === n ? "bottom" : "top";
										return t.reference[i] > t.floating[i] && (o = oY(o)), [o, oY(o)];
									}(s, u, k);
									A.push(_[e[0]], _[e[1]]);
								}
								if (T = [...T, {
									placement: s,
									overflows: A
								}], !A.every((e) => e <= 0)) {
									let e = ((null == (a = l.flip) ? void 0 : a.index) || 0) + 1, t = S[e];
									if (t && ("alignment" !== m || w === oN(t) || T.every((e) => oN(e.placement) !== w || e.overflows[0] > 0))) return {
										data: {
											index: e,
											overflows: T
										},
										reset: { placement: t }
									};
									let r = null == (i = T.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : i.placement;
									if (!r) switch (p) {
										case "bestFit": {
											let e = null == (o = T.filter((e) => {
												if (M) {
													let t = oN(e.placement);
													return t === w || "y" === t;
												}
												return !0;
											}).map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : o[0];
											e && (r = e);
											break;
										}
										case "initialPlacement": r = c;
									}
									if (s !== r) return { reset: { placement: r } };
								}
								return {};
							}
						}),
						(void 0 === a && (a = {}), {
							name: "shift",
							options: a,
							async fn(e) {
								let { x: t, y: r, placement: n } = e, { mainAxis: i = !0, crossAxis: o = !1, limiter: s = { fn: (e) => {
									let { x: t, y: r } = e;
									return {
										x: t,
										y: r
									};
								} },...l } = oF(a, e), u = {
									x: t,
									y: r
								}, c = await oZ(e, l), f = oN(oE(n)), d = oB(f), h = u[d], m = u[f];
								if (i) {
									let e = "y" === d ? "top" : "left", t = "y" === d ? "bottom" : "right", r = h + c[e], n = h - c[t];
									h = oR(r, oT(h, n));
								}
								if (o) {
									let e = "y" === f ? "top" : "left", t = "y" === f ? "bottom" : "right", r = m + c[e], n = m - c[t];
									m = oR(r, oT(m, n));
								}
								let g = s.fn({
									...e,
									[d]: h,
									[f]: m
								});
								return {
									...g,
									data: {
										x: g.x - t,
										y: g.y - r,
										enabled: {
											[d]: i,
											[f]: o
										}
									}
								};
							}
						})
					]
				});
				Object.assign(r.style, {
					left: `${i.x}px`,
					top: `${i.y}px`
				}), r.setAttribute("data-placement", i.placement);
			}, a = function(e, t, r, n) {
				let a;
				void 0 === n && (n = {});
				let { ancestorScroll: i = !0, ancestorResize: o = !0, elementResize: s = "function" == typeof ResizeObserver, layoutShift: l = "function" == typeof IntersectionObserver, animationFrame: u = !1 } = n, c = sg(e), f = i || o ? [...c ? sd(c) : [], ...sd(t)] : [];
				f.forEach((e) => {
					i && e.addEventListener("scroll", r, { passive: !0 }), o && e.addEventListener("resize", r);
				});
				let d = c && l ? function(e, t) {
					let r, n = null, a = o2(e);
					function i() {
						var e;
						clearTimeout(r), null == (e = n) || e.disconnect(), n = null;
					}
					return function o(s, l) {
						void 0 === s && (s = !1), void 0 === l && (l = 1), i();
						let u = e.getBoundingClientRect(), { left: c, top: f, width: d, height: h } = u;
						if (s || t(), !d || !h) return;
						let m = oD(f), g = oD(a.clientWidth - (c + d)), p = {
							rootMargin: -m + "px " + -g + "px " + -oD(a.clientHeight - (f + h)) + "px " + -oD(c) + "px",
							threshold: oR(0, oT(1, l)) || 1
						}, b = !0;
						function y(t) {
							let n = t[0].intersectionRatio;
							if (n !== l) {
								if (!b) return o();
								n ? o(!1, n) : r = setTimeout(() => {
									o(!1, 1e-7);
								}, 1e3);
							}
							1 !== n || sT(u, e.getBoundingClientRect()) || o(), b = !1;
						}
						try {
							n = new IntersectionObserver(y, {
								...p,
								root: a.ownerDocument
							});
						} catch (e) {
							n = new IntersectionObserver(y, p);
						}
						n.observe(e);
					}(!0), i;
				}(c, r) : null, h = -1, m = null;
				s && (m = new ResizeObserver((e) => {
					let [n] = e;
					n && n.target === c && m && (m.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
						var e;
						null == (e = m) || e.observe(t);
					})), r();
				}), c && !u && m.observe(c), m.observe(t));
				let g = u ? sv(e) : null;
				return u && function t() {
					let n = sv(e);
					g && !sT(g, n) && r(), g = n, a = requestAnimationFrame(t);
				}(), r(), () => {
					var e;
					f.forEach((e) => {
						i && e.removeEventListener("scroll", r), o && e.removeEventListener("resize", r);
					}), d?.(), null == (e = m) || e.disconnect(), m = null, u && cancelAnimationFrame(a);
				};
			}(t, r, n);
			return () => {
				a();
			};
		}
		return () => {};
	}), eO()), () => {
		let o = t.default?.()[0];
		return o ? e_(X, { children: [Z(o, {
			...n,
			onVnodeMounted: (e) => {
				a.value = function e(t) {
					if (t) {
						if (t instanceof HTMLElement) return t;
						if (t instanceof Text) return e(t.nextElementSibling);
					}
					return null;
				}(e.el);
			}
		}), eC(oA, {
			style: { zIndex: 100 },
			triggerRef: a,
			contentRef: i,
			isOpen: e.isOpen,
			onClickOutside: (e) => r("click-outside", e),
			onEscKeydown: (e) => r("esc-keydown", e),
			$transition: t.transition,
			children: t.content?.()
		})] }) : null;
	};
}, {
	name: "Popper",
	inheritAttrs: !1
}, {
	displayName: "Popper",
	props: [
		"isOpen",
		"style",
		"contentRef",
		"triggerRef",
		"placement",
		"middleware",
		"modifiers"
	],
	emits: [
		"click-outside",
		"esc-keydown",
		"content-before-mount"
	]
});
export { rt as _, ok as a, ij as c, az as d, aW as f, rr as g, rl as h, oP as i, aX as l, rA as m, sR as n, oC as o, ni as p, oA as r, ow as s, sO as t, aK as u, t6 as v, tb as y };
