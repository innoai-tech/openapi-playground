import { t as m } from "./vendor-min-mermaid~chunk-GTKDMUJJ.DL2Iapv7.chunk.js";
import { C as X, E as Yt, K as y, L as lt, P as j, f as M, i as B, j as d, l as K, m as N, o as G, t as $ } from "./vendor-min-mermaid~chunk-A4ITRWGT.Q-yxLqnU.chunk.js";
var T = /* @__PURE__ */ Yt(Object.keys, Object);
var D = Object.prototype.hasOwnProperty;
function K$1(r) {
	if (!K(r)) return T(r);
	var t = [];
	for (var o in Object(r)) D.call(r, o) && o != "constructor" && t.push(o);
	return t;
}
m(K$1, "baseKeys");
var O = K$1;
var s = /* @__PURE__ */ j(d, "DataView");
var c = /* @__PURE__ */ j(d, "Promise");
var g = /* @__PURE__ */ j(d, "Set");
var u = /* @__PURE__ */ j(d, "WeakMap");
var M$1 = "[object Map]", E = "[object Object]", h = "[object Promise]", x = "[object Set]", k = "[object WeakMap]", l = "[object DataView]", G$1 = /* @__PURE__ */ lt(s), L = /* @__PURE__ */ lt(B), q = /* @__PURE__ */ lt(c), F = /* @__PURE__ */ lt(g), H = /* @__PURE__ */ lt(u), p = y;
(s && p(new s(/* @__PURE__ */ new ArrayBuffer(1))) != l || B && p(new B()) != M$1 || c && p(/* @__PURE__ */ c.resolve()) != h || g && p(new g()) != x || u && p(new u()) != k) && (p = /* @__PURE__ */ m(function(r) {
	var t = /* @__PURE__ */ y(r), o = t == E ? r.constructor : void 0, w = o ? lt(o) : "";
	if (w) switch (w) {
		case G$1: return l;
		case L: return M$1;
		case q: return h;
		case F: return x;
		case H: return k;
	}
	return t;
}, "getTag"));
var A = p;
var I = "[object Map]", J = "[object Set]", R = Object.prototype.hasOwnProperty;
function U(r) {
	if (r == null) return !0;
	if (M(r) && (N(r) || typeof r == "string" || typeof r.splice == "function" || $(r) || X(r) || G(r))) return !r.length;
	var t = /* @__PURE__ */ A(r);
	if (t == I || t == J) return !r.size;
	if (K(r)) return !O(r).length;
	for (var o in r) if (R.call(r, o)) return !1;
	return !0;
}
m(U, "isEmpty");
var Cr = U;
export { g as i, Cr as n, O as r, A as t };
