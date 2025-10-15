const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/webapp-openapi-playground-page.DCGEtERn.chunk.js","assets/vendor-innoai-tech-vueuikit.pf1Bh6eQ.chunk.js","assets/vendor-innoai-tech-vuekit.DFxPSnTM.chunk.js","assets/vendor-rxjs.Bnzpw5oq.chunk.js","assets/lib-nodepkg-typedef.C31p5CR7.chunk.js","assets/rolldown-runtime.BUi7Tn5u.chunk.js","assets/vendor-mermaid.BLxVj147.chunk.js","assets/vendor-innoai-tech-fetcher.CcPeqamQ.chunk.js","assets/vendor-innoai-tech-jsoneditor.DW5yVjHU.chunk.js","assets/lib-nodepkg-vuemarkdown.R8axF3Ac.chunk.js","assets/lib-nodepkg-vuematerial.M8enR1gt.chunk.js","assets/lib-nodepkg-vueformdata.BFynmKwt.chunk.js","assets/webapp-openapi-playground-mod-openapi.BCfilhuX.chunk.js","assets/webapp-openapi-playground-page-operations.B4Xq0H-7.chunk.js"])))=>i.map(i=>d[i]);
import { n as e, r as t, t as n } from "./rolldown-runtime.BUi7Tn5u.chunk.js";
import { B as r, F as i, I as l, L as o, f as a, k as u, p as s, s as c, t as f } from "./vendor-innoai-tech-vuekit.DFxPSnTM.chunk.js";
import { i as d, r as p, t as h } from "./vendor-innoai-tech-fetcher.CcPeqamQ.chunk.js";
import { a as m, c as g, i as y } from "./vendor-innoai-tech-vueuikit.pf1Bh6eQ.chunk.js";
import { n as b, r as x } from "./webapp-openapi-playground-mod-openapi.BCfilhuX.chunk.js";
let k = document.createElement("link").relList;
if (!(k && k.supports && k.supports("modulepreload"))) {
	for (let e of document.querySelectorAll("link[rel=\"modulepreload\"]")) w(e);
	new MutationObserver((e) => {
		for (let t of e) if ("childList" === t.type) for (let e of t.addedNodes) "LINK" === e.tagName && "modulepreload" === e.rel && w(e);
	}).observe(document, {
		childList: !0,
		subtree: !0
	});
}
function w(e) {
	if (e.ep) return;
	e.ep = !0;
	let t = function(e) {
		let t = {};
		return e.integrity && (t.integrity = e.integrity), e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy), "use-credentials" === e.crossOrigin ? t.credentials = "include" : "anonymous" === e.crossOrigin ? t.credentials = "omit" : t.credentials = "same-origin", t;
	}(e);
	fetch(e.href, t);
}
function S(e) {
	let t = Object.create(null);
	for (let n of e.split(",")) t[n] = 1;
	return (e) => e in t;
}
var C, _, A, T, E, L, M, O, D, P, F, I = {}, R = [], z = () => {}, N = () => !1, j = (e) => 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && (e.charCodeAt(2) > 122 || 97 > e.charCodeAt(2)), V = (e) => e.startsWith("onUpdate:"), B = Object.assign, U = (e, t) => {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}, H = Object.prototype.hasOwnProperty, $ = (e, t) => H.call(e, t), q = Array.isArray, W = (e) => "[object Map]" === Y(e), K = (e) => "function" == typeof e, G = (e) => "string" == typeof e, Q = (e) => "symbol" == typeof e, Z = (e) => null !== e && "object" == typeof e, X = (e) => (Z(e) || K(e)) && K(e.then) && K(e.catch), J = Object.prototype.toString, Y = (e) => J.call(e), ee = (e) => G(e) && "NaN" !== e && "-" !== e[0] && "" + parseInt(e, 10) === e, et = S(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), en = (e) => {
	let t = Object.create(null);
	return (n) => t[n] || (t[n] = e(n));
}, er = /-\w/g, ei = en((e) => e.replace(er, (e) => e.slice(1).toUpperCase())), el = /\B([A-Z])/g, eo = en((e) => e.replace(el, "-$1").toLowerCase()), ea = en((e) => e.charAt(0).toUpperCase() + e.slice(1)), eu = en((e) => e ? `on${ea(e)}` : ""), es = (e, t) => !Object.is(e, t), ec = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, ef = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, ed = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, ep = () => _ || (_ = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
function eh(e) {
	if (q(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = G(r) ? function(e) {
				let t = {};
				return e.replace(ev, "").split(em).forEach((e) => {
					if (e) {
						let n = e.split(eg);
						n.length > 1 && (t[n[0].trim()] = n[1].trim());
					}
				}), t;
			}(r) : eh(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	}
	if (G(e) || Z(e)) return e;
}
var em = /;(?![^(]*\))/g, eg = /:([^]+)/, ev = /\/\*[^]*?\*\//g;
function ey(e) {
	let t = "";
	if (G(e)) t = e;
	else if (q(e)) for (let n = 0; n < e.length; n++) {
		let r = ey(e[n]);
		r && (t += r + " ");
	}
	else if (Z(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var eb = S("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"), ex = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = A, !e && A && (this.index = (A.scopes || (A.scopes = [])).push(this) - 1);
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
			let t = A;
			try {
				return A = this, e();
			} finally {
				A = t;
			}
		}
	}
	on() {
		1 == ++this._on && (this.prevScope = A, A = this);
	}
	off() {
		this._on > 0 && 0 == --this._on && (A = this.prevScope, this.prevScope = void 0);
	}
	stop(e) {
		if (this._active) {
			let t, n;
			for (t = 0, this._active = !1, n = this.effects.length; t < n; t++) this.effects[t].stop();
			for (t = 0, this.effects.length = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
			if (this.cleanups.length = 0, this.scopes) {
				for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].stop(!0);
				this.scopes.length = 0;
			}
			if (!this.detached && this.parent && !e) {
				let e = this.parent.scopes.pop();
				e && e !== this && (this.parent.scopes[this.index] = e, e.index = this.index);
			}
			this.parent = void 0;
		}
	}
}, ek = /* @__PURE__ */ new WeakSet(), ew = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, A && A.active && A.effects.push(this);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		64 & this.flags && (this.flags &= -65, ek.has(this) && (ek.delete(this), this.trigger()));
	}
	notify() {
		(!(2 & this.flags) || 32 & this.flags) && (8 & this.flags || eC(this));
	}
	run() {
		if (!(1 & this.flags)) return this.fn();
		this.flags |= 2, eI(this), eA(this);
		let e = T, t = eO;
		T = this, eO = !0;
		try {
			return this.fn();
		} finally {
			eT(this), T = e, eO = t, this.flags &= -3;
		}
	}
	stop() {
		if (1 & this.flags) {
			for (let e = this.deps; e; e = e.nextDep) eM(e);
			this.deps = this.depsTail = void 0, eI(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		64 & this.flags ? ek.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		eE(this) && this.run();
	}
	get dirty() {
		return eE(this);
	}
}, eS = 0;
function eC(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = L, L = e;
		return;
	}
	e.next = E, E = e;
}
function e_() {
	let e;
	if (!(--eS > 0)) {
		if (L) {
			let e = L;
			for (L = void 0; e;) {
				let t = e.next;
				e.next = void 0, e.flags &= -9, e = t;
			}
		}
		for (; E;) {
			let t = E;
			for (E = void 0; t;) {
				let n = t.next;
				if (t.next = void 0, t.flags &= -9, 1 & t.flags) try {
					t.trigger();
				} catch (t) {
					e || (e = t);
				}
				t = n;
			}
		}
		if (e) throw e;
	}
}
function eA(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function eT(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		-1 === r.version ? (r === n && (n = e), eM(r), function(e) {
			let { prevDep: t, nextDep: n } = e;
			t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
		}(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function eE(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (eL(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function eL(e) {
	if (4 & e.flags && !(16 & e.flags) || (e.flags &= -17, e.globalVersion === eR) || (e.globalVersion = eR, !e.isSSR && 128 & e.flags && (!e.deps && !e._dirty || !eE(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = T, r = eO;
	T = e, eO = !0;
	try {
		eA(e);
		let n = e.fn(e._value);
		(0 === t.version || es(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		T = n, eO = r, eT(e), e.flags &= -3;
	}
}
function eM(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) eM(e, !0);
	}
	t || --n.sc || !n.map || n.map.delete(n.key);
}
var eO = !0, eD = [];
function eP() {
	eD.push(eO), eO = !1;
}
function eF() {
	let e = eD.pop();
	eO = void 0 === e || e;
}
function eI(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = T;
		T = void 0;
		try {
			t();
		} finally {
			T = e;
		}
	}
}
var eR = 0, ez = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, eN = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!T || !eO || T === this.computed) return;
		let t = this.activeLink;
		if (void 0 === t || t.sub !== T) t = this.activeLink = new ez(T, this), T.deps ? (t.prevDep = T.depsTail, T.depsTail.nextDep = t, T.depsTail = t) : T.deps = T.depsTail = t, function e(t) {
			if (t.dep.sc++, 4 & t.sub.flags) {
				let n = t.dep.computed;
				if (n && !t.dep.subs) {
					n.flags |= 20;
					for (let t = n.deps; t; t = t.nextDep) e(t);
				}
				let r = t.dep.subs;
				r !== t && (t.prevSub = r, r && (r.nextSub = t)), t.dep.subs = t;
			}
		}(t);
		else if (-1 === t.version && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = T.depsTail, t.nextDep = void 0, T.depsTail.nextDep = t, T.depsTail = t, T.deps === t && (T.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, eR++, this.notify(e);
	}
	notify(e) {
		eS++;
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			e_();
		}
	}
}, ej = /* @__PURE__ */ new WeakMap(), eV = Symbol(""), eB = Symbol(""), eU = Symbol("");
function eH(e, t, n) {
	if (eO && T) {
		let t = ej.get(e);
		t || ej.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new eN()), r.map = t, r.key = n), r.track();
	}
}
function e$(e, t, n, r, i, l) {
	let o = ej.get(e);
	if (!o) return void eR++;
	let a = (e) => {
		e && e.trigger();
	};
	if (eS++, "clear" === t) o.forEach(a);
	else {
		let i = q(e), l = i && ee(n);
		if (i && "length" === n) {
			let e = Number(r);
			o.forEach((t, n) => {
				("length" === n || n === eU || !Q(n) && n >= e) && a(t);
			});
		} else switch ((void 0 !== n || o.has(void 0)) && a(o.get(n)), l && a(o.get(eU)), t) {
			case "add":
				i ? l && a(o.get("length")) : (a(o.get(eV)), W(e) && a(o.get(eB)));
				break;
			case "delete":
				!i && (a(o.get(eV)), W(e) && a(o.get(eB)));
				break;
			case "set": W(e) && a(o.get(eV));
		}
	}
	e_();
}
function eq(e) {
	let t = ty(e);
	return t === e ? t : (eH(t, "iterate", eU), tg(e) ? t : t.map(tb));
}
function eW(e) {
	return eH(e = ty(e), "iterate", eU), e;
}
var eK = {
	__proto__: null,
	[Symbol.iterator]() {
		return eG(this, Symbol.iterator, tb);
	},
	concat(...e) {
		return eq(this).concat(...e.map((e) => q(e) ? eq(e) : e));
	},
	entries() {
		return eG(this, "entries", (e) => (e[1] = tb(e[1]), e));
	},
	every(e, t) {
		return eZ(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return eZ(this, "filter", e, t, (e) => e.map(tb), arguments);
	},
	find(e, t) {
		return eZ(this, "find", e, t, tb, arguments);
	},
	findIndex(e, t) {
		return eZ(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return eZ(this, "findLast", e, t, tb, arguments);
	},
	findLastIndex(e, t) {
		return eZ(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return eZ(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return eJ(this, "includes", e);
	},
	indexOf(...e) {
		return eJ(this, "indexOf", e);
	},
	join(e) {
		return eq(this).join(e);
	},
	lastIndexOf(...e) {
		return eJ(this, "lastIndexOf", e);
	},
	map(e, t) {
		return eZ(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return eY(this, "pop");
	},
	push(...e) {
		return eY(this, "push", e);
	},
	reduce(e, ...t) {
		return eX(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return eX(this, "reduceRight", e, t);
	},
	shift() {
		return eY(this, "shift");
	},
	some(e, t) {
		return eZ(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return eY(this, "splice", e);
	},
	toReversed() {
		return eq(this).toReversed();
	},
	toSorted(e) {
		return eq(this).toSorted(e);
	},
	toSpliced(...e) {
		return eq(this).toSpliced(...e);
	},
	unshift(...e) {
		return eY(this, "unshift", e);
	},
	values() {
		return eG(this, "values", tb);
	}
};
function eG(e, t, n) {
	let r = eW(e), i = r[t]();
	return r === e || tg(e) || (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var eQ = Array.prototype;
function eZ(e, t, n, r, i, l) {
	let o = eW(e), a = o !== e && !tg(e), u = o[t];
	if (u !== eQ[t]) {
		let t = u.apply(e, l);
		return a ? tb(t) : t;
	}
	let s = n;
	o !== e && (a ? s = function(t, r) {
		return n.call(this, tb(t), r, e);
	} : n.length > 2 && (s = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let c = u.call(o, s, r);
	return a && i ? i(c) : c;
}
function eX(e, t, n, r) {
	let i = eW(e), l = n;
	return i !== e && (tg(e) ? n.length > 3 && (l = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}) : l = function(t, r, i) {
		return n.call(this, t, tb(r), i, e);
	}), i[t](l, ...r);
}
function eJ(e, t, n) {
	let r = ty(e);
	eH(r, "iterate", eU);
	let i = r[t](...n);
	return (-1 === i || !1 === i) && tv(n[0]) ? (n[0] = ty(n[0]), r[t](...n)) : i;
}
function eY(e, t, n = []) {
	eP(), eS++;
	let r = ty(e)[t].apply(e, n);
	return e_(), eF(), r;
}
var e1 = S("__proto__,__v_isRef,__isVue"), e0 = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => "arguments" !== e && "caller" !== e).map((e) => Symbol[e]).filter(Q));
function e2(e) {
	Q(e) || (e = String(e));
	let t = ty(this);
	return eH(t, "has", e), t.hasOwnProperty(e);
}
var e5 = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if ("__v_skip" === t) return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if ("__v_isReactive" === t) return !r;
		if ("__v_isReadonly" === t) return r;
		if ("__v_isShallow" === t) return i;
		if ("__v_raw" === t) return n === (r ? i ? ts : tu : i ? ta : to).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let l = q(e);
		if (!r) {
			let e;
			if (l && (e = eK[t])) return e;
			if ("hasOwnProperty" === t) return e2;
		}
		let o = Reflect.get(e, t, tk(e) ? e : n);
		if ((Q(t) ? e0.has(t) : e1(t)) || (r || eH(e, "get", t), i)) return o;
		if (tk(o)) {
			let e = l && ee(t) ? o : o.value;
			return r && Z(e) ? td(e) : e;
		}
		return Z(o) ? r ? td(o) : tc(o) : o;
	}
}, e4 = class extends e5 {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t];
		if (!this._isShallow) {
			let t = tm(i);
			if (tg(n) || tm(n) || (i = ty(i), n = ty(n)), !q(e) && tk(i) && !tk(n)) if (t) return !0;
			else return i.value = n, !0;
		}
		let l = q(e) && ee(t) ? Number(t) < e.length : $(e, t), o = Reflect.set(e, t, n, tk(e) ? e : r);
		return e === ty(r) && (l ? es(n, i) && e$(e, "set", t, n, i) : e$(e, "add", t, n)), o;
	}
	deleteProperty(e, t) {
		let n = $(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && e$(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return Q(t) && e0.has(t) || eH(e, "has", t), n;
	}
	ownKeys(e) {
		return eH(e, "iterate", q(e) ? "length" : eV), Reflect.ownKeys(e);
	}
}, e3 = class extends e5 {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, e6 = new e4(), e9 = new e3(), e8 = new e4(!0), e7 = (e) => e, te = (e) => Reflect.getPrototypeOf(e);
function tt(e) {
	return function() {
		return "delete" !== e && ("clear" === e ? void 0 : this);
	};
}
function tn(e, t) {
	let n = function(e, t) {
		let n = {
			get(n) {
				let r = this.__v_raw, i = ty(r), l = ty(n);
				e || (es(n, l) && eH(i, "get", n), eH(i, "get", l));
				let { has: o } = te(i), a = t ? e7 : e ? tx : tb;
				return o.call(i, n) ? a(r.get(n)) : o.call(i, l) ? a(r.get(l)) : void (r !== i && r.get(n));
			},
			get size() {
				let t = this.__v_raw;
				return e || eH(ty(t), "iterate", eV), t.size;
			},
			has(t) {
				let n = this.__v_raw, r = ty(n), i = ty(t);
				return e || (es(t, i) && eH(r, "has", t), eH(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
			},
			forEach(n, r) {
				let i = this, l = i.__v_raw, o = ty(l), a = t ? e7 : e ? tx : tb;
				return e || eH(o, "iterate", eV), l.forEach((e, t) => n.call(r, a(e), a(t), i));
			}
		};
		return B(n, e ? {
			add: tt("add"),
			set: tt("set"),
			delete: tt("delete"),
			clear: tt("clear")
		} : {
			add(e) {
				t || tg(e) || tm(e) || (e = ty(e));
				let n = ty(this);
				return te(n).has.call(n, e) || (n.add(e), e$(n, "add", e, e)), this;
			},
			set(e, n) {
				t || tg(n) || tm(n) || (n = ty(n));
				let r = ty(this), { has: i, get: l } = te(r), o = i.call(r, e);
				o || (e = ty(e), o = i.call(r, e));
				let a = l.call(r, e);
				return r.set(e, n), o ? es(n, a) && e$(r, "set", e, n, a) : e$(r, "add", e, n), this;
			},
			delete(e) {
				let t = ty(this), { has: n, get: r } = te(t), i = n.call(t, e);
				i || (e = ty(e), i = n.call(t, e));
				let l = r ? r.call(t, e) : void 0, o = t.delete(e);
				return i && e$(t, "delete", e, void 0, l), o;
			},
			clear() {
				let e = ty(this), t = 0 !== e.size, n = e.clear();
				return t && e$(e, "clear", void 0, void 0, void 0), n;
			}
		}), [
			"keys",
			"values",
			"entries",
			Symbol.iterator
		].forEach((r) => {
			n[r] = function(...n) {
				let i = this.__v_raw, l = ty(i), o = W(l), a = "entries" === r || r === Symbol.iterator && o, u = i[r](...n), s = t ? e7 : e ? tx : tb;
				return e || eH(l, "iterate", "keys" === r && o ? eB : eV), {
					next() {
						let { value: e, done: t } = u.next();
						return t ? {
							value: e,
							done: t
						} : {
							value: a ? [s(e[0]), s(e[1])] : s(e),
							done: t
						};
					},
					[Symbol.iterator]() {
						return this;
					}
				};
			};
		}), n;
	}(e, t);
	return (t, r, i) => "__v_isReactive" === r ? !e : "__v_isReadonly" === r ? e : "__v_raw" === r ? t : Reflect.get($(n, r) && r in t ? n : t, r, i);
}
var tr = { get: tn(!1, !1) }, ti = { get: tn(!1, !0) }, tl = { get: tn(!0, !1) }, to = /* @__PURE__ */ new WeakMap(), ta = /* @__PURE__ */ new WeakMap(), tu = /* @__PURE__ */ new WeakMap(), ts = /* @__PURE__ */ new WeakMap();
function tc(e) {
	return tm(e) ? e : tp(e, !1, e6, tr, to);
}
function tf(e) {
	return tp(e, !1, e8, ti, ta);
}
function td(e) {
	return tp(e, !0, e9, tl, tu);
}
function tp(e, t, n, r, i) {
	var l;
	if (!Z(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
	let o = (l = e).__v_skip || !Object.isExtensible(l) ? 0 : function(e) {
		switch (e) {
			case "Object":
			case "Array": return 1;
			case "Map":
			case "Set":
			case "WeakMap":
			case "WeakSet": return 2;
			default: return 0;
		}
	}(Y(l).slice(8, -1));
	if (0 === o) return e;
	let a = i.get(e);
	if (a) return a;
	let u = new Proxy(e, 2 === o ? r : n);
	return i.set(e, u), u;
}
function th(e) {
	return tm(e) ? th(e.__v_raw) : !!(e && e.__v_isReactive);
}
function tm(e) {
	return !!(e && e.__v_isReadonly);
}
function tg(e) {
	return !!(e && e.__v_isShallow);
}
function tv(e) {
	return !!e && !!e.__v_raw;
}
function ty(e) {
	let t = e && e.__v_raw;
	return t ? ty(t) : e;
}
var tb = (e) => Z(e) ? tc(e) : e, tx = (e) => Z(e) ? td(e) : e;
function tk(e) {
	return !!e && !0 === e.__v_isRef;
}
function tw(e) {
	return tC(e, !1);
}
function tS(e) {
	return tC(e, !0);
}
function tC(e, t) {
	return tk(e) ? e : new t_(e, t);
}
var t_ = class {
	constructor(e, t) {
		this.dep = new eN(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : ty(e), this._value = t ? e : tb(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || tg(e) || tm(e);
		es(e = n ? e : ty(e), t) && (this._rawValue = e, this._value = n ? e : tb(e), this.dep.trigger());
	}
};
function tA(e) {
	return tk(e) ? e.value : e;
}
var tT = {
	get: (e, t, n) => "__v_raw" === t ? e : tA(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return tk(i) && !tk(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function tE(e) {
	return th(e) ? e : new Proxy(e, tT);
}
var tL = class {
	constructor(e) {
		this.__v_isRef = !0, this._value = void 0;
		let t = this.dep = new eN(), { get: n, set: r } = e(t.track.bind(t), t.trigger.bind(t));
		this._get = n, this._set = r;
	}
	get value() {
		return this._value = this._get();
	}
	set value(e) {
		this._set(e);
	}
};
function tM(e) {
	return new tL(e);
}
var tO = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new eN(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = eR - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(8 & this.flags) && T !== this) return eC(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return eL(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
}, tD = {}, tP = /* @__PURE__ */ new WeakMap(), tF = void 0;
function tI(e, t = Infinity, n) {
	if (t <= 0 || !Z(e) || e.__v_skip || ((n = n || /* @__PURE__ */ new Map()).get(e) || 0) >= t) return e;
	if (n.set(e, t), t--, tk(e)) tI(e.value, t, n);
	else if (q(e)) for (let r = 0; r < e.length; r++) tI(e[r], t, n);
	else if ("[object Set]" === Y(e) || W(e)) e.forEach((e) => {
		tI(e, t, n);
	});
	else if ("[object Object]" === Y(e)) {
		for (let r in e) tI(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && tI(e[r], t, n);
	}
	return e;
}
function tR(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		tN(e, t, n);
	}
}
function tz(e, t, n, r) {
	if (K(e)) {
		let i = tR(e, t, n, r);
		return i && X(i) && i.catch((e) => {
			tN(e, t, n);
		}), i;
	}
	if (q(e)) {
		let i = [];
		for (let l = 0; l < e.length; l++) i.push(tz(e[l], t, n, r));
		return i;
	}
}
function tN(e, t, n, r = !0) {
	t && t.vnode;
	let { errorHandler: l, throwUnhandledErrorInProduction: o } = t && t.appContext.config || I;
	if (t) {
		let r = t.parent, i = t.proxy, o = `https://vuejs.org/error-reference/#runtime-${n}`;
		for (; r;) {
			let t = r.ec;
			if (t) {
				for (let n = 0; n < t.length; n++) if (!1 === t[n](e, i, o)) return;
			}
			r = r.parent;
		}
		if (l) {
			eP(), tR(l, null, 10, [
				e,
				i,
				o
			]), eF();
			return;
		}
	}
	(function(e, t, n, r = !0, i = !1) {
		if (i) throw e;
		console.error(e);
	})(e, 0, 0, r, o);
}
var tj = [], tV = -1, tB = [], tU = null, tH = 0, t$ = Promise.resolve(), tq = null;
function tW(e) {
	let t = tq || t$;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function tK(e) {
	if (!(1 & e.flags)) {
		let t = tX(e), n = tj[tj.length - 1];
		!n || !(2 & e.flags) && t >= tX(n) ? tj.push(e) : tj.splice(function(e) {
			let t = tV + 1, n = tj.length;
			for (; t < n;) {
				let r = t + n >>> 1, i = tj[r], l = tX(i);
				l < e || l === e && 2 & i.flags ? t = r + 1 : n = r;
			}
			return t;
		}(t), 0, e), e.flags |= 1, tG();
	}
}
function tG() {
	tq || (tq = t$.then(function e(t) {
		try {
			for (tV = 0; tV < tj.length; tV++) {
				let e = tj[tV];
				e && !(8 & e.flags) && (4 & e.flags && (e.flags &= -2), tR(e, e.i, e.i ? 15 : 14), 4 & e.flags || (e.flags &= -2));
			}
		} finally {
			for (; tV < tj.length; tV++) {
				let e = tj[tV];
				e && (e.flags &= -2);
			}
			tV = -1, tj.length = 0, tZ(t), tq = null, (tj.length || tB.length) && e(t);
		}
	}));
}
function tQ(e, t, n = tV + 1) {
	for (; n < tj.length; n++) {
		let t = tj[n];
		if (t && 2 & t.flags) {
			if (e && t.id !== e.uid) continue;
			tj.splice(n, 1), n--, 4 & t.flags && (t.flags &= -2), t(), 4 & t.flags || (t.flags &= -2);
		}
	}
}
function tZ(e) {
	if (tB.length) {
		let e = [...new Set(tB)].sort((e, t) => tX(e) - tX(t));
		if (tB.length = 0, tU) return void tU.push(...e);
		for (tH = 0, tU = e; tH < tU.length; tH++) {
			let e = tU[tH];
			4 & e.flags && (e.flags &= -2), 8 & e.flags || e(), e.flags &= -2;
		}
		tU = null, tH = 0;
	}
}
var tX = (e) => null == e.id ? 2 & e.flags ? -1 : Infinity : e.id, tJ = null, tY = null;
function t1(e) {
	let t = tJ;
	return tJ = e, tY = e && e.type.__scopeId || null, t;
}
function t0(e, t, n, r) {
	let i = e.dirs, l = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let a = i[o];
		l && (a.oldValue = l[o].value);
		let u = a.dir[r];
		u && (eP(), tz(u, n, 8, [
			e.el,
			a,
			e,
			t
		]), eF());
	}
}
var t2 = Symbol("_vte"), t5 = (e) => e && (e.disabled || "" === e.disabled), t4 = (e) => e && (e.defer || "" === e.defer), t3 = (e) => "undefined" != typeof SVGElement && e instanceof SVGElement, t6 = (e) => "function" == typeof MathMLElement && e instanceof MathMLElement, t9 = (e, t) => {
	let n = e && e.to;
	return G(n) ? t ? t(n) : null : n;
}, t8 = {
	name: "Teleport",
	__isTeleport: !0,
	process(e, t, n, r, i, l, o, a, u, s) {
		let { mc: c, pc: f, pbc: d, o: { insert: p, querySelector: h, createText: m, createComment: g } } = s, y = t5(t.props), { shapeFlag: b, children: x, dynamicChildren: k } = t;
		if (null == e) {
			let e = t.el = m(""), s = t.anchor = m("");
			p(e, n, r), p(s, n, r);
			let f = (e, t) => {
				16 & b && c(x, e, t, i, l, o, a, u);
			}, d = () => {
				let e = t.target = t9(t.props, h), n = nn(e, t, m, p);
				e && ("svg" !== o && t3(e) ? o = "svg" : "mathml" !== o && t6(e) && (o = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(e), y || (f(e, n), nt(t, !1)));
			};
			y && (f(n, s), nt(t, !0)), t4(t.props) ? (t.el.__isMounted = !1, ra(() => {
				d(), delete t.el.__isMounted;
			}, l)) : d();
		} else {
			if (t4(t.props) && !1 === e.el.__isMounted) return void ra(() => {
				t8.process(e, t, n, r, i, l, o, a, u, s);
			}, l);
			t.el = e.el, t.targetStart = e.targetStart;
			let c = t.anchor = e.anchor, p = t.target = e.target, m = t.targetAnchor = e.targetAnchor, g = t5(e.props), b = g ? n : p, x = g ? c : m;
			if ("svg" === o || t3(p) ? o = "svg" : ("mathml" === o || t6(p)) && (o = "mathml"), k ? (d(e.dynamicChildren, k, b, i, l, o, a), rc(e, t, !0)) : u || f(e, t, b, x, i, l, o, a, !1), y) g ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : t7(t, n, c, s, 1);
			else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
				let e = t.target = t9(t.props, h);
				e && t7(t, e, null, s, 0);
			} else g && t7(t, p, m, s, 1);
			nt(t, y);
		}
	},
	remove(e, t, n, { um: r, o: { remove: i } }, l) {
		let { shapeFlag: o, children: a, anchor: u, targetStart: s, targetAnchor: c, target: f, props: d } = e;
		if (f && (i(s), i(c)), l && i(u), 16 & o) {
			let e = l || !t5(d);
			for (let i = 0; i < a.length; i++) {
				let l = a[i];
				r(l, t, n, e, !!l.dynamicChildren);
			}
		}
	},
	move: t7,
	hydrate: function(e, t, n, r, i, l, { o: { nextSibling: o, parentNode: a, querySelector: u, insert: s, createText: c } }, f) {
		function d(e, t, u, s) {
			t.anchor = f(o(e), t, a(e), n, r, i, l), t.targetStart = u, t.targetAnchor = s;
		}
		let p = t.target = t9(t.props, u), h = t5(t.props);
		if (p) {
			let a = p._lpa || p.firstChild;
			if (16 & t.shapeFlag) if (h) d(e, t, a, a && o(a));
			else {
				t.anchor = o(e);
				let u = a;
				for (; u;) {
					if (u && 8 === u.nodeType) {
						if ("teleport start anchor" === u.data) t.targetStart = u;
						else if ("teleport anchor" === u.data) {
							t.targetAnchor = u, p._lpa = t.targetAnchor && o(t.targetAnchor);
							break;
						}
					}
					u = o(u);
				}
				t.targetAnchor || nn(p, t, c, s), f(a && o(a), t, p, n, r, i, l);
			}
			nt(t, h);
		} else h && 16 & t.shapeFlag && d(e, t, e, o(e));
		return t.anchor && o(t.anchor);
	}
};
function t7(e, t, n, { o: { insert: r }, m: i }, l = 2) {
	0 === l && r(e.targetAnchor, t, n);
	let { el: o, anchor: a, shapeFlag: u, children: s, props: c } = e, f = 2 === l;
	if (f && r(o, t, n), (!f || t5(c)) && 16 & u) for (let e = 0; e < s.length; e++) i(s[e], t, n, 2);
	f && r(a, t, n);
}
var ne = t8;
function nt(e, t) {
	let n = e.ctx;
	if (n && n.ut) {
		let r, i;
		for (t ? (r = e.el, i = e.anchor) : (r = e.targetStart, i = e.targetAnchor); r && r !== i;) 1 === r.nodeType && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
		n.ut();
	}
}
function nn(e, t, n, r) {
	let i = t.targetStart = n(""), l = t.targetAnchor = n("");
	return i[t2] = l, e && (r(i, e), r(l, e)), l;
}
var nr = Symbol("_leaveCb"), ni = Symbol("_enterCb"), nl = [Function, Array], no = {
	mode: String,
	appear: Boolean,
	persisted: Boolean,
	onBeforeEnter: nl,
	onEnter: nl,
	onAfterEnter: nl,
	onEnterCancelled: nl,
	onBeforeLeave: nl,
	onLeave: nl,
	onAfterLeave: nl,
	onLeaveCancelled: nl,
	onBeforeAppear: nl,
	onAppear: nl,
	onAfterAppear: nl,
	onAppearCancelled: nl
}, na = (e) => {
	let t = e.subTree;
	return t.component ? na(t.component) : t;
};
function nu(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== rA) {
			t = n;
			break;
		}
	}
	return t;
}
var ns = {
	name: "BaseTransition",
	props: no,
	setup(e, { slots: t }) {
		let n = r$(), r = function() {
			let e = {
				isMounted: !1,
				isLeaving: !1,
				isUnmounting: !1,
				leavingVNodes: /* @__PURE__ */ new Map()
			};
			return nE(() => {
				e.isMounted = !0;
			}), nO(() => {
				e.isUnmounting = !0;
			}), e;
		}();
		return () => {
			let i = t.default && function e(t, n = !1, r) {
				let i = [], l = 0;
				for (let o = 0; o < t.length; o++) {
					let a = t[o], u = null == r ? a.key : String(r) + String(null != a.key ? a.key : o);
					a.type === rC ? (128 & a.patchFlag && l++, i = i.concat(e(a.children, n, u))) : (n || a.type !== rA) && i.push(null != u ? rR(a, { key: u }) : a);
				}
				if (l > 1) for (let e = 0; e < i.length; e++) i[e].patchFlag = -2;
				return i;
			}(t.default(), !0);
			if (!i || !i.length) return;
			let l = nu(i), o = ty(e), { mode: a } = o;
			if (r.isLeaving) return nd(l);
			let u = np(l);
			if (!u) return nd(l);
			let s = nf(u, o, r, n, (e) => s = e);
			u.type !== rA && nh(u, s);
			let c = n.subTree && np(n.subTree);
			if (c && c.type !== rA && !rD(c, u) && na(n).type !== rA) {
				let e = nf(c, o, r, n);
				if (nh(c, e), "out-in" === a && u.type !== rA) return r.isLeaving = !0, e.afterLeave = () => {
					r.isLeaving = !1, 8 & n.job.flags || n.update(), delete e.afterLeave, c = void 0;
				}, nd(l);
				"in-out" === a && u.type !== rA ? e.delayLeave = (e, t, n) => {
					nc(r, c)[String(c.key)] = c, e[nr] = () => {
						t(), e[nr] = void 0, delete s.delayedLeave, c = void 0;
					}, s.delayedLeave = () => {
						n(), delete s.delayedLeave, c = void 0;
					};
				} : c = void 0;
			} else c && (c = void 0);
			return l;
		};
	}
};
function nc(e, t) {
	let { leavingVNodes: n } = e, r = n.get(t.type);
	return r || (r = Object.create(null), n.set(t.type, r)), r;
}
function nf(e, t, n, r, i) {
	let { appear: l, mode: o, persisted: a = !1, onBeforeEnter: u, onEnter: s, onAfterEnter: c, onEnterCancelled: f, onBeforeLeave: d, onLeave: p, onAfterLeave: h, onLeaveCancelled: m, onBeforeAppear: g, onAppear: y, onAfterAppear: b, onAppearCancelled: x } = t, k = String(e.key), w = nc(n, e), S = (e, t) => {
		e && tz(e, r, 9, t);
	}, C = (e, t) => {
		let n = t[1];
		S(e, t), q(e) ? e.every((e) => e.length <= 1) && n() : e.length <= 1 && n();
	}, _ = {
		mode: o,
		persisted: a,
		beforeEnter(t) {
			let r = u;
			if (!n.isMounted) if (!l) return;
			else r = g || u;
			t[nr] && t[nr](!0);
			let i = w[k];
			i && rD(e, i) && i.el[nr] && i.el[nr](), S(r, [t]);
		},
		enter(e) {
			let t = s, r = c, i = f;
			if (!n.isMounted) if (!l) return;
			else t = y || s, r = b || c, i = x || f;
			let o = !1, a = e[ni] = (t) => {
				o || (o = !0, t ? S(i, [e]) : S(r, [e]), _.delayedLeave && _.delayedLeave(), e[ni] = void 0);
			};
			t ? C(t, [e, a]) : a();
		},
		leave(t, r) {
			let i = String(e.key);
			if (t[ni] && t[ni](!0), n.isUnmounting) return r();
			S(d, [t]);
			let l = !1, o = t[nr] = (n) => {
				l || (l = !0, r(), n ? S(m, [t]) : S(h, [t]), t[nr] = void 0, w[i] === e && delete w[i]);
			};
			w[i] = e, p ? C(p, [t, o]) : o();
		},
		clone(e) {
			let l = nf(e, t, n, r, i);
			return i && i(l), l;
		}
	};
	return _;
}
function nd(e) {
	if (nk(e)) return (e = rR(e)).children = null, e;
}
function np(e) {
	if (!nk(e)) return e.type.__isTeleport && e.children ? nu(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (16 & t) return n[0];
		if (32 & t && K(n.default)) return n.default();
	}
}
function nh(e, t) {
	6 & e.shapeFlag && e.component ? (e.transition = t, nh(e.component.subTree, t)) : 128 & e.shapeFlag ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function nm(e, t) {
	return K(e) ? B({ name: e.name }, t, { setup: e }) : e;
}
function ng(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
var nv = /* @__PURE__ */ new WeakMap();
function ny(e, t, n, r, i = !1) {
	if (q(e)) return void e.forEach((e, l) => ny(e, t && (q(t) ? t[l] : t), n, r, i));
	if (nx(r) && !i) {
		512 & r.shapeFlag && r.type.__asyncResolved && r.component.subTree.component && ny(e, t, n, r.component.subTree);
		return;
	}
	let l = 4 & r.shapeFlag ? rJ(r.component) : r.el, o = i ? null : l, { i: a, r: u } = e, s = t && t.r, c = a.refs === I ? a.refs = {} : a.refs, f = a.setupState, d = ty(f), p = f === I ? N : (e) => $(d, e);
	if (null != s && s !== u && ((nb(t), G(s)) ? (c[s] = null, p(s) && (f[s] = null)) : tk(s) && (s.value = null, t.k && (c[t.k] = null))), K(u)) tR(u, a, 12, [o, c]);
	else {
		let t = G(u), r = tk(u);
		if (t || r) {
			let a = () => {
				if (e.f) {
					let n = t ? p(u) ? f[u] : c[u] : u.value;
					if (i) q(n) && U(n, l);
					else if (q(n)) n.includes(l) || n.push(l);
					else if (t) c[u] = [l], p(u) && (f[u] = c[u]);
					else {
						let t = [l];
						u.value = t, e.k && (c[e.k] = t);
					}
				} else t ? (c[u] = o, p(u) && (f[u] = o)) : r && (u.value = o, e.k && (c[e.k] = o));
			};
			if (o) {
				let t = () => {
					a(), nv.delete(e);
				};
				t.id = -1, nv.set(e, t), ra(t, n);
			} else nb(e), a();
		}
	}
}
function nb(e) {
	let t = nv.get(e);
	t && (t.flags |= 8, nv.delete(e));
}
ep().requestIdleCallback, ep().cancelIdleCallback;
var nx = (e) => !!e.type.__asyncLoader, nk = (e) => e.type.__isKeepAlive;
function nw(e, t) {
	nC(e, "a", t);
}
function nS(e, t) {
	nC(e, "da", t);
}
function nC(e, t, n = rH) {
	let r = e.__wdc || (e.__wdc = () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	});
	if (n_(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) nk(e.parent.vnode) && function(e, t, n, r) {
			let i = n_(t, e, r, !0);
			nD(() => {
				U(r[t], i);
			}, n);
		}(r, t, n, e), e = e.parent;
	}
}
function n_(e, t, n = rH, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), l = t.__weh || (t.__weh = (...r) => {
			eP();
			let i = rq(n), l = tz(t, n, e, r);
			return i(), eF(), l;
		});
		return r ? i.unshift(l) : i.push(l), l;
	}
}
var nA = (e) => (t, n = rH) => {
	rG && "sp" !== e || n_(e, (...e) => t(...e), n);
}, nT = nA("bm"), nE = nA("m"), nL = nA("bu"), nM = nA("u"), nO = nA("bum"), nD = nA("um"), nP = nA("sp"), nF = nA("rtg"), nI = nA("rtc");
function nR(e, t = rH) {
	n_("ec", e, t);
}
var nz = Symbol.for("v-ndc"), nN = (e) => e ? rK(e) ? rJ(e) : nN(e.parent) : null, nj = B(Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => nN(e.parent),
	$root: (e) => nN(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => nq(e),
	$forceUpdate: (e) => e.f || (e.f = () => {
		tK(e.update);
	}),
	$nextTick: (e) => e.n || (e.n = tW.bind(e.proxy)),
	$watch: (e) => rm.bind(e)
}), nV = (e, t) => e !== I && !e.__isScriptSetup && $(e, t), nB = {
	get({ _: e }, t) {
		let n, r, i;
		if ("__v_skip" === t) return !0;
		let { ctx: l, setupState: o, data: a, props: u, accessCache: s, type: c, appContext: f } = e;
		if ("$" !== t[0]) {
			let r = s[t];
			if (void 0 !== r) switch (r) {
				case 1: return o[t];
				case 2: return a[t];
				case 4: return l[t];
				case 3: return u[t];
			}
			else {
				if (nV(o, t)) return s[t] = 1, o[t];
				if (a !== I && $(a, t)) return s[t] = 2, a[t];
				if ((n = e.propsOptions[0]) && $(n, t)) return s[t] = 3, u[t];
				if (l !== I && $(l, t)) return s[t] = 4, l[t];
				nH && (s[t] = 0);
			}
		}
		let d = nj[t];
		return d ? ("$attrs" === t && eH(e.attrs, "get", ""), d(e)) : (r = c.__cssModules) && (r = r[t]) ? r : l !== I && $(l, t) ? (s[t] = 4, l[t]) : $(i = f.config.globalProperties, t) ? i[t] : void 0;
	},
	set({ _: e }, t, n) {
		let { data: r, setupState: i, ctx: l } = e;
		return nV(i, t) ? (i[t] = n, !0) : r !== I && $(r, t) ? (r[t] = n, !0) : !$(e.props, t) && !("$" === t[0] && t.slice(1) in e) && (l[t] = n, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, propsOptions: l, type: o } }, a) {
		let u, s;
		return !!(n[a] || e !== I && "$" !== a[0] && $(e, a) || nV(t, a) || (u = l[0]) && $(u, a) || $(r, a) || $(nj, a) || $(i.config.globalProperties, a) || (s = o.__cssModules) && s[a]);
	},
	defineProperty(e, t, n) {
		return null != n.get ? e._.accessCache[t] = 0 : $(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
	}
};
function nU(e) {
	return q(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var nH = !0;
function n$(e, t, n) {
	tz(q(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function nq(e) {
	let t, n = e.type, { mixins: r, extends: i } = n, { mixins: l, optionsCache: o, config: { optionMergeStrategies: a } } = e.appContext, u = o.get(n);
	return u ? t = u : l.length || r || i ? (t = {}, l.length && l.forEach((e) => nW(t, e, a, !0)), nW(t, n, a)) : t = n, Z(n) && o.set(n, t), t;
}
function nW(e, t, n, r = !1) {
	let { mixins: i, extends: l } = t;
	for (let o in l && nW(e, l, n, !0), i && i.forEach((t) => nW(e, t, n, !0)), t) if (r && "expose" === o);
	else {
		let r = nK[o] || n && n[o];
		e[o] = r ? r(e[o], t[o]) : t[o];
	}
	return e;
}
var nK = {
	data: nG,
	props: nJ,
	emits: nJ,
	methods: nX,
	computed: nX,
	beforeCreate: nZ,
	created: nZ,
	beforeMount: nZ,
	mounted: nZ,
	beforeUpdate: nZ,
	updated: nZ,
	beforeDestroy: nZ,
	beforeUnmount: nZ,
	destroyed: nZ,
	unmounted: nZ,
	activated: nZ,
	deactivated: nZ,
	errorCaptured: nZ,
	serverPrefetch: nZ,
	components: nX,
	directives: nX,
	watch: function(e, t) {
		if (!e) return t;
		if (!t) return e;
		let n = B(Object.create(null), e);
		for (let r in t) n[r] = nZ(e[r], t[r]);
		return n;
	},
	provide: nG,
	inject: function(e, t) {
		return nX(nQ(e), nQ(t));
	}
};
function nG(e, t) {
	return t ? e ? function() {
		return B(K(e) ? e.call(this, this) : e, K(t) ? t.call(this, this) : t);
	} : t : e;
}
function nQ(e) {
	if (q(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function nZ(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function nX(e, t) {
	return e ? B(Object.create(null), e, t) : t;
}
function nJ(e, t) {
	return e ? q(e) && q(t) ? [...new Set([...e, ...t])] : B(Object.create(null), nU(e), nU(null != t ? t : {})) : t;
}
function nY() {
	return {
		app: null,
		config: {
			isNativeTag: N,
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
var n1 = 0, n0 = null;
function n2(e, t) {
	if (rH) {
		let n = rH.provides, r = rH.parent && rH.parent.provides;
		r === n && (n = rH.provides = Object.create(r)), n[e] = t;
	}
}
function n5(e, t, n = !1) {
	let r = r$();
	if (r || n0) {
		let i = n0 ? n0._context.provides : r ? null == r.parent || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && K(t) ? t.call(r && r.proxy) : t;
	}
}
var n4 = {}, n3 = () => Object.create(n4), n6 = (e) => Object.getPrototypeOf(e) === n4;
function n9(e, t, n, r) {
	let i, [l, o] = e.propsOptions, a = !1;
	if (t) for (let u in t) {
		let s;
		if (et(u)) continue;
		let c = t[u];
		l && $(l, s = ei(u)) ? o && o.includes(s) ? (i || (i = {}))[s] = c : n[s] = c : rb(e.emitsOptions, u) || u in r && c === r[u] || (r[u] = c, a = !0);
	}
	if (o) {
		let t = ty(n), r = i || I;
		for (let i = 0; i < o.length; i++) {
			let a = o[i];
			n[a] = n8(l, t, a, r[a], e, !$(r, a));
		}
	}
	return a;
}
function n8(e, t, n, r, i, l) {
	let o = e[n];
	if (null != o) {
		let e = $(o, "default");
		if (e && void 0 === r) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && K(e)) {
				let { propsDefaults: l } = i;
				if (n in l) r = l[n];
				else {
					let o = rq(i);
					r = l[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (l && !e ? r = !1 : o[1] && ("" === r || r === eo(n)) && (r = !0));
	}
	return r;
}
var n7 = /* @__PURE__ */ new WeakMap();
function re(e) {
	return !("$" === e[0] || et(e));
}
var rt = (e) => "_" === e || "_ctx" === e || "$stable" === e, rn = (e) => q(e) ? e.map(rz) : [rz(e)], rr = (e, t, n) => {
	if (t._n) return t;
	let r = function(e, t = tJ, n) {
		if (!t || e._n) return e;
		let r = (...n) => {
			let i;
			r._d && rM(-1);
			let l = t1(t);
			try {
				i = e(...n);
			} finally {
				t1(l), r._d && rM(1);
			}
			return i;
		};
		return r._n = !0, r._c = !0, r._d = !0, r;
	}((...e) => rn(t(...e)), n);
	return r._c = !1, r;
}, ri = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (rt(n)) continue;
		let i = e[n];
		if (K(i)) t[n] = rr(n, i, r);
		else if (null != i) {
			let e = rn(i);
			t[n] = () => e;
		}
	}
}, rl = (e, t) => {
	let n = rn(t);
	e.slots.default = () => n;
}, ro = (e, t, n) => {
	for (let r in t) (n || !rt(r)) && (e[r] = t[r]);
}, ra = function(e, t) {
	if (t && t.pendingBranch) q(e) ? t.effects.push(...e) : t.effects.push(e);
	else q(e) ? tB.push(...e) : tU && -1 === e.id ? tU.splice(tH + 1, 0, e) : 1 & e.flags || (tB.push(e), e.flags |= 1), tG();
};
function ru({ type: e, props: t }, n) {
	return "svg" === n && "foreignObject" === e || "mathml" === n && "annotation-xml" === e && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function rs({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function rc(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (q(r) && q(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], l = i[e];
		1 & l.shapeFlag && !l.dynamicChildren && ((l.patchFlag <= 0 || 32 === l.patchFlag) && ((l = i[e] = rN(i[e])).el = t.el), n || -2 === l.patchFlag || rc(t, l)), l.type === r_ && -1 !== l.patchFlag && (l.el = t.el), l.type !== rA || l.el || (l.el = t.el);
	}
}
function rf(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
var rd = Symbol.for("v-scx");
function rp(e, t, n) {
	return rh(e, t, n);
}
function rh(e, t, n = I) {
	let r, { immediate: i, deep: l, flush: o, once: a } = n, u = B({}, n), s = t && i || !t && "post" !== o;
	if (rG) {
		if ("sync" === o) {
			let e = n5(rd);
			r = e.__watcherHandles || (e.__watcherHandles = []);
		} else if (!s) {
			let e = () => {};
			return e.stop = z, e.resume = z, e.pause = z, e;
		}
	}
	let c = rH;
	u.call = (e, t, n) => tz(e, c, t, n);
	let f = !1;
	"post" === o ? u.scheduler = (e) => {
		ra(e, c && c.suspense);
	} : "sync" !== o && (f = !0, u.scheduler = (e, t) => {
		t ? e() : tK(e);
	}), u.augmentJob = (e) => {
		t && (e.flags |= 4), f && (e.flags |= 2, c && (e.id = c.uid, e.i = c));
	};
	let d = function(e, t, n = I) {
		let r, i, l, o, { immediate: a, deep: u, once: s, scheduler: c, augmentJob: f, call: d } = n, p = (e) => u ? e : tg(e) || !1 === u || 0 === u ? tI(e, 1) : tI(e), h = !1, m = !1;
		if (tk(e) ? (i = () => e.value, h = tg(e)) : th(e) ? (i = () => p(e), h = !0) : q(e) ? (m = !0, h = e.some((e) => th(e) || tg(e)), i = () => e.map((e) => tk(e) ? e.value : th(e) ? p(e) : K(e) ? d ? d(e, 2) : e() : void 0)) : i = K(e) ? t ? d ? () => d(e, 2) : e : () => {
			if (l) {
				eP();
				try {
					l();
				} finally {
					eF();
				}
			}
			let t = tF;
			tF = r;
			try {
				return d ? d(e, 3, [o]) : e(o);
			} finally {
				tF = t;
			}
		} : z, t && u) {
			let e = i, t = !0 === u ? Infinity : u;
			i = () => tI(e(), t);
		}
		let g = A, y = () => {
			r.stop(), g && g.active && U(g.effects, r);
		};
		if (s && t) {
			let e = t;
			t = (...t) => {
				e(...t), y();
			};
		}
		let b = m ? Array(e.length).fill(tD) : tD, x = (e) => {
			if (1 & r.flags && (r.dirty || e)) if (t) {
				let e = r.run();
				if (u || h || (m ? e.some((e, t) => es(e, b[t])) : es(e, b))) {
					l && l();
					let n = tF;
					tF = r;
					try {
						let n = [
							e,
							b === tD ? void 0 : m && b[0] === tD ? [] : b,
							o
						];
						b = e, d ? d(t, 3, n) : t(...n);
					} finally {
						tF = n;
					}
				}
			} else r.run();
		};
		return f && f(x), (r = new ew(i)).scheduler = c ? () => c(x, !1) : x, o = (e) => (function(e, t = !1, n = tF) {
			if (n) {
				let t = tP.get(n);
				t || tP.set(n, t = []), t.push(e);
			}
		})(e, !1, r), l = r.onStop = () => {
			let e = tP.get(r);
			if (e) {
				if (d) d(e, 4);
				else for (let t of e) t();
				tP.delete(r);
			}
		}, t ? a ? x(!0) : b = r.run() : c ? c(x.bind(null, !0), !0) : r.run(), y.pause = r.pause.bind(r), y.resume = r.resume.bind(r), y.stop = y, y;
	}(e, t, u);
	return rG && (r ? r.push(d) : s && d()), d;
}
function rm(e, t, n) {
	let r, i = this.proxy, l = G(e) ? e.includes(".") ? rg(i, e) : () => i[e] : e.bind(i, i);
	K(t) ? r = t : (r = t.handler, n = t);
	let o = rq(this), a = rh(l, r.bind(i), n);
	return o(), a;
}
function rg(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
function rv(e, t, ...n) {
	let r, i;
	if (e.isUnmounted) return;
	let l = e.vnode.props || I, o = n, a = t.startsWith("update:"), u = a && ("modelValue" === (i = t.slice(7)) || "model-value" === i ? l.modelModifiers : l[`${i}Modifiers`] || l[`${ei(i)}Modifiers`] || l[`${eo(i)}Modifiers`]);
	u && (u.trim && (o = n.map((e) => G(e) ? e.trim() : e)), u.number && (o = n.map(ed)));
	let s = l[r = eu(t)] || l[r = eu(ei(t))];
	!s && a && (s = l[r = eu(eo(t))]), s && tz(s, e, 6, o);
	let c = l[r + "Once"];
	if (c) {
		if (e.emitted) {
			if (e.emitted[r]) return;
		} else e.emitted = {};
		e.emitted[r] = !0, tz(c, e, 6, o);
	}
}
var ry = /* @__PURE__ */ new WeakMap();
function rb(e, t) {
	return !!e && !!j(t) && ($(e, (t = t.slice(2).replace(/Once$/, ""))[0].toLowerCase() + t.slice(1)) || $(e, eo(t)) || $(e, t));
}
function rx(e) {
	let t, n, { type: r, vnode: i, proxy: l, withProxy: o, propsOptions: [a], slots: u, attrs: s, emit: c, render: f, renderCache: d, props: p, data: h, setupState: m, ctx: g, inheritAttrs: y } = e, b = t1(e);
	try {
		if (4 & i.shapeFlag) {
			let e = o || l;
			t = rz(f.call(e, e, d, p, m, h, g)), n = s;
		} else t = rz(r.length > 1 ? r(p, {
			attrs: s,
			slots: u,
			emit: c
		}) : r(p, null)), n = r.props ? s : rk(s);
	} catch (n) {
		rE.length = 0, tN(n, e, 1), t = rI(rA);
	}
	let x = t;
	if (n && !1 !== y) {
		let e = Object.keys(n), { shapeFlag: t } = x;
		e.length && 7 & t && (a && e.some(V) && (n = rw(n, a)), x = rR(x, n, !1, !0));
	}
	return i.dirs && ((x = rR(x, null, !1, !0)).dirs = x.dirs ? x.dirs.concat(i.dirs) : i.dirs), i.transition && nh(x, i.transition), t = x, t1(b), t;
}
var rk = (e) => {
	let t;
	for (let n in e) ("class" === n || "style" === n || j(n)) && ((t || (t = {}))[n] = e[n]);
	return t;
}, rw = (e, t) => {
	let n = {};
	for (let r in e) V(r) && r.slice(9) in t || (n[r] = e[r]);
	return n;
};
function rS(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let l = r[i];
		if (t[l] !== e[l] && !rb(n, l)) return !0;
	}
	return !1;
}
var rC = Symbol.for("v-fgt"), r_ = Symbol.for("v-txt"), rA = Symbol.for("v-cmt"), rT = Symbol.for("v-stc"), rE = [], rL = 1;
function rM(e, t = !1) {
	rL += e;
}
function rO(e) {
	return !!e && !0 === e.__v_isVNode;
}
function rD(e, t) {
	return e.type === t.type && e.key === t.key;
}
var rP = ({ key: e }) => null != e ? e : null, rF = ({ ref: e, ref_key: t, ref_for: n }) => ("number" == typeof e && (e = "" + e), null != e ? G(e) || tk(e) || K(e) ? {
	i: tJ,
	r: e,
	k: t,
	f: !!n
} : e : null), rI = function(e, t = null, n = null, r = 0, i = null, l = !1) {
	var o, a;
	if (e && e !== nz || (e = rA), rO(e)) {
		let r = rR(e, t, !0);
		return n && rj(r, n), r.patchFlag = -2, r;
	}
	if (K(o = e) && "__vccOpts" in o && (e = e.__vccOpts), t) {
		let { class: e, style: n } = t = (a = t) ? tv(a) || n6(a) ? B({}, a) : a : null;
		e && !G(e) && (t.class = ey(e)), Z(n) && (tv(n) && !q(n) && (n = B({}, n)), t.style = eh(n));
	}
	let u = G(e) ? 1 : e.__isSuspense ? 128 : e.__isTeleport ? 64 : Z(e) ? 4 : 2 * !!K(e);
	return function(e, t = null, n = null, r = 0, i = null, l = +(e !== rC), o = !1, a = !1) {
		let u = {
			__v_isVNode: !0,
			__v_skip: !0,
			type: e,
			props: t,
			key: t && rP(t),
			ref: t && rF(t),
			scopeId: tY,
			slotScopeIds: null,
			children: n,
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
			patchFlag: r,
			dynamicProps: i,
			dynamicChildren: null,
			appContext: null,
			ctx: tJ
		};
		return a ? (rj(u, n), 128 & l && e.normalize(u)) : n && (u.shapeFlag |= G(n) ? 8 : 16), u;
	}(e, t, n, r, i, u, l, !0);
};
function rR(e, t, n = !1, r = !1) {
	let { props: i, ref: l, patchFlag: o, children: a, transition: u } = e, s = t ? function(...e) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			for (let e in r) if ("class" === e) t.class !== r.class && (t.class = ey([t.class, r.class]));
			else if ("style" === e) t.style = eh([t.style, r.style]);
			else if (j(e)) {
				let n = t[e], i = r[e];
				i && n !== i && !(q(n) && n.includes(i)) && (t[e] = n ? [].concat(n, i) : i);
			} else "" !== e && (t[e] = r[e]);
		}
		return t;
	}(i || {}, t) : i, c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: s,
		key: s && rP(s),
		ref: t && t.ref ? n && l ? q(l) ? l.concat(rF(t)) : [l, rF(t)] : rF(t) : l,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: a,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== rC ? -1 === o ? 16 : 16 | o : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: u,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && rR(e.ssContent),
		ssFallback: e.ssFallback && rR(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return u && r && nh(c, u.clone(c)), c;
}
function rz(e) {
	return null == e || "boolean" == typeof e ? rI(rA) : q(e) ? rI(rC, null, e.slice()) : rO(e) ? rN(e) : rI(r_, null, String(e));
}
function rN(e) {
	return null === e.el && -1 !== e.patchFlag || e.memo ? e : rR(e);
}
function rj(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (null == t) t = null;
	else if (q(t)) n = 16;
	else if ("object" == typeof t) if (65 & r) {
		let n = t.default;
		n && (n._c && (n._d = !1), rj(e, n()), n._c && (n._d = !0));
		return;
	} else {
		n = 32;
		let r = t._;
		r || n6(t) ? 3 === r && tJ && (1 === tJ.slots._ ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024)) : t._ctx = tJ;
	}
	else K(t) ? (t = {
		default: t,
		_ctx: tJ
	}, n = 32) : (t = String(t), 64 & r ? (n = 16, t = [function(e = " ", t = 0) {
		return rI(r_, null, e, t);
	}(t)]) : n = 8);
	e.children = t, e.shapeFlag |= n;
}
function rV(e, t, n, r = null) {
	tz(e, t, 7, [n, r]);
}
var rB = nY(), rU = 0, rH = null, r$ = () => rH || tJ;
{
	let e = ep(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	M = t("__VUE_INSTANCE_SETTERS__", (e) => rH = e), O = t("__VUE_SSR_SETTERS__", (e) => rG = e);
}
var rq = (e) => {
	let t = rH;
	return M(e), e.scope.on(), () => {
		e.scope.off(), M(t);
	};
}, rW = () => {
	rH && rH.scope.off(), M(null);
};
function rK(e) {
	return 4 & e.vnode.shapeFlag;
}
var rG = !1;
function rQ(e, t, n) {
	K(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Z(t) && (e.setupState = tE(t)), rZ(e, n);
}
function rZ(e, t, n) {
	let r = e.type;
	if (!e.render) {
		if (!t && D && !r.render) {
			let t = r.template || nq(e).template;
			if (t) {
				let { isCustomElement: n, compilerOptions: i } = e.appContext.config, { delimiters: l, compilerOptions: o } = r;
				r.render = D(t, B(B({
					isCustomElement: n,
					delimiters: l
				}, i), o));
			}
		}
		e.render = r.render || z, P && P(e);
	}
	{
		let t = rq(e);
		eP();
		try {
			(function(e) {
				let t = nq(e), n = e.proxy, r = e.ctx;
				nH = !1, t.beforeCreate && n$(t.beforeCreate, e, "bc");
				let { data: i, computed: l, methods: o, watch: a, provide: u, inject: s, created: c, beforeMount: f, mounted: d, beforeUpdate: p, updated: h, activated: m, deactivated: g, beforeDestroy: y, beforeUnmount: b, destroyed: x, unmounted: k, render: w, renderTracked: S, renderTriggered: C, errorCaptured: _, serverPrefetch: A, expose: T, inheritAttrs: E, components: L, directives: M, filters: O } = t;
				if (s && function(e, t, n = z) {
					for (let n in q(e) && (e = nQ(e)), e) {
						let r, i = e[n];
						tk(r = Z(i) ? "default" in i ? n5(i.from || n, i.default, !0) : n5(i.from || n) : n5(i)) ? Object.defineProperty(t, n, {
							enumerable: !0,
							configurable: !0,
							get: () => r.value,
							set: (e) => r.value = e
						}) : t[n] = r;
					}
				}(s, r, null), o) for (let e in o) {
					let t = o[e];
					K(t) && (r[e] = t.bind(n));
				}
				if (i) {
					let t = i.call(n, n);
					Z(t) && (e.data = tc(t));
				}
				if (nH = !0, l) for (let e in l) {
					let t = l[e], i = rY({
						get: K(t) ? t.bind(n, n) : K(t.get) ? t.get.bind(n, n) : z,
						set: !K(t) && K(t.set) ? t.set.bind(n) : z
					});
					Object.defineProperty(r, e, {
						enumerable: !0,
						configurable: !0,
						get: () => i.value,
						set: (e) => i.value = e
					});
				}
				if (a) for (let e in a) (function e(t, n, r, i) {
					let l = i.includes(".") ? rg(r, i) : () => r[i];
					if (G(t)) {
						let e = n[t];
						K(e) && rp(l, e);
					} else if (K(t)) rp(l, t.bind(r));
					else if (Z(t)) if (q(t)) t.forEach((t) => e(t, n, r, i));
					else {
						let e = K(t.handler) ? t.handler.bind(r) : n[t.handler];
						K(e) && rp(l, e, t);
					}
				})(a[e], r, n, e);
				if (u) {
					let e = K(u) ? u.call(n) : u;
					Reflect.ownKeys(e).forEach((t) => {
						n2(t, e[t]);
					});
				}
				function D(e, t) {
					q(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
				}
				if (c && n$(c, e, "c"), D(nT, f), D(nE, d), D(nL, p), D(nM, h), D(nw, m), D(nS, g), D(nR, _), D(nI, S), D(nF, C), D(nO, b), D(nD, k), D(nP, A), q(T)) if (T.length) {
					let t = e.exposed || (e.exposed = {});
					T.forEach((e) => {
						Object.defineProperty(t, e, {
							get: () => n[e],
							set: (t) => n[e] = t,
							enumerable: !0
						});
					});
				} else e.exposed || (e.exposed = {});
				w && e.render === z && (e.render = w), null != E && (e.inheritAttrs = E), L && (e.components = L), M && (e.directives = M), A && ng(e);
			})(e);
		} finally {
			eF(), t();
		}
	}
}
var rX = { get: (e, t) => (eH(e, "get", ""), e[t]) };
function rJ(e) {
	var t;
	return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(tE((!$(t = e.exposed, "__v_skip") && Object.isExtensible(t) && ef(t, "__v_skip", !0), t)), {
		get: (t, n) => n in t ? t[n] : n in nj ? nj[n](e) : void 0,
		has: (e, t) => t in e || t in nj
	})) : e.proxy;
}
var rY = (e, t) => (function(e, t, n = !1) {
	let r, i;
	return K(e) ? r = e : (r = e.get, i = e.set), new tO(r, i, n);
})(e, 0, rG);
function r1(e, t, n) {
	try {
		rM(-1);
		let r = arguments.length;
		if (2 !== r) return r > 3 ? n = Array.prototype.slice.call(arguments, 2) : 3 === r && rO(n) && (n = [n]), rI(e, t, n);
		if (!Z(t) || q(t)) return rI(e, null, t);
		if (rO(t)) return rI(e, null, [t]);
		return rI(e, t);
	} finally {
		rM(1);
	}
}
var r0 = void 0, r2 = "undefined" != typeof window && window.trustedTypes;
if (r2) try {
	r0 = r2.createPolicy("vue", { createHTML: (e) => e });
} catch (e) {}
var r5 = r0 ? (e) => r0.createHTML(e) : (e) => e, r4 = "undefined" != typeof document ? document : null, r3 = r4 && r4.createElement("template"), r6 = "transition", r9 = "animation", r8 = Symbol("_vtc"), r7 = {
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
}, ie = B({}, no, r7), it = ((C = (e, { slots: t }) => r1(ns, function(e) {
	let t = {};
	for (let n in e) n in r7 || (t[n] = e[n]);
	if (!1 === e.css) return t;
	let { name: n = "v", type: r, duration: i, enterFromClass: l = `${n}-enter-from`, enterActiveClass: o = `${n}-enter-active`, enterToClass: a = `${n}-enter-to`, appearFromClass: u = l, appearActiveClass: s = o, appearToClass: c = a, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: d = `${n}-leave-active`, leaveToClass: p = `${n}-leave-to` } = e, h = function(e) {
		if (null == e) return null;
		{
			if (Z(e)) return [il(e.enter), il(e.leave)];
			let t = il(e);
			return [t, t];
		}
	}(i), m = h && h[0], g = h && h[1], { onBeforeEnter: y, onEnter: b, onEnterCancelled: x, onLeave: k, onLeaveCancelled: w, onBeforeAppear: S = y, onAppear: C = b, onAppearCancelled: _ = x } = t, A = (e, t, n, r) => {
		e._enterCancelled = r, ia(e, t ? c : a), ia(e, t ? s : o), n && n();
	}, T = (e, t) => {
		e._isLeaving = !1, ia(e, f), ia(e, p), ia(e, d), t && t();
	}, E = (e) => (t, n) => {
		let i = e ? C : b, o = () => A(t, e, n);
		ir(i, [t, o]), iu(() => {
			ia(t, e ? u : l), io(t, e ? c : a), ii(i) || ic(t, r, m, o);
		});
	};
	return B(t, {
		onBeforeEnter(e) {
			ir(y, [e]), io(e, l), io(e, o);
		},
		onBeforeAppear(e) {
			ir(S, [e]), io(e, u), io(e, s);
		},
		onEnter: E(!1),
		onAppear: E(!0),
		onLeave(e, t) {
			e._isLeaving = !0;
			let n = () => T(e, t);
			io(e, f), e._enterCancelled ? (io(e, d), ih(e)) : (ih(e), io(e, d)), iu(() => {
				e._isLeaving && (ia(e, f), io(e, p), ii(k) || ic(e, r, g, n));
			}), ir(k, [e, n]);
		},
		onEnterCancelled(e) {
			A(e, !1, void 0, !0), ir(x, [e]);
		},
		onAppearCancelled(e) {
			A(e, !0, void 0, !0), ir(_, [e]);
		},
		onLeaveCancelled(e) {
			T(e), ir(w, [e]);
		}
	});
}(e), t)).displayName = "Transition", C.props = ie, C), ir = (e, t = []) => {
	q(e) ? e.forEach((e) => e(...t)) : e && e(...t);
}, ii = (e) => !!e && (q(e) ? e.some((e) => e.length > 1) : e.length > 1);
function il(e) {
	let t = G(e) ? Number(e) : NaN;
	return isNaN(t) ? e : t;
}
function io(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.add(t)), (e[r8] || (e[r8] = /* @__PURE__ */ new Set())).add(t);
}
function ia(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.remove(t));
	let n = e[r8];
	n && (n.delete(t), n.size || (e[r8] = void 0));
}
function iu(e) {
	requestAnimationFrame(() => {
		requestAnimationFrame(e);
	});
}
var is = 0;
function ic(e, t, n, r) {
	let i = e._endId = ++is, l = () => {
		i === e._endId && r();
	};
	if (null != n) return setTimeout(l, n);
	let { type: o, timeout: a, propCount: u } = function(e, t) {
		let n = window.getComputedStyle(e), r = (e) => (n[e] || "").split(", "), i = r(`${r6}Delay`), l = r(`${r6}Duration`), o = id(i, l), a = r(`${r9}Delay`), u = r(`${r9}Duration`), s = id(a, u), c = null, f = 0, d = 0;
		t === r6 ? o > 0 && (c = r6, f = o, d = l.length) : t === r9 ? s > 0 && (c = r9, f = s, d = u.length) : d = (c = (f = Math.max(o, s)) > 0 ? o > s ? r6 : r9 : null) ? c === r6 ? l.length : u.length : 0;
		let p = c === r6 && /\b(?:transform|all)(?:,|$)/.test(r(`${r6}Property`).toString());
		return {
			type: c,
			timeout: f,
			propCount: d,
			hasTransform: p
		};
	}(e, t);
	if (!o) return r();
	let s = o + "end", c = 0, f = () => {
		e.removeEventListener(s, d), l();
	}, d = (t) => {
		t.target === e && ++c >= u && f();
	};
	setTimeout(() => {
		c < u && f();
	}, a + 1), e.addEventListener(s, d);
}
function id(e, t) {
	for (; e.length < t.length;) e = e.concat(e);
	return Math.max(...t.map((t, n) => ip(t) + ip(e[n])));
}
function ip(e) {
	return "auto" === e ? 0 : 1e3 * Number(e.slice(0, -1).replace(",", "."));
}
function ih(e) {
	return (e ? e.ownerDocument : document).body.offsetHeight;
}
var im = Symbol("_vod"), ig = Symbol("_vsh"), iv = Symbol(""), iy = /(?:^|;)\s*display\s*:/, ib = /\s*!important$/;
function ix(e, t, n) {
	if (q(n)) n.forEach((n) => ix(e, t, n));
	else if (n ??= "", t.startsWith("--")) e.setProperty(t, n);
	else {
		let r = function(e, t) {
			let n = iw[t];
			if (n) return n;
			let r = ei(t);
			if ("filter" !== r && r in e) return iw[t] = r;
			r = ea(r);
			for (let n = 0; n < ik.length; n++) {
				let i = ik[n] + r;
				if (i in e) return iw[t] = i;
			}
			return t;
		}(e, t);
		ib.test(n) ? e.setProperty(eo(r), n.replace(ib, ""), "important") : e[r] = n;
	}
}
var ik = [
	"Webkit",
	"Moz",
	"ms"
], iw = {}, iS = "http://www.w3.org/1999/xlink";
function iC(e, t, n, r, i, l = eb(t)) {
	if (r && t.startsWith("xlink:")) null == n ? e.removeAttributeNS(iS, t.slice(6, t.length)) : e.setAttributeNS(iS, t, n);
	else null == n || l && !(n || "" === n) ? e.removeAttribute(t) : e.setAttribute(t, l ? "" : Q(n) ? String(n) : n);
}
function i_(e, t, n, r, i) {
	if ("innerHTML" === t || "textContent" === t) {
		null != n && (e[t] = "innerHTML" === t ? r5(n) : n);
		return;
	}
	let l = e.tagName;
	if ("value" === t && "PROGRESS" !== l && !l.includes("-")) {
		let r = "OPTION" === l ? e.getAttribute("value") || "" : e.value, i = null == n ? "checkbox" === e.type ? "on" : "" : String(n);
		r === i && "_value" in e || (e.value = i), n ?? e.removeAttribute(t), e._value = n;
		return;
	}
	let o = !1;
	if ("" === n || null == n) {
		let r = typeof e[t];
		if ("boolean" === r) {
			var a;
			n = !!(a = n) || "" === a;
		} else null == n && "string" === r ? (n = "", o = !0) : "number" === r && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch (e) {}
	o && e.removeAttribute(i || t);
}
var iA = Symbol("_vei"), iT = /(?:Once|Passive|Capture)$/, iE = 0, iL = Promise.resolve(), iM = (e) => 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) > 96 && 123 > e.charCodeAt(2), iO = B({ patchProp: (e, t, n, r, i, l) => {
	let o = "svg" === i;
	if ("class" === t) {
		var a = r;
		let t = e[r8];
		t && (a = (a ? [a, ...t] : [...t]).join(" ")), null == a ? e.removeAttribute("class") : o ? e.setAttribute("class", a) : e.className = a;
	} else "style" === t ? function(e, t, n) {
		let r = e.style, i = G(n), l = !1;
		if (n && !i) {
			if (t) if (G(t)) for (let e of t.split(";")) {
				let t = e.slice(0, e.indexOf(":")).trim();
				n[t] ?? ix(r, t, "");
			}
			else for (let e in t) n[e] ?? ix(r, e, "");
			for (let e in n) "display" === e && (l = !0), ix(r, e, n[e]);
		} else if (i) {
			if (t !== n) {
				let e = r[iv];
				e && (n += ";" + e), r.cssText = n, l = iy.test(n);
			}
		} else t && e.removeAttribute("style");
		im in e && (e[im] = l ? r.display : "", e[ig] && (r.display = "none"));
	}(e, n, r) : j(t) ? V(t) || function(e, t, n, r, i = null) {
		let l = e[iA] || (e[iA] = {}), o = l[t];
		if (r && o) o.value = r;
		else {
			var a;
			let [n, u] = function(e) {
				let t;
				if (iT.test(e)) {
					let n;
					for (t = {}; n = e.match(iT);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
				}
				return [":" === e[2] ? e.slice(3) : eo(e.slice(2)), t];
			}(t);
			r ? (a = l[t] = function(e, t) {
				let n = (e) => {
					if (e._vts) {
						if (e._vts <= n.attached) return;
					} else e._vts = Date.now();
					tz(function(e, t) {
						if (!q(t)) return t;
						{
							let n = e.stopImmediatePropagation;
							return e.stopImmediatePropagation = () => {
								n.call(e), e._stopped = !0;
							}, t.map((e) => (t) => !t._stopped && e && e(t));
						}
					}(e, n.value), t, 5, [e]);
				};
				return n.value = e, n.attached = iE || (iL.then(() => iE = 0), iE = Date.now()), n;
			}(r, i), e.addEventListener(n, a, u)) : o && (e.removeEventListener(n, o, u), l[t] = void 0);
		}
	}(e, t, 0, r, l) : ("." === t[0] ? (t = t.slice(1), 0) : "^" === t[0] ? (t = t.slice(1), 1) : !function(e, t, n, r) {
		if (r) return !!("innerHTML" === t || "textContent" === t || t in e && iM(t) && K(n));
		if ("spellcheck" === t || "draggable" === t || "translate" === t || "autocorrect" === t || "form" === t || "list" === t && "INPUT" === e.tagName || "type" === t && "TEXTAREA" === e.tagName) return !1;
		if ("width" === t || "height" === t) {
			let t = e.tagName;
			if ("IMG" === t || "VIDEO" === t || "CANVAS" === t || "SOURCE" === t) return !1;
		}
		return !(iM(t) && G(n)) && t in e;
	}(e, t, r, o)) ? e._isVueCE && (/[A-Z]/.test(t) || !G(r)) ? i_(e, ei(t), r, l, t) : ("true-value" === t ? e._trueValue = r : "false-value" === t && (e._falseValue = r), iC(e, t, r, o)) : (i_(e, t, r), e.tagName.includes("-") || "value" !== t && "checked" !== t && "selected" !== t || iC(e, t, r, o, l, "value" !== t));
} }, {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = "svg" === t ? r4.createElementNS("http://www.w3.org/2000/svg", e) : "mathml" === t ? r4.createElementNS("http://www.w3.org/1998/Math/MathML", e) : n ? r4.createElement(e, { is: n }) : r4.createElement(e);
		return "select" === e && r && null != r.multiple && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => r4.createTextNode(e),
	createComment: (e) => r4.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => r4.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, l) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === l || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), i !== l && (i = i.nextSibling););
		else {
			r3.innerHTML = r5("svg" === r ? `<svg>${e}</svg>` : "mathml" === r ? `<math>${e}</math>` : e);
			let i = r3.content;
			if ("svg" === r || "mathml" === r) {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}), iD = n((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t, n = "function" == typeof Symbol, r = n && void 0 !== Symbol.toPrimitive ? Symbol.toPrimitive : w("Symbol.toPrimitive not found."), i = n && void 0 !== Symbol.iterator ? Symbol.iterator : w("Symbol.iterator not found."), l = Object.getPrototypeOf(Function), o = "function" == typeof Map && "function" == typeof Map.prototype.entries ? Map : w("A valid Map constructor could not be found."), a = "function" == typeof Set && "function" == typeof Set.prototype.entries ? Set : w("A valid Set constructor could not be found."), u = "function" == typeof WeakMap ? WeakMap : w("A valid WeakMap constructor could not be found."), s = n ? Symbol.for("@reflect-metadata:registry") : void 0, c = (!d(s) && p(Reflect) && Object.isExtensible(Reflect) && (t = Reflect[s]), d(t) && (t = function() {
		d(s) || "undefined" == typeof Reflect || s in Reflect || "function" != typeof Reflect.defineMetadata || (t = (e = Reflect).defineMetadata, n = e.hasOwnMetadata, r = e.getOwnMetadata, i = e.getOwnMetadataKeys, l = e.deleteMetadata, c = new u(), f = {
			isProviderFor: function(e, t) {
				var n = c.get(e);
				return !!(!d(n) && n.has(t)) || !!i(e, t).length && (d(n) && (n = new a(), c.set(e, n)), n.add(t), !0);
			},
			OrdinaryDefineOwnMetadata: t,
			OrdinaryHasOwnMetadata: n,
			OrdinaryGetOwnMetadata: r,
			OrdinaryOwnMetadataKeys: i,
			OrdinaryDeleteMetadata: l
		});
		var e, t, n, r, i, l, c, f, p, h, m, g = new u(), k = {
			registerProvider: function(e) {
				if (!Object.isExtensible(k)) throw Error("Cannot add provider to a frozen registry.");
				switch (!0) {
					case f === e: break;
					case d(p):
						p = e;
						break;
					case p === e: break;
					case d(h):
						h = e;
						break;
					case h === e: break;
					default: void 0 === m && (m = new a()), m.add(e);
				}
			},
			getProvider: w,
			setProvider: function(e, t, n) {
				if (!function(e) {
					if (d(e)) throw TypeError();
					return f === e || p === e || h === e || !d(m) && m.has(e);
				}(n)) throw Error("Metadata provider not registered.");
				var r = w(e, t);
				if (r !== n) {
					if (!d(r)) return !1;
					var i = g.get(e);
					d(i) && (i = new o(), g.set(e, i)), i.set(t, n);
				}
				return !0;
			}
		};
		return k;
		function w(e, t) {
			var n, r = g.get(e);
			return d(r) || (n = r.get(t)), d(n) && (n = function(e, t) {
				if (!d(p)) {
					if (p.isProviderFor(e, t)) return p;
					if (!d(h)) {
						if (h.isProviderFor(e, t)) return p;
						if (!d(m)) for (var n = y(m);;) {
							var r = b(n);
							if (!r) return;
							var i = r.value;
							if (i.isProviderFor(e, t)) return x(n), i;
						}
					}
				}
				if (!d(f) && f.isProviderFor(e, t)) return f;
			}(e, t), d(n) || (d(r) && (r = new o(), g.set(e, r)), r.set(t, n))), n;
		}
	}()), !d(s) && p(Reflect) && Object.isExtensible(Reflect) && Object.defineProperty(Reflect, s, {
		enumerable: !1,
		configurable: !1,
		writable: !1,
		value: t
	}), t), f = function(e) {
		var t = new u(), n = {
			isProviderFor: function(e, n) {
				var r = t.get(e);
				return !d(r) && r.has(n);
			},
			OrdinaryDefineOwnMetadata: function(e, t, n, i) {
				r(n, i, !0).set(e, t);
			},
			OrdinaryHasOwnMetadata: function(e, t, n) {
				var i = r(t, n, !1);
				return !d(i) && !!i.has(e);
			},
			OrdinaryGetOwnMetadata: function(e, t, n) {
				var i = r(t, n, !1);
				if (!d(i)) return i.get(e);
			},
			OrdinaryOwnMetadataKeys: function(e, t) {
				var n = [], i = r(e, t, !1);
				if (d(i)) return n;
				for (var l = y(i.keys()), o = 0;;) {
					var a = b(l);
					if (!a) return n.length = o, n;
					var u = a.value;
					try {
						n[o] = u;
					} catch (e) {
						try {
							x(l);
						} finally {
							throw e;
						}
					}
					o++;
				}
			},
			OrdinaryDeleteMetadata: function(e, n, i) {
				var l = r(n, i, !1);
				if (d(l) || !l.delete(e)) return !1;
				if (0 === l.size) {
					var o = t.get(n);
					d(o) || (o.delete(i), 0 === o.size && t.delete(o));
				}
				return !0;
			}
		};
		return c.registerProvider(n), n;
		function r(r, i, l) {
			var a = t.get(r), u = !1;
			if (d(a)) {
				if (!l) return;
				a = new o(), t.set(r, a), u = !0;
			}
			var s = a.get(i);
			if (d(s)) {
				if (!l) return;
				if (s = new o(), a.set(i, s), !e.setProvider(r, i, n)) throw a.delete(i), u && t.delete(r), Error("Wrong provider for target.");
			}
			return s;
		}
	}(c);
	function d(e) {
		return void 0 === e;
	}
	function p(e) {
		return "object" == typeof e ? null !== e : "function" == typeof e;
	}
	e.defineMetadata = function(e, t, n, r) {
		var i, l, o, a;
		if (!p(n)) throw TypeError();
		d(r) || (r = h(r)), i = e, l = t, S(o = n, a = r, !0).OrdinaryDefineOwnMetadata(i, l, o, a);
	}, e.getMetadata = function(e, t, n) {
		if (!p(t)) throw TypeError();
		return d(n) || (n = h(n)), function e(t, n, r) {
			if (!d(u = S(n, r, !1)) && function(e) {
				return !!e;
			}(u.OrdinaryHasOwnMetadata(t, n, r))) {
				var i = t, l = n, o = r, a = S(l, o, !1);
				return d(a) ? void 0 : a.OrdinaryGetOwnMetadata(i, l, o);
			}
			var u, s = k(n);
			if (null !== s) return e(t, s, r);
		}(e, t, n);
	}, e.getMetadataKeys = function(e, t) {
		if (!p(e)) throw TypeError();
		return d(t) || (t = h(t)), function e(t, n) {
			var r, i, l, o = (l = S(r = t, i = n, !1)) ? l.OrdinaryOwnMetadataKeys(r, i) : [], u = k(t);
			if (null === u) return o;
			var s = e(u, n);
			if (s.length <= 0) return o;
			if (o.length <= 0) return s;
			for (var c = new a(), f = [], d = 0; d < o.length; d++) {
				var p = o[d], h = c.has(p);
				h || (c.add(p), f.push(p));
			}
			for (var m = 0; m < s.length; m++) {
				var p = s[m], h = c.has(p);
				h || (c.add(p), f.push(p));
			}
			return f;
		}(e, t);
	};
	function h(e) {
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
			var n = "string", i = g(e, r);
			if (void 0 !== i) {
				var l = i.call(e, n);
				if (p(l)) throw TypeError();
				return l;
			}
			return function(e, t) {
				if ("string" === t) {
					var n = e.toString;
					if (m(n)) {
						var r = n.call(e);
						if (!p(r)) return r;
					}
					var i = e.valueOf;
					if (m(i)) {
						var r = i.call(e);
						if (!p(r)) return r;
					}
				} else {
					var i = e.valueOf;
					if (m(i)) {
						var r = i.call(e);
						if (!p(r)) return r;
					}
					var l = e.toString;
					if (m(l)) {
						var r = l.call(e);
						if (!p(r)) return r;
					}
				}
				throw TypeError();
			}(e, n);
		}(e, 0);
		return "symbol" == typeof t ? t : "" + t;
	}
	function m(e) {
		return "function" == typeof e;
	}
	function g(e, t) {
		var n = e[t];
		if (null != n) {
			if (!m(n)) throw TypeError();
			return n;
		}
	}
	function y(e) {
		var t = g(e, i);
		if (!m(t)) throw TypeError();
		var n = t.call(e);
		if (!p(n)) throw TypeError();
		return n;
	}
	function b(e) {
		var t = e.next();
		return !t.done && t;
	}
	function x(e) {
		var t = e.return;
		t && t.call(e);
	}
	function k(e) {
		var t = Object.getPrototypeOf(e);
		if ("function" != typeof e || e === l || t !== l) return t;
		var n = e.prototype, r = n && Object.getPrototypeOf(n);
		if (null == r || r === Object.prototype) return t;
		var i = r.constructor;
		return "function" != typeof i || i === e ? t : i;
	}
	function w(e) {
		throw e;
	}
	function S(e, t, n) {
		var r = c.getProvider(e, t);
		if (!d(r)) return r;
		if (n) {
			if (c.setProvider(e, t, f)) return f;
			throw Error("Illegal state.");
		}
	}
}), iP = (e) => "function" == typeof e ? e : Array.isArray(e) ? () => e : void 0 === e ? e : () => e, iF = (e, t, n) => iI(e, t, n), iI = (e, t, n) => {
	let r, [i, l] = ((e, t) => {
		let { children: n,...r } = e;
		if (n && !Array.isArray(n) && !rO(n) && "object" == typeof n) return [t ? {
			...r,
			key: t
		} : r, n];
		let i = {}, l = {}, o = !1;
		for (let e in r) {
			let t = r[e];
			if (e.startsWith("$")) {
				l[e.slice(1)] = iP(t), o = !0;
				continue;
			}
			i[e] = t;
		}
		let a = iP(n);
		return a && (l.default = a, o = !0), [t ? {
			...i,
			key: t
		} : i, o ? l : void 0];
	})(t, n);
	return (r = e) === rC || "string" == typeof r || "object" == typeof r && r.__isTeleport ? r1(e, i, l?.default?.() ?? (e === rC ? [] : void 0)) : r1(e, i, l);
}, iR = function() {}, iz = function() {}, iN = (e, t) => (n) => Math.max(Math.min(n, t), e), ij = (e) => e % 1 ? Number(e.toFixed(5)) : e, iV = /(-)?([\d]*\.?[\d])+/g, iB = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, iU = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function iH(e) {
	return "string" == typeof e;
}
var i$ = {
	test: (e) => "number" == typeof e,
	parse: parseFloat,
	transform: (e) => e
}, iq = Object.assign(Object.assign({}, i$), { transform: iN(0, 1) }), iW = {
	test: (e) => iH(e) && e.endsWith("%") && 1 === e.split(" ").length,
	parse: parseFloat,
	transform: (e) => `${e}%`
}, iK = (e, t) => (n) => !!(iH(n) && iU.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)), iG = (e, t, n) => (r) => {
	if (!iH(r)) return r;
	let [i, l, o, a] = r.match(iV);
	return {
		[e]: parseFloat(i),
		[t]: parseFloat(l),
		[n]: parseFloat(o),
		alpha: void 0 !== a ? parseFloat(a) : 1
	};
}, iQ = {
	test: iK("hsl", "hue"),
	parse: iG("hue", "saturation", "lightness"),
	transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + iW.transform(ij(t)) + ", " + iW.transform(ij(n)) + ", " + ij(iq.transform(r)) + ")"
}, iZ = iN(0, 255), iX = Object.assign(Object.assign({}, i$), { transform: (e) => Math.round(iZ(e)) }), iJ = {
	test: iK("rgb", "red"),
	parse: iG("red", "green", "blue"),
	transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + iX.transform(e) + ", " + iX.transform(t) + ", " + iX.transform(n) + ", " + ij(iq.transform(r)) + ")"
}, iY = {
	test: iK("#"),
	parse: function(e) {
		let t = "", n = "", r = "", i = "";
		return e.length > 5 ? (t = e.substr(1, 2), n = e.substr(3, 2), r = e.substr(5, 2), i = e.substr(7, 2)) : (t = e.substr(1, 1), n = e.substr(2, 1), r = e.substr(3, 1), i = e.substr(4, 1), t += t, n += n, r += r, i += i), {
			red: parseInt(t, 16),
			green: parseInt(n, 16),
			blue: parseInt(r, 16),
			alpha: i ? parseInt(i, 16) / 255 : 1
		};
	},
	transform: iJ.transform
}, i1 = {
	test: (e) => iJ.test(e) || iY.test(e) || iQ.test(e),
	parse: (e) => iJ.test(e) ? iJ.parse(e) : iQ.test(e) ? iQ.parse(e) : iY.parse(e),
	transform: (e) => iH(e) ? e : e.hasOwnProperty("red") ? iJ.transform(e) : iQ.transform(e)
}, i0 = "${c}", i2 = "${n}";
function i5(e) {
	"number" == typeof e && (e = `${e}`);
	let t = [], n = 0, r = e.match(iB);
	r && (n = r.length, e = e.replace(iB, i0), t.push(...r.map(i1.parse)));
	let i = e.match(iV);
	return i && (e = e.replace(iV, i2), t.push(...i.map(i$.parse))), {
		values: t,
		numColors: n,
		tokenised: e
	};
}
function i4(e) {
	return i5(e).values;
}
function i3(e) {
	let { values: t, numColors: n, tokenised: r } = i5(e), i = t.length;
	return (e) => {
		let t = r;
		for (let r = 0; r < i; r++) t = t.replace(r < n ? i0 : i2, r < n ? i1.transform(e[r]) : ij(e[r]));
		return t;
	};
}
var i6 = (e) => "number" == typeof e ? 0 : e, i9 = {
	test: function(e) {
		var t, n, r, i;
		return isNaN(e) && iH(e) && (null != (n = null == (t = e.match(iV)) ? void 0 : t.length) ? n : 0) + (null != (i = null == (r = e.match(iB)) ? void 0 : r.length) ? i : 0) > 0;
	},
	parse: i4,
	createTransformer: i3,
	getAnimatableNone: function(e) {
		let t = i4(e);
		return i3(e)(t.map(i6));
	}
}, i8 = 1 / 60 * 1e3, i7 = "undefined" != typeof performance ? () => performance.now() : () => Date.now(), le = "undefined" != typeof window ? (e) => window.requestAnimationFrame(e) : (e) => setTimeout(() => e(i7()), i8), lt = !0, ln = !1, lr = !1, li = {
	delta: 0,
	timestamp: 0
}, ll = [
	"read",
	"update",
	"preRender",
	"render",
	"postRender"
], lo = ll.reduce((e, t) => (e[t] = function(e) {
	let t = [], n = [], r = 0, i = !1, l = !1, o = /* @__PURE__ */ new WeakSet(), a = {
		schedule: (e, l = !1, a = !1) => {
			let u = a && i, s = u ? t : n;
			return l && o.add(e), -1 === s.indexOf(e) && (s.push(e), u && i && (r = t.length)), e;
		},
		cancel: (e) => {
			let t = n.indexOf(e);
			-1 !== t && n.splice(t, 1), o.delete(e);
		},
		process: (u) => {
			if (i) {
				l = !0;
				return;
			}
			if (i = !0, [t, n] = [n, t], n.length = 0, r = t.length) for (let n = 0; n < r; n++) {
				let r = t[n];
				r(u), o.has(r) && (a.schedule(r), e());
			}
			i = !1, l && (l = !1, a.process(u));
		}
	};
	return a;
}(() => ln = !0), e), {}), la = ll.reduce((e, t) => {
	let n = lo[t];
	return e[t] = (e, t = !1, r = !1) => (ln || lf(), n.schedule(e, t, r)), e;
}, {}), lu = ll.reduce((e, t) => (e[t] = lo[t].cancel, e), {}), ls = (e) => lo[e].process(li), lc = (e) => {
	ln = !1, li.delta = lt ? i8 : Math.max(Math.min(e - li.timestamp, 40), 1), li.timestamp = e, lr = !0, ll.forEach(ls), lr = !1, ln && (lt = !1, le(lc));
}, lf = () => {
	ln = !0, lt = !0, lr || le(lc);
}, ld = la;
function lp(e) {
	for (var t, n = 0, r = 0, i = e.length; i >= 4; ++r, i -= 4) t = (65535 & (t = 255 & e.charCodeAt(r) | (255 & e.charCodeAt(++r)) << 8 | (255 & e.charCodeAt(++r)) << 16 | (255 & e.charCodeAt(++r)) << 24)) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= t >>> 24, n = (65535 & t) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ (65535 & n) * 1540483477 + ((n >>> 16) * 59797 << 16);
	switch (i) {
		case 3: n ^= (255 & e.charCodeAt(r + 2)) << 16;
		case 2: n ^= (255 & e.charCodeAt(r + 1)) << 8;
		case 1: n ^= 255 & e.charCodeAt(r), n = (65535 & n) * 1540483477 + ((n >>> 16) * 59797 << 16);
	}
	return n ^= n >>> 13, (((n = (65535 & n) * 1540483477 + ((n >>> 16) * 59797 << 16)) ^ n >>> 15) >>> 0).toString(36);
}
var lh = {
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
};
function lm(e) {
	var t = Object.create(null);
	return function(n) {
		return void 0 === t[n] && (t[n] = e(n)), t[n];
	};
}
var lg = function() {
	function e(e) {
		var t = this;
		this._insertTag = function(e) {
			var n = 0 === t.tags.length ? t.insertionPoint ? t.insertionPoint.nextSibling : t.prepend ? t.container.firstChild : t.before : t.tags[t.tags.length - 1].nextSibling;
			t.container.insertBefore(e, n), t.tags.push(e);
		}, this.isSpeedy = void 0 === e.speedy || e.speedy, this.tags = [], this.ctr = 0, this.nonce = e.nonce, this.key = e.key, this.container = e.container, this.prepend = e.prepend, this.insertionPoint = e.insertionPoint, this.before = null;
	}
	var t = e.prototype;
	return t.hydrate = function(e) {
		e.forEach(this._insertTag);
	}, t.insert = function(e) {
		this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(((t = document.createElement("style")).setAttribute("data-emotion", this.key), void 0 !== this.nonce && t.setAttribute("nonce", this.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t));
		var t, n = this.tags[this.tags.length - 1];
		if (this.isSpeedy) {
			var r = function(e) {
				if (e.sheet) return e.sheet;
				for (var t = 0; t < document.styleSheets.length; t++) if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
			}(n);
			try {
				r.insertRule(e, r.cssRules.length);
			} catch (e) {}
		} else n.appendChild(document.createTextNode(e));
		this.ctr++;
	}, t.flush = function() {
		this.tags.forEach(function(e) {
			var t;
			return null == (t = e.parentNode) ? void 0 : t.removeChild(e);
		}), this.tags = [], this.ctr = 0;
	}, e;
}(), lv = Math.min, ly = Math.max, lb = Math.round, lx = Math.floor, lk = (e) => ({
	x: e,
	y: e
}), lw = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
}, lS = {
	start: "end",
	end: "start"
};
function lC(e, t) {
	return "function" == typeof e ? e(t) : e;
}
function l_(e) {
	return e.split("-")[0];
}
function lA(e) {
	return e.split("-")[1];
}
function lT(e) {
	return "x" === e ? "y" : "x";
}
function lE(e) {
	return "y" === e ? "height" : "width";
}
var lL = new Set(["top", "bottom"]);
function lM(e) {
	return lL.has(l_(e)) ? "y" : "x";
}
function lO(e) {
	return e.replace(/start|end/g, (e) => lS[e]);
}
var lD = ["left", "right"], lP = ["right", "left"], lF = ["top", "bottom"], lI = ["bottom", "top"];
function lR(e) {
	return e.replace(/left|right|bottom|top/g, (e) => lw[e]);
}
function lz(e) {
	let { x: t, y: n, width: r, height: i } = e;
	return {
		width: r,
		height: i,
		top: n,
		left: t,
		right: t + r,
		bottom: n + i,
		x: t,
		y: n
	};
}
function lN(e, t, n) {
	let r, { reference: i, floating: l } = e, o = lM(t), a = lT(lM(t)), u = lE(a), s = l_(t), c = "y" === o, f = i.x + i.width / 2 - l.width / 2, d = i.y + i.height / 2 - l.height / 2, p = i[u] / 2 - l[u] / 2;
	switch (s) {
		case "top":
			r = {
				x: f,
				y: i.y - l.height
			};
			break;
		case "bottom":
			r = {
				x: f,
				y: i.y + i.height
			};
			break;
		case "right":
			r = {
				x: i.x + i.width,
				y: d
			};
			break;
		case "left":
			r = {
				x: i.x - l.width,
				y: d
			};
			break;
		default: r = {
			x: i.x,
			y: i.y
		};
	}
	switch (lA(t)) {
		case "start":
			r[a] -= p * (n && c ? -1 : 1);
			break;
		case "end": r[a] += p * (n && c ? -1 : 1);
	}
	return r;
}
var lj = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: l = [], platform: o } = n, a = l.filter(Boolean), u = await (null == o.isRTL ? void 0 : o.isRTL(t)), s = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: c, y: f } = lN(s, r, u), d = r, p = {}, h = 0;
	for (let n = 0; n < a.length; n++) {
		let { name: l, fn: m } = a[n], { x: g, y, data: b, reset: x } = await m({
			x: c,
			y: f,
			initialPlacement: r,
			placement: d,
			strategy: i,
			middlewareData: p,
			rects: s,
			platform: o,
			elements: {
				reference: e,
				floating: t
			}
		});
		c = null != g ? g : c, f = null != y ? y : f, p = {
			...p,
			[l]: {
				...p[l],
				...b
			}
		}, x && h <= 50 && (h++, "object" == typeof x && (x.placement && (d = x.placement), x.rects && (s = !0 === x.rects ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: c, y: f} = lN(s, d, u)), n = -1);
	}
	return {
		x: c,
		y: f,
		placement: d,
		strategy: i,
		middlewareData: p
	};
};
async function lV(e, t) {
	var n, r;
	void 0 === t && (t = {});
	let { x: i, y: l, platform: o, rects: a, elements: u, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: f = "viewport", elementContext: d = "floating", altBoundary: p = !1, padding: h = 0 } = lC(t, e), m = "number" != typeof (r = h) ? {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...r
	} : {
		top: r,
		right: r,
		bottom: r,
		left: r
	}, g = u[p ? "floating" === d ? "reference" : "floating" : d], y = lz(await o.getClippingRect({
		element: null == (n = await (null == o.isElement ? void 0 : o.isElement(g))) || n ? g : g.contextElement || await (null == o.getDocumentElement ? void 0 : o.getDocumentElement(u.floating)),
		boundary: c,
		rootBoundary: f,
		strategy: s
	})), b = "floating" === d ? {
		x: i,
		y: l,
		width: a.floating.width,
		height: a.floating.height
	} : a.reference, x = await (null == o.getOffsetParent ? void 0 : o.getOffsetParent(u.floating)), k = await (null == o.isElement ? void 0 : o.isElement(x)) && await (null == o.getScale ? void 0 : o.getScale(x)) || {
		x: 1,
		y: 1
	}, w = lz(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: u,
		rect: b,
		offsetParent: x,
		strategy: s
	}) : b);
	return {
		top: (y.top - w.top + m.top) / k.y,
		bottom: (w.bottom - y.bottom + m.bottom) / k.y,
		left: (y.left - w.left + m.left) / k.x,
		right: (w.right - y.right + m.right) / k.x
	};
}
var lB = function(e) {
	return void 0 === e && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n, r, i, l, o;
			let { placement: a, middlewareData: u, rects: s, initialPlacement: c, platform: f, elements: d } = t, { mainAxis: p = !0, crossAxis: h = !0, fallbackPlacements: m, fallbackStrategy: g = "bestFit", fallbackAxisSideDirection: y = "none", flipAlignment: b = !0,...x } = lC(e, t);
			if (null != (n = u.arrow) && n.alignmentOffset) return {};
			let k = l_(a), w = lM(c), S = l_(c) === c, C = await (null == f.isRTL ? void 0 : f.isRTL(d.floating)), _ = m || (S || !b ? [lR(c)] : function(e) {
				let t = lR(e);
				return [
					lO(e),
					t,
					lO(t)
				];
			}(c)), A = "none" !== y;
			!m && A && _.push(...function(e, t, n, r) {
				let i = lA(e), l = function(e, t, n) {
					switch (e) {
						case "top":
						case "bottom":
							if (n) return t ? lP : lD;
							return t ? lD : lP;
						case "left":
						case "right": return t ? lF : lI;
						default: return [];
					}
				}(l_(e), "start" === n, r);
				return i && (l = l.map((e) => e + "-" + i), t && (l = l.concat(l.map(lO)))), l;
			}(c, b, y, C));
			let T = [c, ..._], E = await lV(t, x), L = [], M = (null == (r = u.flip) ? void 0 : r.overflows) || [];
			if (p && L.push(E[k]), h) {
				let e = function(e, t, n) {
					void 0 === n && (n = !1);
					let r = lA(e), i = lT(lM(e)), l = lE(i), o = "x" === i ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
					return t.reference[l] > t.floating[l] && (o = lR(o)), [o, lR(o)];
				}(a, s, C);
				L.push(E[e[0]], E[e[1]]);
			}
			if (M = [...M, {
				placement: a,
				overflows: L
			}], !L.every((e) => e <= 0)) {
				let e = ((null == (i = u.flip) ? void 0 : i.index) || 0) + 1, t = T[e];
				if (t && ("alignment" !== h || w === lM(t) || M.every((e) => lM(e.placement) !== w || e.overflows[0] > 0))) return {
					data: {
						index: e,
						overflows: M
					},
					reset: { placement: t }
				};
				let n = null == (l = M.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : l.placement;
				if (!n) switch (g) {
					case "bestFit": {
						let e = null == (o = M.filter((e) => {
							if (A) {
								let t = lM(e.placement);
								return t === w || "y" === t;
							}
							return !0;
						}).map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : o[0];
						e && (n = e);
						break;
					}
					case "initialPlacement": n = c;
				}
				if (a !== n) return { reset: { placement: n } };
			}
			return {};
		}
	};
}, lU = function(e) {
	return void 0 === e && (e = {}), {
		name: "shift",
		options: e,
		async fn(t) {
			let { x: n, y: r, placement: i } = t, { mainAxis: l = !0, crossAxis: o = !1, limiter: a = { fn: (e) => {
				let { x: t, y: n } = e;
				return {
					x: t,
					y: n
				};
			} },...u } = lC(e, t), s = {
				x: n,
				y: r
			}, c = await lV(t, u), f = lM(l_(i)), d = lT(f), p = s[d], h = s[f];
			if (l) {
				let e = "y" === d ? "top" : "left", t = "y" === d ? "bottom" : "right", n = p + c[e], r = p - c[t];
				p = ly(n, lv(p, r));
			}
			if (o) {
				let e = "y" === f ? "top" : "left", t = "y" === f ? "bottom" : "right", n = h + c[e], r = h - c[t];
				h = ly(n, lv(h, r));
			}
			let m = a.fn({
				...t,
				[d]: p,
				[f]: h
			});
			return {
				...m,
				data: {
					x: m.x - n,
					y: m.y - r,
					enabled: {
						[d]: l,
						[f]: o
					}
				}
			};
		}
	};
}, lH = function(e) {
	return void 0 === e && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			var n, r;
			let i, l, { placement: o, rects: a, platform: u, elements: s } = t, { apply: c = () => {},...f } = lC(e, t), d = await lV(t, f), p = l_(o), h = lA(o), m = "y" === lM(o), { width: g, height: y } = a.floating;
			"top" === p || "bottom" === p ? (i = p, l = h === (await (null == u.isRTL ? void 0 : u.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (l = p, i = "end" === h ? "top" : "bottom");
			let b = y - d.top - d.bottom, x = g - d.left - d.right, k = lv(y - d[i], b), w = lv(g - d[l], x), S = !t.middlewareData.shift, C = k, _ = w;
			if (null != (n = t.middlewareData.shift) && n.enabled.x && (_ = x), null != (r = t.middlewareData.shift) && r.enabled.y && (C = b), S && !h) {
				let e = ly(d.left, 0), t = ly(d.right, 0), n = ly(d.top, 0), r = ly(d.bottom, 0);
				m ? _ = g - 2 * (0 !== e || 0 !== t ? e + t : ly(d.left, d.right)) : C = y - 2 * (0 !== n || 0 !== r ? n + r : ly(d.top, d.bottom));
			}
			await c({
				...t,
				availableWidth: _,
				availableHeight: C
			});
			let A = await u.getDimensions(s.floating);
			return g !== A.width || y !== A.height ? { reset: { rects: !0 } } : {};
		}
	};
};
function l$() {
	return "undefined" != typeof window;
}
function lq(e) {
	return lG(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function lW(e) {
	var t;
	return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window;
}
function lK(e) {
	var t;
	return null == (t = (lG(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement;
}
function lG(e) {
	return !!l$() && (e instanceof Node || e instanceof lW(e).Node);
}
function lQ(e) {
	return !!l$() && (e instanceof Element || e instanceof lW(e).Element);
}
function lZ(e) {
	return !!l$() && (e instanceof HTMLElement || e instanceof lW(e).HTMLElement);
}
function lX(e) {
	return !!l$() && "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof lW(e).ShadowRoot);
}
var lJ = new Set(["inline", "contents"]);
function lY(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = on(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !lJ.has(i);
}
var l1 = new Set([
	"table",
	"td",
	"th"
]);
function l0(e) {
	return l1.has(lq(e));
}
var l2 = [":popover-open", ":modal"];
function l5(e) {
	return l2.some((t) => {
		try {
			return e.matches(t);
		} catch (e) {
			return !1;
		}
	});
}
var l4 = [
	"transform",
	"translate",
	"scale",
	"rotate",
	"perspective"
], l3 = [
	"transform",
	"translate",
	"scale",
	"rotate",
	"perspective",
	"filter"
], l6 = [
	"paint",
	"layout",
	"strict",
	"content"
];
function l9(e) {
	let t = l7(), n = lQ(e) ? on(e) : e;
	return l4.some((e) => !!n[e] && "none" !== n[e]) || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || l3.some((e) => (n.willChange || "").includes(e)) || l6.some((e) => (n.contain || "").includes(e));
}
function l8(e) {
	let t = oi(e);
	for (; lZ(t) && !ot(t);) {
		if (l9(t)) return t;
		if (l5(t)) break;
		t = oi(t);
	}
	return null;
}
function l7() {
	return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none");
}
var oe = new Set([
	"html",
	"body",
	"#document"
]);
function ot(e) {
	return oe.has(lq(e));
}
function on(e) {
	return lW(e).getComputedStyle(e);
}
function or(e) {
	return lQ(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function oi(e) {
	if ("html" === lq(e)) return e;
	let t = e.assignedSlot || e.parentNode || lX(e) && e.host || lK(e);
	return lX(t) ? t.host : t;
}
function ol(e, t, n) {
	var r;
	void 0 === t && (t = []), void 0 === n && (n = !0);
	let i = function e(t) {
		let n = oi(t);
		return ot(n) ? t.ownerDocument ? t.ownerDocument.body : t.body : lZ(n) && lY(n) ? n : e(n);
	}(e), l = i === (null == (r = e.ownerDocument) ? void 0 : r.body), o = lW(i);
	if (l) {
		let e = oo(o);
		return t.concat(o, o.visualViewport || [], lY(i) ? i : [], e && n ? ol(e) : []);
	}
	return t.concat(i, ol(i, [], n));
}
function oo(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
var oa = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n", ou = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, os = (e) => "" !== e && ou.test(e), oc = (e) => {
	let t = e.split(","), n = {};
	for (let e of t) {
		if ("" === e) continue;
		let [t, ...r] = e.split("="), i = r.join("=");
		os(i) ? n[t] = atob(i) : n[t] = i;
	}
	return n;
}, of = (e) => globalThis.document?.querySelector(`meta[name="webapp:${e}"]`)?.getAttribute("content") || "";
let od = { crossorigin: "use-credentials" };
var op = (() => {
	let e = oc(of("base")), t = oc(of("config"));
	return () => ({
		...e,
		...t,
		baseHref: globalThis.document?.querySelector("base")?.getAttribute("href") || "/"
	});
})();
let oh = f(() => ({ name: "undefined" }), { name: "Manifest" });
var om = {};
function og(e, t, n) {
	var r;
	if ((r = e) && "object" == typeof r) {
		if ("value" in e) return "html" !== e.type || n ? e.value : "";
		if (t && "alt" in e && e.alt) return e.alt;
		if ("children" in e) return ov(e.children, t, n);
	}
	return Array.isArray(e) ? ov(e, t, n) : "";
}
function ov(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) r[i] = og(e[i], t, n);
	return r.join("");
}
var oy = document.createElement("i");
function ob(e) {
	let t = "&" + e + ";";
	oy.innerHTML = t;
	let n = oy.textContent;
	return (59 !== n.charCodeAt(n.length - 1) || "semi" === e) && n !== t && n;
}
function ox(e, t, n, r) {
	let i, l = e.length, o = 0;
	if (t = t < 0 ? -t > l ? 0 : l + t : t > l ? l : t, n = n > 0 ? n : 0, r.length < 1e4) (i = Array.from(r)).unshift(t, n), e.splice(...i);
	else for (n && e.splice(t, n); o < r.length;) (i = r.slice(o, o + 1e4)).unshift(t, 0), e.splice(...i), o += 1e4, t += 1e4;
}
function ok(e, t) {
	return e.length > 0 ? (ox(e, e.length, 0, t), e) : t;
}
var ow = {}.hasOwnProperty;
function oS(e) {
	let t = {}, n = -1;
	for (; ++n < e.length;) (function(e, t) {
		let n;
		for (n in t) {
			let r, i = (ow.call(e, n) ? e[n] : void 0) || (e[n] = {}), l = t[n];
			if (l) for (r in l) {
				ow.call(i, r) || (i[r] = []);
				let e = l[r];
				(function(e, t) {
					let n = -1, r = [];
					for (; ++n < t.length;) ("after" === t[n].add ? e : r).push(t[n]);
					ox(e, 0, 0, r);
				})(i[r], Array.isArray(e) ? e : e ? [e] : []);
			}
		}
	})(t, e[n]);
	return t;
}
function oC(e, t) {
	let n = Number.parseInt(e, t);
	return n < 9 || 11 === n || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (65535 & n) == 65535 || (65535 & n) == 65534 || n > 1114111 ? "�" : String.fromCodePoint(n);
}
function o_(e) {
	return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
let oA = oN(/[A-Za-z]/), oT = oN(/[\dA-Za-z]/), oE = oN(/[#-'*+\--9=?A-Z^-~]/);
function oL(e) {
	return null !== e && (e < 32 || 127 === e);
}
let oM = oN(/\d/), oO = oN(/[\dA-Fa-f]/), oD = oN(/[!-/:-@[-`{-~]/);
function oP(e) {
	return null !== e && e < -2;
}
function oF(e) {
	return null !== e && (e < 0 || 32 === e);
}
function oI(e) {
	return -2 === e || -1 === e || 32 === e;
}
let oR = oN(/\p{P}|\p{S}/u), oz = oN(/\s/);
function oN(e) {
	return function(t) {
		return null !== t && t > -1 && e.test(String.fromCharCode(t));
	};
}
function oj(e) {
	let t = [], n = -1, r = 0, i = 0;
	for (; ++n < e.length;) {
		let l = e.charCodeAt(n), o = "";
		if (37 === l && oT(e.charCodeAt(n + 1)) && oT(e.charCodeAt(n + 2))) i = 2;
		else if (l < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l)) || (o = String.fromCharCode(l));
		else if (l > 55295 && l < 57344) {
			let t = e.charCodeAt(n + 1);
			l < 56320 && t > 56319 && t < 57344 ? (o = String.fromCharCode(l, t), i = 1) : o = "�";
		} else o = String.fromCharCode(l);
		o && (t.push(e.slice(r, n), encodeURIComponent(o)), r = n + i + 1, o = ""), i && (n += i, i = 0);
	}
	return t.join("") + e.slice(r);
}
function oV(e, t, n, r) {
	let i = r ? r - 1 : Infinity, l = 0;
	return function(r) {
		return oI(r) ? (e.enter(n), function r(o) {
			return oI(o) && l++ < i ? (e.consume(o), r) : (e.exit(n), t(o));
		}(r)) : t(r);
	};
}
let oB = { tokenize: function(e) {
	let t, n = e.attempt(this.parser.constructs.contentInitial, function(t) {
		return null === t ? void e.consume(t) : (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), oV(e, n, "linePrefix"));
	}, function(n) {
		return e.enter("paragraph"), function n(r) {
			let i = e.enter("chunkText", {
				contentType: "text",
				previous: t
			});
			return t && (t.next = i), t = i, function t(r) {
				if (null === r) {
					e.exit("chunkText"), e.exit("paragraph"), e.consume(r);
					return;
				}
				return oP(r) ? (e.consume(r), e.exit("chunkText"), n) : (e.consume(r), t);
			}(r);
		}(n);
	});
	return n;
} }, oU = { tokenize: function(e) {
	let t, n, r, i = this, l = [], o = 0;
	return a;
	function a(t) {
		if (o < l.length) {
			let n = l[o];
			return i.containerState = n[1], e.attempt(n[0].continuation, u, s)(t);
		}
		return s(t);
	}
	function u(e) {
		if (o++, i.containerState._closeFlow) {
			let n;
			i.containerState._closeFlow = void 0, t && y();
			let r = i.events.length, l = r;
			for (; l--;) if ("exit" === i.events[l][0] && "chunkFlow" === i.events[l][1].type) {
				n = i.events[l][1].end;
				break;
			}
			g(o);
			let a = r;
			for (; a < i.events.length;) i.events[a][1].end = { ...n }, a++;
			return ox(i.events, l + 1, 0, i.events.slice(r)), i.events.length = a, s(e);
		}
		return a(e);
	}
	function s(n) {
		if (o === l.length) {
			if (!t) return d(n);
			if (t.currentConstruct && t.currentConstruct.concrete) return h(n);
			i.interrupt = !!(t.currentConstruct && !t._gfmTableDynamicInterruptHack);
		}
		return i.containerState = {}, e.check(oH, c, f)(n);
	}
	function c(e) {
		return t && y(), g(o), d(e);
	}
	function f(e) {
		return i.parser.lazy[i.now().line] = o !== l.length, r = i.now().offset, h(e);
	}
	function d(t) {
		return i.containerState = {}, e.attempt(oH, p, h)(t);
	}
	function p(e) {
		return o++, l.push([i.currentConstruct, i.containerState]), d(e);
	}
	function h(r) {
		if (null === r) {
			t && y(), g(0), e.consume(r);
			return;
		}
		return t = t || i.parser.flow(i.now()), e.enter("chunkFlow", {
			_tokenizer: t,
			contentType: "flow",
			previous: n
		}), function t(n) {
			if (null === n) {
				m(e.exit("chunkFlow"), !0), g(0), e.consume(n);
				return;
			}
			return oP(n) ? (e.consume(n), m(e.exit("chunkFlow")), o = 0, i.interrupt = void 0, a) : (e.consume(n), t);
		}(r);
	}
	function m(e, l) {
		let a = i.sliceStream(e);
		if (l && a.push(null), e.previous = n, n && (n.next = e), n = e, t.defineSkip(e.start), t.write(a), i.parser.lazy[e.start.line]) {
			let e, n, l = t.events.length;
			for (; l--;) if (t.events[l][1].start.offset < r && (!t.events[l][1].end || t.events[l][1].end.offset > r)) return;
			let a = i.events.length, u = a;
			for (; u--;) if ("exit" === i.events[u][0] && "chunkFlow" === i.events[u][1].type) {
				if (e) {
					n = i.events[u][1].end;
					break;
				}
				e = !0;
			}
			for (g(o), l = a; l < i.events.length;) i.events[l][1].end = { ...n }, l++;
			ox(i.events, u + 1, 0, i.events.slice(a)), i.events.length = l;
		}
	}
	function g(t) {
		let n = l.length;
		for (; n-- > t;) {
			let t = l[n];
			i.containerState = t[1], t[0].exit.call(i, e);
		}
		l.length = t;
	}
	function y() {
		t.write([null]), n = void 0, t = void 0, i.containerState._closeFlow = void 0;
	}
} };
var oH = { tokenize: function(e, t, n) {
	return oV(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
} };
function o$(e) {
	return null === e || oF(e) || oz(e) ? 1 : oR(e) ? 2 : void 0;
}
function oq(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) {
		let l = e[i].resolveAll;
		l && !r.includes(l) && (t = l(t, n), r.push(l));
	}
	return t;
}
let oW = {
	name: "attention",
	resolveAll: function(e, t) {
		let n, r, i, l, o, a, u, s, c = -1;
		for (; ++c < e.length;) if ("enter" === e[c][0] && "attentionSequence" === e[c][1].type && e[c][1]._close) {
			for (n = c; n--;) if ("exit" === e[n][0] && "attentionSequence" === e[n][1].type && e[n][1]._open && t.sliceSerialize(e[n][1]).charCodeAt(0) === t.sliceSerialize(e[c][1]).charCodeAt(0)) {
				if ((e[n][1]._close || e[c][1]._open) && (e[c][1].end.offset - e[c][1].start.offset) % 3 && !((e[n][1].end.offset - e[n][1].start.offset + e[c][1].end.offset - e[c][1].start.offset) % 3)) continue;
				a = e[n][1].end.offset - e[n][1].start.offset > 1 && e[c][1].end.offset - e[c][1].start.offset > 1 ? 2 : 1;
				let f = { ...e[n][1].end }, d = { ...e[c][1].start };
				oK(f, -a), oK(d, a), l = {
					type: a > 1 ? "strongSequence" : "emphasisSequence",
					start: f,
					end: { ...e[n][1].end }
				}, o = {
					type: a > 1 ? "strongSequence" : "emphasisSequence",
					start: { ...e[c][1].start },
					end: d
				}, i = {
					type: a > 1 ? "strongText" : "emphasisText",
					start: { ...e[n][1].end },
					end: { ...e[c][1].start }
				}, r = {
					type: a > 1 ? "strong" : "emphasis",
					start: { ...l.start },
					end: { ...o.end }
				}, e[n][1].end = { ...l.start }, e[c][1].start = { ...o.end }, u = [], e[n][1].end.offset - e[n][1].start.offset && (u = ok(u, [[
					"enter",
					e[n][1],
					t
				], [
					"exit",
					e[n][1],
					t
				]])), u = ok(u, [
					[
						"enter",
						r,
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
						"enter",
						i,
						t
					]
				]), u = ok(u, oq(t.parser.constructs.insideSpan.null, e.slice(n + 1, c), t)), u = ok(u, [
					[
						"exit",
						i,
						t
					],
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
						"exit",
						r,
						t
					]
				]), e[c][1].end.offset - e[c][1].start.offset ? (s = 2, u = ok(u, [[
					"enter",
					e[c][1],
					t
				], [
					"exit",
					e[c][1],
					t
				]])) : s = 0, ox(e, n - 1, c - n + 3, u), c = n + u.length - s - 2;
				break;
			}
		}
		for (c = -1; ++c < e.length;) "attentionSequence" === e[c][1].type && (e[c][1].type = "data");
		return e;
	},
	tokenize: function(e, t) {
		let n, r = this.parser.constructs.attentionMarkers.null, i = this.previous, l = o$(i);
		return function(o) {
			return n = o, e.enter("attentionSequence"), function o(a) {
				if (a === n) return e.consume(a), o;
				let u = e.exit("attentionSequence"), s = o$(a), c = !s || 2 === s && l || r.includes(a), f = !l || 2 === l && s || r.includes(i);
				return u._open = !!(42 === n ? c : c && (l || !f)), u._close = !!(42 === n ? f : f && (s || !c)), t(a);
			}(o);
		};
	}
};
function oK(e, t) {
	e.column += t, e.offset += t, e._bufferIndex += t;
}
let oG = {
	partial: !0,
	tokenize: function(e, t, n) {
		return function(t) {
			return oI(t) ? oV(e, r, "linePrefix")(t) : r(t);
		};
		function r(e) {
			return null === e || oP(e) ? t(e) : n(e);
		}
	}
}, oQ = {
	continuation: { tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return oI(t) ? oV(e, i, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : i(t);
		};
		function i(r) {
			return e.attempt(oQ, t, n)(r);
		}
	} },
	exit: function(e) {
		e.exit("blockQuote");
	},
	name: "blockQuote",
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			if (62 === t) {
				let n = r.containerState;
				return n.open || (e.enter("blockQuote", { _container: !0 }), n.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(t), e.exit("blockQuoteMarker"), i;
			}
			return n(t);
		};
		function i(n) {
			return oI(n) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(n), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(n));
		}
	}
}, oZ = {
	name: "characterEscape",
	tokenize: function(e, t, n) {
		return function(t) {
			return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(t), e.exit("escapeMarker"), r;
		};
		function r(r) {
			return oD(r) ? (e.enter("characterEscapeValue"), e.consume(r), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(r);
		}
	}
}, oX = {
	name: "characterReference",
	tokenize: function(e, t, n) {
		let r, i, l = this, o = 0;
		return function(t) {
			return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(t), e.exit("characterReferenceMarker"), a;
		};
		function a(t) {
			return 35 === t ? (e.enter("characterReferenceMarkerNumeric"), e.consume(t), e.exit("characterReferenceMarkerNumeric"), u) : (e.enter("characterReferenceValue"), r = 31, i = oT, s(t));
		}
		function u(t) {
			return 88 === t || 120 === t ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(t), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), r = 6, i = oO, s) : (e.enter("characterReferenceValue"), r = 7, i = oM, s(t));
		}
		function s(a) {
			if (59 === a && o) {
				let r = e.exit("characterReferenceValue");
				return i !== oT || ob(l.sliceSerialize(r)) ? (e.enter("characterReferenceMarker"), e.consume(a), e.exit("characterReferenceMarker"), e.exit("characterReference"), t) : n(a);
			}
			return i(a) && o++ < r ? (e.consume(a), s) : n(a);
		}
	}
};
var oJ = {
	partial: !0,
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return null === t ? n(t) : (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i);
		};
		function i(e) {
			return r.parser.lazy[r.now().line] ? n(e) : t(e);
		}
	}
};
let oY = {
	concrete: !0,
	name: "codeFenced",
	tokenize: function(e, t, n) {
		let r, i = this, l = {
			partial: !0,
			tokenize: function(e, t, n) {
				let l = 0;
				return function(t) {
					return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), o;
				};
				function o(t) {
					return e.enter("codeFencedFence"), oI(t) ? oV(e, u, "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : u(t);
				}
				function u(t) {
					return t === r ? (e.enter("codeFencedFenceSequence"), function t(i) {
						return i === r ? (l++, e.consume(i), t) : l >= a ? (e.exit("codeFencedFenceSequence"), oI(i) ? oV(e, s, "whitespace")(i) : s(i)) : n(i);
					}(t)) : n(t);
				}
				function s(r) {
					return null === r || oP(r) ? (e.exit("codeFencedFence"), t(r)) : n(r);
				}
			}
		}, o = 0, a = 0;
		return function(t) {
			var l = t;
			let s = i.events[i.events.length - 1];
			return o = s && "linePrefix" === s[1].type ? s[2].sliceSerialize(s[1], !0).length : 0, r = l, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), function t(i) {
				return i === r ? (a++, e.consume(i), t) : a < 3 ? n(i) : (e.exit("codeFencedFenceSequence"), oI(i) ? oV(e, u, "whitespace")(i) : u(i));
			}(l);
		};
		function u(l) {
			return null === l || oP(l) ? (e.exit("codeFencedFence"), i.interrupt ? t(l) : e.check(oJ, c, h)(l)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", { contentType: "string" }), function t(i) {
				return null === i || oP(i) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), u(i)) : oI(i) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), oV(e, s, "whitespace")(i)) : 96 === i && i === r ? n(i) : (e.consume(i), t);
			}(l));
		}
		function s(t) {
			return null === t || oP(t) ? u(t) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", { contentType: "string" }), function t(i) {
				return null === i || oP(i) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), u(i)) : 96 === i && i === r ? n(i) : (e.consume(i), t);
			}(t));
		}
		function c(t) {
			return e.attempt(l, h, f)(t);
		}
		function f(t) {
			return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), d;
		}
		function d(t) {
			return o > 0 && oI(t) ? oV(e, p, "linePrefix", o + 1)(t) : p(t);
		}
		function p(t) {
			return null === t || oP(t) ? e.check(oJ, c, h)(t) : (e.enter("codeFlowValue"), function t(n) {
				return null === n || oP(n) ? (e.exit("codeFlowValue"), p(n)) : (e.consume(n), t);
			}(t));
		}
		function h(n) {
			return e.exit("codeFenced"), t(n);
		}
	}
}, o1 = {
	name: "codeIndented",
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return e.enter("codeIndented"), oV(e, i, "linePrefix", 5)(t);
		};
		function i(t) {
			let i = r.events[r.events.length - 1];
			return i && "linePrefix" === i[1].type && i[2].sliceSerialize(i[1], !0).length >= 4 ? function t(n) {
				return null === n ? l(n) : oP(n) ? e.attempt(o0, t, l)(n) : (e.enter("codeFlowValue"), function n(r) {
					return null === r || oP(r) ? (e.exit("codeFlowValue"), t(r)) : (e.consume(r), n);
				}(n));
			}(t) : n(t);
		}
		function l(n) {
			return e.exit("codeIndented"), t(n);
		}
	}
};
var o0 = {
	partial: !0,
	tokenize: function(e, t, n) {
		let r = this;
		return i;
		function i(t) {
			return r.parser.lazy[r.now().line] ? n(t) : oP(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i) : oV(e, l, "linePrefix", 5)(t);
		}
		function l(e) {
			let l = r.events[r.events.length - 1];
			return l && "linePrefix" === l[1].type && l[2].sliceSerialize(l[1], !0).length >= 4 ? t(e) : oP(e) ? i(e) : n(e);
		}
	}
}, o2 = class {
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
		let n = null == t ? Infinity : t;
		return n < this.left.length ? this.left.slice(e, n) : e > this.left.length ? this.right.slice(this.right.length - n + this.left.length, this.right.length - e + this.left.length).reverse() : this.left.slice(e).concat(this.right.slice(this.right.length - n + this.left.length).reverse());
	}
	splice(e, t, n) {
		this.setCursor(Math.trunc(e));
		let r = this.right.splice(this.right.length - (t || 0), Infinity);
		return n && o5(this.left, n), r.reverse();
	}
	pop() {
		return this.setCursor(Infinity), this.left.pop();
	}
	push(e) {
		this.setCursor(Infinity), this.left.push(e);
	}
	pushMany(e) {
		this.setCursor(Infinity), o5(this.left, e);
	}
	unshift(e) {
		this.setCursor(0), this.right.push(e);
	}
	unshiftMany(e) {
		this.setCursor(0), o5(this.right, e.reverse());
	}
	setCursor(e) {
		if (e !== this.left.length && (!(e > this.left.length) || 0 !== this.right.length) && (!(e < 0) || 0 !== this.left.length)) if (e < this.left.length) {
			let t = this.left.splice(e, Infinity);
			o5(this.right, t.reverse());
		} else {
			let t = this.right.splice(this.left.length + this.right.length - e, Infinity);
			o5(this.left, t.reverse());
		}
	}
};
function o5(e, t) {
	let n = 0;
	if (t.length < 1e4) e.push(...t);
	else for (; n < t.length;) e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
function o4(e) {
	let t, n, r, i, l, o, a, u = {}, s = -1, c = new o2(e);
	for (; ++s < c.length;) {
		for (; s in u;) s = u[s];
		if (t = c.get(s), s && "chunkFlow" === t[1].type && "listItemPrefix" === c.get(s - 1)[1].type && ((r = 0) < (o = t[1]._tokenizer.events).length && "lineEndingBlank" === o[r][1].type && (r += 2), r < o.length && "content" === o[r][1].type)) for (; ++r < o.length && "content" !== o[r][1].type;) "chunkText" === o[r][1].type && (o[r][1]._isInFirstContentOfListItem = !0, r++);
		if ("enter" === t[0]) t[1].contentType && (Object.assign(u, function(e, t) {
			let n, r, i = e.get(t)[1], l = e.get(t)[2], o = t - 1, a = [], u = i._tokenizer;
			!u && (u = l.parser[i.contentType](i.start), i._contentTypeTextTrailing && (u._contentTypeTextTrailing = !0));
			let s = u.events, c = [], f = {}, d = -1, p = i, h = 0, m = 0, g = [0];
			for (; p;) {
				for (; e.get(++o)[1] !== p;);
				a.push(o), !p._tokenizer && (n = l.sliceStream(p), p.next || n.push(null), r && u.defineSkip(p.start), p._isInFirstContentOfListItem && (u._gfmTasklistFirstContentOfListItem = !0), u.write(n), p._isInFirstContentOfListItem && (u._gfmTasklistFirstContentOfListItem = void 0)), r = p, p = p.next;
			}
			for (p = i; ++d < s.length;) "exit" === s[d][0] && "enter" === s[d - 1][0] && s[d][1].type === s[d - 1][1].type && s[d][1].start.line !== s[d][1].end.line && (m = d + 1, g.push(m), p._tokenizer = void 0, p.previous = void 0, p = p.next);
			for (u.events = [], p ? (p._tokenizer = void 0, p.previous = void 0) : g.pop(), d = g.length; d--;) {
				let t = s.slice(g[d], g[d + 1]), n = a.pop();
				c.push([n, n + t.length - 1]), e.splice(n, 2, t);
			}
			for (c.reverse(), d = -1; ++d < c.length;) f[h + c[d][0]] = h + c[d][1], h += c[d][1] - c[d][0] - 1;
			return f;
		}(c, s)), s = u[s], a = !0);
		else if (t[1]._container) {
			for (r = s, n = void 0; r--;) if ("lineEnding" === (i = c.get(r))[1].type || "lineEndingBlank" === i[1].type) "enter" === i[0] && (n && (c.get(n)[1].type = "lineEndingBlank"), i[1].type = "lineEnding", n = r);
			else if ("linePrefix" === i[1].type || "listItemIndent" === i[1].type);
			else break;
			n && (t[1].end = { ...c.get(n)[1].start }, (l = c.slice(n, s)).unshift(t), c.splice(n, s - n + 1, l));
		}
	}
	return ox(e, 0, Infinity, c.slice(0)), !a;
}
let o3 = {
	resolve: function(e) {
		return o4(e), e;
	},
	tokenize: function(e, t) {
		let n;
		return function(t) {
			return e.enter("content"), n = e.enter("chunkContent", { contentType: "content" }), r(t);
		};
		function r(t) {
			return null === t ? i(t) : oP(t) ? e.check(o6, l, i)(t) : (e.consume(t), r);
		}
		function i(n) {
			return e.exit("chunkContent"), e.exit("content"), t(n);
		}
		function l(t) {
			return e.consume(t), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
				contentType: "content",
				previous: n
			}), n = n.next, r;
		}
	}
};
var o6 = {
	partial: !0,
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), oV(e, i, "linePrefix");
		};
		function i(i) {
			if (null === i || oP(i)) return n(i);
			let l = r.events[r.events.length - 1];
			return !r.parser.constructs.disable.null.includes("codeIndented") && l && "linePrefix" === l[1].type && l[2].sliceSerialize(l[1], !0).length >= 4 ? t(i) : e.interrupt(r.parser.constructs.flow, n, t)(i);
		}
	}
};
function o9(e, t, n, r, i, l, o, a, u) {
	let s = u || Infinity, c = 0;
	return function(t) {
		return 60 === t ? (e.enter(r), e.enter(i), e.enter(l), e.consume(t), e.exit(l), f) : null === t || 32 === t || 41 === t || oL(t) ? n(t) : (e.enter(r), e.enter(o), e.enter(a), e.enter("chunkString", { contentType: "string" }), h(t));
	};
	function f(n) {
		return 62 === n ? (e.enter(l), e.consume(n), e.exit(l), e.exit(i), e.exit(r), t) : (e.enter(a), e.enter("chunkString", { contentType: "string" }), d(n));
	}
	function d(t) {
		return 62 === t ? (e.exit("chunkString"), e.exit(a), f(t)) : null === t || 60 === t || oP(t) ? n(t) : (e.consume(t), 92 === t ? p : d);
	}
	function p(t) {
		return 60 === t || 62 === t || 92 === t ? (e.consume(t), d) : d(t);
	}
	function h(i) {
		return !c && (null === i || 41 === i || oF(i)) ? (e.exit("chunkString"), e.exit(a), e.exit(o), e.exit(r), t(i)) : c < s && 40 === i ? (e.consume(i), c++, h) : 41 === i ? (e.consume(i), c--, h) : null === i || 32 === i || 40 === i || oL(i) ? n(i) : (e.consume(i), 92 === i ? m : h);
	}
	function m(t) {
		return 40 === t || 41 === t || 92 === t ? (e.consume(t), h) : h(t);
	}
}
function o8(e, t, n, r, i, l) {
	let o, a = this, u = 0;
	return function(t) {
		return e.enter(r), e.enter(i), e.consume(t), e.exit(i), e.enter(l), s;
	};
	function s(f) {
		return u > 999 || null === f || 91 === f || 93 === f && !o || 94 === f && !u && "_hiddenFootnoteSupport" in a.parser.constructs ? n(f) : 93 === f ? (e.exit(l), e.enter(i), e.consume(f), e.exit(i), e.exit(r), t) : oP(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), s) : (e.enter("chunkString", { contentType: "string" }), c(f));
	}
	function c(t) {
		return null === t || 91 === t || 93 === t || oP(t) || u++ > 999 ? (e.exit("chunkString"), s(t)) : (e.consume(t), o || (o = !oI(t)), 92 === t ? f : c);
	}
	function f(t) {
		return 91 === t || 92 === t || 93 === t ? (e.consume(t), u++, c) : c(t);
	}
}
function o7(e, t, n, r, i, l) {
	let o;
	return function(t) {
		return 34 === t || 39 === t || 40 === t ? (e.enter(r), e.enter(i), e.consume(t), e.exit(i), o = 40 === t ? 41 : t, a) : n(t);
	};
	function a(n) {
		return n === o ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t) : (e.enter(l), u(n));
	}
	function u(t) {
		return t === o ? (e.exit(l), a(o)) : null === t ? n(t) : oP(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), oV(e, u, "linePrefix")) : (e.enter("chunkString", { contentType: "string" }), s(t));
	}
	function s(t) {
		return t === o || null === t || oP(t) ? (e.exit("chunkString"), u(t)) : (e.consume(t), 92 === t ? c : s);
	}
	function c(t) {
		return t === o || 92 === t ? (e.consume(t), s) : s(t);
	}
}
function ae(e, t) {
	let n;
	return function r(i) {
		return oP(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : oI(i) ? oV(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
	};
}
var at = {
	partial: !0,
	tokenize: function(e, t, n) {
		return function(t) {
			return oF(t) ? ae(e, r)(t) : n(t);
		};
		function r(t) {
			return o7(e, i, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t);
		}
		function i(t) {
			return oI(t) ? oV(e, l, "whitespace")(t) : l(t);
		}
		function l(e) {
			return null === e || oP(e) ? t(e) : n(e);
		}
	}
};
let an = [
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
], ar = [
	"pre",
	"script",
	"style",
	"textarea"
];
var ai = {
	partial: !0,
	tokenize: function(e, t, n) {
		return function(r) {
			return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), e.attempt(oG, t, n);
		};
	}
}, al = {
	partial: !0,
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return oP(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i) : n(t);
		};
		function i(e) {
			return r.parser.lazy[r.now().line] ? n(e) : t(e);
		}
	}
};
let ao = {
	name: "labelEnd",
	resolveAll: function(e) {
		let t = -1, n = [];
		for (; ++t < e.length;) {
			let r = e[t][1];
			if (n.push(e[t]), "labelImage" === r.type || "labelLink" === r.type || "labelEnd" === r.type) {
				let e = "labelImage" === r.type ? 4 : 2;
				r.type = "data", t += e;
			}
		}
		return e.length !== n.length && ox(e, 0, e.length, n), e;
	},
	resolveTo: function(e, t) {
		let n, r, i, l, o = e.length, a = 0;
		for (; o--;) if (n = e[o][1], r) {
			if ("link" === n.type || "labelLink" === n.type && n._inactive) break;
			"enter" === e[o][0] && "labelLink" === n.type && (n._inactive = !0);
		} else if (i) {
			if ("enter" === e[o][0] && ("labelImage" === n.type || "labelLink" === n.type) && !n._balanced && (r = o, "labelLink" !== n.type)) {
				a = 2;
				break;
			}
		} else "labelEnd" === n.type && (i = o);
		let u = {
			type: "labelLink" === e[r][1].type ? "link" : "image",
			start: { ...e[r][1].start },
			end: { ...e[e.length - 1][1].end }
		}, s = {
			type: "label",
			start: { ...e[r][1].start },
			end: { ...e[i][1].end }
		}, c = {
			type: "labelText",
			start: { ...e[r + a + 2][1].end },
			end: { ...e[i - 2][1].start }
		};
		return l = ok(l = [[
			"enter",
			u,
			t
		], [
			"enter",
			s,
			t
		]], e.slice(r + 1, r + a + 3)), l = ok(l, [[
			"enter",
			c,
			t
		]]), l = ok(l, oq(t.parser.constructs.insideSpan.null, e.slice(r + a + 4, i - 3), t)), l = ok(l, [
			[
				"exit",
				c,
				t
			],
			e[i - 2],
			e[i - 1],
			[
				"exit",
				s,
				t
			]
		]), l = ok(l, e.slice(i + 1)), l = ok(l, [[
			"exit",
			u,
			t
		]]), ox(e, r, e.length, l), e;
	},
	tokenize: function(e, t, n) {
		let r, i, l = this, o = l.events.length;
		for (; o--;) if (("labelImage" === l.events[o][1].type || "labelLink" === l.events[o][1].type) && !l.events[o][1]._balanced) {
			r = l.events[o][1];
			break;
		}
		return function(t) {
			return r ? r._inactive ? c(t) : (i = l.parser.defined.includes(o_(l.sliceSerialize({
				start: r.end,
				end: l.now()
			}))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelEnd"), a) : n(t);
		};
		function a(t) {
			return 40 === t ? e.attempt(aa, s, i ? s : c)(t) : 91 === t ? e.attempt(au, s, i ? u : c)(t) : i ? s(t) : c(t);
		}
		function u(t) {
			return e.attempt(as, s, c)(t);
		}
		function s(e) {
			return t(e);
		}
		function c(e) {
			return r._balanced = !0, n(e);
		}
	}
};
var aa = { tokenize: function(e, t, n) {
	return function(t) {
		return e.enter("resource"), e.enter("resourceMarker"), e.consume(t), e.exit("resourceMarker"), r;
	};
	function r(t) {
		return oF(t) ? ae(e, i)(t) : i(t);
	}
	function i(t) {
		return 41 === t ? s(t) : o9(e, l, o, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(t);
	}
	function l(t) {
		return oF(t) ? ae(e, a)(t) : s(t);
	}
	function o(e) {
		return n(e);
	}
	function a(t) {
		return 34 === t || 39 === t || 40 === t ? o7(e, u, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : s(t);
	}
	function u(t) {
		return oF(t) ? ae(e, s)(t) : s(t);
	}
	function s(r) {
		return 41 === r ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), t) : n(r);
	}
} }, au = { tokenize: function(e, t, n) {
	let r = this;
	return function(t) {
		return o8.call(r, e, i, l, "reference", "referenceMarker", "referenceString")(t);
	};
	function i(e) {
		return r.parser.defined.includes(o_(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(e) : n(e);
	}
	function l(e) {
		return n(e);
	}
} }, as = { tokenize: function(e, t, n) {
	return function(t) {
		return e.enter("reference"), e.enter("referenceMarker"), e.consume(t), e.exit("referenceMarker"), r;
	};
	function r(r) {
		return 93 === r ? (e.enter("referenceMarker"), e.consume(r), e.exit("referenceMarker"), e.exit("reference"), t) : n(r);
	}
} };
let ac = {
	name: "labelStartImage",
	resolveAll: ao.resolveAll,
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(t), e.exit("labelImageMarker"), i;
		};
		function i(t) {
			return 91 === t ? (e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelImage"), l) : n(t);
		}
		function l(e) {
			return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e);
		}
	}
}, af = {
	name: "labelStartLink",
	resolveAll: ao.resolveAll,
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return e.enter("labelLink"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelLink"), i;
		};
		function i(e) {
			return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e);
		}
	}
}, ad = {
	name: "lineEnding",
	tokenize: function(e, t) {
		return function(n) {
			return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), oV(e, t, "linePrefix");
		};
	}
}, ap = {
	name: "thematicBreak",
	tokenize: function(e, t, n) {
		let r, i = 0;
		return function(l) {
			var o;
			return e.enter("thematicBreak"), r = o = l, function l(o) {
				return o === r ? (e.enter("thematicBreakSequence"), function t(n) {
					return n === r ? (e.consume(n), i++, t) : (e.exit("thematicBreakSequence"), oI(n) ? oV(e, l, "whitespace")(n) : l(n));
				}(o)) : i >= 3 && (null === o || oP(o)) ? (e.exit("thematicBreak"), t(o)) : n(o);
			}(o);
		};
	}
}, ah = {
	continuation: { tokenize: function(e, t, n) {
		let r = this;
		return r.containerState._closeFlow = void 0, e.check(oG, function(n) {
			return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, oV(e, t, "listItemIndent", r.containerState.size + 1)(n);
		}, function(n) {
			return r.containerState.furtherBlankLines || !oI(n) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, i(n)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(ag, t, i)(n));
		});
		function i(i) {
			return r.containerState._closeFlow = !0, r.interrupt = void 0, oV(e, e.attempt(ah, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(i);
		}
	} },
	exit: function(e) {
		e.exit(this.containerState.type);
	},
	name: "list",
	tokenize: function(e, t, n) {
		let r = this, i = r.events[r.events.length - 1], l = i && "linePrefix" === i[1].type ? i[2].sliceSerialize(i[1], !0).length : 0, o = 0;
		return function(t) {
			let i = r.containerState.type || (42 === t || 43 === t || 45 === t ? "listUnordered" : "listOrdered");
			if ("listUnordered" === i ? !r.containerState.marker || t === r.containerState.marker : oM(t)) {
				if (r.containerState.type || (r.containerState.type = i, e.enter(i, { _container: !0 })), "listUnordered" === i) return e.enter("listItemPrefix"), 42 === t || 45 === t ? e.check(ap, n, a)(t) : a(t);
				if (!r.interrupt || 49 === t) return e.enter("listItemPrefix"), e.enter("listItemValue"), function t(i) {
					return oM(i) && ++o < 10 ? (e.consume(i), t) : (!r.interrupt || o < 2) && (r.containerState.marker ? i === r.containerState.marker : 41 === i || 46 === i) ? (e.exit("listItemValue"), a(i)) : n(i);
				}(t);
			}
			return n(t);
		};
		function a(t) {
			return e.enter("listItemMarker"), e.consume(t), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || t, e.check(oG, r.interrupt ? n : u, e.attempt(am, c, s));
		}
		function u(e) {
			return r.containerState.initialBlankLine = !0, l++, c(e);
		}
		function s(t) {
			return oI(t) ? (e.enter("listItemPrefixWhitespace"), e.consume(t), e.exit("listItemPrefixWhitespace"), c) : n(t);
		}
		function c(n) {
			return r.containerState.size = l + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(n);
		}
	}
};
var am = {
	partial: !0,
	tokenize: function(e, t, n) {
		let r = this;
		return oV(e, function(e) {
			let i = r.events[r.events.length - 1];
			return !oI(e) && i && "listItemPrefixWhitespace" === i[1].type ? t(e) : n(e);
		}, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
	}
}, ag = {
	partial: !0,
	tokenize: function(e, t, n) {
		let r = this;
		return oV(e, function(e) {
			let i = r.events[r.events.length - 1];
			return i && "listItemIndent" === i[1].type && i[2].sliceSerialize(i[1], !0).length === r.containerState.size ? t(e) : n(e);
		}, "listItemIndent", r.containerState.size + 1);
	}
};
let av = {
	name: "setextUnderline",
	resolveTo: function(e, t) {
		let n, r, i, l = e.length;
		for (; l--;) if ("enter" === e[l][0]) {
			if ("content" === e[l][1].type) {
				n = l;
				break;
			}
			"paragraph" === e[l][1].type && (r = l);
		} else "content" === e[l][1].type && e.splice(l, 1), i || "definition" !== e[l][1].type || (i = l);
		let o = {
			type: "setextHeading",
			start: { ...e[n][1].start },
			end: { ...e[e.length - 1][1].end }
		};
		return e[r][1].type = "setextHeadingText", i ? (e.splice(r, 0, [
			"enter",
			o,
			t
		]), e.splice(i + 1, 0, [
			"exit",
			e[n][1],
			t
		]), e[n][1].end = { ...e[i][1].end }) : e[n][1] = o, e.push([
			"exit",
			o,
			t
		]), e;
	},
	tokenize: function(e, t, n) {
		let r, i = this;
		return function(t) {
			var o;
			let a, u = i.events.length;
			for (; u--;) if ("lineEnding" !== i.events[u][1].type && "linePrefix" !== i.events[u][1].type && "content" !== i.events[u][1].type) {
				a = "paragraph" === i.events[u][1].type;
				break;
			}
			return !i.parser.lazy[i.now().line] && (i.interrupt || a) ? (e.enter("setextHeadingLine"), r = t, o = t, e.enter("setextHeadingLineSequence"), function t(n) {
				return n === r ? (e.consume(n), t) : (e.exit("setextHeadingLineSequence"), oI(n) ? oV(e, l, "lineSuffix")(n) : l(n));
			}(o)) : n(t);
		};
		function l(r) {
			return null === r || oP(r) ? (e.exit("setextHeadingLine"), t(r)) : n(r);
		}
	}
}, ay = { tokenize: function(e) {
	let t = this, n = e.attempt(oG, function(r) {
		return null === r ? void e.consume(r) : (e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n);
	}, e.attempt(this.parser.constructs.flowInitial, r, oV(e, e.attempt(this.parser.constructs.flow, r, e.attempt(o3, r)), "linePrefix")));
	return n;
	function r(r) {
		return null === r ? void e.consume(r) : (e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), t.currentConstruct = void 0, n);
	}
} }, ab = { resolveAll: aS() }, ax = aw("string"), ak = aw("text");
function aw(e) {
	return {
		resolveAll: aS("text" === e ? aC : void 0),
		tokenize: function(t) {
			let n = this, r = this.parser.constructs[e], i = t.attempt(r, l, o);
			return l;
			function l(e) {
				return u(e) ? i(e) : o(e);
			}
			function o(e) {
				return null === e ? void t.consume(e) : (t.enter("data"), t.consume(e), a);
			}
			function a(e) {
				return u(e) ? (t.exit("data"), i(e)) : (t.consume(e), a);
			}
			function u(e) {
				if (null === e) return !0;
				let t = r[e], i = -1;
				if (t) for (; ++i < t.length;) {
					let e = t[i];
					if (!e.previous || e.previous.call(n, n.previous)) return !0;
				}
				return !1;
			}
		}
	};
}
function aS(e) {
	return function(t, n) {
		let r, i = -1;
		for (; ++i <= t.length;) void 0 === r ? t[i] && "data" === t[i][1].type && (r = i, i++) : t[i] && "data" === t[i][1].type || (i !== r + 2 && (t[r][1].end = t[i - 1][1].end, t.splice(r + 2, i - r - 2), i = r + 2), r = void 0);
		return e ? e(t, n) : t;
	};
}
function aC(e, t) {
	let n = 0;
	for (; ++n <= e.length;) if ((n === e.length || "lineEnding" === e[n][1].type) && "data" === e[n - 1][1].type) {
		let r, i = e[n - 1][1], l = t.sliceStream(i), o = l.length, a = -1, u = 0;
		for (; o--;) {
			let e = l[o];
			if ("string" == typeof e) {
				for (a = e.length; 32 === e.charCodeAt(a - 1);) u++, a--;
				if (a) break;
				a = -1;
			} else if (-2 === e) r = !0, u++;
			else if (-1 === e);
			else {
				o++;
				break;
			}
		}
		if (t._contentTypeTextTrailing && n === e.length && (u = 0), u) {
			let l = {
				type: n === e.length || r || u < 2 ? "lineSuffix" : "hardBreakTrailing",
				start: {
					_bufferIndex: o ? a : i.start._bufferIndex + a,
					_index: i.start._index + o,
					line: i.end.line,
					column: i.end.column - u,
					offset: i.end.offset - u
				},
				end: { ...i.end }
			};
			i.end = { ...l.start }, i.start.offset === i.end.offset ? Object.assign(i, l) : (e.splice(n, 0, [
				"enter",
				l,
				t
			], [
				"exit",
				l,
				t
			]), n += 2);
		}
		n++;
	}
	return e;
}
var a_ = e({
	attentionMarkers: () => aP,
	contentInitial: () => aT,
	disable: () => aF,
	document: () => aA,
	flow: () => aL,
	flowInitial: () => aE,
	insideSpan: () => aD,
	string: () => aM,
	text: () => aO
});
let aA = {
	42: ah,
	43: ah,
	45: ah,
	48: ah,
	49: ah,
	50: ah,
	51: ah,
	52: ah,
	53: ah,
	54: ah,
	55: ah,
	56: ah,
	57: ah,
	62: oQ
}, aT = { 91: {
	name: "definition",
	tokenize: function(e, t, n) {
		let r, i = this;
		return function(t) {
			var r;
			return e.enter("definition"), r = t, o8.call(i, e, l, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(r);
		};
		function l(t) {
			return (r = o_(i.sliceSerialize(i.events[i.events.length - 1][1]).slice(1, -1)), 58 === t) ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), o) : n(t);
		}
		function o(t) {
			return oF(t) ? ae(e, a)(t) : a(t);
		}
		function a(t) {
			return o9(e, u, n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(t);
		}
		function u(t) {
			return e.attempt(at, s, s)(t);
		}
		function s(t) {
			return oI(t) ? oV(e, c, "whitespace")(t) : c(t);
		}
		function c(l) {
			return null === l || oP(l) ? (e.exit("definition"), i.parser.defined.push(r), t(l)) : n(l);
		}
	}
} }, aE = {
	[-2]: o1,
	[-1]: o1,
	32: o1
}, aL = {
	35: {
		name: "headingAtx",
		resolve: function(e, t) {
			let n, r, i = e.length - 2, l = 3;
			return "whitespace" === e[3][1].type && (l += 2), i - 2 > l && "whitespace" === e[i][1].type && (i -= 2), "atxHeadingSequence" === e[i][1].type && (l === i - 1 || i - 4 > l && "whitespace" === e[i - 2][1].type) && (i -= l + 1 === i ? 2 : 4), i > l && (n = {
				type: "atxHeadingText",
				start: e[l][1].start,
				end: e[i][1].end
			}, r = {
				type: "chunkText",
				start: e[l][1].start,
				end: e[i][1].end,
				contentType: "text"
			}, ox(e, l, i - l + 1, [
				[
					"enter",
					n,
					t
				],
				[
					"enter",
					r,
					t
				],
				[
					"exit",
					r,
					t
				],
				[
					"exit",
					n,
					t
				]
			])), e;
		},
		tokenize: function(e, t, n) {
			let r = 0;
			return function(i) {
				var l;
				return e.enter("atxHeading"), l = i, e.enter("atxHeadingSequence"), function i(l) {
					return 35 === l && r++ < 6 ? (e.consume(l), i) : null === l || oF(l) ? (e.exit("atxHeadingSequence"), function n(r) {
						return 35 === r ? (e.enter("atxHeadingSequence"), function t(r) {
							return 35 === r ? (e.consume(r), t) : (e.exit("atxHeadingSequence"), n(r));
						}(r)) : null === r || oP(r) ? (e.exit("atxHeading"), t(r)) : oI(r) ? oV(e, n, "whitespace")(r) : (e.enter("atxHeadingText"), function t(r) {
							return null === r || 35 === r || oF(r) ? (e.exit("atxHeadingText"), n(r)) : (e.consume(r), t);
						}(r));
					}(l)) : n(l);
				}(l);
			};
		}
	},
	42: ap,
	45: [av, ap],
	60: {
		concrete: !0,
		name: "htmlFlow",
		resolveTo: function(e) {
			let t = e.length;
			for (; t-- && ("enter" !== e[t][0] || "htmlFlow" !== e[t][1].type););
			return t > 1 && "linePrefix" === e[t - 2][1].type && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
		},
		tokenize: function(e, t, n) {
			let r, i, l, o, a, u = this;
			return function(t) {
				var n;
				return n = t, e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(n), s;
			};
			function s(o) {
				return 33 === o ? (e.consume(o), c) : 47 === o ? (e.consume(o), i = !0, p) : 63 === o ? (e.consume(o), r = 3, u.interrupt ? t : P) : oA(o) ? (e.consume(o), l = String.fromCharCode(o), h) : n(o);
			}
			function c(i) {
				return 45 === i ? (e.consume(i), r = 2, f) : 91 === i ? (e.consume(i), r = 5, o = 0, d) : oA(i) ? (e.consume(i), r = 4, u.interrupt ? t : P) : n(i);
			}
			function f(r) {
				return 45 === r ? (e.consume(r), u.interrupt ? t : P) : n(r);
			}
			function d(r) {
				return r === "CDATA[".charCodeAt(o++) ? (e.consume(r), 6 === o) ? u.interrupt ? t : _ : d : n(r);
			}
			function p(t) {
				return oA(t) ? (e.consume(t), l = String.fromCharCode(t), h) : n(t);
			}
			function h(o) {
				if (null === o || 47 === o || 62 === o || oF(o)) {
					let a = 47 === o, s = l.toLowerCase();
					return !a && !i && ar.includes(s) ? (r = 1, u.interrupt ? t(o) : _(o)) : an.includes(l.toLowerCase()) ? (r = 6, a) ? (e.consume(o), m) : u.interrupt ? t(o) : _(o) : (r = 7, u.interrupt && !u.parser.lazy[u.now().line] ? n(o) : i ? function t(n) {
						return oI(n) ? (e.consume(n), t) : S(n);
					}(o) : g(o));
				}
				return 45 === o || oT(o) ? (e.consume(o), l += String.fromCharCode(o), h) : n(o);
			}
			function m(r) {
				return 62 === r ? (e.consume(r), u.interrupt ? t : _) : n(r);
			}
			function g(t) {
				return 47 === t ? (e.consume(t), S) : 58 === t || 95 === t || oA(t) ? (e.consume(t), y) : oI(t) ? (e.consume(t), g) : S(t);
			}
			function y(t) {
				return 45 === t || 46 === t || 58 === t || 95 === t || oT(t) ? (e.consume(t), y) : b(t);
			}
			function b(t) {
				return 61 === t ? (e.consume(t), x) : oI(t) ? (e.consume(t), b) : g(t);
			}
			function x(t) {
				return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t), a = t, k) : oI(t) ? (e.consume(t), x) : function t(n) {
					return null === n || 34 === n || 39 === n || 47 === n || 60 === n || 61 === n || 62 === n || 96 === n || oF(n) ? b(n) : (e.consume(n), t);
				}(t);
			}
			function k(t) {
				return t === a ? (e.consume(t), a = null, w) : null === t || oP(t) ? n(t) : (e.consume(t), k);
			}
			function w(e) {
				return 47 === e || 62 === e || oI(e) ? g(e) : n(e);
			}
			function S(t) {
				return 62 === t ? (e.consume(t), C) : n(t);
			}
			function C(t) {
				return null === t || oP(t) ? _(t) : oI(t) ? (e.consume(t), C) : n(t);
			}
			function _(t) {
				return 45 === t && 2 === r ? (e.consume(t), L) : 60 === t && 1 === r ? (e.consume(t), M) : 62 === t && 4 === r ? (e.consume(t), F) : 63 === t && 3 === r ? (e.consume(t), P) : 93 === t && 5 === r ? (e.consume(t), D) : oP(t) && (6 === r || 7 === r) ? (e.exit("htmlFlowData"), e.check(ai, I, A)(t)) : null === t || oP(t) ? (e.exit("htmlFlowData"), A(t)) : (e.consume(t), _);
			}
			function A(t) {
				return e.check(al, T, I)(t);
			}
			function T(t) {
				return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), E;
			}
			function E(t) {
				return null === t || oP(t) ? A(t) : (e.enter("htmlFlowData"), _(t));
			}
			function L(t) {
				return 45 === t ? (e.consume(t), P) : _(t);
			}
			function M(t) {
				return 47 === t ? (e.consume(t), l = "", O) : _(t);
			}
			function O(t) {
				if (62 === t) {
					let n = l.toLowerCase();
					return ar.includes(n) ? (e.consume(t), F) : _(t);
				}
				return oA(t) && l.length < 8 ? (e.consume(t), l += String.fromCharCode(t), O) : _(t);
			}
			function D(t) {
				return 93 === t ? (e.consume(t), P) : _(t);
			}
			function P(t) {
				return 62 === t ? (e.consume(t), F) : 45 === t && 2 === r ? (e.consume(t), P) : _(t);
			}
			function F(t) {
				return null === t || oP(t) ? (e.exit("htmlFlowData"), I(t)) : (e.consume(t), F);
			}
			function I(n) {
				return e.exit("htmlFlow"), t(n);
			}
		}
	},
	61: av,
	95: ap,
	96: oY,
	126: oY
}, aM = {
	38: oX,
	92: oZ
}, aO = {
	[-5]: ad,
	[-4]: ad,
	[-3]: ad,
	33: ac,
	38: oX,
	42: oW,
	60: [{
		name: "autolink",
		tokenize: function(e, t, n) {
			let r = 0;
			return function(t) {
				return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), i;
			};
			function i(t) {
				return oA(t) ? (e.consume(t), l) : 64 === t ? n(t) : a(t);
			}
			function l(t) {
				return 43 === t || 45 === t || 46 === t || oT(t) ? (r = 1, function t(n) {
					return 58 === n ? (e.consume(n), r = 0, o) : (43 === n || 45 === n || 46 === n || oT(n)) && r++ < 32 ? (e.consume(n), t) : (r = 0, a(n));
				}(t)) : a(t);
			}
			function o(r) {
				return 62 === r ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(r), e.exit("autolinkMarker"), e.exit("autolink"), t) : null === r || 32 === r || 60 === r || oL(r) ? n(r) : (e.consume(r), o);
			}
			function a(t) {
				return 64 === t ? (e.consume(t), u) : oE(t) ? (e.consume(t), a) : n(t);
			}
			function u(i) {
				return oT(i) ? function i(l) {
					return 46 === l ? (e.consume(l), r = 0, u) : 62 === l ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(l), e.exit("autolinkMarker"), e.exit("autolink"), t) : function t(l) {
						if ((45 === l || oT(l)) && r++ < 63) {
							let n = 45 === l ? t : i;
							return e.consume(l), n;
						}
						return n(l);
					}(l);
				}(i) : n(i);
			}
		}
	}, {
		name: "htmlText",
		tokenize: function(e, t, n) {
			let r, i, l, o = this;
			return function(t) {
				return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), a;
			};
			function a(t) {
				return 33 === t ? (e.consume(t), u) : 47 === t ? (e.consume(t), k) : 63 === t ? (e.consume(t), b) : oA(t) ? (e.consume(t), S) : n(t);
			}
			function u(t) {
				return 45 === t ? (e.consume(t), s) : 91 === t ? (e.consume(t), i = 0, p) : oA(t) ? (e.consume(t), y) : n(t);
			}
			function s(t) {
				return 45 === t ? (e.consume(t), d) : n(t);
			}
			function c(t) {
				return null === t ? n(t) : 45 === t ? (e.consume(t), f) : oP(t) ? (l = c, O(t)) : (e.consume(t), c);
			}
			function f(t) {
				return 45 === t ? (e.consume(t), d) : c(t);
			}
			function d(e) {
				return 62 === e ? M(e) : 45 === e ? f(e) : c(e);
			}
			function p(t) {
				return t === "CDATA[".charCodeAt(i++) ? (e.consume(t), 6 === i ? h : p) : n(t);
			}
			function h(t) {
				return null === t ? n(t) : 93 === t ? (e.consume(t), m) : oP(t) ? (l = h, O(t)) : (e.consume(t), h);
			}
			function m(t) {
				return 93 === t ? (e.consume(t), g) : h(t);
			}
			function g(t) {
				return 62 === t ? M(t) : 93 === t ? (e.consume(t), g) : h(t);
			}
			function y(t) {
				return null === t || 62 === t ? M(t) : oP(t) ? (l = y, O(t)) : (e.consume(t), y);
			}
			function b(t) {
				return null === t ? n(t) : 63 === t ? (e.consume(t), x) : oP(t) ? (l = b, O(t)) : (e.consume(t), b);
			}
			function x(e) {
				return 62 === e ? M(e) : b(e);
			}
			function k(t) {
				return oA(t) ? (e.consume(t), w) : n(t);
			}
			function w(t) {
				return 45 === t || oT(t) ? (e.consume(t), w) : function t(n) {
					return oP(n) ? (l = t, O(n)) : oI(n) ? (e.consume(n), t) : M(n);
				}(t);
			}
			function S(t) {
				return 45 === t || oT(t) ? (e.consume(t), S) : 47 === t || 62 === t || oF(t) ? C(t) : n(t);
			}
			function C(t) {
				return 47 === t ? (e.consume(t), M) : 58 === t || 95 === t || oA(t) ? (e.consume(t), _) : oP(t) ? (l = C, O(t)) : oI(t) ? (e.consume(t), C) : M(t);
			}
			function _(t) {
				return 45 === t || 46 === t || 58 === t || 95 === t || oT(t) ? (e.consume(t), _) : function t(n) {
					return 61 === n ? (e.consume(n), A) : oP(n) ? (l = t, O(n)) : oI(n) ? (e.consume(n), t) : C(n);
				}(t);
			}
			function A(t) {
				return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t), r = t, T) : oP(t) ? (l = A, O(t)) : oI(t) ? (e.consume(t), A) : (e.consume(t), E);
			}
			function T(t) {
				return t === r ? (e.consume(t), r = void 0, L) : null === t ? n(t) : oP(t) ? (l = T, O(t)) : (e.consume(t), T);
			}
			function E(t) {
				return null === t || 34 === t || 39 === t || 60 === t || 61 === t || 96 === t ? n(t) : 47 === t || 62 === t || oF(t) ? C(t) : (e.consume(t), E);
			}
			function L(e) {
				return 47 === e || 62 === e || oF(e) ? C(e) : n(e);
			}
			function M(r) {
				return 62 === r ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(r);
			}
			function O(t) {
				return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), D;
			}
			function D(t) {
				return oI(t) ? oV(e, P, "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : P(t);
			}
			function P(t) {
				return e.enter("htmlTextData"), l(t);
			}
		}
	}],
	91: af,
	92: [{
		name: "hardBreakEscape",
		tokenize: function(e, t, n) {
			return function(t) {
				return e.enter("hardBreakEscape"), e.consume(t), r;
			};
			function r(r) {
				return oP(r) ? (e.exit("hardBreakEscape"), t(r)) : n(r);
			}
		}
	}, oZ],
	93: ao,
	95: oW,
	96: {
		name: "codeText",
		previous: function(e) {
			return 96 !== e || "characterEscape" === this.events[this.events.length - 1][1].type;
		},
		resolve: function(e) {
			let t, n, r = e.length - 4, i = 3;
			if (("lineEnding" === e[3][1].type || "space" === e[i][1].type) && ("lineEnding" === e[r][1].type || "space" === e[r][1].type)) {
				for (t = i; ++t < r;) if ("codeTextData" === e[t][1].type) {
					e[i][1].type = "codeTextPadding", e[r][1].type = "codeTextPadding", i += 2, r -= 2;
					break;
				}
			}
			for (t = i - 1, r++; ++t <= r;) void 0 === n ? t !== r && "lineEnding" !== e[t][1].type && (n = t) : (t === r || "lineEnding" === e[t][1].type) && (e[n][1].type = "codeTextData", t !== n + 2 && (e[n][1].end = e[t - 1][1].end, e.splice(n + 2, t - n - 2), r -= t - n - 2, t = n + 2), n = void 0);
			return e;
		},
		tokenize: function(e, t, n) {
			let r, i, l = 0;
			return function(t) {
				return e.enter("codeText"), e.enter("codeTextSequence"), function t(n) {
					return 96 === n ? (e.consume(n), l++, t) : (e.exit("codeTextSequence"), o(n));
				}(t);
			};
			function o(u) {
				return null === u ? n(u) : 32 === u ? (e.enter("space"), e.consume(u), e.exit("space"), o) : 96 === u ? (i = e.enter("codeTextSequence"), r = 0, function n(o) {
					return 96 === o ? (e.consume(o), r++, n) : r === l ? (e.exit("codeTextSequence"), e.exit("codeText"), t(o)) : (i.type = "codeTextData", a(o));
				}(u)) : oP(u) ? (e.enter("lineEnding"), e.consume(u), e.exit("lineEnding"), o) : (e.enter("codeTextData"), a(u));
			}
			function a(t) {
				return null === t || 32 === t || 96 === t || oP(t) ? (e.exit("codeTextData"), o(t)) : (e.consume(t), a);
			}
		}
	}
}, aD = { null: [oW, ab] }, aP = { null: [42, 95] }, aF = { null: [] };
var aI = /[\0\t\n\r]/g, aR = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function az(e, t, n) {
	if (t) return t;
	if (35 === n.charCodeAt(0)) {
		let e = n.charCodeAt(1), t = 120 === e || 88 === e;
		return oC(n.slice(t ? 2 : 1), t ? 16 : 10);
	}
	return ob(n) || e;
}
function aN(e) {
	return e && "object" == typeof e ? "position" in e || "type" in e ? aV(e.position) : "start" in e || "end" in e ? aV(e) : "line" in e || "column" in e ? aj(e) : "" : "";
}
function aj(e) {
	return aB(e && e.line) + ":" + aB(e && e.column);
}
function aV(e) {
	return aj(e && e.start) + "-" + aj(e && e.end);
}
function aB(e) {
	return e && "number" == typeof e ? e : 1;
}
var aU = {}.hasOwnProperty;
function aH(e, t, n) {
	let r, i, l, o;
	return "string" != typeof t && (n = t, t = void 0), (function(e) {
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
				autolink: r(y),
				autolinkProtocol: s,
				autolinkEmail: s,
				atxHeading: r(h),
				blockQuote: r(function() {
					return {
						type: "blockquote",
						children: []
					};
				}),
				characterEscape: s,
				characterReference: s,
				codeFenced: r(p),
				codeFencedFenceInfo: i,
				codeFencedFenceMeta: i,
				codeIndented: r(p, i),
				codeText: r(function() {
					return {
						type: "inlineCode",
						value: ""
					};
				}, i),
				codeTextData: s,
				data: s,
				codeFlowValue: s,
				definition: r(function() {
					return {
						type: "definition",
						identifier: "",
						label: null,
						title: null,
						url: ""
					};
				}),
				definitionDestinationString: i,
				definitionLabelString: i,
				definitionTitleString: i,
				emphasis: r(function() {
					return {
						type: "emphasis",
						children: []
					};
				}),
				hardBreakEscape: r(m),
				hardBreakTrailing: r(m),
				htmlFlow: r(g, i),
				htmlFlowData: s,
				htmlText: r(g, i),
				htmlTextData: s,
				image: r(function() {
					return {
						type: "image",
						title: null,
						url: "",
						alt: null
					};
				}),
				label: i,
				link: r(y),
				listItem: r(function(e) {
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
				listOrdered: r(b, function() {
					this.data.expectingFirstListItemValue = !0;
				}),
				listUnordered: r(b),
				paragraph: r(function() {
					return {
						type: "paragraph",
						children: []
					};
				}),
				reference: function() {
					this.data.referenceType = "collapsed";
				},
				referenceString: i,
				resourceDestinationString: i,
				resourceTitleString: i,
				setextHeading: r(h),
				strong: r(function() {
					return {
						type: "strong",
						children: []
					};
				}),
				thematicBreak: r(function() {
					return { type: "thematicBreak" };
				})
			},
			exit: {
				atxHeading: o(),
				atxHeadingSequence: function(e) {
					let t = this.stack[this.stack.length - 1];
					t.depth || (t.depth = this.sliceSerialize(e).length);
				},
				autolink: o(),
				autolinkEmail: function(e) {
					c.call(this, e), this.stack[this.stack.length - 1].url = "mailto:" + this.sliceSerialize(e);
				},
				autolinkProtocol: function(e) {
					c.call(this, e), this.stack[this.stack.length - 1].url = this.sliceSerialize(e);
				},
				blockQuote: o(),
				characterEscapeValue: c,
				characterReferenceMarkerHexadecimal: d,
				characterReferenceMarkerNumeric: d,
				characterReferenceValue: function(e) {
					let t, n = this.sliceSerialize(e), r = this.data.characterReferenceType;
					r ? (t = oC(n, "characterReferenceMarkerNumeric" === r ? 10 : 16), this.data.characterReferenceType = void 0) : t = ob(n);
					let i = this.stack[this.stack.length - 1];
					i.value += t;
				},
				characterReference: function(e) {
					this.stack.pop().position.end = a$(e.end);
				},
				codeFenced: o(function() {
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
				codeFlowValue: c,
				codeIndented: o(function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].value = e.replace(/(\r?\n|\r)$/g, "");
				}),
				codeText: o(function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].value = e;
				}),
				codeTextData: c,
				data: c,
				definition: o(),
				definitionDestinationString: function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].url = e;
				},
				definitionLabelString: function(e) {
					let t = this.resume(), n = this.stack[this.stack.length - 1];
					n.label = t, n.identifier = o_(this.sliceSerialize(e)).toLowerCase();
				},
				definitionTitleString: function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].title = e;
				},
				emphasis: o(),
				hardBreakEscape: o(f),
				hardBreakTrailing: o(f),
				htmlFlow: o(function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].value = e;
				}),
				htmlFlowData: c,
				htmlText: o(function() {
					let e = this.resume();
					this.stack[this.stack.length - 1].value = e;
				}),
				htmlTextData: c,
				image: o(function() {
					let e = this.stack[this.stack.length - 1];
					if (this.data.inReference) {
						let t = this.data.referenceType || "shortcut";
						e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
					} else delete e.identifier, delete e.label;
					this.data.referenceType = void 0;
				}),
				label: function() {
					let e = this.stack[this.stack.length - 1], t = this.resume(), n = this.stack[this.stack.length - 1];
					this.data.inReference = !0, "link" === n.type ? n.children = e.children : n.alt = t;
				},
				labelText: function(e) {
					let t = this.sliceSerialize(e), n = this.stack[this.stack.length - 2];
					n.label = t.replace(aR, az), n.identifier = o_(t).toLowerCase();
				},
				lineEnding: function(e) {
					let n = this.stack[this.stack.length - 1];
					if (this.data.atHardBreak) {
						n.children[n.children.length - 1].position.end = a$(e.end), this.data.atHardBreak = void 0;
						return;
					}
					!this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(n.type) && (s.call(this, e), c.call(this, e));
				},
				link: o(function() {
					let e = this.stack[this.stack.length - 1];
					if (this.data.inReference) {
						let t = this.data.referenceType || "shortcut";
						e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
					} else delete e.identifier, delete e.label;
					this.data.referenceType = void 0;
				}),
				listItem: o(),
				listOrdered: o(),
				listUnordered: o(),
				paragraph: o(),
				referenceString: function(e) {
					let t = this.resume(), n = this.stack[this.stack.length - 1];
					n.label = t, n.identifier = o_(this.sliceSerialize(e)).toLowerCase(), this.data.referenceType = "full";
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
				setextHeading: o(function() {
					this.data.setextHeadingSlurpLineEnding = void 0;
				}),
				setextHeadingLineSequence: function(e) {
					this.stack[this.stack.length - 1].depth = 61 === this.sliceSerialize(e).codePointAt(0) ? 1 : 2;
				},
				setextHeadingText: function() {
					this.data.setextHeadingSlurpLineEnding = !0;
				},
				strong: o(),
				thematicBreak: o()
			}
		};
		(function e(t, n) {
			let r = -1;
			for (; ++r < n.length;) {
				let i = n[r];
				Array.isArray(i) ? e(t, i) : function(e, t) {
					let n;
					for (n in t) if (aU.call(t, n)) switch (n) {
						case "canContainEols": {
							let r = t[n];
							r && e[n].push(...r);
							break;
						}
						case "transforms": {
							let r = t[n];
							r && e[n].push(...r);
							break;
						}
						case "enter":
						case "exit": {
							let r = t[n];
							r && Object.assign(e[n], r);
						}
					}
				}(t, i);
			}
		})(t, (e || {}).mdastExtensions || []);
		let n = {};
		return function(e) {
			let r = {
				type: "root",
				children: []
			}, o = {
				stack: [r],
				tokenStack: [],
				config: t,
				enter: l,
				exit: a,
				buffer: i,
				resume: u,
				data: n
			}, s = [], c = -1;
			for (; ++c < e.length;) ("listOrdered" === e[c][1].type || "listUnordered" === e[c][1].type) && ("enter" === e[c][0] ? s.push(c) : c = function(e, t, n) {
				let r, i, l, o, a = t - 1, u = -1, s = !1;
				for (; ++a <= n;) {
					let t = e[a];
					switch (t[1].type) {
						case "listUnordered":
						case "listOrdered":
						case "blockQuote":
							"enter" === t[0] ? u++ : u--, o = void 0;
							break;
						case "lineEndingBlank":
							"enter" === t[0] && (!r || o || u || l || (l = a), o = void 0);
							break;
						case "linePrefix":
						case "listItemValue":
						case "listItemMarker":
						case "listItemPrefix":
						case "listItemPrefixWhitespace": break;
						default: o = void 0;
					}
					if (!u && "enter" === t[0] && "listItemPrefix" === t[1].type || -1 === u && "exit" === t[0] && ("listUnordered" === t[1].type || "listOrdered" === t[1].type)) {
						if (r) {
							let o = a;
							for (i = void 0; o--;) {
								let t = e[o];
								if ("lineEnding" === t[1].type || "lineEndingBlank" === t[1].type) {
									if ("exit" === t[0]) continue;
									i && (e[i][1].type = "lineEndingBlank", s = !0), t[1].type = "lineEnding", i = o;
								} else if ("linePrefix" === t[1].type || "blockQuotePrefix" === t[1].type || "blockQuotePrefixWhitespace" === t[1].type || "blockQuoteMarker" === t[1].type || "listItemIndent" === t[1].type);
								else break;
							}
							l && (!i || l < i) && (r._spread = !0), r.end = Object.assign({}, i ? e[i][1].start : t[1].end), e.splice(i || a, 0, [
								"exit",
								r,
								t[2]
							]), a++, n++;
						}
						if ("listItemPrefix" === t[1].type) {
							let i = {
								type: "listItem",
								_spread: !1,
								start: Object.assign({}, t[1].start),
								end: void 0
							};
							r = i, e.splice(a, 0, [
								"enter",
								i,
								t[2]
							]), a++, n++, l = void 0, o = !0;
						}
					}
				}
				return e[t][1]._spread = s, n;
			}(e, s.pop(), c));
			for (c = -1; ++c < e.length;) {
				let n = t[e[c][0]];
				aU.call(n, e[c][1].type) && n[e[c][1].type].call(Object.assign({ sliceSerialize: e[c][2].sliceSerialize }, o), e[c][1]);
			}
			if (o.tokenStack.length > 0) {
				let e = o.tokenStack[o.tokenStack.length - 1];
				(e[1] || aq).call(o, void 0, e[0]);
			}
			for (r.position = {
				start: a$(e.length > 0 ? e[0][1].start : {
					line: 1,
					column: 1,
					offset: 0
				}),
				end: a$(e.length > 0 ? e[e.length - 2][1].end : {
					line: 1,
					column: 1,
					offset: 0
				})
			}, c = -1; ++c < t.transforms.length;) r = t.transforms[c](r) || r;
			return r;
		};
		function r(e, t) {
			return function(n) {
				l.call(this, e(n), n), t && t.call(this, n);
			};
		}
		function i() {
			this.stack.push({
				type: "fragment",
				children: []
			});
		}
		function l(e, t, n) {
			this.stack[this.stack.length - 1].children.push(e), this.stack.push(e), this.tokenStack.push([t, n || void 0]), e.position = {
				start: a$(t.start),
				end: void 0
			};
		}
		function o(e) {
			return function(t) {
				e && e.call(this, t), a.call(this, t);
			};
		}
		function a(e, t) {
			let n = this.stack.pop(), r = this.tokenStack.pop();
			if (r) r[0].type !== e.type && (t ? t.call(this, e, r[0]) : (r[1] || aq).call(this, e, r[0]));
			else throw Error("Cannot close `" + e.type + "` (" + aN({
				start: e.start,
				end: e.end
			}) + "): it’s not open");
			n.position.end = a$(e.end);
		}
		function u() {
			return og(this.stack.pop(), "boolean" != typeof om.includeImageAlt || om.includeImageAlt, "boolean" != typeof om.includeHtml || om.includeHtml);
		}
		function s(e) {
			let t = this.stack[this.stack.length - 1].children, n = t[t.length - 1];
			n && "text" === n.type || ((n = {
				type: "text",
				value: ""
			}).position = {
				start: a$(e.start),
				end: void 0
			}, t.push(n)), this.stack.push(n);
		}
		function c(e) {
			let t = this.stack.pop();
			t.value += this.sliceSerialize(e), t.position.end = a$(e.end);
		}
		function f() {
			this.data.atHardBreak = !0;
		}
		function d(e) {
			this.data.characterReferenceType = e.type;
		}
		function p() {
			return {
				type: "code",
				lang: null,
				meta: null,
				value: ""
			};
		}
		function h() {
			return {
				type: "heading",
				depth: 0,
				children: []
			};
		}
		function m() {
			return { type: "break" };
		}
		function g() {
			return {
				type: "html",
				value: ""
			};
		}
		function y() {
			return {
				type: "link",
				title: null,
				url: "",
				children: []
			};
		}
		function b(e) {
			return {
				type: "list",
				ordered: "listOrdered" === e.type,
				start: null,
				spread: e._spread,
				children: []
			};
		}
	})(n)(function(e) {
		for (; !o4(e););
		return e;
	}((function(e) {
		let t = {
			constructs: oS([a_, ...(e || {}).extensions || []]),
			content: n(oB),
			defined: [],
			document: n(oU),
			flow: n(ay),
			lazy: {},
			string: n(ax),
			text: n(ak)
		};
		return t;
		function n(e) {
			return function(n) {
				return function(e, t, n) {
					let r = {
						_bufferIndex: -1,
						_index: 0,
						line: n && n.line || 1,
						column: n && n.column || 1,
						offset: n && n.offset || 0
					}, i = {}, l = [], o = [], a = [], u = {
						attempt: h(function(e, t) {
							m(e, t.from);
						}),
						check: h(p),
						consume: function(e) {
							oP(e) ? (r.line++, r.column = 1, r.offset += -3 === e ? 2 : 1, g()) : -1 !== e && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === o[r._index].length && (r._bufferIndex = -1, r._index++)), s.previous = e;
						},
						enter: function(e, t) {
							let n = t || {};
							return n.type = e, n.start = d(), s.events.push([
								"enter",
								n,
								s
							]), a.push(n), n;
						},
						exit: function(e) {
							let t = a.pop();
							return t.end = d(), s.events.push([
								"exit",
								t,
								s
							]), t;
						},
						interrupt: h(p, { interrupt: !0 })
					}, s = {
						code: null,
						containerState: {},
						defineSkip: function(e) {
							i[e.line] = e.column, g();
						},
						events: [],
						now: d,
						parser: e,
						previous: null,
						sliceSerialize: function(e, t) {
							return function(e, t) {
								let n, r = -1, i = [];
								for (; ++r < e.length;) {
									let l, o = e[r];
									if ("string" == typeof o) l = o;
									else switch (o) {
										case -5:
											l = "\r";
											break;
										case -4:
											l = "\n";
											break;
										case -3:
											l = "\r\n";
											break;
										case -2:
											l = t ? " " : "	";
											break;
										case -1:
											if (!t && n) continue;
											l = " ";
											break;
										default: l = String.fromCharCode(o);
									}
									n = -2 === o, i.push(l);
								}
								return i.join("");
							}(f(e), t);
						},
						sliceStream: f,
						write: function(e) {
							return (o = ok(o, e), function() {
								let e;
								for (; r._index < o.length;) {
									let n = o[r._index];
									if ("string" == typeof n) for (e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === e && r._bufferIndex < n.length;) {
										var t = n.charCodeAt(r._bufferIndex);
										c = c(t);
									}
									else c = c(n);
								}
							}(), null !== o[o.length - 1]) ? [] : (m(t, 0), s.events = oq(l, s.events, s), s.events);
						}
					}, c = t.tokenize.call(s, u);
					return t.resolveAll && l.push(t), s;
					function f(e) {
						return function(e, t) {
							let n, r = t.start._index, i = t.start._bufferIndex, l = t.end._index, o = t.end._bufferIndex;
							if (r === l) n = [e[r].slice(i, o)];
							else {
								if (n = e.slice(r, l), i > -1) {
									let e = n[0];
									"string" == typeof e ? n[0] = e.slice(i) : n.shift();
								}
								o > 0 && n.push(e[l].slice(0, o));
							}
							return n;
						}(o, e);
					}
					function d() {
						let { _bufferIndex: e, _index: t, line: n, column: i, offset: l } = r;
						return {
							_bufferIndex: e,
							_index: t,
							line: n,
							column: i,
							offset: l
						};
					}
					function p(e, t) {
						t.restore();
					}
					function h(e, t) {
						return function(n, i, l) {
							var o;
							let c, f, p, h;
							return Array.isArray(n) ? m(n) : "tokenize" in n ? m([n]) : (o = n, function(e) {
								let t = null !== e && o[e], n = null !== e && o.null;
								return m([...Array.isArray(t) ? t : t ? [t] : [], ...Array.isArray(n) ? n : n ? [n] : []])(e);
							});
							function m(e) {
								return (c = e, f = 0, 0 === e.length) ? l : y(e[f]);
							}
							function y(e) {
								return function(n) {
									return (h = function() {
										let e = d(), t = s.previous, n = s.currentConstruct, i = s.events.length, l = Array.from(a);
										return {
											from: i,
											restore: function() {
												r = e, s.previous = t, s.currentConstruct = n, s.events.length = i, a = l, g();
											}
										};
									}(), p = e, e.partial || (s.currentConstruct = e), e.name && s.parser.constructs.disable.null.includes(e.name)) ? x(n) : e.tokenize.call(t ? Object.assign(Object.create(s), t) : s, u, b, x)(n);
								};
							}
							function b(t) {
								return e(p, h), i;
							}
							function x(e) {
								return (h.restore(), ++f < c.length) ? y(c[f]) : l;
							}
						};
					}
					function m(e, t) {
						e.resolveAll && !l.includes(e) && l.push(e), e.resolve && ox(s.events, t, s.events.length - t, e.resolve(s.events.slice(t), s)), e.resolveTo && (s.events = e.resolveTo(s.events, s));
					}
					function g() {
						r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
					}
				}(t, e, n);
			};
		}
	})(n).document().write((i = 1, l = "", o = !0, function(e, t, n) {
		let a, u, s, c, f, d = [];
		for (e = l + ("string" == typeof e ? e.toString() : new TextDecoder(t || void 0).decode(e)), s = 0, l = "", o && (65279 === e.charCodeAt(0) && s++, o = void 0); s < e.length;) {
			if (aI.lastIndex = s, c = (a = aI.exec(e)) && void 0 !== a.index ? a.index : e.length, f = e.charCodeAt(c), !a) {
				l = e.slice(s);
				break;
			}
			if (10 === f && s === c && r) d.push(-3), r = void 0;
			else switch (r && (d.push(-5), r = void 0), s < c && (d.push(e.slice(s, c)), i += c - s), f) {
				case 0:
					d.push(65533), i++;
					break;
				case 9:
					for (u = 4 * Math.ceil(i / 4), d.push(-2); i++ < u;) d.push(-1);
					break;
				case 10:
					d.push(-4), i = 1;
					break;
				default: r = !0, i = 1;
			}
			s = c + 1;
		}
		return n && (r && d.push(-5), l && d.push(l), d.push(null)), d;
	})(e, t, !0))));
}
function a$(e) {
	return {
		line: e.line,
		column: e.column,
		offset: e.offset
	};
}
function aq(e, t) {
	if (e) throw Error("Cannot close `" + e.type + "` (" + aN({
		start: e.start,
		end: e.end
	}) + "): a different token (`" + t.type + "`, " + aN({
		start: t.start,
		end: t.end
	}) + ") is open");
	throw Error("Cannot close document, a token (`" + t.type + "`, " + aN({
		start: t.start,
		end: t.end
	}) + ") is still open");
}
function aW(e, t) {
	let n = String(e);
	if ("string" != typeof t) throw TypeError("Expected character");
	let r = 0, i = n.indexOf(t);
	for (; -1 !== i;) r++, i = n.indexOf(t, i + t.length);
	return r;
}
let aK = function(e) {
	var t, n;
	if (null == e) return aQ;
	if ("function" == typeof e) return aG(e);
	if ("object" == typeof e) return Array.isArray(e) ? function(e) {
		let t = [], n = -1;
		for (; ++n < e.length;) t[n] = aK(e[n]);
		return aG(function(...e) {
			let n = -1;
			for (; ++n < t.length;) if (t[n].apply(this, e)) return !0;
			return !1;
		});
	}(e) : (t = e, aG(function(e) {
		let n;
		for (n in t) if (e[n] !== t[n]) return !1;
		return !0;
	}));
	if ("string" == typeof e) return n = e, aG(function(e) {
		return e && e.type === n;
	});
	throw Error("Expected function, string, or object as test");
};
function aG(e) {
	return function(t, n, r) {
		var i;
		return !!(null !== (i = t) && "object" == typeof i && "type" in i && e.call(this, t, "number" == typeof n ? n : void 0, r || void 0));
	};
}
function aQ() {
	return !0;
}
var aZ = [];
function aX(e, t, n, r) {
	let i;
	"function" == typeof t && "function" != typeof n ? (r = n, n = t) : i = t;
	let l = aK(i), o = r ? -1 : 1;
	(function e(i, a, u) {
		let s = i && "object" == typeof i ? i : {};
		if ("string" == typeof s.type) {
			let e = "string" == typeof s.tagName ? s.tagName : "string" == typeof s.name ? s.name : void 0;
			Object.defineProperty(c, "name", { value: "node (" + i.type + (e ? "<" + e + ">" : "") + ")" });
		}
		return c;
		function c() {
			var s;
			let c, f, d, p = aZ;
			if ((!t || l(i, a, u[u.length - 1] || void 0)) && !1 === (p = Array.isArray(s = n(i, u)) ? s : "number" == typeof s ? [!0, s] : null == s ? aZ : [s])[0]) return p;
			if ("children" in i && i.children && i.children && "skip" !== p[0]) for (f = (r ? i.children.length : -1) + o, d = u.concat(i); f > -1 && f < i.children.length;) {
				if (!1 === (c = e(i.children[f], f, d)())[0]) return c;
				f = "number" == typeof c[1] ? c[1] : f + o;
			}
			return p;
		}
	})(e, void 0, [])();
}
function aJ(e) {
	this.enter({
		type: "link",
		title: null,
		url: "",
		children: []
	}, e);
}
function aY(e) {
	this.config.enter.autolinkProtocol.call(this, e);
}
function a1(e) {
	this.config.exit.autolinkProtocol.call(this, e);
}
function a0(e) {
	this.config.exit.data.call(this, e);
	let t = this.stack[this.stack.length - 1];
	t.type, t.url = "http://" + this.sliceSerialize(e);
}
function a2(e) {
	this.config.exit.autolinkEmail.call(this, e);
}
function a5(e) {
	this.exit(e);
}
function a4(e) {
	(function(e, t, n) {
		let r = aK((n || {}).ignore || []), i = function(e) {
			let t = [];
			if (!Array.isArray(e)) throw TypeError("Expected find and replace tuple or list of tuples");
			let n = !e[0] || Array.isArray(e[0]) ? e : [e], r = -1;
			for (; ++r < n.length;) {
				var i;
				let e = n[r];
				t.push(["string" == typeof (i = e[0]) ? RegExp(function(e) {
					if ("string" != typeof e) throw TypeError("Expected a string");
					return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
				}(i), "g") : i, function(e) {
					return "function" == typeof e ? e : function() {
						return e;
					};
				}(e[1])]);
			}
			return t;
		}(t), l = -1;
		for (; ++l < i.length;) aX(e, "text", o);
		function o(e, t) {
			let n, o = -1;
			for (; ++o < t.length;) {
				let e = t[o], i = n ? n.children : void 0;
				if (r(e, i ? i.indexOf(e) : void 0, n)) return;
				n = e;
			}
			if (n) return function(e, t) {
				let n = t[t.length - 1], r = i[l][0], o = i[l][1], a = 0, u = n.children.indexOf(e), s = !1, c = [];
				r.lastIndex = 0;
				let f = r.exec(e.value);
				for (; f;) {
					let n = f.index, i = {
						index: f.index,
						input: f.input,
						stack: [...t, e]
					}, l = o(...f, i);
					if ("string" == typeof l && (l = l.length > 0 ? {
						type: "text",
						value: l
					} : void 0), !1 === l ? r.lastIndex = n + 1 : (a !== n && c.push({
						type: "text",
						value: e.value.slice(a, n)
					}), Array.isArray(l) ? c.push(...l) : l && c.push(l), a = n + f[0].length, s = !0), !r.global) break;
					f = r.exec(e.value);
				}
				return s ? (a < e.value.length && c.push({
					type: "text",
					value: e.value.slice(a)
				}), n.children.splice(u, 1, ...c)) : c = [e], u + c.length;
			}(e, t);
		}
	})(e, [[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, a3], [/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu, a6]], { ignore: ["link", "linkReference"] });
}
function a3(e, t, n, r, i) {
	let l = "";
	if (!a9(i) || (/^w/i.test(t) && (n = t + n, t = "", l = "http://"), !function(e) {
		let t = e.split(".");
		return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
	}(n))) return !1;
	let o = function(e) {
		let t = /[!"&'),.:;<>?\]}]+$/.exec(e);
		if (!t) return [e, void 0];
		e = e.slice(0, t.index);
		let n = t[0], r = n.indexOf(")"), i = aW(e, "("), l = aW(e, ")");
		for (; -1 !== r && i > l;) e += n.slice(0, r + 1), r = (n = n.slice(r + 1)).indexOf(")"), l++;
		return [e, n];
	}(n + r);
	if (!o[0]) return !1;
	let a = {
		type: "link",
		title: null,
		url: l + t + o[0],
		children: [{
			type: "text",
			value: t + o[0]
		}]
	};
	return o[1] ? [a, {
		type: "text",
		value: o[1]
	}] : a;
}
function a6(e, t, n, r) {
	return !(!a9(r, !0) || /[-\d_]$/.test(n)) && {
		type: "link",
		title: null,
		url: "mailto:" + t + "@" + n,
		children: [{
			type: "text",
			value: t + "@" + n
		}]
	};
}
function a9(e, t) {
	let n = e.input.charCodeAt(e.index - 1);
	return (0 === e.index || oz(n) || oR(n)) && (!t || 47 !== n);
}
function a8() {
	this.buffer();
}
function a7(e) {
	this.enter({
		type: "footnoteReference",
		identifier: "",
		label: ""
	}, e);
}
function ue() {
	this.buffer();
}
function ut(e) {
	this.enter({
		type: "footnoteDefinition",
		identifier: "",
		label: "",
		children: []
	}, e);
}
function un(e) {
	let t = this.resume(), n = this.stack[this.stack.length - 1];
	n.type, n.identifier = o_(this.sliceSerialize(e)).toLowerCase(), n.label = t;
}
function ur(e) {
	this.exit(e);
}
function ui(e) {
	let t = this.resume(), n = this.stack[this.stack.length - 1];
	n.type, n.identifier = o_(this.sliceSerialize(e)).toLowerCase(), n.label = t;
}
function ul(e) {
	this.exit(e);
}
function uo(e) {
	this.enter({
		type: "delete",
		children: []
	}, e);
}
function ua(e) {
	this.exit(e);
}
function uu(e) {
	let t = e._align;
	this.enter({
		type: "table",
		align: t.map(function(e) {
			return "none" === e ? null : e;
		}),
		children: []
	}, e), this.data.inTable = !0;
}
function us(e) {
	this.exit(e), this.data.inTable = void 0;
}
function uc(e) {
	this.enter({
		type: "tableRow",
		children: []
	}, e);
}
function uf(e) {
	this.exit(e);
}
function ud(e) {
	this.enter({
		type: "tableCell",
		children: []
	}, e);
}
function up(e) {
	let t = this.resume();
	this.data.inTable && (t = t.replace(/\\([\\|])/g, uh));
	let n = this.stack[this.stack.length - 1];
	n.type, n.value = t, this.exit(e);
}
function uh(e, t) {
	return "|" === t ? t : e;
}
function um(e) {
	let t = this.stack[this.stack.length - 2];
	t.type, t.checked = "taskListCheckValueChecked" === e.type;
}
function ug(e) {
	let t = this.stack[this.stack.length - 2];
	if (t && "listItem" === t.type && "boolean" == typeof t.checked) {
		let e = this.stack[this.stack.length - 1];
		e.type;
		let n = e.children[0];
		if (n && "text" === n.type) {
			let r, i = t.children, l = -1;
			for (; ++l < i.length;) {
				let e = i[l];
				if ("paragraph" === e.type) {
					r = e;
					break;
				}
			}
			r === e && (n.value = n.value.slice(1), 0 === n.value.length ? e.children.shift() : e.position && n.position && "number" == typeof n.position.start.offset && (n.position.start.column++, n.position.start.offset++, e.position.start = Object.assign({}, n.position.start)));
		}
	}
	this.exit(e);
}
function uv() {
	return [
		{
			transforms: [a4],
			enter: {
				literalAutolink: aJ,
				literalAutolinkEmail: aY,
				literalAutolinkHttp: aY,
				literalAutolinkWww: aY
			},
			exit: {
				literalAutolink: a5,
				literalAutolinkEmail: a2,
				literalAutolinkHttp: a1,
				literalAutolinkWww: a0
			}
		},
		{
			enter: {
				gfmFootnoteCallString: a8,
				gfmFootnoteCall: a7,
				gfmFootnoteDefinitionLabelString: ue,
				gfmFootnoteDefinition: ut
			},
			exit: {
				gfmFootnoteCallString: un,
				gfmFootnoteCall: ur,
				gfmFootnoteDefinitionLabelString: ui,
				gfmFootnoteDefinition: ul
			}
		},
		{
			canContainEols: ["delete"],
			enter: { strikethrough: uo },
			exit: { strikethrough: ua }
		},
		{
			enter: {
				table: uu,
				tableData: ud,
				tableHeader: ud,
				tableRow: uc
			},
			exit: {
				codeText: up,
				table: us,
				tableData: uf,
				tableHeader: uf,
				tableRow: uf
			}
		},
		{ exit: {
			taskListCheckValueChecked: um,
			taskListCheckValueUnchecked: um,
			paragraph: ug
		} }
	];
}
for (var uy = {
	tokenize: function(e, t, n) {
		let r = 0;
		return function t(l) {
			return (87 === l || 119 === l) && r < 3 ? (r++, e.consume(l), t) : 46 === l && 3 === r ? (e.consume(l), i) : n(l);
		};
		function i(e) {
			return null === e ? n(e) : t(e);
		}
	},
	partial: !0
}, ub = {
	tokenize: function(e, t, n) {
		let r, i, l;
		return o;
		function o(t) {
			return 46 === t || 95 === t ? e.check(uk, u, a)(t) : null === t || oF(t) || oz(t) || 45 !== t && oR(t) ? u(t) : (l = !0, e.consume(t), o);
		}
		function a(t) {
			return 95 === t ? r = !0 : (i = r, r = void 0), e.consume(t), o;
		}
		function u(e) {
			return i || r || !l ? n(e) : t(e);
		}
	},
	partial: !0
}, ux = {
	tokenize: function(e, t) {
		let n = 0, r = 0;
		return i;
		function i(o) {
			return 40 === o ? (n++, e.consume(o), i) : 41 === o && r < n ? l(o) : 33 === o || 34 === o || 38 === o || 39 === o || 41 === o || 42 === o || 44 === o || 46 === o || 58 === o || 59 === o || 60 === o || 63 === o || 93 === o || 95 === o || 126 === o ? e.check(uk, t, l)(o) : null === o || oF(o) || oz(o) ? t(o) : (e.consume(o), i);
		}
		function l(t) {
			return 41 === t && r++, e.consume(t), i;
		}
	},
	partial: !0
}, uk = {
	tokenize: function(e, t, n) {
		return r;
		function r(o) {
			return 33 === o || 34 === o || 39 === o || 41 === o || 42 === o || 44 === o || 46 === o || 58 === o || 59 === o || 63 === o || 95 === o || 126 === o ? (e.consume(o), r) : 38 === o ? (e.consume(o), l) : 93 === o ? (e.consume(o), i) : 60 === o || null === o || oF(o) || oz(o) ? t(o) : n(o);
		}
		function i(e) {
			return null === e || 40 === e || 91 === e || oF(e) || oz(e) ? t(e) : r(e);
		}
		function l(t) {
			return oA(t) ? function t(i) {
				return 59 === i ? (e.consume(i), r) : oA(i) ? (e.consume(i), t) : n(i);
			}(t) : n(t);
		}
	},
	partial: !0
}, uw = {
	tokenize: function(e, t, n) {
		return function(t) {
			return e.consume(t), r;
		};
		function r(e) {
			return oT(e) ? n(e) : t(e);
		}
	},
	partial: !0
}, uS = {
	name: "wwwAutolink",
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return 87 !== t && 119 !== t || !uE.call(r, r.previous) || uD(r.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(uy, e.attempt(ub, e.attempt(ux, i), n), n)(t));
		};
		function i(n) {
			return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(n);
		}
	},
	previous: uE
}, uC = {
	name: "protocolAutolink",
	tokenize: function(e, t, n) {
		let r = this, i = "", l = !1;
		return function(t) {
			return (72 === t || 104 === t) && uL.call(r, r.previous) && !uD(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(t), e.consume(t), o) : n(t);
		};
		function o(t) {
			if (oA(t) && i.length < 5) return i += String.fromCodePoint(t), e.consume(t), o;
			if (58 === t) {
				let n = i.toLowerCase();
				if ("http" === n || "https" === n) return e.consume(t), a;
			}
			return n(t);
		}
		function a(t) {
			return 47 === t ? (e.consume(t), l) ? u : (l = !0, a) : n(t);
		}
		function u(t) {
			return null === t || oL(t) || oF(t) || oz(t) || oR(t) ? n(t) : e.attempt(ub, e.attempt(ux, s), n)(t);
		}
		function s(n) {
			return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(n);
		}
	},
	previous: uL
}, u_ = {
	name: "emailAutolink",
	tokenize: function(e, t, n) {
		let r, i, l = this;
		return function(t) {
			return !uO(t) || !uM.call(l, l.previous) || uD(l.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), function t(r) {
				return uO(r) ? (e.consume(r), t) : 64 === r ? (e.consume(r), o) : n(r);
			}(t));
		};
		function o(t) {
			return 46 === t ? e.check(uw, u, a)(t) : 45 === t || 95 === t || oT(t) ? (i = !0, e.consume(t), o) : u(t);
		}
		function a(t) {
			return e.consume(t), r = !0, o;
		}
		function u(o) {
			return i && r && oA(l.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(o)) : n(o);
		}
	},
	previous: uM
}, uA = {}, uT = 48; uT < 123;) uA[uT] = u_, 58 == ++uT ? uT = 65 : 91 === uT && (uT = 97);
function uE(e) {
	return null === e || 40 === e || 42 === e || 95 === e || 91 === e || 93 === e || 126 === e || oF(e);
}
function uL(e) {
	return !oA(e);
}
function uM(e) {
	return !(47 === e || uO(e));
}
function uO(e) {
	return 43 === e || 45 === e || 46 === e || 95 === e || oT(e);
}
function uD(e) {
	let t = e.length, n = !1;
	for (; t--;) {
		let r = e[t][1];
		if (("labelLink" === r.type || "labelImage" === r.type) && !r._balanced) {
			n = !0;
			break;
		}
		if (r._gfmAutolinkLiteralWalkedInto) {
			n = !1;
			break;
		}
	}
	return e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), n;
}
uA[43] = u_, uA[45] = u_, uA[46] = u_, uA[95] = u_, uA[72] = [u_, uC], uA[104] = [u_, uC], uA[87] = [u_, uS], uA[119] = [u_, uS];
var uP = {
	tokenize: function(e, t, n) {
		let r = this;
		return oV(e, function(e) {
			let i = r.events[r.events.length - 1];
			return i && "gfmFootnoteDefinitionIndent" === i[1].type && 4 === i[2].sliceSerialize(i[1], !0).length ? t(e) : n(e);
		}, "gfmFootnoteDefinitionIndent", 5);
	},
	partial: !0
};
function uF(e, t, n) {
	let r, i = this, l = i.events.length, o = i.parser.gfmFootnotes || (i.parser.gfmFootnotes = []);
	for (; l--;) {
		let e = i.events[l][1];
		if ("labelImage" === e.type) {
			r = e;
			break;
		}
		if ("gfmFootnoteCall" === e.type || "labelLink" === e.type || "label" === e.type || "image" === e.type || "link" === e.type) break;
	}
	return function(l) {
		if (!r || !r._balanced) return n(l);
		let a = o_(i.sliceSerialize({
			start: r.end,
			end: i.now()
		}));
		return 94 === a.codePointAt(0) && o.includes(a.slice(1)) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(l), e.exit("gfmFootnoteCallLabelMarker"), t(l)) : n(l);
	};
}
function uI(e, t) {
	let n = e.length;
	for (; n--;) if ("labelImage" === e[n][1].type && "enter" === e[n][0]) {
		e[n][1];
		break;
	}
	e[n + 1][1].type = "data", e[n + 3][1].type = "gfmFootnoteCallLabelMarker";
	let r = {
		type: "gfmFootnoteCall",
		start: Object.assign({}, e[n + 3][1].start),
		end: Object.assign({}, e[e.length - 1][1].end)
	}, i = {
		type: "gfmFootnoteCallMarker",
		start: Object.assign({}, e[n + 3][1].end),
		end: Object.assign({}, e[n + 3][1].end)
	};
	i.end.column++, i.end.offset++, i.end._bufferIndex++;
	let l = {
		type: "gfmFootnoteCallString",
		start: Object.assign({}, i.end),
		end: Object.assign({}, e[e.length - 1][1].start)
	}, o = {
		type: "chunkString",
		contentType: "string",
		start: Object.assign({}, l.start),
		end: Object.assign({}, l.end)
	}, a = [
		e[n + 1],
		e[n + 2],
		[
			"enter",
			r,
			t
		],
		e[n + 3],
		e[n + 4],
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
			"enter",
			l,
			t
		],
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
			"exit",
			l,
			t
		],
		e[e.length - 2],
		e[e.length - 1],
		[
			"exit",
			r,
			t
		]
	];
	return e.splice(n, e.length - n + 1, ...a), e;
}
function uR(e, t, n) {
	let r, i = this, l = i.parser.gfmFootnotes || (i.parser.gfmFootnotes = []), o = 0;
	return function(t) {
		return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(t), e.exit("gfmFootnoteCallLabelMarker"), a;
	};
	function a(t) {
		return 94 !== t ? n(t) : (e.enter("gfmFootnoteCallMarker"), e.consume(t), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", u);
	}
	function u(a) {
		if (o > 999 || 93 === a && !r || null === a || 91 === a || oF(a)) return n(a);
		if (93 === a) {
			e.exit("chunkString");
			let r = e.exit("gfmFootnoteCallString");
			return l.includes(o_(i.sliceSerialize(r))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(a), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(a);
		}
		return oF(a) || (r = !0), o++, e.consume(a), 92 === a ? s : u;
	}
	function s(t) {
		return 91 === t || 92 === t || 93 === t ? (e.consume(t), o++, u) : u(t);
	}
}
function uz(e, t, n) {
	let r, i, l = this, o = l.parser.gfmFootnotes || (l.parser.gfmFootnotes = []), a = 0;
	return function(t) {
		return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), u;
	};
	function u(t) {
		return 94 === t ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", s) : n(t);
	}
	function s(t) {
		if (a > 999 || 93 === t && !i || null === t || 91 === t || oF(t)) return n(t);
		if (93 === t) {
			e.exit("chunkString");
			let n = e.exit("gfmFootnoteDefinitionLabelString");
			return r = o_(l.sliceSerialize(n)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), f;
		}
		return oF(t) || (i = !0), a++, e.consume(t), 92 === t ? c : s;
	}
	function c(t) {
		return 91 === t || 92 === t || 93 === t ? (e.consume(t), a++, s) : s(t);
	}
	function f(t) {
		return 58 === t ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), o.includes(r) || o.push(r), oV(e, d, "gfmFootnoteDefinitionWhitespace")) : n(t);
	}
	function d(e) {
		return t(e);
	}
}
function uN(e, t, n) {
	return e.check(oG, t, e.attempt(uP, t, n));
}
function uj(e) {
	e.exit("gfmFootnoteDefinition");
}
var uV = class {
	constructor() {
		this.map = [];
	}
	add(e, t, n) {
		(function(e, t, n, r) {
			let i = 0;
			if (0 !== n || 0 !== r.length) {
				for (; i < e.map.length;) {
					if (e.map[i][0] === t) {
						e.map[i][1] += n, e.map[i][2].push(...r);
						return;
					}
					i += 1;
				}
				e.map.push([
					t,
					n,
					r
				]);
			}
		})(this, e, t, n);
	}
	consume(e) {
		if (this.map.sort(function(e, t) {
			return e[0] - t[0];
		}), 0 === this.map.length) return;
		let t = this.map.length, n = [];
		for (; t > 0;) t -= 1, n.push(e.slice(this.map[t][0] + this.map[t][1]), this.map[t][2]), e.length = this.map[t][0];
		n.push(e.slice()), e.length = 0;
		let r = n.pop();
		for (; r;) {
			for (let t of r) e.push(t);
			r = n.pop();
		}
		this.map.length = 0;
	}
};
function uB(e, t, n) {
	let r, i = this, l = 0, o = 0;
	return function(e) {
		let t = i.events.length - 1;
		for (; t > -1;) {
			let e = i.events[t][1].type;
			if ("lineEnding" === e || "linePrefix" === e) t--;
			else break;
		}
		let r = t > -1 ? i.events[t][1].type : null, l = "tableHead" === r || "tableRow" === r ? b : a;
		return l === b && i.parser.lazy[i.now().line] ? n(e) : l(e);
	};
	function a(t) {
		var n;
		return e.enter("tableHead"), e.enter("tableRow"), 124 === (n = t) || (r = !0, o += 1), u(n);
	}
	function u(t) {
		return null === t ? n(t) : oP(t) ? o > 1 ? (o = 0, i.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), f) : n(t) : oI(t) ? oV(e, u, "whitespace")(t) : (o += 1, r && (r = !1, l += 1), 124 === t) ? (e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), r = !0, u) : (e.enter("data"), s(t));
	}
	function s(t) {
		return null === t || 124 === t || oF(t) ? (e.exit("data"), u(t)) : (e.consume(t), 92 === t ? c : s);
	}
	function c(t) {
		return 92 === t || 124 === t ? (e.consume(t), s) : s(t);
	}
	function f(t) {
		return (i.interrupt = !1, i.parser.lazy[i.now().line]) ? n(t) : (e.enter("tableDelimiterRow"), r = !1, oI(t)) ? oV(e, d, "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : d(t);
	}
	function d(t) {
		return 45 === t || 58 === t ? h(t) : 124 === t ? (r = !0, e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), p) : n(t);
	}
	function p(t) {
		return oI(t) ? oV(e, h, "whitespace")(t) : h(t);
	}
	function h(t) {
		return 58 === t ? (o += 1, r = !0, e.enter("tableDelimiterMarker"), e.consume(t), e.exit("tableDelimiterMarker"), m) : 45 === t ? (o += 1, m(t)) : null === t || oP(t) ? y(t) : n(t);
	}
	function m(t) {
		return 45 === t ? (e.enter("tableDelimiterFiller"), function t(n) {
			return 45 === n ? (e.consume(n), t) : 58 === n ? (r = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(n), e.exit("tableDelimiterMarker"), g) : (e.exit("tableDelimiterFiller"), g(n));
		}(t)) : n(t);
	}
	function g(t) {
		return oI(t) ? oV(e, y, "whitespace")(t) : y(t);
	}
	function y(i) {
		if (124 === i) return d(i);
		if (null === i || oP(i)) return r && l === o ? (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(i)) : n(i);
		return n(i);
	}
	function b(t) {
		return e.enter("tableRow"), x(t);
	}
	function x(n) {
		return 124 === n ? (e.enter("tableCellDivider"), e.consume(n), e.exit("tableCellDivider"), x) : null === n || oP(n) ? (e.exit("tableRow"), t(n)) : oI(n) ? oV(e, x, "whitespace")(n) : (e.enter("data"), k(n));
	}
	function k(t) {
		return null === t || 124 === t || oF(t) ? (e.exit("data"), x(t)) : (e.consume(t), 92 === t ? w : k);
	}
	function w(t) {
		return 92 === t || 124 === t ? (e.consume(t), k) : k(t);
	}
}
function uU(e, t) {
	let n, r, i, l = -1, o = !0, a = 0, u = [
		0,
		0,
		0,
		0
	], s = [
		0,
		0,
		0,
		0
	], c = !1, f = 0, d = new uV();
	for (; ++l < e.length;) {
		let p = e[l], h = p[1];
		"enter" === p[0] ? "tableHead" === h.type ? (c = !1, 0 !== f && (u$(d, t, f, n, r), r = void 0, f = 0), n = {
			type: "table",
			start: Object.assign({}, h.start),
			end: Object.assign({}, h.end)
		}, d.add(l, 0, [[
			"enter",
			n,
			t
		]])) : "tableRow" === h.type || "tableDelimiterRow" === h.type ? (o = !0, i = void 0, u = [
			0,
			0,
			0,
			0
		], s = [
			0,
			l + 1,
			0,
			0
		], c && (c = !1, r = {
			type: "tableBody",
			start: Object.assign({}, h.start),
			end: Object.assign({}, h.end)
		}, d.add(l, 0, [[
			"enter",
			r,
			t
		]])), a = "tableDelimiterRow" === h.type ? 2 : r ? 3 : 1) : a && ("data" === h.type || "tableDelimiterMarker" === h.type || "tableDelimiterFiller" === h.type) ? (o = !1, 0 === s[2] && (0 !== u[1] && (s[0] = s[1], i = uH(d, t, u, a, void 0, i), u = [
			0,
			0,
			0,
			0
		]), s[2] = l)) : "tableCellDivider" === h.type && (o ? o = !1 : (0 !== u[1] && (s[0] = s[1], i = uH(d, t, u, a, void 0, i)), s = [
			(u = s)[1],
			l,
			0,
			0
		])) : "tableHead" === h.type ? (c = !0, f = l) : "tableRow" === h.type || "tableDelimiterRow" === h.type ? (f = l, 0 !== u[1] ? (s[0] = s[1], i = uH(d, t, u, a, l, i)) : 0 !== s[1] && (i = uH(d, t, s, a, l, i)), a = 0) : a && ("data" === h.type || "tableDelimiterMarker" === h.type || "tableDelimiterFiller" === h.type) && (s[3] = l);
	}
	for (0 !== f && u$(d, t, f, n, r), d.consume(t.events), l = -1; ++l < t.events.length;) {
		let e = t.events[l];
		"enter" === e[0] && "table" === e[1].type && (e[1]._align = function(e, t) {
			let n = !1, r = [];
			for (; t < e.length;) {
				let i = e[t];
				if (n) {
					if ("enter" === i[0]) "tableContent" === i[1].type && r.push("tableDelimiterMarker" === e[t + 1][1].type ? "left" : "none");
					else if ("tableContent" === i[1].type) {
						if ("tableDelimiterMarker" === e[t - 1][1].type) {
							let e = r.length - 1;
							r[e] = "left" === r[e] ? "center" : "right";
						}
					} else if ("tableDelimiterRow" === i[1].type) break;
				} else "enter" === i[0] && "tableDelimiterRow" === i[1].type && (n = !0);
				t += 1;
			}
			return r;
		}(t.events, l));
	}
	return e;
}
function uH(e, t, n, r, i, l) {
	0 !== n[0] && (l.end = Object.assign({}, uq(t.events, n[0])), e.add(n[0], 0, [[
		"exit",
		l,
		t
	]]));
	let o = uq(t.events, n[1]);
	if (l = {
		type: 1 === r ? "tableHeader" : 2 === r ? "tableDelimiter" : "tableData",
		start: Object.assign({}, o),
		end: Object.assign({}, o)
	}, e.add(n[1], 0, [[
		"enter",
		l,
		t
	]]), 0 !== n[2]) {
		let i = uq(t.events, n[2]), l = uq(t.events, n[3]), o = {
			type: "tableContent",
			start: Object.assign({}, i),
			end: Object.assign({}, l)
		};
		if (e.add(n[2], 0, [[
			"enter",
			o,
			t
		]]), 2 !== r) {
			let r = t.events[n[2]], i = t.events[n[3]];
			if (r[1].end = Object.assign({}, i[1].end), r[1].type = "chunkText", r[1].contentType = "text", n[3] > n[2] + 1) {
				let t = n[2] + 1, r = n[3] - n[2] - 1;
				e.add(t, r, []);
			}
		}
		e.add(n[3] + 1, 0, [[
			"exit",
			o,
			t
		]]);
	}
	return void 0 !== i && (l.end = Object.assign({}, uq(t.events, i)), e.add(i, 0, [[
		"exit",
		l,
		t
	]]), l = void 0), l;
}
function u$(e, t, n, r, i) {
	let l = [], o = uq(t.events, n);
	i && (i.end = Object.assign({}, o), l.push([
		"exit",
		i,
		t
	])), r.end = Object.assign({}, o), l.push([
		"exit",
		r,
		t
	]), e.add(n + 1, 0, l);
}
function uq(e, t) {
	let n = e[t], r = "enter" === n[0] ? "start" : "end";
	return n[1][r];
}
var uW = {
	name: "tasklistCheck",
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return null === r.previous && r._gfmTasklistFirstContentOfListItem ? (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), i) : n(t);
		};
		function i(t) {
			return oF(t) ? (e.enter("taskListCheckValueUnchecked"), e.consume(t), e.exit("taskListCheckValueUnchecked"), l) : 88 === t || 120 === t ? (e.enter("taskListCheckValueChecked"), e.consume(t), e.exit("taskListCheckValueChecked"), l) : n(t);
		}
		function l(t) {
			return 93 === t ? (e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), o) : n(t);
		}
		function o(r) {
			return oP(r) ? t(r) : oI(r) ? e.check({ tokenize: uK }, t, n)(r) : n(r);
		}
	}
};
function uK(e, t, n) {
	return oV(e, function(e) {
		return null === e ? n(e) : t(e);
	}, "whitespace");
}
function uG(e) {
	return oS([
		{ text: uA },
		{
			document: { 91: {
				name: "gfmFootnoteDefinition",
				tokenize: uz,
				continuation: { tokenize: uN },
				exit: uj
			} },
			text: {
				91: {
					name: "gfmFootnoteCall",
					tokenize: uR
				},
				93: {
					name: "gfmPotentialFootnoteCall",
					add: "after",
					tokenize: uF,
					resolveTo: uI
				}
			}
		},
		function(e) {
			let t = (e || {}).singleTilde, n = {
				name: "strikethrough",
				tokenize: function(e, n, r) {
					let i = this.previous, l = this.events, o = 0;
					return function(a) {
						return 126 === i && "characterEscape" !== l[l.length - 1][1].type ? r(a) : (e.enter("strikethroughSequenceTemporary"), function l(a) {
							let u = o$(i);
							if (126 === a) return o > 1 ? r(a) : (e.consume(a), o++, l);
							if (o < 2 && !t) return r(a);
							let s = e.exit("strikethroughSequenceTemporary"), c = o$(a);
							return s._open = !c || 2 === c && !!u, s._close = !u || 2 === u && !!c, n(a);
						}(a));
					};
				},
				resolveAll: function(e, t) {
					let n = -1;
					for (; ++n < e.length;) if ("enter" === e[n][0] && "strikethroughSequenceTemporary" === e[n][1].type && e[n][1]._close) {
						let r = n;
						for (; r--;) if ("exit" === e[r][0] && "strikethroughSequenceTemporary" === e[r][1].type && e[r][1]._open && e[n][1].end.offset - e[n][1].start.offset == e[r][1].end.offset - e[r][1].start.offset) {
							e[n][1].type = "strikethroughSequence", e[r][1].type = "strikethroughSequence";
							let i = {
								type: "strikethrough",
								start: Object.assign({}, e[r][1].start),
								end: Object.assign({}, e[n][1].end)
							}, l = {
								type: "strikethroughText",
								start: Object.assign({}, e[r][1].end),
								end: Object.assign({}, e[n][1].start)
							}, o = [
								[
									"enter",
									i,
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
									"enter",
									l,
									t
								]
							], a = t.parser.constructs.insideSpan.null;
							a && ox(o, o.length, 0, oq(a, e.slice(r + 1, n), t)), ox(o, o.length, 0, [
								[
									"exit",
									l,
									t
								],
								[
									"enter",
									e[n][1],
									t
								],
								[
									"exit",
									e[n][1],
									t
								],
								[
									"exit",
									i,
									t
								]
							]), ox(e, r - 1, n - r + 3, o), n = r + o.length - 2;
							break;
						}
					}
					for (n = -1; ++n < e.length;) "strikethroughSequenceTemporary" === e[n][1].type && (e[n][1].type = "data");
					return e;
				}
			};
			return t ??= !0, {
				text: { 126: n },
				insideSpan: { null: [n] },
				attentionMarkers: { null: [126] }
			};
		}(e),
		{ flow: { null: {
			name: "table",
			tokenize: uB,
			resolveAll: uU
		} } },
		{ text: { 91: uW } }
	]);
}
function uQ(e, t, n, r, i, l, o, a, u, s, c, f, d, p, h) {
	let m, g;
	return function(t) {
		return e.enter(r), e.enter(i), e.consume(t), e.exit(i), y;
	};
	function y(t) {
		return 35 === t ? (m = o, b(t)) : 46 === t ? (m = a, b(t)) : h && oI(t) ? oV(e, y, "whitespace")(t) : !h && oF(t) ? ae(e, y)(t) : null === t || oP(t) || oz(t) || oR(t) && 45 !== t && 95 !== t ? M(t) : (e.enter(l), e.enter(u), e.consume(t), w);
	}
	function b(t) {
		let n = m + "Marker";
		return e.enter(l), e.enter(m), e.enter(n), e.consume(t), e.exit(n), x;
	}
	function x(t) {
		if (null === t || 34 === t || 35 === t || 39 === t || 46 === t || 60 === t || 61 === t || 62 === t || 96 === t || 125 === t || oF(t)) return n(t);
		let r = m + "Value";
		return e.enter(r), e.consume(t), k;
	}
	function k(t) {
		if (null === t || 34 === t || 39 === t || 60 === t || 61 === t || 62 === t || 96 === t) return n(t);
		if (35 === t || 46 === t || 125 === t || oF(t)) {
			let n = m + "Value";
			return e.exit(n), e.exit(m), e.exit(l), y(t);
		}
		return e.consume(t), k;
	}
	function w(t) {
		return null === t || oP(t) || oz(t) || oR(t) && 45 !== t && 46 !== t && 58 !== t && 95 !== t ? (e.exit(u), h && oI(t)) ? oV(e, S, "whitespace")(t) : !h && oF(t) ? ae(e, S)(t) : S(t) : (e.consume(t), w);
	}
	function S(t) {
		return 61 === t ? (e.enter(s), e.consume(t), e.exit(s), C) : (e.exit(l), y(t));
	}
	function C(t) {
		return null === t || 60 === t || 61 === t || 62 === t || 96 === t || 125 === t || h && oP(t) ? n(t) : 34 === t || 39 === t ? (e.enter(c), e.enter(d), e.consume(t), e.exit(d), g = t, A) : h && oI(t) ? oV(e, C, "whitespace")(t) : !h && oF(t) ? ae(e, C)(t) : (e.enter(f), e.enter(p), e.consume(t), g = void 0, _);
	}
	function _(t) {
		return null === t || 34 === t || 39 === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 125 === t || oF(t) ? (e.exit(p), e.exit(f), e.exit(l), y(t)) : (e.consume(t), _);
	}
	function A(t) {
		return t === g ? (e.enter(d), e.consume(t), e.exit(d), e.exit(c), e.exit(l), L) : (e.enter(f), T(t));
	}
	function T(t) {
		return t === g ? (e.exit(f), A(t)) : null === t ? n(t) : oP(t) ? h ? n(t) : ae(e, T)(t) : (e.enter(p), e.consume(t), E);
	}
	function E(t) {
		return t === g || null === t || oP(t) ? (e.exit(p), T(t)) : (e.consume(t), E);
	}
	function L(e) {
		return 125 === e || oF(e) ? y(e) : M(e);
	}
	function M(l) {
		return 125 === l ? (e.enter(i), e.consume(l), e.exit(i), e.exit(r), t) : n(l);
	}
}
function uZ(e, t, n, r, i, l, o) {
	let a, u = 0, s = 0;
	return function(t) {
		return e.enter(r), e.enter(i), e.consume(t), e.exit(i), c;
	};
	function c(n) {
		return 93 === n ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t) : (e.enter(l), f(n));
	}
	function f(t) {
		if (93 === t && !s) return h(t);
		let n = e.enter("chunkText", {
			_contentTypeTextTrailing: !0,
			contentType: "text",
			previous: a
		});
		return a && (a.next = n), a = n, d(t);
	}
	function d(t) {
		return null === t || u > 999 || 91 === t && ++s > 32 ? n(t) : 93 !== t || s-- ? oP(t) ? o ? n(t) : (e.consume(t), e.exit("chunkText"), f) : (e.consume(t), 92 === t ? p : d) : (e.exit("chunkText"), h(t));
	}
	function p(t) {
		return 91 === t || 92 === t || 93 === t ? (e.consume(t), u++, d) : d(t);
	}
	function h(n) {
		return e.exit(l), e.enter(i), e.consume(n), e.exit(i), e.exit(r), t;
	}
}
function uX(e, t, n, r) {
	let i = this;
	return function(t) {
		return null === t || oP(t) || oR(t) || oz(t) ? n(t) : (e.enter(r), e.consume(t), l);
	};
	function l(o) {
		return null === o || oP(o) || oz(o) || oR(o) && 45 !== o && 95 !== o ? (e.exit(r), 45 === i.previous || 95 === i.previous ? n(o) : t(o)) : (e.consume(o), l);
	}
}
let uJ = {
	tokenize: function(e, t, n) {
		let r, i = this, l = i.events[i.events.length - 1], o = l && "linePrefix" === l[1].type ? l[2].sliceSerialize(l[1], !0).length : 0, a = 0;
		return function(t) {
			return e.enter("directiveContainer"), e.enter("directiveContainerFence"), e.enter("directiveContainerSequence"), function t(r) {
				return 58 === r ? (e.consume(r), a++, t) : a < 3 ? n(r) : (e.exit("directiveContainerSequence"), uX.call(i, e, u, n, "directiveContainerName")(r));
			}(t);
		};
		function u(t) {
			return 91 === t ? e.attempt(uY, s, s)(t) : s(t);
		}
		function s(t) {
			return 123 === t ? e.attempt(u1, c, c)(t) : c(t);
		}
		function c(t) {
			return oV(e, f, "whitespace")(t);
		}
		function f(r) {
			return (e.exit("directiveContainerFence"), null === r) ? k(r) : oP(r) ? i.interrupt ? t(r) : e.attempt(u0, d, k)(r) : n(r);
		}
		function d(t) {
			return null === t ? k(t) : oP(t) ? e.check(u0, g, k)(t) : (e.enter("directiveContainerContent"), p(t));
		}
		function p(t) {
			return e.attempt({
				tokenize: w,
				partial: !0
			}, x, o ? oV(e, h, "linePrefix", o + 1) : h)(t);
		}
		function h(t) {
			return null === t ? x(t) : oP(t) ? e.check(u0, m, x)(t) : m(t);
		}
		function m(t) {
			let n = e.enter("chunkDocument", {
				contentType: "document",
				previous: r
			});
			return r && (r.next = n), r = n, function t(n) {
				if (null === n) {
					let t = e.exit("chunkDocument");
					return i.parser.lazy[t.start.line] = !1, x(n);
				}
				return oP(n) ? e.check(u0, y, b)(n) : (e.consume(n), t);
			}(t);
		}
		function g(t) {
			return e.enter("directiveContainerContent"), p(t);
		}
		function y(t) {
			e.consume(t);
			let n = e.exit("chunkDocument");
			return i.parser.lazy[n.start.line] = !1, p;
		}
		function b(t) {
			let n = e.exit("chunkDocument");
			return i.parser.lazy[n.start.line] = !1, x(t);
		}
		function x(t) {
			return e.exit("directiveContainerContent"), k(t);
		}
		function k(n) {
			return e.exit("directiveContainer"), t(n);
		}
		function w(e, t, n) {
			let r = 0;
			return oV(e, function(t) {
				return e.enter("directiveContainerFence"), e.enter("directiveContainerSequence"), function t(i) {
					return 58 === i ? (e.consume(i), r++, t) : r < a ? n(i) : (e.exit("directiveContainerSequence"), oV(e, l, "whitespace")(i));
				}(t);
			}, "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
			function l(r) {
				return null === r || oP(r) ? (e.exit("directiveContainerFence"), t(r)) : n(r);
			}
		}
	},
	concrete: !0
};
var uY = {
	tokenize: function(e, t, n) {
		return uZ(e, t, n, "directiveContainerLabel", "directiveContainerLabelMarker", "directiveContainerLabelString", !0);
	},
	partial: !0
}, u1 = {
	tokenize: function(e, t, n) {
		return uQ(e, t, n, "directiveContainerAttributes", "directiveContainerAttributesMarker", "directiveContainerAttribute", "directiveContainerAttributeId", "directiveContainerAttributeClass", "directiveContainerAttributeName", "directiveContainerAttributeInitializerMarker", "directiveContainerAttributeValueLiteral", "directiveContainerAttributeValue", "directiveContainerAttributeValueMarker", "directiveContainerAttributeValueData", !0);
	},
	partial: !0
}, u0 = {
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i;
		};
		function i(e) {
			return r.parser.lazy[r.now().line] ? n(e) : t(e);
		}
	},
	partial: !0
};
let u2 = { tokenize: function(e, t, n) {
	let r = this;
	return function(t) {
		return e.enter("directiveLeaf"), e.enter("directiveLeafSequence"), e.consume(t), i;
	};
	function i(t) {
		return 58 === t ? (e.consume(t), e.exit("directiveLeafSequence"), uX.call(r, e, l, n, "directiveLeafName")) : n(t);
	}
	function l(t) {
		return 91 === t ? e.attempt(u5, o, o)(t) : o(t);
	}
	function o(t) {
		return 123 === t ? e.attempt(u4, a, a)(t) : a(t);
	}
	function a(t) {
		return oV(e, u, "whitespace")(t);
	}
	function u(r) {
		return null === r || oP(r) ? (e.exit("directiveLeaf"), t(r)) : n(r);
	}
} };
var u5 = {
	tokenize: function(e, t, n) {
		return uZ(e, t, n, "directiveLeafLabel", "directiveLeafLabelMarker", "directiveLeafLabelString", !0);
	},
	partial: !0
}, u4 = {
	tokenize: function(e, t, n) {
		return uQ(e, t, n, "directiveLeafAttributes", "directiveLeafAttributesMarker", "directiveLeafAttribute", "directiveLeafAttributeId", "directiveLeafAttributeClass", "directiveLeafAttributeName", "directiveLeafAttributeInitializerMarker", "directiveLeafAttributeValueLiteral", "directiveLeafAttributeValue", "directiveLeafAttributeValueMarker", "directiveLeafAttributeValueData", !0);
	},
	partial: !0
};
let u3 = {
	tokenize: function(e, t, n) {
		let r = this;
		return function(t) {
			return e.enter("directiveText"), e.enter("directiveTextMarker"), e.consume(t), e.exit("directiveTextMarker"), uX.call(r, e, i, n, "directiveTextName");
		};
		function i(t) {
			return 58 === t ? n(t) : 91 === t ? e.attempt(u6, l, l)(t) : l(t);
		}
		function l(t) {
			return 123 === t ? e.attempt(u9, o, o)(t) : o(t);
		}
		function o(n) {
			return e.exit("directiveText"), t(n);
		}
	},
	previous: function(e) {
		return 58 !== e || "characterEscape" === this.events[this.events.length - 1][1].type;
	}
};
var u6 = {
	tokenize: function(e, t, n) {
		return uZ(e, t, n, "directiveTextLabel", "directiveTextLabelMarker", "directiveTextLabelString");
	},
	partial: !0
}, u9 = {
	tokenize: function(e, t, n) {
		return uQ(e, t, n, "directiveTextAttributes", "directiveTextAttributesMarker", "directiveTextAttribute", "directiveTextAttributeId", "directiveTextAttributeClass", "directiveTextAttributeName", "directiveTextAttributeInitializerMarker", "directiveTextAttributeValueLiteral", "directiveTextAttributeValue", "directiveTextAttributeValueMarker", "directiveTextAttributeValueData");
	},
	partial: !0
};
function u8() {
	return {
		text: { 58: u3 },
		flow: { 58: [uJ, u2] }
	};
}
let u7 = [
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
], se = {
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
function st(e) {
	let t = "string" == typeof e ? e.charCodeAt(0) : e;
	return t >= 48 && t <= 57;
}
function sn(e) {
	let t = "string" == typeof e ? e.charCodeAt(0) : e;
	return t >= 97 && t <= 102 || t >= 65 && t <= 70 || t >= 48 && t <= 57;
}
function sr(e) {
	return function(e) {
		let t = "string" == typeof e ? e.charCodeAt(0) : e;
		return t >= 97 && t <= 122 || t >= 65 && t <= 90;
	}(e) || st(e);
}
var si = [
	"",
	"Named character references must be terminated by a semicolon",
	"Numeric character references must be terminated by a semicolon",
	"Named character references cannot be empty",
	"Numeric character references cannot be empty",
	"Named character references must be known",
	"Numeric character references cannot be disallowed",
	"Numeric character references cannot be outside the permissible Unicode range"
];
function sl(e, t) {
	let n, r, i, l = t || {}, o = "string" == typeof l.additional ? l.additional.charCodeAt(0) : l.additional, a = [], u = 0, s = -1, c = "";
	l.position && ("start" in l.position || "indent" in l.position ? (r = l.position.indent, n = l.position.start) : n = l.position);
	let f = (n ? n.line : 0) || 1, d = (n ? n.column : 0) || 1, p = g();
	for (u--; ++u <= e.length;) if (10 === i && (d = (r ? r[s] : 0) || 1), 38 === (i = e.charCodeAt(u))) {
		let t, n = e.charCodeAt(u + 1);
		if (9 === n || 10 === n || 12 === n || 32 === n || 38 === n || 60 === n || Number.isNaN(n) || o && n === o) {
			c += String.fromCharCode(i), d++;
			continue;
		}
		let r = u + 1, s = r, f = r;
		if (35 === n) {
			f = ++s;
			let n = e.charCodeAt(f);
			88 === n || 120 === n ? (t = "hexadecimal", f = ++s) : t = "decimal";
		} else t = "named";
		let x = "", k = "", w = "", S = "named" === t ? sr : "decimal" === t ? st : sn;
		for (f--; ++f <= e.length;) {
			let n = e.charCodeAt(f);
			if (!S(n)) break;
			w += String.fromCharCode(n), "named" === t && u7.includes(w) && (x = w, k = ob(w));
		}
		let C = 59 === e.charCodeAt(f);
		if (C) {
			f++;
			let e = "named" === t && ob(w);
			e && (x = w, k = e);
		}
		let _ = 1 + f - r, A = "";
		if (C || !1 !== l.nonTerminated) if (w) if ("named" === t) {
			if (C && !k) y(5, 1);
			else if (x !== w && (_ = 1 + (f = s + x.length) - s, C = !1), !C) {
				let t = x ? 1 : 3;
				if (l.attribute) {
					let n = e.charCodeAt(f);
					61 === n ? (y(t, _), k = "") : sr(n) ? k = "" : y(t, _);
				} else y(t, _);
			}
			A = k;
		} else {
			var h, m;
			C || y(2, _);
			let e = Number.parseInt(w, "hexadecimal" === t ? 16 : 10);
			if ((h = e) >= 55296 && h <= 57343 || h > 1114111) y(7, _), A = String.fromCharCode(65533);
			else if (e in se) y(6, _), A = se[e];
			else {
				let t = "";
				((m = e) >= 1 && m <= 8 || 11 === m || m >= 13 && m <= 31 || m >= 127 && m <= 159 || m >= 64976 && m <= 65007 || (65535 & m) == 65535 || (65535 & m) == 65534) && y(6, _), e > 65535 && (e -= 65536, t += String.fromCharCode(e >>> 10 | 55296), e = 56320 | 1023 & e), A = t + String.fromCharCode(e);
			}
		}
		else "named" !== t && y(4, _);
		if (A) {
			b(), p = g(), u = f - 1, d += f - r + 1, a.push(A);
			let t = g();
			t.offset++, l.reference && l.reference.call(l.referenceContext || void 0, A, {
				start: p,
				end: t
			}, e.slice(r - 1, f)), p = t;
		} else w = e.slice(r - 1, f), c += w, d += w.length, u = f - 1;
	} else 10 === i && (f++, s++, d = 0), Number.isNaN(i) ? b() : (c += String.fromCharCode(i), d++);
	return a.join("");
	function g() {
		return {
			line: f,
			column: d,
			offset: u + ((n ? n.offset : 0) || 0)
		};
	}
	function y(e, t) {
		let n;
		l.warning && (n = g(), n.column += t, n.offset += t, l.warning.call(l.warningContext || void 0, si[e], n, e));
	}
	function b() {
		c && (a.push(c), l.text && l.text.call(l.textContext || void 0, c, {
			start: p,
			end: g()
		}), c = "");
	}
}
function so() {
	return {
		canContainEols: ["textDirective"],
		enter: {
			directiveContainer: sa,
			directiveContainerAttributes: sh,
			directiveContainerLabel: sd,
			directiveLeaf: su,
			directiveLeafAttributes: sh,
			directiveText: ss,
			directiveTextAttributes: sh
		},
		exit: {
			directiveContainer: sx,
			directiveContainerAttributeClassValue: sg,
			directiveContainerAttributeIdValue: sm,
			directiveContainerAttributeName: sy,
			directiveContainerAttributeValue: sv,
			directiveContainerAttributes: sb,
			directiveContainerLabel: sp,
			directiveContainerName: sf,
			directiveLeaf: sx,
			directiveLeafAttributeClassValue: sg,
			directiveLeafAttributeIdValue: sm,
			directiveLeafAttributeName: sy,
			directiveLeafAttributeValue: sv,
			directiveLeafAttributes: sb,
			directiveLeafName: sf,
			directiveText: sx,
			directiveTextAttributeClassValue: sg,
			directiveTextAttributeIdValue: sm,
			directiveTextAttributeName: sy,
			directiveTextAttributeValue: sv,
			directiveTextAttributes: sb,
			directiveTextName: sf
		}
	};
}
function sa(e) {
	sc.call(this, "containerDirective", e);
}
function su(e) {
	sc.call(this, "leafDirective", e);
}
function ss(e) {
	sc.call(this, "textDirective", e);
}
function sc(e, t) {
	this.enter({
		type: e,
		name: "",
		attributes: {},
		children: []
	}, t);
}
function sf(e) {
	let t = this.stack[this.stack.length - 1];
	"containerDirective" === t.type || "leafDirective" === t.type || t.type, t.name = this.sliceSerialize(e);
}
function sd(e) {
	this.enter({
		type: "paragraph",
		data: { directiveLabel: !0 },
		children: []
	}, e);
}
function sp(e) {
	this.exit(e);
}
function sh() {
	this.data.directiveAttributes = [], this.buffer();
}
function sm(e) {
	this.data.directiveAttributes.push(["id", sl(this.sliceSerialize(e), { attribute: !0 })]);
}
function sg(e) {
	this.data.directiveAttributes.push(["class", sl(this.sliceSerialize(e), { attribute: !0 })]);
}
function sv(e) {
	let t = this.data.directiveAttributes;
	t[t.length - 1][1] = sl(this.sliceSerialize(e), { attribute: !0 });
}
function sy(e) {
	this.data.directiveAttributes.push([this.sliceSerialize(e), ""]);
}
function sb() {
	let e = this.data.directiveAttributes, t = {}, n = -1;
	for (; ++n < e.length;) {
		let r = e[n];
		"class" === r[0] && t.class ? t.class += " " + r[1] : t[r[0]] = r[1];
	}
	this.data.directiveAttributes = void 0, this.resume();
	let r = this.stack[this.stack.length - 1];
	"containerDirective" === r.type || "leafDirective" === r.type || r.type, r.attributes = t;
}
function sx(e) {
	this.exit(e);
}
var sk = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, sw = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, sS = {};
function sC(e, t) {
	return ((t || sS).jsx ? sw : sk).test(e);
}
var s_ = /[ \t\n\f\r]/g;
function sA(e) {
	return "" === e.replace(s_, "");
}
var sT = class {
	constructor(e, t, n) {
		this.normal = t, this.property = e, n && (this.space = n);
	}
};
function sE(e, t) {
	let n = {}, r = {};
	for (let t of e) Object.assign(n, t.property), Object.assign(r, t.normal);
	return new sT(n, r, t);
}
function sL(e) {
	return e.toLowerCase();
}
sT.prototype.normal = {}, sT.prototype.property = {}, sT.prototype.space = void 0;
var sM = class {
	constructor(e, t) {
		this.attribute = t, this.property = e;
	}
};
sM.prototype.attribute = "", sM.prototype.booleanish = !1, sM.prototype.boolean = !1, sM.prototype.commaOrSpaceSeparated = !1, sM.prototype.commaSeparated = !1, sM.prototype.defined = !1, sM.prototype.mustUseProperty = !1, sM.prototype.number = !1, sM.prototype.overloadedBoolean = !1, sM.prototype.property = "", sM.prototype.spaceSeparated = !1, sM.prototype.space = void 0;
var sO = e({
	boolean: () => sP,
	booleanish: () => sF,
	commaOrSpaceSeparated: () => sj,
	commaSeparated: () => sN,
	number: () => sR,
	overloadedBoolean: () => sI,
	spaceSeparated: () => sz
}), sD = 0;
let sP = sV(), sF = sV(), sI = sV(), sR = sV(), sz = sV(), sN = sV(), sj = sV();
function sV() {
	return 2 ** ++sD;
}
var sB = Object.keys(sO), sU = class extends sM {
	constructor(e, t, n, r) {
		var i, l, o, a, u;
		let s = -1;
		if (super(e, t), i = this, (l = r) && (i.space = l), "number" == typeof n) for (; ++s < sB.length;) {
			let e = sB[s];
			o = this, a = sB[s], (u = (n & sO[e]) === sO[e]) && (o[a] = u);
		}
	}
};
function sH(e) {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e.properties)) {
		let l = new sU(r, e.transform(e.attributes || {}, r), i, e.space);
		e.mustUseProperty && e.mustUseProperty.includes(r) && (l.mustUseProperty = !0), t[r] = l, n[sL(r)] = r, n[sL(l.attribute)] = r;
	}
	return new sT(t, n, e.space);
}
sU.prototype.defined = !0;
let s$ = sH({
	properties: {
		ariaActiveDescendant: null,
		ariaAtomic: sF,
		ariaAutoComplete: null,
		ariaBusy: sF,
		ariaChecked: sF,
		ariaColCount: sR,
		ariaColIndex: sR,
		ariaColSpan: sR,
		ariaControls: sz,
		ariaCurrent: null,
		ariaDescribedBy: sz,
		ariaDetails: null,
		ariaDisabled: sF,
		ariaDropEffect: sz,
		ariaErrorMessage: null,
		ariaExpanded: sF,
		ariaFlowTo: sz,
		ariaGrabbed: sF,
		ariaHasPopup: null,
		ariaHidden: sF,
		ariaInvalid: null,
		ariaKeyShortcuts: null,
		ariaLabel: null,
		ariaLabelledBy: sz,
		ariaLevel: sR,
		ariaLive: null,
		ariaModal: sF,
		ariaMultiLine: sF,
		ariaMultiSelectable: sF,
		ariaOrientation: null,
		ariaOwns: sz,
		ariaPlaceholder: null,
		ariaPosInSet: sR,
		ariaPressed: sF,
		ariaReadOnly: sF,
		ariaRelevant: null,
		ariaRequired: sF,
		ariaRoleDescription: sz,
		ariaRowCount: sR,
		ariaRowIndex: sR,
		ariaRowSpan: sR,
		ariaSelected: sF,
		ariaSetSize: sR,
		ariaSort: null,
		ariaValueMax: sR,
		ariaValueMin: sR,
		ariaValueNow: sR,
		ariaValueText: null,
		role: null
	},
	transform: (e, t) => "role" === t ? t : "aria-" + t.slice(4).toLowerCase()
});
function sq(e, t) {
	return t in e ? e[t] : t;
}
function sW(e, t) {
	return sq(e, t.toLowerCase());
}
let sK = sH({
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
		accept: sN,
		acceptCharset: sz,
		accessKey: sz,
		action: null,
		allow: null,
		allowFullScreen: sP,
		allowPaymentRequest: sP,
		allowUserMedia: sP,
		alt: null,
		as: null,
		async: sP,
		autoCapitalize: null,
		autoComplete: sz,
		autoFocus: sP,
		autoPlay: sP,
		blocking: sz,
		capture: null,
		charSet: null,
		checked: sP,
		cite: null,
		className: sz,
		cols: sR,
		colSpan: null,
		content: null,
		contentEditable: sF,
		controls: sP,
		controlsList: sz,
		coords: sR | sN,
		crossOrigin: null,
		data: null,
		dateTime: null,
		decoding: null,
		default: sP,
		defer: sP,
		dir: null,
		dirName: null,
		disabled: sP,
		download: sI,
		draggable: sF,
		encType: null,
		enterKeyHint: null,
		fetchPriority: null,
		form: null,
		formAction: null,
		formEncType: null,
		formMethod: null,
		formNoValidate: sP,
		formTarget: null,
		headers: sz,
		height: sR,
		hidden: sI,
		high: sR,
		href: null,
		hrefLang: null,
		htmlFor: sz,
		httpEquiv: sz,
		id: null,
		imageSizes: null,
		imageSrcSet: null,
		inert: sP,
		inputMode: null,
		integrity: null,
		is: null,
		isMap: sP,
		itemId: null,
		itemProp: sz,
		itemRef: sz,
		itemScope: sP,
		itemType: sz,
		kind: null,
		label: null,
		lang: null,
		language: null,
		list: null,
		loading: null,
		loop: sP,
		low: sR,
		manifest: null,
		max: null,
		maxLength: sR,
		media: null,
		method: null,
		min: null,
		minLength: sR,
		multiple: sP,
		muted: sP,
		name: null,
		nonce: null,
		noModule: sP,
		noValidate: sP,
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
		open: sP,
		optimum: sR,
		pattern: null,
		ping: sz,
		placeholder: null,
		playsInline: sP,
		popover: null,
		popoverTarget: null,
		popoverTargetAction: null,
		poster: null,
		preload: null,
		readOnly: sP,
		referrerPolicy: null,
		rel: sz,
		required: sP,
		reversed: sP,
		rows: sR,
		rowSpan: sR,
		sandbox: sz,
		scope: null,
		scoped: sP,
		seamless: sP,
		selected: sP,
		shadowRootClonable: sP,
		shadowRootDelegatesFocus: sP,
		shadowRootMode: null,
		shape: null,
		size: sR,
		sizes: null,
		slot: null,
		span: sR,
		spellCheck: sF,
		src: null,
		srcDoc: null,
		srcLang: null,
		srcSet: null,
		start: sR,
		step: null,
		style: null,
		tabIndex: sR,
		target: null,
		title: null,
		translate: null,
		type: null,
		typeMustMatch: sP,
		useMap: null,
		value: sF,
		width: sR,
		wrap: null,
		writingSuggestions: null,
		align: null,
		aLink: null,
		archive: sz,
		axis: null,
		background: null,
		bgColor: null,
		border: sR,
		borderColor: null,
		bottomMargin: sR,
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
		compact: sP,
		declare: sP,
		event: null,
		face: null,
		frame: null,
		frameBorder: null,
		hSpace: sR,
		leftMargin: sR,
		link: null,
		longDesc: null,
		lowSrc: null,
		marginHeight: sR,
		marginWidth: sR,
		noResize: sP,
		noHref: sP,
		noShade: sP,
		noWrap: sP,
		object: null,
		profile: null,
		prompt: null,
		rev: null,
		rightMargin: sR,
		rules: null,
		scheme: null,
		scrolling: sF,
		standby: null,
		summary: null,
		text: null,
		topMargin: sR,
		valueType: null,
		version: null,
		vAlign: null,
		vLink: null,
		vSpace: sR,
		allowTransparency: null,
		autoCorrect: null,
		autoSave: null,
		disablePictureInPicture: sP,
		disableRemotePlayback: sP,
		prefix: null,
		property: null,
		results: sR,
		security: null,
		unselectable: null
	},
	space: "html",
	transform: sW
}), sG = sH({
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
		about: sj,
		accentHeight: sR,
		accumulate: null,
		additive: null,
		alignmentBaseline: null,
		alphabetic: sR,
		amplitude: sR,
		arabicForm: null,
		ascent: sR,
		attributeName: null,
		attributeType: null,
		azimuth: sR,
		bandwidth: null,
		baselineShift: null,
		baseFrequency: null,
		baseProfile: null,
		bbox: null,
		begin: null,
		bias: sR,
		by: null,
		calcMode: null,
		capHeight: sR,
		className: sz,
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
		descent: sR,
		diffuseConstant: sR,
		direction: null,
		display: null,
		dur: null,
		divisor: sR,
		dominantBaseline: null,
		download: sP,
		dx: null,
		dy: null,
		edgeMode: null,
		editable: null,
		elevation: sR,
		enableBackground: null,
		end: null,
		event: null,
		exponent: sR,
		externalResourcesRequired: null,
		fill: null,
		fillOpacity: sR,
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
		g1: sN,
		g2: sN,
		glyphName: sN,
		glyphOrientationHorizontal: null,
		glyphOrientationVertical: null,
		glyphRef: null,
		gradientTransform: null,
		gradientUnits: null,
		handler: null,
		hanging: sR,
		hatchContentUnits: null,
		hatchUnits: null,
		height: null,
		href: null,
		hrefLang: null,
		horizAdvX: sR,
		horizOriginX: sR,
		horizOriginY: sR,
		id: null,
		ideographic: sR,
		imageRendering: null,
		initialVisibility: null,
		in: null,
		in2: null,
		intercept: sR,
		k: sR,
		k1: sR,
		k2: sR,
		k3: sR,
		k4: sR,
		kernelMatrix: sj,
		kernelUnitLength: null,
		keyPoints: null,
		keySplines: null,
		keyTimes: null,
		kerning: null,
		lang: null,
		lengthAdjust: null,
		letterSpacing: null,
		lightingColor: null,
		limitingConeAngle: sR,
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
		mediaSize: sR,
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
		overlinePosition: sR,
		overlineThickness: sR,
		paintOrder: null,
		panose1: null,
		path: null,
		pathLength: sR,
		patternContentUnits: null,
		patternTransform: null,
		patternUnits: null,
		phase: null,
		ping: sz,
		pitch: null,
		playbackOrder: null,
		pointerEvents: null,
		points: null,
		pointsAtX: sR,
		pointsAtY: sR,
		pointsAtZ: sR,
		preserveAlpha: null,
		preserveAspectRatio: null,
		primitiveUnits: null,
		propagate: null,
		property: sj,
		r: null,
		radius: null,
		referrerPolicy: null,
		refX: null,
		refY: null,
		rel: sj,
		rev: sj,
		renderingIntent: null,
		repeatCount: null,
		repeatDur: null,
		requiredExtensions: sj,
		requiredFeatures: sj,
		requiredFonts: sj,
		requiredFormats: sj,
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
		specularConstant: sR,
		specularExponent: sR,
		spreadMethod: null,
		spacing: null,
		startOffset: null,
		stdDeviation: null,
		stemh: null,
		stemv: null,
		stitchTiles: null,
		stopColor: null,
		stopOpacity: null,
		strikethroughPosition: sR,
		strikethroughThickness: sR,
		string: null,
		stroke: null,
		strokeDashArray: sj,
		strokeDashOffset: null,
		strokeLineCap: null,
		strokeLineJoin: null,
		strokeMiterLimit: sR,
		strokeOpacity: sR,
		strokeWidth: null,
		style: null,
		surfaceScale: sR,
		syncBehavior: null,
		syncBehaviorDefault: null,
		syncMaster: null,
		syncTolerance: null,
		syncToleranceDefault: null,
		systemLanguage: sj,
		tabIndex: sR,
		tableValues: null,
		target: null,
		targetX: sR,
		targetY: sR,
		textAnchor: null,
		textDecoration: null,
		textRendering: null,
		textLength: null,
		timelineBegin: null,
		title: null,
		transformBehavior: null,
		type: null,
		typeOf: sj,
		to: null,
		transform: null,
		transformOrigin: null,
		u1: null,
		u2: null,
		underlinePosition: sR,
		underlineThickness: sR,
		unicode: null,
		unicodeBidi: null,
		unicodeRange: null,
		unitsPerEm: sR,
		values: null,
		vAlphabetic: sR,
		vMathematical: sR,
		vectorEffect: null,
		vHanging: sR,
		vIdeographic: sR,
		version: null,
		vertAdvY: sR,
		vertOriginX: sR,
		vertOriginY: sR,
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
		xHeight: sR,
		y: null,
		y1: null,
		y2: null,
		yChannelSelector: null,
		z: null,
		zoomAndPan: null
	},
	space: "svg",
	transform: sq
}), sQ = sH({
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
}), sZ = sH({
	attributes: { xmlnsxlink: "xmlns:xlink" },
	properties: {
		xmlnsXLink: null,
		xmlns: null
	},
	space: "xmlns",
	transform: sW
}), sX = sH({
	properties: {
		xmlBase: null,
		xmlLang: null,
		xmlSpace: null
	},
	space: "xml",
	transform: (e, t) => "xml:" + t.slice(3).toLowerCase()
}), sJ = {
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
var sY = /[A-Z]/g, s1 = /-[a-z]/g, s0 = /^data[-\w.:]+$/i;
function s2(e) {
	return "-" + e.toLowerCase();
}
function s5(e) {
	return e.charAt(1).toUpperCase();
}
let s4 = sE([
	s$,
	sK,
	sQ,
	sZ,
	sX
], "html"), s3 = sE([
	s$,
	sG,
	sQ,
	sZ,
	sX
], "svg");
var s6 = n((e, t) => {
	var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, r = /\n/g, i = /^\s*/, l = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, o = /^:\s*/, a = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, u = /^[;\s]*/, s = /^\s+|\s+$/g;
	function c(e) {
		return e ? e.replace(s, "") : "";
	}
	t.exports = function(e, t) {
		if ("string" != typeof e) throw TypeError("First argument must be a string");
		if (!e) return [];
		t = t || {};
		var s = 1, f = 1;
		function d(e) {
			var t = e.match(r);
			t && (s += t.length);
			var n = e.lastIndexOf("\n");
			f = ~n ? e.length - n : f + e.length;
		}
		function p() {
			var e = {
				line: s,
				column: f
			};
			return function(t) {
				return t.position = new h(e), y(i), t;
			};
		}
		function h(e) {
			this.start = e, this.end = {
				line: s,
				column: f
			}, this.source = t.source;
		}
		h.prototype.content = e;
		var m = [];
		function g(n) {
			var r = Error(t.source + ":" + s + ":" + f + ": " + n);
			if (r.reason = n, r.filename = t.source, r.line = s, r.column = f, r.source = e, t.silent) m.push(r);
			else throw r;
		}
		function y(t) {
			var n = t.exec(e);
			if (n) {
				var r = n[0];
				return d(r), e = e.slice(r.length), n;
			}
		}
		function b(e) {
			var t;
			for (e = e || []; t = x();) !1 !== t && e.push(t);
			return e;
		}
		function x() {
			var t = p();
			if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
				for (var n = 2; "" != e.charAt(n) && ("*" != e.charAt(n) || "/" != e.charAt(n + 1));) ++n;
				if (n += 2, "" === e.charAt(n - 1)) return g("End of comment missing");
				var r = e.slice(2, n - 2);
				return f += 2, d(r), e = e.slice(n), f += 2, t({
					type: "comment",
					comment: r
				});
			}
		}
		y(i);
		var k, w = [];
		for (b(w); k = function() {
			var e = p(), t = y(l);
			if (t) {
				if (x(), !y(o)) return g("property missing ':'");
				var r = y(a), i = e({
					type: "declaration",
					property: c(t[0].replace(n, "")),
					value: r ? c(r[0].replace(n, "")) : ""
				});
				return y(u), i;
			}
		}();) !1 !== k && (w.push(k), b(w));
		return w;
	};
}), s9 = n((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function(e, t) {
		let r = null;
		if (!e || "string" != typeof e) return r;
		let i = (0, n.default)(e), l = "function" == typeof t;
		return i.forEach((e) => {
			if ("declaration" !== e.type) return;
			let { property: n, value: i } = e;
			l ? t(n, i, e) : i && ((r = r || {})[n] = i);
		}), r;
	};
	var n = t(s6());
}), s8 = n((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = /^--[a-zA-Z0-9_-]+$/, n = /-([a-z])/g, r = /^[^-]+$/, i = /^-(webkit|moz|ms|o|khtml)-/, l = /^-(ms)-/, o = function(e, t) {
		return t.toUpperCase();
	}, a = function(e, t) {
		return "".concat(t, "-");
	};
	e.camelCase = function(e, u) {
		var s;
		return (void 0 === u && (u = {}), !(s = e) || r.test(s) || t.test(s)) ? e : (e = e.toLowerCase(), (e = u.reactCompat ? e.replace(l, a) : e.replace(i, a)).replace(n, o));
	};
}), s7 = n((e, t) => {
	var n = (e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	})(s9()), r = s8();
	function i(e, t) {
		var i = {};
		return e && "string" == typeof e && (0, n.default)(e, function(e, n) {
			e && n && (i[(0, r.camelCase)(e, t)] = n);
		}), i;
	}
	i.default = i, t.exports = i;
});
let ce = cn("end"), ct = cn("start");
function cn(e) {
	return function(t) {
		let n = t && t.position && t.position[e] || {};
		if ("number" == typeof n.line && n.line > 0 && "number" == typeof n.column && n.column > 0) return {
			line: n.line,
			column: n.column,
			offset: "number" == typeof n.offset && n.offset > -1 ? n.offset : void 0
		};
	};
}
var cr = class extends Error {
	constructor(e, t, n) {
		super(), "string" == typeof t && (n = t, t = void 0);
		let r = "", i = {}, l = !1;
		if (t && (i = "line" in t && "column" in t || "start" in t && "end" in t ? { place: t } : "type" in t ? {
			ancestors: [t],
			place: t.position
		} : { ...t }), "string" == typeof e ? r = e : !i.cause && e && (l = !0, r = e.message, i.cause = e), !i.ruleId && !i.source && "string" == typeof n) {
			let e = n.indexOf(":");
			-1 === e ? i.ruleId = n : (i.source = n.slice(0, e), i.ruleId = n.slice(e + 1));
		}
		if (!i.place && i.ancestors && i.ancestors) {
			let e = i.ancestors[i.ancestors.length - 1];
			e && (i.place = e.position);
		}
		let o = i.place && "start" in i.place ? i.place.start : i.place;
		this.ancestors = i.ancestors || void 0, this.cause = i.cause || void 0, this.column = o ? o.column : void 0, this.fatal = void 0, this.file = "", this.message = r, this.line = o ? o.line : void 0, this.name = aN(i.place) || "1:1", this.place = i.place || void 0, this.reason = this.message, this.ruleId = i.ruleId || void 0, this.source = i.source || void 0, this.stack = l && i.cause && "string" == typeof i.cause.stack ? i.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
	}
};
cr.prototype.file = "", cr.prototype.name = "", cr.prototype.reason = "", cr.prototype.message = "", cr.prototype.stack = "", cr.prototype.column = void 0, cr.prototype.line = void 0, cr.prototype.ancestors = void 0, cr.prototype.cause = void 0, cr.prototype.fatal = void 0, cr.prototype.place = void 0, cr.prototype.ruleId = void 0, cr.prototype.source = void 0;
var ci = t(s7()), cl = {}.hasOwnProperty, co = /* @__PURE__ */ new Map(), ca = /[A-Z]/g, cu = new Set([
	"table",
	"tbody",
	"thead",
	"tfoot",
	"tr"
]), cs = new Set(["td", "th"]), cc = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function cf(e, t) {
	var n, r, i, l;
	let o;
	if (!t || void 0 === t.Fragment) throw TypeError("Expected `Fragment` in options");
	let a = t.filePath || void 0;
	if (t.development) {
		if ("function" != typeof t.jsxDEV) throw TypeError("Expected `jsxDEV` in options when `development: true`");
		n = a, r = t.jsxDEV, o = function(e, t, i, l) {
			let o = Array.isArray(i.children), a = ct(e);
			return r(t, i, l, o, {
				columnNumber: a ? a.column - 1 : void 0,
				fileName: n,
				lineNumber: a ? a.line : void 0
			}, void 0);
		};
	} else {
		if ("function" != typeof t.jsx) throw TypeError("Expected `jsx` in production options");
		if ("function" != typeof t.jsxs) throw TypeError("Expected `jsxs` in production options");
		i = t.jsx, l = t.jsxs, o = function(e, t, n, r) {
			let o = Array.isArray(n.children) ? l : i;
			return r ? o(t, n, r) : o(t, n);
		};
	}
	let u = {
		Fragment: t.Fragment,
		ancestors: [],
		components: t.components || {},
		create: o,
		elementAttributeNameCase: t.elementAttributeNameCase || "react",
		evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
		filePath: a,
		ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
		passKeys: !1 !== t.passKeys,
		passNode: t.passNode || !1,
		schema: "svg" === t.space ? s3 : s4,
		stylePropertyNameCase: t.stylePropertyNameCase || "dom",
		tableCellAlignToStyle: !1 !== t.tableCellAlignToStyle
	}, s = cd(u, e, void 0);
	return s && "string" != typeof s ? s : u.create(e, u.Fragment, { children: s || void 0 }, void 0);
}
function cd(e, t, n) {
	return "element" === t.type ? function(e, t, n) {
		let r = e.schema;
		"svg" === t.tagName.toLowerCase() && "html" === r.space && (e.schema = s3), e.ancestors.push(t);
		let i = cg(e, t.tagName, !1), l = function(e, t) {
			let n, r, i = {};
			for (r in t.properties) if ("children" !== r && cl.call(t.properties, r)) {
				let l = function(e, t, n) {
					let r = function(e, t) {
						let n = sL(t), r = t, i = sM;
						if (n in e.normal) return e.property[e.normal[n]];
						if (n.length > 4 && "data" === n.slice(0, 4) && s0.test(t)) {
							if ("-" === t.charAt(4)) {
								let e = t.slice(5).replace(s1, s5);
								r = "data" + e.charAt(0).toUpperCase() + e.slice(1);
							} else {
								let e = t.slice(4);
								if (!s1.test(e)) {
									let n = e.replace(sY, s2);
									"-" !== n.charAt(0) && (n = "-" + n), t = "data" + n;
								}
							}
							i = sU;
						}
						return new i(r, t);
					}(e.schema, t);
					if (!(null == n || "number" == typeof n && Number.isNaN(n))) {
						if (Array.isArray(n) && (n = r.commaSeparated ? function(e, t) {
							let n = {};
							return ("" === e[e.length - 1] ? [...e, ""] : e).join((n.padRight ? " " : "") + "," + (!1 === n.padLeft ? "" : " ")).trim();
						}(n) : n.join(" ").trim()), "style" === r.property) {
							let t = "object" == typeof n ? n : function(e, t) {
								try {
									return (0, ci.default)(t, { reactCompat: !0 });
								} catch (n) {
									if (e.ignoreInvalidStyle) return {};
									let t = new cr("Cannot parse `style` attribute", {
										ancestors: e.ancestors,
										cause: n,
										ruleId: "style",
										source: "hast-util-to-jsx-runtime"
									});
									throw t.file = e.filePath || void 0, t.url = cc + "#cannot-parse-style-attribute", t;
								}
							}(e, String(n));
							return "css" === e.stylePropertyNameCase && (t = function(e) {
								let t, n = {};
								for (t in e) cl.call(e, t) && (n[function(e) {
									let t = e.replace(ca, cy);
									return "ms-" === t.slice(0, 3) && (t = "-" + t), t;
								}(t)] = e[t]);
								return n;
							}(t)), ["style", t];
						}
						return ["react" === e.elementAttributeNameCase && r.space ? sJ[r.property] || r.property : r.attribute, n];
					}
				}(e, r, t.properties[r]);
				if (l) {
					let [r, o] = l;
					e.tableCellAlignToStyle && "align" === r && "string" == typeof o && cs.has(t.tagName) ? n = o : i[r] = o;
				}
			}
			return n && ((i.style || (i.style = {}))["css" === e.stylePropertyNameCase ? "text-align" : "textAlign"] = n), i;
		}(e, t), o = cm(e, t);
		return cu.has(t.tagName) && (o = o.filter(function(e) {
			return "string" != typeof e || !("object" == typeof e ? "text" === e.type && sA(e.value) : sA(e));
		})), cp(e, l, i, t), ch(l, o), e.ancestors.pop(), e.schema = r, e.create(t, i, l, n);
	}(e, t, n) : "mdxFlowExpression" === t.type || "mdxTextExpression" === t.type ? function(e, t) {
		if (t.data && t.data.estree && e.evaluater) {
			let n = t.data.estree.body[0];
			return n.type, e.evaluater.evaluateExpression(n.expression);
		}
		cv(e, t.position);
	}(e, t) : "mdxJsxFlowElement" === t.type || "mdxJsxTextElement" === t.type ? function(e, t, n) {
		let r = e.schema;
		"svg" === t.name && "html" === r.space && (e.schema = s3), e.ancestors.push(t);
		let i = null === t.name ? e.Fragment : cg(e, t.name, !0), l = function(e, t) {
			let n = {};
			for (let r of t.attributes) if ("mdxJsxExpressionAttribute" === r.type) if (r.data && r.data.estree && e.evaluater) {
				let t = r.data.estree.body[0];
				t.type;
				let i = t.expression;
				i.type;
				let l = i.properties[0];
				l.type, Object.assign(n, e.evaluater.evaluateExpression(l.argument));
			} else cv(e, t.position);
			else {
				let i, l = r.name;
				if (r.value && "object" == typeof r.value) if (r.value.data && r.value.data.estree && e.evaluater) {
					let t = r.value.data.estree.body[0];
					t.type, i = e.evaluater.evaluateExpression(t.expression);
				} else cv(e, t.position);
				else i = null === r.value || r.value;
				n[l] = i;
			}
			return n;
		}(e, t), o = cm(e, t);
		return cp(e, l, i, t), ch(l, o), e.ancestors.pop(), e.schema = r, e.create(t, i, l, n);
	}(e, t, n) : "mdxjsEsm" === t.type ? function(e, t) {
		if (t.data && t.data.estree && e.evaluater) return e.evaluater.evaluateProgram(t.data.estree);
		cv(e, t.position);
	}(e, t) : "root" === t.type ? function(e, t, n) {
		let r = {};
		return ch(r, cm(e, t)), e.create(t, e.Fragment, r, n);
	}(e, t, n) : "text" === t.type ? t.value : void 0;
}
function cp(e, t, n, r) {
	"string" != typeof n && n !== e.Fragment && e.passNode && (t.node = r);
}
function ch(e, t) {
	if (t.length > 0) {
		let n = t.length > 1 ? t : t[0];
		n && (e.children = n);
	}
}
function cm(e, t) {
	let n = [], r = -1, i = e.passKeys ? /* @__PURE__ */ new Map() : co;
	for (; ++r < t.children.length;) {
		let l, o = t.children[r];
		if (e.passKeys) {
			let e = "element" === o.type ? o.tagName : "mdxJsxFlowElement" === o.type || "mdxJsxTextElement" === o.type ? o.name : void 0;
			if (e) {
				let t = i.get(e) || 0;
				l = e + "-" + t, i.set(e, t + 1);
			}
		}
		let a = cd(e, o, l);
		void 0 !== a && n.push(a);
	}
	return n;
}
function cg(e, t, n) {
	let r;
	if (n) if (t.includes(".")) {
		let e, n = t.split("."), i = -1;
		for (; ++i < n.length;) {
			let t = sC(n[i]) ? {
				type: "Identifier",
				name: n[i]
			} : {
				type: "Literal",
				value: n[i]
			};
			e = e ? {
				type: "MemberExpression",
				object: e,
				property: t,
				computed: !!(i && "Literal" === t.type),
				optional: !1
			} : t;
		}
		r = e;
	} else r = sC(t) && !/^[a-z]/.test(t) ? {
		type: "Identifier",
		name: t
	} : {
		type: "Literal",
		value: t
	};
	else r = {
		type: "Literal",
		value: t
	};
	if ("Literal" === r.type) {
		let t = r.value;
		return cl.call(e.components, t) ? e.components[t] : t;
	}
	if (e.evaluater) return e.evaluater.evaluateExpression(r);
	cv(e);
}
function cv(e, t) {
	let n = new cr("Cannot handle MDX estrees without `createEvaluater`", {
		ancestors: e.ancestors,
		place: t,
		ruleId: "mdx-estree",
		source: "hast-util-to-jsx-runtime"
	});
	throw n.file = e.filePath || void 0, n.url = cc + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function cy(e) {
	return "-" + e.toLowerCase();
}
function cb(e, t) {
	let n = t.referenceType, r = "]";
	if ("collapsed" === n ? r += "[]" : "full" === n && (r += "[" + (t.label || t.identifier) + "]"), "imageReference" === t.type) return [{
		type: "text",
		value: "![" + t.alt + r
	}];
	let i = e.all(t), l = i[0];
	l && "text" === l.type ? l.value = "[" + l.value : i.unshift({
		type: "text",
		value: "["
	});
	let o = i[i.length - 1];
	return o && "text" === o.type ? o.value += r : i.push({
		type: "text",
		value: r
	}), i;
}
function cx(e) {
	let t = e.spread;
	return null == t ? e.children.length > 1 : t;
}
function ck(e, t, n) {
	let r = 0, i = e.length;
	if (t) {
		let t = e.codePointAt(r);
		for (; 9 === t || 32 === t;) r++, t = e.codePointAt(r);
	}
	if (n) {
		let t = e.codePointAt(i - 1);
		for (; 9 === t || 32 === t;) i--, t = e.codePointAt(i - 1);
	}
	return i > r ? e.slice(r, i) : "";
}
let cw = {
	blockquote: function(e, t) {
		let n = {
			type: "element",
			tagName: "blockquote",
			properties: {},
			children: e.wrap(e.all(t), !0)
		};
		return e.patch(t, n), e.applyData(t, n);
	},
	break: function(e, t) {
		let n = {
			type: "element",
			tagName: "br",
			properties: {},
			children: []
		};
		return e.patch(t, n), [e.applyData(t, n), {
			type: "text",
			value: "\n"
		}];
	},
	code: function(e, t) {
		let n = t.value ? t.value + "\n" : "", r = {};
		t.lang && (r.className = ["language-" + t.lang]);
		let i = {
			type: "element",
			tagName: "code",
			properties: r,
			children: [{
				type: "text",
				value: n
			}]
		};
		return t.meta && (i.data = { meta: t.meta }), e.patch(t, i), i = {
			type: "element",
			tagName: "pre",
			properties: {},
			children: [i = e.applyData(t, i)]
		}, e.patch(t, i), i;
	},
	delete: function(e, t) {
		let n = {
			type: "element",
			tagName: "del",
			properties: {},
			children: e.all(t)
		};
		return e.patch(t, n), e.applyData(t, n);
	},
	emphasis: function(e, t) {
		let n = {
			type: "element",
			tagName: "em",
			properties: {},
			children: e.all(t)
		};
		return e.patch(t, n), e.applyData(t, n);
	},
	footnoteReference: function(e, t) {
		let n, r = "string" == typeof e.options.clobberPrefix ? e.options.clobberPrefix : "user-content-", i = String(t.identifier).toUpperCase(), l = oj(i.toLowerCase()), o = e.footnoteOrder.indexOf(i), a = e.footnoteCounts.get(i);
		void 0 === a ? (a = 0, e.footnoteOrder.push(i), n = e.footnoteOrder.length) : n = o + 1, a += 1, e.footnoteCounts.set(i, a);
		let u = {
			type: "element",
			tagName: "a",
			properties: {
				href: "#" + r + "fn-" + l,
				id: r + "fnref-" + l + (a > 1 ? "-" + a : ""),
				dataFootnoteRef: !0,
				ariaDescribedBy: ["footnote-label"]
			},
			children: [{
				type: "text",
				value: String(n)
			}]
		};
		e.patch(t, u);
		let s = {
			type: "element",
			tagName: "sup",
			properties: {},
			children: [u]
		};
		return e.patch(t, s), e.applyData(t, s);
	},
	heading: function(e, t) {
		let n = {
			type: "element",
			tagName: "h" + t.depth,
			properties: {},
			children: e.all(t)
		};
		return e.patch(t, n), e.applyData(t, n);
	},
	html: function(e, t) {
		if (e.options.allowDangerousHtml) {
			let n = {
				type: "raw",
				value: t.value
			};
			return e.patch(t, n), e.applyData(t, n);
		}
	},
	imageReference: function(e, t) {
		let n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
		if (!r) return cb(e, t);
		let i = {
			src: oj(r.url || ""),
			alt: t.alt
		};
		null !== r.title && void 0 !== r.title && (i.title = r.title);
		let l = {
			type: "element",
			tagName: "img",
			properties: i,
			children: []
		};
		return e.patch(t, l), e.applyData(t, l);
	},
	image: function(e, t) {
		let n = { src: oj(t.url) };
		null !== t.alt && void 0 !== t.alt && (n.alt = t.alt), null !== t.title && void 0 !== t.title && (n.title = t.title);
		let r = {
			type: "element",
			tagName: "img",
			properties: n,
			children: []
		};
		return e.patch(t, r), e.applyData(t, r);
	},
	inlineCode: function(e, t) {
		let n = {
			type: "text",
			value: t.value.replace(/\r?\n|\r/g, " ")
		};
		e.patch(t, n);
		let r = {
			type: "element",
			tagName: "code",
			properties: {},
			children: [n]
		};
		return e.patch(t, r), e.applyData(t, r);
	},
	linkReference: function(e, t) {
		let n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
		if (!r) return cb(e, t);
		let i = { href: oj(r.url || "") };
		null !== r.title && void 0 !== r.title && (i.title = r.title);
		let l = {
			type: "element",
			tagName: "a",
			properties: i,
			children: e.all(t)
		};
		return e.patch(t, l), e.applyData(t, l);
	},
	link: function(e, t) {
		let n = { href: oj(t.url) };
		null !== t.title && void 0 !== t.title && (n.title = t.title);
		let r = {
			type: "element",
			tagName: "a",
			properties: n,
			children: e.all(t)
		};
		return e.patch(t, r), e.applyData(t, r);
	},
	listItem: function(e, t, n) {
		let r = e.all(t), i = n ? function(e) {
			let t = !1;
			if ("list" === e.type) {
				t = e.spread || !1;
				let n = e.children, r = -1;
				for (; !t && ++r < n.length;) t = cx(n[r]);
			}
			return t;
		}(n) : cx(t), l = {}, o = [];
		if ("boolean" == typeof t.checked) {
			let e, n = r[0];
			n && "element" === n.type && "p" === n.tagName ? e = n : (e = {
				type: "element",
				tagName: "p",
				properties: {},
				children: []
			}, r.unshift(e)), e.children.length > 0 && e.children.unshift({
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
			}), l.className = ["task-list-item"];
		}
		let a = -1;
		for (; ++a < r.length;) {
			let e = r[a];
			(i || 0 !== a || "element" !== e.type || "p" !== e.tagName) && o.push({
				type: "text",
				value: "\n"
			}), "element" !== e.type || "p" !== e.tagName || i ? o.push(e) : o.push(...e.children);
		}
		let u = r[r.length - 1];
		u && (i || "element" !== u.type || "p" !== u.tagName) && o.push({
			type: "text",
			value: "\n"
		});
		let s = {
			type: "element",
			tagName: "li",
			properties: l,
			children: o
		};
		return e.patch(t, s), e.applyData(t, s);
	},
	list: function(e, t) {
		let n = {}, r = e.all(t), i = -1;
		for ("number" == typeof t.start && 1 !== t.start && (n.start = t.start); ++i < r.length;) {
			let e = r[i];
			if ("element" === e.type && "li" === e.tagName && e.properties && Array.isArray(e.properties.className) && e.properties.className.includes("task-list-item")) {
				n.className = ["contains-task-list"];
				break;
			}
		}
		let l = {
			type: "element",
			tagName: t.ordered ? "ol" : "ul",
			properties: n,
			children: e.wrap(r, !0)
		};
		return e.patch(t, l), e.applyData(t, l);
	},
	paragraph: function(e, t) {
		let n = {
			type: "element",
			tagName: "p",
			properties: {},
			children: e.all(t)
		};
		return e.patch(t, n), e.applyData(t, n);
	},
	root: function(e, t) {
		let n = {
			type: "root",
			children: e.wrap(e.all(t))
		};
		return e.patch(t, n), e.applyData(t, n);
	},
	strong: function(e, t) {
		let n = {
			type: "element",
			tagName: "strong",
			properties: {},
			children: e.all(t)
		};
		return e.patch(t, n), e.applyData(t, n);
	},
	table: function(e, t) {
		let n = e.all(t), r = n.shift(), i = [];
		if (r) {
			let n = {
				type: "element",
				tagName: "thead",
				properties: {},
				children: e.wrap([r], !0)
			};
			e.patch(t.children[0], n), i.push(n);
		}
		if (n.length > 0) {
			let r = {
				type: "element",
				tagName: "tbody",
				properties: {},
				children: e.wrap(n, !0)
			}, l = ct(t.children[1]), o = ce(t.children[t.children.length - 1]);
			l && o && (r.position = {
				start: l,
				end: o
			}), i.push(r);
		}
		let l = {
			type: "element",
			tagName: "table",
			properties: {},
			children: e.wrap(i, !0)
		};
		return e.patch(t, l), e.applyData(t, l);
	},
	tableCell: function(e, t) {
		let n = {
			type: "element",
			tagName: "td",
			properties: {},
			children: e.all(t)
		};
		return e.patch(t, n), e.applyData(t, n);
	},
	tableRow: function(e, t, n) {
		let r = n ? n.children : void 0, i = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", l = n && "table" === n.type ? n.align : void 0, o = l ? l.length : t.children.length, a = -1, u = [];
		for (; ++a < o;) {
			let n = t.children[a], r = {}, o = l ? l[a] : void 0;
			o && (r.align = o);
			let s = {
				type: "element",
				tagName: i,
				properties: r,
				children: []
			};
			n && (s.children = e.all(n), e.patch(n, s), s = e.applyData(n, s)), u.push(s);
		}
		let s = {
			type: "element",
			tagName: "tr",
			properties: {},
			children: e.wrap(u, !0)
		};
		return e.patch(t, s), e.applyData(t, s);
	},
	text: function(e, t) {
		let n = {
			type: "text",
			value: function(e) {
				let t = String(e), n = /\r?\n|\r/g, r = n.exec(t), i = 0, l = [];
				for (; r;) l.push(ck(t.slice(i, r.index), i > 0, !0), r[0]), i = r.index + r[0].length, r = n.exec(t);
				return l.push(ck(t.slice(i), i > 0, !1)), l.join("");
			}(String(t.value))
		};
		return e.patch(t, n), e.applyData(t, n);
	},
	thematicBreak: function(e, t) {
		let n = {
			type: "element",
			tagName: "hr",
			properties: {},
			children: []
		};
		return e.patch(t, n), e.applyData(t, n);
	},
	toml: cS,
	yaml: cS,
	definition: cS,
	footnoteDefinition: cS
};
function cS() {}
var cC = "object" == typeof self ? self : globalThis;
let c_ = (e) => ((e, t) => {
	let n = (t, n) => (e.set(n, t), t), r = (i) => {
		if (e.has(i)) return e.get(i);
		let [l, o] = t[i];
		switch (l) {
			case 0:
			case -1: return n(o, i);
			case 1: {
				let e = n([], i);
				for (let t of o) e.push(r(t));
				return e;
			}
			case 2: {
				let e = n({}, i);
				for (let [t, n] of o) e[r(t)] = r(n);
				return e;
			}
			case 3: return n(new Date(o), i);
			case 4: {
				let { source: e, flags: t } = o;
				return n(new RegExp(e, t), i);
			}
			case 5: {
				let e = n(/* @__PURE__ */ new Map(), i);
				for (let [t, n] of o) e.set(r(t), r(n));
				return e;
			}
			case 6: {
				let e = n(/* @__PURE__ */ new Set(), i);
				for (let t of o) e.add(r(t));
				return e;
			}
			case 7: {
				let { name: e, message: t } = o;
				return n(new cC[e](t), i);
			}
			case 8: return n(BigInt(o), i);
			case "BigInt": return n(Object(BigInt(o)), i);
			case "ArrayBuffer": return n(new Uint8Array(o).buffer, o);
			case "DataView": {
				let { buffer: e } = new Uint8Array(o);
				return n(new DataView(e), o);
			}
		}
		return n(new cC[l](o), i);
	};
	return r;
})(/* @__PURE__ */ new Map(), e)(0);
var { toString: cA } = {}, { keys: cT } = Object, cE = (e) => {
	let t = typeof e;
	if ("object" !== t || !e) return [0, t];
	let n = cA.call(e).slice(8, -1);
	switch (n) {
		case "Array": return [1, ""];
		case "Object": return [2, ""];
		case "Date": return [3, ""];
		case "RegExp": return [4, ""];
		case "Map": return [5, ""];
		case "Set": return [6, ""];
		case "DataView": return [1, n];
	}
	return n.includes("Array") ? [1, n] : n.includes("Error") ? [7, n] : [2, n];
}, cL = ([e, t]) => 0 === e && ("function" === t || "symbol" === t);
let cM = (e, { json: t, lossy: n } = {}) => {
	let r = [];
	return ((e, t, n, r) => {
		let i = (e, t) => {
			let i = r.push(e) - 1;
			return n.set(t, i), i;
		}, l = (r) => {
			if (n.has(r)) return n.get(r);
			let [o, a] = cE(r);
			switch (o) {
				case 0: {
					let t = r;
					switch (a) {
						case "bigint":
							o = 8, t = r.toString();
							break;
						case "function":
						case "symbol":
							if (e) throw TypeError("unable to serialize " + a);
							t = null;
							break;
						case "undefined": return i([-1], r);
					}
					return i([o, t], r);
				}
				case 1: {
					if (a) {
						let e = r;
						return "DataView" === a ? e = new Uint8Array(r.buffer) : "ArrayBuffer" === a && (e = new Uint8Array(r)), i([a, [...e]], r);
					}
					let e = [], t = i([o, e], r);
					for (let t of r) e.push(l(t));
					return t;
				}
				case 2: {
					if (a) switch (a) {
						case "BigInt": return i([a, r.toString()], r);
						case "Boolean":
						case "Number":
						case "String": return i([a, r.valueOf()], r);
					}
					if (t && "toJSON" in r) return l(r.toJSON());
					let n = [], u = i([o, n], r);
					for (let t of cT(r)) (e || !cL(cE(r[t]))) && n.push([l(t), l(r[t])]);
					return u;
				}
				case 3: return i([o, r.toISOString()], r);
				case 4: {
					let { source: e, flags: t } = r;
					return i([o, {
						source: e,
						flags: t
					}], r);
				}
				case 5: {
					let t = [], n = i([o, t], r);
					for (let [n, i] of r) (e || !(cL(cE(n)) || cL(cE(i)))) && t.push([l(n), l(i)]);
					return n;
				}
				case 6: {
					let t = [], n = i([o, t], r);
					for (let n of r) (e || !cL(cE(n))) && t.push(l(n));
					return n;
				}
			}
			let { message: u } = r;
			return i([o, {
				name: a,
				message: u
			}], r);
		};
		return l;
	})(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
};
var cO = "function" == typeof structuredClone ? (e, t) => t && ("json" in t || "lossy" in t) ? c_(cM(e, t)) : structuredClone(e) : (e, t) => c_(cM(e, t));
function cD(e, t) {
	let n = [{
		type: "text",
		value: "↩"
	}];
	return t > 1 && n.push({
		type: "element",
		tagName: "sup",
		properties: {},
		children: [{
			type: "text",
			value: String(t)
		}]
	}), n;
}
function cP(e, t) {
	return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
var cF = {}.hasOwnProperty, cI = {};
function cR(e, t) {
	e.position && (t.position = function(e) {
		let t = ct(e), n = ce(e);
		if (t && n) return {
			start: t,
			end: n
		};
	}(e));
}
function cz(e, t) {
	let n = t;
	if (e && e.data) {
		let t = e.data.hName, r = e.data.hChildren, i = e.data.hProperties;
		"string" == typeof t && ("element" === n.type ? n.tagName = t : n = {
			type: "element",
			tagName: t,
			properties: {},
			children: "children" in n ? n.children : [n]
		}), "element" === n.type && i && Object.assign(n.properties, cO(i)), "children" in n && n.children && null != r && (n.children = r);
	}
	return n;
}
function cN(e, t) {
	let n = [], r = -1;
	for (t && n.push({
		type: "text",
		value: "\n"
	}); ++r < e.length;) r && n.push({
		type: "text",
		value: "\n"
	}), n.push(e[r]);
	return t && e.length > 0 && n.push({
		type: "text",
		value: "\n"
	}), n;
}
function cj(e) {
	let t = 0, n = e.charCodeAt(t);
	for (; 9 === n || 32 === n;) t++, n = e.charCodeAt(t);
	return e.slice(t);
}
function cV(e, t) {
	let n = function(e, t) {
		var n, r;
		let i, l, o, a = t || cI, u = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), c = {
			all: function(e) {
				let t = [];
				if ("children" in e) {
					let n = e.children, r = -1;
					for (; ++r < n.length;) {
						let i = c.one(n[r], e);
						if (i) {
							if (r && "break" === n[r - 1].type && (Array.isArray(i) || "text" !== i.type || (i.value = cj(i.value)), !Array.isArray(i) && "element" === i.type)) {
								let e = i.children[0];
								e && "text" === e.type && (e.value = cj(e.value));
							}
							Array.isArray(i) ? t.push(...i) : t.push(i);
						}
					}
				}
				return t;
			},
			applyData: cz,
			definitionById: u,
			footnoteById: s,
			footnoteCounts: /* @__PURE__ */ new Map(),
			footnoteOrder: [],
			handlers: {
				...cw,
				...a.handlers
			},
			one: function(e, t) {
				let n = e.type, r = c.handlers[n];
				if (cF.call(c.handlers, n) && r) return r(c, e, t);
				if (c.options.passThrough && c.options.passThrough.includes(n)) {
					if ("children" in e) {
						let { children: t,...n } = e, r = cO(n);
						return r.children = c.all(e), r;
					}
					return cO(e);
				}
				return (c.options.unknownHandler || function(e, t) {
					let n = t.data || {}, r = "value" in t && !(cF.call(n, "hProperties") || cF.call(n, "hChildren")) ? {
						type: "text",
						value: t.value
					} : {
						type: "element",
						tagName: "div",
						properties: {},
						children: e.all(t)
					};
					return e.patch(t, r), e.applyData(t, r);
				})(c, e, t);
			},
			options: a,
			patch: cR,
			wrap: cN
		};
		return "function" == typeof (n = function(e) {
			if ("definition" === e.type || "footnoteDefinition" === e.type) {
				let t = "definition" === e.type ? u : s, n = String(e.identifier).toUpperCase();
				t.has(n) || t.set(n, e);
			}
		}) ? (l = void 0, o = n, i = r) : (l = n, o = r, i = void 0), aX(e, l, function(e, t) {
			let n = t[t.length - 1], r = n ? n.children.indexOf(e) : void 0;
			return o(e, r, n);
		}, i), c;
	}(e, t), r = n.one(e, void 0), i = function(e) {
		let t = "string" == typeof e.options.clobberPrefix ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || cD, r = e.options.footnoteBackLabel || cP, i = e.options.footnoteLabel || "Footnotes", l = e.options.footnoteLabelTagName || "h2", o = e.options.footnoteLabelProperties || { className: ["sr-only"] }, a = [], u = -1;
		for (; ++u < e.footnoteOrder.length;) {
			let i = e.footnoteById.get(e.footnoteOrder[u]);
			if (!i) continue;
			let l = e.all(i), o = String(i.identifier).toUpperCase(), s = oj(o.toLowerCase()), c = 0, f = [], d = e.footnoteCounts.get(o);
			for (; void 0 !== d && ++c <= d;) {
				f.length > 0 && f.push({
					type: "text",
					value: " "
				});
				let e = "string" == typeof n ? n : n(u, c);
				"string" == typeof e && (e = {
					type: "text",
					value: e
				}), f.push({
					type: "element",
					tagName: "a",
					properties: {
						href: "#" + t + "fnref-" + s + (c > 1 ? "-" + c : ""),
						dataFootnoteBackref: "",
						ariaLabel: "string" == typeof r ? r : r(u, c),
						className: ["data-footnote-backref"]
					},
					children: Array.isArray(e) ? e : [e]
				});
			}
			let p = l[l.length - 1];
			if (p && "element" === p.type && "p" === p.tagName) {
				let e = p.children[p.children.length - 1];
				e && "text" === e.type ? e.value += " " : p.children.push({
					type: "text",
					value: " "
				}), p.children.push(...f);
			} else l.push(...f);
			let h = {
				type: "element",
				tagName: "li",
				properties: { id: t + "fn-" + s },
				children: e.wrap(l, !0)
			};
			e.patch(i, h), a.push(h);
		}
		if (0 !== a.length) return {
			type: "element",
			tagName: "section",
			properties: {
				dataFootnotes: !0,
				className: ["footnotes"]
			},
			children: [
				{
					type: "element",
					tagName: l,
					properties: {
						...cO(o),
						id: "footnote-label"
					},
					children: [{
						type: "text",
						value: i
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
					children: e.wrap(a, !0)
				},
				{
					type: "text",
					value: "\n"
				}
			]
		};
	}(n), l = Array.isArray(r) ? {
		type: "root",
		children: r
	} : r || {
		type: "root",
		children: []
	};
	return i && l.children.push({
		type: "text",
		value: "\n"
	}, i), l;
}
var cB = n((e, t) => {
	t.exports = function() {
		var e = document.getSelection();
		if (!e.rangeCount) return function() {};
		for (var t = document.activeElement, n = [], r = 0; r < e.rangeCount; r++) n.push(e.getRangeAt(r));
		switch (t.tagName.toUpperCase()) {
			case "INPUT":
			case "TEXTAREA":
				t.blur();
				break;
			default: t = null;
		}
		return e.removeAllRanges(), function() {
			"Caret" === e.type && e.removeAllRanges(), e.rangeCount || n.forEach(function(t) {
				e.addRange(t);
			}), t && t.focus();
		};
	};
}), cU = {};
let cH = function(e, t, n) {
	let r = Promise.resolve();
	if (t && t.length > 0) {
		let e = document.getElementsByTagName("link"), i = document.querySelector("meta[property=csp-nonce]"), l = i?.nonce || i?.getAttribute("nonce");
		r = Promise.all(t.map((t) => {
			if ((t = "/__APP_BASE_HREF__/" + t) in cU) return;
			cU[t] = !0;
			let r = t.endsWith(".css");
			if (n) for (let n = e.length - 1; n >= 0; n--) {
				let i = e[n];
				if (i.href === t && (!r || "stylesheet" === i.rel)) return;
			}
			else if (document.querySelector(`link[href="${t}"]${r ? "[rel=\"stylesheet\"]" : ""}`)) return;
			let i = document.createElement("link");
			if (i.rel = r ? "stylesheet" : "modulepreload", r || (i.as = "script"), i.crossOrigin = "", i.href = t, l && i.setAttribute("nonce", l), document.head.appendChild(i), r) return new Promise((e, n) => {
				i.addEventListener("load", e), i.addEventListener("error", () => n(Error(`Unable to preload CSS for ${t}`)));
			});
		}).map((e) => Promise.resolve(e).then((e) => ({
			status: "fulfilled",
			value: e
		}), (e) => ({
			status: "rejected",
			reason: e
		}))));
	}
	function i(e) {
		let t = new Event("vite:preloadError", { cancelable: !0 });
		if (t.payload = e, window.dispatchEvent(t), !t.defaultPrevented) throw e;
	}
	return r.then((t) => {
		for (let e of t || []) "rejected" === e.status && i(e.reason);
		return e().catch(i);
	});
};
var c$ = (e) => e ? e.startsWith("//") ? `${location.protocol}${e}` : e.startsWith("/") ? `${location.origin}${e}` : e : location.origin, cq = r(() => {
	let e = op(), t = x.use(), n = h({
		paramsSerializer: p,
		transformRequestBody: d
	});
	console.log(c$(e.OPENAPI));
	let r = new URL(c$(e.OPENAPI));
	return a(u(n.request({
		method: "GET",
		url: r.toString(),
		inputs: null
	})), s((e) => {
		t.next((t) => {
			Object.assign(t, e.body), t.servers || (t.servers = [{ url: r.origin }]);
		});
	}), c()), () => iF(g, { children: [
		iI(y, {}),
		iI(m, { styles: oa }),
		iF(oh, {
			value: {
				name: e.name,
				description: od.description
			},
			children: [
				iI(y, {}),
				iI(m, { styles: oa }),
				iI(i, {})
			]
		})
	] });
}, { displayName: "App" }), cW = r(() => () => iI(b, {})), cK = l({
	history: o(new URL(document.querySelector("base")?.href ?? "/").pathname),
	routes: [{
		name: "operations",
		path: "/operations",
		component: () => cH(() => import("./webapp-openapi-playground-page.DCGEtERn.chunk.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12])),
		children: [{
			name: "operations-operationId",
			path: ":operationId",
			component: () => cH(() => import("./webapp-openapi-playground-page-operations.B4Xq0H-7.chunk.js"), __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10,11,12])),
			props: !0
		}],
		props: !0
	}, {
		name: "index",
		path: "/",
		component: cW,
		props: !0
	}]
});
((...e) => {
	let t = (F || (F = function(e, t) {
		var n;
		let r, i;
		ep().__VUE__ = !0;
		let { insert: l, remove: o, patchProp: a, createElement: u, createText: s, createComment: c, setText: f, setElementText: d, parentNode: p, nextSibling: h, setScopeId: m = z, insertStaticContent: g } = e, y = (e, t, n, r = null, i = null, l = null, o, a = null, u = !!t.dynamicChildren) => {
			if (e === t) return;
			e && !rD(e, t) && (r = ee(e), W(e, i, l, !0), e = null), -2 === t.patchFlag && (u = !1, t.dynamicChildren = null);
			let { type: s, ref: c, shapeFlag: f } = t;
			switch (s) {
				case r_:
					b(e, t, n, r);
					break;
				case rA:
					x(e, t, n, r);
					break;
				case rT:
					e ?? k(t, n, r, o);
					break;
				case rC:
					L(e, t, n, r, i, l, o, a, u);
					break;
				default: 1 & f ? w(e, t, n, r, i, l, o, a, u) : 6 & f ? M(e, t, n, r, i, l, o, a, u) : 64 & f ? s.process(e, t, n, r, i, l, o, a, u, el) : 128 & f && s.process(e, t, n, r, i, l, o, a, u, el);
			}
			null != c && i ? ny(c, e && e.ref, l, t || e, !t) : null == c && e && null != e.ref && ny(e.ref, null, l, e, !0);
		}, b = (e, t, n, r) => {
			if (null == e) l(t.el = s(t.children), n, r);
			else {
				let n = t.el = e.el;
				t.children !== e.children && f(n, t.children);
			}
		}, x = (e, t, n, r) => {
			null == e ? l(t.el = c(t.children || ""), n, r) : t.el = e.el;
		}, k = (e, t, n, r) => {
			[e.el, e.anchor] = g(e.children, t, n, r, e.el, e.anchor);
		}, w = (e, t, n, r, i, l, o, a, u) => {
			"svg" === t.type ? o = "svg" : "math" === t.type && (o = "mathml"), null == e ? S(t, n, r, i, l, o, a, u) : A(e, t, i, l, o, a, u);
		}, S = (e, t, n, r, i, o, s, c) => {
			var f, p;
			let h, m, { props: g, shapeFlag: y, transition: b, dirs: x } = e;
			if (h = e.el = u(e.type, o, g && g.is, g), 8 & y ? d(h, e.children) : 16 & y && _(e.children, h, null, r, i, ru(e, o), s, c), x && t0(e, null, r, "created"), C(h, e, e.scopeId, s, r), g) {
				for (let e in g) "value" === e || et(e) || a(h, e, null, g[e], o, r);
				"value" in g && a(h, "value", null, g.value, o), (m = g.onVnodeBeforeMount) && rV(m, r, e);
			}
			x && t0(e, null, r, "beforeMount");
			let k = (f = i, p = b, (!f || f && !f.pendingBranch) && p && !p.persisted);
			k && b.beforeEnter(h), l(h, t, n), ((m = g && g.onVnodeMounted) || k || x) && ra(() => {
				m && rV(m, r, e), k && b.enter(h), x && t0(e, null, r, "mounted");
			}, i);
		}, C = (e, t, n, r, i) => {
			if (n && m(e, n), r) for (let t = 0; t < r.length; t++) m(e, r[t]);
			if (i) {
				let n = i.subTree;
				if (t === n || n.type.__isSuspense && (n.ssContent === t || n.ssFallback === t)) {
					let t = i.vnode;
					C(e, t, t.scopeId, t.slotScopeIds, i.parent);
				}
			}
		}, _ = (e, t, n, r, i, l, o, a, u = 0) => {
			for (let s = u; s < e.length; s++) y(null, e[s] = a ? rN(e[s]) : rz(e[s]), t, n, r, i, l, o, a);
		}, A = (e, t, n, r, i, l, o) => {
			let u, s = t.el = e.el, { patchFlag: c, dynamicChildren: f, dirs: p } = t;
			c |= 16 & e.patchFlag;
			let h = e.props || I, m = t.props || I;
			if (n && rs(n, !1), (u = m.onVnodeBeforeUpdate) && rV(u, n, t, e), p && t0(t, e, n, "beforeUpdate"), n && rs(n, !0), (h.innerHTML && null == m.innerHTML || h.textContent && null == m.textContent) && d(s, ""), f ? T(e.dynamicChildren, f, s, n, r, ru(t, i), l) : o || j(e, t, s, null, n, r, ru(t, i), l, !1), c > 0) {
				if (16 & c) E(s, h, m, n, i);
				else if (2 & c && h.class !== m.class && a(s, "class", null, m.class, i), 4 & c && a(s, "style", h.style, m.style, i), 8 & c) {
					let e = t.dynamicProps;
					for (let t = 0; t < e.length; t++) {
						let r = e[t], l = h[r], o = m[r];
						(o !== l || "value" === r) && a(s, r, l, o, i, n);
					}
				}
				1 & c && e.children !== t.children && d(s, t.children);
			} else o || null != f || E(s, h, m, n, i);
			((u = m.onVnodeUpdated) || p) && ra(() => {
				u && rV(u, n, t, e), p && t0(t, e, n, "updated");
			}, r);
		}, T = (e, t, n, r, i, l, o) => {
			for (let a = 0; a < t.length; a++) {
				let u = e[a], s = t[a];
				y(u, s, u.el && (u.type === rC || !rD(u, s) || 198 & u.shapeFlag) ? p(u.el) : n, null, r, i, l, o, !0);
			}
		}, E = (e, t, n, r, i) => {
			if (t !== n) {
				if (t !== I) for (let l in t) et(l) || l in n || a(e, l, t[l], null, i, r);
				for (let l in n) {
					if (et(l)) continue;
					let o = n[l], u = t[l];
					o !== u && "value" !== l && a(e, l, u, o, i, r);
				}
				"value" in n && a(e, "value", t.value, n.value, i);
			}
		}, L = (e, t, n, r, i, o, a, u, c) => {
			let f = t.el = e ? e.el : s(""), d = t.anchor = e ? e.anchor : s(""), { patchFlag: p, dynamicChildren: h, slotScopeIds: m } = t;
			m && (u = u ? u.concat(m) : m), null == e ? (l(f, n, r), l(d, n, r), _(t.children || [], n, d, i, o, a, u, c)) : p > 0 && 64 & p && h && e.dynamicChildren ? (T(e.dynamicChildren, h, n, i, o, a, u), (null != t.key || i && t === i.subTree) && rc(e, t, !0)) : j(e, t, n, d, i, o, a, u, c);
		}, M = (e, t, n, r, i, l, o, a, u) => {
			t.slotScopeIds = a, null == e ? 512 & t.shapeFlag ? i.ctx.activate(t, n, r, o, u) : D(t, n, r, i, l, o, u) : P(e, t, u);
		}, D = (e, t, n, r, i, l, o) => {
			let a = e.component = function(e, t, n) {
				let r = e.type, i = (t ? t.appContext : e.appContext) || rB, l = {
					uid: rU++,
					vnode: e,
					type: r,
					parent: t,
					appContext: i,
					root: null,
					next: null,
					subTree: null,
					effect: null,
					update: null,
					job: null,
					scope: new ex(!0),
					render: null,
					proxy: null,
					exposed: null,
					exposeProxy: null,
					withProxy: null,
					provides: t ? t.provides : Object.create(i.provides),
					ids: t ? t.ids : [
						"",
						0,
						0
					],
					accessCache: null,
					renderCache: [],
					components: null,
					directives: null,
					propsOptions: function e(t, n, r = !1) {
						let i = r ? n7 : n.propsCache, l = i.get(t);
						if (l) return l;
						let o = t.props, a = {}, u = [], s = !1;
						if (!K(t)) {
							let i = (t) => {
								s = !0;
								let [r, i] = e(t, n, !0);
								B(a, r), i && u.push(...i);
							};
							!r && n.mixins.length && n.mixins.forEach(i), t.extends && i(t.extends), t.mixins && t.mixins.forEach(i);
						}
						if (!o && !s) return Z(t) && i.set(t, R), R;
						if (q(o)) for (let e = 0; e < o.length; e++) {
							let t = ei(o[e]);
							re(t) && (a[t] = I);
						}
						else if (o) for (let e in o) {
							let t = ei(e);
							if (re(t)) {
								let n = o[e], r = a[t] = q(n) || K(n) ? { type: n } : B({}, n), i = r.type, l = !1, s = !0;
								if (q(i)) for (let e = 0; e < i.length; ++e) {
									let t = i[e], n = K(t) && t.name;
									if ("Boolean" === n) {
										l = !0;
										break;
									}
									"String" === n && (s = !1);
								}
								else l = K(i) && "Boolean" === i.name;
								r[0] = l, r[1] = s, (l || $(r, "default")) && u.push(t);
							}
						}
						let c = [a, u];
						return Z(t) && i.set(t, c), c;
					}(r, i),
					emitsOptions: function e(t, n, r = !1) {
						let i = r ? ry : n.emitsCache, l = i.get(t);
						if (void 0 !== l) return l;
						let o = t.emits, a = {}, u = !1;
						if (!K(t)) {
							let i = (t) => {
								let r = e(t, n, !0);
								r && (u = !0, B(a, r));
							};
							!r && n.mixins.length && n.mixins.forEach(i), t.extends && i(t.extends), t.mixins && t.mixins.forEach(i);
						}
						return o || u ? (q(o) ? o.forEach((e) => a[e] = null) : B(a, o), Z(t) && i.set(t, a), a) : (Z(t) && i.set(t, null), null);
					}(r, i),
					emit: null,
					emitted: null,
					propsDefaults: I,
					inheritAttrs: r.inheritAttrs,
					ctx: I,
					data: I,
					props: I,
					attrs: I,
					slots: I,
					refs: I,
					setupState: I,
					setupContext: null,
					suspense: n,
					suspenseId: n ? n.pendingId : 0,
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
				return l.ctx = { _: l }, l.root = t ? t.root : l, l.emit = rv.bind(null, l), e.ce && e.ce(l), l;
			}(e, r, i);
			if (nk(e) && (a.ctx.renderer = el), function(e, t = !1, n = !1) {
				t && O(t);
				let { props: r, children: i } = e.vnode, l = rK(e);
				(function(e, t, n, r = !1) {
					let i = {}, l = n3();
					for (let n in e.propsDefaults = Object.create(null), n9(e, t, i, l), e.propsOptions[0]) n in i || (i[n] = void 0);
					n ? e.props = r ? i : tf(i) : e.type.props ? e.props = i : e.props = l, e.attrs = l;
				})(e, r, l, t);
				var o = n || t;
				let a = e.slots = n3();
				if (32 & e.vnode.shapeFlag) {
					let e = i._;
					e ? (ro(a, i, o), o && ef(a, "_", e, !0)) : ri(i, a);
				} else i && rl(e, i);
				l && function(e, t) {
					let n = e.type;
					e.accessCache = Object.create(null), e.proxy = new Proxy(e.ctx, nB);
					let { setup: r } = n;
					if (r) {
						var i;
						eP();
						let n = e.setupContext = r.length > 1 ? {
							attrs: new Proxy((i = e).attrs, rX),
							slots: i.slots,
							emit: i.emit,
							expose: (e) => {
								i.exposed = e || {};
							}
						} : null, l = rq(e), o = tR(r, e, 0, [e.props, n]), a = X(o);
						if (eF(), l(), (a || e.sp) && !nx(e) && ng(e), a) {
							if (o.then(rW, rW), t) return o.then((n) => {
								rQ(e, n, t);
							}).catch((t) => {
								tN(t, e, 0);
							});
							e.asyncDep = o;
						} else rQ(e, o, t);
					} else rZ(e, t);
				}(e, t), t && O(!1);
			}(a, !1, o), a.asyncDep) {
				if (i && i.registerDep(a, F, o), !e.el) {
					let r = a.subTree = rI(rA);
					x(null, r, t, n), e.placeholder = r.el;
				}
			} else F(a, e, t, n, i, l, o);
		}, P = (e, t, n) => {
			let r = t.component = e.component;
			if (function(e, t, n) {
				let { props: r, children: i, component: l } = e, { props: o, children: a, patchFlag: u } = t, s = l.emitsOptions;
				if (t.dirs || t.transition) return !0;
				if (!n || !(u >= 0)) return (!!i || !!a) && (!a || !a.$stable) || r !== o && (r ? !o || rS(r, o, s) : !!o);
				if (1024 & u) return !0;
				if (16 & u) return r ? rS(r, o, s) : !!o;
				if (8 & u) {
					let e = t.dynamicProps;
					for (let t = 0; t < e.length; t++) {
						let n = e[t];
						if (o[n] !== r[n] && !rb(s, n)) return !0;
					}
				}
				return !1;
			}(e, t, n)) if (r.asyncDep && !r.asyncResolved) return void N(r, t, n);
			else r.next = t, r.update();
			else t.el = e.el, r.vnode = t;
		}, F = (e, t, n, r, l, o, a) => {
			let u = () => {
				if (e.isMounted) {
					let t, { next: n, bu: r, u: i, parent: s, vnode: c } = e;
					{
						let t = function e(t) {
							let n = t.subTree.component;
							if (n) if (n.asyncDep && !n.asyncResolved) return n;
							else return e(n);
						}(e);
						if (t) {
							n && (n.el = c.el, N(e, n, a)), t.asyncDep.then(() => {
								e.isUnmounted || u();
							});
							return;
						}
					}
					let f = n;
					rs(e, !1), n ? (n.el = c.el, N(e, n, a)) : n = c, r && ec(r), (t = n.props && n.props.onVnodeBeforeUpdate) && rV(t, s, n, c), rs(e, !0);
					let d = rx(e), h = e.subTree;
					e.subTree = d, y(h, d, p(h.el), ee(h), e, l, o), n.el = d.el, null === f && function({ vnode: e, parent: t }, n) {
						for (; t;) {
							let r = t.subTree;
							if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e) (e = t.vnode).el = n, t = t.parent;
							else break;
						}
					}(e, d.el), i && ra(i, l), (t = n.props && n.props.onVnodeUpdated) && ra(() => rV(t, s, n, c), l);
				} else {
					let a, { el: u, props: s } = t, { bm: c, m: f, parent: d, root: p, type: h } = e, m = nx(t);
					if (rs(e, !1), c && ec(c), !m && (a = s && s.onVnodeBeforeMount) && rV(a, d, t), rs(e, !0), u && i);
					else {
						p.ce && !1 !== p.ce._def.shadowRoot && p.ce._injectChildStyle(h);
						let i = e.subTree = rx(e);
						y(null, i, n, r, e, l, o), t.el = i.el;
					}
					if (f && ra(f, l), !m && (a = s && s.onVnodeMounted)) {
						let e = t;
						ra(() => rV(a, d, e), l);
					}
					(256 & t.shapeFlag || d && nx(d.vnode) && 256 & d.vnode.shapeFlag) && e.a && ra(e.a, l), e.isMounted = !0, t = n = r = null;
				}
			};
			e.scope.on();
			let s = e.effect = new ew(u);
			e.scope.off();
			let c = e.update = s.run.bind(s), f = e.job = s.runIfDirty.bind(s);
			f.i = e, f.id = e.uid, s.scheduler = () => tK(f), rs(e, !0), c();
		}, N = (e, t, n) => {
			t.component = e;
			let r = e.vnode.props;
			e.vnode = t, e.next = null, function(e, t, n, r) {
				let { props: i, attrs: l, vnode: { patchFlag: o } } = e, a = ty(i), [u] = e.propsOptions, s = !1;
				if ((r || o > 0) && !(16 & o)) {
					if (8 & o) {
						let n = e.vnode.dynamicProps;
						for (let r = 0; r < n.length; r++) {
							let o = n[r];
							if (rb(e.emitsOptions, o)) continue;
							let c = t[o];
							if (u) if ($(l, o)) c !== l[o] && (l[o] = c, s = !0);
							else {
								let t = ei(o);
								i[t] = n8(u, a, t, c, e, !1);
							}
							else c !== l[o] && (l[o] = c, s = !0);
						}
					}
				} else {
					let r;
					for (let o in n9(e, t, i, l) && (s = !0), a) t && ($(t, o) || (r = eo(o)) !== o && $(t, r)) || (u ? n && (void 0 !== n[o] || void 0 !== n[r]) && (i[o] = n8(u, a, o, void 0, e, !0)) : delete i[o]);
					if (l !== a) for (let e in l) t && $(t, e) || (delete l[e], s = !0);
				}
				s && e$(e.attrs, "set", "");
			}(e, t.props, r, n), ((e, t, n) => {
				let { vnode: r, slots: i } = e, l = !0, o = I;
				if (32 & r.shapeFlag) {
					let e = t._;
					e ? n && 1 === e ? l = !1 : ro(i, t, n) : (l = !t.$stable, ri(t, i)), o = t;
				} else t && (rl(e, t), o = { default: 1 });
				if (l) for (let e in i) rt(e) || null != o[e] || delete i[e];
			})(e, t.children, n), eP(), tQ(e), eF();
		}, j = (e, t, n, r, i, l, o, a, u = !1) => {
			let s = e && e.children, c = e ? e.shapeFlag : 0, f = t.children, { patchFlag: p, shapeFlag: h } = t;
			if (p > 0) {
				if (128 & p) return void U(s, f, n, r, i, l, o, a, u);
				else if (256 & p) return void V(s, f, n, r, i, l, o, a, u);
			}
			8 & h ? (16 & c && Y(s, i, l), f !== s && d(n, f)) : 16 & c ? 16 & h ? U(s, f, n, r, i, l, o, a, u) : Y(s, i, l, !0) : (8 & c && d(n, ""), 16 & h && _(f, n, r, i, l, o, a, u));
		}, V = (e, t, n, r, i, l, o, a, u) => {
			let s;
			e = e || R, t = t || R;
			let c = e.length, f = t.length, d = Math.min(c, f);
			for (s = 0; s < d; s++) {
				let r = t[s] = u ? rN(t[s]) : rz(t[s]);
				y(e[s], r, n, null, i, l, o, a, u);
			}
			c > f ? Y(e, i, l, !0, !1, d) : _(t, n, r, i, l, o, a, u, d);
		}, U = (e, t, n, r, i, l, o, a, u) => {
			let s = 0, c = t.length, f = e.length - 1, d = c - 1;
			for (; s <= f && s <= d;) {
				let r = e[s], c = t[s] = u ? rN(t[s]) : rz(t[s]);
				if (rD(r, c)) y(r, c, n, null, i, l, o, a, u);
				else break;
				s++;
			}
			for (; s <= f && s <= d;) {
				let r = e[f], s = t[d] = u ? rN(t[d]) : rz(t[d]);
				if (rD(r, s)) y(r, s, n, null, i, l, o, a, u);
				else break;
				f--, d--;
			}
			if (s > f) {
				if (s <= d) {
					let e = d + 1, f = e < c ? t[e].el : r;
					for (; s <= d;) y(null, t[s] = u ? rN(t[s]) : rz(t[s]), n, f, i, l, o, a, u), s++;
				}
			} else if (s > d) for (; s <= f;) W(e[s], i, l, !0), s++;
			else {
				let p, h = s, m = s, g = /* @__PURE__ */ new Map();
				for (s = m; s <= d; s++) {
					let e = t[s] = u ? rN(t[s]) : rz(t[s]);
					null != e.key && g.set(e.key, s);
				}
				let b = 0, x = d - m + 1, k = !1, w = 0, S = Array(x);
				for (s = 0; s < x; s++) S[s] = 0;
				for (s = h; s <= f; s++) {
					let r, c = e[s];
					if (b >= x) {
						W(c, i, l, !0);
						continue;
					}
					if (null != c.key) r = g.get(c.key);
					else for (p = m; p <= d; p++) if (0 === S[p - m] && rD(c, t[p])) {
						r = p;
						break;
					}
					void 0 === r ? W(c, i, l, !0) : (S[r - m] = s + 1, r >= w ? w = r : k = !0, y(c, t[r], n, null, i, l, o, a, u), b++);
				}
				let C = k ? function(e) {
					let t, n, r, i, l, o = e.slice(), a = [0], u = e.length;
					for (t = 0; t < u; t++) {
						let u = e[t];
						if (0 !== u) {
							if (e[n = a[a.length - 1]] < u) {
								o[t] = n, a.push(t);
								continue;
							}
							for (r = 0, i = a.length - 1; r < i;) e[a[l = r + i >> 1]] < u ? r = l + 1 : i = l;
							u < e[a[r]] && (r > 0 && (o[t] = a[r - 1]), a[r] = t);
						}
					}
					for (r = a.length, i = a[r - 1]; r-- > 0;) a[r] = i, i = o[i];
					return a;
				}(S) : R;
				for (p = C.length - 1, s = x - 1; s >= 0; s--) {
					let e = m + s, f = t[e], d = t[e + 1], h = e + 1 < c ? d.el || d.placeholder : r;
					0 === S[s] ? y(null, f, n, h, i, l, o, a, u) : k && (p < 0 || s !== C[p] ? H(f, n, h, 2) : p--);
				}
			}
		}, H = (e, t, n, r, i = null) => {
			let { el: a, type: u, transition: s, children: c, shapeFlag: f } = e;
			if (6 & f) return void H(e.component.subTree, t, n, r);
			if (128 & f) return void e.suspense.move(t, n, r);
			if (64 & f) return void u.move(e, t, n, el);
			if (u === rC) {
				l(a, t, n);
				for (let e = 0; e < c.length; e++) H(c[e], t, n, r);
				l(e.anchor, t, n);
				return;
			}
			if (u === rT) return void (({ el: e, anchor: t }, n, r) => {
				let i;
				for (; e && e !== t;) i = h(e), l(e, n, r), e = i;
				l(t, n, r);
			})(e, t, n);
			if (2 !== r && 1 & f && s) if (0 === r) s.beforeEnter(a), l(a, t, n), ra(() => s.enter(a), i);
			else {
				let { leave: r, delayLeave: i, afterLeave: u } = s, c = () => {
					e.ctx.isUnmounted ? o(a) : l(a, t, n);
				}, f = () => {
					a._isLeaving && a[nr](!0), r(a, () => {
						c(), u && u();
					});
				};
				i ? i(a, c, f) : f();
			}
			else l(a, t, n);
		}, W = (e, t, n, r = !1, i = !1) => {
			let l, { type: o, props: a, ref: u, children: s, dynamicChildren: c, shapeFlag: f, patchFlag: d, dirs: p, cacheIndex: h } = e;
			if (-2 === d && (i = !1), null != u && (eP(), ny(u, null, n, e, !0), eF()), null != h && (t.renderCache[h] = void 0), 256 & f) return void t.ctx.deactivate(e);
			let m = 1 & f && p, g = !nx(e);
			if (g && (l = a && a.onVnodeBeforeUnmount) && rV(l, t, e), 6 & f) J(e.component, n, r);
			else {
				if (128 & f) return void e.suspense.unmount(n, r);
				m && t0(e, null, t, "beforeUnmount"), 64 & f ? e.type.remove(e, t, n, el, r) : c && !c.hasOnce && (o !== rC || d > 0 && 64 & d) ? Y(c, t, n, !1, !0) : (o === rC && 384 & d || !i && 16 & f) && Y(s, t, n), r && G(e);
			}
			(g && (l = a && a.onVnodeUnmounted) || m) && ra(() => {
				l && rV(l, t, e), m && t0(e, null, t, "unmounted");
			}, n);
		}, G = (e) => {
			let { type: t, el: n, anchor: r, transition: i } = e;
			if (t === rC) return void Q(n, r);
			if (t === rT) return void (({ el: e, anchor: t }) => {
				let n;
				for (; e && e !== t;) n = h(e), o(e), e = n;
				o(t);
			})(e);
			let l = () => {
				o(n), i && !i.persisted && i.afterLeave && i.afterLeave();
			};
			if (1 & e.shapeFlag && i && !i.persisted) {
				let { leave: t, delayLeave: r } = i, o = () => t(n, l);
				r ? r(e.el, l, o) : o();
			} else l();
		}, Q = (e, t) => {
			let n;
			for (; e !== t;) n = h(e), o(e), e = n;
			o(t);
		}, J = (e, t, n) => {
			let { bum: r, scope: i, job: l, subTree: o, um: a, m: u, a: s } = e;
			rf(u), rf(s), r && ec(r), i.stop(), l && (l.flags |= 8, W(o, e, t, n)), a && ra(a, t), ra(() => {
				e.isUnmounted = !0;
			}, t);
		}, Y = (e, t, n, r = !1, i = !1, l = 0) => {
			for (let o = l; o < e.length; o++) W(e[o], t, n, r, i);
		}, ee = (e) => {
			if (6 & e.shapeFlag) return ee(e.component.subTree);
			if (128 & e.shapeFlag) return e.suspense.next();
			let t = h(e.anchor || e.el), n = t && t[t2];
			return n ? h(n) : t;
		}, en = !1, er = (e, t, n) => {
			null == e ? t._vnode && W(t._vnode, null, null, !0) : y(t._vnode || null, e, t, null, null, null, n), t._vnode = e, en || (en = !0, tQ(), tZ(), en = !1);
		}, el = {
			p: y,
			um: W,
			m: H,
			r: G,
			mt: D,
			mc: _,
			pc: j,
			pbc: T,
			n: ee,
			o: e
		};
		return {
			render: er,
			hydrate: r,
			createApp: (n = r, function(e, t = null) {
				K(e) || (e = B({}, e)), null == t || Z(t) || (t = null);
				let r = nY(), i = /* @__PURE__ */ new WeakSet(), l = [], o = !1, a = r.app = {
					_uid: n1++,
					_component: e,
					_props: t,
					_container: null,
					_context: r,
					_instance: null,
					version: "3.5.22",
					get config() {
						return r.config;
					},
					set config(v) {},
					use: (e, ...t) => (i.has(e) || (e && K(e.install) ? (i.add(e), e.install(a, ...t)) : K(e) && (i.add(e), e(a, ...t))), a),
					mixin: (e) => (r.mixins.includes(e) || r.mixins.push(e), a),
					component: (e, t) => t ? (r.components[e] = t, a) : r.components[e],
					directive: (e, t) => t ? (r.directives[e] = t, a) : r.directives[e],
					mount(i, l, u) {
						if (!o) {
							let s = a._ceVNode || rI(e, t);
							return s.appContext = r, !0 === u ? u = "svg" : !1 === u && (u = void 0), l && n ? n(s, i) : er(s, i, u), o = !0, a._container = i, i.__vue_app__ = a, rJ(s.component);
						}
					},
					onUnmount(e) {
						l.push(e);
					},
					unmount() {
						o && (tz(l, a._instance, 16), er(null, a._container), delete a._container.__vue_app__);
					},
					provide: (e, t) => (r.provides[e] = t, a),
					runWithContext(e) {
						let t = n0;
						n0 = a;
						try {
							return e();
						} finally {
							n0 = t;
						}
					}
				};
				return a;
			})
		};
	}(iO))).createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		var r, i;
		let l = G(r = e) ? document.querySelector(r) : r;
		if (!l) return;
		let o = t._component;
		K(o) || o.render || o.template || (o.template = l.innerHTML), 1 === l.nodeType && (l.textContent = "");
		let a = n(l, !1, (i = l) instanceof SVGElement ? "svg" : "function" == typeof MathMLElement && i instanceof MathMLElement ? "mathml" : void 0);
		return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), a;
	}, t;
})(cq).use(cK).mount("#root");
export { it as $, lH as A, lp as B, lY as C, lj as D, l7 as E, lz as F, iY as G, ld as H, lb as I, iz as J, iJ as K, lg as L, lx as M, ly as N, lB as O, lv as P, iD as Q, lm as R, ot as S, l5 as T, i9 as U, lu as V, i1 as W, iI as X, iR as Y, iF as Z, oi as _, tf as _t, so as a, r1 as at, lQ as b, uv as c, nT as ct, l8 as d, nD as dt, rC as et, lK as f, n2 as ft, ol as g, tw as gt, or as h, tc as ht, cf as i, nm as it, lk as j, lU as k, aH as l, nO as lt, lq as m, tM as mt, cB as n, rR as nt, u8 as o, n5 as ot, oo as p, rp as pt, iQ as q, cV as r, rY as rt, uG as s, tW as st, cH as t, ne as tt, on as u, nE as ut, lW as v, tS as vt, l0 as w, lZ as x, l9 as y, tA as yt, lh as z };
