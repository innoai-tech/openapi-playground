var h = Object.create;
var e = Object.defineProperty;
var i = Object.getOwnPropertyDescriptor;
var j = Object.getOwnPropertyNames;
var k = Object.getPrototypeOf, l = Object.prototype.hasOwnProperty;
var m = (b, a) => e(b, "name", {
	value: a,
	configurable: !0
});
var n = (b, a) => () => (a || b((a = { exports: {} }).exports, a), a.exports), o = (b, a) => {
	for (var c in a) e(b, c, {
		get: a[c],
		enumerable: !0
	});
}, f = (b, a, c, g) => {
	if (a && typeof a == "object" || typeof a == "function") for (let d of j(a)) !l.call(b, d) && d !== c && e(b, d, {
		get: () => a[d],
		enumerable: !(g = /* @__PURE__ */ i(a, d)) || g.enumerable
	});
	return b;
}, p = (b, a, c) => (f(b, a, "default"), c && f(c, a, "default")), q = (b, a, c) => (c = b != null ? h(/* @__PURE__ */ k(b)) : {}, f(a || !b || !b.__esModule ? e(c, "default", {
	value: b,
	enumerable: !0
}) : c, b));
export { q as a, p as i, n, o as r, m as t };
