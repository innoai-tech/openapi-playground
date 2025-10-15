import { g as e, l as t, s as r } from "./lib-nodepkg-typedef.C31p5CR7.chunk.js";
import { a as o, c as i, i as u, l as a, n as l, o as s, r as c, s as f, u as p } from "./vendor-rxjs.Bnzpw5oq.chunk.js";
import { X as h, _t as d, at as y, ft as b, gt as v, ht as m, it as g, lt as _, mt as w, ot as A, pt as O, rt as E, st as S, ut as j, vt as x, yt as P } from "./index.DdIYnUiz.entry.js";
function I(e) {
	var t;
	return null != e && "function" != typeof e && Number.isSafeInteger(t = e.length) && t >= 0;
}
function N(e) {
	return e;
}
function R(e) {
	return "__proto__" === e;
}
function C(e) {
	switch (typeof e) {
		case "number":
		case "symbol": return !1;
		case "string": return e.includes(".") || e.includes("[") || e.includes("]");
	}
}
function T(e) {
	return "string" == typeof e || "symbol" == typeof e ? e : Object.is(e?.valueOf?.(), -0) ? "-0" : String(e);
}
function k(e) {
	if (null == e) return "";
	if ("string" == typeof e) return e;
	if (Array.isArray(e)) return e.map(k).join(",");
	let t = String(e);
	return "0" === t && Object.is(Number(e), -0) ? "-0" : t;
}
function D(e) {
	if (Array.isArray(e)) return e.map(T);
	if ("symbol" == typeof e) return [e];
	e = k(e);
	let t = [], r = e.length;
	if (0 === r) return t;
	let o = 0, i = "", u = "", a = !1;
	for (46 === e.charCodeAt(0) && (t.push(""), o++); o < r;) {
		let l = e[o];
		u ? "\\" === l && o + 1 < r ? i += e[++o] : l === u ? u = "" : i += l : a ? "\"" === l || "'" === l ? u = l : "]" === l ? (a = !1, t.push(i), i = "") : i += l : "[" === l ? (a = !0, i && (t.push(i), i = "")) : "." === l ? i && (t.push(i), i = "") : i += l, o++;
	}
	return i && t.push(i), t;
}
function B(e, t, r) {
	if (null == e) return r;
	switch (typeof t) {
		case "string": {
			if (R(t)) return r;
			let o = e[t];
			if (void 0 === o) if (C(t)) return B(e, D(t), r);
			else return r;
			return o;
		}
		case "number":
		case "symbol": {
			"number" == typeof t && (t = T(t));
			let o = e[t];
			if (void 0 === o) return r;
			return o;
		}
		default: {
			if (Array.isArray(t)) {
				var o = e, i = t, u = r;
				if (0 === i.length) return u;
				let a = o;
				for (let e = 0; e < i.length; e++) {
					if (null == a || R(i[e])) return u;
					a = a[i[e]];
				}
				return void 0 === a ? u : a;
			}
			if (R(t = Object.is(t?.valueOf(), -0) ? "-0" : String(t))) return r;
			let a = e[t];
			if (void 0 === a) return r;
			return a;
		}
	}
}
function L(e) {
	return function(t) {
		return B(t, e);
	};
}
function $(e) {
	return null !== e && ("object" == typeof e || "function" == typeof e);
}
function G(e) {
	return null == e || "object" != typeof e && "function" != typeof e;
}
function M(e, t) {
	return e === t || Number.isNaN(e) && Number.isNaN(t);
}
function U(e, t, r, o) {
	if (t === e) return !0;
	switch (typeof t) {
		case "object": return function(e, t, r, o) {
			if (null == t) return !0;
			if (Array.isArray(t)) return V(e, t, r, o);
			if (t instanceof Map) {
				var i, u, a, l, s = e, c = t, f = r, p = o;
				if (0 === c.size) return !0;
				if (!(s instanceof Map)) return !1;
				for (let [e, t] of c.entries()) if (!1 === f(s.get(e), t, e, s, c, p)) return !1;
				return !0;
			}
			if (t instanceof Set) return i = e, u = t, a = r, l = o, 0 === u.size || i instanceof Set && V([...i], [...u], a, l);
			let h = Object.keys(t);
			if (null == e) return 0 === h.length;
			if (0 === h.length) return !0;
			if (o && o.has(t)) return o.get(t) === e;
			o && o.set(t, e);
			try {
				for (let i = 0; i < h.length; i++) {
					let u = h[i];
					if (!G(e) && !(u in e) || void 0 === t[u] && void 0 !== e[u] || null === t[u] && null !== e[u] || !r(e[u], t[u], u, e, t, o)) return !1;
				}
				return !0;
			} finally {
				o && o.delete(t);
			}
		}(e, t, r, o);
		case "function":
			if (Object.keys(t).length > 0) return U(e, { ...t }, r, o);
			return M(e, t);
		default:
			if (!$(e)) return M(e, t);
			if ("string" == typeof t) return "" === t;
			return !0;
	}
}
function V(e, t, r, o) {
	if (0 === t.length) return !0;
	if (!Array.isArray(e)) return !1;
	let i = /* @__PURE__ */ new Set();
	for (let u = 0; u < t.length; u++) {
		let a = t[u], l = !1;
		for (let s = 0; s < e.length; s++) {
			if (i.has(s)) continue;
			let c = e[s], f = !1;
			if (r(c, a, u, e, t, o) && (f = !0), f) {
				i.add(s), l = !0;
				break;
			}
		}
		if (!l) return !1;
	}
	return !0;
}
function z(e, t) {
	var r;
	return "function" != typeof (r = () => void 0) ? z(e, t) : U(e, t, function e(t, o, i, u, a, l) {
		let s = r(t, o, i, u, a, l);
		return void 0 !== s ? !!s : U(t, o, e, l);
	}, /* @__PURE__ */ new Map());
}
function F(e) {
	return Object.getOwnPropertySymbols(e).filter((t) => Object.prototype.propertyIsEnumerable.call(e, t));
}
function q(e) {
	return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
var W, H, K, Y, X, Q, Z, J = "[object String]", ee = "[object Number]", et = "[object Boolean]", er = "[object Arguments]";
function en(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function eo(e, t, r, o = /* @__PURE__ */ new Map(), i) {
	let u = i?.(e, t, r, o);
	if (void 0 !== u) return u;
	if (G(e)) return e;
	if (o.has(e)) return o.get(e);
	if (Array.isArray(e)) {
		let t = Array(e.length);
		o.set(e, t);
		for (let u = 0; u < e.length; u++) t[u] = eo(e[u], u, r, o, i);
		return Object.hasOwn(e, "index") && (t.index = e.index), Object.hasOwn(e, "input") && (t.input = e.input), t;
	}
	if (e instanceof Date) return new Date(e.getTime());
	if (e instanceof RegExp) {
		let t = new RegExp(e.source, e.flags);
		return t.lastIndex = e.lastIndex, t;
	}
	if (e instanceof Map) {
		let t = /* @__PURE__ */ new Map();
		for (let [u, a] of (o.set(e, t), e)) t.set(u, eo(a, u, r, o, i));
		return t;
	}
	if (e instanceof Set) {
		let t = /* @__PURE__ */ new Set();
		for (let u of (o.set(e, t), e)) t.add(eo(u, void 0, r, o, i));
		return t;
	}
	if ("undefined" != typeof Buffer && Buffer.isBuffer(e)) return e.subarray();
	if (en(e)) {
		let t = new (Object.getPrototypeOf(e)).constructor(e.length);
		o.set(e, t);
		for (let u = 0; u < e.length; u++) t[u] = eo(e[u], u, r, o, i);
		return t;
	}
	if (e instanceof ArrayBuffer || "undefined" != typeof SharedArrayBuffer && e instanceof SharedArrayBuffer) return e.slice(0);
	if (e instanceof DataView) {
		let t = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
		return o.set(e, t), ei(t, e, r, o, i), t;
	}
	if ("undefined" != typeof File && e instanceof File) {
		let t = new File([e], e.name, { type: e.type });
		return o.set(e, t), ei(t, e, r, o, i), t;
	}
	if ("undefined" != typeof Blob && e instanceof Blob) {
		let t = new Blob([e], { type: e.type });
		return o.set(e, t), ei(t, e, r, o, i), t;
	}
	if (e instanceof Error) {
		let t = new e.constructor();
		return o.set(e, t), t.message = e.message, t.name = e.name, t.stack = e.stack, t.cause = e.cause, ei(t, e, r, o, i), t;
	}
	if (e instanceof Boolean) {
		let t = new Boolean(e.valueOf());
		return o.set(e, t), ei(t, e, r, o, i), t;
	}
	if (e instanceof Number) {
		let t = new Number(e.valueOf());
		return o.set(e, t), ei(t, e, r, o, i), t;
	}
	if (e instanceof String) {
		let t = new String(e.valueOf());
		return o.set(e, t), ei(t, e, r, o, i), t;
	}
	if ("object" == typeof e && function(e) {
		switch (q(e)) {
			case er:
			case "[object Array]":
			case "[object ArrayBuffer]":
			case "[object DataView]":
			case et:
			case "[object Date]":
			case "[object Float32Array]":
			case "[object Float64Array]":
			case "[object Int8Array]":
			case "[object Int16Array]":
			case "[object Int32Array]":
			case "[object Map]":
			case ee:
			case "[object Object]":
			case "[object RegExp]":
			case "[object Set]":
			case J:
			case "[object Symbol]":
			case "[object Uint8Array]":
			case "[object Uint8ClampedArray]":
			case "[object Uint16Array]":
			case "[object Uint32Array]": return !0;
			default: return !1;
		}
	}(e)) {
		let t = Object.create(Object.getPrototypeOf(e));
		return o.set(e, t), ei(t, e, r, o, i), t;
	}
	return e;
}
function ei(e, t, r = e, o, i) {
	let u = [...Object.keys(t), ...F(t)];
	for (let a = 0; a < u.length; a++) {
		let l = u[a], s = Object.getOwnPropertyDescriptor(e, l);
		(null == s || s.writable) && (e[l] = eo(t[l], l, r, o, i));
	}
}
function eu(e) {
	var t;
	return e = eo(t = e, void 0, t, /* @__PURE__ */ new Map(), void 0), (t) => z(t, e);
}
function ea(e, t) {
	var r;
	return r = (r, o, i, u) => {
		let a = t?.(r, o, i, u);
		if (void 0 !== a) return a;
		if ("object" == typeof e) switch (Object.prototype.toString.call(e)) {
			case ee:
			case J:
			case et: {
				let t = new e.constructor(e?.valueOf());
				return ei(t, e), t;
			}
			case er: {
				let t = {};
				return ei(t, e), t.length = e.length, t[Symbol.iterator] = e[Symbol.iterator], t;
			}
			default: return;
		}
	}, eo(e, void 0, e, /* @__PURE__ */ new Map(), r);
}
var el = /^(?:0|[1-9]\d*)$/;
function es(e, t = Number.MAX_SAFE_INTEGER) {
	switch (typeof e) {
		case "number": return Number.isInteger(e) && e >= 0 && e < t;
		case "symbol": return !1;
		case "string": return el.test(e);
	}
}
function ec(e) {
	return null !== e && "object" == typeof e && "[object Arguments]" === q(e);
}
function ef(e, t) {
	let r;
	if (0 === (r = Array.isArray(t) ? t : "string" == typeof t && C(t) && e?.[t] == null ? D(t) : [t]).length) return !1;
	let o = e;
	for (let e = 0; e < r.length; e++) {
		let t = r[e];
		if ((null == o || !Object.hasOwn(o, t)) && !((Array.isArray(o) || ec(o)) && es(t) && t < o.length)) return !1;
		o = o[t];
	}
	return !0;
}
function ep(e, t) {
	switch (typeof e) {
		case "object":
			Object.is(e?.valueOf(), -0) && (e = "-0");
			break;
		case "number": e = T(e);
	}
	return t = ea(t), function(r) {
		let o = B(r, e);
		return void 0 === o ? ef(r, e) : void 0 === t ? void 0 === o : z(o, t);
	};
}
function eh(e) {
	if (null == e) return N;
	switch (typeof e) {
		case "function": return e;
		case "object":
			if (Array.isArray(e) && 2 === e.length) return ep(e[0], e[1]);
			return eu(e);
		case "string":
		case "symbol":
		case "number": return L(e);
	}
}
function ed(e) {
	return "object" == typeof e && null !== e;
}
function ey(e) {
	if (I(e)) {
		var t;
		return (t = Array.isArray(e) ? e : Array.from(e))[t.length - 1];
	}
}
function eb(e) {
	return "symbol" == typeof e || e instanceof Symbol;
}
function ev(e) {
	return "string" == typeof e || e instanceof String;
}
function em(e) {
	return I(e) ? [...new Set(Array.from(e))] : [];
}
var eg = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, e_ = /^\w*$/;
function ew(e, t) {
	if (null == e) return !0;
	switch (typeof t) {
		case "symbol":
		case "number":
		case "object":
			if (Array.isArray(t)) return eA(e, t);
			if ("number" == typeof t ? t = T(t) : "object" == typeof t && (t = Object.is(t?.valueOf(), -0) ? "-0" : String(t)), R(t)) return !1;
			if (e?.[t] === void 0) return !0;
			try {
				return delete e[t], !0;
			} catch {
				return !1;
			}
		case "string":
			if (e?.[t] === void 0 && C(t)) return eA(e, D(t));
			if (R(t)) return !1;
			try {
				return delete e[t], !0;
			} catch {
				return !1;
			}
	}
}
function eA(e, t) {
	let r = 1 === t.length ? e : B(e, t.slice(0, -1)), o = t[t.length - 1];
	if (r?.[o] === void 0) return !0;
	if (R(o)) return !1;
	try {
		return delete r[o], !0;
	} catch {
		return !1;
	}
}
function eO(e) {
	return Array.isArray(e);
}
function eE(e, t, r) {
	if (!e) return !1;
	null != r && (t = void 0), t ??= N;
	let o = Array.isArray(e) ? e : Object.values(e);
	switch (typeof t) {
		case "function":
			if (!Array.isArray(e)) {
				let r = Object.keys(e);
				for (let o = 0; o < r.length; o++) {
					let i = r[o];
					if (t(e[i], i, e)) return !0;
				}
				return !1;
			}
			for (let r = 0; r < e.length; r++) if (t(e[r], r, e)) return !0;
			return !1;
		case "object":
			if (Array.isArray(t) && 2 === t.length) {
				let r = ep(t[0], t[1]);
				if (Array.isArray(e)) {
					for (let t = 0; t < e.length; t++) if (r(e[t])) return !0;
					return !1;
				}
				return o.some(r);
			}
			{
				let r = eu(t);
				if (Array.isArray(e)) {
					for (let t = 0; t < e.length; t++) if (r(e[t])) return !0;
					return !1;
				}
				return o.some(r);
			}
		case "number":
		case "symbol":
		case "string": {
			let r = L(t);
			if (Array.isArray(e)) {
				for (let t = 0; t < e.length; t++) if (r(e[t])) return !0;
				return !1;
			}
			return o.some(r);
		}
	}
}
function eS(e) {
	return e;
}
function ej(e) {
	return "number" == typeof e || e instanceof Number;
}
var ex = (e, t, r) => {
	let o = e[t];
	Object.hasOwn(e, t) && M(o, r) && (void 0 !== r || t in e) || (e[t] = r);
};
function eP(e, t, r) {
	return function(e, t, r, o) {
		if (null == e && !$(e)) return e;
		let i = !Array.isArray(t) && ("number" == typeof t || "boolean" == typeof t || null == t || eb(t) || "string" == typeof t && (e_.test(t) || !eg.test(t)) || null != e && Object.hasOwn(e, t)) ? [t] : Array.isArray(t) ? t : "string" == typeof t ? D(t) : [t], u = e;
		for (let t = 0; t < i.length && null != u; t++) {
			let a, l = T(i[t]);
			if (!R(l)) {
				if (t === i.length - 1) a = r(u[l]);
				else {
					let r = u[l], s = o?.(r, l, e);
					a = void 0 !== s ? s : $(r) ? r : es(i[t + 1]) ? [] : {};
				}
				ex(u, l, a), u = u[l];
			}
		}
		return e;
	}(e, t, () => r, () => void 0);
}
function eI(e) {
	return "undefined" != typeof Buffer && Buffer.isBuffer(e);
}
function eN(e) {
	let t = e?.constructor;
	return e === ("function" == typeof t ? t.prototype : Object.prototype);
}
function eR(e, t) {
	if ((e = function(e) {
		var t, r;
		let o = (t = e) ? (t = eb(r = t) ? NaN : Number(r)) === Infinity || t === -Infinity ? (t < 0 ? -1 : 1) * Number.MAX_VALUE : t == t ? t : 0 : 0 === t ? t : 0, i = o % 1;
		return i ? o - i : o;
	}(e)) < 1 || !Number.isSafeInteger(e)) return [];
	let r = Array(e);
	for (let o = 0; o < e; o++) r[o] = "function" == typeof t ? t(o) : o;
	return r;
}
function eC(e) {
	if (I(e)) {
		var t = e;
		let r = eR(t.length, (e) => `${e}`), o = new Set(r);
		return eI(t) && (o.add("offset"), o.add("parent")), en(t) && (o.add("buffer"), o.add("byteLength"), o.add("byteOffset")), [...r, ...Object.keys(t).filter((e) => !o.has(e))];
	}
	let r = Object.keys(Object(e));
	return eN(e) ? r.filter((e) => "constructor" !== e) : r;
}
function eT(e) {
	if (null == e) return [];
	switch (typeof e) {
		case "object":
		case "function":
			if (I(e)) {
				var t = e;
				let r = eR(t.length, (e) => `${e}`), o = new Set(r);
				return eI(t) && (o.add("offset"), o.add("parent")), en(t) && (o.add("buffer"), o.add("byteLength"), o.add("byteOffset")), [...r, ...ek(t).filter((e) => !o.has(e))];
			}
			if (eN(e)) return ek(e).filter((e) => "constructor" !== e);
			return ek(e);
		default: return ek(Object(e));
	}
}
function ek(e) {
	let t = [];
	for (let r in e) t.push(r);
	return t;
}
function eD(e) {
	if ("object" != typeof e || null == e) return !1;
	if (null === Object.getPrototypeOf(e)) return !0;
	if ("[object Object]" !== Object.prototype.toString.call(e)) {
		let t = e[Symbol.toStringTag];
		return null != t && !!Object.getOwnPropertyDescriptor(e, Symbol.toStringTag)?.writable && e.toString() === `[object ${t}]`;
	}
	let t = e;
	for (; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
	return Object.getPrototypeOf(e) === t;
}
function eB(e, t = N) {
	return null == e ? {} : function(e, t) {
		let r = {}, o = Object.keys(e);
		for (let i = 0; i < o.length; i++) {
			let u = o[i], a = e[u];
			r[u] = t(a, u, e);
		}
		return r;
	}(e, eh(t));
}
function eL(e) {
	let t = [];
	for (; e;) t.push(...F(e)), e = Object.getPrototypeOf(e);
	return t;
}
function e$(e, ...t) {
	var r;
	if (null == e) return {};
	let o = (r = e, (t = function(e, t = 1) {
		let r = [], o = Math.floor(t);
		if (!I(e)) return r;
		let i = (e, t) => {
			for (let u = 0; u < e.length; u++) {
				let a = e[u];
				t < o && (Array.isArray(a) || a?.[Symbol.isConcatSpreadable] || null !== a && "object" == typeof a && "[object Arguments]" === Object.prototype.toString.call(a)) ? Array.isArray(a) ? i(a, t + 1) : i(Array.from(a), t + 1) : r.push(a);
			}
		};
		return i(Array.from(e), 0), r;
	}(t)).some((e) => Array.isArray(e) || C(e)) ? function(e) {
		let t = {}, r = [...eT(e), ...eL(e)];
		for (let o = 0; o < r.length; o++) {
			let i = r[o];
			t[i] = ea(e[i], (e) => {
				if (!eD(e)) return e;
			});
		}
		return t;
	}(r) : function(e) {
		let t = {}, r = [...eT(e), ...eL(e)];
		for (let o = 0; o < r.length; o++) {
			let i = r[o];
			t[i] = e[i];
		}
		return t;
	}(r));
	for (let e = 0; e < t.length; e++) {
		let r = t[e];
		switch (typeof r) {
			case "object":
				Array.isArray(r) || (r = Array.from(r));
				for (let e = 0; e < r.length; e++) ew(o, r[e]);
				break;
			case "string":
			case "symbol":
			case "number": ew(o, r);
		}
	}
	return o;
}
function eG(e, ...t) {
	if (null == e) return {};
	let r = {};
	for (let o = 0; o < t.length; o++) {
		let i = t[o];
		switch (typeof i) {
			case "object":
				Array.isArray(i) || (i = I(i) ? Array.from(i) : [i]);
				break;
			case "string":
			case "symbol":
			case "number": i = [i];
		}
		for (let t of i) {
			let o = B(e, t);
			(void 0 !== o || ef(e, t)) && ("string" == typeof t && Object.hasOwn(e, t) ? r[t] = o : eP(r, t, o));
		}
	}
	return r;
}
function eM(e, t) {
	if (null == e) return {};
	let r = eh(t ?? eS), o = {}, i = I(e) ? function(e, t, r = 1) {
		if (t ?? (t = e, e = 0), !Number.isInteger(r) || 0 === r) throw Error("The step value must be a non-zero integer.");
		let o = Math.max(Math.ceil((t - e) / r), 0), i = Array(o);
		for (let t = 0; t < o; t++) i[t] = e + t * r;
		return i;
	}(0, e.length) : [...eT(e), ...eL(e)];
	for (let t = 0; t < i.length; t++) {
		let u = eb(i[t]) ? i[t] : i[t].toString(), a = e[u];
		r(a, u, e) && (o[u] = a);
	}
	return o;
}
function eU(e) {
	return "function" == typeof e;
}
function eV(e) {
	return null === e;
}
function ez(e) {
	return void 0 === e;
}
function eF(e) {
	return "boolean" == typeof e || e instanceof Boolean;
}
function eq(e) {
	if (null == e) return !0;
	if (I(e)) return ("function" == typeof e.splice || "string" == typeof e || "undefined" != typeof Buffer && !!Buffer.isBuffer(e) || !!en(e) || !!ec(e)) && 0 === e.length;
	if ("object" == typeof e) {
		if (e instanceof Map || e instanceof Set) return 0 === e.size;
		let t = Object.keys(e);
		return eN(e) ? 0 === t.filter((e) => "constructor" !== e).length : 0 === t.length;
	}
	return !0;
}
function eW(e) {
	return Number.isInteger(e);
}
var eH = /\p{Lu}?\p{Ll}+|[0-9]+|\p{Lu}+(?!\p{Ll})|\p{Emoji_Presentation}|\p{Extended_Pictographic}|\p{L}+/gu;
function eK(e) {
	return Array.from(e.match(eH) ?? []);
}
function eY(e) {
	return "string" != typeof e && (e = k(e)), e.replace(/['\u2019]/g, "");
}
function eX(e) {
	let t = eK(eY(e));
	if (0 === t.length) return "";
	let [r, ...o] = t;
	return `${r.toLowerCase()}${o.map((e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join("")}`;
}
function eQ(e) {
	return eK(eY(e)).map((e) => e.toLowerCase()).join("-");
}
function eZ(e, t = 0, r = " ") {
	return k(e).padStart(t, r);
}
var eJ = Symbol.for("immer-nothing"), e0 = Symbol.for("immer-draftable"), e1 = Symbol.for("immer-state");
function e2(e) {
	throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`);
}
var e3 = Object.getPrototypeOf;
function e4(e) {
	return !!e && !!e[e1];
}
function e6(e) {
	return !!e && (e5(e) || Array.isArray(e) || !!e[e0] || !!e.constructor?.[e0] || tr(e) || tn(e));
}
var e7 = Object.prototype.constructor.toString();
function e5(e) {
	if (!e || "object" != typeof e) return !1;
	let t = e3(e);
	if (null === t) return !0;
	let r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
	return r === Object || "function" == typeof r && Function.toString.call(r) === e7;
}
function e8(e, t) {
	0 === e9(e) ? Reflect.ownKeys(e).forEach((r) => {
		t(r, e[r], e);
	}) : e.forEach((r, o) => t(o, r, e));
}
function e9(e) {
	let t = e[e1];
	return t ? t.type_ : Array.isArray(e) ? 1 : tr(e) ? 2 : 3 * !!tn(e);
}
function te(e, t) {
	return 2 === e9(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function tt(e, t, r) {
	let o = e9(e);
	2 === o ? e.set(t, r) : 3 === o ? e.add(r) : e[t] = r;
}
function tr(e) {
	return e instanceof Map;
}
function tn(e) {
	return e instanceof Set;
}
function to(e) {
	return e.copy_ || e.base_;
}
function ti(e, t) {
	if (tr(e)) return new Map(e);
	if (tn(e)) return new Set(e);
	if (Array.isArray(e)) return Array.prototype.slice.call(e);
	let r = e5(e);
	if (!0 !== t && ("class_only" !== t || r)) {
		let t = e3(e);
		return null !== t && r ? { ...e } : Object.assign(Object.create(t), e);
	}
	{
		let t = Object.getOwnPropertyDescriptors(e);
		delete t[e1];
		let r = Reflect.ownKeys(t);
		for (let o = 0; o < r.length; o++) {
			let i = r[o], u = t[i];
			!1 === u.writable && (u.writable = !0, u.configurable = !0), (u.get || u.set) && (t[i] = {
				configurable: !0,
				writable: !0,
				enumerable: u.enumerable,
				value: e[i]
			});
		}
		return Object.create(e3(e), t);
	}
}
function tu(e, t = !1) {
	return tl(e) || e4(e) || !e6(e) || (e9(e) > 1 && Object.defineProperties(e, {
		set: { value: ta },
		add: { value: ta },
		clear: { value: ta },
		delete: { value: ta }
	}), Object.freeze(e), t && Object.values(e).forEach((e) => tu(e, !0))), e;
}
function ta() {
	e2(2);
}
function tl(e) {
	return Object.isFrozen(e);
}
var ts = {};
function tc(e) {
	let t = ts[e];
	return t || e2(0, e), t;
}
function tf(e, t) {
	t && (tc("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function tp(e) {
	th(e), e.drafts_.forEach(ty), e.drafts_ = null;
}
function th(e) {
	e === W && (W = e.parent_);
}
function td(e) {
	return W = {
		drafts_: [],
		parent_: W,
		immer_: e,
		canAutoFreeze_: !0,
		unfinalizedDrafts_: 0
	};
}
function ty(e) {
	let t = e[e1];
	0 === t.type_ || 1 === t.type_ ? t.revoke_() : t.revoked_ = !0;
}
function tb(e, t) {
	t.unfinalizedDrafts_ = t.drafts_.length;
	let r = t.drafts_[0];
	return void 0 !== e && e !== r ? (r[e1].modified_ && (tp(t), e2(4)), e6(e) && (e = tv(t, e), t.parent_ || tg(t, e)), t.patches_ && tc("Patches").generateReplacementPatches_(r[e1].base_, e, t.patches_, t.inversePatches_)) : e = tv(t, r, []), tp(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== eJ ? e : void 0;
}
function tv(e, t, r) {
	if (tl(t)) return t;
	let o = t[e1];
	if (!o) return e8(t, (i, u) => tm(e, o, t, i, u, r)), t;
	if (o.scope_ !== e) return t;
	if (!o.modified_) return tg(e, o.base_, !0), o.base_;
	if (!o.finalized_) {
		o.finalized_ = !0, o.scope_.unfinalizedDrafts_--;
		let t = o.copy_, i = t, u = !1;
		3 === o.type_ && (i = new Set(t), t.clear(), u = !0), e8(i, (i, a) => tm(e, o, t, i, a, r, u)), tg(e, t, !1), r && e.patches_ && tc("Patches").generatePatches_(o, r, e.patches_, e.inversePatches_);
	}
	return o.copy_;
}
function tm(e, t, r, o, i, u, a) {
	if (e4(i)) {
		let a = tv(e, i, u && t && 3 !== t.type_ && !te(t.assigned_, o) ? u.concat(o) : void 0);
		if (tt(r, o, a), !e4(a)) return;
		e.canAutoFreeze_ = !1;
	} else a && r.add(i);
	if (e6(i) && !tl(i)) {
		if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
		tv(e, i), (!t || !t.scope_.parent_) && "symbol" != typeof o && (tr(r) ? r.has(o) : Object.prototype.propertyIsEnumerable.call(r, o)) && tg(e, i);
	}
}
function tg(e, t, r = !1) {
	!e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && tu(t, r);
}
var t_ = {
	get(e, t) {
		if (t === e1) return e;
		let r = to(e);
		if (!te(r, t)) {
			var o = e;
			let a = tO(r, t);
			return a ? "value" in a ? a.value : a.get?.call(o.draft_) : void 0;
		}
		let a = r[t];
		return e.finalized_ || !e6(a) ? a : a === tA(e.base_, t) ? (tS(e), e.copy_[t] = tj(a, e)) : a;
	},
	has: (e, t) => t in to(e),
	ownKeys: (e) => Reflect.ownKeys(to(e)),
	set(e, t, r) {
		let o = tO(to(e), t);
		if (o?.set) return o.set.call(e.draft_, r), !0;
		if (!e.modified_) {
			let o = tA(to(e), t), i = o?.[e1];
			if (i && i.base_ === r) return e.copy_[t] = r, e.assigned_[t] = !1, !0;
			if ((r === o ? 0 !== r || 1 / r == 1 / o : r != r && o != o) && (void 0 !== r || te(e.base_, t))) return !0;
			tS(e), tE(e);
		}
		return !!(e.copy_[t] === r && (void 0 !== r || t in e.copy_) || Number.isNaN(r) && Number.isNaN(e.copy_[t])) || (e.copy_[t] = r, e.assigned_[t] = !0, !0);
	},
	deleteProperty: (e, t) => (void 0 !== tA(e.base_, t) || t in e.base_ ? (e.assigned_[t] = !1, tS(e), tE(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0),
	getOwnPropertyDescriptor(e, t) {
		let r = to(e), o = Reflect.getOwnPropertyDescriptor(r, t);
		return o ? {
			writable: !0,
			configurable: 1 !== e.type_ || "length" !== t,
			enumerable: o.enumerable,
			value: r[t]
		} : o;
	},
	defineProperty() {
		e2(11);
	},
	getPrototypeOf: (e) => e3(e.base_),
	setPrototypeOf() {
		e2(12);
	}
}, tw = {};
function tA(e, t) {
	let r = e[e1];
	return (r ? to(r) : e)[t];
}
function tO(e, t) {
	if (!(t in e)) return;
	let r = e3(e);
	for (; r;) {
		let e = Object.getOwnPropertyDescriptor(r, t);
		if (e) return e;
		r = e3(r);
	}
}
function tE(e) {
	!e.modified_ && (e.modified_ = !0, e.parent_ && tE(e.parent_));
}
function tS(e) {
	e.copy_ || (e.copy_ = ti(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
function tj(e, t) {
	let r = tr(e) ? tc("MapSet").proxyMap_(e, t) : tn(e) ? tc("MapSet").proxySet_(e, t) : function(e, t) {
		let r = Array.isArray(e), o = {
			type_: +!!r,
			scope_: t ? t.scope_ : W,
			modified_: !1,
			finalized_: !1,
			assigned_: {},
			parent_: t,
			base_: e,
			draft_: null,
			copy_: null,
			revoke_: null,
			isManual_: !1
		}, i = o, u = t_;
		r && (i = [o], u = tw);
		let { revoke: a, proxy: l } = Proxy.revocable(i, u);
		return o.draft_ = l, o.revoke_ = a, l;
	}(e, t);
	return (t ? t.scope_ : W).drafts_.push(r), r;
}
e8(t_, (e, t) => {
	tw[e] = function() {
		return arguments[0] = arguments[0][0], t.apply(this, arguments);
	};
}), tw.deleteProperty = function(e, t) {
	return tw.set.call(this, e, t, void 0);
}, tw.set = function(e, t, r) {
	return t_.set.call(this, e[0], t, r, e[0]);
};
var tx = new class {
	constructor(e) {
		this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (e, t, r) => {
			let o;
			if ("function" == typeof e && "function" != typeof t) {
				let r = t;
				t = e;
				let o = this;
				return function(e = r, ...i) {
					return o.produce(e, (e) => t.call(this, e, ...i));
				};
			}
			if ("function" != typeof t && e2(6), void 0 !== r && "function" != typeof r && e2(7), e6(e)) {
				let i = td(this), u = tj(e, void 0), a = !0;
				try {
					o = t(u), a = !1;
				} finally {
					a ? tp(i) : th(i);
				}
				return tf(i, r), tb(o, i);
			}
			if (e && "object" == typeof e) e2(1, e);
			else {
				if (void 0 === (o = t(e)) && (o = e), o === eJ && (o = void 0), this.autoFreeze_ && tu(o, !0), r) {
					let t = [], i = [];
					tc("Patches").generateReplacementPatches_(e, o, t, i), r(t, i);
				}
				return o;
			}
		}, this.produceWithPatches = (e, t) => {
			let r, o;
			return "function" == typeof e ? (t, ...r) => this.produceWithPatches(t, (t) => e(t, ...r)) : [
				this.produce(e, t, (e, t) => {
					r = e, o = t;
				}),
				r,
				o
			];
		}, "boolean" == typeof e?.autoFreeze && this.setAutoFreeze(e.autoFreeze), "boolean" == typeof e?.useStrictShallowCopy && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
	}
	createDraft(e) {
		var t;
		e6(e) || e2(8), e4(e) && (e4(t = e) || e2(10, t), e = function e(t) {
			let r;
			if (!e6(t) || tl(t)) return t;
			let o = t[e1];
			if (o) {
				if (!o.modified_) return o.base_;
				o.finalized_ = !0, r = ti(t, o.scope_.immer_.useStrictShallowCopy_);
			} else r = ti(t, !0);
			return e8(r, (t, o) => {
				tt(r, t, e(o));
			}), o && (o.finalized_ = !1), r;
		}(t));
		let r = td(this), o = tj(e, void 0);
		return o[e1].isManual_ = !0, th(r), o;
	}
	finishDraft(e, t) {
		let r = e && e[e1];
		r && r.isManual_ || e2(9);
		let { scope_: o } = r;
		return tf(o, t), tb(void 0, o);
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
			let o = t[r];
			if (0 === o.path.length && "replace" === o.op) {
				e = o.value;
				break;
			}
		}
		r > -1 && (t = t.slice(r + 1));
		let o = tc("Patches").applyPatches_;
		return e4(e) ? o(e, t) : this.produce(e, (e) => o(e, t));
	}
}().produce, tP = Symbol("component");
let tI = (e) => eD(e) && e[tP] === tP, tN = (t) => e(Object.values(t)[0]);
function tR(...e) {
	let t, r = {}, o = {};
	for (let i of e) {
		if (eU(i)) {
			t = i;
			continue;
		}
		ez(t) ? r = i : o = i;
	}
	let [i, u] = function(e, t = N) {
		if (!e) return [[], []];
		let r = I(e) ? e : Object.values(e);
		t = eh(t);
		let o = [], i = [];
		for (let e = 0; e < r.length; e++) {
			let u = r[e];
			t(u) ? o.push(u) : i.push(u);
		}
		return [o, i];
	}(Object.keys(r), (e) => /^on[A-Z]/.test(e)), a = {
		emits: [...i.map((e) => eQ(e.slice(2))), ...o.emits ?? []],
		props: [...u.filter((e) => !/^[$]/.test(e)), ...o.props ?? []].reduce((e, t) => {
			let o = r[t];
			return o ? {
				...e,
				[t]: {
					default() {
						try {
							return o.create(void 0);
						} catch (e) {
							console.log(e);
						}
					},
					validator: (e) => o.validate(e)
				}
			} : {
				...e,
				[t]: { default() {} }
			};
		}, {})
	};
	return {
		...o,
		get name() {
			return this.displayName ?? o.displayName ?? o.name;
		},
		set name(n) {
			o.name = n;
		},
		setup: (e, r) => t(e, r),
		emits: a.emits,
		props: a.props,
		inheritAttrs: o.inheritAttrs,
		[tP]: tP
	};
}
let tC = (e, t) => new Proxy(e, { get: (e, r) => t[r] ?? e[r] });
var tT = "undefined" != typeof document;
function tk(e) {
	return "object" == typeof e || "displayName" in e || "props" in e || "__vccOpts" in e;
}
var tD = Object.assign;
function tB(e, t) {
	let r = {};
	for (let o in t) {
		let i = t[o];
		r[o] = t$(i) ? i.map(e) : e(i);
	}
	return r;
}
var tL = () => {}, t$ = Array.isArray;
function tG(e, t) {
	let r = {};
	for (let o in e) r[o] = o in t ? t[o] : e[o];
	return r;
}
var tM = /#/g, tU = /&/g, tV = /\//g, tz = /=/g, tF = /\?/g, tq = /\+/g, tW = /%5B/g, tH = /%5D/g, tK = /%5E/g, tY = /%60/g, tX = /%7B/g, tQ = /%7C/g, tZ = /%7D/g, tJ = /%20/g;
function t0(e) {
	return null == e ? "" : encodeURI("" + e).replace(tQ, "|").replace(tW, "[").replace(tH, "]");
}
function t1(e) {
	return t0(e).replace(tq, "%2B").replace(tJ, "+").replace(tM, "%23").replace(tU, "%26").replace(tY, "`").replace(tX, "{").replace(tZ, "}").replace(tK, "^");
}
function t2(e) {
	return t0(e).replace(tM, "%23").replace(tF, "%3F").replace(tV, "%2F");
}
function t3(e) {
	if (null == e) return null;
	try {
		return decodeURIComponent("" + e);
	} catch (e) {}
	return "" + e;
}
var t4 = /\/$/;
function t6(e, t, r = "/") {
	let o, i = {}, u = "", a = "", l = t.indexOf("#"), s = t.indexOf("?");
	return (s = l >= 0 && s > l ? -1 : s) >= 0 && (o = t.slice(0, s), i = e(u = t.slice(s, l > 0 ? l : t.length))), l >= 0 && (o = o || t.slice(0, l), a = t.slice(l, t.length)), {
		fullPath: (o = function(e, t) {
			let r, o;
			if (e.startsWith("/")) return e;
			if (!e) return t;
			let i = t.split("/"), u = e.split("/"), a = u[u.length - 1];
			(".." === a || "." === a) && u.push("");
			let l = i.length - 1;
			for (r = 0; r < u.length; r++) if ("." !== (o = u[r])) if (".." === o) l > 1 && l--;
			else break;
			return i.slice(0, l).join("/") + "/" + u.slice(r).join("/");
		}(null != o ? o : t, r)) + u + a,
		path: o,
		query: i,
		hash: t3(a)
	};
}
function t7(e, t) {
	return t && e.toLowerCase().startsWith(t.toLowerCase()) ? e.slice(t.length) || "/" : e;
}
function t5(e, t) {
	return (e.aliasOf || e) === (t.aliasOf || t);
}
function t8(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let i in e) {
		var r, o;
		if (r = e[i], o = t[i], t$(r) ? !t9(r, o) : t$(o) ? !t9(o, r) : r !== o) return !1;
	}
	return !0;
}
function t9(e, t) {
	return t$(t) ? e.length === t.length && e.every((e, r) => e === t[r]) : 1 === e.length && e[0] === t;
}
var re = {
	path: "/",
	name: void 0,
	params: {},
	query: {},
	hash: "",
	fullPath: "/",
	matched: [],
	meta: {},
	redirectedFrom: void 0
}, rt = ((H = {}).pop = "pop", H.push = "push", H), rr = ((K = {}).back = "back", K.forward = "forward", K.unknown = "", K), rn = /^[^#]+#/;
function ro(e, t) {
	return e.replace(rn, "#") + t;
}
var ri = () => ({
	left: window.scrollX,
	top: window.scrollY
});
function ru(e, t) {
	return (history.state ? history.state.position - t : -1) + e;
}
var ra = /* @__PURE__ */ new Map();
function rl(e) {
	return "string" == typeof e || "symbol" == typeof e;
}
var rs = ((Y = {})[Y.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", Y[Y.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", Y[Y.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", Y[Y.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", Y[Y.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", Y), rc = Symbol("");
function rf(e, t) {
	return tD(Error(), {
		type: e,
		[rc]: !0
	}, t);
}
function rp(e, t) {
	return e instanceof Error && rc in e && (null == t || !!(e.type & t));
}
function rh(e) {
	let t = {};
	if ("" === e || "?" === e) return t;
	let r = ("?" === e[0] ? e.slice(1) : e).split("&");
	for (let e = 0; e < r.length; ++e) {
		let o = r[e].replace(tq, " "), i = o.indexOf("="), u = t3(i < 0 ? o : o.slice(0, i)), a = i < 0 ? null : t3(o.slice(i + 1));
		if (u in t) {
			let e = t[u];
			t$(e) || (e = t[u] = [e]), e.push(a);
		} else t[u] = a;
	}
	return t;
}
function rd(e) {
	let t = "";
	for (let r in e) {
		let o = e[r];
		if (r = t1(r).replace(tz, "%3D"), null == o) {
			void 0 !== o && (t += (t.length ? "&" : "") + r);
			continue;
		}
		(t$(o) ? o.map((e) => e && t1(e)) : [o && t1(o)]).forEach((e) => {
			void 0 !== e && (t += (t.length ? "&" : "") + r, null != e && (t += "=" + e));
		});
	}
	return t;
}
rs.MATCHER_NOT_FOUND, rs.NAVIGATION_GUARD_REDIRECT, rs.NAVIGATION_ABORTED, rs.NAVIGATION_CANCELLED, rs.NAVIGATION_DUPLICATED;
var ry = Symbol(""), rb = Symbol(""), rv = Symbol(""), rm = Symbol(""), rg = Symbol("");
function r_() {
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
function rw(e, t, r, o, i, u = (e) => e()) {
	let a = o && (o.enterCallbacks[i] = o.enterCallbacks[i] || []);
	return () => new Promise((l, s) => {
		let c = (e) => {
			if (!1 === e) s(rf(rs.NAVIGATION_ABORTED, {
				from: r,
				to: t
			}));
			else if (e instanceof Error) s(e);
			else "string" == typeof e || e && "object" == typeof e ? s(rf(rs.NAVIGATION_GUARD_REDIRECT, {
				from: t,
				to: e
			})) : (a && o.enterCallbacks[i] === a && "function" == typeof e && a.push(e), l());
		}, f = Promise.resolve(u(() => e.call(o && o.instances[i], t, r, c)));
		e.length < 3 && (f = f.then(c)), f.catch((e) => s(e));
	});
}
function rA(e, t, r, o, i = (e) => e()) {
	let u = [];
	for (let a of e) for (let e in a.components) {
		let l = a.components[e];
		if ("beforeRouteEnter" === t || a.instances[e]) if (tk(l)) {
			let s = (l.__vccOpts || l)[t];
			s && u.push(rw(s, r, o, a, e, i));
		} else {
			let s = l();
			u.push(() => s.then((u) => {
				if (!u) throw Error(`Couldn't resolve component "${e}" at "${a.path}"`);
				let l = u.__esModule || "Module" === u[Symbol.toStringTag] || u.default && tk(u.default) ? u.default : u;
				a.mods[e] = u, a.components[e] = l;
				let s = (l.__vccOpts || l)[t];
				return s && rw(s, r, o, a, e, i)();
			}));
		}
	}
	return u;
}
function rO(e, t) {
	let { pathname: r, search: o, hash: i } = t, u = e.indexOf("#");
	if (u > -1) {
		let t = i.includes(e.slice(u)) ? e.slice(u).length : 1, r = i.slice(t);
		return "/" !== r[0] && (r = "/" + r), t7(r, "");
	}
	return t7(r, e) + o + i;
}
function rE(e, t, r, o = !1, i = !1) {
	return {
		back: e,
		current: t,
		forward: r,
		replaced: o,
		position: window.history.length,
		scroll: i ? ri() : null
	};
}
function rS(e) {
	let t = function(e) {
		let { history: t, location: r } = window, o = { value: rO(e, r) }, i = { value: t.state };
		function u(o, u, a) {
			let l = e.indexOf("#"), s = l > -1 ? (r.host && document.querySelector("base") ? e : e.slice(l)) + o : location.protocol + "//" + location.host + e + o;
			try {
				t[a ? "replaceState" : "pushState"](u, "", s), i.value = u;
			} catch (e) {
				console.error(e), r[a ? "replace" : "assign"](s);
			}
		}
		return i.value || u(o.value, {
			back: null,
			current: o.value,
			forward: null,
			position: t.length - 1,
			replaced: !0,
			scroll: null
		}, !0), {
			location: o,
			state: i,
			push: function(e, r) {
				let a = tD({}, i.value, t.state, {
					forward: e,
					scroll: ri()
				});
				u(a.current, a, !0), u(e, tD({}, rE(o.value, e, null), { position: a.position + 1 }, r), !1), o.value = e;
			},
			replace: function(e, r) {
				u(e, tD({}, t.state, rE(i.value.back, e, i.value.forward, !0), r, { position: i.value.position }), !0), o.value = e;
			}
		};
	}(e = function(e) {
		if (!e) if (tT) {
			let t = document.querySelector("base");
			e = (e = t && t.getAttribute("href") || "/").replace(/^\w+:\/\/[^\/]+/, "");
		} else e = "/";
		return "/" !== e[0] && "#" !== e[0] && (e = "/" + e), e.replace(t4, "");
	}(e)), r = function(e, t, r, o) {
		let i = [], u = [], a = null, l = ({ state: u }) => {
			let l = rO(e, location), s = r.value, c = t.value, f = 0;
			if (u) {
				if (r.value = l, t.value = u, a && a === s) {
					a = null;
					return;
				}
				f = c ? u.position - c.position : 0;
			} else o(l);
			i.forEach((e) => {
				e(r.value, s, {
					delta: f,
					type: rt.pop,
					direction: f ? f > 0 ? rr.forward : rr.back : rr.unknown
				});
			});
		};
		function s() {
			if ("hidden" === document.visibilityState) {
				let { history: e } = window;
				e.state && e.replaceState(tD({}, e.state, { scroll: ri() }), "");
			}
		}
		return window.addEventListener("popstate", l), window.addEventListener("pagehide", s), document.addEventListener("visibilitychange", s), {
			pauseListeners: function() {
				a = r.value;
			},
			listen: function(e) {
				i.push(e);
				let t = () => {
					let t = i.indexOf(e);
					t > -1 && i.splice(t, 1);
				};
				return u.push(t), t;
			},
			destroy: function() {
				for (let e of u) e();
				u = [], window.removeEventListener("popstate", l), window.removeEventListener("pagehide", s), document.removeEventListener("visibilitychange", s);
			}
		};
	}(e, t.state, t.location, t.replace), o = tD({
		location: "",
		base: e,
		go: function(e, t = !0) {
			t || r.pauseListeners(), history.go(e);
		},
		createHref: ro.bind(null, e)
	}, t, r);
	return Object.defineProperty(o, "location", {
		enumerable: !0,
		get: () => t.location.value
	}), Object.defineProperty(o, "state", {
		enumerable: !0,
		get: () => t.state.value
	}), o;
}
var rj = ((X = {})[X.Static = 0] = "Static", X[X.Param = 1] = "Param", X[X.Group = 2] = "Group", X), rx = ((Q = rx || {})[Q.Static = 0] = "Static", Q[Q.Param = 1] = "Param", Q[Q.ParamRegExp = 2] = "ParamRegExp", Q[Q.ParamRegExpEnd = 3] = "ParamRegExpEnd", Q[Q.EscapeNext = 4] = "EscapeNext", Q), rP = {
	type: rj.Static,
	value: ""
}, rI = /[a-zA-Z0-9_]/, rN = "[^/]+?", rR = {
	sensitive: !1,
	strict: !1,
	start: !0,
	end: !0
}, rC = ((Z = rC || {})[Z._multiplier = 10] = "_multiplier", Z[Z.Root = 90] = "Root", Z[Z.Segment = 40] = "Segment", Z[Z.SubSegment = 30] = "SubSegment", Z[Z.Static = 40] = "Static", Z[Z.Dynamic = 20] = "Dynamic", Z[Z.BonusCustomRegExp = 10] = "BonusCustomRegExp", Z[Z.BonusWildcard = -50] = "BonusWildcard", Z[Z.BonusRepeatable = -20] = "BonusRepeatable", Z[Z.BonusOptional = -8] = "BonusOptional", Z[Z.BonusStrict = .7000000000000001] = "BonusStrict", Z[Z.BonusCaseSensitive = .25] = "BonusCaseSensitive", Z), rT = /[.+*?^${}()[\]/\\]/g;
function rk(e, t) {
	let r = 0, o = e.score, i = t.score;
	for (; r < o.length && r < i.length;) {
		let e = function(e, t) {
			let r = 0;
			for (; r < e.length && r < t.length;) {
				let o = t[r] - e[r];
				if (o) return o;
				r++;
			}
			return e.length < t.length ? 1 === e.length && e[0] === rC.Static + rC.Segment ? -1 : 1 : e.length > t.length ? 1 === t.length && t[0] === rC.Static + rC.Segment ? 1 : -1 : 0;
		}(o[r], i[r]);
		if (e) return e;
		r++;
	}
	if (1 === Math.abs(i.length - o.length)) {
		if (rD(o)) return 1;
		if (rD(i)) return -1;
	}
	return i.length - o.length;
}
function rD(e) {
	let t = e[e.length - 1];
	return e.length > 0 && t[t.length - 1] < 0;
}
var rB = {
	strict: !1,
	end: !0,
	sensitive: !1
};
function rL(e, t) {
	let r = {};
	for (let o of t) o in e && (r[o] = e[o]);
	return r;
}
function r$(e) {
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
			else for (let o in e.components) t[o] = "object" == typeof r ? r[o] : r;
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
function rG(e) {
	for (; e;) {
		if (e.record.aliasOf) return !0;
		e = e.parent;
	}
	return !1;
}
function rM({ record: e }) {
	return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function rU(e) {
	let t = A(rv), r = A(rm), o = E(() => {
		let r = P(e.to);
		return t.resolve(r);
	}), i = E(() => {
		let { matched: e } = o.value, { length: t } = e, i = e[t - 1], u = r.matched;
		if (!i || !u.length) return -1;
		let a = u.findIndex(t5.bind(null, i));
		if (a > -1) return a;
		let l = rz(e[t - 2]);
		return t > 1 && rz(i) === l && u[u.length - 1].path !== l ? u.findIndex(t5.bind(null, e[t - 2])) : a;
	}), u = E(() => i.value > -1 && function(e, t) {
		for (let r in t) {
			let o = t[r], i = e[r];
			if ("string" == typeof o) {
				if (o !== i) return !1;
			} else if (!t$(i) || i.length !== o.length || o.some((e, t) => e !== i[t])) return !1;
		}
		return !0;
	}(r.params, o.value.params)), a = E(() => i.value > -1 && i.value === r.matched.length - 1 && t8(r.params, o.value.params));
	return {
		route: o,
		href: E(() => o.value.href),
		isActive: u,
		isExactActive: a,
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
				let r = t[P(e.replace) ? "replace" : "push"](P(e.to)).catch(tL);
				return e.viewTransition && "undefined" != typeof document && "startViewTransition" in document && document.startViewTransition(() => r), r;
			}
			return Promise.resolve();
		}
	};
}
var rV = g({
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
	useLink: rU,
	setup(e, { slots: t }) {
		let r = m(rU(e)), { options: o } = A(rv), i = E(() => ({
			[rF(e.activeClass, o.linkActiveClass, "router-link-active")]: r.isActive,
			[rF(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: r.isExactActive
		}));
		return () => {
			var o;
			let u = t.default && (1 === (o = t.default(r)).length ? o[0] : o);
			return e.custom ? u : y("a", {
				"aria-current": r.isExactActive ? e.ariaCurrentValue : null,
				href: r.href,
				onClick: r.navigate,
				class: i.value
			}, u);
		};
	}
});
function rz(e) {
	return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
var rF = (e, t, r) => null != e ? e : null != t ? t : r, rq = g({
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
		let o = A(rg), i = E(() => e.route || o.value), u = A(rb, 0), a = E(() => {
			let e, t = P(u), { matched: r } = i.value;
			for (; (e = r[t]) && !e.components;) t++;
			return t;
		}), l = E(() => i.value.matched[a.value]);
		b(rb, E(() => a.value + 1)), b(ry, l), b(rg, i);
		let s = v();
		return O(() => [
			s.value,
			l.value,
			e.name
		], ([e, t, r], [o, i, u]) => {
			t && (t.instances[r] = e, i && i !== t && e && e === o && (t.leaveGuards.size || (t.leaveGuards = i.leaveGuards), t.updateGuards.size || (t.updateGuards = i.updateGuards))), !e || !t || i && t5(t, i) && o || (t.enterCallbacks[r] || []).forEach((t) => t(e));
		}, { flush: "post" }), () => {
			let o = i.value, u = e.name, a = l.value, c = a && a.components[u];
			if (!c) return rW(r.default, {
				Component: c,
				route: o
			});
			let f = a.props[u], p = y(c, tD({}, f ? !0 === f ? o.params : "function" == typeof f ? f(o) : f : null, t, {
				onVnodeUnmounted: (e) => {
					e.component.isUnmounted && (a.instances[u] = null);
				},
				ref: s
			}));
			return rW(r.default, {
				Component: p,
				route: o
			}) || p;
		};
	}
});
function rW(e, t) {
	if (!e) return null;
	let r = e(t);
	return 1 === r.length ? r[0] : r;
}
function rH(e) {
	let t, r, o, i = function(e, t) {
		let r = [], o = /* @__PURE__ */ new Map();
		function i(e, a, l) {
			let s, c, f = !l, p = r$(e);
			p.aliasOf = l && l.record;
			let h = tG(t, e), d = [p];
			if ("alias" in e) for (let t of "string" == typeof e.alias ? [e.alias] : e.alias) d.push(r$(tD({}, p, {
				components: l ? l.record.components : p.components,
				path: t,
				aliasOf: l ? l.record : p
			})));
			for (let t of d) {
				let { path: d } = t;
				if (a && "/" !== d[0]) {
					let e = a.record.path, r = "/" === e[e.length - 1] ? "" : "/";
					t.path = a.record.path + (d && r + d);
				}
				if (s = function(e, t, r) {
					let o = tD(function(e, t) {
						let r = tD({}, rR, t), o = [], i = r.start ? "^" : "", u = [];
						for (let t of e) {
							let e = t.length ? [] : [rC.Root];
							r.strict && !t.length && (i += "/");
							for (let o = 0; o < t.length; o++) {
								let a = t[o], l = rC.Segment + (r.sensitive ? rC.BonusCaseSensitive : 0);
								if (a.type === rj.Static) o || (i += "/"), i += a.value.replace(rT, "\\$&"), l += rC.Static;
								else if (a.type === rj.Param) {
									let { value: e, repeatable: r, optional: s, regexp: c } = a;
									u.push({
										name: e,
										repeatable: r,
										optional: s
									});
									let f = c || rN;
									f !== rN && (l += rC.BonusCustomRegExp);
									let p = r ? `((?:${f})(?:/(?:${f}))*)` : `(${f})`;
									o || (p = s && t.length < 2 ? `(?:/${p})` : "/" + p), s && (p += "?"), i += p, l += rC.Dynamic, s && (l += rC.BonusOptional), r && (l += rC.BonusRepeatable), ".*" === f && (l += rC.BonusWildcard);
								}
								e.push(l);
							}
							o.push(e);
						}
						if (r.strict && r.end) {
							let e = o.length - 1;
							o[e][o[e].length - 1] += rC.BonusStrict;
						}
						r.strict || (i += "/?"), r.end ? i += "$" : r.strict && !i.endsWith("/") && (i += "(?:/|$)");
						let a = new RegExp(i, r.sensitive ? "" : "i");
						return {
							re: a,
							score: o,
							keys: u,
							parse: function(e) {
								let t = e.match(a), r = {};
								if (!t) return null;
								for (let e = 1; e < t.length; e++) {
									let o = t[e] || "", i = u[e - 1];
									r[i.name] = o && i.repeatable ? o.split("/") : o;
								}
								return r;
							},
							stringify: function(t) {
								let r = "", o = !1;
								for (let i of e) for (let e of (o && r.endsWith("/") || (r += "/"), o = !1, i)) if (e.type === rj.Static) r += e.value;
								else if (e.type === rj.Param) {
									let { value: u, repeatable: a, optional: l } = e, s = u in t ? t[u] : "";
									if (t$(s) && !a) throw Error(`Provided param "${u}" is an array but it is not repeatable (* or + modifiers)`);
									let c = t$(s) ? s.join("/") : s;
									if (!c) if (l) i.length < 2 && (r.endsWith("/") ? r = r.slice(0, -1) : o = !0);
									else throw Error(`Missing required param "${u}"`);
									r += c;
								}
								return r || "/";
							}
						};
					}(function(e) {
						let t, r;
						if (!e) return [[]];
						if ("/" === e) return [[rP]];
						if (!e.startsWith("/")) throw Error(`Invalid path "${e}"`);
						function o(e) {
							throw Error(`ERR (${i})/"${c}": ${e}`);
						}
						let i = rx.Static, u = i, a = [];
						function l() {
							t && a.push(t), t = [];
						}
						let s = 0, c = "", f = "";
						function p() {
							c && (i === rx.Static ? t.push({
								type: rj.Static,
								value: c
							}) : i === rx.Param || i === rx.ParamRegExp || i === rx.ParamRegExpEnd ? (t.length > 1 && ("*" === r || "+" === r) && o(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`), t.push({
								type: rj.Param,
								value: c,
								regexp: f,
								repeatable: "*" === r || "+" === r,
								optional: "*" === r || "?" === r
							})) : o("Invalid state to consume buffer"), c = "");
						}
						for (; s < e.length;) {
							if ("\\" === (r = e[s++]) && i !== rx.ParamRegExp) {
								u = i, i = rx.EscapeNext;
								continue;
							}
							switch (i) {
								case rx.Static:
									"/" === r ? (c && p(), l()) : ":" === r ? (p(), i = rx.Param) : c += r;
									break;
								case rx.EscapeNext:
									c += r, i = u;
									break;
								case rx.Param:
									"(" === r ? i = rx.ParamRegExp : rI.test(r) ? c += r : (p(), i = rx.Static, "*" !== r && "?" !== r && "+" !== r && s--);
									break;
								case rx.ParamRegExp:
									")" === r ? "\\" == f[f.length - 1] ? f = f.slice(0, -1) + r : i = rx.ParamRegExpEnd : f += r;
									break;
								case rx.ParamRegExpEnd:
									p(), i = rx.Static, "*" !== r && "?" !== r && "+" !== r && s--, f = "";
									break;
								default: o("Unknown state");
							}
						}
						return i === rx.ParamRegExp && o(`Unfinished custom RegExp for param "${c}"`), p(), l(), a;
					}(e.path), r), {
						record: e,
						parent: t,
						children: [],
						alias: []
					});
					return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
				}(t, a, h), l ? l.alias.push(s) : ((c = c || s) !== s && c.alias.push(s), f && e.name && !rG(s) && u(e.name)), rM(s) && function(e) {
					let t = function(e, t) {
						let r = 0, o = t.length;
						for (; r !== o;) {
							let i = r + o >> 1;
							0 > rk(e, t[i]) ? o = i : r = i + 1;
						}
						let i = function(e) {
							let t = e;
							for (; t = t.parent;) if (rM(t) && 0 === rk(e, t)) return t;
						}(e);
						return i && (o = t.lastIndexOf(i, o - 1)), o;
					}(e, r);
					r.splice(t, 0, e), e.record.name && !rG(e) && o.set(e.record.name, e);
				}(s), p.children) {
					let e = p.children;
					for (let t = 0; t < e.length; t++) i(e[t], s, l && l.children[t]);
				}
				l = l || s;
			}
			return c ? () => {
				u(c);
			} : tL;
		}
		function u(e) {
			if (rl(e)) {
				let t = o.get(e);
				t && (o.delete(e), r.splice(r.indexOf(t), 1), t.children.forEach(u), t.alias.forEach(u));
			} else {
				let t = r.indexOf(e);
				t > -1 && (r.splice(t, 1), e.record.name && o.delete(e.record.name), e.children.forEach(u), e.alias.forEach(u));
			}
		}
		return t = tG(rB, t), e.forEach((e) => i(e)), {
			addRoute: i,
			resolve: function(e, t) {
				let i, u, a, l = {};
				if ("name" in e && e.name) {
					if (!(i = o.get(e.name))) throw rf(rs.MATCHER_NOT_FOUND, { location: e });
					a = i.record.name, l = tD(rL(t.params, i.keys.filter((e) => !e.optional).concat(i.parent ? i.parent.keys.filter((e) => e.optional) : []).map((e) => e.name)), e.params && rL(e.params, i.keys.map((e) => e.name))), u = i.stringify(l);
				} else if (null != e.path) u = e.path, (i = r.find((e) => e.re.test(u))) && (l = i.parse(u), a = i.record.name);
				else {
					if (!(i = t.name ? o.get(t.name) : r.find((e) => e.re.test(t.path)))) throw rf(rs.MATCHER_NOT_FOUND, {
						location: e,
						currentLocation: t
					});
					a = i.record.name, l = tD({}, t.params, e.params), u = i.stringify(l);
				}
				let s = [], c = i;
				for (; c;) s.unshift(c.record), c = c.parent;
				return {
					name: a,
					path: u,
					params: l,
					matched: s,
					meta: s.reduce((e, t) => tD(e, t.meta), {})
				};
			},
			removeRoute: u,
			clearRoutes: function() {
				r.length = 0, o.clear();
			},
			getRoutes: function() {
				return r;
			},
			getRecordMatcher: function(e) {
				return o.get(e);
			}
		};
	}(e.routes, e), u = e.parseQuery || rh, a = e.stringifyQuery || rd, l = e.history, s = r_(), c = r_(), f = r_(), p = x(re), h = re;
	tT && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
	let y = tB.bind(null, (e) => "" + e), b = tB.bind(null, t2), v = tB.bind(null, t3);
	function m(e, t) {
		let r;
		if (t = tD({}, t || p.value), "string" == typeof e) {
			let r = t6(u, e, t.path), o = i.resolve({ path: r.path }, t), a = l.createHref(r.fullPath);
			return tD(r, o, {
				params: v(o.params),
				hash: t3(r.hash),
				redirectedFrom: void 0,
				href: a
			});
		}
		if (null != e.path) r = tD({}, e, { path: t6(u, e.path, t.path).path });
		else {
			let o = tD({}, e.params);
			for (let e in o) o[e] ?? delete o[e];
			r = tD({}, e, { params: b(o) }), t.params = b(t.params);
		}
		let o = i.resolve(r, t), s = e.hash || "";
		o.params = y(v(o.params));
		let c = function(e, t) {
			let r = t.query ? e(t.query) : "";
			return t.path + (r && "?") + r + (t.hash || "");
		}(a, tD({}, e, {
			hash: t0(s).replace(tX, "{").replace(tZ, "}").replace(tK, "^"),
			path: o.path
		})), f = l.createHref(c);
		return tD({
			fullPath: c,
			hash: s,
			query: a === rd ? function(e) {
				let t = {};
				for (let r in e) {
					let o = e[r];
					void 0 !== o && (t[r] = t$(o) ? o.map((e) => null == e ? null : "" + e) : null == o ? o : "" + o);
				}
				return t;
			}(e.query) : e.query || {}
		}, o, {
			redirectedFrom: void 0,
			href: f
		});
	}
	function g(e) {
		return "string" == typeof e ? t6(u, e, p.value.path) : tD({}, e);
	}
	function _(e, t) {
		if (h !== e) return rf(rs.NAVIGATION_CANCELLED, {
			from: t,
			to: e
		});
	}
	function w(e, t) {
		let r = e.matched[e.matched.length - 1];
		if (r && r.redirect) {
			let { redirect: o } = r, i = "function" == typeof o ? o(e, t) : o;
			return "string" == typeof i && ((i = i.includes("?") || i.includes("#") ? i = g(i) : { path: i }).params = {}), tD({
				query: e.query,
				hash: e.hash,
				params: null != i.path ? {} : e.params
			}, i);
		}
	}
	function A(e, t) {
		let r, o = h = m(e), i = p.value, u = e.state, l = e.force, s = !0 === e.replace, c = w(o, i);
		return c ? A(tD(g(c), {
			state: "object" == typeof c ? tD({}, u, c.state) : u,
			force: l,
			replace: s
		}), t || o) : (o.redirectedFrom = t, !l && function(e, t, r) {
			let o = t.matched.length - 1, i = r.matched.length - 1;
			return o > -1 && o === i && t5(t.matched[o], r.matched[i]) && t8(t.params, r.params) && e(t.query) === e(r.query) && t.hash === r.hash;
		}(a, i, o) && (r = rf(rs.NAVIGATION_DUPLICATED, {
			to: o,
			from: i
		}), D(i, i, !0, !1)), (r ? Promise.resolve(r) : j(o, i)).catch((e) => rp(e) ? rp(e, rs.NAVIGATION_GUARD_REDIRECT) ? e : k(e) : T(e, o, i)).then((e) => {
			if (e) {
				if (rp(e, rs.NAVIGATION_GUARD_REDIRECT)) return A(tD({ replace: s }, g(e.to), {
					state: "object" == typeof e.to ? tD({}, u, e.to.state) : u,
					force: l
				}), t || o);
			} else e = N(o, i, !0, s, u);
			return I(o, i, e), e;
		}));
	}
	function O(e, t) {
		let r = _(e, t);
		return r ? Promise.reject(r) : Promise.resolve();
	}
	function E(e) {
		let t = L.values().next().value;
		return t && "function" == typeof t.runWithContext ? t.runWithContext(e) : e();
	}
	function j(e, t) {
		let r, [o, i, u] = function(e, t) {
			let r = [], o = [], i = [], u = Math.max(t.matched.length, e.matched.length);
			for (let a = 0; a < u; a++) {
				let u = t.matched[a];
				u && (e.matched.find((e) => t5(e, u)) ? o.push(u) : r.push(u));
				let l = e.matched[a];
				l && !t.matched.find((e) => t5(e, l)) && i.push(l);
			}
			return [
				r,
				o,
				i
			];
		}(e, t);
		for (let i of (r = rA(o.reverse(), "beforeRouteLeave", e, t), o)) i.leaveGuards.forEach((o) => {
			r.push(rw(o, e, t));
		});
		let a = O.bind(null, e, t);
		return r.push(a), G(r).then(() => {
			for (let o of (r = [], s.list())) r.push(rw(o, e, t));
			return r.push(a), G(r);
		}).then(() => {
			for (let o of (r = rA(i, "beforeRouteUpdate", e, t), i)) o.updateGuards.forEach((o) => {
				r.push(rw(o, e, t));
			});
			return r.push(a), G(r);
		}).then(() => {
			for (let o of (r = [], u)) if (o.beforeEnter) if (t$(o.beforeEnter)) for (let i of o.beforeEnter) r.push(rw(i, e, t));
			else r.push(rw(o.beforeEnter, e, t));
			return r.push(a), G(r);
		}).then(() => (e.matched.forEach((e) => e.enterCallbacks = {}), (r = rA(u, "beforeRouteEnter", e, t, E)).push(a), G(r))).then(() => {
			for (let o of (r = [], c.list())) r.push(rw(o, e, t));
			return r.push(a), G(r);
		}).catch((e) => rp(e, rs.NAVIGATION_CANCELLED) ? e : Promise.reject(e));
	}
	function I(e, t, r) {
		f.list().forEach((o) => E(() => o(e, t, r)));
	}
	function N(e, t, r, o, i) {
		let u = _(e, t);
		if (u) return u;
		let a = t === re, s = tT ? history.state : {};
		r && (o || a ? l.replace(e.fullPath, tD({ scroll: a && s && s.scroll }, i)) : l.push(e.fullPath, i)), p.value = e, D(e, t, r, a), k();
	}
	let R = r_(), C = r_();
	function T(e, t, r) {
		k(e);
		let o = C.list();
		return o.length ? o.forEach((o) => o(e, t, r)) : console.error(e), Promise.reject(e);
	}
	function k(e) {
		return r || (r = !e, t || (t = l.listen((e, t, r) => {
			var o, i;
			if (!$.listening) return;
			let u = m(e), a = w(u, $.currentRoute.value);
			if (a) return void A(tD(a, {
				replace: !0,
				force: !0
			}), u).catch(tL);
			h = u;
			let s = p.value;
			tT && (o = ru(s.fullPath, r.delta), i = ri(), ra.set(o, i)), j(u, s).catch((e) => rp(e, rs.NAVIGATION_ABORTED | rs.NAVIGATION_CANCELLED) ? e : rp(e, rs.NAVIGATION_GUARD_REDIRECT) ? (A(tD(g(e.to), { force: !0 }), u).then((e) => {
				rp(e, rs.NAVIGATION_ABORTED | rs.NAVIGATION_DUPLICATED) && !r.delta && r.type === rt.pop && l.go(-1, !1);
			}).catch(tL), Promise.reject()) : (r.delta && l.go(-r.delta, !1), T(e, u, s))).then((e) => {
				(e = e || N(u, s, !1)) && (r.delta && !rp(e, rs.NAVIGATION_CANCELLED) ? l.go(-r.delta, !1) : r.type === rt.pop && rp(e, rs.NAVIGATION_ABORTED | rs.NAVIGATION_DUPLICATED) && l.go(-1, !1)), I(u, s, e);
			}).catch(tL);
		})), R.list().forEach(([t, r]) => e ? r(e) : t()), R.reset()), e;
	}
	function D(t, r, o, i) {
		let { scrollBehavior: u } = e;
		if (!tT || !u) return Promise.resolve();
		let a = !o && function(e) {
			let t = ra.get(e);
			return ra.delete(e), t;
		}(ru(t.fullPath, 0)) || (i || !o) && history.state && history.state.scroll || null;
		return S().then(() => u(t, r, a)).then((e) => e && function(e) {
			let t;
			if ("el" in e) {
				let r = e.el, o = "string" == typeof r && r.startsWith("#"), i = "string" == typeof r ? o ? document.getElementById(r.slice(1)) : document.querySelector(r) : r;
				if (!i) return;
				t = function(e, t) {
					let r = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
					return {
						behavior: t.behavior,
						left: o.left - r.left - (t.left || 0),
						top: o.top - r.top - (t.top || 0)
					};
				}(i, e);
			} else t = e;
			"scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(null != t.left ? t.left : window.scrollX, null != t.top ? t.top : window.scrollY);
		}(e)).catch((e) => T(e, t, r));
	}
	let B = (e) => l.go(e), L = /* @__PURE__ */ new Set(), $ = {
		currentRoute: p,
		listening: !0,
		addRoute: function(e, t) {
			let r, o;
			return rl(e) ? (r = i.getRecordMatcher(e), o = t) : o = e, i.addRoute(o, r);
		},
		removeRoute: function(e) {
			let t = i.getRecordMatcher(e);
			t && i.removeRoute(t);
		},
		clearRoutes: i.clearRoutes,
		hasRoute: function(e) {
			return !!i.getRecordMatcher(e);
		},
		getRoutes: function() {
			return i.getRoutes().map((e) => e.record);
		},
		resolve: m,
		options: e,
		push: function(e) {
			return A(e);
		},
		replace: function(e) {
			return A(tD(g(e), { replace: !0 }));
		},
		go: B,
		back: () => B(-1),
		forward: () => B(1),
		beforeEach: s.add,
		beforeResolve: c.add,
		afterEach: f.add,
		onError: C.add,
		isReady: function() {
			return r && p.value !== re ? Promise.resolve() : new Promise((e, t) => {
				R.add([e, t]);
			});
		},
		install(e) {
			e.component("RouterLink", rV), e.component("RouterView", rq), e.config.globalProperties.$router = $, Object.defineProperty(e.config.globalProperties, "$route", {
				enumerable: !0,
				get: () => P(p)
			}), tT && !o && p.value === re && (o = !0, A(l.location).catch((e) => {}));
			let i = {};
			for (let e in re) Object.defineProperty(i, e, {
				get: () => p.value[e],
				enumerable: !0
			});
			e.provide(rv, $), e.provide(rm, d(i)), e.provide(rg, p);
			let u = e.unmount;
			L.add(e), e.unmount = function() {
				L.delete(e), L.size < 1 && (h = re, t && t(), t = null, p.value = re, o = !1, r = !1), u();
			};
		}
	};
	function G(e) {
		return e.reduce((e, t) => e.then(() => E(t)), Promise.resolve());
	}
	return $;
}
function rK() {
	return A(rv);
}
function rY(e) {
	return A(rm);
}
let rX = rV, rQ = rq;
function rZ(e) {
	return "function" == typeof e;
}
function rJ(e) {
	var t = e(function(e) {
		Error.call(e), e.stack = Error().stack;
	});
	return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
}
var r0 = rJ(function(e) {
	return function(t) {
		e(this), this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map(function(e, t) {
			return t + 1 + ") " + e.toString();
		}).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t;
	};
});
function r1(e, t) {
	if (e) {
		var r = e.indexOf(t);
		0 <= r && e.splice(r, 1);
	}
}
var r2 = function() {
	var e;
	function t(e) {
		this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null;
	}
	return t.prototype.unsubscribe = function() {
		if (!this.closed) {
			this.closed = !0;
			var e, t, r, o, u, l = this._parentage;
			if (l) if (this._parentage = null, Array.isArray(l)) try {
				for (var s = p(l), c = s.next(); !c.done; c = s.next()) c.value.remove(this);
			} catch (t) {
				e = { error: t };
			} finally {
				try {
					c && !c.done && (t = s.return) && t.call(s);
				} finally {
					if (e) throw e.error;
				}
			}
			else l.remove(this);
			var f = this.initialTeardown;
			if (rZ(f)) try {
				f();
			} catch (e) {
				u = e instanceof r0 ? e.errors : [e];
			}
			var h = this._finalizers;
			if (h) {
				this._finalizers = null;
				try {
					for (var d = p(h), y = d.next(); !y.done; y = d.next()) {
						var b = y.value;
						try {
							r6(b);
						} catch (e) {
							u = null != u ? u : [], e instanceof r0 ? u = a(a([], i(u)), i(e.errors)) : u.push(e);
						}
					}
				} catch (e) {
					r = { error: e };
				} finally {
					try {
						y && !y.done && (o = d.return) && o.call(d);
					} finally {
						if (r) throw r.error;
					}
				}
			}
			if (u) throw new r0(u);
		}
	}, t.prototype.add = function(e) {
		var r;
		if (e && e !== this) if (this.closed) r6(e);
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
		t === e ? this._parentage = null : Array.isArray(t) && r1(t, e);
	}, t.prototype.remove = function(e) {
		var r = this._finalizers;
		r && r1(r, e), e instanceof t && e._removeParent(this);
	}, (e = new t()).closed = !0, t.EMPTY = e, t;
}(), r3 = r2.EMPTY;
function r4(e) {
	return e instanceof r2 || e && "closed" in e && rZ(e.remove) && rZ(e.add) && rZ(e.unsubscribe);
}
function r6(e) {
	rZ(e) ? e() : e.unsubscribe();
}
var r7 = void 0, r5 = {
	setTimeout: function(e, t) {
		for (var r = [], o = 2; o < arguments.length; o++) r[o - 2] = arguments[o];
		var u = r5.delegate;
		return (null == u ? void 0 : u.setTimeout) ? u.setTimeout.apply(u, a([e, t], i(r))) : setTimeout.apply(void 0, a([e, t], i(r)));
	},
	clearTimeout: function(e) {
		var t = r5.delegate;
		return ((null == t ? void 0 : t.clearTimeout) || clearTimeout)(e);
	},
	delegate: void 0
};
function r8(e) {
	r5.setTimeout(function() {
		throw e;
	});
}
function r9() {}
var ne = nt("C", void 0, void 0);
function nt(e, t, r) {
	return {
		kind: e,
		value: t,
		error: r
	};
}
function nn(e) {
	e();
}
var no = function(e) {
	function t(t) {
		var r = e.call(this) || this;
		return r.isStopped = !1, t ? (r.destination = t, r4(t) && t.add(r)) : r.destination = nf, r;
	}
	return s(t, e), t.create = function(e, t, r) {
		return new nl(e, t, r);
	}, t.prototype.next = function(e) {
		this.isStopped ? nc(nt("N", e, void 0), this) : this._next(e);
	}, t.prototype.error = function(e) {
		this.isStopped ? nc(nt("E", void 0, e), this) : (this.isStopped = !0, this._error(e));
	}, t.prototype.complete = function() {
		this.isStopped ? nc(ne, this) : (this.isStopped = !0, this._complete());
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
}(r2);
Function.prototype.bind;
var na = function() {
	function e(e) {
		this.partialObserver = e;
	}
	return e.prototype.next = function(e) {
		var t = this.partialObserver;
		if (t.next) try {
			t.next(e);
		} catch (e) {
			ns(e);
		}
	}, e.prototype.error = function(e) {
		var t = this.partialObserver;
		if (t.error) try {
			t.error(e);
		} catch (e) {
			ns(e);
		}
		else ns(e);
	}, e.prototype.complete = function() {
		var e = this.partialObserver;
		if (e.complete) try {
			e.complete();
		} catch (e) {
			ns(e);
		}
	}, e;
}(), nl = function(e) {
	function t(t, r, o) {
		var i, a = e.call(this) || this;
		return rZ(t) || !t ? i = {
			next: null != t ? t : void 0,
			error: null != r ? r : void 0,
			complete: null != o ? o : void 0
		} : i = t, a.destination = new na(i), a;
	}
	return s(t, e), t;
}(no);
function ns(e) {
	r8(e);
}
function nc(e, t) {}
var nf = {
	closed: !0,
	next: r9,
	error: function(e) {
		throw e;
	},
	complete: r9
}, np = "function" == typeof Symbol && Symbol.observable || "@@observable";
function nh(e) {
	return e;
}
function nd(e) {
	return 0 === e.length ? nh : 1 === e.length ? e[0] : function(t) {
		return e.reduce(function(e, t) {
			return t(e);
		}, t);
	};
}
var ny = function() {
	function e(e) {
		e && (this._subscribe = e);
	}
	return e.prototype.lift = function(t) {
		var r = new e();
		return r.source = this, r.operator = t, r;
	}, e.prototype.subscribe = function(e, t, r) {
		var o = this, i = !function(e) {
			return e && e instanceof no || e && rZ(e.next) && rZ(e.error) && rZ(e.complete) && r4(e);
		}(e) ? new nl(e, t, r) : e;
		return nn(function() {
			var e = o.operator, t = o.source;
			i.add(e ? e.call(i, t) : t ? o._subscribe(i) : o._trySubscribe(i));
		}), i;
	}, e.prototype._trySubscribe = function(e) {
		try {
			return this._subscribe(e);
		} catch (t) {
			e.error(t);
		}
	}, e.prototype.forEach = function(e, t) {
		var r = this;
		return new (t = (nb(t)))(function(t, o) {
			var i = new nl({
				next: function(t) {
					try {
						e(t);
					} catch (e) {
						o(e), i.unsubscribe();
					}
				},
				error: o,
				complete: t
			});
			r.subscribe(i);
		});
	}, e.prototype._subscribe = function(e) {
		var t;
		return null == (t = this.source) ? void 0 : t.subscribe(e);
	}, e.prototype[np] = function() {
		return this;
	}, e.prototype.pipe = function() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		return nd(e)(this);
	}, e.prototype.toPromise = function(e) {
		var t = this;
		return new (e = (nb(e)))(function(e, r) {
			var o;
			t.subscribe(function(e) {
				return o = e;
			}, function(e) {
				return r(e);
			}, function() {
				return e(o);
			});
		});
	}, e.create = function(t) {
		return new e(t);
	}, e;
}();
function nb(e) {
	var t;
	return null != (t = null != e ? e : r7) ? t : Promise;
}
function nv(e) {
	return function(t) {
		if (rZ(null == t ? void 0 : t.lift)) return t.lift(function(t) {
			try {
				return e(t, this);
			} catch (e) {
				this.error(e);
			}
		});
		throw TypeError("Unable to lift unknown Observable type");
	};
}
function nm(e, t, r, o, i) {
	return new ng(e, t, r, o, i);
}
var ng = function(e) {
	function t(t, r, o, i, u, a) {
		var l = e.call(this, t) || this;
		return l.onFinalize = u, l.shouldUnsubscribe = a, l._next = r ? function(e) {
			try {
				r(e);
			} catch (e) {
				t.error(e);
			}
		} : e.prototype._next, l._error = i ? function(e) {
			try {
				i(e);
			} catch (e) {
				t.error(e);
			} finally {
				this.unsubscribe();
			}
		} : e.prototype._error, l._complete = o ? function() {
			try {
				o();
			} catch (e) {
				t.error(e);
			} finally {
				this.unsubscribe();
			}
		} : e.prototype._complete, l;
	}
	return s(t, e), t.prototype.unsubscribe = function() {
		var t;
		if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
			var r = this.closed;
			e.prototype.unsubscribe.call(this), r || null == (t = this.onFinalize) || t.call(this);
		}
	}, t;
}(no), n_ = rJ(function(e) {
	return function() {
		e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
	};
}), nw = function(e) {
	function t() {
		var t = e.call(this) || this;
		return t.closed = !1, t.currentObservers = null, t.observers = [], t.isStopped = !1, t.hasError = !1, t.thrownError = null, t;
	}
	return s(t, e), t.prototype.lift = function(e) {
		var t = new nA(this, this);
		return t.operator = e, t;
	}, t.prototype._throwIfClosed = function() {
		if (this.closed) throw new n_();
	}, t.prototype.next = function(e) {
		var t = this;
		nn(function() {
			var r, o;
			if (t._throwIfClosed(), !t.isStopped) {
				t.currentObservers || (t.currentObservers = Array.from(t.observers));
				try {
					for (var i = p(t.currentObservers), u = i.next(); !u.done; u = i.next()) u.value.next(e);
				} catch (e) {
					r = { error: e };
				} finally {
					try {
						u && !u.done && (o = i.return) && o.call(i);
					} finally {
						if (r) throw r.error;
					}
				}
			}
		});
	}, t.prototype.error = function(e) {
		var t = this;
		nn(function() {
			if (t._throwIfClosed(), !t.isStopped) {
				t.hasError = t.isStopped = !0, t.thrownError = e;
				for (var r = t.observers; r.length;) r.shift().error(e);
			}
		});
	}, t.prototype.complete = function() {
		var e = this;
		nn(function() {
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
		var t = this, r = this.hasError, o = this.isStopped, i = this.observers;
		return r || o ? r3 : (this.currentObservers = null, i.push(e), new r2(function() {
			t.currentObservers = null, r1(i, e);
		}));
	}, t.prototype._checkFinalizedStatuses = function(e) {
		var t = this.hasError, r = this.thrownError, o = this.isStopped;
		t ? e.error(r) : o && e.complete();
	}, t.prototype.asObservable = function() {
		var e = new ny();
		return e.source = this, e;
	}, t.create = function(e, t) {
		return new nA(e, t);
	}, t;
}(ny), nA = function(e) {
	function t(t, r) {
		var o = e.call(this) || this;
		return o.destination = t, o.source = r, o;
	}
	return s(t, e), t.prototype.next = function(e) {
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
		return null != (r = null == (t = this.source) ? void 0 : t.subscribe(e)) ? r : r3;
	}, t;
}(nw), nO = function(e) {
	function t(t) {
		var r = e.call(this) || this;
		return r._value = t, r;
	}
	return s(t, e), Object.defineProperty(t.prototype, "value", {
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
}(nw), nE = {
	now: function() {
		return (nE.delegate || Date).now();
	},
	delegate: void 0
}, nS = function(e) {
	function t(t, r) {
		return e.call(this) || this;
	}
	return s(t, e), t.prototype.schedule = function(e, t) {
		return void 0 === t && (t = 0), this;
	}, t;
}(r2), nj = {
	setInterval: function(e, t) {
		for (var r = [], o = 2; o < arguments.length; o++) r[o - 2] = arguments[o];
		var u = nj.delegate;
		return (null == u ? void 0 : u.setInterval) ? u.setInterval.apply(u, a([e, t], i(r))) : setInterval.apply(void 0, a([e, t], i(r)));
	},
	clearInterval: function(e) {
		var t = nj.delegate;
		return ((null == t ? void 0 : t.clearInterval) || clearInterval)(e);
	},
	delegate: void 0
}, nx = function(e) {
	function t(t, r) {
		var o = e.call(this, t, r) || this;
		return o.scheduler = t, o.work = r, o.pending = !1, o;
	}
	return s(t, e), t.prototype.schedule = function(e, t) {
		if (void 0 === t && (t = 0), this.closed) return this;
		this.state = e;
		var r, o = this.id, i = this.scheduler;
		return null != o && (this.id = this.recycleAsyncId(i, o, t)), this.pending = !0, this.delay = t, this.id = null != (r = this.id) ? r : this.requestAsyncId(i, this.id, t), this;
	}, t.prototype.requestAsyncId = function(e, t, r) {
		return void 0 === r && (r = 0), nj.setInterval(e.flush.bind(e, this), r);
	}, t.prototype.recycleAsyncId = function(e, t, r) {
		if (void 0 === r && (r = 0), null != r && this.delay === r && !1 === this.pending) return t;
		null != t && nj.clearInterval(t);
	}, t.prototype.execute = function(e, t) {
		if (this.closed) return Error("executing a cancelled action");
		this.pending = !1;
		var r = this._execute(e, t);
		if (r) return r;
		!1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
	}, t.prototype._execute = function(e, t) {
		var r, o = !1;
		try {
			this.work(e);
		} catch (e) {
			o = !0, r = e || Error("Scheduled action threw falsy error");
		}
		if (o) return this.unsubscribe(), r;
	}, t.prototype.unsubscribe = function() {
		if (!this.closed) {
			var t = this.id, r = this.scheduler, o = r.actions;
			this.work = this.state = this.scheduler = null, this.pending = !1, r1(o, this), null != t && (this.id = this.recycleAsyncId(r, t, null)), this.delay = null, e.prototype.unsubscribe.call(this);
		}
	}, t;
}(nS), nP = function() {
	function e(t, r) {
		void 0 === r && (r = e.now), this.schedulerActionCtor = t, this.now = r;
	}
	return e.prototype.schedule = function(e, t, r) {
		return void 0 === t && (t = 0), new this.schedulerActionCtor(this, e).schedule(r, t);
	}, e.now = nE.now, e;
}(), nI = new (function(e) {
	function t(t, r) {
		void 0 === r && (r = nP.now);
		var o = e.call(this, t, r) || this;
		return o.actions = [], o._active = !1, o;
	}
	return s(t, e), t.prototype.flush = function(e) {
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
}(nP))(nx), nN = new ny(function(e) {
	return e.complete();
});
function nR(e) {
	return e && rZ(e.schedule);
}
function nC(e) {
	return e[e.length - 1];
}
function nT(e) {
	return nR(nC(e)) ? e.pop() : void 0;
}
var nk = function(e) {
	return e && "number" == typeof e.length && "function" != typeof e;
};
function nD(e) {
	return rZ(null == e ? void 0 : e.then);
}
function nB(e) {
	return Symbol.asyncIterator && rZ(null == e ? void 0 : e[Symbol.asyncIterator]);
}
function nL(e) {
	return TypeError("You provided " + (null !== e && "object" == typeof e ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
var n$ = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";
function nG(e) {
	return rZ(null == e ? void 0 : e[n$]);
}
function nM(e) {
	return l(this, arguments, function() {
		var t, r, o;
		return f(this, function(i) {
			switch (i.label) {
				case 0: t = e.getReader(), i.label = 1;
				case 1: i.trys.push([
					1,
					,
					9,
					10
				]), i.label = 2;
				case 2: return [4, u(t.read())];
				case 3:
					if (o = (r = i.sent()).value, !r.done) return [3, 5];
					return [4, u(void 0)];
				case 4: return [2, i.sent()];
				case 5: return [4, u(o)];
				case 6: return [4, i.sent()];
				case 7: return i.sent(), [3, 2];
				case 8: return [3, 10];
				case 9: return t.releaseLock(), [7];
				case 10: return [2];
			}
		});
	});
}
function nU(e) {
	return rZ(null == e ? void 0 : e.getReader);
}
function nV(e) {
	if (e instanceof ny) return e;
	if (null != e) {
		var t, r, o, i;
		if (rZ(e[np])) return t = e, new ny(function(e) {
			var r = t[np]();
			if (rZ(r.subscribe)) return r.subscribe(e);
			throw TypeError("Provided object does not correctly implement Symbol.observable");
		});
		if (nk(e)) return r = e, new ny(function(e) {
			for (var t = 0; t < r.length && !e.closed; t++) e.next(r[t]);
			e.complete();
		});
		if (nD(e)) return o = e, new ny(function(e) {
			o.then(function(t) {
				e.closed || (e.next(t), e.complete());
			}, function(t) {
				return e.error(t);
			}).then(null, r8);
		});
		if (nB(e)) return nz(e);
		if (nG(e)) return i = e, new ny(function(e) {
			var t, r;
			try {
				for (var o = p(i), u = o.next(); !u.done; u = o.next()) {
					var a = u.value;
					if (e.next(a), e.closed) return;
				}
			} catch (e) {
				t = { error: e };
			} finally {
				try {
					u && !u.done && (r = o.return) && r.call(o);
				} finally {
					if (t) throw t.error;
				}
			}
			e.complete();
		});
		if (nU(e)) return nz(nM(e));
	}
	throw nL(e);
}
function nz(e) {
	return new ny(function(t) {
		(function(e, t) {
			var r, i, u, a;
			return o(this, void 0, void 0, function() {
				var o;
				return f(this, function(l) {
					switch (l.label) {
						case 0: l.trys.push([
							0,
							5,
							6,
							11
						]), r = c(e), l.label = 1;
						case 1: return [4, r.next()];
						case 2:
							if ((i = l.sent()).done) return [3, 4];
							if (o = i.value, t.next(o), t.closed) return [2];
							l.label = 3;
						case 3: return [3, 1];
						case 4: return [3, 11];
						case 5: return u = { error: l.sent() }, [3, 11];
						case 6:
							if (l.trys.push([
								6,
								,
								9,
								10
							]), !(i && !i.done && (a = r.return))) return [3, 8];
							return [4, a.call(r)];
						case 7: l.sent(), l.label = 8;
						case 8: return [3, 10];
						case 9:
							if (u) throw u.error;
							return [7];
						case 10: return [7];
						case 11: return t.complete(), [2];
					}
				});
			});
		})(e, t).catch(function(e) {
			return t.error(e);
		});
	});
}
function nF(e, t, r, o, i) {
	void 0 === o && (o = 0), void 0 === i && (i = !1);
	var u = t.schedule(function() {
		r(), i ? e.add(this.schedule(null, o)) : this.unsubscribe();
	}, o);
	if (e.add(u), !i) return u;
}
function nq(e, t) {
	return void 0 === t && (t = 0), nv(function(r, o) {
		r.subscribe(nm(o, function(r) {
			return nF(o, e, function() {
				return o.next(r);
			}, t);
		}, function() {
			return nF(o, e, function() {
				return o.complete();
			}, t);
		}, function(r) {
			return nF(o, e, function() {
				return o.error(r);
			}, t);
		}));
	});
}
function nW(e, t) {
	return void 0 === t && (t = 0), nv(function(r, o) {
		o.add(e.schedule(function() {
			return r.subscribe(o);
		}, t));
	});
}
function nH(e, t) {
	if (!e) throw Error("Iterable cannot be null");
	return new ny(function(r) {
		nF(r, t, function() {
			var o = e[Symbol.asyncIterator]();
			nF(r, t, function() {
				o.next().then(function(e) {
					e.done ? r.complete() : r.next(e.value);
				});
			}, 0, !0);
		});
	});
}
function nK(e, t) {
	return t ? function(e, t) {
		if (null != e) {
			if (rZ(e[np])) return nV(e).pipe(nW(t), nq(t));
			if (nk(e)) return new ny(function(r) {
				var o = 0;
				return t.schedule(function() {
					o === e.length ? r.complete() : (r.next(e[o++]), r.closed || this.schedule());
				});
			});
			if (nD(e)) return nV(e).pipe(nW(t), nq(t));
			if (nB(e)) return nH(e, t);
			if (nG(e)) return new ny(function(r) {
				var o;
				return nF(r, t, function() {
					o = e[n$](), nF(r, t, function() {
						var e, t, i;
						try {
							t = (e = o.next()).value, i = e.done;
						} catch (e) {
							r.error(e);
							return;
						}
						i ? r.complete() : r.next(t);
					}, 0, !0);
				}), function() {
					return rZ(null == o ? void 0 : o.return) && o.return();
				};
			});
			if (nU(e)) return nH(nM(e), t);
		}
		throw nL(e);
	}(e, t) : nV(e);
}
function nY() {
	for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
	return nK(e, nT(e));
}
function nX(e, t) {
	return nv(function(r, o) {
		var i = 0;
		r.subscribe(nm(o, function(r) {
			o.next(e.call(t, r, i++));
		}));
	});
}
var nQ = Array.isArray;
function nZ(e) {
	return nX(function(t) {
		return nQ(t) ? e.apply(void 0, a([], i(t))) : e(t);
	});
}
var nJ = Array.isArray, n0 = Object.getPrototypeOf, n1 = Object.prototype, n2 = Object.keys;
function n3() {
	for (var e, t, r, o = [], i = 0; i < arguments.length; i++) o[i] = arguments[i];
	var u = nT(o), a = rZ(nC(o)) ? o.pop() : void 0, l = function(e) {
		if (1 === e.length) {
			var t, r = e[0];
			if (nJ(r)) return {
				args: r,
				keys: null
			};
			if ((t = r) && "object" == typeof t && n0(t) === n1) {
				var o = n2(r);
				return {
					args: o.map(function(e) {
						return r[e];
					}),
					keys: o
				};
			}
		}
		return {
			args: e,
			keys: null
		};
	}(o), s = l.args, c = l.keys;
	if (0 === s.length) return nK([], u);
	var f = new ny((e = s, t = u, void 0 === (r = c ? function(e) {
		return c.reduce(function(t, r, o) {
			return t[r] = e[o], t;
		}, {});
	} : nh) && (r = nh), function(o) {
		(function(e, t, r) {
			e ? nF(r, e, t) : t();
		})(t, function() {
			for (var i = e.length, u = Array(i), a = i, l = i, s = function(i) {
				(function(e, t, r) {
					e ? nF(r, e, t) : t();
				})(t, function() {
					var s = nK(e[i], t), c = !1;
					s.subscribe(nm(o, function(e) {
						u[i] = e, !c && (c = !0, l--), l || o.next(r(u.slice()));
					}, function() {
						--a || o.complete();
					}));
				}, o);
			}, c = 0; c < i; c++) s(c);
		}, o);
	}));
	return a ? f.pipe(nZ(a)) : f;
}
function n4(e, t, r) {
	return (void 0 === r && (r = Infinity), rZ(t)) ? n4(function(r, o) {
		return nX(function(e, i) {
			return t(r, e, o, i);
		})(nV(e(r, o)));
	}, r) : ("number" == typeof t && (r = t), nv(function(t, o) {
		var i, u, a, l, s, c, f, p, h;
		return i = r, a = [], l = 0, s = 0, c = !1, f = function() {
			!c || a.length || l || o.complete();
		}, p = function(e) {
			return l < i ? h(e) : a.push(e);
		}, h = function(t) {
			l++;
			var r = !1;
			nV(e(t, s++)).subscribe(nm(o, function(e) {
				u ? p(e) : o.next(e);
			}, function() {
				r = !0;
			}, void 0, function() {
				if (r) try {
					for (l--; a.length && l < i;) (function() {
						var e = a.shift();
						h(e);
					})();
					f();
				} catch (e) {
					o.error(e);
				}
			}));
		}, t.subscribe(nm(o, p, function() {
			c = !0, f();
		})), function() {};
	}));
}
function n6(e) {
	return void 0 === e && (e = Infinity), n4(nh, e);
}
var n7 = ["addListener", "removeListener"], n5 = ["addEventListener", "removeEventListener"], n8 = ["on", "off"];
function n9(e, t, r, o) {
	if (rZ(r) && (o = r, r = void 0), o) return n9(e, t, r).pipe(nZ(o));
	var u, a, l, s = i(rZ((u = e).addEventListener) && rZ(u.removeEventListener) ? n5.map(function(o) {
		return function(i) {
			return e[o](t, i, r);
		};
	}) : rZ((a = e).addListener) && rZ(a.removeListener) ? n7.map(oe(e, t)) : rZ((l = e).on) && rZ(l.off) ? n8.map(oe(e, t)) : [], 2), c = s[0], f = s[1];
	if (!c && nk(e)) return n4(function(e) {
		return n9(e, t, r);
	})(nV(e));
	if (!c) throw TypeError("Invalid event target");
	return new ny(function(e) {
		var t = function() {
			for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
			return e.next(1 < t.length ? t : t[0]);
		};
		return c(t), function() {
			return f(t);
		};
	});
}
function oe(e, t) {
	return function(r) {
		return function(o) {
			return e[r](t, o);
		};
	};
}
function ot(e, t, r) {
	void 0 === e && (e = 0), void 0 === r && (r = nI);
	var o = -1;
	return null != t && (nR(t) ? r = t : o = t), new ny(function(t) {
		var i, u = (i = e) instanceof Date && !isNaN(i) ? e - r.now() : e;
		u < 0 && (u = 0);
		var a = 0;
		return r.schedule(function() {
			t.closed || (t.next(a++), 0 <= o ? this.schedule(void 0, o) : t.complete());
		}, u);
	});
}
function or() {
	for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
	var o = nT(t), i = (e = Infinity, "number" == typeof nC(t) ? t.pop() : e);
	return t.length ? 1 === t.length ? nV(t[0]) : n6(i)(nK(t, o)) : nN;
}
function on(e, t) {
	return nv(function(r, o) {
		var i = 0;
		r.subscribe(nm(o, function(r) {
			return e.call(t, r, i++) && o.next(r);
		}));
	});
}
function oo(e) {
	return nv(function(t, r) {
		var o, i = null, u = !1;
		i = t.subscribe(nm(r, void 0, void 0, function(a) {
			o = nV(e(a, oo(e)(t))), i ? (i.unsubscribe(), i = null, o.subscribe(r)) : u = !0;
		})), u && (i.unsubscribe(), i = null, o.subscribe(r));
	});
}
function oi(e, t) {
	return void 0 === t && (t = nI), nv(function(r, o) {
		var i = null, u = null, a = null, l = function() {
			if (i) {
				i.unsubscribe(), i = null;
				var e = u;
				u = null, o.next(e);
			}
		};
		function s() {
			var r = a + e, u = t.now();
			if (u < r) {
				i = this.schedule(void 0, r - u), o.add(i);
				return;
			}
			l();
		}
		r.subscribe(nm(o, function(r) {
			u = r, a = t.now(), i || (i = t.schedule(s, e), o.add(i));
		}, function() {
			l(), o.complete();
		}, void 0, function() {
			u = i = null;
		}));
	});
}
function ou(e) {
	return e <= 0 ? function() {
		return nN;
	} : nv(function(t, r) {
		var o = 0;
		t.subscribe(nm(r, function(t) {
			++o <= e && (r.next(t), e <= o && r.complete());
		}));
	});
}
function oa() {
	return nv(function(e, t) {
		e.subscribe(nm(t, r9));
	});
}
function ol(e, t) {
	void 0 === t && (t = nI);
	var r = ot(e, t);
	return function e(t, r) {
		return r ? function(o) {
			return function() {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				return n6(1)(nK(e, nT(e)));
			}(r.pipe(ou(1), oa()), o.pipe(e(t)));
		} : n4(function(e, r) {
			return nV(t(e, r)).pipe(ou(1), nX(function() {
				return e;
			}));
		});
	}(function() {
		return r;
	});
}
function os(e, t) {
	return void 0 === t && (t = nh), e = null != e ? e : oc, nv(function(r, o) {
		var i, u = !0;
		r.subscribe(nm(o, function(r) {
			var a = t(r);
			(u || !e(i, a)) && (u = !1, i = a, o.next(r));
		}));
	});
}
function oc(e, t) {
	return e === t;
}
function of(e) {
	return on(function(t, r) {
		return e <= r;
	});
}
function op(e, t) {
	return nv(function(r, o) {
		var i = null, u = 0, a = !1, l = function() {
			return a && !i && o.complete();
		};
		r.subscribe(nm(o, function(r) {
			i?.unsubscribe();
			var a = 0, s = u++;
			nV(e(r, s)).subscribe(i = nm(o, function(e) {
				return o.next(t ? t(r, e, s, a++) : e);
			}, function() {
				i = null, l();
			}));
		}, function() {
			a = !0, l();
		}));
	});
}
function oh(e, t, r) {
	var o = rZ(e) || t || r ? {
		next: e,
		error: t,
		complete: r
	} : e;
	return o ? nv(function(e, t) {
		null == (r = o.subscribe) || r.call(o);
		var r, i = !0;
		e.subscribe(nm(t, function(e) {
			var r;
			null == (r = o.next) || r.call(o, e), t.next(e);
		}, function() {
			var e;
			i = !1, null == (e = o.complete) || e.call(o), t.complete();
		}, function(e) {
			var r;
			i = !1, null == (r = o.error) || r.call(o, e), t.error(e);
		}, function() {
			var e, t;
			i && (null == (e = o.unsubscribe) || e.call(o)), null == (t = o.finalize) || t.call(o);
		}));
	}) : nh;
}
function od(e, ...t) {
	return (function() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		return nd(e);
	})(...t)(nK(e));
}
var oy = class e extends ny {
	static seed(t) {
		return new e(t);
	}
	_value;
	_subject$ = new nw();
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
		let r = eU(e) ? tx(this._value ?? t, e) : e;
		Object.is(r, this._value) || this._subject$.next(this._value = r);
	}
};
let ob = Symbol("forwardRef");
function ov(e) {
	let t = e;
	return w((e, r) => ({
		get: () => (e(), t),
		set(e) {
			let o = e?.[ob] ?? e;
			o !== t && (t = o, r());
		}
	}));
}
function om(e) {
	return (t) => {
		let r = t.subscribe(e);
		_(() => r.unsubscribe());
	};
}
function og(e) {
	return (t) => {
		let r;
		j(() => {
			r = t.subscribe(e);
		}), _(() => r?.unsubscribe());
	};
}
let o_ = (e) => {
	let t = new oy(e), r = w((e, r) => ({
		get: () => (e(), t.value),
		set(e) {
			let o = e?.[ob] ?? e;
			Object.is(o, t.value) || (t.next(o), r());
		}
	}));
	return new Proxy(t, {
		get: (e, o) => "next" === o ? (e) => {
			r.value = eU(e) ? tx(t.value, e) : e;
		} : "value" === o ? r.value : t[o] ?? r[o],
		set: (e, t, o) => ("value" === t ? r.value = o : e[t] = o, !0)
	});
};
function ow(e) {
	return (t) => h(oA, {
		renderFn$: t.pipe(nX((t) => () => e(t))),
		children: {}
	});
}
var oA = tR({ renderFn$: r() }, (e, t) => {
	let r = null;
	od(e.renderFn$, oh((e) => {
		r = e;
	}), om());
	let o = o_(1);
	return od(e.renderFn$, oh(() => {
		o.value += 1;
	}), og()), () => o.value ? r?.() : null;
}, { name: "RxSlot" }, { displayName: "RxSlot" });
let oO = (e, t) => {
	let r = new nO(e[t]);
	return O(() => e[t], (e) => r.next(e)), r;
};
function oE(...e) {
	let t, r = {}, o = {};
	for (let i of e) {
		if (eU(i)) {
			t = i;
			continue;
		}
		ez(t) ? r = i : o = i;
	}
	return tR(r, (e, r) => {
		let o = ((e) => {
			let t = {};
			for (let o in e) {
				var r;
				if (eU(e[o]) || (r = e[o]) && (r instanceof ny || rZ(r.lift) && rZ(r.subscribe))) {
					t[o] = e[o];
					continue;
				}
				t[`${o}$`] = oO(e, o);
			}
			return t;
		})(e), i = new Proxy({}, { get: (t, r) => e[r] ?? o[r] }), u = new Proxy({}, { get: (e, t) => "render" === t ? ow : r[t] }), a = t(i, u);
		return eU(a) ? a : () => a;
	}, o);
}
let oS = (e) => {
	let t, r = null;
	return oh({
		next: (o) => {
			((e, t) => {
				if (eO(e) && eO(t)) {
					if (e.length !== t.length) return !1;
					for (let r in e) if (!Object.is(e[r], t[r])) return !1;
					return !0;
				}
				return Object.is(e, t);
			})(o, r) || (t?.(), t = e(o), r = o);
		},
		unsubscribe: () => {
			t?.();
		}
	});
};
function oj(...e) {
	let o, i, u = {}, a = {};
	for (let t of e) {
		if (eU(t)) {
			o = t;
			continue;
		}
		ez(o) ? u = t : a = t;
	}
	let l = Symbol(a?.name ?? "");
	if (eq(u) && eq(a.props)) {
		let e, t = () => e ??= o({});
		return tC(tR({
			value: r().optional(),
			$default: r().optional()
		}, (e, { slots: r }) => (b(l, e.value ?? t()), () => r.default?.()), {
			...a,
			name: `Provide(${a?.name ?? ""})`
		}, { displayName: "Provider" }), { use: () => A(l, t, !0) });
	}
	let s = t(u);
	return tC(tR({
		...u,
		$default: r().optional()
	}, (e, { slots: t }) => (b(l, i = o(e)), () => t.default?.()), {
		...a,
		name: `Provide(${a?.name ?? ""})`
	}, { displayName: "Provider" }), { use: () => A(l, () => i ??= o(s.create({})), !0) });
}
export { eM as $, nN as A, tR as B, ot as C, nX as D, n3 as E, rQ as F, eQ as G, tN as H, rH as I, eq as J, eX as K, rS as L, nw as M, ny as N, nY as O, rX as P, eU as Q, rY as R, or as S, n4 as T, tx as U, tI as V, eZ as W, ez as X, eF as Y, eV as Z, ol as _, ow as a, eP as at, oo as b, om as c, eO as ct, oy as d, ey as dt, eG as et, od as f, ed as ft, os as g, of as h, B as ht, oO as i, eC as it, nO as j, nK as k, ob as l, em as lt, op as m, $ as mt, oS as n, eB as nt, o_ as o, ej as ot, oh as p, ef as pt, eW as q, oE as r, eD as rt, og as s, eE as st, oj as t, e$ as tt, ov as u, ev as ut, oa as v, n9 as w, on as x, oi as y, rK as z };
