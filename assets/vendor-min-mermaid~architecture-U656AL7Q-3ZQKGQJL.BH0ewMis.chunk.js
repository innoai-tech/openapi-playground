var h$3 = Object.create;
var e = Object.defineProperty;
var i = Object.getOwnPropertyDescriptor;
var j$3 = Object.getOwnPropertyNames;
var k$3 = Object.getPrototypeOf, l$1 = Object.prototype.hasOwnProperty;
var m = (b$1, a) => e(b$1, "name", {
	value: a,
	configurable: !0
});
var n = (b$1, a) => () => (a || b$1((a = { exports: {} }).exports, a), a.exports), o = (b$1, a) => {
	for (var c$2 in a) e(b$1, c$2, {
		get: a[c$2],
		enumerable: !0
	});
}, f = (b$1, a, c$2, g$3) => {
	if (a && typeof a == "object" || typeof a == "function") for (let d$1 of j$3(a)) !l$1.call(b$1, d$1) && d$1 !== c$2 && e(b$1, d$1, {
		get: () => a[d$1],
		enumerable: !(g$3 = /* @__PURE__ */ i(a, d$1)) || g$3.enumerable
	});
	return b$1;
}, p = (b$1, a, c$2) => (f(b$1, a, "default"), c$2 && f(c$2, a, "default")), q = (b$1, a, c$2) => (c$2 = b$1 != null ? h$3(/* @__PURE__ */ k$3(b$1)) : {}, f(a || !b$1 || !b$1.__esModule ? e(c$2, "default", {
	value: b$1,
	enumerable: !0
}) : c$2, b$1));
var R$1 = typeof global == "object" && global && global.Object === Object && global;
var Ir$2 = typeof self == "object" && self && self.Object === Object && self, d = R$1 || Ir$2 || Function("return this")();
var O$1 = d.Symbol;
var it$1 = Object.prototype, Fr$2 = it$1.hasOwnProperty, Lr$2 = it$1.toString, F$2 = O$1 ? O$1.toStringTag : void 0;
function Dr$2(t) {
	var r = /* @__PURE__ */ Fr$2.call(t, F$2), o$1 = t[F$2];
	try {
		t[F$2] = void 0;
		var a = !0;
	} catch {}
	var n$1 = /* @__PURE__ */ Lr$2.call(t);
	return a && (r ? t[F$2] = o$1 : delete t[F$2]), n$1;
}
m(Dr$2, "getRawTag");
var ft$1 = Dr$2;
var Nr$2 = Object.prototype.toString;
function zr$2(t) {
	return Nr$2.call(t);
}
m(zr$2, "objectToString");
var pt$1 = zr$2;
var Ur$2 = "[object Null]", Rr$2 = "[object Undefined]", ut$1 = O$1 ? O$1.toStringTag : void 0;
function Hr$2(t) {
	return t == null ? t === void 0 ? Rr$2 : Ur$2 : ut$1 && ut$1 in Object(t) ? ft$1(t) : pt$1(t);
}
m(Hr$2, "baseGetTag");
var y = Hr$2;
function Br$2(t) {
	var r = typeof t;
	return t != null && (r == "object" || r == "function");
}
m(Br$2, "isObject");
var m$1 = Br$2;
var Vr$2 = "[object AsyncFunction]", Kr$2 = "[object Function]", qr$2 = "[object GeneratorFunction]", $r$1 = "[object Proxy]";
function Xr$2(t) {
	if (!m$1(t)) return !1;
	var r = /* @__PURE__ */ y(t);
	return r == Kr$2 || r == qr$2 || r == Vr$2 || r == $r$1;
}
m(Xr$2, "isFunction");
var T$1 = Xr$2;
var H$3 = d["__core-js_shared__"];
var st$1 = /* @__PURE__ */ function() {
	var t = /* @__PURE__ */ /[^.]+$/.exec(H$3 && H$3.keys && H$3.keys.IE_PROTO || "");
	return t ? "Symbol(src)_1." + t : "";
}();
function Wr$2(t) {
	return !!st$1 && st$1 in t;
}
m(Wr$2, "isMasked");
var mt$1 = Wr$2;
var Zr$2 = Function.prototype.toString;
function Qr$2(t) {
	if (t != null) {
		try {
			return Zr$2.call(t);
		} catch {}
		try {
			return t + "";
		} catch {}
	}
	return "";
}
m(Qr$2, "toSource");
var lt$1 = Qr$2;
var kr$1 = /[\\^$.*+?()[\]{}|]/g, te$1 = /^\[object .+?Constructor\]$/, re$1 = Function.prototype, ee$1 = Object.prototype, oe$1 = re$1.toString, ae$2 = ee$1.hasOwnProperty, ne$2 = /* @__PURE__ */ RegExp("^" + oe$1.call(ae$2).replace(kr$1, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function ie$2(t) {
	if (!m$1(t) || mt$1(t)) return !1;
	return (T$1(t) ? ne$2 : te$1).test(/* @__PURE__ */ lt$1(t));
}
m(ie$2, "baseIsNative");
var ct$1 = ie$2;
function fe$2(t, r) {
	return t?.[r];
}
m(fe$2, "getValue");
var dt$1 = fe$2;
function pe$1(t, r) {
	var o$1 = /* @__PURE__ */ dt$1(t, r);
	return ct$1(o$1) ? o$1 : void 0;
}
m(pe$1, "getNative");
var j$2 = pe$1;
var g$2 = /* @__PURE__ */ j$2(Object, "create");
function se$2() {
	this.__data__ = g$2 ? g$2(null) : {}, this.size = 0;
}
m(se$2, "hashClear");
var ht$2 = se$2;
function me$2(t) {
	var r = this.has(t) && delete this.__data__[t];
	return this.size -= r ? 1 : 0, r;
}
m(me$2, "hashDelete");
var gt$1 = me$2;
var le$2 = "__lodash_hash_undefined__", de$1 = Object.prototype.hasOwnProperty;
function he(t) {
	var r = this.__data__;
	if (g$2) {
		var o$1 = r[t];
		return o$1 === le$2 ? void 0 : o$1;
	}
	return de$1.call(r, t) ? r[t] : void 0;
}
m(he, "hashGet");
var yt$2 = he;
var ye$2 = Object.prototype.hasOwnProperty;
function be$1(t) {
	var r = this.__data__;
	return g$2 ? r[t] !== void 0 : ye$2.call(r, t);
}
m(be$1, "hashHas");
var bt$2 = be$1;
var xe$1 = "__lodash_hash_undefined__";
function ve$1(t, r) {
	var o$1 = this.__data__;
	return this.size += this.has(t) ? 0 : 1, o$1[t] = g$2 && r === void 0 ? xe$1 : r, this;
}
m(ve$1, "hashSet");
var xt = ve$1;
function A$2(t) {
	var r = -1, o$1 = t == null ? 0 : t.length;
	for (this.clear(); ++r < o$1;) {
		var a = t[r];
		this.set(a[0], a[1]);
	}
}
m(A$2, "Hash");
A$2.prototype.clear = ht$2;
A$2.prototype.delete = gt$1;
A$2.prototype.get = yt$2;
A$2.prototype.has = bt$2;
A$2.prototype.set = xt;
var k$2 = A$2;
function _e$1() {
	this.__data__ = [], this.size = 0;
}
m(_e$1, "listCacheClear");
var vt$1 = _e$1;
function Oe$1(t, r) {
	return t === r || t !== t && r !== r;
}
m(Oe$1, "eq");
var b = Oe$1;
function Te$1(t, r) {
	for (var o$1 = t.length; o$1--;) if (b(t[o$1][0], r)) return o$1;
	return -1;
}
m(Te$1, "assocIndexOf");
var x$1 = Te$1;
var Ae$1 = Array.prototype.splice;
function Ce$2(t) {
	var r = this.__data__, o$1 = /* @__PURE__ */ x$1(r, t);
	if (o$1 < 0) return !1;
	var a = r.length - 1;
	return o$1 == a ? r.pop() : Ae$1.call(r, o$1, 1), --this.size, !0;
}
m(Ce$2, "listCacheDelete");
var _t$2 = Ce$2;
function we$2(t) {
	var r = this.__data__, o$1 = /* @__PURE__ */ x$1(r, t);
	return o$1 < 0 ? void 0 : r[o$1][1];
}
m(we$2, "listCacheGet");
var Ot$2 = we$2;
function Pe$1(t) {
	return x$1(this.__data__, t) > -1;
}
m(Pe$1, "listCacheHas");
var Tt$1 = Pe$1;
function Se$2(t, r) {
	var o$1 = this.__data__, a = /* @__PURE__ */ x$1(o$1, t);
	return a < 0 ? (++this.size, o$1.push([t, r])) : o$1[a][1] = r, this;
}
m(Se$2, "listCacheSet");
var jt$2 = Se$2;
function C$1(t) {
	var r = -1, o$1 = t == null ? 0 : t.length;
	for (this.clear(); ++r < o$1;) {
		var a = t[r];
		this.set(a[0], a[1]);
	}
}
m(C$1, "ListCache");
C$1.prototype.clear = vt$1;
C$1.prototype.delete = _t$2;
C$1.prototype.get = Ot$2;
C$1.prototype.has = Tt$1;
C$1.prototype.set = jt$2;
var v$2 = C$1;
var B = /* @__PURE__ */ j$2(d, "Map");
function Me$2() {
	this.size = 0, this.__data__ = {
		hash: new k$2(),
		map: new (B || v$2)(),
		string: new k$2()
	};
}
m(Me$2, "mapCacheClear");
var At$1 = Me$2;
function Ee$2(t) {
	var r = typeof t;
	return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
}
m(Ee$2, "isKeyable");
var Ct$2 = Ee$2;
function Fe$2(t, r) {
	var o$1 = t.__data__;
	return Ct$2(r) ? o$1[typeof r == "string" ? "string" : "hash"] : o$1.map;
}
m(Fe$2, "getMapData");
var _$1 = Fe$2;
function Le$1(t) {
	var r = /* @__PURE__ */ _$1(this, t).delete(t);
	return this.size -= r ? 1 : 0, r;
}
m(Le$1, "mapCacheDelete");
var wt$2 = Le$1;
function De$2(t) {
	return _$1(this, t).get(t);
}
m(De$2, "mapCacheGet");
var Pt$2 = De$2;
function Ge$2(t) {
	return _$1(this, t).has(t);
}
m(Ge$2, "mapCacheHas");
var St$2 = Ge$2;
function Ne$1(t, r) {
	var o$1 = /* @__PURE__ */ _$1(this, t), a = o$1.size;
	return o$1.set(t, r), this.size += o$1.size == a ? 0 : 1, this;
}
m(Ne$1, "mapCacheSet");
var It$2 = Ne$1;
function w$2(t) {
	var r = -1, o$1 = t == null ? 0 : t.length;
	for (this.clear(); ++r < o$1;) {
		var a = t[r];
		this.set(a[0], a[1]);
	}
}
m(w$2, "MapCache");
w$2.prototype.clear = At$1;
w$2.prototype.delete = wt$2;
w$2.prototype.get = Pt$2;
w$2.prototype.has = St$2;
w$2.prototype.set = It$2;
var L = w$2;
var ze$2 = "Expected a function";
function tt$1(t, r) {
	if (typeof t != "function" || r != null && typeof r != "function") throw new TypeError(ze$2);
	var o$1 = m(function() {
		var a = arguments, n$1 = r ? r.apply(this, a) : a[0], f$1 = o$1.cache;
		if (f$1.has(n$1)) return f$1.get(n$1);
		var p$2 = /* @__PURE__ */ t.apply(this, a);
		return o$1.cache = f$1.set(n$1, p$2) || f$1, p$2;
	}, "memoized");
	return o$1.cache = new (tt$1.Cache || L)(), o$1;
}
m(tt$1, "memoize");
tt$1.Cache = L;
var ki$1 = tt$1;
function Ue$1(t) {
	return function() {
		return t;
	};
}
m(Ue$1, "constant");
var Mt$1 = Ue$1;
function Re$2() {
	this.__data__ = new v$2(), this.size = 0;
}
m(Re$2, "stackClear");
var Et$1 = Re$2;
function He$2(t) {
	var r = this.__data__, o$1 = /* @__PURE__ */ r.delete(t);
	return this.size = r.size, o$1;
}
m(He$2, "stackDelete");
var Ft$1 = He$2;
function Be$2(t) {
	return this.__data__.get(t);
}
m(Be$2, "stackGet");
var Lt$2 = Be$2;
function Ve$1(t) {
	return this.__data__.has(t);
}
m(Ve$1, "stackHas");
var Dt$1 = Ve$1;
var Ke$1 = 200;
function qe$2(t, r) {
	var o$1 = this.__data__;
	if (o$1 instanceof v$2) {
		var a = o$1.__data__;
		if (!B || a.length < Ke$1 - 1) return a.push([t, r]), this.size = ++o$1.size, this;
		o$1 = this.__data__ = new L(a);
	}
	return o$1.set(t, r), this.size = o$1.size, this;
}
m(qe$2, "stackSet");
var Gt$1 = qe$2;
function P(t) {
	this.size = (this.__data__ = new v$2(t)).size;
}
m(P, "Stack");
P.prototype.clear = Et$1;
P.prototype.delete = Ft$1;
P.prototype.get = Lt$2;
P.prototype.has = Dt$1;
P.prototype.set = Gt$1;
var Nt$1 = P;
var S$2 = /* @__PURE__ */ function() {
	try {
		var t = /* @__PURE__ */ j$2(Object, "defineProperty");
		return t({}, "", {}), t;
	} catch {}
}();
function Xe$1(t, r, o$1) {
	r == "__proto__" && S$2 ? S$2(t, r, {
		configurable: !0,
		enumerable: !0,
		value: o$1,
		writable: !0
	}) : t[r] = o$1;
}
m(Xe$1, "baseAssignValue");
var I = Xe$1;
function Je$2(t, r, o$1) {
	(o$1 !== void 0 && !b(t[r], o$1) || o$1 === void 0 && !(r in t)) && I(t, r, o$1);
}
m(Je$2, "assignMergeValue");
var D$3 = Je$2;
function We$2(t) {
	return function(r, o$1, a) {
		for (var n$1 = -1, f$1 = /* @__PURE__ */ Object(r), p$2 = /* @__PURE__ */ a(r), i$1 = p$2.length; i$1--;) {
			var s$1 = p$2[t ? i$1 : ++n$1];
			if (o$1(f$1[s$1], s$1, f$1) === !1) break;
		}
		return r;
	};
}
m(We$2, "createBaseFor");
var Ut$1 = /* @__PURE__ */ We$2();
var Vt$2 = typeof exports == "object" && exports && !exports.nodeType && exports, Rt$1 = Vt$2 && typeof module == "object" && module && !module.nodeType && module, Ht$1 = Rt$1 && Rt$1.exports === Vt$2 ? d.Buffer : void 0, Bt$2 = Ht$1 ? Ht$1.allocUnsafe : void 0;
function Qe$2(t, r) {
	if (r) return t.slice();
	var o$1 = t.length, a = Bt$2 ? Bt$2(o$1) : new t.constructor(o$1);
	return t.copy(a), a;
}
m(Qe$2, "cloneBuffer");
var Kt$1 = Qe$2;
var rt$1 = d.Uint8Array;
function to$2(t) {
	var r = new t.constructor(t.byteLength);
	return new rt$1(r).set(new rt$1(t)), r;
}
m(to$2, "cloneArrayBuffer");
var qt = to$2;
function ro$2(t, r) {
	var o$1 = r ? qt(t.buffer) : t.buffer;
	return new t.constructor(o$1, t.byteOffset, t.length);
}
m(ro$2, "cloneTypedArray");
var $t$1 = ro$2;
function eo$2(t, r) {
	var o$1 = -1, a = t.length;
	for (r || (r = /* @__PURE__ */ Array(a)); ++o$1 < a;) r[o$1] = t[o$1];
	return r;
}
m(eo$2, "copyArray");
var Xt = eo$2;
var Jt$2 = Object.create, Wt$2 = /* @__PURE__ */ function() {
	function t() {}
	return m(t, "object"), function(r) {
		if (!m$1(r)) return {};
		if (Jt$2) return Jt$2(r);
		t.prototype = r;
		var o$1 = new t();
		return t.prototype = void 0, o$1;
	};
}();
function ao$2(t, r) {
	return function(o$1) {
		return t(/* @__PURE__ */ r(o$1));
	};
}
m(ao$2, "overArg");
var Yt$1 = ao$2;
var V = /* @__PURE__ */ Yt$1(Object.getPrototypeOf, Object);
var io$2 = Object.prototype;
function fo(t) {
	var r = t && t.constructor, o$1 = typeof r == "function" && r.prototype || io$2;
	return t === o$1;
}
m(fo, "isPrototype");
var K$1 = fo;
function po$2(t) {
	return typeof t.constructor == "function" && !K$1(t) ? Wt$2(/* @__PURE__ */ V(t)) : {};
}
m(po$2, "initCloneObject");
var Zt$1 = po$2;
function uo$2(t) {
	return t != null && typeof t == "object";
}
m(uo$2, "isObjectLike");
var h$1 = uo$2;
var so$2 = "[object Arguments]";
function mo$2(t) {
	return h$1(t) && y(t) == so$2;
}
m(mo$2, "baseIsArguments");
var et = mo$2;
var Qt$2 = Object.prototype, lo$2 = Qt$2.hasOwnProperty, co = Qt$2.propertyIsEnumerable, G$1 = et(/* @__PURE__ */ function() {
	return arguments;
}()) ? et : function(t) {
	return h$1(t) && lo$2.call(t, "callee") && !co.call(t, "callee");
};
var N = Array.isArray;
var yo$1 = 9007199254740991;
function bo$2(t) {
	return typeof t == "number" && t > -1 && t % 1 == 0 && t <= yo$1;
}
m(bo$2, "isLength");
var q$2 = bo$2;
function xo$1(t) {
	return t != null && q$2(t.length) && !T$1(t);
}
m(xo$1, "isArrayLike");
var M = xo$1;
function vo$2(t) {
	return h$1(t) && M(t);
}
m(vo$2, "isArrayLikeObject");
var kt = vo$2;
function _o$2() {
	return !1;
}
m(_o$2, "stubFalse");
var tr$2 = _o$2;
var or$2 = typeof exports == "object" && exports && !exports.nodeType && exports, rr$2 = or$2 && typeof module == "object" && module && !module.nodeType && module, er$2 = rr$2 && rr$2.exports === or$2 ? d.Buffer : void 0, $ = (er$2 ? er$2.isBuffer : void 0) || tr$2;
var Ao$1 = "[object Object]", Co$2 = Function.prototype, wo$2 = Object.prototype, ar$2 = Co$2.toString, Po$2 = wo$2.hasOwnProperty, So$2 = /* @__PURE__ */ ar$2.call(Object);
function Io$2(t) {
	if (!h$1(t) || y(t) != Ao$1) return !1;
	var r = /* @__PURE__ */ V(t);
	if (r === null) return !0;
	var o$1 = Po$2.call(r, "constructor") && r.constructor;
	return typeof o$1 == "function" && o$1 instanceof o$1 && ar$2.call(o$1) == So$2;
}
m(Io$2, "isPlainObject");
var nr$1 = Io$2;
var Mo$2 = "[object Arguments]", Eo$2 = "[object Array]", Fo$2 = "[object Boolean]", Lo$2 = "[object Date]", Do$2 = "[object Error]", Go$2 = "[object Function]", No$2 = "[object Map]", zo$2 = "[object Number]", Uo$2 = "[object Object]", Ro$2 = "[object RegExp]", Ho$2 = "[object Set]", Bo$2 = "[object String]", Vo$2 = "[object WeakMap]", Ko$2 = "[object ArrayBuffer]", qo$2 = "[object DataView]", $o$2 = "[object Float32Array]", Xo$2 = "[object Float64Array]", Jo$2 = "[object Int8Array]", Wo$2 = "[object Int16Array]", Yo$2 = "[object Int32Array]", Zo$2 = "[object Uint8Array]", Qo$2 = "[object Uint8ClampedArray]", ko$2 = "[object Uint16Array]", ta$2 = "[object Uint32Array]", u$1 = {};
u$1[$o$2] = u$1[Xo$2] = u$1[Jo$2] = u$1[Wo$2] = u$1[Yo$2] = u$1[Zo$2] = u$1[Qo$2] = u$1[ko$2] = u$1[ta$2] = !0;
u$1[Mo$2] = u$1[Eo$2] = u$1[Ko$2] = u$1[Fo$2] = u$1[qo$2] = u$1[Lo$2] = u$1[Do$2] = u$1[Go$2] = u$1[No$2] = u$1[zo$2] = u$1[Uo$2] = u$1[Ro$2] = u$1[Ho$2] = u$1[Bo$2] = u$1[Vo$2] = !1;
function ra$2(t) {
	return h$1(t) && q$2(t.length) && !!u$1[y(t)];
}
m(ra$2, "baseIsTypedArray");
var ir$1 = ra$2;
function ea$2(t) {
	return function(r) {
		return t(r);
	};
}
m(ea$2, "baseUnary");
var fr$1 = ea$2;
var pr$2 = typeof exports == "object" && exports && !exports.nodeType && exports, z$1 = pr$2 && typeof module == "object" && module && !module.nodeType && module, ot = z$1 && z$1.exports === pr$2 && R$1.process, at$1 = /* @__PURE__ */ function() {
	try {
		return z$1 && z$1.require && z$1.require("util").types || ot && ot.binding && ot.binding("util");
	} catch {}
}();
var ur$1 = at$1 && at$1.isTypedArray, X$1 = ur$1 ? fr$1(ur$1) : ir$1;
function ia$2(t, r) {
	if (!(r === "constructor" && typeof t[r] == "function") && r != "__proto__") return t[r];
}
m(ia$2, "safeGet");
var U$3 = ia$2;
var pa$2 = Object.prototype.hasOwnProperty;
function ua$2(t, r, o$1) {
	var a = t[r];
	(!(pa$2.call(t, r) && b(a, o$1)) || o$1 === void 0 && !(r in t)) && I(t, r, o$1);
}
m(ua$2, "assignValue");
var sr$1 = ua$2;
function sa$2(t, r, o$1, a) {
	var n$1 = !o$1;
	o$1 || (o$1 = {});
	for (var f$1 = -1, p$2 = r.length; ++f$1 < p$2;) {
		var i$1 = r[f$1], s$1 = a ? a(o$1[i$1], t[i$1], i$1, o$1, t) : void 0;
		s$1 === void 0 && (s$1 = t[i$1]), n$1 ? I(o$1, i$1, s$1) : sr$1(o$1, i$1, s$1);
	}
	return o$1;
}
m(sa$2, "copyObject");
var mr$1 = sa$2;
function ma$2(t, r) {
	for (var o$1 = -1, a = /* @__PURE__ */ Array(t); ++o$1 < t;) a[o$1] = /* @__PURE__ */ r(o$1);
	return a;
}
m(ma$2, "baseTimes");
var lr$1 = ma$2;
var la$2 = 9007199254740991, ca = /^(?:0|[1-9]\d*)$/;
function da$1(t, r) {
	var o$1 = typeof t;
	return r = r ?? la$2, !!r && (o$1 == "number" || o$1 != "symbol" && ca.test(t)) && t > -1 && t % 1 == 0 && t < r;
}
m(da$1, "isIndex");
var J$1 = da$1;
var ga$2 = Object.prototype.hasOwnProperty;
function ya$2(t, r) {
	var o$1 = /* @__PURE__ */ N(t), a = !o$1 && G$1(t), n$1 = !o$1 && !a && $(t), f$1 = !o$1 && !a && !n$1 && X$1(t), p$2 = o$1 || a || n$1 || f$1, i$1 = p$2 ? lr$1(t.length, String) : [], s$1 = i$1.length;
	for (var c$2 in t) (r || ga$2.call(t, c$2)) && !(p$2 && (c$2 == "length" || n$1 && (c$2 == "offset" || c$2 == "parent") || f$1 && (c$2 == "buffer" || c$2 == "byteLength" || c$2 == "byteOffset") || J$1(c$2, s$1))) && i$1.push(c$2);
	return i$1;
}
m(ya$2, "arrayLikeKeys");
var cr$1 = ya$2;
function ba$1(t) {
	var r = [];
	if (t != null) for (var o$1 in Object(t)) r.push(o$1);
	return r;
}
m(ba$1, "nativeKeysIn");
var dr$1 = ba$1;
var va$2 = Object.prototype.hasOwnProperty;
function _a$2(t) {
	if (!m$1(t)) return dr$1(t);
	var r = /* @__PURE__ */ K$1(t), o$1 = [];
	for (var a in t) a == "constructor" && (r || !va$2.call(t, a)) || o$1.push(a);
	return o$1;
}
m(_a$2, "baseKeysIn");
var hr$1 = _a$2;
function Oa$2(t) {
	return M(t) ? cr$1(t, !0) : hr$1(t);
}
m(Oa$2, "keysIn");
var W$1 = Oa$2;
function Ta$2(t) {
	return mr$1(t, /* @__PURE__ */ W$1(t));
}
m(Ta$2, "toPlainObject");
var gr$1 = Ta$2;
function ja$2(t, r, o$1, a, n$1, f$1, p$2) {
	var i$1 = /* @__PURE__ */ U$3(t, o$1), s$1 = /* @__PURE__ */ U$3(r, o$1), c$2 = /* @__PURE__ */ p$2.get(s$1);
	if (c$2) {
		D$3(t, o$1, c$2);
		return;
	}
	var l$2 = f$1 ? f$1(i$1, s$1, o$1 + "", t, r, p$2) : void 0, E$1 = l$2 === void 0;
	if (E$1) {
		var Z$2 = /* @__PURE__ */ N(s$1), Q$2 = !Z$2 && $(s$1), nt$1 = !Z$2 && !Q$2 && X$1(s$1);
		l$2 = s$1, Z$2 || Q$2 || nt$1 ? N(i$1) ? l$2 = i$1 : kt(i$1) ? l$2 = /* @__PURE__ */ Xt(i$1) : Q$2 ? (E$1 = !1, l$2 = /* @__PURE__ */ Kt$1(s$1, !0)) : nt$1 ? (E$1 = !1, l$2 = /* @__PURE__ */ $t$1(s$1, !0)) : l$2 = [] : nr$1(s$1) || G$1(s$1) ? (l$2 = i$1, G$1(i$1) ? l$2 = /* @__PURE__ */ gr$1(i$1) : (!m$1(i$1) || T$1(i$1)) && (l$2 = /* @__PURE__ */ Zt$1(s$1))) : E$1 = !1;
	}
	E$1 && (p$2.set(s$1, l$2), n$1(l$2, s$1, a, f$1, p$2), p$2.delete(s$1)), D$3(t, o$1, l$2);
}
m(ja$2, "baseMergeDeep");
var yr$1 = ja$2;
function br$1(t, r, o$1, a, n$1) {
	t !== r && Ut$1(r, function(f$1, p$2) {
		if (n$1 || (n$1 = new Nt$1()), m$1(f$1)) yr$1(t, r, p$2, o$1, br$1, a, n$1);
		else {
			var i$1 = a ? a(/* @__PURE__ */ U$3(t, p$2), f$1, p$2 + "", t, r, n$1) : void 0;
			i$1 === void 0 && (i$1 = f$1), D$3(t, p$2, i$1);
		}
	}, W$1);
}
m(br$1, "baseMerge");
var xr$1 = br$1;
function Aa$1(t) {
	return t;
}
m(Aa$1, "identity");
var Y = Aa$1;
function Ca$2(t, r, o$1) {
	switch (o$1.length) {
		case 0: return t.call(r);
		case 1: return t.call(r, o$1[0]);
		case 2: return t.call(r, o$1[0], o$1[1]);
		case 3: return t.call(r, o$1[0], o$1[1], o$1[2]);
	}
	return t.apply(r, o$1);
}
m(Ca$2, "apply");
var vr$2 = Ca$2;
var _r$2 = Math.max;
function wa$2(t, r, o$1) {
	return r = /* @__PURE__ */ _r$2(r === void 0 ? t.length - 1 : r, 0), function() {
		for (var a = arguments, n$1 = -1, f$1 = /* @__PURE__ */ _r$2(a.length - r, 0), p$2 = /* @__PURE__ */ Array(f$1); ++n$1 < f$1;) p$2[n$1] = a[r + n$1];
		n$1 = -1;
		for (var i$1 = /* @__PURE__ */ Array(r + 1); ++n$1 < r;) i$1[n$1] = a[n$1];
		return i$1[r] = /* @__PURE__ */ o$1(p$2), vr$2(t, this, i$1);
	};
}
m(wa$2, "overRest");
var Or$1 = wa$2;
var Tr$2 = S$2 ? function(t, r) {
	return S$2(t, "toString", {
		configurable: !0,
		enumerable: !1,
		value: /* @__PURE__ */ Mt$1(r),
		writable: !0
	});
} : Y;
var Sa$2 = 800, Ia$2 = 16, Ma$1 = Date.now;
function Ea$2(t) {
	var r = 0, o$1 = 0;
	return function() {
		var a = /* @__PURE__ */ Ma$1(), n$1 = Ia$2 - (a - o$1);
		if (o$1 = a, n$1 > 0) {
			if (++r >= Sa$2) return arguments[0];
		} else r = 0;
		return t.apply(void 0, arguments);
	};
}
m(Ea$2, "shortOut");
var Ar$1 = /* @__PURE__ */ Ea$2(Tr$2);
function La$2(t, r) {
	return Ar$1(/* @__PURE__ */ Or$1(t, r, Y), t + "");
}
m(La$2, "baseRest");
var Cr$2 = La$2;
function Da$1(t, r, o$1) {
	if (!m$1(o$1)) return !1;
	var a = typeof r;
	return (a == "number" ? M(o$1) && J$1(r, o$1.length) : a == "string" && r in o$1) ? b(o$1[r], t) : !1;
}
m(Da$1, "isIterateeCall");
var wr$1 = Da$1;
function Ga$2(t) {
	return Cr$2(function(r, o$1) {
		var a = -1, n$1 = o$1.length, f$1 = n$1 > 1 ? o$1[n$1 - 1] : void 0, p$2 = n$1 > 2 ? o$1[2] : void 0;
		for (f$1 = t.length > 3 && typeof f$1 == "function" ? (n$1--, f$1) : void 0, p$2 && wr$1(o$1[0], o$1[1], p$2) && (f$1 = n$1 < 3 ? void 0 : f$1, n$1 = 1), r = /* @__PURE__ */ Object(r); ++a < n$1;) {
			var i$1 = o$1[a];
			i$1 && t(r, i$1, a, f$1);
		}
		return r;
	});
}
m(Ga$2, "createAssigner");
var Pr$1 = Ga$2;
var qs$1 = /* @__PURE__ */ Pr$1(function(t, r, o$1) {
	xr$1(t, r, o$1);
});
var T$2 = /* @__PURE__ */ Yt$1(Object.keys, Object);
var D$2 = Object.prototype.hasOwnProperty;
function K$2(r) {
	if (!K$1(r)) return T$2(r);
	var t = [];
	for (var o$1 in Object(r)) D$2.call(r, o$1) && o$1 != "constructor" && t.push(o$1);
	return t;
}
m(K$2, "baseKeys");
var O = K$2;
var s = /* @__PURE__ */ j$2(d, "DataView");
var c$1 = /* @__PURE__ */ j$2(d, "Promise");
var g = /* @__PURE__ */ j$2(d, "Set");
var u = /* @__PURE__ */ j$2(d, "WeakMap");
var M$1 = "[object Map]", E = "[object Object]", h$2 = "[object Promise]", x = "[object Set]", k$1 = "[object WeakMap]", l = "[object DataView]", G$2 = /* @__PURE__ */ lt$1(s), L$1 = /* @__PURE__ */ lt$1(B), q$3 = /* @__PURE__ */ lt$1(c$1), F$1 = /* @__PURE__ */ lt$1(g), H$2 = /* @__PURE__ */ lt$1(u), p$1 = y;
(s && p$1(new s(/* @__PURE__ */ new ArrayBuffer(1))) != l || B && p$1(new B()) != M$1 || c$1 && p$1(/* @__PURE__ */ c$1.resolve()) != h$2 || g && p$1(new g()) != x || u && p$1(new u()) != k$1) && (p$1 = /* @__PURE__ */ m(function(r) {
	var t = /* @__PURE__ */ y(r), o$1 = t == E ? r.constructor : void 0, w$3 = o$1 ? lt$1(o$1) : "";
	if (w$3) switch (w$3) {
		case G$2: return l;
		case L$1: return M$1;
		case q$3: return h$2;
		case F$1: return x;
		case H$2: return k$1;
	}
	return t;
}, "getTag"));
var A$1 = p$1;
var I$1 = "[object Map]", J$3 = "[object Set]", R = Object.prototype.hasOwnProperty;
function U$2(r) {
	if (r == null) return !0;
	if (M(r) && (N(r) || typeof r == "string" || typeof r.splice == "function" || $(r) || X$1(r) || G$1(r))) return !r.length;
	var t = /* @__PURE__ */ A$1(r);
	if (t == I$1 || t == J$3) return !r.size;
	if (K$1(r)) return !O(r).length;
	for (var o$1 in r) if (R.call(r, o$1)) return !1;
	return !0;
}
m(U$2, "isEmpty");
var Cr = U$2;
function io$1(r) {
	return M(r) ? cr$1(r) : O(r);
}
m(io$1, "keys");
var h = io$1;
function mo$1(r, t) {
	for (var o$1 = -1, f$1 = r == null ? 0 : r.length; ++o$1 < f$1 && t(r[o$1], o$1, r) !== !1;);
	return r;
}
m(mo$1, "arrayEach");
var Ar$2 = mo$1;
function po$1(r, t) {
	return r && mr$1(t, /* @__PURE__ */ h(t), r);
}
m(po$1, "baseAssign");
var bt$1 = po$1;
function uo$1(r, t) {
	return r && mr$1(t, /* @__PURE__ */ W$1(t), r);
}
m(uo$1, "baseAssignIn");
var ht$1 = uo$1;
function so$1(r, t) {
	for (var o$1 = -1, f$1 = r == null ? 0 : r.length, a = 0, n$1 = []; ++o$1 < f$1;) {
		var i$1 = r[o$1];
		t(i$1, o$1, r) && (n$1[a++] = i$1);
	}
	return n$1;
}
m(so$1, "arrayFilter");
var Z$1 = so$1;
function lo$1() {
	return [];
}
m(lo$1, "stubArray");
var Or$2 = lo$1;
var go$1 = Object.prototype.propertyIsEnumerable, yt$1 = Object.getOwnPropertySymbols, $$1 = yt$1 ? function(r) {
	return r == null ? [] : (r = /* @__PURE__ */ Object(r), Z$1(/* @__PURE__ */ yt$1(r), function(t) {
		return go$1.call(r, t);
	}));
} : Or$2;
function bo$1(r, t) {
	return mr$1(r, /* @__PURE__ */ $$1(r), t);
}
m(bo$1, "copySymbols");
var At = bo$1;
function ho(r, t) {
	for (var o$1 = -1, f$1 = t.length, a = r.length; ++o$1 < f$1;) r[a + o$1] = t[o$1];
	return r;
}
m(ho, "arrayPush");
var J$2 = ho;
var Ir$1 = Object.getOwnPropertySymbols ? function(r) {
	for (var t = []; r;) J$2(t, /* @__PURE__ */ $$1(r)), r = /* @__PURE__ */ V(r);
	return t;
} : Or$2;
function Oo$1(r, t) {
	return mr$1(r, /* @__PURE__ */ Ir$1(r), t);
}
m(Oo$1, "copySymbolsIn");
var Ot$1 = Oo$1;
function Io$1(r, t, o$1) {
	var f$1 = /* @__PURE__ */ t(r);
	return N(r) ? f$1 : J$2(f$1, /* @__PURE__ */ o$1(r));
}
m(Io$1, "baseGetAllKeys");
var vr$1 = Io$1;
function vo$1(r) {
	return vr$1(r, h, $$1);
}
m(vo$1, "getAllKeys");
var mr$2 = vo$1;
function So$1(r) {
	return vr$1(r, W$1, Ir$1);
}
m(So$1, "getAllKeysIn");
var Sr$1 = So$1;
var wo$1 = Object.prototype.hasOwnProperty;
function Eo$1(r) {
	var t = r.length, o$1 = new r.constructor(t);
	return t && typeof r[0] == "string" && wo$1.call(r, "index") && (o$1.index = r.index, o$1.input = r.input), o$1;
}
m(Eo$1, "initCloneArray");
var It$1 = Eo$1;
function Po$1(r, t) {
	var o$1 = t ? qt(r.buffer) : r.buffer;
	return new r.constructor(o$1, r.byteOffset, r.byteLength);
}
m(Po$1, "cloneDataView");
var vt = Po$1;
var Ro$1 = /\w*$/;
function Lo$1(r) {
	var t = new r.constructor(r.source, Ro$1.exec(r));
	return t.lastIndex = r.lastIndex, t;
}
m(Lo$1, "cloneRegExp");
var St$1 = Lo$1;
var Tt = O$1 ? O$1.prototype : void 0, wt$1 = Tt ? Tt.valueOf : void 0;
function Mo$1(r) {
	return wt$1 ? Object(/* @__PURE__ */ wt$1.call(r)) : {};
}
m(Mo$1, "cloneSymbol");
var Et = Mo$1;
var Co$1 = "[object Boolean]", _o$1 = "[object Date]", Fo$1 = "[object Map]", Bo$1 = "[object Number]", No$1 = "[object RegExp]", Uo$1 = "[object Set]", Do$1 = "[object String]", Go$1 = "[object Symbol]", Wo$1 = "[object ArrayBuffer]", qo$1 = "[object DataView]", Ko$1 = "[object Float32Array]", jo$1 = "[object Float64Array]", Ho$1 = "[object Int8Array]", zo$1 = "[object Int16Array]", Yo$1 = "[object Int32Array]", Zo$1 = "[object Uint8Array]", $o$1 = "[object Uint8ClampedArray]", Jo$1 = "[object Uint16Array]", Xo$1 = "[object Uint32Array]";
function Qo$1(r, t, o$1) {
	var f$1 = r.constructor;
	switch (t) {
		case Wo$1: return qt(r);
		case Co$1:
		case _o$1: return new f$1(+r);
		case qo$1: return vt(r, o$1);
		case Ko$1:
		case jo$1:
		case Ho$1:
		case zo$1:
		case Yo$1:
		case Zo$1:
		case $o$1:
		case Jo$1:
		case Xo$1: return $t$1(r, o$1);
		case Fo$1: return new f$1();
		case Bo$1:
		case Do$1: return new f$1(r);
		case No$1: return St$1(r);
		case Uo$1: return new f$1();
		case Go$1: return Et(r);
	}
}
m(Qo$1, "initCloneByTag");
var Pt$1 = Qo$1;
var ko$1 = "[object Map]";
function Vo$1(r) {
	return h$1(r) && A$1(r) == ko$1;
}
m(Vo$1, "baseIsMap");
var Rt = Vo$1;
var Lt$1 = at$1 && at$1.isMap, Mt = Lt$1 ? fr$1(Lt$1) : Rt;
var tf$1 = "[object Set]";
function ef$1(r) {
	return h$1(r) && A$1(r) == tf$1;
}
m(ef$1, "baseIsSet");
var Ct$1 = ef$1;
var _t$1 = at$1 && at$1.isSet, Ft = _t$1 ? fr$1(_t$1) : Ct$1;
var ff$1 = 1, af$1 = 2, nf$1 = 4, Bt$1 = "[object Arguments]", mf$1 = "[object Array]", pf$1 = "[object Boolean]", uf$1 = "[object Date]", sf$1 = "[object Error]", Nt$2 = "[object Function]", lf$1 = "[object GeneratorFunction]", df$1 = "[object Map]", xf$1 = "[object Number]", Ut$2 = "[object Object]", gf$1 = "[object RegExp]", cf$1 = "[object Set]", bf$1 = "[object String]", hf$1 = "[object Symbol]", yf$1 = "[object WeakMap]", Af$1 = "[object ArrayBuffer]", Of$1 = "[object DataView]", If$1 = "[object Float32Array]", vf$1 = "[object Float64Array]", Sf$1 = "[object Int8Array]", Tf$1 = "[object Int16Array]", wf$1 = "[object Int32Array]", Ef$1 = "[object Uint8Array]", Pf$1 = "[object Uint8ClampedArray]", Rf$1 = "[object Uint16Array]", Lf$1 = "[object Uint32Array]", c = {};
c[Bt$1] = c[mf$1] = c[Af$1] = c[Of$1] = c[pf$1] = c[uf$1] = c[If$1] = c[vf$1] = c[Sf$1] = c[Tf$1] = c[wf$1] = c[df$1] = c[xf$1] = c[Ut$2] = c[gf$1] = c[cf$1] = c[bf$1] = c[hf$1] = c[Ef$1] = c[Pf$1] = c[Rf$1] = c[Lf$1] = !0;
c[sf$1] = c[Nt$2] = c[yf$1] = !1;
function Tr$1(r, t, o$1, f$1, a, n$1) {
	var i$1, m$3 = t & ff$1, p$2 = t & af$1, u$2 = t & nf$1;
	if (o$1 && (i$1 = a ? o$1(r, f$1, a, n$1) : o$1(r)), i$1 !== void 0) return i$1;
	if (!m$1(r)) return r;
	var l$2 = /* @__PURE__ */ N(r);
	if (l$2) {
		if (i$1 = /* @__PURE__ */ It$1(r), !m$3) return Xt(r, i$1);
	} else {
		var d$1 = /* @__PURE__ */ A$1(r), x$2 = d$1 == Nt$2 || d$1 == lf$1;
		if ($(r)) return Kt$1(r, m$3);
		if (d$1 == Ut$2 || d$1 == Bt$1 || x$2 && !a) {
			if (i$1 = p$2 || x$2 ? {} : Zt$1(r), !m$3) return p$2 ? Ot$1(r, /* @__PURE__ */ ht$1(i$1, r)) : At(r, /* @__PURE__ */ bt$1(i$1, r));
		} else {
			if (!c[d$1]) return a ? r : {};
			i$1 = /* @__PURE__ */ Pt$1(r, d$1, m$3);
		}
	}
	n$1 || (n$1 = new Nt$1());
	var E$1 = /* @__PURE__ */ n$1.get(r);
	if (E$1) return E$1;
	n$1.set(r, i$1), Ft(r) ? r.forEach(function(b$1) {
		i$1.add(/* @__PURE__ */ Tr$1(b$1, t, o$1, b$1, r, n$1));
	}) : Mt(r) && r.forEach(function(b$1, y$1) {
		i$1.set(y$1, /* @__PURE__ */ Tr$1(b$1, t, o$1, y$1, r, n$1));
	});
	var O$2 = l$2 ? void 0 : (u$2 ? p$2 ? Sr$1 : mr$2 : p$2 ? W$1 : h)(r);
	return Ar$2(O$2 || r, function(b$1, y$1) {
		O$2 && (y$1 = b$1, b$1 = r[y$1]), sr$1(i$1, y$1, /* @__PURE__ */ Tr$1(b$1, t, o$1, y$1, r, n$1));
	}), i$1;
}
m(Tr$1, "baseClone");
var wr$2 = Tr$1;
var Mf$1 = 4;
function Cf$1(r) {
	return wr$2(r, Mf$1);
}
m(Cf$1, "clone");
var _f = Cf$1;
var Dt = Object.prototype, Ff$1 = Dt.hasOwnProperty, Nf = /* @__PURE__ */ Cr$2(function(r, t) {
	r = /* @__PURE__ */ Object(r);
	var o$1 = -1, f$1 = t.length, a = f$1 > 2 ? t[2] : void 0;
	for (a && wr$1(t[0], t[1], a) && (f$1 = 1); ++o$1 < f$1;) for (var n$1 = t[o$1], i$1 = /* @__PURE__ */ W$1(n$1), m$3 = -1, p$2 = i$1.length; ++m$3 < p$2;) {
		var u$2 = i$1[m$3], l$2 = r[u$2];
		(l$2 === void 0 || b(l$2, Dt[u$2]) && !Ff$1.call(r, u$2)) && (r[u$2] = n$1[u$2]);
	}
	return r;
});
function Uf$1(r) {
	var t = r == null ? 0 : r.length;
	return t ? r[t - 1] : void 0;
}
m(Uf$1, "last");
var Df = Uf$1;
function Gf$1(r, t) {
	return r && Ut$1(r, t, h);
}
m(Gf$1, "baseForOwn");
var X$2 = Gf$1;
function Wf$1(r, t) {
	return function(o$1, f$1) {
		if (o$1 == null) return o$1;
		if (!M(o$1)) return r(o$1, f$1);
		for (var a = o$1.length, n$1 = t ? a : -1, i$1 = /* @__PURE__ */ Object(o$1); (t ? n$1-- : ++n$1 < a) && f$1(i$1[n$1], n$1, i$1) !== !1;);
		return o$1;
	};
}
m(Wf$1, "createBaseEach");
var v$1 = /* @__PURE__ */ Wf$1(X$2);
function Kf$1(r) {
	return typeof r == "function" ? r : Y;
}
m(Kf$1, "castFunction");
var Q$1 = Kf$1;
function jf$1(r, t) {
	return (N(r) ? Ar$2 : v$1)(r, /* @__PURE__ */ Q$1(t));
}
m(jf$1, "forEach");
var Zr = jf$1;
function Hf$1(r, t) {
	var o$1 = [];
	return v$1(r, function(f$1, a, n$1) {
		t(f$1, a, n$1) && o$1.push(f$1);
	}), o$1;
}
m(Hf$1, "baseFilter");
var Er$1 = Hf$1;
var zf$1 = "__lodash_hash_undefined__";
function Yf$1(r) {
	return this.__data__.set(r, zf$1), this;
}
m(Yf$1, "setCacheAdd");
var Wt$1 = Yf$1;
function Zf$1(r) {
	return this.__data__.has(r);
}
m(Zf$1, "setCacheHas");
var qt$1 = Zf$1;
function Pr$2(r) {
	var t = -1, o$1 = r == null ? 0 : r.length;
	for (this.__data__ = new L(); ++t < o$1;) this.add(r[t]);
}
m(Pr$2, "SetCache");
Pr$2.prototype.add = Pr$2.prototype.push = Wt$1;
Pr$2.prototype.has = qt$1;
var k = Pr$2;
function $f$1(r, t) {
	for (var o$1 = -1, f$1 = r == null ? 0 : r.length; ++o$1 < f$1;) if (t(r[o$1], o$1, r)) return !0;
	return !1;
}
m($f$1, "arraySome");
var Rr$1 = $f$1;
function Jf$1(r, t) {
	return r.has(t);
}
m(Jf$1, "cacheHas");
var V$1 = Jf$1;
var Xf$1 = 1, Qf$1 = 2;
function kf$1(r, t, o$1, f$1, a, n$1) {
	var i$1 = o$1 & Xf$1, m$3 = r.length, p$2 = t.length;
	if (m$3 != p$2 && !(i$1 && p$2 > m$3)) return !1;
	var u$2 = /* @__PURE__ */ n$1.get(r), l$2 = /* @__PURE__ */ n$1.get(t);
	if (u$2 && l$2) return u$2 == t && l$2 == r;
	var d$1 = -1, x$2 = !0, E$1 = o$1 & Qf$1 ? new k() : void 0;
	for (n$1.set(r, t), n$1.set(t, r); ++d$1 < m$3;) {
		var A$3 = r[d$1], O$2 = t[d$1];
		if (f$1) var b$1 = i$1 ? f$1(O$2, A$3, d$1, t, r, n$1) : f$1(A$3, O$2, d$1, r, t, n$1);
		if (b$1 !== void 0) {
			if (b$1) continue;
			x$2 = !1;
			break;
		}
		if (E$1) {
			if (!Rr$1(t, function(y$1, z$2) {
				if (!V$1(E$1, z$2) && (A$3 === y$1 || a(A$3, y$1, o$1, f$1, n$1))) return E$1.push(z$2);
			})) {
				x$2 = !1;
				break;
			}
		} else if (!(A$3 === O$2 || a(A$3, O$2, o$1, f$1, n$1))) {
			x$2 = !1;
			break;
		}
	}
	return n$1.delete(r), n$1.delete(t), x$2;
}
m(kf$1, "equalArrays");
var Lr$1 = kf$1;
function Vf$1(r) {
	var t = -1, o$1 = /* @__PURE__ */ Array(r.size);
	return r.forEach(function(f$1, a) {
		o$1[++t] = [a, f$1];
	}), o$1;
}
m(Vf$1, "mapToArray");
var Kt$2 = Vf$1;
function ra$1(r) {
	var t = -1, o$1 = /* @__PURE__ */ Array(r.size);
	return r.forEach(function(f$1) {
		o$1[++t] = f$1;
	}), o$1;
}
m(ra$1, "setToArray");
var rr$1 = ra$1;
var ta$1 = 1, ea$1 = 2, oa$1 = "[object Boolean]", fa = "[object Date]", aa$1 = "[object Error]", na$1 = "[object Map]", ia$1 = "[object Number]", ma$1 = "[object RegExp]", pa$1 = "[object Set]", ua$1 = "[object String]", sa$1 = "[object Symbol]", la$1 = "[object ArrayBuffer]", da = "[object DataView]", jt$1 = O$1 ? O$1.prototype : void 0, $r = jt$1 ? jt$1.valueOf : void 0;
function xa$1(r, t, o$1, f$1, a, n$1, i$1) {
	switch (o$1) {
		case da:
			if (r.byteLength != t.byteLength || r.byteOffset != t.byteOffset) return !1;
			r = r.buffer, t = t.buffer;
		case la$1: return !(r.byteLength != t.byteLength || !n$1(new rt$1(r), new rt$1(t)));
		case oa$1:
		case fa:
		case ia$1: return b(+r, +t);
		case aa$1: return r.name == t.name && r.message == t.message;
		case ma$1:
		case ua$1: return r == t + "";
		case na$1: var m$3 = Kt$2;
		case pa$1:
			var p$2 = f$1 & ta$1;
			if (m$3 || (m$3 = rr$1), r.size != t.size && !p$2) return !1;
			var u$2 = /* @__PURE__ */ i$1.get(r);
			if (u$2) return u$2 == t;
			f$1 |= ea$1, i$1.set(r, t);
			var l$2 = /* @__PURE__ */ Lr$1(/* @__PURE__ */ m$3(r), /* @__PURE__ */ m$3(t), f$1, a, n$1, i$1);
			return i$1.delete(r), l$2;
		case sa$1: if ($r) return $r.call(r) == $r.call(t);
	}
	return !1;
}
m(xa$1, "equalByTag");
var Ht = xa$1;
var ga$1 = 1, ba = Object.prototype.hasOwnProperty;
function ha$1(r, t, o$1, f$1, a, n$1) {
	var i$1 = o$1 & ga$1, m$3 = /* @__PURE__ */ mr$2(r), p$2 = m$3.length, l$2 = mr$2(t).length;
	if (p$2 != l$2 && !i$1) return !1;
	for (var d$1 = p$2; d$1--;) {
		var x$2 = m$3[d$1];
		if (!(i$1 ? x$2 in t : ba.call(t, x$2))) return !1;
	}
	var E$1 = /* @__PURE__ */ n$1.get(r), A$3 = /* @__PURE__ */ n$1.get(t);
	if (E$1 && A$3) return E$1 == t && A$3 == r;
	var O$2 = !0;
	n$1.set(r, t), n$1.set(t, r);
	for (var b$1 = i$1; ++d$1 < p$2;) {
		x$2 = m$3[d$1];
		var y$1 = r[x$2], z$2 = t[x$2];
		if (f$1) var tt$2 = i$1 ? f$1(z$2, y$1, x$2, t, r, n$1) : f$1(y$1, z$2, x$2, r, t, n$1);
		if (!(tt$2 === void 0 ? y$1 === z$2 || a(y$1, z$2, o$1, f$1, n$1) : tt$2)) {
			O$2 = !1;
			break;
		}
		b$1 || (b$1 = x$2 == "constructor");
	}
	if (O$2 && !b$1) {
		var ur$2 = r.constructor, sr$2 = t.constructor;
		ur$2 != sr$2 && "constructor" in r && "constructor" in t && !(typeof ur$2 == "function" && ur$2 instanceof ur$2 && typeof sr$2 == "function" && sr$2 instanceof sr$2) && (O$2 = !1);
	}
	return n$1.delete(r), n$1.delete(t), O$2;
}
m(ha$1, "equalObjects");
var zt = ha$1;
var ya$1 = 1, Yt = "[object Arguments]", Zt$2 = "[object Array]", Mr$1 = "[object Object]", $t$2 = Object.prototype.hasOwnProperty;
function Oa$1(r, t, o$1, f$1, a, n$1) {
	var i$1 = /* @__PURE__ */ N(r), m$3 = /* @__PURE__ */ N(t), p$2 = i$1 ? Zt$2 : A$1(r), u$2 = m$3 ? Zt$2 : A$1(t);
	p$2 = p$2 == Yt ? Mr$1 : p$2, u$2 = u$2 == Yt ? Mr$1 : u$2;
	var l$2 = p$2 == Mr$1, d$1 = u$2 == Mr$1, x$2 = p$2 == u$2;
	if (x$2 && $(r)) {
		if (!$(t)) return !1;
		i$1 = !0, l$2 = !1;
	}
	if (x$2 && !l$2) return n$1 || (n$1 = new Nt$1()), i$1 || X$1(r) ? Lr$1(r, t, o$1, f$1, a, n$1) : Ht(r, t, p$2, o$1, f$1, a, n$1);
	if (!(o$1 & ya$1)) {
		var E$1 = l$2 && $t$2.call(r, "__wrapped__"), A$3 = d$1 && $t$2.call(t, "__wrapped__");
		if (E$1 || A$3) {
			var O$2 = E$1 ? r.value() : r, b$1 = A$3 ? t.value() : t;
			return n$1 || (n$1 = new Nt$1()), a(O$2, b$1, o$1, f$1, n$1);
		}
	}
	return x$2 ? (n$1 || (n$1 = new Nt$1()), zt(r, t, o$1, f$1, a, n$1)) : !1;
}
m(Oa$1, "baseIsEqualDeep");
var Jt$1 = Oa$1;
function Xt$1(r, t, o$1, f$1, a) {
	return r === t ? !0 : r == null || t == null || !h$1(r) && !h$1(t) ? r !== r && t !== t : Jt$1(r, t, o$1, f$1, Xt$1, a);
}
m(Xt$1, "baseIsEqual");
var Cr$3 = Xt$1;
var Ia$1 = 1, va$1 = 2;
function Sa$1(r, t, o$1, f$1) {
	var a = o$1.length, n$1 = a, i$1 = !f$1;
	if (r == null) return !n$1;
	for (r = /* @__PURE__ */ Object(r); a--;) {
		var m$3 = o$1[a];
		if (i$1 && m$3[2] ? m$3[1] !== r[m$3[0]] : !(m$3[0] in r)) return !1;
	}
	for (; ++a < n$1;) {
		m$3 = o$1[a];
		var p$2 = m$3[0], u$2 = r[p$2], l$2 = m$3[1];
		if (i$1 && m$3[2]) {
			if (u$2 === void 0 && !(p$2 in r)) return !1;
		} else {
			var d$1 = new Nt$1();
			if (f$1) var x$2 = /* @__PURE__ */ f$1(u$2, l$2, p$2, r, t, d$1);
			if (!(x$2 === void 0 ? Cr$3(l$2, u$2, Ia$1 | va$1, f$1, d$1) : x$2)) return !1;
		}
	}
	return !0;
}
m(Sa$1, "baseIsMatch");
var Qt$1 = Sa$1;
function Ta$1(r) {
	return r === r && !m$1(r);
}
m(Ta$1, "isStrictComparable");
var _r$1 = Ta$1;
function wa$1(r) {
	for (var t = /* @__PURE__ */ h(r), o$1 = t.length; o$1--;) {
		var f$1 = t[o$1], a = r[f$1];
		t[o$1] = [
			f$1,
			a,
			/* @__PURE__ */ _r$1(a)
		];
	}
	return t;
}
m(wa$1, "getMatchData");
var kt$1 = wa$1;
function Ea$1(r, t) {
	return function(o$1) {
		return o$1 == null ? !1 : o$1[r] === t && (t !== void 0 || r in Object(o$1));
	};
}
m(Ea$1, "matchesStrictComparable");
var Fr$1 = Ea$1;
function Pa(r) {
	var t = /* @__PURE__ */ kt$1(r);
	return t.length == 1 && t[0][2] ? Fr$1(t[0][0], t[0][1]) : function(o$1) {
		return o$1 === r || Qt$1(o$1, r, t);
	};
}
m(Pa, "baseMatches");
var Vt$1 = Pa;
var Ra$1 = "[object Symbol]";
function La$1(r) {
	return typeof r == "symbol" || h$1(r) && y(r) == Ra$1;
}
m(La$1, "isSymbol");
var w$1 = La$1;
var Ma = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ca$1 = /^\w*$/;
function _a$1(r, t) {
	if (N(r)) return !1;
	var o$1 = typeof r;
	return o$1 == "number" || o$1 == "symbol" || o$1 == "boolean" || r == null || w$1(r) ? !0 : Ca$1.test(r) || !Ma.test(r) || t != null && r in Object(t);
}
m(_a$1, "isKey");
var tr$1 = _a$1;
var Fa$1 = 500;
function Ba$1(r) {
	var t = /* @__PURE__ */ ki$1(r, function(f$1) {
		return o$1.size === Fa$1 && o$1.clear(), f$1;
	}), o$1 = t.cache;
	return t;
}
m(Ba$1, "memoizeCapped");
var re = Ba$1;
var Na$1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ua$1 = /\\(\\)?/g, te = /* @__PURE__ */ re(function(r) {
	var t = [];
	return r.charCodeAt(0) === 46 && t.push(""), r.replace(Na$1, function(o$1, f$1, a, n$1) {
		t.push(a ? n$1.replace(Ua$1, "$1") : f$1 || o$1);
	}), t;
});
function Ga$1(r, t) {
	for (var o$1 = -1, f$1 = r == null ? 0 : r.length, a = /* @__PURE__ */ Array(f$1); ++o$1 < f$1;) a[o$1] = /* @__PURE__ */ t(r[o$1], o$1, r);
	return a;
}
m(Ga$1, "arrayMap");
var S$1 = Ga$1;
var Wa$1 = Infinity, ee = O$1 ? O$1.prototype : void 0, oe = ee ? ee.toString : void 0;
function fe$1(r) {
	if (typeof r == "string") return r;
	if (N(r)) return S$1(r, fe$1) + "";
	if (w$1(r)) return oe ? oe.call(r) : "";
	var t = r + "";
	return t == "0" && 1 / r == -Wa$1 ? "-0" : t;
}
m(fe$1, "baseToString");
var ae$1 = fe$1;
function qa$1(r) {
	return r == null ? "" : ae$1(r);
}
m(qa$1, "toString");
var Br$1 = qa$1;
function Ka$1(r, t) {
	return N(r) ? r : tr$1(r, t) ? [r] : te(/* @__PURE__ */ Br$1(r));
}
m(Ka$1, "castPath");
var j$1 = Ka$1;
var ja$1 = Infinity;
function Ha$1(r) {
	if (typeof r == "string" || w$1(r)) return r;
	var t = r + "";
	return t == "0" && 1 / r == -ja$1 ? "-0" : t;
}
m(Ha$1, "toKey");
var N$1 = Ha$1;
function za$1(r, t) {
	t = /* @__PURE__ */ j$1(t, r);
	for (var o$1 = 0, f$1 = t.length; r != null && o$1 < f$1;) r = r[N$1(t[o$1++])];
	return o$1 && o$1 == f$1 ? r : void 0;
}
m(za$1, "baseGet");
var H$1 = za$1;
function Ya$1(r, t, o$1) {
	var f$1 = r == null ? void 0 : H$1(r, t);
	return f$1 === void 0 ? o$1 : f$1;
}
m(Ya$1, "get");
var ne$1 = Ya$1;
function Za$1(r, t) {
	return r != null && t in Object(r);
}
m(Za$1, "baseHasIn");
var ie$1 = Za$1;
function $a$1(r, t, o$1) {
	t = /* @__PURE__ */ j$1(t, r);
	for (var f$1 = -1, a = t.length, n$1 = !1; ++f$1 < a;) {
		var i$1 = /* @__PURE__ */ N$1(t[f$1]);
		if (!(n$1 = r != null && o$1(r, i$1))) break;
		r = r[i$1];
	}
	return n$1 || ++f$1 != a ? n$1 : (a = r == null ? 0 : r.length, !!a && q$2(a) && J$1(i$1, a) && (N(r) || G$1(r)));
}
m($a$1, "hasPath");
var Nr$1 = $a$1;
function Ja$1(r, t) {
	return r != null && Nr$1(r, t, ie$1);
}
m(Ja$1, "hasIn");
var Ur$1 = Ja$1;
var Xa$1 = 1, Qa$1 = 2;
function ka$1(r, t) {
	return tr$1(r) && _r$1(t) ? Fr$1(/* @__PURE__ */ N$1(r), t) : function(o$1) {
		var f$1 = /* @__PURE__ */ ne$1(o$1, r);
		return f$1 === void 0 && f$1 === t ? Ur$1(o$1, r) : Cr$3(t, f$1, Xa$1 | Qa$1);
	};
}
m(ka$1, "baseMatchesProperty");
var me$1 = ka$1;
function Va$1(r) {
	return function(t) {
		return t?.[r];
	};
}
m(Va$1, "baseProperty");
var Dr$1 = Va$1;
function rn$1(r) {
	return function(t) {
		return H$1(t, r);
	};
}
m(rn$1, "basePropertyDeep");
var pe = rn$1;
function tn$1(r) {
	return tr$1(r) ? Dr$1(/* @__PURE__ */ N$1(r)) : pe(r);
}
m(tn$1, "property");
var ue = tn$1;
function en$1(r) {
	return typeof r == "function" ? r : r == null ? Y : typeof r == "object" ? N(r) ? me$1(r[0], r[1]) : Vt$1(r) : ue(r);
}
m(en$1, "baseIteratee");
var g$1 = en$1;
function on$1(r, t) {
	return (N(r) ? Z$1 : Er$1)(r, /* @__PURE__ */ g$1(t, 3));
}
m(on$1, "filter");
var fn = on$1;
function an$1(r, t) {
	var o$1 = -1, f$1 = M(r) ? Array(r.length) : [];
	return v$1(r, function(a, n$1, i$1) {
		f$1[++o$1] = /* @__PURE__ */ t(a, n$1, i$1);
	}), f$1;
}
m(an$1, "baseMap");
var Gr$1 = an$1;
function nn$1(r, t) {
	return (N(r) ? S$1 : Gr$1)(r, /* @__PURE__ */ g$1(t, 3));
}
m(nn$1, "map");
var Jr = nn$1;
function mn$1(r, t) {
	return S$1(t, function(o$1) {
		return r[o$1];
	});
}
m(mn$1, "baseValues");
var se$1 = mn$1;
function pn$1(r) {
	return r == null ? [] : se$1(r, /* @__PURE__ */ h(r));
}
m(pn$1, "values");
var Xr = pn$1;
function un$1(r) {
	return r === void 0;
}
m(un$1, "isUndefined");
var sn = un$1;
function ln$1(r, t) {
	var o$1 = {};
	return t = /* @__PURE__ */ g$1(t, 3), X$2(r, function(f$1, a, n$1) {
		I(o$1, a, /* @__PURE__ */ t(f$1, a, n$1));
	}), o$1;
}
m(ln$1, "mapValues");
var dn$1 = ln$1;
function xn$1(r, t, o$1) {
	for (var f$1 = -1, a = r.length; ++f$1 < a;) {
		var n$1 = r[f$1], i$1 = /* @__PURE__ */ t(n$1);
		if (i$1 != null && (m$3 === void 0 ? i$1 === i$1 && !w$1(i$1) : o$1(i$1, m$3))) var m$3 = i$1, p$2 = n$1;
	}
	return p$2;
}
m(xn$1, "baseExtremum");
var er$1 = xn$1;
function gn$1(r, t) {
	return r > t;
}
m(gn$1, "baseGt");
var le$1 = gn$1;
function cn$1(r) {
	return r && r.length ? er$1(r, Y, le$1) : void 0;
}
m(cn$1, "max");
var bn$1 = cn$1;
function hn$1(r, t, o$1, f$1) {
	if (!m$1(r)) return r;
	t = /* @__PURE__ */ j$1(t, r);
	for (var a = -1, n$1 = t.length, i$1 = n$1 - 1, m$3 = r; m$3 != null && ++a < n$1;) {
		var p$2 = /* @__PURE__ */ N$1(t[a]), u$2 = o$1;
		if (p$2 === "__proto__" || p$2 === "constructor" || p$2 === "prototype") return r;
		if (a != i$1) {
			var l$2 = m$3[p$2];
			u$2 = f$1 ? f$1(l$2, p$2, m$3) : void 0, u$2 === void 0 && (u$2 = m$1(l$2) ? l$2 : J$1(t[a + 1]) ? [] : {});
		}
		sr$1(m$3, p$2, u$2), m$3 = m$3[p$2];
	}
	return r;
}
m(hn$1, "baseSet");
var de = hn$1;
function yn$1(r, t, o$1) {
	for (var f$1 = -1, a = t.length, n$1 = {}; ++f$1 < a;) {
		var i$1 = t[f$1], m$3 = /* @__PURE__ */ H$1(r, i$1);
		o$1(m$3, i$1) && de(n$1, /* @__PURE__ */ j$1(i$1, r), m$3);
	}
	return n$1;
}
m(yn$1, "basePickBy");
var Wr$1 = yn$1;
function An$1(r, t) {
	return Wr$1(r, t, function(o$1, f$1) {
		return Ur$1(r, f$1);
	});
}
m(An$1, "basePick");
var xe = An$1;
var ge = O$1 ? O$1.isConcatSpreadable : void 0;
function On$1(r) {
	return N(r) || G$1(r) || !!(ge && r && r[ge]);
}
m(On$1, "isFlattenable");
var ce$1 = On$1;
function be(r, t, o$1, f$1, a) {
	var n$1 = -1, i$1 = r.length;
	for (o$1 || (o$1 = ce$1), a || (a = []); ++n$1 < i$1;) {
		var m$3 = r[n$1];
		t > 0 && o$1(m$3) ? t > 1 ? be(m$3, t - 1, o$1, f$1, a) : J$2(a, m$3) : f$1 || (a[a.length] = m$3);
	}
	return a;
}
m(be, "baseFlatten");
var U$1 = be;
function In$1(r) {
	return (r == null ? 0 : r.length) ? U$1(r, 1) : [];
}
m(In$1, "flatten");
var Qr = In$1;
function vn$1(r) {
	return Ar$1(/* @__PURE__ */ Or$1(r, void 0, Qr), r + "");
}
m(vn$1, "flatRest");
var Tn$1 = /* @__PURE__ */ vn$1(function(r, t) {
	return r == null ? {} : xe(r, t);
});
function wn$1(r, t, o$1, f$1) {
	var a = -1, n$1 = r == null ? 0 : r.length;
	for (f$1 && n$1 && (o$1 = r[++a]); ++a < n$1;) o$1 = /* @__PURE__ */ t(o$1, r[a], a, r);
	return o$1;
}
m(wn$1, "arrayReduce");
var ye$1 = wn$1;
function En$1(r, t, o$1, f$1, a) {
	return a(r, function(n$1, i$1, m$3) {
		o$1 = f$1 ? (f$1 = !1, n$1) : t(o$1, n$1, i$1, m$3);
	}), o$1;
}
m(En$1, "baseReduce");
var Ae = En$1;
function Pn$1(r, t, o$1) {
	var f$1 = N(r) ? ye$1 : Ae, a = arguments.length < 3;
	return f$1(r, /* @__PURE__ */ g$1(t, 4), o$1, a, v$1);
}
m(Pn$1, "reduce");
var Rn = Pn$1;
function Ln$1(r, t, o$1, f$1) {
	for (var a = r.length, n$1 = o$1 + (f$1 ? 1 : -1); f$1 ? n$1-- : ++n$1 < a;) if (t(r[n$1], n$1, r)) return n$1;
	return -1;
}
m(Ln$1, "baseFindIndex");
var qr$1 = Ln$1;
function Mn$1(r) {
	return r !== r;
}
m(Mn$1, "baseIsNaN");
var Oe = Mn$1;
function Cn$1(r, t, o$1) {
	for (var f$1 = o$1 - 1, a = r.length; ++f$1 < a;) if (r[f$1] === t) return f$1;
	return -1;
}
m(Cn$1, "strictIndexOf");
var Ie = Cn$1;
function _n$1(r, t, o$1) {
	return t === t ? Ie(r, t, o$1) : qr$1(r, Oe, o$1);
}
m(_n$1, "baseIndexOf");
var or$1 = _n$1;
function Fn$1(r, t) {
	return !!(r == null ? 0 : r.length) && or$1(r, t, 0) > -1;
}
m(Fn$1, "arrayIncludes");
var Kr$1 = Fn$1;
function Bn$1(r, t, o$1) {
	for (var f$1 = -1, a = r == null ? 0 : r.length; ++f$1 < a;) if (o$1(t, r[f$1])) return !0;
	return !1;
}
m(Bn$1, "arrayIncludesWith");
var jr$1 = Bn$1;
function Nn$1() {}
m(Nn$1, "noop");
var kr = Nn$1;
var ve = g && 1 / rr$1(new g([, -0]))[1] == Infinity ? function(r) {
	return new g(r);
} : kr;
var Gn$1 = 200;
function Wn$1(r, t, o$1) {
	var f$1 = -1, a = Kr$1, n$1 = r.length, i$1 = !0, m$3 = [], p$2 = m$3;
	if (o$1) i$1 = !1, a = jr$1;
	else if (n$1 >= Gn$1) {
		var u$2 = t ? null : ve(r);
		if (u$2) return rr$1(u$2);
		i$1 = !1, a = V$1, p$2 = new k();
	} else p$2 = t ? [] : m$3;
	r: for (; ++f$1 < n$1;) {
		var l$2 = r[f$1], d$1 = t ? t(l$2) : l$2;
		if (l$2 = o$1 || l$2 !== 0 ? l$2 : 0, i$1 && d$1 === d$1) {
			for (var x$2 = p$2.length; x$2--;) if (p$2[x$2] === d$1) continue r;
			t && p$2.push(d$1), m$3.push(l$2);
		} else a(p$2, d$1, o$1) || (p$2 !== m$3 && p$2.push(d$1), m$3.push(l$2));
	}
	return m$3;
}
m(Wn$1, "baseUniq");
var fr$2 = Wn$1;
var Kn = /* @__PURE__ */ Cr$2(function(r) {
	return fr$2(/* @__PURE__ */ U$1(r, 1, kt, !0));
});
var jn$1 = /\s/;
function Hn$1(r) {
	for (var t = r.length; t-- && jn$1.test(/* @__PURE__ */ r.charAt(t)););
	return t;
}
m(Hn$1, "trimmedEndIndex");
var Se$1 = Hn$1;
var zn$1 = /^\s+/;
function Yn$1(r) {
	return r && r.slice(0, Se$1(r) + 1).replace(zn$1, "");
}
m(Yn$1, "baseTrim");
var Te = Yn$1;
var we$1 = NaN, Zn$1 = /^[-+]0x[0-9a-f]+$/i, $n$1 = /^0b[01]+$/i, Jn = /^0o[0-7]+$/i, Xn$1 = parseInt;
function Qn(r) {
	if (typeof r == "number") return r;
	if (w$1(r)) return we$1;
	if (m$1(r)) {
		var t = typeof r.valueOf == "function" ? r.valueOf() : r;
		r = m$1(t) ? t + "" : t;
	}
	if (typeof r != "string") return r === 0 ? r : +r;
	r = /* @__PURE__ */ Te(r);
	var o$1 = /* @__PURE__ */ $n$1.test(r);
	return o$1 || Jn.test(r) ? Xn$1(/* @__PURE__ */ r.slice(2), o$1 ? 2 : 8) : Zn$1.test(r) ? we$1 : +r;
}
m(Qn, "toNumber");
var Ee$1 = Qn;
var Pe = Infinity, kn$1 = 17976931348623157e292;
function Vn(r) {
	if (!r) return r === 0 ? r : 0;
	if (r = /* @__PURE__ */ Ee$1(r), r === Pe || r === -Pe) return (r < 0 ? -1 : 1) * kn$1;
	return r === r ? r : 0;
}
m(Vn, "toFinite");
var ar$1 = Vn;
function ri$1(r) {
	var t = /* @__PURE__ */ ar$1(r), o$1 = t % 1;
	return t === t ? o$1 ? t - o$1 : t : 0;
}
m(ri$1, "toInteger");
var D$1 = ri$1;
var ei$1 = Object.prototype.hasOwnProperty, fi = /* @__PURE__ */ Pr$1(function(r, t) {
	if (K$1(t) || M(t)) {
		mr$1(t, /* @__PURE__ */ h(t), r);
		return;
	}
	for (var o$1 in t) ei$1.call(t, o$1) && sr$1(r, o$1, t[o$1]);
});
function ai$1(r, t, o$1) {
	var f$1 = -1, a = r.length;
	t < 0 && (t = -t > a ? 0 : a + t), o$1 = o$1 > a ? a : o$1, o$1 < 0 && (o$1 += a), a = t > o$1 ? 0 : o$1 - t >>> 0, t >>>= 0;
	for (var n$1 = /* @__PURE__ */ Array(a); ++f$1 < a;) n$1[f$1] = r[f$1 + t];
	return n$1;
}
m(ai$1, "baseSlice");
var Hr$1 = ai$1;
var di$1 = /* @__PURE__ */ RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
function xi$1(r) {
	return di$1.test(r);
}
m(xi$1, "hasUnicode");
var Re$1 = xi$1;
var gi$1 = 1, ci$1 = 4;
function bi$1(r) {
	return wr$2(r, gi$1 | ci$1);
}
m(bi$1, "cloneDeep");
var hi$1 = bi$1;
function yi$1(r) {
	for (var t = -1, o$1 = r == null ? 0 : r.length, f$1 = 0, a = []; ++t < o$1;) {
		var n$1 = r[t];
		n$1 && (a[f$1++] = n$1);
	}
	return a;
}
m(yi$1, "compact");
var Ai = yi$1;
function Oi$1(r, t, o$1, f$1) {
	for (var a = -1, n$1 = r == null ? 0 : r.length; ++a < n$1;) {
		var i$1 = r[a];
		t(f$1, i$1, /* @__PURE__ */ o$1(i$1), r);
	}
	return f$1;
}
m(Oi$1, "arrayAggregator");
var Le = Oi$1;
function Ii$1(r, t, o$1, f$1) {
	return v$1(r, function(a, n$1, i$1) {
		t(f$1, a, /* @__PURE__ */ o$1(a), i$1);
	}), f$1;
}
m(Ii$1, "baseAggregator");
var Me$1 = Ii$1;
function vi$1(r, t) {
	return function(o$1, f$1) {
		var a = N(o$1) ? Le : Me$1, n$1 = t ? t() : {};
		return a(o$1, r, /* @__PURE__ */ g$1(f$1, 2), n$1);
	};
}
m(vi$1, "createAggregator");
var Ce$1 = vi$1;
var Ti$1 = /* @__PURE__ */ m(function() {
	return d.Date.now();
}, "now");
var wi$1 = 200;
function Ei$1(r, t, o$1, f$1) {
	var a = -1, n$1 = Kr$1, i$1 = !0, m$3 = r.length, p$2 = [], u$2 = t.length;
	if (!m$3) return p$2;
	o$1 && (t = /* @__PURE__ */ S$1(t, /* @__PURE__ */ fr$1(o$1))), f$1 ? (n$1 = jr$1, i$1 = !1) : t.length >= wi$1 && (n$1 = V$1, i$1 = !1, t = new k(t));
	r: for (; ++a < m$3;) {
		var l$2 = r[a], d$1 = o$1 == null ? l$2 : o$1(l$2);
		if (l$2 = f$1 || l$2 !== 0 ? l$2 : 0, i$1 && d$1 === d$1) {
			for (var x$2 = u$2; x$2--;) if (t[x$2] === d$1) continue r;
			p$2.push(l$2);
		} else n$1(t, d$1, f$1) || p$2.push(l$2);
	}
	return p$2;
}
m(Ei$1, "baseDifference");
var _e = Ei$1;
var Ri = /* @__PURE__ */ Cr$2(function(r, t) {
	return kt(r) ? _e(r, /* @__PURE__ */ U$1(t, 1, kt, !0)) : [];
});
function Li(r, t, o$1) {
	var f$1 = r == null ? 0 : r.length;
	return f$1 ? (t = o$1 || t === void 0 ? 1 : D$1(t), Hr$1(r, t < 0 ? 0 : t, f$1)) : [];
}
m(Li, "drop");
var Mi = Li;
function Ci$1(r, t, o$1) {
	var f$1 = r == null ? 0 : r.length;
	return f$1 ? (t = o$1 || t === void 0 ? 1 : D$1(t), t = f$1 - t, Hr$1(r, 0, t < 0 ? 0 : t)) : [];
}
m(Ci$1, "dropRight");
var _i = Ci$1;
function Fi$1(r, t) {
	for (var o$1 = -1, f$1 = r == null ? 0 : r.length; ++o$1 < f$1;) if (!t(r[o$1], o$1, r)) return !1;
	return !0;
}
m(Fi$1, "arrayEvery");
var Fe$1 = Fi$1;
function Bi$1(r, t) {
	var o$1 = !0;
	return v$1(r, function(f$1, a, n$1) {
		return o$1 = !!t(f$1, a, n$1), o$1;
	}), o$1;
}
m(Bi$1, "baseEvery");
var Be$1 = Bi$1;
function Ni$1(r, t, o$1) {
	var f$1 = N(r) ? Fe$1 : Be$1;
	return o$1 && wr$1(r, t, o$1) && (t = void 0), f$1(r, /* @__PURE__ */ g$1(t, 3));
}
m(Ni$1, "every");
var Ui = Ni$1;
function Di$1(r) {
	return function(t, o$1, f$1) {
		var a = /* @__PURE__ */ Object(t);
		if (!M(t)) {
			var n$1 = /* @__PURE__ */ g$1(o$1, 3);
			t = /* @__PURE__ */ h(t), o$1 = /* @__PURE__ */ m(function(m$3) {
				return n$1(a[m$3], m$3, a);
			}, "predicate");
		}
		var i$1 = /* @__PURE__ */ r(t, o$1, f$1);
		return i$1 > -1 ? a[n$1 ? t[i$1] : i$1] : void 0;
	};
}
m(Di$1, "createFind");
var Ne = Di$1;
var Gi$1 = Math.max;
function Wi$1(r, t, o$1) {
	var f$1 = r == null ? 0 : r.length;
	if (!f$1) return -1;
	var a = o$1 == null ? 0 : D$1(o$1);
	return a < 0 && (a = /* @__PURE__ */ Gi$1(f$1 + a, 0)), qr$1(r, /* @__PURE__ */ g$1(t, 3), a);
}
m(Wi$1, "findIndex");
var Ki = /* @__PURE__ */ Ne(Wi$1);
function ji$1(r) {
	return r && r.length ? r[0] : void 0;
}
m(ji$1, "head");
var De = ji$1;
function Hi$1(r, t) {
	return U$1(/* @__PURE__ */ Jr(r, t), 1);
}
m(Hi$1, "flatMap");
var zi = Hi$1;
function Yi$1(r, t) {
	return r == null ? r : Ut$1(r, /* @__PURE__ */ Q$1(t), W$1);
}
m(Yi$1, "forIn");
var Zi$1 = Yi$1;
function $i$1(r, t) {
	return r && X$2(r, /* @__PURE__ */ Q$1(t));
}
m($i$1, "forOwn");
var Ji$1 = $i$1;
var Qi$1 = Object.prototype.hasOwnProperty, Vi = /* @__PURE__ */ Ce$1(function(r, t, o$1) {
	Qi$1.call(r, o$1) ? r[o$1].push(t) : I(r, o$1, [t]);
});
var tm$1 = Object.prototype.hasOwnProperty;
function em$1(r, t) {
	return r != null && tm$1.call(r, t);
}
m(em$1, "baseHas");
var Ge$1 = em$1;
function om$1(r, t) {
	return r != null && Nr$1(r, t, Ge$1);
}
m(om$1, "has");
var fm = om$1;
var am = "[object String]";
function nm(r) {
	return typeof r == "string" || !N(r) && h$1(r) && y(r) == am;
}
m(nm, "isString");
var pr = nm;
var im$1 = Math.max;
function mm$1(r, t, o$1, f$1) {
	r = M(r) ? r : Xr(r), o$1 = o$1 && !f$1 ? D$1(o$1) : 0;
	var a = r.length;
	return o$1 < 0 && (o$1 = /* @__PURE__ */ im$1(a + o$1, 0)), pr(r) ? o$1 <= a && r.indexOf(t, o$1) > -1 : !!a && or$1(r, t, o$1) > -1;
}
m(mm$1, "includes");
var pm = mm$1;
var um$1 = Math.max;
function sm$1(r, t, o$1) {
	var f$1 = r == null ? 0 : r.length;
	if (!f$1) return -1;
	var a = o$1 == null ? 0 : D$1(o$1);
	return a < 0 && (a = /* @__PURE__ */ um$1(f$1 + a, 0)), or$1(r, t, a);
}
m(sm$1, "indexOf");
var lm = sm$1;
var dm$1 = "[object RegExp]";
function xm$1(r) {
	return h$1(r) && y(r) == dm$1;
}
m(xm$1, "baseIsRegExp");
var We$1 = xm$1;
var qe$1 = at$1 && at$1.isRegExp, cm = qe$1 ? fr$1(qe$1) : We$1;
function bm$1(r, t) {
	return r < t;
}
m(bm$1, "baseLt");
var zr$1 = bm$1;
function hm$1(r) {
	return r && r.length ? er$1(r, Y, zr$1) : void 0;
}
m(hm$1, "min");
var ym = hm$1;
function Am$1(r, t) {
	return r && r.length ? er$1(r, /* @__PURE__ */ g$1(t, 2), zr$1) : void 0;
}
m(Am$1, "minBy");
var Om$1 = Am$1;
var Im$1 = "Expected a function";
function vm$1(r) {
	if (typeof r != "function") throw new TypeError(Im$1);
	return function() {
		var t = arguments;
		switch (t.length) {
			case 0: return !r.call(this);
			case 1: return !r.call(this, t[0]);
			case 2: return !r.call(this, t[0], t[1]);
			case 3: return !r.call(this, t[0], t[1], t[2]);
		}
		return !r.apply(this, t);
	};
}
m(vm$1, "negate");
var Ke = vm$1;
function Sm$1(r, t) {
	if (r == null) return {};
	var o$1 = /* @__PURE__ */ S$1(/* @__PURE__ */ Sr$1(r), function(f$1) {
		return [f$1];
	});
	return t = /* @__PURE__ */ g$1(t), Wr$1(r, o$1, function(f$1, a) {
		return t(f$1, a[0]);
	});
}
m(Sm$1, "pickBy");
var Tm = Sm$1;
function wm$1(r, t) {
	var o$1 = r.length;
	for (r.sort(t); o$1--;) r[o$1] = r[o$1].value;
	return r;
}
m(wm$1, "baseSortBy");
var je$1 = wm$1;
function Em$1(r, t) {
	if (r !== t) {
		var o$1 = r !== void 0, f$1 = r === null, a = r === r, n$1 = /* @__PURE__ */ w$1(r), i$1 = t !== void 0, m$3 = t === null, p$2 = t === t, u$2 = /* @__PURE__ */ w$1(t);
		if (!m$3 && !u$2 && !n$1 && r > t || n$1 && i$1 && p$2 && !m$3 && !u$2 || f$1 && i$1 && p$2 || !o$1 && p$2 || !a) return 1;
		if (!f$1 && !n$1 && !u$2 && r < t || u$2 && o$1 && a && !f$1 && !n$1 || m$3 && o$1 && a || !i$1 && a || !p$2) return -1;
	}
	return 0;
}
m(Em$1, "compareAscending");
var He$1 = Em$1;
function Pm$1(r, t, o$1) {
	for (var f$1 = -1, a = r.criteria, n$1 = t.criteria, i$1 = a.length, m$3 = o$1.length; ++f$1 < i$1;) {
		var p$2 = /* @__PURE__ */ He$1(a[f$1], n$1[f$1]);
		if (p$2) {
			if (f$1 >= m$3) return p$2;
			var u$2 = o$1[f$1];
			return p$2 * (u$2 == "desc" ? -1 : 1);
		}
	}
	return r.index - t.index;
}
m(Pm$1, "compareMultiple");
var ze$1 = Pm$1;
function Rm$1(r, t, o$1) {
	t.length ? t = /* @__PURE__ */ S$1(t, function(n$1) {
		return N(n$1) ? function(i$1) {
			return H$1(i$1, n$1.length === 1 ? n$1[0] : n$1);
		} : n$1;
	}) : t = [Y];
	var f$1 = -1;
	t = /* @__PURE__ */ S$1(t, /* @__PURE__ */ fr$1(g$1));
	return je$1(/* @__PURE__ */ Gr$1(r, function(n$1, i$1, m$3) {
		return {
			criteria: /* @__PURE__ */ S$1(t, function(u$2) {
				return u$2(n$1);
			}),
			index: ++f$1,
			value: n$1
		};
	}), function(n$1, i$1) {
		return ze$1(n$1, i$1, o$1);
	});
}
m(Rm$1, "baseOrderBy");
var Ye$1 = Rm$1;
var Ze = /* @__PURE__ */ Dr$1("length");
var Je$1 = "\\ud800-\\udfff", Fm$1 = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", Bm$1 = "\\ufe0e\\ufe0f", Nm$1 = "[" + Je$1 + "]", Vr$1 = "[" + Fm$1 + "]", rt$2 = "\\ud83c[\\udffb-\\udfff]", Um$1 = "(?:" + Vr$1 + "|" + rt$2 + ")", Xe = "[^" + Je$1 + "]", Qe$1 = "(?:\\ud83c[\\udde6-\\uddff]){2}", ke = "[\\ud800-\\udbff][\\udc00-\\udfff]", Dm$1 = "\\u200d", Ve = Um$1 + "?", ro$1 = "[" + Bm$1 + "]?", Gm$1 = "(?:" + Dm$1 + "(?:" + [
	Xe,
	Qe$1,
	ke
].join("|") + ")" + ro$1 + Ve + ")*", Wm$1 = ro$1 + Ve + Gm$1, qm$1 = "(?:" + [
	Xe + Vr$1 + "?",
	Vr$1,
	Qe$1,
	ke,
	Nm$1
].join("|") + ")", $e = /* @__PURE__ */ RegExp(rt$2 + "(?=" + rt$2 + ")|" + qm$1 + Wm$1, "g");
function Km$1(r) {
	for (var t = $e.lastIndex = 0; $e.test(r);) ++t;
	return t;
}
m(Km$1, "unicodeSize");
var to$1 = Km$1;
function jm$1(r) {
	return Re$1(r) ? to$1(r) : Ze(r);
}
m(jm$1, "stringSize");
var eo$1 = jm$1;
var Hm$1 = Math.ceil, zm$1 = Math.max;
function Ym$1(r, t, o$1, f$1) {
	for (var a = -1, n$1 = /* @__PURE__ */ zm$1(/* @__PURE__ */ Hm$1((t - r) / (o$1 || 1)), 0), i$1 = /* @__PURE__ */ Array(n$1); n$1--;) i$1[f$1 ? n$1 : ++a] = r, r += o$1;
	return i$1;
}
m(Ym$1, "baseRange");
var oo$1 = Ym$1;
function Zm$1(r) {
	return function(t, o$1, f$1) {
		return f$1 && typeof f$1 != "number" && wr$1(t, o$1, f$1) && (o$1 = f$1 = void 0), t = /* @__PURE__ */ ar$1(t), o$1 === void 0 ? (o$1 = t, t = 0) : o$1 = /* @__PURE__ */ ar$1(o$1), f$1 = f$1 === void 0 ? t < o$1 ? 1 : -1 : ar$1(f$1), oo$1(t, o$1, f$1, r);
	};
}
m(Zm$1, "createRange");
var Jm$1 = /* @__PURE__ */ Zm$1();
function Xm$1(r, t) {
	return (N(r) ? Z$1 : Er$1)(r, /* @__PURE__ */ Ke(/* @__PURE__ */ g$1(t, 3)));
}
m(Xm$1, "reject");
var Qm = Xm$1;
var km$1 = "[object Map]", Vm$1 = "[object Set]";
function rp$1(r) {
	if (r == null) return 0;
	if (M(r)) return pr(r) ? eo$1(r) : r.length;
	var t = /* @__PURE__ */ A$1(r);
	return t == km$1 || t == Vm$1 ? r.size : O(r).length;
}
m(rp$1, "size");
var tp$1 = rp$1;
function ep$1(r, t) {
	var o$1;
	return v$1(r, function(f$1, a, n$1) {
		return o$1 = /* @__PURE__ */ t(f$1, a, n$1), !o$1;
	}), !!o$1;
}
m(ep$1, "baseSome");
var ao$1 = ep$1;
function op$1(r, t, o$1) {
	var f$1 = N(r) ? Rr$1 : ao$1;
	return o$1 && wr$1(r, t, o$1) && (t = void 0), f$1(r, /* @__PURE__ */ g$1(t, 3));
}
m(op$1, "some");
var fp = op$1;
var np$1 = /* @__PURE__ */ Cr$2(function(r, t) {
	if (r == null) return [];
	var o$1 = t.length;
	return o$1 > 1 && wr$1(r, t[0], t[1]) ? t = [] : o$1 > 2 && wr$1(t[0], t[1], t[2]) && (t = [t[0]]), Ye$1(r, /* @__PURE__ */ U$1(t, 1), []);
});
function ip$1(r) {
	return r && r.length ? fr$2(r) : [];
}
m(ip$1, "uniq");
var mp = ip$1;
function pp$1(r, t) {
	return r && r.length ? fr$2(r, /* @__PURE__ */ g$1(t, 2)) : [];
}
m(pp$1, "uniqBy");
var s0 = pp$1;
var up$1 = 0;
function sp$1(r) {
	var t = ++up$1;
	return Br$1(r) + t;
}
m(sp$1, "uniqueId");
var lp$1 = sp$1;
function dp$1(r, t, o$1) {
	for (var f$1 = -1, a = r.length, n$1 = t.length, i$1 = {}; ++f$1 < a;) {
		var m$3 = f$1 < n$1 ? t[f$1] : void 0;
		o$1(i$1, r[f$1], m$3);
	}
	return i$1;
}
m(dp$1, "baseZipObject");
var no$1 = dp$1;
function xp$1(r, t) {
	return no$1(r || [], t || [], sr$1);
}
m(xp$1, "zipObject");
var gp$1 = xp$1;
var au = /* @__PURE__ */ n((su) => {
	Object.defineProperty(su, "__esModule", { value: !0 });
	var nu;
	function iu() {
		if (nu === void 0) throw new Error("No runtime abstraction layer installed");
		return nu;
	}
	m(iu, "RAL");
	(function(r) {
		function e$1(t) {
			if (t === void 0) throw new Error("No runtime abstraction layer provided");
			nu = t;
		}
		m(e$1, "install"), r.install = e$1;
	})(iu || (iu = {}));
	su.default = iu;
});
var Vd = /* @__PURE__ */ n((_e$2) => {
	Object.defineProperty(_e$2, "__esModule", { value: !0 });
	_e$2.stringArray = _e$2.array = _e$2.func = _e$2.error = _e$2.number = _e$2.string = _e$2.boolean = void 0;
	function tg(r) {
		return r === !0 || r === !1;
	}
	m(tg, "boolean");
	_e$2.boolean = tg;
	function Wd(r) {
		return typeof r == "string" || r instanceof String;
	}
	m(Wd, "string");
	_e$2.string = Wd;
	function rg(r) {
		return typeof r == "number" || r instanceof Number;
	}
	m(rg, "number");
	_e$2.number = rg;
	function ng(r) {
		return r instanceof Error;
	}
	m(ng, "error");
	_e$2.error = ng;
	function ig(r) {
		return typeof r == "function";
	}
	m(ig, "func");
	_e$2.func = ig;
	function Kd(r) {
		return Array.isArray(r);
	}
	m(Kd, "array");
	_e$2.array = Kd;
	function sg(r) {
		return Kd(r) && r.every((e$1) => Wd(e$1));
	}
	m(sg, "stringArray");
	_e$2.stringArray = sg;
});
var lu = /* @__PURE__ */ n((Kn$1) => {
	Object.defineProperty(Kn$1, "__esModule", { value: !0 });
	Kn$1.Emitter = Kn$1.Event = void 0;
	var ag = /* @__PURE__ */ au(), jd;
	(function(r) {
		let e$1 = { dispose() {} };
		r.None = function() {
			return e$1;
		};
	})(jd || (Kn$1.Event = jd = {}));
	var ou = class {
		static {
			m(this, "CallbackList");
		}
		add(e$1, t = null, n$1) {
			this._callbacks || (this._callbacks = [], this._contexts = []), this._callbacks.push(e$1), this._contexts.push(t), Array.isArray(n$1) && n$1.push({ dispose: /* @__PURE__ */ m(() => this.remove(e$1, t), "dispose") });
		}
		remove(e$1, t = null) {
			if (!this._callbacks) return;
			let n$1 = !1;
			for (let i$1 = 0, s$1 = this._callbacks.length; i$1 < s$1; i$1++) if (this._callbacks[i$1] === e$1) if (this._contexts[i$1] === t) {
				this._callbacks.splice(i$1, 1), this._contexts.splice(i$1, 1);
				return;
			} else n$1 = !0;
			if (n$1) throw new Error("When adding a listener with a context, you should remove it with the same context");
		}
		invoke(...e$1) {
			if (!this._callbacks) return [];
			let t = [], n$1 = /* @__PURE__ */ this._callbacks.slice(0), i$1 = /* @__PURE__ */ this._contexts.slice(0);
			for (let s$1 = 0, o$1 = n$1.length; s$1 < o$1; s$1++) try {
				t.push(/* @__PURE__ */ n$1[s$1].apply(i$1[s$1], e$1));
			} catch (l$2) {
				(0, ag.default)().console.error(l$2);
			}
			return t;
		}
		isEmpty() {
			return !this._callbacks || this._callbacks.length === 0;
		}
		dispose() {
			this._callbacks = void 0, this._contexts = void 0;
		}
	}, Pa$1 = class r {
		static {
			m(this, "Emitter");
		}
		constructor(e$1) {
			this._options = e$1;
		}
		get event() {
			return this._event || (this._event = (e$1, t, n$1) => {
				this._callbacks || (this._callbacks = new ou()), this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty() && this._options.onFirstListenerAdd(this), this._callbacks.add(e$1, t);
				let i$1 = { dispose: /* @__PURE__ */ m(() => {
					this._callbacks && (this._callbacks.remove(e$1, t), i$1.dispose = r._noop, this._options && this._options.onLastListenerRemove && this._callbacks.isEmpty() && this._options.onLastListenerRemove(this));
				}, "dispose") };
				return Array.isArray(n$1) && n$1.push(i$1), i$1;
			}), this._event;
		}
		fire(e$1) {
			this._callbacks && this._callbacks.invoke.call(this._callbacks, e$1);
		}
		dispose() {
			this._callbacks && (this._callbacks.dispose(), this._callbacks = void 0);
		}
	};
	Kn$1.Emitter = Pa$1;
	Pa$1._noop = function() {};
});
var Hd = /* @__PURE__ */ n((Vn$1) => {
	Object.defineProperty(Vn$1, "__esModule", { value: !0 });
	Vn$1.CancellationTokenSource = Vn$1.CancellationToken = void 0;
	var og = /* @__PURE__ */ au(), lg = /* @__PURE__ */ Vd(), uu = /* @__PURE__ */ lu(), ba$2;
	(function(r) {
		r.None = /* @__PURE__ */ Object.freeze({
			isCancellationRequested: !1,
			onCancellationRequested: uu.Event.None
		}), r.Cancelled = /* @__PURE__ */ Object.freeze({
			isCancellationRequested: !0,
			onCancellationRequested: uu.Event.None
		});
		function e$1(t) {
			let n$1 = t;
			return n$1 && (n$1 === r.None || n$1 === r.Cancelled || lg.boolean(n$1.isCancellationRequested) && !!n$1.onCancellationRequested);
		}
		m(e$1, "is"), r.is = e$1;
	})(ba$2 || (Vn$1.CancellationToken = ba$2 = {}));
	var ug = /* @__PURE__ */ Object.freeze(function(r, e$1) {
		let t = /* @__PURE__ */ (0, og.default)().timer.setTimeout(/* @__PURE__ */ r.bind(e$1), 0);
		return { dispose() {
			t.dispose();
		} };
	}), Ma$2 = class {
		static {
			m(this, "MutableToken");
		}
		constructor() {
			this._isCancelled = !1;
		}
		cancel() {
			this._isCancelled || (this._isCancelled = !0, this._emitter && (this._emitter.fire(void 0), this.dispose()));
		}
		get isCancellationRequested() {
			return this._isCancelled;
		}
		get onCancellationRequested() {
			return this._isCancelled ? ug : (this._emitter || (this._emitter = new uu.Emitter()), this._emitter.event);
		}
		dispose() {
			this._emitter && (this._emitter.dispose(), this._emitter = void 0);
		}
	}, cu = class {
		static {
			m(this, "CancellationTokenSource");
		}
		get token() {
			return this._token || (this._token = new Ma$2()), this._token;
		}
		cancel() {
			this._token ? this._token.cancel() : this._token = ba$2.Cancelled;
		}
		dispose() {
			this._token ? this._token instanceof Ma$2 && this._token.dispose() : this._token = ba$2.None;
		}
	};
	Vn$1.CancellationTokenSource = cu;
});
var fe = {};
o(fe, {
	AbstractAstReflection: () => Jt,
	AbstractCstNode: () => Wi,
	AbstractLangiumParser: () => Ki$1,
	AbstractParserErrorMessageProvider: () => La,
	AbstractThreadedAsyncParser: () => Au,
	AstUtils: () => Fs,
	BiMap: () => Rr,
	Cancellation: () => S,
	CompositeCstNodeImpl: () => gr,
	ContextCache: () => xr,
	CstNodeBuilder: () => Bi,
	CstUtils: () => Ss,
	DEFAULT_TOKENIZE_OPTIONS: () => Wa,
	DONE_RESULT: () => Ce,
	DatatypeSymbol: () => _a,
	DefaultAstNodeDescriptionProvider: () => as,
	DefaultAstNodeLocator: () => ls,
	DefaultAsyncParser: () => Ts,
	DefaultCommentProvider: () => ys,
	DefaultConfigurationProvider: () => us,
	DefaultDocumentBuilder: () => cs,
	DefaultDocumentValidator: () => ss,
	DefaultHydrator: () => xs,
	DefaultIndexManager: () => fs,
	DefaultJsonSerializer: () => rs,
	DefaultLangiumDocumentFactory: () => zi$1,
	DefaultLangiumDocuments: () => qi,
	DefaultLexer: () => Ar,
	DefaultLexerErrorMessageProvider: () => hs,
	DefaultLinker: () => Xi,
	DefaultNameProvider: () => Yi,
	DefaultReferenceDescriptionProvider: () => os,
	DefaultReferences: () => Ji,
	DefaultScopeComputation: () => Qi,
	DefaultScopeProvider: () => ts,
	DefaultServiceRegistry: () => ns,
	DefaultTokenBuilder: () => bt,
	DefaultValueConverter: () => Tr,
	DefaultWorkspaceLock: () => Rs,
	DefaultWorkspaceManager: () => ds,
	Deferred: () => Ge,
	Disposable: () => jt,
	DisposableCache: () => qn,
	DocumentCache: () => Ua,
	DocumentState: () => Y$1,
	DocumentValidator: () => Qe,
	EMPTY_SCOPE: () => fg,
	EMPTY_STREAM: () => ei,
	EmptyFileSystem: () => Su,
	EmptyFileSystemProvider: () => Xa,
	ErrorWithLocation: () => tr,
	GrammarAST: () => ui,
	GrammarUtils: () => Ks,
	IndentationAwareLexer: () => Cu,
	IndentationAwareTokenBuilder: () => qa,
	JSDocDocumentationProvider: () => gs,
	LangiumCompletionParser: () => ji,
	LangiumParser: () => Vi$1,
	LangiumParserErrorMessageProvider: () => Wn,
	LeafCstNodeImpl: () => mr,
	LexingMode: () => vr,
	MapScope: () => Zi,
	Module: () => Iu,
	MultiMap: () => st,
	OperationCancelled: () => mt,
	ParserWorker: () => vu,
	Reduction: () => Ir,
	RegExpUtils: () => Bs,
	RootCstNodeImpl: () => Bn,
	SimpleCache: () => es,
	StreamImpl: () => je,
	StreamScope: () => zn,
	TextDocument: () => jn,
	TreeStreamImpl: () => lt,
	URI: () => Ue,
	UriUtils: () => Be,
	ValidationCategory: () => Yn,
	ValidationRegistry: () => is,
	ValueConverter: () => pt,
	WorkspaceCache: () => Xn,
	assertUnreachable: () => ct,
	createCompletionParser: () => tu,
	createDefaultCoreModule: () => ku,
	createDefaultSharedCoreModule: () => $u,
	createGrammarConfig: () => il,
	createLangiumParser: () => ru,
	createParser: () => Hi,
	delayNextTick: () => fu,
	diagnosticData: () => Er,
	eagerLoad: () => dh,
	getDiagnosticRange: () => th,
	indentationBuilderDefaultOptions: () => Nu,
	inject: () => za,
	interruptAndCheck: () => ce,
	isAstNode: () => le,
	isAstNodeDescription: () => po,
	isAstNodeWithComment: () => pu,
	isCompositeCstNode: () => tt,
	isIMultiModeLexerDefinition: () => gu,
	isJSDoc: () => xu,
	isLeafCstNode: () => Gt,
	isLinkingError: () => Qt,
	isNamed: () => Zd,
	isOperationCancelled: () => gt,
	isReference: () => Ee,
	isRootCstNode: () => Zn,
	isTokenTypeArray: () => Ka,
	isTokenTypeDictionary: () => mu,
	loadGrammarFromJson: () => yt,
	parseJSDoc: () => Ru,
	prepareLangiumParser: () => Bd,
	setInterruptionPeriod: () => qd,
	startCancelableOperation: () => Fa,
	stream: () => j,
	toDiagnosticData: () => rh,
	toDiagnosticSeverity: () => Ba
});
var Ss = {};
o(Ss, {
	DefaultNameRegexp: () => Cs,
	RangeComparison: () => ut,
	compareRange: () => Yu,
	findCommentNode: () => To,
	findDeclarationNodeAtOffset: () => Ih,
	findLeafNodeAtOffset: () => Ro,
	findLeafNodeBeforeOffset: () => Ju,
	flattenCst: () => $h,
	getInteriorNodes: () => Sh,
	getNextNode: () => Nh,
	getPreviousNode: () => Zu,
	getStartlineNode: () => Ch,
	inRange: () => yo,
	isChildNode: () => go,
	isCommentNode: () => mo,
	streamCst: () => Zt,
	toDocumentSegment: () => er,
	tokenToRange: () => Nr
});
function le(r) {
	return typeof r == "object" && r !== null && typeof r.$type == "string";
}
m(le, "isAstNode");
function Ee(r) {
	return typeof r == "object" && r !== null && typeof r.$refText == "string";
}
m(Ee, "isReference");
function po(r) {
	return typeof r == "object" && r !== null && typeof r.name == "string" && typeof r.type == "string" && typeof r.path == "string";
}
m(po, "isAstNodeDescription");
function Qt(r) {
	return typeof r == "object" && r !== null && le(r.container) && Ee(r.reference) && typeof r.message == "string";
}
m(Qt, "isLinkingError");
var Jt = class {
	static {
		m(this, "AbstractAstReflection");
	}
	constructor() {
		this.subtypes = {}, this.allSubtypes = {};
	}
	isInstance(e$1, t) {
		return le(e$1) && this.isSubtype(e$1.$type, t);
	}
	isSubtype(e$1, t) {
		if (e$1 === t) return !0;
		let n$1 = this.subtypes[e$1];
		n$1 || (n$1 = this.subtypes[e$1] = {});
		let i$1 = n$1[t];
		if (i$1 !== void 0) return i$1;
		{
			let s$1 = /* @__PURE__ */ this.computeIsSubtype(e$1, t);
			return n$1[t] = s$1, s$1;
		}
	}
	getAllSubTypes(e$1) {
		let t = this.allSubtypes[e$1];
		if (t) return t;
		{
			let n$1 = /* @__PURE__ */ this.getAllTypes(), i$1 = [];
			for (let s$1 of n$1) this.isSubtype(s$1, e$1) && i$1.push(s$1);
			return this.allSubtypes[e$1] = i$1, i$1;
		}
	}
};
function tt(r) {
	return typeof r == "object" && r !== null && Array.isArray(r.content);
}
m(tt, "isCompositeCstNode");
function Gt(r) {
	return typeof r == "object" && r !== null && typeof r.tokenType == "object";
}
m(Gt, "isLeafCstNode");
function Zn(r) {
	return tt(r) && typeof r.fullText == "string";
}
m(Zn, "isRootCstNode");
var je = class r {
	static {
		m(this, "StreamImpl");
	}
	constructor(e$1, t) {
		this.startFn = e$1, this.nextFn = t;
	}
	iterator() {
		let e$1 = {
			state: /* @__PURE__ */ this.startFn(),
			next: /* @__PURE__ */ m(() => this.nextFn(e$1.state), "next"),
			[Symbol.iterator]: () => e$1
		};
		return e$1;
	}
	[Symbol.iterator]() {
		return this.iterator();
	}
	isEmpty() {
		return !!this.iterator().next().done;
	}
	count() {
		let e$1 = /* @__PURE__ */ this.iterator(), t = 0, n$1 = /* @__PURE__ */ e$1.next();
		for (; !n$1.done;) t++, n$1 = /* @__PURE__ */ e$1.next();
		return t;
	}
	toArray() {
		let e$1 = [], t = /* @__PURE__ */ this.iterator(), n$1;
		do
			n$1 = /* @__PURE__ */ t.next(), n$1.value !== void 0 && e$1.push(n$1.value);
		while (!n$1.done);
		return e$1;
	}
	toSet() {
		return new Set(this);
	}
	toMap(e$1, t) {
		let n$1 = /* @__PURE__ */ this.map((i$1) => [e$1 ? e$1(i$1) : i$1, t ? t(i$1) : i$1]);
		return new Map(n$1);
	}
	toString() {
		return this.join();
	}
	concat(e$1) {
		return new r(() => ({
			first: /* @__PURE__ */ this.startFn(),
			firstDone: !1,
			iterator: /* @__PURE__ */ e$1[Symbol.iterator]()
		}), (t) => {
			let n$1;
			if (!t.firstDone) {
				do
					if (n$1 = /* @__PURE__ */ this.nextFn(t.first), !n$1.done) return n$1;
				while (!n$1.done);
				t.firstDone = !0;
			}
			do
				if (n$1 = /* @__PURE__ */ t.iterator.next(), !n$1.done) return n$1;
			while (!n$1.done);
			return Ce;
		});
	}
	join(e$1 = ",") {
		let t = /* @__PURE__ */ this.iterator(), n$1 = "", i$1, s$1 = !1;
		do
			i$1 = /* @__PURE__ */ t.next(), i$1.done || (s$1 && (n$1 += e$1), n$1 += /* @__PURE__ */ kh(i$1.value)), s$1 = !0;
		while (!i$1.done);
		return n$1;
	}
	indexOf(e$1, t = 0) {
		let n$1 = /* @__PURE__ */ this.iterator(), i$1 = 0, s$1 = /* @__PURE__ */ n$1.next();
		for (; !s$1.done;) {
			if (i$1 >= t && s$1.value === e$1) return i$1;
			s$1 = /* @__PURE__ */ n$1.next(), i$1++;
		}
		return -1;
	}
	every(e$1) {
		let t = /* @__PURE__ */ this.iterator(), n$1 = /* @__PURE__ */ t.next();
		for (; !n$1.done;) {
			if (!e$1(n$1.value)) return !1;
			n$1 = /* @__PURE__ */ t.next();
		}
		return !0;
	}
	some(e$1) {
		let t = /* @__PURE__ */ this.iterator(), n$1 = /* @__PURE__ */ t.next();
		for (; !n$1.done;) {
			if (e$1(n$1.value)) return !0;
			n$1 = /* @__PURE__ */ t.next();
		}
		return !1;
	}
	forEach(e$1) {
		let t = /* @__PURE__ */ this.iterator(), n$1 = 0, i$1 = /* @__PURE__ */ t.next();
		for (; !i$1.done;) e$1(i$1.value, n$1), i$1 = /* @__PURE__ */ t.next(), n$1++;
	}
	map(e$1) {
		return new r(this.startFn, (t) => {
			let { done: n$1, value: i$1 } = this.nextFn(t);
			return n$1 ? Ce : {
				done: !1,
				value: /* @__PURE__ */ e$1(i$1)
			};
		});
	}
	filter(e$1) {
		return new r(this.startFn, (t) => {
			let n$1;
			do
				if (n$1 = /* @__PURE__ */ this.nextFn(t), !n$1.done && e$1(n$1.value)) return n$1;
			while (!n$1.done);
			return Ce;
		});
	}
	nonNullable() {
		return this.filter((e$1) => e$1 != null);
	}
	reduce(e$1, t) {
		let n$1 = /* @__PURE__ */ this.iterator(), i$1 = t, s$1 = /* @__PURE__ */ n$1.next();
		for (; !s$1.done;) i$1 === void 0 ? i$1 = s$1.value : i$1 = /* @__PURE__ */ e$1(i$1, s$1.value), s$1 = /* @__PURE__ */ n$1.next();
		return i$1;
	}
	reduceRight(e$1, t) {
		return this.recursiveReduce(/* @__PURE__ */ this.iterator(), e$1, t);
	}
	recursiveReduce(e$1, t, n$1) {
		let i$1 = /* @__PURE__ */ e$1.next();
		if (i$1.done) return n$1;
		let s$1 = /* @__PURE__ */ this.recursiveReduce(e$1, t, n$1);
		return s$1 === void 0 ? i$1.value : t(s$1, i$1.value);
	}
	find(e$1) {
		let t = /* @__PURE__ */ this.iterator(), n$1 = /* @__PURE__ */ t.next();
		for (; !n$1.done;) {
			if (e$1(n$1.value)) return n$1.value;
			n$1 = /* @__PURE__ */ t.next();
		}
	}
	findIndex(e$1) {
		let t = /* @__PURE__ */ this.iterator(), n$1 = 0, i$1 = /* @__PURE__ */ t.next();
		for (; !i$1.done;) {
			if (e$1(i$1.value)) return n$1;
			i$1 = /* @__PURE__ */ t.next(), n$1++;
		}
		return -1;
	}
	includes(e$1) {
		let t = /* @__PURE__ */ this.iterator(), n$1 = /* @__PURE__ */ t.next();
		for (; !n$1.done;) {
			if (n$1.value === e$1) return !0;
			n$1 = /* @__PURE__ */ t.next();
		}
		return !1;
	}
	flatMap(e$1) {
		return new r(() => ({ this: /* @__PURE__ */ this.startFn() }), (t) => {
			do {
				if (t.iterator) {
					let s$1 = /* @__PURE__ */ t.iterator.next();
					if (s$1.done) t.iterator = void 0;
					else return s$1;
				}
				let { done: n$1, value: i$1 } = this.nextFn(t.this);
				if (!n$1) {
					let s$1 = /* @__PURE__ */ e$1(i$1);
					if (Ns(s$1)) t.iterator = /* @__PURE__ */ s$1[Symbol.iterator]();
					else return {
						done: !1,
						value: s$1
					};
				}
			} while (t.iterator);
			return Ce;
		});
	}
	flat(e$1) {
		if (e$1 === void 0 && (e$1 = 1), e$1 <= 0) return this;
		let t = e$1 > 1 ? this.flat(e$1 - 1) : this;
		return new r(() => ({ this: /* @__PURE__ */ t.startFn() }), (n$1) => {
			do {
				if (n$1.iterator) {
					let o$1 = /* @__PURE__ */ n$1.iterator.next();
					if (o$1.done) n$1.iterator = void 0;
					else return o$1;
				}
				let { done: i$1, value: s$1 } = t.nextFn(n$1.this);
				if (!i$1) if (Ns(s$1)) n$1.iterator = /* @__PURE__ */ s$1[Symbol.iterator]();
				else return {
					done: !1,
					value: s$1
				};
			} while (n$1.iterator);
			return Ce;
		});
	}
	head() {
		let t = /* @__PURE__ */ this.iterator().next();
		if (!t.done) return t.value;
	}
	tail(e$1 = 1) {
		return new r(() => {
			let t = /* @__PURE__ */ this.startFn();
			for (let n$1 = 0; n$1 < e$1; n$1++) if (this.nextFn(t).done) return t;
			return t;
		}, this.nextFn);
	}
	limit(e$1) {
		return new r(() => ({
			size: 0,
			state: /* @__PURE__ */ this.startFn()
		}), (t) => (t.size++, t.size > e$1 ? Ce : this.nextFn(t.state)));
	}
	distinct(e$1) {
		return new r(() => ({
			set: /* @__PURE__ */ new Set(),
			internalState: /* @__PURE__ */ this.startFn()
		}), (t) => {
			let n$1;
			do
				if (n$1 = /* @__PURE__ */ this.nextFn(t.internalState), !n$1.done) {
					let i$1 = e$1 ? e$1(n$1.value) : n$1.value;
					if (!t.set.has(i$1)) return t.set.add(i$1), n$1;
				}
			while (!n$1.done);
			return Ce;
		});
	}
	exclude(e$1, t) {
		let n$1 = /* @__PURE__ */ new Set();
		for (let i$1 of e$1) {
			let s$1 = t ? t(i$1) : i$1;
			n$1.add(s$1);
		}
		return this.filter((i$1) => {
			let s$1 = t ? t(i$1) : i$1;
			return !n$1.has(s$1);
		});
	}
};
function kh(r) {
	return typeof r == "string" ? r : typeof r > "u" ? "undefined" : typeof r.toString == "function" ? r.toString() : Object.prototype.toString.call(r);
}
m(kh, "toString");
function Ns(r) {
	return !!r && typeof r[Symbol.iterator] == "function";
}
m(Ns, "isIterable");
var ei = new je(() => {}, () => Ce), Ce = /* @__PURE__ */ Object.freeze({
	done: !0,
	value: void 0
});
function j(...r) {
	if (r.length === 1) {
		let e$1 = r[0];
		if (e$1 instanceof je) return e$1;
		if (Ns(e$1)) return new je(() => e$1[Symbol.iterator](), (t) => t.next());
		if (typeof e$1.length == "number") return new je(() => ({ index: 0 }), (t) => t.index < e$1.length ? {
			done: !1,
			value: e$1[t.index++]
		} : Ce);
	}
	return r.length > 1 ? new je(() => ({
		collIndex: 0,
		arrIndex: 0
	}), (e$1) => {
		do {
			if (e$1.iterator) {
				let t = /* @__PURE__ */ e$1.iterator.next();
				if (!t.done) return t;
				e$1.iterator = void 0;
			}
			if (e$1.array) {
				if (e$1.arrIndex < e$1.array.length) return {
					done: !1,
					value: e$1.array[e$1.arrIndex++]
				};
				e$1.array = void 0, e$1.arrIndex = 0;
			}
			if (e$1.collIndex < r.length) {
				let t = r[e$1.collIndex++];
				Ns(t) ? e$1.iterator = /* @__PURE__ */ t[Symbol.iterator]() : t && typeof t.length == "number" && (e$1.array = t);
			}
		} while (e$1.iterator || e$1.array || e$1.collIndex < r.length);
		return Ce;
	}) : ei;
}
m(j, "stream");
var lt = class extends je {
	static {
		m(this, "TreeStreamImpl");
	}
	constructor(e$1, t, n$1) {
		super(() => ({
			iterators: n$1?.includeRoot ? [/* @__PURE__ */ [e$1][Symbol.iterator]()] : [/* @__PURE__ */ t(e$1)[Symbol.iterator]()],
			pruned: !1
		}), (i$1) => {
			for (i$1.pruned && (i$1.iterators.pop(), i$1.pruned = !1); i$1.iterators.length > 0;) {
				let o$1 = /* @__PURE__ */ i$1.iterators[i$1.iterators.length - 1].next();
				if (o$1.done) i$1.iterators.pop();
				else return i$1.iterators.push(/* @__PURE__ */ t(o$1.value)[Symbol.iterator]()), o$1;
			}
			return Ce;
		});
	}
	iterator() {
		let e$1 = {
			state: /* @__PURE__ */ this.startFn(),
			next: /* @__PURE__ */ m(() => this.nextFn(e$1.state), "next"),
			prune: /* @__PURE__ */ m(() => {
				e$1.state.pruned = !0;
			}, "prune"),
			[Symbol.iterator]: () => e$1
		};
		return e$1;
	}
}, Ir;
(function(r) {
	function e$1(s$1) {
		return s$1.reduce((o$1, l$2) => o$1 + l$2, 0);
	}
	m(e$1, "sum"), r.sum = e$1;
	function t(s$1) {
		return s$1.reduce((o$1, l$2) => o$1 * l$2, 0);
	}
	m(t, "product"), r.product = t;
	function n$1(s$1) {
		return s$1.reduce((o$1, l$2) => Math.min(o$1, l$2));
	}
	m(n$1, "min"), r.min = n$1;
	function i$1(s$1) {
		return s$1.reduce((o$1, l$2) => Math.max(o$1, l$2));
	}
	m(i$1, "max"), r.max = i$1;
})(Ir || (Ir = {}));
function Zt(r) {
	return new lt(r, (e$1) => tt(e$1) ? e$1.content : [], { includeRoot: !0 });
}
m(Zt, "streamCst");
function $h(r) {
	return Zt(r).filter(Gt);
}
m($h, "flattenCst");
function go(r, e$1) {
	for (; r.container;) if (r = r.container, r === e$1) return !0;
	return !1;
}
m(go, "isChildNode");
function Nr(r) {
	return {
		start: {
			character: r.startColumn - 1,
			line: r.startLine - 1
		},
		end: {
			character: r.endColumn,
			line: r.endLine - 1
		}
	};
}
m(Nr, "tokenToRange");
function er(r) {
	if (!r) return;
	let { offset: e$1, end: t, range: n$1 } = r;
	return {
		range: n$1,
		offset: e$1,
		end: t,
		length: t - e$1
	};
}
m(er, "toDocumentSegment");
var ut;
(function(r) {
	r[r.Before = 0] = "Before", r[r.After = 1] = "After", r[r.OverlapFront = 2] = "OverlapFront", r[r.OverlapBack = 3] = "OverlapBack", r[r.Inside = 4] = "Inside", r[r.Outside = 5] = "Outside";
})(ut || (ut = {}));
function Yu(r, e$1) {
	if (r.end.line < e$1.start.line || r.end.line === e$1.start.line && r.end.character <= e$1.start.character) return ut.Before;
	if (r.start.line > e$1.end.line || r.start.line === e$1.end.line && r.start.character >= e$1.end.character) return ut.After;
	let t = r.start.line > e$1.start.line || r.start.line === e$1.start.line && r.start.character >= e$1.start.character, n$1 = r.end.line < e$1.end.line || r.end.line === e$1.end.line && r.end.character <= e$1.end.character;
	return t && n$1 ? ut.Inside : t ? ut.OverlapBack : n$1 ? ut.OverlapFront : ut.Outside;
}
m(Yu, "compareRange");
function yo(r, e$1) {
	return Yu(r, e$1) > ut.After;
}
m(yo, "inRange");
var Cs = /^[\w\p{L}]$/u;
function Ih(r, e$1, t = Cs) {
	if (r) {
		if (e$1 > 0) {
			let n$1 = e$1 - r.offset, i$1 = /* @__PURE__ */ r.text.charAt(n$1);
			t.test(i$1) || e$1--;
		}
		return Ro(r, e$1);
	}
}
m(Ih, "findDeclarationNodeAtOffset");
function To(r, e$1) {
	if (r) {
		let t = /* @__PURE__ */ Zu(r, !0);
		if (t && mo(t, e$1)) return t;
		if (Zn(r)) {
			let n$1 = /* @__PURE__ */ r.content.findIndex((i$1) => !i$1.hidden);
			for (let i$1 = n$1 - 1; i$1 >= 0; i$1--) {
				let s$1 = r.content[i$1];
				if (mo(s$1, e$1)) return s$1;
			}
		}
	}
}
m(To, "findCommentNode");
function mo(r, e$1) {
	return Gt(r) && e$1.includes(r.tokenType.name);
}
m(mo, "isCommentNode");
function Ro(r, e$1) {
	if (Gt(r)) return r;
	if (tt(r)) {
		let t = /* @__PURE__ */ Qu(r, e$1, !1);
		if (t) return Ro(t, e$1);
	}
}
m(Ro, "findLeafNodeAtOffset");
function Ju(r, e$1) {
	if (Gt(r)) return r;
	if (tt(r)) {
		let t = /* @__PURE__ */ Qu(r, e$1, !0);
		if (t) return Ju(t, e$1);
	}
}
m(Ju, "findLeafNodeBeforeOffset");
function Qu(r, e$1, t) {
	let n$1 = 0, i$1 = r.content.length - 1, s$1;
	for (; n$1 <= i$1;) {
		let o$1 = /* @__PURE__ */ Math.floor((n$1 + i$1) / 2), l$2 = r.content[o$1];
		if (l$2.offset <= e$1 && l$2.end > e$1) return l$2;
		l$2.end <= e$1 ? (s$1 = t ? l$2 : void 0, n$1 = o$1 + 1) : i$1 = o$1 - 1;
	}
	return s$1;
}
m(Qu, "binarySearch");
function Zu(r, e$1 = !0) {
	for (; r.container;) {
		let t = r.container, n$1 = /* @__PURE__ */ t.content.indexOf(r);
		for (; n$1 > 0;) {
			n$1--;
			let i$1 = t.content[n$1];
			if (e$1 || !i$1.hidden) return i$1;
		}
		r = t;
	}
}
m(Zu, "getPreviousNode");
function Nh(r, e$1 = !0) {
	for (; r.container;) {
		let t = r.container, n$1 = /* @__PURE__ */ t.content.indexOf(r), i$1 = t.content.length - 1;
		for (; n$1 < i$1;) {
			n$1++;
			let s$1 = t.content[n$1];
			if (e$1 || !s$1.hidden) return s$1;
		}
		r = t;
	}
}
m(Nh, "getNextNode");
function Ch(r) {
	if (r.range.start.character === 0) return r;
	let e$1 = r.range.start.line, t = r, n$1;
	for (; r.container;) {
		let i$1 = r.container, s$1 = n$1 ?? i$1.content.indexOf(r);
		if (s$1 === 0 ? (r = i$1, n$1 = void 0) : (n$1 = s$1 - 1, r = i$1.content[n$1]), r.range.start.line !== e$1) break;
		t = r;
	}
	return t;
}
m(Ch, "getStartlineNode");
function Sh(r, e$1) {
	let t = /* @__PURE__ */ wh(r, e$1);
	return t ? t.parent.content.slice(t.a + 1, t.b) : [];
}
m(Sh, "getInteriorNodes");
function wh(r, e$1) {
	let t = /* @__PURE__ */ Xu(r), n$1 = /* @__PURE__ */ Xu(e$1), i$1;
	for (let s$1 = 0; s$1 < t.length && s$1 < n$1.length; s$1++) {
		let o$1 = t[s$1], l$2 = n$1[s$1];
		if (o$1.parent === l$2.parent) i$1 = {
			parent: o$1.parent,
			a: o$1.index,
			b: l$2.index
		};
		else break;
	}
	return i$1;
}
m(wh, "getCommonParent");
function Xu(r) {
	let e$1 = [];
	for (; r.container;) {
		let t = r.container, n$1 = /* @__PURE__ */ t.content.indexOf(r);
		e$1.push({
			parent: t,
			index: n$1
		}), r = t;
	}
	return e$1.reverse();
}
m(Xu, "getParentChain");
var Ks = {};
o(Ks, {
	findAssignment: () => tl,
	findNameAssignment: () => Ws,
	findNodeForKeyword: () => Zo,
	findNodeForProperty: () => gi,
	findNodesForKeyword: () => Jh,
	findNodesForKeywordInternal: () => el,
	findNodesForProperty: () => Jo,
	getActionAtElement: () => uc,
	getActionType: () => fc,
	getAllReachableRules: () => mi,
	getCrossReferenceTerminal: () => Xo,
	getEntryRule: () => sc,
	getExplicitRuleType: () => yn,
	getHiddenRules: () => ac,
	getRuleType: () => rl,
	getRuleTypeName: () => rp,
	getTypeName: () => Ti,
	isArrayCardinality: () => Zh,
	isArrayOperator: () => ep,
	isCommentTerminal: () => Yo,
	isDataType: () => tp,
	isDataTypeRule: () => yi,
	isOptionalCardinality: () => Qh,
	terminalRegex: () => Tn
});
var tr = class extends Error {
	static {
		m(this, "ErrorWithLocation");
	}
	constructor(e$1, t) {
		super(e$1 ? `${t} at ${e$1.range.start.line}:${e$1.range.start.character}` : t);
	}
};
function ct(r) {
	throw new Error("Error! The input value was not handled.");
}
m(ct, "assertUnreachable");
var ui = {};
o(ui, {
	AbstractElement: () => wr,
	AbstractRule: () => Cr$1,
	AbstractType: () => Sr,
	Action: () => Xr$1,
	Alternatives: () => Yr,
	ArrayLiteral: () => _r,
	ArrayType: () => Lr,
	Assignment: () => Jr$1,
	BooleanLiteral: () => Or,
	CharacterRange: () => Qr$1,
	Condition: () => ti,
	Conjunction: () => Pr,
	CrossReference: () => Zr$1,
	Disjunction: () => br,
	EndOfFile: () => en,
	Grammar: () => Mr,
	GrammarImport: () => ni,
	Group: () => tn,
	InferredType: () => Dr,
	Interface: () => Fr,
	Keyword: () => rn,
	LangiumGrammarAstReflection: () => hn,
	LangiumGrammarTerminals: () => _h,
	NamedArgument: () => ii,
	NegatedToken: () => nn,
	Negation: () => Gr,
	NumberLiteral: () => Ur,
	Parameter: () => Br,
	ParameterReference: () => Wr,
	ParserRule: () => Kr,
	ReferenceType: () => Vr,
	RegexToken: () => sn$1,
	ReturnType: () => si,
	RuleCall: () => an,
	SimpleType: () => jr,
	StringLiteral: () => Hr,
	TerminalAlternatives: () => on,
	TerminalGroup: () => ln,
	TerminalRule: () => rr,
	TerminalRuleCall: () => un,
	Type: () => zr,
	TypeAttribute: () => ai,
	TypeDefinition: () => ws,
	UnionType: () => qr,
	UnorderedGroup: () => cn,
	UntilToken: () => fn$1,
	ValueLiteral: () => ri,
	Wildcard: () => dn,
	isAbstractElement: () => oi,
	isAbstractRule: () => Lh,
	isAbstractType: () => Oh,
	isAction: () => $t,
	isAlternatives: () => Ps,
	isArrayLiteral: () => Fh,
	isArrayType: () => xo,
	isAssignment: () => rt,
	isBooleanLiteral: () => Eo,
	isCharacterRange: () => So,
	isCondition: () => Ph,
	isConjunction: () => Ao,
	isCrossReference: () => nr,
	isDisjunction: () => vo,
	isEndOfFile: () => wo,
	isFeatureName: () => bh,
	isGrammar: () => Gh,
	isGrammarImport: () => Uh,
	isGroup: () => Ut,
	isInferredType: () => _s,
	isInterface: () => Ls,
	isKeyword: () => Ye,
	isNamedArgument: () => Bh,
	isNegatedToken: () => _o,
	isNegation: () => ko,
	isNumberLiteral: () => Wh,
	isParameter: () => Kh,
	isParameterReference: () => $o,
	isParserRule: () => Se,
	isPrimitiveType: () => ec,
	isReferenceType: () => Io,
	isRegexToken: () => Lo,
	isReturnType: () => No,
	isRuleCall: () => nt,
	isSimpleType: () => Os,
	isStringLiteral: () => Vh,
	isTerminalAlternatives: () => Oo,
	isTerminalGroup: () => Po,
	isTerminalRule: () => He,
	isTerminalRuleCall: () => bs,
	isType: () => li,
	isTypeAttribute: () => jh,
	isTypeDefinition: () => Mh,
	isUnionType: () => Co,
	isUnorderedGroup: () => Ms,
	isUntilToken: () => bo,
	isValueLiteral: () => Dh,
	isWildcard: () => Mo,
	reflection: () => _
});
var _h = {
	ID: /\^?[_a-zA-Z][\w_]*/,
	STRING: /"(\\.|[^"\\])*"|'(\\.|[^'\\])*'/,
	NUMBER: /NaN|-?((\d*\.\d+|\d+)([Ee][+-]?\d+)?|Infinity)/,
	RegexLiteral: /\/(?![*+?])(?:[^\r\n\[/\\]|\\.|\[(?:[^\r\n\]\\]|\\.)*\])+\/[a-z]*/,
	WS: /\s+/,
	ML_COMMENT: /\/\*[\s\S]*?\*\//,
	SL_COMMENT: /\/\/[^\n\r]*/
}, Cr$1 = "AbstractRule";
function Lh(r) {
	return _.isInstance(r, Cr$1);
}
m(Lh, "isAbstractRule");
var Sr = "AbstractType";
function Oh(r) {
	return _.isInstance(r, Sr);
}
m(Oh, "isAbstractType");
var ti = "Condition";
function Ph(r) {
	return _.isInstance(r, ti);
}
m(Ph, "isCondition");
function bh(r) {
	return ec(r) || r === "current" || r === "entry" || r === "extends" || r === "false" || r === "fragment" || r === "grammar" || r === "hidden" || r === "import" || r === "interface" || r === "returns" || r === "terminal" || r === "true" || r === "type" || r === "infer" || r === "infers" || r === "with" || typeof r == "string" && /\^?[_a-zA-Z][\w_]*/.test(r);
}
m(bh, "isFeatureName");
function ec(r) {
	return r === "string" || r === "number" || r === "boolean" || r === "Date" || r === "bigint";
}
m(ec, "isPrimitiveType");
var ws = "TypeDefinition";
function Mh(r) {
	return _.isInstance(r, ws);
}
m(Mh, "isTypeDefinition");
var ri = "ValueLiteral";
function Dh(r) {
	return _.isInstance(r, ri);
}
m(Dh, "isValueLiteral");
var wr = "AbstractElement";
function oi(r) {
	return _.isInstance(r, wr);
}
m(oi, "isAbstractElement");
var _r = "ArrayLiteral";
function Fh(r) {
	return _.isInstance(r, _r);
}
m(Fh, "isArrayLiteral");
var Lr = "ArrayType";
function xo(r) {
	return _.isInstance(r, Lr);
}
m(xo, "isArrayType");
var Or = "BooleanLiteral";
function Eo(r) {
	return _.isInstance(r, Or);
}
m(Eo, "isBooleanLiteral");
var Pr = "Conjunction";
function Ao(r) {
	return _.isInstance(r, Pr);
}
m(Ao, "isConjunction");
var br = "Disjunction";
function vo(r) {
	return _.isInstance(r, br);
}
m(vo, "isDisjunction");
var Mr = "Grammar";
function Gh(r) {
	return _.isInstance(r, Mr);
}
m(Gh, "isGrammar");
var ni = "GrammarImport";
function Uh(r) {
	return _.isInstance(r, ni);
}
m(Uh, "isGrammarImport");
var Dr = "InferredType";
function _s(r) {
	return _.isInstance(r, Dr);
}
m(_s, "isInferredType");
var Fr = "Interface";
function Ls(r) {
	return _.isInstance(r, Fr);
}
m(Ls, "isInterface");
var ii = "NamedArgument";
function Bh(r) {
	return _.isInstance(r, ii);
}
m(Bh, "isNamedArgument");
var Gr = "Negation";
function ko(r) {
	return _.isInstance(r, Gr);
}
m(ko, "isNegation");
var Ur = "NumberLiteral";
function Wh(r) {
	return _.isInstance(r, Ur);
}
m(Wh, "isNumberLiteral");
var Br = "Parameter";
function Kh(r) {
	return _.isInstance(r, Br);
}
m(Kh, "isParameter");
var Wr = "ParameterReference";
function $o(r) {
	return _.isInstance(r, Wr);
}
m($o, "isParameterReference");
var Kr = "ParserRule";
function Se(r) {
	return _.isInstance(r, Kr);
}
m(Se, "isParserRule");
var Vr = "ReferenceType";
function Io(r) {
	return _.isInstance(r, Vr);
}
m(Io, "isReferenceType");
var si = "ReturnType";
function No(r) {
	return _.isInstance(r, si);
}
m(No, "isReturnType");
var jr = "SimpleType";
function Os(r) {
	return _.isInstance(r, jr);
}
m(Os, "isSimpleType");
var Hr = "StringLiteral";
function Vh(r) {
	return _.isInstance(r, Hr);
}
m(Vh, "isStringLiteral");
var rr = "TerminalRule";
function He(r) {
	return _.isInstance(r, rr);
}
m(He, "isTerminalRule");
var zr = "Type";
function li(r) {
	return _.isInstance(r, zr);
}
m(li, "isType");
var ai = "TypeAttribute";
function jh(r) {
	return _.isInstance(r, ai);
}
m(jh, "isTypeAttribute");
var qr = "UnionType";
function Co(r) {
	return _.isInstance(r, qr);
}
m(Co, "isUnionType");
var Xr$1 = "Action";
function $t(r) {
	return _.isInstance(r, Xr$1);
}
m($t, "isAction");
var Yr = "Alternatives";
function Ps(r) {
	return _.isInstance(r, Yr);
}
m(Ps, "isAlternatives");
var Jr$1 = "Assignment";
function rt(r) {
	return _.isInstance(r, Jr$1);
}
m(rt, "isAssignment");
var Qr$1 = "CharacterRange";
function So(r) {
	return _.isInstance(r, Qr$1);
}
m(So, "isCharacterRange");
var Zr$1 = "CrossReference";
function nr(r) {
	return _.isInstance(r, Zr$1);
}
m(nr, "isCrossReference");
var en = "EndOfFile";
function wo(r) {
	return _.isInstance(r, en);
}
m(wo, "isEndOfFile");
var tn = "Group";
function Ut(r) {
	return _.isInstance(r, tn);
}
m(Ut, "isGroup");
var rn = "Keyword";
function Ye(r) {
	return _.isInstance(r, rn);
}
m(Ye, "isKeyword");
var nn = "NegatedToken";
function _o(r) {
	return _.isInstance(r, nn);
}
m(_o, "isNegatedToken");
var sn$1 = "RegexToken";
function Lo(r) {
	return _.isInstance(r, sn$1);
}
m(Lo, "isRegexToken");
var an = "RuleCall";
function nt(r) {
	return _.isInstance(r, an);
}
m(nt, "isRuleCall");
var on = "TerminalAlternatives";
function Oo(r) {
	return _.isInstance(r, on);
}
m(Oo, "isTerminalAlternatives");
var ln = "TerminalGroup";
function Po(r) {
	return _.isInstance(r, ln);
}
m(Po, "isTerminalGroup");
var un = "TerminalRuleCall";
function bs(r) {
	return _.isInstance(r, un);
}
m(bs, "isTerminalRuleCall");
var cn = "UnorderedGroup";
function Ms(r) {
	return _.isInstance(r, cn);
}
m(Ms, "isUnorderedGroup");
var fn$1 = "UntilToken";
function bo(r) {
	return _.isInstance(r, fn$1);
}
m(bo, "isUntilToken");
var dn = "Wildcard";
function Mo(r) {
	return _.isInstance(r, dn);
}
m(Mo, "isWildcard");
var hn = class extends Jt {
	static {
		m(this, "LangiumGrammarAstReflection");
	}
	getAllTypes() {
		return [
			wr,
			Cr$1,
			Sr,
			Xr$1,
			Yr,
			_r,
			Lr,
			Jr$1,
			Or,
			Qr$1,
			ti,
			Pr,
			Zr$1,
			br,
			en,
			Mr,
			ni,
			tn,
			Dr,
			Fr,
			rn,
			ii,
			nn,
			Gr,
			Ur,
			Br,
			Wr,
			Kr,
			Vr,
			sn$1,
			si,
			an,
			jr,
			Hr,
			on,
			ln,
			rr,
			un,
			zr,
			ai,
			ws,
			qr,
			cn,
			fn$1,
			ri,
			dn
		];
	}
	computeIsSubtype(e$1, t) {
		switch (e$1) {
			case Xr$1:
			case Yr:
			case Jr$1:
			case Qr$1:
			case Zr$1:
			case en:
			case tn:
			case rn:
			case nn:
			case sn$1:
			case an:
			case on:
			case ln:
			case un:
			case cn:
			case fn$1:
			case dn: return this.isSubtype(wr, t);
			case _r:
			case Ur:
			case Hr: return this.isSubtype(ri, t);
			case Lr:
			case Vr:
			case jr:
			case qr: return this.isSubtype(ws, t);
			case Or: return this.isSubtype(ti, t) || this.isSubtype(ri, t);
			case Pr:
			case br:
			case Gr:
			case Wr: return this.isSubtype(ti, t);
			case Dr:
			case Fr:
			case zr: return this.isSubtype(Sr, t);
			case Kr: return this.isSubtype(Cr$1, t) || this.isSubtype(Sr, t);
			case rr: return this.isSubtype(Cr$1, t);
			default: return !1;
		}
	}
	getReferenceType(e$1) {
		let t = `${e$1.container.$type}:${e$1.property}`;
		switch (t) {
			case "Action:type":
			case "CrossReference:type":
			case "Interface:superTypes":
			case "ParserRule:returnType":
			case "SimpleType:typeRef": return Sr;
			case "Grammar:hiddenTokens":
			case "ParserRule:hiddenTokens":
			case "RuleCall:rule": return Cr$1;
			case "Grammar:usedGrammars": return Mr;
			case "NamedArgument:parameter":
			case "ParameterReference:parameter": return Br;
			case "TerminalRuleCall:rule": return rr;
			default: throw new Error(`${t} is not a valid reference id.`);
		}
	}
	getTypeMetaData(e$1) {
		switch (e$1) {
			case wr: return {
				name: wr,
				properties: [{ name: "cardinality" }, { name: "lookahead" }]
			};
			case _r: return {
				name: _r,
				properties: [{
					name: "elements",
					defaultValue: []
				}]
			};
			case Lr: return {
				name: Lr,
				properties: [{ name: "elementType" }]
			};
			case Or: return {
				name: Or,
				properties: [{
					name: "true",
					defaultValue: !1
				}]
			};
			case Pr: return {
				name: Pr,
				properties: [{ name: "left" }, { name: "right" }]
			};
			case br: return {
				name: br,
				properties: [{ name: "left" }, { name: "right" }]
			};
			case Mr: return {
				name: Mr,
				properties: [
					{
						name: "definesHiddenTokens",
						defaultValue: !1
					},
					{
						name: "hiddenTokens",
						defaultValue: []
					},
					{
						name: "imports",
						defaultValue: []
					},
					{
						name: "interfaces",
						defaultValue: []
					},
					{
						name: "isDeclared",
						defaultValue: !1
					},
					{ name: "name" },
					{
						name: "rules",
						defaultValue: []
					},
					{
						name: "types",
						defaultValue: []
					},
					{
						name: "usedGrammars",
						defaultValue: []
					}
				]
			};
			case ni: return {
				name: ni,
				properties: [{ name: "path" }]
			};
			case Dr: return {
				name: Dr,
				properties: [{ name: "name" }]
			};
			case Fr: return {
				name: Fr,
				properties: [
					{
						name: "attributes",
						defaultValue: []
					},
					{ name: "name" },
					{
						name: "superTypes",
						defaultValue: []
					}
				]
			};
			case ii: return {
				name: ii,
				properties: [
					{
						name: "calledByName",
						defaultValue: !1
					},
					{ name: "parameter" },
					{ name: "value" }
				]
			};
			case Gr: return {
				name: Gr,
				properties: [{ name: "value" }]
			};
			case Ur: return {
				name: Ur,
				properties: [{ name: "value" }]
			};
			case Br: return {
				name: Br,
				properties: [{ name: "name" }]
			};
			case Wr: return {
				name: Wr,
				properties: [{ name: "parameter" }]
			};
			case Kr: return {
				name: Kr,
				properties: [
					{ name: "dataType" },
					{
						name: "definesHiddenTokens",
						defaultValue: !1
					},
					{ name: "definition" },
					{
						name: "entry",
						defaultValue: !1
					},
					{
						name: "fragment",
						defaultValue: !1
					},
					{
						name: "hiddenTokens",
						defaultValue: []
					},
					{ name: "inferredType" },
					{ name: "name" },
					{
						name: "parameters",
						defaultValue: []
					},
					{ name: "returnType" },
					{
						name: "wildcard",
						defaultValue: !1
					}
				]
			};
			case Vr: return {
				name: Vr,
				properties: [{ name: "referenceType" }]
			};
			case si: return {
				name: si,
				properties: [{ name: "name" }]
			};
			case jr: return {
				name: jr,
				properties: [
					{ name: "primitiveType" },
					{ name: "stringType" },
					{ name: "typeRef" }
				]
			};
			case Hr: return {
				name: Hr,
				properties: [{ name: "value" }]
			};
			case rr: return {
				name: rr,
				properties: [
					{ name: "definition" },
					{
						name: "fragment",
						defaultValue: !1
					},
					{
						name: "hidden",
						defaultValue: !1
					},
					{ name: "name" },
					{ name: "type" }
				]
			};
			case zr: return {
				name: zr,
				properties: [{ name: "name" }, { name: "type" }]
			};
			case ai: return {
				name: ai,
				properties: [
					{ name: "defaultValue" },
					{
						name: "isOptional",
						defaultValue: !1
					},
					{ name: "name" },
					{ name: "type" }
				]
			};
			case qr: return {
				name: qr,
				properties: [{
					name: "types",
					defaultValue: []
				}]
			};
			case Xr$1: return {
				name: Xr$1,
				properties: [
					{ name: "cardinality" },
					{ name: "feature" },
					{ name: "inferredType" },
					{ name: "lookahead" },
					{ name: "operator" },
					{ name: "type" }
				]
			};
			case Yr: return {
				name: Yr,
				properties: [
					{ name: "cardinality" },
					{
						name: "elements",
						defaultValue: []
					},
					{ name: "lookahead" }
				]
			};
			case Jr$1: return {
				name: Jr$1,
				properties: [
					{ name: "cardinality" },
					{ name: "feature" },
					{ name: "lookahead" },
					{ name: "operator" },
					{ name: "terminal" }
				]
			};
			case Qr$1: return {
				name: Qr$1,
				properties: [
					{ name: "cardinality" },
					{ name: "left" },
					{ name: "lookahead" },
					{ name: "right" }
				]
			};
			case Zr$1: return {
				name: Zr$1,
				properties: [
					{ name: "cardinality" },
					{
						name: "deprecatedSyntax",
						defaultValue: !1
					},
					{ name: "lookahead" },
					{ name: "terminal" },
					{ name: "type" }
				]
			};
			case en: return {
				name: en,
				properties: [{ name: "cardinality" }, { name: "lookahead" }]
			};
			case tn: return {
				name: tn,
				properties: [
					{ name: "cardinality" },
					{
						name: "elements",
						defaultValue: []
					},
					{ name: "guardCondition" },
					{ name: "lookahead" }
				]
			};
			case rn: return {
				name: rn,
				properties: [
					{ name: "cardinality" },
					{ name: "lookahead" },
					{ name: "value" }
				]
			};
			case nn: return {
				name: nn,
				properties: [
					{ name: "cardinality" },
					{ name: "lookahead" },
					{ name: "terminal" }
				]
			};
			case sn$1: return {
				name: sn$1,
				properties: [
					{ name: "cardinality" },
					{ name: "lookahead" },
					{ name: "regex" }
				]
			};
			case an: return {
				name: an,
				properties: [
					{
						name: "arguments",
						defaultValue: []
					},
					{ name: "cardinality" },
					{ name: "lookahead" },
					{ name: "rule" }
				]
			};
			case on: return {
				name: on,
				properties: [
					{ name: "cardinality" },
					{
						name: "elements",
						defaultValue: []
					},
					{ name: "lookahead" }
				]
			};
			case ln: return {
				name: ln,
				properties: [
					{ name: "cardinality" },
					{
						name: "elements",
						defaultValue: []
					},
					{ name: "lookahead" }
				]
			};
			case un: return {
				name: un,
				properties: [
					{ name: "cardinality" },
					{ name: "lookahead" },
					{ name: "rule" }
				]
			};
			case cn: return {
				name: cn,
				properties: [
					{ name: "cardinality" },
					{
						name: "elements",
						defaultValue: []
					},
					{ name: "lookahead" }
				]
			};
			case fn$1: return {
				name: fn$1,
				properties: [
					{ name: "cardinality" },
					{ name: "lookahead" },
					{ name: "terminal" }
				]
			};
			case dn: return {
				name: dn,
				properties: [{ name: "cardinality" }, { name: "lookahead" }]
			};
			default: return {
				name: e$1,
				properties: []
			};
		}
	}
}, _ = new hn();
var Fs = {};
o(Fs, {
	assignMandatoryProperties: () => Go,
	copyAstNode: () => Fo,
	findLocalReferences: () => zh,
	findRootNode: () => ci,
	getContainerOfType: () => ir,
	getDocument: () => we,
	hasContainerOfType: () => Hh,
	linkContentToContainer: () => Ds,
	streamAllContents: () => ft,
	streamAst: () => Je,
	streamContents: () => fi$1,
	streamReferences: () => pn
});
function Ds(r) {
	for (let [e$1, t] of Object.entries(r)) e$1.startsWith("$") || (Array.isArray(t) ? t.forEach((n$1, i$1) => {
		le(n$1) && (n$1.$container = r, n$1.$containerProperty = e$1, n$1.$containerIndex = i$1);
	}) : le(t) && (t.$container = r, t.$containerProperty = e$1));
}
m(Ds, "linkContentToContainer");
function ir(r, e$1) {
	let t = r;
	for (; t;) {
		if (e$1(t)) return t;
		t = t.$container;
	}
}
m(ir, "getContainerOfType");
function Hh(r, e$1) {
	let t = r;
	for (; t;) {
		if (e$1(t)) return !0;
		t = t.$container;
	}
	return !1;
}
m(Hh, "hasContainerOfType");
function we(r) {
	let t = ci(r).$document;
	if (!t) throw new Error("AST node has no document.");
	return t;
}
m(we, "getDocument");
function ci(r) {
	for (; r.$container;) r = r.$container;
	return r;
}
m(ci, "findRootNode");
function fi$1(r, e$1) {
	if (!r) throw new Error("Node must be an AstNode.");
	let t = e$1?.range;
	return new je(() => ({
		keys: /* @__PURE__ */ Object.keys(r),
		keyIndex: 0,
		arrayIndex: 0
	}), (n$1) => {
		for (; n$1.keyIndex < n$1.keys.length;) {
			let i$1 = n$1.keys[n$1.keyIndex];
			if (!i$1.startsWith("$")) {
				let s$1 = r[i$1];
				if (le(s$1)) {
					if (n$1.keyIndex++, Do(s$1, t)) return {
						done: !1,
						value: s$1
					};
				} else if (Array.isArray(s$1)) {
					for (; n$1.arrayIndex < s$1.length;) {
						let o$1 = n$1.arrayIndex++, l$2 = s$1[o$1];
						if (le(l$2) && Do(l$2, t)) return {
							done: !1,
							value: l$2
						};
					}
					n$1.arrayIndex = 0;
				}
			}
			n$1.keyIndex++;
		}
		return Ce;
	});
}
m(fi$1, "streamContents");
function ft(r, e$1) {
	if (!r) throw new Error("Root node must be an AstNode.");
	return new lt(r, (t) => fi$1(t, e$1));
}
m(ft, "streamAllContents");
function Je(r, e$1) {
	if (r) {
		if (e$1?.range && !Do(r, e$1.range)) return new lt(r, () => []);
	} else throw new Error("Root node must be an AstNode.");
	return new lt(r, (t) => fi$1(t, e$1), { includeRoot: !0 });
}
m(Je, "streamAst");
function Do(r, e$1) {
	var t;
	if (!e$1) return !0;
	let n$1 = (t = r.$cstNode) === null || t === void 0 ? void 0 : t.range;
	return n$1 ? yo(n$1, e$1) : !1;
}
m(Do, "isAstNodeInRange");
function pn(r) {
	return new je(() => ({
		keys: /* @__PURE__ */ Object.keys(r),
		keyIndex: 0,
		arrayIndex: 0
	}), (e$1) => {
		for (; e$1.keyIndex < e$1.keys.length;) {
			let t = e$1.keys[e$1.keyIndex];
			if (!t.startsWith("$")) {
				let n$1 = r[t];
				if (Ee(n$1)) return e$1.keyIndex++, {
					done: !1,
					value: {
						reference: n$1,
						container: r,
						property: t
					}
				};
				if (Array.isArray(n$1)) {
					for (; e$1.arrayIndex < n$1.length;) {
						let i$1 = e$1.arrayIndex++, s$1 = n$1[i$1];
						if (Ee(s$1)) return {
							done: !1,
							value: {
								reference: s$1,
								container: r,
								property: t,
								index: i$1
							}
						};
					}
					e$1.arrayIndex = 0;
				}
			}
			e$1.keyIndex++;
		}
		return Ce;
	});
}
m(pn, "streamReferences");
function zh(r, e$1 = we(r).parseResult.value) {
	let t = [];
	return Je(e$1).forEach((n$1) => {
		pn(n$1).forEach((i$1) => {
			i$1.reference.ref === r && t.push(i$1.reference);
		});
	}), j(t);
}
m(zh, "findLocalReferences");
function Go(r, e$1) {
	let t = /* @__PURE__ */ r.getTypeMetaData(e$1.$type), n$1 = e$1;
	for (let i$1 of t.properties) i$1.defaultValue !== void 0 && n$1[i$1.name] === void 0 && (n$1[i$1.name] = /* @__PURE__ */ tc(i$1.defaultValue));
}
m(Go, "assignMandatoryProperties");
function tc(r) {
	return Array.isArray(r) ? [.../* @__PURE__ */ r.map(tc)] : r;
}
m(tc, "copyDefaultValue");
function Fo(r, e$1) {
	let t = { $type: r.$type };
	for (let [n$1, i$1] of Object.entries(r)) if (!n$1.startsWith("$")) if (le(i$1)) t[n$1] = /* @__PURE__ */ Fo(i$1, e$1);
	else if (Ee(i$1)) t[n$1] = /* @__PURE__ */ e$1(t, n$1, i$1.$refNode, i$1.$refText);
	else if (Array.isArray(i$1)) {
		let s$1 = [];
		for (let o$1 of i$1) le(o$1) ? s$1.push(/* @__PURE__ */ Fo(o$1, e$1)) : Ee(o$1) ? s$1.push(/* @__PURE__ */ e$1(t, n$1, o$1.$refNode, o$1.$refText)) : s$1.push(o$1);
		t[n$1] = s$1;
	} else t[n$1] = i$1;
	return Ds(t), t;
}
m(Fo, "copyAstNode");
var Bs = {};
o(Bs, {
	NEWLINE_REGEXP: () => Ko,
	escapeRegExp: () => lr,
	getCaseInsensitivePattern: () => jo,
	getTerminalParts: () => Yh,
	isMultilineComment: () => Vo,
	isWhitespace: () => gn,
	partialMatches: () => Ho,
	partialRegExp: () => ic,
	whitespaceCharacters: () => nc
});
function w(r) {
	return r.charCodeAt(0);
}
m(w, "cc");
function Gs(r, e$1) {
	Array.isArray(r) ? r.forEach(function(t) {
		e$1.push(t);
	}) : e$1.push(r);
}
m(Gs, "insertToSet");
function mn(r, e$1) {
	if (r[e$1] === !0) throw "duplicate flag " + e$1;
	r[e$1];
	r[e$1] = !0;
}
m(mn, "addFlag");
function sr(r) {
	if (r === void 0) throw Error("Internal Error - Should never get here!");
	return !0;
}
m(sr, "ASSERT_EXISTS");
function di() {
	throw Error("Internal Error - Should never get here!");
}
m(di, "ASSERT_NEVER_REACH_HERE");
function Uo(r) {
	return r.type === "Character";
}
m(Uo, "isCharacter");
var hi = [];
for (let r = /* @__PURE__ */ w("0"); r <= w("9"); r++) hi.push(r);
var pi = /* @__PURE__ */ [/* @__PURE__ */ w("_")].concat(hi);
for (let r = /* @__PURE__ */ w("a"); r <= w("z"); r++) pi.push(r);
for (let r = /* @__PURE__ */ w("A"); r <= w("Z"); r++) pi.push(r);
var Bo = [
	/* @__PURE__ */ w(" "),
	/* @__PURE__ */ w("\f"),
	/* @__PURE__ */ w(`
`),
	/* @__PURE__ */ w("\r"),
	/* @__PURE__ */ w("	"),
	/* @__PURE__ */ w("\v"),
	/* @__PURE__ */ w("	"),
	/* @__PURE__ */ w("\xA0"),
	/* @__PURE__ */ w(" "),
	/* @__PURE__ */ w(" "),
	/* @__PURE__ */ w(" "),
	/* @__PURE__ */ w(" "),
	/* @__PURE__ */ w(" "),
	/* @__PURE__ */ w(" "),
	/* @__PURE__ */ w(" "),
	/* @__PURE__ */ w(" "),
	/* @__PURE__ */ w(" "),
	/* @__PURE__ */ w(" "),
	/* @__PURE__ */ w(" "),
	/* @__PURE__ */ w(" "),
	/* @__PURE__ */ w("\u2028"),
	/* @__PURE__ */ w("\u2029"),
	/* @__PURE__ */ w(" "),
	/* @__PURE__ */ w(" "),
	/* @__PURE__ */ w("　"),
	/* @__PURE__ */ w("﻿")
];
var qh = /[0-9a-fA-F]/, Us = /[0-9]/, Xh = /[1-9]/, ar = class {
	static {
		m(this, "RegExpParser");
	}
	constructor() {
		this.idx = 0, this.input = "", this.groupIdx = 0;
	}
	saveState() {
		return {
			idx: this.idx,
			input: this.input,
			groupIdx: this.groupIdx
		};
	}
	restoreState(e$1) {
		this.idx = e$1.idx, this.input = e$1.input, this.groupIdx = e$1.groupIdx;
	}
	pattern(e$1) {
		this.idx = 0, this.input = e$1, this.groupIdx = 0, this.consumeChar("/");
		let t = /* @__PURE__ */ this.disjunction();
		this.consumeChar("/");
		let n$1 = {
			type: "Flags",
			loc: {
				begin: this.idx,
				end: e$1.length
			},
			global: !1,
			ignoreCase: !1,
			multiLine: !1,
			unicode: !1,
			sticky: !1
		};
		for (; this.isRegExpFlag();) switch (this.popChar()) {
			case "g":
				mn(n$1, "global");
				break;
			case "i":
				mn(n$1, "ignoreCase");
				break;
			case "m":
				mn(n$1, "multiLine");
				break;
			case "u":
				mn(n$1, "unicode");
				break;
			case "y":
				mn(n$1, "sticky");
				break;
		}
		if (this.idx !== this.input.length) throw Error("Redundant input: " + this.input.substring(this.idx));
		return {
			type: "Pattern",
			flags: n$1,
			value: t,
			loc: /* @__PURE__ */ this.loc(0)
		};
	}
	disjunction() {
		let e$1 = [], t = this.idx;
		for (e$1.push(/* @__PURE__ */ this.alternative()); this.peekChar() === "|";) this.consumeChar("|"), e$1.push(/* @__PURE__ */ this.alternative());
		return {
			type: "Disjunction",
			value: e$1,
			loc: /* @__PURE__ */ this.loc(t)
		};
	}
	alternative() {
		let e$1 = [], t = this.idx;
		for (; this.isTerm();) e$1.push(/* @__PURE__ */ this.term());
		return {
			type: "Alternative",
			value: e$1,
			loc: /* @__PURE__ */ this.loc(t)
		};
	}
	term() {
		return this.isAssertion() ? this.assertion() : this.atom();
	}
	assertion() {
		let e$1 = this.idx;
		switch (this.popChar()) {
			case "^": return {
				type: "StartAnchor",
				loc: /* @__PURE__ */ this.loc(e$1)
			};
			case "$": return {
				type: "EndAnchor",
				loc: /* @__PURE__ */ this.loc(e$1)
			};
			case "\\":
				switch (this.popChar()) {
					case "b": return {
						type: "WordBoundary",
						loc: /* @__PURE__ */ this.loc(e$1)
					};
					case "B": return {
						type: "NonWordBoundary",
						loc: /* @__PURE__ */ this.loc(e$1)
					};
				}
				throw Error("Invalid Assertion Escape");
			case "(":
				this.consumeChar("?");
				let t;
				switch (this.popChar()) {
					case "=":
						t = "Lookahead";
						break;
					case "!":
						t = "NegativeLookahead";
						break;
				}
				sr(t);
				let n$1 = /* @__PURE__ */ this.disjunction();
				return this.consumeChar(")"), {
					type: t,
					value: n$1,
					loc: /* @__PURE__ */ this.loc(e$1)
				};
		}
		return di();
	}
	quantifier(e$1 = !1) {
		let t, n$1 = this.idx;
		switch (this.popChar()) {
			case "*":
				t = {
					atLeast: 0,
					atMost: Infinity
				};
				break;
			case "+":
				t = {
					atLeast: 1,
					atMost: Infinity
				};
				break;
			case "?":
				t = {
					atLeast: 0,
					atMost: 1
				};
				break;
			case "{":
				let i$1 = /* @__PURE__ */ this.integerIncludingZero();
				switch (this.popChar()) {
					case "}":
						t = {
							atLeast: i$1,
							atMost: i$1
						};
						break;
					case ",":
						let s$1;
						this.isDigit() ? (s$1 = /* @__PURE__ */ this.integerIncludingZero(), t = {
							atLeast: i$1,
							atMost: s$1
						}) : t = {
							atLeast: i$1,
							atMost: Infinity
						}, this.consumeChar("}");
						break;
				}
				if (e$1 === !0 && t === void 0) return;
				sr(t);
				break;
		}
		if (!(e$1 === !0 && t === void 0) && sr(t)) return this.peekChar(0) === "?" ? (this.consumeChar("?"), t.greedy = !1) : t.greedy = !0, t.type = "Quantifier", t.loc = /* @__PURE__ */ this.loc(n$1), t;
	}
	atom() {
		let e$1, t = this.idx;
		switch (this.peekChar()) {
			case ".":
				e$1 = /* @__PURE__ */ this.dotAll();
				break;
			case "\\":
				e$1 = /* @__PURE__ */ this.atomEscape();
				break;
			case "[":
				e$1 = /* @__PURE__ */ this.characterClass();
				break;
			case "(":
				e$1 = /* @__PURE__ */ this.group();
				break;
		}
		return e$1 === void 0 && this.isPatternCharacter() && (e$1 = /* @__PURE__ */ this.patternCharacter()), sr(e$1) ? (e$1.loc = /* @__PURE__ */ this.loc(t), this.isQuantifier() && (e$1.quantifier = /* @__PURE__ */ this.quantifier()), e$1) : di();
	}
	dotAll() {
		return this.consumeChar("."), {
			type: "Set",
			complement: !0,
			value: [
				/* @__PURE__ */ w(`
`),
				/* @__PURE__ */ w("\r"),
				/* @__PURE__ */ w("\u2028"),
				/* @__PURE__ */ w("\u2029")
			]
		};
	}
	atomEscape() {
		switch (this.consumeChar("\\"), this.peekChar()) {
			case "1":
			case "2":
			case "3":
			case "4":
			case "5":
			case "6":
			case "7":
			case "8":
			case "9": return this.decimalEscapeAtom();
			case "d":
			case "D":
			case "s":
			case "S":
			case "w":
			case "W": return this.characterClassEscape();
			case "f":
			case "n":
			case "r":
			case "t":
			case "v": return this.controlEscapeAtom();
			case "c": return this.controlLetterEscapeAtom();
			case "0": return this.nulCharacterAtom();
			case "x": return this.hexEscapeSequenceAtom();
			case "u": return this.regExpUnicodeEscapeSequenceAtom();
			default: return this.identityEscapeAtom();
		}
	}
	decimalEscapeAtom() {
		return {
			type: "GroupBackReference",
			value: /* @__PURE__ */ this.positiveInteger()
		};
	}
	characterClassEscape() {
		let e$1, t = !1;
		switch (this.popChar()) {
			case "d":
				e$1 = hi;
				break;
			case "D":
				e$1 = hi, t = !0;
				break;
			case "s":
				e$1 = Bo;
				break;
			case "S":
				e$1 = Bo, t = !0;
				break;
			case "w":
				e$1 = pi;
				break;
			case "W":
				e$1 = pi, t = !0;
				break;
		}
		return sr(e$1) ? {
			type: "Set",
			value: e$1,
			complement: t
		} : di();
	}
	controlEscapeAtom() {
		let e$1;
		switch (this.popChar()) {
			case "f":
				e$1 = /* @__PURE__ */ w("\f");
				break;
			case "n":
				e$1 = /* @__PURE__ */ w(`
`);
				break;
			case "r":
				e$1 = /* @__PURE__ */ w("\r");
				break;
			case "t":
				e$1 = /* @__PURE__ */ w("	");
				break;
			case "v":
				e$1 = /* @__PURE__ */ w("\v");
				break;
		}
		return sr(e$1) ? {
			type: "Character",
			value: e$1
		} : di();
	}
	controlLetterEscapeAtom() {
		this.consumeChar("c");
		let e$1 = /* @__PURE__ */ this.popChar();
		if (/[a-zA-Z]/.test(e$1) === !1) throw Error("Invalid ");
		return {
			type: "Character",
			value: e$1.toUpperCase().charCodeAt(0) - 64
		};
	}
	nulCharacterAtom() {
		return this.consumeChar("0"), {
			type: "Character",
			value: /* @__PURE__ */ w("\0")
		};
	}
	hexEscapeSequenceAtom() {
		return this.consumeChar("x"), this.parseHexDigits(2);
	}
	regExpUnicodeEscapeSequenceAtom() {
		return this.consumeChar("u"), this.parseHexDigits(4);
	}
	identityEscapeAtom() {
		return {
			type: "Character",
			value: /* @__PURE__ */ w(/* @__PURE__ */ this.popChar())
		};
	}
	classPatternCharacterAtom() {
		switch (this.peekChar()) {
			case `
`:
			case "\r":
			case "\u2028":
			case "\u2029":
			case "\\":
			case "]": throw Error("TBD");
			default: return {
				type: "Character",
				value: /* @__PURE__ */ w(/* @__PURE__ */ this.popChar())
			};
		}
	}
	characterClass() {
		let e$1 = [], t = !1;
		for (this.consumeChar("["), this.peekChar(0) === "^" && (this.consumeChar("^"), t = !0); this.isClassAtom();) {
			let n$1 = /* @__PURE__ */ this.classAtom();
			n$1.type;
			if (Uo(n$1) && this.isRangeDash()) {
				this.consumeChar("-");
				let s$1 = /* @__PURE__ */ this.classAtom();
				s$1.type;
				if (Uo(s$1)) {
					if (s$1.value < n$1.value) throw Error("Range out of order in character class");
					e$1.push({
						from: n$1.value,
						to: s$1.value
					});
				} else Gs(n$1.value, e$1), e$1.push(/* @__PURE__ */ w("-")), Gs(s$1.value, e$1);
			} else Gs(n$1.value, e$1);
		}
		return this.consumeChar("]"), {
			type: "Set",
			complement: t,
			value: e$1
		};
	}
	classAtom() {
		switch (this.peekChar()) {
			case "]":
			case `
`:
			case "\r":
			case "\u2028":
			case "\u2029": throw Error("TBD");
			case "\\": return this.classEscape();
			default: return this.classPatternCharacterAtom();
		}
	}
	classEscape() {
		switch (this.consumeChar("\\"), this.peekChar()) {
			case "b": return this.consumeChar("b"), {
				type: "Character",
				value: /* @__PURE__ */ w("\b")
			};
			case "d":
			case "D":
			case "s":
			case "S":
			case "w":
			case "W": return this.characterClassEscape();
			case "f":
			case "n":
			case "r":
			case "t":
			case "v": return this.controlEscapeAtom();
			case "c": return this.controlLetterEscapeAtom();
			case "0": return this.nulCharacterAtom();
			case "x": return this.hexEscapeSequenceAtom();
			case "u": return this.regExpUnicodeEscapeSequenceAtom();
			default: return this.identityEscapeAtom();
		}
	}
	group() {
		let e$1 = !0;
		switch (this.consumeChar("("), this.peekChar(0)) {
			case "?":
				this.consumeChar("?"), this.consumeChar(":"), e$1 = !1;
				break;
			default:
				this.groupIdx++;
				break;
		}
		let t = /* @__PURE__ */ this.disjunction();
		this.consumeChar(")");
		let n$1 = {
			type: "Group",
			capturing: e$1,
			value: t
		};
		return e$1 && (n$1.idx = this.groupIdx), n$1;
	}
	positiveInteger() {
		let e$1 = /* @__PURE__ */ this.popChar();
		if (Xh.test(e$1) === !1) throw Error("Expecting a positive integer");
		for (; Us.test(/* @__PURE__ */ this.peekChar(0));) e$1 += /* @__PURE__ */ this.popChar();
		return parseInt(e$1, 10);
	}
	integerIncludingZero() {
		let e$1 = /* @__PURE__ */ this.popChar();
		if (Us.test(e$1) === !1) throw Error("Expecting an integer");
		for (; Us.test(/* @__PURE__ */ this.peekChar(0));) e$1 += /* @__PURE__ */ this.popChar();
		return parseInt(e$1, 10);
	}
	patternCharacter() {
		let e$1 = /* @__PURE__ */ this.popChar();
		switch (e$1) {
			case `
`:
			case "\r":
			case "\u2028":
			case "\u2029":
			case "^":
			case "$":
			case "\\":
			case ".":
			case "*":
			case "+":
			case "?":
			case "(":
			case ")":
			case "[":
			case "|": throw Error("TBD");
			default: return {
				type: "Character",
				value: /* @__PURE__ */ w(e$1)
			};
		}
	}
	isRegExpFlag() {
		switch (this.peekChar(0)) {
			case "g":
			case "i":
			case "m":
			case "u":
			case "y": return !0;
			default: return !1;
		}
	}
	isRangeDash() {
		return this.peekChar() === "-" && this.isClassAtom(1);
	}
	isDigit() {
		return Us.test(/* @__PURE__ */ this.peekChar(0));
	}
	isClassAtom(e$1 = 0) {
		switch (this.peekChar(e$1)) {
			case "]":
			case `
`:
			case "\r":
			case "\u2028":
			case "\u2029": return !1;
			default: return !0;
		}
	}
	isTerm() {
		return this.isAtom() || this.isAssertion();
	}
	isAtom() {
		if (this.isPatternCharacter()) return !0;
		switch (this.peekChar(0)) {
			case ".":
			case "\\":
			case "[":
			case "(": return !0;
			default: return !1;
		}
	}
	isAssertion() {
		switch (this.peekChar(0)) {
			case "^":
			case "$": return !0;
			case "\\": switch (this.peekChar(1)) {
				case "b":
				case "B": return !0;
				default: return !1;
			}
			case "(": return this.peekChar(1) === "?" && (this.peekChar(2) === "=" || this.peekChar(2) === "!");
			default: return !1;
		}
	}
	isQuantifier() {
		let e$1 = /* @__PURE__ */ this.saveState();
		try {
			return this.quantifier(!0) !== void 0;
		} catch {
			return !1;
		} finally {
			this.restoreState(e$1);
		}
	}
	isPatternCharacter() {
		switch (this.peekChar()) {
			case "^":
			case "$":
			case "\\":
			case ".":
			case "*":
			case "+":
			case "?":
			case "(":
			case ")":
			case "[":
			case "|":
			case "/":
			case `
`:
			case "\r":
			case "\u2028":
			case "\u2029": return !1;
			default: return !0;
		}
	}
	parseHexDigits(e$1) {
		let t = "";
		for (let i$1 = 0; i$1 < e$1; i$1++) {
			let s$1 = /* @__PURE__ */ this.popChar();
			if (qh.test(s$1) === !1) throw Error("Expecting a HexDecimal digits");
			t += s$1;
		}
		return {
			type: "Character",
			value: /* @__PURE__ */ parseInt(t, 16)
		};
	}
	peekChar(e$1 = 0) {
		return this.input[this.idx + e$1];
	}
	popChar() {
		let e$1 = /* @__PURE__ */ this.peekChar(0);
		return this.consumeChar(void 0), e$1;
	}
	consumeChar(e$1) {
		if (e$1 !== void 0 && this.input[this.idx] !== e$1) throw Error("Expected: '" + e$1 + "' but found: '" + this.input[this.idx] + "' at offset: " + this.idx);
		if (this.idx >= this.input.length) throw Error("Unexpected end of input");
		this.idx++;
	}
	loc(e$1) {
		return {
			begin: e$1,
			end: this.idx
		};
	}
};
var dt = class {
	static {
		m(this, "BaseRegExpVisitor");
	}
	visitChildren(e$1) {
		for (let t in e$1) {
			let n$1 = e$1[t];
			e$1.hasOwnProperty(t) && (n$1.type !== void 0 ? this.visit(n$1) : Array.isArray(n$1) && n$1.forEach((i$1) => {
				this.visit(i$1);
			}, this));
		}
	}
	visit(e$1) {
		switch (e$1.type) {
			case "Pattern":
				this.visitPattern(e$1);
				break;
			case "Flags":
				this.visitFlags(e$1);
				break;
			case "Disjunction":
				this.visitDisjunction(e$1);
				break;
			case "Alternative":
				this.visitAlternative(e$1);
				break;
			case "StartAnchor":
				this.visitStartAnchor(e$1);
				break;
			case "EndAnchor":
				this.visitEndAnchor(e$1);
				break;
			case "WordBoundary":
				this.visitWordBoundary(e$1);
				break;
			case "NonWordBoundary":
				this.visitNonWordBoundary(e$1);
				break;
			case "Lookahead":
				this.visitLookahead(e$1);
				break;
			case "NegativeLookahead":
				this.visitNegativeLookahead(e$1);
				break;
			case "Character":
				this.visitCharacter(e$1);
				break;
			case "Set":
				this.visitSet(e$1);
				break;
			case "Group":
				this.visitGroup(e$1);
				break;
			case "GroupBackReference":
				this.visitGroupBackReference(e$1);
				break;
			case "Quantifier":
				this.visitQuantifier(e$1);
				break;
		}
		this.visitChildren(e$1);
	}
	visitPattern(e$1) {}
	visitFlags(e$1) {}
	visitDisjunction(e$1) {}
	visitAlternative(e$1) {}
	visitStartAnchor(e$1) {}
	visitEndAnchor(e$1) {}
	visitWordBoundary(e$1) {}
	visitNonWordBoundary(e$1) {}
	visitLookahead(e$1) {}
	visitNegativeLookahead(e$1) {}
	visitCharacter(e$1) {}
	visitSet(e$1) {}
	visitGroup(e$1) {}
	visitGroupBackReference(e$1) {}
	visitQuantifier(e$1) {}
};
var Ko = /\r?\n/gm, rc = new ar(), Wo = class extends dt {
	static {
		m(this, "TerminalRegExpVisitor");
	}
	constructor() {
		super(...arguments), this.isStarting = !0, this.endRegexpStack = [], this.multiline = !1;
	}
	get endRegex() {
		return this.endRegexpStack.join("");
	}
	reset(e$1) {
		this.multiline = !1, this.regex = e$1, this.startRegexp = "", this.isStarting = !0, this.endRegexpStack = [];
	}
	visitGroup(e$1) {
		e$1.quantifier && (this.isStarting = !1, this.endRegexpStack = []);
	}
	visitCharacter(e$1) {
		let t = /* @__PURE__ */ String.fromCharCode(e$1.value);
		if (!this.multiline && t === `
` && (this.multiline = !0), e$1.quantifier) this.isStarting = !1, this.endRegexpStack = [];
		else {
			let n$1 = /* @__PURE__ */ lr(t);
			this.endRegexpStack.push(n$1), this.isStarting && (this.startRegexp += n$1);
		}
	}
	visitSet(e$1) {
		if (!this.multiline) {
			let t = /* @__PURE__ */ this.regex.substring(e$1.loc.begin, e$1.loc.end), n$1 = new RegExp(t);
			this.multiline = !!`
`.match(n$1);
		}
		if (e$1.quantifier) this.isStarting = !1, this.endRegexpStack = [];
		else {
			let t = /* @__PURE__ */ this.regex.substring(e$1.loc.begin, e$1.loc.end);
			this.endRegexpStack.push(t), this.isStarting && (this.startRegexp += t);
		}
	}
	visitChildren(e$1) {
		e$1.type === "Group" && e$1.quantifier || super.visitChildren(e$1);
	}
}, or = new Wo();
function Yh(r) {
	try {
		typeof r != "string" && (r = r.source), r = `/${r}/`;
		let e$1 = /* @__PURE__ */ rc.pattern(r), t = [];
		for (let n$1 of e$1.value.value) or.reset(r), or.visit(n$1), t.push({
			start: or.startRegexp,
			end: or.endRegex
		});
		return t;
	} catch {
		return [];
	}
}
m(Yh, "getTerminalParts");
function Vo(r) {
	try {
		return typeof r == "string" && (r = new RegExp(r)), r = /* @__PURE__ */ r.toString(), or.reset(r), or.visit(/* @__PURE__ */ rc.pattern(r)), or.multiline;
	} catch {
		return !1;
	}
}
m(Vo, "isMultilineComment");
var nc = /* @__PURE__ */ `\f
\r	\v \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF`.split("");
function gn(r) {
	let e$1 = typeof r == "string" ? new RegExp(r) : r;
	return nc.some((t) => e$1.test(t));
}
m(gn, "isWhitespace");
function lr(r) {
	return r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
m(lr, "escapeRegExp");
function jo(r) {
	return Array.prototype.map.call(r, (e$1) => /\w/.test(e$1) ? `[${e$1.toLowerCase()}${e$1.toUpperCase()}]` : lr(e$1)).join("");
}
m(jo, "getCaseInsensitivePattern");
function Ho(r, e$1) {
	let t = /* @__PURE__ */ ic(r), n$1 = /* @__PURE__ */ e$1.match(t);
	return !!n$1 && n$1[0].length > 0;
}
m(Ho, "partialMatches");
function ic(r) {
	typeof r == "string" && (r = new RegExp(r));
	let e$1 = r, t = r.source, n$1 = 0;
	function i$1() {
		let s$1 = "", o$1;
		function l$2(c$2) {
			s$1 += /* @__PURE__ */ t.substr(n$1, c$2), n$1 += c$2;
		}
		m(l$2, "appendRaw");
		function u$2(c$2) {
			s$1 += "(?:" + t.substr(n$1, c$2) + "|$)", n$1 += c$2;
		}
		for (m(u$2, "appendOptional"); n$1 < t.length;) switch (t[n$1]) {
			case "\\":
				switch (t[n$1 + 1]) {
					case "c":
						u$2(3);
						break;
					case "x":
						u$2(4);
						break;
					case "u":
						e$1.unicode ? t[n$1 + 2] === "{" ? u$2(t.indexOf("}", n$1) - n$1 + 1) : u$2(6) : u$2(2);
						break;
					case "p":
					case "P":
						e$1.unicode ? u$2(t.indexOf("}", n$1) - n$1 + 1) : u$2(2);
						break;
					case "k":
						u$2(t.indexOf(">", n$1) - n$1 + 1);
						break;
					default:
						u$2(2);
						break;
				}
				break;
			case "[":
				o$1 = /\[(?:\\.|.)*?\]/g, o$1.lastIndex = n$1, o$1 = o$1.exec(t) || [], u$2(o$1[0].length);
				break;
			case "|":
			case "^":
			case "$":
			case "*":
			case "+":
			case "?":
				l$2(1);
				break;
			case "{":
				o$1 = /\{\d+,?\d*\}/g, o$1.lastIndex = n$1, o$1 = /* @__PURE__ */ o$1.exec(t), o$1 ? l$2(o$1[0].length) : u$2(1);
				break;
			case "(":
				if (t[n$1 + 1] === "?") switch (t[n$1 + 2]) {
					case ":":
						s$1 += "(?:", n$1 += 3, s$1 += i$1() + "|$)";
						break;
					case "=":
						s$1 += "(?=", n$1 += 3, s$1 += i$1() + ")";
						break;
					case "!":
						o$1 = n$1, n$1 += 3, i$1(), s$1 += /* @__PURE__ */ t.substr(o$1, n$1 - o$1);
						break;
					case "<":
						switch (t[n$1 + 3]) {
							case "=":
							case "!":
								o$1 = n$1, n$1 += 4, i$1(), s$1 += /* @__PURE__ */ t.substr(o$1, n$1 - o$1);
								break;
							default:
								l$2(t.indexOf(">", n$1) - n$1 + 1), s$1 += i$1() + "|$)";
								break;
						}
						break;
				}
				else l$2(1), s$1 += i$1() + "|$)";
				break;
			case ")": return ++n$1, s$1;
			default:
				u$2(1);
				break;
		}
		return s$1;
	}
	return m(i$1, "process"), new RegExp(i$1(), r.flags);
}
m(ic, "partialRegExp");
function sc(r) {
	return r.rules.find((e$1) => Se(e$1) && e$1.entry);
}
m(sc, "getEntryRule");
function ac(r) {
	return r.rules.filter((e$1) => He(e$1) && e$1.hidden);
}
m(ac, "getHiddenRules");
function mi(r, e$1) {
	let t = /* @__PURE__ */ new Set(), n$1 = /* @__PURE__ */ sc(r);
	if (!n$1) return new Set(r.rules);
	let i$1 = /* @__PURE__ */ [n$1].concat(/* @__PURE__ */ ac(r));
	for (let o$1 of i$1) oc(o$1, t, e$1);
	let s$1 = /* @__PURE__ */ new Set();
	for (let o$1 of r.rules) (t.has(o$1.name) || He(o$1) && o$1.hidden) && s$1.add(o$1);
	return s$1;
}
m(mi, "getAllReachableRules");
function oc(r, e$1, t) {
	e$1.add(r.name), ft(r).forEach((n$1) => {
		if (nt(n$1) || t && bs(n$1)) {
			let i$1 = n$1.rule.ref;
			i$1 && !e$1.has(i$1.name) && oc(i$1, e$1, t);
		}
	});
}
m(oc, "ruleDfs");
function Xo(r) {
	if (r.terminal) return r.terminal;
	if (r.type.ref) return Ws(r.type.ref)?.terminal;
}
m(Xo, "getCrossReferenceTerminal");
function Yo(r) {
	return r.hidden && !gn(/* @__PURE__ */ Tn(r));
}
m(Yo, "isCommentTerminal");
function Jo(r, e$1) {
	return !r || !e$1 ? [] : Qo(r, e$1, r.astNode, !0);
}
m(Jo, "findNodesForProperty");
function gi(r, e$1, t) {
	if (!r || !e$1) return;
	let n$1 = /* @__PURE__ */ Qo(r, e$1, r.astNode, !0);
	if (n$1.length !== 0) return t !== void 0 ? t = /* @__PURE__ */ Math.max(0, /* @__PURE__ */ Math.min(t, n$1.length - 1)) : t = 0, n$1[t];
}
m(gi, "findNodeForProperty");
function Qo(r, e$1, t, n$1) {
	if (!n$1) {
		let i$1 = /* @__PURE__ */ ir(r.grammarSource, rt);
		if (i$1 && i$1.feature === e$1) return [r];
	}
	return tt(r) && r.astNode === t ? r.content.flatMap((i$1) => Qo(i$1, e$1, t, !1)) : [];
}
m(Qo, "findNodesForPropertyInternal");
function Jh(r, e$1) {
	return r ? el(r, e$1, r?.astNode) : [];
}
m(Jh, "findNodesForKeyword");
function Zo(r, e$1, t) {
	if (!r) return;
	let n$1 = /* @__PURE__ */ el(r, e$1, r?.astNode);
	if (n$1.length !== 0) return t !== void 0 ? t = /* @__PURE__ */ Math.max(0, /* @__PURE__ */ Math.min(t, n$1.length - 1)) : t = 0, n$1[t];
}
m(Zo, "findNodeForKeyword");
function el(r, e$1, t) {
	if (r.astNode !== t) return [];
	if (Ye(r.grammarSource) && r.grammarSource.value === e$1) return [r];
	let n$1 = /* @__PURE__ */ Zt(r).iterator(), i$1, s$1 = [];
	do
		if (i$1 = /* @__PURE__ */ n$1.next(), !i$1.done) {
			let o$1 = i$1.value;
			o$1.astNode === t ? Ye(o$1.grammarSource) && o$1.grammarSource.value === e$1 && s$1.push(o$1) : n$1.prune();
		}
	while (!i$1.done);
	return s$1;
}
m(el, "findNodesForKeywordInternal");
function tl(r) {
	var e$1;
	let t = r.astNode;
	for (; t === ((e$1 = r.container) === null || e$1 === void 0 ? void 0 : e$1.astNode);) {
		let n$1 = /* @__PURE__ */ ir(r.grammarSource, rt);
		if (n$1) return n$1;
		r = r.container;
	}
}
m(tl, "findAssignment");
function Ws(r) {
	let e$1 = r;
	return _s(e$1) && ($t(e$1.$container) ? e$1 = e$1.$container.$container : Se(e$1.$container) ? e$1 = e$1.$container : ct(e$1.$container)), lc(r, e$1, /* @__PURE__ */ new Map());
}
m(Ws, "findNameAssignment");
function lc(r, e$1, t) {
	var n$1;
	function i$1(s$1, o$1) {
		let l$2;
		return ir(s$1, rt) || (l$2 = /* @__PURE__ */ lc(o$1, o$1, t)), t.set(r, l$2), l$2;
	}
	if (m(i$1, "go"), t.has(r)) return t.get(r);
	t.set(r, void 0);
	for (let s$1 of ft(e$1)) {
		if (rt(s$1) && s$1.feature.toLowerCase() === "name") return t.set(r, s$1), s$1;
		if (nt(s$1) && Se(s$1.rule.ref)) return i$1(s$1, s$1.rule.ref);
		if (Os(s$1) && !((n$1 = s$1.typeRef) === null || n$1 === void 0) && n$1.ref) return i$1(s$1, s$1.typeRef.ref);
	}
}
m(lc, "findNameAssignmentInternal");
function uc(r) {
	let e$1 = r.$container;
	if (Ut(e$1)) {
		let t = e$1.elements, n$1 = /* @__PURE__ */ t.indexOf(r);
		for (let i$1 = n$1 - 1; i$1 >= 0; i$1--) {
			let s$1 = t[i$1];
			if ($t(s$1)) return s$1;
			{
				let o$1 = /* @__PURE__ */ ft(t[i$1]).find($t);
				if (o$1) return o$1;
			}
		}
	}
	if (oi(e$1)) return uc(e$1);
}
m(uc, "getActionAtElement");
function Qh(r, e$1) {
	return r === "?" || r === "*" || Ut(e$1) && !!e$1.guardCondition;
}
m(Qh, "isOptionalCardinality");
function Zh(r) {
	return r === "*" || r === "+";
}
m(Zh, "isArrayCardinality");
function ep(r) {
	return r === "+=";
}
m(ep, "isArrayOperator");
function yi(r) {
	return cc(r, /* @__PURE__ */ new Set());
}
m(yi, "isDataTypeRule");
function cc(r, e$1) {
	if (e$1.has(r)) return !0;
	e$1.add(r);
	for (let t of ft(r)) if (nt(t)) {
		if (!t.rule.ref || Se(t.rule.ref) && !cc(t.rule.ref, e$1)) return !1;
	} else {
		if (rt(t)) return !1;
		if ($t(t)) return !1;
	}
	return !!r.definition;
}
m(cc, "isDataTypeRuleInternal");
function tp(r) {
	return qo(r.type, /* @__PURE__ */ new Set());
}
m(tp, "isDataType");
function qo(r, e$1) {
	if (e$1.has(r)) return !0;
	if (e$1.add(r), xo(r)) return !1;
	if (Io(r)) return !1;
	if (Co(r)) return r.types.every((t) => qo(t, e$1));
	if (Os(r)) {
		if (r.primitiveType !== void 0) return !0;
		if (r.stringType !== void 0) return !0;
		if (r.typeRef !== void 0) {
			let t = r.typeRef.ref;
			return li(t) ? qo(t.type, e$1) : !1;
		} else return !1;
	} else return !1;
}
m(qo, "isDataTypeInternal");
function yn(r) {
	if (r.inferredType) return r.inferredType.name;
	if (r.dataType) return r.dataType;
	if (r.returnType) {
		let e$1 = r.returnType.ref;
		if (e$1) {
			if (Se(e$1)) return e$1.name;
			if (Ls(e$1) || li(e$1)) return e$1.name;
		}
	}
}
m(yn, "getExplicitRuleType");
function Ti(r) {
	var e$1;
	if (Se(r)) return yi(r) ? r.name : (e$1 = /* @__PURE__ */ yn(r)) !== null && e$1 !== void 0 ? e$1 : r.name;
	if (Ls(r) || li(r) || No(r)) return r.name;
	if ($t(r)) {
		let t = /* @__PURE__ */ fc(r);
		if (t) return t;
	} else if (_s(r)) return r.name;
	throw new Error("Cannot get name of Unknown Type");
}
m(Ti, "getTypeName");
function fc(r) {
	var e$1;
	if (r.inferredType) return r.inferredType.name;
	if (!((e$1 = r.type) === null || e$1 === void 0) && e$1.ref) return Ti(r.type.ref);
}
m(fc, "getActionType");
function rp(r) {
	var e$1, t, n$1;
	return He(r) ? (t = (e$1 = r.type) === null || e$1 === void 0 ? void 0 : e$1.name) !== null && t !== void 0 ? t : "string" : yi(r) ? r.name : (n$1 = /* @__PURE__ */ yn(r)) !== null && n$1 !== void 0 ? n$1 : r.name;
}
m(rp, "getRuleTypeName");
function rl(r) {
	var e$1, t, n$1;
	return He(r) ? (t = (e$1 = r.type) === null || e$1 === void 0 ? void 0 : e$1.name) !== null && t !== void 0 ? t : "string" : (n$1 = /* @__PURE__ */ yn(r)) !== null && n$1 !== void 0 ? n$1 : r.name;
}
m(rl, "getRuleType");
function Tn(r) {
	let e$1 = {
		s: !1,
		i: !1,
		u: !1
	}, t = /* @__PURE__ */ Rn$1(r.definition, e$1), n$1 = /* @__PURE__ */ Object.entries(e$1).filter(([, i$1]) => i$1).map(([i$1]) => i$1).join("");
	return new RegExp(t, n$1);
}
m(Tn, "terminalRegex");
var nl = /[\s\S]/.source;
function Rn$1(r, e$1) {
	if (Oo(r)) return np(r);
	if (Po(r)) return ip(r);
	if (So(r)) return op(r);
	if (bs(r)) {
		let t = r.rule.ref;
		if (!t) throw new Error("Missing rule reference.");
		return It(/* @__PURE__ */ Rn$1(t.definition), {
			cardinality: r.cardinality,
			lookahead: r.lookahead
		});
	} else {
		if (_o(r)) return ap(r);
		if (bo(r)) return sp(r);
		if (Lo(r)) {
			let t = /* @__PURE__ */ r.regex.lastIndexOf("/"), n$1 = /* @__PURE__ */ r.regex.substring(1, t), i$1 = /* @__PURE__ */ r.regex.substring(t + 1);
			return e$1 && (e$1.i = /* @__PURE__ */ i$1.includes("i"), e$1.s = /* @__PURE__ */ i$1.includes("s"), e$1.u = /* @__PURE__ */ i$1.includes("u")), It(n$1, {
				cardinality: r.cardinality,
				lookahead: r.lookahead,
				wrap: !1
			});
		} else {
			if (Mo(r)) return It(nl, {
				cardinality: r.cardinality,
				lookahead: r.lookahead
			});
			throw new Error(`Invalid terminal element: ${r?.$type}`);
		}
	}
}
m(Rn$1, "abstractElementToRegex");
function np(r) {
	return It(/* @__PURE__ */ r.elements.map((e$1) => Rn$1(e$1)).join("|"), {
		cardinality: r.cardinality,
		lookahead: r.lookahead
	});
}
m(np, "terminalAlternativesToRegex");
function ip(r) {
	return It(/* @__PURE__ */ r.elements.map((e$1) => Rn$1(e$1)).join(""), {
		cardinality: r.cardinality,
		lookahead: r.lookahead
	});
}
m(ip, "terminalGroupToRegex");
function sp(r) {
	return It(`${nl}*?${Rn$1(r.terminal)}`, {
		cardinality: r.cardinality,
		lookahead: r.lookahead
	});
}
m(sp, "untilTokenToRegex");
function ap(r) {
	return It(`(?!${Rn$1(r.terminal)})${nl}*?`, {
		cardinality: r.cardinality,
		lookahead: r.lookahead
	});
}
m(ap, "negateTokenToRegex");
function op(r) {
	return r.right ? It(`[${zo(r.left)}-${zo(r.right)}]`, {
		cardinality: r.cardinality,
		lookahead: r.lookahead,
		wrap: !1
	}) : It(/* @__PURE__ */ zo(r.left), {
		cardinality: r.cardinality,
		lookahead: r.lookahead,
		wrap: !1
	});
}
m(op, "characterRangeToRegex");
function zo(r) {
	return lr(r.value);
}
m(zo, "keywordToRegex");
function It(r, e$1) {
	var t;
	return (e$1.wrap !== !1 || e$1.lookahead) && (r = `(${(t = e$1.lookahead) !== null && t !== void 0 ? t : ""}${r})`), e$1.cardinality ? `${r}${e$1.cardinality}` : r;
}
m(It, "withCardinality");
function il(r) {
	let e$1 = [], t = r.Grammar;
	for (let n$1 of t.rules) He(n$1) && Yo(n$1) && Vo(/* @__PURE__ */ Tn(n$1)) && e$1.push(n$1.name);
	return {
		multilineCommentRules: e$1,
		nameRegexp: Cs
	};
}
m(il, "createGrammarConfig");
function xn(r) {
	console && console.error && console.error(`Error: ${r}`);
}
m(xn, "PRINT_ERROR");
function Ri$1(r) {
	console && console.warn && console.warn(`Warning: ${r}`);
}
m(Ri$1, "PRINT_WARNING");
function xi(r) {
	let e$1 = /* @__PURE__ */ (/* @__PURE__ */ new Date()).getTime(), t = /* @__PURE__ */ r();
	return {
		time: /* @__PURE__ */ (/* @__PURE__ */ new Date()).getTime() - e$1,
		value: t
	};
}
m(xi, "timer");
function Ei(r) {
	function e$1() {}
	m(e$1, "FakeConstructor"), e$1.prototype = r;
	let t = new e$1();
	function n$1() {
		return typeof t.bar;
	}
	return m(n$1, "fakeAccess"), n$1(), n$1(), r;
}
m(Ei, "toFastProperties");
function lp(r) {
	return up(r) ? r.LABEL : r.name;
}
m(lp, "tokenLabel");
function up(r) {
	return pr(r.LABEL) && r.LABEL !== "";
}
m(up, "hasTokenLabel");
var ze = class {
	static {
		m(this, "AbstractProduction");
	}
	get definition() {
		return this._definition;
	}
	set definition(e$1) {
		this._definition = e$1;
	}
	constructor(e$1) {
		this._definition = e$1;
	}
	accept(e$1) {
		e$1.visit(this), Zr(this.definition, (t) => {
			t.accept(e$1);
		});
	}
}, H = class extends ze {
	static {
		m(this, "NonTerminal");
	}
	constructor(e$1) {
		super([]), this.idx = 1, fi(this, /* @__PURE__ */ Tm(e$1, (t) => t !== void 0));
	}
	set definition(e$1) {}
	get definition() {
		return this.referencedRule !== void 0 ? this.referencedRule.definition : [];
	}
	accept(e$1) {
		e$1.visit(this);
	}
}, Me = class extends ze {
	static {
		m(this, "Rule");
	}
	constructor(e$1) {
		super(e$1.definition), this.orgText = "", fi(this, /* @__PURE__ */ Tm(e$1, (t) => t !== void 0));
	}
}, J = class extends ze {
	static {
		m(this, "Alternative");
	}
	constructor(e$1) {
		super(e$1.definition), this.ignoreAmbiguities = !1, fi(this, /* @__PURE__ */ Tm(e$1, (t) => t !== void 0));
	}
}, z = class extends ze {
	static {
		m(this, "Option");
	}
	constructor(e$1) {
		super(e$1.definition), this.idx = 1, fi(this, /* @__PURE__ */ Tm(e$1, (t) => t !== void 0));
	}
}, Q = class extends ze {
	static {
		m(this, "RepetitionMandatory");
	}
	constructor(e$1) {
		super(e$1.definition), this.idx = 1, fi(this, /* @__PURE__ */ Tm(e$1, (t) => t !== void 0));
	}
}, Z = class extends ze {
	static {
		m(this, "RepetitionMandatoryWithSeparator");
	}
	constructor(e$1) {
		super(e$1.definition), this.idx = 1, fi(this, /* @__PURE__ */ Tm(e$1, (t) => t !== void 0));
	}
}, G = class extends ze {
	static {
		m(this, "Repetition");
	}
	constructor(e$1) {
		super(e$1.definition), this.idx = 1, fi(this, /* @__PURE__ */ Tm(e$1, (t) => t !== void 0));
	}
}, q$1 = class extends ze {
	static {
		m(this, "RepetitionWithSeparator");
	}
	constructor(e$1) {
		super(e$1.definition), this.idx = 1, fi(this, /* @__PURE__ */ Tm(e$1, (t) => t !== void 0));
	}
}, X = class extends ze {
	static {
		m(this, "Alternation");
	}
	get definition() {
		return this._definition;
	}
	set definition(e$1) {
		this._definition = e$1;
	}
	constructor(e$1) {
		super(e$1.definition), this.idx = 1, this.ignoreAmbiguities = !1, this.hasPredicates = !1, fi(this, /* @__PURE__ */ Tm(e$1, (t) => t !== void 0));
	}
}, D = class {
	static {
		m(this, "Terminal");
	}
	constructor(e$1) {
		this.idx = 1, fi(this, /* @__PURE__ */ Tm(e$1, (t) => t !== void 0));
	}
	accept(e$1) {
		e$1.visit(this);
	}
};
function Vs(r) {
	return Jr(r, En);
}
m(Vs, "serializeGrammar");
function En(r) {
	function e$1(t) {
		return Jr(t, En);
	}
	if (m(e$1, "convertDefinition"), r instanceof H) {
		let t = {
			type: "NonTerminal",
			name: r.nonTerminalName,
			idx: r.idx
		};
		return pr(r.label) && (t.label = r.label), t;
	} else {
		if (r instanceof J) return {
			type: "Alternative",
			definition: /* @__PURE__ */ e$1(r.definition)
		};
		if (r instanceof z) return {
			type: "Option",
			idx: r.idx,
			definition: /* @__PURE__ */ e$1(r.definition)
		};
		if (r instanceof Q) return {
			type: "RepetitionMandatory",
			idx: r.idx,
			definition: /* @__PURE__ */ e$1(r.definition)
		};
		if (r instanceof Z) return {
			type: "RepetitionMandatoryWithSeparator",
			idx: r.idx,
			separator: /* @__PURE__ */ En(new D({ terminalType: r.separator })),
			definition: /* @__PURE__ */ e$1(r.definition)
		};
		if (r instanceof q$1) return {
			type: "RepetitionWithSeparator",
			idx: r.idx,
			separator: /* @__PURE__ */ En(new D({ terminalType: r.separator })),
			definition: /* @__PURE__ */ e$1(r.definition)
		};
		if (r instanceof G) return {
			type: "Repetition",
			idx: r.idx,
			definition: /* @__PURE__ */ e$1(r.definition)
		};
		if (r instanceof X) return {
			type: "Alternation",
			idx: r.idx,
			definition: /* @__PURE__ */ e$1(r.definition)
		};
		if (r instanceof D) {
			let t = {
				type: "Terminal",
				name: r.terminalType.name,
				label: /* @__PURE__ */ lp(r.terminalType),
				idx: r.idx
			};
			pr(r.label) && (t.terminalLabel = r.label);
			let n$1 = r.terminalType.PATTERN;
			return r.terminalType.PATTERN && (t.pattern = cm(n$1) ? n$1.source : n$1), t;
		} else {
			if (r instanceof Me) return {
				type: "Rule",
				name: r.name,
				orgText: r.orgText,
				definition: /* @__PURE__ */ e$1(r.definition)
			};
			throw Error("non exhaustive match");
		}
	}
}
m(En, "serializeProduction");
var De$1 = class {
	static {
		m(this, "GAstVisitor");
	}
	visit(e$1) {
		let t = e$1;
		switch (t.constructor) {
			case H: return this.visitNonTerminal(t);
			case J: return this.visitAlternative(t);
			case z: return this.visitOption(t);
			case Q: return this.visitRepetitionMandatory(t);
			case Z: return this.visitRepetitionMandatoryWithSeparator(t);
			case q$1: return this.visitRepetitionWithSeparator(t);
			case G: return this.visitRepetition(t);
			case X: return this.visitAlternation(t);
			case D: return this.visitTerminal(t);
			case Me: return this.visitRule(t);
			default: throw Error("non exhaustive match");
		}
	}
	visitNonTerminal(e$1) {}
	visitAlternative(e$1) {}
	visitOption(e$1) {}
	visitRepetition(e$1) {}
	visitRepetitionMandatory(e$1) {}
	visitRepetitionMandatoryWithSeparator(e$1) {}
	visitRepetitionWithSeparator(e$1) {}
	visitAlternation(e$1) {}
	visitTerminal(e$1) {}
	visitRule(e$1) {}
};
function sl(r) {
	return r instanceof J || r instanceof z || r instanceof G || r instanceof Q || r instanceof Z || r instanceof q$1 || r instanceof D || r instanceof Me;
}
m(sl, "isSequenceProd");
function ur(r, e$1 = []) {
	return r instanceof z || r instanceof G || r instanceof q$1 ? !0 : r instanceof X ? fp(r.definition, (n$1) => ur(n$1, e$1)) : r instanceof H && pm(e$1, r) ? !1 : r instanceof ze ? (r instanceof H && e$1.push(r), Ui(r.definition, (n$1) => ur(n$1, e$1))) : !1;
}
m(ur, "isOptionalProd");
function al(r) {
	return r instanceof X;
}
m(al, "isBranchingProd");
function We(r) {
	if (r instanceof H) return "SUBRULE";
	if (r instanceof z) return "OPTION";
	if (r instanceof X) return "OR";
	if (r instanceof Q) return "AT_LEAST_ONE";
	if (r instanceof Z) return "AT_LEAST_ONE_SEP";
	if (r instanceof q$1) return "MANY_SEP";
	if (r instanceof G) return "MANY";
	if (r instanceof D) return "CONSUME";
	throw Error("non exhaustive match");
}
m(We, "getProductionDslName");
var Nt = class {
	static {
		m(this, "RestWalker");
	}
	walk(e$1, t = []) {
		Zr(e$1.definition, (n$1, i$1) => {
			let s$1 = /* @__PURE__ */ Mi(e$1.definition, i$1 + 1);
			if (n$1 instanceof H) this.walkProdRef(n$1, s$1, t);
			else if (n$1 instanceof D) this.walkTerminal(n$1, s$1, t);
			else if (n$1 instanceof J) this.walkFlat(n$1, s$1, t);
			else if (n$1 instanceof z) this.walkOption(n$1, s$1, t);
			else if (n$1 instanceof Q) this.walkAtLeastOne(n$1, s$1, t);
			else if (n$1 instanceof Z) this.walkAtLeastOneSep(n$1, s$1, t);
			else if (n$1 instanceof q$1) this.walkManySep(n$1, s$1, t);
			else if (n$1 instanceof G) this.walkMany(n$1, s$1, t);
			else if (n$1 instanceof X) this.walkOr(n$1, s$1, t);
			else throw Error("non exhaustive match");
		});
	}
	walkTerminal(e$1, t, n$1) {}
	walkProdRef(e$1, t, n$1) {}
	walkFlat(e$1, t, n$1) {
		let i$1 = /* @__PURE__ */ t.concat(n$1);
		this.walk(e$1, i$1);
	}
	walkOption(e$1, t, n$1) {
		let i$1 = /* @__PURE__ */ t.concat(n$1);
		this.walk(e$1, i$1);
	}
	walkAtLeastOne(e$1, t, n$1) {
		let i$1 = /* @__PURE__ */ [new z({ definition: e$1.definition })].concat(t, n$1);
		this.walk(e$1, i$1);
	}
	walkAtLeastOneSep(e$1, t, n$1) {
		let i$1 = /* @__PURE__ */ dc(e$1, t, n$1);
		this.walk(e$1, i$1);
	}
	walkMany(e$1, t, n$1) {
		let i$1 = /* @__PURE__ */ [new z({ definition: e$1.definition })].concat(t, n$1);
		this.walk(e$1, i$1);
	}
	walkManySep(e$1, t, n$1) {
		let i$1 = /* @__PURE__ */ dc(e$1, t, n$1);
		this.walk(e$1, i$1);
	}
	walkOr(e$1, t, n$1) {
		let i$1 = /* @__PURE__ */ t.concat(n$1);
		Zr(e$1.definition, (s$1) => {
			let o$1 = new J({ definition: [s$1] });
			this.walk(o$1, i$1);
		});
	}
};
function dc(r, e$1, t) {
	return [new z({ definition: /* @__PURE__ */ [new D({ terminalType: r.separator })].concat(r.definition) })].concat(e$1, t);
}
m(dc, "restForRepetitionWithSeparator");
function cr(r) {
	if (r instanceof H) return cr(r.referencedRule);
	if (r instanceof D) return dp(r);
	if (sl(r)) return cp(r);
	if (al(r)) return fp$1(r);
	throw Error("non exhaustive match");
}
m(cr, "first");
function cp(r) {
	let e$1 = [], t = r.definition, n$1 = 0, i$1 = t.length > n$1, s$1, o$1 = !0;
	for (; i$1 && o$1;) s$1 = t[n$1], o$1 = /* @__PURE__ */ ur(s$1), e$1 = /* @__PURE__ */ e$1.concat(/* @__PURE__ */ cr(s$1)), n$1 = n$1 + 1, i$1 = t.length > n$1;
	return mp(e$1);
}
m(cp, "firstForSequence");
function fp$1(r) {
	let e$1 = /* @__PURE__ */ Jr(r.definition, (t) => cr(t));
	return mp(/* @__PURE__ */ Qr(e$1));
}
m(fp$1, "firstForBranching");
function dp(r) {
	return [r.terminalType];
}
m(dp, "firstForTerminal");
var js = "_~IN~_";
var ol = class extends Nt {
	static {
		m(this, "ResyncFollowsWalker");
	}
	constructor(e$1) {
		super(), this.topProd = e$1, this.follows = {};
	}
	startWalking() {
		return this.walk(this.topProd), this.follows;
	}
	walkTerminal(e$1, t, n$1) {}
	walkProdRef(e$1, t, n$1) {
		let i$1 = hp(e$1.referencedRule, e$1.idx) + this.topProd.name, o$1 = new J({ definition: /* @__PURE__ */ t.concat(n$1) }), l$2 = /* @__PURE__ */ cr(o$1);
		this.follows[i$1] = l$2;
	}
};
function hc(r) {
	let e$1 = {};
	return Zr(r, (t) => {
		fi(e$1, /* @__PURE__ */ new ol(t).startWalking());
	}), e$1;
}
m(hc, "computeAllProdsFollows");
function hp(r, e$1) {
	return r.name + e$1 + js;
}
m(hp, "buildBetweenProdsFollowPrefix");
var Hs = {}, pp = new ar();
function An(r) {
	let e$1 = /* @__PURE__ */ r.toString();
	if (Hs.hasOwnProperty(e$1)) return Hs[e$1];
	{
		let t = /* @__PURE__ */ pp.pattern(e$1);
		return Hs[e$1] = t, t;
	}
}
m(An, "getRegExpAst");
function pc() {
	Hs = {};
}
m(pc, "clearRegExpParserCache");
var gc = "Complement Sets are not supported for first char optimization", Ai$1 = `Unable to use "first char" lexer optimizations:
`;
function yc(r, e$1 = !1) {
	try {
		let t = /* @__PURE__ */ An(r);
		return ll(t.value, {}, t.flags.ignoreCase);
	} catch (t) {
		if (t.message === gc) e$1 && Ri$1(`${Ai$1}	Unable to optimize: < ${r.toString()} >
	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);
		else {
			let n$1 = "";
			e$1 && (n$1 = `
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`), xn(`${Ai$1}
	Failed parsing: < ${r.toString()} >
	Using the @chevrotain/regexp-to-ast library
	Please open an issue at: https://github.com/chevrotain/chevrotain/issues` + n$1);
		}
	}
	return [];
}
m(yc, "getOptimizedStartCodesIndices");
function ll(r, e$1, t) {
	switch (r.type) {
		case "Disjunction":
			for (let i$1 = 0; i$1 < r.value.length; i$1++) ll(r.value[i$1], e$1, t);
			break;
		case "Alternative":
			let n$1 = r.value;
			for (let i$1 = 0; i$1 < n$1.length; i$1++) {
				let s$1 = n$1[i$1];
				switch (s$1.type) {
					case "EndAnchor":
					case "GroupBackReference":
					case "Lookahead":
					case "NegativeLookahead":
					case "StartAnchor":
					case "WordBoundary":
					case "NonWordBoundary": continue;
				}
				let o$1 = s$1;
				switch (o$1.type) {
					case "Character":
						zs(o$1.value, e$1, t);
						break;
					case "Set":
						if (o$1.complement === !0) throw Error(gc);
						Zr(o$1.value, (u$2) => {
							if (typeof u$2 == "number") zs(u$2, e$1, t);
							else {
								let c$2 = u$2;
								if (t === !0) for (let f$1 = c$2.from; f$1 <= c$2.to; f$1++) zs(f$1, e$1, t);
								else {
									for (let f$1 = c$2.from; f$1 <= c$2.to && f$1 < vn; f$1++) zs(f$1, e$1, t);
									if (c$2.to >= vn) {
										let f$1 = c$2.from >= vn ? c$2.from : vn, d$1 = c$2.to, h$4 = /* @__PURE__ */ ht(f$1), p$2 = /* @__PURE__ */ ht(d$1);
										for (let g$3 = h$4; g$3 <= p$2; g$3++) e$1[g$3] = g$3;
									}
								}
							}
						});
						break;
					case "Group":
						ll(o$1.value, e$1, t);
						break;
					default: throw Error("Non Exhaustive Match");
				}
				let l$2 = o$1.quantifier !== void 0 && o$1.quantifier.atLeast === 0;
				if (o$1.type === "Group" && ul(o$1) === !1 || o$1.type !== "Group" && l$2 === !1) break;
			}
			break;
		default: throw Error("non exhaustive match!");
	}
	return Xr(e$1);
}
m(ll, "firstCharOptimizedIndices");
function zs(r, e$1, t) {
	let n$1 = /* @__PURE__ */ ht(r);
	e$1[n$1] = n$1, t === !0 && mp$1(r, e$1);
}
m(zs, "addOptimizedIdxToResult");
function mp$1(r, e$1) {
	let t = /* @__PURE__ */ String.fromCharCode(r), n$1 = /* @__PURE__ */ t.toUpperCase();
	if (n$1 !== t) {
		let i$1 = /* @__PURE__ */ ht(/* @__PURE__ */ n$1.charCodeAt(0));
		e$1[i$1] = i$1;
	} else {
		let i$1 = /* @__PURE__ */ t.toLowerCase();
		if (i$1 !== t) {
			let s$1 = /* @__PURE__ */ ht(/* @__PURE__ */ i$1.charCodeAt(0));
			e$1[s$1] = s$1;
		}
	}
}
m(mp$1, "handleIgnoreCase");
function mc(r, e$1) {
	return Ki(r.value, (t) => {
		if (typeof t == "number") return pm(e$1, t);
		{
			let n$1 = t;
			return Ki(e$1, (i$1) => n$1.from <= i$1 && i$1 <= n$1.to) !== void 0;
		}
	});
}
m(mc, "findCode");
function ul(r) {
	let e$1 = r.quantifier;
	return e$1 && e$1.atLeast === 0 ? !0 : r.value ? N(r.value) ? Ui(r.value, ul) : ul(r.value) : !1;
}
m(ul, "isWholeOptional");
var cl = class extends dt {
	static {
		m(this, "CharCodeFinder");
	}
	constructor(e$1) {
		super(), this.targetCharCodes = e$1, this.found = !1;
	}
	visitChildren(e$1) {
		if (this.found !== !0) {
			switch (e$1.type) {
				case "Lookahead":
					this.visitLookahead(e$1);
					return;
				case "NegativeLookahead":
					this.visitNegativeLookahead(e$1);
					return;
			}
			super.visitChildren(e$1);
		}
	}
	visitCharacter(e$1) {
		pm(this.targetCharCodes, e$1.value) && (this.found = !0);
	}
	visitSet(e$1) {
		e$1.complement ? mc(e$1, this.targetCharCodes) === void 0 && (this.found = !0) : mc(e$1, this.targetCharCodes) !== void 0 && (this.found = !0);
	}
};
function qs(r, e$1) {
	if (e$1 instanceof RegExp) {
		let t = /* @__PURE__ */ An(e$1), n$1 = new cl(r);
		return n$1.visit(t), n$1.found;
	} else return Ki(e$1, (t) => pm(r, /* @__PURE__ */ t.charCodeAt(0))) !== void 0;
}
m(qs, "canMatchCharCode");
var fr = "PATTERN", kn = "defaultMode", Xs = "modes", dl = typeof (/* @__PURE__ */ new RegExp("(?:)")).sticky == "boolean";
function xc(r, e$1) {
	e$1 = /* @__PURE__ */ Nf(e$1, {
		useSticky: dl,
		debug: !1,
		safeMode: !1,
		positionTracking: "full",
		lineTerminatorCharacters: ["\r", `
`],
		tracer: /* @__PURE__ */ m((A$3, R$2) => R$2(), "tracer")
	});
	let t = e$1.tracer;
	t("initCharCodeToOptimizedIndexMap", () => {
		Op();
	});
	let n$1;
	t("Reject Lexer.NA", () => {
		n$1 = /* @__PURE__ */ Qm(r, (A$3) => A$3[fr] === se.NA);
	});
	let i$1 = !1, s$1;
	t("Transform Patterns", () => {
		i$1 = !1, s$1 = /* @__PURE__ */ Jr(n$1, (A$3) => {
			let R$2 = A$3[fr];
			if (cm(R$2)) {
				let P$1 = R$2.source;
				return P$1.length === 1 && P$1 !== "^" && P$1 !== "$" && P$1 !== "." && !R$2.ignoreCase ? P$1 : P$1.length === 2 && P$1[0] === "\\" && !pm([
					"d",
					"D",
					"s",
					"S",
					"t",
					"r",
					"n",
					"t",
					"0",
					"c",
					"b",
					"B",
					"f",
					"v",
					"w",
					"W"
				], P$1[1]) ? P$1[1] : e$1.useSticky ? Rc(R$2) : Tc(R$2);
			} else {
				if (T$1(R$2)) return i$1 = !0, { exec: R$2 };
				if (typeof R$2 == "object") return i$1 = !0, R$2;
				if (typeof R$2 == "string") {
					if (R$2.length === 1) return R$2;
					{
						let P$1 = /* @__PURE__ */ R$2.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&"), b$1 = new RegExp(P$1);
						return e$1.useSticky ? Rc(b$1) : Tc(b$1);
					}
				} else throw Error("non exhaustive match");
			}
		});
	});
	let o$1, l$2, u$2, c$2, f$1;
	t("misc mapping", () => {
		o$1 = /* @__PURE__ */ Jr(n$1, (A$3) => A$3.tokenTypeIdx), l$2 = /* @__PURE__ */ Jr(n$1, (A$3) => {
			let R$2 = A$3.GROUP;
			if (R$2 !== se.SKIPPED) {
				if (pr(R$2)) return R$2;
				if (sn(R$2)) return !1;
				throw Error("non exhaustive match");
			}
		}), u$2 = /* @__PURE__ */ Jr(n$1, (A$3) => {
			let R$2 = A$3.LONGER_ALT;
			if (R$2) return N(R$2) ? Jr(R$2, (b$1) => lm(n$1, b$1)) : [/* @__PURE__ */ lm(n$1, R$2)];
		}), c$2 = /* @__PURE__ */ Jr(n$1, (A$3) => A$3.PUSH_MODE), f$1 = /* @__PURE__ */ Jr(n$1, (A$3) => fm(A$3, "POP_MODE"));
	});
	let d$1;
	t("Line Terminator Handling", () => {
		let A$3 = /* @__PURE__ */ Cc(e$1.lineTerminatorCharacters);
		d$1 = /* @__PURE__ */ Jr(n$1, (R$2) => !1), e$1.positionTracking !== "onlyOffset" && (d$1 = /* @__PURE__ */ Jr(n$1, (R$2) => fm(R$2, "LINE_BREAKS") ? !!R$2.LINE_BREAKS : Nc(R$2, A$3) === !1 && qs(A$3, R$2.PATTERN)));
	});
	let h$4, p$2, g$3, y$1;
	t("Misc Mapping #2", () => {
		h$4 = /* @__PURE__ */ Jr(n$1, $c), p$2 = /* @__PURE__ */ Jr(s$1, _p), g$3 = /* @__PURE__ */ Rn(n$1, (A$3, R$2) => {
			let P$1 = R$2.GROUP;
			return pr(P$1) && P$1 !== se.SKIPPED && (A$3[P$1] = []), A$3;
		}, {}), y$1 = /* @__PURE__ */ Jr(s$1, (A$3, R$2) => ({
			pattern: s$1[R$2],
			longerAlt: u$2[R$2],
			canLineTerminator: d$1[R$2],
			isCustom: h$4[R$2],
			short: p$2[R$2],
			group: l$2[R$2],
			push: c$2[R$2],
			pop: f$1[R$2],
			tokenTypeIdx: o$1[R$2],
			tokenType: n$1[R$2]
		}));
	});
	let v$3 = !0, x$2 = [];
	return e$1.safeMode || t("First Char Optimization", () => {
		x$2 = /* @__PURE__ */ Rn(n$1, (A$3, R$2, P$1) => {
			if (typeof R$2.PATTERN == "string") fl(A$3, /* @__PURE__ */ ht(/* @__PURE__ */ R$2.PATTERN.charCodeAt(0)), y$1[P$1]);
			else if (N(R$2.START_CHARS_HINT)) {
				let b$1;
				Zr(R$2.START_CHARS_HINT, (Te$2) => {
					let kr$2 = typeof Te$2 == "string" ? Te$2.charCodeAt(0) : Te$2, Ae$2 = /* @__PURE__ */ ht(kr$2);
					b$1 !== Ae$2 && (b$1 = Ae$2, fl(A$3, Ae$2, y$1[P$1]));
				});
			} else if (cm(R$2.PATTERN)) if (R$2.PATTERN.unicode) v$3 = !1, e$1.ensureOptimizations && xn(`${Ai$1}	Unable to analyze < ${R$2.PATTERN.toString()} > pattern.
	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);
			else {
				let b$1 = /* @__PURE__ */ yc(R$2.PATTERN, e$1.ensureOptimizations);
				Cr(b$1) && (v$3 = !1), Zr(b$1, (Te$2) => {
					fl(A$3, Te$2, y$1[P$1]);
				});
			}
			else e$1.ensureOptimizations && xn(`${Ai$1}	TokenType: <${R$2.name}> is using a custom token pattern without providing <start_chars_hint> parameter.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`), v$3 = !1;
			return A$3;
		}, []);
	}), {
		emptyGroups: g$3,
		patternIdxToConfig: y$1,
		charCodeToPatternIdxToConfig: x$2,
		hasCustom: i$1,
		canBeOptimized: v$3
	};
}
m(xc, "analyzeTokenTypes");
function Ec(r, e$1) {
	let t = [], n$1 = /* @__PURE__ */ yp(r);
	t = /* @__PURE__ */ t.concat(n$1.errors);
	let i$1 = /* @__PURE__ */ Tp(n$1.valid), s$1 = i$1.valid;
	return t = /* @__PURE__ */ t.concat(i$1.errors), t = /* @__PURE__ */ t.concat(/* @__PURE__ */ gp(s$1)), t = /* @__PURE__ */ t.concat(/* @__PURE__ */ Ip(s$1)), t = /* @__PURE__ */ t.concat(/* @__PURE__ */ Np(s$1, e$1)), t = /* @__PURE__ */ t.concat(/* @__PURE__ */ Cp(s$1)), t;
}
m(Ec, "validatePatterns");
function gp(r) {
	let e$1 = [], t = /* @__PURE__ */ fn(r, (n$1) => cm(n$1[fr]));
	return e$1 = /* @__PURE__ */ e$1.concat(/* @__PURE__ */ xp(t)), e$1 = /* @__PURE__ */ e$1.concat(/* @__PURE__ */ vp(t)), e$1 = /* @__PURE__ */ e$1.concat(/* @__PURE__ */ kp(t)), e$1 = /* @__PURE__ */ e$1.concat(/* @__PURE__ */ $p(t)), e$1 = /* @__PURE__ */ e$1.concat(/* @__PURE__ */ Ep(t)), e$1;
}
m(gp, "validateRegExpPattern");
function yp(r) {
	let e$1 = /* @__PURE__ */ fn(r, (i$1) => !fm(i$1, fr));
	return {
		errors: /* @__PURE__ */ Jr(e$1, (i$1) => ({
			message: "Token Type: ->" + i$1.name + "<- missing static 'PATTERN' property",
			type: ie.MISSING_PATTERN,
			tokenTypes: [i$1]
		})),
		valid: /* @__PURE__ */ Ri(r, e$1)
	};
}
m(yp, "findMissingPatterns");
function Tp(r) {
	let e$1 = /* @__PURE__ */ fn(r, (i$1) => {
		let s$1 = i$1[fr];
		return !cm(s$1) && !T$1(s$1) && !fm(s$1, "exec") && !pr(s$1);
	});
	return {
		errors: /* @__PURE__ */ Jr(e$1, (i$1) => ({
			message: "Token Type: ->" + i$1.name + "<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",
			type: ie.INVALID_PATTERN,
			tokenTypes: [i$1]
		})),
		valid: /* @__PURE__ */ Ri(r, e$1)
	};
}
m(Tp, "findInvalidPatterns");
var Rp = /[^\\][$]/;
function xp(r) {
	class e$1 extends dt {
		static {
			m(this, "EndAnchorFinder");
		}
		constructor() {
			super(...arguments), this.found = !1;
		}
		visitEndAnchor(s$1) {
			this.found = !0;
		}
	}
	return Jr(/* @__PURE__ */ fn(r, (i$1) => {
		let s$1 = i$1.PATTERN;
		try {
			let o$1 = /* @__PURE__ */ An(s$1), l$2 = new e$1();
			return l$2.visit(o$1), l$2.found;
		} catch {
			return Rp.test(s$1.source);
		}
	}), (i$1) => ({
		message: `Unexpected RegExp Anchor Error:
	Token Type: ->` + i$1.name + `<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,
		type: ie.EOI_ANCHOR_FOUND,
		tokenTypes: [i$1]
	}));
}
m(xp, "findEndOfInputAnchor");
function Ep(r) {
	return Jr(/* @__PURE__ */ fn(r, (n$1) => n$1.PATTERN.test("")), (n$1) => ({
		message: "Token Type: ->" + n$1.name + "<- static 'PATTERN' must not match an empty string",
		type: ie.EMPTY_MATCH_PATTERN,
		tokenTypes: [n$1]
	}));
}
m(Ep, "findEmptyMatchRegExps");
var Ap = /[^\\[][\^]|^\^/;
function vp(r) {
	class e$1 extends dt {
		static {
			m(this, "StartAnchorFinder");
		}
		constructor() {
			super(...arguments), this.found = !1;
		}
		visitStartAnchor(s$1) {
			this.found = !0;
		}
	}
	return Jr(/* @__PURE__ */ fn(r, (i$1) => {
		let s$1 = i$1.PATTERN;
		try {
			let o$1 = /* @__PURE__ */ An(s$1), l$2 = new e$1();
			return l$2.visit(o$1), l$2.found;
		} catch {
			return Ap.test(s$1.source);
		}
	}), (i$1) => ({
		message: `Unexpected RegExp Anchor Error:
	Token Type: ->` + i$1.name + `<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,
		type: ie.SOI_ANCHOR_FOUND,
		tokenTypes: [i$1]
	}));
}
m(vp, "findStartOfInputAnchor");
function kp(r) {
	return Jr(/* @__PURE__ */ fn(r, (n$1) => {
		let i$1 = n$1[fr];
		return i$1 instanceof RegExp && (i$1.multiline || i$1.global);
	}), (n$1) => ({
		message: "Token Type: ->" + n$1.name + "<- static 'PATTERN' may NOT contain global('g') or multiline('m')",
		type: ie.UNSUPPORTED_FLAGS_FOUND,
		tokenTypes: [n$1]
	}));
}
m(kp, "findUnsupportedFlags");
function $p(r) {
	let e$1 = [], t = /* @__PURE__ */ Jr(r, (s$1) => Rn(r, (o$1, l$2) => (s$1.PATTERN.source === l$2.PATTERN.source && !pm(e$1, l$2) && l$2.PATTERN !== se.NA && (e$1.push(l$2), o$1.push(l$2)), o$1), []));
	t = /* @__PURE__ */ Ai(t);
	return Jr(/* @__PURE__ */ fn(t, (s$1) => s$1.length > 1), (s$1) => {
		let o$1 = /* @__PURE__ */ Jr(s$1, (u$2) => u$2.name);
		return {
			message: `The same RegExp pattern ->${De(s$1).PATTERN}<-has been used in all of the following Token Types: ${o$1.join(", ")} <-`,
			type: ie.DUPLICATE_PATTERNS_FOUND,
			tokenTypes: s$1
		};
	});
}
m($p, "findDuplicatePatterns");
function Ip(r) {
	return Jr(/* @__PURE__ */ fn(r, (n$1) => {
		if (!fm(n$1, "GROUP")) return !1;
		let i$1 = n$1.GROUP;
		return i$1 !== se.SKIPPED && i$1 !== se.NA && !pr(i$1);
	}), (n$1) => ({
		message: "Token Type: ->" + n$1.name + "<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",
		type: ie.INVALID_GROUP_TYPE_FOUND,
		tokenTypes: [n$1]
	}));
}
m(Ip, "findInvalidGroupType");
function Np(r, e$1) {
	return Jr(/* @__PURE__ */ fn(r, (i$1) => i$1.PUSH_MODE !== void 0 && !pm(e$1, i$1.PUSH_MODE)), (i$1) => ({
		message: `Token Type: ->${i$1.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${i$1.PUSH_MODE}<-which does not exist`,
		type: ie.PUSH_MODE_DOES_NOT_EXIST,
		tokenTypes: [i$1]
	}));
}
m(Np, "findModesThatDoNotExist");
function Cp(r) {
	let e$1 = [], t = /* @__PURE__ */ Rn(r, (n$1, i$1, s$1) => {
		let o$1 = i$1.PATTERN;
		return o$1 === se.NA || (pr(o$1) ? n$1.push({
			str: o$1,
			idx: s$1,
			tokenType: i$1
		}) : cm(o$1) && wp(o$1) && n$1.push({
			str: o$1.source,
			idx: s$1,
			tokenType: i$1
		})), n$1;
	}, []);
	return Zr(r, (n$1, i$1) => {
		Zr(t, ({ str: s$1, idx: o$1, tokenType: l$2 }) => {
			if (i$1 < o$1 && Sp(s$1, n$1.PATTERN)) {
				let u$2 = `Token: ->${l$2.name}<- can never be matched.
Because it appears AFTER the Token Type ->${n$1.name}<-in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;
				e$1.push({
					message: u$2,
					type: ie.UNREACHABLE_PATTERN,
					tokenTypes: [n$1, l$2]
				});
			}
		});
	}), e$1;
}
m(Cp, "findUnreachablePatterns");
function Sp(r, e$1) {
	if (cm(e$1)) {
		let t = /* @__PURE__ */ e$1.exec(r);
		return t !== null && t.index === 0;
	} else {
		if (T$1(e$1)) return e$1(r, 0, [], {});
		if (fm(e$1, "exec")) return e$1.exec(r, 0, [], {});
		if (typeof e$1 == "string") return e$1 === r;
		throw Error("non exhaustive match");
	}
}
m(Sp, "testTokenType");
function wp(r) {
	return Ki([
		".",
		"\\",
		"[",
		"]",
		"|",
		"^",
		"$",
		"(",
		")",
		"?",
		"*",
		"+",
		"{"
	], (t) => r.source.indexOf(t) !== -1) === void 0;
}
m(wp, "noMetaChar");
function Tc(r) {
	let e$1 = r.ignoreCase ? "i" : "";
	return new RegExp(`^(?:${r.source})`, e$1);
}
m(Tc, "addStartOfInput");
function Rc(r) {
	let e$1 = r.ignoreCase ? "iy" : "y";
	return new RegExp(`${r.source}`, e$1);
}
m(Rc, "addStickyFlag");
function Ac(r, e$1, t) {
	let n$1 = [];
	return fm(r, kn) || n$1.push({
		message: "A MultiMode Lexer cannot be initialized without a <" + kn + `> property in its definition
`,
		type: ie.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE
	}), fm(r, Xs) || n$1.push({
		message: "A MultiMode Lexer cannot be initialized without a <" + Xs + `> property in its definition
`,
		type: ie.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY
	}), fm(r, Xs) && fm(r, kn) && !fm(r.modes, r.defaultMode) && n$1.push({
		message: `A MultiMode Lexer cannot be initialized with a ${kn}: <${r.defaultMode}>which does not exist
`,
		type: ie.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST
	}), fm(r, Xs) && Zr(r.modes, (i$1, s$1) => {
		Zr(i$1, (o$1, l$2) => {
			if (sn(o$1)) n$1.push({
				message: `A Lexer cannot be initialized using an undefined Token Type. Mode:<${s$1}> at index: <${l$2}>
`,
				type: ie.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED
			});
			else if (fm(o$1, "LONGER_ALT")) {
				let u$2 = N(o$1.LONGER_ALT) ? o$1.LONGER_ALT : [o$1.LONGER_ALT];
				Zr(u$2, (c$2) => {
					!sn(c$2) && !pm(i$1, c$2) && n$1.push({
						message: `A MultiMode Lexer cannot be initialized with a longer_alt <${c$2.name}> on token <${o$1.name}> outside of mode <${s$1}>
`,
						type: ie.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE
					});
				});
			}
		});
	}), n$1;
}
m(Ac, "performRuntimeChecks");
function vc(r, e$1, t) {
	let n$1 = [], i$1 = !1, s$1 = /* @__PURE__ */ Ai(/* @__PURE__ */ Qr(/* @__PURE__ */ Xr(r.modes))), o$1 = /* @__PURE__ */ Qm(s$1, (u$2) => u$2[fr] === se.NA), l$2 = /* @__PURE__ */ Cc(t);
	return e$1 && Zr(o$1, (u$2) => {
		let c$2 = /* @__PURE__ */ Nc(u$2, l$2);
		if (c$2 !== !1) {
			let d$1 = {
				message: /* @__PURE__ */ Lp(u$2, c$2),
				type: c$2.issue,
				tokenType: u$2
			};
			n$1.push(d$1);
		} else fm(u$2, "LINE_BREAKS") ? u$2.LINE_BREAKS === !0 && (i$1 = !0) : qs(l$2, u$2.PATTERN) && (i$1 = !0);
	}), e$1 && !i$1 && n$1.push({
		message: `Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS 
	for details.`,
		type: ie.NO_LINE_BREAKS_FLAGS
	}), n$1;
}
m(vc, "performWarningRuntimeChecks");
function kc(r) {
	let e$1 = {};
	return Zr(/* @__PURE__ */ h(r), (n$1) => {
		let i$1 = r[n$1];
		if (N(i$1)) e$1[n$1] = [];
		else throw Error("non exhaustive match");
	}), e$1;
}
m(kc, "cloneEmptyGroups");
function $c(r) {
	let e$1 = r.PATTERN;
	if (cm(e$1)) return !1;
	if (T$1(e$1)) return !0;
	if (fm(e$1, "exec")) return !0;
	if (pr(e$1)) return !1;
	throw Error("non exhaustive match");
}
m($c, "isCustomPattern");
function _p(r) {
	return pr(r) && r.length === 1 ? r.charCodeAt(0) : !1;
}
m(_p, "isShortPattern");
var Ic = {
	test: /* @__PURE__ */ m(function(r) {
		let e$1 = r.length;
		for (let t = this.lastIndex; t < e$1; t++) {
			let n$1 = /* @__PURE__ */ r.charCodeAt(t);
			if (n$1 === 10) return this.lastIndex = t + 1, !0;
			if (n$1 === 13) return r.charCodeAt(t + 1) === 10 ? this.lastIndex = t + 2 : this.lastIndex = t + 1, !0;
		}
		return !1;
	}, "test"),
	lastIndex: 0
};
function Nc(r, e$1) {
	if (fm(r, "LINE_BREAKS")) return !1;
	if (cm(r.PATTERN)) {
		try {
			qs(e$1, r.PATTERN);
		} catch (t) {
			return {
				issue: ie.IDENTIFY_TERMINATOR,
				errMsg: t.message
			};
		}
		return !1;
	} else {
		if (pr(r.PATTERN)) return !1;
		if ($c(r)) return { issue: ie.CUSTOM_LINE_BREAK };
		throw Error("non exhaustive match");
	}
}
m(Nc, "checkLineBreaksIssues");
function Lp(r, e$1) {
	if (e$1.issue === ie.IDENTIFY_TERMINATOR) return `Warning: unable to identify line terminator usage in pattern.
	The problem is in the <${r.name}> Token Type
	 Root cause: ${e$1.errMsg}.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`;
	if (e$1.issue === ie.CUSTOM_LINE_BREAK) return `Warning: A Custom Token Pattern should specify the <line_breaks> option.
	The problem is in the <${r.name}> Token Type
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`;
	throw Error("non exhaustive match");
}
m(Lp, "buildLineBreakIssueMessage");
function Cc(r) {
	return Jr(r, (t) => pr(t) ? t.charCodeAt(0) : t);
}
m(Cc, "getCharCodes");
function fl(r, e$1, t) {
	r[e$1] === void 0 ? r[e$1] = [t] : r[e$1].push(t);
}
m(fl, "addToMapOfArrays");
var vn = 256, Ys = [];
function ht(r) {
	return r < vn ? r : Ys[r];
}
m(ht, "charCodeToOptimizedIndex");
function Op() {
	if (Cr(Ys)) {
		Ys = new Array(65536);
		for (let r = 0; r < 65536; r++) Ys[r] = r > 255 ? 255 + ~~(r / 255) : r;
	}
}
m(Op, "initCharCodeToOptimizedIndexMap");
function Ct(r, e$1) {
	let t = r.tokenTypeIdx;
	return t === e$1.tokenTypeIdx ? !0 : e$1.isParent === !0 && e$1.categoryMatchesMap[t] === !0;
}
m(Ct, "tokenStructuredMatcher");
function $n(r, e$1) {
	return r.tokenTypeIdx === e$1.tokenTypeIdx;
}
m($n, "tokenStructuredMatcherNoCategories");
var Sc = 1, _c = {};
function St(r) {
	let e$1 = /* @__PURE__ */ Pp(r);
	bp(e$1), Dp(e$1), Mp(e$1), Zr(e$1, (t) => {
		t.isParent = t.categoryMatches.length > 0;
	});
}
m(St, "augmentTokenTypes");
function Pp(r) {
	let e$1 = /* @__PURE__ */ _f(r), t = r, n$1 = !0;
	for (; n$1;) {
		t = /* @__PURE__ */ Ai(/* @__PURE__ */ Qr(/* @__PURE__ */ Jr(t, (s$1) => s$1.CATEGORIES)));
		let i$1 = /* @__PURE__ */ Ri(t, e$1);
		e$1 = /* @__PURE__ */ e$1.concat(i$1), Cr(i$1) ? n$1 = !1 : t = i$1;
	}
	return e$1;
}
m(Pp, "expandCategories");
function bp(r) {
	Zr(r, (e$1) => {
		hl(e$1) || (_c[Sc] = e$1, e$1.tokenTypeIdx = Sc++), wc(e$1) && !N(e$1.CATEGORIES) && (e$1.CATEGORIES = [e$1.CATEGORIES]), wc(e$1) || (e$1.CATEGORIES = []), Fp(e$1) || (e$1.categoryMatches = []), Gp(e$1) || (e$1.categoryMatchesMap = {});
	});
}
m(bp, "assignTokenDefaultProps");
function Mp(r) {
	Zr(r, (e$1) => {
		e$1.categoryMatches = [], Zr(e$1.categoryMatchesMap, (t, n$1) => {
			e$1.categoryMatches.push(_c[n$1].tokenTypeIdx);
		});
	});
}
m(Mp, "assignCategoriesTokensProp");
function Dp(r) {
	Zr(r, (e$1) => {
		Lc([], e$1);
	});
}
m(Dp, "assignCategoriesMapProp");
function Lc(r, e$1) {
	Zr(r, (t) => {
		e$1.categoryMatchesMap[t.tokenTypeIdx] = !0;
	}), Zr(e$1.CATEGORIES, (t) => {
		let n$1 = /* @__PURE__ */ r.concat(e$1);
		pm(n$1, t) || Lc(n$1, t);
	});
}
m(Lc, "singleAssignCategoriesToksMap");
function hl(r) {
	return fm(r, "tokenTypeIdx");
}
m(hl, "hasShortKeyProperty");
function wc(r) {
	return fm(r, "CATEGORIES");
}
m(wc, "hasCategoriesProperty");
function Fp(r) {
	return fm(r, "categoryMatches");
}
m(Fp, "hasExtendingTokensTypesProperty");
function Gp(r) {
	return fm(r, "categoryMatchesMap");
}
m(Gp, "hasExtendingTokensTypesMapProperty");
function Oc(r) {
	return fm(r, "tokenTypeIdx");
}
m(Oc, "isTokenType");
var In = {
	buildUnableToPopLexerModeMessage(r) {
		return `Unable to pop Lexer Mode after encountering Token ->${r.image}<- The Mode Stack is empty`;
	},
	buildUnexpectedCharactersMessage(r, e$1, t, n$1, i$1) {
		return `unexpected character: ->${r.charAt(e$1)}<- at offset: ${e$1}, skipped ${t} characters.`;
	}
};
var ie;
(function(r) {
	r[r.MISSING_PATTERN = 0] = "MISSING_PATTERN", r[r.INVALID_PATTERN = 1] = "INVALID_PATTERN", r[r.EOI_ANCHOR_FOUND = 2] = "EOI_ANCHOR_FOUND", r[r.UNSUPPORTED_FLAGS_FOUND = 3] = "UNSUPPORTED_FLAGS_FOUND", r[r.DUPLICATE_PATTERNS_FOUND = 4] = "DUPLICATE_PATTERNS_FOUND", r[r.INVALID_GROUP_TYPE_FOUND = 5] = "INVALID_GROUP_TYPE_FOUND", r[r.PUSH_MODE_DOES_NOT_EXIST = 6] = "PUSH_MODE_DOES_NOT_EXIST", r[r.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE = 7] = "MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE", r[r.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY = 8] = "MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY", r[r.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST = 9] = "MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST", r[r.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED = 10] = "LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED", r[r.SOI_ANCHOR_FOUND = 11] = "SOI_ANCHOR_FOUND", r[r.EMPTY_MATCH_PATTERN = 12] = "EMPTY_MATCH_PATTERN", r[r.NO_LINE_BREAKS_FLAGS = 13] = "NO_LINE_BREAKS_FLAGS", r[r.UNREACHABLE_PATTERN = 14] = "UNREACHABLE_PATTERN", r[r.IDENTIFY_TERMINATOR = 15] = "IDENTIFY_TERMINATOR", r[r.CUSTOM_LINE_BREAK = 16] = "CUSTOM_LINE_BREAK", r[r.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE = 17] = "MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE";
})(ie || (ie = {}));
var vi = {
	deferDefinitionErrorsHandling: !1,
	positionTracking: "full",
	lineTerminatorsPattern: /\n|\r\n?/g,
	lineTerminatorCharacters: [`
`, "\r"],
	ensureOptimizations: !1,
	safeMode: !1,
	errorMessageProvider: In,
	traceInitPerf: !1,
	skipValidations: !1,
	recoveryEnabled: !0
};
Object.freeze(vi);
var se = class {
	static {
		m(this, "Lexer");
	}
	constructor(e$1, t = vi) {
		if (this.lexerDefinition = e$1, this.lexerDefinitionErrors = [], this.lexerDefinitionWarning = [], this.patternIdxToConfig = {}, this.charCodeToPatternIdxToConfig = {}, this.modes = [], this.emptyGroups = {}, this.trackStartLines = !0, this.trackEndLines = !0, this.hasCustom = !1, this.canModeBeOptimized = {}, this.TRACE_INIT = (i$1, s$1) => {
			if (this.traceInitPerf === !0) {
				this.traceInitIndent++;
				let o$1 = /* @__PURE__ */ new Array(this.traceInitIndent + 1).join("	");
				this.traceInitIndent < this.traceInitMaxIdent && console.log(`${o$1}--> <${i$1}>`);
				let { time: l$2, value: u$2 } = xi(s$1), c$2 = l$2 > 10 ? console.warn : console.log;
				return this.traceInitIndent < this.traceInitMaxIdent && c$2(`${o$1}<-- <${i$1}> time: ${l$2}ms`), this.traceInitIndent--, u$2;
			} else return s$1();
		}, typeof t == "boolean") throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);
		this.config = /* @__PURE__ */ fi({}, vi, t);
		let n$1 = this.config.traceInitPerf;
		n$1 === !0 ? (this.traceInitMaxIdent = Infinity, this.traceInitPerf = !0) : typeof n$1 == "number" && (this.traceInitMaxIdent = n$1, this.traceInitPerf = !0), this.traceInitIndent = -1, this.TRACE_INIT("Lexer Constructor", () => {
			let i$1, s$1 = !0;
			this.TRACE_INIT("Lexer Config handling", () => {
				if (this.config.lineTerminatorsPattern === vi.lineTerminatorsPattern) this.config.lineTerminatorsPattern = Ic;
				else if (this.config.lineTerminatorCharacters === vi.lineTerminatorCharacters) throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);
				if (t.safeMode && t.ensureOptimizations) throw Error("\"safeMode\" and \"ensureOptimizations\" flags are mutually exclusive.");
				this.trackStartLines = /* @__PURE__ */ /full|onlyStart/i.test(this.config.positionTracking), this.trackEndLines = /* @__PURE__ */ /full/i.test(this.config.positionTracking), N(e$1) ? i$1 = {
					modes: { defaultMode: /* @__PURE__ */ _f(e$1) },
					defaultMode: kn
				} : (s$1 = !1, i$1 = /* @__PURE__ */ _f(e$1));
			}), this.config.skipValidations === !1 && (this.TRACE_INIT("performRuntimeChecks", () => {
				this.lexerDefinitionErrors = /* @__PURE__ */ this.lexerDefinitionErrors.concat(/* @__PURE__ */ Ac(i$1, this.trackStartLines, this.config.lineTerminatorCharacters));
			}), this.TRACE_INIT("performWarningRuntimeChecks", () => {
				this.lexerDefinitionWarning = /* @__PURE__ */ this.lexerDefinitionWarning.concat(/* @__PURE__ */ vc(i$1, this.trackStartLines, this.config.lineTerminatorCharacters));
			})), i$1.modes = i$1.modes ? i$1.modes : {}, Zr(i$1.modes, (l$2, u$2) => {
				i$1.modes[u$2] = /* @__PURE__ */ Qm(l$2, (c$2) => sn(c$2));
			});
			let o$1 = /* @__PURE__ */ h(i$1.modes);
			if (Zr(i$1.modes, (l$2, u$2) => {
				this.TRACE_INIT(`Mode: <${u$2}> processing`, () => {
					if (this.modes.push(u$2), this.config.skipValidations === !1 && this.TRACE_INIT("validatePatterns", () => {
						this.lexerDefinitionErrors = /* @__PURE__ */ this.lexerDefinitionErrors.concat(/* @__PURE__ */ Ec(l$2, o$1));
					}), Cr(this.lexerDefinitionErrors)) {
						St(l$2);
						let c$2;
						this.TRACE_INIT("analyzeTokenTypes", () => {
							c$2 = /* @__PURE__ */ xc(l$2, {
								lineTerminatorCharacters: this.config.lineTerminatorCharacters,
								positionTracking: t.positionTracking,
								ensureOptimizations: t.ensureOptimizations,
								safeMode: t.safeMode,
								tracer: this.TRACE_INIT
							});
						}), this.patternIdxToConfig[u$2] = c$2.patternIdxToConfig, this.charCodeToPatternIdxToConfig[u$2] = c$2.charCodeToPatternIdxToConfig, this.emptyGroups = /* @__PURE__ */ fi({}, this.emptyGroups, c$2.emptyGroups), this.hasCustom = c$2.hasCustom || this.hasCustom, this.canModeBeOptimized[u$2] = c$2.canBeOptimized;
					}
				});
			}), this.defaultMode = i$1.defaultMode, !Cr(this.lexerDefinitionErrors) && !this.config.deferDefinitionErrorsHandling) {
				let u$2 = /* @__PURE__ */ Jr(this.lexerDefinitionErrors, (c$2) => c$2.message).join(`-----------------------
`);
				throw new Error(`Errors detected in definition of Lexer:
` + u$2);
			}
			Zr(this.lexerDefinitionWarning, (l$2) => {
				Ri$1(l$2.message);
			}), this.TRACE_INIT("Choosing sub-methods implementations", () => {
				if (dl ? (this.chopInput = Y, this.match = this.matchWithTest) : (this.updateLastIndex = kr, this.match = this.matchWithExec), s$1 && (this.handleModes = kr), this.trackStartLines === !1 && (this.computeNewColumn = Y), this.trackEndLines === !1 && (this.updateTokenEndLineColumnLocation = kr), /full/i.test(this.config.positionTracking)) this.createTokenInstance = this.createFullToken;
				else if (/onlyStart/i.test(this.config.positionTracking)) this.createTokenInstance = this.createStartOnlyToken;
				else if (/onlyOffset/i.test(this.config.positionTracking)) this.createTokenInstance = this.createOffsetOnlyToken;
				else throw Error(`Invalid <positionTracking> config option: "${this.config.positionTracking}"`);
				this.hasCustom ? (this.addToken = this.addTokenUsingPush, this.handlePayload = this.handlePayloadWithCustom) : (this.addToken = this.addTokenUsingMemberAccess, this.handlePayload = this.handlePayloadNoCustom);
			}), this.TRACE_INIT("Failed Optimization Warnings", () => {
				let l$2 = /* @__PURE__ */ Rn(this.canModeBeOptimized, (u$2, c$2, f$1) => (c$2 === !1 && u$2.push(f$1), u$2), []);
				if (t.ensureOptimizations && !Cr(l$2)) throw Error(`Lexer Modes: < ${l$2.join(", ")} > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`);
			}), this.TRACE_INIT("clearRegExpParserCache", () => {
				pc();
			}), this.TRACE_INIT("toFastProperties", () => {
				Ei(this);
			});
		});
	}
	tokenize(e$1, t = this.defaultMode) {
		if (!Cr(this.lexerDefinitionErrors)) {
			let i$1 = /* @__PURE__ */ Jr(this.lexerDefinitionErrors, (s$1) => s$1.message).join(`-----------------------
`);
			throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
` + i$1);
		}
		return this.tokenizeInternal(e$1, t);
	}
	tokenizeInternal(e$1, t) {
		let n$1, i$1, s$1, o$1, l$2, u$2, c$2, f$1, d$1, h$4, p$2, g$3, y$1, x$2, A$3, R$2 = e$1, P$1 = R$2.length, b$1 = 0, Te$2 = 0, kr$2 = this.hasCustom ? 0 : Math.floor(e$1.length / 10), Ae$2 = new Array(kr$2), Mt$2 = [], Tt$2 = this.trackStartLines ? 1 : void 0, k$4 = this.trackStartLines ? 1 : void 0, T$3 = /* @__PURE__ */ kc(this.emptyGroups), C$2 = this.trackStartLines, N$2 = this.config.lineTerminatorsPattern, V$2 = 0, O$2 = [], L$2 = [], Le$2 = [], Oe$2 = [];
		Object.freeze(Oe$2);
		let ee$2;
		function Ht$2() {
			return O$2;
		}
		m(Ht$2, "getPossiblePatternsSlow");
		function Uu(ve$2) {
			let $r$2 = L$2[/* @__PURE__ */ ht(ve$2)];
			return $r$2 === void 0 ? Oe$2 : $r$2;
		}
		m(Uu, "getPossiblePatternsOptimized");
		let vh = /* @__PURE__ */ m((ve$2) => {
			if (Le$2.length === 1 && ve$2.tokenType.PUSH_MODE === void 0) {
				let Xe$2 = /* @__PURE__ */ this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(ve$2);
				Mt$2.push({
					offset: ve$2.startOffset,
					line: ve$2.startLine,
					column: ve$2.startColumn,
					length: ve$2.image.length,
					message: Xe$2
				});
			} else {
				Le$2.pop();
				let Xe$2 = /* @__PURE__ */ Df(Le$2);
				O$2 = this.patternIdxToConfig[Xe$2], L$2 = this.charCodeToPatternIdxToConfig[Xe$2], V$2 = O$2.length;
				let $r$2 = this.canModeBeOptimized[Xe$2] && this.config.safeMode === !1;
				L$2 && $r$2 ? ee$2 = Uu : ee$2 = Ht$2;
			}
		}, "pop_mode");
		function Bu(ve$2) {
			Le$2.push(ve$2), L$2 = this.charCodeToPatternIdxToConfig[ve$2], O$2 = this.patternIdxToConfig[ve$2], V$2 = O$2.length, V$2 = O$2.length;
			let Xe$2 = this.canModeBeOptimized[ve$2] && this.config.safeMode === !1;
			L$2 && Xe$2 ? ee$2 = Uu : ee$2 = Ht$2;
		}
		m(Bu, "push_mode"), Bu.call(this, t);
		let Ze$1, Wu = this.config.recoveryEnabled;
		for (; b$1 < P$1;) {
			u$2 = null;
			let ve$2 = /* @__PURE__ */ R$2.charCodeAt(b$1), Xe$2 = /* @__PURE__ */ ee$2(ve$2), $r$2 = Xe$2.length;
			for (n$1 = 0; n$1 < $r$2; n$1++) {
				Ze$1 = Xe$2[n$1];
				let Ke$2 = Ze$1.pattern;
				c$2 = null;
				let Rt$2 = Ze$1.short;
				if (Rt$2 !== !1 ? ve$2 === Rt$2 && (u$2 = Ke$2) : Ze$1.isCustom === !0 ? (A$3 = /* @__PURE__ */ Ke$2.exec(R$2, b$1, Ae$2, T$3), A$3 !== null ? (u$2 = A$3[0], A$3.payload !== void 0 && (c$2 = A$3.payload)) : u$2 = null) : (this.updateLastIndex(Ke$2, b$1), u$2 = /* @__PURE__ */ this.match(Ke$2, e$1, b$1)), u$2 !== null) {
					if (l$2 = Ze$1.longerAlt, l$2 !== void 0) {
						let Dt$2 = l$2.length;
						for (s$1 = 0; s$1 < Dt$2; s$1++) {
							let xt$1 = O$2[l$2[s$1]], zt$1 = xt$1.pattern;
							if (f$1 = null, xt$1.isCustom === !0 ? (A$3 = /* @__PURE__ */ zt$1.exec(R$2, b$1, Ae$2, T$3), A$3 !== null ? (o$1 = A$3[0], A$3.payload !== void 0 && (f$1 = A$3.payload)) : o$1 = null) : (this.updateLastIndex(zt$1, b$1), o$1 = /* @__PURE__ */ this.match(zt$1, e$1, b$1)), o$1 && o$1.length > u$2.length) {
								u$2 = o$1, c$2 = f$1, Ze$1 = xt$1;
								break;
							}
						}
					}
					break;
				}
			}
			if (u$2 !== null) {
				if (d$1 = u$2.length, h$4 = Ze$1.group, h$4 !== void 0 && (p$2 = Ze$1.tokenTypeIdx, g$3 = /* @__PURE__ */ this.createTokenInstance(u$2, b$1, p$2, Ze$1.tokenType, Tt$2, k$4, d$1), this.handlePayload(g$3, c$2), h$4 === !1 ? Te$2 = /* @__PURE__ */ this.addToken(Ae$2, Te$2, g$3) : T$3[h$4].push(g$3)), e$1 = /* @__PURE__ */ this.chopInput(e$1, d$1), b$1 = b$1 + d$1, k$4 = /* @__PURE__ */ this.computeNewColumn(k$4, d$1), C$2 === !0 && Ze$1.canLineTerminator === !0) {
					let Ke$2 = 0, Rt$2, Dt$2;
					N$2.lastIndex = 0;
					do
						Rt$2 = /* @__PURE__ */ N$2.test(u$2), Rt$2 === !0 && (Dt$2 = N$2.lastIndex - 1, Ke$2++);
					while (Rt$2 === !0);
					Ke$2 !== 0 && (Tt$2 = Tt$2 + Ke$2, k$4 = d$1 - Dt$2, this.updateTokenEndLineColumnLocation(g$3, h$4, Dt$2, Ke$2, Tt$2, k$4, d$1));
				}
				this.handleModes(Ze$1, vh, Bu, g$3);
			} else {
				let Ke$2 = b$1, Rt$2 = Tt$2, Dt$2 = k$4, xt$1 = Wu === !1;
				for (; xt$1 === !1 && b$1 < P$1;) for (e$1 = /* @__PURE__ */ this.chopInput(e$1, 1), b$1++, i$1 = 0; i$1 < V$2; i$1++) {
					let zt$1 = O$2[i$1], co$1 = zt$1.pattern, Ku = zt$1.short;
					if (Ku !== !1 ? R$2.charCodeAt(b$1) === Ku && (xt$1 = !0) : zt$1.isCustom === !0 ? xt$1 = co$1.exec(R$2, b$1, Ae$2, T$3) !== null : (this.updateLastIndex(co$1, b$1), xt$1 = co$1.exec(e$1) !== null), xt$1 === !0) break;
				}
				if (y$1 = b$1 - Ke$2, k$4 = /* @__PURE__ */ this.computeNewColumn(k$4, y$1), x$2 = /* @__PURE__ */ this.config.errorMessageProvider.buildUnexpectedCharactersMessage(R$2, Ke$2, y$1, Rt$2, Dt$2), Mt$2.push({
					offset: Ke$2,
					line: Rt$2,
					column: Dt$2,
					length: y$1,
					message: x$2
				}), Wu === !1) break;
			}
		}
		return this.hasCustom || (Ae$2.length = Te$2), {
			tokens: Ae$2,
			groups: T$3,
			errors: Mt$2
		};
	}
	handleModes(e$1, t, n$1, i$1) {
		if (e$1.pop === !0) {
			let s$1 = e$1.push;
			t(i$1), s$1 !== void 0 && n$1.call(this, s$1);
		} else e$1.push !== void 0 && n$1.call(this, e$1.push);
	}
	chopInput(e$1, t) {
		return e$1.substring(t);
	}
	updateLastIndex(e$1, t) {
		e$1.lastIndex = t;
	}
	updateTokenEndLineColumnLocation(e$1, t, n$1, i$1, s$1, o$1, l$2) {
		let u$2, c$2;
		t !== void 0 && (u$2 = n$1 === l$2 - 1, c$2 = u$2 ? -1 : 0, i$1 === 1 && u$2 === !0 || (e$1.endLine = s$1 + c$2, e$1.endColumn = o$1 - 1 + -c$2));
	}
	computeNewColumn(e$1, t) {
		return e$1 + t;
	}
	createOffsetOnlyToken(e$1, t, n$1, i$1) {
		return {
			image: e$1,
			startOffset: t,
			tokenTypeIdx: n$1,
			tokenType: i$1
		};
	}
	createStartOnlyToken(e$1, t, n$1, i$1, s$1, o$1) {
		return {
			image: e$1,
			startOffset: t,
			startLine: s$1,
			startColumn: o$1,
			tokenTypeIdx: n$1,
			tokenType: i$1
		};
	}
	createFullToken(e$1, t, n$1, i$1, s$1, o$1, l$2) {
		return {
			image: e$1,
			startOffset: t,
			endOffset: t + l$2 - 1,
			startLine: s$1,
			endLine: s$1,
			startColumn: o$1,
			endColumn: o$1 + l$2 - 1,
			tokenTypeIdx: n$1,
			tokenType: i$1
		};
	}
	addTokenUsingPush(e$1, t, n$1) {
		return e$1.push(n$1), t;
	}
	addTokenUsingMemberAccess(e$1, t, n$1) {
		return e$1[t] = n$1, t++, t;
	}
	handlePayloadNoCustom(e$1, t) {}
	handlePayloadWithCustom(e$1, t) {
		t !== null && (e$1.payload = t);
	}
	matchWithTest(e$1, t, n$1) {
		return e$1.test(t) === !0 ? t.substring(n$1, e$1.lastIndex) : null;
	}
	matchWithExec(e$1, t) {
		let n$1 = /* @__PURE__ */ e$1.exec(t);
		return n$1 !== null ? n$1[0] : null;
	}
};
se.SKIPPED = "This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";
se.NA = /NOT_APPLICABLE/;
function wt(r) {
	return pl(r) ? r.LABEL : r.name;
}
m(wt, "tokenLabel");
function pl(r) {
	return pr(r.LABEL) && r.LABEL !== "";
}
m(pl, "hasTokenLabel");
var Up = "parent", Pc = "categories", bc = "label", Mc = "group", Dc = "push_mode", Fc = "pop_mode", Gc = "longer_alt", Uc = "line_breaks", Bc = "start_chars_hint";
function Bt(r) {
	return Bp(r);
}
m(Bt, "createToken");
function Bp(r) {
	let e$1 = r.pattern, t = {};
	if (t.name = r.name, sn(e$1) || (t.PATTERN = e$1), fm(r, Up)) throw `The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;
	return fm(r, Pc) && (t.CATEGORIES = r[Pc]), St([t]), fm(r, bc) && (t.LABEL = r[bc]), fm(r, Mc) && (t.GROUP = r[Mc]), fm(r, Fc) && (t.POP_MODE = r[Fc]), fm(r, Dc) && (t.PUSH_MODE = r[Dc]), fm(r, Gc) && (t.LONGER_ALT = r[Gc]), fm(r, Uc) && (t.LINE_BREAKS = r[Uc]), fm(r, Bc) && (t.START_CHARS_HINT = r[Bc]), t;
}
m(Bp, "createTokenInternal");
var qe = /* @__PURE__ */ Bt({
	name: "EOF",
	pattern: se.NA
});
St([qe]);
function _t(r, e$1, t, n$1, i$1, s$1, o$1, l$2) {
	return {
		image: e$1,
		startOffset: t,
		endOffset: n$1,
		startLine: i$1,
		endLine: s$1,
		startColumn: o$1,
		endColumn: l$2,
		tokenTypeIdx: r.tokenTypeIdx,
		tokenType: r
	};
}
m(_t, "createTokenInstance");
function ki(r, e$1) {
	return Ct(r, e$1);
}
m(ki, "tokenMatcher");
var Lt = {
	buildMismatchTokenMessage({ expected: r, actual: e$1, previous: t, ruleName: n$1 }) {
		return `Expecting ${pl(r) ? `--> ${wt(r)} <--` : `token of type --> ${r.name} <--`} but found --> '${e$1.image}' <--`;
	},
	buildNotAllInputParsedMessage({ firstRedundant: r, ruleName: e$1 }) {
		return "Redundant input, expecting EOF but found: " + r.image;
	},
	buildNoViableAltMessage({ expectedPathsPerAlt: r, actual: e$1, previous: t, customUserDescription: n$1, ruleName: i$1 }) {
		let s$1 = "Expecting: ", l$2 = `
but found: '` + De(e$1).image + "'";
		if (n$1) return s$1 + n$1 + l$2;
		{
			let d$1 = `one of these possible Token sequences:
${Jr(/* @__PURE__ */ Jr(/* @__PURE__ */ Rn(r, (h$4, p$2) => h$4.concat(p$2), []), (h$4) => `[${Jr(h$4, (p$2) => wt(p$2)).join(", ")}]`), (h$4, p$2) => `  ${p$2 + 1}. ${h$4}`).join(`
`)}`;
			return s$1 + d$1 + l$2;
		}
	},
	buildEarlyExitMessage({ expectedIterationPaths: r, actual: e$1, customUserDescription: t, ruleName: n$1 }) {
		let i$1 = "Expecting: ", o$1 = `
but found: '` + De(e$1).image + "'";
		if (t) return i$1 + t + o$1;
		{
			let u$2 = `expecting at least one iteration which starts with one of these possible Token sequences::
  <${Jr(r, (c$2) => `[${Jr(c$2, (f$1) => wt(f$1)).join(",")}]`).join(" ,")}>`;
			return i$1 + u$2 + o$1;
		}
	}
};
Object.freeze(Lt);
var Wc = { buildRuleNotFoundError(r, e$1) {
	return "Invalid grammar, reference to a rule which is not defined: ->" + e$1.nonTerminalName + `<-
inside top level rule: ->` + r.name + "<-";
} }, it = {
	buildDuplicateFoundError(r, e$1) {
		function t(f$1) {
			return f$1 instanceof D ? f$1.terminalType.name : f$1 instanceof H ? f$1.nonTerminalName : "";
		}
		m(t, "getExtraProductionArgument");
		let n$1 = r.name, i$1 = /* @__PURE__ */ De(e$1), s$1 = i$1.idx, o$1 = /* @__PURE__ */ We(i$1), l$2 = /* @__PURE__ */ t(i$1), c$2 = `->${o$1}${s$1 > 0 ? s$1 : ""}<- ${l$2 ? `with argument: ->${l$2}<-` : ""}
                  appears more than once (${e$1.length} times) in the top level rule: ->${n$1}<-.                  
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `;
		return c$2 = /* @__PURE__ */ c$2.replace(/[ \t]+/g, " "), c$2 = /* @__PURE__ */ c$2.replace(/\s\s+/g, `
`), c$2;
	},
	buildNamespaceConflictError(r) {
		return `Namespace conflict found in grammar.
The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <${r.name}>.
To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`;
	},
	buildAlternationPrefixAmbiguityError(r) {
		let e$1 = /* @__PURE__ */ Jr(r.prefixPath, (i$1) => wt(i$1)).join(", "), t = r.alternation.idx === 0 ? "" : r.alternation.idx;
		return `Ambiguous alternatives: <${r.ambiguityIndices.join(" ,")}> due to common lookahead prefix
in <OR${t}> inside <${r.topLevelRule.name}> Rule,
<${e$1}> may appears as a prefix path in all these alternatives.
See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`;
	},
	buildAlternationAmbiguityError(r) {
		let e$1 = /* @__PURE__ */ Jr(r.prefixPath, (i$1) => wt(i$1)).join(", "), t = r.alternation.idx === 0 ? "" : r.alternation.idx, n$1 = `Ambiguous Alternatives Detected: <${r.ambiguityIndices.join(" ,")}> in <OR${t}> inside <${r.topLevelRule.name}> Rule,
<${e$1}> may appears as a prefix path in all these alternatives.
`;
		return n$1 = n$1 + `See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`, n$1;
	},
	buildEmptyRepetitionError(r) {
		let e$1 = /* @__PURE__ */ We(r.repetition);
		return r.repetition.idx !== 0 && (e$1 += r.repetition.idx), `The repetition <${e$1}> within Rule <${r.topLevelRule.name}> can never consume any tokens.
This could lead to an infinite loop.`;
	},
	buildTokenNameError(r) {
		return "deprecated";
	},
	buildEmptyAlternationError(r) {
		return `Ambiguous empty alternative: <${r.emptyChoiceIdx + 1}> in <OR${r.alternation.idx}> inside <${r.topLevelRule.name}> Rule.
Only the last alternative may be an empty alternative.`;
	},
	buildTooManyAlternativesError(r) {
		return `An Alternation cannot have more than 256 alternatives:
<OR${r.alternation.idx}> inside <${r.topLevelRule.name}> Rule.
 has ${r.alternation.definition.length + 1} alternatives.`;
	},
	buildLeftRecursionError(r) {
		let e$1 = r.topLevelRule.name, t = /* @__PURE__ */ Jr(r.leftRecursionPath, (s$1) => s$1.name), n$1 = `${e$1} --> ${t.concat([e$1]).join(" --> ")}`;
		return `Left Recursion found in grammar.
rule: <${e$1}> can be invoked from itself (directly or indirectly)
without consuming any Tokens. The grammar path that causes this is: 
 ${n$1}
 To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`;
	},
	buildInvalidRuleNameError(r) {
		return "deprecated";
	},
	buildDuplicateRuleNameError(r) {
		let e$1;
		return r.topLevelRule instanceof Me ? e$1 = r.topLevelRule.name : e$1 = r.topLevelRule, `Duplicate definition, rule: ->${e$1}<- is already defined in the grammar: ->${r.grammarName}<-`;
	}
};
function Kc(r, e$1) {
	let t = new ml(r, e$1);
	return t.resolveRefs(), t.errors;
}
m(Kc, "resolveGrammar");
var ml = class extends De$1 {
	static {
		m(this, "GastRefResolverVisitor");
	}
	constructor(e$1, t) {
		super(), this.nameToTopRule = e$1, this.errMsgProvider = t, this.errors = [];
	}
	resolveRefs() {
		Zr(/* @__PURE__ */ Xr(this.nameToTopRule), (e$1) => {
			this.currTopLevel = e$1, e$1.accept(this);
		});
	}
	visitNonTerminal(e$1) {
		let t = this.nameToTopRule[e$1.nonTerminalName];
		if (t) e$1.referencedRule = t;
		else {
			let n$1 = /* @__PURE__ */ this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel, e$1);
			this.errors.push({
				message: n$1,
				type: ye.UNRESOLVED_SUBRULE_REF,
				ruleName: this.currTopLevel.name,
				unresolvedRefName: e$1.nonTerminalName
			});
		}
	}
};
var gl = class extends Nt {
	static {
		m(this, "AbstractNextPossibleTokensWalker");
	}
	constructor(e$1, t) {
		super(), this.topProd = e$1, this.path = t, this.possibleTokTypes = [], this.nextProductionName = "", this.nextProductionOccurrence = 0, this.found = !1, this.isAtEndOfPath = !1;
	}
	startWalking() {
		if (this.found = !1, this.path.ruleStack[0] !== this.topProd.name) throw Error("The path does not start with the walker's top Rule!");
		return this.ruleStack = /* @__PURE__ */ _f(this.path.ruleStack).reverse(), this.occurrenceStack = /* @__PURE__ */ _f(this.path.occurrenceStack).reverse(), this.ruleStack.pop(), this.occurrenceStack.pop(), this.updateExpectedNext(), this.walk(this.topProd), this.possibleTokTypes;
	}
	walk(e$1, t = []) {
		this.found || super.walk(e$1, t);
	}
	walkProdRef(e$1, t, n$1) {
		if (e$1.referencedRule.name === this.nextProductionName && e$1.idx === this.nextProductionOccurrence) {
			let i$1 = /* @__PURE__ */ t.concat(n$1);
			this.updateExpectedNext(), this.walk(e$1.referencedRule, i$1);
		}
	}
	updateExpectedNext() {
		Cr(this.ruleStack) ? (this.nextProductionName = "", this.nextProductionOccurrence = 0, this.isAtEndOfPath = !0) : (this.nextProductionName = /* @__PURE__ */ this.ruleStack.pop(), this.nextProductionOccurrence = /* @__PURE__ */ this.occurrenceStack.pop());
	}
}, Js = class extends gl {
	static {
		m(this, "NextAfterTokenWalker");
	}
	constructor(e$1, t) {
		super(e$1, t), this.path = t, this.nextTerminalName = "", this.nextTerminalOccurrence = 0, this.nextTerminalName = this.path.lastTok.name, this.nextTerminalOccurrence = this.path.lastTokOccurrence;
	}
	walkTerminal(e$1, t, n$1) {
		if (this.isAtEndOfPath && e$1.terminalType.name === this.nextTerminalName && e$1.idx === this.nextTerminalOccurrence && !this.found) {
			let s$1 = new J({ definition: /* @__PURE__ */ t.concat(n$1) });
			this.possibleTokTypes = /* @__PURE__ */ cr(s$1), this.found = !0;
		}
	}
}, Nn = class extends Nt {
	static {
		m(this, "AbstractNextTerminalAfterProductionWalker");
	}
	constructor(e$1, t) {
		super(), this.topRule = e$1, this.occurrence = t, this.result = {
			token: void 0,
			occurrence: void 0,
			isEndOfRule: void 0
		};
	}
	startWalking() {
		return this.walk(this.topRule), this.result;
	}
}, Qs = class extends Nn {
	static {
		m(this, "NextTerminalAfterManyWalker");
	}
	walkMany(e$1, t, n$1) {
		if (e$1.idx === this.occurrence) {
			let i$1 = /* @__PURE__ */ De(/* @__PURE__ */ t.concat(n$1));
			this.result.isEndOfRule = i$1 === void 0, i$1 instanceof D && (this.result.token = i$1.terminalType, this.result.occurrence = i$1.idx);
		} else super.walkMany(e$1, t, n$1);
	}
}, $i = class extends Nn {
	static {
		m(this, "NextTerminalAfterManySepWalker");
	}
	walkManySep(e$1, t, n$1) {
		if (e$1.idx === this.occurrence) {
			let i$1 = /* @__PURE__ */ De(/* @__PURE__ */ t.concat(n$1));
			this.result.isEndOfRule = i$1 === void 0, i$1 instanceof D && (this.result.token = i$1.terminalType, this.result.occurrence = i$1.idx);
		} else super.walkManySep(e$1, t, n$1);
	}
}, Zs = class extends Nn {
	static {
		m(this, "NextTerminalAfterAtLeastOneWalker");
	}
	walkAtLeastOne(e$1, t, n$1) {
		if (e$1.idx === this.occurrence) {
			let i$1 = /* @__PURE__ */ De(/* @__PURE__ */ t.concat(n$1));
			this.result.isEndOfRule = i$1 === void 0, i$1 instanceof D && (this.result.token = i$1.terminalType, this.result.occurrence = i$1.idx);
		} else super.walkAtLeastOne(e$1, t, n$1);
	}
}, Ii = class extends Nn {
	static {
		m(this, "NextTerminalAfterAtLeastOneSepWalker");
	}
	walkAtLeastOneSep(e$1, t, n$1) {
		if (e$1.idx === this.occurrence) {
			let i$1 = /* @__PURE__ */ De(/* @__PURE__ */ t.concat(n$1));
			this.result.isEndOfRule = i$1 === void 0, i$1 instanceof D && (this.result.token = i$1.terminalType, this.result.occurrence = i$1.idx);
		} else super.walkAtLeastOneSep(e$1, t, n$1);
	}
};
function ea(r, e$1, t = []) {
	t = /* @__PURE__ */ _f(t);
	let n$1 = [], i$1 = 0;
	function s$1(l$2) {
		return l$2.concat(/* @__PURE__ */ Mi(r, i$1 + 1));
	}
	m(s$1, "remainingPathWith");
	function o$1(l$2) {
		let u$2 = /* @__PURE__ */ ea(/* @__PURE__ */ s$1(l$2), e$1, t);
		return n$1.concat(u$2);
	}
	for (m(o$1, "getAlternativesForProd"); t.length < e$1 && i$1 < r.length;) {
		let l$2 = r[i$1];
		if (l$2 instanceof J) return o$1(l$2.definition);
		if (l$2 instanceof H) return o$1(l$2.definition);
		if (l$2 instanceof z) n$1 = /* @__PURE__ */ o$1(l$2.definition);
		else if (l$2 instanceof Q) {
			let u$2 = /* @__PURE__ */ l$2.definition.concat([new G({ definition: l$2.definition })]);
			return o$1(u$2);
		} else if (l$2 instanceof Z) {
			let u$2 = [new J({ definition: l$2.definition }), new G({ definition: /* @__PURE__ */ [new D({ terminalType: l$2.separator })].concat(l$2.definition) })];
			return o$1(u$2);
		} else if (l$2 instanceof q$1) {
			let u$2 = /* @__PURE__ */ l$2.definition.concat([new G({ definition: /* @__PURE__ */ [new D({ terminalType: l$2.separator })].concat(l$2.definition) })]);
			n$1 = /* @__PURE__ */ o$1(u$2);
		} else if (l$2 instanceof G) {
			let u$2 = /* @__PURE__ */ l$2.definition.concat([new G({ definition: l$2.definition })]);
			n$1 = /* @__PURE__ */ o$1(u$2);
		} else {
			if (l$2 instanceof X) return Zr(l$2.definition, (u$2) => {
				Cr(u$2.definition) === !1 && (n$1 = /* @__PURE__ */ o$1(u$2.definition));
			}), n$1;
			if (l$2 instanceof D) t.push(l$2.terminalType);
			else throw Error("non exhaustive match");
		}
		i$1++;
	}
	return n$1.push({
		partialPath: t,
		suffixDef: /* @__PURE__ */ Mi(r, i$1)
	}), n$1;
}
m(ea, "possiblePathsFrom");
function ta(r, e$1, t, n$1) {
	let i$1 = "EXIT_NONE_TERMINAL", s$1 = [i$1], o$1 = "EXIT_ALTERNATIVE", l$2 = !1, u$2 = e$1.length, c$2 = u$2 - n$1 - 1, f$1 = [], d$1 = [];
	for (d$1.push({
		idx: -1,
		def: r,
		ruleStack: [],
		occurrenceStack: []
	}); !Cr(d$1);) {
		let h$4 = /* @__PURE__ */ d$1.pop();
		if (h$4 === o$1) {
			l$2 && Df(d$1).idx <= c$2 && d$1.pop();
			continue;
		}
		let p$2 = h$4.def, g$3 = h$4.idx, y$1 = h$4.ruleStack, v$3 = h$4.occurrenceStack;
		if (Cr(p$2)) continue;
		let x$2 = p$2[0];
		if (x$2 === i$1) {
			let A$3 = {
				idx: g$3,
				def: /* @__PURE__ */ Mi(p$2),
				ruleStack: /* @__PURE__ */ _i(y$1),
				occurrenceStack: /* @__PURE__ */ _i(v$3)
			};
			d$1.push(A$3);
		} else if (x$2 instanceof D) if (g$3 < u$2 - 1) {
			let A$3 = g$3 + 1, R$2 = e$1[A$3];
			if (t(R$2, x$2.terminalType)) {
				let P$1 = {
					idx: A$3,
					def: /* @__PURE__ */ Mi(p$2),
					ruleStack: y$1,
					occurrenceStack: v$3
				};
				d$1.push(P$1);
			}
		} else if (g$3 === u$2 - 1) f$1.push({
			nextTokenType: x$2.terminalType,
			nextTokenOccurrence: x$2.idx,
			ruleStack: y$1,
			occurrenceStack: v$3
		}), l$2 = !0;
		else throw Error("non exhaustive match");
		else if (x$2 instanceof H) {
			let A$3 = /* @__PURE__ */ _f(y$1);
			A$3.push(x$2.nonTerminalName);
			let R$2 = /* @__PURE__ */ _f(v$3);
			R$2.push(x$2.idx);
			let P$1 = {
				idx: g$3,
				def: /* @__PURE__ */ x$2.definition.concat(s$1, /* @__PURE__ */ Mi(p$2)),
				ruleStack: A$3,
				occurrenceStack: R$2
			};
			d$1.push(P$1);
		} else if (x$2 instanceof z) {
			let A$3 = {
				idx: g$3,
				def: /* @__PURE__ */ Mi(p$2),
				ruleStack: y$1,
				occurrenceStack: v$3
			};
			d$1.push(A$3), d$1.push(o$1);
			let R$2 = {
				idx: g$3,
				def: /* @__PURE__ */ x$2.definition.concat(/* @__PURE__ */ Mi(p$2)),
				ruleStack: y$1,
				occurrenceStack: v$3
			};
			d$1.push(R$2);
		} else if (x$2 instanceof Q) {
			let A$3 = new G({
				definition: x$2.definition,
				idx: x$2.idx
			}), P$1 = {
				idx: g$3,
				def: /* @__PURE__ */ x$2.definition.concat([A$3], /* @__PURE__ */ Mi(p$2)),
				ruleStack: y$1,
				occurrenceStack: v$3
			};
			d$1.push(P$1);
		} else if (x$2 instanceof Z) {
			let A$3 = new D({ terminalType: x$2.separator }), R$2 = new G({
				definition: /* @__PURE__ */ [A$3].concat(x$2.definition),
				idx: x$2.idx
			}), b$1 = {
				idx: g$3,
				def: /* @__PURE__ */ x$2.definition.concat([R$2], /* @__PURE__ */ Mi(p$2)),
				ruleStack: y$1,
				occurrenceStack: v$3
			};
			d$1.push(b$1);
		} else if (x$2 instanceof q$1) {
			let A$3 = {
				idx: g$3,
				def: /* @__PURE__ */ Mi(p$2),
				ruleStack: y$1,
				occurrenceStack: v$3
			};
			d$1.push(A$3), d$1.push(o$1);
			let R$2 = new D({ terminalType: x$2.separator }), P$1 = new G({
				definition: /* @__PURE__ */ [R$2].concat(x$2.definition),
				idx: x$2.idx
			}), Te$2 = {
				idx: g$3,
				def: /* @__PURE__ */ x$2.definition.concat([P$1], /* @__PURE__ */ Mi(p$2)),
				ruleStack: y$1,
				occurrenceStack: v$3
			};
			d$1.push(Te$2);
		} else if (x$2 instanceof G) {
			let A$3 = {
				idx: g$3,
				def: /* @__PURE__ */ Mi(p$2),
				ruleStack: y$1,
				occurrenceStack: v$3
			};
			d$1.push(A$3), d$1.push(o$1);
			let R$2 = new G({
				definition: x$2.definition,
				idx: x$2.idx
			}), b$1 = {
				idx: g$3,
				def: /* @__PURE__ */ x$2.definition.concat([R$2], /* @__PURE__ */ Mi(p$2)),
				ruleStack: y$1,
				occurrenceStack: v$3
			};
			d$1.push(b$1);
		} else if (x$2 instanceof X) for (let A$3 = x$2.definition.length - 1; A$3 >= 0; A$3--) {
			let R$2 = x$2.definition[A$3], P$1 = {
				idx: g$3,
				def: /* @__PURE__ */ R$2.definition.concat(/* @__PURE__ */ Mi(p$2)),
				ruleStack: y$1,
				occurrenceStack: v$3
			};
			d$1.push(P$1), d$1.push(o$1);
		}
		else if (x$2 instanceof J) d$1.push({
			idx: g$3,
			def: /* @__PURE__ */ x$2.definition.concat(/* @__PURE__ */ Mi(p$2)),
			ruleStack: y$1,
			occurrenceStack: v$3
		});
		else if (x$2 instanceof Me) d$1.push(/* @__PURE__ */ Wp(x$2, g$3, y$1, v$3));
		else throw Error("non exhaustive match");
	}
	return f$1;
}
m(ta, "nextPossibleTokensAfter");
function Wp(r, e$1, t, n$1) {
	let i$1 = /* @__PURE__ */ _f(t);
	i$1.push(r.name);
	let s$1 = /* @__PURE__ */ _f(n$1);
	return s$1.push(1), {
		idx: e$1,
		def: r.definition,
		ruleStack: i$1,
		occurrenceStack: s$1
	};
}
m(Wp, "expandTopLevelRule");
var ae;
(function(r) {
	r[r.OPTION = 0] = "OPTION", r[r.REPETITION = 1] = "REPETITION", r[r.REPETITION_MANDATORY = 2] = "REPETITION_MANDATORY", r[r.REPETITION_MANDATORY_WITH_SEPARATOR = 3] = "REPETITION_MANDATORY_WITH_SEPARATOR", r[r.REPETITION_WITH_SEPARATOR = 4] = "REPETITION_WITH_SEPARATOR", r[r.ALTERNATION = 5] = "ALTERNATION";
})(ae || (ae = {}));
function Ni(r) {
	if (r instanceof z || r === "Option") return ae.OPTION;
	if (r instanceof G || r === "Repetition") return ae.REPETITION;
	if (r instanceof Q || r === "RepetitionMandatory") return ae.REPETITION_MANDATORY;
	if (r instanceof Z || r === "RepetitionMandatoryWithSeparator") return ae.REPETITION_MANDATORY_WITH_SEPARATOR;
	if (r instanceof q$1 || r === "RepetitionWithSeparator") return ae.REPETITION_WITH_SEPARATOR;
	if (r instanceof X || r === "Alternation") return ae.ALTERNATION;
	throw Error("non exhaustive match");
}
m(Ni, "getProdType");
function na(r) {
	let { occurrence: e$1, rule: t, prodType: n$1, maxLookahead: i$1 } = r, s$1 = /* @__PURE__ */ Ni(n$1);
	return s$1 === ae.ALTERNATION ? Cn(e$1, t, i$1) : Sn(e$1, t, s$1, i$1);
}
m(na, "getLookaheadPaths");
function jc(r, e$1, t, n$1, i$1, s$1) {
	let o$1 = /* @__PURE__ */ Cn(r, e$1, t), l$2 = Jc(o$1) ? $n : Ct;
	return s$1(o$1, n$1, l$2, i$1);
}
m(jc, "buildLookaheadFuncForOr");
function Hc(r, e$1, t, n$1, i$1, s$1) {
	let o$1 = /* @__PURE__ */ Sn(r, e$1, i$1, t), l$2 = Jc(o$1) ? $n : Ct;
	return s$1(o$1[0], l$2, n$1);
}
m(Hc, "buildLookaheadFuncForOptionalProd");
function zc(r, e$1, t, n$1) {
	let i$1 = r.length, s$1 = /* @__PURE__ */ Ui(r, (o$1) => Ui(o$1, (l$2) => l$2.length === 1));
	if (e$1) return function(o$1) {
		let l$2 = /* @__PURE__ */ Jr(o$1, (u$2) => u$2.GATE);
		for (let u$2 = 0; u$2 < i$1; u$2++) {
			let c$2 = r[u$2], f$1 = c$2.length, d$1 = l$2[u$2];
			if (!(d$1 !== void 0 && d$1.call(this) === !1)) e: for (let h$4 = 0; h$4 < f$1; h$4++) {
				let p$2 = c$2[h$4], g$3 = p$2.length;
				for (let y$1 = 0; y$1 < g$3; y$1++) {
					let v$3 = /* @__PURE__ */ this.LA(y$1 + 1);
					if (t(v$3, p$2[y$1]) === !1) continue e;
				}
				return u$2;
			}
		}
	};
	if (s$1 && !n$1) {
		let l$2 = /* @__PURE__ */ Rn(/* @__PURE__ */ Jr(r, (u$2) => Qr(u$2)), (u$2, c$2, f$1) => (Zr(c$2, (d$1) => {
			fm(u$2, d$1.tokenTypeIdx) || (u$2[d$1.tokenTypeIdx] = f$1), Zr(d$1.categoryMatches, (h$4) => {
				fm(u$2, h$4) || (u$2[h$4] = f$1);
			});
		}), u$2), {});
		return function() {
			return l$2[(/* @__PURE__ */ this.LA(1)).tokenTypeIdx];
		};
	} else return function() {
		for (let o$1 = 0; o$1 < i$1; o$1++) {
			let l$2 = r[o$1], u$2 = l$2.length;
			e: for (let c$2 = 0; c$2 < u$2; c$2++) {
				let f$1 = l$2[c$2], d$1 = f$1.length;
				for (let h$4 = 0; h$4 < d$1; h$4++) {
					let p$2 = /* @__PURE__ */ this.LA(h$4 + 1);
					if (t(p$2, f$1[h$4]) === !1) continue e;
				}
				return o$1;
			}
		}
	};
}
m(zc, "buildAlternativesLookAheadFunc");
function qc(r, e$1, t) {
	let n$1 = /* @__PURE__ */ Ui(r, (s$1) => s$1.length === 1), i$1 = r.length;
	if (n$1 && !t) {
		let s$1 = /* @__PURE__ */ Qr(r);
		if (s$1.length === 1 && Cr(s$1[0].categoryMatches)) {
			let l$2 = s$1[0].tokenTypeIdx;
			return function() {
				return this.LA(1).tokenTypeIdx === l$2;
			};
		} else {
			let o$1 = /* @__PURE__ */ Rn(s$1, (l$2, u$2, c$2) => (l$2[u$2.tokenTypeIdx] = !0, Zr(u$2.categoryMatches, (f$1) => {
				l$2[f$1] = !0;
			}), l$2), []);
			return function() {
				return o$1[(/* @__PURE__ */ this.LA(1)).tokenTypeIdx] === !0;
			};
		}
	} else return function() {
		e: for (let s$1 = 0; s$1 < i$1; s$1++) {
			let o$1 = r[s$1], l$2 = o$1.length;
			for (let u$2 = 0; u$2 < l$2; u$2++) {
				let c$2 = /* @__PURE__ */ this.LA(u$2 + 1);
				if (e$1(c$2, o$1[u$2]) === !1) continue e;
			}
			return !0;
		}
		return !1;
	};
}
m(qc, "buildSingleAlternativeLookaheadFunction");
var Tl = class extends Nt {
	static {
		m(this, "RestDefinitionFinderWalker");
	}
	constructor(e$1, t, n$1) {
		super(), this.topProd = e$1, this.targetOccurrence = t, this.targetProdType = n$1;
	}
	startWalking() {
		return this.walk(this.topProd), this.restDef;
	}
	checkIsTarget(e$1, t, n$1, i$1) {
		return e$1.idx === this.targetOccurrence && this.targetProdType === t ? (this.restDef = /* @__PURE__ */ n$1.concat(i$1), !0) : !1;
	}
	walkOption(e$1, t, n$1) {
		this.checkIsTarget(e$1, ae.OPTION, t, n$1) || super.walkOption(e$1, t, n$1);
	}
	walkAtLeastOne(e$1, t, n$1) {
		this.checkIsTarget(e$1, ae.REPETITION_MANDATORY, t, n$1) || super.walkOption(e$1, t, n$1);
	}
	walkAtLeastOneSep(e$1, t, n$1) {
		this.checkIsTarget(e$1, ae.REPETITION_MANDATORY_WITH_SEPARATOR, t, n$1) || super.walkOption(e$1, t, n$1);
	}
	walkMany(e$1, t, n$1) {
		this.checkIsTarget(e$1, ae.REPETITION, t, n$1) || super.walkOption(e$1, t, n$1);
	}
	walkManySep(e$1, t, n$1) {
		this.checkIsTarget(e$1, ae.REPETITION_WITH_SEPARATOR, t, n$1) || super.walkOption(e$1, t, n$1);
	}
}, ra = class extends De$1 {
	static {
		m(this, "InsideDefinitionFinderVisitor");
	}
	constructor(e$1, t, n$1) {
		super(), this.targetOccurrence = e$1, this.targetProdType = t, this.targetRef = n$1, this.result = [];
	}
	checkIsTarget(e$1, t) {
		e$1.idx === this.targetOccurrence && this.targetProdType === t && (this.targetRef === void 0 || e$1 === this.targetRef) && (this.result = e$1.definition);
	}
	visitOption(e$1) {
		this.checkIsTarget(e$1, ae.OPTION);
	}
	visitRepetition(e$1) {
		this.checkIsTarget(e$1, ae.REPETITION);
	}
	visitRepetitionMandatory(e$1) {
		this.checkIsTarget(e$1, ae.REPETITION_MANDATORY);
	}
	visitRepetitionMandatoryWithSeparator(e$1) {
		this.checkIsTarget(e$1, ae.REPETITION_MANDATORY_WITH_SEPARATOR);
	}
	visitRepetitionWithSeparator(e$1) {
		this.checkIsTarget(e$1, ae.REPETITION_WITH_SEPARATOR);
	}
	visitAlternation(e$1) {
		this.checkIsTarget(e$1, ae.ALTERNATION);
	}
};
function Vc(r) {
	let e$1 = new Array(r);
	for (let t = 0; t < r; t++) e$1[t] = [];
	return e$1;
}
m(Vc, "initializeArrayOfArrays");
function yl(r) {
	let e$1 = [""];
	for (let t = 0; t < r.length; t++) {
		let n$1 = r[t], i$1 = [];
		for (let s$1 = 0; s$1 < e$1.length; s$1++) {
			let o$1 = e$1[s$1];
			i$1.push(o$1 + "_" + n$1.tokenTypeIdx);
			for (let l$2 = 0; l$2 < n$1.categoryMatches.length; l$2++) {
				let u$2 = "_" + n$1.categoryMatches[l$2];
				i$1.push(o$1 + u$2);
			}
		}
		e$1 = i$1;
	}
	return e$1;
}
m(yl, "pathToHashKeys");
function Kp(r, e$1, t) {
	for (let n$1 = 0; n$1 < r.length; n$1++) {
		if (n$1 === t) continue;
		let i$1 = r[n$1];
		for (let s$1 = 0; s$1 < e$1.length; s$1++) {
			let o$1 = e$1[s$1];
			if (i$1[o$1] === !0) return !1;
		}
	}
	return !0;
}
m(Kp, "isUniquePrefixHash");
function Xc(r, e$1) {
	let t = /* @__PURE__ */ Jr(r, (o$1) => ea([o$1], 1)), n$1 = /* @__PURE__ */ Vc(t.length), i$1 = /* @__PURE__ */ Jr(t, (o$1) => {
		let l$2 = {};
		return Zr(o$1, (u$2) => {
			let c$2 = /* @__PURE__ */ yl(u$2.partialPath);
			Zr(c$2, (f$1) => {
				l$2[f$1] = !0;
			});
		}), l$2;
	}), s$1 = t;
	for (let o$1 = 1; o$1 <= e$1; o$1++) {
		let l$2 = s$1;
		s$1 = /* @__PURE__ */ Vc(l$2.length);
		for (let u$2 = 0; u$2 < l$2.length; u$2++) {
			let c$2 = l$2[u$2];
			for (let f$1 = 0; f$1 < c$2.length; f$1++) {
				let d$1 = c$2[f$1].partialPath, h$4 = c$2[f$1].suffixDef, p$2 = /* @__PURE__ */ yl(d$1);
				if (Kp(i$1, p$2, u$2) || Cr(h$4) || d$1.length === e$1) {
					let y$1 = n$1[u$2];
					if (ia(y$1, d$1) === !1) {
						y$1.push(d$1);
						for (let v$3 = 0; v$3 < p$2.length; v$3++) {
							let x$2 = p$2[v$3];
							i$1[u$2][x$2] = !0;
						}
					}
				} else {
					let y$1 = /* @__PURE__ */ ea(h$4, o$1 + 1, d$1);
					s$1[u$2] = /* @__PURE__ */ s$1[u$2].concat(y$1), Zr(y$1, (v$3) => {
						let x$2 = /* @__PURE__ */ yl(v$3.partialPath);
						Zr(x$2, (A$3) => {
							i$1[u$2][A$3] = !0;
						});
					});
				}
			}
		}
	}
	return n$1;
}
m(Xc, "lookAheadSequenceFromAlternatives");
function Cn(r, e$1, t, n$1) {
	let i$1 = new ra(r, ae.ALTERNATION, n$1);
	return e$1.accept(i$1), Xc(i$1.result, t);
}
m(Cn, "getLookaheadPathsForOr");
function Sn(r, e$1, t, n$1) {
	let i$1 = new ra(r, t);
	e$1.accept(i$1);
	let s$1 = i$1.result, l$2 = /* @__PURE__ */ new Tl(e$1, r, t).startWalking(), u$2 = new J({ definition: s$1 }), c$2 = new J({ definition: l$2 });
	return Xc([u$2, c$2], n$1);
}
m(Sn, "getLookaheadPathsForOptionalProd");
function ia(r, e$1) {
	e: for (let t = 0; t < r.length; t++) {
		let n$1 = r[t];
		if (n$1.length === e$1.length) {
			for (let i$1 = 0; i$1 < n$1.length; i$1++) {
				let s$1 = e$1[i$1], o$1 = n$1[i$1];
				if ((s$1 === o$1 || o$1.categoryMatchesMap[s$1.tokenTypeIdx] !== void 0) === !1) continue e;
			}
			return !0;
		}
	}
	return !1;
}
m(ia, "containsPath");
function Yc(r, e$1) {
	return r.length < e$1.length && Ui(r, (t, n$1) => {
		let i$1 = e$1[n$1];
		return t === i$1 || i$1.categoryMatchesMap[t.tokenTypeIdx];
	});
}
m(Yc, "isStrictPrefixOfPath");
function Jc(r) {
	return Ui(r, (e$1) => Ui(e$1, (t) => Ui(t, (n$1) => Cr(n$1.categoryMatches))));
}
m(Jc, "areTokenCategoriesNotUsed");
function Qc(r) {
	let e$1 = /* @__PURE__ */ r.lookaheadStrategy.validate({
		rules: r.rules,
		tokenTypes: r.tokenTypes,
		grammarName: r.grammarName
	});
	return Jr(e$1, (t) => Object.assign({ type: ye.CUSTOM_LOOKAHEAD_VALIDATION }, t));
}
m(Qc, "validateLookahead");
function Zc(r, e$1, t, n$1) {
	let i$1 = /* @__PURE__ */ zi(r, (u$2) => Vp(u$2, t)), s$1 = /* @__PURE__ */ Yp(r, e$1, t), o$1 = /* @__PURE__ */ zi(r, (u$2) => zp(u$2, t)), l$2 = /* @__PURE__ */ zi(r, (u$2) => Hp(u$2, r, n$1, t));
	return i$1.concat(s$1, o$1, l$2);
}
m(Zc, "validateGrammar");
function Vp(r, e$1) {
	let t = new Rl();
	r.accept(t);
	let n$1 = t.allProductions;
	return Jr(/* @__PURE__ */ Xr(/* @__PURE__ */ Tm(/* @__PURE__ */ Vi(n$1, jp), (l$2) => l$2.length > 1)), (l$2) => {
		let u$2 = /* @__PURE__ */ De(l$2), c$2 = /* @__PURE__ */ e$1.buildDuplicateFoundError(r, l$2), f$1 = /* @__PURE__ */ We(u$2), d$1 = {
			message: c$2,
			type: ye.DUPLICATE_PRODUCTIONS,
			ruleName: r.name,
			dslName: f$1,
			occurrence: u$2.idx
		}, h$4 = /* @__PURE__ */ ef(u$2);
		return h$4 && (d$1.parameter = h$4), d$1;
	});
}
m(Vp, "validateDuplicateProductions");
function jp(r) {
	return `${We(r)}_#_${r.idx}_#_${ef(r)}`;
}
m(jp, "identifyProductionForDuplicates");
function ef(r) {
	return r instanceof D ? r.terminalType.name : r instanceof H ? r.nonTerminalName : "";
}
m(ef, "getExtraProductionArgument");
var Rl = class extends De$1 {
	static {
		m(this, "OccurrenceValidationCollector");
	}
	constructor() {
		super(...arguments), this.allProductions = [];
	}
	visitNonTerminal(e$1) {
		this.allProductions.push(e$1);
	}
	visitOption(e$1) {
		this.allProductions.push(e$1);
	}
	visitRepetitionWithSeparator(e$1) {
		this.allProductions.push(e$1);
	}
	visitRepetitionMandatory(e$1) {
		this.allProductions.push(e$1);
	}
	visitRepetitionMandatoryWithSeparator(e$1) {
		this.allProductions.push(e$1);
	}
	visitRepetition(e$1) {
		this.allProductions.push(e$1);
	}
	visitAlternation(e$1) {
		this.allProductions.push(e$1);
	}
	visitTerminal(e$1) {
		this.allProductions.push(e$1);
	}
};
function Hp(r, e$1, t, n$1) {
	let i$1 = [];
	if (Rn(e$1, (o$1, l$2) => l$2.name === r.name ? o$1 + 1 : o$1, 0) > 1) {
		let o$1 = /* @__PURE__ */ n$1.buildDuplicateRuleNameError({
			topLevelRule: r,
			grammarName: t
		});
		i$1.push({
			message: o$1,
			type: ye.DUPLICATE_RULE_NAME,
			ruleName: r.name
		});
	}
	return i$1;
}
m(Hp, "validateRuleDoesNotAlreadyExist");
function tf(r, e$1, t) {
	let n$1 = [], i$1;
	return pm(e$1, r) || (i$1 = `Invalid rule override, rule: ->${r}<- cannot be overridden in the grammar: ->${t}<-as it is not defined in any of the super grammars `, n$1.push({
		message: i$1,
		type: ye.INVALID_RULE_OVERRIDE,
		ruleName: r
	})), n$1;
}
m(tf, "validateRuleIsOverridden");
function El(r, e$1, t, n$1 = []) {
	let i$1 = [], s$1 = /* @__PURE__ */ sa(e$1.definition);
	if (Cr(s$1)) return [];
	{
		let o$1 = r.name;
		pm(s$1, r) && i$1.push({
			message: /* @__PURE__ */ t.buildLeftRecursionError({
				topLevelRule: r,
				leftRecursionPath: n$1
			}),
			type: ye.LEFT_RECURSION,
			ruleName: o$1
		});
		let c$2 = /* @__PURE__ */ zi(/* @__PURE__ */ Ri(s$1, /* @__PURE__ */ n$1.concat([r])), (f$1) => {
			let d$1 = /* @__PURE__ */ _f(n$1);
			return d$1.push(f$1), El(r, f$1, t, d$1);
		});
		return i$1.concat(c$2);
	}
}
m(El, "validateNoLeftRecursion");
function sa(r) {
	let e$1 = [];
	if (Cr(r)) return e$1;
	let t = /* @__PURE__ */ De(r);
	if (t instanceof H) e$1.push(t.referencedRule);
	else if (t instanceof J || t instanceof z || t instanceof Q || t instanceof Z || t instanceof q$1 || t instanceof G) e$1 = /* @__PURE__ */ e$1.concat(/* @__PURE__ */ sa(t.definition));
	else if (t instanceof X) e$1 = /* @__PURE__ */ Qr(/* @__PURE__ */ Jr(t.definition, (s$1) => sa(s$1.definition)));
	else if (!(t instanceof D)) throw Error("non exhaustive match");
	let n$1 = /* @__PURE__ */ ur(t), i$1 = r.length > 1;
	if (n$1 && i$1) {
		let s$1 = /* @__PURE__ */ Mi(r);
		return e$1.concat(/* @__PURE__ */ sa(s$1));
	} else return e$1;
}
m(sa, "getFirstNoneTerminal");
var Ci = class extends De$1 {
	static {
		m(this, "OrCollector");
	}
	constructor() {
		super(...arguments), this.alternations = [];
	}
	visitAlternation(e$1) {
		this.alternations.push(e$1);
	}
};
function rf(r, e$1) {
	let t = new Ci();
	r.accept(t);
	let n$1 = t.alternations;
	return zi(n$1, (s$1) => {
		let o$1 = /* @__PURE__ */ _i(s$1.definition);
		return zi(o$1, (l$2, u$2) => {
			return Cr(/* @__PURE__ */ ta([l$2], [], Ct, 1)) ? [{
				message: /* @__PURE__ */ e$1.buildEmptyAlternationError({
					topLevelRule: r,
					alternation: s$1,
					emptyChoiceIdx: u$2
				}),
				type: ye.NONE_LAST_EMPTY_ALT,
				ruleName: r.name,
				occurrence: s$1.idx,
				alternative: u$2 + 1
			}] : [];
		});
	});
}
m(rf, "validateEmptyOrAlternative");
function nf(r, e$1, t) {
	let n$1 = new Ci();
	r.accept(n$1);
	let i$1 = n$1.alternations;
	return i$1 = /* @__PURE__ */ Qm(i$1, (o$1) => o$1.ignoreAmbiguities === !0), zi(i$1, (o$1) => {
		let l$2 = o$1.idx, u$2 = o$1.maxLookahead || e$1, c$2 = /* @__PURE__ */ Cn(l$2, r, u$2, o$1), f$1 = /* @__PURE__ */ qp(c$2, o$1, r, t), d$1 = /* @__PURE__ */ Xp(c$2, o$1, r, t);
		return f$1.concat(d$1);
	});
}
m(nf, "validateAmbiguousAlternationAlternatives");
var xl = class extends De$1 {
	static {
		m(this, "RepetitionCollector");
	}
	constructor() {
		super(...arguments), this.allProductions = [];
	}
	visitRepetitionWithSeparator(e$1) {
		this.allProductions.push(e$1);
	}
	visitRepetitionMandatory(e$1) {
		this.allProductions.push(e$1);
	}
	visitRepetitionMandatoryWithSeparator(e$1) {
		this.allProductions.push(e$1);
	}
	visitRepetition(e$1) {
		this.allProductions.push(e$1);
	}
};
function zp(r, e$1) {
	let t = new Ci();
	r.accept(t);
	let n$1 = t.alternations;
	return zi(n$1, (s$1) => s$1.definition.length > 255 ? [{
		message: /* @__PURE__ */ e$1.buildTooManyAlternativesError({
			topLevelRule: r,
			alternation: s$1
		}),
		type: ye.TOO_MANY_ALTS,
		ruleName: r.name,
		occurrence: s$1.idx
	}] : []);
}
m(zp, "validateTooManyAlts");
function sf(r, e$1, t) {
	let n$1 = [];
	return Zr(r, (i$1) => {
		let s$1 = new xl();
		i$1.accept(s$1);
		let o$1 = s$1.allProductions;
		Zr(o$1, (l$2) => {
			let u$2 = /* @__PURE__ */ Ni(l$2), c$2 = l$2.maxLookahead || e$1, f$1 = l$2.idx, h$4 = Sn(f$1, i$1, u$2, c$2)[0];
			if (Cr(/* @__PURE__ */ Qr(h$4))) {
				let p$2 = /* @__PURE__ */ t.buildEmptyRepetitionError({
					topLevelRule: i$1,
					repetition: l$2
				});
				n$1.push({
					message: p$2,
					type: ye.NO_NON_EMPTY_LOOKAHEAD,
					ruleName: i$1.name
				});
			}
		});
	}), n$1;
}
m(sf, "validateSomeNonEmptyLookaheadPath");
function qp(r, e$1, t, n$1) {
	let i$1 = [];
	return Jr(/* @__PURE__ */ Rn(r, (l$2, u$2, c$2) => (e$1.definition[c$2].ignoreAmbiguities === !0 || Zr(u$2, (f$1) => {
		let d$1 = [c$2];
		Zr(r, (h$4, p$2) => {
			c$2 !== p$2 && ia(h$4, f$1) && e$1.definition[p$2].ignoreAmbiguities !== !0 && d$1.push(p$2);
		}), d$1.length > 1 && !ia(i$1, f$1) && (i$1.push(f$1), l$2.push({
			alts: d$1,
			path: f$1
		}));
	}), l$2), []), (l$2) => {
		let u$2 = /* @__PURE__ */ Jr(l$2.alts, (f$1) => f$1 + 1);
		return {
			message: /* @__PURE__ */ n$1.buildAlternationAmbiguityError({
				topLevelRule: t,
				alternation: e$1,
				ambiguityIndices: u$2,
				prefixPath: l$2.path
			}),
			type: ye.AMBIGUOUS_ALTS,
			ruleName: t.name,
			occurrence: e$1.idx,
			alternatives: l$2.alts
		};
	});
}
m(qp, "checkAlternativesAmbiguities");
function Xp(r, e$1, t, n$1) {
	let i$1 = /* @__PURE__ */ Rn(r, (o$1, l$2, u$2) => {
		let c$2 = /* @__PURE__ */ Jr(l$2, (f$1) => ({
			idx: u$2,
			path: f$1
		}));
		return o$1.concat(c$2);
	}, []);
	return Ai(/* @__PURE__ */ zi(i$1, (o$1) => {
		if (e$1.definition[o$1.idx].ignoreAmbiguities === !0) return [];
		let u$2 = o$1.idx, c$2 = o$1.path;
		return Jr(/* @__PURE__ */ fn(i$1, (h$4) => e$1.definition[h$4.idx].ignoreAmbiguities !== !0 && h$4.idx < u$2 && Yc(h$4.path, c$2)), (h$4) => {
			let p$2 = [h$4.idx + 1, u$2 + 1], g$3 = e$1.idx === 0 ? "" : e$1.idx;
			return {
				message: /* @__PURE__ */ n$1.buildAlternationPrefixAmbiguityError({
					topLevelRule: t,
					alternation: e$1,
					ambiguityIndices: p$2,
					prefixPath: h$4.path
				}),
				type: ye.AMBIGUOUS_PREFIX_ALTS,
				ruleName: t.name,
				occurrence: g$3,
				alternatives: p$2
			};
		});
	}));
}
m(Xp, "checkPrefixAlternativesAmbiguities");
function Yp(r, e$1, t) {
	let n$1 = [], i$1 = /* @__PURE__ */ Jr(e$1, (s$1) => s$1.name);
	return Zr(r, (s$1) => {
		let o$1 = s$1.name;
		if (pm(i$1, o$1)) {
			let l$2 = /* @__PURE__ */ t.buildNamespaceConflictError(s$1);
			n$1.push({
				message: l$2,
				type: ye.CONFLICT_TOKENS_RULES_NAMESPACE,
				ruleName: o$1
			});
		}
	}), n$1;
}
m(Yp, "checkTerminalAndNoneTerminalsNameSpace");
function af(r) {
	let e$1 = /* @__PURE__ */ Nf(r, { errMsgProvider: Wc }), t = {};
	return Zr(r.rules, (n$1) => {
		t[n$1.name] = n$1;
	}), Kc(t, e$1.errMsgProvider);
}
m(af, "resolveGrammar");
function of(r) {
	return r = /* @__PURE__ */ Nf(r, { errMsgProvider: it }), Zc(r.rules, r.tokenTypes, r.errMsgProvider, r.grammarName);
}
m(of, "validateGrammar");
var lf = "MismatchedTokenException", uf = "NoViableAltException", cf = "EarlyExitException", ff = "NotAllInputParsedException", df = [
	lf,
	uf,
	cf,
	ff
];
Object.freeze(df);
function Wt(r) {
	return pm(df, r.name);
}
m(Wt, "isRecognitionException");
var wn = class extends Error {
	static {
		m(this, "RecognitionException");
	}
	constructor(e$1, t) {
		super(e$1), this.token = t, this.resyncedTokens = [], Object.setPrototypeOf(this, new.target.prototype), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
	}
}, dr = class extends wn {
	static {
		m(this, "MismatchedTokenException");
	}
	constructor(e$1, t, n$1) {
		super(e$1, t), this.previousToken = n$1, this.name = lf;
	}
}, Si = class extends wn {
	static {
		m(this, "NoViableAltException");
	}
	constructor(e$1, t, n$1) {
		super(e$1, t), this.previousToken = n$1, this.name = uf;
	}
}, wi = class extends wn {
	static {
		m(this, "NotAllInputParsedException");
	}
	constructor(e$1, t) {
		super(e$1, t), this.name = ff;
	}
}, _i$1 = class extends wn {
	static {
		m(this, "EarlyExitException");
	}
	constructor(e$1, t, n$1) {
		super(e$1, t), this.previousToken = n$1, this.name = cf;
	}
};
var Al = {}, kl = "InRuleRecoveryException", vl = class extends Error {
	static {
		m(this, "InRuleRecoveryException");
	}
	constructor(e$1) {
		super(e$1), this.name = kl;
	}
}, aa = class {
	static {
		m(this, "Recoverable");
	}
	initRecoverable(e$1) {
		this.firstAfterRepMap = {}, this.resyncFollows = {}, this.recoveryEnabled = fm(e$1, "recoveryEnabled") ? e$1.recoveryEnabled : Fe.recoveryEnabled, this.recoveryEnabled && (this.attemptInRepetitionRecovery = Jp);
	}
	getTokenToInsert(e$1) {
		let t = /* @__PURE__ */ _t(e$1, "", NaN, NaN, NaN, NaN, NaN, NaN);
		return t.isInsertedInRecovery = !0, t;
	}
	canTokenTypeBeInsertedInRecovery(e$1) {
		return !0;
	}
	canTokenTypeBeDeletedInRecovery(e$1) {
		return !0;
	}
	tryInRepetitionRecovery(e$1, t, n$1, i$1) {
		let s$1 = /* @__PURE__ */ this.findReSyncTokenType(), o$1 = /* @__PURE__ */ this.exportLexerState(), l$2 = [], u$2 = !1, c$2 = /* @__PURE__ */ this.LA(1), f$1 = /* @__PURE__ */ this.LA(1), d$1 = /* @__PURE__ */ m(() => {
			let h$4 = /* @__PURE__ */ this.LA(0), g$3 = new dr(/* @__PURE__ */ this.errorMessageProvider.buildMismatchTokenMessage({
				expected: i$1,
				actual: c$2,
				previous: h$4,
				ruleName: /* @__PURE__ */ this.getCurrRuleFullName()
			}), c$2, this.LA(0));
			g$3.resyncedTokens = /* @__PURE__ */ _i(l$2), this.SAVE_ERROR(g$3);
		}, "generateErrorMessage");
		for (; !u$2;) if (this.tokenMatcher(f$1, i$1)) {
			d$1();
			return;
		} else if (n$1.call(this)) {
			d$1(), e$1.apply(this, t);
			return;
		} else this.tokenMatcher(f$1, s$1) ? u$2 = !0 : (f$1 = /* @__PURE__ */ this.SKIP_TOKEN(), this.addToResyncTokens(f$1, l$2));
		this.importLexerState(o$1);
	}
	shouldInRepetitionRecoveryBeTried(e$1, t, n$1) {
		return !(n$1 === !1 || this.tokenMatcher(/* @__PURE__ */ this.LA(1), e$1) || this.isBackTracking() || this.canPerformInRuleRecovery(e$1, /* @__PURE__ */ this.getFollowsForInRuleRecovery(e$1, t)));
	}
	getFollowsForInRuleRecovery(e$1, t) {
		let n$1 = /* @__PURE__ */ this.getCurrentGrammarPath(e$1, t);
		return this.getNextPossibleTokenTypes(n$1);
	}
	tryInRuleRecovery(e$1, t) {
		if (this.canRecoverWithSingleTokenInsertion(e$1, t)) return this.getTokenToInsert(e$1);
		if (this.canRecoverWithSingleTokenDeletion(e$1)) {
			let n$1 = /* @__PURE__ */ this.SKIP_TOKEN();
			return this.consumeToken(), n$1;
		}
		throw new vl("sad sad panda");
	}
	canPerformInRuleRecovery(e$1, t) {
		return this.canRecoverWithSingleTokenInsertion(e$1, t) || this.canRecoverWithSingleTokenDeletion(e$1);
	}
	canRecoverWithSingleTokenInsertion(e$1, t) {
		if (!this.canTokenTypeBeInsertedInRecovery(e$1) || Cr(t)) return !1;
		let n$1 = /* @__PURE__ */ this.LA(1);
		return Ki(t, (s$1) => this.tokenMatcher(n$1, s$1)) !== void 0;
	}
	canRecoverWithSingleTokenDeletion(e$1) {
		return this.canTokenTypeBeDeletedInRecovery(e$1) ? this.tokenMatcher(/* @__PURE__ */ this.LA(2), e$1) : !1;
	}
	isInCurrentRuleReSyncSet(e$1) {
		let t = /* @__PURE__ */ this.getCurrFollowKey();
		return pm(/* @__PURE__ */ this.getFollowSetFromFollowKey(t), e$1);
	}
	findReSyncTokenType() {
		let e$1 = /* @__PURE__ */ this.flattenFollowSet(), t = /* @__PURE__ */ this.LA(1), n$1 = 2;
		for (;;) {
			let i$1 = /* @__PURE__ */ Ki(e$1, (s$1) => ki(t, s$1));
			if (i$1 !== void 0) return i$1;
			t = /* @__PURE__ */ this.LA(n$1), n$1++;
		}
	}
	getCurrFollowKey() {
		if (this.RULE_STACK.length === 1) return Al;
		let e$1 = /* @__PURE__ */ this.getLastExplicitRuleShortName(), t = /* @__PURE__ */ this.getLastExplicitRuleOccurrenceIndex(), n$1 = /* @__PURE__ */ this.getPreviousExplicitRuleShortName();
		return {
			ruleName: /* @__PURE__ */ this.shortRuleNameToFullName(e$1),
			idxInCallingRule: t,
			inRule: /* @__PURE__ */ this.shortRuleNameToFullName(n$1)
		};
	}
	buildFullFollowKeyStack() {
		let e$1 = this.RULE_STACK, t = this.RULE_OCCURRENCE_STACK;
		return Jr(e$1, (n$1, i$1) => i$1 === 0 ? Al : {
			ruleName: /* @__PURE__ */ this.shortRuleNameToFullName(n$1),
			idxInCallingRule: t[i$1],
			inRule: /* @__PURE__ */ this.shortRuleNameToFullName(e$1[i$1 - 1])
		});
	}
	flattenFollowSet() {
		return Qr(/* @__PURE__ */ Jr(/* @__PURE__ */ this.buildFullFollowKeyStack(), (t) => this.getFollowSetFromFollowKey(t)));
	}
	getFollowSetFromFollowKey(e$1) {
		if (e$1 === Al) return [qe];
		let t = e$1.ruleName + e$1.idxInCallingRule + js + e$1.inRule;
		return this.resyncFollows[t];
	}
	addToResyncTokens(e$1, t) {
		return this.tokenMatcher(e$1, qe) || t.push(e$1), t;
	}
	reSyncTo(e$1) {
		let t = [], n$1 = /* @__PURE__ */ this.LA(1);
		for (; this.tokenMatcher(n$1, e$1) === !1;) n$1 = /* @__PURE__ */ this.SKIP_TOKEN(), this.addToResyncTokens(n$1, t);
		return _i(t);
	}
	attemptInRepetitionRecovery(e$1, t, n$1, i$1, s$1, o$1, l$2) {}
	getCurrentGrammarPath(e$1, t) {
		let n$1 = /* @__PURE__ */ this.getHumanReadableRuleStack(), i$1 = /* @__PURE__ */ _f(this.RULE_OCCURRENCE_STACK);
		return {
			ruleStack: n$1,
			occurrenceStack: i$1,
			lastTok: e$1,
			lastTokOccurrence: t
		};
	}
	getHumanReadableRuleStack() {
		return Jr(this.RULE_STACK, (e$1) => this.shortRuleNameToFullName(e$1));
	}
};
function Jp(r, e$1, t, n$1, i$1, s$1, o$1) {
	let l$2 = /* @__PURE__ */ this.getKeyForAutomaticLookahead(n$1, i$1), u$2 = this.firstAfterRepMap[l$2];
	if (u$2 === void 0) {
		let h$4 = /* @__PURE__ */ this.getCurrRuleFullName(), p$2 = this.getGAstProductions()[h$4];
		u$2 = /* @__PURE__ */ new s$1(p$2, i$1).startWalking(), this.firstAfterRepMap[l$2] = u$2;
	}
	let c$2 = u$2.token, f$1 = u$2.occurrence, d$1 = u$2.isEndOfRule;
	this.RULE_STACK.length === 1 && d$1 && c$2 === void 0 && (c$2 = qe, f$1 = 1), !(c$2 === void 0 || f$1 === void 0) && this.shouldInRepetitionRecoveryBeTried(c$2, f$1, o$1) && this.tryInRepetitionRecovery(r, e$1, t, c$2);
}
m(Jp, "attemptInRepetitionRecovery");
function oa(r, e$1, t) {
	return t | e$1 | r;
}
m(oa, "getKeyForAutomaticLookahead");
var Ot = class {
	static {
		m(this, "LLkLookaheadStrategy");
	}
	constructor(e$1) {
		var t;
		this.maxLookahead = (t = e$1?.maxLookahead) !== null && t !== void 0 ? t : Fe.maxLookahead;
	}
	validate(e$1) {
		let t = /* @__PURE__ */ this.validateNoLeftRecursion(e$1.rules);
		if (Cr(t)) {
			let n$1 = /* @__PURE__ */ this.validateEmptyOrAlternatives(e$1.rules), i$1 = /* @__PURE__ */ this.validateAmbiguousAlternationAlternatives(e$1.rules, this.maxLookahead), s$1 = /* @__PURE__ */ this.validateSomeNonEmptyLookaheadPath(e$1.rules, this.maxLookahead);
			return [
				...t,
				...n$1,
				...i$1,
				...s$1
			];
		}
		return t;
	}
	validateNoLeftRecursion(e$1) {
		return zi(e$1, (t) => El(t, t, it));
	}
	validateEmptyOrAlternatives(e$1) {
		return zi(e$1, (t) => rf(t, it));
	}
	validateAmbiguousAlternationAlternatives(e$1, t) {
		return zi(e$1, (n$1) => nf(n$1, t, it));
	}
	validateSomeNonEmptyLookaheadPath(e$1, t) {
		return sf(e$1, t, it);
	}
	buildLookaheadForAlternation(e$1) {
		return jc(e$1.prodOccurrence, e$1.rule, e$1.maxLookahead, e$1.hasPredicates, e$1.dynamicTokensEnabled, zc);
	}
	buildLookaheadForOptional(e$1) {
		return Hc(e$1.prodOccurrence, e$1.rule, e$1.maxLookahead, e$1.dynamicTokensEnabled, /* @__PURE__ */ Ni(e$1.prodType), qc);
	}
};
var ua = class {
	static {
		m(this, "LooksAhead");
	}
	initLooksAhead(e$1) {
		this.dynamicTokensEnabled = fm(e$1, "dynamicTokensEnabled") ? e$1.dynamicTokensEnabled : Fe.dynamicTokensEnabled, this.maxLookahead = fm(e$1, "maxLookahead") ? e$1.maxLookahead : Fe.maxLookahead, this.lookaheadStrategy = fm(e$1, "lookaheadStrategy") ? e$1.lookaheadStrategy : new Ot({ maxLookahead: this.maxLookahead }), this.lookAheadFuncsCache = /* @__PURE__ */ new Map();
	}
	preComputeLookaheadFunctions(e$1) {
		Zr(e$1, (t) => {
			this.TRACE_INIT(`${t.name} Rule Lookahead`, () => {
				let { alternation: n$1, repetition: i$1, option: s$1, repetitionMandatory: o$1, repetitionMandatoryWithSeparator: l$2, repetitionWithSeparator: u$2 } = Qp(t);
				Zr(n$1, (c$2) => {
					let f$1 = c$2.idx === 0 ? "" : c$2.idx;
					this.TRACE_INIT(`${We(c$2)}${f$1}`, () => {
						let d$1 = /* @__PURE__ */ this.lookaheadStrategy.buildLookaheadForAlternation({
							prodOccurrence: c$2.idx,
							rule: t,
							maxLookahead: c$2.maxLookahead || this.maxLookahead,
							hasPredicates: c$2.hasPredicates,
							dynamicTokensEnabled: this.dynamicTokensEnabled
						}), h$4 = /* @__PURE__ */ oa(this.fullRuleNameToShort[t.name], 256, c$2.idx);
						this.setLaFuncCache(h$4, d$1);
					});
				}), Zr(i$1, (c$2) => {
					this.computeLookaheadFunc(t, c$2.idx, 768, "Repetition", c$2.maxLookahead, /* @__PURE__ */ We(c$2));
				}), Zr(s$1, (c$2) => {
					this.computeLookaheadFunc(t, c$2.idx, 512, "Option", c$2.maxLookahead, /* @__PURE__ */ We(c$2));
				}), Zr(o$1, (c$2) => {
					this.computeLookaheadFunc(t, c$2.idx, 1024, "RepetitionMandatory", c$2.maxLookahead, /* @__PURE__ */ We(c$2));
				}), Zr(l$2, (c$2) => {
					this.computeLookaheadFunc(t, c$2.idx, 1536, "RepetitionMandatoryWithSeparator", c$2.maxLookahead, /* @__PURE__ */ We(c$2));
				}), Zr(u$2, (c$2) => {
					this.computeLookaheadFunc(t, c$2.idx, 1280, "RepetitionWithSeparator", c$2.maxLookahead, /* @__PURE__ */ We(c$2));
				});
			});
		});
	}
	computeLookaheadFunc(e$1, t, n$1, i$1, s$1, o$1) {
		this.TRACE_INIT(`${o$1}${t === 0 ? "" : t}`, () => {
			let l$2 = /* @__PURE__ */ this.lookaheadStrategy.buildLookaheadForOptional({
				prodOccurrence: t,
				rule: e$1,
				maxLookahead: s$1 || this.maxLookahead,
				dynamicTokensEnabled: this.dynamicTokensEnabled,
				prodType: i$1
			}), u$2 = /* @__PURE__ */ oa(this.fullRuleNameToShort[e$1.name], n$1, t);
			this.setLaFuncCache(u$2, l$2);
		});
	}
	getKeyForAutomaticLookahead(e$1, t) {
		return oa(/* @__PURE__ */ this.getLastExplicitRuleShortName(), e$1, t);
	}
	getLaFuncFromCache(e$1) {
		return this.lookAheadFuncsCache.get(e$1);
	}
	setLaFuncCache(e$1, t) {
		this.lookAheadFuncsCache.set(e$1, t);
	}
}, $l = class extends De$1 {
	static {
		m(this, "DslMethodsCollectorVisitor");
	}
	constructor() {
		super(...arguments), this.dslMethods = {
			option: [],
			alternation: [],
			repetition: [],
			repetitionWithSeparator: [],
			repetitionMandatory: [],
			repetitionMandatoryWithSeparator: []
		};
	}
	reset() {
		this.dslMethods = {
			option: [],
			alternation: [],
			repetition: [],
			repetitionWithSeparator: [],
			repetitionMandatory: [],
			repetitionMandatoryWithSeparator: []
		};
	}
	visitOption(e$1) {
		this.dslMethods.option.push(e$1);
	}
	visitRepetitionWithSeparator(e$1) {
		this.dslMethods.repetitionWithSeparator.push(e$1);
	}
	visitRepetitionMandatory(e$1) {
		this.dslMethods.repetitionMandatory.push(e$1);
	}
	visitRepetitionMandatoryWithSeparator(e$1) {
		this.dslMethods.repetitionMandatoryWithSeparator.push(e$1);
	}
	visitRepetition(e$1) {
		this.dslMethods.repetition.push(e$1);
	}
	visitAlternation(e$1) {
		this.dslMethods.alternation.push(e$1);
	}
}, la = new $l();
function Qp(r) {
	la.reset(), r.accept(la);
	let e$1 = la.dslMethods;
	return la.reset(), e$1;
}
m(Qp, "collectMethods");
function Cl(r, e$1) {
	isNaN(r.startOffset) === !0 ? (r.startOffset = e$1.startOffset, r.endOffset = e$1.endOffset) : r.endOffset < e$1.endOffset && (r.endOffset = e$1.endOffset);
}
m(Cl, "setNodeLocationOnlyOffset");
function Sl(r, e$1) {
	isNaN(r.startOffset) === !0 ? (r.startOffset = e$1.startOffset, r.startColumn = e$1.startColumn, r.startLine = e$1.startLine, r.endOffset = e$1.endOffset, r.endColumn = e$1.endColumn, r.endLine = e$1.endLine) : r.endOffset < e$1.endOffset && (r.endOffset = e$1.endOffset, r.endColumn = e$1.endColumn, r.endLine = e$1.endLine);
}
m(Sl, "setNodeLocationFull");
function hf(r, e$1, t) {
	r.children[t] === void 0 ? r.children[t] = [e$1] : r.children[t].push(e$1);
}
m(hf, "addTerminalToCst");
function pf(r, e$1, t) {
	r.children[e$1] === void 0 ? r.children[e$1] = [t] : r.children[e$1].push(t);
}
m(pf, "addNoneTerminalToCst");
var Zp = "name";
function wl(r, e$1) {
	Object.defineProperty(r, Zp, {
		enumerable: !1,
		configurable: !0,
		writable: !1,
		value: e$1
	});
}
m(wl, "defineNameProp");
function em(r, e$1) {
	let t = /* @__PURE__ */ h(r), n$1 = t.length;
	for (let i$1 = 0; i$1 < n$1; i$1++) {
		let s$1 = t[i$1], o$1 = r[s$1], l$2 = o$1.length;
		for (let u$2 = 0; u$2 < l$2; u$2++) {
			let c$2 = o$1[u$2];
			c$2.tokenTypeIdx === void 0 && this[c$2.name](c$2.children, e$1);
		}
	}
}
m(em, "defaultVisit");
function mf(r, e$1) {
	let t = /* @__PURE__ */ m(function() {}, "derivedConstructor");
	wl(t, r + "BaseSemantics");
	return t.prototype = {
		visit: /* @__PURE__ */ m(function(i$1, s$1) {
			if (N(i$1) && (i$1 = i$1[0]), !sn(i$1)) return this[i$1.name](i$1.children, s$1);
		}, "visit"),
		validateVisitor: /* @__PURE__ */ m(function() {
			let i$1 = /* @__PURE__ */ tm(this, e$1);
			if (!Cr(i$1)) {
				let s$1 = /* @__PURE__ */ Jr(i$1, (o$1) => o$1.msg);
				throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:
	${s$1.join(`

`).replace(/\n/g, `
	`)}`);
			}
		}, "validateVisitor")
	}, t.prototype.constructor = t, t._RULE_NAMES = e$1, t;
}
m(mf, "createBaseSemanticVisitorConstructor");
function gf(r, e$1, t) {
	let n$1 = /* @__PURE__ */ m(function() {}, "derivedConstructor");
	wl(n$1, r + "BaseSemanticsWithDefaults");
	let i$1 = /* @__PURE__ */ Object.create(t.prototype);
	return Zr(e$1, (s$1) => {
		i$1[s$1] = em;
	}), n$1.prototype = i$1, n$1.prototype.constructor = n$1, n$1;
}
m(gf, "createBaseVisitorConstructorWithDefaults");
var _l;
(function(r) {
	r[r.REDUNDANT_METHOD = 0] = "REDUNDANT_METHOD", r[r.MISSING_METHOD = 1] = "MISSING_METHOD";
})(_l || (_l = {}));
function tm(r, e$1) {
	return rm(r, e$1);
}
m(tm, "validateVisitor");
function rm(r, e$1) {
	return Ai(/* @__PURE__ */ Jr(/* @__PURE__ */ fn(e$1, (i$1) => T$1(r[i$1]) === !1), (i$1) => ({
		msg: `Missing visitor method: <${i$1}> on ${r.constructor.name} CST Visitor.`,
		type: _l.MISSING_METHOD,
		methodName: i$1
	})));
}
m(rm, "validateMissingCstMethods");
var ha = class {
	static {
		m(this, "TreeBuilder");
	}
	initTreeBuilder(e$1) {
		if (this.CST_STACK = [], this.outputCst = e$1.outputCst, this.nodeLocationTracking = fm(e$1, "nodeLocationTracking") ? e$1.nodeLocationTracking : Fe.nodeLocationTracking, !this.outputCst) this.cstInvocationStateUpdate = kr, this.cstFinallyStateUpdate = kr, this.cstPostTerminal = kr, this.cstPostNonTerminal = kr, this.cstPostRule = kr;
		else if (/full/i.test(this.nodeLocationTracking)) this.recoveryEnabled ? (this.setNodeLocationFromToken = Sl, this.setNodeLocationFromNode = Sl, this.cstPostRule = kr, this.setInitialNodeLocation = this.setInitialNodeLocationFullRecovery) : (this.setNodeLocationFromToken = kr, this.setNodeLocationFromNode = kr, this.cstPostRule = this.cstPostRuleFull, this.setInitialNodeLocation = this.setInitialNodeLocationFullRegular);
		else if (/onlyOffset/i.test(this.nodeLocationTracking)) this.recoveryEnabled ? (this.setNodeLocationFromToken = Cl, this.setNodeLocationFromNode = Cl, this.cstPostRule = kr, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRecovery) : (this.setNodeLocationFromToken = kr, this.setNodeLocationFromNode = kr, this.cstPostRule = this.cstPostRuleOnlyOffset, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRegular);
		else if (/none/i.test(this.nodeLocationTracking)) this.setNodeLocationFromToken = kr, this.setNodeLocationFromNode = kr, this.cstPostRule = kr, this.setInitialNodeLocation = kr;
		else throw Error(`Invalid <nodeLocationTracking> config option: "${e$1.nodeLocationTracking}"`);
	}
	setInitialNodeLocationOnlyOffsetRecovery(e$1) {
		e$1.location = {
			startOffset: NaN,
			endOffset: NaN
		};
	}
	setInitialNodeLocationOnlyOffsetRegular(e$1) {
		e$1.location = {
			startOffset: this.LA(1).startOffset,
			endOffset: NaN
		};
	}
	setInitialNodeLocationFullRecovery(e$1) {
		e$1.location = {
			startOffset: NaN,
			startLine: NaN,
			startColumn: NaN,
			endOffset: NaN,
			endLine: NaN,
			endColumn: NaN
		};
	}
	setInitialNodeLocationFullRegular(e$1) {
		let t = /* @__PURE__ */ this.LA(1);
		e$1.location = {
			startOffset: t.startOffset,
			startLine: t.startLine,
			startColumn: t.startColumn,
			endOffset: NaN,
			endLine: NaN,
			endColumn: NaN
		};
	}
	cstInvocationStateUpdate(e$1) {
		let t = {
			name: e$1,
			children: /* @__PURE__ */ Object.create(null)
		};
		this.setInitialNodeLocation(t), this.CST_STACK.push(t);
	}
	cstFinallyStateUpdate() {
		this.CST_STACK.pop();
	}
	cstPostRuleFull(e$1) {
		let t = /* @__PURE__ */ this.LA(0), n$1 = e$1.location;
		n$1.startOffset <= t.startOffset ? (n$1.endOffset = t.endOffset, n$1.endLine = t.endLine, n$1.endColumn = t.endColumn) : (n$1.startOffset = NaN, n$1.startLine = NaN, n$1.startColumn = NaN);
	}
	cstPostRuleOnlyOffset(e$1) {
		let t = /* @__PURE__ */ this.LA(0), n$1 = e$1.location;
		n$1.startOffset <= t.startOffset ? n$1.endOffset = t.endOffset : n$1.startOffset = NaN;
	}
	cstPostTerminal(e$1, t) {
		let n$1 = this.CST_STACK[this.CST_STACK.length - 1];
		hf(n$1, t, e$1), this.setNodeLocationFromToken(n$1.location, t);
	}
	cstPostNonTerminal(e$1, t) {
		let n$1 = this.CST_STACK[this.CST_STACK.length - 1];
		pf(n$1, t, e$1), this.setNodeLocationFromNode(n$1.location, e$1.location);
	}
	getBaseCstVisitorConstructor() {
		if (sn(this.baseCstVisitorConstructor)) {
			let e$1 = /* @__PURE__ */ mf(this.className, /* @__PURE__ */ h(this.gastProductionsCache));
			return this.baseCstVisitorConstructor = e$1, e$1;
		}
		return this.baseCstVisitorConstructor;
	}
	getBaseCstVisitorConstructorWithDefaults() {
		if (sn(this.baseCstVisitorWithDefaultsConstructor)) {
			let e$1 = /* @__PURE__ */ gf(this.className, /* @__PURE__ */ h(this.gastProductionsCache), /* @__PURE__ */ this.getBaseCstVisitorConstructor());
			return this.baseCstVisitorWithDefaultsConstructor = e$1, e$1;
		}
		return this.baseCstVisitorWithDefaultsConstructor;
	}
	getLastExplicitRuleShortName() {
		let e$1 = this.RULE_STACK;
		return e$1[e$1.length - 1];
	}
	getPreviousExplicitRuleShortName() {
		let e$1 = this.RULE_STACK;
		return e$1[e$1.length - 2];
	}
	getLastExplicitRuleOccurrenceIndex() {
		let e$1 = this.RULE_OCCURRENCE_STACK;
		return e$1[e$1.length - 1];
	}
};
var pa = class {
	static {
		m(this, "LexerAdapter");
	}
	initLexerAdapter() {
		this.tokVector = [], this.tokVectorLength = 0, this.currIdx = -1;
	}
	set input(e$1) {
		if (this.selfAnalysisDone !== !0) throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");
		this.reset(), this.tokVector = e$1, this.tokVectorLength = e$1.length;
	}
	get input() {
		return this.tokVector;
	}
	SKIP_TOKEN() {
		return this.currIdx <= this.tokVector.length - 2 ? (this.consumeToken(), this.LA(1)) : _n;
	}
	LA(e$1) {
		let t = this.currIdx + e$1;
		return t < 0 || this.tokVectorLength <= t ? _n : this.tokVector[t];
	}
	consumeToken() {
		this.currIdx++;
	}
	exportLexerState() {
		return this.currIdx;
	}
	importLexerState(e$1) {
		this.currIdx = e$1;
	}
	resetLexerState() {
		this.currIdx = -1;
	}
	moveToTerminatedState() {
		this.currIdx = this.tokVector.length - 1;
	}
	getLexerPosition() {
		return this.exportLexerState();
	}
};
var ma = class {
	static {
		m(this, "RecognizerApi");
	}
	ACTION(e$1) {
		return e$1.call(this);
	}
	consume(e$1, t, n$1) {
		return this.consumeInternal(t, e$1, n$1);
	}
	subrule(e$1, t, n$1) {
		return this.subruleInternal(t, e$1, n$1);
	}
	option(e$1, t) {
		return this.optionInternal(t, e$1);
	}
	or(e$1, t) {
		return this.orInternal(t, e$1);
	}
	many(e$1, t) {
		return this.manyInternal(e$1, t);
	}
	atLeastOne(e$1, t) {
		return this.atLeastOneInternal(e$1, t);
	}
	CONSUME(e$1, t) {
		return this.consumeInternal(e$1, 0, t);
	}
	CONSUME1(e$1, t) {
		return this.consumeInternal(e$1, 1, t);
	}
	CONSUME2(e$1, t) {
		return this.consumeInternal(e$1, 2, t);
	}
	CONSUME3(e$1, t) {
		return this.consumeInternal(e$1, 3, t);
	}
	CONSUME4(e$1, t) {
		return this.consumeInternal(e$1, 4, t);
	}
	CONSUME5(e$1, t) {
		return this.consumeInternal(e$1, 5, t);
	}
	CONSUME6(e$1, t) {
		return this.consumeInternal(e$1, 6, t);
	}
	CONSUME7(e$1, t) {
		return this.consumeInternal(e$1, 7, t);
	}
	CONSUME8(e$1, t) {
		return this.consumeInternal(e$1, 8, t);
	}
	CONSUME9(e$1, t) {
		return this.consumeInternal(e$1, 9, t);
	}
	SUBRULE(e$1, t) {
		return this.subruleInternal(e$1, 0, t);
	}
	SUBRULE1(e$1, t) {
		return this.subruleInternal(e$1, 1, t);
	}
	SUBRULE2(e$1, t) {
		return this.subruleInternal(e$1, 2, t);
	}
	SUBRULE3(e$1, t) {
		return this.subruleInternal(e$1, 3, t);
	}
	SUBRULE4(e$1, t) {
		return this.subruleInternal(e$1, 4, t);
	}
	SUBRULE5(e$1, t) {
		return this.subruleInternal(e$1, 5, t);
	}
	SUBRULE6(e$1, t) {
		return this.subruleInternal(e$1, 6, t);
	}
	SUBRULE7(e$1, t) {
		return this.subruleInternal(e$1, 7, t);
	}
	SUBRULE8(e$1, t) {
		return this.subruleInternal(e$1, 8, t);
	}
	SUBRULE9(e$1, t) {
		return this.subruleInternal(e$1, 9, t);
	}
	OPTION(e$1) {
		return this.optionInternal(e$1, 0);
	}
	OPTION1(e$1) {
		return this.optionInternal(e$1, 1);
	}
	OPTION2(e$1) {
		return this.optionInternal(e$1, 2);
	}
	OPTION3(e$1) {
		return this.optionInternal(e$1, 3);
	}
	OPTION4(e$1) {
		return this.optionInternal(e$1, 4);
	}
	OPTION5(e$1) {
		return this.optionInternal(e$1, 5);
	}
	OPTION6(e$1) {
		return this.optionInternal(e$1, 6);
	}
	OPTION7(e$1) {
		return this.optionInternal(e$1, 7);
	}
	OPTION8(e$1) {
		return this.optionInternal(e$1, 8);
	}
	OPTION9(e$1) {
		return this.optionInternal(e$1, 9);
	}
	OR(e$1) {
		return this.orInternal(e$1, 0);
	}
	OR1(e$1) {
		return this.orInternal(e$1, 1);
	}
	OR2(e$1) {
		return this.orInternal(e$1, 2);
	}
	OR3(e$1) {
		return this.orInternal(e$1, 3);
	}
	OR4(e$1) {
		return this.orInternal(e$1, 4);
	}
	OR5(e$1) {
		return this.orInternal(e$1, 5);
	}
	OR6(e$1) {
		return this.orInternal(e$1, 6);
	}
	OR7(e$1) {
		return this.orInternal(e$1, 7);
	}
	OR8(e$1) {
		return this.orInternal(e$1, 8);
	}
	OR9(e$1) {
		return this.orInternal(e$1, 9);
	}
	MANY(e$1) {
		this.manyInternal(0, e$1);
	}
	MANY1(e$1) {
		this.manyInternal(1, e$1);
	}
	MANY2(e$1) {
		this.manyInternal(2, e$1);
	}
	MANY3(e$1) {
		this.manyInternal(3, e$1);
	}
	MANY4(e$1) {
		this.manyInternal(4, e$1);
	}
	MANY5(e$1) {
		this.manyInternal(5, e$1);
	}
	MANY6(e$1) {
		this.manyInternal(6, e$1);
	}
	MANY7(e$1) {
		this.manyInternal(7, e$1);
	}
	MANY8(e$1) {
		this.manyInternal(8, e$1);
	}
	MANY9(e$1) {
		this.manyInternal(9, e$1);
	}
	MANY_SEP(e$1) {
		this.manySepFirstInternal(0, e$1);
	}
	MANY_SEP1(e$1) {
		this.manySepFirstInternal(1, e$1);
	}
	MANY_SEP2(e$1) {
		this.manySepFirstInternal(2, e$1);
	}
	MANY_SEP3(e$1) {
		this.manySepFirstInternal(3, e$1);
	}
	MANY_SEP4(e$1) {
		this.manySepFirstInternal(4, e$1);
	}
	MANY_SEP5(e$1) {
		this.manySepFirstInternal(5, e$1);
	}
	MANY_SEP6(e$1) {
		this.manySepFirstInternal(6, e$1);
	}
	MANY_SEP7(e$1) {
		this.manySepFirstInternal(7, e$1);
	}
	MANY_SEP8(e$1) {
		this.manySepFirstInternal(8, e$1);
	}
	MANY_SEP9(e$1) {
		this.manySepFirstInternal(9, e$1);
	}
	AT_LEAST_ONE(e$1) {
		this.atLeastOneInternal(0, e$1);
	}
	AT_LEAST_ONE1(e$1) {
		return this.atLeastOneInternal(1, e$1);
	}
	AT_LEAST_ONE2(e$1) {
		this.atLeastOneInternal(2, e$1);
	}
	AT_LEAST_ONE3(e$1) {
		this.atLeastOneInternal(3, e$1);
	}
	AT_LEAST_ONE4(e$1) {
		this.atLeastOneInternal(4, e$1);
	}
	AT_LEAST_ONE5(e$1) {
		this.atLeastOneInternal(5, e$1);
	}
	AT_LEAST_ONE6(e$1) {
		this.atLeastOneInternal(6, e$1);
	}
	AT_LEAST_ONE7(e$1) {
		this.atLeastOneInternal(7, e$1);
	}
	AT_LEAST_ONE8(e$1) {
		this.atLeastOneInternal(8, e$1);
	}
	AT_LEAST_ONE9(e$1) {
		this.atLeastOneInternal(9, e$1);
	}
	AT_LEAST_ONE_SEP(e$1) {
		this.atLeastOneSepFirstInternal(0, e$1);
	}
	AT_LEAST_ONE_SEP1(e$1) {
		this.atLeastOneSepFirstInternal(1, e$1);
	}
	AT_LEAST_ONE_SEP2(e$1) {
		this.atLeastOneSepFirstInternal(2, e$1);
	}
	AT_LEAST_ONE_SEP3(e$1) {
		this.atLeastOneSepFirstInternal(3, e$1);
	}
	AT_LEAST_ONE_SEP4(e$1) {
		this.atLeastOneSepFirstInternal(4, e$1);
	}
	AT_LEAST_ONE_SEP5(e$1) {
		this.atLeastOneSepFirstInternal(5, e$1);
	}
	AT_LEAST_ONE_SEP6(e$1) {
		this.atLeastOneSepFirstInternal(6, e$1);
	}
	AT_LEAST_ONE_SEP7(e$1) {
		this.atLeastOneSepFirstInternal(7, e$1);
	}
	AT_LEAST_ONE_SEP8(e$1) {
		this.atLeastOneSepFirstInternal(8, e$1);
	}
	AT_LEAST_ONE_SEP9(e$1) {
		this.atLeastOneSepFirstInternal(9, e$1);
	}
	RULE(e$1, t, n$1 = Ln) {
		if (pm(this.definedRulesNames, e$1)) {
			let o$1 = {
				message: /* @__PURE__ */ it.buildDuplicateRuleNameError({
					topLevelRule: e$1,
					grammarName: this.className
				}),
				type: ye.DUPLICATE_RULE_NAME,
				ruleName: e$1
			};
			this.definitionErrors.push(o$1);
		}
		this.definedRulesNames.push(e$1);
		let i$1 = /* @__PURE__ */ this.defineRule(e$1, t, n$1);
		return this[e$1] = i$1, i$1;
	}
	OVERRIDE_RULE(e$1, t, n$1 = Ln) {
		let i$1 = /* @__PURE__ */ tf(e$1, this.definedRulesNames, this.className);
		this.definitionErrors = /* @__PURE__ */ this.definitionErrors.concat(i$1);
		let s$1 = /* @__PURE__ */ this.defineRule(e$1, t, n$1);
		return this[e$1] = s$1, s$1;
	}
	BACKTRACK(e$1, t) {
		return function() {
			this.isBackTrackingStack.push(1);
			let n$1 = /* @__PURE__ */ this.saveRecogState();
			try {
				return e$1.apply(this, t), !0;
			} catch (i$1) {
				if (Wt(i$1)) return !1;
				throw i$1;
			} finally {
				this.reloadRecogState(n$1), this.isBackTrackingStack.pop();
			}
		};
	}
	getGAstProductions() {
		return this.gastProductionsCache;
	}
	getSerializedGastProductions() {
		return Vs(/* @__PURE__ */ Xr(this.gastProductionsCache));
	}
};
var ga = class {
	static {
		m(this, "RecognizerEngine");
	}
	initRecognizerEngine(e$1, t) {
		if (this.className = this.constructor.name, this.shortRuleNameToFull = {}, this.fullRuleNameToShort = {}, this.ruleShortNameIdx = 256, this.tokenMatcher = $n, this.subruleIdx = 0, this.definedRulesNames = [], this.tokensMap = {}, this.isBackTrackingStack = [], this.RULE_STACK = [], this.RULE_OCCURRENCE_STACK = [], this.gastProductionsCache = {}, fm(t, "serializedGrammar")) throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);
		if (N(e$1)) {
			if (Cr(e$1)) throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);
			if (typeof e$1[0].startOffset == "number") throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`);
		}
		if (N(e$1)) this.tokensMap = /* @__PURE__ */ Rn(e$1, (s$1, o$1) => (s$1[o$1.name] = o$1, s$1), {});
		else if (fm(e$1, "modes") && Ui(/* @__PURE__ */ Qr(/* @__PURE__ */ Xr(e$1.modes)), Oc)) {
			let s$1 = /* @__PURE__ */ Qr(/* @__PURE__ */ Xr(e$1.modes));
			this.tokensMap = /* @__PURE__ */ Rn(/* @__PURE__ */ mp(s$1), (l$2, u$2) => (l$2[u$2.name] = u$2, l$2), {});
		} else if (m$1(e$1)) this.tokensMap = /* @__PURE__ */ _f(e$1);
		else throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");
		this.tokensMap.EOF = qe;
		let n$1 = fm(e$1, "modes") ? Qr(/* @__PURE__ */ Xr(e$1.modes)) : Xr(e$1);
		this.tokenMatcher = Ui(n$1, (s$1) => Cr(s$1.categoryMatches)) ? $n : Ct, St(/* @__PURE__ */ Xr(this.tokensMap));
	}
	defineRule(e$1, t, n$1) {
		if (this.selfAnalysisDone) throw Error(`Grammar rule <${e$1}> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);
		let i$1 = fm(n$1, "resyncEnabled") ? n$1.resyncEnabled : Ln.resyncEnabled, s$1 = fm(n$1, "recoveryValueFunc") ? n$1.recoveryValueFunc : Ln.recoveryValueFunc, o$1 = this.ruleShortNameIdx << 12;
		this.ruleShortNameIdx++, this.shortRuleNameToFull[o$1] = e$1, this.fullRuleNameToShort[e$1] = o$1;
		let l$2;
		return this.outputCst === !0 ? l$2 = /* @__PURE__ */ m(function(...f$1) {
			try {
				this.ruleInvocationStateUpdate(o$1, e$1, this.subruleIdx), t.apply(this, f$1);
				let d$1 = this.CST_STACK[this.CST_STACK.length - 1];
				return this.cstPostRule(d$1), d$1;
			} catch (d$1) {
				return this.invokeRuleCatch(d$1, i$1, s$1);
			} finally {
				this.ruleFinallyStateUpdate();
			}
		}, "invokeRuleWithTry") : l$2 = /* @__PURE__ */ m(function(...f$1) {
			try {
				return this.ruleInvocationStateUpdate(o$1, e$1, this.subruleIdx), t.apply(this, f$1);
			} catch (d$1) {
				return this.invokeRuleCatch(d$1, i$1, s$1);
			} finally {
				this.ruleFinallyStateUpdate();
			}
		}, "invokeRuleWithTryCst"), Object.assign(l$2, {
			ruleName: e$1,
			originalGrammarAction: t
		});
	}
	invokeRuleCatch(e$1, t, n$1) {
		let i$1 = this.RULE_STACK.length === 1, s$1 = t && !this.isBackTracking() && this.recoveryEnabled;
		if (Wt(e$1)) {
			let o$1 = e$1;
			if (s$1) {
				let l$2 = /* @__PURE__ */ this.findReSyncTokenType();
				if (this.isInCurrentRuleReSyncSet(l$2)) if (o$1.resyncedTokens = /* @__PURE__ */ this.reSyncTo(l$2), this.outputCst) {
					let u$2 = this.CST_STACK[this.CST_STACK.length - 1];
					return u$2.recoveredNode = !0, u$2;
				} else return n$1(e$1);
				else {
					if (this.outputCst) {
						let u$2 = this.CST_STACK[this.CST_STACK.length - 1];
						u$2.recoveredNode = !0, o$1.partialCstResult = u$2;
					}
					throw o$1;
				}
			} else {
				if (i$1) return this.moveToTerminatedState(), n$1(e$1);
				throw o$1;
			}
		} else throw e$1;
	}
	optionInternal(e$1, t) {
		let n$1 = /* @__PURE__ */ this.getKeyForAutomaticLookahead(512, t);
		return this.optionInternalLogic(e$1, t, n$1);
	}
	optionInternalLogic(e$1, t, n$1) {
		let i$1 = /* @__PURE__ */ this.getLaFuncFromCache(n$1), s$1;
		if (typeof e$1 != "function") {
			s$1 = e$1.DEF;
			let o$1 = e$1.GATE;
			if (o$1 !== void 0) {
				let l$2 = i$1;
				i$1 = /* @__PURE__ */ m(() => o$1.call(this) && l$2.call(this), "lookAheadFunc");
			}
		} else s$1 = e$1;
		if (i$1.call(this) === !0) return s$1.call(this);
	}
	atLeastOneInternal(e$1, t) {
		let n$1 = /* @__PURE__ */ this.getKeyForAutomaticLookahead(1024, e$1);
		return this.atLeastOneInternalLogic(e$1, t, n$1);
	}
	atLeastOneInternalLogic(e$1, t, n$1) {
		let i$1 = /* @__PURE__ */ this.getLaFuncFromCache(n$1), s$1;
		if (typeof t != "function") {
			s$1 = t.DEF;
			let o$1 = t.GATE;
			if (o$1 !== void 0) {
				let l$2 = i$1;
				i$1 = /* @__PURE__ */ m(() => o$1.call(this) && l$2.call(this), "lookAheadFunc");
			}
		} else s$1 = t;
		if (i$1.call(this) === !0) {
			let o$1 = /* @__PURE__ */ this.doSingleRepetition(s$1);
			for (; i$1.call(this) === !0 && o$1 === !0;) o$1 = /* @__PURE__ */ this.doSingleRepetition(s$1);
		} else throw this.raiseEarlyExitException(e$1, ae.REPETITION_MANDATORY, t.ERR_MSG);
		this.attemptInRepetitionRecovery(this.atLeastOneInternal, [e$1, t], i$1, 1024, e$1, Zs);
	}
	atLeastOneSepFirstInternal(e$1, t) {
		let n$1 = /* @__PURE__ */ this.getKeyForAutomaticLookahead(1536, e$1);
		this.atLeastOneSepFirstInternalLogic(e$1, t, n$1);
	}
	atLeastOneSepFirstInternalLogic(e$1, t, n$1) {
		let i$1 = t.DEF, s$1 = t.SEP;
		if (this.getLaFuncFromCache(n$1).call(this) === !0) {
			i$1.call(this);
			let l$2 = /* @__PURE__ */ m(() => this.tokenMatcher(/* @__PURE__ */ this.LA(1), s$1), "separatorLookAheadFunc");
			for (; this.tokenMatcher(/* @__PURE__ */ this.LA(1), s$1) === !0;) this.CONSUME(s$1), i$1.call(this);
			this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
				e$1,
				s$1,
				l$2,
				i$1,
				Ii
			], l$2, 1536, e$1, Ii);
		} else throw this.raiseEarlyExitException(e$1, ae.REPETITION_MANDATORY_WITH_SEPARATOR, t.ERR_MSG);
	}
	manyInternal(e$1, t) {
		let n$1 = /* @__PURE__ */ this.getKeyForAutomaticLookahead(768, e$1);
		return this.manyInternalLogic(e$1, t, n$1);
	}
	manyInternalLogic(e$1, t, n$1) {
		let i$1 = /* @__PURE__ */ this.getLaFuncFromCache(n$1), s$1;
		if (typeof t != "function") {
			s$1 = t.DEF;
			let l$2 = t.GATE;
			if (l$2 !== void 0) {
				let u$2 = i$1;
				i$1 = /* @__PURE__ */ m(() => l$2.call(this) && u$2.call(this), "lookaheadFunction");
			}
		} else s$1 = t;
		let o$1 = !0;
		for (; i$1.call(this) === !0 && o$1 === !0;) o$1 = /* @__PURE__ */ this.doSingleRepetition(s$1);
		this.attemptInRepetitionRecovery(this.manyInternal, [e$1, t], i$1, 768, e$1, Qs, o$1);
	}
	manySepFirstInternal(e$1, t) {
		let n$1 = /* @__PURE__ */ this.getKeyForAutomaticLookahead(1280, e$1);
		this.manySepFirstInternalLogic(e$1, t, n$1);
	}
	manySepFirstInternalLogic(e$1, t, n$1) {
		let i$1 = t.DEF, s$1 = t.SEP;
		if (this.getLaFuncFromCache(n$1).call(this) === !0) {
			i$1.call(this);
			let l$2 = /* @__PURE__ */ m(() => this.tokenMatcher(/* @__PURE__ */ this.LA(1), s$1), "separatorLookAheadFunc");
			for (; this.tokenMatcher(/* @__PURE__ */ this.LA(1), s$1) === !0;) this.CONSUME(s$1), i$1.call(this);
			this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
				e$1,
				s$1,
				l$2,
				i$1,
				$i
			], l$2, 1280, e$1, $i);
		}
	}
	repetitionSepSecondInternal(e$1, t, n$1, i$1, s$1) {
		for (; n$1();) this.CONSUME(t), i$1.call(this);
		this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
			e$1,
			t,
			n$1,
			i$1,
			s$1
		], n$1, 1536, e$1, s$1);
	}
	doSingleRepetition(e$1) {
		let t = /* @__PURE__ */ this.getLexerPosition();
		return e$1.call(this), this.getLexerPosition() > t;
	}
	orInternal(e$1, t) {
		let n$1 = /* @__PURE__ */ this.getKeyForAutomaticLookahead(256, t), i$1 = N(e$1) ? e$1 : e$1.DEF, o$1 = /* @__PURE__ */ this.getLaFuncFromCache(n$1).call(this, i$1);
		if (o$1 !== void 0) return i$1[o$1].ALT.call(this);
		this.raiseNoAltException(t, e$1.ERR_MSG);
	}
	ruleFinallyStateUpdate() {
		if (this.RULE_STACK.pop(), this.RULE_OCCURRENCE_STACK.pop(), this.cstFinallyStateUpdate(), this.RULE_STACK.length === 0 && this.isAtEndOfInput() === !1) {
			let e$1 = /* @__PURE__ */ this.LA(1), t = /* @__PURE__ */ this.errorMessageProvider.buildNotAllInputParsedMessage({
				firstRedundant: e$1,
				ruleName: /* @__PURE__ */ this.getCurrRuleFullName()
			});
			this.SAVE_ERROR(new wi(t, e$1));
		}
	}
	subruleInternal(e$1, t, n$1) {
		let i$1;
		try {
			let s$1 = n$1 !== void 0 ? n$1.ARGS : void 0;
			return this.subruleIdx = t, i$1 = /* @__PURE__ */ e$1.apply(this, s$1), this.cstPostNonTerminal(i$1, n$1 !== void 0 && n$1.LABEL !== void 0 ? n$1.LABEL : e$1.ruleName), i$1;
		} catch (s$1) {
			throw this.subruleInternalError(s$1, n$1, e$1.ruleName);
		}
	}
	subruleInternalError(e$1, t, n$1) {
		throw Wt(e$1) && e$1.partialCstResult !== void 0 && (this.cstPostNonTerminal(e$1.partialCstResult, t !== void 0 && t.LABEL !== void 0 ? t.LABEL : n$1), delete e$1.partialCstResult), e$1;
	}
	consumeInternal(e$1, t, n$1) {
		let i$1;
		try {
			let s$1 = /* @__PURE__ */ this.LA(1);
			this.tokenMatcher(s$1, e$1) === !0 ? (this.consumeToken(), i$1 = s$1) : this.consumeInternalError(e$1, s$1, n$1);
		} catch (s$1) {
			i$1 = /* @__PURE__ */ this.consumeInternalRecovery(e$1, t, s$1);
		}
		return this.cstPostTerminal(n$1 !== void 0 && n$1.LABEL !== void 0 ? n$1.LABEL : e$1.name, i$1), i$1;
	}
	consumeInternalError(e$1, t, n$1) {
		let i$1, s$1 = /* @__PURE__ */ this.LA(0);
		throw n$1 !== void 0 && n$1.ERR_MSG ? i$1 = n$1.ERR_MSG : i$1 = /* @__PURE__ */ this.errorMessageProvider.buildMismatchTokenMessage({
			expected: e$1,
			actual: t,
			previous: s$1,
			ruleName: /* @__PURE__ */ this.getCurrRuleFullName()
		}), this.SAVE_ERROR(new dr(i$1, t, s$1));
	}
	consumeInternalRecovery(e$1, t, n$1) {
		if (this.recoveryEnabled && n$1.name === "MismatchedTokenException" && !this.isBackTracking()) {
			let i$1 = /* @__PURE__ */ this.getFollowsForInRuleRecovery(e$1, t);
			try {
				return this.tryInRuleRecovery(e$1, i$1);
			} catch (s$1) {
				throw s$1.name === kl ? n$1 : s$1;
			}
		} else throw n$1;
	}
	saveRecogState() {
		let e$1 = this.errors, t = /* @__PURE__ */ _f(this.RULE_STACK);
		return {
			errors: e$1,
			lexerState: /* @__PURE__ */ this.exportLexerState(),
			RULE_STACK: t,
			CST_STACK: this.CST_STACK
		};
	}
	reloadRecogState(e$1) {
		this.errors = e$1.errors, this.importLexerState(e$1.lexerState), this.RULE_STACK = e$1.RULE_STACK;
	}
	ruleInvocationStateUpdate(e$1, t, n$1) {
		this.RULE_OCCURRENCE_STACK.push(n$1), this.RULE_STACK.push(e$1), this.cstInvocationStateUpdate(t);
	}
	isBackTracking() {
		return this.isBackTrackingStack.length !== 0;
	}
	getCurrRuleFullName() {
		let e$1 = /* @__PURE__ */ this.getLastExplicitRuleShortName();
		return this.shortRuleNameToFull[e$1];
	}
	shortRuleNameToFullName(e$1) {
		return this.shortRuleNameToFull[e$1];
	}
	isAtEndOfInput() {
		return this.tokenMatcher(/* @__PURE__ */ this.LA(1), qe);
	}
	reset() {
		this.resetLexerState(), this.subruleIdx = 0, this.isBackTrackingStack = [], this.errors = [], this.RULE_STACK = [], this.CST_STACK = [], this.RULE_OCCURRENCE_STACK = [];
	}
};
var ya = class {
	static {
		m(this, "ErrorHandler");
	}
	initErrorHandler(e$1) {
		this._errors = [], this.errorMessageProvider = fm(e$1, "errorMessageProvider") ? e$1.errorMessageProvider : Fe.errorMessageProvider;
	}
	SAVE_ERROR(e$1) {
		if (Wt(e$1)) return e$1.context = {
			ruleStack: /* @__PURE__ */ this.getHumanReadableRuleStack(),
			ruleOccurrenceStack: /* @__PURE__ */ _f(this.RULE_OCCURRENCE_STACK)
		}, this._errors.push(e$1), e$1;
		throw Error("Trying to save an Error which is not a RecognitionException");
	}
	get errors() {
		return _f(this._errors);
	}
	set errors(e$1) {
		this._errors = e$1;
	}
	raiseEarlyExitException(e$1, t, n$1) {
		let i$1 = /* @__PURE__ */ this.getCurrRuleFullName(), s$1 = this.getGAstProductions()[i$1], l$2 = Sn(e$1, s$1, t, this.maxLookahead)[0], u$2 = [];
		for (let f$1 = 1; f$1 <= this.maxLookahead; f$1++) u$2.push(/* @__PURE__ */ this.LA(f$1));
		let c$2 = /* @__PURE__ */ this.errorMessageProvider.buildEarlyExitMessage({
			expectedIterationPaths: l$2,
			actual: u$2,
			previous: /* @__PURE__ */ this.LA(0),
			customUserDescription: n$1,
			ruleName: i$1
		});
		throw this.SAVE_ERROR(new _i$1(c$2, this.LA(1), this.LA(0)));
	}
	raiseNoAltException(e$1, t) {
		let n$1 = /* @__PURE__ */ this.getCurrRuleFullName(), i$1 = this.getGAstProductions()[n$1], s$1 = /* @__PURE__ */ Cn(e$1, i$1, this.maxLookahead), o$1 = [];
		for (let c$2 = 1; c$2 <= this.maxLookahead; c$2++) o$1.push(/* @__PURE__ */ this.LA(c$2));
		let l$2 = /* @__PURE__ */ this.LA(0), u$2 = /* @__PURE__ */ this.errorMessageProvider.buildNoViableAltMessage({
			expectedPathsPerAlt: s$1,
			actual: o$1,
			previous: l$2,
			customUserDescription: t,
			ruleName: /* @__PURE__ */ this.getCurrRuleFullName()
		});
		throw this.SAVE_ERROR(new Si(u$2, this.LA(1), l$2));
	}
};
var Ta = class {
	static {
		m(this, "ContentAssist");
	}
	initContentAssist() {}
	computeContentAssist(e$1, t) {
		let n$1 = this.gastProductionsCache[e$1];
		if (sn(n$1)) throw Error(`Rule ->${e$1}<- does not exist in this grammar.`);
		return ta([n$1], t, this.tokenMatcher, this.maxLookahead);
	}
	getNextPossibleTokenTypes(e$1) {
		let t = /* @__PURE__ */ De(e$1.ruleStack), i$1 = this.getGAstProductions()[t];
		return new Js(i$1, e$1).startWalking();
	}
};
var Ea = { description: "This Object indicates the Parser is during Recording Phase" };
Object.freeze(Ea);
var yf = !0, Tf = Math.pow(2, 8) - 1, xf = /* @__PURE__ */ Bt({
	name: "RECORDING_PHASE_TOKEN",
	pattern: se.NA
});
St([xf]);
var Ef = /* @__PURE__ */ _t(xf, `This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`, -1, -1, -1, -1, -1, -1);
Object.freeze(Ef);
var im = {
	name: `This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,
	children: {}
}, Ra = class {
	static {
		m(this, "GastRecorder");
	}
	initGastRecorder(e$1) {
		this.recordingProdStack = [], this.RECORDING_PHASE = !1;
	}
	enableRecording() {
		this.RECORDING_PHASE = !0, this.TRACE_INIT("Enable Recording", () => {
			for (let e$1 = 0; e$1 < 10; e$1++) {
				let t = e$1 > 0 ? e$1 : "";
				this[`CONSUME${t}`] = function(n$1, i$1) {
					return this.consumeInternalRecord(n$1, e$1, i$1);
				}, this[`SUBRULE${t}`] = function(n$1, i$1) {
					return this.subruleInternalRecord(n$1, e$1, i$1);
				}, this[`OPTION${t}`] = function(n$1) {
					return this.optionInternalRecord(n$1, e$1);
				}, this[`OR${t}`] = function(n$1) {
					return this.orInternalRecord(n$1, e$1);
				}, this[`MANY${t}`] = function(n$1) {
					this.manyInternalRecord(e$1, n$1);
				}, this[`MANY_SEP${t}`] = function(n$1) {
					this.manySepFirstInternalRecord(e$1, n$1);
				}, this[`AT_LEAST_ONE${t}`] = function(n$1) {
					this.atLeastOneInternalRecord(e$1, n$1);
				}, this[`AT_LEAST_ONE_SEP${t}`] = function(n$1) {
					this.atLeastOneSepFirstInternalRecord(e$1, n$1);
				};
			}
			this.consume = function(e$1, t, n$1) {
				return this.consumeInternalRecord(t, e$1, n$1);
			}, this.subrule = function(e$1, t, n$1) {
				return this.subruleInternalRecord(t, e$1, n$1);
			}, this.option = function(e$1, t) {
				return this.optionInternalRecord(t, e$1);
			}, this.or = function(e$1, t) {
				return this.orInternalRecord(t, e$1);
			}, this.many = function(e$1, t) {
				this.manyInternalRecord(e$1, t);
			}, this.atLeastOne = function(e$1, t) {
				this.atLeastOneInternalRecord(e$1, t);
			}, this.ACTION = this.ACTION_RECORD, this.BACKTRACK = this.BACKTRACK_RECORD, this.LA = this.LA_RECORD;
		});
	}
	disableRecording() {
		this.RECORDING_PHASE = !1, this.TRACE_INIT("Deleting Recording methods", () => {
			let e$1 = this;
			for (let t = 0; t < 10; t++) {
				let n$1 = t > 0 ? t : "";
				delete e$1[`CONSUME${n$1}`], delete e$1[`SUBRULE${n$1}`], delete e$1[`OPTION${n$1}`], delete e$1[`OR${n$1}`], delete e$1[`MANY${n$1}`], delete e$1[`MANY_SEP${n$1}`], delete e$1[`AT_LEAST_ONE${n$1}`], delete e$1[`AT_LEAST_ONE_SEP${n$1}`];
			}
			delete e$1.consume, delete e$1.subrule, delete e$1.option, delete e$1.or, delete e$1.many, delete e$1.atLeastOne, delete e$1.ACTION, delete e$1.BACKTRACK, delete e$1.LA;
		});
	}
	ACTION_RECORD(e$1) {}
	BACKTRACK_RECORD(e$1, t) {
		return () => !0;
	}
	LA_RECORD(e$1) {
		return _n;
	}
	topLevelRuleRecord(e$1, t) {
		try {
			let n$1 = new Me({
				definition: [],
				name: e$1
			});
			return n$1.name = e$1, this.recordingProdStack.push(n$1), t.call(this), this.recordingProdStack.pop(), n$1;
		} catch (n$1) {
			if (n$1.KNOWN_RECORDER_ERROR !== !0) try {
				n$1.message = n$1.message + `
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`;
			} catch {
				throw n$1;
			}
			throw n$1;
		}
	}
	optionInternalRecord(e$1, t) {
		return Oi.call(this, z, e$1, t);
	}
	atLeastOneInternalRecord(e$1, t) {
		Oi.call(this, Q, t, e$1);
	}
	atLeastOneSepFirstInternalRecord(e$1, t) {
		Oi.call(this, Z, t, e$1, yf);
	}
	manyInternalRecord(e$1, t) {
		Oi.call(this, G, t, e$1);
	}
	manySepFirstInternalRecord(e$1, t) {
		Oi.call(this, q$1, t, e$1, yf);
	}
	orInternalRecord(e$1, t) {
		return sm.call(this, e$1, t);
	}
	subruleInternalRecord(e$1, t, n$1) {
		if (xa(t), !e$1 || fm(e$1, "ruleName") === !1) {
			let l$2 = /* @__PURE__ */ new Error(`<SUBRULE${Rf(t)}> argument is invalid expecting a Parser method reference but got: <${JSON.stringify(e$1)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
			throw l$2.KNOWN_RECORDER_ERROR = !0, l$2;
		}
		let i$1 = /* @__PURE__ */ Df(this.recordingProdStack), s$1 = e$1.ruleName, o$1 = new H({
			idx: t,
			nonTerminalName: s$1,
			label: n$1?.LABEL,
			referencedRule: void 0
		});
		return i$1.definition.push(o$1), this.outputCst ? im : Ea;
	}
	consumeInternalRecord(e$1, t, n$1) {
		if (xa(t), !hl(e$1)) {
			let o$1 = /* @__PURE__ */ new Error(`<CONSUME${Rf(t)}> argument is invalid expecting a TokenType reference but got: <${JSON.stringify(e$1)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
			throw o$1.KNOWN_RECORDER_ERROR = !0, o$1;
		}
		let i$1 = /* @__PURE__ */ Df(this.recordingProdStack), s$1 = new D({
			idx: t,
			terminalType: e$1,
			label: n$1?.LABEL
		});
		return i$1.definition.push(s$1), Ef;
	}
};
function Oi(r, e$1, t, n$1 = !1) {
	xa(t);
	let i$1 = /* @__PURE__ */ Df(this.recordingProdStack), s$1 = T$1(e$1) ? e$1 : e$1.DEF, o$1 = new r({
		definition: [],
		idx: t
	});
	return n$1 && (o$1.separator = e$1.SEP), fm(e$1, "MAX_LOOKAHEAD") && (o$1.maxLookahead = e$1.MAX_LOOKAHEAD), this.recordingProdStack.push(o$1), s$1.call(this), i$1.definition.push(o$1), this.recordingProdStack.pop(), Ea;
}
m(Oi, "recordProd");
function sm(r, e$1) {
	xa(e$1);
	let t = /* @__PURE__ */ Df(this.recordingProdStack), n$1 = N(r) === !1, i$1 = n$1 === !1 ? r : r.DEF, s$1 = new X({
		definition: [],
		idx: e$1,
		ignoreAmbiguities: n$1 && r.IGNORE_AMBIGUITIES === !0
	});
	fm(r, "MAX_LOOKAHEAD") && (s$1.maxLookahead = r.MAX_LOOKAHEAD);
	return s$1.hasPredicates = /* @__PURE__ */ fp(i$1, (l$2) => T$1(l$2.GATE)), t.definition.push(s$1), Zr(i$1, (l$2) => {
		let u$2 = new J({ definition: [] });
		s$1.definition.push(u$2), fm(l$2, "IGNORE_AMBIGUITIES") ? u$2.ignoreAmbiguities = l$2.IGNORE_AMBIGUITIES : fm(l$2, "GATE") && (u$2.ignoreAmbiguities = !0), this.recordingProdStack.push(u$2), l$2.ALT.call(this), this.recordingProdStack.pop();
	}), Ea;
}
m(sm, "recordOrProd");
function Rf(r) {
	return r === 0 ? "" : `${r}`;
}
m(Rf, "getIdxSuffix");
function xa(r) {
	if (r < 0 || r > Tf) {
		let e$1 = /* @__PURE__ */ new Error(`Invalid DSL Method idx value: <${r}>
	Idx value must be a none negative value smaller than ${Tf + 1}`);
		throw e$1.KNOWN_RECORDER_ERROR = !0, e$1;
	}
}
m(xa, "assertMethodIdxIsValid");
var Aa = class {
	static {
		m(this, "PerformanceTracer");
	}
	initPerformanceTracer(e$1) {
		if (fm(e$1, "traceInitPerf")) {
			let t = e$1.traceInitPerf, n$1 = typeof t == "number";
			this.traceInitMaxIdent = n$1 ? t : Infinity, this.traceInitPerf = n$1 ? t > 0 : t;
		} else this.traceInitMaxIdent = 0, this.traceInitPerf = Fe.traceInitPerf;
		this.traceInitIndent = -1;
	}
	TRACE_INIT(e$1, t) {
		if (this.traceInitPerf === !0) {
			this.traceInitIndent++;
			let n$1 = /* @__PURE__ */ new Array(this.traceInitIndent + 1).join("	");
			this.traceInitIndent < this.traceInitMaxIdent && console.log(`${n$1}--> <${e$1}>`);
			let { time: i$1, value: s$1 } = xi(t), o$1 = i$1 > 10 ? console.warn : console.log;
			return this.traceInitIndent < this.traceInitMaxIdent && o$1(`${n$1}<-- <${e$1}> time: ${i$1}ms`), this.traceInitIndent--, s$1;
		} else return t();
	}
};
function Af(r, e$1) {
	e$1.forEach((t) => {
		let n$1 = t.prototype;
		Object.getOwnPropertyNames(n$1).forEach((i$1) => {
			if (i$1 === "constructor") return;
			let s$1 = /* @__PURE__ */ Object.getOwnPropertyDescriptor(n$1, i$1);
			s$1 && (s$1.get || s$1.set) ? Object.defineProperty(r.prototype, i$1, s$1) : r.prototype[i$1] = t.prototype[i$1];
		});
	});
}
m(Af, "applyMixins");
var _n = /* @__PURE__ */ _t(qe, "", NaN, NaN, NaN, NaN, NaN, NaN);
Object.freeze(_n);
var Fe = /* @__PURE__ */ Object.freeze({
	recoveryEnabled: !1,
	maxLookahead: 3,
	dynamicTokensEnabled: !1,
	outputCst: !0,
	errorMessageProvider: Lt,
	nodeLocationTracking: "none",
	traceInitPerf: !1,
	skipValidations: !1
}), Ln = /* @__PURE__ */ Object.freeze({
	recoveryValueFunc: /* @__PURE__ */ m(() => {}, "recoveryValueFunc"),
	resyncEnabled: !0
}), ye;
(function(r) {
	r[r.INVALID_RULE_NAME = 0] = "INVALID_RULE_NAME", r[r.DUPLICATE_RULE_NAME = 1] = "DUPLICATE_RULE_NAME", r[r.INVALID_RULE_OVERRIDE = 2] = "INVALID_RULE_OVERRIDE", r[r.DUPLICATE_PRODUCTIONS = 3] = "DUPLICATE_PRODUCTIONS", r[r.UNRESOLVED_SUBRULE_REF = 4] = "UNRESOLVED_SUBRULE_REF", r[r.LEFT_RECURSION = 5] = "LEFT_RECURSION", r[r.NONE_LAST_EMPTY_ALT = 6] = "NONE_LAST_EMPTY_ALT", r[r.AMBIGUOUS_ALTS = 7] = "AMBIGUOUS_ALTS", r[r.CONFLICT_TOKENS_RULES_NAMESPACE = 8] = "CONFLICT_TOKENS_RULES_NAMESPACE", r[r.INVALID_TOKEN_NAME = 9] = "INVALID_TOKEN_NAME", r[r.NO_NON_EMPTY_LOOKAHEAD = 10] = "NO_NON_EMPTY_LOOKAHEAD", r[r.AMBIGUOUS_PREFIX_ALTS = 11] = "AMBIGUOUS_PREFIX_ALTS", r[r.TOO_MANY_ALTS = 12] = "TOO_MANY_ALTS", r[r.CUSTOM_LOOKAHEAD_VALIDATION = 13] = "CUSTOM_LOOKAHEAD_VALIDATION";
})(ye || (ye = {}));
function va(r = void 0) {
	return function() {
		return r;
	};
}
m(va, "EMPTY_ALT");
var Pi = class r {
	static {
		m(this, "Parser");
	}
	static performSelfAnalysis(e$1) {
		throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.");
	}
	performSelfAnalysis() {
		this.TRACE_INIT("performSelfAnalysis", () => {
			let e$1;
			this.selfAnalysisDone = !0;
			let t = this.className;
			this.TRACE_INIT("toFastProps", () => {
				Ei(this);
			}), this.TRACE_INIT("Grammar Recording", () => {
				try {
					this.enableRecording(), Zr(this.definedRulesNames, (i$1) => {
						let o$1 = this[i$1].originalGrammarAction, l$2;
						this.TRACE_INIT(`${i$1} Rule`, () => {
							l$2 = /* @__PURE__ */ this.topLevelRuleRecord(i$1, o$1);
						}), this.gastProductionsCache[i$1] = l$2;
					});
				} finally {
					this.disableRecording();
				}
			});
			let n$1 = [];
			if (this.TRACE_INIT("Grammar Resolving", () => {
				n$1 = /* @__PURE__ */ af({ rules: /* @__PURE__ */ Xr(this.gastProductionsCache) }), this.definitionErrors = /* @__PURE__ */ this.definitionErrors.concat(n$1);
			}), this.TRACE_INIT("Grammar Validations", () => {
				if (Cr(n$1) && this.skipValidations === !1) {
					let i$1 = /* @__PURE__ */ of({
						rules: /* @__PURE__ */ Xr(this.gastProductionsCache),
						tokenTypes: /* @__PURE__ */ Xr(this.tokensMap),
						errMsgProvider: it,
						grammarName: t
					}), s$1 = /* @__PURE__ */ Qc({
						lookaheadStrategy: this.lookaheadStrategy,
						rules: /* @__PURE__ */ Xr(this.gastProductionsCache),
						tokenTypes: /* @__PURE__ */ Xr(this.tokensMap),
						grammarName: t
					});
					this.definitionErrors = /* @__PURE__ */ this.definitionErrors.concat(i$1, s$1);
				}
			}), Cr(this.definitionErrors) && (this.recoveryEnabled && this.TRACE_INIT("computeAllProdsFollows", () => {
				this.resyncFollows = /* @__PURE__ */ hc(/* @__PURE__ */ Xr(this.gastProductionsCache));
			}), this.TRACE_INIT("ComputeLookaheadFunctions", () => {
				var i$1, s$1;
				(s$1 = (i$1 = this.lookaheadStrategy).initialize) === null || s$1 === void 0 || s$1.call(i$1, { rules: /* @__PURE__ */ Xr(this.gastProductionsCache) }), this.preComputeLookaheadFunctions(/* @__PURE__ */ Xr(this.gastProductionsCache));
			})), !r.DEFER_DEFINITION_ERRORS_HANDLING && !Cr(this.definitionErrors)) throw e$1 = /* @__PURE__ */ Jr(this.definitionErrors, (i$1) => i$1.message), /* @__PURE__ */ new Error(`Parser Definition Errors detected:
 ${e$1.join(`
-------------------------------
`)}`);
		});
	}
	constructor(e$1, t) {
		this.definitionErrors = [], this.selfAnalysisDone = !1;
		let n$1 = this;
		if (n$1.initErrorHandler(t), n$1.initLexerAdapter(), n$1.initLooksAhead(t), n$1.initRecognizerEngine(e$1, t), n$1.initRecoverable(t), n$1.initTreeBuilder(t), n$1.initContentAssist(), n$1.initGastRecorder(t), n$1.initPerformanceTracer(t), fm(t, "ignoredIssues")) throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);
		this.skipValidations = fm(t, "skipValidations") ? t.skipValidations : Fe.skipValidations;
	}
};
Pi.DEFER_DEFINITION_ERRORS_HANDLING = !1;
Af(Pi, [
	aa,
	ua,
	ha,
	pa,
	ga,
	ma,
	ya,
	Ta,
	Ra,
	Aa
]);
var bi = class extends Pi {
	static {
		m(this, "EmbeddedActionsParser");
	}
	constructor(e$1, t = Fe) {
		let n$1 = /* @__PURE__ */ _f(t);
		n$1.outputCst = !1, super(e$1, n$1);
	}
};
function hr(r, e$1, t) {
	return `${r.name}_${e$1}_${t}`;
}
m(hr, "buildATNKey");
var Kt = 1, om = 2, vf = 4, kf = 5;
var bn = 7, lm$1 = 8, um = 9, cm$1 = 10, fm$1 = 11, $f = 12, Mi$1 = class {
	static {
		m(this, "AbstractTransition");
	}
	constructor(e$1) {
		this.target = e$1;
	}
	isEpsilon() {
		return !1;
	}
}, On = class extends Mi$1 {
	static {
		m(this, "AtomTransition");
	}
	constructor(e$1, t) {
		super(e$1), this.tokenType = t;
	}
}, Di = class extends Mi$1 {
	static {
		m(this, "EpsilonTransition");
	}
	constructor(e$1) {
		super(e$1);
	}
	isEpsilon() {
		return !0;
	}
}, Pn = class extends Mi$1 {
	static {
		m(this, "RuleTransition");
	}
	constructor(e$1, t, n$1) {
		super(e$1), this.rule = t, this.followState = n$1;
	}
	isEpsilon() {
		return !0;
	}
};
function If(r) {
	let e$1 = {
		decisionMap: {},
		decisionStates: [],
		ruleToStartState: /* @__PURE__ */ new Map(),
		ruleToStopState: /* @__PURE__ */ new Map(),
		states: []
	};
	dm(e$1, r);
	let t = r.length;
	for (let n$1 = 0; n$1 < t; n$1++) {
		let i$1 = r[n$1], s$1 = /* @__PURE__ */ pr$1(e$1, i$1, i$1);
		s$1 !== void 0 && vm(e$1, i$1, s$1);
	}
	return e$1;
}
m(If, "createATN");
function dm(r, e$1) {
	let t = e$1.length;
	for (let n$1 = 0; n$1 < t; n$1++) {
		let i$1 = e$1[n$1], s$1 = /* @__PURE__ */ Re(r, i$1, void 0, { type: om }), o$1 = /* @__PURE__ */ Re(r, i$1, void 0, { type: bn });
		s$1.stop = o$1, r.ruleToStartState.set(i$1, s$1), r.ruleToStopState.set(i$1, o$1);
	}
}
m(dm, "createRuleStartAndStopATNStates");
function Nf$1(r, e$1, t) {
	return t instanceof D ? Ol(r, e$1, t.terminalType, t) : t instanceof H ? Am(r, e$1, t) : t instanceof X ? ym$1(r, e$1, t) : t instanceof z ? Tm$1(r, e$1, t) : t instanceof G ? hm(r, e$1, t) : t instanceof q$1 ? pm$1(r, e$1, t) : t instanceof Q ? mm(r, e$1, t) : t instanceof Z ? gm(r, e$1, t) : pr$1(r, e$1, t);
}
m(Nf$1, "atom");
function hm(r, e$1, t) {
	let n$1 = /* @__PURE__ */ Re(r, e$1, t, { type: kf });
	Vt(r, n$1);
	return Sf(r, e$1, t, /* @__PURE__ */ Mn(r, e$1, n$1, t, /* @__PURE__ */ pr$1(r, e$1, t)));
}
m(hm, "repetition");
function pm$1(r, e$1, t) {
	let n$1 = /* @__PURE__ */ Re(r, e$1, t, { type: kf });
	Vt(r, n$1);
	let i$1 = /* @__PURE__ */ Mn(r, e$1, n$1, t, /* @__PURE__ */ pr$1(r, e$1, t)), s$1 = /* @__PURE__ */ Ol(r, e$1, t.separator, t);
	return Sf(r, e$1, t, i$1, s$1);
}
m(pm$1, "repetitionSep");
function mm(r, e$1, t) {
	let n$1 = /* @__PURE__ */ Re(r, e$1, t, { type: vf });
	Vt(r, n$1);
	return Cf(r, e$1, t, /* @__PURE__ */ Mn(r, e$1, n$1, t, /* @__PURE__ */ pr$1(r, e$1, t)));
}
m(mm, "repetitionMandatory");
function gm(r, e$1, t) {
	let n$1 = /* @__PURE__ */ Re(r, e$1, t, { type: vf });
	Vt(r, n$1);
	let i$1 = /* @__PURE__ */ Mn(r, e$1, n$1, t, /* @__PURE__ */ pr$1(r, e$1, t)), s$1 = /* @__PURE__ */ Ol(r, e$1, t.separator, t);
	return Cf(r, e$1, t, i$1, s$1);
}
m(gm, "repetitionMandatorySep");
function ym$1(r, e$1, t) {
	let n$1 = /* @__PURE__ */ Re(r, e$1, t, { type: Kt });
	Vt(r, n$1);
	let i$1 = /* @__PURE__ */ Jr(t.definition, (o$1) => Nf$1(r, e$1, o$1));
	return Mn(r, e$1, n$1, t, ...i$1);
}
m(ym$1, "alternation");
function Tm$1(r, e$1, t) {
	let n$1 = /* @__PURE__ */ Re(r, e$1, t, { type: Kt });
	Vt(r, n$1);
	return Rm(r, e$1, t, /* @__PURE__ */ Mn(r, e$1, n$1, t, /* @__PURE__ */ pr$1(r, e$1, t)));
}
m(Tm$1, "option");
function pr$1(r, e$1, t) {
	let n$1 = /* @__PURE__ */ fn(/* @__PURE__ */ Jr(t.definition, (i$1) => Nf$1(r, e$1, i$1)), (i$1) => i$1 !== void 0);
	return n$1.length === 1 ? n$1[0] : n$1.length === 0 ? void 0 : Em(r, n$1);
}
m(pr$1, "block");
function Cf(r, e$1, t, n$1, i$1) {
	let s$1 = n$1.left, o$1 = n$1.right, l$2 = /* @__PURE__ */ Re(r, e$1, t, { type: fm$1 });
	Vt(r, l$2);
	let u$2 = /* @__PURE__ */ Re(r, e$1, t, { type: $f });
	return s$1.loopback = l$2, u$2.loopback = l$2, r.decisionMap[hr(e$1, i$1 ? "RepetitionMandatoryWithSeparator" : "RepetitionMandatory", t.idx)] = l$2, me(o$1, l$2), i$1 === void 0 ? (me(l$2, s$1), me(l$2, u$2)) : (me(l$2, u$2), me(l$2, i$1.left), me(i$1.right, s$1)), {
		left: s$1,
		right: u$2
	};
}
m(Cf, "plus");
function Sf(r, e$1, t, n$1, i$1) {
	let s$1 = n$1.left, o$1 = n$1.right, l$2 = /* @__PURE__ */ Re(r, e$1, t, { type: cm$1 });
	Vt(r, l$2);
	let u$2 = /* @__PURE__ */ Re(r, e$1, t, { type: $f }), c$2 = /* @__PURE__ */ Re(r, e$1, t, { type: um });
	return l$2.loopback = c$2, u$2.loopback = c$2, me(l$2, s$1), me(l$2, u$2), me(o$1, c$2), i$1 !== void 0 ? (me(c$2, u$2), me(c$2, i$1.left), me(i$1.right, s$1)) : me(c$2, l$2), r.decisionMap[hr(e$1, i$1 ? "RepetitionWithSeparator" : "Repetition", t.idx)] = l$2, {
		left: l$2,
		right: u$2
	};
}
m(Sf, "star");
function Rm(r, e$1, t, n$1) {
	let i$1 = n$1.left, s$1 = n$1.right;
	return me(i$1, s$1), r.decisionMap[hr(e$1, "Option", t.idx)] = i$1, n$1;
}
m(Rm, "optional");
function Vt(r, e$1) {
	return r.decisionStates.push(e$1), e$1.decision = r.decisionStates.length - 1, e$1.decision;
}
m(Vt, "defineDecisionState");
function Mn(r, e$1, t, n$1, ...i$1) {
	let s$1 = /* @__PURE__ */ Re(r, e$1, n$1, {
		type: lm$1,
		start: t
	});
	t.end = s$1;
	for (let l$2 of i$1) l$2 !== void 0 ? (me(t, l$2.left), me(l$2.right, s$1)) : me(t, s$1);
	let o$1 = {
		left: t,
		right: s$1
	};
	return r.decisionMap[hr(e$1, /* @__PURE__ */ xm(n$1), n$1.idx)] = t, o$1;
}
m(Mn, "makeAlts");
function xm(r) {
	if (r instanceof X) return "Alternation";
	if (r instanceof z) return "Option";
	if (r instanceof G) return "Repetition";
	if (r instanceof q$1) return "RepetitionWithSeparator";
	if (r instanceof Q) return "RepetitionMandatory";
	if (r instanceof Z) return "RepetitionMandatoryWithSeparator";
	throw new Error("Invalid production type encountered");
}
m(xm, "getProdType");
function Em(r, e$1) {
	let t = e$1.length;
	for (let s$1 = 0; s$1 < t - 1; s$1++) {
		let o$1 = e$1[s$1], l$2;
		o$1.left.transitions.length === 1 && (l$2 = o$1.left.transitions[0]);
		let u$2 = l$2 instanceof Pn, c$2 = l$2, f$1 = e$1[s$1 + 1].left;
		o$1.left.type === Kt && o$1.right.type === Kt && l$2 !== void 0 && (u$2 && c$2.followState === o$1.right || l$2.target === o$1.right) ? (u$2 ? c$2.followState = f$1 : l$2.target = f$1, km(r, o$1.right)) : me(o$1.right, f$1);
	}
	let n$1 = e$1[0], i$1 = e$1[t - 1];
	return {
		left: n$1.left,
		right: i$1.right
	};
}
m(Em, "makeBlock");
function Ol(r, e$1, t, n$1) {
	let i$1 = /* @__PURE__ */ Re(r, e$1, n$1, { type: Kt }), s$1 = /* @__PURE__ */ Re(r, e$1, n$1, { type: Kt });
	return Pl(i$1, new On(s$1, t)), {
		left: i$1,
		right: s$1
	};
}
m(Ol, "tokenRef");
function Am(r, e$1, t) {
	let n$1 = t.referencedRule, i$1 = /* @__PURE__ */ r.ruleToStartState.get(n$1), s$1 = /* @__PURE__ */ Re(r, e$1, t, { type: Kt }), o$1 = /* @__PURE__ */ Re(r, e$1, t, { type: Kt }), l$2 = new Pn(i$1, n$1, o$1);
	return Pl(s$1, l$2), {
		left: s$1,
		right: o$1
	};
}
m(Am, "ruleRef");
function vm(r, e$1, t) {
	let n$1 = /* @__PURE__ */ r.ruleToStartState.get(e$1);
	me(n$1, t.left);
	let i$1 = /* @__PURE__ */ r.ruleToStopState.get(e$1);
	return me(t.right, i$1), {
		left: n$1,
		right: i$1
	};
}
m(vm, "buildRuleHandle");
function me(r, e$1) {
	let t = new Di(e$1);
	Pl(r, t);
}
m(me, "epsilon");
function Re(r, e$1, t, n$1) {
	let i$1 = /* @__PURE__ */ Object.assign({
		atn: r,
		production: t,
		epsilonOnlyTransitions: !1,
		rule: e$1,
		transitions: [],
		nextTokenWithinRule: [],
		stateNumber: r.states.length
	}, n$1);
	return r.states.push(i$1), i$1;
}
m(Re, "newState");
function Pl(r, e$1) {
	r.transitions.length === 0 && (r.epsilonOnlyTransitions = /* @__PURE__ */ e$1.isEpsilon()), r.transitions.push(e$1);
}
m(Pl, "addTransition");
function km(r, e$1) {
	r.states.splice(/* @__PURE__ */ r.states.indexOf(e$1), 1);
}
m(km, "removeState");
var Fi = {}, Dn = class {
	static {
		m(this, "ATNConfigSet");
	}
	constructor() {
		this.map = {}, this.configs = [];
	}
	get size() {
		return this.configs.length;
	}
	finalize() {
		this.map = {};
	}
	add(e$1) {
		let t = /* @__PURE__ */ bl(e$1);
		t in this.map || (this.map[t] = this.configs.length, this.configs.push(e$1));
	}
	get elements() {
		return this.configs;
	}
	get alts() {
		return Jr(this.configs, (e$1) => e$1.alt);
	}
	get key() {
		let e$1 = "";
		for (let t in this.map) e$1 += t + ":";
		return e$1;
	}
};
function bl(r, e$1 = !0) {
	return `${e$1 ? `a${r.alt}` : ""}s${r.state.stateNumber}:${r.stack.map((t) => t.stateNumber.toString()).join("_")}`;
}
m(bl, "getATNConfigKey");
function $m(r, e$1) {
	let t = {};
	return (n$1) => {
		let i$1 = /* @__PURE__ */ n$1.toString(), s$1 = t[i$1];
		return s$1 !== void 0 || (s$1 = {
			atnStartState: r,
			decision: e$1,
			states: {}
		}, t[i$1] = s$1), s$1;
	};
}
m($m, "createDFACache");
var ka = class {
	static {
		m(this, "PredicateSet");
	}
	constructor() {
		this.predicates = [];
	}
	is(e$1) {
		return e$1 >= this.predicates.length || this.predicates[e$1];
	}
	set(e$1, t) {
		this.predicates[e$1] = t;
	}
	toString() {
		let e$1 = "", t = this.predicates.length;
		for (let n$1 = 0; n$1 < t; n$1++) e$1 += this.predicates[n$1] === !0 ? "1" : "0";
		return e$1;
	}
}, wf = new ka(), Gi = class extends Ot {
	static {
		m(this, "LLStarLookaheadStrategy");
	}
	constructor(e$1) {
		var t;
		super(), this.logging = (t = e$1?.logging) !== null && t !== void 0 ? t : (n$1) => console.log(n$1);
	}
	initialize(e$1) {
		this.atn = /* @__PURE__ */ If(e$1.rules), this.dfas = /* @__PURE__ */ Im(this.atn);
	}
	validateAmbiguousAlternationAlternatives() {
		return [];
	}
	validateEmptyOrAlternatives() {
		return [];
	}
	buildLookaheadForAlternation(e$1) {
		let { prodOccurrence: t, rule: n$1, hasPredicates: i$1, dynamicTokensEnabled: s$1 } = e$1, o$1 = this.dfas, l$2 = this.logging, u$2 = /* @__PURE__ */ hr(n$1, "Alternation", t), f$1 = this.atn.decisionMap[u$2].decision, d$1 = /* @__PURE__ */ Jr(/* @__PURE__ */ na({
			maxLookahead: 1,
			occurrence: t,
			prodType: "Alternation",
			rule: n$1
		}), (h$4) => Jr(h$4, (p$2) => p$2[0]));
		if (_f$1(d$1, !1) && !s$1) {
			let h$4 = /* @__PURE__ */ Rn(d$1, (p$2, g$3, y$1) => (Zr(g$3, (v$3) => {
				v$3 && (p$2[v$3.tokenTypeIdx] = y$1, Zr(v$3.categoryMatches, (x$2) => {
					p$2[x$2] = y$1;
				}));
			}), p$2), {});
			return i$1 ? function(p$2) {
				var g$3;
				let v$3 = h$4[(/* @__PURE__ */ this.LA(1)).tokenTypeIdx];
				if (p$2 !== void 0 && v$3 !== void 0) {
					let x$2 = (g$3 = p$2[v$3]) === null || g$3 === void 0 ? void 0 : g$3.GATE;
					if (x$2 !== void 0 && x$2.call(this) === !1) return;
				}
				return v$3;
			} : function() {
				return h$4[(/* @__PURE__ */ this.LA(1)).tokenTypeIdx];
			};
		} else return i$1 ? function(h$4) {
			let p$2 = new ka(), g$3 = h$4 === void 0 ? 0 : h$4.length;
			for (let v$3 = 0; v$3 < g$3; v$3++) {
				let x$2 = h$4?.[v$3].GATE;
				p$2.set(v$3, x$2 === void 0 || x$2.call(this));
			}
			let y$1 = /* @__PURE__ */ Ml.call(this, o$1, f$1, p$2, l$2);
			return typeof y$1 == "number" ? y$1 : void 0;
		} : function() {
			let h$4 = /* @__PURE__ */ Ml.call(this, o$1, f$1, wf, l$2);
			return typeof h$4 == "number" ? h$4 : void 0;
		};
	}
	buildLookaheadForOptional(e$1) {
		let { prodOccurrence: t, rule: n$1, prodType: i$1, dynamicTokensEnabled: s$1 } = e$1, o$1 = this.dfas, l$2 = this.logging, u$2 = /* @__PURE__ */ hr(n$1, i$1, t), f$1 = this.atn.decisionMap[u$2].decision, d$1 = /* @__PURE__ */ Jr(/* @__PURE__ */ na({
			maxLookahead: 1,
			occurrence: t,
			prodType: i$1,
			rule: n$1
		}), (h$4) => Jr(h$4, (p$2) => p$2[0]));
		if (_f$1(d$1) && d$1[0][0] && !s$1) {
			let h$4 = d$1[0], p$2 = /* @__PURE__ */ Qr(h$4);
			if (p$2.length === 1 && Cr(p$2[0].categoryMatches)) {
				let y$1 = p$2[0].tokenTypeIdx;
				return function() {
					return this.LA(1).tokenTypeIdx === y$1;
				};
			} else {
				let g$3 = /* @__PURE__ */ Rn(p$2, (y$1, v$3) => (v$3 !== void 0 && (y$1[v$3.tokenTypeIdx] = !0, Zr(v$3.categoryMatches, (x$2) => {
					y$1[x$2] = !0;
				})), y$1), {});
				return function() {
					return g$3[(/* @__PURE__ */ this.LA(1)).tokenTypeIdx] === !0;
				};
			}
		}
		return function() {
			let h$4 = /* @__PURE__ */ Ml.call(this, o$1, f$1, wf, l$2);
			return typeof h$4 == "object" ? !1 : h$4 === 0;
		};
	}
};
function _f$1(r, e$1 = !0) {
	let t = /* @__PURE__ */ new Set();
	for (let n$1 of r) {
		let i$1 = /* @__PURE__ */ new Set();
		for (let s$1 of n$1) {
			if (s$1 === void 0) {
				if (e$1) break;
				return !1;
			}
			let o$1 = /* @__PURE__ */ [s$1.tokenTypeIdx].concat(s$1.categoryMatches);
			for (let l$2 of o$1) if (t.has(l$2)) {
				if (!i$1.has(l$2)) return !1;
			} else t.add(l$2), i$1.add(l$2);
		}
	}
	return !0;
}
m(_f$1, "isLL1Sequence");
function Im(r) {
	let e$1 = r.decisionStates.length, t = /* @__PURE__ */ Array(e$1);
	for (let n$1 = 0; n$1 < e$1; n$1++) t[n$1] = /* @__PURE__ */ $m(r.decisionStates[n$1], n$1);
	return t;
}
m(Im, "initATNSimulator");
function Ml(r, e$1, t, n$1) {
	let i$1 = /* @__PURE__ */ r[e$1](t), s$1 = i$1.start;
	if (s$1 === void 0) {
		let l$2 = /* @__PURE__ */ Dm(i$1.atnStartState);
		s$1 = /* @__PURE__ */ Pf(i$1, /* @__PURE__ */ Of(l$2)), i$1.start = s$1;
	}
	return Nm.apply(this, [
		i$1,
		s$1,
		t,
		n$1
	]);
}
m(Ml, "adaptivePredict");
function Nm(r, e$1, t, n$1) {
	let i$1 = e$1, s$1 = 1, o$1 = [], l$2 = /* @__PURE__ */ this.LA(s$1++);
	for (;;) {
		let u$2 = /* @__PURE__ */ Om(i$1, l$2);
		if (u$2 === void 0 && (u$2 = /* @__PURE__ */ Cm.apply(this, [
			r,
			i$1,
			l$2,
			s$1,
			t,
			n$1
		])), u$2 === Fi) return Lm(o$1, i$1, l$2);
		if (u$2.isAcceptState === !0) return u$2.prediction;
		i$1 = u$2, o$1.push(l$2), l$2 = /* @__PURE__ */ this.LA(s$1++);
	}
}
m(Nm, "performLookahead");
function Cm(r, e$1, t, n$1, i$1, s$1) {
	let o$1 = /* @__PURE__ */ Pm(e$1.configs, t, i$1);
	if (o$1.size === 0) return Lf(r, e$1, t, Fi), Fi;
	let l$2 = /* @__PURE__ */ Of(o$1), u$2 = /* @__PURE__ */ Mm(o$1, i$1);
	if (u$2 !== void 0) l$2.isAcceptState = !0, l$2.prediction = u$2, l$2.configs.uniqueAlt = u$2;
	else if (Bm(o$1)) {
		let c$2 = /* @__PURE__ */ ym(o$1.alts);
		l$2.isAcceptState = !0, l$2.prediction = c$2, l$2.configs.uniqueAlt = c$2, Sm.apply(this, [
			r,
			n$1,
			o$1.alts,
			s$1
		]);
	}
	return l$2 = /* @__PURE__ */ Lf(r, e$1, t, l$2), l$2;
}
m(Cm, "computeLookaheadTarget");
function Sm(r, e$1, t, n$1) {
	let i$1 = [];
	for (let c$2 = 1; c$2 <= e$1; c$2++) i$1.push(this.LA(c$2).tokenType);
	let s$1 = r.atnStartState, o$1 = s$1.rule, l$2 = s$1.production;
	n$1(/* @__PURE__ */ wm({
		topLevelRule: o$1,
		ambiguityIndices: t,
		production: l$2,
		prefixPath: i$1
	}));
}
m(Sm, "reportLookaheadAmbiguity");
function wm(r) {
	let e$1 = /* @__PURE__ */ Jr(r.prefixPath, (i$1) => wt(i$1)).join(", "), t = r.production.idx === 0 ? "" : r.production.idx, n$1 = `Ambiguous Alternatives Detected: <${r.ambiguityIndices.join(", ")}> in <${_m(r.production)}${t}> inside <${r.topLevelRule.name}> Rule,
<${e$1}> may appears as a prefix path in all these alternatives.
`;
	return n$1 = n$1 + `See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`, n$1;
}
m(wm, "buildAmbiguityError");
function _m(r) {
	if (r instanceof H) return "SUBRULE";
	if (r instanceof z) return "OPTION";
	if (r instanceof X) return "OR";
	if (r instanceof Q) return "AT_LEAST_ONE";
	if (r instanceof Z) return "AT_LEAST_ONE_SEP";
	if (r instanceof q$1) return "MANY_SEP";
	if (r instanceof G) return "MANY";
	if (r instanceof D) return "CONSUME";
	throw Error("non exhaustive match");
}
m(_m, "getProductionDslName");
function Lm(r, e$1, t) {
	let n$1 = /* @__PURE__ */ zi(e$1.configs.elements, (s$1) => s$1.state.transitions);
	return {
		actualToken: t,
		possibleTokenTypes: /* @__PURE__ */ s0(/* @__PURE__ */ n$1.filter((s$1) => s$1 instanceof On).map((s$1) => s$1.tokenType), (s$1) => s$1.tokenTypeIdx),
		tokenPath: r
	};
}
m(Lm, "buildAdaptivePredictError");
function Om(r, e$1) {
	return r.edges[e$1.tokenTypeIdx];
}
m(Om, "getExistingTargetState");
function Pm(r, e$1, t) {
	let n$1 = new Dn(), i$1 = [];
	for (let o$1 of r.elements) {
		if (t.is(o$1.alt) === !1) continue;
		if (o$1.state.type === bn) {
			i$1.push(o$1);
			continue;
		}
		let l$2 = o$1.state.transitions.length;
		for (let u$2 = 0; u$2 < l$2; u$2++) {
			let c$2 = o$1.state.transitions[u$2], f$1 = /* @__PURE__ */ bm(c$2, e$1);
			f$1 !== void 0 && n$1.add({
				state: f$1,
				alt: o$1.alt,
				stack: o$1.stack
			});
		}
	}
	let s$1;
	if (i$1.length === 0 && n$1.size === 1 && (s$1 = n$1), s$1 === void 0) {
		s$1 = new Dn();
		for (let o$1 of n$1.elements) $a(o$1, s$1);
	}
	if (i$1.length > 0 && !Gm(s$1)) for (let o$1 of i$1) s$1.add(o$1);
	return s$1;
}
m(Pm, "computeReachSet");
function bm(r, e$1) {
	if (r instanceof On && ki(e$1, r.tokenType)) return r.target;
}
m(bm, "getReachableTarget");
function Mm(r, e$1) {
	let t;
	for (let n$1 of r.elements) if (e$1.is(n$1.alt) === !0) {
		if (t === void 0) t = n$1.alt;
		else if (t !== n$1.alt) return;
	}
	return t;
}
m(Mm, "getUniqueAlt");
function Of(r) {
	return {
		configs: r,
		edges: {},
		isAcceptState: !1,
		prediction: -1
	};
}
m(Of, "newDFAState");
function Lf(r, e$1, t, n$1) {
	return n$1 = /* @__PURE__ */ Pf(r, n$1), e$1.edges[t.tokenTypeIdx] = n$1, n$1;
}
m(Lf, "addDFAEdge");
function Pf(r, e$1) {
	if (e$1 === Fi) return e$1;
	let t = e$1.configs.key, n$1 = r.states[t];
	return n$1 !== void 0 ? n$1 : (e$1.configs.finalize(), r.states[t] = e$1, e$1);
}
m(Pf, "addDFAState");
function Dm(r) {
	let e$1 = new Dn(), t = r.transitions.length;
	for (let n$1 = 0; n$1 < t; n$1++) {
		let s$1 = {
			state: r.transitions[n$1].target,
			alt: n$1,
			stack: []
		};
		$a(s$1, e$1);
	}
	return e$1;
}
m(Dm, "computeStartState");
function $a(r, e$1) {
	let t = r.state;
	if (t.type === bn) {
		if (r.stack.length > 0) {
			let i$1 = [...r.stack], o$1 = {
				state: /* @__PURE__ */ i$1.pop(),
				alt: r.alt,
				stack: i$1
			};
			$a(o$1, e$1);
		} else e$1.add(r);
		return;
	}
	t.epsilonOnlyTransitions || e$1.add(r);
	let n$1 = t.transitions.length;
	for (let i$1 = 0; i$1 < n$1; i$1++) {
		let s$1 = t.transitions[i$1], o$1 = /* @__PURE__ */ Fm(r, s$1);
		o$1 !== void 0 && $a(o$1, e$1);
	}
}
m($a, "closure");
function Fm(r, e$1) {
	if (e$1 instanceof Di) return {
		state: e$1.target,
		alt: r.alt,
		stack: r.stack
	};
	if (e$1 instanceof Pn) {
		let t = [...r.stack, e$1.followState];
		return {
			state: e$1.target,
			alt: r.alt,
			stack: t
		};
	}
}
m(Fm, "getEpsilonTarget");
function Gm(r) {
	for (let e$1 of r.elements) if (e$1.state.type === bn) return !0;
	return !1;
}
m(Gm, "hasConfigInRuleStopState");
function Um(r) {
	for (let e$1 of r.elements) if (e$1.state.type !== bn) return !1;
	return !0;
}
m(Um, "allConfigsInRuleStopStates");
function Bm(r) {
	if (Um(r)) return !0;
	let e$1 = /* @__PURE__ */ Wm(r.elements);
	return Km(e$1) && !Vm(e$1);
}
m(Bm, "hasConflictTerminatingPrediction");
function Wm(r) {
	let e$1 = /* @__PURE__ */ new Map();
	for (let t of r) {
		let n$1 = /* @__PURE__ */ bl(t, !1), i$1 = /* @__PURE__ */ e$1.get(n$1);
		i$1 === void 0 && (i$1 = {}, e$1.set(n$1, i$1)), i$1[t.alt] = !0;
	}
	return e$1;
}
m(Wm, "getConflictingAltSets");
function Km(r) {
	for (let e$1 of Array.from(/* @__PURE__ */ r.values())) if (Object.keys(e$1).length > 1) return !0;
	return !1;
}
m(Km, "hasConflictingAltSet");
function Vm(r) {
	for (let e$1 of Array.from(/* @__PURE__ */ r.values())) if (Object.keys(e$1).length === 1) return !0;
	return !1;
}
m(Vm, "hasStateAssociatedWithOneAlt");
var bf;
(function(r) {
	function e$1(t) {
		return typeof t == "string";
	}
	m(e$1, "is"), r.is = e$1;
})(bf || (bf = {}));
var Dl;
(function(r) {
	function e$1(t) {
		return typeof t == "string";
	}
	m(e$1, "is"), r.is = e$1;
})(Dl || (Dl = {}));
var Mf;
(function(r) {
	r.MIN_VALUE = -2147483648, r.MAX_VALUE = 2147483647;
	function e$1(t) {
		return typeof t == "number" && r.MIN_VALUE <= t && t <= r.MAX_VALUE;
	}
	m(e$1, "is"), r.is = e$1;
})(Mf || (Mf = {}));
var Ia;
(function(r) {
	r.MIN_VALUE = 0, r.MAX_VALUE = 2147483647;
	function e$1(t) {
		return typeof t == "number" && r.MIN_VALUE <= t && t <= r.MAX_VALUE;
	}
	m(e$1, "is"), r.is = e$1;
})(Ia || (Ia = {}));
var W;
(function(r) {
	function e$1(n$1, i$1) {
		return n$1 === Number.MAX_VALUE && (n$1 = Ia.MAX_VALUE), i$1 === Number.MAX_VALUE && (i$1 = Ia.MAX_VALUE), {
			line: n$1,
			character: i$1
		};
	}
	m(e$1, "create"), r.create = e$1;
	function t(n$1) {
		let i$1 = n$1;
		return m$2.objectLiteral(i$1) && m$2.uinteger(i$1.line) && m$2.uinteger(i$1.character);
	}
	m(t, "is"), r.is = t;
})(W || (W = {}));
var U;
(function(r) {
	function e$1(n$1, i$1, s$1, o$1) {
		if (m$2.uinteger(n$1) && m$2.uinteger(i$1) && m$2.uinteger(s$1) && m$2.uinteger(o$1)) return {
			start: /* @__PURE__ */ W.create(n$1, i$1),
			end: /* @__PURE__ */ W.create(s$1, o$1)
		};
		if (W.is(n$1) && W.is(i$1)) return {
			start: n$1,
			end: i$1
		};
		throw new Error(`Range#create called with invalid arguments[${n$1}, ${i$1}, ${s$1}, ${o$1}]`);
	}
	m(e$1, "create"), r.create = e$1;
	function t(n$1) {
		let i$1 = n$1;
		return m$2.objectLiteral(i$1) && W.is(i$1.start) && W.is(i$1.end);
	}
	m(t, "is"), r.is = t;
})(U || (U = {}));
var Na;
(function(r) {
	function e$1(n$1, i$1) {
		return {
			uri: n$1,
			range: i$1
		};
	}
	m(e$1, "create"), r.create = e$1;
	function t(n$1) {
		let i$1 = n$1;
		return m$2.objectLiteral(i$1) && U.is(i$1.range) && (m$2.string(i$1.uri) || m$2.undefined(i$1.uri));
	}
	m(t, "is"), r.is = t;
})(Na || (Na = {}));
var Df$1;
(function(r) {
	function e$1(n$1, i$1, s$1, o$1) {
		return {
			targetUri: n$1,
			targetRange: i$1,
			targetSelectionRange: s$1,
			originSelectionRange: o$1
		};
	}
	m(e$1, "create"), r.create = e$1;
	function t(n$1) {
		let i$1 = n$1;
		return m$2.objectLiteral(i$1) && U.is(i$1.targetRange) && m$2.string(i$1.targetUri) && U.is(i$1.targetSelectionRange) && (U.is(i$1.originSelectionRange) || m$2.undefined(i$1.originSelectionRange));
	}
	m(t, "is"), r.is = t;
})(Df$1 || (Df$1 = {}));
var Fl;
(function(r) {
	function e$1(n$1, i$1, s$1, o$1) {
		return {
			red: n$1,
			green: i$1,
			blue: s$1,
			alpha: o$1
		};
	}
	m(e$1, "create"), r.create = e$1;
	function t(n$1) {
		let i$1 = n$1;
		return m$2.objectLiteral(i$1) && m$2.numberRange(i$1.red, 0, 1) && m$2.numberRange(i$1.green, 0, 1) && m$2.numberRange(i$1.blue, 0, 1) && m$2.numberRange(i$1.alpha, 0, 1);
	}
	m(t, "is"), r.is = t;
})(Fl || (Fl = {}));
var Ff;
(function(r) {
	function e$1(n$1, i$1) {
		return {
			range: n$1,
			color: i$1
		};
	}
	m(e$1, "create"), r.create = e$1;
	function t(n$1) {
		let i$1 = n$1;
		return m$2.objectLiteral(i$1) && U.is(i$1.range) && Fl.is(i$1.color);
	}
	m(t, "is"), r.is = t;
})(Ff || (Ff = {}));
var Gf;
(function(r) {
	function e$1(n$1, i$1, s$1) {
		return {
			label: n$1,
			textEdit: i$1,
			additionalTextEdits: s$1
		};
	}
	m(e$1, "create"), r.create = e$1;
	function t(n$1) {
		let i$1 = n$1;
		return m$2.objectLiteral(i$1) && m$2.string(i$1.label) && (m$2.undefined(i$1.textEdit) || Gn.is(i$1)) && (m$2.undefined(i$1.additionalTextEdits) || m$2.typedArray(i$1.additionalTextEdits, Gn.is));
	}
	m(t, "is"), r.is = t;
})(Gf || (Gf = {}));
var Uf;
(function(r) {
	r.Comment = "comment", r.Imports = "imports", r.Region = "region";
})(Uf || (Uf = {}));
var Bf;
(function(r) {
	function e$1(n$1, i$1, s$1, o$1, l$2, u$2) {
		let c$2 = {
			startLine: n$1,
			endLine: i$1
		};
		return m$2.defined(s$1) && (c$2.startCharacter = s$1), m$2.defined(o$1) && (c$2.endCharacter = o$1), m$2.defined(l$2) && (c$2.kind = l$2), m$2.defined(u$2) && (c$2.collapsedText = u$2), c$2;
	}
	m(e$1, "create"), r.create = e$1;
	function t(n$1) {
		let i$1 = n$1;
		return m$2.objectLiteral(i$1) && m$2.uinteger(i$1.startLine) && m$2.uinteger(i$1.startLine) && (m$2.undefined(i$1.startCharacter) || m$2.uinteger(i$1.startCharacter)) && (m$2.undefined(i$1.endCharacter) || m$2.uinteger(i$1.endCharacter)) && (m$2.undefined(i$1.kind) || m$2.string(i$1.kind));
	}
	m(t, "is"), r.is = t;
})(Bf || (Bf = {}));
var Gl;
(function(r) {
	function e$1(n$1, i$1) {
		return {
			location: n$1,
			message: i$1
		};
	}
	m(e$1, "create"), r.create = e$1;
	function t(n$1) {
		let i$1 = n$1;
		return m$2.defined(i$1) && Na.is(i$1.location) && m$2.string(i$1.message);
	}
	m(t, "is"), r.is = t;
})(Gl || (Gl = {}));
var Wf;
(function(r) {
	r.Error = 1, r.Warning = 2, r.Information = 3, r.Hint = 4;
})(Wf || (Wf = {}));
var Kf;
(function(r) {
	r.Unnecessary = 1, r.Deprecated = 2;
})(Kf || (Kf = {}));
var Vf;
(function(r) {
	function e$1(t) {
		let n$1 = t;
		return m$2.objectLiteral(n$1) && m$2.string(n$1.href);
	}
	m(e$1, "is"), r.is = e$1;
})(Vf || (Vf = {}));
var Ca;
(function(r) {
	function e$1(n$1, i$1, s$1, o$1, l$2, u$2) {
		let c$2 = {
			range: n$1,
			message: i$1
		};
		return m$2.defined(s$1) && (c$2.severity = s$1), m$2.defined(o$1) && (c$2.code = o$1), m$2.defined(l$2) && (c$2.source = l$2), m$2.defined(u$2) && (c$2.relatedInformation = u$2), c$2;
	}
	m(e$1, "create"), r.create = e$1;
	function t(n$1) {
		var i$1;
		let s$1 = n$1;
		return m$2.defined(s$1) && U.is(s$1.range) && m$2.string(s$1.message) && (m$2.number(s$1.severity) || m$2.undefined(s$1.severity)) && (m$2.integer(s$1.code) || m$2.string(s$1.code) || m$2.undefined(s$1.code)) && (m$2.undefined(s$1.codeDescription) || m$2.string((i$1 = s$1.codeDescription) === null || i$1 === void 0 ? void 0 : i$1.href)) && (m$2.string(s$1.source) || m$2.undefined(s$1.source)) && (m$2.undefined(s$1.relatedInformation) || m$2.typedArray(s$1.relatedInformation, Gl.is));
	}
	m(t, "is"), r.is = t;
})(Ca || (Ca = {}));
var Fn;
(function(r) {
	function e$1(n$1, i$1, ...s$1) {
		let o$1 = {
			title: n$1,
			command: i$1
		};
		return m$2.defined(s$1) && s$1.length > 0 && (o$1.arguments = s$1), o$1;
	}
	m(e$1, "create"), r.create = e$1;
	function t(n$1) {
		let i$1 = n$1;
		return m$2.defined(i$1) && m$2.string(i$1.title) && m$2.string(i$1.command);
	}
	m(t, "is"), r.is = t;
})(Fn || (Fn = {}));
var Gn;
(function(r) {
	function e$1(s$1, o$1) {
		return {
			range: s$1,
			newText: o$1
		};
	}
	m(e$1, "replace"), r.replace = e$1;
	function t(s$1, o$1) {
		return {
			range: {
				start: s$1,
				end: s$1
			},
			newText: o$1
		};
	}
	m(t, "insert"), r.insert = t;
	function n$1(s$1) {
		return {
			range: s$1,
			newText: ""
		};
	}
	m(n$1, "del"), r.del = n$1;
	function i$1(s$1) {
		let o$1 = s$1;
		return m$2.objectLiteral(o$1) && m$2.string(o$1.newText) && U.is(o$1.range);
	}
	m(i$1, "is"), r.is = i$1;
})(Gn || (Gn = {}));
var Ul;
(function(r) {
	function e$1(n$1, i$1, s$1) {
		let o$1 = { label: n$1 };
		return i$1 !== void 0 && (o$1.needsConfirmation = i$1), s$1 !== void 0 && (o$1.description = s$1), o$1;
	}
	m(e$1, "create"), r.create = e$1;
	function t(n$1) {
		let i$1 = n$1;
		return m$2.objectLiteral(i$1) && m$2.string(i$1.label) && (m$2.boolean(i$1.needsConfirmation) || i$1.needsConfirmation === void 0) && (m$2.string(i$1.description) || i$1.description === void 0);
	}
	m(t, "is"), r.is = t;
})(Ul || (Ul = {}));
var Un;
(function(r) {
	function e$1(t) {
		let n$1 = t;
		return m$2.string(n$1);
	}
	m(e$1, "is"), r.is = e$1;
})(Un || (Un = {}));
var jf;
(function(r) {
	function e$1(s$1, o$1, l$2) {
		return {
			range: s$1,
			newText: o$1,
			annotationId: l$2
		};
	}
	m(e$1, "replace"), r.replace = e$1;
	function t(s$1, o$1, l$2) {
		return {
			range: {
				start: s$1,
				end: s$1
			},
			newText: o$1,
			annotationId: l$2
		};
	}
	m(t, "insert"), r.insert = t;
	function n$1(s$1, o$1) {
		return {
			range: s$1,
			newText: "",
			annotationId: o$1
		};
	}
	m(n$1, "del"), r.del = n$1;
	function i$1(s$1) {
		let o$1 = s$1;
		return Gn.is(o$1) && (Ul.is(o$1.annotationId) || Un.is(o$1.annotationId));
	}
	m(i$1, "is"), r.is = i$1;
})(jf || (jf = {}));
var Bl;
(function(r) {
	function e$1(n$1, i$1) {
		return {
			textDocument: n$1,
			edits: i$1
		};
	}
	m(e$1, "create"), r.create = e$1;
	function t(n$1) {
		let i$1 = n$1;
		return m$2.defined(i$1) && Hl.is(i$1.textDocument) && Array.isArray(i$1.edits);
	}
	m(t, "is"), r.is = t;
})(Bl || (Bl = {}));
var Wl;
(function(r) {
	function e$1(n$1, i$1, s$1) {
		let o$1 = {
			kind: "create",
			uri: n$1
		};
		return i$1 !== void 0 && (i$1.overwrite !== void 0 || i$1.ignoreIfExists !== void 0) && (o$1.options = i$1), s$1 !== void 0 && (o$1.annotationId = s$1), o$1;
	}
	m(e$1, "create"), r.create = e$1;
	function t(n$1) {
		let i$1 = n$1;
		return i$1 && i$1.kind === "create" && m$2.string(i$1.uri) && (i$1.options === void 0 || (i$1.options.overwrite === void 0 || m$2.boolean(i$1.options.overwrite)) && (i$1.options.ignoreIfExists === void 0 || m$2.boolean(i$1.options.ignoreIfExists))) && (i$1.annotationId === void 0 || Un.is(i$1.annotationId));
	}
	m(t, "is"), r.is = t;
})(Wl || (Wl = {}));
var Kl;
(function(r) {
	function e$1(n$1, i$1, s$1, o$1) {
		let l$2 = {
			kind: "rename",
			oldUri: n$1,
			newUri: i$1
		};
		return s$1 !== void 0 && (s$1.overwrite !== void 0 || s$1.ignoreIfExists !== void 0) && (l$2.options = s$1), o$1 !== void 0 && (l$2.annotationId = o$1), l$2;
	}
	m(e$1, "create"), r.create = e$1;
	function t(n$1) {
		let i$1 = n$1;
		return i$1 && i$1.kind === "rename" && m$2.string(i$1.oldUri) && m$2.string(i$1.newUri) && (i$1.options === void 0 || (i$1.options.overwrite === void 0 || m$2.boolean(i$1.options.overwrite)) && (i$1.options.ignoreIfExists === void 0 || m$2.boolean(i$1.options.ignoreIfExists))) && (i$1.annotationId === void 0 || Un.is(i$1.annotationId));
	}
	m(t, "is"), r.is = t;
})(Kl || (Kl = {}));
var Vl;
(function(r) {
	function e$1(n$1, i$1, s$1) {
		let o$1 = {
			kind: "delete",
			uri: n$1
		};
		return i$1 !== void 0 && (i$1.recursive !== void 0 || i$1.ignoreIfNotExists !== void 0) && (o$1.options = i$1), s$1 !== void 0 && (o$1.annotationId = s$1), o$1;
	}
	m(e$1, "create"), r.create = e$1;
	function t(n$1) {
		let i$1 = n$1;
		return i$1 && i$1.kind === "delete" && m$2.string(i$1.uri) && (i$1.options === void 0 || (i$1.options.recursive === void 0 || m$2.boolean(i$1.options.recursive)) && (i$1.options.ignoreIfNotExists === void 0 || m$2.boolean(i$1.options.ignoreIfNotExists))) && (i$1.annotationId === void 0 || Un.is(i$1.annotationId));
	}
	m(t, "is"), r.is = t;
})(Vl || (Vl = {}));
var jl;
(function(r) {
	function e$1(t) {
		let n$1 = t;
		return n$1 && (n$1.changes !== void 0 || n$1.documentChanges !== void 0) && (n$1.documentChanges === void 0 || n$1.documentChanges.every((i$1) => m$2.string(i$1.kind) ? Wl.is(i$1) || Kl.is(i$1) || Vl.is(i$1) : Bl.is(i$1)));
	}
	m(e$1, "is"), r.is = e$1;
})(jl || (jl = {}));
var Hf;
(function(r) {
	function e$1(n$1) {
		return { uri: n$1 };
	}
	m(e$1, "create"), r.create = e$1;
	function t(n$1) {
		let i$1 = n$1;
		return m$2.defined(i$1) && m$2.string(i$1.uri);
	}
	m(t, "is"), r.is = t;
})(Hf || (Hf = {}));
var zf;
(function(r) {
	function e$1(n$1, i$1) {
		return {
			uri: n$1,
			version: i$1
		};
	}
	m(e$1, "create"), r.create = e$1;
	function t(n$1) {
		let i$1 = n$1;
		return m$2.defined(i$1) && m$2.string(i$1.uri) && m$2.integer(i$1.version);
	}
	m(t, "is"), r.is = t;
})(zf || (zf = {}));
var Hl;
(function(r) {
	function e$1(n$1, i$1) {
		return {
			uri: n$1,
			version: i$1
		};
	}
	m(e$1, "create"), r.create = e$1;
	function t(n$1) {
		let i$1 = n$1;
		return m$2.defined(i$1) && m$2.string(i$1.uri) && (i$1.version === null || m$2.integer(i$1.version));
	}
	m(t, "is"), r.is = t;
})(Hl || (Hl = {}));
var qf;
(function(r) {
	function e$1(n$1, i$1, s$1, o$1) {
		return {
			uri: n$1,
			languageId: i$1,
			version: s$1,
			text: o$1
		};
	}
	m(e$1, "create"), r.create = e$1;
	function t(n$1) {
		let i$1 = n$1;
		return m$2.defined(i$1) && m$2.string(i$1.uri) && m$2.string(i$1.languageId) && m$2.integer(i$1.version) && m$2.string(i$1.text);
	}
	m(t, "is"), r.is = t;
})(qf || (qf = {}));
var zl;
(function(r) {
	r.PlainText = "plaintext", r.Markdown = "markdown";
	function e$1(t) {
		let n$1 = t;
		return n$1 === r.PlainText || n$1 === r.Markdown;
	}
	m(e$1, "is"), r.is = e$1;
})(zl || (zl = {}));
var Ui$1;
(function(r) {
	function e$1(t) {
		let n$1 = t;
		return m$2.objectLiteral(t) && zl.is(n$1.kind) && m$2.string(n$1.value);
	}
	m(e$1, "is"), r.is = e$1;
})(Ui$1 || (Ui$1 = {}));
var Xf;
(function(r) {
	r.Text = 1, r.Method = 2, r.Function = 3, r.Constructor = 4, r.Field = 5, r.Variable = 6, r.Class = 7, r.Interface = 8, r.Module = 9, r.Property = 10, r.Unit = 11, r.Value = 12, r.Enum = 13, r.Keyword = 14, r.Snippet = 15, r.Color = 16, r.File = 17, r.Reference = 18, r.Folder = 19, r.EnumMember = 20, r.Constant = 21, r.Struct = 22, r.Event = 23, r.Operator = 24, r.TypeParameter = 25;
})(Xf || (Xf = {}));
var Yf;
(function(r) {
	r.PlainText = 1, r.Snippet = 2;
})(Yf || (Yf = {}));
var Jf;
(function(r) {
	r.Deprecated = 1;
})(Jf || (Jf = {}));
var Qf;
(function(r) {
	function e$1(n$1, i$1, s$1) {
		return {
			newText: n$1,
			insert: i$1,
			replace: s$1
		};
	}
	m(e$1, "create"), r.create = e$1;
	function t(n$1) {
		let i$1 = n$1;
		return i$1 && m$2.string(i$1.newText) && U.is(i$1.insert) && U.is(i$1.replace);
	}
	m(t, "is"), r.is = t;
})(Qf || (Qf = {}));
var Zf;
(function(r) {
	r.asIs = 1, r.adjustIndentation = 2;
})(Zf || (Zf = {}));
var ed;
(function(r) {
	function e$1(t) {
		let n$1 = t;
		return n$1 && (m$2.string(n$1.detail) || n$1.detail === void 0) && (m$2.string(n$1.description) || n$1.description === void 0);
	}
	m(e$1, "is"), r.is = e$1;
})(ed || (ed = {}));
var td;
(function(r) {
	function e$1(t) {
		return { label: t };
	}
	m(e$1, "create"), r.create = e$1;
})(td || (td = {}));
var rd;
(function(r) {
	function e$1(t, n$1) {
		return {
			items: t || [],
			isIncomplete: !!n$1
		};
	}
	m(e$1, "create"), r.create = e$1;
})(rd || (rd = {}));
var Sa;
(function(r) {
	function e$1(n$1) {
		return n$1.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
	}
	m(e$1, "fromPlainText"), r.fromPlainText = e$1;
	function t(n$1) {
		let i$1 = n$1;
		return m$2.string(i$1) || m$2.objectLiteral(i$1) && m$2.string(i$1.language) && m$2.string(i$1.value);
	}
	m(t, "is"), r.is = t;
})(Sa || (Sa = {}));
var nd;
(function(r) {
	function e$1(t) {
		let n$1 = t;
		return !!n$1 && m$2.objectLiteral(n$1) && (Ui$1.is(n$1.contents) || Sa.is(n$1.contents) || m$2.typedArray(n$1.contents, Sa.is)) && (t.range === void 0 || U.is(t.range));
	}
	m(e$1, "is"), r.is = e$1;
})(nd || (nd = {}));
var id;
(function(r) {
	function e$1(t, n$1) {
		return n$1 ? {
			label: t,
			documentation: n$1
		} : { label: t };
	}
	m(e$1, "create"), r.create = e$1;
})(id || (id = {}));
var sd;
(function(r) {
	function e$1(t, n$1, ...i$1) {
		let s$1 = { label: t };
		return m$2.defined(n$1) && (s$1.documentation = n$1), m$2.defined(i$1) ? s$1.parameters = i$1 : s$1.parameters = [], s$1;
	}
	m(e$1, "create"), r.create = e$1;
})(sd || (sd = {}));
var ad;
(function(r) {
	r.Text = 1, r.Read = 2, r.Write = 3;
})(ad || (ad = {}));
var od;
(function(r) {
	function e$1(t, n$1) {
		let i$1 = { range: t };
		return m$2.number(n$1) && (i$1.kind = n$1), i$1;
	}
	m(e$1, "create"), r.create = e$1;
})(od || (od = {}));
var ld;
(function(r) {
	r.File = 1, r.Module = 2, r.Namespace = 3, r.Package = 4, r.Class = 5, r.Method = 6, r.Property = 7, r.Field = 8, r.Constructor = 9, r.Enum = 10, r.Interface = 11, r.Function = 12, r.Variable = 13, r.Constant = 14, r.String = 15, r.Number = 16, r.Boolean = 17, r.Array = 18, r.Object = 19, r.Key = 20, r.Null = 21, r.EnumMember = 22, r.Struct = 23, r.Event = 24, r.Operator = 25, r.TypeParameter = 26;
})(ld || (ld = {}));
var ud;
(function(r) {
	r.Deprecated = 1;
})(ud || (ud = {}));
var cd;
(function(r) {
	function e$1(t, n$1, i$1, s$1, o$1) {
		let l$2 = {
			name: t,
			kind: n$1,
			location: {
				uri: s$1,
				range: i$1
			}
		};
		return o$1 && (l$2.containerName = o$1), l$2;
	}
	m(e$1, "create"), r.create = e$1;
})(cd || (cd = {}));
var fd;
(function(r) {
	function e$1(t, n$1, i$1, s$1) {
		return s$1 !== void 0 ? {
			name: t,
			kind: n$1,
			location: {
				uri: i$1,
				range: s$1
			}
		} : {
			name: t,
			kind: n$1,
			location: { uri: i$1 }
		};
	}
	m(e$1, "create"), r.create = e$1;
})(fd || (fd = {}));
var dd;
(function(r) {
	function e$1(n$1, i$1, s$1, o$1, l$2, u$2) {
		let c$2 = {
			name: n$1,
			detail: i$1,
			kind: s$1,
			range: o$1,
			selectionRange: l$2
		};
		return u$2 !== void 0 && (c$2.children = u$2), c$2;
	}
	m(e$1, "create"), r.create = e$1;
	function t(n$1) {
		let i$1 = n$1;
		return i$1 && m$2.string(i$1.name) && m$2.number(i$1.kind) && U.is(i$1.range) && U.is(i$1.selectionRange) && (i$1.detail === void 0 || m$2.string(i$1.detail)) && (i$1.deprecated === void 0 || m$2.boolean(i$1.deprecated)) && (i$1.children === void 0 || Array.isArray(i$1.children)) && (i$1.tags === void 0 || Array.isArray(i$1.tags));
	}
	m(t, "is"), r.is = t;
})(dd || (dd = {}));
var hd;
(function(r) {
	r.Empty = "", r.QuickFix = "quickfix", r.Refactor = "refactor", r.RefactorExtract = "refactor.extract", r.RefactorInline = "refactor.inline", r.RefactorRewrite = "refactor.rewrite", r.Source = "source", r.SourceOrganizeImports = "source.organizeImports", r.SourceFixAll = "source.fixAll";
})(hd || (hd = {}));
var wa;
(function(r) {
	r.Invoked = 1, r.Automatic = 2;
})(wa || (wa = {}));
var pd;
(function(r) {
	function e$1(n$1, i$1, s$1) {
		let o$1 = { diagnostics: n$1 };
		return i$1 != null && (o$1.only = i$1), s$1 != null && (o$1.triggerKind = s$1), o$1;
	}
	m(e$1, "create"), r.create = e$1;
	function t(n$1) {
		let i$1 = n$1;
		return m$2.defined(i$1) && m$2.typedArray(i$1.diagnostics, Ca.is) && (i$1.only === void 0 || m$2.typedArray(i$1.only, m$2.string)) && (i$1.triggerKind === void 0 || i$1.triggerKind === wa.Invoked || i$1.triggerKind === wa.Automatic);
	}
	m(t, "is"), r.is = t;
})(pd || (pd = {}));
var md;
(function(r) {
	function e$1(n$1, i$1, s$1) {
		let o$1 = { title: n$1 }, l$2 = !0;
		return typeof i$1 == "string" ? (l$2 = !1, o$1.kind = i$1) : Fn.is(i$1) ? o$1.command = i$1 : o$1.edit = i$1, l$2 && s$1 !== void 0 && (o$1.kind = s$1), o$1;
	}
	m(e$1, "create"), r.create = e$1;
	function t(n$1) {
		let i$1 = n$1;
		return i$1 && m$2.string(i$1.title) && (i$1.diagnostics === void 0 || m$2.typedArray(i$1.diagnostics, Ca.is)) && (i$1.kind === void 0 || m$2.string(i$1.kind)) && (i$1.edit !== void 0 || i$1.command !== void 0) && (i$1.command === void 0 || Fn.is(i$1.command)) && (i$1.isPreferred === void 0 || m$2.boolean(i$1.isPreferred)) && (i$1.edit === void 0 || jl.is(i$1.edit));
	}
	m(t, "is"), r.is = t;
})(md || (md = {}));
var gd;
(function(r) {
	function e$1(n$1, i$1) {
		let s$1 = { range: n$1 };
		return m$2.defined(i$1) && (s$1.data = i$1), s$1;
	}
	m(e$1, "create"), r.create = e$1;
	function t(n$1) {
		let i$1 = n$1;
		return m$2.defined(i$1) && U.is(i$1.range) && (m$2.undefined(i$1.command) || Fn.is(i$1.command));
	}
	m(t, "is"), r.is = t;
})(gd || (gd = {}));
var yd;
(function(r) {
	function e$1(n$1, i$1) {
		return {
			tabSize: n$1,
			insertSpaces: i$1
		};
	}
	m(e$1, "create"), r.create = e$1;
	function t(n$1) {
		let i$1 = n$1;
		return m$2.defined(i$1) && m$2.uinteger(i$1.tabSize) && m$2.boolean(i$1.insertSpaces);
	}
	m(t, "is"), r.is = t;
})(yd || (yd = {}));
var Td;
(function(r) {
	function e$1(n$1, i$1, s$1) {
		return {
			range: n$1,
			target: i$1,
			data: s$1
		};
	}
	m(e$1, "create"), r.create = e$1;
	function t(n$1) {
		let i$1 = n$1;
		return m$2.defined(i$1) && U.is(i$1.range) && (m$2.undefined(i$1.target) || m$2.string(i$1.target));
	}
	m(t, "is"), r.is = t;
})(Td || (Td = {}));
var Rd;
(function(r) {
	function e$1(n$1, i$1) {
		return {
			range: n$1,
			parent: i$1
		};
	}
	m(e$1, "create"), r.create = e$1;
	function t(n$1) {
		let i$1 = n$1;
		return m$2.objectLiteral(i$1) && U.is(i$1.range) && (i$1.parent === void 0 || r.is(i$1.parent));
	}
	m(t, "is"), r.is = t;
})(Rd || (Rd = {}));
var xd;
(function(r) {
	r.namespace = "namespace", r.type = "type", r.class = "class", r.enum = "enum", r.interface = "interface", r.struct = "struct", r.typeParameter = "typeParameter", r.parameter = "parameter", r.variable = "variable", r.property = "property", r.enumMember = "enumMember", r.event = "event", r.function = "function", r.method = "method", r.macro = "macro", r.keyword = "keyword", r.modifier = "modifier", r.comment = "comment", r.string = "string", r.number = "number", r.regexp = "regexp", r.operator = "operator", r.decorator = "decorator";
})(xd || (xd = {}));
var Ed;
(function(r) {
	r.declaration = "declaration", r.definition = "definition", r.readonly = "readonly", r.static = "static", r.deprecated = "deprecated", r.abstract = "abstract", r.async = "async", r.modification = "modification", r.documentation = "documentation", r.defaultLibrary = "defaultLibrary";
})(Ed || (Ed = {}));
var Ad;
(function(r) {
	function e$1(t) {
		let n$1 = t;
		return m$2.objectLiteral(n$1) && (n$1.resultId === void 0 || typeof n$1.resultId == "string") && Array.isArray(n$1.data) && (n$1.data.length === 0 || typeof n$1.data[0] == "number");
	}
	m(e$1, "is"), r.is = e$1;
})(Ad || (Ad = {}));
var vd;
(function(r) {
	function e$1(n$1, i$1) {
		return {
			range: n$1,
			text: i$1
		};
	}
	m(e$1, "create"), r.create = e$1;
	function t(n$1) {
		let i$1 = n$1;
		return i$1 != null && U.is(i$1.range) && m$2.string(i$1.text);
	}
	m(t, "is"), r.is = t;
})(vd || (vd = {}));
var kd;
(function(r) {
	function e$1(n$1, i$1, s$1) {
		return {
			range: n$1,
			variableName: i$1,
			caseSensitiveLookup: s$1
		};
	}
	m(e$1, "create"), r.create = e$1;
	function t(n$1) {
		let i$1 = n$1;
		return i$1 != null && U.is(i$1.range) && m$2.boolean(i$1.caseSensitiveLookup) && (m$2.string(i$1.variableName) || i$1.variableName === void 0);
	}
	m(t, "is"), r.is = t;
})(kd || (kd = {}));
var $d;
(function(r) {
	function e$1(n$1, i$1) {
		return {
			range: n$1,
			expression: i$1
		};
	}
	m(e$1, "create"), r.create = e$1;
	function t(n$1) {
		let i$1 = n$1;
		return i$1 != null && U.is(i$1.range) && (m$2.string(i$1.expression) || i$1.expression === void 0);
	}
	m(t, "is"), r.is = t;
})($d || ($d = {}));
var Id;
(function(r) {
	function e$1(n$1, i$1) {
		return {
			frameId: n$1,
			stoppedLocation: i$1
		};
	}
	m(e$1, "create"), r.create = e$1;
	function t(n$1) {
		let i$1 = n$1;
		return m$2.defined(i$1) && U.is(n$1.stoppedLocation);
	}
	m(t, "is"), r.is = t;
})(Id || (Id = {}));
var ql;
(function(r) {
	r.Type = 1, r.Parameter = 2;
	function e$1(t) {
		return t === 1 || t === 2;
	}
	m(e$1, "is"), r.is = e$1;
})(ql || (ql = {}));
var Xl;
(function(r) {
	function e$1(n$1) {
		return { value: n$1 };
	}
	m(e$1, "create"), r.create = e$1;
	function t(n$1) {
		let i$1 = n$1;
		return m$2.objectLiteral(i$1) && (i$1.tooltip === void 0 || m$2.string(i$1.tooltip) || Ui$1.is(i$1.tooltip)) && (i$1.location === void 0 || Na.is(i$1.location)) && (i$1.command === void 0 || Fn.is(i$1.command));
	}
	m(t, "is"), r.is = t;
})(Xl || (Xl = {}));
var Nd;
(function(r) {
	function e$1(n$1, i$1, s$1) {
		let o$1 = {
			position: n$1,
			label: i$1
		};
		return s$1 !== void 0 && (o$1.kind = s$1), o$1;
	}
	m(e$1, "create"), r.create = e$1;
	function t(n$1) {
		let i$1 = n$1;
		return m$2.objectLiteral(i$1) && W.is(i$1.position) && (m$2.string(i$1.label) || m$2.typedArray(i$1.label, Xl.is)) && (i$1.kind === void 0 || ql.is(i$1.kind)) && i$1.textEdits === void 0 || m$2.typedArray(i$1.textEdits, Gn.is) && (i$1.tooltip === void 0 || m$2.string(i$1.tooltip) || Ui$1.is(i$1.tooltip)) && (i$1.paddingLeft === void 0 || m$2.boolean(i$1.paddingLeft)) && (i$1.paddingRight === void 0 || m$2.boolean(i$1.paddingRight));
	}
	m(t, "is"), r.is = t;
})(Nd || (Nd = {}));
var Cd;
(function(r) {
	function e$1(t) {
		return {
			kind: "snippet",
			value: t
		};
	}
	m(e$1, "createSnippet"), r.createSnippet = e$1;
})(Cd || (Cd = {}));
var Sd;
(function(r) {
	function e$1(t, n$1, i$1, s$1) {
		return {
			insertText: t,
			filterText: n$1,
			range: i$1,
			command: s$1
		};
	}
	m(e$1, "create"), r.create = e$1;
})(Sd || (Sd = {}));
var wd;
(function(r) {
	function e$1(t) {
		return { items: t };
	}
	m(e$1, "create"), r.create = e$1;
})(wd || (wd = {}));
var _d;
(function(r) {
	r.Invoked = 0, r.Automatic = 1;
})(_d || (_d = {}));
var Ld;
(function(r) {
	function e$1(t, n$1) {
		return {
			range: t,
			text: n$1
		};
	}
	m(e$1, "create"), r.create = e$1;
})(Ld || (Ld = {}));
var Od;
(function(r) {
	function e$1(t, n$1) {
		return {
			triggerKind: t,
			selectedCompletionInfo: n$1
		};
	}
	m(e$1, "create"), r.create = e$1;
})(Od || (Od = {}));
var Pd;
(function(r) {
	function e$1(t) {
		let n$1 = t;
		return m$2.objectLiteral(n$1) && Dl.is(n$1.uri) && m$2.string(n$1.name);
	}
	m(e$1, "is"), r.is = e$1;
})(Pd || (Pd = {}));
var bd;
(function(r) {
	function e$1(s$1, o$1, l$2, u$2) {
		return new Yl(s$1, o$1, l$2, u$2);
	}
	m(e$1, "create"), r.create = e$1;
	function t(s$1) {
		let o$1 = s$1;
		return !!(m$2.defined(o$1) && m$2.string(o$1.uri) && (m$2.undefined(o$1.languageId) || m$2.string(o$1.languageId)) && m$2.uinteger(o$1.lineCount) && m$2.func(o$1.getText) && m$2.func(o$1.positionAt) && m$2.func(o$1.offsetAt));
	}
	m(t, "is"), r.is = t;
	function n$1(s$1, o$1) {
		let l$2 = /* @__PURE__ */ s$1.getText(), u$2 = /* @__PURE__ */ i$1(o$1, (f$1, d$1) => {
			let h$4 = f$1.range.start.line - d$1.range.start.line;
			return h$4 === 0 ? f$1.range.start.character - d$1.range.start.character : h$4;
		}), c$2 = l$2.length;
		for (let f$1 = u$2.length - 1; f$1 >= 0; f$1--) {
			let d$1 = u$2[f$1], h$4 = /* @__PURE__ */ s$1.offsetAt(d$1.range.start), p$2 = /* @__PURE__ */ s$1.offsetAt(d$1.range.end);
			if (p$2 <= c$2) l$2 = l$2.substring(0, h$4) + d$1.newText + l$2.substring(p$2, l$2.length);
			else throw new Error("Overlapping edit");
			c$2 = h$4;
		}
		return l$2;
	}
	m(n$1, "applyEdits"), r.applyEdits = n$1;
	function i$1(s$1, o$1) {
		if (s$1.length <= 1) return s$1;
		let l$2 = s$1.length / 2 | 0, u$2 = /* @__PURE__ */ s$1.slice(0, l$2), c$2 = /* @__PURE__ */ s$1.slice(l$2);
		i$1(u$2, o$1), i$1(c$2, o$1);
		let f$1 = 0, d$1 = 0, h$4 = 0;
		for (; f$1 < u$2.length && d$1 < c$2.length;) o$1(u$2[f$1], c$2[d$1]) <= 0 ? s$1[h$4++] = u$2[f$1++] : s$1[h$4++] = c$2[d$1++];
		for (; f$1 < u$2.length;) s$1[h$4++] = u$2[f$1++];
		for (; d$1 < c$2.length;) s$1[h$4++] = c$2[d$1++];
		return s$1;
	}
	m(i$1, "mergeSort");
})(bd || (bd = {}));
var Yl = class {
	static {
		m(this, "FullTextDocument");
	}
	constructor(e$1, t, n$1, i$1) {
		this._uri = e$1, this._languageId = t, this._version = n$1, this._content = i$1, this._lineOffsets = void 0;
	}
	get uri() {
		return this._uri;
	}
	get languageId() {
		return this._languageId;
	}
	get version() {
		return this._version;
	}
	getText(e$1) {
		if (e$1) {
			let t = /* @__PURE__ */ this.offsetAt(e$1.start), n$1 = /* @__PURE__ */ this.offsetAt(e$1.end);
			return this._content.substring(t, n$1);
		}
		return this._content;
	}
	update(e$1, t) {
		this._content = e$1.text, this._version = t, this._lineOffsets = void 0;
	}
	getLineOffsets() {
		if (this._lineOffsets === void 0) {
			let e$1 = [], t = this._content, n$1 = !0;
			for (let i$1 = 0; i$1 < t.length; i$1++) {
				n$1 && (e$1.push(i$1), n$1 = !1);
				let s$1 = /* @__PURE__ */ t.charAt(i$1);
				n$1 = s$1 === "\r" || s$1 === `
`, s$1 === "\r" && i$1 + 1 < t.length && t.charAt(i$1 + 1) === `
` && i$1++;
			}
			n$1 && t.length > 0 && e$1.push(t.length), this._lineOffsets = e$1;
		}
		return this._lineOffsets;
	}
	positionAt(e$1) {
		e$1 = /* @__PURE__ */ Math.max(/* @__PURE__ */ Math.min(e$1, this._content.length), 0);
		let t = /* @__PURE__ */ this.getLineOffsets(), n$1 = 0, i$1 = t.length;
		if (i$1 === 0) return W.create(0, e$1);
		for (; n$1 < i$1;) {
			let o$1 = /* @__PURE__ */ Math.floor((n$1 + i$1) / 2);
			t[o$1] > e$1 ? i$1 = o$1 : n$1 = o$1 + 1;
		}
		let s$1 = n$1 - 1;
		return W.create(s$1, e$1 - t[s$1]);
	}
	offsetAt(e$1) {
		let t = /* @__PURE__ */ this.getLineOffsets();
		if (e$1.line >= t.length) return this._content.length;
		if (e$1.line < 0) return 0;
		let n$1 = t[e$1.line], i$1 = e$1.line + 1 < t.length ? t[e$1.line + 1] : this._content.length;
		return Math.max(/* @__PURE__ */ Math.min(n$1 + e$1.character, i$1), n$1);
	}
	get lineCount() {
		return this.getLineOffsets().length;
	}
}, m$2;
(function(r) {
	let e$1 = Object.prototype.toString;
	function t(p$2) {
		return typeof p$2 < "u";
	}
	m(t, "defined"), r.defined = t;
	function n$1(p$2) {
		return typeof p$2 > "u";
	}
	m(n$1, "undefined"), r.undefined = n$1;
	function i$1(p$2) {
		return p$2 === !0 || p$2 === !1;
	}
	m(i$1, "boolean"), r.boolean = i$1;
	function s$1(p$2) {
		return e$1.call(p$2) === "[object String]";
	}
	m(s$1, "string"), r.string = s$1;
	function o$1(p$2) {
		return e$1.call(p$2) === "[object Number]";
	}
	m(o$1, "number"), r.number = o$1;
	function l$2(p$2, g$3, y$1) {
		return e$1.call(p$2) === "[object Number]" && g$3 <= p$2 && p$2 <= y$1;
	}
	m(l$2, "numberRange"), r.numberRange = l$2;
	function u$2(p$2) {
		return e$1.call(p$2) === "[object Number]" && -2147483648 <= p$2 && p$2 <= 2147483647;
	}
	m(u$2, "integer"), r.integer = u$2;
	function c$2(p$2) {
		return e$1.call(p$2) === "[object Number]" && 0 <= p$2 && p$2 <= 2147483647;
	}
	m(c$2, "uinteger"), r.uinteger = c$2;
	function f$1(p$2) {
		return e$1.call(p$2) === "[object Function]";
	}
	m(f$1, "func"), r.func = f$1;
	function d$1(p$2) {
		return p$2 !== null && typeof p$2 == "object";
	}
	m(d$1, "objectLiteral"), r.objectLiteral = d$1;
	function h$4(p$2, g$3) {
		return Array.isArray(p$2) && p$2.every(g$3);
	}
	m(h$4, "typedArray"), r.typedArray = h$4;
})(m$2 || (m$2 = {}));
var Bi = class {
	static {
		m(this, "CstNodeBuilder");
	}
	constructor() {
		this.nodeStack = [];
	}
	get current() {
		var e$1;
		return (e$1 = this.nodeStack[this.nodeStack.length - 1]) !== null && e$1 !== void 0 ? e$1 : this.rootNode;
	}
	buildRootNode(e$1) {
		return this.rootNode = new Bn(e$1), this.rootNode.root = this.rootNode, this.nodeStack = [this.rootNode], this.rootNode;
	}
	buildCompositeNode(e$1) {
		let t = new gr();
		return t.grammarSource = e$1, t.root = this.rootNode, this.current.content.push(t), this.nodeStack.push(t), t;
	}
	buildLeafNode(e$1, t) {
		let n$1 = new mr(e$1.startOffset, e$1.image.length, Nr(e$1), e$1.tokenType, !t);
		return n$1.grammarSource = t, n$1.root = this.rootNode, this.current.content.push(n$1), n$1;
	}
	removeNode(e$1) {
		let t = e$1.container;
		if (t) {
			let n$1 = /* @__PURE__ */ t.content.indexOf(e$1);
			n$1 >= 0 && t.content.splice(n$1, 1);
		}
	}
	addHiddenNodes(e$1) {
		let t = [];
		for (let s$1 of e$1) {
			let o$1 = new mr(s$1.startOffset, s$1.image.length, Nr(s$1), s$1.tokenType, !0);
			o$1.root = this.rootNode, t.push(o$1);
		}
		let n$1 = this.current, i$1 = !1;
		if (n$1.content.length > 0) {
			n$1.content.push(...t);
			return;
		}
		for (; n$1.container;) {
			let s$1 = /* @__PURE__ */ n$1.container.content.indexOf(n$1);
			if (s$1 > 0) {
				n$1.container.content.splice(s$1, 0, ...t), i$1 = !0;
				break;
			}
			n$1 = n$1.container;
		}
		i$1 || this.rootNode.content.unshift(...t);
	}
	construct(e$1) {
		let t = this.current;
		typeof e$1.$type == "string" && (this.current.astNode = e$1), e$1.$cstNode = t;
		let n$1 = /* @__PURE__ */ this.nodeStack.pop();
		n$1?.content.length === 0 && this.removeNode(n$1);
	}
}, Wi = class {
	static {
		m(this, "AbstractCstNode");
	}
	get parent() {
		return this.container;
	}
	get feature() {
		return this.grammarSource;
	}
	get hidden() {
		return !1;
	}
	get astNode() {
		var e$1, t;
		let n$1 = typeof ((e$1 = this._astNode) === null || e$1 === void 0 ? void 0 : e$1.$type) == "string" ? this._astNode : (t = this.container) === null || t === void 0 ? void 0 : t.astNode;
		if (!n$1) throw new Error("This node has no associated AST element");
		return n$1;
	}
	set astNode(e$1) {
		this._astNode = e$1;
	}
	get element() {
		return this.astNode;
	}
	get text() {
		return this.root.fullText.substring(this.offset, this.end);
	}
}, mr = class extends Wi {
	static {
		m(this, "LeafCstNodeImpl");
	}
	get offset() {
		return this._offset;
	}
	get length() {
		return this._length;
	}
	get end() {
		return this._offset + this._length;
	}
	get hidden() {
		return this._hidden;
	}
	get tokenType() {
		return this._tokenType;
	}
	get range() {
		return this._range;
	}
	constructor(e$1, t, n$1, i$1, s$1 = !1) {
		super(), this._hidden = s$1, this._offset = e$1, this._tokenType = i$1, this._length = t, this._range = n$1;
	}
}, gr = class extends Wi {
	static {
		m(this, "CompositeCstNodeImpl");
	}
	constructor() {
		super(...arguments), this.content = new Jl(this);
	}
	get children() {
		return this.content;
	}
	get offset() {
		var e$1, t;
		return (t = (e$1 = this.firstNonHiddenNode) === null || e$1 === void 0 ? void 0 : e$1.offset) !== null && t !== void 0 ? t : 0;
	}
	get length() {
		return this.end - this.offset;
	}
	get end() {
		var e$1, t;
		return (t = (e$1 = this.lastNonHiddenNode) === null || e$1 === void 0 ? void 0 : e$1.end) !== null && t !== void 0 ? t : 0;
	}
	get range() {
		let e$1 = this.firstNonHiddenNode, t = this.lastNonHiddenNode;
		if (e$1 && t) {
			if (this._rangeCache === void 0) {
				let { range: n$1 } = e$1, { range: i$1 } = t;
				this._rangeCache = {
					start: n$1.start,
					end: i$1.end.line < n$1.start.line ? n$1.start : i$1.end
				};
			}
			return this._rangeCache;
		} else return {
			start: /* @__PURE__ */ W.create(0, 0),
			end: /* @__PURE__ */ W.create(0, 0)
		};
	}
	get firstNonHiddenNode() {
		for (let e$1 of this.content) if (!e$1.hidden) return e$1;
		return this.content[0];
	}
	get lastNonHiddenNode() {
		for (let e$1 = this.content.length - 1; e$1 >= 0; e$1--) {
			let t = this.content[e$1];
			if (!t.hidden) return t;
		}
		return this.content[this.content.length - 1];
	}
}, Jl = class r extends Array {
	static {
		m(this, "CstNodeContainer");
	}
	constructor(e$1) {
		super(), this.parent = e$1, Object.setPrototypeOf(this, r.prototype);
	}
	push(...e$1) {
		return this.addParents(e$1), super.push(...e$1);
	}
	unshift(...e$1) {
		return this.addParents(e$1), super.unshift(...e$1);
	}
	splice(e$1, t, ...n$1) {
		return this.addParents(n$1), super.splice(e$1, t, ...n$1);
	}
	addParents(e$1) {
		for (let t of e$1) t.container = this.parent;
	}
}, Bn = class extends gr {
	static {
		m(this, "RootCstNodeImpl");
	}
	get text() {
		return this._text.substring(this.offset, this.end);
	}
	get fullText() {
		return this._text;
	}
	constructor(e$1) {
		super(), this._text = "", this._text = e$1 ?? "";
	}
};
var _a = /* @__PURE__ */ Symbol("Datatype");
function Ql(r) {
	return r.$type === _a;
}
m(Ql, "isDataTypeNode");
var Md = "​", Dd = /* @__PURE__ */ m((r) => r.endsWith(Md) ? r : r + Md, "withRuleSuffix"), Ki$1 = class {
	static {
		m(this, "AbstractLangiumParser");
	}
	constructor(e$1) {
		this._unorderedGroups = /* @__PURE__ */ new Map(), this.allRules = /* @__PURE__ */ new Map(), this.lexer = e$1.parser.Lexer;
		let t = this.lexer.definition, n$1 = e$1.LanguageMetaData.mode === "production";
		this.wrapper = new Zl(t, Object.assign(/* @__PURE__ */ Object.assign({}, e$1.parser.ParserConfig), {
			skipValidations: n$1,
			errorMessageProvider: e$1.parser.ParserErrorMessageProvider
		}));
	}
	alternatives(e$1, t) {
		this.wrapper.wrapOr(e$1, t);
	}
	optional(e$1, t) {
		this.wrapper.wrapOption(e$1, t);
	}
	many(e$1, t) {
		this.wrapper.wrapMany(e$1, t);
	}
	atLeastOne(e$1, t) {
		this.wrapper.wrapAtLeastOne(e$1, t);
	}
	getRule(e$1) {
		return this.allRules.get(e$1);
	}
	isRecording() {
		return this.wrapper.IS_RECORDING;
	}
	get unorderedGroups() {
		return this._unorderedGroups;
	}
	getRuleStack() {
		return this.wrapper.RULE_STACK;
	}
	finalize() {
		this.wrapper.wrapSelfAnalysis();
	}
}, Vi$1 = class extends Ki$1 {
	static {
		m(this, "LangiumParser");
	}
	get current() {
		return this.stack[this.stack.length - 1];
	}
	constructor(e$1) {
		super(e$1), this.nodeBuilder = new Bi(), this.stack = [], this.assignmentMap = /* @__PURE__ */ new Map(), this.linker = e$1.references.Linker, this.converter = e$1.parser.ValueConverter, this.astReflection = e$1.shared.AstReflection;
	}
	rule(e$1, t) {
		let n$1 = /* @__PURE__ */ this.computeRuleType(e$1), i$1 = /* @__PURE__ */ this.wrapper.DEFINE_RULE(/* @__PURE__ */ Dd(e$1.name), /* @__PURE__ */ this.startImplementation(n$1, t).bind(this));
		return this.allRules.set(e$1.name, i$1), e$1.entry && (this.mainRule = i$1), i$1;
	}
	computeRuleType(e$1) {
		if (!e$1.fragment) {
			if (yi(e$1)) return _a;
			return yn(e$1) ?? e$1.name;
		}
	}
	parse(e$1, t = {}) {
		this.nodeBuilder.buildRootNode(e$1);
		let n$1 = this.lexerResult = /* @__PURE__ */ this.lexer.tokenize(e$1);
		this.wrapper.input = n$1.tokens;
		let i$1 = t.rule ? this.allRules.get(t.rule) : this.mainRule;
		if (!i$1) throw new Error(t.rule ? `No rule found with name '${t.rule}'` : "No main rule available.");
		let s$1 = /* @__PURE__ */ i$1.call(this.wrapper, {});
		return this.nodeBuilder.addHiddenNodes(n$1.hidden), this.unorderedGroups.clear(), this.lexerResult = void 0, {
			value: s$1,
			lexerErrors: n$1.errors,
			lexerReport: n$1.report,
			parserErrors: this.wrapper.errors
		};
	}
	startImplementation(e$1, t) {
		return (n$1) => {
			let i$1 = !this.isRecording() && e$1 !== void 0;
			if (i$1) {
				let o$1 = { $type: e$1 };
				this.stack.push(o$1), e$1 === _a && (o$1.value = "");
			}
			let s$1;
			try {
				s$1 = /* @__PURE__ */ t(n$1);
			} catch {
				s$1 = void 0;
			}
			return s$1 === void 0 && i$1 && (s$1 = /* @__PURE__ */ this.construct()), s$1;
		};
	}
	extractHiddenTokens(e$1) {
		let t = this.lexerResult.hidden;
		if (!t.length) return [];
		let n$1 = e$1.startOffset;
		for (let i$1 = 0; i$1 < t.length; i$1++) if (t[i$1].startOffset > n$1) return t.splice(0, i$1);
		return t.splice(0, t.length);
	}
	consume(e$1, t, n$1) {
		let i$1 = /* @__PURE__ */ this.wrapper.wrapConsume(e$1, t);
		if (!this.isRecording() && this.isValidToken(i$1)) {
			let s$1 = /* @__PURE__ */ this.extractHiddenTokens(i$1);
			this.nodeBuilder.addHiddenNodes(s$1);
			let o$1 = /* @__PURE__ */ this.nodeBuilder.buildLeafNode(i$1, n$1), { assignment: l$2, isCrossRef: u$2 } = this.getAssignment(n$1), c$2 = this.current;
			if (l$2) {
				let f$1 = Ye(n$1) ? i$1.image : this.converter.convert(i$1.image, o$1);
				this.assign(l$2.operator, l$2.feature, f$1, o$1, u$2);
			} else if (Ql(c$2)) {
				let f$1 = i$1.image;
				Ye(n$1) || (f$1 = /* @__PURE__ */ this.converter.convert(f$1, o$1).toString()), c$2.value += f$1;
			}
		}
	}
	isValidToken(e$1) {
		return !e$1.isInsertedInRecovery && !isNaN(e$1.startOffset) && typeof e$1.endOffset == "number" && !isNaN(e$1.endOffset);
	}
	subrule(e$1, t, n$1, i$1, s$1) {
		let o$1;
		!this.isRecording() && !n$1 && (o$1 = /* @__PURE__ */ this.nodeBuilder.buildCompositeNode(i$1));
		let l$2 = /* @__PURE__ */ this.wrapper.wrapSubrule(e$1, t, s$1);
		!this.isRecording() && o$1 && o$1.length > 0 && this.performSubruleAssignment(l$2, i$1, o$1);
	}
	performSubruleAssignment(e$1, t, n$1) {
		let { assignment: i$1, isCrossRef: s$1 } = this.getAssignment(t);
		if (i$1) this.assign(i$1.operator, i$1.feature, e$1, n$1, s$1);
		else if (!i$1) {
			let o$1 = this.current;
			if (Ql(o$1)) o$1.value += /* @__PURE__ */ e$1.toString();
			else if (typeof e$1 == "object" && e$1) {
				let u$2 = /* @__PURE__ */ this.assignWithoutOverride(e$1, o$1);
				this.stack.pop(), this.stack.push(u$2);
			}
		}
	}
	action(e$1, t) {
		if (!this.isRecording()) {
			let n$1 = this.current;
			if (t.feature && t.operator) {
				n$1 = /* @__PURE__ */ this.construct(), this.nodeBuilder.removeNode(n$1.$cstNode), this.nodeBuilder.buildCompositeNode(t).content.push(n$1.$cstNode);
				let s$1 = { $type: e$1 };
				this.stack.push(s$1), this.assign(t.operator, t.feature, n$1, n$1.$cstNode, !1);
			} else n$1.$type = e$1;
		}
	}
	construct() {
		if (this.isRecording()) return;
		let e$1 = this.current;
		return Ds(e$1), this.nodeBuilder.construct(e$1), this.stack.pop(), Ql(e$1) ? this.converter.convert(e$1.value, e$1.$cstNode) : (Go(this.astReflection, e$1), e$1);
	}
	getAssignment(e$1) {
		if (!this.assignmentMap.has(e$1)) {
			let t = /* @__PURE__ */ ir(e$1, rt);
			this.assignmentMap.set(e$1, {
				assignment: t,
				isCrossRef: t ? nr(t.terminal) : !1
			});
		}
		return this.assignmentMap.get(e$1);
	}
	assign(e$1, t, n$1, i$1, s$1) {
		let o$1 = this.current, l$2;
		switch (s$1 && typeof n$1 == "string" ? l$2 = /* @__PURE__ */ this.linker.buildReference(o$1, t, i$1, n$1) : l$2 = n$1, e$1) {
			case "=":
				o$1[t] = l$2;
				break;
			case "?=":
				o$1[t] = !0;
				break;
			case "+=": Array.isArray(o$1[t]) || (o$1[t] = []), o$1[t].push(l$2);
		}
	}
	assignWithoutOverride(e$1, t) {
		for (let [i$1, s$1] of Object.entries(t)) {
			let o$1 = e$1[i$1];
			o$1 === void 0 ? e$1[i$1] = s$1 : Array.isArray(o$1) && Array.isArray(s$1) && (s$1.push(...o$1), e$1[i$1] = s$1);
		}
		let n$1 = e$1.$cstNode;
		return n$1 && (n$1.astNode = void 0, e$1.$cstNode = void 0), e$1;
	}
	get definitionErrors() {
		return this.wrapper.definitionErrors;
	}
}, La = class {
	static {
		m(this, "AbstractParserErrorMessageProvider");
	}
	buildMismatchTokenMessage(e$1) {
		return Lt.buildMismatchTokenMessage(e$1);
	}
	buildNotAllInputParsedMessage(e$1) {
		return Lt.buildNotAllInputParsedMessage(e$1);
	}
	buildNoViableAltMessage(e$1) {
		return Lt.buildNoViableAltMessage(e$1);
	}
	buildEarlyExitMessage(e$1) {
		return Lt.buildEarlyExitMessage(e$1);
	}
}, Wn = class extends La {
	static {
		m(this, "LangiumParserErrorMessageProvider");
	}
	buildMismatchTokenMessage({ expected: e$1, actual: t }) {
		return `Expecting ${e$1.LABEL ? "`" + e$1.LABEL + "`" : e$1.name.endsWith(":KW") ? `keyword '${e$1.name.substring(0, e$1.name.length - 3)}'` : `token of type '${e$1.name}'`} but found \`${t.image}\`.`;
	}
	buildNotAllInputParsedMessage({ firstRedundant: e$1 }) {
		return `Expecting end of file but found \`${e$1.image}\`.`;
	}
}, ji = class extends Ki$1 {
	static {
		m(this, "LangiumCompletionParser");
	}
	constructor() {
		super(...arguments), this.tokens = [], this.elementStack = [], this.lastElementStack = [], this.nextTokenIndex = 0, this.stackSize = 0;
	}
	action() {}
	construct() {}
	parse(e$1) {
		this.resetState();
		return this.tokens = this.lexer.tokenize(e$1, { mode: "partial" }).tokens, this.wrapper.input = [...this.tokens], this.mainRule.call(this.wrapper, {}), this.unorderedGroups.clear(), {
			tokens: this.tokens,
			elementStack: [...this.lastElementStack],
			tokenIndex: this.nextTokenIndex
		};
	}
	rule(e$1, t) {
		let n$1 = /* @__PURE__ */ this.wrapper.DEFINE_RULE(/* @__PURE__ */ Dd(e$1.name), /* @__PURE__ */ this.startImplementation(t).bind(this));
		return this.allRules.set(e$1.name, n$1), e$1.entry && (this.mainRule = n$1), n$1;
	}
	resetState() {
		this.elementStack = [], this.lastElementStack = [], this.nextTokenIndex = 0, this.stackSize = 0;
	}
	startImplementation(e$1) {
		return (t) => {
			let n$1 = /* @__PURE__ */ this.keepStackSize();
			try {
				e$1(t);
			} finally {
				this.resetStackSize(n$1);
			}
		};
	}
	removeUnexpectedElements() {
		this.elementStack.splice(this.stackSize);
	}
	keepStackSize() {
		let e$1 = this.elementStack.length;
		return this.stackSize = e$1, e$1;
	}
	resetStackSize(e$1) {
		this.removeUnexpectedElements(), this.stackSize = e$1;
	}
	consume(e$1, t, n$1) {
		this.wrapper.wrapConsume(e$1, t), this.isRecording() || (this.lastElementStack = [...this.elementStack, n$1], this.nextTokenIndex = this.currIdx + 1);
	}
	subrule(e$1, t, n$1, i$1, s$1) {
		this.before(i$1), this.wrapper.wrapSubrule(e$1, t, s$1), this.after(i$1);
	}
	before(e$1) {
		this.isRecording() || this.elementStack.push(e$1);
	}
	after(e$1) {
		if (!this.isRecording()) {
			let t = /* @__PURE__ */ this.elementStack.lastIndexOf(e$1);
			t >= 0 && this.elementStack.splice(t);
		}
	}
	get currIdx() {
		return this.wrapper.currIdx;
	}
}, jm = {
	recoveryEnabled: !0,
	nodeLocationTracking: "full",
	skipValidations: !0,
	errorMessageProvider: new Wn()
}, Zl = class extends bi {
	static {
		m(this, "ChevrotainWrapper");
	}
	constructor(e$1, t) {
		let n$1 = t && "maxLookahead" in t;
		super(e$1, /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.assign({}, jm), { lookaheadStrategy: n$1 ? new Ot({ maxLookahead: t.maxLookahead }) : new Gi({ logging: t.skipValidations ? () => {} : void 0 }) }), t));
	}
	get IS_RECORDING() {
		return this.RECORDING_PHASE;
	}
	DEFINE_RULE(e$1, t) {
		return this.RULE(e$1, t);
	}
	wrapSelfAnalysis() {
		this.performSelfAnalysis();
	}
	wrapConsume(e$1, t) {
		return this.consume(e$1, t);
	}
	wrapSubrule(e$1, t, n$1) {
		return this.subrule(e$1, t, { ARGS: [n$1] });
	}
	wrapOr(e$1, t) {
		this.or(e$1, t);
	}
	wrapOption(e$1, t) {
		this.option(e$1, t);
	}
	wrapMany(e$1, t) {
		this.many(e$1, t);
	}
	wrapAtLeastOne(e$1, t) {
		this.atLeastOne(e$1, t);
	}
};
function Hi(r, e$1, t) {
	return Hm({
		parser: e$1,
		tokens: t,
		ruleNames: /* @__PURE__ */ new Map()
	}, r), e$1;
}
m(Hi, "createParser");
function Hm(r, e$1) {
	let t = /* @__PURE__ */ mi(e$1, !1), n$1 = /* @__PURE__ */ j(e$1.rules).filter(Se).filter((i$1) => t.has(i$1));
	for (let i$1 of n$1) {
		let s$1 = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.assign({}, r), {
			consume: 1,
			optional: 1,
			subrule: 1,
			many: 1,
			or: 1
		});
		r.parser.rule(i$1, /* @__PURE__ */ yr(s$1, i$1.definition));
	}
}
m(Hm, "buildRules");
function yr(r, e$1, t = !1) {
	let n$1;
	if (Ye(e$1)) n$1 = /* @__PURE__ */ Zm(r, e$1);
	else if ($t(e$1)) n$1 = /* @__PURE__ */ zm(r, e$1);
	else if (rt(e$1)) n$1 = /* @__PURE__ */ yr(r, e$1.terminal);
	else if (nr(e$1)) n$1 = /* @__PURE__ */ Fd(r, e$1);
	else if (nt(e$1)) n$1 = /* @__PURE__ */ qm(r, e$1);
	else if (Ps(e$1)) n$1 = /* @__PURE__ */ Ym(r, e$1);
	else if (Ms(e$1)) n$1 = /* @__PURE__ */ Jm(r, e$1);
	else if (Ut(e$1)) n$1 = /* @__PURE__ */ Qm$1(r, e$1);
	else if (wo(e$1)) {
		let i$1 = r.consume++;
		n$1 = /* @__PURE__ */ m(() => r.parser.consume(i$1, qe, e$1), "method");
	} else throw new tr(e$1.$cstNode, `Unexpected element type: ${e$1.$type}`);
	return Gd(r, t ? void 0 : Oa(e$1), n$1, e$1.cardinality);
}
m(yr, "buildElement");
function zm(r, e$1) {
	let t = /* @__PURE__ */ Ti(e$1);
	return () => r.parser.action(t, e$1);
}
m(zm, "buildAction");
function qm(r, e$1) {
	let t = e$1.rule.ref;
	if (Se(t)) {
		let n$1 = r.subrule++, i$1 = t.fragment, s$1 = e$1.arguments.length > 0 ? Xm(t, e$1.arguments) : () => ({});
		return (o$1) => r.parser.subrule(n$1, /* @__PURE__ */ Ud(r, t), i$1, e$1, /* @__PURE__ */ s$1(o$1));
	} else if (He(t)) {
		let n$1 = r.consume++, i$1 = /* @__PURE__ */ eu(r, t.name);
		return () => r.parser.consume(n$1, i$1, e$1);
	} else if (t) ct(t);
	else throw new tr(e$1.$cstNode, `Undefined rule: ${e$1.rule.$refText}`);
}
m(qm, "buildRuleCall");
function Xm(r, e$1) {
	let t = /* @__PURE__ */ e$1.map((n$1) => Pt(n$1.value));
	return (n$1) => {
		let i$1 = {};
		for (let s$1 = 0; s$1 < t.length; s$1++) {
			let o$1 = r.parameters[s$1], l$2 = t[s$1];
			i$1[o$1.name] = /* @__PURE__ */ l$2(n$1);
		}
		return i$1;
	};
}
m(Xm, "buildRuleCallPredicate");
function Pt(r) {
	if (vo(r)) {
		let e$1 = /* @__PURE__ */ Pt(r.left), t = /* @__PURE__ */ Pt(r.right);
		return (n$1) => e$1(n$1) || t(n$1);
	} else if (Ao(r)) {
		let e$1 = /* @__PURE__ */ Pt(r.left), t = /* @__PURE__ */ Pt(r.right);
		return (n$1) => e$1(n$1) && t(n$1);
	} else if (ko(r)) {
		let e$1 = /* @__PURE__ */ Pt(r.value);
		return (t) => !e$1(t);
	} else if ($o(r)) {
		let e$1 = r.parameter.ref.name;
		return (t) => t !== void 0 && t[e$1] === !0;
	} else if (Eo(r)) {
		let e$1 = !!r.true;
		return () => e$1;
	}
	ct(r);
}
m(Pt, "buildPredicate");
function Ym(r, e$1) {
	if (e$1.elements.length === 1) return yr(r, e$1.elements[0]);
	{
		let t = [];
		for (let i$1 of e$1.elements) {
			let s$1 = { ALT: /* @__PURE__ */ yr(r, i$1, !0) }, o$1 = /* @__PURE__ */ Oa(i$1);
			o$1 && (s$1.GATE = /* @__PURE__ */ Pt(o$1)), t.push(s$1);
		}
		let n$1 = r.or++;
		return (i$1) => r.parser.alternatives(n$1, /* @__PURE__ */ t.map((s$1) => {
			let o$1 = { ALT: /* @__PURE__ */ m(() => s$1.ALT(i$1), "ALT") }, l$2 = s$1.GATE;
			return l$2 && (o$1.GATE = () => l$2(i$1)), o$1;
		}));
	}
}
m(Ym, "buildAlternatives");
function Jm(r, e$1) {
	if (e$1.elements.length === 1) return yr(r, e$1.elements[0]);
	let t = [];
	for (let l$2 of e$1.elements) {
		let u$2 = { ALT: /* @__PURE__ */ yr(r, l$2, !0) }, c$2 = /* @__PURE__ */ Oa(l$2);
		c$2 && (u$2.GATE = /* @__PURE__ */ Pt(c$2)), t.push(u$2);
	}
	let n$1 = r.or++, i$1 = /* @__PURE__ */ m((l$2, u$2) => {
		return `uGroup_${l$2}_${/* @__PURE__ */ u$2.getRuleStack().join("-")}`;
	}, "idFunc"), o$1 = /* @__PURE__ */ Gd(r, /* @__PURE__ */ Oa(e$1), /* @__PURE__ */ m((l$2) => r.parser.alternatives(n$1, /* @__PURE__ */ t.map((u$2, c$2) => {
		let f$1 = { ALT: /* @__PURE__ */ m(() => !0, "ALT") }, d$1 = r.parser;
		f$1.ALT = () => {
			if (u$2.ALT(l$2), !d$1.isRecording()) {
				let p$2 = /* @__PURE__ */ i$1(n$1, d$1);
				d$1.unorderedGroups.get(p$2) || d$1.unorderedGroups.set(p$2, []);
				let g$3 = /* @__PURE__ */ d$1.unorderedGroups.get(p$2);
				typeof g$3?.[c$2] > "u" && (g$3[c$2] = !0);
			}
		};
		let h$4 = u$2.GATE;
		return h$4 ? f$1.GATE = () => h$4(l$2) : f$1.GATE = () => {
			return !d$1.unorderedGroups.get(/* @__PURE__ */ i$1(n$1, d$1))?.[c$2];
		}, f$1;
	})), "alternatives"), "*");
	return (l$2) => {
		o$1(l$2), r.parser.isRecording() || r.parser.unorderedGroups.delete(/* @__PURE__ */ i$1(n$1, r.parser));
	};
}
m(Jm, "buildUnorderedGroup");
function Qm$1(r, e$1) {
	let t = /* @__PURE__ */ e$1.elements.map((n$1) => yr(r, n$1));
	return (n$1) => t.forEach((i$1) => i$1(n$1));
}
m(Qm$1, "buildGroup");
function Oa(r) {
	if (Ut(r)) return r.guardCondition;
}
m(Oa, "getGuardCondition");
function Fd(r, e$1, t = e$1.terminal) {
	if (t) if (nt(t) && Se(t.rule.ref)) {
		let n$1 = t.rule.ref, i$1 = r.subrule++;
		return (s$1) => r.parser.subrule(i$1, /* @__PURE__ */ Ud(r, n$1), !1, e$1, s$1);
	} else if (nt(t) && He(t.rule.ref)) {
		let n$1 = r.consume++, i$1 = /* @__PURE__ */ eu(r, t.rule.ref.name);
		return () => r.parser.consume(n$1, i$1, e$1);
	} else if (Ye(t)) {
		let n$1 = r.consume++, i$1 = /* @__PURE__ */ eu(r, t.value);
		return () => r.parser.consume(n$1, i$1, e$1);
	} else throw new Error("Could not build cross reference parser");
	else {
		if (!e$1.type.ref) throw new Error("Could not resolve reference to type: " + e$1.type.$refText);
		let i$1 = Ws(e$1.type.ref)?.terminal;
		if (!i$1) throw new Error("Could not find name assignment for type: " + Ti(e$1.type.ref));
		return Fd(r, e$1, i$1);
	}
}
m(Fd, "buildCrossReference");
function Zm(r, e$1) {
	let t = r.consume++, n$1 = r.tokens[e$1.value];
	if (!n$1) throw new Error("Could not find token for keyword: " + e$1.value);
	return () => r.parser.consume(t, n$1, e$1);
}
m(Zm, "buildKeyword");
function Gd(r, e$1, t, n$1) {
	let i$1 = e$1 && Pt(e$1);
	if (!n$1) if (i$1) {
		let s$1 = r.or++;
		return (o$1) => r.parser.alternatives(s$1, [{
			ALT: /* @__PURE__ */ m(() => t(o$1), "ALT"),
			GATE: /* @__PURE__ */ m(() => i$1(o$1), "GATE")
		}, {
			ALT: /* @__PURE__ */ va(),
			GATE: /* @__PURE__ */ m(() => !i$1(o$1), "GATE")
		}]);
	} else return t;
	if (n$1 === "*") {
		let s$1 = r.many++;
		return (o$1) => r.parser.many(s$1, {
			DEF: /* @__PURE__ */ m(() => t(o$1), "DEF"),
			GATE: i$1 ? () => i$1(o$1) : void 0
		});
	} else if (n$1 === "+") {
		let s$1 = r.many++;
		if (i$1) {
			let o$1 = r.or++;
			return (l$2) => r.parser.alternatives(o$1, [{
				ALT: /* @__PURE__ */ m(() => r.parser.atLeastOne(s$1, { DEF: /* @__PURE__ */ m(() => t(l$2), "DEF") }), "ALT"),
				GATE: /* @__PURE__ */ m(() => i$1(l$2), "GATE")
			}, {
				ALT: /* @__PURE__ */ va(),
				GATE: /* @__PURE__ */ m(() => !i$1(l$2), "GATE")
			}]);
		} else return (o$1) => r.parser.atLeastOne(s$1, { DEF: /* @__PURE__ */ m(() => t(o$1), "DEF") });
	} else if (n$1 === "?") {
		let s$1 = r.optional++;
		return (o$1) => r.parser.optional(s$1, {
			DEF: /* @__PURE__ */ m(() => t(o$1), "DEF"),
			GATE: i$1 ? () => i$1(o$1) : void 0
		});
	} else ct(n$1);
}
m(Gd, "wrap");
function Ud(r, e$1) {
	let t = /* @__PURE__ */ eg(r, e$1), n$1 = /* @__PURE__ */ r.parser.getRule(t);
	if (!n$1) throw new Error(`Rule "${t}" not found."`);
	return n$1;
}
m(Ud, "getRule");
function eg(r, e$1) {
	if (Se(e$1)) return e$1.name;
	if (r.ruleNames.has(e$1)) return r.ruleNames.get(e$1);
	{
		let t = e$1, n$1 = t.$container, i$1 = e$1.$type;
		for (; !Se(n$1);) (Ut(n$1) || Ps(n$1) || Ms(n$1)) && (i$1 = n$1.elements.indexOf(t).toString() + ":" + i$1), t = n$1, n$1 = n$1.$container;
		return i$1 = n$1.name + ":" + i$1, r.ruleNames.set(e$1, i$1), i$1;
	}
}
m(eg, "getRuleName");
function eu(r, e$1) {
	let t = r.tokens[e$1];
	if (!t) throw new Error(`Token "${e$1}" not found."`);
	return t;
}
m(eu, "getToken");
function tu(r) {
	let e$1 = r.Grammar, t = r.parser.Lexer, n$1 = new ji(r);
	return Hi(e$1, n$1, t.definition), n$1.finalize(), n$1;
}
m(tu, "createCompletionParser");
function ru(r) {
	let e$1 = /* @__PURE__ */ Bd(r);
	return e$1.finalize(), e$1;
}
m(ru, "createLangiumParser");
function Bd(r) {
	let e$1 = r.Grammar, t = r.parser.Lexer, n$1 = new Vi$1(r);
	return Hi(e$1, n$1, t.definition);
}
m(Bd, "prepareLangiumParser");
var bt = class {
	static {
		m(this, "DefaultTokenBuilder");
	}
	constructor() {
		this.diagnostics = [];
	}
	buildTokens(e$1, t) {
		let n$1 = /* @__PURE__ */ j(/* @__PURE__ */ mi(e$1, !1)), i$1 = /* @__PURE__ */ this.buildTerminalTokens(n$1), s$1 = /* @__PURE__ */ this.buildKeywordTokens(n$1, i$1, t);
		return i$1.forEach((o$1) => {
			let l$2 = o$1.PATTERN;
			typeof l$2 == "object" && l$2 && "test" in l$2 && gn(l$2) ? s$1.unshift(o$1) : s$1.push(o$1);
		}), s$1;
	}
	flushLexingReport(e$1) {
		return { diagnostics: /* @__PURE__ */ this.popDiagnostics() };
	}
	popDiagnostics() {
		let e$1 = [...this.diagnostics];
		return this.diagnostics = [], e$1;
	}
	buildTerminalTokens(e$1) {
		return e$1.filter(He).filter((t) => !t.fragment).map((t) => this.buildTerminalToken(t)).toArray();
	}
	buildTerminalToken(e$1) {
		let t = /* @__PURE__ */ Tn(e$1), n$1 = this.requiresCustomPattern(t) ? this.regexPatternFunction(t) : t, i$1 = {
			name: e$1.name,
			PATTERN: n$1
		};
		return typeof n$1 == "function" && (i$1.LINE_BREAKS = !0), e$1.hidden && (i$1.GROUP = gn(t) ? se.SKIPPED : "hidden"), i$1;
	}
	requiresCustomPattern(e$1) {
		return e$1.flags.includes("u") || e$1.flags.includes("s") ? !0 : !!(e$1.source.includes("?<=") || e$1.source.includes("?<!"));
	}
	regexPatternFunction(e$1) {
		let t = new RegExp(e$1, e$1.flags + "y");
		return (n$1, i$1) => (t.lastIndex = i$1, t.exec(n$1));
	}
	buildKeywordTokens(e$1, t, n$1) {
		return e$1.filter(Se).flatMap((i$1) => ft(i$1).filter(Ye)).distinct((i$1) => i$1.value).toArray().sort((i$1, s$1) => s$1.value.length - i$1.value.length).map((i$1) => this.buildKeywordToken(i$1, t, !!n$1?.caseInsensitive));
	}
	buildKeywordToken(e$1, t, n$1) {
		let i$1 = /* @__PURE__ */ this.buildKeywordPattern(e$1, n$1), s$1 = {
			name: e$1.value,
			PATTERN: i$1,
			LONGER_ALT: /* @__PURE__ */ this.findLongerAlt(e$1, t)
		};
		return typeof i$1 == "function" && (s$1.LINE_BREAKS = !0), s$1;
	}
	buildKeywordPattern(e$1, t) {
		return t ? new RegExp(jo(e$1.value)) : e$1.value;
	}
	findLongerAlt(e$1, t) {
		return t.reduce((n$1, i$1) => {
			let s$1 = i$1?.PATTERN;
			return s$1?.source && Ho("^" + s$1.source + "$", e$1.value) && n$1.push(i$1), n$1;
		}, []);
	}
};
var Tr = class {
	static {
		m(this, "DefaultValueConverter");
	}
	convert(e$1, t) {
		let n$1 = t.grammarSource;
		if (nr(n$1) && (n$1 = /* @__PURE__ */ Xo(n$1)), nt(n$1)) {
			let i$1 = n$1.rule.ref;
			if (!i$1) throw new Error("This cst node was not parsed by a rule.");
			return this.runConverter(i$1, e$1, t);
		}
		return e$1;
	}
	runConverter(e$1, t, n$1) {
		var i$1;
		switch (e$1.name.toUpperCase()) {
			case "INT": return pt.convertInt(t);
			case "STRING": return pt.convertString(t);
			case "ID": return pt.convertID(t);
		}
		switch ((i$1 = /* @__PURE__ */ rl(e$1)) === null || i$1 === void 0 ? void 0 : i$1.toLowerCase()) {
			case "number": return pt.convertNumber(t);
			case "boolean": return pt.convertBoolean(t);
			case "bigint": return pt.convertBigint(t);
			case "date": return pt.convertDate(t);
			default: return t;
		}
	}
}, pt;
(function(r) {
	function e$1(c$2) {
		let f$1 = "";
		for (let d$1 = 1; d$1 < c$2.length - 1; d$1++) {
			let h$4 = /* @__PURE__ */ c$2.charAt(d$1);
			if (h$4 === "\\") {
				let p$2 = /* @__PURE__ */ c$2.charAt(++d$1);
				f$1 += /* @__PURE__ */ t(p$2);
			} else f$1 += h$4;
		}
		return f$1;
	}
	m(e$1, "convertString"), r.convertString = e$1;
	function t(c$2) {
		switch (c$2) {
			case "b": return "\b";
			case "f": return "\f";
			case "n": return `
`;
			case "r": return "\r";
			case "t": return "	";
			case "v": return "\v";
			case "0": return "\0";
			default: return c$2;
		}
	}
	m(t, "convertEscapeCharacter");
	function n$1(c$2) {
		return c$2.charAt(0) === "^" ? c$2.substring(1) : c$2;
	}
	m(n$1, "convertID"), r.convertID = n$1;
	function i$1(c$2) {
		return parseInt(c$2);
	}
	m(i$1, "convertInt"), r.convertInt = i$1;
	function s$1(c$2) {
		return BigInt(c$2);
	}
	m(s$1, "convertBigint"), r.convertBigint = s$1;
	function o$1(c$2) {
		return new Date(c$2);
	}
	m(o$1, "convertDate"), r.convertDate = o$1;
	function l$2(c$2) {
		return Number(c$2);
	}
	m(l$2, "convertNumber"), r.convertNumber = l$2;
	function u$2(c$2) {
		return c$2.toLowerCase() === "true";
	}
	m(u$2, "convertBoolean"), r.convertBoolean = u$2;
})(pt || (pt = {}));
var S = {};
p(S, /* @__PURE__ */ q(/* @__PURE__ */ Hd(), 1));
function fu() {
	return new Promise((r) => {
		typeof setImmediate > "u" ? setTimeout(r, 0) : setImmediate(r);
	});
}
m(fu, "delayNextTick");
var Da = 0, zd = 10;
function Fa() {
	return Da = /* @__PURE__ */ performance.now(), new S.CancellationTokenSource();
}
m(Fa, "startCancelableOperation");
function qd(r) {
	zd = r;
}
m(qd, "setInterruptionPeriod");
var mt = /* @__PURE__ */ Symbol("OperationCancelled");
function gt(r) {
	return r === mt;
}
m(gt, "isOperationCancelled");
async function ce(r) {
	if (r === S.CancellationToken.None) return;
	let e$1 = /* @__PURE__ */ performance.now();
	if (e$1 - Da >= zd && (Da = e$1, await fu(), Da = /* @__PURE__ */ performance.now()), r.isCancellationRequested) throw mt;
}
m(ce, "interruptAndCheck");
var Ge = class {
	static {
		m(this, "Deferred");
	}
	constructor() {
		this.promise = new Promise((e$1, t) => {
			this.resolve = (n$1) => (e$1(n$1), this), this.reject = (n$1) => (t(n$1), this);
		});
	}
};
var Ga = class r {
	static {
		m(this, "FullTextDocument");
	}
	constructor(e$1, t, n$1, i$1) {
		this._uri = e$1, this._languageId = t, this._version = n$1, this._content = i$1, this._lineOffsets = void 0;
	}
	get uri() {
		return this._uri;
	}
	get languageId() {
		return this._languageId;
	}
	get version() {
		return this._version;
	}
	getText(e$1) {
		if (e$1) {
			let t = /* @__PURE__ */ this.offsetAt(e$1.start), n$1 = /* @__PURE__ */ this.offsetAt(e$1.end);
			return this._content.substring(t, n$1);
		}
		return this._content;
	}
	update(e$1, t) {
		for (let n$1 of e$1) if (r.isIncremental(n$1)) {
			let i$1 = /* @__PURE__ */ Jd(n$1.range), s$1 = /* @__PURE__ */ this.offsetAt(i$1.start), o$1 = /* @__PURE__ */ this.offsetAt(i$1.end);
			this._content = this._content.substring(0, s$1) + n$1.text + this._content.substring(o$1, this._content.length);
			let l$2 = /* @__PURE__ */ Math.max(i$1.start.line, 0), u$2 = /* @__PURE__ */ Math.max(i$1.end.line, 0), c$2 = this._lineOffsets, f$1 = /* @__PURE__ */ Xd(n$1.text, !1, s$1);
			if (u$2 - l$2 === f$1.length) for (let h$4 = 0, p$2 = f$1.length; h$4 < p$2; h$4++) c$2[h$4 + l$2 + 1] = f$1[h$4];
			else f$1.length < 1e4 ? c$2.splice(l$2 + 1, u$2 - l$2, ...f$1) : this._lineOffsets = c$2 = /* @__PURE__ */ c$2.slice(0, l$2 + 1).concat(f$1, /* @__PURE__ */ c$2.slice(u$2 + 1));
			let d$1 = n$1.text.length - (o$1 - s$1);
			if (d$1 !== 0) for (let h$4 = l$2 + 1 + f$1.length, p$2 = c$2.length; h$4 < p$2; h$4++) c$2[h$4] = c$2[h$4] + d$1;
		} else if (r.isFull(n$1)) this._content = n$1.text, this._lineOffsets = void 0;
		else throw new Error("Unknown change event received");
		this._version = t;
	}
	getLineOffsets() {
		return this._lineOffsets === void 0 && (this._lineOffsets = /* @__PURE__ */ Xd(this._content, !0)), this._lineOffsets;
	}
	positionAt(e$1) {
		e$1 = /* @__PURE__ */ Math.max(/* @__PURE__ */ Math.min(e$1, this._content.length), 0);
		let t = /* @__PURE__ */ this.getLineOffsets(), n$1 = 0, i$1 = t.length;
		if (i$1 === 0) return {
			line: 0,
			character: e$1
		};
		for (; n$1 < i$1;) {
			let o$1 = /* @__PURE__ */ Math.floor((n$1 + i$1) / 2);
			t[o$1] > e$1 ? i$1 = o$1 : n$1 = o$1 + 1;
		}
		let s$1 = n$1 - 1;
		return e$1 = /* @__PURE__ */ this.ensureBeforeEOL(e$1, t[s$1]), {
			line: s$1,
			character: e$1 - t[s$1]
		};
	}
	offsetAt(e$1) {
		let t = /* @__PURE__ */ this.getLineOffsets();
		if (e$1.line >= t.length) return this._content.length;
		if (e$1.line < 0) return 0;
		let n$1 = t[e$1.line];
		if (e$1.character <= 0) return n$1;
		let i$1 = e$1.line + 1 < t.length ? t[e$1.line + 1] : this._content.length, s$1 = /* @__PURE__ */ Math.min(n$1 + e$1.character, i$1);
		return this.ensureBeforeEOL(s$1, n$1);
	}
	ensureBeforeEOL(e$1, t) {
		for (; e$1 > t && Yd(/* @__PURE__ */ this._content.charCodeAt(e$1 - 1));) e$1--;
		return e$1;
	}
	get lineCount() {
		return this.getLineOffsets().length;
	}
	static isIncremental(e$1) {
		let t = e$1;
		return t != null && typeof t.text == "string" && t.range !== void 0 && (t.rangeLength === void 0 || typeof t.rangeLength == "number");
	}
	static isFull(e$1) {
		let t = e$1;
		return t != null && typeof t.text == "string" && t.range === void 0 && t.rangeLength === void 0;
	}
}, jn;
(function(r) {
	function e$1(i$1, s$1, o$1, l$2) {
		return new Ga(i$1, s$1, o$1, l$2);
	}
	m(e$1, "create"), r.create = e$1;
	function t(i$1, s$1, o$1) {
		if (i$1 instanceof Ga) return i$1.update(s$1, o$1), i$1;
		throw new Error("TextDocument.update: document must be created by TextDocument.create");
	}
	m(t, "update"), r.update = t;
	function n$1(i$1, s$1) {
		let o$1 = /* @__PURE__ */ i$1.getText(), l$2 = /* @__PURE__ */ du(/* @__PURE__ */ s$1.map(cg), (f$1, d$1) => {
			let h$4 = f$1.range.start.line - d$1.range.start.line;
			return h$4 === 0 ? f$1.range.start.character - d$1.range.start.character : h$4;
		}), u$2 = 0, c$2 = [];
		for (let f$1 of l$2) {
			let d$1 = /* @__PURE__ */ i$1.offsetAt(f$1.range.start);
			if (d$1 < u$2) throw new Error("Overlapping edit");
			d$1 > u$2 && c$2.push(/* @__PURE__ */ o$1.substring(u$2, d$1)), f$1.newText.length && c$2.push(f$1.newText), u$2 = /* @__PURE__ */ i$1.offsetAt(f$1.range.end);
		}
		return c$2.push(/* @__PURE__ */ o$1.substr(u$2)), c$2.join("");
	}
	m(n$1, "applyEdits"), r.applyEdits = n$1;
})(jn || (jn = {}));
function du(r, e$1) {
	if (r.length <= 1) return r;
	let t = r.length / 2 | 0, n$1 = /* @__PURE__ */ r.slice(0, t), i$1 = /* @__PURE__ */ r.slice(t);
	du(n$1, e$1), du(i$1, e$1);
	let s$1 = 0, o$1 = 0, l$2 = 0;
	for (; s$1 < n$1.length && o$1 < i$1.length;) e$1(n$1[s$1], i$1[o$1]) <= 0 ? r[l$2++] = n$1[s$1++] : r[l$2++] = i$1[o$1++];
	for (; s$1 < n$1.length;) r[l$2++] = n$1[s$1++];
	for (; o$1 < i$1.length;) r[l$2++] = i$1[o$1++];
	return r;
}
m(du, "mergeSort");
function Xd(r, e$1, t = 0) {
	let n$1 = e$1 ? [t] : [];
	for (let i$1 = 0; i$1 < r.length; i$1++) {
		let s$1 = /* @__PURE__ */ r.charCodeAt(i$1);
		Yd(s$1) && (s$1 === 13 && i$1 + 1 < r.length && r.charCodeAt(i$1 + 1) === 10 && i$1++, n$1.push(t + i$1 + 1));
	}
	return n$1;
}
m(Xd, "computeLineOffsets");
function Yd(r) {
	return r === 13 || r === 10;
}
m(Yd, "isEOL");
function Jd(r) {
	let e$1 = r.start, t = r.end;
	return e$1.line > t.line || e$1.line === t.line && e$1.character > t.character ? {
		start: t,
		end: e$1
	} : r;
}
m(Jd, "getWellformedRange");
function cg(r) {
	let e$1 = /* @__PURE__ */ Jd(r.range);
	return e$1 !== r.range ? {
		newText: r.newText,
		range: e$1
	} : r;
}
m(cg, "getWellformedEdit");
var Qd;
(() => {
	var r = { 470: (i$1) => {
		function s$1(u$2) {
			if (typeof u$2 != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(u$2));
		}
		m(s$1, "e");
		function o$1(u$2, c$2) {
			for (var f$1, d$1 = "", h$4 = 0, p$2 = -1, g$3 = 0, y$1 = 0; y$1 <= u$2.length; ++y$1) {
				if (y$1 < u$2.length) f$1 = /* @__PURE__ */ u$2.charCodeAt(y$1);
				else {
					if (f$1 === 47) break;
					f$1 = 47;
				}
				if (f$1 === 47) {
					if (!(p$2 === y$1 - 1 || g$3 === 1)) if (p$2 !== y$1 - 1 && g$3 === 2) {
						if (d$1.length < 2 || h$4 !== 2 || d$1.charCodeAt(d$1.length - 1) !== 46 || d$1.charCodeAt(d$1.length - 2) !== 46) {
							if (d$1.length > 2) {
								var v$3 = /* @__PURE__ */ d$1.lastIndexOf("/");
								if (v$3 !== d$1.length - 1) {
									v$3 === -1 ? (d$1 = "", h$4 = 0) : h$4 = (d$1 = /* @__PURE__ */ d$1.slice(0, v$3)).length - 1 - d$1.lastIndexOf("/"), p$2 = y$1, g$3 = 0;
									continue;
								}
							} else if (d$1.length === 2 || d$1.length === 1) {
								d$1 = "", h$4 = 0, p$2 = y$1, g$3 = 0;
								continue;
							}
						}
						c$2 && (d$1.length > 0 ? d$1 += "/.." : d$1 = "..", h$4 = 2);
					} else d$1.length > 0 ? d$1 += "/" + u$2.slice(p$2 + 1, y$1) : d$1 = /* @__PURE__ */ u$2.slice(p$2 + 1, y$1), h$4 = y$1 - p$2 - 1;
					p$2 = y$1, g$3 = 0;
				} else f$1 === 46 && g$3 !== -1 ? ++g$3 : g$3 = -1;
			}
			return d$1;
		}
		m(o$1, "r");
		var l$2 = {
			resolve: /* @__PURE__ */ m(function() {
				for (var u$2, c$2 = "", f$1 = !1, d$1 = arguments.length - 1; d$1 >= -1 && !f$1; d$1--) {
					var h$4;
					d$1 >= 0 ? h$4 = arguments[d$1] : (u$2 === void 0 && (u$2 = /* @__PURE__ */ process.cwd()), h$4 = u$2), s$1(h$4), h$4.length !== 0 && (c$2 = h$4 + "/" + c$2, f$1 = h$4.charCodeAt(0) === 47);
				}
				return c$2 = /* @__PURE__ */ o$1(c$2, !f$1), f$1 ? c$2.length > 0 ? "/" + c$2 : "/" : c$2.length > 0 ? c$2 : ".";
			}, "resolve"),
			normalize: /* @__PURE__ */ m(function(u$2) {
				if (s$1(u$2), u$2.length === 0) return ".";
				var c$2 = u$2.charCodeAt(0) === 47, f$1 = u$2.charCodeAt(u$2.length - 1) === 47;
				return (u$2 = /* @__PURE__ */ o$1(u$2, !c$2)).length !== 0 || c$2 || (u$2 = "."), u$2.length > 0 && f$1 && (u$2 += "/"), c$2 ? "/" + u$2 : u$2;
			}, "normalize"),
			isAbsolute: /* @__PURE__ */ m(function(u$2) {
				return s$1(u$2), u$2.length > 0 && u$2.charCodeAt(0) === 47;
			}, "isAbsolute"),
			join: /* @__PURE__ */ m(function() {
				if (arguments.length === 0) return ".";
				for (var u$2, c$2 = 0; c$2 < arguments.length; ++c$2) {
					var f$1 = arguments[c$2];
					s$1(f$1), f$1.length > 0 && (u$2 === void 0 ? u$2 = f$1 : u$2 += "/" + f$1);
				}
				return u$2 === void 0 ? "." : l$2.normalize(u$2);
			}, "join"),
			relative: /* @__PURE__ */ m(function(u$2, c$2) {
				if (s$1(u$2), s$1(c$2), u$2 === c$2 || (u$2 = /* @__PURE__ */ l$2.resolve(u$2)) === (c$2 = /* @__PURE__ */ l$2.resolve(c$2))) return "";
				for (var f$1 = 1; f$1 < u$2.length && u$2.charCodeAt(f$1) === 47; ++f$1);
				for (var d$1 = u$2.length, h$4 = d$1 - f$1, p$2 = 1; p$2 < c$2.length && c$2.charCodeAt(p$2) === 47; ++p$2);
				for (var g$3 = c$2.length - p$2, y$1 = h$4 < g$3 ? h$4 : g$3, v$3 = -1, x$2 = 0; x$2 <= y$1; ++x$2) {
					if (x$2 === y$1) {
						if (g$3 > y$1) {
							if (c$2.charCodeAt(p$2 + x$2) === 47) return c$2.slice(p$2 + x$2 + 1);
							if (x$2 === 0) return c$2.slice(p$2 + x$2);
						} else h$4 > y$1 && (u$2.charCodeAt(f$1 + x$2) === 47 ? v$3 = x$2 : x$2 === 0 && (v$3 = 0));
						break;
					}
					var A$3 = /* @__PURE__ */ u$2.charCodeAt(f$1 + x$2);
					if (A$3 !== c$2.charCodeAt(p$2 + x$2)) break;
					A$3 === 47 && (v$3 = x$2);
				}
				var R$2 = "";
				for (x$2 = f$1 + v$3 + 1; x$2 <= d$1; ++x$2) x$2 !== d$1 && u$2.charCodeAt(x$2) !== 47 || (R$2.length === 0 ? R$2 += ".." : R$2 += "/..");
				return R$2.length > 0 ? R$2 + c$2.slice(p$2 + v$3) : (p$2 += v$3, c$2.charCodeAt(p$2) === 47 && ++p$2, c$2.slice(p$2));
			}, "relative"),
			_makeLong: /* @__PURE__ */ m(function(u$2) {
				return u$2;
			}, "_makeLong"),
			dirname: /* @__PURE__ */ m(function(u$2) {
				if (s$1(u$2), u$2.length === 0) return ".";
				for (var c$2 = /* @__PURE__ */ u$2.charCodeAt(0), f$1 = c$2 === 47, d$1 = -1, h$4 = !0, p$2 = u$2.length - 1; p$2 >= 1; --p$2) if ((c$2 = /* @__PURE__ */ u$2.charCodeAt(p$2)) === 47) {
					if (!h$4) {
						d$1 = p$2;
						break;
					}
				} else h$4 = !1;
				return d$1 === -1 ? f$1 ? "/" : "." : f$1 && d$1 === 1 ? "//" : u$2.slice(0, d$1);
			}, "dirname"),
			basename: /* @__PURE__ */ m(function(u$2, c$2) {
				if (c$2 !== void 0 && typeof c$2 != "string") throw new TypeError("\"ext\" argument must be a string");
				s$1(u$2);
				var f$1, d$1 = 0, h$4 = -1, p$2 = !0;
				if (c$2 !== void 0 && c$2.length > 0 && c$2.length <= u$2.length) {
					if (c$2.length === u$2.length && c$2 === u$2) return "";
					var g$3 = c$2.length - 1, y$1 = -1;
					for (f$1 = u$2.length - 1; f$1 >= 0; --f$1) {
						var v$3 = /* @__PURE__ */ u$2.charCodeAt(f$1);
						if (v$3 === 47) {
							if (!p$2) {
								d$1 = f$1 + 1;
								break;
							}
						} else y$1 === -1 && (p$2 = !1, y$1 = f$1 + 1), g$3 >= 0 && (v$3 === c$2.charCodeAt(g$3) ? --g$3 == -1 && (h$4 = f$1) : (g$3 = -1, h$4 = y$1));
					}
					return d$1 === h$4 ? h$4 = y$1 : h$4 === -1 && (h$4 = u$2.length), u$2.slice(d$1, h$4);
				}
				for (f$1 = u$2.length - 1; f$1 >= 0; --f$1) if (u$2.charCodeAt(f$1) === 47) {
					if (!p$2) {
						d$1 = f$1 + 1;
						break;
					}
				} else h$4 === -1 && (p$2 = !1, h$4 = f$1 + 1);
				return h$4 === -1 ? "" : u$2.slice(d$1, h$4);
			}, "basename"),
			extname: /* @__PURE__ */ m(function(u$2) {
				s$1(u$2);
				for (var c$2 = -1, f$1 = 0, d$1 = -1, h$4 = !0, p$2 = 0, g$3 = u$2.length - 1; g$3 >= 0; --g$3) {
					var y$1 = /* @__PURE__ */ u$2.charCodeAt(g$3);
					if (y$1 !== 47) d$1 === -1 && (h$4 = !1, d$1 = g$3 + 1), y$1 === 46 ? c$2 === -1 ? c$2 = g$3 : p$2 !== 1 && (p$2 = 1) : c$2 !== -1 && (p$2 = -1);
					else if (!h$4) {
						f$1 = g$3 + 1;
						break;
					}
				}
				return c$2 === -1 || d$1 === -1 || p$2 === 0 || p$2 === 1 && c$2 === d$1 - 1 && c$2 === f$1 + 1 ? "" : u$2.slice(c$2, d$1);
			}, "extname"),
			format: /* @__PURE__ */ m(function(u$2) {
				if (u$2 === null || typeof u$2 != "object") throw new TypeError("The \"pathObject\" argument must be of type Object. Received type " + typeof u$2);
				return function(c$2, f$1) {
					var d$1 = f$1.dir || f$1.root, h$4 = f$1.base || (f$1.name || "") + (f$1.ext || "");
					return d$1 ? d$1 === f$1.root ? d$1 + h$4 : d$1 + "/" + h$4 : h$4;
				}(0, u$2);
			}, "format"),
			parse: /* @__PURE__ */ m(function(u$2) {
				s$1(u$2);
				var c$2 = {
					root: "",
					dir: "",
					base: "",
					ext: "",
					name: ""
				};
				if (u$2.length === 0) return c$2;
				var f$1, d$1 = /* @__PURE__ */ u$2.charCodeAt(0), h$4 = d$1 === 47;
				h$4 ? (c$2.root = "/", f$1 = 1) : f$1 = 0;
				for (var p$2 = -1, g$3 = 0, y$1 = -1, v$3 = !0, x$2 = u$2.length - 1, A$3 = 0; x$2 >= f$1; --x$2) if ((d$1 = /* @__PURE__ */ u$2.charCodeAt(x$2)) !== 47) y$1 === -1 && (v$3 = !1, y$1 = x$2 + 1), d$1 === 46 ? p$2 === -1 ? p$2 = x$2 : A$3 !== 1 && (A$3 = 1) : p$2 !== -1 && (A$3 = -1);
				else if (!v$3) {
					g$3 = x$2 + 1;
					break;
				}
				return p$2 === -1 || y$1 === -1 || A$3 === 0 || A$3 === 1 && p$2 === y$1 - 1 && p$2 === g$3 + 1 ? y$1 !== -1 && (c$2.base = c$2.name = g$3 === 0 && h$4 ? u$2.slice(1, y$1) : u$2.slice(g$3, y$1)) : (g$3 === 0 && h$4 ? (c$2.name = /* @__PURE__ */ u$2.slice(1, p$2), c$2.base = /* @__PURE__ */ u$2.slice(1, y$1)) : (c$2.name = /* @__PURE__ */ u$2.slice(g$3, p$2), c$2.base = /* @__PURE__ */ u$2.slice(g$3, y$1)), c$2.ext = /* @__PURE__ */ u$2.slice(p$2, y$1)), g$3 > 0 ? c$2.dir = /* @__PURE__ */ u$2.slice(0, g$3 - 1) : h$4 && (c$2.dir = "/"), c$2;
			}, "parse"),
			sep: "/",
			delimiter: ":",
			win32: null,
			posix: null
		};
		l$2.posix = l$2, i$1.exports = l$2;
	} }, e$1 = {};
	function t(i$1) {
		var s$1 = e$1[i$1];
		if (s$1 !== void 0) return s$1.exports;
		var o$1 = e$1[i$1] = { exports: {} };
		return r[i$1](o$1, o$1.exports, t), o$1.exports;
	}
	m(t, "r"), t.d = (i$1, s$1) => {
		for (var o$1 in s$1) t.o(s$1, o$1) && !t.o(i$1, o$1) && Object.defineProperty(i$1, o$1, {
			enumerable: !0,
			get: s$1[o$1]
		});
	}, t.o = (i$1, s$1) => Object.prototype.hasOwnProperty.call(i$1, s$1), t.r = (i$1) => {
		typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(i$1, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(i$1, "__esModule", { value: !0 });
	};
	var n$1 = {};
	(() => {
		let i$1;
		t.r(n$1), t.d(n$1, {
			URI: /* @__PURE__ */ m(() => h$4, "URI"),
			Utils: /* @__PURE__ */ m(() => Tt$2, "Utils")
		}), typeof process == "object" ? i$1 = process.platform === "win32" : typeof navigator == "object" && (i$1 = navigator.userAgent.indexOf("Windows") >= 0);
		let s$1 = /^\w[\w\d+.-]*$/, o$1 = /^\//, l$2 = /^\/\//;
		function u$2(k$4, T$3) {
			if (!k$4.scheme && T$3) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${k$4.authority}", path: "${k$4.path}", query: "${k$4.query}", fragment: "${k$4.fragment}"}`);
			if (k$4.scheme && !s$1.test(k$4.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
			if (k$4.path) {
				if (k$4.authority) {
					if (!o$1.test(k$4.path)) throw new Error("[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash (\"/\") character");
				} else if (l$2.test(k$4.path)) throw new Error("[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters (\"//\")");
			}
		}
		m(u$2, "s");
		let c$2 = "", f$1 = "/", d$1 = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
		class h$4 {
			static {
				m(this, "f");
			}
			static isUri(T$3) {
				return T$3 instanceof h$4 || !!T$3 && typeof T$3.authority == "string" && typeof T$3.fragment == "string" && typeof T$3.path == "string" && typeof T$3.query == "string" && typeof T$3.scheme == "string" && typeof T$3.fsPath == "string" && typeof T$3.with == "function" && typeof T$3.toString == "function";
			}
			scheme;
			authority;
			path;
			query;
			fragment;
			constructor(T$3, C$2, N$2, V$2, O$2, L$2 = !1) {
				typeof T$3 == "object" ? (this.scheme = T$3.scheme || c$2, this.authority = T$3.authority || c$2, this.path = T$3.path || c$2, this.query = T$3.query || c$2, this.fragment = T$3.fragment || c$2) : (this.scheme = /* @__PURE__ */ function(Le$2, Oe$2) {
					return Le$2 || Oe$2 ? Le$2 : "file";
				}(T$3, L$2), this.authority = C$2 || c$2, this.path = /* @__PURE__ */ function(Le$2, Oe$2) {
					switch (Le$2) {
						case "https":
						case "http":
						case "file": Oe$2 ? Oe$2[0] !== f$1 && (Oe$2 = f$1 + Oe$2) : Oe$2 = f$1;
					}
					return Oe$2;
				}(this.scheme, N$2 || c$2), this.query = V$2 || c$2, this.fragment = O$2 || c$2, u$2(this, L$2));
			}
			get fsPath() {
				return A$3(this, !1);
			}
			with(T$3) {
				if (!T$3) return this;
				let { scheme: C$2, authority: N$2, path: V$2, query: O$2, fragment: L$2 } = T$3;
				return C$2 === void 0 ? C$2 = this.scheme : C$2 === null && (C$2 = c$2), N$2 === void 0 ? N$2 = this.authority : N$2 === null && (N$2 = c$2), V$2 === void 0 ? V$2 = this.path : V$2 === null && (V$2 = c$2), O$2 === void 0 ? O$2 = this.query : O$2 === null && (O$2 = c$2), L$2 === void 0 ? L$2 = this.fragment : L$2 === null && (L$2 = c$2), C$2 === this.scheme && N$2 === this.authority && V$2 === this.path && O$2 === this.query && L$2 === this.fragment ? this : new g$3(C$2, N$2, V$2, O$2, L$2);
			}
			static parse(T$3, C$2 = !1) {
				let N$2 = /* @__PURE__ */ d$1.exec(T$3);
				return N$2 ? new g$3(N$2[2] || c$2, Te$2(N$2[4] || c$2), Te$2(N$2[5] || c$2), Te$2(N$2[7] || c$2), Te$2(N$2[9] || c$2), C$2) : new g$3(c$2, c$2, c$2, c$2, c$2);
			}
			static file(T$3) {
				let C$2 = c$2;
				if (i$1 && (T$3 = /* @__PURE__ */ T$3.replace(/\\/g, f$1)), T$3[0] === f$1 && T$3[1] === f$1) {
					let N$2 = /* @__PURE__ */ T$3.indexOf(f$1, 2);
					N$2 === -1 ? (C$2 = /* @__PURE__ */ T$3.substring(2), T$3 = f$1) : (C$2 = /* @__PURE__ */ T$3.substring(2, N$2), T$3 = T$3.substring(N$2) || f$1);
				}
				return new g$3("file", C$2, T$3, c$2, c$2);
			}
			static from(T$3) {
				let C$2 = new g$3(T$3.scheme, T$3.authority, T$3.path, T$3.query, T$3.fragment);
				return u$2(C$2, !0), C$2;
			}
			toString(T$3 = !1) {
				return R$2(this, T$3);
			}
			toJSON() {
				return this;
			}
			static revive(T$3) {
				if (T$3) {
					if (T$3 instanceof h$4) return T$3;
					{
						let C$2 = new g$3(T$3);
						return C$2._formatted = T$3.external, C$2._fsPath = T$3._sep === p$2 ? T$3.fsPath : null, C$2;
					}
				}
				return T$3;
			}
		}
		let p$2 = i$1 ? 1 : void 0;
		class g$3 extends h$4 {
			static {
				m(this, "l");
			}
			_formatted = null;
			_fsPath = null;
			get fsPath() {
				return this._fsPath || (this._fsPath = /* @__PURE__ */ A$3(this, !1)), this._fsPath;
			}
			toString(T$3 = !1) {
				return T$3 ? R$2(this, !0) : (this._formatted || (this._formatted = /* @__PURE__ */ R$2(this, !1)), this._formatted);
			}
			toJSON() {
				let T$3 = { $mid: 1 };
				return this._fsPath && (T$3.fsPath = this._fsPath, T$3._sep = p$2), this._formatted && (T$3.external = this._formatted), this.path && (T$3.path = this.path), this.scheme && (T$3.scheme = this.scheme), this.authority && (T$3.authority = this.authority), this.query && (T$3.query = this.query), this.fragment && (T$3.fragment = this.fragment), T$3;
			}
		}
		let y$1 = {
			58: "%3A",
			47: "%2F",
			63: "%3F",
			35: "%23",
			91: "%5B",
			93: "%5D",
			64: "%40",
			33: "%21",
			36: "%24",
			38: "%26",
			39: "%27",
			40: "%28",
			41: "%29",
			42: "%2A",
			43: "%2B",
			44: "%2C",
			59: "%3B",
			61: "%3D",
			32: "%20"
		};
		function v$3(k$4, T$3, C$2) {
			let N$2, V$2 = -1;
			for (let O$2 = 0; O$2 < k$4.length; O$2++) {
				let L$2 = /* @__PURE__ */ k$4.charCodeAt(O$2);
				if (L$2 >= 97 && L$2 <= 122 || L$2 >= 65 && L$2 <= 90 || L$2 >= 48 && L$2 <= 57 || L$2 === 45 || L$2 === 46 || L$2 === 95 || L$2 === 126 || T$3 && L$2 === 47 || C$2 && L$2 === 91 || C$2 && L$2 === 93 || C$2 && L$2 === 58) V$2 !== -1 && (N$2 += /* @__PURE__ */ encodeURIComponent(/* @__PURE__ */ k$4.substring(V$2, O$2)), V$2 = -1), N$2 !== void 0 && (N$2 += /* @__PURE__ */ k$4.charAt(O$2));
				else {
					N$2 === void 0 && (N$2 = /* @__PURE__ */ k$4.substr(0, O$2));
					let Le$2 = y$1[L$2];
					Le$2 !== void 0 ? (V$2 !== -1 && (N$2 += /* @__PURE__ */ encodeURIComponent(/* @__PURE__ */ k$4.substring(V$2, O$2)), V$2 = -1), N$2 += Le$2) : V$2 === -1 && (V$2 = O$2);
				}
			}
			return V$2 !== -1 && (N$2 += /* @__PURE__ */ encodeURIComponent(/* @__PURE__ */ k$4.substring(V$2))), N$2 !== void 0 ? N$2 : k$4;
		}
		m(v$3, "d");
		function x$2(k$4) {
			let T$3;
			for (let C$2 = 0; C$2 < k$4.length; C$2++) {
				let N$2 = /* @__PURE__ */ k$4.charCodeAt(C$2);
				N$2 === 35 || N$2 === 63 ? (T$3 === void 0 && (T$3 = /* @__PURE__ */ k$4.substr(0, C$2)), T$3 += y$1[N$2]) : T$3 !== void 0 && (T$3 += k$4[C$2]);
			}
			return T$3 !== void 0 ? T$3 : k$4;
		}
		m(x$2, "p");
		function A$3(k$4, T$3) {
			let C$2;
			return C$2 = k$4.authority && k$4.path.length > 1 && k$4.scheme === "file" ? `//${k$4.authority}${k$4.path}` : k$4.path.charCodeAt(0) === 47 && (k$4.path.charCodeAt(1) >= 65 && k$4.path.charCodeAt(1) <= 90 || k$4.path.charCodeAt(1) >= 97 && k$4.path.charCodeAt(1) <= 122) && k$4.path.charCodeAt(2) === 58 ? T$3 ? k$4.path.substr(1) : k$4.path[1].toLowerCase() + k$4.path.substr(2) : k$4.path, i$1 && (C$2 = /* @__PURE__ */ C$2.replace(/\//g, "\\")), C$2;
		}
		m(A$3, "m");
		function R$2(k$4, T$3) {
			let C$2 = T$3 ? x$2 : v$3, N$2 = "", { scheme: V$2, authority: O$2, path: L$2, query: Le$2, fragment: Oe$2 } = k$4;
			if (V$2 && (N$2 += V$2, N$2 += ":"), (O$2 || V$2 === "file") && (N$2 += f$1, N$2 += f$1), O$2) {
				let ee$2 = /* @__PURE__ */ O$2.indexOf("@");
				if (ee$2 !== -1) {
					let Ht$2 = /* @__PURE__ */ O$2.substr(0, ee$2);
					O$2 = /* @__PURE__ */ O$2.substr(ee$2 + 1), ee$2 = /* @__PURE__ */ Ht$2.lastIndexOf(":"), ee$2 === -1 ? N$2 += /* @__PURE__ */ C$2(Ht$2, !1, !1) : (N$2 += /* @__PURE__ */ C$2(/* @__PURE__ */ Ht$2.substr(0, ee$2), !1, !1), N$2 += ":", N$2 += /* @__PURE__ */ C$2(/* @__PURE__ */ Ht$2.substr(ee$2 + 1), !1, !0)), N$2 += "@";
				}
				O$2 = /* @__PURE__ */ O$2.toLowerCase(), ee$2 = /* @__PURE__ */ O$2.lastIndexOf(":"), ee$2 === -1 ? N$2 += /* @__PURE__ */ C$2(O$2, !1, !0) : (N$2 += /* @__PURE__ */ C$2(/* @__PURE__ */ O$2.substr(0, ee$2), !1, !0), N$2 += /* @__PURE__ */ O$2.substr(ee$2));
			}
			if (L$2) {
				if (L$2.length >= 3 && L$2.charCodeAt(0) === 47 && L$2.charCodeAt(2) === 58) {
					let ee$2 = /* @__PURE__ */ L$2.charCodeAt(1);
					ee$2 >= 65 && ee$2 <= 90 && (L$2 = `/${String.fromCharCode(ee$2 + 32)}:${L$2.substr(3)}`);
				} else if (L$2.length >= 2 && L$2.charCodeAt(1) === 58) {
					let ee$2 = /* @__PURE__ */ L$2.charCodeAt(0);
					ee$2 >= 65 && ee$2 <= 90 && (L$2 = `${String.fromCharCode(ee$2 + 32)}:${L$2.substr(2)}`);
				}
				N$2 += /* @__PURE__ */ C$2(L$2, !0, !1);
			}
			return Le$2 && (N$2 += "?", N$2 += /* @__PURE__ */ C$2(Le$2, !1, !1)), Oe$2 && (N$2 += "#", N$2 += T$3 ? Oe$2 : v$3(Oe$2, !1, !1)), N$2;
		}
		m(R$2, "y");
		function P$1(k$4) {
			try {
				return decodeURIComponent(k$4);
			} catch {
				return k$4.length > 3 ? k$4.substr(0, 3) + P$1(/* @__PURE__ */ k$4.substr(3)) : k$4;
			}
		}
		m(P$1, "v");
		let b$1 = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
		function Te$2(k$4) {
			return k$4.match(b$1) ? k$4.replace(b$1, (T$3) => P$1(T$3)) : k$4;
		}
		m(Te$2, "C");
		var kr$2 = /* @__PURE__ */ t(470);
		let Ae$2 = kr$2.posix || kr$2, Mt$2 = "/";
		var Tt$2;
		(function(k$4) {
			k$4.joinPath = function(T$3, ...C$2) {
				return T$3.with({ path: /* @__PURE__ */ Ae$2.join(T$3.path, ...C$2) });
			}, k$4.resolvePath = function(T$3, ...C$2) {
				let N$2 = T$3.path, V$2 = !1;
				N$2[0] !== Mt$2 && (N$2 = Mt$2 + N$2, V$2 = !0);
				let O$2 = /* @__PURE__ */ Ae$2.resolve(N$2, ...C$2);
				return V$2 && O$2[0] === Mt$2 && !T$3.authority && (O$2 = /* @__PURE__ */ O$2.substring(1)), T$3.with({ path: O$2 });
			}, k$4.dirname = function(T$3) {
				if (T$3.path.length === 0 || T$3.path === Mt$2) return T$3;
				let C$2 = /* @__PURE__ */ Ae$2.dirname(T$3.path);
				return C$2.length === 1 && C$2.charCodeAt(0) === 46 && (C$2 = ""), T$3.with({ path: C$2 });
			}, k$4.basename = function(T$3) {
				return Ae$2.basename(T$3.path);
			}, k$4.extname = function(T$3) {
				return Ae$2.extname(T$3.path);
			};
		})(Tt$2 || (Tt$2 = {}));
	})(), Qd = n$1;
})();
var { URI: Ue, Utils: Hn } = Qd;
var Be;
(function(r) {
	r.basename = Hn.basename, r.dirname = Hn.dirname, r.extname = Hn.extname, r.joinPath = Hn.joinPath, r.resolvePath = Hn.resolvePath;
	function e$1(i$1, s$1) {
		return i$1?.toString() === s$1?.toString();
	}
	m(e$1, "equals"), r.equals = e$1;
	function t(i$1, s$1) {
		let o$1 = typeof i$1 == "string" ? i$1 : i$1.path, l$2 = typeof s$1 == "string" ? s$1 : s$1.path, u$2 = /* @__PURE__ */ o$1.split("/").filter((p$2) => p$2.length > 0), c$2 = /* @__PURE__ */ l$2.split("/").filter((p$2) => p$2.length > 0), f$1 = 0;
		for (; f$1 < u$2.length && u$2[f$1] === c$2[f$1]; f$1++);
		return /* @__PURE__ */ "../".repeat(u$2.length - f$1) + /* @__PURE__ */ c$2.slice(f$1).join("/");
	}
	m(t, "relative"), r.relative = t;
	function n$1(i$1) {
		return Ue.parse(/* @__PURE__ */ i$1.toString()).toString();
	}
	m(n$1, "normalize"), r.normalize = n$1;
})(Be || (Be = {}));
var Y$1;
(function(r) {
	r[r.Changed = 0] = "Changed", r[r.Parsed = 1] = "Parsed", r[r.IndexedContent = 2] = "IndexedContent", r[r.ComputedScopes = 3] = "ComputedScopes", r[r.Linked = 4] = "Linked", r[r.IndexedReferences = 5] = "IndexedReferences", r[r.Validated = 6] = "Validated";
})(Y$1 || (Y$1 = {}));
var zi$1 = class {
	static {
		m(this, "DefaultLangiumDocumentFactory");
	}
	constructor(e$1) {
		this.serviceRegistry = e$1.ServiceRegistry, this.textDocuments = e$1.workspace.TextDocuments, this.fileSystemProvider = e$1.workspace.FileSystemProvider;
	}
	async fromUri(e$1, t = S.CancellationToken.None) {
		let n$1 = await this.fileSystemProvider.readFile(e$1);
		return this.createAsync(e$1, n$1, t);
	}
	fromTextDocument(e$1, t, n$1) {
		return t = t ?? Ue.parse(e$1.uri), S.CancellationToken.is(n$1) ? this.createAsync(t, e$1, n$1) : this.create(t, e$1, n$1);
	}
	fromString(e$1, t, n$1) {
		return S.CancellationToken.is(n$1) ? this.createAsync(t, e$1, n$1) : this.create(t, e$1, n$1);
	}
	fromModel(e$1, t) {
		return this.create(t, { $model: e$1 });
	}
	create(e$1, t, n$1) {
		if (typeof t == "string") {
			let i$1 = /* @__PURE__ */ this.parse(e$1, t, n$1);
			return this.createLangiumDocument(i$1, e$1, void 0, t);
		} else if ("$model" in t) {
			let i$1 = {
				value: t.$model,
				parserErrors: [],
				lexerErrors: []
			};
			return this.createLangiumDocument(i$1, e$1);
		} else {
			let i$1 = /* @__PURE__ */ this.parse(e$1, /* @__PURE__ */ t.getText(), n$1);
			return this.createLangiumDocument(i$1, e$1, t);
		}
	}
	async createAsync(e$1, t, n$1) {
		if (typeof t == "string") {
			let i$1 = await this.parseAsync(e$1, t, n$1);
			return this.createLangiumDocument(i$1, e$1, void 0, t);
		} else {
			let i$1 = await this.parseAsync(e$1, /* @__PURE__ */ t.getText(), n$1);
			return this.createLangiumDocument(i$1, e$1, t);
		}
	}
	createLangiumDocument(e$1, t, n$1, i$1) {
		let s$1;
		if (n$1) s$1 = {
			parseResult: e$1,
			uri: t,
			state: Y$1.Parsed,
			references: [],
			textDocument: n$1
		};
		else {
			let o$1 = /* @__PURE__ */ this.createTextDocumentGetter(t, i$1);
			s$1 = {
				parseResult: e$1,
				uri: t,
				state: Y$1.Parsed,
				references: [],
				get textDocument() {
					return o$1();
				}
			};
		}
		return e$1.value.$document = s$1, s$1;
	}
	async update(e$1, t) {
		var n$1, i$1;
		let s$1 = (n$1 = e$1.parseResult.value.$cstNode) === null || n$1 === void 0 ? void 0 : n$1.root.fullText, o$1 = (i$1 = this.textDocuments) === null || i$1 === void 0 ? void 0 : i$1.get(/* @__PURE__ */ e$1.uri.toString()), l$2 = o$1 ? o$1.getText() : await this.fileSystemProvider.readFile(e$1.uri);
		if (o$1) Object.defineProperty(e$1, "textDocument", { value: o$1 });
		else {
			let u$2 = /* @__PURE__ */ this.createTextDocumentGetter(e$1.uri, l$2);
			Object.defineProperty(e$1, "textDocument", { get: u$2 });
		}
		return s$1 !== l$2 && (e$1.parseResult = await this.parseAsync(e$1.uri, l$2, t), e$1.parseResult.value.$document = e$1), e$1.state = Y$1.Parsed, e$1;
	}
	parse(e$1, t, n$1) {
		return this.serviceRegistry.getServices(e$1).parser.LangiumParser.parse(t, n$1);
	}
	parseAsync(e$1, t, n$1) {
		return this.serviceRegistry.getServices(e$1).parser.AsyncParser.parse(t, n$1);
	}
	createTextDocumentGetter(e$1, t) {
		let n$1 = this.serviceRegistry, i$1;
		return () => i$1 ?? (i$1 = /* @__PURE__ */ jn.create(/* @__PURE__ */ e$1.toString(), n$1.getServices(e$1).LanguageMetaData.languageId, 0, t ?? ""));
	}
}, qi = class {
	static {
		m(this, "DefaultLangiumDocuments");
	}
	constructor(e$1) {
		this.documentMap = /* @__PURE__ */ new Map(), this.langiumDocumentFactory = e$1.workspace.LangiumDocumentFactory, this.serviceRegistry = e$1.ServiceRegistry;
	}
	get all() {
		return j(/* @__PURE__ */ this.documentMap.values());
	}
	addDocument(e$1) {
		let t = /* @__PURE__ */ e$1.uri.toString();
		if (this.documentMap.has(t)) throw new Error(`A document with the URI '${t}' is already present.`);
		this.documentMap.set(t, e$1);
	}
	getDocument(e$1) {
		let t = /* @__PURE__ */ e$1.toString();
		return this.documentMap.get(t);
	}
	async getOrCreateDocument(e$1, t) {
		let n$1 = /* @__PURE__ */ this.getDocument(e$1);
		return n$1 || (n$1 = await this.langiumDocumentFactory.fromUri(e$1, t), this.addDocument(n$1), n$1);
	}
	createDocument(e$1, t, n$1) {
		if (n$1) return this.langiumDocumentFactory.fromString(t, e$1, n$1).then((i$1) => (this.addDocument(i$1), i$1));
		{
			let i$1 = /* @__PURE__ */ this.langiumDocumentFactory.fromString(t, e$1);
			return this.addDocument(i$1), i$1;
		}
	}
	hasDocument(e$1) {
		return this.documentMap.has(/* @__PURE__ */ e$1.toString());
	}
	invalidateDocument(e$1) {
		let t = /* @__PURE__ */ e$1.toString(), n$1 = /* @__PURE__ */ this.documentMap.get(t);
		return n$1 && (this.serviceRegistry.getServices(e$1).references.Linker.unlink(n$1), n$1.state = Y$1.Changed, n$1.precomputedScopes = void 0, n$1.diagnostics = void 0), n$1;
	}
	deleteDocument(e$1) {
		let t = /* @__PURE__ */ e$1.toString(), n$1 = /* @__PURE__ */ this.documentMap.get(t);
		return n$1 && (n$1.state = Y$1.Changed, this.documentMap.delete(t)), n$1;
	}
};
var hu = /* @__PURE__ */ Symbol("ref_resolving"), Xi = class {
	static {
		m(this, "DefaultLinker");
	}
	constructor(e$1) {
		this.reflection = e$1.shared.AstReflection, this.langiumDocuments = () => e$1.shared.workspace.LangiumDocuments, this.scopeProvider = e$1.references.ScopeProvider, this.astNodeLocator = e$1.workspace.AstNodeLocator;
	}
	async link(e$1, t = S.CancellationToken.None) {
		for (let n$1 of Je(e$1.parseResult.value)) await ce(t), pn(n$1).forEach((i$1) => this.doLink(i$1, e$1));
	}
	doLink(e$1, t) {
		var n$1;
		let i$1 = e$1.reference;
		if (i$1._ref === void 0) {
			i$1._ref = hu;
			try {
				let s$1 = /* @__PURE__ */ this.getCandidate(e$1);
				if (Qt(s$1)) i$1._ref = s$1;
				else if (i$1._nodeDescription = s$1, this.langiumDocuments().hasDocument(s$1.documentUri)) i$1._ref = this.loadAstNode(s$1) ?? this.createLinkingError(e$1, s$1);
				else i$1._ref = void 0;
			} catch (s$1) {
				console.error(`An error occurred while resolving reference to '${i$1.$refText}':`, s$1);
				let o$1 = (n$1 = s$1.message) !== null && n$1 !== void 0 ? n$1 : String(s$1);
				i$1._ref = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.assign({}, e$1), { message: `An error occurred while resolving reference to '${i$1.$refText}': ${o$1}` });
			}
			t.references.push(i$1);
		}
	}
	unlink(e$1) {
		for (let t of e$1.references) delete t._ref, delete t._nodeDescription;
		e$1.references = [];
	}
	getCandidate(e$1) {
		return this.scopeProvider.getScope(e$1).getElement(e$1.reference.$refText) ?? this.createLinkingError(e$1);
	}
	buildReference(e$1, t, n$1, i$1) {
		let s$1 = this, o$1 = {
			$refNode: n$1,
			$refText: i$1,
			get ref() {
				var l$2;
				if (le(this._ref)) return this._ref;
				if (po(this._nodeDescription)) this._ref = s$1.loadAstNode(this._nodeDescription) ?? s$1.createLinkingError({
					reference: o$1,
					container: e$1,
					property: t
				}, this._nodeDescription);
				else if (this._ref === void 0) {
					this._ref = hu;
					let u$2 = ci(e$1).$document, c$2 = /* @__PURE__ */ s$1.getLinkedNode({
						reference: o$1,
						container: e$1,
						property: t
					});
					if (c$2.error && u$2 && u$2.state < Y$1.ComputedScopes) return this._ref = void 0;
					this._ref = (l$2 = c$2.node) !== null && l$2 !== void 0 ? l$2 : c$2.error, this._nodeDescription = c$2.descr, u$2?.references.push(this);
				} else if (this._ref === hu) throw new Error(`Cyclic reference resolution detected: ${s$1.astNodeLocator.getAstNodePath(e$1)}/${t} (symbol '${i$1}')`);
				return le(this._ref) ? this._ref : void 0;
			},
			get $nodeDescription() {
				return this._nodeDescription;
			},
			get error() {
				return Qt(this._ref) ? this._ref : void 0;
			}
		};
		return o$1;
	}
	getLinkedNode(e$1) {
		var t;
		try {
			let n$1 = /* @__PURE__ */ this.getCandidate(e$1);
			if (Qt(n$1)) return { error: n$1 };
			let i$1 = /* @__PURE__ */ this.loadAstNode(n$1);
			return i$1 ? {
				node: i$1,
				descr: n$1
			} : {
				descr: n$1,
				error: /* @__PURE__ */ this.createLinkingError(e$1, n$1)
			};
		} catch (n$1) {
			console.error(`An error occurred while resolving reference to '${e$1.reference.$refText}':`, n$1);
			let i$1 = (t = n$1.message) !== null && t !== void 0 ? t : String(n$1);
			return { error: /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.assign({}, e$1), { message: `An error occurred while resolving reference to '${e$1.reference.$refText}': ${i$1}` }) };
		}
	}
	loadAstNode(e$1) {
		if (e$1.node) return e$1.node;
		let t = /* @__PURE__ */ this.langiumDocuments().getDocument(e$1.documentUri);
		if (t) return this.astNodeLocator.getAstNode(t.parseResult.value, e$1.path);
	}
	createLinkingError(e$1, t) {
		let n$1 = ci(e$1.container).$document;
		n$1 && n$1.state < Y$1.ComputedScopes && console.warn(`Attempted reference resolution before document reached ComputedScopes state (${n$1.uri}).`);
		let i$1 = /* @__PURE__ */ this.reflection.getReferenceType(e$1);
		return Object.assign(/* @__PURE__ */ Object.assign({}, e$1), {
			message: `Could not resolve reference to ${i$1} named '${e$1.reference.$refText}'.`,
			targetDescription: t
		});
	}
};
function Zd(r) {
	return typeof r.name == "string";
}
m(Zd, "isNamed");
var Yi = class {
	static {
		m(this, "DefaultNameProvider");
	}
	getName(e$1) {
		if (Zd(e$1)) return e$1.name;
	}
	getNameNode(e$1) {
		return gi(e$1.$cstNode, "name");
	}
};
var Ji = class {
	static {
		m(this, "DefaultReferences");
	}
	constructor(e$1) {
		this.nameProvider = e$1.references.NameProvider, this.index = e$1.shared.workspace.IndexManager, this.nodeLocator = e$1.workspace.AstNodeLocator;
	}
	findDeclaration(e$1) {
		if (e$1) {
			let t = /* @__PURE__ */ tl(e$1), n$1 = e$1.astNode;
			if (t && n$1) {
				let i$1 = n$1[t.feature];
				if (Ee(i$1)) return i$1.ref;
				if (Array.isArray(i$1)) {
					for (let s$1 of i$1) if (Ee(s$1) && s$1.$refNode && s$1.$refNode.offset <= e$1.offset && s$1.$refNode.end >= e$1.end) return s$1.ref;
				}
			}
			if (n$1) {
				let i$1 = /* @__PURE__ */ this.nameProvider.getNameNode(n$1);
				if (i$1 && (i$1 === e$1 || go(e$1, i$1))) return n$1;
			}
		}
	}
	findDeclarationNode(e$1) {
		let t = /* @__PURE__ */ this.findDeclaration(e$1);
		if (t?.$cstNode) return this.nameProvider.getNameNode(t) ?? t.$cstNode;
	}
	findReferences(e$1, t) {
		let n$1 = [];
		if (t.includeDeclaration) {
			let s$1 = /* @__PURE__ */ this.getReferenceToSelf(e$1);
			s$1 && n$1.push(s$1);
		}
		let i$1 = /* @__PURE__ */ this.index.findAllReferences(e$1, /* @__PURE__ */ this.nodeLocator.getAstNodePath(e$1));
		return t.documentUri && (i$1 = /* @__PURE__ */ i$1.filter((s$1) => Be.equals(s$1.sourceUri, t.documentUri))), n$1.push(...i$1), j(n$1);
	}
	getReferenceToSelf(e$1) {
		let t = /* @__PURE__ */ this.nameProvider.getNameNode(e$1);
		if (t) {
			let n$1 = /* @__PURE__ */ we(e$1), i$1 = /* @__PURE__ */ this.nodeLocator.getAstNodePath(e$1);
			return {
				sourceUri: n$1.uri,
				sourcePath: i$1,
				targetUri: n$1.uri,
				targetPath: i$1,
				segment: /* @__PURE__ */ er(t),
				local: !0
			};
		}
	}
};
var st = class {
	static {
		m(this, "MultiMap");
	}
	constructor(e$1) {
		if (this.map = /* @__PURE__ */ new Map(), e$1) for (let [t, n$1] of e$1) this.add(t, n$1);
	}
	get size() {
		return Ir.sum(/* @__PURE__ */ j(/* @__PURE__ */ this.map.values()).map((e$1) => e$1.length));
	}
	clear() {
		this.map.clear();
	}
	delete(e$1, t) {
		if (t === void 0) return this.map.delete(e$1);
		{
			let n$1 = /* @__PURE__ */ this.map.get(e$1);
			if (n$1) {
				let i$1 = /* @__PURE__ */ n$1.indexOf(t);
				if (i$1 >= 0) return n$1.length === 1 ? this.map.delete(e$1) : n$1.splice(i$1, 1), !0;
			}
			return !1;
		}
	}
	get(e$1) {
		var t;
		return (t = /* @__PURE__ */ this.map.get(e$1)) !== null && t !== void 0 ? t : [];
	}
	has(e$1, t) {
		if (t === void 0) return this.map.has(e$1);
		{
			let n$1 = /* @__PURE__ */ this.map.get(e$1);
			return n$1 ? n$1.indexOf(t) >= 0 : !1;
		}
	}
	add(e$1, t) {
		return this.map.has(e$1) ? this.map.get(e$1).push(t) : this.map.set(e$1, [t]), this;
	}
	addAll(e$1, t) {
		return this.map.has(e$1) ? this.map.get(e$1).push(...t) : this.map.set(e$1, /* @__PURE__ */ Array.from(t)), this;
	}
	forEach(e$1) {
		this.map.forEach((t, n$1) => t.forEach((i$1) => e$1(i$1, n$1, this)));
	}
	[Symbol.iterator]() {
		return this.entries().iterator();
	}
	entries() {
		return j(/* @__PURE__ */ this.map.entries()).flatMap(([e$1, t]) => t.map((n$1) => [e$1, n$1]));
	}
	keys() {
		return j(/* @__PURE__ */ this.map.keys());
	}
	values() {
		return j(/* @__PURE__ */ this.map.values()).flat();
	}
	entriesGroupedByKey() {
		return j(/* @__PURE__ */ this.map.entries());
	}
}, Rr = class {
	static {
		m(this, "BiMap");
	}
	get size() {
		return this.map.size;
	}
	constructor(e$1) {
		if (this.map = /* @__PURE__ */ new Map(), this.inverse = /* @__PURE__ */ new Map(), e$1) for (let [t, n$1] of e$1) this.set(t, n$1);
	}
	clear() {
		this.map.clear(), this.inverse.clear();
	}
	set(e$1, t) {
		return this.map.set(e$1, t), this.inverse.set(t, e$1), this;
	}
	get(e$1) {
		return this.map.get(e$1);
	}
	getKey(e$1) {
		return this.inverse.get(e$1);
	}
	delete(e$1) {
		let t = /* @__PURE__ */ this.map.get(e$1);
		return t !== void 0 ? (this.map.delete(e$1), this.inverse.delete(t), !0) : !1;
	}
};
var Qi = class {
	static {
		m(this, "DefaultScopeComputation");
	}
	constructor(e$1) {
		this.nameProvider = e$1.references.NameProvider, this.descriptions = e$1.workspace.AstNodeDescriptionProvider;
	}
	async computeExports(e$1, t = S.CancellationToken.None) {
		return this.computeExportsForNode(e$1.parseResult.value, e$1, void 0, t);
	}
	async computeExportsForNode(e$1, t, n$1 = fi$1, i$1 = S.CancellationToken.None) {
		let s$1 = [];
		this.exportNode(e$1, s$1, t);
		for (let o$1 of n$1(e$1)) await ce(i$1), this.exportNode(o$1, s$1, t);
		return s$1;
	}
	exportNode(e$1, t, n$1) {
		let i$1 = /* @__PURE__ */ this.nameProvider.getName(e$1);
		i$1 && t.push(/* @__PURE__ */ this.descriptions.createDescription(e$1, i$1, n$1));
	}
	async computeLocalScopes(e$1, t = S.CancellationToken.None) {
		let n$1 = e$1.parseResult.value, i$1 = new st();
		for (let s$1 of ft(n$1)) await ce(t), this.processNode(s$1, e$1, i$1);
		return i$1;
	}
	processNode(e$1, t, n$1) {
		let i$1 = e$1.$container;
		if (i$1) {
			let s$1 = /* @__PURE__ */ this.nameProvider.getName(e$1);
			s$1 && n$1.add(i$1, /* @__PURE__ */ this.descriptions.createDescription(e$1, s$1, t));
		}
	}
};
var zn = class {
	static {
		m(this, "StreamScope");
	}
	constructor(e$1, t, n$1) {
		var i$1;
		this.elements = e$1, this.outerScope = t, this.caseInsensitive = (i$1 = n$1?.caseInsensitive) !== null && i$1 !== void 0 ? i$1 : !1;
	}
	getAllElements() {
		return this.outerScope ? this.elements.concat(/* @__PURE__ */ this.outerScope.getAllElements()) : this.elements;
	}
	getElement(e$1) {
		let t = this.caseInsensitive ? this.elements.find((n$1) => n$1.name.toLowerCase() === e$1.toLowerCase()) : this.elements.find((n$1) => n$1.name === e$1);
		if (t) return t;
		if (this.outerScope) return this.outerScope.getElement(e$1);
	}
}, Zi = class {
	static {
		m(this, "MapScope");
	}
	constructor(e$1, t, n$1) {
		var i$1;
		this.elements = /* @__PURE__ */ new Map(), this.caseInsensitive = (i$1 = n$1?.caseInsensitive) !== null && i$1 !== void 0 ? i$1 : !1;
		for (let s$1 of e$1) {
			let o$1 = this.caseInsensitive ? s$1.name.toLowerCase() : s$1.name;
			this.elements.set(o$1, s$1);
		}
		this.outerScope = t;
	}
	getElement(e$1) {
		let t = this.caseInsensitive ? e$1.toLowerCase() : e$1, n$1 = /* @__PURE__ */ this.elements.get(t);
		if (n$1) return n$1;
		if (this.outerScope) return this.outerScope.getElement(e$1);
	}
	getAllElements() {
		let e$1 = /* @__PURE__ */ j(/* @__PURE__ */ this.elements.values());
		return this.outerScope && (e$1 = /* @__PURE__ */ e$1.concat(/* @__PURE__ */ this.outerScope.getAllElements())), e$1;
	}
}, fg = {
	getElement() {},
	getAllElements() {
		return ei;
	}
};
var qn = class {
	static {
		m(this, "DisposableCache");
	}
	constructor() {
		this.toDispose = [], this.isDisposed = !1;
	}
	onDispose(e$1) {
		this.toDispose.push(e$1);
	}
	dispose() {
		this.throwIfDisposed(), this.clear(), this.isDisposed = !0, this.toDispose.forEach((e$1) => e$1.dispose());
	}
	throwIfDisposed() {
		if (this.isDisposed) throw new Error("This cache has already been disposed");
	}
}, es = class extends qn {
	static {
		m(this, "SimpleCache");
	}
	constructor() {
		super(...arguments), this.cache = /* @__PURE__ */ new Map();
	}
	has(e$1) {
		return this.throwIfDisposed(), this.cache.has(e$1);
	}
	set(e$1, t) {
		this.throwIfDisposed(), this.cache.set(e$1, t);
	}
	get(e$1, t) {
		if (this.throwIfDisposed(), this.cache.has(e$1)) return this.cache.get(e$1);
		if (t) {
			let n$1 = /* @__PURE__ */ t();
			return this.cache.set(e$1, n$1), n$1;
		} else return;
	}
	delete(e$1) {
		return this.throwIfDisposed(), this.cache.delete(e$1);
	}
	clear() {
		this.throwIfDisposed(), this.cache.clear();
	}
}, xr = class extends qn {
	static {
		m(this, "ContextCache");
	}
	constructor(e$1) {
		super(), this.cache = /* @__PURE__ */ new Map(), this.converter = e$1 ?? ((t) => t);
	}
	has(e$1, t) {
		return this.throwIfDisposed(), this.cacheForContext(e$1).has(t);
	}
	set(e$1, t, n$1) {
		this.throwIfDisposed(), this.cacheForContext(e$1).set(t, n$1);
	}
	get(e$1, t, n$1) {
		this.throwIfDisposed();
		let i$1 = /* @__PURE__ */ this.cacheForContext(e$1);
		if (i$1.has(t)) return i$1.get(t);
		if (n$1) {
			let s$1 = /* @__PURE__ */ n$1();
			return i$1.set(t, s$1), s$1;
		} else return;
	}
	delete(e$1, t) {
		return this.throwIfDisposed(), this.cacheForContext(e$1).delete(t);
	}
	clear(e$1) {
		if (this.throwIfDisposed(), e$1) {
			let t = /* @__PURE__ */ this.converter(e$1);
			this.cache.delete(t);
		} else this.cache.clear();
	}
	cacheForContext(e$1) {
		let t = /* @__PURE__ */ this.converter(e$1), n$1 = /* @__PURE__ */ this.cache.get(t);
		return n$1 || (n$1 = /* @__PURE__ */ new Map(), this.cache.set(t, n$1)), n$1;
	}
}, Ua = class extends xr {
	static {
		m(this, "DocumentCache");
	}
	constructor(e$1, t) {
		super((n$1) => n$1.toString()), t ? (this.toDispose.push(/* @__PURE__ */ e$1.workspace.DocumentBuilder.onDocumentPhase(t, (n$1) => {
			this.clear(/* @__PURE__ */ n$1.uri.toString());
		})), this.toDispose.push(/* @__PURE__ */ e$1.workspace.DocumentBuilder.onUpdate((n$1, i$1) => {
			for (let s$1 of i$1) this.clear(s$1);
		}))) : this.toDispose.push(/* @__PURE__ */ e$1.workspace.DocumentBuilder.onUpdate((n$1, i$1) => {
			let s$1 = /* @__PURE__ */ n$1.concat(i$1);
			for (let o$1 of s$1) this.clear(o$1);
		}));
	}
}, Xn = class extends es {
	static {
		m(this, "WorkspaceCache");
	}
	constructor(e$1, t) {
		super(), t ? (this.toDispose.push(/* @__PURE__ */ e$1.workspace.DocumentBuilder.onBuildPhase(t, () => {
			this.clear();
		})), this.toDispose.push(/* @__PURE__ */ e$1.workspace.DocumentBuilder.onUpdate((n$1, i$1) => {
			i$1.length > 0 && this.clear();
		}))) : this.toDispose.push(/* @__PURE__ */ e$1.workspace.DocumentBuilder.onUpdate(() => {
			this.clear();
		}));
	}
};
var ts = class {
	static {
		m(this, "DefaultScopeProvider");
	}
	constructor(e$1) {
		this.reflection = e$1.shared.AstReflection, this.nameProvider = e$1.references.NameProvider, this.descriptions = e$1.workspace.AstNodeDescriptionProvider, this.indexManager = e$1.shared.workspace.IndexManager, this.globalScopeCache = new Xn(e$1.shared);
	}
	getScope(e$1) {
		let t = [], n$1 = /* @__PURE__ */ this.reflection.getReferenceType(e$1), i$1 = we(e$1.container).precomputedScopes;
		if (i$1) {
			let o$1 = e$1.container;
			do {
				let l$2 = /* @__PURE__ */ i$1.get(o$1);
				l$2.length > 0 && t.push(/* @__PURE__ */ j(l$2).filter((u$2) => this.reflection.isSubtype(u$2.type, n$1))), o$1 = o$1.$container;
			} while (o$1);
		}
		let s$1 = /* @__PURE__ */ this.getGlobalScope(n$1, e$1);
		for (let o$1 = t.length - 1; o$1 >= 0; o$1--) s$1 = /* @__PURE__ */ this.createScope(t[o$1], s$1);
		return s$1;
	}
	createScope(e$1, t, n$1) {
		return new zn(j(e$1), t, n$1);
	}
	createScopeForNodes(e$1, t, n$1) {
		return new zn(/* @__PURE__ */ j(e$1).map((s$1) => {
			let o$1 = /* @__PURE__ */ this.nameProvider.getName(s$1);
			if (o$1) return this.descriptions.createDescription(s$1, o$1);
		}).nonNullable(), t, n$1);
	}
	getGlobalScope(e$1, t) {
		return this.globalScopeCache.get(e$1, () => new Zi(this.indexManager.allElements(e$1)));
	}
};
function pu(r) {
	return typeof r.$comment == "string";
}
m(pu, "isAstNodeWithComment");
function eh(r) {
	return typeof r == "object" && !!r && ("$ref" in r || "$error" in r);
}
m(eh, "isIntermediateReference");
var rs = class {
	static {
		m(this, "DefaultJsonSerializer");
	}
	constructor(e$1) {
		this.ignoreProperties = new Set([
			"$container",
			"$containerProperty",
			"$containerIndex",
			"$document",
			"$cstNode"
		]), this.langiumDocuments = e$1.shared.workspace.LangiumDocuments, this.astNodeLocator = e$1.workspace.AstNodeLocator, this.nameProvider = e$1.references.NameProvider, this.commentProvider = e$1.documentation.CommentProvider;
	}
	serialize(e$1, t) {
		let n$1 = t ?? {}, i$1 = t?.replacer, s$1 = /* @__PURE__ */ m((l$2, u$2) => this.replacer(l$2, u$2, n$1), "defaultReplacer"), o$1 = i$1 ? (l$2, u$2) => i$1(l$2, u$2, s$1) : s$1;
		try {
			return this.currentDocument = /* @__PURE__ */ we(e$1), JSON.stringify(e$1, o$1, t?.space);
		} finally {
			this.currentDocument = void 0;
		}
	}
	deserialize(e$1, t) {
		let n$1 = t ?? {}, i$1 = /* @__PURE__ */ JSON.parse(e$1);
		return this.linkNode(i$1, i$1, n$1), i$1;
	}
	replacer(e$1, t, { refText: n$1, sourceText: i$1, textRegions: s$1, comments: o$1, uriConverter: l$2 }) {
		var u$2, c$2, f$1, d$1;
		if (!this.ignoreProperties.has(e$1)) if (Ee(t)) {
			let h$4 = t.ref, p$2 = n$1 ? t.$refText : void 0;
			if (h$4) {
				let g$3 = /* @__PURE__ */ we(h$4), y$1 = "";
				this.currentDocument && this.currentDocument !== g$3 && (l$2 ? y$1 = /* @__PURE__ */ l$2(g$3.uri, t) : y$1 = /* @__PURE__ */ g$3.uri.toString());
				return {
					$ref: `${y$1}#${/* @__PURE__ */ this.astNodeLocator.getAstNodePath(h$4)}`,
					$refText: p$2
				};
			} else return {
				$error: (c$2 = (u$2 = t.error) === null || u$2 === void 0 ? void 0 : u$2.message) !== null && c$2 !== void 0 ? c$2 : "Could not resolve reference",
				$refText: p$2
			};
		} else if (le(t)) {
			let h$4;
			if (s$1 && (h$4 = /* @__PURE__ */ this.addAstNodeRegionWithAssignmentsTo(/* @__PURE__ */ Object.assign({}, t)), (!e$1 || t.$document) && h$4?.$textRegion && (h$4.$textRegion.documentURI = (f$1 = this.currentDocument) === null || f$1 === void 0 ? void 0 : f$1.uri.toString())), i$1 && !e$1 && (h$4 ?? (h$4 = /* @__PURE__ */ Object.assign({}, t)), h$4.$sourceText = (d$1 = t.$cstNode) === null || d$1 === void 0 ? void 0 : d$1.text), o$1) {
				h$4 ?? (h$4 = /* @__PURE__ */ Object.assign({}, t));
				let p$2 = /* @__PURE__ */ this.commentProvider.getComment(t);
				p$2 && (h$4.$comment = /* @__PURE__ */ p$2.replace(/\r/g, ""));
			}
			return h$4 ?? t;
		} else return t;
	}
	addAstNodeRegionWithAssignmentsTo(e$1) {
		let t = /* @__PURE__ */ m((n$1) => ({
			offset: n$1.offset,
			end: n$1.end,
			length: n$1.length,
			range: n$1.range
		}), "createDocumentSegment");
		if (e$1.$cstNode) {
			let n$1 = e$1.$textRegion = /* @__PURE__ */ t(e$1.$cstNode), i$1 = n$1.assignments = {};
			return Object.keys(e$1).filter((s$1) => !s$1.startsWith("$")).forEach((s$1) => {
				let o$1 = /* @__PURE__ */ Jo(e$1.$cstNode, s$1).map(t);
				o$1.length !== 0 && (i$1[s$1] = o$1);
			}), e$1;
		}
	}
	linkNode(e$1, t, n$1, i$1, s$1, o$1) {
		for (let [u$2, c$2] of Object.entries(e$1)) if (Array.isArray(c$2)) for (let f$1 = 0; f$1 < c$2.length; f$1++) {
			let d$1 = c$2[f$1];
			eh(d$1) ? c$2[f$1] = /* @__PURE__ */ this.reviveReference(e$1, u$2, t, d$1, n$1) : le(d$1) && this.linkNode(d$1, t, n$1, e$1, u$2, f$1);
		}
		else eh(c$2) ? e$1[u$2] = /* @__PURE__ */ this.reviveReference(e$1, u$2, t, c$2, n$1) : le(c$2) && this.linkNode(c$2, t, n$1, e$1, u$2);
		let l$2 = e$1;
		l$2.$container = i$1, l$2.$containerProperty = s$1, l$2.$containerIndex = o$1;
	}
	reviveReference(e$1, t, n$1, i$1, s$1) {
		let o$1 = i$1.$refText, l$2 = i$1.$error;
		if (i$1.$ref) {
			let u$2 = /* @__PURE__ */ this.getRefNode(n$1, i$1.$ref, s$1.uriConverter);
			if (le(u$2)) return o$1 || (o$1 = /* @__PURE__ */ this.nameProvider.getName(u$2)), {
				$refText: o$1 ?? "",
				ref: u$2
			};
			l$2 = u$2;
		}
		if (l$2) {
			let u$2 = { $refText: o$1 ?? "" };
			return u$2.error = {
				container: e$1,
				property: t,
				message: l$2,
				reference: u$2
			}, u$2;
		} else return;
	}
	getRefNode(e$1, t, n$1) {
		try {
			let i$1 = /* @__PURE__ */ t.indexOf("#");
			if (i$1 === 0) return this.astNodeLocator.getAstNode(e$1, /* @__PURE__ */ t.substring(1)) || "Could not resolve path: " + t;
			if (i$1 < 0) {
				let u$2 = n$1 ? n$1(t) : Ue.parse(t), c$2 = /* @__PURE__ */ this.langiumDocuments.getDocument(u$2);
				return c$2 ? c$2.parseResult.value : "Could not find document for URI: " + t;
			}
			let s$1 = n$1 ? n$1(/* @__PURE__ */ t.substring(0, i$1)) : Ue.parse(/* @__PURE__ */ t.substring(0, i$1)), o$1 = /* @__PURE__ */ this.langiumDocuments.getDocument(s$1);
			if (!o$1) return "Could not find document for URI: " + t;
			if (i$1 === t.length - 1) return o$1.parseResult.value;
			return this.astNodeLocator.getAstNode(o$1.parseResult.value, /* @__PURE__ */ t.substring(i$1 + 1)) || "Could not resolve URI: " + t;
		} catch (i$1) {
			return String(i$1);
		}
	}
};
var ns = class {
	static {
		m(this, "DefaultServiceRegistry");
	}
	get map() {
		return this.fileExtensionMap;
	}
	constructor(e$1) {
		this.languageIdMap = /* @__PURE__ */ new Map(), this.fileExtensionMap = /* @__PURE__ */ new Map(), this.textDocuments = e$1?.workspace.TextDocuments;
	}
	register(e$1) {
		let t = e$1.LanguageMetaData;
		for (let n$1 of t.fileExtensions) this.fileExtensionMap.has(n$1) && console.warn(`The file extension ${n$1} is used by multiple languages. It is now assigned to '${t.languageId}'.`), this.fileExtensionMap.set(n$1, e$1);
		this.languageIdMap.set(t.languageId, e$1), this.languageIdMap.size === 1 ? this.singleton = e$1 : this.singleton = void 0;
	}
	getServices(e$1) {
		var t, n$1;
		if (this.singleton !== void 0) return this.singleton;
		if (this.languageIdMap.size === 0) throw new Error("The service registry is empty. Use `register` to register the services of a language.");
		let i$1 = (n$1 = (t = this.textDocuments) === null || t === void 0 ? void 0 : t.get(e$1)) === null || n$1 === void 0 ? void 0 : n$1.languageId;
		if (i$1 !== void 0) {
			let l$2 = /* @__PURE__ */ this.languageIdMap.get(i$1);
			if (l$2) return l$2;
		}
		let s$1 = /* @__PURE__ */ Be.extname(e$1), o$1 = /* @__PURE__ */ this.fileExtensionMap.get(s$1);
		if (!o$1) throw i$1 ? /* @__PURE__ */ new Error(`The service registry contains no services for the extension '${s$1}' for language '${i$1}'.`) : /* @__PURE__ */ new Error(`The service registry contains no services for the extension '${s$1}'.`);
		return o$1;
	}
	hasServices(e$1) {
		try {
			return this.getServices(e$1), !0;
		} catch {
			return !1;
		}
	}
	get all() {
		return Array.from(/* @__PURE__ */ this.languageIdMap.values());
	}
};
function Er(r) {
	return { code: r };
}
m(Er, "diagnosticData");
var Yn;
(function(r) {
	r.all = [
		"fast",
		"slow",
		"built-in"
	];
})(Yn || (Yn = {}));
var is = class {
	static {
		m(this, "ValidationRegistry");
	}
	constructor(e$1) {
		this.entries = new st(), this.entriesBefore = [], this.entriesAfter = [], this.reflection = e$1.shared.AstReflection;
	}
	register(e$1, t = this, n$1 = "fast") {
		if (n$1 === "built-in") throw new Error("The 'built-in' category is reserved for lexer, parser, and linker errors.");
		for (let [i$1, s$1] of Object.entries(e$1)) {
			let o$1 = s$1;
			if (Array.isArray(o$1)) for (let l$2 of o$1) {
				let u$2 = {
					check: /* @__PURE__ */ this.wrapValidationException(l$2, t),
					category: n$1
				};
				this.addEntry(i$1, u$2);
			}
			else if (typeof o$1 == "function") {
				let l$2 = {
					check: /* @__PURE__ */ this.wrapValidationException(o$1, t),
					category: n$1
				};
				this.addEntry(i$1, l$2);
			} else ct(o$1);
		}
	}
	wrapValidationException(e$1, t) {
		return async (n$1, i$1, s$1) => {
			await this.handleException(() => e$1.call(t, n$1, i$1, s$1), "An error occurred during validation", i$1, n$1);
		};
	}
	async handleException(e$1, t, n$1, i$1) {
		try {
			await e$1();
		} catch (s$1) {
			if (gt(s$1)) throw s$1;
			console.error(`${t}:`, s$1), s$1 instanceof Error && s$1.stack && console.error(s$1.stack);
			let o$1 = s$1 instanceof Error ? s$1.message : String(s$1);
			n$1("error", `${t}: ${o$1}`, { node: i$1 });
		}
	}
	addEntry(e$1, t) {
		if (e$1 === "AstNode") {
			this.entries.add("AstNode", t);
			return;
		}
		for (let n$1 of this.reflection.getAllSubTypes(e$1)) this.entries.add(n$1, t);
	}
	getChecks(e$1, t) {
		let n$1 = /* @__PURE__ */ j(/* @__PURE__ */ this.entries.get(e$1)).concat(/* @__PURE__ */ this.entries.get("AstNode"));
		return t && (n$1 = /* @__PURE__ */ n$1.filter((i$1) => t.includes(i$1.category))), n$1.map((i$1) => i$1.check);
	}
	registerBeforeDocument(e$1, t = this) {
		this.entriesBefore.push(/* @__PURE__ */ this.wrapPreparationException(e$1, "An error occurred during set-up of the validation", t));
	}
	registerAfterDocument(e$1, t = this) {
		this.entriesAfter.push(/* @__PURE__ */ this.wrapPreparationException(e$1, "An error occurred during tear-down of the validation", t));
	}
	wrapPreparationException(e$1, t, n$1) {
		return async (i$1, s$1, o$1, l$2) => {
			await this.handleException(() => e$1.call(n$1, i$1, s$1, o$1, l$2), t, s$1, i$1);
		};
	}
	get checksBefore() {
		return this.entriesBefore;
	}
	get checksAfter() {
		return this.entriesAfter;
	}
};
var ss = class {
	static {
		m(this, "DefaultDocumentValidator");
	}
	constructor(e$1) {
		this.validationRegistry = e$1.validation.ValidationRegistry, this.metadata = e$1.LanguageMetaData;
	}
	async validateDocument(e$1, t = {}, n$1 = S.CancellationToken.None) {
		let i$1 = e$1.parseResult, s$1 = [];
		if (await ce(n$1), (!t.categories || t.categories.includes("built-in")) && (this.processLexingErrors(i$1, s$1, t), t.stopAfterLexingErrors && s$1.some((o$1) => {
			var l$2;
			return ((l$2 = o$1.data) === null || l$2 === void 0 ? void 0 : l$2.code) === Qe.LexingError;
		}) || (this.processParsingErrors(i$1, s$1, t), t.stopAfterParsingErrors && s$1.some((o$1) => {
			var l$2;
			return ((l$2 = o$1.data) === null || l$2 === void 0 ? void 0 : l$2.code) === Qe.ParsingError;
		})) || (this.processLinkingErrors(e$1, s$1, t), t.stopAfterLinkingErrors && s$1.some((o$1) => {
			var l$2;
			return ((l$2 = o$1.data) === null || l$2 === void 0 ? void 0 : l$2.code) === Qe.LinkingError;
		})))) return s$1;
		try {
			s$1.push(...await this.validateAst(i$1.value, t, n$1));
		} catch (o$1) {
			if (gt(o$1)) throw o$1;
			console.error("An error occurred during validation:", o$1);
		}
		return await ce(n$1), s$1;
	}
	processLexingErrors(e$1, t, n$1) {
		var i$1, s$1, o$1;
		let l$2 = [...e$1.lexerErrors, ...(s$1 = (i$1 = e$1.lexerReport) === null || i$1 === void 0 ? void 0 : i$1.diagnostics) !== null && s$1 !== void 0 ? s$1 : []];
		for (let u$2 of l$2) {
			let c$2 = (o$1 = u$2.severity) !== null && o$1 !== void 0 ? o$1 : "error", f$1 = {
				severity: /* @__PURE__ */ Ba(c$2),
				range: {
					start: {
						line: u$2.line - 1,
						character: u$2.column - 1
					},
					end: {
						line: u$2.line - 1,
						character: u$2.column + u$2.length - 1
					}
				},
				message: u$2.message,
				data: /* @__PURE__ */ rh(c$2),
				source: /* @__PURE__ */ this.getSource()
			};
			t.push(f$1);
		}
	}
	processParsingErrors(e$1, t, n$1) {
		for (let i$1 of e$1.parserErrors) {
			let s$1;
			if (isNaN(i$1.token.startOffset)) {
				if ("previousToken" in i$1) {
					let o$1 = i$1.previousToken;
					if (isNaN(o$1.startOffset)) {
						let l$2 = {
							line: 0,
							character: 0
						};
						s$1 = {
							start: l$2,
							end: l$2
						};
					} else {
						let l$2 = {
							line: o$1.endLine - 1,
							character: o$1.endColumn
						};
						s$1 = {
							start: l$2,
							end: l$2
						};
					}
				}
			} else s$1 = /* @__PURE__ */ Nr(i$1.token);
			if (s$1) {
				let o$1 = {
					severity: /* @__PURE__ */ Ba("error"),
					range: s$1,
					message: i$1.message,
					data: /* @__PURE__ */ Er(Qe.ParsingError),
					source: /* @__PURE__ */ this.getSource()
				};
				t.push(o$1);
			}
		}
	}
	processLinkingErrors(e$1, t, n$1) {
		for (let i$1 of e$1.references) {
			let s$1 = i$1.error;
			if (s$1) {
				let o$1 = {
					node: s$1.container,
					property: s$1.property,
					index: s$1.index,
					data: {
						code: Qe.LinkingError,
						containerType: s$1.container.$type,
						property: s$1.property,
						refText: s$1.reference.$refText
					}
				};
				t.push(/* @__PURE__ */ this.toDiagnostic("error", s$1.message, o$1));
			}
		}
	}
	async validateAst(e$1, t, n$1 = S.CancellationToken.None) {
		let i$1 = [], s$1 = /* @__PURE__ */ m((o$1, l$2, u$2) => {
			i$1.push(/* @__PURE__ */ this.toDiagnostic(o$1, l$2, u$2));
		}, "acceptor");
		return await this.validateAstBefore(e$1, t, s$1, n$1), await this.validateAstNodes(e$1, t, s$1, n$1), await this.validateAstAfter(e$1, t, s$1, n$1), i$1;
	}
	async validateAstBefore(e$1, t, n$1, i$1 = S.CancellationToken.None) {
		var s$1;
		let o$1 = this.validationRegistry.checksBefore;
		for (let l$2 of o$1) await ce(i$1), await l$2(e$1, n$1, (s$1 = t.categories) !== null && s$1 !== void 0 ? s$1 : [], i$1);
	}
	async validateAstNodes(e$1, t, n$1, i$1 = S.CancellationToken.None) {
		await Promise.all(/* @__PURE__ */ Je(e$1).map(async (s$1) => {
			await ce(i$1);
			let o$1 = /* @__PURE__ */ this.validationRegistry.getChecks(s$1.$type, t.categories);
			for (let l$2 of o$1) await l$2(s$1, n$1, i$1);
		}));
	}
	async validateAstAfter(e$1, t, n$1, i$1 = S.CancellationToken.None) {
		var s$1;
		let o$1 = this.validationRegistry.checksAfter;
		for (let l$2 of o$1) await ce(i$1), await l$2(e$1, n$1, (s$1 = t.categories) !== null && s$1 !== void 0 ? s$1 : [], i$1);
	}
	toDiagnostic(e$1, t, n$1) {
		return {
			message: t,
			range: /* @__PURE__ */ th(n$1),
			severity: /* @__PURE__ */ Ba(e$1),
			code: n$1.code,
			codeDescription: n$1.codeDescription,
			tags: n$1.tags,
			relatedInformation: n$1.relatedInformation,
			data: n$1.data,
			source: /* @__PURE__ */ this.getSource()
		};
	}
	getSource() {
		return this.metadata.languageId;
	}
};
function th(r) {
	if (r.range) return r.range;
	let e$1;
	return typeof r.property == "string" ? e$1 = /* @__PURE__ */ gi(r.node.$cstNode, r.property, r.index) : typeof r.keyword == "string" && (e$1 = /* @__PURE__ */ Zo(r.node.$cstNode, r.keyword, r.index)), e$1 ?? (e$1 = r.node.$cstNode), e$1 ? e$1.range : {
		start: {
			line: 0,
			character: 0
		},
		end: {
			line: 0,
			character: 0
		}
	};
}
m(th, "getDiagnosticRange");
function Ba(r) {
	switch (r) {
		case "error": return 1;
		case "warning": return 2;
		case "info": return 3;
		case "hint": return 4;
		default: throw new Error("Invalid diagnostic severity: " + r);
	}
}
m(Ba, "toDiagnosticSeverity");
function rh(r) {
	switch (r) {
		case "error": return Er(Qe.LexingError);
		case "warning": return Er(Qe.LexingWarning);
		case "info": return Er(Qe.LexingInfo);
		case "hint": return Er(Qe.LexingHint);
		default: throw new Error("Invalid diagnostic severity: " + r);
	}
}
m(rh, "toDiagnosticData");
var Qe;
(function(r) {
	r.LexingError = "lexing-error", r.LexingWarning = "lexing-warning", r.LexingInfo = "lexing-info", r.LexingHint = "lexing-hint", r.ParsingError = "parsing-error", r.LinkingError = "linking-error";
})(Qe || (Qe = {}));
var as = class {
	static {
		m(this, "DefaultAstNodeDescriptionProvider");
	}
	constructor(e$1) {
		this.astNodeLocator = e$1.workspace.AstNodeLocator, this.nameProvider = e$1.references.NameProvider;
	}
	createDescription(e$1, t, n$1) {
		let i$1 = n$1 ?? we(e$1);
		t ?? (t = /* @__PURE__ */ this.nameProvider.getName(e$1));
		let s$1 = /* @__PURE__ */ this.astNodeLocator.getAstNodePath(e$1);
		if (!t) throw new Error(`Node at path ${s$1} has no name.`);
		let o$1, l$2 = /* @__PURE__ */ m(() => {
			var u$2;
			return o$1 ?? (o$1 = /* @__PURE__ */ er((u$2 = /* @__PURE__ */ this.nameProvider.getNameNode(e$1)) !== null && u$2 !== void 0 ? u$2 : e$1.$cstNode));
		}, "nameSegmentGetter");
		return {
			node: e$1,
			name: t,
			get nameSegment() {
				return l$2();
			},
			selectionSegment: /* @__PURE__ */ er(e$1.$cstNode),
			type: e$1.$type,
			documentUri: i$1.uri,
			path: s$1
		};
	}
}, os = class {
	static {
		m(this, "DefaultReferenceDescriptionProvider");
	}
	constructor(e$1) {
		this.nodeLocator = e$1.workspace.AstNodeLocator;
	}
	async createDescriptions(e$1, t = S.CancellationToken.None) {
		let n$1 = [], i$1 = e$1.parseResult.value;
		for (let s$1 of Je(i$1)) await ce(t), pn(s$1).filter((o$1) => !Qt(o$1)).forEach((o$1) => {
			let l$2 = /* @__PURE__ */ this.createDescription(o$1);
			l$2 && n$1.push(l$2);
		});
		return n$1;
	}
	createDescription(e$1) {
		let t = e$1.reference.$nodeDescription, n$1 = e$1.reference.$refNode;
		if (!t || !n$1) return;
		let i$1 = we(e$1.container).uri;
		return {
			sourceUri: i$1,
			sourcePath: /* @__PURE__ */ this.nodeLocator.getAstNodePath(e$1.container),
			targetUri: t.documentUri,
			targetPath: t.path,
			segment: /* @__PURE__ */ er(n$1),
			local: /* @__PURE__ */ Be.equals(t.documentUri, i$1)
		};
	}
};
var ls = class {
	static {
		m(this, "DefaultAstNodeLocator");
	}
	constructor() {
		this.segmentSeparator = "/", this.indexSeparator = "@";
	}
	getAstNodePath(e$1) {
		if (e$1.$container) {
			let t = /* @__PURE__ */ this.getAstNodePath(e$1.$container), n$1 = /* @__PURE__ */ this.getPathSegment(e$1);
			return t + this.segmentSeparator + n$1;
		}
		return "";
	}
	getPathSegment({ $containerProperty: e$1, $containerIndex: t }) {
		if (!e$1) throw new Error("Missing '$containerProperty' in AST node.");
		return t !== void 0 ? e$1 + this.indexSeparator + t : e$1;
	}
	getAstNode(e$1, t) {
		return t.split(this.segmentSeparator).reduce((i$1, s$1) => {
			if (!i$1 || s$1.length === 0) return i$1;
			let o$1 = /* @__PURE__ */ s$1.indexOf(this.indexSeparator);
			if (o$1 > 0) {
				let l$2 = /* @__PURE__ */ s$1.substring(0, o$1), u$2 = /* @__PURE__ */ parseInt(/* @__PURE__ */ s$1.substring(o$1 + 1));
				return i$1[l$2]?.[u$2];
			}
			return i$1[s$1];
		}, e$1);
	}
};
var ne = {};
p(ne, /* @__PURE__ */ q(/* @__PURE__ */ lu(), 1));
var us = class {
	static {
		m(this, "DefaultConfigurationProvider");
	}
	constructor(e$1) {
		this._ready = new Ge(), this.settings = {}, this.workspaceConfig = !1, this.onConfigurationSectionUpdateEmitter = new ne.Emitter(), this.serviceRegistry = e$1.ServiceRegistry;
	}
	get ready() {
		return this._ready.promise;
	}
	initialize(e$1) {
		var t, n$1;
		this.workspaceConfig = (n$1 = (t = e$1.capabilities.workspace) === null || t === void 0 ? void 0 : t.configuration) !== null && n$1 !== void 0 ? n$1 : !1;
	}
	async initialized(e$1) {
		if (this.workspaceConfig) {
			if (e$1.register) {
				let t = this.serviceRegistry.all;
				e$1.register({ section: /* @__PURE__ */ t.map((n$1) => this.toSectionName(n$1.LanguageMetaData.languageId)) });
			}
			if (e$1.fetchConfiguration) {
				let t = /* @__PURE__ */ this.serviceRegistry.all.map((i$1) => ({ section: /* @__PURE__ */ this.toSectionName(i$1.LanguageMetaData.languageId) })), n$1 = await e$1.fetchConfiguration(t);
				t.forEach((i$1, s$1) => {
					this.updateSectionConfiguration(i$1.section, n$1[s$1]);
				});
			}
		}
		this._ready.resolve();
	}
	updateConfiguration(e$1) {
		e$1.settings && Object.keys(e$1.settings).forEach((t) => {
			let n$1 = e$1.settings[t];
			this.updateSectionConfiguration(t, n$1), this.onConfigurationSectionUpdateEmitter.fire({
				section: t,
				configuration: n$1
			});
		});
	}
	updateSectionConfiguration(e$1, t) {
		this.settings[e$1] = t;
	}
	async getConfiguration(e$1, t) {
		await this.ready;
		let n$1 = /* @__PURE__ */ this.toSectionName(e$1);
		if (this.settings[n$1]) return this.settings[n$1][t];
	}
	toSectionName(e$1) {
		return `${e$1}`;
	}
	get onConfigurationSectionUpdate() {
		return this.onConfigurationSectionUpdateEmitter.event;
	}
};
var jt;
(function(r) {
	function e$1(t) {
		return { dispose: /* @__PURE__ */ m(async () => await t(), "dispose") };
	}
	m(e$1, "create"), r.create = e$1;
})(jt || (jt = {}));
var cs = class {
	static {
		m(this, "DefaultDocumentBuilder");
	}
	constructor(e$1) {
		this.updateBuildOptions = { validation: { categories: ["built-in", "fast"] } }, this.updateListeners = [], this.buildPhaseListeners = new st(), this.documentPhaseListeners = new st(), this.buildState = /* @__PURE__ */ new Map(), this.documentBuildWaiters = /* @__PURE__ */ new Map(), this.currentState = Y$1.Changed, this.langiumDocuments = e$1.workspace.LangiumDocuments, this.langiumDocumentFactory = e$1.workspace.LangiumDocumentFactory, this.textDocuments = e$1.workspace.TextDocuments, this.indexManager = e$1.workspace.IndexManager, this.serviceRegistry = e$1.ServiceRegistry;
	}
	async build(e$1, t = {}, n$1 = S.CancellationToken.None) {
		var i$1, s$1;
		for (let o$1 of e$1) {
			let l$2 = /* @__PURE__ */ o$1.uri.toString();
			if (o$1.state === Y$1.Validated) {
				if (typeof t.validation == "boolean" && t.validation) o$1.state = Y$1.IndexedReferences, o$1.diagnostics = void 0, this.buildState.delete(l$2);
				else if (typeof t.validation == "object") {
					let u$2 = /* @__PURE__ */ this.buildState.get(l$2), c$2 = (i$1 = u$2?.result) === null || i$1 === void 0 ? void 0 : i$1.validationChecks;
					if (c$2) {
						let d$1 = /* @__PURE__ */ ((s$1 = t.validation.categories) !== null && s$1 !== void 0 ? s$1 : Yn.all).filter((h$4) => !c$2.includes(h$4));
						d$1.length > 0 && (this.buildState.set(l$2, {
							completed: !1,
							options: { validation: /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.assign({}, t.validation), { categories: d$1 }) },
							result: u$2.result
						}), o$1.state = Y$1.IndexedReferences);
					}
				}
			} else this.buildState.delete(l$2);
		}
		this.currentState = Y$1.Changed, await this.emitUpdate(/* @__PURE__ */ e$1.map((o$1) => o$1.uri), []), await this.buildDocuments(e$1, t, n$1);
	}
	async update(e$1, t, n$1 = S.CancellationToken.None) {
		this.currentState = Y$1.Changed;
		for (let o$1 of t) this.langiumDocuments.deleteDocument(o$1), this.buildState.delete(/* @__PURE__ */ o$1.toString()), this.indexManager.remove(o$1);
		for (let o$1 of e$1) {
			if (!this.langiumDocuments.invalidateDocument(o$1)) {
				let u$2 = /* @__PURE__ */ this.langiumDocumentFactory.fromModel({ $type: "INVALID" }, o$1);
				u$2.state = Y$1.Changed, this.langiumDocuments.addDocument(u$2);
			}
			this.buildState.delete(/* @__PURE__ */ o$1.toString());
		}
		let i$1 = /* @__PURE__ */ j(e$1).concat(t).map((o$1) => o$1.toString()).toSet();
		this.langiumDocuments.all.filter((o$1) => !i$1.has(/* @__PURE__ */ o$1.uri.toString()) && this.shouldRelink(o$1, i$1)).forEach((o$1) => {
			this.serviceRegistry.getServices(o$1.uri).references.Linker.unlink(o$1), o$1.state = /* @__PURE__ */ Math.min(o$1.state, Y$1.ComputedScopes), o$1.diagnostics = void 0;
		}), await this.emitUpdate(e$1, t), await ce(n$1);
		let s$1 = /* @__PURE__ */ this.sortDocuments(/* @__PURE__ */ this.langiumDocuments.all.filter((o$1) => {
			var l$2;
			return o$1.state < Y$1.Linked || !(!((l$2 = /* @__PURE__ */ this.buildState.get(/* @__PURE__ */ o$1.uri.toString())) === null || l$2 === void 0) && l$2.completed);
		}).toArray());
		await this.buildDocuments(s$1, this.updateBuildOptions, n$1);
	}
	async emitUpdate(e$1, t) {
		await Promise.all(/* @__PURE__ */ this.updateListeners.map((n$1) => n$1(e$1, t)));
	}
	sortDocuments(e$1) {
		let t = 0, n$1 = e$1.length - 1;
		for (; t < n$1;) {
			for (; t < e$1.length && this.hasTextDocument(e$1[t]);) t++;
			for (; n$1 >= 0 && !this.hasTextDocument(e$1[n$1]);) n$1--;
			t < n$1 && ([e$1[t], e$1[n$1]] = [e$1[n$1], e$1[t]]);
		}
		return e$1;
	}
	hasTextDocument(e$1) {
		var t;
		return !!(!((t = this.textDocuments) === null || t === void 0) && t.get(e$1.uri));
	}
	shouldRelink(e$1, t) {
		return e$1.references.some((n$1) => n$1.error !== void 0) ? !0 : this.indexManager.isAffected(e$1, t);
	}
	onUpdate(e$1) {
		return this.updateListeners.push(e$1), jt.create(() => {
			let t = /* @__PURE__ */ this.updateListeners.indexOf(e$1);
			t >= 0 && this.updateListeners.splice(t, 1);
		});
	}
	async buildDocuments(e$1, t, n$1) {
		this.prepareBuild(e$1, t), await this.runCancelable(e$1, Y$1.Parsed, n$1, (s$1) => this.langiumDocumentFactory.update(s$1, n$1)), await this.runCancelable(e$1, Y$1.IndexedContent, n$1, (s$1) => this.indexManager.updateContent(s$1, n$1)), await this.runCancelable(e$1, Y$1.ComputedScopes, n$1, async (s$1) => {
			s$1.precomputedScopes = await this.serviceRegistry.getServices(s$1.uri).references.ScopeComputation.computeLocalScopes(s$1, n$1);
		}), await this.runCancelable(e$1, Y$1.Linked, n$1, (s$1) => this.serviceRegistry.getServices(s$1.uri).references.Linker.link(s$1, n$1)), await this.runCancelable(e$1, Y$1.IndexedReferences, n$1, (s$1) => this.indexManager.updateReferences(s$1, n$1));
		let i$1 = /* @__PURE__ */ e$1.filter((s$1) => this.shouldValidate(s$1));
		await this.runCancelable(i$1, Y$1.Validated, n$1, (s$1) => this.validate(s$1, n$1));
		for (let s$1 of e$1) {
			let o$1 = /* @__PURE__ */ this.buildState.get(/* @__PURE__ */ s$1.uri.toString());
			o$1 && (o$1.completed = !0);
		}
	}
	prepareBuild(e$1, t) {
		for (let n$1 of e$1) {
			let i$1 = /* @__PURE__ */ n$1.uri.toString(), s$1 = /* @__PURE__ */ this.buildState.get(i$1);
			(!s$1 || s$1.completed) && this.buildState.set(i$1, {
				completed: !1,
				options: t,
				result: s$1?.result
			});
		}
	}
	async runCancelable(e$1, t, n$1, i$1) {
		let s$1 = /* @__PURE__ */ e$1.filter((l$2) => l$2.state < t);
		for (let l$2 of s$1) await ce(n$1), await i$1(l$2), l$2.state = t, await this.notifyDocumentPhase(l$2, t, n$1);
		let o$1 = /* @__PURE__ */ e$1.filter((l$2) => l$2.state === t);
		await this.notifyBuildPhase(o$1, t, n$1), this.currentState = t;
	}
	onBuildPhase(e$1, t) {
		return this.buildPhaseListeners.add(e$1, t), jt.create(() => {
			this.buildPhaseListeners.delete(e$1, t);
		});
	}
	onDocumentPhase(e$1, t) {
		return this.documentPhaseListeners.add(e$1, t), jt.create(() => {
			this.documentPhaseListeners.delete(e$1, t);
		});
	}
	waitUntil(e$1, t, n$1) {
		let i$1;
		if (t && "path" in t ? i$1 = t : n$1 = t, n$1 ?? (n$1 = S.CancellationToken.None), i$1) {
			let s$1 = /* @__PURE__ */ this.langiumDocuments.getDocument(i$1);
			if (s$1 && s$1.state > e$1) return Promise.resolve(i$1);
		}
		return this.currentState >= e$1 ? Promise.resolve(void 0) : n$1.isCancellationRequested ? Promise.reject(mt) : new Promise((s$1, o$1) => {
			let l$2 = this.onBuildPhase(e$1, () => {
				if (l$2.dispose(), u$2.dispose(), i$1) s$1((/* @__PURE__ */ this.langiumDocuments.getDocument(i$1))?.uri);
				else s$1(void 0);
			}), u$2 = n$1.onCancellationRequested(() => {
				l$2.dispose(), u$2.dispose(), o$1(mt);
			});
		});
	}
	async notifyDocumentPhase(e$1, t, n$1) {
		let s$1 = /* @__PURE__ */ this.documentPhaseListeners.get(t).slice();
		for (let o$1 of s$1) try {
			await o$1(e$1, n$1);
		} catch (l$2) {
			if (!gt(l$2)) throw l$2;
		}
	}
	async notifyBuildPhase(e$1, t, n$1) {
		if (e$1.length === 0) return;
		let s$1 = /* @__PURE__ */ this.buildPhaseListeners.get(t).slice();
		for (let o$1 of s$1) await ce(n$1), await o$1(e$1, n$1);
	}
	shouldValidate(e$1) {
		return !!this.getBuildOptions(e$1).validation;
	}
	async validate(e$1, t) {
		var n$1, i$1;
		let s$1 = this.serviceRegistry.getServices(e$1.uri).validation.DocumentValidator, o$1 = this.getBuildOptions(e$1).validation, l$2 = typeof o$1 == "object" ? o$1 : void 0, u$2 = await s$1.validateDocument(e$1, l$2, t);
		e$1.diagnostics ? e$1.diagnostics.push(...u$2) : e$1.diagnostics = u$2;
		let c$2 = /* @__PURE__ */ this.buildState.get(/* @__PURE__ */ e$1.uri.toString());
		if (c$2) {
			(n$1 = c$2.result) !== null && n$1 !== void 0 || (c$2.result = {});
			let f$1 = (i$1 = l$2?.categories) !== null && i$1 !== void 0 ? i$1 : Yn.all;
			c$2.result.validationChecks ? c$2.result.validationChecks.push(...f$1) : c$2.result.validationChecks = [...f$1];
		}
	}
	getBuildOptions(e$1) {
		var t, n$1;
		return (n$1 = (t = /* @__PURE__ */ this.buildState.get(/* @__PURE__ */ e$1.uri.toString())) === null || t === void 0 ? void 0 : t.options) !== null && n$1 !== void 0 ? n$1 : {};
	}
};
var fs = class {
	static {
		m(this, "DefaultIndexManager");
	}
	constructor(e$1) {
		this.symbolIndex = /* @__PURE__ */ new Map(), this.symbolByTypeIndex = new xr(), this.referenceIndex = /* @__PURE__ */ new Map(), this.documents = e$1.workspace.LangiumDocuments, this.serviceRegistry = e$1.ServiceRegistry, this.astReflection = e$1.AstReflection;
	}
	findAllReferences(e$1, t) {
		let n$1 = we(e$1).uri, i$1 = [];
		return this.referenceIndex.forEach((s$1) => {
			s$1.forEach((o$1) => {
				Be.equals(o$1.targetUri, n$1) && o$1.targetPath === t && i$1.push(o$1);
			});
		}), j(i$1);
	}
	allElements(e$1, t) {
		let n$1 = /* @__PURE__ */ j(/* @__PURE__ */ this.symbolIndex.keys());
		return t && (n$1 = /* @__PURE__ */ n$1.filter((i$1) => !t || t.has(i$1))), n$1.map((i$1) => this.getFileDescriptions(i$1, e$1)).flat();
	}
	getFileDescriptions(e$1, t) {
		var n$1;
		return t ? this.symbolByTypeIndex.get(e$1, t, () => {
			var s$1;
			return ((s$1 = /* @__PURE__ */ this.symbolIndex.get(e$1)) !== null && s$1 !== void 0 ? s$1 : []).filter((l$2) => this.astReflection.isSubtype(l$2.type, t));
		}) : (n$1 = /* @__PURE__ */ this.symbolIndex.get(e$1)) !== null && n$1 !== void 0 ? n$1 : [];
	}
	remove(e$1) {
		let t = /* @__PURE__ */ e$1.toString();
		this.symbolIndex.delete(t), this.symbolByTypeIndex.clear(t), this.referenceIndex.delete(t);
	}
	async updateContent(e$1, t = S.CancellationToken.None) {
		let i$1 = await this.serviceRegistry.getServices(e$1.uri).references.ScopeComputation.computeExports(e$1, t), s$1 = /* @__PURE__ */ e$1.uri.toString();
		this.symbolIndex.set(s$1, i$1), this.symbolByTypeIndex.clear(s$1);
	}
	async updateReferences(e$1, t = S.CancellationToken.None) {
		let i$1 = await this.serviceRegistry.getServices(e$1.uri).workspace.ReferenceDescriptionProvider.createDescriptions(e$1, t);
		this.referenceIndex.set(/* @__PURE__ */ e$1.uri.toString(), i$1);
	}
	isAffected(e$1, t) {
		let n$1 = /* @__PURE__ */ this.referenceIndex.get(/* @__PURE__ */ e$1.uri.toString());
		return n$1 ? n$1.some((i$1) => !i$1.local && t.has(/* @__PURE__ */ i$1.targetUri.toString())) : !1;
	}
};
var ds = class {
	static {
		m(this, "DefaultWorkspaceManager");
	}
	constructor(e$1) {
		this.initialBuildOptions = {}, this._ready = new Ge(), this.serviceRegistry = e$1.ServiceRegistry, this.langiumDocuments = e$1.workspace.LangiumDocuments, this.documentBuilder = e$1.workspace.DocumentBuilder, this.fileSystemProvider = e$1.workspace.FileSystemProvider, this.mutex = e$1.workspace.WorkspaceLock;
	}
	get ready() {
		return this._ready.promise;
	}
	get workspaceFolders() {
		return this.folders;
	}
	initialize(e$1) {
		var t;
		this.folders = (t = e$1.workspaceFolders) !== null && t !== void 0 ? t : void 0;
	}
	initialized(e$1) {
		return this.mutex.write((t) => {
			var n$1;
			return this.initializeWorkspace((n$1 = this.folders) !== null && n$1 !== void 0 ? n$1 : [], t);
		});
	}
	async initializeWorkspace(e$1, t = S.CancellationToken.None) {
		let n$1 = await this.performStartup(e$1);
		await ce(t), await this.documentBuilder.build(n$1, this.initialBuildOptions, t);
	}
	async performStartup(e$1) {
		let t = /* @__PURE__ */ this.serviceRegistry.all.flatMap((s$1) => s$1.LanguageMetaData.fileExtensions), n$1 = [], i$1 = /* @__PURE__ */ m((s$1) => {
			n$1.push(s$1), this.langiumDocuments.hasDocument(s$1.uri) || this.langiumDocuments.addDocument(s$1);
		}, "collector");
		return await this.loadAdditionalDocuments(e$1, i$1), await Promise.all(/* @__PURE__ */ e$1.map((s$1) => [s$1, /* @__PURE__ */ this.getRootFolder(s$1)]).map(async (s$1) => this.traverseFolder(...s$1, t, i$1))), this._ready.resolve(), n$1;
	}
	loadAdditionalDocuments(e$1, t) {
		return Promise.resolve();
	}
	getRootFolder(e$1) {
		return Ue.parse(e$1.uri);
	}
	async traverseFolder(e$1, t, n$1, i$1) {
		let s$1 = await this.fileSystemProvider.readDirectory(t);
		await Promise.all(/* @__PURE__ */ s$1.map(async (o$1) => {
			if (this.includeEntry(e$1, o$1, n$1)) {
				if (o$1.isDirectory) await this.traverseFolder(e$1, o$1.uri, n$1, i$1);
				else if (o$1.isFile) {
					let l$2 = await this.langiumDocuments.getOrCreateDocument(o$1.uri);
					i$1(l$2);
				}
			}
		}));
	}
	includeEntry(e$1, t, n$1) {
		let i$1 = /* @__PURE__ */ Be.basename(t.uri);
		if (i$1.startsWith(".")) return !1;
		if (t.isDirectory) return i$1 !== "node_modules" && i$1 !== "out";
		if (t.isFile) {
			let s$1 = /* @__PURE__ */ Be.extname(t.uri);
			return n$1.includes(s$1);
		}
		return !1;
	}
};
var hs = class {
	static {
		m(this, "DefaultLexerErrorMessageProvider");
	}
	buildUnexpectedCharactersMessage(e$1, t, n$1, i$1, s$1) {
		return In.buildUnexpectedCharactersMessage(e$1, t, n$1, i$1, s$1);
	}
	buildUnableToPopLexerModeMessage(e$1) {
		return In.buildUnableToPopLexerModeMessage(e$1);
	}
}, Wa = { mode: "full" }, Ar = class {
	static {
		m(this, "DefaultLexer");
	}
	constructor(e$1) {
		this.errorMessageProvider = e$1.parser.LexerErrorMessageProvider, this.tokenBuilder = e$1.parser.TokenBuilder;
		let t = /* @__PURE__ */ this.tokenBuilder.buildTokens(e$1.Grammar, { caseInsensitive: e$1.LanguageMetaData.caseInsensitive });
		this.tokenTypes = /* @__PURE__ */ this.toTokenTypeDictionary(t);
		let n$1 = mu(t) ? Object.values(t) : t, i$1 = e$1.LanguageMetaData.mode === "production";
		this.chevrotainLexer = new se(n$1, {
			positionTracking: "full",
			skipValidations: i$1,
			errorMessageProvider: this.errorMessageProvider
		});
	}
	get definition() {
		return this.tokenTypes;
	}
	tokenize(e$1, t = Wa) {
		var n$1, i$1, s$1;
		let o$1 = /* @__PURE__ */ this.chevrotainLexer.tokenize(e$1);
		return {
			tokens: o$1.tokens,
			errors: o$1.errors,
			hidden: (n$1 = o$1.groups.hidden) !== null && n$1 !== void 0 ? n$1 : [],
			report: (s$1 = (i$1 = this.tokenBuilder).flushLexingReport) === null || s$1 === void 0 ? void 0 : s$1.call(i$1, e$1)
		};
	}
	toTokenTypeDictionary(e$1) {
		if (mu(e$1)) return e$1;
		let t = gu(e$1) ? Object.values(e$1.modes).flat() : e$1, n$1 = {};
		return t.forEach((i$1) => n$1[i$1.name] = i$1), n$1;
	}
};
function Ka(r) {
	return Array.isArray(r) && (r.length === 0 || "name" in r[0]);
}
m(Ka, "isTokenTypeArray");
function gu(r) {
	return r && "modes" in r && "defaultMode" in r;
}
m(gu, "isIMultiModeLexerDefinition");
function mu(r) {
	return !Ka(r) && !gu(r);
}
m(mu, "isTokenTypeDictionary");
function Ru(r, e$1, t) {
	let n$1, i$1;
	typeof r == "string" ? (i$1 = e$1, n$1 = t) : (i$1 = r.range.start, n$1 = e$1), i$1 || (i$1 = /* @__PURE__ */ W.create(0, 0));
	return Tg({
		index: 0,
		tokens: /* @__PURE__ */ hg({
			lines: /* @__PURE__ */ sh(r),
			position: i$1,
			options: /* @__PURE__ */ Eu(n$1)
		}),
		position: i$1
	});
}
m(Ru, "parseJSDoc");
function xu(r, e$1) {
	let t = /* @__PURE__ */ Eu(e$1), n$1 = /* @__PURE__ */ sh(r);
	if (n$1.length === 0) return !1;
	let i$1 = n$1[0], s$1 = n$1[n$1.length - 1], o$1 = t.start, l$2 = t.end;
	return !!o$1?.exec(i$1) && !!l$2?.exec(s$1);
}
m(xu, "isJSDoc");
function sh(r) {
	let e$1 = "";
	return typeof r == "string" ? e$1 = r : e$1 = r.text, e$1.split(Ko);
}
m(sh, "getLines");
var nh = /\s*(@([\p{L}][\p{L}\p{N}]*)?)/uy, dg = /\{(@[\p{L}][\p{L}\p{N}]*)(\s*)([^\r\n}]+)?\}/gu;
function hg(r) {
	var e$1, t, n$1;
	let i$1 = [], s$1 = r.position.line, o$1 = r.position.character;
	for (let l$2 = 0; l$2 < r.lines.length; l$2++) {
		let u$2 = l$2 === 0, c$2 = l$2 === r.lines.length - 1, f$1 = r.lines[l$2], d$1 = 0;
		if (u$2 && r.options.start) {
			let p$2 = (e$1 = r.options.start) === null || e$1 === void 0 ? void 0 : e$1.exec(f$1);
			p$2 && (d$1 = p$2.index + p$2[0].length);
		} else {
			let p$2 = (t = r.options.line) === null || t === void 0 ? void 0 : t.exec(f$1);
			p$2 && (d$1 = p$2.index + p$2[0].length);
		}
		if (c$2) {
			let p$2 = (n$1 = r.options.end) === null || n$1 === void 0 ? void 0 : n$1.exec(f$1);
			p$2 && (f$1 = /* @__PURE__ */ f$1.substring(0, p$2.index));
		}
		if (f$1 = /* @__PURE__ */ f$1.substring(0, /* @__PURE__ */ yg(f$1)), Tu(f$1, d$1) >= f$1.length) {
			if (i$1.length > 0) {
				let p$2 = /* @__PURE__ */ W.create(s$1, o$1);
				i$1.push({
					type: "break",
					content: "",
					range: /* @__PURE__ */ U.create(p$2, p$2)
				});
			}
		} else {
			nh.lastIndex = d$1;
			let p$2 = /* @__PURE__ */ nh.exec(f$1);
			if (p$2) {
				let g$3 = p$2[0], y$1 = p$2[1], v$3 = /* @__PURE__ */ W.create(s$1, o$1 + d$1), x$2 = /* @__PURE__ */ W.create(s$1, o$1 + d$1 + g$3.length);
				i$1.push({
					type: "tag",
					content: y$1,
					range: /* @__PURE__ */ U.create(v$3, x$2)
				}), d$1 += g$3.length, d$1 = /* @__PURE__ */ Tu(f$1, d$1);
			}
			if (d$1 < f$1.length) {
				let g$3 = /* @__PURE__ */ f$1.substring(d$1), y$1 = /* @__PURE__ */ Array.from(/* @__PURE__ */ g$3.matchAll(dg));
				i$1.push(.../* @__PURE__ */ pg(y$1, g$3, s$1, o$1 + d$1));
			}
		}
		s$1++, o$1 = 0;
	}
	return i$1.length > 0 && i$1[i$1.length - 1].type === "break" ? i$1.slice(0, -1) : i$1;
}
m(hg, "tokenize");
function pg(r, e$1, t, n$1) {
	let i$1 = [];
	if (r.length === 0) {
		let s$1 = /* @__PURE__ */ W.create(t, n$1), o$1 = /* @__PURE__ */ W.create(t, n$1 + e$1.length);
		i$1.push({
			type: "text",
			content: e$1,
			range: /* @__PURE__ */ U.create(s$1, o$1)
		});
	} else {
		let s$1 = 0;
		for (let l$2 of r) {
			let u$2 = l$2.index, c$2 = /* @__PURE__ */ e$1.substring(s$1, u$2);
			c$2.length > 0 && i$1.push({
				type: "text",
				content: /* @__PURE__ */ e$1.substring(s$1, u$2),
				range: /* @__PURE__ */ U.create(/* @__PURE__ */ W.create(t, s$1 + n$1), /* @__PURE__ */ W.create(t, u$2 + n$1))
			});
			let f$1 = c$2.length + 1, d$1 = l$2[1];
			if (i$1.push({
				type: "inline-tag",
				content: d$1,
				range: /* @__PURE__ */ U.create(/* @__PURE__ */ W.create(t, s$1 + f$1 + n$1), /* @__PURE__ */ W.create(t, s$1 + f$1 + d$1.length + n$1))
			}), f$1 += d$1.length, l$2.length === 4) {
				f$1 += l$2[2].length;
				let h$4 = l$2[3];
				i$1.push({
					type: "text",
					content: h$4,
					range: /* @__PURE__ */ U.create(/* @__PURE__ */ W.create(t, s$1 + f$1 + n$1), /* @__PURE__ */ W.create(t, s$1 + f$1 + h$4.length + n$1))
				});
			} else i$1.push({
				type: "text",
				content: "",
				range: /* @__PURE__ */ U.create(/* @__PURE__ */ W.create(t, s$1 + f$1 + n$1), /* @__PURE__ */ W.create(t, s$1 + f$1 + n$1))
			});
			s$1 = u$2 + l$2[0].length;
		}
		let o$1 = /* @__PURE__ */ e$1.substring(s$1);
		o$1.length > 0 && i$1.push({
			type: "text",
			content: o$1,
			range: /* @__PURE__ */ U.create(/* @__PURE__ */ W.create(t, s$1 + n$1), /* @__PURE__ */ W.create(t, s$1 + n$1 + o$1.length))
		});
	}
	return i$1;
}
m(pg, "buildInlineTokens");
var mg = /\S/, gg = /\s*$/;
function Tu(r, e$1) {
	let t = /* @__PURE__ */ r.substring(e$1).match(mg);
	return t ? e$1 + t.index : r.length;
}
m(Tu, "skipWhitespace");
function yg(r) {
	let e$1 = /* @__PURE__ */ r.match(gg);
	if (e$1 && typeof e$1.index == "number") return e$1.index;
}
m(yg, "lastCharacter");
function Tg(r) {
	var e$1, t, n$1, i$1;
	let s$1 = /* @__PURE__ */ W.create(r.position.line, r.position.character);
	if (r.tokens.length === 0) return new Va([], U.create(s$1, s$1));
	let o$1 = [];
	for (; r.index < r.tokens.length;) {
		let c$2 = /* @__PURE__ */ Rg(r, o$1[o$1.length - 1]);
		c$2 && o$1.push(c$2);
	}
	let l$2 = (t = (e$1 = o$1[0]) === null || e$1 === void 0 ? void 0 : e$1.range.start) !== null && t !== void 0 ? t : s$1, u$2 = (i$1 = (n$1 = o$1[o$1.length - 1]) === null || n$1 === void 0 ? void 0 : n$1.range.end) !== null && i$1 !== void 0 ? i$1 : s$1;
	return new Va(o$1, U.create(l$2, u$2));
}
m(Tg, "parseJSDocComment");
function Rg(r, e$1) {
	let t = r.tokens[r.index];
	if (t.type === "tag") return oh(r, !1);
	if (t.type === "text" || t.type === "inline-tag") return ah(r);
	xg(t, e$1), r.index++;
}
m(Rg, "parseJSDocElement");
function xg(r, e$1) {
	if (e$1) {
		let t = new ja("", r.range);
		"inlines" in e$1 ? e$1.inlines.push(t) : e$1.content.inlines.push(t);
	}
}
m(xg, "appendEmptyLine");
function ah(r) {
	let e$1 = r.tokens[r.index], t = e$1, n$1 = e$1, i$1 = [];
	for (; e$1 && e$1.type !== "break" && e$1.type !== "tag";) i$1.push(/* @__PURE__ */ Eg(r)), n$1 = e$1, e$1 = r.tokens[r.index];
	return new ms(i$1, U.create(t.range.start, n$1.range.end));
}
m(ah, "parseJSDocText");
function Eg(r) {
	return r.tokens[r.index].type === "inline-tag" ? oh(r, !0) : lh(r);
}
m(Eg, "parseJSDocInline");
function oh(r, e$1) {
	let t = r.tokens[r.index++], n$1 = /* @__PURE__ */ t.content.substring(1);
	if (r.tokens[r.index]?.type === "text") if (e$1) {
		let s$1 = /* @__PURE__ */ lh(r);
		return new ps(n$1, new ms([s$1], s$1.range), e$1, U.create(t.range.start, s$1.range.end));
	} else {
		let s$1 = /* @__PURE__ */ ah(r);
		return new ps(n$1, s$1, e$1, U.create(t.range.start, s$1.range.end));
	}
	else {
		let s$1 = t.range;
		return new ps(n$1, new ms([], s$1), e$1, s$1);
	}
}
m(oh, "parseJSDocTag");
function lh(r) {
	let e$1 = r.tokens[r.index++];
	return new ja(e$1.content, e$1.range);
}
m(lh, "parseJSDocLine");
function Eu(r) {
	if (!r) return Eu({
		start: "/**",
		end: "*/",
		line: "*"
	});
	let { start: e$1, end: t, line: n$1 } = r;
	return {
		start: /* @__PURE__ */ yu(e$1, !0),
		end: /* @__PURE__ */ yu(t, !1),
		line: /* @__PURE__ */ yu(n$1, !0)
	};
}
m(Eu, "normalizeOptions");
function yu(r, e$1) {
	if (typeof r == "string" || typeof r == "object") {
		let t = typeof r == "string" ? lr(r) : r.source;
		return e$1 ? /* @__PURE__ */ new RegExp(`^\\s*${t}`) : /* @__PURE__ */ new RegExp(`\\s*${t}\\s*$`);
	} else return r;
}
m(yu, "normalizeOption");
var Va = class {
	static {
		m(this, "JSDocCommentImpl");
	}
	constructor(e$1, t) {
		this.elements = e$1, this.range = t;
	}
	getTag(e$1) {
		return this.getAllTags().find((t) => t.name === e$1);
	}
	getTags(e$1) {
		return this.getAllTags().filter((t) => t.name === e$1);
	}
	getAllTags() {
		return this.elements.filter((e$1) => "name" in e$1);
	}
	toString() {
		let e$1 = "";
		for (let t of this.elements) if (e$1.length === 0) e$1 = /* @__PURE__ */ t.toString();
		else {
			let n$1 = /* @__PURE__ */ t.toString();
			e$1 += ih(e$1) + n$1;
		}
		return e$1.trim();
	}
	toMarkdown(e$1) {
		let t = "";
		for (let n$1 of this.elements) if (t.length === 0) t = /* @__PURE__ */ n$1.toMarkdown(e$1);
		else {
			let i$1 = /* @__PURE__ */ n$1.toMarkdown(e$1);
			t += ih(t) + i$1;
		}
		return t.trim();
	}
}, ps = class {
	static {
		m(this, "JSDocTagImpl");
	}
	constructor(e$1, t, n$1, i$1) {
		this.name = e$1, this.content = t, this.inline = n$1, this.range = i$1;
	}
	toString() {
		let e$1 = `@${this.name}`, t = /* @__PURE__ */ this.content.toString();
		return this.content.inlines.length === 1 ? e$1 = `${e$1} ${t}` : this.content.inlines.length > 1 && (e$1 = `${e$1}
${t}`), this.inline ? `{${e$1}}` : e$1;
	}
	toMarkdown(e$1) {
		var t, n$1;
		return (n$1 = (t = e$1?.renderTag) === null || t === void 0 ? void 0 : t.call(e$1, this)) !== null && n$1 !== void 0 ? n$1 : this.toMarkdownDefault(e$1);
	}
	toMarkdownDefault(e$1) {
		let t = /* @__PURE__ */ this.content.toMarkdown(e$1);
		if (this.inline) {
			let s$1 = /* @__PURE__ */ Ag(this.name, t, e$1 ?? {});
			if (typeof s$1 == "string") return s$1;
		}
		let n$1 = "";
		e$1?.tag === "italic" || e$1?.tag === void 0 ? n$1 = "*" : e$1?.tag === "bold" ? n$1 = "**" : e$1?.tag === "bold-italic" && (n$1 = "***");
		let i$1 = `${n$1}@${this.name}${n$1}`;
		return this.content.inlines.length === 1 ? i$1 = `${i$1} \u2014 ${t}` : this.content.inlines.length > 1 && (i$1 = `${i$1}
${t}`), this.inline ? `{${i$1}}` : i$1;
	}
};
function Ag(r, e$1, t) {
	var n$1, i$1;
	if (r === "linkplain" || r === "linkcode" || r === "link") {
		let s$1 = /* @__PURE__ */ e$1.indexOf(" "), o$1 = e$1;
		if (s$1 > 0) {
			let u$2 = /* @__PURE__ */ Tu(e$1, s$1);
			o$1 = /* @__PURE__ */ e$1.substring(u$2), e$1 = /* @__PURE__ */ e$1.substring(0, s$1);
		}
		return (r === "linkcode" || r === "link" && t.link === "code") && (o$1 = `\`${o$1}\``), (i$1 = (n$1 = t.renderLink) === null || n$1 === void 0 ? void 0 : n$1.call(t, e$1, o$1)) !== null && i$1 !== void 0 ? i$1 : vg(e$1, o$1);
	}
}
m(Ag, "renderInlineTag");
function vg(r, e$1) {
	try {
		return Ue.parse(r, !0), `[${e$1}](${r})`;
	} catch {
		return r;
	}
}
m(vg, "renderLinkDefault");
var ms = class {
	static {
		m(this, "JSDocTextImpl");
	}
	constructor(e$1, t) {
		this.inlines = e$1, this.range = t;
	}
	toString() {
		let e$1 = "";
		for (let t = 0; t < this.inlines.length; t++) {
			let n$1 = this.inlines[t], i$1 = this.inlines[t + 1];
			e$1 += /* @__PURE__ */ n$1.toString(), i$1 && i$1.range.start.line > n$1.range.start.line && (e$1 += `
`);
		}
		return e$1;
	}
	toMarkdown(e$1) {
		let t = "";
		for (let n$1 = 0; n$1 < this.inlines.length; n$1++) {
			let i$1 = this.inlines[n$1], s$1 = this.inlines[n$1 + 1];
			t += /* @__PURE__ */ i$1.toMarkdown(e$1), s$1 && s$1.range.start.line > i$1.range.start.line && (t += `
`);
		}
		return t;
	}
}, ja = class {
	static {
		m(this, "JSDocLineImpl");
	}
	constructor(e$1, t) {
		this.text = e$1, this.range = t;
	}
	toString() {
		return this.text;
	}
	toMarkdown() {
		return this.text;
	}
};
function ih(r) {
	return r.endsWith(`
`) ? `
` : `

`;
}
m(ih, "fillNewlines");
var gs = class {
	static {
		m(this, "JSDocDocumentationProvider");
	}
	constructor(e$1) {
		this.indexManager = e$1.shared.workspace.IndexManager, this.commentProvider = e$1.documentation.CommentProvider;
	}
	getDocumentation(e$1) {
		let t = /* @__PURE__ */ this.commentProvider.getComment(e$1);
		if (t && xu(t)) return Ru(t).toMarkdown({
			renderLink: /* @__PURE__ */ m((i$1, s$1) => this.documentationLinkRenderer(e$1, i$1, s$1), "renderLink"),
			renderTag: /* @__PURE__ */ m((i$1) => this.documentationTagRenderer(e$1, i$1), "renderTag")
		});
	}
	documentationLinkRenderer(e$1, t, n$1) {
		var i$1;
		let s$1 = (i$1 = /* @__PURE__ */ this.findNameInPrecomputedScopes(e$1, t)) !== null && i$1 !== void 0 ? i$1 : this.findNameInGlobalScope(e$1, t);
		if (s$1 && s$1.nameSegment) {
			let o$1 = s$1.nameSegment.range.start.line + 1, l$2 = s$1.nameSegment.range.start.character + 1, u$2 = /* @__PURE__ */ s$1.documentUri.with({ fragment: `L${o$1},${l$2}` });
			return `[${n$1}](${u$2.toString()})`;
		} else return;
	}
	documentationTagRenderer(e$1, t) {}
	findNameInPrecomputedScopes(e$1, t) {
		let i$1 = we(e$1).precomputedScopes;
		if (!i$1) return;
		let s$1 = e$1;
		do {
			let l$2 = /* @__PURE__ */ i$1.get(s$1).find((u$2) => u$2.name === t);
			if (l$2) return l$2;
			s$1 = s$1.$container;
		} while (s$1);
	}
	findNameInGlobalScope(e$1, t) {
		return this.indexManager.allElements().find((i$1) => i$1.name === t);
	}
};
var ys = class {
	static {
		m(this, "DefaultCommentProvider");
	}
	constructor(e$1) {
		this.grammarConfig = () => e$1.parser.GrammarConfig;
	}
	getComment(e$1) {
		var t;
		return pu(e$1) ? e$1.$comment : (t = /* @__PURE__ */ To(e$1.$cstNode, this.grammarConfig().multilineCommentRules)) === null || t === void 0 ? void 0 : t.text;
	}
};
var Ts = class {
	static {
		m(this, "DefaultAsyncParser");
	}
	constructor(e$1) {
		this.syncParser = e$1.parser.LangiumParser;
	}
	parse(e$1, t) {
		return Promise.resolve(/* @__PURE__ */ this.syncParser.parse(e$1));
	}
}, Au = class {
	static {
		m(this, "AbstractThreadedAsyncParser");
	}
	constructor(e$1) {
		this.threadCount = 8, this.terminationDelay = 200, this.workerPool = [], this.queue = [], this.hydrator = e$1.serializer.Hydrator;
	}
	initializeWorkers() {
		for (; this.workerPool.length < this.threadCount;) {
			let e$1 = /* @__PURE__ */ this.createWorker();
			e$1.onReady(() => {
				if (this.queue.length > 0) {
					let t = /* @__PURE__ */ this.queue.shift();
					t && (e$1.lock(), t.resolve(e$1));
				}
			}), this.workerPool.push(e$1);
		}
	}
	async parse(e$1, t) {
		let n$1 = await this.acquireParserWorker(t), i$1 = new Ge(), s$1, o$1 = /* @__PURE__ */ t.onCancellationRequested(() => {
			s$1 = /* @__PURE__ */ setTimeout(() => {
				this.terminateWorker(n$1);
			}, this.terminationDelay);
		});
		return n$1.parse(e$1).then((l$2) => {
			let u$2 = /* @__PURE__ */ this.hydrator.hydrate(l$2);
			i$1.resolve(u$2);
		}).catch((l$2) => {
			i$1.reject(l$2);
		}).finally(() => {
			o$1.dispose(), clearTimeout(s$1);
		}), i$1.promise;
	}
	terminateWorker(e$1) {
		e$1.terminate();
		let t = /* @__PURE__ */ this.workerPool.indexOf(e$1);
		t >= 0 && this.workerPool.splice(t, 1);
	}
	async acquireParserWorker(e$1) {
		this.initializeWorkers();
		for (let n$1 of this.workerPool) if (n$1.ready) return n$1.lock(), n$1;
		let t = new Ge();
		return e$1.onCancellationRequested(() => {
			let n$1 = /* @__PURE__ */ this.queue.indexOf(t);
			n$1 >= 0 && this.queue.splice(n$1, 1), t.reject(mt);
		}), this.queue.push(t), t.promise;
	}
}, vu = class {
	static {
		m(this, "ParserWorker");
	}
	get ready() {
		return this._ready;
	}
	get onReady() {
		return this.onReadyEmitter.event;
	}
	constructor(e$1, t, n$1, i$1) {
		this.onReadyEmitter = new ne.Emitter(), this.deferred = new Ge(), this._ready = !0, this._parsing = !1, this.sendMessage = e$1, this._terminate = i$1, t((s$1) => {
			let o$1 = s$1;
			this.deferred.resolve(o$1), this.unlock();
		}), n$1((s$1) => {
			this.deferred.reject(s$1), this.unlock();
		});
	}
	terminate() {
		this.deferred.reject(mt), this._terminate();
	}
	lock() {
		this._ready = !1;
	}
	unlock() {
		this._parsing = !1, this._ready = !0, this.onReadyEmitter.fire();
	}
	parse(e$1) {
		if (this._parsing) throw new Error("Parser worker is busy");
		return this._parsing = !0, this.deferred = new Ge(), this.sendMessage(e$1), this.deferred.promise;
	}
};
var Rs = class {
	static {
		m(this, "DefaultWorkspaceLock");
	}
	constructor() {
		this.previousTokenSource = new S.CancellationTokenSource(), this.writeQueue = [], this.readQueue = [], this.done = !0;
	}
	write(e$1) {
		this.cancelWrite();
		let t = /* @__PURE__ */ Fa();
		return this.previousTokenSource = t, this.enqueue(this.writeQueue, e$1, t.token);
	}
	read(e$1) {
		return this.enqueue(this.readQueue, e$1);
	}
	enqueue(e$1, t, n$1 = S.CancellationToken.None) {
		let i$1 = new Ge(), s$1 = {
			action: t,
			deferred: i$1,
			cancellationToken: n$1
		};
		return e$1.push(s$1), this.performNextOperation(), i$1.promise;
	}
	async performNextOperation() {
		if (!this.done) return;
		let e$1 = [];
		if (this.writeQueue.length > 0) e$1.push(/* @__PURE__ */ this.writeQueue.shift());
		else if (this.readQueue.length > 0) e$1.push(.../* @__PURE__ */ this.readQueue.splice(0, this.readQueue.length));
		else return;
		this.done = !1, await Promise.all(/* @__PURE__ */ e$1.map(async ({ action: t, deferred: n$1, cancellationToken: i$1 }) => {
			try {
				let s$1 = await Promise.resolve().then(() => t(i$1));
				n$1.resolve(s$1);
			} catch (s$1) {
				gt(s$1) ? n$1.resolve(void 0) : n$1.reject(s$1);
			}
		})), this.done = !0, this.performNextOperation();
	}
	cancelWrite() {
		this.previousTokenSource.cancel();
	}
};
var xs = class {
	static {
		m(this, "DefaultHydrator");
	}
	constructor(e$1) {
		this.grammarElementIdMap = new Rr(), this.tokenTypeIdMap = new Rr(), this.grammar = e$1.Grammar, this.lexer = e$1.parser.Lexer, this.linker = e$1.references.Linker;
	}
	dehydrate(e$1) {
		return {
			lexerErrors: e$1.lexerErrors,
			lexerReport: e$1.lexerReport ? this.dehydrateLexerReport(e$1.lexerReport) : void 0,
			parserErrors: /* @__PURE__ */ e$1.parserErrors.map((t) => Object.assign(/* @__PURE__ */ Object.assign({}, t), { message: t.message })),
			value: /* @__PURE__ */ this.dehydrateAstNode(e$1.value, /* @__PURE__ */ this.createDehyrationContext(e$1.value))
		};
	}
	dehydrateLexerReport(e$1) {
		return e$1;
	}
	createDehyrationContext(e$1) {
		let t = /* @__PURE__ */ new Map(), n$1 = /* @__PURE__ */ new Map();
		for (let i$1 of Je(e$1)) t.set(i$1, {});
		if (e$1.$cstNode) for (let i$1 of Zt(e$1.$cstNode)) n$1.set(i$1, {});
		return {
			astNodes: t,
			cstNodes: n$1
		};
	}
	dehydrateAstNode(e$1, t) {
		let n$1 = /* @__PURE__ */ t.astNodes.get(e$1);
		n$1.$type = e$1.$type, n$1.$containerIndex = e$1.$containerIndex, n$1.$containerProperty = e$1.$containerProperty, e$1.$cstNode !== void 0 && (n$1.$cstNode = /* @__PURE__ */ this.dehydrateCstNode(e$1.$cstNode, t));
		for (let [i$1, s$1] of Object.entries(e$1)) if (!i$1.startsWith("$")) if (Array.isArray(s$1)) {
			let o$1 = [];
			n$1[i$1] = o$1;
			for (let l$2 of s$1) le(l$2) ? o$1.push(/* @__PURE__ */ this.dehydrateAstNode(l$2, t)) : Ee(l$2) ? o$1.push(/* @__PURE__ */ this.dehydrateReference(l$2, t)) : o$1.push(l$2);
		} else le(s$1) ? n$1[i$1] = /* @__PURE__ */ this.dehydrateAstNode(s$1, t) : Ee(s$1) ? n$1[i$1] = /* @__PURE__ */ this.dehydrateReference(s$1, t) : s$1 !== void 0 && (n$1[i$1] = s$1);
		return n$1;
	}
	dehydrateReference(e$1, t) {
		let n$1 = {};
		return n$1.$refText = e$1.$refText, e$1.$refNode && (n$1.$refNode = /* @__PURE__ */ t.cstNodes.get(e$1.$refNode)), n$1;
	}
	dehydrateCstNode(e$1, t) {
		let n$1 = /* @__PURE__ */ t.cstNodes.get(e$1);
		return Zn(e$1) ? n$1.fullText = e$1.fullText : n$1.grammarSource = /* @__PURE__ */ this.getGrammarElementId(e$1.grammarSource), n$1.hidden = e$1.hidden, n$1.astNode = /* @__PURE__ */ t.astNodes.get(e$1.astNode), tt(e$1) ? n$1.content = /* @__PURE__ */ e$1.content.map((i$1) => this.dehydrateCstNode(i$1, t)) : Gt(e$1) && (n$1.tokenType = e$1.tokenType.name, n$1.offset = e$1.offset, n$1.length = e$1.length, n$1.startLine = e$1.range.start.line, n$1.startColumn = e$1.range.start.character, n$1.endLine = e$1.range.end.line, n$1.endColumn = e$1.range.end.character), n$1;
	}
	hydrate(e$1) {
		let t = e$1.value, n$1 = /* @__PURE__ */ this.createHydrationContext(t);
		return "$cstNode" in t && this.hydrateCstNode(t.$cstNode, n$1), {
			lexerErrors: e$1.lexerErrors,
			lexerReport: e$1.lexerReport,
			parserErrors: e$1.parserErrors,
			value: /* @__PURE__ */ this.hydrateAstNode(t, n$1)
		};
	}
	createHydrationContext(e$1) {
		let t = /* @__PURE__ */ new Map(), n$1 = /* @__PURE__ */ new Map();
		for (let s$1 of Je(e$1)) t.set(s$1, {});
		let i$1;
		if (e$1.$cstNode) for (let s$1 of Zt(e$1.$cstNode)) {
			let o$1;
			"fullText" in s$1 ? (o$1 = new Bn(s$1.fullText), i$1 = o$1) : "content" in s$1 ? o$1 = new gr() : "tokenType" in s$1 && (o$1 = /* @__PURE__ */ this.hydrateCstLeafNode(s$1)), o$1 && (n$1.set(s$1, o$1), o$1.root = i$1);
		}
		return {
			astNodes: t,
			cstNodes: n$1
		};
	}
	hydrateAstNode(e$1, t) {
		let n$1 = /* @__PURE__ */ t.astNodes.get(e$1);
		n$1.$type = e$1.$type, n$1.$containerIndex = e$1.$containerIndex, n$1.$containerProperty = e$1.$containerProperty, e$1.$cstNode && (n$1.$cstNode = /* @__PURE__ */ t.cstNodes.get(e$1.$cstNode));
		for (let [i$1, s$1] of Object.entries(e$1)) if (!i$1.startsWith("$")) if (Array.isArray(s$1)) {
			let o$1 = [];
			n$1[i$1] = o$1;
			for (let l$2 of s$1) le(l$2) ? o$1.push(/* @__PURE__ */ this.setParent(/* @__PURE__ */ this.hydrateAstNode(l$2, t), n$1)) : Ee(l$2) ? o$1.push(/* @__PURE__ */ this.hydrateReference(l$2, n$1, i$1, t)) : o$1.push(l$2);
		} else le(s$1) ? n$1[i$1] = /* @__PURE__ */ this.setParent(/* @__PURE__ */ this.hydrateAstNode(s$1, t), n$1) : Ee(s$1) ? n$1[i$1] = /* @__PURE__ */ this.hydrateReference(s$1, n$1, i$1, t) : s$1 !== void 0 && (n$1[i$1] = s$1);
		return n$1;
	}
	setParent(e$1, t) {
		return e$1.$container = t, e$1;
	}
	hydrateReference(e$1, t, n$1, i$1) {
		return this.linker.buildReference(t, n$1, /* @__PURE__ */ i$1.cstNodes.get(e$1.$refNode), e$1.$refText);
	}
	hydrateCstNode(e$1, t, n$1 = 0) {
		let i$1 = /* @__PURE__ */ t.cstNodes.get(e$1);
		if (typeof e$1.grammarSource == "number" && (i$1.grammarSource = /* @__PURE__ */ this.getGrammarElement(e$1.grammarSource)), i$1.astNode = /* @__PURE__ */ t.astNodes.get(e$1.astNode), tt(i$1)) for (let s$1 of e$1.content) {
			let o$1 = /* @__PURE__ */ this.hydrateCstNode(s$1, t, n$1++);
			i$1.content.push(o$1);
		}
		return i$1;
	}
	hydrateCstLeafNode(e$1) {
		let t = /* @__PURE__ */ this.getTokenType(e$1.tokenType), n$1 = e$1.offset, i$1 = e$1.length, s$1 = e$1.startLine, o$1 = e$1.startColumn, l$2 = e$1.endLine, u$2 = e$1.endColumn, c$2 = e$1.hidden;
		return new mr(n$1, i$1, {
			start: {
				line: s$1,
				character: o$1
			},
			end: {
				line: l$2,
				character: u$2
			}
		}, t, c$2);
	}
	getTokenType(e$1) {
		return this.lexer.definition[e$1];
	}
	getGrammarElementId(e$1) {
		if (e$1) return this.grammarElementIdMap.size === 0 && this.createGrammarElementIdMap(), this.grammarElementIdMap.get(e$1);
	}
	getGrammarElement(e$1) {
		return this.grammarElementIdMap.size === 0 && this.createGrammarElementIdMap(), this.grammarElementIdMap.getKey(e$1);
	}
	createGrammarElementIdMap() {
		let e$1 = 0;
		for (let t of Je(this.grammar)) oi(t) && this.grammarElementIdMap.set(t, e$1++);
	}
};
function ku(r) {
	return {
		documentation: {
			CommentProvider: /* @__PURE__ */ m((e$1) => new ys(e$1), "CommentProvider"),
			DocumentationProvider: /* @__PURE__ */ m((e$1) => new gs(e$1), "DocumentationProvider")
		},
		parser: {
			AsyncParser: /* @__PURE__ */ m((e$1) => new Ts(e$1), "AsyncParser"),
			GrammarConfig: /* @__PURE__ */ m((e$1) => il(e$1), "GrammarConfig"),
			LangiumParser: /* @__PURE__ */ m((e$1) => ru(e$1), "LangiumParser"),
			CompletionParser: /* @__PURE__ */ m((e$1) => tu(e$1), "CompletionParser"),
			ValueConverter: /* @__PURE__ */ m(() => new Tr(), "ValueConverter"),
			TokenBuilder: /* @__PURE__ */ m(() => new bt(), "TokenBuilder"),
			Lexer: /* @__PURE__ */ m((e$1) => new Ar(e$1), "Lexer"),
			ParserErrorMessageProvider: /* @__PURE__ */ m(() => new Wn(), "ParserErrorMessageProvider"),
			LexerErrorMessageProvider: /* @__PURE__ */ m(() => new hs(), "LexerErrorMessageProvider")
		},
		workspace: {
			AstNodeLocator: /* @__PURE__ */ m(() => new ls(), "AstNodeLocator"),
			AstNodeDescriptionProvider: /* @__PURE__ */ m((e$1) => new as(e$1), "AstNodeDescriptionProvider"),
			ReferenceDescriptionProvider: /* @__PURE__ */ m((e$1) => new os(e$1), "ReferenceDescriptionProvider")
		},
		references: {
			Linker: /* @__PURE__ */ m((e$1) => new Xi(e$1), "Linker"),
			NameProvider: /* @__PURE__ */ m(() => new Yi(), "NameProvider"),
			ScopeProvider: /* @__PURE__ */ m((e$1) => new ts(e$1), "ScopeProvider"),
			ScopeComputation: /* @__PURE__ */ m((e$1) => new Qi(e$1), "ScopeComputation"),
			References: /* @__PURE__ */ m((e$1) => new Ji(e$1), "References")
		},
		serializer: {
			Hydrator: /* @__PURE__ */ m((e$1) => new xs(e$1), "Hydrator"),
			JsonSerializer: /* @__PURE__ */ m((e$1) => new rs(e$1), "JsonSerializer")
		},
		validation: {
			DocumentValidator: /* @__PURE__ */ m((e$1) => new ss(e$1), "DocumentValidator"),
			ValidationRegistry: /* @__PURE__ */ m((e$1) => new is(e$1), "ValidationRegistry")
		},
		shared: /* @__PURE__ */ m(() => r.shared, "shared")
	};
}
m(ku, "createDefaultCoreModule");
function $u(r) {
	return {
		ServiceRegistry: /* @__PURE__ */ m((e$1) => new ns(e$1), "ServiceRegistry"),
		workspace: {
			LangiumDocuments: /* @__PURE__ */ m((e$1) => new qi(e$1), "LangiumDocuments"),
			LangiumDocumentFactory: /* @__PURE__ */ m((e$1) => new zi$1(e$1), "LangiumDocumentFactory"),
			DocumentBuilder: /* @__PURE__ */ m((e$1) => new cs(e$1), "DocumentBuilder"),
			IndexManager: /* @__PURE__ */ m((e$1) => new fs(e$1), "IndexManager"),
			WorkspaceManager: /* @__PURE__ */ m((e$1) => new ds(e$1), "WorkspaceManager"),
			FileSystemProvider: /* @__PURE__ */ m((e$1) => r.fileSystemProvider(e$1), "FileSystemProvider"),
			WorkspaceLock: /* @__PURE__ */ m(() => new Rs(), "WorkspaceLock"),
			ConfigurationProvider: /* @__PURE__ */ m((e$1) => new us(e$1), "ConfigurationProvider")
		}
	};
}
m($u, "createDefaultSharedCoreModule");
var Iu;
(function(r) {
	r.merge = (e$1, t) => Ha(/* @__PURE__ */ Ha({}, e$1), t);
})(Iu || (Iu = {}));
function za(r, e$1, t, n$1, i$1, s$1, o$1, l$2, u$2) {
	return hh(/* @__PURE__ */ [
		r,
		e$1,
		t,
		n$1,
		i$1,
		s$1,
		o$1,
		l$2,
		u$2
	].reduce(Ha, {}));
}
m(za, "inject");
var fh = /* @__PURE__ */ Symbol("isProxy");
function dh(r) {
	if (r && r[fh]) for (let e$1 of Object.values(r)) dh(e$1);
	return r;
}
m(dh, "eagerLoad");
function hh(r, e$1) {
	let t = new Proxy({}, {
		deleteProperty: /* @__PURE__ */ m(() => !1, "deleteProperty"),
		set: /* @__PURE__ */ m(() => {
			throw new Error("Cannot set property on injected service container");
		}, "set"),
		get: /* @__PURE__ */ m((n$1, i$1) => i$1 === fh ? !0 : ch(n$1, i$1, r, e$1 || t), "get"),
		getOwnPropertyDescriptor: /* @__PURE__ */ m((n$1, i$1) => (ch(n$1, i$1, r, e$1 || t), Object.getOwnPropertyDescriptor(n$1, i$1)), "getOwnPropertyDescriptor"),
		has: /* @__PURE__ */ m((n$1, i$1) => i$1 in r, "has"),
		ownKeys: /* @__PURE__ */ m(() => [.../* @__PURE__ */ Object.getOwnPropertyNames(r)], "ownKeys")
	});
	return t;
}
m(hh, "_inject");
var uh = /* @__PURE__ */ Symbol();
function ch(r, e$1, t, n$1) {
	if (e$1 in r) {
		if (r[e$1] instanceof Error) throw new Error("Construction failure. Please make sure that your dependencies are constructable.", { cause: r[e$1] });
		if (r[e$1] === uh) throw new Error("Cycle detected. Please make \"" + String(e$1) + "\" lazy. Visit https://langium.org/docs/reference/configuration-services/#resolving-cyclic-dependencies");
		return r[e$1];
	} else if (e$1 in t) {
		let i$1 = t[e$1];
		r[e$1] = uh;
		try {
			r[e$1] = typeof i$1 == "function" ? i$1(n$1) : hh(i$1, n$1);
		} catch (s$1) {
			throw r[e$1] = s$1 instanceof Error ? s$1 : void 0, s$1;
		}
		return r[e$1];
	} else return;
}
m(ch, "_resolve");
function Ha(r, e$1) {
	if (e$1) {
		for (let [t, n$1] of Object.entries(e$1)) if (n$1 !== void 0) {
			let i$1 = r[t];
			i$1 !== null && n$1 !== null && typeof i$1 == "object" && typeof n$1 == "object" ? r[t] = /* @__PURE__ */ Ha(i$1, n$1) : r[t] = n$1;
		}
	}
	return r;
}
m(Ha, "_merge");
var Nu = {
	indentTokenName: "INDENT",
	dedentTokenName: "DEDENT",
	whitespaceTokenName: "WS",
	ignoreIndentationDelimiters: []
}, vr;
(function(r) {
	r.REGULAR = "indentation-sensitive", r.IGNORE_INDENTATION = "ignore-indentation";
})(vr || (vr = {}));
var qa = class extends bt {
	static {
		m(this, "IndentationAwareTokenBuilder");
	}
	constructor(e$1 = Nu) {
		super(), this.indentationStack = [0], this.whitespaceRegExp = /[ \t]+/y, this.options = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.assign({}, Nu), e$1), this.indentTokenType = /* @__PURE__ */ Bt({
			name: this.options.indentTokenName,
			pattern: /* @__PURE__ */ this.indentMatcher.bind(this),
			line_breaks: !1
		}), this.dedentTokenType = /* @__PURE__ */ Bt({
			name: this.options.dedentTokenName,
			pattern: /* @__PURE__ */ this.dedentMatcher.bind(this),
			line_breaks: !1
		});
	}
	buildTokens(e$1, t) {
		let n$1 = /* @__PURE__ */ super.buildTokens(e$1, t);
		if (!Ka(n$1)) throw new Error("Invalid tokens built by default builder");
		let { indentTokenName: i$1, dedentTokenName: s$1, whitespaceTokenName: o$1, ignoreIndentationDelimiters: l$2 } = this.options, u$2, c$2, f$1, d$1 = [];
		for (let h$4 of n$1) {
			for (let [p$2, g$3] of l$2) h$4.name === p$2 ? h$4.PUSH_MODE = vr.IGNORE_INDENTATION : h$4.name === g$3 && (h$4.POP_MODE = !0);
			h$4.name === s$1 ? u$2 = h$4 : h$4.name === i$1 ? c$2 = h$4 : h$4.name === o$1 ? f$1 = h$4 : d$1.push(h$4);
		}
		if (!u$2 || !c$2 || !f$1) throw new Error("Some indentation/whitespace tokens not found!");
		return l$2.length > 0 ? {
			modes: {
				[vr.REGULAR]: [
					u$2,
					c$2,
					...d$1,
					f$1
				],
				[vr.IGNORE_INDENTATION]: [...d$1, f$1]
			},
			defaultMode: vr.REGULAR
		} : [
			u$2,
			c$2,
			f$1,
			...d$1
		];
	}
	flushLexingReport(e$1) {
		let t = /* @__PURE__ */ super.flushLexingReport(e$1);
		return Object.assign(/* @__PURE__ */ Object.assign({}, t), { remainingDedents: /* @__PURE__ */ this.flushRemainingDedents(e$1) });
	}
	isStartOfLine(e$1, t) {
		return t === 0 || `\r
`.includes(e$1[t - 1]);
	}
	matchWhitespace(e$1, t, n$1, i$1) {
		var s$1;
		this.whitespaceRegExp.lastIndex = t;
		let o$1 = /* @__PURE__ */ this.whitespaceRegExp.exec(e$1);
		return {
			currIndentLevel: (s$1 = o$1?.[0].length) !== null && s$1 !== void 0 ? s$1 : 0,
			prevIndentLevel: /* @__PURE__ */ this.indentationStack.at(-1),
			match: o$1
		};
	}
	createIndentationTokenInstance(e$1, t, n$1, i$1) {
		let s$1 = /* @__PURE__ */ this.getLineNumber(t, i$1);
		return _t(e$1, n$1, i$1, i$1 + n$1.length, s$1, s$1, 1, n$1.length);
	}
	getLineNumber(e$1, t) {
		return e$1.substring(0, t).split(/\r\n|\r|\n/).length;
	}
	indentMatcher(e$1, t, n$1, i$1) {
		if (!this.isStartOfLine(e$1, t)) return null;
		let { currIndentLevel: s$1, prevIndentLevel: o$1, match: l$2 } = this.matchWhitespace(e$1, t, n$1, i$1);
		return s$1 <= o$1 ? null : (this.indentationStack.push(s$1), l$2);
	}
	dedentMatcher(e$1, t, n$1, i$1) {
		var s$1, o$1, l$2, u$2;
		if (!this.isStartOfLine(e$1, t)) return null;
		let { currIndentLevel: c$2, prevIndentLevel: f$1, match: d$1 } = this.matchWhitespace(e$1, t, n$1, i$1);
		if (c$2 >= f$1) return null;
		let h$4 = /* @__PURE__ */ this.indentationStack.lastIndexOf(c$2);
		if (h$4 === -1) return this.diagnostics.push({
			severity: "error",
			message: `Invalid dedent level ${c$2} at offset: ${t}. Current indentation stack: ${this.indentationStack}`,
			offset: t,
			length: (o$1 = (s$1 = d$1?.[0]) === null || s$1 === void 0 ? void 0 : s$1.length) !== null && o$1 !== void 0 ? o$1 : 0,
			line: /* @__PURE__ */ this.getLineNumber(e$1, t),
			column: 1
		}), null;
		let p$2 = this.indentationStack.length - h$4 - 1, g$3 = (u$2 = (l$2 = /* @__PURE__ */ e$1.substring(0, t).match(/[\r\n]+$/)) === null || l$2 === void 0 ? void 0 : l$2[0].length) !== null && u$2 !== void 0 ? u$2 : 1;
		for (let y$1 = 0; y$1 < p$2; y$1++) {
			let v$3 = /* @__PURE__ */ this.createIndentationTokenInstance(this.dedentTokenType, e$1, "", t - (g$3 - 1));
			n$1.push(v$3), this.indentationStack.pop();
		}
		return null;
	}
	buildTerminalToken(e$1) {
		let t = /* @__PURE__ */ super.buildTerminalToken(e$1), { indentTokenName: n$1, dedentTokenName: i$1, whitespaceTokenName: s$1 } = this.options;
		return t.name === n$1 ? this.indentTokenType : t.name === i$1 ? this.dedentTokenType : t.name === s$1 ? Bt({
			name: s$1,
			pattern: this.whitespaceRegExp,
			group: se.SKIPPED
		}) : t;
	}
	flushRemainingDedents(e$1) {
		let t = [];
		for (; this.indentationStack.length > 1;) t.push(/* @__PURE__ */ this.createIndentationTokenInstance(this.dedentTokenType, e$1, "", e$1.length)), this.indentationStack.pop();
		return this.indentationStack = [0], t;
	}
}, Cu = class extends Ar {
	static {
		m(this, "IndentationAwareLexer");
	}
	constructor(e$1) {
		if (super(e$1), e$1.parser.TokenBuilder instanceof qa) this.indentationTokenBuilder = e$1.parser.TokenBuilder;
		else throw new Error("IndentationAwareLexer requires an accompanying IndentationAwareTokenBuilder");
	}
	tokenize(e$1, t = Wa) {
		let n$1 = /* @__PURE__ */ super.tokenize(e$1), i$1 = n$1.report;
		t?.mode === "full" && n$1.tokens.push(...i$1.remainingDedents), i$1.remainingDedents = [];
		let { indentTokenType: s$1, dedentTokenType: o$1 } = this.indentationTokenBuilder, l$2 = s$1.tokenTypeIdx, u$2 = o$1.tokenTypeIdx, c$2 = [], f$1 = n$1.tokens.length - 1;
		for (let d$1 = 0; d$1 < f$1; d$1++) {
			let h$4 = n$1.tokens[d$1], p$2 = n$1.tokens[d$1 + 1];
			if (h$4.tokenTypeIdx === l$2 && p$2.tokenTypeIdx === u$2) {
				d$1++;
				continue;
			}
			c$2.push(h$4);
		}
		return f$1 >= 0 && c$2.push(n$1.tokens[f$1]), n$1.tokens = c$2, n$1;
	}
};
var K = {};
o(K, {
	AstUtils: () => Fs,
	BiMap: () => Rr,
	Cancellation: () => S,
	ContextCache: () => xr,
	CstUtils: () => Ss,
	DONE_RESULT: () => Ce,
	Deferred: () => Ge,
	Disposable: () => jt,
	DisposableCache: () => qn,
	DocumentCache: () => Ua,
	EMPTY_STREAM: () => ei,
	ErrorWithLocation: () => tr,
	GrammarUtils: () => Ks,
	MultiMap: () => st,
	OperationCancelled: () => mt,
	Reduction: () => Ir,
	RegExpUtils: () => Bs,
	SimpleCache: () => es,
	StreamImpl: () => je,
	TreeStreamImpl: () => lt,
	URI: () => Ue,
	UriUtils: () => Be,
	WorkspaceCache: () => Xn,
	assertUnreachable: () => ct,
	delayNextTick: () => fu,
	interruptAndCheck: () => ce,
	isOperationCancelled: () => gt,
	loadGrammarFromJson: () => yt,
	setInterruptionPeriod: () => qd,
	startCancelableOperation: () => Fa,
	stream: () => j
});
p(K, ne);
var Xa = class {
	static {
		m(this, "EmptyFileSystemProvider");
	}
	readFile() {
		throw new Error("No file system is available.");
	}
	async readDirectory() {
		return [];
	}
}, Su = { fileSystemProvider: /* @__PURE__ */ m(() => new Xa(), "fileSystemProvider") };
var kg = {
	Grammar: /* @__PURE__ */ m(() => {}, "Grammar"),
	LanguageMetaData: /* @__PURE__ */ m(() => ({
		caseInsensitive: !1,
		fileExtensions: [".langium"],
		languageId: "langium"
	}), "LanguageMetaData")
}, $g = { AstReflection: /* @__PURE__ */ m(() => new hn(), "AstReflection") };
function Ig() {
	let r = /* @__PURE__ */ za(/* @__PURE__ */ $u(Su), $g), e$1 = /* @__PURE__ */ za(/* @__PURE__ */ ku({ shared: r }), kg);
	return r.ServiceRegistry.register(e$1), e$1;
}
m(Ig, "createMinimalGrammarServices");
function yt(r) {
	var e$1;
	let t = /* @__PURE__ */ Ig(), n$1 = /* @__PURE__ */ t.serializer.JsonSerializer.deserialize(r);
	return t.shared.workspace.LangiumDocumentFactory.fromModel(n$1, /* @__PURE__ */ Ue.parse(`memory://${(e$1 = n$1.name) !== null && e$1 !== void 0 ? e$1 : "grammar"}.langium`)), n$1;
}
m(yt, "loadGrammarFromJson");
p(fe, K);
var Ng = Object.defineProperty, F = /* @__PURE__ */ m((r, e$1) => Ng(r, "name", {
	value: e$1,
	configurable: !0
}), "__name"), ph = "Statement", no = "Architecture";
function Cg(r) {
	return at.isInstance(r, no);
}
m(Cg, "isArchitecture");
F(Cg, "isArchitecture");
var Ya = "Axis", Es = "Branch";
function Sg(r) {
	return at.isInstance(r, Es);
}
m(Sg, "isBranch");
F(Sg, "isBranch");
var Ja = "Checkout", Qa = "CherryPicking", wu = "ClassDefStatement", As = "Commit";
function wg(r) {
	return at.isInstance(r, As);
}
m(wg, "isCommit");
F(wg, "isCommit");
var _u = "Curve", Lu = "Edge", Ou = "Entry", vs = "GitGraph";
function _g(r) {
	return at.isInstance(r, vs);
}
m(_g, "isGitGraph");
F(_g, "isGitGraph");
var Pu = "Group", io = "Info";
function Lg(r) {
	return at.isInstance(r, io);
}
m(Lg, "isInfo");
F(Lg, "isInfo");
var Za = "Item", bu = "Junction", ks = "Merge";
function Og(r) {
	return at.isInstance(r, ks);
}
m(Og, "isMerge");
F(Og, "isMerge");
var Mu = "Option", so = "Packet";
function Pg(r) {
	return at.isInstance(r, so);
}
m(Pg, "isPacket");
F(Pg, "isPacket");
var ao = "PacketBlock";
function bg(r) {
	return at.isInstance(r, ao);
}
m(bg, "isPacketBlock");
F(bg, "isPacketBlock");
var oo = "Pie";
function Mg(r) {
	return at.isInstance(r, oo);
}
m(Mg, "isPie");
F(Mg, "isPie");
var lo = "PieSection";
function Dg(r) {
	return at.isInstance(r, lo);
}
m(Dg, "isPieSection");
F(Dg, "isPieSection");
var Du = "Radar", Fu = "Service", uo = "Treemap";
function Fg(r) {
	return at.isInstance(r, uo);
}
m(Fg, "isTreemap");
F(Fg, "isTreemap");
var Gu = "TreemapRow", eo = "Direction", to = "Leaf", ro = "Section", Ah = class extends Jt {
	static {
		m(this, "MermaidAstReflection");
	}
	static {
		F(this, "MermaidAstReflection");
	}
	getAllTypes() {
		return [
			no,
			Ya,
			Es,
			Ja,
			Qa,
			wu,
			As,
			_u,
			eo,
			Lu,
			Ou,
			vs,
			Pu,
			io,
			Za,
			bu,
			to,
			ks,
			Mu,
			so,
			ao,
			oo,
			lo,
			Du,
			ro,
			Fu,
			ph,
			uo,
			Gu
		];
	}
	computeIsSubtype(r, e$1) {
		switch (r) {
			case Es:
			case Ja:
			case Qa:
			case As:
			case ks: return this.isSubtype(ph, e$1);
			case eo: return this.isSubtype(vs, e$1);
			case to:
			case ro: return this.isSubtype(Za, e$1);
			default: return !1;
		}
	}
	getReferenceType(r) {
		let e$1 = `${r.container.$type}:${r.property}`;
		switch (e$1) {
			case "Entry:axis": return Ya;
			default: throw new Error(`${e$1} is not a valid reference id.`);
		}
	}
	getTypeMetaData(r) {
		switch (r) {
			case no: return {
				name: no,
				properties: [
					{ name: "accDescr" },
					{ name: "accTitle" },
					{
						name: "edges",
						defaultValue: []
					},
					{
						name: "groups",
						defaultValue: []
					},
					{
						name: "junctions",
						defaultValue: []
					},
					{
						name: "services",
						defaultValue: []
					},
					{ name: "title" }
				]
			};
			case Ya: return {
				name: Ya,
				properties: [{ name: "label" }, { name: "name" }]
			};
			case Es: return {
				name: Es,
				properties: [{ name: "name" }, { name: "order" }]
			};
			case Ja: return {
				name: Ja,
				properties: [{ name: "branch" }]
			};
			case Qa: return {
				name: Qa,
				properties: [
					{ name: "id" },
					{ name: "parent" },
					{
						name: "tags",
						defaultValue: []
					}
				]
			};
			case wu: return {
				name: wu,
				properties: [{ name: "className" }, { name: "styleText" }]
			};
			case As: return {
				name: As,
				properties: [
					{ name: "id" },
					{ name: "message" },
					{
						name: "tags",
						defaultValue: []
					},
					{ name: "type" }
				]
			};
			case _u: return {
				name: _u,
				properties: [
					{
						name: "entries",
						defaultValue: []
					},
					{ name: "label" },
					{ name: "name" }
				]
			};
			case Lu: return {
				name: Lu,
				properties: [
					{ name: "lhsDir" },
					{
						name: "lhsGroup",
						defaultValue: !1
					},
					{ name: "lhsId" },
					{
						name: "lhsInto",
						defaultValue: !1
					},
					{ name: "rhsDir" },
					{
						name: "rhsGroup",
						defaultValue: !1
					},
					{ name: "rhsId" },
					{
						name: "rhsInto",
						defaultValue: !1
					},
					{ name: "title" }
				]
			};
			case Ou: return {
				name: Ou,
				properties: [{ name: "axis" }, { name: "value" }]
			};
			case vs: return {
				name: vs,
				properties: [
					{ name: "accDescr" },
					{ name: "accTitle" },
					{
						name: "statements",
						defaultValue: []
					},
					{ name: "title" }
				]
			};
			case Pu: return {
				name: Pu,
				properties: [
					{ name: "icon" },
					{ name: "id" },
					{ name: "in" },
					{ name: "title" }
				]
			};
			case io: return {
				name: io,
				properties: [
					{ name: "accDescr" },
					{ name: "accTitle" },
					{ name: "title" }
				]
			};
			case Za: return {
				name: Za,
				properties: [{ name: "classSelector" }, { name: "name" }]
			};
			case bu: return {
				name: bu,
				properties: [{ name: "id" }, { name: "in" }]
			};
			case ks: return {
				name: ks,
				properties: [
					{ name: "branch" },
					{ name: "id" },
					{
						name: "tags",
						defaultValue: []
					},
					{ name: "type" }
				]
			};
			case Mu: return {
				name: Mu,
				properties: [{ name: "name" }, {
					name: "value",
					defaultValue: !1
				}]
			};
			case so: return {
				name: so,
				properties: [
					{ name: "accDescr" },
					{ name: "accTitle" },
					{
						name: "blocks",
						defaultValue: []
					},
					{ name: "title" }
				]
			};
			case ao: return {
				name: ao,
				properties: [
					{ name: "bits" },
					{ name: "end" },
					{ name: "label" },
					{ name: "start" }
				]
			};
			case oo: return {
				name: oo,
				properties: [
					{ name: "accDescr" },
					{ name: "accTitle" },
					{
						name: "sections",
						defaultValue: []
					},
					{
						name: "showData",
						defaultValue: !1
					},
					{ name: "title" }
				]
			};
			case lo: return {
				name: lo,
				properties: [{ name: "label" }, { name: "value" }]
			};
			case Du: return {
				name: Du,
				properties: [
					{ name: "accDescr" },
					{ name: "accTitle" },
					{
						name: "axes",
						defaultValue: []
					},
					{
						name: "curves",
						defaultValue: []
					},
					{
						name: "options",
						defaultValue: []
					},
					{ name: "title" }
				]
			};
			case Fu: return {
				name: Fu,
				properties: [
					{ name: "icon" },
					{ name: "iconText" },
					{ name: "id" },
					{ name: "in" },
					{ name: "title" }
				]
			};
			case uo: return {
				name: uo,
				properties: [
					{ name: "accDescr" },
					{ name: "accTitle" },
					{ name: "title" },
					{
						name: "TreemapRows",
						defaultValue: []
					}
				]
			};
			case Gu: return {
				name: Gu,
				properties: [{ name: "indent" }, { name: "item" }]
			};
			case eo: return {
				name: eo,
				properties: [
					{ name: "accDescr" },
					{ name: "accTitle" },
					{ name: "dir" },
					{
						name: "statements",
						defaultValue: []
					},
					{ name: "title" }
				]
			};
			case to: return {
				name: to,
				properties: [
					{ name: "classSelector" },
					{ name: "name" },
					{ name: "value" }
				]
			};
			case ro: return {
				name: ro,
				properties: [{ name: "classSelector" }, { name: "name" }]
			};
			default: return {
				name: r,
				properties: []
			};
		}
	}
}, at = new Ah(), mh, Gg = /* @__PURE__ */ F(() => mh ?? (mh = /* @__PURE__ */ yt(`{"$type":"Grammar","isDeclared":true,"name":"Info","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Info","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"info"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"*"},{"$type":"Group","elements":[{"$type":"Keyword","value":"showInfo"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"*"}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"?"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@7"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@8"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`)), "InfoGrammar"), gh, Ug = /* @__PURE__ */ F(() => gh ?? (gh = /* @__PURE__ */ yt(`{"$type":"Grammar","isDeclared":true,"name":"Packet","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Packet","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"packet"},{"$type":"Keyword","value":"packet-beta"}]},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]},{"$type":"Assignment","feature":"blocks","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"PacketBlock","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Assignment","feature":"start","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"-"},{"$type":"Assignment","feature":"end","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}],"cardinality":"?"}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"+"},{"$type":"Assignment","feature":"bits","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]}]},{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@8"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@9"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`)), "PacketGrammar"), yh, Bg = /* @__PURE__ */ F(() => yh ?? (yh = /* @__PURE__ */ yt(`{"$type":"Grammar","isDeclared":true,"name":"Pie","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Pie","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"pie"},{"$type":"Assignment","feature":"showData","operator":"?=","terminal":{"$type":"Keyword","value":"showData"},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]},{"$type":"Assignment","feature":"sections","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"PieSection","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]}},{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"FLOAT_PIE","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/-?[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT_PIE","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/-?(0|[1-9][0-9]*)(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER_PIE","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@2"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@3"}}]},"fragment":false,"hidden":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@11"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@12"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`)), "PieGrammar"), Th, Wg = /* @__PURE__ */ F(() => Th ?? (Th = /* @__PURE__ */ yt(`{"$type":"Grammar","isDeclared":true,"name":"Architecture","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Architecture","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"architecture-beta"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Statement","definition":{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"groups","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"services","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Assignment","feature":"junctions","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}},{"$type":"Assignment","feature":"edges","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"LeftPort","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"lhsDir","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"RightPort","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"rhsDir","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Keyword","value":":"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Arrow","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]},{"$type":"Assignment","feature":"lhsInto","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"--"},{"$type":"Group","elements":[{"$type":"Keyword","value":"-"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]}},{"$type":"Keyword","value":"-"}]}]},{"$type":"Assignment","feature":"rhsInto","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Group","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"group"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Assignment","feature":"icon","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@28"},"arguments":[]},"cardinality":"?"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]},"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Service","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"service"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"iconText","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]}},{"$type":"Assignment","feature":"icon","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@28"},"arguments":[]}}],"cardinality":"?"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]},"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Junction","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"junction"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Edge","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"lhsId","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Assignment","feature":"lhsGroup","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Assignment","feature":"rhsId","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Assignment","feature":"rhsGroup","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"ARROW_DIRECTION","definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"L"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"R"}}]},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"T"}}]},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"B"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARROW_GROUP","definition":{"$type":"RegexToken","regex":"/\\\\{group\\\\}/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARROW_INTO","definition":{"$type":"RegexToken","regex":"/<|>/"},"fragment":false,"hidden":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@18"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@19"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false},{"$type":"TerminalRule","name":"ARCH_ICON","definition":{"$type":"RegexToken","regex":"/\\\\([\\\\w-:]+\\\\)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARCH_TITLE","definition":{"$type":"RegexToken","regex":"/\\\\[[\\\\w ]+\\\\]/"},"fragment":false,"hidden":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`)), "ArchitectureGrammar"), Rh, Kg = /* @__PURE__ */ F(() => Rh ?? (Rh = /* @__PURE__ */ yt(`{"$type":"Grammar","isDeclared":true,"name":"GitGraph","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"GitGraph","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"Group","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"Keyword","value":":"}]},{"$type":"Keyword","value":"gitGraph:"},{"$type":"Group","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]},{"$type":"Keyword","value":":"}]}]},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]},{"$type":"Assignment","feature":"statements","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Statement","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Direction","definition":{"$type":"Assignment","feature":"dir","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"LR"},{"$type":"Keyword","value":"TB"},{"$type":"Keyword","value":"BT"}]}},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Commit","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"commit"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"msg:","cardinality":"?"},{"$type":"Assignment","feature":"message","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"type:"},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"NORMAL"},{"$type":"Keyword","value":"REVERSE"},{"$type":"Keyword","value":"HIGHLIGHT"}]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Branch","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"branch"},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"order:"},{"$type":"Assignment","feature":"order","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Merge","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"merge"},{"$type":"Assignment","feature":"branch","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]}},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"type:"},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"NORMAL"},{"$type":"Keyword","value":"REVERSE"},{"$type":"Keyword","value":"HIGHLIGHT"}]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Checkout","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"checkout"},{"$type":"Keyword","value":"switch"}]},{"$type":"Assignment","feature":"branch","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"CherryPicking","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"cherry-pick"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"parent:"},{"$type":"Assignment","feature":"parent","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@14"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@15"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false},{"$type":"TerminalRule","name":"REFERENCE","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\\\w([-\\\\./\\\\w]*[-\\\\w])?/"},"fragment":false,"hidden":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`)), "GitGraphGrammar"), xh, Vg = /* @__PURE__ */ F(() => xh ?? (xh = /* @__PURE__ */ yt(`{"$type":"Grammar","isDeclared":true,"name":"Radar","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Radar","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"radar-beta"},{"$type":"Keyword","value":"radar-beta:"},{"$type":"Group","elements":[{"$type":"Keyword","value":"radar-beta"},{"$type":"Keyword","value":":"}]}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]},{"$type":"Group","elements":[{"$type":"Keyword","value":"axis"},{"$type":"Assignment","feature":"axes","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"axes","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"curve"},{"$type":"Assignment","feature":"curves","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"curves","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"options","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"options","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Label","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]}},{"$type":"Keyword","value":"]"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Axis","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Curve","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[],"cardinality":"?"},{"$type":"Keyword","value":"{"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Keyword","value":"}"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Entries","definition":{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"}]}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"DetailedEntry","returnType":{"$ref":"#/interfaces@0"},"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"axis","operator":"=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@2"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},"deprecatedSyntax":false}},{"$type":"Keyword","value":":","cardinality":"?"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"NumberEntry","returnType":{"$ref":"#/interfaces@0"},"definition":{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Option","definition":{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"showLegend"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"ticks"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"max"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"min"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"graticule"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}}]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"GRATICULE","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"circle"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"polygon"}}]},"fragment":false,"hidden":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@15"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@16"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"interfaces":[{"$type":"Interface","name":"Entry","attributes":[{"$type":"TypeAttribute","name":"axis","isOptional":true,"type":{"$type":"ReferenceType","referenceType":{"$type":"SimpleType","typeRef":{"$ref":"#/rules@2"}}}},{"$type":"TypeAttribute","name":"value","type":{"$type":"SimpleType","primitiveType":"number"},"isOptional":false}],"superTypes":[]}],"definesHiddenTokens":false,"hiddenTokens":[],"types":[],"usedGrammars":[]}`)), "RadarGrammar"), Eh, jg = /* @__PURE__ */ F(() => Eh ?? (Eh = /* @__PURE__ */ yt(`{"$type":"Grammar","isDeclared":true,"name":"Treemap","rules":[{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"ParserRule","entry":true,"name":"Treemap","returnType":{"$ref":"#/interfaces@4"},"definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@0"},"arguments":[]},{"$type":"Assignment","feature":"TreemapRows","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]}}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"TREEMAP_KEYWORD","definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"treemap-beta"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"treemap"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"CLASS_DEF","definition":{"$type":"RegexToken","regex":"/classDef\\\\s+([a-zA-Z_][a-zA-Z0-9_]+)(?:\\\\s+([^;\\\\r\\\\n]*))?(?:;)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STYLE_SEPARATOR","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":":::"}},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"SEPARATOR","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":":"}},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"COMMA","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":","}},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WS","definition":{"$type":"RegexToken","regex":"/[ \\\\t]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"ML_COMMENT","definition":{"$type":"RegexToken","regex":"/\\\\%\\\\%[^\\\\n]*/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"NL","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false},{"$type":"ParserRule","name":"TreemapRow","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"indent","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"item","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"ClassDef","dataType":"string","definition":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Item","returnType":{"$ref":"#/interfaces@0"},"definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Section","returnType":{"$ref":"#/interfaces@1"},"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]},{"$type":"Assignment","feature":"classSelector","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Leaf","returnType":{"$ref":"#/interfaces@2"},"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"?"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]},{"$type":"Assignment","feature":"classSelector","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"INDENTATION","definition":{"$type":"RegexToken","regex":"/[ \\\\t]{1,}/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID2","definition":{"$type":"RegexToken","regex":"/[a-zA-Z_][a-zA-Z0-9_]*/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER2","definition":{"$type":"RegexToken","regex":"/[0-9_\\\\.\\\\,]+/"},"fragment":false,"hidden":false},{"$type":"ParserRule","name":"MyNumber","dataType":"number","definition":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"STRING2","definition":{"$type":"RegexToken","regex":"/\\"[^\\"]*\\"|'[^']*'/"},"fragment":false,"hidden":false}],"interfaces":[{"$type":"Interface","name":"Item","attributes":[{"$type":"TypeAttribute","name":"name","type":{"$type":"SimpleType","primitiveType":"string"},"isOptional":false},{"$type":"TypeAttribute","name":"classSelector","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]},{"$type":"Interface","name":"Section","superTypes":[{"$ref":"#/interfaces@0"}],"attributes":[]},{"$type":"Interface","name":"Leaf","superTypes":[{"$ref":"#/interfaces@0"}],"attributes":[{"$type":"TypeAttribute","name":"value","type":{"$type":"SimpleType","primitiveType":"number"},"isOptional":false}]},{"$type":"Interface","name":"ClassDefStatement","attributes":[{"$type":"TypeAttribute","name":"className","type":{"$type":"SimpleType","primitiveType":"string"},"isOptional":false},{"$type":"TypeAttribute","name":"styleText","type":{"$type":"SimpleType","primitiveType":"string"},"isOptional":false}],"superTypes":[]},{"$type":"Interface","name":"Treemap","attributes":[{"$type":"TypeAttribute","name":"TreemapRows","type":{"$type":"ArrayType","elementType":{"$type":"SimpleType","typeRef":{"$ref":"#/rules@14"}}},"isOptional":false},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"definesHiddenTokens":false,"hiddenTokens":[],"imports":[],"types":[],"usedGrammars":[],"$comment":"/**\\n * Treemap grammar for Langium\\n * Converted from mindmap grammar\\n *\\n * The ML_COMMENT and NL hidden terminals handle whitespace, comments, and newlines\\n * before the treemap keyword, allowing for empty lines and comments before the\\n * treemap declaration.\\n */"}`)), "TreemapGrammar"), Hg = {
	languageId: "info",
	fileExtensions: [".mmd", ".mermaid"],
	caseInsensitive: !1,
	mode: "production"
}, zg = {
	languageId: "packet",
	fileExtensions: [".mmd", ".mermaid"],
	caseInsensitive: !1,
	mode: "production"
}, qg = {
	languageId: "pie",
	fileExtensions: [".mmd", ".mermaid"],
	caseInsensitive: !1,
	mode: "production"
}, Xg = {
	languageId: "architecture",
	fileExtensions: [".mmd", ".mermaid"],
	caseInsensitive: !1,
	mode: "production"
}, Yg = {
	languageId: "gitGraph",
	fileExtensions: [".mmd", ".mermaid"],
	caseInsensitive: !1,
	mode: "production"
}, Jg = {
	languageId: "radar",
	fileExtensions: [".mmd", ".mermaid"],
	caseInsensitive: !1,
	mode: "production"
}, Qg = {
	languageId: "treemap",
	fileExtensions: [".mmd", ".mermaid"],
	caseInsensitive: !1,
	mode: "production"
}, JN = { AstReflection: /* @__PURE__ */ F(() => new Ah(), "AstReflection") }, QN = {
	Grammar: /* @__PURE__ */ F(() => Gg(), "Grammar"),
	LanguageMetaData: /* @__PURE__ */ F(() => Hg, "LanguageMetaData"),
	parser: {}
}, ZN = {
	Grammar: /* @__PURE__ */ F(() => Ug(), "Grammar"),
	LanguageMetaData: /* @__PURE__ */ F(() => zg, "LanguageMetaData"),
	parser: {}
}, eC = {
	Grammar: /* @__PURE__ */ F(() => Bg(), "Grammar"),
	LanguageMetaData: /* @__PURE__ */ F(() => qg, "LanguageMetaData"),
	parser: {}
}, tC = {
	Grammar: /* @__PURE__ */ F(() => Wg(), "Grammar"),
	LanguageMetaData: /* @__PURE__ */ F(() => Xg, "LanguageMetaData"),
	parser: {}
}, rC = {
	Grammar: /* @__PURE__ */ F(() => Kg(), "Grammar"),
	LanguageMetaData: /* @__PURE__ */ F(() => Yg, "LanguageMetaData"),
	parser: {}
}, nC = {
	Grammar: /* @__PURE__ */ F(() => Vg(), "Grammar"),
	LanguageMetaData: /* @__PURE__ */ F(() => Jg, "LanguageMetaData"),
	parser: {}
}, iC = {
	Grammar: /* @__PURE__ */ F(() => jg(), "Grammar"),
	LanguageMetaData: /* @__PURE__ */ F(() => Qg, "LanguageMetaData"),
	parser: {}
}, ry = {
	ACC_DESCR: /accDescr(?:[\t ]*:([^\n\r]*)|\s*{([^}]*)})/,
	ACC_TITLE: /accTitle[\t ]*:([^\n\r]*)/,
	TITLE: /title([\t ][^\n\r]*|)/
}, ny = class extends Tr {
	static {
		m(this, "AbstractMermaidValueConverter");
	}
	static {
		F(this, "AbstractMermaidValueConverter");
	}
	runConverter(r, e$1, t) {
		let n$1 = /* @__PURE__ */ this.runCommonConverter(r, e$1, t);
		return n$1 === void 0 && (n$1 = /* @__PURE__ */ this.runCustomConverter(r, e$1, t)), n$1 === void 0 ? super.runConverter(r, e$1, t) : n$1;
	}
	runCommonConverter(r, e$1, t) {
		let n$1 = ry[r.name];
		if (n$1 === void 0) return;
		let i$1 = /* @__PURE__ */ n$1.exec(e$1);
		if (i$1 !== null) {
			if (i$1[1] !== void 0) return i$1[1].trim().replace(/[\t ]{2,}/gm, " ");
			if (i$1[2] !== void 0) return i$1[2].replace(/^\s*/gm, "").replace(/\s+$/gm, "").replace(/[\t ]{2,}/gm, " ").replace(/[\n\r]{2,}/gm, `
`);
		}
	}
}, aC = class extends ny {
	static {
		m(this, "CommonValueConverter");
	}
	static {
		F(this, "CommonValueConverter");
	}
	runCustomConverter(r, e$1, t) {}
}, iy = class extends bt {
	static {
		m(this, "AbstractMermaidTokenBuilder");
	}
	static {
		F(this, "AbstractMermaidTokenBuilder");
	}
	constructor(r) {
		super(), this.keywords = new Set(r);
	}
	buildKeywordTokens(r, e$1, t) {
		let n$1 = /* @__PURE__ */ super.buildKeywordTokens(r, e$1, t);
		return n$1.forEach((i$1) => {
			this.keywords.has(i$1.name) && i$1.PATTERN !== void 0 && (i$1.PATTERN = /* @__PURE__ */ new RegExp(i$1.PATTERN.toString() + "(?:(?=%%)|(?!\\S))"));
		}), n$1;
	}
};
(class extends iy {
	static {
		m(this, "CommonTokenBuilder");
	}
	static {
		F(this, "CommonTokenBuilder");
	}
});
var A = class extends iy {
	static {
		m(this, "ArchitectureTokenBuilder");
	}
	static {
		F(this, "ArchitectureTokenBuilder");
	}
	constructor() {
		super(["architecture"]);
	}
}, C = class extends ny {
	static {
		m(this, "ArchitectureValueConverter");
	}
	static {
		F(this, "ArchitectureValueConverter");
	}
	runCustomConverter(t, e$1, a) {
		if (t.name === "ARCH_ICON") return e$1.replace(/[()]/g, "").trim();
		if (t.name === "ARCH_TEXT_ICON") return e$1.replace(/["()]/g, "");
		if (t.name === "ARCH_TITLE") return e$1.replace(/[[\]]/g, "").trim();
	}
}, v = { parser: {
	TokenBuilder: /* @__PURE__ */ F(() => new A(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ F(() => new C(), "ValueConverter")
} };
function T(t = Su) {
	let e$1 = /* @__PURE__ */ za(/* @__PURE__ */ $u(t), JN), a = /* @__PURE__ */ za(/* @__PURE__ */ ku({ shared: e$1 }), tC, v);
	return e$1.ServiceRegistry.register(a), {
		shared: e$1,
		Architecture: a
	};
}
m(T, "createArchitectureServices");
F(T, "createArchitectureServices");
export { n as $, Xr as A, hi$1 as B, Kn as C, Rn as D, Qr as E, dn$1 as F, ym as G, np$1 as H, fm as I, N as J, Cr as K, fn as L, Zr as M, _f as N, Ti$1 as O, bn$1 as P, m as Q, gp$1 as R, Ki as S, Om$1 as T, sn as U, lp$1 as V, tp$1 as W, ki$1 as X, T$1 as Y, qs$1 as Z, za as _, JN as a, Jm$1 as b, ZN as c, iC as d, o as et, iy as f, rC as g, ny as h, F as i, Zi$1 as j, Tn$1 as k, aC as l, nC as m, v as n, QN as o, ku as p, Mt$1 as q, $u as r, Su as s, T as t, q as tt, eC as u, Df as v, Nf as w, Jr as x, Ji$1 as y, h as z };
