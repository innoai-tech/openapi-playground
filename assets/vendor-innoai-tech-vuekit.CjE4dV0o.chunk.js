import { n as e } from "./rolldown-runtime.BUi7Tn5u.chunk.js";
import { C as t, S as r, a as i, c as l, u as o, v as a, y as s } from "./vendor-innoai-tech-fetcher.CZum5yF-.chunk.js";
import { d as u } from "./vendor-rxjs.BM_clCws.chunk.js";
function c(e) {
	var t;
	return null != e && "function" != typeof e && Number.isSafeInteger(t = e.length) && t >= 0;
}
function f(e) {
	return e;
}
function p(e) {
	return "__proto__" === e;
}
function d(e) {
	switch (typeof e) {
		case "number":
		case "symbol": return !1;
		case "string": return e.includes(".") || e.includes("[") || e.includes("]");
	}
}
function h(e) {
	return "string" == typeof e || "symbol" == typeof e ? e : Object.is(e?.valueOf?.(), -0) ? "-0" : String(e);
}
function y(e) {
	if (null == e) return "";
	if ("string" == typeof e) return e;
	if (Array.isArray(e)) return e.map(y).join(",");
	let t = String(e);
	return "0" === t && Object.is(Number(e), -0) ? "-0" : t;
}
function m(e) {
	if (Array.isArray(e)) return e.map(h);
	if ("symbol" == typeof e) return [e];
	e = y(e);
	let t = [], r = e.length;
	if (0 === r) return t;
	let i = 0, l = "", o = "", a = !1;
	for (46 === e.charCodeAt(0) && (t.push(""), i++); i < r;) {
		let s = e[i];
		o ? "\\" === s && i + 1 < r ? l += e[++i] : s === o ? o = "" : l += s : a ? "\"" === s || "'" === s ? o = s : "]" === s ? (a = !1, t.push(l), l = "") : l += s : "[" === s ? (a = !0, l && (t.push(l), l = "")) : "." === s ? l && (t.push(l), l = "") : l += s, i++;
	}
	return l && t.push(l), t;
}
function g(e, t, r) {
	if (null == e) return r;
	switch (typeof t) {
		case "string": {
			if (p(t)) return r;
			let i = e[t];
			if (void 0 === i) if (d(t)) return g(e, m(t), r);
			else return r;
			return i;
		}
		case "number":
		case "symbol": {
			"number" == typeof t && (t = h(t));
			let i = e[t];
			if (void 0 === i) return r;
			return i;
		}
		default: {
			if (Array.isArray(t)) {
				var i = e, l = t, o = r;
				if (0 === l.length) return o;
				let a = i;
				for (let e = 0; e < l.length; e++) {
					if (null == a || p(l[e])) return o;
					a = a[l[e]];
				}
				return void 0 === a ? o : a;
			}
			if (p(t = Object.is(t?.valueOf(), -0) ? "-0" : String(t))) return r;
			let a = e[t];
			if (void 0 === a) return r;
			return a;
		}
	}
}
function b(e) {
	return function(t) {
		return g(t, e);
	};
}
function _(e) {
	return null !== e && ("object" == typeof e || "function" == typeof e);
}
function w(e) {
	return null == e || "object" != typeof e && "function" != typeof e;
}
function O(e, t) {
	return e === t || Number.isNaN(e) && Number.isNaN(t);
}
function x(e, t, r, i) {
	if (t === e) return !0;
	switch (typeof t) {
		case "object": return function(e, t, r, i) {
			if (null == t) return !0;
			if (Array.isArray(t)) return j(e, t, r, i);
			if (t instanceof Map) {
				var l, o, a, s, u = e, c = t, f = r, p = i;
				if (0 === c.size) return !0;
				if (!(u instanceof Map)) return !1;
				for (let [e, t] of c.entries()) if (!1 === f(u.get(e), t, e, u, c, p)) return !1;
				return !0;
			}
			if (t instanceof Set) return l = e, o = t, a = r, s = i, 0 === o.size || l instanceof Set && j([...l], [...o], a, s);
			let d = Object.keys(t);
			if (null == e) return 0 === d.length;
			if (0 === d.length) return !0;
			if (i && i.has(t)) return i.get(t) === e;
			i && i.set(t, e);
			try {
				for (let l = 0; l < d.length; l++) {
					let o = d[l];
					if (!w(e) && !(o in e) || void 0 === t[o] && void 0 !== e[o] || null === t[o] && null !== e[o] || !r(e[o], t[o], o, e, t, i)) return !1;
				}
				return !0;
			} finally {
				i && i.delete(t);
			}
		}(e, t, r, i);
		case "function":
			if (Object.keys(t).length > 0) return x(e, { ...t }, r, i);
			return O(e, t);
		default:
			if (!_(e)) return O(e, t);
			if ("string" == typeof t) return "" === t;
			return !0;
	}
}
function j(e, t, r, i) {
	if (0 === t.length) return !0;
	if (!Array.isArray(e)) return !1;
	let l = /* @__PURE__ */ new Set();
	for (let o = 0; o < t.length; o++) {
		let a = t[o], s = !1;
		for (let u = 0; u < e.length; u++) {
			if (l.has(u)) continue;
			let c = e[u], f = !1;
			if (r(c, a, o, e, t, i) && (f = !0), f) {
				l.add(u), s = !0;
				break;
			}
		}
		if (!s) return !1;
	}
	return !0;
}
function S(e, t) {
	var r;
	return "function" != typeof (r = () => void 0) ? S(e, t) : x(e, t, function e(t, i, l, o, a, s) {
		let u = r(t, i, l, o, a, s);
		return void 0 !== u ? !!u : x(t, i, e, s);
	}, /* @__PURE__ */ new Map());
}
function P(e) {
	return Object.getOwnPropertySymbols(e).filter((t) => Object.prototype.propertyIsEnumerable.call(e, t));
}
function A(e) {
	return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
var k, E, M, R, $, C, T, F, N, L, D, I, B, V, U, W, z, q, K, G = "[object String]", H = "[object Number]", J = "[object Boolean]", X = "[object Arguments]";
function Z(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Q(e, t, r, i = /* @__PURE__ */ new Map(), l) {
	let o = l?.(e, t, r, i);
	if (void 0 !== o) return o;
	if (w(e)) return e;
	if (i.has(e)) return i.get(e);
	if (Array.isArray(e)) {
		let t = Array(e.length);
		i.set(e, t);
		for (let o = 0; o < e.length; o++) t[o] = Q(e[o], o, r, i, l);
		return Object.hasOwn(e, "index") && (t.index = e.index), Object.hasOwn(e, "input") && (t.input = e.input), t;
	}
	if (e instanceof Date) return new Date(e.getTime());
	if (e instanceof RegExp) {
		let t = new RegExp(e.source, e.flags);
		return t.lastIndex = e.lastIndex, t;
	}
	if (e instanceof Map) {
		let t = /* @__PURE__ */ new Map();
		for (let [o, a] of (i.set(e, t), e)) t.set(o, Q(a, o, r, i, l));
		return t;
	}
	if (e instanceof Set) {
		let t = /* @__PURE__ */ new Set();
		for (let o of (i.set(e, t), e)) t.add(Q(o, void 0, r, i, l));
		return t;
	}
	if ("undefined" != typeof Buffer && Buffer.isBuffer(e)) return e.subarray();
	if (Z(e)) {
		let t = new (Object.getPrototypeOf(e)).constructor(e.length);
		i.set(e, t);
		for (let o = 0; o < e.length; o++) t[o] = Q(e[o], o, r, i, l);
		return t;
	}
	if (e instanceof ArrayBuffer || "undefined" != typeof SharedArrayBuffer && e instanceof SharedArrayBuffer) return e.slice(0);
	if (e instanceof DataView) {
		let t = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
		return i.set(e, t), Y(t, e, r, i, l), t;
	}
	if ("undefined" != typeof File && e instanceof File) {
		let t = new File([e], e.name, { type: e.type });
		return i.set(e, t), Y(t, e, r, i, l), t;
	}
	if ("undefined" != typeof Blob && e instanceof Blob) {
		let t = new Blob([e], { type: e.type });
		return i.set(e, t), Y(t, e, r, i, l), t;
	}
	if (e instanceof Error) {
		let t = new e.constructor();
		return i.set(e, t), t.message = e.message, t.name = e.name, t.stack = e.stack, t.cause = e.cause, Y(t, e, r, i, l), t;
	}
	if (e instanceof Boolean) {
		let t = new Boolean(e.valueOf());
		return i.set(e, t), Y(t, e, r, i, l), t;
	}
	if (e instanceof Number) {
		let t = new Number(e.valueOf());
		return i.set(e, t), Y(t, e, r, i, l), t;
	}
	if (e instanceof String) {
		let t = new String(e.valueOf());
		return i.set(e, t), Y(t, e, r, i, l), t;
	}
	if ("object" == typeof e && function(e) {
		switch (A(e)) {
			case X:
			case "[object Array]":
			case "[object ArrayBuffer]":
			case "[object DataView]":
			case J:
			case "[object Date]":
			case "[object Float32Array]":
			case "[object Float64Array]":
			case "[object Int8Array]":
			case "[object Int16Array]":
			case "[object Int32Array]":
			case "[object Map]":
			case H:
			case "[object Object]":
			case "[object RegExp]":
			case "[object Set]":
			case G:
			case "[object Symbol]":
			case "[object Uint8Array]":
			case "[object Uint8ClampedArray]":
			case "[object Uint16Array]":
			case "[object Uint32Array]": return !0;
			default: return !1;
		}
	}(e)) {
		let t = Object.create(Object.getPrototypeOf(e));
		return i.set(e, t), Y(t, e, r, i, l), t;
	}
	return e;
}
function Y(e, t, r = e, i, l) {
	let o = [...Object.keys(t), ...P(t)];
	for (let a = 0; a < o.length; a++) {
		let s = o[a], u = Object.getOwnPropertyDescriptor(e, s);
		(null == u || u.writable) && (e[s] = Q(t[s], s, r, i, l));
	}
}
function ee(e) {
	var t;
	return e = Q(t = e, void 0, t, /* @__PURE__ */ new Map(), void 0), (t) => S(t, e);
}
function et(e, t) {
	var r;
	return r = (r, i, l, o) => {
		let a = t?.(r, i, l, o);
		if (void 0 !== a) return a;
		if ("object" == typeof e) switch (Object.prototype.toString.call(e)) {
			case H:
			case G:
			case J: {
				let t = new e.constructor(e?.valueOf());
				return Y(t, e), t;
			}
			case X: {
				let t = {};
				return Y(t, e), t.length = e.length, t[Symbol.iterator] = e[Symbol.iterator], t;
			}
			default: return;
		}
	}, Q(e, void 0, e, /* @__PURE__ */ new Map(), r);
}
var er = /^(?:0|[1-9]\d*)$/;
function en(e, t = Number.MAX_SAFE_INTEGER) {
	switch (typeof e) {
		case "number": return Number.isInteger(e) && e >= 0 && e < t;
		case "symbol": return !1;
		case "string": return er.test(e);
	}
}
function ei(e) {
	return null !== e && "object" == typeof e && "[object Arguments]" === A(e);
}
function el(e, t) {
	let r;
	if (0 === (r = Array.isArray(t) ? t : "string" == typeof t && d(t) && e?.[t] == null ? m(t) : [t]).length) return !1;
	let i = e;
	for (let e = 0; e < r.length; e++) {
		let t = r[e];
		if ((null == i || !Object.hasOwn(i, t)) && !((Array.isArray(i) || ei(i)) && en(t) && t < i.length)) return !1;
		i = i[t];
	}
	return !0;
}
function eo(e, t) {
	switch (typeof e) {
		case "object":
			Object.is(e?.valueOf(), -0) && (e = "-0");
			break;
		case "number": e = h(e);
	}
	return t = et(t), function(r) {
		let i = g(r, e);
		return void 0 === i ? el(r, e) : void 0 === t ? void 0 === i : S(i, t);
	};
}
function ea(e) {
	if (null == e) return f;
	switch (typeof e) {
		case "function": return e;
		case "object":
			if (Array.isArray(e) && 2 === e.length) return eo(e[0], e[1]);
			return ee(e);
		case "string":
		case "symbol":
		case "number": return b(e);
	}
}
function es(e) {
	return "object" == typeof e && null !== e;
}
function eu(e) {
	if (c(e)) {
		var t;
		return (t = Array.isArray(e) ? e : Array.from(e))[t.length - 1];
	}
}
function ec(e) {
	return "symbol" == typeof e || e instanceof Symbol;
}
function ef(e) {
	return "string" == typeof e || e instanceof String;
}
function ep(e) {
	return c(e) ? [...new Set(Array.from(e))] : [];
}
var ed = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, eh = /^\w*$/;
function ey(e, t) {
	if (null == e) return !0;
	switch (typeof t) {
		case "symbol":
		case "number":
		case "object":
			if (Array.isArray(t)) return em(e, t);
			if ("number" == typeof t ? t = h(t) : "object" == typeof t && (t = Object.is(t?.valueOf(), -0) ? "-0" : String(t)), p(t)) return !1;
			if (e?.[t] === void 0) return !0;
			try {
				return delete e[t], !0;
			} catch {
				return !1;
			}
		case "string":
			if (e?.[t] === void 0 && d(t)) return em(e, m(t));
			if (p(t)) return !1;
			try {
				return delete e[t], !0;
			} catch {
				return !1;
			}
	}
}
function em(e, t) {
	let r = 1 === t.length ? e : g(e, t.slice(0, -1)), i = t[t.length - 1];
	if (r?.[i] === void 0) return !0;
	if (p(i)) return !1;
	try {
		return delete r[i], !0;
	} catch {
		return !1;
	}
}
function ev(e) {
	return Array.isArray(e);
}
function eg(e, t, r) {
	if (!e) return !1;
	null != r && (t = void 0), t ??= f;
	let i = Array.isArray(e) ? e : Object.values(e);
	switch (typeof t) {
		case "function":
			if (!Array.isArray(e)) {
				let r = Object.keys(e);
				for (let i = 0; i < r.length; i++) {
					let l = r[i];
					if (t(e[l], l, e)) return !0;
				}
				return !1;
			}
			for (let r = 0; r < e.length; r++) if (t(e[r], r, e)) return !0;
			return !1;
		case "object":
			if (Array.isArray(t) && 2 === t.length) {
				let r = eo(t[0], t[1]);
				if (Array.isArray(e)) {
					for (let t = 0; t < e.length; t++) if (r(e[t])) return !0;
					return !1;
				}
				return i.some(r);
			}
			{
				let r = ee(t);
				if (Array.isArray(e)) {
					for (let t = 0; t < e.length; t++) if (r(e[t])) return !0;
					return !1;
				}
				return i.some(r);
			}
		case "number":
		case "symbol":
		case "string": {
			let r = b(t);
			if (Array.isArray(e)) {
				for (let t = 0; t < e.length; t++) if (r(e[t])) return !0;
				return !1;
			}
			return i.some(r);
		}
	}
}
function eb(e) {
	return e;
}
function e_(e) {
	return "number" == typeof e || e instanceof Number;
}
var ew = (e, t, r) => {
	let i = e[t];
	Object.hasOwn(e, t) && O(i, r) && (void 0 !== r || t in e) || (e[t] = r);
};
function eO(e, t, r) {
	return function(e, t, r, i) {
		if (null == e && !_(e)) return e;
		let l = !Array.isArray(t) && ("number" == typeof t || "boolean" == typeof t || null == t || ec(t) || "string" == typeof t && (eh.test(t) || !ed.test(t)) || null != e && Object.hasOwn(e, t)) ? [t] : Array.isArray(t) ? t : "string" == typeof t ? m(t) : [t], o = e;
		for (let t = 0; t < l.length && null != o; t++) {
			let a, s = h(l[t]);
			if (!p(s)) {
				if (t === l.length - 1) a = r(o[s]);
				else {
					let r = o[s], u = i?.(r, s, e);
					a = void 0 !== u ? u : _(r) ? r : en(l[t + 1]) ? [] : {};
				}
				ew(o, s, a), o = o[s];
			}
		}
		return e;
	}(e, t, () => r, () => void 0);
}
function ex(e) {
	return "undefined" != typeof Buffer && Buffer.isBuffer(e);
}
function ej(e) {
	let t = e?.constructor;
	return e === ("function" == typeof t ? t.prototype : Object.prototype);
}
function eS(e, t) {
	var r, i;
	let l, o;
	if ((e = (o = (l = (r = e) ? (r = ec(i = r) ? NaN : Number(i)) === Infinity || r === -Infinity ? (r < 0 ? -1 : 1) * Number.MAX_VALUE : r == r ? r : 0 : 0 === r ? r : 0) % 1) ? l - o : l) < 1 || !Number.isSafeInteger(e)) return [];
	let a = Array(e);
	for (let r = 0; r < e; r++) a[r] = "function" == typeof t ? t(r) : r;
	return a;
}
function eP(e) {
	if (c(e)) {
		var t;
		let r, i;
		return i = new Set(r = eS((t = e).length, (e) => `${e}`)), ex(t) && (i.add("offset"), i.add("parent")), Z(t) && (i.add("buffer"), i.add("byteLength"), i.add("byteOffset")), [...r, ...Object.keys(t).filter((e) => !i.has(e))];
	}
	let r = Object.keys(Object(e));
	return ej(e) ? r.filter((e) => "constructor" !== e) : r;
}
function eA(e) {
	if (null == e) return [];
	switch (typeof e) {
		case "object":
		case "function":
			if (c(e)) {
				var t;
				let r, i;
				return i = new Set(r = eS((t = e).length, (e) => `${e}`)), ex(t) && (i.add("offset"), i.add("parent")), Z(t) && (i.add("buffer"), i.add("byteLength"), i.add("byteOffset")), [...r, ...ek(t).filter((e) => !i.has(e))];
			}
			if (ej(e)) return ek(e).filter((e) => "constructor" !== e);
			return ek(e);
		default: return ek(Object(e));
	}
}
function ek(e) {
	let t = [];
	for (let r in e) t.push(r);
	return t;
}
function eE(e) {
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
function eM(e, t = f) {
	return null == e ? {} : function(e, t) {
		let r = {}, i = Object.keys(e);
		for (let l = 0; l < i.length; l++) {
			let o = i[l], a = e[o];
			r[o] = t(a, o, e);
		}
		return r;
	}(e, ea(t));
}
function eR(e) {
	let t = [];
	for (; e;) t.push(...P(e)), e = Object.getPrototypeOf(e);
	return t;
}
function e$(e, ...t) {
	var r;
	if (null == e) return {};
	let i = (r = e, (t = function(e, t = 1) {
		let r = [], i = Math.floor(t);
		if (!c(e)) return r;
		let l = (e, t) => {
			for (let o = 0; o < e.length; o++) {
				let a = e[o];
				t < i && (Array.isArray(a) || a?.[Symbol.isConcatSpreadable] || null !== a && "object" == typeof a && "[object Arguments]" === Object.prototype.toString.call(a)) ? Array.isArray(a) ? l(a, t + 1) : l(Array.from(a), t + 1) : r.push(a);
			}
		};
		return l(Array.from(e), 0), r;
	}(t)).some((e) => Array.isArray(e) || d(e)) ? function(e) {
		let t = {}, r = [...eA(e), ...eR(e)];
		for (let i = 0; i < r.length; i++) {
			let l = r[i];
			t[l] = et(e[l], (e) => {
				if (!eE(e)) return e;
			});
		}
		return t;
	}(r) : function(e) {
		let t = {}, r = [...eA(e), ...eR(e)];
		for (let i = 0; i < r.length; i++) {
			let l = r[i];
			t[l] = e[l];
		}
		return t;
	}(r));
	for (let e = 0; e < t.length; e++) {
		let r = t[e];
		switch (typeof r) {
			case "object":
				Array.isArray(r) || (r = Array.from(r));
				for (let e = 0; e < r.length; e++) ey(i, r[e]);
				break;
			case "string":
			case "symbol":
			case "number": ey(i, r);
		}
	}
	return i;
}
function eC(e, ...t) {
	if (null == e) return {};
	let r = {};
	for (let i = 0; i < t.length; i++) {
		let l = t[i];
		switch (typeof l) {
			case "object":
				Array.isArray(l) || (l = c(l) ? Array.from(l) : [l]);
				break;
			case "string":
			case "symbol":
			case "number": l = [l];
		}
		for (let t of l) {
			let i = g(e, t);
			(void 0 !== i || el(e, t)) && ("string" == typeof t && Object.hasOwn(e, t) ? r[t] = i : eO(r, t, i));
		}
	}
	return r;
}
function eT(e, t) {
	if (null == e) return {};
	let r = ea(t ?? eb), i = {}, l = c(e) ? function(e, t, r = 1) {
		if (t ?? (t = e, e = 0), !Number.isInteger(r) || 0 === r) throw Error("The step value must be a non-zero integer.");
		let i = Math.max(Math.ceil((t - e) / r), 0), l = Array(i);
		for (let t = 0; t < i; t++) l[t] = e + t * r;
		return l;
	}(0, e.length) : [...eA(e), ...eR(e)];
	for (let t = 0; t < l.length; t++) {
		let o = ec(l[t]) ? l[t] : l[t].toString(), a = e[o];
		r(a, o, e) && (i[o] = a);
	}
	return i;
}
function eF(e) {
	return "function" == typeof e;
}
function eN(e) {
	return void 0 === e;
}
function eL(e) {
	return "boolean" == typeof e || e instanceof Boolean;
}
function eD(e) {
	if (null == e) return !0;
	if (c(e)) return ("function" == typeof e.splice || "string" == typeof e || "undefined" != typeof Buffer && !!Buffer.isBuffer(e) || !!Z(e) || !!ei(e)) && 0 === e.length;
	if ("object" == typeof e) {
		if (e instanceof Map || e instanceof Set) return 0 === e.size;
		let t = Object.keys(e);
		return ej(e) ? 0 === t.filter((e) => "constructor" !== e).length : 0 === t.length;
	}
	return !0;
}
function eI(e) {
	return Number.isInteger(e);
}
var eB = /\p{Lu}?\p{Ll}+|[0-9]+|\p{Lu}+(?!\p{Ll})|\p{Emoji_Presentation}|\p{Extended_Pictographic}|\p{L}+/gu;
function eV(e) {
	return Array.from(e.match(eB) ?? []);
}
function eU(e) {
	return "string" != typeof e && (e = y(e)), e.replace(/['\u2019]/g, "");
}
function eW(e) {
	return function(e) {
		let t = eV(e);
		if (0 === t.length) return "";
		let [r, ...i] = t;
		return `${r.toLowerCase()}${i.map((e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join("")}`;
	}(eU(e));
}
function ez(e) {
	return eV(eU(e)).map((e) => e.toLowerCase()).join("-");
}
function eq(e, t = 0, r = " ") {
	return y(e).padStart(t, r);
}
function eK(e) {
	let t = Object.create(null);
	for (let r of e.split(",")) t[r] = 1;
	return (e) => e in t;
}
var eG = {}, eH = [], eJ = () => {}, eX = () => !1, eZ = (e) => 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && (e.charCodeAt(2) > 122 || 97 > e.charCodeAt(2)), eQ = (e) => e.startsWith("onUpdate:"), eY = Object.assign, e0 = (e, t) => {
	let r = e.indexOf(t);
	r > -1 && e.splice(r, 1);
}, e1 = Object.prototype.hasOwnProperty, e2 = (e, t) => e1.call(e, t), e6 = Array.isArray, e4 = (e) => "function" == typeof e, e8 = (e) => "string" == typeof e, e3 = (e) => "symbol" == typeof e, e5 = (e) => null !== e && "object" == typeof e, e9 = (e) => (e5(e) || e4(e)) && e4(e.then) && e4(e.catch), e7 = Object.prototype.toString, te = (e) => e8(e) && "NaN" !== e && "-" !== e[0] && "" + parseInt(e, 10) === e, tt = eK(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), tr = (e) => {
	let t = Object.create(null);
	return (r) => t[r] || (t[r] = e(r));
}, tn = /-\w/g, ti = tr((e) => e.replace(tn, (e) => e.slice(1).toUpperCase())), tl = /\B([A-Z])/g, to = tr((e) => e.replace(tl, "-$1").toLowerCase()), ta = tr((e) => e.charAt(0).toUpperCase() + e.slice(1)), ts = tr((e) => e ? `on${ta(e)}` : ""), tu = (e, ...t) => {
	for (let r = 0; r < e.length; r++) e[r](...t);
}, tc = (e, t, r, i = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: i,
		value: r
	});
}, tf = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, tp = (e) => {
	let t = e8(e) ? Number(e) : NaN;
	return isNaN(t) ? e : t;
}, td = () => k || (k = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
function th(e) {
	if (e6(e)) {
		let t = {};
		for (let r = 0; r < e.length; r++) {
			let i = e[r], l = e8(i) ? function(e) {
				let t = {};
				return e.replace(tv, "").split(ty).forEach((e) => {
					if (e) {
						let r = e.split(tm);
						r.length > 1 && (t[r[0].trim()] = r[1].trim());
					}
				}), t;
			}(i) : th(i);
			if (l) for (let e in l) t[e] = l[e];
		}
		return t;
	}
	if (e8(e) || e5(e)) return e;
}
var ty = /;(?![^(]*\))/g, tm = /:([^]+)/, tv = /\/\*[^]*?\*\//g;
function tg(e) {
	let t = "";
	if (e8(e)) t = e;
	else if (e6(e)) for (let r = 0; r < e.length; r++) {
		let i = tg(e[r]);
		i && (t += i + " ");
	}
	else if (e5(e)) for (let r in e) e[r] && (t += r + " ");
	return t.trim();
}
var tb = eK("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");
function t_(e) {
	return !!e || "" === e;
}
var tw = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = E, !e && E && (this.index = (E.scopes || (E.scopes = [])).push(this) - 1);
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
			let t = E;
			try {
				return E = this, e();
			} finally {
				E = t;
			}
		}
	}
	on() {
		1 == ++this._on && (this.prevScope = E, E = this);
	}
	off() {
		this._on > 0 && 0 == --this._on && (E = this.prevScope, this.prevScope = void 0);
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
}, tO = /* @__PURE__ */ new WeakSet(), tx = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, E && E.active && E.effects.push(this);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		64 & this.flags && (this.flags &= -65, tO.has(this) && (tO.delete(this), this.trigger()));
	}
	notify() {
		(!(2 & this.flags) || 32 & this.flags) && (8 & this.flags || tS(this));
	}
	run() {
		if (!(1 & this.flags)) return this.fn();
		this.flags |= 2, tN(this), tA(this);
		let e = M, t = t$;
		M = this, t$ = !0;
		try {
			return this.fn();
		} finally {
			tk(this), M = e, t$ = t, this.flags &= -3;
		}
	}
	stop() {
		if (1 & this.flags) {
			for (let e = this.deps; e; e = e.nextDep) tR(e);
			this.deps = this.depsTail = void 0, tN(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		64 & this.flags ? tO.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		tE(this) && this.run();
	}
	get dirty() {
		return tE(this);
	}
}, tj = 0;
function tS(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = $, $ = e;
		return;
	}
	e.next = R, R = e;
}
function tP() {
	let e;
	if (!(--tj > 0)) {
		if ($) {
			let e = $;
			for ($ = void 0; e;) {
				let t = e.next;
				e.next = void 0, e.flags &= -9, e = t;
			}
		}
		for (; R;) {
			let t = R;
			for (R = void 0; t;) {
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
function tA(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function tk(e) {
	let t, r = e.depsTail, i = r;
	for (; i;) {
		let e = i.prevDep;
		-1 === i.version ? (i === r && (r = e), tR(i), function(e) {
			let { prevDep: t, nextDep: r } = e;
			t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
		}(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = e;
	}
	e.deps = t, e.depsTail = r;
}
function tE(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (tM(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function tM(e) {
	if (4 & e.flags && !(16 & e.flags) || (e.flags &= -17, e.globalVersion === tL) || (e.globalVersion = tL, !e.isSSR && 128 & e.flags && (!e.deps && !e._dirty || !tE(e)))) return;
	e.flags |= 2;
	let t = e.dep, r = M, i = t$;
	M = e, t$ = !0;
	try {
		let r;
		tA(e);
		let i = e.fn(e._value);
		(0 === t.version || (r = e._value, !Object.is(i, r))) && (e.flags |= 128, e._value = i, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		M = r, t$ = i, tk(e), e.flags &= -3;
	}
}
function tR(e, t = !1) {
	let { dep: r, prevSub: i, nextSub: l } = e;
	if (i && (i.nextSub = l, e.prevSub = void 0), l && (l.prevSub = i, e.nextSub = void 0), r.subs === e && (r.subs = i, !i && r.computed)) {
		r.computed.flags &= -5;
		for (let e = r.computed.deps; e; e = e.nextDep) tR(e, !0);
	}
	t || --r.sc || !r.map || r.map.delete(r.key);
}
var t$ = !0, tC = [];
function tT() {
	tC.push(t$), t$ = !1;
}
function tF() {
	let e = tC.pop();
	t$ = void 0 === e || e;
}
function tN(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = M;
		M = void 0;
		try {
			t();
		} finally {
			M = e;
		}
	}
}
var tL = 0, tD = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, tI = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!M || !t$ || M === this.computed) return;
		let t = this.activeLink;
		if (void 0 === t || t.sub !== M) t = this.activeLink = new tD(M, this), M.deps ? (t.prevDep = M.depsTail, M.depsTail.nextDep = t, M.depsTail = t) : M.deps = M.depsTail = t, function e(t) {
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
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = M.depsTail, t.nextDep = void 0, M.depsTail.nextDep = t, M.depsTail = t, M.deps === t && (M.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, tL++, this.notify(e);
	}
	notify(e) {
		tj++;
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			tP();
		}
	}
}, tB = /* @__PURE__ */ new WeakMap(), tV = Symbol(""), tU = Symbol(""), tW = Symbol("");
function tz(e, t, r) {
	if (t$ && M) {
		let t = tB.get(e);
		t || tB.set(e, t = /* @__PURE__ */ new Map());
		let i = t.get(r);
		i || (t.set(r, i = new tI()), i.map = t, i.key = r), i.track();
	}
}
function tq(e, t, r, i, l, o) {
	let a = tB.get(e);
	if (!a) return void tL++;
	let s = (e) => {
		e && e.trigger();
	};
	if (tj++, "clear" === t) a.forEach(s);
	else {
		let l = e6(e), o = l && te(r);
		if (l && "length" === r) {
			let e = Number(i);
			a.forEach((t, r) => {
				("length" === r || r === tW || !e3(r) && r >= e) && s(t);
			});
		} else switch ((void 0 !== r || a.has(void 0)) && s(a.get(r)), o && s(a.get(tW)), t) {
			case "add":
				if (l) o && s(a.get("length"));
				else {
					let t;
					s(a.get(tV));
					"[object Map]" === (t = e, e7.call(t)) && s(a.get(tU));
				}
				break;
			case "delete":
				if (!l) {
					let t;
					s(a.get(tV));
					"[object Map]" === (t = e, e7.call(t)) && s(a.get(tU));
				}
				break;
			case "set":
				let u;
				"[object Map]" === (u = e, e7.call(u)) && s(a.get(tV));
		}
	}
	tP();
}
function tK(e) {
	let t = rg(e);
	return t === e ? t : (tz(t, "iterate", tW), rm(e) ? t : t.map(rb));
}
function tG(e) {
	return tz(e = rg(e), "iterate", tW), e;
}
var tH = {
	__proto__: null,
	[Symbol.iterator]() {
		return tJ(this, Symbol.iterator, rb);
	},
	concat(...e) {
		return tK(this).concat(...e.map((e) => e6(e) ? tK(e) : e));
	},
	entries() {
		return tJ(this, "entries", (e) => (e[1] = rb(e[1]), e));
	},
	every(e, t) {
		return tZ(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return tZ(this, "filter", e, t, (e) => e.map(rb), arguments);
	},
	find(e, t) {
		return tZ(this, "find", e, t, rb, arguments);
	},
	findIndex(e, t) {
		return tZ(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return tZ(this, "findLast", e, t, rb, arguments);
	},
	findLastIndex(e, t) {
		return tZ(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return tZ(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return tY(this, "includes", e);
	},
	indexOf(...e) {
		return tY(this, "indexOf", e);
	},
	join(e) {
		return tK(this).join(e);
	},
	lastIndexOf(...e) {
		return tY(this, "lastIndexOf", e);
	},
	map(e, t) {
		return tZ(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return t0(this, "pop");
	},
	push(...e) {
		return t0(this, "push", e);
	},
	reduce(e, ...t) {
		return tQ(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return tQ(this, "reduceRight", e, t);
	},
	shift() {
		return t0(this, "shift");
	},
	some(e, t) {
		return tZ(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return t0(this, "splice", e);
	},
	toReversed() {
		return tK(this).toReversed();
	},
	toSorted(e) {
		return tK(this).toSorted(e);
	},
	toSpliced(...e) {
		return tK(this).toSpliced(...e);
	},
	unshift(...e) {
		return t0(this, "unshift", e);
	},
	values() {
		return tJ(this, "values", rb);
	}
};
function tJ(e, t, r) {
	let i = tG(e), l = i[t]();
	return i === e || rm(e) || (l._next = l.next, l.next = () => {
		let e = l._next();
		return e.done || (e.value = r(e.value)), e;
	}), l;
}
var tX = Array.prototype;
function tZ(e, t, r, i, l, o) {
	let a = tG(e), s = a !== e && !rm(e), u = a[t];
	if (u !== tX[t]) {
		let t = u.apply(e, o);
		return s ? rb(t) : t;
	}
	let c = r;
	a !== e && (s ? c = function(t, i) {
		return r.call(this, rb(t), i, e);
	} : r.length > 2 && (c = function(t, i) {
		return r.call(this, t, i, e);
	}));
	let f = u.call(a, c, i);
	return s && l ? l(f) : f;
}
function tQ(e, t, r, i) {
	let l = tG(e), o = r;
	return l !== e && (rm(e) ? r.length > 3 && (o = function(t, i, l) {
		return r.call(this, t, i, l, e);
	}) : o = function(t, i, l) {
		return r.call(this, t, rb(i), l, e);
	}), l[t](o, ...i);
}
function tY(e, t, r) {
	let i = rg(e);
	tz(i, "iterate", tW);
	let l = i[t](...r);
	return (-1 === l || !1 === l) && rv(r[0]) ? (r[0] = rg(r[0]), i[t](...r)) : l;
}
function t0(e, t, r = []) {
	tT(), tj++;
	let i = rg(e)[t].apply(e, r);
	return tP(), tF(), i;
}
var t1 = eK("__proto__,__v_isRef,__isVue"), t2 = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => "arguments" !== e && "caller" !== e).map((e) => Symbol[e]).filter(e3));
function t6(e) {
	e3(e) || (e = String(e));
	let t = rg(this);
	return tz(t, "has", e), t.hasOwnProperty(e);
}
var t4 = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, r) {
		if ("__v_skip" === t) return e.__v_skip;
		let i = this._isReadonly, l = this._isShallow;
		if ("__v_isReactive" === t) return !i;
		if ("__v_isReadonly" === t) return i;
		if ("__v_isShallow" === t) return l;
		if ("__v_raw" === t) return r === (i ? l ? ru : rs : l ? ra : ro).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(r) ? e : void 0;
		let o = e6(e);
		if (!i) {
			let e;
			if (o && (e = tH[t])) return e;
			if ("hasOwnProperty" === t) return t6;
		}
		let a = Reflect.get(e, t, rw(e) ? e : r);
		if ((e3(t) ? t2.has(t) : t1(t)) || (i || tz(e, "get", t), l)) return a;
		if (rw(a)) {
			let e = o && te(t) ? a : a.value;
			return i && e5(e) ? rp(e) : e;
		}
		return e5(a) ? i ? rp(a) : rc(a) : a;
	}
}, t8 = class extends t4 {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, r, i) {
		let l = e[t];
		if (!this._isShallow) {
			let t = ry(l);
			if (rm(r) || ry(r) || (l = rg(l), r = rg(r)), !e6(e) && rw(l) && !rw(r)) if (t) return !0;
			else return l.value = r, !0;
		}
		let o = e6(e) && te(t) ? Number(t) < e.length : e2(e, t), a = Reflect.set(e, t, r, rw(e) ? e : i);
		return e === rg(i) && (o ? Object.is(r, l) || tq(e, "set", t, r, l) : tq(e, "add", t, r)), a;
	}
	deleteProperty(e, t) {
		let r = e2(e, t), i = e[t], l = Reflect.deleteProperty(e, t);
		return l && r && tq(e, "delete", t, void 0, i), l;
	}
	has(e, t) {
		let r = Reflect.has(e, t);
		return e3(t) && t2.has(t) || tz(e, "has", t), r;
	}
	ownKeys(e) {
		return tz(e, "iterate", e6(e) ? "length" : tV), Reflect.ownKeys(e);
	}
}, t3 = class extends t4 {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, t5 = new t8(), t9 = new t3(), t7 = new t8(!0), re = (e) => e;
function rt(e) {
	return function() {
		return "delete" !== e && ("clear" === e ? void 0 : this);
	};
}
function rr(e, t) {
	let r, i = (eY(r = {
		get(r) {
			let i = this.__v_raw, l = rg(i), o = rg(r);
			e || (Object.is(r, o) || tz(l, "get", r), tz(l, "get", o));
			let { has: a } = Reflect.getPrototypeOf(l), s = t ? re : e ? r_ : rb;
			return a.call(l, r) ? s(i.get(r)) : a.call(l, o) ? s(i.get(o)) : void (i !== l && i.get(r));
		},
		get size() {
			let t = this.__v_raw;
			return e || tz(rg(t), "iterate", tV), t.size;
		},
		has(t) {
			let r = this.__v_raw, i = rg(r), l = rg(t);
			return e || (Object.is(t, l) || tz(i, "has", t), tz(i, "has", l)), t === l ? r.has(t) : r.has(t) || r.has(l);
		},
		forEach(r, i) {
			let l = this, o = l.__v_raw, a = rg(o), s = t ? re : e ? r_ : rb;
			return e || tz(a, "iterate", tV), o.forEach((e, t) => r.call(i, s(e), s(t), l));
		}
	}, e ? {
		add: rt("add"),
		set: rt("set"),
		delete: rt("delete"),
		clear: rt("clear")
	} : {
		add(e) {
			t || rm(e) || ry(e) || (e = rg(e));
			let r = rg(this);
			return Reflect.getPrototypeOf(r).has.call(r, e) || (r.add(e), tq(r, "add", e, e)), this;
		},
		set(e, r) {
			t || rm(r) || ry(r) || (r = rg(r));
			let i = rg(this), { has: l, get: o } = Reflect.getPrototypeOf(i), a = l.call(i, e);
			a || (e = rg(e), a = l.call(i, e));
			let s = o.call(i, e);
			return (i.set(e, r), a) ? Object.is(r, s) || tq(i, "set", e, r, s) : tq(i, "add", e, r), this;
		},
		delete(e) {
			let t = rg(this), { has: r, get: i } = Reflect.getPrototypeOf(t), l = r.call(t, e);
			l || (e = rg(e), l = r.call(t, e));
			let o = i ? i.call(t, e) : void 0, a = t.delete(e);
			return l && tq(t, "delete", e, void 0, o), a;
		},
		clear() {
			let e = rg(this), t = 0 !== e.size, r = e.clear();
			return t && tq(e, "clear", void 0, void 0, void 0), r;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((i) => {
		r[i] = function(...r) {
			let l, o = this.__v_raw, a = rg(o), s = "[object Map]" === (l = a, e7.call(l)), u = "entries" === i || i === Symbol.iterator && s, c = o[i](...r), f = t ? re : e ? r_ : rb;
			return e || tz(a, "iterate", "keys" === i && s ? tU : tV), {
				next() {
					let { value: e, done: t } = c.next();
					return t ? {
						value: e,
						done: t
					} : {
						value: u ? [f(e[0]), f(e[1])] : f(e),
						done: t
					};
				},
				[Symbol.iterator]() {
					return this;
				}
			};
		};
	}), r);
	return (t, r, l) => "__v_isReactive" === r ? !e : "__v_isReadonly" === r ? e : "__v_raw" === r ? t : Reflect.get(e2(i, r) && r in t ? i : t, r, l);
}
var rn = { get: rr(!1, !1) }, ri = { get: rr(!1, !0) }, rl = { get: rr(!0, !1) }, ro = /* @__PURE__ */ new WeakMap(), ra = /* @__PURE__ */ new WeakMap(), rs = /* @__PURE__ */ new WeakMap(), ru = /* @__PURE__ */ new WeakMap();
function rc(e) {
	return ry(e) ? e : rd(e, !1, t5, rn, ro);
}
function rf(e) {
	return rd(e, !1, t7, ri, ra);
}
function rp(e) {
	return rd(e, !0, t9, rl, rs);
}
function rd(e, t, r, i, l) {
	var o;
	let a;
	if (!e5(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
	let s = (o = e).__v_skip || !Object.isExtensible(o) ? 0 : function(e) {
		switch (e) {
			case "Object":
			case "Array": return 1;
			case "Map":
			case "Set":
			case "WeakMap":
			case "WeakSet": return 2;
			default: return 0;
		}
	}((a = o, e7.call(a)).slice(8, -1));
	if (0 === s) return e;
	let u = l.get(e);
	if (u) return u;
	let c = new Proxy(e, 2 === s ? i : r);
	return l.set(e, c), c;
}
function rh(e) {
	return ry(e) ? rh(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ry(e) {
	return !!(e && e.__v_isReadonly);
}
function rm(e) {
	return !!(e && e.__v_isShallow);
}
function rv(e) {
	return !!e && !!e.__v_raw;
}
function rg(e) {
	let t = e && e.__v_raw;
	return t ? rg(t) : e;
}
var rb = (e) => e5(e) ? rc(e) : e, r_ = (e) => e5(e) ? rp(e) : e;
function rw(e) {
	return !!e && !0 === e.__v_isRef;
}
function rO(e) {
	return rj(e, !1);
}
function rx(e) {
	return rj(e, !0);
}
function rj(e, t) {
	return rw(e) ? e : new rS(e, t);
}
var rS = class {
	constructor(e, t) {
		this.dep = new tI(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : rg(e), this._value = t ? e : rb(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, r = this.__v_isShallow || rm(e) || ry(e);
		Object.is(e = r ? e : rg(e), t) || (this._rawValue = e, this._value = r ? e : rb(e), this.dep.trigger());
	}
};
function rP(e) {
	return rw(e) ? e.value : e;
}
var rA = {
	get: (e, t, r) => "__v_raw" === t ? e : rP(Reflect.get(e, t, r)),
	set: (e, t, r, i) => {
		let l = e[t];
		return rw(l) && !rw(r) ? (l.value = r, !0) : Reflect.set(e, t, r, i);
	}
};
function rk(e) {
	return rh(e) ? e : new Proxy(e, rA);
}
var rE = class {
	constructor(e) {
		this.__v_isRef = !0, this._value = void 0;
		let t = this.dep = new tI(), { get: r, set: i } = e(t.track.bind(t), t.trigger.bind(t));
		this._get = r, this._set = i;
	}
	get value() {
		return this._value = this._get();
	}
	set value(e) {
		this._set(e);
	}
}, rM = class {
	constructor(e, t, r) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new tI(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = tL - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = r;
	}
	notify() {
		if (this.flags |= 16, !(8 & this.flags) && M !== this) return tS(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return tM(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
}, rR = {}, r$ = /* @__PURE__ */ new WeakMap(), rC = void 0;
function rT(e, t = Infinity, r) {
	if (t <= 0 || !e5(e) || e.__v_skip || ((r = r || /* @__PURE__ */ new Map()).get(e) || 0) >= t) return e;
	if (r.set(e, t), t--, rw(e)) rT(e.value, t, r);
	else if (e6(e)) for (let i = 0; i < e.length; i++) rT(e[i], t, r);
	else {
		let i, l;
		if ("[object Set]" === (i = e, e7.call(i)) || "[object Map]" === (l = e, e7.call(l))) e.forEach((e) => {
			rT(e, t, r);
		});
		else {
			let i;
			if ("[object Object]" === (i = e, e7.call(i))) {
				for (let i in e) rT(e[i], t, r);
				for (let i of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, i) && rT(e[i], t, r);
			}
		}
	}
	return e;
}
function rF(e, t, r, i) {
	try {
		return i ? e(...i) : e();
	} catch (e) {
		rL(e, t, r);
	}
}
function rN(e, t, r, i) {
	if (e4(e)) {
		let l = rF(e, t, r, i);
		return l && e9(l) && l.catch((e) => {
			rL(e, t, r);
		}), l;
	}
	if (e6(e)) {
		let l = [];
		for (let o = 0; o < e.length; o++) l.push(rN(e[o], t, r, i));
		return l;
	}
}
function rL(e, t, r, i = !0) {
	t && t.vnode;
	let { errorHandler: o, throwUnhandledErrorInProduction: a } = t && t.appContext.config || eG;
	if (t) {
		let i = t.parent, l = t.proxy, a = `https://vuejs.org/error-reference/#runtime-${r}`;
		for (; i;) {
			let t = i.ec;
			if (t) {
				for (let r = 0; r < t.length; r++) if (!1 === t[r](e, l, a)) return;
			}
			i = i.parent;
		}
		if (o) {
			tT(), rF(o, null, 10, [
				e,
				l,
				a
			]), tF();
			return;
		}
	}
	(function(e, t, r, i = !0, l = !1) {
		if (l) throw e;
		console.error(e);
	})(e, 0, 0, i, a);
}
var rD = [], rI = -1, rB = [], rV = null, rU = 0, rW = Promise.resolve(), rz = null;
function rq(e) {
	let t = rz || rW;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function rK(e) {
	if (!(1 & e.flags)) {
		let t = rX(e), r = rD[rD.length - 1];
		!r || !(2 & e.flags) && t >= rX(r) ? rD.push(e) : rD.splice(function(e) {
			let t = rI + 1, r = rD.length;
			for (; t < r;) {
				let i = t + r >>> 1, l = rD[i], o = rX(l);
				o < e || o === e && 2 & l.flags ? t = i + 1 : r = i;
			}
			return t;
		}(t), 0, e), e.flags |= 1, rG();
	}
}
function rG() {
	rz || (rz = rW.then(function e(t) {
		try {
			for (rI = 0; rI < rD.length; rI++) {
				let e = rD[rI];
				e && !(8 & e.flags) && (4 & e.flags && (e.flags &= -2), rF(e, e.i, e.i ? 15 : 14), 4 & e.flags || (e.flags &= -2));
			}
		} finally {
			for (; rI < rD.length; rI++) {
				let e = rD[rI];
				e && (e.flags &= -2);
			}
			rI = -1, rD.length = 0, rJ(t), rz = null, (rD.length || rB.length) && e(t);
		}
	}));
}
function rH(e, t, r = rI + 1) {
	for (; r < rD.length; r++) {
		let t = rD[r];
		if (t && 2 & t.flags) {
			if (e && t.id !== e.uid) continue;
			rD.splice(r, 1), r--, 4 & t.flags && (t.flags &= -2), t(), 4 & t.flags || (t.flags &= -2);
		}
	}
}
function rJ(e) {
	if (rB.length) {
		let e = [...new Set(rB)].sort((e, t) => rX(e) - rX(t));
		if (rB.length = 0, rV) return void rV.push(...e);
		for (rU = 0, rV = e; rU < rV.length; rU++) {
			let e = rV[rU];
			4 & e.flags && (e.flags &= -2), 8 & e.flags || e(), e.flags &= -2;
		}
		rV = null, rU = 0;
	}
}
var rX = (e) => null == e.id ? 2 & e.flags ? -1 : Infinity : e.id, rZ = null, rQ = null;
function rY(e) {
	let t = rZ;
	return rZ = e, rQ = e && e.type.__scopeId || null, t;
}
function r0(e, t, r, i) {
	let l = e.dirs, o = t && t.dirs;
	for (let a = 0; a < l.length; a++) {
		let s = l[a];
		o && (s.oldValue = o[a].value);
		let u = s.dir[i];
		u && (tT(), rN(u, r, 8, [
			e.el,
			s,
			e,
			t
		]), tF());
	}
}
var r1 = Symbol("_vte"), r2 = (e) => e && (e.disabled || "" === e.disabled), r6 = (e) => e && (e.defer || "" === e.defer), r4 = (e) => "undefined" != typeof SVGElement && e instanceof SVGElement, r8 = (e) => "function" == typeof MathMLElement && e instanceof MathMLElement, r3 = (e, t) => {
	let r = e && e.to;
	return e8(r) ? t ? t(r) : null : r;
}, r5 = {
	name: "Teleport",
	__isTeleport: !0,
	process(e, t, r, i, l, o, a, s, u, c) {
		let { mc: f, pc: p, pbc: d, o: { insert: h, querySelector: y, createText: m, createComment: g } } = c, b = r2(t.props), { shapeFlag: _, children: w, dynamicChildren: O } = t;
		if (null == e) {
			let e = t.el = m(""), c = t.anchor = m("");
			h(e, r, i), h(c, r, i);
			let p = (e, t) => {
				16 & _ && f(w, e, t, l, o, a, s, u);
			}, d = () => {
				let e = t.target = r3(t.props, y), r = nt(e, t, m, h);
				e && ("svg" !== a && r4(e) ? a = "svg" : "mathml" !== a && r8(e) && (a = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(e), b || (p(e, r), ne(t, !1)));
			};
			b && (p(r, c), ne(t, !0)), r6(t.props) ? (t.el.__isMounted = !1, io(() => {
				d(), delete t.el.__isMounted;
			}, o)) : d();
		} else {
			if (r6(t.props) && !1 === e.el.__isMounted) return void io(() => {
				r5.process(e, t, r, i, l, o, a, s, u, c);
			}, o);
			t.el = e.el, t.targetStart = e.targetStart;
			let f = t.anchor = e.anchor, h = t.target = e.target, m = t.targetAnchor = e.targetAnchor, g = r2(e.props), _ = g ? r : h, w = g ? f : m;
			if ("svg" === a || r4(h) ? a = "svg" : ("mathml" === a || r8(h)) && (a = "mathml"), O ? (d(e.dynamicChildren, O, _, l, o, a, s), ic(e, t, !0)) : u || p(e, t, _, w, l, o, a, s, !1), b) g ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : r9(t, r, f, c, 1);
			else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
				let e = t.target = r3(t.props, y);
				e && r9(t, e, null, c, 0);
			} else g && r9(t, h, m, c, 1);
			ne(t, b);
		}
	},
	remove(e, t, r, { um: i, o: { remove: l } }, o) {
		let { shapeFlag: a, children: s, anchor: u, targetStart: c, targetAnchor: f, target: p, props: d } = e;
		if (p && (l(c), l(f)), o && l(u), 16 & a) {
			let e = o || !r2(d);
			for (let l = 0; l < s.length; l++) {
				let o = s[l];
				i(o, t, r, e, !!o.dynamicChildren);
			}
		}
	},
	move: r9,
	hydrate: function(e, t, r, i, l, o, { o: { nextSibling: a, parentNode: s, querySelector: u, insert: c, createText: f } }, p) {
		function d(e, t, u, c) {
			t.anchor = p(a(e), t, s(e), r, i, l, o), t.targetStart = u, t.targetAnchor = c;
		}
		let h = t.target = r3(t.props, u), y = r2(t.props);
		if (h) {
			let s = h._lpa || h.firstChild;
			if (16 & t.shapeFlag) if (y) d(e, t, s, s && a(s));
			else {
				t.anchor = a(e);
				let u = s;
				for (; u;) {
					if (u && 8 === u.nodeType) {
						if ("teleport start anchor" === u.data) t.targetStart = u;
						else if ("teleport anchor" === u.data) {
							t.targetAnchor = u, h._lpa = t.targetAnchor && a(t.targetAnchor);
							break;
						}
					}
					u = a(u);
				}
				t.targetAnchor || nt(h, t, f, c), p(s && a(s), t, h, r, i, l, o);
			}
			ne(t, y);
		} else y && 16 & t.shapeFlag && d(e, t, e, a(e));
		return t.anchor && a(t.anchor);
	}
};
function r9(e, t, r, { o: { insert: i }, m: l }, o = 2) {
	0 === o && i(e.targetAnchor, t, r);
	let { el: a, anchor: s, shapeFlag: u, children: c, props: f } = e, p = 2 === o;
	if (p && i(a, t, r), (!p || r2(f)) && 16 & u) for (let e = 0; e < c.length; e++) l(c[e], t, r, 2);
	p && i(s, t, r);
}
var r7 = r5;
function ne(e, t) {
	let r = e.ctx;
	if (r && r.ut) {
		let i, l;
		for (t ? (i = e.el, l = e.anchor) : (i = e.targetStart, l = e.targetAnchor); i && i !== l;) 1 === i.nodeType && i.setAttribute("data-v-owner", r.uid), i = i.nextSibling;
		r.ut();
	}
}
function nt(e, t, r, i) {
	let l = t.targetStart = r(""), o = t.targetAnchor = r("");
	return l[r1] = o, e && (i(l, e), i(o, e)), o;
}
var nr = Symbol("_leaveCb"), nn = Symbol("_enterCb"), ni = [Function, Array], nl = {
	mode: String,
	appear: Boolean,
	persisted: Boolean,
	onBeforeEnter: ni,
	onEnter: ni,
	onAfterEnter: ni,
	onEnterCancelled: ni,
	onBeforeLeave: ni,
	onLeave: ni,
	onAfterLeave: ni,
	onLeaveCancelled: ni,
	onBeforeAppear: ni,
	onAppear: ni,
	onAfterAppear: ni,
	onAppearCancelled: ni
}, no = (e) => {
	let t = e.subTree;
	return t.component ? no(t.component) : t;
};
function na(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let r of e) if (r.type !== ik) {
			t = r;
			break;
		}
	}
	return t;
}
var ns = {
	name: "BaseTransition",
	props: nl,
	setup(e, { slots: t }) {
		let r, i = iK(), l = (r = {
			isMounted: !1,
			isLeaving: !1,
			isUnmounting: !1,
			leavingVNodes: /* @__PURE__ */ new Map()
		}, nA(() => {
			r.isMounted = !0;
		}), nM(() => {
			r.isUnmounting = !0;
		}), r);
		return () => {
			let r = t.default && function e(t, r = !1, i) {
				let l = [], o = 0;
				for (let a = 0; a < t.length; a++) {
					let s = t[a], u = null == i ? s.key : String(i) + String(null != s.key ? s.key : a);
					s.type === iP ? (128 & s.patchFlag && o++, l = l.concat(e(s.children, r, u))) : (r || s.type !== ik) && l.push(null != u ? iD(s, { key: u }) : s);
				}
				if (o > 1) for (let e = 0; e < l.length; e++) l[e].patchFlag = -2;
				return l;
			}(t.default(), !0);
			if (!r || !r.length) return;
			let o = na(r), a = rg(e), { mode: s } = a;
			if (l.isLeaving) return nf(o);
			let u = np(o);
			if (!u) return nf(o);
			let c = nc(u, a, l, i, (e) => c = e);
			u.type !== ik && nd(u, c);
			let f = i.subTree && np(i.subTree);
			if (f && f.type !== ik && !iT(f, u) && no(i).type !== ik) {
				let e = nc(f, a, l, i);
				if (nd(f, e), "out-in" === s && u.type !== ik) return l.isLeaving = !0, e.afterLeave = () => {
					l.isLeaving = !1, 8 & i.job.flags || i.update(), delete e.afterLeave, f = void 0;
				}, nf(o);
				"in-out" === s && u.type !== ik ? e.delayLeave = (e, t, r) => {
					nu(l, f)[String(f.key)] = f, e[nr] = () => {
						t(), e[nr] = void 0, delete c.delayedLeave, f = void 0;
					}, c.delayedLeave = () => {
						r(), delete c.delayedLeave, f = void 0;
					};
				} : f = void 0;
			} else f && (f = void 0);
			return o;
		};
	}
};
function nu(e, t) {
	let { leavingVNodes: r } = e, i = r.get(t.type);
	return i || (i = Object.create(null), r.set(t.type, i)), i;
}
function nc(e, t, r, i, l) {
	let { appear: o, mode: a, persisted: s = !1, onBeforeEnter: u, onEnter: c, onAfterEnter: f, onEnterCancelled: p, onBeforeLeave: d, onLeave: h, onAfterLeave: y, onLeaveCancelled: m, onBeforeAppear: g, onAppear: b, onAfterAppear: _, onAppearCancelled: w } = t, O = String(e.key), x = nu(r, e), j = (e, t) => {
		e && rN(e, i, 9, t);
	}, S = (e, t) => {
		let r = t[1];
		j(e, t), e6(e) ? e.every((e) => e.length <= 1) && r() : e.length <= 1 && r();
	}, P = {
		mode: a,
		persisted: s,
		beforeEnter(t) {
			let i = u;
			if (!r.isMounted) if (!o) return;
			else i = g || u;
			t[nr] && t[nr](!0);
			let l = x[O];
			l && iT(e, l) && l.el[nr] && l.el[nr](), j(i, [t]);
		},
		enter(e) {
			let t = c, i = f, l = p;
			if (!r.isMounted) if (!o) return;
			else t = b || c, i = _ || f, l = w || p;
			let a = !1, s = e[nn] = (t) => {
				a || (a = !0, t ? j(l, [e]) : j(i, [e]), P.delayedLeave && P.delayedLeave(), e[nn] = void 0);
			};
			t ? S(t, [e, s]) : s();
		},
		leave(t, i) {
			let l = String(e.key);
			if (t[nn] && t[nn](!0), r.isUnmounting) return i();
			j(d, [t]);
			let o = !1, a = t[nr] = (r) => {
				o || (o = !0, i(), r ? j(m, [t]) : j(y, [t]), t[nr] = void 0, x[l] === e && delete x[l]);
			};
			x[l] = e, h ? S(h, [t, a]) : a();
		},
		clone(e) {
			let o = nc(e, t, r, i, l);
			return l && l(o), o;
		}
	};
	return P;
}
function nf(e) {
	if (n_(e)) return (e = iD(e)).children = null, e;
}
function np(e) {
	if (!n_(e)) return e.type.__isTeleport && e.children ? na(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: r } = e;
	if (r) {
		if (16 & t) return r[0];
		if (32 & t && e4(r.default)) return r.default();
	}
}
function nd(e, t) {
	6 & e.shapeFlag && e.component ? (e.transition = t, nd(e.component.subTree, t)) : 128 & e.shapeFlag ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function nh(e, t) {
	return e4(e) ? eY({ name: e.name }, t, { setup: e }) : e;
}
function ny(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
var nm = /* @__PURE__ */ new WeakMap();
function nv(e, t, r, i, l = !1) {
	if (e6(e)) return void e.forEach((e, o) => nv(e, t && (e6(t) ? t[o] : t), r, i, l));
	if (nb(i) && !l) {
		512 & i.shapeFlag && i.type.__asyncResolved && i.component.subTree.component && nv(e, t, r, i.component.subTree);
		return;
	}
	let o = 4 & i.shapeFlag ? i0(i.component) : i.el, a = l ? null : o, { i: s, r: u } = e, c = t && t.r, f = s.refs === eG ? s.refs = {} : s.refs, p = s.setupState, d = rg(p), h = p === eG ? eX : (e) => e2(d, e);
	if (null != c && c !== u && ((ng(t), e8(c)) ? (f[c] = null, h(c) && (p[c] = null)) : rw(c) && (c.value = null, t.k && (f[t.k] = null))), e4(u)) rF(u, s, 12, [a, f]);
	else {
		let t = e8(u), i = rw(u);
		if (t || i) {
			let s = () => {
				if (e.f) {
					let r = t ? h(u) ? p[u] : f[u] : u.value;
					if (l) e6(r) && e0(r, o);
					else if (e6(r)) r.includes(o) || r.push(o);
					else if (t) f[u] = [o], h(u) && (p[u] = f[u]);
					else {
						let t = [o];
						u.value = t, e.k && (f[e.k] = t);
					}
				} else t ? (f[u] = a, h(u) && (p[u] = a)) : i && (u.value = a, e.k && (f[e.k] = a));
			};
			if (a) {
				let t = () => {
					s(), nm.delete(e);
				};
				t.id = -1, nm.set(e, t), io(t, r);
			} else ng(e), s();
		}
	}
}
function ng(e) {
	let t = nm.get(e);
	t && (t.flags |= 8, nm.delete(e));
}
td().requestIdleCallback, td().cancelIdleCallback;
var nb = (e) => !!e.type.__asyncLoader, n_ = (e) => e.type.__isKeepAlive;
function nw(e, t) {
	nx(e, "a", t);
}
function nO(e, t) {
	nx(e, "da", t);
}
function nx(e, t, r = iq) {
	let i = e.__wdc || (e.__wdc = () => {
		let t = r;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	});
	if (nj(t, i, r), r) {
		let e = r.parent;
		for (; e && e.parent;) n_(e.parent.vnode) && function(e, t, r, i) {
			let l = nj(t, e, i, !0);
			nR(() => {
				e0(i[t], l);
			}, r);
		}(i, t, r, e), e = e.parent;
	}
}
function nj(e, t, r = iq, i = !1) {
	if (r) {
		let l = r[e] || (r[e] = []), o = t.__weh || (t.__weh = (...i) => {
			tT();
			let l = iG(r), o = rN(t, r, e, i);
			return l(), tF(), o;
		});
		return i ? l.unshift(o) : l.push(o), o;
	}
}
var nS = (e) => (t, r = iq) => {
	iX && "sp" !== e || nj(e, (...e) => t(...e), r);
}, nP = nS("bm"), nA = nS("m"), nk = nS("bu"), nE = nS("u"), nM = nS("bum"), nR = nS("um"), n$ = nS("sp"), nC = nS("rtg"), nT = nS("rtc");
function nF(e, t = iq) {
	nj("ec", e, t);
}
var nN = Symbol.for("v-ndc"), nL = (e) => e ? iJ(e) ? i0(e) : nL(e.parent) : null, nD = eY(Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => nL(e.parent),
	$root: (e) => nL(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => nz(e),
	$forceUpdate: (e) => e.f || (e.f = () => {
		rK(e.update);
	}),
	$nextTick: (e) => e.n || (e.n = rq.bind(e.proxy)),
	$watch: (e) => im.bind(e)
}), nI = (e, t) => e !== eG && !e.__isScriptSetup && e2(e, t), nB = {
	get({ _: e }, t) {
		let r, i, l;
		if ("__v_skip" === t) return !0;
		let { ctx: o, setupState: a, data: s, props: u, accessCache: c, type: f, appContext: p } = e;
		if ("$" !== t[0]) {
			let i = c[t];
			if (void 0 !== i) switch (i) {
				case 1: return a[t];
				case 2: return s[t];
				case 4: return o[t];
				case 3: return u[t];
			}
			else {
				if (nI(a, t)) return c[t] = 1, a[t];
				if (s !== eG && e2(s, t)) return c[t] = 2, s[t];
				if ((r = e.propsOptions[0]) && e2(r, t)) return c[t] = 3, u[t];
				if (o !== eG && e2(o, t)) return c[t] = 4, o[t];
				nU && (c[t] = 0);
			}
		}
		let d = nD[t];
		return d ? ("$attrs" === t && tz(e.attrs, "get", ""), d(e)) : (i = f.__cssModules) && (i = i[t]) ? i : o !== eG && e2(o, t) ? (c[t] = 4, o[t]) : e2(l = p.config.globalProperties, t) ? l[t] : void 0;
	},
	set({ _: e }, t, r) {
		let { data: i, setupState: l, ctx: o } = e;
		return nI(l, t) ? (l[t] = r, !0) : i !== eG && e2(i, t) ? (i[t] = r, !0) : !e2(e.props, t) && !("$" === t[0] && t.slice(1) in e) && (o[t] = r, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: r, ctx: i, appContext: l, propsOptions: o, type: a } }, s) {
		let u, c;
		return !!(r[s] || e !== eG && "$" !== s[0] && e2(e, s) || nI(t, s) || (u = o[0]) && e2(u, s) || e2(i, s) || e2(nD, s) || e2(l.config.globalProperties, s) || (c = a.__cssModules) && c[s]);
	},
	defineProperty(e, t, r) {
		return null != r.get ? e._.accessCache[t] = 0 : e2(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
	}
};
function nV(e) {
	return e6(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var nU = !0;
function nW(e, t, r) {
	rN(e6(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, r);
}
function nz(e) {
	let t, r = e.type, { mixins: i, extends: l } = r, { mixins: o, optionsCache: a, config: { optionMergeStrategies: s } } = e.appContext, u = a.get(r);
	return u ? t = u : o.length || i || l ? (t = {}, o.length && o.forEach((e) => nq(t, e, s, !0)), nq(t, r, s)) : t = r, e5(r) && a.set(r, t), t;
}
function nq(e, t, r, i = !1) {
	let { mixins: l, extends: o } = t;
	for (let a in o && nq(e, o, r, !0), l && l.forEach((t) => nq(e, t, r, !0)), t) if (i && "expose" === a);
	else {
		let i = nK[a] || r && r[a];
		e[a] = i ? i(e[a], t[a]) : t[a];
	}
	return e;
}
var nK = {
	data: nG,
	props: nZ,
	emits: nZ,
	methods: nX,
	computed: nX,
	beforeCreate: nJ,
	created: nJ,
	beforeMount: nJ,
	mounted: nJ,
	beforeUpdate: nJ,
	updated: nJ,
	beforeDestroy: nJ,
	beforeUnmount: nJ,
	destroyed: nJ,
	unmounted: nJ,
	activated: nJ,
	deactivated: nJ,
	errorCaptured: nJ,
	serverPrefetch: nJ,
	components: nX,
	directives: nX,
	watch: function(e, t) {
		if (!e) return t;
		if (!t) return e;
		let r = eY(Object.create(null), e);
		for (let i in t) r[i] = nJ(e[i], t[i]);
		return r;
	},
	provide: nG,
	inject: function(e, t) {
		return nX(nH(e), nH(t));
	}
};
function nG(e, t) {
	return t ? e ? function() {
		return eY(e4(e) ? e.call(this, this) : e, e4(t) ? t.call(this, this) : t);
	} : t : e;
}
function nH(e) {
	if (e6(e)) {
		let t = {};
		for (let r = 0; r < e.length; r++) t[e[r]] = e[r];
		return t;
	}
	return e;
}
function nJ(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function nX(e, t) {
	return e ? eY(Object.create(null), e, t) : t;
}
function nZ(e, t) {
	return e ? e6(e) && e6(t) ? [...new Set([...e, ...t])] : eY(Object.create(null), nV(e), nV(null != t ? t : {})) : t;
}
function nQ() {
	return {
		app: null,
		config: {
			isNativeTag: eX,
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
var nY = 0, n0 = null;
function n1(e, t) {
	if (iq) {
		let r = iq.provides, i = iq.parent && iq.parent.provides;
		i === r && (r = iq.provides = Object.create(i)), r[e] = t;
	}
}
function n2(e, t, r = !1) {
	let i = iK();
	if (i || n0) {
		let l = n0 ? n0._context.provides : i ? null == i.parent || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
		if (l && e in l) return l[e];
		if (arguments.length > 1) return r && e4(t) ? t.call(i && i.proxy) : t;
	}
}
var n6 = {}, n4 = (e) => Object.getPrototypeOf(e) === n6;
function n8(e, t, r, i) {
	let l, [o, a] = e.propsOptions, s = !1;
	if (t) for (let u in t) {
		let c;
		if (tt(u)) continue;
		let f = t[u];
		o && e2(o, c = ti(u)) ? a && a.includes(c) ? (l || (l = {}))[c] = f : r[c] = f : i_(e.emitsOptions, u) || u in i && f === i[u] || (i[u] = f, s = !0);
	}
	if (a) {
		let t = rg(r), i = l || eG;
		for (let l = 0; l < a.length; l++) {
			let s = a[l];
			r[s] = n3(o, t, s, i[s], e, !e2(i, s));
		}
	}
	return s;
}
function n3(e, t, r, i, l, o) {
	let a = e[r];
	if (null != a) {
		let e = e2(a, "default");
		if (e && void 0 === i) {
			let e = a.default;
			if (a.type !== Function && !a.skipFactory && e4(e)) {
				let { propsDefaults: o } = l;
				if (r in o) i = o[r];
				else {
					let a = iG(l);
					i = o[r] = e.call(null, t), a();
				}
			} else i = e;
			l.ce && l.ce._setProp(r, i);
		}
		a[0] && (o && !e ? i = !1 : a[1] && ("" === i || i === to(r)) && (i = !0));
	}
	return i;
}
var n5 = /* @__PURE__ */ new WeakMap();
function n9(e) {
	return !("$" === e[0] || tt(e));
}
var n7 = (e) => "_" === e || "_ctx" === e || "$stable" === e, ie = (e) => e6(e) ? e.map(iI) : [iI(e)], it = (e, t, r) => {
	if (t._n) return t;
	let i = function(e, t = rZ, r) {
		if (!t || e._n) return e;
		let i = (...r) => {
			let l;
			i._d && i$(-1);
			let o = rY(t);
			try {
				l = e(...r);
			} finally {
				rY(o), i._d && i$(1);
			}
			return l;
		};
		return i._n = !0, i._c = !0, i._d = !0, i;
	}((...e) => ie(t(...e)), r);
	return i._c = !1, i;
}, ir = (e, t, r) => {
	let i = e._ctx;
	for (let r in e) {
		if (n7(r)) continue;
		let l = e[r];
		if (e4(l)) t[r] = it(r, l, i);
		else if (null != l) {
			let e = ie(l);
			t[r] = () => e;
		}
	}
}, ii = (e, t) => {
	let r = ie(t);
	e.slots.default = () => r;
}, il = (e, t, r) => {
	for (let i in t) (r || !n7(i)) && (e[i] = t[i]);
}, io = function(e, t) {
	if (t && t.pendingBranch) e6(e) ? t.effects.push(...e) : t.effects.push(e);
	else e6(e) ? rB.push(...e) : rV && -1 === e.id ? rV.splice(rU + 1, 0, e) : 1 & e.flags || (rB.push(e), e.flags |= 1), rG();
};
function ia(e) {
	return function(e, t) {
		var r;
		let i, l;
		td().__VUE__ = !0;
		let { insert: o, remove: a, patchProp: s, createElement: u, createText: c, createComment: f, setText: p, setElementText: d, parentNode: h, nextSibling: y, setScopeId: m = eJ, insertStaticContent: g } = e, b = (e, t, r, i = null, l = null, o = null, a, s = null, u = !!t.dynamicChildren) => {
			if (e === t) return;
			e && !iT(e, t) && (i = K(e), V(e, l, o, !0), e = null), -2 === t.patchFlag && (u = !1, t.dynamicChildren = null);
			let { type: c, ref: f, shapeFlag: p } = t;
			switch (c) {
				case iA:
					_(e, t, r, i);
					break;
				case ik:
					w(e, t, r, i);
					break;
				case iE:
					e ?? O(t, r, i, a);
					break;
				case iP:
					M(e, t, r, i, l, o, a, s, u);
					break;
				default: 1 & p ? x(e, t, r, i, l, o, a, s, u) : 6 & p ? R(e, t, r, i, l, o, a, s, u) : 64 & p ? c.process(e, t, r, i, l, o, a, s, u, J) : 128 & p && c.process(e, t, r, i, l, o, a, s, u, J);
			}
			null != f && l ? nv(f, e && e.ref, o, t || e, !t) : null == f && e && null != e.ref && nv(e.ref, null, o, e, !0);
		}, _ = (e, t, r, i) => {
			if (null == e) o(t.el = c(t.children), r, i);
			else {
				let r = t.el = e.el;
				t.children !== e.children && p(r, t.children);
			}
		}, w = (e, t, r, i) => {
			null == e ? o(t.el = f(t.children || ""), r, i) : t.el = e.el;
		}, O = (e, t, r, i) => {
			[e.el, e.anchor] = g(e.children, t, r, i, e.el, e.anchor);
		}, x = (e, t, r, i, l, o, a, s, u) => {
			"svg" === t.type ? a = "svg" : "math" === t.type && (a = "mathml"), null == e ? j(t, r, i, l, o, a, s, u) : A(e, t, l, o, a, s, u);
		}, j = (e, t, r, i, l, a, c, f) => {
			var p, h;
			let y, m, { props: g, shapeFlag: b, transition: _, dirs: w } = e;
			if (y = e.el = u(e.type, a, g && g.is, g), 8 & b ? d(y, e.children) : 16 & b && P(e.children, y, null, i, l, is(e, a), c, f), w && r0(e, null, i, "created"), S(y, e, e.scopeId, c, i), g) {
				for (let e in g) "value" === e || tt(e) || s(y, e, null, g[e], a, i);
				"value" in g && s(y, "value", null, g.value, a), (m = g.onVnodeBeforeMount) && iU(m, i, e);
			}
			w && r0(e, null, i, "beforeMount");
			let O = (p = l, h = _, (!p || p && !p.pendingBranch) && h && !h.persisted);
			O && _.beforeEnter(y), o(y, t, r), ((m = g && g.onVnodeMounted) || O || w) && io(() => {
				m && iU(m, i, e), O && _.enter(y), w && r0(e, null, i, "mounted");
			}, l);
		}, S = (e, t, r, i, l) => {
			if (r && m(e, r), i) for (let t = 0; t < i.length; t++) m(e, i[t]);
			if (l) {
				let r = l.subTree;
				if (t === r || iS(r.type) && (r.ssContent === t || r.ssFallback === t)) {
					let t = l.vnode;
					S(e, t, t.scopeId, t.slotScopeIds, l.parent);
				}
			}
		}, P = (e, t, r, i, l, o, a, s, u = 0) => {
			for (let c = u; c < e.length; c++) b(null, e[c] = s ? iB(e[c]) : iI(e[c]), t, r, i, l, o, a, s);
		}, A = (e, t, r, i, l, o, a) => {
			let u, c = t.el = e.el, { patchFlag: f, dynamicChildren: p, dirs: h } = t;
			f |= 16 & e.patchFlag;
			let y = e.props || eG, m = t.props || eG;
			if (r && iu(r, !1), (u = m.onVnodeBeforeUpdate) && iU(u, r, t, e), h && r0(t, e, r, "beforeUpdate"), r && iu(r, !0), (y.innerHTML && null == m.innerHTML || y.textContent && null == m.textContent) && d(c, ""), p ? k(e.dynamicChildren, p, c, r, i, is(t, l), o) : a || L(e, t, c, null, r, i, is(t, l), o, !1), f > 0) {
				if (16 & f) E(c, y, m, r, l);
				else if (2 & f && y.class !== m.class && s(c, "class", null, m.class, l), 4 & f && s(c, "style", y.style, m.style, l), 8 & f) {
					let e = t.dynamicProps;
					for (let t = 0; t < e.length; t++) {
						let i = e[t], o = y[i], a = m[i];
						(a !== o || "value" === i) && s(c, i, o, a, l, r);
					}
				}
				1 & f && e.children !== t.children && d(c, t.children);
			} else a || null != p || E(c, y, m, r, l);
			((u = m.onVnodeUpdated) || h) && io(() => {
				u && iU(u, r, t, e), h && r0(t, e, r, "updated");
			}, i);
		}, k = (e, t, r, i, l, o, a) => {
			for (let s = 0; s < t.length; s++) {
				let u = e[s], c = t[s];
				b(u, c, u.el && (u.type === iP || !iT(u, c) || 198 & u.shapeFlag) ? h(u.el) : r, null, i, l, o, a, !0);
			}
		}, E = (e, t, r, i, l) => {
			if (t !== r) {
				if (t !== eG) for (let o in t) tt(o) || o in r || s(e, o, t[o], null, l, i);
				for (let o in r) {
					if (tt(o)) continue;
					let a = r[o], u = t[o];
					a !== u && "value" !== o && s(e, o, u, a, l, i);
				}
				"value" in r && s(e, "value", t.value, r.value, l);
			}
		}, M = (e, t, r, i, l, a, s, u, f) => {
			let p = t.el = e ? e.el : c(""), d = t.anchor = e ? e.anchor : c(""), { patchFlag: h, dynamicChildren: y, slotScopeIds: m } = t;
			m && (u = u ? u.concat(m) : m), null == e ? (o(p, r, i), o(d, r, i), P(t.children || [], r, d, l, a, s, u, f)) : h > 0 && 64 & h && y && e.dynamicChildren ? (k(e.dynamicChildren, y, r, l, a, s, u), (null != t.key || l && t === l.subTree) && ic(e, t, !0)) : L(e, t, r, d, l, a, s, u, f);
		}, R = (e, t, r, i, l, o, a, s, u) => {
			t.slotScopeIds = s, null == e ? 512 & t.shapeFlag ? l.ctx.activate(t, r, i, a, u) : $(t, r, i, l, o, a, u) : C(e, t, u);
		}, $ = (e, t, r, i, l, o, a) => {
			var s, u, c;
			let f, p, d, h = (s = e, u = i, c = l, f = s.type, p = (u ? u.appContext : s.appContext) || iW, (d = {
				uid: iz++,
				vnode: s,
				type: f,
				parent: u,
				appContext: p,
				root: null,
				next: null,
				subTree: null,
				effect: null,
				update: null,
				job: null,
				scope: new tw(!0),
				render: null,
				proxy: null,
				exposed: null,
				exposeProxy: null,
				withProxy: null,
				provides: u ? u.provides : Object.create(p.provides),
				ids: u ? u.ids : [
					"",
					0,
					0
				],
				accessCache: null,
				renderCache: [],
				components: null,
				directives: null,
				propsOptions: function e(t, r, i = !1) {
					let l = i ? n5 : r.propsCache, o = l.get(t);
					if (o) return o;
					let a = t.props, s = {}, u = [], c = !1;
					if (!e4(t)) {
						let l = (t) => {
							c = !0;
							let [i, l] = e(t, r, !0);
							eY(s, i), l && u.push(...l);
						};
						!i && r.mixins.length && r.mixins.forEach(l), t.extends && l(t.extends), t.mixins && t.mixins.forEach(l);
					}
					if (!a && !c) return e5(t) && l.set(t, eH), eH;
					if (e6(a)) for (let e = 0; e < a.length; e++) {
						let t = ti(a[e]);
						n9(t) && (s[t] = eG);
					}
					else if (a) for (let e in a) {
						let t = ti(e);
						if (n9(t)) {
							let r = a[e], i = s[t] = e6(r) || e4(r) ? { type: r } : eY({}, r), l = i.type, o = !1, c = !0;
							if (e6(l)) for (let e = 0; e < l.length; ++e) {
								let t = l[e], r = e4(t) && t.name;
								if ("Boolean" === r) {
									o = !0;
									break;
								}
								"String" === r && (c = !1);
							}
							else o = e4(l) && "Boolean" === l.name;
							i[0] = o, i[1] = c, (o || e2(i, "default")) && u.push(t);
						}
					}
					let f = [s, u];
					return e5(t) && l.set(t, f), f;
				}(f, p),
				emitsOptions: function e(t, r, i = !1) {
					let l = i ? ib : r.emitsCache, o = l.get(t);
					if (void 0 !== o) return o;
					let a = t.emits, s = {}, u = !1;
					if (!e4(t)) {
						let l = (t) => {
							let i = e(t, r, !0);
							i && (u = !0, eY(s, i));
						};
						!i && r.mixins.length && r.mixins.forEach(l), t.extends && l(t.extends), t.mixins && t.mixins.forEach(l);
					}
					return a || u ? (e6(a) ? a.forEach((e) => s[e] = null) : eY(s, a), e5(t) && l.set(t, s), s) : (e5(t) && l.set(t, null), null);
				}(f, p),
				emit: null,
				emitted: null,
				propsDefaults: eG,
				inheritAttrs: f.inheritAttrs,
				ctx: eG,
				data: eG,
				props: eG,
				attrs: eG,
				slots: eG,
				refs: eG,
				setupState: eG,
				setupContext: null,
				suspense: c,
				suspenseId: c ? c.pendingId : 0,
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
			}).ctx = { _: d }, d.root = u ? u.root : d, d.emit = ig.bind(null, d), s.ce && s.ce(d), e.component = d);
			if (n_(e) && (h.ctx.renderer = J), function(e, t = !1, r = !1) {
				t && T(t);
				let { props: i, children: l } = e.vnode, o = iJ(e);
				(function(e, t, r, i = !1) {
					let l = {}, o = Object.create(n6);
					for (let r in e.propsDefaults = Object.create(null), n8(e, t, l, o), e.propsOptions[0]) r in l || (l[r] = void 0);
					r ? e.props = i ? l : rf(l) : e.type.props ? e.props = l : e.props = o, e.attrs = o;
				})(e, i, o, t);
				var a = r || t;
				let s = e.slots = Object.create(n6);
				if (32 & e.vnode.shapeFlag) {
					let e = l._;
					e ? (il(s, l, a), a && tc(s, "_", e, !0)) : ir(l, s);
				} else l && ii(e, l);
				o && function(e, t) {
					let r = e.type;
					e.accessCache = Object.create(null), e.proxy = new Proxy(e.ctx, nB);
					let { setup: i } = r;
					if (i) {
						var l;
						tT();
						let r = e.setupContext = i.length > 1 ? {
							attrs: new Proxy((l = e).attrs, iY),
							slots: l.slots,
							emit: l.emit,
							expose: (e) => {
								l.exposed = e || {};
							}
						} : null, o = iG(e), a = rF(i, e, 0, [e.props, r]), s = e9(a);
						if (tF(), o(), (s || e.sp) && !nb(e) && ny(e), s) {
							if (a.then(iH, iH), t) return a.then((r) => {
								iZ(e, r, t);
							}).catch((t) => {
								rL(t, e, 0);
							});
							e.asyncDep = a;
						} else iZ(e, a, t);
					} else iQ(e, t);
				}(e, t), t && T(!1);
			}(h, !1, a), h.asyncDep) {
				if (l && l.registerDep(h, F, a), !e.el) {
					let i = h.subTree = iL(ik);
					w(null, i, t, r), e.placeholder = i.el;
				}
			} else F(h, e, t, r, l, o, a);
		}, C = (e, t, r) => {
			let i = t.component = e.component;
			if (function(e, t, r) {
				let { props: i, children: l, component: o } = e, { props: a, children: s, patchFlag: u } = t, c = o.emitsOptions;
				if (t.dirs || t.transition) return !0;
				if (!r || !(u >= 0)) return (!!l || !!s) && (!s || !s.$stable) || i !== a && (i ? !a || ij(i, a, c) : !!a);
				if (1024 & u) return !0;
				if (16 & u) return i ? ij(i, a, c) : !!a;
				if (8 & u) {
					let e = t.dynamicProps;
					for (let t = 0; t < e.length; t++) {
						let r = e[t];
						if (a[r] !== i[r] && !i_(c, r)) return !0;
					}
				}
				return !1;
			}(e, t, r)) if (i.asyncDep && !i.asyncResolved) return void N(i, t, r);
			else i.next = t, i.update();
			else t.el = e.el, i.vnode = t;
		}, F = (e, t, r, i, o, a, s) => {
			let u = () => {
				if (e.isMounted) {
					let t, { next: r, bu: i, u: l, parent: c, vnode: f } = e;
					{
						let t = function e(t) {
							let r = t.subTree.component;
							if (r) if (r.asyncDep && !r.asyncResolved) return r;
							else return e(r);
						}(e);
						if (t) {
							r && (r.el = f.el, N(e, r, s)), t.asyncDep.then(() => {
								e.isUnmounted || u();
							});
							return;
						}
					}
					let p = r;
					iu(e, !1), r ? (r.el = f.el, N(e, r, s)) : r = f, i && tu(i), (t = r.props && r.props.onVnodeBeforeUpdate) && iU(t, c, r, f), iu(e, !0);
					let d = iw(e), y = e.subTree;
					e.subTree = d, b(y, d, h(y.el), K(y), e, o, a), r.el = d.el, null === p && function({ vnode: e, parent: t }, r) {
						for (; t;) {
							let i = t.subTree;
							if (i.suspense && i.suspense.activeBranch === e && (i.el = e.el), i === e) (e = t.vnode).el = r, t = t.parent;
							else break;
						}
					}(e, d.el), l && io(l, o), (t = r.props && r.props.onVnodeUpdated) && io(() => iU(t, c, r, f), o);
				} else {
					let s, { el: u, props: c } = t, { bm: f, m: p, parent: d, root: h, type: y } = e, m = nb(t);
					if (iu(e, !1), f && tu(f), !m && (s = c && c.onVnodeBeforeMount) && iU(s, d, t), iu(e, !0), u && l);
					else {
						h.ce && !1 !== h.ce._def.shadowRoot && h.ce._injectChildStyle(y);
						let l = e.subTree = iw(e);
						b(null, l, r, i, e, o, a), t.el = l.el;
					}
					if (p && io(p, o), !m && (s = c && c.onVnodeMounted)) {
						let e = t;
						io(() => iU(s, d, e), o);
					}
					(256 & t.shapeFlag || d && nb(d.vnode) && 256 & d.vnode.shapeFlag) && e.a && io(e.a, o), e.isMounted = !0, t = r = i = null;
				}
			};
			e.scope.on();
			let c = e.effect = new tx(u);
			e.scope.off();
			let f = e.update = c.run.bind(c), p = e.job = c.runIfDirty.bind(c);
			p.i = e, p.id = e.uid, c.scheduler = () => rK(p), iu(e, !0), f();
		}, N = (e, t, r) => {
			t.component = e;
			let i = e.vnode.props;
			e.vnode = t, e.next = null, function(e, t, r, i) {
				let { props: l, attrs: o, vnode: { patchFlag: a } } = e, s = rg(l), [u] = e.propsOptions, c = !1;
				if ((i || a > 0) && !(16 & a)) {
					if (8 & a) {
						let r = e.vnode.dynamicProps;
						for (let i = 0; i < r.length; i++) {
							let a = r[i];
							if (i_(e.emitsOptions, a)) continue;
							let f = t[a];
							if (u) if (e2(o, a)) f !== o[a] && (o[a] = f, c = !0);
							else {
								let t = ti(a);
								l[t] = n3(u, s, t, f, e, !1);
							}
							else f !== o[a] && (o[a] = f, c = !0);
						}
					}
				} else {
					let i;
					for (let a in n8(e, t, l, o) && (c = !0), s) t && (e2(t, a) || (i = to(a)) !== a && e2(t, i)) || (u ? r && (void 0 !== r[a] || void 0 !== r[i]) && (l[a] = n3(u, s, a, void 0, e, !0)) : delete l[a]);
					if (o !== s) for (let e in o) t && e2(t, e) || (delete o[e], c = !0);
				}
				c && tq(e.attrs, "set", "");
			}(e, t.props, i, r), ((e, t, r) => {
				let { vnode: i, slots: l } = e, o = !0, a = eG;
				if (32 & i.shapeFlag) {
					let e = t._;
					e ? r && 1 === e ? o = !1 : il(l, t, r) : (o = !t.$stable, ir(t, l)), a = t;
				} else t && (ii(e, t), a = { default: 1 });
				if (o) for (let e in l) n7(e) || null != a[e] || delete l[e];
			})(e, t.children, r), tT(), rH(e), tF();
		}, L = (e, t, r, i, l, o, a, s, u = !1) => {
			let c = e && e.children, f = e ? e.shapeFlag : 0, p = t.children, { patchFlag: h, shapeFlag: y } = t;
			if (h > 0) {
				if (128 & h) return void I(c, p, r, i, l, o, a, s, u);
				else if (256 & h) return void D(c, p, r, i, l, o, a, s, u);
			}
			8 & y ? (16 & f && q(c, l, o), p !== c && d(r, p)) : 16 & f ? 16 & y ? I(c, p, r, i, l, o, a, s, u) : q(c, l, o, !0) : (8 & f && d(r, ""), 16 & y && P(p, r, i, l, o, a, s, u));
		}, D = (e, t, r, i, l, o, a, s, u) => {
			let c;
			e = e || eH, t = t || eH;
			let f = e.length, p = t.length, d = Math.min(f, p);
			for (c = 0; c < d; c++) {
				let i = t[c] = u ? iB(t[c]) : iI(t[c]);
				b(e[c], i, r, null, l, o, a, s, u);
			}
			f > p ? q(e, l, o, !0, !1, d) : P(t, r, i, l, o, a, s, u, d);
		}, I = (e, t, r, i, l, o, a, s, u) => {
			let c = 0, f = t.length, p = e.length - 1, d = f - 1;
			for (; c <= p && c <= d;) {
				let i = e[c], f = t[c] = u ? iB(t[c]) : iI(t[c]);
				if (iT(i, f)) b(i, f, r, null, l, o, a, s, u);
				else break;
				c++;
			}
			for (; c <= p && c <= d;) {
				let i = e[p], c = t[d] = u ? iB(t[d]) : iI(t[d]);
				if (iT(i, c)) b(i, c, r, null, l, o, a, s, u);
				else break;
				p--, d--;
			}
			if (c > p) {
				if (c <= d) {
					let e = d + 1, p = e < f ? t[e].el : i;
					for (; c <= d;) b(null, t[c] = u ? iB(t[c]) : iI(t[c]), r, p, l, o, a, s, u), c++;
				}
			} else if (c > d) for (; c <= p;) V(e[c], l, o, !0), c++;
			else {
				let h, y = c, m = c, g = /* @__PURE__ */ new Map();
				for (c = m; c <= d; c++) {
					let e = t[c] = u ? iB(t[c]) : iI(t[c]);
					null != e.key && g.set(e.key, c);
				}
				let _ = 0, w = d - m + 1, O = !1, x = 0, j = Array(w);
				for (c = 0; c < w; c++) j[c] = 0;
				for (c = y; c <= p; c++) {
					let i, f = e[c];
					if (_ >= w) {
						V(f, l, o, !0);
						continue;
					}
					if (null != f.key) i = g.get(f.key);
					else for (h = m; h <= d; h++) if (0 === j[h - m] && iT(f, t[h])) {
						i = h;
						break;
					}
					void 0 === i ? V(f, l, o, !0) : (j[i - m] = c + 1, i >= x ? x = i : O = !0, b(f, t[i], r, null, l, o, a, s, u), _++);
				}
				let S = O ? function(e) {
					let t, r, i, l, o, a = e.slice(), s = [0], u = e.length;
					for (t = 0; t < u; t++) {
						let u = e[t];
						if (0 !== u) {
							if (e[r = s[s.length - 1]] < u) {
								a[t] = r, s.push(t);
								continue;
							}
							for (i = 0, l = s.length - 1; i < l;) e[s[o = i + l >> 1]] < u ? i = o + 1 : l = o;
							u < e[s[i]] && (i > 0 && (a[t] = s[i - 1]), s[i] = t);
						}
					}
					for (i = s.length, l = s[i - 1]; i-- > 0;) s[i] = l, l = a[l];
					return s;
				}(j) : eH;
				for (h = S.length - 1, c = w - 1; c >= 0; c--) {
					let e = m + c, p = t[e], d = t[e + 1], y = e + 1 < f ? d.el || d.placeholder : i;
					0 === j[c] ? b(null, p, r, y, l, o, a, s, u) : O && (h < 0 || c !== S[h] ? B(p, r, y, 2) : h--);
				}
			}
		}, B = (e, t, r, i, l = null) => {
			let { el: s, type: u, transition: c, children: f, shapeFlag: p } = e;
			if (6 & p) return void B(e.component.subTree, t, r, i);
			if (128 & p) return void e.suspense.move(t, r, i);
			if (64 & p) return void u.move(e, t, r, J);
			if (u === iP) {
				o(s, t, r);
				for (let e = 0; e < f.length; e++) B(f[e], t, r, i);
				o(e.anchor, t, r);
				return;
			}
			if (u === iE) return void (({ el: e, anchor: t }, r, i) => {
				let l;
				for (; e && e !== t;) l = y(e), o(e, r, i), e = l;
				o(t, r, i);
			})(e, t, r);
			if (2 !== i && 1 & p && c) if (0 === i) c.beforeEnter(s), o(s, t, r), io(() => c.enter(s), l);
			else {
				let { leave: i, delayLeave: l, afterLeave: u } = c, f = () => {
					e.ctx.isUnmounted ? a(s) : o(s, t, r);
				}, p = () => {
					s._isLeaving && s[nr](!0), i(s, () => {
						f(), u && u();
					});
				};
				l ? l(s, f, p) : p();
			}
			else o(s, t, r);
		}, V = (e, t, r, i = !1, l = !1) => {
			let o, { type: a, props: s, ref: u, children: c, dynamicChildren: f, shapeFlag: p, patchFlag: d, dirs: h, cacheIndex: y } = e;
			if (-2 === d && (l = !1), null != u && (tT(), nv(u, null, r, e, !0), tF()), null != y && (t.renderCache[y] = void 0), 256 & p) return void t.ctx.deactivate(e);
			let m = 1 & p && h, g = !nb(e);
			if (g && (o = s && s.onVnodeBeforeUnmount) && iU(o, t, e), 6 & p) z(e.component, r, i);
			else {
				if (128 & p) return void e.suspense.unmount(r, i);
				m && r0(e, null, t, "beforeUnmount"), 64 & p ? e.type.remove(e, t, r, J, i) : f && !f.hasOnce && (a !== iP || d > 0 && 64 & d) ? q(f, t, r, !1, !0) : (a === iP && 384 & d || !l && 16 & p) && q(c, t, r), i && U(e);
			}
			(g && (o = s && s.onVnodeUnmounted) || m) && io(() => {
				o && iU(o, t, e), m && r0(e, null, t, "unmounted");
			}, r);
		}, U = (e) => {
			let { type: t, el: r, anchor: i, transition: l } = e;
			if (t === iP) return void W(r, i);
			if (t === iE) return void (({ el: e, anchor: t }) => {
				let r;
				for (; e && e !== t;) r = y(e), a(e), e = r;
				a(t);
			})(e);
			let o = () => {
				a(r), l && !l.persisted && l.afterLeave && l.afterLeave();
			};
			if (1 & e.shapeFlag && l && !l.persisted) {
				let { leave: t, delayLeave: i } = l, a = () => t(r, o);
				i ? i(e.el, o, a) : a();
			} else o();
		}, W = (e, t) => {
			let r;
			for (; e !== t;) r = y(e), a(e), e = r;
			a(t);
		}, z = (e, t, r) => {
			let { bum: i, scope: l, job: o, subTree: a, um: s, m: u, a: c } = e;
			ip(u), ip(c), i && tu(i), l.stop(), o && (o.flags |= 8, V(a, e, t, r)), s && io(s, t), io(() => {
				e.isUnmounted = !0;
			}, t);
		}, q = (e, t, r, i = !1, l = !1, o = 0) => {
			for (let a = o; a < e.length; a++) V(e[a], t, r, i, l);
		}, K = (e) => {
			if (6 & e.shapeFlag) return K(e.component.subTree);
			if (128 & e.shapeFlag) return e.suspense.next();
			let t = y(e.anchor || e.el), r = t && t[r1];
			return r ? y(r) : t;
		}, G = !1, H = (e, t, r) => {
			null == e ? t._vnode && V(t._vnode, null, null, !0) : b(t._vnode || null, e, t, null, null, null, r), t._vnode = e, G || (G = !0, rH(), rJ(), G = !1);
		}, J = {
			p: b,
			um: V,
			m: B,
			r: U,
			mt: $,
			mc: P,
			pc: L,
			pbc: k,
			n: K,
			o: e
		};
		return {
			render: H,
			hydrate: i,
			createApp: (r = i, function(e, t = null) {
				e4(e) || (e = eY({}, e)), null == t || e5(t) || (t = null);
				let i = nQ(), l = /* @__PURE__ */ new WeakSet(), o = [], a = !1, s = i.app = {
					_uid: nY++,
					_component: e,
					_props: t,
					_container: null,
					_context: i,
					_instance: null,
					version: i6,
					get config() {
						return i.config;
					},
					set config(v) {},
					use: (e, ...t) => (l.has(e) || (e && e4(e.install) ? (l.add(e), e.install(s, ...t)) : e4(e) && (l.add(e), e(s, ...t))), s),
					mixin: (e) => (i.mixins.includes(e) || i.mixins.push(e), s),
					component: (e, t) => t ? (i.components[e] = t, s) : i.components[e],
					directive: (e, t) => t ? (i.directives[e] = t, s) : i.directives[e],
					mount(l, o, u) {
						if (!a) {
							let c = s._ceVNode || iL(e, t);
							return c.appContext = i, !0 === u ? u = "svg" : !1 === u && (u = void 0), o && r ? r(c, l) : H(c, l, u), a = !0, s._container = l, l.__vue_app__ = s, i0(c.component);
						}
					},
					onUnmount(e) {
						o.push(e);
					},
					unmount() {
						a && (rN(o, s._instance, 16), H(null, s._container), delete s._container.__vue_app__);
					},
					provide: (e, t) => (i.provides[e] = t, s),
					runWithContext(e) {
						let t = n0;
						n0 = s;
						try {
							return e();
						} finally {
							n0 = t;
						}
					}
				};
				return s;
			})
		};
	}(e);
}
function is({ type: e, props: t }, r) {
	return "svg" === r && "foreignObject" === e || "mathml" === r && "annotation-xml" === e && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function iu({ effect: e, job: t }, r) {
	r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function ic(e, t, r = !1) {
	let i = e.children, l = t.children;
	if (e6(i) && e6(l)) for (let e = 0; e < i.length; e++) {
		let t = i[e], o = l[e];
		1 & o.shapeFlag && !o.dynamicChildren && ((o.patchFlag <= 0 || 32 === o.patchFlag) && ((o = l[e] = iB(l[e])).el = t.el), r || -2 === o.patchFlag || ic(t, o)), o.type === iA && -1 !== o.patchFlag && (o.el = t.el), o.type !== ik || o.el || (o.el = t.el);
	}
}
function ip(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
var id = Symbol.for("v-scx");
function ih(e, t, r) {
	return iy(e, t, r);
}
function iy(e, t, r = eG) {
	let i, { immediate: l, deep: o, flush: a, once: s } = r, u = eY({}, r), c = t && l || !t && "post" !== a;
	if (iX) {
		if ("sync" === a) {
			let e = n2(id);
			i = e.__watcherHandles || (e.__watcherHandles = []);
		} else if (!c) {
			let e = () => {};
			return e.stop = eJ, e.resume = eJ, e.pause = eJ, e;
		}
	}
	let f = iq;
	u.call = (e, t, r) => rN(e, f, t, r);
	let p = !1;
	"post" === a ? u.scheduler = (e) => {
		io(e, f && f.suspense);
	} : "sync" !== a && (p = !0, u.scheduler = (e, t) => {
		t ? e() : rK(e);
	}), u.augmentJob = (e) => {
		t && (e.flags |= 4), p && (e.flags |= 2, f && (e.id = f.uid, e.i = f));
	};
	let d = function(e, t, r = eG) {
		let i, l, o, a, { immediate: s, deep: u, once: c, scheduler: f, augmentJob: p, call: d } = r, h = (e) => u ? e : rm(e) || !1 === u || 0 === u ? rT(e, 1) : rT(e), y = !1, m = !1;
		if (rw(e) ? (l = () => e.value, y = rm(e)) : rh(e) ? (l = () => h(e), y = !0) : e6(e) ? (m = !0, y = e.some((e) => rh(e) || rm(e)), l = () => e.map((e) => rw(e) ? e.value : rh(e) ? h(e) : e4(e) ? d ? d(e, 2) : e() : void 0)) : l = e4(e) ? t ? d ? () => d(e, 2) : e : () => {
			if (o) {
				tT();
				try {
					o();
				} finally {
					tF();
				}
			}
			let t = rC;
			rC = i;
			try {
				return d ? d(e, 3, [a]) : e(a);
			} finally {
				rC = t;
			}
		} : eJ, t && u) {
			let e = l, t = !0 === u ? Infinity : u;
			l = () => rT(e(), t);
		}
		let g = E, b = () => {
			i.stop(), g && g.active && e0(g.effects, i);
		};
		if (c && t) {
			let e = t;
			t = (...t) => {
				e(...t), b();
			};
		}
		let _ = m ? Array(e.length).fill(rR) : rR, w = (e) => {
			if (1 & i.flags && (i.dirty || e)) if (t) {
				let e = i.run();
				if (u || y || (m ? e.some((e, t) => !Object.is(e, _[t])) : !Object.is(e, _))) {
					o && o();
					let r = rC;
					rC = i;
					try {
						let r = [
							e,
							_ === rR ? void 0 : m && _[0] === rR ? [] : _,
							a
						];
						_ = e, d ? d(t, 3, r) : t(...r);
					} finally {
						rC = r;
					}
				}
			} else i.run();
		};
		return p && p(w), (i = new tx(l)).scheduler = f ? () => f(w, !1) : w, a = (e) => (function(e, t = !1, r = rC) {
			if (r) {
				let t = r$.get(r);
				t || r$.set(r, t = []), t.push(e);
			}
		})(e, !1, i), o = i.onStop = () => {
			let e = r$.get(i);
			if (e) {
				if (d) d(e, 4);
				else for (let t of e) t();
				r$.delete(i);
			}
		}, t ? s ? w(!0) : _ = i.run() : f ? f(w.bind(null, !0), !0) : i.run(), b.pause = i.pause.bind(i), b.resume = i.resume.bind(i), b.stop = b, b;
	}(e, t, u);
	return iX && (i ? i.push(d) : c && d()), d;
}
function im(e, t, r) {
	let i, l = this.proxy, o = e8(e) ? e.includes(".") ? iv(l, e) : () => l[e] : e.bind(l, l);
	e4(t) ? i = t : (i = t.handler, r = t);
	let a = iG(this), s = iy(o, i.bind(l), r);
	return a(), s;
}
function iv(e, t) {
	let r = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < r.length && t; e++) t = t[r[e]];
		return t;
	};
}
function ig(e, t, ...r) {
	let i, l;
	if (e.isUnmounted) return;
	let o = e.vnode.props || eG, a = r, s = t.startsWith("update:"), u = s && ("modelValue" === (l = t.slice(7)) || "model-value" === l ? o.modelModifiers : o[`${l}Modifiers`] || o[`${ti(l)}Modifiers`] || o[`${to(l)}Modifiers`]);
	u && (u.trim && (a = r.map((e) => e8(e) ? e.trim() : e)), u.number && (a = r.map(tf)));
	let c = o[i = ts(t)] || o[i = ts(ti(t))];
	!c && s && (c = o[i = ts(to(t))]), c && rN(c, e, 6, a);
	let f = o[i + "Once"];
	if (f) {
		if (e.emitted) {
			if (e.emitted[i]) return;
		} else e.emitted = {};
		e.emitted[i] = !0, rN(f, e, 6, a);
	}
}
var ib = /* @__PURE__ */ new WeakMap();
function i_(e, t) {
	return !!e && !!eZ(t) && (e2(e, (t = t.slice(2).replace(/Once$/, ""))[0].toLowerCase() + t.slice(1)) || e2(e, to(t)) || e2(e, t));
}
function iw(e) {
	let t, r, { type: i, vnode: l, proxy: o, withProxy: a, propsOptions: [s], slots: u, attrs: c, emit: f, render: p, renderCache: d, props: h, data: y, setupState: m, ctx: g, inheritAttrs: b } = e, _ = rY(e);
	try {
		if (4 & l.shapeFlag) {
			let e = a || o;
			t = iI(p.call(e, e, d, h, m, y, g)), r = c;
		} else t = iI(i.length > 1 ? i(h, {
			attrs: c,
			slots: u,
			emit: f
		}) : i(h, null)), r = i.props ? c : iO(c);
	} catch (r) {
		iM.length = 0, rL(r, e, 1), t = iL(ik);
	}
	let w = t;
	if (r && !1 !== b) {
		let e = Object.keys(r), { shapeFlag: t } = w;
		e.length && 7 & t && (s && e.some(eQ) && (r = ix(r, s)), w = iD(w, r, !1, !0));
	}
	return l.dirs && ((w = iD(w, null, !1, !0)).dirs = w.dirs ? w.dirs.concat(l.dirs) : l.dirs), l.transition && nd(w, l.transition), t = w, rY(_), t;
}
var iO = (e) => {
	let t;
	for (let r in e) ("class" === r || "style" === r || eZ(r)) && ((t || (t = {}))[r] = e[r]);
	return t;
}, ix = (e, t) => {
	let r = {};
	for (let i in e) eQ(i) && i.slice(9) in t || (r[i] = e[i]);
	return r;
};
function ij(e, t, r) {
	let i = Object.keys(t);
	if (i.length !== Object.keys(e).length) return !0;
	for (let l = 0; l < i.length; l++) {
		let o = i[l];
		if (t[o] !== e[o] && !i_(r, o)) return !0;
	}
	return !1;
}
var iS = (e) => e.__isSuspense, iP = Symbol.for("v-fgt"), iA = Symbol.for("v-txt"), ik = Symbol.for("v-cmt"), iE = Symbol.for("v-stc"), iM = [], iR = 1;
function i$(e, t = !1) {
	iR += e;
}
function iC(e) {
	return !!e && !0 === e.__v_isVNode;
}
function iT(e, t) {
	return e.type === t.type && e.key === t.key;
}
var iF = ({ key: e }) => null != e ? e : null, iN = ({ ref: e, ref_key: t, ref_for: r }) => ("number" == typeof e && (e = "" + e), null != e ? e8(e) || rw(e) || e4(e) ? {
	i: rZ,
	r: e,
	k: t,
	f: !!r
} : e : null), iL = function(e, t = null, r = null, i = 0, l = null, o = !1) {
	var a, s;
	if (e && e !== nN || (e = ik), iC(e)) {
		let i = iD(e, t, !0);
		return r && iV(i, r), i.patchFlag = -2, i;
	}
	if (e4(a = e) && "__vccOpts" in a && (e = e.__vccOpts), t) {
		let { class: e, style: r } = t = (s = t) ? rv(s) || n4(s) ? eY({}, s) : s : null;
		e && !e8(e) && (t.class = tg(e)), e5(r) && (rv(r) && !e6(r) && (r = eY({}, r)), t.style = th(r));
	}
	let u = e8(e) ? 1 : iS(e) ? 128 : e.__isTeleport ? 64 : e5(e) ? 4 : 2 * !!e4(e);
	return function(e, t = null, r = null, i = 0, l = null, o = +(e !== iP), a = !1, s = !1) {
		let u = {
			__v_isVNode: !0,
			__v_skip: !0,
			type: e,
			props: t,
			key: t && iF(t),
			ref: t && iN(t),
			scopeId: rQ,
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
			shapeFlag: o,
			patchFlag: i,
			dynamicProps: l,
			dynamicChildren: null,
			appContext: null,
			ctx: rZ
		};
		return s ? (iV(u, r), 128 & o && e.normalize(u)) : r && (u.shapeFlag |= e8(r) ? 8 : 16), u;
	}(e, t, r, i, l, u, o, !0);
};
function iD(e, t, r = !1, i = !1) {
	let { props: l, ref: o, patchFlag: a, children: s, transition: u } = e, c = t ? function(...e) {
		let t = {};
		for (let r = 0; r < e.length; r++) {
			let i = e[r];
			for (let e in i) if ("class" === e) t.class !== i.class && (t.class = tg([t.class, i.class]));
			else if ("style" === e) t.style = th([t.style, i.style]);
			else if (eZ(e)) {
				let r = t[e], l = i[e];
				l && r !== l && !(e6(r) && r.includes(l)) && (t[e] = r ? [].concat(r, l) : l);
			} else "" !== e && (t[e] = i[e]);
		}
		return t;
	}(l || {}, t) : l, f = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: c,
		key: c && iF(c),
		ref: t && t.ref ? r && o ? e6(o) ? o.concat(iN(t)) : [o, iN(t)] : iN(t) : o,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== iP ? -1 === a ? 16 : 16 | a : a,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: u,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && iD(e.ssContent),
		ssFallback: e.ssFallback && iD(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return u && i && nd(f, u.clone(f)), f;
}
function iI(e) {
	return null == e || "boolean" == typeof e ? iL(ik) : e6(e) ? iL(iP, null, e.slice()) : iC(e) ? iB(e) : iL(iA, null, String(e));
}
function iB(e) {
	return null === e.el && -1 !== e.patchFlag || e.memo ? e : iD(e);
}
function iV(e, t) {
	let r = 0, { shapeFlag: i } = e;
	if (null == t) t = null;
	else if (e6(t)) r = 16;
	else if ("object" == typeof t) if (65 & i) {
		let r = t.default;
		r && (r._c && (r._d = !1), iV(e, r()), r._c && (r._d = !0));
		return;
	} else {
		r = 32;
		let i = t._;
		i || n4(t) ? 3 === i && rZ && (1 === rZ.slots._ ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024)) : t._ctx = rZ;
	}
	else e4(t) ? (t = {
		default: t,
		_ctx: rZ
	}, r = 32) : (t = String(t), 64 & i ? (r = 16, t = [function(e = " ", t = 0) {
		return iL(iA, null, e, t);
	}(t)]) : r = 8);
	e.children = t, e.shapeFlag |= r;
}
function iU(e, t, r, i = null) {
	rN(e, t, 7, [r, i]);
}
var iW = nQ(), iz = 0, iq = null, iK = () => iq || rZ;
{
	let e = td(), t = (t, r) => {
		let i;
		return (i = e[t]) || (i = e[t] = []), i.push(r), (e) => {
			i.length > 1 ? i.forEach((t) => t(e)) : i[0](e);
		};
	};
	C = t("__VUE_INSTANCE_SETTERS__", (e) => iq = e), T = t("__VUE_SSR_SETTERS__", (e) => iX = e);
}
var iG = (e) => {
	let t = iq;
	return C(e), e.scope.on(), () => {
		e.scope.off(), C(t);
	};
}, iH = () => {
	iq && iq.scope.off(), C(null);
};
function iJ(e) {
	return 4 & e.vnode.shapeFlag;
}
var iX = !1;
function iZ(e, t, r) {
	e4(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : e5(t) && (e.setupState = rk(t)), iQ(e, r);
}
function iQ(e, t, r) {
	let i = e.type;
	if (!e.render) {
		if (!t && F && !i.render) {
			let t = i.template || nz(e).template;
			if (t) {
				let { isCustomElement: r, compilerOptions: l } = e.appContext.config, { delimiters: o, compilerOptions: a } = i;
				i.render = F(t, eY(eY({
					isCustomElement: r,
					delimiters: o
				}, l), a));
			}
		}
		e.render = i.render || eJ, N && N(e);
	}
	{
		let t = iG(e);
		tT();
		try {
			(function(e) {
				let t = nz(e), r = e.proxy, i = e.ctx;
				nU = !1, t.beforeCreate && nW(t.beforeCreate, e, "bc");
				let { data: l, computed: o, methods: a, watch: s, provide: u, inject: c, created: f, beforeMount: p, mounted: d, beforeUpdate: h, updated: y, activated: m, deactivated: g, beforeDestroy: b, beforeUnmount: _, destroyed: w, unmounted: O, render: x, renderTracked: j, renderTriggered: S, errorCaptured: P, serverPrefetch: A, expose: k, inheritAttrs: E, components: M, directives: R, filters: $ } = t;
				if (c && function(e, t, r = eJ) {
					for (let r in e6(e) && (e = nH(e)), e) {
						let i, l = e[r];
						rw(i = e5(l) ? "default" in l ? n2(l.from || r, l.default, !0) : n2(l.from || r) : n2(l)) ? Object.defineProperty(t, r, {
							enumerable: !0,
							configurable: !0,
							get: () => i.value,
							set: (e) => i.value = e
						}) : t[r] = i;
					}
				}(c, i, null), a) for (let e in a) {
					let t = a[e];
					e4(t) && (i[e] = t.bind(r));
				}
				if (l) {
					let t = l.call(r, r);
					e5(t) && (e.data = rc(t));
				}
				if (nU = !0, o) for (let e in o) {
					let t = o[e], l = i1({
						get: e4(t) ? t.bind(r, r) : e4(t.get) ? t.get.bind(r, r) : eJ,
						set: !e4(t) && e4(t.set) ? t.set.bind(r) : eJ
					});
					Object.defineProperty(i, e, {
						enumerable: !0,
						configurable: !0,
						get: () => l.value,
						set: (e) => l.value = e
					});
				}
				if (s) for (let e in s) (function e(t, r, i, l) {
					let o = l.includes(".") ? iv(i, l) : () => i[l];
					if (e8(t)) {
						let e = r[t];
						e4(e) && ih(o, e);
					} else if (e4(t)) ih(o, t.bind(i));
					else if (e5(t)) if (e6(t)) t.forEach((t) => e(t, r, i, l));
					else {
						let e = e4(t.handler) ? t.handler.bind(i) : r[t.handler];
						e4(e) && ih(o, e, t);
					}
				})(s[e], i, r, e);
				if (u) {
					let e = e4(u) ? u.call(r) : u;
					Reflect.ownKeys(e).forEach((t) => {
						n1(t, e[t]);
					});
				}
				function C(e, t) {
					e6(t) ? t.forEach((t) => e(t.bind(r))) : t && e(t.bind(r));
				}
				if (f && nW(f, e, "c"), C(nP, p), C(nA, d), C(nk, h), C(nE, y), C(nw, m), C(nO, g), C(nF, P), C(nT, j), C(nC, S), C(nM, _), C(nR, O), C(n$, A), e6(k)) if (k.length) {
					let t = e.exposed || (e.exposed = {});
					k.forEach((e) => {
						Object.defineProperty(t, e, {
							get: () => r[e],
							set: (t) => r[e] = t,
							enumerable: !0
						});
					});
				} else e.exposed || (e.exposed = {});
				x && e.render === eJ && (e.render = x), null != E && (e.inheritAttrs = E), M && (e.components = M), R && (e.directives = R), A && ny(e);
			})(e);
		} finally {
			tF(), t();
		}
	}
}
var iY = { get: (e, t) => (tz(e, "get", ""), e[t]) };
function i0(e) {
	var t;
	return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(rk((!e2(t = e.exposed, "__v_skip") && Object.isExtensible(t) && tc(t, "__v_skip", !0), t)), {
		get: (t, r) => r in t ? t[r] : r in nD ? nD[r](e) : void 0,
		has: (e, t) => t in e || t in nD
	})) : e.proxy;
}
var i1 = (e, t) => (function(e, t, r = !1) {
	let i, l;
	return e4(e) ? i = e : (i = e.get, l = e.set), new rM(i, l, r);
})(e, 0, iX);
function i2(e, t, r) {
	try {
		i$(-1);
		let i = arguments.length;
		if (2 !== i) return i > 3 ? r = Array.prototype.slice.call(arguments, 2) : 3 === i && iC(r) && (r = [r]), iL(e, t, r);
		if (!e5(t) || e6(t)) return iL(e, null, t);
		if (iC(t)) return iL(e, null, [t]);
		return iL(e, t);
	} finally {
		i$(1);
	}
}
var i6 = "3.5.22", i4 = Symbol.for("immer-nothing"), i8 = Symbol.for("immer-draftable"), i3 = Symbol.for("immer-state");
function i5(e) {
	throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`);
}
var i9 = Object.getPrototypeOf;
function i7(e) {
	return !!e && !!e[i3];
}
function le(e) {
	return !!e && (lr(e) || Array.isArray(e) || !!e[i8] || !!e.constructor?.[i8] || la(e) || ls(e));
}
var lt = Object.prototype.constructor.toString();
function lr(e) {
	if (!e || "object" != typeof e) return !1;
	let t = i9(e);
	if (null === t) return !0;
	let r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
	return r === Object || "function" == typeof r && Function.toString.call(r) === lt;
}
function ln(e, t) {
	0 === li(e) ? Reflect.ownKeys(e).forEach((r) => {
		t(r, e[r], e);
	}) : e.forEach((r, i) => t(i, r, e));
}
function li(e) {
	let t = e[i3];
	return t ? t.type_ : Array.isArray(e) ? 1 : la(e) ? 2 : 3 * !!ls(e);
}
function ll(e, t) {
	return 2 === li(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function lo(e, t, r) {
	let i = li(e);
	2 === i ? e.set(t, r) : 3 === i ? e.add(r) : e[t] = r;
}
function la(e) {
	return e instanceof Map;
}
function ls(e) {
	return e instanceof Set;
}
function lu(e) {
	return e.copy_ || e.base_;
}
function lc(e, t) {
	if (la(e)) return new Map(e);
	if (ls(e)) return new Set(e);
	if (Array.isArray(e)) return Array.prototype.slice.call(e);
	let r = lr(e);
	if (!0 !== t && ("class_only" !== t || r)) {
		let t = i9(e);
		return null !== t && r ? { ...e } : Object.assign(Object.create(t), e);
	}
	{
		let t = Object.getOwnPropertyDescriptors(e);
		delete t[i3];
		let r = Reflect.ownKeys(t);
		for (let i = 0; i < r.length; i++) {
			let l = r[i], o = t[l];
			!1 === o.writable && (o.writable = !0, o.configurable = !0), (o.get || o.set) && (t[l] = {
				configurable: !0,
				writable: !0,
				enumerable: o.enumerable,
				value: e[l]
			});
		}
		return Object.create(i9(e), t);
	}
}
function lf(e, t = !1) {
	return ld(e) || i7(e) || !le(e) || (li(e) > 1 && Object.defineProperties(e, {
		set: { value: lp },
		add: { value: lp },
		clear: { value: lp },
		delete: { value: lp }
	}), Object.freeze(e), t && Object.values(e).forEach((e) => lf(e, !0))), e;
}
function lp() {
	i5(2);
}
function ld(e) {
	return Object.isFrozen(e);
}
var lh = {};
function ly(e) {
	let t = lh[e];
	return t || i5(0, e), t;
}
function lm(e, t) {
	t && (ly("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function lv(e) {
	lg(e), e.drafts_.forEach(l_), e.drafts_ = null;
}
function lg(e) {
	e === L && (L = e.parent_);
}
function lb(e) {
	return L = {
		drafts_: [],
		parent_: L,
		immer_: e,
		canAutoFreeze_: !0,
		unfinalizedDrafts_: 0
	};
}
function l_(e) {
	let t = e[i3];
	0 === t.type_ || 1 === t.type_ ? t.revoke_() : t.revoked_ = !0;
}
function lw(e, t) {
	t.unfinalizedDrafts_ = t.drafts_.length;
	let r = t.drafts_[0];
	return void 0 !== e && e !== r ? (r[i3].modified_ && (lv(t), i5(4)), le(e) && (e = lO(t, e), t.parent_ || lj(t, e)), t.patches_ && ly("Patches").generateReplacementPatches_(r[i3].base_, e, t.patches_, t.inversePatches_)) : e = lO(t, r, []), lv(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== i4 ? e : void 0;
}
function lO(e, t, r) {
	if (ld(t)) return t;
	let i = t[i3];
	if (!i) return ln(t, (l, o) => lx(e, i, t, l, o, r)), t;
	if (i.scope_ !== e) return t;
	if (!i.modified_) return lj(e, i.base_, !0), i.base_;
	if (!i.finalized_) {
		i.finalized_ = !0, i.scope_.unfinalizedDrafts_--;
		let t = i.copy_, l = t, o = !1;
		3 === i.type_ && (l = new Set(t), t.clear(), o = !0), ln(l, (l, a) => lx(e, i, t, l, a, r, o)), lj(e, t, !1), r && e.patches_ && ly("Patches").generatePatches_(i, r, e.patches_, e.inversePatches_);
	}
	return i.copy_;
}
function lx(e, t, r, i, l, o, a) {
	if (i7(l)) {
		let a = lO(e, l, o && t && 3 !== t.type_ && !ll(t.assigned_, i) ? o.concat(i) : void 0);
		if (lo(r, i, a), !i7(a)) return;
		e.canAutoFreeze_ = !1;
	} else a && r.add(l);
	if (le(l) && !ld(l)) {
		if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
		lO(e, l), (!t || !t.scope_.parent_) && "symbol" != typeof i && (la(r) ? r.has(i) : Object.prototype.propertyIsEnumerable.call(r, i)) && lj(e, l);
	}
}
function lj(e, t, r = !1) {
	!e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && lf(t, r);
}
var lS = {
	get(e, t) {
		if (t === i3) return e;
		let r = lu(e);
		if (!ll(r, t)) {
			var i;
			let l;
			return i = e, (l = lk(r, t)) ? "value" in l ? l.value : l.get?.call(i.draft_) : void 0;
		}
		let l = r[t];
		return e.finalized_ || !le(l) ? l : l === lA(e.base_, t) ? (lM(e), e.copy_[t] = lR(l, e)) : l;
	},
	has: (e, t) => t in lu(e),
	ownKeys: (e) => Reflect.ownKeys(lu(e)),
	set(e, t, r) {
		let i = lk(lu(e), t);
		if (i?.set) return i.set.call(e.draft_, r), !0;
		if (!e.modified_) {
			let i = lA(lu(e), t), l = i?.[i3];
			if (l && l.base_ === r) return e.copy_[t] = r, e.assigned_[t] = !1, !0;
			if ((r === i ? 0 !== r || 1 / r == 1 / i : r != r && i != i) && (void 0 !== r || ll(e.base_, t))) return !0;
			lM(e), lE(e);
		}
		return !!(e.copy_[t] === r && (void 0 !== r || t in e.copy_) || Number.isNaN(r) && Number.isNaN(e.copy_[t])) || (e.copy_[t] = r, e.assigned_[t] = !0, !0);
	},
	deleteProperty: (e, t) => (void 0 !== lA(e.base_, t) || t in e.base_ ? (e.assigned_[t] = !1, lM(e), lE(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0),
	getOwnPropertyDescriptor(e, t) {
		let r = lu(e), i = Reflect.getOwnPropertyDescriptor(r, t);
		return i ? {
			writable: !0,
			configurable: 1 !== e.type_ || "length" !== t,
			enumerable: i.enumerable,
			value: r[t]
		} : i;
	},
	defineProperty() {
		i5(11);
	},
	getPrototypeOf: (e) => i9(e.base_),
	setPrototypeOf() {
		i5(12);
	}
}, lP = {};
function lA(e, t) {
	let r = e[i3];
	return (r ? lu(r) : e)[t];
}
function lk(e, t) {
	if (!(t in e)) return;
	let r = i9(e);
	for (; r;) {
		let e = Object.getOwnPropertyDescriptor(r, t);
		if (e) return e;
		r = i9(r);
	}
}
function lE(e) {
	!e.modified_ && (e.modified_ = !0, e.parent_ && lE(e.parent_));
}
function lM(e) {
	e.copy_ || (e.copy_ = lc(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
function lR(e, t) {
	let r = la(e) ? ly("MapSet").proxyMap_(e, t) : ls(e) ? ly("MapSet").proxySet_(e, t) : function(e, t) {
		let r = Array.isArray(e), i = {
			type_: +!!r,
			scope_: t ? t.scope_ : L,
			modified_: !1,
			finalized_: !1,
			assigned_: {},
			parent_: t,
			base_: e,
			draft_: null,
			copy_: null,
			revoke_: null,
			isManual_: !1
		}, l = i, o = lS;
		r && (l = [i], o = lP);
		let { revoke: a, proxy: s } = Proxy.revocable(l, o);
		return i.draft_ = s, i.revoke_ = a, s;
	}(e, t);
	return (t ? t.scope_ : L).drafts_.push(r), r;
}
ln(lS, (e, t) => {
	lP[e] = function() {
		return arguments[0] = arguments[0][0], t.apply(this, arguments);
	};
}), lP.deleteProperty = function(e, t) {
	return lP.set.call(this, e, t, void 0);
}, lP.set = function(e, t, r) {
	return lS.set.call(this, e[0], t, r, e[0]);
};
var l$ = new class {
	constructor(e) {
		this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (e, t, r) => {
			let i;
			if ("function" == typeof e && "function" != typeof t) {
				let r = t;
				t = e;
				let i = this;
				return function(e = r, ...l) {
					return i.produce(e, (e) => t.call(this, e, ...l));
				};
			}
			if ("function" != typeof t && i5(6), void 0 !== r && "function" != typeof r && i5(7), le(e)) {
				let l = lb(this), o = lR(e, void 0), a = !0;
				try {
					i = t(o), a = !1;
				} finally {
					a ? lv(l) : lg(l);
				}
				return lm(l, r), lw(i, l);
			}
			if (e && "object" == typeof e) i5(1, e);
			else {
				if (void 0 === (i = t(e)) && (i = e), i === i4 && (i = void 0), this.autoFreeze_ && lf(i, !0), r) {
					let t = [], l = [];
					ly("Patches").generateReplacementPatches_(e, i, t, l), r(t, l);
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
		le(e) || i5(8), i7(e) && (i7(t = e) || i5(10, t), e = function e(t) {
			let r;
			if (!le(t) || ld(t)) return t;
			let i = t[i3];
			if (i) {
				if (!i.modified_) return i.base_;
				i.finalized_ = !0, r = lc(t, i.scope_.immer_.useStrictShallowCopy_);
			} else r = lc(t, !0);
			return ln(r, (t, i) => {
				lo(r, t, e(i));
			}), i && (i.finalized_ = !1), r;
		}(t));
		let r = lb(this), i = lR(e, void 0);
		return i[i3].isManual_ = !0, lg(r), i;
	}
	finishDraft(e, t) {
		let r = e && e[i3];
		r && r.isManual_ || i5(9);
		let { scope_: i } = r;
		return lm(i, t), lw(void 0, i);
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
		let i = ly("Patches").applyPatches_;
		return i7(e) ? i(e, t) : this.produce(e, (e) => i(e, t));
	}
}().produce;
U = D || (D = {}), function(e) {
	var t = "object" == typeof globalThis ? globalThis : "object" == typeof global ? global : "object" == typeof self ? self : "object" == typeof this ? this : function() {
		throw ReferenceError("globalThis could not be found. Please polyfill globalThis before loading this module.");
	}(), r = i(U);
	function i(e, t) {
		return function(r, i) {
			Object.defineProperty(e, r, {
				configurable: !0,
				writable: !0,
				value: i
			}), t && t(r, i);
		};
	}
	void 0 !== t.Reflect && (r = i(t.Reflect, r)), e(r, t), void 0 === t.Reflect && (t.Reflect = U);
}(function(e, t) {
	var r, i = "function" == typeof Symbol, l = i && void 0 !== Symbol.toPrimitive ? Symbol.toPrimitive : $("Symbol.toPrimitive not found."), o = i && void 0 !== Symbol.iterator ? Symbol.iterator : $("Symbol.iterator not found."), a = Object.getPrototypeOf(Function), s = "function" == typeof Map && "function" == typeof Map.prototype.entries ? Map : $("A valid Map constructor could not be found."), u = "function" == typeof Set && "function" == typeof Set.prototype.entries ? Set : $("A valid Set constructor could not be found."), c = "function" == typeof WeakMap ? WeakMap : $("A valid WeakMap constructor could not be found."), f = i ? Symbol.for("@reflect-metadata:registry") : void 0, p = (!_(f) && O(t.Reflect) && Object.isExtensible(t.Reflect) && (r = t.Reflect[f]), _(r) && (r = function() {
		_(f) || void 0 === t.Reflect || f in t.Reflect || "function" != typeof t.Reflect.defineMetadata || (r = (e = t.Reflect).defineMetadata, i = e.hasOwnMetadata, l = e.getOwnMetadata, o = e.getOwnMetadataKeys, a = e.deleteMetadata, p = new c(), d = {
			isProviderFor: function(e, t) {
				var r = p.get(e);
				return !!(!_(r) && r.has(t)) || !!o(e, t).length && (_(r) && (r = new u(), p.set(e, r)), r.add(t), !0);
			},
			OrdinaryDefineOwnMetadata: r,
			OrdinaryHasOwnMetadata: i,
			OrdinaryGetOwnMetadata: l,
			OrdinaryOwnMetadataKeys: o,
			OrdinaryDeleteMetadata: a
		});
		var e, r, i, l, o, a, p, d, h, y, m, g = new c(), b = {
			registerProvider: function(e) {
				if (!Object.isExtensible(b)) throw Error("Cannot add provider to a frozen registry.");
				switch (!0) {
					case d === e: break;
					case _(h):
						h = e;
						break;
					case h === e: break;
					case _(y):
						y = e;
						break;
					case y === e: break;
					default: void 0 === m && (m = new u()), m.add(e);
				}
			},
			getProvider: w,
			setProvider: function(e, t, r) {
				if (!function(e) {
					if (_(e)) throw TypeError();
					return h === e || y === e || !_(m) && m.has(e);
				}(r)) throw Error("Metadata provider not registered.");
				var i = w(e, t);
				if (i !== r) {
					if (!_(i)) return !1;
					var l = g.get(e);
					_(l) && (l = new s(), g.set(e, l)), l.set(t, r);
				}
				return !0;
			}
		};
		return b;
		function w(e, t) {
			var r, i = g.get(e);
			return _(i) || (r = i.get(t)), _(r) && (r = function(e, t) {
				if (!_(h)) {
					if (h.isProviderFor(e, t)) return h;
					if (!_(y)) {
						if (y.isProviderFor(e, t)) return h;
						if (!_(m)) for (var r = k(m);;) {
							var i = E(r);
							if (!i) return;
							var l = i.value;
							if (l.isProviderFor(e, t)) return M(r), l;
						}
					}
				}
				if (!_(d) && d.isProviderFor(e, t)) return d;
			}(e, t), _(r) || (_(i) && (i = new s(), g.set(e, i)), i.set(t, r))), r;
		}
	}()), !_(f) && O(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, f, {
		enumerable: !1,
		configurable: !1,
		writable: !1,
		value: r
	}), r), d = function(e) {
		var t = new c(), r = {
			isProviderFor: function(e, r) {
				var i = t.get(e);
				return !_(i) && i.has(r);
			},
			OrdinaryDefineOwnMetadata: function(e, t, r, l) {
				i(r, l, !0).set(e, t);
			},
			OrdinaryHasOwnMetadata: function(e, t, r) {
				var l = i(t, r, !1);
				return !_(l) && !!l.has(e);
			},
			OrdinaryGetOwnMetadata: function(e, t, r) {
				var l = i(t, r, !1);
				if (!_(l)) return l.get(e);
			},
			OrdinaryOwnMetadataKeys: function(e, t) {
				var r = [], l = i(e, t, !1);
				if (_(l)) return r;
				for (var o = k(l.keys()), a = 0;;) {
					var s = E(o);
					if (!s) return r.length = a, r;
					var u = s.value;
					try {
						r[a] = u;
					} catch (e) {
						try {
							M(o);
						} finally {
							throw e;
						}
					}
					a++;
				}
			},
			OrdinaryDeleteMetadata: function(e, r, l) {
				var o = i(r, l, !1);
				if (_(o) || !o.delete(e)) return !1;
				if (0 === o.size) {
					var a = t.get(r);
					_(a) || (a.delete(l), 0 === a.size && t.delete(a));
				}
				return !0;
			}
		};
		return p.registerProvider(r), r;
		function i(i, l, o) {
			var a = t.get(i), u = !1;
			if (_(a)) {
				if (!o) return;
				a = new s(), t.set(i, a), u = !0;
			}
			var c = a.get(l);
			if (_(c)) {
				if (!o) return;
				if (c = new s(), a.set(l, c), !e.setProvider(i, l, r)) throw a.delete(l), u && t.delete(i), Error("Wrong provider for target.");
			}
			return c;
		}
	}(p);
	function h(e, t, r) {
		var i = C(t, r, !1);
		return !_(i) && !!i.OrdinaryHasOwnMetadata(e, t, r);
	}
	function y(e, t, r) {
		var i = C(t, r, !1);
		if (!_(i)) return i.OrdinaryGetOwnMetadata(e, t, r);
	}
	function m(e, t, r, i) {
		C(r, i, !0).OrdinaryDefineOwnMetadata(e, t, r, i);
	}
	function g(e, t) {
		var r = C(e, t, !1);
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
	function _(e) {
		return void 0 === e;
	}
	function w(e) {
		return null === e;
	}
	function O(e) {
		return "object" == typeof e ? null !== e : "function" == typeof e;
	}
	e("decorate", function(e, t, r, i) {
		if (_(r)) {
			if (!j(e) || !P(t)) throw TypeError();
			for (var l = e, o = t, a = l.length - 1; a >= 0; --a) {
				var s = (0, l[a])(o);
				if (!_(s) && !w(s)) {
					if (!P(s)) throw TypeError();
					o = s;
				}
			}
			return o;
		}
		if (!j(e) || !O(t) || !O(i) && !_(i) && !w(i)) throw TypeError();
		return w(i) && (i = void 0), function(e, t, r, i) {
			for (var l = e.length - 1; l >= 0; --l) {
				var o = (0, e[l])(t, r, i);
				if (!_(o) && !w(o)) {
					if (!O(o)) throw TypeError();
					i = o;
				}
			}
			return i;
		}(e, t, r = x(r), i);
	}), e("metadata", function(e, t) {
		return function(r, i) {
			if (!O(r) || !_(i) && !function(e) {
				switch (b(e)) {
					case 3:
					case 4: return !0;
					default: return !1;
				}
			}(i)) throw TypeError();
			m(e, t, r, i);
		};
	}), e("defineMetadata", function(e, t, r, i) {
		if (!O(r)) throw TypeError();
		return _(i) || (i = x(i)), m(e, t, r, i);
	}), e("hasMetadata", function(e, t, r) {
		if (!O(t)) throw TypeError();
		return _(r) || (r = x(r)), function e(t, r, i) {
			if (h(t, r, i)) return !0;
			var l = R(r);
			return !w(l) && e(t, l, i);
		}(e, t, r);
	}), e("hasOwnMetadata", function(e, t, r) {
		if (!O(t)) throw TypeError();
		return _(r) || (r = x(r)), h(e, t, r);
	}), e("getMetadata", function(e, t, r) {
		if (!O(t)) throw TypeError();
		return _(r) || (r = x(r)), function e(t, r, i) {
			if (h(t, r, i)) return y(t, r, i);
			var l = R(r);
			if (!w(l)) return e(t, l, i);
		}(e, t, r);
	}), e("getOwnMetadata", function(e, t, r) {
		if (!O(t)) throw TypeError();
		return _(r) || (r = x(r)), y(e, t, r);
	}), e("getMetadataKeys", function(e, t) {
		if (!O(e)) throw TypeError();
		return _(t) || (t = x(t)), function e(t, r) {
			var i = g(t, r), l = R(t);
			if (null === l) return i;
			var o = e(l, r);
			if (o.length <= 0) return i;
			if (i.length <= 0) return o;
			for (var a = new u(), s = [], c = 0; c < i.length; c++) {
				var f = i[c], p = a.has(f);
				p || (a.add(f), s.push(f));
			}
			for (var d = 0; d < o.length; d++) {
				var f = o[d], p = a.has(f);
				p || (a.add(f), s.push(f));
			}
			return s;
		}(e, t);
	}), e("getOwnMetadataKeys", function(e, t) {
		if (!O(e)) throw TypeError();
		return _(t) || (t = x(t)), g(e, t);
	}), e("deleteMetadata", function(e, t, r) {
		if (!O(t)) throw TypeError();
		_(r) || (r = x(r));
		var i = C(t, r, !1);
		return !_(i) && i.OrdinaryDeleteMetadata(e, t, r);
	});
	function x(e) {
		var t = function(e, t) {
			switch (b(e)) {
				case 0:
				case 1:
				case 2:
				case 3:
				case 4:
				case 5: return e;
			}
			var r = "string", i = A(e, l);
			if (void 0 !== i) {
				var o = i.call(e, r);
				if (O(o)) throw TypeError();
				return o;
			}
			return function(e, t) {
				if ("string" === t) {
					var r = e.toString;
					if (S(r)) {
						var i = r.call(e);
						if (!O(i)) return i;
					}
					var l = e.valueOf;
					if (S(l)) {
						var i = l.call(e);
						if (!O(i)) return i;
					}
				} else {
					var l = e.valueOf;
					if (S(l)) {
						var i = l.call(e);
						if (!O(i)) return i;
					}
					var o = e.toString;
					if (S(o)) {
						var i = o.call(e);
						if (!O(i)) return i;
					}
				}
				throw TypeError();
			}(e, r);
		}(e, 0);
		return "symbol" == typeof t ? t : "" + t;
	}
	function j(e) {
		return Array.isArray ? Array.isArray(e) : e instanceof Object ? e instanceof Array : "[object Array]" === Object.prototype.toString.call(e);
	}
	function S(e) {
		return "function" == typeof e;
	}
	function P(e) {
		return "function" == typeof e;
	}
	function A(e, t) {
		var r = e[t];
		if (null != r) {
			if (!S(r)) throw TypeError();
			return r;
		}
	}
	function k(e) {
		var t = A(e, o);
		if (!S(t)) throw TypeError();
		var r = t.call(e);
		if (!O(r)) throw TypeError();
		return r;
	}
	function E(e) {
		var t = e.next();
		return !t.done && t;
	}
	function M(e) {
		var t = e.return;
		t && t.call(e);
	}
	function R(e) {
		var t = Object.getPrototypeOf(e);
		if ("function" != typeof e || e === a || t !== a) return t;
		var r = e.prototype, i = r && Object.getPrototypeOf(r);
		if (null == i || i === Object.prototype) return t;
		var l = i.constructor;
		return "function" != typeof l || l === e ? t : l;
	}
	function $(e) {
		throw e;
	}
	function C(e, t, r) {
		var i = p.getProvider(e, t);
		if (!_(i)) return i;
		if (r) {
			if (p.setProvider(e, t, d)) return d;
			throw Error("Illegal state.");
		}
	}
});
var lC = class {
	static getOwnPropertyNames(e) {
		return Reflect.getMetadataKeys(e);
	}
	static get(e, t) {
		return Reflect.getMetadata(t, e);
	}
	static define(e, t, r, i) {
		if (e && e.constructor && e.constructor != Object) {
			if (eF(r)) return void Reflect.defineMetadata(t, l$(Reflect.getMetadata(t, e) ?? i ?? {}, r), e);
			Reflect.defineMetadata(t, r, e);
		}
	}
};
let lT = (e) => "function" == typeof e && `${e}`.startsWith("class"), lF = {
	path: [],
	branch: []
};
var lN = class extends TypeError {
	value;
	key;
	type;
	refinement;
	path;
	branch;
	failures;
	constructor(e, t) {
		let r, { message: i, explanation: l,...o } = e, { path: a } = e, s = 0 === a.length ? i : `At path: ${a.join(".")} -- ${i}`;
		super(l ?? s), null != l && (this.cause = s), Object.assign(this, o), this.name = this.constructor.name, this.failures = () => r ??= [e, ...t()];
	}
};
let lL = Symbol("Type");
function* lD(e, t, r, i) {
	let l, o = e;
	for (let e of (("object" != typeof (l = o) || "function" != typeof l[Symbol.iterator]) && (o = [o]), o)) {
		let l = function(e, t, r, i) {
			if (!0 === e) return;
			let l = {};
			l = !1 === e ? {} : ef(e) ? { message: e } : e;
			let { path: o, branch: a, node: s } = t, { type: u } = r, { refinement: c, message: f = eN(i) ? "Required" : `Expected a value of type \`${u}\`${c ? ` with refinement \`${c}\`` : ""}, but received: \`${i}\`` } = l;
			return {
				...l,
				value: i,
				type: u,
				refinement: c,
				key: o[o.length - 1],
				path: o,
				branch: a,
				node: s,
				message: f
			};
		}(e, t, r, i);
		l && (yield l);
	}
}
function lI(e, t, r = {}) {
	let i = lB(e, t, r), l = function(e) {
		let { done: t, value: r } = e.next();
		return t ? void 0 : r;
	}(i);
	return l[0] ? [new lN(l[0], function* () {
		for (let e of i) e[0] && (yield e[0]);
	}), void 0] : [void 0, l[1]];
}
function* lB(e, t, r = {}) {
	let { path: i = [], branch: l = [e], node: o = { current: t }, coerce: a = !1, mask: s = !1 } = r, u = {
		mask: s,
		path: i,
		branch: l,
		node: o
	}, c = e;
	if (a) {
		let r = t.coercer(e, u);
		void 0 != r && (c = r);
	}
	let f = lV.valid;
	for (let i of lD(t.validator(c, u), u, t, e)) i.explanation = r.message, f = lV.not_valid, yield [i, void 0];
	for (let [e, p, d] of t.entries(c, u)) for (let t of lB(p, d, {
		path: void 0 === e ? i : [...i, e],
		branch: void 0 === e ? l : [...l, p],
		node: void 0 === e ? o : {
			current: d,
			parent: o
		},
		coerce: a,
		mask: s,
		message: r.message
	})) t[0] ? (f = null != t[0].refinement ? lV.not_refined : lV.not_valid, yield [t[0], void 0]) : a && (p = t[1], void 0 === e ? c = p : c instanceof Map ? c.set(e, p) : c instanceof Set ? c.add(p) : es(c) && (c[e] = p));
	if (f !== lV.not_valid) for (let i of lD(t.refiner(c, u), u, t, e)) i.explanation = r.message, f = lV.not_refined, yield [i, void 0];
	f === lV.valid && (yield [void 0, c]);
}
var lV = ((W = lV || {})[W.valid = 0] = "valid", W[W.not_refined = 1] = "not_refined", W[W.not_valid = 2] = "not_valid", W);
let lU = (e) => (...t) => {
	let r = e(...t), i = (e, t) => {
		let i = lC.get(e, t) ?? {};
		lC.define(e, t, {
			...i,
			type: r
		});
	};
	return i.toString = () => `@type:${r.type}`, new Proxy(i, {
		ownKeys: () => [...Object.getOwnPropertyNames(r), ...Object.getOwnPropertySymbols(r)],
		get: (e, t) => r[t]
	});
}, lW = (e) => (...t) => {
	let r = (r) => e(r, ...t);
	return new Proxy((e, t) => {
		lC.define(e, t, (e) => {
			(e.modifies ??= []).push({ modify: r });
		}, {});
	}, { get(e, t) {
		if ("modify" == t) return r;
	} });
};
var lz = class e {
	static RecordKey = Symbol("RecordKey");
	static meta = Symbol("meta");
	static optional = Symbol("optional");
	static underlying = Symbol("underlying");
	static unwrap = Symbol("unwrap");
	static extractSchema = (e) => new lG().toValue(e);
	static extractMeta = (t) => new lG().toValue(t.meta ?? t[e.meta]);
	static create(t, r, i) {
		let l, o = r ?? t[e.underlying]?.schema ?? {};
		return new Proxy({}, {
			ownKeys(e) {
				let r = /* @__PURE__ */ new Map();
				if (i) {
					if (t[i]) for (let e of Object.getOwnPropertyNames(t[i])) r.set(e, e);
					if (o && o[i]) for (let e of Object.getOwnPropertyNames(o[i])) r.set(e, e);
				} else {
					for (let e of Object.getOwnPropertyNames(t)) r.set(e, e);
					if (o) for (let e of Object.getOwnPropertyNames(o)) r.set(e, e);
				}
				return [...r.keys()];
			},
			get(r, a) {
				if (a === e.meta) return l ??= e.create(t, o, e.meta);
				if (i) {
					if (_(t)) {
						let e = t?.[i]?.[a];
						if (!eN(e)) return e;
					}
					return o ? o?.[i]?.[a] : void 0;
				}
				if (_(t)) {
					let e = t?.[a];
					if (!eN(e)) return e;
				}
				return o ? o[a] : void 0;
			}
		});
	}
	static schemaProp(e, t) {
		return lq(e.schema, t);
	}
	static metaProp(e, t) {
		return lK(e.schema, t);
	}
}, lq = (e, t) => {
	if (_(e)) return e[t] ?? (e[lz.unwrap] ? lq(e[lz.unwrap]().schema, t) : void 0);
}, lK = (e, t) => {
	if (_(e)) return e[lz.meta]?.[t] ?? (e[lz.unwrap] ? lK(e[lz.unwrap]().schema, t) : void 0);
}, lG = class {
	constructor(e = !1) {
		this.deref = e;
	}
	toValue(e) {
		if (e) {
			if (!eN(e.schema)) return this.toValue(e.schema);
			if (this.deref && e[lz.unwrap]) return this.toValue(e[lz.unwrap]());
			if (ev(e)) return this.toArray(e);
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
}, lH = class e {
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
		return "" == e && t ? lz.RecordKey : e.replace(/~1/g, "/").replace(/~0/g, "~");
	}
	static escape(e) {
		return e == lz.RecordKey ? "" : e.toString().replace(/~/g, "~0").replace(/\//g, "~1");
	}
	static get(t, r) {
		let i = Array.isArray(r) ? r : e.parse(r);
		for (let e = 0; e < i.length; e++) {
			let r = i[e];
			if (e > 0 && r == lz.RecordKey) return i[e - 1];
			if (!("object" == typeof t && r in t)) throw Error("Invalid reference token: " + r);
			t = t[r];
		}
		return t;
	}
}, lJ = class e {
	static define = lU((t = () => !0) => new class extends e {
		validator(e, r) {
			return t(e, r);
		}
	}(null));
	static fromTypeObject = (t, r) => {
		let i = t.type ?? r ?? new e({});
		return t.modifies ? i.use(...t.modifies ?? []) : i;
	};
	[lL] = lL;
	schema;
	constructor(e) {
		if (e) {
			this.schema = lz.create(e);
			return;
		}
		this.schema = e ?? null;
	}
	get meta() {
		return this.schema ? this.schema[lz.meta] : {};
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
		if (ef(e)) {
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
	*entries(e, t = lF) {}
	validate(e, t = {}) {
		return lI(e, this, t);
	}
	create(e) {
		let t = lI(e, this, { coerce: !0 });
		if (t[0]) throw t[0];
		return t[1];
	}
	mask(e) {
		let t = lI(e, this, {
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
		return lQ.create(this);
	}
	default(e) {
		return lZ.create(this, e);
	}
}, lX = class e extends lJ {
	static of(t, r) {
		return new e({
			...r,
			[lz.underlying]: t
		});
	}
	static refine(t, r, i) {
		return new class extends e {
			*refiner(e, l) {
				for (let o of (yield* this.unwrap.refiner(e, l), lD(r(e, l), l, t, e))) yield {
					...o,
					refinement: Object.keys(i).join(",")
				};
			}
		}({
			...i,
			[lz.underlying]: t
		});
	}
	get unwrap() {
		let e = this.schema[lz.unwrap];
		return e ? e() : this.schema[lz.underlying];
	}
	get type() {
		return this.unwrap.type;
	}
	*entries(e, t = lF) {
		yield* this.unwrap.entries(e, {
			...t,
			node: {
				current: this,
				parent: t.node
			}
		});
	}
	validator(e, t) {
		return lD(this.unwrap.validator(e, t), t, this, e);
	}
	refiner(e, t) {
		return lD(this.unwrap.refiner(e, t), t, this, e);
	}
	coercer(e, t) {
		return this.unwrap.coercer(e, t);
	}
}, lZ = class e extends lX {
	static create = lU((t, r) => new e({
		default: r,
		[lz.underlying]: t
	}));
	coercer(e, t) {
		return void 0 === e ? this.schema.default : super.unwrap.coercer(e, t);
	}
}, lQ = class e extends lX {
	static create = lU((t) => new e({
		[lz.underlying]: t,
		[lz.optional]: t
	}));
	refiner(e, t) {
		return void 0 === e || super.unwrap.refiner(e, t);
	}
	validator(e, t) {
		return void 0 === e || super.unwrap.validator(e, t);
	}
}, lY = class e extends lX {
	static create = lU((t, r) => new e({
		$ref: t,
		[lz.unwrap]: r
	}));
}, l0 = class e extends lJ {
	static create = lU(() => new e());
	constructor() {
		super({});
	}
	get type() {
		return "any";
	}
	validator() {
		return !0;
	}
}, l1 = class e extends lJ {
	static create = lU(() => new e({ type: "null" }));
	get type() {
		return "null";
	}
	validator(e, t) {
		return null === e;
	}
	coercer(e, t) {
		return e;
	}
}, l2 = class e extends lJ {
	static create = lU(() => new e({ type: "string" }));
	get type() {
		return this.schema.type;
	}
	validator(e, t) {
		return ef(e);
	}
	coercer(e, t) {
		return eN(e) || null === e ? e : String(e);
	}
}, l6 = class e extends lJ {
	static create = lU(() => new e({ type: "number" }));
	get type() {
		return this.schema.type;
	}
	validator(e, t) {
		return e_(e);
	}
	coercer(e, t) {
		try {
			let t = void 0 != e ? parseFloat(String(e)) : void 0;
			if (e_(t)) return t;
		} catch (e) {}
	}
}, l4 = class e extends lJ {
	static create = lU(() => new e({ type: "integer" }));
	get type() {
		return this.schema.type;
	}
	validator(e, t) {
		return eI(e);
	}
	coercer(e, t) {
		try {
			let t = void 0 != e ? parseInt(String(e)) : void 0;
			return eI(t) ? t : void 0;
		} catch (e) {
			return;
		}
	}
}, l8 = class e extends lJ {
	static create = lU(() => new e({ type: "boolean" }));
	get type() {
		return this.schema.type;
	}
	validator(e, t) {
		return eL(e);
	}
	coercer(e, t) {
		try {
			return void 0 != e ? "true" === String(e) : void 0;
		} catch (e) {
			return;
		}
	}
}, l3 = class e extends lJ {
	static create = lU(() => new e({
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
}, l5 = class e extends lJ {
	static create = lU(e.createEnum);
	static createEnum(t) {
		return new e({ enum: t });
	}
	static literal = lU((t) => new e({ enum: [t] }));
	static nativeEnum = lU((t) => new e({ enum: Object.values(t) }));
	get type() {
		return "enums";
	}
	validator(e, t) {
		return this.schema.enum.includes(e);
	}
	coercer(e, t) {
		return e;
	}
}, l9 = class e extends lJ {
	static create = lU(() => new e(!1));
	get type() {
		return "never";
	}
	validator(e, t) {
		return !1;
	}
	coercer(e, t) {
		return e;
	}
}, l7 = class e extends lJ {
	static create(t) {
		let r = (e = {}) => {
			let t = [];
			for (let [r, i] of Object.entries(e)) lz.schemaProp(i, lz.optional) || t.push(r);
			return t;
		};
		return lU(() => {
			if (t) {
				if (lT(t)) {
					let i = new t(), l = {};
					for (let [e, t] of Object.entries(i)) l[e] = l5.literal(t);
					for (let e of lC.getOwnPropertyNames(i)) {
						let t = lC.get(i, e);
						if (t) {
							let r = lJ.fromTypeObject(t, l[e]);
							e in l ? l[e] = r.default(l[e].schema?.enum?.[0]) : l[e] = r;
						}
					}
					return new e({
						type: "object",
						properties: l,
						required: r(l),
						additionalProperties: l9.create()
					});
				}
				return new e({
					type: "object",
					properties: t,
					required: r(t),
					additionalProperties: l9.create()
				});
			}
			return new e({
				type: "object",
				properties: {},
				required: [],
				additionalProperties: l9.create()
			});
		})();
	}
	get type() {
		return this.schema.type;
	}
	*entries(e, t = lF) {
		if (es(e)) {
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
		return es(e);
	}
	coercer(e, t) {
		if (es(e)) {
			let r = { ...e };
			if (t.mask) {
				let e = this.schema.properties;
				if (e) for (let t in r) void 0 === e[t] && delete r[t];
			}
			return r;
		}
		return super.coercer(e, t);
	}
}, oe = class e extends lJ {
	static create = lU((t, r) => new e({
		type: "object",
		propertyNames: t,
		additionalProperties: r
	}));
	get type() {
		return "record";
	}
	*entries(e) {
		if (es(e)) for (let [t, r] of Object.entries(e)) yield [
			lz.RecordKey,
			t,
			this.schema.propertyNames
		], yield [
			t,
			r,
			this.schema.additionalProperties
		];
	}
	validator(e) {
		return es(e);
	}
}, ot = class e extends lJ {
	static create = lU((t) => new e({
		type: "array",
		items: t
	}));
	get type() {
		return this.schema.type;
	}
	*entries(e, t = lF) {
		if (Array.isArray(e)) for (let [t, r] of e.entries()) yield [
			t,
			r,
			this.schema.items
		];
	}
	validator(e) {
		return ev(e);
	}
	coercer(e) {
		return ev(e) ? e.slice() : e;
	}
}, or = class e extends lJ {
	static create = lU((t) => new e({
		type: "array",
		items: t
	}));
	get type() {
		return "tuple";
	}
	*entries(e, t) {
		if (ev(e)) {
			let t = Math.max(this.schema.items.length, e.length);
			for (let r = 0; r < t; r++) yield [
				r,
				e[r],
				this.schema.items[r] ?? l9.create()
			];
		}
	}
	validator(e) {
		return ev(e) && e.length === this.schema.items.length;
	}
	coercer(e) {
		return ev(e) ? e.slice() : e;
	}
}, on = class e extends lJ {
	static create = lU((...t) => new e({ allOf: t }));
	get type() {
		return "intersection";
	}
	*entries(e, t = lF) {
		for (let r of this.schema.allOf) yield* r.entries(e, t);
	}
	*validator(e, t) {
		for (let r of this.schema.allOf) yield* lD(r.validator(e, t), t, this, e);
	}
	*refiner(e, t) {
		for (let r of this.schema.allOf) yield* lD(r.refiner(e, t), t, this, e);
	}
}, oi = class e extends lJ {
	static create = lU((...t) => new e({ oneOf: t }));
	static discriminatorMapping(t, ...r) {
		return lU(() => {
			let i = [];
			if (1 == r.length && r[0].constructor == Object) for (let [e, l] of Object.entries(r[0])) if (lz.schemaProp(l, "$ref")) i.push(l);
			else {
				let r = { [t]: l5.literal(e) };
				for (let [e, t, i] of l.entries({}, lF)) r[String(e)] = i;
				i.push(l7.create(r));
			}
			else for (let e of r) lT(e) && i.push(l7.create(e));
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
				let l = lz.schemaProp(e, "properties")[t];
				if (!l) continue;
				let o = l.schema.enum;
				o && r.push(...o), i.push(l.meta);
			}
			return lX.of(l5.create(r), { [lz.meta]: lz.create(i[0], e.node?.current.meta ?? {}) });
		})();
	}
	_discriminatorMappingProps = /* @__PURE__ */ new Map();
	discriminatorMapping(e, t, r) {
		if (this._discriminatorMappingProps.get(t)) return this._discriminatorMappingProps.get(t);
		if ((this.discriminatorPropType(r)?.schema?.enum ?? []).includes(t)) {
			let r = this.schema.oneOf.find((r) => {
				let i = lz.schemaProp(r, "properties")[e];
				if (i) {
					let [e, r] = i.validate(t);
					return !e;
				}
				return !1;
			});
			if (r) {
				if (!this._discriminatorMappingProps.has(t)) {
					let i = {};
					for (let [t, l] of Object.entries(lz.schemaProp(r, "properties"))) t !== e && (i[t] = l);
					this._discriminatorMappingProps.set(t, i);
				}
				return this._discriminatorMappingProps.get(t);
			}
		}
		return {};
	}
	*entries(e, t = lF) {
		if (this.schema.discriminator) {
			let r = this.schema.discriminator.propertyName, i = e?.[r];
			yield* l7.create({
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
			let [r, i] = lI(e, t, { coerce: !0 });
			if (!r) return i;
		}
		return e;
	}
	validator(e, t) {
		if (this.schema.discriminator) {
			let r = this.schema.discriminator.propertyName, i = e?.[r];
			return l7.create({
				[r]: this.discriminatorPropType(t),
				...this.discriminatorMapping(r, i, t)
			}).validator(e, t);
		}
		let r = [];
		for (let i of this.schema.oneOf) {
			let [ ...l] = lB(e, i, t), [o] = l;
			if (o && !o[0]) return [];
			for (let [e] of l) e && r.push(e);
		}
		return [`Expected the value to satisfy a union of \`${this.schema.oneOf.map((e) => e.type).join(" | ")}\`, but received: ${e}`, ...r];
	}
}, ol = e({
	annotate: () => oI,
	any: () => oa,
	array: () => oE,
	binary: () => oO,
	boolean: () => ow,
	custom: () => oF,
	defaults: () => oL,
	discriminatorMapping: () => oT,
	enums: () => ox,
	exclusiveMaximum: () => ob,
	exclusiveMinimum: () => ov,
	integer: () => oy,
	intersection: () => o$,
	literal: () => oS,
	maxItems: () => oR,
	maxLength: () => op,
	maximum: () => og,
	minItems: () => oM,
	minLength: () => of,
	minimum: () => om,
	multipleOf: () => o_,
	nativeEnum: () => oj,
	never: () => os,
	nil: () => ou,
	number: () => oh,
	object: () => oP,
	optional: () => oD,
	pattern: () => od,
	record: () => oA,
	ref: () => oo,
	refine: () => oN,
	string: () => oc,
	tuple: () => ok,
	union: () => oC
});
let oo = lY.create, oa = l0.create, os = l9.create, ou = l1.create, oc = l2.create, of = lW((e, t, r) => lX.refine(e, (e) => !!e && e.length >= t || (r ?? `Expected string value length great than or equal ${t}, but received "${e}"`), { minLength: t })), op = lW((e, t, r) => lX.refine(e, (e) => !!e && e.length <= t || (r ?? `Expected string value length less than or equal ${t}, but received "${e}"`), { maxLength: t })), od = lW((e, t, r) => {
	let i = lX.refine(e, (i) => !!t.test(i) || (r ?? `Expected a ${e.type} matching \`/${t.source}/\` but received "${i}"`), { pattern: t.source });
	return r ? i.use(oI({ "x-pattern-err-msg": r })) : i;
}), oh = l6.create, oy = l4.create, om = lW((e, t, r) => lX.refine(e, (e) => e >= t || (r ?? `Expected value great than or equal ${t}, but received "${e}"`), { minimum: t })), ov = lW((e, t, r) => lX.refine(e, (e) => e > t || (r ?? `Expected value great than ${t}, but received "${e}"`), { exclusiveMinimum: t })), og = lW((e, t, r) => lX.refine(e, (e) => e <= t || (r ?? `Expected value less than or equal ${t}, but received "${e}"`), { maximum: t })), ob = lW((e, t, r) => lX.refine(e, (e) => e < t || (r ?? `Expected value less than or equal ${t}, but received "${e}"`), { exclusiveMaximum: t })), o_ = lW((e, t, r) => lX.refine(e, (e) => e % t == 0 || (r ?? `Expected value multiple of ${t}, but received "${e}"`), { multipleOf: t })), ow = l8.create, oO = l3.create, ox = l5.create, oj = l5.nativeEnum, oS = l5.literal, oP = l7.create, oA = oe.create, ok = or.create, oE = ot.create, oM = lW((e, t, r) => lX.refine(e, (e) => !!ev(e) && e.length >= t || (r ?? `Expected array value at least ${t}, but received "${e?.length}"`), { minItems: t })), oR = lW((e, t, r) => lX.refine(e, (e) => !!ev(e) && e.length <= t || (r ?? `Expected array value  ${t}, but received "${e?.length}"`), { maxItems: t })), o$ = on.create, oC = oi.create, oT = oi.discriminatorMapping, oF = lJ.define, oN = lX.refine, oL = lW((e, t) => lZ.create(e, t)), oD = lW((e) => lQ.create(e)), oI = lW((e, t) => lX.of(e, { [lz.meta]: t })), oB = (e) => e.split("/")?.findLast(() => !0) ?? "";
var oV = class e {
	static decode(t, r) {
		return !1 === t ? os() : new e(r).decode(t);
	}
	def = /* @__PURE__ */ new Map();
	constructor(e) {
		this.resolveRef = e;
	}
	decode(e) {
		let t = structuredClone(e), r = this._decode(t), i = !1;
		if (t?.title && (r = r.use(oI({ title: t?.title })), i = !0), t?.description) if (i) r = r.use(oI({ description: t?.description }));
		else {
			let [e, ...i] = t?.description.split(/[.\n]/);
			r = r.use(oI({
				title: e,
				description: i ? i.join("\n").trim() : void 0
			}));
		}
		if (t) {
			for (let e of oJ) if (!eN(t[e])) {
				if ("pattern" == e) {
					r = r.use(od(new RegExp(t[e]), t["x-pattern-err-msg"])), delete t[e];
					continue;
				}
				let i = ol[e];
				i && (r = r.use(i(t[e])), delete t[e]);
			}
			delete t.title, delete t.description, Object.keys(t).length > 0 && (r = r.use(oI(t)));
		}
		return r;
	}
	ref = (e) => {
		let t = this.def.get(e);
		if (t) return t;
		throw Error(`undefined type ${e}`);
	};
	_decode(e) {
		let t = oZ(e);
		if (t.$ref) {
			let [e, r] = this.resolveRef(t.$ref);
			return this.def.has(r) || (this.def.set(r, oa()), this.def.set(r, this.decode(e))), oo(r, () => this.ref(r));
		}
		if (t.enum) {
			let e = ox(t.enum);
			return t["x-enum-labels"] ? e.use(oI({ enumLabels: t["x-enum-labels"] })) : e;
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
					let t = this.decode(i), l = lz.schemaProp(t, "properties")?.[e];
					if (l) {
						let e = lz.schemaProp(l, "enum")?.[0];
						eN(e) || (r[`${e}`] = t);
					}
				}
				return oT(e, r);
			}
		}
		if (t.oneOf) {
			let e = t.oneOf.map((e) => this.decode(e));
			return 1 === e.length ? e[0] : oC(...e);
		}
		if (t.allOf) {
			let e = t.allOf.map((e) => this.decode(e));
			return 1 === e.length ? e[0] : o$(...e);
		}
		if (oU(t)) {
			if (t.properties) {
				let e = t.required ?? [], r = {};
				for (let [i, l] of Object.entries(t.properties)) {
					let t = this.decode(l);
					e.includes(i) || (t = t.optional()), r[i] = t;
				}
				return oP(r);
			}
			let e = t.additionalProperties ?? {};
			return e ? oA(this.decode(t.propertyNames ?? { type: "string" }), this.decode(e)) : oP();
		}
		return oz(t) ? ev(t.items) ? ok(t.items.map((e) => this.decode(e))) : oE(this.decode(t.items)) : oK(t) ? "binary" === t.format ? oO() : oc() : oq(t) ? "integer" === t.type ? oy() : oh() : oG(t) ? ow() : oW(t) ? ou() : oa();
	}
}, oU = (e) => "object" === e.type, oW = (e) => "null" === e.type, oz = (e) => "array" === e.type, oq = (e) => "number" === e.type || "integer" === e.type, oK = (e) => "string" === e.type, oG = (e) => "boolean" === e.type, oH = {
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
let oJ = [
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
var oX = (e, t) => t.some((t) => Object.hasOwn(e, t)), oZ = (e = {}) => {
	if (eL(e)) return {};
	if (!e.type) {
		for (let t in oH) if (oX(e, oH[t])) {
			e.type = t;
			break;
		}
	}
	e.const && (e.enum = [e.const]);
	let t = (t) => {
		e[t] && (e[t] = e[t].filter((r) => {
			let i = oZ(r);
			return !!oX(i, [
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
}, oQ = Symbol("component");
let oY = (e) => eE(e) && e[oQ] === oQ, o0 = (e) => {
	let t;
	return !!(t = Object.values(e)[0]) && t[lL] == lL;
};
function o1(...e) {
	let t, r = {}, i = {};
	for (let l of e) {
		if (eF(l)) {
			t = l;
			continue;
		}
		eN(t) ? r = l : i = l;
	}
	let [l, o] = function(e, t = f) {
		if (!e) return [[], []];
		let r = c(e) ? e : Object.values(e);
		t = ea(t);
		let i = [], l = [];
		for (let e = 0; e < r.length; e++) {
			let o = r[e];
			t(o) ? i.push(o) : l.push(o);
		}
		return [i, l];
	}(Object.keys(r), (e) => /^on[A-Z]/.test(e)), a = {
		emits: [...l.map((e) => ez(e.slice(2))), ...i.emits ?? []],
		props: [...o.filter((e) => !/^[$]/.test(e)), ...i.props ?? []].reduce((e, t) => {
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
		emits: a.emits,
		props: a.props,
		inheritAttrs: i.inheritAttrs,
		[oQ]: oQ
	};
}
let o2 = (e, t) => new Proxy(e, { get: (e, r) => t[r] ?? e[r] });
var o6 = "undefined" != typeof document;
function o4(e) {
	return "object" == typeof e || "displayName" in e || "props" in e || "__vccOpts" in e;
}
var o8 = Object.assign;
function o3(e, t) {
	let r = {};
	for (let i in t) {
		let l = t[i];
		r[i] = o9(l) ? l.map(e) : e(l);
	}
	return r;
}
var o5 = () => {}, o9 = Array.isArray, o7 = /#/g, ae = /&/g, at = /\//g, ar = /=/g, an = /\?/g, ai = /\+/g, al = /%5B/g, ao = /%5D/g, aa = /%5E/g, as = /%60/g, au = /%7B/g, ac = /%7C/g, af = /%7D/g, ap = /%20/g;
function ad(e) {
	return encodeURI("" + e).replace(ac, "|").replace(al, "[").replace(ao, "]");
}
function ah(e) {
	return ad(e).replace(ai, "%2B").replace(ap, "+").replace(o7, "%23").replace(ae, "%26").replace(as, "`").replace(au, "{").replace(af, "}").replace(aa, "^");
}
function ay(e) {
	return null == e ? "" : ad(e).replace(o7, "%23").replace(an, "%3F").replace(at, "%2F");
}
function am(e) {
	try {
		return decodeURIComponent("" + e);
	} catch (e) {}
	return "" + e;
}
var av = /\/$/;
function ag(e, t, r = "/") {
	let i, l = {}, o = "", a = "", s = t.indexOf("#"), u = t.indexOf("?");
	return s < u && s >= 0 && (u = -1), u > -1 && (i = t.slice(0, u), l = e(o = t.slice(u + 1, s > -1 ? s : t.length))), s > -1 && (i = i || t.slice(0, s), a = t.slice(s, t.length)), {
		fullPath: (i = function(e, t) {
			let r, i;
			if (e.startsWith("/")) return e;
			if (!e) return t;
			let l = t.split("/"), o = e.split("/"), a = o[o.length - 1];
			(".." === a || "." === a) && o.push("");
			let s = l.length - 1;
			for (r = 0; r < o.length; r++) if ("." !== (i = o[r])) if (".." === i) s > 1 && s--;
			else break;
			return l.slice(0, s).join("/") + "/" + o.slice(r).join("/");
		}(null != i ? i : t, r)) + (o && "?") + o + a,
		path: i,
		query: l,
		hash: am(a)
	};
}
function ab(e, t) {
	return t && e.toLowerCase().startsWith(t.toLowerCase()) ? e.slice(t.length) || "/" : e;
}
function a_(e, t) {
	return (e.aliasOf || e) === (t.aliasOf || t);
}
function aw(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let l in e) {
		var r, i;
		if (r = e[l], i = t[l], o9(r) ? !aO(r, i) : o9(i) ? !aO(i, r) : r !== i) return !1;
	}
	return !0;
}
function aO(e, t) {
	return o9(t) ? e.length === t.length && e.every((e, r) => e === t[r]) : 1 === e.length && e[0] === t;
}
var ax = {
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
(z = I || (I = {})).pop = "pop", z.push = "push", (q = B || (B = {})).back = "back", q.forward = "forward", q.unknown = "";
var aj = /^[^#]+#/;
function aS(e, t) {
	return e.replace(aj, "#") + t;
}
var aP = () => ({
	left: window.scrollX,
	top: window.scrollY
});
function aA(e, t) {
	return (history.state ? history.state.position - t : -1) + e;
}
var ak = /* @__PURE__ */ new Map();
function aE(e, t) {
	let { pathname: r, search: i, hash: l } = t, o = e.indexOf("#");
	if (o > -1) {
		let t = l.includes(e.slice(o)) ? e.slice(o).length : 1, r = l.slice(t);
		return "/" !== r[0] && (r = "/" + r), ab(r, "");
	}
	return ab(r, e) + i + l;
}
function aM(e, t, r, i = !1, l = !1) {
	return {
		back: e,
		current: t,
		forward: r,
		replaced: i,
		position: window.history.length,
		scroll: l ? aP() : null
	};
}
function aR(e) {
	let t = function(e) {
		let { history: t, location: r } = window, i = { value: aE(e, r) }, l = { value: t.state };
		function o(i, o, a) {
			let s = e.indexOf("#"), u = s > -1 ? (r.host && document.querySelector("base") ? e : e.slice(s)) + i : location.protocol + "//" + location.host + e + i;
			try {
				t[a ? "replaceState" : "pushState"](o, "", u), l.value = o;
			} catch (e) {
				console.error(e), r[a ? "replace" : "assign"](u);
			}
		}
		return l.value || o(i.value, {
			back: null,
			current: i.value,
			forward: null,
			position: t.length - 1,
			replaced: !0,
			scroll: null
		}, !0), {
			location: i,
			state: l,
			push: function(e, r) {
				let a = o8({}, l.value, t.state, {
					forward: e,
					scroll: aP()
				});
				o(a.current, a, !0), o(e, o8({}, aM(i.value, e, null), { position: a.position + 1 }, r), !1), i.value = e;
			},
			replace: function(e, r) {
				o(e, o8({}, t.state, aM(l.value.back, e, l.value.forward, !0), r, { position: l.value.position }), !0), i.value = e;
			}
		};
	}(e = function(e) {
		if (!e) if (o6) {
			let t = document.querySelector("base");
			e = (e = t && t.getAttribute("href") || "/").replace(/^\w+:\/\/[^\/]+/, "");
		} else e = "/";
		return "/" !== e[0] && "#" !== e[0] && (e = "/" + e), e.replace(av, "");
	}(e)), r = function(e, t, r, i) {
		let l = [], o = [], a = null, s = ({ state: o }) => {
			let s = aE(e, location), u = r.value, c = t.value, f = 0;
			if (o) {
				if (r.value = s, t.value = o, a && a === u) {
					a = null;
					return;
				}
				f = c ? o.position - c.position : 0;
			} else i(s);
			l.forEach((e) => {
				e(r.value, u, {
					delta: f,
					type: I.pop,
					direction: f ? f > 0 ? B.forward : B.back : B.unknown
				});
			});
		};
		function u() {
			let { history: e } = window;
			e.state && e.replaceState(o8({}, e.state, { scroll: aP() }), "");
		}
		return window.addEventListener("popstate", s), window.addEventListener("beforeunload", u, { passive: !0 }), {
			pauseListeners: function() {
				a = r.value;
			},
			listen: function(e) {
				l.push(e);
				let t = () => {
					let t = l.indexOf(e);
					t > -1 && l.splice(t, 1);
				};
				return o.push(t), t;
			},
			destroy: function() {
				for (let e of o) e();
				o = [], window.removeEventListener("popstate", s), window.removeEventListener("beforeunload", u);
			}
		};
	}(e, t.state, t.location, t.replace), i = o8({
		location: "",
		base: e,
		go: function(e, t = !0) {
			t || r.pauseListeners(), history.go(e);
		},
		createHref: aS.bind(null, e)
	}, t, r);
	return Object.defineProperty(i, "location", {
		enumerable: !0,
		get: () => t.location.value
	}), Object.defineProperty(i, "state", {
		enumerable: !0,
		get: () => t.state.value
	}), i;
}
function a$(e) {
	return "string" == typeof e || "symbol" == typeof e;
}
var aC = Symbol("");
function aT(e, t) {
	return o8(Error(), {
		type: e,
		[aC]: !0
	}, t);
}
function aF(e, t) {
	return e instanceof Error && aC in e && (null == t || !!(e.type & t));
}
(K = V || (V = {}))[K.aborted = 4] = "aborted", K[K.cancelled = 8] = "cancelled", K[K.duplicated = 16] = "duplicated";
var aN = "[^/]+?", aL = {
	sensitive: !1,
	strict: !1,
	start: !0,
	end: !0
}, aD = /[.+*?^${}()[\]/\\]/g;
function aI(e, t) {
	let r = 0, i = e.score, l = t.score;
	for (; r < i.length && r < l.length;) {
		let e = function(e, t) {
			let r = 0;
			for (; r < e.length && r < t.length;) {
				let i = t[r] - e[r];
				if (i) return i;
				r++;
			}
			return e.length < t.length ? 1 === e.length && 80 === e[0] ? -1 : 1 : e.length > t.length ? 1 === t.length && 80 === t[0] ? 1 : -1 : 0;
		}(i[r], l[r]);
		if (e) return e;
		r++;
	}
	if (1 === Math.abs(l.length - i.length)) {
		if (aB(i)) return 1;
		if (aB(l)) return -1;
	}
	return l.length - i.length;
}
function aB(e) {
	let t = e[e.length - 1];
	return e.length > 0 && t[t.length - 1] < 0;
}
var aV = {
	type: 0,
	value: ""
}, aU = /[a-zA-Z0-9_]/;
function aW(e, t) {
	let r = {};
	for (let i of t) i in e && (r[i] = e[i]);
	return r;
}
function az(e) {
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
function aq(e) {
	for (; e;) {
		if (e.record.aliasOf) return !0;
		e = e.parent;
	}
	return !1;
}
function aK(e, t) {
	let r = {};
	for (let i in e) r[i] = i in t ? t[i] : e[i];
	return r;
}
function aG({ record: e }) {
	return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function aH(e) {
	let t = {};
	if ("" === e || "?" === e) return t;
	let r = ("?" === e[0] ? e.slice(1) : e).split("&");
	for (let e = 0; e < r.length; ++e) {
		let i = r[e].replace(ai, " "), l = i.indexOf("="), o = am(l < 0 ? i : i.slice(0, l)), a = l < 0 ? null : am(i.slice(l + 1));
		if (o in t) {
			let e = t[o];
			o9(e) || (e = t[o] = [e]), e.push(a);
		} else t[o] = a;
	}
	return t;
}
function aJ(e) {
	let t = "";
	for (let r in e) {
		let i = e[r];
		if (r = ah(r).replace(ar, "%3D"), null == i) {
			void 0 !== i && (t += (t.length ? "&" : "") + r);
			continue;
		}
		(o9(i) ? i.map((e) => e && ah(e)) : [i && ah(i)]).forEach((e) => {
			void 0 !== e && (t += (t.length ? "&" : "") + r, null != e && (t += "=" + e));
		});
	}
	return t;
}
var aX = Symbol(""), aZ = Symbol(""), aQ = Symbol(""), aY = Symbol(""), a0 = Symbol("");
function a1() {
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
function a2(e, t, r, i, l, o = (e) => e()) {
	let a = i && (i.enterCallbacks[l] = i.enterCallbacks[l] || []);
	return () => new Promise((s, u) => {
		let c = (e) => {
			if (!1 === e) u(aT(4, {
				from: r,
				to: t
			}));
			else if (e instanceof Error) u(e);
			else "string" == typeof e || e && "object" == typeof e ? u(aT(2, {
				from: t,
				to: e
			})) : (a && i.enterCallbacks[l] === a && "function" == typeof e && a.push(e), s());
		}, f = Promise.resolve(o(() => e.call(i && i.instances[l], t, r, c)));
		e.length < 3 && (f = f.then(c)), f.catch((e) => u(e));
	});
}
function a6(e, t, r, i, l = (e) => e()) {
	let o = [];
	for (let a of e) for (let e in a.components) {
		let s = a.components[e];
		if ("beforeRouteEnter" === t || a.instances[e]) if (o4(s)) {
			let u = (s.__vccOpts || s)[t];
			u && o.push(a2(u, r, i, a, e, l));
		} else {
			let u = s();
			o.push(() => u.then((o) => {
				if (!o) throw Error(`Couldn't resolve component "${e}" at "${a.path}"`);
				let s = o.__esModule || "Module" === o[Symbol.toStringTag] || o.default && o4(o.default) ? o.default : o;
				a.mods[e] = o, a.components[e] = s;
				let u = (s.__vccOpts || s)[t];
				return u && a2(u, r, i, a, e, l)();
			}));
		}
	}
	return o;
}
function a4(e) {
	let t = n2(aQ), r = n2(aY), i = i1(() => {
		let r = rP(e.to);
		return t.resolve(r);
	}), l = i1(() => {
		let { matched: e } = i.value, { length: t } = e, l = e[t - 1], o = r.matched;
		if (!l || !o.length) return -1;
		let a = o.findIndex(a_.bind(null, l));
		if (a > -1) return a;
		let s = a3(e[t - 2]);
		return t > 1 && a3(l) === s && o[o.length - 1].path !== s ? o.findIndex(a_.bind(null, e[t - 2])) : a;
	}), o = i1(() => l.value > -1 && function(e, t) {
		for (let r in t) {
			let i = t[r], l = e[r];
			if ("string" == typeof i) {
				if (i !== l) return !1;
			} else if (!o9(l) || l.length !== i.length || i.some((e, t) => e !== l[t])) return !1;
		}
		return !0;
	}(r.params, i.value.params)), a = i1(() => l.value > -1 && l.value === r.matched.length - 1 && aw(r.params, i.value.params));
	return {
		route: i,
		href: i1(() => i.value.href),
		isActive: o,
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
				let r = t[rP(e.replace) ? "replace" : "push"](rP(e.to)).catch(o5);
				return e.viewTransition && "undefined" != typeof document && "startViewTransition" in document && document.startViewTransition(() => r), r;
			}
			return Promise.resolve();
		}
	};
}
var a8 = nh({
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
	useLink: a4,
	setup(e, { slots: t }) {
		let r = rc(a4(e)), { options: i } = n2(aQ), l = i1(() => ({
			[a5(e.activeClass, i.linkActiveClass, "router-link-active")]: r.isActive,
			[a5(e.exactActiveClass, i.linkExactActiveClass, "router-link-exact-active")]: r.isExactActive
		}));
		return () => {
			var i;
			let o = t.default && (1 === (i = t.default(r)).length ? i[0] : i);
			return e.custom ? o : i2("a", {
				"aria-current": r.isExactActive ? e.ariaCurrentValue : null,
				href: r.href,
				onClick: r.navigate,
				class: l.value
			}, o);
		};
	}
});
function a3(e) {
	return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
var a5 = (e, t, r) => null != e ? e : null != t ? t : r, a9 = nh({
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
		let i = n2(a0), l = i1(() => e.route || i.value), o = n2(aZ, 0), a = i1(() => {
			let e, t = rP(o), { matched: r } = l.value;
			for (; (e = r[t]) && !e.components;) t++;
			return t;
		}), s = i1(() => l.value.matched[a.value]);
		n1(aZ, i1(() => a.value + 1)), n1(aX, s), n1(a0, l);
		let u = rO();
		return ih(() => [
			u.value,
			s.value,
			e.name
		], ([e, t, r], [i, l, o]) => {
			t && (t.instances[r] = e, l && l !== t && e && e === i && (t.leaveGuards.size || (t.leaveGuards = l.leaveGuards), t.updateGuards.size || (t.updateGuards = l.updateGuards))), !e || !t || l && a_(t, l) && i || (t.enterCallbacks[r] || []).forEach((t) => t(e));
		}, { flush: "post" }), () => {
			let i = l.value, o = e.name, a = s.value, c = a && a.components[o];
			if (!c) return a7(r.default, {
				Component: c,
				route: i
			});
			let f = a.props[o], p = i2(c, o8({}, f ? !0 === f ? i.params : "function" == typeof f ? f(i) : f : null, t, {
				onVnodeUnmounted: (e) => {
					e.component.isUnmounted && (a.instances[o] = null);
				},
				ref: u
			}));
			return a7(r.default, {
				Component: p,
				route: i
			}) || p;
		};
	}
});
function a7(e, t) {
	if (!e) return null;
	let r = e(t);
	return 1 === r.length ? r[0] : r;
}
function se(e) {
	let t, r, i, l = function(e, t) {
		let r = [], i = /* @__PURE__ */ new Map();
		function l(e, a, s) {
			let u, c, f = !s, p = az(e);
			p.aliasOf = s && s.record;
			let d = aK(t, e), h = [p];
			if ("alias" in e) for (let t of "string" == typeof e.alias ? [e.alias] : e.alias) h.push(az(o8({}, p, {
				components: s ? s.record.components : p.components,
				path: t,
				aliasOf: s ? s.record : p
			})));
			for (let t of h) {
				let { path: h } = t;
				if (a && "/" !== h[0]) {
					let e = a.record.path, r = "/" === e[e.length - 1] ? "" : "/";
					t.path = a.record.path + (h && r + h);
				}
				if (u = function(e, t, r) {
					let i = o8(function(e, t) {
						let r = o8({}, aL, t), i = [], l = r.start ? "^" : "", o = [];
						for (let t of e) {
							let e = t.length ? [] : [90];
							r.strict && !t.length && (l += "/");
							for (let i = 0; i < t.length; i++) {
								let a = t[i], s = 40 + .25 * !!r.sensitive;
								if (0 === a.type) i || (l += "/"), l += a.value.replace(aD, "\\$&"), s += 40;
								else if (1 === a.type) {
									let { value: e, repeatable: r, optional: u, regexp: c } = a;
									o.push({
										name: e,
										repeatable: r,
										optional: u
									});
									let f = c || aN;
									f !== aN && (s += 10);
									let p = r ? `((?:${f})(?:/(?:${f}))*)` : `(${f})`;
									i || (p = u && t.length < 2 ? `(?:/${p})` : "/" + p), u && (p += "?"), l += p, s += 20, u && (s += -8), r && (s += -20), ".*" === f && (s += -50);
								}
								e.push(s);
							}
							i.push(e);
						}
						if (r.strict && r.end) {
							let e = i.length - 1;
							i[e][i[e].length - 1] += .7000000000000001;
						}
						r.strict || (l += "/?"), r.end ? l += "$" : r.strict && !l.endsWith("/") && (l += "(?:/|$)");
						let a = new RegExp(l, r.sensitive ? "" : "i");
						return {
							re: a,
							score: i,
							keys: o,
							parse: function(e) {
								let t = e.match(a), r = {};
								if (!t) return null;
								for (let e = 1; e < t.length; e++) {
									let i = t[e] || "", l = o[e - 1];
									r[l.name] = i && l.repeatable ? i.split("/") : i;
								}
								return r;
							},
							stringify: function(t) {
								let r = "", i = !1;
								for (let l of e) for (let e of (i && r.endsWith("/") || (r += "/"), i = !1, l)) if (0 === e.type) r += e.value;
								else if (1 === e.type) {
									let { value: o, repeatable: a, optional: s } = e, u = o in t ? t[o] : "";
									if (o9(u) && !a) throw Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);
									let c = o9(u) ? u.join("/") : u;
									if (!c) if (s) l.length < 2 && (r.endsWith("/") ? r = r.slice(0, -1) : i = !0);
									else throw Error(`Missing required param "${o}"`);
									r += c;
								}
								return r || "/";
							}
						};
					}(function(e) {
						let t, r;
						if (!e) return [[]];
						if ("/" === e) return [[aV]];
						if (!e.startsWith("/")) throw Error(`Invalid path "${e}"`);
						function i(e) {
							throw Error(`ERR (${l})/"${c}": ${e}`);
						}
						let l = 0, o = 0, a = [];
						function s() {
							t && a.push(t), t = [];
						}
						let u = 0, c = "", f = "";
						function p() {
							c && (0 === l ? t.push({
								type: 0,
								value: c
							}) : 1 === l || 2 === l || 3 === l ? (t.length > 1 && ("*" === r || "+" === r) && i(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`), t.push({
								type: 1,
								value: c,
								regexp: f,
								repeatable: "*" === r || "+" === r,
								optional: "*" === r || "?" === r
							})) : i("Invalid state to consume buffer"), c = "");
						}
						for (; u < e.length;) {
							if ("\\" === (r = e[u++]) && 2 !== l) {
								o = l, l = 4;
								continue;
							}
							switch (l) {
								case 0:
									"/" === r ? (c && p(), s()) : ":" === r ? (p(), l = 1) : c += r;
									break;
								case 4:
									c += r, l = o;
									break;
								case 1:
									"(" === r ? l = 2 : aU.test(r) ? c += r : (p(), l = 0, "*" !== r && "?" !== r && "+" !== r && u--);
									break;
								case 2:
									")" === r ? "\\" == f[f.length - 1] ? f = f.slice(0, -1) + r : l = 3 : f += r;
									break;
								case 3:
									p(), l = 0, "*" !== r && "?" !== r && "+" !== r && u--, f = "";
									break;
								default: i("Unknown state");
							}
						}
						return 2 === l && i(`Unfinished custom RegExp for param "${c}"`), p(), s(), a;
					}(e.path), r), {
						record: e,
						parent: t,
						children: [],
						alias: []
					});
					return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i), i;
				}(t, a, d), s ? s.alias.push(u) : ((c = c || u) !== u && c.alias.push(u), f && e.name && !aq(u) && o(e.name)), aG(u) && function(e) {
					let t = function(e, t) {
						let r = 0, i = t.length;
						for (; r !== i;) {
							let l = r + i >> 1;
							0 > aI(e, t[l]) ? i = l : r = l + 1;
						}
						let l = function(e) {
							let t = e;
							for (; t = t.parent;) if (aG(t) && 0 === aI(e, t)) return t;
						}(e);
						return l && (i = t.lastIndexOf(l, i - 1)), i;
					}(e, r);
					r.splice(t, 0, e), e.record.name && !aq(e) && i.set(e.record.name, e);
				}(u), p.children) {
					let e = p.children;
					for (let t = 0; t < e.length; t++) l(e[t], u, s && s.children[t]);
				}
				s = s || u;
			}
			return c ? () => {
				o(c);
			} : o5;
		}
		function o(e) {
			if (a$(e)) {
				let t = i.get(e);
				t && (i.delete(e), r.splice(r.indexOf(t), 1), t.children.forEach(o), t.alias.forEach(o));
			} else {
				let t = r.indexOf(e);
				t > -1 && (r.splice(t, 1), e.record.name && i.delete(e.record.name), e.children.forEach(o), e.alias.forEach(o));
			}
		}
		return t = aK({
			strict: !1,
			end: !0,
			sensitive: !1
		}, t), e.forEach((e) => l(e)), {
			addRoute: l,
			resolve: function(e, t) {
				let l, o, a, s = {};
				if ("name" in e && e.name) {
					if (!(l = i.get(e.name))) throw aT(1, { location: e });
					a = l.record.name, s = o8(aW(t.params, l.keys.filter((e) => !e.optional).concat(l.parent ? l.parent.keys.filter((e) => e.optional) : []).map((e) => e.name)), e.params && aW(e.params, l.keys.map((e) => e.name))), o = l.stringify(s);
				} else if (null != e.path) o = e.path, (l = r.find((e) => e.re.test(o))) && (s = l.parse(o), a = l.record.name);
				else {
					if (!(l = t.name ? i.get(t.name) : r.find((e) => e.re.test(t.path)))) throw aT(1, {
						location: e,
						currentLocation: t
					});
					a = l.record.name, s = o8({}, t.params, e.params), o = l.stringify(s);
				}
				let u = [], c = l;
				for (; c;) u.unshift(c.record), c = c.parent;
				return {
					name: a,
					path: o,
					params: s,
					matched: u,
					meta: u.reduce((e, t) => o8(e, t.meta), {})
				};
			},
			removeRoute: o,
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
	}(e.routes, e), o = e.parseQuery || aH, a = e.stringifyQuery || aJ, s = e.history, u = a1(), c = a1(), f = a1(), p = rx(ax), d = ax;
	o6 && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
	let h = o3.bind(null, (e) => "" + e), y = o3.bind(null, ay), m = o3.bind(null, am);
	function g(e, t) {
		var r;
		let i, u;
		if (t = o8({}, t || p.value), "string" == typeof e) {
			let r = ag(o, e, t.path), i = l.resolve({ path: r.path }, t), a = s.createHref(r.fullPath);
			return o8(r, i, {
				params: m(i.params),
				hash: am(r.hash),
				redirectedFrom: void 0,
				href: a
			});
		}
		if (null != e.path) i = o8({}, e, { path: ag(o, e.path, t.path).path });
		else {
			let r = o8({}, e.params);
			for (let e in r) r[e] ?? delete r[e];
			i = o8({}, e, { params: y(r) }), t.params = y(t.params);
		}
		let c = l.resolve(i, t), f = e.hash || "";
		c.params = h(m(c.params));
		let d = (u = (r = o8({}, e, {
			hash: ad(f).replace(au, "{").replace(af, "}").replace(aa, "^"),
			path: c.path
		})).query ? a(r.query) : "", r.path + (u && "?") + u + (r.hash || "")), g = s.createHref(d);
		return o8({
			fullPath: d,
			hash: f,
			query: a === aJ ? function(e) {
				let t = {};
				for (let r in e) {
					let i = e[r];
					void 0 !== i && (t[r] = o9(i) ? i.map((e) => null == e ? null : "" + e) : null == i ? i : "" + i);
				}
				return t;
			}(e.query) : e.query || {}
		}, c, {
			redirectedFrom: void 0,
			href: g
		});
	}
	function b(e) {
		return "string" == typeof e ? ag(o, e, p.value.path) : o8({}, e);
	}
	function _(e, t) {
		if (d !== e) return aT(8, {
			from: t,
			to: e
		});
	}
	function w(e) {
		let t = e.matched[e.matched.length - 1];
		if (t && t.redirect) {
			let { redirect: r } = t, i = "function" == typeof r ? r(e) : r;
			return "string" == typeof i && ((i = i.includes("?") || i.includes("#") ? i = b(i) : { path: i }).params = {}), o8({
				query: e.query,
				hash: e.hash,
				params: null != i.path ? {} : e.params
			}, i);
		}
	}
	function O(e, t) {
		let r, i, l, o = d = g(e), s = p.value, u = e.state, c = e.force, f = !0 === e.replace, h = w(o);
		return h ? O(o8(b(h), {
			state: "object" == typeof h ? o8({}, u, h.state) : u,
			force: c,
			replace: f
		}), t || o) : (o.redirectedFrom = t, !c && (i = s.matched.length - 1, l = o.matched.length - 1, i > -1 && i === l && a_(s.matched[i], o.matched[l]) && aw(s.params, o.params) && a(s.query) === a(o.query) && s.hash === o.hash) && (r = aT(16, {
			to: o,
			from: s
		}), $(s, s, !0, !1)), (r ? Promise.resolve(r) : S(o, s)).catch((e) => aF(e) ? aF(e, 2) ? e : R(e) : M(e, o, s)).then((e) => {
			if (e) {
				if (aF(e, 2)) return O(o8({ replace: f }, b(e.to), {
					state: "object" == typeof e.to ? o8({}, u, e.to.state) : u,
					force: c
				}), t || o);
			} else e = A(o, s, !0, f, u);
			return P(o, s, e), e;
		}));
	}
	function x(e, t) {
		let r = _(e, t);
		return r ? Promise.reject(r) : Promise.resolve();
	}
	function j(e) {
		let t = T.values().next().value;
		return t && "function" == typeof t.runWithContext ? t.runWithContext(e) : e();
	}
	function S(e, t) {
		let r, [i, l, o] = function(e, t) {
			let r = [], i = [], l = [], o = Math.max(t.matched.length, e.matched.length);
			for (let a = 0; a < o; a++) {
				let o = t.matched[a];
				o && (e.matched.find((e) => a_(e, o)) ? i.push(o) : r.push(o));
				let s = e.matched[a];
				s && !t.matched.find((e) => a_(e, s)) && l.push(s);
			}
			return [
				r,
				i,
				l
			];
		}(e, t);
		for (let l of (r = a6(i.reverse(), "beforeRouteLeave", e, t), i)) l.leaveGuards.forEach((i) => {
			r.push(a2(i, e, t));
		});
		let a = x.bind(null, e, t);
		return r.push(a), N(r).then(() => {
			for (let i of (r = [], u.list())) r.push(a2(i, e, t));
			return r.push(a), N(r);
		}).then(() => {
			for (let i of (r = a6(l, "beforeRouteUpdate", e, t), l)) i.updateGuards.forEach((i) => {
				r.push(a2(i, e, t));
			});
			return r.push(a), N(r);
		}).then(() => {
			for (let i of (r = [], o)) if (i.beforeEnter) if (o9(i.beforeEnter)) for (let l of i.beforeEnter) r.push(a2(l, e, t));
			else r.push(a2(i.beforeEnter, e, t));
			return r.push(a), N(r);
		}).then(() => (e.matched.forEach((e) => e.enterCallbacks = {}), (r = a6(o, "beforeRouteEnter", e, t, j)).push(a), N(r))).then(() => {
			for (let i of (r = [], c.list())) r.push(a2(i, e, t));
			return r.push(a), N(r);
		}).catch((e) => aF(e, 8) ? e : Promise.reject(e));
	}
	function P(e, t, r) {
		f.list().forEach((i) => j(() => i(e, t, r)));
	}
	function A(e, t, r, i, l) {
		let o = _(e, t);
		if (o) return o;
		let a = t === ax, u = o6 ? history.state : {};
		r && (i || a ? s.replace(e.fullPath, o8({ scroll: a && u && u.scroll }, l)) : s.push(e.fullPath, l)), p.value = e, $(e, t, r, a), R();
	}
	let k = a1(), E = a1();
	function M(e, t, r) {
		R(e);
		let i = E.list();
		return i.length ? i.forEach((i) => i(e, t, r)) : console.error(e), Promise.reject(e);
	}
	function R(e) {
		return r || (r = !e, t || (t = s.listen((e, t, r) => {
			var i, l;
			if (!F.listening) return;
			let o = g(e), a = w(o);
			if (a) return void O(o8(a, {
				replace: !0,
				force: !0
			}), o).catch(o5);
			d = o;
			let u = p.value;
			o6 && (i = aA(u.fullPath, r.delta), l = aP(), ak.set(i, l)), S(o, u).catch((e) => aF(e, 12) ? e : aF(e, 2) ? (O(o8(b(e.to), { force: !0 }), o).then((e) => {
				aF(e, 20) && !r.delta && r.type === I.pop && s.go(-1, !1);
			}).catch(o5), Promise.reject()) : (r.delta && s.go(-r.delta, !1), M(e, o, u))).then((e) => {
				(e = e || A(o, u, !1)) && (r.delta && !aF(e, 8) ? s.go(-r.delta, !1) : r.type === I.pop && aF(e, 20) && s.go(-1, !1)), P(o, u, e);
			}).catch(o5);
		})), k.list().forEach(([t, r]) => e ? r(e) : t()), k.reset()), e;
	}
	function $(t, r, i, l) {
		var o;
		let a, { scrollBehavior: s } = e;
		if (!o6 || !s) return Promise.resolve();
		let u = !i && (o = aA(t.fullPath, 0), a = ak.get(o), ak.delete(o), a) || (l || !i) && history.state && history.state.scroll || null;
		return rq().then(() => s(t, r, u)).then((e) => e && function(e) {
			let t;
			if ("el" in e) {
				let r, i, l = e.el, o = "string" == typeof l && l.startsWith("#"), a = "string" == typeof l ? o ? document.getElementById(l.slice(1)) : document.querySelector(l) : l;
				if (!a) return;
				r = document.documentElement.getBoundingClientRect(), i = a.getBoundingClientRect(), t = {
					behavior: e.behavior,
					left: i.left - r.left - (e.left || 0),
					top: i.top - r.top - (e.top || 0)
				};
			} else t = e;
			"scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(null != t.left ? t.left : window.scrollX, null != t.top ? t.top : window.scrollY);
		}(e)).catch((e) => M(e, t, r));
	}
	let C = (e) => s.go(e), T = /* @__PURE__ */ new Set(), F = {
		currentRoute: p,
		listening: !0,
		addRoute: function(e, t) {
			let r, i;
			return a$(e) ? (r = l.getRecordMatcher(e), i = t) : i = e, l.addRoute(i, r);
		},
		removeRoute: function(e) {
			let t = l.getRecordMatcher(e);
			t && l.removeRoute(t);
		},
		clearRoutes: l.clearRoutes,
		hasRoute: function(e) {
			return !!l.getRecordMatcher(e);
		},
		getRoutes: function() {
			return l.getRoutes().map((e) => e.record);
		},
		resolve: g,
		options: e,
		push: function(e) {
			return O(e);
		},
		replace: function(e) {
			return O(o8(b(e), { replace: !0 }));
		},
		go: C,
		back: () => C(-1),
		forward: () => C(1),
		beforeEach: u.add,
		beforeResolve: c.add,
		afterEach: f.add,
		onError: E.add,
		isReady: function() {
			return r && p.value !== ax ? Promise.resolve() : new Promise((e, t) => {
				k.add([e, t]);
			});
		},
		install(e) {
			e.component("RouterLink", a8), e.component("RouterView", a9), e.config.globalProperties.$router = this, Object.defineProperty(e.config.globalProperties, "$route", {
				enumerable: !0,
				get: () => rP(p)
			}), o6 && !i && p.value === ax && (i = !0, O(s.location).catch((e) => {}));
			let l = {};
			for (let e in ax) Object.defineProperty(l, e, {
				get: () => p.value[e],
				enumerable: !0
			});
			e.provide(aQ, this), e.provide(aY, rf(l)), e.provide(a0, p);
			let o = e.unmount;
			T.add(e), e.unmount = function() {
				T.delete(e), T.size < 1 && (d = ax, t && t(), t = null, p.value = ax, i = !1, r = !1), o();
			};
		}
	};
	function N(e) {
		return e.reduce((e, t) => e.then(() => j(t)), Promise.resolve());
	}
	return F;
}
function st() {
	return n2(aQ);
}
function sr(e) {
	return n2(aY);
}
let sn = a8, si = a9;
function sl(e, ...r) {
	return t(...r)(o(e));
}
var so = class e extends r {
	static seed(t) {
		return new e(t);
	}
	_value;
	_subject$ = new s();
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
		let r = eF(e) ? l$(this._value ?? t, e) : e;
		Object.is(r, this._value) || this._subject$.next(this._value = r);
	}
};
let sa = Symbol("forwardRef");
function ss(e) {
	let t = e;
	return new rE((e, r) => ({
		get: () => (e(), t),
		set(e) {
			let i = e?.[sa] ?? e;
			i !== t && (t = i, r());
		}
	}));
}
function su(e) {
	return (t) => {
		let r = t.subscribe(e);
		nM(() => r.unsubscribe());
	};
}
function sc(e) {
	return (t) => {
		let r;
		nA(() => {
			r = t.subscribe(e);
		}), nM(() => r?.unsubscribe());
	};
}
let sf = (e) => {
	let t = new so(e), r = new rE((e, r) => ({
		get: () => (e(), t.value),
		set(e) {
			let i = e?.[sa] ?? e;
			Object.is(i, t.value) || (t.next(i), r());
		}
	}));
	return new Proxy(t, {
		get: (e, i) => "next" === i ? (e) => {
			r.value = eF(e) ? l$(t.value, e) : e;
		} : "value" === i ? r.value : t[i] ?? r[i],
		set: (e, t, i) => ("value" === t ? r.value = i : e[t] = i, !0)
	});
};
var sp = (e) => "function" == typeof e ? e : Array.isArray(e) ? () => e : void 0 === e ? e : () => e, sd = (e, t, r) => sh(e, t, r), sh = (e, t, r) => {
	let i, [l, o] = ((e, t) => {
		let { children: r,...i } = e;
		if (r && !Array.isArray(r) && !iC(r) && "object" == typeof r) return [t ? {
			...i,
			key: t
		} : i, r];
		let l = {}, o = {}, a = !1;
		for (let e in i) {
			let t = i[e];
			if (e.startsWith("$")) {
				o[e.slice(1)] = sp(t), a = !0;
				continue;
			}
			l[e] = t;
		}
		let s = sp(r);
		return s && (o.default = s, a = !0), [t ? {
			...l,
			key: t
		} : l, a ? o : void 0];
	})(t, r);
	return (i = e) === iP || "string" == typeof i || "object" == typeof i && i.__isTeleport ? i2(e, l, o?.default?.() ?? (e === iP ? [] : void 0)) : i2(e, l, o);
};
function sy(e) {
	return (t) => sh(sm, {
		renderFn$: t.pipe(l((t) => () => e(t))),
		children: {}
	});
}
var sm = o1({ renderFn$: oF() }, (e, t) => {
	let r = null;
	sl(e.renderFn$, i((e) => {
		r = e;
	}), su());
	let l = sf(1);
	return sl(e.renderFn$, i(() => {
		l.value += 1;
	}), sc()), () => l.value ? r?.() : null;
}, { name: "RxSlot" }, { displayName: "RxSlot" });
let sv = (e, t) => {
	let r = new a(e[t]);
	return ih(() => e[t], (e) => r.next(e)), r;
};
function sg(...e) {
	let t, r = {}, i = {};
	for (let l of e) {
		if (eF(l)) {
			t = l;
			continue;
		}
		eN(t) ? r = l : i = l;
	}
	return o1(r, (e, r) => {
		let i = ((e) => {
			let t = {};
			for (let r in e) {
				if (eF(e[r]) || u(e[r])) {
					t[r] = e[r];
					continue;
				}
				t[`${r}$`] = sv(e, r);
			}
			return t;
		})(e), l = new Proxy({}, { get: (t, r) => e[r] ?? i[r] }), o = new Proxy({}, { get: (e, t) => "render" === t ? sy : r[t] }), a = t(l, o);
		return eF(a) ? a : () => a;
	}, i);
}
let sb = (e) => {
	let t, r = null;
	return i({
		next: (i) => {
			((e, t) => {
				if (ev(e) && ev(t)) {
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
function s_(...e) {
	let t, r, i = {}, l = {};
	for (let r of e) {
		if (eF(r)) {
			t = r;
			continue;
		}
		eN(t) ? i = r : l = r;
	}
	let o = Symbol(l?.name ?? "");
	if (eD(i) && eD(l.props)) {
		let e, r = () => e ??= t({});
		return o2(o1({
			value: oF().optional(),
			$default: oF().optional()
		}, (e, { slots: t }) => (n1(o, e.value ?? r()), () => t.default?.()), {
			...l,
			name: `Provide(${l?.name ?? ""})`
		}, { displayName: "Provider" }), { use: () => n2(o, r, !0) });
	}
	let a = oP(i);
	return o2(o1({
		...i,
		$default: oF().optional()
	}, (e, { slots: i }) => (n1(o, r = t(e)), () => i.default?.()), {
		...l,
		name: `Provide(${l?.name ?? ""})`
	}, { displayName: "Provider" }), { use: () => n2(o, () => r ??= t(a.create({})), !0) });
}
export { rx as $, oF as A, ev as At, nl as B, o0 as C, e$ as Ct, oa as D, eO as Dt, oI as E, eP as Et, lH as F, _ as Ft, ia as G, r7 as H, lz as I, g as It, nM as J, i2 as K, lF as L, oP as M, ef as Mt, oA as N, eu as Nt, oE as O, e_ as Ot, oc as P, el as Pt, rO as Q, lW as R, oY as S, eC as St, oB as T, eE as Tt, rN as U, iP as V, iD as W, nR as X, nA as Y, ih as Z, se as _, eW as _t, sy as a, t_ as at, st as b, eF as bt, sf as c, eQ as ct, sa as d, tb as dt, rP as et, ss as f, e8 as ft, si as g, ez as gt, sn as h, eq as ht, sv as i, to as it, ox as j, ep as jt, ow as k, eg as kt, sc as l, e5 as lt, sl as m, tp as mt, sb as n, ta as nt, sh as o, e6 as ot, so as p, e3 as pt, nP as q, sg as r, eY as rt, sd as s, e4 as st, s_ as t, ti as tt, su as u, eZ as ut, aR as v, eD as vt, oV as w, eM as wt, o1 as x, eT as xt, sr as y, eN as yt, ns as z };
