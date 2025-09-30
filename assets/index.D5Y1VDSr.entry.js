const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-mermaid.CFmjMvou.chunk.js","assets/vendor-min-mermaid~chunk-5V7UUW6L.B--ayk72.chunk.js","assets/vendor-min-mermaid~chunk-2XYWPRAO.Da8Ms7Co.chunk.js","assets/vendor-mermaid.D2DrBU7P.chunk.js","assets/vendor-mermaid.BVwC1HkE.chunk.js","assets/vendor-min-mermaid~chunk-EFRVIJHI.B3AEJspH.chunk.js","assets/vendor-min-mermaid~chunk-EQI6KKA3.BtxAWkG-.chunk.js","assets/vendor-mermaid.Br1eVBMi.chunk.js","assets/vendor-min-mermaid~chunk-RV6DXAHM.CHvzwstl.chunk.js","assets/vendor-min-mermaid~chunk-TVVDRG3C.EXVGZHXK.chunk.js","assets/vendor-mermaid.Dn-IDRMQ.chunk.js","assets/webapp-openapi-playground-page.DHWtTzD1.chunk.js","assets/webapp-openapi-playground-page-operations.qDOqfNJl.chunk.js"])))=>i.map(i=>d[i]);
let e;
import { n as t, r, t as i } from "./rolldown-runtime.BUi7Tn5u.chunk.js";
import { sn as o } from "./vendor-min-mermaid~chunk-5V7UUW6L.B--ayk72.chunk.js";
let a = document.createElement("link").relList;
if (!(a && a.supports && a.supports("modulepreload"))) {
	for (let e of document.querySelectorAll("link[rel=\"modulepreload\"]")) l(e);
	new MutationObserver((e) => {
		for (let t of e) if ("childList" === t.type) for (let e of t.addedNodes) "LINK" === e.tagName && "modulepreload" === e.rel && l(e);
	}).observe(document, {
		childList: !0,
		subtree: !0
	});
}
function l(e) {
	if (e.ep) return;
	e.ep = !0;
	let t = function(e) {
		let t = {};
		return e.integrity && (t.integrity = e.integrity), e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy), "use-credentials" === e.crossOrigin ? t.credentials = "include" : "anonymous" === e.crossOrigin ? t.credentials = "omit" : t.credentials = "same-origin", t;
	}(e);
	fetch(e.href, t);
}
var s, u, c, f, d, p, h, m, g, y, b, x, w, k, _, C, S, O, A, P, M, T, E, I, D, j, $, L, R, N, F, z, V, B, H, W, U, q, K, G = "object" == typeof global && global && global.Object === Object && global, J = "object" == typeof self && self && self.Object === Object && self, Z = G || J || Function("return this")(), X = Z.Symbol, Y = Object.prototype, Q = Y.hasOwnProperty, ee = Y.toString, et = X ? X.toStringTag : void 0, en = function(e) {
	var t = Q.call(e, et), r = e[et];
	try {
		e[et] = void 0;
		var i = !0;
	} catch (e) {}
	var o = ee.call(e);
	return i && (t ? e[et] = r : delete e[et]), o;
}, er = Object.prototype.toString, ei = X ? X.toStringTag : void 0, eo = function(e) {
	return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : ei && ei in Object(e) ? en(e) : er.call(e);
}, ea = function(e) {
	return null != e && "object" == typeof e;
}, el = function(e) {
	return "symbol" == typeof e || ea(e) && "[object Symbol]" == eo(e);
}, es = function(e, t) {
	for (var r = -1, i = null == e ? 0 : e.length, o = Array(i); ++r < i;) o[r] = t(e[r], r, e);
	return o;
}, eu = Array.isArray, ec = Infinity, ef = X ? X.prototype : void 0, ed = ef ? ef.toString : void 0, ep = function e(t) {
	if ("string" == typeof t) return t;
	if (eu(t)) return es(t, e) + "";
	if (el(t)) return ed ? ed.call(t) : "";
	var r = t + "";
	return "0" == r && 1 / t == -ec ? "-0" : r;
}, eh = /\s/, em = function(e) {
	for (var t = e.length; t-- && eh.test(e.charAt(t)););
	return t;
}, eg = /^\s+/, ey = function(e) {
	var t = typeof e;
	return null != e && ("object" == t || "function" == t);
}, ev = NaN, eb = /^[-+]0x[0-9a-f]+$/i, ex = /^0b[01]+$/i, ew = /^0o[0-7]+$/i, ek = parseInt, e_ = function(e) {
	if ("number" == typeof e) return e;
	if (el(e)) return ev;
	if (ey(e)) {
		var t, r = "function" == typeof e.valueOf ? e.valueOf() : e;
		e = ey(r) ? r + "" : r;
	}
	if ("string" != typeof e) return 0 === e ? e : +e;
	e = (t = e) ? t.slice(0, em(t) + 1).replace(eg, "") : t;
	var i = ex.test(e);
	return i || ew.test(e) ? ek(e.slice(2), i ? 2 : 8) : eb.test(e) ? ev : +e;
}, eC = Infinity, eS = function(e) {
	var t, r = (t = e) ? (t = e_(t)) === eC || t === -eC ? (t < 0 ? -1 : 1) * 17976931348623157e292 : t == t ? t : 0 : 0 === t ? t : 0, i = r % 1;
	return r == r ? i ? r - i : r : 0;
}, eO = function(e) {
	return e;
}, eA = function(e) {
	if (!ey(e)) return !1;
	var t = eo(e);
	return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t;
}, eP = Z["__core-js_shared__"], eM = (s = /[^.]+$/.exec(eP && eP.keys && eP.keys.IE_PROTO || "")) ? "Symbol(src)_1." + s : "", eT = Function.prototype.toString, eE = function(e) {
	if (null != e) {
		try {
			return eT.call(e);
		} catch (e) {}
		try {
			return e + "";
		} catch (e) {}
	}
	return "";
}, eI = /^\[object .+?Constructor\]$/, eD = Object.prototype, ej = Function.prototype.toString, e$ = eD.hasOwnProperty, eL = RegExp("^" + ej.call(e$).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), eR = function(e) {
	return !!ey(e) && (!eM || !(eM in e)) && (eA(e) ? eL : eI).test(eE(e));
}, eN = function(e, t) {
	var r = null == e ? void 0 : e[t];
	return eR(r) ? r : void 0;
}, eF = eN(Z, "WeakMap"), ez = Object.create, eV = function() {
	function e() {}
	return function(t) {
		if (!ey(t)) return {};
		if (ez) return ez(t);
		e.prototype = t;
		var r = new e();
		return e.prototype = void 0, r;
	};
}(), eB = function(e, t, r) {
	switch (r.length) {
		case 0: return e.call(t);
		case 1: return e.call(t, r[0]);
		case 2: return e.call(t, r[0], r[1]);
		case 3: return e.call(t, r[0], r[1], r[2]);
	}
	return e.apply(t, r);
}, eH = function(e, t) {
	var r = -1, i = e.length;
	for (t || (t = Array(i)); ++r < i;) t[r] = e[r];
	return t;
}, eW = Date.now, eU = function() {
	try {
		var e = eN(Object, "defineProperty");
		return e({}, "", {}), e;
	} catch (e) {}
}(), eq = (u = eU ? function(e, t) {
	return eU(e, "toString", {
		configurable: !0,
		enumerable: !1,
		value: function() {
			return t;
		},
		writable: !0
	});
} : eO, c = 0, f = 0, function() {
	var e = eW(), t = 16 - (e - f);
	if (f = e, t > 0) {
		if (++c >= 800) return arguments[0];
	} else c = 0;
	return u.apply(void 0, arguments);
}), eK = function(e, t) {
	for (var r = -1, i = null == e ? 0 : e.length; ++r < i && !1 !== t(e[r], r, e););
	return e;
}, eG = function(e, t, r, i) {
	for (var o = e.length, a = r + (i ? 1 : -1); i ? a-- : ++a < o;) if (t(e[a], a, e)) return a;
	return -1;
}, eJ = function(e) {
	return e != e;
}, eZ = function(e, t, r) {
	for (var i = r - 1, o = e.length; ++i < o;) if (e[i] === t) return i;
	return -1;
}, eX = function(e, t) {
	return !!(null == e ? 0 : e.length) && (t == t ? eZ(e, t, 0) : eG(e, eJ, 0)) > -1;
}, eY = /^(?:0|[1-9]\d*)$/, eQ = function(e, t) {
	var r = typeof e;
	return !!(t = null == t ? 9007199254740991 : t) && ("number" == r || "symbol" != r && eY.test(e)) && e > -1 && e % 1 == 0 && e < t;
}, e0 = function(e, t, r) {
	"__proto__" == t && eU ? eU(e, t, {
		configurable: !0,
		enumerable: !0,
		value: r,
		writable: !0
	}) : e[t] = r;
}, e1 = function(e, t) {
	return e === t || e != e && t != t;
}, e2 = Object.prototype.hasOwnProperty, e4 = function(e, t, r) {
	var i = e[t];
	e2.call(e, t) && e1(i, r) && (void 0 !== r || t in e) || e0(e, t, r);
}, e3 = function(e, t, r, i) {
	var o = !r;
	r || (r = {});
	for (var a = -1, l = t.length; ++a < l;) {
		var s = t[a], u = i ? i(r[s], e[s], s, r, e) : void 0;
		void 0 === u && (u = e[s]), o ? e0(r, s, u) : e4(r, s, u);
	}
	return r;
}, e5 = Math.max, e6 = function(e) {
	return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991;
}, e9 = function(e) {
	return null != e && e6(e.length) && !eA(e);
}, e8 = function(e, t, r) {
	if (!ey(r)) return !1;
	var i = typeof t;
	return ("number" == i ? !!(e9(r) && eQ(t, r.length)) : "string" == i && t in r) && e1(r[t], e);
}, e7 = Object.prototype, te = function(e) {
	var t = e && e.constructor;
	return e === ("function" == typeof t && t.prototype || e7);
}, tt = function(e, t) {
	for (var r = -1, i = Array(e); ++r < e;) i[r] = t(r);
	return i;
}, tn = function(e) {
	return ea(e) && "[object Arguments]" == eo(e);
}, tr = Object.prototype, ti = tr.hasOwnProperty, to = tr.propertyIsEnumerable, ta = tn(function() {
	return arguments;
}()) ? tn : function(e) {
	return ea(e) && ti.call(e, "callee") && !to.call(e, "callee");
}, tl = "object" == typeof exports && exports && !exports.nodeType && exports, ts = tl && "object" == typeof module && module && !module.nodeType && module, tu = ts && ts.exports === tl ? Z.Buffer : void 0, tc = (tu ? tu.isBuffer : void 0) || function() {
	return !1;
}, tf = {};
tf["[object Float32Array]"] = tf["[object Float64Array]"] = tf["[object Int8Array]"] = tf["[object Int16Array]"] = tf["[object Int32Array]"] = tf["[object Uint8Array]"] = tf["[object Uint8ClampedArray]"] = tf["[object Uint16Array]"] = tf["[object Uint32Array]"] = !0, tf["[object Arguments]"] = tf["[object Array]"] = tf["[object ArrayBuffer]"] = tf["[object Boolean]"] = tf["[object DataView]"] = tf["[object Date]"] = tf["[object Error]"] = tf["[object Function]"] = tf["[object Map]"] = tf["[object Number]"] = tf["[object Object]"] = tf["[object RegExp]"] = tf["[object Set]"] = tf["[object String]"] = tf["[object WeakMap]"] = !1;
var td = function(e) {
	return function(t) {
		return e(t);
	};
}, tp = "object" == typeof exports && exports && !exports.nodeType && exports, th = tp && "object" == typeof module && module && !module.nodeType && module, tm = th && th.exports === tp && G.process, tg = function() {
	try {
		var e = th && th.require && th.require("util").types;
		if (e) return e;
		return tm && tm.binding && tm.binding("util");
	} catch (e) {}
}(), ty = tg && tg.isTypedArray, tv = ty ? td(ty) : function(e) {
	return ea(e) && e6(e.length) && !!tf[eo(e)];
}, tb = Object.prototype.hasOwnProperty, tx = function(e, t) {
	var r = eu(e), i = !r && ta(e), o = !r && !i && tc(e), a = !r && !i && !o && tv(e), l = r || i || o || a, s = l ? tt(e.length, String) : [], u = s.length;
	for (var c in e) (t || tb.call(e, c)) && !(l && ("length" == c || o && ("offset" == c || "parent" == c) || a && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || eQ(c, u))) && s.push(c);
	return s;
}, tw = function(e, t) {
	return function(r) {
		return e(t(r));
	};
}, tk = tw(Object.keys, Object), t_ = Object.prototype.hasOwnProperty, tC = function(e) {
	if (!te(e)) return tk(e);
	var t = [];
	for (var r in Object(e)) t_.call(e, r) && "constructor" != r && t.push(r);
	return t;
}, tS = function(e) {
	return e9(e) ? tx(e) : tC(e);
}, tO = function(e) {
	var t = [];
	if (null != e) for (var r in Object(e)) t.push(r);
	return t;
}, tA = Object.prototype.hasOwnProperty, tP = function(e) {
	if (!ey(e)) return tO(e);
	var t = te(e), r = [];
	for (var i in e) "constructor" == i && (t || !tA.call(e, i)) || r.push(i);
	return r;
}, tM = function(e) {
	return e9(e) ? tx(e, !0) : tP(e);
}, tT = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, tE = /^\w*$/, tI = function(e, t) {
	if (eu(e)) return !1;
	var r = typeof e;
	return !!("number" == r || "symbol" == r || "boolean" == r || null == e || el(e)) || tE.test(e) || !tT.test(e) || null != t && e in Object(t);
}, tD = eN(Object, "create"), tj = Object.prototype.hasOwnProperty, t$ = Object.prototype.hasOwnProperty;
function tL(e) {
	var t = -1, r = null == e ? 0 : e.length;
	for (this.clear(); ++t < r;) {
		var i = e[t];
		this.set(i[0], i[1]);
	}
}
tL.prototype.clear = function() {
	this.__data__ = tD ? tD(null) : {}, this.size = 0;
}, tL.prototype.delete = function(e) {
	var t = this.has(e) && delete this.__data__[e];
	return this.size -= !!t, t;
}, tL.prototype.get = function(e) {
	var t = this.__data__;
	if (tD) {
		var r = t[e];
		return "__lodash_hash_undefined__" === r ? void 0 : r;
	}
	return tj.call(t, e) ? t[e] : void 0;
}, tL.prototype.has = function(e) {
	var t = this.__data__;
	return tD ? void 0 !== t[e] : t$.call(t, e);
}, tL.prototype.set = function(e, t) {
	var r = this.__data__;
	return this.size += +!this.has(e), r[e] = tD && void 0 === t ? "__lodash_hash_undefined__" : t, this;
};
var tR = function(e, t) {
	for (var r = e.length; r--;) if (e1(e[r][0], t)) return r;
	return -1;
}, tN = Array.prototype.splice;
function tF(e) {
	var t = -1, r = null == e ? 0 : e.length;
	for (this.clear(); ++t < r;) {
		var i = e[t];
		this.set(i[0], i[1]);
	}
}
tF.prototype.clear = function() {
	this.__data__ = [], this.size = 0;
}, tF.prototype.delete = function(e) {
	var t = this.__data__, r = tR(t, e);
	return !(r < 0) && (r == t.length - 1 ? t.pop() : tN.call(t, r, 1), --this.size, !0);
}, tF.prototype.get = function(e) {
	var t = this.__data__, r = tR(t, e);
	return r < 0 ? void 0 : t[r][1];
}, tF.prototype.has = function(e) {
	return tR(this.__data__, e) > -1;
}, tF.prototype.set = function(e, t) {
	var r = this.__data__, i = tR(r, e);
	return i < 0 ? (++this.size, r.push([e, t])) : r[i][1] = t, this;
};
var tz = eN(Z, "Map"), tV = function(e) {
	var t = typeof e;
	return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e;
}, tB = function(e, t) {
	var r = e.__data__;
	return tV(t) ? r["string" == typeof t ? "string" : "hash"] : r.map;
};
function tH(e) {
	var t = -1, r = null == e ? 0 : e.length;
	for (this.clear(); ++t < r;) {
		var i = e[t];
		this.set(i[0], i[1]);
	}
}
function tW(e, t) {
	if ("function" != typeof e || null != t && "function" != typeof t) throw TypeError("Expected a function");
	var r = function() {
		var i = arguments, o = t ? t.apply(this, i) : i[0], a = r.cache;
		if (a.has(o)) return a.get(o);
		var l = e.apply(this, i);
		return r.cache = a.set(o, l) || a, l;
	};
	return r.cache = new (tW.Cache || tH)(), r;
}
tH.prototype.clear = function() {
	this.size = 0, this.__data__ = {
		hash: new tL(),
		map: new (tz || tF)(),
		string: new tL()
	};
}, tH.prototype.delete = function(e) {
	var t = tB(this, e).delete(e);
	return this.size -= !!t, t;
}, tH.prototype.get = function(e) {
	return tB(this, e).get(e);
}, tH.prototype.has = function(e) {
	return tB(this, e).has(e);
}, tH.prototype.set = function(e, t) {
	var r = tB(this, e), i = r.size;
	return r.set(e, t), this.size += +(r.size != i), this;
}, tW.Cache = tH;
var tU = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, tq = /\\(\\)?/g, tK = (p = (d = tW(function(e) {
	var t = [];
	return 46 === e.charCodeAt(0) && t.push(""), e.replace(tU, function(e, r, i, o) {
		t.push(i ? o.replace(tq, "$1") : r || e);
	}), t;
}, function(e) {
	return 500 === p.size && p.clear(), e;
})).cache, d), tG = function(e) {
	return null == e ? "" : ep(e);
}, tJ = function(e, t) {
	return eu(e) ? e : tI(e, t) ? [e] : tK(tG(e));
}, tZ = Infinity, tX = function(e) {
	if ("string" == typeof e || el(e)) return e;
	var t = e + "";
	return "0" == t && 1 / e == -tZ ? "-0" : t;
}, tY = function(e, t) {
	t = tJ(t, e);
	for (var r = 0, i = t.length; null != e && r < i;) e = e[tX(t[r++])];
	return r && r == i ? e : void 0;
}, tQ = function(e, t, r) {
	var i = null == e ? void 0 : tY(e, t);
	return void 0 === i ? r : i;
}, t0 = function(e, t) {
	for (var r = -1, i = t.length, o = e.length; ++r < i;) e[o + r] = t[r];
	return e;
}, t1 = X ? X.isConcatSpreadable : void 0, t2 = function(e) {
	return eu(e) || ta(e) || !!(t1 && e && e[t1]);
}, t4 = function e(t, r, i, o, a) {
	var l = -1, s = t.length;
	for (i || (i = t2), a || (a = []); ++l < s;) {
		var u = t[l];
		r > 0 && i(u) ? r > 1 ? e(u, r - 1, i, o, a) : t0(a, u) : o || (a[a.length] = u);
	}
	return a;
}, t3 = function(e) {
	return (null == e ? 0 : e.length) ? t4(e, 1) : [];
}, t5 = function(e) {
	var t;
	return eq((t = e5((t = void 0, e.length - 1), 0), function() {
		for (var r = arguments, i = -1, o = e5(r.length - t, 0), a = Array(o); ++i < o;) a[i] = r[t + i];
		i = -1;
		for (var l = Array(t + 1); ++i < t;) l[i] = r[i];
		return l[t] = t3(a), eB(e, this, l);
	}), e + "");
}, t6 = tw(Object.getPrototypeOf, Object), t9 = Object.prototype, t8 = Function.prototype.toString, t7 = t9.hasOwnProperty, ne = t8.call(Object), nt = function(e) {
	if (!ea(e) || "[object Object]" != eo(e)) return !1;
	var t = t6(e);
	if (null === t) return !0;
	var r = t7.call(t, "constructor") && t.constructor;
	return "function" == typeof r && r instanceof r && t8.call(r) == ne;
}, nn = function(e, t, r) {
	var i = -1, o = e.length;
	t < 0 && (t = -t > o ? 0 : o + t), (r = r > o ? o : r) < 0 && (r += o), o = t > r ? 0 : r - t >>> 0, t >>>= 0;
	for (var a = Array(o); ++i < o;) a[i] = e[i + t];
	return a;
}, nr = function(e, t, r) {
	var i = e.length;
	return r = void 0 === r ? i : r, !t && r >= i ? e : nn(e, t, r);
}, ni = RegExp("[\\u200d\ud800-\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"), no = function(e) {
	return ni.test(e);
}, na = "\ud800-\udfff", nl = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", ns = "\ud83c[\udffb-\udfff]", nu = "[^" + na + "]", nc = "(?:\ud83c[\udde6-\uddff]){2}", nf = "[\ud800-\udbff][\udc00-\udfff]", nd = "(?:" + nl + "|" + ns + ")?", np = "[\\ufe0e\\ufe0f]?", nh = "(?:\\u200d(?:" + [
	nu,
	nc,
	nf
].join("|") + ")" + np + nd + ")*", nm = RegExp(ns + "(?=" + ns + ")|" + ("(?:" + [
	nu + nl + "?",
	nl,
	nc,
	nf,
	"[" + na + "]"
].join("|")) + ")" + (np + nd + nh), "g"), ng = function(e) {
	return no(e) ? e.match(nm) || [] : e.split("");
}, ny = function(e) {
	var t = no(e = tG(e)) ? ng(e) : void 0, r = t ? t[0] : e.charAt(0), i = t ? nr(t, 1).join("") : e.slice(1);
	return r.toUpperCase() + i;
}, nv = function(e, t, r, i) {
	var o = -1, a = null == e ? 0 : e.length;
	for (i && a && (r = e[++o]); ++o < a;) r = t(r, e[o], o, e);
	return r;
}, nb = (h = {
	À: "A",
	Á: "A",
	Â: "A",
	Ã: "A",
	Ä: "A",
	Å: "A",
	à: "a",
	á: "a",
	â: "a",
	ã: "a",
	ä: "a",
	å: "a",
	Ç: "C",
	ç: "c",
	Ð: "D",
	ð: "d",
	È: "E",
	É: "E",
	Ê: "E",
	Ë: "E",
	è: "e",
	é: "e",
	ê: "e",
	ë: "e",
	Ì: "I",
	Í: "I",
	Î: "I",
	Ï: "I",
	ì: "i",
	í: "i",
	î: "i",
	ï: "i",
	Ñ: "N",
	ñ: "n",
	Ò: "O",
	Ó: "O",
	Ô: "O",
	Õ: "O",
	Ö: "O",
	Ø: "O",
	ò: "o",
	ó: "o",
	ô: "o",
	õ: "o",
	ö: "o",
	ø: "o",
	Ù: "U",
	Ú: "U",
	Û: "U",
	Ü: "U",
	ù: "u",
	ú: "u",
	û: "u",
	ü: "u",
	Ý: "Y",
	ý: "y",
	ÿ: "y",
	Æ: "Ae",
	æ: "ae",
	Þ: "Th",
	þ: "th",
	ß: "ss",
	Ā: "A",
	Ă: "A",
	Ą: "A",
	ā: "a",
	ă: "a",
	ą: "a",
	Ć: "C",
	Ĉ: "C",
	Ċ: "C",
	Č: "C",
	ć: "c",
	ĉ: "c",
	ċ: "c",
	č: "c",
	Ď: "D",
	Đ: "D",
	ď: "d",
	đ: "d",
	Ē: "E",
	Ĕ: "E",
	Ė: "E",
	Ę: "E",
	Ě: "E",
	ē: "e",
	ĕ: "e",
	ė: "e",
	ę: "e",
	ě: "e",
	Ĝ: "G",
	Ğ: "G",
	Ġ: "G",
	Ģ: "G",
	ĝ: "g",
	ğ: "g",
	ġ: "g",
	ģ: "g",
	Ĥ: "H",
	Ħ: "H",
	ĥ: "h",
	ħ: "h",
	Ĩ: "I",
	Ī: "I",
	Ĭ: "I",
	Į: "I",
	İ: "I",
	ĩ: "i",
	ī: "i",
	ĭ: "i",
	į: "i",
	ı: "i",
	Ĵ: "J",
	ĵ: "j",
	Ķ: "K",
	ķ: "k",
	ĸ: "k",
	Ĺ: "L",
	Ļ: "L",
	Ľ: "L",
	Ŀ: "L",
	Ł: "L",
	ĺ: "l",
	ļ: "l",
	ľ: "l",
	ŀ: "l",
	ł: "l",
	Ń: "N",
	Ņ: "N",
	Ň: "N",
	Ŋ: "N",
	ń: "n",
	ņ: "n",
	ň: "n",
	ŋ: "n",
	Ō: "O",
	Ŏ: "O",
	Ő: "O",
	ō: "o",
	ŏ: "o",
	ő: "o",
	Ŕ: "R",
	Ŗ: "R",
	Ř: "R",
	ŕ: "r",
	ŗ: "r",
	ř: "r",
	Ś: "S",
	Ŝ: "S",
	Ş: "S",
	Š: "S",
	ś: "s",
	ŝ: "s",
	ş: "s",
	š: "s",
	Ţ: "T",
	Ť: "T",
	Ŧ: "T",
	ţ: "t",
	ť: "t",
	ŧ: "t",
	Ũ: "U",
	Ū: "U",
	Ŭ: "U",
	Ů: "U",
	Ű: "U",
	Ų: "U",
	ũ: "u",
	ū: "u",
	ŭ: "u",
	ů: "u",
	ű: "u",
	ų: "u",
	Ŵ: "W",
	ŵ: "w",
	Ŷ: "Y",
	ŷ: "y",
	Ÿ: "Y",
	Ź: "Z",
	Ż: "Z",
	Ž: "Z",
	ź: "z",
	ż: "z",
	ž: "z",
	Ĳ: "IJ",
	ĳ: "ij",
	Œ: "Oe",
	œ: "oe",
	ŉ: "'n",
	ſ: "s"
}, function(e) {
	return null == h ? void 0 : h[e];
}), nx = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, nw = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g"), nk = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, n_ = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, nC = "\ud800-\udfff", nS = "\\u2700-\\u27bf", nO = "a-z\\xdf-\\xf6\\xf8-\\xff", nA = "A-Z\\xc0-\\xd6\\xd8-\\xde", nP = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", nM = "['’]", nT = "[" + nP + "]", nE = "[" + nO + "]", nI = "[^" + nC + nP + "\\d+" + nS + nO + nA + "]", nD = "(?:\ud83c[\udde6-\uddff]){2}", nj = "[\ud800-\udbff][\udc00-\udfff]", n$ = "[" + nA + "]", nL = "(?:" + nE + "|" + nI + ")", nR = "(?:" + n$ + "|" + nI + ")", nN = "(?:" + nM + "(?:d|ll|m|re|s|t|ve))?", nF = "(?:" + nM + "(?:D|LL|M|RE|S|T|VE))?", nz = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\ud83c[\udffb-\udfff])?", nV = "[\\ufe0e\\ufe0f]?", nB = "(?:\\u200d(?:" + [
	"[^" + nC + "]",
	nD,
	nj
].join("|") + ")" + nV + nz + ")*", nH = "(?:" + [
	"[" + nS + "]",
	nD,
	nj
].join("|") + ")" + (nV + nz + nB), nW = RegExp([
	n$ + "?" + nE + "+" + nN + "(?=" + [
		nT,
		n$,
		"$"
	].join("|") + ")",
	nR + "+" + nF + "(?=" + [
		nT,
		n$ + nL,
		"$"
	].join("|") + ")",
	n$ + "?" + nL + "+" + nN,
	n$ + "+" + nF,
	"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])|\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])|\\d+",
	nH
].join("|"), "g"), nU = function(e, t, r) {
	if (e = tG(e), void 0 === (t = r ? void 0 : t)) {
		var i;
		return (i = e, n_.test(i)) ? e.match(nW) || [] : e.match(nk) || [];
	}
	return e.match(t) || [];
}, nq = RegExp("['’]", "g"), nK = function(e) {
	return function(t) {
		var r;
		return nv(nU(((r = tG(r = t)) && r.replace(nx, nb).replace(nw, "")).replace(nq, "")), e, "");
	};
}, nG = nK(function(e, t, r) {
	return t = t.toLowerCase(), e + (r ? ny(tG(t).toLowerCase()) : t);
});
function nJ(e) {
	this.size = (this.__data__ = new tF(e)).size;
}
nJ.prototype.clear = function() {
	this.__data__ = new tF(), this.size = 0;
}, nJ.prototype.delete = function(e) {
	var t = this.__data__, r = t.delete(e);
	return this.size = t.size, r;
}, nJ.prototype.get = function(e) {
	return this.__data__.get(e);
}, nJ.prototype.has = function(e) {
	return this.__data__.has(e);
}, nJ.prototype.set = function(e, t) {
	var r = this.__data__;
	if (r instanceof tF) {
		var i = r.__data__;
		if (!tz || i.length < 199) return i.push([e, t]), this.size = ++r.size, this;
		r = this.__data__ = new tH(i);
	}
	return r.set(e, t), this.size = r.size, this;
};
var nZ = "object" == typeof exports && exports && !exports.nodeType && exports, nX = nZ && "object" == typeof module && module && !module.nodeType && module, nY = nX && nX.exports === nZ ? Z.Buffer : void 0, nQ = nY ? nY.allocUnsafe : void 0, n0 = function(e, t) {
	if (t) return e.slice();
	var r = e.length, i = nQ ? nQ(r) : new e.constructor(r);
	return e.copy(i), i;
}, n1 = function(e, t) {
	for (var r = -1, i = null == e ? 0 : e.length, o = 0, a = []; ++r < i;) {
		var l = e[r];
		t(l, r, e) && (a[o++] = l);
	}
	return a;
}, n2 = function() {
	return [];
}, n4 = Object.prototype.propertyIsEnumerable, n3 = Object.getOwnPropertySymbols, n5 = n3 ? function(e) {
	return null == e ? [] : n1(n3(e = Object(e)), function(t) {
		return n4.call(e, t);
	});
} : n2, n6 = Object.getOwnPropertySymbols ? function(e) {
	for (var t = []; e;) t0(t, n5(e)), e = t6(e);
	return t;
} : n2, n9 = function(e, t, r) {
	var i = t(e);
	return eu(e) ? i : t0(i, r(e));
}, n8 = function(e) {
	return n9(e, tS, n5);
}, n7 = function(e) {
	return n9(e, tM, n6);
}, re = eN(Z, "DataView"), rt = eN(Z, "Promise"), rn = eN(Z, "Set"), rr = "[object Map]", ri = "[object Promise]", ro = "[object Set]", ra = "[object WeakMap]", rl = "[object DataView]", rs = eE(re), ru = eE(tz), rc = eE(rt), rf = eE(rn), rd = eE(eF), rp = eo;
(re && rp(new re(/* @__PURE__ */ new ArrayBuffer(1))) != rl || tz && rp(new tz()) != rr || rt && rp(rt.resolve()) != ri || rn && rp(new rn()) != ro || eF && rp(new eF()) != ra) && (rp = function(e) {
	var t = eo(e), r = "[object Object]" == t ? e.constructor : void 0, i = r ? eE(r) : "";
	if (i) switch (i) {
		case rs: return rl;
		case ru: return rr;
		case rc: return ri;
		case rf: return ro;
		case rd: return ra;
	}
	return t;
});
var rh = rp, rm = Object.prototype.hasOwnProperty, rg = function(e) {
	var t = e.length, r = new e.constructor(t);
	return t && "string" == typeof e[0] && rm.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}, ry = Z.Uint8Array, rv = function(e) {
	var t = new e.constructor(e.byteLength);
	return new ry(t).set(new ry(e)), t;
}, rb = function(e, t) {
	var r = t ? rv(e.buffer) : e.buffer;
	return new e.constructor(r, e.byteOffset, e.byteLength);
}, rx = /\w*$/, rw = function(e) {
	var t = new e.constructor(e.source, rx.exec(e));
	return t.lastIndex = e.lastIndex, t;
}, rk = X ? X.prototype : void 0, r_ = rk ? rk.valueOf : void 0, rC = function(e, t) {
	var r = t ? rv(e.buffer) : e.buffer;
	return new e.constructor(r, e.byteOffset, e.length);
}, rS = function(e, t, r) {
	var i = e.constructor;
	switch (t) {
		case "[object ArrayBuffer]": return rv(e);
		case "[object Boolean]":
		case "[object Date]": return new i(+e);
		case "[object DataView]": return rb(e, r);
		case "[object Float32Array]":
		case "[object Float64Array]":
		case "[object Int8Array]":
		case "[object Int16Array]":
		case "[object Int32Array]":
		case "[object Uint8Array]":
		case "[object Uint8ClampedArray]":
		case "[object Uint16Array]":
		case "[object Uint32Array]": return rC(e, r);
		case "[object Map]":
		case "[object Set]": return new i();
		case "[object Number]":
		case "[object String]": return new i(e);
		case "[object RegExp]": return rw(e);
		case "[object Symbol]": return r_ ? Object(r_.call(e)) : {};
	}
}, rO = tg && tg.isMap, rA = rO ? td(rO) : function(e) {
	return ea(e) && "[object Map]" == rh(e);
}, rP = tg && tg.isSet, rM = rP ? td(rP) : function(e) {
	return ea(e) && "[object Set]" == rh(e);
}, rT = "[object Arguments]", rE = "[object Function]", rI = "[object Object]", rD = {};
rD[rT] = rD["[object Array]"] = rD["[object ArrayBuffer]"] = rD["[object DataView]"] = rD["[object Boolean]"] = rD["[object Date]"] = rD["[object Float32Array]"] = rD["[object Float64Array]"] = rD["[object Int8Array]"] = rD["[object Int16Array]"] = rD["[object Int32Array]"] = rD["[object Map]"] = rD["[object Number]"] = rD[rI] = rD["[object RegExp]"] = rD["[object Set]"] = rD["[object String]"] = rD["[object Symbol]"] = rD["[object Uint8Array]"] = rD["[object Uint8ClampedArray]"] = rD["[object Uint16Array]"] = rD["[object Uint32Array]"] = !0, rD["[object Error]"] = rD[rE] = rD["[object WeakMap]"] = !1;
var rj = function e(t, r, i, o, a, l) {
	var s, u = 1 & r, c = 2 & r, f = 4 & r;
	if (i && (s = a ? i(t, o, a, l) : i(t)), void 0 !== s) return s;
	if (!ey(t)) return t;
	var d = eu(t);
	if (d) {
		if (s = rg(t), !u) return eH(t, s);
	} else {
		var p, h, m, g, y, b = rh(t), x = b == rE || "[object GeneratorFunction]" == b;
		if (tc(t)) return n0(t, u);
		if (b == rI || b == rT || x && !a) {
			if (s = c || x || "function" != typeof (p = t).constructor || te(p) ? {} : eV(t6(p)), !u) return c ? (m = (h = s) && e3(t, tM(t), h), e3(t, n6(t), m)) : (y = (g = s) && e3(t, tS(t), g), e3(t, n5(t), y));
		} else {
			if (!rD[b]) return a ? t : {};
			s = rS(t, b, u);
		}
	}
	l || (l = new nJ());
	var w = l.get(t);
	if (w) return w;
	l.set(t, s), rM(t) ? t.forEach(function(o) {
		s.add(e(o, r, i, o, t, l));
	}) : rA(t) && t.forEach(function(o, a) {
		s.set(a, e(o, r, i, a, t, l));
	});
	var k = d ? void 0 : (f ? c ? n7 : n8 : c ? tM : tS)(t);
	return eK(k || t, function(o, a) {
		k && (o = t[a = o]), e4(s, a, e(o, r, i, a, t, l));
	}), s;
};
function r$(e) {
	var t = -1, r = null == e ? 0 : e.length;
	for (this.__data__ = new tH(); ++t < r;) this.add(e[t]);
}
r$.prototype.add = r$.prototype.push = function(e) {
	return this.__data__.set(e, "__lodash_hash_undefined__"), this;
}, r$.prototype.has = function(e) {
	return this.__data__.has(e);
};
var rL = function(e, t) {
	for (var r = -1, i = null == e ? 0 : e.length; ++r < i;) if (t(e[r], r, e)) return !0;
	return !1;
}, rR = function(e, t) {
	return e.has(t);
}, rN = function(e, t, r, i, o, a) {
	var l = 1 & r, s = e.length, u = t.length;
	if (s != u && !(l && u > s)) return !1;
	var c = a.get(e), f = a.get(t);
	if (c && f) return c == t && f == e;
	var d = -1, p = !0, h = 2 & r ? new r$() : void 0;
	for (a.set(e, t), a.set(t, e); ++d < s;) {
		var m = e[d], g = t[d];
		if (i) var y = l ? i(g, m, d, t, e, a) : i(m, g, d, e, t, a);
		if (void 0 !== y) {
			if (y) continue;
			p = !1;
			break;
		}
		if (h) {
			if (!rL(t, function(e, t) {
				if (!rR(h, t) && (m === e || o(m, e, r, i, a))) return h.push(t);
			})) {
				p = !1;
				break;
			}
		} else if (!(m === g || o(m, g, r, i, a))) {
			p = !1;
			break;
		}
	}
	return a.delete(e), a.delete(t), p;
}, rF = function(e) {
	var t = -1, r = Array(e.size);
	return e.forEach(function(e, i) {
		r[++t] = [i, e];
	}), r;
}, rz = function(e) {
	var t = -1, r = Array(e.size);
	return e.forEach(function(e) {
		r[++t] = e;
	}), r;
}, rV = X ? X.prototype : void 0, rB = rV ? rV.valueOf : void 0, rH = function(e, t, r, i, o, a, l) {
	switch (r) {
		case "[object DataView]":
			if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
			e = e.buffer, t = t.buffer;
		case "[object ArrayBuffer]":
			if (e.byteLength != t.byteLength || !a(new ry(e), new ry(t))) break;
			return !0;
		case "[object Boolean]":
		case "[object Date]":
		case "[object Number]": return e1(+e, +t);
		case "[object Error]": return e.name == t.name && e.message == t.message;
		case "[object RegExp]":
		case "[object String]": return e == t + "";
		case "[object Map]": var s = rF;
		case "[object Set]":
			var u = 1 & i;
			if (s || (s = rz), e.size != t.size && !u) break;
			var c = l.get(e);
			if (c) return c == t;
			i |= 2, l.set(e, t);
			var f = rN(s(e), s(t), i, o, a, l);
			return l.delete(e), f;
		case "[object Symbol]": if (rB) return rB.call(e) == rB.call(t);
	}
	return !1;
}, rW = Object.prototype.hasOwnProperty, rU = function(e, t, r, i, o, a) {
	var l = 1 & r, s = n8(e), u = s.length;
	if (u != n8(t).length && !l) return !1;
	for (var c = u; c--;) {
		var f = s[c];
		if (!(l ? f in t : rW.call(t, f))) return !1;
	}
	var d = a.get(e), p = a.get(t);
	if (d && p) return d == t && p == e;
	var h = !0;
	a.set(e, t), a.set(t, e);
	for (var m = l; ++c < u;) {
		var g = e[f = s[c]], y = t[f];
		if (i) var b = l ? i(y, g, f, t, e, a) : i(g, y, f, e, t, a);
		if (!(void 0 === b ? g === y || o(g, y, r, i, a) : b)) {
			h = !1;
			break;
		}
		m || (m = "constructor" == f);
	}
	if (h && !m) {
		var x = e.constructor, w = t.constructor;
		x != w && "constructor" in e && "constructor" in t && !("function" == typeof x && x instanceof x && "function" == typeof w && w instanceof w) && (h = !1);
	}
	return a.delete(e), a.delete(t), h;
}, rq = "[object Arguments]", rK = "[object Array]", rG = "[object Object]", rJ = Object.prototype.hasOwnProperty, rZ = function(e, t, r, i, o, a) {
	var l = eu(e), s = eu(t), u = l ? rK : rh(e), c = s ? rK : rh(t);
	u = u == rq ? rG : u, c = c == rq ? rG : c;
	var f = u == rG, d = c == rG, p = u == c;
	if (p && tc(e)) {
		if (!tc(t)) return !1;
		l = !0, f = !1;
	}
	if (p && !f) return a || (a = new nJ()), l || tv(e) ? rN(e, t, r, i, o, a) : rH(e, t, u, r, i, o, a);
	if (!(1 & r)) {
		var h = f && rJ.call(e, "__wrapped__"), m = d && rJ.call(t, "__wrapped__");
		if (h || m) {
			var g = h ? e.value() : e, y = m ? t.value() : t;
			return a || (a = new nJ()), o(g, y, r, i, a);
		}
	}
	return !!p && (a || (a = new nJ()), rU(e, t, r, i, o, a));
}, rX = function e(t, r, i, o, a) {
	return t === r || (null != t && null != r && (ea(t) || ea(r)) ? rZ(t, r, i, o, e, a) : t != t && r != r);
}, rY = function(e, t, r, i) {
	var o = r.length, a = o, l = !i;
	if (null == e) return !a;
	for (e = Object(e); o--;) {
		var s = r[o];
		if (l && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
	}
	for (; ++o < a;) {
		var u = (s = r[o])[0], c = e[u], f = s[1];
		if (l && s[2]) {
			if (void 0 === c && !(u in e)) return !1;
		} else {
			var d = new nJ();
			if (i) var p = i(c, f, u, e, t, d);
			if (!(void 0 === p ? rX(f, c, 3, i, d) : p)) return !1;
		}
	}
	return !0;
}, rQ = function(e) {
	return e == e && !ey(e);
}, r0 = function(e) {
	for (var t = tS(e), r = t.length; r--;) {
		var i = t[r], o = e[i];
		t[r] = [
			i,
			o,
			rQ(o)
		];
	}
	return t;
}, r1 = function(e, t) {
	return function(r) {
		return null != r && r[e] === t && (void 0 !== t || e in Object(r));
	};
}, r2 = function(e) {
	var t = r0(e);
	return 1 == t.length && t[0][2] ? r1(t[0][0], t[0][1]) : function(r) {
		return r === e || rY(r, e, t);
	};
}, r4 = function(e, t) {
	return null != e && t in Object(e);
}, r3 = function(e, t, r) {
	t = tJ(t, e);
	for (var i = -1, o = t.length, a = !1; ++i < o;) {
		var l = tX(t[i]);
		if (!(a = null != e && r(e, l))) break;
		e = e[l];
	}
	return a || ++i != o ? a : !!(o = null == e ? 0 : e.length) && e6(o) && eQ(l, o) && (eu(e) || ta(e));
}, r5 = function(e, t) {
	return null != e && r3(e, t, r4);
}, r6 = function(e) {
	return function(t) {
		return null == t ? void 0 : t[e];
	};
}, r9 = function(e) {
	return tI(e) ? r6(tX(e)) : function(t) {
		return tY(t, e);
	};
}, r8 = function(e) {
	if ("function" == typeof e) return e;
	if (null == e) return eO;
	if ("object" == typeof e) {
		var t, r;
		return eu(e) ? (t = e[0], r = e[1], tI(t) && rQ(r) ? r1(tX(t), r) : function(e) {
			var i = tQ(e, t);
			return void 0 === i && i === r ? r5(e, t) : rX(r, i, 3);
		}) : r2(e);
	}
	return r9(e);
}, r7 = function(e, t, r, i) {
	for (var o = -1, a = null == e ? 0 : e.length; ++o < a;) {
		var l = e[o];
		t(i, l, r(l), e);
	}
	return i;
}, ie = function(e, t, r) {
	for (var i = -1, o = Object(e), a = r(e), l = a.length; l--;) {
		var s = a[++i];
		if (!1 === t(o[s], s, o)) break;
	}
	return e;
}, it = function(e, t) {
	return e && ie(e, t, tS);
}, ir = function(e, t) {
	if (null == e) return e;
	if (!e9(e)) return it(e, t);
	for (var r = e.length, i = -1, o = Object(e); (m ? i-- : ++i < r) && !1 !== t(o[i], i, o););
	return e;
}, ii = function(e, t, r, i) {
	return ir(e, function(e, o, a) {
		t(i, e, r(e), a);
	}), i;
}, io = function(e, t, r) {
	for (var i = -1, o = null == e ? 0 : e.length; ++i < o;) if (r(t, e[i])) return !0;
	return !1;
}, ia = function(e) {
	var t = null == e ? 0 : e.length;
	return t ? e[t - 1] : void 0;
}, il = function(e, t) {
	return (eu(e) ? eK : ir)(e, "function" == typeof t ? t : eO);
}, is = Object.prototype.hasOwnProperty, iu = function(e, t) {
	return null != e && is.call(e, t);
}, ic = function(e, t) {
	return null != e && r3(e, t, iu);
}, id = function(e) {
	return "string" == typeof e || !eu(e) && ea(e) && "[object String]" == eo(e);
}, ip = Object.prototype.hasOwnProperty, ih = function(e) {
	if (null == e) return !0;
	if (e9(e) && (eu(e) || "string" == typeof e || "function" == typeof e.splice || tc(e) || tv(e) || ta(e))) return !e.length;
	var t = rh(e);
	if ("[object Map]" == t || "[object Set]" == t) return !e.size;
	if (te(e)) return !tC(e).length;
	for (var r in e) if (ip.call(e, r)) return !1;
	return !0;
}, im = function(e) {
	return "number" == typeof e || ea(e) && "[object Number]" == eo(e);
}, ig = function(e) {
	return void 0 === e;
}, iy = nK(function(e, t, r) {
	return e + (r ? "-" : "") + t.toLowerCase();
}), iv = function(e, t) {
	var r = {};
	return t = r8(t, 3), it(e, function(e, i, o) {
		e0(r, i, t(e, i, o));
	}), r;
}, ib = function(e, t) {
	var r, i;
	return t = tJ(t, e), r = e, null == (e = (i = t).length < 2 ? r : tY(r, nn(i, 0, -1))) || delete e[tX(ia(t))];
}, ix = function(e) {
	return nt(e) ? void 0 : e;
}, iw = t5(function(e, t) {
	var r = {};
	if (null == e) return r;
	var i = !1;
	t = es(t, function(t) {
		return t = tJ(t, e), i || (i = t.length > 1), t;
	}), e3(e, n7(e), r), i && (r = rj(r, 7, ix));
	for (var o = t.length; o--;) ib(r, t[o]);
	return r;
}), ik = function(e, t, r, i) {
	if (!ey(e)) return e;
	t = tJ(t, e);
	for (var o = -1, a = t.length, l = a - 1, s = e; null != s && ++o < a;) {
		var u = tX(t[o]), c = r;
		if ("__proto__" === u || "constructor" === u || "prototype" === u) break;
		if (o != l) {
			var f = s[u];
			void 0 === (c = i ? i(f, u, s) : void 0) && (c = ey(f) ? f : eQ(t[o + 1]) ? [] : {});
		}
		e4(s, u, c), s = s[u];
	}
	return e;
}, i_ = function(e, t, r) {
	for (var i = -1, o = t.length, a = {}; ++i < o;) {
		var l = t[i], s = tY(e, l);
		r(s, l) && ik(a, tJ(l, e), s);
	}
	return a;
}, iC = function(e, t) {
	if (null == e) return {};
	var r = es(n7(e), function(e) {
		return [e];
	});
	return t = r8(t), i_(e, r, function(e, r) {
		return t(e, r[0]);
	});
}, iS = Math.floor, iO = function(e, t) {
	var r = "";
	if (!e || t < 1 || t > 9007199254740991) return r;
	do
		t % 2 && (r += e), (t = iS(t / 2)) && (e += e);
	while (t);
	return r;
}, iA = r6("length"), iP = "\ud800-\udfff", iM = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", iT = "\ud83c[\udffb-\udfff]", iE = "[^" + iP + "]", iI = "(?:\ud83c[\udde6-\uddff]){2}", iD = "[\ud800-\udbff][\udc00-\udfff]", ij = "(?:" + iM + "|" + iT + ")?", i$ = "[\\ufe0e\\ufe0f]?", iL = "(?:\\u200d(?:" + [
	iE,
	iI,
	iD
].join("|") + ")" + i$ + ij + ")*", iR = RegExp(iT + "(?=" + iT + ")|" + ("(?:" + [
	iE + iM + "?",
	iM,
	iI,
	iD,
	"[" + iP + "]"
].join("|")) + ")" + (i$ + ij + iL), "g"), iN = function(e) {
	for (var t = iR.lastIndex = 0; iR.test(e);) ++t;
	return t;
}, iF = function(e) {
	return no(e) ? iN(e) : iA(e);
}, iz = Math.ceil, iV = function(e, t) {
	var r = (t = void 0 === t ? " " : ep(t)).length;
	if (r < 2) return r ? iO(t, e) : t;
	var i = iO(t, iz(e / iF(t)));
	return no(t) ? nr(ng(i), 0, e).join("") : i.slice(0, e);
}, iB = function(e, t, r) {
	e = tG(e);
	var i = (t = eS(t)) ? iF(e) : 0;
	return t && i < t ? iV(t - i, r) + e : e;
}, iH = (g = function(e, t, r) {
	e[+!r].push(t);
}, y = function() {
	return [[], []];
}, function(e, t) {
	var r = eu(e) ? r7 : ii, i = y ? y() : {};
	return r(e, g, r8(t, 2), i);
}), iW = t5(function(e, t) {
	return null == e ? {} : i_(e, t, function(t, r) {
		return r5(e, r);
	});
}), iU = function(e, t, r) {
	return null == e ? e : ik(e, t, r);
}, iq = function(e, t) {
	var r;
	return ir(e, function(e, i, o) {
		return !(r = t(e, i, o));
	}), !!r;
}, iK = function(e, t, r) {
	var i = eu(e) ? rL : iq;
	return r && e8(e, t, r) && (t = void 0), i(e, r8(t, 3));
}, iG = rn && 1 / rz(new rn([, -0]))[1] == Infinity ? function(e) {
	return new rn(e);
} : function() {}, iJ = function(e, t, r) {
	var i = -1, o = eX, a = e.length, l = !0, s = [], u = s;
	if (r) l = !1, o = io;
	else if (a >= 200) {
		var c = t ? null : iG(e);
		if (c) return rz(c);
		l = !1, o = rR, u = new r$();
	} else u = t ? [] : s;
	e: for (; ++i < a;) {
		var f = e[i], d = t ? t(f) : f;
		if (f = r || 0 !== f ? f : 0, l && d == d) {
			for (var p = u.length; p--;) if (u[p] === d) continue e;
			t && u.push(d), s.push(f);
		} else o(u, d, r) || (u !== s && u.push(d), s.push(f));
	}
	return s;
};
function iZ(e) {
	let t = Object.create(null);
	for (let r of e.split(",")) t[r] = 1;
	return (e) => e in t;
}
var iX = {}, iY = [], iQ = () => {}, i0 = () => !1, i1 = (e) => 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && (e.charCodeAt(2) > 122 || 97 > e.charCodeAt(2)), i2 = (e) => e.startsWith("onUpdate:"), i4 = Object.assign, i3 = (e, t) => {
	let r = e.indexOf(t);
	r > -1 && e.splice(r, 1);
}, i5 = Object.prototype.hasOwnProperty, i6 = (e, t) => i5.call(e, t), i9 = Array.isArray, i8 = (e) => "[object Map]" === oo(e), i7 = (e) => "function" == typeof e, oe = (e) => "string" == typeof e, ot = (e) => "symbol" == typeof e, on = (e) => null !== e && "object" == typeof e, or = (e) => (on(e) || i7(e)) && i7(e.then) && i7(e.catch), oi = Object.prototype.toString, oo = (e) => oi.call(e), oa = (e) => oe(e) && "NaN" !== e && "-" !== e[0] && "" + parseInt(e, 10) === e, ol = iZ(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), os = (e) => {
	let t = Object.create(null);
	return (r) => t[r] || (t[r] = e(r));
}, ou = /-\w/g, oc = os((e) => e.replace(ou, (e) => e.slice(1).toUpperCase())), of = /\B([A-Z])/g, od = os((e) => e.replace(of, "-$1").toLowerCase()), op = os((e) => e.charAt(0).toUpperCase() + e.slice(1)), oh = os((e) => e ? `on${op(e)}` : ""), om = (e, t) => !Object.is(e, t), og = (e, ...t) => {
	for (let r = 0; r < e.length; r++) e[r](...t);
}, oy = (e, t, r, i = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: i,
		value: r
	});
}, ov = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, ob = () => E || (E = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
function ox(e) {
	if (i9(e)) {
		let t = {};
		for (let r = 0; r < e.length; r++) {
			let i = e[r], o = oe(i) ? function(e) {
				let t = {};
				return e.replace(o_, "").split(ow).forEach((e) => {
					if (e) {
						let r = e.split(ok);
						r.length > 1 && (t[r[0].trim()] = r[1].trim());
					}
				}), t;
			}(i) : ox(i);
			if (o) for (let e in o) t[e] = o[e];
		}
		return t;
	}
	if (oe(e) || on(e)) return e;
}
var ow = /;(?![^(]*\))/g, ok = /:([^]+)/, o_ = /\/\*[^]*?\*\//g;
function oC(e) {
	let t = "";
	if (oe(e)) t = e;
	else if (i9(e)) for (let r = 0; r < e.length; r++) {
		let i = oC(e[r]);
		i && (t += i + " ");
	}
	else if (on(e)) for (let r in e) e[r] && (t += r + " ");
	return t.trim();
}
var oS = iZ("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"), oO = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = I, !e && I && (this.index = (I.scopes || (I.scopes = [])).push(this) - 1);
	}
	get active() {
		return this._active;
	}
	pause() {
		if (this._active) {
			let e, t;
			if (this._isPaused = !0, this.scopes) for (e = 0, t = this.scopes.length; e < t; e++) this.scopes[e].pause();
			for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].pause();
		}
	}
	resume() {
		if (this._active && this._isPaused) {
			let e, t;
			if (this._isPaused = !1, this.scopes) for (e = 0, t = this.scopes.length; e < t; e++) this.scopes[e].resume();
			for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].resume();
		}
	}
	run(e) {
		if (this._active) {
			let t = I;
			try {
				return I = this, e();
			} finally {
				I = t;
			}
		}
	}
	on() {
		1 == ++this._on && (this.prevScope = I, I = this);
	}
	off() {
		this._on > 0 && 0 == --this._on && (I = this.prevScope, this.prevScope = void 0);
	}
	stop(e) {
		if (this._active) {
			let t, r;
			for (t = 0, this._active = !1, r = this.effects.length; t < r; t++) this.effects[t].stop();
			for (t = 0, this.effects.length = 0, r = this.cleanups.length; t < r; t++) this.cleanups[t]();
			if (this.cleanups.length = 0, this.scopes) {
				for (t = 0, r = this.scopes.length; t < r; t++) this.scopes[t].stop(!0);
				this.scopes.length = 0;
			}
			if (!this.detached && this.parent && !e) {
				let e = this.parent.scopes.pop();
				e && e !== this && (this.parent.scopes[this.index] = e, e.index = this.index);
			}
			this.parent = void 0;
		}
	}
}, oA = /* @__PURE__ */ new WeakSet(), oP = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, I && I.active && I.effects.push(this);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		64 & this.flags && (this.flags &= -65, oA.has(this) && (oA.delete(this), this.trigger()));
	}
	notify() {
		(!(2 & this.flags) || 32 & this.flags) && (8 & this.flags || oT(this));
	}
	run() {
		if (!(1 & this.flags)) return this.fn();
		this.flags |= 2, oV(this), oI(this);
		let e = D, t = oR;
		D = this, oR = !0;
		try {
			return this.fn();
		} finally {
			oD(this), D = e, oR = t, this.flags &= -3;
		}
	}
	stop() {
		if (1 & this.flags) {
			for (let e = this.deps; e; e = e.nextDep) oL(e);
			this.deps = this.depsTail = void 0, oV(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		64 & this.flags ? oA.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		oj(this) && this.run();
	}
	get dirty() {
		return oj(this);
	}
}, oM = 0;
function oT(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = $, $ = e;
		return;
	}
	e.next = j, j = e;
}
function oE() {
	let e;
	if (!(--oM > 0)) {
		if ($) {
			let e = $;
			for ($ = void 0; e;) {
				let t = e.next;
				e.next = void 0, e.flags &= -9, e = t;
			}
		}
		for (; j;) {
			let t = j;
			for (j = void 0; t;) {
				let r = t.next;
				if (t.next = void 0, t.flags &= -9, 1 & t.flags) try {
					t.trigger();
				} catch (t) {
					e || (e = t);
				}
				t = r;
			}
		}
		if (e) throw e;
	}
}
function oI(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function oD(e) {
	let t, r = e.depsTail, i = r;
	for (; i;) {
		let e = i.prevDep;
		-1 === i.version ? (i === r && (r = e), oL(i), function(e) {
			let { prevDep: t, nextDep: r } = e;
			t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
		}(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = e;
	}
	e.deps = t, e.depsTail = r;
}
function oj(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (o$(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function o$(e) {
	if (4 & e.flags && !(16 & e.flags) || (e.flags &= -17, e.globalVersion === oB) || (e.globalVersion = oB, !e.isSSR && 128 & e.flags && (!e.deps && !e._dirty || !oj(e)))) return;
	e.flags |= 2;
	let t = e.dep, r = D, i = oR;
	D = e, oR = !0;
	try {
		oI(e);
		let r = e.fn(e._value);
		(0 === t.version || om(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		D = r, oR = i, oD(e), e.flags &= -3;
	}
}
function oL(e, t = !1) {
	let { dep: r, prevSub: i, nextSub: o } = e;
	if (i && (i.nextSub = o, e.prevSub = void 0), o && (o.prevSub = i, e.nextSub = void 0), r.subs === e && (r.subs = i, !i && r.computed)) {
		r.computed.flags &= -5;
		for (let e = r.computed.deps; e; e = e.nextDep) oL(e, !0);
	}
	t || --r.sc || !r.map || r.map.delete(r.key);
}
var oR = !0, oN = [];
function oF() {
	oN.push(oR), oR = !1;
}
function oz() {
	let e = oN.pop();
	oR = void 0 === e || e;
}
function oV(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = D;
		D = void 0;
		try {
			t();
		} finally {
			D = e;
		}
	}
}
var oB = 0, oH = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, oW = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!D || !oR || D === this.computed) return;
		let t = this.activeLink;
		if (void 0 === t || t.sub !== D) t = this.activeLink = new oH(D, this), D.deps ? (t.prevDep = D.depsTail, D.depsTail.nextDep = t, D.depsTail = t) : D.deps = D.depsTail = t, function e(t) {
			if (t.dep.sc++, 4 & t.sub.flags) {
				let r = t.dep.computed;
				if (r && !t.dep.subs) {
					r.flags |= 20;
					for (let t = r.deps; t; t = t.nextDep) e(t);
				}
				let i = t.dep.subs;
				i !== t && (t.prevSub = i, i && (i.nextSub = t)), t.dep.subs = t;
			}
		}(t);
		else if (-1 === t.version && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = D.depsTail, t.nextDep = void 0, D.depsTail.nextDep = t, D.depsTail = t, D.deps === t && (D.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, oB++, this.notify(e);
	}
	notify(e) {
		oM++;
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			oE();
		}
	}
}, oU = /* @__PURE__ */ new WeakMap(), oq = Symbol(""), oK = Symbol(""), oG = Symbol("");
function oJ(e, t, r) {
	if (oR && D) {
		let t = oU.get(e);
		t || oU.set(e, t = /* @__PURE__ */ new Map());
		let i = t.get(r);
		i || (t.set(r, i = new oW()), i.map = t, i.key = r), i.track();
	}
}
function oZ(e, t, r, i, o, a) {
	let l = oU.get(e);
	if (!l) return void oB++;
	let s = (e) => {
		e && e.trigger();
	};
	if (oM++, "clear" === t) l.forEach(s);
	else {
		let o = i9(e), a = o && oa(r);
		if (o && "length" === r) {
			let e = Number(i);
			l.forEach((t, r) => {
				("length" === r || r === oG || !ot(r) && r >= e) && s(t);
			});
		} else switch ((void 0 !== r || l.has(void 0)) && s(l.get(r)), a && s(l.get(oG)), t) {
			case "add":
				o ? a && s(l.get("length")) : (s(l.get(oq)), i8(e) && s(l.get(oK)));
				break;
			case "delete":
				!o && (s(l.get(oq)), i8(e) && s(l.get(oK)));
				break;
			case "set": i8(e) && s(l.get(oq));
		}
	}
	oE();
}
function oX(e) {
	let t = aC(e);
	return t === e ? t : (oJ(t, "iterate", oG), ak(e) ? t : t.map(aS));
}
function oY(e) {
	return oJ(e = aC(e), "iterate", oG), e;
}
var oQ = {
	__proto__: null,
	[Symbol.iterator]() {
		return o0(this, Symbol.iterator, aS);
	},
	concat(...e) {
		return oX(this).concat(...e.map((e) => i9(e) ? oX(e) : e));
	},
	entries() {
		return o0(this, "entries", (e) => (e[1] = aS(e[1]), e));
	},
	every(e, t) {
		return o2(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return o2(this, "filter", e, t, (e) => e.map(aS), arguments);
	},
	find(e, t) {
		return o2(this, "find", e, t, aS, arguments);
	},
	findIndex(e, t) {
		return o2(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return o2(this, "findLast", e, t, aS, arguments);
	},
	findLastIndex(e, t) {
		return o2(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return o2(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return o3(this, "includes", e);
	},
	indexOf(...e) {
		return o3(this, "indexOf", e);
	},
	join(e) {
		return oX(this).join(e);
	},
	lastIndexOf(...e) {
		return o3(this, "lastIndexOf", e);
	},
	map(e, t) {
		return o2(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return o5(this, "pop");
	},
	push(...e) {
		return o5(this, "push", e);
	},
	reduce(e, ...t) {
		return o4(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return o4(this, "reduceRight", e, t);
	},
	shift() {
		return o5(this, "shift");
	},
	some(e, t) {
		return o2(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return o5(this, "splice", e);
	},
	toReversed() {
		return oX(this).toReversed();
	},
	toSorted(e) {
		return oX(this).toSorted(e);
	},
	toSpliced(...e) {
		return oX(this).toSpliced(...e);
	},
	unshift(...e) {
		return o5(this, "unshift", e);
	},
	values() {
		return o0(this, "values", aS);
	}
};
function o0(e, t, r) {
	let i = oY(e), o = i[t]();
	return i === e || ak(e) || (o._next = o.next, o.next = () => {
		let e = o._next();
		return e.done || (e.value = r(e.value)), e;
	}), o;
}
var o1 = Array.prototype;
function o2(e, t, r, i, o, a) {
	let l = oY(e), s = l !== e && !ak(e), u = l[t];
	if (u !== o1[t]) {
		let t = u.apply(e, a);
		return s ? aS(t) : t;
	}
	let c = r;
	l !== e && (s ? c = function(t, i) {
		return r.call(this, aS(t), i, e);
	} : r.length > 2 && (c = function(t, i) {
		return r.call(this, t, i, e);
	}));
	let f = u.call(l, c, i);
	return s && o ? o(f) : f;
}
function o4(e, t, r, i) {
	let o = oY(e), a = r;
	return o !== e && (ak(e) ? r.length > 3 && (a = function(t, i, o) {
		return r.call(this, t, i, o, e);
	}) : a = function(t, i, o) {
		return r.call(this, t, aS(i), o, e);
	}), o[t](a, ...i);
}
function o3(e, t, r) {
	let i = aC(e);
	oJ(i, "iterate", oG);
	let o = i[t](...r);
	return (-1 === o || !1 === o) && a_(r[0]) ? (r[0] = aC(r[0]), i[t](...r)) : o;
}
function o5(e, t, r = []) {
	oF(), oM++;
	let i = aC(e)[t].apply(e, r);
	return oE(), oz(), i;
}
var o6 = iZ("__proto__,__v_isRef,__isVue"), o9 = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => "arguments" !== e && "caller" !== e).map((e) => Symbol[e]).filter(ot));
function o8(e) {
	ot(e) || (e = String(e));
	let t = aC(this);
	return oJ(t, "has", e), t.hasOwnProperty(e);
}
var o7 = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, r) {
		if ("__v_skip" === t) return e.__v_skip;
		let i = this._isReadonly, o = this._isShallow;
		if ("__v_isReactive" === t) return !i;
		if ("__v_isReadonly" === t) return i;
		if ("__v_isShallow" === t) return o;
		if ("__v_raw" === t) return r === (i ? o ? am : ah : o ? ap : ad).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(r) ? e : void 0;
		let a = i9(e);
		if (!i) {
			let e;
			if (a && (e = oQ[t])) return e;
			if ("hasOwnProperty" === t) return o8;
		}
		let l = Reflect.get(e, t, aA(e) ? e : r);
		if ((ot(t) ? o9.has(t) : o6(t)) || (i || oJ(e, "get", t), o)) return l;
		if (aA(l)) {
			let e = a && oa(t) ? l : l.value;
			return i && on(e) ? av(e) : e;
		}
		return on(l) ? i ? av(l) : ag(l) : l;
	}
}, ae = class extends o7 {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, r, i) {
		let o = e[t];
		if (!this._isShallow) {
			let t = aw(o);
			if (ak(r) || aw(r) || (o = aC(o), r = aC(r)), !i9(e) && aA(o) && !aA(r)) if (t) return !0;
			else return o.value = r, !0;
		}
		let a = i9(e) && oa(t) ? Number(t) < e.length : i6(e, t), l = Reflect.set(e, t, r, aA(e) ? e : i);
		return e === aC(i) && (a ? om(r, o) && oZ(e, "set", t, r, o) : oZ(e, "add", t, r)), l;
	}
	deleteProperty(e, t) {
		let r = i6(e, t), i = e[t], o = Reflect.deleteProperty(e, t);
		return o && r && oZ(e, "delete", t, void 0, i), o;
	}
	has(e, t) {
		let r = Reflect.has(e, t);
		return ot(t) && o9.has(t) || oJ(e, "has", t), r;
	}
	ownKeys(e) {
		return oJ(e, "iterate", i9(e) ? "length" : oq), Reflect.ownKeys(e);
	}
}, at = class extends o7 {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, an = new ae(), ar = new at(), ai = new ae(!0), ao = (e) => e, aa = (e) => Reflect.getPrototypeOf(e);
function al(e) {
	return function() {
		return "delete" !== e && ("clear" === e ? void 0 : this);
	};
}
function as(e, t) {
	let r = function(e, t) {
		let r = {
			get(r) {
				let i = this.__v_raw, o = aC(i), a = aC(r);
				e || (om(r, a) && oJ(o, "get", r), oJ(o, "get", a));
				let { has: l } = aa(o), s = t ? ao : e ? aO : aS;
				return l.call(o, r) ? s(i.get(r)) : l.call(o, a) ? s(i.get(a)) : void (i !== o && i.get(r));
			},
			get size() {
				let t = this.__v_raw;
				return e || oJ(aC(t), "iterate", oq), t.size;
			},
			has(t) {
				let r = this.__v_raw, i = aC(r), o = aC(t);
				return e || (om(t, o) && oJ(i, "has", t), oJ(i, "has", o)), t === o ? r.has(t) : r.has(t) || r.has(o);
			},
			forEach(r, i) {
				let o = this, a = o.__v_raw, l = aC(a), s = t ? ao : e ? aO : aS;
				return e || oJ(l, "iterate", oq), a.forEach((e, t) => r.call(i, s(e), s(t), o));
			}
		};
		return i4(r, e ? {
			add: al("add"),
			set: al("set"),
			delete: al("delete"),
			clear: al("clear")
		} : {
			add(e) {
				t || ak(e) || aw(e) || (e = aC(e));
				let r = aC(this);
				return aa(r).has.call(r, e) || (r.add(e), oZ(r, "add", e, e)), this;
			},
			set(e, r) {
				t || ak(r) || aw(r) || (r = aC(r));
				let i = aC(this), { has: o, get: a } = aa(i), l = o.call(i, e);
				l || (e = aC(e), l = o.call(i, e));
				let s = a.call(i, e);
				return i.set(e, r), l ? om(r, s) && oZ(i, "set", e, r, s) : oZ(i, "add", e, r), this;
			},
			delete(e) {
				let t = aC(this), { has: r, get: i } = aa(t), o = r.call(t, e);
				o || (e = aC(e), o = r.call(t, e));
				let a = i ? i.call(t, e) : void 0, l = t.delete(e);
				return o && oZ(t, "delete", e, void 0, a), l;
			},
			clear() {
				let e = aC(this), t = 0 !== e.size, r = e.clear();
				return t && oZ(e, "clear", void 0, void 0, void 0), r;
			}
		}), [
			"keys",
			"values",
			"entries",
			Symbol.iterator
		].forEach((i) => {
			r[i] = function(...r) {
				let o = this.__v_raw, a = aC(o), l = i8(a), s = "entries" === i || i === Symbol.iterator && l, u = o[i](...r), c = t ? ao : e ? aO : aS;
				return e || oJ(a, "iterate", "keys" === i && l ? oK : oq), {
					next() {
						let { value: e, done: t } = u.next();
						return t ? {
							value: e,
							done: t
						} : {
							value: s ? [c(e[0]), c(e[1])] : c(e),
							done: t
						};
					},
					[Symbol.iterator]() {
						return this;
					}
				};
			};
		}), r;
	}(e, t);
	return (t, i, o) => "__v_isReactive" === i ? !e : "__v_isReadonly" === i ? e : "__v_raw" === i ? t : Reflect.get(i6(r, i) && i in t ? r : t, i, o);
}
var au = { get: as(!1, !1) }, ac = { get: as(!1, !0) }, af = { get: as(!0, !1) }, ad = /* @__PURE__ */ new WeakMap(), ap = /* @__PURE__ */ new WeakMap(), ah = /* @__PURE__ */ new WeakMap(), am = /* @__PURE__ */ new WeakMap();
function ag(e) {
	return aw(e) ? e : ab(e, !1, an, au, ad);
}
function ay(e) {
	return ab(e, !1, ai, ac, ap);
}
function av(e) {
	return ab(e, !0, ar, af, ah);
}
function ab(e, t, r, i, o) {
	var a;
	if (!on(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
	let l = (a = e).__v_skip || !Object.isExtensible(a) ? 0 : function(e) {
		switch (e) {
			case "Object":
			case "Array": return 1;
			case "Map":
			case "Set":
			case "WeakMap":
			case "WeakSet": return 2;
			default: return 0;
		}
	}(oo(a).slice(8, -1));
	if (0 === l) return e;
	let s = o.get(e);
	if (s) return s;
	let u = new Proxy(e, 2 === l ? i : r);
	return o.set(e, u), u;
}
function ax(e) {
	return aw(e) ? ax(e.__v_raw) : !!(e && e.__v_isReactive);
}
function aw(e) {
	return !!(e && e.__v_isReadonly);
}
function ak(e) {
	return !!(e && e.__v_isShallow);
}
function a_(e) {
	return !!e && !!e.__v_raw;
}
function aC(e) {
	let t = e && e.__v_raw;
	return t ? aC(t) : e;
}
var aS = (e) => on(e) ? ag(e) : e, aO = (e) => on(e) ? av(e) : e;
function aA(e) {
	return !!e && !0 === e.__v_isRef;
}
function aP(e) {
	return aM(e, !1);
}
function aM(e, t) {
	return aA(e) ? e : new aT(e, t);
}
var aT = class {
	constructor(e, t) {
		this.dep = new oW(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : aC(e), this._value = t ? e : aS(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, r = this.__v_isShallow || ak(e) || aw(e);
		om(e = r ? e : aC(e), t) && (this._rawValue = e, this._value = r ? e : aS(e), this.dep.trigger());
	}
};
function aE(e) {
	return aA(e) ? e.value : e;
}
var aI = {
	get: (e, t, r) => "__v_raw" === t ? e : aE(Reflect.get(e, t, r)),
	set: (e, t, r, i) => {
		let o = e[t];
		return aA(o) && !aA(r) ? (o.value = r, !0) : Reflect.set(e, t, r, i);
	}
};
function aD(e) {
	return ax(e) ? e : new Proxy(e, aI);
}
var aj = class {
	constructor(e) {
		this.__v_isRef = !0, this._value = void 0;
		let t = this.dep = new oW(), { get: r, set: i } = e(t.track.bind(t), t.trigger.bind(t));
		this._get = r, this._set = i;
	}
	get value() {
		return this._value = this._get();
	}
	set value(e) {
		this._set(e);
	}
}, a$ = class {
	constructor(e, t, r) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new oW(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = oB - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = r;
	}
	notify() {
		if (this.flags |= 16, !(8 & this.flags) && D !== this) return oT(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return o$(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
}, aL = {}, aR = /* @__PURE__ */ new WeakMap(), aN = void 0;
function aF(e, t = Infinity, r) {
	if (t <= 0 || !on(e) || e.__v_skip || ((r = r || /* @__PURE__ */ new Map()).get(e) || 0) >= t) return e;
	if (r.set(e, t), t--, aA(e)) aF(e.value, t, r);
	else if (i9(e)) for (let i = 0; i < e.length; i++) aF(e[i], t, r);
	else if ("[object Set]" === oo(e) || i8(e)) e.forEach((e) => {
		aF(e, t, r);
	});
	else if ("[object Object]" === oo(e)) {
		for (let i in e) aF(e[i], t, r);
		for (let i of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, i) && aF(e[i], t, r);
	}
	return e;
}
function az(e, t, r, i) {
	try {
		return i ? e(...i) : e();
	} catch (e) {
		aB(e, t, r);
	}
}
function aV(e, t, r, i) {
	if (i7(e)) {
		let o = az(e, t, r, i);
		return o && or(o) && o.catch((e) => {
			aB(e, t, r);
		}), o;
	}
	if (i9(e)) {
		let o = [];
		for (let a = 0; a < e.length; a++) o.push(aV(e[a], t, r, i));
		return o;
	}
}
function aB(e, t, r, i = !0) {
	t && t.vnode;
	let { errorHandler: a, throwUnhandledErrorInProduction: l } = t && t.appContext.config || iX;
	if (t) {
		let i = t.parent, o = t.proxy, l = `https://vuejs.org/error-reference/#runtime-${r}`;
		for (; i;) {
			let t = i.ec;
			if (t) {
				for (let r = 0; r < t.length; r++) if (!1 === t[r](e, o, l)) return;
			}
			i = i.parent;
		}
		if (a) {
			oF(), az(a, null, 10, [
				e,
				o,
				l
			]), oz();
			return;
		}
	}
	(function(e, t, r, i = !0, o = !1) {
		if (o) throw e;
		console.error(e);
	})(e, 0, 0, i, l);
}
var aH = [], aW = -1, aU = [], aq = null, aK = 0, aG = Promise.resolve(), aJ = null;
function aZ(e) {
	let t = aJ || aG;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function aX(e) {
	if (!(1 & e.flags)) {
		let t = a1(e), r = aH[aH.length - 1];
		!r || !(2 & e.flags) && t >= a1(r) ? aH.push(e) : aH.splice(function(e) {
			let t = aW + 1, r = aH.length;
			for (; t < r;) {
				let i = t + r >>> 1, o = aH[i], a = a1(o);
				a < e || a === e && 2 & o.flags ? t = i + 1 : r = i;
			}
			return t;
		}(t), 0, e), e.flags |= 1, aY();
	}
}
function aY() {
	aJ || (aJ = aG.then(function e(t) {
		try {
			for (aW = 0; aW < aH.length; aW++) {
				let e = aH[aW];
				e && !(8 & e.flags) && (4 & e.flags && (e.flags &= -2), az(e, e.i, e.i ? 15 : 14), 4 & e.flags || (e.flags &= -2));
			}
		} finally {
			for (; aW < aH.length; aW++) {
				let e = aH[aW];
				e && (e.flags &= -2);
			}
			aW = -1, aH.length = 0, a0(t), aJ = null, (aH.length || aU.length) && e(t);
		}
	}));
}
function aQ(e, t, r = aW + 1) {
	for (; r < aH.length; r++) {
		let t = aH[r];
		if (t && 2 & t.flags) {
			if (e && t.id !== e.uid) continue;
			aH.splice(r, 1), r--, 4 & t.flags && (t.flags &= -2), t(), 4 & t.flags || (t.flags &= -2);
		}
	}
}
function a0(e) {
	if (aU.length) {
		let e = [...new Set(aU)].sort((e, t) => a1(e) - a1(t));
		if (aU.length = 0, aq) return void aq.push(...e);
		for (aK = 0, aq = e; aK < aq.length; aK++) {
			let e = aq[aK];
			4 & e.flags && (e.flags &= -2), 8 & e.flags || e(), e.flags &= -2;
		}
		aq = null, aK = 0;
	}
}
var a1 = (e) => null == e.id ? 2 & e.flags ? -1 : Infinity : e.id, a2 = null, a4 = null;
function a3(e) {
	let t = a2;
	return a2 = e, a4 = e && e.type.__scopeId || null, t;
}
function a5(e, t, r, i) {
	let o = e.dirs, a = t && t.dirs;
	for (let l = 0; l < o.length; l++) {
		let s = o[l];
		a && (s.oldValue = a[l].value);
		let u = s.dir[i];
		u && (oF(), aV(u, r, 8, [
			e.el,
			s,
			e,
			t
		]), oz());
	}
}
var a6 = Symbol("_vte"), a9 = (e) => e && (e.disabled || "" === e.disabled), a8 = (e) => e && (e.defer || "" === e.defer), a7 = (e) => "undefined" != typeof SVGElement && e instanceof SVGElement, le = (e) => "function" == typeof MathMLElement && e instanceof MathMLElement, lt = (e, t) => {
	let r = e && e.to;
	return oe(r) ? t ? t(r) : null : r;
}, ln = {
	name: "Teleport",
	__isTeleport: !0,
	process(e, t, r, i, o, a, l, s, u, c) {
		let { mc: f, pc: d, pbc: p, o: { insert: h, querySelector: m, createText: g, createComment: y } } = c, b = a9(t.props), { shapeFlag: x, children: w, dynamicChildren: k } = t;
		if (null == e) {
			let e = t.el = g(""), c = t.anchor = g("");
			h(e, r, i), h(c, r, i);
			let d = (e, t) => {
				16 & x && f(w, e, t, o, a, l, s, u);
			}, p = () => {
				let e = t.target = lt(t.props, m), r = lo(e, t, g, h);
				e && ("svg" !== l && a7(e) ? l = "svg" : "mathml" !== l && le(e) && (l = "mathml"), o && o.isCE && (o.ce._teleportTargets || (o.ce._teleportTargets = /* @__PURE__ */ new Set())).add(e), b || (d(e, r), li(t, !1)));
			};
			b && (d(r, c), li(t, !0)), a8(t.props) ? (t.el.__isMounted = !1, sc(() => {
				p(), delete t.el.__isMounted;
			}, a)) : p();
		} else {
			if (a8(t.props) && !1 === e.el.__isMounted) return void sc(() => {
				ln.process(e, t, r, i, o, a, l, s, u, c);
			}, a);
			t.el = e.el, t.targetStart = e.targetStart;
			let f = t.anchor = e.anchor, h = t.target = e.target, g = t.targetAnchor = e.targetAnchor, y = a9(e.props), x = y ? r : h, w = y ? f : g;
			if ("svg" === l || a7(h) ? l = "svg" : ("mathml" === l || le(h)) && (l = "mathml"), k ? (p(e.dynamicChildren, k, x, o, a, l, s), sp(e, t, !0)) : u || d(e, t, x, w, o, a, l, s, !1), b) y ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : lr(t, r, f, c, 1);
			else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
				let e = t.target = lt(t.props, m);
				e && lr(t, e, null, c, 0);
			} else y && lr(t, h, g, c, 1);
			li(t, b);
		}
	},
	remove(e, t, r, { um: i, o: { remove: o } }, a) {
		let { shapeFlag: l, children: s, anchor: u, targetStart: c, targetAnchor: f, target: d, props: p } = e;
		if (d && (o(c), o(f)), a && o(u), 16 & l) {
			let e = a || !a9(p);
			for (let o = 0; o < s.length; o++) {
				let a = s[o];
				i(a, t, r, e, !!a.dynamicChildren);
			}
		}
	},
	move: lr,
	hydrate: function(e, t, r, i, o, a, { o: { nextSibling: l, parentNode: s, querySelector: u, insert: c, createText: f } }, d) {
		function p(e, t, u, c) {
			t.anchor = d(l(e), t, s(e), r, i, o, a), t.targetStart = u, t.targetAnchor = c;
		}
		let h = t.target = lt(t.props, u), m = a9(t.props);
		if (h) {
			let s = h._lpa || h.firstChild;
			if (16 & t.shapeFlag) if (m) p(e, t, s, s && l(s));
			else {
				t.anchor = l(e);
				let u = s;
				for (; u;) {
					if (u && 8 === u.nodeType) {
						if ("teleport start anchor" === u.data) t.targetStart = u;
						else if ("teleport anchor" === u.data) {
							t.targetAnchor = u, h._lpa = t.targetAnchor && l(t.targetAnchor);
							break;
						}
					}
					u = l(u);
				}
				t.targetAnchor || lo(h, t, f, c), d(s && l(s), t, h, r, i, o, a);
			}
			li(t, m);
		} else m && 16 & t.shapeFlag && p(e, t, e, l(e));
		return t.anchor && l(t.anchor);
	}
};
function lr(e, t, r, { o: { insert: i }, m: o }, a = 2) {
	0 === a && i(e.targetAnchor, t, r);
	let { el: l, anchor: s, shapeFlag: u, children: c, props: f } = e, d = 2 === a;
	if (d && i(l, t, r), (!d || a9(f)) && 16 & u) for (let e = 0; e < c.length; e++) o(c[e], t, r, 2);
	d && i(s, t, r);
}
function li(e, t) {
	let r = e.ctx;
	if (r && r.ut) {
		let i, o;
		for (t ? (i = e.el, o = e.anchor) : (i = e.targetStart, o = e.targetAnchor); i && i !== o;) 1 === i.nodeType && i.setAttribute("data-v-owner", r.uid), i = i.nextSibling;
		r.ut();
	}
}
function lo(e, t, r, i) {
	let o = t.targetStart = r(""), a = t.targetAnchor = r("");
	return o[a6] = a, e && (i(o, e), i(a, e)), a;
}
var la = Symbol("_leaveCb"), ll = Symbol("_enterCb"), ls = [Function, Array], lu = {
	mode: String,
	appear: Boolean,
	persisted: Boolean,
	onBeforeEnter: ls,
	onEnter: ls,
	onAfterEnter: ls,
	onEnterCancelled: ls,
	onBeforeLeave: ls,
	onLeave: ls,
	onAfterLeave: ls,
	onLeaveCancelled: ls,
	onBeforeAppear: ls,
	onAppear: ls,
	onAfterAppear: ls,
	onAppearCancelled: ls
}, lc = (e) => {
	let t = e.subTree;
	return t.component ? lc(t.component) : t;
};
function lf(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let r of e) if (r.type !== sP) {
			t = r;
			break;
		}
	}
	return t;
}
var ld = {
	name: "BaseTransition",
	props: lu,
	setup(e, { slots: t }) {
		let r = sq(), i = function() {
			let e = {
				isMounted: !1,
				isLeaving: !1,
				isUnmounting: !1,
				leavingVNodes: /* @__PURE__ */ new Map()
			};
			return lE(() => {
				e.isMounted = !0;
			}), lj(() => {
				e.isUnmounting = !0;
			}), e;
		}();
		return () => {
			let o = t.default && function e(t, r = !1, i) {
				let o = [], a = 0;
				for (let l = 0; l < t.length; l++) {
					let s = t[l], u = null == i ? s.key : String(i) + String(null != s.key ? s.key : l);
					s.type === sO ? (128 & s.patchFlag && a++, o = o.concat(e(s.children, r, u))) : (r || s.type !== sP) && o.push(null != u ? sN(s, { key: u }) : s);
				}
				if (a > 1) for (let e = 0; e < o.length; e++) o[e].patchFlag = -2;
				return o;
			}(t.default(), !0);
			if (!o || !o.length) return;
			let a = lf(o), l = aC(e), { mode: s } = l;
			if (i.isLeaving) return lm(a);
			let u = lg(a);
			if (!u) return lm(a);
			let c = lh(u, l, i, r, (e) => c = e);
			u.type !== sP && ly(u, c);
			let f = r.subTree && lg(r.subTree);
			if (f && f.type !== sP && !sj(f, u) && lc(r).type !== sP) {
				let e = lh(f, l, i, r);
				if (ly(f, e), "out-in" === s && u.type !== sP) return i.isLeaving = !0, e.afterLeave = () => {
					i.isLeaving = !1, 8 & r.job.flags || r.update(), delete e.afterLeave, f = void 0;
				}, lm(a);
				"in-out" === s && u.type !== sP ? e.delayLeave = (e, t, r) => {
					lp(i, f)[String(f.key)] = f, e[la] = () => {
						t(), e[la] = void 0, delete c.delayedLeave, f = void 0;
					}, c.delayedLeave = () => {
						r(), delete c.delayedLeave, f = void 0;
					};
				} : f = void 0;
			} else f && (f = void 0);
			return a;
		};
	}
};
function lp(e, t) {
	let { leavingVNodes: r } = e, i = r.get(t.type);
	return i || (i = Object.create(null), r.set(t.type, i)), i;
}
function lh(e, t, r, i, o) {
	let { appear: a, mode: l, persisted: s = !1, onBeforeEnter: u, onEnter: c, onAfterEnter: f, onEnterCancelled: d, onBeforeLeave: p, onLeave: h, onAfterLeave: m, onLeaveCancelled: g, onBeforeAppear: y, onAppear: b, onAfterAppear: x, onAppearCancelled: w } = t, k = String(e.key), _ = lp(r, e), C = (e, t) => {
		e && aV(e, i, 9, t);
	}, S = (e, t) => {
		let r = t[1];
		C(e, t), i9(e) ? e.every((e) => e.length <= 1) && r() : e.length <= 1 && r();
	}, O = {
		mode: l,
		persisted: s,
		beforeEnter(t) {
			let i = u;
			if (!r.isMounted) if (!a) return;
			else i = y || u;
			t[la] && t[la](!0);
			let o = _[k];
			o && sj(e, o) && o.el[la] && o.el[la](), C(i, [t]);
		},
		enter(e) {
			let t = c, i = f, o = d;
			if (!r.isMounted) if (!a) return;
			else t = b || c, i = x || f, o = w || d;
			let l = !1, s = e[ll] = (t) => {
				l || (l = !0, t ? C(o, [e]) : C(i, [e]), O.delayedLeave && O.delayedLeave(), e[ll] = void 0);
			};
			t ? S(t, [e, s]) : s();
		},
		leave(t, i) {
			let o = String(e.key);
			if (t[ll] && t[ll](!0), r.isUnmounting) return i();
			C(p, [t]);
			let a = !1, l = t[la] = (r) => {
				a || (a = !0, i(), r ? C(g, [t]) : C(m, [t]), t[la] = void 0, _[o] === e && delete _[o]);
			};
			_[o] = e, h ? S(h, [t, l]) : l();
		},
		clone(e) {
			let a = lh(e, t, r, i, o);
			return o && o(a), a;
		}
	};
	return O;
}
function lm(e) {
	if (lC(e)) return (e = sN(e)).children = null, e;
}
function lg(e) {
	if (!lC(e)) return e.type.__isTeleport && e.children ? lf(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: r } = e;
	if (r) {
		if (16 & t) return r[0];
		if (32 & t && i7(r.default)) return r.default();
	}
}
function ly(e, t) {
	6 & e.shapeFlag && e.component ? (e.transition = t, ly(e.component.subTree, t)) : 128 & e.shapeFlag ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function lv(e, t) {
	return i7(e) ? i4({ name: e.name }, t, { setup: e }) : e;
}
function lb(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
var lx = /* @__PURE__ */ new WeakMap();
function lw(e, t, r, i, o = !1) {
	if (i9(e)) return void e.forEach((e, a) => lw(e, t && (i9(t) ? t[a] : t), r, i, o));
	if (l_(i) && !o) {
		512 & i.shapeFlag && i.type.__asyncResolved && i.component.subTree.component && lw(e, t, r, i.component.subTree);
		return;
	}
	let a = 4 & i.shapeFlag ? s0(i.component) : i.el, l = o ? null : a, { i: s, r: u } = e, c = t && t.r, f = s.refs === iX ? s.refs = {} : s.refs, d = s.setupState, p = aC(d), h = d === iX ? i0 : (e) => i6(p, e);
	if (null != c && c !== u && ((lk(t), oe(c)) ? (f[c] = null, h(c) && (d[c] = null)) : aA(c) && (c.value = null, t.k && (f[t.k] = null))), i7(u)) az(u, s, 12, [l, f]);
	else {
		let t = oe(u), i = aA(u);
		if (t || i) {
			let s = () => {
				if (e.f) {
					let r = t ? h(u) ? d[u] : f[u] : u.value;
					if (o) i9(r) && i3(r, a);
					else if (i9(r)) r.includes(a) || r.push(a);
					else if (t) f[u] = [a], h(u) && (d[u] = f[u]);
					else {
						let t = [a];
						u.value = t, e.k && (f[e.k] = t);
					}
				} else t ? (f[u] = l, h(u) && (d[u] = l)) : i && (u.value = l, e.k && (f[e.k] = l));
			};
			if (l) {
				let t = () => {
					s(), lx.delete(e);
				};
				t.id = -1, lx.set(e, t), sc(t, r);
			} else lk(e), s();
		}
	}
}
function lk(e) {
	let t = lx.get(e);
	t && (t.flags |= 8, lx.delete(e));
}
ob().requestIdleCallback, ob().cancelIdleCallback;
var l_ = (e) => !!e.type.__asyncLoader, lC = (e) => e.type.__isKeepAlive;
function lS(e, t) {
	lA(e, "a", t);
}
function lO(e, t) {
	lA(e, "da", t);
}
function lA(e, t, r = sU) {
	let i = e.__wdc || (e.__wdc = () => {
		let t = r;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	});
	if (lP(t, i, r), r) {
		let e = r.parent;
		for (; e && e.parent;) lC(e.parent.vnode) && function(e, t, r, i) {
			let o = lP(t, e, i, !0);
			l$(() => {
				i3(i[t], o);
			}, r);
		}(i, t, r, e), e = e.parent;
	}
}
function lP(e, t, r = sU, i = !1) {
	if (r) {
		let o = r[e] || (r[e] = []), a = t.__weh || (t.__weh = (...i) => {
			oF();
			let o = sK(r), a = aV(t, r, e, i);
			return o(), oz(), a;
		});
		return i ? o.unshift(a) : o.push(a), a;
	}
}
var lM = (e) => (t, r = sU) => {
	sZ && "sp" !== e || lP(e, (...e) => t(...e), r);
}, lT = lM("bm"), lE = lM("m"), lI = lM("bu"), lD = lM("u"), lj = lM("bum"), l$ = lM("um"), lL = lM("sp"), lR = lM("rtg"), lN = lM("rtc");
function lF(e, t = sU) {
	lP("ec", e, t);
}
var lz = Symbol.for("v-ndc"), lV = (e) => e ? sJ(e) ? s0(e) : lV(e.parent) : null, lB = i4(Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => lV(e.parent),
	$root: (e) => lV(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => lG(e),
	$forceUpdate: (e) => e.f || (e.f = () => {
		aX(e.update);
	}),
	$nextTick: (e) => e.n || (e.n = aZ.bind(e.proxy)),
	$watch: (e) => sy.bind(e)
}), lH = (e, t) => e !== iX && !e.__isScriptSetup && i6(e, t), lW = {
	get({ _: e }, t) {
		let r, i, o;
		if ("__v_skip" === t) return !0;
		let { ctx: a, setupState: l, data: s, props: u, accessCache: c, type: f, appContext: d } = e;
		if ("$" !== t[0]) {
			let i = c[t];
			if (void 0 !== i) switch (i) {
				case 1: return l[t];
				case 2: return s[t];
				case 4: return a[t];
				case 3: return u[t];
			}
			else {
				if (lH(l, t)) return c[t] = 1, l[t];
				if (s !== iX && i6(s, t)) return c[t] = 2, s[t];
				if ((r = e.propsOptions[0]) && i6(r, t)) return c[t] = 3, u[t];
				if (a !== iX && i6(a, t)) return c[t] = 4, a[t];
				lq && (c[t] = 0);
			}
		}
		let p = lB[t];
		return p ? ("$attrs" === t && oJ(e.attrs, "get", ""), p(e)) : (i = f.__cssModules) && (i = i[t]) ? i : a !== iX && i6(a, t) ? (c[t] = 4, a[t]) : i6(o = d.config.globalProperties, t) ? o[t] : void 0;
	},
	set({ _: e }, t, r) {
		let { data: i, setupState: o, ctx: a } = e;
		return lH(o, t) ? (o[t] = r, !0) : i !== iX && i6(i, t) ? (i[t] = r, !0) : !i6(e.props, t) && !("$" === t[0] && t.slice(1) in e) && (a[t] = r, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: r, ctx: i, appContext: o, propsOptions: a, type: l } }, s) {
		let u, c;
		return !!(r[s] || e !== iX && "$" !== s[0] && i6(e, s) || lH(t, s) || (u = a[0]) && i6(u, s) || i6(i, s) || i6(lB, s) || i6(o.config.globalProperties, s) || (c = l.__cssModules) && c[s]);
	},
	defineProperty(e, t, r) {
		return null != r.get ? e._.accessCache[t] = 0 : i6(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
	}
};
function lU(e) {
	return i9(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var lq = !0;
function lK(e, t, r) {
	aV(i9(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, r);
}
function lG(e) {
	let t, r = e.type, { mixins: i, extends: o } = r, { mixins: a, optionsCache: l, config: { optionMergeStrategies: s } } = e.appContext, u = l.get(r);
	return u ? t = u : a.length || i || o ? (t = {}, a.length && a.forEach((e) => lJ(t, e, s, !0)), lJ(t, r, s)) : t = r, on(r) && l.set(r, t), t;
}
function lJ(e, t, r, i = !1) {
	let { mixins: o, extends: a } = t;
	for (let l in a && lJ(e, a, r, !0), o && o.forEach((t) => lJ(e, t, r, !0)), t) if (i && "expose" === l);
	else {
		let i = lZ[l] || r && r[l];
		e[l] = i ? i(e[l], t[l]) : t[l];
	}
	return e;
}
var lZ = {
	data: lX,
	props: l1,
	emits: l1,
	methods: l0,
	computed: l0,
	beforeCreate: lQ,
	created: lQ,
	beforeMount: lQ,
	mounted: lQ,
	beforeUpdate: lQ,
	updated: lQ,
	beforeDestroy: lQ,
	beforeUnmount: lQ,
	destroyed: lQ,
	unmounted: lQ,
	activated: lQ,
	deactivated: lQ,
	errorCaptured: lQ,
	serverPrefetch: lQ,
	components: l0,
	directives: l0,
	watch: function(e, t) {
		if (!e) return t;
		if (!t) return e;
		let r = i4(Object.create(null), e);
		for (let i in t) r[i] = lQ(e[i], t[i]);
		return r;
	},
	provide: lX,
	inject: function(e, t) {
		return l0(lY(e), lY(t));
	}
};
function lX(e, t) {
	return t ? e ? function() {
		return i4(i7(e) ? e.call(this, this) : e, i7(t) ? t.call(this, this) : t);
	} : t : e;
}
function lY(e) {
	if (i9(e)) {
		let t = {};
		for (let r = 0; r < e.length; r++) t[e[r]] = e[r];
		return t;
	}
	return e;
}
function lQ(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function l0(e, t) {
	return e ? i4(Object.create(null), e, t) : t;
}
function l1(e, t) {
	return e ? i9(e) && i9(t) ? [...new Set([...e, ...t])] : i4(Object.create(null), lU(e), lU(null != t ? t : {})) : t;
}
function l2() {
	return {
		app: null,
		config: {
			isNativeTag: i0,
			performance: !1,
			globalProperties: {},
			optionMergeStrategies: {},
			errorHandler: void 0,
			warnHandler: void 0,
			compilerOptions: {}
		},
		mixins: [],
		components: {},
		directives: {},
		provides: Object.create(null),
		optionsCache: /* @__PURE__ */ new WeakMap(),
		propsCache: /* @__PURE__ */ new WeakMap(),
		emitsCache: /* @__PURE__ */ new WeakMap()
	};
}
var l4 = 0, l3 = null;
function l5(e, t) {
	if (sU) {
		let r = sU.provides, i = sU.parent && sU.parent.provides;
		i === r && (r = sU.provides = Object.create(i)), r[e] = t;
	}
}
function l6(e, t, r = !1) {
	let i = sq();
	if (i || l3) {
		let o = l3 ? l3._context.provides : i ? null == i.parent || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
		if (o && e in o) return o[e];
		if (arguments.length > 1) return r && i7(t) ? t.call(i && i.proxy) : t;
	}
}
var l9 = {}, l8 = () => Object.create(l9), l7 = (e) => Object.getPrototypeOf(e) === l9;
function se(e, t, r, i) {
	let o, [a, l] = e.propsOptions, s = !1;
	if (t) for (let u in t) {
		let c;
		if (ol(u)) continue;
		let f = t[u];
		a && i6(a, c = oc(u)) ? l && l.includes(c) ? (o || (o = {}))[c] = f : r[c] = f : sw(e.emitsOptions, u) || u in i && f === i[u] || (i[u] = f, s = !0);
	}
	if (l) {
		let t = aC(r), i = o || iX;
		for (let o = 0; o < l.length; o++) {
			let s = l[o];
			r[s] = st(a, t, s, i[s], e, !i6(i, s));
		}
	}
	return s;
}
function st(e, t, r, i, o, a) {
	let l = e[r];
	if (null != l) {
		let e = i6(l, "default");
		if (e && void 0 === i) {
			let e = l.default;
			if (l.type !== Function && !l.skipFactory && i7(e)) {
				let { propsDefaults: a } = o;
				if (r in a) i = a[r];
				else {
					let l = sK(o);
					i = a[r] = e.call(null, t), l();
				}
			} else i = e;
			o.ce && o.ce._setProp(r, i);
		}
		l[0] && (a && !e ? i = !1 : l[1] && ("" === i || i === od(r)) && (i = !0));
	}
	return i;
}
var sn = /* @__PURE__ */ new WeakMap();
function sr(e) {
	return !("$" === e[0] || ol(e));
}
var si = (e) => "_" === e || "_ctx" === e || "$stable" === e, so = (e) => i9(e) ? e.map(sF) : [sF(e)], sa = (e, t, r) => {
	if (t._n) return t;
	let i = function(e, t = a2, r) {
		if (!t || e._n) return e;
		let i = (...r) => {
			let o;
			i._d && sI(-1);
			let a = a3(t);
			try {
				o = e(...r);
			} finally {
				a3(a), i._d && sI(1);
			}
			return o;
		};
		return i._n = !0, i._c = !0, i._d = !0, i;
	}((...e) => so(t(...e)), r);
	return i._c = !1, i;
}, sl = (e, t, r) => {
	let i = e._ctx;
	for (let r in e) {
		if (si(r)) continue;
		let o = e[r];
		if (i7(o)) t[r] = sa(r, o, i);
		else if (null != o) {
			let e = so(o);
			t[r] = () => e;
		}
	}
}, ss = (e, t) => {
	let r = so(t);
	e.slots.default = () => r;
}, su = (e, t, r) => {
	for (let i in t) (r || !si(i)) && (e[i] = t[i]);
}, sc = function(e, t) {
	if (t && t.pendingBranch) i9(e) ? t.effects.push(...e) : t.effects.push(e);
	else i9(e) ? aU.push(...e) : aq && -1 === e.id ? aq.splice(aK + 1, 0, e) : 1 & e.flags || (aU.push(e), e.flags |= 1), aY();
};
function sf({ type: e, props: t }, r) {
	return "svg" === r && "foreignObject" === e || "mathml" === r && "annotation-xml" === e && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function sd({ effect: e, job: t }, r) {
	r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function sp(e, t, r = !1) {
	let i = e.children, o = t.children;
	if (i9(i) && i9(o)) for (let e = 0; e < i.length; e++) {
		let t = i[e], a = o[e];
		1 & a.shapeFlag && !a.dynamicChildren && ((a.patchFlag <= 0 || 32 === a.patchFlag) && ((a = o[e] = sz(o[e])).el = t.el), r || -2 === a.patchFlag || sp(t, a)), a.type === sA && -1 !== a.patchFlag && (a.el = t.el), a.type !== sP || a.el || (a.el = t.el);
	}
}
function sh(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
var sm = Symbol.for("v-scx");
function sg(e, t, r = iX) {
	let i, { immediate: o, deep: a, flush: l, once: s } = r, u = i4({}, r), c = t && o || !t && "post" !== l;
	if (sZ) {
		if ("sync" === l) {
			let e = l6(sm);
			i = e.__watcherHandles || (e.__watcherHandles = []);
		} else if (!c) {
			let e = () => {};
			return e.stop = iQ, e.resume = iQ, e.pause = iQ, e;
		}
	}
	let f = sU;
	u.call = (e, t, r) => aV(e, f, t, r);
	let d = !1;
	"post" === l ? u.scheduler = (e) => {
		sc(e, f && f.suspense);
	} : "sync" !== l && (d = !0, u.scheduler = (e, t) => {
		t ? e() : aX(e);
	}), u.augmentJob = (e) => {
		t && (e.flags |= 4), d && (e.flags |= 2, f && (e.id = f.uid, e.i = f));
	};
	let p = function(e, t, r = iX) {
		let i, o, a, l, { immediate: s, deep: u, once: c, scheduler: f, augmentJob: d, call: p } = r, h = (e) => u ? e : ak(e) || !1 === u || 0 === u ? aF(e, 1) : aF(e), m = !1, g = !1;
		if (aA(e) ? (o = () => e.value, m = ak(e)) : ax(e) ? (o = () => h(e), m = !0) : i9(e) ? (g = !0, m = e.some((e) => ax(e) || ak(e)), o = () => e.map((e) => aA(e) ? e.value : ax(e) ? h(e) : i7(e) ? p ? p(e, 2) : e() : void 0)) : o = i7(e) ? t ? p ? () => p(e, 2) : e : () => {
			if (a) {
				oF();
				try {
					a();
				} finally {
					oz();
				}
			}
			let t = aN;
			aN = i;
			try {
				return p ? p(e, 3, [l]) : e(l);
			} finally {
				aN = t;
			}
		} : iQ, t && u) {
			let e = o, t = !0 === u ? Infinity : u;
			o = () => aF(e(), t);
		}
		let y = I, b = () => {
			i.stop(), y && y.active && i3(y.effects, i);
		};
		if (c && t) {
			let e = t;
			t = (...t) => {
				e(...t), b();
			};
		}
		let x = g ? Array(e.length).fill(aL) : aL, w = (e) => {
			if (1 & i.flags && (i.dirty || e)) if (t) {
				let e = i.run();
				if (u || m || (g ? e.some((e, t) => om(e, x[t])) : om(e, x))) {
					a && a();
					let r = aN;
					aN = i;
					try {
						let r = [
							e,
							x === aL ? void 0 : g && x[0] === aL ? [] : x,
							l
						];
						x = e, p ? p(t, 3, r) : t(...r);
					} finally {
						aN = r;
					}
				}
			} else i.run();
		};
		return d && d(w), (i = new oP(o)).scheduler = f ? () => f(w, !1) : w, l = (e) => (function(e, t = !1, r = aN) {
			if (r) {
				let t = aR.get(r);
				t || aR.set(r, t = []), t.push(e);
			}
		})(e, !1, i), a = i.onStop = () => {
			let e = aR.get(i);
			if (e) {
				if (p) p(e, 4);
				else for (let t of e) t();
				aR.delete(i);
			}
		}, t ? s ? w(!0) : x = i.run() : f ? f(w.bind(null, !0), !0) : i.run(), b.pause = i.pause.bind(i), b.resume = i.resume.bind(i), b.stop = b, b;
	}(e, t, u);
	return sZ && (i ? i.push(p) : c && p()), p;
}
function sy(e, t, r) {
	let i, o = this.proxy, a = oe(e) ? e.includes(".") ? sv(o, e) : () => o[e] : e.bind(o, o);
	i7(t) ? i = t : (i = t.handler, r = t);
	let l = sK(this), s = sg(a, i.bind(o), r);
	return l(), s;
}
function sv(e, t) {
	let r = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < r.length && t; e++) t = t[r[e]];
		return t;
	};
}
function sb(e, t, ...r) {
	let i, o;
	if (e.isUnmounted) return;
	let a = e.vnode.props || iX, l = r, s = t.startsWith("update:"), u = s && ("modelValue" === (o = t.slice(7)) || "model-value" === o ? a.modelModifiers : a[`${o}Modifiers`] || a[`${oc(o)}Modifiers`] || a[`${od(o)}Modifiers`]);
	u && (u.trim && (l = r.map((e) => oe(e) ? e.trim() : e)), u.number && (l = r.map(ov)));
	let c = a[i = oh(t)] || a[i = oh(oc(t))];
	!c && s && (c = a[i = oh(od(t))]), c && aV(c, e, 6, l);
	let f = a[i + "Once"];
	if (f) {
		if (e.emitted) {
			if (e.emitted[i]) return;
		} else e.emitted = {};
		e.emitted[i] = !0, aV(f, e, 6, l);
	}
}
var sx = /* @__PURE__ */ new WeakMap();
function sw(e, t) {
	return !!e && !!i1(t) && (i6(e, (t = t.slice(2).replace(/Once$/, ""))[0].toLowerCase() + t.slice(1)) || i6(e, od(t)) || i6(e, t));
}
function sk(e) {
	let t, r, { type: i, vnode: o, proxy: a, withProxy: l, propsOptions: [s], slots: u, attrs: c, emit: f, render: d, renderCache: p, props: h, data: m, setupState: g, ctx: y, inheritAttrs: b } = e, x = a3(e);
	try {
		if (4 & o.shapeFlag) {
			let e = l || a;
			t = sF(d.call(e, e, p, h, g, m, y)), r = c;
		} else t = sF(i.length > 1 ? i(h, {
			attrs: c,
			slots: u,
			emit: f
		}) : i(h, null)), r = i.props ? c : s_(c);
	} catch (r) {
		sT.length = 0, aB(r, e, 1), t = sR(sP);
	}
	let w = t;
	if (r && !1 !== b) {
		let e = Object.keys(r), { shapeFlag: t } = w;
		e.length && 7 & t && (s && e.some(i2) && (r = sC(r, s)), w = sN(w, r, !1, !0));
	}
	return o.dirs && ((w = sN(w, null, !1, !0)).dirs = w.dirs ? w.dirs.concat(o.dirs) : o.dirs), o.transition && ly(w, o.transition), t = w, a3(x), t;
}
var s_ = (e) => {
	let t;
	for (let r in e) ("class" === r || "style" === r || i1(r)) && ((t || (t = {}))[r] = e[r]);
	return t;
}, sC = (e, t) => {
	let r = {};
	for (let i in e) i2(i) && i.slice(9) in t || (r[i] = e[i]);
	return r;
};
function sS(e, t, r) {
	let i = Object.keys(t);
	if (i.length !== Object.keys(e).length) return !0;
	for (let o = 0; o < i.length; o++) {
		let a = i[o];
		if (t[a] !== e[a] && !sw(r, a)) return !0;
	}
	return !1;
}
var sO = Symbol.for("v-fgt"), sA = Symbol.for("v-txt"), sP = Symbol.for("v-cmt"), sM = Symbol.for("v-stc"), sT = [], sE = 1;
function sI(e, t = !1) {
	sE += e;
}
function sD(e) {
	return !!e && !0 === e.__v_isVNode;
}
function sj(e, t) {
	return e.type === t.type && e.key === t.key;
}
var s$ = ({ key: e }) => null != e ? e : null, sL = ({ ref: e, ref_key: t, ref_for: r }) => ("number" == typeof e && (e = "" + e), null != e ? oe(e) || aA(e) || i7(e) ? {
	i: a2,
	r: e,
	k: t,
	f: !!r
} : e : null), sR = function(e, t = null, r = null, i = 0, o = null, a = !1) {
	var l, s;
	if (e && e !== lz || (e = sP), sD(e)) {
		let i = sN(e, t, !0);
		return r && sV(i, r), i.patchFlag = -2, i;
	}
	if (i7(l = e) && "__vccOpts" in l && (e = e.__vccOpts), t) {
		let { class: e, style: r } = t = (s = t) ? a_(s) || l7(s) ? i4({}, s) : s : null;
		e && !oe(e) && (t.class = oC(e)), on(r) && (a_(r) && !i9(r) && (r = i4({}, r)), t.style = ox(r));
	}
	let u = oe(e) ? 1 : e.__isSuspense ? 128 : e.__isTeleport ? 64 : on(e) ? 4 : 2 * !!i7(e);
	return function(e, t = null, r = null, i = 0, o = null, a = +(e !== sO), l = !1, s = !1) {
		let u = {
			__v_isVNode: !0,
			__v_skip: !0,
			type: e,
			props: t,
			key: t && s$(t),
			ref: t && sL(t),
			scopeId: a4,
			slotScopeIds: null,
			children: r,
			component: null,
			suspense: null,
			ssContent: null,
			ssFallback: null,
			dirs: null,
			transition: null,
			el: null,
			anchor: null,
			target: null,
			targetStart: null,
			targetAnchor: null,
			staticCount: 0,
			shapeFlag: a,
			patchFlag: i,
			dynamicProps: o,
			dynamicChildren: null,
			appContext: null,
			ctx: a2
		};
		return s ? (sV(u, r), 128 & a && e.normalize(u)) : r && (u.shapeFlag |= oe(r) ? 8 : 16), u;
	}(e, t, r, i, o, u, a, !0);
};
function sN(e, t, r = !1, i = !1) {
	let { props: o, ref: a, patchFlag: l, children: s, transition: u } = e, c = t ? function(...e) {
		let t = {};
		for (let r = 0; r < e.length; r++) {
			let i = e[r];
			for (let e in i) if ("class" === e) t.class !== i.class && (t.class = oC([t.class, i.class]));
			else if ("style" === e) t.style = ox([t.style, i.style]);
			else if (i1(e)) {
				let r = t[e], o = i[e];
				o && r !== o && !(i9(r) && r.includes(o)) && (t[e] = r ? [].concat(r, o) : o);
			} else "" !== e && (t[e] = i[e]);
		}
		return t;
	}(o || {}, t) : o, f = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: c,
		key: c && s$(c),
		ref: t && t.ref ? r && a ? i9(a) ? a.concat(sL(t)) : [a, sL(t)] : sL(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== sO ? -1 === l ? 16 : 16 | l : l,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: u,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && sN(e.ssContent),
		ssFallback: e.ssFallback && sN(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return u && i && ly(f, u.clone(f)), f;
}
function sF(e) {
	return null == e || "boolean" == typeof e ? sR(sP) : i9(e) ? sR(sO, null, e.slice()) : sD(e) ? sz(e) : sR(sA, null, String(e));
}
function sz(e) {
	return null === e.el && -1 !== e.patchFlag || e.memo ? e : sN(e);
}
function sV(e, t) {
	let r = 0, { shapeFlag: i } = e;
	if (null == t) t = null;
	else if (i9(t)) r = 16;
	else if ("object" == typeof t) if (65 & i) {
		let r = t.default;
		r && (r._c && (r._d = !1), sV(e, r()), r._c && (r._d = !0));
		return;
	} else {
		r = 32;
		let i = t._;
		i || l7(t) ? 3 === i && a2 && (1 === a2.slots._ ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024)) : t._ctx = a2;
	}
	else i7(t) ? (t = {
		default: t,
		_ctx: a2
	}, r = 32) : (t = String(t), 64 & i ? (r = 16, t = [function(e = " ", t = 0) {
		return sR(sA, null, e, t);
	}(t)]) : r = 8);
	e.children = t, e.shapeFlag |= r;
}
function sB(e, t, r, i = null) {
	aV(e, t, 7, [r, i]);
}
var sH = l2(), sW = 0, sU = null, sq = () => sU || a2;
{
	let e = ob(), t = (t, r) => {
		let i;
		return (i = e[t]) || (i = e[t] = []), i.push(r), (e) => {
			i.length > 1 ? i.forEach((t) => t(e)) : i[0](e);
		};
	};
	L = t("__VUE_INSTANCE_SETTERS__", (e) => sU = e), R = t("__VUE_SSR_SETTERS__", (e) => sZ = e);
}
var sK = (e) => {
	let t = sU;
	return L(e), e.scope.on(), () => {
		e.scope.off(), L(t);
	};
}, sG = () => {
	sU && sU.scope.off(), L(null);
};
function sJ(e) {
	return 4 & e.vnode.shapeFlag;
}
var sZ = !1;
function sX(e, t, r) {
	i7(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : on(t) && (e.setupState = aD(t)), sY(e, r);
}
function sY(e, t, r) {
	let i = e.type;
	if (!e.render) {
		if (!t && N && !i.render) {
			let t = i.template || lG(e).template;
			if (t) {
				let { isCustomElement: r, compilerOptions: o } = e.appContext.config, { delimiters: a, compilerOptions: l } = i;
				i.render = N(t, i4(i4({
					isCustomElement: r,
					delimiters: a
				}, o), l));
			}
		}
		e.render = i.render || iQ, F && F(e);
	}
	{
		let t = sK(e);
		oF();
		try {
			(function(e) {
				let t = lG(e), r = e.proxy, i = e.ctx;
				lq = !1, t.beforeCreate && lK(t.beforeCreate, e, "bc");
				let { data: o, computed: a, methods: l, watch: s, provide: u, inject: c, created: f, beforeMount: d, mounted: p, beforeUpdate: h, updated: m, activated: g, deactivated: y, beforeDestroy: b, beforeUnmount: x, destroyed: w, unmounted: k, render: _, renderTracked: C, renderTriggered: S, errorCaptured: O, serverPrefetch: A, expose: P, inheritAttrs: M, components: T, directives: E, filters: I } = t;
				if (c && function(e, t, r = iQ) {
					for (let r in i9(e) && (e = lY(e)), e) {
						let i, o = e[r];
						aA(i = on(o) ? "default" in o ? l6(o.from || r, o.default, !0) : l6(o.from || r) : l6(o)) ? Object.defineProperty(t, r, {
							enumerable: !0,
							configurable: !0,
							get: () => i.value,
							set: (e) => i.value = e
						}) : t[r] = i;
					}
				}(c, i, null), l) for (let e in l) {
					let t = l[e];
					i7(t) && (i[e] = t.bind(r));
				}
				if (o) {
					let t = o.call(r, r);
					on(t) && (e.data = ag(t));
				}
				if (lq = !0, a) for (let e in a) {
					let t = a[e], o = i7(t) ? t.bind(r, r) : i7(t.get) ? t.get.bind(r, r) : iQ, l = s1({
						get: o,
						set: !i7(t) && i7(t.set) ? t.set.bind(r) : iQ
					});
					Object.defineProperty(i, e, {
						enumerable: !0,
						configurable: !0,
						get: () => l.value,
						set: (e) => l.value = e
					});
				}
				if (s) for (let e in s) (function e(t, r, i, o) {
					var a, l, s, u, c, f, d;
					let p = o.includes(".") ? sv(i, o) : () => i[o];
					if (oe(t)) {
						let e = r[t];
						i7(e) && (a = p, l = e, sg(a, l, void 0));
					} else if (i7(t)) s = p, u = t.bind(i), sg(s, u, void 0);
					else if (on(t)) if (i9(t)) t.forEach((t) => e(t, r, i, o));
					else {
						let e = i7(t.handler) ? t.handler.bind(i) : r[t.handler];
						i7(e) && (c = p, f = e, d = t, sg(c, f, d));
					}
				})(s[e], i, r, e);
				if (u) {
					let e = i7(u) ? u.call(r) : u;
					Reflect.ownKeys(e).forEach((t) => {
						l5(t, e[t]);
					});
				}
				function D(e, t) {
					i9(t) ? t.forEach((t) => e(t.bind(r))) : t && e(t.bind(r));
				}
				if (f && lK(f, e, "c"), D(lT, d), D(lE, p), D(lI, h), D(lD, m), D(lS, g), D(lO, y), D(lF, O), D(lN, C), D(lR, S), D(lj, x), D(l$, k), D(lL, A), i9(P)) if (P.length) {
					let t = e.exposed || (e.exposed = {});
					P.forEach((e) => {
						Object.defineProperty(t, e, {
							get: () => r[e],
							set: (t) => r[e] = t,
							enumerable: !0
						});
					});
				} else e.exposed || (e.exposed = {});
				_ && e.render === iQ && (e.render = _), null != M && (e.inheritAttrs = M), T && (e.components = T), E && (e.directives = E), A && lb(e);
			})(e);
		} finally {
			oz(), t();
		}
	}
}
var sQ = { get: (e, t) => (oJ(e, "get", ""), e[t]) };
function s0(e) {
	var t;
	return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(aD((!i6(t = e.exposed, "__v_skip") && Object.isExtensible(t) && oy(t, "__v_skip", !0), t)), {
		get: (t, r) => r in t ? t[r] : r in lB ? lB[r](e) : void 0,
		has: (e, t) => t in e || t in lB
	})) : e.proxy;
}
var s1 = (e, t) => (function(e, t, r = !1) {
	let i, o;
	return i7(e) ? i = e : (i = e.get, o = e.set), new a$(i, o, r);
})(e, 0, sZ);
function s2(e, t, r) {
	try {
		sI(-1);
		let i = arguments.length;
		if (2 !== i) return i > 3 ? r = Array.prototype.slice.call(arguments, 2) : 3 === i && sD(r) && (r = [r]), sR(e, t, r);
		if (!on(t) || i9(t)) return sR(e, null, t);
		if (sD(t)) return sR(e, null, [t]);
		return sR(e, t);
	} finally {
		sI(1);
	}
}
var s4 = void 0, s3 = "undefined" != typeof window && window.trustedTypes;
if (s3) try {
	s4 = s3.createPolicy("vue", { createHTML: (e) => e });
} catch (e) {}
var s5 = s4 ? (e) => s4.createHTML(e) : (e) => e, s6 = "undefined" != typeof document ? document : null, s9 = s6 && s6.createElement("template"), s8 = "transition", s7 = "animation", ue = Symbol("_vtc"), ut = {
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
}, un = i4({}, lu, ut), ur = ((b = (e, { slots: t }) => s2(ld, function(e) {
	let t = {};
	for (let r in e) r in ut || (t[r] = e[r]);
	if (!1 === e.css) return t;
	let { name: r = "v", type: i, duration: o, enterFromClass: a = `${r}-enter-from`, enterActiveClass: l = `${r}-enter-active`, enterToClass: s = `${r}-enter-to`, appearFromClass: u = a, appearActiveClass: c = l, appearToClass: f = s, leaveFromClass: d = `${r}-leave-from`, leaveActiveClass: p = `${r}-leave-active`, leaveToClass: h = `${r}-leave-to` } = e, m = function(e) {
		if (null == e) return null;
		{
			if (on(e)) return [ua(e.enter), ua(e.leave)];
			let t = ua(e);
			return [t, t];
		}
	}(o), g = m && m[0], y = m && m[1], { onBeforeEnter: b, onEnter: x, onEnterCancelled: w, onLeave: k, onLeaveCancelled: _, onBeforeAppear: C = b, onAppear: S = x, onAppearCancelled: O = w } = t, A = (e, t, r, i) => {
		e._enterCancelled = i, us(e, t ? f : s), us(e, t ? c : l), r && r();
	}, P = (e, t) => {
		e._isLeaving = !1, us(e, d), us(e, h), us(e, p), t && t();
	}, M = (e) => (t, r) => {
		let o = e ? S : x, l = () => A(t, e, r);
		ui(o, [t, l]), uu(() => {
			us(t, e ? u : a), ul(t, e ? f : s), uo(o) || uf(t, i, g, l);
		});
	};
	return i4(t, {
		onBeforeEnter(e) {
			ui(b, [e]), ul(e, a), ul(e, l);
		},
		onBeforeAppear(e) {
			ui(C, [e]), ul(e, u), ul(e, c);
		},
		onEnter: M(!1),
		onAppear: M(!0),
		onLeave(e, t) {
			e._isLeaving = !0;
			let r = () => P(e, t);
			ul(e, d), e._enterCancelled ? (ul(e, p), uh(e)) : (uh(e), ul(e, p)), uu(() => {
				e._isLeaving && (us(e, d), ul(e, h), uo(k) || uf(e, i, y, r));
			}), ui(k, [e, r]);
		},
		onEnterCancelled(e) {
			A(e, !1, void 0, !0), ui(w, [e]);
		},
		onAppearCancelled(e) {
			A(e, !0, void 0, !0), ui(O, [e]);
		},
		onLeaveCancelled(e) {
			P(e), ui(_, [e]);
		}
	});
}(e), t)).displayName = "Transition", b.props = un, b), ui = (e, t = []) => {
	i9(e) ? e.forEach((e) => e(...t)) : e && e(...t);
}, uo = (e) => !!e && (i9(e) ? e.some((e) => e.length > 1) : e.length > 1);
function ua(e) {
	let t = oe(e) ? Number(e) : NaN;
	return isNaN(t) ? e : t;
}
function ul(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.add(t)), (e[ue] || (e[ue] = /* @__PURE__ */ new Set())).add(t);
}
function us(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.remove(t));
	let r = e[ue];
	r && (r.delete(t), r.size || (e[ue] = void 0));
}
function uu(e) {
	requestAnimationFrame(() => {
		requestAnimationFrame(e);
	});
}
var uc = 0;
function uf(e, t, r, i) {
	let o = e._endId = ++uc, a = () => {
		o === e._endId && i();
	};
	if (null != r) return setTimeout(a, r);
	let { type: l, timeout: s, propCount: u } = function(e, t) {
		let r = window.getComputedStyle(e), i = (e) => (r[e] || "").split(", "), o = i(`${s8}Delay`), a = i(`${s8}Duration`), l = ud(o, a), s = i(`${s7}Delay`), u = i(`${s7}Duration`), c = ud(s, u), f = null, d = 0, p = 0;
		t === s8 ? l > 0 && (f = s8, d = l, p = a.length) : t === s7 ? c > 0 && (f = s7, d = c, p = u.length) : p = (f = (d = Math.max(l, c)) > 0 ? l > c ? s8 : s7 : null) ? f === s8 ? a.length : u.length : 0;
		let h = f === s8 && /\b(?:transform|all)(?:,|$)/.test(i(`${s8}Property`).toString());
		return {
			type: f,
			timeout: d,
			propCount: p,
			hasTransform: h
		};
	}(e, t);
	if (!l) return i();
	let c = l + "end", f = 0, d = () => {
		e.removeEventListener(c, p), a();
	}, p = (t) => {
		t.target === e && ++f >= u && d();
	};
	setTimeout(() => {
		f < u && d();
	}, s + 1), e.addEventListener(c, p);
}
function ud(e, t) {
	for (; e.length < t.length;) e = e.concat(e);
	return Math.max(...t.map((t, r) => up(t) + up(e[r])));
}
function up(e) {
	return "auto" === e ? 0 : 1e3 * Number(e.slice(0, -1).replace(",", "."));
}
function uh(e) {
	return (e ? e.ownerDocument : document).body.offsetHeight;
}
var um = Symbol("_vod"), ug = Symbol("_vsh"), uy = Symbol(""), uv = /(?:^|;)\s*display\s*:/, ub = /\s*!important$/;
function ux(e, t, r) {
	if (i9(r)) r.forEach((r) => ux(e, t, r));
	else if (r ??= "", t.startsWith("--")) e.setProperty(t, r);
	else {
		let i = function(e, t) {
			let r = uk[t];
			if (r) return r;
			let i = oc(t);
			if ("filter" !== i && i in e) return uk[t] = i;
			i = op(i);
			for (let r = 0; r < uw.length; r++) {
				let o = uw[r] + i;
				if (o in e) return uk[t] = o;
			}
			return t;
		}(e, t);
		ub.test(r) ? e.setProperty(od(i), r.replace(ub, ""), "important") : e[i] = r;
	}
}
var uw = [
	"Webkit",
	"Moz",
	"ms"
], uk = {}, u_ = "http://www.w3.org/1999/xlink";
function uC(e, t, r, i, o, a = oS(t)) {
	if (i && t.startsWith("xlink:")) null == r ? e.removeAttributeNS(u_, t.slice(6, t.length)) : e.setAttributeNS(u_, t, r);
	else null == r || a && !(r || "" === r) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : ot(r) ? String(r) : r);
}
function uS(e, t, r, i, o) {
	if ("innerHTML" === t || "textContent" === t) {
		null != r && (e[t] = "innerHTML" === t ? s5(r) : r);
		return;
	}
	let a = e.tagName;
	if ("value" === t && "PROGRESS" !== a && !a.includes("-")) {
		let i = "OPTION" === a ? e.getAttribute("value") || "" : e.value, o = null == r ? "checkbox" === e.type ? "on" : "" : String(r);
		i === o && "_value" in e || (e.value = o), r ?? e.removeAttribute(t), e._value = r;
		return;
	}
	let l = !1;
	if ("" === r || null == r) {
		let i = typeof e[t];
		if ("boolean" === i) {
			var s;
			r = !!(s = r) || "" === s;
		} else null == r && "string" === i ? (r = "", l = !0) : "number" === i && (r = 0, l = !0);
	}
	try {
		e[t] = r;
	} catch (e) {}
	l && e.removeAttribute(o || t);
}
var uO = Symbol("_vei"), uA = /(?:Once|Passive|Capture)$/, uP = 0, uM = Promise.resolve(), uT = (e) => 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) > 96 && 123 > e.charCodeAt(2), uE = i4({ patchProp: (e, t, r, i, o, a) => {
	let l = "svg" === o;
	if ("class" === t) {
		var s = i;
		let t = e[ue];
		t && (s = (s ? [s, ...t] : [...t]).join(" ")), null == s ? e.removeAttribute("class") : l ? e.setAttribute("class", s) : e.className = s;
	} else "style" === t ? function(e, t, r) {
		let i = e.style, o = oe(r), a = !1;
		if (r && !o) {
			if (t) if (oe(t)) for (let e of t.split(";")) {
				let t = e.slice(0, e.indexOf(":")).trim();
				r[t] ?? ux(i, t, "");
			}
			else for (let e in t) r[e] ?? ux(i, e, "");
			for (let e in r) "display" === e && (a = !0), ux(i, e, r[e]);
		} else if (o) {
			if (t !== r) {
				let e = i[uy];
				e && (r += ";" + e), i.cssText = r, a = uv.test(r);
			}
		} else t && e.removeAttribute("style");
		um in e && (e[um] = a ? i.display : "", e[ug] && (i.display = "none"));
	}(e, r, i) : i1(t) ? i2(t) || function(e, t, r, i, o = null) {
		let a = e[uO] || (e[uO] = {}), l = a[t];
		if (i && l) l.value = i;
		else {
			let [r, s] = function(e) {
				let t;
				if (uA.test(e)) {
					let r;
					for (t = {}; r = e.match(uA);) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
				}
				return [":" === e[2] ? e.slice(3) : od(e.slice(2)), t];
			}(t);
			if (i) {
				let l = a[t] = function(e, t) {
					let r = (e) => {
						if (e._vts) {
							if (e._vts <= r.attached) return;
						} else e._vts = Date.now();
						aV(function(e, t) {
							if (!i9(t)) return t;
							{
								let r = e.stopImmediatePropagation;
								return e.stopImmediatePropagation = () => {
									r.call(e), e._stopped = !0;
								}, t.map((e) => (t) => !t._stopped && e && e(t));
							}
						}(e, r.value), t, 5, [e]);
					};
					return r.value = e, r.attached = uP || (uM.then(() => uP = 0), uP = Date.now()), r;
				}(i, o);
				e.addEventListener(r, l, s);
			} else l && (e.removeEventListener(r, l, s), a[t] = void 0);
		}
	}(e, t, 0, i, a) : ("." === t[0] ? (t = t.slice(1), 0) : "^" === t[0] ? (t = t.slice(1), 1) : !function(e, t, r, i) {
		if (i) return !!("innerHTML" === t || "textContent" === t || t in e && uT(t) && i7(r));
		if ("spellcheck" === t || "draggable" === t || "translate" === t || "autocorrect" === t || "form" === t || "list" === t && "INPUT" === e.tagName || "type" === t && "TEXTAREA" === e.tagName) return !1;
		if ("width" === t || "height" === t) {
			let t = e.tagName;
			if ("IMG" === t || "VIDEO" === t || "CANVAS" === t || "SOURCE" === t) return !1;
		}
		return !(uT(t) && oe(r)) && t in e;
	}(e, t, i, l)) ? e._isVueCE && (/[A-Z]/.test(t) || !oe(i)) ? uS(e, oc(t), i, a, t) : ("true-value" === t ? e._trueValue = i : "false-value" === t && (e._falseValue = i), uC(e, t, i, l)) : (uS(e, t, i), e.tagName.includes("-") || "value" !== t && "checked" !== t && "selected" !== t || uC(e, t, i, l, a, "value" !== t));
} }, {
	insert: (e, t, r) => {
		t.insertBefore(e, r || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, r, i) => {
		let o = "svg" === t ? s6.createElementNS("http://www.w3.org/2000/svg", e) : "mathml" === t ? s6.createElementNS("http://www.w3.org/1998/Math/MathML", e) : r ? s6.createElement(e, { is: r }) : s6.createElement(e);
		return "select" === e && i && null != i.multiple && o.setAttribute("multiple", i.multiple), o;
	},
	createText: (e) => s6.createTextNode(e),
	createComment: (e) => s6.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => s6.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, r, i, o, a) {
		let l = r ? r.previousSibling : t.lastChild;
		if (o && (o === a || o.nextSibling)) for (; t.insertBefore(o.cloneNode(!0), r), o !== a && (o = o.nextSibling););
		else {
			s9.innerHTML = s5("svg" === i ? `<svg>${e}</svg>` : "mathml" === i ? `<math>${e}</math>` : e);
			let o = s9.content;
			if ("svg" === i || "mathml" === i) {
				let e = o.firstChild;
				for (; e.firstChild;) o.appendChild(e.firstChild);
				o.removeChild(e);
			}
			t.insertBefore(o, r);
		}
		return [l ? l.nextSibling : t.firstChild, r ? r.previousSibling : t.lastChild];
	}
});
let uI = (e) => void 0 === e, uD = (e) => Object.is(e, null), uj = (e) => !!e && "object" == typeof e, u$ = (e) => !!e && e.constructor == Object, uL = (e) => Array.isArray(e), uR = (e) => "number" == typeof e && !Number.isNaN(e), uN = (e) => "number" == typeof e && !Number.isNaN(e) && Number.isInteger(e), uF = (e) => "function" == typeof e && `${e}`.startsWith("class");
var uz = Symbol.for("immer-nothing"), uV = Symbol.for("immer-draftable"), uB = Symbol.for("immer-state");
function uH(e) {
	throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`);
}
var uW = Object.getPrototypeOf;
function uU(e) {
	return !!e && !!e[uB];
}
function uq(e) {
	return !!e && (uG(e) || Array.isArray(e) || !!e[uV] || !!e.constructor?.[uV] || uQ(e) || u0(e));
}
var uK = Object.prototype.constructor.toString();
function uG(e) {
	if (!e || "object" != typeof e) return !1;
	let t = uW(e);
	if (null === t) return !0;
	let r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
	return r === Object || "function" == typeof r && Function.toString.call(r) === uK;
}
function uJ(e, t) {
	0 === uZ(e) ? Reflect.ownKeys(e).forEach((r) => {
		t(r, e[r], e);
	}) : e.forEach((r, i) => t(i, r, e));
}
function uZ(e) {
	let t = e[uB];
	return t ? t.type_ : Array.isArray(e) ? 1 : uQ(e) ? 2 : 3 * !!u0(e);
}
function uX(e, t) {
	return 2 === uZ(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function uY(e, t, r) {
	let i = uZ(e);
	2 === i ? e.set(t, r) : 3 === i ? e.add(r) : e[t] = r;
}
function uQ(e) {
	return e instanceof Map;
}
function u0(e) {
	return e instanceof Set;
}
function u1(e) {
	return e.copy_ || e.base_;
}
function u2(e, t) {
	if (uQ(e)) return new Map(e);
	if (u0(e)) return new Set(e);
	if (Array.isArray(e)) return Array.prototype.slice.call(e);
	let r = uG(e);
	if (!0 !== t && ("class_only" !== t || r)) {
		let t = uW(e);
		return null !== t && r ? { ...e } : Object.assign(Object.create(t), e);
	}
	{
		let t = Object.getOwnPropertyDescriptors(e);
		delete t[uB];
		let r = Reflect.ownKeys(t);
		for (let i = 0; i < r.length; i++) {
			let o = r[i], a = t[o];
			!1 === a.writable && (a.writable = !0, a.configurable = !0), (a.get || a.set) && (t[o] = {
				configurable: !0,
				writable: !0,
				enumerable: a.enumerable,
				value: e[o]
			});
		}
		return Object.create(uW(e), t);
	}
}
function u4(e, t = !1) {
	return u5(e) || uU(e) || !uq(e) || (uZ(e) > 1 && Object.defineProperties(e, {
		set: { value: u3 },
		add: { value: u3 },
		clear: { value: u3 },
		delete: { value: u3 }
	}), Object.freeze(e), t && Object.values(e).forEach((e) => u4(e, !0))), e;
}
function u3() {
	uH(2);
}
function u5(e) {
	return Object.isFrozen(e);
}
var u6 = {};
function u9(e) {
	let t = u6[e];
	return t || uH(0, e), t;
}
function u8(e, t) {
	t && (u9("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function u7(e) {
	ce(e), e.drafts_.forEach(cn), e.drafts_ = null;
}
function ce(e) {
	e === V && (V = e.parent_);
}
function ct(e) {
	return V = {
		drafts_: [],
		parent_: V,
		immer_: e,
		canAutoFreeze_: !0,
		unfinalizedDrafts_: 0
	};
}
function cn(e) {
	let t = e[uB];
	0 === t.type_ || 1 === t.type_ ? t.revoke_() : t.revoked_ = !0;
}
function cr(e, t) {
	t.unfinalizedDrafts_ = t.drafts_.length;
	let r = t.drafts_[0];
	return void 0 !== e && e !== r ? (r[uB].modified_ && (u7(t), uH(4)), uq(e) && (e = ci(t, e), t.parent_ || ca(t, e)), t.patches_ && u9("Patches").generateReplacementPatches_(r[uB].base_, e, t.patches_, t.inversePatches_)) : e = ci(t, r, []), u7(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== uz ? e : void 0;
}
function ci(e, t, r) {
	if (u5(t)) return t;
	let i = t[uB];
	if (!i) return uJ(t, (o, a) => co(e, i, t, o, a, r)), t;
	if (i.scope_ !== e) return t;
	if (!i.modified_) return ca(e, i.base_, !0), i.base_;
	if (!i.finalized_) {
		i.finalized_ = !0, i.scope_.unfinalizedDrafts_--;
		let t = i.copy_, o = t, a = !1;
		3 === i.type_ && (o = new Set(t), t.clear(), a = !0), uJ(o, (o, l) => co(e, i, t, o, l, r, a)), ca(e, t, !1), r && e.patches_ && u9("Patches").generatePatches_(i, r, e.patches_, e.inversePatches_);
	}
	return i.copy_;
}
function co(e, t, r, i, o, a, l) {
	if (uU(o)) {
		let l = ci(e, o, a && t && 3 !== t.type_ && !uX(t.assigned_, i) ? a.concat(i) : void 0);
		if (uY(r, i, l), !uU(l)) return;
		e.canAutoFreeze_ = !1;
	} else l && r.add(o);
	if (uq(o) && !u5(o)) {
		if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
		ci(e, o), (!t || !t.scope_.parent_) && "symbol" != typeof i && (uQ(r) ? r.has(i) : Object.prototype.propertyIsEnumerable.call(r, i)) && ca(e, o);
	}
}
function ca(e, t, r = !1) {
	!e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && u4(t, r);
}
var cl = {
	get(e, t) {
		if (t === uB) return e;
		let r = u1(e);
		if (!uX(r, t)) {
			var i = e;
			let l = cc(r, t);
			return l ? "value" in l ? l.value : l.get?.call(i.draft_) : void 0;
		}
		let l = r[t];
		return e.finalized_ || !uq(l) ? l : l === cu(e.base_, t) ? (cd(e), e.copy_[t] = cp(l, e)) : l;
	},
	has: (e, t) => t in u1(e),
	ownKeys: (e) => Reflect.ownKeys(u1(e)),
	set(e, t, r) {
		let i = cc(u1(e), t);
		if (i?.set) return i.set.call(e.draft_, r), !0;
		if (!e.modified_) {
			let i = cu(u1(e), t), o = i?.[uB];
			if (o && o.base_ === r) return e.copy_[t] = r, e.assigned_[t] = !1, !0;
			if ((r === i ? 0 !== r || 1 / r == 1 / i : r != r && i != i) && (void 0 !== r || uX(e.base_, t))) return !0;
			cd(e), cf(e);
		}
		return !!(e.copy_[t] === r && (void 0 !== r || t in e.copy_) || Number.isNaN(r) && Number.isNaN(e.copy_[t])) || (e.copy_[t] = r, e.assigned_[t] = !0, !0);
	},
	deleteProperty: (e, t) => (void 0 !== cu(e.base_, t) || t in e.base_ ? (e.assigned_[t] = !1, cd(e), cf(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0),
	getOwnPropertyDescriptor(e, t) {
		let r = u1(e), i = Reflect.getOwnPropertyDescriptor(r, t);
		return i ? {
			writable: !0,
			configurable: 1 !== e.type_ || "length" !== t,
			enumerable: i.enumerable,
			value: r[t]
		} : i;
	},
	defineProperty() {
		uH(11);
	},
	getPrototypeOf: (e) => uW(e.base_),
	setPrototypeOf() {
		uH(12);
	}
}, cs = {};
function cu(e, t) {
	let r = e[uB];
	return (r ? u1(r) : e)[t];
}
function cc(e, t) {
	if (!(t in e)) return;
	let r = uW(e);
	for (; r;) {
		let e = Object.getOwnPropertyDescriptor(r, t);
		if (e) return e;
		r = uW(r);
	}
}
function cf(e) {
	!e.modified_ && (e.modified_ = !0, e.parent_ && cf(e.parent_));
}
function cd(e) {
	e.copy_ || (e.copy_ = u2(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
function cp(e, t) {
	let r = uQ(e) ? u9("MapSet").proxyMap_(e, t) : u0(e) ? u9("MapSet").proxySet_(e, t) : function(e, t) {
		let r = Array.isArray(e), i = {
			type_: +!!r,
			scope_: t ? t.scope_ : V,
			modified_: !1,
			finalized_: !1,
			assigned_: {},
			parent_: t,
			base_: e,
			draft_: null,
			copy_: null,
			revoke_: null,
			isManual_: !1
		}, o = i, a = cl;
		r && (o = [i], a = cs);
		let { revoke: l, proxy: s } = Proxy.revocable(o, a);
		return i.draft_ = s, i.revoke_ = l, s;
	}(e, t);
	return (t ? t.scope_ : V).drafts_.push(r), r;
}
uJ(cl, (e, t) => {
	cs[e] = function() {
		return arguments[0] = arguments[0][0], t.apply(this, arguments);
	};
}), cs.deleteProperty = function(e, t) {
	return cs.set.call(this, e, t, void 0);
}, cs.set = function(e, t, r) {
	return cl.set.call(this, e[0], t, r, e[0]);
};
var ch = new class {
	constructor(e) {
		this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (e, t, r) => {
			let i;
			if ("function" == typeof e && "function" != typeof t) {
				let r = t;
				t = e;
				let i = this;
				return function(e = r, ...o) {
					return i.produce(e, (e) => t.call(this, e, ...o));
				};
			}
			if ("function" != typeof t && uH(6), void 0 !== r && "function" != typeof r && uH(7), uq(e)) {
				let o = ct(this), a = cp(e, void 0), l = !0;
				try {
					i = t(a), l = !1;
				} finally {
					l ? u7(o) : ce(o);
				}
				return u8(o, r), cr(i, o);
			}
			if (e && "object" == typeof e) uH(1, e);
			else {
				if (void 0 === (i = t(e)) && (i = e), i === uz && (i = void 0), this.autoFreeze_ && u4(i, !0), r) {
					let t = [], o = [];
					u9("Patches").generateReplacementPatches_(e, i, t, o), r(t, o);
				}
				return i;
			}
		}, this.produceWithPatches = (e, t) => {
			let r, i;
			return "function" == typeof e ? (t, ...r) => this.produceWithPatches(t, (t) => e(t, ...r)) : [
				this.produce(e, t, (e, t) => {
					r = e, i = t;
				}),
				r,
				i
			];
		}, "boolean" == typeof e?.autoFreeze && this.setAutoFreeze(e.autoFreeze), "boolean" == typeof e?.useStrictShallowCopy && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
	}
	createDraft(e) {
		var t;
		uq(e) || uH(8), uU(e) && (uU(t = e) || uH(10, t), e = function e(t) {
			let r;
			if (!uq(t) || u5(t)) return t;
			let i = t[uB];
			if (i) {
				if (!i.modified_) return i.base_;
				i.finalized_ = !0, r = u2(t, i.scope_.immer_.useStrictShallowCopy_);
			} else r = u2(t, !0);
			return uJ(r, (t, i) => {
				uY(r, t, e(i));
			}), i && (i.finalized_ = !1), r;
		}(t));
		let r = ct(this), i = cp(e, void 0);
		return i[uB].isManual_ = !0, ce(r), i;
	}
	finishDraft(e, t) {
		let r = e && e[uB];
		r && r.isManual_ || uH(9);
		let { scope_: i } = r;
		return u8(i, t), cr(void 0, i);
	}
	setAutoFreeze(e) {
		this.autoFreeze_ = e;
	}
	setUseStrictShallowCopy(e) {
		this.useStrictShallowCopy_ = e;
	}
	applyPatches(e, t) {
		let r;
		for (r = t.length - 1; r >= 0; r--) {
			let i = t[r];
			if (0 === i.path.length && "replace" === i.op) {
				e = i.value;
				break;
			}
		}
		r > -1 && (t = t.slice(r + 1));
		let i = u9("Patches").applyPatches_;
		return uU(e) ? i(e, t) : this.produce(e, (e) => i(e, t));
	}
}().produce;
x = B || (B = {}), function(e) {
	var t = "object" == typeof globalThis ? globalThis : "object" == typeof global ? global : "object" == typeof self ? self : "object" == typeof this ? this : function() {
		throw ReferenceError("globalThis could not be found. Please polyfill globalThis before loading this module.");
	}(), r = i(x);
	function i(e, t) {
		return function(r, i) {
			Object.defineProperty(e, r, {
				configurable: !0,
				writable: !0,
				value: i
			}), t && t(r, i);
		};
	}
	void 0 !== t.Reflect && (r = i(t.Reflect, r)), e(r, t), void 0 === t.Reflect && (t.Reflect = x);
}(function(e, t) {
	var r, i = "function" == typeof Symbol, o = i && void 0 !== Symbol.toPrimitive ? Symbol.toPrimitive : I("Symbol.toPrimitive not found."), a = i && void 0 !== Symbol.iterator ? Symbol.iterator : I("Symbol.iterator not found."), l = Object.getPrototypeOf(Function), s = "function" == typeof Map && "function" == typeof Map.prototype.entries ? Map : I("A valid Map constructor could not be found."), u = "function" == typeof Set && "function" == typeof Set.prototype.entries ? Set : I("A valid Set constructor could not be found."), c = "function" == typeof WeakMap ? WeakMap : I("A valid WeakMap constructor could not be found."), f = i ? Symbol.for("@reflect-metadata:registry") : void 0, d = (!x(f) && k(t.Reflect) && Object.isExtensible(t.Reflect) && (r = t.Reflect[f]), x(r) && (r = function() {
		x(f) || void 0 === t.Reflect || f in t.Reflect || "function" != typeof t.Reflect.defineMetadata || (r = (e = t.Reflect).defineMetadata, i = e.hasOwnMetadata, o = e.getOwnMetadata, a = e.getOwnMetadataKeys, l = e.deleteMetadata, d = new c(), p = {
			isProviderFor: function(e, t) {
				var r = d.get(e);
				return !!(!x(r) && r.has(t)) || !!a(e, t).length && (x(r) && (r = new u(), d.set(e, r)), r.add(t), !0);
			},
			OrdinaryDefineOwnMetadata: r,
			OrdinaryHasOwnMetadata: i,
			OrdinaryGetOwnMetadata: o,
			OrdinaryOwnMetadataKeys: a,
			OrdinaryDeleteMetadata: l
		});
		var e, r, i, o, a, l, d, p, h, m, g, y = new c(), b = {
			registerProvider: function(e) {
				if (!Object.isExtensible(b)) throw Error("Cannot add provider to a frozen registry.");
				switch (!0) {
					case p === e: break;
					case x(h):
						h = e;
						break;
					case h === e: break;
					case x(m):
						m = e;
						break;
					case m === e: break;
					default: void 0 === g && (g = new u()), g.add(e);
				}
			},
			getProvider: w,
			setProvider: function(e, t, r) {
				if (!function(e) {
					if (x(e)) throw TypeError();
					return h === e || m === e || !x(g) && g.has(e);
				}(r)) throw Error("Metadata provider not registered.");
				var i = w(e, t);
				if (i !== r) {
					if (!x(i)) return !1;
					var o = y.get(e);
					x(o) && (o = new s(), y.set(e, o)), o.set(t, r);
				}
				return !0;
			}
		};
		return b;
		function w(e, t) {
			var r, i = y.get(e);
			return x(i) || (r = i.get(t)), x(r) && (r = function(e, t) {
				if (!x(h)) {
					if (h.isProviderFor(e, t)) return h;
					if (!x(m)) {
						if (m.isProviderFor(e, t)) return h;
						if (!x(g)) for (var r = P(g);;) {
							var i = M(r);
							if (!i) return;
							var o = i.value;
							if (o.isProviderFor(e, t)) return T(r), o;
						}
					}
				}
				if (!x(p) && p.isProviderFor(e, t)) return p;
			}(e, t), x(r) || (x(i) && (i = new s(), y.set(e, i)), i.set(t, r))), r;
		}
	}()), !x(f) && k(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, f, {
		enumerable: !1,
		configurable: !1,
		writable: !1,
		value: r
	}), r), p = function(e) {
		var t = new c(), r = {
			isProviderFor: function(e, r) {
				var i = t.get(e);
				return !x(i) && i.has(r);
			},
			OrdinaryDefineOwnMetadata: function(e, t, r, o) {
				i(r, o, !0).set(e, t);
			},
			OrdinaryHasOwnMetadata: function(e, t, r) {
				var o = i(t, r, !1);
				return !x(o) && !!o.has(e);
			},
			OrdinaryGetOwnMetadata: function(e, t, r) {
				var o = i(t, r, !1);
				if (!x(o)) return o.get(e);
			},
			OrdinaryOwnMetadataKeys: function(e, t) {
				var r = [], o = i(e, t, !1);
				if (x(o)) return r;
				for (var a = P(o.keys()), l = 0;;) {
					var s = M(a);
					if (!s) return r.length = l, r;
					var u = s.value;
					try {
						r[l] = u;
					} catch (e) {
						try {
							T(a);
						} finally {
							throw e;
						}
					}
					l++;
				}
			},
			OrdinaryDeleteMetadata: function(e, r, o) {
				var a = i(r, o, !1);
				if (x(a) || !a.delete(e)) return !1;
				if (0 === a.size) {
					var l = t.get(r);
					x(l) || (l.delete(o), 0 === l.size && t.delete(l));
				}
				return !0;
			}
		};
		return d.registerProvider(r), r;
		function i(i, o, a) {
			var l = t.get(i), u = !1;
			if (x(l)) {
				if (!a) return;
				l = new s(), t.set(i, l), u = !0;
			}
			var c = l.get(o);
			if (x(c)) {
				if (!a) return;
				if (c = new s(), l.set(o, c), !e.setProvider(i, o, r)) throw l.delete(o), u && t.delete(i), Error("Wrong provider for target.");
			}
			return c;
		}
	}(d);
	function h(e, t, r) {
		var i = D(t, r, !1);
		return !x(i) && !!i.OrdinaryHasOwnMetadata(e, t, r);
	}
	function m(e, t, r) {
		var i = D(t, r, !1);
		if (!x(i)) return i.OrdinaryGetOwnMetadata(e, t, r);
	}
	function g(e, t, r, i) {
		D(r, i, !0).OrdinaryDefineOwnMetadata(e, t, r, i);
	}
	function y(e, t) {
		var r = D(e, t, !1);
		return r ? r.OrdinaryOwnMetadataKeys(e, t) : [];
	}
	function b(e) {
		if (null === e) return 1;
		switch (typeof e) {
			case "undefined": return 0;
			case "boolean": return 2;
			case "string": return 3;
			case "symbol": return 4;
			case "number": return 5;
			case "object": return null === e ? 1 : 6;
			default: return 6;
		}
	}
	function x(e) {
		return void 0 === e;
	}
	function w(e) {
		return null === e;
	}
	function k(e) {
		return "object" == typeof e ? null !== e : "function" == typeof e;
	}
	e("decorate", function(e, t, r, i) {
		if (x(r)) {
			if (!C(e) || !O(t)) throw TypeError();
			for (var o = e, a = t, l = o.length - 1; l >= 0; --l) {
				var s = (0, o[l])(a);
				if (!x(s) && !w(s)) {
					if (!O(s)) throw TypeError();
					a = s;
				}
			}
			return a;
		}
		if (!C(e) || !k(t) || !k(i) && !x(i) && !w(i)) throw TypeError();
		return w(i) && (i = void 0), function(e, t, r, i) {
			for (var o = e.length - 1; o >= 0; --o) {
				var a = (0, e[o])(t, r, i);
				if (!x(a) && !w(a)) {
					if (!k(a)) throw TypeError();
					i = a;
				}
			}
			return i;
		}(e, t, r = _(r), i);
	}), e("metadata", function(e, t) {
		return function(r, i) {
			if (!k(r) || !x(i) && !function(e) {
				switch (b(e)) {
					case 3:
					case 4: return !0;
					default: return !1;
				}
			}(i)) throw TypeError();
			g(e, t, r, i);
		};
	}), e("defineMetadata", function(e, t, r, i) {
		if (!k(r)) throw TypeError();
		return x(i) || (i = _(i)), g(e, t, r, i);
	}), e("hasMetadata", function(e, t, r) {
		if (!k(t)) throw TypeError();
		return x(r) || (r = _(r)), function e(t, r, i) {
			if (h(t, r, i)) return !0;
			var o = E(r);
			return !w(o) && e(t, o, i);
		}(e, t, r);
	}), e("hasOwnMetadata", function(e, t, r) {
		if (!k(t)) throw TypeError();
		return x(r) || (r = _(r)), h(e, t, r);
	}), e("getMetadata", function(e, t, r) {
		if (!k(t)) throw TypeError();
		return x(r) || (r = _(r)), function e(t, r, i) {
			if (h(t, r, i)) return m(t, r, i);
			var o = E(r);
			if (!w(o)) return e(t, o, i);
		}(e, t, r);
	}), e("getOwnMetadata", function(e, t, r) {
		if (!k(t)) throw TypeError();
		return x(r) || (r = _(r)), m(e, t, r);
	}), e("getMetadataKeys", function(e, t) {
		if (!k(e)) throw TypeError();
		return x(t) || (t = _(t)), function e(t, r) {
			var i = y(t, r), o = E(t);
			if (null === o) return i;
			var a = e(o, r);
			if (a.length <= 0) return i;
			if (i.length <= 0) return a;
			for (var l = new u(), s = [], c = 0; c < i.length; c++) {
				var f = i[c], d = l.has(f);
				d || (l.add(f), s.push(f));
			}
			for (var p = 0; p < a.length; p++) {
				var f = a[p], d = l.has(f);
				d || (l.add(f), s.push(f));
			}
			return s;
		}(e, t);
	}), e("getOwnMetadataKeys", function(e, t) {
		if (!k(e)) throw TypeError();
		return x(t) || (t = _(t)), y(e, t);
	}), e("deleteMetadata", function(e, t, r) {
		if (!k(t)) throw TypeError();
		x(r) || (r = _(r));
		var i = D(t, r, !1);
		return !x(i) && i.OrdinaryDeleteMetadata(e, t, r);
	});
	function _(e) {
		var t = function(e, t) {
			switch (b(e)) {
				case 0:
				case 1:
				case 2:
				case 3:
				case 4:
				case 5: return e;
			}
			var r = "string", i = A(e, o);
			if (void 0 !== i) {
				var a = i.call(e, r);
				if (k(a)) throw TypeError();
				return a;
			}
			return function(e, t) {
				if ("string" === t) {
					var r = e.toString;
					if (S(r)) {
						var i = r.call(e);
						if (!k(i)) return i;
					}
					var o = e.valueOf;
					if (S(o)) {
						var i = o.call(e);
						if (!k(i)) return i;
					}
				} else {
					var o = e.valueOf;
					if (S(o)) {
						var i = o.call(e);
						if (!k(i)) return i;
					}
					var a = e.toString;
					if (S(a)) {
						var i = a.call(e);
						if (!k(i)) return i;
					}
				}
				throw TypeError();
			}(e, r);
		}(e, 0);
		return "symbol" == typeof t ? t : "" + t;
	}
	function C(e) {
		return Array.isArray ? Array.isArray(e) : e instanceof Object ? e instanceof Array : "[object Array]" === Object.prototype.toString.call(e);
	}
	function S(e) {
		return "function" == typeof e;
	}
	function O(e) {
		return "function" == typeof e;
	}
	function A(e, t) {
		var r = e[t];
		if (null != r) {
			if (!S(r)) throw TypeError();
			return r;
		}
	}
	function P(e) {
		var t = A(e, a);
		if (!S(t)) throw TypeError();
		var r = t.call(e);
		if (!k(r)) throw TypeError();
		return r;
	}
	function M(e) {
		var t = e.next();
		return !t.done && t;
	}
	function T(e) {
		var t = e.return;
		t && t.call(e);
	}
	function E(e) {
		var t = Object.getPrototypeOf(e);
		if ("function" != typeof e || e === l || t !== l) return t;
		var r = e.prototype, i = r && Object.getPrototypeOf(r);
		if (null == i || i === Object.prototype) return t;
		var o = i.constructor;
		return "function" != typeof o || o === e ? t : o;
	}
	function I(e) {
		throw e;
	}
	function D(e, t, r) {
		var i = d.getProvider(e, t);
		if (!x(i)) return i;
		if (r) {
			if (d.setProvider(e, t, p)) return p;
			throw Error("Illegal state.");
		}
	}
});
var cm = class {
	static getOwnPropertyNames(e) {
		return Reflect.getMetadataKeys(e);
	}
	static get(e, t) {
		return Reflect.getMetadata(t, e);
	}
	static define(e, t, r, i) {
		if (e && e.constructor && e.constructor != Object) {
			if (r && r.constructor && r.call && r.apply) return void Reflect.defineMetadata(t, ch(Reflect.getMetadata(t, e) ?? i ?? {}, r), e);
			Reflect.defineMetadata(t, r, e);
		}
	}
};
let cg = {
	path: [],
	branch: []
};
var cy = class extends TypeError {
	value;
	key;
	type;
	refinement;
	path;
	branch;
	failures;
	constructor(e, t) {
		let r, { message: i, explanation: o,...a } = e, { path: l } = e, s = 0 === l.length ? i : `At path: ${l.join(".")} -- ${i}`;
		super(o ?? s), null != o && (this.cause = s), Object.assign(this, a), this.name = this.constructor.name, this.failures = () => r ??= [e, ...t()];
	}
};
let cv = Symbol("Type");
function* cb(e, t, r, i) {
	let o, a = e;
	for (let e of (("object" != typeof (o = a) || "function" != typeof o[Symbol.iterator]) && (a = [a]), a)) {
		let o = function(e, t, r, i) {
			if (!0 === e) return;
			let o = {}, { path: a, branch: l, node: s } = t, { type: u } = r, { refinement: c, message: f = uI(i) ? "Required" : `Expected a value of type \`${u}\`${c ? ` with refinement \`${c}\`` : ""}, but received: \`${i}\`` } = o = !1 === e ? {} : "string" == typeof e ? { message: e } : e;
			return {
				...o,
				value: i,
				type: u,
				refinement: c,
				key: a[a.length - 1],
				path: a,
				branch: l,
				node: s,
				message: f
			};
		}(e, t, r, i);
		o && (yield o);
	}
}
function cx(e, t, r = {}) {
	let i = cw(e, t, r), o = function(e) {
		let { done: t, value: r } = e.next();
		return t ? void 0 : r;
	}(i);
	return o[0] ? [new cy(o[0], function* () {
		for (let e of i) e[0] && (yield e[0]);
	}), void 0] : [void 0, o[1]];
}
function* cw(e, t, r = {}) {
	let { path: i = [], branch: o = [e], node: a = { current: t }, coerce: l = !1, mask: s = !1 } = r, u = {
		mask: s,
		path: i,
		branch: o,
		node: a
	}, c = e;
	if (l) {
		let r = t.coercer(e, u);
		void 0 != r && (c = r);
	}
	let f = ck.valid;
	for (let i of cb(t.validator(c, u), u, t, e)) i.explanation = r.message, f = ck.not_valid, yield [i, void 0];
	for (let [e, d, p] of t.entries(c, u)) for (let t of cw(d, p, {
		path: void 0 === e ? i : [...i, e],
		branch: void 0 === e ? o : [...o, d],
		node: void 0 === e ? a : {
			current: p,
			parent: a
		},
		coerce: l,
		mask: s,
		message: r.message
	})) t[0] ? (f = null != t[0].refinement ? ck.not_refined : ck.not_valid, yield [t[0], void 0]) : l && (d = t[1], void 0 === e ? c = d : c instanceof Map ? c.set(e, d) : c instanceof Set ? c.add(d) : uj(c) && (c[e] = d));
	if (f !== ck.not_valid) for (let i of cb(t.refiner(c, u), u, t, e)) i.explanation = r.message, f = ck.not_refined, yield [i, void 0];
	f === ck.valid && (yield [void 0, c]);
}
var ck = ((w = ck || {})[w.valid = 0] = "valid", w[w.not_refined = 1] = "not_refined", w[w.not_valid = 2] = "not_valid", w);
let c_ = (e) => (...t) => {
	let r = e(...t), i = (e, t) => {
		let i = cm.get(e, t) ?? {};
		cm.define(e, t, {
			...i,
			type: r
		});
	};
	return i.toString = () => `@type:${r.type}`, new Proxy(i, {
		ownKeys: () => [...Object.getOwnPropertyNames(r), ...Object.getOwnPropertySymbols(r)],
		get: (e, t) => r[t]
	});
}, cC = (e) => (...t) => {
	let r = (r) => e(r, ...t);
	return new Proxy((e, t) => {
		cm.define(e, t, (e) => {
			(e.modifies ??= []).push({ modify: r });
		}, {});
	}, { get(e, t) {
		if ("modify" == t) return r;
	} });
};
var cS = class e {
	static RecordKey = Symbol("RecordKey");
	static meta = Symbol("meta");
	static optional = Symbol("optional");
	static underlying = Symbol("underlying");
	static unwrap = Symbol("unwrap");
	static extractSchema = (e) => new cP().toValue(e);
	static extractMeta = (t) => new cP().toValue(t.meta ?? t[e.meta]);
	static create(t, r, i) {
		let o, a = r ?? t[e.underlying]?.schema ?? {};
		return new Proxy({}, {
			ownKeys(e) {
				let r = /* @__PURE__ */ new Map();
				if (i) {
					if (t[i]) for (let e of Object.getOwnPropertyNames(t[i])) r.set(e, e);
					if (a && a[i]) for (let e of Object.getOwnPropertyNames(a[i])) r.set(e, e);
				} else {
					for (let e of Object.getOwnPropertyNames(t)) r.set(e, e);
					if (a) for (let e of Object.getOwnPropertyNames(a)) r.set(e, e);
				}
				return [...r.keys()];
			},
			get(r, l) {
				if (l === e.meta) return o ??= e.create(t, a, e.meta);
				if (i) {
					if (u$(t)) {
						let e = t?.[i]?.[l];
						if (!uI(e)) return e;
					}
					return a ? a?.[i]?.[l] : void 0;
				}
				if (u$(t)) {
					let e = t?.[l];
					if (!uI(e)) return e;
				}
				return a ? a[l] : void 0;
			}
		});
	}
	static schemaProp(e, t) {
		return cO(e.schema, t);
	}
	static metaProp(e, t) {
		return cA(e.schema, t);
	}
}, cO = (e, t) => {
	if (u$(e)) return e[t] ?? (e[cS.unwrap] ? cO(e[cS.unwrap]().schema, t) : void 0);
}, cA = (e, t) => {
	if (u$(e)) return e[cS.meta]?.[t] ?? (e[cS.unwrap] ? cA(e[cS.unwrap]().schema, t) : void 0);
}, cP = class {
	constructor(e = !1) {
		this.deref = e;
	}
	toValue(e) {
		if (e) {
			if (!uI(e.schema)) return this.toValue(e.schema);
			if (this.deref && e[cS.unwrap]) return this.toValue(e[cS.unwrap]());
			if (uL(e)) return this.toArray(e);
			if (e.constructor === Object) return this.toObject(e);
		}
		return e;
	}
	toObject(e) {
		let t = {};
		for (let r of Object.getOwnPropertyNames(e)) t[r] = this.toValue(e[r]);
		return t;
	}
	toArray(e) {
		let t = [];
		for (let r of e) t.push(this.toValue(r));
		return t;
	}
}, cM = class e {
	static parse(t) {
		if ("" === t) return [];
		if ("/" === t) return [""];
		if ("/" !== t.charAt(0)) throw Error("Invalid JSON pointer: " + t);
		let r = t.substring(1).split(/\//);
		return r.map((t, i) => e.unescape(t, i === r.length - 1));
	}
	static create(t = []) {
		return 0 === t.length ? "" : "/" + t.map(e.escape).join("/");
	}
	static unescape(e, t) {
		return "" == e && t ? cS.RecordKey : e.replace(/~1/g, "/").replace(/~0/g, "~");
	}
	static escape(e) {
		return e == cS.RecordKey ? "" : e.toString().replace(/~/g, "~0").replace(/\//g, "~1");
	}
	static get(t, r) {
		let i = Array.isArray(r) ? r : e.parse(r);
		for (let e = 0; e < i.length; e++) {
			let r = i[e];
			if (e > 0 && r == cS.RecordKey) return i[e - 1];
			if (!("object" == typeof t && r in t)) throw Error("Invalid reference token: " + r);
			t = t[r];
		}
		return t;
	}
}, cT = class e {
	static define = c_((t = () => !0) => new class extends e {
		validator(e, r) {
			return t(e, r);
		}
	}(null));
	static fromTypeObject = (t, r) => {
		let i = t.type ?? r ?? new e({});
		return t.modifies ? i.use(...t.modifies ?? []) : i;
	};
	[cv] = cv;
	schema;
	constructor(e) {
		if (e) {
			this.schema = cS.create(e);
			return;
		}
		this.schema = e ?? null;
	}
	get meta() {
		return this.schema ? this.schema[cS.meta] : {};
	}
	get type() {
		return this.schema?.type ?? "unknown";
	}
	refiner(e, t) {
		return [];
	}
	validator(e, t) {
		return [];
	}
	coercer(e, t) {
		if ("string" == typeof e) {
			let t = e.trim();
			if (t.length >= 2) {
				if (t.startsWith("{") && t.endsWith("}")) try {
					return JSON.parse(t);
				} catch (e) {}
				if (t.startsWith("[") && t.endsWith("]")) try {
					return JSON.parse(t);
				} catch (e) {}
			}
		}
		return e;
	}
	*entries(e, t = cg) {}
	validate(e, t = {}) {
		return cx(e, this, t);
	}
	create(e) {
		let t = cx(e, this, { coerce: !0 });
		if (t[0]) throw t[0];
		return t[1];
	}
	mask(e) {
		let t = cx(e, this, {
			coerce: !0,
			mask: !0
		});
		if (t[0]) throw t[0];
		return t[1];
	}
	use(...e) {
		return e.reduce((e, t) => t.modify(e), this);
	}
	optional() {
		return cD.create(this);
	}
	default(e) {
		return cI.create(this, e);
	}
}, cE = class e extends cT {
	static of(t, r) {
		return new e({
			...r,
			[cS.underlying]: t
		});
	}
	static refine(t, r, i) {
		return new class extends e {
			*refiner(e, o) {
				for (let a of (yield* this.unwrap.refiner(e, o), cb(r(e, o), o, t, e))) yield {
					...a,
					refinement: Object.keys(i).join(",")
				};
			}
		}({
			...i,
			[cS.underlying]: t
		});
	}
	get unwrap() {
		let e = this.schema[cS.unwrap];
		return e ? e() : this.schema[cS.underlying];
	}
	get type() {
		return this.unwrap.type;
	}
	*entries(e, t = cg) {
		yield* this.unwrap.entries(e, {
			...t,
			node: {
				current: this,
				parent: t.node
			}
		});
	}
	validator(e, t) {
		return cb(this.unwrap.validator(e, t), t, this, e);
	}
	refiner(e, t) {
		return cb(this.unwrap.refiner(e, t), t, this, e);
	}
	coercer(e, t) {
		return this.unwrap.coercer(e, t);
	}
}, cI = class e extends cE {
	static create = c_((t, r) => new e({
		default: r,
		[cS.underlying]: t
	}));
	coercer(e, t) {
		return void 0 === e ? this.schema.default : super.unwrap.coercer(e, t);
	}
}, cD = class e extends cE {
	static create = c_((t) => new e({
		[cS.underlying]: t,
		[cS.optional]: t
	}));
	refiner(e, t) {
		return void 0 === e || super.unwrap.refiner(e, t);
	}
	validator(e, t) {
		return void 0 === e || super.unwrap.validator(e, t);
	}
}, cj = class e extends cE {
	static create = c_((t, r) => new e({
		$ref: t,
		[cS.unwrap]: r
	}));
}, c$ = class e extends cT {
	static create = c_(() => new e());
	constructor() {
		super({});
	}
	get type() {
		return "any";
	}
	validator() {
		return !0;
	}
}, cL = class e extends cT {
	static create = c_(() => new e({ type: "null" }));
	get type() {
		return "null";
	}
	validator(e, t) {
		return uD(e);
	}
	coercer(e, t) {
		return e;
	}
}, cR = class e extends cT {
	static create = c_(() => new e({ type: "string" }));
	get type() {
		return this.schema.type;
	}
	validator(e, t) {
		return "string" == typeof e;
	}
	coercer(e, t) {
		return uI(e) || uD(e) ? e : String(e);
	}
}, cN = class e extends cT {
	static create = c_(() => new e({ type: "number" }));
	get type() {
		return this.schema.type;
	}
	validator(e, t) {
		return uR(e);
	}
	coercer(e, t) {
		try {
			let t = void 0 != e ? parseFloat(String(e)) : void 0;
			if (uR(t)) return t;
		} catch (e) {}
	}
}, cF = class e extends cT {
	static create = c_(() => new e({ type: "integer" }));
	get type() {
		return this.schema.type;
	}
	validator(e, t) {
		return uN(e);
	}
	coercer(e, t) {
		try {
			let t = void 0 != e ? parseInt(String(e)) : void 0;
			return uN(t) ? t : void 0;
		} catch (e) {
			return;
		}
	}
}, cz = class e extends cT {
	static create = c_(() => new e({ type: "boolean" }));
	get type() {
		return this.schema.type;
	}
	validator(e, t) {
		return "boolean" == typeof e;
	}
	coercer(e, t) {
		try {
			return void 0 != e ? "true" === String(e) : void 0;
		} catch (e) {
			return;
		}
	}
}, cV = class e extends cT {
	static create = c_(() => new e({
		type: "string",
		format: "binary"
	}));
	get type() {
		return "binary";
	}
	validator(e, t) {
		return e instanceof File || e instanceof Blob;
	}
	coercer(e, t) {
		return e;
	}
}, cB = class e extends cT {
	static create = c_(e.createEnum);
	static createEnum(t) {
		return new e({ enum: t });
	}
	static literal = c_((t) => new e({ enum: [t] }));
	static nativeEnum = c_((t) => new e({ enum: Object.values(t) }));
	get type() {
		return "enums";
	}
	validator(e, t) {
		return this.schema.enum.includes(e);
	}
	coercer(e, t) {
		return e;
	}
}, cH = class e extends cT {
	static create = c_(() => new e(!1));
	get type() {
		return "never";
	}
	validator(e, t) {
		return !1;
	}
	coercer(e, t) {
		return e;
	}
}, cW = class e extends cT {
	static create(t) {
		let r = (e = {}) => {
			let t = [];
			for (let [r, i] of Object.entries(e)) cS.schemaProp(i, cS.optional) || t.push(r);
			return t;
		};
		return c_(() => {
			if (t) {
				if (uF(t)) {
					let i = new t(), o = {};
					for (let [e, t] of Object.entries(i)) o[e] = cB.literal(t);
					for (let e of cm.getOwnPropertyNames(i)) {
						let t = cm.get(i, e);
						if (t) {
							let r = cT.fromTypeObject(t, o[e]);
							e in o ? o[e] = r.default(o[e].schema?.enum?.[0]) : o[e] = r;
						}
					}
					return new e({
						type: "object",
						properties: o,
						required: r(o),
						additionalProperties: cH.create()
					});
				}
				return new e({
					type: "object",
					properties: t,
					required: r(t),
					additionalProperties: cH.create()
				});
			}
			return new e({
				type: "object",
				properties: {},
				required: [],
				additionalProperties: cH.create()
			});
		})();
	}
	get type() {
		return this.schema.type;
	}
	*entries(e, t = cg) {
		if (uj(e)) {
			let r = new Set(Object.keys(e));
			if (this.schema.properties) for (let t in this.schema.properties) r.delete(t), yield [
				t,
				e[t],
				this.schema.properties[t]
			];
			if (t.node?.current.type !== "intersection") for (let t of r) yield [
				t,
				e[t],
				this.schema.additionalProperties
			];
		}
	}
	validator(e, t) {
		return uj(e);
	}
	coercer(e, t) {
		if (uj(e)) {
			let r = { ...e };
			if (t.mask) {
				let e = this.schema.properties;
				if (e) for (let t in r) void 0 === e[t] && delete r[t];
			}
			return r;
		}
		return super.coercer(e, t);
	}
}, cU = class e extends cT {
	static create = c_((t, r) => new e({
		type: "object",
		propertyNames: t,
		additionalProperties: r
	}));
	get type() {
		return "record";
	}
	*entries(e) {
		if (uj(e)) for (let [t, r] of Object.entries(e)) yield [
			cS.RecordKey,
			t,
			this.schema.propertyNames
		], yield [
			t,
			r,
			this.schema.additionalProperties
		];
	}
	validator(e) {
		return uj(e);
	}
}, cq = class e extends cT {
	static create = c_((t) => new e({
		type: "array",
		items: t
	}));
	get type() {
		return this.schema.type;
	}
	*entries(e, t = cg) {
		if (Array.isArray(e)) for (let [t, r] of e.entries()) yield [
			t,
			r,
			this.schema.items
		];
	}
	validator(e) {
		return uL(e);
	}
	coercer(e) {
		return uL(e) ? e.slice() : e;
	}
}, cK = class e extends cT {
	static create = c_((t) => new e({
		type: "array",
		items: t
	}));
	get type() {
		return "tuple";
	}
	*entries(e, t) {
		if (uL(e)) {
			let t = Math.max(this.schema.items.length, e.length);
			for (let r = 0; r < t; r++) yield [
				r,
				e[r],
				this.schema.items[r] ?? cH.create()
			];
		}
	}
	validator(e) {
		return uL(e) && e.length === this.schema.items.length;
	}
	coercer(e) {
		return uL(e) ? e.slice() : e;
	}
}, cG = class e extends cT {
	static create = c_((...t) => new e({ allOf: t }));
	get type() {
		return "intersection";
	}
	*entries(e, t = cg) {
		for (let r of this.schema.allOf) yield* r.entries(e, t);
	}
	*validator(e, t) {
		for (let r of this.schema.allOf) yield* cb(r.validator(e, t), t, this, e);
	}
	*refiner(e, t) {
		for (let r of this.schema.allOf) yield* cb(r.refiner(e, t), t, this, e);
	}
}, cJ = class e extends cT {
	static create = c_((...t) => new e({ oneOf: t }));
	static discriminatorMapping(t, ...r) {
		return c_(() => {
			let i = [];
			if (1 == r.length && r[0].constructor == Object) for (let [e, o] of Object.entries(r[0])) if (cS.schemaProp(o, "$ref")) i.push(o);
			else {
				let r = { [t]: cB.literal(e) };
				for (let [e, t, i] of o.entries({}, cg)) r[String(e)] = i;
				i.push(cW.create(r));
			}
			else for (let e of r) uF(e) && i.push(cW.create(e));
			return new e({
				oneOf: i,
				discriminator: { propertyName: t }
			});
		})();
	}
	_discriminatorPropName;
	discriminatorPropType(e) {
		return this._discriminatorPropName ??= (() => {
			let t = this.schema.discriminator?.propertyName ?? "", r = [], i = [];
			for (let e of this.schema.oneOf) {
				let o = cS.schemaProp(e, "properties")[t];
				if (!o) continue;
				let a = o.schema.enum;
				a && r.push(...a), i.push(o.meta);
			}
			return cE.of(cB.create(r), { [cS.meta]: cS.create(i[0], e.node?.current.meta ?? {}) });
		})();
	}
	_discriminatorMappingProps = /* @__PURE__ */ new Map();
	discriminatorMapping(e, t, r) {
		if (this._discriminatorMappingProps.get(t)) return this._discriminatorMappingProps.get(t);
		if ((this.discriminatorPropType(r)?.schema?.enum ?? []).includes(t)) {
			let r = this.schema.oneOf.find((r) => {
				let i = cS.schemaProp(r, "properties")[e];
				if (i) {
					let [e, r] = i.validate(t);
					return !e;
				}
				return !1;
			});
			if (r) {
				if (!this._discriminatorMappingProps.has(t)) {
					let i = {};
					for (let [t, o] of Object.entries(cS.schemaProp(r, "properties"))) t !== e && (i[t] = o);
					this._discriminatorMappingProps.set(t, i);
				}
				return this._discriminatorMappingProps.get(t);
			}
		}
		return {};
	}
	*entries(e, t = cg) {
		if (this.schema.discriminator) {
			let r = this.schema.discriminator.propertyName, i = e?.[r];
			yield* cW.create({
				[r]: this.discriminatorPropType(t),
				...this.discriminatorMapping(r, i, t)
			}).entries(e, t);
		}
	}
	get type() {
		return "union";
	}
	coercer(e) {
		for (let t of this.schema.oneOf) {
			let [r, i] = cx(e, t, { coerce: !0 });
			if (!r) return i;
		}
		return e;
	}
	validator(e, t) {
		if (this.schema.discriminator) {
			let r = this.schema.discriminator.propertyName, i = e?.[r];
			return cW.create({
				[r]: this.discriminatorPropType(t),
				...this.discriminatorMapping(r, i, t)
			}).validator(e, t);
		}
		let r = [];
		for (let i of this.schema.oneOf) {
			let [ ...o] = cw(e, i, t), [a] = o;
			if (a && !a[0]) return [];
			for (let [e] of o) e && r.push(e);
		}
		return [`Expected the value to satisfy a union of \`${this.schema.oneOf.map((e) => e.type).join(" | ")}\`, but received: ${e}`, ...r];
	}
}, cZ = t({
	annotate: () => fx,
	any: () => cY,
	array: () => fc,
	binary: () => fr,
	boolean: () => fn,
	custom: () => fg,
	defaults: () => fv,
	discriminatorMapping: () => fm,
	enums: () => fi,
	exclusiveMaximum: () => fe,
	exclusiveMinimum: () => c8,
	integer: () => c6,
	intersection: () => fp,
	literal: () => fa,
	maxItems: () => fd,
	maxLength: () => c4,
	maximum: () => c7,
	minItems: () => ff,
	minLength: () => c2,
	minimum: () => c9,
	multipleOf: () => ft,
	nativeEnum: () => fo,
	never: () => cQ,
	nil: () => c0,
	number: () => c5,
	object: () => fl,
	optional: () => fb,
	pattern: () => c3,
	record: () => fs,
	ref: () => cX,
	refine: () => fy,
	string: () => c1,
	tuple: () => fu,
	union: () => fh
});
let cX = cj.create, cY = c$.create, cQ = cH.create, c0 = cL.create, c1 = cR.create, c2 = cC((e, t, r) => cE.refine(e, (e) => !!e && e.length >= t || (r ?? `Expected string value length great than or equal ${t}, but received "${e}"`), { minLength: t })), c4 = cC((e, t, r) => cE.refine(e, (e) => !!e && e.length <= t || (r ?? `Expected string value length less than or equal ${t}, but received "${e}"`), { maxLength: t })), c3 = cC((e, t, r) => {
	let i = cE.refine(e, (i) => !!t.test(i) || (r ?? `Expected a ${e.type} matching \`/${t.source}/\` but received "${i}"`), { pattern: t.source });
	return r ? i.use(fx({ "x-pattern-err-msg": r })) : i;
}), c5 = cN.create, c6 = cF.create, c9 = cC((e, t, r) => cE.refine(e, (e) => e >= t || (r ?? `Expected value great than or equal ${t}, but received "${e}"`), { minimum: t })), c8 = cC((e, t, r) => cE.refine(e, (e) => e > t || (r ?? `Expected value great than ${t}, but received "${e}"`), { exclusiveMinimum: t })), c7 = cC((e, t, r) => cE.refine(e, (e) => e <= t || (r ?? `Expected value less than or equal ${t}, but received "${e}"`), { maximum: t })), fe = cC((e, t, r) => cE.refine(e, (e) => e < t || (r ?? `Expected value less than or equal ${t}, but received "${e}"`), { exclusiveMaximum: t })), ft = cC((e, t, r) => cE.refine(e, (e) => e % t == 0 || (r ?? `Expected value multiple of ${t}, but received "${e}"`), { multipleOf: t })), fn = cz.create, fr = cV.create, fi = cB.create, fo = cB.nativeEnum, fa = cB.literal, fl = cW.create, fs = cU.create, fu = cK.create, fc = cq.create, ff = cC((e, t, r) => cE.refine(e, (e) => !!uL(e) && e.length >= t || (r ?? `Expected array value at least ${t}, but received "${e?.length}"`), { minItems: t })), fd = cC((e, t, r) => cE.refine(e, (e) => !!uL(e) && e.length <= t || (r ?? `Expected array value  ${t}, but received "${e?.length}"`), { maxItems: t })), fp = cG.create, fh = cJ.create, fm = cJ.discriminatorMapping, fg = cT.define, fy = cE.refine, fv = cC((e, t) => cI.create(e, t)), fb = cC((e) => cD.create(e)), fx = cC((e, t) => cE.of(e, { [cS.meta]: t })), fw = (e) => e.split("/")?.findLast(() => !0) ?? "";
var fk = class e {
	static decode(t, r) {
		return !1 === t ? cQ() : new e(r).decode(t);
	}
	def = /* @__PURE__ */ new Map();
	constructor(e) {
		this.resolveRef = e;
	}
	decode(e) {
		let t = structuredClone(e), r = this._decode(t), i = !1;
		if (t?.title && (r = r.use(fx({ title: t?.title })), i = !0), t?.description) if (i) r = r.use(fx({ description: t?.description }));
		else {
			let [e, ...i] = t?.description.split(/[.\n]/);
			r = r.use(fx({
				title: e,
				description: i ? i.join("\n").trim() : void 0
			}));
		}
		if (t) {
			for (let e of fT) if (!uI(t[e])) {
				if ("pattern" == e) {
					r = r.use(c3(new RegExp(t[e]), t["x-pattern-err-msg"])), delete t[e];
					continue;
				}
				let i = cZ[e];
				i && (r = r.use(i(t[e])), delete t[e]);
			}
			delete t.title, delete t.description, Object.keys(t).length > 0 && (r = r.use(fx(t)));
		}
		return r;
	}
	ref = (e) => {
		let t = this.def.get(e);
		if (t) return t;
		throw Error(`undefined type ${e}`);
	};
	_decode(e) {
		let t = fI(e);
		if (t.$ref) {
			let [e, r] = this.resolveRef(t.$ref);
			return this.def.has(r) || (this.def.set(r, cY()), this.def.set(r, this.decode(e))), cX(r, () => this.ref(r));
		}
		if (t.enum) {
			let e = fi(t.enum);
			return t["x-enum-labels"] ? e.use(fx({ enumLabels: t["x-enum-labels"] })) : e;
		}
		if (t.discriminator) {
			let e = t.discriminator.propertyName;
			if (e) {
				let r = {};
				if (t.discriminator.mapping) {
					let e = t.discriminator.mapping;
					if (e) for (let t of Object.keys(e).toSorted()) r[t] = this.decode(e[t]);
				}
				if (t.oneOf) for (let i of t.oneOf) {
					let t = this.decode(i), o = cS.schemaProp(t, "properties")?.[e];
					if (o) {
						let e = cS.schemaProp(o, "enum")?.[0];
						uI(e) || (r[`${e}`] = t);
					}
				}
				return fm(e, r);
			}
		}
		if (t.oneOf) {
			let e = t.oneOf.map((e) => this.decode(e));
			return 1 === e.length ? e[0] : fh(...e);
		}
		if (t.allOf) {
			let e = t.allOf.map((e) => this.decode(e));
			return 1 === e.length ? e[0] : fp(...e);
		}
		if (f_(t)) {
			if (t.properties) {
				let e = t.required ?? [], r = {};
				for (let [i, o] of Object.entries(t.properties)) {
					let t = this.decode(o);
					e.includes(i) || (t = t.optional()), r[i] = t;
				}
				return fl(r);
			}
			let e = t.additionalProperties ?? {};
			return e ? fs(this.decode(t.propertyNames ?? { type: "string" }), this.decode(e)) : fl();
		}
		return fS(t) ? uL(t.items) ? fu(t.items.map((e) => this.decode(e))) : fc(this.decode(t.items)) : fA(t) ? "binary" === t.format ? fr() : c1() : fO(t) ? "integer" === t.type ? c6() : c5() : fP(t) ? fn() : fC(t) ? c0() : cY();
	}
}, f_ = (e) => "object" === e.type, fC = (e) => "null" === e.type, fS = (e) => "array" === e.type, fO = (e) => "number" === e.type || "integer" === e.type, fA = (e) => "string" === e.type, fP = (e) => "boolean" === e.type, fM = {
	object: [
		"properties",
		"additionalProperties",
		"propertyNames",
		"maxProperties",
		"minProperties"
	],
	array: [
		"contains",
		"items",
		"additionalItems",
		"unevaluatedItems",
		"maxItems",
		"minItems",
		"uniqueItems",
		"maxContains",
		"minContains"
	],
	string: [
		"pattern",
		"contentMediaType",
		"contentEncoding",
		"contentSchema",
		"maxLength",
		"minLength"
	],
	number: [
		"maximum",
		"minimum",
		"multipleOf",
		"exclusiveMaximum",
		"exclusiveMinimum"
	]
};
let fT = [
	"maxProperties",
	"minProperties",
	"maxItems",
	"minItems",
	"uniqueItems",
	"pattern",
	"maxLength",
	"minLength",
	"maximum",
	"minimum",
	"multipleOf",
	"exclusiveMaximum",
	"exclusiveMinimum"
];
var fE = (e, t) => t.some((t) => Object.hasOwn(e, t)), fI = (e = {}) => {
	if ("boolean" == typeof e) return {};
	if (!e.type) {
		for (let t in fM) if (fE(e, fM[t])) {
			e.type = t;
			break;
		}
	}
	e.const && (e.enum = [e.const]);
	let t = (t) => {
		e[t] && (e[t] = e[t].filter((r) => {
			let i = fI(r);
			return !!fE(i, [
				"type",
				"$ref",
				"$id",
				"oneOf",
				"anyOf",
				"allOf"
			]) || ("allOf" === t && Object.assign(e, i), !1);
		}), e[t]?.length === 0 && (e[t] = void 0));
	};
	return t("allOf"), t("anyOf"), t("oneOf"), e;
}, fD = Symbol("component");
let fj = (e) => nt(e) && e[fD] === fD, f$ = (e) => {
	let t;
	return !!(t = Object.values(e)[0]) && t[cv] == cv;
};
function fL(...e) {
	let t, r = {}, i = {};
	for (let o of e) {
		if (eA(o)) {
			t = o;
			continue;
		}
		ig(t) ? r = o : i = o;
	}
	let [o, a] = iH(Object.keys(r), (e) => /^on[A-Z]/.test(e)), l = {
		emits: [...o.map((e) => iy(e.slice(2))), ...i.emits ?? []],
		props: [...a.filter((e) => !/^[$]/.test(e)), ...i.props ?? []].reduce((e, t) => {
			let i = r[t];
			return i ? {
				...e,
				[t]: {
					default() {
						try {
							return i.create(void 0);
						} catch (e) {
							console.log(e);
						}
					},
					validator: (e) => i.validate(e)
				}
			} : {
				...e,
				[t]: { default() {} }
			};
		}, {})
	};
	return {
		...i,
		get name() {
			return this.displayName ?? i.displayName ?? i.name;
		},
		set name(n) {
			i.name = n;
		},
		setup: (e, r) => t(e, r),
		emits: l.emits,
		props: l.props,
		inheritAttrs: i.inheritAttrs,
		[fD]: fD
	};
}
let fR = (e, t) => new Proxy(e, { get: (e, r) => t[r] ?? e[r] });
var fN = "undefined" != typeof document;
function fF(e) {
	return "object" == typeof e || "displayName" in e || "props" in e || "__vccOpts" in e;
}
var fz = Object.assign;
function fV(e, t) {
	let r = {};
	for (let i in t) {
		let o = t[i];
		r[i] = fH(o) ? o.map(e) : e(o);
	}
	return r;
}
var fB = () => {}, fH = Array.isArray, fW = /#/g, fU = /&/g, fq = /\//g, fK = /=/g, fG = /\?/g, fJ = /\+/g, fZ = /%5B/g, fX = /%5D/g, fY = /%5E/g, fQ = /%60/g, f0 = /%7B/g, f1 = /%7C/g, f2 = /%7D/g, f4 = /%20/g;
function f3(e) {
	return encodeURI("" + e).replace(f1, "|").replace(fZ, "[").replace(fX, "]");
}
function f5(e) {
	return f3(e).replace(fJ, "%2B").replace(f4, "+").replace(fW, "%23").replace(fU, "%26").replace(fQ, "`").replace(f0, "{").replace(f2, "}").replace(fY, "^");
}
function f6(e) {
	return null == e ? "" : f3(e).replace(fW, "%23").replace(fG, "%3F").replace(fq, "%2F");
}
function f9(e) {
	try {
		return decodeURIComponent("" + e);
	} catch (e) {}
	return "" + e;
}
var f8 = /\/$/;
function f7(e, t, r = "/") {
	let i, o = {}, a = "", l = "", s = t.indexOf("#"), u = t.indexOf("?");
	return s < u && s >= 0 && (u = -1), u > -1 && (i = t.slice(0, u), o = e(a = t.slice(u + 1, s > -1 ? s : t.length))), s > -1 && (i = i || t.slice(0, s), l = t.slice(s, t.length)), {
		fullPath: (i = function(e, t) {
			let r, i;
			if (e.startsWith("/")) return e;
			if (!e) return t;
			let o = t.split("/"), a = e.split("/"), l = a[a.length - 1];
			(".." === l || "." === l) && a.push("");
			let s = o.length - 1;
			for (r = 0; r < a.length; r++) if ("." !== (i = a[r])) if (".." === i) s > 1 && s--;
			else break;
			return o.slice(0, s).join("/") + "/" + a.slice(r).join("/");
		}(null != i ? i : t, r)) + (a && "?") + a + l,
		path: i,
		query: o,
		hash: f9(l)
	};
}
function de(e, t) {
	return t && e.toLowerCase().startsWith(t.toLowerCase()) ? e.slice(t.length) || "/" : e;
}
function dt(e, t) {
	return (e.aliasOf || e) === (t.aliasOf || t);
}
function dn(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let o in e) {
		var r, i;
		if (r = e[o], i = t[o], fH(r) ? !dr(r, i) : fH(i) ? !dr(i, r) : r !== i) return !1;
	}
	return !0;
}
function dr(e, t) {
	return fH(t) ? e.length === t.length && e.every((e, r) => e === t[r]) : 1 === e.length && e[0] === t;
}
var di = {
	path: "/",
	name: void 0,
	params: {},
	query: {},
	hash: "",
	fullPath: "/",
	matched: [],
	meta: {},
	redirectedFrom: void 0
};
(k = H || (H = {})).pop = "pop", k.push = "push", (_ = W || (W = {})).back = "back", _.forward = "forward", _.unknown = "";
var da = /^[^#]+#/;
function dl(e, t) {
	return e.replace(da, "#") + t;
}
var ds = () => ({
	left: window.scrollX,
	top: window.scrollY
});
function du(e, t) {
	return (history.state ? history.state.position - t : -1) + e;
}
var dc = /* @__PURE__ */ new Map();
function df(e, t) {
	let { pathname: r, search: i, hash: o } = t, a = e.indexOf("#");
	if (a > -1) {
		let t = o.includes(e.slice(a)) ? e.slice(a).length : 1, r = o.slice(t);
		return "/" !== r[0] && (r = "/" + r), de(r, "");
	}
	return de(r, e) + i + o;
}
function dd(e, t, r, i = !1, o = !1) {
	return {
		back: e,
		current: t,
		forward: r,
		replaced: i,
		position: window.history.length,
		scroll: o ? ds() : null
	};
}
function dp(e) {
	return "string" == typeof e || "symbol" == typeof e;
}
var dh = Symbol("");
function dm(e, t) {
	return fz(Error(), {
		type: e,
		[dh]: !0
	}, t);
}
function dg(e, t) {
	return e instanceof Error && dh in e && (null == t || !!(e.type & t));
}
(C = U || (U = {}))[C.aborted = 4] = "aborted", C[C.cancelled = 8] = "cancelled", C[C.duplicated = 16] = "duplicated";
var dy = "[^/]+?", dv = {
	sensitive: !1,
	strict: !1,
	start: !0,
	end: !0
}, db = /[.+*?^${}()[\]/\\]/g;
function dx(e, t) {
	let r = 0, i = e.score, o = t.score;
	for (; r < i.length && r < o.length;) {
		let e = function(e, t) {
			let r = 0;
			for (; r < e.length && r < t.length;) {
				let i = t[r] - e[r];
				if (i) return i;
				r++;
			}
			return e.length < t.length ? 1 === e.length && 80 === e[0] ? -1 : 1 : e.length > t.length ? 1 === t.length && 80 === t[0] ? 1 : -1 : 0;
		}(i[r], o[r]);
		if (e) return e;
		r++;
	}
	if (1 === Math.abs(o.length - i.length)) {
		if (dw(i)) return 1;
		if (dw(o)) return -1;
	}
	return o.length - i.length;
}
function dw(e) {
	let t = e[e.length - 1];
	return e.length > 0 && t[t.length - 1] < 0;
}
var dk = {
	type: 0,
	value: ""
}, d_ = /[a-zA-Z0-9_]/;
function dC(e, t) {
	let r = {};
	for (let i of t) i in e && (r[i] = e[i]);
	return r;
}
function dS(e) {
	let t = {
		path: e.path,
		redirect: e.redirect,
		name: e.name,
		meta: e.meta || {},
		aliasOf: e.aliasOf,
		beforeEnter: e.beforeEnter,
		props: function(e) {
			let t = {}, r = e.props || !1;
			if ("component" in e) t.default = r;
			else for (let i in e.components) t[i] = "object" == typeof r ? r[i] : r;
			return t;
		}(e),
		children: e.children || [],
		instances: {},
		leaveGuards: /* @__PURE__ */ new Set(),
		updateGuards: /* @__PURE__ */ new Set(),
		enterCallbacks: {},
		components: "components" in e ? e.components || null : e.component && { default: e.component }
	};
	return Object.defineProperty(t, "mods", { value: {} }), t;
}
function dO(e) {
	for (; e;) {
		if (e.record.aliasOf) return !0;
		e = e.parent;
	}
	return !1;
}
function dA(e, t) {
	let r = {};
	for (let i in e) r[i] = i in t ? t[i] : e[i];
	return r;
}
function dP({ record: e }) {
	return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function dM(e) {
	let t = {};
	if ("" === e || "?" === e) return t;
	let r = ("?" === e[0] ? e.slice(1) : e).split("&");
	for (let e = 0; e < r.length; ++e) {
		let i = r[e].replace(fJ, " "), o = i.indexOf("="), a = f9(o < 0 ? i : i.slice(0, o)), l = o < 0 ? null : f9(i.slice(o + 1));
		if (a in t) {
			let e = t[a];
			fH(e) || (e = t[a] = [e]), e.push(l);
		} else t[a] = l;
	}
	return t;
}
function dT(e) {
	let t = "";
	for (let r in e) {
		let i = e[r];
		if (r = f5(r).replace(fK, "%3D"), null == i) {
			void 0 !== i && (t += (t.length ? "&" : "") + r);
			continue;
		}
		(fH(i) ? i.map((e) => e && f5(e)) : [i && f5(i)]).forEach((e) => {
			void 0 !== e && (t += (t.length ? "&" : "") + r, null != e && (t += "=" + e));
		});
	}
	return t;
}
var dE = Symbol(""), dI = Symbol(""), dD = Symbol(""), dj = Symbol(""), d$ = Symbol("");
function dL() {
	let e = [];
	return {
		add: function(t) {
			return e.push(t), () => {
				let r = e.indexOf(t);
				r > -1 && e.splice(r, 1);
			};
		},
		list: () => e.slice(),
		reset: function() {
			e = [];
		}
	};
}
function dR(e, t, r, i, o, a = (e) => e()) {
	let l = i && (i.enterCallbacks[o] = i.enterCallbacks[o] || []);
	return () => new Promise((s, u) => {
		let c = (e) => {
			if (!1 === e) u(dm(4, {
				from: r,
				to: t
			}));
			else if (e instanceof Error) u(e);
			else "string" == typeof e || e && "object" == typeof e ? u(dm(2, {
				from: t,
				to: e
			})) : (l && i.enterCallbacks[o] === l && "function" == typeof e && l.push(e), s());
		}, f = Promise.resolve(a(() => e.call(i && i.instances[o], t, r, c)));
		e.length < 3 && (f = f.then(c)), f.catch((e) => u(e));
	});
}
function dN(e, t, r, i, o = (e) => e()) {
	let a = [];
	for (let l of e) for (let e in l.components) {
		let s = l.components[e];
		if ("beforeRouteEnter" === t || l.instances[e]) if (fF(s)) {
			let u = (s.__vccOpts || s)[t];
			u && a.push(dR(u, r, i, l, e, o));
		} else {
			let u = s();
			a.push(() => u.then((a) => {
				if (!a) throw Error(`Couldn't resolve component "${e}" at "${l.path}"`);
				let s = a.__esModule || "Module" === a[Symbol.toStringTag] || a.default && fF(a.default) ? a.default : a;
				l.mods[e] = a, l.components[e] = s;
				let u = (s.__vccOpts || s)[t];
				return u && dR(u, r, i, l, e, o)();
			}));
		}
	}
	return a;
}
function dF(e) {
	let t = l6(dD), r = l6(dj), i = s1(() => {
		let r = aE(e.to);
		return t.resolve(r);
	}), o = s1(() => {
		let { matched: e } = i.value, { length: t } = e, o = e[t - 1], a = r.matched;
		if (!o || !a.length) return -1;
		let l = a.findIndex(dt.bind(null, o));
		if (l > -1) return l;
		let s = dV(e[t - 2]);
		return t > 1 && dV(o) === s && a[a.length - 1].path !== s ? a.findIndex(dt.bind(null, e[t - 2])) : l;
	}), a = s1(() => o.value > -1 && function(e, t) {
		for (let r in t) {
			let i = t[r], o = e[r];
			if ("string" == typeof i) {
				if (i !== o) return !1;
			} else if (!fH(o) || o.length !== i.length || i.some((e, t) => e !== o[t])) return !1;
		}
		return !0;
	}(r.params, i.value.params)), l = s1(() => o.value > -1 && o.value === r.matched.length - 1 && dn(r.params, i.value.params));
	return {
		route: i,
		href: s1(() => i.value.href),
		isActive: a,
		isExactActive: l,
		navigate: function(r = {}) {
			if (function(e) {
				if (!e.metaKey && !e.altKey && !e.ctrlKey && !e.shiftKey && !e.defaultPrevented && (void 0 === e.button || 0 === e.button)) {
					if (e.currentTarget && e.currentTarget.getAttribute) {
						let t = e.currentTarget.getAttribute("target");
						if (/\b_blank\b/i.test(t)) return;
					}
					return e.preventDefault && e.preventDefault(), !0;
				}
			}(r)) {
				let r = t[aE(e.replace) ? "replace" : "push"](aE(e.to)).catch(fB);
				return e.viewTransition && "undefined" != typeof document && "startViewTransition" in document && document.startViewTransition(() => r), r;
			}
			return Promise.resolve();
		}
	};
}
var dz = lv({
	name: "RouterLink",
	compatConfig: { MODE: 3 },
	props: {
		to: {
			type: [String, Object],
			required: !0
		},
		replace: Boolean,
		activeClass: String,
		exactActiveClass: String,
		custom: Boolean,
		ariaCurrentValue: {
			type: String,
			default: "page"
		},
		viewTransition: Boolean
	},
	useLink: dF,
	setup(e, { slots: t }) {
		let r = ag(dF(e)), { options: i } = l6(dD), o = s1(() => ({
			[dB(e.activeClass, i.linkActiveClass, "router-link-active")]: r.isActive,
			[dB(e.exactActiveClass, i.linkExactActiveClass, "router-link-exact-active")]: r.isExactActive
		}));
		return () => {
			var i;
			let a = t.default && (1 === (i = t.default(r)).length ? i[0] : i);
			return e.custom ? a : s2("a", {
				"aria-current": r.isExactActive ? e.ariaCurrentValue : null,
				href: r.href,
				onClick: r.navigate,
				class: o.value
			}, a);
		};
	}
});
function dV(e) {
	return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
var dB = (e, t, r) => null != e ? e : null != t ? t : r, dH = lv({
	name: "RouterView",
	inheritAttrs: !1,
	props: {
		name: {
			type: String,
			default: "default"
		},
		route: Object
	},
	compatConfig: { MODE: 3 },
	setup(e, { attrs: t, slots: r }) {
		let i = l6(d$), o = s1(() => e.route || i.value), a = l6(dI, 0), l = s1(() => {
			let e, t = aE(a), { matched: r } = o.value;
			for (; (e = r[t]) && !e.components;) t++;
			return t;
		}), s = s1(() => o.value.matched[l.value]);
		l5(dI, s1(() => l.value + 1)), l5(dE, s), l5(d$, o);
		let u = aP();
		return sg(() => [
			u.value,
			s.value,
			e.name
		], ([e, t, r], [i, o, a]) => {
			t && (t.instances[r] = e, o && o !== t && e && e === i && (t.leaveGuards.size || (t.leaveGuards = o.leaveGuards), t.updateGuards.size || (t.updateGuards = o.updateGuards))), !e || !t || o && dt(t, o) && i || (t.enterCallbacks[r] || []).forEach((t) => t(e));
		}, { flush: "post" }), () => {
			let i = o.value, a = e.name, l = s.value, c = l && l.components[a];
			if (!c) return dW(r.default, {
				Component: c,
				route: i
			});
			let f = l.props[a], d = s2(c, fz({}, f ? !0 === f ? i.params : "function" == typeof f ? f(i) : f : null, t, {
				onVnodeUnmounted: (e) => {
					e.component.isUnmounted && (l.instances[a] = null);
				},
				ref: u
			}));
			return dW(r.default, {
				Component: d,
				route: i
			}) || d;
		};
	}
});
function dW(e, t) {
	if (!e) return null;
	let r = e(t);
	return 1 === r.length ? r[0] : r;
}
var dU = function(e, t) {
	return (dU = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
		e.__proto__ = t;
	} || function(e, t) {
		for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
	})(e, t);
};
function dq(e, t) {
	if ("function" != typeof t && null !== t) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
	function r() {
		this.constructor = e;
	}
	dU(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}
function dK(e, t) {
	var r, i, o, a = {
		label: 0,
		sent: function() {
			if (1 & o[0]) throw o[1];
			return o[1];
		},
		trys: [],
		ops: []
	}, l = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
	return l.next = s(0), l.throw = s(1), l.return = s(2), "function" == typeof Symbol && (l[Symbol.iterator] = function() {
		return this;
	}), l;
	function s(s) {
		return function(u) {
			var c = [s, u];
			if (r) throw TypeError("Generator is already executing.");
			for (; l && (l = 0, c[0] && (a = 0)), a;) try {
				if (r = 1, i && (o = 2 & c[0] ? i.return : c[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, c[1])).done) return o;
				switch (i = 0, o && (c = [2 & c[0], o.value]), c[0]) {
					case 0:
					case 1:
						o = c;
						break;
					case 4: return a.label++, {
						value: c[1],
						done: !1
					};
					case 5:
						a.label++, i = c[1], c = [0];
						continue;
					case 7:
						c = a.ops.pop(), a.trys.pop();
						continue;
					default:
						if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
							a = 0;
							continue;
						}
						if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
							a.label = c[1];
							break;
						}
						if (6 === c[0] && a.label < o[1]) {
							a.label = o[1], o = c;
							break;
						}
						if (o && a.label < o[2]) {
							a.label = o[2], a.ops.push(c);
							break;
						}
						o[2] && a.ops.pop(), a.trys.pop();
						continue;
				}
				c = t.call(e, a);
			} catch (e) {
				c = [6, e], i = 0;
			} finally {
				r = o = 0;
			}
			if (5 & c[0]) throw c[1];
			return {
				value: c[0] ? c[1] : void 0,
				done: !0
			};
		};
	}
}
function dG(e) {
	var t = "function" == typeof Symbol && Symbol.iterator, r = t && e[t], i = 0;
	if (r) return r.call(e);
	if (e && "number" == typeof e.length) return { next: function() {
		return e && i >= e.length && (e = void 0), {
			value: e && e[i++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function dJ(e, t) {
	var r = "function" == typeof Symbol && e[Symbol.iterator];
	if (!r) return e;
	var i, o, a = r.call(e), l = [];
	try {
		for (; (void 0 === t || t-- > 0) && !(i = a.next()).done;) l.push(i.value);
	} catch (e) {
		o = { error: e };
	} finally {
		try {
			i && !i.done && (r = a.return) && r.call(a);
		} finally {
			if (o) throw o.error;
		}
	}
	return l;
}
function dZ(e, t, r) {
	if (r || 2 == arguments.length) for (var i, o = 0, a = t.length; o < a; o++) !i && o in t || (i || (i = Array.prototype.slice.call(t, 0, o)), i[o] = t[o]);
	return e.concat(i || Array.prototype.slice.call(t));
}
function dX(e) {
	return this instanceof dX ? (this.v = e, this) : new dX(e);
}
function dY(e) {
	return "function" == typeof e;
}
function dQ(e) {
	var t = e(function(e) {
		Error.call(e), e.stack = Error().stack;
	});
	return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
}
var d0 = dQ(function(e) {
	return function(t) {
		e(this), this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map(function(e, t) {
			return t + 1 + ") " + e.toString();
		}).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t;
	};
});
function d1(e, t) {
	if (e) {
		var r = e.indexOf(t);
		0 <= r && e.splice(r, 1);
	}
}
var d2 = function() {
	var e;
	function t(e) {
		this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null;
	}
	return t.prototype.unsubscribe = function() {
		if (!this.closed) {
			this.closed = !0;
			var e, t, r, i, o, a = this._parentage;
			if (a) if (this._parentage = null, Array.isArray(a)) try {
				for (var l = dG(a), s = l.next(); !s.done; s = l.next()) s.value.remove(this);
			} catch (t) {
				e = { error: t };
			} finally {
				try {
					s && !s.done && (t = l.return) && t.call(l);
				} finally {
					if (e) throw e.error;
				}
			}
			else a.remove(this);
			var u = this.initialTeardown;
			if (dY(u)) try {
				u();
			} catch (e) {
				o = e instanceof d0 ? e.errors : [e];
			}
			var c = this._finalizers;
			if (c) {
				this._finalizers = null;
				try {
					for (var f = dG(c), d = f.next(); !d.done; d = f.next()) {
						var p = d.value;
						try {
							d5(p);
						} catch (e) {
							o = null != o ? o : [], e instanceof d0 ? o = dZ(dZ([], dJ(o)), dJ(e.errors)) : o.push(e);
						}
					}
				} catch (e) {
					r = { error: e };
				} finally {
					try {
						d && !d.done && (i = f.return) && i.call(f);
					} finally {
						if (r) throw r.error;
					}
				}
			}
			if (o) throw new d0(o);
		}
	}, t.prototype.add = function(e) {
		var r;
		if (e && e !== this) if (this.closed) d5(e);
		else {
			if (e instanceof t) {
				if (e.closed || e._hasParent(this)) return;
				e._addParent(this);
			}
			(this._finalizers = null != (r = this._finalizers) ? r : []).push(e);
		}
	}, t.prototype._hasParent = function(e) {
		var t = this._parentage;
		return t === e || Array.isArray(t) && t.includes(e);
	}, t.prototype._addParent = function(e) {
		var t = this._parentage;
		this._parentage = Array.isArray(t) ? (t.push(e), t) : t ? [t, e] : e;
	}, t.prototype._removeParent = function(e) {
		var t = this._parentage;
		t === e ? this._parentage = null : Array.isArray(t) && d1(t, e);
	}, t.prototype.remove = function(e) {
		var r = this._finalizers;
		r && d1(r, e), e instanceof t && e._removeParent(this);
	}, (e = new t()).closed = !0, t.EMPTY = e, t;
}(), d4 = d2.EMPTY;
function d3(e) {
	return e instanceof d2 || e && "closed" in e && dY(e.remove) && dY(e.add) && dY(e.unsubscribe);
}
function d5(e) {
	dY(e) ? e() : e.unsubscribe();
}
var d6 = void 0, d9 = {
	setTimeout: function(e, t) {
		for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
		var o = d9.delegate;
		return (null == o ? void 0 : o.setTimeout) ? o.setTimeout.apply(o, dZ([e, t], dJ(r))) : setTimeout.apply(void 0, dZ([e, t], dJ(r)));
	},
	clearTimeout: function(e) {
		var t = d9.delegate;
		return ((null == t ? void 0 : t.clearTimeout) || clearTimeout)(e);
	},
	delegate: void 0
};
function d8(e) {
	d9.setTimeout(function() {
		throw e;
	});
}
function d7() {}
var pe = pt("C", void 0, void 0);
function pt(e, t, r) {
	return {
		kind: e,
		value: t,
		error: r
	};
}
function pr(e) {
	e();
}
var pi = function(e) {
	function t(t) {
		var r = e.call(this) || this;
		return r.isStopped = !1, t ? (r.destination = t, d3(t) && t.add(r)) : r.destination = pf, r;
	}
	return dq(t, e), t.create = function(e, t, r) {
		return new ps(e, t, r);
	}, t.prototype.next = function(e) {
		this.isStopped ? pc(pt("N", e, void 0), this) : this._next(e);
	}, t.prototype.error = function(e) {
		this.isStopped ? pc(pt("E", void 0, e), this) : (this.isStopped = !0, this._error(e));
	}, t.prototype.complete = function() {
		this.isStopped ? pc(pe, this) : (this.isStopped = !0, this._complete());
	}, t.prototype.unsubscribe = function() {
		this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this), this.destination = null);
	}, t.prototype._next = function(e) {
		this.destination.next(e);
	}, t.prototype._error = function(e) {
		try {
			this.destination.error(e);
		} finally {
			this.unsubscribe();
		}
	}, t.prototype._complete = function() {
		try {
			this.destination.complete();
		} finally {
			this.unsubscribe();
		}
	}, t;
}(d2);
Function.prototype.bind;
var pl = function() {
	function e(e) {
		this.partialObserver = e;
	}
	return e.prototype.next = function(e) {
		var t = this.partialObserver;
		if (t.next) try {
			t.next(e);
		} catch (e) {
			pu(e);
		}
	}, e.prototype.error = function(e) {
		var t = this.partialObserver;
		if (t.error) try {
			t.error(e);
		} catch (e) {
			pu(e);
		}
		else pu(e);
	}, e.prototype.complete = function() {
		var e = this.partialObserver;
		if (e.complete) try {
			e.complete();
		} catch (e) {
			pu(e);
		}
	}, e;
}(), ps = function(e) {
	function t(t, r, i) {
		var o, l = e.call(this) || this;
		return dY(t) || !t ? o = {
			next: null != t ? t : void 0,
			error: null != r ? r : void 0,
			complete: null != i ? i : void 0
		} : o = t, l.destination = new pl(o), l;
	}
	return dq(t, e), t;
}(pi);
function pu(e) {
	d8(e);
}
function pc(e, t) {}
var pf = {
	closed: !0,
	next: d7,
	error: function(e) {
		throw e;
	},
	complete: d7
}, pd = "function" == typeof Symbol && Symbol.observable || "@@observable";
function pp(e) {
	return e;
}
function ph(e) {
	return 0 === e.length ? pp : 1 === e.length ? e[0] : function(t) {
		return e.reduce(function(e, t) {
			return t(e);
		}, t);
	};
}
var pm = function() {
	function e(e) {
		e && (this._subscribe = e);
	}
	return e.prototype.lift = function(t) {
		var r = new e();
		return r.source = this, r.operator = t, r;
	}, e.prototype.subscribe = function(e, t, r) {
		var i = this, o = !function(e) {
			return e && e instanceof pi || e && dY(e.next) && dY(e.error) && dY(e.complete) && d3(e);
		}(e) ? new ps(e, t, r) : e;
		return pr(function() {
			var e = i.operator, t = i.source;
			o.add(e ? e.call(o, t) : t ? i._subscribe(o) : i._trySubscribe(o));
		}), o;
	}, e.prototype._trySubscribe = function(e) {
		try {
			return this._subscribe(e);
		} catch (t) {
			e.error(t);
		}
	}, e.prototype.forEach = function(e, t) {
		var r = this;
		return new (t = (pg(t)))(function(t, i) {
			var o = new ps({
				next: function(t) {
					try {
						e(t);
					} catch (e) {
						i(e), o.unsubscribe();
					}
				},
				error: i,
				complete: t
			});
			r.subscribe(o);
		});
	}, e.prototype._subscribe = function(e) {
		var t;
		return null == (t = this.source) ? void 0 : t.subscribe(e);
	}, e.prototype[pd] = function() {
		return this;
	}, e.prototype.pipe = function() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		return ph(e)(this);
	}, e.prototype.toPromise = function(e) {
		var t = this;
		return new (e = (pg(e)))(function(e, r) {
			var i;
			t.subscribe(function(e) {
				return i = e;
			}, function(e) {
				return r(e);
			}, function() {
				return e(i);
			});
		});
	}, e.create = function(t) {
		return new e(t);
	}, e;
}();
function pg(e) {
	var t;
	return null != (t = null != e ? e : d6) ? t : Promise;
}
function py(e) {
	return function(t) {
		if (dY(null == t ? void 0 : t.lift)) return t.lift(function(t) {
			try {
				return e(t, this);
			} catch (e) {
				this.error(e);
			}
		});
		throw TypeError("Unable to lift unknown Observable type");
	};
}
function pv(e, t, r, i, o) {
	return new pb(e, t, r, i, o);
}
var pb = function(e) {
	function t(t, r, i, o, a, l) {
		var s = e.call(this, t) || this;
		return s.onFinalize = a, s.shouldUnsubscribe = l, s._next = r ? function(e) {
			try {
				r(e);
			} catch (e) {
				t.error(e);
			}
		} : e.prototype._next, s._error = o ? function(e) {
			try {
				o(e);
			} catch (e) {
				t.error(e);
			} finally {
				this.unsubscribe();
			}
		} : e.prototype._error, s._complete = i ? function() {
			try {
				i();
			} catch (e) {
				t.error(e);
			} finally {
				this.unsubscribe();
			}
		} : e.prototype._complete, s;
	}
	return dq(t, e), t.prototype.unsubscribe = function() {
		var t;
		if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
			var r = this.closed;
			e.prototype.unsubscribe.call(this), r || null == (t = this.onFinalize) || t.call(this);
		}
	}, t;
}(pi), px = dQ(function(e) {
	return function() {
		e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
	};
}), pw = function(e) {
	function t() {
		var t = e.call(this) || this;
		return t.closed = !1, t.currentObservers = null, t.observers = [], t.isStopped = !1, t.hasError = !1, t.thrownError = null, t;
	}
	return dq(t, e), t.prototype.lift = function(e) {
		var t = new pk(this, this);
		return t.operator = e, t;
	}, t.prototype._throwIfClosed = function() {
		if (this.closed) throw new px();
	}, t.prototype.next = function(e) {
		var t = this;
		pr(function() {
			var r, i;
			if (t._throwIfClosed(), !t.isStopped) {
				t.currentObservers || (t.currentObservers = Array.from(t.observers));
				try {
					for (var o = dG(t.currentObservers), a = o.next(); !a.done; a = o.next()) a.value.next(e);
				} catch (e) {
					r = { error: e };
				} finally {
					try {
						a && !a.done && (i = o.return) && i.call(o);
					} finally {
						if (r) throw r.error;
					}
				}
			}
		});
	}, t.prototype.error = function(e) {
		var t = this;
		pr(function() {
			if (t._throwIfClosed(), !t.isStopped) {
				t.hasError = t.isStopped = !0, t.thrownError = e;
				for (var r = t.observers; r.length;) r.shift().error(e);
			}
		});
	}, t.prototype.complete = function() {
		var e = this;
		pr(function() {
			if (e._throwIfClosed(), !e.isStopped) {
				e.isStopped = !0;
				for (var t = e.observers; t.length;) t.shift().complete();
			}
		});
	}, t.prototype.unsubscribe = function() {
		this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
	}, Object.defineProperty(t.prototype, "observed", {
		get: function() {
			var e;
			return (null == (e = this.observers) ? void 0 : e.length) > 0;
		},
		enumerable: !1,
		configurable: !0
	}), t.prototype._trySubscribe = function(t) {
		return this._throwIfClosed(), e.prototype._trySubscribe.call(this, t);
	}, t.prototype._subscribe = function(e) {
		return this._throwIfClosed(), this._checkFinalizedStatuses(e), this._innerSubscribe(e);
	}, t.prototype._innerSubscribe = function(e) {
		var t = this, r = this.hasError, i = this.isStopped, o = this.observers;
		return r || i ? d4 : (this.currentObservers = null, o.push(e), new d2(function() {
			t.currentObservers = null, d1(o, e);
		}));
	}, t.prototype._checkFinalizedStatuses = function(e) {
		var t = this.hasError, r = this.thrownError, i = this.isStopped;
		t ? e.error(r) : i && e.complete();
	}, t.prototype.asObservable = function() {
		var e = new pm();
		return e.source = this, e;
	}, t.create = function(e, t) {
		return new pk(e, t);
	}, t;
}(pm), pk = function(e) {
	function t(t, r) {
		var i = e.call(this) || this;
		return i.destination = t, i.source = r, i;
	}
	return dq(t, e), t.prototype.next = function(e) {
		var t, r;
		null == (r = null == (t = this.destination) ? void 0 : t.next) || r.call(t, e);
	}, t.prototype.error = function(e) {
		var t, r;
		null == (r = null == (t = this.destination) ? void 0 : t.error) || r.call(t, e);
	}, t.prototype.complete = function() {
		var e, t;
		null == (t = null == (e = this.destination) ? void 0 : e.complete) || t.call(e);
	}, t.prototype._subscribe = function(e) {
		var t, r;
		return null != (r = null == (t = this.source) ? void 0 : t.subscribe(e)) ? r : d4;
	}, t;
}(pw), p_ = function(e) {
	function t(t) {
		var r = e.call(this) || this;
		return r._value = t, r;
	}
	return dq(t, e), Object.defineProperty(t.prototype, "value", {
		get: function() {
			return this.getValue();
		},
		enumerable: !1,
		configurable: !0
	}), t.prototype._subscribe = function(t) {
		var r = e.prototype._subscribe.call(this, t);
		return r.closed || t.next(this._value), r;
	}, t.prototype.getValue = function() {
		var e = this.hasError, t = this.thrownError, r = this._value;
		if (e) throw t;
		return this._throwIfClosed(), r;
	}, t.prototype.next = function(t) {
		e.prototype.next.call(this, this._value = t);
	}, t;
}(pw), pC = {
	now: function() {
		return (pC.delegate || Date).now();
	},
	delegate: void 0
}, pS = function(e) {
	function t(t, r) {
		return e.call(this) || this;
	}
	return dq(t, e), t.prototype.schedule = function(e, t) {
		return void 0 === t && (t = 0), this;
	}, t;
}(d2), pO = {
	setInterval: function(e, t) {
		for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
		var o = pO.delegate;
		return (null == o ? void 0 : o.setInterval) ? o.setInterval.apply(o, dZ([e, t], dJ(r))) : setInterval.apply(void 0, dZ([e, t], dJ(r)));
	},
	clearInterval: function(e) {
		var t = pO.delegate;
		return ((null == t ? void 0 : t.clearInterval) || clearInterval)(e);
	},
	delegate: void 0
}, pA = function(e) {
	function t(t, r) {
		var i = e.call(this, t, r) || this;
		return i.scheduler = t, i.work = r, i.pending = !1, i;
	}
	return dq(t, e), t.prototype.schedule = function(e, t) {
		if (void 0 === t && (t = 0), this.closed) return this;
		this.state = e;
		var r, i = this.id, o = this.scheduler;
		return null != i && (this.id = this.recycleAsyncId(o, i, t)), this.pending = !0, this.delay = t, this.id = null != (r = this.id) ? r : this.requestAsyncId(o, this.id, t), this;
	}, t.prototype.requestAsyncId = function(e, t, r) {
		return void 0 === r && (r = 0), pO.setInterval(e.flush.bind(e, this), r);
	}, t.prototype.recycleAsyncId = function(e, t, r) {
		if (void 0 === r && (r = 0), null != r && this.delay === r && !1 === this.pending) return t;
		null != t && pO.clearInterval(t);
	}, t.prototype.execute = function(e, t) {
		if (this.closed) return Error("executing a cancelled action");
		this.pending = !1;
		var r = this._execute(e, t);
		if (r) return r;
		!1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
	}, t.prototype._execute = function(e, t) {
		var r, i = !1;
		try {
			this.work(e);
		} catch (e) {
			i = !0, r = e || Error("Scheduled action threw falsy error");
		}
		if (i) return this.unsubscribe(), r;
	}, t.prototype.unsubscribe = function() {
		if (!this.closed) {
			var t = this.id, r = this.scheduler, i = r.actions;
			this.work = this.state = this.scheduler = null, this.pending = !1, d1(i, this), null != t && (this.id = this.recycleAsyncId(r, t, null)), this.delay = null, e.prototype.unsubscribe.call(this);
		}
	}, t;
}(pS), pP = function() {
	function e(t, r) {
		void 0 === r && (r = e.now), this.schedulerActionCtor = t, this.now = r;
	}
	return e.prototype.schedule = function(e, t, r) {
		return void 0 === t && (t = 0), new this.schedulerActionCtor(this, e).schedule(r, t);
	}, e.now = pC.now, e;
}(), pM = new (function(e) {
	function t(t, r) {
		void 0 === r && (r = pP.now);
		var i = e.call(this, t, r) || this;
		return i.actions = [], i._active = !1, i;
	}
	return dq(t, e), t.prototype.flush = function(e) {
		var t, r = this.actions;
		if (this._active) return void r.push(e);
		this._active = !0;
		do
			if (t = e.execute(e.state, e.delay)) break;
		while (e = r.shift());
		if (this._active = !1, t) {
			for (; e = r.shift();) e.unsubscribe();
			throw t;
		}
	}, t;
}(pP))(pA), pT = new pm(function(e) {
	return e.complete();
});
function pE(e) {
	return e && dY(e.schedule);
}
function pI(e) {
	return e[e.length - 1];
}
function pD(e) {
	return pE(pI(e)) ? e.pop() : void 0;
}
var pj = function(e) {
	return e && "number" == typeof e.length && "function" != typeof e;
};
function p$(e) {
	return dY(null == e ? void 0 : e.then);
}
function pL(e) {
	return Symbol.asyncIterator && dY(null == e ? void 0 : e[Symbol.asyncIterator]);
}
function pR(e) {
	return TypeError("You provided " + (null !== e && "object" == typeof e ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
var pN = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";
function pF(e) {
	return dY(null == e ? void 0 : e[pN]);
}
function pz(e) {
	return function(e, t, r) {
		if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
		var i, o = r.apply(e, t || []), a = [];
		return i = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), l("next"), l("throw"), l("return", function(e) {
			return function(t) {
				return Promise.resolve(t).then(e, c);
			};
		}), i[Symbol.asyncIterator] = function() {
			return this;
		}, i;
		function l(e, t) {
			o[e] && (i[e] = function(t) {
				return new Promise(function(r, i) {
					a.push([
						e,
						t,
						r,
						i
					]) > 1 || s(e, t);
				});
			}, t && (i[e] = t(i[e])));
		}
		function s(e, t) {
			try {
				var r;
				(r = o[e](t)).value instanceof dX ? Promise.resolve(r.value.v).then(u, c) : f(a[0][2], r);
			} catch (e) {
				f(a[0][3], e);
			}
		}
		function u(e) {
			s("next", e);
		}
		function c(e) {
			s("throw", e);
		}
		function f(e, t) {
			e(t), a.shift(), a.length && s(a[0][0], a[0][1]);
		}
	}(this, arguments, function() {
		var t, r, i;
		return dK(this, function(o) {
			switch (o.label) {
				case 0: t = e.getReader(), o.label = 1;
				case 1: o.trys.push([
					1,
					,
					9,
					10
				]), o.label = 2;
				case 2: return [4, dX(t.read())];
				case 3:
					if (i = (r = o.sent()).value, !r.done) return [3, 5];
					return [4, dX(void 0)];
				case 4: return [2, o.sent()];
				case 5: return [4, dX(i)];
				case 6: return [4, o.sent()];
				case 7: return o.sent(), [3, 2];
				case 8: return [3, 10];
				case 9: return t.releaseLock(), [7];
				case 10: return [2];
			}
		});
	});
}
function pV(e) {
	return dY(null == e ? void 0 : e.getReader);
}
function pB(e) {
	if (e instanceof pm) return e;
	if (null != e) {
		var t, r, i, o;
		if (dY(e[pd])) return t = e, new pm(function(e) {
			var r = t[pd]();
			if (dY(r.subscribe)) return r.subscribe(e);
			throw TypeError("Provided object does not correctly implement Symbol.observable");
		});
		if (pj(e)) return r = e, new pm(function(e) {
			for (var t = 0; t < r.length && !e.closed; t++) e.next(r[t]);
			e.complete();
		});
		if (p$(e)) return i = e, new pm(function(e) {
			i.then(function(t) {
				e.closed || (e.next(t), e.complete());
			}, function(t) {
				return e.error(t);
			}).then(null, d8);
		});
		if (pL(e)) return pH(e);
		if (pF(e)) return o = e, new pm(function(e) {
			var t, r;
			try {
				for (var i = dG(o), a = i.next(); !a.done; a = i.next()) {
					var l = a.value;
					if (e.next(l), e.closed) return;
				}
			} catch (e) {
				t = { error: e };
			} finally {
				try {
					a && !a.done && (r = i.return) && r.call(i);
				} finally {
					if (t) throw t.error;
				}
			}
			e.complete();
		});
		if (pV(e)) return pH(pz(e));
	}
	throw pR(e);
}
function pH(e) {
	return new pm(function(t) {
		(function(e, t) {
			var r, i, o, a, l, s, u, c;
			return l = this, s = void 0, u = void 0, c = function() {
				var l;
				return dK(this, function(s) {
					switch (s.label) {
						case 0: s.trys.push([
							0,
							5,
							6,
							11
						]), r = function(e) {
							if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
							var t, r = e[Symbol.asyncIterator];
							return r ? r.call(e) : (e = dG(e), t = {}, i("next"), i("throw"), i("return"), t[Symbol.asyncIterator] = function() {
								return this;
							}, t);
							function i(r) {
								t[r] = e[r] && function(t) {
									return new Promise(function(i, o) {
										var a = i, l = o, s = (t = e[r](t)).done;
										Promise.resolve(t.value).then(function(e) {
											a({
												value: e,
												done: s
											});
										}, l);
									});
								};
							}
						}(e), s.label = 1;
						case 1: return [4, r.next()];
						case 2:
							if ((i = s.sent()).done) return [3, 4];
							if (l = i.value, t.next(l), t.closed) return [2];
							s.label = 3;
						case 3: return [3, 1];
						case 4: return [3, 11];
						case 5: return o = { error: s.sent() }, [3, 11];
						case 6:
							if (s.trys.push([
								6,
								,
								9,
								10
							]), !(i && !i.done && (a = r.return))) return [3, 8];
							return [4, a.call(r)];
						case 7: s.sent(), s.label = 8;
						case 8: return [3, 10];
						case 9:
							if (o) throw o.error;
							return [7];
						case 10: return [7];
						case 11: return t.complete(), [2];
					}
				});
			}, new (u || (u = Promise))(function(e, t) {
				function r(e) {
					try {
						o(c.next(e));
					} catch (e) {
						t(e);
					}
				}
				function i(e) {
					try {
						o(c.throw(e));
					} catch (e) {
						t(e);
					}
				}
				function o(t) {
					var o;
					t.done ? e(t.value) : ((o = t.value) instanceof u ? o : new u(function(e) {
						e(o);
					})).then(r, i);
				}
				o((c = c.apply(l, s || [])).next());
			});
		})(e, t).catch(function(e) {
			return t.error(e);
		});
	});
}
function pW(e, t, r, i, o) {
	void 0 === i && (i = 0), void 0 === o && (o = !1);
	var a = t.schedule(function() {
		r(), o ? e.add(this.schedule(null, i)) : this.unsubscribe();
	}, i);
	if (e.add(a), !o) return a;
}
function pU(e, t) {
	return void 0 === t && (t = 0), py(function(r, i) {
		r.subscribe(pv(i, function(r) {
			return pW(i, e, function() {
				return i.next(r);
			}, t);
		}, function() {
			return pW(i, e, function() {
				return i.complete();
			}, t);
		}, function(r) {
			return pW(i, e, function() {
				return i.error(r);
			}, t);
		}));
	});
}
function pq(e, t) {
	return void 0 === t && (t = 0), py(function(r, i) {
		i.add(e.schedule(function() {
			return r.subscribe(i);
		}, t));
	});
}
function pK(e, t) {
	if (!e) throw Error("Iterable cannot be null");
	return new pm(function(r) {
		pW(r, t, function() {
			var i = e[Symbol.asyncIterator]();
			pW(r, t, function() {
				i.next().then(function(e) {
					e.done ? r.complete() : r.next(e.value);
				});
			}, 0, !0);
		});
	});
}
function pG(e, t) {
	return t ? function(e, t) {
		if (null != e) {
			if (dY(e[pd])) return pB(e).pipe(pq(t), pU(t));
			if (pj(e)) return new pm(function(r) {
				var i = 0;
				return t.schedule(function() {
					i === e.length ? r.complete() : (r.next(e[i++]), r.closed || this.schedule());
				});
			});
			if (p$(e)) return pB(e).pipe(pq(t), pU(t));
			if (pL(e)) return pK(e, t);
			if (pF(e)) return new pm(function(r) {
				var i;
				return pW(r, t, function() {
					i = e[pN](), pW(r, t, function() {
						var e, t, o;
						try {
							t = (e = i.next()).value, o = e.done;
						} catch (e) {
							r.error(e);
							return;
						}
						o ? r.complete() : r.next(t);
					}, 0, !0);
				}), function() {
					return dY(null == i ? void 0 : i.return) && i.return();
				};
			});
			if (pV(e)) return pK(pz(e), t);
		}
		throw pR(e);
	}(e, t) : pB(e);
}
function pJ() {
	for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
	var r = pD(e);
	return pG(e, r);
}
function pZ(e, t) {
	return py(function(r, i) {
		var o = 0;
		r.subscribe(pv(i, function(r) {
			i.next(e.call(t, r, o++));
		}));
	});
}
var pX = Array.isArray;
function pY(e) {
	return pZ(function(t) {
		return pX(t) ? e.apply(void 0, dZ([], dJ(t))) : e(t);
	});
}
var pQ = Array.isArray, p0 = Object.getPrototypeOf, p1 = Object.prototype, p2 = Object.keys;
function p4() {
	for (var e, t, r, i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
	var a = pD(i), l = dY(pI(i)) ? i.pop() : void 0, s = function(e) {
		if (1 === e.length) {
			var t, r = e[0];
			if (pQ(r)) return {
				args: r,
				keys: null
			};
			if ((t = r) && "object" == typeof t && p0(t) === p1) {
				var i = p2(r);
				return {
					args: i.map(function(e) {
						return r[e];
					}),
					keys: i
				};
			}
		}
		return {
			args: e,
			keys: null
		};
	}(i), u = s.args, c = s.keys;
	if (0 === u.length) return pG([], a);
	var f = new pm((e = u, t = a, void 0 === (r = c ? function(e) {
		return c.reduce(function(t, r, i) {
			return t[r] = e[i], t;
		}, {});
	} : pp) && (r = pp), function(i) {
		(function(e, t, r) {
			e ? pW(r, e, t) : t();
		})(t, function() {
			for (var o = e.length, a = Array(o), l = o, s = o, u = function(o) {
				(function(e, t, r) {
					e ? pW(r, e, t) : t();
				})(t, function() {
					var u = pG(e[o], t), c = !1;
					u.subscribe(pv(i, function(e) {
						a[o] = e, !c && (c = !0, s--), s || i.next(r(a.slice()));
					}, function() {
						--l || i.complete();
					}));
				}, i);
			}, c = 0; c < o; c++) u(c);
		}, i);
	}));
	return l ? f.pipe(pY(l)) : f;
}
function p3(e, t, r) {
	return (void 0 === r && (r = Infinity), dY(t)) ? p3(function(r, i) {
		return pZ(function(e, o) {
			return t(r, e, i, o);
		})(pB(e(r, i)));
	}, r) : ("number" == typeof t && (r = t), py(function(t, i) {
		var o, a, l, s, u, c, f, d, p;
		return o = r, l = [], s = 0, u = 0, c = !1, f = function() {
			!c || l.length || s || i.complete();
		}, d = function(e) {
			return s < o ? p(e) : l.push(e);
		}, p = function(t) {
			s++;
			var r = !1;
			pB(e(t, u++)).subscribe(pv(i, function(e) {
				a ? d(e) : i.next(e);
			}, function() {
				r = !0;
			}, void 0, function() {
				if (r) try {
					for (s--; l.length && s < o;) (function() {
						var e = l.shift();
						p(e);
					})();
					f();
				} catch (e) {
					i.error(e);
				}
			}));
		}, t.subscribe(pv(i, d, function() {
			c = !0, f();
		})), function() {};
	}));
}
function p5(e) {
	return void 0 === e && (e = Infinity), p3(pp, e);
}
var p6 = ["addListener", "removeListener"], p9 = ["addEventListener", "removeEventListener"], p8 = ["on", "off"];
function p7(e, t, r, i) {
	if (dY(r) && (i = r, r = void 0), i) return p7(e, t, r).pipe(pY(i));
	var o, a, l, s = dJ(dY((o = e).addEventListener) && dY(o.removeEventListener) ? p9.map(function(i) {
		return function(o) {
			return e[i](t, o, r);
		};
	}) : dY((a = e).addListener) && dY(a.removeListener) ? p6.map(he(e, t)) : dY((l = e).on) && dY(l.off) ? p8.map(he(e, t)) : [], 2), u = s[0], c = s[1];
	if (!u && pj(e)) return p3(function(e) {
		return p7(e, t, r);
	})(pB(e));
	if (!u) throw TypeError("Invalid event target");
	return new pm(function(e) {
		var t = function() {
			for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
			return e.next(1 < t.length ? t : t[0]);
		};
		return u(t), function() {
			return c(t);
		};
	});
}
function he(e, t) {
	return function(r) {
		return function(i) {
			return e[r](t, i);
		};
	};
}
function ht() {
	for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
	var i = pD(t), o = (e = Infinity, "number" == typeof pI(t) ? t.pop() : e);
	return t.length ? 1 === t.length ? pB(t[0]) : p5(o)(pG(t, i)) : pT;
}
function hn(e, t) {
	return py(function(r, i) {
		var o = 0;
		r.subscribe(pv(i, function(r) {
			return e.call(t, r, o++) && i.next(r);
		}));
	});
}
function hr(e) {
	return e <= 0 ? function() {
		return pT;
	} : py(function(t, r) {
		var i = 0;
		t.subscribe(pv(r, function(t) {
			++i <= e && (r.next(t), e <= i && r.complete());
		}));
	});
}
function hi() {
	return py(function(e, t) {
		e.subscribe(pv(t, d7));
	});
}
function ho(e, t) {
	void 0 === t && (t = pM);
	var r, i, o, a, l = (r = e, i = t, void 0 === r && (r = 0), void 0 === o && (o = pM), a = -1, null != i && (pE(i) ? o = i : a = i), new pm(function(e) {
		var t, i = (t = r) instanceof Date && !isNaN(t) ? r - o.now() : r;
		i < 0 && (i = 0);
		var l = 0;
		return o.schedule(function() {
			e.closed || (e.next(l++), 0 <= a ? this.schedule(void 0, a) : e.complete());
		}, i);
	}));
	return function e(t, r) {
		return r ? function(i) {
			return function() {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				return p5(1)(pG(e, pD(e)));
			}(r.pipe(hr(1), hi()), i.pipe(e(t)));
		} : p3(function(e, r) {
			return pB(t(e, r)).pipe(hr(1), pZ(function() {
				return e;
			}));
		});
	}(function() {
		return l;
	});
}
function ha(e, t) {
	return void 0 === t && (t = pp), e = null != e ? e : hl, py(function(r, i) {
		var o, a = !0;
		r.subscribe(pv(i, function(r) {
			var l = t(r);
			(a || !e(o, l)) && (a = !1, o = l, i.next(r));
		}));
	});
}
function hl(e, t) {
	return e === t;
}
function hs(e, t) {
	return py(function(r, i) {
		var o = null, a = 0, l = !1, s = function() {
			return l && !o && i.complete();
		};
		r.subscribe(pv(i, function(r) {
			o?.unsubscribe();
			var l = 0, u = a++;
			pB(e(r, u)).subscribe(o = pv(i, function(e) {
				return i.next(t ? t(r, e, u, l++) : e);
			}, function() {
				o = null, s();
			}));
		}, function() {
			l = !0, s();
		}));
	});
}
function hu(e, t, r) {
	var i = dY(e) || t || r ? {
		next: e,
		error: t,
		complete: r
	} : e;
	return i ? py(function(e, t) {
		null == (r = i.subscribe) || r.call(i);
		var r, o = !0;
		e.subscribe(pv(t, function(e) {
			var r;
			null == (r = i.next) || r.call(i, e), t.next(e);
		}, function() {
			var e;
			o = !1, null == (e = i.complete) || e.call(i), t.complete();
		}, function(e) {
			var r;
			o = !1, null == (r = i.error) || r.call(i, e), t.error(e);
		}, function() {
			var e, t;
			o && (null == (e = i.unsubscribe) || e.call(i)), null == (t = i.finalize) || t.call(i);
		}));
	}) : pp;
}
function hc(e, ...t) {
	return (function() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		return ph(e);
	})(...t)(pG(e));
}
var hf = class e extends pm {
	static seed(t) {
		return new e(t);
	}
	_value;
	_subject$ = new pw();
	constructor(e) {
		super((e) => {
			let t = this._subject$.subscribe(e);
			return this._subject$.next(this._value), () => {
				t.unsubscribe();
			};
		}), this._value = e;
	}
	get value() {
		return this._value;
	}
	next(e, t) {
		let r = eA(e) ? ch(this._value ?? t, e) : e;
		Object.is(r, this._value) || this._subject$.next(this._value = r);
	}
};
let hd = Symbol("forwardRef");
function hp(e) {
	let t = e;
	return new aj((e, r) => ({
		get: () => (e(), t),
		set(e) {
			let i = e?.[hd] ?? e;
			i !== t && (t = i, r());
		}
	}));
}
function hh(e) {
	return (t) => {
		let r = t.subscribe(e);
		lj(() => r.unsubscribe());
	};
}
function hm(e) {
	return (t) => {
		let r;
		lE(() => {
			r = t.subscribe(e);
		}), lj(() => r?.unsubscribe());
	};
}
let hg = (e) => {
	let t = new hf(e), r = new aj((e, r) => ({
		get: () => (e(), t.value),
		set(e) {
			let i = e?.[hd] ?? e;
			Object.is(i, t.value) || (t.next(i), r());
		}
	}));
	return new Proxy(t, {
		get: (e, i) => "next" === i ? (e) => {
			r.value = eA(e) ? ch(t.value, e) : e;
		} : "value" === i ? r.value : t[i] ?? r[i],
		set: (e, t, i) => ("value" === t ? r.value = i : e[t] = i, !0)
	});
};
var hy = (e) => "function" == typeof e ? e : Array.isArray(e) ? () => e : void 0 === e ? e : () => e, hv = (e, t, r) => hb(e, t, r), hb = (e, t, r) => {
	let i, [o, a] = ((e, t) => {
		let { children: r,...i } = e;
		if (r && !Array.isArray(r) && !sD(r) && "object" == typeof r) return [t ? {
			...i,
			key: t
		} : i, r];
		let o = {}, a = {}, l = !1;
		for (let e in i) {
			let t = i[e];
			if (e.startsWith("$")) {
				a[e.slice(1)] = hy(t), l = !0;
				continue;
			}
			o[e] = t;
		}
		let s = hy(r);
		return s && (a.default = s, l = !0), [t ? {
			...o,
			key: t
		} : o, l ? a : void 0];
	})(t, r);
	if ((i = e) === sO || "string" == typeof i || "object" == typeof i && i.__isTeleport) {
		let t = a?.default?.() ?? (e === sO ? [] : void 0);
		return s2(e, o, t);
	}
	return s2(e, o, a);
};
function hx(e) {
	return (t) => hb(hw, {
		renderFn$: t.pipe(pZ((t) => () => e(t))),
		children: {}
	});
}
var hw = fL({ renderFn$: fg() }, (e, t) => {
	let r = null;
	hc(e.renderFn$, hu((e) => {
		r = e;
	}), hh());
	let i = hg(1);
	return hc(e.renderFn$, hu(() => {
		i.value += 1;
	}), hm()), () => i.value ? r?.() : null;
}, { name: "RxSlot" }, { displayName: "RxSlot" });
let hk = (e, t) => {
	let r = new p_(e[t]);
	return sg(() => e[t], (e) => r.next(e), void 0), r;
};
function h_(...e) {
	let t, r = {}, i = {};
	for (let o of e) {
		if (eA(o)) {
			t = o;
			continue;
		}
		ig(t) ? r = o : i = o;
	}
	return fL(r, (e, r) => {
		let i = ((e) => {
			let t = {};
			for (let i in e) {
				var r;
				if (eA(e[i]) || (r = e[i]) && (r instanceof pm || dY(r.lift) && dY(r.subscribe))) {
					t[i] = e[i];
					continue;
				}
				t[`${i}$`] = hk(e, i);
			}
			return t;
		})(e), o = new Proxy({}, { get: (t, r) => e[r] ?? i[r] }), a = new Proxy({}, { get: (e, t) => "render" === t ? hx : r[t] }), l = t(o, a);
		return eA(l) ? l : () => l;
	}, i);
}
let hC = (e) => {
	let t, r = null;
	return hu({
		next: (i) => {
			((e, t) => {
				if (eu(e) && eu(t)) {
					if (e.length !== t.length) return !1;
					for (let r in e) if (!Object.is(e[r], t[r])) return !1;
					return !0;
				}
				return Object.is(e, t);
			})(i, r) || (t?.(), t = e(i), r = i);
		},
		unsubscribe: () => {
			t?.();
		}
	});
};
function hS(...e) {
	let t, r, i = {}, o = {};
	for (let r of e) {
		if (eA(r)) {
			t = r;
			continue;
		}
		ig(t) ? i = r : o = r;
	}
	let a = Symbol(o?.name ?? "");
	if (ih(i) && ih(o.props)) {
		let e, r = () => e ??= t({});
		return fR(fL({
			value: fg().optional(),
			$default: fg().optional()
		}, (e, { slots: t }) => (l5(a, e.value ?? r()), () => t.default?.()), {
			...o,
			name: `Provide(${o?.name ?? ""})`
		}, { displayName: "Provider" }), { use: () => l6(a, r, !0) });
	}
	let l = fl(i);
	return fR(fL({
		...i,
		$default: fg().optional()
	}, (e, { slots: i }) => (l5(a, r = t(e)), () => i.default?.()), {
		...o,
		name: `Provide(${o?.name ?? ""})`
	}, { displayName: "Provider" }), { use: () => l6(a, () => r ??= t(l.create({})), !0) });
}
var hO = class extends pm {
	constructor(e, t) {
		super((e) => this._success$.subscribe(e)), this.createConfig = e, this.fetcher = t;
	}
	requesting$ = new p_(!1);
	error$ = new pw();
	_success$ = new pw();
	_input$ = new pw();
	get operationID() {
		return this.createConfig.operationID;
	}
	unsubscribe = this._input$.pipe(p3((e) => (this.requesting$.next(!0), pG(this.fetcher.request(this.createConfig(e))).pipe(hu((e) => this._success$.next(e)), function e(t) {
		return py(function(r, i) {
			var o, a = null, l = !1;
			a = r.subscribe(pv(i, void 0, void 0, function(s) {
				o = pB(t(s, e(t)(r))), a ? (a.unsubscribe(), a = null, o.subscribe(i)) : l = !0;
			})), l && (a.unsubscribe(), a = null, o.subscribe(i));
		});
	}((e) => (this.error$.next(e), pJ(e)))))), hu(() => {
		this.requesting$.next(!1);
	}), hi()).subscribe();
	_prevInputs;
	next = (e) => {
		let t = eA(e) ? e(this._prevInputs) : e;
		this._prevInputs = t, this._input$.next(t);
	};
	toHref = (e) => this.fetcher.toHref(this.createConfig(e));
}, hA = (e = {}) => e["Content-Type"] || e["content-type"] || "", hP = (e) => {
	let t = new URLSearchParams(), r = (e, i) => eu(i) ? void il(i, (t) => {
		r(e, t);
	}) : ey(i) ? void r(e, JSON.stringify(i)) : void (!ig(i) && 0 !== `${i}`.length && t.append(e, `${i}`));
	return il(e, (e, t) => {
		r(t, e);
	}), t.toString();
}, hM = (e, t) => {
	if (hA(t).includes("multipart/form-data")) {
		((e = {}) => {
			e["Content-Type"] && (e["Content-Type"] = void 0), e["content-type"] && (e["content-type"] = void 0);
		})(t);
		let r = new FormData(), i = (e, t) => {
			t instanceof File || t instanceof Blob ? r.append(e, t) : eu(t) ? il(t, (t) => i(e, t)) : ey(t) ? r.append(e, JSON.stringify(t)) : r.append(e, t);
		};
		return il(e, (e, t) => i(t, e)), r;
	}
	return hA(t).includes("application/x-www-form-urlencoded") ? hP(e) : hA(t).includes("application/octet-stream") ? e : eu(e) || ey(e) ? JSON.stringify(e) : e;
}, hT = ({ paramsSerializer: e, transformRequestBody: t }) => {
	let r = (t) => {
		let r = e(t.params);
		return r.length && !r.startsWith("?") && (r = "?" + r), `${t.url}${r}`;
	}, i = (e) => t(e.body, e.headers || {});
	return {
		build: (e) => e,
		toRequestBody: i,
		toHref: r,
		request: (e) => fetch(r(e), {
			method: e.method,
			headers: e.headers || {},
			body: i(e)
		}).then(async (t) => {
			let r;
			r = t.headers.get("Content-Type")?.includes("application/json") ? await t.json() : t.headers.get("Content-Type")?.includes("application/octet-stream") ? await t.blob() : await t.text();
			let i = {
				config: e,
				status: t.status,
				headers: {}
			};
			for (let [e, r] of Object.entries(t.headers ?? {})) i.headers[e] = r;
			return i.body = r, i;
		}).then((e) => {
			if (e.status >= 400) throw e.error = e.body, e;
			return e;
		})
	};
};
function hE(e, t) {
	var r = {};
	for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (r[i] = e[i]);
	if (null != e && "function" == typeof Object.getOwnPropertySymbols) for (var o = 0, i = Object.getOwnPropertySymbols(e); o < i.length; o++) 0 > t.indexOf(i[o]) && Object.prototype.propertyIsEnumerable.call(e, i[o]) && (r[i[o]] = e[i[o]]);
	return r;
}
var hI = function() {}, hD = function() {}, hj = (e, t, r) => Math.min(Math.max(r, e), t);
function h$(e, t) {
	return e * Math.sqrt(1 - t * t);
}
var hL = ["duration", "bounce"], hR = [
	"stiffness",
	"damping",
	"mass"
];
function hN(e, t) {
	return t.some((t) => void 0 !== e[t]);
}
function hF(e) {
	var { from: t = 0, to: r = 1, restSpeed: i = 2, restDelta: o } = e, a = hE(e, [
		"from",
		"to",
		"restSpeed",
		"restDelta"
	]);
	let l = {
		done: !1,
		value: t
	}, { stiffness: s, damping: u, mass: c, velocity: f, duration: d, isResolvedFromDuration: p } = function(e) {
		let t = Object.assign({
			velocity: 0,
			stiffness: 100,
			damping: 10,
			mass: 1,
			isResolvedFromDuration: !1
		}, e);
		if (!hN(e, hR) && hN(e, hL)) {
			let r = function({ duration: e = 800, bounce: t = .25, velocity: r = 0, mass: i = 1 }) {
				let o, a;
				hI(e <= 1e4, "Spring duration must be 10 seconds or less");
				let l = 1 - t;
				l = hj(.05, 1, l), e = hj(.01, 10, e / 1e3), l < 1 ? (o = (t) => {
					let i = t * l, o = i * e;
					return .001 - (i - r) / h$(t, l) * Math.exp(-o);
				}, a = (t) => {
					let i = t * l * e, a = Math.pow(l, 2) * Math.pow(t, 2) * e, s = Math.exp(-i), u = h$(Math.pow(t, 2), l);
					return (-o(t) + .001 > 0 ? -1 : 1) * ((i * r + r - a) * s) / u;
				}) : (o = (t) => -.001 + Math.exp(-t * e) * ((t - r) * e + 1), a = (t) => e * e * (r - t) * Math.exp(-t * e));
				let s = function(e, t, r) {
					let i = r;
					for (let r = 1; r < 12; r++) i -= e(i) / t(i);
					return i;
				}(o, a, 5 / e);
				if (e *= 1e3, isNaN(s)) return {
					stiffness: 100,
					damping: 10,
					duration: e
				};
				{
					let t = Math.pow(s, 2) * i;
					return {
						stiffness: t,
						damping: 2 * l * Math.sqrt(i * t),
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
	}(a), h = hz, m = hz;
	function g() {
		let e = f ? -(f / 1e3) : 0, i = r - t, a = u / (2 * Math.sqrt(s * c)), l = Math.sqrt(s / c) / 1e3;
		if (void 0 === o && (o = Math.min(Math.abs(r - t) / 100, .4)), a < 1) {
			let t = h$(l, a);
			h = (o) => r - Math.exp(-a * l * o) * ((e + a * l * i) / t * Math.sin(t * o) + i * Math.cos(t * o)), m = (r) => {
				let o = Math.exp(-a * l * r);
				return a * l * o * (Math.sin(t * r) * (e + a * l * i) / t + i * Math.cos(t * r)) - o * (Math.cos(t * r) * (e + a * l * i) - t * i * Math.sin(t * r));
			};
		} else if (1 === a) h = (t) => r - Math.exp(-l * t) * (i + (e + l * i) * t);
		else {
			let t = l * Math.sqrt(a * a - 1);
			h = (o) => {
				let s = Math.exp(-a * l * o), u = Math.min(t * o, 300);
				return r - s * ((e + a * l * i) * Math.sinh(u) + t * i * Math.cosh(u)) / t;
			};
		}
	}
	return g(), {
		next: (e) => {
			let t = h(e);
			if (p) l.done = e >= d;
			else {
				let a = Math.abs(1e3 * m(e)) <= i, s = Math.abs(r - t) <= o;
				l.done = a && s;
			}
			return l.value = l.done ? r : t, l;
		},
		flipTarget: () => {
			f = -f, [t, r] = [r, t], g();
		}
	};
}
hF.needsInterpolation = (e, t) => "string" == typeof e || "string" == typeof t;
var hz = (e) => 0, hV = (e, t, r) => {
	let i = t - e;
	return 0 === i ? 1 : (r - e) / i;
}, hB = (e, t, r) => -r * e + r * t + e, hH = (e, t) => (r) => Math.max(Math.min(r, t), e), hW = (e) => e % 1 ? Number(e.toFixed(5)) : e, hU = /(-)?([\d]*\.?[\d])+/g, hq = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, hK = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function hG(e) {
	return "string" == typeof e;
}
var hJ = {
	test: (e) => "number" == typeof e,
	parse: parseFloat,
	transform: (e) => e
}, hZ = Object.assign(Object.assign({}, hJ), { transform: hH(0, 1) }), hX = {
	test: (e) => hG(e) && e.endsWith("%") && 1 === e.split(" ").length,
	parse: parseFloat,
	transform: (e) => `${e}%`
}, hY = (e, t) => (r) => !!(hG(r) && hK.test(r) && r.startsWith(e) || t && Object.prototype.hasOwnProperty.call(r, t)), hQ = (e, t, r) => (i) => {
	if (!hG(i)) return i;
	let [o, a, l, s] = i.match(hU);
	return {
		[e]: parseFloat(o),
		[t]: parseFloat(a),
		[r]: parseFloat(l),
		alpha: void 0 !== s ? parseFloat(s) : 1
	};
}, h0 = {
	test: hY("hsl", "hue"),
	parse: hQ("hue", "saturation", "lightness"),
	transform: ({ hue: e, saturation: t, lightness: r, alpha: i = 1 }) => "hsla(" + Math.round(e) + ", " + hX.transform(hW(t)) + ", " + hX.transform(hW(r)) + ", " + hW(hZ.transform(i)) + ")"
}, h1 = hH(0, 255), h2 = Object.assign(Object.assign({}, hJ), { transform: (e) => Math.round(h1(e)) }), h4 = {
	test: hY("rgb", "red"),
	parse: hQ("red", "green", "blue"),
	transform: ({ red: e, green: t, blue: r, alpha: i = 1 }) => "rgba(" + h2.transform(e) + ", " + h2.transform(t) + ", " + h2.transform(r) + ", " + hW(hZ.transform(i)) + ")"
}, h3 = {
	test: hY("#"),
	parse: function(e) {
		let t = "", r = "", i = "", o = "";
		return e.length > 5 ? (t = e.substr(1, 2), r = e.substr(3, 2), i = e.substr(5, 2), o = e.substr(7, 2)) : (t = e.substr(1, 1), r = e.substr(2, 1), i = e.substr(3, 1), o = e.substr(4, 1), t += t, r += r, i += i, o += o), {
			red: parseInt(t, 16),
			green: parseInt(r, 16),
			blue: parseInt(i, 16),
			alpha: o ? parseInt(o, 16) / 255 : 1
		};
	},
	transform: h4.transform
}, h5 = (e) => h4.test(e) || h3.test(e) || h0.test(e), h6 = (e) => h4.test(e) ? h4.parse(e) : h0.test(e) ? h0.parse(e) : h3.parse(e), h9 = (e) => hG(e) ? e : e.hasOwnProperty("red") ? h4.transform(e) : h0.transform(e), h8 = "${c}", h7 = "${n}";
function me(e) {
	"number" == typeof e && (e = `${e}`);
	let t = [], r = 0, i = e.match(hq);
	i && (r = i.length, e = e.replace(hq, h8), t.push(...i.map(h6)));
	let o = e.match(hU);
	return o && (e = e.replace(hU, h7), t.push(...o.map(hJ.parse))), {
		values: t,
		numColors: r,
		tokenised: e
	};
}
var mt = function(e) {
	let { values: t, numColors: r, tokenised: i } = me(e), o = t.length;
	return (e) => {
		let t = i;
		for (let i = 0; i < o; i++) t = t.replace(i < r ? h8 : h7, i < r ? h9(e[i]) : hW(e[i]));
		return t;
	};
};
function mn(e, t, r) {
	return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6) ? e + (t - e) * 6 * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function mr({ hue: e, saturation: t, lightness: r, alpha: i }) {
	e /= 360, r /= 100;
	let o = 0, a = 0, l = 0;
	if (t /= 100) {
		let i = r < .5 ? r * (1 + t) : r + t - r * t, s = 2 * r - i;
		o = mn(s, i, e + 1 / 3), a = mn(s, i, e), l = mn(s, i, e - 1 / 3);
	} else o = a = l = r;
	return {
		red: Math.round(255 * o),
		green: Math.round(255 * a),
		blue: Math.round(255 * l),
		alpha: i
	};
}
var mi = (e, t, r) => {
	let i = e * e;
	return Math.sqrt(Math.max(0, r * (t * t - i) + i));
}, mo = [
	h3,
	h4,
	h0
], ma = (e) => mo.find((t) => t.test(e)), ml = (e) => `'${e}' is not an animatable color. Use the equivalent color code instead.`, ms = (e, t) => {
	let r = ma(e), i = ma(t);
	hD(!!r, ml(e)), hD(!!i, ml(t));
	let o = r.parse(e), a = i.parse(t);
	r === h0 && (o = mr(o), r = h4), i === h0 && (a = mr(a), i = h4);
	let l = Object.assign({}, o);
	return (e) => {
		for (let t in l) "alpha" !== t && (l[t] = mi(o[t], a[t], e));
		return l.alpha = hB(o.alpha, a.alpha, e), r.transform(l);
	};
}, mu = (e, t) => (r) => t(e(r)), mc = (...e) => e.reduce(mu);
function mf(e, t) {
	return "number" == typeof e ? (r) => hB(e, t, r) : h5(e) ? ms(e, t) : mm(e, t);
}
var md = (e, t) => {
	let r = [...e], i = r.length, o = e.map((e, r) => mf(e, t[r]));
	return (e) => {
		for (let t = 0; t < i; t++) r[t] = o[t](e);
		return r;
	};
}, mp = (e, t) => {
	let r = Object.assign(Object.assign({}, e), t), i = {};
	for (let o in r) void 0 !== e[o] && void 0 !== t[o] && (i[o] = mf(e[o], t[o]));
	return (e) => {
		for (let t in i) r[t] = i[t](e);
		return r;
	};
};
function mh(e) {
	let t = me(e).values, r = t.length, i = 0, o = 0, a = 0;
	for (let e = 0; e < r; e++) i || "number" == typeof t[e] ? i++ : void 0 !== t[e].hue ? a++ : o++;
	return {
		parsed: t,
		numNumbers: i,
		numRGB: o,
		numHSL: a
	};
}
var mm = (e, t) => {
	let r = mt(t), i = mh(e), o = mh(t);
	return i.numHSL === o.numHSL && i.numRGB === o.numRGB && i.numNumbers >= o.numNumbers ? mc(md(i.parsed, o.parsed), r) : (hI(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), (r) => `${r > 0 ? t : e}`);
}, mg = (e, t) => (r) => hB(e, t, r);
function my(e, t, { clamp: r = !0, ease: i, mixer: o } = {}) {
	let a = e.length;
	hD(a === t.length, "Both input and output ranges must be the same length"), hD(!i || !Array.isArray(i) || i.length === a - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), e[0] > e[a - 1] && (e = [].concat(e), t = [].concat(t), e.reverse(), t.reverse());
	let l = function(e, t, r) {
		let i = [], o = r || function(e) {
			if ("number" == typeof e) return mg;
			if ("string" == typeof e) if (h5(e)) return ms;
			else return mm;
			return Array.isArray(e) ? md : "object" == typeof e ? mp : void 0;
		}(e[0]), a = e.length - 1;
		for (let r = 0; r < a; r++) {
			let a = o(e[r], e[r + 1]);
			t && (a = mc(Array.isArray(t) ? t[r] : t, a)), i.push(a);
		}
		return i;
	}(t, i, o), s = 2 === a ? function([e, t], [r]) {
		return (i) => r(hV(e, t, i));
	}(e, l) : function(e, t) {
		let r = e.length, i = r - 1;
		return (o) => {
			let a = 0, l = !1;
			if (o <= e[0] ? l = !0 : o >= e[i] && (a = i - 1, l = !0), !l) {
				let t = 1;
				for (; t < r && !(e[t] > o) && t !== i; t++);
				a = t - 1;
			}
			let s = hV(e[a], e[a + 1], o);
			return t[a](s);
		};
	}(e, l);
	return r ? (t) => s(hj(e[0], e[a - 1], t)) : s;
}
var mv = (e) => e, mb = (e = (e) => Math.pow(e, 2), (t) => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2);
function mx({ from: e = 0, to: t = 1, ease: r, offset: i, duration: o = 300 }) {
	var a;
	let l = {
		done: !1,
		value: e
	}, s = Array.isArray(t) ? t : [e, t], u = (a = i && i.length === s.length ? i : function(e) {
		let t = e.length;
		return e.map((e, r) => 0 !== r ? r / (t - 1) : 0);
	}(s), a.map((e) => e * o));
	function c() {
		return my(u, s, { ease: Array.isArray(r) ? r : s.map(() => r || mb).splice(0, s.length - 1) });
	}
	let f = c();
	return {
		next: (e) => (l.value = f(e), l.done = e >= o, l),
		flipTarget: () => {
			s.reverse(), f = c();
		}
	};
}
var mw = {
	keyframes: mx,
	spring: hF,
	decay: function({ velocity: e = 0, from: t = 0, power: r = .8, timeConstant: i = 350, restDelta: o = .5, modifyTarget: a }) {
		let l = {
			done: !1,
			value: t
		}, s = r * e, u = t + s, c = void 0 === a ? u : a(u);
		return c !== u && (s = c - t), {
			next: (e) => {
				let t = -s * Math.exp(-e / i);
				return l.done = !(t > o || t < -o), l.value = l.done ? c : c + t, l;
			},
			flipTarget: () => {}
		};
	}
}, mk = 1 / 60 * 1e3, m_ = "undefined" != typeof performance ? () => performance.now() : () => Date.now(), mC = "undefined" != typeof window ? (e) => window.requestAnimationFrame(e) : (e) => setTimeout(() => e(m_()), mk), mS = !0, mO = !1, mA = !1, mP = {
	delta: 0,
	timestamp: 0
}, mM = [
	"read",
	"update",
	"preRender",
	"render",
	"postRender"
], mT = mM.reduce((e, t) => (e[t] = function(e) {
	let t = [], r = [], i = 0, o = !1, a = !1, l = /* @__PURE__ */ new WeakSet(), s = {
		schedule: (e, a = !1, s = !1) => {
			let u = s && o, c = u ? t : r;
			return a && l.add(e), -1 === c.indexOf(e) && (c.push(e), u && o && (i = t.length)), e;
		},
		cancel: (e) => {
			let t = r.indexOf(e);
			-1 !== t && r.splice(t, 1), l.delete(e);
		},
		process: (u) => {
			if (o) {
				a = !0;
				return;
			}
			if (o = !0, [t, r] = [r, t], r.length = 0, i = t.length) for (let r = 0; r < i; r++) {
				let i = t[r];
				i(u), l.has(i) && (s.schedule(i), e());
			}
			o = !1, a && (a = !1, s.process(u));
		}
	};
	return s;
}(() => mO = !0), e), {}), mE = mM.reduce((e, t) => {
	let r = mT[t];
	return e[t] = (e, t = !1, i = !1) => (mO || m$(), r.schedule(e, t, i)), e;
}, {}), mI = mM.reduce((e, t) => (e[t] = mT[t].cancel, e), {}), mD = (e) => mT[e].process(mP), mj = (e) => {
	mO = !1, mP.delta = mS ? mk : Math.max(Math.min(e - mP.timestamp, 40), 1), mP.timestamp = e, mA = !0, mM.forEach(mD), mA = !1, mO && (mS = !1, mC(mj));
}, m$ = () => {
	mO = !0, mS = !0, mA || mC(mj);
};
function mL(e, t, r = 0) {
	return e - t - r;
}
var mR = (e) => {
	let t = ({ delta: t }) => e(t);
	return {
		start: () => mE.update(t, !0),
		stop: () => mI.update(t)
	};
};
function mN(e) {
	let t, r, i;
	var o, { from: a, autoplay: l = !0, driver: s = mR, elapsed: u = 0, repeat: c = 0, repeatType: f = "loop", repeatDelay: d = 0, onPlay: p, onStop: h, onComplete: m, onRepeat: g, onUpdate: y } = e, b = hE(e, [
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
	let { to: x } = b, w = 0, k = b.duration, _ = !1, C = !0, S = function(e) {
		if (Array.isArray(e.to)) return mx;
		if (mw[e.type]) return mw[e.type];
		let t = new Set(Object.keys(e));
		if (t.has("ease") || t.has("duration") && !t.has("dampingRatio"));
		else if (t.has("dampingRatio") || t.has("stiffness") || t.has("mass") || t.has("damping") || t.has("restSpeed") || t.has("restDelta")) return hF;
		return mx;
	}(b);
	null != (o = S.needsInterpolation) && o.call(S, a, x) && (i = my([0, 100], [a, x], { clamp: !1 }), a = 0, x = 100);
	let O = S(Object.assign(Object.assign({}, b), {
		from: a,
		to: x
	}));
	return l && (p?.(), (t = s(function(e) {
		if (C || (e = -e), u += e, !_) {
			let e = O.next(Math.max(0, u));
			r = e.value, i && (r = i(r)), _ = C ? e.done : u <= 0;
		}
		if (y?.(r), _) if (0 === w && (k ??= u), w < c) {
			var o = u;
			(C ? o >= k + d : o <= -d) && (w++, "reverse" === f ? u = function(e, t, r = 0, i = !0) {
				return i ? mL(t + -e, t, r) : t - (e - t) + r;
			}(u, k, d, C = w % 2 == 0) : (u = mL(u, k, d), "mirror" === f && O.flipTarget()), _ = !1, g && g());
		} else t.stop(), m && m();
	})).start()), { stop: () => {
		h?.(), t.stop();
	} };
}
var mF = (e, t) => 1 - 3 * t + 3 * e, mz = (e, t) => 3 * t - 6 * e, mV = (e, t, r) => ((mF(t, r) * e + mz(t, r)) * e + 3 * t) * e, mB = (e, t, r) => 3 * mF(t, r) * e * e + 2 * mz(t, r) * e + 3 * t, mH = {
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
}, mW = /[A-Z]|^ms/g, mU = /_EMO_([^_]+?)_([^]*?)_EMO_/g, mq = function(e) {
	return 45 === e.charCodeAt(1);
}, mK = function(e) {
	return null != e && "boolean" != typeof e;
}, mG = (S = function(e) {
	return mq(e) ? e : e.replace(mW, "-$&").toLowerCase();
}, O = Object.create(null), function(e) {
	return void 0 === O[e] && (O[e] = S(e)), O[e];
}), mJ = function(e, t) {
	switch (e) {
		case "animation":
		case "animationName": if ("string" == typeof t) return t.replace(mU, function(e, t, r) {
			return q = {
				name: t,
				styles: r,
				next: q
			}, t;
		});
	}
	return 1 === mH[e] || mq(e) || "number" != typeof t || 0 === t ? t : t + "px";
};
function mZ(e, t, r) {
	if (null == r) return "";
	if (void 0 !== r.__emotion_styles) return r;
	switch (typeof r) {
		case "boolean": return "";
		case "object":
			if (1 === r.anim) return q = {
				name: r.name,
				styles: r.styles,
				next: q
			}, r.name;
			if (void 0 !== r.styles) {
				var i = r.next;
				if (void 0 !== i) for (; void 0 !== i;) q = {
					name: i.name,
					styles: i.styles,
					next: q
				}, i = i.next;
				return r.styles + ";";
			}
			return function(e, t, r) {
				var i = "";
				if (Array.isArray(r)) for (var o = 0; o < r.length; o++) i += mZ(e, t, r[o]) + ";";
				else for (var a in r) {
					var l = r[a];
					if ("object" != typeof l) null != t && void 0 !== t[l] ? i += a + "{" + t[l] + "}" : mK(l) && (i += mG(a) + ":" + mJ(a, l) + ";");
					else if (Array.isArray(l) && "string" == typeof l[0] && (null == t || void 0 === t[l[0]])) for (var s = 0; s < l.length; s++) mK(l[s]) && (i += mG(a) + ":" + mJ(a, l[s]) + ";");
					else {
						var u = mZ(e, t, l);
						switch (a) {
							case "animation":
							case "animationName":
								i += mG(a) + ":" + u + ";";
								break;
							default: i += a + "{" + u + "}";
						}
					}
				}
				return i;
			}(e, t, r);
		case "function": if (void 0 !== e) {
			var o = q, a = r(e);
			return q = o, mZ(e, t, a);
		}
	}
	if (null == t) return r;
	var l = t[r];
	return void 0 !== l ? l : r;
}
var mX = /label:\s*([^\s;{]+)\s*(;|$)/g;
function mY() {
	return new Proxy({}, { get: (e, t) => t });
}
let mQ = mY(), m0 = {
	paddingX: [mQ.paddingLeft, mQ.paddingRight],
	paddingY: [mQ.paddingTop, mQ.paddingBottom],
	marginX: [mQ.marginInlineStart, mQ.marginInlineEnd],
	marginY: [mQ.marginTop, mQ.marginBottom],
	borderX: [mQ.borderLeft, mQ.borderRight],
	borderY: [mQ.borderTop, mQ.borderBottom],
	color: [mQ.color, mQ.fill],
	borderTopRadius: [mQ.borderTopLeftRadius, mQ.borderTopRightRadius],
	borderBottomRadius: [mQ.borderBottomLeftRadius, mQ.borderBottomRightRadius],
	borderRightRadius: [mQ.borderTopRightRadius, mQ.borderBottomRightRadius],
	borderLeftRadius: [mQ.borderTopLeftRadius, mQ.borderBottomLeftRadius],
	backgroundGradient: [mQ.backgroundImage],
	boxSize: [mQ.width, mQ.height]
}, m1 = mY(), m2 = {
	font: m1.fontFamily,
	shadow: m1.boxShadow,
	rounded: m1.borderRadius,
	roundedTop: m1.borderTopRadius,
	roundedBottom: m1.borderBottomRadius,
	roundedLeft: m1.borderLeftRadius,
	roundedRight: m1.borderRightRadius,
	bg: m1.background,
	bgImage: m1.backgroundImage,
	bgSize: m1.backgroundSize,
	bgPosition: m1.backgroundPosition,
	bgRepeat: m1.backgroundRepeat,
	bgAttachment: m1.backgroundAttachment,
	bgColor: m1.backgroundColor,
	bgGradient: m1.backgroundGradient,
	bgClip: m1.backgroundClip,
	pos: m1.position,
	p: m1.padding,
	pt: m1.paddingTop,
	pr: m1.paddingRight,
	pl: m1.paddingLeft,
	pb: m1.paddingBottom,
	ps: m1.paddingInlineStart,
	pe: m1.paddingInlineEnd,
	px: m1.paddingX,
	py: m1.paddingY,
	m: m1.margin,
	mt: m1.marginTop,
	mr: m1.marginRight,
	ml: m1.marginLeft,
	mb: m1.marginBottom,
	ms: m1.marginInlineStart,
	me: m1.marginInlineEnd,
	mx: m1.marginX,
	my: m1.marginY,
	w: m1.width,
	minW: m1.minWidth,
	maxW: m1.maxWidth,
	h: m1.height,
	minH: m1.minHeight,
	maxH: m1.maxHeight
}, m4 = mY(), m3 = (...e) => {
	let t = [...e];
	for (let r of e) m2[r] && t.push(m2[r]);
	return t;
}, m5 = {
	_rtl: "[dir=rtl] &, &[dir=rtl]",
	_ltr: "[dir=ltr] &, &[dir=ltr]",
	_dark: "&[data-theme=dark]",
	_light: "&[data-theme=light]"
};
var m6 = class e {
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
		if (m5[t]) return m5[t];
		let r = t;
		if (r.startsWith("$") || r.endsWith("$") || r.startsWith("_")) {
			let t = "", i = "";
			if (r.startsWith("_") ? (t = "&", r = r.slice(1)) : r.startsWith("$") ? (t = "& ", r = r.slice(1)) : (i = " &", r = r.slice(0, r.length - 1)), r.startsWith("data") || r.startsWith("aria")) {
				let [e, o] = r.split("__");
				return o ? `${t}[${iy(e)}='${iy(o)}']${i}` : `${t}[${iy(e)}]${i}`;
			}
			if ("&" === t) {
				if (r.startsWith("$")) return `${t}::${r.slice(1)}`;
				if (e.supportedPseudoClasses[r]) {
					let i = e.supportedPseudoClasses[r];
					return `${t}:${i}, ${t}[data-${i}]:not([data-${i}='false']), ${t}.${i}`;
				}
				let [i, o] = r.split("__"), a = iy(i);
				return o ? `${t}[data-${a}='${iy(o)}']` : `${t}[data-${a}]:not([data-${a}='false'])`;
			}
		}
	};
	static walkStateValues = (t, r, i = {
		default: {},
		selectorPath: [],
		path: []
	}) => {
		let { $: o,...a } = t;
		for (let t in a) {
			let l = a[t], s = a.default ?? i.default, u = o ?? tQ(s, [...i.path.slice(1), "$"]), c = u ? [...i.selectorPath, u] : i.selectorPath, f = [...i.path, t];
			if (nt(l)) {
				e.walkStateValues(l, r, {
					path: f,
					selectorPath: c,
					default: s
				});
				continue;
			}
			r(l, f, c);
		}
	};
	constructor(e) {
		this.opt = e;
	}
	processAll(t, r = !0) {
		let i = [], { state: o, extends: a,...l } = t;
		if (a) for (let e of a) i.push(...this.processAll(e, r));
		if (o) {
			let t = {}, r = {};
			e.walkStateValues(o, (e, i, o) => {
				let a = `--${this.opt.varPrefix}-state-${i.join("-")}`, l = ia(i) ?? "", s = {};
				this.process(s, l, e, !1), t[a] = s[l], iU(r, [...o, l], `var(${a})`);
			}), i.push(t), i.push(...this.processAll(r));
		}
		if (!ih(l)) {
			let e = {};
			this.processTo(e, l, r), i.push(e);
		}
		return i;
	}
	processTo(e, t, r = !0) {
		for (let i in t) this.process(e, i, t[i], r);
	}
	process(t, r, i, o = !0) {
		if (this.opt.mixins[r]) {
			let e = this.opt.mixins[r]?.get(i);
			if (e) for (let r in e) this.process(t, r, e[r], o);
			return;
		}
		let a = r;
		if (nt(i)) {
			t[a = e.convertSelector(a) ?? a] = t[a] ?? {}, this.processTo(t[a], i);
			return;
		}
		if (o && m0[a = m2[a] ?? a]) {
			for (let e of m0[a]) t[e] = this.opt.processValue(e, i);
			return;
		}
		t[a] = this.opt.processValue(a, i);
	}
};
let m9 = ((A = {}).var = "var", A.mixin = "mixin", A);
var m8 = class e {
	static create(e, { value: t, on: r, transform: i }) {
		return {
			type: e,
			value: t,
			on: r,
			transform: i,
			__Tokens: void 0,
			__ValueType: void 0,
			__CSSTokens: void 0
		};
	}
	static color(t) {
		return e.create(m9.var, {
			value: t,
			on: m3(m4.color, m4.bgColor, m4.outlineColor, m4.borderColor, m4.accentColor, m4.fill, m4.stroke),
			transform: (e, t) => id(e) ? {
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
		return e.create(m9.var, {
			value: t,
			on: m3(m4.gap, m4.rowGap, m4.columnGap, m4.top, m4.right, m4.bottom, m4.left, m4.m, m4.ms, m4.me, m4.mt, m4.mr, m4.mb, m4.ml, m4.mx, m4.my, m4.p, m4.ps, m4.pe, m4.pt, m4.pr, m4.pb, m4.pl, m4.px, m4.py)
		});
	}
	static boxSize(t) {
		return e.create(m9.var, {
			value: t,
			on: m3(m4.w, m4.minW, m4.maxW, m4.h, m4.minH, m4.maxH, m4.boxSize),
			fallback: 0
		});
	}
	static fontSize(t) {
		return e.create(m9.var, {
			value: t,
			on: m3(m4.fontSize),
			fallback: 0
		});
	}
	static lineHeight(t) {
		return e.create(m9.var, {
			value: t,
			on: m3(m4.lineHeight),
			fallback: 0
		});
	}
	static rounded(t) {
		return e.create(m9.var, {
			value: t,
			fallback: 0,
			on: m3(m4.rounded, m4.roundedTop, m4.roundedBottom, m4.roundedLeft, m4.roundedRight, mQ.borderTopLeftRadius, mQ.borderTopRightRadius, mQ.borderBottomLeftRadius, mQ.borderBottomRightRadius, mQ.borderTopRightRadius, mQ.borderBottomRightRadius, mQ.borderTopLeftRadius, mQ.borderBottomLeftRadius)
		});
	}
	static transitionTimingFunction(t) {
		return e.create(m9.var, {
			value: t,
			on: m3(m4.transitionTimingFunction)
		});
	}
	static transitionDuration(t) {
		return e.create(m9.var, {
			value: t,
			on: m3(m4.transitionDuration),
			transform: (e) => `${e}ms`
		});
	}
	static font(t) {
		return e.create(m9.var, {
			value: t,
			on: m3(m4.font)
		});
	}
	static fontWeight(t) {
		return e.create(m9.var, {
			value: t,
			on: m3(m4.fontWeight)
		});
	}
	static letterSpacing(t) {
		return e.create(m9.var, {
			value: t,
			on: m3(m4.letterSpacing)
		});
	}
	static shadow(t) {
		return e.create(m9.var, {
			value: t,
			on: m3(m4.shadow)
		});
	}
	static customMixin(t, r) {
		return e.create(m9.mixin, {
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
let m7 = (e, t, r) => {
	let i = e;
	for (let e = 0; e < t.length; e++) {
		let o = t[e];
		if (e === t.length - 1) {
			i[o] = r;
			continue;
		}
		i[o] = i[o] ?? {}, i = i[o];
	}
};
var ge = class e {
	static defaultMode = "_default";
	static walkValues = (t, r, i = []) => {
		for (let o in t) {
			let a = t[o];
			if (nt(a)) {
				if (ic(a, "_default")) {
					r(a, [...i, o]);
					continue;
				}
				e.walkValues(a, r, [...i, o]);
				continue;
			}
			r(a, [...i, o]);
		}
	};
	__Tokens = void 0;
	_values = {};
	_cssVarRefs = {};
	constructor(t, { cssVar: r, transformFallback: i }) {
		e.walkValues(t.value, (e, o) => {
			let a = o.join("."), l = (e, o) => {
				let a = t.transform ? t.transform(e, r) : i(e);
				if (ey(a)) for (let e in a) o(a[e], "default" === e ? "" : e);
				else o(a, "");
			};
			if (iU(this._cssVarRefs, [a], r(a)), nt(e)) for (let t in e) l(e[t], (e, r) => {
				iU(this._values, [`${a}${r ? `/${r}` : ""}`, t], e);
			});
			else l(e, (e, t) => {
				iU(this._values, [`${a}${t ? `/${t}` : ""}`], e);
			});
		});
	}
	get tokens() {
		return tS(this._values);
	}
	get(t, r, i) {
		let o = this._values[t];
		return ey(o) ? i ? o[r] : o[r] ?? o[e.defaultMode] : i ? r === e.defaultMode ? o : void 0 : o;
	}
	use(e, t = !1) {
		if (this._cssVarRefs[e]) return t ? `${this._cssVarRefs[e]}` : `var(${this._cssVarRefs[e]})`;
	}
}, gt = class e {
	static walkValue = (t, r, i = []) => {
		for (let o in t) {
			let a = t[o];
			if (nt(a)) {
				if (ic(a, "__mixin")) {
					r(a, [...i, o]);
					continue;
				}
				e.walkValue(a, r, [...i, o]);
				continue;
			}
			r(a, [...i, o]);
		}
	};
	_values = {};
	constructor(t) {
		e.walkValue(t.value, (e, t) => {
			let r = t.join(".");
			iU(this._values, [r], iw(e, "__mixin"));
		});
	}
	get tokens() {
		return tS(this._values);
	}
	get(e) {
		return this._values[e];
	}
}, gn = {
	primary: ["primary"],
	secondary: ["secondary"],
	tertiary: ["tertiary"],
	error: ["error"],
	warning: ["warning"],
	success: ["success"],
	neutral: ["surface", "outline"]
};
let gr = (e) => {
	let t = tQ(e, ["color", "sys"], {});
	return {
		...e,
		color: { sys: iv(gn, (e) => iC(t, (t, r) => iK(e, (e) => r.indexOf(e) > -1))) }
	};
}, gi = (e) => (t) => `rgba(var(${t}--rgb) / ${e})`;
function go(e, t) {
	return Object.assign((e) => t(e), {
		toString: () => e,
		token: e
	});
}
var ga = (e) => e.reduce((e, t) => Object.assign(e, { [t]: !0 }), {}), gl = class e {
	static propsCanPercent = ga([...m8.boxSize({}).on]);
	static propsCanBaseDp = ga([
		...m8.boxSize({}).on,
		...m8.space({}).on,
		...m8.fontSize({}).on,
		...m8.letterSpacing({}).on,
		...m8.lineHeight({}).on,
		...m8.rounded({}).on
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
	transformFallback = (t, r) => e.propsCanBaseDp[t] && im(r) ? e.propsCanPercent[t] && 1 > Math.abs(r) ? `${100 * r}%` : this.dp(r) : r;
	constructor(e, t = {}) {
		for (let r in this.theme = e, this.varPrefix = t.varPrefix ?? "vk", this.mode = t.mode ?? "light", iU(this.cssVars, [this.cssVar("space", "dp")], "0.1rem"), e) {
			let t = e[r];
			if (t) {
				if (t.type === m9.var) {
					let e = new ge(t, {
						cssVar: (e) => this.cssVar(r, e),
						transformFallback: (e) => this.transformFallback(t.on[0], e)
					});
					for (let i of (this.tokens[r] = e, t.on)) this.propValues[i] = e;
					for (let t of e.tokens) for (let i of ["light", "dark"]) {
						let o = i === this.mode ? "_default" : `_${i}`, a = e.get(t, o, !0);
						ig(a) || ("_default" === o ? iU(this.cssVars, [this.cssVar(r, t)], a) : iU(this.cssVars, [o, this.cssVar(r, t)], a));
					}
					continue;
				}
				if (t.type === m9.mixin) {
					let e = new gt(t);
					for (let r of t.on) this.mixins[r] = e;
				}
			}
		}
	}
	cssVar(e, t) {
		return `--${this.varPrefix}-${iy(e)}__${t.replaceAll("/", "--").replaceAll(".", "__")}`;
	}
	get rootCSSVars() {
		return this.cssVars;
	}
	token = new Proxy({}, { get: (e, t) => this.tokens[t] ? Object.assign((e) => this.tokens[t]?.get(e, `_${this.mode}`), { tokens: this.tokens[t]?.tokens }) : this.mixins[t] ? Object.assign((e) => this.mixins[t]?.get(e), { tokens: this.mixins[t]?.tokens }) : void 0 });
	processValue = (e, t) => {
		if (eA(t) && ic(t, "token")) {
			let r = this.propValues[e]?.use(t.token, !0);
			return r ? t(r) : void 0;
		}
		return this.propValues[e]?.use(t) ?? this.transformFallback(e, t);
	};
	unstable_sx = (e) => new m6({
		mixins: this.mixins,
		varPrefix: this.varPrefix,
		processValue: this.processValue
	}).processAll(e);
	unstable_css(e, t) {
		let r = t ?? {};
		return r.__emotion_styles = r.__emotion_styles ?? function(e, t, r) {
			if (1 === e.length && "object" == typeof e[0] && null !== e[0] && void 0 !== e[0].styles) return e[0];
			var i, o = !0, a = "";
			q = void 0;
			var l = e[0];
			null == l || void 0 === l.raw ? (o = !1, a += mZ(r, t, l)) : a += l[0];
			for (var s = 1; s < e.length; s++) a += mZ(r, t, e[s]), o && (a += l[s]);
			mX.lastIndex = 0;
			for (var u = ""; null !== (i = mX.exec(a));) u += "-" + i[1];
			return {
				name: function(e) {
					for (var t, r = 0, i = 0, o = e.length; o >= 4; ++i, o -= 4) t = (65535 & (t = 255 & e.charCodeAt(i) | (255 & e.charCodeAt(++i)) << 8 | (255 & e.charCodeAt(++i)) << 16 | (255 & e.charCodeAt(++i)) << 24)) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= t >>> 24, r = (65535 & t) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ (65535 & r) * 1540483477 + ((r >>> 16) * 59797 << 16);
					switch (o) {
						case 3: r ^= (255 & e.charCodeAt(i + 2)) << 16;
						case 2: r ^= (255 & e.charCodeAt(i + 1)) << 8;
						case 1: r ^= 255 & e.charCodeAt(i), r = (65535 & r) * 1540483477 + ((r >>> 16) * 59797 << 16);
					}
					return r ^= r >>> 13, (((r = (65535 & r) * 1540483477 + ((r >>> 16) * 59797 << 16)) ^ r >>> 15) >>> 0).toString(36);
				}(a) + u,
				styles: a,
				next: q
			};
		}(this.unstable_sx(t), e?.registered, {}), r.__emotion_styles;
	}
	toFigmaTokens() {
		let e = { space: { dp: {
			$type: "sizing",
			$value: 1
		} } }, t = {}, r = {}, i = (e, t) => ey(t) ? {
			$type: e,
			$value: iv(t, (t) => i(e, t).$value)
		} : id(t) ? {
			$type: e,
			$value: t.replace(/var\(([^)]+)\)/g, (e) => {
				let t = e.slice(4, e.length - 1).slice(`--${this.varPrefix}-`.length).split("--")[0]?.split("__").map((e, t) => 0 === t ? nG(e) : e).join(".") ?? "";
				return t.startsWith("sys.") ? `{${t}}` : `{seed.${t}}`;
			}).replace(/calc\(.+\)$/g, (e) => e.slice(5, e.length - 1))
		} : {
			$type: e,
			$value: t
		};
		for (let o in this.tokens) {
			let a = this.tokens[o], l = (l) => {
				for (let s of a.tokens) if (!s.includes("/")) if (s.startsWith("sys.")) {
					let e = a.get(s, "_default"), u = a.get(s, "_dark");
					m7(t, [o, ...s.split(".")], i(l, e)), e !== u && m7(r, [o, ...s.split(".")], i(l, u));
				} else m7(e, [o, ...s.split(".")], i(l, a.get(s, "_default")));
			};
			switch (o) {
				case "color":
					l("color");
					break;
				case "rounded":
					l("borderRadius");
					break;
				case "shadow":
					l("boxShadow");
					break;
				case "font":
					l("fontFamily");
					break;
				case "fontWeight": l("fontWeight");
			}
		}
		for (let e in this.mixins) {
			let r = this.mixins[e];
			if (!r) continue;
			let o = (o) => {
				for (let a of r.tokens) {
					let l = r.get(a);
					if (!l) continue;
					let s = this.unstable_sx(l)[0];
					m7(t, [e, ...a.split(".")], i(o, s));
				}
			};
			"textStyle" === e && o("typography");
		}
		return {
			seed: e,
			base: gr(t),
			dark: gr(r)
		};
	}
};
let gs = {
	shadow: m8.shadow({
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
	elevation: m8.customMixin("elevation", {
		0: m8.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "0",
			_hover: { shadow: "1" }
		}),
		1: m8.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "1",
			_hover: { shadow: "2" }
		}),
		2: m8.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "2",
			_hover: { shadow: "3" }
		}),
		3: m8.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "3",
			_hover: { shadow: "4" }
		}),
		4: m8.mixin({
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: "4",
			_hover: { shadow: "5" }
		})
	})
};
var gu = (e, t, r, i) => Object.assign(function(e, t, r, i) {
	if (e === t && r === i) return mv;
	let o = new Float32Array(11);
	for (let t = 0; t < 11; ++t) o[t] = mV(.1 * t, e, r);
	return (a) => 0 === a || 1 === a ? a : mV(function(t) {
		let i = 0, a = 1;
		for (; 10 !== a && o[a] <= t; ++a) i += .1;
		let l = i + (t - o[--a]) / (o[a + 1] - o[a]) * .1, s = mB(l, e, r);
		if (s >= .001) {
			var u = l;
			for (let i = 0; i < 8; ++i) {
				let i = mB(u, e, r);
				if (0 === i) break;
				let o = mV(u, e, r) - t;
				u -= o / i;
			}
			return u;
		}
		return 0 === s ? l : function(e, t, r, i, o) {
			let a, l, s = 0;
			do
				(a = mV(l = t + (r - t) / 2, i, o) - e) > 0 ? r = l : t = l;
			while (Math.abs(a) > 1e-7 && ++s < 10);
			return l;
		}(t, i, i + .1, e, r);
	}(a), t, i);
}(e, t, r, i), { toString: () => `cubic-bezier(${e}, ${t}, ${r}, ${i})` });
let gc = {
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
		linear: gu(0, 0, 1, 1),
		standard: Object.assign(gu(.2, 0, 0, 1), {
			accelerate: gu(.3, 0, 1, 1),
			decelerate: gu(0, 0, 0, 1)
		}),
		emphasized: Object.assign(gu(.2, 0, 0, 1), {
			accelerate: gu(.3, 0, .8, .15),
			decelerate: gu(.05, .7, .1, 1)
		}),
		legacy: Object.assign(gu(.4, 0, .2, 1), {
			decelerate: gu(0, 0, .2, 1),
			accelerate: gu(.4, 0, 1, 1)
		})
	}
}, gf = (e, t) => {
	let r = t ?? {
		...e,
		from: { ...e.to },
		to: { ...e.from }
	};
	return fL({
		onComplete: fg(),
		$default: fg()
	}, (t, { slots: i, emit: o }) => {
		let a, l = (t, r) => {
			a = mN({
				...e,
				autoplay: !0,
				onComplete: () => {
					r(), o("complete", "enter");
				},
				onUpdate: (e) => {
					Object.assign(t.style, e);
				}
			});
		}, s = (e, t) => {
			a = mN({
				...r,
				autoplay: !0,
				onComplete: () => {
					t(), o("complete", "leave");
				},
				onUpdate: (t) => {
					Object.assign(e.style, t);
				}
			});
		}, u = () => {
			a?.stop();
		};
		return () => hb(ur, {
			css: !1,
			onEnter: l,
			onEnterCancelled: u,
			onLeave: s,
			onLeaveCancelled: u,
			children: i.default?.()
		});
	}, { name: "Transition" });
}, gd = {
	transitionDuration: m8.transitionDuration(gc.duration),
	transitionTimingFunction: m8.transitionTimingFunction({
		linear: gc.easing.linear.toString(),
		standard: gc.easing.standard.toString(),
		"standard-accelerate": gc.easing.standard.accelerate.toString(),
		"standard-decelerate": gc.easing.standard.decelerate.toString(),
		emphasized: gc.easing.emphasized.toString(),
		"emphasized-decelerate": gc.easing.emphasized.decelerate.toString(),
		"emphasized-accelerate": gc.easing.emphasized.accelerate.toString(),
		legacy: gc.easing.legacy.toString(),
		"legacy-decelerate": gc.easing.legacy.decelerate.toString(),
		"legacy-accelerate": gc.easing.legacy.accelerate.toString()
	})
};
function gp(e) {
	return e < 0 ? -1 : +(0 !== e);
}
function gh(e, t, r) {
	return r < e ? e : r > t ? t : r;
}
function gm(e) {
	return (e %= 360) < 0 && (e += 360), e;
}
function gg(e) {
	return (e %= 360) < 0 && (e += 360), e;
}
function gy(e, t) {
	return [
		e[0] * t[0][0] + e[1] * t[0][1] + e[2] * t[0][2],
		e[0] * t[1][0] + e[1] * t[1][1] + e[2] * t[1][2],
		e[0] * t[2][0] + e[1] * t[2][1] + e[2] * t[2][2]
	];
}
var gv = [
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
], gb = [
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
], gx = [
	95.047,
	100,
	108.883
];
function gw(e, t, r) {
	return (-16777216 | (255 & e) << 16 | (255 & t) << 8 | 255 & r) >>> 0;
}
function gk(e) {
	let t = gA(e[0]);
	return gw(t, gA(e[1]), gA(e[2]));
}
function g_(e) {
	return 116 * gP(function(e) {
		let t = gO(e >> 16 & 255);
		return gy([
			t,
			gO(e >> 8 & 255),
			gO(255 & e)
		], gv);
	}(e)[1] / 100) - 16;
}
function gC(e) {
	return 100 * function(e) {
		let t = e * e * e;
		return t > 216 / 24389 ? t : (116 * e - 16) / (24389 / 27);
	}((e + 16) / 116);
}
function gS(e) {
	return 116 * gP(e / 100) - 16;
}
function gO(e) {
	let t = e / 255;
	return t <= .040449936 ? t / 12.92 * 100 : 100 * Math.pow((t + .055) / 1.055, 2.4);
}
function gA(e) {
	var t;
	let r = e / 100;
	return (t = Math.round(255 * (r <= .0031308 ? 12.92 * r : 1.055 * Math.pow(r, 1 / 2.4) - .055))) < 0 ? 0 : t > 255 ? 255 : t;
}
function gP(e) {
	return e > 216 / 24389 ? Math.pow(e, 1 / 3) : (24389 / 27 * e + 16) / 116;
}
var gM = class e {
	static make(t = gx, r = 200 / Math.PI * gC(50) / 100, i = 50, o = 2, a = !1) {
		var l, s;
		let u = .401288 * t[0] + .650173 * t[1] + -.051461 * t[2], c = -.250268 * t[0] + 1.204414 * t[1] + .045854 * t[2], f = -.002079 * t[0] + .048952 * t[1] + .953127 * t[2], d = .8 + o / 10, p = d >= .9 ? (1 - (l = (d - .9) * 10)) * .59 + .69 * l : (1 - (s = (d - .8) * 10)) * .525 + .59 * s, h = a ? 1 : d * (1 - 1 / 3.6 * Math.exp((-r - 42) / 92)), m = [
			100 / u * (h = h > 1 ? 1 : h < 0 ? 0 : h) + 1 - h,
			100 / c * h + 1 - h,
			100 / f * h + 1 - h
		], g = 1 / (5 * r + 1), y = g * g * g * g, b = 1 - y, x = y * r + .1 * b * b * Math.cbrt(5 * r), w = gC(i) / t[1], k = 1.48 + Math.sqrt(w), _ = .725 / Math.pow(w, .2), C = [
			Math.pow(x * m[0] * u / 100, .42),
			Math.pow(x * m[1] * c / 100, .42),
			Math.pow(x * m[2] * f / 100, .42)
		], S = [
			400 * C[0] / (C[0] + 27.13),
			400 * C[1] / (C[1] + 27.13),
			400 * C[2] / (C[2] + 27.13)
		];
		return new e(w, (2 * S[0] + S[1] + .05 * S[2]) * _, _, _, p, d, m, x, Math.pow(x, .25), k);
	}
	constructor(e, t, r, i, o, a, l, s, u, c) {
		this.n = e, this.aw = t, this.nbb = r, this.ncb = i, this.c = o, this.nc = a, this.rgbD = l, this.fl = s, this.fLRoot = u, this.z = c;
	}
};
gM.DEFAULT = gM.make();
var gT = class e {
	constructor(e, t, r, i, o, a, l, s, u) {
		this.hue = e, this.chroma = t, this.j = r, this.q = i, this.m = o, this.s = a, this.jstar = l, this.astar = s, this.bstar = u;
	}
	distance(e) {
		let t = this.jstar - e.jstar, r = this.astar - e.astar, i = this.bstar - e.bstar;
		return 1.41 * Math.pow(Math.sqrt(t * t + r * r + i * i), .63);
	}
	static fromInt(t) {
		return e.fromIntInViewingConditions(t, gM.DEFAULT);
	}
	static fromIntInViewingConditions(t, r) {
		let i = gO((16711680 & t) >> 16), o = gO((65280 & t) >> 8), a = gO(255 & t), l = .41233895 * i + .35762064 * o + .18051042 * a, s = .2126 * i + .7152 * o + .0722 * a, u = .01932141 * i + .11916382 * o + .95034478 * a, c = r.rgbD[0] * (.401288 * l + .650173 * s - .051461 * u), f = r.rgbD[1] * (-.250268 * l + 1.204414 * s + .045854 * u), d = r.rgbD[2] * (-.002079 * l + .048952 * s + .953127 * u), p = Math.pow(r.fl * Math.abs(c) / 100, .42), h = Math.pow(r.fl * Math.abs(f) / 100, .42), m = Math.pow(r.fl * Math.abs(d) / 100, .42), g = 400 * gp(c) * p / (p + 27.13), y = 400 * gp(f) * h / (h + 27.13), b = 400 * gp(d) * m / (m + 27.13), x = (11 * g + -12 * y + b) / 11, w = (g + y - 2 * b) / 9, k = 180 * Math.atan2(w, x) / Math.PI, _ = k < 0 ? k + 360 : k >= 360 ? k - 360 : k, C = _ * Math.PI / 180, S = 100 * Math.pow((40 * g + 20 * y + b) / 20 * r.nbb / r.aw, r.c * r.z), O = 4 / r.c * Math.sqrt(S / 100) * (r.aw + 4) * r.fLRoot, A = Math.pow(5e4 / 13 * (.25 * (Math.cos((_ < 20.14 ? _ + 360 : _) * Math.PI / 180 + 2) + 3.8)) * r.nc * r.ncb * Math.sqrt(x * x + w * w) / ((20 * g + 20 * y + 21 * b) / 20 + .305), .9) * Math.pow(1.64 - Math.pow(.29, r.n), .73), P = A * Math.sqrt(S / 100), M = P * r.fLRoot, T = 50 * Math.sqrt(A * r.c / (r.aw + 4)), E = 1 / .0228 * Math.log(1 + .0228 * M);
		return new e(_, P, S, O, M, T, 1.7000000000000002 * S / (1 + .007 * S), E * Math.cos(C), E * Math.sin(C));
	}
	static fromJch(t, r, i) {
		return e.fromJchInViewingConditions(t, r, i, gM.DEFAULT);
	}
	static fromJchInViewingConditions(t, r, i, o) {
		let a = 4 / o.c * Math.sqrt(t / 100) * (o.aw + 4) * o.fLRoot, l = r * o.fLRoot, s = 50 * Math.sqrt(r / Math.sqrt(t / 100) * o.c / (o.aw + 4)), u = i * Math.PI / 180, c = 1 / .0228 * Math.log(1 + .0228 * l);
		return new e(i, r, t, a, l, s, 1.7000000000000002 * t / (1 + .007 * t), c * Math.cos(u), c * Math.sin(u));
	}
	static fromUcs(t, r, i) {
		return e.fromUcsInViewingConditions(t, r, i, gM.DEFAULT);
	}
	static fromUcsInViewingConditions(t, r, i, o) {
		let a = (Math.exp(.0228 * Math.sqrt(r * r + i * i)) - 1) / .0228 / o.fLRoot, l = 180 / Math.PI * Math.atan2(i, r);
		return l < 0 && (l += 360), e.fromJchInViewingConditions(t / (1 - (t - 100) * .007), a, l, o);
	}
	toInt() {
		return this.viewed(gM.DEFAULT);
	}
	viewed(e) {
		let t = Math.pow((0 === this.chroma || 0 === this.j ? 0 : this.chroma / Math.sqrt(this.j / 100)) / Math.pow(1.64 - Math.pow(.29, e.n), .73), 1 / .9), r = this.hue * Math.PI / 180, i = .25 * (Math.cos(r + 2) + 3.8), o = e.aw * Math.pow(this.j / 100, 1 / e.c / e.z), a = 5e4 / 13 * i * e.nc * e.ncb, l = o / e.nbb, s = Math.sin(r), u = Math.cos(r), c = 23 * (l + .305) * t / (23 * a + 11 * t * u + 108 * t * s), f = c * u, d = c * s, p = (460 * l + 451 * f + 288 * d) / 1403, h = (460 * l - 891 * f - 261 * d) / 1403, m = (460 * l - 220 * f - 6300 * d) / 1403, g = Math.max(0, 27.13 * Math.abs(p) / (400 - Math.abs(p))), y = gp(p) * (100 / e.fl) * Math.pow(g, 1 / .42), b = Math.max(0, 27.13 * Math.abs(h) / (400 - Math.abs(h))), x = gp(h) * (100 / e.fl) * Math.pow(b, 1 / .42), w = Math.max(0, 27.13 * Math.abs(m) / (400 - Math.abs(m))), k = gp(m) * (100 / e.fl) * Math.pow(w, 1 / .42), _ = y / e.rgbD[0], C = x / e.rgbD[1], S = k / e.rgbD[2];
		return function(e, t, r) {
			let i = gb[0][0] * e + gb[0][1] * t + gb[0][2] * r, o = gb[1][0] * e + gb[1][1] * t + gb[1][2] * r, a = gb[2][0] * e + gb[2][1] * t + gb[2][2] * r, l = gA(i);
			return gw(l, gA(o), gA(a));
		}(1.86206786 * _ - 1.01125463 * C + .14918677 * S, .38752654 * _ + .62144744 * C - .00897398 * S, -.0158415 * _ - .03412294 * C + 1.04996444 * S);
	}
	static fromXyzInViewingConditions(t, r, i, o) {
		let a = o.rgbD[0] * (.401288 * t + .650173 * r - .051461 * i), l = o.rgbD[1] * (-.250268 * t + 1.204414 * r + .045854 * i), s = o.rgbD[2] * (-.002079 * t + .048952 * r + .953127 * i), u = Math.pow(o.fl * Math.abs(a) / 100, .42), c = Math.pow(o.fl * Math.abs(l) / 100, .42), f = Math.pow(o.fl * Math.abs(s) / 100, .42), d = 400 * gp(a) * u / (u + 27.13), p = 400 * gp(l) * c / (c + 27.13), h = 400 * gp(s) * f / (f + 27.13), m = (11 * d + -12 * p + h) / 11, g = (d + p - 2 * h) / 9, y = 180 * Math.atan2(g, m) / Math.PI, b = y < 0 ? y + 360 : y >= 360 ? y - 360 : y, x = b * Math.PI / 180, w = 100 * Math.pow((40 * d + 20 * p + h) / 20 * o.nbb / o.aw, o.c * o.z), k = 4 / o.c * Math.sqrt(w / 100) * (o.aw + 4) * o.fLRoot, _ = Math.pow(5e4 / 13 * (1 / 4 * (Math.cos((b < 20.14 ? b + 360 : b) * Math.PI / 180 + 2) + 3.8)) * o.nc * o.ncb * Math.sqrt(m * m + g * g) / ((20 * d + 20 * p + 21 * h) / 20 + .305), .9) * Math.pow(1.64 - Math.pow(.29, o.n), .73), C = _ * Math.sqrt(w / 100), S = C * o.fLRoot, O = 50 * Math.sqrt(_ * o.c / (o.aw + 4)), A = Math.log(1 + .0228 * S) / .0228;
		return new e(b, C, w, k, S, O, 1.7000000000000002 * w / (1 + .007 * w), A * Math.cos(x), A * Math.sin(x));
	}
	xyzInViewingConditions(e) {
		let t = Math.pow((0 === this.chroma || 0 === this.j ? 0 : this.chroma / Math.sqrt(this.j / 100)) / Math.pow(1.64 - Math.pow(.29, e.n), .73), 1 / .9), r = this.hue * Math.PI / 180, i = .25 * (Math.cos(r + 2) + 3.8), o = e.aw * Math.pow(this.j / 100, 1 / e.c / e.z), a = 5e4 / 13 * i * e.nc * e.ncb, l = o / e.nbb, s = Math.sin(r), u = Math.cos(r), c = 23 * (l + .305) * t / (23 * a + 11 * t * u + 108 * t * s), f = c * u, d = c * s, p = (460 * l + 451 * f + 288 * d) / 1403, h = (460 * l - 891 * f - 261 * d) / 1403, m = (460 * l - 220 * f - 6300 * d) / 1403, g = Math.max(0, 27.13 * Math.abs(p) / (400 - Math.abs(p))), y = gp(p) * (100 / e.fl) * Math.pow(g, 1 / .42), b = Math.max(0, 27.13 * Math.abs(h) / (400 - Math.abs(h))), x = gp(h) * (100 / e.fl) * Math.pow(b, 1 / .42), w = Math.max(0, 27.13 * Math.abs(m) / (400 - Math.abs(m))), k = gp(m) * (100 / e.fl) * Math.pow(w, 1 / .42), _ = y / e.rgbD[0], C = x / e.rgbD[1], S = k / e.rgbD[2];
		return [
			1.86206786 * _ - 1.01125463 * C + .14918677 * S,
			.38752654 * _ + .62144744 * C - .00897398 * S,
			-.0158415 * _ - .03412294 * C + 1.04996444 * S
		];
	}
}, gE = class e {
	static sanitizeRadians(e) {
		return (e + 8 * Math.PI) % (2 * Math.PI);
	}
	static trueDelinearized(e) {
		let t = e / 100;
		return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055);
	}
	static chromaticAdaptation(e) {
		let t = Math.pow(Math.abs(e), .42);
		return 400 * gp(e) * t / (t + 27.13);
	}
	static hueOf(t) {
		let r = gy(t, e.SCALED_DISCOUNT_FROM_LINRGB), i = e.chromaticAdaptation(r[0]), o = e.chromaticAdaptation(r[1]), a = e.chromaticAdaptation(r[2]);
		return Math.atan2((i + o - 2 * a) / 9, (11 * i + -12 * o + a) / 11);
	}
	static areInCyclicOrder(t, r, i) {
		return e.sanitizeRadians(r - t) < e.sanitizeRadians(i - t);
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
	static setCoordinate(t, r, i, o) {
		let a = e.intercept(t[o], r, i[o]);
		return e.lerpPoint(t, a, i);
	}
	static isBounded(e) {
		return 0 <= e && e <= 100;
	}
	static nthVertex(t, r) {
		let i = e.Y_FROM_LINRGB[0], o = e.Y_FROM_LINRGB[1], a = e.Y_FROM_LINRGB[2], l = r % 4 <= 1 ? 0 : 100, s = 100 * (r % 2 != 0);
		if (r < 4) {
			let r = (t - l * o - s * a) / i;
			return e.isBounded(r) ? [
				r,
				l,
				s
			] : [
				-1,
				-1,
				-1
			];
		}
		if (r < 8) {
			let r = (t - s * i - l * a) / o;
			return e.isBounded(r) ? [
				s,
				r,
				l
			] : [
				-1,
				-1,
				-1
			];
		}
		{
			let r = (t - l * i - s * o) / a;
			return e.isBounded(r) ? [
				l,
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
		let i = [
			-1,
			-1,
			-1
		], o = i, a = 0, l = 0, s = !1, u = !0;
		for (let c = 0; c < 12; c++) {
			let f = e.nthVertex(t, c);
			if (f[0] < 0) continue;
			let d = e.hueOf(f);
			if (!s) {
				i = f, o = f, a = d, l = d, s = !0;
				continue;
			}
			(u || e.areInCyclicOrder(a, d, l)) && (u = !1, e.areInCyclicOrder(a, r, d) ? (o = f, l = d) : (i = f, a = d));
		}
		return [i, o];
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
		let i = e.bisectToSegment(t, r), o = i[0], a = e.hueOf(o), l = i[1];
		for (let t = 0; t < 3; t++) if (o[t] !== l[t]) {
			let i = -1, s = 255;
			o[t] < l[t] ? (i = e.criticalPlaneBelow(e.trueDelinearized(o[t])), s = e.criticalPlaneAbove(e.trueDelinearized(l[t]))) : (i = e.criticalPlaneAbove(e.trueDelinearized(o[t])), s = e.criticalPlaneBelow(e.trueDelinearized(l[t])));
			for (let u = 0; u < 8; u++) if (1 >= Math.abs(s - i)) break;
			else {
				let u = Math.floor((i + s) / 2), c = e.CRITICAL_PLANES[u], f = e.setCoordinate(o, c, l, t), d = e.hueOf(f);
				e.areInCyclicOrder(a, r, d) ? (l = f, s = u) : (o = f, a = d, i = u);
			}
		}
		return e.midpoint(o, l);
	}
	static inverseChromaticAdaptation(e) {
		let t = Math.abs(e), r = Math.max(0, 27.13 * t / (400 - t));
		return gp(e) * Math.pow(r, 1 / .42);
	}
	static findResultByJ(t, r, i) {
		let o = 11 * Math.sqrt(i), a = gM.DEFAULT, l = 1 / Math.pow(1.64 - Math.pow(.29, a.n), .73), s = .25 * (Math.cos(t + 2) + 3.8) * (5e4 / 13) * a.nc * a.ncb, u = Math.sin(t), c = Math.cos(t);
		for (let t = 0; t < 5; t++) {
			let f = o / 100, d = Math.pow((0 === r || 0 === o ? 0 : r / Math.sqrt(f)) * l, 1 / .9), p = a.aw * Math.pow(f, 1 / a.c / a.z) / a.nbb, h = 23 * (p + .305) * d / (23 * s + 11 * d * c + 108 * d * u), m = h * c, g = h * u, y = (460 * p + 451 * m + 288 * g) / 1403, b = (460 * p - 891 * m - 261 * g) / 1403, x = (460 * p - 220 * m - 6300 * g) / 1403, w = e.inverseChromaticAdaptation(y), k = gy([
				w,
				e.inverseChromaticAdaptation(b),
				e.inverseChromaticAdaptation(x)
			], e.LINRGB_FROM_SCALED_DISCOUNT);
			if (k[0] < 0 || k[1] < 0 || k[2] < 0) break;
			let _ = e.Y_FROM_LINRGB[0], C = e.Y_FROM_LINRGB[1], S = e.Y_FROM_LINRGB[2], O = _ * k[0] + C * k[1] + S * k[2];
			if (O <= 0) break;
			if (4 === t || .002 > Math.abs(O - i)) {
				if (k[0] > 100.01 || k[1] > 100.01 || k[2] > 100.01) return 0;
				return gk(k);
			}
			o -= (O - i) * o / (2 * O);
		}
		return 0;
	}
	static solveToInt(t, r, i) {
		if (r < 1e-4 || i < 1e-4 || i > 99.9999) {
			let e = gA(gC(i));
			return gw(e, e, e);
		}
		let o = (t = gg(t)) / 180 * Math.PI, a = gC(i), l = e.findResultByJ(o, r, a);
		return 0 !== l ? l : gk(e.bisectToLimit(a, o));
	}
	static solveToCam(t, r, i) {
		return gT.fromInt(e.solveToInt(t, r, i));
	}
};
gE.SCALED_DISCOUNT_FROM_LINRGB = [
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
], gE.LINRGB_FROM_SCALED_DISCOUNT = [
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
], gE.Y_FROM_LINRGB = [
	.2126,
	.7152,
	.0722
], gE.CRITICAL_PLANES = [
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
var gI = class e {
	static from(t, r, i) {
		return new e(gE.solveToInt(t, r, i));
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
		this.setInternalState(gE.solveToInt(e, this.internalChroma, this.internalTone));
	}
	get chroma() {
		return this.internalChroma;
	}
	set chroma(e) {
		this.setInternalState(gE.solveToInt(this.internalHue, e, this.internalTone));
	}
	get tone() {
		return this.internalTone;
	}
	set tone(e) {
		this.setInternalState(gE.solveToInt(this.internalHue, this.internalChroma, e));
	}
	constructor(e) {
		this.argb = e;
		let t = gT.fromInt(e);
		this.internalHue = t.hue, this.internalChroma = t.chroma, this.internalTone = g_(e), this.argb = e;
	}
	setInternalState(e) {
		let t = gT.fromInt(e);
		this.internalHue = t.hue, this.internalChroma = t.chroma, this.internalTone = g_(e), this.argb = e;
	}
	inViewingConditions(t) {
		let r = gT.fromInt(this.toInt()).xyzInViewingConditions(t), i = gT.fromXyzInViewingConditions(r[0], r[1], r[2], gM.make());
		return e.from(i.hue, i.chroma, gS(r[1]));
	}
}, gD = class e {
	static ratioOfTones(t, r) {
		return t = gh(0, 100, t), r = gh(0, 100, r), e.ratioOfYs(gC(t), gC(r));
	}
	static ratioOfYs(e, t) {
		let r = e > t ? e : t;
		return (r + 5) / ((r === t ? e : t) + 5);
	}
	static lighter(t, r) {
		if (t < 0 || t > 100) return -1;
		let i = gC(t), o = r * (i + 5) - 5, a = e.ratioOfYs(o, i), l = Math.abs(a - r);
		if (a < r && l > .04) return -1;
		let s = gS(o) + .4;
		return s < 0 || s > 100 ? -1 : s;
	}
	static darker(t, r) {
		if (t < 0 || t > 100) return -1;
		let i = gC(t), o = (i + 5) / r - 5, a = e.ratioOfYs(i, o), l = Math.abs(a - r);
		if (a < r && l > .04) return -1;
		let s = gS(o) - .4;
		return s < 0 || s > 100 ? -1 : s;
	}
	static lighterUnsafe(t, r) {
		let i = e.lighter(t, r);
		return i < 0 ? 100 : i;
	}
	static darkerUnsafe(t, r) {
		let i = e.darker(t, r);
		return i < 0 ? 0 : i;
	}
}, gj = class e {
	static isDisliked(e) {
		let t = Math.round(e.hue) >= 90 && 111 >= Math.round(e.hue), r = Math.round(e.chroma) > 16, i = 65 > Math.round(e.tone);
		return t && r && i;
	}
	static fixIfDisliked(t) {
		return e.isDisliked(t) ? gI.from(t.hue, t.chroma, 70) : t;
	}
}, g$ = class e {
	static fromPalette(t) {
		return new e(t.name ?? "", t.palette, t.tone, t.isBackground ?? !1, t.background, t.secondBackground, t.contrastCurve, t.toneDeltaPair);
	}
	constructor(e, t, r, i, o, a, l, s) {
		if (this.name = e, this.palette = t, this.tone = r, this.isBackground = i, this.background = o, this.secondBackground = a, this.contrastCurve = l, this.toneDeltaPair = s, this.hctCache = /* @__PURE__ */ new Map(), !o && a) throw Error(`Color ${e} has secondBackgrounddefined, but background is not defined.`);
		if (!o && l) throw Error(`Color ${e} has contrastCurvedefined, but background is not defined.`);
		if (o && !l) throw Error(`Color ${e} has backgrounddefined, but contrastCurve is not defined.`);
	}
	getArgb(e) {
		return this.getHct(e).toInt();
	}
	getHct(e) {
		let t = this.hctCache.get(e);
		if (null != t) return t;
		let r = this.getTone(e), i = this.palette(e).getHct(r);
		return this.hctCache.size > 4 && this.hctCache.clear(), this.hctCache.set(e, i), i;
	}
	getTone(t) {
		let r = t.contrastLevel < 0;
		if (this.toneDeltaPair) {
			let i = this.toneDeltaPair(t), o = i.roleA, a = i.roleB, l = i.delta, s = i.polarity, u = i.stayTogether, c = this.background(t).getTone(t), f = "nearer" === s || "lighter" === s && !t.isDark || "darker" === s && t.isDark, d = f ? o : a, p = f ? a : o, h = this.name === d.name, m = t.isDark ? 1 : -1, g = d.contrastCurve.get(t.contrastLevel), y = p.contrastCurve.get(t.contrastLevel), b = d.tone(t), x = gD.ratioOfTones(c, b) >= g ? b : e.foregroundTone(c, g), w = p.tone(t), k = gD.ratioOfTones(c, w) >= y ? w : e.foregroundTone(c, y);
			return r && (x = e.foregroundTone(c, g), k = e.foregroundTone(c, y)), (k - x) * m >= l || ((k = gh(0, 100, x + l * m)) - x) * m >= l || (x = gh(0, 100, k - l * m)), 50 <= x && x < 60 ? k = m > 0 ? Math.max(k, (x = 60) + l * m) : Math.min(k, (x = 49) + l * m) : 50 <= k && k < 60 && (k = u ? m > 0 ? Math.max(k, (x = 60) + l * m) : Math.min(k, (x = 49) + l * m) : m > 0 ? 60 : 49), h ? x : k;
		}
		{
			let i = this.tone(t);
			if (null == this.background) return i;
			let o = this.background(t).getTone(t), a = this.contrastCurve.get(t.contrastLevel);
			if (gD.ratioOfTones(o, i) >= a || (i = e.foregroundTone(o, a)), r && (i = e.foregroundTone(o, a)), this.isBackground && 50 <= i && i < 60 && (i = gD.ratioOfTones(49, o) >= a ? 49 : 60), this.secondBackground) {
				let [r, o] = [this.background, this.secondBackground], [l, s] = [r(t).getTone(t), o(t).getTone(t)], [u, c] = [Math.max(l, s), Math.min(l, s)];
				if (gD.ratioOfTones(u, i) >= a && gD.ratioOfTones(c, i) >= a) return i;
				let f = gD.lighter(u, a), d = gD.darker(c, a), p = [];
				return (-1 !== f && p.push(f), -1 !== d && p.push(d), e.tonePrefersLightForeground(l) || e.tonePrefersLightForeground(s)) ? f < 0 ? 100 : f : 1 === p.length ? p[0] : d < 0 ? 0 : d;
			}
			return i;
		}
	}
	static foregroundTone(t, r) {
		let i = gD.lighterUnsafe(t, r), o = gD.darkerUnsafe(t, r), a = gD.ratioOfTones(i, t), l = gD.ratioOfTones(o, t);
		if (!e.tonePrefersLightForeground(t)) return l >= r || l >= a ? o : i;
		{
			let e = .1 > Math.abs(a - l) && a < r && l < r;
			return a >= r || a >= l || e ? i : o;
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
}, gL = class e {
	static fromInt(t) {
		let r = gI.fromInt(t);
		return e.fromHct(r);
	}
	static fromHct(t) {
		return new e(t.hue, t.chroma, t);
	}
	static fromHueAndChroma(t, r) {
		let i = new gR(t, r).create();
		return new e(t, r, i);
	}
	constructor(e, t, r) {
		this.hue = e, this.chroma = t, this.keyColor = r, this.cache = /* @__PURE__ */ new Map();
	}
	tone(e) {
		let t = this.cache.get(e);
		return void 0 === t && (t = gI.from(this.hue, this.chroma, e).toInt(), this.cache.set(e, t)), t;
	}
	getHct(e) {
		return gI.fromInt(this.tone(e));
	}
}, gR = class {
	constructor(e, t) {
		this.hue = e, this.requestedChroma = t, this.chromaCache = /* @__PURE__ */ new Map(), this.maxChromaValue = 200;
	}
	create() {
		let e = 0, t = 100;
		for (; e < t;) {
			let r = Math.floor((e + t) / 2), i = this.maxChroma(r) < this.maxChroma(r + 1);
			if (this.maxChroma(r) >= this.requestedChroma - .01) if (Math.abs(e - 50) < Math.abs(t - 50)) t = r;
			else {
				if (e === r) return gI.from(this.hue, this.requestedChroma, e);
				e = r;
			}
			else i ? e = r + 1 : t = r;
		}
		return gI.from(this.hue, this.requestedChroma, e);
	}
	maxChroma(e) {
		if (this.chromaCache.has(e)) return this.chromaCache.get(e);
		let t = gI.from(this.hue, this.maxChromaValue, e).chroma;
		return this.chromaCache.set(e, t), t;
	}
}, gN = class {
	constructor(e, t, r, i) {
		this.low = e, this.normal = t, this.medium = r, this.high = i;
	}
	get(e) {
		var t, r, i, o, a, l, s, u, c;
		return e <= -1 ? this.low : e < 0 ? (t = this.low, r = this.normal, (1 - (i = (e - -1) / 1)) * t + i * r) : e < .5 ? (o = this.normal, a = this.medium, (1 - (l = (e - 0) / .5)) * o + l * a) : e < 1 ? (s = this.medium, u = this.high, (1 - (c = (e - .5) / .5)) * s + c * u) : this.high;
	}
}, gF = class {
	constructor(e, t, r, i, o) {
		this.roleA = e, this.roleB = t, this.delta = r, this.polarity = i, this.stayTogether = o;
	}
};
function gz(e) {
	return e.variant === K.FIDELITY || e.variant === K.CONTENT;
}
function gV(e) {
	return e.variant === K.MONOCHROME;
}
(P = K || (K = {}))[P.MONOCHROME = 0] = "MONOCHROME", P[P.NEUTRAL = 1] = "NEUTRAL", P[P.TONAL_SPOT = 2] = "TONAL_SPOT", P[P.VIBRANT = 3] = "VIBRANT", P[P.EXPRESSIVE = 4] = "EXPRESSIVE", P[P.FIDELITY = 5] = "FIDELITY", P[P.CONTENT = 6] = "CONTENT", P[P.RAINBOW = 7] = "RAINBOW", P[P.FRUIT_SALAD = 8] = "FRUIT_SALAD";
var gB = class e {
	static highestSurface(t) {
		return t.isDark ? e.surfaceBright : e.surfaceDim;
	}
};
gB.contentAccentToneDelta = 15, gB.primaryPaletteKeyColor = g$.fromPalette({
	name: "primary_palette_key_color",
	palette: (e) => e.primaryPalette,
	tone: (e) => e.primaryPalette.keyColor.tone
}), gB.secondaryPaletteKeyColor = g$.fromPalette({
	name: "secondary_palette_key_color",
	palette: (e) => e.secondaryPalette,
	tone: (e) => e.secondaryPalette.keyColor.tone
}), gB.tertiaryPaletteKeyColor = g$.fromPalette({
	name: "tertiary_palette_key_color",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => e.tertiaryPalette.keyColor.tone
}), gB.neutralPaletteKeyColor = g$.fromPalette({
	name: "neutral_palette_key_color",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.neutralPalette.keyColor.tone
}), gB.neutralVariantPaletteKeyColor = g$.fromPalette({
	name: "neutral_variant_palette_key_color",
	palette: (e) => e.neutralVariantPalette,
	tone: (e) => e.neutralVariantPalette.keyColor.tone
}), gB.background = g$.fromPalette({
	name: "background",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 6 : 98,
	isBackground: !0
}), gB.onBackground = g$.fromPalette({
	name: "on_background",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 90 : 10,
	background: (e) => gB.background,
	contrastCurve: new gN(3, 3, 4.5, 7)
}), gB.surface = g$.fromPalette({
	name: "surface",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 6 : 98,
	isBackground: !0
}), gB.surfaceDim = g$.fromPalette({
	name: "surface_dim",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 6 : new gN(87, 87, 80, 75).get(e.contrastLevel),
	isBackground: !0
}), gB.surfaceBright = g$.fromPalette({
	name: "surface_bright",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? new gN(24, 24, 29, 34).get(e.contrastLevel) : 98,
	isBackground: !0
}), gB.surfaceContainerLowest = g$.fromPalette({
	name: "surface_container_lowest",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? new gN(4, 4, 2, 0).get(e.contrastLevel) : 100,
	isBackground: !0
}), gB.surfaceContainerLow = g$.fromPalette({
	name: "surface_container_low",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? new gN(10, 10, 11, 12).get(e.contrastLevel) : new gN(96, 96, 96, 95).get(e.contrastLevel),
	isBackground: !0
}), gB.surfaceContainer = g$.fromPalette({
	name: "surface_container",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? new gN(12, 12, 16, 20).get(e.contrastLevel) : new gN(94, 94, 92, 90).get(e.contrastLevel),
	isBackground: !0
}), gB.surfaceContainerHigh = g$.fromPalette({
	name: "surface_container_high",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? new gN(17, 17, 21, 25).get(e.contrastLevel) : new gN(92, 92, 88, 85).get(e.contrastLevel),
	isBackground: !0
}), gB.surfaceContainerHighest = g$.fromPalette({
	name: "surface_container_highest",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? new gN(22, 22, 26, 30).get(e.contrastLevel) : new gN(90, 90, 84, 80).get(e.contrastLevel),
	isBackground: !0
}), gB.onSurface = g$.fromPalette({
	name: "on_surface",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 90 : 10,
	background: (e) => gB.highestSurface(e),
	contrastCurve: new gN(4.5, 7, 11, 21)
}), gB.surfaceVariant = g$.fromPalette({
	name: "surface_variant",
	palette: (e) => e.neutralVariantPalette,
	tone: (e) => e.isDark ? 30 : 90,
	isBackground: !0
}), gB.onSurfaceVariant = g$.fromPalette({
	name: "on_surface_variant",
	palette: (e) => e.neutralVariantPalette,
	tone: (e) => e.isDark ? 80 : 30,
	background: (e) => gB.highestSurface(e),
	contrastCurve: new gN(3, 4.5, 7, 11)
}), gB.inverseSurface = g$.fromPalette({
	name: "inverse_surface",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 90 : 20
}), gB.inverseOnSurface = g$.fromPalette({
	name: "inverse_on_surface",
	palette: (e) => e.neutralPalette,
	tone: (e) => e.isDark ? 20 : 95,
	background: (e) => gB.inverseSurface,
	contrastCurve: new gN(4.5, 7, 11, 21)
}), gB.outline = g$.fromPalette({
	name: "outline",
	palette: (e) => e.neutralVariantPalette,
	tone: (e) => e.isDark ? 60 : 50,
	background: (e) => gB.highestSurface(e),
	contrastCurve: new gN(1.5, 3, 4.5, 7)
}), gB.outlineVariant = g$.fromPalette({
	name: "outline_variant",
	palette: (e) => e.neutralVariantPalette,
	tone: (e) => e.isDark ? 30 : 80,
	background: (e) => gB.highestSurface(e),
	contrastCurve: new gN(1, 1, 3, 4.5)
}), gB.shadow = g$.fromPalette({
	name: "shadow",
	palette: (e) => e.neutralPalette,
	tone: (e) => 0
}), gB.scrim = g$.fromPalette({
	name: "scrim",
	palette: (e) => e.neutralPalette,
	tone: (e) => 0
}), gB.surfaceTint = g$.fromPalette({
	name: "surface_tint",
	palette: (e) => e.primaryPalette,
	tone: (e) => e.isDark ? 80 : 40,
	isBackground: !0
}), gB.primary = g$.fromPalette({
	name: "primary",
	palette: (e) => e.primaryPalette,
	tone: (e) => gV(e) ? 100 * !!e.isDark : e.isDark ? 80 : 40,
	isBackground: !0,
	background: (e) => gB.highestSurface(e),
	contrastCurve: new gN(3, 4.5, 7, 7),
	toneDeltaPair: (e) => new gF(gB.primaryContainer, gB.primary, 10, "nearer", !1)
}), gB.onPrimary = g$.fromPalette({
	name: "on_primary",
	palette: (e) => e.primaryPalette,
	tone: (e) => gV(e) ? e.isDark ? 10 : 90 : e.isDark ? 20 : 100,
	background: (e) => gB.primary,
	contrastCurve: new gN(4.5, 7, 11, 21)
}), gB.primaryContainer = g$.fromPalette({
	name: "primary_container",
	palette: (e) => e.primaryPalette,
	tone: (e) => gz(e) ? e.sourceColorHct.tone : gV(e) ? e.isDark ? 85 : 25 : e.isDark ? 30 : 90,
	isBackground: !0,
	background: (e) => gB.highestSurface(e),
	contrastCurve: new gN(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new gF(gB.primaryContainer, gB.primary, 10, "nearer", !1)
}), gB.onPrimaryContainer = g$.fromPalette({
	name: "on_primary_container",
	palette: (e) => e.primaryPalette,
	tone: (e) => gz(e) ? g$.foregroundTone(gB.primaryContainer.tone(e), 4.5) : gV(e) ? 100 * !e.isDark : e.isDark ? 90 : 30,
	background: (e) => gB.primaryContainer,
	contrastCurve: new gN(3, 4.5, 7, 11)
}), gB.inversePrimary = g$.fromPalette({
	name: "inverse_primary",
	palette: (e) => e.primaryPalette,
	tone: (e) => e.isDark ? 40 : 80,
	background: (e) => gB.inverseSurface,
	contrastCurve: new gN(3, 4.5, 7, 7)
}), gB.secondary = g$.fromPalette({
	name: "secondary",
	palette: (e) => e.secondaryPalette,
	tone: (e) => e.isDark ? 80 : 40,
	isBackground: !0,
	background: (e) => gB.highestSurface(e),
	contrastCurve: new gN(3, 4.5, 7, 7),
	toneDeltaPair: (e) => new gF(gB.secondaryContainer, gB.secondary, 10, "nearer", !1)
}), gB.onSecondary = g$.fromPalette({
	name: "on_secondary",
	palette: (e) => e.secondaryPalette,
	tone: (e) => gV(e) ? e.isDark ? 10 : 100 : e.isDark ? 20 : 100,
	background: (e) => gB.secondary,
	contrastCurve: new gN(4.5, 7, 11, 21)
}), gB.secondaryContainer = g$.fromPalette({
	name: "secondary_container",
	palette: (e) => e.secondaryPalette,
	tone: (e) => {
		let t = e.isDark ? 30 : 90;
		return gV(e) ? e.isDark ? 30 : 85 : gz(e) ? function(e, t, r, i) {
			let o = r, a = gI.from(e, t, r);
			if (a.chroma < t) {
				let r = a.chroma;
				for (; a.chroma < t;) {
					o += i ? -1 : 1;
					let l = gI.from(e, t, o);
					if (r > l.chroma || .4 > Math.abs(l.chroma - t)) break;
					Math.abs(l.chroma - t) < Math.abs(a.chroma - t) && (a = l), r = Math.max(r, l.chroma);
				}
			}
			return o;
		}(e.secondaryPalette.hue, e.secondaryPalette.chroma, t, !e.isDark) : t;
	},
	isBackground: !0,
	background: (e) => gB.highestSurface(e),
	contrastCurve: new gN(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new gF(gB.secondaryContainer, gB.secondary, 10, "nearer", !1)
}), gB.onSecondaryContainer = g$.fromPalette({
	name: "on_secondary_container",
	palette: (e) => e.secondaryPalette,
	tone: (e) => gV(e) ? e.isDark ? 90 : 10 : gz(e) ? g$.foregroundTone(gB.secondaryContainer.tone(e), 4.5) : e.isDark ? 90 : 30,
	background: (e) => gB.secondaryContainer,
	contrastCurve: new gN(3, 4.5, 7, 11)
}), gB.tertiary = g$.fromPalette({
	name: "tertiary",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => gV(e) ? e.isDark ? 90 : 25 : e.isDark ? 80 : 40,
	isBackground: !0,
	background: (e) => gB.highestSurface(e),
	contrastCurve: new gN(3, 4.5, 7, 7),
	toneDeltaPair: (e) => new gF(gB.tertiaryContainer, gB.tertiary, 10, "nearer", !1)
}), gB.onTertiary = g$.fromPalette({
	name: "on_tertiary",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => gV(e) ? e.isDark ? 10 : 90 : e.isDark ? 20 : 100,
	background: (e) => gB.tertiary,
	contrastCurve: new gN(4.5, 7, 11, 21)
}), gB.tertiaryContainer = g$.fromPalette({
	name: "tertiary_container",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => {
		if (gV(e)) return e.isDark ? 60 : 49;
		if (!gz(e)) return e.isDark ? 30 : 90;
		let t = e.tertiaryPalette.getHct(e.sourceColorHct.tone);
		return gj.fixIfDisliked(t).tone;
	},
	isBackground: !0,
	background: (e) => gB.highestSurface(e),
	contrastCurve: new gN(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new gF(gB.tertiaryContainer, gB.tertiary, 10, "nearer", !1)
}), gB.onTertiaryContainer = g$.fromPalette({
	name: "on_tertiary_container",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => gV(e) ? 100 * !e.isDark : gz(e) ? g$.foregroundTone(gB.tertiaryContainer.tone(e), 4.5) : e.isDark ? 90 : 30,
	background: (e) => gB.tertiaryContainer,
	contrastCurve: new gN(3, 4.5, 7, 11)
}), gB.error = g$.fromPalette({
	name: "error",
	palette: (e) => e.errorPalette,
	tone: (e) => e.isDark ? 80 : 40,
	isBackground: !0,
	background: (e) => gB.highestSurface(e),
	contrastCurve: new gN(3, 4.5, 7, 7),
	toneDeltaPair: (e) => new gF(gB.errorContainer, gB.error, 10, "nearer", !1)
}), gB.onError = g$.fromPalette({
	name: "on_error",
	palette: (e) => e.errorPalette,
	tone: (e) => e.isDark ? 20 : 100,
	background: (e) => gB.error,
	contrastCurve: new gN(4.5, 7, 11, 21)
}), gB.errorContainer = g$.fromPalette({
	name: "error_container",
	palette: (e) => e.errorPalette,
	tone: (e) => e.isDark ? 30 : 90,
	isBackground: !0,
	background: (e) => gB.highestSurface(e),
	contrastCurve: new gN(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new gF(gB.errorContainer, gB.error, 10, "nearer", !1)
}), gB.onErrorContainer = g$.fromPalette({
	name: "on_error_container",
	palette: (e) => e.errorPalette,
	tone: (e) => gV(e) ? e.isDark ? 90 : 10 : e.isDark ? 90 : 30,
	background: (e) => gB.errorContainer,
	contrastCurve: new gN(3, 4.5, 7, 11)
}), gB.primaryFixed = g$.fromPalette({
	name: "primary_fixed",
	palette: (e) => e.primaryPalette,
	tone: (e) => gV(e) ? 40 : 90,
	isBackground: !0,
	background: (e) => gB.highestSurface(e),
	contrastCurve: new gN(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new gF(gB.primaryFixed, gB.primaryFixedDim, 10, "lighter", !0)
}), gB.primaryFixedDim = g$.fromPalette({
	name: "primary_fixed_dim",
	palette: (e) => e.primaryPalette,
	tone: (e) => gV(e) ? 30 : 80,
	isBackground: !0,
	background: (e) => gB.highestSurface(e),
	contrastCurve: new gN(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new gF(gB.primaryFixed, gB.primaryFixedDim, 10, "lighter", !0)
}), gB.onPrimaryFixed = g$.fromPalette({
	name: "on_primary_fixed",
	palette: (e) => e.primaryPalette,
	tone: (e) => gV(e) ? 100 : 10,
	background: (e) => gB.primaryFixedDim,
	secondBackground: (e) => gB.primaryFixed,
	contrastCurve: new gN(4.5, 7, 11, 21)
}), gB.onPrimaryFixedVariant = g$.fromPalette({
	name: "on_primary_fixed_variant",
	palette: (e) => e.primaryPalette,
	tone: (e) => gV(e) ? 90 : 30,
	background: (e) => gB.primaryFixedDim,
	secondBackground: (e) => gB.primaryFixed,
	contrastCurve: new gN(3, 4.5, 7, 11)
}), gB.secondaryFixed = g$.fromPalette({
	name: "secondary_fixed",
	palette: (e) => e.secondaryPalette,
	tone: (e) => gV(e) ? 80 : 90,
	isBackground: !0,
	background: (e) => gB.highestSurface(e),
	contrastCurve: new gN(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new gF(gB.secondaryFixed, gB.secondaryFixedDim, 10, "lighter", !0)
}), gB.secondaryFixedDim = g$.fromPalette({
	name: "secondary_fixed_dim",
	palette: (e) => e.secondaryPalette,
	tone: (e) => gV(e) ? 70 : 80,
	isBackground: !0,
	background: (e) => gB.highestSurface(e),
	contrastCurve: new gN(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new gF(gB.secondaryFixed, gB.secondaryFixedDim, 10, "lighter", !0)
}), gB.onSecondaryFixed = g$.fromPalette({
	name: "on_secondary_fixed",
	palette: (e) => e.secondaryPalette,
	tone: (e) => 10,
	background: (e) => gB.secondaryFixedDim,
	secondBackground: (e) => gB.secondaryFixed,
	contrastCurve: new gN(4.5, 7, 11, 21)
}), gB.onSecondaryFixedVariant = g$.fromPalette({
	name: "on_secondary_fixed_variant",
	palette: (e) => e.secondaryPalette,
	tone: (e) => gV(e) ? 25 : 30,
	background: (e) => gB.secondaryFixedDim,
	secondBackground: (e) => gB.secondaryFixed,
	contrastCurve: new gN(3, 4.5, 7, 11)
}), gB.tertiaryFixed = g$.fromPalette({
	name: "tertiary_fixed",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => gV(e) ? 40 : 90,
	isBackground: !0,
	background: (e) => gB.highestSurface(e),
	contrastCurve: new gN(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new gF(gB.tertiaryFixed, gB.tertiaryFixedDim, 10, "lighter", !0)
}), gB.tertiaryFixedDim = g$.fromPalette({
	name: "tertiary_fixed_dim",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => gV(e) ? 30 : 80,
	isBackground: !0,
	background: (e) => gB.highestSurface(e),
	contrastCurve: new gN(1, 1, 3, 4.5),
	toneDeltaPair: (e) => new gF(gB.tertiaryFixed, gB.tertiaryFixedDim, 10, "lighter", !0)
}), gB.onTertiaryFixed = g$.fromPalette({
	name: "on_tertiary_fixed",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => gV(e) ? 100 : 10,
	background: (e) => gB.tertiaryFixedDim,
	secondBackground: (e) => gB.tertiaryFixed,
	contrastCurve: new gN(4.5, 7, 11, 21)
}), gB.onTertiaryFixedVariant = g$.fromPalette({
	name: "on_tertiary_fixed_variant",
	palette: (e) => e.tertiaryPalette,
	tone: (e) => gV(e) ? 90 : 30,
	background: (e) => gB.tertiaryFixedDim,
	secondBackground: (e) => gB.tertiaryFixed,
	contrastCurve: new gN(3, 4.5, 7, 11)
});
var gH = class {
	constructor(e) {
		this.sourceColorArgb = e.sourceColorArgb, this.variant = e.variant, this.contrastLevel = e.contrastLevel, this.isDark = e.isDark, this.sourceColorHct = gI.fromInt(e.sourceColorArgb), this.primaryPalette = e.primaryPalette, this.secondaryPalette = e.secondaryPalette, this.tertiaryPalette = e.tertiaryPalette, this.neutralPalette = e.neutralPalette, this.neutralVariantPalette = e.neutralVariantPalette, this.errorPalette = gL.fromHueAndChroma(25, 84);
	}
	static getRotatedHue(e, t, r) {
		let i = e.hue;
		if (t.length !== r.length) throw Error(`mismatch between hue length ${t.length} & rotations ${r.length}`);
		if (1 === r.length) return gg(e.hue + r[0]);
		let o = t.length;
		for (let e = 0; e <= o - 2; e++) {
			let o = t[e], a = t[e + 1];
			if (o < i && i < a) return gg(i + r[e]);
		}
		return i;
	}
	getArgb(e) {
		return e.getArgb(this);
	}
	getHct(e) {
		return e.getHct(this);
	}
	get primaryPaletteKeyColor() {
		return this.getArgb(gB.primaryPaletteKeyColor);
	}
	get secondaryPaletteKeyColor() {
		return this.getArgb(gB.secondaryPaletteKeyColor);
	}
	get tertiaryPaletteKeyColor() {
		return this.getArgb(gB.tertiaryPaletteKeyColor);
	}
	get neutralPaletteKeyColor() {
		return this.getArgb(gB.neutralPaletteKeyColor);
	}
	get neutralVariantPaletteKeyColor() {
		return this.getArgb(gB.neutralVariantPaletteKeyColor);
	}
	get background() {
		return this.getArgb(gB.background);
	}
	get onBackground() {
		return this.getArgb(gB.onBackground);
	}
	get surface() {
		return this.getArgb(gB.surface);
	}
	get surfaceDim() {
		return this.getArgb(gB.surfaceDim);
	}
	get surfaceBright() {
		return this.getArgb(gB.surfaceBright);
	}
	get surfaceContainerLowest() {
		return this.getArgb(gB.surfaceContainerLowest);
	}
	get surfaceContainerLow() {
		return this.getArgb(gB.surfaceContainerLow);
	}
	get surfaceContainer() {
		return this.getArgb(gB.surfaceContainer);
	}
	get surfaceContainerHigh() {
		return this.getArgb(gB.surfaceContainerHigh);
	}
	get surfaceContainerHighest() {
		return this.getArgb(gB.surfaceContainerHighest);
	}
	get onSurface() {
		return this.getArgb(gB.onSurface);
	}
	get surfaceVariant() {
		return this.getArgb(gB.surfaceVariant);
	}
	get onSurfaceVariant() {
		return this.getArgb(gB.onSurfaceVariant);
	}
	get inverseSurface() {
		return this.getArgb(gB.inverseSurface);
	}
	get inverseOnSurface() {
		return this.getArgb(gB.inverseOnSurface);
	}
	get outline() {
		return this.getArgb(gB.outline);
	}
	get outlineVariant() {
		return this.getArgb(gB.outlineVariant);
	}
	get shadow() {
		return this.getArgb(gB.shadow);
	}
	get scrim() {
		return this.getArgb(gB.scrim);
	}
	get surfaceTint() {
		return this.getArgb(gB.surfaceTint);
	}
	get primary() {
		return this.getArgb(gB.primary);
	}
	get onPrimary() {
		return this.getArgb(gB.onPrimary);
	}
	get primaryContainer() {
		return this.getArgb(gB.primaryContainer);
	}
	get onPrimaryContainer() {
		return this.getArgb(gB.onPrimaryContainer);
	}
	get inversePrimary() {
		return this.getArgb(gB.inversePrimary);
	}
	get secondary() {
		return this.getArgb(gB.secondary);
	}
	get onSecondary() {
		return this.getArgb(gB.onSecondary);
	}
	get secondaryContainer() {
		return this.getArgb(gB.secondaryContainer);
	}
	get onSecondaryContainer() {
		return this.getArgb(gB.onSecondaryContainer);
	}
	get tertiary() {
		return this.getArgb(gB.tertiary);
	}
	get onTertiary() {
		return this.getArgb(gB.onTertiary);
	}
	get tertiaryContainer() {
		return this.getArgb(gB.tertiaryContainer);
	}
	get onTertiaryContainer() {
		return this.getArgb(gB.onTertiaryContainer);
	}
	get error() {
		return this.getArgb(gB.error);
	}
	get onError() {
		return this.getArgb(gB.onError);
	}
	get errorContainer() {
		return this.getArgb(gB.errorContainer);
	}
	get onErrorContainer() {
		return this.getArgb(gB.onErrorContainer);
	}
	get primaryFixed() {
		return this.getArgb(gB.primaryFixed);
	}
	get primaryFixedDim() {
		return this.getArgb(gB.primaryFixedDim);
	}
	get onPrimaryFixed() {
		return this.getArgb(gB.onPrimaryFixed);
	}
	get onPrimaryFixedVariant() {
		return this.getArgb(gB.onPrimaryFixedVariant);
	}
	get secondaryFixed() {
		return this.getArgb(gB.secondaryFixed);
	}
	get secondaryFixedDim() {
		return this.getArgb(gB.secondaryFixedDim);
	}
	get onSecondaryFixed() {
		return this.getArgb(gB.onSecondaryFixed);
	}
	get onSecondaryFixedVariant() {
		return this.getArgb(gB.onSecondaryFixedVariant);
	}
	get tertiaryFixed() {
		return this.getArgb(gB.tertiaryFixed);
	}
	get tertiaryFixedDim() {
		return this.getArgb(gB.tertiaryFixedDim);
	}
	get onTertiaryFixed() {
		return this.getArgb(gB.onTertiaryFixed);
	}
	get onTertiaryFixedVariant() {
		return this.getArgb(gB.onTertiaryFixedVariant);
	}
}, gW = class e {
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
		let i = new e(r.primary, t);
		return r.secondary && (i.a2 = new e(r.secondary, t).a1), r.tertiary && (i.a3 = new e(r.tertiary, t).a1), r.error && (i.error = new e(r.error, t).a1), r.neutral && (i.n1 = new e(r.neutral, t).n1), r.neutralVariant && (i.n2 = new e(r.neutralVariant, t).n2), i;
	}
	constructor(e, t) {
		let r = gI.fromInt(e), i = r.hue, o = r.chroma;
		t ? (this.a1 = gL.fromHueAndChroma(i, o), this.a2 = gL.fromHueAndChroma(i, o / 3), this.a3 = gL.fromHueAndChroma(i + 60, o / 2), this.n1 = gL.fromHueAndChroma(i, Math.min(o / 12, 4)), this.n2 = gL.fromHueAndChroma(i, Math.min(o / 6, 8))) : (this.a1 = gL.fromHueAndChroma(i, Math.max(48, o)), this.a2 = gL.fromHueAndChroma(i, 16), this.a3 = gL.fromHueAndChroma(i + 60, 24), this.n1 = gL.fromHueAndChroma(i, 4), this.n2 = gL.fromHueAndChroma(i, 8)), this.error = gL.fromHueAndChroma(25, 84);
	}
}, gU = class e extends gH {
	constructor(t, r, i) {
		super({
			sourceColorArgb: t.toInt(),
			variant: K.EXPRESSIVE,
			contrastLevel: i,
			isDark: r,
			primaryPalette: gL.fromHueAndChroma(gg(t.hue + 240), 40),
			secondaryPalette: gL.fromHueAndChroma(gH.getRotatedHue(t, e.hues, e.secondaryRotations), 24),
			tertiaryPalette: gL.fromHueAndChroma(gH.getRotatedHue(t, e.hues, e.tertiaryRotations), 32),
			neutralPalette: gL.fromHueAndChroma(t.hue + 15, 8),
			neutralVariantPalette: gL.fromHueAndChroma(t.hue + 15, 12)
		});
	}
};
gU.hues = [
	0,
	21,
	51,
	121,
	151,
	191,
	271,
	321,
	360
], gU.secondaryRotations = [
	45,
	95,
	45,
	20,
	45,
	90,
	45,
	45,
	45
], gU.tertiaryRotations = [
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
var gq = class e extends gH {
	constructor(t, r, i) {
		super({
			sourceColorArgb: t.toInt(),
			variant: K.VIBRANT,
			contrastLevel: i,
			isDark: r,
			primaryPalette: gL.fromHueAndChroma(t.hue, 200),
			secondaryPalette: gL.fromHueAndChroma(gH.getRotatedHue(t, e.hues, e.secondaryRotations), 24),
			tertiaryPalette: gL.fromHueAndChroma(gH.getRotatedHue(t, e.hues, e.tertiaryRotations), 32),
			neutralPalette: gL.fromHueAndChroma(t.hue, 10),
			neutralVariantPalette: gL.fromHueAndChroma(t.hue, 12)
		});
	}
};
gq.hues = [
	0,
	41,
	61,
	101,
	131,
	181,
	251,
	301,
	360
], gq.secondaryRotations = [
	18,
	15,
	10,
	12,
	15,
	18,
	15,
	12,
	12
], gq.tertiaryRotations = [
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
var gK = {
	desired: 4,
	fallbackColorARGB: 4282549748,
	filter: !0
};
function gG(e, t) {
	return e.score > t.score ? -1 : +(e.score < t.score);
}
var gJ = class e {
	constructor() {}
	static score(t, r) {
		let { desired: i, fallbackColorARGB: o, filter: a } = {
			...gK,
			...r
		}, l = [], s = Array(360).fill(0), u = 0;
		for (let [e, r] of t.entries()) {
			let t = gI.fromInt(e);
			l.push(t);
			let i = Math.floor(t.hue);
			s[i] += r, u += r;
		}
		let c = Array(360).fill(0);
		for (let e = 0; e < 360; e++) {
			let t = s[e] / u;
			for (let r = e - 14; r < e + 16; r++) {
				let e = gm(r);
				c[e] += t;
			}
		}
		let f = [];
		for (let t of l) {
			let r = c[gm(Math.round(t.hue))];
			if (a && (t.chroma < e.CUTOFF_CHROMA || r <= e.CUTOFF_EXCITED_PROPORTION)) continue;
			let i = 100 * r * e.WEIGHT_PROPORTION, o = t.chroma < e.TARGET_CHROMA ? e.WEIGHT_CHROMA_BELOW : e.WEIGHT_CHROMA_ABOVE, l = i + (t.chroma - e.TARGET_CHROMA) * o;
			f.push({
				hct: t,
				score: l
			});
		}
		f.sort(gG);
		let d = [];
		for (let e = 90; e >= 15; e--) {
			for (let { hct: t } of (d.length = 0, f)) if (d.find((r) => 180 - Math.abs(Math.abs(t.hue - r.hue) - 180) < e) || d.push(t), d.length >= i) break;
			if (d.length >= i) break;
		}
		let p = [];
		for (let e of (0 === d.length && p.push(o), d)) p.push(e.toInt());
		return p;
	}
};
function gZ(e) {
	let t = 3 === (e = e.replace("#", "")).length, r = 6 === e.length, i = 8 === e.length;
	if (!t && !r && !i) throw Error("unexpected hex " + e);
	let o = 0, a = 0, l = 0;
	return t ? (o = gX(e.slice(0, 1).repeat(2)), a = gX(e.slice(1, 2).repeat(2)), l = gX(e.slice(2, 3).repeat(2))) : r ? (o = gX(e.slice(0, 2)), a = gX(e.slice(2, 4)), l = gX(e.slice(4, 6))) : i && (o = gX(e.slice(2, 4)), a = gX(e.slice(4, 6)), l = gX(e.slice(6, 8))), (-16777216 | (255 & o) << 16 | (255 & a) << 8 | 255 & l) >>> 0;
}
function gX(e) {
	return parseInt(e, 16);
}
gJ.TARGET_CHROMA = 48, gJ.WEIGHT_PROPORTION = .7, gJ.WEIGHT_CHROMA_ABOVE = .3, gJ.WEIGHT_CHROMA_BELOW = .1, gJ.CUTOFF_CHROMA = 5, gJ.CUTOFF_EXCITED_PROPORTION = .01;
var gY = {
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
}, gQ = (e) => {
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
}, g0 = (e) => ({
	primary: !0,
	secondary: !0,
	tertiary: !0,
	error: !0,
	warning: !0,
	success: !0
})[e], g1 = class e {
	static toHEX = (e) => `#${gQ(e).map((e) => iB(e.toString(16), 2, "0")).join("")}`;
	static createRoleColorRuleBuilder(e) {
		let t = {}, r = new Proxy({}, { get: (i, o) => "build" == o ? () => t : (i, o) => (t[`${i}${e ? `:${e}` : ""}`] = o, r) });
		return r;
	}
	static createRoleColorSourcePicker() {
		return new Proxy({}, { get: (e, t) => (e) => [t, e] });
	}
	static fromColors = (t) => {
		let { primary: r, secondary: i, tertiary: o, neutral: a, neutralVariant: l, error: s,...u } = t, c = gW.contentFromColors({
			primary: gZ(r),
			secondary: i ? gZ(i) : void 0,
			tertiary: o ? gZ(o) : void 0,
			error: s ? gZ(s) : void 0
		});
		return a && (c.n1 = gL.fromHueAndChroma(gZ(a), 4)), l && (c.n2 = gL.fromHueAndChroma(gZ(l), 8)), new e({
			primary: c.a1,
			secondary: c.a2,
			tertiary: c.a3,
			neutral: c.n1,
			neutralVariant: c.n2,
			error: c.error,
			...iv(u, (e) => gL.fromInt(gZ(e)))
		});
	};
	constructor(e) {
		this.seeds = e;
	}
	normalizeRoleRules(t = {}) {
		let r = e.createRoleColorSourcePicker(), i = e.createRoleColorRuleBuilder().rule("shadow", r.neutral(0)).rule("scrim", r.neutral(0)).rule("outline", r.neutralVariant(87)).rule("outline-variant", r.neutralVariant(80)).rule("surface", r.neutral(99)).rule("on-surface", r.neutral(10)).rule("surface-variant", r.neutralVariant(90)).rule("on-surface-variant", r.neutralVariant(30)).rule("surface-dim", r.neutral(87)).rule("surface-bright", r.neutral(98)).rule("surface-container-lowest", r.neutral(100)).rule("surface-container-low", r.neutral(96)).rule("surface-container", r.neutral(94)).rule("surface-container-high", r.neutral(92)).rule("surface-container-highest", r.neutral(90)).rule("inverse-surface", r.neutral(20)).rule("inverse-on-surface", r.neutral(95)).rule("inverse-primary", r.primary(80)), o = e.createRoleColorRuleBuilder("dark").rule("shadow", r.neutral(0)).rule("scrim", r.neutral(0)).rule("outline", r.neutralVariant(60)).rule("outline-variant", r.neutralVariant(30)).rule("surface", r.neutral(10)).rule("on-surface", r.neutral(90)).rule("surface-variant", r.neutralVariant(30)).rule("on-surface-variant", r.neutralVariant(80)).rule("surface-dim", r.neutral(6)).rule("surface-bright", r.neutral(24)).rule("surface-container-lowest", r.neutral(4)).rule("surface-container-low", r.neutral(10)).rule("surface-container", r.neutral(12)).rule("surface-container-high", r.neutral(17)).rule("surface-container-highest", r.neutral(22)).rule("inverse-surface", r.neutral(90)).rule("inverse-on-surface", r.neutral(20)).rule("inverse-primary", r.primary(40));
		for (let e in this.seeds) e.startsWith("neutral") || (i = i.rule(e, r[e](40)).rule(`on-${e}`, r[e](100)).rule(`${e}-container`, r[e](90)).rule(`on-${e}-container`, r[e](10)), o = o.rule(e, r[e](80)).rule(`on-${e}`, r[e](20)).rule(`${e}-container`, r[e](30)).rule(`on-${e}-container`, r[e](90)));
		return {
			...i.build(),
			...o.build(),
			...t
		};
	}
	getThemeRoleColors(e) {
		let t = {}, r = {};
		for (let [i, [o, a]] of Object.entries(e)) if (this.seeds[o]) {
			if (i.endsWith(":dark")) {
				r[i.split(":")[0]] = gY[a] ? `${String(o)}.${a}` : this.seeds[o]?.tone(a);
				continue;
			}
			t[i] = gY[a] ? `${String(o)}.${a}` : this.seeds[o]?.tone(a);
		}
		return [t, r];
	}
	toDesignTokens(e = {}) {
		let t = this.normalizeRoleRules(e), [r, i] = this.getThemeRoleColors(t), o = {}, a = {};
		for (let e in r) if (o[`${e}`] = {
			_default: im(r[e]) ? gQ(r[e]) : r[e],
			_dark: im(i[e]) ? gQ(i[e]) : i[e]
		}, g0(e) && (a[`${e}`] = m8.mixin({
			bgColor: `sys.${e}`,
			color: `sys.on-${e}`
		}), a[`${e}-container`] = m8.mixin({
			bgColor: `sys.${e}-container`,
			color: `sys.on-${e}-container`
		})), e.startsWith("surface")) {
			if (e.includes("container")) {
				a[`${e}`] = m8.mixin({
					bgColor: `sys.${e}`,
					color: "sys.on-surface"
				});
				continue;
			}
			a[`${e}`] = m8.mixin({
				bgColor: `sys.${e}`,
				color: "sys.on-surface"
			}), a[`on-${e}`] = m8.mixin({
				bgColor: `sys.on-${e}`,
				color: "sys.inverse-on-surface"
			});
		}
		return {
			color: m8.color({
				...iv(this.seeds, (e) => Object.keys(gY).reduce((t, r) => Object.assign(t, { [r]: gQ(e.tone(parseInt(r))) }), {})),
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
				sys: o
			}),
			containerStyle: m8.customMixin("containerStyle", { sys: a })
		};
	}
};
let g2 = m8.rounded({
	xs: 4,
	sm: 8,
	md: 12,
	lg: 16,
	xl: 28
}), g4 = {
	font: m8.font({
		brand: "-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
		plain: "-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
		code: "'Lucida Console',Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace"
	}),
	fontWeight: m8.fontWeight({
		regular: 400,
		medium: 500,
		bold: 700
	}),
	textStyle: m8.customMixin("textStyle", { sys: {
		"display-large": m8.mixin({
			lineHeight: 64,
			fontSize: 57,
			letterSpacing: -.25,
			fontWeight: "regular",
			font: "brand"
		}),
		"display-medium": m8.mixin({
			lineHeight: 52,
			fontSize: 45,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "brand"
		}),
		"display-small": m8.mixin({
			lineHeight: 44,
			fontSize: 36,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "brand"
		}),
		"headline-large": m8.mixin({
			lineHeight: 40,
			fontSize: 32,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "brand"
		}),
		"headline-medium": m8.mixin({
			lineHeight: 36,
			fontSize: 28,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "brand"
		}),
		"headline-small": m8.mixin({
			lineHeight: 32,
			fontSize: 24,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "plain"
		}),
		"title-large": m8.mixin({
			lineHeight: 28,
			fontSize: 22,
			letterSpacing: 0,
			fontWeight: "regular",
			font: "brand"
		}),
		"title-medium": m8.mixin({
			lineHeight: 24,
			fontSize: 16,
			letterSpacing: .15,
			fontWeight: "medium",
			font: "plain"
		}),
		"title-small": m8.mixin({
			lineHeight: 20,
			fontSize: 14,
			letterSpacing: .1,
			fontWeight: "medium",
			font: "plain"
		}),
		"label-large": m8.mixin({
			lineHeight: 20,
			fontSize: 14,
			letterSpacing: .1,
			fontWeight: "medium",
			font: "plain"
		}),
		"label-medium": m8.mixin({
			lineHeight: 16,
			fontSize: 12,
			letterSpacing: .5,
			fontWeight: "medium",
			font: "plain"
		}),
		"label-small": m8.mixin({
			lineHeight: 16,
			fontSize: 11,
			letterSpacing: .5,
			fontWeight: "medium",
			font: "plain"
		}),
		"body-large": m8.mixin({
			lineHeight: 24,
			fontSize: 16,
			letterSpacing: .5,
			fontWeight: "regular",
			font: "plain"
		}),
		"body-medium": m8.mixin({
			lineHeight: 20,
			fontSize: 14,
			letterSpacing: .25,
			fontWeight: "regular",
			font: "plain"
		}),
		"body-small": m8.mixin({
			lineHeight: 16,
			fontSize: 12,
			letterSpacing: .4,
			fontWeight: "regular",
			font: "plain"
		})
	} })
};
var g3 = g1.fromColors({
	primary: "#1270f5",
	secondary: "#8a90a5",
	tertiary: "#b58391",
	neutral: "#5e5e5e",
	error: "#d93f23",
	warning: "#e69c00",
	success: "#5ac220"
});
let g5 = {
	...g4,
	...gd,
	...gs,
	rounded: g2,
	...g3.toDesignTokens({})
}, g6 = gl.create(g5, { varPrefix: "vk" }), g9 = hS(() => g6, { name: "Theme" });
var g8 = function() {
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
			var i = function(e) {
				if (e.sheet) return e.sheet;
				for (var t = 0; t < document.styleSheets.length; t++) if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
			}(r);
			try {
				i.insertRule(e, i.cssRules.length);
			} catch (e) {}
		} else r.appendChild(document.createTextNode(e));
		this.ctr++;
	}, t.flush = function() {
		this.tags.forEach(function(e) {
			var t;
			return null == (t = e.parentNode) ? void 0 : t.removeChild(e);
		}), this.tags = [], this.ctr = 0;
	}, e;
}(), g7 = "-ms-", ye = "-moz-", yt = "-webkit-", yn = "comm", yr = "rule", yi = "decl", yo = "@keyframes", ya = Math.abs, yl = String.fromCharCode, ys = Object.assign;
function yu(e, t, r) {
	return e.replace(t, r);
}
function yc(e, t) {
	return e.indexOf(t);
}
function yf(e, t) {
	return 0 | e.charCodeAt(t);
}
function yd(e, t, r) {
	return e.slice(t, r);
}
function yp(e) {
	return e.length;
}
function yh(e, t) {
	return t.push(e), e;
}
var ym = 1, yg = 1, yy = 0, yv = 0, yb = 0, yx = "";
function yw(e, t, r, i, o, a, l) {
	return {
		value: e,
		root: t,
		parent: r,
		type: i,
		props: o,
		children: a,
		line: ym,
		column: yg,
		length: l,
		return: ""
	};
}
function yk(e, t) {
	return ys(yw("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function y_() {
	return yb = yv < yy ? yf(yx, yv++) : 0, yg++, 10 === yb && (yg = 1, ym++), yb;
}
function yC() {
	return yf(yx, yv);
}
function yS(e) {
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
function yO(e) {
	return ym = yg = 1, yy = yp(yx = e), yv = 0, [];
}
function yA(e) {
	var t, r;
	return (t = yv - 1, r = function e(t) {
		for (; y_();) switch (yb) {
			case t: return yv;
			case 34:
			case 39:
				34 !== t && 39 !== t && e(yb);
				break;
			case 40:
				41 === t && e(t);
				break;
			case 92: y_();
		}
		return yv;
	}(91 === e ? e + 2 : 40 === e ? e + 1 : e), yd(yx, t, r)).trim();
}
function yP(e, t, r, i, o, a, l, s, u, c, f) {
	for (var d = o - 1, p = 0 === o ? a : [""], h = p.length, m = 0, g = 0, y = 0; m < i; ++m) for (var b = 0, x = yd(e, d + 1, d = ya(g = l[m])), w = e; b < h; ++b) (w = (g > 0 ? p[b] + " " + x : yu(x, /&\f/g, p[b])).trim()) && (u[y++] = w);
	return yw(e, t, r, 0 === o ? yr : s, u, c, f);
}
function yM(e, t, r, i) {
	return yw(e, t, r, yi, yd(e, 0, i), yd(e, i + 1, -1), i);
}
function yT(e, t) {
	for (var r = "", i = e.length, o = 0; o < i; o++) r += t(e[o], o, e, t) || "";
	return r;
}
function yE(e, t, r, i) {
	switch (e.type) {
		case "@layer": if (e.children.length) break;
		case "@import":
		case yi: return e.return = e.return || e.value;
		case yn: return "";
		case yo: return e.return = e.value + "{" + yT(e.children, i) + "}";
		case yr: e.value = e.props.join(",");
	}
	return yp(r = yT(e.children, i)) ? e.return = e.value + "{" + r + "}" : "";
}
var yI = function(e, t, r) {
	for (var i = 0, o = 0; i = o, o = yC(), 38 === i && 12 === o && (t[r] = 1), !yS(o);) y_();
	return yd(yx, e, yv);
}, yD = function(e, t) {
	var r = -1, i = 44;
	do
		switch (yS(i)) {
			case 0:
				38 === i && 12 === yC() && (t[r] = 1), e[r] += yI(yv - 1, t, r);
				break;
			case 2:
				e[r] += yA(i);
				break;
			case 4: if (44 === i) {
				e[++r] = 58 === yC() ? "&\f" : "", t[r] = e[r].length;
				break;
			}
			default: e[r] += yl(i);
		}
	while (i = y_());
	return e;
}, yj = function(e, t) {
	var r;
	return r = yD(yO(e), t), yx = "", r;
}, y$ = /* @__PURE__ */ new WeakMap(), yL = function(e) {
	if ("rule" === e.type && e.parent && !(e.length < 1)) {
		for (var t = e.value, r = e.parent, i = e.column === r.column && e.line === r.line; "rule" !== r.type;) if (!(r = r.parent)) return;
		if ((1 !== e.props.length || 58 === t.charCodeAt(0) || y$.get(r)) && !i) {
			y$.set(e, !0);
			for (var o = [], a = yj(t, o), l = r.props, s = 0, u = 0; s < a.length; s++) for (var c = 0; c < l.length; c++, u++) e.props[u] = o[s] ? a[s].replace(/&\f/g, l[c]) : l[c] + " " + a[s];
		}
	}
}, yR = function(e) {
	if ("decl" === e.type) {
		var t = e.value;
		108 === t.charCodeAt(0) && 98 === t.charCodeAt(2) && (e.return = "", e.value = "");
	}
}, yN = [function(e, t, r, i) {
	if (e.length > -1 && !e.return) switch (e.type) {
		case yi:
			e.return = function e(t, r) {
				switch (45 ^ yf(t, 0) ? (((r << 2 ^ yf(t, 0)) << 2 ^ yf(t, 1)) << 2 ^ yf(t, 2)) << 2 ^ yf(t, 3) : 0) {
					case 5103: return yt + "print-" + t + t;
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
					case 3829: return yt + t + t;
					case 5349:
					case 4246:
					case 4810:
					case 6968:
					case 2756: return yt + t + ye + t + g7 + t + t;
					case 6828:
					case 4268: return yt + t + g7 + t + t;
					case 6165: return yt + t + g7 + "flex-" + t + t;
					case 5187: return yt + t + yu(t, /(\w+).+(:[^]+)/, yt + "box-$1$2" + g7 + "flex-$1$2") + t;
					case 5443: return yt + t + g7 + "flex-item-" + yu(t, /flex-|-self/, "") + t;
					case 4675: return yt + t + g7 + "flex-line-pack" + yu(t, /align-content|flex-|-self/, "") + t;
					case 5548: return yt + t + g7 + yu(t, "shrink", "negative") + t;
					case 5292: return yt + t + g7 + yu(t, "basis", "preferred-size") + t;
					case 6060: return yt + "box-" + yu(t, "-grow", "") + yt + t + g7 + yu(t, "grow", "positive") + t;
					case 4554: return yt + yu(t, /([^-])(transform)/g, "$1" + yt + "$2") + t;
					case 6187: return yu(yu(yu(t, /(zoom-|grab)/, yt + "$1"), /(image-set)/, yt + "$1"), t, "") + t;
					case 5495:
					case 3959: return yu(t, /(image-set\([^]*)/, yt + "$1$`$1");
					case 4968: return yu(yu(t, /(.+:)(flex-)?(.*)/, yt + "box-pack:$3" + g7 + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + yt + t + t;
					case 4095:
					case 3583:
					case 4068:
					case 2532: return yu(t, /(.+)-inline(.+)/, yt + "$1$2") + t;
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
						if (yp(t) - 1 - r > 6) switch (yf(t, r + 1)) {
							case 109: if (45 !== yf(t, r + 4)) break;
							case 102: return yu(t, /(.+:)(.+)-([^]+)/, "$1" + yt + "$2-$3$1" + ye + (108 == yf(t, r + 3) ? "$3" : "$2-$3")) + t;
							case 115: return ~yc(t, "stretch") ? e(yu(t, "stretch", "fill-available"), r) + t : t;
						}
						break;
					case 4949: if (115 !== yf(t, r + 1)) break;
					case 6444:
						switch (yf(t, yp(t) - 3 - (~yc(t, "!important") && 10))) {
							case 107: return yu(t, ":", ":" + yt) + t;
							case 101: return yu(t, /(.+:)([^;!]+)(;|!.+)?/, "$1" + yt + (45 === yf(t, 14) ? "inline-" : "") + "box$3$1" + yt + "$2$3$1" + g7 + "$2box$3") + t;
						}
						break;
					case 5936:
						switch (yf(t, r + 11)) {
							case 114: return yt + t + g7 + yu(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
							case 108: return yt + t + g7 + yu(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
							case 45: return yt + t + g7 + yu(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
						}
						return yt + t + g7 + t + t;
				}
				return t;
			}(e.value, e.length);
			break;
		case yo: return yT([yk(e, { value: yu(e.value, "@", "@" + yt) })], i);
		case yr: if (e.length) {
			var o, a;
			return o = e.props, a = function(t) {
				var r;
				switch (r = t, (r = /(::plac\w+|:read-\w+)/.exec(r)) ? r[0] : r) {
					case ":read-only":
					case ":read-write": return yT([yk(e, { props: [yu(t, /:(read-\w+)/, ":" + ye + "$1")] })], i);
					case "::placeholder": return yT([
						yk(e, { props: [yu(t, /:(plac\w+)/, ":" + yt + "input-$1")] }),
						yk(e, { props: [yu(t, /:(plac\w+)/, ":" + ye + "$1")] }),
						yk(e, { props: [yu(t, /:(plac\w+)/, g7 + "input-$1")] })
					], i);
				}
				return "";
			}, o.map(a).join("");
		}
	}
}], yF = function(e) {
	var t, r, i, o, a, l = e.key;
	if ("css" === l) {
		var s = document.querySelectorAll("style[data-emotion]:not([data-s])");
		Array.prototype.forEach.call(s, function(e) {
			-1 !== e.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e), e.setAttribute("data-s", ""));
		});
	}
	var u = e.stylisPlugins || yN, c = {}, f = [];
	o = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll("style[data-emotion^=\"" + l + " \"]"), function(e) {
		for (var t = e.getAttribute("data-emotion").split(" "), r = 1; r < t.length; r++) c[t[r]] = !0;
		f.push(e);
	});
	var d = (r = (t = [yL, yR].concat(u, [yE, (i = function(e) {
		a.insert(e);
	}, function(e) {
		!e.root && (e = e.return) && i(e);
	})])).length, function(e, i, o, a) {
		for (var l = "", s = 0; s < r; s++) l += t[s](e, i, o, a) || "";
		return l;
	}), p = function(e) {
		var t, r;
		return yT((r = function e(t, r, i, o, a, l, s, u, c) {
			for (var f, d = 0, p = 0, h = s, m = 0, g = 0, y = 0, b = 1, x = 1, w = 1, k = 0, _ = "", C = a, S = l, O = o, A = _; x;) switch (y = k, k = y_()) {
				case 40: if (108 != y && 58 == yf(A, h - 1)) {
					-1 != yc(A += yu(yA(k), "&", "&\f"), "&\f") && (w = -1);
					break;
				}
				case 34:
				case 39:
				case 91:
					A += yA(k);
					break;
				case 9:
				case 10:
				case 13:
				case 32:
					A += function(e) {
						for (; yb = yC();) if (yb < 33) y_();
						else break;
						return yS(e) > 2 || yS(yb) > 3 ? "" : " ";
					}(y);
					break;
				case 92:
					A += function(e, t) {
						for (var r; --t && y_() && !(yb < 48) && !(yb > 102) && (!(yb > 57) || !(yb < 65)) && (!(yb > 70) || !(yb < 97)););
						return r = yv + (t < 6 && 32 == yC() && 32 == y_()), yd(yx, e, r);
					}(yv - 1, 7);
					continue;
				case 47:
					switch (yC()) {
						case 42:
						case 47:
							yh((f = function(e, t) {
								for (; y_();) if (e + yb === 57) break;
								else if (e + yb === 84 && 47 === yC()) break;
								return "/*" + yd(yx, t, yv - 1) + "*" + yl(47 === e ? e : y_());
							}(y_(), yv), yw(f, r, i, yn, yl(yb), yd(f, 2, -2), 0)), c);
							break;
						default: A += "/";
					}
					break;
				case 123 * b: u[d++] = yp(A) * w;
				case 125 * b:
				case 59:
				case 0:
					switch (k) {
						case 0:
						case 125: x = 0;
						case 59 + p:
							-1 == w && (A = yu(A, /\f/g, "")), g > 0 && yp(A) - h && yh(g > 32 ? yM(A + ";", o, i, h - 1) : yM(yu(A, " ", "") + ";", o, i, h - 2), c);
							break;
						case 59: A += ";";
						default: if (yh(O = yP(A, r, i, d, p, a, u, _, C = [], S = [], h), l), 123 === k) if (0 === p) e(A, r, O, O, C, l, h, u, S);
						else switch (99 === m && 110 === yf(A, 3) ? 100 : m) {
							case 100:
							case 108:
							case 109:
							case 115:
								e(t, O, O, o && yh(yP(t, O, O, 0, 0, a, u, _, a, C = [], h), S), a, S, h, u, o ? C : S);
								break;
							default: e(A, O, O, O, [""], S, 0, u, S);
						}
					}
					d = p = g = 0, b = w = 1, _ = A = "", h = s;
					break;
				case 58: h = 1 + yp(A), g = y;
				default:
					if (b < 1) {
						if (123 == k) --b;
						else if (125 == k && 0 == b++ && 125 == (yb = yv > 0 ? yf(yx, --yv) : 0, yg--, 10 === yb && (yg = 1, ym--), yb)) continue;
					}
					switch (A += yl(k), k * b) {
						case 38:
							w = p > 0 ? 1 : (A += "\f", -1);
							break;
						case 44:
							u[d++] = (yp(A) - 1) * w, w = 1;
							break;
						case 64:
							45 === yC() && (A += yA(y_())), m = yC(), p = h = yp(_ = A += function(e) {
								for (; !yS(yC());) y_();
								return yd(yx, e, yv);
							}(yv)), k++;
							break;
						case 45: 45 === y && 2 == yp(A) && (b = 0);
					}
			}
			return l;
		}("", null, null, null, [""], t = yO(t = e), 0, [0], t), yx = "", r), d);
	}, h = {
		key: l,
		sheet: new g8({
			key: l,
			container: o,
			nonce: e.nonce,
			speedy: e.speedy,
			prepend: e.prepend,
			insertionPoint: e.insertionPoint
		}),
		nonce: e.nonce,
		inserted: c,
		registered: {},
		insert: function(e, t, r, i) {
			a = r, p(e ? e + "{" + t.styles + "}" : t.styles), i && (h.inserted[t.name] = !0);
		}
	};
	return h.sheet.hydrate(f), h;
}, yz = function(e, t, r) {
	var i = e.key + "-" + t.name;
	!1 === r && void 0 === e.registered[i] && (e.registered[i] = t.styles);
}, yV = function(e, t, r) {
	yz(e, t, r);
	var i = e.key + "-" + t.name;
	if (void 0 === e.inserted[t.name]) {
		var o = t;
		do
			e.insert(t === o ? "." + i : "", o, e.sheet, !0), o = o.next;
		while (void 0 !== o);
	}
};
let yB = hS(() => yF({ key: "css" }), { name: "Cache" }), yH = (e) => (t) => {
	t.serialized && (t.withoutScoping ? e.insert("", t.serialized, e.sheet, !0) : yV(e, t.serialized, t.isStringTag ?? !0));
};
var yW = fL({
	sx: fg(),
	component: fg().optional().default("div")
}, (e, { slots: t, expose: r }) => {
	let i = g9.use(), o = yB.use(), a = i.unstable_css(o, e.sx ?? {}), l = yH(o);
	lE(() => {
		l({
			serialized: a,
			isStringTag: !0
		});
	});
	let s = hp(null);
	return r({ [hd]: s }), () => hb(e.component ?? "div", {
		ref: s,
		class: "0" !== a.name ? `${o.key}-${a.name}` : "",
		children: t
	});
});
function yU(...e) {
	let t, r = "div", i = {}, o = {};
	for (let a of e) {
		if (eA(a)) {
			t = a;
			continue;
		}
		if (id(a) || fj(a)) {
			r = a;
			continue;
		}
		ig(t) && f$(a) ? i = a : o = a;
	}
	return t ??= (e, t) => (r) => {
		let i = {};
		for (let t in e) "component" !== t && "sx" !== t && e[t] && (i[`data-${t}`] = e[t]);
		return hb(r, {
			...i,
			children: t.slots
		});
	}, (e) => {
		let a = Object.assign(fL({
			...i,
			sx: fg().optional(),
			component: fg().optional()
		}, (i, o) => {
			let l = g9.use(), s = yB.use(), u = yH(s), c = aM("", !0), f = l.unstable_css(s, e), d = () => ("0" !== f.name ? `${s.key}-${f.name}${c.value}` : `${c.value}`) + (a.name ? ` ${a.name}` : "");
			if (r.__styled) {
				let e = l.unstable_css(s, i.sx ?? {});
				"0" !== e.name && (c.value = ` ${s.key}-${e.name}`), lE(() => {
					u({
						serialized: f,
						isStringTag: !0
					}), u({
						serialized: e,
						isStringTag: !0
					});
				});
			} else lT(() => {
				u({
					serialized: f,
					isStringTag: !0
				});
			});
			let p = t(i, o), h = hp(null);
			return o.expose({ [hd]: h }), () => {
				if (r.__styled) {
					let e = p(r);
					return e ? sN(e, {
						component: i.component,
						ref: h,
						class: d()
					}) : null;
				}
				let e = p(yW);
				return e ? sN(e, {
					component: i.component || r,
					sx: i.sx,
					ref: h,
					class: d()
				}) : null;
			};
		}, o), { __styled: !0 });
		return a.toString = () => `.${a.name}`, a;
	};
}
var yq = fL(({ styles: e }) => {
	let t = g9.use(), r = yB.use(), i = yH(r), o = t.unstable_css(r, id(e) ? { "&": e } : e);
	return lT(() => {
		i({
			serialized: o,
			withoutScoping: !0
		});
	}), () => null;
}, {
	displayName: "GlobalStyle",
	props: ["styles"]
}), yK = fL(() => {
	let e = g9.use().rootCSSVars;
	return () => hb(yq, { styles: {
		":host, :root, [data-theme]": e,
		"*, *::after, *::before": { boxSizing: "border-box" },
		html: { fontSize: "10px" },
		a: { color: "inherit" },
		body: { textStyle: "sys.body-medium" }
	} });
}, { displayName: "CSSReset" });
let yG = hS(() => ({ mountPoint: () => document.body }), { name: "OverlaySetting" });
var yJ = hS(() => new yZ(aP(null), aP(null), () => !1), { name: "Overlay" }), yZ = class {
	children = [];
	constructor(e, t, r) {
		this.triggerRef = e, this.contentRef = t, this.isOpen = r;
	}
	add = (e) => (this.children = [...this.children, e], () => {
		this.children = this.children.filter((t) => t !== e);
	});
	isClickInside = (e) => {
		for (let t of this.children) if (t.isClickInside(e)) return !0;
		let t = aE(this.triggerRef), r = aE(this.contentRef);
		return t && (t === e.target || e.composedPath().includes(t)) || r && (r === e.target || e.composedPath().includes(r));
	};
	topmost() {
		return 0 === this.children.filter((e) => e.isOpen()).length;
	}
}, yX = fL((e, { slots: t, attrs: r, emit: i }) => {
	let o = e.contentRef || aP(null), a = new yZ(e.triggerRef ?? aP(null), o, () => !!e.isOpen), l = yG.use();
	return lj(yJ.use().add(a)), window && hc(hk(o, "value"), hC((e) => {
		if (!e) return;
		let t = (e) => {
			a.isClickInside(e) || i("click-outside", e);
		};
		return window.addEventListener("pointerdown", t), () => {
			window.removeEventListener("pointerdown", t);
		};
	}), hC((e) => {
		if (!e) return;
		let t = (e) => {
			"Escape" === e.key && a.topmost() && i("esc-keydown", e);
		};
		return window.addEventListener("keydown", t), () => {
			window.removeEventListener("keydown", t);
		};
	}), hh()), () => {
		let s = e.isOpen ? sN(hb("div", {
			...r,
			ref: o,
			style: e.style,
			children: hb(yJ, {
				value: a,
				children: t.default?.()
			})
		}), { onVnodeBeforeMount: () => {
			i("content-before-mount");
		} }) : null;
		return hb(ln, {
			to: l.mountPoint(),
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
}), yY = Math.min, yQ = Math.max, y0 = Math.round, y1 = Math.floor, y2 = (e) => ({
	x: e,
	y: e
}), y4 = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
}, y3 = {
	start: "end",
	end: "start"
};
function y5(e, t) {
	return "function" == typeof e ? e(t) : e;
}
function y6(e) {
	return e.split("-")[0];
}
function y9(e) {
	return e.split("-")[1];
}
function y8(e) {
	return "x" === e ? "y" : "x";
}
function y7(e) {
	return "y" === e ? "height" : "width";
}
var ve = new Set(["top", "bottom"]);
function vt(e) {
	return ve.has(y6(e)) ? "y" : "x";
}
function vn(e) {
	return e.replace(/start|end/g, (e) => y3[e]);
}
var vr = ["left", "right"], vi = ["right", "left"], vo = ["top", "bottom"], va = ["bottom", "top"];
function vl(e) {
	return e.replace(/left|right|bottom|top/g, (e) => y4[e]);
}
function vs(e) {
	let { x: t, y: r, width: i, height: o } = e;
	return {
		width: i,
		height: o,
		top: r,
		left: t,
		right: t + i,
		bottom: r + o,
		x: t,
		y: r
	};
}
function vu(e, t, r) {
	let i, { reference: o, floating: a } = e, l = vt(t), s = y8(vt(t)), u = y7(s), c = y6(t), f = "y" === l, d = o.x + o.width / 2 - a.width / 2, p = o.y + o.height / 2 - a.height / 2, h = o[u] / 2 - a[u] / 2;
	switch (c) {
		case "top":
			i = {
				x: d,
				y: o.y - a.height
			};
			break;
		case "bottom":
			i = {
				x: d,
				y: o.y + o.height
			};
			break;
		case "right":
			i = {
				x: o.x + o.width,
				y: p
			};
			break;
		case "left":
			i = {
				x: o.x - a.width,
				y: p
			};
			break;
		default: i = {
			x: o.x,
			y: o.y
		};
	}
	switch (y9(t)) {
		case "start":
			i[s] -= h * (r && f ? -1 : 1);
			break;
		case "end": i[s] += h * (r && f ? -1 : 1);
	}
	return i;
}
var vc = async (e, t, r) => {
	let { placement: i = "bottom", strategy: o = "absolute", middleware: a = [], platform: l } = r, s = a.filter(Boolean), u = await (null == l.isRTL ? void 0 : l.isRTL(t)), c = await l.getElementRects({
		reference: e,
		floating: t,
		strategy: o
	}), { x: f, y: d } = vu(c, i, u), p = i, h = {}, m = 0;
	for (let r = 0; r < s.length; r++) {
		let { name: a, fn: g } = s[r], { x: y, y: b, data: x, reset: w } = await g({
			x: f,
			y: d,
			initialPlacement: i,
			placement: p,
			strategy: o,
			middlewareData: h,
			rects: c,
			platform: l,
			elements: {
				reference: e,
				floating: t
			}
		});
		f = null != y ? y : f, d = null != b ? b : d, h = {
			...h,
			[a]: {
				...h[a],
				...x
			}
		}, w && m <= 50 && (m++, "object" == typeof w && (w.placement && (p = w.placement), w.rects && (c = !0 === w.rects ? await l.getElementRects({
			reference: e,
			floating: t,
			strategy: o
		}) : w.rects), {x: f, y: d} = vu(c, p, u)), r = -1);
	}
	return {
		x: f,
		y: d,
		placement: p,
		strategy: o,
		middlewareData: h
	};
};
async function vf(e, t) {
	var r, i;
	void 0 === t && (t = {});
	let { x: o, y: a, platform: l, rects: s, elements: u, strategy: c } = e, { boundary: f = "clippingAncestors", rootBoundary: d = "viewport", elementContext: p = "floating", altBoundary: h = !1, padding: m = 0 } = y5(t, e), g = "number" != typeof (i = m) ? {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...i
	} : {
		top: i,
		right: i,
		bottom: i,
		left: i
	}, y = u[h ? "floating" === p ? "reference" : "floating" : p], b = vs(await l.getClippingRect({
		element: null == (r = await (null == l.isElement ? void 0 : l.isElement(y))) || r ? y : y.contextElement || await (null == l.getDocumentElement ? void 0 : l.getDocumentElement(u.floating)),
		boundary: f,
		rootBoundary: d,
		strategy: c
	})), x = "floating" === p ? {
		x: o,
		y: a,
		width: s.floating.width,
		height: s.floating.height
	} : s.reference, w = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(u.floating)), k = await (null == l.isElement ? void 0 : l.isElement(w)) && await (null == l.getScale ? void 0 : l.getScale(w)) || {
		x: 1,
		y: 1
	}, _ = vs(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: u,
		rect: x,
		offsetParent: w,
		strategy: c
	}) : x);
	return {
		top: (b.top - _.top + g.top) / k.y,
		bottom: (_.bottom - b.bottom + g.bottom) / k.y,
		left: (b.left - _.left + g.left) / k.x,
		right: (_.right - b.right + g.right) / k.x
	};
}
function vd() {
	return "undefined" != typeof window;
}
function vp(e) {
	return vg(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function vh(e) {
	var t;
	return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window;
}
function vm(e) {
	var t;
	return null == (t = (vg(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement;
}
function vg(e) {
	return !!vd() && (e instanceof Node || e instanceof vh(e).Node);
}
function vy(e) {
	return !!vd() && (e instanceof Element || e instanceof vh(e).Element);
}
function vv(e) {
	return !!vd() && (e instanceof HTMLElement || e instanceof vh(e).HTMLElement);
}
function vb(e) {
	return !!vd() && "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof vh(e).ShadowRoot);
}
var vx = new Set(["inline", "contents"]);
function vw(e) {
	let { overflow: t, overflowX: r, overflowY: i, display: o } = vI(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + i + r) && !vx.has(o);
}
var vk = new Set([
	"table",
	"td",
	"th"
]), v_ = [":popover-open", ":modal"];
function vC(e) {
	return v_.some((t) => {
		try {
			return e.matches(t);
		} catch (e) {
			return !1;
		}
	});
}
var vS = [
	"transform",
	"translate",
	"scale",
	"rotate",
	"perspective"
], vO = [
	"transform",
	"translate",
	"scale",
	"rotate",
	"perspective",
	"filter"
], vA = [
	"paint",
	"layout",
	"strict",
	"content"
];
function vP(e) {
	let t = vM(), r = vy(e) ? vI(e) : e;
	return vS.some((e) => !!r[e] && "none" !== r[e]) || !!r.containerType && "normal" !== r.containerType || !t && !!r.backdropFilter && "none" !== r.backdropFilter || !t && !!r.filter && "none" !== r.filter || vO.some((e) => (r.willChange || "").includes(e)) || vA.some((e) => (r.contain || "").includes(e));
}
function vM() {
	return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none");
}
var vT = new Set([
	"html",
	"body",
	"#document"
]);
function vE(e) {
	return vT.has(vp(e));
}
function vI(e) {
	return vh(e).getComputedStyle(e);
}
function vD(e) {
	return vy(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function vj(e) {
	if ("html" === vp(e)) return e;
	let t = e.assignedSlot || e.parentNode || vb(e) && e.host || vm(e);
	return vb(t) ? t.host : t;
}
function v$(e, t, r) {
	var i;
	void 0 === t && (t = []), void 0 === r && (r = !0);
	let o = function e(t) {
		let r = vj(t);
		return vE(r) ? t.ownerDocument ? t.ownerDocument.body : t.body : vv(r) && vw(r) ? r : e(r);
	}(e), a = o === (null == (i = e.ownerDocument) ? void 0 : i.body), l = vh(o);
	if (a) {
		let e = vL(l);
		return t.concat(l, l.visualViewport || [], vw(o) ? o : [], e && r ? v$(e) : []);
	}
	return t.concat(o, v$(o, [], r));
}
function vL(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function vR(e) {
	let t = vI(e), r = parseFloat(t.width) || 0, i = parseFloat(t.height) || 0, o = vv(e), a = o ? e.offsetWidth : r, l = o ? e.offsetHeight : i, s = y0(r) !== a || y0(i) !== l;
	return s && (r = a, i = l), {
		width: r,
		height: i,
		$: s
	};
}
function vN(e) {
	return vy(e) ? e : e.contextElement;
}
function vF(e) {
	let t = vN(e);
	if (!vv(t)) return y2(1);
	let r = t.getBoundingClientRect(), { width: i, height: o, $: a } = vR(t), l = (a ? y0(r.width) : r.width) / i, s = (a ? y0(r.height) : r.height) / o;
	return l && Number.isFinite(l) || (l = 1), s && Number.isFinite(s) || (s = 1), {
		x: l,
		y: s
	};
}
var vz = y2(0);
function vV(e) {
	let t = vh(e);
	return vM() && t.visualViewport ? {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	} : vz;
}
function vB(e, t, r, i) {
	var o;
	void 0 === t && (t = !1), void 0 === r && (r = !1);
	let a = e.getBoundingClientRect(), l = vN(e), s = y2(1);
	t && (i ? vy(i) && (s = vF(i)) : s = vF(e));
	let u = (void 0 === (o = r) && (o = !1), i && (!o || i === vh(l)) && o) ? vV(l) : y2(0), c = (a.left + u.x) / s.x, f = (a.top + u.y) / s.y, d = a.width / s.x, p = a.height / s.y;
	if (l) {
		let e = vh(l), t = i && vy(i) ? vh(i) : i, r = e, o = vL(r);
		for (; o && i && t !== r;) {
			let e = vF(o), t = o.getBoundingClientRect(), i = vI(o), a = t.left + (o.clientLeft + parseFloat(i.paddingLeft)) * e.x, l = t.top + (o.clientTop + parseFloat(i.paddingTop)) * e.y;
			c *= e.x, f *= e.y, d *= e.x, p *= e.y, c += a, f += l, o = vL(r = vh(o));
		}
	}
	return vs({
		width: d,
		height: p,
		x: c,
		y: f
	});
}
function vH(e, t) {
	let r = vD(e).scrollLeft;
	return t ? t.left + r : vB(vm(e)).left + r;
}
function vW(e, t) {
	let r = e.getBoundingClientRect();
	return {
		x: r.left + t.scrollLeft - vH(e, r),
		y: r.top + t.scrollTop
	};
}
var vU = new Set(["absolute", "fixed"]);
function vq(e, t, r) {
	let i;
	if ("viewport" === t) i = function(e, t) {
		let r = vh(e), i = vm(e), o = r.visualViewport, a = i.clientWidth, l = i.clientHeight, s = 0, u = 0;
		if (o) {
			a = o.width, l = o.height;
			let e = vM();
			(!e || e && "fixed" === t) && (s = o.offsetLeft, u = o.offsetTop);
		}
		let c = vH(i);
		if (c <= 0) {
			let e = i.ownerDocument, t = e.body, r = getComputedStyle(t), o = "CSS1Compat" === e.compatMode && parseFloat(r.marginLeft) + parseFloat(r.marginRight) || 0, l = Math.abs(i.clientWidth - t.clientWidth - o);
			l <= 25 && (a -= l);
		} else c <= 25 && (a += c);
		return {
			width: a,
			height: l,
			x: s,
			y: u
		};
	}(e, r);
	else if ("document" === t) i = function(e) {
		let t = vm(e), r = vD(e), i = e.ownerDocument.body, o = yQ(t.scrollWidth, t.clientWidth, i.scrollWidth, i.clientWidth), a = yQ(t.scrollHeight, t.clientHeight, i.scrollHeight, i.clientHeight), l = -r.scrollLeft + vH(e), s = -r.scrollTop;
		return "rtl" === vI(i).direction && (l += yQ(t.clientWidth, i.clientWidth) - o), {
			width: o,
			height: a,
			x: l,
			y: s
		};
	}(vm(e));
	else if (vy(t)) i = function(e, t) {
		let r = vB(e, !0, "fixed" === t), i = r.top + e.clientTop, o = r.left + e.clientLeft, a = vv(e) ? vF(e) : y2(1), l = e.clientWidth * a.x, s = e.clientHeight * a.y;
		return {
			width: l,
			height: s,
			x: o * a.x,
			y: i * a.y
		};
	}(t, r);
	else {
		let r = vV(e);
		i = {
			x: t.x - r.x,
			y: t.y - r.y,
			width: t.width,
			height: t.height
		};
	}
	return vs(i);
}
function vK(e) {
	return "static" === vI(e).position;
}
function vG(e, t) {
	if (!vv(e) || "fixed" === vI(e).position) return null;
	if (t) return t(e);
	let r = e.offsetParent;
	return vm(e) === r && (r = r.ownerDocument.body), r;
}
function vJ(e, t) {
	var r;
	let i = vh(e);
	if (vC(e)) return i;
	if (!vv(e)) {
		let t = vj(e);
		for (; t && !vE(t);) {
			if (vy(t) && !vK(t)) return t;
			t = vj(t);
		}
		return i;
	}
	let o = vG(e, t);
	for (; o && (r = o, vk.has(vp(r))) && vK(o);) o = vG(o, t);
	return o && vE(o) && vK(o) && !vP(o) ? i : o || function(e) {
		let t = vj(e);
		for (; vv(t) && !vE(t);) {
			if (vP(t)) return t;
			if (vC(t)) break;
			t = vj(t);
		}
		return null;
	}(e) || i;
}
var vZ = async function(e) {
	let t = this.getOffsetParent || vJ, r = this.getDimensions, i = await r(e.floating);
	return {
		reference: function(e, t, r) {
			let i = vv(t), o = vm(t), a = "fixed" === r, l = vB(e, !0, a, t), s = {
				scrollLeft: 0,
				scrollTop: 0
			}, u = y2(0);
			if (i || !i && !a) if (("body" !== vp(t) || vw(o)) && (s = vD(t)), i) {
				let e = vB(t, !0, a, t);
				u.x = e.x + t.clientLeft, u.y = e.y + t.clientTop;
			} else o && (u.x = vH(o));
			a && !i && o && (u.x = vH(o));
			let c = !o || i || a ? y2(0) : vW(o, s);
			return {
				x: l.left + s.scrollLeft - u.x - c.x,
				y: l.top + s.scrollTop - u.y - c.y,
				width: l.width,
				height: l.height
			};
		}(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: i.width,
			height: i.height
		}
	};
}, vX = {
	convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
		let { elements: t, rect: r, offsetParent: i, strategy: o } = e, a = "fixed" === o, l = vm(i), s = !!t && vC(t.floating);
		if (i === l || s && a) return r;
		let u = {
			scrollLeft: 0,
			scrollTop: 0
		}, c = y2(1), f = y2(0), d = vv(i);
		if ((d || !d && !a) && (("body" !== vp(i) || vw(l)) && (u = vD(i)), vv(i))) {
			let e = vB(i);
			c = vF(i), f.x = e.x + i.clientLeft, f.y = e.y + i.clientTop;
		}
		let p = !l || d || a ? y2(0) : vW(l, u);
		return {
			width: r.width * c.x,
			height: r.height * c.y,
			x: r.x * c.x - u.scrollLeft * c.x + f.x + p.x,
			y: r.y * c.y - u.scrollTop * c.y + f.y + p.y
		};
	},
	getDocumentElement: vm,
	getClippingRect: function(e) {
		let { element: t, boundary: r, rootBoundary: i, strategy: o } = e, a = [..."clippingAncestors" === r ? vC(t) ? [] : function(e, t) {
			let r = t.get(e);
			if (r) return r;
			let i = v$(e, [], !1).filter((e) => vy(e) && "body" !== vp(e)), o = null, a = "fixed" === vI(e).position, l = a ? vj(e) : e;
			for (; vy(l) && !vE(l);) {
				let t = vI(l), r = vP(l);
				r || "fixed" !== t.position || (o = null), (a ? !r && !o : !r && "static" === t.position && !!o && vU.has(o.position) || vw(l) && !r && function e(t, r) {
					let i = vj(t);
					return !(i === r || !vy(i) || vE(i)) && ("fixed" === vI(i).position || e(i, r));
				}(e, l)) ? i = i.filter((e) => e !== l) : o = t, l = vj(l);
			}
			return t.set(e, i), i;
		}(t, this._c) : [].concat(r), i], l = a[0], s = a.reduce((e, r) => {
			let i = vq(t, r, o);
			return e.top = yQ(i.top, e.top), e.right = yY(i.right, e.right), e.bottom = yY(i.bottom, e.bottom), e.left = yQ(i.left, e.left), e;
		}, vq(t, l, o));
		return {
			width: s.right - s.left,
			height: s.bottom - s.top,
			x: s.left,
			y: s.top
		};
	},
	getOffsetParent: vJ,
	getElementRects: vZ,
	getClientRects: function(e) {
		return Array.from(e.getClientRects());
	},
	getDimensions: function(e) {
		let { width: t, height: r } = vR(e);
		return {
			width: t,
			height: r
		};
	},
	getScale: vF,
	isElement: vy,
	isRTL: function(e) {
		return "rtl" === vI(e).direction;
	}
};
function vY(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
var vQ = function(e) {
	return void 0 === e && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			var r, i;
			let o, a, { placement: l, rects: s, platform: u, elements: c } = t, { apply: f = () => {},...d } = y5(e, t), p = await vf(t, d), h = y6(l), m = y9(l), g = "y" === vt(l), { width: y, height: b } = s.floating;
			"top" === h || "bottom" === h ? (o = h, a = m === (await (null == u.isRTL ? void 0 : u.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (a = h, o = "end" === m ? "top" : "bottom");
			let x = b - p.top - p.bottom, w = y - p.left - p.right, k = yY(b - p[o], x), _ = yY(y - p[a], w), C = !t.middlewareData.shift, S = k, O = _;
			if (null != (r = t.middlewareData.shift) && r.enabled.x && (O = w), null != (i = t.middlewareData.shift) && i.enabled.y && (S = x), C && !m) {
				let e = yQ(p.left, 0), t = yQ(p.right, 0), r = yQ(p.top, 0), i = yQ(p.bottom, 0);
				g ? O = y - 2 * (0 !== e || 0 !== t ? e + t : yQ(p.left, p.right)) : S = b - 2 * (0 !== r || 0 !== i ? r + i : yQ(p.top, p.bottom));
			}
			await f({
				...t,
				availableWidth: O,
				availableHeight: S
			});
			let A = await u.getDimensions(c.floating);
			return y !== A.width || b !== A.height ? { reset: { rects: !0 } } : {};
		}
	};
}, v0 = fL((e, { slots: t, emit: r, attrs: i }) => {
	let o = hg(null), a = hg(null);
	return hc(p4([o, a]), hC(([t, r]) => {
		if (r && t) {
			let i = async () => {
				var i, o;
				r.style.position = "absolute";
				let a = await ((e, t, r) => {
					let i = /* @__PURE__ */ new Map(), o = {
						platform: vX,
						...r
					}, a = {
						...o.platform,
						_c: i
					};
					return vc(e, t, {
						...o,
						platform: a
					});
				})(t, r, {
					placement: e.placement ?? "bottom",
					middleware: [
						...e.modifiers ?? [],
						...e.middleware ?? [],
						(void 0 === i && (i = {}), {
							name: "flip",
							options: i,
							async fn(e) {
								var t, r, o, a, l;
								let { placement: s, middlewareData: u, rects: c, initialPlacement: f, platform: d, elements: p } = e, { mainAxis: h = !0, crossAxis: m = !0, fallbackPlacements: g, fallbackStrategy: y = "bestFit", fallbackAxisSideDirection: b = "none", flipAlignment: x = !0,...w } = y5(i, e);
								if (null != (t = u.arrow) && t.alignmentOffset) return {};
								let k = y6(s), _ = vt(f), C = y6(f) === f, S = await (null == d.isRTL ? void 0 : d.isRTL(p.floating)), O = g || (C || !x ? [vl(f)] : function(e) {
									let t = vl(e);
									return [
										vn(e),
										t,
										vn(t)
									];
								}(f)), A = "none" !== b;
								!g && A && O.push(...function(e, t, r, i) {
									let o = y9(e), a = function(e, t, r) {
										switch (e) {
											case "top":
											case "bottom":
												if (r) return t ? vi : vr;
												return t ? vr : vi;
											case "left":
											case "right": return t ? vo : va;
											default: return [];
										}
									}(y6(e), "start" === r, i);
									return o && (a = a.map((e) => e + "-" + o), t && (a = a.concat(a.map(vn)))), a;
								}(f, x, b, S));
								let P = [f, ...O], M = await vf(e, w), T = [], E = (null == (r = u.flip) ? void 0 : r.overflows) || [];
								if (h && T.push(M[k]), m) {
									let e = function(e, t, r) {
										void 0 === r && (r = !1);
										let i = y9(e), o = y8(vt(e)), a = y7(o), l = "x" === o ? i === (r ? "end" : "start") ? "right" : "left" : "start" === i ? "bottom" : "top";
										return t.reference[a] > t.floating[a] && (l = vl(l)), [l, vl(l)];
									}(s, c, S);
									T.push(M[e[0]], M[e[1]]);
								}
								if (E = [...E, {
									placement: s,
									overflows: T
								}], !T.every((e) => e <= 0)) {
									let e = ((null == (o = u.flip) ? void 0 : o.index) || 0) + 1, t = P[e];
									if (t && ("alignment" !== m || _ === vt(t) || E.every((e) => vt(e.placement) !== _ || e.overflows[0] > 0))) return {
										data: {
											index: e,
											overflows: E
										},
										reset: { placement: t }
									};
									let r = null == (a = E.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : a.placement;
									if (!r) switch (y) {
										case "bestFit": {
											let e = null == (l = E.filter((e) => {
												if (A) {
													let t = vt(e.placement);
													return t === _ || "y" === t;
												}
												return !0;
											}).map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : l[0];
											e && (r = e);
											break;
										}
										case "initialPlacement": r = f;
									}
									if (s !== r) return { reset: { placement: r } };
								}
								return {};
							}
						}),
						(void 0 === o && (o = {}), {
							name: "shift",
							options: o,
							async fn(e) {
								let { x: t, y: r, placement: i } = e, { mainAxis: a = !0, crossAxis: l = !1, limiter: s = { fn: (e) => {
									let { x: t, y: r } = e;
									return {
										x: t,
										y: r
									};
								} },...u } = y5(o, e), c = {
									x: t,
									y: r
								}, f = await vf(e, u), d = vt(y6(i)), p = y8(d), h = c[p], m = c[d];
								if (a) {
									let e = "y" === p ? "top" : "left", t = "y" === p ? "bottom" : "right", r = h + f[e], i = h - f[t];
									h = yQ(r, yY(h, i));
								}
								if (l) {
									let e = "y" === d ? "top" : "left", t = "y" === d ? "bottom" : "right", r = m + f[e], i = m - f[t];
									m = yQ(r, yY(m, i));
								}
								let g = s.fn({
									...e,
									[p]: h,
									[d]: m
								});
								return {
									...g,
									data: {
										x: g.x - t,
										y: g.y - r,
										enabled: {
											[p]: a,
											[d]: l
										}
									}
								};
							}
						})
					]
				});
				Object.assign(r.style, {
					left: `${a.x}px`,
					top: `${a.y}px`
				}), r.setAttribute("data-placement", a.placement);
			}, o = function(e, t, r, i) {
				let o;
				void 0 === i && (i = {});
				let { ancestorScroll: a = !0, ancestorResize: l = !0, elementResize: s = "function" == typeof ResizeObserver, layoutShift: u = "function" == typeof IntersectionObserver, animationFrame: c = !1 } = i, f = vN(e), d = a || l ? [...f ? v$(f) : [], ...v$(t)] : [];
				d.forEach((e) => {
					a && e.addEventListener("scroll", r, { passive: !0 }), l && e.addEventListener("resize", r);
				});
				let p = f && u ? function(e, t) {
					let r, i = null, o = vm(e);
					function a() {
						var e;
						clearTimeout(r), null == (e = i) || e.disconnect(), i = null;
					}
					return function l(s, u) {
						void 0 === s && (s = !1), void 0 === u && (u = 1), a();
						let c = e.getBoundingClientRect(), { left: f, top: d, width: p, height: h } = c;
						if (s || t(), !p || !h) return;
						let m = y1(d), g = y1(o.clientWidth - (f + p)), y = {
							rootMargin: -m + "px " + -g + "px " + -y1(o.clientHeight - (d + h)) + "px " + -y1(f) + "px",
							threshold: yQ(0, yY(1, u)) || 1
						}, b = !0;
						function x(t) {
							let i = t[0].intersectionRatio;
							if (i !== u) {
								if (!b) return l();
								i ? l(!1, i) : r = setTimeout(() => {
									l(!1, 1e-7);
								}, 1e3);
							}
							1 !== i || vY(c, e.getBoundingClientRect()) || l(), b = !1;
						}
						try {
							i = new IntersectionObserver(x, {
								...y,
								root: o.ownerDocument
							});
						} catch (e) {
							i = new IntersectionObserver(x, y);
						}
						i.observe(e);
					}(!0), a;
				}(f, r) : null, h = -1, m = null;
				s && (m = new ResizeObserver((e) => {
					let [i] = e;
					i && i.target === f && m && (m.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
						var e;
						null == (e = m) || e.observe(t);
					})), r();
				}), f && !c && m.observe(f), m.observe(t));
				let g = c ? vB(e) : null;
				return c && function t() {
					let i = vB(e);
					g && !vY(g, i) && r(), g = i, o = requestAnimationFrame(t);
				}(), r(), () => {
					var e;
					d.forEach((e) => {
						a && e.removeEventListener("scroll", r), l && e.removeEventListener("resize", r);
					}), p?.(), null == (e = m) || e.disconnect(), m = null, c && cancelAnimationFrame(o);
				};
			}(t, r, i);
			return () => {
				o();
			};
		}
		return () => {};
	}), hh()), () => {
		let l = t.default?.()[0];
		return l ? hv(sO, { children: [sN(l, {
			...i,
			onVnodeMounted: (e) => {
				o.value = function e(t) {
					if (t) {
						if (t instanceof HTMLElement) return t;
						if (t instanceof Text) return e(t.nextElementSibling);
					}
					return null;
				}(e.el);
			}
		}), hb(yX, {
			style: { zIndex: 100 },
			triggerRef: o,
			contentRef: a,
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
}), v1 = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n", v2 = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, v4 = (e) => "" !== e && v2.test(e), v3 = (e) => {
	let t = e.split(","), r = {};
	for (let e of t) {
		if ("" === e) continue;
		let [t, ...i] = e.split("="), o = i.join("=");
		v4(o) ? r[t] = atob(o) : r[t] = o;
	}
	return r;
}, v5 = (e) => globalThis.document?.querySelector(`meta[name="webapp:${e}"]`)?.getAttribute("content") || "";
let v6 = { crossorigin: "use-credentials" };
var v9 = (() => {
	let e = v3(v5("base")), t = v3(v5("config"));
	return () => ({
		...e,
		...t,
		baseHref: globalThis.document?.querySelector("base")?.getAttribute("href") || "/"
	});
})();
let v8 = hS(() => ({ name: "undefined" }), { name: "Manifest" });
var v7 = class e extends hf {
	static empty() {
		return new e({
			openapi: "3.1.0",
			components: { schemas: {} },
			paths: {}
		});
	}
	#e = hT({
		paramsSerializer: hP,
		transformRequestBody: hM
	});
	#t = new p_(/* @__PURE__ */ new Map());
	get #n() {
		return this.value.servers?.[0]?.url ?? "";
	}
	response$(e) {
		return hc(this.#t, hs((t) => {
			let r = t.get(e);
			return r ? ht(r, r.error$) : pT;
		}));
	}
	requesting$(e) {
		return hc(this.#t, hs((t) => t.get(e)?.requesting$ ?? pJ(!1)));
	}
	asRequestConfigCreator(e) {
		let t = this.#r(e);
		if (!t) return null;
		let r = Object.keys(t.requestBody?.content ?? {})[0];
		return (e) => ({
			method: t.method.toUpperCase(),
			url: this.#n + bt(t.path, e),
			params: iW(e, t.parameters?.filter((e) => "query" == e.in).map((e) => e.name)),
			headers: {
				...iW(e, t.parameters?.filter((e) => "header" == e.in).map((e) => e.name)),
				...r ? { "Content-Type": r } : {}
			},
			body: e.body,
			inputs: e
		});
	}
	request(e, t) {
		let r = this.#t.value.get(e);
		if (!r) {
			let t = this.asRequestConfigCreator(e);
			if (!t) return;
			r = new hO(Object.assign(t, {
				operationID: e,
				TRespData: {}
			}), this.#e), this.#t.value.set(e, r), this.#t.next(this.#t.value);
		}
		r.next(t);
	}
	#r(e) {
		for (let t of be(this.value, { operationId: e })) if (t) return t;
		return null;
	}
	operation$(e) {
		return hc(this, hs((t) => {
			for (let r of be(t, { operationId: e })) if (r) return pJ(r);
			return pJ(null);
		}));
	}
	operations$(e) {
		return hc(this, hs((t) => pJ([...be(t, e)])));
	}
	schema$(e) {
		let t = e.split("#/")[1]?.split("/") ?? [];
		return hc(this, hs((e) => t ? pJ(tQ(e, t) ?? null) : pJ(null)), pZ((e) => e ? {
			...e,
			$id: t[t.length - 1]
		} : e));
	}
	schema(e) {
		let t = e.split("#/")[1]?.split("/") ?? [];
		if (t) return tQ(this.value, t) ?? void 0;
	}
};
function* be(e, t) {
	for (let [r, i] of Object.entries(e.paths)) for (let [e, o] of Object.entries(i)) if ("OpenAPI" != o.operationId && "OpenAPIView" != o.operationId && (!t.tag || (o.tags ?? []).includes(t.tag))) {
		if (t.operationId) {
			if (t.operationId.startsWith("*")) {
				if (!o.operationId.toLowerCase().includes(t.operationId.slice(1).toLowerCase())) continue;
			} else if (o.operationId.toLowerCase() != t.operationId.toLowerCase()) continue;
		}
		yield {
			...o,
			method: e,
			path: r,
			group: o.tags?.[0] ?? ""
		};
	}
}
let bt = (e, t = {}) => e.replace(/{([\s\S]+?)}/g, (e, r) => [].concat(t[r] || e).join(",")), bn = hS(() => v7.empty(), { name: "OpenAPI" });
var br = h_(({}, {}) => {
	var e;
	let t = bn.use(), r = new hf({ operationId: void 0 }), i = new pw();
	hc(i, (void 0 === e && (e = pM), py(function(t, r) {
		var i = null, o = null, a = null, l = function() {
			if (i) {
				i.unsubscribe(), i = null;
				var e = o;
				o = null, r.next(e);
			}
		};
		function s() {
			var t = a + 200, o = e.now();
			if (o < t) {
				i = this.schedule(void 0, t - o), r.add(i);
				return;
			}
			l();
		}
		t.subscribe(pv(r, function(t) {
			o = t, a = e.now(), i || (i = e.schedule(s, 200), r.add(i));
		}, function() {
			l(), r.complete();
		}, void 0, function() {
			o = i = null;
		}));
	})), hu((e) => {
		r.next((t) => {
			t.operationId = `*${e ?? ""}`;
		});
	}), hh());
	let o = hg(null);
	hc(o, hs((e) => {
		if (e) {
			let t = (t) => {
				t && e.scrollTo({ top: t.offsetTop - e.offsetTop });
			};
			return new pm(() => {
				let r = new MutationObserver((e) => {
					for (let r of e) if ("attributes" === r.type) {
						let e = r.target;
						e.classList.contains("router-link-active") && t(e);
					}
				});
				return r.observe(e, {
					attributes: !0,
					subtree: !0
				}), setTimeout(() => {
					t(e.querySelector(".router-link-active"));
				}, 100), () => {
					r.disconnect();
				};
			});
		}
		return pT;
	}), hm());
	let a = hc(r, hs((e) => t.operations$(e)), hx((e) => {
		let t = Object.groupBy(e, (e) => e.group);
		return hv(bo, { children: [hb(ba, { children: hb("input", {
			type: "text",
			placeholder: "请输入 operationId 查询",
			onInput: (e) => {
				i.next(e.target.value);
			}
		}) }), hb(bl, {
			sx: {
				flex: 1,
				overflow: "scroll"
			},
			ref: o,
			children: Object.entries(t).toSorted().map(([e, t]) => hv("div", {
				"data-nav-group": !0,
				children: [hb("div", {
					"data-nav-group-heading": !0,
					children: e
				}), hb("div", {
					"data-nav-group-contents": !0,
					children: t?.map((e) => hv(bu, {
						component: dz,
						to: `/operations/${e.operationId}`,
						children: [hb(yW, {
							"data-operation-method": !0,
							sx: { color: {
								get: "sys.primary",
								post: "sys.success",
								put: "sys.warning",
								delete: "sys.error"
							}[e.method] ?? "sys.secondary" },
							children: e.method
						}), hv("div", {
							"data-operation-desc": !0,
							children: [hb("div", {
								"data-operation-id": !0,
								children: e.operationId
							}), e.summary ? hb("div", {
								"data-operation-summary": !0,
								children: e.summary != e.operationId ? e.summary : hb("span", { children: "\xA0" })
							}) : void 0]
						})]
					}))
				})]
			}))
		})] });
	}));
	return () => hv(bi, { children: [a, hb(bs, { children: hb(dH, {}) })] });
}, { displayName: "OpenAPIView" }), bi = yU("div", { displayName: "Container" })({
	width: "100vw",
	height: "100vh",
	overflow: "hidden",
	display: "flex"
}), bo = yU("aside", { displayName: "NavContainer" })({
	width: 240,
	py: 4,
	display: "flex",
	flexDirection: "column",
	gap: 4,
	height: "100%",
	overflow: "hidden",
	borderRight: "1px solid",
	borderColor: "sys.outline"
}), ba = yU("div", { displayName: "NavSearchBox" })({
	input: {
		py: 10,
		px: 12,
		border: "none",
		width: "100%",
		outline: 0
	},
	borderBottom: "1px solid",
	borderColor: "sys.outline"
}), bl = yU("div", { displayName: "Nav" })({
	display: "flex",
	flexDirection: "column",
	gap: 4,
	$data_nav_group_heading: {
		px: 12,
		py: 4,
		textStyle: "sys.label-small",
		containerStyle: "sys.secondary-container"
	}
}), bs = yU("main", { displayName: "Main" })({
	flex: 1,
	overflow: "hidden"
}), bu = yU("a", { displayName: "OperationListItem" })({
	px: 12,
	py: 8,
	pos: "relative",
	overflow: "hidden",
	width: 240,
	display: "flex",
	alignItems: "center",
	gap: 8,
	flexDirection: "row-reverse",
	textDecoration: "none",
	$data_operation_method: {
		textTransform: "uppercase",
		fontSize: 18,
		fontFamily: "code",
		display: "flex",
		alignItems: "center",
		pointerEvents: "none"
	},
	$data_operation_desc: {
		flex: 1,
		overflow: "hidden"
	},
	$data_operation_id: {
		textStyle: "sys.label-large",
		textOverflow: "ellipsis",
		overflow: "hidden"
	},
	$data_operation_summary: {
		opacity: .7,
		textStyle: "sys.body-small",
		textOverflow: "ellipsis",
		overflow: "hidden"
	},
	"&.router-link-active": { containerStyle: "sys.surface-container" }
}), bc = {};
function bf(e, t, r) {
	var i;
	if ((i = e) && "object" == typeof i) {
		if ("value" in e) return "html" !== e.type || r ? e.value : "";
		if (t && "alt" in e && e.alt) return e.alt;
		if ("children" in e) return bd(e.children, t, r);
	}
	return Array.isArray(e) ? bd(e, t, r) : "";
}
function bd(e, t, r) {
	let i = [], o = -1;
	for (; ++o < e.length;) i[o] = bf(e[o], t, r);
	return i.join("");
}
var bp = document.createElement("i");
function bh(e) {
	let t = "&" + e + ";";
	bp.innerHTML = t;
	let r = bp.textContent;
	return (59 !== r.charCodeAt(r.length - 1) || "semi" === e) && r !== t && r;
}
function bm(e, t, r, i) {
	let o, a = e.length, l = 0;
	if (t = t < 0 ? -t > a ? 0 : a + t : t > a ? a : t, r = r > 0 ? r : 0, i.length < 1e4) (o = Array.from(i)).unshift(t, r), e.splice(...o);
	else for (r && e.splice(t, r); l < i.length;) (o = i.slice(l, l + 1e4)).unshift(t, 0), e.splice(...o), l += 1e4, t += 1e4;
}
function bg(e, t) {
	return e.length > 0 ? (bm(e, e.length, 0, t), e) : t;
}
var by = {}.hasOwnProperty;
function bv(e) {
	let t = {}, r = -1;
	for (; ++r < e.length;) (function(e, t) {
		let r;
		for (r in t) {
			let i, o = (by.call(e, r) ? e[r] : void 0) || (e[r] = {}), a = t[r];
			if (a) for (i in a) {
				by.call(o, i) || (o[i] = []);
				let e = a[i];
				(function(e, t) {
					let r = -1, i = [];
					for (; ++r < t.length;) ("after" === t[r].add ? e : i).push(t[r]);
					bm(e, 0, 0, i);
				})(o[i], Array.isArray(e) ? e : e ? [e] : []);
			}
		}
	})(t, e[r]);
	return t;
}
function bb(e, t) {
	let r = Number.parseInt(e, t);
	return r < 9 || 11 === r || r > 13 && r < 32 || r > 126 && r < 160 || r > 55295 && r < 57344 || r > 64975 && r < 65008 || (65535 & r) == 65535 || (65535 & r) == 65534 || r > 1114111 ? "�" : String.fromCodePoint(r);
}
function bx(e) {
	return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
let bw = bD(/[A-Za-z]/), bk = bD(/[\dA-Za-z]/), b_ = bD(/[#-'*+\--9=?A-Z^-~]/);
function bC(e) {
	return null !== e && (e < 32 || 127 === e);
}
let bS = bD(/\d/), bO = bD(/[\dA-Fa-f]/), bA = bD(/[!-/:-@[-`{-~]/);
function bP(e) {
	return null !== e && e < -2;
}
function bM(e) {
	return null !== e && (e < 0 || 32 === e);
}
function bT(e) {
	return -2 === e || -1 === e || 32 === e;
}
let bE = bD(/\p{P}|\p{S}/u), bI = bD(/\s/);
function bD(e) {
	return function(t) {
		return null !== t && t > -1 && e.test(String.fromCharCode(t));
	};
}
function bj(e) {
	let t = [], r = -1, i = 0, o = 0;
	for (; ++r < e.length;) {
		let a = e.charCodeAt(r), l = "";
		if (37 === a && bk(e.charCodeAt(r + 1)) && bk(e.charCodeAt(r + 2))) o = 2;
		else if (a < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a)) || (l = String.fromCharCode(a));
		else if (a > 55295 && a < 57344) {
			let t = e.charCodeAt(r + 1);
			a < 56320 && t > 56319 && t < 57344 ? (l = String.fromCharCode(a, t), o = 1) : l = "�";
		} else l = String.fromCharCode(a);
		l && (t.push(e.slice(i, r), encodeURIComponent(l)), i = r + o + 1, l = ""), o && (r += o, o = 0);
	}
	return t.join("") + e.slice(i);
}
function b$(e, t, r, i) {
	let o = i ? i - 1 : Infinity, a = 0;
	return function(i) {
		return bT(i) ? (e.enter(r), function i(l) {
			return bT(l) && a++ < o ? (e.consume(l), i) : (e.exit(r), t(l));
		}(i)) : t(i);
	};
}
let bL = { tokenize: function(e) {
	let t, r = e.attempt(this.parser.constructs.contentInitial, function(t) {
		return null === t ? void e.consume(t) : (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), b$(e, r, "linePrefix"));
	}, function(r) {
		return e.enter("paragraph"), function r(i) {
			let o = e.enter("chunkText", {
				contentType: "text",
				previous: t
			});
			return t && (t.next = o), t = o, function t(i) {
				if (null === i) {
					e.exit("chunkText"), e.exit("paragraph"), e.consume(i);
					return;
				}
				return bP(i) ? (e.consume(i), e.exit("chunkText"), r) : (e.consume(i), t);
			}(i);
		}(r);
	});
	return r;
} }, bR = { tokenize: function(e) {
	let t, r, i, o = this, a = [], l = 0;
	return s;
	function s(t) {
		if (l < a.length) {
			let r = a[l];
			return o.containerState = r[1], e.attempt(r[0].continuation, u, c)(t);
		}
		return c(t);
	}
	function u(e) {
		if (l++, o.containerState._closeFlow) {
			let r;
			o.containerState._closeFlow = void 0, t && b();
			let i = o.events.length, a = i;
			for (; a--;) if ("exit" === o.events[a][0] && "chunkFlow" === o.events[a][1].type) {
				r = o.events[a][1].end;
				break;
			}
			y(l);
			let s = i;
			for (; s < o.events.length;) o.events[s][1].end = { ...r }, s++;
			return bm(o.events, a + 1, 0, o.events.slice(i)), o.events.length = s, c(e);
		}
		return s(e);
	}
	function c(r) {
		if (l === a.length) {
			if (!t) return p(r);
			if (t.currentConstruct && t.currentConstruct.concrete) return m(r);
			o.interrupt = !!(t.currentConstruct && !t._gfmTableDynamicInterruptHack);
		}
		return o.containerState = {}, e.check(bN, f, d)(r);
	}
	function f(e) {
		return t && b(), y(l), p(e);
	}
	function d(e) {
		return o.parser.lazy[o.now().line] = l !== a.length, i = o.now().offset, m(e);
	}
	function p(t) {
		return o.containerState = {}, e.attempt(bN, h, m)(t);
	}
	function h(e) {
		return l++, a.push([o.currentConstruct, o.containerState]), p(e);
	}
	function m(i) {
		if (null === i) {
			t && b(), y(0), e.consume(i);
			return;
		}
		return t = t || o.parser.flow(o.now()), e.enter("chunkFlow", {
			_tokenizer: t,
			contentType: "flow",
			previous: r
		}), function t(r) {
			if (null === r) {
				g(e.exit("chunkFlow"), !0), y(0), e.consume(r);
				return;
			}
			return bP(r) ? (e.consume(r), g(e.exit("chunkFlow")), l = 0, o.interrupt = void 0, s) : (e.consume(r), t);
		}(i);
	}
	function g(e, a) {
		let s = o.sliceStream(e);
		if (a && s.push(null), e.previous = r, r && (r.next = e), r = e, t.defineSkip(e.start), t.write(s), o.parser.lazy[e.start.line]) {
			let e, r, a = t.events.length;
			for (; a--;) if (t.events[a][1].start.offset < i && (!t.events[a][1].end || t.events[a][1].end.offset > i)) return;
			let s = o.events.length, u = s;
			for (; u--;) if ("exit" === o.events[u][0] && "chunkFlow" === o.events[u][1].type) {
				if (e) {
					r = o.events[u][1].end;
					break;
				}
				e = !0;
			}
			for (y(l), a = s; a < o.events.length;) o.events[a][1].end = { ...r }, a++;
			bm(o.events, u + 1, 0, o.events.slice(s)), o.events.length = a;
		}
	}
	function y(t) {
		let r = a.length;
		for (; r-- > t;) {
			let t = a[r];
			o.containerState = t[1], t[0].exit.call(o, e);
		}
		a.length = t;
	}
	function b() {
		t.write([null]), r = void 0, t = void 0, o.containerState._closeFlow = void 0;
	}
} };
var bN = { tokenize: function(e, t, r) {
	return b$(e, e.attempt(this.parser.constructs.document, t, r), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
} };
function bF(e) {
	return null === e || bM(e) || bI(e) ? 1 : bE(e) ? 2 : void 0;
}
function bz(e, t, r) {
	let i = [], o = -1;
	for (; ++o < e.length;) {
		let a = e[o].resolveAll;
		a && !i.includes(a) && (t = a(t, r), i.push(a));
	}
	return t;
}
let bV = {
	name: "attention",
	resolveAll: function(e, t) {
		let r, i, o, a, l, s, u, c, f = -1;
		for (; ++f < e.length;) if ("enter" === e[f][0] && "attentionSequence" === e[f][1].type && e[f][1]._close) {
			for (r = f; r--;) if ("exit" === e[r][0] && "attentionSequence" === e[r][1].type && e[r][1]._open && t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[f][1]).charCodeAt(0)) {
				if ((e[r][1]._close || e[f][1]._open) && (e[f][1].end.offset - e[f][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[f][1].end.offset - e[f][1].start.offset) % 3)) continue;
				s = e[r][1].end.offset - e[r][1].start.offset > 1 && e[f][1].end.offset - e[f][1].start.offset > 1 ? 2 : 1;
				let d = { ...e[r][1].end }, p = { ...e[f][1].start };
				bB(d, -s), bB(p, s), a = {
					type: s > 1 ? "strongSequence" : "emphasisSequence",
					start: d,
					end: { ...e[r][1].end }
				}, l = {
					type: s > 1 ? "strongSequence" : "emphasisSequence",
					start: { ...e[f][1].start },
					end: p
				}, o = {
					type: s > 1 ? "strongText" : "emphasisText",
					start: { ...e[r][1].end },
					end: { ...e[f][1].start }
				}, i = {
					type: s > 1 ? "strong" : "emphasis",
					start: { ...a.start },
					end: { ...l.end }
				}, e[r][1].end = { ...a.start }, e[f][1].start = { ...l.end }, u = [], e[r][1].end.offset - e[r][1].start.offset && (u = bg(u, [[
					"enter",
					e[r][1],
					t
				], [
					"exit",
					e[r][1],
					t
				]])), u = bg(u, [
					[
						"enter",
						i,
						t
					],
					[
						"enter",
						a,
						t
					],
					[
						"exit",
						a,
						t
					],
					[
						"enter",
						o,
						t
					]
				]), u = bg(u, bz(t.parser.constructs.insideSpan.null, e.slice(r + 1, f), t)), u = bg(u, [
					[
						"exit",
						o,
						t
					],
					[
						"enter",
						l,
						t
					],
					[
						"exit",
						l,
						t
					],
					[
						"exit",
						i,
						t
					]
				]), e[f][1].end.offset - e[f][1].start.offset ? (c = 2, u = bg(u, [[
					"enter",
					e[f][1],
					t
				], [
					"exit",
					e[f][1],
					t
				]])) : c = 0, bm(e, r - 1, f - r + 3, u), f = r + u.length - c - 2;
				break;
			}
		}
		for (f = -1; ++f < e.length;) "attentionSequence" === e[f][1].type && (e[f][1].type = "data");
		return e;
	},
	tokenize: function(e, t) {
		let r, i = this.parser.constructs.attentionMarkers.null, o = this.previous, a = bF(o);
		return function(l) {
			return r = l, e.enter("attentionSequence"), function l(s) {
				if (s === r) return e.consume(s), l;
				let u = e.exit("attentionSequence"), c = bF(s), f = !c || 2 === c && a || i.includes(s), d = !a || 2 === a && c || i.includes(o);
				return u._open = !!(42 === r ? f : f && (a || !d)), u._close = !!(42 === r ? d : d && (c || !f)), t(s);
			}(l);
		};
	}
};
function bB(e, t) {
	e.column += t, e.offset += t, e._bufferIndex += t;
}
let bH = {
	partial: !0,
	tokenize: function(e, t, r) {
		return function(t) {
			return bT(t) ? b$(e, i, "linePrefix")(t) : i(t);
		};
		function i(e) {
			return null === e || bP(e) ? t(e) : r(e);
		}
	}
}, bW = {
	continuation: { tokenize: function(e, t, r) {
		let i = this;
		return function(t) {
			return bT(t) ? b$(e, o, "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : o(t);
		};
		function o(i) {
			return e.attempt(bW, t, r)(i);
		}
	} },
	exit: function(e) {
		e.exit("blockQuote");
	},
	name: "blockQuote",
	tokenize: function(e, t, r) {
		let i = this;
		return function(t) {
			if (62 === t) {
				let r = i.containerState;
				return r.open || (e.enter("blockQuote", { _container: !0 }), r.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(t), e.exit("blockQuoteMarker"), o;
			}
			return r(t);
		};
		function o(r) {
			return bT(r) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(r), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(r));
		}
	}
}, bU = {
	name: "characterEscape",
	tokenize: function(e, t, r) {
		return function(t) {
			return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(t), e.exit("escapeMarker"), i;
		};
		function i(i) {
			return bA(i) ? (e.enter("characterEscapeValue"), e.consume(i), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : r(i);
		}
	}
}, bq = {
	name: "characterReference",
	tokenize: function(e, t, r) {
		let i, o, a = this, l = 0;
		return function(t) {
			return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(t), e.exit("characterReferenceMarker"), s;
		};
		function s(t) {
			return 35 === t ? (e.enter("characterReferenceMarkerNumeric"), e.consume(t), e.exit("characterReferenceMarkerNumeric"), u) : (e.enter("characterReferenceValue"), i = 31, o = bk, c(t));
		}
		function u(t) {
			return 88 === t || 120 === t ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(t), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), i = 6, o = bO, c) : (e.enter("characterReferenceValue"), i = 7, o = bS, c(t));
		}
		function c(s) {
			if (59 === s && l) {
				let i = e.exit("characterReferenceValue");
				return o !== bk || bh(a.sliceSerialize(i)) ? (e.enter("characterReferenceMarker"), e.consume(s), e.exit("characterReferenceMarker"), e.exit("characterReference"), t) : r(s);
			}
			return o(s) && l++ < i ? (e.consume(s), c) : r(s);
		}
	}
};
var bK = {
	partial: !0,
	tokenize: function(e, t, r) {
		let i = this;
		return function(t) {
			return null === t ? r(t) : (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), o);
		};
		function o(e) {
			return i.parser.lazy[i.now().line] ? r(e) : t(e);
		}
	}
};
let bG = {
	concrete: !0,
	name: "codeFenced",
	tokenize: function(e, t, r) {
		let i, o = this, a = {
			partial: !0,
			tokenize: function(e, t, r) {
				let a = 0;
				return function(t) {
					return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), l;
				};
				function l(t) {
					return e.enter("codeFencedFence"), bT(t) ? b$(e, u, "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : u(t);
				}
				function u(t) {
					return t === i ? (e.enter("codeFencedFenceSequence"), function t(o) {
						return o === i ? (a++, e.consume(o), t) : a >= s ? (e.exit("codeFencedFenceSequence"), bT(o) ? b$(e, c, "whitespace")(o) : c(o)) : r(o);
					}(t)) : r(t);
				}
				function c(i) {
					return null === i || bP(i) ? (e.exit("codeFencedFence"), t(i)) : r(i);
				}
			}
		}, l = 0, s = 0;
		return function(t) {
			var a = t;
			let c = o.events[o.events.length - 1];
			return l = c && "linePrefix" === c[1].type ? c[2].sliceSerialize(c[1], !0).length : 0, i = a, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), function t(o) {
				return o === i ? (s++, e.consume(o), t) : s < 3 ? r(o) : (e.exit("codeFencedFenceSequence"), bT(o) ? b$(e, u, "whitespace")(o) : u(o));
			}(a);
		};
		function u(a) {
			return null === a || bP(a) ? (e.exit("codeFencedFence"), o.interrupt ? t(a) : e.check(bK, f, m)(a)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", { contentType: "string" }), function t(o) {
				return null === o || bP(o) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), u(o)) : bT(o) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), b$(e, c, "whitespace")(o)) : 96 === o && o === i ? r(o) : (e.consume(o), t);
			}(a));
		}
		function c(t) {
			return null === t || bP(t) ? u(t) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", { contentType: "string" }), function t(o) {
				return null === o || bP(o) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), u(o)) : 96 === o && o === i ? r(o) : (e.consume(o), t);
			}(t));
		}
		function f(t) {
			return e.attempt(a, m, d)(t);
		}
		function d(t) {
			return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), p;
		}
		function p(t) {
			return l > 0 && bT(t) ? b$(e, h, "linePrefix", l + 1)(t) : h(t);
		}
		function h(t) {
			return null === t || bP(t) ? e.check(bK, f, m)(t) : (e.enter("codeFlowValue"), function t(r) {
				return null === r || bP(r) ? (e.exit("codeFlowValue"), h(r)) : (e.consume(r), t);
			}(t));
		}
		function m(r) {
			return e.exit("codeFenced"), t(r);
		}
	}
}, bJ = {
	name: "codeIndented",
	tokenize: function(e, t, r) {
		let i = this;
		return function(t) {
			return e.enter("codeIndented"), b$(e, o, "linePrefix", 5)(t);
		};
		function o(t) {
			let o = i.events[i.events.length - 1];
			return o && "linePrefix" === o[1].type && o[2].sliceSerialize(o[1], !0).length >= 4 ? function t(r) {
				return null === r ? a(r) : bP(r) ? e.attempt(bZ, t, a)(r) : (e.enter("codeFlowValue"), function r(i) {
					return null === i || bP(i) ? (e.exit("codeFlowValue"), t(i)) : (e.consume(i), r);
				}(r));
			}(t) : r(t);
		}
		function a(r) {
			return e.exit("codeIndented"), t(r);
		}
	}
};
var bZ = {
	partial: !0,
	tokenize: function(e, t, r) {
		let i = this;
		return o;
		function o(t) {
			return i.parser.lazy[i.now().line] ? r(t) : bP(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), o) : b$(e, a, "linePrefix", 5)(t);
		}
		function a(e) {
			let a = i.events[i.events.length - 1];
			return a && "linePrefix" === a[1].type && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(e) : bP(e) ? o(e) : r(e);
		}
	}
}, bX = class {
	constructor(e) {
		this.left = e ? [...e] : [], this.right = [];
	}
	get(e) {
		if (e < 0 || e >= this.left.length + this.right.length) throw RangeError("Cannot access index `" + e + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
		return e < this.left.length ? this.left[e] : this.right[this.right.length - e + this.left.length - 1];
	}
	get length() {
		return this.left.length + this.right.length;
	}
	shift() {
		return this.setCursor(0), this.right.pop();
	}
	slice(e, t) {
		let r = null == t ? Infinity : t;
		return r < this.left.length ? this.left.slice(e, r) : e > this.left.length ? this.right.slice(this.right.length - r + this.left.length, this.right.length - e + this.left.length).reverse() : this.left.slice(e).concat(this.right.slice(this.right.length - r + this.left.length).reverse());
	}
	splice(e, t, r) {
		this.setCursor(Math.trunc(e));
		let i = this.right.splice(this.right.length - (t || 0), Infinity);
		return r && bY(this.left, r), i.reverse();
	}
	pop() {
		return this.setCursor(Infinity), this.left.pop();
	}
	push(e) {
		this.setCursor(Infinity), this.left.push(e);
	}
	pushMany(e) {
		this.setCursor(Infinity), bY(this.left, e);
	}
	unshift(e) {
		this.setCursor(0), this.right.push(e);
	}
	unshiftMany(e) {
		this.setCursor(0), bY(this.right, e.reverse());
	}
	setCursor(e) {
		if (e !== this.left.length && (!(e > this.left.length) || 0 !== this.right.length) && (!(e < 0) || 0 !== this.left.length)) if (e < this.left.length) {
			let t = this.left.splice(e, Infinity);
			bY(this.right, t.reverse());
		} else {
			let t = this.right.splice(this.left.length + this.right.length - e, Infinity);
			bY(this.left, t.reverse());
		}
	}
};
function bY(e, t) {
	let r = 0;
	if (t.length < 1e4) e.push(...t);
	else for (; r < t.length;) e.push(...t.slice(r, r + 1e4)), r += 1e4;
}
function bQ(e) {
	let t, r, i, o, a, l, s, u = {}, c = -1, f = new bX(e);
	for (; ++c < f.length;) {
		for (; c in u;) c = u[c];
		if (t = f.get(c), c && "chunkFlow" === t[1].type && "listItemPrefix" === f.get(c - 1)[1].type && ((i = 0) < (l = t[1]._tokenizer.events).length && "lineEndingBlank" === l[i][1].type && (i += 2), i < l.length && "content" === l[i][1].type)) for (; ++i < l.length && "content" !== l[i][1].type;) "chunkText" === l[i][1].type && (l[i][1]._isInFirstContentOfListItem = !0, i++);
		if ("enter" === t[0]) t[1].contentType && (Object.assign(u, function(e, t) {
			let r, i, o = e.get(t)[1], a = e.get(t)[2], l = t - 1, s = [], u = o._tokenizer;
			!u && (u = a.parser[o.contentType](o.start), o._contentTypeTextTrailing && (u._contentTypeTextTrailing = !0));
			let c = u.events, f = [], d = {}, p = -1, h = o, m = 0, g = 0, y = [0];
			for (; h;) {
				for (; e.get(++l)[1] !== h;);
				s.push(l), !h._tokenizer && (r = a.sliceStream(h), h.next || r.push(null), i && u.defineSkip(h.start), h._isInFirstContentOfListItem && (u._gfmTasklistFirstContentOfListItem = !0), u.write(r), h._isInFirstContentOfListItem && (u._gfmTasklistFirstContentOfListItem = void 0)), i = h, h = h.next;
			}
			for (h = o; ++p < c.length;) "exit" === c[p][0] && "enter" === c[p - 1][0] && c[p][1].type === c[p - 1][1].type && c[p][1].start.line !== c[p][1].end.line && (g = p + 1, y.push(g), h._tokenizer = void 0, h.previous = void 0, h = h.next);
			for (u.events = [], h ? (h._tokenizer = void 0, h.previous = void 0) : y.pop(), p = y.length; p--;) {
				let t = c.slice(y[p], y[p + 1]), r = s.pop();
				f.push([r, r + t.length - 1]), e.splice(r, 2, t);
			}
			for (f.reverse(), p = -1; ++p < f.length;) d[m + f[p][0]] = m + f[p][1], m += f[p][1] - f[p][0] - 1;
			return d;
		}(f, c)), c = u[c], s = !0);
		else if (t[1]._container) {
			for (i = c, r = void 0; i--;) if ("lineEnding" === (o = f.get(i))[1].type || "lineEndingBlank" === o[1].type) "enter" === o[0] && (r && (f.get(r)[1].type = "lineEndingBlank"), o[1].type = "lineEnding", r = i);
			else if ("linePrefix" === o[1].type || "listItemIndent" === o[1].type);
			else break;
			r && (t[1].end = { ...f.get(r)[1].start }, (a = f.slice(r, c)).unshift(t), f.splice(r, c - r + 1, a));
		}
	}
	return bm(e, 0, Infinity, f.slice(0)), !s;
}
let b0 = {
	resolve: function(e) {
		return bQ(e), e;
	},
	tokenize: function(e, t) {
		let r;
		return function(t) {
			return e.enter("content"), r = e.enter("chunkContent", { contentType: "content" }), i(t);
		};
		function i(t) {
			return null === t ? o(t) : bP(t) ? e.check(b1, a, o)(t) : (e.consume(t), i);
		}
		function o(r) {
			return e.exit("chunkContent"), e.exit("content"), t(r);
		}
		function a(t) {
			return e.consume(t), e.exit("chunkContent"), r.next = e.enter("chunkContent", {
				contentType: "content",
				previous: r
			}), r = r.next, i;
		}
	}
};
var b1 = {
	partial: !0,
	tokenize: function(e, t, r) {
		let i = this;
		return function(t) {
			return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), b$(e, o, "linePrefix");
		};
		function o(o) {
			if (null === o || bP(o)) return r(o);
			let a = i.events[i.events.length - 1];
			return !i.parser.constructs.disable.null.includes("codeIndented") && a && "linePrefix" === a[1].type && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(o) : e.interrupt(i.parser.constructs.flow, r, t)(o);
		}
	}
};
function b2(e, t, r, i, o, a, l, s, u) {
	let c = u || Infinity, f = 0;
	return function(t) {
		return 60 === t ? (e.enter(i), e.enter(o), e.enter(a), e.consume(t), e.exit(a), d) : null === t || 32 === t || 41 === t || bC(t) ? r(t) : (e.enter(i), e.enter(l), e.enter(s), e.enter("chunkString", { contentType: "string" }), m(t));
	};
	function d(r) {
		return 62 === r ? (e.enter(a), e.consume(r), e.exit(a), e.exit(o), e.exit(i), t) : (e.enter(s), e.enter("chunkString", { contentType: "string" }), p(r));
	}
	function p(t) {
		return 62 === t ? (e.exit("chunkString"), e.exit(s), d(t)) : null === t || 60 === t || bP(t) ? r(t) : (e.consume(t), 92 === t ? h : p);
	}
	function h(t) {
		return 60 === t || 62 === t || 92 === t ? (e.consume(t), p) : p(t);
	}
	function m(o) {
		return !f && (null === o || 41 === o || bM(o)) ? (e.exit("chunkString"), e.exit(s), e.exit(l), e.exit(i), t(o)) : f < c && 40 === o ? (e.consume(o), f++, m) : 41 === o ? (e.consume(o), f--, m) : null === o || 32 === o || 40 === o || bC(o) ? r(o) : (e.consume(o), 92 === o ? g : m);
	}
	function g(t) {
		return 40 === t || 41 === t || 92 === t ? (e.consume(t), m) : m(t);
	}
}
function b4(e, t, r, i, o, a) {
	let l, s = this, u = 0;
	return function(t) {
		return e.enter(i), e.enter(o), e.consume(t), e.exit(o), e.enter(a), c;
	};
	function c(d) {
		return u > 999 || null === d || 91 === d || 93 === d && !l || 94 === d && !u && "_hiddenFootnoteSupport" in s.parser.constructs ? r(d) : 93 === d ? (e.exit(a), e.enter(o), e.consume(d), e.exit(o), e.exit(i), t) : bP(d) ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), c) : (e.enter("chunkString", { contentType: "string" }), f(d));
	}
	function f(t) {
		return null === t || 91 === t || 93 === t || bP(t) || u++ > 999 ? (e.exit("chunkString"), c(t)) : (e.consume(t), l || (l = !bT(t)), 92 === t ? d : f);
	}
	function d(t) {
		return 91 === t || 92 === t || 93 === t ? (e.consume(t), u++, f) : f(t);
	}
}
function b3(e, t, r, i, o, a) {
	let l;
	return function(t) {
		return 34 === t || 39 === t || 40 === t ? (e.enter(i), e.enter(o), e.consume(t), e.exit(o), l = 40 === t ? 41 : t, s) : r(t);
	};
	function s(r) {
		return r === l ? (e.enter(o), e.consume(r), e.exit(o), e.exit(i), t) : (e.enter(a), u(r));
	}
	function u(t) {
		return t === l ? (e.exit(a), s(l)) : null === t ? r(t) : bP(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), b$(e, u, "linePrefix")) : (e.enter("chunkString", { contentType: "string" }), c(t));
	}
	function c(t) {
		return t === l || null === t || bP(t) ? (e.exit("chunkString"), u(t)) : (e.consume(t), 92 === t ? f : c);
	}
	function f(t) {
		return t === l || 92 === t ? (e.consume(t), c) : c(t);
	}
}
function b5(e, t) {
	let r;
	return function i(o) {
		return bP(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), r = !0, i) : bT(o) ? b$(e, i, r ? "linePrefix" : "lineSuffix")(o) : t(o);
	};
}
var b6 = {
	partial: !0,
	tokenize: function(e, t, r) {
		return function(t) {
			return bM(t) ? b5(e, i)(t) : r(t);
		};
		function i(t) {
			return b3(e, o, r, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t);
		}
		function o(t) {
			return bT(t) ? b$(e, a, "whitespace")(t) : a(t);
		}
		function a(e) {
			return null === e || bP(e) ? t(e) : r(e);
		}
	}
};
let b9 = [
	"address",
	"article",
	"aside",
	"base",
	"basefont",
	"blockquote",
	"body",
	"caption",
	"center",
	"col",
	"colgroup",
	"dd",
	"details",
	"dialog",
	"dir",
	"div",
	"dl",
	"dt",
	"fieldset",
	"figcaption",
	"figure",
	"footer",
	"form",
	"frame",
	"frameset",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"head",
	"header",
	"hr",
	"html",
	"iframe",
	"legend",
	"li",
	"link",
	"main",
	"menu",
	"menuitem",
	"nav",
	"noframes",
	"ol",
	"optgroup",
	"option",
	"p",
	"param",
	"search",
	"section",
	"summary",
	"table",
	"tbody",
	"td",
	"tfoot",
	"th",
	"thead",
	"title",
	"tr",
	"track",
	"ul"
], b8 = [
	"pre",
	"script",
	"style",
	"textarea"
];
var b7 = {
	partial: !0,
	tokenize: function(e, t, r) {
		return function(i) {
			return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(bH, t, r);
		};
	}
}, xe = {
	partial: !0,
	tokenize: function(e, t, r) {
		let i = this;
		return function(t) {
			return bP(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), o) : r(t);
		};
		function o(e) {
			return i.parser.lazy[i.now().line] ? r(e) : t(e);
		}
	}
};
let xt = {
	name: "labelEnd",
	resolveAll: function(e) {
		let t = -1, r = [];
		for (; ++t < e.length;) {
			let i = e[t][1];
			if (r.push(e[t]), "labelImage" === i.type || "labelLink" === i.type || "labelEnd" === i.type) {
				let e = "labelImage" === i.type ? 4 : 2;
				i.type = "data", t += e;
			}
		}
		return e.length !== r.length && bm(e, 0, e.length, r), e;
	},
	resolveTo: function(e, t) {
		let r, i, o, a, l = e.length, s = 0;
		for (; l--;) if (r = e[l][1], i) {
			if ("link" === r.type || "labelLink" === r.type && r._inactive) break;
			"enter" === e[l][0] && "labelLink" === r.type && (r._inactive = !0);
		} else if (o) {
			if ("enter" === e[l][0] && ("labelImage" === r.type || "labelLink" === r.type) && !r._balanced && (i = l, "labelLink" !== r.type)) {
				s = 2;
				break;
			}
		} else "labelEnd" === r.type && (o = l);
		let u = {
			type: "labelLink" === e[i][1].type ? "link" : "image",
			start: { ...e[i][1].start },
			end: { ...e[e.length - 1][1].end }
		}, c = {
			type: "label",
			start: { ...e[i][1].start },
			end: { ...e[o][1].end }
		}, f = {
			type: "labelText",
			start: { ...e[i + s + 2][1].end },
			end: { ...e[o - 2][1].start }
		};
		return a = bg(a = [[
			"enter",
			u,
			t
		], [
			"enter",
			c,
			t
		]], e.slice(i + 1, i + s + 3)), a = bg(a, [[
			"enter",
			f,
			t
		]]), a = bg(a, bz(t.parser.constructs.insideSpan.null, e.slice(i + s + 4, o - 3), t)), a = bg(a, [
			[
				"exit",
				f,
				t
			],
			e[o - 2],
			e[o - 1],
			[
				"exit",
				c,
				t
			]
		]), a = bg(a, e.slice(o + 1)), a = bg(a, [[
			"exit",
			u,
			t
		]]), bm(e, i, e.length, a), e;
	},
	tokenize: function(e, t, r) {
		let i, o, a = this, l = a.events.length;
		for (; l--;) if (("labelImage" === a.events[l][1].type || "labelLink" === a.events[l][1].type) && !a.events[l][1]._balanced) {
			i = a.events[l][1];
			break;
		}
		return function(t) {
			return i ? i._inactive ? f(t) : (o = a.parser.defined.includes(bx(a.sliceSerialize({
				start: i.end,
				end: a.now()
			}))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelEnd"), s) : r(t);
		};
		function s(t) {
			return 40 === t ? e.attempt(xn, c, o ? c : f)(t) : 91 === t ? e.attempt(xr, c, o ? u : f)(t) : o ? c(t) : f(t);
		}
		function u(t) {
			return e.attempt(xi, c, f)(t);
		}
		function c(e) {
			return t(e);
		}
		function f(e) {
			return i._balanced = !0, r(e);
		}
	}
};
var xn = { tokenize: function(e, t, r) {
	return function(t) {
		return e.enter("resource"), e.enter("resourceMarker"), e.consume(t), e.exit("resourceMarker"), i;
	};
	function i(t) {
		return bM(t) ? b5(e, o)(t) : o(t);
	}
	function o(t) {
		return 41 === t ? c(t) : b2(e, a, l, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(t);
	}
	function a(t) {
		return bM(t) ? b5(e, s)(t) : c(t);
	}
	function l(e) {
		return r(e);
	}
	function s(t) {
		return 34 === t || 39 === t || 40 === t ? b3(e, u, r, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : c(t);
	}
	function u(t) {
		return bM(t) ? b5(e, c)(t) : c(t);
	}
	function c(i) {
		return 41 === i ? (e.enter("resourceMarker"), e.consume(i), e.exit("resourceMarker"), e.exit("resource"), t) : r(i);
	}
} }, xr = { tokenize: function(e, t, r) {
	let i = this;
	return function(t) {
		return b4.call(i, e, o, a, "reference", "referenceMarker", "referenceString")(t);
	};
	function o(e) {
		return i.parser.defined.includes(bx(i.sliceSerialize(i.events[i.events.length - 1][1]).slice(1, -1))) ? t(e) : r(e);
	}
	function a(e) {
		return r(e);
	}
} }, xi = { tokenize: function(e, t, r) {
	return function(t) {
		return e.enter("reference"), e.enter("referenceMarker"), e.consume(t), e.exit("referenceMarker"), i;
	};
	function i(i) {
		return 93 === i ? (e.enter("referenceMarker"), e.consume(i), e.exit("referenceMarker"), e.exit("reference"), t) : r(i);
	}
} };
let xo = {
	name: "labelStartImage",
	resolveAll: xt.resolveAll,
	tokenize: function(e, t, r) {
		let i = this;
		return function(t) {
			return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(t), e.exit("labelImageMarker"), o;
		};
		function o(t) {
			return 91 === t ? (e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelImage"), a) : r(t);
		}
		function a(e) {
			return 94 === e && "_hiddenFootnoteSupport" in i.parser.constructs ? r(e) : t(e);
		}
	}
}, xa = {
	name: "labelStartLink",
	resolveAll: xt.resolveAll,
	tokenize: function(e, t, r) {
		let i = this;
		return function(t) {
			return e.enter("labelLink"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelLink"), o;
		};
		function o(e) {
			return 94 === e && "_hiddenFootnoteSupport" in i.parser.constructs ? r(e) : t(e);
		}
	}
}, xl = {
	name: "lineEnding",
	tokenize: function(e, t) {
		return function(r) {
			return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), b$(e, t, "linePrefix");
		};
	}
}, xs = {
	name: "thematicBreak",
	tokenize: function(e, t, r) {
		let i, o = 0;
		return function(a) {
			var l;
			return e.enter("thematicBreak"), i = l = a, function a(l) {
				return l === i ? (e.enter("thematicBreakSequence"), function t(r) {
					return r === i ? (e.consume(r), o++, t) : (e.exit("thematicBreakSequence"), bT(r) ? b$(e, a, "whitespace")(r) : a(r));
				}(l)) : o >= 3 && (null === l || bP(l)) ? (e.exit("thematicBreak"), t(l)) : r(l);
			}(l);
		};
	}
}, xu = {
	continuation: { tokenize: function(e, t, r) {
		let i = this;
		return i.containerState._closeFlow = void 0, e.check(bH, function(r) {
			return i.containerState.furtherBlankLines = i.containerState.furtherBlankLines || i.containerState.initialBlankLine, b$(e, t, "listItemIndent", i.containerState.size + 1)(r);
		}, function(r) {
			return i.containerState.furtherBlankLines || !bT(r) ? (i.containerState.furtherBlankLines = void 0, i.containerState.initialBlankLine = void 0, o(r)) : (i.containerState.furtherBlankLines = void 0, i.containerState.initialBlankLine = void 0, e.attempt(xf, t, o)(r));
		});
		function o(o) {
			return i.containerState._closeFlow = !0, i.interrupt = void 0, b$(e, e.attempt(xu, t, r), "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(o);
		}
	} },
	exit: function(e) {
		e.exit(this.containerState.type);
	},
	name: "list",
	tokenize: function(e, t, r) {
		let i = this, o = i.events[i.events.length - 1], a = o && "linePrefix" === o[1].type ? o[2].sliceSerialize(o[1], !0).length : 0, l = 0;
		return function(t) {
			let o = i.containerState.type || (42 === t || 43 === t || 45 === t ? "listUnordered" : "listOrdered");
			if ("listUnordered" === o ? !i.containerState.marker || t === i.containerState.marker : bS(t)) {
				if (i.containerState.type || (i.containerState.type = o, e.enter(o, { _container: !0 })), "listUnordered" === o) return e.enter("listItemPrefix"), 42 === t || 45 === t ? e.check(xs, r, s)(t) : s(t);
				if (!i.interrupt || 49 === t) return e.enter("listItemPrefix"), e.enter("listItemValue"), function t(o) {
					return bS(o) && ++l < 10 ? (e.consume(o), t) : (!i.interrupt || l < 2) && (i.containerState.marker ? o === i.containerState.marker : 41 === o || 46 === o) ? (e.exit("listItemValue"), s(o)) : r(o);
				}(t);
			}
			return r(t);
		};
		function s(t) {
			return e.enter("listItemMarker"), e.consume(t), e.exit("listItemMarker"), i.containerState.marker = i.containerState.marker || t, e.check(bH, i.interrupt ? r : u, e.attempt(xc, f, c));
		}
		function u(e) {
			return i.containerState.initialBlankLine = !0, a++, f(e);
		}
		function c(t) {
			return bT(t) ? (e.enter("listItemPrefixWhitespace"), e.consume(t), e.exit("listItemPrefixWhitespace"), f) : r(t);
		}
		function f(r) {
			return i.containerState.size = a + i.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(r);
		}
	}
};
var xc = {
	partial: !0,
	tokenize: function(e, t, r) {
		let i = this;
		return b$(e, function(e) {
			let o = i.events[i.events.length - 1];
			return !bT(e) && o && "listItemPrefixWhitespace" === o[1].type ? t(e) : r(e);
		}, "listItemPrefixWhitespace", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
	}
}, xf = {
	partial: !0,
	tokenize: function(e, t, r) {
		let i = this;
		return b$(e, function(e) {
			let o = i.events[i.events.length - 1];
			return o && "listItemIndent" === o[1].type && o[2].sliceSerialize(o[1], !0).length === i.containerState.size ? t(e) : r(e);
		}, "listItemIndent", i.containerState.size + 1);
	}
};
let xd = {
	name: "setextUnderline",
	resolveTo: function(e, t) {
		let r, i, o, a = e.length;
		for (; a--;) if ("enter" === e[a][0]) {
			if ("content" === e[a][1].type) {
				r = a;
				break;
			}
			"paragraph" === e[a][1].type && (i = a);
		} else "content" === e[a][1].type && e.splice(a, 1), o || "definition" !== e[a][1].type || (o = a);
		let l = {
			type: "setextHeading",
			start: { ...e[r][1].start },
			end: { ...e[e.length - 1][1].end }
		};
		return e[i][1].type = "setextHeadingText", o ? (e.splice(i, 0, [
			"enter",
			l,
			t
		]), e.splice(o + 1, 0, [
			"exit",
			e[r][1],
			t
		]), e[r][1].end = { ...e[o][1].end }) : e[r][1] = l, e.push([
			"exit",
			l,
			t
		]), e;
	},
	tokenize: function(e, t, r) {
		let i, o = this;
		return function(t) {
			var l;
			let s, u = o.events.length;
			for (; u--;) if ("lineEnding" !== o.events[u][1].type && "linePrefix" !== o.events[u][1].type && "content" !== o.events[u][1].type) {
				s = "paragraph" === o.events[u][1].type;
				break;
			}
			return !o.parser.lazy[o.now().line] && (o.interrupt || s) ? (e.enter("setextHeadingLine"), i = t, l = t, e.enter("setextHeadingLineSequence"), function t(r) {
				return r === i ? (e.consume(r), t) : (e.exit("setextHeadingLineSequence"), bT(r) ? b$(e, a, "lineSuffix")(r) : a(r));
			}(l)) : r(t);
		};
		function a(i) {
			return null === i || bP(i) ? (e.exit("setextHeadingLine"), t(i)) : r(i);
		}
	}
}, xp = { tokenize: function(e) {
	let t = this, r = e.attempt(bH, function(i) {
		return null === i ? void e.consume(i) : (e.enter("lineEndingBlank"), e.consume(i), e.exit("lineEndingBlank"), t.currentConstruct = void 0, r);
	}, e.attempt(this.parser.constructs.flowInitial, i, b$(e, e.attempt(this.parser.constructs.flow, i, e.attempt(b0, i)), "linePrefix")));
	return r;
	function i(i) {
		return null === i ? void e.consume(i) : (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), t.currentConstruct = void 0, r);
	}
} }, xh = { resolveAll: xv() }, xm = xy("string"), xg = xy("text");
function xy(e) {
	return {
		resolveAll: xv("text" === e ? xb : void 0),
		tokenize: function(t) {
			let r = this, i = this.parser.constructs[e], o = t.attempt(i, a, l);
			return a;
			function a(e) {
				return u(e) ? o(e) : l(e);
			}
			function l(e) {
				return null === e ? void t.consume(e) : (t.enter("data"), t.consume(e), s);
			}
			function s(e) {
				return u(e) ? (t.exit("data"), o(e)) : (t.consume(e), s);
			}
			function u(e) {
				if (null === e) return !0;
				let t = i[e], o = -1;
				if (t) for (; ++o < t.length;) {
					let e = t[o];
					if (!e.previous || e.previous.call(r, r.previous)) return !0;
				}
				return !1;
			}
		}
	};
}
function xv(e) {
	return function(t, r) {
		let i, o = -1;
		for (; ++o <= t.length;) void 0 === i ? t[o] && "data" === t[o][1].type && (i = o, o++) : t[o] && "data" === t[o][1].type || (o !== i + 2 && (t[i][1].end = t[o - 1][1].end, t.splice(i + 2, o - i - 2), o = i + 2), i = void 0);
		return e ? e(t, r) : t;
	};
}
function xb(e, t) {
	let r = 0;
	for (; ++r <= e.length;) if ((r === e.length || "lineEnding" === e[r][1].type) && "data" === e[r - 1][1].type) {
		let i, o = e[r - 1][1], a = t.sliceStream(o), l = a.length, s = -1, u = 0;
		for (; l--;) {
			let e = a[l];
			if ("string" == typeof e) {
				for (s = e.length; 32 === e.charCodeAt(s - 1);) u++, s--;
				if (s) break;
				s = -1;
			} else if (-2 === e) i = !0, u++;
			else if (-1 === e);
			else {
				l++;
				break;
			}
		}
		if (t._contentTypeTextTrailing && r === e.length && (u = 0), u) {
			let a = {
				type: r === e.length || i || u < 2 ? "lineSuffix" : "hardBreakTrailing",
				start: {
					_bufferIndex: l ? s : o.start._bufferIndex + s,
					_index: o.start._index + l,
					line: o.end.line,
					column: o.end.column - u,
					offset: o.end.offset - u
				},
				end: { ...o.end }
			};
			o.end = { ...a.start }, o.start.offset === o.end.offset ? Object.assign(o, a) : (e.splice(r, 0, [
				"enter",
				a,
				t
			], [
				"exit",
				a,
				t
			]), r += 2);
		}
		r++;
	}
	return e;
}
var xx = t({
	attentionMarkers: () => xP,
	contentInitial: () => xk,
	disable: () => xM,
	document: () => xw,
	flow: () => xC,
	flowInitial: () => x_,
	insideSpan: () => xA,
	string: () => xS,
	text: () => xO
});
let xw = {
	42: xu,
	43: xu,
	45: xu,
	48: xu,
	49: xu,
	50: xu,
	51: xu,
	52: xu,
	53: xu,
	54: xu,
	55: xu,
	56: xu,
	57: xu,
	62: bW
}, xk = { 91: {
	name: "definition",
	tokenize: function(e, t, r) {
		let i, o = this;
		return function(t) {
			var i;
			return e.enter("definition"), i = t, b4.call(o, e, a, r, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(i);
		};
		function a(t) {
			return (i = bx(o.sliceSerialize(o.events[o.events.length - 1][1]).slice(1, -1)), 58 === t) ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), l) : r(t);
		}
		function l(t) {
			return bM(t) ? b5(e, s)(t) : s(t);
		}
		function s(t) {
			return b2(e, u, r, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(t);
		}
		function u(t) {
			return e.attempt(b6, c, c)(t);
		}
		function c(t) {
			return bT(t) ? b$(e, f, "whitespace")(t) : f(t);
		}
		function f(a) {
			return null === a || bP(a) ? (e.exit("definition"), o.parser.defined.push(i), t(a)) : r(a);
		}
	}
} }, x_ = {
	[-2]: bJ,
	[-1]: bJ,
	32: bJ
}, xC = {
	35: {
		name: "headingAtx",
		resolve: function(e, t) {
			let r, i, o = e.length - 2, a = 3;
			return "whitespace" === e[3][1].type && (a += 2), o - 2 > a && "whitespace" === e[o][1].type && (o -= 2), "atxHeadingSequence" === e[o][1].type && (a === o - 1 || o - 4 > a && "whitespace" === e[o - 2][1].type) && (o -= a + 1 === o ? 2 : 4), o > a && (r = {
				type: "atxHeadingText",
				start: e[a][1].start,
				end: e[o][1].end
			}, i = {
				type: "chunkText",
				start: e[a][1].start,
				end: e[o][1].end,
				contentType: "text"
			}, bm(e, a, o - a + 1, [
				[
					"enter",
					r,
					t
				],
				[
					"enter",
					i,
					t
				],
				[
					"exit",
					i,
					t
				],
				[
					"exit",
					r,
					t
				]
			])), e;
		},
		tokenize: function(e, t, r) {
			let i = 0;
			return function(o) {
				var a;
				return e.enter("atxHeading"), a = o, e.enter("atxHeadingSequence"), function o(a) {
					return 35 === a && i++ < 6 ? (e.consume(a), o) : null === a || bM(a) ? (e.exit("atxHeadingSequence"), function r(i) {
						return 35 === i ? (e.enter("atxHeadingSequence"), function t(i) {
							return 35 === i ? (e.consume(i), t) : (e.exit("atxHeadingSequence"), r(i));
						}(i)) : null === i || bP(i) ? (e.exit("atxHeading"), t(i)) : bT(i) ? b$(e, r, "whitespace")(i) : (e.enter("atxHeadingText"), function t(i) {
							return null === i || 35 === i || bM(i) ? (e.exit("atxHeadingText"), r(i)) : (e.consume(i), t);
						}(i));
					}(a)) : r(a);
				}(a);
			};
		}
	},
	42: xs,
	45: [xd, xs],
	60: {
		concrete: !0,
		name: "htmlFlow",
		resolveTo: function(e) {
			let t = e.length;
			for (; t-- && ("enter" !== e[t][0] || "htmlFlow" !== e[t][1].type););
			return t > 1 && "linePrefix" === e[t - 2][1].type && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
		},
		tokenize: function(e, t, r) {
			let i, o, a, l, s, u = this;
			return function(t) {
				var r;
				return r = t, e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(r), c;
			};
			function c(l) {
				return 33 === l ? (e.consume(l), f) : 47 === l ? (e.consume(l), o = !0, h) : 63 === l ? (e.consume(l), i = 3, u.interrupt ? t : j) : bw(l) ? (e.consume(l), a = String.fromCharCode(l), m) : r(l);
			}
			function f(o) {
				return 45 === o ? (e.consume(o), i = 2, d) : 91 === o ? (e.consume(o), i = 5, l = 0, p) : bw(o) ? (e.consume(o), i = 4, u.interrupt ? t : j) : r(o);
			}
			function d(i) {
				return 45 === i ? (e.consume(i), u.interrupt ? t : j) : r(i);
			}
			function p(i) {
				return i === "CDATA[".charCodeAt(l++) ? (e.consume(i), 6 === l) ? u.interrupt ? t : O : p : r(i);
			}
			function h(t) {
				return bw(t) ? (e.consume(t), a = String.fromCharCode(t), m) : r(t);
			}
			function m(l) {
				if (null === l || 47 === l || 62 === l || bM(l)) {
					let s = 47 === l, c = a.toLowerCase();
					return !s && !o && b8.includes(c) ? (i = 1, u.interrupt ? t(l) : O(l)) : b9.includes(a.toLowerCase()) ? (i = 6, s) ? (e.consume(l), g) : u.interrupt ? t(l) : O(l) : (i = 7, u.interrupt && !u.parser.lazy[u.now().line] ? r(l) : o ? function t(r) {
						return bT(r) ? (e.consume(r), t) : C(r);
					}(l) : y(l));
				}
				return 45 === l || bk(l) ? (e.consume(l), a += String.fromCharCode(l), m) : r(l);
			}
			function g(i) {
				return 62 === i ? (e.consume(i), u.interrupt ? t : O) : r(i);
			}
			function y(t) {
				return 47 === t ? (e.consume(t), C) : 58 === t || 95 === t || bw(t) ? (e.consume(t), b) : bT(t) ? (e.consume(t), y) : C(t);
			}
			function b(t) {
				return 45 === t || 46 === t || 58 === t || 95 === t || bk(t) ? (e.consume(t), b) : x(t);
			}
			function x(t) {
				return 61 === t ? (e.consume(t), w) : bT(t) ? (e.consume(t), x) : y(t);
			}
			function w(t) {
				return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? r(t) : 34 === t || 39 === t ? (e.consume(t), s = t, k) : bT(t) ? (e.consume(t), w) : function t(r) {
					return null === r || 34 === r || 39 === r || 47 === r || 60 === r || 61 === r || 62 === r || 96 === r || bM(r) ? x(r) : (e.consume(r), t);
				}(t);
			}
			function k(t) {
				return t === s ? (e.consume(t), s = null, _) : null === t || bP(t) ? r(t) : (e.consume(t), k);
			}
			function _(e) {
				return 47 === e || 62 === e || bT(e) ? y(e) : r(e);
			}
			function C(t) {
				return 62 === t ? (e.consume(t), S) : r(t);
			}
			function S(t) {
				return null === t || bP(t) ? O(t) : bT(t) ? (e.consume(t), S) : r(t);
			}
			function O(t) {
				return 45 === t && 2 === i ? (e.consume(t), T) : 60 === t && 1 === i ? (e.consume(t), E) : 62 === t && 4 === i ? (e.consume(t), $) : 63 === t && 3 === i ? (e.consume(t), j) : 93 === t && 5 === i ? (e.consume(t), D) : bP(t) && (6 === i || 7 === i) ? (e.exit("htmlFlowData"), e.check(b7, L, A)(t)) : null === t || bP(t) ? (e.exit("htmlFlowData"), A(t)) : (e.consume(t), O);
			}
			function A(t) {
				return e.check(xe, P, L)(t);
			}
			function P(t) {
				return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), M;
			}
			function M(t) {
				return null === t || bP(t) ? A(t) : (e.enter("htmlFlowData"), O(t));
			}
			function T(t) {
				return 45 === t ? (e.consume(t), j) : O(t);
			}
			function E(t) {
				return 47 === t ? (e.consume(t), a = "", I) : O(t);
			}
			function I(t) {
				if (62 === t) {
					let r = a.toLowerCase();
					return b8.includes(r) ? (e.consume(t), $) : O(t);
				}
				return bw(t) && a.length < 8 ? (e.consume(t), a += String.fromCharCode(t), I) : O(t);
			}
			function D(t) {
				return 93 === t ? (e.consume(t), j) : O(t);
			}
			function j(t) {
				return 62 === t ? (e.consume(t), $) : 45 === t && 2 === i ? (e.consume(t), j) : O(t);
			}
			function $(t) {
				return null === t || bP(t) ? (e.exit("htmlFlowData"), L(t)) : (e.consume(t), $);
			}
			function L(r) {
				return e.exit("htmlFlow"), t(r);
			}
		}
	},
	61: xd,
	95: xs,
	96: bG,
	126: bG
}, xS = {
	38: bq,
	92: bU
}, xO = {
	[-5]: xl,
	[-4]: xl,
	[-3]: xl,
	33: xo,
	38: bq,
	42: bV,
	60: [{
		name: "autolink",
		tokenize: function(e, t, r) {
			let i = 0;
			return function(t) {
				return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), o;
			};
			function o(t) {
				return bw(t) ? (e.consume(t), a) : 64 === t ? r(t) : s(t);
			}
			function a(t) {
				return 43 === t || 45 === t || 46 === t || bk(t) ? (i = 1, function t(r) {
					return 58 === r ? (e.consume(r), i = 0, l) : (43 === r || 45 === r || 46 === r || bk(r)) && i++ < 32 ? (e.consume(r), t) : (i = 0, s(r));
				}(t)) : s(t);
			}
			function l(i) {
				return 62 === i ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(i), e.exit("autolinkMarker"), e.exit("autolink"), t) : null === i || 32 === i || 60 === i || bC(i) ? r(i) : (e.consume(i), l);
			}
			function s(t) {
				return 64 === t ? (e.consume(t), u) : b_(t) ? (e.consume(t), s) : r(t);
			}
			function u(o) {
				return bk(o) ? function o(a) {
					return 46 === a ? (e.consume(a), i = 0, u) : 62 === a ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(a), e.exit("autolinkMarker"), e.exit("autolink"), t) : function t(a) {
						if ((45 === a || bk(a)) && i++ < 63) {
							let r = 45 === a ? t : o;
							return e.consume(a), r;
						}
						return r(a);
					}(a);
				}(o) : r(o);
			}
		}
	}, {
		name: "htmlText",
		tokenize: function(e, t, r) {
			let i, o, a, l = this;
			return function(t) {
				return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), s;
			};
			function s(t) {
				return 33 === t ? (e.consume(t), u) : 47 === t ? (e.consume(t), k) : 63 === t ? (e.consume(t), x) : bw(t) ? (e.consume(t), C) : r(t);
			}
			function u(t) {
				return 45 === t ? (e.consume(t), c) : 91 === t ? (e.consume(t), o = 0, h) : bw(t) ? (e.consume(t), b) : r(t);
			}
			function c(t) {
				return 45 === t ? (e.consume(t), p) : r(t);
			}
			function f(t) {
				return null === t ? r(t) : 45 === t ? (e.consume(t), d) : bP(t) ? (a = f, I(t)) : (e.consume(t), f);
			}
			function d(t) {
				return 45 === t ? (e.consume(t), p) : f(t);
			}
			function p(e) {
				return 62 === e ? E(e) : 45 === e ? d(e) : f(e);
			}
			function h(t) {
				return t === "CDATA[".charCodeAt(o++) ? (e.consume(t), 6 === o ? m : h) : r(t);
			}
			function m(t) {
				return null === t ? r(t) : 93 === t ? (e.consume(t), g) : bP(t) ? (a = m, I(t)) : (e.consume(t), m);
			}
			function g(t) {
				return 93 === t ? (e.consume(t), y) : m(t);
			}
			function y(t) {
				return 62 === t ? E(t) : 93 === t ? (e.consume(t), y) : m(t);
			}
			function b(t) {
				return null === t || 62 === t ? E(t) : bP(t) ? (a = b, I(t)) : (e.consume(t), b);
			}
			function x(t) {
				return null === t ? r(t) : 63 === t ? (e.consume(t), w) : bP(t) ? (a = x, I(t)) : (e.consume(t), x);
			}
			function w(e) {
				return 62 === e ? E(e) : x(e);
			}
			function k(t) {
				return bw(t) ? (e.consume(t), _) : r(t);
			}
			function _(t) {
				return 45 === t || bk(t) ? (e.consume(t), _) : function t(r) {
					return bP(r) ? (a = t, I(r)) : bT(r) ? (e.consume(r), t) : E(r);
				}(t);
			}
			function C(t) {
				return 45 === t || bk(t) ? (e.consume(t), C) : 47 === t || 62 === t || bM(t) ? S(t) : r(t);
			}
			function S(t) {
				return 47 === t ? (e.consume(t), E) : 58 === t || 95 === t || bw(t) ? (e.consume(t), O) : bP(t) ? (a = S, I(t)) : bT(t) ? (e.consume(t), S) : E(t);
			}
			function O(t) {
				return 45 === t || 46 === t || 58 === t || 95 === t || bk(t) ? (e.consume(t), O) : function t(r) {
					return 61 === r ? (e.consume(r), A) : bP(r) ? (a = t, I(r)) : bT(r) ? (e.consume(r), t) : S(r);
				}(t);
			}
			function A(t) {
				return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? r(t) : 34 === t || 39 === t ? (e.consume(t), i = t, P) : bP(t) ? (a = A, I(t)) : bT(t) ? (e.consume(t), A) : (e.consume(t), M);
			}
			function P(t) {
				return t === i ? (e.consume(t), i = void 0, T) : null === t ? r(t) : bP(t) ? (a = P, I(t)) : (e.consume(t), P);
			}
			function M(t) {
				return null === t || 34 === t || 39 === t || 60 === t || 61 === t || 96 === t ? r(t) : 47 === t || 62 === t || bM(t) ? S(t) : (e.consume(t), M);
			}
			function T(e) {
				return 47 === e || 62 === e || bM(e) ? S(e) : r(e);
			}
			function E(i) {
				return 62 === i ? (e.consume(i), e.exit("htmlTextData"), e.exit("htmlText"), t) : r(i);
			}
			function I(t) {
				return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), D;
			}
			function D(t) {
				return bT(t) ? b$(e, j, "linePrefix", l.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : j(t);
			}
			function j(t) {
				return e.enter("htmlTextData"), a(t);
			}
		}
	}],
	91: xa,
	92: [{
		name: "hardBreakEscape",
		tokenize: function(e, t, r) {
			return function(t) {
				return e.enter("hardBreakEscape"), e.consume(t), i;
			};
			function i(i) {
				return bP(i) ? (e.exit("hardBreakEscape"), t(i)) : r(i);
			}
		}
	}, bU],
	93: xt,
	95: bV,
	96: {
		name: "codeText",
		previous: function(e) {
			return 96 !== e || "characterEscape" === this.events[this.events.length - 1][1].type;
		},
		resolve: function(e) {
			let t, r, i = e.length - 4, o = 3;
			if (("lineEnding" === e[3][1].type || "space" === e[o][1].type) && ("lineEnding" === e[i][1].type || "space" === e[i][1].type)) {
				for (t = o; ++t < i;) if ("codeTextData" === e[t][1].type) {
					e[o][1].type = "codeTextPadding", e[i][1].type = "codeTextPadding", o += 2, i -= 2;
					break;
				}
			}
			for (t = o - 1, i++; ++t <= i;) void 0 === r ? t !== i && "lineEnding" !== e[t][1].type && (r = t) : (t === i || "lineEnding" === e[t][1].type) && (e[r][1].type = "codeTextData", t !== r + 2 && (e[r][1].end = e[t - 1][1].end, e.splice(r + 2, t - r - 2), i -= t - r - 2, t = r + 2), r = void 0);
			return e;
		},
		tokenize: function(e, t, r) {
			let i, o, a = 0;
			return function(t) {
				return e.enter("codeText"), e.enter("codeTextSequence"), function t(r) {
					return 96 === r ? (e.consume(r), a++, t) : (e.exit("codeTextSequence"), l(r));
				}(t);
			};
			function l(u) {
				return null === u ? r(u) : 32 === u ? (e.enter("space"), e.consume(u), e.exit("space"), l) : 96 === u ? (o = e.enter("codeTextSequence"), i = 0, function r(l) {
					return 96 === l ? (e.consume(l), i++, r) : i === a ? (e.exit("codeTextSequence"), e.exit("codeText"), t(l)) : (o.type = "codeTextData", s(l));
				}(u)) : bP(u) ? (e.enter("lineEnding"), e.consume(u), e.exit("lineEnding"), l) : (e.enter("codeTextData"), s(u));
			}
			function s(t) {
				return null === t || 32 === t || 96 === t || bP(t) ? (e.exit("codeTextData"), l(t)) : (e.consume(t), s);
			}
		}
	}
}, xA = { null: [bV, xh] }, xP = { null: [42, 95] }, xM = { null: [] };
var xT = /[\0\t\n\r]/g, xE = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function xI(e, t, r) {
	if (t) return t;
	if (35 === r.charCodeAt(0)) {
		let e = r.charCodeAt(1), t = 120 === e || 88 === e;
		return bb(r.slice(t ? 2 : 1), t ? 16 : 10);
	}
	return bh(r) || e;
}
function xD(e) {
	return e && "object" == typeof e ? "position" in e || "type" in e ? x$(e.position) : "start" in e || "end" in e ? x$(e) : "line" in e || "column" in e ? xj(e) : "" : "";
}
function xj(e) {
	return xL(e && e.line) + ":" + xL(e && e.column);
}
function x$(e) {
	return xj(e && e.start) + "-" + xj(e && e.end);
}
function xL(e) {
	return e && "number" == typeof e ? e : 1;
}
var xR = {}.hasOwnProperty;
function xN(e) {
	return {
		line: e.line,
		column: e.column,
		offset: e.offset
	};
}
function xF(e, t) {
	if (e) throw Error("Cannot close `" + e.type + "` (" + xD({
		start: e.start,
		end: e.end
	}) + "): a different token (`" + t.type + "`, " + xD({
		start: t.start,
		end: t.end
	}) + ") is open");
	throw Error("Cannot close document, a token (`" + t.type + "`, " + xD({
		start: t.start,
		end: t.end
	}) + ") is still open");
}
function xz(e, t) {
	let r = String(e);
	if ("string" != typeof t) throw TypeError("Expected character");
	let i = 0, o = r.indexOf(t);
	for (; -1 !== o;) i++, o = r.indexOf(t, o + t.length);
	return i;
}
let xV = function(e) {
	var t, r;
	if (null == e) return xH;
	if ("function" == typeof e) return xB(e);
	if ("object" == typeof e) return Array.isArray(e) ? function(e) {
		let t = [], r = -1;
		for (; ++r < e.length;) t[r] = xV(e[r]);
		return xB(function(...e) {
			let r = -1;
			for (; ++r < t.length;) if (t[r].apply(this, e)) return !0;
			return !1;
		});
	}(e) : (t = e, xB(function(e) {
		let r;
		for (r in t) if (e[r] !== t[r]) return !1;
		return !0;
	}));
	if ("string" == typeof e) return r = e, xB(function(e) {
		return e && e.type === r;
	});
	throw Error("Expected function, string, or object as test");
};
function xB(e) {
	return function(t, r, i) {
		var o;
		return !!(null !== (o = t) && "object" == typeof o && "type" in o && e.call(this, t, "number" == typeof r ? r : void 0, i || void 0));
	};
}
function xH() {
	return !0;
}
var xW = [];
function xU(e, t, r, i) {
	let o;
	"function" == typeof t && "function" != typeof r ? (i = r, r = t) : o = t;
	let a = xV(o), l = i ? -1 : 1;
	(function e(o, s, u) {
		let c = o && "object" == typeof o ? o : {};
		if ("string" == typeof c.type) {
			let e = "string" == typeof c.tagName ? c.tagName : "string" == typeof c.name ? c.name : void 0;
			Object.defineProperty(f, "name", { value: "node (" + o.type + (e ? "<" + e + ">" : "") + ")" });
		}
		return f;
		function f() {
			var c;
			let f, d, p, h = xW;
			if ((!t || a(o, s, u[u.length - 1] || void 0)) && !1 === (h = Array.isArray(c = r(o, u)) ? c : "number" == typeof c ? [!0, c] : null == c ? xW : [c])[0]) return h;
			if ("children" in o && o.children && o.children && "skip" !== h[0]) for (d = (i ? o.children.length : -1) + l, p = u.concat(o); d > -1 && d < o.children.length;) {
				if (!1 === (f = e(o.children[d], d, p)())[0]) return f;
				d = "number" == typeof f[1] ? f[1] : d + l;
			}
			return h;
		}
	})(e, void 0, [])();
}
function xq(e) {
	this.enter({
		type: "link",
		title: null,
		url: "",
		children: []
	}, e);
}
function xK(e) {
	this.config.enter.autolinkProtocol.call(this, e);
}
function xG(e) {
	this.config.exit.autolinkProtocol.call(this, e);
}
function xJ(e) {
	this.config.exit.data.call(this, e);
	let t = this.stack[this.stack.length - 1];
	t.type, t.url = "http://" + this.sliceSerialize(e);
}
function xZ(e) {
	this.config.exit.autolinkEmail.call(this, e);
}
function xX(e) {
	this.exit(e);
}
function xY(e) {
	(function(e, t, r) {
		let i = xV((r || {}).ignore || []), o = function(e) {
			let t = [];
			if (!Array.isArray(e)) throw TypeError("Expected find and replace tuple or list of tuples");
			let r = !e[0] || Array.isArray(e[0]) ? e : [e], i = -1;
			for (; ++i < r.length;) {
				var o;
				let e = r[i];
				t.push(["string" == typeof (o = e[0]) ? RegExp(function(e) {
					if ("string" != typeof e) throw TypeError("Expected a string");
					return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
				}(o), "g") : o, function(e) {
					return "function" == typeof e ? e : function() {
						return e;
					};
				}(e[1])]);
			}
			return t;
		}(t), a = -1;
		for (; ++a < o.length;) xU(e, "text", l);
		function l(e, t) {
			let r, l = -1;
			for (; ++l < t.length;) {
				let e = t[l], o = r ? r.children : void 0;
				if (i(e, o ? o.indexOf(e) : void 0, r)) return;
				r = e;
			}
			if (r) return function(e, t) {
				let r = t[t.length - 1], i = o[a][0], l = o[a][1], s = 0, u = r.children.indexOf(e), c = !1, f = [];
				i.lastIndex = 0;
				let d = i.exec(e.value);
				for (; d;) {
					let r = d.index, o = {
						index: d.index,
						input: d.input,
						stack: [...t, e]
					}, a = l(...d, o);
					if ("string" == typeof a && (a = a.length > 0 ? {
						type: "text",
						value: a
					} : void 0), !1 === a ? i.lastIndex = r + 1 : (s !== r && f.push({
						type: "text",
						value: e.value.slice(s, r)
					}), Array.isArray(a) ? f.push(...a) : a && f.push(a), s = r + d[0].length, c = !0), !i.global) break;
					d = i.exec(e.value);
				}
				return c ? (s < e.value.length && f.push({
					type: "text",
					value: e.value.slice(s)
				}), r.children.splice(u, 1, ...f)) : f = [e], u + f.length;
			}(e, t);
		}
	})(e, [[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, xQ], [/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu, x0]], { ignore: ["link", "linkReference"] });
}
function xQ(e, t, r, i, o) {
	let a = "";
	if (!x1(o) || (/^w/i.test(t) && (r = t + r, t = "", a = "http://"), !function(e) {
		let t = e.split(".");
		return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
	}(r))) return !1;
	let l = function(e) {
		let t = /[!"&'),.:;<>?\]}]+$/.exec(e);
		if (!t) return [e, void 0];
		e = e.slice(0, t.index);
		let r = t[0], i = r.indexOf(")"), o = xz(e, "("), a = xz(e, ")");
		for (; -1 !== i && o > a;) e += r.slice(0, i + 1), i = (r = r.slice(i + 1)).indexOf(")"), a++;
		return [e, r];
	}(r + i);
	if (!l[0]) return !1;
	let s = {
		type: "link",
		title: null,
		url: a + t + l[0],
		children: [{
			type: "text",
			value: t + l[0]
		}]
	};
	return l[1] ? [s, {
		type: "text",
		value: l[1]
	}] : s;
}
function x0(e, t, r, i) {
	return !(!x1(i, !0) || /[-\d_]$/.test(r)) && {
		type: "link",
		title: null,
		url: "mailto:" + t + "@" + r,
		children: [{
			type: "text",
			value: t + "@" + r
		}]
	};
}
function x1(e, t) {
	let r = e.input.charCodeAt(e.index - 1);
	return (0 === e.index || bI(r) || bE(r)) && (!t || 47 !== r);
}
function x2() {
	this.buffer();
}
function x4(e) {
	this.enter({
		type: "footnoteReference",
		identifier: "",
		label: ""
	}, e);
}
function x3() {
	this.buffer();
}
function x5(e) {
	this.enter({
		type: "footnoteDefinition",
		identifier: "",
		label: "",
		children: []
	}, e);
}
function x6(e) {
	let t = this.resume(), r = this.stack[this.stack.length - 1];
	r.type, r.identifier = bx(this.sliceSerialize(e)).toLowerCase(), r.label = t;
}
function x9(e) {
	this.exit(e);
}
function x8(e) {
	let t = this.resume(), r = this.stack[this.stack.length - 1];
	r.type, r.identifier = bx(this.sliceSerialize(e)).toLowerCase(), r.label = t;
}
function x7(e) {
	this.exit(e);
}
function we(e) {
	this.enter({
		type: "delete",
		children: []
	}, e);
}
function wt(e) {
	this.exit(e);
}
function wn(e) {
	let t = e._align;
	this.enter({
		type: "table",
		align: t.map(function(e) {
			return "none" === e ? null : e;
		}),
		children: []
	}, e), this.data.inTable = !0;
}
function wr(e) {
	this.exit(e), this.data.inTable = void 0;
}
function wi(e) {
	this.enter({
		type: "tableRow",
		children: []
	}, e);
}
function wo(e) {
	this.exit(e);
}
function wa(e) {
	this.enter({
		type: "tableCell",
		children: []
	}, e);
}
function wl(e) {
	let t = this.resume();
	this.data.inTable && (t = t.replace(/\\([\\|])/g, ws));
	let r = this.stack[this.stack.length - 1];
	r.type, r.value = t, this.exit(e);
}
function ws(e, t) {
	return "|" === t ? t : e;
}
function wu(e) {
	let t = this.stack[this.stack.length - 2];
	t.type, t.checked = "taskListCheckValueChecked" === e.type;
}
function wc(e) {
	let t = this.stack[this.stack.length - 2];
	if (t && "listItem" === t.type && "boolean" == typeof t.checked) {
		let e = this.stack[this.stack.length - 1];
		e.type;
		let r = e.children[0];
		if (r && "text" === r.type) {
			let i, o = t.children, a = -1;
			for (; ++a < o.length;) {
				let e = o[a];
				if ("paragraph" === e.type) {
					i = e;
					break;
				}
			}
			i === e && (r.value = r.value.slice(1), 0 === r.value.length ? e.children.shift() : e.position && r.position && "number" == typeof r.position.start.offset && (r.position.start.column++, r.position.start.offset++, e.position.start = Object.assign({}, r.position.start)));
		}
	}
	this.exit(e);
}
for (var wf = {
	tokenize: function(e, t, r) {
		let i = 0;
		return function t(a) {
			return (87 === a || 119 === a) && i < 3 ? (i++, e.consume(a), t) : 46 === a && 3 === i ? (e.consume(a), o) : r(a);
		};
		function o(e) {
			return null === e ? r(e) : t(e);
		}
	},
	partial: !0
}, wd = {
	tokenize: function(e, t, r) {
		let i, o, a;
		return l;
		function l(t) {
			return 46 === t || 95 === t ? e.check(wh, u, s)(t) : null === t || bM(t) || bI(t) || 45 !== t && bE(t) ? u(t) : (a = !0, e.consume(t), l);
		}
		function s(t) {
			return 95 === t ? i = !0 : (o = i, i = void 0), e.consume(t), l;
		}
		function u(e) {
			return o || i || !a ? r(e) : t(e);
		}
	},
	partial: !0
}, wp = {
	tokenize: function(e, t) {
		let r = 0, i = 0;
		return o;
		function o(l) {
			return 40 === l ? (r++, e.consume(l), o) : 41 === l && i < r ? a(l) : 33 === l || 34 === l || 38 === l || 39 === l || 41 === l || 42 === l || 44 === l || 46 === l || 58 === l || 59 === l || 60 === l || 63 === l || 93 === l || 95 === l || 126 === l ? e.check(wh, t, a)(l) : null === l || bM(l) || bI(l) ? t(l) : (e.consume(l), o);
		}
		function a(t) {
			return 41 === t && i++, e.consume(t), o;
		}
	},
	partial: !0
}, wh = {
	tokenize: function(e, t, r) {
		return i;
		function i(l) {
			return 33 === l || 34 === l || 39 === l || 41 === l || 42 === l || 44 === l || 46 === l || 58 === l || 59 === l || 63 === l || 95 === l || 126 === l ? (e.consume(l), i) : 38 === l ? (e.consume(l), a) : 93 === l ? (e.consume(l), o) : 60 === l || null === l || bM(l) || bI(l) ? t(l) : r(l);
		}
		function o(e) {
			return null === e || 40 === e || 91 === e || bM(e) || bI(e) ? t(e) : i(e);
		}
		function a(t) {
			return bw(t) ? function t(o) {
				return 59 === o ? (e.consume(o), i) : bw(o) ? (e.consume(o), t) : r(o);
			}(t) : r(t);
		}
	},
	partial: !0
}, wm = {
	tokenize: function(e, t, r) {
		return function(t) {
			return e.consume(t), i;
		};
		function i(e) {
			return bk(e) ? r(e) : t(e);
		}
	},
	partial: !0
}, wg = {
	name: "wwwAutolink",
	tokenize: function(e, t, r) {
		let i = this;
		return function(t) {
			return 87 !== t && 119 !== t || !ww.call(i, i.previous) || wS(i.events) ? r(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(wf, e.attempt(wd, e.attempt(wp, o), r), r)(t));
		};
		function o(r) {
			return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(r);
		}
	},
	previous: ww
}, wy = {
	name: "protocolAutolink",
	tokenize: function(e, t, r) {
		let i = this, o = "", a = !1;
		return function(t) {
			return (72 === t || 104 === t) && wk.call(i, i.previous) && !wS(i.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), o += String.fromCodePoint(t), e.consume(t), l) : r(t);
		};
		function l(t) {
			if (bw(t) && o.length < 5) return o += String.fromCodePoint(t), e.consume(t), l;
			if (58 === t) {
				let r = o.toLowerCase();
				if ("http" === r || "https" === r) return e.consume(t), s;
			}
			return r(t);
		}
		function s(t) {
			return 47 === t ? (e.consume(t), a) ? u : (a = !0, s) : r(t);
		}
		function u(t) {
			return null === t || bC(t) || bM(t) || bI(t) || bE(t) ? r(t) : e.attempt(wd, e.attempt(wp, c), r)(t);
		}
		function c(r) {
			return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(r);
		}
	},
	previous: wk
}, wv = {
	name: "emailAutolink",
	tokenize: function(e, t, r) {
		let i, o, a = this;
		return function(t) {
			return !wC(t) || !w_.call(a, a.previous) || wS(a.events) ? r(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), function t(i) {
				return wC(i) ? (e.consume(i), t) : 64 === i ? (e.consume(i), l) : r(i);
			}(t));
		};
		function l(t) {
			return 46 === t ? e.check(wm, u, s)(t) : 45 === t || 95 === t || bk(t) ? (o = !0, e.consume(t), l) : u(t);
		}
		function s(t) {
			return e.consume(t), i = !0, l;
		}
		function u(l) {
			return o && i && bw(a.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(l)) : r(l);
		}
	},
	previous: w_
}, wb = {}, wx = 48; wx < 123;) wb[wx] = wv, 58 == ++wx ? wx = 65 : 91 === wx && (wx = 97);
function ww(e) {
	return null === e || 40 === e || 42 === e || 95 === e || 91 === e || 93 === e || 126 === e || bM(e);
}
function wk(e) {
	return !bw(e);
}
function w_(e) {
	return !(47 === e || wC(e));
}
function wC(e) {
	return 43 === e || 45 === e || 46 === e || 95 === e || bk(e);
}
function wS(e) {
	let t = e.length, r = !1;
	for (; t--;) {
		let i = e[t][1];
		if (("labelLink" === i.type || "labelImage" === i.type) && !i._balanced) {
			r = !0;
			break;
		}
		if (i._gfmAutolinkLiteralWalkedInto) {
			r = !1;
			break;
		}
	}
	return e.length > 0 && !r && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), r;
}
wb[43] = wv, wb[45] = wv, wb[46] = wv, wb[95] = wv, wb[72] = [wv, wy], wb[104] = [wv, wy], wb[87] = [wv, wg], wb[119] = [wv, wg];
var wO = {
	tokenize: function(e, t, r) {
		let i = this;
		return b$(e, function(e) {
			let o = i.events[i.events.length - 1];
			return o && "gfmFootnoteDefinitionIndent" === o[1].type && 4 === o[2].sliceSerialize(o[1], !0).length ? t(e) : r(e);
		}, "gfmFootnoteDefinitionIndent", 5);
	},
	partial: !0
};
function wA(e, t, r) {
	let i, o = this, a = o.events.length, l = o.parser.gfmFootnotes || (o.parser.gfmFootnotes = []);
	for (; a--;) {
		let e = o.events[a][1];
		if ("labelImage" === e.type) {
			i = e;
			break;
		}
		if ("gfmFootnoteCall" === e.type || "labelLink" === e.type || "label" === e.type || "image" === e.type || "link" === e.type) break;
	}
	return function(a) {
		if (!i || !i._balanced) return r(a);
		let s = bx(o.sliceSerialize({
			start: i.end,
			end: o.now()
		}));
		return 94 === s.codePointAt(0) && l.includes(s.slice(1)) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(a), e.exit("gfmFootnoteCallLabelMarker"), t(a)) : r(a);
	};
}
function wP(e, t) {
	let r = e.length;
	for (; r--;) if ("labelImage" === e[r][1].type && "enter" === e[r][0]) {
		e[r][1];
		break;
	}
	e[r + 1][1].type = "data", e[r + 3][1].type = "gfmFootnoteCallLabelMarker";
	let i = {
		type: "gfmFootnoteCall",
		start: Object.assign({}, e[r + 3][1].start),
		end: Object.assign({}, e[e.length - 1][1].end)
	}, o = {
		type: "gfmFootnoteCallMarker",
		start: Object.assign({}, e[r + 3][1].end),
		end: Object.assign({}, e[r + 3][1].end)
	};
	o.end.column++, o.end.offset++, o.end._bufferIndex++;
	let a = {
		type: "gfmFootnoteCallString",
		start: Object.assign({}, o.end),
		end: Object.assign({}, e[e.length - 1][1].start)
	}, l = {
		type: "chunkString",
		contentType: "string",
		start: Object.assign({}, a.start),
		end: Object.assign({}, a.end)
	}, s = [
		e[r + 1],
		e[r + 2],
		[
			"enter",
			i,
			t
		],
		e[r + 3],
		e[r + 4],
		[
			"enter",
			o,
			t
		],
		[
			"exit",
			o,
			t
		],
		[
			"enter",
			a,
			t
		],
		[
			"enter",
			l,
			t
		],
		[
			"exit",
			l,
			t
		],
		[
			"exit",
			a,
			t
		],
		e[e.length - 2],
		e[e.length - 1],
		[
			"exit",
			i,
			t
		]
	];
	return e.splice(r, e.length - r + 1, ...s), e;
}
function wM(e, t, r) {
	let i, o = this, a = o.parser.gfmFootnotes || (o.parser.gfmFootnotes = []), l = 0;
	return function(t) {
		return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(t), e.exit("gfmFootnoteCallLabelMarker"), s;
	};
	function s(t) {
		return 94 !== t ? r(t) : (e.enter("gfmFootnoteCallMarker"), e.consume(t), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", u);
	}
	function u(s) {
		if (l > 999 || 93 === s && !i || null === s || 91 === s || bM(s)) return r(s);
		if (93 === s) {
			e.exit("chunkString");
			let i = e.exit("gfmFootnoteCallString");
			return a.includes(bx(o.sliceSerialize(i))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(s), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : r(s);
		}
		return bM(s) || (i = !0), l++, e.consume(s), 92 === s ? c : u;
	}
	function c(t) {
		return 91 === t || 92 === t || 93 === t ? (e.consume(t), l++, u) : u(t);
	}
}
function wT(e, t, r) {
	let i, o, a = this, l = a.parser.gfmFootnotes || (a.parser.gfmFootnotes = []), s = 0;
	return function(t) {
		return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), u;
	};
	function u(t) {
		return 94 === t ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", c) : r(t);
	}
	function c(t) {
		if (s > 999 || 93 === t && !o || null === t || 91 === t || bM(t)) return r(t);
		if (93 === t) {
			e.exit("chunkString");
			let r = e.exit("gfmFootnoteDefinitionLabelString");
			return i = bx(a.sliceSerialize(r)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), d;
		}
		return bM(t) || (o = !0), s++, e.consume(t), 92 === t ? f : c;
	}
	function f(t) {
		return 91 === t || 92 === t || 93 === t ? (e.consume(t), s++, c) : c(t);
	}
	function d(t) {
		return 58 === t ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), l.includes(i) || l.push(i), b$(e, p, "gfmFootnoteDefinitionWhitespace")) : r(t);
	}
	function p(e) {
		return t(e);
	}
}
function wE(e, t, r) {
	return e.check(bH, t, e.attempt(wO, t, r));
}
function wI(e) {
	e.exit("gfmFootnoteDefinition");
}
var wD = class {
	constructor() {
		this.map = [];
	}
	add(e, t, r) {
		(function(e, t, r, i) {
			let o = 0;
			if (0 !== r || 0 !== i.length) {
				for (; o < e.map.length;) {
					if (e.map[o][0] === t) {
						e.map[o][1] += r, e.map[o][2].push(...i);
						return;
					}
					o += 1;
				}
				e.map.push([
					t,
					r,
					i
				]);
			}
		})(this, e, t, r);
	}
	consume(e) {
		if (this.map.sort(function(e, t) {
			return e[0] - t[0];
		}), 0 === this.map.length) return;
		let t = this.map.length, r = [];
		for (; t > 0;) t -= 1, r.push(e.slice(this.map[t][0] + this.map[t][1]), this.map[t][2]), e.length = this.map[t][0];
		r.push(e.slice()), e.length = 0;
		let i = r.pop();
		for (; i;) {
			for (let t of i) e.push(t);
			i = r.pop();
		}
		this.map.length = 0;
	}
};
function wj(e, t, r) {
	let i, o = this, a = 0, l = 0;
	return function(e) {
		let t = o.events.length - 1;
		for (; t > -1;) {
			let e = o.events[t][1].type;
			if ("lineEnding" === e || "linePrefix" === e) t--;
			else break;
		}
		let i = t > -1 ? o.events[t][1].type : null, a = "tableHead" === i || "tableRow" === i ? x : s;
		return a === x && o.parser.lazy[o.now().line] ? r(e) : a(e);
	};
	function s(t) {
		var r;
		return e.enter("tableHead"), e.enter("tableRow"), 124 === (r = t) || (i = !0, l += 1), u(r);
	}
	function u(t) {
		return null === t ? r(t) : bP(t) ? l > 1 ? (l = 0, o.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), d) : r(t) : bT(t) ? b$(e, u, "whitespace")(t) : (l += 1, i && (i = !1, a += 1), 124 === t) ? (e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), i = !0, u) : (e.enter("data"), c(t));
	}
	function c(t) {
		return null === t || 124 === t || bM(t) ? (e.exit("data"), u(t)) : (e.consume(t), 92 === t ? f : c);
	}
	function f(t) {
		return 92 === t || 124 === t ? (e.consume(t), c) : c(t);
	}
	function d(t) {
		return (o.interrupt = !1, o.parser.lazy[o.now().line]) ? r(t) : (e.enter("tableDelimiterRow"), i = !1, bT(t)) ? b$(e, p, "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : p(t);
	}
	function p(t) {
		return 45 === t || 58 === t ? m(t) : 124 === t ? (i = !0, e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), h) : r(t);
	}
	function h(t) {
		return bT(t) ? b$(e, m, "whitespace")(t) : m(t);
	}
	function m(t) {
		return 58 === t ? (l += 1, i = !0, e.enter("tableDelimiterMarker"), e.consume(t), e.exit("tableDelimiterMarker"), g) : 45 === t ? (l += 1, g(t)) : null === t || bP(t) ? b(t) : r(t);
	}
	function g(t) {
		return 45 === t ? (e.enter("tableDelimiterFiller"), function t(r) {
			return 45 === r ? (e.consume(r), t) : 58 === r ? (i = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(r), e.exit("tableDelimiterMarker"), y) : (e.exit("tableDelimiterFiller"), y(r));
		}(t)) : r(t);
	}
	function y(t) {
		return bT(t) ? b$(e, b, "whitespace")(t) : b(t);
	}
	function b(o) {
		if (124 === o) return p(o);
		if (null === o || bP(o)) return i && a === l ? (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(o)) : r(o);
		return r(o);
	}
	function x(t) {
		return e.enter("tableRow"), w(t);
	}
	function w(r) {
		return 124 === r ? (e.enter("tableCellDivider"), e.consume(r), e.exit("tableCellDivider"), w) : null === r || bP(r) ? (e.exit("tableRow"), t(r)) : bT(r) ? b$(e, w, "whitespace")(r) : (e.enter("data"), k(r));
	}
	function k(t) {
		return null === t || 124 === t || bM(t) ? (e.exit("data"), w(t)) : (e.consume(t), 92 === t ? _ : k);
	}
	function _(t) {
		return 92 === t || 124 === t ? (e.consume(t), k) : k(t);
	}
}
function w$(e, t) {
	let r, i, o, a = -1, l = !0, s = 0, u = [
		0,
		0,
		0,
		0
	], c = [
		0,
		0,
		0,
		0
	], f = !1, d = 0, p = new wD();
	for (; ++a < e.length;) {
		let h = e[a], m = h[1];
		"enter" === h[0] ? "tableHead" === m.type ? (f = !1, 0 !== d && (wR(p, t, d, r, i), i = void 0, d = 0), r = {
			type: "table",
			start: Object.assign({}, m.start),
			end: Object.assign({}, m.end)
		}, p.add(a, 0, [[
			"enter",
			r,
			t
		]])) : "tableRow" === m.type || "tableDelimiterRow" === m.type ? (l = !0, o = void 0, u = [
			0,
			0,
			0,
			0
		], c = [
			0,
			a + 1,
			0,
			0
		], f && (f = !1, i = {
			type: "tableBody",
			start: Object.assign({}, m.start),
			end: Object.assign({}, m.end)
		}, p.add(a, 0, [[
			"enter",
			i,
			t
		]])), s = "tableDelimiterRow" === m.type ? 2 : i ? 3 : 1) : s && ("data" === m.type || "tableDelimiterMarker" === m.type || "tableDelimiterFiller" === m.type) ? (l = !1, 0 === c[2] && (0 !== u[1] && (c[0] = c[1], o = wL(p, t, u, s, void 0, o), u = [
			0,
			0,
			0,
			0
		]), c[2] = a)) : "tableCellDivider" === m.type && (l ? l = !1 : (0 !== u[1] && (c[0] = c[1], o = wL(p, t, u, s, void 0, o)), c = [
			(u = c)[1],
			a,
			0,
			0
		])) : "tableHead" === m.type ? (f = !0, d = a) : "tableRow" === m.type || "tableDelimiterRow" === m.type ? (d = a, 0 !== u[1] ? (c[0] = c[1], o = wL(p, t, u, s, a, o)) : 0 !== c[1] && (o = wL(p, t, c, s, a, o)), s = 0) : s && ("data" === m.type || "tableDelimiterMarker" === m.type || "tableDelimiterFiller" === m.type) && (c[3] = a);
	}
	for (0 !== d && wR(p, t, d, r, i), p.consume(t.events), a = -1; ++a < t.events.length;) {
		let e = t.events[a];
		"enter" === e[0] && "table" === e[1].type && (e[1]._align = function(e, t) {
			let r = !1, i = [];
			for (; t < e.length;) {
				let o = e[t];
				if (r) {
					if ("enter" === o[0]) "tableContent" === o[1].type && i.push("tableDelimiterMarker" === e[t + 1][1].type ? "left" : "none");
					else if ("tableContent" === o[1].type) {
						if ("tableDelimiterMarker" === e[t - 1][1].type) {
							let e = i.length - 1;
							i[e] = "left" === i[e] ? "center" : "right";
						}
					} else if ("tableDelimiterRow" === o[1].type) break;
				} else "enter" === o[0] && "tableDelimiterRow" === o[1].type && (r = !0);
				t += 1;
			}
			return i;
		}(t.events, a));
	}
	return e;
}
function wL(e, t, r, i, o, a) {
	0 !== r[0] && (a.end = Object.assign({}, wN(t.events, r[0])), e.add(r[0], 0, [[
		"exit",
		a,
		t
	]]));
	let l = wN(t.events, r[1]);
	if (a = {
		type: 1 === i ? "tableHeader" : 2 === i ? "tableDelimiter" : "tableData",
		start: Object.assign({}, l),
		end: Object.assign({}, l)
	}, e.add(r[1], 0, [[
		"enter",
		a,
		t
	]]), 0 !== r[2]) {
		let o = wN(t.events, r[2]), a = wN(t.events, r[3]), l = {
			type: "tableContent",
			start: Object.assign({}, o),
			end: Object.assign({}, a)
		};
		if (e.add(r[2], 0, [[
			"enter",
			l,
			t
		]]), 2 !== i) {
			let i = t.events[r[2]], o = t.events[r[3]];
			if (i[1].end = Object.assign({}, o[1].end), i[1].type = "chunkText", i[1].contentType = "text", r[3] > r[2] + 1) {
				let t = r[2] + 1, i = r[3] - r[2] - 1;
				e.add(t, i, []);
			}
		}
		e.add(r[3] + 1, 0, [[
			"exit",
			l,
			t
		]]);
	}
	return void 0 !== o && (a.end = Object.assign({}, wN(t.events, o)), e.add(o, 0, [[
		"exit",
		a,
		t
	]]), a = void 0), a;
}
function wR(e, t, r, i, o) {
	let a = [], l = wN(t.events, r);
	o && (o.end = Object.assign({}, l), a.push([
		"exit",
		o,
		t
	])), i.end = Object.assign({}, l), a.push([
		"exit",
		i,
		t
	]), e.add(r + 1, 0, a);
}
function wN(e, t) {
	let r = e[t], i = "enter" === r[0] ? "start" : "end";
	return r[1][i];
}
var wF = {
	name: "tasklistCheck",
	tokenize: function(e, t, r) {
		let i = this;
		return function(t) {
			return null === i.previous && i._gfmTasklistFirstContentOfListItem ? (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), o) : r(t);
		};
		function o(t) {
			return bM(t) ? (e.enter("taskListCheckValueUnchecked"), e.consume(t), e.exit("taskListCheckValueUnchecked"), a) : 88 === t || 120 === t ? (e.enter("taskListCheckValueChecked"), e.consume(t), e.exit("taskListCheckValueChecked"), a) : r(t);
		}
		function a(t) {
			return 93 === t ? (e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), l) : r(t);
		}
		function l(i) {
			return bP(i) ? t(i) : bT(i) ? e.check({ tokenize: wz }, t, r)(i) : r(i);
		}
	}
};
function wz(e, t, r) {
	return b$(e, function(e) {
		return null === e ? r(e) : t(e);
	}, "whitespace");
}
function wV(e, t, r, i, o, a, l, s, u, c, f, d, p, h, m) {
	let g, y;
	return function(t) {
		return e.enter(i), e.enter(o), e.consume(t), e.exit(o), b;
	};
	function b(t) {
		return 35 === t ? (g = l, x(t)) : 46 === t ? (g = s, x(t)) : m && bT(t) ? b$(e, b, "whitespace")(t) : !m && bM(t) ? b5(e, b)(t) : null === t || bP(t) || bI(t) || bE(t) && 45 !== t && 95 !== t ? E(t) : (e.enter(a), e.enter(u), e.consume(t), _);
	}
	function x(t) {
		let r = g + "Marker";
		return e.enter(a), e.enter(g), e.enter(r), e.consume(t), e.exit(r), w;
	}
	function w(t) {
		if (null === t || 34 === t || 35 === t || 39 === t || 46 === t || 60 === t || 61 === t || 62 === t || 96 === t || 125 === t || bM(t)) return r(t);
		let i = g + "Value";
		return e.enter(i), e.consume(t), k;
	}
	function k(t) {
		if (null === t || 34 === t || 39 === t || 60 === t || 61 === t || 62 === t || 96 === t) return r(t);
		if (35 === t || 46 === t || 125 === t || bM(t)) {
			let r = g + "Value";
			return e.exit(r), e.exit(g), e.exit(a), b(t);
		}
		return e.consume(t), k;
	}
	function _(t) {
		return null === t || bP(t) || bI(t) || bE(t) && 45 !== t && 46 !== t && 58 !== t && 95 !== t ? (e.exit(u), m && bT(t)) ? b$(e, C, "whitespace")(t) : !m && bM(t) ? b5(e, C)(t) : C(t) : (e.consume(t), _);
	}
	function C(t) {
		return 61 === t ? (e.enter(c), e.consume(t), e.exit(c), S) : (e.exit(a), b(t));
	}
	function S(t) {
		return null === t || 60 === t || 61 === t || 62 === t || 96 === t || 125 === t || m && bP(t) ? r(t) : 34 === t || 39 === t ? (e.enter(f), e.enter(p), e.consume(t), e.exit(p), y = t, A) : m && bT(t) ? b$(e, S, "whitespace")(t) : !m && bM(t) ? b5(e, S)(t) : (e.enter(d), e.enter(h), e.consume(t), y = void 0, O);
	}
	function O(t) {
		return null === t || 34 === t || 39 === t || 60 === t || 61 === t || 62 === t || 96 === t ? r(t) : 125 === t || bM(t) ? (e.exit(h), e.exit(d), e.exit(a), b(t)) : (e.consume(t), O);
	}
	function A(t) {
		return t === y ? (e.enter(p), e.consume(t), e.exit(p), e.exit(f), e.exit(a), T) : (e.enter(d), P(t));
	}
	function P(t) {
		return t === y ? (e.exit(d), A(t)) : null === t ? r(t) : bP(t) ? m ? r(t) : b5(e, P)(t) : (e.enter(h), e.consume(t), M);
	}
	function M(t) {
		return t === y || null === t || bP(t) ? (e.exit(h), P(t)) : (e.consume(t), M);
	}
	function T(e) {
		return 125 === e || bM(e) ? b(e) : E(e);
	}
	function E(a) {
		return 125 === a ? (e.enter(o), e.consume(a), e.exit(o), e.exit(i), t) : r(a);
	}
}
function wB(e, t, r, i, o, a, l) {
	let s, u = 0, c = 0;
	return function(t) {
		return e.enter(i), e.enter(o), e.consume(t), e.exit(o), f;
	};
	function f(r) {
		return 93 === r ? (e.enter(o), e.consume(r), e.exit(o), e.exit(i), t) : (e.enter(a), d(r));
	}
	function d(t) {
		if (93 === t && !c) return m(t);
		let r = e.enter("chunkText", {
			_contentTypeTextTrailing: !0,
			contentType: "text",
			previous: s
		});
		return s && (s.next = r), s = r, p(t);
	}
	function p(t) {
		return null === t || u > 999 || 91 === t && ++c > 32 ? r(t) : 93 !== t || c-- ? bP(t) ? l ? r(t) : (e.consume(t), e.exit("chunkText"), d) : (e.consume(t), 92 === t ? h : p) : (e.exit("chunkText"), m(t));
	}
	function h(t) {
		return 91 === t || 92 === t || 93 === t ? (e.consume(t), u++, p) : p(t);
	}
	function m(r) {
		return e.exit(a), e.enter(o), e.consume(r), e.exit(o), e.exit(i), t;
	}
}
function wH(e, t, r, i) {
	let o = this;
	return function(t) {
		return null === t || bP(t) || bE(t) || bI(t) ? r(t) : (e.enter(i), e.consume(t), a);
	};
	function a(l) {
		return null === l || bP(l) || bI(l) || bE(l) && 45 !== l && 95 !== l ? (e.exit(i), 45 === o.previous || 95 === o.previous ? r(l) : t(l)) : (e.consume(l), a);
	}
}
let wW = {
	tokenize: function(e, t, r) {
		let i, o = this, a = o.events[o.events.length - 1], l = a && "linePrefix" === a[1].type ? a[2].sliceSerialize(a[1], !0).length : 0, s = 0;
		return function(t) {
			return e.enter("directiveContainer"), e.enter("directiveContainerFence"), e.enter("directiveContainerSequence"), function t(i) {
				return 58 === i ? (e.consume(i), s++, t) : s < 3 ? r(i) : (e.exit("directiveContainerSequence"), wH.call(o, e, u, r, "directiveContainerName")(i));
			}(t);
		};
		function u(t) {
			return 91 === t ? e.attempt(wU, c, c)(t) : c(t);
		}
		function c(t) {
			return 123 === t ? e.attempt(wq, f, f)(t) : f(t);
		}
		function f(t) {
			return b$(e, d, "whitespace")(t);
		}
		function d(i) {
			return (e.exit("directiveContainerFence"), null === i) ? k(i) : bP(i) ? o.interrupt ? t(i) : e.attempt(wK, p, k)(i) : r(i);
		}
		function p(t) {
			return null === t ? k(t) : bP(t) ? e.check(wK, y, k)(t) : (e.enter("directiveContainerContent"), h(t));
		}
		function h(t) {
			return e.attempt({
				tokenize: _,
				partial: !0
			}, w, l ? b$(e, m, "linePrefix", l + 1) : m)(t);
		}
		function m(t) {
			return null === t ? w(t) : bP(t) ? e.check(wK, g, w)(t) : g(t);
		}
		function g(t) {
			let r = e.enter("chunkDocument", {
				contentType: "document",
				previous: i
			});
			return i && (i.next = r), i = r, function t(r) {
				if (null === r) {
					let t = e.exit("chunkDocument");
					return o.parser.lazy[t.start.line] = !1, w(r);
				}
				return bP(r) ? e.check(wK, b, x)(r) : (e.consume(r), t);
			}(t);
		}
		function y(t) {
			return e.enter("directiveContainerContent"), h(t);
		}
		function b(t) {
			e.consume(t);
			let r = e.exit("chunkDocument");
			return o.parser.lazy[r.start.line] = !1, h;
		}
		function x(t) {
			let r = e.exit("chunkDocument");
			return o.parser.lazy[r.start.line] = !1, w(t);
		}
		function w(t) {
			return e.exit("directiveContainerContent"), k(t);
		}
		function k(r) {
			return e.exit("directiveContainer"), t(r);
		}
		function _(e, t, r) {
			let i = 0;
			return b$(e, function(t) {
				return e.enter("directiveContainerFence"), e.enter("directiveContainerSequence"), function t(o) {
					return 58 === o ? (e.consume(o), i++, t) : i < s ? r(o) : (e.exit("directiveContainerSequence"), b$(e, a, "whitespace")(o));
				}(t);
			}, "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
			function a(i) {
				return null === i || bP(i) ? (e.exit("directiveContainerFence"), t(i)) : r(i);
			}
		}
	},
	concrete: !0
};
var wU = {
	tokenize: function(e, t, r) {
		return wB(e, t, r, "directiveContainerLabel", "directiveContainerLabelMarker", "directiveContainerLabelString", !0);
	},
	partial: !0
}, wq = {
	tokenize: function(e, t, r) {
		return wV(e, t, r, "directiveContainerAttributes", "directiveContainerAttributesMarker", "directiveContainerAttribute", "directiveContainerAttributeId", "directiveContainerAttributeClass", "directiveContainerAttributeName", "directiveContainerAttributeInitializerMarker", "directiveContainerAttributeValueLiteral", "directiveContainerAttributeValue", "directiveContainerAttributeValueMarker", "directiveContainerAttributeValueData", !0);
	},
	partial: !0
}, wK = {
	tokenize: function(e, t, r) {
		let i = this;
		return function(t) {
			return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), o;
		};
		function o(e) {
			return i.parser.lazy[i.now().line] ? r(e) : t(e);
		}
	},
	partial: !0
};
let wG = { tokenize: function(e, t, r) {
	let i = this;
	return function(t) {
		return e.enter("directiveLeaf"), e.enter("directiveLeafSequence"), e.consume(t), o;
	};
	function o(t) {
		return 58 === t ? (e.consume(t), e.exit("directiveLeafSequence"), wH.call(i, e, a, r, "directiveLeafName")) : r(t);
	}
	function a(t) {
		return 91 === t ? e.attempt(wJ, l, l)(t) : l(t);
	}
	function l(t) {
		return 123 === t ? e.attempt(wZ, s, s)(t) : s(t);
	}
	function s(t) {
		return b$(e, u, "whitespace")(t);
	}
	function u(i) {
		return null === i || bP(i) ? (e.exit("directiveLeaf"), t(i)) : r(i);
	}
} };
var wJ = {
	tokenize: function(e, t, r) {
		return wB(e, t, r, "directiveLeafLabel", "directiveLeafLabelMarker", "directiveLeafLabelString", !0);
	},
	partial: !0
}, wZ = {
	tokenize: function(e, t, r) {
		return wV(e, t, r, "directiveLeafAttributes", "directiveLeafAttributesMarker", "directiveLeafAttribute", "directiveLeafAttributeId", "directiveLeafAttributeClass", "directiveLeafAttributeName", "directiveLeafAttributeInitializerMarker", "directiveLeafAttributeValueLiteral", "directiveLeafAttributeValue", "directiveLeafAttributeValueMarker", "directiveLeafAttributeValueData", !0);
	},
	partial: !0
};
let wX = {
	tokenize: function(e, t, r) {
		let i = this;
		return function(t) {
			return e.enter("directiveText"), e.enter("directiveTextMarker"), e.consume(t), e.exit("directiveTextMarker"), wH.call(i, e, o, r, "directiveTextName");
		};
		function o(t) {
			return 58 === t ? r(t) : 91 === t ? e.attempt(wY, a, a)(t) : a(t);
		}
		function a(t) {
			return 123 === t ? e.attempt(wQ, l, l)(t) : l(t);
		}
		function l(r) {
			return e.exit("directiveText"), t(r);
		}
	},
	previous: function(e) {
		return 58 !== e || "characterEscape" === this.events[this.events.length - 1][1].type;
	}
};
var wY = {
	tokenize: function(e, t, r) {
		return wB(e, t, r, "directiveTextLabel", "directiveTextLabelMarker", "directiveTextLabelString");
	},
	partial: !0
}, wQ = {
	tokenize: function(e, t, r) {
		return wV(e, t, r, "directiveTextAttributes", "directiveTextAttributesMarker", "directiveTextAttribute", "directiveTextAttributeId", "directiveTextAttributeClass", "directiveTextAttributeName", "directiveTextAttributeInitializerMarker", "directiveTextAttributeValueLiteral", "directiveTextAttributeValue", "directiveTextAttributeValueMarker", "directiveTextAttributeValueData");
	},
	partial: !0
};
let w0 = [
	"AElig",
	"AMP",
	"Aacute",
	"Acirc",
	"Agrave",
	"Aring",
	"Atilde",
	"Auml",
	"COPY",
	"Ccedil",
	"ETH",
	"Eacute",
	"Ecirc",
	"Egrave",
	"Euml",
	"GT",
	"Iacute",
	"Icirc",
	"Igrave",
	"Iuml",
	"LT",
	"Ntilde",
	"Oacute",
	"Ocirc",
	"Ograve",
	"Oslash",
	"Otilde",
	"Ouml",
	"QUOT",
	"REG",
	"THORN",
	"Uacute",
	"Ucirc",
	"Ugrave",
	"Uuml",
	"Yacute",
	"aacute",
	"acirc",
	"acute",
	"aelig",
	"agrave",
	"amp",
	"aring",
	"atilde",
	"auml",
	"brvbar",
	"ccedil",
	"cedil",
	"cent",
	"copy",
	"curren",
	"deg",
	"divide",
	"eacute",
	"ecirc",
	"egrave",
	"eth",
	"euml",
	"frac12",
	"frac14",
	"frac34",
	"gt",
	"iacute",
	"icirc",
	"iexcl",
	"igrave",
	"iquest",
	"iuml",
	"laquo",
	"lt",
	"macr",
	"micro",
	"middot",
	"nbsp",
	"not",
	"ntilde",
	"oacute",
	"ocirc",
	"ograve",
	"ordf",
	"ordm",
	"oslash",
	"otilde",
	"ouml",
	"para",
	"plusmn",
	"pound",
	"quot",
	"raquo",
	"reg",
	"sect",
	"shy",
	"sup1",
	"sup2",
	"sup3",
	"szlig",
	"thorn",
	"times",
	"uacute",
	"ucirc",
	"ugrave",
	"uml",
	"uuml",
	"yacute",
	"yen",
	"yuml"
], w1 = {
	0: "�",
	128: "€",
	130: "‚",
	131: "ƒ",
	132: "„",
	133: "…",
	134: "†",
	135: "‡",
	136: "ˆ",
	137: "‰",
	138: "Š",
	139: "‹",
	140: "Œ",
	142: "Ž",
	145: "‘",
	146: "’",
	147: "“",
	148: "”",
	149: "•",
	150: "–",
	151: "—",
	152: "˜",
	153: "™",
	154: "š",
	155: "›",
	156: "œ",
	158: "ž",
	159: "Ÿ"
};
function w2(e) {
	let t = "string" == typeof e ? e.charCodeAt(0) : e;
	return t >= 48 && t <= 57;
}
function w4(e) {
	let t = "string" == typeof e ? e.charCodeAt(0) : e;
	return t >= 97 && t <= 102 || t >= 65 && t <= 70 || t >= 48 && t <= 57;
}
function w3(e) {
	return function(e) {
		let t = "string" == typeof e ? e.charCodeAt(0) : e;
		return t >= 97 && t <= 122 || t >= 65 && t <= 90;
	}(e) || w2(e);
}
var w5 = [
	"",
	"Named character references must be terminated by a semicolon",
	"Numeric character references must be terminated by a semicolon",
	"Named character references cannot be empty",
	"Numeric character references cannot be empty",
	"Named character references must be known",
	"Numeric character references cannot be disallowed",
	"Numeric character references cannot be outside the permissible Unicode range"
];
function w6(e, t) {
	let r, i, o, a = t || {}, l = "string" == typeof a.additional ? a.additional.charCodeAt(0) : a.additional, s = [], u = 0, c = -1, f = "";
	a.position && ("start" in a.position || "indent" in a.position ? (i = a.position.indent, r = a.position.start) : r = a.position);
	let d = (r ? r.line : 0) || 1, p = (r ? r.column : 0) || 1, h = y();
	for (u--; ++u <= e.length;) if (10 === o && (p = (i ? i[c] : 0) || 1), 38 === (o = e.charCodeAt(u))) {
		let t, r = e.charCodeAt(u + 1);
		if (9 === r || 10 === r || 12 === r || 32 === r || 38 === r || 60 === r || Number.isNaN(r) || l && r === l) {
			f += String.fromCharCode(o), p++;
			continue;
		}
		let i = u + 1, c = i, d = i;
		if (35 === r) {
			d = ++c;
			let r = e.charCodeAt(d);
			88 === r || 120 === r ? (t = "hexadecimal", d = ++c) : t = "decimal";
		} else t = "named";
		let w = "", k = "", _ = "", C = "named" === t ? w3 : "decimal" === t ? w2 : w4;
		for (d--; ++d <= e.length;) {
			let r = e.charCodeAt(d);
			if (!C(r)) break;
			_ += String.fromCharCode(r), "named" === t && w0.includes(_) && (w = _, k = bh(_));
		}
		let S = 59 === e.charCodeAt(d);
		if (S) {
			d++;
			let e = "named" === t && bh(_);
			e && (w = _, k = e);
		}
		let O = 1 + d - i, A = "";
		if (S || !1 !== a.nonTerminated) if (_) if ("named" === t) {
			if (S && !k) b(5, 1);
			else if (w !== _ && (O = 1 + (d = c + w.length) - c, S = !1), !S) {
				let t = w ? 1 : 3;
				if (a.attribute) {
					let r = e.charCodeAt(d);
					61 === r ? (b(t, O), k = "") : w3(r) ? k = "" : b(t, O);
				} else b(t, O);
			}
			A = k;
		} else {
			var m, g;
			S || b(2, O);
			let e = Number.parseInt(_, "hexadecimal" === t ? 16 : 10);
			if ((m = e) >= 55296 && m <= 57343 || m > 1114111) b(7, O), A = String.fromCharCode(65533);
			else if (e in w1) b(6, O), A = w1[e];
			else {
				let t = "";
				((g = e) >= 1 && g <= 8 || 11 === g || g >= 13 && g <= 31 || g >= 127 && g <= 159 || g >= 64976 && g <= 65007 || (65535 & g) == 65535 || (65535 & g) == 65534) && b(6, O), e > 65535 && (e -= 65536, t += String.fromCharCode(e >>> 10 | 55296), e = 56320 | 1023 & e), A = t + String.fromCharCode(e);
			}
		}
		else "named" !== t && b(4, O);
		if (A) {
			x(), h = y(), u = d - 1, p += d - i + 1, s.push(A);
			let t = y();
			t.offset++, a.reference && a.reference.call(a.referenceContext || void 0, A, {
				start: h,
				end: t
			}, e.slice(i - 1, d)), h = t;
		} else _ = e.slice(i - 1, d), f += _, p += _.length, u = d - 1;
	} else 10 === o && (d++, c++, p = 0), Number.isNaN(o) ? x() : (f += String.fromCharCode(o), p++);
	return s.join("");
	function y() {
		return {
			line: d,
			column: p,
			offset: u + ((r ? r.offset : 0) || 0)
		};
	}
	function b(e, t) {
		let r;
		a.warning && (r = y(), r.column += t, r.offset += t, a.warning.call(a.warningContext || void 0, w5[e], r, e));
	}
	function x() {
		f && (s.push(f), a.text && a.text.call(a.textContext || void 0, f, {
			start: h,
			end: y()
		}), f = "");
	}
}
function w9(e) {
	ke.call(this, "containerDirective", e);
}
function w8(e) {
	ke.call(this, "leafDirective", e);
}
function w7(e) {
	ke.call(this, "textDirective", e);
}
function ke(e, t) {
	this.enter({
		type: e,
		name: "",
		attributes: {},
		children: []
	}, t);
}
function kt(e) {
	let t = this.stack[this.stack.length - 1];
	"containerDirective" === t.type || "leafDirective" === t.type || t.type, t.name = this.sliceSerialize(e);
}
function kn(e) {
	this.enter({
		type: "paragraph",
		data: { directiveLabel: !0 },
		children: []
	}, e);
}
function kr(e) {
	this.exit(e);
}
function ki() {
	this.data.directiveAttributes = [], this.buffer();
}
function ko(e) {
	this.data.directiveAttributes.push(["id", w6(this.sliceSerialize(e), { attribute: !0 })]);
}
function ka(e) {
	this.data.directiveAttributes.push(["class", w6(this.sliceSerialize(e), { attribute: !0 })]);
}
function kl(e) {
	let t = this.data.directiveAttributes;
	t[t.length - 1][1] = w6(this.sliceSerialize(e), { attribute: !0 });
}
function ks(e) {
	this.data.directiveAttributes.push([this.sliceSerialize(e), ""]);
}
function ku() {
	let e = this.data.directiveAttributes, t = {}, r = -1;
	for (; ++r < e.length;) {
		let i = e[r];
		"class" === i[0] && t.class ? t.class += " " + i[1] : t[i[0]] = i[1];
	}
	this.data.directiveAttributes = void 0, this.resume();
	let i = this.stack[this.stack.length - 1];
	"containerDirective" === i.type || "leafDirective" === i.type || i.type, i.attributes = t;
}
function kc(e) {
	this.exit(e);
}
var kf = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, kd = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, kp = {};
function kh(e, t) {
	return ((t || kp).jsx ? kd : kf).test(e);
}
var km = /[ \t\n\f\r]/g;
function kg(e) {
	return "" === e.replace(km, "");
}
var ky = class {
	constructor(e, t, r) {
		this.normal = t, this.property = e, r && (this.space = r);
	}
};
function kv(e, t) {
	let r = {}, i = {};
	for (let t of e) Object.assign(r, t.property), Object.assign(i, t.normal);
	return new ky(r, i, t);
}
function kb(e) {
	return e.toLowerCase();
}
ky.prototype.normal = {}, ky.prototype.property = {}, ky.prototype.space = void 0;
var kx = class {
	constructor(e, t) {
		this.attribute = t, this.property = e;
	}
};
kx.prototype.attribute = "", kx.prototype.booleanish = !1, kx.prototype.boolean = !1, kx.prototype.commaOrSpaceSeparated = !1, kx.prototype.commaSeparated = !1, kx.prototype.defined = !1, kx.prototype.mustUseProperty = !1, kx.prototype.number = !1, kx.prototype.overloadedBoolean = !1, kx.prototype.property = "", kx.prototype.spaceSeparated = !1, kx.prototype.space = void 0;
var kw = t({
	boolean: () => k_,
	booleanish: () => kC,
	commaOrSpaceSeparated: () => kM,
	commaSeparated: () => kP,
	number: () => kO,
	overloadedBoolean: () => kS,
	spaceSeparated: () => kA
}), kk = 0;
let k_ = kT(), kC = kT(), kS = kT(), kO = kT(), kA = kT(), kP = kT(), kM = kT();
function kT() {
	return 2 ** ++kk;
}
var kE = Object.keys(kw), kI = class extends kx {
	constructor(e, t, r, i) {
		var o, a, l, s, u;
		let c = -1;
		if (super(e, t), o = this, (a = i) && (o.space = a), "number" == typeof r) for (; ++c < kE.length;) {
			let e = kE[c];
			l = this, s = kE[c], (u = (r & kw[e]) === kw[e]) && (l[s] = u);
		}
	}
};
function kD(e) {
	let t = {}, r = {};
	for (let [i, o] of Object.entries(e.properties)) {
		let a = new kI(i, e.transform(e.attributes || {}, i), o, e.space);
		e.mustUseProperty && e.mustUseProperty.includes(i) && (a.mustUseProperty = !0), t[i] = a, r[kb(i)] = i, r[kb(a.attribute)] = i;
	}
	return new ky(t, r, e.space);
}
kI.prototype.defined = !0;
let kj = kD({
	properties: {
		ariaActiveDescendant: null,
		ariaAtomic: kC,
		ariaAutoComplete: null,
		ariaBusy: kC,
		ariaChecked: kC,
		ariaColCount: kO,
		ariaColIndex: kO,
		ariaColSpan: kO,
		ariaControls: kA,
		ariaCurrent: null,
		ariaDescribedBy: kA,
		ariaDetails: null,
		ariaDisabled: kC,
		ariaDropEffect: kA,
		ariaErrorMessage: null,
		ariaExpanded: kC,
		ariaFlowTo: kA,
		ariaGrabbed: kC,
		ariaHasPopup: null,
		ariaHidden: kC,
		ariaInvalid: null,
		ariaKeyShortcuts: null,
		ariaLabel: null,
		ariaLabelledBy: kA,
		ariaLevel: kO,
		ariaLive: null,
		ariaModal: kC,
		ariaMultiLine: kC,
		ariaMultiSelectable: kC,
		ariaOrientation: null,
		ariaOwns: kA,
		ariaPlaceholder: null,
		ariaPosInSet: kO,
		ariaPressed: kC,
		ariaReadOnly: kC,
		ariaRelevant: null,
		ariaRequired: kC,
		ariaRoleDescription: kA,
		ariaRowCount: kO,
		ariaRowIndex: kO,
		ariaRowSpan: kO,
		ariaSelected: kC,
		ariaSetSize: kO,
		ariaSort: null,
		ariaValueMax: kO,
		ariaValueMin: kO,
		ariaValueNow: kO,
		ariaValueText: null,
		role: null
	},
	transform: (e, t) => "role" === t ? t : "aria-" + t.slice(4).toLowerCase()
});
function k$(e, t) {
	return t in e ? e[t] : t;
}
function kL(e, t) {
	return k$(e, t.toLowerCase());
}
let kR = kD({
	attributes: {
		acceptcharset: "accept-charset",
		classname: "class",
		htmlfor: "for",
		httpequiv: "http-equiv"
	},
	mustUseProperty: [
		"checked",
		"multiple",
		"muted",
		"selected"
	],
	properties: {
		abbr: null,
		accept: kP,
		acceptCharset: kA,
		accessKey: kA,
		action: null,
		allow: null,
		allowFullScreen: k_,
		allowPaymentRequest: k_,
		allowUserMedia: k_,
		alt: null,
		as: null,
		async: k_,
		autoCapitalize: null,
		autoComplete: kA,
		autoFocus: k_,
		autoPlay: k_,
		blocking: kA,
		capture: null,
		charSet: null,
		checked: k_,
		cite: null,
		className: kA,
		cols: kO,
		colSpan: null,
		content: null,
		contentEditable: kC,
		controls: k_,
		controlsList: kA,
		coords: kO | kP,
		crossOrigin: null,
		data: null,
		dateTime: null,
		decoding: null,
		default: k_,
		defer: k_,
		dir: null,
		dirName: null,
		disabled: k_,
		download: kS,
		draggable: kC,
		encType: null,
		enterKeyHint: null,
		fetchPriority: null,
		form: null,
		formAction: null,
		formEncType: null,
		formMethod: null,
		formNoValidate: k_,
		formTarget: null,
		headers: kA,
		height: kO,
		hidden: kS,
		high: kO,
		href: null,
		hrefLang: null,
		htmlFor: kA,
		httpEquiv: kA,
		id: null,
		imageSizes: null,
		imageSrcSet: null,
		inert: k_,
		inputMode: null,
		integrity: null,
		is: null,
		isMap: k_,
		itemId: null,
		itemProp: kA,
		itemRef: kA,
		itemScope: k_,
		itemType: kA,
		kind: null,
		label: null,
		lang: null,
		language: null,
		list: null,
		loading: null,
		loop: k_,
		low: kO,
		manifest: null,
		max: null,
		maxLength: kO,
		media: null,
		method: null,
		min: null,
		minLength: kO,
		multiple: k_,
		muted: k_,
		name: null,
		nonce: null,
		noModule: k_,
		noValidate: k_,
		onAbort: null,
		onAfterPrint: null,
		onAuxClick: null,
		onBeforeMatch: null,
		onBeforePrint: null,
		onBeforeToggle: null,
		onBeforeUnload: null,
		onBlur: null,
		onCancel: null,
		onCanPlay: null,
		onCanPlayThrough: null,
		onChange: null,
		onClick: null,
		onClose: null,
		onContextLost: null,
		onContextMenu: null,
		onContextRestored: null,
		onCopy: null,
		onCueChange: null,
		onCut: null,
		onDblClick: null,
		onDrag: null,
		onDragEnd: null,
		onDragEnter: null,
		onDragExit: null,
		onDragLeave: null,
		onDragOver: null,
		onDragStart: null,
		onDrop: null,
		onDurationChange: null,
		onEmptied: null,
		onEnded: null,
		onError: null,
		onFocus: null,
		onFormData: null,
		onHashChange: null,
		onInput: null,
		onInvalid: null,
		onKeyDown: null,
		onKeyPress: null,
		onKeyUp: null,
		onLanguageChange: null,
		onLoad: null,
		onLoadedData: null,
		onLoadedMetadata: null,
		onLoadEnd: null,
		onLoadStart: null,
		onMessage: null,
		onMessageError: null,
		onMouseDown: null,
		onMouseEnter: null,
		onMouseLeave: null,
		onMouseMove: null,
		onMouseOut: null,
		onMouseOver: null,
		onMouseUp: null,
		onOffline: null,
		onOnline: null,
		onPageHide: null,
		onPageShow: null,
		onPaste: null,
		onPause: null,
		onPlay: null,
		onPlaying: null,
		onPopState: null,
		onProgress: null,
		onRateChange: null,
		onRejectionHandled: null,
		onReset: null,
		onResize: null,
		onScroll: null,
		onScrollEnd: null,
		onSecurityPolicyViolation: null,
		onSeeked: null,
		onSeeking: null,
		onSelect: null,
		onSlotChange: null,
		onStalled: null,
		onStorage: null,
		onSubmit: null,
		onSuspend: null,
		onTimeUpdate: null,
		onToggle: null,
		onUnhandledRejection: null,
		onUnload: null,
		onVolumeChange: null,
		onWaiting: null,
		onWheel: null,
		open: k_,
		optimum: kO,
		pattern: null,
		ping: kA,
		placeholder: null,
		playsInline: k_,
		popover: null,
		popoverTarget: null,
		popoverTargetAction: null,
		poster: null,
		preload: null,
		readOnly: k_,
		referrerPolicy: null,
		rel: kA,
		required: k_,
		reversed: k_,
		rows: kO,
		rowSpan: kO,
		sandbox: kA,
		scope: null,
		scoped: k_,
		seamless: k_,
		selected: k_,
		shadowRootClonable: k_,
		shadowRootDelegatesFocus: k_,
		shadowRootMode: null,
		shape: null,
		size: kO,
		sizes: null,
		slot: null,
		span: kO,
		spellCheck: kC,
		src: null,
		srcDoc: null,
		srcLang: null,
		srcSet: null,
		start: kO,
		step: null,
		style: null,
		tabIndex: kO,
		target: null,
		title: null,
		translate: null,
		type: null,
		typeMustMatch: k_,
		useMap: null,
		value: kC,
		width: kO,
		wrap: null,
		writingSuggestions: null,
		align: null,
		aLink: null,
		archive: kA,
		axis: null,
		background: null,
		bgColor: null,
		border: kO,
		borderColor: null,
		bottomMargin: kO,
		cellPadding: null,
		cellSpacing: null,
		char: null,
		charOff: null,
		classId: null,
		clear: null,
		code: null,
		codeBase: null,
		codeType: null,
		color: null,
		compact: k_,
		declare: k_,
		event: null,
		face: null,
		frame: null,
		frameBorder: null,
		hSpace: kO,
		leftMargin: kO,
		link: null,
		longDesc: null,
		lowSrc: null,
		marginHeight: kO,
		marginWidth: kO,
		noResize: k_,
		noHref: k_,
		noShade: k_,
		noWrap: k_,
		object: null,
		profile: null,
		prompt: null,
		rev: null,
		rightMargin: kO,
		rules: null,
		scheme: null,
		scrolling: kC,
		standby: null,
		summary: null,
		text: null,
		topMargin: kO,
		valueType: null,
		version: null,
		vAlign: null,
		vLink: null,
		vSpace: kO,
		allowTransparency: null,
		autoCorrect: null,
		autoSave: null,
		disablePictureInPicture: k_,
		disableRemotePlayback: k_,
		prefix: null,
		property: null,
		results: kO,
		security: null,
		unselectable: null
	},
	space: "html",
	transform: kL
}), kN = kD({
	attributes: {
		accentHeight: "accent-height",
		alignmentBaseline: "alignment-baseline",
		arabicForm: "arabic-form",
		baselineShift: "baseline-shift",
		capHeight: "cap-height",
		className: "class",
		clipPath: "clip-path",
		clipRule: "clip-rule",
		colorInterpolation: "color-interpolation",
		colorInterpolationFilters: "color-interpolation-filters",
		colorProfile: "color-profile",
		colorRendering: "color-rendering",
		crossOrigin: "crossorigin",
		dataType: "datatype",
		dominantBaseline: "dominant-baseline",
		enableBackground: "enable-background",
		fillOpacity: "fill-opacity",
		fillRule: "fill-rule",
		floodColor: "flood-color",
		floodOpacity: "flood-opacity",
		fontFamily: "font-family",
		fontSize: "font-size",
		fontSizeAdjust: "font-size-adjust",
		fontStretch: "font-stretch",
		fontStyle: "font-style",
		fontVariant: "font-variant",
		fontWeight: "font-weight",
		glyphName: "glyph-name",
		glyphOrientationHorizontal: "glyph-orientation-horizontal",
		glyphOrientationVertical: "glyph-orientation-vertical",
		hrefLang: "hreflang",
		horizAdvX: "horiz-adv-x",
		horizOriginX: "horiz-origin-x",
		horizOriginY: "horiz-origin-y",
		imageRendering: "image-rendering",
		letterSpacing: "letter-spacing",
		lightingColor: "lighting-color",
		markerEnd: "marker-end",
		markerMid: "marker-mid",
		markerStart: "marker-start",
		navDown: "nav-down",
		navDownLeft: "nav-down-left",
		navDownRight: "nav-down-right",
		navLeft: "nav-left",
		navNext: "nav-next",
		navPrev: "nav-prev",
		navRight: "nav-right",
		navUp: "nav-up",
		navUpLeft: "nav-up-left",
		navUpRight: "nav-up-right",
		onAbort: "onabort",
		onActivate: "onactivate",
		onAfterPrint: "onafterprint",
		onBeforePrint: "onbeforeprint",
		onBegin: "onbegin",
		onCancel: "oncancel",
		onCanPlay: "oncanplay",
		onCanPlayThrough: "oncanplaythrough",
		onChange: "onchange",
		onClick: "onclick",
		onClose: "onclose",
		onCopy: "oncopy",
		onCueChange: "oncuechange",
		onCut: "oncut",
		onDblClick: "ondblclick",
		onDrag: "ondrag",
		onDragEnd: "ondragend",
		onDragEnter: "ondragenter",
		onDragExit: "ondragexit",
		onDragLeave: "ondragleave",
		onDragOver: "ondragover",
		onDragStart: "ondragstart",
		onDrop: "ondrop",
		onDurationChange: "ondurationchange",
		onEmptied: "onemptied",
		onEnd: "onend",
		onEnded: "onended",
		onError: "onerror",
		onFocus: "onfocus",
		onFocusIn: "onfocusin",
		onFocusOut: "onfocusout",
		onHashChange: "onhashchange",
		onInput: "oninput",
		onInvalid: "oninvalid",
		onKeyDown: "onkeydown",
		onKeyPress: "onkeypress",
		onKeyUp: "onkeyup",
		onLoad: "onload",
		onLoadedData: "onloadeddata",
		onLoadedMetadata: "onloadedmetadata",
		onLoadStart: "onloadstart",
		onMessage: "onmessage",
		onMouseDown: "onmousedown",
		onMouseEnter: "onmouseenter",
		onMouseLeave: "onmouseleave",
		onMouseMove: "onmousemove",
		onMouseOut: "onmouseout",
		onMouseOver: "onmouseover",
		onMouseUp: "onmouseup",
		onMouseWheel: "onmousewheel",
		onOffline: "onoffline",
		onOnline: "ononline",
		onPageHide: "onpagehide",
		onPageShow: "onpageshow",
		onPaste: "onpaste",
		onPause: "onpause",
		onPlay: "onplay",
		onPlaying: "onplaying",
		onPopState: "onpopstate",
		onProgress: "onprogress",
		onRateChange: "onratechange",
		onRepeat: "onrepeat",
		onReset: "onreset",
		onResize: "onresize",
		onScroll: "onscroll",
		onSeeked: "onseeked",
		onSeeking: "onseeking",
		onSelect: "onselect",
		onShow: "onshow",
		onStalled: "onstalled",
		onStorage: "onstorage",
		onSubmit: "onsubmit",
		onSuspend: "onsuspend",
		onTimeUpdate: "ontimeupdate",
		onToggle: "ontoggle",
		onUnload: "onunload",
		onVolumeChange: "onvolumechange",
		onWaiting: "onwaiting",
		onZoom: "onzoom",
		overlinePosition: "overline-position",
		overlineThickness: "overline-thickness",
		paintOrder: "paint-order",
		panose1: "panose-1",
		pointerEvents: "pointer-events",
		referrerPolicy: "referrerpolicy",
		renderingIntent: "rendering-intent",
		shapeRendering: "shape-rendering",
		stopColor: "stop-color",
		stopOpacity: "stop-opacity",
		strikethroughPosition: "strikethrough-position",
		strikethroughThickness: "strikethrough-thickness",
		strokeDashArray: "stroke-dasharray",
		strokeDashOffset: "stroke-dashoffset",
		strokeLineCap: "stroke-linecap",
		strokeLineJoin: "stroke-linejoin",
		strokeMiterLimit: "stroke-miterlimit",
		strokeOpacity: "stroke-opacity",
		strokeWidth: "stroke-width",
		tabIndex: "tabindex",
		textAnchor: "text-anchor",
		textDecoration: "text-decoration",
		textRendering: "text-rendering",
		transformOrigin: "transform-origin",
		typeOf: "typeof",
		underlinePosition: "underline-position",
		underlineThickness: "underline-thickness",
		unicodeBidi: "unicode-bidi",
		unicodeRange: "unicode-range",
		unitsPerEm: "units-per-em",
		vAlphabetic: "v-alphabetic",
		vHanging: "v-hanging",
		vIdeographic: "v-ideographic",
		vMathematical: "v-mathematical",
		vectorEffect: "vector-effect",
		vertAdvY: "vert-adv-y",
		vertOriginX: "vert-origin-x",
		vertOriginY: "vert-origin-y",
		wordSpacing: "word-spacing",
		writingMode: "writing-mode",
		xHeight: "x-height",
		playbackOrder: "playbackorder",
		timelineBegin: "timelinebegin"
	},
	properties: {
		about: kM,
		accentHeight: kO,
		accumulate: null,
		additive: null,
		alignmentBaseline: null,
		alphabetic: kO,
		amplitude: kO,
		arabicForm: null,
		ascent: kO,
		attributeName: null,
		attributeType: null,
		azimuth: kO,
		bandwidth: null,
		baselineShift: null,
		baseFrequency: null,
		baseProfile: null,
		bbox: null,
		begin: null,
		bias: kO,
		by: null,
		calcMode: null,
		capHeight: kO,
		className: kA,
		clip: null,
		clipPath: null,
		clipPathUnits: null,
		clipRule: null,
		color: null,
		colorInterpolation: null,
		colorInterpolationFilters: null,
		colorProfile: null,
		colorRendering: null,
		content: null,
		contentScriptType: null,
		contentStyleType: null,
		crossOrigin: null,
		cursor: null,
		cx: null,
		cy: null,
		d: null,
		dataType: null,
		defaultAction: null,
		descent: kO,
		diffuseConstant: kO,
		direction: null,
		display: null,
		dur: null,
		divisor: kO,
		dominantBaseline: null,
		download: k_,
		dx: null,
		dy: null,
		edgeMode: null,
		editable: null,
		elevation: kO,
		enableBackground: null,
		end: null,
		event: null,
		exponent: kO,
		externalResourcesRequired: null,
		fill: null,
		fillOpacity: kO,
		fillRule: null,
		filter: null,
		filterRes: null,
		filterUnits: null,
		floodColor: null,
		floodOpacity: null,
		focusable: null,
		focusHighlight: null,
		fontFamily: null,
		fontSize: null,
		fontSizeAdjust: null,
		fontStretch: null,
		fontStyle: null,
		fontVariant: null,
		fontWeight: null,
		format: null,
		fr: null,
		from: null,
		fx: null,
		fy: null,
		g1: kP,
		g2: kP,
		glyphName: kP,
		glyphOrientationHorizontal: null,
		glyphOrientationVertical: null,
		glyphRef: null,
		gradientTransform: null,
		gradientUnits: null,
		handler: null,
		hanging: kO,
		hatchContentUnits: null,
		hatchUnits: null,
		height: null,
		href: null,
		hrefLang: null,
		horizAdvX: kO,
		horizOriginX: kO,
		horizOriginY: kO,
		id: null,
		ideographic: kO,
		imageRendering: null,
		initialVisibility: null,
		in: null,
		in2: null,
		intercept: kO,
		k: kO,
		k1: kO,
		k2: kO,
		k3: kO,
		k4: kO,
		kernelMatrix: kM,
		kernelUnitLength: null,
		keyPoints: null,
		keySplines: null,
		keyTimes: null,
		kerning: null,
		lang: null,
		lengthAdjust: null,
		letterSpacing: null,
		lightingColor: null,
		limitingConeAngle: kO,
		local: null,
		markerEnd: null,
		markerMid: null,
		markerStart: null,
		markerHeight: null,
		markerUnits: null,
		markerWidth: null,
		mask: null,
		maskContentUnits: null,
		maskUnits: null,
		mathematical: null,
		max: null,
		media: null,
		mediaCharacterEncoding: null,
		mediaContentEncodings: null,
		mediaSize: kO,
		mediaTime: null,
		method: null,
		min: null,
		mode: null,
		name: null,
		navDown: null,
		navDownLeft: null,
		navDownRight: null,
		navLeft: null,
		navNext: null,
		navPrev: null,
		navRight: null,
		navUp: null,
		navUpLeft: null,
		navUpRight: null,
		numOctaves: null,
		observer: null,
		offset: null,
		onAbort: null,
		onActivate: null,
		onAfterPrint: null,
		onBeforePrint: null,
		onBegin: null,
		onCancel: null,
		onCanPlay: null,
		onCanPlayThrough: null,
		onChange: null,
		onClick: null,
		onClose: null,
		onCopy: null,
		onCueChange: null,
		onCut: null,
		onDblClick: null,
		onDrag: null,
		onDragEnd: null,
		onDragEnter: null,
		onDragExit: null,
		onDragLeave: null,
		onDragOver: null,
		onDragStart: null,
		onDrop: null,
		onDurationChange: null,
		onEmptied: null,
		onEnd: null,
		onEnded: null,
		onError: null,
		onFocus: null,
		onFocusIn: null,
		onFocusOut: null,
		onHashChange: null,
		onInput: null,
		onInvalid: null,
		onKeyDown: null,
		onKeyPress: null,
		onKeyUp: null,
		onLoad: null,
		onLoadedData: null,
		onLoadedMetadata: null,
		onLoadStart: null,
		onMessage: null,
		onMouseDown: null,
		onMouseEnter: null,
		onMouseLeave: null,
		onMouseMove: null,
		onMouseOut: null,
		onMouseOver: null,
		onMouseUp: null,
		onMouseWheel: null,
		onOffline: null,
		onOnline: null,
		onPageHide: null,
		onPageShow: null,
		onPaste: null,
		onPause: null,
		onPlay: null,
		onPlaying: null,
		onPopState: null,
		onProgress: null,
		onRateChange: null,
		onRepeat: null,
		onReset: null,
		onResize: null,
		onScroll: null,
		onSeeked: null,
		onSeeking: null,
		onSelect: null,
		onShow: null,
		onStalled: null,
		onStorage: null,
		onSubmit: null,
		onSuspend: null,
		onTimeUpdate: null,
		onToggle: null,
		onUnload: null,
		onVolumeChange: null,
		onWaiting: null,
		onZoom: null,
		opacity: null,
		operator: null,
		order: null,
		orient: null,
		orientation: null,
		origin: null,
		overflow: null,
		overlay: null,
		overlinePosition: kO,
		overlineThickness: kO,
		paintOrder: null,
		panose1: null,
		path: null,
		pathLength: kO,
		patternContentUnits: null,
		patternTransform: null,
		patternUnits: null,
		phase: null,
		ping: kA,
		pitch: null,
		playbackOrder: null,
		pointerEvents: null,
		points: null,
		pointsAtX: kO,
		pointsAtY: kO,
		pointsAtZ: kO,
		preserveAlpha: null,
		preserveAspectRatio: null,
		primitiveUnits: null,
		propagate: null,
		property: kM,
		r: null,
		radius: null,
		referrerPolicy: null,
		refX: null,
		refY: null,
		rel: kM,
		rev: kM,
		renderingIntent: null,
		repeatCount: null,
		repeatDur: null,
		requiredExtensions: kM,
		requiredFeatures: kM,
		requiredFonts: kM,
		requiredFormats: kM,
		resource: null,
		restart: null,
		result: null,
		rotate: null,
		rx: null,
		ry: null,
		scale: null,
		seed: null,
		shapeRendering: null,
		side: null,
		slope: null,
		snapshotTime: null,
		specularConstant: kO,
		specularExponent: kO,
		spreadMethod: null,
		spacing: null,
		startOffset: null,
		stdDeviation: null,
		stemh: null,
		stemv: null,
		stitchTiles: null,
		stopColor: null,
		stopOpacity: null,
		strikethroughPosition: kO,
		strikethroughThickness: kO,
		string: null,
		stroke: null,
		strokeDashArray: kM,
		strokeDashOffset: null,
		strokeLineCap: null,
		strokeLineJoin: null,
		strokeMiterLimit: kO,
		strokeOpacity: kO,
		strokeWidth: null,
		style: null,
		surfaceScale: kO,
		syncBehavior: null,
		syncBehaviorDefault: null,
		syncMaster: null,
		syncTolerance: null,
		syncToleranceDefault: null,
		systemLanguage: kM,
		tabIndex: kO,
		tableValues: null,
		target: null,
		targetX: kO,
		targetY: kO,
		textAnchor: null,
		textDecoration: null,
		textRendering: null,
		textLength: null,
		timelineBegin: null,
		title: null,
		transformBehavior: null,
		type: null,
		typeOf: kM,
		to: null,
		transform: null,
		transformOrigin: null,
		u1: null,
		u2: null,
		underlinePosition: kO,
		underlineThickness: kO,
		unicode: null,
		unicodeBidi: null,
		unicodeRange: null,
		unitsPerEm: kO,
		values: null,
		vAlphabetic: kO,
		vMathematical: kO,
		vectorEffect: null,
		vHanging: kO,
		vIdeographic: kO,
		version: null,
		vertAdvY: kO,
		vertOriginX: kO,
		vertOriginY: kO,
		viewBox: null,
		viewTarget: null,
		visibility: null,
		width: null,
		widths: null,
		wordSpacing: null,
		writingMode: null,
		x: null,
		x1: null,
		x2: null,
		xChannelSelector: null,
		xHeight: kO,
		y: null,
		y1: null,
		y2: null,
		yChannelSelector: null,
		z: null,
		zoomAndPan: null
	},
	space: "svg",
	transform: k$
}), kF = kD({
	properties: {
		xLinkActuate: null,
		xLinkArcRole: null,
		xLinkHref: null,
		xLinkRole: null,
		xLinkShow: null,
		xLinkTitle: null,
		xLinkType: null
	},
	space: "xlink",
	transform: (e, t) => "xlink:" + t.slice(5).toLowerCase()
}), kz = kD({
	attributes: { xmlnsxlink: "xmlns:xlink" },
	properties: {
		xmlnsXLink: null,
		xmlns: null
	},
	space: "xmlns",
	transform: kL
}), kV = kD({
	properties: {
		xmlBase: null,
		xmlLang: null,
		xmlSpace: null
	},
	space: "xml",
	transform: (e, t) => "xml:" + t.slice(3).toLowerCase()
}), kB = {
	classId: "classID",
	dataType: "datatype",
	itemId: "itemID",
	strokeDashArray: "strokeDasharray",
	strokeDashOffset: "strokeDashoffset",
	strokeLineCap: "strokeLinecap",
	strokeLineJoin: "strokeLinejoin",
	strokeMiterLimit: "strokeMiterlimit",
	typeOf: "typeof",
	xLinkActuate: "xlinkActuate",
	xLinkArcRole: "xlinkArcrole",
	xLinkHref: "xlinkHref",
	xLinkRole: "xlinkRole",
	xLinkShow: "xlinkShow",
	xLinkTitle: "xlinkTitle",
	xLinkType: "xlinkType",
	xmlnsXLink: "xmlnsXlink"
};
var kH = /[A-Z]/g, kW = /-[a-z]/g, kU = /^data[-\w.:]+$/i;
function kq(e) {
	return "-" + e.toLowerCase();
}
function kK(e) {
	return e.charAt(1).toUpperCase();
}
let kG = kv([
	kj,
	kR,
	kF,
	kz,
	kV
], "html"), kJ = kv([
	kj,
	kN,
	kF,
	kz,
	kV
], "svg");
var kZ = i((e, t) => {
	var r = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, i = /\n/g, o = /^\s*/, a = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, l = /^:\s*/, s = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, u = /^[;\s]*/, c = /^\s+|\s+$/g;
	function f(e) {
		return e ? e.replace(c, "") : "";
	}
	t.exports = function(e, t) {
		if ("string" != typeof e) throw TypeError("First argument must be a string");
		if (!e) return [];
		t = t || {};
		var c = 1, d = 1;
		function p(e) {
			var t = e.match(i);
			t && (c += t.length);
			var r = e.lastIndexOf("\n");
			d = ~r ? e.length - r : d + e.length;
		}
		function h() {
			var e = {
				line: c,
				column: d
			};
			return function(t) {
				return t.position = new m(e), b(o), t;
			};
		}
		function m(e) {
			this.start = e, this.end = {
				line: c,
				column: d
			}, this.source = t.source;
		}
		m.prototype.content = e;
		var g = [];
		function y(r) {
			var i = Error(t.source + ":" + c + ":" + d + ": " + r);
			if (i.reason = r, i.filename = t.source, i.line = c, i.column = d, i.source = e, t.silent) g.push(i);
			else throw i;
		}
		function b(t) {
			var r = t.exec(e);
			if (r) {
				var i = r[0];
				return p(i), e = e.slice(i.length), r;
			}
		}
		function x(e) {
			var t;
			for (e = e || []; t = w();) !1 !== t && e.push(t);
			return e;
		}
		function w() {
			var t = h();
			if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
				for (var r = 2; "" != e.charAt(r) && ("*" != e.charAt(r) || "/" != e.charAt(r + 1));) ++r;
				if (r += 2, "" === e.charAt(r - 1)) return y("End of comment missing");
				var i = e.slice(2, r - 2);
				return d += 2, p(i), e = e.slice(r), d += 2, t({
					type: "comment",
					comment: i
				});
			}
		}
		b(o);
		var k, _ = [];
		for (x(_); k = function() {
			var e = h(), t = b(a);
			if (t) {
				if (w(), !b(l)) return y("property missing ':'");
				var i = b(s), o = e({
					type: "declaration",
					property: f(t[0].replace(r, "")),
					value: i ? f(i[0].replace(r, "")) : ""
				});
				return b(u), o;
			}
		}();) !1 !== k && (_.push(k), x(_));
		return _;
	};
}), kX = i((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function(e, t) {
		var i = null;
		if (!e || "string" != typeof e) return i;
		var o = (0, r.default)(e), a = "function" == typeof t;
		return o.forEach(function(e) {
			if ("declaration" === e.type) {
				var r = e.property, o = e.value;
				a ? t(r, o, e) : o && ((i = i || {})[r] = o);
			}
		}), i;
	};
	var r = t(kZ());
}), kY = i((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = /^--[a-zA-Z0-9_-]+$/, r = /-([a-z])/g, i = /^[^-]+$/, o = /^-(webkit|moz|ms|o|khtml)-/, a = /^-(ms)-/, l = function(e, t) {
		return t.toUpperCase();
	}, s = function(e, t) {
		return "".concat(t, "-");
	};
	e.camelCase = function(e, u) {
		var c;
		return (void 0 === u && (u = {}), !(c = e) || i.test(c) || t.test(c)) ? e : (e = e.toLowerCase(), (e = u.reactCompat ? e.replace(a, s) : e.replace(o, s)).replace(r, l));
	};
}), kQ = i((e, t) => {
	var r = (e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	})(kX()), i = kY();
	function o(e, t) {
		var o = {};
		return e && "string" == typeof e && (0, r.default)(e, function(e, r) {
			e && r && (o[(0, i.camelCase)(e, t)] = r);
		}), o;
	}
	o.default = o, t.exports = o;
});
let k0 = k2("end"), k1 = k2("start");
function k2(e) {
	return function(t) {
		let r = t && t.position && t.position[e] || {};
		if ("number" == typeof r.line && r.line > 0 && "number" == typeof r.column && r.column > 0) return {
			line: r.line,
			column: r.column,
			offset: "number" == typeof r.offset && r.offset > -1 ? r.offset : void 0
		};
	};
}
var k4 = class extends Error {
	constructor(e, t, r) {
		super(), "string" == typeof t && (r = t, t = void 0);
		let i = "", o = {}, a = !1;
		if (t && (o = "line" in t && "column" in t || "start" in t && "end" in t ? { place: t } : "type" in t ? {
			ancestors: [t],
			place: t.position
		} : { ...t }), "string" == typeof e ? i = e : !o.cause && e && (a = !0, i = e.message, o.cause = e), !o.ruleId && !o.source && "string" == typeof r) {
			let e = r.indexOf(":");
			-1 === e ? o.ruleId = r : (o.source = r.slice(0, e), o.ruleId = r.slice(e + 1));
		}
		if (!o.place && o.ancestors && o.ancestors) {
			let e = o.ancestors[o.ancestors.length - 1];
			e && (o.place = e.position);
		}
		let l = o.place && "start" in o.place ? o.place.start : o.place;
		this.ancestors = o.ancestors || void 0, this.cause = o.cause || void 0, this.column = l ? l.column : void 0, this.fatal = void 0, this.file = "", this.message = i, this.line = l ? l.line : void 0, this.name = xD(o.place) || "1:1", this.place = o.place || void 0, this.reason = this.message, this.ruleId = o.ruleId || void 0, this.source = o.source || void 0, this.stack = a && o.cause && "string" == typeof o.cause.stack ? o.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
	}
};
k4.prototype.file = "", k4.prototype.name = "", k4.prototype.reason = "", k4.prototype.message = "", k4.prototype.stack = "", k4.prototype.column = void 0, k4.prototype.line = void 0, k4.prototype.ancestors = void 0, k4.prototype.cause = void 0, k4.prototype.fatal = void 0, k4.prototype.place = void 0, k4.prototype.ruleId = void 0, k4.prototype.source = void 0;
var k3 = r(kQ()), k5 = {}.hasOwnProperty, k6 = /* @__PURE__ */ new Map(), k9 = /[A-Z]/g, k8 = new Set([
	"table",
	"tbody",
	"thead",
	"tfoot",
	"tr"
]), k7 = new Set(["td", "th"]), _e = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function _t(e, t, r) {
	return "element" === t.type ? function(e, t, r) {
		let i = e.schema;
		"svg" === t.tagName.toLowerCase() && "html" === i.space && (e.schema = kJ), e.ancestors.push(t);
		let o = _o(e, t.tagName, !1), a = function(e, t) {
			let r, i, o = {};
			for (i in t.properties) if ("children" !== i && k5.call(t.properties, i)) {
				let a = function(e, t, r) {
					let i = function(e, t) {
						let r = kb(t), i = t, o = kx;
						if (r in e.normal) return e.property[e.normal[r]];
						if (r.length > 4 && "data" === r.slice(0, 4) && kU.test(t)) {
							if ("-" === t.charAt(4)) {
								let e = t.slice(5).replace(kW, kK);
								i = "data" + e.charAt(0).toUpperCase() + e.slice(1);
							} else {
								let e = t.slice(4);
								if (!kW.test(e)) {
									let r = e.replace(kH, kq);
									"-" !== r.charAt(0) && (r = "-" + r), t = "data" + r;
								}
							}
							o = kI;
						}
						return new o(i, t);
					}(e.schema, t);
					if (!(null == r || "number" == typeof r && Number.isNaN(r))) {
						if (Array.isArray(r) && (r = i.commaSeparated ? function(e, t) {
							let r = {};
							return ("" === e[e.length - 1] ? [...e, ""] : e).join((r.padRight ? " " : "") + "," + (!1 === r.padLeft ? "" : " ")).trim();
						}(r) : r.join(" ").trim()), "style" === i.property) {
							let t = "object" == typeof r ? r : function(e, t) {
								try {
									return (0, k3.default)(t, { reactCompat: !0 });
								} catch (r) {
									if (e.ignoreInvalidStyle) return {};
									let t = new k4("Cannot parse `style` attribute", {
										ancestors: e.ancestors,
										cause: r,
										ruleId: "style",
										source: "hast-util-to-jsx-runtime"
									});
									throw t.file = e.filePath || void 0, t.url = _e + "#cannot-parse-style-attribute", t;
								}
							}(e, String(r));
							return "css" === e.stylePropertyNameCase && (t = function(e) {
								let t, r = {};
								for (t in e) k5.call(e, t) && (r[function(e) {
									let t = e.replace(k9, _l);
									return "ms-" === t.slice(0, 3) && (t = "-" + t), t;
								}(t)] = e[t]);
								return r;
							}(t)), ["style", t];
						}
						return ["react" === e.elementAttributeNameCase && i.space ? kB[i.property] || i.property : i.attribute, r];
					}
				}(e, i, t.properties[i]);
				if (a) {
					let [i, l] = a;
					e.tableCellAlignToStyle && "align" === i && "string" == typeof l && k7.has(t.tagName) ? r = l : o[i] = l;
				}
			}
			return r && ((o.style || (o.style = {}))["css" === e.stylePropertyNameCase ? "text-align" : "textAlign"] = r), o;
		}(e, t), l = _i(e, t);
		return k8.has(t.tagName) && (l = l.filter(function(e) {
			return "string" != typeof e || !("object" == typeof e ? "text" === e.type && kg(e.value) : kg(e));
		})), _n(e, a, o, t), _r(a, l), e.ancestors.pop(), e.schema = i, e.create(t, o, a, r);
	}(e, t, r) : "mdxFlowExpression" === t.type || "mdxTextExpression" === t.type ? function(e, t) {
		if (t.data && t.data.estree && e.evaluater) {
			let r = t.data.estree.body[0];
			return r.type, e.evaluater.evaluateExpression(r.expression);
		}
		_a(e, t.position);
	}(e, t) : "mdxJsxFlowElement" === t.type || "mdxJsxTextElement" === t.type ? function(e, t, r) {
		let i = e.schema;
		"svg" === t.name && "html" === i.space && (e.schema = kJ), e.ancestors.push(t);
		let o = null === t.name ? e.Fragment : _o(e, t.name, !0), a = function(e, t) {
			let r = {};
			for (let i of t.attributes) if ("mdxJsxExpressionAttribute" === i.type) if (i.data && i.data.estree && e.evaluater) {
				let t = i.data.estree.body[0];
				t.type;
				let o = t.expression;
				o.type;
				let a = o.properties[0];
				a.type, Object.assign(r, e.evaluater.evaluateExpression(a.argument));
			} else _a(e, t.position);
			else {
				let o, a = i.name;
				if (i.value && "object" == typeof i.value) if (i.value.data && i.value.data.estree && e.evaluater) {
					let t = i.value.data.estree.body[0];
					t.type, o = e.evaluater.evaluateExpression(t.expression);
				} else _a(e, t.position);
				else o = null === i.value || i.value;
				r[a] = o;
			}
			return r;
		}(e, t), l = _i(e, t);
		return _n(e, a, o, t), _r(a, l), e.ancestors.pop(), e.schema = i, e.create(t, o, a, r);
	}(e, t, r) : "mdxjsEsm" === t.type ? function(e, t) {
		if (t.data && t.data.estree && e.evaluater) return e.evaluater.evaluateProgram(t.data.estree);
		_a(e, t.position);
	}(e, t) : "root" === t.type ? function(e, t, r) {
		let i = {};
		return _r(i, _i(e, t)), e.create(t, e.Fragment, i, r);
	}(e, t, r) : "text" === t.type ? t.value : void 0;
}
function _n(e, t, r, i) {
	"string" != typeof r && r !== e.Fragment && e.passNode && (t.node = i);
}
function _r(e, t) {
	if (t.length > 0) {
		let r = t.length > 1 ? t : t[0];
		r && (e.children = r);
	}
}
function _i(e, t) {
	let r = [], i = -1, o = e.passKeys ? /* @__PURE__ */ new Map() : k6;
	for (; ++i < t.children.length;) {
		let a, l = t.children[i];
		if (e.passKeys) {
			let e = "element" === l.type ? l.tagName : "mdxJsxFlowElement" === l.type || "mdxJsxTextElement" === l.type ? l.name : void 0;
			if (e) {
				let t = o.get(e) || 0;
				a = e + "-" + t, o.set(e, t + 1);
			}
		}
		let s = _t(e, l, a);
		void 0 !== s && r.push(s);
	}
	return r;
}
function _o(e, t, r) {
	let i;
	if (r) if (t.includes(".")) {
		let e, r = t.split("."), o = -1;
		for (; ++o < r.length;) {
			let t = kh(r[o]) ? {
				type: "Identifier",
				name: r[o]
			} : {
				type: "Literal",
				value: r[o]
			};
			e = e ? {
				type: "MemberExpression",
				object: e,
				property: t,
				computed: !!(o && "Literal" === t.type),
				optional: !1
			} : t;
		}
		i = e;
	} else i = kh(t) && !/^[a-z]/.test(t) ? {
		type: "Identifier",
		name: t
	} : {
		type: "Literal",
		value: t
	};
	else i = {
		type: "Literal",
		value: t
	};
	if ("Literal" === i.type) {
		let t = i.value;
		return k5.call(e.components, t) ? e.components[t] : t;
	}
	if (e.evaluater) return e.evaluater.evaluateExpression(i);
	_a(e);
}
function _a(e, t) {
	let r = new k4("Cannot handle MDX estrees without `createEvaluater`", {
		ancestors: e.ancestors,
		place: t,
		ruleId: "mdx-estree",
		source: "hast-util-to-jsx-runtime"
	});
	throw r.file = e.filePath || void 0, r.url = _e + "#cannot-handle-mdx-estrees-without-createevaluater", r;
}
function _l(e) {
	return "-" + e.toLowerCase();
}
function _s(e, t) {
	let r = t.referenceType, i = "]";
	if ("collapsed" === r ? i += "[]" : "full" === r && (i += "[" + (t.label || t.identifier) + "]"), "imageReference" === t.type) return [{
		type: "text",
		value: "![" + t.alt + i
	}];
	let o = e.all(t), a = o[0];
	a && "text" === a.type ? a.value = "[" + a.value : o.unshift({
		type: "text",
		value: "["
	});
	let l = o[o.length - 1];
	return l && "text" === l.type ? l.value += i : o.push({
		type: "text",
		value: i
	}), o;
}
function _u(e) {
	let t = e.spread;
	return null == t ? e.children.length > 1 : t;
}
function _c(e, t, r) {
	let i = 0, o = e.length;
	if (t) {
		let t = e.codePointAt(i);
		for (; 9 === t || 32 === t;) i++, t = e.codePointAt(i);
	}
	if (r) {
		let t = e.codePointAt(o - 1);
		for (; 9 === t || 32 === t;) o--, t = e.codePointAt(o - 1);
	}
	return o > i ? e.slice(i, o) : "";
}
let _f = {
	blockquote: function(e, t) {
		let r = {
			type: "element",
			tagName: "blockquote",
			properties: {},
			children: e.wrap(e.all(t), !0)
		};
		return e.patch(t, r), e.applyData(t, r);
	},
	break: function(e, t) {
		let r = {
			type: "element",
			tagName: "br",
			properties: {},
			children: []
		};
		return e.patch(t, r), [e.applyData(t, r), {
			type: "text",
			value: "\n"
		}];
	},
	code: function(e, t) {
		let r = t.value ? t.value + "\n" : "", i = {};
		t.lang && (i.className = ["language-" + t.lang]);
		let o = {
			type: "element",
			tagName: "code",
			properties: i,
			children: [{
				type: "text",
				value: r
			}]
		};
		return t.meta && (o.data = { meta: t.meta }), e.patch(t, o), o = {
			type: "element",
			tagName: "pre",
			properties: {},
			children: [o = e.applyData(t, o)]
		}, e.patch(t, o), o;
	},
	delete: function(e, t) {
		let r = {
			type: "element",
			tagName: "del",
			properties: {},
			children: e.all(t)
		};
		return e.patch(t, r), e.applyData(t, r);
	},
	emphasis: function(e, t) {
		let r = {
			type: "element",
			tagName: "em",
			properties: {},
			children: e.all(t)
		};
		return e.patch(t, r), e.applyData(t, r);
	},
	footnoteReference: function(e, t) {
		let r, i = "string" == typeof e.options.clobberPrefix ? e.options.clobberPrefix : "user-content-", o = String(t.identifier).toUpperCase(), a = bj(o.toLowerCase()), l = e.footnoteOrder.indexOf(o), s = e.footnoteCounts.get(o);
		void 0 === s ? (s = 0, e.footnoteOrder.push(o), r = e.footnoteOrder.length) : r = l + 1, s += 1, e.footnoteCounts.set(o, s);
		let u = {
			type: "element",
			tagName: "a",
			properties: {
				href: "#" + i + "fn-" + a,
				id: i + "fnref-" + a + (s > 1 ? "-" + s : ""),
				dataFootnoteRef: !0,
				ariaDescribedBy: ["footnote-label"]
			},
			children: [{
				type: "text",
				value: String(r)
			}]
		};
		e.patch(t, u);
		let c = {
			type: "element",
			tagName: "sup",
			properties: {},
			children: [u]
		};
		return e.patch(t, c), e.applyData(t, c);
	},
	heading: function(e, t) {
		let r = {
			type: "element",
			tagName: "h" + t.depth,
			properties: {},
			children: e.all(t)
		};
		return e.patch(t, r), e.applyData(t, r);
	},
	html: function(e, t) {
		if (e.options.allowDangerousHtml) {
			let r = {
				type: "raw",
				value: t.value
			};
			return e.patch(t, r), e.applyData(t, r);
		}
	},
	imageReference: function(e, t) {
		let r = String(t.identifier).toUpperCase(), i = e.definitionById.get(r);
		if (!i) return _s(e, t);
		let o = {
			src: bj(i.url || ""),
			alt: t.alt
		};
		null !== i.title && void 0 !== i.title && (o.title = i.title);
		let a = {
			type: "element",
			tagName: "img",
			properties: o,
			children: []
		};
		return e.patch(t, a), e.applyData(t, a);
	},
	image: function(e, t) {
		let r = { src: bj(t.url) };
		null !== t.alt && void 0 !== t.alt && (r.alt = t.alt), null !== t.title && void 0 !== t.title && (r.title = t.title);
		let i = {
			type: "element",
			tagName: "img",
			properties: r,
			children: []
		};
		return e.patch(t, i), e.applyData(t, i);
	},
	inlineCode: function(e, t) {
		let r = {
			type: "text",
			value: t.value.replace(/\r?\n|\r/g, " ")
		};
		e.patch(t, r);
		let i = {
			type: "element",
			tagName: "code",
			properties: {},
			children: [r]
		};
		return e.patch(t, i), e.applyData(t, i);
	},
	linkReference: function(e, t) {
		let r = String(t.identifier).toUpperCase(), i = e.definitionById.get(r);
		if (!i) return _s(e, t);
		let o = { href: bj(i.url || "") };
		null !== i.title && void 0 !== i.title && (o.title = i.title);
		let a = {
			type: "element",
			tagName: "a",
			properties: o,
			children: e.all(t)
		};
		return e.patch(t, a), e.applyData(t, a);
	},
	link: function(e, t) {
		let r = { href: bj(t.url) };
		null !== t.title && void 0 !== t.title && (r.title = t.title);
		let i = {
			type: "element",
			tagName: "a",
			properties: r,
			children: e.all(t)
		};
		return e.patch(t, i), e.applyData(t, i);
	},
	listItem: function(e, t, r) {
		let i = e.all(t), o = r ? function(e) {
			let t = !1;
			if ("list" === e.type) {
				t = e.spread || !1;
				let r = e.children, i = -1;
				for (; !t && ++i < r.length;) t = _u(r[i]);
			}
			return t;
		}(r) : _u(t), a = {}, l = [];
		if ("boolean" == typeof t.checked) {
			let e, r = i[0];
			r && "element" === r.type && "p" === r.tagName ? e = r : (e = {
				type: "element",
				tagName: "p",
				properties: {},
				children: []
			}, i.unshift(e)), e.children.length > 0 && e.children.unshift({
				type: "text",
				value: " "
			}), e.children.unshift({
				type: "element",
				tagName: "input",
				properties: {
					type: "checkbox",
					checked: t.checked,
					disabled: !0
				},
				children: []
			}), a.className = ["task-list-item"];
		}
		let s = -1;
		for (; ++s < i.length;) {
			let e = i[s];
			(o || 0 !== s || "element" !== e.type || "p" !== e.tagName) && l.push({
				type: "text",
				value: "\n"
			}), "element" !== e.type || "p" !== e.tagName || o ? l.push(e) : l.push(...e.children);
		}
		let u = i[i.length - 1];
		u && (o || "element" !== u.type || "p" !== u.tagName) && l.push({
			type: "text",
			value: "\n"
		});
		let c = {
			type: "element",
			tagName: "li",
			properties: a,
			children: l
		};
		return e.patch(t, c), e.applyData(t, c);
	},
	list: function(e, t) {
		let r = {}, i = e.all(t), o = -1;
		for ("number" == typeof t.start && 1 !== t.start && (r.start = t.start); ++o < i.length;) {
			let e = i[o];
			if ("element" === e.type && "li" === e.tagName && e.properties && Array.isArray(e.properties.className) && e.properties.className.includes("task-list-item")) {
				r.className = ["contains-task-list"];
				break;
			}
		}
		let a = {
			type: "element",
			tagName: t.ordered ? "ol" : "ul",
			properties: r,
			children: e.wrap(i, !0)
		};
		return e.patch(t, a), e.applyData(t, a);
	},
	paragraph: function(e, t) {
		let r = {
			type: "element",
			tagName: "p",
			properties: {},
			children: e.all(t)
		};
		return e.patch(t, r), e.applyData(t, r);
	},
	root: function(e, t) {
		let r = {
			type: "root",
			children: e.wrap(e.all(t))
		};
		return e.patch(t, r), e.applyData(t, r);
	},
	strong: function(e, t) {
		let r = {
			type: "element",
			tagName: "strong",
			properties: {},
			children: e.all(t)
		};
		return e.patch(t, r), e.applyData(t, r);
	},
	table: function(e, t) {
		let r = e.all(t), i = r.shift(), o = [];
		if (i) {
			let r = {
				type: "element",
				tagName: "thead",
				properties: {},
				children: e.wrap([i], !0)
			};
			e.patch(t.children[0], r), o.push(r);
		}
		if (r.length > 0) {
			let i = {
				type: "element",
				tagName: "tbody",
				properties: {},
				children: e.wrap(r, !0)
			}, a = k1(t.children[1]), l = k0(t.children[t.children.length - 1]);
			a && l && (i.position = {
				start: a,
				end: l
			}), o.push(i);
		}
		let a = {
			type: "element",
			tagName: "table",
			properties: {},
			children: e.wrap(o, !0)
		};
		return e.patch(t, a), e.applyData(t, a);
	},
	tableCell: function(e, t) {
		let r = {
			type: "element",
			tagName: "td",
			properties: {},
			children: e.all(t)
		};
		return e.patch(t, r), e.applyData(t, r);
	},
	tableRow: function(e, t, r) {
		let i = r ? r.children : void 0, o = (i ? i.indexOf(t) : 1) === 0 ? "th" : "td", a = r && "table" === r.type ? r.align : void 0, l = a ? a.length : t.children.length, s = -1, u = [];
		for (; ++s < l;) {
			let r = t.children[s], i = {}, l = a ? a[s] : void 0;
			l && (i.align = l);
			let c = {
				type: "element",
				tagName: o,
				properties: i,
				children: []
			};
			r && (c.children = e.all(r), e.patch(r, c), c = e.applyData(r, c)), u.push(c);
		}
		let c = {
			type: "element",
			tagName: "tr",
			properties: {},
			children: e.wrap(u, !0)
		};
		return e.patch(t, c), e.applyData(t, c);
	},
	text: function(e, t) {
		let r = {
			type: "text",
			value: function(e) {
				let t = String(e), r = /\r?\n|\r/g, i = r.exec(t), o = 0, a = [];
				for (; i;) a.push(_c(t.slice(o, i.index), o > 0, !0), i[0]), o = i.index + i[0].length, i = r.exec(t);
				return a.push(_c(t.slice(o), o > 0, !1)), a.join("");
			}(String(t.value))
		};
		return e.patch(t, r), e.applyData(t, r);
	},
	thematicBreak: function(e, t) {
		let r = {
			type: "element",
			tagName: "hr",
			properties: {},
			children: []
		};
		return e.patch(t, r), e.applyData(t, r);
	},
	toml: _d,
	yaml: _d,
	definition: _d,
	footnoteDefinition: _d
};
function _d() {}
var _p = "object" == typeof self ? self : globalThis;
let _h = (e) => ((e, t) => {
	let r = (t, r) => (e.set(r, t), t), i = (o) => {
		if (e.has(o)) return e.get(o);
		let [a, l] = t[o];
		switch (a) {
			case 0:
			case -1: return r(l, o);
			case 1: {
				let e = r([], o);
				for (let t of l) e.push(i(t));
				return e;
			}
			case 2: {
				let e = r({}, o);
				for (let [t, r] of l) e[i(t)] = i(r);
				return e;
			}
			case 3: return r(new Date(l), o);
			case 4: {
				let { source: e, flags: t } = l;
				return r(new RegExp(e, t), o);
			}
			case 5: {
				let e = r(/* @__PURE__ */ new Map(), o);
				for (let [t, r] of l) e.set(i(t), i(r));
				return e;
			}
			case 6: {
				let e = r(/* @__PURE__ */ new Set(), o);
				for (let t of l) e.add(i(t));
				return e;
			}
			case 7: {
				let { name: e, message: t } = l;
				return r(new _p[e](t), o);
			}
			case 8: return r(BigInt(l), o);
			case "BigInt": return r(Object(BigInt(l)), o);
			case "ArrayBuffer": return r(new Uint8Array(l).buffer, l);
			case "DataView": {
				let { buffer: e } = new Uint8Array(l);
				return r(new DataView(e), l);
			}
		}
		return r(new _p[a](l), o);
	};
	return i;
})(/* @__PURE__ */ new Map(), e)(0);
var { toString: _m } = {}, { keys: _g } = Object, _y = (e) => {
	let t = typeof e;
	if ("object" !== t || !e) return [0, t];
	let r = _m.call(e).slice(8, -1);
	switch (r) {
		case "Array": return [1, ""];
		case "Object": return [2, ""];
		case "Date": return [3, ""];
		case "RegExp": return [4, ""];
		case "Map": return [5, ""];
		case "Set": return [6, ""];
		case "DataView": return [1, r];
	}
	return r.includes("Array") ? [1, r] : r.includes("Error") ? [7, r] : [2, r];
}, _v = ([e, t]) => 0 === e && ("function" === t || "symbol" === t);
let _b = (e, { json: t, lossy: r } = {}) => {
	let i = [];
	return ((e, t, r, i) => {
		let o = (e, t) => {
			let o = i.push(e) - 1;
			return r.set(t, o), o;
		}, a = (i) => {
			if (r.has(i)) return r.get(i);
			let [l, s] = _y(i);
			switch (l) {
				case 0: {
					let t = i;
					switch (s) {
						case "bigint":
							l = 8, t = i.toString();
							break;
						case "function":
						case "symbol":
							if (e) throw TypeError("unable to serialize " + s);
							t = null;
							break;
						case "undefined": return o([-1], i);
					}
					return o([l, t], i);
				}
				case 1: {
					if (s) {
						let e = i;
						return "DataView" === s ? e = new Uint8Array(i.buffer) : "ArrayBuffer" === s && (e = new Uint8Array(i)), o([s, [...e]], i);
					}
					let e = [], t = o([l, e], i);
					for (let t of i) e.push(a(t));
					return t;
				}
				case 2: {
					if (s) switch (s) {
						case "BigInt": return o([s, i.toString()], i);
						case "Boolean":
						case "Number":
						case "String": return o([s, i.valueOf()], i);
					}
					if (t && "toJSON" in i) return a(i.toJSON());
					let r = [], u = o([l, r], i);
					for (let t of _g(i)) (e || !_v(_y(i[t]))) && r.push([a(t), a(i[t])]);
					return u;
				}
				case 3: return o([l, i.toISOString()], i);
				case 4: {
					let { source: e, flags: t } = i;
					return o([l, {
						source: e,
						flags: t
					}], i);
				}
				case 5: {
					let t = [], r = o([l, t], i);
					for (let [r, o] of i) (e || !(_v(_y(r)) || _v(_y(o)))) && t.push([a(r), a(o)]);
					return r;
				}
				case 6: {
					let t = [], r = o([l, t], i);
					for (let r of i) (e || !_v(_y(r))) && t.push(a(r));
					return r;
				}
			}
			let { message: u } = i;
			return o([l, {
				name: s,
				message: u
			}], i);
		};
		return a;
	})(!(t || r), !!t, /* @__PURE__ */ new Map(), i)(e), i;
};
var _x = "function" == typeof structuredClone ? (e, t) => t && ("json" in t || "lossy" in t) ? _h(_b(e, t)) : structuredClone(e) : (e, t) => _h(_b(e, t));
function _w(e, t) {
	let r = [{
		type: "text",
		value: "↩"
	}];
	return t > 1 && r.push({
		type: "element",
		tagName: "sup",
		properties: {},
		children: [{
			type: "text",
			value: String(t)
		}]
	}), r;
}
function _k(e, t) {
	return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
var __ = {}.hasOwnProperty, _C = {};
function _S(e, t) {
	e.position && (t.position = function(e) {
		let t = k1(e), r = k0(e);
		if (t && r) return {
			start: t,
			end: r
		};
	}(e));
}
function _O(e, t) {
	let r = t;
	if (e && e.data) {
		let t = e.data.hName, i = e.data.hChildren, o = e.data.hProperties;
		"string" == typeof t && ("element" === r.type ? r.tagName = t : r = {
			type: "element",
			tagName: t,
			properties: {},
			children: "children" in r ? r.children : [r]
		}), "element" === r.type && o && Object.assign(r.properties, _x(o)), "children" in r && r.children && null != i && (r.children = i);
	}
	return r;
}
function _A(e, t) {
	let r = [], i = -1;
	for (t && r.push({
		type: "text",
		value: "\n"
	}); ++i < e.length;) i && r.push({
		type: "text",
		value: "\n"
	}), r.push(e[i]);
	return t && e.length > 0 && r.push({
		type: "text",
		value: "\n"
	}), r;
}
function _P(e) {
	let t = 0, r = e.charCodeAt(t);
	for (; 9 === r || 32 === r;) t++, r = e.charCodeAt(t);
	return e.slice(t);
}
var _M = h_((e, {}) => hc(e.text$, ha(), hx((t) => {
	var r, i;
	let o, a, l, s, u = function(e, t) {
		let r = function(e, t) {
			var r, i;
			let o, a, l, s = t || _C, u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), f = {
				all: function(e) {
					let t = [];
					if ("children" in e) {
						let r = e.children, i = -1;
						for (; ++i < r.length;) {
							let o = f.one(r[i], e);
							if (o) {
								if (i && "break" === r[i - 1].type && (Array.isArray(o) || "text" !== o.type || (o.value = _P(o.value)), !Array.isArray(o) && "element" === o.type)) {
									let e = o.children[0];
									e && "text" === e.type && (e.value = _P(e.value));
								}
								Array.isArray(o) ? t.push(...o) : t.push(o);
							}
						}
					}
					return t;
				},
				applyData: _O,
				definitionById: u,
				footnoteById: c,
				footnoteCounts: /* @__PURE__ */ new Map(),
				footnoteOrder: [],
				handlers: {
					..._f,
					...s.handlers
				},
				one: function(e, t) {
					let r = e.type, i = f.handlers[r];
					if (__.call(f.handlers, r) && i) return i(f, e, t);
					if (f.options.passThrough && f.options.passThrough.includes(r)) {
						if ("children" in e) {
							let { children: t,...r } = e, i = _x(r);
							return i.children = f.all(e), i;
						}
						return _x(e);
					}
					return (f.options.unknownHandler || function(e, t) {
						let r = t.data || {}, i = "value" in t && !(__.call(r, "hProperties") || __.call(r, "hChildren")) ? {
							type: "text",
							value: t.value
						} : {
							type: "element",
							tagName: "div",
							properties: {},
							children: e.all(t)
						};
						return e.patch(t, i), e.applyData(t, i);
					})(f, e, t);
				},
				options: s,
				patch: _S,
				wrap: _A
			};
			return "function" == typeof (r = function(e) {
				if ("definition" === e.type || "footnoteDefinition" === e.type) {
					let t = "definition" === e.type ? u : c, r = String(e.identifier).toUpperCase();
					t.has(r) || t.set(r, e);
				}
			}) ? (a = void 0, l = r, o = i) : (a = r, l = i, o = void 0), xU(e, a, function(e, t) {
				let r = t[t.length - 1], i = r ? r.children.indexOf(e) : void 0;
				return l(e, i, r);
			}, o), f;
		}(e, void 0), i = r.one(e, void 0), o = function(e) {
			let t = "string" == typeof e.options.clobberPrefix ? e.options.clobberPrefix : "user-content-", r = e.options.footnoteBackContent || _w, i = e.options.footnoteBackLabel || _k, o = e.options.footnoteLabel || "Footnotes", a = e.options.footnoteLabelTagName || "h2", l = e.options.footnoteLabelProperties || { className: ["sr-only"] }, s = [], u = -1;
			for (; ++u < e.footnoteOrder.length;) {
				let o = e.footnoteById.get(e.footnoteOrder[u]);
				if (!o) continue;
				let a = e.all(o), l = String(o.identifier).toUpperCase(), c = bj(l.toLowerCase()), f = 0, d = [], p = e.footnoteCounts.get(l);
				for (; void 0 !== p && ++f <= p;) {
					d.length > 0 && d.push({
						type: "text",
						value: " "
					});
					let e = "string" == typeof r ? r : r(u, f);
					"string" == typeof e && (e = {
						type: "text",
						value: e
					}), d.push({
						type: "element",
						tagName: "a",
						properties: {
							href: "#" + t + "fnref-" + c + (f > 1 ? "-" + f : ""),
							dataFootnoteBackref: "",
							ariaLabel: "string" == typeof i ? i : i(u, f),
							className: ["data-footnote-backref"]
						},
						children: Array.isArray(e) ? e : [e]
					});
				}
				let h = a[a.length - 1];
				if (h && "element" === h.type && "p" === h.tagName) {
					let e = h.children[h.children.length - 1];
					e && "text" === e.type ? e.value += " " : h.children.push({
						type: "text",
						value: " "
					}), h.children.push(...d);
				} else a.push(...d);
				let m = {
					type: "element",
					tagName: "li",
					properties: { id: t + "fn-" + c },
					children: e.wrap(a, !0)
				};
				e.patch(o, m), s.push(m);
			}
			if (0 !== s.length) return {
				type: "element",
				tagName: "section",
				properties: {
					dataFootnotes: !0,
					className: ["footnotes"]
				},
				children: [
					{
						type: "element",
						tagName: a,
						properties: {
							..._x(l),
							id: "footnote-label"
						},
						children: [{
							type: "text",
							value: o
						}]
					},
					{
						type: "text",
						value: "\n"
					},
					{
						type: "element",
						tagName: "ol",
						properties: {},
						children: e.wrap(s, !0)
					},
					{
						type: "text",
						value: "\n"
					}
				]
			};
		}(r), a = Array.isArray(i) ? {
			type: "root",
			children: i
		} : i || {
			type: "root",
			children: []
		};
		return o && a.children.push({
			type: "text",
			value: "\n"
		}, o), a;
	}(("string" != typeof (r = {
		extensions: [bv([
			{ text: wb },
			{
				document: { 91: {
					name: "gfmFootnoteDefinition",
					tokenize: wT,
					continuation: { tokenize: wE },
					exit: wI
				} },
				text: {
					91: {
						name: "gfmFootnoteCall",
						tokenize: wM
					},
					93: {
						name: "gfmPotentialFootnoteCall",
						add: "after",
						tokenize: wA,
						resolveTo: wP
					}
				}
			},
			function(e) {
				let t = (e || {}).singleTilde, r = {
					name: "strikethrough",
					tokenize: function(e, r, i) {
						let o = this.previous, a = this.events, l = 0;
						return function(s) {
							return 126 === o && "characterEscape" !== a[a.length - 1][1].type ? i(s) : (e.enter("strikethroughSequenceTemporary"), function a(s) {
								let u = bF(o);
								if (126 === s) return l > 1 ? i(s) : (e.consume(s), l++, a);
								if (l < 2 && !t) return i(s);
								let c = e.exit("strikethroughSequenceTemporary"), f = bF(s);
								return c._open = !f || 2 === f && !!u, c._close = !u || 2 === u && !!f, r(s);
							}(s));
						};
					},
					resolveAll: function(e, t) {
						let r = -1;
						for (; ++r < e.length;) if ("enter" === e[r][0] && "strikethroughSequenceTemporary" === e[r][1].type && e[r][1]._close) {
							let i = r;
							for (; i--;) if ("exit" === e[i][0] && "strikethroughSequenceTemporary" === e[i][1].type && e[i][1]._open && e[r][1].end.offset - e[r][1].start.offset == e[i][1].end.offset - e[i][1].start.offset) {
								e[r][1].type = "strikethroughSequence", e[i][1].type = "strikethroughSequence";
								let o = {
									type: "strikethrough",
									start: Object.assign({}, e[i][1].start),
									end: Object.assign({}, e[r][1].end)
								}, a = {
									type: "strikethroughText",
									start: Object.assign({}, e[i][1].end),
									end: Object.assign({}, e[r][1].start)
								}, l = [
									[
										"enter",
										o,
										t
									],
									[
										"enter",
										e[i][1],
										t
									],
									[
										"exit",
										e[i][1],
										t
									],
									[
										"enter",
										a,
										t
									]
								], s = t.parser.constructs.insideSpan.null;
								s && bm(l, l.length, 0, bz(s, e.slice(i + 1, r), t)), bm(l, l.length, 0, [
									[
										"exit",
										a,
										t
									],
									[
										"enter",
										e[r][1],
										t
									],
									[
										"exit",
										e[r][1],
										t
									],
									[
										"exit",
										o,
										t
									]
								]), bm(e, i - 1, r - i + 3, l), r = i + l.length - 2;
								break;
							}
						}
						for (r = -1; ++r < e.length;) "strikethroughSequenceTemporary" === e[r][1].type && (e[r][1].type = "data");
						return e;
					}
				};
				return t ??= !0, {
					text: { 126: r },
					insideSpan: { null: [r] },
					attentionMarkers: { null: [126] }
				};
			}(void 0),
			{ flow: { null: {
				name: "table",
				tokenize: wj,
				resolveAll: w$
			} } },
			{ text: { 91: wF } }
		]), {
			text: { 58: wX },
			flow: { 58: [wW, wG] }
		}],
		mdastExtensions: [[
			{
				transforms: [xY],
				enter: {
					literalAutolink: xq,
					literalAutolinkEmail: xK,
					literalAutolinkHttp: xK,
					literalAutolinkWww: xK
				},
				exit: {
					literalAutolink: xX,
					literalAutolinkEmail: xZ,
					literalAutolinkHttp: xG,
					literalAutolinkWww: xJ
				}
			},
			{
				enter: {
					gfmFootnoteCallString: x2,
					gfmFootnoteCall: x4,
					gfmFootnoteDefinitionLabelString: x3,
					gfmFootnoteDefinition: x5
				},
				exit: {
					gfmFootnoteCallString: x6,
					gfmFootnoteCall: x9,
					gfmFootnoteDefinitionLabelString: x8,
					gfmFootnoteDefinition: x7
				}
			},
			{
				canContainEols: ["delete"],
				enter: { strikethrough: we },
				exit: { strikethrough: wt }
			},
			{
				enter: {
					table: wn,
					tableData: wa,
					tableHeader: wa,
					tableRow: wi
				},
				exit: {
					codeText: wl,
					table: wr,
					tableData: wo,
					tableHeader: wo,
					tableRow: wo
				}
			},
			{ exit: {
				taskListCheckValueChecked: wu,
				taskListCheckValueUnchecked: wu,
				paragraph: wc
			} }
		], {
			canContainEols: ["textDirective"],
			enter: {
				directiveContainer: w9,
				directiveContainerAttributes: ki,
				directiveContainerLabel: kn,
				directiveLeaf: w8,
				directiveLeafAttributes: ki,
				directiveText: w7,
				directiveTextAttributes: ki
			},
			exit: {
				directiveContainer: kc,
				directiveContainerAttributeClassValue: ka,
				directiveContainerAttributeIdValue: ko,
				directiveContainerAttributeName: ks,
				directiveContainerAttributeValue: kl,
				directiveContainerAttributes: ku,
				directiveContainerLabel: kr,
				directiveContainerName: kt,
				directiveLeaf: kc,
				directiveLeafAttributeClassValue: ka,
				directiveLeafAttributeIdValue: ko,
				directiveLeafAttributeName: ks,
				directiveLeafAttributeValue: kl,
				directiveLeafAttributes: ku,
				directiveLeafName: kt,
				directiveText: kc,
				directiveTextAttributeClassValue: ka,
				directiveTextAttributeIdValue: ko,
				directiveTextAttributeName: ks,
				directiveTextAttributeValue: kl,
				directiveTextAttributes: ku,
				directiveTextName: kt
			}
		}]
	}) && (i = r, r = void 0), (function(e) {
		let t = {
			transforms: [],
			canContainEols: [
				"emphasis",
				"fragment",
				"heading",
				"paragraph",
				"strong"
			],
			enter: {
				autolink: i(b),
				autolinkProtocol: c,
				autolinkEmail: c,
				atxHeading: i(m),
				blockQuote: i(function() {
					return {
						type: "blockquote",
						children: []
					};
				}),
				characterEscape: c,
				characterReference: c,
				codeFenced: i(h),
				codeFencedFenceInfo: o,
				codeFencedFenceMeta: o,
				codeIndented: i(h, o),
				codeText: i(function() {
					return {
						type: "inlineCode",
						value: ""
					};
				}, o),
				codeTextData: c,
				data: c,
				codeFlowValue: c,
				definition: i(function() {
					return {
						type: "definition",
						identifier: "",
						label: null,
						title: null,
						url: ""
					};
				}),
				definitionDestinationString: o,
				definitionLabelString: o,
				definitionTitleString: o,
				emphasis: i(function() {
					return {
						type: "emphasis",
						children: []
					};
				}),
				hardBreakEscape: i(g),
				hardBreakTrailing: i(g),
				htmlFlow: i(y, o),
				htmlFlowData: c,
				htmlText: i(y, o),
				htmlTextData: c,
				image: i(function() {
					return {
						type: "image",
						title: null,
						url: "",
						alt: null
					};
				}),
				label: o,
				link: i(b),
				listItem: i(function(e) {
					return {
						type: "listItem",
						spread: e._spread,
						checked: null,
						children: []
					};
				}),
				listItemValue: function(e) {
					this.data.expectingFirstListItemValue && (this.stack[this.stack.length - 2].start = Number.parseInt(this.sliceSerialize(e), 10), this.data.expectingFirstListItemValue = void 0);
				},
				listOrdered: i(x, function() {
					this.data.expectingFirstListItemValue = !0;
				}),
				listUnordered: i(x),
				paragraph: i(function() {
					return {
						type: "paragraph",
						children: []
					};
				}),
				reference: function() {
					this.data.referenceType = "collapsed";
				},
				referenceString: o,
				resourceDestinationString: o,
				resourceTitleString: o,
				setextHeading: i(m),
				strong: i(function() {
					return {
						type: "strong",
						children: []
					};
				}),
				thematicBreak: i(function() {
					return { type: "thematicBreak" };
				})
			},
			exit: {
				atxHeading: l(),
				atxHeadingSequence: function(e) {
					let t = this.stack[this.stack.length - 1];
					t.depth || (t.depth = this.sliceSerialize(e).length);
				},
				autolink: l(),
				autolinkEmail: function(e) {
					f.call(this, e), this.stack[this.stack.length - 1].url = "mailto:" + this.sliceSerialize(e);
				},
				autolinkProtocol: function(e) {
					f.call(this, e), this.stack[this.stack.length - 1].url = this.sliceSerialize(e);
				},
				blockQuote: l(),
				characterEscapeValue: f,
				characterReferenceMarkerHexadecimal: p,
				characterReferenceMarkerNumeric: p,
				characterReferenceValue: function(e) {
					let t, r = this.sliceSerialize(e), i = this.data.characterReferenceType;
					i ? (t = bb(r, "characterReferenceMarkerNumeric" === i ? 10 : 16), this.data.characterReferenceType = void 0) : t = bh(r);
					let o = this.stack[this.stack.length - 1];
					o.value += t;
				},
				characterReference: function(e) {
					this.stack.pop().position.end = xN(e.end);
				},
				codeFenced: l(function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
				}),
				codeFencedFence: function() {
					this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
				},
				codeFencedFenceInfo: function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].lang = e;
				},
				codeFencedFenceMeta: function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].meta = e;
				},
				codeFlowValue: f,
				codeIndented: l(function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].value = e.replace(/(\r?\n|\r)$/g, "");
				}),
				codeText: l(function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].value = e;
				}),
				codeTextData: f,
				data: f,
				definition: l(),
				definitionDestinationString: function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].url = e;
				},
				definitionLabelString: function(e) {
					let t = this.resume(), r = this.stack[this.stack.length - 1];
					r.label = t, r.identifier = bx(this.sliceSerialize(e)).toLowerCase();
				},
				definitionTitleString: function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].title = e;
				},
				emphasis: l(),
				hardBreakEscape: l(d),
				hardBreakTrailing: l(d),
				htmlFlow: l(function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].value = e;
				}),
				htmlFlowData: f,
				htmlText: l(function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].value = e;
				}),
				htmlTextData: f,
				image: l(function() {
					let e = this.stack[this.stack.length - 1];
					if (this.data.inReference) {
						let t = this.data.referenceType || "shortcut";
						e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
					} else delete e.identifier, delete e.label;
					this.data.referenceType = void 0;
				}),
				label: function() {
					let e = this.stack[this.stack.length - 1], t = this.resume(), r = this.stack[this.stack.length - 1];
					this.data.inReference = !0, "link" === r.type ? r.children = e.children : r.alt = t;
				},
				labelText: function(e) {
					let t = this.sliceSerialize(e), r = this.stack[this.stack.length - 2];
					r.label = t.replace(xE, xI), r.identifier = bx(t).toLowerCase();
				},
				lineEnding: function(e) {
					let r = this.stack[this.stack.length - 1];
					if (this.data.atHardBreak) {
						r.children[r.children.length - 1].position.end = xN(e.end), this.data.atHardBreak = void 0;
						return;
					}
					!this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(r.type) && (c.call(this, e), f.call(this, e));
				},
				link: l(function() {
					let e = this.stack[this.stack.length - 1];
					if (this.data.inReference) {
						let t = this.data.referenceType || "shortcut";
						e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
					} else delete e.identifier, delete e.label;
					this.data.referenceType = void 0;
				}),
				listItem: l(),
				listOrdered: l(),
				listUnordered: l(),
				paragraph: l(),
				referenceString: function(e) {
					let t = this.resume(), r = this.stack[this.stack.length - 1];
					r.label = t, r.identifier = bx(this.sliceSerialize(e)).toLowerCase(), this.data.referenceType = "full";
				},
				resourceDestinationString: function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].url = e;
				},
				resourceTitleString: function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].title = e;
				},
				resource: function() {
					this.data.inReference = void 0;
				},
				setextHeading: l(function() {
					this.data.setextHeadingSlurpLineEnding = void 0;
				}),
				setextHeadingLineSequence: function(e) {
					this.stack[this.stack.length - 1].depth = 61 === this.sliceSerialize(e).codePointAt(0) ? 1 : 2;
				},
				setextHeadingText: function() {
					this.data.setextHeadingSlurpLineEnding = !0;
				},
				strong: l(),
				thematicBreak: l()
			}
		};
		(function e(t, r) {
			let i = -1;
			for (; ++i < r.length;) {
				let o = r[i];
				Array.isArray(o) ? e(t, o) : function(e, t) {
					let r;
					for (r in t) if (xR.call(t, r)) switch (r) {
						case "canContainEols": {
							let i = t[r];
							i && e[r].push(...i);
							break;
						}
						case "transforms": {
							let i = t[r];
							i && e[r].push(...i);
							break;
						}
						case "enter":
						case "exit": {
							let i = t[r];
							i && Object.assign(e[r], i);
						}
					}
				}(t, o);
			}
		})(t, (e || {}).mdastExtensions || []);
		let r = {};
		return function(e) {
			let i = {
				type: "root",
				children: []
			}, l = {
				stack: [i],
				tokenStack: [],
				config: t,
				enter: a,
				exit: s,
				buffer: o,
				resume: u,
				data: r
			}, c = [], f = -1;
			for (; ++f < e.length;) ("listOrdered" === e[f][1].type || "listUnordered" === e[f][1].type) && ("enter" === e[f][0] ? c.push(f) : f = function(e, t, r) {
				let i, o, a, l, s = t - 1, u = -1, c = !1;
				for (; ++s <= r;) {
					let t = e[s];
					switch (t[1].type) {
						case "listUnordered":
						case "listOrdered":
						case "blockQuote":
							"enter" === t[0] ? u++ : u--, l = void 0;
							break;
						case "lineEndingBlank":
							"enter" === t[0] && (!i || l || u || a || (a = s), l = void 0);
							break;
						case "linePrefix":
						case "listItemValue":
						case "listItemMarker":
						case "listItemPrefix":
						case "listItemPrefixWhitespace": break;
						default: l = void 0;
					}
					if (!u && "enter" === t[0] && "listItemPrefix" === t[1].type || -1 === u && "exit" === t[0] && ("listUnordered" === t[1].type || "listOrdered" === t[1].type)) {
						if (i) {
							let l = s;
							for (o = void 0; l--;) {
								let t = e[l];
								if ("lineEnding" === t[1].type || "lineEndingBlank" === t[1].type) {
									if ("exit" === t[0]) continue;
									o && (e[o][1].type = "lineEndingBlank", c = !0), t[1].type = "lineEnding", o = l;
								} else if ("linePrefix" === t[1].type || "blockQuotePrefix" === t[1].type || "blockQuotePrefixWhitespace" === t[1].type || "blockQuoteMarker" === t[1].type || "listItemIndent" === t[1].type);
								else break;
							}
							a && (!o || a < o) && (i._spread = !0), i.end = Object.assign({}, o ? e[o][1].start : t[1].end), e.splice(o || s, 0, [
								"exit",
								i,
								t[2]
							]), s++, r++;
						}
						if ("listItemPrefix" === t[1].type) {
							let o = {
								type: "listItem",
								_spread: !1,
								start: Object.assign({}, t[1].start),
								end: void 0
							};
							i = o, e.splice(s, 0, [
								"enter",
								o,
								t[2]
							]), s++, r++, a = void 0, l = !0;
						}
					}
				}
				return e[t][1]._spread = c, r;
			}(e, c.pop(), f));
			for (f = -1; ++f < e.length;) {
				let r = t[e[f][0]];
				xR.call(r, e[f][1].type) && r[e[f][1].type].call(Object.assign({ sliceSerialize: e[f][2].sliceSerialize }, l), e[f][1]);
			}
			if (l.tokenStack.length > 0) {
				let e = l.tokenStack[l.tokenStack.length - 1];
				(e[1] || xF).call(l, void 0, e[0]);
			}
			for (i.position = {
				start: xN(e.length > 0 ? e[0][1].start : {
					line: 1,
					column: 1,
					offset: 0
				}),
				end: xN(e.length > 0 ? e[e.length - 2][1].end : {
					line: 1,
					column: 1,
					offset: 0
				})
			}, f = -1; ++f < t.transforms.length;) i = t.transforms[f](i) || i;
			return i;
		};
		function i(e, t) {
			return function(r) {
				a.call(this, e(r), r), t && t.call(this, r);
			};
		}
		function o() {
			this.stack.push({
				type: "fragment",
				children: []
			});
		}
		function a(e, t, r) {
			this.stack[this.stack.length - 1].children.push(e), this.stack.push(e), this.tokenStack.push([t, r || void 0]), e.position = {
				start: xN(t.start),
				end: void 0
			};
		}
		function l(e) {
			return function(t) {
				e && e.call(this, t), s.call(this, t);
			};
		}
		function s(e, t) {
			let r = this.stack.pop(), i = this.tokenStack.pop();
			if (i) i[0].type !== e.type && (t ? t.call(this, e, i[0]) : (i[1] || xF).call(this, e, i[0]));
			else throw Error("Cannot close `" + e.type + "` (" + xD({
				start: e.start,
				end: e.end
			}) + "): it’s not open");
			r.position.end = xN(e.end);
		}
		function u() {
			return bf(this.stack.pop(), "boolean" != typeof bc.includeImageAlt || bc.includeImageAlt, "boolean" != typeof bc.includeHtml || bc.includeHtml);
		}
		function c(e) {
			let t = this.stack[this.stack.length - 1].children, r = t[t.length - 1];
			r && "text" === r.type || ((r = {
				type: "text",
				value: ""
			}).position = {
				start: xN(e.start),
				end: void 0
			}, t.push(r)), this.stack.push(r);
		}
		function f(e) {
			let t = this.stack.pop();
			t.value += this.sliceSerialize(e), t.position.end = xN(e.end);
		}
		function d() {
			this.data.atHardBreak = !0;
		}
		function p(e) {
			this.data.characterReferenceType = e.type;
		}
		function h() {
			return {
				type: "code",
				lang: null,
				meta: null,
				value: ""
			};
		}
		function m() {
			return {
				type: "heading",
				depth: 0,
				children: []
			};
		}
		function g() {
			return { type: "break" };
		}
		function y() {
			return {
				type: "html",
				value: ""
			};
		}
		function b() {
			return {
				type: "link",
				title: null,
				url: "",
				children: []
			};
		}
		function x(e) {
			return {
				type: "list",
				ordered: "listOrdered" === e.type,
				start: null,
				spread: e._spread,
				children: []
			};
		}
	})(i)(function(e) {
		for (; !bQ(e););
		return e;
	}((function(e) {
		let t = {
			constructs: bv([xx, ...(e || {}).extensions || []]),
			content: r(bL),
			defined: [],
			document: r(bR),
			flow: r(xp),
			lazy: {},
			string: r(xm),
			text: r(xg)
		};
		return t;
		function r(e) {
			return function(r) {
				return function(e, t, r) {
					let i = {
						_bufferIndex: -1,
						_index: 0,
						line: r && r.line || 1,
						column: r && r.column || 1,
						offset: r && r.offset || 0
					}, o = {}, a = [], l = [], s = [], u = {
						attempt: m(function(e, t) {
							g(e, t.from);
						}),
						check: m(h),
						consume: function(e) {
							bP(e) ? (i.line++, i.column = 1, i.offset += -3 === e ? 2 : 1, y()) : -1 !== e && (i.column++, i.offset++), i._bufferIndex < 0 ? i._index++ : (i._bufferIndex++, i._bufferIndex === l[i._index].length && (i._bufferIndex = -1, i._index++)), c.previous = e;
						},
						enter: function(e, t) {
							let r = t || {};
							return r.type = e, r.start = p(), c.events.push([
								"enter",
								r,
								c
							]), s.push(r), r;
						},
						exit: function(e) {
							let t = s.pop();
							return t.end = p(), c.events.push([
								"exit",
								t,
								c
							]), t;
						},
						interrupt: m(h, { interrupt: !0 })
					}, c = {
						code: null,
						containerState: {},
						defineSkip: function(e) {
							o[e.line] = e.column, y();
						},
						events: [],
						now: p,
						parser: e,
						previous: null,
						sliceSerialize: function(e, t) {
							return function(e, t) {
								let r, i = -1, o = [];
								for (; ++i < e.length;) {
									let a, l = e[i];
									if ("string" == typeof l) a = l;
									else switch (l) {
										case -5:
											a = "\r";
											break;
										case -4:
											a = "\n";
											break;
										case -3:
											a = "\r\n";
											break;
										case -2:
											a = t ? " " : "	";
											break;
										case -1:
											if (!t && r) continue;
											a = " ";
											break;
										default: a = String.fromCharCode(l);
									}
									r = -2 === l, o.push(a);
								}
								return o.join("");
							}(d(e), t);
						},
						sliceStream: d,
						write: function(e) {
							return (l = bg(l, e), function() {
								let e;
								for (; i._index < l.length;) {
									let r = l[i._index];
									if ("string" == typeof r) for (e = i._index, i._bufferIndex < 0 && (i._bufferIndex = 0); i._index === e && i._bufferIndex < r.length;) {
										var t = r.charCodeAt(i._bufferIndex);
										f = f(t);
									}
									else f = f(r);
								}
							}(), null !== l[l.length - 1]) ? [] : (g(t, 0), c.events = bz(a, c.events, c), c.events);
						}
					}, f = t.tokenize.call(c, u);
					return t.resolveAll && a.push(t), c;
					function d(e) {
						return function(e, t) {
							let r, i = t.start._index, o = t.start._bufferIndex, a = t.end._index, l = t.end._bufferIndex;
							if (i === a) r = [e[i].slice(o, l)];
							else {
								if (r = e.slice(i, a), o > -1) {
									let e = r[0];
									"string" == typeof e ? r[0] = e.slice(o) : r.shift();
								}
								l > 0 && r.push(e[a].slice(0, l));
							}
							return r;
						}(l, e);
					}
					function p() {
						let { _bufferIndex: e, _index: t, line: r, column: o, offset: a } = i;
						return {
							_bufferIndex: e,
							_index: t,
							line: r,
							column: o,
							offset: a
						};
					}
					function h(e, t) {
						t.restore();
					}
					function m(e, t) {
						return function(r, o, a) {
							var l;
							let f, d, h, m;
							return Array.isArray(r) ? g(r) : "tokenize" in r ? g([r]) : (l = r, function(e) {
								let t = null !== e && l[e], r = null !== e && l.null;
								return g([...Array.isArray(t) ? t : t ? [t] : [], ...Array.isArray(r) ? r : r ? [r] : []])(e);
							});
							function g(e) {
								return (f = e, d = 0, 0 === e.length) ? a : b(e[d]);
							}
							function b(e) {
								return function(r) {
									return (m = function() {
										let e = p(), t = c.previous, r = c.currentConstruct, o = c.events.length, a = Array.from(s);
										return {
											from: o,
											restore: function() {
												i = e, c.previous = t, c.currentConstruct = r, c.events.length = o, s = a, y();
											}
										};
									}(), h = e, e.partial || (c.currentConstruct = e), e.name && c.parser.constructs.disable.null.includes(e.name)) ? w(r) : e.tokenize.call(t ? Object.assign(Object.create(c), t) : c, u, x, w)(r);
								};
							}
							function x(t) {
								return e(h, m), o;
							}
							function w(e) {
								return (m.restore(), ++d < f.length) ? b(f[d]) : a;
							}
						};
					}
					function g(e, t) {
						e.resolveAll && !a.includes(e) && a.push(e), e.resolve && bm(c.events, t, c.events.length - t, e.resolve(c.events.slice(t), c)), e.resolveTo && (c.events = e.resolveTo(c.events, c));
					}
					function y() {
						i.line in o && i.column < 2 && (i.column = o[i.line], i.offset += o[i.line] - 1);
					}
				}(t, e, r);
			};
		}
	})(i).document().write((a = 1, l = "", s = !0, function(e, t, r) {
		let i, u, c, f, d, p = [];
		for (e = l + ("string" == typeof e ? e.toString() : new TextDecoder(t || void 0).decode(e)), c = 0, l = "", s && (65279 === e.charCodeAt(0) && c++, s = void 0); c < e.length;) {
			if (xT.lastIndex = c, f = (i = xT.exec(e)) && void 0 !== i.index ? i.index : e.length, d = e.charCodeAt(f), !i) {
				l = e.slice(c);
				break;
			}
			if (10 === d && c === f && o) p.push(-3), o = void 0;
			else switch (o && (p.push(-5), o = void 0), c < f && (p.push(e.slice(c, f)), a += f - c), d) {
				case 0:
					p.push(65533), a++;
					break;
				case 9:
					for (u = 4 * Math.ceil(a / 4), p.push(-2); a++ < u;) p.push(-1);
					break;
				case 10:
					p.push(-4), a = 1;
					break;
				default: o = !0, a = 1;
			}
			c = f + 1;
		}
		return r && (o && p.push(-5), l && p.push(l), p.push(null)), p;
	})(t, r, !0))))));
	return (function({ components: e }) {
		return function(t) {
			return function(e, t) {
				var r, i, o, a;
				let l;
				if (!t || void 0 === t.Fragment) throw TypeError("Expected `Fragment` in options");
				let s = t.filePath || void 0;
				if (t.development) {
					if ("function" != typeof t.jsxDEV) throw TypeError("Expected `jsxDEV` in options when `development: true`");
					r = s, i = t.jsxDEV, l = function(e, t, o, a) {
						let l = Array.isArray(o.children), s = k1(e);
						return i(t, o, a, l, {
							columnNumber: s ? s.column - 1 : void 0,
							fileName: r,
							lineNumber: s ? s.line : void 0
						}, void 0);
					};
				} else {
					if ("function" != typeof t.jsx) throw TypeError("Expected `jsx` in production options");
					if ("function" != typeof t.jsxs) throw TypeError("Expected `jsxs` in production options");
					o = t.jsx, a = t.jsxs, l = function(e, t, r, i) {
						let l = Array.isArray(r.children) ? a : o;
						return i ? l(t, r, i) : l(t, r);
					};
				}
				let u = {
					Fragment: t.Fragment,
					ancestors: [],
					components: t.components || {},
					create: l,
					elementAttributeNameCase: t.elementAttributeNameCase || "react",
					evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
					filePath: s,
					ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
					passKeys: !1 !== t.passKeys,
					passNode: t.passNode || !1,
					schema: "svg" === t.space ? kJ : kG,
					stylePropertyNameCase: t.stylePropertyNameCase || "dom",
					tableCellAlignToStyle: !1 !== t.tableCellAlignToStyle
				}, c = _t(u, e, void 0);
				return c && "string" != typeof c ? c : u.create(e, u.Fragment, { children: c || void 0 }, void 0);
			}(t, {
				Fragment: sO,
				jsx: hb,
				jsxs: hv,
				components: e
			});
		};
	})({ components: e.components ?? {} })(u);
})), {
	displayName: "Markdown",
	props: ["text", "components"]
}), _T = yU("button", {
	displayName: "ButtonBase",
	props: [
		"hover",
		"focus",
		"active",
		"disabled"
	]
})({
	textStyle: "sys.label-large",
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	textDecoration: "none",
	outline: "none",
	overflow: "hidden",
	border: 0,
	margin: 0,
	userSelect: "none",
	cursor: "pointer",
	_disabled: { cursor: "not-allowed" },
	gap: 4,
	h: 36,
	px: 16,
	rounded: "xs",
	transitionDuration: "md4",
	transitionTimingFunction: "standard-accelerate",
	bg: "none",
	pos: "relative",
	zIndex: 0,
	_$before: {
		content: "\"\"",
		pos: "absolute",
		top: 0,
		right: 0,
		left: 0,
		bottom: 0,
		zIndex: -1,
		transitionDuration: "md1",
		transitionTimingFunction: "standard-accelerate"
	},
	$data_icon: {
		boxSize: 18,
		_data_placement__start: { ml: -8 },
		_data_placement__end: { mr: -8 }
	}
}), _E = yU(_T, { displayName: "FilledButton" })({
	containerStyle: "sys.primary",
	py: 6,
	px: 16,
	_hover: {
		shadow: "1",
		_$before: { bgColor: go("white", gi(.08)) }
	},
	_focus: {
		shadow: "1",
		_$before: { bgColor: go("white", gi(.12)) }
	},
	_active: {
		shadow: "1",
		_$before: { bgColor: go("white", gi(.12)) }
	},
	_disabled: {
		shadow: "0",
		color: go("sys.on-surface", gi(.38)),
		bgColor: "rgba(0,0,0,0)",
		_$before: { bgColor: go("sys.on-surface", gi(.12)) }
	}
}), _I = yU(_T, { displayName: "TextButton" })({
	extends: [{
		px: 16,
		$data_icon: {
			_data_placement__start: { ml: -4 },
			_data_placement__end: { mr: -4 }
		}
	}],
	color: "sys.primary",
	_$before: { bgColor: "rgba(0,0,0,0)" },
	_hover: { _$before: { bgColor: go("sys.primary", gi(.08)) } },
	_focus: { _$before: { bgColor: go("sys.primary", gi(.12)) } },
	_active: { _$before: { bgColor: go("sys.primary", gi(.12)) } },
	_disabled: {
		color: go("sys.on-surface", gi(.38)),
		bgColor: "rgba(0,0,0,0)",
		_$before: { bgColor: "rgba(0,0,0,0)" }
	}
}), _D = "M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22 2 17.5 2 12 6.5 2 12 2M12 4C10.1 4 8.4 4.6 7.1 5.7L18.3 16.9C19.3 15.5 20 13.8 20 12C20 7.6 16.4 4 12 4M16.9 18.3L5.7 7.1C4.6 8.4 4 10.1 4 12C4 16.4 7.6 20 12 20C13.9 20 15.6 19.4 16.9 18.3Z", _j = "M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z", _$ = "M11,18H13V16H11V18M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z", _L = yU("span", (e, {}) => (t) => {
	let r = e.size ?? 24;
	return hb(t, {
		"data-icon": !0,
		"data-placement": e.placement,
		"data-has-size": !!e.size,
		children: hb("svg", {
			viewBox: `0 0 ${r} ${r}`,
			width: r,
			height: r,
			children: hb("path", {
				d: e.path,
				children: e.animate && hb("animateTransform", {
					attributeName: "transform",
					attributeType: "XML",
					type: "rotate",
					repeatCount: "indefinite",
					dur: "1s",
					from: `0 ${r / 2} ${r / 2}`,
					to: `360 ${r / 2} ${r / 2}`
				})
			})
		})
	});
}, {
	displayName: "Icon",
	props: [
		"path",
		"placement",
		"animate",
		"size"
	]
})({
	display: "inline-block",
	_data_has_size__false: {
		boxSize: "1.2em",
		"& svg": {
			w: "100%",
			h: "100%"
		}
	}
}), _R = yU(_I, { displayName: "IconButton" })({
	boxSize: 36,
	p: 0,
	color: "sys.on-surface-variant",
	[`${_L}`]: { boxSize: 18 }
});
let _N = gf({
	from: { opacity: 0 },
	to: { opacity: 1 },
	duration: gc.duration.md1,
	easing: gc.easing.standard.accelerate
}, {
	from: { opacity: 1 },
	to: { opacity: 0 },
	duration: gc.duration.sm4,
	easing: gc.easing.standard.decelerate
});
gc.duration.sm4, gc.easing.standard.decelerate, gc.duration.sm1, gc.easing.standard.accelerate, gc.duration.sm4, gc.easing.standard.decelerate, gc.duration.sm1, gc.easing.standard.accelerate, gc.duration.sm4, gc.easing.standard.decelerate, gc.duration.sm1, gc.easing.standard.accelerate, gc.duration.sm4, gc.easing.standard.decelerate, gc.duration.sm1, gc.easing.standard.accelerate;
var _F = yU("div", { displayName: "TooltipContainer" })({
	mt: 4,
	py: 2,
	px: 8,
	rounded: "xs",
	shadow: "3",
	containerStyle: "sys.on-surface",
	textStyle: "sys.body-small",
	pos: "relative",
	pointerEvents: "none",
	maxW: "24vw",
	zIndex: 100
}), _z = fL((e, { slots: t }) => {
	let r = aP(!1), i = aP(null);
	return () => {
		let o = t.default ? t.default()[0] : null, a = t.title ? t.title() : e.title;
		return a ? hb(v0, {
			isOpen: r.value,
			onClickOutside: () => r.value = !1,
			$transition: ({ content: e }) => hb(_N, { children: e }),
			$content: hb(_F, { children: a }),
			children: o ? sN(o, {
				onVnodeMounted: (e) => {
					i.value = function e(t) {
						if (t) {
							if (t instanceof HTMLElement) return t;
							if (t instanceof Text) return e(t.nextElementSibling);
						}
						return null;
					}(e.el);
				},
				onMouseover: () => {
					r.value = !0;
				},
				onMouseleave: () => {
					r.value = !1;
				}
			}) : null
		}) : o;
	};
}, {
	displayName: "Tooltip",
	props: ["title"]
});
var _V = yU("div", { displayName: "Container" })({
	pos: "absolute",
	top: 0,
	left: 0,
	h: "100vh",
	w: "100vw",
	zIndex: 100,
	display: "flex",
	alignItems: "center",
	justifyContent: "center"
}), _B = yU("div", { displayName: "DialogBackdrop" })({
	cursor: "pointer",
	pos: "absolute",
	top: 0,
	left: 0,
	h: "100vh",
	w: "100vw",
	zIndex: -1,
	bgColor: go("sys.scrim", gi(.38))
}), _H = gf({
	from: { opacity: 0 },
	to: { opacity: 1 },
	duration: gc.duration.md1,
	easing: gc.easing.standard.accelerate
}, {
	from: { opacity: 1 },
	to: { opacity: 0 },
	duration: gc.duration.sm4,
	easing: gc.easing.standard.accelerate
}), _W = fL((e, { slots: t, emit: r }) => {
	let i = aP(e.isOpen ?? !1), o = aP(!1);
	return sg(() => e.isOpen, (e) => {
		!0 === e ? i.value = !0 : !1 === e && (o.value = !1);
	}, void 0), () => hb(yX, {
		isOpen: i.value,
		onContentBeforeMount: () => {
			o.value = !0;
		},
		onEscKeydown: () => {
			o.value = !1;
		},
		children: hv(_V, { children: [hb(_H, {
			onComplete: (e) => {
				"leave" === e && (i.value = !1, r("close"));
			},
			children: o.value ? hb(_B, { onClick: () => {
				o.value = !1;
			} }) : null
		}), t.default?.()] })
	});
}, {
	displayName: "Dialog",
	props: ["isOpen"],
	emits: ["close"]
});
gc.duration.sm4, gc.easing.standard.accelerate, gc.duration.sm1, gc.easing.standard.accelerate;
var _U = yU("div", { displayName: "Token" })({
	display: "inline-table",
	textStyle: "sys.label-small",
	fontWeight: "bold",
	fontFamily: "inherit",
	fontSize: 11,
	lineHeight: 14
}), _q = yU("div", {
	displayName: "PropName",
	props: [
		"deprecated",
		"optional",
		"nullable"
	]
})({
	display: "inline-table",
	textStyle: "sys.label-small",
	fontWeight: "bold",
	fontFamily: "inherit",
	fontSize: 11,
	lineHeight: 14,
	color: "sys.primary",
	_deprecated: { textDecoration: "line-through" },
	_nullable: { "&:after": {
		content: "\"??\"",
		color: "sys.error"
	} },
	_optional: { "&:after": {
		content: "\"?\"",
		color: "sys.secondary"
	} }
}), _K = yU("div", (e, { slots: t }) => {
	let r = _X.use();
	return (i) => hb(i, {
		style: {
			paddingLeft: `${r.indent}em`,
			marginTop: (e.spacing ?? 0) * .5
		},
		children: t.default?.()
	});
}, {
	displayName: "Line",
	props: ["spacing"]
})({
	position: "relative",
	display: "block"
}), _G = yU("div", (e, {}) => (t) => {
	let r = cS.metaProp(e.schema, "title") ?? "", i = cS.metaProp(e.schema, "description") ?? "";
	return hv(t, { children: [
		r,
		" ",
		i ? hb(_z, {
			$title: hb(_J, { children: hb(_M, { text: i }) }),
			children: hb(_L, { path: _$ })
		}) : null
	] });
}, {
	displayName: "Description",
	props: ["schema"]
})({
	position: "relative",
	pt: 8,
	display: "flex",
	alignItems: "center",
	gap: 4,
	"&::before": {
		content: "\"// \"",
		fontFamily: "code"
	},
	textStyle: "sys.body-small",
	fontSize: 10,
	lineHeight: 12,
	[`${_L}`]: {
		width: 12,
		height: 12,
		overflow: "hidden"
	}
}), _J = yU("div", { displayName: "MarkdownContainer" })({
	textStyle: "sys.body-small",
	"& p": {
		my: 1,
		wordBreak: "keep-all",
		whiteSpace: "nowrap",
		opacity: .7
	},
	"& code": {
		wordBreak: "keep-all",
		whiteSpace: "nowrap"
	}
}), _Z = ({ name: e, value: t, extra: r }) => "" == t ? null : hb(_K, { children: hv(_U, {
	sx: {
		opacity: .7,
		fontSize: "0.9em",
		wordBreak: "keep-all",
		whiteSpace: "nowrap"
	},
	children: [
		hb(_U, {
			sx: { color: "sys.primary" },
			children: `@${e}(`
		}),
		`${t}`,
		Object.entries(r ?? {}).map(([e, t]) => ig(t) ? null : hv(sO, { children: [
			hv(_U, {
				sx: { opacity: .5 },
				children: [",", "\xA0"]
			}),
			hb(_U, {
				sx: { opacity: .5 },
				children: e
			}),
			hv(_U, {
				sx: { opacity: .5 },
				children: [":", "\xA0"]
			}),
			hb(_U, {
				sx: { opacity: .7 },
				children: t
			})
		] })),
		hb(_U, {
			sx: { color: "sys.primary" },
			children: ")"
		})
	]
}) }), _X = hS(() => ({ indent: 0 }), { name: "IntentContext" }), _Y = fL(({}, { slots: e }) => {
	let t = _X.use();
	return () => hb(_X, {
		value: { indent: t.indent + 1 },
		children: e.default?.()
	});
}, { displayName: "Indent" }), _Q = class e {
	constructor(e, t) {
		this.id = e, this.parent = t;
	}
	child(t) {
		return new e(t, this);
	}
	safe(e) {
		let t = this;
		for (; t;) {
			if (t.id == e) return !1;
			t = t.parent;
		}
		return !0;
	}
}, _0 = hS(() => new _Q("")), _1 = h_((e) => {
	let t = _0.use(), r = _X.use(), i = hg(!1);
	return () => {
		let o = e.schema, a = cS.schemaProp(e.schema, "$ref"), l = "intersection" == (o = cS.schemaProp(e.schema, cS.unwrap)()).type || "object" == o.type || "union" == o.type || "record" == o.type || "array" == o.type || "union" == o.type, s = t.safe(a) && hv(sO, { children: [hb("span", { children: "\xA0" }), hb(_4, { schema: o })] });
		return hb(_0, {
			value: t.child(a),
			children: l ? r.indent < 3 ? hv(sO, { children: [hb(dz, {
				to: `#${a}`,
				"data-index": r.indent,
				children: hb(_U, {
					id: a,
					children: a
				})
			}), s] }) : hv(sO, { children: [hb(yW, {
				component: dz,
				sx: {},
				to: `#${a}`,
				"data-index": r.indent,
				onClick: (e) => {
					t.safe(a) && (e.preventDefault(), e.stopPropagation(), i.next(!0));
				},
				children: hb(_U, {
					id: a,
					children: a
				})
			}), t.safe(a) && hb(_W, {
				isOpen: i.value,
				onClose: () => {
					i.next(!1);
				},
				children: hb(_2, { children: hv(_K, { children: [hb(_U, { children: a }), hb(_X, {
					value: { indent: 0 },
					children: s
				})] }) })
			})] }) : s
		});
	};
}, {
	displayName: "SchemaViewLink",
	props: ["schema"]
}), _2 = yU("div", { displayName: "DialogContainer" })({
	display: "flex",
	containerStyle: "sys.surface",
	height: "100vh",
	width: "36vw",
	roundedLeft: "sm",
	px: 16,
	py: 36,
	top: 0,
	right: 0,
	position: "absolute",
	overflow: "auto"
}), _4 = h_((e) => {
	let t = e.schema;
	return cS.schemaProp(t, "$ref") ? hb(_1, { schema: t }) : () => {
		switch (t.type) {
			case "union": return hb(sO, { children: cS.schemaProp(t, "oneOf")?.map((e, t) => hv(sO, { children: [t > 0 && hv(_U, { children: [
				"\xA0",
				" | ",
				"\xA0"
			] }), hb(_4, { schema: e })] })) });
			case "intersection": return hb(_U, { children: cS.schemaProp(t, "allOf")?.filter((e) => !Object.keys(e).length).map((e, t) => hv(sO, { children: [t > 0 && hv(_U, { children: [
				"\xA0",
				"&",
				"\xA0"
			] }), hb(_4, { schema: e })] })) });
			case "array": return hv(_U, {
				sx: {
					wordBreak: "keep-all",
					whiteSpace: "nowrap"
				},
				children: [
					hb(_U, { children: "Array<" }),
					hb(_4, { schema: cS.schemaProp(t, "items") ?? cY() }),
					hb(_U, { children: ">" })
				]
			});
			case "object": return hv(sO, { children: [
				hb(_U, { children: "{" }),
				hb(_Y, { children: hb(sO, { children: Object.entries(cS.schemaProp(t, "properties") ?? {}).map(([e, r]) => r ? hb(sO, { children: hv(_K, {
					spacing: 2,
					children: [hb(_G, { schema: r }), hv(_U, {
						sx: {
							wordBreak: "keep-all",
							whiteSpace: "nowrap"
						},
						children: [
							hb(_q, {
								nullable: cS.schemaProp(t, "nullable"),
								deprecated: cS.schemaProp(t, "deprecated"),
								optional: !(cS.schemaProp(t, "required") ?? []).includes(e),
								children: e
							}),
							hb(_U, {
								sx: { mr: "1em" },
								children: ":"
							}),
							hb(_4, { schema: r })
						]
					})]
				}) }) : null) }) }),
				hb(_U, { children: "}" })
			] });
			case "record": return hv(sO, { children: [
				hb(_U, { children: "{" }),
				cS.schemaProp(t, "additionalProperties") && hb(sO, { children: hb(_Y, { children: hv(_K, { children: [
					hv(_U, {
						sx: { mr: 1 },
						children: ["[K:", "\xA0"]
					}),
					hb(_4, { schema: cS.schemaProp(t, "propertyNames") ?? c1() }),
					hv(_U, {
						sx: { mr: 1 },
						children: ["]:", "\xA0"]
					}),
					hb(_4, { schema: cS.schemaProp(t, "additionalProperties") ?? cY() })
				] }) }) }),
				hb(_U, { children: "}" })
			] });
			case "enums": {
				let e = cS.schemaProp(t, "enum") ?? [];
				if (1 == e.length) return hb(_U, { children: JSON.stringify(e[0]) });
				let r = "any";
				return e.length > 0 && (r = typeof e[0]), hv(sO, { children: [hb(_U, {
					sx: { fontWeight: "bold" },
					children: r
				}), hb(_Y, { children: e.map((e, r) => hb(_Z, {
					name: "enum",
					value: `${e}`,
					extra: cS.metaProp(t, "enumLabels")?.[r] ? { label: JSON.stringify(cS.metaProp(t, "enumLabels")[r]) } : {}
				}, e)) })] });
			}
		}
		let [e, r, i] = [
			t.type,
			cS.metaProp(t, "format"),
			cS.metaProp(t, "default")
		];
		return hv(sO, { children: [hb(_U, {
			sx: { fontWeight: "bold" },
			children: e || "any"
		}), hv(_Y, { children: [
			r && hb(_Z, {
				name: "format",
				value: r
			}),
			!ig(i) && hb(_Z, {
				name: "default",
				value: i
			}),
			_3.map((e) => {
				let r = cS.schemaProp(t, e);
				return ig(r) ? null : "pattern" == e ? hb(_Z, {
					name: e,
					value: r,
					extra: { errMsg: cS.metaProp(t, "x-pattern-err-msg") }
				}) : hb(_Z, {
					name: e,
					value: r
				});
			})
		] })] });
	};
}, {
	displayName: "SchemaView",
	props: ["schema"]
}), _3 = [
	"enum",
	"maximum",
	"exclusiveMaximum",
	"minimum",
	"exclusiveMinimum",
	"maxLength",
	"minLength",
	"pattern",
	"maxItems",
	"minItems",
	"maxProperties",
	"minProperties"
], _5 = h_((e) => {
	let t = bn.use();
	return () => {
		var r;
		let i = ((r = e.response["x-status-return-errors"] ?? []) && r.length ? iJ(r) : []).map((e) => (function(e = "") {
			let t = e.indexOf("{");
			return t > -1 ? e.slice(t + 1, e.length - 1).split(",").reduce((e, t) => (e.joining ? e.values[e.values.length - 1] += "," + t : e.values.push(t), t.split("\"").length % 2 == 0 && (e.joining = !e.joining), e), {
				values: [],
				joining: !1
			}).values.reduce((e, t) => {
				let r = t.indexOf("=");
				if (r < 0) return e;
				let i = t.slice(0, r), o = t.slice(r + 1);
				return ig(i) || ig(o) ? e : {
					...e,
					[i]: JSON.parse(o)
				};
			}, { code: e.slice(0, t) }) : null;
		})(e));
		return hv(_8, { children: [hb(_7, {
			"data-failed": function(e) {
				try {
					return Number(e) >= 400;
				} catch (e) {
					return !1;
				}
			}(e.code),
			children: e.code
		}), hv(yW, {
			sx: { pl: "4em" },
			children: [hb(sO, { children: Object.entries(e.response.content ?? {}).map(([e, { schema: r }]) => hv(Ce, { children: [hb(_K, {
				spacing: 0,
				children: hb(_4, { schema: fk.decode(r, (e) => [t.schema(e) ?? {}, fw(e)]) })
			}), hb("div", {
				"data-content-type": !0,
				children: e
			})] })) }), hb(sO, { children: i.length > 0 ? hv(yW, {
				sx: {
					mt: 16,
					containerStyle: "sys.surface-container",
					px: 12,
					py: 16,
					rounded: "xs"
				},
				children: [hb(yW, {
					sx: { pb: 8 },
					children: hv("b", { children: [hb("small", { children: "可能错误码" }), ":"] })
				}), hv(_6, { children: [
					hb(_9, {
						sx: { textStyle: "sys.label-small" },
						children: hb("code", { children: "errors[*].code" })
					}),
					hb(_9, {
						sx: { textStyle: "sys.label-small" },
						children: hb("code", { children: "errors[*].message" })
					}),
					i.map((e) => e ? hv(sO, { children: [hb(_9, {
						sx: {
							color: "sys.primary",
							textStyle: "sys.label-small",
							fontWeight: "bold"
						},
						children: hb("code", { children: JSON.stringify(e.code) })
					}), hb(_9, { children: e.message })] }) : null)
				] })]
			}) : null })]
		})] });
	};
}, {
	displayName: "ResponseView",
	props: ["code", "response"]
}), _6 = yU("div", { displayName: "Table" })({
	textStyle: "sys.label-medium",
	display: "grid",
	gap: 8,
	width: "100%",
	gridTemplateColumns: "min-content 1fr",
	gridAutoColumns: "auto"
}), _9 = yU("div", { displayName: "TableCell" })({}), _8 = yU("section", { displayName: "ResponseSection" })({}), _7 = yU("div", { displayName: "ResponseStatusCode" })({
	fontSize: 18,
	fontFamily: "code",
	color: "sys.success",
	py: 12,
	pos: "sticky",
	top: 0,
	_data_failed__true: { color: "sys.error" }
}), Ce = yU("section", { displayName: "ResponseSchema" })({
	pos: "relative",
	$data_content_type: {
		pos: "absolute",
		right: 0,
		top: 0,
		fontFamily: "code",
		opacity: .3
	}
}), Ct = class e extends pw {
	static of(t, r) {
		return new e(t, () => eA(r) ? r() : r);
	}
	inputs$;
	constructor(e, t) {
		super(), this.typedef = e, this.inputs$ = new hf(t() ?? {});
	}
	get inputs() {
		return this.inputs$.value;
	}
	#i = /* @__PURE__ */ new Map();
	field(e) {
		return this.#i.get(id(e) ? e : cM.create(e));
	}
	delete(e) {
		return this.#i.delete(id(e) ? e : cM.create(e));
	}
	*fields(e, t = this.inputs$.value, r = []) {
		for (let [i, o, a] of e.entries(t, cg)) {
			if (i === cS.RecordKey || "never" === a.type) continue;
			let e = [...r, i], t = cM.create(e), o = this.#i.get(t);
			o || (o = new Cn(this, a, e), this.#i.set(t, o)), yield o;
		}
	}
	submit = () => {
		let e = {}, t = !1;
		for (let [r, i] of this.#i) {
			if (i.blur(), i.state.error) {
				t = !0;
				continue;
			}
			let r = i.input, o = i.validate(r);
			if (o) {
				i.next((e) => {
					e.error = o;
				}), t = !0;
				continue;
			}
			ig(r) || (nt(r) ? iU(e, i.path, { ...r }) : iU(e, i.path, r));
		}
		t || this.next(e);
	};
	reset() {
		for (let [e, t] of this.#i) t.reset();
	}
	setErrors = (e = {}) => {
		for (let [t, r] of Object.entries(e)) for (let [e, i] of this.#i) e == t && i.next((e) => {
			e.error = r;
		});
	};
}, Cn = class e extends hf {
	static defaultValue = (e) => {
		try {
			return e.create(void 0);
		} catch (e) {
			return;
		}
	};
	constructor(t, r, i, o = cM.create(i)) {
		super({ initial: tQ(t.inputs$.value, i, e.defaultValue(r)) }), this.form$ = t, this.typedef = r, this.path = i, this.pointer = o;
	}
	get input() {
		return tQ(this.form$.inputs$.value, this.path, e.defaultValue(this.typedef));
	}
	get meta() {
		return this.typedef.meta;
	}
	get state() {
		return this.value;
	}
	get name() {
		return this.pointer;
	}
	#o;
	get optional() {
		return void 0 === this.#o && (this.#o = !this.validate(void 0)), this.#o;
	}
	#a;
	get input$() {
		return void 0 === this.#a && (this.#a = hc(this.form$.inputs$, pZ((t) => tQ(t, this.path, e.defaultValue(this.typedef))), ha())), this.#a;
	}
	focus = () => {
		this.next((e) => {
			e.focus = !0, e.visited = !0;
		});
	};
	blur = () => {
		this.next((e) => {
			e.focus = !1, e.touched = !0;
		});
	};
	reset = () => {
		this.form$.inputs$.next((e) => {
			iU(e, this.path, this.value.initial);
		}), this.next({ initial: this.value.initial });
	};
	update = (e) => {
		this.form$.inputs$.next((t) => {
			iU(t, this.path, e);
		}), this.next((t) => {
			t.dirty = e !== t.initial, t.error = this.validate(e) ?? null;
		});
	};
	validate(e) {
		let t = "array" !== this.typedef.type || ig(e) ? e : e.filter((e) => !ig(e)), [r] = this.typedef.validate(t);
		if (!r) return;
		let i = r.failures().filter((e) => "never" !== e.type && 0 === e.path.length);
		if (0 !== i.length) return i.map((e) => void 0 === e.value ? "字段不能为空" : e.message);
	}
	destroy() {
		this.form$.delete(this.name);
	}
};
let Cr = cC((e, t) => fx({ label: t }).modify(e)), Ci = cC((e, t) => fx({ hint: t }).modify(e)), Co = cC((e, t) => fx({ inputBy: t }).modify(e));
var Ca = yU("div", (e, { slots: t }) => (r) => {
	let i = e.valued, o = e.invalid, a = e.disabled, l = (t.default?.() ?? []).map((e) => "input" === e.type ? (i = !!(e.props?.value ?? e.props?.placeholder ?? i), a = e.props?.disabled ?? a, sN(e, { disabled: a })) : sN(e));
	return hv(r, {
		"data-valued": i,
		"data-invalid": o,
		"data-disabled": a,
		"data-focus-within": e.focus,
		"data-has-leading": !!t.leading,
		"data-has-trailing": !!t.trailing,
		children: [hv("div", {
			"data-input-container": !0,
			children: [hv("div", {
				"data-input-decorator-container": !0,
				children: [
					hb("div", { "data-input-decorator-leading": !0 }),
					hb("div", {
						"data-input-decorator-label": !0,
						children: hb("div", {
							"data-input-label": !0,
							children: t.label?.()
						})
					}),
					hb("div", { "data-input-decorator-trailing": !0 })
				]
			}), hv("div", {
				"data-input-row": !0,
				children: [
					t.leading && hb(Cl, {
						role: "leading",
						children: t.leading()
					}),
					l,
					t.trailing && hb(Cl, {
						role: "trailing",
						children: t.trailing()
					})
				]
			})]
		}), t.supporting && hb("div", {
			"data-input-supporting": !0,
			children: t.supporting?.()
		})]
	});
}, {
	displayName: "TextField",
	props: [
		"valued",
		"focus",
		"invalid",
		"disabled"
	]
})({
	display: "block",
	pos: "relative",
	textStyle: "sys.body-medium",
	$data_input_container: {
		pos: "relative",
		zIndex: 1
	},
	$data_input_row: {
		pos: "relative",
		rounded: "xs",
		overflow: "hidden",
		minHeight: 40,
		display: "flex",
		alignItems: "stretch",
		zIndex: 1
	},
	$data_input_decorator_container: {
		pos: "absolute",
		left: 0,
		top: 0,
		bottom: 0,
		right: 0,
		display: "flex",
		zIndex: 1,
		rounded: "xs"
	},
	$data_input_decorator_leading: {
		roundedLeft: "xs",
		transitionDuration: "sm1",
		transitionTimingFunction: "standard",
		width: 16,
		borderLeft: "1px solid",
		borderTop: "1px solid",
		borderBottom: "1px solid",
		borderColor: "sys.outline",
		pointerEvents: "none"
	},
	$data_input_decorator_label: {
		transitionDuration: "sm1",
		transitionTimingFunction: "standard",
		borderBottom: "1px solid",
		borderColor: "sys.outline"
	},
	$data_input_decorator_trailing: {
		borderRight: "1px solid",
		borderTop: "1px solid",
		borderBottom: "1px solid",
		borderColor: "sys.outline",
		roundedRight: "xs",
		transitionDuration: "sm1",
		transitionTimingFunction: "standard",
		flex: 1,
		pointerEvents: "none"
	},
	$data_input_label: {
		position: "relative",
		top: -12,
		padding: 4,
		textStyle: "sys.body-small",
		color: "sys.on-surface-variant",
		display: "flex",
		alignItems: "center"
	},
	$data_input: {
		flex: 1,
		w: "100%",
		m: 0,
		px: 16,
		py: 4,
		cursor: "text",
		"&[readonly]": { cursor: "pointer" },
		bg: "inherit",
		color: "sys.on-surface",
		outline: "none",
		border: "none",
		textStyle: "sys.body-medium",
		_disabled: { cursor: "not-allowed" }
	},
	$data_input_supporting: {
		textStyle: "sys.body-small",
		px: 16,
		pt: 4,
		display: "flex",
		gap: 16,
		width: "100%",
		overflow: "auto",
		color: "sys.on-surface-variant"
	},
	$data_icon: { color: "sys.on-surface-variant" },
	_has_leading: {
		$data_input: { pl: 36 },
		$data_input_label: { left: 36 }
	},
	_has_trailing: { $data_input: { pr: 32 } },
	_valued: { $data_input: {} },
	_focusWithin: {
		$data_input_decorator_leading: {
			borderWidth: "2px",
			borderColor: "sys.primary"
		},
		$data_input_decorator_label: {
			borderWidth: "2px",
			borderColor: "sys.primary"
		},
		$data_input_decorator_trailing: {
			borderWidth: "2px",
			borderColor: "sys.primary"
		},
		$data_input_label: { color: "sys.primary" }
	},
	_invalid: {
		$data_input_decorator_leading: {
			borderWidth: "2px",
			borderColor: "sys.error"
		},
		$data_input_decorator_label: {
			borderWidth: "2px",
			borderColor: "sys.error"
		},
		$data_input_decorator_trailing: {
			borderWidth: "2px",
			borderColor: "sys.error"
		},
		$data_input_label: { color: "sys.error" },
		$data_input_supporting: { color: "sys.error" },
		$data_icon: { color: "sys.error" }
	},
	_disabled: {
		opacity: .38,
		cursor: "not-allowed"
	}
}), Cl = yU("div", { role: fi(["leading", "trailing"]) }, { displayName: "Maker" })({
	pos: "absolute",
	top: 4,
	bottom: 4,
	display: "flex",
	alignItems: "center",
	color: "sys.on-surface-variant",
	_role__leading: {
		left: 12,
		$data_icon: { ml: -4 }
	},
	_role__trailing: {
		right: 12,
		$data_icon: { mr: -4 }
	}
});
let Cs = (e) => eu(e) ? e : ig(e) ? [] : [e], Cu = ((M = {})[M.NONE = 0] = "NONE", M[M.EXACT = 1] = "EXACT", M[M.PREFIX = 2] = "PREFIX", M), Cc = ((T = {}).NONE = "NONE", T.ADD = "ADD", T.EDIT = "EDIT", T.DELETE = "DELETE", T);
var Cf = class e extends pm {
	static of(t, r) {
		return new e(t, r ?? ("array" == t.type ? [] : {}));
	}
	#l = new hf({});
	constructor(e, t) {
		super((e) => {
			let t = this.#l.subscribe(e);
			return () => {
				t.unsubscribe();
			};
		}), this.typedef = e, this.initials = t, this.#l.next(t);
	}
	initialsAt(e) {
		return 0 == e.length ? this.initials : tQ(this.initials, e);
	}
	update(e, t, r, i) {
		if (console.log("[json-editor]", "update", JSON.stringify(e), this.typedef.type), this.#s.next({}), 0 == e.length) return void this.#l.next(t);
		eA(t) ? this.#l.next((o) => {
			let a = tQ(o, e, r);
			i && "array" == i.type && !eu(a) && (a = Cs(a)), t(a), iU(o, e, a);
		}) : this.#l.next((r) => {
			iU(r, e, t);
		});
	}
	delete(e) {
		0 != e.length && (console.log("[json-editor]", "delete", e), this.#l.next((t) => {
			let r = ia(e);
			if (im(r)) {
				let i = e.slice(0, e.length - 1), o = i.length > 0 ? tQ(t, i) : t;
				if (eu(o)) return void o.splice(r, 1);
			}
			let i = e.slice(0, e.length - 1), o = i.length > 0 ? tQ(t, i) : t;
			delete o[r];
		}));
	}
	#s = new hf({});
	#u = new hf({});
	get error$() {
		return this.#s;
	}
	get foldedPointerPrefixes$() {
		return this.#u;
	}
	errorAt$(e) {
		let t = this.#c(e);
		return hc(this.error$, pZ((e) => e[t]), ha());
	}
	foldedPrefix$(e) {
		let t = this.#c(e);
		return hc(this.foldedPointerPrefixes$, pZ((e) => {
			for (let [r] of Object.entries(e)) {
				if (r === t) return Cu.EXACT;
				if (t.startsWith(r)) return Cu.PREFIX;
			}
			return Cu.NONE;
		}), ha());
	}
	#c(e) {
		return id(e) ? e : cM.create(e);
	}
	toggleFold(e) {
		let t = this.#c(e);
		this.#u.next((e) => {
			Object.hasOwn(e, t) ? delete e[t] : e[t] = !0;
		});
	}
	setError(e, t) {
		let r = this.#c(e);
		this.#s.next((e) => {
			null === t ? delete e[r] : e[r] = t;
		});
	}
};
let Cd = hS(() => new Cf(fl(), {})), Cp = hS(() => ({}));
var Ch = yU("span", { displayName: "ActionToolbar" })({
	px: 2,
	pos: "relative",
	visibility: "hidden",
	border: "1px solid",
	borderColor: "rgba(0,0,0,0)",
	display: "flex",
	alignItems: "center"
}), Cm = yU(_R, { displayName: "ActionBtn" })({
	transition: "none",
	width: 24,
	height: 24,
	rounded: "xs",
	[`& ${_L}`]: { svg: {
		width: 16,
		height: 16
	} }
}), Cg = yU("span", { displayName: "TextBox" })({
	textStyle: "sys.label-small",
	fontWeight: "bold",
	fontFamily: "inherit",
	fontSize: 12,
	border: "1px solid",
	borderColor: "rgba(0,0,0,0)",
	py: 4,
	wordBreak: "keep-all",
	whiteSpace: "nowrap"
}), Cy = yU(Cg, { displayName: "TokenView" })({
	font: "code",
	opacity: .3
}), Cv = yU(Ch, { displayName: "PropLeading" })({
	position: "absolute",
	ml: -28
}), Cb = yU(Cg, { displayName: "PropNameView" })({
	position: "relative",
	display: "flex",
	alignItems: "center",
	userSelect: "none",
	_deprecated: { textDecoration: "line-through" },
	_optional: { "&:after": {
		content: "\"?\"",
		color: "sys.secondary",
		opacity: .58
	} }
}), Cx = h_((e, { slots: t }) => () => hv(Cb, {
	"data-deprecated": e.deprecated,
	"data-optional": e.optional,
	"data-nullable": e.nullable,
	children: [t.leading && hb(Cv, {
		"data-visible-on-hover": !0,
		children: t.leading()
	}), t.default?.()]
}), {
	displayName: "PropName",
	props: [
		"deprecated",
		"optional",
		"nullable"
	]
}), Cw = class e extends hf {
	static from(t) {
		let r = new e(!1);
		return hc(t, hs((e) => e ? ht(hc(p7(e, "focus"), hu(() => {
			r.show();
		})), hc(p7(e, "blur"), ho(200), hu(() => {
			r.value && r.hide();
		}))) : pT), hh()), r;
	}
	show() {
		this.next(!0);
	}
	hide() {
		this.next(!1);
	}
}, Ck = vQ({ apply({ elements: e, rects: t }) {
	Object.assign(e.floating.style, { width: `${t.reference.width}px` });
} }), C_ = h_((e, { emit: t, slots: r, render: i }) => {
	let o = e.open$ ?? new Cw(!1), a = (e) => {
		let r = [e.target, ...e.composedPath()].find((e) => e?.hasAttribute?.("data-value"));
		if (r) {
			let e = r.getAttribute("data-value");
			ig(e) || (t("selected", e), o.hide());
		}
	};
	return hc(o, i((e) => hb(v0, {
		isOpen: e,
		onClickOutside: () => o.hide(),
		onEscKeydown: () => o.hide(),
		placement: "bottom-start",
		middleware: [Ck],
		$content: hb(CC, {
			onClick: a,
			children: r.content?.()
		}),
		children: r.default?.()?.[0] ?? null
	})));
}, {
	displayName: "Menu",
	props: ["open$"],
	emits: ["selected"]
}), CC = yU("div", { displayName: "PopoverContainer" })({
	textStyle: "sys.body-small",
	pos: "relative",
	containerStyle: "sys.surface-container-lowest",
	borderBottom: "1px solid",
	borderRight: "1px solid",
	borderLeft: "1px solid",
	borderColor: go("sys.outline-variant", gi(.38)),
	overflow: "hidden",
	"[data-placement*=bottom] &": { roundedBottom: "sm" },
	"[data-placement*=top] &": { roundedTop: "sm" }
}), CS = yU("div", { displayName: "MenuItem" })({
	px: 8,
	py: 2,
	gap: 8,
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	textAlign: "right",
	textStyle: "sys.body-small",
	cursor: "pointer",
	_hover: { containerStyle: "sys.surface-container" },
	_focus: {
		containerStyle: "sys.surface-container",
		outline: 0
	}
}), CO = yU("div", { displayName: "PropDoc" })({
	position: "absolute",
	zIndex: 1,
	opacity: .58,
	fontSize: 10,
	lineHeight: 10,
	top: -3,
	left: 0,
	"& > *": {
		display: "flex",
		alignItems: "center",
		gap: 4,
		"&::before": {
			content: "\"// \"",
			font: "code"
		}
	}
}), CA = yU("span", { displayName: "PropDescription" })({
	display: "block",
	textStyle: "sys.body-small",
	"& p": {
		my: 1,
		wordBreak: "keep-all",
		whiteSpace: "nowrap",
		opacity: .7
	},
	"& code": {
		wordBreak: "keep-all",
		whiteSpace: "nowrap"
	}
}), CP = h_((e, { slots: t, render: r }) => {
	let i = new Cw(!1);
	return hc(i, r((r) => {
		let o = t.default?.()[0];
		return hb(v0, {
			isOpen: r,
			placement: e.placement ?? "left",
			$content: hb(CT, { children: hb(CM, { children: t.title() }) }),
			children: o ? sN(o, {
				onMouseover: () => {
					i.show();
				},
				onMouseout: () => {
					i.hide();
				}
			}) : null
		});
	}));
}, {
	displayName: "Tooltip",
	props: ["placement"]
}), CM = yU("div", { displayName: "TooltipContainer" })({
	py: 4,
	px: 12,
	rounded: "xs",
	shadow: "3",
	textStyle: "sys.body-small",
	containerStyle: "sys.on-surface",
	pos: "relative",
	zIndex: 100
}), CT = yU("div", { displayName: "TooltipWrapper" })({ px: 8 }), CE = yU("div", { displayName: "LineError" })({
	display: "block",
	fontSize: 10,
	lineHeight: 14,
	color: "sys.error",
	position: "absolute",
	px: 2,
	top: -2,
	right: 0
}), CI = yU("div", { displayName: "LinePrefix" })({
	position: "relative",
	display: "flex",
	alignItems: "start",
	justifyContent: "flex-end",
	minWidth: "2vw",
	px: 12,
	userSelect: "none"
}), CD = yU("div", { displayName: "LineContent" })({
	flex: 1,
	minW: 0
}), Cj = yU("div", { displayName: "LineContentMain" })({
	position: "relative",
	display: "flex",
	alignItems: "start"
}), C$ = yU(Cy, { displayName: "LineNumber" })({
	opacity: .28,
	font: "code"
}), CL = yU(Cy, (e) => (t) => hb(t, { children: hb(_L, { path: e.folded ? "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" : "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }) }), {
	displayName: "LineFoldable",
	props: ["folded"]
})({
	position: "absolute",
	top: 0,
	left: 2,
	cursor: "pointer",
	font: "code",
	opacity: .58,
	[`& ${_L}`]: { svg: {
		width: 16,
		height: 16
	} }
}), CR = yU("div", (e, { slots: t }) => (r) => hv(r, { children: [hb(CI, { children: t.leading?.() }), hb(CD, {
	sx: { paddingLeft: 14 * e.indent * 2 },
	children: hv(Cj, { children: [t.default?.(), t.comment?.()] })
})] }), {
	displayName: "LineContainer",
	props: ["indent"]
})({
	position: "relative",
	display: "flex",
	py: 2,
	w: "100%",
	maxW: "100%",
	_hover: {
		containerStyle: "sys.surface-container",
		[`& ${Ch}`]: { visibility: "visible" }
	},
	"&:focus-within": { containerStyle: "sys.surface-container" },
	[`&[data-dirty=${Cc.EDIT}]`]: { bgColor: go("sys.warning-container", gi(.38)) },
	[`&[data-dirty=${Cc.ADD}]`]: { bgColor: go("sys.success-container", gi(.38)) },
	[`&[data-dirty=${Cc.DELETE}]`]: {
		bgColor: go("sys.error-container", gi(.38)),
		textDecoration: "line-through",
		opacity: .58
	},
	_error: { bgColor: go("sys.error-container", gi(.38)) }
}), CN = class e extends hf {
	static from(t) {
		let r = new e("");
		return hc(t, hs((e) => e ? hc(p7(e, "input"), hu((e) => {
			r.next(e.target.value?.trim());
		})) : pT), hm()), r;
	}
}, CF = class e extends pw {
	static from(t) {
		let r = new e();
		return hc(t, hs((e) => e ? ht(hc(p7(e, "keypress"), hu((e) => {
			"Enter" !== e.key || e.shiftKey || (e.preventDefault(), r.next({ type: "COMMIT" }));
		})), hc(p7(e, "keydown"), hu((e) => {
			switch (e.key) {
				case "Tab":
				case "ArrowDown":
					e.target.getAttribute("data-options") && (e.preventDefault(), r.next({
						type: "SELECT",
						direction: 1
					}));
					break;
				case "ArrowUp": e.target.getAttribute("data-options") && (e.preventDefault(), r.next({
					type: "SELECT",
					direction: -1
				}));
			}
		})), hc(p7(e, "keyup"), hu((e) => {
			"Escape" === e.key && r.next({ type: "CANCEL" });
		}))) : pT), hm()), r;
	}
}, Cz = class extends pm {
	static sync(e, t) {
		return hc(ht(hc(e, hu((e) => {
			e && e == cM.create(t.path()) && t.editing$.show();
		})), hc(t.editing$, ho(1), hu((r) => {
			r || e.disable(t.path());
		})), hc(p4([t.value$, e]), ho(1), hu(([r, i]) => {
			ig(r) && !i && e.enable(t.path());
		}))), hm());
	}
	#f = new p_(null);
	constructor() {
		super((e) => {
			let t = this.#f.subscribe(e);
			return () => t.unsubscribe();
		});
	}
	enable(e) {
		this.#f.value || this.#f.next(cM.create(e));
	}
	disable(e) {
		this.#f.value === cM.create(e) && this.#f.next(null);
	}
};
let CV = hS(() => new Cz());
var CB = h_((e, { render: t }) => {
	let r, i = hg(null), o = hg(null), a = hg(null), l = CF.from(a), s = CN.from(a), u = CV.use(), c = Cw.from(a), f = Cd.use();
	Cz.sync(u, {
		editing$: c,
		value$: e.value$,
		path: () => e.ctx.path
	});
	let d = () => {
		if ("enums" === e.typedef.type) {
			let t = (cS.schemaProp(e.typedef, "enum") ?? []).indexOf(e.value);
			if (t > -1) return t;
		}
		return 0;
	}, p = new hf({ index: d() }), h = () => {
		s.next(""), c.hide();
	}, m = (t) => {
		if ("enums" === e.typedef.type) {
			let r = cS.schemaProp(e.typedef, "enum") ?? [];
			t ??= r[p.value.index % r.length];
		} else t ??= a.value?.value ? a.value?.value : void 0;
		if (ig(t)) return void f.delete(e.ctx.path);
		let [r, i] = e.typedef.validate(t, { coerce: !0 });
		if (r) return void f.setError(e.ctx.path, r.message);
		f.update(e.ctx.path, i), h();
	};
	return (e.allowRawJSON && hc(s, hu((t) => {
		let r = t.trim();
		if (r.startsWith("{") && r.endsWith("}") || r.startsWith("[") && r.endsWith("]")) try {
			let t = JSON.parse(r);
			f.update(e.ctx.path, t), h();
		} catch (t) {
			f.setError(e.ctx.path, "无效的 JSON 字符串");
		}
	}), hm()), hc(l, hu((t) => {
		switch (t.type) {
			case "SELECT":
				p.next((e) => {
					e.index += t.direction;
				});
				break;
			case "COMMIT":
				m();
				break;
			case "CANCEL": h(), p.next({ index: d() }), ig(e.value) && f.delete(e.ctx.path);
		}
	}), hm()), hc(ht(hc(o, hC((e) => {
		if (e) {
			let t = new ResizeObserver((e) => {
				for (let t of e) t.contentBoxSize && (r = t.contentBoxSize[0]?.blockSize);
			});
			return t.observe(e), () => {
				t.disconnect();
			};
		}
		return () => {};
	})), hc(a, ho(1), hu((e) => {
		e && (e?.focus(), e.value && (e.selectionStart = 0, e.selectionEnd = e.value.length));
	})), hc(a, hs((e) => {
		if (e) {
			let t = r ? r - 2 : e.getBoundingClientRect().height, a = (e) => {
				e.style.height = `${t ?? 0}px`, e.style.height = `${e.scrollHeight}px`;
			};
			return setTimeout(() => a(e)), ht(hc(p7(e, "blur"), hu((t) => {
				t.relatedTarget && (o.value?.contains(t.relatedTarget) || i.value?.contains(t.relatedTarget)) || (t.preventDefault(), m(e.value));
			})), hc(p7(e, "input"), hu((e) => {
				a(e.target), s.next(e.target.value);
			})));
		}
		return pT;
	}))), hm()), "enums" == e.typedef.type) ? hc(p4([
		e.value$,
		c,
		p
	]), t(([t, r, { index: l }]) => {
		let s = cS.schemaProp(e.typedef, "enum") ?? [], u = cS.metaProp(e.typedef, "enumLabels") ?? [];
		return hb(Cq, {
			ref: o,
			onClick: () => {
				c.show();
			},
			"data-type": typeof t,
			tabindex: 0,
			children: r ? hb(C_, {
				onSelected: (e) => {
					m(e);
				},
				open$: c,
				$content: hb("div", {
					ref: i,
					children: s.map((e, t) => hb(CG, {
						"data-focus": l % s.length === t,
						value: e,
						label: u[t]
					}))
				}),
				children: hb(CW, { children: hb("input", {
					value: void 0 == t ? "" : `${t}`,
					ref: a,
					"data-options": !0
				}) })
			}) : hb(CU, { children: JSON.stringify(t) ?? "undefined" })
		});
	})) : hc(p4([e.value$, c]), t(([t, r]) => hb(Cq, {
		ref: o,
		onClick: () => {
			e.ctx.readOnly || c.show();
		},
		onFocus: () => {
			e.ctx.readOnly || c.show();
		},
		"data-type": typeof t,
		tabindex: 0,
		children: r ? hb(v0, {
			isOpen: !0,
			placement: "right-start",
			$content: hv(CH, {
				ref: i,
				children: [hb(Cm, {
					type: "button",
					onClick: () => l.next({ type: "CANCEL" }),
					children: hb(_L, { path: _D })
				}), hb(Cm, {
					type: "button",
					onClick: () => l.next({ type: "COMMIT" }),
					children: hb(_L, { path: _j })
				})]
			}),
			children: hb(CW, { children: hb("textarea", {
				ref: a,
				rows: 1,
				value: void 0 == t ? "" : `${t}`
			}) })
		}) : hb(CU, { children: JSON.stringify(t) ?? "undefined" })
	})));
}, {
	displayName: "ValueInput",
	props: [
		"typedef",
		"ctx",
		"value",
		"allowRawJSON"
	]
}), CH = yU("div", { displayName: "ValueInputActions" })({
	borderRight: "1px solid",
	borderTop: "1px solid",
	borderBottom: "1px solid",
	borderColor: go("sys.outline-variant", gi(.38)),
	containerStyle: "sys.surface-container-lowest",
	roundedRight: "sm",
	display: "flex",
	px: 2,
	py: 0,
	ml: -4
}), CW = yU("div", { displayName: "InputWrapper" })({
	flex: 1,
	minWidth: 0,
	maxWidth: "80%",
	display: "flex",
	alignItems: "center",
	border: "1px solid",
	overflow: "hidden",
	borderColor: go("sys.outline-variant", gi(.38)),
	opacity: .38,
	"&:hover": { opacity: 1 },
	"&:focus-within": { opacity: 1 },
	"& > textarea,input": {
		flex: 1,
		rounded: "xs",
		containerStyle: "sys.surface-container-lowest",
		width: "100%",
		outline: "none",
		border: "none",
		px: 8,
		py: 0,
		m: 0,
		fontSize: "inherit",
		color: "inherit",
		lineHeight: "inherit",
		overflow: "hidden",
		resize: "none",
		"&[data-options]:focus": { roundedBottom: 0 }
	}
}), CU = yU("div", { displayName: "Value" })({
	border: "1px solid",
	borderColor: "rgba(0,0,0,0)",
	overflow: "hidden",
	textOverflow: "ellipsis",
	_hover: {
		textOverflow: "clip",
		whiteSpace: "normal",
		wordBreak: "break-all"
	}
}), Cq = yU("div", { displayName: "ValueContainer" })({
	wordBreak: "keep-all",
	whiteSpace: "nowrap",
	cursor: "pointer",
	display: "flex",
	alignItems: "center",
	font: "code",
	minWidth: 0,
	flex: 1,
	textStyle: "sys.label-small",
	fontSize: 12,
	lineHeight: 24,
	gap: 8,
	_type__string: { color: "sys.primary" },
	_type__number: { color: "sys.primary" },
	_type__boolean: { color: "sys.warning" },
	_type__undefined: { color: "sys.error" }
}), CK = yU(CS, { displayName: "EnumMenuItemContainer" })({ [`& ${Cx}`]: { textAlign: "left" } }), CG = fL((e) => () => hv(CK, {
	"data-value": e.value,
	tabindex: 0,
	children: [hb(Cx, { children: e.value }), e.label && hb(CA, { children: e.label })]
}), {
	displayName: "EnumMenuItem",
	props: ["value", "label"]
}), CJ = i((e, t) => {
	t.exports = function() {
		var e = document.getSelection();
		if (!e.rangeCount) return function() {};
		for (var t = document.activeElement, r = [], i = 0; i < e.rangeCount; i++) r.push(e.getRangeAt(i));
		switch (t.tagName.toUpperCase()) {
			case "INPUT":
			case "TEXTAREA":
				t.blur();
				break;
			default: t = null;
		}
		return e.removeAllRanges(), function() {
			"Caret" === e.type && e.removeAllRanges(), e.rangeCount || r.forEach(function(t) {
				e.addRange(t);
			}), t && t.focus();
		};
	};
}), CZ = r(i((e, t) => {
	var r = CJ(), i = {
		"text/plain": "Text",
		"text/html": "Url",
		default: "Text"
	};
	t.exports = function(e, t) {
		var o, a, l, s, u, c, f, d, p = !1;
		t || (t = {}), l = t.debug || !1;
		try {
			if (u = r(), c = document.createRange(), f = document.getSelection(), (d = document.createElement("span")).textContent = e, d.ariaHidden = "true", d.style.all = "unset", d.style.position = "fixed", d.style.top = 0, d.style.clip = "rect(0, 0, 0, 0)", d.style.whiteSpace = "pre", d.style.webkitUserSelect = "text", d.style.MozUserSelect = "text", d.style.msUserSelect = "text", d.style.userSelect = "text", d.addEventListener("copy", function(r) {
				if (r.stopPropagation(), t.format) if (r.preventDefault(), void 0 === r.clipboardData) {
					l && console.warn("unable to use e.clipboardData"), l && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
					var o = i[t.format] || i.default;
					window.clipboardData.setData(o, e);
				} else r.clipboardData.clearData(), r.clipboardData.setData(t.format, e);
				t.onCopy && (r.preventDefault(), t.onCopy(r.clipboardData));
			}), document.body.appendChild(d), c.selectNodeContents(d), f.addRange(c), !document.execCommand("copy")) throw Error("copy command was unsuccessful");
			p = !0;
		} catch (r) {
			l && console.error("unable to copy using execCommand: ", r), l && console.warn("trying IE specific stuff");
			try {
				window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), p = !0;
			} catch (r) {
				l && console.error("unable to copy using clipboardData: ", r), l && console.error("falling back to prompt"), o = "message" in t ? t.message : "Copy to clipboard: #{key}, Enter", a = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C", s = o.replace(/#{\s*key\s*}/g, a), window.prompt(s, e);
			}
		} finally {
			f && ("function" == typeof f.removeRange ? f.removeRange(c) : f.removeAllRanges()), d && document.body.removeChild(d), u();
		}
		return p;
	};
})()), CX = h_((e, {}) => () => hb(CP, {
	$title: "复制当前节点为 JSON 字符串",
	children: hb(Cm, {
		type: "button",
		onClick: () => (0, CZ.default)(JSON.stringify(e.value, null, 2)),
		children: hb(_L, { path: "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" })
	})
}), {
	displayName: "CopyAsJSONIconBtn",
	props: ["value"]
}), CY = h_(({}, { emit: e }) => () => hb(CP, {
	$title: "移除项",
	children: hb(Cm, {
		type: "button",
		onClick: () => e("remove"),
		children: hb(_L, { path: "M19,19V5H5V19H19M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5C3,3.89 3.9,3 5,3H19M17,11V13H7V11H17Z" })
	})
}), {
	displayName: "ItemRemoveIconBtn",
	emits: ["remove"]
}), CQ = h_((e, { emit: t, render: r }) => {
	let i = hg(null), o = CN.from(i), a = CF.from(i), l = Cw.from(i), s = Cd.use(), u = () => {
		i.value && (i.value.value = "", i.value.blur());
	}, c = (r) => {
		if (r ??= o.value) {
			let [i, o] = cS.schemaProp(e.typedef, "items").validate(r, { coerce: !0 });
			if (i) return void s.setError(e.ctx.path, i);
			t("add", o);
		} else t("add", void 0);
		u();
	};
	hc(o, hu((t) => {
		let r = t.trim();
		if (r.startsWith("[") && r.endsWith("]")) try {
			let t = JSON.parse(r);
			s.update(e.ctx.path, t), u();
		} catch (t) {
			s.setError(e.ctx.path, "无效的 JSON 字符串");
		}
		if (r.startsWith("{") && r.endsWith("}")) try {
			c(JSON.parse(r));
		} catch (t) {
			s.setError(e.ctx.path, "无效的 JSON 字符串");
		}
	}), hm()), hc(a, hu((e) => {
		switch (e.type) {
			case "COMMIT":
				c();
				break;
			case "CANCEL": u();
		}
	}), hm());
	let f = hc(l, r((e) => hb(v0, {
		isOpen: e,
		placement: "right-start",
		$content: hv(CH, { children: [hb(Cm, {
			type: "button",
			onClick: () => a.next({ type: "CANCEL" }),
			children: hb(_L, { path: _D })
		}), hb(Cm, {
			type: "button",
			onClick: () => a.next({ type: "COMMIT" }),
			children: hb(_L, { path: _j })
		})] }),
		children: hb(CW, { children: hb("input", {
			ref: i,
			type: "text",
			placeholder: "添加数组项 (可粘贴 JSON 字符串)"
		}) })
	})));
	return () => hb(Cq, {
		sx: { mx: -4 },
		children: f
	});
}, {
	displayName: "ItemAddIconBtn",
	props: ["ctx", "typedef"],
	emits: ["add"]
}), C0 = h_((e, { emit: t, render: r }) => {
	let i = hg(null), o = CF.from(i), a = CN.from(i), l = Cw.from(i), s = Cd.use(), u = hf.seed({ index: 0 }), c = () => {
		l.hide(), a.next(""), i.value && (i.value.value = "", i.value.blur()), u.next({ index: 0 });
	};
	hc(a, hu((t) => {
		let r = t.trim();
		if (r.startsWith("{") && r.endsWith("}")) try {
			let t = JSON.parse(r);
			s.update(e.ctx.path, t), c();
		} catch (t) {
			s.setError(e.ctx.path, "无效的 JSON 字符串");
		}
	}), hm());
	let f = (r) => {
		e.options ? r ??= e.options[u.value.index % e.options.length]?.propName : r ??= a.value, r ? (t("add", r), c()) : s.setError([...e.ctx.path, cS.RecordKey], "无效的属性值");
	};
	hc(o, hu((e) => {
		switch (e.type) {
			case "SELECT":
				u.next((t) => {
					t.index += e.direction;
				});
				break;
			case "COMMIT":
				f();
				break;
			case "CANCEL": c();
		}
	}), hm());
	let d = hc(l, r((e) => hb(CW, { children: hb("input", {
		ref: i,
		type: "text",
		placeholder: "添加属性 (可粘贴 JSON 字符串)",
		"data-options": e
	}) })));
	return hc(p4([
		a,
		l,
		u,
		e.options$
	]), r(([e, t, r, a]) => a ? a.length > 0 ? hb(Cq, {
		sx: { mx: -4 },
		children: hb(C_, {
			onSelected: (e) => {
				f(e);
			},
			open$: l,
			$content: hb("div", { children: a.map((t, i) => e && !t.propName.includes(e) ? null : hb(C1, {
				"data-focus": i === r.index % a.length,
				propName: t.propName,
				typedef: t.typedef
			})) }),
			children: d
		})
	}) : null : hb(Cq, {
		sx: { mx: -4 },
		children: hb(v0, {
			isOpen: t,
			placement: "right-start",
			$content: hv(CH, { children: [hb(Cm, {
				type: "button",
				onClick: () => o.next({ type: "CANCEL" }),
				children: hb(_L, { path: _D })
			}), hb(Cm, {
				type: "button",
				onClick: () => o.next({ type: "COMMIT" }),
				children: hb(_L, { path: _j })
			})] }),
			children: hb(CW, { children: hb("input", {
				ref: i,
				type: "text",
				placeholder: "添加属性 (可粘贴 JSON 字符串)"
			}) })
		})
	})));
}, {
	displayName: "PropValueAddInput",
	props: ["ctx", "options"],
	emits: ["add"]
}), C1 = fL((e) => () => hv(C2, {
	"data-value": e.propName,
	tabindex: 0,
	children: [hb(Cx, {
		optional: !!cS.schemaProp(e.typedef, cS.optional),
		children: e.propName
	}), hb(CA, { children: cS.metaProp(e.typedef, "title") })]
}), {
	displayName: "PropMenuItem",
	props: ["propName", "typedef"]
}), C2 = yU(CS, { displayName: "AddPropMenuItemContainer" })({ [`& ${Cx}`]: { textAlign: "left" } }), C4 = h_((e, { render: t }) => {
	let r = Cd.use(), i = Cp.use(), o = hc(e.n$, t((e) => hb(C$, { children: e }))), a = cM.create(e.ctx.path);
	return hc(p4([
		e.close$,
		e.value$,
		r.errorAt$(a),
		r.foldedPrefix$(a)
	]), t(([t, l, s, u]) => {
		let c = !!s, f = eu(l) || "array" == e.typedef.type, d = !f && nt(l);
		if (t) return u ? null : hb(sO, { children: hb(CR, {
			"data-error": c,
			$leading: o,
			indent: e.ctx.path.length,
			children: f ? hv(sO, { children: [hv(Cy, { children: ["]", "\xA0\xA0"] }), !e.ctx.readOnly && hb(CQ, {
				ctx: e.ctx,
				typedef: e.typedef,
				onAdd: (t) => {
					r.update(e.ctx.path, (e) => {
						console.log(e), e.push(t);
					}, [], e.typedef);
				}
			})] }) : d ? hv(sO, { children: [hv(Cy, { children: ["}", "\xA0\xA0"] }), !e.ctx.readOnly && hb(C0, {
				ctx: e.ctx,
				onAdd: (t) => {
					r.update([...e.ctx.path, t], void 0);
				},
				options: "record" != e.typedef.type ? [...e.typedef.entries(l, e.ctx)].filter(([e]) => !Object.hasOwn(l, e)).map(([e, t, r]) => ({
					propName: String(e),
					typedef: r
				})) : void 0
			})] }) : null
		}) });
		if (u == Cu.PREFIX) return null;
		let p = () => {
			let t = ia(e.ctx.path);
			return hv(sO, { children: [ig(t) ? null : hb(Cx, {
				deprecated: cS.schemaProp(e.typedef, "deprecated"),
				$leading: e.ctx.readOnly ? null : hb(CY, { onRemove: () => {
					r.delete(e.ctx.path);
				} }),
				children: hb(yW, {
					sx: id(t) ? { opacity: 1 } : {
						opacity: .3,
						font: "code"
					},
					children: `${t}`
				})
			}), id(t) ? hb(Cy, { children: ": " }) : e.ctx.path.length > 0 ? hb(Cy, { children: "\xA0\xA0" }) : null] });
		};
		return hb(CR, {
			indent: e.ctx.path.length,
			"data-dirty": ((e, t) => {
				if (!(eu(e) || nt(e))) {
					if (ig(t) && !ig(e)) return Cc.ADD;
					if (!ig(t) && ig(e)) return Cc.DELETE;
					if (!ig(t) && !ig(e) && e !== t) return Cc.EDIT;
				}
				return Cc.NONE;
			})(l, e.previous),
			"data-error": c,
			$leading: hv(sO, { children: [o, f || d ? hb(CL, {
				folded: u !== Cu.NONE,
				onClick: () => {
					r.toggleFold(a);
				}
			}) : null] }),
			$comment: (() => {
				let t = cS.metaProp(e.typedef, "title"), r = cS.metaProp(e.typedef, "description");
				return hv(sO, { children: [(t || r) && hb(CO, { children: r ? hb(CP, {
					$title: hb(CA, { children: hb(_M, { text: r }) }),
					placement: "top",
					children: hv("div", { children: [
						t,
						" ",
						hb(_L, { path: "M11,18H13V16H11V18M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z" })
					] })
				}) : hb("span", { children: t }) }), c && hb(CE, { children: `${s}` })] });
			})(),
			children: (() => {
				if (u) {
					if (u == Cu.EXACT) {
						if (f) return hv(sO, { children: [p(), hb(Cy, { children: "[...]" })] });
						if (d) return hv(sO, { children: [p(), hb(Cy, { children: "{...}" })] });
					}
					return null;
				}
				return hv(sO, { children: [p(), f ? hv(sO, { children: [hb(Cy, { children: "[" }), hb(Ch, { children: hb(CX, { value: l }) })] }) : d ? hv(sO, { children: [hb(Cy, { children: "{" }), hb(Ch, { children: hb(CX, { value: l }) })] }) : i.$value?.(e.typedef, l, e.ctx)] });
			})()
		});
	}));
}, {
	displayName: "Line",
	props: [
		"n",
		"typedef",
		"ctx",
		"value",
		"previous",
		"close"
	]
});
let C3 = (e, t, r) => hb(CB, {
	typedef: e,
	value: t,
	ctx: r
});
var C5 = h_((e, { render: t }) => {
	let r = Cd.use(), i = Cp.use();
	return hc(r, t((t) => hb(CV, { children: hb(Cp, {
		value: { $value: i.$value ?? C3 },
		children: hb(C6, { children: hb(C9, { children: [...function* e(t, r, i, o) {
			if ("object" == i.type || "record" == i.type || "intersection" == i.type || "union" == i.type && cS.schemaProp(i, "discriminator")) {
				let a = {
					value: t ?? {},
					previous: r,
					typedef: i,
					ctx: o
				};
				for (let [t, l, s] of (yield a, i.entries(a.value, o))) Object.hasOwn(a.value, t) && (yield* e(l, tQ(r, [t]), s, {
					...o,
					path: [...o.path, t],
					branch: [...o.branch, l]
				}));
				yield {
					...a,
					close: !0
				};
				return;
			}
			if ("union" == i.type && ig(cS.schemaProp(i, "discriminator"))) {
				let a = cS.schemaProp(i, "oneOf");
				if (a?.length == 2) {
					let i = a.find((e) => "array" == e.type), l = a.find((e) => "array" != e.type);
					if (i && l && cS.schemaProp(i, "items").type == l.type) {
						let a = Cs(t), l = Cs(r), s = {
							value: a,
							previous: l,
							typedef: i,
							ctx: o
						};
						for (let [t, r, u] of (yield s, i.entries(a, o))) yield* e(r, tQ(l, [t]), u, {
							...o,
							path: [...o.path, t],
							branch: [...o.branch, r]
						});
						yield {
							...s,
							close: !0
						};
						return;
					}
				}
			}
			if ("array" == i.type) {
				let a = {
					value: t,
					previous: r,
					typedef: i,
					ctx: o
				};
				for (let [l, s, u] of (yield a, i.entries(t, o))) yield* e(s, tQ(r, [l]), u, {
					...o,
					path: [...o.path, l],
					branch: [...o.branch, s]
				});
				yield {
					...a,
					close: !0
				};
				return;
			}
			if ("any" == i.type || "unknown" == i.type) {
				if (eu(t)) return void (yield* e(t, r, fc(cY()), o));
				if (ey(t)) return void (yield* e(t, r, fs(c1(), cY()), o));
			}
			yield {
				value: t,
				previous: r,
				typedef: i,
				ctx: o
			};
		}(t, r.initialsAt([]), r.typedef, {
			...cg,
			readOnly: e.readOnly
		})].map((e, t) => {
			let r = cM.create(e.ctx.path);
			return hb(C4, {
				n: t + 1,
				ctx: e.ctx,
				typedef: e.typedef,
				value: e.value,
				previous: e.previous,
				close: e.close ?? !1
			}, `${r}::${e.close ?? !1}`);
		}) }) })
	}) })));
}, {
	displayName: "JSONEditorView",
	props: ["readOnly"]
}), C6 = yU("div", { displayName: "JSONEditorContainer" })({
	w: "100%",
	h: "100%",
	overflow: "auto"
}), C9 = yU("div", ({}, { slots: e }) => (t) => hb(t, { children: e.default() }), { displayName: "Lines" })({
	position: "relative",
	display: "flex",
	flexDirection: "column",
	w: "100%",
	maxW: "100%",
	py: 2
}), C8 = h_((e, {}) => {
	let t = Cf.of(e.field$.typedef, ig(e.field$.input) ? void 0 : e.field$.input);
	return hc(t, hn(function(e, t) {
		return 1 <= t;
	}), hu((t) => {
		e.field$.update(t);
	}), hh()), () => hb(C7, { children: hb(Cd, {
		value: t,
		children: hb(C5, {})
	}) });
}, {
	displayName: "JSONEditorInput",
	props: ["field$", "readOnly"]
}), C7 = yU("div", { displayName: "JSONInputContainer" })({
	position: "relative",
	width: "100%",
	minHeight: "40em",
	py: 8,
	px: 12,
	overflow: "hidden"
});
let Se = ({ field: e, value: t }) => hv(yW, {
	component: "span",
	sx: { display: "block" },
	children: [hv(yW, {
		component: "span",
		sx: {
			fontWeight: "bold",
			marginRight: "0.5em"
		},
		children: [e, ":"]
	}), hb("span", { children: t })]
});
var St = ({ method: e, url: t, params: r }) => {
	let i = hP(r);
	return hv(yW, {
		component: "span",
		sx: { fontWeight: "bold" },
		children: [
			`${e.toUpperCase()} `,
			hv(yW, {
				component: "span",
				sx: { fontWeight: "medium" },
				children: [t, i ? `?${i}` : ""]
			}),
			" HTTP/*"
		]
	});
}, Sn = fL({ $default: fg().optional() }, ({}, { slots: e }) => () => hb(yW, {
	sx: {
		containerStyle: "sys.surface-container",
		rounded: "xs",
		width: "100%",
		overflow: "auto",
		py: 4,
		px: 8
	},
	children: hb(yW, {
		component: "pre",
		sx: {
			padding: 4,
			margin: 0,
			textStyle: "sys.body-small",
			fontFamily: "code"
		},
		children: hb("code", { children: e.default?.() })
	})
}), { displayName: "CodeView" }), Sr = fL({ request: fg() }, (e) => () => {
	let t = e.request;
	return hv(Sn, { children: [
		hb(St, { ...t }),
		hb(sO, { children: Object.entries({
			"User-Agent": navigator.userAgent,
			Origin: location.origin,
			Referer: `${location.origin}${location.pathname}`,
			...t.headers
		}).toSorted().map(([e, t]) => hb(Se, {
			field: e,
			value: t
		}, e)) }),
		t.body && hv(sO, { children: [hb("br", {}), function(e) {
			if (So(e.headers).includes("multipart/form-data")) {
				let r = "----WebKitFormBoundaryfakefakefakefakefakefakefakefakefake";
				e.headers = {
					...e.headers,
					"Content-Type": `multipart/form-data; boundary=${r}`
				};
				var t = e.body;
				let i = (e, t) => t instanceof File || t instanceof Blob ? `${r}
Content-Disposition: form-data; name="${e}"${t.name ? `; filename="${t.name}"` : ""}
Content-Type: ${t.type}

[File Content]
` : eu(t) ? t.map((t) => i(e, t)).join("\n") : `${r}
Content-Disposition: form-data; name="${e}"

${ey(t) ? JSON.stringify(t) : String(t)}
`;
				return Object.entries(t).map(([e, t]) => i(e, t)).join("\n") + `${r}--`;
			}
			return So(e.headers).includes("application/x-www-form-urlencoded") ? hP(e.body) : Sa(e.headers) ? JSON.stringify(e.body, null, 2) : e.body;
		}(t)] })
	] });
}, { displayName: "HttpRequest" }), Si = fL({ response: fg() }, (e, {}) => () => {
	let t = e.response;
	return So(t.headers).includes("image/") ? hb("div", { children: hb("img", {
		src: ((e, t) => {
			let r = new Uint8Array(e), i = "";
			for (let e = r.byteLength, t = 0; t < e; t++) i += String.fromCharCode(r[t]);
			return `data:${t};base64,${btoa(i)}`;
		})(t.body, So(t.headers)),
		alt: ""
	}) }) : hv(Sn, { children: [
		hv("span", { children: ["HTTP/* ", t.status] }),
		hb("br", {}),
		t.headers && hb(sO, { children: Object.entries(t.headers).map(([e, t]) => hb(Se, {
			field: e,
			value: t
		}, e)) }),
		hb("br", {}),
		t.body ? Sa(t.headers) ? JSON.stringify(t.body, null, 2) : `${t.body}` : null
	] });
}, { displayName: "HTTPResponse" });
function So(e = {}) {
	for (let [t, r] of Object.entries(e)) if ("content-type" == t.toLowerCase()) return r;
	return "";
}
var Sa = (e) => So(e).includes("application/json"), Sl = h_((e) => hc(bn.use().response$(e.operationID), hx((e) => hb(Ss, { children: hb(Si, { response: e }) }))), {
	displayName: "ResponsePreview",
	props: ["operationID"]
}), Ss = yU("section", { displayName: "ResponseSection" })({
	maxHeight: "40vh",
	overflow: "auto"
}), Su = h_((e, { slots: t }) => {
	let r = bn.use(), i = {};
	for (let t of e.operation.parameters ?? []) {
		let e = fk.decode(t.schema, (e) => [r.schema(e) ?? {}, fw(e)]).use(Cr(`${t.name}, in=${JSON.stringify(t.in)}`));
		t.required || (e = e.optional()), e.use(Ci(t.schema.title)), ["object", "array"].includes(t.schema.type ?? "") ? i[t.name] = e.use(Co(C8)) : i[t.name] = e;
	}
	if (e.operation.requestBody) {
		let t = Object.entries(e.operation.requestBody.content ?? {})[0];
		if (t) {
			let [e, o] = t, a = fk.decode(o.schema ?? {}, (e) => [r.schema(e) ?? {}, fw(e)]).use(Cr(`body, content-type = ${JSON.stringify(e)}`));
			e.includes("text/") ? i.body = a : e.includes("octet-stream") || e.includes("image/") ? i.body = a.use(Co(Sd)) : i.body = a.use(Co(C8));
		}
	}
	let o = l6(dD), a = l6(dj), l = Ct.of(fl(i), (() => {
		try {
			let e = a.query.params;
			return JSON.parse(atob((Array.isArray(e) ? e[0] : e) ?? ""));
		} catch (e) {}
		return {};
	})());
	hc(l, hu((t) => {
		r.request(e.operation.operationId, t);
	}), hu((e) => {
		o.replace({ query: { params: btoa(JSON.stringify(e)) } });
	}), hh());
	let s = hc(l.inputs$, hx((t) => {
		let i = r.asRequestConfigCreator(e.operation.operationId);
		return i ? hb(Sr, { request: i(t) }) : null;
	}));
	return () => hv(yW, {
		sx: {
			py: 24,
			px: 24,
			gap: 24,
			width: "100%",
			height: "100%",
			display: "flex",
			alignItems: "stretch",
			overflow: "hidden"
		},
		component: "form",
		onSubmit: (e) => {
			e.preventDefault(), l.submit();
		},
		children: [hb(yW, {
			sx: {
				flex: 2,
				py: 24,
				display: "flex",
				flexDirection: "column",
				gap: 32,
				height: "100%",
				overflow: "auto"
			},
			children: [...l.fields(l.typedef)].map((e) => hb(Sc, { field$: e }))
		}), hb(yW, {
			sx: {
				flex: 3,
				gap: 24,
				display: "flex",
				flexDirection: "column",
				height: "100%",
				overflow: "hidden"
			},
			children: hv(yW, {
				sx: {
					display: "flex",
					flexDirection: "column",
					gap: 24,
					height: "100%",
					overflow: "hidden"
				},
				children: [
					s,
					hb(yW, {
						sx: { px: 8 },
						children: hb(_E, {
							type: "submit",
							children: "发起请求"
						})
					}),
					hb(Sl, { operationID: e.operation.operationId }),
					hb(yW, {
						sx: {
							flex: 1,
							overflow: "auto"
						},
						children: t.default?.()
					})
				]
			})
		})]
	}, e.operation.operationId);
}, {
	displayName: "RequestBuilder",
	props: ["operation"]
}), Sc = h_(({ field$: e }, { render: t }) => (l$(() => {
	e.destroy();
}), hc(p4([e, e.input$]), t(([t, r]) => {
	var i;
	let o = cS.metaProp(e.typedef, "inputBy") ?? Sf, a = (cS.metaProp(e.typedef, "readOnlyWhenInitialExist") ?? !1) && !!t.initial;
	return hb(Ca, {
		valued: !ig(r ?? t.initial),
		invalid: !!t.error,
		focus: !!t.focus,
		$label: hv("span", { children: [(i = e).meta.label ?? i.name, e.optional ? "（非必填）" : ""] }),
		$supporting: hv(_K, { children: [hb(_G, { schema: e.typedef }), hb(_4, { schema: e.typedef })] }),
		$trailing: o.$trailing,
		children: hb(o, {
			field$: e,
			readOnly: a
		})
	});
}))), {
	displayName: "ParameterInput",
	props: ["field$"]
}), Sf = fL({
	readOnly: fn().optional(),
	field$: fg()
}, (e) => () => {
	let { readOnly: t, field$: r,...i } = e;
	return hb("input", {
		...i,
		"data-input": !0,
		type: "text",
		readonly: t,
		name: r.name,
		value: r.input,
		onChange: (e) => {
			let t = e.target.value;
			switch (r.typedef.type) {
				case "number":
					try {
						r.update(r.typedef.create(parseFloat(t)));
					} catch (e) {}
					break;
				case "integer":
					try {
						r.update(r.typedef.create(parseInt(t)));
					} catch (e) {}
					break;
				case "boolean":
					try {
						r.update(r.typedef.create("false" !== t || !!t));
					} catch (e) {}
					break;
				default: r.update(r.typedef.create(t));
			}
		},
		onFocus: () => r.focus(),
		onBlur: () => r.blur()
	});
}, { displayName: "TextInput" }), Sd = h_((e) => {
	let t = hg(null);
	return hc(t, hu((t) => {
		t && e.field$.update(t);
	}), hm()), () => {
		let { readOnly: r, accept: i } = e;
		return hv(yW, {
			component: "label",
			"data-input": !0,
			sx: {
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				gap: 8,
				$data_file_input: { display: "none" },
				$data_icon: {
					width: 40,
					height: 40,
					my: 40
				}
			},
			children: [
				hb("input", {
					type: "file",
					name: e.field$.name,
					readonly: r,
					accept: i,
					"data-file-input": !0,
					onChange: (e) => {
						let r = e.target.files?.[0];
						r && (t.value = r);
					}
				}),
				hb(_L, { path: "M5 3H19C20.11 3 21 3.9 21 5V19C21 20.11 20.11 21 19 21H5C3.9 21 3 20.11 3 19V5C3 3.9 3.9 3 5 3M16 17V15H8V17H16M16 11L12 7L8 11H10.5V14H13.5V11H16Z" }),
				hb("span", { children: t.value?.name })
			]
		});
	};
}, {
	displayName: "FileSelectInput",
	props: [
		"field$",
		"readOnly",
		"accept"
	]
}), Sp = h_((e, { render: t }) => {
	let r = bn.use();
	return lE(() => {
		r.request(e.op.operationId, {});
	}), hc(r.response$(e.op.operationId), t((e) => hb(Sh, { database: e.body })));
}, {
	displayName: "DatabaseErContainer",
	props: ["op"]
}), Sh = h_((e) => () => hv(Sy, { children: [hb(Sv, { children: e.database.name }), Object.entries(e.database.tables).map(([t, r]) => hb(Sm, {
	database: e.database,
	table: r,
	tableName: t
}))] }), {
	displayName: "DatabaseErView",
	props: ["database"]
}), Sm = h_((e, { render: t }) => {
	let r = new hf([]);
	return hc(r, t((t) => {
		let i = e.table.columns, o = e.table.constraints;
		return hv(Sb, {
			open: !0,
			children: [
				hv(Sx, { children: [
					hb("span", { children: e.tableName }),
					hb(SM, {}),
					hb(SO, { meta: e.table })
				] }),
				Object.keys(i).map((r) => {
					let o = i[r];
					return hv(Sw, {
						"data-hover": t.includes(r),
						children: [
							hb(Sk, { children: r }),
							o.of ? hb(Sg, {
								database: e.database,
								of: o.of
							}) : hb(SS, { children: o.type }),
							hb(S_, { children: hb(SO, { meta: o }) })
						]
					});
				}),
				Object.entries(o).map(([e, t]) => hb(Sw, {
					onMouseover: () => {
						r.next(t.columnNames.map((e) => e.name));
					},
					onMouseleave: () => {
						r.next([]);
					},
					children: hv(SP, {
						"data-primary": t.primary,
						"data-unique": t.unique,
						children: [
							hb(_L, { path: t.unique ? "M21 18H15V15H13.3C12.2 17.4 9.7 19 7 19C3.1 19 0 15.9 0 12S3.1 5 7 5C9.7 5 12.2 6.6 13.3 9H24V15H21V18M17 16H19V13H22V11H11.9L11.7 10.3C11 8.3 9.1 7 7 7C4.2 7 2 9.2 2 12S4.2 17 7 17C9.1 17 11 15.7 11.7 13.7L11.9 13H17V16M7 15C5.3 15 4 13.7 4 12S5.3 9 7 9 10 10.3 10 12 8.7 15 7 15M7 11C6.4 11 6 11.4 6 12S6.4 13 7 13 8 12.6 8 12 7.6 11 7 11Z" : "M7 14C5.9 14 5 13.1 5 12S5.9 10 7 10 9 10.9 9 12 8.1 14 7 14M12.6 10C11.8 7.7 9.6 6 7 6C3.7 6 1 8.7 1 12S3.7 18 7 18C9.6 18 11.8 16.3 12.6 14H16V18H20V14H23V10H12.6Z" }),
							hb("span", { children: e }),
							hv("span", { children: [
								"(",
								t.columnNames.map((e) => [e.name, ...e.options ?? []].join(" ")).join(","),
								")"
							] })
						]
					})
				})),
				hb(yW, { sx: { py: 4 } })
			]
		});
	}));
}, {
	displayName: "DatabaseErTableView",
	props: [
		"database",
		"table",
		"tableName"
	]
}), Sg = h_((e, { render: t }) => {
	let r = hf.seed(!1), i = hc(r, t((t) => {
		let i = e.of.split(".")[0];
		return hb(_W, {
			isOpen: t,
			onClose: () => {
				r.next(!1);
			},
			children: hb(SA, { children: hb(Sm, {
				database: e.database,
				tableName: i,
				table: e.database.tables[i]
			}) })
		});
	}));
	return () => hv(SC, {
		onClick: () => {
			r.next(!0);
		},
		children: [e.of, i]
	});
}, {
	displayName: "DatabaseErTableColumnOfView",
	props: ["of", "database"]
}), Sy = yU("div", { displayName: "DatabaseErMain" })({
	py: 18,
	px: 24,
	flex: 1,
	overflow: "auto"
}), Sv = yU("div", { displayName: "DatabaseErHeader" })({
	py: 8,
	px: 16,
	textStyle: "sys.label-large"
}), Sb = yU("details", { displayName: "DatabaseErTable" })({
	"& + &": { mt: 16 },
	rounded: "sm",
	border: "1px solid",
	borderColor: go("sys.outline-variant", gi(.38)),
	overflow: "hidden",
	width: "100%"
}), Sx = yU("summary", { displayName: "DatabaseErTableSummary" })({
	textStyle: "sys.label-large",
	py: 8,
	px: 16,
	display: "flex",
	color: "sys.primary"
}), Sw = yU("div", { displayName: "DatabaseErTableDef" })({
	px: 16,
	py: 4,
	display: "flex",
	_hover: { containerStyle: "sys.surface-container-low" }
}), Sk = yU("div", { displayName: "DatabaseErTableColumnName" })({
	display: "flex",
	width: "20vw",
	textStyle: "sys.label-small",
	font: "code"
}), S_ = yU("div", { displayName: "DatabaseErTableColumnComment" })({
	display: "flex",
	textStyle: "sys.label-small",
	width: "20vw",
	justifyContent: "end"
}), SC = yU("div", { displayName: "DatabaseErTableColumnOf" })({
	flex: 1,
	textStyle: "sys.label-small",
	font: "code",
	fontWeight: "bold",
	color: "sys.primary",
	_hover: { cursor: "pointer" }
}), SS = yU("div", { displayName: "DatabaseErTableColumnType" })({
	flex: 1,
	textStyle: "sys.label-small"
}), SO = yU("div", (e, {}) => (t) => hv(t, { children: [
	e.meta.title,
	" ",
	e.meta.description ? hb(_z, {
		$title: hb(_J, { children: hb(_M, { text: e.meta.description }) }),
		children: hb(_L, { path: _$ })
	}) : null
] }), {
	displayName: "DatabaseDescription",
	props: ["meta"]
})({
	position: "relative",
	display: "flex",
	alignItems: "center",
	gap: 4,
	textStyle: "sys.body-small",
	fontSize: 10,
	lineHeight: 12,
	[`${_L}`]: {
		width: 12,
		height: 12,
		overflow: "hidden"
	}
}), SA = yU("div", { displayName: "DialogContainer" })({
	display: "flex",
	containerStyle: "sys.surface",
	width: "90vw",
	roundedBottom: "sm",
	px: 16,
	py: 36,
	top: 0,
	position: "absolute",
	overflow: "auto"
}), SP = yU("div", { displayName: "DatabaseErTableConstraintName" })({
	flex: 1,
	textStyle: "sys.label-small",
	font: "code",
	fontWeight: "bold",
	display: "flex",
	alignItems: "center",
	gap: "1em",
	_primary: { [`${_L}`]: { color: "sys.primary" } },
	_unique: { [`${_L}`]: {
		position: "relative",
		"&::before": {
			content: JSON.stringify("1"),
			position: "absolute",
			right: -6,
			textStyle: "sys.label-small",
			fontSize: 8
		}
	} }
}), SM = yU("div", { displayName: "Spacer" })({ flex: 1 }), ST = yU("pre", ({}, { slots: e }) => (t) => {
	let r = e.default?.(), i = r?.[0];
	return i && "language-mermaid" === i.props.className ? hb(SE, { code: i.children }) : hb(t, { children: r });
}, { displayName: "PreWithMermaid" })({}), SE = h_((e, {}) => {
	let t = hg(null);
	return hc(t, hs((e) => e ? pG((async () => {
		let { default: t } = await o(async () => {
			let { default: e } = await import("./vendor-mermaid.CFmjMvou.chunk.js");
			return { default: e };
		}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]));
		await t.run({ nodes: [e] });
	})()) : pT), hm()), () => hb(SI, {
		ref: t,
		class: "mermaid",
		children: e.code
	});
}, {
	displayName: "Mermaid",
	props: ["code"]
}), SI = yU("div", { displayName: "MermaidContainer" })({ "& > svg": { minWidth: "80%" } }), SD = h_((e, {}) => {
	let t = bn.use(), r = hc(e.operationId$, hs((e) => t.operation$(e))), i = hc(r, hn((e) => !!e)), o = hf.seed(!1), a = hc(i, hx((e) => e.description ? hb(_M, {
		text: e.description,
		components: { pre: ST }
	}) : null)), l = hc(o, hx((e) => hb(_W, {
		isOpen: e,
		onClose: () => {
			o.next(!1);
		},
		children: hb(s, { children: hb(_J, { children: a }) })
	}))), s = yU("div", { displayName: "DialogContainer" })({
		containerStyle: "sys.surface",
		width: "95vw",
		maxHeight: "98vh",
		roundedBottom: "sm",
		px: 32,
		pt: 16,
		py: 48,
		top: 0,
		position: "absolute",
		overflow: "auto",
		pre: { width: "100%" },
		"svg,img": {
			display: "block",
			m: "0 auto"
		}
	}), u = hc(i, hx((e) => e.description ? hv(_R, {
		onClick: () => {
			o.next(!0);
		},
		children: [hb(_L, { path: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z" }), l]
	}) : null)), c = hc(i, hx((e) => hb(Su, {
		operation: e,
		children: hb(sO, { children: Object.entries(e.responses ?? {}).map(([e, t]) => hb(_5, {
			code: e,
			response: t
		}, e)) })
	}, e.operationId))), f = hc(i, hx((e) => hv(SL, {
		sx: { containerStyle: {
			get: "sys.primary-container",
			post: "sys.success-container",
			put: "sys.warning-container",
			delete: "sys.error-container"
		}[e.method] ?? "sys.secondary-container" },
		children: [
			hb("div", {
				"data-operation-method": !0,
				children: e.method
			}),
			hv("div", {
				"data-operation-desc": !0,
				children: [hb("div", {
					"data-operation-path": !0,
					children: e.path
				}), hv("div", {
					"data-operation-summary": !0,
					children: [
						e.summary,
						" ",
						e.operationId != e.summary ? e.operationId : ""
					]
				})]
			}),
			hb(yW, { sx: { flex: 1 } }),
			u
		]
	})));
	return hc(r, hx((e) => e ? "SycDatabaseEr" == e.operationId ? hv(Sj, { children: [f, hb(S$, { children: hb(Sp, { op: e }) })] }, e.operationId) : hv(Sj, { children: [f, hb(S$, { children: hb(yW, {
		sx: {
			flex: 1,
			overflow: "auto"
		},
		children: c
	}) })] }, e.operationId) : null));
}, {
	displayName: "OperationView",
	props: ["operationId"]
}), Sj = yU("div", { displayName: "OperationContainer" })({
	height: "100%",
	display: "flex",
	flexDirection: "column",
	alignItems: "stretch"
}), S$ = yU("div", { displayName: "OperationMain" })({
	flex: 1,
	overflow: "hidden",
	display: "flex",
	flexDirection: "column",
	alignItems: "stretch"
}), SL = yU("summary", { displayName: "OperationHeading" })({
	display: "flex",
	alignItems: "center",
	width: "100%",
	px: 16,
	py: 8,
	gap: 16,
	$data_operation_method: {
		textTransform: "uppercase",
		fontSize: 24,
		fontFamily: "code"
	},
	$data_operation_path: { fontFamily: "code" },
	$data_operation_summary: {
		opacity: .8,
		textStyle: "sys.body-small"
	}
}), SR = (e) => e ? e.startsWith("//") ? `${location.protocol}${e}` : e.startsWith("/") ? `${location.origin}${e}` : e : location.origin, SN = fL(() => {
	let e = v9(), t = bn.use(), r = hT({
		paramsSerializer: hP,
		transformRequestBody: hM
	});
	console.log(SR(e.OPENAPI));
	let i = new URL(SR(e.OPENAPI));
	return hc(pG(r.request({
		method: "GET",
		url: i.toString(),
		inputs: null
	})), hu((e) => {
		t.next((t) => {
			Object.assign(t, e.body), t.servers || (t.servers = [{ url: i.origin }]);
		});
	}), hm()), () => hv(g9, { children: [
		hb(yK, {}),
		hb(yq, { styles: v1 }),
		hv(v8, {
			value: {
				name: e.name,
				description: v6.description
			},
			children: [
				hb(yK, {}),
				hb(yq, { styles: v1 }),
				hb(dH, {})
			]
		})
	] });
}, { displayName: "App" }), SF = fL(() => () => hb(br, {})), Sz = function(e) {
	let t, r, i, o = function(e, t) {
		let r = [], i = /* @__PURE__ */ new Map();
		function o(e, l, s) {
			let u, c, f = !s, d = dS(e);
			d.aliasOf = s && s.record;
			let p = dA(t, e), h = [d];
			if ("alias" in e) for (let t of "string" == typeof e.alias ? [e.alias] : e.alias) h.push(dS(fz({}, d, {
				components: s ? s.record.components : d.components,
				path: t,
				aliasOf: s ? s.record : d
			})));
			for (let t of h) {
				let { path: h } = t;
				if (l && "/" !== h[0]) {
					let e = l.record.path, r = "/" === e[e.length - 1] ? "" : "/";
					t.path = l.record.path + (h && r + h);
				}
				if (u = function(e, t, r) {
					let i = function(e, t) {
						let r = fz({}, dv, t), i = [], o = r.start ? "^" : "", a = [];
						for (let t of e) {
							let e = t.length ? [] : [90];
							r.strict && !t.length && (o += "/");
							for (let i = 0; i < t.length; i++) {
								let l = t[i], s = 40 + .25 * !!r.sensitive;
								if (0 === l.type) i || (o += "/"), o += l.value.replace(db, "\\$&"), s += 40;
								else if (1 === l.type) {
									let { value: e, repeatable: r, optional: u, regexp: c } = l;
									a.push({
										name: e,
										repeatable: r,
										optional: u
									});
									let f = c || dy;
									f !== dy && (s += 10);
									let d = r ? `((?:${f})(?:/(?:${f}))*)` : `(${f})`;
									i || (d = u && t.length < 2 ? `(?:/${d})` : "/" + d), u && (d += "?"), o += d, s += 20, u && (s += -8), r && (s += -20), ".*" === f && (s += -50);
								}
								e.push(s);
							}
							i.push(e);
						}
						if (r.strict && r.end) {
							let e = i.length - 1;
							i[e][i[e].length - 1] += .7000000000000001;
						}
						r.strict || (o += "/?"), r.end ? o += "$" : r.strict && !o.endsWith("/") && (o += "(?:/|$)");
						let l = new RegExp(o, r.sensitive ? "" : "i");
						return {
							re: l,
							score: i,
							keys: a,
							parse: function(e) {
								let t = e.match(l), r = {};
								if (!t) return null;
								for (let e = 1; e < t.length; e++) {
									let i = t[e] || "", o = a[e - 1];
									r[o.name] = i && o.repeatable ? i.split("/") : i;
								}
								return r;
							},
							stringify: function(t) {
								let r = "", i = !1;
								for (let o of e) for (let e of (i && r.endsWith("/") || (r += "/"), i = !1, o)) if (0 === e.type) r += e.value;
								else if (1 === e.type) {
									let { value: a, repeatable: l, optional: s } = e, u = a in t ? t[a] : "";
									if (fH(u) && !l) throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);
									let c = fH(u) ? u.join("/") : u;
									if (!c) if (s) o.length < 2 && (r.endsWith("/") ? r = r.slice(0, -1) : i = !0);
									else throw Error(`Missing required param "${a}"`);
									r += c;
								}
								return r || "/";
							}
						};
					}(function(e) {
						let t, r;
						if (!e) return [[]];
						if ("/" === e) return [[dk]];
						if (!e.startsWith("/")) throw Error(`Invalid path "${e}"`);
						function i(e) {
							throw Error(`ERR (${o})/"${c}": ${e}`);
						}
						let o = 0, a = 0, l = [];
						function s() {
							t && l.push(t), t = [];
						}
						let u = 0, c = "", f = "";
						function d() {
							c && (0 === o ? t.push({
								type: 0,
								value: c
							}) : 1 === o || 2 === o || 3 === o ? (t.length > 1 && ("*" === r || "+" === r) && i(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`), t.push({
								type: 1,
								value: c,
								regexp: f,
								repeatable: "*" === r || "+" === r,
								optional: "*" === r || "?" === r
							})) : i("Invalid state to consume buffer"), c = "");
						}
						for (; u < e.length;) {
							if ("\\" === (r = e[u++]) && 2 !== o) {
								a = o, o = 4;
								continue;
							}
							switch (o) {
								case 0:
									"/" === r ? (c && d(), s()) : ":" === r ? (d(), o = 1) : c += r;
									break;
								case 4:
									c += r, o = a;
									break;
								case 1:
									"(" === r ? o = 2 : d_.test(r) ? c += r : (d(), o = 0, "*" !== r && "?" !== r && "+" !== r && u--);
									break;
								case 2:
									")" === r ? "\\" == f[f.length - 1] ? f = f.slice(0, -1) + r : o = 3 : f += r;
									break;
								case 3:
									d(), o = 0, "*" !== r && "?" !== r && "+" !== r && u--, f = "";
									break;
								default: i("Unknown state");
							}
						}
						return 2 === o && i(`Unfinished custom RegExp for param "${c}"`), d(), s(), l;
					}(e.path), r), o = fz(i, {
						record: e,
						parent: t,
						children: [],
						alias: []
					});
					return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
				}(t, l, p), s ? s.alias.push(u) : ((c = c || u) !== u && c.alias.push(u), f && e.name && !dO(u) && a(e.name)), dP(u) && function(e) {
					let t = function(e, t) {
						let r = 0, i = t.length;
						for (; r !== i;) {
							let o = r + i >> 1;
							0 > dx(e, t[o]) ? i = o : r = o + 1;
						}
						let o = function(e) {
							let t = e;
							for (; t = t.parent;) if (dP(t) && 0 === dx(e, t)) return t;
						}(e);
						return o && (i = t.lastIndexOf(o, i - 1)), i;
					}(e, r);
					r.splice(t, 0, e), e.record.name && !dO(e) && i.set(e.record.name, e);
				}(u), d.children) {
					let e = d.children;
					for (let t = 0; t < e.length; t++) o(e[t], u, s && s.children[t]);
				}
				s = s || u;
			}
			return c ? () => {
				a(c);
			} : fB;
		}
		function a(e) {
			if (dp(e)) {
				let t = i.get(e);
				t && (i.delete(e), r.splice(r.indexOf(t), 1), t.children.forEach(a), t.alias.forEach(a));
			} else {
				let t = r.indexOf(e);
				t > -1 && (r.splice(t, 1), e.record.name && i.delete(e.record.name), e.children.forEach(a), e.alias.forEach(a));
			}
		}
		return t = dA({
			strict: !1,
			end: !0,
			sensitive: !1
		}, t), e.forEach((e) => o(e)), {
			addRoute: o,
			resolve: function(e, t) {
				let o, a, l, s = {};
				if ("name" in e && e.name) {
					if (!(o = i.get(e.name))) throw dm(1, { location: e });
					l = o.record.name, s = fz(dC(t.params, o.keys.filter((e) => !e.optional).concat(o.parent ? o.parent.keys.filter((e) => e.optional) : []).map((e) => e.name)), e.params && dC(e.params, o.keys.map((e) => e.name))), a = o.stringify(s);
				} else if (null != e.path) a = e.path, (o = r.find((e) => e.re.test(a))) && (s = o.parse(a), l = o.record.name);
				else {
					if (!(o = t.name ? i.get(t.name) : r.find((e) => e.re.test(t.path)))) throw dm(1, {
						location: e,
						currentLocation: t
					});
					l = o.record.name, s = fz({}, t.params, e.params), a = o.stringify(s);
				}
				let u = [], c = o;
				for (; c;) u.unshift(c.record), c = c.parent;
				return {
					name: l,
					path: a,
					params: s,
					matched: u,
					meta: u.reduce((e, t) => fz(e, t.meta), {})
				};
			},
			removeRoute: a,
			clearRoutes: function() {
				r.length = 0, i.clear();
			},
			getRoutes: function() {
				return r;
			},
			getRecordMatcher: function(e) {
				return i.get(e);
			}
		};
	}(e.routes, e), a = e.parseQuery || dM, l = e.stringifyQuery || dT, s = e.history, u = dL(), c = dL(), f = dL(), d = aM(di, !0), p = di;
	fN && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
	let h = fV.bind(null, (e) => "" + e), m = fV.bind(null, f6), g = fV.bind(null, f9);
	function y(e, t) {
		let r;
		if (t = fz({}, t || d.value), "string" == typeof e) {
			let r = f7(a, e, t.path), i = o.resolve({ path: r.path }, t), l = s.createHref(r.fullPath);
			return fz(r, i, {
				params: g(i.params),
				hash: f9(r.hash),
				redirectedFrom: void 0,
				href: l
			});
		}
		if (null != e.path) r = fz({}, e, { path: f7(a, e.path, t.path).path });
		else {
			let i = fz({}, e.params);
			for (let e in i) i[e] ?? delete i[e];
			r = fz({}, e, { params: m(i) }), t.params = m(t.params);
		}
		let i = o.resolve(r, t), u = e.hash || "";
		i.params = h(g(i.params));
		let c = function(e, t) {
			let r = t.query ? e(t.query) : "";
			return t.path + (r && "?") + r + (t.hash || "");
		}(l, fz({}, e, {
			hash: f3(u).replace(f0, "{").replace(f2, "}").replace(fY, "^"),
			path: i.path
		})), f = s.createHref(c);
		return fz({
			fullPath: c,
			hash: u,
			query: l === dT ? function(e) {
				let t = {};
				for (let r in e) {
					let i = e[r];
					void 0 !== i && (t[r] = fH(i) ? i.map((e) => null == e ? null : "" + e) : null == i ? i : "" + i);
				}
				return t;
			}(e.query) : e.query || {}
		}, i, {
			redirectedFrom: void 0,
			href: f
		});
	}
	function b(e) {
		return "string" == typeof e ? f7(a, e, d.value.path) : fz({}, e);
	}
	function x(e, t) {
		if (p !== e) return dm(8, {
			from: t,
			to: e
		});
	}
	function w(e) {
		let t = e.matched[e.matched.length - 1];
		if (t && t.redirect) {
			let { redirect: r } = t, i = "function" == typeof r ? r(e) : r;
			return "string" == typeof i && ((i = i.includes("?") || i.includes("#") ? i = b(i) : { path: i }).params = {}), fz({
				query: e.query,
				hash: e.hash,
				params: null != i.path ? {} : e.params
			}, i);
		}
	}
	function k(e, t) {
		let r, i = p = y(e), o = d.value, a = e.state, s = e.force, u = !0 === e.replace, c = w(i);
		return c ? k(fz(b(c), {
			state: "object" == typeof c ? fz({}, a, c.state) : a,
			force: s,
			replace: u
		}), t || i) : (i.redirectedFrom = t, !s && function(e, t, r) {
			let i = t.matched.length - 1, o = r.matched.length - 1;
			return i > -1 && i === o && dt(t.matched[i], r.matched[o]) && dn(t.params, r.params) && e(t.query) === e(r.query) && t.hash === r.hash;
		}(l, o, i) && (r = dm(16, {
			to: i,
			from: o
		}), I(o, o, !0, !1)), (r ? Promise.resolve(r) : S(i, o)).catch((e) => dg(e) ? dg(e, 2) ? e : E(e) : T(e, i, o)).then((e) => {
			if (e) {
				if (dg(e, 2)) return k(fz({ replace: u }, b(e.to), {
					state: "object" == typeof e.to ? fz({}, a, e.to.state) : a,
					force: s
				}), t || i);
			} else e = A(i, o, !0, u, a);
			return O(i, o, e), e;
		}));
	}
	function _(e, t) {
		let r = x(e, t);
		return r ? Promise.reject(r) : Promise.resolve();
	}
	function C(e) {
		let t = j.values().next().value;
		return t && "function" == typeof t.runWithContext ? t.runWithContext(e) : e();
	}
	function S(e, t) {
		let r, [i, o, a] = function(e, t) {
			let r = [], i = [], o = [], a = Math.max(t.matched.length, e.matched.length);
			for (let l = 0; l < a; l++) {
				let a = t.matched[l];
				a && (e.matched.find((e) => dt(e, a)) ? i.push(a) : r.push(a));
				let s = e.matched[l];
				s && !t.matched.find((e) => dt(e, s)) && o.push(s);
			}
			return [
				r,
				i,
				o
			];
		}(e, t);
		for (let o of (r = dN(i.reverse(), "beforeRouteLeave", e, t), i)) o.leaveGuards.forEach((i) => {
			r.push(dR(i, e, t));
		});
		let l = _.bind(null, e, t);
		return r.push(l), L(r).then(() => {
			for (let i of (r = [], u.list())) r.push(dR(i, e, t));
			return r.push(l), L(r);
		}).then(() => {
			for (let i of (r = dN(o, "beforeRouteUpdate", e, t), o)) i.updateGuards.forEach((i) => {
				r.push(dR(i, e, t));
			});
			return r.push(l), L(r);
		}).then(() => {
			for (let i of (r = [], a)) if (i.beforeEnter) if (fH(i.beforeEnter)) for (let o of i.beforeEnter) r.push(dR(o, e, t));
			else r.push(dR(i.beforeEnter, e, t));
			return r.push(l), L(r);
		}).then(() => (e.matched.forEach((e) => e.enterCallbacks = {}), (r = dN(a, "beforeRouteEnter", e, t, C)).push(l), L(r))).then(() => {
			for (let i of (r = [], c.list())) r.push(dR(i, e, t));
			return r.push(l), L(r);
		}).catch((e) => dg(e, 8) ? e : Promise.reject(e));
	}
	function O(e, t, r) {
		f.list().forEach((i) => C(() => i(e, t, r)));
	}
	function A(e, t, r, i, o) {
		let a = x(e, t);
		if (a) return a;
		let l = t === di, u = fN ? history.state : {};
		r && (i || l ? s.replace(e.fullPath, fz({ scroll: l && u && u.scroll }, o)) : s.push(e.fullPath, o)), d.value = e, I(e, t, r, l), E();
	}
	let P = dL(), M = dL();
	function T(e, t, r) {
		E(e);
		let i = M.list();
		return i.length ? i.forEach((i) => i(e, t, r)) : console.error(e), Promise.reject(e);
	}
	function E(e) {
		return r || (r = !e, t || (t = s.listen((e, t, r) => {
			var i, o;
			if (!$.listening) return;
			let a = y(e), l = w(a);
			if (l) return void k(fz(l, {
				replace: !0,
				force: !0
			}), a).catch(fB);
			p = a;
			let u = d.value;
			fN && (i = du(u.fullPath, r.delta), o = ds(), dc.set(i, o)), S(a, u).catch((e) => dg(e, 12) ? e : dg(e, 2) ? (k(fz(b(e.to), { force: !0 }), a).then((e) => {
				dg(e, 20) && !r.delta && r.type === H.pop && s.go(-1, !1);
			}).catch(fB), Promise.reject()) : (r.delta && s.go(-r.delta, !1), T(e, a, u))).then((e) => {
				(e = e || A(a, u, !1)) && (r.delta && !dg(e, 8) ? s.go(-r.delta, !1) : r.type === H.pop && dg(e, 20) && s.go(-1, !1)), O(a, u, e);
			}).catch(fB);
		})), P.list().forEach(([t, r]) => e ? r(e) : t()), P.reset()), e;
	}
	function I(t, r, i, o) {
		let { scrollBehavior: a } = e;
		if (!fN || !a) return Promise.resolve();
		let l = !i && function(e) {
			let t = dc.get(e);
			return dc.delete(e), t;
		}(du(t.fullPath, 0)) || (o || !i) && history.state && history.state.scroll || null;
		return aZ().then(() => a(t, r, l)).then((e) => e && function(e) {
			let t;
			if ("el" in e) {
				let r = e.el, i = "string" == typeof r && r.startsWith("#"), o = "string" == typeof r ? i ? document.getElementById(r.slice(1)) : document.querySelector(r) : r;
				if (!o) return;
				t = function(e, t) {
					let r = document.documentElement.getBoundingClientRect(), i = e.getBoundingClientRect();
					return {
						behavior: t.behavior,
						left: i.left - r.left - (t.left || 0),
						top: i.top - r.top - (t.top || 0)
					};
				}(o, e);
			} else t = e;
			"scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(null != t.left ? t.left : window.scrollX, null != t.top ? t.top : window.scrollY);
		}(e)).catch((e) => T(e, t, r));
	}
	let D = (e) => s.go(e), j = /* @__PURE__ */ new Set(), $ = {
		currentRoute: d,
		listening: !0,
		addRoute: function(e, t) {
			let r, i;
			return dp(e) ? (r = o.getRecordMatcher(e), i = t) : i = e, o.addRoute(i, r);
		},
		removeRoute: function(e) {
			let t = o.getRecordMatcher(e);
			t && o.removeRoute(t);
		},
		clearRoutes: o.clearRoutes,
		hasRoute: function(e) {
			return !!o.getRecordMatcher(e);
		},
		getRoutes: function() {
			return o.getRoutes().map((e) => e.record);
		},
		resolve: y,
		options: e,
		push: function(e) {
			return k(e);
		},
		replace: function(e) {
			return k(fz(b(e), { replace: !0 }));
		},
		go: D,
		back: () => D(-1),
		forward: () => D(1),
		beforeEach: u.add,
		beforeResolve: c.add,
		afterEach: f.add,
		onError: M.add,
		isReady: function() {
			return r && d.value !== di ? Promise.resolve() : new Promise((e, t) => {
				P.add([e, t]);
			});
		},
		install(e) {
			e.component("RouterLink", dz), e.component("RouterView", dH), e.config.globalProperties.$router = this, Object.defineProperty(e.config.globalProperties, "$route", {
				enumerable: !0,
				get: () => aE(d)
			}), fN && !i && d.value === di && (i = !0, k(s.location).catch((e) => {}));
			let o = {};
			for (let e in di) Object.defineProperty(o, e, {
				get: () => d.value[e],
				enumerable: !0
			});
			e.provide(dD, this), e.provide(dj, ay(o)), e.provide(d$, d);
			let a = e.unmount;
			j.add(e), e.unmount = function() {
				j.delete(e), j.size < 1 && (p = di, t && t(), t = null, d.value = di, i = !1, r = !1), a();
			};
		}
	};
	function L(e) {
		return e.reduce((e, t) => e.then(() => C(t)), Promise.resolve());
	}
	return $;
}({
	history: function(e) {
		let t = function(e) {
			let { history: t, location: r } = window, i = { value: df(e, r) }, o = { value: t.state };
			function a(i, a, l) {
				let s = e.indexOf("#"), u = s > -1 ? (r.host && document.querySelector("base") ? e : e.slice(s)) + i : location.protocol + "//" + location.host + e + i;
				try {
					t[l ? "replaceState" : "pushState"](a, "", u), o.value = a;
				} catch (e) {
					console.error(e), r[l ? "replace" : "assign"](u);
				}
			}
			return o.value || a(i.value, {
				back: null,
				current: i.value,
				forward: null,
				position: t.length - 1,
				replaced: !0,
				scroll: null
			}, !0), {
				location: i,
				state: o,
				push: function(e, r) {
					let l = fz({}, o.value, t.state, {
						forward: e,
						scroll: ds()
					});
					a(l.current, l, !0);
					let s = fz({}, dd(i.value, e, null), { position: l.position + 1 }, r);
					a(e, s, !1), i.value = e;
				},
				replace: function(e, r) {
					let l = fz({}, t.state, dd(o.value.back, e, o.value.forward, !0), r, { position: o.value.position });
					a(e, l, !0), i.value = e;
				}
			};
		}(e = function(e) {
			if (!e) if (fN) {
				let t = document.querySelector("base");
				e = (e = t && t.getAttribute("href") || "/").replace(/^\w+:\/\/[^\/]+/, "");
			} else e = "/";
			return "/" !== e[0] && "#" !== e[0] && (e = "/" + e), e.replace(f8, "");
		}(e)), r = function(e, t, r, i) {
			let o = [], a = [], l = null, s = ({ state: a }) => {
				let s = df(e, location), u = r.value, c = t.value, f = 0;
				if (a) {
					if (r.value = s, t.value = a, l && l === u) {
						l = null;
						return;
					}
					f = c ? a.position - c.position : 0;
				} else i(s);
				o.forEach((e) => {
					e(r.value, u, {
						delta: f,
						type: H.pop,
						direction: f ? f > 0 ? W.forward : W.back : W.unknown
					});
				});
			};
			function u() {
				let { history: e } = window;
				e.state && e.replaceState(fz({}, e.state, { scroll: ds() }), "");
			}
			return window.addEventListener("popstate", s), window.addEventListener("beforeunload", u, { passive: !0 }), {
				pauseListeners: function() {
					l = r.value;
				},
				listen: function(e) {
					o.push(e);
					let t = () => {
						let t = o.indexOf(e);
						t > -1 && o.splice(t, 1);
					};
					return a.push(t), t;
				},
				destroy: function() {
					for (let e of a) e();
					a = [], window.removeEventListener("popstate", s), window.removeEventListener("beforeunload", u);
				}
			};
		}(e, t.state, t.location, t.replace), i = fz({
			location: "",
			base: e,
			go: function(e, t = !0) {
				t || r.pauseListeners(), history.go(e);
			},
			createHref: dl.bind(null, e)
		}, t, r);
		return Object.defineProperty(i, "location", {
			enumerable: !0,
			get: () => t.location.value
		}), Object.defineProperty(i, "state", {
			enumerable: !0,
			get: () => t.state.value
		}), i;
	}(new URL(document.querySelector("base")?.href ?? "/").pathname),
	routes: [{
		name: "operations",
		path: "/operations",
		component: () => o(() => import("./webapp-openapi-playground-page.DHWtTzD1.chunk.js"), __vite__mapDeps([11,1,2])),
		children: [{
			name: "operations-operationId",
			path: ":operationId",
			component: () => o(() => import("./webapp-openapi-playground-page-operations.qDOqfNJl.chunk.js"), __vite__mapDeps([12,1,2])),
			props: !0
		}],
		props: !0
	}, {
		name: "index",
		path: "/",
		component: SF,
		props: !0
	}]
});
((...e) => {
	let t = (z || (z = function(e, t) {
		var r;
		let i, o;
		ob().__VUE__ = !0;
		let { insert: a, remove: l, patchProp: s, createElement: u, createText: c, createComment: f, setText: d, setElementText: p, parentNode: h, nextSibling: m, setScopeId: g = iQ, insertStaticContent: y } = e, b = (e, t, r, i = null, o = null, a = null, l, s = null, u = !!t.dynamicChildren) => {
			if (e === t) return;
			e && !sj(e, t) && (i = q(e), V(e, o, a, !0), e = null), -2 === t.patchFlag && (u = !1, t.dynamicChildren = null);
			let { type: c, ref: f, shapeFlag: d } = t;
			switch (c) {
				case sA:
					x(e, t, r, i);
					break;
				case sP:
					w(e, t, r, i);
					break;
				case sM:
					e ?? k(t, r, i, l);
					break;
				case sO:
					T(e, t, r, i, o, a, l, s, u);
					break;
				default: 1 & d ? _(e, t, r, i, o, a, l, s, u) : 6 & d ? E(e, t, r, i, o, a, l, s, u) : 64 & d ? c.process(e, t, r, i, o, a, l, s, u, J) : 128 & d && c.process(e, t, r, i, o, a, l, s, u, J);
			}
			null != f && o ? lw(f, e && e.ref, a, t || e, !t) : null == f && e && null != e.ref && lw(e.ref, null, a, e, !0);
		}, x = (e, t, r, i) => {
			if (null == e) a(t.el = c(t.children), r, i);
			else {
				let r = t.el = e.el;
				t.children !== e.children && d(r, t.children);
			}
		}, w = (e, t, r, i) => {
			null == e ? a(t.el = f(t.children || ""), r, i) : t.el = e.el;
		}, k = (e, t, r, i) => {
			[e.el, e.anchor] = y(e.children, t, r, i, e.el, e.anchor);
		}, _ = (e, t, r, i, o, a, l, s, u) => {
			"svg" === t.type ? l = "svg" : "math" === t.type && (l = "mathml"), null == e ? C(t, r, i, o, a, l, s, u) : A(e, t, o, a, l, s, u);
		}, C = (e, t, r, i, o, l, c, f) => {
			var d, h;
			let m, g, { props: y, shapeFlag: b, transition: x, dirs: w } = e;
			if (m = e.el = u(e.type, l, y && y.is, y), 8 & b ? p(m, e.children) : 16 & b && O(e.children, m, null, i, o, sf(e, l), c, f), w && a5(e, null, i, "created"), S(m, e, e.scopeId, c, i), y) {
				for (let e in y) "value" === e || ol(e) || s(m, e, null, y[e], l, i);
				"value" in y && s(m, "value", null, y.value, l), (g = y.onVnodeBeforeMount) && sB(g, i, e);
			}
			w && a5(e, null, i, "beforeMount");
			let k = (d = o, h = x, (!d || d && !d.pendingBranch) && h && !h.persisted);
			k && x.beforeEnter(m), a(m, t, r), ((g = y && y.onVnodeMounted) || k || w) && sc(() => {
				g && sB(g, i, e), k && x.enter(m), w && a5(e, null, i, "mounted");
			}, o);
		}, S = (e, t, r, i, o) => {
			if (r && g(e, r), i) for (let t = 0; t < i.length; t++) g(e, i[t]);
			if (o) {
				let r = o.subTree;
				if (t === r || r.type.__isSuspense && (r.ssContent === t || r.ssFallback === t)) {
					let t = o.vnode;
					S(e, t, t.scopeId, t.slotScopeIds, o.parent);
				}
			}
		}, O = (e, t, r, i, o, a, l, s, u = 0) => {
			for (let c = u; c < e.length; c++) b(null, e[c] = s ? sz(e[c]) : sF(e[c]), t, r, i, o, a, l, s);
		}, A = (e, t, r, i, o, a, l) => {
			let u, c = t.el = e.el, { patchFlag: f, dynamicChildren: d, dirs: h } = t;
			f |= 16 & e.patchFlag;
			let m = e.props || iX, g = t.props || iX;
			if (r && sd(r, !1), (u = g.onVnodeBeforeUpdate) && sB(u, r, t, e), h && a5(t, e, r, "beforeUpdate"), r && sd(r, !0), (m.innerHTML && null == g.innerHTML || m.textContent && null == g.textContent) && p(c, ""), d ? P(e.dynamicChildren, d, c, r, i, sf(t, o), a) : l || L(e, t, c, null, r, i, sf(t, o), a, !1), f > 0) {
				if (16 & f) M(c, m, g, r, o);
				else if (2 & f && m.class !== g.class && s(c, "class", null, g.class, o), 4 & f && s(c, "style", m.style, g.style, o), 8 & f) {
					let e = t.dynamicProps;
					for (let t = 0; t < e.length; t++) {
						let i = e[t], a = m[i], l = g[i];
						(l !== a || "value" === i) && s(c, i, a, l, o, r);
					}
				}
				1 & f && e.children !== t.children && p(c, t.children);
			} else l || null != d || M(c, m, g, r, o);
			((u = g.onVnodeUpdated) || h) && sc(() => {
				u && sB(u, r, t, e), h && a5(t, e, r, "updated");
			}, i);
		}, P = (e, t, r, i, o, a, l) => {
			for (let s = 0; s < t.length; s++) {
				let u = e[s], c = t[s], f = u.el && (u.type === sO || !sj(u, c) || 198 & u.shapeFlag) ? h(u.el) : r;
				b(u, c, f, null, i, o, a, l, !0);
			}
		}, M = (e, t, r, i, o) => {
			if (t !== r) {
				if (t !== iX) for (let a in t) ol(a) || a in r || s(e, a, t[a], null, o, i);
				for (let a in r) {
					if (ol(a)) continue;
					let l = r[a], u = t[a];
					l !== u && "value" !== a && s(e, a, u, l, o, i);
				}
				"value" in r && s(e, "value", t.value, r.value, o);
			}
		}, T = (e, t, r, i, o, l, s, u, f) => {
			let d = t.el = e ? e.el : c(""), p = t.anchor = e ? e.anchor : c(""), { patchFlag: h, dynamicChildren: m, slotScopeIds: g } = t;
			g && (u = u ? u.concat(g) : g), null == e ? (a(d, r, i), a(p, r, i), O(t.children || [], r, p, o, l, s, u, f)) : h > 0 && 64 & h && m && e.dynamicChildren ? (P(e.dynamicChildren, m, r, o, l, s, u), (null != t.key || o && t === o.subTree) && sp(e, t, !0)) : L(e, t, r, p, o, l, s, u, f);
		}, E = (e, t, r, i, o, a, l, s, u) => {
			t.slotScopeIds = s, null == e ? 512 & t.shapeFlag ? o.ctx.activate(t, r, i, l, u) : I(t, r, i, o, a, l, u) : D(e, t, u);
		}, I = (e, t, r, i, o, a, l) => {
			let s = e.component = function(e, t, r) {
				let i = e.type, o = (t ? t.appContext : e.appContext) || sH, a = {
					uid: sW++,
					vnode: e,
					type: i,
					parent: t,
					appContext: o,
					root: null,
					next: null,
					subTree: null,
					effect: null,
					update: null,
					job: null,
					scope: new oO(!0),
					render: null,
					proxy: null,
					exposed: null,
					exposeProxy: null,
					withProxy: null,
					provides: t ? t.provides : Object.create(o.provides),
					ids: t ? t.ids : [
						"",
						0,
						0
					],
					accessCache: null,
					renderCache: [],
					components: null,
					directives: null,
					propsOptions: function e(t, r, i = !1) {
						let o = i ? sn : r.propsCache, a = o.get(t);
						if (a) return a;
						let l = t.props, s = {}, u = [], c = !1;
						if (!i7(t)) {
							let o = (t) => {
								c = !0;
								let [i, o] = e(t, r, !0);
								i4(s, i), o && u.push(...o);
							};
							!i && r.mixins.length && r.mixins.forEach(o), t.extends && o(t.extends), t.mixins && t.mixins.forEach(o);
						}
						if (!l && !c) return on(t) && o.set(t, iY), iY;
						if (i9(l)) for (let e = 0; e < l.length; e++) {
							let t = oc(l[e]);
							sr(t) && (s[t] = iX);
						}
						else if (l) for (let e in l) {
							let t = oc(e);
							if (sr(t)) {
								let r = l[e], i = s[t] = i9(r) || i7(r) ? { type: r } : i4({}, r), o = i.type, a = !1, c = !0;
								if (i9(o)) for (let e = 0; e < o.length; ++e) {
									let t = o[e], r = i7(t) && t.name;
									if ("Boolean" === r) {
										a = !0;
										break;
									}
									"String" === r && (c = !1);
								}
								else a = i7(o) && "Boolean" === o.name;
								i[0] = a, i[1] = c, (a || i6(i, "default")) && u.push(t);
							}
						}
						let f = [s, u];
						return on(t) && o.set(t, f), f;
					}(i, o),
					emitsOptions: function e(t, r, i = !1) {
						let o = i ? sx : r.emitsCache, a = o.get(t);
						if (void 0 !== a) return a;
						let l = t.emits, s = {}, u = !1;
						if (!i7(t)) {
							let o = (t) => {
								let i = e(t, r, !0);
								i && (u = !0, i4(s, i));
							};
							!i && r.mixins.length && r.mixins.forEach(o), t.extends && o(t.extends), t.mixins && t.mixins.forEach(o);
						}
						return l || u ? (i9(l) ? l.forEach((e) => s[e] = null) : i4(s, l), on(t) && o.set(t, s), s) : (on(t) && o.set(t, null), null);
					}(i, o),
					emit: null,
					emitted: null,
					propsDefaults: iX,
					inheritAttrs: i.inheritAttrs,
					ctx: iX,
					data: iX,
					props: iX,
					attrs: iX,
					slots: iX,
					refs: iX,
					setupState: iX,
					setupContext: null,
					suspense: r,
					suspenseId: r ? r.pendingId : 0,
					asyncDep: null,
					asyncResolved: !1,
					isMounted: !1,
					isUnmounted: !1,
					isDeactivated: !1,
					bc: null,
					c: null,
					bm: null,
					m: null,
					bu: null,
					u: null,
					um: null,
					bum: null,
					da: null,
					a: null,
					rtg: null,
					rtc: null,
					ec: null,
					sp: null
				};
				return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = sb.bind(null, a), e.ce && e.ce(a), a;
			}(e, i, o);
			if (lC(e) && (s.ctx.renderer = J), function(e, t = !1, r = !1) {
				t && R(t);
				let { props: i, children: o } = e.vnode, a = sJ(e);
				(function(e, t, r, i = !1) {
					let o = {}, a = l8();
					for (let r in e.propsDefaults = Object.create(null), se(e, t, o, a), e.propsOptions[0]) r in o || (o[r] = void 0);
					r ? e.props = i ? o : ay(o) : e.type.props ? e.props = o : e.props = a, e.attrs = a;
				})(e, i, a, t);
				var l = r || t;
				let s = e.slots = l8();
				if (32 & e.vnode.shapeFlag) {
					let e = o._;
					e ? (su(s, o, l), l && oy(s, "_", e, !0)) : sl(o, s);
				} else o && ss(e, o);
				a && function(e, t) {
					let r = e.type;
					e.accessCache = Object.create(null), e.proxy = new Proxy(e.ctx, lW);
					let { setup: i } = r;
					if (i) {
						var o;
						oF();
						let r = e.setupContext = i.length > 1 ? {
							attrs: new Proxy((o = e).attrs, sQ),
							slots: o.slots,
							emit: o.emit,
							expose: (e) => {
								o.exposed = e || {};
							}
						} : null, a = sK(e), l = az(i, e, 0, [e.props, r]), s = or(l);
						if (oz(), a(), (s || e.sp) && !l_(e) && lb(e), s) {
							if (l.then(sG, sG), t) return l.then((r) => {
								sX(e, r, t);
							}).catch((t) => {
								aB(t, e, 0);
							});
							e.asyncDep = l;
						} else sX(e, l, t);
					} else sY(e, t);
				}(e, t), t && R(!1);
			}(s, !1, l), s.asyncDep) {
				if (o && o.registerDep(s, j, l), !e.el) {
					let i = s.subTree = sR(sP);
					w(null, i, t, r), e.placeholder = i.el;
				}
			} else j(s, e, t, r, o, a, l);
		}, D = (e, t, r) => {
			let i = t.component = e.component;
			if (function(e, t, r) {
				let { props: i, children: o, component: a } = e, { props: l, children: s, patchFlag: u } = t, c = a.emitsOptions;
				if (t.dirs || t.transition) return !0;
				if (!r || !(u >= 0)) return (!!o || !!s) && (!s || !s.$stable) || i !== l && (i ? !l || sS(i, l, c) : !!l);
				if (1024 & u) return !0;
				if (16 & u) return i ? sS(i, l, c) : !!l;
				if (8 & u) {
					let e = t.dynamicProps;
					for (let t = 0; t < e.length; t++) {
						let r = e[t];
						if (l[r] !== i[r] && !sw(c, r)) return !0;
					}
				}
				return !1;
			}(e, t, r)) if (i.asyncDep && !i.asyncResolved) return void $(i, t, r);
			else i.next = t, i.update();
			else t.el = e.el, i.vnode = t;
		}, j = (e, t, r, i, a, l, s) => {
			let u = () => {
				if (e.isMounted) {
					let t, { next: r, bu: i, u: o, parent: c, vnode: f } = e;
					{
						let t = function e(t) {
							let r = t.subTree.component;
							if (r) if (r.asyncDep && !r.asyncResolved) return r;
							else return e(r);
						}(e);
						if (t) {
							r && (r.el = f.el, $(e, r, s)), t.asyncDep.then(() => {
								e.isUnmounted || u();
							});
							return;
						}
					}
					let d = r;
					sd(e, !1), r ? (r.el = f.el, $(e, r, s)) : r = f, i && og(i), (t = r.props && r.props.onVnodeBeforeUpdate) && sB(t, c, r, f), sd(e, !0);
					let p = sk(e), m = e.subTree;
					e.subTree = p, b(m, p, h(m.el), q(m), e, a, l), r.el = p.el, null === d && function({ vnode: e, parent: t }, r) {
						for (; t;) {
							let i = t.subTree;
							if (i.suspense && i.suspense.activeBranch === e && (i.el = e.el), i === e) (e = t.vnode).el = r, t = t.parent;
							else break;
						}
					}(e, p.el), o && sc(o, a), (t = r.props && r.props.onVnodeUpdated) && sc(() => sB(t, c, r, f), a);
				} else {
					let s, { el: u, props: c } = t, { bm: f, m: d, parent: p, root: h, type: m } = e, g = l_(t);
					if (sd(e, !1), f && og(f), !g && (s = c && c.onVnodeBeforeMount) && sB(s, p, t), sd(e, !0), u && o);
					else {
						h.ce && !1 !== h.ce._def.shadowRoot && h.ce._injectChildStyle(m);
						let o = e.subTree = sk(e);
						b(null, o, r, i, e, a, l), t.el = o.el;
					}
					if (d && sc(d, a), !g && (s = c && c.onVnodeMounted)) {
						let e = t;
						sc(() => sB(s, p, e), a);
					}
					(256 & t.shapeFlag || p && l_(p.vnode) && 256 & p.vnode.shapeFlag) && e.a && sc(e.a, a), e.isMounted = !0, t = r = i = null;
				}
			};
			e.scope.on();
			let c = e.effect = new oP(u);
			e.scope.off();
			let f = e.update = c.run.bind(c), d = e.job = c.runIfDirty.bind(c);
			d.i = e, d.id = e.uid, c.scheduler = () => aX(d), sd(e, !0), f();
		}, $ = (e, t, r) => {
			t.component = e;
			let i = e.vnode.props;
			e.vnode = t, e.next = null, function(e, t, r, i) {
				let { props: o, attrs: a, vnode: { patchFlag: l } } = e, s = aC(o), [u] = e.propsOptions, c = !1;
				if ((i || l > 0) && !(16 & l)) {
					if (8 & l) {
						let r = e.vnode.dynamicProps;
						for (let i = 0; i < r.length; i++) {
							let l = r[i];
							if (sw(e.emitsOptions, l)) continue;
							let f = t[l];
							if (u) if (i6(a, l)) f !== a[l] && (a[l] = f, c = !0);
							else {
								let t = oc(l);
								o[t] = st(u, s, t, f, e, !1);
							}
							else f !== a[l] && (a[l] = f, c = !0);
						}
					}
				} else {
					let i;
					for (let l in se(e, t, o, a) && (c = !0), s) t && (i6(t, l) || (i = od(l)) !== l && i6(t, i)) || (u ? r && (void 0 !== r[l] || void 0 !== r[i]) && (o[l] = st(u, s, l, void 0, e, !0)) : delete o[l]);
					if (a !== s) for (let e in a) t && i6(t, e) || (delete a[e], c = !0);
				}
				c && oZ(e.attrs, "set", "");
			}(e, t.props, i, r), ((e, t, r) => {
				let { vnode: i, slots: o } = e, a = !0, l = iX;
				if (32 & i.shapeFlag) {
					let e = t._;
					e ? r && 1 === e ? a = !1 : su(o, t, r) : (a = !t.$stable, sl(t, o)), l = t;
				} else t && (ss(e, t), l = { default: 1 });
				if (a) for (let e in o) si(e) || null != l[e] || delete o[e];
			})(e, t.children, r), oF(), aQ(e), oz();
		}, L = (e, t, r, i, o, a, l, s, u = !1) => {
			let c = e && e.children, f = e ? e.shapeFlag : 0, d = t.children, { patchFlag: h, shapeFlag: m } = t;
			if (h > 0) {
				if (128 & h) return void F(c, d, r, i, o, a, l, s, u);
				else if (256 & h) return void N(c, d, r, i, o, a, l, s, u);
			}
			8 & m ? (16 & f && U(c, o, a), d !== c && p(r, d)) : 16 & f ? 16 & m ? F(c, d, r, i, o, a, l, s, u) : U(c, o, a, !0) : (8 & f && p(r, ""), 16 & m && O(d, r, i, o, a, l, s, u));
		}, N = (e, t, r, i, o, a, l, s, u) => {
			let c;
			e = e || iY, t = t || iY;
			let f = e.length, d = t.length, p = Math.min(f, d);
			for (c = 0; c < p; c++) {
				let i = t[c] = u ? sz(t[c]) : sF(t[c]);
				b(e[c], i, r, null, o, a, l, s, u);
			}
			f > d ? U(e, o, a, !0, !1, p) : O(t, r, i, o, a, l, s, u, p);
		}, F = (e, t, r, i, o, a, l, s, u) => {
			let c = 0, f = t.length, d = e.length - 1, p = f - 1;
			for (; c <= d && c <= p;) {
				let i = e[c], f = t[c] = u ? sz(t[c]) : sF(t[c]);
				if (sj(i, f)) b(i, f, r, null, o, a, l, s, u);
				else break;
				c++;
			}
			for (; c <= d && c <= p;) {
				let i = e[d], c = t[p] = u ? sz(t[p]) : sF(t[p]);
				if (sj(i, c)) b(i, c, r, null, o, a, l, s, u);
				else break;
				d--, p--;
			}
			if (c > d) {
				if (c <= p) {
					let e = p + 1, d = e < f ? t[e].el : i;
					for (; c <= p;) b(null, t[c] = u ? sz(t[c]) : sF(t[c]), r, d, o, a, l, s, u), c++;
				}
			} else if (c > p) for (; c <= d;) V(e[c], o, a, !0), c++;
			else {
				let h, m = c, g = c, y = /* @__PURE__ */ new Map();
				for (c = g; c <= p; c++) {
					let e = t[c] = u ? sz(t[c]) : sF(t[c]);
					null != e.key && y.set(e.key, c);
				}
				let x = 0, w = p - g + 1, k = !1, _ = 0, C = Array(w);
				for (c = 0; c < w; c++) C[c] = 0;
				for (c = m; c <= d; c++) {
					let i, f = e[c];
					if (x >= w) {
						V(f, o, a, !0);
						continue;
					}
					if (null != f.key) i = y.get(f.key);
					else for (h = g; h <= p; h++) if (0 === C[h - g] && sj(f, t[h])) {
						i = h;
						break;
					}
					void 0 === i ? V(f, o, a, !0) : (C[i - g] = c + 1, i >= _ ? _ = i : k = !0, b(f, t[i], r, null, o, a, l, s, u), x++);
				}
				let S = k ? function(e) {
					let t, r, i, o, a, l = e.slice(), s = [0], u = e.length;
					for (t = 0; t < u; t++) {
						let u = e[t];
						if (0 !== u) {
							if (e[r = s[s.length - 1]] < u) {
								l[t] = r, s.push(t);
								continue;
							}
							for (i = 0, o = s.length - 1; i < o;) e[s[a = i + o >> 1]] < u ? i = a + 1 : o = a;
							u < e[s[i]] && (i > 0 && (l[t] = s[i - 1]), s[i] = t);
						}
					}
					for (i = s.length, o = s[i - 1]; i-- > 0;) s[i] = o, o = l[o];
					return s;
				}(C) : iY;
				for (h = S.length - 1, c = w - 1; c >= 0; c--) {
					let e = g + c, d = t[e], p = t[e + 1], m = e + 1 < f ? p.el || p.placeholder : i;
					0 === C[c] ? b(null, d, r, m, o, a, l, s, u) : k && (h < 0 || c !== S[h] ? z(d, r, m, 2) : h--);
				}
			}
		}, z = (e, t, r, i, o = null) => {
			let { el: s, type: u, transition: c, children: f, shapeFlag: d } = e;
			if (6 & d) return void z(e.component.subTree, t, r, i);
			if (128 & d) return void e.suspense.move(t, r, i);
			if (64 & d) return void u.move(e, t, r, J);
			if (u === sO) {
				a(s, t, r);
				for (let e = 0; e < f.length; e++) z(f[e], t, r, i);
				a(e.anchor, t, r);
				return;
			}
			if (u === sM) return void (({ el: e, anchor: t }, r, i) => {
				let o;
				for (; e && e !== t;) o = m(e), a(e, r, i), e = o;
				a(t, r, i);
			})(e, t, r);
			if (2 !== i && 1 & d && c) if (0 === i) c.beforeEnter(s), a(s, t, r), sc(() => c.enter(s), o);
			else {
				let { leave: i, delayLeave: o, afterLeave: u } = c, f = () => {
					e.ctx.isUnmounted ? l(s) : a(s, t, r);
				}, d = () => {
					s._isLeaving && s[la](!0), i(s, () => {
						f(), u && u();
					});
				};
				o ? o(s, f, d) : d();
			}
			else a(s, t, r);
		}, V = (e, t, r, i = !1, o = !1) => {
			let a, { type: l, props: s, ref: u, children: c, dynamicChildren: f, shapeFlag: d, patchFlag: p, dirs: h, cacheIndex: m } = e;
			if (-2 === p && (o = !1), null != u && (oF(), lw(u, null, r, e, !0), oz()), null != m && (t.renderCache[m] = void 0), 256 & d) return void t.ctx.deactivate(e);
			let g = 1 & d && h, y = !l_(e);
			if (y && (a = s && s.onVnodeBeforeUnmount) && sB(a, t, e), 6 & d) W(e.component, r, i);
			else {
				if (128 & d) return void e.suspense.unmount(r, i);
				g && a5(e, null, t, "beforeUnmount"), 64 & d ? e.type.remove(e, t, r, J, i) : f && !f.hasOnce && (l !== sO || p > 0 && 64 & p) ? U(f, t, r, !1, !0) : (l === sO && 384 & p || !o && 16 & d) && U(c, t, r), i && B(e);
			}
			(y && (a = s && s.onVnodeUnmounted) || g) && sc(() => {
				a && sB(a, t, e), g && a5(e, null, t, "unmounted");
			}, r);
		}, B = (e) => {
			let { type: t, el: r, anchor: i, transition: o } = e;
			if (t === sO) return void H(r, i);
			if (t === sM) return void (({ el: e, anchor: t }) => {
				let r;
				for (; e && e !== t;) r = m(e), l(e), e = r;
				l(t);
			})(e);
			let a = () => {
				l(r), o && !o.persisted && o.afterLeave && o.afterLeave();
			};
			if (1 & e.shapeFlag && o && !o.persisted) {
				let { leave: t, delayLeave: i } = o, l = () => t(r, a);
				i ? i(e.el, a, l) : l();
			} else a();
		}, H = (e, t) => {
			let r;
			for (; e !== t;) r = m(e), l(e), e = r;
			l(t);
		}, W = (e, t, r) => {
			let { bum: i, scope: o, job: a, subTree: l, um: s, m: u, a: c } = e;
			sh(u), sh(c), i && og(i), o.stop(), a && (a.flags |= 8, V(l, e, t, r)), s && sc(s, t), sc(() => {
				e.isUnmounted = !0;
			}, t);
		}, U = (e, t, r, i = !1, o = !1, a = 0) => {
			for (let l = a; l < e.length; l++) V(e[l], t, r, i, o);
		}, q = (e) => {
			if (6 & e.shapeFlag) return q(e.component.subTree);
			if (128 & e.shapeFlag) return e.suspense.next();
			let t = m(e.anchor || e.el), r = t && t[a6];
			return r ? m(r) : t;
		}, K = !1, G = (e, t, r) => {
			null == e ? t._vnode && V(t._vnode, null, null, !0) : b(t._vnode || null, e, t, null, null, null, r), t._vnode = e, K || (K = !0, aQ(), a0(), K = !1);
		}, J = {
			p: b,
			um: V,
			m: z,
			r: B,
			mt: I,
			mc: O,
			pc: L,
			pbc: P,
			n: q,
			o: e
		};
		return {
			render: G,
			hydrate: i,
			createApp: (r = i, function(e, t = null) {
				i7(e) || (e = i4({}, e)), null == t || on(t) || (t = null);
				let i = l2(), o = /* @__PURE__ */ new WeakSet(), a = [], l = !1, s = i.app = {
					_uid: l4++,
					_component: e,
					_props: t,
					_container: null,
					_context: i,
					_instance: null,
					version: "3.5.22",
					get config() {
						return i.config;
					},
					set config(v) {},
					use: (e, ...t) => (o.has(e) || (e && i7(e.install) ? (o.add(e), e.install(s, ...t)) : i7(e) && (o.add(e), e(s, ...t))), s),
					mixin: (e) => (i.mixins.includes(e) || i.mixins.push(e), s),
					component: (e, t) => t ? (i.components[e] = t, s) : i.components[e],
					directive: (e, t) => t ? (i.directives[e] = t, s) : i.directives[e],
					mount(o, a, u) {
						if (!l) {
							let c = s._ceVNode || sR(e, t);
							return c.appContext = i, !0 === u ? u = "svg" : !1 === u && (u = void 0), a && r ? r(c, o) : G(c, o, u), l = !0, s._container = o, o.__vue_app__ = s, s0(c.component);
						}
					},
					onUnmount(e) {
						a.push(e);
					},
					unmount() {
						l && (aV(a, s._instance, 16), G(null, s._container), delete s._container.__vue_app__);
					},
					provide: (e, t) => (i.provides[e] = t, s),
					runWithContext(e) {
						let t = l3;
						l3 = s;
						try {
							return e();
						} finally {
							l3 = t;
						}
					}
				};
				return s;
			})
		};
	}(uE))).createApp(...e), { mount: r } = t;
	return t.mount = (e) => {
		var i, o;
		let a = oe(i = e) ? document.querySelector(i) : i;
		if (!a) return;
		let l = t._component;
		i7(l) || l.render || l.template || (l.template = a.innerHTML), 1 === a.nodeType && (a.textContent = "");
		let s = r(a, !1, (o = a) instanceof SVGElement ? "svg" : "function" == typeof MathMLElement && o instanceof MathMLElement ? "mathml" : void 0);
		return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), s;
	}, t;
})(SN).use(Sz).mount("#root");
export { c1 as a, fL as i, br as n, hb as r, SD as t };
