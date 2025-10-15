import { n as e, r as t, t as r } from "./rolldown-runtime.BUi7Tn5u.chunk.js";
import { a as i, i as o, l, n as a, o as s, r as u, s as c, t as f, u as p } from "./vendor-rxjs.00EKxvx-.chunk.js";
function d(e) {
	var t;
	return null != e && "function" != typeof e && Number.isSafeInteger(t = e.length) && t >= 0;
}
function h(e) {
	return e;
}
function y(e) {
	return "__proto__" === e;
}
function m(e) {
	switch (typeof e) {
		case "number":
		case "symbol": return !1;
		case "string": return e.includes(".") || e.includes("[") || e.includes("]");
	}
}
function g(e) {
	return "string" == typeof e || "symbol" == typeof e ? e : Object.is(e?.valueOf?.(), -0) ? "-0" : String(e);
}
function b(e) {
	if (null == e) return "";
	if ("string" == typeof e) return e;
	if (Array.isArray(e)) return e.map(b).join(",");
	let t = String(e);
	return "0" === t && Object.is(Number(e), -0) ? "-0" : t;
}
function _(e) {
	if (Array.isArray(e)) return e.map(g);
	if ("symbol" == typeof e) return [e];
	e = b(e);
	let t = [], r = e.length;
	if (0 === r) return t;
	let i = 0, o = "", l = "", a = !1;
	for (46 === e.charCodeAt(0) && (t.push(""), i++); i < r;) {
		let s = e[i];
		l ? "\\" === s && i + 1 < r ? o += e[++i] : s === l ? l = "" : o += s : a ? "\"" === s || "'" === s ? l = s : "]" === s ? (a = !1, t.push(o), o = "") : o += s : "[" === s ? (a = !0, o && (t.push(o), o = "")) : "." === s ? o && (t.push(o), o = "") : o += s, i++;
	}
	return o && t.push(o), t;
}
function w(e, t, r) {
	if (null == e) return r;
	switch (typeof t) {
		case "string": {
			if (y(t)) return r;
			let i = e[t];
			if (void 0 === i) if (m(t)) return w(e, _(t), r);
			else return r;
			return i;
		}
		case "number":
		case "symbol": {
			"number" == typeof t && (t = g(t));
			let i = e[t];
			if (void 0 === i) return r;
			return i;
		}
		default: {
			if (Array.isArray(t)) {
				var i = e, o = t, l = r;
				if (0 === o.length) return l;
				let a = i;
				for (let e = 0; e < o.length; e++) {
					if (null == a || y(o[e])) return l;
					a = a[o[e]];
				}
				return void 0 === a ? l : a;
			}
			if (y(t = Object.is(t?.valueOf(), -0) ? "-0" : String(t))) return r;
			let a = e[t];
			if (void 0 === a) return r;
			return a;
		}
	}
}
function O(e) {
	return function(t) {
		return w(t, e);
	};
}
function x(e) {
	return null !== e && ("object" == typeof e || "function" == typeof e);
}
function S(e) {
	return null == e || "object" != typeof e && "function" != typeof e;
}
function A(e, t) {
	return e === t || Number.isNaN(e) && Number.isNaN(t);
}
function j(e, t, r, i) {
	if (t === e) return !0;
	switch (typeof t) {
		case "object": return function(e, t, r, i) {
			if (null == t) return !0;
			if (Array.isArray(t)) return E(e, t, r, i);
			if (t instanceof Map) {
				var o, l, a, s, u = e, c = t, f = r, p = i;
				if (0 === c.size) return !0;
				if (!(u instanceof Map)) return !1;
				for (let [e, t] of c.entries()) if (!1 === f(u.get(e), t, e, u, c, p)) return !1;
				return !0;
			}
			if (t instanceof Set) return o = e, l = t, a = r, s = i, 0 === l.size || o instanceof Set && E([...o], [...l], a, s);
			let d = Object.keys(t);
			if (null == e) return 0 === d.length;
			if (0 === d.length) return !0;
			if (i && i.has(t)) return i.get(t) === e;
			i && i.set(t, e);
			try {
				for (let o = 0; o < d.length; o++) {
					let l = d[o];
					if (!S(e) && !(l in e) || void 0 === t[l] && void 0 !== e[l] || null === t[l] && null !== e[l] || !r(e[l], t[l], l, e, t, i)) return !1;
				}
				return !0;
			} finally {
				i && i.delete(t);
			}
		}(e, t, r, i);
		case "function":
			if (Object.keys(t).length > 0) return j(e, { ...t }, r, i);
			return A(e, t);
		default:
			if (!x(e)) return A(e, t);
			if ("string" == typeof t) return "" === t;
			return !0;
	}
}
function E(e, t, r, i) {
	if (0 === t.length) return !0;
	if (!Array.isArray(e)) return !1;
	let o = /* @__PURE__ */ new Set();
	for (let l = 0; l < t.length; l++) {
		let a = t[l], s = !1;
		for (let u = 0; u < e.length; u++) {
			if (o.has(u)) continue;
			let c = e[u], f = !1;
			if (r(c, a, l, e, t, i) && (f = !0), f) {
				o.add(u), s = !0;
				break;
			}
		}
		if (!s) return !1;
	}
	return !0;
}
function P(e, t) {
	var r;
	return "function" != typeof (r = () => void 0) ? P(e, t) : j(e, t, function e(t, i, o, l, a, s) {
		let u = r(t, i, o, l, a, s);
		return void 0 !== u ? !!u : j(t, i, e, s);
	}, /* @__PURE__ */ new Map());
}
function k(e) {
	return Object.getOwnPropertySymbols(e).filter((t) => Object.prototype.propertyIsEnumerable.call(e, t));
}
function R(e) {
	return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
var C, T, M, I, N, $, D, L, F, V, B, U, z, G, W, q, K, H = "[object String]", Y = "[object Number]", J = "[object Boolean]", X = "[object Arguments]";
function Z(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Q(e, t, r, i = /* @__PURE__ */ new Map(), o) {
	let l = o?.(e, t, r, i);
	if (void 0 !== l) return l;
	if (S(e)) return e;
	if (i.has(e)) return i.get(e);
	if (Array.isArray(e)) {
		let t = Array(e.length);
		i.set(e, t);
		for (let l = 0; l < e.length; l++) t[l] = Q(e[l], l, r, i, o);
		return Object.hasOwn(e, "index") && (t.index = e.index), Object.hasOwn(e, "input") && (t.input = e.input), t;
	}
	if (e instanceof Date) return new Date(e.getTime());
	if (e instanceof RegExp) {
		let t = new RegExp(e.source, e.flags);
		return t.lastIndex = e.lastIndex, t;
	}
	if (e instanceof Map) {
		let t = /* @__PURE__ */ new Map();
		for (let [l, a] of (i.set(e, t), e)) t.set(l, Q(a, l, r, i, o));
		return t;
	}
	if (e instanceof Set) {
		let t = /* @__PURE__ */ new Set();
		for (let l of (i.set(e, t), e)) t.add(Q(l, void 0, r, i, o));
		return t;
	}
	if ("undefined" != typeof Buffer && Buffer.isBuffer(e)) return e.subarray();
	if (Z(e)) {
		let t = new (Object.getPrototypeOf(e)).constructor(e.length);
		i.set(e, t);
		for (let l = 0; l < e.length; l++) t[l] = Q(e[l], l, r, i, o);
		return t;
	}
	if (e instanceof ArrayBuffer || "undefined" != typeof SharedArrayBuffer && e instanceof SharedArrayBuffer) return e.slice(0);
	if (e instanceof DataView) {
		let t = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
		return i.set(e, t), ee(t, e, r, i, o), t;
	}
	if ("undefined" != typeof File && e instanceof File) {
		let t = new File([e], e.name, { type: e.type });
		return i.set(e, t), ee(t, e, r, i, o), t;
	}
	if ("undefined" != typeof Blob && e instanceof Blob) {
		let t = new Blob([e], { type: e.type });
		return i.set(e, t), ee(t, e, r, i, o), t;
	}
	if (e instanceof Error) {
		let t = new e.constructor();
		return i.set(e, t), t.message = e.message, t.name = e.name, t.stack = e.stack, t.cause = e.cause, ee(t, e, r, i, o), t;
	}
	if (e instanceof Boolean) {
		let t = new Boolean(e.valueOf());
		return i.set(e, t), ee(t, e, r, i, o), t;
	}
	if (e instanceof Number) {
		let t = new Number(e.valueOf());
		return i.set(e, t), ee(t, e, r, i, o), t;
	}
	if (e instanceof String) {
		let t = new String(e.valueOf());
		return i.set(e, t), ee(t, e, r, i, o), t;
	}
	if ("object" == typeof e && function(e) {
		switch (R(e)) {
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
			case Y:
			case "[object Object]":
			case "[object RegExp]":
			case "[object Set]":
			case H:
			case "[object Symbol]":
			case "[object Uint8Array]":
			case "[object Uint8ClampedArray]":
			case "[object Uint16Array]":
			case "[object Uint32Array]": return !0;
			default: return !1;
		}
	}(e)) {
		let t = Object.create(Object.getPrototypeOf(e));
		return i.set(e, t), ee(t, e, r, i, o), t;
	}
	return e;
}
function ee(e, t, r = e, i, o) {
	let l = [...Object.keys(t), ...k(t)];
	for (let a = 0; a < l.length; a++) {
		let s = l[a], u = Object.getOwnPropertyDescriptor(e, s);
		(null == u || u.writable) && (e[s] = Q(t[s], s, r, i, o));
	}
}
function et(e) {
	var t;
	return e = Q(t = e, void 0, t, /* @__PURE__ */ new Map(), void 0), (t) => P(t, e);
}
function er(e, t) {
	var r;
	return r = (r, i, o, l) => {
		let a = t?.(r, i, o, l);
		if (void 0 !== a) return a;
		if ("object" == typeof e) switch (Object.prototype.toString.call(e)) {
			case Y:
			case H:
			case J: {
				let t = new e.constructor(e?.valueOf());
				return ee(t, e), t;
			}
			case X: {
				let t = {};
				return ee(t, e), t.length = e.length, t[Symbol.iterator] = e[Symbol.iterator], t;
			}
			default: return;
		}
	}, Q(e, void 0, e, /* @__PURE__ */ new Map(), r);
}
var en = /^(?:0|[1-9]\d*)$/;
function ei(e, t = Number.MAX_SAFE_INTEGER) {
	switch (typeof e) {
		case "number": return Number.isInteger(e) && e >= 0 && e < t;
		case "symbol": return !1;
		case "string": return en.test(e);
	}
}
function eo(e) {
	return null !== e && "object" == typeof e && "[object Arguments]" === R(e);
}
function el(e, t) {
	let r;
	if (0 === (r = Array.isArray(t) ? t : "string" == typeof t && m(t) && e?.[t] == null ? _(t) : [t]).length) return !1;
	let i = e;
	for (let e = 0; e < r.length; e++) {
		let t = r[e];
		if ((null == i || !Object.hasOwn(i, t)) && !((Array.isArray(i) || eo(i)) && ei(t) && t < i.length)) return !1;
		i = i[t];
	}
	return !0;
}
function ea(e, t) {
	switch (typeof e) {
		case "object":
			Object.is(e?.valueOf(), -0) && (e = "-0");
			break;
		case "number": e = g(e);
	}
	return t = er(t), function(r) {
		let i = w(r, e);
		return void 0 === i ? el(r, e) : void 0 === t ? void 0 === i : P(i, t);
	};
}
function es(e) {
	if (null == e) return h;
	switch (typeof e) {
		case "function": return e;
		case "object":
			if (Array.isArray(e) && 2 === e.length) return ea(e[0], e[1]);
			return et(e);
		case "string":
		case "symbol":
		case "number": return O(e);
	}
}
function eu(e) {
	return "object" == typeof e && null !== e;
}
function ec(e) {
	if (d(e)) {
		var t;
		return (t = Array.isArray(e) ? e : Array.from(e))[t.length - 1];
	}
}
function ef(e) {
	return "symbol" == typeof e || e instanceof Symbol;
}
function ep(e) {
	return "string" == typeof e || e instanceof String;
}
function ed(e) {
	return d(e) ? [...new Set(Array.from(e))] : [];
}
var eh = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ev = /^\w*$/;
function ey(e, t) {
	if (null == e) return !0;
	switch (typeof t) {
		case "symbol":
		case "number":
		case "object":
			if (Array.isArray(t)) return em(e, t);
			if ("number" == typeof t ? t = g(t) : "object" == typeof t && (t = Object.is(t?.valueOf(), -0) ? "-0" : String(t)), y(t)) return !1;
			if (e?.[t] === void 0) return !0;
			try {
				return delete e[t], !0;
			} catch {
				return !1;
			}
		case "string":
			if (e?.[t] === void 0 && m(t)) return em(e, _(t));
			if (y(t)) return !1;
			try {
				return delete e[t], !0;
			} catch {
				return !1;
			}
	}
}
function em(e, t) {
	let r = 1 === t.length ? e : w(e, t.slice(0, -1)), i = t[t.length - 1];
	if (r?.[i] === void 0) return !0;
	if (y(i)) return !1;
	try {
		return delete r[i], !0;
	} catch {
		return !1;
	}
}
function eg(e) {
	return Array.isArray(e);
}
function eb(e, t, r) {
	if (!e) return !1;
	null != r && (t = void 0), t ??= h;
	let i = Array.isArray(e) ? e : Object.values(e);
	switch (typeof t) {
		case "function":
			if (!Array.isArray(e)) {
				let r = Object.keys(e);
				for (let i = 0; i < r.length; i++) {
					let o = r[i];
					if (t(e[o], o, e)) return !0;
				}
				return !1;
			}
			for (let r = 0; r < e.length; r++) if (t(e[r], r, e)) return !0;
			return !1;
		case "object":
			if (Array.isArray(t) && 2 === t.length) {
				let r = ea(t[0], t[1]);
				if (Array.isArray(e)) {
					for (let t = 0; t < e.length; t++) if (r(e[t])) return !0;
					return !1;
				}
				return i.some(r);
			}
			{
				let r = et(t);
				if (Array.isArray(e)) {
					for (let t = 0; t < e.length; t++) if (r(e[t])) return !0;
					return !1;
				}
				return i.some(r);
			}
		case "number":
		case "symbol":
		case "string": {
			let r = O(t);
			if (Array.isArray(e)) {
				for (let t = 0; t < e.length; t++) if (r(e[t])) return !0;
				return !1;
			}
			return i.some(r);
		}
	}
}
function e_(e) {
	return e;
}
function ew(e) {
	return "number" == typeof e || e instanceof Number;
}
var eO = (e, t, r) => {
	let i = e[t];
	Object.hasOwn(e, t) && A(i, r) && (void 0 !== r || t in e) || (e[t] = r);
};
function ex(e, t, r) {
	return function(e, t, r, i) {
		if (null == e && !x(e)) return e;
		let o = !Array.isArray(t) && ("number" == typeof t || "boolean" == typeof t || null == t || ef(t) || "string" == typeof t && (ev.test(t) || !eh.test(t)) || null != e && Object.hasOwn(e, t)) ? [t] : Array.isArray(t) ? t : "string" == typeof t ? _(t) : [t], l = e;
		for (let t = 0; t < o.length && null != l; t++) {
			let a, s = g(o[t]);
			if (!y(s)) {
				if (t === o.length - 1) a = r(l[s]);
				else {
					let r = l[s], u = i?.(r, s, e);
					a = void 0 !== u ? u : x(r) ? r : ei(o[t + 1]) ? [] : {};
				}
				eO(l, s, a), l = l[s];
			}
		}
		return e;
	}(e, t, () => r, () => void 0);
}
function eS(e) {
	return "undefined" != typeof Buffer && Buffer.isBuffer(e);
}
function eA(e) {
	let t = e?.constructor;
	return e === ("function" == typeof t ? t.prototype : Object.prototype);
}
function ej(e, t) {
	if ((e = function(e) {
		var t, r;
		let i = (t = e) ? (t = ef(r = t) ? NaN : Number(r)) === Infinity || t === -Infinity ? (t < 0 ? -1 : 1) * Number.MAX_VALUE : t == t ? t : 0 : 0 === t ? t : 0, o = i % 1;
		return o ? i - o : i;
	}(e)) < 1 || !Number.isSafeInteger(e)) return [];
	let r = Array(e);
	for (let i = 0; i < e; i++) r[i] = "function" == typeof t ? t(i) : i;
	return r;
}
function eE(e) {
	if (d(e)) {
		var t = e;
		let r = ej(t.length, (e) => `${e}`), i = new Set(r);
		return eS(t) && (i.add("offset"), i.add("parent")), Z(t) && (i.add("buffer"), i.add("byteLength"), i.add("byteOffset")), [...r, ...Object.keys(t).filter((e) => !i.has(e))];
	}
	let r = Object.keys(Object(e));
	return eA(e) ? r.filter((e) => "constructor" !== e) : r;
}
function eP(e) {
	if (null == e) return [];
	switch (typeof e) {
		case "object":
		case "function":
			if (d(e)) {
				var t = e;
				let r = ej(t.length, (e) => `${e}`), i = new Set(r);
				return eS(t) && (i.add("offset"), i.add("parent")), Z(t) && (i.add("buffer"), i.add("byteLength"), i.add("byteOffset")), [...r, ...ek(t).filter((e) => !i.has(e))];
			}
			if (eA(e)) return ek(e).filter((e) => "constructor" !== e);
			return ek(e);
		default: return ek(Object(e));
	}
}
function ek(e) {
	let t = [];
	for (let r in e) t.push(r);
	return t;
}
function eR(e) {
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
function eC(e, t = h) {
	return null == e ? {} : function(e, t) {
		let r = {}, i = Object.keys(e);
		for (let o = 0; o < i.length; o++) {
			let l = i[o], a = e[l];
			r[l] = t(a, l, e);
		}
		return r;
	}(e, es(t));
}
function eT(e) {
	let t = [];
	for (; e;) t.push(...k(e)), e = Object.getPrototypeOf(e);
	return t;
}
function eM(e, ...t) {
	var r;
	if (null == e) return {};
	let i = (r = e, (t = function(e, t = 1) {
		let r = [], i = Math.floor(t);
		if (!d(e)) return r;
		let o = (e, t) => {
			for (let l = 0; l < e.length; l++) {
				let a = e[l];
				t < i && (Array.isArray(a) || a?.[Symbol.isConcatSpreadable] || null !== a && "object" == typeof a && "[object Arguments]" === Object.prototype.toString.call(a)) ? Array.isArray(a) ? o(a, t + 1) : o(Array.from(a), t + 1) : r.push(a);
			}
		};
		return o(Array.from(e), 0), r;
	}(t)).some((e) => Array.isArray(e) || m(e)) ? function(e) {
		let t = {}, r = [...eP(e), ...eT(e)];
		for (let i = 0; i < r.length; i++) {
			let o = r[i];
			t[o] = er(e[o], (e) => {
				if (!eR(e)) return e;
			});
		}
		return t;
	}(r) : function(e) {
		let t = {}, r = [...eP(e), ...eT(e)];
		for (let i = 0; i < r.length; i++) {
			let o = r[i];
			t[o] = e[o];
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
function eI(e, ...t) {
	if (null == e) return {};
	let r = {};
	for (let i = 0; i < t.length; i++) {
		let o = t[i];
		switch (typeof o) {
			case "object":
				Array.isArray(o) || (o = d(o) ? Array.from(o) : [o]);
				break;
			case "string":
			case "symbol":
			case "number": o = [o];
		}
		for (let t of o) {
			let i = w(e, t);
			(void 0 !== i || el(e, t)) && ("string" == typeof t && Object.hasOwn(e, t) ? r[t] = i : ex(r, t, i));
		}
	}
	return r;
}
function eN(e, t) {
	if (null == e) return {};
	let r = es(t ?? e_), i = {}, o = d(e) ? function(e, t, r = 1) {
		if (t ?? (t = e, e = 0), !Number.isInteger(r) || 0 === r) throw Error("The step value must be a non-zero integer.");
		let i = Math.max(Math.ceil((t - e) / r), 0), o = Array(i);
		for (let t = 0; t < i; t++) o[t] = e + t * r;
		return o;
	}(0, e.length) : [...eP(e), ...eT(e)];
	for (let t = 0; t < o.length; t++) {
		let l = ef(o[t]) ? o[t] : o[t].toString(), a = e[l];
		r(a, l, e) && (i[l] = a);
	}
	return i;
}
function e$(e) {
	return "function" == typeof e;
}
function eD(e) {
	return void 0 === e;
}
function eL(e) {
	return "boolean" == typeof e || e instanceof Boolean;
}
function eF(e) {
	if (null == e) return !0;
	if (d(e)) return ("function" == typeof e.splice || "string" == typeof e || "undefined" != typeof Buffer && !!Buffer.isBuffer(e) || !!Z(e) || !!eo(e)) && 0 === e.length;
	if ("object" == typeof e) {
		if (e instanceof Map || e instanceof Set) return 0 === e.size;
		let t = Object.keys(e);
		return eA(e) ? 0 === t.filter((e) => "constructor" !== e).length : 0 === t.length;
	}
	return !0;
}
function eV(e) {
	return Number.isInteger(e);
}
var eB = /\p{Lu}?\p{Ll}+|[0-9]+|\p{Lu}+(?!\p{Ll})|\p{Emoji_Presentation}|\p{Extended_Pictographic}|\p{L}+/gu;
function eU(e) {
	return Array.from(e.match(eB) ?? []);
}
function ez(e) {
	return "string" != typeof e && (e = b(e)), e.replace(/['\u2019]/g, "");
}
function eG(e) {
	let t = eU(ez(e));
	if (0 === t.length) return "";
	let [r, ...i] = t;
	return `${r.toLowerCase()}${i.map((e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join("")}`;
}
function eW(e) {
	return eU(ez(e)).map((e) => e.toLowerCase()).join("-");
}
function eq(e, t = 0, r = " ") {
	return b(e).padStart(t, r);
}
function eK(e) {
	let t = Object.create(null);
	for (let r of e.split(",")) t[r] = 1;
	return (e) => e in t;
}
var eH = {}, eY = [], eJ = () => {}, eX = () => !1, eZ = (e) => 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && (e.charCodeAt(2) > 122 || 97 > e.charCodeAt(2)), eQ = (e) => e.startsWith("onUpdate:"), e0 = Object.assign, e1 = (e, t) => {
	let r = e.indexOf(t);
	r > -1 && e.splice(r, 1);
}, e2 = Object.prototype.hasOwnProperty, e6 = (e, t) => e2.call(e, t), e3 = Array.isArray, e4 = (e) => "[object Map]" === tr(e), e8 = (e) => "function" == typeof e, e5 = (e) => "string" == typeof e, e7 = (e) => "symbol" == typeof e, e9 = (e) => null !== e && "object" == typeof e, te = (e) => (e9(e) || e8(e)) && e8(e.then) && e8(e.catch), tt = Object.prototype.toString, tr = (e) => tt.call(e), tn = (e) => e5(e) && "NaN" !== e && "-" !== e[0] && "" + parseInt(e, 10) === e, ti = eK(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), to = (e) => {
	let t = Object.create(null);
	return (r) => t[r] || (t[r] = e(r));
}, tl = /-\w/g, ta = to((e) => e.replace(tl, (e) => e.slice(1).toUpperCase())), ts = /\B([A-Z])/g, tu = to((e) => e.replace(ts, "-$1").toLowerCase()), tc = to((e) => e.charAt(0).toUpperCase() + e.slice(1)), tf = to((e) => e ? `on${tc(e)}` : ""), tp = (e, t) => !Object.is(e, t), td = (e, ...t) => {
	for (let r = 0; r < e.length; r++) e[r](...t);
}, th = (e, t, r, i = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: i,
		value: r
	});
}, tv = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, ty = (e) => {
	let t = e5(e) ? Number(e) : NaN;
	return isNaN(t) ? e : t;
}, tm = () => C || (C = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
function tg(e) {
	if (e3(e)) {
		let t = {};
		for (let r = 0; r < e.length; r++) {
			let i = e[r], o = e5(i) ? function(e) {
				let t = {};
				return e.replace(tw, "").split(tb).forEach((e) => {
					if (e) {
						let r = e.split(t_);
						r.length > 1 && (t[r[0].trim()] = r[1].trim());
					}
				}), t;
			}(i) : tg(i);
			if (o) for (let e in o) t[e] = o[e];
		}
		return t;
	}
	if (e5(e) || e9(e)) return e;
}
var tb = /;(?![^(]*\))/g, t_ = /:([^]+)/, tw = /\/\*[^]*?\*\//g;
function tO(e) {
	let t = "";
	if (e5(e)) t = e;
	else if (e3(e)) for (let r = 0; r < e.length; r++) {
		let i = tO(e[r]);
		i && (t += i + " ");
	}
	else if (e9(e)) for (let r in e) e[r] && (t += r + " ");
	return t.trim();
}
var tx = eK("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");
function tS(e) {
	return !!e || "" === e;
}
var tA = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = T, !e && T && (this.index = (T.scopes || (T.scopes = [])).push(this) - 1);
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
			let t = T;
			try {
				return T = this, e();
			} finally {
				T = t;
			}
		}
	}
	on() {
		1 == ++this._on && (this.prevScope = T, T = this);
	}
	off() {
		this._on > 0 && 0 == --this._on && (T = this.prevScope, this.prevScope = void 0);
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
}, tj = /* @__PURE__ */ new WeakSet(), tE = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, T && T.active && T.effects.push(this);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		64 & this.flags && (this.flags &= -65, tj.has(this) && (tj.delete(this), this.trigger()));
	}
	notify() {
		(!(2 & this.flags) || 32 & this.flags) && (8 & this.flags || tk(this));
	}
	run() {
		if (!(1 & this.flags)) return this.fn();
		this.flags |= 2, tV(this), tC(this);
		let e = M, t = t$;
		M = this, t$ = !0;
		try {
			return this.fn();
		} finally {
			tT(this), M = e, t$ = t, this.flags &= -3;
		}
	}
	stop() {
		if (1 & this.flags) {
			for (let e = this.deps; e; e = e.nextDep) tN(e);
			this.deps = this.depsTail = void 0, tV(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		64 & this.flags ? tj.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		tM(this) && this.run();
	}
	get dirty() {
		return tM(this);
	}
}, tP = 0;
function tk(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = N, N = e;
		return;
	}
	e.next = I, I = e;
}
function tR() {
	let e;
	if (!(--tP > 0)) {
		if (N) {
			let e = N;
			for (N = void 0; e;) {
				let t = e.next;
				e.next = void 0, e.flags &= -9, e = t;
			}
		}
		for (; I;) {
			let t = I;
			for (I = void 0; t;) {
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
function tC(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function tT(e) {
	let t, r = e.depsTail, i = r;
	for (; i;) {
		let e = i.prevDep;
		-1 === i.version ? (i === r && (r = e), tN(i), function(e) {
			let { prevDep: t, nextDep: r } = e;
			t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
		}(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = e;
	}
	e.deps = t, e.depsTail = r;
}
function tM(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (tI(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function tI(e) {
	if (4 & e.flags && !(16 & e.flags) || (e.flags &= -17, e.globalVersion === tB) || (e.globalVersion = tB, !e.isSSR && 128 & e.flags && (!e.deps && !e._dirty || !tM(e)))) return;
	e.flags |= 2;
	let t = e.dep, r = M, i = t$;
	M = e, t$ = !0;
	try {
		tC(e);
		let r = e.fn(e._value);
		(0 === t.version || tp(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		M = r, t$ = i, tT(e), e.flags &= -3;
	}
}
function tN(e, t = !1) {
	let { dep: r, prevSub: i, nextSub: o } = e;
	if (i && (i.nextSub = o, e.prevSub = void 0), o && (o.prevSub = i, e.nextSub = void 0), r.subs === e && (r.subs = i, !i && r.computed)) {
		r.computed.flags &= -5;
		for (let e = r.computed.deps; e; e = e.nextDep) tN(e, !0);
	}
	t || --r.sc || !r.map || r.map.delete(r.key);
}
var t$ = !0, tD = [];
function tL() {
	tD.push(t$), t$ = !1;
}
function tF() {
	let e = tD.pop();
	t$ = void 0 === e || e;
}
function tV(e) {
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
var tB = 0, tU = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, tz = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!M || !t$ || M === this.computed) return;
		let t = this.activeLink;
		if (void 0 === t || t.sub !== M) t = this.activeLink = new tU(M, this), M.deps ? (t.prevDep = M.depsTail, M.depsTail.nextDep = t, M.depsTail = t) : M.deps = M.depsTail = t, function e(t) {
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
		this.version++, tB++, this.notify(e);
	}
	notify(e) {
		tP++;
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			tR();
		}
	}
}, tG = /* @__PURE__ */ new WeakMap(), tW = Symbol(""), tq = Symbol(""), tK = Symbol("");
function tH(e, t, r) {
	if (t$ && M) {
		let t = tG.get(e);
		t || tG.set(e, t = /* @__PURE__ */ new Map());
		let i = t.get(r);
		i || (t.set(r, i = new tz()), i.map = t, i.key = r), i.track();
	}
}
function tY(e, t, r, i, o, l) {
	let a = tG.get(e);
	if (!a) return void tB++;
	let s = (e) => {
		e && e.trigger();
	};
	if (tP++, "clear" === t) a.forEach(s);
	else {
		let o = e3(e), l = o && tn(r);
		if (o && "length" === r) {
			let e = Number(i);
			a.forEach((t, r) => {
				("length" === r || r === tK || !e7(r) && r >= e) && s(t);
			});
		} else switch ((void 0 !== r || a.has(void 0)) && s(a.get(r)), l && s(a.get(tK)), t) {
			case "add":
				o ? l && s(a.get("length")) : (s(a.get(tW)), e4(e) && s(a.get(tq)));
				break;
			case "delete":
				!o && (s(a.get(tW)), e4(e) && s(a.get(tq)));
				break;
			case "set": e4(e) && s(a.get(tW));
		}
	}
	tR();
}
function tJ(e) {
	let t = rx(e);
	return t === e ? t : (tH(t, "iterate", tK), rw(e) ? t : t.map(rS));
}
function tX(e) {
	return tH(e = rx(e), "iterate", tK), e;
}
var tZ = {
	__proto__: null,
	[Symbol.iterator]() {
		return tQ(this, Symbol.iterator, rS);
	},
	concat(...e) {
		return tJ(this).concat(...e.map((e) => e3(e) ? tJ(e) : e));
	},
	entries() {
		return tQ(this, "entries", (e) => (e[1] = rS(e[1]), e));
	},
	every(e, t) {
		return t1(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return t1(this, "filter", e, t, (e) => e.map(rS), arguments);
	},
	find(e, t) {
		return t1(this, "find", e, t, rS, arguments);
	},
	findIndex(e, t) {
		return t1(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return t1(this, "findLast", e, t, rS, arguments);
	},
	findLastIndex(e, t) {
		return t1(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return t1(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return t6(this, "includes", e);
	},
	indexOf(...e) {
		return t6(this, "indexOf", e);
	},
	join(e) {
		return tJ(this).join(e);
	},
	lastIndexOf(...e) {
		return t6(this, "lastIndexOf", e);
	},
	map(e, t) {
		return t1(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return t3(this, "pop");
	},
	push(...e) {
		return t3(this, "push", e);
	},
	reduce(e, ...t) {
		return t2(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return t2(this, "reduceRight", e, t);
	},
	shift() {
		return t3(this, "shift");
	},
	some(e, t) {
		return t1(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return t3(this, "splice", e);
	},
	toReversed() {
		return tJ(this).toReversed();
	},
	toSorted(e) {
		return tJ(this).toSorted(e);
	},
	toSpliced(...e) {
		return tJ(this).toSpliced(...e);
	},
	unshift(...e) {
		return t3(this, "unshift", e);
	},
	values() {
		return tQ(this, "values", rS);
	}
};
function tQ(e, t, r) {
	let i = tX(e), o = i[t]();
	return i === e || rw(e) || (o._next = o.next, o.next = () => {
		let e = o._next();
		return e.done || (e.value = r(e.value)), e;
	}), o;
}
var t0 = Array.prototype;
function t1(e, t, r, i, o, l) {
	let a = tX(e), s = a !== e && !rw(e), u = a[t];
	if (u !== t0[t]) {
		let t = u.apply(e, l);
		return s ? rS(t) : t;
	}
	let c = r;
	a !== e && (s ? c = function(t, i) {
		return r.call(this, rS(t), i, e);
	} : r.length > 2 && (c = function(t, i) {
		return r.call(this, t, i, e);
	}));
	let f = u.call(a, c, i);
	return s && o ? o(f) : f;
}
function t2(e, t, r, i) {
	let o = tX(e), l = r;
	return o !== e && (rw(e) ? r.length > 3 && (l = function(t, i, o) {
		return r.call(this, t, i, o, e);
	}) : l = function(t, i, o) {
		return r.call(this, t, rS(i), o, e);
	}), o[t](l, ...i);
}
function t6(e, t, r) {
	let i = rx(e);
	tH(i, "iterate", tK);
	let o = i[t](...r);
	return (-1 === o || !1 === o) && rO(r[0]) ? (r[0] = rx(r[0]), i[t](...r)) : o;
}
function t3(e, t, r = []) {
	tL(), tP++;
	let i = rx(e)[t].apply(e, r);
	return tR(), tF(), i;
}
var t4 = eK("__proto__,__v_isRef,__isVue"), t8 = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => "arguments" !== e && "caller" !== e).map((e) => Symbol[e]).filter(e7));
function t5(e) {
	e7(e) || (e = String(e));
	let t = rx(this);
	return tH(t, "has", e), t.hasOwnProperty(e);
}
var t7 = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, r) {
		if ("__v_skip" === t) return e.__v_skip;
		let i = this._isReadonly, o = this._isShallow;
		if ("__v_isReactive" === t) return !i;
		if ("__v_isReadonly" === t) return i;
		if ("__v_isShallow" === t) return o;
		if ("__v_raw" === t) return r === (i ? o ? rh : rd : o ? rp : rf).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(r) ? e : void 0;
		let l = e3(e);
		if (!i) {
			let e;
			if (l && (e = tZ[t])) return e;
			if ("hasOwnProperty" === t) return t5;
		}
		let a = Reflect.get(e, t, rj(e) ? e : r);
		if ((e7(t) ? t8.has(t) : t4(t)) || (i || tH(e, "get", t), o)) return a;
		if (rj(a)) {
			let e = l && tn(t) ? a : a.value;
			return i && e9(e) ? rm(e) : e;
		}
		return e9(a) ? i ? rm(a) : rv(a) : a;
	}
}, t9 = class extends t7 {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, r, i) {
		let o = e[t];
		if (!this._isShallow) {
			let t = r_(o);
			if (rw(r) || r_(r) || (o = rx(o), r = rx(r)), !e3(e) && rj(o) && !rj(r)) if (t) return !0;
			else return o.value = r, !0;
		}
		let l = e3(e) && tn(t) ? Number(t) < e.length : e6(e, t), a = Reflect.set(e, t, r, rj(e) ? e : i);
		return e === rx(i) && (l ? tp(r, o) && tY(e, "set", t, r, o) : tY(e, "add", t, r)), a;
	}
	deleteProperty(e, t) {
		let r = e6(e, t), i = e[t], o = Reflect.deleteProperty(e, t);
		return o && r && tY(e, "delete", t, void 0, i), o;
	}
	has(e, t) {
		let r = Reflect.has(e, t);
		return e7(t) && t8.has(t) || tH(e, "has", t), r;
	}
	ownKeys(e) {
		return tH(e, "iterate", e3(e) ? "length" : tW), Reflect.ownKeys(e);
	}
}, re = class extends t7 {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, rt = new t9(), rr = new re(), rn = new t9(!0), ri = (e) => e, ro = (e) => Reflect.getPrototypeOf(e);
function rl(e) {
	return function() {
		return "delete" !== e && ("clear" === e ? void 0 : this);
	};
}
function ra(e, t) {
	let r = function(e, t) {
		let r = {
			get(r) {
				let i = this.__v_raw, o = rx(i), l = rx(r);
				e || (tp(r, l) && tH(o, "get", r), tH(o, "get", l));
				let { has: a } = ro(o), s = t ? ri : e ? rA : rS;
				return a.call(o, r) ? s(i.get(r)) : a.call(o, l) ? s(i.get(l)) : void (i !== o && i.get(r));
			},
			get size() {
				let t = this.__v_raw;
				return e || tH(rx(t), "iterate", tW), t.size;
			},
			has(t) {
				let r = this.__v_raw, i = rx(r), o = rx(t);
				return e || (tp(t, o) && tH(i, "has", t), tH(i, "has", o)), t === o ? r.has(t) : r.has(t) || r.has(o);
			},
			forEach(r, i) {
				let o = this, l = o.__v_raw, a = rx(l), s = t ? ri : e ? rA : rS;
				return e || tH(a, "iterate", tW), l.forEach((e, t) => r.call(i, s(e), s(t), o));
			}
		};
		return e0(r, e ? {
			add: rl("add"),
			set: rl("set"),
			delete: rl("delete"),
			clear: rl("clear")
		} : {
			add(e) {
				t || rw(e) || r_(e) || (e = rx(e));
				let r = rx(this);
				return ro(r).has.call(r, e) || (r.add(e), tY(r, "add", e, e)), this;
			},
			set(e, r) {
				t || rw(r) || r_(r) || (r = rx(r));
				let i = rx(this), { has: o, get: l } = ro(i), a = o.call(i, e);
				a || (e = rx(e), a = o.call(i, e));
				let s = l.call(i, e);
				return i.set(e, r), a ? tp(r, s) && tY(i, "set", e, r, s) : tY(i, "add", e, r), this;
			},
			delete(e) {
				let t = rx(this), { has: r, get: i } = ro(t), o = r.call(t, e);
				o || (e = rx(e), o = r.call(t, e));
				let l = i ? i.call(t, e) : void 0, a = t.delete(e);
				return o && tY(t, "delete", e, void 0, l), a;
			},
			clear() {
				let e = rx(this), t = 0 !== e.size, r = e.clear();
				return t && tY(e, "clear", void 0, void 0, void 0), r;
			}
		}), [
			"keys",
			"values",
			"entries",
			Symbol.iterator
		].forEach((i) => {
			r[i] = function(...r) {
				let o = this.__v_raw, l = rx(o), a = e4(l), s = "entries" === i || i === Symbol.iterator && a, u = o[i](...r), c = t ? ri : e ? rA : rS;
				return e || tH(l, "iterate", "keys" === i && a ? tq : tW), {
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
	return (t, i, o) => "__v_isReactive" === i ? !e : "__v_isReadonly" === i ? e : "__v_raw" === i ? t : Reflect.get(e6(r, i) && i in t ? r : t, i, o);
}
var rs = { get: ra(!1, !1) }, ru = { get: ra(!1, !0) }, rc = { get: ra(!0, !1) }, rf = /* @__PURE__ */ new WeakMap(), rp = /* @__PURE__ */ new WeakMap(), rd = /* @__PURE__ */ new WeakMap(), rh = /* @__PURE__ */ new WeakMap();
function rv(e) {
	return r_(e) ? e : rg(e, !1, rt, rs, rf);
}
function ry(e) {
	return rg(e, !1, rn, ru, rp);
}
function rm(e) {
	return rg(e, !0, rr, rc, rd);
}
function rg(e, t, r, i, o) {
	var l;
	if (!e9(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
	let a = (l = e).__v_skip || !Object.isExtensible(l) ? 0 : function(e) {
		switch (e) {
			case "Object":
			case "Array": return 1;
			case "Map":
			case "Set":
			case "WeakMap":
			case "WeakSet": return 2;
			default: return 0;
		}
	}(tr(l).slice(8, -1));
	if (0 === a) return e;
	let s = o.get(e);
	if (s) return s;
	let u = new Proxy(e, 2 === a ? i : r);
	return o.set(e, u), u;
}
function rb(e) {
	return r_(e) ? rb(e.__v_raw) : !!(e && e.__v_isReactive);
}
function r_(e) {
	return !!(e && e.__v_isReadonly);
}
function rw(e) {
	return !!(e && e.__v_isShallow);
}
function rO(e) {
	return !!e && !!e.__v_raw;
}
function rx(e) {
	let t = e && e.__v_raw;
	return t ? rx(t) : e;
}
var rS = (e) => e9(e) ? rv(e) : e, rA = (e) => e9(e) ? rm(e) : e;
function rj(e) {
	return !!e && !0 === e.__v_isRef;
}
function rE(e) {
	return rk(e, !1);
}
function rP(e) {
	return rk(e, !0);
}
function rk(e, t) {
	return rj(e) ? e : new rR(e, t);
}
var rR = class {
	constructor(e, t) {
		this.dep = new tz(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : rx(e), this._value = t ? e : rS(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, r = this.__v_isShallow || rw(e) || r_(e);
		tp(e = r ? e : rx(e), t) && (this._rawValue = e, this._value = r ? e : rS(e), this.dep.trigger());
	}
};
function rC(e) {
	return rj(e) ? e.value : e;
}
var rT = {
	get: (e, t, r) => "__v_raw" === t ? e : rC(Reflect.get(e, t, r)),
	set: (e, t, r, i) => {
		let o = e[t];
		return rj(o) && !rj(r) ? (o.value = r, !0) : Reflect.set(e, t, r, i);
	}
};
function rM(e) {
	return rb(e) ? e : new Proxy(e, rT);
}
var rI = class {
	constructor(e) {
		this.__v_isRef = !0, this._value = void 0;
		let t = this.dep = new tz(), { get: r, set: i } = e(t.track.bind(t), t.trigger.bind(t));
		this._get = r, this._set = i;
	}
	get value() {
		return this._value = this._get();
	}
	set value(e) {
		this._set(e);
	}
}, rN = class {
	constructor(e, t, r) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new tz(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = tB - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = r;
	}
	notify() {
		if (this.flags |= 16, !(8 & this.flags) && M !== this) return tk(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return tI(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
}, r$ = {}, rD = /* @__PURE__ */ new WeakMap(), rL = void 0;
function rF(e, t = Infinity, r) {
	if (t <= 0 || !e9(e) || e.__v_skip || ((r = r || /* @__PURE__ */ new Map()).get(e) || 0) >= t) return e;
	if (r.set(e, t), t--, rj(e)) rF(e.value, t, r);
	else if (e3(e)) for (let i = 0; i < e.length; i++) rF(e[i], t, r);
	else if ("[object Set]" === tr(e) || e4(e)) e.forEach((e) => {
		rF(e, t, r);
	});
	else if ("[object Object]" === tr(e)) {
		for (let i in e) rF(e[i], t, r);
		for (let i of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, i) && rF(e[i], t, r);
	}
	return e;
}
function rV(e, t, r, i) {
	try {
		return i ? e(...i) : e();
	} catch (e) {
		rU(e, t, r);
	}
}
function rB(e, t, r, i) {
	if (e8(e)) {
		let o = rV(e, t, r, i);
		return o && te(o) && o.catch((e) => {
			rU(e, t, r);
		}), o;
	}
	if (e3(e)) {
		let o = [];
		for (let l = 0; l < e.length; l++) o.push(rB(e[l], t, r, i));
		return o;
	}
}
function rU(e, t, r, i = !0) {
	t && t.vnode;
	let { errorHandler: l, throwUnhandledErrorInProduction: a } = t && t.appContext.config || eH;
	if (t) {
		let i = t.parent, o = t.proxy, a = `https://vuejs.org/error-reference/#runtime-${r}`;
		for (; i;) {
			let t = i.ec;
			if (t) {
				for (let r = 0; r < t.length; r++) if (!1 === t[r](e, o, a)) return;
			}
			i = i.parent;
		}
		if (l) {
			tL(), rV(l, null, 10, [
				e,
				o,
				a
			]), tF();
			return;
		}
	}
	(function(e, t, r, i = !0, o = !1) {
		if (o) throw e;
		console.error(e);
	})(e, 0, 0, i, a);
}
var rz = [], rG = -1, rW = [], rq = null, rK = 0, rH = Promise.resolve(), rY = null;
function rJ(e) {
	let t = rY || rH;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function rX(e) {
	if (!(1 & e.flags)) {
		let t = r1(e), r = rz[rz.length - 1];
		!r || !(2 & e.flags) && t >= r1(r) ? rz.push(e) : rz.splice(function(e) {
			let t = rG + 1, r = rz.length;
			for (; t < r;) {
				let i = t + r >>> 1, o = rz[i], l = r1(o);
				l < e || l === e && 2 & o.flags ? t = i + 1 : r = i;
			}
			return t;
		}(t), 0, e), e.flags |= 1, rZ();
	}
}
function rZ() {
	rY || (rY = rH.then(function e(t) {
		try {
			for (rG = 0; rG < rz.length; rG++) {
				let e = rz[rG];
				e && !(8 & e.flags) && (4 & e.flags && (e.flags &= -2), rV(e, e.i, e.i ? 15 : 14), 4 & e.flags || (e.flags &= -2));
			}
		} finally {
			for (; rG < rz.length; rG++) {
				let e = rz[rG];
				e && (e.flags &= -2);
			}
			rG = -1, rz.length = 0, r0(t), rY = null, (rz.length || rW.length) && e(t);
		}
	}));
}
function rQ(e, t, r = rG + 1) {
	for (; r < rz.length; r++) {
		let t = rz[r];
		if (t && 2 & t.flags) {
			if (e && t.id !== e.uid) continue;
			rz.splice(r, 1), r--, 4 & t.flags && (t.flags &= -2), t(), 4 & t.flags || (t.flags &= -2);
		}
	}
}
function r0(e) {
	if (rW.length) {
		let e = [...new Set(rW)].sort((e, t) => r1(e) - r1(t));
		if (rW.length = 0, rq) return void rq.push(...e);
		for (rK = 0, rq = e; rK < rq.length; rK++) {
			let e = rq[rK];
			4 & e.flags && (e.flags &= -2), 8 & e.flags || e(), e.flags &= -2;
		}
		rq = null, rK = 0;
	}
}
var r1 = (e) => null == e.id ? 2 & e.flags ? -1 : Infinity : e.id, r2 = null, r6 = null;
function r3(e) {
	let t = r2;
	return r2 = e, r6 = e && e.type.__scopeId || null, t;
}
function r4(e, t, r, i) {
	let o = e.dirs, l = t && t.dirs;
	for (let a = 0; a < o.length; a++) {
		let s = o[a];
		l && (s.oldValue = l[a].value);
		let u = s.dir[i];
		u && (tL(), rB(u, r, 8, [
			e.el,
			s,
			e,
			t
		]), tF());
	}
}
var r8 = Symbol("_vte"), r5 = (e) => e && (e.disabled || "" === e.disabled), r7 = (e) => e && (e.defer || "" === e.defer), r9 = (e) => "undefined" != typeof SVGElement && e instanceof SVGElement, ne = (e) => "function" == typeof MathMLElement && e instanceof MathMLElement, nt = (e, t) => {
	let r = e && e.to;
	return e5(r) ? t ? t(r) : null : r;
}, nr = {
	name: "Teleport",
	__isTeleport: !0,
	process(e, t, r, i, o, l, a, s, u, c) {
		let { mc: f, pc: p, pbc: d, o: { insert: h, querySelector: y, createText: m, createComment: g } } = c, b = r5(t.props), { shapeFlag: _, children: w, dynamicChildren: O } = t;
		if (null == e) {
			let e = t.el = m(""), c = t.anchor = m("");
			h(e, r, i), h(c, r, i);
			let p = (e, t) => {
				16 & _ && f(w, e, t, o, l, a, s, u);
			}, d = () => {
				let e = t.target = nt(t.props, y), r = nl(e, t, m, h);
				e && ("svg" !== a && r9(e) ? a = "svg" : "mathml" !== a && ne(e) && (a = "mathml"), o && o.isCE && (o.ce._teleportTargets || (o.ce._teleportTargets = /* @__PURE__ */ new Set())).add(e), b || (p(e, r), no(t, !1)));
			};
			b && (p(r, c), no(t, !0)), r7(t.props) ? (t.el.__isMounted = !1, id(() => {
				d(), delete t.el.__isMounted;
			}, l)) : d();
		} else {
			if (r7(t.props) && !1 === e.el.__isMounted) return void id(() => {
				nr.process(e, t, r, i, o, l, a, s, u, c);
			}, l);
			t.el = e.el, t.targetStart = e.targetStart;
			let f = t.anchor = e.anchor, h = t.target = e.target, m = t.targetAnchor = e.targetAnchor, g = r5(e.props), _ = g ? r : h, w = g ? f : m;
			if ("svg" === a || r9(h) ? a = "svg" : ("mathml" === a || ne(h)) && (a = "mathml"), O ? (d(e.dynamicChildren, O, _, o, l, a, s), im(e, t, !0)) : u || p(e, t, _, w, o, l, a, s, !1), b) g ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : nn(t, r, f, c, 1);
			else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
				let e = t.target = nt(t.props, y);
				e && nn(t, e, null, c, 0);
			} else g && nn(t, h, m, c, 1);
			no(t, b);
		}
	},
	remove(e, t, r, { um: i, o: { remove: o } }, l) {
		let { shapeFlag: a, children: s, anchor: u, targetStart: c, targetAnchor: f, target: p, props: d } = e;
		if (p && (o(c), o(f)), l && o(u), 16 & a) {
			let e = l || !r5(d);
			for (let o = 0; o < s.length; o++) {
				let l = s[o];
				i(l, t, r, e, !!l.dynamicChildren);
			}
		}
	},
	move: nn,
	hydrate: function(e, t, r, i, o, l, { o: { nextSibling: a, parentNode: s, querySelector: u, insert: c, createText: f } }, p) {
		function d(e, t, u, c) {
			t.anchor = p(a(e), t, s(e), r, i, o, l), t.targetStart = u, t.targetAnchor = c;
		}
		let h = t.target = nt(t.props, u), y = r5(t.props);
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
				t.targetAnchor || nl(h, t, f, c), p(s && a(s), t, h, r, i, o, l);
			}
			no(t, y);
		} else y && 16 & t.shapeFlag && d(e, t, e, a(e));
		return t.anchor && a(t.anchor);
	}
};
function nn(e, t, r, { o: { insert: i }, m: o }, l = 2) {
	0 === l && i(e.targetAnchor, t, r);
	let { el: a, anchor: s, shapeFlag: u, children: c, props: f } = e, p = 2 === l;
	if (p && i(a, t, r), (!p || r5(f)) && 16 & u) for (let e = 0; e < c.length; e++) o(c[e], t, r, 2);
	p && i(s, t, r);
}
var ni = nr;
function no(e, t) {
	let r = e.ctx;
	if (r && r.ut) {
		let i, o;
		for (t ? (i = e.el, o = e.anchor) : (i = e.targetStart, o = e.targetAnchor); i && i !== o;) 1 === i.nodeType && i.setAttribute("data-v-owner", r.uid), i = i.nextSibling;
		r.ut();
	}
}
function nl(e, t, r, i) {
	let o = t.targetStart = r(""), l = t.targetAnchor = r("");
	return o[r8] = l, e && (i(o, e), i(l, e)), l;
}
var na = Symbol("_leaveCb"), ns = Symbol("_enterCb"), nu = [Function, Array], nc = {
	mode: String,
	appear: Boolean,
	persisted: Boolean,
	onBeforeEnter: nu,
	onEnter: nu,
	onAfterEnter: nu,
	onEnterCancelled: nu,
	onBeforeLeave: nu,
	onLeave: nu,
	onAfterLeave: nu,
	onLeaveCancelled: nu,
	onBeforeAppear: nu,
	onAppear: nu,
	onAfterAppear: nu,
	onAppearCancelled: nu
}, nf = (e) => {
	let t = e.subTree;
	return t.component ? nf(t.component) : t;
};
function np(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let r of e) if (r.type !== iI) {
			t = r;
			break;
		}
	}
	return t;
}
var nd = {
	name: "BaseTransition",
	props: nc,
	setup(e, { slots: t }) {
		let r = iZ(), i = function() {
			let e = {
				isMounted: !1,
				isLeaving: !1,
				isUnmounting: !1,
				leavingVNodes: /* @__PURE__ */ new Map()
			};
			return nT(() => {
				e.isMounted = !0;
			}), nN(() => {
				e.isUnmounting = !0;
			}), e;
		}();
		return () => {
			let o = t.default && function e(t, r = !1, i) {
				let o = [], l = 0;
				for (let a = 0; a < t.length; a++) {
					let s = t[a], u = null == i ? s.key : String(i) + String(null != s.key ? s.key : a);
					s.type === iT ? (128 & s.patchFlag && l++, o = o.concat(e(s.children, r, u))) : (r || s.type !== iI) && o.push(null != u ? iG(s, { key: u }) : s);
				}
				if (l > 1) for (let e = 0; e < o.length; e++) o[e].patchFlag = -2;
				return o;
			}(t.default(), !0);
			if (!o || !o.length) return;
			let l = np(o), a = rx(e), { mode: s } = a;
			if (i.isLeaving) return ny(l);
			let u = nm(l);
			if (!u) return ny(l);
			let c = nv(u, a, i, r, (e) => c = e);
			u.type !== iI && ng(u, c);
			let f = r.subTree && nm(r.subTree);
			if (f && f.type !== iI && !iV(f, u) && nf(r).type !== iI) {
				let e = nv(f, a, i, r);
				if (ng(f, e), "out-in" === s && u.type !== iI) return i.isLeaving = !0, e.afterLeave = () => {
					i.isLeaving = !1, 8 & r.job.flags || r.update(), delete e.afterLeave, f = void 0;
				}, ny(l);
				"in-out" === s && u.type !== iI ? e.delayLeave = (e, t, r) => {
					nh(i, f)[String(f.key)] = f, e[na] = () => {
						t(), e[na] = void 0, delete c.delayedLeave, f = void 0;
					}, c.delayedLeave = () => {
						r(), delete c.delayedLeave, f = void 0;
					};
				} : f = void 0;
			} else f && (f = void 0);
			return l;
		};
	}
};
function nh(e, t) {
	let { leavingVNodes: r } = e, i = r.get(t.type);
	return i || (i = Object.create(null), r.set(t.type, i)), i;
}
function nv(e, t, r, i, o) {
	let { appear: l, mode: a, persisted: s = !1, onBeforeEnter: u, onEnter: c, onAfterEnter: f, onEnterCancelled: p, onBeforeLeave: d, onLeave: h, onAfterLeave: y, onLeaveCancelled: m, onBeforeAppear: g, onAppear: b, onAfterAppear: _, onAppearCancelled: w } = t, O = String(e.key), x = nh(r, e), S = (e, t) => {
		e && rB(e, i, 9, t);
	}, A = (e, t) => {
		let r = t[1];
		S(e, t), e3(e) ? e.every((e) => e.length <= 1) && r() : e.length <= 1 && r();
	}, j = {
		mode: a,
		persisted: s,
		beforeEnter(t) {
			let i = u;
			if (!r.isMounted) if (!l) return;
			else i = g || u;
			t[na] && t[na](!0);
			let o = x[O];
			o && iV(e, o) && o.el[na] && o.el[na](), S(i, [t]);
		},
		enter(e) {
			let t = c, i = f, o = p;
			if (!r.isMounted) if (!l) return;
			else t = b || c, i = _ || f, o = w || p;
			let a = !1, s = e[ns] = (t) => {
				a || (a = !0, t ? S(o, [e]) : S(i, [e]), j.delayedLeave && j.delayedLeave(), e[ns] = void 0);
			};
			t ? A(t, [e, s]) : s();
		},
		leave(t, i) {
			let o = String(e.key);
			if (t[ns] && t[ns](!0), r.isUnmounting) return i();
			S(d, [t]);
			let l = !1, a = t[na] = (r) => {
				l || (l = !0, i(), r ? S(m, [t]) : S(y, [t]), t[na] = void 0, x[o] === e && delete x[o]);
			};
			x[o] = e, h ? A(h, [t, a]) : a();
		},
		clone(e) {
			let l = nv(e, t, r, i, o);
			return o && o(l), l;
		}
	};
	return j;
}
function ny(e) {
	if (nA(e)) return (e = iG(e)).children = null, e;
}
function nm(e) {
	if (!nA(e)) return e.type.__isTeleport && e.children ? np(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: r } = e;
	if (r) {
		if (16 & t) return r[0];
		if (32 & t && e8(r.default)) return r.default();
	}
}
function ng(e, t) {
	6 & e.shapeFlag && e.component ? (e.transition = t, ng(e.component.subTree, t)) : 128 & e.shapeFlag ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function nb(e, t) {
	return e8(e) ? e0({ name: e.name }, t, { setup: e }) : e;
}
function n_(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
var nw = /* @__PURE__ */ new WeakMap();
function nO(e, t, r, i, o = !1) {
	if (e3(e)) return void e.forEach((e, l) => nO(e, t && (e3(t) ? t[l] : t), r, i, o));
	if (nS(i) && !o) {
		512 & i.shapeFlag && i.type.__asyncResolved && i.component.subTree.component && nO(e, t, r, i.component.subTree);
		return;
	}
	let l = 4 & i.shapeFlag ? i8(i.component) : i.el, a = o ? null : l, { i: s, r: u } = e, c = t && t.r, f = s.refs === eH ? s.refs = {} : s.refs, p = s.setupState, d = rx(p), h = p === eH ? eX : (e) => e6(d, e);
	if (null != c && c !== u && ((nx(t), e5(c)) ? (f[c] = null, h(c) && (p[c] = null)) : rj(c) && (c.value = null, t.k && (f[t.k] = null))), e8(u)) rV(u, s, 12, [a, f]);
	else {
		let t = e5(u), i = rj(u);
		if (t || i) {
			let s = () => {
				if (e.f) {
					let r = t ? h(u) ? p[u] : f[u] : u.value;
					if (o) e3(r) && e1(r, l);
					else if (e3(r)) r.includes(l) || r.push(l);
					else if (t) f[u] = [l], h(u) && (p[u] = f[u]);
					else {
						let t = [l];
						u.value = t, e.k && (f[e.k] = t);
					}
				} else t ? (f[u] = a, h(u) && (p[u] = a)) : i && (u.value = a, e.k && (f[e.k] = a));
			};
			if (a) {
				let t = () => {
					s(), nw.delete(e);
				};
				t.id = -1, nw.set(e, t), id(t, r);
			} else nx(e), s();
		}
	}
}
function nx(e) {
	let t = nw.get(e);
	t && (t.flags |= 8, nw.delete(e));
}
tm().requestIdleCallback, tm().cancelIdleCallback;
var nS = (e) => !!e.type.__asyncLoader, nA = (e) => e.type.__isKeepAlive;
function nj(e, t) {
	nP(e, "a", t);
}
function nE(e, t) {
	nP(e, "da", t);
}
function nP(e, t, r = iX) {
	let i = e.__wdc || (e.__wdc = () => {
		let t = r;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	});
	if (nk(t, i, r), r) {
		let e = r.parent;
		for (; e && e.parent;) nA(e.parent.vnode) && function(e, t, r, i) {
			let o = nk(t, e, i, !0);
			n$(() => {
				e1(i[t], o);
			}, r);
		}(i, t, r, e), e = e.parent;
	}
}
function nk(e, t, r = iX, i = !1) {
	if (r) {
		let o = r[e] || (r[e] = []), l = t.__weh || (t.__weh = (...i) => {
			tL();
			let o = iQ(r), l = rB(t, r, e, i);
			return o(), tF(), l;
		});
		return i ? o.unshift(l) : o.push(l), l;
	}
}
var nR = (e) => (t, r = iX) => {
	i2 && "sp" !== e || nk(e, (...e) => t(...e), r);
}, nC = nR("bm"), nT = nR("m"), nM = nR("bu"), nI = nR("u"), nN = nR("bum"), n$ = nR("um"), nD = nR("sp"), nL = nR("rtg"), nF = nR("rtc");
function nV(e, t = iX) {
	nk("ec", e, t);
}
var nB = Symbol.for("v-ndc"), nU = (e) => e ? i1(e) ? i8(e) : nU(e.parent) : null, nz = e0(Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => nU(e.parent),
	$root: (e) => nU(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => nY(e),
	$forceUpdate: (e) => e.f || (e.f = () => {
		rX(e.update);
	}),
	$nextTick: (e) => e.n || (e.n = rJ.bind(e.proxy)),
	$watch: (e) => iO.bind(e)
}), nG = (e, t) => e !== eH && !e.__isScriptSetup && e6(e, t), nW = {
	get({ _: e }, t) {
		let r, i, o;
		if ("__v_skip" === t) return !0;
		let { ctx: l, setupState: a, data: s, props: u, accessCache: c, type: f, appContext: p } = e;
		if ("$" !== t[0]) {
			let i = c[t];
			if (void 0 !== i) switch (i) {
				case 1: return a[t];
				case 2: return s[t];
				case 4: return l[t];
				case 3: return u[t];
			}
			else {
				if (nG(a, t)) return c[t] = 1, a[t];
				if (s !== eH && e6(s, t)) return c[t] = 2, s[t];
				if ((r = e.propsOptions[0]) && e6(r, t)) return c[t] = 3, u[t];
				if (l !== eH && e6(l, t)) return c[t] = 4, l[t];
				nK && (c[t] = 0);
			}
		}
		let d = nz[t];
		return d ? ("$attrs" === t && tH(e.attrs, "get", ""), d(e)) : (i = f.__cssModules) && (i = i[t]) ? i : l !== eH && e6(l, t) ? (c[t] = 4, l[t]) : e6(o = p.config.globalProperties, t) ? o[t] : void 0;
	},
	set({ _: e }, t, r) {
		let { data: i, setupState: o, ctx: l } = e;
		return nG(o, t) ? (o[t] = r, !0) : i !== eH && e6(i, t) ? (i[t] = r, !0) : !e6(e.props, t) && !("$" === t[0] && t.slice(1) in e) && (l[t] = r, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: r, ctx: i, appContext: o, propsOptions: l, type: a } }, s) {
		let u, c;
		return !!(r[s] || e !== eH && "$" !== s[0] && e6(e, s) || nG(t, s) || (u = l[0]) && e6(u, s) || e6(i, s) || e6(nz, s) || e6(o.config.globalProperties, s) || (c = a.__cssModules) && c[s]);
	},
	defineProperty(e, t, r) {
		return null != r.get ? e._.accessCache[t] = 0 : e6(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
	}
};
function nq(e) {
	return e3(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var nK = !0;
function nH(e, t, r) {
	rB(e3(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, r);
}
function nY(e) {
	let t, r = e.type, { mixins: i, extends: o } = r, { mixins: l, optionsCache: a, config: { optionMergeStrategies: s } } = e.appContext, u = a.get(r);
	return u ? t = u : l.length || i || o ? (t = {}, l.length && l.forEach((e) => nJ(t, e, s, !0)), nJ(t, r, s)) : t = r, e9(r) && a.set(r, t), t;
}
function nJ(e, t, r, i = !1) {
	let { mixins: o, extends: l } = t;
	for (let a in l && nJ(e, l, r, !0), o && o.forEach((t) => nJ(e, t, r, !0)), t) if (i && "expose" === a);
	else {
		let i = nX[a] || r && r[a];
		e[a] = i ? i(e[a], t[a]) : t[a];
	}
	return e;
}
var nX = {
	data: nZ,
	props: n2,
	emits: n2,
	methods: n1,
	computed: n1,
	beforeCreate: n0,
	created: n0,
	beforeMount: n0,
	mounted: n0,
	beforeUpdate: n0,
	updated: n0,
	beforeDestroy: n0,
	beforeUnmount: n0,
	destroyed: n0,
	unmounted: n0,
	activated: n0,
	deactivated: n0,
	errorCaptured: n0,
	serverPrefetch: n0,
	components: n1,
	directives: n1,
	watch: function(e, t) {
		if (!e) return t;
		if (!t) return e;
		let r = e0(Object.create(null), e);
		for (let i in t) r[i] = n0(e[i], t[i]);
		return r;
	},
	provide: nZ,
	inject: function(e, t) {
		return n1(nQ(e), nQ(t));
	}
};
function nZ(e, t) {
	return t ? e ? function() {
		return e0(e8(e) ? e.call(this, this) : e, e8(t) ? t.call(this, this) : t);
	} : t : e;
}
function nQ(e) {
	if (e3(e)) {
		let t = {};
		for (let r = 0; r < e.length; r++) t[e[r]] = e[r];
		return t;
	}
	return e;
}
function n0(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function n1(e, t) {
	return e ? e0(Object.create(null), e, t) : t;
}
function n2(e, t) {
	return e ? e3(e) && e3(t) ? [...new Set([...e, ...t])] : e0(Object.create(null), nq(e), nq(null != t ? t : {})) : t;
}
function n6() {
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
var n3 = 0, n4 = null;
function n8(e, t) {
	if (iX) {
		let r = iX.provides, i = iX.parent && iX.parent.provides;
		i === r && (r = iX.provides = Object.create(i)), r[e] = t;
	}
}
function n5(e, t, r = !1) {
	let i = iZ();
	if (i || n4) {
		let o = n4 ? n4._context.provides : i ? null == i.parent || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
		if (o && e in o) return o[e];
		if (arguments.length > 1) return r && e8(t) ? t.call(i && i.proxy) : t;
	}
}
var n7 = {}, n9 = () => Object.create(n7), ie = (e) => Object.getPrototypeOf(e) === n7;
function it(e, t, r, i) {
	let o, [l, a] = e.propsOptions, s = !1;
	if (t) for (let u in t) {
		let c;
		if (ti(u)) continue;
		let f = t[u];
		l && e6(l, c = ta(u)) ? a && a.includes(c) ? (o || (o = {}))[c] = f : r[c] = f : ij(e.emitsOptions, u) || u in i && f === i[u] || (i[u] = f, s = !0);
	}
	if (a) {
		let t = rx(r), i = o || eH;
		for (let o = 0; o < a.length; o++) {
			let s = a[o];
			r[s] = ir(l, t, s, i[s], e, !e6(i, s));
		}
	}
	return s;
}
function ir(e, t, r, i, o, l) {
	let a = e[r];
	if (null != a) {
		let e = e6(a, "default");
		if (e && void 0 === i) {
			let e = a.default;
			if (a.type !== Function && !a.skipFactory && e8(e)) {
				let { propsDefaults: l } = o;
				if (r in l) i = l[r];
				else {
					let a = iQ(o);
					i = l[r] = e.call(null, t), a();
				}
			} else i = e;
			o.ce && o.ce._setProp(r, i);
		}
		a[0] && (l && !e ? i = !1 : a[1] && ("" === i || i === tu(r)) && (i = !0));
	}
	return i;
}
var ii = /* @__PURE__ */ new WeakMap();
function io(e) {
	return !("$" === e[0] || ti(e));
}
var il = (e) => "_" === e || "_ctx" === e || "$stable" === e, ia = (e) => e3(e) ? e.map(iW) : [iW(e)], is = (e, t, r) => {
	if (t._n) return t;
	let i = function(e, t = r2, r) {
		if (!t || e._n) return e;
		let i = (...r) => {
			let o;
			i._d && iL(-1);
			let l = r3(t);
			try {
				o = e(...r);
			} finally {
				r3(l), i._d && iL(1);
			}
			return o;
		};
		return i._n = !0, i._c = !0, i._d = !0, i;
	}((...e) => ia(t(...e)), r);
	return i._c = !1, i;
}, iu = (e, t, r) => {
	let i = e._ctx;
	for (let r in e) {
		if (il(r)) continue;
		let o = e[r];
		if (e8(o)) t[r] = is(r, o, i);
		else if (null != o) {
			let e = ia(o);
			t[r] = () => e;
		}
	}
}, ic = (e, t) => {
	let r = ia(t);
	e.slots.default = () => r;
}, ip = (e, t, r) => {
	for (let i in t) (r || !il(i)) && (e[i] = t[i]);
}, id = function(e, t) {
	if (t && t.pendingBranch) e3(e) ? t.effects.push(...e) : t.effects.push(e);
	else e3(e) ? rW.push(...e) : rq && -1 === e.id ? rq.splice(rK + 1, 0, e) : 1 & e.flags || (rW.push(e), e.flags |= 1), rZ();
};
function ih(e) {
	return function(e, t) {
		var r;
		let i, o;
		tm().__VUE__ = !0;
		let { insert: l, remove: a, patchProp: s, createElement: u, createText: c, createComment: f, setText: p, setElementText: d, parentNode: h, nextSibling: y, setScopeId: m = eJ, insertStaticContent: g } = e, b = (e, t, r, i = null, o = null, l = null, a, s = null, u = !!t.dynamicChildren) => {
			if (e === t) return;
			e && !iV(e, t) && (i = q(e), B(e, o, l, !0), e = null), -2 === t.patchFlag && (u = !1, t.dynamicChildren = null);
			let { type: c, ref: f, shapeFlag: p } = t;
			switch (c) {
				case iM:
					_(e, t, r, i);
					break;
				case iI:
					w(e, t, r, i);
					break;
				case iN:
					e ?? O(t, r, i, a);
					break;
				case iT:
					R(e, t, r, i, o, l, a, s, u);
					break;
				default: 1 & p ? x(e, t, r, i, o, l, a, s, u) : 6 & p ? C(e, t, r, i, o, l, a, s, u) : 64 & p ? c.process(e, t, r, i, o, l, a, s, u, Y) : 128 & p && c.process(e, t, r, i, o, l, a, s, u, Y);
			}
			null != f && o ? nO(f, e && e.ref, l, t || e, !t) : null == f && e && null != e.ref && nO(e.ref, null, l, e, !0);
		}, _ = (e, t, r, i) => {
			if (null == e) l(t.el = c(t.children), r, i);
			else {
				let r = t.el = e.el;
				t.children !== e.children && p(r, t.children);
			}
		}, w = (e, t, r, i) => {
			null == e ? l(t.el = f(t.children || ""), r, i) : t.el = e.el;
		}, O = (e, t, r, i) => {
			[e.el, e.anchor] = g(e.children, t, r, i, e.el, e.anchor);
		}, x = (e, t, r, i, o, l, a, s, u) => {
			"svg" === t.type ? a = "svg" : "math" === t.type && (a = "mathml"), null == e ? S(t, r, i, o, l, a, s, u) : E(e, t, o, l, a, s, u);
		}, S = (e, t, r, i, o, a, c, f) => {
			var p, h;
			let y, m, { props: g, shapeFlag: b, transition: _, dirs: w } = e;
			if (y = e.el = u(e.type, a, g && g.is, g), 8 & b ? d(y, e.children) : 16 & b && j(e.children, y, null, i, o, iv(e, a), c, f), w && r4(e, null, i, "created"), A(y, e, e.scopeId, c, i), g) {
				for (let e in g) "value" === e || ti(e) || s(y, e, null, g[e], a, i);
				"value" in g && s(y, "value", null, g.value, a), (m = g.onVnodeBeforeMount) && iH(m, i, e);
			}
			w && r4(e, null, i, "beforeMount");
			let O = (p = o, h = _, (!p || p && !p.pendingBranch) && h && !h.persisted);
			O && _.beforeEnter(y), l(y, t, r), ((m = g && g.onVnodeMounted) || O || w) && id(() => {
				m && iH(m, i, e), O && _.enter(y), w && r4(e, null, i, "mounted");
			}, o);
		}, A = (e, t, r, i, o) => {
			if (r && m(e, r), i) for (let t = 0; t < i.length; t++) m(e, i[t]);
			if (o) {
				let r = o.subTree;
				if (t === r || iC(r.type) && (r.ssContent === t || r.ssFallback === t)) {
					let t = o.vnode;
					A(e, t, t.scopeId, t.slotScopeIds, o.parent);
				}
			}
		}, j = (e, t, r, i, o, l, a, s, u = 0) => {
			for (let c = u; c < e.length; c++) b(null, e[c] = s ? iq(e[c]) : iW(e[c]), t, r, i, o, l, a, s);
		}, E = (e, t, r, i, o, l, a) => {
			let u, c = t.el = e.el, { patchFlag: f, dynamicChildren: p, dirs: h } = t;
			f |= 16 & e.patchFlag;
			let y = e.props || eH, m = t.props || eH;
			if (r && iy(r, !1), (u = m.onVnodeBeforeUpdate) && iH(u, r, t, e), h && r4(t, e, r, "beforeUpdate"), r && iy(r, !0), (y.innerHTML && null == m.innerHTML || y.textContent && null == m.textContent) && d(c, ""), p ? P(e.dynamicChildren, p, c, r, i, iv(t, o), l) : a || $(e, t, c, null, r, i, iv(t, o), l, !1), f > 0) {
				if (16 & f) k(c, y, m, r, o);
				else if (2 & f && y.class !== m.class && s(c, "class", null, m.class, o), 4 & f && s(c, "style", y.style, m.style, o), 8 & f) {
					let e = t.dynamicProps;
					for (let t = 0; t < e.length; t++) {
						let i = e[t], l = y[i], a = m[i];
						(a !== l || "value" === i) && s(c, i, l, a, o, r);
					}
				}
				1 & f && e.children !== t.children && d(c, t.children);
			} else a || null != p || k(c, y, m, r, o);
			((u = m.onVnodeUpdated) || h) && id(() => {
				u && iH(u, r, t, e), h && r4(t, e, r, "updated");
			}, i);
		}, P = (e, t, r, i, o, l, a) => {
			for (let s = 0; s < t.length; s++) {
				let u = e[s], c = t[s];
				b(u, c, u.el && (u.type === iT || !iV(u, c) || 198 & u.shapeFlag) ? h(u.el) : r, null, i, o, l, a, !0);
			}
		}, k = (e, t, r, i, o) => {
			if (t !== r) {
				if (t !== eH) for (let l in t) ti(l) || l in r || s(e, l, t[l], null, o, i);
				for (let l in r) {
					if (ti(l)) continue;
					let a = r[l], u = t[l];
					a !== u && "value" !== l && s(e, l, u, a, o, i);
				}
				"value" in r && s(e, "value", t.value, r.value, o);
			}
		}, R = (e, t, r, i, o, a, s, u, f) => {
			let p = t.el = e ? e.el : c(""), d = t.anchor = e ? e.anchor : c(""), { patchFlag: h, dynamicChildren: y, slotScopeIds: m } = t;
			m && (u = u ? u.concat(m) : m), null == e ? (l(p, r, i), l(d, r, i), j(t.children || [], r, d, o, a, s, u, f)) : h > 0 && 64 & h && y && e.dynamicChildren ? (P(e.dynamicChildren, y, r, o, a, s, u), (null != t.key || o && t === o.subTree) && im(e, t, !0)) : $(e, t, r, d, o, a, s, u, f);
		}, C = (e, t, r, i, o, l, a, s, u) => {
			t.slotScopeIds = s, null == e ? 512 & t.shapeFlag ? o.ctx.activate(t, r, i, a, u) : T(t, r, i, o, l, a, u) : M(e, t, u);
		}, T = (e, t, r, i, o, l, a) => {
			let s = e.component = function(e, t, r) {
				let i = e.type, o = (t ? t.appContext : e.appContext) || iY, l = {
					uid: iJ++,
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
					scope: new tA(!0),
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
						let o = i ? ii : r.propsCache, l = o.get(t);
						if (l) return l;
						let a = t.props, s = {}, u = [], c = !1;
						if (!e8(t)) {
							let o = (t) => {
								c = !0;
								let [i, o] = e(t, r, !0);
								e0(s, i), o && u.push(...o);
							};
							!i && r.mixins.length && r.mixins.forEach(o), t.extends && o(t.extends), t.mixins && t.mixins.forEach(o);
						}
						if (!a && !c) return e9(t) && o.set(t, eY), eY;
						if (e3(a)) for (let e = 0; e < a.length; e++) {
							let t = ta(a[e]);
							io(t) && (s[t] = eH);
						}
						else if (a) for (let e in a) {
							let t = ta(e);
							if (io(t)) {
								let r = a[e], i = s[t] = e3(r) || e8(r) ? { type: r } : e0({}, r), o = i.type, l = !1, c = !0;
								if (e3(o)) for (let e = 0; e < o.length; ++e) {
									let t = o[e], r = e8(t) && t.name;
									if ("Boolean" === r) {
										l = !0;
										break;
									}
									"String" === r && (c = !1);
								}
								else l = e8(o) && "Boolean" === o.name;
								i[0] = l, i[1] = c, (l || e6(i, "default")) && u.push(t);
							}
						}
						let f = [s, u];
						return e9(t) && o.set(t, f), f;
					}(i, o),
					emitsOptions: function e(t, r, i = !1) {
						let o = i ? iA : r.emitsCache, l = o.get(t);
						if (void 0 !== l) return l;
						let a = t.emits, s = {}, u = !1;
						if (!e8(t)) {
							let o = (t) => {
								let i = e(t, r, !0);
								i && (u = !0, e0(s, i));
							};
							!i && r.mixins.length && r.mixins.forEach(o), t.extends && o(t.extends), t.mixins && t.mixins.forEach(o);
						}
						return a || u ? (e3(a) ? a.forEach((e) => s[e] = null) : e0(s, a), e9(t) && o.set(t, s), s) : (e9(t) && o.set(t, null), null);
					}(i, o),
					emit: null,
					emitted: null,
					propsDefaults: eH,
					inheritAttrs: i.inheritAttrs,
					ctx: eH,
					data: eH,
					props: eH,
					attrs: eH,
					slots: eH,
					refs: eH,
					setupState: eH,
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
				return l.ctx = { _: l }, l.root = t ? t.root : l, l.emit = iS.bind(null, l), e.ce && e.ce(l), l;
			}(e, i, o);
			if (nA(e) && (s.ctx.renderer = Y), function(e, t = !1, r = !1) {
				t && D(t);
				let { props: i, children: o } = e.vnode, l = i1(e);
				(function(e, t, r, i = !1) {
					let o = {}, l = n9();
					for (let r in e.propsDefaults = Object.create(null), it(e, t, o, l), e.propsOptions[0]) r in o || (o[r] = void 0);
					r ? e.props = i ? o : ry(o) : e.type.props ? e.props = o : e.props = l, e.attrs = l;
				})(e, i, l, t);
				var a = r || t;
				let s = e.slots = n9();
				if (32 & e.vnode.shapeFlag) {
					let e = o._;
					e ? (ip(s, o, a), a && th(s, "_", e, !0)) : iu(o, s);
				} else o && ic(e, o);
				l && function(e, t) {
					let r = e.type;
					e.accessCache = Object.create(null), e.proxy = new Proxy(e.ctx, nW);
					let { setup: i } = r;
					if (i) {
						var o;
						tL();
						let r = e.setupContext = i.length > 1 ? {
							attrs: new Proxy((o = e).attrs, i4),
							slots: o.slots,
							emit: o.emit,
							expose: (e) => {
								o.exposed = e || {};
							}
						} : null, l = iQ(e), a = rV(i, e, 0, [e.props, r]), s = te(a);
						if (tF(), l(), (s || e.sp) && !nS(e) && n_(e), s) {
							if (a.then(i0, i0), t) return a.then((r) => {
								i6(e, r, t);
							}).catch((t) => {
								rU(t, e, 0);
							});
							e.asyncDep = a;
						} else i6(e, a, t);
					} else i3(e, t);
				}(e, t), t && D(!1);
			}(s, !1, a), s.asyncDep) {
				if (o && o.registerDep(s, I, a), !e.el) {
					let i = s.subTree = iz(iI);
					w(null, i, t, r), e.placeholder = i.el;
				}
			} else I(s, e, t, r, o, l, a);
		}, M = (e, t, r) => {
			let i = t.component = e.component;
			if (function(e, t, r) {
				let { props: i, children: o, component: l } = e, { props: a, children: s, patchFlag: u } = t, c = l.emitsOptions;
				if (t.dirs || t.transition) return !0;
				if (!r || !(u >= 0)) return (!!o || !!s) && (!s || !s.$stable) || i !== a && (i ? !a || iR(i, a, c) : !!a);
				if (1024 & u) return !0;
				if (16 & u) return i ? iR(i, a, c) : !!a;
				if (8 & u) {
					let e = t.dynamicProps;
					for (let t = 0; t < e.length; t++) {
						let r = e[t];
						if (a[r] !== i[r] && !ij(c, r)) return !0;
					}
				}
				return !1;
			}(e, t, r)) if (i.asyncDep && !i.asyncResolved) return void N(i, t, r);
			else i.next = t, i.update();
			else t.el = e.el, i.vnode = t;
		}, I = (e, t, r, i, l, a, s) => {
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
							r && (r.el = f.el, N(e, r, s)), t.asyncDep.then(() => {
								e.isUnmounted || u();
							});
							return;
						}
					}
					let p = r;
					iy(e, !1), r ? (r.el = f.el, N(e, r, s)) : r = f, i && td(i), (t = r.props && r.props.onVnodeBeforeUpdate) && iH(t, c, r, f), iy(e, !0);
					let d = iE(e), y = e.subTree;
					e.subTree = d, b(y, d, h(y.el), q(y), e, l, a), r.el = d.el, null === p && function({ vnode: e, parent: t }, r) {
						for (; t;) {
							let i = t.subTree;
							if (i.suspense && i.suspense.activeBranch === e && (i.el = e.el), i === e) (e = t.vnode).el = r, t = t.parent;
							else break;
						}
					}(e, d.el), o && id(o, l), (t = r.props && r.props.onVnodeUpdated) && id(() => iH(t, c, r, f), l);
				} else {
					let s, { el: u, props: c } = t, { bm: f, m: p, parent: d, root: h, type: y } = e, m = nS(t);
					if (iy(e, !1), f && td(f), !m && (s = c && c.onVnodeBeforeMount) && iH(s, d, t), iy(e, !0), u && o);
					else {
						h.ce && !1 !== h.ce._def.shadowRoot && h.ce._injectChildStyle(y);
						let o = e.subTree = iE(e);
						b(null, o, r, i, e, l, a), t.el = o.el;
					}
					if (p && id(p, l), !m && (s = c && c.onVnodeMounted)) {
						let e = t;
						id(() => iH(s, d, e), l);
					}
					(256 & t.shapeFlag || d && nS(d.vnode) && 256 & d.vnode.shapeFlag) && e.a && id(e.a, l), e.isMounted = !0, t = r = i = null;
				}
			};
			e.scope.on();
			let c = e.effect = new tE(u);
			e.scope.off();
			let f = e.update = c.run.bind(c), p = e.job = c.runIfDirty.bind(c);
			p.i = e, p.id = e.uid, c.scheduler = () => rX(p), iy(e, !0), f();
		}, N = (e, t, r) => {
			t.component = e;
			let i = e.vnode.props;
			e.vnode = t, e.next = null, function(e, t, r, i) {
				let { props: o, attrs: l, vnode: { patchFlag: a } } = e, s = rx(o), [u] = e.propsOptions, c = !1;
				if ((i || a > 0) && !(16 & a)) {
					if (8 & a) {
						let r = e.vnode.dynamicProps;
						for (let i = 0; i < r.length; i++) {
							let a = r[i];
							if (ij(e.emitsOptions, a)) continue;
							let f = t[a];
							if (u) if (e6(l, a)) f !== l[a] && (l[a] = f, c = !0);
							else {
								let t = ta(a);
								o[t] = ir(u, s, t, f, e, !1);
							}
							else f !== l[a] && (l[a] = f, c = !0);
						}
					}
				} else {
					let i;
					for (let a in it(e, t, o, l) && (c = !0), s) t && (e6(t, a) || (i = tu(a)) !== a && e6(t, i)) || (u ? r && (void 0 !== r[a] || void 0 !== r[i]) && (o[a] = ir(u, s, a, void 0, e, !0)) : delete o[a]);
					if (l !== s) for (let e in l) t && e6(t, e) || (delete l[e], c = !0);
				}
				c && tY(e.attrs, "set", "");
			}(e, t.props, i, r), ((e, t, r) => {
				let { vnode: i, slots: o } = e, l = !0, a = eH;
				if (32 & i.shapeFlag) {
					let e = t._;
					e ? r && 1 === e ? l = !1 : ip(o, t, r) : (l = !t.$stable, iu(t, o)), a = t;
				} else t && (ic(e, t), a = { default: 1 });
				if (l) for (let e in o) il(e) || null != a[e] || delete o[e];
			})(e, t.children, r), tL(), rQ(e), tF();
		}, $ = (e, t, r, i, o, l, a, s, u = !1) => {
			let c = e && e.children, f = e ? e.shapeFlag : 0, p = t.children, { patchFlag: h, shapeFlag: y } = t;
			if (h > 0) {
				if (128 & h) return void F(c, p, r, i, o, l, a, s, u);
				else if (256 & h) return void L(c, p, r, i, o, l, a, s, u);
			}
			8 & y ? (16 & f && W(c, o, l), p !== c && d(r, p)) : 16 & f ? 16 & y ? F(c, p, r, i, o, l, a, s, u) : W(c, o, l, !0) : (8 & f && d(r, ""), 16 & y && j(p, r, i, o, l, a, s, u));
		}, L = (e, t, r, i, o, l, a, s, u) => {
			let c;
			e = e || eY, t = t || eY;
			let f = e.length, p = t.length, d = Math.min(f, p);
			for (c = 0; c < d; c++) {
				let i = t[c] = u ? iq(t[c]) : iW(t[c]);
				b(e[c], i, r, null, o, l, a, s, u);
			}
			f > p ? W(e, o, l, !0, !1, d) : j(t, r, i, o, l, a, s, u, d);
		}, F = (e, t, r, i, o, l, a, s, u) => {
			let c = 0, f = t.length, p = e.length - 1, d = f - 1;
			for (; c <= p && c <= d;) {
				let i = e[c], f = t[c] = u ? iq(t[c]) : iW(t[c]);
				if (iV(i, f)) b(i, f, r, null, o, l, a, s, u);
				else break;
				c++;
			}
			for (; c <= p && c <= d;) {
				let i = e[p], c = t[d] = u ? iq(t[d]) : iW(t[d]);
				if (iV(i, c)) b(i, c, r, null, o, l, a, s, u);
				else break;
				p--, d--;
			}
			if (c > p) {
				if (c <= d) {
					let e = d + 1, p = e < f ? t[e].el : i;
					for (; c <= d;) b(null, t[c] = u ? iq(t[c]) : iW(t[c]), r, p, o, l, a, s, u), c++;
				}
			} else if (c > d) for (; c <= p;) B(e[c], o, l, !0), c++;
			else {
				let h, y = c, m = c, g = /* @__PURE__ */ new Map();
				for (c = m; c <= d; c++) {
					let e = t[c] = u ? iq(t[c]) : iW(t[c]);
					null != e.key && g.set(e.key, c);
				}
				let _ = 0, w = d - m + 1, O = !1, x = 0, S = Array(w);
				for (c = 0; c < w; c++) S[c] = 0;
				for (c = y; c <= p; c++) {
					let i, f = e[c];
					if (_ >= w) {
						B(f, o, l, !0);
						continue;
					}
					if (null != f.key) i = g.get(f.key);
					else for (h = m; h <= d; h++) if (0 === S[h - m] && iV(f, t[h])) {
						i = h;
						break;
					}
					void 0 === i ? B(f, o, l, !0) : (S[i - m] = c + 1, i >= x ? x = i : O = !0, b(f, t[i], r, null, o, l, a, s, u), _++);
				}
				let A = O ? function(e) {
					let t, r, i, o, l, a = e.slice(), s = [0], u = e.length;
					for (t = 0; t < u; t++) {
						let u = e[t];
						if (0 !== u) {
							if (e[r = s[s.length - 1]] < u) {
								a[t] = r, s.push(t);
								continue;
							}
							for (i = 0, o = s.length - 1; i < o;) e[s[l = i + o >> 1]] < u ? i = l + 1 : o = l;
							u < e[s[i]] && (i > 0 && (a[t] = s[i - 1]), s[i] = t);
						}
					}
					for (i = s.length, o = s[i - 1]; i-- > 0;) s[i] = o, o = a[o];
					return s;
				}(S) : eY;
				for (h = A.length - 1, c = w - 1; c >= 0; c--) {
					let e = m + c, p = t[e], d = t[e + 1], y = e + 1 < f ? d.el || d.placeholder : i;
					0 === S[c] ? b(null, p, r, y, o, l, a, s, u) : O && (h < 0 || c !== A[h] ? V(p, r, y, 2) : h--);
				}
			}
		}, V = (e, t, r, i, o = null) => {
			let { el: s, type: u, transition: c, children: f, shapeFlag: p } = e;
			if (6 & p) return void V(e.component.subTree, t, r, i);
			if (128 & p) return void e.suspense.move(t, r, i);
			if (64 & p) return void u.move(e, t, r, Y);
			if (u === iT) {
				l(s, t, r);
				for (let e = 0; e < f.length; e++) V(f[e], t, r, i);
				l(e.anchor, t, r);
				return;
			}
			if (u === iN) return void (({ el: e, anchor: t }, r, i) => {
				let o;
				for (; e && e !== t;) o = y(e), l(e, r, i), e = o;
				l(t, r, i);
			})(e, t, r);
			if (2 !== i && 1 & p && c) if (0 === i) c.beforeEnter(s), l(s, t, r), id(() => c.enter(s), o);
			else {
				let { leave: i, delayLeave: o, afterLeave: u } = c, f = () => {
					e.ctx.isUnmounted ? a(s) : l(s, t, r);
				}, p = () => {
					s._isLeaving && s[na](!0), i(s, () => {
						f(), u && u();
					});
				};
				o ? o(s, f, p) : p();
			}
			else l(s, t, r);
		}, B = (e, t, r, i = !1, o = !1) => {
			let l, { type: a, props: s, ref: u, children: c, dynamicChildren: f, shapeFlag: p, patchFlag: d, dirs: h, cacheIndex: y } = e;
			if (-2 === d && (o = !1), null != u && (tL(), nO(u, null, r, e, !0), tF()), null != y && (t.renderCache[y] = void 0), 256 & p) return void t.ctx.deactivate(e);
			let m = 1 & p && h, g = !nS(e);
			if (g && (l = s && s.onVnodeBeforeUnmount) && iH(l, t, e), 6 & p) G(e.component, r, i);
			else {
				if (128 & p) return void e.suspense.unmount(r, i);
				m && r4(e, null, t, "beforeUnmount"), 64 & p ? e.type.remove(e, t, r, Y, i) : f && !f.hasOnce && (a !== iT || d > 0 && 64 & d) ? W(f, t, r, !1, !0) : (a === iT && 384 & d || !o && 16 & p) && W(c, t, r), i && U(e);
			}
			(g && (l = s && s.onVnodeUnmounted) || m) && id(() => {
				l && iH(l, t, e), m && r4(e, null, t, "unmounted");
			}, r);
		}, U = (e) => {
			let { type: t, el: r, anchor: i, transition: o } = e;
			if (t === iT) return void z(r, i);
			if (t === iN) return void (({ el: e, anchor: t }) => {
				let r;
				for (; e && e !== t;) r = y(e), a(e), e = r;
				a(t);
			})(e);
			let l = () => {
				a(r), o && !o.persisted && o.afterLeave && o.afterLeave();
			};
			if (1 & e.shapeFlag && o && !o.persisted) {
				let { leave: t, delayLeave: i } = o, a = () => t(r, l);
				i ? i(e.el, l, a) : a();
			} else l();
		}, z = (e, t) => {
			let r;
			for (; e !== t;) r = y(e), a(e), e = r;
			a(t);
		}, G = (e, t, r) => {
			let { bum: i, scope: o, job: l, subTree: a, um: s, m: u, a: c } = e;
			ig(u), ig(c), i && td(i), o.stop(), l && (l.flags |= 8, B(a, e, t, r)), s && id(s, t), id(() => {
				e.isUnmounted = !0;
			}, t);
		}, W = (e, t, r, i = !1, o = !1, l = 0) => {
			for (let a = l; a < e.length; a++) B(e[a], t, r, i, o);
		}, q = (e) => {
			if (6 & e.shapeFlag) return q(e.component.subTree);
			if (128 & e.shapeFlag) return e.suspense.next();
			let t = y(e.anchor || e.el), r = t && t[r8];
			return r ? y(r) : t;
		}, K = !1, H = (e, t, r) => {
			null == e ? t._vnode && B(t._vnode, null, null, !0) : b(t._vnode || null, e, t, null, null, null, r), t._vnode = e, K || (K = !0, rQ(), r0(), K = !1);
		}, Y = {
			p: b,
			um: B,
			m: V,
			r: U,
			mt: T,
			mc: j,
			pc: $,
			pbc: P,
			n: q,
			o: e
		};
		return {
			render: H,
			hydrate: i,
			createApp: (r = i, function(e, t = null) {
				e8(e) || (e = e0({}, e)), null == t || e9(t) || (t = null);
				let i = n6(), o = /* @__PURE__ */ new WeakSet(), l = [], a = !1, s = i.app = {
					_uid: n3++,
					_component: e,
					_props: t,
					_container: null,
					_context: i,
					_instance: null,
					version: i9,
					get config() {
						return i.config;
					},
					set config(v) {},
					use: (e, ...t) => (o.has(e) || (e && e8(e.install) ? (o.add(e), e.install(s, ...t)) : e8(e) && (o.add(e), e(s, ...t))), s),
					mixin: (e) => (i.mixins.includes(e) || i.mixins.push(e), s),
					component: (e, t) => t ? (i.components[e] = t, s) : i.components[e],
					directive: (e, t) => t ? (i.directives[e] = t, s) : i.directives[e],
					mount(o, l, u) {
						if (!a) {
							let c = s._ceVNode || iz(e, t);
							return c.appContext = i, !0 === u ? u = "svg" : !1 === u && (u = void 0), l && r ? r(c, o) : H(c, o, u), a = !0, s._container = o, o.__vue_app__ = s, i8(c.component);
						}
					},
					onUnmount(e) {
						l.push(e);
					},
					unmount() {
						a && (rB(l, s._instance, 16), H(null, s._container), delete s._container.__vue_app__);
					},
					provide: (e, t) => (i.provides[e] = t, s),
					runWithContext(e) {
						let t = n4;
						n4 = s;
						try {
							return e();
						} finally {
							n4 = t;
						}
					}
				};
				return s;
			})
		};
	}(e);
}
function iv({ type: e, props: t }, r) {
	return "svg" === r && "foreignObject" === e || "mathml" === r && "annotation-xml" === e && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function iy({ effect: e, job: t }, r) {
	r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function im(e, t, r = !1) {
	let i = e.children, o = t.children;
	if (e3(i) && e3(o)) for (let e = 0; e < i.length; e++) {
		let t = i[e], l = o[e];
		1 & l.shapeFlag && !l.dynamicChildren && ((l.patchFlag <= 0 || 32 === l.patchFlag) && ((l = o[e] = iq(o[e])).el = t.el), r || -2 === l.patchFlag || im(t, l)), l.type === iM && -1 !== l.patchFlag && (l.el = t.el), l.type !== iI || l.el || (l.el = t.el);
	}
}
function ig(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
var ib = Symbol.for("v-scx");
function i_(e, t, r) {
	return iw(e, t, r);
}
function iw(e, t, r = eH) {
	let i, { immediate: o, deep: l, flush: a, once: s } = r, u = e0({}, r), c = t && o || !t && "post" !== a;
	if (i2) {
		if ("sync" === a) {
			let e = n5(ib);
			i = e.__watcherHandles || (e.__watcherHandles = []);
		} else if (!c) {
			let e = () => {};
			return e.stop = eJ, e.resume = eJ, e.pause = eJ, e;
		}
	}
	let f = iX;
	u.call = (e, t, r) => rB(e, f, t, r);
	let p = !1;
	"post" === a ? u.scheduler = (e) => {
		id(e, f && f.suspense);
	} : "sync" !== a && (p = !0, u.scheduler = (e, t) => {
		t ? e() : rX(e);
	}), u.augmentJob = (e) => {
		t && (e.flags |= 4), p && (e.flags |= 2, f && (e.id = f.uid, e.i = f));
	};
	let d = function(e, t, r = eH) {
		let i, o, l, a, { immediate: s, deep: u, once: c, scheduler: f, augmentJob: p, call: d } = r, h = (e) => u ? e : rw(e) || !1 === u || 0 === u ? rF(e, 1) : rF(e), y = !1, m = !1;
		if (rj(e) ? (o = () => e.value, y = rw(e)) : rb(e) ? (o = () => h(e), y = !0) : e3(e) ? (m = !0, y = e.some((e) => rb(e) || rw(e)), o = () => e.map((e) => rj(e) ? e.value : rb(e) ? h(e) : e8(e) ? d ? d(e, 2) : e() : void 0)) : o = e8(e) ? t ? d ? () => d(e, 2) : e : () => {
			if (l) {
				tL();
				try {
					l();
				} finally {
					tF();
				}
			}
			let t = rL;
			rL = i;
			try {
				return d ? d(e, 3, [a]) : e(a);
			} finally {
				rL = t;
			}
		} : eJ, t && u) {
			let e = o, t = !0 === u ? Infinity : u;
			o = () => rF(e(), t);
		}
		let g = T, b = () => {
			i.stop(), g && g.active && e1(g.effects, i);
		};
		if (c && t) {
			let e = t;
			t = (...t) => {
				e(...t), b();
			};
		}
		let _ = m ? Array(e.length).fill(r$) : r$, w = (e) => {
			if (1 & i.flags && (i.dirty || e)) if (t) {
				let e = i.run();
				if (u || y || (m ? e.some((e, t) => tp(e, _[t])) : tp(e, _))) {
					l && l();
					let r = rL;
					rL = i;
					try {
						let r = [
							e,
							_ === r$ ? void 0 : m && _[0] === r$ ? [] : _,
							a
						];
						_ = e, d ? d(t, 3, r) : t(...r);
					} finally {
						rL = r;
					}
				}
			} else i.run();
		};
		return p && p(w), (i = new tE(o)).scheduler = f ? () => f(w, !1) : w, a = (e) => (function(e, t = !1, r = rL) {
			if (r) {
				let t = rD.get(r);
				t || rD.set(r, t = []), t.push(e);
			}
		})(e, !1, i), l = i.onStop = () => {
			let e = rD.get(i);
			if (e) {
				if (d) d(e, 4);
				else for (let t of e) t();
				rD.delete(i);
			}
		}, t ? s ? w(!0) : _ = i.run() : f ? f(w.bind(null, !0), !0) : i.run(), b.pause = i.pause.bind(i), b.resume = i.resume.bind(i), b.stop = b, b;
	}(e, t, u);
	return i2 && (i ? i.push(d) : c && d()), d;
}
function iO(e, t, r) {
	let i, o = this.proxy, l = e5(e) ? e.includes(".") ? ix(o, e) : () => o[e] : e.bind(o, o);
	e8(t) ? i = t : (i = t.handler, r = t);
	let a = iQ(this), s = iw(l, i.bind(o), r);
	return a(), s;
}
function ix(e, t) {
	let r = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < r.length && t; e++) t = t[r[e]];
		return t;
	};
}
function iS(e, t, ...r) {
	let i, o;
	if (e.isUnmounted) return;
	let l = e.vnode.props || eH, a = r, s = t.startsWith("update:"), u = s && ("modelValue" === (o = t.slice(7)) || "model-value" === o ? l.modelModifiers : l[`${o}Modifiers`] || l[`${ta(o)}Modifiers`] || l[`${tu(o)}Modifiers`]);
	u && (u.trim && (a = r.map((e) => e5(e) ? e.trim() : e)), u.number && (a = r.map(tv)));
	let c = l[i = tf(t)] || l[i = tf(ta(t))];
	!c && s && (c = l[i = tf(tu(t))]), c && rB(c, e, 6, a);
	let f = l[i + "Once"];
	if (f) {
		if (e.emitted) {
			if (e.emitted[i]) return;
		} else e.emitted = {};
		e.emitted[i] = !0, rB(f, e, 6, a);
	}
}
var iA = /* @__PURE__ */ new WeakMap();
function ij(e, t) {
	return !!e && !!eZ(t) && (e6(e, (t = t.slice(2).replace(/Once$/, ""))[0].toLowerCase() + t.slice(1)) || e6(e, tu(t)) || e6(e, t));
}
function iE(e) {
	let t, r, { type: i, vnode: o, proxy: l, withProxy: a, propsOptions: [s], slots: u, attrs: c, emit: f, render: p, renderCache: d, props: h, data: y, setupState: m, ctx: g, inheritAttrs: b } = e, _ = r3(e);
	try {
		if (4 & o.shapeFlag) {
			let e = a || l;
			t = iW(p.call(e, e, d, h, m, y, g)), r = c;
		} else t = iW(i.length > 1 ? i(h, {
			attrs: c,
			slots: u,
			emit: f
		}) : i(h, null)), r = i.props ? c : iP(c);
	} catch (r) {
		i$.length = 0, rU(r, e, 1), t = iz(iI);
	}
	let w = t;
	if (r && !1 !== b) {
		let e = Object.keys(r), { shapeFlag: t } = w;
		e.length && 7 & t && (s && e.some(eQ) && (r = ik(r, s)), w = iG(w, r, !1, !0));
	}
	return o.dirs && ((w = iG(w, null, !1, !0)).dirs = w.dirs ? w.dirs.concat(o.dirs) : o.dirs), o.transition && ng(w, o.transition), t = w, r3(_), t;
}
var iP = (e) => {
	let t;
	for (let r in e) ("class" === r || "style" === r || eZ(r)) && ((t || (t = {}))[r] = e[r]);
	return t;
}, ik = (e, t) => {
	let r = {};
	for (let i in e) eQ(i) && i.slice(9) in t || (r[i] = e[i]);
	return r;
};
function iR(e, t, r) {
	let i = Object.keys(t);
	if (i.length !== Object.keys(e).length) return !0;
	for (let o = 0; o < i.length; o++) {
		let l = i[o];
		if (t[l] !== e[l] && !ij(r, l)) return !0;
	}
	return !1;
}
var iC = (e) => e.__isSuspense, iT = Symbol.for("v-fgt"), iM = Symbol.for("v-txt"), iI = Symbol.for("v-cmt"), iN = Symbol.for("v-stc"), i$ = [], iD = 1;
function iL(e, t = !1) {
	iD += e;
}
function iF(e) {
	return !!e && !0 === e.__v_isVNode;
}
function iV(e, t) {
	return e.type === t.type && e.key === t.key;
}
var iB = ({ key: e }) => null != e ? e : null, iU = ({ ref: e, ref_key: t, ref_for: r }) => ("number" == typeof e && (e = "" + e), null != e ? e5(e) || rj(e) || e8(e) ? {
	i: r2,
	r: e,
	k: t,
	f: !!r
} : e : null), iz = function(e, t = null, r = null, i = 0, o = null, l = !1) {
	var a, s;
	if (e && e !== nB || (e = iI), iF(e)) {
		let i = iG(e, t, !0);
		return r && iK(i, r), i.patchFlag = -2, i;
	}
	if (e8(a = e) && "__vccOpts" in a && (e = e.__vccOpts), t) {
		let { class: e, style: r } = t = (s = t) ? rO(s) || ie(s) ? e0({}, s) : s : null;
		e && !e5(e) && (t.class = tO(e)), e9(r) && (rO(r) && !e3(r) && (r = e0({}, r)), t.style = tg(r));
	}
	let u = e5(e) ? 1 : iC(e) ? 128 : e.__isTeleport ? 64 : e9(e) ? 4 : 2 * !!e8(e);
	return function(e, t = null, r = null, i = 0, o = null, l = +(e !== iT), a = !1, s = !1) {
		let u = {
			__v_isVNode: !0,
			__v_skip: !0,
			type: e,
			props: t,
			key: t && iB(t),
			ref: t && iU(t),
			scopeId: r6,
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
			shapeFlag: l,
			patchFlag: i,
			dynamicProps: o,
			dynamicChildren: null,
			appContext: null,
			ctx: r2
		};
		return s ? (iK(u, r), 128 & l && e.normalize(u)) : r && (u.shapeFlag |= e5(r) ? 8 : 16), u;
	}(e, t, r, i, o, u, l, !0);
};
function iG(e, t, r = !1, i = !1) {
	let { props: o, ref: l, patchFlag: a, children: s, transition: u } = e, c = t ? function(...e) {
		let t = {};
		for (let r = 0; r < e.length; r++) {
			let i = e[r];
			for (let e in i) if ("class" === e) t.class !== i.class && (t.class = tO([t.class, i.class]));
			else if ("style" === e) t.style = tg([t.style, i.style]);
			else if (eZ(e)) {
				let r = t[e], o = i[e];
				o && r !== o && !(e3(r) && r.includes(o)) && (t[e] = r ? [].concat(r, o) : o);
			} else "" !== e && (t[e] = i[e]);
		}
		return t;
	}(o || {}, t) : o, f = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: c,
		key: c && iB(c),
		ref: t && t.ref ? r && l ? e3(l) ? l.concat(iU(t)) : [l, iU(t)] : iU(t) : l,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== iT ? -1 === a ? 16 : 16 | a : a,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: u,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && iG(e.ssContent),
		ssFallback: e.ssFallback && iG(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return u && i && ng(f, u.clone(f)), f;
}
function iW(e) {
	return null == e || "boolean" == typeof e ? iz(iI) : e3(e) ? iz(iT, null, e.slice()) : iF(e) ? iq(e) : iz(iM, null, String(e));
}
function iq(e) {
	return null === e.el && -1 !== e.patchFlag || e.memo ? e : iG(e);
}
function iK(e, t) {
	let r = 0, { shapeFlag: i } = e;
	if (null == t) t = null;
	else if (e3(t)) r = 16;
	else if ("object" == typeof t) if (65 & i) {
		let r = t.default;
		r && (r._c && (r._d = !1), iK(e, r()), r._c && (r._d = !0));
		return;
	} else {
		r = 32;
		let i = t._;
		i || ie(t) ? 3 === i && r2 && (1 === r2.slots._ ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024)) : t._ctx = r2;
	}
	else e8(t) ? (t = {
		default: t,
		_ctx: r2
	}, r = 32) : (t = String(t), 64 & i ? (r = 16, t = [function(e = " ", t = 0) {
		return iz(iM, null, e, t);
	}(t)]) : r = 8);
	e.children = t, e.shapeFlag |= r;
}
function iH(e, t, r, i = null) {
	rB(e, t, 7, [r, i]);
}
var iY = n6(), iJ = 0, iX = null, iZ = () => iX || r2;
{
	let e = tm(), t = (t, r) => {
		let i;
		return (i = e[t]) || (i = e[t] = []), i.push(r), (e) => {
			i.length > 1 ? i.forEach((t) => t(e)) : i[0](e);
		};
	};
	$ = t("__VUE_INSTANCE_SETTERS__", (e) => iX = e), D = t("__VUE_SSR_SETTERS__", (e) => i2 = e);
}
var iQ = (e) => {
	let t = iX;
	return $(e), e.scope.on(), () => {
		e.scope.off(), $(t);
	};
}, i0 = () => {
	iX && iX.scope.off(), $(null);
};
function i1(e) {
	return 4 & e.vnode.shapeFlag;
}
var i2 = !1;
function i6(e, t, r) {
	e8(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : e9(t) && (e.setupState = rM(t)), i3(e, r);
}
function i3(e, t, r) {
	let i = e.type;
	if (!e.render) {
		if (!t && L && !i.render) {
			let t = i.template || nY(e).template;
			if (t) {
				let { isCustomElement: r, compilerOptions: o } = e.appContext.config, { delimiters: l, compilerOptions: a } = i;
				i.render = L(t, e0(e0({
					isCustomElement: r,
					delimiters: l
				}, o), a));
			}
		}
		e.render = i.render || eJ, F && F(e);
	}
	{
		let t = iQ(e);
		tL();
		try {
			(function(e) {
				let t = nY(e), r = e.proxy, i = e.ctx;
				nK = !1, t.beforeCreate && nH(t.beforeCreate, e, "bc");
				let { data: o, computed: l, methods: a, watch: s, provide: u, inject: c, created: f, beforeMount: p, mounted: d, beforeUpdate: h, updated: y, activated: m, deactivated: g, beforeDestroy: b, beforeUnmount: _, destroyed: w, unmounted: O, render: x, renderTracked: S, renderTriggered: A, errorCaptured: j, serverPrefetch: E, expose: P, inheritAttrs: k, components: R, directives: C, filters: T } = t;
				if (c && function(e, t, r = eJ) {
					for (let r in e3(e) && (e = nQ(e)), e) {
						let i, o = e[r];
						rj(i = e9(o) ? "default" in o ? n5(o.from || r, o.default, !0) : n5(o.from || r) : n5(o)) ? Object.defineProperty(t, r, {
							enumerable: !0,
							configurable: !0,
							get: () => i.value,
							set: (e) => i.value = e
						}) : t[r] = i;
					}
				}(c, i, null), a) for (let e in a) {
					let t = a[e];
					e8(t) && (i[e] = t.bind(r));
				}
				if (o) {
					let t = o.call(r, r);
					e9(t) && (e.data = rv(t));
				}
				if (nK = !0, l) for (let e in l) {
					let t = l[e], o = i5({
						get: e8(t) ? t.bind(r, r) : e8(t.get) ? t.get.bind(r, r) : eJ,
						set: !e8(t) && e8(t.set) ? t.set.bind(r) : eJ
					});
					Object.defineProperty(i, e, {
						enumerable: !0,
						configurable: !0,
						get: () => o.value,
						set: (e) => o.value = e
					});
				}
				if (s) for (let e in s) (function e(t, r, i, o) {
					let l = o.includes(".") ? ix(i, o) : () => i[o];
					if (e5(t)) {
						let e = r[t];
						e8(e) && i_(l, e);
					} else if (e8(t)) i_(l, t.bind(i));
					else if (e9(t)) if (e3(t)) t.forEach((t) => e(t, r, i, o));
					else {
						let e = e8(t.handler) ? t.handler.bind(i) : r[t.handler];
						e8(e) && i_(l, e, t);
					}
				})(s[e], i, r, e);
				if (u) {
					let e = e8(u) ? u.call(r) : u;
					Reflect.ownKeys(e).forEach((t) => {
						n8(t, e[t]);
					});
				}
				function M(e, t) {
					e3(t) ? t.forEach((t) => e(t.bind(r))) : t && e(t.bind(r));
				}
				if (f && nH(f, e, "c"), M(nC, p), M(nT, d), M(nM, h), M(nI, y), M(nj, m), M(nE, g), M(nV, j), M(nF, S), M(nL, A), M(nN, _), M(n$, O), M(nD, E), e3(P)) if (P.length) {
					let t = e.exposed || (e.exposed = {});
					P.forEach((e) => {
						Object.defineProperty(t, e, {
							get: () => r[e],
							set: (t) => r[e] = t,
							enumerable: !0
						});
					});
				} else e.exposed || (e.exposed = {});
				x && e.render === eJ && (e.render = x), null != k && (e.inheritAttrs = k), R && (e.components = R), C && (e.directives = C), E && n_(e);
			})(e);
		} finally {
			tF(), t();
		}
	}
}
var i4 = { get: (e, t) => (tH(e, "get", ""), e[t]) };
function i8(e) {
	var t;
	return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(rM((!e6(t = e.exposed, "__v_skip") && Object.isExtensible(t) && th(t, "__v_skip", !0), t)), {
		get: (t, r) => r in t ? t[r] : r in nz ? nz[r](e) : void 0,
		has: (e, t) => t in e || t in nz
	})) : e.proxy;
}
var i5 = (e, t) => (function(e, t, r = !1) {
	let i, o;
	return e8(e) ? i = e : (i = e.get, o = e.set), new rN(i, o, r);
})(e, 0, i2);
function i7(e, t, r) {
	try {
		iL(-1);
		let i = arguments.length;
		if (2 !== i) return i > 3 ? r = Array.prototype.slice.call(arguments, 2) : 3 === i && iF(r) && (r = [r]), iz(e, t, r);
		if (!e9(t) || e3(t)) return iz(e, null, t);
		if (iF(t)) return iz(e, null, [t]);
		return iz(e, t);
	} finally {
		iL(1);
	}
}
var i9 = "3.5.22", oe = Symbol.for("immer-nothing"), ot = Symbol.for("immer-draftable"), or = Symbol.for("immer-state");
function on(e) {
	throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`);
}
var oi = Object.getPrototypeOf;
function oo(e) {
	return !!e && !!e[or];
}
function ol(e) {
	return !!e && (os(e) || Array.isArray(e) || !!e[ot] || !!e.constructor?.[ot] || od(e) || oh(e));
}
var oa = Object.prototype.constructor.toString();
function os(e) {
	if (!e || "object" != typeof e) return !1;
	let t = oi(e);
	if (null === t) return !0;
	let r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
	return r === Object || "function" == typeof r && Function.toString.call(r) === oa;
}
function ou(e, t) {
	0 === oc(e) ? Reflect.ownKeys(e).forEach((r) => {
		t(r, e[r], e);
	}) : e.forEach((r, i) => t(i, r, e));
}
function oc(e) {
	let t = e[or];
	return t ? t.type_ : Array.isArray(e) ? 1 : od(e) ? 2 : 3 * !!oh(e);
}
function of(e, t) {
	return 2 === oc(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function op(e, t, r) {
	let i = oc(e);
	2 === i ? e.set(t, r) : 3 === i ? e.add(r) : e[t] = r;
}
function od(e) {
	return e instanceof Map;
}
function oh(e) {
	return e instanceof Set;
}
function ov(e) {
	return e.copy_ || e.base_;
}
function oy(e, t) {
	if (od(e)) return new Map(e);
	if (oh(e)) return new Set(e);
	if (Array.isArray(e)) return Array.prototype.slice.call(e);
	let r = os(e);
	if (!0 !== t && ("class_only" !== t || r)) {
		let t = oi(e);
		return null !== t && r ? { ...e } : Object.assign(Object.create(t), e);
	}
	{
		let t = Object.getOwnPropertyDescriptors(e);
		delete t[or];
		let r = Reflect.ownKeys(t);
		for (let i = 0; i < r.length; i++) {
			let o = r[i], l = t[o];
			!1 === l.writable && (l.writable = !0, l.configurable = !0), (l.get || l.set) && (t[o] = {
				configurable: !0,
				writable: !0,
				enumerable: l.enumerable,
				value: e[o]
			});
		}
		return Object.create(oi(e), t);
	}
}
function om(e, t = !1) {
	return ob(e) || oo(e) || !ol(e) || (oc(e) > 1 && Object.defineProperties(e, {
		set: { value: og },
		add: { value: og },
		clear: { value: og },
		delete: { value: og }
	}), Object.freeze(e), t && Object.values(e).forEach((e) => om(e, !0))), e;
}
function og() {
	on(2);
}
function ob(e) {
	return Object.isFrozen(e);
}
var o_ = {};
function ow(e) {
	let t = o_[e];
	return t || on(0, e), t;
}
function oO(e, t) {
	t && (ow("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function ox(e) {
	oS(e), e.drafts_.forEach(oj), e.drafts_ = null;
}
function oS(e) {
	e === V && (V = e.parent_);
}
function oA(e) {
	return V = {
		drafts_: [],
		parent_: V,
		immer_: e,
		canAutoFreeze_: !0,
		unfinalizedDrafts_: 0
	};
}
function oj(e) {
	let t = e[or];
	0 === t.type_ || 1 === t.type_ ? t.revoke_() : t.revoked_ = !0;
}
function oE(e, t) {
	t.unfinalizedDrafts_ = t.drafts_.length;
	let r = t.drafts_[0];
	return void 0 !== e && e !== r ? (r[or].modified_ && (ox(t), on(4)), ol(e) && (e = oP(t, e), t.parent_ || oR(t, e)), t.patches_ && ow("Patches").generateReplacementPatches_(r[or].base_, e, t.patches_, t.inversePatches_)) : e = oP(t, r, []), ox(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== oe ? e : void 0;
}
function oP(e, t, r) {
	if (ob(t)) return t;
	let i = t[or];
	if (!i) return ou(t, (o, l) => ok(e, i, t, o, l, r)), t;
	if (i.scope_ !== e) return t;
	if (!i.modified_) return oR(e, i.base_, !0), i.base_;
	if (!i.finalized_) {
		i.finalized_ = !0, i.scope_.unfinalizedDrafts_--;
		let t = i.copy_, o = t, l = !1;
		3 === i.type_ && (o = new Set(t), t.clear(), l = !0), ou(o, (o, a) => ok(e, i, t, o, a, r, l)), oR(e, t, !1), r && e.patches_ && ow("Patches").generatePatches_(i, r, e.patches_, e.inversePatches_);
	}
	return i.copy_;
}
function ok(e, t, r, i, o, l, a) {
	if (oo(o)) {
		let a = oP(e, o, l && t && 3 !== t.type_ && !of(t.assigned_, i) ? l.concat(i) : void 0);
		if (op(r, i, a), !oo(a)) return;
		e.canAutoFreeze_ = !1;
	} else a && r.add(o);
	if (ol(o) && !ob(o)) {
		if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
		oP(e, o), (!t || !t.scope_.parent_) && "symbol" != typeof i && (od(r) ? r.has(i) : Object.prototype.propertyIsEnumerable.call(r, i)) && oR(e, o);
	}
}
function oR(e, t, r = !1) {
	!e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && om(t, r);
}
var oC = {
	get(e, t) {
		if (t === or) return e;
		let r = ov(e);
		if (!of(r, t)) {
			var i = e;
			let a = oI(r, t);
			return a ? "value" in a ? a.value : a.get?.call(i.draft_) : void 0;
		}
		let a = r[t];
		return e.finalized_ || !ol(a) ? a : a === oM(e.base_, t) ? (o$(e), e.copy_[t] = oD(a, e)) : a;
	},
	has: (e, t) => t in ov(e),
	ownKeys: (e) => Reflect.ownKeys(ov(e)),
	set(e, t, r) {
		let i = oI(ov(e), t);
		if (i?.set) return i.set.call(e.draft_, r), !0;
		if (!e.modified_) {
			let i = oM(ov(e), t), o = i?.[or];
			if (o && o.base_ === r) return e.copy_[t] = r, e.assigned_[t] = !1, !0;
			if ((r === i ? 0 !== r || 1 / r == 1 / i : r != r && i != i) && (void 0 !== r || of(e.base_, t))) return !0;
			o$(e), oN(e);
		}
		return !!(e.copy_[t] === r && (void 0 !== r || t in e.copy_) || Number.isNaN(r) && Number.isNaN(e.copy_[t])) || (e.copy_[t] = r, e.assigned_[t] = !0, !0);
	},
	deleteProperty: (e, t) => (void 0 !== oM(e.base_, t) || t in e.base_ ? (e.assigned_[t] = !1, o$(e), oN(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0),
	getOwnPropertyDescriptor(e, t) {
		let r = ov(e), i = Reflect.getOwnPropertyDescriptor(r, t);
		return i ? {
			writable: !0,
			configurable: 1 !== e.type_ || "length" !== t,
			enumerable: i.enumerable,
			value: r[t]
		} : i;
	},
	defineProperty() {
		on(11);
	},
	getPrototypeOf: (e) => oi(e.base_),
	setPrototypeOf() {
		on(12);
	}
}, oT = {};
function oM(e, t) {
	let r = e[or];
	return (r ? ov(r) : e)[t];
}
function oI(e, t) {
	if (!(t in e)) return;
	let r = oi(e);
	for (; r;) {
		let e = Object.getOwnPropertyDescriptor(r, t);
		if (e) return e;
		r = oi(r);
	}
}
function oN(e) {
	!e.modified_ && (e.modified_ = !0, e.parent_ && oN(e.parent_));
}
function o$(e) {
	e.copy_ || (e.copy_ = oy(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
function oD(e, t) {
	let r = od(e) ? ow("MapSet").proxyMap_(e, t) : oh(e) ? ow("MapSet").proxySet_(e, t) : function(e, t) {
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
		}, o = i, l = oC;
		r && (o = [i], l = oT);
		let { revoke: a, proxy: s } = Proxy.revocable(o, l);
		return i.draft_ = s, i.revoke_ = a, s;
	}(e, t);
	return (t ? t.scope_ : V).drafts_.push(r), r;
}
ou(oC, (e, t) => {
	oT[e] = function() {
		return arguments[0] = arguments[0][0], t.apply(this, arguments);
	};
}), oT.deleteProperty = function(e, t) {
	return oT.set.call(this, e, t, void 0);
}, oT.set = function(e, t, r) {
	return oC.set.call(this, e[0], t, r, e[0]);
};
var oL = new class {
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
			if ("function" != typeof t && on(6), void 0 !== r && "function" != typeof r && on(7), ol(e)) {
				let o = oA(this), l = oD(e, void 0), a = !0;
				try {
					i = t(l), a = !1;
				} finally {
					a ? ox(o) : oS(o);
				}
				return oO(o, r), oE(i, o);
			}
			if (e && "object" == typeof e) on(1, e);
			else {
				if (void 0 === (i = t(e)) && (i = e), i === oe && (i = void 0), this.autoFreeze_ && om(i, !0), r) {
					let t = [], o = [];
					ow("Patches").generateReplacementPatches_(e, i, t, o), r(t, o);
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
		ol(e) || on(8), oo(e) && (oo(t = e) || on(10, t), e = function e(t) {
			let r;
			if (!ol(t) || ob(t)) return t;
			let i = t[or];
			if (i) {
				if (!i.modified_) return i.base_;
				i.finalized_ = !0, r = oy(t, i.scope_.immer_.useStrictShallowCopy_);
			} else r = oy(t, !0);
			return ou(r, (t, i) => {
				op(r, t, e(i));
			}), i && (i.finalized_ = !1), r;
		}(t));
		let r = oA(this), i = oD(e, void 0);
		return i[or].isManual_ = !0, oS(r), i;
	}
	finishDraft(e, t) {
		let r = e && e[or];
		r && r.isManual_ || on(9);
		let { scope_: i } = r;
		return oO(i, t), oE(void 0, i);
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
		let i = ow("Patches").applyPatches_;
		return oo(e) ? i(e, t) : this.produce(e, (e) => i(e, t));
	}
}().produce, oF = t(r((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t, r = "function" == typeof Symbol, i = r && void 0 !== Symbol.toPrimitive ? Symbol.toPrimitive : x("Symbol.toPrimitive not found."), o = r && void 0 !== Symbol.iterator ? Symbol.iterator : x("Symbol.iterator not found."), l = Object.getPrototypeOf(Function), a = "function" == typeof Map && "function" == typeof Map.prototype.entries ? Map : x("A valid Map constructor could not be found."), s = "function" == typeof Set && "function" == typeof Set.prototype.entries ? Set : x("A valid Set constructor could not be found."), u = "function" == typeof WeakMap ? WeakMap : x("A valid WeakMap constructor could not be found."), c = r ? Symbol.for("@reflect-metadata:registry") : void 0, f = (!d(c) && h(Reflect) && Object.isExtensible(Reflect) && (t = Reflect[c]), d(t) && (t = function() {
		d(c) || "undefined" == typeof Reflect || c in Reflect || "function" != typeof Reflect.defineMetadata || (t = (e = Reflect).defineMetadata, r = e.hasOwnMetadata, i = e.getOwnMetadata, o = e.getOwnMetadataKeys, l = e.deleteMetadata, f = new u(), p = {
			isProviderFor: function(e, t) {
				var r = f.get(e);
				return !!(!d(r) && r.has(t)) || !!o(e, t).length && (d(r) && (r = new s(), f.set(e, r)), r.add(t), !0);
			},
			OrdinaryDefineOwnMetadata: t,
			OrdinaryHasOwnMetadata: r,
			OrdinaryGetOwnMetadata: i,
			OrdinaryOwnMetadataKeys: o,
			OrdinaryDeleteMetadata: l
		});
		var e, t, r, i, o, l, f, p, h, y, m, g = new u(), O = {
			registerProvider: function(e) {
				if (!Object.isExtensible(O)) throw Error("Cannot add provider to a frozen registry.");
				switch (!0) {
					case p === e: break;
					case d(h):
						h = e;
						break;
					case h === e: break;
					case d(y):
						y = e;
						break;
					case y === e: break;
					default: void 0 === m && (m = new s()), m.add(e);
				}
			},
			getProvider: x,
			setProvider: function(e, t, r) {
				if (!function(e) {
					if (d(e)) throw TypeError();
					return p === e || h === e || y === e || !d(m) && m.has(e);
				}(r)) throw Error("Metadata provider not registered.");
				var i = x(e, t);
				if (i !== r) {
					if (!d(i)) return !1;
					var o = g.get(e);
					d(o) && (o = new a(), g.set(e, o)), o.set(t, r);
				}
				return !0;
			}
		};
		return O;
		function x(e, t) {
			var r, i = g.get(e);
			return d(i) || (r = i.get(t)), d(r) && (r = function(e, t) {
				if (!d(h)) {
					if (h.isProviderFor(e, t)) return h;
					if (!d(y)) {
						if (y.isProviderFor(e, t)) return h;
						if (!d(m)) for (var r = b(m);;) {
							var i = _(r);
							if (!i) return;
							var o = i.value;
							if (o.isProviderFor(e, t)) return w(r), o;
						}
					}
				}
				if (!d(p) && p.isProviderFor(e, t)) return p;
			}(e, t), d(r) || (d(i) && (i = new a(), g.set(e, i)), i.set(t, r))), r;
		}
	}()), !d(c) && h(Reflect) && Object.isExtensible(Reflect) && Object.defineProperty(Reflect, c, {
		enumerable: !1,
		configurable: !1,
		writable: !1,
		value: t
	}), t), p = function(e) {
		var t = new u(), r = {
			isProviderFor: function(e, r) {
				var i = t.get(e);
				return !d(i) && i.has(r);
			},
			OrdinaryDefineOwnMetadata: function(e, t, r, o) {
				i(r, o, !0).set(e, t);
			},
			OrdinaryHasOwnMetadata: function(e, t, r) {
				var o = i(t, r, !1);
				return !d(o) && !!o.has(e);
			},
			OrdinaryGetOwnMetadata: function(e, t, r) {
				var o = i(t, r, !1);
				if (!d(o)) return o.get(e);
			},
			OrdinaryOwnMetadataKeys: function(e, t) {
				var r = [], o = i(e, t, !1);
				if (d(o)) return r;
				for (var l = b(o.keys()), a = 0;;) {
					var s = _(l);
					if (!s) return r.length = a, r;
					var u = s.value;
					try {
						r[a] = u;
					} catch (e) {
						try {
							w(l);
						} finally {
							throw e;
						}
					}
					a++;
				}
			},
			OrdinaryDeleteMetadata: function(e, r, o) {
				var l = i(r, o, !1);
				if (d(l) || !l.delete(e)) return !1;
				if (0 === l.size) {
					var a = t.get(r);
					d(a) || (a.delete(o), 0 === a.size && t.delete(a));
				}
				return !0;
			}
		};
		return f.registerProvider(r), r;
		function i(i, o, l) {
			var s = t.get(i), u = !1;
			if (d(s)) {
				if (!l) return;
				s = new a(), t.set(i, s), u = !0;
			}
			var c = s.get(o);
			if (d(c)) {
				if (!l) return;
				if (c = new a(), s.set(o, c), !e.setProvider(i, o, r)) throw s.delete(o), u && t.delete(i), Error("Wrong provider for target.");
			}
			return c;
		}
	}(f);
	function d(e) {
		return void 0 === e;
	}
	function h(e) {
		return "object" == typeof e ? null !== e : "function" == typeof e;
	}
	e.defineMetadata = function(e, t, r, i) {
		var o, l, a, s;
		if (!h(r)) throw TypeError();
		d(i) || (i = y(i)), o = e, l = t, S(a = r, s = i, !0).OrdinaryDefineOwnMetadata(o, l, a, s);
	}, e.getMetadata = function(e, t, r) {
		if (!h(t)) throw TypeError();
		return d(r) || (r = y(r)), function e(t, r, i) {
			if (!d(u = S(r, i, !1)) && function(e) {
				return !!e;
			}(u.OrdinaryHasOwnMetadata(t, r, i))) {
				var o = t, l = r, a = i, s = S(l, a, !1);
				return d(s) ? void 0 : s.OrdinaryGetOwnMetadata(o, l, a);
			}
			var u, c = O(r);
			if (null !== c) return e(t, c, i);
		}(e, t, r);
	}, e.getMetadataKeys = function(e, t) {
		if (!h(e)) throw TypeError();
		return d(t) || (t = y(t)), function e(t, r) {
			var i, o, l, a = (l = S(i = t, o = r, !1)) ? l.OrdinaryOwnMetadataKeys(i, o) : [], u = O(t);
			if (null === u) return a;
			var c = e(u, r);
			if (c.length <= 0) return a;
			if (a.length <= 0) return c;
			for (var f = new s(), p = [], d = 0; d < a.length; d++) {
				var h = a[d], y = f.has(h);
				y || (f.add(h), p.push(h));
			}
			for (var m = 0; m < c.length; m++) {
				var h = c[m], y = f.has(h);
				y || (f.add(h), p.push(h));
			}
			return p;
		}(e, t);
	};
	function y(e) {
		var t = function(e, t) {
			switch (function(e) {
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
			}(e)) {
				case 0:
				case 1:
				case 2:
				case 3:
				case 4:
				case 5: return e;
			}
			var r = "string", o = g(e, i);
			if (void 0 !== o) {
				var l = o.call(e, r);
				if (h(l)) throw TypeError();
				return l;
			}
			return function(e, t) {
				if ("string" === t) {
					var r = e.toString;
					if (m(r)) {
						var i = r.call(e);
						if (!h(i)) return i;
					}
					var o = e.valueOf;
					if (m(o)) {
						var i = o.call(e);
						if (!h(i)) return i;
					}
				} else {
					var o = e.valueOf;
					if (m(o)) {
						var i = o.call(e);
						if (!h(i)) return i;
					}
					var l = e.toString;
					if (m(l)) {
						var i = l.call(e);
						if (!h(i)) return i;
					}
				}
				throw TypeError();
			}(e, r);
		}(e, 0);
		return "symbol" == typeof t ? t : "" + t;
	}
	function m(e) {
		return "function" == typeof e;
	}
	function g(e, t) {
		var r = e[t];
		if (null != r) {
			if (!m(r)) throw TypeError();
			return r;
		}
	}
	function b(e) {
		var t = g(e, o);
		if (!m(t)) throw TypeError();
		var r = t.call(e);
		if (!h(r)) throw TypeError();
		return r;
	}
	function _(e) {
		var t = e.next();
		return !t.done && t;
	}
	function w(e) {
		var t = e.return;
		t && t.call(e);
	}
	function O(e) {
		var t = Object.getPrototypeOf(e);
		if ("function" != typeof e || e === l || t !== l) return t;
		var r = e.prototype, i = r && Object.getPrototypeOf(r);
		if (null == i || i === Object.prototype) return t;
		var o = i.constructor;
		return "function" != typeof o || o === e ? t : o;
	}
	function x(e) {
		throw e;
	}
	function S(e, t, r) {
		var i = f.getProvider(e, t);
		if (!d(i)) return i;
		if (r) {
			if (f.setProvider(e, t, p)) return p;
			throw Error("Illegal state.");
		}
	}
})()), oV = class {
	static getOwnPropertyNames(e) {
		return oF.getMetadataKeys(e);
	}
	static get(e, t) {
		return oF.getMetadata(t, e);
	}
	static define(e, t, r, i) {
		if (e && e.constructor && e.constructor != Object) {
			if (e$(r)) return void oF.defineMetadata(t, oL(oF.getMetadata(t, e) ?? i ?? {}, r), e);
			oF.defineMetadata(t, r, e);
		}
	}
};
let oB = (e) => "function" == typeof e && `${e}`.startsWith("class"), oU = {
	path: [],
	branch: []
};
var oz = class extends TypeError {
	value;
	key;
	type;
	refinement;
	path;
	branch;
	failures;
	constructor(e, t) {
		let r, { message: i, explanation: o,...l } = e, { path: a } = e, s = 0 === a.length ? i : `At path: ${a.join(".")} -- ${i}`;
		super(o ?? s), null != o && (this.cause = s), Object.assign(this, l), this.name = this.constructor.name, this.failures = () => r ??= [e, ...t()];
	}
};
let oG = Symbol("Type");
function* oW(e, t, r, i) {
	let o, l = e;
	for (let e of (("object" != typeof (o = l) || "function" != typeof o[Symbol.iterator]) && (l = [l]), l)) {
		let o = function(e, t, r, i) {
			if (!0 === e) return;
			let o = {};
			o = !1 === e ? {} : ep(e) ? { message: e } : e;
			let { path: l, branch: a, node: s } = t, { type: u } = r, { refinement: c, message: f = eD(i) ? "Required" : `Expected a value of type \`${u}\`${c ? ` with refinement \`${c}\`` : ""}, but received: \`${i}\`` } = o;
			return {
				...o,
				value: i,
				type: u,
				refinement: c,
				key: l[l.length - 1],
				path: l,
				branch: a,
				node: s,
				message: f
			};
		}(e, t, r, i);
		o && (yield o);
	}
}
function oq(e, t, r = {}) {
	let i = oK(e, t, r), o = function(e) {
		let { done: t, value: r } = e.next();
		return t ? void 0 : r;
	}(i);
	return o[0] ? [new oz(o[0], function* () {
		for (let e of i) e[0] && (yield e[0]);
	}), void 0] : [void 0, o[1]];
}
function* oK(e, t, r = {}) {
	let { path: i = [], branch: o = [e], node: l = { current: t }, coerce: a = !1, mask: s = !1 } = r, u = {
		mask: s,
		path: i,
		branch: o,
		node: l
	}, c = e;
	if (a) {
		let r = t.coercer(e, u);
		void 0 != r && (c = r);
	}
	let f = oH.valid;
	for (let i of oW(t.validator(c, u), u, t, e)) i.explanation = r.message, f = oH.not_valid, yield [i, void 0];
	for (let [e, p, d] of t.entries(c, u)) for (let t of oK(p, d, {
		path: void 0 === e ? i : [...i, e],
		branch: void 0 === e ? o : [...o, p],
		node: void 0 === e ? l : {
			current: d,
			parent: l
		},
		coerce: a,
		mask: s,
		message: r.message
	})) t[0] ? (f = null != t[0].refinement ? oH.not_refined : oH.not_valid, yield [t[0], void 0]) : a && (p = t[1], void 0 === e ? c = p : c instanceof Map ? c.set(e, p) : c instanceof Set ? c.add(p) : eu(c) && (c[e] = p));
	if (f !== oH.not_valid) for (let i of oW(t.refiner(c, u), u, t, e)) i.explanation = r.message, f = oH.not_refined, yield [i, void 0];
	f === oH.valid && (yield [void 0, c]);
}
var oH = ((B = oH || {})[B.valid = 0] = "valid", B[B.not_refined = 1] = "not_refined", B[B.not_valid = 2] = "not_valid", B);
let oY = (e) => (...t) => {
	let r = e(...t), i = (e, t) => {
		let i = oV.get(e, t) ?? {};
		oV.define(e, t, {
			...i,
			type: r
		});
	};
	return i.toString = () => `@type:${r.type}`, new Proxy(i, {
		ownKeys: () => [...Object.getOwnPropertyNames(r), ...Object.getOwnPropertySymbols(r)],
		get: (e, t) => r[t]
	});
}, oJ = (e) => (...t) => {
	let r = (r) => e(r, ...t);
	return new Proxy((e, t) => {
		oV.define(e, t, (e) => {
			(e.modifies ??= []).push({ modify: r });
		}, {});
	}, { get(e, t) {
		if ("modify" == t) return r;
	} });
};
var oX = class e {
	static RecordKey = Symbol("RecordKey");
	static meta = Symbol("meta");
	static optional = Symbol("optional");
	static underlying = Symbol("underlying");
	static unwrap = Symbol("unwrap");
	static extractSchema = (e) => new o0().toValue(e);
	static extractMeta = (t) => new o0().toValue(t.meta ?? t[e.meta]);
	static create(t, r, i) {
		let o, l = r ?? t[e.underlying]?.schema ?? {};
		return new Proxy({}, {
			ownKeys(e) {
				let r = /* @__PURE__ */ new Map();
				if (i) {
					if (t[i]) for (let e of Object.getOwnPropertyNames(t[i])) r.set(e, e);
					if (l && l[i]) for (let e of Object.getOwnPropertyNames(l[i])) r.set(e, e);
				} else {
					for (let e of Object.getOwnPropertyNames(t)) r.set(e, e);
					if (l) for (let e of Object.getOwnPropertyNames(l)) r.set(e, e);
				}
				return [...r.keys()];
			},
			get(r, a) {
				if (a === e.meta) return o ??= e.create(t, l, e.meta);
				if (i) {
					if (x(t)) {
						let e = t?.[i]?.[a];
						if (!eD(e)) return e;
					}
					return l ? l?.[i]?.[a] : void 0;
				}
				if (x(t)) {
					let e = t?.[a];
					if (!eD(e)) return e;
				}
				return l ? l[a] : void 0;
			}
		});
	}
	static schemaProp(e, t) {
		return oZ(e.schema, t);
	}
	static metaProp(e, t) {
		return oQ(e.schema, t);
	}
}, oZ = (e, t) => {
	if (x(e)) return e[t] ?? (e[oX.unwrap] ? oZ(e[oX.unwrap]().schema, t) : void 0);
}, oQ = (e, t) => {
	if (x(e)) return e[oX.meta]?.[t] ?? (e[oX.unwrap] ? oQ(e[oX.unwrap]().schema, t) : void 0);
}, o0 = class {
	constructor(e = !1) {
		this.deref = e;
	}
	toValue(e) {
		if (e) {
			if (!eD(e.schema)) return this.toValue(e.schema);
			if (this.deref && e[oX.unwrap]) return this.toValue(e[oX.unwrap]());
			if (eg(e)) return this.toArray(e);
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
}, o1 = class e {
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
		return "" == e && t ? oX.RecordKey : e.replace(/~1/g, "/").replace(/~0/g, "~");
	}
	static escape(e) {
		return e == oX.RecordKey ? "" : e.toString().replace(/~/g, "~0").replace(/\//g, "~1");
	}
	static get(t, r) {
		let i = Array.isArray(r) ? r : e.parse(r);
		for (let e = 0; e < i.length; e++) {
			let r = i[e];
			if (e > 0 && r == oX.RecordKey) return i[e - 1];
			if (!("object" == typeof t && r in t)) throw Error("Invalid reference token: " + r);
			t = t[r];
		}
		return t;
	}
}, o2 = class e {
	static define = oY((t = () => !0) => new class extends e {
		validator(e, r) {
			return t(e, r);
		}
	}(null));
	static fromTypeObject = (t, r) => {
		let i = t.type ?? r ?? new e({});
		return t.modifies ? i.use(...t.modifies ?? []) : i;
	};
	[oG] = oG;
	schema;
	constructor(e) {
		if (e) {
			this.schema = oX.create(e);
			return;
		}
		this.schema = e ?? null;
	}
	get meta() {
		return this.schema ? this.schema[oX.meta] : {};
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
		if (ep(e)) {
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
	*entries(e, t = oU) {}
	validate(e, t = {}) {
		return oq(e, this, t);
	}
	create(e) {
		let t = oq(e, this, { coerce: !0 });
		if (t[0]) throw t[0];
		return t[1];
	}
	mask(e) {
		let t = oq(e, this, {
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
		return o4.create(this);
	}
	default(e) {
		return o3.create(this, e);
	}
}, o6 = class e extends o2 {
	static of(t, r) {
		return new e({
			...r,
			[oX.underlying]: t
		});
	}
	static refine(t, r, i) {
		return new class extends e {
			*refiner(e, o) {
				for (let l of (yield* this.unwrap.refiner(e, o), oW(r(e, o), o, t, e))) yield {
					...l,
					refinement: Object.keys(i).join(",")
				};
			}
		}({
			...i,
			[oX.underlying]: t
		});
	}
	get unwrap() {
		let e = this.schema[oX.unwrap];
		return e ? e() : this.schema[oX.underlying];
	}
	get type() {
		return this.unwrap.type;
	}
	*entries(e, t = oU) {
		yield* this.unwrap.entries(e, {
			...t,
			node: {
				current: this,
				parent: t.node
			}
		});
	}
	validator(e, t) {
		return oW(this.unwrap.validator(e, t), t, this, e);
	}
	refiner(e, t) {
		return oW(this.unwrap.refiner(e, t), t, this, e);
	}
	coercer(e, t) {
		return this.unwrap.coercer(e, t);
	}
}, o3 = class e extends o6 {
	static create = oY((t, r) => new e({
		default: r,
		[oX.underlying]: t
	}));
	coercer(e, t) {
		return void 0 === e ? this.schema.default : super.unwrap.coercer(e, t);
	}
}, o4 = class e extends o6 {
	static create = oY((t) => new e({
		[oX.underlying]: t,
		[oX.optional]: t
	}));
	refiner(e, t) {
		return void 0 === e || super.unwrap.refiner(e, t);
	}
	validator(e, t) {
		return void 0 === e || super.unwrap.validator(e, t);
	}
}, o8 = class e extends o6 {
	static create = oY((t, r) => new e({
		$ref: t,
		[oX.unwrap]: r
	}));
}, o5 = class e extends o2 {
	static create = oY(() => new e());
	constructor() {
		super({});
	}
	get type() {
		return "any";
	}
	validator() {
		return !0;
	}
}, o7 = class e extends o2 {
	static create = oY(() => new e({ type: "null" }));
	get type() {
		return "null";
	}
	validator(e, t) {
		return null === e;
	}
	coercer(e, t) {
		return e;
	}
}, o9 = class e extends o2 {
	static create = oY(() => new e({ type: "string" }));
	get type() {
		return this.schema.type;
	}
	validator(e, t) {
		return ep(e);
	}
	coercer(e, t) {
		return eD(e) || null === e ? e : String(e);
	}
}, le = class e extends o2 {
	static create = oY(() => new e({ type: "number" }));
	get type() {
		return this.schema.type;
	}
	validator(e, t) {
		return ew(e);
	}
	coercer(e, t) {
		try {
			let t = void 0 != e ? parseFloat(String(e)) : void 0;
			if (ew(t)) return t;
		} catch (e) {}
	}
}, lt = class e extends o2 {
	static create = oY(() => new e({ type: "integer" }));
	get type() {
		return this.schema.type;
	}
	validator(e, t) {
		return eV(e);
	}
	coercer(e, t) {
		try {
			let t = void 0 != e ? parseInt(String(e)) : void 0;
			return eV(t) ? t : void 0;
		} catch (e) {
			return;
		}
	}
}, lr = class e extends o2 {
	static create = oY(() => new e({ type: "boolean" }));
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
}, ln = class e extends o2 {
	static create = oY(() => new e({
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
}, li = class e extends o2 {
	static create = oY(e.createEnum);
	static createEnum(t) {
		return new e({ enum: t });
	}
	static literal = oY((t) => new e({ enum: [t] }));
	static nativeEnum = oY((t) => new e({ enum: Object.values(t) }));
	get type() {
		return "enums";
	}
	validator(e, t) {
		return this.schema.enum.includes(e);
	}
	coercer(e, t) {
		return e;
	}
}, lo = class e extends o2 {
	static create = oY(() => new e(!1));
	get type() {
		return "never";
	}
	validator(e, t) {
		return !1;
	}
	coercer(e, t) {
		return e;
	}
}, ll = class e extends o2 {
	static create(t) {
		let r = (e = {}) => {
			let t = [];
			for (let [r, i] of Object.entries(e)) oX.schemaProp(i, oX.optional) || t.push(r);
			return t;
		};
		return oY(() => {
			if (t) {
				if (oB(t)) {
					let i = new t(), o = {};
					for (let [e, t] of Object.entries(i)) o[e] = li.literal(t);
					for (let e of oV.getOwnPropertyNames(i)) {
						let t = oV.get(i, e);
						if (t) {
							let r = o2.fromTypeObject(t, o[e]);
							e in o ? o[e] = r.default(o[e].schema?.enum?.[0]) : o[e] = r;
						}
					}
					return new e({
						type: "object",
						properties: o,
						required: r(o),
						additionalProperties: lo.create()
					});
				}
				return new e({
					type: "object",
					properties: t,
					required: r(t),
					additionalProperties: lo.create()
				});
			}
			return new e({
				type: "object",
				properties: {},
				required: [],
				additionalProperties: lo.create()
			});
		})();
	}
	get type() {
		return this.schema.type;
	}
	*entries(e, t = oU) {
		if (eu(e)) {
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
		return eu(e);
	}
	coercer(e, t) {
		if (eu(e)) {
			let r = { ...e };
			if (t.mask) {
				let e = this.schema.properties;
				if (e) for (let t in r) void 0 === e[t] && delete r[t];
			}
			return r;
		}
		return super.coercer(e, t);
	}
}, la = class e extends o2 {
	static create = oY((t, r) => new e({
		type: "object",
		propertyNames: t,
		additionalProperties: r
	}));
	get type() {
		return "record";
	}
	*entries(e) {
		if (eu(e)) for (let [t, r] of Object.entries(e)) yield [
			oX.RecordKey,
			t,
			this.schema.propertyNames
		], yield [
			t,
			r,
			this.schema.additionalProperties
		];
	}
	validator(e) {
		return eu(e);
	}
}, ls = class e extends o2 {
	static create = oY((t) => new e({
		type: "array",
		items: t
	}));
	get type() {
		return this.schema.type;
	}
	*entries(e, t = oU) {
		if (Array.isArray(e)) for (let [t, r] of e.entries()) yield [
			t,
			r,
			this.schema.items
		];
	}
	validator(e) {
		return eg(e);
	}
	coercer(e) {
		return eg(e) ? e.slice() : e;
	}
}, lu = class e extends o2 {
	static create = oY((t) => new e({
		type: "array",
		items: t
	}));
	get type() {
		return "tuple";
	}
	*entries(e, t) {
		if (eg(e)) {
			let t = Math.max(this.schema.items.length, e.length);
			for (let r = 0; r < t; r++) yield [
				r,
				e[r],
				this.schema.items[r] ?? lo.create()
			];
		}
	}
	validator(e) {
		return eg(e) && e.length === this.schema.items.length;
	}
	coercer(e) {
		return eg(e) ? e.slice() : e;
	}
}, lc = class e extends o2 {
	static create = oY((...t) => new e({ allOf: t }));
	get type() {
		return "intersection";
	}
	*entries(e, t = oU) {
		for (let r of this.schema.allOf) yield* r.entries(e, t);
	}
	*validator(e, t) {
		for (let r of this.schema.allOf) yield* oW(r.validator(e, t), t, this, e);
	}
	*refiner(e, t) {
		for (let r of this.schema.allOf) yield* oW(r.refiner(e, t), t, this, e);
	}
}, lf = class e extends o2 {
	static create = oY((...t) => new e({ oneOf: t }));
	static discriminatorMapping(t, ...r) {
		return oY(() => {
			let i = [];
			if (1 == r.length && r[0].constructor == Object) for (let [e, o] of Object.entries(r[0])) if (oX.schemaProp(o, "$ref")) i.push(o);
			else {
				let r = { [t]: li.literal(e) };
				for (let [e, t, i] of o.entries({}, oU)) r[String(e)] = i;
				i.push(ll.create(r));
			}
			else for (let e of r) oB(e) && i.push(ll.create(e));
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
				let o = oX.schemaProp(e, "properties")[t];
				if (!o) continue;
				let l = o.schema.enum;
				l && r.push(...l), i.push(o.meta);
			}
			return o6.of(li.create(r), { [oX.meta]: oX.create(i[0], e.node?.current.meta ?? {}) });
		})();
	}
	_discriminatorMappingProps = /* @__PURE__ */ new Map();
	discriminatorMapping(e, t, r) {
		if (this._discriminatorMappingProps.get(t)) return this._discriminatorMappingProps.get(t);
		if ((this.discriminatorPropType(r)?.schema?.enum ?? []).includes(t)) {
			let r = this.schema.oneOf.find((r) => {
				let i = oX.schemaProp(r, "properties")[e];
				if (i) {
					let [e, r] = i.validate(t);
					return !e;
				}
				return !1;
			});
			if (r) {
				if (!this._discriminatorMappingProps.has(t)) {
					let i = {};
					for (let [t, o] of Object.entries(oX.schemaProp(r, "properties"))) t !== e && (i[t] = o);
					this._discriminatorMappingProps.set(t, i);
				}
				return this._discriminatorMappingProps.get(t);
			}
		}
		return {};
	}
	*entries(e, t = oU) {
		if (this.schema.discriminator) {
			let r = this.schema.discriminator.propertyName, i = e?.[r];
			yield* ll.create({
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
			let [r, i] = oq(e, t, { coerce: !0 });
			if (!r) return i;
		}
		return e;
	}
	validator(e, t) {
		if (this.schema.discriminator) {
			let r = this.schema.discriminator.propertyName, i = e?.[r];
			return ll.create({
				[r]: this.discriminatorPropType(t),
				...this.discriminatorMapping(r, i, t)
			}).validator(e, t);
		}
		let r = [];
		for (let i of this.schema.oneOf) {
			let [ ...o] = oK(e, i, t), [l] = o;
			if (l && !l[0]) return [];
			for (let [e] of o) e && r.push(e);
		}
		return [`Expected the value to satisfy a union of \`${this.schema.oneOf.map((e) => e.type).join(" | ")}\`, but received: ${e}`, ...r];
	}
}, lp = e({
	annotate: () => lq,
	any: () => lh,
	array: () => l$,
	binary: () => lk,
	boolean: () => lP,
	custom: () => lU,
	defaults: () => lG,
	discriminatorMapping: () => lB,
	enums: () => lR,
	exclusiveMaximum: () => lj,
	exclusiveMinimum: () => lS,
	integer: () => lO,
	intersection: () => lF,
	literal: () => lT,
	maxItems: () => lL,
	maxLength: () => lb,
	maximum: () => lA,
	minItems: () => lD,
	minLength: () => lg,
	minimum: () => lx,
	multipleOf: () => lE,
	nativeEnum: () => lC,
	never: () => lv,
	nil: () => ly,
	number: () => lw,
	object: () => lM,
	optional: () => lW,
	pattern: () => l_,
	record: () => lI,
	ref: () => ld,
	refine: () => lz,
	string: () => lm,
	tuple: () => lN,
	union: () => lV
});
let ld = o8.create, lh = o5.create, lv = lo.create, ly = o7.create, lm = o9.create, lg = oJ((e, t, r) => o6.refine(e, (e) => !!e && e.length >= t || (r ?? `Expected string value length great than or equal ${t}, but received "${e}"`), { minLength: t })), lb = oJ((e, t, r) => o6.refine(e, (e) => !!e && e.length <= t || (r ?? `Expected string value length less than or equal ${t}, but received "${e}"`), { maxLength: t })), l_ = oJ((e, t, r) => {
	let i = o6.refine(e, (i) => !!t.test(i) || (r ?? `Expected a ${e.type} matching \`/${t.source}/\` but received "${i}"`), { pattern: t.source });
	return r ? i.use(lq({ "x-pattern-err-msg": r })) : i;
}), lw = le.create, lO = lt.create, lx = oJ((e, t, r) => o6.refine(e, (e) => e >= t || (r ?? `Expected value great than or equal ${t}, but received "${e}"`), { minimum: t })), lS = oJ((e, t, r) => o6.refine(e, (e) => e > t || (r ?? `Expected value great than ${t}, but received "${e}"`), { exclusiveMinimum: t })), lA = oJ((e, t, r) => o6.refine(e, (e) => e <= t || (r ?? `Expected value less than or equal ${t}, but received "${e}"`), { maximum: t })), lj = oJ((e, t, r) => o6.refine(e, (e) => e < t || (r ?? `Expected value less than or equal ${t}, but received "${e}"`), { exclusiveMaximum: t })), lE = oJ((e, t, r) => o6.refine(e, (e) => e % t == 0 || (r ?? `Expected value multiple of ${t}, but received "${e}"`), { multipleOf: t })), lP = lr.create, lk = ln.create, lR = li.create, lC = li.nativeEnum, lT = li.literal, lM = ll.create, lI = la.create, lN = lu.create, l$ = ls.create, lD = oJ((e, t, r) => o6.refine(e, (e) => !!eg(e) && e.length >= t || (r ?? `Expected array value at least ${t}, but received "${e?.length}"`), { minItems: t })), lL = oJ((e, t, r) => o6.refine(e, (e) => !!eg(e) && e.length <= t || (r ?? `Expected array value  ${t}, but received "${e?.length}"`), { maxItems: t })), lF = lc.create, lV = lf.create, lB = lf.discriminatorMapping, lU = o2.define, lz = o6.refine, lG = oJ((e, t) => o3.create(e, t)), lW = oJ((e) => o4.create(e)), lq = oJ((e, t) => o6.of(e, { [oX.meta]: t })), lK = (e) => e.split("/")?.findLast(() => !0) ?? "";
var lH = class e {
	static decode(t, r) {
		return !1 === t ? lv() : new e(r).decode(t);
	}
	def = /* @__PURE__ */ new Map();
	constructor(e) {
		this.resolveRef = e;
	}
	decode(e) {
		let t = structuredClone(e), r = this._decode(t), i = !1;
		if (t?.title && (r = r.use(lq({ title: t?.title })), i = !0), t?.description) if (i) r = r.use(lq({ description: t?.description }));
		else {
			let [e, ...i] = t?.description.split(/[.\n]/);
			r = r.use(lq({
				title: e,
				description: i ? i.join("\n").trim() : void 0
			}));
		}
		if (t) {
			for (let e of l2) if (!eD(t[e])) {
				if ("pattern" == e) {
					r = r.use(l_(new RegExp(t[e]), t["x-pattern-err-msg"])), delete t[e];
					continue;
				}
				let i = lp[e];
				i && (r = r.use(i(t[e])), delete t[e]);
			}
			delete t.title, delete t.description, Object.keys(t).length > 0 && (r = r.use(lq(t)));
		}
		return r;
	}
	ref = (e) => {
		let t = this.def.get(e);
		if (t) return t;
		throw Error(`undefined type ${e}`);
	};
	_decode(e) {
		let t = l3(e);
		if (t.$ref) {
			let [e, r] = this.resolveRef(t.$ref);
			return this.def.has(r) || (this.def.set(r, lh()), this.def.set(r, this.decode(e))), ld(r, () => this.ref(r));
		}
		if (t.enum) {
			let e = lR(t.enum);
			return t["x-enum-labels"] ? e.use(lq({ enumLabels: t["x-enum-labels"] })) : e;
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
					let t = this.decode(i), o = oX.schemaProp(t, "properties")?.[e];
					if (o) {
						let e = oX.schemaProp(o, "enum")?.[0];
						eD(e) || (r[`${e}`] = t);
					}
				}
				return lB(e, r);
			}
		}
		if (t.oneOf) {
			let e = t.oneOf.map((e) => this.decode(e));
			return 1 === e.length ? e[0] : lV(...e);
		}
		if (t.allOf) {
			let e = t.allOf.map((e) => this.decode(e));
			return 1 === e.length ? e[0] : lF(...e);
		}
		if (lY(t)) {
			if (t.properties) {
				let e = t.required ?? [], r = {};
				for (let [i, o] of Object.entries(t.properties)) {
					let t = this.decode(o);
					e.includes(i) || (t = t.optional()), r[i] = t;
				}
				return lM(r);
			}
			let e = t.additionalProperties ?? {};
			return e ? lI(this.decode(t.propertyNames ?? { type: "string" }), this.decode(e)) : lM();
		}
		return lX(t) ? eg(t.items) ? lN(t.items.map((e) => this.decode(e))) : l$(this.decode(t.items)) : lQ(t) ? "binary" === t.format ? lk() : lm() : lZ(t) ? "integer" === t.type ? lO() : lw() : l0(t) ? lP() : lJ(t) ? ly() : lh();
	}
}, lY = (e) => "object" === e.type, lJ = (e) => "null" === e.type, lX = (e) => "array" === e.type, lZ = (e) => "number" === e.type || "integer" === e.type, lQ = (e) => "string" === e.type, l0 = (e) => "boolean" === e.type, l1 = {
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
let l2 = [
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
var l6 = (e, t) => t.some((t) => Object.hasOwn(e, t)), l3 = (e = {}) => {
	if (eL(e)) return {};
	if (!e.type) {
		for (let t in l1) if (l6(e, l1[t])) {
			e.type = t;
			break;
		}
	}
	e.const && (e.enum = [e.const]);
	let t = (t) => {
		e[t] && (e[t] = e[t].filter((r) => {
			let i = l3(r);
			return !!l6(i, [
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
}, l4 = Symbol("component");
let l8 = (e) => eR(e) && e[l4] === l4, l5 = (e) => {
	let t;
	return !!(t = Object.values(e)[0]) && t[oG] == oG;
};
function l7(...e) {
	let t, r = {}, i = {};
	for (let o of e) {
		if (e$(o)) {
			t = o;
			continue;
		}
		eD(t) ? r = o : i = o;
	}
	let [o, l] = function(e, t = h) {
		if (!e) return [[], []];
		let r = d(e) ? e : Object.values(e);
		t = es(t);
		let i = [], o = [];
		for (let e = 0; e < r.length; e++) {
			let l = r[e];
			t(l) ? i.push(l) : o.push(l);
		}
		return [i, o];
	}(Object.keys(r), (e) => /^on[A-Z]/.test(e)), a = {
		emits: [...o.map((e) => eW(e.slice(2))), ...i.emits ?? []],
		props: [...l.filter((e) => !/^[$]/.test(e)), ...i.props ?? []].reduce((e, t) => {
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
		[l4]: l4
	};
}
let l9 = (e, t) => new Proxy(e, { get: (e, r) => t[r] ?? e[r] });
var ae = "undefined" != typeof document;
function at(e) {
	return "object" == typeof e || "displayName" in e || "props" in e || "__vccOpts" in e;
}
var ar = Object.assign;
function an(e, t) {
	let r = {};
	for (let i in t) {
		let o = t[i];
		r[i] = ao(o) ? o.map(e) : e(o);
	}
	return r;
}
var ai = () => {}, ao = Array.isArray;
function al(e, t) {
	let r = {};
	for (let i in e) r[i] = i in t ? t[i] : e[i];
	return r;
}
var aa = /#/g, as = /&/g, au = /\//g, ac = /=/g, af = /\?/g, ap = /\+/g, ad = /%5B/g, ah = /%5D/g, av = /%5E/g, ay = /%60/g, am = /%7B/g, ag = /%7C/g, ab = /%7D/g, a_ = /%20/g;
function aw(e) {
	return null == e ? "" : encodeURI("" + e).replace(ag, "|").replace(ad, "[").replace(ah, "]");
}
function aO(e) {
	return aw(e).replace(ap, "%2B").replace(a_, "+").replace(aa, "%23").replace(as, "%26").replace(ay, "`").replace(am, "{").replace(ab, "}").replace(av, "^");
}
function ax(e) {
	return aw(e).replace(aa, "%23").replace(af, "%3F").replace(au, "%2F");
}
function aS(e) {
	if (null == e) return null;
	try {
		return decodeURIComponent("" + e);
	} catch (e) {}
	return "" + e;
}
var aA = /\/$/;
function aj(e, t, r = "/") {
	let i, o = {}, l = "", a = "", s = t.indexOf("#"), u = t.indexOf("?");
	return (u = s >= 0 && u > s ? -1 : u) >= 0 && (i = t.slice(0, u), o = e(l = t.slice(u, s > 0 ? s : t.length))), s >= 0 && (i = i || t.slice(0, s), a = t.slice(s, t.length)), {
		fullPath: (i = function(e, t) {
			let r, i;
			if (e.startsWith("/")) return e;
			if (!e) return t;
			let o = t.split("/"), l = e.split("/"), a = l[l.length - 1];
			(".." === a || "." === a) && l.push("");
			let s = o.length - 1;
			for (r = 0; r < l.length; r++) if ("." !== (i = l[r])) if (".." === i) s > 1 && s--;
			else break;
			return o.slice(0, s).join("/") + "/" + l.slice(r).join("/");
		}(null != i ? i : t, r)) + l + a,
		path: i,
		query: o,
		hash: aS(a)
	};
}
function aE(e, t) {
	return t && e.toLowerCase().startsWith(t.toLowerCase()) ? e.slice(t.length) || "/" : e;
}
function aP(e, t) {
	return (e.aliasOf || e) === (t.aliasOf || t);
}
function ak(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let o in e) {
		var r, i;
		if (r = e[o], i = t[o], ao(r) ? !aR(r, i) : ao(i) ? !aR(i, r) : r !== i) return !1;
	}
	return !0;
}
function aR(e, t) {
	return ao(t) ? e.length === t.length && e.every((e, r) => e === t[r]) : 1 === e.length && e[0] === t;
}
var aC = {
	path: "/",
	name: void 0,
	params: {},
	query: {},
	hash: "",
	fullPath: "/",
	matched: [],
	meta: {},
	redirectedFrom: void 0
}, aT = ((U = {}).pop = "pop", U.push = "push", U), aM = ((z = {}).back = "back", z.forward = "forward", z.unknown = "", z), aI = /^[^#]+#/;
function aN(e, t) {
	return e.replace(aI, "#") + t;
}
var a$ = () => ({
	left: window.scrollX,
	top: window.scrollY
});
function aD(e, t) {
	return (history.state ? history.state.position - t : -1) + e;
}
var aL = /* @__PURE__ */ new Map();
function aF(e) {
	return "string" == typeof e || "symbol" == typeof e;
}
var aV = ((G = {})[G.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", G[G.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", G[G.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", G[G.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", G[G.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", G), aB = Symbol("");
function aU(e, t) {
	return ar(Error(), {
		type: e,
		[aB]: !0
	}, t);
}
function az(e, t) {
	return e instanceof Error && aB in e && (null == t || !!(e.type & t));
}
function aG(e) {
	let t = {};
	if ("" === e || "?" === e) return t;
	let r = ("?" === e[0] ? e.slice(1) : e).split("&");
	for (let e = 0; e < r.length; ++e) {
		let i = r[e].replace(ap, " "), o = i.indexOf("="), l = aS(o < 0 ? i : i.slice(0, o)), a = o < 0 ? null : aS(i.slice(o + 1));
		if (l in t) {
			let e = t[l];
			ao(e) || (e = t[l] = [e]), e.push(a);
		} else t[l] = a;
	}
	return t;
}
function aW(e) {
	let t = "";
	for (let r in e) {
		let i = e[r];
		if (r = aO(r).replace(ac, "%3D"), null == i) {
			void 0 !== i && (t += (t.length ? "&" : "") + r);
			continue;
		}
		(ao(i) ? i.map((e) => e && aO(e)) : [i && aO(i)]).forEach((e) => {
			void 0 !== e && (t += (t.length ? "&" : "") + r, null != e && (t += "=" + e));
		});
	}
	return t;
}
aV.MATCHER_NOT_FOUND, aV.NAVIGATION_GUARD_REDIRECT, aV.NAVIGATION_ABORTED, aV.NAVIGATION_CANCELLED, aV.NAVIGATION_DUPLICATED;
var aq = Symbol(""), aK = Symbol(""), aH = Symbol(""), aY = Symbol(""), aJ = Symbol("");
function aX() {
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
function aZ(e, t, r, i, o, l = (e) => e()) {
	let a = i && (i.enterCallbacks[o] = i.enterCallbacks[o] || []);
	return () => new Promise((s, u) => {
		let c = (e) => {
			if (!1 === e) u(aU(aV.NAVIGATION_ABORTED, {
				from: r,
				to: t
			}));
			else if (e instanceof Error) u(e);
			else "string" == typeof e || e && "object" == typeof e ? u(aU(aV.NAVIGATION_GUARD_REDIRECT, {
				from: t,
				to: e
			})) : (a && i.enterCallbacks[o] === a && "function" == typeof e && a.push(e), s());
		}, f = Promise.resolve(l(() => e.call(i && i.instances[o], t, r, c)));
		e.length < 3 && (f = f.then(c)), f.catch((e) => u(e));
	});
}
function aQ(e, t, r, i, o = (e) => e()) {
	let l = [];
	for (let a of e) for (let e in a.components) {
		let s = a.components[e];
		if ("beforeRouteEnter" === t || a.instances[e]) if (at(s)) {
			let u = (s.__vccOpts || s)[t];
			u && l.push(aZ(u, r, i, a, e, o));
		} else {
			let u = s();
			l.push(() => u.then((l) => {
				if (!l) throw Error(`Couldn't resolve component "${e}" at "${a.path}"`);
				let s = l.__esModule || "Module" === l[Symbol.toStringTag] || l.default && at(l.default) ? l.default : l;
				a.mods[e] = l, a.components[e] = s;
				let u = (s.__vccOpts || s)[t];
				return u && aZ(u, r, i, a, e, o)();
			}));
		}
	}
	return l;
}
function a0(e, t) {
	let { pathname: r, search: i, hash: o } = t, l = e.indexOf("#");
	if (l > -1) {
		let t = o.includes(e.slice(l)) ? e.slice(l).length : 1, r = o.slice(t);
		return "/" !== r[0] && (r = "/" + r), aE(r, "");
	}
	return aE(r, e) + i + o;
}
function a1(e, t, r, i = !1, o = !1) {
	return {
		back: e,
		current: t,
		forward: r,
		replaced: i,
		position: window.history.length,
		scroll: o ? a$() : null
	};
}
function a2(e) {
	let t = function(e) {
		let { history: t, location: r } = window, i = { value: a0(e, r) }, o = { value: t.state };
		function l(i, l, a) {
			let s = e.indexOf("#"), u = s > -1 ? (r.host && document.querySelector("base") ? e : e.slice(s)) + i : location.protocol + "//" + location.host + e + i;
			try {
				t[a ? "replaceState" : "pushState"](l, "", u), o.value = l;
			} catch (e) {
				console.error(e), r[a ? "replace" : "assign"](u);
			}
		}
		return o.value || l(i.value, {
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
				let a = ar({}, o.value, t.state, {
					forward: e,
					scroll: a$()
				});
				l(a.current, a, !0), l(e, ar({}, a1(i.value, e, null), { position: a.position + 1 }, r), !1), i.value = e;
			},
			replace: function(e, r) {
				l(e, ar({}, t.state, a1(o.value.back, e, o.value.forward, !0), r, { position: o.value.position }), !0), i.value = e;
			}
		};
	}(e = function(e) {
		if (!e) if (ae) {
			let t = document.querySelector("base");
			e = (e = t && t.getAttribute("href") || "/").replace(/^\w+:\/\/[^\/]+/, "");
		} else e = "/";
		return "/" !== e[0] && "#" !== e[0] && (e = "/" + e), e.replace(aA, "");
	}(e)), r = function(e, t, r, i) {
		let o = [], l = [], a = null, s = ({ state: l }) => {
			let s = a0(e, location), u = r.value, c = t.value, f = 0;
			if (l) {
				if (r.value = s, t.value = l, a && a === u) {
					a = null;
					return;
				}
				f = c ? l.position - c.position : 0;
			} else i(s);
			o.forEach((e) => {
				e(r.value, u, {
					delta: f,
					type: aT.pop,
					direction: f ? f > 0 ? aM.forward : aM.back : aM.unknown
				});
			});
		};
		function u() {
			if ("hidden" === document.visibilityState) {
				let { history: e } = window;
				e.state && e.replaceState(ar({}, e.state, { scroll: a$() }), "");
			}
		}
		return window.addEventListener("popstate", s), window.addEventListener("pagehide", u), document.addEventListener("visibilitychange", u), {
			pauseListeners: function() {
				a = r.value;
			},
			listen: function(e) {
				o.push(e);
				let t = () => {
					let t = o.indexOf(e);
					t > -1 && o.splice(t, 1);
				};
				return l.push(t), t;
			},
			destroy: function() {
				for (let e of l) e();
				l = [], window.removeEventListener("popstate", s), window.removeEventListener("pagehide", u), document.removeEventListener("visibilitychange", u);
			}
		};
	}(e, t.state, t.location, t.replace), i = ar({
		location: "",
		base: e,
		go: function(e, t = !0) {
			t || r.pauseListeners(), history.go(e);
		},
		createHref: aN.bind(null, e)
	}, t, r);
	return Object.defineProperty(i, "location", {
		enumerable: !0,
		get: () => t.location.value
	}), Object.defineProperty(i, "state", {
		enumerable: !0,
		get: () => t.state.value
	}), i;
}
var a6 = ((W = {})[W.Static = 0] = "Static", W[W.Param = 1] = "Param", W[W.Group = 2] = "Group", W), a3 = ((q = a3 || {})[q.Static = 0] = "Static", q[q.Param = 1] = "Param", q[q.ParamRegExp = 2] = "ParamRegExp", q[q.ParamRegExpEnd = 3] = "ParamRegExpEnd", q[q.EscapeNext = 4] = "EscapeNext", q), a4 = {
	type: a6.Static,
	value: ""
}, a8 = /[a-zA-Z0-9_]/, a5 = "[^/]+?", a7 = {
	sensitive: !1,
	strict: !1,
	start: !0,
	end: !0
}, a9 = ((K = a9 || {})[K._multiplier = 10] = "_multiplier", K[K.Root = 90] = "Root", K[K.Segment = 40] = "Segment", K[K.SubSegment = 30] = "SubSegment", K[K.Static = 40] = "Static", K[K.Dynamic = 20] = "Dynamic", K[K.BonusCustomRegExp = 10] = "BonusCustomRegExp", K[K.BonusWildcard = -50] = "BonusWildcard", K[K.BonusRepeatable = -20] = "BonusRepeatable", K[K.BonusOptional = -8] = "BonusOptional", K[K.BonusStrict = .7000000000000001] = "BonusStrict", K[K.BonusCaseSensitive = .25] = "BonusCaseSensitive", K), se = /[.+*?^${}()[\]/\\]/g;
function st(e, t) {
	let r = 0, i = e.score, o = t.score;
	for (; r < i.length && r < o.length;) {
		let e = function(e, t) {
			let r = 0;
			for (; r < e.length && r < t.length;) {
				let i = t[r] - e[r];
				if (i) return i;
				r++;
			}
			return e.length < t.length ? 1 === e.length && e[0] === a9.Static + a9.Segment ? -1 : 1 : e.length > t.length ? 1 === t.length && t[0] === a9.Static + a9.Segment ? 1 : -1 : 0;
		}(i[r], o[r]);
		if (e) return e;
		r++;
	}
	if (1 === Math.abs(o.length - i.length)) {
		if (sr(i)) return 1;
		if (sr(o)) return -1;
	}
	return o.length - i.length;
}
function sr(e) {
	let t = e[e.length - 1];
	return e.length > 0 && t[t.length - 1] < 0;
}
var sn = {
	strict: !1,
	end: !0,
	sensitive: !1
};
function si(e, t) {
	let r = {};
	for (let i of t) i in e && (r[i] = e[i]);
	return r;
}
function so(e) {
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
function sl(e) {
	for (; e;) {
		if (e.record.aliasOf) return !0;
		e = e.parent;
	}
	return !1;
}
function sa({ record: e }) {
	return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function ss(e) {
	let t = n5(aH), r = n5(aY), i = i5(() => {
		let r = rC(e.to);
		return t.resolve(r);
	}), o = i5(() => {
		let { matched: e } = i.value, { length: t } = e, o = e[t - 1], l = r.matched;
		if (!o || !l.length) return -1;
		let a = l.findIndex(aP.bind(null, o));
		if (a > -1) return a;
		let s = sc(e[t - 2]);
		return t > 1 && sc(o) === s && l[l.length - 1].path !== s ? l.findIndex(aP.bind(null, e[t - 2])) : a;
	}), l = i5(() => o.value > -1 && function(e, t) {
		for (let r in t) {
			let i = t[r], o = e[r];
			if ("string" == typeof i) {
				if (i !== o) return !1;
			} else if (!ao(o) || o.length !== i.length || i.some((e, t) => e !== o[t])) return !1;
		}
		return !0;
	}(r.params, i.value.params)), a = i5(() => o.value > -1 && o.value === r.matched.length - 1 && ak(r.params, i.value.params));
	return {
		route: i,
		href: i5(() => i.value.href),
		isActive: l,
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
				let r = t[rC(e.replace) ? "replace" : "push"](rC(e.to)).catch(ai);
				return e.viewTransition && "undefined" != typeof document && "startViewTransition" in document && document.startViewTransition(() => r), r;
			}
			return Promise.resolve();
		}
	};
}
var su = nb({
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
	useLink: ss,
	setup(e, { slots: t }) {
		let r = rv(ss(e)), { options: i } = n5(aH), o = i5(() => ({
			[sf(e.activeClass, i.linkActiveClass, "router-link-active")]: r.isActive,
			[sf(e.exactActiveClass, i.linkExactActiveClass, "router-link-exact-active")]: r.isExactActive
		}));
		return () => {
			var i;
			let l = t.default && (1 === (i = t.default(r)).length ? i[0] : i);
			return e.custom ? l : i7("a", {
				"aria-current": r.isExactActive ? e.ariaCurrentValue : null,
				href: r.href,
				onClick: r.navigate,
				class: o.value
			}, l);
		};
	}
});
function sc(e) {
	return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
var sf = (e, t, r) => null != e ? e : null != t ? t : r, sp = nb({
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
		let i = n5(aJ), o = i5(() => e.route || i.value), l = n5(aK, 0), a = i5(() => {
			let e, t = rC(l), { matched: r } = o.value;
			for (; (e = r[t]) && !e.components;) t++;
			return t;
		}), s = i5(() => o.value.matched[a.value]);
		n8(aK, i5(() => a.value + 1)), n8(aq, s), n8(aJ, o);
		let u = rE();
		return i_(() => [
			u.value,
			s.value,
			e.name
		], ([e, t, r], [i, o, l]) => {
			t && (t.instances[r] = e, o && o !== t && e && e === i && (t.leaveGuards.size || (t.leaveGuards = o.leaveGuards), t.updateGuards.size || (t.updateGuards = o.updateGuards))), !e || !t || o && aP(t, o) && i || (t.enterCallbacks[r] || []).forEach((t) => t(e));
		}, { flush: "post" }), () => {
			let i = o.value, l = e.name, a = s.value, c = a && a.components[l];
			if (!c) return sd(r.default, {
				Component: c,
				route: i
			});
			let f = a.props[l], p = i7(c, ar({}, f ? !0 === f ? i.params : "function" == typeof f ? f(i) : f : null, t, {
				onVnodeUnmounted: (e) => {
					e.component.isUnmounted && (a.instances[l] = null);
				},
				ref: u
			}));
			return sd(r.default, {
				Component: p,
				route: i
			}) || p;
		};
	}
});
function sd(e, t) {
	if (!e) return null;
	let r = e(t);
	return 1 === r.length ? r[0] : r;
}
function sh(e) {
	let t, r, i, o = function(e, t) {
		let r = [], i = /* @__PURE__ */ new Map();
		function o(e, a, s) {
			let u, c, f = !s, p = so(e);
			p.aliasOf = s && s.record;
			let d = al(t, e), h = [p];
			if ("alias" in e) for (let t of "string" == typeof e.alias ? [e.alias] : e.alias) h.push(so(ar({}, p, {
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
					let i = ar(function(e, t) {
						let r = ar({}, a7, t), i = [], o = r.start ? "^" : "", l = [];
						for (let t of e) {
							let e = t.length ? [] : [a9.Root];
							r.strict && !t.length && (o += "/");
							for (let i = 0; i < t.length; i++) {
								let a = t[i], s = a9.Segment + (r.sensitive ? a9.BonusCaseSensitive : 0);
								if (a.type === a6.Static) i || (o += "/"), o += a.value.replace(se, "\\$&"), s += a9.Static;
								else if (a.type === a6.Param) {
									let { value: e, repeatable: r, optional: u, regexp: c } = a;
									l.push({
										name: e,
										repeatable: r,
										optional: u
									});
									let f = c || a5;
									f !== a5 && (s += a9.BonusCustomRegExp);
									let p = r ? `((?:${f})(?:/(?:${f}))*)` : `(${f})`;
									i || (p = u && t.length < 2 ? `(?:/${p})` : "/" + p), u && (p += "?"), o += p, s += a9.Dynamic, u && (s += a9.BonusOptional), r && (s += a9.BonusRepeatable), ".*" === f && (s += a9.BonusWildcard);
								}
								e.push(s);
							}
							i.push(e);
						}
						if (r.strict && r.end) {
							let e = i.length - 1;
							i[e][i[e].length - 1] += a9.BonusStrict;
						}
						r.strict || (o += "/?"), r.end ? o += "$" : r.strict && !o.endsWith("/") && (o += "(?:/|$)");
						let a = new RegExp(o, r.sensitive ? "" : "i");
						return {
							re: a,
							score: i,
							keys: l,
							parse: function(e) {
								let t = e.match(a), r = {};
								if (!t) return null;
								for (let e = 1; e < t.length; e++) {
									let i = t[e] || "", o = l[e - 1];
									r[o.name] = i && o.repeatable ? i.split("/") : i;
								}
								return r;
							},
							stringify: function(t) {
								let r = "", i = !1;
								for (let o of e) for (let e of (i && r.endsWith("/") || (r += "/"), i = !1, o)) if (e.type === a6.Static) r += e.value;
								else if (e.type === a6.Param) {
									let { value: l, repeatable: a, optional: s } = e, u = l in t ? t[l] : "";
									if (ao(u) && !a) throw Error(`Provided param "${l}" is an array but it is not repeatable (* or + modifiers)`);
									let c = ao(u) ? u.join("/") : u;
									if (!c) if (s) o.length < 2 && (r.endsWith("/") ? r = r.slice(0, -1) : i = !0);
									else throw Error(`Missing required param "${l}"`);
									r += c;
								}
								return r || "/";
							}
						};
					}(function(e) {
						let t, r;
						if (!e) return [[]];
						if ("/" === e) return [[a4]];
						if (!e.startsWith("/")) throw Error(`Invalid path "${e}"`);
						function i(e) {
							throw Error(`ERR (${o})/"${c}": ${e}`);
						}
						let o = a3.Static, l = o, a = [];
						function s() {
							t && a.push(t), t = [];
						}
						let u = 0, c = "", f = "";
						function p() {
							c && (o === a3.Static ? t.push({
								type: a6.Static,
								value: c
							}) : o === a3.Param || o === a3.ParamRegExp || o === a3.ParamRegExpEnd ? (t.length > 1 && ("*" === r || "+" === r) && i(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`), t.push({
								type: a6.Param,
								value: c,
								regexp: f,
								repeatable: "*" === r || "+" === r,
								optional: "*" === r || "?" === r
							})) : i("Invalid state to consume buffer"), c = "");
						}
						for (; u < e.length;) {
							if ("\\" === (r = e[u++]) && o !== a3.ParamRegExp) {
								l = o, o = a3.EscapeNext;
								continue;
							}
							switch (o) {
								case a3.Static:
									"/" === r ? (c && p(), s()) : ":" === r ? (p(), o = a3.Param) : c += r;
									break;
								case a3.EscapeNext:
									c += r, o = l;
									break;
								case a3.Param:
									"(" === r ? o = a3.ParamRegExp : a8.test(r) ? c += r : (p(), o = a3.Static, "*" !== r && "?" !== r && "+" !== r && u--);
									break;
								case a3.ParamRegExp:
									")" === r ? "\\" == f[f.length - 1] ? f = f.slice(0, -1) + r : o = a3.ParamRegExpEnd : f += r;
									break;
								case a3.ParamRegExpEnd:
									p(), o = a3.Static, "*" !== r && "?" !== r && "+" !== r && u--, f = "";
									break;
								default: i("Unknown state");
							}
						}
						return o === a3.ParamRegExp && i(`Unfinished custom RegExp for param "${c}"`), p(), s(), a;
					}(e.path), r), {
						record: e,
						parent: t,
						children: [],
						alias: []
					});
					return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i), i;
				}(t, a, d), s ? s.alias.push(u) : ((c = c || u) !== u && c.alias.push(u), f && e.name && !sl(u) && l(e.name)), sa(u) && function(e) {
					let t = function(e, t) {
						let r = 0, i = t.length;
						for (; r !== i;) {
							let o = r + i >> 1;
							0 > st(e, t[o]) ? i = o : r = o + 1;
						}
						let o = function(e) {
							let t = e;
							for (; t = t.parent;) if (sa(t) && 0 === st(e, t)) return t;
						}(e);
						return o && (i = t.lastIndexOf(o, i - 1)), i;
					}(e, r);
					r.splice(t, 0, e), e.record.name && !sl(e) && i.set(e.record.name, e);
				}(u), p.children) {
					let e = p.children;
					for (let t = 0; t < e.length; t++) o(e[t], u, s && s.children[t]);
				}
				s = s || u;
			}
			return c ? () => {
				l(c);
			} : ai;
		}
		function l(e) {
			if (aF(e)) {
				let t = i.get(e);
				t && (i.delete(e), r.splice(r.indexOf(t), 1), t.children.forEach(l), t.alias.forEach(l));
			} else {
				let t = r.indexOf(e);
				t > -1 && (r.splice(t, 1), e.record.name && i.delete(e.record.name), e.children.forEach(l), e.alias.forEach(l));
			}
		}
		return t = al(sn, t), e.forEach((e) => o(e)), {
			addRoute: o,
			resolve: function(e, t) {
				let o, l, a, s = {};
				if ("name" in e && e.name) {
					if (!(o = i.get(e.name))) throw aU(aV.MATCHER_NOT_FOUND, { location: e });
					a = o.record.name, s = ar(si(t.params, o.keys.filter((e) => !e.optional).concat(o.parent ? o.parent.keys.filter((e) => e.optional) : []).map((e) => e.name)), e.params && si(e.params, o.keys.map((e) => e.name))), l = o.stringify(s);
				} else if (null != e.path) l = e.path, (o = r.find((e) => e.re.test(l))) && (s = o.parse(l), a = o.record.name);
				else {
					if (!(o = t.name ? i.get(t.name) : r.find((e) => e.re.test(t.path)))) throw aU(aV.MATCHER_NOT_FOUND, {
						location: e,
						currentLocation: t
					});
					a = o.record.name, s = ar({}, t.params, e.params), l = o.stringify(s);
				}
				let u = [], c = o;
				for (; c;) u.unshift(c.record), c = c.parent;
				return {
					name: a,
					path: l,
					params: s,
					matched: u,
					meta: u.reduce((e, t) => ar(e, t.meta), {})
				};
			},
			removeRoute: l,
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
	}(e.routes, e), l = e.parseQuery || aG, a = e.stringifyQuery || aW, s = e.history, u = aX(), c = aX(), f = aX(), p = rP(aC), d = aC;
	ae && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
	let h = an.bind(null, (e) => "" + e), y = an.bind(null, ax), m = an.bind(null, aS);
	function g(e, t) {
		let r;
		if (t = ar({}, t || p.value), "string" == typeof e) {
			let r = aj(l, e, t.path), i = o.resolve({ path: r.path }, t), a = s.createHref(r.fullPath);
			return ar(r, i, {
				params: m(i.params),
				hash: aS(r.hash),
				redirectedFrom: void 0,
				href: a
			});
		}
		if (null != e.path) r = ar({}, e, { path: aj(l, e.path, t.path).path });
		else {
			let i = ar({}, e.params);
			for (let e in i) i[e] ?? delete i[e];
			r = ar({}, e, { params: y(i) }), t.params = y(t.params);
		}
		let i = o.resolve(r, t), u = e.hash || "";
		i.params = h(m(i.params));
		let c = function(e, t) {
			let r = t.query ? e(t.query) : "";
			return t.path + (r && "?") + r + (t.hash || "");
		}(a, ar({}, e, {
			hash: aw(u).replace(am, "{").replace(ab, "}").replace(av, "^"),
			path: i.path
		})), f = s.createHref(c);
		return ar({
			fullPath: c,
			hash: u,
			query: a === aW ? function(e) {
				let t = {};
				for (let r in e) {
					let i = e[r];
					void 0 !== i && (t[r] = ao(i) ? i.map((e) => null == e ? null : "" + e) : null == i ? i : "" + i);
				}
				return t;
			}(e.query) : e.query || {}
		}, i, {
			redirectedFrom: void 0,
			href: f
		});
	}
	function b(e) {
		return "string" == typeof e ? aj(l, e, p.value.path) : ar({}, e);
	}
	function _(e, t) {
		if (d !== e) return aU(aV.NAVIGATION_CANCELLED, {
			from: t,
			to: e
		});
	}
	function w(e, t) {
		let r = e.matched[e.matched.length - 1];
		if (r && r.redirect) {
			let { redirect: i } = r, o = "function" == typeof i ? i(e, t) : i;
			return "string" == typeof o && ((o = o.includes("?") || o.includes("#") ? o = b(o) : { path: o }).params = {}), ar({
				query: e.query,
				hash: e.hash,
				params: null != o.path ? {} : e.params
			}, o);
		}
	}
	function O(e, t) {
		let r, i = d = g(e), o = p.value, l = e.state, s = e.force, u = !0 === e.replace, c = w(i, o);
		return c ? O(ar(b(c), {
			state: "object" == typeof c ? ar({}, l, c.state) : l,
			force: s,
			replace: u
		}), t || i) : (i.redirectedFrom = t, !s && function(e, t, r) {
			let i = t.matched.length - 1, o = r.matched.length - 1;
			return i > -1 && i === o && aP(t.matched[i], r.matched[o]) && ak(t.params, r.params) && e(t.query) === e(r.query) && t.hash === r.hash;
		}(a, o, i) && (r = aU(aV.NAVIGATION_DUPLICATED, {
			to: i,
			from: o
		}), T(o, o, !0, !1)), (r ? Promise.resolve(r) : A(i, o)).catch((e) => az(e) ? az(e, aV.NAVIGATION_GUARD_REDIRECT) ? e : C(e) : R(e, i, o)).then((e) => {
			if (e) {
				if (az(e, aV.NAVIGATION_GUARD_REDIRECT)) return O(ar({ replace: u }, b(e.to), {
					state: "object" == typeof e.to ? ar({}, l, e.to.state) : l,
					force: s
				}), t || i);
			} else e = E(i, o, !0, u, l);
			return j(i, o, e), e;
		}));
	}
	function x(e, t) {
		let r = _(e, t);
		return r ? Promise.reject(r) : Promise.resolve();
	}
	function S(e) {
		let t = I.values().next().value;
		return t && "function" == typeof t.runWithContext ? t.runWithContext(e) : e();
	}
	function A(e, t) {
		let r, [i, o, l] = function(e, t) {
			let r = [], i = [], o = [], l = Math.max(t.matched.length, e.matched.length);
			for (let a = 0; a < l; a++) {
				let l = t.matched[a];
				l && (e.matched.find((e) => aP(e, l)) ? i.push(l) : r.push(l));
				let s = e.matched[a];
				s && !t.matched.find((e) => aP(e, s)) && o.push(s);
			}
			return [
				r,
				i,
				o
			];
		}(e, t);
		for (let o of (r = aQ(i.reverse(), "beforeRouteLeave", e, t), i)) o.leaveGuards.forEach((i) => {
			r.push(aZ(i, e, t));
		});
		let a = x.bind(null, e, t);
		return r.push(a), $(r).then(() => {
			for (let i of (r = [], u.list())) r.push(aZ(i, e, t));
			return r.push(a), $(r);
		}).then(() => {
			for (let i of (r = aQ(o, "beforeRouteUpdate", e, t), o)) i.updateGuards.forEach((i) => {
				r.push(aZ(i, e, t));
			});
			return r.push(a), $(r);
		}).then(() => {
			for (let i of (r = [], l)) if (i.beforeEnter) if (ao(i.beforeEnter)) for (let o of i.beforeEnter) r.push(aZ(o, e, t));
			else r.push(aZ(i.beforeEnter, e, t));
			return r.push(a), $(r);
		}).then(() => (e.matched.forEach((e) => e.enterCallbacks = {}), (r = aQ(l, "beforeRouteEnter", e, t, S)).push(a), $(r))).then(() => {
			for (let i of (r = [], c.list())) r.push(aZ(i, e, t));
			return r.push(a), $(r);
		}).catch((e) => az(e, aV.NAVIGATION_CANCELLED) ? e : Promise.reject(e));
	}
	function j(e, t, r) {
		f.list().forEach((i) => S(() => i(e, t, r)));
	}
	function E(e, t, r, i, o) {
		let l = _(e, t);
		if (l) return l;
		let a = t === aC, u = ae ? history.state : {};
		r && (i || a ? s.replace(e.fullPath, ar({ scroll: a && u && u.scroll }, o)) : s.push(e.fullPath, o)), p.value = e, T(e, t, r, a), C();
	}
	let P = aX(), k = aX();
	function R(e, t, r) {
		C(e);
		let i = k.list();
		return i.length ? i.forEach((i) => i(e, t, r)) : console.error(e), Promise.reject(e);
	}
	function C(e) {
		return r || (r = !e, t || (t = s.listen((e, t, r) => {
			var i, o;
			if (!N.listening) return;
			let l = g(e), a = w(l, N.currentRoute.value);
			if (a) return void O(ar(a, {
				replace: !0,
				force: !0
			}), l).catch(ai);
			d = l;
			let u = p.value;
			ae && (i = aD(u.fullPath, r.delta), o = a$(), aL.set(i, o)), A(l, u).catch((e) => az(e, aV.NAVIGATION_ABORTED | aV.NAVIGATION_CANCELLED) ? e : az(e, aV.NAVIGATION_GUARD_REDIRECT) ? (O(ar(b(e.to), { force: !0 }), l).then((e) => {
				az(e, aV.NAVIGATION_ABORTED | aV.NAVIGATION_DUPLICATED) && !r.delta && r.type === aT.pop && s.go(-1, !1);
			}).catch(ai), Promise.reject()) : (r.delta && s.go(-r.delta, !1), R(e, l, u))).then((e) => {
				(e = e || E(l, u, !1)) && (r.delta && !az(e, aV.NAVIGATION_CANCELLED) ? s.go(-r.delta, !1) : r.type === aT.pop && az(e, aV.NAVIGATION_ABORTED | aV.NAVIGATION_DUPLICATED) && s.go(-1, !1)), j(l, u, e);
			}).catch(ai);
		})), P.list().forEach(([t, r]) => e ? r(e) : t()), P.reset()), e;
	}
	function T(t, r, i, o) {
		let { scrollBehavior: l } = e;
		if (!ae || !l) return Promise.resolve();
		let a = !i && function(e) {
			let t = aL.get(e);
			return aL.delete(e), t;
		}(aD(t.fullPath, 0)) || (o || !i) && history.state && history.state.scroll || null;
		return rJ().then(() => l(t, r, a)).then((e) => e && function(e) {
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
		}(e)).catch((e) => R(e, t, r));
	}
	let M = (e) => s.go(e), I = /* @__PURE__ */ new Set(), N = {
		currentRoute: p,
		listening: !0,
		addRoute: function(e, t) {
			let r, i;
			return aF(e) ? (r = o.getRecordMatcher(e), i = t) : i = e, o.addRoute(i, r);
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
		resolve: g,
		options: e,
		push: function(e) {
			return O(e);
		},
		replace: function(e) {
			return O(ar(b(e), { replace: !0 }));
		},
		go: M,
		back: () => M(-1),
		forward: () => M(1),
		beforeEach: u.add,
		beforeResolve: c.add,
		afterEach: f.add,
		onError: k.add,
		isReady: function() {
			return r && p.value !== aC ? Promise.resolve() : new Promise((e, t) => {
				P.add([e, t]);
			});
		},
		install(e) {
			e.component("RouterLink", su), e.component("RouterView", sp), e.config.globalProperties.$router = N, Object.defineProperty(e.config.globalProperties, "$route", {
				enumerable: !0,
				get: () => rC(p)
			}), ae && !i && p.value === aC && (i = !0, O(s.location).catch((e) => {}));
			let o = {};
			for (let e in aC) Object.defineProperty(o, e, {
				get: () => p.value[e],
				enumerable: !0
			});
			e.provide(aH, N), e.provide(aY, ry(o)), e.provide(aJ, p);
			let l = e.unmount;
			I.add(e), e.unmount = function() {
				I.delete(e), I.size < 1 && (d = aC, t && t(), t = null, p.value = aC, i = !1, r = !1), l();
			};
		}
	};
	function $(e) {
		return e.reduce((e, t) => e.then(() => S(t)), Promise.resolve());
	}
	return N;
}
function sv() {
	return n5(aH);
}
function sy(e) {
	return n5(aY);
}
let sm = su, sg = sp;
function sb(e) {
	return "function" == typeof e;
}
function s_(e) {
	var t = e(function(e) {
		Error.call(e), e.stack = Error().stack;
	});
	return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
}
var sw = s_(function(e) {
	return function(t) {
		e(this), this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map(function(e, t) {
			return t + 1 + ") " + e.toString();
		}).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t;
	};
});
function sO(e, t) {
	if (e) {
		var r = e.indexOf(t);
		0 <= r && e.splice(r, 1);
	}
}
var sx = function() {
	var e;
	function t(e) {
		this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null;
	}
	return t.prototype.unsubscribe = function() {
		if (!this.closed) {
			this.closed = !0;
			var e, t, r, i, o, a = this._parentage;
			if (a) if (this._parentage = null, Array.isArray(a)) try {
				for (var s = p(a), u = s.next(); !u.done; u = s.next()) u.value.remove(this);
			} catch (t) {
				e = { error: t };
			} finally {
				try {
					u && !u.done && (t = s.return) && t.call(s);
				} finally {
					if (e) throw e.error;
				}
			}
			else a.remove(this);
			var f = this.initialTeardown;
			if (sb(f)) try {
				f();
			} catch (e) {
				o = e instanceof sw ? e.errors : [e];
			}
			var d = this._finalizers;
			if (d) {
				this._finalizers = null;
				try {
					for (var h = p(d), y = h.next(); !y.done; y = h.next()) {
						var m = y.value;
						try {
							sj(m);
						} catch (e) {
							o = null != o ? o : [], e instanceof sw ? o = l(l([], c(o)), c(e.errors)) : o.push(e);
						}
					}
				} catch (e) {
					r = { error: e };
				} finally {
					try {
						y && !y.done && (i = h.return) && i.call(h);
					} finally {
						if (r) throw r.error;
					}
				}
			}
			if (o) throw new sw(o);
		}
	}, t.prototype.add = function(e) {
		var r;
		if (e && e !== this) if (this.closed) sj(e);
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
		t === e ? this._parentage = null : Array.isArray(t) && sO(t, e);
	}, t.prototype.remove = function(e) {
		var r = this._finalizers;
		r && sO(r, e), e instanceof t && e._removeParent(this);
	}, (e = new t()).closed = !0, t.EMPTY = e, t;
}(), sS = sx.EMPTY;
function sA(e) {
	return e instanceof sx || e && "closed" in e && sb(e.remove) && sb(e.add) && sb(e.unsubscribe);
}
function sj(e) {
	sb(e) ? e() : e.unsubscribe();
}
var sE = void 0, sP = {
	setTimeout: function(e, t) {
		for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
		var o = sP.delegate;
		return (null == o ? void 0 : o.setTimeout) ? o.setTimeout.apply(o, l([e, t], c(r))) : setTimeout.apply(void 0, l([e, t], c(r)));
	},
	clearTimeout: function(e) {
		var t = sP.delegate;
		return ((null == t ? void 0 : t.clearTimeout) || clearTimeout)(e);
	},
	delegate: void 0
};
function sk(e) {
	sP.setTimeout(function() {
		throw e;
	});
}
function sR() {}
var sC = sT("C", void 0, void 0);
function sT(e, t, r) {
	return {
		kind: e,
		value: t,
		error: r
	};
}
function sI(e) {
	e();
}
var sN = function(e) {
	function t(t) {
		var r = e.call(this) || this;
		return r.isStopped = !1, t ? (r.destination = t, sA(t) && t.add(r)) : r.destination = sU, r;
	}
	return i(t, e), t.create = function(e, t, r) {
		return new sF(e, t, r);
	}, t.prototype.next = function(e) {
		this.isStopped ? sB(sT("N", e, void 0), this) : this._next(e);
	}, t.prototype.error = function(e) {
		this.isStopped ? sB(sT("E", void 0, e), this) : (this.isStopped = !0, this._error(e));
	}, t.prototype.complete = function() {
		this.isStopped ? sB(sC, this) : (this.isStopped = !0, this._complete());
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
}(sx);
Function.prototype.bind;
var sL = function() {
	function e(e) {
		this.partialObserver = e;
	}
	return e.prototype.next = function(e) {
		var t = this.partialObserver;
		if (t.next) try {
			t.next(e);
		} catch (e) {
			sV(e);
		}
	}, e.prototype.error = function(e) {
		var t = this.partialObserver;
		if (t.error) try {
			t.error(e);
		} catch (e) {
			sV(e);
		}
		else sV(e);
	}, e.prototype.complete = function() {
		var e = this.partialObserver;
		if (e.complete) try {
			e.complete();
		} catch (e) {
			sV(e);
		}
	}, e;
}(), sF = function(e) {
	function t(t, r, i) {
		var o, a = e.call(this) || this;
		return sb(t) || !t ? o = {
			next: null != t ? t : void 0,
			error: null != r ? r : void 0,
			complete: null != i ? i : void 0
		} : o = t, a.destination = new sL(o), a;
	}
	return i(t, e), t;
}(sN);
function sV(e) {
	sk(e);
}
function sB(e, t) {}
var sU = {
	closed: !0,
	next: sR,
	error: function(e) {
		throw e;
	},
	complete: sR
}, sz = "function" == typeof Symbol && Symbol.observable || "@@observable";
function sG(e) {
	return e;
}
function sW(e) {
	return 0 === e.length ? sG : 1 === e.length ? e[0] : function(t) {
		return e.reduce(function(e, t) {
			return t(e);
		}, t);
	};
}
var sq = function() {
	function e(e) {
		e && (this._subscribe = e);
	}
	return e.prototype.lift = function(t) {
		var r = new e();
		return r.source = this, r.operator = t, r;
	}, e.prototype.subscribe = function(e, t, r) {
		var i = this, o = !function(e) {
			return e && e instanceof sN || e && sb(e.next) && sb(e.error) && sb(e.complete) && sA(e);
		}(e) ? new sF(e, t, r) : e;
		return sI(function() {
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
		return new (t = (sK(t)))(function(t, i) {
			var o = new sF({
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
	}, e.prototype[sz] = function() {
		return this;
	}, e.prototype.pipe = function() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		return sW(e)(this);
	}, e.prototype.toPromise = function(e) {
		var t = this;
		return new (e = (sK(e)))(function(e, r) {
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
function sK(e) {
	var t;
	return null != (t = null != e ? e : sE) ? t : Promise;
}
function sH(e) {
	return function(t) {
		if (sb(null == t ? void 0 : t.lift)) return t.lift(function(t) {
			try {
				return e(t, this);
			} catch (e) {
				this.error(e);
			}
		});
		throw TypeError("Unable to lift unknown Observable type");
	};
}
function sY(e, t, r, i, o) {
	return new sJ(e, t, r, i, o);
}
var sJ = function(e) {
	function t(t, r, i, o, l, a) {
		var s = e.call(this, t) || this;
		return s.onFinalize = l, s.shouldUnsubscribe = a, s._next = r ? function(e) {
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
	return i(t, e), t.prototype.unsubscribe = function() {
		var t;
		if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
			var r = this.closed;
			e.prototype.unsubscribe.call(this), r || null == (t = this.onFinalize) || t.call(this);
		}
	}, t;
}(sN), sX = s_(function(e) {
	return function() {
		e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
	};
}), sZ = function(e) {
	function t() {
		var t = e.call(this) || this;
		return t.closed = !1, t.currentObservers = null, t.observers = [], t.isStopped = !1, t.hasError = !1, t.thrownError = null, t;
	}
	return i(t, e), t.prototype.lift = function(e) {
		var t = new sQ(this, this);
		return t.operator = e, t;
	}, t.prototype._throwIfClosed = function() {
		if (this.closed) throw new sX();
	}, t.prototype.next = function(e) {
		var t = this;
		sI(function() {
			var r, i;
			if (t._throwIfClosed(), !t.isStopped) {
				t.currentObservers || (t.currentObservers = Array.from(t.observers));
				try {
					for (var o = p(t.currentObservers), l = o.next(); !l.done; l = o.next()) l.value.next(e);
				} catch (e) {
					r = { error: e };
				} finally {
					try {
						l && !l.done && (i = o.return) && i.call(o);
					} finally {
						if (r) throw r.error;
					}
				}
			}
		});
	}, t.prototype.error = function(e) {
		var t = this;
		sI(function() {
			if (t._throwIfClosed(), !t.isStopped) {
				t.hasError = t.isStopped = !0, t.thrownError = e;
				for (var r = t.observers; r.length;) r.shift().error(e);
			}
		});
	}, t.prototype.complete = function() {
		var e = this;
		sI(function() {
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
		return r || i ? sS : (this.currentObservers = null, o.push(e), new sx(function() {
			t.currentObservers = null, sO(o, e);
		}));
	}, t.prototype._checkFinalizedStatuses = function(e) {
		var t = this.hasError, r = this.thrownError, i = this.isStopped;
		t ? e.error(r) : i && e.complete();
	}, t.prototype.asObservable = function() {
		var e = new sq();
		return e.source = this, e;
	}, t.create = function(e, t) {
		return new sQ(e, t);
	}, t;
}(sq), sQ = function(e) {
	function t(t, r) {
		var i = e.call(this) || this;
		return i.destination = t, i.source = r, i;
	}
	return i(t, e), t.prototype.next = function(e) {
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
		return null != (r = null == (t = this.source) ? void 0 : t.subscribe(e)) ? r : sS;
	}, t;
}(sZ), s0 = function(e) {
	function t(t) {
		var r = e.call(this) || this;
		return r._value = t, r;
	}
	return i(t, e), Object.defineProperty(t.prototype, "value", {
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
}(sZ), s1 = {
	now: function() {
		return (s1.delegate || Date).now();
	},
	delegate: void 0
}, s2 = function(e) {
	function t(t, r) {
		return e.call(this) || this;
	}
	return i(t, e), t.prototype.schedule = function(e, t) {
		return void 0 === t && (t = 0), this;
	}, t;
}(sx), s6 = {
	setInterval: function(e, t) {
		for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
		var o = s6.delegate;
		return (null == o ? void 0 : o.setInterval) ? o.setInterval.apply(o, l([e, t], c(r))) : setInterval.apply(void 0, l([e, t], c(r)));
	},
	clearInterval: function(e) {
		var t = s6.delegate;
		return ((null == t ? void 0 : t.clearInterval) || clearInterval)(e);
	},
	delegate: void 0
}, s3 = function(e) {
	function t(t, r) {
		var i = e.call(this, t, r) || this;
		return i.scheduler = t, i.work = r, i.pending = !1, i;
	}
	return i(t, e), t.prototype.schedule = function(e, t) {
		if (void 0 === t && (t = 0), this.closed) return this;
		this.state = e;
		var r, i = this.id, o = this.scheduler;
		return null != i && (this.id = this.recycleAsyncId(o, i, t)), this.pending = !0, this.delay = t, this.id = null != (r = this.id) ? r : this.requestAsyncId(o, this.id, t), this;
	}, t.prototype.requestAsyncId = function(e, t, r) {
		return void 0 === r && (r = 0), s6.setInterval(e.flush.bind(e, this), r);
	}, t.prototype.recycleAsyncId = function(e, t, r) {
		if (void 0 === r && (r = 0), null != r && this.delay === r && !1 === this.pending) return t;
		null != t && s6.clearInterval(t);
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
			this.work = this.state = this.scheduler = null, this.pending = !1, sO(i, this), null != t && (this.id = this.recycleAsyncId(r, t, null)), this.delay = null, e.prototype.unsubscribe.call(this);
		}
	}, t;
}(s2), s4 = function() {
	function e(t, r) {
		void 0 === r && (r = e.now), this.schedulerActionCtor = t, this.now = r;
	}
	return e.prototype.schedule = function(e, t, r) {
		return void 0 === t && (t = 0), new this.schedulerActionCtor(this, e).schedule(r, t);
	}, e.now = s1.now, e;
}(), s8 = new (function(e) {
	function t(t, r) {
		void 0 === r && (r = s4.now);
		var i = e.call(this, t, r) || this;
		return i.actions = [], i._active = !1, i;
	}
	return i(t, e), t.prototype.flush = function(e) {
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
}(s4))(s3), s5 = new sq(function(e) {
	return e.complete();
});
function s7(e) {
	return e && sb(e.schedule);
}
function s9(e) {
	return e[e.length - 1];
}
function ue(e) {
	return s7(s9(e)) ? e.pop() : void 0;
}
var ut = function(e) {
	return e && "number" == typeof e.length && "function" != typeof e;
};
function ur(e) {
	return sb(null == e ? void 0 : e.then);
}
function un(e) {
	return Symbol.asyncIterator && sb(null == e ? void 0 : e[Symbol.asyncIterator]);
}
function ui(e) {
	return TypeError("You provided " + (null !== e && "object" == typeof e ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
var uo = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";
function ul(e) {
	return sb(null == e ? void 0 : e[uo]);
}
function ua(e) {
	return f(this, arguments, function() {
		var t, r, i;
		return s(this, function(o) {
			switch (o.label) {
				case 0: t = e.getReader(), o.label = 1;
				case 1: o.trys.push([
					1,
					,
					9,
					10
				]), o.label = 2;
				case 2: return [4, u(t.read())];
				case 3:
					if (i = (r = o.sent()).value, !r.done) return [3, 5];
					return [4, u(void 0)];
				case 4: return [2, o.sent()];
				case 5: return [4, u(i)];
				case 6: return [4, o.sent()];
				case 7: return o.sent(), [3, 2];
				case 8: return [3, 10];
				case 9: return t.releaseLock(), [7];
				case 10: return [2];
			}
		});
	});
}
function us(e) {
	return sb(null == e ? void 0 : e.getReader);
}
function uu(e) {
	if (e instanceof sq) return e;
	if (null != e) {
		var t, r, i, o;
		if (sb(e[sz])) return t = e, new sq(function(e) {
			var r = t[sz]();
			if (sb(r.subscribe)) return r.subscribe(e);
			throw TypeError("Provided object does not correctly implement Symbol.observable");
		});
		if (ut(e)) return r = e, new sq(function(e) {
			for (var t = 0; t < r.length && !e.closed; t++) e.next(r[t]);
			e.complete();
		});
		if (ur(e)) return i = e, new sq(function(e) {
			i.then(function(t) {
				e.closed || (e.next(t), e.complete());
			}, function(t) {
				return e.error(t);
			}).then(null, sk);
		});
		if (un(e)) return uc(e);
		if (ul(e)) return o = e, new sq(function(e) {
			var t, r;
			try {
				for (var i = p(o), l = i.next(); !l.done; l = i.next()) {
					var a = l.value;
					if (e.next(a), e.closed) return;
				}
			} catch (e) {
				t = { error: e };
			} finally {
				try {
					l && !l.done && (r = i.return) && r.call(i);
				} finally {
					if (t) throw t.error;
				}
			}
			e.complete();
		});
		if (us(e)) return uc(ua(e));
	}
	throw ui(e);
}
function uc(e) {
	return new sq(function(t) {
		(function(e, t) {
			var r, i, l, u;
			return o(this, void 0, void 0, function() {
				var o;
				return s(this, function(s) {
					switch (s.label) {
						case 0: s.trys.push([
							0,
							5,
							6,
							11
						]), r = a(e), s.label = 1;
						case 1: return [4, r.next()];
						case 2:
							if ((i = s.sent()).done) return [3, 4];
							if (o = i.value, t.next(o), t.closed) return [2];
							s.label = 3;
						case 3: return [3, 1];
						case 4: return [3, 11];
						case 5: return l = { error: s.sent() }, [3, 11];
						case 6:
							if (s.trys.push([
								6,
								,
								9,
								10
							]), !(i && !i.done && (u = r.return))) return [3, 8];
							return [4, u.call(r)];
						case 7: s.sent(), s.label = 8;
						case 8: return [3, 10];
						case 9:
							if (l) throw l.error;
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
function uf(e, t, r, i, o) {
	void 0 === i && (i = 0), void 0 === o && (o = !1);
	var l = t.schedule(function() {
		r(), o ? e.add(this.schedule(null, i)) : this.unsubscribe();
	}, i);
	if (e.add(l), !o) return l;
}
function up(e, t) {
	return void 0 === t && (t = 0), sH(function(r, i) {
		r.subscribe(sY(i, function(r) {
			return uf(i, e, function() {
				return i.next(r);
			}, t);
		}, function() {
			return uf(i, e, function() {
				return i.complete();
			}, t);
		}, function(r) {
			return uf(i, e, function() {
				return i.error(r);
			}, t);
		}));
	});
}
function ud(e, t) {
	return void 0 === t && (t = 0), sH(function(r, i) {
		i.add(e.schedule(function() {
			return r.subscribe(i);
		}, t));
	});
}
function uh(e, t) {
	if (!e) throw Error("Iterable cannot be null");
	return new sq(function(r) {
		uf(r, t, function() {
			var i = e[Symbol.asyncIterator]();
			uf(r, t, function() {
				i.next().then(function(e) {
					e.done ? r.complete() : r.next(e.value);
				});
			}, 0, !0);
		});
	});
}
function uv(e, t) {
	return t ? function(e, t) {
		if (null != e) {
			if (sb(e[sz])) return uu(e).pipe(ud(t), up(t));
			if (ut(e)) return new sq(function(r) {
				var i = 0;
				return t.schedule(function() {
					i === e.length ? r.complete() : (r.next(e[i++]), r.closed || this.schedule());
				});
			});
			if (ur(e)) return uu(e).pipe(ud(t), up(t));
			if (un(e)) return uh(e, t);
			if (ul(e)) return new sq(function(r) {
				var i;
				return uf(r, t, function() {
					i = e[uo](), uf(r, t, function() {
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
					return sb(null == i ? void 0 : i.return) && i.return();
				};
			});
			if (us(e)) return uh(ua(e), t);
		}
		throw ui(e);
	}(e, t) : uu(e);
}
function uy() {
	for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
	return uv(e, ue(e));
}
function um(e, t) {
	return sH(function(r, i) {
		var o = 0;
		r.subscribe(sY(i, function(r) {
			i.next(e.call(t, r, o++));
		}));
	});
}
var ug = Array.isArray;
function ub(e) {
	return um(function(t) {
		return ug(t) ? e.apply(void 0, l([], c(t))) : e(t);
	});
}
var u_ = Array.isArray, uw = Object.getPrototypeOf, uO = Object.prototype, ux = Object.keys;
function uS() {
	for (var e, t, r, i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
	var l = ue(i), a = sb(s9(i)) ? i.pop() : void 0, s = function(e) {
		if (1 === e.length) {
			var t, r = e[0];
			if (u_(r)) return {
				args: r,
				keys: null
			};
			if ((t = r) && "object" == typeof t && uw(t) === uO) {
				var i = ux(r);
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
	if (0 === u.length) return uv([], l);
	var f = new sq((e = u, t = l, void 0 === (r = c ? function(e) {
		return c.reduce(function(t, r, i) {
			return t[r] = e[i], t;
		}, {});
	} : sG) && (r = sG), function(i) {
		(function(e, t, r) {
			e ? uf(r, e, t) : t();
		})(t, function() {
			for (var o = e.length, l = Array(o), a = o, s = o, u = function(o) {
				(function(e, t, r) {
					e ? uf(r, e, t) : t();
				})(t, function() {
					var u = uv(e[o], t), c = !1;
					u.subscribe(sY(i, function(e) {
						l[o] = e, !c && (c = !0, s--), s || i.next(r(l.slice()));
					}, function() {
						--a || i.complete();
					}));
				}, i);
			}, c = 0; c < o; c++) u(c);
		}, i);
	}));
	return a ? f.pipe(ub(a)) : f;
}
function uA(e, t, r) {
	return (void 0 === r && (r = Infinity), sb(t)) ? uA(function(r, i) {
		return um(function(e, o) {
			return t(r, e, i, o);
		})(uu(e(r, i)));
	}, r) : ("number" == typeof t && (r = t), sH(function(t, i) {
		var o, l, a, s, u, c, f, p, d;
		return o = r, a = [], s = 0, u = 0, c = !1, f = function() {
			!c || a.length || s || i.complete();
		}, p = function(e) {
			return s < o ? d(e) : a.push(e);
		}, d = function(t) {
			s++;
			var r = !1;
			uu(e(t, u++)).subscribe(sY(i, function(e) {
				l ? p(e) : i.next(e);
			}, function() {
				r = !0;
			}, void 0, function() {
				if (r) try {
					for (s--; a.length && s < o;) (function() {
						var e = a.shift();
						d(e);
					})();
					f();
				} catch (e) {
					i.error(e);
				}
			}));
		}, t.subscribe(sY(i, p, function() {
			c = !0, f();
		})), function() {};
	}));
}
function uj(e) {
	return void 0 === e && (e = Infinity), uA(sG, e);
}
var uE = ["addListener", "removeListener"], uP = ["addEventListener", "removeEventListener"], uk = ["on", "off"];
function uR(e, t, r, i) {
	if (sb(r) && (i = r, r = void 0), i) return uR(e, t, r).pipe(ub(i));
	var o, l, a, s = c(sb((o = e).addEventListener) && sb(o.removeEventListener) ? uP.map(function(i) {
		return function(o) {
			return e[i](t, o, r);
		};
	}) : sb((l = e).addListener) && sb(l.removeListener) ? uE.map(uC(e, t)) : sb((a = e).on) && sb(a.off) ? uk.map(uC(e, t)) : [], 2), u = s[0], f = s[1];
	if (!u && ut(e)) return uA(function(e) {
		return uR(e, t, r);
	})(uu(e));
	if (!u) throw TypeError("Invalid event target");
	return new sq(function(e) {
		var t = function() {
			for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
			return e.next(1 < t.length ? t : t[0]);
		};
		return u(t), function() {
			return f(t);
		};
	});
}
function uC(e, t) {
	return function(r) {
		return function(i) {
			return e[r](t, i);
		};
	};
}
function uT(e, t, r) {
	void 0 === e && (e = 0), void 0 === r && (r = s8);
	var i = -1;
	return null != t && (s7(t) ? r = t : i = t), new sq(function(t) {
		var o, l = (o = e) instanceof Date && !isNaN(o) ? e - r.now() : e;
		l < 0 && (l = 0);
		var a = 0;
		return r.schedule(function() {
			t.closed || (t.next(a++), 0 <= i ? this.schedule(void 0, i) : t.complete());
		}, l);
	});
}
function uM() {
	for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
	var i = ue(t), o = (e = Infinity, "number" == typeof s9(t) ? t.pop() : e);
	return t.length ? 1 === t.length ? uu(t[0]) : uj(o)(uv(t, i)) : s5;
}
function uI(e, t) {
	return sH(function(r, i) {
		var o = 0;
		r.subscribe(sY(i, function(r) {
			return e.call(t, r, o++) && i.next(r);
		}));
	});
}
function uN(e) {
	return sH(function(t, r) {
		var i, o = null, l = !1;
		o = t.subscribe(sY(r, void 0, void 0, function(a) {
			i = uu(e(a, uN(e)(t))), o ? (o.unsubscribe(), o = null, i.subscribe(r)) : l = !0;
		})), l && (o.unsubscribe(), o = null, i.subscribe(r));
	});
}
function u$(e, t) {
	return void 0 === t && (t = s8), sH(function(r, i) {
		var o = null, l = null, a = null, s = function() {
			if (o) {
				o.unsubscribe(), o = null;
				var e = l;
				l = null, i.next(e);
			}
		};
		function u() {
			var r = a + e, l = t.now();
			if (l < r) {
				o = this.schedule(void 0, r - l), i.add(o);
				return;
			}
			s();
		}
		r.subscribe(sY(i, function(r) {
			l = r, a = t.now(), o || (o = t.schedule(u, e), i.add(o));
		}, function() {
			s(), i.complete();
		}, void 0, function() {
			l = o = null;
		}));
	});
}
function uD(e) {
	return e <= 0 ? function() {
		return s5;
	} : sH(function(t, r) {
		var i = 0;
		t.subscribe(sY(r, function(t) {
			++i <= e && (r.next(t), e <= i && r.complete());
		}));
	});
}
function uL() {
	return sH(function(e, t) {
		e.subscribe(sY(t, sR));
	});
}
function uF(e, t) {
	void 0 === t && (t = s8);
	var r = uT(e, t);
	return function e(t, r) {
		return r ? function(i) {
			return function() {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				return uj(1)(uv(e, ue(e)));
			}(r.pipe(uD(1), uL()), i.pipe(e(t)));
		} : uA(function(e, r) {
			return uu(t(e, r)).pipe(uD(1), um(function() {
				return e;
			}));
		});
	}(function() {
		return r;
	});
}
function uV(e, t) {
	return void 0 === t && (t = sG), e = null != e ? e : uB, sH(function(r, i) {
		var o, l = !0;
		r.subscribe(sY(i, function(r) {
			var a = t(r);
			(l || !e(o, a)) && (l = !1, o = a, i.next(r));
		}));
	});
}
function uB(e, t) {
	return e === t;
}
function uU(e) {
	return uI(function(t, r) {
		return e <= r;
	});
}
function uz(e, t) {
	return sH(function(r, i) {
		var o = null, l = 0, a = !1, s = function() {
			return a && !o && i.complete();
		};
		r.subscribe(sY(i, function(r) {
			o?.unsubscribe();
			var a = 0, u = l++;
			uu(e(r, u)).subscribe(o = sY(i, function(e) {
				return i.next(t ? t(r, e, u, a++) : e);
			}, function() {
				o = null, s();
			}));
		}, function() {
			a = !0, s();
		}));
	});
}
function uG(e, t, r) {
	var i = sb(e) || t || r ? {
		next: e,
		error: t,
		complete: r
	} : e;
	return i ? sH(function(e, t) {
		null == (r = i.subscribe) || r.call(i);
		var r, o = !0;
		e.subscribe(sY(t, function(e) {
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
	}) : sG;
}
function uW(e, ...t) {
	return (function() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		return sW(e);
	})(...t)(uv(e));
}
var uq = class e extends sq {
	static seed(t) {
		return new e(t);
	}
	_value;
	_subject$ = new sZ();
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
		let r = e$(e) ? oL(this._value ?? t, e) : e;
		Object.is(r, this._value) || this._subject$.next(this._value = r);
	}
};
let uK = Symbol("forwardRef");
function uH(e) {
	let t = e;
	return new rI((e, r) => ({
		get: () => (e(), t),
		set(e) {
			let i = e?.[uK] ?? e;
			i !== t && (t = i, r());
		}
	}));
}
function uY(e) {
	return (t) => {
		let r = t.subscribe(e);
		nN(() => r.unsubscribe());
	};
}
function uJ(e) {
	return (t) => {
		let r;
		nT(() => {
			r = t.subscribe(e);
		}), nN(() => r?.unsubscribe());
	};
}
let uX = (e) => {
	let t = new uq(e), r = new rI((e, r) => ({
		get: () => (e(), t.value),
		set(e) {
			let i = e?.[uK] ?? e;
			Object.is(i, t.value) || (t.next(i), r());
		}
	}));
	return new Proxy(t, {
		get: (e, i) => "next" === i ? (e) => {
			r.value = e$(e) ? oL(t.value, e) : e;
		} : "value" === i ? r.value : t[i] ?? r[i],
		set: (e, t, i) => ("value" === t ? r.value = i : e[t] = i, !0)
	});
};
var uZ = (e) => "function" == typeof e ? e : Array.isArray(e) ? () => e : void 0 === e ? e : () => e, uQ = (e, t, r) => u0(e, t, r), u0 = (e, t, r) => {
	let i, [o, l] = ((e, t) => {
		let { children: r,...i } = e;
		if (r && !Array.isArray(r) && !iF(r) && "object" == typeof r) return [t ? {
			...i,
			key: t
		} : i, r];
		let o = {}, l = {}, a = !1;
		for (let e in i) {
			let t = i[e];
			if (e.startsWith("$")) {
				l[e.slice(1)] = uZ(t), a = !0;
				continue;
			}
			o[e] = t;
		}
		let s = uZ(r);
		return s && (l.default = s, a = !0), [t ? {
			...o,
			key: t
		} : o, a ? l : void 0];
	})(t, r);
	return (i = e) === iT || "string" == typeof i || "object" == typeof i && i.__isTeleport ? i7(e, o, l?.default?.() ?? (e === iT ? [] : void 0)) : i7(e, o, l);
};
function u1(e) {
	return (t) => u0(u2, {
		renderFn$: t.pipe(um((t) => () => e(t))),
		children: {}
	});
}
var u2 = l7({ renderFn$: lU() }, (e, t) => {
	let r = null;
	uW(e.renderFn$, uG((e) => {
		r = e;
	}), uY());
	let i = uX(1);
	return uW(e.renderFn$, uG(() => {
		i.value += 1;
	}), uJ()), () => i.value ? r?.() : null;
}, { name: "RxSlot" }, { displayName: "RxSlot" });
let u6 = (e, t) => {
	let r = new s0(e[t]);
	return i_(() => e[t], (e) => r.next(e)), r;
};
function u3(...e) {
	let t, r = {}, i = {};
	for (let o of e) {
		if (e$(o)) {
			t = o;
			continue;
		}
		eD(t) ? r = o : i = o;
	}
	return l7(r, (e, r) => {
		let i = ((e) => {
			let t = {};
			for (let i in e) {
				var r;
				if (e$(e[i]) || (r = e[i]) && (r instanceof sq || sb(r.lift) && sb(r.subscribe))) {
					t[i] = e[i];
					continue;
				}
				t[`${i}$`] = u6(e, i);
			}
			return t;
		})(e), o = new Proxy({}, { get: (t, r) => e[r] ?? i[r] }), l = new Proxy({}, { get: (e, t) => "render" === t ? u1 : r[t] }), a = t(o, l);
		return e$(a) ? a : () => a;
	}, i);
}
let u4 = (e) => {
	let t, r = null;
	return uG({
		next: (i) => {
			((e, t) => {
				if (eg(e) && eg(t)) {
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
function u8(...e) {
	let t, r, i = {}, o = {};
	for (let r of e) {
		if (e$(r)) {
			t = r;
			continue;
		}
		eD(t) ? i = r : o = r;
	}
	let l = Symbol(o?.name ?? "");
	if (eF(i) && eF(o.props)) {
		let e, r = () => e ??= t({});
		return l9(l7({
			value: lU().optional(),
			$default: lU().optional()
		}, (e, { slots: t }) => (n8(l, e.value ?? r()), () => t.default?.()), {
			...o,
			name: `Provide(${o?.name ?? ""})`
		}, { displayName: "Provider" }), { use: () => n5(l, r, !0) });
	}
	let a = lM(i);
	return l9(l7({
		...i,
		$default: lU().optional()
	}, (e, { slots: i }) => (n8(l, r = t(e)), () => i.default?.()), {
		...o,
		name: `Provide(${o?.name ?? ""})`
	}, { displayName: "Provider" }), { use: () => n5(l, () => r ??= t(a.create({})), !0) });
}
export { lM as $, ep as $t, uy as A, e9 as At, sy as B, eD as Bt, uI as C, tc as Ct, uA as D, e3 as Dt, uR as E, tS as Et, sq as F, ty as Ft, lH as G, eC as Gt, l7 as H, eN as Ht, sm as I, eq as It, lh as J, ex as Jt, lK as K, eR as Kt, sg as L, eW as Lt, s5 as M, tx as Mt, s0 as N, e5 as Nt, uS as O, e8 as Ot, sZ as P, e7 as Pt, lR as Q, ed as Qt, sh as R, eG as Rt, uN as S, ta as St, uT as T, tu as Tt, l8 as U, eI as Ut, sv as V, e$ as Vt, l5 as W, eM as Wt, lP as X, eb as Xt, l$ as Y, ew as Yt, lU as Z, eg as Zt, uU as _, n$ as _t, u1 as a, oJ as at, uL as b, rP as bt, uX as c, iT as ct, uK as d, iG as dt, ec as en, lI as et, uH as f, ih as ft, uz as g, nT as gt, uG as h, nN as ht, u6 as i, oU as it, uv as j, eZ as jt, um as k, eQ as kt, uJ as l, ni as lt, uW as m, nC as mt, u4 as n, x as nn, o1 as nt, u0 as o, nd as ot, uq as p, i7 as pt, lq as q, eE as qt, u3 as r, w as rn, oX as rt, uQ as s, nc as st, u8 as t, el as tn, lm as tt, uY as u, rB as ut, uV as v, i_ as vt, uM as w, e0 as wt, u$ as x, rC as xt, uF as y, rE as yt, a2 as z, eF as zt };
