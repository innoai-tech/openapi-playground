import { n as e, t } from "./rolldown-runtime.BUi7Tn5u.chunk.js";
import { a as r, c as i, i as o, l, n as a, o as s, r as u, s as c, u as f } from "./vendor-rxjs.Bnzpw5oq.chunk.js";
function p(e) {
	var t;
	return null != e && "function" != typeof e && Number.isSafeInteger(t = e.length) && t >= 0;
}
function d(e) {
	return e;
}
function h(e) {
	return "__proto__" === e;
}
function y(e) {
	switch (typeof e) {
		case "number":
		case "symbol": return !1;
		case "string": return e.includes(".") || e.includes("[") || e.includes("]");
	}
}
function m(e) {
	return "string" == typeof e || "symbol" == typeof e ? e : Object.is(e?.valueOf?.(), -0) ? "-0" : String(e);
}
function g(e) {
	if (null == e) return "";
	if ("string" == typeof e) return e;
	if (Array.isArray(e)) return e.map(g).join(",");
	let t = String(e);
	return "0" === t && Object.is(Number(e), -0) ? "-0" : t;
}
function b(e) {
	if (Array.isArray(e)) return e.map(m);
	if ("symbol" == typeof e) return [e];
	e = g(e);
	let t = [], r = e.length;
	if (0 === r) return t;
	let i = 0, o = "", l = "", a = !1;
	for (46 === e.charCodeAt(0) && (t.push(""), i++); i < r;) {
		let s = e[i];
		l ? "\\" === s && i + 1 < r ? o += e[++i] : s === l ? l = "" : o += s : a ? "\"" === s || "'" === s ? l = s : "]" === s ? (a = !1, t.push(o), o = "") : o += s : "[" === s ? (a = !0, o && (t.push(o), o = "")) : "." === s ? o && (t.push(o), o = "") : o += s, i++;
	}
	return o && t.push(o), t;
}
function _(e, t, r) {
	if (null == e) return r;
	switch (typeof t) {
		case "string": {
			if (h(t)) return r;
			let i = e[t];
			if (void 0 === i) if (y(t)) return _(e, b(t), r);
			else return r;
			return i;
		}
		case "number":
		case "symbol": {
			"number" == typeof t && (t = m(t));
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
					if (null == a || h(o[e])) return l;
					a = a[o[e]];
				}
				return void 0 === a ? l : a;
			}
			if (h(t = Object.is(t?.valueOf(), -0) ? "-0" : String(t))) return r;
			let a = e[t];
			if (void 0 === a) return r;
			return a;
		}
	}
}
function w(e) {
	return function(t) {
		return _(t, e);
	};
}
function O(e) {
	return null !== e && ("object" == typeof e || "function" == typeof e);
}
function x(e) {
	return null == e || "object" != typeof e && "function" != typeof e;
}
function S(e, t) {
	return e === t || Number.isNaN(e) && Number.isNaN(t);
}
function A(e, t, r, i) {
	if (t === e) return !0;
	switch (typeof t) {
		case "object": return function(e, t, r, i) {
			if (null == t) return !0;
			if (Array.isArray(t)) return j(e, t, r, i);
			if (t instanceof Map) {
				var o, l, a, s, u = e, c = t, f = r, p = i;
				if (0 === c.size) return !0;
				if (!(u instanceof Map)) return !1;
				for (let [e, t] of c.entries()) if (!1 === f(u.get(e), t, e, u, c, p)) return !1;
				return !0;
			}
			if (t instanceof Set) return o = e, l = t, a = r, s = i, 0 === l.size || o instanceof Set && j([...o], [...l], a, s);
			let d = Object.keys(t);
			if (null == e) return 0 === d.length;
			if (0 === d.length) return !0;
			if (i?.has(t)) return i.get(t) === e;
			i?.set(t, e);
			try {
				for (let o = 0; o < d.length; o++) {
					let l = d[o];
					if (!x(e) && !(l in e) || void 0 === t[l] && void 0 !== e[l] || null === t[l] && null !== e[l] || !r(e[l], t[l], l, e, t, i)) return !1;
				}
				return !0;
			} finally {
				i?.delete(t);
			}
		}(e, t, r, i);
		case "function":
			if (Object.keys(t).length > 0) return A(e, { ...t }, r, i);
			return S(e, t);
		default:
			if (!O(e)) return S(e, t);
			if ("string" == typeof t) return "" === t;
			return !0;
	}
}
function j(e, t, r, i) {
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
function E(e, t) {
	return function e(t, r, i) {
		return "function" != typeof i ? e(t, r, () => void 0) : A(t, r, function e(t, r, o, l, a, s) {
			let u = i(t, r, o, l, a, s);
			return void 0 !== u ? !!u : A(t, r, e, s);
		}, /* @__PURE__ */ new Map());
	}(e, t, () => void 0);
}
function P(e) {
	return Object.getOwnPropertySymbols(e).filter((t) => Object.prototype.propertyIsEnumerable.call(e, t));
}
function k(e) {
	return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
var R, I, C, M, T, N, $, D, L, F, V, B, U, z, G, W, q, K = "[object String]", H = "[object Number]", Y = "[object Boolean]", J = "[object Arguments]";
function X(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Z(e, t, r, i = /* @__PURE__ */ new Map(), o) {
	let l = o?.(e, t, r, i);
	if (void 0 !== l) return l;
	if (x(e)) return e;
	if (i.has(e)) return i.get(e);
	if (Array.isArray(e)) {
		let t = Array(e.length);
		i.set(e, t);
		for (let l = 0; l < e.length; l++) t[l] = Z(e[l], l, r, i, o);
		return Object.hasOwn(e, "index") && (t.index = e.index), Object.hasOwn(e, "input") && (t.input = e.input), t;
	}
	if (e instanceof Date) return new Date(e.getTime());
	if (e instanceof RegExp) {
		let t = new RegExp(e.source, e.flags);
		return t.lastIndex = e.lastIndex, t;
	}
	if (e instanceof Map) {
		let t = /* @__PURE__ */ new Map();
		for (let [l, a] of (i.set(e, t), e)) t.set(l, Z(a, l, r, i, o));
		return t;
	}
	if (e instanceof Set) {
		let t = /* @__PURE__ */ new Set();
		for (let l of (i.set(e, t), e)) t.add(Z(l, void 0, r, i, o));
		return t;
	}
	if ("undefined" != typeof Buffer && Buffer.isBuffer(e)) return e.subarray();
	if (X(e)) {
		let t = new (Object.getPrototypeOf(e)).constructor(e.length);
		i.set(e, t);
		for (let l = 0; l < e.length; l++) t[l] = Z(e[l], l, r, i, o);
		return t;
	}
	if (e instanceof ArrayBuffer || "undefined" != typeof SharedArrayBuffer && e instanceof SharedArrayBuffer) return e.slice(0);
	if (e instanceof DataView) {
		let t = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
		return i.set(e, t), Q(t, e, r, i, o), t;
	}
	if ("undefined" != typeof File && e instanceof File) {
		let t = new File([e], e.name, { type: e.type });
		return i.set(e, t), Q(t, e, r, i, o), t;
	}
	if ("undefined" != typeof Blob && e instanceof Blob) {
		let t = new Blob([e], { type: e.type });
		return i.set(e, t), Q(t, e, r, i, o), t;
	}
	if (e instanceof Error) {
		let t = new e.constructor();
		return i.set(e, t), t.message = e.message, t.name = e.name, t.stack = e.stack, t.cause = e.cause, Q(t, e, r, i, o), t;
	}
	if (e instanceof Boolean) {
		let t = new Boolean(e.valueOf());
		return i.set(e, t), Q(t, e, r, i, o), t;
	}
	if (e instanceof Number) {
		let t = new Number(e.valueOf());
		return i.set(e, t), Q(t, e, r, i, o), t;
	}
	if (e instanceof String) {
		let t = new String(e.valueOf());
		return i.set(e, t), Q(t, e, r, i, o), t;
	}
	if ("object" == typeof e && function(e) {
		switch (k(e)) {
			case J:
			case "[object Array]":
			case "[object ArrayBuffer]":
			case "[object DataView]":
			case Y:
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
			case K:
			case "[object Symbol]":
			case "[object Uint8Array]":
			case "[object Uint8ClampedArray]":
			case "[object Uint16Array]":
			case "[object Uint32Array]": return !0;
			default: return !1;
		}
	}(e)) {
		let t = Object.create(Object.getPrototypeOf(e));
		return i.set(e, t), Q(t, e, r, i, o), t;
	}
	return e;
}
function Q(e, t, r = e, i, o) {
	let l = [...Object.keys(t), ...P(t)];
	for (let a = 0; a < l.length; a++) {
		let s = l[a], u = Object.getOwnPropertyDescriptor(e, s);
		(null == u || u.writable) && (e[s] = Z(t[s], s, r, i, o));
	}
}
function ee(e) {
	var t;
	return e = Z(t = e, void 0, t, /* @__PURE__ */ new Map(), void 0), (t) => E(t, e);
}
function et(e, t) {
	var r;
	return r = (r, i, o, l) => {
		let a = t?.(r, i, o, l);
		if (void 0 !== a) return a;
		if ("object" == typeof e) switch (Object.prototype.toString.call(e)) {
			case H:
			case K:
			case Y: {
				let t = new e.constructor(e?.valueOf());
				return Q(t, e), t;
			}
			case J: {
				let t = {};
				return Q(t, e), t.length = e.length, t[Symbol.iterator] = e[Symbol.iterator], t;
			}
			default: return;
		}
	}, Z(e, void 0, e, /* @__PURE__ */ new Map(), r);
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
	return null !== e && "object" == typeof e && "[object Arguments]" === k(e);
}
function eo(e, t) {
	let r;
	if (0 === (r = Array.isArray(t) ? t : "string" == typeof t && y(t) && e?.[t] == null ? b(t) : [t]).length) return !1;
	let i = e;
	for (let e = 0; e < r.length; e++) {
		let t = r[e];
		if ((null == i || !Object.hasOwn(i, t)) && !((Array.isArray(i) || ei(i)) && en(t) && t < i.length)) return !1;
		i = i[t];
	}
	return !0;
}
function el(e, t) {
	switch (typeof e) {
		case "object":
			Object.is(e?.valueOf(), -0) && (e = "-0");
			break;
		case "number": e = m(e);
	}
	return t = et(t), function(r) {
		let i = _(r, e);
		return void 0 === i ? eo(r, e) : void 0 === t ? void 0 === i : E(i, t);
	};
}
function ea(e) {
	if (null == e) return d;
	switch (typeof e) {
		case "function": return e;
		case "object":
			if (Array.isArray(e) && 2 === e.length) return el(e[0], e[1]);
			return ee(e);
		case "string":
		case "symbol":
		case "number": return w(e);
	}
}
function es(e) {
	return "object" == typeof e && null !== e;
}
function eu(e) {
	if (p(e)) {
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
	return p(e) ? [...new Set(Array.from(e))] : [];
}
var ed = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, eh = /^\w*$/;
function ev(e, t) {
	if (null == e) return !0;
	switch (typeof t) {
		case "symbol":
		case "number":
		case "object":
			if (Array.isArray(t)) return ey(e, t);
			if ("number" == typeof t ? t = m(t) : "object" == typeof t && (t = Object.is(t?.valueOf(), -0) ? "-0" : String(t)), h(t)) return !1;
			if (e?.[t] === void 0) return !0;
			try {
				return delete e[t], !0;
			} catch {
				return !1;
			}
		case "string":
			if (e?.[t] === void 0 && y(t)) return ey(e, b(t));
			if (h(t)) return !1;
			try {
				return delete e[t], !0;
			} catch {
				return !1;
			}
	}
}
function ey(e, t) {
	let r = 1 === t.length ? e : _(e, t.slice(0, -1)), i = t[t.length - 1];
	if (r?.[i] === void 0) return !0;
	if (h(i)) return !1;
	try {
		return delete r[i], !0;
	} catch {
		return !1;
	}
}
function em(e) {
	return Array.isArray(e);
}
function eg(e, t, r) {
	if (!e) return !1;
	null != r && (t = void 0), t ??= d;
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
				let r = el(t[0], t[1]);
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
			let r = w(t);
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
	Object.hasOwn(e, t) && S(i, r) && (void 0 !== r || t in e) || (e[t] = r);
};
function eO(e, t, r) {
	return function(e, t, r, i) {
		let o;
		if (null == e && !O(e)) return e;
		o = !Array.isArray(t) && ("number" == typeof t || "boolean" == typeof t || null == t || ec(t) || "string" == typeof t && (eh.test(t) || !ed.test(t)) || null != e && Object.hasOwn(e, t)) ? [t] : Array.isArray(t) ? t : b(t);
		let l = r(_(e, o)), a = e;
		for (let t = 0; t < o.length && null != a; t++) {
			let r, s = m(o[t]);
			if (!h(s)) {
				if (t === o.length - 1) r = l;
				else {
					let l = a[s], u = i?.(l, s, e);
					r = void 0 !== u ? u : O(l) ? l : en(o[t + 1]) ? [] : {};
				}
				ew(a, s, r), a = a[s];
			}
		}
		return e;
	}(e, t, () => r, () => void 0);
}
function ex(e) {
	return "undefined" != typeof Buffer && Buffer.isBuffer(e);
}
function eS(e) {
	let t = e?.constructor;
	return e === ("function" == typeof t ? t.prototype : Object.prototype);
}
function eA(e, t) {
	var r, i;
	let o, l;
	if ((e = (l = (o = (r = e) ? (r = ec(i = r) ? NaN : Number(i)) === Infinity || r === -Infinity ? (r < 0 ? -1 : 1) * Number.MAX_VALUE : r == r ? r : 0 : 0 === r ? r : 0) % 1) ? o - l : o) < 1 || !Number.isSafeInteger(e)) return [];
	let a = Array(e);
	for (let r = 0; r < e; r++) a[r] = "function" == typeof t ? t(r) : r;
	return a;
}
function ej(e) {
	if (p(e)) {
		var t;
		let r, i, o;
		return i = new Set(r = eA((t = e).length, (e) => `${e}`)), ex(t) && (i.add("offset"), i.add("parent")), X(t) && (i.add("buffer"), i.add("byteLength"), i.add("byteOffset")), o = Object.keys(t).filter((e) => !i.has(e)), Array.isArray(t) ? [...r, ...o] : [...r.filter((e) => Object.hasOwn(t, e)), ...o];
	}
	let r = Object.keys(Object(e));
	return eS(e) ? r.filter((e) => "constructor" !== e) : r;
}
function eE(e) {
	if (null == e) return [];
	switch (typeof e) {
		case "object":
		case "function":
			if (p(e)) {
				var t;
				let r, i, o;
				return i = new Set(r = eA((t = e).length, (e) => `${e}`)), ex(t) && (i.add("offset"), i.add("parent")), X(t) && (i.add("buffer"), i.add("byteLength"), i.add("byteOffset")), o = eP(t).filter((e) => !i.has(e)), Array.isArray(t) ? [...r, ...o] : [...r.filter((e) => Object.hasOwn(t, e)), ...o];
			}
			if (eS(e)) return eP(e).filter((e) => "constructor" !== e);
			return eP(e);
		default: return eP(Object(e));
	}
}
function eP(e) {
	let t = [];
	for (let r in e) t.push(r);
	return t;
}
function ek(e) {
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
function eR(e, t = d) {
	return null == e ? {} : function(e, t) {
		let r = {}, i = Object.keys(e);
		for (let o = 0; o < i.length; o++) {
			let l = i[o], a = e[l];
			r[l] = t(a, l, e);
		}
		return r;
	}(e, ea(t));
}
function eI(e) {
	let t = [];
	for (; e;) t.push(...P(e)), e = Object.getPrototypeOf(e);
	return t;
}
function eC(e, ...t) {
	var r;
	if (null == e) return {};
	let i = (r = e, (t = function(e, t = 1) {
		let r = [], i = Math.floor(t);
		if (!p(e)) return r;
		let o = (e, t) => {
			for (let l = 0; l < e.length; l++) {
				let a = e[l];
				t < i && (Array.isArray(a) || a?.[Symbol.isConcatSpreadable] || null !== a && "object" == typeof a && "[object Arguments]" === Object.prototype.toString.call(a)) ? Array.isArray(a) ? o(a, t + 1) : o(Array.from(a), t + 1) : r.push(a);
			}
		};
		return o(Array.from(e), 0), r;
	}(t)).some((e) => Array.isArray(e) || y(e)) ? function(e) {
		let t = {}, r = [...eE(e), ...eI(e)];
		for (let i = 0; i < r.length; i++) {
			let o = r[i];
			t[o] = et(e[o], (e) => {
				if (!ek(e)) return e;
			});
		}
		return t;
	}(r) : function(e) {
		let t = {}, r = [...eE(e), ...eI(e)];
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
				for (let e = 0; e < r.length; e++) ev(i, r[e]);
				break;
			case "string":
			case "symbol":
			case "number": ev(i, r);
		}
	}
	return i;
}
function eM(e, ...t) {
	if (null == e) return {};
	let r = {};
	for (let i = 0; i < t.length; i++) {
		let o = t[i];
		switch (typeof o) {
			case "object":
				Array.isArray(o) || (o = p(o) ? Array.from(o) : [o]);
				break;
			case "string":
			case "symbol":
			case "number": o = [o];
		}
		for (let t of o) {
			let i = _(e, t);
			(void 0 !== i || eo(e, t)) && ("string" == typeof t && Object.hasOwn(e, t) ? r[t] = i : eO(r, t, i));
		}
	}
	return r;
}
function eT(e, t) {
	if (null == e) return {};
	let r = ea(t ?? eb), i = {}, o = p(e) ? function(e, t, r = 1) {
		if (t ?? (t = e, e = 0), !Number.isInteger(r) || 0 === r) throw Error("The step value must be a non-zero integer.");
		let i = Math.max(Math.ceil((t - e) / r), 0), o = Array(i);
		for (let t = 0; t < i; t++) o[t] = e + t * r;
		return o;
	}(0, e.length) : [...eE(e), ...eI(e)];
	for (let t = 0; t < o.length; t++) {
		let l = ec(o[t]) ? o[t] : o[t].toString(), a = e[l];
		r(a, l, e) && (i[l] = a);
	}
	return i;
}
function eN(e) {
	return "function" == typeof e;
}
function e$(e) {
	return void 0 === e;
}
function eD(e) {
	return "boolean" == typeof e || e instanceof Boolean;
}
function eL(e) {
	if (null == e) return !0;
	if (p(e)) return ("function" == typeof e.splice || "string" == typeof e || "undefined" != typeof Buffer && !!Buffer.isBuffer(e) || !!X(e) || !!ei(e)) && 0 === e.length;
	if ("object" == typeof e) {
		if (e instanceof Map || e instanceof Set) return 0 === e.size;
		let t = Object.keys(e);
		return eS(e) ? 0 === t.filter((e) => "constructor" !== e).length : 0 === t.length;
	}
	return !0;
}
function eF(e) {
	return Number.isInteger(e);
}
var eV = /\p{Lu}?\p{Ll}+|[0-9]+|\p{Lu}+(?!\p{Ll})|\p{Emoji_Presentation}|\p{Extended_Pictographic}|\p{L}+/gu;
function eB(e) {
	return Array.from(e.match(eV) ?? []);
}
function eU(e) {
	return "string" != typeof e && (e = g(e)), e.replace(/['\u2019]/g, "");
}
function ez(e) {
	return function(e) {
		let t = eB(e);
		if (0 === t.length) return "";
		let [r, ...i] = t;
		return `${r.toLowerCase()}${i.map((e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join("")}`;
	}(eU(e));
}
function eG(e) {
	return eB(eU(e)).map((e) => e.toLowerCase()).join("-");
}
function eW(e, t = 0, r = " ") {
	return g(e).padStart(t, r);
}
function eq(e) {
	let t = Object.create(null);
	for (let r of e.split(",")) t[r] = 1;
	return (e) => e in t;
}
var eK = {}, eH = [], eY = () => {}, eJ = () => !1, eX = (e) => 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && (e.charCodeAt(2) > 122 || 97 > e.charCodeAt(2)), eZ = (e) => e.startsWith("onUpdate:"), eQ = Object.assign, e0 = (e, t) => {
	let r = e.indexOf(t);
	r > -1 && e.splice(r, 1);
}, e1 = Object.prototype.hasOwnProperty, e2 = (e, t) => e1.call(e, t), e6 = Array.isArray, e3 = (e) => "function" == typeof e, e4 = (e) => "string" == typeof e, e8 = (e) => "symbol" == typeof e, e5 = (e) => null !== e && "object" == typeof e, e7 = (e) => (e5(e) || e3(e)) && e3(e.then) && e3(e.catch), e9 = Object.prototype.toString, te = (e) => e4(e) && "NaN" !== e && "-" !== e[0] && "" + parseInt(e, 10) === e, tt = eq(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), tr = (e) => {
	let t = Object.create(null);
	return (r) => t[r] || (t[r] = e(r));
}, tn = /-\w/g, ti = tr((e) => e.replace(tn, (e) => e.slice(1).toUpperCase())), to = /\B([A-Z])/g, tl = tr((e) => e.replace(to, "-$1").toLowerCase()), ta = tr((e) => e.charAt(0).toUpperCase() + e.slice(1)), ts = tr((e) => e ? `on${ta(e)}` : ""), tu = (e, ...t) => {
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
	let t = e4(e) ? Number(e) : NaN;
	return isNaN(t) ? e : t;
}, td = () => R || (R = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
function th(e) {
	if (e6(e)) {
		let t = {};
		for (let r = 0; r < e.length; r++) {
			let i = e[r], o = e4(i) ? function(e) {
				let t = {};
				return e.replace(tm, "").split(tv).forEach((e) => {
					if (e) {
						let r = e.split(ty);
						r.length > 1 && (t[r[0].trim()] = r[1].trim());
					}
				}), t;
			}(i) : th(i);
			if (o) for (let e in o) t[e] = o[e];
		}
		return t;
	}
	if (e4(e) || e5(e)) return e;
}
var tv = /;(?![^(]*\))/g, ty = /:([^]+)/, tm = /\/\*[^]*?\*\//g;
function tg(e) {
	let t = "";
	if (e4(e)) t = e;
	else if (e6(e)) for (let r = 0; r < e.length; r++) {
		let i = tg(e[r]);
		i && (t += i + " ");
	}
	else if (e5(e)) for (let r in e) e[r] && (t += r + " ");
	return t.trim();
}
var tb = eq("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");
function t_(e) {
	return !!e || "" === e;
}
var tw = class {
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
}, tO = /* @__PURE__ */ new WeakSet(), tx = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, I && I.active && I.effects.push(this);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		64 & this.flags && (this.flags &= -65, tO.has(this) && (tO.delete(this), this.trigger()));
	}
	notify() {
		(!(2 & this.flags) || 32 & this.flags) && (8 & this.flags || tA(this));
	}
	run() {
		if (!(1 & this.flags)) return this.fn();
		this.flags |= 2, t$(this), tE(this);
		let e = C, t = tC;
		C = this, tC = !0;
		try {
			return this.fn();
		} finally {
			tP(this), C = e, tC = t, this.flags &= -3;
		}
	}
	stop() {
		if (1 & this.flags) {
			for (let e = this.deps; e; e = e.nextDep) tI(e);
			this.deps = this.depsTail = void 0, t$(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		64 & this.flags ? tO.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		tk(this) && this.run();
	}
	get dirty() {
		return tk(this);
	}
}, tS = 0;
function tA(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = T, T = e;
		return;
	}
	e.next = M, M = e;
}
function tj() {
	let e;
	if (!(--tS > 0)) {
		if (T) {
			let e = T;
			for (T = void 0; e;) {
				let t = e.next;
				e.next = void 0, e.flags &= -9, e = t;
			}
		}
		for (; M;) {
			let t = M;
			for (M = void 0; t;) {
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
function tE(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function tP(e) {
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
function tk(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (tR(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function tR(e) {
	if (4 & e.flags && !(16 & e.flags) || (e.flags &= -17, e.globalVersion === tD) || (e.globalVersion = tD, !e.isSSR && 128 & e.flags && (!e.deps && !e._dirty || !tk(e)))) return;
	e.flags |= 2;
	let t = e.dep, r = C, i = tC;
	C = e, tC = !0;
	try {
		let r;
		tE(e);
		let i = e.fn(e._value);
		(0 === t.version || (r = e._value, !Object.is(i, r))) && (e.flags |= 128, e._value = i, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		C = r, tC = i, tP(e), e.flags &= -3;
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
var tC = !0, tM = [];
function tT() {
	tM.push(tC), tC = !1;
}
function tN() {
	let e = tM.pop();
	tC = void 0 === e || e;
}
function t$(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = C;
		C = void 0;
		try {
			t();
		} finally {
			C = e;
		}
	}
}
var tD = 0, tL = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, tF = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!C || !tC || C === this.computed) return;
		let t = this.activeLink;
		if (void 0 === t || t.sub !== C) t = this.activeLink = new tL(C, this), C.deps ? (t.prevDep = C.depsTail, C.depsTail.nextDep = t, C.depsTail = t) : C.deps = C.depsTail = t, function e(t) {
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
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = C.depsTail, t.nextDep = void 0, C.depsTail.nextDep = t, C.depsTail = t, C.deps === t && (C.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, tD++, this.notify(e);
	}
	notify(e) {
		tS++;
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			tj();
		}
	}
}, tV = /* @__PURE__ */ new WeakMap(), tB = Symbol(""), tU = Symbol(""), tz = Symbol("");
function tG(e, t, r) {
	if (tC && C) {
		let t = tV.get(e);
		t || tV.set(e, t = /* @__PURE__ */ new Map());
		let i = t.get(r);
		i || (t.set(r, i = new tF()), i.map = t, i.key = r), i.track();
	}
}
function tW(e, t, r, i, o, l) {
	let a = tV.get(e);
	if (!a) return void tD++;
	let s = (e) => {
		e && e.trigger();
	};
	if (tS++, "clear" === t) a.forEach(s);
	else {
		let o = e6(e), l = o && te(r);
		if (o && "length" === r) {
			let e = Number(i);
			a.forEach((t, r) => {
				("length" === r || r === tz || !e8(r) && r >= e) && s(t);
			});
		} else switch ((void 0 !== r || a.has(void 0)) && s(a.get(r)), l && s(a.get(tz)), t) {
			case "add":
				if (o) l && s(a.get("length"));
				else {
					let t;
					s(a.get(tB));
					"[object Map]" === (t = e, e9.call(t)) && s(a.get(tU));
				}
				break;
			case "delete":
				if (!o) {
					let t;
					s(a.get(tB));
					"[object Map]" === (t = e, e9.call(t)) && s(a.get(tU));
				}
				break;
			case "set":
				let u;
				"[object Map]" === (u = e, e9.call(u)) && s(a.get(tB));
		}
	}
	tj();
}
function tq(e) {
	let t = rg(e);
	return t === e ? t : (tG(t, "iterate", tz), ry(e) ? t : t.map(rb));
}
function tK(e) {
	return tG(e = rg(e), "iterate", tz), e;
}
var tH = {
	__proto__: null,
	[Symbol.iterator]() {
		return tY(this, Symbol.iterator, rb);
	},
	concat(...e) {
		return tq(this).concat(...e.map((e) => e6(e) ? tq(e) : e));
	},
	entries() {
		return tY(this, "entries", (e) => (e[1] = rb(e[1]), e));
	},
	every(e, t) {
		return tX(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return tX(this, "filter", e, t, (e) => e.map(rb), arguments);
	},
	find(e, t) {
		return tX(this, "find", e, t, rb, arguments);
	},
	findIndex(e, t) {
		return tX(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return tX(this, "findLast", e, t, rb, arguments);
	},
	findLastIndex(e, t) {
		return tX(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return tX(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return tQ(this, "includes", e);
	},
	indexOf(...e) {
		return tQ(this, "indexOf", e);
	},
	join(e) {
		return tq(this).join(e);
	},
	lastIndexOf(...e) {
		return tQ(this, "lastIndexOf", e);
	},
	map(e, t) {
		return tX(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return t0(this, "pop");
	},
	push(...e) {
		return t0(this, "push", e);
	},
	reduce(e, ...t) {
		return tZ(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return tZ(this, "reduceRight", e, t);
	},
	shift() {
		return t0(this, "shift");
	},
	some(e, t) {
		return tX(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return t0(this, "splice", e);
	},
	toReversed() {
		return tq(this).toReversed();
	},
	toSorted(e) {
		return tq(this).toSorted(e);
	},
	toSpliced(...e) {
		return tq(this).toSpliced(...e);
	},
	unshift(...e) {
		return t0(this, "unshift", e);
	},
	values() {
		return tY(this, "values", rb);
	}
};
function tY(e, t, r) {
	let i = tK(e), o = i[t]();
	return i === e || ry(e) || (o._next = o.next, o.next = () => {
		let e = o._next();
		return e.done || (e.value = r(e.value)), e;
	}), o;
}
var tJ = Array.prototype;
function tX(e, t, r, i, o, l) {
	let a = tK(e), s = a !== e && !ry(e), u = a[t];
	if (u !== tJ[t]) {
		let t = u.apply(e, l);
		return s ? rb(t) : t;
	}
	let c = r;
	a !== e && (s ? c = function(t, i) {
		return r.call(this, rb(t), i, e);
	} : r.length > 2 && (c = function(t, i) {
		return r.call(this, t, i, e);
	}));
	let f = u.call(a, c, i);
	return s && o ? o(f) : f;
}
function tZ(e, t, r, i) {
	let o = tK(e), l = r;
	return o !== e && (ry(e) ? r.length > 3 && (l = function(t, i, o) {
		return r.call(this, t, i, o, e);
	}) : l = function(t, i, o) {
		return r.call(this, t, rb(i), o, e);
	}), o[t](l, ...i);
}
function tQ(e, t, r) {
	let i = rg(e);
	tG(i, "iterate", tz);
	let o = i[t](...r);
	return (-1 === o || !1 === o) && rm(r[0]) ? (r[0] = rg(r[0]), i[t](...r)) : o;
}
function t0(e, t, r = []) {
	tT(), tS++;
	let i = rg(e)[t].apply(e, r);
	return tj(), tN(), i;
}
var t1 = eq("__proto__,__v_isRef,__isVue"), t2 = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => "arguments" !== e && "caller" !== e).map((e) => Symbol[e]).filter(e8));
function t6(e) {
	e8(e) || (e = String(e));
	let t = rg(this);
	return tG(t, "has", e), t.hasOwnProperty(e);
}
var t3 = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, r) {
		if ("__v_skip" === t) return e.__v_skip;
		let i = this._isReadonly, o = this._isShallow;
		if ("__v_isReactive" === t) return !i;
		if ("__v_isReadonly" === t) return i;
		if ("__v_isShallow" === t) return o;
		if ("__v_raw" === t) return r === (i ? o ? ru : rs : o ? ra : rl).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(r) ? e : void 0;
		let l = e6(e);
		if (!i) {
			let e;
			if (l && (e = tH[t])) return e;
			if ("hasOwnProperty" === t) return t6;
		}
		let a = Reflect.get(e, t, rw(e) ? e : r);
		if ((e8(t) ? t2.has(t) : t1(t)) || (i || tG(e, "get", t), o)) return a;
		if (rw(a)) {
			let e = l && te(t) ? a : a.value;
			return i && e5(e) ? rp(e) : e;
		}
		return e5(a) ? i ? rp(a) : rc(a) : a;
	}
}, t4 = class extends t3 {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, r, i) {
		let o = e[t];
		if (!this._isShallow) {
			let t = rv(o);
			if (ry(r) || rv(r) || (o = rg(o), r = rg(r)), !e6(e) && rw(o) && !rw(r)) if (t) return !0;
			else return o.value = r, !0;
		}
		let l = e6(e) && te(t) ? Number(t) < e.length : e2(e, t), a = Reflect.set(e, t, r, rw(e) ? e : i);
		return e === rg(i) && (l ? Object.is(r, o) || tW(e, "set", t, r, o) : tW(e, "add", t, r)), a;
	}
	deleteProperty(e, t) {
		let r = e2(e, t), i = e[t], o = Reflect.deleteProperty(e, t);
		return o && r && tW(e, "delete", t, void 0, i), o;
	}
	has(e, t) {
		let r = Reflect.has(e, t);
		return e8(t) && t2.has(t) || tG(e, "has", t), r;
	}
	ownKeys(e) {
		return tG(e, "iterate", e6(e) ? "length" : tB), Reflect.ownKeys(e);
	}
}, t8 = class extends t3 {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, t5 = new t4(), t7 = new t8(), t9 = new t4(!0), re = (e) => e;
function rt(e) {
	return function() {
		return "delete" !== e && ("clear" === e ? void 0 : this);
	};
}
function rr(e, t) {
	let r, i = (eQ(r = {
		get(r) {
			let i = this.__v_raw, o = rg(i), l = rg(r);
			e || (Object.is(r, l) || tG(o, "get", r), tG(o, "get", l));
			let { has: a } = Reflect.getPrototypeOf(o), s = t ? re : e ? r_ : rb;
			return a.call(o, r) ? s(i.get(r)) : a.call(o, l) ? s(i.get(l)) : void (i !== o && i.get(r));
		},
		get size() {
			let t = this.__v_raw;
			return e || tG(rg(t), "iterate", tB), t.size;
		},
		has(t) {
			let r = this.__v_raw, i = rg(r), o = rg(t);
			return e || (Object.is(t, o) || tG(i, "has", t), tG(i, "has", o)), t === o ? r.has(t) : r.has(t) || r.has(o);
		},
		forEach(r, i) {
			let o = this, l = o.__v_raw, a = rg(l), s = t ? re : e ? r_ : rb;
			return e || tG(a, "iterate", tB), l.forEach((e, t) => r.call(i, s(e), s(t), o));
		}
	}, e ? {
		add: rt("add"),
		set: rt("set"),
		delete: rt("delete"),
		clear: rt("clear")
	} : {
		add(e) {
			t || ry(e) || rv(e) || (e = rg(e));
			let r = rg(this);
			return Reflect.getPrototypeOf(r).has.call(r, e) || (r.add(e), tW(r, "add", e, e)), this;
		},
		set(e, r) {
			t || ry(r) || rv(r) || (r = rg(r));
			let i = rg(this), { has: o, get: l } = Reflect.getPrototypeOf(i), a = o.call(i, e);
			a || (e = rg(e), a = o.call(i, e));
			let s = l.call(i, e);
			return (i.set(e, r), a) ? Object.is(r, s) || tW(i, "set", e, r, s) : tW(i, "add", e, r), this;
		},
		delete(e) {
			let t = rg(this), { has: r, get: i } = Reflect.getPrototypeOf(t), o = r.call(t, e);
			o || (e = rg(e), o = r.call(t, e));
			let l = i ? i.call(t, e) : void 0, a = t.delete(e);
			return o && tW(t, "delete", e, void 0, l), a;
		},
		clear() {
			let e = rg(this), t = 0 !== e.size, r = e.clear();
			return t && tW(e, "clear", void 0, void 0, void 0), r;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((i) => {
		r[i] = function(...r) {
			let o, l = this.__v_raw, a = rg(l), s = "[object Map]" === (o = a, e9.call(o)), u = "entries" === i || i === Symbol.iterator && s, c = l[i](...r), f = t ? re : e ? r_ : rb;
			return e || tG(a, "iterate", "keys" === i && s ? tU : tB), {
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
	return (t, r, o) => "__v_isReactive" === r ? !e : "__v_isReadonly" === r ? e : "__v_raw" === r ? t : Reflect.get(e2(i, r) && r in t ? i : t, r, o);
}
var rn = { get: rr(!1, !1) }, ri = { get: rr(!1, !0) }, ro = { get: rr(!0, !1) }, rl = /* @__PURE__ */ new WeakMap(), ra = /* @__PURE__ */ new WeakMap(), rs = /* @__PURE__ */ new WeakMap(), ru = /* @__PURE__ */ new WeakMap();
function rc(e) {
	return rv(e) ? e : rd(e, !1, t5, rn, rl);
}
function rf(e) {
	return rd(e, !1, t9, ri, ra);
}
function rp(e) {
	return rd(e, !0, t7, ro, rs);
}
function rd(e, t, r, i, o) {
	var l;
	let a;
	if (!e5(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
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
	}((a = l, e9.call(a)).slice(8, -1));
	if (0 === s) return e;
	let u = o.get(e);
	if (u) return u;
	let c = new Proxy(e, 2 === s ? i : r);
	return o.set(e, c), c;
}
function rh(e) {
	return rv(e) ? rh(e.__v_raw) : !!(e && e.__v_isReactive);
}
function rv(e) {
	return !!(e && e.__v_isReadonly);
}
function ry(e) {
	return !!(e && e.__v_isShallow);
}
function rm(e) {
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
	return rS(e, !1);
}
function rx(e) {
	return rS(e, !0);
}
function rS(e, t) {
	return rw(e) ? e : new rA(e, t);
}
var rA = class {
	constructor(e, t) {
		this.dep = new tF(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : rg(e), this._value = t ? e : rb(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, r = this.__v_isShallow || ry(e) || rv(e);
		Object.is(e = r ? e : rg(e), t) || (this._rawValue = e, this._value = r ? e : rb(e), this.dep.trigger());
	}
};
function rj(e) {
	return rw(e) ? e.value : e;
}
var rE = {
	get: (e, t, r) => "__v_raw" === t ? e : rj(Reflect.get(e, t, r)),
	set: (e, t, r, i) => {
		let o = e[t];
		return rw(o) && !rw(r) ? (o.value = r, !0) : Reflect.set(e, t, r, i);
	}
};
function rP(e) {
	return rh(e) ? e : new Proxy(e, rE);
}
var rk = class {
	constructor(e) {
		this.__v_isRef = !0, this._value = void 0;
		let t = this.dep = new tF(), { get: r, set: i } = e(t.track.bind(t), t.trigger.bind(t));
		this._get = r, this._set = i;
	}
	get value() {
		return this._value = this._get();
	}
	set value(e) {
		this._set(e);
	}
}, rR = class {
	constructor(e, t, r) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new tF(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = tD - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = r;
	}
	notify() {
		if (this.flags |= 16, !(8 & this.flags) && C !== this) return tA(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return tR(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
}, rI = {}, rC = /* @__PURE__ */ new WeakMap(), rM = void 0;
function rT(e, t = Infinity, r) {
	if (t <= 0 || !e5(e) || e.__v_skip || ((r = r || /* @__PURE__ */ new Map()).get(e) || 0) >= t) return e;
	if (r.set(e, t), t--, rw(e)) rT(e.value, t, r);
	else if (e6(e)) for (let i = 0; i < e.length; i++) rT(e[i], t, r);
	else {
		let i, o;
		if ("[object Set]" === (i = e, e9.call(i)) || "[object Map]" === (o = e, e9.call(o))) e.forEach((e) => {
			rT(e, t, r);
		});
		else {
			let i;
			if ("[object Object]" === (i = e, e9.call(i))) {
				for (let i in e) rT(e[i], t, r);
				for (let i of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, i) && rT(e[i], t, r);
			}
		}
	}
	return e;
}
function rN(e, t, r, i) {
	try {
		return i ? e(...i) : e();
	} catch (e) {
		rD(e, t, r);
	}
}
function r$(e, t, r, i) {
	if (e3(e)) {
		let o = rN(e, t, r, i);
		return o && e7(o) && o.catch((e) => {
			rD(e, t, r);
		}), o;
	}
	if (e6(e)) {
		let o = [];
		for (let l = 0; l < e.length; l++) o.push(r$(e[l], t, r, i));
		return o;
	}
}
function rD(e, t, r, i = !0) {
	t && t.vnode;
	let { errorHandler: l, throwUnhandledErrorInProduction: a } = t && t.appContext.config || eK;
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
			tT(), rN(l, null, 10, [
				e,
				o,
				a
			]), tN();
			return;
		}
	}
	(function(e, t, r, i = !0, o = !1) {
		if (o) throw e;
		console.error(e);
	})(e, 0, 0, i, a);
}
var rL = [], rF = -1, rV = [], rB = null, rU = 0, rz = Promise.resolve(), rG = null;
function rW(e) {
	let t = rG || rz;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function rq(e) {
	if (!(1 & e.flags)) {
		let t = rJ(e), r = rL[rL.length - 1];
		!r || !(2 & e.flags) && t >= rJ(r) ? rL.push(e) : rL.splice(function(e) {
			let t = rF + 1, r = rL.length;
			for (; t < r;) {
				let i = t + r >>> 1, o = rL[i], l = rJ(o);
				l < e || l === e && 2 & o.flags ? t = i + 1 : r = i;
			}
			return t;
		}(t), 0, e), e.flags |= 1, rK();
	}
}
function rK() {
	rG || (rG = rz.then(function e(t) {
		try {
			for (rF = 0; rF < rL.length; rF++) {
				let e = rL[rF];
				e && !(8 & e.flags) && (4 & e.flags && (e.flags &= -2), rN(e, e.i, e.i ? 15 : 14), 4 & e.flags || (e.flags &= -2));
			}
		} finally {
			for (; rF < rL.length; rF++) {
				let e = rL[rF];
				e && (e.flags &= -2);
			}
			rF = -1, rL.length = 0, rY(t), rG = null, (rL.length || rV.length) && e(t);
		}
	}));
}
function rH(e, t, r = rF + 1) {
	for (; r < rL.length; r++) {
		let t = rL[r];
		if (t && 2 & t.flags) {
			if (e && t.id !== e.uid) continue;
			rL.splice(r, 1), r--, 4 & t.flags && (t.flags &= -2), t(), 4 & t.flags || (t.flags &= -2);
		}
	}
}
function rY(e) {
	if (rV.length) {
		let e = [...new Set(rV)].sort((e, t) => rJ(e) - rJ(t));
		if (rV.length = 0, rB) return void rB.push(...e);
		for (rU = 0, rB = e; rU < rB.length; rU++) {
			let e = rB[rU];
			4 & e.flags && (e.flags &= -2), 8 & e.flags || e(), e.flags &= -2;
		}
		rB = null, rU = 0;
	}
}
var rJ = (e) => null == e.id ? 2 & e.flags ? -1 : Infinity : e.id, rX = null, rZ = null;
function rQ(e) {
	let t = rX;
	return rX = e, rZ = e && e.type.__scopeId || null, t;
}
function r0(e, t, r, i) {
	let o = e.dirs, l = t && t.dirs;
	for (let a = 0; a < o.length; a++) {
		let s = o[a];
		l && (s.oldValue = l[a].value);
		let u = s.dir[i];
		u && (tT(), r$(u, r, 8, [
			e.el,
			s,
			e,
			t
		]), tN());
	}
}
var r1 = Symbol("_vte"), r2 = (e) => e && (e.disabled || "" === e.disabled), r6 = (e) => e && (e.defer || "" === e.defer), r3 = (e) => "undefined" != typeof SVGElement && e instanceof SVGElement, r4 = (e) => "function" == typeof MathMLElement && e instanceof MathMLElement, r8 = (e, t) => {
	let r = e && e.to;
	return e4(r) ? t ? t(r) : null : r;
}, r5 = {
	name: "Teleport",
	__isTeleport: !0,
	process(e, t, r, i, o, l, a, s, u, c) {
		let { mc: f, pc: p, pbc: d, o: { insert: h, querySelector: y, createText: m, createComment: g } } = c, b = r2(t.props), { shapeFlag: _, children: w, dynamicChildren: O } = t;
		if (null == e) {
			let e = t.el = m(""), c = t.anchor = m("");
			h(e, r, i), h(c, r, i);
			let p = (e, t) => {
				16 & _ && f(w, e, t, o, l, a, s, u);
			}, d = () => {
				let e = t.target = r8(t.props, y), r = nt(e, t, m, h);
				e && ("svg" !== a && r3(e) ? a = "svg" : "mathml" !== a && r4(e) && (a = "mathml"), o && o.isCE && (o.ce._teleportTargets || (o.ce._teleportTargets = /* @__PURE__ */ new Set())).add(e), b || (p(e, r), ne(t, !1)));
			};
			b && (p(r, c), ne(t, !0)), r6(t.props) ? (t.el.__isMounted = !1, il(() => {
				d(), delete t.el.__isMounted;
			}, l)) : d();
		} else {
			if (r6(t.props) && !1 === e.el.__isMounted) return void il(() => {
				r5.process(e, t, r, i, o, l, a, s, u, c);
			}, l);
			t.el = e.el, t.targetStart = e.targetStart;
			let f = t.anchor = e.anchor, h = t.target = e.target, m = t.targetAnchor = e.targetAnchor, g = r2(e.props), _ = g ? r : h, w = g ? f : m;
			if ("svg" === a || r3(h) ? a = "svg" : ("mathml" === a || r4(h)) && (a = "mathml"), O ? (d(e.dynamicChildren, O, _, o, l, a, s), ic(e, t, !0)) : u || p(e, t, _, w, o, l, a, s, !1), b) g ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : r7(t, r, f, c, 1);
			else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
				let e = t.target = r8(t.props, y);
				e && r7(t, e, null, c, 0);
			} else g && r7(t, h, m, c, 1);
			ne(t, b);
		}
	},
	remove(e, t, r, { um: i, o: { remove: o } }, l) {
		let { shapeFlag: a, children: s, anchor: u, targetStart: c, targetAnchor: f, target: p, props: d } = e;
		if (p && (o(c), o(f)), l && o(u), 16 & a) {
			let e = l || !r2(d);
			for (let o = 0; o < s.length; o++) {
				let l = s[o];
				i(l, t, r, e, !!l.dynamicChildren);
			}
		}
	},
	move: r7,
	hydrate: function(e, t, r, i, o, l, { o: { nextSibling: a, parentNode: s, querySelector: u, insert: c, createText: f } }, p) {
		function d(e, t, u, c) {
			t.anchor = p(a(e), t, s(e), r, i, o, l), t.targetStart = u, t.targetAnchor = c;
		}
		let h = t.target = r8(t.props, u), y = r2(t.props);
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
				t.targetAnchor || nt(h, t, f, c), p(s && a(s), t, h, r, i, o, l);
			}
			ne(t, y);
		} else y && 16 & t.shapeFlag && d(e, t, e, a(e));
		return t.anchor && a(t.anchor);
	}
};
function r7(e, t, r, { o: { insert: i }, m: o }, l = 2) {
	0 === l && i(e.targetAnchor, t, r);
	let { el: a, anchor: s, shapeFlag: u, children: c, props: f } = e, p = 2 === l;
	if (p && i(a, t, r), (!p || r2(f)) && 16 & u) for (let e = 0; e < c.length; e++) o(c[e], t, r, 2);
	p && i(s, t, r);
}
var r9 = r5;
function ne(e, t) {
	let r = e.ctx;
	if (r && r.ut) {
		let i, o;
		for (t ? (i = e.el, o = e.anchor) : (i = e.targetStart, o = e.targetAnchor); i && i !== o;) 1 === i.nodeType && i.setAttribute("data-v-owner", r.uid), i = i.nextSibling;
		r.ut();
	}
}
function nt(e, t, r, i) {
	let o = t.targetStart = r(""), l = t.targetAnchor = r("");
	return o[r1] = l, e && (i(o, e), i(l, e)), l;
}
var nr = Symbol("_leaveCb"), nn = Symbol("_enterCb"), ni = [Function, Array], no = {
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
}, nl = (e) => {
	let t = e.subTree;
	return t.component ? nl(t.component) : t;
};
function na(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let r of e) if (r.type !== iP) {
			t = r;
			break;
		}
	}
	return t;
}
var ns = {
	name: "BaseTransition",
	props: no,
	setup(e, { slots: t }) {
		let r, i = iq(), o = (r = {
			isMounted: !1,
			isLeaving: !1,
			isUnmounting: !1,
			leavingVNodes: /* @__PURE__ */ new Map()
		}, nE(() => {
			r.isMounted = !0;
		}), nR(() => {
			r.isUnmounting = !0;
		}), r);
		return () => {
			let r = t.default && function e(t, r = !1, i) {
				let o = [], l = 0;
				for (let a = 0; a < t.length; a++) {
					let s = t[a], u = null == i ? s.key : String(i) + String(null != s.key ? s.key : a);
					s.type === ij ? (128 & s.patchFlag && l++, o = o.concat(e(s.children, r, u))) : (r || s.type !== iP) && o.push(null != u ? iL(s, { key: u }) : s);
				}
				if (l > 1) for (let e = 0; e < o.length; e++) o[e].patchFlag = -2;
				return o;
			}(t.default(), !0);
			if (!r || !r.length) return;
			let l = na(r), a = rg(e), { mode: s } = a;
			if (o.isLeaving) return nf(l);
			let u = np(l);
			if (!u) return nf(l);
			let c = nc(u, a, o, i, (e) => c = e);
			u.type !== iP && nd(u, c);
			let f = i.subTree && np(i.subTree);
			if (f && f.type !== iP && !iT(f, u) && nl(i).type !== iP) {
				let e = nc(f, a, o, i);
				if (nd(f, e), "out-in" === s && u.type !== iP) return o.isLeaving = !0, e.afterLeave = () => {
					o.isLeaving = !1, 8 & i.job.flags || i.update(), delete e.afterLeave, f = void 0;
				}, nf(l);
				"in-out" === s && u.type !== iP ? e.delayLeave = (e, t, r) => {
					nu(o, f)[String(f.key)] = f, e[nr] = () => {
						t(), e[nr] = void 0, delete c.delayedLeave, f = void 0;
					}, c.delayedLeave = () => {
						r(), delete c.delayedLeave, f = void 0;
					};
				} : f = void 0;
			} else f && (f = void 0);
			return l;
		};
	}
};
function nu(e, t) {
	let { leavingVNodes: r } = e, i = r.get(t.type);
	return i || (i = Object.create(null), r.set(t.type, i)), i;
}
function nc(e, t, r, i, o) {
	let { appear: l, mode: a, persisted: s = !1, onBeforeEnter: u, onEnter: c, onAfterEnter: f, onEnterCancelled: p, onBeforeLeave: d, onLeave: h, onAfterLeave: y, onLeaveCancelled: m, onBeforeAppear: g, onAppear: b, onAfterAppear: _, onAppearCancelled: w } = t, O = String(e.key), x = nu(r, e), S = (e, t) => {
		e && r$(e, i, 9, t);
	}, A = (e, t) => {
		let r = t[1];
		S(e, t), e6(e) ? e.every((e) => e.length <= 1) && r() : e.length <= 1 && r();
	}, j = {
		mode: a,
		persisted: s,
		beforeEnter(t) {
			let i = u;
			if (!r.isMounted) if (!l) return;
			else i = g || u;
			t[nr] && t[nr](!0);
			let o = x[O];
			o && iT(e, o) && o.el[nr] && o.el[nr](), S(i, [t]);
		},
		enter(e) {
			let t = c, i = f, o = p;
			if (!r.isMounted) if (!l) return;
			else t = b || c, i = _ || f, o = w || p;
			let a = !1, s = e[nn] = (t) => {
				a || (a = !0, t ? S(o, [e]) : S(i, [e]), j.delayedLeave && j.delayedLeave(), e[nn] = void 0);
			};
			t ? A(t, [e, s]) : s();
		},
		leave(t, i) {
			let o = String(e.key);
			if (t[nn] && t[nn](!0), r.isUnmounting) return i();
			S(d, [t]);
			let l = !1, a = t[nr] = (r) => {
				l || (l = !0, i(), r ? S(m, [t]) : S(y, [t]), t[nr] = void 0, x[o] === e && delete x[o]);
			};
			x[o] = e, h ? A(h, [t, a]) : a();
		},
		clone(e) {
			let l = nc(e, t, r, i, o);
			return o && o(l), l;
		}
	};
	return j;
}
function nf(e) {
	if (n_(e)) return (e = iL(e)).children = null, e;
}
function np(e) {
	if (!n_(e)) return e.type.__isTeleport && e.children ? na(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: r } = e;
	if (r) {
		if (16 & t) return r[0];
		if (32 & t && e3(r.default)) return r.default();
	}
}
function nd(e, t) {
	6 & e.shapeFlag && e.component ? (e.transition = t, nd(e.component.subTree, t)) : 128 & e.shapeFlag ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function nh(e, t) {
	return e3(e) ? eQ({ name: e.name }, t, { setup: e }) : e;
}
function nv(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
var ny = /* @__PURE__ */ new WeakMap();
function nm(e, t, r, i, o = !1) {
	if (e6(e)) return void e.forEach((e, l) => nm(e, t && (e6(t) ? t[l] : t), r, i, o));
	if (nb(i) && !o) {
		512 & i.shapeFlag && i.type.__asyncResolved && i.component.subTree.component && nm(e, t, r, i.component.subTree);
		return;
	}
	let l = 4 & i.shapeFlag ? i0(i.component) : i.el, a = o ? null : l, { i: s, r: u } = e, c = t && t.r, f = s.refs === eK ? s.refs = {} : s.refs, p = s.setupState, d = rg(p), h = p === eK ? eJ : (e) => e2(d, e);
	if (null != c && c !== u && ((ng(t), e4(c)) ? (f[c] = null, h(c) && (p[c] = null)) : rw(c) && (c.value = null, t.k && (f[t.k] = null))), e3(u)) rN(u, s, 12, [a, f]);
	else {
		let t = e4(u), i = rw(u);
		if (t || i) {
			let s = () => {
				if (e.f) {
					let r = t ? h(u) ? p[u] : f[u] : u.value;
					if (o) e6(r) && e0(r, l);
					else if (e6(r)) r.includes(l) || r.push(l);
					else if (t) f[u] = [l], h(u) && (p[u] = f[u]);
					else {
						let t = [l];
						u.value = t, e.k && (f[e.k] = t);
					}
				} else t ? (f[u] = a, h(u) && (p[u] = a)) : i && (u.value = a, e.k && (f[e.k] = a));
			};
			if (a) {
				let t = () => {
					s(), ny.delete(e);
				};
				t.id = -1, ny.set(e, t), il(t, r);
			} else ng(e), s();
		}
	}
}
function ng(e) {
	let t = ny.get(e);
	t && (t.flags |= 8, ny.delete(e));
}
td().requestIdleCallback, td().cancelIdleCallback;
var nb = (e) => !!e.type.__asyncLoader, n_ = (e) => e.type.__isKeepAlive;
function nw(e, t) {
	nx(e, "a", t);
}
function nO(e, t) {
	nx(e, "da", t);
}
function nx(e, t, r = iW) {
	let i = e.__wdc || (e.__wdc = () => {
		let t = r;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	});
	if (nS(t, i, r), r) {
		let e = r.parent;
		for (; e && e.parent;) n_(e.parent.vnode) && function(e, t, r, i) {
			let o = nS(t, e, i, !0);
			nI(() => {
				e0(i[t], o);
			}, r);
		}(i, t, r, e), e = e.parent;
	}
}
function nS(e, t, r = iW, i = !1) {
	if (r) {
		let o = r[e] || (r[e] = []), l = t.__weh || (t.__weh = (...i) => {
			tT();
			let o = iK(r), l = r$(t, r, e, i);
			return o(), tN(), l;
		});
		return i ? o.unshift(l) : o.push(l), l;
	}
}
var nA = (e) => (t, r = iW) => {
	iJ && "sp" !== e || nS(e, (...e) => t(...e), r);
}, nj = nA("bm"), nE = nA("m"), nP = nA("bu"), nk = nA("u"), nR = nA("bum"), nI = nA("um"), nC = nA("sp"), nM = nA("rtg"), nT = nA("rtc");
function nN(e, t = iW) {
	nS("ec", e, t);
}
var n$ = Symbol.for("v-ndc"), nD = (e) => e ? iY(e) ? i0(e) : nD(e.parent) : null, nL = eQ(Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => nD(e.parent),
	$root: (e) => nD(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => nG(e),
	$forceUpdate: (e) => e.f || (e.f = () => {
		rq(e.update);
	}),
	$nextTick: (e) => e.n || (e.n = rW.bind(e.proxy)),
	$watch: (e) => iy.bind(e)
}), nF = (e, t) => e !== eK && !e.__isScriptSetup && e2(e, t), nV = {
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
				if (nF(a, t)) return c[t] = 1, a[t];
				if (s !== eK && e2(s, t)) return c[t] = 2, s[t];
				if ((r = e.propsOptions[0]) && e2(r, t)) return c[t] = 3, u[t];
				if (l !== eK && e2(l, t)) return c[t] = 4, l[t];
				nU && (c[t] = 0);
			}
		}
		let d = nL[t];
		return d ? ("$attrs" === t && tG(e.attrs, "get", ""), d(e)) : (i = f.__cssModules) && (i = i[t]) ? i : l !== eK && e2(l, t) ? (c[t] = 4, l[t]) : e2(o = p.config.globalProperties, t) ? o[t] : void 0;
	},
	set({ _: e }, t, r) {
		let { data: i, setupState: o, ctx: l } = e;
		return nF(o, t) ? (o[t] = r, !0) : i !== eK && e2(i, t) ? (i[t] = r, !0) : !e2(e.props, t) && !("$" === t[0] && t.slice(1) in e) && (l[t] = r, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: r, ctx: i, appContext: o, propsOptions: l, type: a } }, s) {
		let u, c;
		return !!(r[s] || e !== eK && "$" !== s[0] && e2(e, s) || nF(t, s) || (u = l[0]) && e2(u, s) || e2(i, s) || e2(nL, s) || e2(o.config.globalProperties, s) || (c = a.__cssModules) && c[s]);
	},
	defineProperty(e, t, r) {
		return null != r.get ? e._.accessCache[t] = 0 : e2(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
	}
};
function nB(e) {
	return e6(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var nU = !0;
function nz(e, t, r) {
	r$(e6(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, r);
}
function nG(e) {
	let t, r = e.type, { mixins: i, extends: o } = r, { mixins: l, optionsCache: a, config: { optionMergeStrategies: s } } = e.appContext, u = a.get(r);
	return u ? t = u : l.length || i || o ? (t = {}, l.length && l.forEach((e) => nW(t, e, s, !0)), nW(t, r, s)) : t = r, e5(r) && a.set(r, t), t;
}
function nW(e, t, r, i = !1) {
	let { mixins: o, extends: l } = t;
	for (let a in l && nW(e, l, r, !0), o && o.forEach((t) => nW(e, t, r, !0)), t) if (i && "expose" === a);
	else {
		let i = nq[a] || r && r[a];
		e[a] = i ? i(e[a], t[a]) : t[a];
	}
	return e;
}
var nq = {
	data: nK,
	props: nX,
	emits: nX,
	methods: nJ,
	computed: nJ,
	beforeCreate: nY,
	created: nY,
	beforeMount: nY,
	mounted: nY,
	beforeUpdate: nY,
	updated: nY,
	beforeDestroy: nY,
	beforeUnmount: nY,
	destroyed: nY,
	unmounted: nY,
	activated: nY,
	deactivated: nY,
	errorCaptured: nY,
	serverPrefetch: nY,
	components: nJ,
	directives: nJ,
	watch: function(e, t) {
		if (!e) return t;
		if (!t) return e;
		let r = eQ(Object.create(null), e);
		for (let i in t) r[i] = nY(e[i], t[i]);
		return r;
	},
	provide: nK,
	inject: function(e, t) {
		return nJ(nH(e), nH(t));
	}
};
function nK(e, t) {
	return t ? e ? function() {
		return eQ(e3(e) ? e.call(this, this) : e, e3(t) ? t.call(this, this) : t);
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
function nY(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function nJ(e, t) {
	return e ? eQ(Object.create(null), e, t) : t;
}
function nX(e, t) {
	return e ? e6(e) && e6(t) ? [...new Set([...e, ...t])] : eQ(Object.create(null), nB(e), nB(null != t ? t : {})) : t;
}
function nZ() {
	return {
		app: null,
		config: {
			isNativeTag: eJ,
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
var nQ = 0, n0 = null;
function n1(e, t) {
	if (iW) {
		let r = iW.provides, i = iW.parent && iW.parent.provides;
		i === r && (r = iW.provides = Object.create(i)), r[e] = t;
	}
}
function n2(e, t, r = !1) {
	let i = iq();
	if (i || n0) {
		let o = n0 ? n0._context.provides : i ? null == i.parent || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
		if (o && e in o) return o[e];
		if (arguments.length > 1) return r && e3(t) ? t.call(i && i.proxy) : t;
	}
}
var n6 = {}, n3 = (e) => Object.getPrototypeOf(e) === n6;
function n4(e, t, r, i) {
	let o, [l, a] = e.propsOptions, s = !1;
	if (t) for (let u in t) {
		let c;
		if (tt(u)) continue;
		let f = t[u];
		l && e2(l, c = ti(u)) ? a && a.includes(c) ? (o || (o = {}))[c] = f : r[c] = f : i_(e.emitsOptions, u) || u in i && f === i[u] || (i[u] = f, s = !0);
	}
	if (a) {
		let t = rg(r), i = o || eK;
		for (let o = 0; o < a.length; o++) {
			let s = a[o];
			r[s] = n8(l, t, s, i[s], e, !e2(i, s));
		}
	}
	return s;
}
function n8(e, t, r, i, o, l) {
	let a = e[r];
	if (null != a) {
		let e = e2(a, "default");
		if (e && void 0 === i) {
			let e = a.default;
			if (a.type !== Function && !a.skipFactory && e3(e)) {
				let { propsDefaults: l } = o;
				if (r in l) i = l[r];
				else {
					let a = iK(o);
					i = l[r] = e.call(null, t), a();
				}
			} else i = e;
			o.ce && o.ce._setProp(r, i);
		}
		a[0] && (l && !e ? i = !1 : a[1] && ("" === i || i === tl(r)) && (i = !0));
	}
	return i;
}
var n5 = /* @__PURE__ */ new WeakMap();
function n7(e) {
	return !("$" === e[0] || tt(e));
}
var n9 = (e) => "_" === e || "_ctx" === e || "$stable" === e, ie = (e) => e6(e) ? e.map(iF) : [iF(e)], it = (e, t, r) => {
	if (t._n) return t;
	let i = function(e, t = rX, r) {
		if (!t || e._n) return e;
		let i = (...r) => {
			let o;
			i._d && iC(-1);
			let l = rQ(t);
			try {
				o = e(...r);
			} finally {
				rQ(l), i._d && iC(1);
			}
			return o;
		};
		return i._n = !0, i._c = !0, i._d = !0, i;
	}((...e) => ie(t(...e)), r);
	return i._c = !1, i;
}, ir = (e, t, r) => {
	let i = e._ctx;
	for (let r in e) {
		if (n9(r)) continue;
		let o = e[r];
		if (e3(o)) t[r] = it(r, o, i);
		else if (null != o) {
			let e = ie(o);
			t[r] = () => e;
		}
	}
}, ii = (e, t) => {
	let r = ie(t);
	e.slots.default = () => r;
}, io = (e, t, r) => {
	for (let i in t) (r || !n9(i)) && (e[i] = t[i]);
}, il = function(e, t) {
	if (t && t.pendingBranch) e6(e) ? t.effects.push(...e) : t.effects.push(e);
	else e6(e) ? rV.push(...e) : rB && -1 === e.id ? rB.splice(rU + 1, 0, e) : 1 & e.flags || (rV.push(e), e.flags |= 1), rK();
};
function ia(e) {
	return function(e, t) {
		var r;
		let i, o;
		td().__VUE__ = !0;
		let { insert: l, remove: a, patchProp: s, createElement: u, createText: c, createComment: f, setText: p, setElementText: d, parentNode: h, nextSibling: y, setScopeId: m = eY, insertStaticContent: g } = e, b = (e, t, r, i = null, o = null, l = null, a, s = null, u = !!t.dynamicChildren) => {
			if (e === t) return;
			e && !iT(e, t) && (i = q(e), B(e, o, l, !0), e = null), -2 === t.patchFlag && (u = !1, t.dynamicChildren = null);
			let { type: c, ref: f, shapeFlag: p } = t;
			switch (c) {
				case iE:
					_(e, t, r, i);
					break;
				case iP:
					w(e, t, r, i);
					break;
				case ik:
					e ?? O(t, r, i, a);
					break;
				case ij:
					R(e, t, r, i, o, l, a, s, u);
					break;
				default: 1 & p ? x(e, t, r, i, o, l, a, s, u) : 6 & p ? I(e, t, r, i, o, l, a, s, u) : 64 & p ? c.process(e, t, r, i, o, l, a, s, u, Y) : 128 & p && c.process(e, t, r, i, o, l, a, s, u, Y);
			}
			null != f && o ? nm(f, e && e.ref, l, t || e, !t) : null == f && e && null != e.ref && nm(e.ref, null, l, e, !0);
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
			if ("svg" === t.type ? a = "svg" : "math" === t.type && (a = "mathml"), null == e) S(t, r, i, o, l, a, s, u);
			else {
				let r = e.el && e.el._isVueCE ? e.el : null;
				try {
					r && r._beginPatch(), E(e, t, o, l, a, s, u);
				} finally {
					r && r._endPatch();
				}
			}
		}, S = (e, t, r, i, o, a, c, f) => {
			var p, h;
			let y, m, { props: g, shapeFlag: b, transition: _, dirs: w } = e;
			if (y = e.el = u(e.type, a, g && g.is, g), 8 & b ? d(y, e.children) : 16 & b && j(e.children, y, null, i, o, is(e, a), c, f), w && r0(e, null, i, "created"), A(y, e, e.scopeId, c, i), g) {
				for (let e in g) "value" === e || tt(e) || s(y, e, null, g[e], a, i);
				"value" in g && s(y, "value", null, g.value, a), (m = g.onVnodeBeforeMount) && iU(m, i, e);
			}
			w && r0(e, null, i, "beforeMount");
			let O = (p = o, h = _, (!p || p && !p.pendingBranch) && h && !h.persisted);
			O && _.beforeEnter(y), l(y, t, r), ((m = g && g.onVnodeMounted) || O || w) && il(() => {
				m && iU(m, i, e), O && _.enter(y), w && r0(e, null, i, "mounted");
			}, o);
		}, A = (e, t, r, i, o) => {
			if (r && m(e, r), i) for (let t = 0; t < i.length; t++) m(e, i[t]);
			if (o) {
				let r = o.subTree;
				if (t === r || iA(r.type) && (r.ssContent === t || r.ssFallback === t)) {
					let t = o.vnode;
					A(e, t, t.scopeId, t.slotScopeIds, o.parent);
				}
			}
		}, j = (e, t, r, i, o, l, a, s, u = 0) => {
			for (let c = u; c < e.length; c++) b(null, e[c] = s ? iV(e[c]) : iF(e[c]), t, r, i, o, l, a, s);
		}, E = (e, t, r, i, o, l, a) => {
			let u, c = t.el = e.el, { patchFlag: f, dynamicChildren: p, dirs: h } = t;
			f |= 16 & e.patchFlag;
			let y = e.props || eK, m = t.props || eK;
			if (r && iu(r, !1), (u = m.onVnodeBeforeUpdate) && iU(u, r, t, e), h && r0(t, e, r, "beforeUpdate"), r && iu(r, !0), (y.innerHTML && null == m.innerHTML || y.textContent && null == m.textContent) && d(c, ""), p ? P(e.dynamicChildren, p, c, r, i, is(t, o), l) : a || D(e, t, c, null, r, i, is(t, o), l, !1), f > 0) {
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
			((u = m.onVnodeUpdated) || h) && il(() => {
				u && iU(u, r, t, e), h && r0(t, e, r, "updated");
			}, i);
		}, P = (e, t, r, i, o, l, a) => {
			for (let s = 0; s < t.length; s++) {
				let u = e[s], c = t[s];
				b(u, c, u.el && (u.type === ij || !iT(u, c) || 198 & u.shapeFlag) ? h(u.el) : r, null, i, o, l, a, !0);
			}
		}, k = (e, t, r, i, o) => {
			if (t !== r) {
				if (t !== eK) for (let l in t) tt(l) || l in r || s(e, l, t[l], null, o, i);
				for (let l in r) {
					if (tt(l)) continue;
					let a = r[l], u = t[l];
					a !== u && "value" !== l && s(e, l, u, a, o, i);
				}
				"value" in r && s(e, "value", t.value, r.value, o);
			}
		}, R = (e, t, r, i, o, a, s, u, f) => {
			let p = t.el = e ? e.el : c(""), d = t.anchor = e ? e.anchor : c(""), { patchFlag: h, dynamicChildren: y, slotScopeIds: m } = t;
			m && (u = u ? u.concat(m) : m), null == e ? (l(p, r, i), l(d, r, i), j(t.children || [], r, d, o, a, s, u, f)) : h > 0 && 64 & h && y && e.dynamicChildren ? (P(e.dynamicChildren, y, r, o, a, s, u), (null != t.key || o && t === o.subTree) && ic(e, t, !0)) : D(e, t, r, d, o, a, s, u, f);
		}, I = (e, t, r, i, o, l, a, s, u) => {
			t.slotScopeIds = s, null == e ? 512 & t.shapeFlag ? o.ctx.activate(t, r, i, a, u) : C(t, r, i, o, l, a, u) : M(e, t, u);
		}, C = (e, t, r, i, o, l, a) => {
			var s, u, c;
			let f, p, d, h = (s = e, u = i, c = o, f = s.type, p = (u ? u.appContext : s.appContext) || iz, (d = {
				uid: iG++,
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
					let o = i ? n5 : r.propsCache, l = o.get(t);
					if (l) return l;
					let a = t.props, s = {}, u = [], c = !1;
					if (!e3(t)) {
						let o = (t) => {
							c = !0;
							let [i, o] = e(t, r, !0);
							eQ(s, i), o && u.push(...o);
						};
						!i && r.mixins.length && r.mixins.forEach(o), t.extends && o(t.extends), t.mixins && t.mixins.forEach(o);
					}
					if (!a && !c) return e5(t) && o.set(t, eH), eH;
					if (e6(a)) for (let e = 0; e < a.length; e++) {
						let t = ti(a[e]);
						n7(t) && (s[t] = eK);
					}
					else if (a) for (let e in a) {
						let t = ti(e);
						if (n7(t)) {
							let r = a[e], i = s[t] = e6(r) || e3(r) ? { type: r } : eQ({}, r), o = i.type, l = !1, c = !0;
							if (e6(o)) for (let e = 0; e < o.length; ++e) {
								let t = o[e], r = e3(t) && t.name;
								if ("Boolean" === r) {
									l = !0;
									break;
								}
								"String" === r && (c = !1);
							}
							else l = e3(o) && "Boolean" === o.name;
							i[0] = l, i[1] = c, (l || e2(i, "default")) && u.push(t);
						}
					}
					let f = [s, u];
					return e5(t) && o.set(t, f), f;
				}(f, p),
				emitsOptions: function e(t, r, i = !1) {
					let o = i ? ib : r.emitsCache, l = o.get(t);
					if (void 0 !== l) return l;
					let a = t.emits, s = {}, u = !1;
					if (!e3(t)) {
						let o = (t) => {
							let i = e(t, r, !0);
							i && (u = !0, eQ(s, i));
						};
						!i && r.mixins.length && r.mixins.forEach(o), t.extends && o(t.extends), t.mixins && t.mixins.forEach(o);
					}
					return a || u ? (e6(a) ? a.forEach((e) => s[e] = null) : eQ(s, a), e5(t) && o.set(t, s), s) : (e5(t) && o.set(t, null), null);
				}(f, p),
				emit: null,
				emitted: null,
				propsDefaults: eK,
				inheritAttrs: f.inheritAttrs,
				ctx: eK,
				data: eK,
				props: eK,
				attrs: eK,
				slots: eK,
				refs: eK,
				setupState: eK,
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
			if (n_(e) && (h.ctx.renderer = Y), function(e, t = !1, r = !1) {
				t && $(t);
				let { props: i, children: o } = e.vnode, l = iY(e);
				(function(e, t, r, i = !1) {
					let o = {}, l = Object.create(n6);
					for (let r in e.propsDefaults = Object.create(null), n4(e, t, o, l), e.propsOptions[0]) r in o || (o[r] = void 0);
					r ? e.props = i ? o : rf(o) : e.type.props ? e.props = o : e.props = l, e.attrs = l;
				})(e, i, l, t);
				var a = r || t;
				let s = e.slots = Object.create(n6);
				if (32 & e.vnode.shapeFlag) {
					let e = o._;
					e ? (io(s, o, a), a && tc(s, "_", e, !0)) : ir(o, s);
				} else o && ii(e, o);
				l && function(e, t) {
					let r = e.type;
					e.accessCache = Object.create(null), e.proxy = new Proxy(e.ctx, nV);
					let { setup: i } = r;
					if (i) {
						var o;
						tT();
						let r = e.setupContext = i.length > 1 ? {
							attrs: new Proxy((o = e).attrs, iQ),
							slots: o.slots,
							emit: o.emit,
							expose: (e) => {
								o.exposed = e || {};
							}
						} : null, l = iK(e), a = rN(i, e, 0, [e.props, r]), s = e7(a);
						if (tN(), l(), (s || e.sp) && !nb(e) && nv(e), s) {
							if (a.then(iH, iH), t) return a.then((r) => {
								iX(e, r, t);
							}).catch((t) => {
								rD(t, e, 0);
							});
							e.asyncDep = a;
						} else iX(e, a, t);
					} else iZ(e, t);
				}(e, t), t && $(!1);
			}(h, !1, a), h.asyncDep) {
				if (o && o.registerDep(h, T, a), !e.el) {
					let i = h.subTree = iD(iP);
					w(null, i, t, r), e.placeholder = i.el;
				}
			} else T(h, e, t, r, o, l, a);
		}, M = (e, t, r) => {
			let i = t.component = e.component;
			if (function(e, t, r) {
				let { props: i, children: o, component: l } = e, { props: a, children: s, patchFlag: u } = t, c = l.emitsOptions;
				if (t.dirs || t.transition) return !0;
				if (!r || !(u >= 0)) return (!!o || !!s) && (!s || !s.$stable) || i !== a && (i ? !a || iS(i, a, c) : !!a);
				if (1024 & u) return !0;
				if (16 & u) return i ? iS(i, a, c) : !!a;
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
		}, T = (e, t, r, i, l, a, s) => {
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
					iu(e, !1), r ? (r.el = f.el, N(e, r, s)) : r = f, i && tu(i), (t = r.props && r.props.onVnodeBeforeUpdate) && iU(t, c, r, f), iu(e, !0);
					let d = iw(e), y = e.subTree;
					e.subTree = d, b(y, d, h(y.el), q(y), e, l, a), r.el = d.el, null === p && function({ vnode: e, parent: t }, r) {
						for (; t;) {
							let i = t.subTree;
							if (i.suspense && i.suspense.activeBranch === e && (i.el = e.el), i === e) (e = t.vnode).el = r, t = t.parent;
							else break;
						}
					}(e, d.el), o && il(o, l), (t = r.props && r.props.onVnodeUpdated) && il(() => iU(t, c, r, f), l);
				} else {
					let s, { el: u, props: c } = t, { bm: f, m: p, parent: d, root: h, type: y } = e, m = nb(t);
					if (iu(e, !1), f && tu(f), !m && (s = c && c.onVnodeBeforeMount) && iU(s, d, t), iu(e, !0), u && o);
					else {
						h.ce && !1 !== h.ce._def.shadowRoot && h.ce._injectChildStyle(y);
						let o = e.subTree = iw(e);
						b(null, o, r, i, e, l, a), t.el = o.el;
					}
					if (p && il(p, l), !m && (s = c && c.onVnodeMounted)) {
						let e = t;
						il(() => iU(s, d, e), l);
					}
					(256 & t.shapeFlag || d && nb(d.vnode) && 256 & d.vnode.shapeFlag) && e.a && il(e.a, l), e.isMounted = !0, t = r = i = null;
				}
			};
			e.scope.on();
			let c = e.effect = new tx(u);
			e.scope.off();
			let f = e.update = c.run.bind(c), p = e.job = c.runIfDirty.bind(c);
			p.i = e, p.id = e.uid, c.scheduler = () => rq(p), iu(e, !0), f();
		}, N = (e, t, r) => {
			t.component = e;
			let i = e.vnode.props;
			e.vnode = t, e.next = null, function(e, t, r, i) {
				let { props: o, attrs: l, vnode: { patchFlag: a } } = e, s = rg(o), [u] = e.propsOptions, c = !1;
				if ((i || a > 0) && !(16 & a)) {
					if (8 & a) {
						let r = e.vnode.dynamicProps;
						for (let i = 0; i < r.length; i++) {
							let a = r[i];
							if (i_(e.emitsOptions, a)) continue;
							let f = t[a];
							if (u) if (e2(l, a)) f !== l[a] && (l[a] = f, c = !0);
							else {
								let t = ti(a);
								o[t] = n8(u, s, t, f, e, !1);
							}
							else f !== l[a] && (l[a] = f, c = !0);
						}
					}
				} else {
					let i;
					for (let a in n4(e, t, o, l) && (c = !0), s) t && (e2(t, a) || (i = tl(a)) !== a && e2(t, i)) || (u ? r && (void 0 !== r[a] || void 0 !== r[i]) && (o[a] = n8(u, s, a, void 0, e, !0)) : delete o[a]);
					if (l !== s) for (let e in l) t && e2(t, e) || (delete l[e], c = !0);
				}
				c && tW(e.attrs, "set", "");
			}(e, t.props, i, r), ((e, t, r) => {
				let { vnode: i, slots: o } = e, l = !0, a = eK;
				if (32 & i.shapeFlag) {
					let e = t._;
					e ? r && 1 === e ? l = !1 : io(o, t, r) : (l = !t.$stable, ir(t, o)), a = t;
				} else t && (ii(e, t), a = { default: 1 });
				if (l) for (let e in o) n9(e) || null != a[e] || delete o[e];
			})(e, t.children, r), tT(), rH(e), tN();
		}, D = (e, t, r, i, o, l, a, s, u = !1) => {
			let c = e && e.children, f = e ? e.shapeFlag : 0, p = t.children, { patchFlag: h, shapeFlag: y } = t;
			if (h > 0) {
				if (128 & h) return void F(c, p, r, i, o, l, a, s, u);
				else if (256 & h) return void L(c, p, r, i, o, l, a, s, u);
			}
			8 & y ? (16 & f && W(c, o, l), p !== c && d(r, p)) : 16 & f ? 16 & y ? F(c, p, r, i, o, l, a, s, u) : W(c, o, l, !0) : (8 & f && d(r, ""), 16 & y && j(p, r, i, o, l, a, s, u));
		}, L = (e, t, r, i, o, l, a, s, u) => {
			let c;
			e = e || eH, t = t || eH;
			let f = e.length, p = t.length, d = Math.min(f, p);
			for (c = 0; c < d; c++) {
				let i = t[c] = u ? iV(t[c]) : iF(t[c]);
				b(e[c], i, r, null, o, l, a, s, u);
			}
			f > p ? W(e, o, l, !0, !1, d) : j(t, r, i, o, l, a, s, u, d);
		}, F = (e, t, r, i, o, l, a, s, u) => {
			let c = 0, f = t.length, p = e.length - 1, d = f - 1;
			for (; c <= p && c <= d;) {
				let i = e[c], f = t[c] = u ? iV(t[c]) : iF(t[c]);
				if (iT(i, f)) b(i, f, r, null, o, l, a, s, u);
				else break;
				c++;
			}
			for (; c <= p && c <= d;) {
				let i = e[p], c = t[d] = u ? iV(t[d]) : iF(t[d]);
				if (iT(i, c)) b(i, c, r, null, o, l, a, s, u);
				else break;
				p--, d--;
			}
			if (c > p) {
				if (c <= d) {
					let e = d + 1, p = e < f ? t[e].el : i;
					for (; c <= d;) b(null, t[c] = u ? iV(t[c]) : iF(t[c]), r, p, o, l, a, s, u), c++;
				}
			} else if (c > d) for (; c <= p;) B(e[c], o, l, !0), c++;
			else {
				let h, y = c, m = c, g = /* @__PURE__ */ new Map();
				for (c = m; c <= d; c++) {
					let e = t[c] = u ? iV(t[c]) : iF(t[c]);
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
					else for (h = m; h <= d; h++) if (0 === S[h - m] && iT(f, t[h])) {
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
				}(S) : eH;
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
			if (u === ij) {
				l(s, t, r);
				for (let e = 0; e < f.length; e++) V(f[e], t, r, i);
				l(e.anchor, t, r);
				return;
			}
			if (u === ik) return void (({ el: e, anchor: t }, r, i) => {
				let o;
				for (; e && e !== t;) o = y(e), l(e, r, i), e = o;
				l(t, r, i);
			})(e, t, r);
			if (2 !== i && 1 & p && c) if (0 === i) c.beforeEnter(s), l(s, t, r), il(() => c.enter(s), o);
			else {
				let { leave: i, delayLeave: o, afterLeave: u } = c, f = () => {
					e.ctx.isUnmounted ? a(s) : l(s, t, r);
				}, p = () => {
					s._isLeaving && s[nr](!0), i(s, () => {
						f(), u && u();
					});
				};
				o ? o(s, f, p) : p();
			}
			else l(s, t, r);
		}, B = (e, t, r, i = !1, o = !1) => {
			let l, { type: a, props: s, ref: u, children: c, dynamicChildren: f, shapeFlag: p, patchFlag: d, dirs: h, cacheIndex: y } = e;
			if (-2 === d && (o = !1), null != u && (tT(), nm(u, null, r, e, !0), tN()), null != y && (t.renderCache[y] = void 0), 256 & p) return void t.ctx.deactivate(e);
			let m = 1 & p && h, g = !nb(e);
			if (g && (l = s && s.onVnodeBeforeUnmount) && iU(l, t, e), 6 & p) G(e.component, r, i);
			else {
				if (128 & p) return void e.suspense.unmount(r, i);
				m && r0(e, null, t, "beforeUnmount"), 64 & p ? e.type.remove(e, t, r, Y, i) : f && !f.hasOnce && (a !== ij || d > 0 && 64 & d) ? W(f, t, r, !1, !0) : (a === ij && 384 & d || !o && 16 & p) && W(c, t, r), i && U(e);
			}
			(g && (l = s && s.onVnodeUnmounted) || m) && il(() => {
				l && iU(l, t, e), m && r0(e, null, t, "unmounted");
			}, r);
		}, U = (e) => {
			let { type: t, el: r, anchor: i, transition: o } = e;
			if (t === ij) return void z(r, i);
			if (t === ik) return void (({ el: e, anchor: t }) => {
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
			ip(u), ip(c), i && tu(i), o.stop(), l && (l.flags |= 8, B(a, e, t, r)), s && il(s, t), il(() => {
				e.isUnmounted = !0;
			}, t);
		}, W = (e, t, r, i = !1, o = !1, l = 0) => {
			for (let a = l; a < e.length; a++) B(e[a], t, r, i, o);
		}, q = (e) => {
			if (6 & e.shapeFlag) return q(e.component.subTree);
			if (128 & e.shapeFlag) return e.suspense.next();
			let t = y(e.anchor || e.el), r = t && t[r1];
			return r ? y(r) : t;
		}, K = !1, H = (e, t, r) => {
			null == e ? t._vnode && B(t._vnode, null, null, !0) : b(t._vnode || null, e, t, null, null, null, r), t._vnode = e, K || (K = !0, rH(), rY(), K = !1);
		}, Y = {
			p: b,
			um: B,
			m: V,
			r: U,
			mt: C,
			mc: j,
			pc: D,
			pbc: P,
			n: q,
			o: e
		};
		return {
			render: H,
			hydrate: i,
			createApp: (r = i, function(e, t = null) {
				e3(e) || (e = eQ({}, e)), null == t || e5(t) || (t = null);
				let i = nZ(), o = /* @__PURE__ */ new WeakSet(), l = [], a = !1, s = i.app = {
					_uid: nQ++,
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
					use: (e, ...t) => (o.has(e) || (e && e3(e.install) ? (o.add(e), e.install(s, ...t)) : e3(e) && (o.add(e), e(s, ...t))), s),
					mixin: (e) => (i.mixins.includes(e) || i.mixins.push(e), s),
					component: (e, t) => t ? (i.components[e] = t, s) : i.components[e],
					directive: (e, t) => t ? (i.directives[e] = t, s) : i.directives[e],
					mount(o, l, u) {
						if (!a) {
							let c = s._ceVNode || iD(e, t);
							return c.appContext = i, !0 === u ? u = "svg" : !1 === u && (u = void 0), l && r ? r(c, o) : H(c, o, u), a = !0, s._container = o, o.__vue_app__ = s, i0(c.component);
						}
					},
					onUnmount(e) {
						l.push(e);
					},
					unmount() {
						a && (r$(l, s._instance, 16), H(null, s._container), delete s._container.__vue_app__);
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
	let i = e.children, o = t.children;
	if (e6(i) && e6(o)) for (let e = 0; e < i.length; e++) {
		let t = i[e], l = o[e];
		1 & l.shapeFlag && !l.dynamicChildren && ((l.patchFlag <= 0 || 32 === l.patchFlag) && ((l = o[e] = iV(o[e])).el = t.el), r || -2 === l.patchFlag || ic(t, l)), l.type === iE && -1 !== l.patchFlag && (l.el = t.el), l.type !== iP || l.el || (l.el = t.el);
	}
}
function ip(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
var id = Symbol.for("v-scx");
function ih(e, t, r) {
	return iv(e, t, r);
}
function iv(e, t, r = eK) {
	let i, { immediate: o, deep: l, flush: a, once: s } = r, u = eQ({}, r), c = t && o || !t && "post" !== a;
	if (iJ) {
		if ("sync" === a) {
			let e = n2(id);
			i = e.__watcherHandles || (e.__watcherHandles = []);
		} else if (!c) {
			let e = () => {};
			return e.stop = eY, e.resume = eY, e.pause = eY, e;
		}
	}
	let f = iW;
	u.call = (e, t, r) => r$(e, f, t, r);
	let p = !1;
	"post" === a ? u.scheduler = (e) => {
		il(e, f && f.suspense);
	} : "sync" !== a && (p = !0, u.scheduler = (e, t) => {
		t ? e() : rq(e);
	}), u.augmentJob = (e) => {
		t && (e.flags |= 4), p && (e.flags |= 2, f && (e.id = f.uid, e.i = f));
	};
	let d = function(e, t, r = eK) {
		let i, o, l, a, { immediate: s, deep: u, once: c, scheduler: f, augmentJob: p, call: d } = r, h = (e) => u ? e : ry(e) || !1 === u || 0 === u ? rT(e, 1) : rT(e), y = !1, m = !1;
		if (rw(e) ? (o = () => e.value, y = ry(e)) : rh(e) ? (o = () => h(e), y = !0) : e6(e) ? (m = !0, y = e.some((e) => rh(e) || ry(e)), o = () => e.map((e) => rw(e) ? e.value : rh(e) ? h(e) : e3(e) ? d ? d(e, 2) : e() : void 0)) : o = e3(e) ? t ? d ? () => d(e, 2) : e : () => {
			if (l) {
				tT();
				try {
					l();
				} finally {
					tN();
				}
			}
			let t = rM;
			rM = i;
			try {
				return d ? d(e, 3, [a]) : e(a);
			} finally {
				rM = t;
			}
		} : eY, t && u) {
			let e = o, t = !0 === u ? Infinity : u;
			o = () => rT(e(), t);
		}
		let g = I, b = () => {
			i.stop(), g && g.active && e0(g.effects, i);
		};
		if (c && t) {
			let e = t;
			t = (...t) => {
				e(...t), b();
			};
		}
		let _ = m ? Array(e.length).fill(rI) : rI, w = (e) => {
			if (1 & i.flags && (i.dirty || e)) if (t) {
				let e = i.run();
				if (u || y || (m ? e.some((e, t) => !Object.is(e, _[t])) : !Object.is(e, _))) {
					l && l();
					let r = rM;
					rM = i;
					try {
						let r = [
							e,
							_ === rI ? void 0 : m && _[0] === rI ? [] : _,
							a
						];
						_ = e, d ? d(t, 3, r) : t(...r);
					} finally {
						rM = r;
					}
				}
			} else i.run();
		};
		return p && p(w), (i = new tx(o)).scheduler = f ? () => f(w, !1) : w, a = (e) => (function(e, t = !1, r = rM) {
			if (r) {
				let t = rC.get(r);
				t || rC.set(r, t = []), t.push(e);
			}
		})(e, !1, i), l = i.onStop = () => {
			let e = rC.get(i);
			if (e) {
				if (d) d(e, 4);
				else for (let t of e) t();
				rC.delete(i);
			}
		}, t ? s ? w(!0) : _ = i.run() : f ? f(w.bind(null, !0), !0) : i.run(), b.pause = i.pause.bind(i), b.resume = i.resume.bind(i), b.stop = b, b;
	}(e, t, u);
	return iJ && (i ? i.push(d) : c && d()), d;
}
function iy(e, t, r) {
	let i, o = this.proxy, l = e4(e) ? e.includes(".") ? im(o, e) : () => o[e] : e.bind(o, o);
	e3(t) ? i = t : (i = t.handler, r = t);
	let a = iK(this), s = iv(l, i.bind(o), r);
	return a(), s;
}
function im(e, t) {
	let r = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < r.length && t; e++) t = t[r[e]];
		return t;
	};
}
function ig(e, t, ...r) {
	let i, o;
	if (e.isUnmounted) return;
	let l = e.vnode.props || eK, a = r, s = t.startsWith("update:"), u = s && ("modelValue" === (o = t.slice(7)) || "model-value" === o ? l.modelModifiers : l[`${o}Modifiers`] || l[`${ti(o)}Modifiers`] || l[`${tl(o)}Modifiers`]);
	u && (u.trim && (a = r.map((e) => e4(e) ? e.trim() : e)), u.number && (a = r.map(tf)));
	let c = l[i = ts(t)] || l[i = ts(ti(t))];
	!c && s && (c = l[i = ts(tl(t))]), c && r$(c, e, 6, a);
	let f = l[i + "Once"];
	if (f) {
		if (e.emitted) {
			if (e.emitted[i]) return;
		} else e.emitted = {};
		e.emitted[i] = !0, r$(f, e, 6, a);
	}
}
var ib = /* @__PURE__ */ new WeakMap();
function i_(e, t) {
	return !!e && !!eX(t) && (e2(e, (t = t.slice(2).replace(/Once$/, ""))[0].toLowerCase() + t.slice(1)) || e2(e, tl(t)) || e2(e, t));
}
function iw(e) {
	let t, r, { type: i, vnode: o, proxy: l, withProxy: a, propsOptions: [s], slots: u, attrs: c, emit: f, render: p, renderCache: d, props: h, data: y, setupState: m, ctx: g, inheritAttrs: b } = e, _ = rQ(e);
	try {
		if (4 & o.shapeFlag) {
			let e = a || l;
			t = iF(p.call(e, e, d, h, m, y, g)), r = c;
		} else t = iF(i.length > 1 ? i(h, {
			attrs: c,
			slots: u,
			emit: f
		}) : i(h, null)), r = i.props ? c : iO(c);
	} catch (r) {
		iR.length = 0, rD(r, e, 1), t = iD(iP);
	}
	let w = t;
	if (r && !1 !== b) {
		let e = Object.keys(r), { shapeFlag: t } = w;
		e.length && 7 & t && (s && e.some(eZ) && (r = ix(r, s)), w = iL(w, r, !1, !0));
	}
	return o.dirs && ((w = iL(w, null, !1, !0)).dirs = w.dirs ? w.dirs.concat(o.dirs) : o.dirs), o.transition && nd(w, o.transition), t = w, rQ(_), t;
}
var iO = (e) => {
	let t;
	for (let r in e) ("class" === r || "style" === r || eX(r)) && ((t || (t = {}))[r] = e[r]);
	return t;
}, ix = (e, t) => {
	let r = {};
	for (let i in e) eZ(i) && i.slice(9) in t || (r[i] = e[i]);
	return r;
};
function iS(e, t, r) {
	let i = Object.keys(t);
	if (i.length !== Object.keys(e).length) return !0;
	for (let o = 0; o < i.length; o++) {
		let l = i[o];
		if (t[l] !== e[l] && !i_(r, l)) return !0;
	}
	return !1;
}
var iA = (e) => e.__isSuspense, ij = Symbol.for("v-fgt"), iE = Symbol.for("v-txt"), iP = Symbol.for("v-cmt"), ik = Symbol.for("v-stc"), iR = [], iI = 1;
function iC(e, t = !1) {
	iI += e;
}
function iM(e) {
	return !!e && !0 === e.__v_isVNode;
}
function iT(e, t) {
	return e.type === t.type && e.key === t.key;
}
var iN = ({ key: e }) => null != e ? e : null, i$ = ({ ref: e, ref_key: t, ref_for: r }) => ("number" == typeof e && (e = "" + e), null != e ? e4(e) || rw(e) || e3(e) ? {
	i: rX,
	r: e,
	k: t,
	f: !!r
} : e : null), iD = function(e, t = null, r = null, i = 0, o = null, l = !1) {
	var a, s;
	if (e && e !== n$ || (e = iP), iM(e)) {
		let i = iL(e, t, !0);
		return r && iB(i, r), i.patchFlag = -2, i;
	}
	if (e3(a = e) && "__vccOpts" in a && (e = e.__vccOpts), t) {
		let { class: e, style: r } = t = (s = t) ? rm(s) || n3(s) ? eQ({}, s) : s : null;
		e && !e4(e) && (t.class = tg(e)), e5(r) && (rm(r) && !e6(r) && (r = eQ({}, r)), t.style = th(r));
	}
	let u = e4(e) ? 1 : iA(e) ? 128 : e.__isTeleport ? 64 : e5(e) ? 4 : 2 * !!e3(e);
	return function(e, t = null, r = null, i = 0, o = null, l = +(e !== ij), a = !1, s = !1) {
		let u = {
			__v_isVNode: !0,
			__v_skip: !0,
			type: e,
			props: t,
			key: t && iN(t),
			ref: t && i$(t),
			scopeId: rZ,
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
			ctx: rX
		};
		return s ? (iB(u, r), 128 & l && e.normalize(u)) : r && (u.shapeFlag |= e4(r) ? 8 : 16), u;
	}(e, t, r, i, o, u, l, !0);
};
function iL(e, t, r = !1, i = !1) {
	let { props: o, ref: l, patchFlag: a, children: s, transition: u } = e, c = t ? function(...e) {
		let t = {};
		for (let r = 0; r < e.length; r++) {
			let i = e[r];
			for (let e in i) if ("class" === e) t.class !== i.class && (t.class = tg([t.class, i.class]));
			else if ("style" === e) t.style = th([t.style, i.style]);
			else if (eX(e)) {
				let r = t[e], o = i[e];
				o && r !== o && !(e6(r) && r.includes(o)) && (t[e] = r ? [].concat(r, o) : o);
			} else "" !== e && (t[e] = i[e]);
		}
		return t;
	}(o || {}, t) : o, f = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: c,
		key: c && iN(c),
		ref: t && t.ref ? r && l ? e6(l) ? l.concat(i$(t)) : [l, i$(t)] : i$(t) : l,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== ij ? -1 === a ? 16 : 16 | a : a,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: u,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && iL(e.ssContent),
		ssFallback: e.ssFallback && iL(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return u && i && nd(f, u.clone(f)), f;
}
function iF(e) {
	return null == e || "boolean" == typeof e ? iD(iP) : e6(e) ? iD(ij, null, e.slice()) : iM(e) ? iV(e) : iD(iE, null, String(e));
}
function iV(e) {
	return null === e.el && -1 !== e.patchFlag || e.memo ? e : iL(e);
}
function iB(e, t) {
	let r = 0, { shapeFlag: i } = e;
	if (null == t) t = null;
	else if (e6(t)) r = 16;
	else if ("object" == typeof t) if (65 & i) {
		let r = t.default;
		r && (r._c && (r._d = !1), iB(e, r()), r._c && (r._d = !0));
		return;
	} else {
		r = 32;
		let i = t._;
		i || n3(t) ? 3 === i && rX && (1 === rX.slots._ ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024)) : t._ctx = rX;
	}
	else e3(t) ? (t = {
		default: t,
		_ctx: rX
	}, r = 32) : (t = String(t), 64 & i ? (r = 16, t = [function(e = " ", t = 0) {
		return iD(iE, null, e, t);
	}(t)]) : r = 8);
	e.children = t, e.shapeFlag |= r;
}
function iU(e, t, r, i = null) {
	r$(e, t, 7, [r, i]);
}
var iz = nZ(), iG = 0, iW = null, iq = () => iW || rX;
{
	let e = td(), t = (t, r) => {
		let i;
		return (i = e[t]) || (i = e[t] = []), i.push(r), (e) => {
			i.length > 1 ? i.forEach((t) => t(e)) : i[0](e);
		};
	};
	N = t("__VUE_INSTANCE_SETTERS__", (e) => iW = e), $ = t("__VUE_SSR_SETTERS__", (e) => iJ = e);
}
var iK = (e) => {
	let t = iW;
	return N(e), e.scope.on(), () => {
		e.scope.off(), N(t);
	};
}, iH = () => {
	iW && iW.scope.off(), N(null);
};
function iY(e) {
	return 4 & e.vnode.shapeFlag;
}
var iJ = !1;
function iX(e, t, r) {
	e3(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : e5(t) && (e.setupState = rP(t)), iZ(e, r);
}
function iZ(e, t, r) {
	let i = e.type;
	if (!e.render) {
		if (!t && D && !i.render) {
			let t = i.template || nG(e).template;
			if (t) {
				let { isCustomElement: r, compilerOptions: o } = e.appContext.config, { delimiters: l, compilerOptions: a } = i;
				i.render = D(t, eQ(eQ({
					isCustomElement: r,
					delimiters: l
				}, o), a));
			}
		}
		e.render = i.render || eY, L && L(e);
	}
	{
		let t = iK(e);
		tT();
		try {
			(function(e) {
				let t = nG(e), r = e.proxy, i = e.ctx;
				nU = !1, t.beforeCreate && nz(t.beforeCreate, e, "bc");
				let { data: o, computed: l, methods: a, watch: s, provide: u, inject: c, created: f, beforeMount: p, mounted: d, beforeUpdate: h, updated: y, activated: m, deactivated: g, beforeDestroy: b, beforeUnmount: _, destroyed: w, unmounted: O, render: x, renderTracked: S, renderTriggered: A, errorCaptured: j, serverPrefetch: E, expose: P, inheritAttrs: k, components: R, directives: I, filters: C } = t;
				if (c && function(e, t, r = eY) {
					for (let r in e6(e) && (e = nH(e)), e) {
						let i, o = e[r];
						rw(i = e5(o) ? "default" in o ? n2(o.from || r, o.default, !0) : n2(o.from || r) : n2(o)) ? Object.defineProperty(t, r, {
							enumerable: !0,
							configurable: !0,
							get: () => i.value,
							set: (e) => i.value = e
						}) : t[r] = i;
					}
				}(c, i, null), a) for (let e in a) {
					let t = a[e];
					e3(t) && (i[e] = t.bind(r));
				}
				if (o) {
					let t = o.call(r, r);
					e5(t) && (e.data = rc(t));
				}
				if (nU = !0, l) for (let e in l) {
					let t = l[e], o = i1({
						get: e3(t) ? t.bind(r, r) : e3(t.get) ? t.get.bind(r, r) : eY,
						set: !e3(t) && e3(t.set) ? t.set.bind(r) : eY
					});
					Object.defineProperty(i, e, {
						enumerable: !0,
						configurable: !0,
						get: () => o.value,
						set: (e) => o.value = e
					});
				}
				if (s) for (let e in s) (function e(t, r, i, o) {
					let l = o.includes(".") ? im(i, o) : () => i[o];
					if (e4(t)) {
						let e = r[t];
						e3(e) && ih(l, e);
					} else if (e3(t)) ih(l, t.bind(i));
					else if (e5(t)) if (e6(t)) t.forEach((t) => e(t, r, i, o));
					else {
						let e = e3(t.handler) ? t.handler.bind(i) : r[t.handler];
						e3(e) && ih(l, e, t);
					}
				})(s[e], i, r, e);
				if (u) {
					let e = e3(u) ? u.call(r) : u;
					Reflect.ownKeys(e).forEach((t) => {
						n1(t, e[t]);
					});
				}
				function M(e, t) {
					e6(t) ? t.forEach((t) => e(t.bind(r))) : t && e(t.bind(r));
				}
				if (f && nz(f, e, "c"), M(nj, p), M(nE, d), M(nP, h), M(nk, y), M(nw, m), M(nO, g), M(nN, j), M(nT, S), M(nM, A), M(nR, _), M(nI, O), M(nC, E), e6(P)) if (P.length) {
					let t = e.exposed || (e.exposed = {});
					P.forEach((e) => {
						Object.defineProperty(t, e, {
							get: () => r[e],
							set: (t) => r[e] = t,
							enumerable: !0
						});
					});
				} else e.exposed || (e.exposed = {});
				x && e.render === eY && (e.render = x), null != k && (e.inheritAttrs = k), R && (e.components = R), I && (e.directives = I), E && nv(e);
			})(e);
		} finally {
			tN(), t();
		}
	}
}
var iQ = { get: (e, t) => (tG(e, "get", ""), e[t]) };
function i0(e) {
	var t;
	return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(rP((!e2(t = e.exposed, "__v_skip") && Object.isExtensible(t) && tc(t, "__v_skip", !0), t)), {
		get: (t, r) => r in t ? t[r] : r in nL ? nL[r](e) : void 0,
		has: (e, t) => t in e || t in nL
	})) : e.proxy;
}
var i1 = (e, t) => (function(e, t, r = !1) {
	let i, o;
	return e3(e) ? i = e : (i = e.get, o = e.set), new rR(i, o, r);
})(e, 0, iJ);
function i2(e, t, r) {
	try {
		iC(-1);
		let i = arguments.length;
		if (2 !== i) return i > 3 ? r = Array.prototype.slice.call(arguments, 2) : 3 === i && iM(r) && (r = [r]), iD(e, t, r);
		if (!e5(t) || e6(t)) return iD(e, null, t);
		if (iM(t)) return iD(e, null, [t]);
		return iD(e, t);
	} finally {
		iC(1);
	}
}
var i6 = "3.5.24", i3 = Symbol.for("immer-nothing"), i4 = Symbol.for("immer-draftable"), i8 = Symbol.for("immer-state");
function i5(e) {
	throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`);
}
var i7 = Object.getPrototypeOf;
function i9(e) {
	return !!e && !!e[i8];
}
function oe(e) {
	return !!e && (on(e) || Array.isArray(e) || !!e[i4] || !!e.constructor?.[i4] || os(e) || ou(e));
}
var ot = Object.prototype.constructor.toString(), or = /* @__PURE__ */ new WeakMap();
function on(e) {
	if (!e || "object" != typeof e) return !1;
	let t = Object.getPrototypeOf(e);
	if (null === t || t === Object.prototype) return !0;
	let r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
	if (r === Object) return !0;
	if ("function" != typeof r) return !1;
	let i = or.get(r);
	return void 0 === i && (i = Function.toString.call(r), or.set(r, i)), i === ot;
}
function oi(e, t, r = !0) {
	0 === oo(e) ? (r ? Reflect.ownKeys(e) : Object.keys(e)).forEach((r) => {
		t(r, e[r], e);
	}) : e.forEach((r, i) => t(i, r, e));
}
function oo(e) {
	let t = e[i8];
	return t ? t.type_ : Array.isArray(e) ? 1 : os(e) ? 2 : 3 * !!ou(e);
}
function ol(e, t) {
	return 2 === oo(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function oa(e, t, r) {
	let i = oo(e);
	2 === i ? e.set(t, r) : 3 === i ? e.add(r) : e[t] = r;
}
function os(e) {
	return e instanceof Map;
}
function ou(e) {
	return e instanceof Set;
}
function oc(e) {
	return e.copy_ || e.base_;
}
function of(e, t) {
	if (os(e)) return new Map(e);
	if (ou(e)) return new Set(e);
	if (Array.isArray(e)) return Array.prototype.slice.call(e);
	let r = on(e);
	if (!0 !== t && ("class_only" !== t || r)) {
		let t = i7(e);
		return null !== t && r ? { ...e } : Object.assign(Object.create(t), e);
	}
	{
		let t = Object.getOwnPropertyDescriptors(e);
		delete t[i8];
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
		return Object.create(i7(e), t);
	}
}
function op(e, t = !1) {
	return oh(e) || i9(e) || !oe(e) || (oo(e) > 1 && Object.defineProperties(e, {
		set: od,
		add: od,
		clear: od,
		delete: od
	}), Object.freeze(e), t && Object.values(e).forEach((e) => op(e, !0))), e;
}
var od = { value: function() {
	i5(2);
} };
function oh(e) {
	return null === e || "object" != typeof e || Object.isFrozen(e);
}
var ov = {};
function oy(e) {
	let t = ov[e];
	return t || i5(0, e), t;
}
function om(e, t) {
	t && (oy("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function og(e) {
	ob(e), e.drafts_.forEach(ow), e.drafts_ = null;
}
function ob(e) {
	e === F && (F = e.parent_);
}
function o_(e) {
	return F = {
		drafts_: [],
		parent_: F,
		immer_: e,
		canAutoFreeze_: !0,
		unfinalizedDrafts_: 0
	};
}
function ow(e) {
	let t = e[i8];
	0 === t.type_ || 1 === t.type_ ? t.revoke_() : t.revoked_ = !0;
}
function oO(e, t) {
	t.unfinalizedDrafts_ = t.drafts_.length;
	let r = t.drafts_[0];
	return void 0 !== e && e !== r ? (r[i8].modified_ && (og(t), i5(4)), oe(e) && (e = ox(t, e), t.parent_ || oA(t, e)), t.patches_ && oy("Patches").generateReplacementPatches_(r[i8].base_, e, t.patches_, t.inversePatches_)) : e = ox(t, r, []), og(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== i3 ? e : void 0;
}
function ox(e, t, r) {
	if (oh(t)) return t;
	let i = e.immer_.shouldUseStrictIteration(), o = t[i8];
	if (!o) return oi(t, (i, l) => oS(e, o, t, i, l, r), i), t;
	if (o.scope_ !== e) return t;
	if (!o.modified_) return oA(e, o.base_, !0), o.base_;
	if (!o.finalized_) {
		o.finalized_ = !0, o.scope_.unfinalizedDrafts_--;
		let t = o.copy_, l = t, a = !1;
		3 === o.type_ && (l = new Set(t), t.clear(), a = !0), oi(l, (i, l) => oS(e, o, t, i, l, r, a), i), oA(e, t, !1), r && e.patches_ && oy("Patches").generatePatches_(o, r, e.patches_, e.inversePatches_);
	}
	return o.copy_;
}
function oS(e, t, r, i, o, l, a) {
	if (null == o || "object" != typeof o && !a) return;
	let s = oh(o);
	if (!s || a) {
		if (i9(o)) {
			let a = ox(e, o, l && t && 3 !== t.type_ && !ol(t.assigned_, i) ? l.concat(i) : void 0);
			if (oa(r, i, a), !i9(a)) return;
			e.canAutoFreeze_ = !1;
		} else a && r.add(o);
		if (oe(o) && !s) {
			if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1 || t && t.base_ && t.base_[i] === o && s) return;
			ox(e, o), (!t || !t.scope_.parent_) && "symbol" != typeof i && (os(r) ? r.has(i) : Object.prototype.propertyIsEnumerable.call(r, i)) && oA(e, o);
		}
	}
}
function oA(e, t, r = !1) {
	!e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && op(t, r);
}
var oj = {
	get(e, t) {
		if (t === i8) return e;
		let r = oc(e);
		if (!ol(r, t)) {
			var i;
			let o;
			return i = e, (o = ok(r, t)) ? "value" in o ? o.value : o.get?.call(i.draft_) : void 0;
		}
		let o = r[t];
		return e.finalized_ || !oe(o) ? o : o === oP(e.base_, t) ? (oI(e), e.copy_[t] = oC(o, e)) : o;
	},
	has: (e, t) => t in oc(e),
	ownKeys: (e) => Reflect.ownKeys(oc(e)),
	set(e, t, r) {
		let i = ok(oc(e), t);
		if (i?.set) return i.set.call(e.draft_, r), !0;
		if (!e.modified_) {
			let i = oP(oc(e), t), o = i?.[i8];
			if (o && o.base_ === r) return e.copy_[t] = r, e.assigned_[t] = !1, !0;
			if ((r === i ? 0 !== r || 1 / r == 1 / i : r != r && i != i) && (void 0 !== r || ol(e.base_, t))) return !0;
			oI(e), oR(e);
		}
		return !!(e.copy_[t] === r && (void 0 !== r || t in e.copy_) || Number.isNaN(r) && Number.isNaN(e.copy_[t])) || (e.copy_[t] = r, e.assigned_[t] = !0, !0);
	},
	deleteProperty: (e, t) => (void 0 !== oP(e.base_, t) || t in e.base_ ? (e.assigned_[t] = !1, oI(e), oR(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0),
	getOwnPropertyDescriptor(e, t) {
		let r = oc(e), i = Reflect.getOwnPropertyDescriptor(r, t);
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
	getPrototypeOf: (e) => i7(e.base_),
	setPrototypeOf() {
		i5(12);
	}
}, oE = {};
function oP(e, t) {
	let r = e[i8];
	return (r ? oc(r) : e)[t];
}
function ok(e, t) {
	if (!(t in e)) return;
	let r = i7(e);
	for (; r;) {
		let e = Object.getOwnPropertyDescriptor(r, t);
		if (e) return e;
		r = i7(r);
	}
}
function oR(e) {
	!e.modified_ && (e.modified_ = !0, e.parent_ && oR(e.parent_));
}
function oI(e) {
	e.copy_ || (e.copy_ = of(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
function oC(e, t) {
	let r = os(e) ? oy("MapSet").proxyMap_(e, t) : ou(e) ? oy("MapSet").proxySet_(e, t) : function(e, t) {
		let r = Array.isArray(e), i = {
			type_: +!!r,
			scope_: t ? t.scope_ : F,
			modified_: !1,
			finalized_: !1,
			assigned_: {},
			parent_: t,
			base_: e,
			draft_: null,
			copy_: null,
			revoke_: null,
			isManual_: !1
		}, o = i, l = oj;
		r && (o = [i], l = oE);
		let { revoke: a, proxy: s } = Proxy.revocable(o, l);
		return i.draft_ = s, i.revoke_ = a, s;
	}(e, t);
	return (t ? t.scope_ : F).drafts_.push(r), r;
}
oi(oj, (e, t) => {
	oE[e] = function() {
		return arguments[0] = arguments[0][0], t.apply(this, arguments);
	};
}), oE.deleteProperty = function(e, t) {
	return oE.set.call(this, e, t, void 0);
}, oE.set = function(e, t, r) {
	return oj.set.call(this, e[0], t, r, e[0]);
};
var oM = new class {
	constructor(e) {
		this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.useStrictIteration_ = !0, this.produce = (e, t, r) => {
			let i;
			if ("function" == typeof e && "function" != typeof t) {
				let r = t;
				t = e;
				let i = this;
				return function(e = r, ...o) {
					return i.produce(e, (e) => t.call(this, e, ...o));
				};
			}
			if ("function" != typeof t && i5(6), void 0 !== r && "function" != typeof r && i5(7), oe(e)) {
				let o = o_(this), l = oC(e, void 0), a = !0;
				try {
					i = t(l), a = !1;
				} finally {
					a ? og(o) : ob(o);
				}
				return om(o, r), oO(i, o);
			}
			if (e && "object" == typeof e) i5(1, e);
			else {
				if (void 0 === (i = t(e)) && (i = e), i === i3 && (i = void 0), this.autoFreeze_ && op(i, !0), r) {
					let t = [], o = [];
					oy("Patches").generateReplacementPatches_(e, i, t, o), r(t, o);
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
		}, "boolean" == typeof e?.autoFreeze && this.setAutoFreeze(e.autoFreeze), "boolean" == typeof e?.useStrictShallowCopy && this.setUseStrictShallowCopy(e.useStrictShallowCopy), "boolean" == typeof e?.useStrictIteration && this.setUseStrictIteration(e.useStrictIteration);
	}
	createDraft(e) {
		var t;
		oe(e) || i5(8), i9(e) && (i9(t = e) || i5(10, t), e = function e(t) {
			let r;
			if (!oe(t) || oh(t)) return t;
			let i = t[i8], o = !0;
			if (i) {
				if (!i.modified_) return i.base_;
				i.finalized_ = !0, r = of(t, i.scope_.immer_.useStrictShallowCopy_), o = i.scope_.immer_.shouldUseStrictIteration();
			} else r = of(t, !0);
			return oi(r, (t, i) => {
				oa(r, t, e(i));
			}, o), i && (i.finalized_ = !1), r;
		}(t));
		let r = o_(this), i = oC(e, void 0);
		return i[i8].isManual_ = !0, ob(r), i;
	}
	finishDraft(e, t) {
		let r = e && e[i8];
		r && r.isManual_ || i5(9);
		let { scope_: i } = r;
		return om(i, t), oO(void 0, i);
	}
	setAutoFreeze(e) {
		this.autoFreeze_ = e;
	}
	setUseStrictShallowCopy(e) {
		this.useStrictShallowCopy_ = e;
	}
	setUseStrictIteration(e) {
		this.useStrictIteration_ = e;
	}
	shouldUseStrictIteration() {
		return this.useStrictIteration_;
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
		let i = oy("Patches").applyPatches_;
		return i9(e) ? i(e, t) : this.produce(e, (e) => i(e, t));
	}
}().produce, oT = t((e) => {
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
})(), oN = class {
	static getOwnPropertyNames(e) {
		return (0, oT.getMetadataKeys)(e);
	}
	static get(e, t) {
		return (0, oT.getMetadata)(t, e);
	}
	static define(e, t, r, i) {
		if (e && e.constructor && e.constructor != Object) {
			if (eN(r)) return void (0, oT.defineMetadata)(t, oM((0, oT.getMetadata)(t, e) ?? i ?? {}, r), e);
			(0, oT.defineMetadata)(t, r, e);
		}
	}
};
let o$ = (e) => "function" == typeof e && `${e}`.startsWith("class"), oD = {
	path: [],
	branch: []
};
var oL = class extends TypeError {
	value;
	key;
	type;
	refinement;
	path;
	branch;
	failures;
	constructor(e, t) {
		let r, { message: i, explanation: o, ...l } = e, { path: a } = e, s = 0 === a.length ? i : `At path: ${a.join(".")} -- ${i}`;
		super(o ?? s), null != o && (this.cause = s), Object.assign(this, l), this.name = this.constructor.name, this.failures = () => r ??= [e, ...t()];
	}
};
let oF = Symbol("Type");
function* oV(e, t, r, i) {
	let o, l = e;
	for (let e of (("object" != typeof (o = l) || "function" != typeof o[Symbol.iterator]) && (l = [l]), l)) {
		let o = function(e, t, r, i) {
			if (!0 === e) return;
			let o = {};
			o = !1 === e ? {} : ef(e) ? { message: e } : e;
			let { path: l, branch: a, node: s } = t, { type: u } = r, { refinement: c, message: f = e$(i) ? "Required" : `Expected a value of type \`${u}\`${c ? ` with refinement \`${c}\`` : ""}, but received: \`${i}\`` } = o;
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
function oB(e, t, r = {}) {
	let i = oU(e, t, r), o = function(e) {
		let { done: t, value: r } = e.next();
		return t ? void 0 : r;
	}(i);
	return o[0] ? [new oL(o[0], function* () {
		for (let e of i) e[0] && (yield e[0]);
	}), void 0] : [void 0, o[1]];
}
function* oU(e, t, r = {}) {
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
	let f = oz.valid;
	for (let i of oV(t.validator(c, u), u, t, e)) i.explanation = r.message, f = oz.not_valid, yield [i, void 0];
	for (let [e, p, d] of t.entries(c, u)) for (let t of oU(p, d, {
		path: void 0 === e ? i : [...i, e],
		branch: void 0 === e ? o : [...o, p],
		node: void 0 === e ? l : {
			current: d,
			parent: l
		},
		coerce: a,
		mask: s,
		message: r.message
	})) t[0] ? (f = null != t[0].refinement ? oz.not_refined : oz.not_valid, yield [t[0], void 0]) : a && (p = t[1], void 0 === e ? c = p : c instanceof Map ? c.set(e, p) : c instanceof Set ? c.add(p) : es(c) && (c[e] = p));
	if (f !== oz.not_valid) for (let i of oV(t.refiner(c, u), u, t, e)) i.explanation = r.message, f = oz.not_refined, yield [i, void 0];
	f === oz.valid && (yield [void 0, c]);
}
var oz = ((V = oz || {})[V.valid = 0] = "valid", V[V.not_refined = 1] = "not_refined", V[V.not_valid = 2] = "not_valid", V);
let oG = (e) => (...t) => {
	let r = e(...t), i = (e, t) => {
		let i = oN.get(e, t) ?? {};
		oN.define(e, t, {
			...i,
			type: r
		});
	};
	return i.toString = () => `@type:${r.type}`, new Proxy(i, {
		ownKeys: () => [...Object.getOwnPropertyNames(r), ...Object.getOwnPropertySymbols(r)],
		get: (e, t) => r[t]
	});
}, oW = (e) => (...t) => {
	let r = (r) => e(r, ...t);
	return new Proxy((e, t) => {
		oN.define(e, t, (e) => {
			(e.modifies ??= []).push({ modify: r });
		}, {});
	}, { get(e, t) {
		if ("modify" == t) return r;
	} });
};
var oq = class e {
	static RecordKey = Symbol("RecordKey");
	static meta = Symbol("meta");
	static optional = Symbol("optional");
	static underlying = Symbol("underlying");
	static unwrap = Symbol("unwrap");
	static extractSchema = (e) => new oY().toValue(e);
	static extractMeta = (t) => new oY().toValue(t.meta ?? t[e.meta]);
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
					if (O(t)) {
						let e = t?.[i]?.[a];
						if (!e$(e)) return e;
					}
					return l ? l?.[i]?.[a] : void 0;
				}
				if (O(t)) {
					let e = t?.[a];
					if (!e$(e)) return e;
				}
				return l ? l[a] : void 0;
			}
		});
	}
	static schemaProp(e, t) {
		return oK(e.schema, t);
	}
	static metaProp(e, t) {
		return oH(e.schema, t);
	}
}, oK = (e, t) => {
	if (O(e)) return e[t] ?? (e[oq.unwrap] ? oK(e[oq.unwrap]().schema, t) : void 0);
}, oH = (e, t) => {
	if (O(e)) return e[oq.meta]?.[t] ?? (e[oq.unwrap] ? oH(e[oq.unwrap]().schema, t) : void 0);
}, oY = class {
	constructor(e = !1) {
		this.deref = e;
	}
	toValue(e) {
		if (e) {
			if (!e$(e.schema)) return this.toValue(e.schema);
			if (this.deref && e[oq.unwrap]) return this.toValue(e[oq.unwrap]());
			if (em(e)) return this.toArray(e);
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
}, oJ = class e {
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
		return "" == e && t ? oq.RecordKey : e.replace(/~1/g, "/").replace(/~0/g, "~");
	}
	static escape(e) {
		return e == oq.RecordKey ? "" : e.toString().replace(/~/g, "~0").replace(/\//g, "~1");
	}
	static get(t, r) {
		let i = Array.isArray(r) ? r : e.parse(r);
		for (let e = 0; e < i.length; e++) {
			let r = i[e];
			if (e > 0 && r == oq.RecordKey) return i[e - 1];
			if (!("object" == typeof t && r in t)) throw Error("Invalid reference token: " + r);
			t = t[r];
		}
		return t;
	}
}, oX = class e {
	static define = oG((t = () => !0) => new class extends e {
		validator(e, r) {
			return t(e, r);
		}
	}(null));
	static fromTypeObject = (t, r) => {
		let i = t.type ?? r ?? new e({});
		return t.modifies ? i.use(...t.modifies ?? []) : i;
	};
	[oF] = oF;
	schema;
	constructor(e) {
		if (e) {
			this.schema = oq.create(e);
			return;
		}
		this.schema = e ?? null;
	}
	get meta() {
		return this.schema ? this.schema[oq.meta] : {};
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
	*entries(e, t = oD) {}
	validate(e, t = {}) {
		return oB(e, this, t);
	}
	create(e) {
		let t = oB(e, this, { coerce: !0 });
		if (t[0]) throw t[0];
		return t[1];
	}
	mask(e) {
		let t = oB(e, this, {
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
		return o0.create(this);
	}
	default(e) {
		return oQ.create(this, e);
	}
}, oZ = class e extends oX {
	static of(t, r) {
		return new e({
			...r,
			[oq.underlying]: t
		});
	}
	static refine(t, r, i) {
		return new class extends e {
			*refiner(e, o) {
				for (let l of (yield* this.unwrap.refiner(e, o), oV(r(e, o), o, t, e))) yield {
					...l,
					refinement: Object.keys(i).join(",")
				};
			}
		}({
			...i,
			[oq.underlying]: t
		});
	}
	get unwrap() {
		let e = this.schema[oq.unwrap];
		return e ? e() : this.schema[oq.underlying];
	}
	get type() {
		return this.unwrap.type;
	}
	*entries(e, t = oD) {
		yield* this.unwrap.entries(e, {
			...t,
			node: {
				current: this,
				parent: t.node
			}
		});
	}
	validator(e, t) {
		return oV(this.unwrap.validator(e, t), t, this, e);
	}
	refiner(e, t) {
		return oV(this.unwrap.refiner(e, t), t, this, e);
	}
	coercer(e, t) {
		return this.unwrap.coercer(e, t);
	}
}, oQ = class e extends oZ {
	static create = oG((t, r) => new e({
		default: r,
		[oq.underlying]: t
	}));
	coercer(e, t) {
		return void 0 === e ? this.schema.default : super.unwrap.coercer(e, t);
	}
}, o0 = class e extends oZ {
	static create = oG((t) => new e({
		[oq.underlying]: t,
		[oq.optional]: t
	}));
	refiner(e, t) {
		return void 0 === e || super.unwrap.refiner(e, t);
	}
	validator(e, t) {
		return void 0 === e || super.unwrap.validator(e, t);
	}
}, o1 = class e extends oZ {
	static create = oG((t, r) => new e({
		$ref: t,
		[oq.unwrap]: r
	}));
}, o2 = class e extends oX {
	static create = oG(() => new e());
	constructor() {
		super({});
	}
	get type() {
		return "any";
	}
	validator() {
		return !0;
	}
}, o6 = class e extends oX {
	static create = oG(() => new e({ type: "null" }));
	get type() {
		return "null";
	}
	validator(e, t) {
		return null === e;
	}
	coercer(e, t) {
		return e;
	}
}, o3 = class e extends oX {
	static create = oG(() => new e({ type: "string" }));
	get type() {
		return this.schema.type;
	}
	validator(e, t) {
		return ef(e);
	}
	coercer(e, t) {
		return e$(e) || null === e ? e : String(e);
	}
}, o4 = class e extends oX {
	static create = oG(() => new e({ type: "number" }));
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
}, o8 = class e extends oX {
	static create = oG(() => new e({ type: "integer" }));
	get type() {
		return this.schema.type;
	}
	validator(e, t) {
		return eF(e);
	}
	coercer(e, t) {
		try {
			let t = void 0 != e ? parseInt(String(e)) : void 0;
			return eF(t) ? t : void 0;
		} catch (e) {
			return;
		}
	}
}, o5 = class e extends oX {
	static create = oG(() => new e({ type: "boolean" }));
	get type() {
		return this.schema.type;
	}
	validator(e, t) {
		return eD(e);
	}
	coercer(e, t) {
		try {
			return void 0 != e ? "true" === String(e) : void 0;
		} catch (e) {
			return;
		}
	}
}, o7 = class e extends oX {
	static create = oG(() => new e({
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
}, o9 = class e extends oX {
	static create = oG(e.createEnum);
	static createEnum(t) {
		return new e({ enum: t });
	}
	static literal = oG((t) => new e({ enum: [t] }));
	static nativeEnum = oG((t) => new e({ enum: Object.values(t) }));
	get type() {
		return "enums";
	}
	validator(e, t) {
		return this.schema.enum.includes(e);
	}
	coercer(e, t) {
		return e;
	}
}, le = class e extends oX {
	static create = oG(() => new e(!1));
	get type() {
		return "never";
	}
	validator(e, t) {
		return !1;
	}
	coercer(e, t) {
		return e;
	}
}, lt = class e extends oX {
	static create(t) {
		let r = (e = {}) => {
			let t = [];
			for (let [r, i] of Object.entries(e)) oq.schemaProp(i, oq.optional) || t.push(r);
			return t;
		};
		return oG(() => {
			if (t) {
				if (o$(t)) {
					let i = new t(), o = {};
					for (let [e, t] of Object.entries(i)) o[e] = o9.literal(t);
					for (let e of oN.getOwnPropertyNames(i)) {
						let t = oN.get(i, e);
						if (t) {
							let r = oX.fromTypeObject(t, o[e]);
							e in o ? o[e] = r.default(o[e].schema?.enum?.[0]) : o[e] = r;
						}
					}
					return new e({
						type: "object",
						properties: o,
						required: r(o),
						additionalProperties: le.create()
					});
				}
				return new e({
					type: "object",
					properties: t,
					required: r(t),
					additionalProperties: le.create()
				});
			}
			return new e({
				type: "object",
				properties: {},
				required: [],
				additionalProperties: le.create()
			});
		})();
	}
	get type() {
		return this.schema.type;
	}
	*entries(e, t = oD) {
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
}, lr = class e extends oX {
	static create = oG((t, r) => new e({
		type: "object",
		propertyNames: t,
		additionalProperties: r
	}));
	get type() {
		return "record";
	}
	*entries(e) {
		if (es(e)) for (let [t, r] of Object.entries(e)) yield [
			oq.RecordKey,
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
}, ln = class e extends oX {
	static create = oG((t) => new e({
		type: "array",
		items: t
	}));
	get type() {
		return this.schema.type;
	}
	*entries(e, t = oD) {
		if (Array.isArray(e)) for (let [t, r] of e.entries()) yield [
			t,
			r,
			this.schema.items
		];
	}
	validator(e) {
		return em(e);
	}
	coercer(e) {
		return em(e) ? e.slice() : e;
	}
}, li = class e extends oX {
	static create = oG((t) => new e({
		type: "array",
		items: t
	}));
	get type() {
		return "tuple";
	}
	*entries(e, t) {
		if (em(e)) {
			let t = Math.max(this.schema.items.length, e.length);
			for (let r = 0; r < t; r++) yield [
				r,
				e[r],
				this.schema.items[r] ?? le.create()
			];
		}
	}
	validator(e) {
		return em(e) && e.length === this.schema.items.length;
	}
	coercer(e) {
		return em(e) ? e.slice() : e;
	}
}, lo = class e extends oX {
	static create = oG((...t) => new e({ allOf: t }));
	get type() {
		return "intersection";
	}
	*entries(e, t = oD) {
		for (let r of this.schema.allOf) yield* r.entries(e, t);
	}
	*validator(e, t) {
		for (let r of this.schema.allOf) yield* oV(r.validator(e, t), t, this, e);
	}
	*refiner(e, t) {
		for (let r of this.schema.allOf) yield* oV(r.refiner(e, t), t, this, e);
	}
}, ll = class e extends oX {
	static create = oG((...t) => new e({ oneOf: t }));
	static discriminatorMapping(t, ...r) {
		return oG(() => {
			let i = [];
			if (1 == r.length && r[0].constructor == Object) for (let [e, o] of Object.entries(r[0])) if (oq.schemaProp(o, "$ref")) i.push(o);
			else {
				let r = { [t]: o9.literal(e) };
				for (let [e, t, i] of o.entries({}, oD)) r[String(e)] = i;
				i.push(lt.create(r));
			}
			else for (let e of r) o$(e) && i.push(lt.create(e));
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
				let o = oq.schemaProp(e, "properties")[t];
				if (!o) continue;
				let l = o.schema.enum;
				l && r.push(...l), i.push(o.meta);
			}
			return oZ.of(o9.create(r), { [oq.meta]: oq.create(i[0], e.node?.current.meta ?? {}) });
		})();
	}
	_discriminatorMappingProps = /* @__PURE__ */ new Map();
	discriminatorMapping(e, t, r) {
		if (this._discriminatorMappingProps.get(t)) return this._discriminatorMappingProps.get(t);
		if ((this.discriminatorPropType(r)?.schema?.enum ?? []).includes(t)) {
			let r = this.schema.oneOf.find((r) => {
				let i = oq.schemaProp(r, "properties")[e];
				if (i) {
					let [e, r] = i.validate(t);
					return !e;
				}
				return !1;
			});
			if (r) {
				if (!this._discriminatorMappingProps.has(t)) {
					let i = {};
					for (let [t, o] of Object.entries(oq.schemaProp(r, "properties"))) t !== e && (i[t] = o);
					this._discriminatorMappingProps.set(t, i);
				}
				return this._discriminatorMappingProps.get(t);
			}
		}
		return {};
	}
	*entries(e, t = oD) {
		if (this.schema.discriminator) {
			let r = this.schema.discriminator.propertyName, i = e?.[r];
			yield* lt.create({
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
			let [r, i] = oB(e, t, { coerce: !0 });
			if (!r) return i;
		}
		return e;
	}
	validator(e, t) {
		if (this.schema.discriminator) {
			let r = this.schema.discriminator.propertyName, i = e?.[r];
			return lt.create({
				[r]: this.discriminatorPropType(t),
				...this.discriminatorMapping(r, i, t)
			}).validator(e, t);
		}
		let r = [];
		for (let i of this.schema.oneOf) {
			let [ ...o] = oU(e, i, t), [l] = o;
			if (l && !l[0]) return [];
			for (let [e] of o) e && r.push(e);
		}
		return [`Expected the value to satisfy a union of \`${this.schema.oneOf.map((e) => e.type).join(" | ")}\`, but received: ${e}`, ...r];
	}
}, la = e({
	annotate: () => lB,
	any: () => lu,
	array: () => lI,
	binary: () => lS,
	boolean: () => lx,
	custom: () => lD,
	defaults: () => lF,
	discriminatorMapping: () => l$,
	enums: () => lA,
	exclusiveMaximum: () => lw,
	exclusiveMinimum: () => lb,
	integer: () => lm,
	intersection: () => lT,
	literal: () => lE,
	maxItems: () => lM,
	maxLength: () => lh,
	maximum: () => l_,
	minItems: () => lC,
	minLength: () => ld,
	minimum: () => lg,
	multipleOf: () => lO,
	nativeEnum: () => lj,
	never: () => lc,
	nil: () => lf,
	number: () => ly,
	object: () => lP,
	optional: () => lV,
	pattern: () => lv,
	record: () => lk,
	ref: () => ls,
	refine: () => lL,
	string: () => lp,
	tuple: () => lR,
	union: () => lN
});
let ls = o1.create, lu = o2.create, lc = le.create, lf = o6.create, lp = o3.create, ld = oW((e, t, r) => oZ.refine(e, (e) => !!e && e.length >= t || (r ?? `Expected string value length great than or equal ${t}, but received "${e}"`), { minLength: t })), lh = oW((e, t, r) => oZ.refine(e, (e) => !!e && e.length <= t || (r ?? `Expected string value length less than or equal ${t}, but received "${e}"`), { maxLength: t })), lv = oW((e, t, r) => {
	let i = oZ.refine(e, (i) => !!t.test(i) || (r ?? `Expected a ${e.type} matching \`/${t.source}/\` but received "${i}"`), { pattern: t.source });
	return r ? i.use(lB({ "x-pattern-err-msg": r })) : i;
}), ly = o4.create, lm = o8.create, lg = oW((e, t, r) => oZ.refine(e, (e) => e >= t || (r ?? `Expected value great than or equal ${t}, but received "${e}"`), { minimum: t })), lb = oW((e, t, r) => oZ.refine(e, (e) => e > t || (r ?? `Expected value great than ${t}, but received "${e}"`), { exclusiveMinimum: t })), l_ = oW((e, t, r) => oZ.refine(e, (e) => e <= t || (r ?? `Expected value less than or equal ${t}, but received "${e}"`), { maximum: t })), lw = oW((e, t, r) => oZ.refine(e, (e) => e < t || (r ?? `Expected value less than or equal ${t}, but received "${e}"`), { exclusiveMaximum: t })), lO = oW((e, t, r) => oZ.refine(e, (e) => e % t == 0 || (r ?? `Expected value multiple of ${t}, but received "${e}"`), { multipleOf: t })), lx = o5.create, lS = o7.create, lA = o9.create, lj = o9.nativeEnum, lE = o9.literal, lP = lt.create, lk = lr.create, lR = li.create, lI = ln.create, lC = oW((e, t, r) => oZ.refine(e, (e) => !!em(e) && e.length >= t || (r ?? `Expected array value at least ${t}, but received "${e?.length}"`), { minItems: t })), lM = oW((e, t, r) => oZ.refine(e, (e) => !!em(e) && e.length <= t || (r ?? `Expected array value  ${t}, but received "${e?.length}"`), { maxItems: t })), lT = lo.create, lN = ll.create, l$ = ll.discriminatorMapping, lD = oX.define, lL = oZ.refine, lF = oW((e, t) => oQ.create(e, t)), lV = oW((e) => o0.create(e)), lB = oW((e, t) => oZ.of(e, { [oq.meta]: t })), lU = (e) => e.split("/")?.findLast(() => !0) ?? "";
var lz = class e {
	static decode(t, r) {
		return !1 === t ? lc() : new e(r).decode(t);
	}
	def = /* @__PURE__ */ new Map();
	constructor(e) {
		this.resolveRef = e;
	}
	decode(e) {
		let t = structuredClone(e), r = this._decode(t), i = !1;
		if (t?.title && (r = r.use(lB({ title: t?.title })), i = !0), t?.description) if (i) r = r.use(lB({ description: t?.description }));
		else {
			let [e, ...i] = t?.description.split(/[.\n]/);
			r = r.use(lB({
				title: e,
				description: i ? i.join("\n").trim() : void 0
			}));
		}
		if (t) {
			for (let e of lX) if (!e$(t[e])) {
				if ("pattern" == e) {
					r = r.use(lv(new RegExp(t[e]), t["x-pattern-err-msg"])), delete t[e];
					continue;
				}
				let i = la[e];
				i && (r = r.use(i(t[e])), delete t[e]);
			}
			delete t.title, delete t.description, Object.keys(t).length > 0 && (r = r.use(lB(t)));
		}
		return r;
	}
	ref = (e) => {
		let t = this.def.get(e);
		if (t) return t;
		throw Error(`undefined type ${e}`);
	};
	_decode(e) {
		let t = lQ(e);
		if (t.$ref) {
			let [e, r] = this.resolveRef(t.$ref);
			return this.def.has(r) || (this.def.set(r, lu()), this.def.set(r, this.decode(e))), ls(r, () => this.ref(r));
		}
		if (t.enum) {
			let e = lA(t.enum);
			return t["x-enum-labels"] ? e.use(lB({ enumLabels: t["x-enum-labels"] })) : e;
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
					let t = this.decode(i), o = oq.schemaProp(t, "properties")?.[e];
					if (o) {
						let e = oq.schemaProp(o, "enum")?.[0];
						e$(e) || (r[`${e}`] = t);
					}
				}
				return l$(e, r);
			}
		}
		if (t.oneOf) {
			let e = t.oneOf.map((e) => this.decode(e));
			return 1 === e.length ? e[0] : lN(...e);
		}
		if (t.allOf) {
			let e = t.allOf.map((e) => this.decode(e));
			return 1 === e.length ? e[0] : lT(...e);
		}
		if (lG(t)) {
			if (t.properties) {
				let e = t.required ?? [], r = {};
				for (let [i, o] of Object.entries(t.properties)) {
					let t = this.decode(o);
					e.includes(i) || (t = t.optional()), r[i] = t;
				}
				return lP(r);
			}
			let e = t.additionalProperties ?? {};
			return e ? lk(this.decode(t.propertyNames ?? { type: "string" }), this.decode(e)) : lP();
		}
		return lq(t) ? em(t.items) ? lR(t.items.map((e) => this.decode(e))) : lI(this.decode(t.items)) : lH(t) ? "binary" === t.format ? lS() : lp() : lK(t) ? "integer" === t.type ? lm() : ly() : lY(t) ? lx() : lW(t) ? lf() : lu();
	}
}, lG = (e) => "object" === e.type, lW = (e) => "null" === e.type, lq = (e) => "array" === e.type, lK = (e) => "number" === e.type || "integer" === e.type, lH = (e) => "string" === e.type, lY = (e) => "boolean" === e.type, lJ = {
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
let lX = [
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
var lZ = (e, t) => t.some((t) => Object.hasOwn(e, t)), lQ = (e = {}) => {
	if (eD(e)) return {};
	if (!e.type) {
		for (let t in lJ) if (lZ(e, lJ[t])) {
			e.type = t;
			break;
		}
	}
	e.const && (e.enum = [e.const]);
	let t = (t) => {
		e[t] && (e[t] = e[t].filter((r) => {
			let i = lQ(r);
			return !!lZ(i, [
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
}, l0 = Symbol("component");
let l1 = (e) => ek(e) && e[l0] === l0, l2 = (e) => {
	let t;
	return !!(t = Object.values(e)[0]) && t[oF] == oF;
};
function l6(...e) {
	let t, r = {}, i = {};
	for (let o of e) {
		if (eN(o)) {
			t = o;
			continue;
		}
		e$(t) ? r = o : i = o;
	}
	let [o, l] = function(e, t = d) {
		if (!e) return [[], []];
		let r = p(e) ? e : Object.values(e);
		t = ea(t);
		let i = [], o = [];
		for (let e = 0; e < r.length; e++) {
			let l = r[e];
			t(l) ? i.push(l) : o.push(l);
		}
		return [i, o];
	}(Object.keys(r), (e) => /^on[A-Z]/.test(e)), a = {
		emits: [...o.map((e) => eG(e.slice(2))), ...i.emits ?? []],
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
		[l0]: l0
	};
}
let l3 = (e, t) => new Proxy(e, { get: (e, r) => t[r] ?? e[r] });
var l4 = "undefined" != typeof document;
function l8(e) {
	return "object" == typeof e || "displayName" in e || "props" in e || "__vccOpts" in e;
}
var l5 = Object.assign;
function l7(e, t) {
	let r = {};
	for (let i in t) {
		let o = t[i];
		r[i] = ae(o) ? o.map(e) : e(o);
	}
	return r;
}
var l9 = () => {}, ae = Array.isArray;
function at(e, t) {
	let r = {};
	for (let i in e) r[i] = i in t ? t[i] : e[i];
	return r;
}
var ar = /#/g, an = /&/g, ai = /\//g, ao = /=/g, al = /\?/g, aa = /\+/g, as = /%5B/g, au = /%5D/g, ac = /%5E/g, af = /%60/g, ap = /%7B/g, ad = /%7C/g, ah = /%7D/g, av = /%20/g;
function ay(e) {
	return null == e ? "" : encodeURI("" + e).replace(ad, "|").replace(as, "[").replace(au, "]");
}
function am(e) {
	return ay(e).replace(aa, "%2B").replace(av, "+").replace(ar, "%23").replace(an, "%26").replace(af, "`").replace(ap, "{").replace(ah, "}").replace(ac, "^");
}
function ag(e) {
	return ay(e).replace(ar, "%23").replace(al, "%3F").replace(ai, "%2F");
}
function ab(e) {
	if (null == e) return null;
	try {
		return decodeURIComponent("" + e);
	} catch (e) {}
	return "" + e;
}
var a_ = /\/$/;
function aw(e, t, r = "/") {
	let i, o = {}, l = "", a = "", s = t.indexOf("#"), u = t.indexOf("?");
	return (u = s >= 0 && u > s ? -1 : u) >= 0 && (i = t.slice(0, u), o = e((l = t.slice(u, s > 0 ? s : t.length)).slice(1))), s >= 0 && (i = i || t.slice(0, s), a = t.slice(s, t.length)), {
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
		hash: ab(a)
	};
}
function aO(e, t) {
	return t && e.toLowerCase().startsWith(t.toLowerCase()) ? e.slice(t.length) || "/" : e;
}
function ax(e, t) {
	return (e.aliasOf || e) === (t.aliasOf || t);
}
function aS(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let o in e) {
		var r, i;
		if (r = e[o], i = t[o], ae(r) ? !aA(r, i) : ae(i) ? !aA(i, r) : r !== i) return !1;
	}
	return !0;
}
function aA(e, t) {
	return ae(t) ? e.length === t.length && e.every((e, r) => e === t[r]) : 1 === e.length && e[0] === t;
}
var aj = {
	path: "/",
	name: void 0,
	params: {},
	query: {},
	hash: "",
	fullPath: "/",
	matched: [],
	meta: {},
	redirectedFrom: void 0
}, aE = ((B = {}).pop = "pop", B.push = "push", B), aP = ((U = {}).back = "back", U.forward = "forward", U.unknown = "", U), ak = /^[^#]+#/;
function aR(e, t) {
	return e.replace(ak, "#") + t;
}
var aI = () => ({
	left: window.scrollX,
	top: window.scrollY
});
function aC(e, t) {
	return (history.state ? history.state.position - t : -1) + e;
}
var aM = /* @__PURE__ */ new Map();
function aT(e) {
	return "string" == typeof e || "symbol" == typeof e;
}
var aN = ((z = {})[z.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", z[z.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", z[z.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", z[z.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", z[z.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", z), a$ = Symbol("");
function aD(e, t) {
	return l5(Error(), {
		type: e,
		[a$]: !0
	}, t);
}
function aL(e, t) {
	return e instanceof Error && a$ in e && (null == t || !!(e.type & t));
}
function aF(e) {
	let t = {};
	if ("" === e || "?" === e) return t;
	let r = ("?" === e[0] ? e.slice(1) : e).split("&");
	for (let e = 0; e < r.length; ++e) {
		let i = r[e].replace(aa, " "), o = i.indexOf("="), l = ab(o < 0 ? i : i.slice(0, o)), a = o < 0 ? null : ab(i.slice(o + 1));
		if (l in t) {
			let e = t[l];
			ae(e) || (e = t[l] = [e]), e.push(a);
		} else t[l] = a;
	}
	return t;
}
function aV(e) {
	let t = "";
	for (let r in e) {
		let i = e[r];
		if (r = am(r).replace(ao, "%3D"), null == i) {
			void 0 !== i && (t += (t.length ? "&" : "") + r);
			continue;
		}
		(ae(i) ? i.map((e) => e && am(e)) : [i && am(i)]).forEach((e) => {
			void 0 !== e && (t += (t.length ? "&" : "") + r, null != e && (t += "=" + e));
		});
	}
	return t;
}
aN.MATCHER_NOT_FOUND, aN.NAVIGATION_GUARD_REDIRECT, aN.NAVIGATION_ABORTED, aN.NAVIGATION_CANCELLED, aN.NAVIGATION_DUPLICATED;
var aB = Symbol(""), aU = Symbol(""), az = Symbol(""), aG = Symbol(""), aW = Symbol("");
function aq() {
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
function aK(e, t, r, i, o, l = (e) => e()) {
	let a = i && (i.enterCallbacks[o] = i.enterCallbacks[o] || []);
	return () => new Promise((s, u) => {
		let c = (e) => {
			if (!1 === e) u(aD(aN.NAVIGATION_ABORTED, {
				from: r,
				to: t
			}));
			else if (e instanceof Error) u(e);
			else "string" == typeof e || e && "object" == typeof e ? u(aD(aN.NAVIGATION_GUARD_REDIRECT, {
				from: t,
				to: e
			})) : (a && i.enterCallbacks[o] === a && "function" == typeof e && a.push(e), s());
		}, f = Promise.resolve(l(() => e.call(i && i.instances[o], t, r, c)));
		e.length < 3 && (f = f.then(c)), f.catch((e) => u(e));
	});
}
function aH(e, t, r, i, o = (e) => e()) {
	let l = [];
	for (let a of e) for (let e in a.components) {
		let s = a.components[e];
		if ("beforeRouteEnter" === t || a.instances[e]) if (l8(s)) {
			let u = (s.__vccOpts || s)[t];
			u && l.push(aK(u, r, i, a, e, o));
		} else {
			let u = s();
			l.push(() => u.then((l) => {
				if (!l) throw Error(`Couldn't resolve component "${e}" at "${a.path}"`);
				let s = l.__esModule || "Module" === l[Symbol.toStringTag] || l.default && l8(l.default) ? l.default : l;
				a.mods[e] = l, a.components[e] = s;
				let u = (s.__vccOpts || s)[t];
				return u && aK(u, r, i, a, e, o)();
			}));
		}
	}
	return l;
}
function aY(e, t) {
	let { pathname: r, search: i, hash: o } = t, l = e.indexOf("#");
	if (l > -1) {
		let t = o.includes(e.slice(l)) ? e.slice(l).length : 1, r = o.slice(t);
		return "/" !== r[0] && (r = "/" + r), aO(r, "");
	}
	return aO(r, e) + i + o;
}
function aJ(e, t, r, i = !1, o = !1) {
	return {
		back: e,
		current: t,
		forward: r,
		replaced: i,
		position: window.history.length,
		scroll: o ? aI() : null
	};
}
function aX(e) {
	let t = function(e) {
		let { history: t, location: r } = window, i = { value: aY(e, r) }, o = { value: t.state };
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
				let a = l5({}, o.value, t.state, {
					forward: e,
					scroll: aI()
				});
				l(a.current, a, !0), l(e, l5({}, aJ(i.value, e, null), { position: a.position + 1 }, r), !1), i.value = e;
			},
			replace: function(e, r) {
				l(e, l5({}, t.state, aJ(o.value.back, e, o.value.forward, !0), r, { position: o.value.position }), !0), i.value = e;
			}
		};
	}(e = function(e) {
		if (!e) if (l4) {
			let t = document.querySelector("base");
			e = (e = t && t.getAttribute("href") || "/").replace(/^\w+:\/\/[^\/]+/, "");
		} else e = "/";
		return "/" !== e[0] && "#" !== e[0] && (e = "/" + e), e.replace(a_, "");
	}(e)), r = function(e, t, r, i) {
		let o = [], l = [], a = null, s = ({ state: l }) => {
			let s = aY(e, location), u = r.value, c = t.value, f = 0;
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
					type: aE.pop,
					direction: f ? f > 0 ? aP.forward : aP.back : aP.unknown
				});
			});
		};
		function u() {
			if ("hidden" === document.visibilityState) {
				let { history: e } = window;
				e.state && e.replaceState(l5({}, e.state, { scroll: aI() }), "");
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
	}(e, t.state, t.location, t.replace), i = l5({
		location: "",
		base: e,
		go: function(e, t = !0) {
			t || r.pauseListeners(), history.go(e);
		},
		createHref: aR.bind(null, e)
	}, t, r);
	return Object.defineProperty(i, "location", {
		enumerable: !0,
		get: () => t.location.value
	}), Object.defineProperty(i, "state", {
		enumerable: !0,
		get: () => t.state.value
	}), i;
}
var aZ = ((G = {})[G.Static = 0] = "Static", G[G.Param = 1] = "Param", G[G.Group = 2] = "Group", G), aQ = ((W = aQ || {})[W.Static = 0] = "Static", W[W.Param = 1] = "Param", W[W.ParamRegExp = 2] = "ParamRegExp", W[W.ParamRegExpEnd = 3] = "ParamRegExpEnd", W[W.EscapeNext = 4] = "EscapeNext", W), a0 = {
	type: aZ.Static,
	value: ""
}, a1 = /[a-zA-Z0-9_]/, a2 = "[^/]+?", a6 = {
	sensitive: !1,
	strict: !1,
	start: !0,
	end: !0
}, a3 = ((q = a3 || {})[q._multiplier = 10] = "_multiplier", q[q.Root = 90] = "Root", q[q.Segment = 40] = "Segment", q[q.SubSegment = 30] = "SubSegment", q[q.Static = 40] = "Static", q[q.Dynamic = 20] = "Dynamic", q[q.BonusCustomRegExp = 10] = "BonusCustomRegExp", q[q.BonusWildcard = -50] = "BonusWildcard", q[q.BonusRepeatable = -20] = "BonusRepeatable", q[q.BonusOptional = -8] = "BonusOptional", q[q.BonusStrict = .7000000000000001] = "BonusStrict", q[q.BonusCaseSensitive = .25] = "BonusCaseSensitive", q), a4 = /[.+*?^${}()[\]/\\]/g;
function a8(e, t) {
	let r = 0, i = e.score, o = t.score;
	for (; r < i.length && r < o.length;) {
		let e = function(e, t) {
			let r = 0;
			for (; r < e.length && r < t.length;) {
				let i = t[r] - e[r];
				if (i) return i;
				r++;
			}
			return e.length < t.length ? 1 === e.length && e[0] === a3.Static + a3.Segment ? -1 : 1 : e.length > t.length ? 1 === t.length && t[0] === a3.Static + a3.Segment ? 1 : -1 : 0;
		}(i[r], o[r]);
		if (e) return e;
		r++;
	}
	if (1 === Math.abs(o.length - i.length)) {
		if (a5(i)) return 1;
		if (a5(o)) return -1;
	}
	return o.length - i.length;
}
function a5(e) {
	let t = e[e.length - 1];
	return e.length > 0 && t[t.length - 1] < 0;
}
var a7 = {
	strict: !1,
	end: !0,
	sensitive: !1
};
function a9(e, t) {
	let r = {};
	for (let i of t) i in e && (r[i] = e[i]);
	return r;
}
function se(e) {
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
function st(e) {
	for (; e;) {
		if (e.record.aliasOf) return !0;
		e = e.parent;
	}
	return !1;
}
function sr({ record: e }) {
	return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function sn(e) {
	let t = n2(az), r = n2(aG), i = i1(() => {
		let r = rj(e.to);
		return t.resolve(r);
	}), o = i1(() => {
		let { matched: e } = i.value, { length: t } = e, o = e[t - 1], l = r.matched;
		if (!o || !l.length) return -1;
		let a = l.findIndex(ax.bind(null, o));
		if (a > -1) return a;
		let s = so(e[t - 2]);
		return t > 1 && so(o) === s && l[l.length - 1].path !== s ? l.findIndex(ax.bind(null, e[t - 2])) : a;
	}), l = i1(() => o.value > -1 && function(e, t) {
		for (let r in t) {
			let i = t[r], o = e[r];
			if ("string" == typeof i) {
				if (i !== o) return !1;
			} else if (!ae(o) || o.length !== i.length || i.some((e, t) => e !== o[t])) return !1;
		}
		return !0;
	}(r.params, i.value.params)), a = i1(() => o.value > -1 && o.value === r.matched.length - 1 && aS(r.params, i.value.params));
	return {
		route: i,
		href: i1(() => i.value.href),
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
				let r = t[rj(e.replace) ? "replace" : "push"](rj(e.to)).catch(l9);
				return e.viewTransition && "undefined" != typeof document && "startViewTransition" in document && document.startViewTransition(() => r), r;
			}
			return Promise.resolve();
		}
	};
}
var si = nh({
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
	useLink: sn,
	setup(e, { slots: t }) {
		let r = rc(sn(e)), { options: i } = n2(az), o = i1(() => ({
			[sl(e.activeClass, i.linkActiveClass, "router-link-active")]: r.isActive,
			[sl(e.exactActiveClass, i.linkExactActiveClass, "router-link-exact-active")]: r.isExactActive
		}));
		return () => {
			var i;
			let l = t.default && (1 === (i = t.default(r)).length ? i[0] : i);
			return e.custom ? l : i2("a", {
				"aria-current": r.isExactActive ? e.ariaCurrentValue : null,
				href: r.href,
				onClick: r.navigate,
				class: o.value
			}, l);
		};
	}
});
function so(e) {
	return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
var sl = (e, t, r) => null != e ? e : null != t ? t : r, sa = nh({
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
		let i = n2(aW), o = i1(() => e.route || i.value), l = n2(aU, 0), a = i1(() => {
			let e, t = rj(l), { matched: r } = o.value;
			for (; (e = r[t]) && !e.components;) t++;
			return t;
		}), s = i1(() => o.value.matched[a.value]);
		n1(aU, i1(() => a.value + 1)), n1(aB, s), n1(aW, o);
		let u = rO();
		return ih(() => [
			u.value,
			s.value,
			e.name
		], ([e, t, r], [i, o, l]) => {
			t && (t.instances[r] = e, o && o !== t && e && e === i && (t.leaveGuards.size || (t.leaveGuards = o.leaveGuards), t.updateGuards.size || (t.updateGuards = o.updateGuards))), !e || !t || o && ax(t, o) && i || (t.enterCallbacks[r] || []).forEach((t) => t(e));
		}, { flush: "post" }), () => {
			let i = o.value, l = e.name, a = s.value, c = a && a.components[l];
			if (!c) return ss(r.default, {
				Component: c,
				route: i
			});
			let f = a.props[l], p = i2(c, l5({}, f ? !0 === f ? i.params : "function" == typeof f ? f(i) : f : null, t, {
				onVnodeUnmounted: (e) => {
					e.component.isUnmounted && (a.instances[l] = null);
				},
				ref: u
			}));
			return ss(r.default, {
				Component: p,
				route: i
			}) || p;
		};
	}
});
function ss(e, t) {
	if (!e) return null;
	let r = e(t);
	return 1 === r.length ? r[0] : r;
}
function su(e) {
	let t, r, i, o = function(e, t) {
		let r = [], i = /* @__PURE__ */ new Map();
		function o(e, a, s) {
			let u, c, f = !s, p = se(e);
			p.aliasOf = s && s.record;
			let d = at(t, e), h = [p];
			if ("alias" in e) for (let t of "string" == typeof e.alias ? [e.alias] : e.alias) h.push(se(l5({}, p, {
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
					let i = l5(function(e, t) {
						let r = l5({}, a6, t), i = [], o = r.start ? "^" : "", l = [];
						for (let t of e) {
							let e = t.length ? [] : [a3.Root];
							r.strict && !t.length && (o += "/");
							for (let i = 0; i < t.length; i++) {
								let a = t[i], s = a3.Segment + (r.sensitive ? a3.BonusCaseSensitive : 0);
								if (a.type === aZ.Static) i || (o += "/"), o += a.value.replace(a4, "\\$&"), s += a3.Static;
								else if (a.type === aZ.Param) {
									let { value: e, repeatable: r, optional: u, regexp: c } = a;
									l.push({
										name: e,
										repeatable: r,
										optional: u
									});
									let f = c || a2;
									f !== a2 && (s += a3.BonusCustomRegExp);
									let p = r ? `((?:${f})(?:/(?:${f}))*)` : `(${f})`;
									i || (p = u && t.length < 2 ? `(?:/${p})` : "/" + p), u && (p += "?"), o += p, s += a3.Dynamic, u && (s += a3.BonusOptional), r && (s += a3.BonusRepeatable), ".*" === f && (s += a3.BonusWildcard);
								}
								e.push(s);
							}
							i.push(e);
						}
						if (r.strict && r.end) {
							let e = i.length - 1;
							i[e][i[e].length - 1] += a3.BonusStrict;
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
								for (let o of e) for (let e of (i && r.endsWith("/") || (r += "/"), i = !1, o)) if (e.type === aZ.Static) r += e.value;
								else if (e.type === aZ.Param) {
									let { value: l, repeatable: a, optional: s } = e, u = l in t ? t[l] : "";
									if (ae(u) && !a) throw Error(`Provided param "${l}" is an array but it is not repeatable (* or + modifiers)`);
									let c = ae(u) ? u.join("/") : u;
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
						if ("/" === e) return [[a0]];
						if (!e.startsWith("/")) throw Error(`Invalid path "${e}"`);
						function i(e) {
							throw Error(`ERR (${o})/"${c}": ${e}`);
						}
						let o = aQ.Static, l = o, a = [];
						function s() {
							t && a.push(t), t = [];
						}
						let u = 0, c = "", f = "";
						function p() {
							c && (o === aQ.Static ? t.push({
								type: aZ.Static,
								value: c
							}) : o === aQ.Param || o === aQ.ParamRegExp || o === aQ.ParamRegExpEnd ? (t.length > 1 && ("*" === r || "+" === r) && i(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`), t.push({
								type: aZ.Param,
								value: c,
								regexp: f,
								repeatable: "*" === r || "+" === r,
								optional: "*" === r || "?" === r
							})) : i("Invalid state to consume buffer"), c = "");
						}
						for (; u < e.length;) {
							if ("\\" === (r = e[u++]) && o !== aQ.ParamRegExp) {
								l = o, o = aQ.EscapeNext;
								continue;
							}
							switch (o) {
								case aQ.Static:
									"/" === r ? (c && p(), s()) : ":" === r ? (p(), o = aQ.Param) : c += r;
									break;
								case aQ.EscapeNext:
									c += r, o = l;
									break;
								case aQ.Param:
									"(" === r ? o = aQ.ParamRegExp : a1.test(r) ? c += r : (p(), o = aQ.Static, "*" !== r && "?" !== r && "+" !== r && u--);
									break;
								case aQ.ParamRegExp:
									")" === r ? "\\" == f[f.length - 1] ? f = f.slice(0, -1) + r : o = aQ.ParamRegExpEnd : f += r;
									break;
								case aQ.ParamRegExpEnd:
									p(), o = aQ.Static, "*" !== r && "?" !== r && "+" !== r && u--, f = "";
									break;
								default: i("Unknown state");
							}
						}
						return o === aQ.ParamRegExp && i(`Unfinished custom RegExp for param "${c}"`), p(), s(), a;
					}(e.path), r), {
						record: e,
						parent: t,
						children: [],
						alias: []
					});
					return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i), i;
				}(t, a, d), s ? s.alias.push(u) : ((c = c || u) !== u && c.alias.push(u), f && e.name && !st(u) && l(e.name)), sr(u) && function(e) {
					let t = function(e, t) {
						let r = 0, i = t.length;
						for (; r !== i;) {
							let o = r + i >> 1;
							0 > a8(e, t[o]) ? i = o : r = o + 1;
						}
						let o = function(e) {
							let t = e;
							for (; t = t.parent;) if (sr(t) && 0 === a8(e, t)) return t;
						}(e);
						return o && (i = t.lastIndexOf(o, i - 1)), i;
					}(e, r);
					r.splice(t, 0, e), e.record.name && !st(e) && i.set(e.record.name, e);
				}(u), p.children) {
					let e = p.children;
					for (let t = 0; t < e.length; t++) o(e[t], u, s && s.children[t]);
				}
				s = s || u;
			}
			return c ? () => {
				l(c);
			} : l9;
		}
		function l(e) {
			if (aT(e)) {
				let t = i.get(e);
				t && (i.delete(e), r.splice(r.indexOf(t), 1), t.children.forEach(l), t.alias.forEach(l));
			} else {
				let t = r.indexOf(e);
				t > -1 && (r.splice(t, 1), e.record.name && i.delete(e.record.name), e.children.forEach(l), e.alias.forEach(l));
			}
		}
		return t = at(a7, t), e.forEach((e) => o(e)), {
			addRoute: o,
			resolve: function(e, t) {
				let o, l, a, s = {};
				if ("name" in e && e.name) {
					if (!(o = i.get(e.name))) throw aD(aN.MATCHER_NOT_FOUND, { location: e });
					a = o.record.name, s = l5(a9(t.params, o.keys.filter((e) => !e.optional).concat(o.parent ? o.parent.keys.filter((e) => e.optional) : []).map((e) => e.name)), e.params && a9(e.params, o.keys.map((e) => e.name))), l = o.stringify(s);
				} else if (null != e.path) l = e.path, (o = r.find((e) => e.re.test(l))) && (s = o.parse(l), a = o.record.name);
				else {
					if (!(o = t.name ? i.get(t.name) : r.find((e) => e.re.test(t.path)))) throw aD(aN.MATCHER_NOT_FOUND, {
						location: e,
						currentLocation: t
					});
					a = o.record.name, s = l5({}, t.params, e.params), l = o.stringify(s);
				}
				let u = [], c = o;
				for (; c;) u.unshift(c.record), c = c.parent;
				return {
					name: a,
					path: l,
					params: s,
					matched: u,
					meta: u.reduce((e, t) => l5(e, t.meta), {})
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
	}(e.routes, e), l = e.parseQuery || aF, a = e.stringifyQuery || aV, s = e.history, u = aq(), c = aq(), f = aq(), p = rx(aj), d = aj;
	l4 && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
	let h = l7.bind(null, (e) => "" + e), y = l7.bind(null, ag), m = l7.bind(null, ab);
	function g(e, t) {
		var r;
		let i, u;
		if (t = l5({}, t || p.value), "string" == typeof e) {
			let r = aw(l, e, t.path), i = o.resolve({ path: r.path }, t), a = s.createHref(r.fullPath);
			return l5(r, i, {
				params: m(i.params),
				hash: ab(r.hash),
				redirectedFrom: void 0,
				href: a
			});
		}
		if (null != e.path) i = l5({}, e, { path: aw(l, e.path, t.path).path });
		else {
			let r = l5({}, e.params);
			for (let e in r) r[e] ?? delete r[e];
			i = l5({}, e, { params: y(r) }), t.params = y(t.params);
		}
		let c = o.resolve(i, t), f = e.hash || "";
		c.params = h(m(c.params));
		let d = (u = (r = l5({}, e, {
			hash: ay(f).replace(ap, "{").replace(ah, "}").replace(ac, "^"),
			path: c.path
		})).query ? a(r.query) : "", r.path + (u && "?") + u + (r.hash || "")), g = s.createHref(d);
		return l5({
			fullPath: d,
			hash: f,
			query: a === aV ? function(e) {
				let t = {};
				for (let r in e) {
					let i = e[r];
					void 0 !== i && (t[r] = ae(i) ? i.map((e) => null == e ? null : "" + e) : null == i ? i : "" + i);
				}
				return t;
			}(e.query) : e.query || {}
		}, c, {
			redirectedFrom: void 0,
			href: g
		});
	}
	function b(e) {
		return "string" == typeof e ? aw(l, e, p.value.path) : l5({}, e);
	}
	function _(e, t) {
		if (d !== e) return aD(aN.NAVIGATION_CANCELLED, {
			from: t,
			to: e
		});
	}
	function w(e, t) {
		let r = e.matched[e.matched.length - 1];
		if (r && r.redirect) {
			let { redirect: i } = r, o = "function" == typeof i ? i(e, t) : i;
			return "string" == typeof o && ((o = o.includes("?") || o.includes("#") ? o = b(o) : { path: o }).params = {}), l5({
				query: e.query,
				hash: e.hash,
				params: null != o.path ? {} : e.params
			}, o);
		}
	}
	function O(e, t) {
		let r, i, o, l = d = g(e), s = p.value, u = e.state, c = e.force, f = !0 === e.replace, h = w(l, s);
		return h ? O(l5(b(h), {
			state: "object" == typeof h ? l5({}, u, h.state) : u,
			force: c,
			replace: f
		}), t || l) : (l.redirectedFrom = t, !c && (i = s.matched.length - 1, o = l.matched.length - 1, i > -1 && i === o && ax(s.matched[i], l.matched[o]) && aS(s.params, l.params) && a(s.query) === a(l.query) && s.hash === l.hash) && (r = aD(aN.NAVIGATION_DUPLICATED, {
			to: l,
			from: s
		}), C(s, s, !0, !1)), (r ? Promise.resolve(r) : A(l, s)).catch((e) => aL(e) ? aL(e, aN.NAVIGATION_GUARD_REDIRECT) ? e : I(e) : R(e, l, s)).then((e) => {
			if (e) {
				if (aL(e, aN.NAVIGATION_GUARD_REDIRECT)) return O(l5({ replace: f }, b(e.to), {
					state: "object" == typeof e.to ? l5({}, u, e.to.state) : u,
					force: c
				}), t || l);
			} else e = E(l, s, !0, f, u);
			return j(l, s, e), e;
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
	function A(e, t) {
		let r, [i, o, l] = function(e, t) {
			let r = [], i = [], o = [], l = Math.max(t.matched.length, e.matched.length);
			for (let a = 0; a < l; a++) {
				let l = t.matched[a];
				l && (e.matched.find((e) => ax(e, l)) ? i.push(l) : r.push(l));
				let s = e.matched[a];
				s && !t.matched.find((e) => ax(e, s)) && o.push(s);
			}
			return [
				r,
				i,
				o
			];
		}(e, t);
		for (let o of (r = aH(i.reverse(), "beforeRouteLeave", e, t), i)) o.leaveGuards.forEach((i) => {
			r.push(aK(i, e, t));
		});
		let a = x.bind(null, e, t);
		return r.push(a), $(r).then(() => {
			for (let i of (r = [], u.list())) r.push(aK(i, e, t));
			return r.push(a), $(r);
		}).then(() => {
			for (let i of (r = aH(o, "beforeRouteUpdate", e, t), o)) i.updateGuards.forEach((i) => {
				r.push(aK(i, e, t));
			});
			return r.push(a), $(r);
		}).then(() => {
			for (let i of (r = [], l)) if (i.beforeEnter) if (ae(i.beforeEnter)) for (let o of i.beforeEnter) r.push(aK(o, e, t));
			else r.push(aK(i.beforeEnter, e, t));
			return r.push(a), $(r);
		}).then(() => (e.matched.forEach((e) => e.enterCallbacks = {}), (r = aH(l, "beforeRouteEnter", e, t, S)).push(a), $(r))).then(() => {
			for (let i of (r = [], c.list())) r.push(aK(i, e, t));
			return r.push(a), $(r);
		}).catch((e) => aL(e, aN.NAVIGATION_CANCELLED) ? e : Promise.reject(e));
	}
	function j(e, t, r) {
		f.list().forEach((i) => S(() => i(e, t, r)));
	}
	function E(e, t, r, i, o) {
		let l = _(e, t);
		if (l) return l;
		let a = t === aj, u = l4 ? history.state : {};
		r && (i || a ? s.replace(e.fullPath, l5({ scroll: a && u && u.scroll }, o)) : s.push(e.fullPath, o)), p.value = e, C(e, t, r, a), I();
	}
	let P = aq(), k = aq();
	function R(e, t, r) {
		I(e);
		let i = k.list();
		return i.length ? i.forEach((i) => i(e, t, r)) : console.error(e), Promise.reject(e);
	}
	function I(e) {
		return r || (r = !e, t || (t = s.listen((e, t, r) => {
			var i, o;
			if (!N.listening) return;
			let l = g(e), a = w(l, N.currentRoute.value);
			if (a) return void O(l5(a, {
				replace: !0,
				force: !0
			}), l).catch(l9);
			d = l;
			let u = p.value;
			l4 && (i = aC(u.fullPath, r.delta), o = aI(), aM.set(i, o)), A(l, u).catch((e) => aL(e, aN.NAVIGATION_ABORTED | aN.NAVIGATION_CANCELLED) ? e : aL(e, aN.NAVIGATION_GUARD_REDIRECT) ? (O(l5(b(e.to), { force: !0 }), l).then((e) => {
				aL(e, aN.NAVIGATION_ABORTED | aN.NAVIGATION_DUPLICATED) && !r.delta && r.type === aE.pop && s.go(-1, !1);
			}).catch(l9), Promise.reject()) : (r.delta && s.go(-r.delta, !1), R(e, l, u))).then((e) => {
				(e = e || E(l, u, !1)) && (r.delta && !aL(e, aN.NAVIGATION_CANCELLED) ? s.go(-r.delta, !1) : r.type === aE.pop && aL(e, aN.NAVIGATION_ABORTED | aN.NAVIGATION_DUPLICATED) && s.go(-1, !1)), j(l, u, e);
			}).catch(l9);
		})), P.list().forEach(([t, r]) => e ? r(e) : t()), P.reset()), e;
	}
	function C(t, r, i, o) {
		var l;
		let a, { scrollBehavior: s } = e;
		if (!l4 || !s) return Promise.resolve();
		let u = !i && (l = aC(t.fullPath, 0), a = aM.get(l), aM.delete(l), a) || (o || !i) && history.state && history.state.scroll || null;
		return rW().then(() => s(t, r, u)).then((e) => e && function(e) {
			let t;
			if ("el" in e) {
				let r, i, o = e.el, l = "string" == typeof o && o.startsWith("#"), a = "string" == typeof o ? l ? document.getElementById(o.slice(1)) : document.querySelector(o) : o;
				if (!a) return;
				r = document.documentElement.getBoundingClientRect(), i = a.getBoundingClientRect(), t = {
					behavior: e.behavior,
					left: i.left - r.left - (e.left || 0),
					top: i.top - r.top - (e.top || 0)
				};
			} else t = e;
			"scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(null != t.left ? t.left : window.scrollX, null != t.top ? t.top : window.scrollY);
		}(e)).catch((e) => R(e, t, r));
	}
	let M = (e) => s.go(e), T = /* @__PURE__ */ new Set(), N = {
		currentRoute: p,
		listening: !0,
		addRoute: function(e, t) {
			let r, i;
			return aT(e) ? (r = o.getRecordMatcher(e), i = t) : i = e, o.addRoute(i, r);
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
			return O(l5(b(e), { replace: !0 }));
		},
		go: M,
		back: () => M(-1),
		forward: () => M(1),
		beforeEach: u.add,
		beforeResolve: c.add,
		afterEach: f.add,
		onError: k.add,
		isReady: function() {
			return r && p.value !== aj ? Promise.resolve() : new Promise((e, t) => {
				P.add([e, t]);
			});
		},
		install(e) {
			e.component("RouterLink", si), e.component("RouterView", sa), e.config.globalProperties.$router = N, Object.defineProperty(e.config.globalProperties, "$route", {
				enumerable: !0,
				get: () => rj(p)
			}), l4 && !i && p.value === aj && (i = !0, O(s.location).catch((e) => {}));
			let o = {};
			for (let e in aj) Object.defineProperty(o, e, {
				get: () => p.value[e],
				enumerable: !0
			});
			e.provide(az, N), e.provide(aG, rf(o)), e.provide(aW, p);
			let l = e.unmount;
			T.add(e), e.unmount = function() {
				T.delete(e), T.size < 1 && (d = aj, t && t(), t = null, p.value = aj, i = !1, r = !1), l();
			};
		}
	};
	function $(e) {
		return e.reduce((e, t) => e.then(() => S(t)), Promise.resolve());
	}
	return N;
}
function sc() {
	return n2(az);
}
function sf(e) {
	return n2(aG);
}
let sp = si, sd = sa;
function sh(e) {
	return "function" == typeof e;
}
function sv(e) {
	var t = e(function(e) {
		Error.call(e), e.stack = Error().stack;
	});
	return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
}
var sy = sv(function(e) {
	return function(t) {
		e(this), this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map(function(e, t) {
			return t + 1 + ") " + e.toString();
		}).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t;
	};
});
function sm(e, t) {
	if (e) {
		var r = e.indexOf(t);
		0 <= r && e.splice(r, 1);
	}
}
var sg = function() {
	var e;
	function t(e) {
		this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null;
	}
	return t.prototype.unsubscribe = function() {
		if (!this.closed) {
			this.closed = !0;
			var e, t, r, o, a, s = this._parentage;
			if (s) if (this._parentage = null, Array.isArray(s)) try {
				for (var u = f(s), c = u.next(); !c.done; c = u.next()) c.value.remove(this);
			} catch (t) {
				e = { error: t };
			} finally {
				try {
					c && !c.done && (t = u.return) && t.call(u);
				} finally {
					if (e) throw e.error;
				}
			}
			else s.remove(this);
			var p = this.initialTeardown;
			if (sh(p)) try {
				p();
			} catch (e) {
				a = e instanceof sy ? e.errors : [e];
			}
			var d = this._finalizers;
			if (d) {
				this._finalizers = null;
				try {
					for (var h = f(d), y = h.next(); !y.done; y = h.next()) {
						var m = y.value;
						try {
							sw(m);
						} catch (e) {
							a = null != a ? a : [], e instanceof sy ? a = l(l([], i(a)), i(e.errors)) : a.push(e);
						}
					}
				} catch (e) {
					r = { error: e };
				} finally {
					try {
						y && !y.done && (o = h.return) && o.call(h);
					} finally {
						if (r) throw r.error;
					}
				}
			}
			if (a) throw new sy(a);
		}
	}, t.prototype.add = function(e) {
		var r;
		if (e && e !== this) if (this.closed) sw(e);
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
		t === e ? this._parentage = null : Array.isArray(t) && sm(t, e);
	}, t.prototype.remove = function(e) {
		var r = this._finalizers;
		r && sm(r, e), e instanceof t && e._removeParent(this);
	}, (e = new t()).closed = !0, t.EMPTY = e, t;
}(), sb = sg.EMPTY;
function s_(e) {
	return e instanceof sg || e && "closed" in e && sh(e.remove) && sh(e.add) && sh(e.unsubscribe);
}
function sw(e) {
	sh(e) ? e() : e.unsubscribe();
}
var sO = void 0, sx = {
	setTimeout: function(e, t) {
		for (var r = [], o = 2; o < arguments.length; o++) r[o - 2] = arguments[o];
		var a = sx.delegate;
		return (null == a ? void 0 : a.setTimeout) ? a.setTimeout.apply(a, l([e, t], i(r))) : setTimeout.apply(void 0, l([e, t], i(r)));
	},
	clearTimeout: function(e) {
		var t = sx.delegate;
		return ((null == t ? void 0 : t.clearTimeout) || clearTimeout)(e);
	},
	delegate: void 0
};
function sS(e) {
	sx.setTimeout(function() {
		throw e;
	});
}
function sA() {}
var sj = sE("C", void 0, void 0);
function sE(e, t, r) {
	return {
		kind: e,
		value: t,
		error: r
	};
}
function sk(e) {
	e();
}
var sR = function(e) {
	function t(t) {
		var r = e.call(this) || this;
		return r.isStopped = !1, t ? (r.destination = t, s_(t) && t.add(r)) : r.destination = sD, r;
	}
	return s(t, e), t.create = function(e, t, r) {
		return new sT(e, t, r);
	}, t.prototype.next = function(e) {
		this.isStopped ? s$(sE("N", e, void 0), this) : this._next(e);
	}, t.prototype.error = function(e) {
		this.isStopped ? s$(sE("E", void 0, e), this) : (this.isStopped = !0, this._error(e));
	}, t.prototype.complete = function() {
		this.isStopped ? s$(sj, this) : (this.isStopped = !0, this._complete());
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
}(sg);
Function.prototype.bind;
var sM = function() {
	function e(e) {
		this.partialObserver = e;
	}
	return e.prototype.next = function(e) {
		var t = this.partialObserver;
		if (t.next) try {
			t.next(e);
		} catch (e) {
			sN(e);
		}
	}, e.prototype.error = function(e) {
		var t = this.partialObserver;
		if (t.error) try {
			t.error(e);
		} catch (e) {
			sN(e);
		}
		else sN(e);
	}, e.prototype.complete = function() {
		var e = this.partialObserver;
		if (e.complete) try {
			e.complete();
		} catch (e) {
			sN(e);
		}
	}, e;
}(), sT = function(e) {
	function t(t, r, i) {
		var o, a = e.call(this) || this;
		return sh(t) || !t ? o = {
			next: null != t ? t : void 0,
			error: null != r ? r : void 0,
			complete: null != i ? i : void 0
		} : o = t, a.destination = new sM(o), a;
	}
	return s(t, e), t;
}(sR);
function sN(e) {
	sS(e);
}
function s$(e, t) {}
var sD = {
	closed: !0,
	next: sA,
	error: function(e) {
		throw e;
	},
	complete: sA
}, sL = "function" == typeof Symbol && Symbol.observable || "@@observable";
function sF(e) {
	return e;
}
function sV(e) {
	return 0 === e.length ? sF : 1 === e.length ? e[0] : function(t) {
		return e.reduce(function(e, t) {
			return t(e);
		}, t);
	};
}
var sB = function() {
	function e(e) {
		e && (this._subscribe = e);
	}
	return e.prototype.lift = function(t) {
		var r = new e();
		return r.source = this, r.operator = t, r;
	}, e.prototype.subscribe = function(e, t, r) {
		var i = this, o = !function(e) {
			return e && e instanceof sR || e && sh(e.next) && sh(e.error) && sh(e.complete) && s_(e);
		}(e) ? new sT(e, t, r) : e;
		return sk(function() {
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
		return new (t = (sU(t)))(function(t, i) {
			var o = new sT({
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
	}, e.prototype[sL] = function() {
		return this;
	}, e.prototype.pipe = function() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		return sV(e)(this);
	}, e.prototype.toPromise = function(e) {
		var t = this;
		return new (e = (sU(e)))(function(e, r) {
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
function sU(e) {
	var t;
	return null != (t = null != e ? e : sO) ? t : Promise;
}
function sz(e) {
	return function(t) {
		if (sh(null == t ? void 0 : t.lift)) return t.lift(function(t) {
			try {
				return e(t, this);
			} catch (e) {
				this.error(e);
			}
		});
		throw TypeError("Unable to lift unknown Observable type");
	};
}
function sG(e, t, r, i, o) {
	return new sW(e, t, r, i, o);
}
var sW = function(e) {
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
	return s(t, e), t.prototype.unsubscribe = function() {
		var t;
		if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
			var r = this.closed;
			e.prototype.unsubscribe.call(this), r || null == (t = this.onFinalize) || t.call(this);
		}
	}, t;
}(sR), sq = sv(function(e) {
	return function() {
		e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
	};
}), sK = function(e) {
	function t() {
		var t = e.call(this) || this;
		return t.closed = !1, t.currentObservers = null, t.observers = [], t.isStopped = !1, t.hasError = !1, t.thrownError = null, t;
	}
	return s(t, e), t.prototype.lift = function(e) {
		var t = new sH(this, this);
		return t.operator = e, t;
	}, t.prototype._throwIfClosed = function() {
		if (this.closed) throw new sq();
	}, t.prototype.next = function(e) {
		var t = this;
		sk(function() {
			var r, i;
			if (t._throwIfClosed(), !t.isStopped) {
				t.currentObservers || (t.currentObservers = Array.from(t.observers));
				try {
					for (var o = f(t.currentObservers), l = o.next(); !l.done; l = o.next()) l.value.next(e);
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
		sk(function() {
			if (t._throwIfClosed(), !t.isStopped) {
				t.hasError = t.isStopped = !0, t.thrownError = e;
				for (var r = t.observers; r.length;) r.shift().error(e);
			}
		});
	}, t.prototype.complete = function() {
		var e = this;
		sk(function() {
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
		return r || i ? sb : (this.currentObservers = null, o.push(e), new sg(function() {
			t.currentObservers = null, sm(o, e);
		}));
	}, t.prototype._checkFinalizedStatuses = function(e) {
		var t = this.hasError, r = this.thrownError, i = this.isStopped;
		t ? e.error(r) : i && e.complete();
	}, t.prototype.asObservable = function() {
		var e = new sB();
		return e.source = this, e;
	}, t.create = function(e, t) {
		return new sH(e, t);
	}, t;
}(sB), sH = function(e) {
	function t(t, r) {
		var i = e.call(this) || this;
		return i.destination = t, i.source = r, i;
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
		return null != (r = null == (t = this.source) ? void 0 : t.subscribe(e)) ? r : sb;
	}, t;
}(sK), sY = function(e) {
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
}(sK), sJ = {
	now: function() {
		return (sJ.delegate || Date).now();
	},
	delegate: void 0
}, sX = function(e) {
	function t(t, r) {
		return e.call(this) || this;
	}
	return s(t, e), t.prototype.schedule = function(e, t) {
		return void 0 === t && (t = 0), this;
	}, t;
}(sg), sZ = {
	setInterval: function(e, t) {
		for (var r = [], o = 2; o < arguments.length; o++) r[o - 2] = arguments[o];
		var a = sZ.delegate;
		return (null == a ? void 0 : a.setInterval) ? a.setInterval.apply(a, l([e, t], i(r))) : setInterval.apply(void 0, l([e, t], i(r)));
	},
	clearInterval: function(e) {
		var t = sZ.delegate;
		return ((null == t ? void 0 : t.clearInterval) || clearInterval)(e);
	},
	delegate: void 0
}, sQ = function(e) {
	function t(t, r) {
		var i = e.call(this, t, r) || this;
		return i.scheduler = t, i.work = r, i.pending = !1, i;
	}
	return s(t, e), t.prototype.schedule = function(e, t) {
		if (void 0 === t && (t = 0), this.closed) return this;
		this.state = e;
		var r, i = this.id, o = this.scheduler;
		return null != i && (this.id = this.recycleAsyncId(o, i, t)), this.pending = !0, this.delay = t, this.id = null != (r = this.id) ? r : this.requestAsyncId(o, this.id, t), this;
	}, t.prototype.requestAsyncId = function(e, t, r) {
		return void 0 === r && (r = 0), sZ.setInterval(e.flush.bind(e, this), r);
	}, t.prototype.recycleAsyncId = function(e, t, r) {
		if (void 0 === r && (r = 0), null != r && this.delay === r && !1 === this.pending) return t;
		null != t && sZ.clearInterval(t);
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
			this.work = this.state = this.scheduler = null, this.pending = !1, sm(i, this), null != t && (this.id = this.recycleAsyncId(r, t, null)), this.delay = null, e.prototype.unsubscribe.call(this);
		}
	}, t;
}(sX), s0 = function() {
	function e(t, r) {
		void 0 === r && (r = e.now), this.schedulerActionCtor = t, this.now = r;
	}
	return e.prototype.schedule = function(e, t, r) {
		return void 0 === t && (t = 0), new this.schedulerActionCtor(this, e).schedule(r, t);
	}, e.now = sJ.now, e;
}(), s1 = new (function(e) {
	function t(t, r) {
		void 0 === r && (r = s0.now);
		var i = e.call(this, t, r) || this;
		return i.actions = [], i._active = !1, i;
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
}(s0))(sQ), s2 = new sB(function(e) {
	return e.complete();
});
function s6(e) {
	return e && sh(e.schedule);
}
function s3(e) {
	return e[e.length - 1];
}
function s4(e) {
	return s6(s3(e)) ? e.pop() : void 0;
}
var s8 = function(e) {
	return e && "number" == typeof e.length && "function" != typeof e;
};
function s5(e) {
	return sh(null == e ? void 0 : e.then);
}
function s7(e) {
	return Symbol.asyncIterator && sh(null == e ? void 0 : e[Symbol.asyncIterator]);
}
function s9(e) {
	return TypeError("You provided " + (null !== e && "object" == typeof e ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
var ue = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";
function ut(e) {
	return sh(null == e ? void 0 : e[ue]);
}
function ur(e) {
	return a(this, arguments, function() {
		var t, r, i;
		return c(this, function(l) {
			switch (l.label) {
				case 0: t = e.getReader(), l.label = 1;
				case 1: l.trys.push([
					1,
					,
					9,
					10
				]), l.label = 2;
				case 2: return [4, o(t.read())];
				case 3:
					if (i = (r = l.sent()).value, !r.done) return [3, 5];
					return [4, o(void 0)];
				case 4: return [2, l.sent()];
				case 5: return [4, o(i)];
				case 6: return [4, l.sent()];
				case 7: return l.sent(), [3, 2];
				case 8: return [3, 10];
				case 9: return t.releaseLock(), [7];
				case 10: return [2];
			}
		});
	});
}
function un(e) {
	return sh(null == e ? void 0 : e.getReader);
}
function ui(e) {
	if (e instanceof sB) return e;
	if (null != e) {
		var t, r, i, o;
		if (sh(e[sL])) return t = e, new sB(function(e) {
			var r = t[sL]();
			if (sh(r.subscribe)) return r.subscribe(e);
			throw TypeError("Provided object does not correctly implement Symbol.observable");
		});
		if (s8(e)) return r = e, new sB(function(e) {
			for (var t = 0; t < r.length && !e.closed; t++) e.next(r[t]);
			e.complete();
		});
		if (s5(e)) return i = e, new sB(function(e) {
			i.then(function(t) {
				e.closed || (e.next(t), e.complete());
			}, function(t) {
				return e.error(t);
			}).then(null, sS);
		});
		if (s7(e)) return uo(e);
		if (ut(e)) return o = e, new sB(function(e) {
			var t, r;
			try {
				for (var i = f(o), l = i.next(); !l.done; l = i.next()) {
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
		if (un(e)) return uo(ur(e));
	}
	throw s9(e);
}
function uo(e) {
	return new sB(function(t) {
		(function(e, t) {
			var i, o, l, a;
			return r(this, void 0, void 0, function() {
				var r;
				return c(this, function(s) {
					switch (s.label) {
						case 0: s.trys.push([
							0,
							5,
							6,
							11
						]), i = u(e), s.label = 1;
						case 1: return [4, i.next()];
						case 2:
							if ((o = s.sent()).done) return [3, 4];
							if (r = o.value, t.next(r), t.closed) return [2];
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
							]), !(o && !o.done && (a = i.return))) return [3, 8];
							return [4, a.call(i)];
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
function ul(e, t, r, i, o) {
	void 0 === i && (i = 0), void 0 === o && (o = !1);
	var l = t.schedule(function() {
		r(), o ? e.add(this.schedule(null, i)) : this.unsubscribe();
	}, i);
	if (e.add(l), !o) return l;
}
function ua(e, t) {
	return void 0 === t && (t = 0), sz(function(r, i) {
		r.subscribe(sG(i, function(r) {
			return ul(i, e, function() {
				return i.next(r);
			}, t);
		}, function() {
			return ul(i, e, function() {
				return i.complete();
			}, t);
		}, function(r) {
			return ul(i, e, function() {
				return i.error(r);
			}, t);
		}));
	});
}
function us(e, t) {
	return void 0 === t && (t = 0), sz(function(r, i) {
		i.add(e.schedule(function() {
			return r.subscribe(i);
		}, t));
	});
}
function uu(e, t) {
	if (!e) throw Error("Iterable cannot be null");
	return new sB(function(r) {
		ul(r, t, function() {
			var i = e[Symbol.asyncIterator]();
			ul(r, t, function() {
				i.next().then(function(e) {
					e.done ? r.complete() : r.next(e.value);
				});
			}, 0, !0);
		});
	});
}
function uc(e, t) {
	return t ? function(e, t) {
		if (null != e) {
			if (sh(e[sL])) return ui(e).pipe(us(t), ua(t));
			if (s8(e)) return new sB(function(r) {
				var i = 0;
				return t.schedule(function() {
					i === e.length ? r.complete() : (r.next(e[i++]), r.closed || this.schedule());
				});
			});
			if (s5(e)) return ui(e).pipe(us(t), ua(t));
			if (s7(e)) return uu(e, t);
			if (ut(e)) return new sB(function(r) {
				var i;
				return ul(r, t, function() {
					i = e[ue](), ul(r, t, function() {
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
					return sh(null == i ? void 0 : i.return) && i.return();
				};
			});
			if (un(e)) return uu(ur(e), t);
		}
		throw s9(e);
	}(e, t) : ui(e);
}
function uf() {
	for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
	return uc(e, s4(e));
}
function up(e, t) {
	return sz(function(r, i) {
		var o = 0;
		r.subscribe(sG(i, function(r) {
			i.next(e.call(t, r, o++));
		}));
	});
}
var ud = Array.isArray;
function uh(e) {
	return up(function(t) {
		return ud(t) ? e.apply(void 0, l([], i(t))) : e(t);
	});
}
var uv = Array.isArray, uy = Object.getPrototypeOf, um = Object.prototype, ug = Object.keys;
function ub() {
	for (var e, t, r, i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
	var l = s4(i), a = sh(s3(i)) ? i.pop() : void 0, s = function(e) {
		if (1 === e.length) {
			var t, r = e[0];
			if (uv(r)) return {
				args: r,
				keys: null
			};
			if ((t = r) && "object" == typeof t && uy(t) === um) {
				var i = ug(r);
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
	if (0 === u.length) return uc([], l);
	var f = new sB((e = u, t = l, void 0 === (r = c ? function(e) {
		return c.reduce(function(t, r, i) {
			return t[r] = e[i], t;
		}, {});
	} : sF) && (r = sF), function(i) {
		(function(e, t, r) {
			e ? ul(r, e, t) : t();
		})(t, function() {
			for (var o = e.length, l = Array(o), a = o, s = o, u = function(o) {
				(function(e, t, r) {
					e ? ul(r, e, t) : t();
				})(t, function() {
					var u = uc(e[o], t), c = !1;
					u.subscribe(sG(i, function(e) {
						l[o] = e, !c && (c = !0, s--), s || i.next(r(l.slice()));
					}, function() {
						--a || i.complete();
					}));
				}, i);
			}, c = 0; c < o; c++) u(c);
		}, i);
	}));
	return a ? f.pipe(uh(a)) : f;
}
function u_(e, t, r) {
	return (void 0 === r && (r = Infinity), sh(t)) ? u_(function(r, i) {
		return up(function(e, o) {
			return t(r, e, i, o);
		})(ui(e(r, i)));
	}, r) : ("number" == typeof t && (r = t), sz(function(t, i) {
		var o, l, a, s, u, c, f, p;
		return o = r, l = [], a = 0, s = 0, u = !1, c = function() {
			!u || l.length || a || i.complete();
		}, f = function(e) {
			return a < o ? p(e) : l.push(e);
		}, p = function(t) {
			a++;
			var r = !1;
			ui(e(t, s++)).subscribe(sG(i, function(e) {
				i.next(e);
			}, function() {
				r = !0;
			}, void 0, function() {
				if (r) try {
					for (a--; l.length && a < o;) (function() {
						var e = l.shift();
						p(e);
					})();
					c();
				} catch (e) {
					i.error(e);
				}
			}));
		}, t.subscribe(sG(i, f, function() {
			u = !0, c();
		})), function() {};
	}));
}
function uw(e) {
	return void 0 === e && (e = Infinity), u_(sF, e);
}
var uO = ["addListener", "removeListener"], ux = ["addEventListener", "removeEventListener"], uS = ["on", "off"];
function uA(e, t, r, o) {
	if (sh(r) && (o = r, r = void 0), o) return uA(e, t, r).pipe(uh(o));
	var l, a, s, u = i(sh((l = e).addEventListener) && sh(l.removeEventListener) ? ux.map(function(i) {
		return function(o) {
			return e[i](t, o, r);
		};
	}) : sh((a = e).addListener) && sh(a.removeListener) ? uO.map(uj(e, t)) : sh((s = e).on) && sh(s.off) ? uS.map(uj(e, t)) : [], 2), c = u[0], f = u[1];
	if (!c && s8(e)) return u_(function(e) {
		return uA(e, t, r);
	})(ui(e));
	if (!c) throw TypeError("Invalid event target");
	return new sB(function(e) {
		var t = function() {
			for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
			return e.next(1 < t.length ? t : t[0]);
		};
		return c(t), function() {
			return f(t);
		};
	});
}
function uj(e, t) {
	return function(r) {
		return function(i) {
			return e[r](t, i);
		};
	};
}
function uE(e, t, r) {
	void 0 === e && (e = 0), void 0 === r && (r = s1);
	var i = -1;
	return null != t && (s6(t) ? r = t : i = t), new sB(function(t) {
		var o, l = (o = e) instanceof Date && !isNaN(o) ? e - r.now() : e;
		l < 0 && (l = 0);
		var a = 0;
		return r.schedule(function() {
			t.closed || (t.next(a++), 0 <= i ? this.schedule(void 0, i) : t.complete());
		}, l);
	});
}
function uP() {
	for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
	var i = s4(t), o = (e = Infinity, "number" == typeof s3(t) ? t.pop() : e);
	return t.length ? 1 === t.length ? ui(t[0]) : uw(o)(uc(t, i)) : s2;
}
function uk(e, t) {
	return sz(function(r, i) {
		var o = 0;
		r.subscribe(sG(i, function(r) {
			return e.call(t, r, o++) && i.next(r);
		}));
	});
}
function uR(e) {
	return sz(function(t, r) {
		var i, o = null, l = !1;
		o = t.subscribe(sG(r, void 0, void 0, function(a) {
			i = ui(e(a, uR(e)(t))), o ? (o.unsubscribe(), o = null, i.subscribe(r)) : l = !0;
		})), l && (o.unsubscribe(), o = null, i.subscribe(r));
	});
}
function uI(e, t) {
	return void 0 === t && (t = s1), sz(function(r, i) {
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
		r.subscribe(sG(i, function(r) {
			l = r, a = t.now(), o || (o = t.schedule(u, e), i.add(o));
		}, function() {
			s(), i.complete();
		}, void 0, function() {
			l = o = null;
		}));
	});
}
function uC(e) {
	return e <= 0 ? function() {
		return s2;
	} : sz(function(t, r) {
		var i = 0;
		t.subscribe(sG(r, function(t) {
			++i <= e && (r.next(t), e <= i && r.complete());
		}));
	});
}
function uM() {
	return sz(function(e, t) {
		e.subscribe(sG(t, sA));
	});
}
function uT(e, t) {
	void 0 === t && (t = s1);
	var r = uE(e, t);
	return function e(t, r) {
		return r ? function(i) {
			return function() {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				return uw(1)(uc(e, s4(e)));
			}(r.pipe(uC(1), uM()), i.pipe(e(t)));
		} : u_(function(e, r) {
			return ui(t(e, r)).pipe(uC(1), up(function() {
				return e;
			}));
		});
	}(function() {
		return r;
	});
}
function uN(e, t) {
	return void 0 === t && (t = sF), e = null != e ? e : u$, sz(function(r, i) {
		var o, l = !0;
		r.subscribe(sG(i, function(r) {
			var a = t(r);
			(l || !e(o, a)) && (l = !1, o = a, i.next(r));
		}));
	});
}
function u$(e, t) {
	return e === t;
}
function uD(e) {
	return uk(function(t, r) {
		return e <= r;
	});
}
function uL(e, t) {
	return sz(function(r, i) {
		var o = null, l = 0, a = !1, s = function() {
			return a && !o && i.complete();
		};
		r.subscribe(sG(i, function(r) {
			o?.unsubscribe();
			var a = 0, u = l++;
			ui(e(r, u)).subscribe(o = sG(i, function(e) {
				return i.next(t ? t(r, e, u, a++) : e);
			}, function() {
				o = null, s();
			}));
		}, function() {
			a = !0, s();
		}));
	});
}
function uF(e, t, r) {
	var i = sh(e) || t || r ? {
		next: e,
		error: t,
		complete: r
	} : e;
	return i ? sz(function(e, t) {
		null == (r = i.subscribe) || r.call(i);
		var r, o = !0;
		e.subscribe(sG(t, function(e) {
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
	}) : sF;
}
function uV(e, ...t) {
	return (function() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		return sV(e);
	})(...t)(uc(e));
}
var uB = class e extends sB {
	static seed(t) {
		return new e(t);
	}
	_value;
	_subject$ = new sK();
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
		let r = eN(e) ? oM(this._value ?? t, e) : e;
		Object.is(r, this._value) || this._subject$.next(this._value = r);
	}
};
let uU = Symbol("forwardRef");
function uz(e) {
	let t = e;
	return new rk((e, r) => ({
		get: () => (e(), t),
		set(e) {
			let i = e?.[uU] ?? e;
			i !== t && (t = i, r());
		}
	}));
}
function uG(e) {
	return (t) => {
		let r = t.subscribe(e);
		nR(() => r.unsubscribe());
	};
}
function uW(e) {
	return (t) => {
		let r;
		nE(() => {
			r = t.subscribe(e);
		}), nR(() => r?.unsubscribe());
	};
}
let uq = (e) => {
	let t = new uB(e), r = new rk((e, r) => ({
		get: () => (e(), t.value),
		set(e) {
			let i = e?.[uU] ?? e;
			Object.is(i, t.value) || (t.next(i), r());
		}
	}));
	return new Proxy(t, {
		get: (e, i) => "next" === i ? (e) => {
			r.value = eN(e) ? oM(t.value, e) : e;
		} : "value" === i ? r.value : t[i] ?? r[i],
		set: (e, t, i) => ("value" === t ? r.value = i : e[t] = i, !0)
	});
};
var uK = (e) => "function" == typeof e ? e : Array.isArray(e) ? () => e : void 0 === e ? e : () => e, uH = (e, t, r) => uY(e, t, r), uY = (e, t, r) => {
	let i, [o, l] = ((e, t) => {
		let { children: r, ...i } = e;
		if (r && !Array.isArray(r) && !iM(r) && "object" == typeof r) return [t ? {
			...i,
			key: t
		} : i, r];
		let o = {}, l = {}, a = !1;
		for (let e in i) {
			let t = i[e];
			if (e.startsWith("$")) {
				l[e.slice(1)] = uK(t), a = !0;
				continue;
			}
			o[e] = t;
		}
		let s = uK(r);
		return s && (l.default = s, a = !0), [t ? {
			...o,
			key: t
		} : o, a ? l : void 0];
	})(t, r);
	return (i = e) === ij || "string" == typeof i || "object" == typeof i && i.__isTeleport ? i2(e, o, l?.default?.() ?? (e === ij ? [] : void 0)) : i2(e, o, l);
};
function uJ(e) {
	return (t) => uY(uX, {
		renderFn$: t.pipe(up((t) => () => e(t))),
		children: {}
	});
}
var uX = l6({ renderFn$: lD() }, (e, t) => {
	let r = null;
	uV(e.renderFn$, uF((e) => {
		r = e;
	}), uG());
	let i = uq(1);
	return uV(e.renderFn$, uF(() => {
		i.value += 1;
	}), uW()), () => i.value ? r?.() : null;
}, { name: "RxSlot" }, { displayName: "RxSlot" });
let uZ = (e, t) => {
	let r = new sY(e[t]);
	return ih(() => e[t], (e) => r.next(e)), r;
};
function uQ(...e) {
	let t, r = {}, i = {};
	for (let o of e) {
		if (eN(o)) {
			t = o;
			continue;
		}
		e$(t) ? r = o : i = o;
	}
	return l6(r, (e, r) => {
		let i = ((e) => {
			let t = {};
			for (let i in e) {
				var r;
				if (eN(e[i]) || (r = e[i]) && (r instanceof sB || sh(r.lift) && sh(r.subscribe))) {
					t[i] = e[i];
					continue;
				}
				t[`${i}$`] = uZ(e, i);
			}
			return t;
		})(e), o = new Proxy({}, { get: (t, r) => e[r] ?? i[r] }), l = new Proxy({}, { get: (e, t) => "render" === t ? uJ : r[t] }), a = t(o, l);
		return eN(a) ? a : () => a;
	}, i);
}
let u0 = (e) => {
	let t, r = null;
	return uF({
		next: (i) => {
			((e, t) => {
				if (em(e) && em(t)) {
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
function u1(...e) {
	let t, r, i = {}, o = {};
	for (let r of e) {
		if (eN(r)) {
			t = r;
			continue;
		}
		e$(t) ? i = r : o = r;
	}
	let l = Symbol(o?.name ?? "");
	if (eL(i) && eL(o.props)) {
		let e, r = () => e ??= t({});
		return l3(l6({
			value: lD().optional(),
			$default: lD().optional()
		}, (e, { slots: t }) => (n1(l, e.value ?? r()), () => t.default?.()), {
			...o,
			name: `Provide(${o?.name ?? ""})`
		}, { displayName: "Provider" }), { use: () => n2(l, r, !0) });
	}
	let a = lP(i);
	return l3(l6({
		...i,
		$default: lD().optional()
	}, (e, { slots: i }) => (n1(l, r = t(e)), () => i.default?.()), {
		...o,
		name: `Provide(${o?.name ?? ""})`
	}, { displayName: "Provider" }), { use: () => n2(l, () => r ??= t(a.create({})), !0) });
}
export { lP as $, ef as $t, uf as A, e5 as At, sf as B, e$ as Bt, uk as C, ta as Ct, u_ as D, e6 as Dt, uA as E, t_ as Et, sB as F, tp as Ft, lz as G, eR as Gt, l6 as H, eT as Ht, sp as I, eW as It, lu as J, eO as Jt, lU as K, ek as Kt, sd as L, eG as Lt, s2 as M, tb as Mt, sY as N, e4 as Nt, ub as O, e3 as Ot, sK as P, e8 as Pt, lA as Q, ep as Qt, su as R, ez as Rt, uR as S, ti as St, uE as T, tl as Tt, l1 as U, eM as Ut, sc as V, eN as Vt, l2 as W, eC as Wt, lx as X, eg as Xt, lI as Y, e_ as Yt, lD as Z, em as Zt, uD as _, nI as _t, uJ as a, oW as at, uM as b, rx as bt, uq as c, ij as ct, uU as d, iL as dt, eu as en, lk as et, uz as f, ia as ft, uL as g, nE as gt, uF as h, nR as ht, uZ as i, oD as it, uc as j, eX as jt, up as k, eZ as kt, uW as l, r9 as lt, uV as m, nj as mt, u0 as n, O as nn, oJ as nt, uY as o, ns as ot, uB as p, i2 as pt, lB as q, ej as qt, uQ as r, _ as rn, oq as rt, uH as s, no as st, u1 as t, eo as tn, lp as tt, uG as u, r$ as ut, uN as v, ih as vt, uP as w, eQ as wt, uI as x, rj as xt, uT as y, rO as yt, aX as z, eL as zt };
