import { n as e, r as t, t as r } from "./rolldown-runtime.BUi7Tn5u.chunk.js";
import { a as i, c as o, i as l, l as s, n as a, o as u, r as c, s as f, u as p } from "./vendor-rxjs.Bnzpw5oq.chunk.js";
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
	let i = 0, o = "", l = "", s = !1;
	for (46 === e.charCodeAt(0) && (t.push(""), i++); i < r;) {
		let a = e[i];
		l ? "\\" === a && i + 1 < r ? o += e[++i] : a === l ? l = "" : o += a : s ? "\"" === a || "'" === a ? l = a : "]" === a ? (s = !1, t.push(o), o = "") : o += a : "[" === a ? (s = !0, o && (t.push(o), o = "")) : "." === a ? o && (t.push(o), o = "") : o += a, i++;
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
				let s = i;
				for (let e = 0; e < o.length; e++) {
					if (null == s || y(o[e])) return l;
					s = s[o[e]];
				}
				return void 0 === s ? l : s;
			}
			if (y(t = Object.is(t?.valueOf(), -0) ? "-0" : String(t))) return r;
			let s = e[t];
			if (void 0 === s) return r;
			return s;
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
function j(e, t) {
	return e === t || Number.isNaN(e) && Number.isNaN(t);
}
function P(e, t, r, i) {
	if (t === e) return !0;
	switch (typeof t) {
		case "object": return function(e, t, r, i) {
			if (null == t) return !0;
			if (Array.isArray(t)) return A(e, t, r, i);
			if (t instanceof Map) {
				var o, l, s, a, u = e, c = t, f = r, p = i;
				if (0 === c.size) return !0;
				if (!(u instanceof Map)) return !1;
				for (let [e, t] of c.entries()) if (!1 === f(u.get(e), t, e, u, c, p)) return !1;
				return !0;
			}
			if (t instanceof Set) return o = e, l = t, s = r, a = i, 0 === l.size || o instanceof Set && A([...o], [...l], s, a);
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
			if (Object.keys(t).length > 0) return P(e, { ...t }, r, i);
			return j(e, t);
		default:
			if (!x(e)) return j(e, t);
			if ("string" == typeof t) return "" === t;
			return !0;
	}
}
function A(e, t, r, i) {
	if (0 === t.length) return !0;
	if (!Array.isArray(e)) return !1;
	let o = /* @__PURE__ */ new Set();
	for (let l = 0; l < t.length; l++) {
		let s = t[l], a = !1;
		for (let u = 0; u < e.length; u++) {
			if (o.has(u)) continue;
			let c = e[u], f = !1;
			if (r(c, s, l, e, t, i) && (f = !0), f) {
				o.add(u), a = !0;
				break;
			}
		}
		if (!a) return !1;
	}
	return !0;
}
function k(e, t) {
	var r;
	return "function" != typeof (r = () => void 0) ? k(e, t) : P(e, t, function e(t, i, o, l, s, a) {
		let u = r(t, i, o, l, s, a);
		return void 0 !== u ? !!u : P(t, i, e, a);
	}, /* @__PURE__ */ new Map());
}
function E(e) {
	return Object.getOwnPropertySymbols(e).filter((t) => Object.prototype.propertyIsEnumerable.call(e, t));
}
function M(e) {
	return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
var C, $, R, T, I, F, L, N, D, B, V, U, z, W, q, K, G, H = "[object String]", Y = "[object Number]", J = "[object Boolean]", X = "[object Arguments]";
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
		for (let [l, s] of (i.set(e, t), e)) t.set(l, Q(s, l, r, i, o));
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
		switch (M(e)) {
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
	let l = [...Object.keys(t), ...E(t)];
	for (let s = 0; s < l.length; s++) {
		let a = l[s], u = Object.getOwnPropertyDescriptor(e, a);
		(null == u || u.writable) && (e[a] = Q(t[a], a, r, i, o));
	}
}
function et(e) {
	var t;
	return e = Q(t = e, void 0, t, /* @__PURE__ */ new Map(), void 0), (t) => k(t, e);
}
function er(e, t) {
	var r;
	return r = (r, i, o, l) => {
		let s = t?.(r, i, o, l);
		if (void 0 !== s) return s;
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
	return null !== e && "object" == typeof e && "[object Arguments]" === M(e);
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
function es(e, t) {
	switch (typeof e) {
		case "object":
			Object.is(e?.valueOf(), -0) && (e = "-0");
			break;
		case "number": e = g(e);
	}
	return t = er(t), function(r) {
		let i = w(r, e);
		return void 0 === i ? el(r, e) : void 0 === t ? void 0 === i : k(i, t);
	};
}
function ea(e) {
	if (null == e) return h;
	switch (typeof e) {
		case "function": return e;
		case "object":
			if (Array.isArray(e) && 2 === e.length) return es(e[0], e[1]);
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
				let r = es(t[0], t[1]);
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
	Object.hasOwn(e, t) && j(i, r) && (void 0 !== r || t in e) || (e[t] = r);
};
function ex(e, t, r) {
	return function(e, t, r, i) {
		if (null == e && !x(e)) return e;
		let o = !Array.isArray(t) && ("number" == typeof t || "boolean" == typeof t || null == t || ef(t) || "string" == typeof t && (ev.test(t) || !eh.test(t)) || null != e && Object.hasOwn(e, t)) ? [t] : Array.isArray(t) ? t : "string" == typeof t ? _(t) : [t], l = e;
		for (let t = 0; t < o.length && null != l; t++) {
			let s, a = g(o[t]);
			if (!y(a)) {
				if (t === o.length - 1) s = r(l[a]);
				else {
					let r = l[a], u = i?.(r, a, e);
					s = void 0 !== u ? u : x(r) ? r : ei(o[t + 1]) ? [] : {};
				}
				eO(l, a, s), l = l[a];
			}
		}
		return e;
	}(e, t, () => r, () => void 0);
}
function eS(e) {
	return "undefined" != typeof Buffer && Buffer.isBuffer(e);
}
function ej(e) {
	let t = e?.constructor;
	return e === ("function" == typeof t ? t.prototype : Object.prototype);
}
function eP(e, t) {
	if ((e = function(e) {
		var t, r;
		let i = (t = e) ? (t = ef(r = t) ? NaN : Number(r)) === Infinity || t === -Infinity ? (t < 0 ? -1 : 1) * Number.MAX_VALUE : t == t ? t : 0 : 0 === t ? t : 0, o = i % 1;
		return o ? i - o : i;
	}(e)) < 1 || !Number.isSafeInteger(e)) return [];
	let r = Array(e);
	for (let i = 0; i < e; i++) r[i] = "function" == typeof t ? t(i) : i;
	return r;
}
function eA(e) {
	if (d(e)) {
		var t = e;
		let r = eP(t.length, (e) => `${e}`), i = new Set(r);
		return eS(t) && (i.add("offset"), i.add("parent")), Z(t) && (i.add("buffer"), i.add("byteLength"), i.add("byteOffset")), [...r, ...Object.keys(t).filter((e) => !i.has(e))];
	}
	let r = Object.keys(Object(e));
	return ej(e) ? r.filter((e) => "constructor" !== e) : r;
}
function ek(e) {
	if (null == e) return [];
	switch (typeof e) {
		case "object":
		case "function":
			if (d(e)) {
				var t = e;
				let r = eP(t.length, (e) => `${e}`), i = new Set(r);
				return eS(t) && (i.add("offset"), i.add("parent")), Z(t) && (i.add("buffer"), i.add("byteLength"), i.add("byteOffset")), [...r, ...eE(t).filter((e) => !i.has(e))];
			}
			if (ej(e)) return eE(e).filter((e) => "constructor" !== e);
			return eE(e);
		default: return eE(Object(e));
	}
}
function eE(e) {
	let t = [];
	for (let r in e) t.push(r);
	return t;
}
function eM(e) {
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
			let l = i[o], s = e[l];
			r[l] = t(s, l, e);
		}
		return r;
	}(e, ea(t));
}
function e$(e) {
	let t = [];
	for (; e;) t.push(...E(e)), e = Object.getPrototypeOf(e);
	return t;
}
function eR(e, ...t) {
	var r;
	if (null == e) return {};
	let i = (r = e, (t = function(e, t = 1) {
		let r = [], i = Math.floor(t);
		if (!d(e)) return r;
		let o = (e, t) => {
			for (let l = 0; l < e.length; l++) {
				let s = e[l];
				t < i && (Array.isArray(s) || s?.[Symbol.isConcatSpreadable] || null !== s && "object" == typeof s && "[object Arguments]" === Object.prototype.toString.call(s)) ? Array.isArray(s) ? o(s, t + 1) : o(Array.from(s), t + 1) : r.push(s);
			}
		};
		return o(Array.from(e), 0), r;
	}(t)).some((e) => Array.isArray(e) || m(e)) ? function(e) {
		let t = {}, r = [...ek(e), ...e$(e)];
		for (let i = 0; i < r.length; i++) {
			let o = r[i];
			t[o] = er(e[o], (e) => {
				if (!eM(e)) return e;
			});
		}
		return t;
	}(r) : function(e) {
		let t = {}, r = [...ek(e), ...e$(e)];
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
function eT(e, ...t) {
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
function eI(e, t) {
	if (null == e) return {};
	let r = ea(t ?? e_), i = {}, o = d(e) ? function(e, t, r = 1) {
		if (t ?? (t = e, e = 0), !Number.isInteger(r) || 0 === r) throw Error("The step value must be a non-zero integer.");
		let i = Math.max(Math.ceil((t - e) / r), 0), o = Array(i);
		for (let t = 0; t < i; t++) o[t] = e + t * r;
		return o;
	}(0, e.length) : [...ek(e), ...e$(e)];
	for (let t = 0; t < o.length; t++) {
		let l = ef(o[t]) ? o[t] : o[t].toString(), s = e[l];
		r(s, l, e) && (i[l] = s);
	}
	return i;
}
function eF(e) {
	return "function" == typeof e;
}
function eL(e) {
	return void 0 === e;
}
function eN(e) {
	return "boolean" == typeof e || e instanceof Boolean;
}
function eD(e) {
	if (null == e) return !0;
	if (d(e)) return ("function" == typeof e.splice || "string" == typeof e || "undefined" != typeof Buffer && !!Buffer.isBuffer(e) || !!Z(e) || !!eo(e)) && 0 === e.length;
	if ("object" == typeof e) {
		if (e instanceof Map || e instanceof Set) return 0 === e.size;
		let t = Object.keys(e);
		return ej(e) ? 0 === t.filter((e) => "constructor" !== e).length : 0 === t.length;
	}
	return !0;
}
function eB(e) {
	return Number.isInteger(e);
}
var eV = /\p{Lu}?\p{Ll}+|[0-9]+|\p{Lu}+(?!\p{Ll})|\p{Emoji_Presentation}|\p{Extended_Pictographic}|\p{L}+/gu;
function eU(e) {
	return Array.from(e.match(eV) ?? []);
}
function ez(e) {
	return "string" != typeof e && (e = b(e)), e.replace(/['\u2019]/g, "");
}
function eW(e) {
	let t = eU(ez(e));
	if (0 === t.length) return "";
	let [r, ...i] = t;
	return `${r.toLowerCase()}${i.map((e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join("")}`;
}
function eq(e) {
	return eU(ez(e)).map((e) => e.toLowerCase()).join("-");
}
function eK(e, t = 0, r = " ") {
	return b(e).padStart(t, r);
}
function eG(e) {
	let t = Object.create(null);
	for (let r of e.split(",")) t[r] = 1;
	return (e) => e in t;
}
var eH = {}, eY = [], eJ = () => {}, eX = () => !1, eZ = (e) => 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && (e.charCodeAt(2) > 122 || 97 > e.charCodeAt(2)), eQ = (e) => e.startsWith("onUpdate:"), e0 = Object.assign, e1 = (e, t) => {
	let r = e.indexOf(t);
	r > -1 && e.splice(r, 1);
}, e2 = Object.prototype.hasOwnProperty, e6 = (e, t) => e2.call(e, t), e3 = Array.isArray, e4 = (e) => "[object Map]" === tr(e), e8 = (e) => "function" == typeof e, e5 = (e) => "string" == typeof e, e7 = (e) => "symbol" == typeof e, e9 = (e) => null !== e && "object" == typeof e, te = (e) => (e9(e) || e8(e)) && e8(e.then) && e8(e.catch), tt = Object.prototype.toString, tr = (e) => tt.call(e), tn = (e) => e5(e) && "NaN" !== e && "-" !== e[0] && "" + parseInt(e, 10) === e, ti = eG(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), to = (e) => {
	let t = Object.create(null);
	return (r) => t[r] || (t[r] = e(r));
}, tl = /-\w/g, ts = to((e) => e.replace(tl, (e) => e.slice(1).toUpperCase())), ta = /\B([A-Z])/g, tu = to((e) => e.replace(ta, "-$1").toLowerCase()), tc = to((e) => e.charAt(0).toUpperCase() + e.slice(1)), tf = to((e) => e ? `on${tc(e)}` : ""), tp = (e, t) => !Object.is(e, t), td = (e, ...t) => {
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
var tx = eG("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");
function tS(e) {
	return !!e || "" === e;
}
var tj = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = $, !e && $ && (this.index = ($.scopes || ($.scopes = [])).push(this) - 1);
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
			let t = $;
			try {
				return $ = this, e();
			} finally {
				$ = t;
			}
		}
	}
	on() {
		1 == ++this._on && (this.prevScope = $, $ = this);
	}
	off() {
		this._on > 0 && 0 == --this._on && ($ = this.prevScope, this.prevScope = void 0);
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
}, tP = /* @__PURE__ */ new WeakSet(), tA = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, $ && $.active && $.effects.push(this);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		64 & this.flags && (this.flags &= -65, tP.has(this) && (tP.delete(this), this.trigger()));
	}
	notify() {
		(!(2 & this.flags) || 32 & this.flags) && (8 & this.flags || tE(this));
	}
	run() {
		if (!(1 & this.flags)) return this.fn();
		this.flags |= 2, tB(this), tC(this);
		let e = R, t = tF;
		R = this, tF = !0;
		try {
			return this.fn();
		} finally {
			t$(this), R = e, tF = t, this.flags &= -3;
		}
	}
	stop() {
		if (1 & this.flags) {
			for (let e = this.deps; e; e = e.nextDep) tI(e);
			this.deps = this.depsTail = void 0, tB(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		64 & this.flags ? tP.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		tR(this) && this.run();
	}
	get dirty() {
		return tR(this);
	}
}, tk = 0;
function tE(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = I, I = e;
		return;
	}
	e.next = T, T = e;
}
function tM() {
	let e;
	if (!(--tk > 0)) {
		if (I) {
			let e = I;
			for (I = void 0; e;) {
				let t = e.next;
				e.next = void 0, e.flags &= -9, e = t;
			}
		}
		for (; T;) {
			let t = T;
			for (T = void 0; t;) {
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
function t$(e) {
	let t, r = e.depsTail, i = r;
	for (; i;) {
		let e = i.prevDep;
		-1 === i.version ? (i === r && (r = e), tI(i), function(e) {
			let { prevDep: t, nextDep: r } = e;
			t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
		}(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = e;
	}
	e.deps = t, e.depsTail = r;
}
function tR(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (tT(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function tT(e) {
	if (4 & e.flags && !(16 & e.flags) || (e.flags &= -17, e.globalVersion === tV) || (e.globalVersion = tV, !e.isSSR && 128 & e.flags && (!e.deps && !e._dirty || !tR(e)))) return;
	e.flags |= 2;
	let t = e.dep, r = R, i = tF;
	R = e, tF = !0;
	try {
		tC(e);
		let r = e.fn(e._value);
		(0 === t.version || tp(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		R = r, tF = i, t$(e), e.flags &= -3;
	}
}
function tI(e, t = !1) {
	let { dep: r, prevSub: i, nextSub: o } = e;
	if (i && (i.nextSub = o, e.prevSub = void 0), o && (o.prevSub = i, e.nextSub = void 0), r.subs === e && (r.subs = i, !i && r.computed)) {
		r.computed.flags &= -5;
		for (let e = r.computed.deps; e; e = e.nextDep) tI(e, !0);
	}
	t || --r.sc || !r.map || r.map.delete(r.key);
}
var tF = !0, tL = [];
function tN() {
	tL.push(tF), tF = !1;
}
function tD() {
	let e = tL.pop();
	tF = void 0 === e || e;
}
function tB(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = R;
		R = void 0;
		try {
			t();
		} finally {
			R = e;
		}
	}
}
var tV = 0, tU = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, tz = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!R || !tF || R === this.computed) return;
		let t = this.activeLink;
		if (void 0 === t || t.sub !== R) t = this.activeLink = new tU(R, this), R.deps ? (t.prevDep = R.depsTail, R.depsTail.nextDep = t, R.depsTail = t) : R.deps = R.depsTail = t, function e(t) {
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
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = R.depsTail, t.nextDep = void 0, R.depsTail.nextDep = t, R.depsTail = t, R.deps === t && (R.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, tV++, this.notify(e);
	}
	notify(e) {
		tk++;
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			tM();
		}
	}
}, tW = /* @__PURE__ */ new WeakMap(), tq = Symbol(""), tK = Symbol(""), tG = Symbol("");
function tH(e, t, r) {
	if (tF && R) {
		let t = tW.get(e);
		t || tW.set(e, t = /* @__PURE__ */ new Map());
		let i = t.get(r);
		i || (t.set(r, i = new tz()), i.map = t, i.key = r), i.track();
	}
}
function tY(e, t, r, i, o, l) {
	let s = tW.get(e);
	if (!s) return void tV++;
	let a = (e) => {
		e && e.trigger();
	};
	if (tk++, "clear" === t) s.forEach(a);
	else {
		let o = e3(e), l = o && tn(r);
		if (o && "length" === r) {
			let e = Number(i);
			s.forEach((t, r) => {
				("length" === r || r === tG || !e7(r) && r >= e) && a(t);
			});
		} else switch ((void 0 !== r || s.has(void 0)) && a(s.get(r)), l && a(s.get(tG)), t) {
			case "add":
				o ? l && a(s.get("length")) : (a(s.get(tq)), e4(e) && a(s.get(tK)));
				break;
			case "delete":
				!o && (a(s.get(tq)), e4(e) && a(s.get(tK)));
				break;
			case "set": e4(e) && a(s.get(tq));
		}
	}
	tM();
}
function tJ(e) {
	let t = rx(e);
	return t === e ? t : (tH(t, "iterate", tG), rw(e) ? t : t.map(rS));
}
function tX(e) {
	return tH(e = rx(e), "iterate", tG), e;
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
	let s = tX(e), a = s !== e && !rw(e), u = s[t];
	if (u !== t0[t]) {
		let t = u.apply(e, l);
		return a ? rS(t) : t;
	}
	let c = r;
	s !== e && (a ? c = function(t, i) {
		return r.call(this, rS(t), i, e);
	} : r.length > 2 && (c = function(t, i) {
		return r.call(this, t, i, e);
	}));
	let f = u.call(s, c, i);
	return a && o ? o(f) : f;
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
	tH(i, "iterate", tG);
	let o = i[t](...r);
	return (-1 === o || !1 === o) && rO(r[0]) ? (r[0] = rx(r[0]), i[t](...r)) : o;
}
function t3(e, t, r = []) {
	tN(), tk++;
	let i = rx(e)[t].apply(e, r);
	return tM(), tD(), i;
}
var t4 = eG("__proto__,__v_isRef,__isVue"), t8 = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => "arguments" !== e && "caller" !== e).map((e) => Symbol[e]).filter(e7));
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
		let s = Reflect.get(e, t, rP(e) ? e : r);
		if ((e7(t) ? t8.has(t) : t4(t)) || (i || tH(e, "get", t), o)) return s;
		if (rP(s)) {
			let e = l && tn(t) ? s : s.value;
			return i && e9(e) ? rm(e) : e;
		}
		return e9(s) ? i ? rm(s) : rv(s) : s;
	}
}, t9 = class extends t7 {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, r, i) {
		let o = e[t];
		if (!this._isShallow) {
			let t = r_(o);
			if (rw(r) || r_(r) || (o = rx(o), r = rx(r)), !e3(e) && rP(o) && !rP(r)) if (t) return !0;
			else return o.value = r, !0;
		}
		let l = e3(e) && tn(t) ? Number(t) < e.length : e6(e, t), s = Reflect.set(e, t, r, rP(e) ? e : i);
		return e === rx(i) && (l ? tp(r, o) && tY(e, "set", t, r, o) : tY(e, "add", t, r)), s;
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
		return tH(e, "iterate", e3(e) ? "length" : tq), Reflect.ownKeys(e);
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
function rs(e, t) {
	let r = function(e, t) {
		let r = {
			get(r) {
				let i = this.__v_raw, o = rx(i), l = rx(r);
				e || (tp(r, l) && tH(o, "get", r), tH(o, "get", l));
				let { has: s } = ro(o), a = t ? ri : e ? rj : rS;
				return s.call(o, r) ? a(i.get(r)) : s.call(o, l) ? a(i.get(l)) : void (i !== o && i.get(r));
			},
			get size() {
				let t = this.__v_raw;
				return e || tH(rx(t), "iterate", tq), t.size;
			},
			has(t) {
				let r = this.__v_raw, i = rx(r), o = rx(t);
				return e || (tp(t, o) && tH(i, "has", t), tH(i, "has", o)), t === o ? r.has(t) : r.has(t) || r.has(o);
			},
			forEach(r, i) {
				let o = this, l = o.__v_raw, s = rx(l), a = t ? ri : e ? rj : rS;
				return e || tH(s, "iterate", tq), l.forEach((e, t) => r.call(i, a(e), a(t), o));
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
				let i = rx(this), { has: o, get: l } = ro(i), s = o.call(i, e);
				s || (e = rx(e), s = o.call(i, e));
				let a = l.call(i, e);
				return i.set(e, r), s ? tp(r, a) && tY(i, "set", e, r, a) : tY(i, "add", e, r), this;
			},
			delete(e) {
				let t = rx(this), { has: r, get: i } = ro(t), o = r.call(t, e);
				o || (e = rx(e), o = r.call(t, e));
				let l = i ? i.call(t, e) : void 0, s = t.delete(e);
				return o && tY(t, "delete", e, void 0, l), s;
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
				let o = this.__v_raw, l = rx(o), s = e4(l), a = "entries" === i || i === Symbol.iterator && s, u = o[i](...r), c = t ? ri : e ? rj : rS;
				return e || tH(l, "iterate", "keys" === i && s ? tK : tq), {
					next() {
						let { value: e, done: t } = u.next();
						return t ? {
							value: e,
							done: t
						} : {
							value: a ? [c(e[0]), c(e[1])] : c(e),
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
var ra = { get: rs(!1, !1) }, ru = { get: rs(!1, !0) }, rc = { get: rs(!0, !1) }, rf = /* @__PURE__ */ new WeakMap(), rp = /* @__PURE__ */ new WeakMap(), rd = /* @__PURE__ */ new WeakMap(), rh = /* @__PURE__ */ new WeakMap();
function rv(e) {
	return r_(e) ? e : rg(e, !1, rt, ra, rf);
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
	let s = (l = e).__v_skip || !Object.isExtensible(l) ? 0 : function(e) {
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
	if (0 === s) return e;
	let a = o.get(e);
	if (a) return a;
	let u = new Proxy(e, 2 === s ? i : r);
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
var rS = (e) => e9(e) ? rv(e) : e, rj = (e) => e9(e) ? rm(e) : e;
function rP(e) {
	return !!e && !0 === e.__v_isRef;
}
function rA(e) {
	return rE(e, !1);
}
function rk(e) {
	return rE(e, !0);
}
function rE(e, t) {
	return rP(e) ? e : new rM(e, t);
}
var rM = class {
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
	return rP(e) ? e.value : e;
}
var r$ = {
	get: (e, t, r) => "__v_raw" === t ? e : rC(Reflect.get(e, t, r)),
	set: (e, t, r, i) => {
		let o = e[t];
		return rP(o) && !rP(r) ? (o.value = r, !0) : Reflect.set(e, t, r, i);
	}
};
function rR(e) {
	return rb(e) ? e : new Proxy(e, r$);
}
var rT = class {
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
}, rI = class {
	constructor(e, t, r) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new tz(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = tV - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = r;
	}
	notify() {
		if (this.flags |= 16, !(8 & this.flags) && R !== this) return tE(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return tT(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
}, rF = {}, rL = /* @__PURE__ */ new WeakMap(), rN = void 0;
function rD(e, t = Infinity, r) {
	if (t <= 0 || !e9(e) || e.__v_skip || ((r = r || /* @__PURE__ */ new Map()).get(e) || 0) >= t) return e;
	if (r.set(e, t), t--, rP(e)) rD(e.value, t, r);
	else if (e3(e)) for (let i = 0; i < e.length; i++) rD(e[i], t, r);
	else if ("[object Set]" === tr(e) || e4(e)) e.forEach((e) => {
		rD(e, t, r);
	});
	else if ("[object Object]" === tr(e)) {
		for (let i in e) rD(e[i], t, r);
		for (let i of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, i) && rD(e[i], t, r);
	}
	return e;
}
function rB(e, t, r, i) {
	try {
		return i ? e(...i) : e();
	} catch (e) {
		rU(e, t, r);
	}
}
function rV(e, t, r, i) {
	if (e8(e)) {
		let o = rB(e, t, r, i);
		return o && te(o) && o.catch((e) => {
			rU(e, t, r);
		}), o;
	}
	if (e3(e)) {
		let o = [];
		for (let l = 0; l < e.length; l++) o.push(rV(e[l], t, r, i));
		return o;
	}
}
function rU(e, t, r, i = !0) {
	t && t.vnode;
	let { errorHandler: l, throwUnhandledErrorInProduction: s } = t && t.appContext.config || eH;
	if (t) {
		let i = t.parent, o = t.proxy, s = `https://vuejs.org/error-reference/#runtime-${r}`;
		for (; i;) {
			let t = i.ec;
			if (t) {
				for (let r = 0; r < t.length; r++) if (!1 === t[r](e, o, s)) return;
			}
			i = i.parent;
		}
		if (l) {
			tN(), rB(l, null, 10, [
				e,
				o,
				s
			]), tD();
			return;
		}
	}
	(function(e, t, r, i = !0, o = !1) {
		if (o) throw e;
		console.error(e);
	})(e, 0, 0, i, s);
}
var rz = [], rW = -1, rq = [], rK = null, rG = 0, rH = Promise.resolve(), rY = null;
function rJ(e) {
	let t = rY || rH;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function rX(e) {
	if (!(1 & e.flags)) {
		let t = r1(e), r = rz[rz.length - 1];
		!r || !(2 & e.flags) && t >= r1(r) ? rz.push(e) : rz.splice(function(e) {
			let t = rW + 1, r = rz.length;
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
			for (rW = 0; rW < rz.length; rW++) {
				let e = rz[rW];
				e && !(8 & e.flags) && (4 & e.flags && (e.flags &= -2), rB(e, e.i, e.i ? 15 : 14), 4 & e.flags || (e.flags &= -2));
			}
		} finally {
			for (; rW < rz.length; rW++) {
				let e = rz[rW];
				e && (e.flags &= -2);
			}
			rW = -1, rz.length = 0, r0(t), rY = null, (rz.length || rq.length) && e(t);
		}
	}));
}
function rQ(e, t, r = rW + 1) {
	for (; r < rz.length; r++) {
		let t = rz[r];
		if (t && 2 & t.flags) {
			if (e && t.id !== e.uid) continue;
			rz.splice(r, 1), r--, 4 & t.flags && (t.flags &= -2), t(), 4 & t.flags || (t.flags &= -2);
		}
	}
}
function r0(e) {
	if (rq.length) {
		let e = [...new Set(rq)].sort((e, t) => r1(e) - r1(t));
		if (rq.length = 0, rK) return void rK.push(...e);
		for (rG = 0, rK = e; rG < rK.length; rG++) {
			let e = rK[rG];
			4 & e.flags && (e.flags &= -2), 8 & e.flags || e(), e.flags &= -2;
		}
		rK = null, rG = 0;
	}
}
var r1 = (e) => null == e.id ? 2 & e.flags ? -1 : Infinity : e.id, r2 = null, r6 = null;
function r3(e) {
	let t = r2;
	return r2 = e, r6 = e && e.type.__scopeId || null, t;
}
function r4(e, t, r, i) {
	let o = e.dirs, l = t && t.dirs;
	for (let s = 0; s < o.length; s++) {
		let a = o[s];
		l && (a.oldValue = l[s].value);
		let u = a.dir[i];
		u && (tN(), rV(u, r, 8, [
			e.el,
			a,
			e,
			t
		]), tD());
	}
}
var r8 = Symbol("_vte"), r5 = (e) => e && (e.disabled || "" === e.disabled), r7 = (e) => e && (e.defer || "" === e.defer), r9 = (e) => "undefined" != typeof SVGElement && e instanceof SVGElement, ne = (e) => "function" == typeof MathMLElement && e instanceof MathMLElement, nt = (e, t) => {
	let r = e && e.to;
	return e5(r) ? t ? t(r) : null : r;
}, nr = {
	name: "Teleport",
	__isTeleport: !0,
	process(e, t, r, i, o, l, s, a, u, c) {
		let { mc: f, pc: p, pbc: d, o: { insert: h, querySelector: y, createText: m, createComment: g } } = c, b = r5(t.props), { shapeFlag: _, children: w, dynamicChildren: O } = t;
		if (null == e) {
			let e = t.el = m(""), c = t.anchor = m("");
			h(e, r, i), h(c, r, i);
			let p = (e, t) => {
				16 & _ && f(w, e, t, o, l, s, a, u);
			}, d = () => {
				let e = t.target = nt(t.props, y), r = nl(e, t, m, h);
				e && ("svg" !== s && r9(e) ? s = "svg" : "mathml" !== s && ne(e) && (s = "mathml"), o && o.isCE && (o.ce._teleportTargets || (o.ce._teleportTargets = /* @__PURE__ */ new Set())).add(e), b || (p(e, r), no(t, !1)));
			};
			b && (p(r, c), no(t, !0)), r7(t.props) ? (t.el.__isMounted = !1, id(() => {
				d(), delete t.el.__isMounted;
			}, l)) : d();
		} else {
			if (r7(t.props) && !1 === e.el.__isMounted) return void id(() => {
				nr.process(e, t, r, i, o, l, s, a, u, c);
			}, l);
			t.el = e.el, t.targetStart = e.targetStart;
			let f = t.anchor = e.anchor, h = t.target = e.target, m = t.targetAnchor = e.targetAnchor, g = r5(e.props), _ = g ? r : h, w = g ? f : m;
			if ("svg" === s || r9(h) ? s = "svg" : ("mathml" === s || ne(h)) && (s = "mathml"), O ? (d(e.dynamicChildren, O, _, o, l, s, a), im(e, t, !0)) : u || p(e, t, _, w, o, l, s, a, !1), b) g ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : nn(t, r, f, c, 1);
			else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
				let e = t.target = nt(t.props, y);
				e && nn(t, e, null, c, 0);
			} else g && nn(t, h, m, c, 1);
			no(t, b);
		}
	},
	remove(e, t, r, { um: i, o: { remove: o } }, l) {
		let { shapeFlag: s, children: a, anchor: u, targetStart: c, targetAnchor: f, target: p, props: d } = e;
		if (p && (o(c), o(f)), l && o(u), 16 & s) {
			let e = l || !r5(d);
			for (let o = 0; o < a.length; o++) {
				let l = a[o];
				i(l, t, r, e, !!l.dynamicChildren);
			}
		}
	},
	move: nn,
	hydrate: function(e, t, r, i, o, l, { o: { nextSibling: s, parentNode: a, querySelector: u, insert: c, createText: f } }, p) {
		function d(e, t, u, c) {
			t.anchor = p(s(e), t, a(e), r, i, o, l), t.targetStart = u, t.targetAnchor = c;
		}
		let h = t.target = nt(t.props, u), y = r5(t.props);
		if (h) {
			let a = h._lpa || h.firstChild;
			if (16 & t.shapeFlag) if (y) d(e, t, a, a && s(a));
			else {
				t.anchor = s(e);
				let u = a;
				for (; u;) {
					if (u && 8 === u.nodeType) {
						if ("teleport start anchor" === u.data) t.targetStart = u;
						else if ("teleport anchor" === u.data) {
							t.targetAnchor = u, h._lpa = t.targetAnchor && s(t.targetAnchor);
							break;
						}
					}
					u = s(u);
				}
				t.targetAnchor || nl(h, t, f, c), p(a && s(a), t, h, r, i, o, l);
			}
			no(t, y);
		} else y && 16 & t.shapeFlag && d(e, t, e, s(e));
		return t.anchor && s(t.anchor);
	}
};
function nn(e, t, r, { o: { insert: i }, m: o }, l = 2) {
	0 === l && i(e.targetAnchor, t, r);
	let { el: s, anchor: a, shapeFlag: u, children: c, props: f } = e, p = 2 === l;
	if (p && i(s, t, r), (!p || r5(f)) && 16 & u) for (let e = 0; e < c.length; e++) o(c[e], t, r, 2);
	p && i(a, t, r);
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
var ns = Symbol("_leaveCb"), na = Symbol("_enterCb"), nu = [Function, Array], nc = {
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
		for (let r of e) if (r.type !== iT) {
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
			return n$(() => {
				e.isMounted = !0;
			}), nI(() => {
				e.isUnmounting = !0;
			}), e;
		}();
		return () => {
			let o = t.default && function e(t, r = !1, i) {
				let o = [], l = 0;
				for (let s = 0; s < t.length; s++) {
					let a = t[s], u = null == i ? a.key : String(i) + String(null != a.key ? a.key : s);
					a.type === i$ ? (128 & a.patchFlag && l++, o = o.concat(e(a.children, r, u))) : (r || a.type !== iT) && o.push(null != u ? iW(a, { key: u }) : a);
				}
				if (l > 1) for (let e = 0; e < o.length; e++) o[e].patchFlag = -2;
				return o;
			}(t.default(), !0);
			if (!o || !o.length) return;
			let l = np(o), s = rx(e), { mode: a } = s;
			if (i.isLeaving) return ny(l);
			let u = nm(l);
			if (!u) return ny(l);
			let c = nv(u, s, i, r, (e) => c = e);
			u.type !== iT && ng(u, c);
			let f = r.subTree && nm(r.subTree);
			if (f && f.type !== iT && !iB(f, u) && nf(r).type !== iT) {
				let e = nv(f, s, i, r);
				if (ng(f, e), "out-in" === a && u.type !== iT) return i.isLeaving = !0, e.afterLeave = () => {
					i.isLeaving = !1, 8 & r.job.flags || r.update(), delete e.afterLeave, f = void 0;
				}, ny(l);
				"in-out" === a && u.type !== iT ? e.delayLeave = (e, t, r) => {
					nh(i, f)[String(f.key)] = f, e[ns] = () => {
						t(), e[ns] = void 0, delete c.delayedLeave, f = void 0;
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
	let { appear: l, mode: s, persisted: a = !1, onBeforeEnter: u, onEnter: c, onAfterEnter: f, onEnterCancelled: p, onBeforeLeave: d, onLeave: h, onAfterLeave: y, onLeaveCancelled: m, onBeforeAppear: g, onAppear: b, onAfterAppear: _, onAppearCancelled: w } = t, O = String(e.key), x = nh(r, e), S = (e, t) => {
		e && rV(e, i, 9, t);
	}, j = (e, t) => {
		let r = t[1];
		S(e, t), e3(e) ? e.every((e) => e.length <= 1) && r() : e.length <= 1 && r();
	}, P = {
		mode: s,
		persisted: a,
		beforeEnter(t) {
			let i = u;
			if (!r.isMounted) if (!l) return;
			else i = g || u;
			t[ns] && t[ns](!0);
			let o = x[O];
			o && iB(e, o) && o.el[ns] && o.el[ns](), S(i, [t]);
		},
		enter(e) {
			let t = c, i = f, o = p;
			if (!r.isMounted) if (!l) return;
			else t = b || c, i = _ || f, o = w || p;
			let s = !1, a = e[na] = (t) => {
				s || (s = !0, t ? S(o, [e]) : S(i, [e]), P.delayedLeave && P.delayedLeave(), e[na] = void 0);
			};
			t ? j(t, [e, a]) : a();
		},
		leave(t, i) {
			let o = String(e.key);
			if (t[na] && t[na](!0), r.isUnmounting) return i();
			S(d, [t]);
			let l = !1, s = t[ns] = (r) => {
				l || (l = !0, i(), r ? S(m, [t]) : S(y, [t]), t[ns] = void 0, x[o] === e && delete x[o]);
			};
			x[o] = e, h ? j(h, [t, s]) : s();
		},
		clone(e) {
			let l = nv(e, t, r, i, o);
			return o && o(l), l;
		}
	};
	return P;
}
function ny(e) {
	if (nj(e)) return (e = iW(e)).children = null, e;
}
function nm(e) {
	if (!nj(e)) return e.type.__isTeleport && e.children ? np(e.children) : e;
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
	let l = 4 & i.shapeFlag ? i8(i.component) : i.el, s = o ? null : l, { i: a, r: u } = e, c = t && t.r, f = a.refs === eH ? a.refs = {} : a.refs, p = a.setupState, d = rx(p), h = p === eH ? eX : (e) => e6(d, e);
	if (null != c && c !== u && ((nx(t), e5(c)) ? (f[c] = null, h(c) && (p[c] = null)) : rP(c) && (c.value = null, t.k && (f[t.k] = null))), e8(u)) rB(u, a, 12, [s, f]);
	else {
		let t = e5(u), i = rP(u);
		if (t || i) {
			let a = () => {
				if (e.f) {
					let r = t ? h(u) ? p[u] : f[u] : u.value;
					if (o) e3(r) && e1(r, l);
					else if (e3(r)) r.includes(l) || r.push(l);
					else if (t) f[u] = [l], h(u) && (p[u] = f[u]);
					else {
						let t = [l];
						u.value = t, e.k && (f[e.k] = t);
					}
				} else t ? (f[u] = s, h(u) && (p[u] = s)) : i && (u.value = s, e.k && (f[e.k] = s));
			};
			if (s) {
				let t = () => {
					a(), nw.delete(e);
				};
				t.id = -1, nw.set(e, t), id(t, r);
			} else nx(e), a();
		}
	}
}
function nx(e) {
	let t = nw.get(e);
	t && (t.flags |= 8, nw.delete(e));
}
tm().requestIdleCallback, tm().cancelIdleCallback;
var nS = (e) => !!e.type.__asyncLoader, nj = (e) => e.type.__isKeepAlive;
function nP(e, t) {
	nk(e, "a", t);
}
function nA(e, t) {
	nk(e, "da", t);
}
function nk(e, t, r = iX) {
	let i = e.__wdc || (e.__wdc = () => {
		let t = r;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	});
	if (nE(t, i, r), r) {
		let e = r.parent;
		for (; e && e.parent;) nj(e.parent.vnode) && function(e, t, r, i) {
			let o = nE(t, e, i, !0);
			nF(() => {
				e1(i[t], o);
			}, r);
		}(i, t, r, e), e = e.parent;
	}
}
function nE(e, t, r = iX, i = !1) {
	if (r) {
		let o = r[e] || (r[e] = []), l = t.__weh || (t.__weh = (...i) => {
			tN();
			let o = iQ(r), l = rV(t, r, e, i);
			return o(), tD(), l;
		});
		return i ? o.unshift(l) : o.push(l), l;
	}
}
var nM = (e) => (t, r = iX) => {
	i2 && "sp" !== e || nE(e, (...e) => t(...e), r);
}, nC = nM("bm"), n$ = nM("m"), nR = nM("bu"), nT = nM("u"), nI = nM("bum"), nF = nM("um"), nL = nM("sp"), nN = nM("rtg"), nD = nM("rtc");
function nB(e, t = iX) {
	nE("ec", e, t);
}
var nV = Symbol.for("v-ndc"), nU = (e) => e ? i1(e) ? i8(e) : nU(e.parent) : null, nz = e0(Object.create(null), {
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
}), nW = (e, t) => e !== eH && !e.__isScriptSetup && e6(e, t), nq = {
	get({ _: e }, t) {
		let r, i, o;
		if ("__v_skip" === t) return !0;
		let { ctx: l, setupState: s, data: a, props: u, accessCache: c, type: f, appContext: p } = e;
		if ("$" !== t[0]) {
			let i = c[t];
			if (void 0 !== i) switch (i) {
				case 1: return s[t];
				case 2: return a[t];
				case 4: return l[t];
				case 3: return u[t];
			}
			else {
				if (nW(s, t)) return c[t] = 1, s[t];
				if (a !== eH && e6(a, t)) return c[t] = 2, a[t];
				if ((r = e.propsOptions[0]) && e6(r, t)) return c[t] = 3, u[t];
				if (l !== eH && e6(l, t)) return c[t] = 4, l[t];
				nG && (c[t] = 0);
			}
		}
		let d = nz[t];
		return d ? ("$attrs" === t && tH(e.attrs, "get", ""), d(e)) : (i = f.__cssModules) && (i = i[t]) ? i : l !== eH && e6(l, t) ? (c[t] = 4, l[t]) : e6(o = p.config.globalProperties, t) ? o[t] : void 0;
	},
	set({ _: e }, t, r) {
		let { data: i, setupState: o, ctx: l } = e;
		return nW(o, t) ? (o[t] = r, !0) : i !== eH && e6(i, t) ? (i[t] = r, !0) : !e6(e.props, t) && !("$" === t[0] && t.slice(1) in e) && (l[t] = r, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: r, ctx: i, appContext: o, propsOptions: l, type: s } }, a) {
		let u, c;
		return !!(r[a] || e !== eH && "$" !== a[0] && e6(e, a) || nW(t, a) || (u = l[0]) && e6(u, a) || e6(i, a) || e6(nz, a) || e6(o.config.globalProperties, a) || (c = s.__cssModules) && c[a]);
	},
	defineProperty(e, t, r) {
		return null != r.get ? e._.accessCache[t] = 0 : e6(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
	}
};
function nK(e) {
	return e3(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var nG = !0;
function nH(e, t, r) {
	rV(e3(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, r);
}
function nY(e) {
	let t, r = e.type, { mixins: i, extends: o } = r, { mixins: l, optionsCache: s, config: { optionMergeStrategies: a } } = e.appContext, u = s.get(r);
	return u ? t = u : l.length || i || o ? (t = {}, l.length && l.forEach((e) => nJ(t, e, a, !0)), nJ(t, r, a)) : t = r, e9(r) && s.set(r, t), t;
}
function nJ(e, t, r, i = !1) {
	let { mixins: o, extends: l } = t;
	for (let s in l && nJ(e, l, r, !0), o && o.forEach((t) => nJ(e, t, r, !0)), t) if (i && "expose" === s);
	else {
		let i = nX[s] || r && r[s];
		e[s] = i ? i(e[s], t[s]) : t[s];
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
	return e ? e3(e) && e3(t) ? [...new Set([...e, ...t])] : e0(Object.create(null), nK(e), nK(null != t ? t : {})) : t;
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
	let o, [l, s] = e.propsOptions, a = !1;
	if (t) for (let u in t) {
		let c;
		if (ti(u)) continue;
		let f = t[u];
		l && e6(l, c = ts(u)) ? s && s.includes(c) ? (o || (o = {}))[c] = f : r[c] = f : iP(e.emitsOptions, u) || u in i && f === i[u] || (i[u] = f, a = !0);
	}
	if (s) {
		let t = rx(r), i = o || eH;
		for (let o = 0; o < s.length; o++) {
			let a = s[o];
			r[a] = ir(l, t, a, i[a], e, !e6(i, a));
		}
	}
	return a;
}
function ir(e, t, r, i, o, l) {
	let s = e[r];
	if (null != s) {
		let e = e6(s, "default");
		if (e && void 0 === i) {
			let e = s.default;
			if (s.type !== Function && !s.skipFactory && e8(e)) {
				let { propsDefaults: l } = o;
				if (r in l) i = l[r];
				else {
					let s = iQ(o);
					i = l[r] = e.call(null, t), s();
				}
			} else i = e;
			o.ce && o.ce._setProp(r, i);
		}
		s[0] && (l && !e ? i = !1 : s[1] && ("" === i || i === tu(r)) && (i = !0));
	}
	return i;
}
var ii = /* @__PURE__ */ new WeakMap();
function io(e) {
	return !("$" === e[0] || ti(e));
}
var il = (e) => "_" === e || "_ctx" === e || "$stable" === e, is = (e) => e3(e) ? e.map(iq) : [iq(e)], ia = (e, t, r) => {
	if (t._n) return t;
	let i = function(e, t = r2, r) {
		if (!t || e._n) return e;
		let i = (...r) => {
			let o;
			i._d && iN(-1);
			let l = r3(t);
			try {
				o = e(...r);
			} finally {
				r3(l), i._d && iN(1);
			}
			return o;
		};
		return i._n = !0, i._c = !0, i._d = !0, i;
	}((...e) => is(t(...e)), r);
	return i._c = !1, i;
}, iu = (e, t, r) => {
	let i = e._ctx;
	for (let r in e) {
		if (il(r)) continue;
		let o = e[r];
		if (e8(o)) t[r] = ia(r, o, i);
		else if (null != o) {
			let e = is(o);
			t[r] = () => e;
		}
	}
}, ic = (e, t) => {
	let r = is(t);
	e.slots.default = () => r;
}, ip = (e, t, r) => {
	for (let i in t) (r || !il(i)) && (e[i] = t[i]);
}, id = function(e, t) {
	if (t && t.pendingBranch) e3(e) ? t.effects.push(...e) : t.effects.push(e);
	else e3(e) ? rq.push(...e) : rK && -1 === e.id ? rK.splice(rG + 1, 0, e) : 1 & e.flags || (rq.push(e), e.flags |= 1), rZ();
};
function ih(e) {
	return function(e, t) {
		var r;
		let i, o;
		tm().__VUE__ = !0;
		let { insert: l, remove: s, patchProp: a, createElement: u, createText: c, createComment: f, setText: p, setElementText: d, parentNode: h, nextSibling: y, setScopeId: m = eJ, insertStaticContent: g } = e, b = (e, t, r, i = null, o = null, l = null, s, a = null, u = !!t.dynamicChildren) => {
			if (e === t) return;
			e && !iB(e, t) && (i = K(e), V(e, o, l, !0), e = null), -2 === t.patchFlag && (u = !1, t.dynamicChildren = null);
			let { type: c, ref: f, shapeFlag: p } = t;
			switch (c) {
				case iR:
					_(e, t, r, i);
					break;
				case iT:
					w(e, t, r, i);
					break;
				case iI:
					e ?? O(t, r, i, s);
					break;
				case i$:
					M(e, t, r, i, o, l, s, a, u);
					break;
				default: 1 & p ? x(e, t, r, i, o, l, s, a, u) : 6 & p ? C(e, t, r, i, o, l, s, a, u) : 64 & p ? c.process(e, t, r, i, o, l, s, a, u, Y) : 128 & p && c.process(e, t, r, i, o, l, s, a, u, Y);
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
		}, x = (e, t, r, i, o, l, s, a, u) => {
			"svg" === t.type ? s = "svg" : "math" === t.type && (s = "mathml"), null == e ? S(t, r, i, o, l, s, a, u) : A(e, t, o, l, s, a, u);
		}, S = (e, t, r, i, o, s, c, f) => {
			var p, h;
			let y, m, { props: g, shapeFlag: b, transition: _, dirs: w } = e;
			if (y = e.el = u(e.type, s, g && g.is, g), 8 & b ? d(y, e.children) : 16 & b && P(e.children, y, null, i, o, iv(e, s), c, f), w && r4(e, null, i, "created"), j(y, e, e.scopeId, c, i), g) {
				for (let e in g) "value" === e || ti(e) || a(y, e, null, g[e], s, i);
				"value" in g && a(y, "value", null, g.value, s), (m = g.onVnodeBeforeMount) && iH(m, i, e);
			}
			w && r4(e, null, i, "beforeMount");
			let O = (p = o, h = _, (!p || p && !p.pendingBranch) && h && !h.persisted);
			O && _.beforeEnter(y), l(y, t, r), ((m = g && g.onVnodeMounted) || O || w) && id(() => {
				m && iH(m, i, e), O && _.enter(y), w && r4(e, null, i, "mounted");
			}, o);
		}, j = (e, t, r, i, o) => {
			if (r && m(e, r), i) for (let t = 0; t < i.length; t++) m(e, i[t]);
			if (o) {
				let r = o.subTree;
				if (t === r || iC(r.type) && (r.ssContent === t || r.ssFallback === t)) {
					let t = o.vnode;
					j(e, t, t.scopeId, t.slotScopeIds, o.parent);
				}
			}
		}, P = (e, t, r, i, o, l, s, a, u = 0) => {
			for (let c = u; c < e.length; c++) b(null, e[c] = a ? iK(e[c]) : iq(e[c]), t, r, i, o, l, s, a);
		}, A = (e, t, r, i, o, l, s) => {
			let u, c = t.el = e.el, { patchFlag: f, dynamicChildren: p, dirs: h } = t;
			f |= 16 & e.patchFlag;
			let y = e.props || eH, m = t.props || eH;
			if (r && iy(r, !1), (u = m.onVnodeBeforeUpdate) && iH(u, r, t, e), h && r4(t, e, r, "beforeUpdate"), r && iy(r, !0), (y.innerHTML && null == m.innerHTML || y.textContent && null == m.textContent) && d(c, ""), p ? k(e.dynamicChildren, p, c, r, i, iv(t, o), l) : s || F(e, t, c, null, r, i, iv(t, o), l, !1), f > 0) {
				if (16 & f) E(c, y, m, r, o);
				else if (2 & f && y.class !== m.class && a(c, "class", null, m.class, o), 4 & f && a(c, "style", y.style, m.style, o), 8 & f) {
					let e = t.dynamicProps;
					for (let t = 0; t < e.length; t++) {
						let i = e[t], l = y[i], s = m[i];
						(s !== l || "value" === i) && a(c, i, l, s, o, r);
					}
				}
				1 & f && e.children !== t.children && d(c, t.children);
			} else s || null != p || E(c, y, m, r, o);
			((u = m.onVnodeUpdated) || h) && id(() => {
				u && iH(u, r, t, e), h && r4(t, e, r, "updated");
			}, i);
		}, k = (e, t, r, i, o, l, s) => {
			for (let a = 0; a < t.length; a++) {
				let u = e[a], c = t[a];
				b(u, c, u.el && (u.type === i$ || !iB(u, c) || 198 & u.shapeFlag) ? h(u.el) : r, null, i, o, l, s, !0);
			}
		}, E = (e, t, r, i, o) => {
			if (t !== r) {
				if (t !== eH) for (let l in t) ti(l) || l in r || a(e, l, t[l], null, o, i);
				for (let l in r) {
					if (ti(l)) continue;
					let s = r[l], u = t[l];
					s !== u && "value" !== l && a(e, l, u, s, o, i);
				}
				"value" in r && a(e, "value", t.value, r.value, o);
			}
		}, M = (e, t, r, i, o, s, a, u, f) => {
			let p = t.el = e ? e.el : c(""), d = t.anchor = e ? e.anchor : c(""), { patchFlag: h, dynamicChildren: y, slotScopeIds: m } = t;
			m && (u = u ? u.concat(m) : m), null == e ? (l(p, r, i), l(d, r, i), P(t.children || [], r, d, o, s, a, u, f)) : h > 0 && 64 & h && y && e.dynamicChildren ? (k(e.dynamicChildren, y, r, o, s, a, u), (null != t.key || o && t === o.subTree) && im(e, t, !0)) : F(e, t, r, d, o, s, a, u, f);
		}, C = (e, t, r, i, o, l, s, a, u) => {
			t.slotScopeIds = a, null == e ? 512 & t.shapeFlag ? o.ctx.activate(t, r, i, s, u) : $(t, r, i, o, l, s, u) : R(e, t, u);
		}, $ = (e, t, r, i, o, l, s) => {
			let a = e.component = function(e, t, r) {
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
					scope: new tj(!0),
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
						let s = t.props, a = {}, u = [], c = !1;
						if (!e8(t)) {
							let o = (t) => {
								c = !0;
								let [i, o] = e(t, r, !0);
								e0(a, i), o && u.push(...o);
							};
							!i && r.mixins.length && r.mixins.forEach(o), t.extends && o(t.extends), t.mixins && t.mixins.forEach(o);
						}
						if (!s && !c) return e9(t) && o.set(t, eY), eY;
						if (e3(s)) for (let e = 0; e < s.length; e++) {
							let t = ts(s[e]);
							io(t) && (a[t] = eH);
						}
						else if (s) for (let e in s) {
							let t = ts(e);
							if (io(t)) {
								let r = s[e], i = a[t] = e3(r) || e8(r) ? { type: r } : e0({}, r), o = i.type, l = !1, c = !0;
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
						let f = [a, u];
						return e9(t) && o.set(t, f), f;
					}(i, o),
					emitsOptions: function e(t, r, i = !1) {
						let o = i ? ij : r.emitsCache, l = o.get(t);
						if (void 0 !== l) return l;
						let s = t.emits, a = {}, u = !1;
						if (!e8(t)) {
							let o = (t) => {
								let i = e(t, r, !0);
								i && (u = !0, e0(a, i));
							};
							!i && r.mixins.length && r.mixins.forEach(o), t.extends && o(t.extends), t.mixins && t.mixins.forEach(o);
						}
						return s || u ? (e3(s) ? s.forEach((e) => a[e] = null) : e0(a, s), e9(t) && o.set(t, a), a) : (e9(t) && o.set(t, null), null);
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
			if (nj(e) && (a.ctx.renderer = Y), function(e, t = !1, r = !1) {
				t && L(t);
				let { props: i, children: o } = e.vnode, l = i1(e);
				(function(e, t, r, i = !1) {
					let o = {}, l = n9();
					for (let r in e.propsDefaults = Object.create(null), it(e, t, o, l), e.propsOptions[0]) r in o || (o[r] = void 0);
					r ? e.props = i ? o : ry(o) : e.type.props ? e.props = o : e.props = l, e.attrs = l;
				})(e, i, l, t);
				var s = r || t;
				let a = e.slots = n9();
				if (32 & e.vnode.shapeFlag) {
					let e = o._;
					e ? (ip(a, o, s), s && th(a, "_", e, !0)) : iu(o, a);
				} else o && ic(e, o);
				l && function(e, t) {
					let r = e.type;
					e.accessCache = Object.create(null), e.proxy = new Proxy(e.ctx, nq);
					let { setup: i } = r;
					if (i) {
						var o;
						tN();
						let r = e.setupContext = i.length > 1 ? {
							attrs: new Proxy((o = e).attrs, i4),
							slots: o.slots,
							emit: o.emit,
							expose: (e) => {
								o.exposed = e || {};
							}
						} : null, l = iQ(e), s = rB(i, e, 0, [e.props, r]), a = te(s);
						if (tD(), l(), (a || e.sp) && !nS(e) && n_(e), a) {
							if (s.then(i0, i0), t) return s.then((r) => {
								i6(e, r, t);
							}).catch((t) => {
								rU(t, e, 0);
							});
							e.asyncDep = s;
						} else i6(e, s, t);
					} else i3(e, t);
				}(e, t), t && L(!1);
			}(a, !1, s), a.asyncDep) {
				if (o && o.registerDep(a, T, s), !e.el) {
					let i = a.subTree = iz(iT);
					w(null, i, t, r), e.placeholder = i.el;
				}
			} else T(a, e, t, r, o, l, s);
		}, R = (e, t, r) => {
			let i = t.component = e.component;
			if (function(e, t, r) {
				let { props: i, children: o, component: l } = e, { props: s, children: a, patchFlag: u } = t, c = l.emitsOptions;
				if (t.dirs || t.transition) return !0;
				if (!r || !(u >= 0)) return (!!o || !!a) && (!a || !a.$stable) || i !== s && (i ? !s || iM(i, s, c) : !!s);
				if (1024 & u) return !0;
				if (16 & u) return i ? iM(i, s, c) : !!s;
				if (8 & u) {
					let e = t.dynamicProps;
					for (let t = 0; t < e.length; t++) {
						let r = e[t];
						if (s[r] !== i[r] && !iP(c, r)) return !0;
					}
				}
				return !1;
			}(e, t, r)) if (i.asyncDep && !i.asyncResolved) return void I(i, t, r);
			else i.next = t, i.update();
			else t.el = e.el, i.vnode = t;
		}, T = (e, t, r, i, l, s, a) => {
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
							r && (r.el = f.el, I(e, r, a)), t.asyncDep.then(() => {
								e.isUnmounted || u();
							});
							return;
						}
					}
					let p = r;
					iy(e, !1), r ? (r.el = f.el, I(e, r, a)) : r = f, i && td(i), (t = r.props && r.props.onVnodeBeforeUpdate) && iH(t, c, r, f), iy(e, !0);
					let d = iA(e), y = e.subTree;
					e.subTree = d, b(y, d, h(y.el), K(y), e, l, s), r.el = d.el, null === p && function({ vnode: e, parent: t }, r) {
						for (; t;) {
							let i = t.subTree;
							if (i.suspense && i.suspense.activeBranch === e && (i.el = e.el), i === e) (e = t.vnode).el = r, t = t.parent;
							else break;
						}
					}(e, d.el), o && id(o, l), (t = r.props && r.props.onVnodeUpdated) && id(() => iH(t, c, r, f), l);
				} else {
					let a, { el: u, props: c } = t, { bm: f, m: p, parent: d, root: h, type: y } = e, m = nS(t);
					if (iy(e, !1), f && td(f), !m && (a = c && c.onVnodeBeforeMount) && iH(a, d, t), iy(e, !0), u && o);
					else {
						h.ce && !1 !== h.ce._def.shadowRoot && h.ce._injectChildStyle(y);
						let o = e.subTree = iA(e);
						b(null, o, r, i, e, l, s), t.el = o.el;
					}
					if (p && id(p, l), !m && (a = c && c.onVnodeMounted)) {
						let e = t;
						id(() => iH(a, d, e), l);
					}
					(256 & t.shapeFlag || d && nS(d.vnode) && 256 & d.vnode.shapeFlag) && e.a && id(e.a, l), e.isMounted = !0, t = r = i = null;
				}
			};
			e.scope.on();
			let c = e.effect = new tA(u);
			e.scope.off();
			let f = e.update = c.run.bind(c), p = e.job = c.runIfDirty.bind(c);
			p.i = e, p.id = e.uid, c.scheduler = () => rX(p), iy(e, !0), f();
		}, I = (e, t, r) => {
			t.component = e;
			let i = e.vnode.props;
			e.vnode = t, e.next = null, function(e, t, r, i) {
				let { props: o, attrs: l, vnode: { patchFlag: s } } = e, a = rx(o), [u] = e.propsOptions, c = !1;
				if ((i || s > 0) && !(16 & s)) {
					if (8 & s) {
						let r = e.vnode.dynamicProps;
						for (let i = 0; i < r.length; i++) {
							let s = r[i];
							if (iP(e.emitsOptions, s)) continue;
							let f = t[s];
							if (u) if (e6(l, s)) f !== l[s] && (l[s] = f, c = !0);
							else {
								let t = ts(s);
								o[t] = ir(u, a, t, f, e, !1);
							}
							else f !== l[s] && (l[s] = f, c = !0);
						}
					}
				} else {
					let i;
					for (let s in it(e, t, o, l) && (c = !0), a) t && (e6(t, s) || (i = tu(s)) !== s && e6(t, i)) || (u ? r && (void 0 !== r[s] || void 0 !== r[i]) && (o[s] = ir(u, a, s, void 0, e, !0)) : delete o[s]);
					if (l !== a) for (let e in l) t && e6(t, e) || (delete l[e], c = !0);
				}
				c && tY(e.attrs, "set", "");
			}(e, t.props, i, r), ((e, t, r) => {
				let { vnode: i, slots: o } = e, l = !0, s = eH;
				if (32 & i.shapeFlag) {
					let e = t._;
					e ? r && 1 === e ? l = !1 : ip(o, t, r) : (l = !t.$stable, iu(t, o)), s = t;
				} else t && (ic(e, t), s = { default: 1 });
				if (l) for (let e in o) il(e) || null != s[e] || delete o[e];
			})(e, t.children, r), tN(), rQ(e), tD();
		}, F = (e, t, r, i, o, l, s, a, u = !1) => {
			let c = e && e.children, f = e ? e.shapeFlag : 0, p = t.children, { patchFlag: h, shapeFlag: y } = t;
			if (h > 0) {
				if (128 & h) return void D(c, p, r, i, o, l, s, a, u);
				else if (256 & h) return void N(c, p, r, i, o, l, s, a, u);
			}
			8 & y ? (16 & f && q(c, o, l), p !== c && d(r, p)) : 16 & f ? 16 & y ? D(c, p, r, i, o, l, s, a, u) : q(c, o, l, !0) : (8 & f && d(r, ""), 16 & y && P(p, r, i, o, l, s, a, u));
		}, N = (e, t, r, i, o, l, s, a, u) => {
			let c;
			e = e || eY, t = t || eY;
			let f = e.length, p = t.length, d = Math.min(f, p);
			for (c = 0; c < d; c++) {
				let i = t[c] = u ? iK(t[c]) : iq(t[c]);
				b(e[c], i, r, null, o, l, s, a, u);
			}
			f > p ? q(e, o, l, !0, !1, d) : P(t, r, i, o, l, s, a, u, d);
		}, D = (e, t, r, i, o, l, s, a, u) => {
			let c = 0, f = t.length, p = e.length - 1, d = f - 1;
			for (; c <= p && c <= d;) {
				let i = e[c], f = t[c] = u ? iK(t[c]) : iq(t[c]);
				if (iB(i, f)) b(i, f, r, null, o, l, s, a, u);
				else break;
				c++;
			}
			for (; c <= p && c <= d;) {
				let i = e[p], c = t[d] = u ? iK(t[d]) : iq(t[d]);
				if (iB(i, c)) b(i, c, r, null, o, l, s, a, u);
				else break;
				p--, d--;
			}
			if (c > p) {
				if (c <= d) {
					let e = d + 1, p = e < f ? t[e].el : i;
					for (; c <= d;) b(null, t[c] = u ? iK(t[c]) : iq(t[c]), r, p, o, l, s, a, u), c++;
				}
			} else if (c > d) for (; c <= p;) V(e[c], o, l, !0), c++;
			else {
				let h, y = c, m = c, g = /* @__PURE__ */ new Map();
				for (c = m; c <= d; c++) {
					let e = t[c] = u ? iK(t[c]) : iq(t[c]);
					null != e.key && g.set(e.key, c);
				}
				let _ = 0, w = d - m + 1, O = !1, x = 0, S = Array(w);
				for (c = 0; c < w; c++) S[c] = 0;
				for (c = y; c <= p; c++) {
					let i, f = e[c];
					if (_ >= w) {
						V(f, o, l, !0);
						continue;
					}
					if (null != f.key) i = g.get(f.key);
					else for (h = m; h <= d; h++) if (0 === S[h - m] && iB(f, t[h])) {
						i = h;
						break;
					}
					void 0 === i ? V(f, o, l, !0) : (S[i - m] = c + 1, i >= x ? x = i : O = !0, b(f, t[i], r, null, o, l, s, a, u), _++);
				}
				let j = O ? function(e) {
					let t, r, i, o, l, s = e.slice(), a = [0], u = e.length;
					for (t = 0; t < u; t++) {
						let u = e[t];
						if (0 !== u) {
							if (e[r = a[a.length - 1]] < u) {
								s[t] = r, a.push(t);
								continue;
							}
							for (i = 0, o = a.length - 1; i < o;) e[a[l = i + o >> 1]] < u ? i = l + 1 : o = l;
							u < e[a[i]] && (i > 0 && (s[t] = a[i - 1]), a[i] = t);
						}
					}
					for (i = a.length, o = a[i - 1]; i-- > 0;) a[i] = o, o = s[o];
					return a;
				}(S) : eY;
				for (h = j.length - 1, c = w - 1; c >= 0; c--) {
					let e = m + c, p = t[e], d = t[e + 1], y = e + 1 < f ? d.el || d.placeholder : i;
					0 === S[c] ? b(null, p, r, y, o, l, s, a, u) : O && (h < 0 || c !== j[h] ? B(p, r, y, 2) : h--);
				}
			}
		}, B = (e, t, r, i, o = null) => {
			let { el: a, type: u, transition: c, children: f, shapeFlag: p } = e;
			if (6 & p) return void B(e.component.subTree, t, r, i);
			if (128 & p) return void e.suspense.move(t, r, i);
			if (64 & p) return void u.move(e, t, r, Y);
			if (u === i$) {
				l(a, t, r);
				for (let e = 0; e < f.length; e++) B(f[e], t, r, i);
				l(e.anchor, t, r);
				return;
			}
			if (u === iI) return void (({ el: e, anchor: t }, r, i) => {
				let o;
				for (; e && e !== t;) o = y(e), l(e, r, i), e = o;
				l(t, r, i);
			})(e, t, r);
			if (2 !== i && 1 & p && c) if (0 === i) c.beforeEnter(a), l(a, t, r), id(() => c.enter(a), o);
			else {
				let { leave: i, delayLeave: o, afterLeave: u } = c, f = () => {
					e.ctx.isUnmounted ? s(a) : l(a, t, r);
				}, p = () => {
					a._isLeaving && a[ns](!0), i(a, () => {
						f(), u && u();
					});
				};
				o ? o(a, f, p) : p();
			}
			else l(a, t, r);
		}, V = (e, t, r, i = !1, o = !1) => {
			let l, { type: s, props: a, ref: u, children: c, dynamicChildren: f, shapeFlag: p, patchFlag: d, dirs: h, cacheIndex: y } = e;
			if (-2 === d && (o = !1), null != u && (tN(), nO(u, null, r, e, !0), tD()), null != y && (t.renderCache[y] = void 0), 256 & p) return void t.ctx.deactivate(e);
			let m = 1 & p && h, g = !nS(e);
			if (g && (l = a && a.onVnodeBeforeUnmount) && iH(l, t, e), 6 & p) W(e.component, r, i);
			else {
				if (128 & p) return void e.suspense.unmount(r, i);
				m && r4(e, null, t, "beforeUnmount"), 64 & p ? e.type.remove(e, t, r, Y, i) : f && !f.hasOnce && (s !== i$ || d > 0 && 64 & d) ? q(f, t, r, !1, !0) : (s === i$ && 384 & d || !o && 16 & p) && q(c, t, r), i && U(e);
			}
			(g && (l = a && a.onVnodeUnmounted) || m) && id(() => {
				l && iH(l, t, e), m && r4(e, null, t, "unmounted");
			}, r);
		}, U = (e) => {
			let { type: t, el: r, anchor: i, transition: o } = e;
			if (t === i$) return void z(r, i);
			if (t === iI) return void (({ el: e, anchor: t }) => {
				let r;
				for (; e && e !== t;) r = y(e), s(e), e = r;
				s(t);
			})(e);
			let l = () => {
				s(r), o && !o.persisted && o.afterLeave && o.afterLeave();
			};
			if (1 & e.shapeFlag && o && !o.persisted) {
				let { leave: t, delayLeave: i } = o, s = () => t(r, l);
				i ? i(e.el, l, s) : s();
			} else l();
		}, z = (e, t) => {
			let r;
			for (; e !== t;) r = y(e), s(e), e = r;
			s(t);
		}, W = (e, t, r) => {
			let { bum: i, scope: o, job: l, subTree: s, um: a, m: u, a: c } = e;
			ig(u), ig(c), i && td(i), o.stop(), l && (l.flags |= 8, V(s, e, t, r)), a && id(a, t), id(() => {
				e.isUnmounted = !0;
			}, t);
		}, q = (e, t, r, i = !1, o = !1, l = 0) => {
			for (let s = l; s < e.length; s++) V(e[s], t, r, i, o);
		}, K = (e) => {
			if (6 & e.shapeFlag) return K(e.component.subTree);
			if (128 & e.shapeFlag) return e.suspense.next();
			let t = y(e.anchor || e.el), r = t && t[r8];
			return r ? y(r) : t;
		}, G = !1, H = (e, t, r) => {
			null == e ? t._vnode && V(t._vnode, null, null, !0) : b(t._vnode || null, e, t, null, null, null, r), t._vnode = e, G || (G = !0, rQ(), r0(), G = !1);
		}, Y = {
			p: b,
			um: V,
			m: B,
			r: U,
			mt: $,
			mc: P,
			pc: F,
			pbc: k,
			n: K,
			o: e
		};
		return {
			render: H,
			hydrate: i,
			createApp: (r = i, function(e, t = null) {
				e8(e) || (e = e0({}, e)), null == t || e9(t) || (t = null);
				let i = n6(), o = /* @__PURE__ */ new WeakSet(), l = [], s = !1, a = i.app = {
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
					use: (e, ...t) => (o.has(e) || (e && e8(e.install) ? (o.add(e), e.install(a, ...t)) : e8(e) && (o.add(e), e(a, ...t))), a),
					mixin: (e) => (i.mixins.includes(e) || i.mixins.push(e), a),
					component: (e, t) => t ? (i.components[e] = t, a) : i.components[e],
					directive: (e, t) => t ? (i.directives[e] = t, a) : i.directives[e],
					mount(o, l, u) {
						if (!s) {
							let c = a._ceVNode || iz(e, t);
							return c.appContext = i, !0 === u ? u = "svg" : !1 === u && (u = void 0), l && r ? r(c, o) : H(c, o, u), s = !0, a._container = o, o.__vue_app__ = a, i8(c.component);
						}
					},
					onUnmount(e) {
						l.push(e);
					},
					unmount() {
						s && (rV(l, a._instance, 16), H(null, a._container), delete a._container.__vue_app__);
					},
					provide: (e, t) => (i.provides[e] = t, a),
					runWithContext(e) {
						let t = n4;
						n4 = a;
						try {
							return e();
						} finally {
							n4 = t;
						}
					}
				};
				return a;
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
		1 & l.shapeFlag && !l.dynamicChildren && ((l.patchFlag <= 0 || 32 === l.patchFlag) && ((l = o[e] = iK(o[e])).el = t.el), r || -2 === l.patchFlag || im(t, l)), l.type === iR && -1 !== l.patchFlag && (l.el = t.el), l.type !== iT || l.el || (l.el = t.el);
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
	let i, { immediate: o, deep: l, flush: s, once: a } = r, u = e0({}, r), c = t && o || !t && "post" !== s;
	if (i2) {
		if ("sync" === s) {
			let e = n5(ib);
			i = e.__watcherHandles || (e.__watcherHandles = []);
		} else if (!c) {
			let e = () => {};
			return e.stop = eJ, e.resume = eJ, e.pause = eJ, e;
		}
	}
	let f = iX;
	u.call = (e, t, r) => rV(e, f, t, r);
	let p = !1;
	"post" === s ? u.scheduler = (e) => {
		id(e, f && f.suspense);
	} : "sync" !== s && (p = !0, u.scheduler = (e, t) => {
		t ? e() : rX(e);
	}), u.augmentJob = (e) => {
		t && (e.flags |= 4), p && (e.flags |= 2, f && (e.id = f.uid, e.i = f));
	};
	let d = function(e, t, r = eH) {
		let i, o, l, s, { immediate: a, deep: u, once: c, scheduler: f, augmentJob: p, call: d } = r, h = (e) => u ? e : rw(e) || !1 === u || 0 === u ? rD(e, 1) : rD(e), y = !1, m = !1;
		if (rP(e) ? (o = () => e.value, y = rw(e)) : rb(e) ? (o = () => h(e), y = !0) : e3(e) ? (m = !0, y = e.some((e) => rb(e) || rw(e)), o = () => e.map((e) => rP(e) ? e.value : rb(e) ? h(e) : e8(e) ? d ? d(e, 2) : e() : void 0)) : o = e8(e) ? t ? d ? () => d(e, 2) : e : () => {
			if (l) {
				tN();
				try {
					l();
				} finally {
					tD();
				}
			}
			let t = rN;
			rN = i;
			try {
				return d ? d(e, 3, [s]) : e(s);
			} finally {
				rN = t;
			}
		} : eJ, t && u) {
			let e = o, t = !0 === u ? Infinity : u;
			o = () => rD(e(), t);
		}
		let g = $, b = () => {
			i.stop(), g && g.active && e1(g.effects, i);
		};
		if (c && t) {
			let e = t;
			t = (...t) => {
				e(...t), b();
			};
		}
		let _ = m ? Array(e.length).fill(rF) : rF, w = (e) => {
			if (1 & i.flags && (i.dirty || e)) if (t) {
				let e = i.run();
				if (u || y || (m ? e.some((e, t) => tp(e, _[t])) : tp(e, _))) {
					l && l();
					let r = rN;
					rN = i;
					try {
						let r = [
							e,
							_ === rF ? void 0 : m && _[0] === rF ? [] : _,
							s
						];
						_ = e, d ? d(t, 3, r) : t(...r);
					} finally {
						rN = r;
					}
				}
			} else i.run();
		};
		return p && p(w), (i = new tA(o)).scheduler = f ? () => f(w, !1) : w, s = (e) => (function(e, t = !1, r = rN) {
			if (r) {
				let t = rL.get(r);
				t || rL.set(r, t = []), t.push(e);
			}
		})(e, !1, i), l = i.onStop = () => {
			let e = rL.get(i);
			if (e) {
				if (d) d(e, 4);
				else for (let t of e) t();
				rL.delete(i);
			}
		}, t ? a ? w(!0) : _ = i.run() : f ? f(w.bind(null, !0), !0) : i.run(), b.pause = i.pause.bind(i), b.resume = i.resume.bind(i), b.stop = b, b;
	}(e, t, u);
	return i2 && (i ? i.push(d) : c && d()), d;
}
function iO(e, t, r) {
	let i, o = this.proxy, l = e5(e) ? e.includes(".") ? ix(o, e) : () => o[e] : e.bind(o, o);
	e8(t) ? i = t : (i = t.handler, r = t);
	let s = iQ(this), a = iw(l, i.bind(o), r);
	return s(), a;
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
	let l = e.vnode.props || eH, s = r, a = t.startsWith("update:"), u = a && ("modelValue" === (o = t.slice(7)) || "model-value" === o ? l.modelModifiers : l[`${o}Modifiers`] || l[`${ts(o)}Modifiers`] || l[`${tu(o)}Modifiers`]);
	u && (u.trim && (s = r.map((e) => e5(e) ? e.trim() : e)), u.number && (s = r.map(tv)));
	let c = l[i = tf(t)] || l[i = tf(ts(t))];
	!c && a && (c = l[i = tf(tu(t))]), c && rV(c, e, 6, s);
	let f = l[i + "Once"];
	if (f) {
		if (e.emitted) {
			if (e.emitted[i]) return;
		} else e.emitted = {};
		e.emitted[i] = !0, rV(f, e, 6, s);
	}
}
var ij = /* @__PURE__ */ new WeakMap();
function iP(e, t) {
	return !!e && !!eZ(t) && (e6(e, (t = t.slice(2).replace(/Once$/, ""))[0].toLowerCase() + t.slice(1)) || e6(e, tu(t)) || e6(e, t));
}
function iA(e) {
	let t, r, { type: i, vnode: o, proxy: l, withProxy: s, propsOptions: [a], slots: u, attrs: c, emit: f, render: p, renderCache: d, props: h, data: y, setupState: m, ctx: g, inheritAttrs: b } = e, _ = r3(e);
	try {
		if (4 & o.shapeFlag) {
			let e = s || l;
			t = iq(p.call(e, e, d, h, m, y, g)), r = c;
		} else t = iq(i.length > 1 ? i(h, {
			attrs: c,
			slots: u,
			emit: f
		}) : i(h, null)), r = i.props ? c : ik(c);
	} catch (r) {
		iF.length = 0, rU(r, e, 1), t = iz(iT);
	}
	let w = t;
	if (r && !1 !== b) {
		let e = Object.keys(r), { shapeFlag: t } = w;
		e.length && 7 & t && (a && e.some(eQ) && (r = iE(r, a)), w = iW(w, r, !1, !0));
	}
	return o.dirs && ((w = iW(w, null, !1, !0)).dirs = w.dirs ? w.dirs.concat(o.dirs) : o.dirs), o.transition && ng(w, o.transition), t = w, r3(_), t;
}
var ik = (e) => {
	let t;
	for (let r in e) ("class" === r || "style" === r || eZ(r)) && ((t || (t = {}))[r] = e[r]);
	return t;
}, iE = (e, t) => {
	let r = {};
	for (let i in e) eQ(i) && i.slice(9) in t || (r[i] = e[i]);
	return r;
};
function iM(e, t, r) {
	let i = Object.keys(t);
	if (i.length !== Object.keys(e).length) return !0;
	for (let o = 0; o < i.length; o++) {
		let l = i[o];
		if (t[l] !== e[l] && !iP(r, l)) return !0;
	}
	return !1;
}
var iC = (e) => e.__isSuspense, i$ = Symbol.for("v-fgt"), iR = Symbol.for("v-txt"), iT = Symbol.for("v-cmt"), iI = Symbol.for("v-stc"), iF = [], iL = 1;
function iN(e, t = !1) {
	iL += e;
}
function iD(e) {
	return !!e && !0 === e.__v_isVNode;
}
function iB(e, t) {
	return e.type === t.type && e.key === t.key;
}
var iV = ({ key: e }) => null != e ? e : null, iU = ({ ref: e, ref_key: t, ref_for: r }) => ("number" == typeof e && (e = "" + e), null != e ? e5(e) || rP(e) || e8(e) ? {
	i: r2,
	r: e,
	k: t,
	f: !!r
} : e : null), iz = function(e, t = null, r = null, i = 0, o = null, l = !1) {
	var s, a;
	if (e && e !== nV || (e = iT), iD(e)) {
		let i = iW(e, t, !0);
		return r && iG(i, r), i.patchFlag = -2, i;
	}
	if (e8(s = e) && "__vccOpts" in s && (e = e.__vccOpts), t) {
		let { class: e, style: r } = t = (a = t) ? rO(a) || ie(a) ? e0({}, a) : a : null;
		e && !e5(e) && (t.class = tO(e)), e9(r) && (rO(r) && !e3(r) && (r = e0({}, r)), t.style = tg(r));
	}
	let u = e5(e) ? 1 : iC(e) ? 128 : e.__isTeleport ? 64 : e9(e) ? 4 : 2 * !!e8(e);
	return function(e, t = null, r = null, i = 0, o = null, l = +(e !== i$), s = !1, a = !1) {
		let u = {
			__v_isVNode: !0,
			__v_skip: !0,
			type: e,
			props: t,
			key: t && iV(t),
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
		return a ? (iG(u, r), 128 & l && e.normalize(u)) : r && (u.shapeFlag |= e5(r) ? 8 : 16), u;
	}(e, t, r, i, o, u, l, !0);
};
function iW(e, t, r = !1, i = !1) {
	let { props: o, ref: l, patchFlag: s, children: a, transition: u } = e, c = t ? function(...e) {
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
		key: c && iV(c),
		ref: t && t.ref ? r && l ? e3(l) ? l.concat(iU(t)) : [l, iU(t)] : iU(t) : l,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: a,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== i$ ? -1 === s ? 16 : 16 | s : s,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: u,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && iW(e.ssContent),
		ssFallback: e.ssFallback && iW(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return u && i && ng(f, u.clone(f)), f;
}
function iq(e) {
	return null == e || "boolean" == typeof e ? iz(iT) : e3(e) ? iz(i$, null, e.slice()) : iD(e) ? iK(e) : iz(iR, null, String(e));
}
function iK(e) {
	return null === e.el && -1 !== e.patchFlag || e.memo ? e : iW(e);
}
function iG(e, t) {
	let r = 0, { shapeFlag: i } = e;
	if (null == t) t = null;
	else if (e3(t)) r = 16;
	else if ("object" == typeof t) if (65 & i) {
		let r = t.default;
		r && (r._c && (r._d = !1), iG(e, r()), r._c && (r._d = !0));
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
		return iz(iR, null, e, t);
	}(t)]) : r = 8);
	e.children = t, e.shapeFlag |= r;
}
function iH(e, t, r, i = null) {
	rV(e, t, 7, [r, i]);
}
var iY = n6(), iJ = 0, iX = null, iZ = () => iX || r2;
{
	let e = tm(), t = (t, r) => {
		let i;
		return (i = e[t]) || (i = e[t] = []), i.push(r), (e) => {
			i.length > 1 ? i.forEach((t) => t(e)) : i[0](e);
		};
	};
	F = t("__VUE_INSTANCE_SETTERS__", (e) => iX = e), L = t("__VUE_SSR_SETTERS__", (e) => i2 = e);
}
var iQ = (e) => {
	let t = iX;
	return F(e), e.scope.on(), () => {
		e.scope.off(), F(t);
	};
}, i0 = () => {
	iX && iX.scope.off(), F(null);
};
function i1(e) {
	return 4 & e.vnode.shapeFlag;
}
var i2 = !1;
function i6(e, t, r) {
	e8(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : e9(t) && (e.setupState = rR(t)), i3(e, r);
}
function i3(e, t, r) {
	let i = e.type;
	if (!e.render) {
		if (!t && N && !i.render) {
			let t = i.template || nY(e).template;
			if (t) {
				let { isCustomElement: r, compilerOptions: o } = e.appContext.config, { delimiters: l, compilerOptions: s } = i;
				i.render = N(t, e0(e0({
					isCustomElement: r,
					delimiters: l
				}, o), s));
			}
		}
		e.render = i.render || eJ, D && D(e);
	}
	{
		let t = iQ(e);
		tN();
		try {
			(function(e) {
				let t = nY(e), r = e.proxy, i = e.ctx;
				nG = !1, t.beforeCreate && nH(t.beforeCreate, e, "bc");
				let { data: o, computed: l, methods: s, watch: a, provide: u, inject: c, created: f, beforeMount: p, mounted: d, beforeUpdate: h, updated: y, activated: m, deactivated: g, beforeDestroy: b, beforeUnmount: _, destroyed: w, unmounted: O, render: x, renderTracked: S, renderTriggered: j, errorCaptured: P, serverPrefetch: A, expose: k, inheritAttrs: E, components: M, directives: C, filters: $ } = t;
				if (c && function(e, t, r = eJ) {
					for (let r in e3(e) && (e = nQ(e)), e) {
						let i, o = e[r];
						rP(i = e9(o) ? "default" in o ? n5(o.from || r, o.default, !0) : n5(o.from || r) : n5(o)) ? Object.defineProperty(t, r, {
							enumerable: !0,
							configurable: !0,
							get: () => i.value,
							set: (e) => i.value = e
						}) : t[r] = i;
					}
				}(c, i, null), s) for (let e in s) {
					let t = s[e];
					e8(t) && (i[e] = t.bind(r));
				}
				if (o) {
					let t = o.call(r, r);
					e9(t) && (e.data = rv(t));
				}
				if (nG = !0, l) for (let e in l) {
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
				if (a) for (let e in a) (function e(t, r, i, o) {
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
				})(a[e], i, r, e);
				if (u) {
					let e = e8(u) ? u.call(r) : u;
					Reflect.ownKeys(e).forEach((t) => {
						n8(t, e[t]);
					});
				}
				function R(e, t) {
					e3(t) ? t.forEach((t) => e(t.bind(r))) : t && e(t.bind(r));
				}
				if (f && nH(f, e, "c"), R(nC, p), R(n$, d), R(nR, h), R(nT, y), R(nP, m), R(nA, g), R(nB, P), R(nD, S), R(nN, j), R(nI, _), R(nF, O), R(nL, A), e3(k)) if (k.length) {
					let t = e.exposed || (e.exposed = {});
					k.forEach((e) => {
						Object.defineProperty(t, e, {
							get: () => r[e],
							set: (t) => r[e] = t,
							enumerable: !0
						});
					});
				} else e.exposed || (e.exposed = {});
				x && e.render === eJ && (e.render = x), null != E && (e.inheritAttrs = E), M && (e.components = M), C && (e.directives = C), A && n_(e);
			})(e);
		} finally {
			tD(), t();
		}
	}
}
var i4 = { get: (e, t) => (tH(e, "get", ""), e[t]) };
function i8(e) {
	var t;
	return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(rR((!e6(t = e.exposed, "__v_skip") && Object.isExtensible(t) && th(t, "__v_skip", !0), t)), {
		get: (t, r) => r in t ? t[r] : r in nz ? nz[r](e) : void 0,
		has: (e, t) => t in e || t in nz
	})) : e.proxy;
}
var i5 = (e, t) => (function(e, t, r = !1) {
	let i, o;
	return e8(e) ? i = e : (i = e.get, o = e.set), new rI(i, o, r);
})(e, 0, i2);
function i7(e, t, r) {
	try {
		iN(-1);
		let i = arguments.length;
		if (2 !== i) return i > 3 ? r = Array.prototype.slice.call(arguments, 2) : 3 === i && iD(r) && (r = [r]), iz(e, t, r);
		if (!e9(t) || e3(t)) return iz(e, null, t);
		if (iD(t)) return iz(e, null, [t]);
		return iz(e, t);
	} finally {
		iN(1);
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
	return !!e && (oa(e) || Array.isArray(e) || !!e[ot] || !!e.constructor?.[ot] || od(e) || oh(e));
}
var os = Object.prototype.constructor.toString();
function oa(e) {
	if (!e || "object" != typeof e) return !1;
	let t = oi(e);
	if (null === t) return !0;
	let r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
	return r === Object || "function" == typeof r && Function.toString.call(r) === os;
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
	let r = oa(e);
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
	oS(e), e.drafts_.forEach(oP), e.drafts_ = null;
}
function oS(e) {
	e === B && (B = e.parent_);
}
function oj(e) {
	return B = {
		drafts_: [],
		parent_: B,
		immer_: e,
		canAutoFreeze_: !0,
		unfinalizedDrafts_: 0
	};
}
function oP(e) {
	let t = e[or];
	0 === t.type_ || 1 === t.type_ ? t.revoke_() : t.revoked_ = !0;
}
function oA(e, t) {
	t.unfinalizedDrafts_ = t.drafts_.length;
	let r = t.drafts_[0];
	return void 0 !== e && e !== r ? (r[or].modified_ && (ox(t), on(4)), ol(e) && (e = ok(t, e), t.parent_ || oM(t, e)), t.patches_ && ow("Patches").generateReplacementPatches_(r[or].base_, e, t.patches_, t.inversePatches_)) : e = ok(t, r, []), ox(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== oe ? e : void 0;
}
function ok(e, t, r) {
	if (ob(t)) return t;
	let i = t[or];
	if (!i) return ou(t, (o, l) => oE(e, i, t, o, l, r)), t;
	if (i.scope_ !== e) return t;
	if (!i.modified_) return oM(e, i.base_, !0), i.base_;
	if (!i.finalized_) {
		i.finalized_ = !0, i.scope_.unfinalizedDrafts_--;
		let t = i.copy_, o = t, l = !1;
		3 === i.type_ && (o = new Set(t), t.clear(), l = !0), ou(o, (o, s) => oE(e, i, t, o, s, r, l)), oM(e, t, !1), r && e.patches_ && ow("Patches").generatePatches_(i, r, e.patches_, e.inversePatches_);
	}
	return i.copy_;
}
function oE(e, t, r, i, o, l, s) {
	if (oo(o)) {
		let s = ok(e, o, l && t && 3 !== t.type_ && !of(t.assigned_, i) ? l.concat(i) : void 0);
		if (op(r, i, s), !oo(s)) return;
		e.canAutoFreeze_ = !1;
	} else s && r.add(o);
	if (ol(o) && !ob(o)) {
		if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
		ok(e, o), (!t || !t.scope_.parent_) && "symbol" != typeof i && (od(r) ? r.has(i) : Object.prototype.propertyIsEnumerable.call(r, i)) && oM(e, o);
	}
}
function oM(e, t, r = !1) {
	!e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && om(t, r);
}
var oC = {
	get(e, t) {
		if (t === or) return e;
		let r = ov(e);
		if (!of(r, t)) {
			var i = e;
			let s = oT(r, t);
			return s ? "value" in s ? s.value : s.get?.call(i.draft_) : void 0;
		}
		let s = r[t];
		return e.finalized_ || !ol(s) ? s : s === oR(e.base_, t) ? (oF(e), e.copy_[t] = oL(s, e)) : s;
	},
	has: (e, t) => t in ov(e),
	ownKeys: (e) => Reflect.ownKeys(ov(e)),
	set(e, t, r) {
		let i = oT(ov(e), t);
		if (i?.set) return i.set.call(e.draft_, r), !0;
		if (!e.modified_) {
			let i = oR(ov(e), t), o = i?.[or];
			if (o && o.base_ === r) return e.copy_[t] = r, e.assigned_[t] = !1, !0;
			if ((r === i ? 0 !== r || 1 / r == 1 / i : r != r && i != i) && (void 0 !== r || of(e.base_, t))) return !0;
			oF(e), oI(e);
		}
		return !!(e.copy_[t] === r && (void 0 !== r || t in e.copy_) || Number.isNaN(r) && Number.isNaN(e.copy_[t])) || (e.copy_[t] = r, e.assigned_[t] = !0, !0);
	},
	deleteProperty: (e, t) => (void 0 !== oR(e.base_, t) || t in e.base_ ? (e.assigned_[t] = !1, oF(e), oI(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0),
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
}, o$ = {};
function oR(e, t) {
	let r = e[or];
	return (r ? ov(r) : e)[t];
}
function oT(e, t) {
	if (!(t in e)) return;
	let r = oi(e);
	for (; r;) {
		let e = Object.getOwnPropertyDescriptor(r, t);
		if (e) return e;
		r = oi(r);
	}
}
function oI(e) {
	!e.modified_ && (e.modified_ = !0, e.parent_ && oI(e.parent_));
}
function oF(e) {
	e.copy_ || (e.copy_ = oy(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
function oL(e, t) {
	let r = od(e) ? ow("MapSet").proxyMap_(e, t) : oh(e) ? ow("MapSet").proxySet_(e, t) : function(e, t) {
		let r = Array.isArray(e), i = {
			type_: +!!r,
			scope_: t ? t.scope_ : B,
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
		r && (o = [i], l = o$);
		let { revoke: s, proxy: a } = Proxy.revocable(o, l);
		return i.draft_ = a, i.revoke_ = s, a;
	}(e, t);
	return (t ? t.scope_ : B).drafts_.push(r), r;
}
ou(oC, (e, t) => {
	o$[e] = function() {
		return arguments[0] = arguments[0][0], t.apply(this, arguments);
	};
}), o$.deleteProperty = function(e, t) {
	return o$.set.call(this, e, t, void 0);
}, o$.set = function(e, t, r) {
	return oC.set.call(this, e[0], t, r, e[0]);
};
var oN = new class {
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
				let o = oj(this), l = oL(e, void 0), s = !0;
				try {
					i = t(l), s = !1;
				} finally {
					s ? ox(o) : oS(o);
				}
				return oO(o, r), oA(i, o);
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
		let r = oj(this), i = oL(e, void 0);
		return i[or].isManual_ = !0, oS(r), i;
	}
	finishDraft(e, t) {
		let r = e && e[or];
		r && r.isManual_ || on(9);
		let { scope_: i } = r;
		return oO(i, t), oA(void 0, i);
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
}().produce, oD = t(r((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t, r = "function" == typeof Symbol, i = r && void 0 !== Symbol.toPrimitive ? Symbol.toPrimitive : x("Symbol.toPrimitive not found."), o = r && void 0 !== Symbol.iterator ? Symbol.iterator : x("Symbol.iterator not found."), l = Object.getPrototypeOf(Function), s = "function" == typeof Map && "function" == typeof Map.prototype.entries ? Map : x("A valid Map constructor could not be found."), a = "function" == typeof Set && "function" == typeof Set.prototype.entries ? Set : x("A valid Set constructor could not be found."), u = "function" == typeof WeakMap ? WeakMap : x("A valid WeakMap constructor could not be found."), c = r ? Symbol.for("@reflect-metadata:registry") : void 0, f = (!d(c) && h(Reflect) && Object.isExtensible(Reflect) && (t = Reflect[c]), d(t) && (t = function() {
		d(c) || "undefined" == typeof Reflect || c in Reflect || "function" != typeof Reflect.defineMetadata || (t = (e = Reflect).defineMetadata, r = e.hasOwnMetadata, i = e.getOwnMetadata, o = e.getOwnMetadataKeys, l = e.deleteMetadata, f = new u(), p = {
			isProviderFor: function(e, t) {
				var r = f.get(e);
				return !!(!d(r) && r.has(t)) || !!o(e, t).length && (d(r) && (r = new a(), f.set(e, r)), r.add(t), !0);
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
					default: void 0 === m && (m = new a()), m.add(e);
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
					d(o) && (o = new s(), g.set(e, o)), o.set(t, r);
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
			}(e, t), d(r) || (d(i) && (i = new s(), g.set(e, i)), i.set(t, r))), r;
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
				for (var l = b(o.keys()), s = 0;;) {
					var a = _(l);
					if (!a) return r.length = s, r;
					var u = a.value;
					try {
						r[s] = u;
					} catch (e) {
						try {
							w(l);
						} finally {
							throw e;
						}
					}
					s++;
				}
			},
			OrdinaryDeleteMetadata: function(e, r, o) {
				var l = i(r, o, !1);
				if (d(l) || !l.delete(e)) return !1;
				if (0 === l.size) {
					var s = t.get(r);
					d(s) || (s.delete(o), 0 === s.size && t.delete(s));
				}
				return !0;
			}
		};
		return f.registerProvider(r), r;
		function i(i, o, l) {
			var a = t.get(i), u = !1;
			if (d(a)) {
				if (!l) return;
				a = new s(), t.set(i, a), u = !0;
			}
			var c = a.get(o);
			if (d(c)) {
				if (!l) return;
				if (c = new s(), a.set(o, c), !e.setProvider(i, o, r)) throw a.delete(o), u && t.delete(i), Error("Wrong provider for target.");
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
		var o, l, s, a;
		if (!h(r)) throw TypeError();
		d(i) || (i = y(i)), o = e, l = t, S(s = r, a = i, !0).OrdinaryDefineOwnMetadata(o, l, s, a);
	}, e.getMetadata = function(e, t, r) {
		if (!h(t)) throw TypeError();
		return d(r) || (r = y(r)), function e(t, r, i) {
			if (!d(u = S(r, i, !1)) && function(e) {
				return !!e;
			}(u.OrdinaryHasOwnMetadata(t, r, i))) {
				var o = t, l = r, s = i, a = S(l, s, !1);
				return d(a) ? void 0 : a.OrdinaryGetOwnMetadata(o, l, s);
			}
			var u, c = O(r);
			if (null !== c) return e(t, c, i);
		}(e, t, r);
	}, e.getMetadataKeys = function(e, t) {
		if (!h(e)) throw TypeError();
		return d(t) || (t = y(t)), function e(t, r) {
			var i, o, l, s = (l = S(i = t, o = r, !1)) ? l.OrdinaryOwnMetadataKeys(i, o) : [], u = O(t);
			if (null === u) return s;
			var c = e(u, r);
			if (c.length <= 0) return s;
			if (s.length <= 0) return c;
			for (var f = new a(), p = [], d = 0; d < s.length; d++) {
				var h = s[d], y = f.has(h);
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
})()), oB = class {
	static getOwnPropertyNames(e) {
		return oD.getMetadataKeys(e);
	}
	static get(e, t) {
		return oD.getMetadata(t, e);
	}
	static define(e, t, r, i) {
		if (e && e.constructor && e.constructor != Object) {
			if (eF(r)) return void oD.defineMetadata(t, oN(oD.getMetadata(t, e) ?? i ?? {}, r), e);
			oD.defineMetadata(t, r, e);
		}
	}
};
let oV = (e) => "function" == typeof e && `${e}`.startsWith("class"), oU = {
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
		let r, { message: i, explanation: o,...l } = e, { path: s } = e, a = 0 === s.length ? i : `At path: ${s.join(".")} -- ${i}`;
		super(o ?? a), null != o && (this.cause = a), Object.assign(this, l), this.name = this.constructor.name, this.failures = () => r ??= [e, ...t()];
	}
};
let oW = Symbol("Type");
function* oq(e, t, r, i) {
	let o, l = e;
	for (let e of (("object" != typeof (o = l) || "function" != typeof o[Symbol.iterator]) && (l = [l]), l)) {
		let o = function(e, t, r, i) {
			if (!0 === e) return;
			let o = {};
			o = !1 === e ? {} : ep(e) ? { message: e } : e;
			let { path: l, branch: s, node: a } = t, { type: u } = r, { refinement: c, message: f = eL(i) ? "Required" : `Expected a value of type \`${u}\`${c ? ` with refinement \`${c}\`` : ""}, but received: \`${i}\`` } = o;
			return {
				...o,
				value: i,
				type: u,
				refinement: c,
				key: l[l.length - 1],
				path: l,
				branch: s,
				node: a,
				message: f
			};
		}(e, t, r, i);
		o && (yield o);
	}
}
function oK(e, t, r = {}) {
	let i = oG(e, t, r), o = function(e) {
		let { done: t, value: r } = e.next();
		return t ? void 0 : r;
	}(i);
	return o[0] ? [new oz(o[0], function* () {
		for (let e of i) e[0] && (yield e[0]);
	}), void 0] : [void 0, o[1]];
}
function* oG(e, t, r = {}) {
	let { path: i = [], branch: o = [e], node: l = { current: t }, coerce: s = !1, mask: a = !1 } = r, u = {
		mask: a,
		path: i,
		branch: o,
		node: l
	}, c = e;
	if (s) {
		let r = t.coercer(e, u);
		void 0 != r && (c = r);
	}
	let f = oH.valid;
	for (let i of oq(t.validator(c, u), u, t, e)) i.explanation = r.message, f = oH.not_valid, yield [i, void 0];
	for (let [e, p, d] of t.entries(c, u)) for (let t of oG(p, d, {
		path: void 0 === e ? i : [...i, e],
		branch: void 0 === e ? o : [...o, p],
		node: void 0 === e ? l : {
			current: d,
			parent: l
		},
		coerce: s,
		mask: a,
		message: r.message
	})) t[0] ? (f = null != t[0].refinement ? oH.not_refined : oH.not_valid, yield [t[0], void 0]) : s && (p = t[1], void 0 === e ? c = p : c instanceof Map ? c.set(e, p) : c instanceof Set ? c.add(p) : eu(c) && (c[e] = p));
	if (f !== oH.not_valid) for (let i of oq(t.refiner(c, u), u, t, e)) i.explanation = r.message, f = oH.not_refined, yield [i, void 0];
	f === oH.valid && (yield [void 0, c]);
}
var oH = ((W = oH || {})[W.valid = 0] = "valid", W[W.not_refined = 1] = "not_refined", W[W.not_valid = 2] = "not_valid", W);
let oY = (e) => (...t) => {
	let r = e(...t), i = (e, t) => {
		let i = oB.get(e, t) ?? {};
		oB.define(e, t, {
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
		oB.define(e, t, (e) => {
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
			get(r, s) {
				if (s === e.meta) return o ??= e.create(t, l, e.meta);
				if (i) {
					if (x(t)) {
						let e = t?.[i]?.[s];
						if (!eL(e)) return e;
					}
					return l ? l?.[i]?.[s] : void 0;
				}
				if (x(t)) {
					let e = t?.[s];
					if (!eL(e)) return e;
				}
				return l ? l[s] : void 0;
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
			if (!eL(e.schema)) return this.toValue(e.schema);
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
	[oW] = oW;
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
		return oK(e, this, t);
	}
	create(e) {
		let t = oK(e, this, { coerce: !0 });
		if (t[0]) throw t[0];
		return t[1];
	}
	mask(e) {
		let t = oK(e, this, {
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
				for (let l of (yield* this.unwrap.refiner(e, o), oq(r(e, o), o, t, e))) yield {
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
		return oq(this.unwrap.validator(e, t), t, this, e);
	}
	refiner(e, t) {
		return oq(this.unwrap.refiner(e, t), t, this, e);
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
		return eL(e) || null === e ? e : String(e);
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
		return eB(e);
	}
	coercer(e, t) {
		try {
			let t = void 0 != e ? parseInt(String(e)) : void 0;
			return eB(t) ? t : void 0;
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
		return eN(e);
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
				if (oV(t)) {
					let i = new t(), o = {};
					for (let [e, t] of Object.entries(i)) o[e] = li.literal(t);
					for (let e of oB.getOwnPropertyNames(i)) {
						let t = oB.get(i, e);
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
}, ls = class e extends o2 {
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
}, la = class e extends o2 {
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
		for (let r of this.schema.allOf) yield* oq(r.validator(e, t), t, this, e);
	}
	*refiner(e, t) {
		for (let r of this.schema.allOf) yield* oq(r.refiner(e, t), t, this, e);
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
			else for (let e of r) oV(e) && i.push(ll.create(e));
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
			let [r, i] = oK(e, t, { coerce: !0 });
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
			let [ ...o] = oG(e, i, t), [l] = o;
			if (l && !l[0]) return [];
			for (let [e] of o) e && r.push(e);
		}
		return [`Expected the value to satisfy a union of \`${this.schema.oneOf.map((e) => e.type).join(" | ")}\`, but received: ${e}`, ...r];
	}
}, lp = e({
	annotate: () => lK,
	any: () => lh,
	array: () => lF,
	binary: () => lE,
	boolean: () => lk,
	custom: () => lU,
	defaults: () => lW,
	discriminatorMapping: () => lV,
	enums: () => lM,
	exclusiveMaximum: () => lP,
	exclusiveMinimum: () => lS,
	integer: () => lO,
	intersection: () => lD,
	literal: () => l$,
	maxItems: () => lN,
	maxLength: () => lb,
	maximum: () => lj,
	minItems: () => lL,
	minLength: () => lg,
	minimum: () => lx,
	multipleOf: () => lA,
	nativeEnum: () => lC,
	never: () => lv,
	nil: () => ly,
	number: () => lw,
	object: () => lR,
	optional: () => lq,
	pattern: () => l_,
	record: () => lT,
	ref: () => ld,
	refine: () => lz,
	string: () => lm,
	tuple: () => lI,
	union: () => lB
});
let ld = o8.create, lh = o5.create, lv = lo.create, ly = o7.create, lm = o9.create, lg = oJ((e, t, r) => o6.refine(e, (e) => !!e && e.length >= t || (r ?? `Expected string value length great than or equal ${t}, but received "${e}"`), { minLength: t })), lb = oJ((e, t, r) => o6.refine(e, (e) => !!e && e.length <= t || (r ?? `Expected string value length less than or equal ${t}, but received "${e}"`), { maxLength: t })), l_ = oJ((e, t, r) => {
	let i = o6.refine(e, (i) => !!t.test(i) || (r ?? `Expected a ${e.type} matching \`/${t.source}/\` but received "${i}"`), { pattern: t.source });
	return r ? i.use(lK({ "x-pattern-err-msg": r })) : i;
}), lw = le.create, lO = lt.create, lx = oJ((e, t, r) => o6.refine(e, (e) => e >= t || (r ?? `Expected value great than or equal ${t}, but received "${e}"`), { minimum: t })), lS = oJ((e, t, r) => o6.refine(e, (e) => e > t || (r ?? `Expected value great than ${t}, but received "${e}"`), { exclusiveMinimum: t })), lj = oJ((e, t, r) => o6.refine(e, (e) => e <= t || (r ?? `Expected value less than or equal ${t}, but received "${e}"`), { maximum: t })), lP = oJ((e, t, r) => o6.refine(e, (e) => e < t || (r ?? `Expected value less than or equal ${t}, but received "${e}"`), { exclusiveMaximum: t })), lA = oJ((e, t, r) => o6.refine(e, (e) => e % t == 0 || (r ?? `Expected value multiple of ${t}, but received "${e}"`), { multipleOf: t })), lk = lr.create, lE = ln.create, lM = li.create, lC = li.nativeEnum, l$ = li.literal, lR = ll.create, lT = ls.create, lI = lu.create, lF = la.create, lL = oJ((e, t, r) => o6.refine(e, (e) => !!eg(e) && e.length >= t || (r ?? `Expected array value at least ${t}, but received "${e?.length}"`), { minItems: t })), lN = oJ((e, t, r) => o6.refine(e, (e) => !!eg(e) && e.length <= t || (r ?? `Expected array value  ${t}, but received "${e?.length}"`), { maxItems: t })), lD = lc.create, lB = lf.create, lV = lf.discriminatorMapping, lU = o2.define, lz = o6.refine, lW = oJ((e, t) => o3.create(e, t)), lq = oJ((e) => o4.create(e)), lK = oJ((e, t) => o6.of(e, { [oX.meta]: t })), lG = (e) => e.split("/")?.findLast(() => !0) ?? "";
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
		if (t?.title && (r = r.use(lK({ title: t?.title })), i = !0), t?.description) if (i) r = r.use(lK({ description: t?.description }));
		else {
			let [e, ...i] = t?.description.split(/[.\n]/);
			r = r.use(lK({
				title: e,
				description: i ? i.join("\n").trim() : void 0
			}));
		}
		if (t) {
			for (let e of l2) if (!eL(t[e])) {
				if ("pattern" == e) {
					r = r.use(l_(new RegExp(t[e]), t["x-pattern-err-msg"])), delete t[e];
					continue;
				}
				let i = lp[e];
				i && (r = r.use(i(t[e])), delete t[e]);
			}
			delete t.title, delete t.description, Object.keys(t).length > 0 && (r = r.use(lK(t)));
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
			let e = lM(t.enum);
			return t["x-enum-labels"] ? e.use(lK({ enumLabels: t["x-enum-labels"] })) : e;
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
						eL(e) || (r[`${e}`] = t);
					}
				}
				return lV(e, r);
			}
		}
		if (t.oneOf) {
			let e = t.oneOf.map((e) => this.decode(e));
			return 1 === e.length ? e[0] : lB(...e);
		}
		if (t.allOf) {
			let e = t.allOf.map((e) => this.decode(e));
			return 1 === e.length ? e[0] : lD(...e);
		}
		if (lY(t)) {
			if (t.properties) {
				let e = t.required ?? [], r = {};
				for (let [i, o] of Object.entries(t.properties)) {
					let t = this.decode(o);
					e.includes(i) || (t = t.optional()), r[i] = t;
				}
				return lR(r);
			}
			let e = t.additionalProperties ?? {};
			return e ? lT(this.decode(t.propertyNames ?? { type: "string" }), this.decode(e)) : lR();
		}
		return lX(t) ? eg(t.items) ? lI(t.items.map((e) => this.decode(e))) : lF(this.decode(t.items)) : lQ(t) ? "binary" === t.format ? lE() : lm() : lZ(t) ? "integer" === t.type ? lO() : lw() : l0(t) ? lk() : lJ(t) ? ly() : lh();
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
	if (eN(e)) return {};
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
let l8 = (e) => eM(e) && e[l4] === l4, l5 = (e) => {
	let t;
	return !!(t = Object.values(e)[0]) && t[oW] == oW;
};
function l7(...e) {
	let t, r = {}, i = {};
	for (let o of e) {
		if (eF(o)) {
			t = o;
			continue;
		}
		eL(t) ? r = o : i = o;
	}
	let [o, l] = function(e, t = h) {
		if (!e) return [[], []];
		let r = d(e) ? e : Object.values(e);
		t = ea(t);
		let i = [], o = [];
		for (let e = 0; e < r.length; e++) {
			let l = r[e];
			t(l) ? i.push(l) : o.push(l);
		}
		return [i, o];
	}(Object.keys(r), (e) => /^on[A-Z]/.test(e)), s = {
		emits: [...o.map((e) => eq(e.slice(2))), ...i.emits ?? []],
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
		emits: s.emits,
		props: s.props,
		inheritAttrs: i.inheritAttrs,
		[l4]: l4
	};
}
let l9 = (e, t) => new Proxy(e, { get: (e, r) => t[r] ?? e[r] });
var se = "undefined" != typeof document;
function st(e) {
	return "object" == typeof e || "displayName" in e || "props" in e || "__vccOpts" in e;
}
var sr = Object.assign;
function sn(e, t) {
	let r = {};
	for (let i in t) {
		let o = t[i];
		r[i] = so(o) ? o.map(e) : e(o);
	}
	return r;
}
var si = () => {}, so = Array.isArray, sl = /#/g, ss = /&/g, sa = /\//g, su = /=/g, sc = /\?/g, sf = /\+/g, sp = /%5B/g, sd = /%5D/g, sh = /%5E/g, sv = /%60/g, sy = /%7B/g, sm = /%7C/g, sg = /%7D/g, sb = /%20/g;
function s_(e) {
	return encodeURI("" + e).replace(sm, "|").replace(sp, "[").replace(sd, "]");
}
function sw(e) {
	return s_(e).replace(sf, "%2B").replace(sb, "+").replace(sl, "%23").replace(ss, "%26").replace(sv, "`").replace(sy, "{").replace(sg, "}").replace(sh, "^");
}
function sO(e) {
	return null == e ? "" : s_(e).replace(sl, "%23").replace(sc, "%3F").replace(sa, "%2F");
}
function sx(e) {
	try {
		return decodeURIComponent("" + e);
	} catch (e) {}
	return "" + e;
}
var sS = /\/$/;
function sj(e, t, r = "/") {
	let i, o = {}, l = "", s = "", a = t.indexOf("#"), u = t.indexOf("?");
	return a < u && a >= 0 && (u = -1), u > -1 && (i = t.slice(0, u), o = e(l = t.slice(u + 1, a > -1 ? a : t.length))), a > -1 && (i = i || t.slice(0, a), s = t.slice(a, t.length)), {
		fullPath: (i = function(e, t) {
			let r, i;
			if (e.startsWith("/")) return e;
			if (!e) return t;
			let o = t.split("/"), l = e.split("/"), s = l[l.length - 1];
			(".." === s || "." === s) && l.push("");
			let a = o.length - 1;
			for (r = 0; r < l.length; r++) if ("." !== (i = l[r])) if (".." === i) a > 1 && a--;
			else break;
			return o.slice(0, a).join("/") + "/" + l.slice(r).join("/");
		}(null != i ? i : t, r)) + (l && "?") + l + s,
		path: i,
		query: o,
		hash: sx(s)
	};
}
function sP(e, t) {
	return t && e.toLowerCase().startsWith(t.toLowerCase()) ? e.slice(t.length) || "/" : e;
}
function sA(e, t) {
	return (e.aliasOf || e) === (t.aliasOf || t);
}
function sk(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let o in e) {
		var r, i;
		if (r = e[o], i = t[o], so(r) ? !sE(r, i) : so(i) ? !sE(i, r) : r !== i) return !1;
	}
	return !0;
}
function sE(e, t) {
	return so(t) ? e.length === t.length && e.every((e, r) => e === t[r]) : 1 === e.length && e[0] === t;
}
var sM = {
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
(q = V || (V = {})).pop = "pop", q.push = "push", (K = U || (U = {})).back = "back", K.forward = "forward", K.unknown = "";
var sC = /^[^#]+#/;
function s$(e, t) {
	return e.replace(sC, "#") + t;
}
var sR = () => ({
	left: window.scrollX,
	top: window.scrollY
});
function sT(e, t) {
	return (history.state ? history.state.position - t : -1) + e;
}
var sI = /* @__PURE__ */ new Map();
function sF(e, t) {
	let { pathname: r, search: i, hash: o } = t, l = e.indexOf("#");
	if (l > -1) {
		let t = o.includes(e.slice(l)) ? e.slice(l).length : 1, r = o.slice(t);
		return "/" !== r[0] && (r = "/" + r), sP(r, "");
	}
	return sP(r, e) + i + o;
}
function sL(e, t, r, i = !1, o = !1) {
	return {
		back: e,
		current: t,
		forward: r,
		replaced: i,
		position: window.history.length,
		scroll: o ? sR() : null
	};
}
function sN(e) {
	let t = function(e) {
		let { history: t, location: r } = window, i = { value: sF(e, r) }, o = { value: t.state };
		function l(i, l, s) {
			let a = e.indexOf("#"), u = a > -1 ? (r.host && document.querySelector("base") ? e : e.slice(a)) + i : location.protocol + "//" + location.host + e + i;
			try {
				t[s ? "replaceState" : "pushState"](l, "", u), o.value = l;
			} catch (e) {
				console.error(e), r[s ? "replace" : "assign"](u);
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
				let s = sr({}, o.value, t.state, {
					forward: e,
					scroll: sR()
				});
				l(s.current, s, !0), l(e, sr({}, sL(i.value, e, null), { position: s.position + 1 }, r), !1), i.value = e;
			},
			replace: function(e, r) {
				l(e, sr({}, t.state, sL(o.value.back, e, o.value.forward, !0), r, { position: o.value.position }), !0), i.value = e;
			}
		};
	}(e = function(e) {
		if (!e) if (se) {
			let t = document.querySelector("base");
			e = (e = t && t.getAttribute("href") || "/").replace(/^\w+:\/\/[^\/]+/, "");
		} else e = "/";
		return "/" !== e[0] && "#" !== e[0] && (e = "/" + e), e.replace(sS, "");
	}(e)), r = function(e, t, r, i) {
		let o = [], l = [], s = null, a = ({ state: l }) => {
			let a = sF(e, location), u = r.value, c = t.value, f = 0;
			if (l) {
				if (r.value = a, t.value = l, s && s === u) {
					s = null;
					return;
				}
				f = c ? l.position - c.position : 0;
			} else i(a);
			o.forEach((e) => {
				e(r.value, u, {
					delta: f,
					type: V.pop,
					direction: f ? f > 0 ? U.forward : U.back : U.unknown
				});
			});
		};
		function u() {
			let { history: e } = window;
			e.state && e.replaceState(sr({}, e.state, { scroll: sR() }), "");
		}
		return window.addEventListener("popstate", a), window.addEventListener("beforeunload", u, { passive: !0 }), {
			pauseListeners: function() {
				s = r.value;
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
				l = [], window.removeEventListener("popstate", a), window.removeEventListener("beforeunload", u);
			}
		};
	}(e, t.state, t.location, t.replace), i = sr({
		location: "",
		base: e,
		go: function(e, t = !0) {
			t || r.pauseListeners(), history.go(e);
		},
		createHref: s$.bind(null, e)
	}, t, r);
	return Object.defineProperty(i, "location", {
		enumerable: !0,
		get: () => t.location.value
	}), Object.defineProperty(i, "state", {
		enumerable: !0,
		get: () => t.state.value
	}), i;
}
function sD(e) {
	return "string" == typeof e || "symbol" == typeof e;
}
var sB = Symbol("");
function sV(e, t) {
	return sr(Error(), {
		type: e,
		[sB]: !0
	}, t);
}
function sU(e, t) {
	return e instanceof Error && sB in e && (null == t || !!(e.type & t));
}
(G = z || (z = {}))[G.aborted = 4] = "aborted", G[G.cancelled = 8] = "cancelled", G[G.duplicated = 16] = "duplicated";
var sz = "[^/]+?", sW = {
	sensitive: !1,
	strict: !1,
	start: !0,
	end: !0
}, sq = /[.+*?^${}()[\]/\\]/g;
function sK(e, t) {
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
		if (sG(i)) return 1;
		if (sG(o)) return -1;
	}
	return o.length - i.length;
}
function sG(e) {
	let t = e[e.length - 1];
	return e.length > 0 && t[t.length - 1] < 0;
}
var sH = {
	type: 0,
	value: ""
}, sY = /[a-zA-Z0-9_]/;
function sJ(e, t) {
	let r = {};
	for (let i of t) i in e && (r[i] = e[i]);
	return r;
}
function sX(e) {
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
function sZ(e) {
	for (; e;) {
		if (e.record.aliasOf) return !0;
		e = e.parent;
	}
	return !1;
}
function sQ(e, t) {
	let r = {};
	for (let i in e) r[i] = i in t ? t[i] : e[i];
	return r;
}
function s0({ record: e }) {
	return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function s1(e) {
	let t = {};
	if ("" === e || "?" === e) return t;
	let r = ("?" === e[0] ? e.slice(1) : e).split("&");
	for (let e = 0; e < r.length; ++e) {
		let i = r[e].replace(sf, " "), o = i.indexOf("="), l = sx(o < 0 ? i : i.slice(0, o)), s = o < 0 ? null : sx(i.slice(o + 1));
		if (l in t) {
			let e = t[l];
			so(e) || (e = t[l] = [e]), e.push(s);
		} else t[l] = s;
	}
	return t;
}
function s2(e) {
	let t = "";
	for (let r in e) {
		let i = e[r];
		if (r = sw(r).replace(su, "%3D"), null == i) {
			void 0 !== i && (t += (t.length ? "&" : "") + r);
			continue;
		}
		(so(i) ? i.map((e) => e && sw(e)) : [i && sw(i)]).forEach((e) => {
			void 0 !== e && (t += (t.length ? "&" : "") + r, null != e && (t += "=" + e));
		});
	}
	return t;
}
var s6 = Symbol(""), s3 = Symbol(""), s4 = Symbol(""), s8 = Symbol(""), s5 = Symbol("");
function s7() {
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
function s9(e, t, r, i, o, l = (e) => e()) {
	let s = i && (i.enterCallbacks[o] = i.enterCallbacks[o] || []);
	return () => new Promise((a, u) => {
		let c = (e) => {
			if (!1 === e) u(sV(4, {
				from: r,
				to: t
			}));
			else if (e instanceof Error) u(e);
			else "string" == typeof e || e && "object" == typeof e ? u(sV(2, {
				from: t,
				to: e
			})) : (s && i.enterCallbacks[o] === s && "function" == typeof e && s.push(e), a());
		}, f = Promise.resolve(l(() => e.call(i && i.instances[o], t, r, c)));
		e.length < 3 && (f = f.then(c)), f.catch((e) => u(e));
	});
}
function ae(e, t, r, i, o = (e) => e()) {
	let l = [];
	for (let s of e) for (let e in s.components) {
		let a = s.components[e];
		if ("beforeRouteEnter" === t || s.instances[e]) if (st(a)) {
			let u = (a.__vccOpts || a)[t];
			u && l.push(s9(u, r, i, s, e, o));
		} else {
			let u = a();
			l.push(() => u.then((l) => {
				if (!l) throw Error(`Couldn't resolve component "${e}" at "${s.path}"`);
				let a = l.__esModule || "Module" === l[Symbol.toStringTag] || l.default && st(l.default) ? l.default : l;
				s.mods[e] = l, s.components[e] = a;
				let u = (a.__vccOpts || a)[t];
				return u && s9(u, r, i, s, e, o)();
			}));
		}
	}
	return l;
}
function at(e) {
	let t = n5(s4), r = n5(s8), i = i5(() => {
		let r = rC(e.to);
		return t.resolve(r);
	}), o = i5(() => {
		let { matched: e } = i.value, { length: t } = e, o = e[t - 1], l = r.matched;
		if (!o || !l.length) return -1;
		let s = l.findIndex(sA.bind(null, o));
		if (s > -1) return s;
		let a = an(e[t - 2]);
		return t > 1 && an(o) === a && l[l.length - 1].path !== a ? l.findIndex(sA.bind(null, e[t - 2])) : s;
	}), l = i5(() => o.value > -1 && function(e, t) {
		for (let r in t) {
			let i = t[r], o = e[r];
			if ("string" == typeof i) {
				if (i !== o) return !1;
			} else if (!so(o) || o.length !== i.length || i.some((e, t) => e !== o[t])) return !1;
		}
		return !0;
	}(r.params, i.value.params)), s = i5(() => o.value > -1 && o.value === r.matched.length - 1 && sk(r.params, i.value.params));
	return {
		route: i,
		href: i5(() => i.value.href),
		isActive: l,
		isExactActive: s,
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
				let r = t[rC(e.replace) ? "replace" : "push"](rC(e.to)).catch(si);
				return e.viewTransition && "undefined" != typeof document && "startViewTransition" in document && document.startViewTransition(() => r), r;
			}
			return Promise.resolve();
		}
	};
}
var ar = nb({
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
	useLink: at,
	setup(e, { slots: t }) {
		let r = rv(at(e)), { options: i } = n5(s4), o = i5(() => ({
			[ai(e.activeClass, i.linkActiveClass, "router-link-active")]: r.isActive,
			[ai(e.exactActiveClass, i.linkExactActiveClass, "router-link-exact-active")]: r.isExactActive
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
function an(e) {
	return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
var ai = (e, t, r) => null != e ? e : null != t ? t : r, ao = nb({
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
		let i = n5(s5), o = i5(() => e.route || i.value), l = n5(s3, 0), s = i5(() => {
			let e, t = rC(l), { matched: r } = o.value;
			for (; (e = r[t]) && !e.components;) t++;
			return t;
		}), a = i5(() => o.value.matched[s.value]);
		n8(s3, i5(() => s.value + 1)), n8(s6, a), n8(s5, o);
		let u = rA();
		return i_(() => [
			u.value,
			a.value,
			e.name
		], ([e, t, r], [i, o, l]) => {
			t && (t.instances[r] = e, o && o !== t && e && e === i && (t.leaveGuards.size || (t.leaveGuards = o.leaveGuards), t.updateGuards.size || (t.updateGuards = o.updateGuards))), !e || !t || o && sA(t, o) && i || (t.enterCallbacks[r] || []).forEach((t) => t(e));
		}, { flush: "post" }), () => {
			let i = o.value, l = e.name, s = a.value, c = s && s.components[l];
			if (!c) return al(r.default, {
				Component: c,
				route: i
			});
			let f = s.props[l], p = i7(c, sr({}, f ? !0 === f ? i.params : "function" == typeof f ? f(i) : f : null, t, {
				onVnodeUnmounted: (e) => {
					e.component.isUnmounted && (s.instances[l] = null);
				},
				ref: u
			}));
			return al(r.default, {
				Component: p,
				route: i
			}) || p;
		};
	}
});
function al(e, t) {
	if (!e) return null;
	let r = e(t);
	return 1 === r.length ? r[0] : r;
}
function as(e) {
	let t, r, i, o = function(e, t) {
		let r = [], i = /* @__PURE__ */ new Map();
		function o(e, s, a) {
			let u, c, f = !a, p = sX(e);
			p.aliasOf = a && a.record;
			let d = sQ(t, e), h = [p];
			if ("alias" in e) for (let t of "string" == typeof e.alias ? [e.alias] : e.alias) h.push(sX(sr({}, p, {
				components: a ? a.record.components : p.components,
				path: t,
				aliasOf: a ? a.record : p
			})));
			for (let t of h) {
				let { path: h } = t;
				if (s && "/" !== h[0]) {
					let e = s.record.path, r = "/" === e[e.length - 1] ? "" : "/";
					t.path = s.record.path + (h && r + h);
				}
				if (u = function(e, t, r) {
					let i = sr(function(e, t) {
						let r = sr({}, sW, t), i = [], o = r.start ? "^" : "", l = [];
						for (let t of e) {
							let e = t.length ? [] : [90];
							r.strict && !t.length && (o += "/");
							for (let i = 0; i < t.length; i++) {
								let s = t[i], a = 40 + .25 * !!r.sensitive;
								if (0 === s.type) i || (o += "/"), o += s.value.replace(sq, "\\$&"), a += 40;
								else if (1 === s.type) {
									let { value: e, repeatable: r, optional: u, regexp: c } = s;
									l.push({
										name: e,
										repeatable: r,
										optional: u
									});
									let f = c || sz;
									f !== sz && (a += 10);
									let p = r ? `((?:${f})(?:/(?:${f}))*)` : `(${f})`;
									i || (p = u && t.length < 2 ? `(?:/${p})` : "/" + p), u && (p += "?"), o += p, a += 20, u && (a += -8), r && (a += -20), ".*" === f && (a += -50);
								}
								e.push(a);
							}
							i.push(e);
						}
						if (r.strict && r.end) {
							let e = i.length - 1;
							i[e][i[e].length - 1] += .7000000000000001;
						}
						r.strict || (o += "/?"), r.end ? o += "$" : r.strict && !o.endsWith("/") && (o += "(?:/|$)");
						let s = new RegExp(o, r.sensitive ? "" : "i");
						return {
							re: s,
							score: i,
							keys: l,
							parse: function(e) {
								let t = e.match(s), r = {};
								if (!t) return null;
								for (let e = 1; e < t.length; e++) {
									let i = t[e] || "", o = l[e - 1];
									r[o.name] = i && o.repeatable ? i.split("/") : i;
								}
								return r;
							},
							stringify: function(t) {
								let r = "", i = !1;
								for (let o of e) for (let e of (i && r.endsWith("/") || (r += "/"), i = !1, o)) if (0 === e.type) r += e.value;
								else if (1 === e.type) {
									let { value: l, repeatable: s, optional: a } = e, u = l in t ? t[l] : "";
									if (so(u) && !s) throw Error(`Provided param "${l}" is an array but it is not repeatable (* or + modifiers)`);
									let c = so(u) ? u.join("/") : u;
									if (!c) if (a) o.length < 2 && (r.endsWith("/") ? r = r.slice(0, -1) : i = !0);
									else throw Error(`Missing required param "${l}"`);
									r += c;
								}
								return r || "/";
							}
						};
					}(function(e) {
						let t, r;
						if (!e) return [[]];
						if ("/" === e) return [[sH]];
						if (!e.startsWith("/")) throw Error(`Invalid path "${e}"`);
						function i(e) {
							throw Error(`ERR (${o})/"${c}": ${e}`);
						}
						let o = 0, l = 0, s = [];
						function a() {
							t && s.push(t), t = [];
						}
						let u = 0, c = "", f = "";
						function p() {
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
								l = o, o = 4;
								continue;
							}
							switch (o) {
								case 0:
									"/" === r ? (c && p(), a()) : ":" === r ? (p(), o = 1) : c += r;
									break;
								case 4:
									c += r, o = l;
									break;
								case 1:
									"(" === r ? o = 2 : sY.test(r) ? c += r : (p(), o = 0, "*" !== r && "?" !== r && "+" !== r && u--);
									break;
								case 2:
									")" === r ? "\\" == f[f.length - 1] ? f = f.slice(0, -1) + r : o = 3 : f += r;
									break;
								case 3:
									p(), o = 0, "*" !== r && "?" !== r && "+" !== r && u--, f = "";
									break;
								default: i("Unknown state");
							}
						}
						return 2 === o && i(`Unfinished custom RegExp for param "${c}"`), p(), a(), s;
					}(e.path), r), {
						record: e,
						parent: t,
						children: [],
						alias: []
					});
					return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i), i;
				}(t, s, d), a ? a.alias.push(u) : ((c = c || u) !== u && c.alias.push(u), f && e.name && !sZ(u) && l(e.name)), s0(u) && function(e) {
					let t = function(e, t) {
						let r = 0, i = t.length;
						for (; r !== i;) {
							let o = r + i >> 1;
							0 > sK(e, t[o]) ? i = o : r = o + 1;
						}
						let o = function(e) {
							let t = e;
							for (; t = t.parent;) if (s0(t) && 0 === sK(e, t)) return t;
						}(e);
						return o && (i = t.lastIndexOf(o, i - 1)), i;
					}(e, r);
					r.splice(t, 0, e), e.record.name && !sZ(e) && i.set(e.record.name, e);
				}(u), p.children) {
					let e = p.children;
					for (let t = 0; t < e.length; t++) o(e[t], u, a && a.children[t]);
				}
				a = a || u;
			}
			return c ? () => {
				l(c);
			} : si;
		}
		function l(e) {
			if (sD(e)) {
				let t = i.get(e);
				t && (i.delete(e), r.splice(r.indexOf(t), 1), t.children.forEach(l), t.alias.forEach(l));
			} else {
				let t = r.indexOf(e);
				t > -1 && (r.splice(t, 1), e.record.name && i.delete(e.record.name), e.children.forEach(l), e.alias.forEach(l));
			}
		}
		return t = sQ({
			strict: !1,
			end: !0,
			sensitive: !1
		}, t), e.forEach((e) => o(e)), {
			addRoute: o,
			resolve: function(e, t) {
				let o, l, s, a = {};
				if ("name" in e && e.name) {
					if (!(o = i.get(e.name))) throw sV(1, { location: e });
					s = o.record.name, a = sr(sJ(t.params, o.keys.filter((e) => !e.optional).concat(o.parent ? o.parent.keys.filter((e) => e.optional) : []).map((e) => e.name)), e.params && sJ(e.params, o.keys.map((e) => e.name))), l = o.stringify(a);
				} else if (null != e.path) l = e.path, (o = r.find((e) => e.re.test(l))) && (a = o.parse(l), s = o.record.name);
				else {
					if (!(o = t.name ? i.get(t.name) : r.find((e) => e.re.test(t.path)))) throw sV(1, {
						location: e,
						currentLocation: t
					});
					s = o.record.name, a = sr({}, t.params, e.params), l = o.stringify(a);
				}
				let u = [], c = o;
				for (; c;) u.unshift(c.record), c = c.parent;
				return {
					name: s,
					path: l,
					params: a,
					matched: u,
					meta: u.reduce((e, t) => sr(e, t.meta), {})
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
	}(e.routes, e), l = e.parseQuery || s1, s = e.stringifyQuery || s2, a = e.history, u = s7(), c = s7(), f = s7(), p = rk(sM), d = sM;
	se && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
	let h = sn.bind(null, (e) => "" + e), y = sn.bind(null, sO), m = sn.bind(null, sx);
	function g(e, t) {
		let r;
		if (t = sr({}, t || p.value), "string" == typeof e) {
			let r = sj(l, e, t.path), i = o.resolve({ path: r.path }, t), s = a.createHref(r.fullPath);
			return sr(r, i, {
				params: m(i.params),
				hash: sx(r.hash),
				redirectedFrom: void 0,
				href: s
			});
		}
		if (null != e.path) r = sr({}, e, { path: sj(l, e.path, t.path).path });
		else {
			let i = sr({}, e.params);
			for (let e in i) i[e] ?? delete i[e];
			r = sr({}, e, { params: y(i) }), t.params = y(t.params);
		}
		let i = o.resolve(r, t), u = e.hash || "";
		i.params = h(m(i.params));
		let c = function(e, t) {
			let r = t.query ? e(t.query) : "";
			return t.path + (r && "?") + r + (t.hash || "");
		}(s, sr({}, e, {
			hash: s_(u).replace(sy, "{").replace(sg, "}").replace(sh, "^"),
			path: i.path
		})), f = a.createHref(c);
		return sr({
			fullPath: c,
			hash: u,
			query: s === s2 ? function(e) {
				let t = {};
				for (let r in e) {
					let i = e[r];
					void 0 !== i && (t[r] = so(i) ? i.map((e) => null == e ? null : "" + e) : null == i ? i : "" + i);
				}
				return t;
			}(e.query) : e.query || {}
		}, i, {
			redirectedFrom: void 0,
			href: f
		});
	}
	function b(e) {
		return "string" == typeof e ? sj(l, e, p.value.path) : sr({}, e);
	}
	function _(e, t) {
		if (d !== e) return sV(8, {
			from: t,
			to: e
		});
	}
	function w(e) {
		let t = e.matched[e.matched.length - 1];
		if (t && t.redirect) {
			let { redirect: r } = t, i = "function" == typeof r ? r(e) : r;
			return "string" == typeof i && ((i = i.includes("?") || i.includes("#") ? i = b(i) : { path: i }).params = {}), sr({
				query: e.query,
				hash: e.hash,
				params: null != i.path ? {} : e.params
			}, i);
		}
	}
	function O(e, t) {
		let r, i = d = g(e), o = p.value, l = e.state, a = e.force, u = !0 === e.replace, c = w(i);
		return c ? O(sr(b(c), {
			state: "object" == typeof c ? sr({}, l, c.state) : l,
			force: a,
			replace: u
		}), t || i) : (i.redirectedFrom = t, !a && function(e, t, r) {
			let i = t.matched.length - 1, o = r.matched.length - 1;
			return i > -1 && i === o && sA(t.matched[i], r.matched[o]) && sk(t.params, r.params) && e(t.query) === e(r.query) && t.hash === r.hash;
		}(s, o, i) && (r = sV(16, {
			to: i,
			from: o
		}), $(o, o, !0, !1)), (r ? Promise.resolve(r) : j(i, o)).catch((e) => sU(e) ? sU(e, 2) ? e : C(e) : M(e, i, o)).then((e) => {
			if (e) {
				if (sU(e, 2)) return O(sr({ replace: u }, b(e.to), {
					state: "object" == typeof e.to ? sr({}, l, e.to.state) : l,
					force: a
				}), t || i);
			} else e = A(i, o, !0, u, l);
			return P(i, o, e), e;
		}));
	}
	function x(e, t) {
		let r = _(e, t);
		return r ? Promise.reject(r) : Promise.resolve();
	}
	function S(e) {
		let t = T.values().next().value;
		return t && "function" == typeof t.runWithContext ? t.runWithContext(e) : e();
	}
	function j(e, t) {
		let r, [i, o, l] = function(e, t) {
			let r = [], i = [], o = [], l = Math.max(t.matched.length, e.matched.length);
			for (let s = 0; s < l; s++) {
				let l = t.matched[s];
				l && (e.matched.find((e) => sA(e, l)) ? i.push(l) : r.push(l));
				let a = e.matched[s];
				a && !t.matched.find((e) => sA(e, a)) && o.push(a);
			}
			return [
				r,
				i,
				o
			];
		}(e, t);
		for (let o of (r = ae(i.reverse(), "beforeRouteLeave", e, t), i)) o.leaveGuards.forEach((i) => {
			r.push(s9(i, e, t));
		});
		let s = x.bind(null, e, t);
		return r.push(s), F(r).then(() => {
			for (let i of (r = [], u.list())) r.push(s9(i, e, t));
			return r.push(s), F(r);
		}).then(() => {
			for (let i of (r = ae(o, "beforeRouteUpdate", e, t), o)) i.updateGuards.forEach((i) => {
				r.push(s9(i, e, t));
			});
			return r.push(s), F(r);
		}).then(() => {
			for (let i of (r = [], l)) if (i.beforeEnter) if (so(i.beforeEnter)) for (let o of i.beforeEnter) r.push(s9(o, e, t));
			else r.push(s9(i.beforeEnter, e, t));
			return r.push(s), F(r);
		}).then(() => (e.matched.forEach((e) => e.enterCallbacks = {}), (r = ae(l, "beforeRouteEnter", e, t, S)).push(s), F(r))).then(() => {
			for (let i of (r = [], c.list())) r.push(s9(i, e, t));
			return r.push(s), F(r);
		}).catch((e) => sU(e, 8) ? e : Promise.reject(e));
	}
	function P(e, t, r) {
		f.list().forEach((i) => S(() => i(e, t, r)));
	}
	function A(e, t, r, i, o) {
		let l = _(e, t);
		if (l) return l;
		let s = t === sM, u = se ? history.state : {};
		r && (i || s ? a.replace(e.fullPath, sr({ scroll: s && u && u.scroll }, o)) : a.push(e.fullPath, o)), p.value = e, $(e, t, r, s), C();
	}
	let k = s7(), E = s7();
	function M(e, t, r) {
		C(e);
		let i = E.list();
		return i.length ? i.forEach((i) => i(e, t, r)) : console.error(e), Promise.reject(e);
	}
	function C(e) {
		return r || (r = !e, t || (t = a.listen((e, t, r) => {
			var i, o;
			if (!I.listening) return;
			let l = g(e), s = w(l);
			if (s) return void O(sr(s, {
				replace: !0,
				force: !0
			}), l).catch(si);
			d = l;
			let u = p.value;
			se && (i = sT(u.fullPath, r.delta), o = sR(), sI.set(i, o)), j(l, u).catch((e) => sU(e, 12) ? e : sU(e, 2) ? (O(sr(b(e.to), { force: !0 }), l).then((e) => {
				sU(e, 20) && !r.delta && r.type === V.pop && a.go(-1, !1);
			}).catch(si), Promise.reject()) : (r.delta && a.go(-r.delta, !1), M(e, l, u))).then((e) => {
				(e = e || A(l, u, !1)) && (r.delta && !sU(e, 8) ? a.go(-r.delta, !1) : r.type === V.pop && sU(e, 20) && a.go(-1, !1)), P(l, u, e);
			}).catch(si);
		})), k.list().forEach(([t, r]) => e ? r(e) : t()), k.reset()), e;
	}
	function $(t, r, i, o) {
		let { scrollBehavior: l } = e;
		if (!se || !l) return Promise.resolve();
		let s = !i && function(e) {
			let t = sI.get(e);
			return sI.delete(e), t;
		}(sT(t.fullPath, 0)) || (o || !i) && history.state && history.state.scroll || null;
		return rJ().then(() => l(t, r, s)).then((e) => e && function(e) {
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
		}(e)).catch((e) => M(e, t, r));
	}
	let R = (e) => a.go(e), T = /* @__PURE__ */ new Set(), I = {
		currentRoute: p,
		listening: !0,
		addRoute: function(e, t) {
			let r, i;
			return sD(e) ? (r = o.getRecordMatcher(e), i = t) : i = e, o.addRoute(i, r);
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
			return O(sr(b(e), { replace: !0 }));
		},
		go: R,
		back: () => R(-1),
		forward: () => R(1),
		beforeEach: u.add,
		beforeResolve: c.add,
		afterEach: f.add,
		onError: E.add,
		isReady: function() {
			return r && p.value !== sM ? Promise.resolve() : new Promise((e, t) => {
				k.add([e, t]);
			});
		},
		install(e) {
			e.component("RouterLink", ar), e.component("RouterView", ao), e.config.globalProperties.$router = this, Object.defineProperty(e.config.globalProperties, "$route", {
				enumerable: !0,
				get: () => rC(p)
			}), se && !i && p.value === sM && (i = !0, O(a.location).catch((e) => {}));
			let o = {};
			for (let e in sM) Object.defineProperty(o, e, {
				get: () => p.value[e],
				enumerable: !0
			});
			e.provide(s4, this), e.provide(s8, ry(o)), e.provide(s5, p);
			let l = e.unmount;
			T.add(e), e.unmount = function() {
				T.delete(e), T.size < 1 && (d = sM, t && t(), t = null, p.value = sM, i = !1, r = !1), l();
			};
		}
	};
	function F(e) {
		return e.reduce((e, t) => e.then(() => S(t)), Promise.resolve());
	}
	return I;
}
function aa() {
	return n5(s4);
}
function au(e) {
	return n5(s8);
}
let ac = ar, af = ao;
function ap(e) {
	return "function" == typeof e;
}
function ad(e) {
	var t = e(function(e) {
		Error.call(e), e.stack = Error().stack;
	});
	return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
}
var ah = ad(function(e) {
	return function(t) {
		e(this), this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map(function(e, t) {
			return t + 1 + ") " + e.toString();
		}).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t;
	};
});
function av(e, t) {
	if (e) {
		var r = e.indexOf(t);
		0 <= r && e.splice(r, 1);
	}
}
var ay = function() {
	var e;
	function t(e) {
		this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null;
	}
	return t.prototype.unsubscribe = function() {
		if (!this.closed) {
			this.closed = !0;
			var e, t, r, i, l, a = this._parentage;
			if (a) if (this._parentage = null, Array.isArray(a)) try {
				for (var u = p(a), c = u.next(); !c.done; c = u.next()) c.value.remove(this);
			} catch (t) {
				e = { error: t };
			} finally {
				try {
					c && !c.done && (t = u.return) && t.call(u);
				} finally {
					if (e) throw e.error;
				}
			}
			else a.remove(this);
			var f = this.initialTeardown;
			if (ap(f)) try {
				f();
			} catch (e) {
				l = e instanceof ah ? e.errors : [e];
			}
			var d = this._finalizers;
			if (d) {
				this._finalizers = null;
				try {
					for (var h = p(d), y = h.next(); !y.done; y = h.next()) {
						var m = y.value;
						try {
							ab(m);
						} catch (e) {
							l = null != l ? l : [], e instanceof ah ? l = s(s([], o(l)), o(e.errors)) : l.push(e);
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
			if (l) throw new ah(l);
		}
	}, t.prototype.add = function(e) {
		var r;
		if (e && e !== this) if (this.closed) ab(e);
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
		t === e ? this._parentage = null : Array.isArray(t) && av(t, e);
	}, t.prototype.remove = function(e) {
		var r = this._finalizers;
		r && av(r, e), e instanceof t && e._removeParent(this);
	}, (e = new t()).closed = !0, t.EMPTY = e, t;
}(), am = ay.EMPTY;
function ag(e) {
	return e instanceof ay || e && "closed" in e && ap(e.remove) && ap(e.add) && ap(e.unsubscribe);
}
function ab(e) {
	ap(e) ? e() : e.unsubscribe();
}
var a_ = void 0, aw = {
	setTimeout: function(e, t) {
		for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
		var l = aw.delegate;
		return (null == l ? void 0 : l.setTimeout) ? l.setTimeout.apply(l, s([e, t], o(r))) : setTimeout.apply(void 0, s([e, t], o(r)));
	},
	clearTimeout: function(e) {
		var t = aw.delegate;
		return ((null == t ? void 0 : t.clearTimeout) || clearTimeout)(e);
	},
	delegate: void 0
};
function aO(e) {
	aw.setTimeout(function() {
		throw e;
	});
}
function ax() {}
var aS = aj("C", void 0, void 0);
function aj(e, t, r) {
	return {
		kind: e,
		value: t,
		error: r
	};
}
function aA(e) {
	e();
}
var ak = function(e) {
	function t(t) {
		var r = e.call(this) || this;
		return r.isStopped = !1, t ? (r.destination = t, ag(t) && t.add(r)) : r.destination = aI, r;
	}
	return u(t, e), t.create = function(e, t, r) {
		return new a$(e, t, r);
	}, t.prototype.next = function(e) {
		this.isStopped ? aT(aj("N", e, void 0), this) : this._next(e);
	}, t.prototype.error = function(e) {
		this.isStopped ? aT(aj("E", void 0, e), this) : (this.isStopped = !0, this._error(e));
	}, t.prototype.complete = function() {
		this.isStopped ? aT(aS, this) : (this.isStopped = !0, this._complete());
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
}(ay);
Function.prototype.bind;
var aC = function() {
	function e(e) {
		this.partialObserver = e;
	}
	return e.prototype.next = function(e) {
		var t = this.partialObserver;
		if (t.next) try {
			t.next(e);
		} catch (e) {
			aR(e);
		}
	}, e.prototype.error = function(e) {
		var t = this.partialObserver;
		if (t.error) try {
			t.error(e);
		} catch (e) {
			aR(e);
		}
		else aR(e);
	}, e.prototype.complete = function() {
		var e = this.partialObserver;
		if (e.complete) try {
			e.complete();
		} catch (e) {
			aR(e);
		}
	}, e;
}(), a$ = function(e) {
	function t(t, r, i) {
		var o, s = e.call(this) || this;
		return ap(t) || !t ? o = {
			next: null != t ? t : void 0,
			error: null != r ? r : void 0,
			complete: null != i ? i : void 0
		} : o = t, s.destination = new aC(o), s;
	}
	return u(t, e), t;
}(ak);
function aR(e) {
	aO(e);
}
function aT(e, t) {}
var aI = {
	closed: !0,
	next: ax,
	error: function(e) {
		throw e;
	},
	complete: ax
}, aF = "function" == typeof Symbol && Symbol.observable || "@@observable";
function aL(e) {
	return e;
}
function aN(e) {
	return 0 === e.length ? aL : 1 === e.length ? e[0] : function(t) {
		return e.reduce(function(e, t) {
			return t(e);
		}, t);
	};
}
var aD = function() {
	function e(e) {
		e && (this._subscribe = e);
	}
	return e.prototype.lift = function(t) {
		var r = new e();
		return r.source = this, r.operator = t, r;
	}, e.prototype.subscribe = function(e, t, r) {
		var i = this, o = !function(e) {
			return e && e instanceof ak || e && ap(e.next) && ap(e.error) && ap(e.complete) && ag(e);
		}(e) ? new a$(e, t, r) : e;
		return aA(function() {
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
		return new (t = (aB(t)))(function(t, i) {
			var o = new a$({
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
	}, e.prototype[aF] = function() {
		return this;
	}, e.prototype.pipe = function() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		return aN(e)(this);
	}, e.prototype.toPromise = function(e) {
		var t = this;
		return new (e = (aB(e)))(function(e, r) {
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
function aB(e) {
	var t;
	return null != (t = null != e ? e : a_) ? t : Promise;
}
function aV(e) {
	return function(t) {
		if (ap(null == t ? void 0 : t.lift)) return t.lift(function(t) {
			try {
				return e(t, this);
			} catch (e) {
				this.error(e);
			}
		});
		throw TypeError("Unable to lift unknown Observable type");
	};
}
function aU(e, t, r, i, o) {
	return new az(e, t, r, i, o);
}
var az = function(e) {
	function t(t, r, i, o, l, s) {
		var a = e.call(this, t) || this;
		return a.onFinalize = l, a.shouldUnsubscribe = s, a._next = r ? function(e) {
			try {
				r(e);
			} catch (e) {
				t.error(e);
			}
		} : e.prototype._next, a._error = o ? function(e) {
			try {
				o(e);
			} catch (e) {
				t.error(e);
			} finally {
				this.unsubscribe();
			}
		} : e.prototype._error, a._complete = i ? function() {
			try {
				i();
			} catch (e) {
				t.error(e);
			} finally {
				this.unsubscribe();
			}
		} : e.prototype._complete, a;
	}
	return u(t, e), t.prototype.unsubscribe = function() {
		var t;
		if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
			var r = this.closed;
			e.prototype.unsubscribe.call(this), r || null == (t = this.onFinalize) || t.call(this);
		}
	}, t;
}(ak), aW = ad(function(e) {
	return function() {
		e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
	};
}), aq = function(e) {
	function t() {
		var t = e.call(this) || this;
		return t.closed = !1, t.currentObservers = null, t.observers = [], t.isStopped = !1, t.hasError = !1, t.thrownError = null, t;
	}
	return u(t, e), t.prototype.lift = function(e) {
		var t = new aK(this, this);
		return t.operator = e, t;
	}, t.prototype._throwIfClosed = function() {
		if (this.closed) throw new aW();
	}, t.prototype.next = function(e) {
		var t = this;
		aA(function() {
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
		aA(function() {
			if (t._throwIfClosed(), !t.isStopped) {
				t.hasError = t.isStopped = !0, t.thrownError = e;
				for (var r = t.observers; r.length;) r.shift().error(e);
			}
		});
	}, t.prototype.complete = function() {
		var e = this;
		aA(function() {
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
		return r || i ? am : (this.currentObservers = null, o.push(e), new ay(function() {
			t.currentObservers = null, av(o, e);
		}));
	}, t.prototype._checkFinalizedStatuses = function(e) {
		var t = this.hasError, r = this.thrownError, i = this.isStopped;
		t ? e.error(r) : i && e.complete();
	}, t.prototype.asObservable = function() {
		var e = new aD();
		return e.source = this, e;
	}, t.create = function(e, t) {
		return new aK(e, t);
	}, t;
}(aD), aK = function(e) {
	function t(t, r) {
		var i = e.call(this) || this;
		return i.destination = t, i.source = r, i;
	}
	return u(t, e), t.prototype.next = function(e) {
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
		return null != (r = null == (t = this.source) ? void 0 : t.subscribe(e)) ? r : am;
	}, t;
}(aq), aG = function(e) {
	function t(t) {
		var r = e.call(this) || this;
		return r._value = t, r;
	}
	return u(t, e), Object.defineProperty(t.prototype, "value", {
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
}(aq), aH = {
	now: function() {
		return (aH.delegate || Date).now();
	},
	delegate: void 0
}, aY = function(e) {
	function t(t, r) {
		return e.call(this) || this;
	}
	return u(t, e), t.prototype.schedule = function(e, t) {
		return void 0 === t && (t = 0), this;
	}, t;
}(ay), aJ = {
	setInterval: function(e, t) {
		for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
		var l = aJ.delegate;
		return (null == l ? void 0 : l.setInterval) ? l.setInterval.apply(l, s([e, t], o(r))) : setInterval.apply(void 0, s([e, t], o(r)));
	},
	clearInterval: function(e) {
		var t = aJ.delegate;
		return ((null == t ? void 0 : t.clearInterval) || clearInterval)(e);
	},
	delegate: void 0
}, aX = function(e) {
	function t(t, r) {
		var i = e.call(this, t, r) || this;
		return i.scheduler = t, i.work = r, i.pending = !1, i;
	}
	return u(t, e), t.prototype.schedule = function(e, t) {
		if (void 0 === t && (t = 0), this.closed) return this;
		this.state = e;
		var r, i = this.id, o = this.scheduler;
		return null != i && (this.id = this.recycleAsyncId(o, i, t)), this.pending = !0, this.delay = t, this.id = null != (r = this.id) ? r : this.requestAsyncId(o, this.id, t), this;
	}, t.prototype.requestAsyncId = function(e, t, r) {
		return void 0 === r && (r = 0), aJ.setInterval(e.flush.bind(e, this), r);
	}, t.prototype.recycleAsyncId = function(e, t, r) {
		if (void 0 === r && (r = 0), null != r && this.delay === r && !1 === this.pending) return t;
		null != t && aJ.clearInterval(t);
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
			this.work = this.state = this.scheduler = null, this.pending = !1, av(i, this), null != t && (this.id = this.recycleAsyncId(r, t, null)), this.delay = null, e.prototype.unsubscribe.call(this);
		}
	}, t;
}(aY), aZ = function() {
	function e(t, r) {
		void 0 === r && (r = e.now), this.schedulerActionCtor = t, this.now = r;
	}
	return e.prototype.schedule = function(e, t, r) {
		return void 0 === t && (t = 0), new this.schedulerActionCtor(this, e).schedule(r, t);
	}, e.now = aH.now, e;
}(), aQ = new (function(e) {
	function t(t, r) {
		void 0 === r && (r = aZ.now);
		var i = e.call(this, t, r) || this;
		return i.actions = [], i._active = !1, i;
	}
	return u(t, e), t.prototype.flush = function(e) {
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
}(aZ))(aX), a0 = new aD(function(e) {
	return e.complete();
});
function a1(e) {
	return e && ap(e.schedule);
}
function a2(e) {
	return e[e.length - 1];
}
function a6(e) {
	return a1(a2(e)) ? e.pop() : void 0;
}
var a3 = function(e) {
	return e && "number" == typeof e.length && "function" != typeof e;
};
function a4(e) {
	return ap(null == e ? void 0 : e.then);
}
function a8(e) {
	return Symbol.asyncIterator && ap(null == e ? void 0 : e[Symbol.asyncIterator]);
}
function a5(e) {
	return TypeError("You provided " + (null !== e && "object" == typeof e ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
var a7 = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";
function a9(e) {
	return ap(null == e ? void 0 : e[a7]);
}
function ue(e) {
	return a(this, arguments, function() {
		var t, r, i;
		return f(this, function(o) {
			switch (o.label) {
				case 0: t = e.getReader(), o.label = 1;
				case 1: o.trys.push([
					1,
					,
					9,
					10
				]), o.label = 2;
				case 2: return [4, l(t.read())];
				case 3:
					if (i = (r = o.sent()).value, !r.done) return [3, 5];
					return [4, l(void 0)];
				case 4: return [2, o.sent()];
				case 5: return [4, l(i)];
				case 6: return [4, o.sent()];
				case 7: return o.sent(), [3, 2];
				case 8: return [3, 10];
				case 9: return t.releaseLock(), [7];
				case 10: return [2];
			}
		});
	});
}
function ut(e) {
	return ap(null == e ? void 0 : e.getReader);
}
function ur(e) {
	if (e instanceof aD) return e;
	if (null != e) {
		var t, r, i, o;
		if (ap(e[aF])) return t = e, new aD(function(e) {
			var r = t[aF]();
			if (ap(r.subscribe)) return r.subscribe(e);
			throw TypeError("Provided object does not correctly implement Symbol.observable");
		});
		if (a3(e)) return r = e, new aD(function(e) {
			for (var t = 0; t < r.length && !e.closed; t++) e.next(r[t]);
			e.complete();
		});
		if (a4(e)) return i = e, new aD(function(e) {
			i.then(function(t) {
				e.closed || (e.next(t), e.complete());
			}, function(t) {
				return e.error(t);
			}).then(null, aO);
		});
		if (a8(e)) return un(e);
		if (a9(e)) return o = e, new aD(function(e) {
			var t, r;
			try {
				for (var i = p(o), l = i.next(); !l.done; l = i.next()) {
					var s = l.value;
					if (e.next(s), e.closed) return;
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
		if (ut(e)) return un(ue(e));
	}
	throw a5(e);
}
function un(e) {
	return new aD(function(t) {
		(function(e, t) {
			var r, o, l, s;
			return i(this, void 0, void 0, function() {
				var i;
				return f(this, function(a) {
					switch (a.label) {
						case 0: a.trys.push([
							0,
							5,
							6,
							11
						]), r = c(e), a.label = 1;
						case 1: return [4, r.next()];
						case 2:
							if ((o = a.sent()).done) return [3, 4];
							if (i = o.value, t.next(i), t.closed) return [2];
							a.label = 3;
						case 3: return [3, 1];
						case 4: return [3, 11];
						case 5: return l = { error: a.sent() }, [3, 11];
						case 6:
							if (a.trys.push([
								6,
								,
								9,
								10
							]), !(o && !o.done && (s = r.return))) return [3, 8];
							return [4, s.call(r)];
						case 7: a.sent(), a.label = 8;
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
function ui(e, t, r, i, o) {
	void 0 === i && (i = 0), void 0 === o && (o = !1);
	var l = t.schedule(function() {
		r(), o ? e.add(this.schedule(null, i)) : this.unsubscribe();
	}, i);
	if (e.add(l), !o) return l;
}
function uo(e, t) {
	return void 0 === t && (t = 0), aV(function(r, i) {
		r.subscribe(aU(i, function(r) {
			return ui(i, e, function() {
				return i.next(r);
			}, t);
		}, function() {
			return ui(i, e, function() {
				return i.complete();
			}, t);
		}, function(r) {
			return ui(i, e, function() {
				return i.error(r);
			}, t);
		}));
	});
}
function ul(e, t) {
	return void 0 === t && (t = 0), aV(function(r, i) {
		i.add(e.schedule(function() {
			return r.subscribe(i);
		}, t));
	});
}
function us(e, t) {
	if (!e) throw Error("Iterable cannot be null");
	return new aD(function(r) {
		ui(r, t, function() {
			var i = e[Symbol.asyncIterator]();
			ui(r, t, function() {
				i.next().then(function(e) {
					e.done ? r.complete() : r.next(e.value);
				});
			}, 0, !0);
		});
	});
}
function ua(e, t) {
	return t ? function(e, t) {
		if (null != e) {
			if (ap(e[aF])) return ur(e).pipe(ul(t), uo(t));
			if (a3(e)) return new aD(function(r) {
				var i = 0;
				return t.schedule(function() {
					i === e.length ? r.complete() : (r.next(e[i++]), r.closed || this.schedule());
				});
			});
			if (a4(e)) return ur(e).pipe(ul(t), uo(t));
			if (a8(e)) return us(e, t);
			if (a9(e)) return new aD(function(r) {
				var i;
				return ui(r, t, function() {
					i = e[a7](), ui(r, t, function() {
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
					return ap(null == i ? void 0 : i.return) && i.return();
				};
			});
			if (ut(e)) return us(ue(e), t);
		}
		throw a5(e);
	}(e, t) : ur(e);
}
function uu() {
	for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
	return ua(e, a6(e));
}
function uc(e, t) {
	return aV(function(r, i) {
		var o = 0;
		r.subscribe(aU(i, function(r) {
			i.next(e.call(t, r, o++));
		}));
	});
}
var uf = Array.isArray;
function up(e) {
	return uc(function(t) {
		return uf(t) ? e.apply(void 0, s([], o(t))) : e(t);
	});
}
var ud = Array.isArray, uh = Object.getPrototypeOf, uv = Object.prototype, uy = Object.keys;
function um() {
	for (var e, t, r, i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
	var l = a6(i), s = ap(a2(i)) ? i.pop() : void 0, a = function(e) {
		if (1 === e.length) {
			var t, r = e[0];
			if (ud(r)) return {
				args: r,
				keys: null
			};
			if ((t = r) && "object" == typeof t && uh(t) === uv) {
				var i = uy(r);
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
	}(i), u = a.args, c = a.keys;
	if (0 === u.length) return ua([], l);
	var f = new aD((e = u, t = l, void 0 === (r = c ? function(e) {
		return c.reduce(function(t, r, i) {
			return t[r] = e[i], t;
		}, {});
	} : aL) && (r = aL), function(i) {
		(function(e, t, r) {
			e ? ui(r, e, t) : t();
		})(t, function() {
			for (var o = e.length, l = Array(o), s = o, a = o, u = function(o) {
				(function(e, t, r) {
					e ? ui(r, e, t) : t();
				})(t, function() {
					var u = ua(e[o], t), c = !1;
					u.subscribe(aU(i, function(e) {
						l[o] = e, !c && (c = !0, a--), a || i.next(r(l.slice()));
					}, function() {
						--s || i.complete();
					}));
				}, i);
			}, c = 0; c < o; c++) u(c);
		}, i);
	}));
	return s ? f.pipe(up(s)) : f;
}
function ug(e, t, r) {
	return (void 0 === r && (r = Infinity), ap(t)) ? ug(function(r, i) {
		return uc(function(e, o) {
			return t(r, e, i, o);
		})(ur(e(r, i)));
	}, r) : ("number" == typeof t && (r = t), aV(function(t, i) {
		var o, l, s, a, u, c, f, p, d;
		return o = r, s = [], a = 0, u = 0, c = !1, f = function() {
			!c || s.length || a || i.complete();
		}, p = function(e) {
			return a < o ? d(e) : s.push(e);
		}, d = function(t) {
			a++;
			var r = !1;
			ur(e(t, u++)).subscribe(aU(i, function(e) {
				l ? p(e) : i.next(e);
			}, function() {
				r = !0;
			}, void 0, function() {
				if (r) try {
					for (a--; s.length && a < o;) (function() {
						var e = s.shift();
						d(e);
					})();
					f();
				} catch (e) {
					i.error(e);
				}
			}));
		}, t.subscribe(aU(i, p, function() {
			c = !0, f();
		})), function() {};
	}));
}
function ub(e) {
	return void 0 === e && (e = Infinity), ug(aL, e);
}
var u_ = ["addListener", "removeListener"], uw = ["addEventListener", "removeEventListener"], uO = ["on", "off"];
function ux(e, t, r, i) {
	if (ap(r) && (i = r, r = void 0), i) return ux(e, t, r).pipe(up(i));
	var l, s, a, u = o(ap((l = e).addEventListener) && ap(l.removeEventListener) ? uw.map(function(i) {
		return function(o) {
			return e[i](t, o, r);
		};
	}) : ap((s = e).addListener) && ap(s.removeListener) ? u_.map(uS(e, t)) : ap((a = e).on) && ap(a.off) ? uO.map(uS(e, t)) : [], 2), c = u[0], f = u[1];
	if (!c && a3(e)) return ug(function(e) {
		return ux(e, t, r);
	})(ur(e));
	if (!c) throw TypeError("Invalid event target");
	return new aD(function(e) {
		var t = function() {
			for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
			return e.next(1 < t.length ? t : t[0]);
		};
		return c(t), function() {
			return f(t);
		};
	});
}
function uS(e, t) {
	return function(r) {
		return function(i) {
			return e[r](t, i);
		};
	};
}
function uj(e, t, r) {
	void 0 === e && (e = 0), void 0 === r && (r = aQ);
	var i = -1;
	return null != t && (a1(t) ? r = t : i = t), new aD(function(t) {
		var o, l = (o = e) instanceof Date && !isNaN(o) ? e - r.now() : e;
		l < 0 && (l = 0);
		var s = 0;
		return r.schedule(function() {
			t.closed || (t.next(s++), 0 <= i ? this.schedule(void 0, i) : t.complete());
		}, l);
	});
}
function uP() {
	for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
	var i = a6(t), o = (e = Infinity, "number" == typeof a2(t) ? t.pop() : e);
	return t.length ? 1 === t.length ? ur(t[0]) : ub(o)(ua(t, i)) : a0;
}
function uA(e, t) {
	return aV(function(r, i) {
		var o = 0;
		r.subscribe(aU(i, function(r) {
			return e.call(t, r, o++) && i.next(r);
		}));
	});
}
function uk(e) {
	return aV(function(t, r) {
		var i, o = null, l = !1;
		o = t.subscribe(aU(r, void 0, void 0, function(s) {
			i = ur(e(s, uk(e)(t))), o ? (o.unsubscribe(), o = null, i.subscribe(r)) : l = !0;
		})), l && (o.unsubscribe(), o = null, i.subscribe(r));
	});
}
function uE(e, t) {
	return void 0 === t && (t = aQ), aV(function(r, i) {
		var o = null, l = null, s = null, a = function() {
			if (o) {
				o.unsubscribe(), o = null;
				var e = l;
				l = null, i.next(e);
			}
		};
		function u() {
			var r = s + e, l = t.now();
			if (l < r) {
				o = this.schedule(void 0, r - l), i.add(o);
				return;
			}
			a();
		}
		r.subscribe(aU(i, function(r) {
			l = r, s = t.now(), o || (o = t.schedule(u, e), i.add(o));
		}, function() {
			a(), i.complete();
		}, void 0, function() {
			l = o = null;
		}));
	});
}
function uM(e) {
	return e <= 0 ? function() {
		return a0;
	} : aV(function(t, r) {
		var i = 0;
		t.subscribe(aU(r, function(t) {
			++i <= e && (r.next(t), e <= i && r.complete());
		}));
	});
}
function uC() {
	return aV(function(e, t) {
		e.subscribe(aU(t, ax));
	});
}
function u$(e, t) {
	void 0 === t && (t = aQ);
	var r = uj(e, t);
	return function e(t, r) {
		return r ? function(i) {
			return function() {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				return ub(1)(ua(e, a6(e)));
			}(r.pipe(uM(1), uC()), i.pipe(e(t)));
		} : ug(function(e, r) {
			return ur(t(e, r)).pipe(uM(1), uc(function() {
				return e;
			}));
		});
	}(function() {
		return r;
	});
}
function uR(e, t) {
	return void 0 === t && (t = aL), e = null != e ? e : uT, aV(function(r, i) {
		var o, l = !0;
		r.subscribe(aU(i, function(r) {
			var s = t(r);
			(l || !e(o, s)) && (l = !1, o = s, i.next(r));
		}));
	});
}
function uT(e, t) {
	return e === t;
}
function uI(e) {
	return uA(function(t, r) {
		return e <= r;
	});
}
function uF(e, t) {
	return aV(function(r, i) {
		var o = null, l = 0, s = !1, a = function() {
			return s && !o && i.complete();
		};
		r.subscribe(aU(i, function(r) {
			o?.unsubscribe();
			var s = 0, u = l++;
			ur(e(r, u)).subscribe(o = aU(i, function(e) {
				return i.next(t ? t(r, e, u, s++) : e);
			}, function() {
				o = null, a();
			}));
		}, function() {
			s = !0, a();
		}));
	});
}
function uL(e, t, r) {
	var i = ap(e) || t || r ? {
		next: e,
		error: t,
		complete: r
	} : e;
	return i ? aV(function(e, t) {
		null == (r = i.subscribe) || r.call(i);
		var r, o = !0;
		e.subscribe(aU(t, function(e) {
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
	}) : aL;
}
function uN(e, ...t) {
	return (function() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		return aN(e);
	})(...t)(ua(e));
}
var uD = class e extends aD {
	static seed(t) {
		return new e(t);
	}
	_value;
	_subject$ = new aq();
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
		let r = eF(e) ? oN(this._value ?? t, e) : e;
		Object.is(r, this._value) || this._subject$.next(this._value = r);
	}
};
let uB = Symbol("forwardRef");
function uV(e) {
	let t = e;
	return new rT((e, r) => ({
		get: () => (e(), t),
		set(e) {
			let i = e?.[uB] ?? e;
			i !== t && (t = i, r());
		}
	}));
}
function uU(e) {
	return (t) => {
		let r = t.subscribe(e);
		nI(() => r.unsubscribe());
	};
}
function uz(e) {
	return (t) => {
		let r;
		n$(() => {
			r = t.subscribe(e);
		}), nI(() => r?.unsubscribe());
	};
}
let uW = (e) => {
	let t = new uD(e), r = new rT((e, r) => ({
		get: () => (e(), t.value),
		set(e) {
			let i = e?.[uB] ?? e;
			Object.is(i, t.value) || (t.next(i), r());
		}
	}));
	return new Proxy(t, {
		get: (e, i) => "next" === i ? (e) => {
			r.value = eF(e) ? oN(t.value, e) : e;
		} : "value" === i ? r.value : t[i] ?? r[i],
		set: (e, t, i) => ("value" === t ? r.value = i : e[t] = i, !0)
	});
};
var uq = (e) => "function" == typeof e ? e : Array.isArray(e) ? () => e : void 0 === e ? e : () => e, uK = (e, t, r) => uG(e, t, r), uG = (e, t, r) => {
	let i, [o, l] = ((e, t) => {
		let { children: r,...i } = e;
		if (r && !Array.isArray(r) && !iD(r) && "object" == typeof r) return [t ? {
			...i,
			key: t
		} : i, r];
		let o = {}, l = {}, s = !1;
		for (let e in i) {
			let t = i[e];
			if (e.startsWith("$")) {
				l[e.slice(1)] = uq(t), s = !0;
				continue;
			}
			o[e] = t;
		}
		let a = uq(r);
		return a && (l.default = a, s = !0), [t ? {
			...o,
			key: t
		} : o, s ? l : void 0];
	})(t, r);
	return (i = e) === i$ || "string" == typeof i || "object" == typeof i && i.__isTeleport ? i7(e, o, l?.default?.() ?? (e === i$ ? [] : void 0)) : i7(e, o, l);
};
function uH(e) {
	return (t) => uG(uY, {
		renderFn$: t.pipe(uc((t) => () => e(t))),
		children: {}
	});
}
var uY = l7({ renderFn$: lU() }, (e, t) => {
	let r = null;
	uN(e.renderFn$, uL((e) => {
		r = e;
	}), uU());
	let i = uW(1);
	return uN(e.renderFn$, uL(() => {
		i.value += 1;
	}), uz()), () => i.value ? r?.() : null;
}, { name: "RxSlot" }, { displayName: "RxSlot" });
let uJ = (e, t) => {
	let r = new aG(e[t]);
	return i_(() => e[t], (e) => r.next(e)), r;
};
function uX(...e) {
	let t, r = {}, i = {};
	for (let o of e) {
		if (eF(o)) {
			t = o;
			continue;
		}
		eL(t) ? r = o : i = o;
	}
	return l7(r, (e, r) => {
		let i = ((e) => {
			let t = {};
			for (let i in e) {
				var r;
				if (eF(e[i]) || (r = e[i]) && (r instanceof aD || ap(r.lift) && ap(r.subscribe))) {
					t[i] = e[i];
					continue;
				}
				t[`${i}$`] = uJ(e, i);
			}
			return t;
		})(e), o = new Proxy({}, { get: (t, r) => e[r] ?? i[r] }), l = new Proxy({}, { get: (e, t) => "render" === t ? uH : r[t] }), s = t(o, l);
		return eF(s) ? s : () => s;
	}, i);
}
let uZ = (e) => {
	let t, r = null;
	return uL({
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
function uQ(...e) {
	let t, r, i = {}, o = {};
	for (let r of e) {
		if (eF(r)) {
			t = r;
			continue;
		}
		eL(t) ? i = r : o = r;
	}
	let l = Symbol(o?.name ?? "");
	if (eD(i) && eD(o.props)) {
		let e, r = () => e ??= t({});
		return l9(l7({
			value: lU().optional(),
			$default: lU().optional()
		}, (e, { slots: t }) => (n8(l, e.value ?? r()), () => t.default?.()), {
			...o,
			name: `Provide(${o?.name ?? ""})`
		}, { displayName: "Provider" }), { use: () => n5(l, r, !0) });
	}
	let s = lR(i);
	return l9(l7({
		...i,
		$default: lU().optional()
	}, (e, { slots: i }) => (n8(l, r = t(e)), () => i.default?.()), {
		...o,
		name: `Provide(${o?.name ?? ""})`
	}, { displayName: "Provider" }), { use: () => n5(l, () => r ??= t(s.create({})), !0) });
}
export { lR as $, ep as $t, uu as A, e9 as At, au as B, eL as Bt, uA as C, tc as Ct, ug as D, e3 as Dt, ux as E, tS as Et, aD as F, ty as Ft, lH as G, eC as Gt, l7 as H, eI as Ht, ac as I, eK as It, lh as J, ex as Jt, lG as K, eM as Kt, af as L, eq as Lt, a0 as M, tx as Mt, aG as N, e5 as Nt, um as O, e8 as Ot, aq as P, e7 as Pt, lM as Q, ed as Qt, as as R, eW as Rt, uk as S, ts as St, uj as T, tu as Tt, l8 as U, eT as Ut, aa as V, eF as Vt, l5 as W, eR as Wt, lk as X, eb as Xt, lF as Y, ew as Yt, lU as Z, eg as Zt, uI as _, nF as _t, uH as a, oJ as at, uC as b, rk as bt, uW as c, i$ as ct, uB as d, iW as dt, ec as en, lT as et, uV as f, ih as ft, uF as g, n$ as gt, uL as h, nI as ht, uJ as i, oU as it, ua as j, eZ as jt, uc as k, eQ as kt, uz as l, ni as lt, uN as m, nC as mt, uZ as n, x as nn, o1 as nt, uG as o, nd as ot, uD as p, i7 as pt, lK as q, eA as qt, uX as r, w as rn, oX as rt, uK as s, nc as st, uQ as t, el as tn, lm as tt, uU as u, rV as ut, uR as v, i_ as vt, uP as w, e0 as wt, uE as x, rC as xt, u$ as y, rA as yt, sN as z, eD as zt };
